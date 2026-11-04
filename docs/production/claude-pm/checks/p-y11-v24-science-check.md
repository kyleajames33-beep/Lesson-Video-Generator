# p-y11-v24 physics and safety check

Revision 1, 3 November 2026. Design SHA256 `835a30426758bc5a306c0a4b41917f477d4c648b811816733dc5c4e9b1960099`. Recalculation: `work/brief149/v24-calculations.py` and JSON. No design edited.

Fresh 2025 FA1 source https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975 : `ci28f5581f`, “Conduct a laboratory experiment to analyse the relationship between the angle of an inclined plane and the acceleration of an object”. Simulated examples illustrate analysis; an actual practical must be conducted to obtain real evidence. Fresh official FA0 source https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2 :

- `ci9ce164ec`: “Justify the use of independent, dependent and controlled variables, and experimental controls in a valid scientific investigation”.
- `cif90164e3`: “Assess potential hazards and their associated risks to develop a risk assessment”.
- `ci0fca96de`: “Select and use a range of representations to organise data and information, including graphs, keys, models, diagrams, tables and spreadsheets”.
- `ci914a5e7e`: “Assess error, uncertainty and limitations in data and include calculations of percentage error, range, mean and standard deviation”.
- `ci6c11c587`: “Explain how reliable primary data is obtained”.
- `ci15366d75`: “Assess the validity, reliability, accuracy and precision of data and information”.
- `ci7e38e278`: “Evaluate data and information to suggest improvements or further investigations”.
- `ci5a02ec2a`: “Use appropriate significant figures to express quantitative solutions”.

The partial placements and deferred standard deviation are appropriate in scope once uncertainty and inference are repaired. Controls and three hazard/harm/control rows are present; the secured stop, clamps, taped leads and school risk assessment remain part of the method. One-variable control helps validity but is not sufficient by itself.

The gate times are 47.8829 and 30.0347 ms; speeds 1.04421 and 1.66474 m/s; middle-to-middle time 0.369362 s, giving 1.68 m/s². The fit to six means is slope 9.791436 and intercept -0.028414; angle fit is 0.161943 per degree with intercept 0.04933. sin30/sin15 = 1.93185. The 12° prediction is 2.03753; 30° stop speed is 3.273 m/s. Site fit calculations and the stated rounded values agree.

1. **Blocker:** Three-repeat half-range is scatter rather than complete measurement uncertainty; the gradient's uncertainty is not calculated. Include angle, timing, flag, calibration and systematic contributions and an appropriate slope comparison, or give a conditional result. NIST distinguishes repeat-based and other sources: https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-3-type-evaluation-standard-uncertainty and https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-4-type-b-evaluation-standard-uncertainty .
2. **Blocker:** An offset or a small cluster below a model does not uniquely establish rolling resistance or systematic bias. The trolley's wheel rotation can also alter the gradient; angle and timing calibration can affect it. Treat resistance as a possible mechanism or declared illustrative assumption and evaluate independent controls. Repeats alone cannot remove a true bias, but three one-sided deviations do not prove one.
3. **Blocker:** In A2, relative to 9.8x, the given line 9.6x - 0.05 is low by 0.05 + 0.2x, not a uniform 0.05. At x=0.5 the gap is 0.15 m/s². Correct the plot and explanation or change the stated gradient for a constant-offset model.
4. **Should fix:** Qualify validity and repeat the controls under relevant angles; identical equipment does not guarantee constant resistance.
5. **Should fix:** Propagate the uncertainty in the measured height difference and track length; two independent ±1 mm heights do not automatically give a ±1 mm difference.
6. **Should fix:** Describe the fit as approximately linear rather than exactly proportional when its intercept is nonzero. WS03 is shorthand for the current 2025 `PY-11WS-03` outcome, not proof of an outdated label; clarify the full code if needed.

Confirmed site Q3 friction-gradient, reliability and overclaim of confirmation are recorded separately. Count: 3 blockers, 3 should fix, 0 optional.
