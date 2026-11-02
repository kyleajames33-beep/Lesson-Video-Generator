# Year 11 Physics FA2 V24 (Physics 2025, Year 11, Focus Area 2): How can a graph determine a material's refractive index and its uncertainty? The refractive index investigation (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa2-v24`, `docs/production/student-learning-review.md`), a Codex physics check (including the safety facts) and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: no new plate (v18's ray box and glass block, v23's set square, the existing protractor and low-voltage supply). All data in this video are illustrative and labelled so.

Narration 6,211 characters, 18 scenes, about 569 s (9.5 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: twenty-fourth video of the Year 11 Physics (2025) Focus Area 2 route, the second refractive-index measurement video and the FA2 investigation that owns `ci68dbbc22`. Templates: `phys-y11-fa1-v24.md` (investigation format, FA0 placement table, risk table showing only the spoken row, illustrative data rules) and `phys-y11-fa1-v22.md` (section list); house conventions and the FA2 colour key from `phys-y11-fa2-v18.md` to `phys-y11-fa2-v23.md` (Revision 1; v20 is the FA2 refraction investigation, v23's scene 15 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file (method, illustrative data from a stated model, FA0 proposals). Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson18.sa.html`, sections `concept-one` (the method, its last step: plot sin θ₁ against sin θ₂ and take the gradient), the card 1 check (true: the gradient is n), `concept-three` (its graph bullet, corrected by v23's site correction 2) and short-answer Q2 (describe the method and the graph through the origin); the single-pair, accuracy and error sections belong to v23. Route entry: `phys-y11-fa2-v24` in `../../phys-y11-video-route.json` (proposed; coverage "owned-action"). Route start: "Start with Refractive index investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Complete refractive index investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations." Route next: "phys-y11-fa2-v25: How can I explain and apply lenses and vision?" (placeholder; proposed causal form for root: "How do curved lenses bend light so spectacles can sharpen blurry vision?", used by the handoff chip; open decision 1).

**Opening frame (v23's actual handoff, Revision 1, 3 Nov).** v23's scene 15 ends with the memory line "Repeats shrink the scatter, not the shift." small at the top; one sheet of paper with the glass block's outline and seven traces fanned from the same entry point (θ₁ = 10° to 70°; tag "illustrative data"); empty axes at the right, vertical "sin θ₁", horizontal "sin θ₂"; chips "all at once?" and "Next: How can a graph determine a material's refractive index and its uncertainty?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, hands, faces or eyes (the dots, lines and normals draw themselves; the protractor and set square move by code); apparatus painted at native aspect (ray box, glass block, protractor, set square, low-voltage supply); traces, graphs, bars, lines, tables and readouts coded; one reasoning stage at a time; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question with its data on screen; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; fa1-v15 and fa1-v24 (steepest and shallowest lines; "Plot it straight, then read the gradient."), v20 (the trace and its risks), v21 (the law of refraction) and v23 (accuracy, reliability, systematic error) recalled in a sentence each. Investigation data are illustrative, labelled on screen and said aloud; predictions are labelled "model prediction" and never shown as results.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 2, group "Wave behaviours"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON:

- P25-FA2-G3-10 `ci68dbbc22`: "Conduct a laboratory experiment to determine the refractive index of a material and assess the accuracy of the measurement"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Working scientifically points taught in part, just in time (FA0, local ledger IDs with official codenames, quoted from `docs/production/programme/syllabus/phys-new-y11.json`; proposal for root, see the placement section): P25-FA0-G2-01 `ci9ce164ec`, P25-FA0-G2-04 `cif90164e3`, P25-FA0-G4-03 `ci0fca96de`, P25-FA0-G5-03 `ci914a5e7e`, P25-FA0-G5-04 `ci15366d75`.

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2

**Boundary:** starts from v23's handoff (above); the shape the law predicts for sin θ₁ against sin θ₂ (a straight line through the origin, gradient n) and why the measured angle goes on the horizontal axis here; variables and controls with reasons (`ci9ce164ec`); the method improved from v20's limitations; three traces per angle, the mean and half-range (`ci914a5e7e`); the table of sines with the uncertainty carried through; the graph with horizontal bars and the line of best fit (`ci0fca96de`); n from the gradient; the uncertainty of n from the steepest and shallowest lines (fa1-v15's method); accuracy within uncertainty and the percentage error (`ci15366d75`); the origin as a check for a systematic shift (v23); limitations and improvements; a three-row risk assessment (`cif90164e3`); two attempts. Not taught: standard deviation (fa0-v05); a least-squares formula (the line is drawn by eye, the readout computed); dispersion beyond one sentence; lenses (v25 onwards).

## Decisions

- **Learner question (route, kept with the possessive added).** "How can a graph determine a material's refractive index and its uncertainty?" The route wording is not a placeholder ("How can I explain and apply ..."), and it is v23's handoff chip, so it stays; only "material" becomes "material's" (root to record). The answer, built in order: the law makes sin θ₁ against sin θ₂ a straight line through the origin with gradient n (1, 2); controls keep n and the normal fixed (3); an improved method with repeats gives means and uncertainties (4, 5); the line through the bars gives n = 1.49 (6); the steepest and shallowest lines give ± 0.04 (7); 1.50 lies inside, so the result is accurate within its uncertainty (8); the origin checks for a shift (9, 10); limitations (11); risks (12).
- **The hook (v23's frame; site card 1's last step, made a prediction).** "If we plot sin theta one against sin theta two, what shape should the points make?" 3 s with chips "a curve?", "a straight line through the origin?", "a straight line that misses the origin?". Answered in 2 by the law, and seen in 6.
- **Axes chosen on purpose (site card 1 and its check).** sin θ₁ = n sin θ₂ has the form y = mx, so sin θ₁ goes up the side and sin θ₂ along the bottom: the gradient is n itself. This puts the measured (dependent) angle on the horizontal axis, against the usual habit; said once, with the reason ("so the gradient is n, not one over n"). A2 shows the other choice (gradient 1/n). fa1-v24's aid "Plot it straight, then read the gradient." is recalled by name.
- **Variables and validity (`ci9ce164ec`, partial; v20 and fa1-v24 taught the terms).** IV: the angle of incidence θ₁ (set with the protractor at 10° to 70°). DV: the angle of refraction θ₂ (read from the trace). Controlled, each with its reason: the same block and face (the same n); the same narrow ray from the same ray box (the same colour of light, because glass bends blue light slightly more than red: author note e); the block kept inside its outline (the normal stays true; v23's systematic error). "Valid" recalled with its meaning.
- **The improved method (`ci7e38e278` applied; v20's limitations answered).** v20 read angles to the nearest degree with dots at least 5 cm apart. Here: a narrower slit, dots at least 8 cm apart (v23's dot-slip numbers) and angles read to half a degree; a set square for each normal (v23). Three traces per angle. This makes v20 → v23 → v24 one improving story rather than three separate methods.
- **Illustrative data (labelled; generating model stated).** Model n = 1.50, read to the nearest half degree, three traces per angle symmetric about each mean (± 0.5°): θ₁ = 10°, 20°, 30°, 40°, 50°, 60°, 70°; mean θ₂ = 7.0°, 13.5°, 19.5°, 26.0°, 31.0°, 36.0°, 39.5° (model 6.65, 13.18, 19.47, 25.37, 30.71, 35.26, 38.79; author note b). Said aloud in scene 4: "These numbers are illustrative, made up to show the method, not real results." Every table, graph and readout carries the grey tag "illustrative data". The best-fit line (least squares on the means) has gradient 1.486 (shown 1.49) and intercept −0.004; the steepest and shallowest lines that pass through every bar have gradients 1.530 and 1.447 (shown 1.53 and 1.45); half the difference 0.042 (shown ± 0.04).
- **Uncertainty carried into the sines (`ci914a5e7e`, partial).** At 30°: θ₂ = 19.0°, 19.5°, 20.0°; mean 19.5°, ± 0.5° (half the range); sin 19.0° = 0.326 and sin 20.0° = 0.342, so sin θ₂ = 0.334 ± 0.008. Bars are horizontal (the uncertainty is in sin θ₂); θ₁ is set once per angle with the protractor and its smaller uncertainty is not drawn (author note c).
- **Gradient against averaging (cause).** The seven separate values sin θ₁/sin θ₂ average to 1.47; the gradient gives 1.49. The 10° pair alone gives 1.42, because ± 0.5° is about 7 per cent of 7°; on the graph that point sits near the origin and barely tilts the line. Said in one sentence; it answers the site's warm-up ("one pair or several?") with a reason beyond "more is better" and avoids the site's reliability wording (v23's site correction 2).
- **Steepest and shallowest lines (fa1-v15's method, recalled).** The steepest and shallowest straight lines that still pass through every bar; n = best ± half their difference: 1.49 ± 0.04. fa1-v15 taught it with uncertainty bars on an a against F_net graph (root decision 5 in `root-decisions-phys-y11-fa1-v13-v24.md`); here it is recalled in one sentence and used.
- **Accuracy within uncertainty (`ci15366d75`, partial).** Accepted 1.50 lies inside 1.45 to 1.53; percentage error |1.49 − 1.50| ÷ 1.50 × 100 = 0.7 per cent (0.9 per cent from the unrounded 1.486): said "under one per cent". "Agrees within its uncertainty" is the stated test of accuracy.
- **Prediction 2 (3 s, scene 9; v23's systematic error).** "Suppose every normal here were drawn three degrees off. What would the graph show?" The line misses the origin by more than the bars allow (intercept about +0.02 or −0.02) and its gradient shifts to about 1.53 or 1.47 (author note d). A line through the origin is the built-in check, because along the normal (θ₁ = 0) there is no bend (v19), so θ₂ = 0 too. Our line's intercept (−0.004) is inside the bars.
- **Limitations and improvements (`ci7e38e278` applied).** (1) Small angles: ± 0.5° is 7 per cent of 7° but about 1 per cent of 39.5°; take more traces at the larger angles. (2) Near 70°, more light reflects at the entry face (about 17 per cent, author note f), so the ray in the glass is dimmer and its centre harder to mark; a darker room and a brighter, narrower ray help. (3) A thicker block puts the entry and exit points further apart, so the inside line's direction is surer. (4) White light spreads slightly into colours at the ray's edges; a colour filter over the slit gives light of one colour.
- **Risk assessment (`cif90164e3`, partial; v20's rows recalled, one new row spoken).** v20 taught the lamp and darkened-room rows. Here they are recalled in one sentence each and collapse to grey chips; the spoken new row is the glass block, handled for every trace: chipped edges cut (check the edges before starting; don't use a chipped block; report it). Teacher notes, not shown: the low-voltage supply is plugged in away from any water; if a laser ray box is used, a class 2 (or lower) laser, never looked along.
- **Attempts (original, HSC style).** (A1, gradients) Best fit 1.47, steepest 1.52, shallowest 1.40, accepted 1.49 (perspex): n = 1.47 ± 0.06; percentage error 1.3 per cent; 1.49 lies in 1.41 to 1.53, so accurate within the uncertainty. Crossed: "uncertainty = 1.52 − 1.40 = 0.12" (the full difference). (A2, the other axes) sin θ₂ against sin θ₁, gradient 0.658: the gradient is 1/n, so n = 1.52; through the origin because a ray along the normal does not bend. Crossed: "n = 0.658" (n is never less than 1, v19).
- **Mistake scene:** none separate. "Average the pairs and you're done" (6); "the dependent variable must go up the side" (2, A2); "the uncertainty is the full spread of the lines" (feedback 1 crossed); "n is the gradient whichever way you plot" (feedback 2 crossed); "a good fit proves the value" (8: agrees within uncertainty; fa1-v24's "supports, not proves" recalled in a phrase); predictions reported as results (every data item tagged illustrative; the law's line tagged "model prediction").
- **Memory aid:** none new. fa1-v24's "Plot it straight, then read the gradient." is recalled (2, 17) with this lesson's second line "and the origin checks for a shift." (see "Memory aid check").
- **Handoff (route next; proposed question).** Board change: the graph shrinks to the left with its "n = 1.49 ± 0.04" readout; at the right a coded side cross-section of a convex lens outline (pale blue-grey, no plate) with two parallel rays entering and bending to meet at a point beyond it; chip "curved glass?"; then "Next: How do curved lenses bend light so spectacles can sharpen blurry vision?" (proposal; root aligns the chip with v25's final question). This is the frame v25 opens on.
- **Site sources used:** card 1 (the method's last step and its figure: 1 to 6); the card 1 check (true: the gradient is n: 2); learning intentions (Know 2, Can Do 2: 2 to 7; Understand 1: 6); misconception 2 (one pair is not enough: 6); card 3's graph bullet (6, corrected wording); Q1's improvements (11); Q2 (the method and the graph through the origin: 2, 10, A2). The single-pair, accuracy and error sections were used in v23.
- **Site corrections and suggestions:** none new from the sections used here; v23 logs lesson 18's corrections (Q3's tilted normal; card 3's "improves reliability"; the systematic-error example; the navigation link). Checked and correct for this video: card 1's gradient statement; Q2's model answer (straight line through the origin, gradient n).
- **Cause chain taught, in order:** (1) the law predicts a straight line through the origin, gradient n (1, 2); (2) the axes are chosen so the gradient is n (2); (3) controls keep n and the normal fixed (3); (4) better slit, dots and readings shrink random error; repeats show it (4); (5) the uncertainty in an angle carries into its sine (5); (6) the line uses every trace, and a shaky small-angle point barely tilts it (6); (7) the extreme lines through the bars give the uncertainty (7); (8) the accepted value inside the range means accurate within uncertainty (8); (9) a systematic shift would show at the origin (9, 10); (10) limitations and improvements (11); (11) risks (12).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (graphs, gradients, y = mx). From FA1, recalled in a phrase: fa1-v15 (steepest and shallowest lines through uncertainty bars), fa1-v24 ("Plot it straight, then read the gradient"; half the range as an uncertainty; valid). From FA2, recalled in a line at most: v19 (along the normal, no bend; n ≥ 1), v20 (the trace; its risks; its limitations), v21 (n₁ sin θ₁ = n₂ sin θ₂), v23 (n = sin θ₁/sin θ₂; accuracy and reliability; systematic error and the tilted normal).
- **Learner-visible vocabulary (plain meaning at first use):** independent, dependent, controlled variable (recalled, scene 3); valid (it really tests what we claim, recalled, scene 3); uncertainty (how far the true value could reasonably be from our value, recalled, scene 4); line of best fit (the straight line that passes as close as possible to all the points, scene 6); steepest and shallowest lines (the steepest and least steep straight lines that still pass through every bar, recalled, scene 7); intercept (where the line meets the vertical axis, recalled, scene 10).
- **Legacy logic ported:** none. Drawing parts only: `DataGraph` and `graphScale` from `src/explainer/physics/course-kit.tsx`; `DataTable` (as fa1-v24, lesson-local copy).
- **New explainer motion (coded unless a plate is named):** v20's **trace sequence** (fast mode, three traces per angle overlaid, their small spread visible); v19's **`RayRefract`** with v21's readouts; **table fill** (row at a time; columns θ₁ (°), θ₂ trials (°), mean θ₂ (°), sin θ₁, sin θ₂ ± ); fa1-v24's **`ErrorBarPlot`** extended to horizontal bars, with a least-squares line computed from the plotted means, the steepest and shallowest lines computed as the extreme lines through every bar, gradient readouts, an origin zoom, and a ghost line mode (the 3° tilted-normal case, computed from shifted data); **pair-average strip** (seven small n chips sliding into an average "1.47" beside the gradient "1.49", the 10° chip ringed); **range bracket on an n number line** (1.45 to 1.53 with the accepted 1.50 inside); **risk table, one row at a time** (v20, fa1-v24); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a small graph sketch; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the paper and apparatus in the left half; the table and graph in the right half; working under the graph.
- **Colour key:** as v18 to v23 and fa1-v24: measured points and their bars ink; the best-fit line teal; the steepest and shallowest lines dashed teal; the law's prediction dashed grey, labelled "model prediction"; the tilted-normal ghost line dashed muted red; light beams warm white; ray arrows with amber-outlined heads; the normal dashed grey; angle arcs navy; givens navy; working ink; the "illustrative data" tag grey on every data item; crossed items muted red.
- **No human figures.** The dots and lines draw themselves; the protractor and set square move by code.
- **Author notes (not learner copy):**
  (a) Apparatus: ray box on the low-voltage supply; block 11 cm × 6 cm on paper; one entry point at the middle of the long face; θ₁ set by turning the ray box about the entry point.
  (b) Data: trials (θ₂, degrees) 10°: 6.5, 7.0, 7.5; 20°: 13.0, 13.5, 14.0; 30°: 19.0, 19.5, 20.0; 40°: 25.5, 26.0, 26.5; 50°: 30.5, 31.0, 31.5; 60°: 35.5, 36.0, 36.5; 70°: 39.0, 39.5, 40.0. sin θ₁: 0.174, 0.342, 0.500, 0.643, 0.766, 0.866, 0.940. sin θ₂ (means): 0.122, 0.233, 0.334, 0.438, 0.515, 0.588, 0.636; bars ± 0.009, 0.008, 0.008, 0.008, 0.007, 0.007, 0.007 (half of sin(θ₂ + 0.5°) − sin(θ₂ − 0.5°)). Pair values sin θ₁ ÷ sin θ₂: 1.425, 1.465, 1.498, 1.466, 1.487, 1.473, 1.477; their mean 1.470.
  (c) θ₁ uncertainty: the ray box is set once per angle at ± 0.5° too, but θ₁ is not re-measured per trace; bars in sin θ₁ (up to ± 0.008) are not drawn. Not said; the review may ask for vertical bars (they would widen the steepest-shallowest range slightly).
  (d) Fits: least squares on (sin θ₂, sin θ₁) means: gradient 1.4858, intercept −0.0041. Extreme lines through every bar (searched in steps of 0.0001): steepest 1.5304 (intercept −0.023; touches the 30°, 60°, 70° bars), shallowest 1.4474 (intercept +0.010; touches the 10°, 50°, 70° bars); half the difference 0.0415. Tilted normal by 3° on model data (n = 1.50): both angles 3° smaller: gradient 1.530, intercept +0.022; both 3° larger: gradient 1.469, intercept −0.019.
  (e) Glass: n for blue light is about 1.53 and for red about 1.51 in a typical crown glass (about 1 per cent apart); a white-light ray box gives a slight colour fringe. "Slightly more" is said.
  (f) Reflectance from air into glass (n = 1.50) at 70°: about 17 per cent (Fresnel, unpolarised); at 10°, about 4 per cent.
  (g) Percentage uncertainty in θ₂: 0.5 ÷ 7.0 = 7.1 per cent; 0.5 ÷ 39.5 = 1.3 per cent.
  (h) A1: (1.52 − 1.40) ÷ 2 = 0.06; range 1.41 to 1.53; (1.49 − 1.47) ÷ 1.49 × 100 = 1.3 per cent.
  (i) A2: n = 1 ÷ 0.658 = 1.520 (1.52).
  (j) Pronunciations: "sin theta one against sin theta two"; "one point four nine, plus or minus zero point oh four"; "zero point six five eight".

Main question: *Seven traces through the same block give seven slightly different values. How can a graph determine a material's refractive index and its uncertainty?*
Entry knowledge (Stage 5 graphs and y = mx; fa1-v15 steepest and shallowest lines; fa1-v24 linearising and half-range uncertainty; v19, v20, v21, v23).
Stops after: the predicted straight line and the choice of axes; variables and controls; the improved method and repeats; the table with uncertainties; the graph and its gradient; the steepest and shallowest lines; accuracy within uncertainty and the percentage error; the origin check; limitations with improvements; a three-row risk assessment; two attempts. No standard deviation, no least-squares formula, no lenses.
Handoff: v25, lenses and spectacles (proposed question).

## FA0 Working scientifically placement (proposal for root)

Route root decision: "FA0 (Working scientifically) skills are taught just in time inside or immediately before the investigation videos (fa1-v10, v15, v24, v31 and the FA2/FA3 investigations)". This video adds to that coverage as follows, marking each as **partial** in the ledger.

| FA0 point (ledger ID, codename) | Exact wording (ledger) | Taught in v24 | Left for later |
| --- | --- | --- | --- |
| P25-FA0-G2-01 `ci9ce164ec` | "Justify the use of independent , dependent and controlled variables , and experimental controls in a valid scientific investigation" | Scene 3: IV, DV, three controls each with its reason (including colour of light) | "Experimental controls" (fa0-v02) |
| P25-FA0-G2-04 `cif90164e3` | "Assess potential hazards and their associated risks to develop a risk assessment" | Scene 12: v20's two rows recalled; one new hazard, harm, control row (the glass block) | Likelihood and consequence rating (fa0-v02) |
| P25-FA0-G4-03 `ci0fca96de` | "Select and use a range of representations to organise data and information, including graphs, keys, models , diagrams, tables and spreadsheets" | Scenes 2, 5, 6: a table with a derived sines column and its uncertainty; a graph whose axes are chosen for purpose, with horizontal bars | Keys, spreadsheets (later investigations) |
| P25-FA0-G5-03 `ci914a5e7e` | "Assess error, uncertainty and limitations in data and include calculations of percentage error , range , mean and standard deviation" | Scenes 4, 5, 7, 8, 11: mean, range, half-range, uncertainty carried into the sines, the gradient's uncertainty, percentage error, limitations | Standard deviation (fa0-v05) |
| P25-FA0-G5-04 `ci15366d75` | "Assess the validity , reliability, accuracy and precision of data and information" | Scenes 3, 8, 10: validity of the controls; accuracy within uncertainty; the origin check | Precision (fa0 skills video) |

Applied, not re-taught: P25-FA0-G2-02 `ci6c11c587` (reliable primary data: repeats, a narrow ray, dots far apart, half-degree readings), P25-FA0-G5-06 `ci7e38e278` (improvements matched to v20's and this run's limitations, scenes 4 and 11), P25-FA0-G5-07 `ci5a02ec2a` (three figures in n from half-degree angles; one significant figure in the uncertainty). Recommendation to root: accept the table and record it in the route as v24's partial FA0 coverage.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook (what shape?)
> Last time, one trace gave one value of n, and every trace carries a little scatter. So here are seven traces through the same glass block, from ten degrees to seventy. Each gives its own value of n. But what if we plot sin theta one against sin theta two, all at once? What shape should the points **make**?

Visual: opens on v23's last frame (the seven fanned traces, the empty axes, the chips). The "Next" chip becomes the heading: "The refractive index investigation"; the memory line fades. On "seven traces" each trace's arcs flash in turn with a small n chip beside it (1.43 to 1.50; tag "illustrative data"). On "all at once" the empty axes brighten. On "make" chips "a curve?", "a straight line through the origin?", "a straight line that misses the origin?" and a 3-second countdown ring.

### 2. what the law says to plot
> The law of refraction says sin theta one equals n times sin theta two. That's the shape y equals m x: a straight line through the origin, with a gradient of n. So the line's gradient is the refractive index. It's the rule from the ramp: plot it straight, then read the gradient. Notice that the angle we measure, theta two, goes along the bottom. We break the usual habit on purpose, so the gradient is n itself, not one over **n**.

Visual: right column `AlignedAlgebra`: "n₁ sin θ₁ = n₂ sin θ₂, n₁ = 1.00 (v21)"; "sin θ₁ = n × sin θ₂"; under it, aligned, "y = m × x" with "sin θ₁" ↔ "y", "n" ↔ "m", "sin θ₂" ↔ "x" linked by thin lines. On "a straight line through the origin" a dashed grey line through the origin draws on the axes, tag "model prediction"; the hook chip "a straight line through the origin?" ticks, the others cross. On "plot it straight" the fa1-v24 handwritten line writes small: "Plot it straight, then read the gradient." On "along the bottom" the horizontal axis label "sin θ₂ (measured)" pulses; on "n" a grey chip "the other way round: gradient = 1/n".

### 3. variables and controls
> The independent variable is the angle of incidence, set with the protractor. The dependent variable is the angle of refraction, read from each trace. Everything else is controlled. The same block, and the same face, keep n the same. The same narrow ray keeps the light the same colour, because glass bends blue light slightly more than red. And the block stays inside its outline, so every normal stays true. Then the test is valid: it tests what we **claim**.

Visual: camera push to the paper: the ray box plate on the low-voltage supply plate (`phys-y11-low-voltage-supply-v1.png`, lead coded), the glass block plate in its traced outline, the protractor plate at the entry point. A variables panel at the right, one row per sentence: "independent: θ₁" (the ray box turns, the arc and protractor reading change); "dependent: θ₂"; "controlled:" with three chips, each with its reason and its part pulsing: "same block and face → same n", "same narrow ray → same colour of light" (a small grey inset: a white ray splitting very slightly into a blue edge and a red edge, tag "exaggerated"), "block in its outline → normals true (v23)". On "claim" gloss "valid: it really tests what we claim".

### 4. a better method, and repeats
> This time we improve on our refraction investigation: a narrower slit, dots at least eight centimetres apart, a set square for each normal, and angles read to half a degree. Each angle is traced three times. These numbers are illustrative, made up to show the method, not real results. At thirty degrees, the angle of refraction comes out at nineteen, nineteen and a half, and twenty degrees. The mean is nineteen and a half, and half the range gives plus or minus zero point five **degrees**.

Visual: a list writes at the right, each item with a grey tag "(v20 limit)" crossed through: "narrower slit", "dots ≥ 8 cm apart (v23)", "set square for each normal" (the set square plate `phys-y11-set-square-v1.png` slides along the face), "read to 0.5°". On "illustrative" a large grey banner "illustrative data: not real results" writes and shrinks to a corner tag that stays on every data item to the end of scene 11. On "three times" three traces at 30° overlay on the paper, almost together. Three dots land on a short number line "19.0", "19.5", "20.0"; a bracket; on "degrees" rows "mean θ₂ = 19.5°", "± ½ range = ± 0.5°", boxed "θ₂ = 19.5 ± 0.5°".

### 5. the table
> The table turns every angle into a sine. At thirty degrees, sin theta one is zero point five oh oh, and sin of nineteen and a half is zero point three three four. The uncertainty carries through, too, so sin theta two is zero point three three four, plus or minus zero point oh oh eight, ready to plot as a **bar**.

Visual: the table fills (author note b): headings "θ₁ (°)", "θ₂ trials (°)", "mean θ₂ (°)", "sin θ₁", "sin θ₂ ±"; the 30° row lands from the number line; on "carries through" a small inset: "sin 19.0° = 0.326", "sin 20.0° = 0.342", "half the difference ≈ 0.008"; on "bar" the 30° cell reads "0.334 ± 0.008"; the other six rows write quickly.

### 6. the graph and the gradient
> Plot each point with its bar running sideways, because the uncertainty is in sin theta two. The points line up close to the origin, and a line of best fit passes through every **bar**. Its gradient is one point four **nine**, so that's our refractive index. Averaging the seven separate values gives one point four seven instead. The ten degree pair drags that down, because half a degree is a big share of seven degrees. On the graph, that point barely tilts the line.

Visual: right half: axes "sin θ₁" (0 to 1.0) against "sin θ₂" (0 to 0.7); the seven means plot with horizontal ink bars. On "bar" the teal line of best fit draws through all seven bars (gloss "line of best fit: the straight line as close as possible to all the points"); the dashed grey model line fades. On "nine" a rise-run triangle and readout "gradient = 1.49" boxed, "n = 1.49". On "Averaging" the pair-average strip: seven n chips (1.43, 1.47, 1.50, 1.47, 1.49, 1.47, 1.48) slide into "mean of pairs = 1.47"; the 10° chip and its point near the origin ring together; on "barely tilts" the line wobbles slightly as the 10° point is dragged and released (tag "the line hardly moves").

### 7. the uncertainty in n
> How sure are we? As with our trolley graph, draw the steepest straight line that still passes through every bar, and the shallowest. The steepest has a gradient of one point five three. The shallowest has one point four five. Half their difference, zero point oh four, is the uncertainty. So n is one point four nine, plus or minus zero point oh **four**.

Visual: the steepest line draws dashed teal through the bars (it touches three bar ends, which glow), readout "steepest: 1.53"; the shallowest the same, "shallowest: 1.45" (author note d; tag "recalled from the trolley graph"). Rows: "uncertainty = (1.53 − 1.45) ÷ 2 = 0.04"; on "four" boxed "n = 1.49 ± 0.04".

### 8. is it accurate?
> The accepted value for this glass is one point five oh. Our range runs from one point four five to one point five three, and one point five oh sits inside it. So our result agrees with the accepted value, within its uncertainty. The percentage error is under one per cent. That's how a graph assesses **accuracy**.

Visual: an n number line from 1.40 to 1.60 under the graph: a teal bracket "1.45 to 1.53" with its centre tick "1.49"; on "one point five oh" a dashed grey mark "accepted 1.50" lands inside the bracket and glows. Row "|1.49 − 1.50| ÷ 1.50 × 100 ≈ 0.7% (under 1%)". On "under one per cent" a silent chip "proves n = 1.50" fades in and is crossed (caption "agrees within uncertainty"). On "accuracy" a tag "accurate within its uncertainty".

### 9. prediction: a tilted normal
> Last time, a normal drawn off square shifted every reading. Suppose every normal here were drawn three degrees off. What would the graph **show**?

Visual: the paper inset: one trace's normal swings 3° and turns muted red; both arcs shrink. On "show" chips "nothing different?", "a steeper or flatter line only?", "a line that misses the origin?" and a 3-second countdown ring.

### 10. the origin check
> The line would miss the origin, by more than the bars allow, and its gradient would shift, to about one point five three or one point four seven. A line through the origin is a built-in check. When theta one is zero, the ray travels along the normal and doesn't bend, so theta two is zero too. Our line passes within the bars of the origin, so there's no sign of that **shift**.

Visual: on "miss the origin" a dashed muted red ghost line (computed from the tilted data, author note d; tag "illustrative: normals 3° off") draws beside the teal line, crossing the vertical axis at about +0.02 (zoom inset on the origin); its gradient readout "≈ 1.53"; on "one point four seven" a second ghost "≈ 1.47", crossing at about −0.02. The prediction chips: "a line that misses the origin?" ticks (and "a steeper or flatter line only?" half-ticks, caption "both"). On "along the normal" a tiny inset: a ray straight down the normal, no bend (v19). On "shift" the teal line's intercept "−0.004" sits inside a small grey band "within the bars", ringed; the ghosts fade.

### 11. limitations and improvements
> The biggest limitation is the small angles. Half a degree is seven per cent of seven degrees, but only about one per cent of forty, so take more traces at the larger angles. Near seventy degrees, more light reflects at the face, so the ray in the glass is dimmer and harder to mark. A thicker block puts the entry and exit points further apart, so the line inside is **surer**.

Visual: the graph's 10° bar pulses with readout "± 0.5° of 7.0° = 7%"; the 70° bar "± 0.5° of 39.5° ≈ 1%". On "seventy degrees" the paper at 70°: a brighter reflected ray at the face and a dimmer ray inside (author note f; tag "about a sixth reflects"). On "thicker block" the block's outline stretches into a coded thicker outline (a dashed outline only; the plate is not stretched) and the entry-to-exit line lengthens. After "surer" (silent) a coded red tint over the ray box slit; the inset's colour edges merge into one. A list builds at the right: "small angles → more traces at large angles", "dim ray near 70° → darker room, narrower ray", "short path inside → thicker block", "white light → colour filter".

### 12. risk assessment
> The risks from our refraction investigation still apply. The lamp gets hot, so don't touch its housing, and let it cool. The room is dark, so clear the floor first. One more matters here, because the block is handled for every trace. A chipped edge can **cut**, so check the edges before you start, and don't use a chipped block.

Visual: the risk table shows **only the row being spoken**, "Hazard / Harm / Control": on "lamp" row "hot ray box lamp / burns / don't touch the housing; cool before packing away" (tag "v20"), which collapses to a grey chip "lamp"; on "dark" row "darkened room / trips / clear the floor first" (tag "v20"), collapsing to "dark room"; on "cut" row 3 "glass block, handled often / cuts from chipped edges / check edges first; don't use a chipped block; report it", with the block plate's edges pulsing. Footer chip: "follow your school's risk assessment". Hold about 2 seconds; the safety points return in key note 5.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. A student plots sin theta one against sin theta two for a perspex block. The line of best fit has a gradient of one point four seven. The steepest line through the bars has a gradient of one point five two, and the shallowest, one point four oh. The accepted value is one point four nine. Find n with its uncertainty and the percentage error, and decide whether the result is accurate within its uncertainty. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a small sketch (axes "sin θ₁" and "sin θ₂", points with horizontal bars and three lines labelled only "best fit 1.47", "steepest 1.52", "shallowest 1.40"): "A student plots sin θ₁ against sin θ₂ for light entering a perspex block. The gradient of the line of best fit is 1.47; the steepest and shallowest lines through the uncertainty bars have gradients of 1.52 and 1.40. The accepted refractive index of perspex is 1.49. (a) State the refractive index with its uncertainty. (b) Calculate the percentage error. (c) Assess whether the result is accurate within its uncertainty. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> The uncertainty is half of one point five two minus one point four oh, so n is one point four seven, plus or minus zero point oh **six**. The percentage error is zero point oh two over one point four nine, about one point three per **cent**. One point four nine lies inside the range, one point four one to one point five three, so it's accurate within its uncertainty. The full gap, zero point one two, isn't the uncertainty. Take **half**.

Visual: card shrinks to the top. Rows: on "six" "(a) (1.52 − 1.40) ÷ 2 = 0.06 → n = 1.47 ± 0.06", boxed; on "cent" "(b) |1.47 − 1.49| ÷ 1.49 × 100 ≈ 1.3%", boxed; "(c) range 1.41 to 1.53 contains 1.49 → accurate within uncertainty", boxed, with a small n number line and bracket. On "half" a chip "uncertainty = 1.52 − 1.40 = 0.12" fades in and is crossed. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Another student plots sin theta two up the side, against sin theta one along the bottom. The graph is a straight line through the origin, with a gradient of zero point six five eight. Determine the refractive index of the block. Then explain why the line should pass through the origin. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with a small plain graph (vertical axis "sin θ₂", horizontal axis "sin θ₁", a straight line from the origin labelled only "gradient 0.658"): "Another student plots sin θ₂ (vertical axis) against sin θ₁ (horizontal axis) for light entering a glass block from air. The graph is a straight line through the origin with a gradient of 0.658. (a) Determine the refractive index of the glass. (b) Explain why the line should pass through the origin. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> This time, sin theta two equals sin theta one over n, so the gradient is one over **n**. n is one over zero point six five eight, one point five **two**. The line passes through the origin because a ray along the normal, at zero degrees, doesn't bend, so theta two is zero too. Writing n as zero point six five eight can't be right, because n is never less than **one**.

Visual: card shrinks to the top; "sin θ₂ (vertical axis)" underlined. Rows: on "n" "sin θ₂ = (1/n) × sin θ₁ → gradient = 1/n"; on "two" "(a) n = 1 ÷ 0.658 = 1.52", boxed; "(b) θ₁ = 0 → along the normal → no bend → θ₂ = 0", boxed, with the tiny along-the-normal inset. On "one" a chip "n = 0.658" fades in and is crossed (caption "n ≥ 1"). Hold about 1 second.

### 17. conclusion and handoff
> So one graph uses every trace at once. Its gradient gives n, the steepest and shallowest lines give its uncertainty, and the origin checks for a shift. Next, we curve the glass. How do curved lenses bend light so spectacles can sharpen blurry **vision**?

Visual: the memory line returns small at the top, with this lesson's second line: "Plot it straight, then read the gradient. The origin checks for a shift." The graph (illustrative tag) shrinks to the left with "n = 1.49 ± 0.04"; a conclusion box writes: "n = 1.49 ± 0.04 (gradient; steepest and shallowest lines); accepted 1.50 inside the range; line through the origin: no sign of a systematic shift (illustrative data)". On "curve the glass" a coded side cross-section of a convex lens outline (pale blue-grey) at the right; two parallel rays enter and bend to meet at a point beyond it; chip "curved glass?". On "vision" the chip "Next: How do curved lenses bend light so spectacles can sharpen blurry vision?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Variables: independent θ₁ (set with the protractor); dependent θ₂ (from the trace); controlled: the same block and face, the same narrow ray (same colour), the block kept in its outline.
2. sin θ₁ = n sin θ₂, so a graph of sin θ₁ (vertical) against sin θ₂ (horizontal) is a straight line through the origin with gradient n. (Plotted the other way, the gradient is 1/n.)
3. Repeat each angle: mean ± half the range; carry the uncertainty into the sine. Draw the bars, the line of best fit, and the steepest and shallowest lines through the bars: n = best gradient ± ½(steepest − shallowest).
4. Accurate within uncertainty: the accepted value lies inside the range. A line that misses the origin by more than the bars allow signals a systematic error.
5. Limitations: small angles (largest percentage uncertainty), dim rays at large angles, a short path inside the block, white light. Safety: hot lamp, darkened room, chipped glass.

Memory aid (large, on the notes screen): *Plot it straight, then read the gradient.* Second line: *The origin checks for a shift.*

At the end the notes cross-fade back to scene 17's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why plot sines: the law makes them a straight line with gradient n (2). Why θ₂ goes along the bottom: so the gradient is n, not 1/n (2, A2). Why each control: each is tied to n, the colour or the normal (3). Why the method changed: v20's limitations each answered (4). Why the bar has that size: the angle's uncertainty carries into its sine (5). Why the graph beats averaging pairs: a shaky small-angle point barely tilts the line (6). Why ± 0.04: the extreme lines that still fit the data (7). Why "accurate": the accepted value lies inside the range (8). Why the origin matters: along the normal there is no bend, so a shift shows there (9, 10). Why small angles are the biggest limitation: a fixed half degree is a large share of a small angle (11). Why each risk control: each is tied to its harm (12).
- **Misconceptions addressed:** averaging pairs is as good as the gradient (6); the measured variable must go up the side (2, A2); the uncertainty is the full spread (feedback 1 crossed); n is the gradient whatever the axes (feedback 2 crossed); a good fit proves the value (8, crossed); predictions reported as results (every data item tagged illustrative; the model line tagged).
- **One idea at a time:** the predicted shape (1, 2), controls (3), the method and repeats (4), the table (5), the gradient (6), its uncertainty (7), accuracy (8), the origin (9, 10), limitations (11), risks (12).
- **Video makes it easier:** the student watches y = mx lock onto the law (2), watches three traces overlay almost exactly (4), watches the bars and extreme lines pivot through them (6, 7), watches the accepted value land inside the bracket (8), and watches a tilted-normal ghost line lift off the origin (10).
- **Response opportunity:** two 3 s predictions (1, 9); two unseen HSC-style data tasks, 10 seconds each with the full data on the card, nothing answer-bearing (A1's sketch shows only the gradients given; A2's shows only its gradient). One crossed mistake each; feedback about 33 s and 27 s.
- **Avoided double teaching:** variables and validity (fa1-v24, v20), half-range uncertainty (fa1-v24), steepest and shallowest lines (fa1-v15), the trace and its risks (v20), the law (v21), accuracy and systematic error (v23) recalled with a phrase or sentence each.
- **Syllabus coverage:** `ci68dbbc22`: conduct (3, 4, 12), determine n (2, 6, A2), assess the accuracy of the measurement (7, 8, 10, 11, A1). FA0 as the placement table.
- **Out of scope by design:** standard deviation (fa0-v05); a least-squares formula; dispersion beyond one sentence; lenses (v25 onwards).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "A student plots sin θ₁ against sin θ₂ for light entering a perspex block. The gradient of the line of best fit is 1.47; the steepest and shallowest lines through the uncertainty bars have gradients of 1.52 and 1.40. The accepted refractive index of perspex is 1.49. (a) State the refractive index with its uncertainty. (b) Calculate the percentage error. (c) Assess whether the result is accurate within its uncertainty."
Model answer: (a) Uncertainty = (1.52 − 1.40) ÷ 2 = 0.06, so n = 1.47 ± 0.06. (b) Percentage error = |1.47 − 1.49| ÷ 1.49 × 100 ≈ 1.3%. (c) The range is 1.41 to 1.53; the accepted value 1.49 lies inside it, so the result agrees with the accepted value within its uncertainty (it is accurate within the uncertainty of the measurement). Classic mistake (crossed): "uncertainty = 1.52 − 1.40 = 0.12".

**Attempt 2 (scene 15; original wording, HSC style, 3 marks suggested).** "Another student plots sin θ₂ (vertical axis) against sin θ₁ (horizontal axis) for light entering a glass block from air. The graph is a straight line through the origin with a gradient of 0.658. (a) Determine the refractive index of the glass. (b) Explain why the line should pass through the origin."
Model answer: (a) From sin θ₁ = n sin θ₂, sin θ₂ = (1/n) sin θ₁, so the gradient is 1/n: n = 1 ÷ 0.658 = 1.52. (b) When θ₁ = 0 the ray travels along the normal and does not change direction, so θ₂ = 0: sin θ₂ = 0 when sin θ₁ = 0, so the line passes through the origin (a line that misses it by more than the uncertainty would suggest a systematic error). Classic mistake (crossed): "n = 0.658" (a refractive index is never less than 1).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook chips | pair values 1.43 to 1.50 (illustrative) | 1 |
| Repeats (30°) | 19.0, 19.5, 20.0; mean 19.5°; ± 0.5° | 4 |
| Table | sin θ₁ 0.174 to 0.940; sin θ₂ 0.122 to 0.636; bars ± 0.007 to 0.009; 30° row 0.500, 0.334 ± 0.008 | 5, 6 |
| Gradient | 1.49 (1.486); intercept −0.004 | 6, 10 |
| Pair average | 1.47; 10° pair 1.42 (shown 1.43 on the chip, 1.425) | 6 |
| Extreme lines | 1.53 and 1.45; ± 0.04 | 7 |
| Accuracy | accepted 1.50; range 1.45 to 1.53; under 1% (0.7%) | 8 |
| Tilted normal (3°) | gradients about 1.53 and 1.47; intercepts about +0.02 and −0.02 | 9, 10 |
| Limitations | 7% at 7.0°; about 1% at 39.5°; about 17% reflected at 70° | 11 |
| A1 | 1.47 ± 0.06; 1.3%; range 1.41 to 1.53 | 13, 14 |
| A2 | 1/0.658 = 1.52; wrong 0.658 | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- Model θ₂ = sin⁻¹(sin θ₁ ÷ 1.50) for 10° to 70°: 6.65, 13.18, 19.47, 25.37, 30.71, 35.26, 38.79.
- sin of the means: 0.1219, 0.2334, 0.3338, 0.4384, 0.5150, 0.5878, 0.6361; sin θ₁: 0.1736, 0.3420, 0.5000, 0.6428, 0.7660, 0.8660, 0.9397.
- Half-bar at 30°: (sin 20.0° − sin 19.0°) ÷ 2 = (0.3420 − 0.3256) ÷ 2 = 0.0082.
- Least squares (x = sin θ₂, y = sin θ₁): gradient 1.4858, intercept −0.0041.
- Extreme lines through every bar: 1.5304 and 1.4474; half difference 0.0415.
- Pair values: 1.425, 1.465, 1.498, 1.466, 1.487, 1.473, 1.477; mean 1.470.
- (1.50 − 1.49) ÷ 1.50 = 0.67%; (1.50 − 1.4858) ÷ 1.50 = 0.95%.
- Tilted normal on model data: −3°: gradient 1.530, intercept +0.022; +3°: 1.469, −0.019.
- 0.5 ÷ 7.0 = 7.1%; 0.5 ÷ 39.5 = 1.3%; reflectance at 70° (air to n = 1.50, unpolarised): 0.171.
- A1: 0.12 ÷ 2 = 0.06; 0.02 ÷ 1.49 = 1.34%. A2: 1 ÷ 0.658 = 1.5198.

## Safety facts check (self-check, 3 Nov; Codex to confirm)

- **Hot lamp.** Ray box lamps (filament or halogen) heat the housing during a lesson. Controls: don't touch the housing while it's on; switch off between long pauses; let it cool before packing away. Learner copy as scene 12 (recalled from v20).
- **Darkened room.** Reduced lighting raises trip and knock risks. Controls: bags under the bench and the floor clear before the lights go down; enough light to move safely. Learner copy as scene 12 (recalled from v20).
- **Glass block.** A block handled for many traces can have chipped edges that cut. Controls: check the edges before use; don't use a chipped block; report it. Learner copy as scene 12.
- **Electrical (teacher note).** The ray box runs from a low-voltage supply; plug it in away from water and check the lead. Not in learner copy.
- **Lasers (teacher note).** If a laser ray box is used: class 2 or lower, beam kept on the bench, never looked along. Not in learner copy.
- Codex to confirm against NSW Department of Education science safety guidance (no specific prohibitions expected for this practical).

## Memory aid check

- **"Plot it straight, then read the gradient." with "The origin checks for a shift."** The first line is fa1-v24's aid, recalled by name in scene 2; its assumption (the model has the form y = mx (+ c)) is shown with the y = mx alignment, and the gradient means n only because of the law and the axes chosen (said in 2, with the 1/n case in A2). The second line is new: a model of the form y = mx passes through the origin, so a line that misses it by more than the bars allow points to a systematic error (said in 10, with the cause: along the normal, no bend). Assumption checked: it applies only when the model passes through the origin (true here; fa1-v24's ramp model had a real intercept from rolling resistance, so the line is specific to y = mx models; said as "a built-in check" for this graph, and key note 4 states the condition). It ties to v23's "Repeats shrink the scatter, not the shift": the graph's bars show the scatter; the origin shows the shift.
- **Considered, not used:** a new rhyme for the extreme lines ("half the gap between the extremes"; it is a procedure the key note already states).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,211 characters**, 18 scenes. Characters per scene (1 to 18): 303, 428, 456, 489, 311, 461, 351, 310, 142, 374, 373, 325, 441, 429, 318, 358, 250, 75. At 13.3 characters per second the speech is about 467 s; add about 20 s of holds and settling (the y = mx lock in 2, the three-trace overlay in 4, the table fill in 5, the plot and fit in 6, the extreme lines in 7, the bracket in 8, the ghost lines in 10, the 70° and thicker-block insets in 11, the 2-second risk hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 102 s of holds): **about 569 s**, inside the 5,500 to 6,800 character band and under the 570 s cap (Revision 1 was trimmed from 6,645 characters). If the voiced preview runs long, the first cut is the pair-average contrast in scene 6 (about 160 characters; the strip plays silently), then the reflection sentence in scene 11 (about 90 characters; the list keeps it).

## Scene list and build ids

Lesson key `p-y11-fa2-v24` (root decision 2). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v24` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v24` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, what-to-plot, variables, better-method-repeats, table, graph-gradient, uncertainty-in-n, accuracy, tilted-normal-prediction, origin-check, limitations, risk, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and tilted-normal-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v23's last frame continues into scene 1 (camera continue: the same traces and axes); 1 to 2 camera continue (the axes fill); 2 to 3 camera push to the paper; 3 to 4 camera continue; 4 to 5 split board (paper left, table right); 5 to 6 camera continue (table to graph); 6 to 7 to 8 camera continue (the same graph); 8 to 9 split board (paper inset); 9 to 10 camera continue; 10 to 11 split board; 11 to 12 board clear to the risk table; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook and tilted-normal-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v24-learning-review.md`, `science_check` = `checks/p-y11-fa2-v24-physics-check.md`.

## Assets

`public/assets/physics/` holds FA1 plates, `phys-y11-protractor-v1.png` and `phys-y11-low-voltage-supply-v1.png` (checked 3 Nov). Requested earlier, reused by name (uniform scaling only, never stretched):
- v18's `phys-y11-ray-box-v1.png` (scenes 1, 3, 4, 9 to 12).
- v18's `phys-y11-glass-block-v1.png` (scenes 1, 3, 4, 9 to 12).
- v23's `phys-y11-set-square-v1.png` (scene 4).
- `phys-y11-protractor-v1.png` (exists; scenes 3, 4).
- `phys-y11-low-voltage-supply-v1.png` (exists; scenes 3, 12).
- **Considered, not used:** a thicker block plate (scene 11 shows a dashed outline only); a colour filter plate (a coded tint over the slit, like v22's coded sheen); a lens plate for the handoff (v25's designer chooses; the coded cross-section is an abstract ray diagram).

Need: no new plates.

Coded: beams, rays and arrowheads, normals, arcs and readouts, the traced outline, dots and lines, the three-trace overlay, the number lines and brackets, the table, the graph, bars, best-fit, steepest, shallowest and ghost lines, the pair-average strip, the n range bracket, the colour inset and the slit tint, the risk table, the lens outline and rays in the handoff, `AlignedAlgebra`, `Countdown`, `QuestionCard` with a graph sketch, `Chip` with `cross`, `KeyNotes`, `Heading`.

Kit gaps (for the build brief): fa1-v24's **`ErrorBarPlot`** with **horizontal bars**, computed **extreme lines through every bar** (steepest and shallowest), and a **ghost line from transformed data** (the tilted-normal case); v20's **trace sequence** with a multi-trace overlay; **pair-average strip**; **n range bracket**; `DataTable` and the row-at-a-time risk table (lesson-local acceptable for Revision 1).

## Codex asset brief (Year 11 Physics FA2 v24, refractive index investigation)

No new plates. Confirm that v23's `phys-y11-set-square-v1.png` request is painted before this video's build (scene 4 uses it), and that the existing `phys-y11-low-voltage-supply-v1.png` sits at a sensible scale beside v18's ray box (uniform scaling only).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the plotted points, bars, best-fit, steepest, shallowest and ghost lines are all computed from the stated data (author notes b and d), and that the steepest and shallowest lines pass through every bar.
3. Confirm the physics and analysis claims: sin θ₁ = n sin θ₂ for light from air; sin θ₁ against sin θ₂ is a straight line through the origin with gradient n (1/n the other way round); a ray along the normal does not bend; the half-range uncertainty carried into the sine; n = best ± half the difference of the extreme gradients; agreement within uncertainty as a test of accuracy; a tilted normal shifts the intercept and gradient (author note d); glass bends blue slightly more than red; more light reflects at large angles.
4. Confirm every data item carries the "illustrative data" tag and is said to be illustrative, and that the law's line is tagged "model prediction" (route stop: predictions not reported as observations).
5. Confirm the safety facts under "Safety facts check" against NSW Department of Education science safety guidance.
6. Confirm the memory aid's assumptions are spoken (scenes 2, 10).
7. Confirm both attempt questions are original in wording, carry all their data on the card, and show nothing answer-bearing.
8. Confirm the syllabus and FA0 quotes match the syllabus JSON and the ledger exactly and no 2017-syllabus label appears.
9. Confirm no person, hand, eye, face or body outline appears in any scene, card or plate (owner instruction).
10. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
11. Confirm the narration character count by script with the build parser rules.

## YouTube metadata (draft)

Title: Refractive Index Investigation: Gradient and Uncertainty | Year 11 Physics

(Title length: 75 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson18.sa.html

Seven traces through the same glass block give seven slightly different values of n. How can one graph give a better answer, and say how sure we are? See why the law of refraction makes a graph of sin θ₁ against sin θ₂ a straight line through the origin with gradient n, choose and justify the variables, improve the method and repeat each angle, carry the uncertainty into the sines, and find n from the gradient with its uncertainty from the steepest and shallowest lines. Then check the accuracy against the accepted value, use the origin to catch a systematic error, and cover the limitations and the risk assessment. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025):
"Conduct a laboratory experiment to determine the refractive index of a material and assess the accuracy of the measurement" (ci68dbbc22)
Working scientifically (in part): "Justify the use of independent, dependent and controlled variables, and experimental controls in a valid scientific investigation" (ci9ce164ec); "Assess potential hazards and their associated risks to develop a risk assessment" (cif90164e3); "Select and use a range of representations to organise data and information, including graphs, keys, models, diagrams, tables and spreadsheets" (ci0fca96de); "Assess error, uncertainty and limitations in data and include calculations of percentage error, range, mean and standard deviation" (ci914a5e7e); "Assess the validity, reliability, accuracy and precision of data and information" (ci15366d75)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: Measuring refractive index (previous video). Next: Lenses and vision.

#Year11Physics #Physics #Waves #RefractiveIndex #HSCScience

## Open decisions

- **1. Handoff question (root).** Route next is v25 with a placeholder question. This design proposes "How do curved lenses bend light so spectacles can sharpen blurry vision?" for the chip; root aligns it with v25's final question when v25 is designed. The handoff visual is a coded lens cross-section with no people or eyes.
- **2. Horizontal bars (root).** The site's axes (sin θ₁ up, sin θ₂ along) put the measured angle on the horizontal axis, so the bars are horizontal. The design keeps the site's axes (gradient n) and says why; A2 covers the other choice. Root to confirm.
- **3. Vertical bars (root).** θ₁'s smaller uncertainty is not drawn (author note c). If the learning review asks, add small vertical bars; the steepest and shallowest gradients would widen slightly (± 0.04 may become ± 0.05).
- **4. Risk rows (root).** Two of three rows are v20's, recalled; one new row is spoken. Root to confirm this meets the route stop ("identify ... risks") without double teaching.
- **5. Site link form.** As v10; the practical's site home is lesson 18 (shared with v23).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from fa1-v15, fa1-v24, v20, v21 and v23 at Year 11 entry; check that the y = mx alignment makes "gradient = n" feel caused; that "we break the usual habit on purpose" is clear and not confusing; that the uncertainty carried into a sine is followable at speaking pace; that the pair-average contrast is clear in one sentence; that "accurate within its uncertainty" lands with the bracket; that the tilted-normal prediction is fair after v23; that the cards give nothing away), then the Codex physics check (with the safety facts) and error check.
- The y = mx lock (2), the three-trace overlay (4), the bars and extreme lines (6, 7), the accepted value inside the bracket (8) and the ghost line lifting off the origin (10) carry the explanation; judge them at playback speed in the voiced preview. All readouts must come from the same data and functions as the plotted points.
