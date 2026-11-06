# phys-y12-m6-v19 learning review

Independent Codex source review, 6 November 2026, Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m6-v19.md`, SHA256 `9866e195d5acd3fd3bd8a3ac5b0805d5e3dc76cb50463e341b8d19d3e426dc20`. Source, narration and scene code unchanged. No speech or render. No exact voiced-preview, human listening, full-speed motion or release pass.

The chasing-light analogy explains how stationary coils make a turning field, and the closed cage loops then connect it to induction. Keep the short tagged slip calculation, because it gives the lag a useful scale. Keep the downwind-boat analogy after repairing the zero-load ideal-limit claim. The diagram must match its four-pole speed case or explicitly separate them. More-load response is correctly limited in author notes to normal small-slip operation. No source-approved motor practical is supplied here.

Findings: 0 blocker, 2 should fix, 0 optional.

- **should fix**, S1, S6, S12 and notes (learner copy or diagram): Zero slip means zero sustained induction torque. It does not itself imply slowing if BOTH friction and load are exactly zero, as S1explicitly asserts. Author note(e) correctly describes approach from below as a limit. Frame the necessary slip claim around producing torque against a load/loss and repair the no-friction/no-load inference, preserving the useful no slip,no grip mnemonic.
- **should fix**, S2 stator versus S8 numerical case (diagram consistency): Three opposite phase-coil pairs shown as six coils form the usual two-pole schematic, which at50Hz corresponds to3000rev/min, not the1500rev/min four-pole numerical example. Match the winding/pole depiction to four poles, or clearly separate the schematic from the four-pole speed case. The1500,1425and5percent calculation itself is correct.

Mechanical checks: 16 scenes, 6300 declared narration characters using joined speech with one inter-scene space, about 560 seconds. Counts match. No U+2014 or U+2061. Bold and quoted cues occur in spoken order. Question cards retain demands, data and conditions through countdowns. Feedback is brief and notes are a separate quiet hold. Exact timing and caption fit remain voiced-preview checks, especially the near-cap v16to20designs.

Syllabus: official2017Physics. All15Module6parents and their examples were compared with the cached official DOCX; these8designs have no missing quotation. Full-module primary-owner coverage and practical gaps are recorded separately. P6-IQ4-03relates energy conservation in v11, then applies it to DC motors v17and magnetic braking v20. P6-IQ4-01has an outstanding practical gap. Quotation alone is not coverage or learner completion.

Actual written joins checked from m6-v12through m7-v01. v16/v17uses the root-reconciled power-pack/two-needle-ammeter/motor-model frame. No actual frame mismatch found. Author-only handoff scene numbers can lag actual Final frame sections; use the actual sections at build.

Evidence: work/brief190/audit.json, mechanical-audit.json, calculations.json (31 numerical cases and5direction checks), quoted-cues.json, syllabus-quotation-check.json and join-frames.json. Three official HSC data/formula pages visually checked before calculation. The torque formula uses theta from the area normal, matching the sheet. Source-fact downloads, site log, plate manifest, per-design provenance and QA are separate artifacts. Findings remain open for Claude.
