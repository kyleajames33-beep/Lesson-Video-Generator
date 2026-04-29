# HSCScience Video Integration Plan

The video pipeline should support `hscscience.com.au` as a lesson platform, not behave like a standalone YouTube channel. Videos should sit beside lesson notes, quizzes, progress tracking, and mistake-aware revision.

## Voiceover Strategy

Use scene-level audio, not one full-video narration file.

Recommended convention:

```text
public/audio/<composition-id>/<scene-id>.<voiceover-hash>.mp3
```

Why:

- If one scene changes, regenerate only that scene.
- If graphics change but the narration text does not, the audio file remains valid.
- If narration text changes, the hash changes and stale audio is obvious.
- Scene-level timing is easier to validate than one long narration track.

Generate the voiceover manifest before using ElevenLabs:

```bash
npm run voiceover:manifest -- src/data/chemistry-y11-m2-l1-mole-concept.json
```

The manifest lists:

- scene ID
- voiceover text
- text hash
- expected audio filename
- scene duration
- estimated speech duration
- timing status

After generating ElevenLabs MP3 files, place them at the expected paths, then sync the lesson JSON:

```bash
npm run voiceover:sync -- src/data/chemistry-y11-m2-l1-mole-concept.json
```

The video renderer only loads audio when `voiceover.audioFile` is present. This keeps current renders working before audio exists and prevents broken renders from missing files.

## ElevenLabs Recommendation

ElevenLabs is a good fit for this project if the voice is consistent and reviewed.

Use:

- one stable brand/teacher voice
- scene-by-scene generation
- pronunciation checks for chemistry notation
- a pronunciation dictionary for terms like `Nₐ`, `mol⁻¹`, `CO₂`, `H₂O`, `stoichiometry`
- human review before publishing

Do not use a random rotating voice across lessons. That weakens trust.

## Site Loading Strategy

300 videos should not significantly slow the site if implemented correctly.

Rules:

- Do not place all videos on index/module pages.
- Lesson pages should load only their own video.
- Use a poster image instead of loading video immediately.
- Use `<video preload="none" controls poster="...">`.
- Lazy-load video components with a poster-first wrapper or `IntersectionObserver`.
- Host videos on CDN/object storage, not inside the main app bundle.
- Keep thumbnails/posters small and optimized.
- Do not autoplay.
- Avoid loading transcript JSON until the transcript panel is opened, unless needed for search.

Recommended lesson-page embed after the user opens the lesson:

```html
<video
  controls
  preload="none"
  poster="/video-posters/Chemistry-Y11-M2-L1.jpg"
  width="1280"
  height="720"
>
  <source src="/videos/Chemistry-Y11-M2-L1.mp4" type="video/mp4" />
</video>
```

Recommended module/index page:

```html
<a href="/chemistry/year-11/module-2/mole-concept">
  <img
    src="/video-posters/Chemistry-Y11-M2-L1.jpg"
    width="640"
    height="360"
    loading="lazy"
    alt="Mole concept lesson video"
  />
</a>
```

Do not render `<video>` tags on module, search, dashboard, or topic-list pages. Render poster images and metadata only.

## Site Architecture

Use this delivery pattern:

1. Render normal lesson HTML first: title, notes, formulas, quiz shell, and poster.
2. Load the MP4 only on the lesson page when the learner scrolls near the video or presses play.
3. Load transcripts only when the transcript panel opens, unless transcript text is needed for search indexing.
4. Store MP4s, posters, and transcript JSON outside the app bundle.
5. Cache static video assets aggressively on the CDN.

Recommended storage:

```text
/videos/<composition-id>.mp4
/video-posters/<composition-id>.jpg
/video-transcripts/<composition-id>.json
/video-transcripts/<composition-id>.vtt
```

Recommended cache policy:

- MP4: long cache, immutable filename.
- Poster: long cache, immutable filename.
- Transcript: long cache if filename is versioned; shorter cache if not.
- Site manifest: short cache or deploy-time bundled JSON.

If video files are updated without changing names, CDN cache invalidation is required. A safer later upgrade is to include a content hash in video and poster filenames.

## Site Manifest

Export video metadata for the website:

```bash
npm run export:site-manifest
```

Export transcript files:

```bash
npm run export:transcript
```

This writes:

```text
out/site-video-manifest.json
out/transcripts/<composition-id>.json
out/transcripts/<composition-id>.vtt
```

Use it to map site lessons to:

- composition ID
- video path
- poster path
- transcript path
- duration
- title/subtitle/module metadata

For production readiness status, use:

```bash
npm run dashboard:production
```

The dashboard combines site paths with audit scores so HSCScience can avoid publishing lessons that are still blocked by timing or quality issues.

Only lessons marked `productionRole: production` should be treated as normal publish-ready library lessons. Reference lessons can stay available to the production team without being surfaced as standard student lessons.

## Product Pattern

Each HSCScience lesson page should eventually contain:

1. Short lesson video.
2. Transcript.
3. Key formulas.
4. Worked example summary.
5. Quick-check quiz.
6. Common mistake.
7. Link into `Revise` for spaced repetition.

The paid value is the complete loop: watch, answer, get feedback, revise weak points.
