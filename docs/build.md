# Build instructions and observed status

## Web project
Node.js 22+ and npm, from repository root:

```bash
npm install
npm test
npm run build
npm run preview
```

Existing GitHub Actions web CI has passed for the typed catalog/puzzle tests and Vite build: https://github.com/3thelast-glitch/retro-offline-games/actions/runs/41069035171.

A reviewed `package-lock.json` has not yet been generated and committed; `npm install` is still used rather than reproducible `npm ci`. Pin the lockfile in a network-enabled workspace.

## Capacitor Android foundation experimental CI
The branch now contains `capacitor.config.ts` with app ID `com.retroofflinegames.app` and pinned `@capacitor/*` 8.0.0 dependencies. Workflow `.github/workflows/android-foundation.yml` attempts these build steps on GitHub-hosted Ubuntu:

```bash
npm install
npm test
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew :app:assembleDebug --stacktrace --no-daemon
```

The Android project is generated on CI from the pinned Capacitor package and excluded from git, currently a **foundation-only experiment**. It will **not contain PSP emulation** even if APK build succeeds. The workflow verifies the debug APK exists and uploads it as `retro-offline-games-foundation-debug-no-psp`.

Windows equivalent in a network-enabled Android SDK environment:

```powershell
npm install
npm test
npm run build
npx cap add android
npx cap sync android
cd android
.\gradlew.bat :app:assembleDebug
```

Do not call an APK build an install or first-launch offline test. For release engineering, commit the generated native project and lockfile after validating Gradle/SDK/NDK versions, then add native runtime and device testing.

## Local environment findings
Local execution shell: `git 2.47.3`, `node v22.16.0`, `npm 10.9.2`, `OpenJDK 21.0.12`. No local Android SDK, NDK, adb or usable network DNS (`git ls-remote` failed to resolve `github.com`). Android work depends on CI and subsequent device validation.
