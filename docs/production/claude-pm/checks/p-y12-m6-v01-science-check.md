# phys-y12-m6-v01 science check

Independent Codex source review, 6 November 2026, Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m6-v01.md`, SHA256 `433922b3d4450f8fe4e47049cf1d5fdc3b3b1f49c75bdcc9cc66ca8d541c5469`. No source edit, speech or render. Source review supplies no exact voiced-preview, full-speed playback or human listening pass.

Independent numerical results for this design:

- plate field: V=100, d=0.02, E=5000.0
- plate field: V=200, d=0.02, E=10000.0
- plate field: V=100, d=0.04, E=2500.0
- electron and proton: F=8.01e-16, ae=879350093314304.6, ap=478780633592.349, ae_over_g=89729601358602.5, mass_ratio=1836.645076298167
- attempt1: E=6000.0, F=9.612e-16, a=574536760310.8188, wrong_cm_E=60.0
- oil balance magnitudes: E=490000.0000000001, V=7840.000000000002, radius=1.6190600420035217e-06

Findings: 0 blocker, 2 should fix, 0 optional.

- **should fix**, S9 (learner copy or diagram): After saying the force flips, It is also about1800times bigger appears to refer to force. The force magnitudes are equal. Name acceleration as the quantity that grows, preserving the correct1837ratio.
- **should fix**, S8, S14 and notes (learner copy or diagram): The drop has negative signed q but the positive scalar balance is written qE=mg and E=mg/q. Use charge magnitude in this scalar balance, as author note(d) already does, or state a signed vertical equation consistently. The numerical results and top-positive choice are correct.

Checks: 16 scenes, 6138 narration characters under the joined-speech convention, about 549 seconds. Scene sums and joins recorded separately in mechanical-audit.json. No U+2014 or U+2061. Bold and quoted cue phrases occur in spoken order. Question cards retain demands, conditions and constants through their countdowns; feedback is brief; notes are a separate quiet hold.

All design quotations match the cached official 2017 syllabus. All15Module6 parent points and their example text were checked against official paragraphs; current12designs have no missing quotation. Do not label the syllabus2025. Practical coverage remains a separate module ledger check, including P6-IQ4-03 across v11/v17/v20 and the later P6-IQ4-01 investigation gap. Catalogue or design presence does not establish student practical completion.

Actual written joins checked from m5-v23 through m6-v13, especially the reconciled v06/v07 wire/electron frame. No frame mismatch found. Author-only scene-number references may lag the current actual handoff scenes; use the Final frame sections as the source when building.

Evidence: work/brief189/audit.json, mechanical-audit.json, calculations.json (46 numerical cases and12 vector-direction checks), quoted-cues.json, syllabus-quotation-check.json, join-frames.json. The three official HSC data/formula pages were viewed before calculations. HSC E=V/d is the printed magnitude form; signed potential changes use DeltaU=qDeltaV and field work=-qDeltaV. B=mu0I/(2pi r), flux BAcos(theta), Faraday's law and wire-force forms are printed. Data-sheet mu0 is4pi times10^-7; the modern SI distinguishes its measured value from the historic exact definition.

New-plate and reuse QA, site corrections and primary-source checks are separate artifacts. Findings remain open for Claude.
