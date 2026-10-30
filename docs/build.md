# Build, CI and artifact evidence — 2026-10-30

## Web commands
Requires Node 22+:

```bash
npm install
npm test
npm run build
npm run preview
```

Verified in GitHub Actions: https://github.com/3thelast-glitch/retro-offline-games/actions/runs/41069512214 — passed. No committed npm lockfile yet; review/install and commit one before claiming reproducibility.

## Android foundation (without PSP)
This repository includes Capacitor 8.0.0 configuration and app ID `com.retroofflinegames.app`. Android native project is generated at build time and `android/` remains ignored (not yet an integrated native source tree).

GitHub-hosted workflow ran:

```bash
npm install
npm test
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew :app:assembleDebug --stacktrace --no-daemon
```

CI success: https://github.com/3thelast-glitch/retro-offline-games/actions/runs/41069512225 (commit `b2922b2532ccac7e54e3320e695faf84d11db58d`). Artifact `retro-offline-games-foundation-debug-no-psp`, an **Android debug-signed foundation APK, not a PSP player and not release-signed**.

Verified artifact SHA-256 in the working environment after download: `145d33090e04bd283d23154dced553c76830838148c59bc1c4dda9c36669c626`. APK contains packaged frontend JS, CSS and index.html. No installed-device execution proof exists.

Equivalent PowerShell build after setting up an Android SDK:

```powershell
npm install
npm test
npm run build
npx cap add android
npx cap sync android
cd android
.\gradlew.bat :app:assembleDebug
```

Do not call the script `android:debug` until an actual native project and wrapper are committed. PPSSPP C++ runtime and authorized PSP homebrew are not included.

## Local execution environment
Git 2.47.3, Node 22.16.0, npm 10.9.2, JDK 21.0.12. Android SDK/NDK/adb unavailable, GitHub DNS failed in shell. Verification beyond CI needs a named physical arm64 Android device and exact installed artifact.
