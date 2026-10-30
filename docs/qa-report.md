# QA evidence — 2026-10-30

## GitHub CI actually executed
- Prior main baseline web build: https://github.com/3thelast-glitch/retro-offline-games/actions/runs/40941130178 — success.
- New catalog/puzzle unit tests and Vite web build: https://github.com/3thelast-glitch/retro-offline-games/actions/runs/41069512214 — success on commit `b2922b2532ccac7e54e3320e695faf84d11db58d`.
- Capacitor Android foundation CI: https://github.com/3thelast-glitch/retro-offline-games/actions/runs/41069512225 — success on same commit. Job ran `npm install`, `npm test`, `npm run build`, `npx cap add android`, `npx cap sync android`, Gradle `:app:assembleDebug`, artifact existence check, then uploaded debug APK artifact.

## APK examined
- Artifact: `retro-offline-games-foundation-debug-no-psp` (GitHub Actions artifact 12984242206).
- Extracted APK: `app-debug.apk`, 4,176,408 bytes (size of prior run's artifact; re-extracted current artifact size should be checked before final signed report).
- SHA-256 of commit b2922b's downloaded debug APK: `145d33090e04bd283d23154dced553c76830838148c59bc1c4dda9c36669c626`.
- APK ZIP listing includes local `assets/public/index.html`, hashed JS and CSS, `assets/public/sw.js`, bundled web manifest; no PPSSPP runtime libraries or PSP game supplied.
- This validates **build/package presence only**. It does not validate installation, rendering on device, audible audio, offline first-run interaction or PSP gameplay.

## Tests added
- Puzzle solvability/duplicate detection/legal moves, generated valid unsolved boards, corrupt local persistence and quota failure.
- Catalog duplicate IDs, redistribution gate, capability model that declines PSP support.
- Browser/Android UX smoke, animation, screen-reader, performance, integrity/security, and offline first-launch **not run**.

## Not executed
Physical Android device installation or upgrade, PPSSPP JNI/engine boot, real emulated gameplay, sound/gamepads/touch, native saves and emulator states, 16 KiB-page alignment, long-run performance and release signing.

## Environment blockers
Local shell lacks Android SDK/NDK, Gradle/adb and internet DNS. GitHub-hosted CI can compile foundation APK, but cannot substitute for a named physical device with full test evidence.
