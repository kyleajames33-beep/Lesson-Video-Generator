# phys-y12-m6-v13 science check

Independent Codex source review, 6 November 2026, Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m6-v13.md`, SHA256 `7011c4056fa76a039df3b9ea64305abe0ca48033b7ca180f927a617e834b87c4`. Source, narration and scene code unchanged. No speech or render. No exact voiced-preview, human listening, full-speed motion or release pass.

Independent numerical results:

- ideal transformer: Np=100, Ns=200, Vp=10, Vs=20.0, Is=0.5, Ip=1.0, Pin=10.0, Pout=10.0, volts_per_turn=0.1
- ideal transformer: Np=1200, Ns=60, Vp=230, Vs=11.5, Is=10, Ip=0.5, Pin=115.0, Pout=115.0, volts_per_turn=0.19166666666666668
- ideal transformer: Np=200, Ns=3000, Vp=24, Vs=360.0, Is=0.4, Ip=6.0, Pin=144.0, Pout=144.0, volts_per_turn=0.12
- screen and wrong current: screen_Vs=460.0, wrong_Ip=0.02666666666666667, voltage_factor=10, current_factor=0.1, power_factor=1

Findings: 0 blocker, 0 should fix, 1 optional.

- **optional**, S7 field arrows (motion check): Keep this causal scene. At build, choose a stated rising-flux instant for the secondary field opposing the increase, or phase the arrows correctly over AC. The secondary field is not always opposite the instantaneous core flux. Primary extra ampere-turns cancel secondary ampere-turns.

Mechanical checks: 16 scenes, 6041 declared narration characters using joined speech with one inter-scene space, about 541 seconds. Counts match. No U+2014 or U+2061. Bold and quoted cues occur in spoken order. Question cards retain demands, data and conditions through countdowns. Feedback is brief and notes are a separate quiet hold. Exact timing and caption fit remain voiced-preview checks, especially the near-cap v16to20designs.

Syllabus: official2017Physics. All15Module6parents and their examples were compared with the cached official DOCX; these8designs have no missing quotation. Full-module primary-owner coverage and practical gaps are recorded separately. P6-IQ4-03relates energy conservation in v11, then applies it to DC motors v17and magnetic braking v20. P6-IQ4-01has an outstanding practical gap. Quotation alone is not coverage or learner completion.

Actual written joins checked from m6-v12through m7-v01. v16/v17uses the root-reconciled power-pack/two-needle-ammeter/motor-model frame. No actual frame mismatch found. Author-only handoff scene numbers can lag actual Final frame sections; use the actual sections at build.

Evidence: work/brief190/audit.json, mechanical-audit.json, calculations.json (31 numerical cases and5direction checks), quoted-cues.json, syllabus-quotation-check.json and join-frames.json. Three official HSC data/formula pages visually checked before calculation. The torque formula uses theta from the area normal, matching the sheet. Source-fact downloads, site log, plate manifest, per-design provenance and QA are separate artifacts. Findings remain open for Claude.
