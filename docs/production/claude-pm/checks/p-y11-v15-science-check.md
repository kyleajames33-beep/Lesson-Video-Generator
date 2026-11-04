# p-y11-v15 physics and safety check

Revision 1, 2 November 2026. Design SHA256 `afbfebf48c21a985e3c6cbdedfc86345d68e5286cfbb709dd9c913b4ae744851`. Independent numerical evidence `work/brief149/v15-calculations.py` and JSON. No design edited.

Fresh official Year 11 Physics 2025 FA1: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975 . `cic1d80483`: “Conduct a scientific investigation to illustrate the relationship between force, mass and acceleration”. A simulated illustration teaches a method but is not a record of an actual practical. Fresh FA0 source https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2 ; linked HTML punctuation normalised:

- `ci9ce164ec`: “Justify the use of independent, dependent and controlled variables, and experimental controls in a valid scientific investigation”.
- `cif90164e3`: “Assess potential hazards and their associated risks to develop a risk assessment”.
- `ci0fca96de`: “Select and use a range of representations to organise data and information, including graphs, keys, models, diagrams, tables and spreadsheets”.
- `ci914a5e7e`: “Assess error, uncertainty and limitations in data and include calculations of percentage error, range, mean and standard deviation”.
- `ci7f1f6fbd`: “Describe qualitative and quantitative relationships between variables”.
- `ci8856aeb0`: “Interpret data and information to identify outliers, make predictions, explain results and draw conclusions”.

The proposal covers aspects of variables, controls, risk, representations and uncertainty, with standard deviation and other representations expressly deferred. Root decision 6 adds qualitative/quantitative relationships partially. Do not treat single-variable control as sufficient on its own for full validity; investigate residual forces, calibration and measurement limits too.

The unchanged pack means are 0.21, 0.39, 0.61, 0.79, with ranges 0.10, 0.10, 0.08, 0.08. The through-origin series A fit is 0.996667; permitted rectangle-bound slopes are 0.903226 to 1.076923, giving masses 0.92857 to 1.10714 kg. The steep limit comes from 0.80 N, not the author note's 0.20 N. Series B gives 0.602951 N and limits 0.5544 to 0.6666 N. A1 gives 2.0833 kg, 1.9231 to 2.2727 kg and 4.1667% difference. A2 through-origin fit is 0.506667 N. Hanging masses calculated from tension and acceleration match the author note's ideal values.

1. **Blocker:** Half the observed range is a repeat-scatter indicator, not the full uncertainty or a guaranteed bound on the true mean. Include relevant timing/fit, force and mass instrument effects and residual external forces, or give a conditional conclusion rather than claiming complete uncertainty. NIST distinguishes repeat-based and other evaluations: https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-3-type-evaluation-standard-uncertainty and https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-4-type-b-evaluation-standard-uncertainty .
2. **Blocker:** Series B and A2 points are not on the proposed line. Preserve the measured-looking illustrative coordinates and draw a best-fit line near them with the appropriate bounds, rather than moving them onto it or depicting exact collinearity.
3. **Blocker:** Keep “illustrative data (simulated)” and conditional language on conclusion and handoff; “range we tested” and “measured data” currently suggest actual observations. A practical must be conducted to acquire actual evidence.
4. **Should fix:** A no-pull run at a single load checks compensation only within its resolution and its test conditions. Recheck with the relevant loads and directions; same tilt does not prove cancellation for all masses. Controlled variables contribute to, but do not by themselves prove, validity.
5. **Should fix:** Correct the steepest-line limiting point in author note (b) and mark its actual uncertainty-rectangle corner. The numerical steepest gradient itself is correct.

Clamp, end stop, short drop, sand tray and feet-clear controls are linked to the stated hazards; the school assessment remains necessary. Existing v14 site log covers the friction intercept. Count: 3 blockers, 2 should fix, 0 optional.
