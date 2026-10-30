import React, { useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { createRoot } from 'react-dom/client';
import { translations, type Lang } from './i18n';
import { GAME_CATALOG } from './catalog/catalog';
import { browserCapabilities } from './engines/capabilities';
import { newBoard, nextBoard, solved } from './games/slidingPuzzle';
import { loadProgress, storeProgress } from './persistence/puzzle';
import './style.css';

type Theme = 'dark' | 'light';
function safeGet(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}
function safeSet(key: string, value: string): void {
  try { localStorage.setItem(key, value); } catch { /* Preferences remain in memory. */ }
}
const getLang = (): Lang => safeGet('rog-lang') === 'en' ? 'en' : 'ar';
const getTheme = (): Theme => safeGet('rog-theme') === 'light' ? 'light' : 'dark';
function restoredPuzzle() {
  try { return loadProgress(localStorage); } catch { return null; }
}

function App() {
  const [lang, setLang] = useState<Lang>(getLang);
  const [theme, setTheme] = useState<Theme>(getTheme);
  const [playing, setPlaying] = useState(false);
  const [initialProgress] = useState(restoredPuzzle);
  const [tiles, setTiles] = useState<number[]>(() => initialProgress?.board ?? newBoard());
  const [moves, setMoves] = useState(() => initialProgress?.moves ?? 0);
  const t = translations[lang];
  const isWon = solved(tiles);
  const game = GAME_CATALOG[0];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    safeSet('rog-lang', lang);
  }, [lang]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    safeSet('rog-theme', theme);
  }, [theme]);
  useEffect(() => {
    try { storeProgress(localStorage, tiles, moves); } catch { /* Private mode may deny storage. */ }
  }, [tiles, moves]);
  useEffect(() => {
    // Native packaging must use its own asset policy, not assume a browser service worker.
    if ('serviceWorker' in navigator && !Capacitor.isNativePlatform()) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  function move(index: number) {
    const next = nextBoard(tiles, index);
    if (next) { setTiles(next); setMoves(value => value + 1); }
  }
  function restart() { setTiles(newBoard()); setMoves(0); }

  return (
    <main className="shell">
      <header className="header">
        <div className="brand-icon" aria-hidden="true">◈</div>
        <strong>{t.brand}</strong>
        <div className="header-actions">
          <button className="secondary" type="button" onClick={() => setTheme(value => value === 'dark' ? 'light' : 'dark')}>
            {t.theme}: {theme === 'dark' ? t.dark : t.light}
          </button>
          <button className="secondary" type="button" onClick={() => setLang(value => value === 'ar' ? 'en' : 'ar')}>{t.language}</button>
        </div>
      </header>
      <section className="hero">
        <span className="eyebrow">RETRO OFFLINE GAMES · v0.1</span>
        <h1>{t.subtitle}</h1>
        <p>{t.offline}</p>
      </section>
      {!playing ? (
        <section aria-labelledby="library-title">
          <h2 id="library-title">{t.library}</h2>
          <div className="games">
            {GAME_CATALOG.filter(entry => entry.bundled && browserCapabilities(entry.engine).available).map(entry => (
              <article className="game-card" key={entry.id}>
                <div className="artwork" aria-hidden="true"><span>15</span><span>8</span><span>3</span><span>□</span></div>
                <div className="game-info">
                  <div><h3>{entry.name[lang]}</h3><p>{entry.description[lang]}</p></div>
                  <button className="primary" type="button" onClick={() => setPlaying(true)}>{t.play}</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="play" aria-label={game.name[lang]}>
          <div className="gamebar">
            <button className="secondary" type="button" onClick={() => setPlaying(false)}>{t.back}</button>
            <strong>{game.name[lang]}</strong>
            <span>{t.moves}: {moves}</span>
          </div>
          <p role="status">{isWon ? t.won : t.instructions}</p>
          <div className="puzzle" role="group" aria-label={game.name[lang]}>
            {tiles.map((number, index) => (
              <button
                key={index} type="button" className={number === 0 ? 'tile empty' : 'tile'}
                aria-label={number === 0 ? t.emptyTile : String(number)}
                disabled={number === 0 || isWon} onClick={() => move(index)}
              >{number || ''}</button>
            ))}
          </div>
          <p>{t.saving}</p>
          <button className="primary restart" type="button" onClick={restart}>{t.restart}</button>
        </section>
      )}
      <footer>{t.legal}</footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
