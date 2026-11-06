# phys-y12-m6-v15 learning review

Independent Codex source review, 6 November 2026, Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m6-v15.md`, SHA256 `19d81598cb2895fb15b678afdc74bc1bab98e36638c37401fef6864e584d0b2d`. Source, narration and scene code unchanged. No speech or render. No exact voiced-preview, human listening, full-speed motion or release pass.

Keep the two voltages and two powers, which directly answer the classic V squared/R misconception. The inverse-square scaling follows from current, rather than appearing as a memorised rule. Keep the25kV thought experiment because its line-drop contradiction shows why the huge loss is impossible. Repair the simple-circuit voltage definition versus the real three-phase grid labels, use a supported generator range, and remove safe from the domestic-voltage description. The sent/received power ledger must keep P at the sending end.

Findings: 0 blocker, 3 should fix, 1 optional.

- **should fix**, S2 voltage definition and S8 real-grid labels (learner copy or diagram): The stated500/330kV real-network ratings are line-to-line RMS values, while S2defines V as line to ground. The simple P=VI,total-R exercise is a simplified circuit. Label its supply/return voltage consistently and keep the real-grid labels separate, without silently applying the single-circuit current to a physical three-phase line. Author note(c) already recognises the simplified model; the learner voltage definition needs repair.
- **should fix**, S7, S8 generator voltage (factual range repair): The25kVorless cap is not general: Siemens Energy SST-6000/SGen-3000W primary data give20to27kV terminal voltage at50Hz. Use root decision10fallback tens of kilovolts for the general statement. The25kV thought-experiment input can remain an explicitly chosen value.
- **should fix**, S8 (learner copy or diagram): 230V is the nominal domestic supply voltage; it is not intrinsically safe to touch or use without protective equipment. Remove safe to use at home and retain the factual nominal-voltage statement. No extra warning scene is needed.
- **optional**, Author note(a) (author note only): The78.125MW limit V squared/(4R) is maximum RECEIVED load power, while the example fixes500MW SENT. The example is still impossible: at25kV the maximum sent power into a passive2ohm line/load is312.5MW; its proposed20kA gives40kV line drop. Keep the already correct learner IR contradiction and distinguish the two author-only limits.

Mechanical checks: 17 scenes, 5842 declared narration characters using joined speech with one inter-scene space, about 526 seconds. Counts match. No U+2014 or U+2061. Bold and quoted cues occur in spoken order. Question cards retain demands, data and conditions through countdowns. Feedback is brief and notes are a separate quiet hold. Exact timing and caption fit remain voiced-preview checks, especially the near-cap v16to20designs.

Syllabus: official2017Physics. All15Module6parents and their examples were compared with the cached official DOCX; these8designs have no missing quotation. Full-module primary-owner coverage and practical gaps are recorded separately. P6-IQ4-03relates energy conservation in v11, then applies it to DC motors v17and magnetic braking v20. P6-IQ4-01has an outstanding practical gap. Quotation alone is not coverage or learner completion.

Actual written joins checked from m6-v12through m7-v01. v16/v17uses the root-reconciled power-pack/two-needle-ammeter/motor-model frame. No actual frame mismatch found. Author-only handoff scene numbers can lag actual Final frame sections; use the actual sections at build.

Evidence: work/brief190/audit.json, mechanical-audit.json, calculations.json (31 numerical cases and5direction checks), quoted-cues.json, syllabus-quotation-check.json and join-frames.json. Three official HSC data/formula pages visually checked before calculation. The torque formula uses theta from the area normal, matching the sheet. Source-fact downloads, site log, plate manifest, per-design provenance and QA are separate artifacts. Findings remain open for Claude.
