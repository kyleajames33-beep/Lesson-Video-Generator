# Voiced calculation continuation

The user requested online media backup and continuation on the current computer after the 9 October handoff. The original handoff snapshot remains intact. New work is an additive package, with no public upload or full-export approval.

Review page: http://127.0.0.1:8778/continuation-review-2026-10-09/

## Completed work

- Generated all eleven fresh empirical-formula segments using the selected Australian Simon voice and `eleven_v4`, with stability 0.35 and similarity 0.75. The 776 reviewed words are unchanged. Every take has character alignment and generation provenance. The recording-stage brief passed before generation.
- Assembled lossless scene narration and aligned captions. Total lesson duration is 9635 frames, 321.1667 seconds. The quiz's scene-local silent attempt is frames 524 to 584, with answer working at 584, 822 and 944. Original estimated/silent drafts are preserved.
- Replaced estimated visual beats with measured speech cues, including the empirical counting model, percentage explanation, basis, staged examples, quiz and closing handoff. All active calculation stages last at least four seconds. Earlier results remain in the trail. This is a timing/source check, not proof of learner understanding.
- Rendered a 2060-frame limiting worked-example pilot and a 1967-frame empirical worked-example/extension pilot, at 1920 by 1080 and 30 fps, using aligned PCM and audio mastering. Both completed with stable input snapshots and matched captions. The first limiting attempt was correctly rejected after a new helper was added during rendering; it remains unverified historical output and is not the selected pilot.
- Prepared the complete empirical narration as a separate audio-only listening file, with all 122 aligned caption cues. It measured -18.13 LUFS and -4.80 dBTP. This is not a full video export.
- Inspected decoded native-resolution frames at the limiting product-mass/final beats and empirical final/extension beats. Essential working and givens are clear in those samples. Complete continuous playback, caption overlays on actual devices and human listening remain pending. Browser automation could inventory the existing tabs but selecting a tab timed out twice, so no continuous browser observation is claimed.

## Exact selected files

| Item | Path | State |
| --- | --- | --- |
| Limiting lesson | `out/prototypes/limiting-clear-working-2026-10-09/lesson.json` | Accepted audio, current organised display |
| Limiting pilot | `out/prototypes/limiting-clear-working-2026-10-09/worked-pilot-02/video.mp4` | Verified technical export; playback/listening review pending |
| Empirical voiced lesson | `out/prototypes/empirical-formulas-voiced-2026-10-09/narrated.lesson.json` | SHA-256 `4bf73425ed45ae9e8fe25cedf370c41faaad69452b7a4e049654571364be22b0`; fresh assembled narration |
| Empirical brief | `out/prototypes/empirical-formulas-voiced-2026-10-09/production-brief.json` | Source/assembly pass; exact voiced-preview/listening pending |
| Empirical pilot | `out/prototypes/empirical-formulas-voiced-2026-10-09/worked-pilot-01/video.mp4` | Verified technical export; playback/listening review pending |
| Full empirical listening | `out/prototypes/empirical-formulas-voiced-2026-10-09/narration-listen.m4a` | Mastered full narration; not listening approval |
| Timings | `out/prototypes/empirical-formulas-voiced-2026-10-09/timing-review.json` | Measured holds and scene cues |

Use the saved `render-record.json`, `release.snapshot.json`, captions and audio review files alongside each pilot for exact media hashes. The updated Remotion server on port 8784 loads the voiced empirical props; port 8783 selects the limiting layout. The HTML page supplies mastered pilots and full narration, avoiding reliance on quiet raw Studio audio or slow live rendering.

The two new helpers are `scripts/prepare-empirical-narration.mjs` and `scripts/finalize-empirical-narration.mjs`. They validate the existing recording brief, exact transcript, selected source hash, hashed asset paths, segment split, measured cues, assembly integrity and protected quiz gap. They refuse to overwrite an existing recording package or voiced source. Do not rerun preparation over completed work. Resume generation only for missing valid takes; later edits need a separately versioned source and affected recordings.

## Portability and next steps

The base media snapshot is split for [GitHub release backup](github-media-backup-2026-10-09.md). The additive `continuation-media-2026-10-09.zip` contains 259 files, including fresh voice takes, assembled audio, voiced lesson/brief, verified pilots and the review page. It is 176,391,662 bytes, SHA-256 `118b32333347f241294fa0ea321e2f3c8e4bb4c40647dc309e157ec20ffffe42`. Every archived file matched its SHA-256 and the archive restored over the base handoff without conflicts. Consult the [transfer record](computer-transfer-2026-10-09.json) for actual remote upload status; prepared assets are not yet an off-machine backup.

The original course ledger still identifies the preserved organised silent draft as recording-ready. This new voiced candidate supplements it; that old row must not be read as a claim that no recordings now exist. Update course selection deliberately when the voiced review is resolved, preserving the old revision and its review records.

Next: review these exact voiced pilots and complete pronunciation/delivery listening. Resolve findings and bind the actual review to the selected brief before full export. The corrected mole-ratios source is now prepared as described below. Finish its recording preparation, then work on mass-to-mass against its pending brief and course boundaries. Preserve the existing public/unlisted uploads and all practical/coverage limits. No complete area is newly certified by recording this lesson.

## Next lesson: mole ratios

The next source is `src/prototypes/data/mole-ratios-conversational-v1.json`, SHA-256 `ae34f21390318392f6bbeea304600718dba492cf1687faeb1bd3acf4628cfd8e`. Its 717 words and ten scenes preserve useful existing equation/counting diagrams and organised calculation layouts. The earlier catalogue lesson is unchanged. The portable [script](mole-ratios-conversational-v1-script.md), [pending production brief](mole-ratios-conversational-v1.production-brief.json) and [independent source review](mole-ratios-conversational-v1-source-review.md) are in Git.

The independent source reviewer found no material science or arithmetic error. The draft distinguishes coefficients from subscripts, specifies complete-reaction assumptions, uses 0.300 mol base to calculate 0.600 mol acid, and asks for both water and oxygen amounts in its practice task. Iron(III) oxide is described using formula units. It begins with different comparisons within the same balanced equation and stops at mole-to-mole conversion; mass-to-mass is the next handoff. Empirical formulas is not a compulsory prerequisite. The supporting explanation does not fulfil the syllabus practical investigation.

Recording remains pending. The script document separates practice prompt and answer, but the draft lesson retains one continuous voiceover string. The [text-only recording preparation](mole-ratios-conversational-v1.voice-manifest.text-only.json) now contains eleven segments, preserving every script word, and plans separate prompt/answer playback with a two-second gap. It has no audio paths and is not a production voice manifest. Finish the recording-stage brief and create hashed production segments before generation, then assemble measured answer-free silence. Preserve the selected diagram's omitted `coefLabel` cue, which hides the old coefficient-only-moles label. Bind result-line reveals, diagrams and captions to fresh measured alignment. The rendered native concept still is a static sample only; pronunciation, delivery, motion, phone fit and exact voiced preview remain unapproved. Do not treat estimated cue frames or generic draft captions as finished synchronization.
