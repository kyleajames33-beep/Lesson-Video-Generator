# Brief 259: new voicing order (Year 12 Physics waves), re-preparation of label-edited designs, and syllabus ledger fixes

Read `00-standing-rules.md`, brief 236 (recording preparation and the nightly worker) and the reuse audit `docs/production/programme/syllabus-reuse-audit-2026-11-21.md` (and its `.json`). Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Request no speech in this brief: the nightly worker voices. Do brief 258 first if it is not finished. Tonight's 19:00 run (wave 2 remainder) is unchanged.

## Why

Root decided this on 21 November 2026 from the reuse audit and the syllabus timeline:
- The current Year 12 Physics cohort (2027 HSC) is studying Module 5 now. 69 of the 81 Year 12 Physics designs also serve the 2025 Year 12 course, so they are long-life work. No Physics design has a voicing wave yet.
- Year 11 Chemistry (2017) is first taught in Term 1 2027: Modules 1 and 2 first, then 3, then 4. The eight `chem-y11-m4-v07` to `v14` designs serve 2027 only and are taught in Terms 3 and 4 of 2027.
- The voice quota (99 Google requests a day, about 4 lessons) is the bottleneck.

## Task 1: re-prepare the label-edited designs

Root removed course labels ("Module N", "the syllabus says") from the narration of 11 designs today so one take serves both syllabuses: `phys-y12-m5-v09`, `m6-v05`, `m6-v07`, `m6-v09`, `m6-v19`, `m8-v07`, `m8-v10`; `chem-y11-m2-v20`, `m3-v01`, `m3-v13`, `m3-v15` (see `git log -1 -- docs/production/claude-pm/lessons/`). These are real narration changes (short phrases only; bold cues untouched). Re-prepare the four Chemistry lessons in waves 4 and 5 as new prepared inputs (character counts, manifests, audits, hashes), archiving the old prepared rows with `.before-brief259`. Run the existing prevoice checks on them (em dashes, cue order, scene counts). Report the character change per lesson.

## Task 2: prepare Year 12 Physics recording waves

Prepare Physics waves exactly as brief 236 prepares Chemistry waves (same files, gates and Google voice settings), in module order, long-life designs first within each module, using the audit's Q1 rows:
- **Physics wave P5:** Module 5 designs (except `m5-v04`, already voiced), the audit's "as-is" and "minor edit" rows first, then `m5-v10` and `m5-v15` (2017-only) last. Leave out `m5-v14` (banked tracks; absent from 2025): list it as deferred.
- **Physics waves P6, P7, P8:** the same pattern for Modules 6, 7 and 8 (2017-only last: `m6-v08`, `m6-v15`, `m7-v02`, `m8-v01`).

A design without a passed recording-stage readiness review (the same evidence brief 236 requires for Chemistry) must not enter a wave: list it, and root will run the review.

## Task 3: set the nightly worker order

After the wave 2 remainder, the worker voices in this order. Each night, keep lessons from a module together, and keep within the quota:
1. Physics P5
2. Chemistry wave 3
3. Physics P6
4. Chemistry wave 4 (re-prepared)
5. Physics P7
6. Chemistry wave 5 (re-prepared)
7. Physics P8
8. Chemistry wave 6, `m4-v04` to `v06` first, then `m4-v07` to `v14`

Year 11 Biology and Physics (2025) waves come after Physics P6. Root will send a separate brief for them, with the audit's stand-in decisions. Record the order in `docs/production/parallel-production-board-2026-10-10.json` and in the worker's configuration. Show root the dry-run plan for the next three nights in `status.md`.

## Task 4: syllabus ledgers

1. Build `docs/production/programme/syllabus/phys-new-y12.json` from the official NESA Physics 11-12 (2025) Year 12 content, mirroring `phys-new-y11.json`'s format and provenance (official URL, retrieval date, exact wording). Then map the audit's provisional `P25Y12-*` IDs to the official IDs in a crosswalk file, and list any audit match that does not hold.
2. Fix the ID clash: `chem-new-y12.json` and `bio-new-y12.json` reuse the Year 11 prefixes (for example `C25-FA1-G1-01` exists in both years). Give Year 12 points unique IDs (`C25Y12-...`, `B25Y12-...`, matching the audit), update `generate_ledgers.py`, and list every file that cites a clashing ID.

## Hand-in to `status.md`

- Re-preparation results.
- The Physics waves (lessons, characters, deferred and unreviewed designs).
- The worker order and the next-three-nights dry run.
- The new ledger with its crosswalk, and the ID-clash fix.
