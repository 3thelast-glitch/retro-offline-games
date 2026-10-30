# Preliminary component and distribution rights audit

| Component | Provenance | Declared status | Redistribution work |
|---|---|---|---|
| Retro Offline Games React puzzle and UI | Source in this repo | Original project code; no explicit root license file yet | Owner must choose/document license and asset ownership |
| React, React DOM, Vite, TypeScript, Lucide | npm dependencies | Per-package licenses to inspect at resolved versions | Notices, SBOM and lockfile pending |
| PPSSPP `v1.20.4` candidate | https://github.com/hrydgard/ppsspp | Official project: GPL-2.0-or-later | Not integrated; validate full dependency/combined-app source requirements |
| PSP game content | None bundled | No title rights reviewed | Original or explicit redistribution license required |
| Game ROMs from unrelated websites | None bundled | No redistribution basis | Exclude without permission |
| Artwork and fonts | Local simple SVG/system fonts | No proprietary game art currently included | Audit assets/fonts for future bundled releases |

Do not assume public GitHub means an arbitrary license. Before public APK distribution, document legal basis for each game, PPSSPP corresponding source for the **exact** integrated version and dependency notices. This file is not a completed compliance review.
