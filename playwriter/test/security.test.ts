
import { describe, it, expect, afterEach } from 'vitest'
import { startPlayWriterCDPRelayServer } from '../src/cdp-relay.js'
import { WebSocket } from 'ws'
import { killPortProcess } from 'kill-port-process'
import { createFileLogger } from '../src/create-logger.js'

const TEST_PORT = 19999

async function killProcessOnPort(port: number): Promise<void> {
    try {
        await killPortProcess(port)
    } catch (err) {
        // Ignore if no process is running
    }
}

describe('Security Tests', () => {
    let server: any = null

    afterEach(async () => {
        if (server) {
            server.close()
            server = null
        }
        await killProcessOnPort(TEST_PORT)
    })

    it('should enforce token authentication for /cdp endpoint', async () => {
        const token = 'secret-token'
        const logger = createFileLogger()
        
        server = await startPlayWriterCDPRelayServer({
            port: TEST_PORT,
            token,
            logger
        })

        // Helper to try connecting
        const tryConnect = (tokenParam?: string) => {
            return new Promise<void>((resolve, reject) => {
                const url = `ws://127.0.0.1:${TEST_PORT}/cdp${tokenParam ? `?token=${tokenParam}` : ''}`
                const ws = new WebSocket(url)
                
                ws.on('open', () => {
                    ws.close()
                    resolve()
                })
                
                ws.on('error', (err) => {
                    reject(err)
                })

                 ws.on('unexpected-response', (req, res) => {
                    reject(new Error(`Unexpected response: ${res.statusCode}`))
                    ws.close()
                 })
            })
        }

        // 1. No token -> Should fail
        await expect(tryConnect()).rejects.toThrow(/Unexpected response: (400|401|403)/)

        // 2. Wrong token -> Should fail
        await expect(tryConnect('wrong-token')).rejects.toThrow(/Unexpected response: (400|401|403)/)

        // 3. Correct token -> Should succeed
        await expect(tryConnect(token)).resolves.not.toThrow()
    })

    it('should enforce localhost restrictions for /extension endpoint', async () => {
        const logger = createFileLogger()
        server = await startPlayWriterCDPRelayServer({
            port: TEST_PORT,
            logger
        })

        const tryConnectExtension = (origin?: string) => {
            return new Promise<void>((resolve, reject) => {
                const url = `ws://127.0.0.1:${TEST_PORT}/extension`
                const options = origin ? { headers: { Origin: origin } } : {}
                const ws = new WebSocket(url, options)

                ws.on('open', () => {
                    ws.close()
                    resolve()
                })

                ws.on('error', (err) => {
                    reject(err)
                })
                
                ws.on('unexpected-response', (req, res) => {
                    reject(new Error(`Unexpected response: ${res.statusCode}`))
                    ws.close()
                })
            })
        }

        // 1. Valid chrome-extension origin -> Should succeed
        // Use a valid extension ID from ALLOWED_EXTENSION_IDS in cdp-relay.ts
        await expect(tryConnectExtension('chrome-extension://jfeammnjpkecdekppnclgkkffahnhfhe')).resolves.not.toThrow()

        // 2. Invalid origin (e.g., http://evil.com) -> Should fail
        await expect(tryConnectExtension('http://evil.com')).rejects.toThrow(/Unexpected response: (400|401|403)/)
        
        // 3. No origin -> Should likely fail if strict checking is enabled, but typically extension connection requires specific origin handling. 
        // Based on implementation, usually it checks if it starts with chrome-extension://
        await expect(tryConnectExtension()).rejects.toThrow(/Unexpected response: (400|401|403)/)
    })
})
