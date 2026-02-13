/**
 * Cross-platform process termination for a TCP port.
 *
 * This mirrors the approach used by the `kill-port-process` npm package:
 * https://github.com/hilleer/kill-port-process
 *
 * Important fix (ported from https://github.com/hilleer/kill-port-process/pull/199):
 * do NOT pipe `xargs.stdout` into `process.stdin` (stdin is not writable and can
 * throw `dest.end is not a function`). We simply don't pipe `xargs` stdout.
 */

import { execFile, spawn } from 'node:child_process'
import os from 'node:os'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

export type KillPortSignal = 'SIGTERM' | 'SIGKILL'

function isValidPort(port: number): boolean {
  return Number.isInteger(port) && port > 0 && port <= 65535
}

function parsePids(output: string): number[] {
  const pids = output
    .split(/\r?\n/g)
    .map((line) => {
      return line.trim()
    })
    .filter((line) => {
      return Boolean(line)
    })
    .map((line) => {
      return Number(line)
    })
    .filter((pid) => {
      return Number.isInteger(pid) && pid > 0
    })

  return [...new Set(pids)]
}

function parseUnixLsofPids(stdout: string): number[] {
  const pids = stdout
    .split(/\r?\n/g)
    .map((line) => {
      return line.trim()
    })
    .filter((line) => {
      // lsof output starts with a header row; lines we care about contain LISTEN.
      return Boolean(line) && !line.startsWith('COMMAND') && line.includes('LISTEN')
    })
    .map((line) => {
      const columns = line.split(/\s+/g)
      // `awk '{print $2}'` in kill-port-process extracts PID from 2nd column.
      return Number(columns[1] || '')
    })
    .filter((pid) => {
      return Number.isInteger(pid) && pid > 0
    })

  return [...new Set(pids)]
}

function parseWindowsNetstatPids(output: string, port: number): number[] {
  const rows = output
    .split(/\r?\n/g)
    .map((line) => {
      return line.trim()
    })
    .filter((line) => {
      return line.startsWith('TCP')
    })

  const pids = rows
    .map((row) => {
      const columns = row.split(/\s+/g)
      const localAddress = columns[1] || ''
      const state = columns[3] || ''
      const pid = columns[4] || ''
      const endsWithPort = localAddress.endsWith(`:${port}`)
      if (!endsWithPort || state !== 'LISTENING') {
        return NaN
      }
      return Number(pid)
    })
    .filter((pid) => {
      return Number.isInteger(pid) && pid > 0
    })

  return [...new Set(pids)]
}

async function getPidsForPortWindows(port: number): Promise<number[]> {
  const powerShellScript = [
    "$ErrorActionPreference='SilentlyContinue'",
    `@(Get-NetTCPConnection -LocalPort ${port} -State Listen | Select-Object -ExpandProperty OwningProcess -Unique) -join [Environment]::NewLine`,
  ].join('; ')

  try {
    const { stdout } = await execFileAsync('powershell', ['-NoProfile', '-Command', powerShellScript])
    const pids = parsePids(stdout)
    if (pids.length > 0) {
      return pids
    }
  } catch {}

  try {
    const { stdout } = await execFileAsync('cmd', ['/d', '/s', '/c', 'netstat -ano -p tcp'])
    return parseWindowsNetstatPids(stdout, port)
  } catch {
    return []
  }
}

async function getPidsForPortUnix(port: number): Promise<number[]> {
  try {
    const { stdout } = await execFileAsync('lsof', ['-i', `tcp:${port}`])
    const pids = parseUnixLsofPids(stdout)
    if (pids.length > 0) {
      return pids
    }
  } catch {}

  // Fallback for Linux environments that may not have `lsof`.
  try {
    const { stdout } = await execFileAsync('fuser', [`${port}/tcp`])
    return parsePids(stdout)
  } catch {
    return []
  }
}

/**
 * Return PIDs (if any) that are currently LISTENing on the given TCP port.
 *
 * This is intentionally separate from killPortProcess(): callers sometimes need
 * to detect/diagnose EADDRINUSE before attempting to start a server.
 */
export async function getListeningPidsForPort({ port }: { port: number }): Promise<number[]> {
  if (!isValidPort(port)) {
    throw new Error(`Invalid port: ${port}`)
  }

  return os.platform() === 'win32'
    ? await getPidsForPortWindows(port)
    : await getPidsForPortUnix(port)
}

function toError(value: unknown): Error {
  if (value instanceof Error) {
    return value
  }
  return new Error(String(value))
}

async function terminatePidWindows(pid: number): Promise<void> {
  try {
    await execFileAsync('taskkill', ['/PID', String(pid), '/T', '/F'])
  } catch {}
}

async function unixKillPortUsingPipes({ port, signal }: { port: number; signal: KillPortSignal }): Promise<void> {
  const killCommand = signal === 'SIGTERM' ? '-15' : '-9'

  await new Promise<void>((resolve, reject) => {
    const lsof = spawn('lsof', ['-i', `tcp:${port}`], { stdio: ['ignore', 'pipe', 'pipe'] })
    const grep = spawn('grep', ['LISTEN'], { stdio: ['pipe', 'pipe', 'pipe'] })
    const awk = spawn('awk', ['{print $2}'], { stdio: ['pipe', 'pipe', 'pipe'] })
    const xargs = spawn('xargs', ['kill', killCommand], { stdio: ['pipe', 'ignore', 'pipe'] })

    if (!lsof.stdout || !grep.stdin || !grep.stdout || !awk.stdin || !awk.stdout || !xargs.stdin) {
      reject(new Error('Failed to create stdio pipes for kill-port process chain'))
      return
    }

    lsof.stdout.pipe(grep.stdin)
    grep.stdout.pipe(awk.stdin)
    awk.stdout.pipe(xargs.stdin)

    // IMPORTANT: do not pipe xargs stdout anywhere.

    const stderrChunks: string[] = []
    const collectStderr = (name: string, stream: NodeJS.ReadableStream | null) => {
      stream?.on('data', (data: unknown) => {
        const text = data instanceof Buffer ? data.toString() : String(data)
        stderrChunks.push(`${name} - ${text}`)
      })
    }

    collectStderr('lsof', lsof.stderr)
    collectStderr('grep', grep.stderr)
    collectStderr('awk', awk.stderr)
    collectStderr('xargs', xargs.stderr)

    const onError = (name: string) => {
      return (error: unknown) => {
        reject(new Error(`kill-port process error in ${name}`, { cause: toError(error) }))
      }
    }

    lsof.on('error', onError('lsof'))
    grep.on('error', onError('grep'))
    awk.on('error', onError('awk'))
    xargs.on('error', onError('xargs'))

    xargs.on('close', (code) => {
      if (code === 0) {
        resolve()
        return
      }

      const extra = stderrChunks.length > 0 ? `\n${stderrChunks.join('\n')}` : ''
      reject(new Error(`Failed to kill process on port ${port} (exit code ${code}).${extra}`))
    })
  })
}

/**
 * Kill any listening process bound to the provided TCP port.
 */
export async function killPortProcess({
  port,
  signal = 'SIGKILL',
}: {
  port: number
  signal?: KillPortSignal
}): Promise<void> {
  if (!isValidPort(port)) {
    throw new Error(`Invalid port: ${port}`)
  }

  if (os.platform() === 'win32') {
    const pids = await getListeningPidsForPort({ port })
    const currentPid = process.pid
    const targetPids = pids.filter((pid) => {
      return pid !== currentPid
    })
    await Promise.all(
      targetPids.map(async (pid) => {
        await terminatePidWindows(pid)
      }),
    )
    return
  }

  await unixKillPortUsingPipes({ port, signal })
}
