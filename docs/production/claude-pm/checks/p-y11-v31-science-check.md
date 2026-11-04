# p-y11-v31 science check

Revision 1, 2 November 2026. Design SHA256 `12c7cd0c8166a680ca714f67990efb1adfbe8b7db28b362bf36d395d77b7f473`. Independent numerical check: `work/brief153/v31-calculations.py` and JSON. No design edited.

## Syllabus and route

Fresh official 2025 Year 11 Physics FA1 source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975 . `ci67d91fd2`: “Conduct a practical investigation to analyse the conservation of momentum in collisions”. The proposed investigation follows v30 and prepares the FA2 wave handoff. Illustrative worked data can teach analysis but do not document a real practical conducted by learners. Fresh official FA0 source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2 . Exact actions, punctuation normalised from linked HTML:

- `ci1ba1d4e1`: “Select appropriate materials and technologies to design a scientific investigation”.
- `ci7afa7b23`: “Explain patterns and trends, including inconsistencies in data and information”.
- `ci15366d75`: “Assess the validity, reliability, accuracy and precision of data and information”.
- `ci8856aeb0`: “Interpret data and information to identify outliers, make predictions, explain results and draw conclusions”.
- `cif90164e3`: “Assess potential hazards and their associated risks to develop a risk assessment”.

Materials, controls and risk assessment are shown, and the drifting B is independently shown in the replay; the unsupported attribution and incomplete uncertainty assessment below prevent accepting the analysis and conclusion as written. The risk controls are contextual examples, with the school risk assessment explicitly retained.

## Numerical and scientific check

The 15 kept light-gate pairs give means before/after, respectively: (0.040003, 0.038802), (0.060063, 0.058862), (0.080003, 0.078807), (0.100002, 0.098906), (0.119763, 0.118563) kg m/s. After half-ranges are 0.000801, 0.000689, 0.000242, 0.000244 and 0.000874; rounding, percentage gaps, gradient 1.00054 and intercept -0.001222 agree with the displays. The setting 3 run gives 0.0800 and 0.078802 kg m/s and 0.0160 and 0.00621 J, about 39% remaining. Attempt 1 gives 0.0750 and 0.0740, with 2% intervals [0.0735, 0.0765] and [0.07252, 0.07548]; these overlap, consistent with the supplied uncertainty, not proof of exact equality.

1. **Blocker:** Half-range of three after values is repeat scatter, not all uncertainty. Both axes and paired differences carry uncertainty; instrument and flag limits and systematic effects matter. For example, mass bounds alone in the representative run give before [0.0796, 0.0804] and after [0.078487, 0.079117] kg m/s, before gate or flag uncertainty. A comparison against a vertical repeat bar alone cannot establish the stated conclusion. Assess paired differences and suitable measured/bounded uncertainties and external impulse, and make the conclusion conditional. NIST distinguishes repeated-observation and other evaluations: https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-3-type-evaluation-standard-uncertainty and https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-4-type-b-evaluation-standard-uncertainty .
2. **Blocker:** The fit alone does not isolate collision behaviour or identify drag: a timing offset, unmeasured momentum, calibration bias or another external impulse may produce similar deviations. Gradient uncertainty is not supplied. Frame drag as an assumption of this illustration and check external effects independently; do not label the prediction as an established true measurement. Apply the same fix to scenes 8, 9, 16 and note 4.
3. **Blocker:** Attempt 2 is underdetermined. For X, discrepancy is 0.003 kg m/s; for Y, it is 0.1 times the before momentum. At 0.010, Y is closer, and at 0.100, X is closer. Neither line alone establishes its cause or statistical consistency. Ask for offset versus proportional difference and possible causes, or provide range, uncertainty and independent controls.
4. **Should fix:** A stay-still check constrains tilt only within its resolution and friction; it cannot prove perfect level. Moving gates closer must still allow the flag to pass fully outside collision. Qualify the existing statements without increasing runtime.

Scene 5 independently shows a drifting B and an off-centre level; retain the original result and reason for exclusion, plus the repeat. Preserve illustrative tags and do not present the generated numbers as measured evidence. No confirmed new site issue beyond the already logged L28 practical/conditions rows. Count: 3 blockers, 1 should fix, 0 optional.
