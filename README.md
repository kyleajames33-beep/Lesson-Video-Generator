# Lesson Video Generator

Remotion-based HSC Science lesson video pipeline.

## Core Commands

```powershell
npm install
npm run check:all
npm run audit:production
npm run dashboard:production
npm run gate:production
```

## Production Workflow

```powershell
npm run prepare:lesson -- src/data/your-lesson.json
npm run voiceover:timing
npm run voiceover:manifest -- src/data/your-lesson.json
npm run export:site-manifest
npm run export:transcript
```

## Notes

- Generated files go into `out/` and are not committed.
- Runtime visual assets live in `public/assets/`.
- Lesson JSON files live in `src/data/`.
- Production docs live in `docs/`.
