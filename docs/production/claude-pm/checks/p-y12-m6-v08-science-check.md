# phys-y12-m6-v08 science check

Independent Codex source review, 6 November 2026, Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m6-v08.md`, SHA256 `41f2e29d8f9346bf02ff78b5b86389ac467e3e7888ff8ff024d2c125748297dc`. No source edit, speech or render. Source review supplies no exact voiced-preview, full-speed playback or human listening pass.

Independent numerical results for this design:

- two wires: mu=1.2566370614359173e-06, coefficient=2.0000000000000002e-07, field=2.9999999999999997e-05, F_per_length=0.00023999999999999998, historical_force=2.0000000000000002e-07, elementary_charges_per_C=6.241509074460763e+18
- illustrative dataset: I=[6.0, 8.0, 10.0, 12.0, 14.0], x=[3600.0, 6400.0, 10000.0, 14400.0, 19600.0], F_per_l=[0.0007840000000000001, 0.0011760000000000002, 0.0019600000000000004, 0.00294, 0.003920000000000001], ideal_dm_g=[0.03673469387755102, 0.06530612244897958, 0.10204081632653059, 0.14693877551020407, 0.19999999999999998], origin_slope=2.000386349001932e-07, nominal_force_N=0.0009800000000000002
- attempts: A1=0.0004999999999999999, A2_factor=2.0, wrong_inverse_square=1.0

Findings: 0 blocker, 0 should fix, 1 optional.

- **optional**, S8 practical (practical method notes): Keep the illustrative dataset and graph, but add centre-to-centre separation and isolate magnetic forces on the leads from the lower-rod balance reading in the eventual method. These are measurement limitations to verify at build time, not proof the written arithmetic is wrong.

Checks: 15 scenes, 6322 narration characters under the joined-speech convention, about 563 seconds. Scene sums and joins recorded separately in mechanical-audit.json. No U+2014 or U+2061. Bold and quoted cue phrases occur in spoken order. Question cards retain demands, conditions and constants through their countdowns; feedback is brief; notes are a separate quiet hold.

All design quotations match the cached official 2017 syllabus. All15Module6 parent points and their example text were checked against official paragraphs; current12designs have no missing quotation. Do not label the syllabus2025. Practical coverage remains a separate module ledger check, including P6-IQ4-03 across v11/v17/v20 and the later P6-IQ4-01 investigation gap. Catalogue or design presence does not establish student practical completion.

Actual written joins checked from m5-v23 through m6-v13, especially the reconciled v06/v07 wire/electron frame. No frame mismatch found. Author-only scene-number references may lag the current actual handoff scenes; use the Final frame sections as the source when building.

Evidence: work/brief189/audit.json, mechanical-audit.json, calculations.json (46 numerical cases and12 vector-direction checks), quoted-cues.json, syllabus-quotation-check.json, join-frames.json. The three official HSC data/formula pages were viewed before calculations. HSC E=V/d is the printed magnitude form; signed potential changes use DeltaU=qDeltaV and field work=-qDeltaV. B=mu0I/(2pi r), flux BAcos(theta), Faraday's law and wire-force forms are printed. Data-sheet mu0 is4pi times10^-7; the modern SI distinguishes its measured value from the historic exact definition.

New-plate and reuse QA, site corrections and primary-source checks are separate artifacts. Findings remain open for Claude.
