#!/usr/bin/env node

import { cac } from 'cac'
import { startPlayWriterCDPRelayServer } from './cdp-relay.js'
import { createFileLogger } from './create-logger.js'
import { VERSION } from './utils.js'

const RELAY_PORT = 19988

const cli = cac('playwriter')

cli
  .command('', 'Start the MCP server (default)')
  .option('--host <host>', 'Remote relay server host to connect to (or use PLAYWRITER_HOST env var)')
  .option('--token <token>', 'Authentication token (or use PLAYWRITER_TOKEN env var)')
  .action(async (options: { host?: string; token?: string }) => {
    const { startMcp } = await import('./mcp.js')
    await startMcp({
      host: options.host,
      token: options.token,
    })
  })

cli
  .command('serve', 'Start the CDP relay server for remote MCP connections')
  .option('--host <host>', 'Host to bind to', { default: '0.0.0.0' })
  .option('--token <token>', 'Authentication token (or use PLAYWRITER_TOKEN env var)')
  .action(async (options: { host: string; token?: string }) => {
    const token = options.token || process.env.PLAYWRITER_TOKEN
    if (!token) {
      console.error('Error: Authentication token is required.')
      console.error('Provide --token <token> or set PLAYWRITER_TOKEN environment variable.')
      process.exit(1)
    }

    // Check if server is already running on the port
    const net = await import('node:net')
    const isPortInUse = await new Promise<boolean>((resolve) => {
      const socket = new net.Socket()
      socket.setTimeout(500)
      socket.on('connect', () => {
        socket.destroy()
        resolve(true)
      })
      socket.on('timeout', () => {
        socket.destroy()
        resolve(false)
      })
      socket.on('error', () => {
        resolve(false)
      })
      socket.connect(RELAY_PORT, '127.0.0.1')
    })

    if (isPortInUse) {
      console.log(`Playwriter server is already running on port ${RELAY_PORT}`)
      process.exit(0)
    }

    const logger = createFileLogger()

    process.title = 'playwriter-serve'

    process.on('uncaughtException', async (err) => {
      await logger.error('Uncaught Exception:', err)
      process.exit(1)
    })

    process.on('unhandledRejection', async (reason) => {
      await logger.error('Unhandled Rejection:', reason)
      process.exit(1)
    })

    const server = await startPlayWriterCDPRelayServer({
      port: RELAY_PORT,
      host: options.host,
      token,
      logger,
    })

    console.log('Playwriter CDP relay server started')
    console.log(`  Host: ${options.host}`)
    console.log(`  Port: ${RELAY_PORT}`)
    console.log(`  Token: (configured)`)
    console.log(`  Logs: ${logger.logFilePath}`)
    console.log('')
    console.log('Endpoints:')
    console.log(`  Extension: ws://${options.host}:${RELAY_PORT}/extension`)
    console.log(`  CDP:       ws://${options.host}:${RELAY_PORT}/cdp/<client-id>?token=<token>`)
    console.log('')
    console.log('Press Ctrl+C to stop.')

    process.on('SIGINT', () => {
      console.log('\nShutting down...')
      server.close()
      process.exit(0)
    })

    process.on('SIGTERM', () => {
      console.log('\nShutting down...')
      server.close()
      process.exit(0)
    })
  })

cli.help()
cli.version(VERSION)

cli.parse()
