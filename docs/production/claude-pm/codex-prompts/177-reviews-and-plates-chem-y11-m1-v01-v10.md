# Brief 177: reviews, then plates, for Year 11 Chemistry Module 1 v01 to v10

Read `00-standing-rules.md` and briefs 163 and 167 first, and use brief 163's review method and file formats exactly. Do not spawn sub-agents. Make no design edits, speech or commits. Run after brief 176.

## Inputs
- **Designs:** `lessons/chem-y11-m1-v01.md` to `v10.md` (Revision 1; keys `c-y11-m1-vNN`), written to `chem-y11-design-brief.md`.
- **Root decisions:** `checks/root-decisions-chem-y11-m1.md`. Confirm or challenge each.
- **Route, ledger and packs:** your brief 167 outputs (`programme/chem-y11-route-inputs.json`, `programme/syllabus/chem-2017-y11.json`, `pre-design/chem-y11/`). Syllabus is 2017; never label anything as 2025.

## Part 1: reviews
Independent learning review (`docs/production/student-learning-review.md`) and science check for each design, traced from Stage 5 and the earlier videos in playlist order. Check especially: every 2017 content point quoted verbatim and covered once across v01 to v10; worked numbers recalculated (`work/brief177/`); root decision 5's items; cue words verbatim and in spoken order; openings equal previous final frames (v06's opening was reconciled by root); narration 5,500 to 6,800 characters and at most about 570 s; brief feedback; reading load in long scenes (root decision 10); no em dashes, Australian spelling, no people, hands or faces. Repairs must be length-neutral or name a cut.

Write `checks/c-y11-m1-vNN-learning-review.md` and `checks/c-y11-m1-vNN-science-check.md`.

Also log the site notes from each design's Decisions section in `site-corrections-chem-y11.md` (exact old text, correction, reason), and fix the ledger and route JSON replacement characters (root decision 9).

## Part 2: plates
After the reviews, paint the requested new plates (transparent PNG with alpha, `y11c-` prefix, never stretched, no people or hands), following any review changes, as in brief 163. Check every reused plate path exists; list any that do not. Manifest to `assets/brief177-manifest.json`, QA to `assets/brief177-qa/`.

## Hand-in
To `status.md`, one paragraph per design (blockers, should-fix, optional, characters, seconds) and one line for the plates.
