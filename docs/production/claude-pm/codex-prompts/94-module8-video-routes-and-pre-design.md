# Brief 94: draft video routes for Year 12 Module 8 (Chemistry and Biology), plus pre-design gaps

Read `00-standing-rules.md` and brief 69 first. Do brief 93 (Module 7) first. Module 8 follows it. Work the same way you did for Module 6 in brief 69, but apply what the Module 6 review changed (`docs/production/module6-route-review-claude.md`):
- Core videos run 8 to 9 minutes (5,500 to 6,800 characters, and at or under about 9.5 minutes with holds).
- Short topics are merged so each video carries one full learner question.
- Add G-series practice videos where calculation or evaluation skills pile up.
- Add P-series videos for each required practical.
- Use the current syllabus ledger IDs. Module 6 had an off-by-one error in the route draft, so check every ID against `docs/production/programme/syllabus/chem-2017-y12.json` and `bio-2017-y12.json`.

## 1. Module 8 routes

**Sources:**
- the Module 8 site extracts in `docs/production/claude-pm/site-extracts/`;
- the Module 8 pre-design packs in `docs/production/claude-pm/pre-design/`;
- the site lessons (`C:/Users/kygs/hscscience/subjects/<subject>/year12/module8/`, read-only);
- `docs/production/module8-memory-aids-2026-10-11.md`;
- the 2017 ledgers.

**Output:**
- `docs/production/module8-video-route-draft.json`, in the same schema as the Module 6 route JSON;
- `docs/production/module8-video-route-draft.md`, a readable table: id, title, site lessons, dotpoints with ledger IDs, prerequisites (including Module 5, 6 and 7 videos where relevant), estimated minutes and playlist order.
- Ids follow the pattern `chem-m8-c01` and `bio-m8-b01`, with `-g01` and `-p01`.

## 2. Pre-design gaps

For every Module 8 route entry, check that a pre-design pack and site extract exist. List any that are missing, and create them in the existing pack format for any core video that lacks one.

## 3. Module 8 plate gap audit

Like `assets/m6-plate-gaps.md`, write `assets/m8-plate-gaps.md`. List the real objects each Module 8 video will likely need (organic molecules are coded; apparatus, organisms, pathogens and products are painted), mark which plates already exist in `public/assets/`, and flag any existing plate showing hands or people as retired. **Do not paint yet.** Plates are commissioned per design.

Mark everything as a draft for Claude's review. Australian spelling, no em dashes. Hand in to `status.md` with the video count per subject.
