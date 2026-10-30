# Release checklist (all unchecked until demonstrated)

- [ ] Approved license strategy and root project license
- [ ] Exact pin of PPSSPP native source/submodules with buildable patches and corresponding source
- [ ] Android application ID and independently packaged React assets
- [ ] Real native PSP core, renderer/audio/controls included in the same APK
- [ ] One independently authorized PSP homebrew game bundled with hash and rights evidence
- [ ] Clean first-launch completely offline, actual PSP input/audio/gameplay
- [ ] Native pause/relaunch/persistence and save mechanism verified on real arm64 device
- [ ] Unit/integration/device tests and accessibility review pass
- [ ] No external emulator, remote game file or service dependence
- [ ] ABI, APK/native library alignment, signature, manifest and asset inspection
- [ ] Release signing and upgrade test with the same identity/key
- [ ] APK checksums, SBOM, notices and corresponding GPL source delivery
- [ ] 20-minute game run and 20 launch/exit observations
- [ ] Distinct claims for Windows/iOS/Web PSP (not implied by Android)
- [ ] Separate authorization to merge/release
