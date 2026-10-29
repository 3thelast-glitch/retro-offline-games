import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { translations, type Lang } from './i18n';
import { newBoard, nextBoard, solved } from './games/slidingPuzzle';
import './style.css';

type Theme = 'dark' | 'light';
const getLang = (): Lang => localStorage.getItem('rog-lang') === 'en' ? 'en' : 'ar';
const getTheme = (): Theme => localStorage.getItem('rog-theme') === 'light' ? 'light' : 'dark';

function App() {
  const [lang, setLang] = useState<Lang>(getLang);
  const [theme, setTheme] = useState<Theme>(getTheme);
  const [playing, setPlaying] = useState(false);
  const [tiles, setTiles] = useState<number[]>(() => newBoard());
  const [moves, setMoves] = useState(0);
  const t = translations[lang];
  const isWon = solved(tiles);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('rog-lang', lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('rog-theme', theme);
  }, [theme]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // The app remains usable online when service workers are unavailable.
      });
    }
  }, []);

  function move(index: number) {
    const next = nextBoard(tiles, index);
    if (next) {
      setTiles(next);
      setMoves(value => value + 1);
    }
  }

  function restart() {
    setTiles(newBoard());
    setMoves(0);
  }

  return (
    <main className="shell">
      <header className="header">
        <div className="brand-icon" aria-hidden="true">◈</div>
        <strong>{t.brand}</strong>
        <div className="header-actions">
          <button className="secondary" type="button" onClick={() => setTheme(value => value === 'dark' ? 'light' : 'dark')}>
            {t.theme}: {theme === 'dark' ? t.dark : t.light}
          </button>
          <button className="secondary" type="button" onClick={() => setLang(value => value === 'ar' ? 'en' : 'ar')}>
            {t.language}
          </button>
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
            <article className="game-card">
              <div className="artwork" aria-hidden="true"><span>15</span><span>8</span><span>3</span><span>□</span></div>
              <div className="game-info">
                <div><h3>{t.gameTitle}</h3><p>{t.gameDescription}</p></div>
                <button className="primary" type="button" onClick={() => setPlaying(true)}>{t.play}</button>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <section className="play" aria-label={t.gameTitle}>
          <div className="gamebar">
            <button className="secondary" type="button" onClick={() => setPlaying(false)}>{t.back}</button>
            <strong>{t.gameTitle}</strong>
            <span>{t.moves}: {moves}</span>
          </div>
          <p role="status">{isWon ? t.won : t.instructions}</p>
          <div className="puzzle" role="group" aria-label={t.gameTitle}>
            {tiles.map((number, index) => (
              <button
                key={index}
                type="button"
                className={number === 0 ? 'tile empty' : 'tile'}
                aria-label={number === 0 ? 'Empty tile' : String(number)}
                disabled={number === 0 || isWon}
                onClick={() => move(index)}
              >
                {number || ''}
              </button>
            ))}
          </div>
          <button className="primary restart" type="button" onClick={restart}>{t.restart}</button>
        </section>
      )}
      <footer>{t.legal}</footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
