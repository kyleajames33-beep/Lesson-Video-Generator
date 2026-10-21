# Brief 93: draft video routes for Year 12 Module 7 (Chemistry and Biology), plus pre-design gaps

Read `00-standing-rules.md` and brief 69 first. Module 6 is nearly fully designed, so Module 7 is next. Work the same way you did for Module 6 in brief 69, but apply what the Module 6 review changed (`docs/production/module6-route-review-claude.md`):
- Core videos run 8 to 9 minutes (5,500 to 6,800 characters, and at or under about 9.5 minutes with holds).
- Short topics are merged so each video carries one full learner question.
- Add G-series practice videos where calculation or evaluation skills pile up.
- Add P-series videos for each required practical.
- Use the current syllabus ledger IDs. Module 6 had an off-by-one error in the route draft, so check every ID against `docs/production/programme/syllabus/chem-2017-y12.json` and `bio-2017-y12.json`.

## 1. Module 7 routes

**Sources:**
- the Module 7 site extracts in `docs/production/claude-pm/site-extracts/`;
- the Module 7 pre-design packs in `docs/production/claude-pm/pre-design/`;
- the site lessons (`C:/Users/kygs/hscscience/subjects/<subject>/year12/module7/`, read-only);
- `docs/production/module7-memory-aids-2026-10-11.md`;
- the 2017 ledgers.

**Output:**
- `docs/production/module7-video-route-draft.json`, in the same schema as the Module 6 route JSON;
- `docs/production/module7-video-route-draft.md`, a readable table: id, title, site lessons, dotpoints with ledger IDs, prerequisites (including Module 5 and 6 videos where relevant), estimated minutes and playlist order.
- Ids follow the pattern `chem-m7-c01` and `bio-m7-b01`, with `-g01` and `-p01`.

## 2. Pre-design gaps

For every Module 7 route entry, check that a pre-design pack and site extract exist. List any that are missing, and create them in the existing pack format for any core video that lacks one.

## 3. Module 7 plate gap audit

Like `assets/m6-plate-gaps.md`, write `assets/m7-plate-gaps.md`. List the real objects each Module 7 video will likely need (organic molecules are coded; apparatus, organisms, pathogens and products are painted), mark which plates already exist in `public/assets/`, and flag any existing plate showing hands or people as retired. **Do not paint yet.** Plates are commissioned per design.

## 4. Module 6 practicals and practice: route check

List the Module 6 P-series and G-series entries still undesigned (Chemistry G01, G02, P01 to P07; Biology G02, P-series; plus B16, B18 and B19), with their site lessons and required practicals, so Claude can schedule them.

Mark everything as a draft for Claude's review. Australian spelling, no em dashes. Hand in to `status.md` with the video count per subject.
