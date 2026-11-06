# phys-y12-m5-v20 science check

Independent Codex source review, 6 November 2026. Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m5-v20.md`. SHA256: `cbbb13492fb7793f91f6d39a57306b168bd0684ee7d24de65834d846e30cd3f6`. Design, narration and code unchanged. No exact voiced preview, full-speed playback or human listening is claimed.

Halley's supplied extremes give a=17.91855 AU, eccentricity 0.967235 and period 75.8498 years, about 76. The shown rounded 17.92 intermediate should be treated as approximate; carried values give the stated 75.8. The wrong extreme-distance results are 209.285 and 0.44985 years. Earth distance/speed ratios are both about 1.034. NASA Mars data give a cubed=3.53724 and T squared=3.53748 in Earth units. A1 is 11.8582 years, and the A2 speed ratio is 1.20637.

Findings: 0 blocker, 1 should fix, 1 optional.

- **should fix**, orbit stages (root decision10 velocity colour): Root decision10 assigns velocity teal. This design uses orange velocity/launch arrows instead, relying on the earlier resultant colour. Reconcile the drawings with the approved extended key before build; retain orange for kinetic energy and amber for forces. This is one shared course consistency issue, repeated in each affected design report, with no narration cost.
- **optional**, Decisions, Handoff bullet (author-only handoff scene number): The Handoff decision names scene16, while the actual handoff and Final frame section identify scene15. Correct the author-only cross-reference when editing. The actual outgoing and next opening frames match, so this is not a broken join and does not require a recording change.

Checks: 16 scenes, 5679 declared narration characters under the joined speech with one space between scenes convention, about 519 seconds. Scene sum 5664 and joined count 5679 are recorded separately. Both counting conventions match the design. Bold and quoted cue phrases occur in spoken order. No U+2014 or U+2061. Question cards retain the demands, conditions and numerical givens through the countdown. Key notes are a separate quiet hold.

2017 syllabus IDs: P5-IQ3-04. Parent wording and child examples were compared with the cached official DOCX and design quotations. All site hashes match the route and source. A quoted point does not establish practical completion. See module5-coverage.json for one primary owner per facet, the banked-friction numerical gap and the v16 method blocker.

The written incoming and outgoing frames match the neighbouring designs. v16/v17 uses the reconciled Earth/Moon frame; v23/current m6-v01 uses the actual parallel-plate frame. Incorrect author-only scene references are reported separately from frame mismatches. Actual joins remain a playback check.

Evidence: work/brief188/calculations.json (71 independent cases, including all main calculations and geometric checks), primary-sources.json, constants-checked.md, audit.json, mechanical-audit.json, quoted-cues.json, syllabus-quotation-check.json and join-frames.json. The official HSC sheet was visually checked before the orbit arithmetic. New plate QA and site-correction entries are separate artifacts.
