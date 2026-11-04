# p-y11-v12: physics check

Reviewed Revision 1 on 2 November 2026. Design SHA256 `ca502b30aa86e3430b41ee980d52d0733a93ebe8537318af3e3a3ab19484fd5e`. Written design and site source only; no built frames or audio. Narration recount 5,329 characters in separate scenes (5,342 with joining spaces); stated duration about 494 s. Per-scene counts: 368, 400, 437, 536, 465, 373, 549, 601, 256, 387, 244, 389, 249, 75.

## Official 2025 syllabus

- `cibfd5f69e`: "Resolve vectors into perpendicular components using F x = F cos θ and F y = F sin θ where θ is the angle with the x -axis". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

- `cic6c0b2c4`: "Use free-body diagrams and vector analysis to determine the net force acting on an object". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief145/syllabus-validation.json`.

## Recalculation and source comparison

All force components, sweep values, recombinations and rounding are independently recalculated in `work/brief145/v12-calculations.json`. Site we-1 is reused exactly at 150 N and 20 degrees: horizontal 140.953893 N (141), vertical 51.3030215 N (51.3). With the stated no-vertical-motion condition, W=196 N and N=144.696979 N (145); the horizontal net is 45.953893 N (46.0), using unrounded components. The two-rope boat gives 1.00 kN at 36.8699 degrees north of east. A1 has W=N=29.4 N and net 6.0 N. A2 gives components 40.0 and 17.3205081 N, magnitude 43.5889894 N (43.6) at 23.4132244 degrees (23.4) north of east. The fixed floor, horizontal push and no vertical motion support N=mg only in A1; the angled sledge pull correctly gives N<mg. Friction is scoped to sliding across still snow; quadrant signs are used. The three earlier site errors are already logged and should not be duplicated. New site activity wording says friction-like resistance on a smooth floor: this is ambiguous, not a confirmed impossibility, since a separate resistance can act without floor friction. Clarify its source if logging it; do not claim smooth rules out every resistance. Site Q1/Q2 duplicate-data feedback is a content note, not a physics error.

## Findings

1. **Should fix:** Scene 5 says the upward part lifts it a little, while scene 7 explicitly keeps the sledge at fixed height on level snow. Use the upward component reduces the normal force instead of implying upward motion. Replace the existing final sentence; no added speech or time. Keep the smaller normal arrow, which correctly shows unloading.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.

MathML transcription for readability: F_x = F cos θ; F_y = F sin θ. The formula structure is retained in the route sourceHtml; the quoted freshText above is its plain-text extraction.
