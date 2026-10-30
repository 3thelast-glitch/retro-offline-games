# PPSSPP integration research (not implemented)

Research date: 2026-10-30. Upstream: https://github.com/hrydgard/ppsspp

## Candidate source revision
- Candidate tag: `v1.20.4` (official stable release announced 2026-05-16).
- Annotated tag SHA: `3a31057b7e44270b4d5cef8c31b6559d51802a3b`.
- Peeled **commit** SHA: `fa50bb1976065c4f8b1b47af227d367fe9771555`.
- Candidate tree SHA: `fa50bb1976065c4f8b1b47af227d367fe9771555` was returned when querying recursive tree by tag but is not independently validated as a tree identifier; **do not use it to pin a tree**. (GitHub tree endpoint may report the revision identifier.) The source commit above is the pin candidate.
- Dependency manifest and upstream gitlinks: `config/ppsspp-source-candidate.json`.
- Source has NOT been cloned in a clean native build, integrated into this repository or compiled. No source patches exist yet.

## Verified source-level investigation leads at v1.20.4
These are declarations/references in upstream source, **not a working embedding API**.

| Operation | Source and observed symbol | Responsibility / research risk |
|---|---|---|
| JNI load | `android/src/org/ppsspp/ppsspp/PpssppActivity.java:177` `System.loadLibrary("ppsspp_jni")` | Activity/library load, native packaging |
| Native init | `NativeApp.java:32` `init(...)` and `PpssppActivity.java:500` invocation | Upstream Activity and native initialization order |
| Audio | `NativeApp.java:33-35` `audioInit/audioShutdown/audioConfig` | Actual backend/lifecycle unverified |
| Pause/resume/shutdown | `NativeApp.java:52-55` and Activity lifecycle methods ~995-1080 | Must serialize and respect native lifecycle |
| Touch/key/axis | `NativeApp.java:57-66` `keyDown/keyUp/joystickAxis/touch` | Pointer IDs, multi-touch, controller lifetimes |
| Surface/render | `PpssppActivity.java:669-671` Vulkan render loop declarations; `NativeSurfaceView.java` forwards touches | Verify actual renderer/surface/thread ownership |
| Native message path | `NativeApp.java:72` `sendMessageFromJava` | Internal message names are NOT public, stable launcher APIs |

A file referred to as `NativeSurfaceManager.java` in the prepared prompt was not available at that location in v1.20.4; source structure needs revision-specific inspection.

## Native implementation next steps
1. Create a reproducible recursive PPSSPP checkout pinned to the exact commit and gitlinks; assess FFmpeg, libchdr, codecs, resources and notices.
2. Inspect actual Android Gradle/CMake targets, JNI registration, JNI startup, global state, launch arguments, surface ownership and threads.
3. Build upstream Android target first in a known-good SDK/NDK, then a narrow same-APK Activity integration experiment.
4. Implement non-exported player Activity, content registry/import SAF, prepared handles, session state, native control input, audio, saves.
5. Bundle an original/redistributable PSP homebrew and demonstrate first-launch flight-mode gameplay with real audio/input.
6. Check native ELF/ZIP alignment and test on 16 KiB-page Android device/image.

**PPSSPP code license:** Official upstream developer page identifies GPL-2.0-or-later. Verify full corresponding-source and linked dependency obligations before distributing any combined app. No proprietary ROMs/BIOS/firmware/game assets have been included.
