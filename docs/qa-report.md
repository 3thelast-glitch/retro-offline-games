# QA evidence — 2026-10-30

## Executed
- Connected GitHub API: verified repo/main HEAD and Issue #1, inspected source tree and read entry points.
- Upstream GitHub: verified v1.20.4 annotated tag, commit, 23 submodule gitlinks and several Android JNI/Activity entry points.
- Local environment diagnostics: Node v22.16.0, npm 10.9.2, OpenJDK 21, Git; network DNS failure; Android SDK/adb missing.
- Prior main web CI: passed, before this branch; https://github.com/3thelast-glitch/retro-offline-games/actions/runs/40941130178.

## New automated tests added, outcome pending CI
- Solvability, invalid/duplicate board validation, legal move behavior and generated puzzle validity.
- Catalog duplication, redistribution requirement and browser PSP unavailable reporting.
- Puzzle persistence, corrupt JSON, quota failures and invalid move count.

`npm test` / `npm run build` not executed locally against the new branch yet. Consult PR #2 workflow for results.

## Not tested
Android build/installation, PPSSPP JNI, real playable frames, audio/controllers, save states, offline first launch, CI APK artifact, 16 KiB alignment, 20 minute benchmark, 20 launch/exit cycles, fresh-install upgrade testing. Do not mark these passed.
