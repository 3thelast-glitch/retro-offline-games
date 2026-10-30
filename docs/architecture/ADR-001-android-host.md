# ADR-001 — Preferred Android host (provisional)

Date: 2026-10-30
Status: **Proposed; not technically accepted until native compilation and launch spike**

## Decision
Keep React/TypeScript/Vite for library/settings. Investigate a Capacitor 8 Android host with application ID `com.retroofflinegames.app` (not a registered domain or store ID), a custom Capacitor plugin for bounded low-frequency commands, and a **same-APK native PPSSPP-derived Activity** for rendering/audio/input. Native player owns gameplay; React does not stream frame buffers or button samples.

## Alternatives
1. **Capacitor + native Activity (preferred):** preserves current UI; requires JNI/native frontend adaptation, native launch/session coordination and lifecycle tests.
2. **Custom Android Activity + WebView shell:** more control but more host code and bridge maintenance; fallback only if Capacitor creates demonstrated limitations.
3. **PPSSPP frontend fork embedding React shell:** may reduce JNI churn; larger maintenance and upstream merge cost. Consider only with measured benefit.
4. **External emulator intent, iframe or JS mock:** rejected. Violates same-APK offline PSP requirement.

## Ownership and message flow
React catalog and preferences -> typed platform bridge -> Android trusted game registry/session coordinator -> internal PSP Activity -> upstream-derived JNI/native threads/surface/audio/input. Return events carry version, request/session ID and monotonically increasing state revision. Native session coordinator is authoritative during PSP gameplay. Only control messages use Capacitor bridge, **not** render frames, audio, or real-time input.

## Lifecycle risks
- Shell pauses when native player starts; this must not pause the player.
- Renderer/audio shutdown and re-entry may require process-global handling.
- JNI thread affinity; native surfaces can disappear without normal shutdown.
- Import/storage permissions and PPSSPP memory-stick roots need a safe local policy.
- Separate Android identity and settings/saves from NAQLA and PPSSPP standalone.
- GPL obligations for integrated runtime and combined application must be resolved before redistribution.

## Actual spike result
**No spike executed.** No Android SDK/NDK, Gradle/adb or device available locally; shell GitHub access failed DNS. Source-level API research is recorded in `docs/psp-integration.md`; it is not evidence of JNI initialization. The chosen approach remains provisional, and no Android application was committed as if it had passed a spike.

## Acceptance for this ADR
1. Build same-app `arm64-v8a` JNI and include native assets.
2. Launch internal PSP Activity and real content on a named Android device.
3. Verify surface/audio/input/lifecycle, exit/relaunch; inspect APK and corresponding-source obligations.
4. If the host prevents correct integration, record the failure and compare fallback before changing architecture.
