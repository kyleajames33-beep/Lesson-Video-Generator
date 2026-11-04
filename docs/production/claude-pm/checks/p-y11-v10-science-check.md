# p-y11-v10: physics check

Reviewed Revision 1 on 2 November 2026. Design SHA256 `5ce37258126cf0a98f3c9255374683709e7cec1ac38fb64dc66dac183b546e77`. Written design and site source only; no built frames or audio. Narration recount 6,319 characters in separate scenes (6,334 with joining spaces); stated duration about 569 s. Per-scene counts: 396, 478, 488, 408, 478, 364, 417, 594, 584, 419, 345, 372, 281, 360, 260, 75.

## Official 2025 syllabus

- `ci928dbf53`: "Conduct a laboratory experiment to compare 2 methods of graphically determining a value for acceleration due to gravity and assess the accuracy and reliability of the experimental results". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief145/syllabus-validation.json`.

## Recalculation and source comparison

Every numeric table entry was independently recalculated with standard-library linear regression in `work/brief145/v10-calculations.py`; results are in `v10-calculations.json`. Run-one fit slope 4.802614 and intercept -0.00570568 give g = 9.605228; the deliberately rounded read points give 9.6125, so both displayed routes round to 9.61. Runs two and three give 9.615167 and 9.633903. Method-two fit is 9.785714 t + 0.057143; line readings round to the exact site we-1 values (0.20,2.0), (0.70,6.9), giving 9.8. The site uses light-gate readings; the design explicitly reuses their numbers as video-analysis line readings, with simulated labels. At 0.70 s the ideal fall is 2.401 m, so a 2.5 m drop is physically consistent; fall time is 0.714286 s. Means, ranges and percentage errors all match: 9.62/0.02/1.8367%, 9.8/0.4/0%, A1 9.70/1.0204%, A2 9.93/0.04/1.3265%. Constant-time-offset tests confirm the s-t² slope changes while a v-t slope remains unchanged. The local site SHA256 matches the design. A 9.80 m/s² teaching reference is consistent with Sydney gravity near 9.797 and the precision used; local gravity is not a universal exact constant.

## Findings

1. **Should fix:** Scene 9 and author note (d) say that a light gate just below the ball fixes release delay, but the ball is already moving when it cuts that beam. Timing from that point does not retain s = 1/2 gt² for the subsequent fall: it needs the gate-crossing initial velocity and distance reference. For example, 1 cm of fall gives u_gate = 0.443 m/s. Replace the claimed fix with calibrating the release delay and keeping time referred to release; keep the existing light gate as an alternative only if its nonzero starting velocity is included. Use the named scene 4 reserve cut if the correction needs more words.

2. **Should fix:** Scene 9 contracts the individual method-two repeat dots as more repeats are taken. More repeats reduce the random uncertainty of the mean; they do not by themselves narrow the distribution of individual results. Keep raw dots scattered and narrow a mean-uncertainty marker, or replace the animation with the mean settling. Replace shrink the random scatter with reduce its effect on the mean, funded by the named scene 9 reserve cut. Higher frame rate alone also does not ensure better velocity estimates; shorter exposure and reliable tracking address the stated blur source.

3. **Should fix:** A2 asks for the most likely error, but feedback 2 says off the same way every time means a systematic error, and its model excludes random error because it would scatter on both sides. Three random results can all land on one side. Replace means with suggests and preserve most likely in the answer; delete the categorical both-sides argument. This is length-neutral or shorter.

4. **Should fix:** Decisions, Site error 1 says averaging random errors improves reliability, not accuracy, and that accuracy depends on systematic error. A finite-result error can contain both random and systematic components; averaging can improve closeness to the reference by reducing the random component, while leaving bias. Keep the valid site criticism that both graphical methods fit many points and that this does not establish a general method-two advantage; remove the false either-or explanation. Author-only correction, no narration cost.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.

## FA0 coverage confirmation

All nine claimed points were fetched fresh from the official FA0 page and match the ledger. The accepted partial-coverage mapping is appropriate: variables, reliable data, hazards/controls, outliers, means/ranges/percentage error, significant figures and improvements are taught here. Standard deviation, uncertainty bars, full validity/precision treatment and the other contexts remain explicitly for later; the design does not claim full coverage. Validation: `work/brief145/v10-fa0-validation.json`.

- `ci9ce164ec`: "Justify the use of independent , dependent and controlled variables , and experimental controls in a valid scientific investigation". [Official FA0 source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2).

- `ci6c11c587`: "Explain how reliable primary data is obtained". [Official FA0 source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2).

- `cif90164e3`: "Assess potential hazards and their associated risks to develop a risk assessment". [Official FA0 source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2).

- `ci6e7b9681`: "Apply safe work practices and manage risks while conducting a scientific investigation". [Official FA0 source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2).

- `ci914a5e7e`: "Assess error, uncertainty and limitations in data and include calculations of percentage error , range , mean and standard deviation". [Official FA0 source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2).

- `ci15366d75`: "Assess the validity , reliability, accuracy and precision of data and information". [Official FA0 source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2).

- `ci8856aeb0`: "Interpret data and information to identify outliers , make predictions , explain results and draw conclusions". [Official FA0 source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2).

- `ci7e38e278`: "Evaluate data and information to suggest improvements or further investigations". [Official FA0 source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2).

- `ci5a02ec2a`: "Use appropriate significant figures to express quantitative solutions". [Official FA0 source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2).

## Safety and source limits

The three risk categories are real: impact/rolling-ball injury, energised/hot equipment, and persons beneath the elevated drop. Sand tray, clear drop zone, a secured stand, leads away from the fall, low-voltage isolated apparatus and switching off between drops are sensible controls for the stated setup. The design already says to follow the school risk assessment. NSW Education directs science staff to CSIS risk assessment, so the video is a demonstration of controls, not permission for every landing or stairwell. No current public NSW Department page found in this check specifically approves a 2.5 m stairwell release. Keep the local venue assessment and teacher supervision as a real implementation requirement; no safety approval is inferred from this source review. The video method and height remain as accepted by root decision 14.

- [NSW Education science safety and compliance](https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance): current science risk-assessment entrypoint.
- [NSW Education risk-assessment learning resource](https://schoolsequella.det.nsw.edu.au/file/f3daa436-49a3-444e-b43d-794cdd00370e/1/iplan.zip/iplan/risk/risk_00.htm): assessment applies beyond the laboratory too.
- [SafeWork NSW falling objects](https://www.safework.nsw.gov.au/your-industry/construction/safety-topics/falling-objects-in-construction): general falling-object protection; construction context, not school-specific approval.
- [Geoscience Australia gravity](https://www.ga.gov.au/scientific-topics/disciplines/geophysics/gravity): surface gravity approximately 9.8 m/s².
- [NIST measurement-error terminology](https://www.nist.gov/document/tn1297spdf): finite-result error includes random and systematic effects.

No uncertainty bars or standard deviation are calculated here, consistently with the accepted partial FA0 scope. Means/ranges alone cannot prove a particular source of systematic error. The simulated data tag is required by the global scene rule on every data display and the description says all data are illustrative. A search of official NESA material did not identify a matching complete stem for either original attempt; that is not a claim to have searched every historical paper.

## Confirmed site notes for parent integration

1. Site method-two accuracy advantage is not established merely by fitting many points, since method one does that too. Both fits reduce effects of random measurement error; neither removes systematic bias. Do not log the author's stronger claim that averaging cannot improve accuracy.
2. A constant offset in t leaves a v-t slope unchanged but changes the s-t² slope because (t+delta)² contains a 2t delta term. The site's relative air-resistance sensitivity claim has no demonstrated basis in its data.
3. A line through the origin requires release from rest with distance and time referenced to that release. Preserve these conditions.
4. The already logged site phrase a good result remains a point-estimate accuracy observation, not evidence of reliability. Do not duplicate its existing log entry.
