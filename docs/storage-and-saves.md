# Storage and save semantics

## Implemented original-game persistence
- Browser storage keys `rog-lang` and `rog-theme` retained for backward compatibility.
- Puzzle progress under `rog-puzzle-v1`: version, 16-value board and move count.
- Restore rejects invalid JSON, duplicate tiles, impossible parity, unknown schema and invalid move count.
- LocalStorage can fail (private mode/quota); persistence returns failure without pretending save succeeded.
- This is browser-local **original-game progress**, not PSP savedata or a save state.

## Planned Android (not yet implemented)
- App-private imported content, engine assets and separated save/profile roots, avoiding `/sdcard`.
- PSP in-game savedata maintained by original PSP game and PPSSPP memory-stick conventions.
- Emulator state metadata includes game hash/revision/backend; never confuse with native game save.
- Safe SAF imports, streaming checksum, atomic staging and metadata transaction, save-preserving delete.
- No cloud accounts or telemetry. Uninstall may erase app-owned data; backup policy must be tested.
