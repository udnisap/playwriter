import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export function getCdpUrl({ port = 19988, host = '127.0.0.1', query }: { port?: number; host?: string; query?: string } = {}) {
  const id = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}`
  const queryString = query ? `?${query}` : ''
  return `ws://${host}:${port}/cdp/${id}${queryString}`
}

export const LOG_FILE_PATH = path.join(os.tmpdir(), 'playwriter', 'relay-server.log')

const packageJsonPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'package.json')
export const VERSION = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8')).version as string

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
