# Production handoff: 9 October 2026

This is the starting point for a new computer or agent. The user asked to commit and push all work and continue the course without losing the accepted teaching changes. The repository contains the code, research, standards and course plans. A checked-in state archive restores ignored lesson drafts and review records. Audio, artwork and MP4s require the separate local transfer archive described below.

The next production lesson is **percentage composition and empirical formulas**. First finish the exact voiced-preview check of the latest **limiting-reagents clear-working layout**. Do not restart the scripts or replace the accepted voice takes. The current sources and pending checks are listed below.

## Move to the other computer

Repository: https://github.com/kyleajames33-beep/Lesson-Video-Generator

Branch: `main`. Pull the handoff commit, not an older checkout. Use `npm ci` to install the locked dependencies. The current machine used Node 20.16.0 and npm 10.9.3. Use a compatible Node version with `process.loadEnvFile` support and Python 3.9 or newer for transfer. FFmpeg/FFprobe are needed by the media workflow; see `scripts/lib/media-tools.mjs` for discovery and overrides.

**Copy these two local files to the other computer before retiring this machine:**

- `out/archives/computer-transfer-2026-10-09.zip`
- `out/archives/computer-transfer-2026-10-09.zip.sha256`

They are ignored by Git and are not on GitHub. The ZIP is 3,062,795,215 bytes (about 2.85 GiB), with 4245 media files. They preserve public audio/artwork, historical rendered media, frozen public copies and visual evidence. The archive excludes reproducible runtime bundles, dependency folders and test scratch. Its SHA-256 is recorded in the companion file and the checked-in [transfer record](docs/production/computer-transfer-2026-10-09.json). Verify it after copying, for example with PowerShell `Get-FileHash`.

From a fresh checkout:

```powershell
git clone https://github.com/kyleajames33-beep/Lesson-Video-Generator.git
cd Lesson-Video-Generator
npm ci
python scripts/transfer-workspace.py restore-state
python scripts/transfer-workspace.py restore-media "D:/Transfer/computer-transfer-2026-10-09.zip"
npm run check:all
node scripts/check-course-content-checklist.mjs
node scripts/check-course-ledger.mjs
```

Replace the transfer path with the actual location. `restore-state` uses `docs/production/handoff-state-2026-10-09.zip` and its checked-in SHA-256 manifest. Both restore commands validate hashes and refuse to overwrite a different existing file. Restore into a fresh checkout to avoid mixing old local work. Matching existing files are retained. If a conflict is reported, preserve both versions and inspect it before changing anything.

The state archive preserves selected lesson JSON, props, briefs, alignments, caption files, publication records, review reports, HTML review pages and pinned curriculum research at their original `out/` paths. The media archive carries the matching state archive too, but the documented restore uses the Git copy as its reference. Do not repack these dated archives during normal production. Later transfers should have their own version and checksum.

Git alone restores the catalogue and planning documents, but cannot play the selected narration or show all artwork. Never mark missing-media previews as approved. `scripts/backup-media.mjs` backs up public audio/artwork only; it does not replace this transfer of ignored production state and historical outputs.

### Credentials and local services

`.env.local` is intentionally excluded from Git and both archives. Configure `ELEVENLABS_API_KEY` privately on the new computer, either through its environment or an ignored `.env.local`. Keep the key out of chat, commits, logs, screenshots and browser bundles. YouTube sign-in and local browser sessions are not transferred. Sign in to the intended channel when publication work resumes.

Use a blank environment file for Remotion Studio so the root credentials are not automatically bundled:

```powershell
node -e "require('fs').mkdirSync('out/local',{recursive:true});require('fs').writeFileSync('out/local/studio.env','')"
npx remotion studio src/dev/release-entry.tsx --props=out/prototypes/limiting-clear-working-2026-10-09/remotion-props.json --env-file=out/local/studio.env --port=8783 --no-open
```

For empirical formulas, change the props path to `out/prototypes/empirical-formulas-organised-2026-10-09/remotion-props.json` and use another free port, for example 8784. This draft is deliberately silent until fresh narration is recorded. The release entry's default composition is a placeholder, so always supply the selected props. Remotion running on the old computer does not remain available on the new one.

Start the review server with `node scripts/serve-prototype-review.mjs`. Default local review address: http://127.0.0.1:8778/. Relevant restored pages include `/calculation-layout-review-2026-10-09/`, `/video-syllabus-map-2026-10-09/` and `/limiting-conversational-2026-10-09/`. Inspect the server's output for its actual port. `node scripts/build-video-syllabus-view.mjs` can rebuild the searchable course view after restore.

## Rules that must carry forward

Read [AGENTS.md](AGENTS.md) before editing. These rules are established by the user's feedback and apply to new selected lessons:

1. **No Unicode U+2014 in new or revised copy.** This includes narration, captions, titles, documentation, review pages and responses. Scan the exact selected lesson before speech generation or publication. Preserve immutable historical evidence; do not silently rewrite a recorded transcript. Changing recorded words requires rebuilding affected narration, alignment and captions.
2. **Conversational teaching is the minimum.** Explain the reason and causal relationship in connected speech. Use a useful topic-specific question, contrast or surprise where it helps. Avoid command recitals and repetitive procedural language. The user accepted the revised limiting script as a better baseline. Voice sliders cannot repair a bland script. Forced humour, fake laughter and feature quotas are not requirements.
3. **Preserve useful visuals.** Keep usable layouts, artwork and animation. Editorial, hand-drawn and painted treatments can coexist, chosen by teaching purpose. Do not restyle the whole catalogue. Do not insert a generic atom or unrelated diorama as a fallback. A model must represent the concept being taught and disclose its limits.
4. **Motion has a teaching purpose.** It explains a mechanism, directs attention or supplies useful context. Stable reading and thinking holds are valid. Animation count does not establish quality. Inspect key labels and diagrams at phone size, not just on a large monitor.
5. **Organise difficult calculations.** Separate the short task, balanced equation, grouped supplied quantities and reference constants. Put units beside their values. Show one operation at a time and retain useful completed results in a compact trail. Align later result lines to the spoken cue. Do not cram a whole question into a heading or flash a stage too briefly to read. Keep a chosen 100 g basis visible and consistent where relevant.
6. **Protect attempts.** A measured response hold must remain answer-free in narration, captions, diagrams and displayed working. Use actual alignment and assembly evidence rather than word-count duration estimates. Avoid excessive arbitrary pauses around ordinary teaching sentences.
7. **Plan entry and exit.** Consult the course ledger and action checklist before choosing a video. Every new schema v2 production brief needs prerequisite knowledge, starting point, stopping boundary and next handoff, plus exact-source and per-scene teaching/visual decisions. Keep playlist order distinct from upload chronology and the prerequisite graph. Older v1 contracts remain historical; do not retroactively invent approval fields.
8. **Preview before full export.** Check the brief at recording stage before paid narration. Review the exact voiced revision in Remotion or a short measured pilot before full export. Resolve findings, freeze source/audio/props/shared code, then use the export-stage gate. A later relevant change invalidates the affected evidence. Supply `teachingBriefPath` to `scripts/render-release.mjs`; full exports enforce it. A short `frameRange` pilot can be made while preview review is pending.
9. **Label evidence honestly.** Source review, still-frame observations, live UI, encoded playback, media statistics and human listening are different checks. Pending listening is not a pass. Do not toggle coverage or review flags to make a gate green. Preserve old uploads and frozen evidence, even when newer code makes their historical snapshot drift detectable.
10. **Coordinate ownership.** Independent read-only teaching/science, visual/timing and release reviews are useful and were requested in this task. Their findings need an owner and recorded resolution. Do not assume permission to spawn agents in every future task. Keep one owner of active source edits, recording and export; avoid duplicate paid generation or shared edits during a render.

The previous machine's Studio sometimes ran around 3.7 fps on an 8 GB system. This is insufficient to judge normal-speed motion or audio continuity. Use a focused 60 to 90 second pilot when needed, record its resolution/compression, and render full videos sequentially. Preview softness is not proof of final export softness. Also check the actual uploaded HD processing/playback, not just the local MP4.

## Research and planning: reading map

These documents are present in Git. They are not missing research to recreate from scratch. The earlier quality problem was incomplete application of the research to selected scripts and visuals. The current teaching briefs and gates make that application explicit.

| File | Purpose |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Binding project working rules |
| [Production memory](docs/production-memory.md) | User decisions, accepted changes, chronology and remaining limits. Read the latest dated sections; old states remain evidence. |
| [HSC video production standard](docs/research/hsc-video-production-standard-2026-10-02.md) | Existing educational research and production criteria |
| [Research implementation plan](docs/research/library-implementation-plan.md) | Applying that research to the library |
| [Teaching templates](docs/production/teaching-templates.md) | Topic-specific teaching structures |
| [Visual design handbook](docs/visual-design-handbook.md) | Layout, artwork/model selection and visual review |
| [Animation planning](docs/animation-planning.md) | Purposeful motion and valid holds |
| [Teaching/visual brief template](docs/production/teaching-visual-brief-template.md) | Exact lesson, scene decisions and evidence contract |
| [Preview-first review](docs/production/preview-first-review.md) | Ordered recording, preview, pilot and export workflow |
| [Playback and release](docs/production/playback-and-release.md) | Assembly, alignment, captions and release checks |
| [Research application gap](docs/production/research-application-gap-2026-10-09.md) | What existed, what was applied and what still required work |
| [Course progression plan](docs/production/course-progression-plan-2026-10-09.md) | Production order, learner boundaries and major coverage gaps |
| [Course ledger JSON](docs/production/course-progression-ledger-2026-10-09.json) and [CSV](docs/production/course-progression-ledger-2026-10-09.csv) | All 308 source lessons, selected states, 30 major-area rows and immediate progression |
| [Content/action checklist](docs/production/course-content-checklist-2026-10-09.md) | Point-level mapping, with JSON/CSV companions and unresolved actions |
| [Full video/syllabus map](docs/production/video-syllabus-map-2026-10-09.md) | Chemistry and Biology lists, links and provisional syllabus mappings; JSON companion drives the searchable view |
| [Curriculum continuity review](docs/production/curriculum-continuity-2026-10-08.md) | Reuse, adjust, new and legacy-only analysis; JSON/CSV companions |
| [Next chemistry batch review](docs/production/next-chemistry-batch-review-2026-10-09.md) | Empirical, mole-ratio and mass-to-mass corrections and preparation |
| [Limiting visual plan](docs/production/limiting-conversational-visual-plan-2026-10-09.md), [limiting feedback](docs/production/limiting-reagents-feedback-2026-10-09.md), [enzyme feedback](docs/production/enzyme-feedback-2026-10-09.md) | Topic-specific revisions and findings |
| [Voice v4 review](docs/production/voice-v4-review-2026-10-08.md) and [audition manifest](docs/production/voice-v4-auditions-2026-10-08.json) | Voice investigation, controls and six auditions; user said they sounded similar and acceptable |
| [Engagement status](docs/production/engagement-implementation-status-2026-10-08.md) | Applied changes versus unproven learning effects |
| [YouTube publishing plan](docs/production/youtube-publishing-plan-2026-10-09.md) | Channel, syllabus order, SEO, captions, saved publication state and review URLs |
| [Continuity batch](docs/production/continuity-batch-01-2026-10-09.md) | Prior batch, evidence and remaining work |

`docs/chemistry-syllabus-crossover.md` and `docs/biology-syllabus-crossover.md` contain earlier comparison work. Use the later continuity review and current ledger to interpret superseded claims. Pinned official source extracts are restored under `out/research/`; preserve their source dates and hashes. `.agents/syllabi/` and the checked-in `.agents/skills/remotion-best-practices/SKILL.md` provide additional local reference material. Follow the Remotion skill when doing relevant video implementation work.

## Syllabus scope and order

Year 11 Biology production targets **Biology 2025 only**, as explicitly requested. That is the chosen catalogue target, not a claim it had already commenced on 9 October 2026. Chemistry and Year 12 Biology retain current/new placement comparisons. Official implementation dates were checked in the dated course plan: new Biology Year 11 starts Term 1 2027, Year 12 Term 4 2027, first HSC 2028. New Chemistry Year 11 starts Term 1 2028, Year 12 Term 4 2028, first HSC 2029. Recheck the official sources if the implementation schedule changes.

The registered catalogue has 73 Chemistry Year 11, 76 Chemistry Year 12, 75 Biology Year 11 and 84 Biology Year 12 sources. These are source counts, not completed or published video counts. The map has 121 sources with specific 2025 point references. Other mappings may be focus-area candidates or legacy placements. A title, outcome ID, audio filename or crosswalk cannot certify full dotpoint coverage.

The action checklist currently covers 27 cached official Quantitative chemistry points and four enzyme role/model/practical/graph points as 63 separate actions. Every other area, plus the rest of Cells as the basis of life, still needs detailed action mapping. Distinguish explaining a practical, planning one, interpreting data and actually conducting it. Do not claim an explanatory video fulfils conduct or fieldwork requirements. First Nations contexts/protocols need direct respectful sourcing and review.

The quantitative learner route is conservation/system boundaries, mole concept Part A, Part B, molar mass, percentage composition/empirical formulas, mole ratios, mass-to-mass, limiting reagents, yield/purity, concentration, standard solutions/dilution, and gas relationships with investigation/data work. Conservation is a full-course scope gap. Part B is an existing channel draft, so review it before making a duplicate. Empirical formulas are not a universal prerequisite for stoichiometry; preserve that distinction in the prerequisite graph. Shared teaching can be reused in both syllabus playlists without voicing cohort-specific labels. Dedicated changed/new requirements still need their own scope and evidence.

## Selected revisions: resume these paths

### Limiting reagents: current layout, preview pending

- Source: `out/prototypes/limiting-clear-working-2026-10-09/lesson.json`
- Props and schema v2 brief: `remotion-props.json`, `production-brief.json` in that directory.
- SHA-256: `22a844720d33ee16fad5da5d8cf4e0120237615b4906ad2e4fd269cab6326323`.
- Display-only revision retaining accepted conversational narration and captions. Eight scenes, 8423 frames, 280.7667 seconds at 30 fps. Do not regenerate unchanged audio.
- Grouped givens and staged working replace the overcrowded problem heading. Product-ratio and mass result lines land at scene-local frames 992 and 1215. The quiz's measured two-second response hold is 560 to 620, followed by stages at 620, 851 and 1016.
- Exact source and sampled native-frame review passed. Continuous voiced preview, external-caption clearance and actual-device/listening review of this layout remain pending. It has not been fully re-exported or uploaded.

The prior conversational full export is `out/prototypes/limiting-conversational-2026-10-09/full-render-01/video.mp4`, SHA-256 `b80ea82c5066de312e2352346d7d4a6111d6768d5085ebd2f1de90a0fa8a0f09`. It measured -18.04 LUFS and -1.92 dBTP with 116 caption cues. Preserve it and its release evidence. The older unlisted YouTube review, https://youtu.be/b7OCuLsXgG8, is a different 4:53 feedback revision. Do not confuse either with the new clear-working layout or overwrite their review status.

### Percentage composition and empirical formulas: next recording

- Source: `out/prototypes/empirical-formulas-organised-2026-10-09/lesson.json`
- SHA-256: `5df66bb49e0947f8e8d52e1bd1c5b8ac9c463adae0e792c7dd6123192abc8d82`.
- Same directory: `recording-script.md`, `production-brief.json`, `remotion-props.json`, `voice-manifest.text-only.json`, `revision.json`.
- Ten scenes, 776-word draft and 11 planned voice segments. No selected audio or captions. All timings, including 9793 total frames, are estimates until recording.
- Independent script/science and sampled native-frame checks passed. The exact recording-stage brief is ready. Preview, listening and export approval remain pending.
- Preserve the grams/moles entry bridge, glucose/formaldehyde contrast, forward percentage calculation, fractional ratios and NO2 transfer question. Keep the chosen 100 g calculation basis stable. The molecular-formula scene is a labelled extension, and a formula does not uniquely identify a substance. Close at within-substance ratios and hand off to ratios between reacting substances.

**The text-only manifest is not a production manifest.** It intentionally lacks audio paths and hashes. Build the proper manifest with selected voice, source/text hashes, request options and planned asset paths, splitting the quiz prompt from its answer. Use the generator's dry run before paid generation. Do not attach old L3 recordings to revised words. After recording, replace estimated durations and reveals with measured alignment, assemble the protected response hold, rebuild captions and bind the updated source to a fresh voiced-preview snapshot.

Older empirical work remains at `out/prototypes/next-chemistry-review-2026-10-09/empirical-formulas.lesson.json`. Use the organised revision above as the selected draft. Do not blindly rerun preparation scripts: they can overwrite pending briefs or invalidate source bindings. `prepare-empirical-organised-review.mjs` has an explicit unrecorded refresh guard; it is not a routine resume step.

### Other lessons

| Lesson | Selected state and next action |
| --- | --- |
| Molar mass | Git source `src/prototypes/data/molar-mass-v3.json`; selected package `out/prototypes/molar-mass-continuity-handoff/`. Fourteen Simon v4 segments and a 336.3-second full export. Saved public upload https://youtu.be/g9zmc5w7kQU. Compare publication/snapshot records before claiming a later source edit is in the public video. |
| Mole ratios | Pending correction brief under `out/prototypes/next-chemistry-review-2026-10-09/`. Correct coefficient/entity interpretation, state sufficient-reactant assumptions, keep 0.300/0.600 amounts consistent, and include changed-ratio transfer. No fresh narration approval. |
| Mass-to-mass | Pending brief in the same directory. Explain oxygen's mass contribution, use each species' molar mass, preserve pure-oxide assumptions and resolve the missing raster. The coded pathway is a reuse candidate; its default 3:6 piles cannot imply every reaction doubles amount. |
| Enzymes | `out/prototypes/enzyme-story-feedback-2026-10-09/narrated.lesson.json`, export `render-03/video.mp4`. Native binding/active-site/induced-fit teaching replaced the unrelated atom and directive delivery. 233.533 seconds, 1080p, 30 fps, -18.07 LUFS, -1.68 dBTP, 94 caption cues. Revised unlisted review https://youtu.be/ZTxQP7kI5_o. Full user watch-through/listening and public release remain pending. |

Independent review reports are restored under `out/prototypes/feedback-independent-reviews/`, including `clear-working-source-review.md`, `empirical-organised-source-review.md`, `calculation-pair-native-review.md` and `calculation-pair-native-final-evidence.json`. Read findings and their resolution, not just a summary status.

## Voice and media workflow

The selected narration uses ElevenLabs model `eleven_v4` and Simon, Australian male, voice ID `cOEV2DrZBBGNLpE74kQu`. Per-lesson manifests/request options are authoritative. The conversational limiting request uses stability 0.35 and similarity 0.75; earlier auditions used other settings, so do not apply this retrospectively to every accepted recording.

The timestamped dialogue workflow uses `settings.similarity`, rather than assuming legacy TTS `similarity_boost` applies. Preserve the script's supported controls and conservative segment length. Seeds are best effort, not a guarantee of identical regenerated audio. `scripts/generate-elevenlabs-audio.mjs` now honours the selected manifest voice and can privately load `.env.local`. Inspect its arguments and run `--dry-run` on a valid manifest before sending requests. Do not change voice settings merely because the previous script was robotic.

Assembly changes preserve lossless source decoding, intended transition overlap, protected response silence, measured reveal timing and mastered output. Useful entry points are `scripts/assemble-lesson-playback.mjs`, `scripts/lib/timeline-narration.mjs`, `scripts/lib/playback-assembly.mjs`, `scripts/release-preflight.mjs`, `scripts/render-release.mjs`, `scripts/release-review.mjs` and `scripts/check-release-evidence.mjs`. Read their config contracts before invoking them. The generic `npm run render` examples do not establish production approval and should not bypass the selected-lesson gate.

New visual implementation includes opt-in `calculationPresentation` in `src/slides/shared/OrganisedCalculation.tsx`, supported by worked examples and quick checks. Existing lessons retain their baseline unless they opt in. Later lines support measured `lineAts`; completed stages form a result trail. Summary flow fixes the heading/row collision. Native recipe counts, coefficient comparison, reaction leftovers and enzyme binding teach specific concepts. Molar-mass teaching has its own selected slide. These are reusable teaching tools, not an instruction to restyle all 308 sources.

## YouTube and release boundaries

Channel: [HSCScience, @HSCScience-u7i](https://www.youtube.com/@HSCScience-u7i). User requested publishing help and syllabus order. Saved publication evidence is `out/prototypes/continuity-batch-01/youtube/publication-state.json`, restored with the state archive. This handoff is not a fresh channel audit.

Keep revised videos unlisted for user review before public placement. Preserve old uploads. Use accurate syllabus-aware titles/descriptions, measured chapters, aligned English (Australia) captions and appropriate AI disclosure. Treat syllabus wording as reference material and use useful paraphrased teaching/search descriptions. A mapped point is not a promise that all its required actions are taught. Do not promote the enzyme, old limiting review or latest layout because another script was accepted. Confirm exact MP4, caption/media bindings, export/release evidence and actual listening before publication changes. See the publishing plan for playlist IDs and remaining custom-thumbnail limitations.

## Verification at this handoff

Completed on this machine before commit:

- `npm run check:all`: registry generation, TypeScript and all 308 source validations passed. Existing pacing warnings remain; this is not universal production approval.
- `npm run test:source`: all 262 tests passed.
- Changed production, brief, timeline, release and selected-layout suites: all 118 tests passed.

The course checklist/ledger, recording brief and state restore also passed in a fresh staged checkout. All 716 state files were restored and checked; repeat restore and conflict refusal were verified. Every media ZIP member passed CRC verification, and the full media restore checked all 4245 files by SHA-256 (4214 newly restored, 31 identical files already present). `.gitattributes` preserves the original catalogue and comparison-document line endings so their evidence hashes survive a move between machines. Test output is local under `out/checks/` and excluded from the transfer; source review evidence is preserved. GitHub CI status must be checked on the actual pushed commit and must not be inferred from these local results.

## First work after restore

1. Run the setup and course checks above. Read the exact selected briefs and independent reports. Confirm restored audio/artwork exist and the selected source hashes match.
2. Play the limiting clear-working revision with final narration. Inspect the difficult worked section, response hold, answer reveal, summary and external captions, including the accumulating result trail around the product cues. Use a short pilot if Studio is too slow. Resolve any collision or readability finding and record only the review actually performed.
3. Check `node scripts/check-production-brief.mjs out/prototypes/empirical-formulas-organised-2026-10-09/production-brief.json --stage=recording`. Build a production manifest, dry-run, record the selected empirical script and replace estimated timing with measured alignment. Review the exact voiced result before full export.
4. Prepare corrected mole ratios, then mass-to-mass, against their existing pending briefs and course boundaries. Continue the remaining quantitative checklist, including concentration/gas/practical gaps, rather than rendering the catalogue in file order.
5. Update the ledger, checklist, selected brief and production memory deliberately as each state changes. Keep earlier evidence. Expand point-level mapping across Chemistry and Biology before claiming complete major-area coverage.

The standards are now the minimum for future videos. The remaining work is to apply them to each selected lesson, review the actual voiced revision and complete the course action mapping without losing the boundaries between draft, reviewed, exported and published.
