# phys-y12-m6-v14 science check

Independent Codex source review, 6 November 2026, Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m6-v14.md`, SHA256 `c2ce4e203fd2e33f212ecbcee7b2a4c4f9f6dfabb614f7a8300bd78c3666ffea`. Source, narration and scene code unchanged. No speech or render. No exact voiced-preview, human listening, full-speed motion or release pass.

Independent numerical results:

- efficiency example: efficiency_percent=90.43478260869566, loss_W=11, site_Pout_MW=19.2, site_loss_MW=0.8000000000000007
- copper estimates: secondary_loss=5.0, primary_loss=1.0, lamination_loss_ratio=0.010000000000000002, magnetisation_reversals_per_second=100
- attempt2: Pin=460, Pout=437, efficiency=95.0, loss=23, wrong_efficiency=105.26315789473684

Findings: 0 blocker, 2 should fix, 0 optional.

- **should fix**, S10, notes and author note(e) (learner copy or diagram): The official MEPS page verifies oil-immersed minima98.28 to 99.40percent at50percent rated load, but some dry-type minima are below98percent. It covers distribution units10to2500kVA on11/22kV networks, not every large network transformer at every load. Correct the claim that all table values exceed98percent and either use a scoped verified example or root decision10 fallback well above90percent. Preserve the broad good-approximation judgement.
- **should fix**, S3 and notes (learner copy or diagram): High current alone does not establish which winding loses the most power; resistance matters too. These example values correctly give5W versus1W, but the notes claim the high-current winding is always worst. Keep that conclusion tied to the displayed estimates, or state the I squared dependence without ranking every transformer.

Mechanical checks: 16 scenes, 5760 declared narration characters using joined speech with one inter-scene space, about 517 seconds. Counts match. No U+2014 or U+2061. Bold and quoted cues occur in spoken order. Question cards retain demands, data and conditions through countdowns. Feedback is brief and notes are a separate quiet hold. Exact timing and caption fit remain voiced-preview checks, especially the near-cap v16to20designs.

Syllabus: official2017Physics. All15Module6parents and their examples were compared with the cached official DOCX; these8designs have no missing quotation. Full-module primary-owner coverage and practical gaps are recorded separately. P6-IQ4-03relates energy conservation in v11, then applies it to DC motors v17and magnetic braking v20. P6-IQ4-01has an outstanding practical gap. Quotation alone is not coverage or learner completion.

Actual written joins checked from m6-v12through m7-v01. v16/v17uses the root-reconciled power-pack/two-needle-ammeter/motor-model frame. No actual frame mismatch found. Author-only handoff scene numbers can lag actual Final frame sections; use the actual sections at build.

Evidence: work/brief190/audit.json, mechanical-audit.json, calculations.json (31 numerical cases and5direction checks), quoted-cues.json, syllabus-quotation-check.json and join-frames.json. Three official HSC data/formula pages visually checked before calculation. The torque formula uses theta from the area normal, matching the sheet. Source-fact downloads, site log, plate manifest, per-design provenance and QA are separate artifacts. Findings remain open for Claude.

Primary source follow-up, 6 November 2026: [Official distribution-transformer efficiency tables](https://www.energyrating.gov.au/industry-information/products/distribution-transformers). Local cache and download limits: work/brief190/primary-sources.json. Numerical counterexamples in this report are independently calculated.
