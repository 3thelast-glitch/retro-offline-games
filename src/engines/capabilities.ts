import type { CatalogEngine } from '../catalog/catalog.ts';
import type { EngineCapabilities } from './types.ts';

// This is a truthful browser capability probe, not a PSP emulator implementation.
export function browserCapabilities(engine: CatalogEngine): EngineCapabilities {
  if (engine === 'original-puzzle') {
    return { id: engine, available: true, platforms: ['web'], input: ['touch', 'keyboard'], saveKinds: ['original-progress'] };
  }
  return {
    id: engine, available: false, reason: 'ENGINE_UNAVAILABLE',
    platforms: [], input: [], saveKinds: []
  };
}
