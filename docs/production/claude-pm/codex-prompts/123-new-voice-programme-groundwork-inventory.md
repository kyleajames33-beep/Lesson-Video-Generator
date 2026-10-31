# Brief 123: consolidate the groundwork for the new-voice programme (Year 12 Maths, Year 11 Biology, Maths and Physics)

Read `00-standing-rules.md` first. This brief gathers facts only: Claude writes the plan from your report, so keep it compact and decision-ready. It can run alongside any other brief.

**Owner plan (31 Oct 2026).** Year 12 Chemistry and Biology finish on the current ElevenLabs voice. New lessons use a cheaper Google AI Studio voice. The order is Year 12 Maths (new syllabus) first, then Year 11 Biology, Maths and Physics (new syllabus). Year 11 Chemistry waits, because its new syllabus starts a year later.

Earlier briefs already did a lot of groundwork. Find it, check it is still current, and summarise it; don't redo it. Start with briefs 49, 52, 61 and 62, and the brief 79 plates. Then look at:
- `docs/production/claude-pm/assets/physics-maths-image-bank/` (`maths-plan.json`, `physics-plan.json`, `lesson-image-map.md`, `generation-queue.json`);
- `src/explainer/physics/` (the course kit, the module 5 to 8 folders, `production-state.json`, the projectile pilot);
- `src/explainer/math/` (the tangent pilot);
- `checks/codex-interim-*physics*`, `checks/codex-interim-*maths*`, `physics-eddy-tube-first-asset-review.md` and `docs/production/physics-and-release-gate-2026-10-03.md`.

Write `checks/new-voice-programme-inventory-2026-10-31.md`, with these sections.

1. **What exists, per subject.** Cover Year 12 Maths, and Year 11 Biology, Maths and Physics. For each, give:
   - the syllabus and version, the implementation year and the official source;
   - the site lessons (counts per topic or focus area, and which are complete, placeholder or missing);
   - existing route or plan files;
   - existing video code, visual kits and pilots, with their state (built, reviewed, rendered or abandoned);
   - existing plates and image-bank items, with counts and which are approved.
2. **Maths courses.** List which courses the site covers for Year 12 under the new syllabus (Advanced, Extension 1, Extension 2, Standard), with lesson counts. The owner will choose which come first.
3. **Visual kit gaps.** List what each subject's videos need that the explainer engine can't yet draw, ranked by how many lessons need it. Examples: algebra alignment, function graphs, calculus visuals, vectors, circuits, fields, waves and data charts. Note which earlier reviews flagged each gap.
4. **Leftovers and conflicts.** Cover:
   - files that are stale, duplicated or abandoned;
   - anything that conflicts with current rules (for example people in plates, burned captions, the legacy engine);
   - the 74 MB of untracked files in `src/explainer/physics/`: what they are, and whether they should be committed, archived or deleted. Don't delete anything; recommend only.
5. **Suggested first route.** For Year 12 Maths only, give the first 8 to 12 videos in teaching order, one line each with its main learner question, in the format of `docs/production/module5-video-route-2026-10-10.json`. This is a draft for Claude.

Hand in to `status.md`, with one line per section. No design, speech, renders, deletions or commits.
