# phys-y12-m6-v05 science check

Independent Codex source review, 6 November 2026, Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m6-v05.md`, SHA256 `35062cfa4a2569124d8c2dc537ea9488dbc0c2853ab0acbd89067cb01c0342c1`. No source edit, speech or render. Source review supplies no exact voiced-preview, full-speed playback or human listening pass.

Independent numerical results for this design:

- electron: radius=0.0011372034956304618, period=1.7863150737546456e-09, a=1.4069601493028874e+16, centripetal_a=1.4069601493028874e+16
- proton: radius=2.0886392009987516, period=3.2808267849286668e-06, a=7660490137477.584, centripetal_a=7660490137477.585
- attempt1: radius=0.1253183520599251, period=2.6246614279429337e-07, wrong_electron_radius=6.823220973782771e-05, double_speed_radius=0.2506367041198502

Findings: 0 blocker, 1 should fix, 0 optional.

- **should fix**, S7 and kit specification (visual specification): Two concentric circles of different radii cannot start at the same physical point. Use equal starting phase on separate circles, or separate centres if a shared launch point is essential. Preserve the same lap time and scale comparison.

Checks: 17 scenes, 5640 narration characters under the joined-speech convention, about 512 seconds. Scene sums and joins recorded separately in mechanical-audit.json. No U+2014 or U+2061. Bold and quoted cue phrases occur in spoken order. Question cards retain demands, conditions and constants through their countdowns; feedback is brief; notes are a separate quiet hold.

All design quotations match the cached official 2017 syllabus. All15Module6 parent points and their example text were checked against official paragraphs; current12designs have no missing quotation. Do not label the syllabus2025. Practical coverage remains a separate module ledger check, including P6-IQ4-03 across v11/v17/v20 and the later P6-IQ4-01 investigation gap. Catalogue or design presence does not establish student practical completion.

Actual written joins checked from m5-v23 through m6-v13, especially the reconciled v06/v07 wire/electron frame. No frame mismatch found. Author-only scene-number references may lag the current actual handoff scenes; use the Final frame sections as the source when building.

Evidence: work/brief189/audit.json, mechanical-audit.json, calculations.json (46 numerical cases and12 vector-direction checks), quoted-cues.json, syllabus-quotation-check.json, join-frames.json. The three official HSC data/formula pages were viewed before calculations. HSC E=V/d is the printed magnitude form; signed potential changes use DeltaU=qDeltaV and field work=-qDeltaV. B=mu0I/(2pi r), flux BAcos(theta), Faraday's law and wire-force forms are printed. Data-sheet mu0 is4pi times10^-7; the modern SI distinguishes its measured value from the historic exact definition.

New-plate and reuse QA, site corrections and primary-source checks are separate artifacts. Findings remain open for Claude.
