# phys-y12-m5-v21 science check

Independent Codex source review, 6 November 2026. Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m5-v21.md`. SHA256: `e8d1322b5cb048e7403991691147323c9ec697d2291e2979c3a5434d7742e665`. Design, narration and code unchanged. No exact voiced preview, full-speed playback or human listening is claimed.

For 1000 kg, U at the surface is about -6.28159e10 J and at the approximate GEO radius about -9.4615e9 J, so DeltaU is +5.33543e10 J. The 9.8-based mgh estimate is about 6.60 times this. The field at the top is about 0.22369 N/kg, 2.27 percent of the model surface value. The area fractions and negative potential formula agree. The h/R error is exact for mgh using g=GM/R squared; the author note correctly distinguishes using 9.8. A1 is +6.35238e9 J and A2 +2.0e10 J.

Findings: 0 blocker, 1 should fix, 1 optional.

- **should fix**, S3 graph and work-area label (lifting work versus work by gravity): The positive area is the work supplied for a slow outward lift, not positive work done by the inward gravitational force. The graph says force on the satellite and the speech calls each step its work without naming the lifting force. Name the outward lifting force/magnitude and external work, or label the gravitational magnitude area as minus W_gravity. S7 already correctly says work supplied slowly equals DeltaU. Align the earlier graph and explanation to that sign convention without adding a separate ledger.
- **optional**, Decisions, Handoff bullet (author-only handoff scene number): The Handoff decision names scene16, while the actual handoff and Final frame section identify scene15. Correct the author-only cross-reference when editing. The actual outgoing and next opening frames match, so this is not a broken join and does not require a recording change.

Checks: 16 scenes, 5681 declared narration characters under the joined speech with one space between scenes convention, about 518 seconds. Scene sum 5666 and joined count 5681 are recorded separately. Both counting conventions match the design. Bold and quoted cue phrases occur in spoken order. No U+2014 or U+2061. Question cards retain the demands, conditions and numerical givens through the countdown. Key notes are a separate quiet hold.

2017 syllabus IDs: P5-IQ3-05. Parent wording and child examples were compared with the cached official DOCX and design quotations. All site hashes match the route and source. A quoted point does not establish practical completion. See module5-coverage.json for one primary owner per facet, the banked-friction numerical gap and the v16 method blocker.

The written incoming and outgoing frames match the neighbouring designs. v16/v17 uses the reconciled Earth/Moon frame; v23/current m6-v01 uses the actual parallel-plate frame. Incorrect author-only scene references are reported separately from frame mismatches. Actual joins remain a playback check.

Evidence: work/brief188/calculations.json (71 independent cases, including all main calculations and geometric checks), primary-sources.json, constants-checked.md, audit.json, mechanical-audit.json, quoted-cues.json, syllabus-quotation-check.json and join-frames.json. The official HSC sheet was visually checked before the orbit arithmetic. New plate QA and site-correction entries are separate artifacts.
