#!/usr/bin/env node

import { cac } from 'cac'
import { startPlayWriterCDPRelayServer } from './extension/cdp-relay.js'
import { createFileLogger } from './create-logger.js'
import { VERSION } from './utils.js'

const RELAY_PORT = 19988

const cli = cac('playwriter')

cli
  .command('', 'Start the MCP server (default)')
  .action(async () => {
    const { startMcp } = await import('./mcp.js')
    await startMcp()
  })

cli
  .command('serve', 'Start the CDP relay server for remote MCP connections')
  .option('--host <host>', 'Host to bind to', { default: '0.0.0.0' })
  .option('--token <token>', 'Authentication token for /cdp/* endpoints')
  .action(async (options: { host: string; token?: string }) => {
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
      token: options.token,
      logger,
    })

    console.log('Playwriter CDP relay server started')
    console.log(`  Host: ${options.host}`)
    console.log(`  Port: ${RELAY_PORT}`)
    console.log(`  Token: ${options.token ? '(configured)' : '(none)'}`)
    console.log(`  Logs: ${logger.logFilePath}`)
    console.log('')
    console.log('Endpoints:')
    console.log(`  Extension: ws://${options.host}:${RELAY_PORT}/extension`)
    console.log(`  CDP:       ws://${options.host}:${RELAY_PORT}/cdp/<client-id>${options.token ? '?token=<token>' : ''}`)
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
