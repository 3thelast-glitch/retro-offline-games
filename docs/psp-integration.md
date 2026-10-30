# PPSSPP integration research (not implemented)

Research date: 2026-10-30. Upstream: https://github.com/hrydgard/ppsspp

## Candidate source revision
- Official stable candidate tag: `v1.20.4` (released 2026-05-16).
- Annotated tag SHA: `3a31057b7e44270b4d5cef8c31b6559d51802a3b`.
- Peeled commit SHA: `fa50bb1976065c4f8b1b47af227d367fe9771555`.
- Commit's actual tree SHA: `d76acd887f4202ab78bf87cc926c8c9b17e0728c`.
- Candidate upstream submodule gitlinks documented in `config/ppsspp-source-candidate.json`.
- NOT cloned in a native build, integrated, patched or compiled. No Android PPSSPP runtime currently works in this project.

## Verified source declarations at candidate tag
| Operation | Source-level observation | Status |
|---|---|---|
| Load native library | `android/src/org/ppsspp/ppsspp/PpssppActivity.java:177` loads `ppsspp_jni` | Declaration inspected; runtime untested |
| Native initialization | `NativeApp.java:32` `init(...)`; `PpssppActivity.java:500` invokes it | Source inspected only |
| Audio init/shutdown | `NativeApp.java:33-35` | Backend/lifecycle untested |
| Pause/resume/shutdown | `NativeApp.java:52-55`, Activity lifecycle methods | Runtime ownership untested |
| Touch/key/axes | `NativeApp.java:57-66` | Real multi-touch/controller handling untested |
| Native render | `PpssppActivity.java:669-671` Vulkan render loop declarations | GL/Vulkan setup untested |
| Messages | `NativeApp.java:72` `sendMessageFromJava` | Not a public embedding API |
| Touch view | `NativeSurfaceView.java` forwards events to `NativeApp.processTouchEvent` | Source inspected only |

`NativeSurfaceManager.java`, named in preparation notes, was not found under that path at v1.20.4 and must not be assumed to exist.

## Integration gated work
1. Obtain exact recursive source commit/submodules in Android-capable environment; check upstream build and third-party notices.
2. Compile official Android PPSSPP build first; then experiment with internal same-package Activity and native module.
3. Implement trusted game loading, surface lifecycle, input, audio, session state and shutdown; verify actual source symbols and thread ownership.
4. Bundle authorized PSP homebrew with SHA-256 and rights evidence; test true offline gameplay on named physical arm64 device.
5. Verify aligned libraries, APK signatures, explicit license/source distribution. No ROM/firmware/PPSSPP branding bundled.

PPSSPP official docs identify GPL-2.0-or-later; verify all linked component notices before release.
