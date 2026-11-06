# phys-y12-m6-v07 science check

Independent Codex source review, 6 November 2026, Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m6-v07.md`, SHA256 `955f51b9eb56066b2b9398d6addf882d836974fb78d22fa44c9977b36754499e`. No source edit, speech or render. Source review supplies no exact voiced-preview, full-speed playback or human listening pass.

Independent numerical results for this design:

- rod: F=0.06, weight_kg=0.006122448979591836, F30=0.03, F60=0.05196152422706631, drift=0.0002937504589850922
- voice coil: one_turn=0.06283185307179587, length=5.026548245743669, F=1.0053096491487339
- attempt1: F90=0.15000000000000002, F30=0.07500000000000001, wrong_cos=0.1299038105676658

Findings: 0 blocker, 1 should fix, 0 optional.

- **should fix**, S7 voice-coil inset (visual specification): An end-on view of a circular voice coil shows tangential current in the plane, not dots on one side and crosses on the other. Those symbols belong to a side cross-section. Use an end-on ring with tangent arrows and axial force dots/crosses, or relabel/redraw the inset as a side section. Keep the correct radial field and1.0N force.

Checks: 14 scenes, 6005 narration characters under the joined-speech convention, about 540 seconds. Scene sums and joins recorded separately in mechanical-audit.json. No U+2014 or U+2061. Bold and quoted cue phrases occur in spoken order. Question cards retain demands, conditions and constants through their countdowns; feedback is brief; notes are a separate quiet hold.

All design quotations match the cached official 2017 syllabus. All15Module6 parent points and their example text were checked against official paragraphs; current12designs have no missing quotation. Do not label the syllabus2025. Practical coverage remains a separate module ledger check, including P6-IQ4-03 across v11/v17/v20 and the later P6-IQ4-01 investigation gap. Catalogue or design presence does not establish student practical completion.

Actual written joins checked from m5-v23 through m6-v13, especially the reconciled v06/v07 wire/electron frame. No frame mismatch found. Author-only scene-number references may lag the current actual handoff scenes; use the Final frame sections as the source when building.

Evidence: work/brief189/audit.json, mechanical-audit.json, calculations.json (46 numerical cases and12 vector-direction checks), quoted-cues.json, syllabus-quotation-check.json, join-frames.json. The three official HSC data/formula pages were viewed before calculations. HSC E=V/d is the printed magnitude form; signed potential changes use DeltaU=qDeltaV and field work=-qDeltaV. B=mu0I/(2pi r), flux BAcos(theta), Faraday's law and wire-force forms are printed. Data-sheet mu0 is4pi times10^-7; the modern SI distinguishes its measured value from the historic exact definition.

New-plate and reuse QA, site corrections and primary-source checks are separate artifacts. Findings remain open for Claude.
