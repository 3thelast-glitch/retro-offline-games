export interface BilingualText { ar: string; en: string }
export type CatalogEngine = 'original-puzzle' | 'ppsspp-native';
export interface CatalogGame {
  id: string;
  engine: CatalogEngine;
  name: BilingualText;
  description: BilingualText;
  supportedPlatforms: ('web' | 'android')[];
  inGameLanguages: ('ar' | 'en')[];
  rights: { origin: string; license: string; redistribution: 'project-original' | 'review-required' };
  // A playable engine is not implied merely by declaring its ID.
  bundled: boolean;
}

export function validateCatalog(games: readonly CatalogGame[]): void {
  const ids = new Set<string>();
  for (const game of games) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(game.id) || ids.has(game.id)) {
      throw new Error('Invalid or duplicate game id: ' + game.id);
    }
    ids.add(game.id);
    if (!['original-puzzle', 'ppsspp-native'].includes(game.engine)) {
      throw new Error('Unknown engine: ' + game.id);
    }
    if (!game.name.ar?.trim() || !game.name.en?.trim() ||
        !game.description.ar?.trim() || !game.description.en?.trim()) {
      throw new Error('Missing locale: ' + game.id);
    }
    if (!game.supportedPlatforms.length || !game.supportedPlatforms.every(p => ['web', 'android'].includes(p))) {
      throw new Error('Invalid platforms: ' + game.id);
    }
    if (!game.rights.origin || !game.rights.license) throw new Error('Missing provenance: ' + game.id);
    if (game.bundled && game.rights.redistribution === 'review-required') {
      throw new Error('Cannot bundle content without approved redistribution basis: ' + game.id);
    }
  }
}

export const GAME_CATALOG: readonly CatalogGame[] = [
  {
    id: 'sliding-puzzle',
    engine: 'original-puzzle',
    name: { ar: 'لغز الأرقام', en: 'Sliding Puzzle' },
    description: { ar: 'لعبة أصلية مدمجة', en: 'Original built-in puzzle' },
    supportedPlatforms: ['web', 'android'],
    inGameLanguages: ['ar', 'en'],
    rights: { origin: 'Application-owned original demo', license: 'NOASSERTION', redistribution: 'project-original' },
    bundled: true
  }
];
validateCatalog(GAME_CATALOG);
