# Requirements traceability (2026-10-30)

Statuses: **implemented and tested**, **implemented but untested**, **partial**, **not implemented**, **blocked**.

| Requirement | Implementation/evidence | Status | Remaining gate |
|---|---|---|---|
| M1 repository/Issue #1 audit | `docs/repository-audit.md` | implemented and tested | Refresh after merge |
| M1 proposed native architecture | `docs/architecture/ADR-001-android-host.md` | partial | Native compiled/launch spike |
| M1 PPSSPP candidate source | `docs/psp-integration.md` and gitlinks manifest | partial | Clone/compile/integration |
| M2 Capacitor config/Android foundation APK | Android workflow run 41069512225 | partial | Physical fresh install offline validation |
| M2 same-APK real PSP game | No embedded engine | not implemented | M3 and M4 |
| M3 embedded PPSSPP JNI, surface/audio | No native module | blocked | PPSSPP build + Android toolchain |
| M4 licensed PSP homebrew and boot | None bundled | not implemented | Source, rights and real game boot |
| M5 native touch/gamepad/pause/saves | No native player | not implemented | M4 + device |
| M5 original puzzle persistence | `src/persistence/puzzle.ts`, CI tests | implemented and tested | Browser smoke/actual save round-trip |
| M6 bilingual UI/RTL/light theme | Existing React app | partial | Full UX/native menus QA |
| M6 single-source typed catalog | `src/catalog/catalog.ts`, unit tests | implemented and tested | Imports/metadata expansion |
| M7 abstract engine contract and truthful capability | `src/engines/*.ts`, tests | partial | Native adapter/session lifecycle |
| M8 16 KiB/performance/device compatibility | No native engine/device | blocked | Real ARM64 device testing |
| M9 web/unit + Android foundation CI | CI runs 41069512214 and 41069512225 | implemented and tested | APK install/instrumented tests |
| M9 licensed/production-signed PSP release | None | blocked | M3–M8 + legal/signing |
| M10 Windows/Web PSP/iOS | `docs/compatibility.md` research | partial | Separate platform spikes |
| No NAQLA dependence | Separate repo and chosen Android ID | partial | Inspect installed package |
| Licensing/customization/import | `docs/licensing.md` and `docs/game-customization.md` | partial | Rights matrix and import implementation |

A green Android Gradle build is *not* a PSP integration or gameplay result. This matrix distinguishes native foundation from real emulation.
