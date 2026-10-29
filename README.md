# Retro Offline Games

Independent bilingual (Arabic / English) offline-ready game library.

This starter includes **an original sliding-puzzle game** as an executable demo. It does **not** include game ROMs, SWFs, proprietary assets, or games copied from Lemon Web.

## Local development

Requirements: Node.js 20.19+ or 22.12+ (Node 24 supported).

```bash
npm install
npm run dev
```

Production web build:

```bash
npm run build
npm run preview
```

## Offline behavior

The service worker caches the web application on first successful online use. It will not guarantee first-run offline access for a web user. For guaranteed installation-time offline access, package the built assets in an Android application with Capacitor.

## Android roadmap

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "Retro Offline Games" "com.example.retroofflinegames" --web-dir dist
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

Build with Android Studio, and choose your own Android application ID before publication.

## Planned enhancements

- Pluggable original or licensed games with documented redistribution permissions
- Arabic translations and RTL, with language packs per game
- Per-game themes, assets, levels, and progression where supported by the game source
- Catalog filters, search, gamepad/touch input, local save data
- Android APK builds and offline automated tests

## Legal and redistribution

Being playable on a website does not grant permission to copy or redistribute the game's files. Assess each game's source and licenses separately, including translation/modification permissions and bundled asset rights.

## Status

Initial working UI and a single original demonstration puzzle, **not** yet an APK or an archive of Lemon Web games.
