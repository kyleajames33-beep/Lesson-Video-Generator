# Calculation batch prepared for deferred review

The user asked to keep preparing the next videos and review them together later. This extends the earlier handoff without treating unavailable listening as approval. Current review: http://127.0.0.1:8778/calculation-batch-review-2026-10-09/. The page includes empirical formulas, mole ratios, mass-to-mass and limiting reactants in their proposed learner order, captioned short clips, complete scripts and full narration where available. Browser notes can be downloaded together.

## New candidates

| Lesson | Selected voiced source | Complete narration | Short previews |
| --- | --- | --- | --- |
| Mole ratios | `out/prototypes/mole-ratios-voiced-2026-10-09/narrated.lesson.json` | 294.8333 s, 717 words, eleven fresh segments | Amount diagram: 30.2667 s; acid working: 32.6000 s |
| Mass-to-mass | `out/prototypes/mass-to-mass-voiced-2026-10-09/narrated.lesson.json` | 393.8667 s, 966 words, eleven fresh segments | Calculation pathway: 43.8667 s; iron working: 56.2000 s |

Exact selected hashes and pending states are in [the candidate record](calculation-review-batch-2026-10-09.json). Earlier drafts and catalogue sources remain preserved. Both new candidates use selected Australian Simon, `eleven_v4`, stability 0.35 and similarity 0.75. All takes have timestamp alignment and generation provenance. Both recording-stage briefs passed before paid generation. No selected words were changed after recording.

The source reviews distinguish coefficients from subscripts and grams, state sufficient-reactant and complete-reaction assumptions, use each species molar mass, and preserve guard digits. Mass-to-mass narration explains approximate amounts instead of repeatedly reading six-decimal calculator results. Its zero-frame introduction and syllabus-neutral chrome keep the reusable core separate from cohort placement. The missing old pathway raster is replaced by the existing appropriate native calculation diagram, not unrelated artwork.

All four new pilots are H.264, 1920 by 1080, 30 fps, scale 1 and CRF 16. Their stable dependency snapshots and media hashes verify. Complete listening tracks use the same aligned PCM timeline as the video, mastered separately; mole ratios measured -18.13 LUFS and -1.95 dBTP, mass-to-mass -18.25 LUFS and -1.91 dBTP. Audio statistics establish technical levels, not natural delivery or pronunciation.

Measured practice silence is exactly sixty frames: mole ratios scene-local 596 to 656, mass-to-mass 737 to 797. Separate prompt and feedback recordings are assembled before captions and answer cues. Result lines appear at their measured phrases, with the existing compact trail retaining useful facts. Preflight reported zero errors and ten short-tail warnings per lesson. The half-second ordinary scene tail intentionally avoids the user's excessive-pause concern; actual pacing remains a listening decision.

## Review evidence and limits

Read the [mole-ratios independent timing report](mole-ratios-voiced-timing-review-2026-10-09.md), [mass-to-mass timing report](mass-to-mass-voiced-timing-review-2026-10-09.md), and each recording-stage source review. The independent reviewer checks transcript identity, measured cues, actual silent PCM, exact captions and sampled decoded pilot frames. Static frames and source checks do not establish continuous playback, actual-device readability, caption overlays or listening. Brief prose describing an unmeasured planned gap was corrected to the actual interval; selected source/audio/cues stayed unchanged.

Some simple intermediate lines have short full-opacity holds before the next stage. Their relevant amount or ratio persists in the established trail. Pay particular attention to these during real playback rather than interpreting a fixed duration as proof of failure or success. All exact voiced-preview and human-listening flags remain pending. Full-export configurations are provided but their normal gate remains closed until the actual preview review exists. No YouTube upload or practical/coverage completion is claimed.

## Reproduce and continue

`scripts/prepare-calculation-review.py prepare` validates the recording-stage brief and exact text-only manifest before creating immutable hashed segment paths. Existing packages are preserved. Generate only missing valid takes with the existing ElevenLabs generator. Assemble with `scripts/assemble-lesson-playback.mjs`, then `prepare-calculation-review.py bind` uses the tracked phrase-cue specifications and unchanged transcript to build a new voiced revision. Its `audio` command verifies assembly, creates full aligned captions and masters the listening track. Render short pilots using the saved configs and `scripts/render-release.mjs`; do not substitute a full export for the pending preview check.

These are completed packages, so do not rerun preparation or binding over them. Later speech changes need a separately versioned revision and rebuilt affected takes, alignment and captions. Preserve older release packages and their hashes. The dated main course ledger remains the original handoff inventory; the current candidate record supplements it without inventing new reviewed coverage.

Next source preparation is [yield and purity](yield-purity-next-source-audit-2026-10-09.md), followed by concentration. Its audit found inconsistent numerical answers, premature rounding, incomplete assumptions and overly absolute yield claims. Resolve those before selecting a recording source. Follow the existing course boundaries and mandatory-action checklist; the explanatory batch does not replace investigations or certify the whole quantitative area.

New ignored media and review state are packaged separately as `calculation-batch-media-2026-10-09.zip`: 562 files, 357,630,898 bytes, SHA-256 `9ed6f530f7fdfa5ece50fb9077e75d58c83d3f3a834819d3527e7fcd97730625`. Its uploaded GitHub asset matches that size and digest. Restore it after the base handoff and earlier empirical continuation. Use explicit continuation names in the [GitHub download instructions](github-media-backup-2026-10-09.md). Preserve the dated snapshots instead of repacking them as new work appears.

A standalone fresh Git clone restored all 716 state files, the 4245 base media files, 259 first-continuation files and 562 new batch files without content conflicts. All six selected pilot snapshots then verified with zero changed or missing dependencies. Git checkout attributes preserve the exact reviewed source bytes, including historical mixed line endings; the source-byte commits change no code or narration semantics. The transfer helper now handles Windows extended-length paths for deeply nested frozen public copies. These checks establish transfer reproducibility, not continuous playback or human approval.
