# phys-y12-m6-v15 science check

Independent Codex source review, 6 November 2026, Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m6-v15.md`, SHA256 `19d81598cb2895fb15b678afdc74bc1bab98e36638c37401fef6864e584d0b2d`. Source, narration and scene code unchanged. No speech or render. No exact voiced-preview, human listening, full-speed motion or release pass.

Independent numerical results:

- main line: P_sent=500000000.0, V=250000.0, R_total=2, I=2000.0, loss=8000000.0, percentage=1.6, P_received=492000000.0, drop=4000.0
- main line: P_sent=500000000.0, V=500000.0, R_total=2, I=1000.0, loss=2000000.0, percentage=0.4, P_received=498000000.0, drop=2000.0
- site prediction: P_sent=100000000.0, V=100000.0, R_total=5, I=1000.0, loss=5000000.0, percentage=5.0, P_received=95000000.0, drop=5000.0
- site prediction: P_sent=100000000.0, V=500000.0, R_total=5, I=200.0, loss=200000.0, percentage=0.2, P_received=99800000.0, drop=1000.0
- impossible low-voltage thought experiment: P_sent=500000000.0, V=25000.0, R_total=2, I=20000.0, loss=800000000.0, percentage=160.0, P_received=-300000000.0, drop=40000.0
- passive-line power limits: max_delivered_W=78125000.0, max_sent_W_before_negative_load=312500000.0
- attempt1: P_sent=132000000.0, V=132000.0, R_total=3, I=1000.0, loss=3000000.0, percentage=2.272727272727273, P_received=129000000.0, drop=3000.0
- attempt1: P_sent=132000000.0, V=330000.0, R_total=3, I=400.0, loss=480000.0, percentage=0.36363636363636365, P_received=131520000.0, drop=1200.0
- attempt2: drop=1200, loss_from_drop=480000.0, wrong_transmission_V=36300000000.0, loss_ratio=6.25, wrong_linear_scaling=1200000.0

Findings: 0 blocker, 3 should fix, 1 optional.

- **should fix**, S2 voltage definition and S8 real-grid labels (learner copy or diagram): The stated500/330kV real-network ratings are line-to-line RMS values, while S2defines V as line to ground. The simple P=VI,total-R exercise is a simplified circuit. Label its supply/return voltage consistently and keep the real-grid labels separate, without silently applying the single-circuit current to a physical three-phase line. Author note(c) already recognises the simplified model; the learner voltage definition needs repair.
- **should fix**, S7, S8 generator voltage (factual range repair): The25kVorless cap is not general: Siemens Energy SST-6000/SGen-3000W primary data give20to27kV terminal voltage at50Hz. Use root decision10fallback tens of kilovolts for the general statement. The25kV thought-experiment input can remain an explicitly chosen value.
- **should fix**, S8 (learner copy or diagram): 230V is the nominal domestic supply voltage; it is not intrinsically safe to touch or use without protective equipment. Remove safe to use at home and retain the factual nominal-voltage statement. No extra warning scene is needed.
- **optional**, Author note(a) (author note only): The78.125MW limit V squared/(4R) is maximum RECEIVED load power, while the example fixes500MW SENT. The example is still impossible: at25kV the maximum sent power into a passive2ohm line/load is312.5MW; its proposed20kA gives40kV line drop. Keep the already correct learner IR contradiction and distinguish the two author-only limits.

Mechanical checks: 17 scenes, 5842 declared narration characters using joined speech with one inter-scene space, about 526 seconds. Counts match. No U+2014 or U+2061. Bold and quoted cues occur in spoken order. Question cards retain demands, data and conditions through countdowns. Feedback is brief and notes are a separate quiet hold. Exact timing and caption fit remain voiced-preview checks, especially the near-cap v16to20designs.

Syllabus: official2017Physics. All15Module6parents and their examples were compared with the cached official DOCX; these8designs have no missing quotation. Full-module primary-owner coverage and practical gaps are recorded separately. P6-IQ4-03relates energy conservation in v11, then applies it to DC motors v17and magnetic braking v20. P6-IQ4-01has an outstanding practical gap. Quotation alone is not coverage or learner completion.

Actual written joins checked from m6-v12through m7-v01. v16/v17uses the root-reconciled power-pack/two-needle-ammeter/motor-model frame. No actual frame mismatch found. Author-only handoff scene numbers can lag actual Final frame sections; use the actual sections at build.

Evidence: work/brief190/audit.json, mechanical-audit.json, calculations.json (31 numerical cases and5direction checks), quoted-cues.json, syllabus-quotation-check.json and join-frames.json. Three official HSC data/formula pages visually checked before calculation. The torque formula uses theta from the area normal, matching the sheet. Source-fact downloads, site log, plate manifest, per-design provenance and QA are separate artifacts. Findings remain open for Claude.

Primary source follow-up, 6 November 2026: [Transgrid network assets](https://www.transgrid.com.au/about-us/network/assets/), [Siemens generator technical data, terminal20to27kV at50Hz](https://assets.siemens-energy.com/dam/dfdbc994-febe-4dde-b222-b0410164a745/sst-6000-interactivepraes-pdf_Original%20file.pdf). Local cache and download limits: work/brief190/primary-sources.json. Numerical counterexamples in this report are independently calculated.
