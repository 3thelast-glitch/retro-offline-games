# Build instructions and observed status

## Existing web-only project
Node 22 (Node 22.16 or newer for `--experimental-strip-types` test runner), npm. Commands available in this branch:

```bash
npm install
npm test
npm run build
npm run preview
```

Windows PowerShell from repository directory uses the same `npm` commands.

No dependency lockfile has been generated in a clean network-enabled dependency installation yet. Current CI still uses `npm install` and is not reproducible to the standard required for release. Commit the reviewed lockfile, then migrate to `npm ci`.

## Native Android
**Not configured / not buildable in this increment.** There is currently no `android/` project, Gradle wrapper, Capacitor dependency, APK script, SDK/NDK pin, PPSSPP native code or bundled legal PSP content.

Do not run commands invented for nonexistent Gradle tasks. Intended next gated setup:
- Confirm Capacitor + Android SDK/NDK/JDK toolchain compatibility.
- Set Android app ID `com.retroofflinegames.app`; package offline assets with no remote server.
- Create native host and PPSSPP integration after compiling pinned upstream.
- Add reliable `android:debug` wrapper only when `gradlew tasks` reveals actual task names.
- Inspect generated APK ABI, assets, signature and 16 KiB compatibility; install/test on device.

## Executed environment diagnostics
`git --version` => 2.47.3; `node --version` => v22.16.0; `npm --version` => 10.9.2; `java -version` => OpenJDK 21.0.12. `git ls-remote` failed DNS for github.com in container. Local SDK/NDK/adb/Gradle missing.

Prior **baseline web workflow** success: https://github.com/3thelast-glitch/retro-offline-games/actions/runs/40941130178. New branch CI must be assessed separately. No Android artifacts exist.
