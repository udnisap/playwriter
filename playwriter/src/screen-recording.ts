/**
 * Screen recording utility for playwriter using chrome.tabCapture.
 * Recording happens in the extension context, so it survives page navigation.
 * 
 * This module communicates with the relay server which forwards commands to the extension.
 * 
 * Note: Recording uses the first connected tab. Multi-tab recording support would require
 * proper sessionId mapping between Playwright pages and extension tabs.
 */

import type { Page } from 'playwright-core'
import type {
  StartRecordingResult,
  StopRecordingResult,
  IsRecordingResult,
  CancelRecordingResult,
} from './protocol.js'

export interface StartRecordingOptions {
  /** Target page to record (currently unused - records first connected tab) */
  page: Page
  /** Frame rate (default: 30) */
  frameRate?: number
  /** Video bitrate in bps (default: 2500000 = 2.5 Mbps) */
  videoBitsPerSecond?: number
  /** Audio bitrate in bps (default: 128000 = 128 kbps) */
  audioBitsPerSecond?: number
  /** Include audio from tab (default: false) */
  audio?: boolean
  /** Path to save the video file */
  outputPath: string
  /** Relay server port (default: 19988) */
  relayPort?: number
}

export interface StopRecordingOptions {
  /** Target page that is being recorded (currently unused) */
  page: Page
  /** Relay server port (default: 19988) */
  relayPort?: number
}

export interface RecordingState {
  isRecording: boolean
  startedAt?: number
  tabId?: number
}

/**
 * Start recording the page.
 * The recording is handled by the extension, so it survives page navigation.
 */
export async function startRecording(options: StartRecordingOptions): Promise<RecordingState> {
  const {
    frameRate = 30,
    videoBitsPerSecond = 2500000,
    audioBitsPerSecond = 128000,
    audio = false,
    outputPath,
    relayPort = 19988,
  } = options
  
  const response = await fetch(`http://127.0.0.1:${relayPort}/recording/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ frameRate, videoBitsPerSecond, audioBitsPerSecond, audio, outputPath }),
  })

  const result = await response.json() as StartRecordingResult

  if (!result.success) {
    throw new Error(`Failed to start recording: ${result.error}`)
  }

  return {
    isRecording: true,
    startedAt: result.startedAt,
    tabId: result.tabId,
  }
}

/**
 * Stop recording and save to file.
 * Returns the path to the saved video file.
 */
export async function stopRecording(options: StopRecordingOptions): Promise<{ path: string; duration: number; size: number }> {
  const { relayPort = 19988 } = options

  const response = await fetch(`http://127.0.0.1:${relayPort}/recording/stop`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  })

  const result = await response.json() as StopRecordingResult

  if (!result.success) {
    throw new Error(`Failed to stop recording: ${result.error}`)
  }

  return { path: result.path, duration: result.duration, size: result.size }
}

/**
 * Check if recording is currently active.
 */
export async function isRecording(options: { page: Page; relayPort?: number }): Promise<RecordingState> {
  const { relayPort = 19988 } = options

  const response = await fetch(`http://127.0.0.1:${relayPort}/recording/status`)
  const result = await response.json() as IsRecordingResult

  return { isRecording: result.isRecording, startedAt: result.startedAt, tabId: result.tabId }
}

/**
 * Cancel recording without saving.
 */
export async function cancelRecording(options: { page: Page; relayPort?: number }): Promise<void> {
  const { relayPort = 19988 } = options

  const response = await fetch(`http://127.0.0.1:${relayPort}/recording/cancel`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  })

  const result = await response.json() as CancelRecordingResult

  if (!result.success) {
    throw new Error(`Failed to cancel recording: ${result.error}`)
  }
}
