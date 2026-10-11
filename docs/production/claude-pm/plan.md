# Video production plan: Claude directs, Codex supplies

Started 11 October 2026. Owner decision: Claude (root session) designs and project-manages the videos. Codex agents generate artwork and do bulk checking and extraction from written briefs. This replaces the earlier arrangement where Codex agents authored scripts, designs and scene code.

Why: the Claude-built bread mould experiment (`out/experiments/mould-claude/mould-claude-v1.mp4`) was judged far better than the Codex build of the same lesson with the same narration and artwork. Codex's image generation is good and its token budget is large, so it is used where it is strong.

## Teaching standard

Every lesson follows [teaching-playbook.md](teaching-playbook.md): audience, narration style, worked examples, attempts with countdowns, memory aids, key notes, video types (including HSC practice-question walkthroughs) and the process lessons already learned.

## Roles

| Who | Does | Does not |
| --- | --- | --- |
| Claude root (Opus) | Lesson design: main question, beat sheet, shot list timed to narration words, asset briefs, narration decisions. Builds hero motion beats, integrates scenes, reviews everything, owns paid narration, renders and publication. Maintains this plan and the board. | Hand taste decisions to anyone else. |
| Claude Sonnet sub-agents | Implement scene components from Claude's shot list, one lesson or scene group per agent, in bounded files. Port shared engine pieces. | Change the shot list, script or visual system. |
| Claude Haiku sub-agents | Mechanical work: word-timing tables, asset inventories, contact sheets of stills, em dash and caption checks. | Design or science judgement. |
| Codex (pasted prompts) | Generate artwork from asset briefs. Extract site-lesson content into structured notes. Independent science and on-screen fact checks that report errors only. | Write narration, design scenes, write scene code, add caveats, or render full videos. |
| Owner | Watches the live preview of each lesson and gives feedback. Approves the final render. | |

## Pipeline for each lesson

1. **Inputs (Codex, parallel).** Site-lesson extract for the lesson (brief 02). Existing narration and timings are already in the repo.
2. **Design (Claude).** Read `coverage-ledger.md` first: teach only the content points this video owns, briefly recall (do not re-teach) what earlier videos taught, and leave later points to their owners. One design file per lesson in `docs/production/claude-pm/lessons/<id>.md`: main question, entry knowledge and handoff, beat sheet, shot list with the exact narration word that triggers each change, asset list, memory aid, and a narration decision.
3. **Narration decision (Claude).** Re-record a scene only when the improvement is small, medium or large (a leaked production word such as "supplied" or "production route", a confusing or wrong sentence, a heavy practice question). Do not re-record for tiny wording polish. Re-record by scene, in small batches, and report credit use.
4. **Assets (Codex).** Generated from Claude's asset brief into `public/assets/<subject>/` with provenance. Claude reviews each asset and accepts it or asks for a retake.
5. **Build (Claude plus Sonnet agents).** Scenes are built on the shared explainer engine (`src/explainer/`, ported from the mould experiment kit) and registered as normal compositions. No one-off prototype renderers.
6. **Self-check (Haiku plus Codex).** Contact sheet of stills at every beat for layout collisions; Codex fact check (brief 03) on the lesson's narration and on-screen text, errors only.
7. **Owner preview (no MP4 yet).** The lesson plays in the browser preview on the local review server (port 8778). The owner watches and gives feedback. Claude fixes it. This saves render time, compute and disk.
8. **Render once.** Only after owner approval: chunked render with a slim public folder, then the temp bundle is deleted.
9. **Publish and record (Codex).** Codex uploads approved MP4s to YouTube (brief 06 pattern) and updates `coverage-ledger.md` (brief 07) with what the video taught.

## Quality bar

Every lesson meets `docs/production/motion-design-standard.md` and passes its slideshow test: the change happens on screen at its spoken word, named parts are pointed at, transitions carry meaning, thinking pauses have the countdown, one visual system throughout. Scripts stay plain and conversational, with no reviewer caveats in learner copy.

## Order (Module 5)

Follows `docs/production/module5-release-priority-2026-10-10.json`, Chemistry and Biology as parallel tracks.

| Wave | Chemistry | Biology |
| --- | --- | --- |
| 0 | | Mould (built; fix the hook card overlap, move onto the engine, owner preview) |
| 1 | C1 Static and dynamic equilibrium (sealed drink) | B1 Reproduction and continuity (grower) |
| 2 | C2 Approaching equilibrium | B2 Where do sperm and egg meet? |
| 3 | C3 Concentration and temperature | Plants 1 Flower to seed, Plants 2 Runner |
| 4 | C4a Pressure, C4b Catalysts | Remaining organism groups |

Later waves are prepared while earlier lessons are in owner review.

## Render and disk hygiene (learned 11 October)

- A normal bundle copies all of `public/` (about 1.6 GB) into a temp folder. Repeated renders filled the C: drive to 0 bytes, which made renders hang. Bundle with a slim public folder holding only the lesson's files, and delete the bundle after rendering.
- The shared font loader can hang in long renders. The engine uses a lean loader for the faces it needs, with a safety release.
- Render in chunks with retries, mux audio with ffmpeg.
- Codex agents never run full renders.

## Files

- `codex-prompts/` holds the briefs Codex reads. The owner pastes a one-line instruction pointing at a brief.
- `lessons/` holds Claude's lesson designs.
- `status.md` is the live task board for this workflow.
