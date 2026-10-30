import type { CatalogEngine } from '../catalog/catalog.ts';

export type SessionState = 'idle' | 'preparing' | 'starting' | 'running' | 'paused' | 'stopping' | 'failed';
export type SaveKind = 'original-progress' | 'psp-in-game' | 'emulator-state';
export type EngineErrorCode = 'ENGINE_UNAVAILABLE' | 'ABI_UNSUPPORTED' | 'CONTENT_MISSING' |
  'CONTENT_INVALID' | 'FORMAT_UNSUPPORTED' | 'INSUFFICIENT_STORAGE' |
  'SURFACE_INIT_FAILED' | 'SAVE_INCOMPATIBLE' | 'SESSION_INTERRUPTED' | 'INVALID_SESSION';

export interface EngineError {
  code: EngineErrorCode;
  messageKey: string;
  recoverable: boolean;
}
export interface EngineCapabilities {
  id: CatalogEngine;
  available: boolean;
  reason?: EngineErrorCode;
  platforms: ('web' | 'android')[];
  input: ('touch' | 'keyboard' | 'gamepad')[];
  saveKinds: SaveKind[];
}
export interface SessionSnapshot {
  protocolVersion: 1;
  sessionId: string | null;
  state: SessionState;
  revision: number;
}
export interface PreparedGame { gameId: string; engine: CatalogEngine; opaqueToken: string }
export interface EngineAdapter {
  getCapabilities(): Promise<EngineCapabilities>;
  initialize(): Promise<void>;
  loadGame(gameId: string): Promise<PreparedGame>;
  launch(prepared: PreparedGame): Promise<SessionSnapshot>;
  pause(sessionId: string, reason: string): Promise<SessionSnapshot>;
  resume(sessionId: string): Promise<SessionSnapshot>;
  exit(sessionId: string): Promise<SessionSnapshot>;
  getSessionSnapshot(): Promise<SessionSnapshot>;
  cleanup(): Promise<void>;
}
