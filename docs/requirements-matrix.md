# Requirements traceability (2026-10-30)

Statuses: **implemented and tested**, **implemented but untested**, **partial**, **not implemented**, **blocked**. The word tested requires actual execution evidence, not code inspection.

| Master prompt requirement | Implementation / evidence | Status | Next gate |
|---|---|---|---|
| M1 fresh repository and issue audit | `docs/repository-audit.md`, GitHub Issue #1 | implemented and tested | Reconfirm after merge |
| M1 architecture tradeoffs and native spike | `docs/architecture/ADR-001-android-host.md` | partial | Android SDK/NDK + compiled launch spike |
| M1 pinned PPSSPP candidate/source inspection | `docs/psp-integration.md`, `config/ppsspp-source-candidate.json` | partial | Full dependency and symbol audit; compile |
| M2 Android Capacitor host and identity | `docs/build.md` plan only | blocked | Android toolchain + native project |
| M2 bundled frontend first-install offline | Browser SW remains; native absent | not implemented | APK clean offline install |
| M3 embedded PPSSPP C++ / JNI / surface / audio | Source research only | blocked | Compile native engine, run actual Activity |
| M4 redistributable PSP homebrew and boot | None included | not implemented | Original/approved homebrew and gameplay |
| M5 touch gamepad pause native saves | Contracts only | not implemented | Device/runtime implementation |
| M5 original puzzle persistence | `src/persistence/puzzle.ts`, tests | implemented but untested | CI and browser smoke |
| M6 bilingual UI / RTL / theme | Existing app, improved AR empty-tile label | partial | Native menus, layout/a11y QA |
| M6 catalog from one source | `src/catalog/catalog.ts`, React grid | implemented but untested | CI/browser QA |
| M7 independent engine/capability contracts | `src/engines/types.ts`, `capabilities.ts` | partial | Actual native adapter and session transitions |
| M8 real hardware performance/16 KiB alignment | No APK | blocked | Real device and native images |
| M9 CI/unit tests | `tests/*.test.mjs`, web workflow | implemented but untested | CI run on this PR |
| M9 APK/release and legal source bundle | None | blocked | Runtime, licenses, device QA |
| M10 Windows/Web/iOS feasibility | `docs/compatibility.md` preliminary | partial | Dedicated investigations |
| Import/game customization and rights | `docs/game-customization.md`, `docs/licensing.md` | partial | Per-title legal records/import UI |
| No NAQLA dependency | Separate repository and identity planned | implemented and tested | Audit future Android package |
| Truthful final status | `docs/qa-report.md`, release checklist | partial | Update after all builds |

No PSP milestone is completed in this increment.
