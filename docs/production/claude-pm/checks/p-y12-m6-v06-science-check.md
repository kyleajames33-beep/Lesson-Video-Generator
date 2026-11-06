# phys-y12-m6-v06 science check

Independent Codex source review, 6 November 2026, Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m6-v06.md`, SHA256 `7d86f6368544dc15b26f92843b6c2371814a2a6f7bb907f3b77cbc999773357b`. No source edit, speech or render. Source review supplies no exact voiced-preview, full-speed playback or human listening pass.

Independent numerical results for this design:

- electron entry forces: v=100000.0, FE=6.408e-16, FB=3.2040000000000004e-16, net_up=3.204e-16, nominal_gyroradius=2.8430087390761545e-05
- electron entry forces: v=200000.0, FE=6.408e-16, FB=6.408000000000001e-16, net_up=0.0, nominal_gyroradius=5.686017478152309e-05
- electron entry forces: v=400000.0, FE=6.408e-16, FB=1.2816000000000002e-15, net_up=-6.408e-16, nominal_gyroradius=0.00011372034956304618
- attempt1: E=30000.0, v=600000.0, wrong_voltage_over_B=12000.0
- site selector and proton: v_site=44117647.058823526, r_site=0.7378050360924276, proton_r=0.10443196004993759

Findings: 0 blocker, 1 should fix, 0 optional.

- **should fix**, S8 analyser (learner copy or diagram): Heavier ions swing wider only when their charge is the same (at fixed speed and field). Add that condition to the two-ion comparison, or compare m/|q|. The existing r proportional m/q tag is correct.

Checks: 16 scenes, 5597 narration characters under the joined-speech convention, about 507 seconds. Scene sums and joins recorded separately in mechanical-audit.json. No U+2014 or U+2061. Bold and quoted cue phrases occur in spoken order. Question cards retain demands, conditions and constants through their countdowns; feedback is brief; notes are a separate quiet hold.

All design quotations match the cached official 2017 syllabus. All15Module6 parent points and their example text were checked against official paragraphs; current12designs have no missing quotation. Do not label the syllabus2025. Practical coverage remains a separate module ledger check, including P6-IQ4-03 across v11/v17/v20 and the later P6-IQ4-01 investigation gap. Catalogue or design presence does not establish student practical completion.

Actual written joins checked from m5-v23 through m6-v13, especially the reconciled v06/v07 wire/electron frame. No frame mismatch found. Author-only scene-number references may lag the current actual handoff scenes; use the Final frame sections as the source when building.

Evidence: work/brief189/audit.json, mechanical-audit.json, calculations.json (46 numerical cases and12 vector-direction checks), quoted-cues.json, syllabus-quotation-check.json, join-frames.json. The three official HSC data/formula pages were viewed before calculations. HSC E=V/d is the printed magnitude form; signed potential changes use DeltaU=qDeltaV and field work=-qDeltaV. B=mu0I/(2pi r), flux BAcos(theta), Faraday's law and wire-force forms are printed. Data-sheet mu0 is4pi times10^-7; the modern SI distinguishes its measured value from the historic exact definition.

New-plate and reuse QA, site corrections and primary-source checks are separate artifacts. Findings remain open for Claude.
