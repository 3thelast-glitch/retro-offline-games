# Game customization boundaries

- **App-owned UI:** React/theme/localization can be changed directly. Arabic shell UI never proves a PSP game is translated.
- **Original/open-source games:** inspect code, asset licensing and build tooling; translate game scripts, redraw sprites, add levels, rebuild and test.
- **PSP texture packs:** investigate upstream title/revision-specific texture replacement and exact hashes. Texture replacement alone does not implement Arabic shaping or fonts.
- **PSP executable/level patches:** game-specific formats and reverse engineering on authorized content, version constraints, patch conflicts and save compatibility. No universal editor exists.
- **Native ports:** separate project, not emulation.
- **Future mod schema:** mod ID/version, target content SHA-256/region, runtime version constraints, file hashes/provenance/license, dependencies/conflicts, save compatibility and reversible enable/disable. Never overwrite imported originals destructively.
- **Distribution:** rights to run a file are not automatically rights to distribute it or publish its modified version. No games copied from Lemon Web are bundled.
