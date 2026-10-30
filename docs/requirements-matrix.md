# Requirements traceability (2026-10-30)

Statuses: **implemented and tested**, **implemented but untested**, **partial**, **not implemented**, **blocked**.

| Requirement | Implementation/evidence | Status | Remaining gate |
|---|---|---|---|
| M1 fresh repo/Issue #1 audit | `docs/repository-audit.md` | implemented and tested | Refresh after merge |
| M1 native architecture evaluation | `docs/architecture/ADR-001-android-host.md` | partial | Actual native spike |
| M1 PPSSPP source research | `docs/psp-integration.md` and candidate manifest | partial | Source checkout/compile/dependency audit |
| M2 Capacitor package/config and APK CI attempt | `capacitor.config.ts`, Android foundation workflow | implemented but untested | Verify CI outcome and APK contents |
| M2 real Android first-launch offline | No device test | blocked | Install APK offline and verify behavior |
| M3 embedded PPSSPP JNI, rendering, audio | None | blocked | Compile native module + Activity |
| M4 original/authorized PSP homebrew boot | No PSP homebrew bundled | not implemented | Rights, fixture, native launch |
| M5 touch/gamepad/pause/native saves | None | not implemented | PSP runtime and device |
| M5 original puzzle save validation | `src/persistence/puzzle.ts`, tests | implemented and tested | Real browser/localStorage smoke |
| M6 Arabic/English web UI and theme | Existing UI, improved labels | partial | Native menus, QA/accessibility |
| M6 one canonical catalog | `src/catalog/catalog.ts`, React grid | implemented and tested | Content manifest/import support |
| M7 engine contracts and capability gating | `src/engines/types.ts`, `capabilities.ts` | partial | Real adapters/session coordinator |
| M8 performance/16 KiB native compatibility | None | blocked | Native APK + device |
| M9 frontend CI/tests | GitHub run 41069035171 passed | implemented and tested | Add security/native/QA suites |
| M9 licensed signed PSP release | None | blocked | Runtime, QA, licenses/signing |
| M10 Windows/Web PSP/iOS | `docs/compatibility.md` research | partial | Separate platform spikes |
| No NAQLA dependency | Separate repository, independent app ID | partial | Validate generated APK |
| Import/mods/license notice gate | Documentation only | partial | Implementation and per-game rights |

A green frontend CI run does not prove Android installation, PSP gameplay, graphics, audio, input or saves.
