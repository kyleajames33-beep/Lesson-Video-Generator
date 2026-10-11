# Brief 07: syllabus coverage ledger for Module 5

Read `00-standing-rules.md` first. The owner wants a single place that tracks what each video teaches against the syllabus, so later videos refer back instead of re-teaching. You build and maintain the data; Claude decides lesson boundaries.

## Inputs

- `docs/production/module5-video-route-2026-10-10.json` (planned video boundaries, candidate syllabus actions, and the `teachingOwnershipReset` notes about which video owns which idea)
- `docs/production/course-progression-plan-2026-10-09.md` and `course-progression-ledger-2026-10-09.json` (older catalogue ledger; cite it, do not duplicate it)
- The official NSW **2017** syllabus content for Biology and Chemistry Year 12 Module 5, as linked in `docs/production/youtube-publishing-plan-2026-10-09.md`. Syllabus versions (owner, 11 October 2026): Chemistry uses 2017 for Year 11 and 12; Biology uses 2025 for Year 11 and 2017 for Year 12. So Module 5 tracks the 2017 content points only. Do not add 2025 rows. When Year 11 Biology is tracked later, it uses the 2025 syllabus.
- Finished lessons: `docs/production/claude-pm/lessons/chem-m5-c01.md`, `bio-m5-b01.md`, and the mould lesson in `docs/production/fungi-design-reset-2026-10-11/teaching-reset-take02/lesson.json`
- `docs/production/claude-pm/site-extracts/` for what the site lessons cover

## Output

Create `docs/production/claude-pm/coverage-ledger.md` with two parts per subject (Chemistry M5, Biology M5).

**Part 1. Syllabus outcomes.** One row per official content point (quote it briefly, with its ID or number). Columns: content point, owning video (planned or done), status (`taught`, `planned`, `partly taught`, `no home yet`), and notes such as practical work that a video only supports.

**Part 2. Video record.** One row per video in route order. Columns: video ID, state (`released`, `in production`, `planned`), learner question, terms and ideas it introduces (with the plain meaning used), memory aids used, worked examples and their numbers, and ideas it only recalls from earlier videos.

Mark C1, B1 and the mould video as `released` once Brief 06 has uploaded them, otherwise `rendered`. Use the route's ownership notes (for example: K is introduced in c05, catalysts in c04 C4B, meiosis in b05b) for planned rows. List every content point that has `no home yet` at the bottom as a flag for Claude.

Keep it plain and scannable: tables, no long prose, no em dashes. Append a hand-in to `status.md`.

## Ongoing duty

After every future Claude lesson design lands in `docs/production/claude-pm/lessons/`, Claude will ask you to update the ledger rows. If a design re-teaches something the ledger shows as already taught (rather than briefly recalling it), list it in your hand-in as a finding.
