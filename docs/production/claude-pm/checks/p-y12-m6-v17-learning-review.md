# phys-y12-m6-v17 learning review

Independent Codex source review, 6 November 2026, Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m6-v17.md`, SHA256 `2887dcb10409df927a4bf30a5ade093cd087b22fdb66e54e21ff7daa5f1ebf04`. Source, narration and scene code unchanged. No speech or render. No exact voiced-preview, human listening, full-speed motion or release pass.

The ammeter observation leads to the generator effect and a voltage-share diagram. The full-speed, half-speed and stall calculations form one useful causal chain; keep them and the no-spin memory aid. The energy proof has a blocker: a connected battery cannot be represented by an empty input bar. The later full power ledger and distinction between converted power and shaft output are correct. Repair the universal larger-mechanical-output claim in the final answer. Exact startup timing is a wording check under the stated resistance-only model.

Findings: 1 blocker, 1 should fix, 1 optional.

- **blocker**, S3 counterfactual and note4 (learner copy or diagram): The battery remains connected, so an empty energy supplied bar and kinetic energy from nothing are not a valid argument. With12V,2ohm and a hypothetical assisting10V emf, I=11A: the battery supplies132W, while Joule heat alone is242W. The inconsistency must account for the battery power and the sign of mechanical conversion. Repair this energy proof before voicing; preserve the correct later VI=I squared R+back-emf times I ledger.
- **should fix**, S14 feedback2 (learner copy or diagram): More load does not always mean more mechanical output power. At constant12V and2ohm, converted power is E(12-E)/2; it falls near stall even while current/torque rise. The particular half-speed case gives17.5W versus10W and is valid, but the general feedback should state that input divides into mechanical conversion and heat, with increased heat, rather than guarantee a larger mechanical-power bar.
- **optional**, S1 and S5 startup timing (wording consistency): Author note(a) explicitly ignores inductance and uses steady-state estimates, so6A is the intended near-standstill resistive estimate. The literal instant the switch closes wording conflicts with v12current-rises-over-time teaching. Prefer starting current before appreciable rotation, or label the graph as the stated resistance-only estimate. No extra inductance lesson needed.

Mechanical checks: 16 scenes, 6339 declared narration characters using joined speech with one inter-scene space, about 563 seconds. Counts match. No U+2014 or U+2061. Bold and quoted cues occur in spoken order. Question cards retain demands, data and conditions through countdowns. Feedback is brief and notes are a separate quiet hold. Exact timing and caption fit remain voiced-preview checks, especially the near-cap v16to20designs.

Syllabus: official2017Physics. All15Module6parents and their examples were compared with the cached official DOCX; these8designs have no missing quotation. Full-module primary-owner coverage and practical gaps are recorded separately. P6-IQ4-03relates energy conservation in v11, then applies it to DC motors v17and magnetic braking v20. P6-IQ4-01has an outstanding practical gap. Quotation alone is not coverage or learner completion.

Actual written joins checked from m6-v12through m7-v01. v16/v17uses the root-reconciled power-pack/two-needle-ammeter/motor-model frame. No actual frame mismatch found. Author-only handoff scene numbers can lag actual Final frame sections; use the actual sections at build.

Evidence: work/brief190/audit.json, mechanical-audit.json, calculations.json (31 numerical cases and5direction checks), quoted-cues.json, syllabus-quotation-check.json and join-frames.json. Three official HSC data/formula pages visually checked before calculation. The torque formula uses theta from the area normal, matching the sheet. Source-fact downloads, site log, plate manifest, per-design provenance and QA are separate artifacts. Findings remain open for Claude.
