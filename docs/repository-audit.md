# Repository audit — 2026-10-30

## Scope and remote evidence
- Remote: https://github.com/3thelast-glitch/retro-offline-games
- Default branch: `main`
- Inspected base **commit**: `3ed4a8a41e50b0ea28d3cc285cca68842bbc2d2d`. This is a commit SHA, **not a tree SHA**.
- Changes prepared on `feat/psp-foundation-audit`; PR #2.
- Issue #1 remains open: actual in-APK PSP emulation with first-launch offline authorized content.
- Remote tree at baseline: `README.md`, React/TypeScript/Vite app, original sliding-puzzle source, bilingual translations, CSS, browser manifest and service worker, web-build workflow. No Android project, PPSSPP source, license root file, lockfile or tests in inspected baseline.
- No NAQLA code or resources found or used.

## Baseline behavior
The React application displayed a hardcoded single game card and a native React sliding puzzle. It persisted language and theme under `rog-lang` / `rog-theme` but did not persist puzzle progress. `public/game-catalog.json` existed but did not drive rendering. The browser service worker cached fetched resources, not first-install Android assets.

## Evidence and environment
- GitHub contents and Issue #1 were inspected through the connected GitHub API; repository push access confirmed.
- Existing main branch workflow `Web build` previously passed in run https://github.com/3thelast-glitch/retro-offline-games/actions/runs/40941130178 (prior to this branch).
- Local shell: `git version 2.47.3`, `node v22.16.0`, `npm 10.9.2`, `OpenJDK 21.0.12`, CMake and Ninja installed.
- Executed `git ls-remote https://github.com/3thelast-glitch/retro-offline-games.git HEAD`: failed `Could not resolve host: github.com` (local shell has no network).
- Android SDK, NDK, `adb`, Gradle, and physical Android devices were not available to this execution environment.
- Fresh local `npm install` / `npm run build` baseline unavailable because no network access and no complete dependency cache; **do not confuse historic CI success with this-run local validation**. Branch CI status is tracked separately.

## First implementation increment
- Introduced one typed catalog (`src/catalog/catalog.ts`) instead of stale JSON metadata.
- Added truthful engine capability model; no PSP emulator adapter is registered as playable.
- Added puzzle-state validation and best-effort local persistence; preserved `rog-lang` / `rog-theme`.
- Added Node unit tests and workflow commands.
- Deleted stale `public/game-catalog.json` to avoid two competing sources.

## Gaps and blockers
- Major: Android host and SDK/NDK unavailable; no native integration build, Activity, PPSSPP binaries, APK, authorized PSP homebrew, on-device gameplay, controller/audio validation or installation evidence.
- Missing release license decision and notices for a GPL-linked combined app.
- Source candidate inspected but NOT compiled or integrated; see `docs/psp-integration.md`.
- Native process lifecycle, save states, import/storage protection and 16 KiB native page alignment untested.
- Package-lock and reproducible Android toolchain pin pending network-enabled setup.
- Browser frontend can work offline **after** initial successful fetch/caching; fresh APK offline not yet possible.

## Evidence discipline
Do not call M2/M3/M4 complete until a built, installed, instrumented artifact proves those gates. Do not declare PlayStation Portable compatibility from type definitions, an empty Activity or emulator logo.
