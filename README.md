# Retro Offline Games

Independent offline-ready bilingual game library, separate from NAQLA.

## Actual status (2026-10-30)
- Web app: React/TypeScript/Vite, Arabic and English, original sliding-number puzzle, theme and locally validated puzzle progress.
- Browser offline: service-worker caching after successful initial loading (not guaranteed on first web visit).
- Android: **foundation-only debug APK built successfully on GitHub Actions**, containing the web interface and original puzzle. Build success is not on-device installation/gameplay proof.
- **PSP emulation is NOT integrated.** There are no PSP ROMs, PPSSPP binaries, authorized bundled PSP game, JNI player, PSP saves or PSP-ready APK in the repository.
- A candidate PPSSPP v1.20.4 source revision and Android source entry points have been researched, but not compiled or embedded.

## Build the web app
Use Node 22+ and npm:

```bash
npm install
npm test
npm run build
npm run dev
```

## Android foundation (no PSP)
Capacitor 8 dependencies and configuration are in this repository; app ID is `com.retroofflinegames.app`. With a compatible installed Android SDK:

```bash
npm install
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew :app:assembleDebug
```

For Windows PowerShell, use `.\gradlew.bat :app:assembleDebug`. The generated `android/` folder is currently ignored and must be committed after native integration design/toolchain is validated.

GitHub Actions: `.github/workflows/android-foundation.yml` generates a **debug-signed foundation APK**, published under the run's Artifacts section with the explicit name `retro-offline-games-foundation-debug-no-psp`. This is **not** a production signed release. A physical first-launch offline install test is outstanding.

See [PR #2](https://github.com/3thelast-glitch/retro-offline-games/pull/2) and [Issue #1](https://github.com/3thelast-glitch/retro-offline-games/issues/1).

## Roadmap and architecture
- [Audit](docs/repository-audit.md), [requirements matrix](docs/requirements-matrix.md), [Android host decision](docs/architecture/ADR-001-android-host.md)
- [PPSSPP research](docs/psp-integration.md), [build evidence](docs/build.md), [QA](docs/qa-report.md)
- [Saves](docs/storage-and-saves.md), [customization](docs/game-customization.md), [licensing](docs/licensing.md), [release checklist](docs/release-checklist.md)

## Game rights
The app includes no proprietary ROM/ISO, game files taken from Lemon Web, firmware, or external emulator APK. Every future game requires independent rights/provenance review. A playable web page does not by itself authorize redistribution. PPSSPP itself is GPL-2.0-or-later, and distributing an integrated version requires a corresponding-source and license review.
