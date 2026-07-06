# Lesson Video Generator

Remotion-based pipeline that turns HSC Science lesson JSON into narrated MP4
lesson videos. Part of a two-repo system — the rendered output is consumed by
the separate site at hscscience.com.au.

## How it works

```
src/data/*.json  →  scene types  →  slide components  →  Remotion composition  →  MP4
```

- Each lesson is **one JSON file** in [`src/data/`](src/data) describing a list of
  `scenes` plus lesson-level metadata (subject, module, syllabus mapping).
- The schema is defined in [`src/lesson/types.ts`](src/lesson/types.ts). Each
  scene has a `type` (`title`, `hook`, `concept`, `definition`, `formula`,
  `workedExample`, `misconception`, `quickCheck`, `summary`, `marginalia`,
  `labFootage`, `endCard`, `mnemonic`).
- [`src/LessonVideo.tsx`](src/LessonVideo.tsx) maps each scene `type` to a slide
  component in [`src/slides/`](src/slides) and stitches them into a
  `TransitionSeries`, preceded by an intro stinger.
- [`src/data/lessonRegistry.ts`](src/data/lessonRegistry.ts) is **auto-generated**
  (`npm run generate:registry`) — one Remotion `<Composition>` per lesson,
  registered in [`src/Root.tsx`](src/Root.tsx). Composition id = e.g.
  `Chemistry-Y11-M2-L2` (derived from subject/year/module/lesson).
- Subject theming (`src/styles/theme.ts`) resolves an accent colour once per
  lesson via `useAccent()`; design tokens live in `src/styles/tokens.ts`.

## Setup

```powershell
npm install
npm start          # open Remotion Studio to preview
```

## Authoring a lesson

1. Add a JSON file to `src/data/` following `src/lesson/types.ts`
   (`{subject}-{year}-m{module}-l{lesson}-{slug}.json`).
2. `npm run generate:registry` to register the new composition.
3. `npm run validate:lessons` to check structure and pacing.
4. Preview in `npm start`; render with
   `npx remotion render src/index.ts <CompositionId> out/lesson.mp4`.

## Voiceover / audio

- Scene narration text lives in each scene's `voiceover.text`.
- Audio is generated with ElevenLabs (`scripts/generate-elevenlabs-*.mjs`,
  needs `ELEVENLABS_API_KEY`) into `public/audio/<CompositionId>/`, named
  `<sceneId>.<textHash>.mp3` (hash of the narration text).
- `npm run voiceover:sync -- src/data/<lesson>.json` links on-disk audio back
  into the JSON's `voiceover.audioFile` — hash-safe, so edited scripts whose
  audio is stale are left unwired for regeneration.

## Quality gate

```powershell
npm run check:all    # generate:registry + tsc --noEmit + validate:lessons
```

Run before committing. This also runs in CI on every push/PR
([.github/workflows/check.yml](.github/workflows/check.yml)).

## Repo conventions

- `out/` (renders) and the large media dirs `public/audio/` (~591MB) and
  `public/assets/` (~253MB) are **not committed** — audio regenerates from the
  scripts, images from the `image-prompts-*.md`. Back these up separately:

  ```powershell
  # Incremental mirror to an external drive or a cloud-synced folder
  # (OneDrive / Google Drive / Dropbox) = off-machine backup for free.
  npm run backup:media -- "D:/Backups/hscscience-media"
  npm run backup:media -- "$HOME/OneDrive/hscscience-media" --prune
  ```

  Re-running only copies changed/new files. `--prune` also removes destination
  files no longer in source (off by default).
- `scripts/_*.mjs` are one-off/throwaway patch scripts, not part of the durable
  pipeline. The durable commands are the ones wired into `package.json`.
- Production docs live in [`docs/`](docs).
