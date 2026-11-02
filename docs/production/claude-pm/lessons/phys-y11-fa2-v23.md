# Year 11 Physics FA2 V23 (Physics 2025, Year 11, Focus Area 2): How can tracing a ray through a glass block measure its refractive index, and how accurate is the result? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa2-v23`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: one new (a set square); v18's ray box and glass block, v22's half-disc block and the existing protractor reused by name. Teaching data are the site's values or illustrative and labelled so.

Narration 5,711 characters, 16 scenes, about 527 s (8.8 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: twenty-third video of the Year 11 Physics (2025) Focus Area 2 route and the first of two refractive-index measurement videos: this one turns a trace into a value of n and judges its accuracy; v24 runs the full investigation with a graph and an uncertainty. Templates: `phys-y11-fa1-v22.md` (concept format, section list, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md` (practical conventions, FA0 placement table, illustrative data rules); house conventions and the FA2 colour key from `phys-y11-fa2-v18.md` to `phys-y11-fa2-v22.md` (Revision 1; v20 taught the trace and v22's scene 17 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson18.sa.html` (orient and predict, intentions and key terms, misconceptions 1 and 2, card 1 the method, card 2 from angles to n with `we-1` and the quick check, activity 1, odd one out, card 3 assessing accuracy and errors, last check, fill the gaps, independent practice Q1 to Q3, retrieve). v24 shares this site lesson and the same syllabus point; this video takes the single-pair calculation, accuracy against reliability and the error sources (cards 2 and 3, Q1, Q3), and v24 takes the graph and its gradient (card 1's last step, Q2's graph). Route entry: `phys-y11-fa2-v23` in `../../phys-y11-video-route.json` (proposed; coverage "preparation-for-investigation"). Route start: "Start with Measuring Refractive Index. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply measuring refractive index? Teach only the listed actions; the next video owns its separate question." Route next: "phys-y11-fa2-v24: How can a graph determine a material refractive index and its uncertainty?" (kept, with the possessive added; the handoff chip uses "How can a graph determine a material's refractive index and its uncertainty?").

**Opening frame (v22's actual handoff, Revision 1, 3 Nov).** v22's scene 17 ends with the memory line "Small over big, from the slow side." small at the top; a top view of the paper with the half-disc block plate (`phys-y11-semicircular-block-v1.png`) at the critical angle, the outside ray skimming the flat face; a grey row "with air outside: sin θc = 1/n"; beside it the rectangular glass block plate (`phys-y11-glass-block-v1.png`) with a dashed traced outline, four pencil dots and the protractor plate (`phys-y11-protractor-v1.png`) at the entry point; chip "measure n?"; chip "Next: How can tracing a ray through a glass block measure its refractive index, and how accurate is the result?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, hands, faces or eyes (the dots, lines and normal draw themselves; the protractor and set square move by code; parallax is shown with two coded sight lines from a grey "viewpoint" dot, never an eye; the two students are grey chips "Student P", "Student Q", never figures); apparatus painted (ray box, blocks, protractor, set square); rays, normals, arcs, the number lines and the readouts coded; one reasoning stage at a time; calculations as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question with its data on screen; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v20 (the trace), v21 (the law of refraction) and v22 (sin θc = 1/n with air outside) recalled in a sentence at most.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 2, group "Wave behaviours"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON:

- P25-FA2-G3-10 `ci68dbbc22`: "Conduct a laboratory experiment to determine the refractive index of a material and assess the accuracy of the measurement" (route coverage for this video: "preparation-for-investigation"; v24 owns it)

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Working scientifically points taught in part, just in time (FA0, local ledger IDs with official codenames, quoted from `docs/production/programme/syllabus/phys-new-y11.json`; proposal for root, see the placement section): P25-FA0-G5-03 `ci914a5e7e`, P25-FA0-G5-04 `ci15366d75`.

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2

**Boundary:** starts from v22's handoff (above); the hook (two careful results, 1.49 and 1.61, against 1.50); n = sin θ₁/sin θ₂ from the law of refraction with air as medium 1; the trace recalled in one pass (v20 taught it); the site's worked example (50°, 30°: 1.53, 2.0 per cent); accuracy and reliability, shown with three sets of trials on number lines; random errors (wide ray, close dots, parallax), how they scatter and how they shrink; systematic errors (a normal drawn off square, a slipping block), how they shift every reading, and why repeats cannot fix them; the hook answered; a second method as a cross-check (v22's critical angle on the half-disc); the memory aid; two attempts. Stops at "repeats shrink the scatter, not the shift". Not taught: the graph of sin θ₁ against sin θ₂, its gradient and the uncertainty of n (v24); variables, a risk assessment and limitations for the full investigation (v24; v20's risk rows are recalled there); precision as a separate term (fa0 skills video); standard deviation (fa0-v05).

## Decisions

- **Learner question (route placeholder rewritten; root to enter).** Route placeholder: "How can I explain and apply measuring refractive index?" Rewritten as one causal question: "How can tracing a ray through a glass block measure its refractive index, and how accurate is the result?" The second clause is the syllabus point's "assess the accuracy of the measurement", so the answer is one piece of work, not two topics. The answer, built in order: two careful results can disagree (1); the law of refraction turns two angles into n (2); the trace gives the two angles (3); one trace, one value, one percentage error (4); accuracy is closeness to the accepted value, reliability is agreement between repeats (5); random errors scatter readings, and repeats average them out (7); systematic errors shift every reading, and only fixing the cause helps (8); a second method can expose a hidden shift (9).
- **The hook (site hook, made a prediction).** Two students, the same block, 1.49 and 1.61 against 1.50. "Neither student cheated. So what could push a careful result that far off?" 3 s with chips "one unlucky reading?", "a mistake that shifts every reading?", "the block changed?". Answered in 8: with one trace you can't tell the first two apart; repeats can; the block's index doesn't change.
- **From angles to n (site card 2).** n₁ sin θ₁ = n₂ sin θ₂ (v21) with n₁ = 1.00 (air), so n = sin θ₁/sin θ₂. Said in two steps.
- **The trace, recalled (site card 1; v20 taught it).** One pass of v20's trace sequence in about 25 s: outline, a narrow ray, two dots far apart on each ray, remove the block, join, entry to exit, the normal at 90°, both angles from the normal. Not re-explained; the emerging ray's parallel check is a grey tag only (v20).
- **Worked example (site `we-1`, numbers unchanged).** θ₁ = 50°, θ₂ = 30°, accepted 1.50: n = 0.766 ÷ 0.500 = 1.53; percentage error = 0.03 ÷ 1.50 × 100 = 2.0 per cent (2.1 from the unrounded 1.532; the site's 2.0 is kept, from the three-figure n). Percentage error is recalled from fa1-v10 and said with its meaning.
- **Accuracy and reliability (site key terms, misconception 1, card 3; `ci15366d75` partial).** Accuracy: how close a result is to the accepted value. Reliability: how closely repeated results agree. Three illustrative sets of five trials on number lines with the accepted 1.50 marked: tight on 1.50 (accurate and reliable); scattered round 1.50 (accurate on average, not reliable); tight on 1.60 (reliable, not accurate). The dartboard picture is not used (owner: no clip-art; the number line is the HSC way to show it).
- **Prediction (3 s, scene 6; site misconception 1 and Q3).** "That last student repeats the trace ten more times, just as carefully. Will their mean move closer to one point five oh?" No (8).
- **Random errors (site card 3, odd one out A and D; v20's limitations quantified).** Wide ray (where is its centre?); dots close together (a 1 mm slip across 2 cm tilts a line by about 2.9°; across 8 cm, about 0.7°); parallax reading the protractor (glossed "a reading that shifts when you look from the side"). They push readings up or down by different amounts, so the mean of repeats is closer to the true value. Fixes: a narrow ray, dots far apart, read square on. The dot-spacing numbers make "far apart" a cause, not a rule.
- **Systematic errors (site card 3 and Q3, corrected; site correction 1).** A normal drawn 4° off square makes both angles 4° too small (or both too large, the other way), every trace; for n = 1.50 at 50°, n comes out 1.60 (author note b). A block that slips while the dots are marked shifts the path the same way each time. Fixes at the cause: a set square for the normal; check the block still fills its outline. The site's Q3 model answer says a tilted normal makes "every angle of incidence ... slightly too large and every angle of refraction slightly too small": a single tilted normal moves both angles the same way (author note b), so the design uses the correct statement.
- **The hook answered.** With one trace, an unlucky random slip and a systematic error look the same. Repeats tell them apart: scatter means random; a tight cluster off target means systematic. The 1.61 student most likely had a systematic error (the 4° normal gives 1.60), but only repeats and a check of the normal can show it.
- **A second method (cross-check; uses v22).** A half-disc block of the same glass turned until the outside ray just skims the flat face: illustrative θc = 41.5°, so n = 1 ÷ sin 41.5° = 1.51. Two independent methods agreeing within about one per cent makes a hidden shift in either less likely. Kept to one scene; it applies `ci68dbbc22`'s "determine the refractive index" a second way and shows why accuracy is judged against more than one check. Different from v22's A2 (42.0°).
- **Attempts (original, HSC style).** (A1, one pair and its error) Air into perspex, θ₁ = 35.0°, θ₂ = 22.0°, accepted 1.49: n = 0.574 ÷ 0.375 = 1.53; percentage error about 3 per cent (2.7 from 1.53; 2.8 unrounded). Crossed: "n = 35.0 ÷ 22.0 = 1.59" (angles divided instead of their sines). (A2, accuracy against reliability) Student P: 1.58, 1.59, 1.58; Student Q: 1.44, 1.55, 1.50; accepted 1.50. P more reliable; Q more accurate (mean 1.50 against 1.58, about 5 per cent high); P's error systematic (a normal drawn off square, a slipping block); fix: redraw the normal with a set square, check the outline. Crossed: "P is more accurate because P's results agree" (site misconception 1).
- **Mistake scene:** none separate. "Reliable means accurate" (5, 8, feedback 2 crossed; site misconception 1); "repeats fix any error" (6, 8, memory aid); "one careful pair is enough" (8, handoff; site misconception 2, finished in v24); "divide the angles" (feedback 1 crossed); "close dots are fine if you're careful" (7, with the numbers).
- **Memory aid:** "Repeats shrink the scatter, not the shift." (see "Memory aid check"), said in scene 10.
- **Handoff (route next).** Board change: one sheet of paper with seven traces fanned from the same entry point (θ₁ = 10° to 70°, the illustrative v24 set; tag "illustrative data"); beside it empty axes "sin θ₁" (vertical) and "sin θ₂" (horizontal); chip "all at once?"; then "Next: How can a graph determine a material's refractive index and its uncertainty?". This is the frame v24 opens on.
- **Site sources used:** hook (1.49 and 1.61: scenes 1, 8); warm-up (one pair or several: 8, handoff); learning intentions (Know 1, 3; Understand 2, 3; Can Do 1, 3: 2 to 9; Know 2 and Can Do 2 are v24's); key terms (accuracy, reliability, systematic error, percentage error: 4, 5, 8); misconceptions 1 and 2 (5, 8; 2 finished in v24); card 1 (3, as v20's trace); card 2, `we-1` and the quick check (2, 4; the quick check's 40° and 25° give 1.52, author note e, not used); activity 1 (not used: its three pairs and their average are v24's kind of task, author note e); odd one out (C, the same angle every time: 7's "dots far apart" and the repeats; the item itself not used); card 3 (5, 7, 8; its graph bullet is v24's); fill the gaps (5, 8); Q1 (8, the improvements); Q3 (8, corrected).
- **Site corrections and suggestions (quoted from site lesson 18, read 3 Nov; for `../site-corrections-phys-y11.md`; none of these rows is logged yet):**
  1. Short-answer Q3 model answer: "A plausible systematic error is that the normal was not constructed exactly perpendicular to the block's surface, so every angle of incidence was read slightly too large and every angle of refraction slightly too small". A single tilted normal line rotates both halves the same way, so both angles are read too large (or both too small), by the tilt; the result is too high when both are too small. Suggest: "so both angles were read slightly too small (by the tilt of the normal) in every trial, which makes n = sin θ₁/sin θ₂ too high."
  2. Card 3, last bullet: "Plotting a graph of $\sin\theta_1$ vs $\sin\theta_2$ and taking the line-of-best-fit gradient averages out random scatter and improves reliability." A best-fit gradient reduces the effect of random scatter on the result; it does not make the measurements more consistent (reliability is the agreement of repeats). Suggest: "reduces the effect of random scatter on the value of n, and shows any point that doesn't fit". The same applies to misconception 2's "averages out random error and gives a more reliable n". (v24 also uses this card; logged once, here.)
  3. Key terms, systematic error: "(e.g. a mis-zeroed protractor or a thick ray)". A thick ray is listed as random in card 3 ("Thick ray / fuzzy marks (random)"). A thick ray makes the centre uncertain each time (random) unless the student always marks the same edge (then systematic). Suggest dropping "or a thick ray" from the systematic example, or adding "if you always mark one edge of a thick ray".
  4. Navigation: the bottom link reads "← Previous" with no lesson title (as lessons 14, 15 and 17). Suggest "← Previous: Total Internal Reflection and the Critical Angle".
  - Checked and correct: card 2 and `we-1` (1.53; 2.0 per cent from 1.53); the quick check (B, 1.52); activity 1 (1.54, 1.51, 1.51; mean 1.52; under 1 per cent); odd one out (C); Q1 and Q2 model answers; Q3's 8.0 per cent and its "averaging does not remove a systematic error".
- **Cause chain taught, in order:** (1) careful results can still disagree (1); (2) the law turns two angles into n (2); (3) the trace supplies the angles (3); (4) the percentage error measures accuracy (4); (5) accuracy and reliability are different things (5); (6) random errors scatter both ways, so averaging helps; far-apart dots shrink them (7); (7) systematic errors shift one way, so averaging can't help; fix the cause (8); (8) a second method catches a hidden shift (9).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (protractors; sine on a calculator). From FA1, recalled in a phrase: fa1-v10 (mean, percentage error, random and systematic error first met). From FA2, recalled in a line at most: v20 (the trace; dots far apart), v21 (n₁ sin θ₁ = n₂ sin θ₂), v22 (with air outside, sin θc = 1/n; the half-disc block).
- **Learner-visible vocabulary (plain meaning at first use):** accepted value (the value found by careful, standard measurements, scene 1); percentage error (the difference from the accepted value, as a percentage of it, scene 4, recalled); accuracy (how close a result is to the accepted value, scene 5); reliability (how closely repeated results agree, scene 5); random error (an error that pushes each reading up or down by a different amount, scene 7); parallax (a reading that shifts when you look from the side, scene 7); systematic error (an error that shifts every reading the same way, scene 8); set square (a right-angled triangle for drawing ninety degree lines, scene 8).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v20's **trace sequence** (fast mode, one pass); v19's **`RayRefract`** with v21's readouts; **trials number line** (three stacked number lines from 1.40 to 1.65 with the accepted 1.50 as a dashed grey mark, dots landing one per trial, a bracket for the spread and a mean tick); **dot-slip lens** (two dots joined by a line; one dot nudges 1 mm sideways and the line swings; an angle readout; the same nudge with the dots 8 cm apart); **parallax sight lines** (a protractor edge with a pencil line under it, two coded sight lines from grey viewpoint dots, one square on and one from the side, reading "30°" and "31°"); **tilted normal** (the normal swings 4° and both arcs shrink together with live readouts and a live n readout); **block slip** (the block plate nudges out of its outline and the traced path shifts); v22's **`CriticalSweep`** in its skim position for the cross-check; `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a line drawing or a small table; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the paper and apparatus in the left half; number lines, readouts and working in the right half.
- **Colour key:** as v18 to v22: light beams warm white; ray arrows with amber-outlined heads; the normal dashed grey (a tilted normal dashed muted red until corrected); angle arcs and readouts navy; the glass pale blue-grey; trial dots ink; the accepted value a dashed grey line; means teal ticks; the spread brackets grey; givens navy; working ink; crossed items muted red; the "illustrative data" tag grey on every illustrative item.
- **No human figures.** Students are grey name chips; viewpoints are grey dots; nothing holds the pencil or the protractor.
- **Author notes (not learner copy):**
  (a) n = sin θ₁/sin θ₂ with n_air = 1.00 (air's 1.0003 ignored; it changes n by 0.03 per cent).
  (b) Tilted normal: rotating the normal line by δ changes both measured angles by the same δ (the upper half turns towards one side of the incident ray and the lower half the same rotational way past the refracted ray). True n = 1.50 at θ₁ = 50°: true θ₂ = 30.71°. Both 4° smaller: sin 46° ÷ sin 26.71° = 1.600; 4.33° smaller gives 1.61. Both 2° larger: 1.458. d(ln n)/dδ = cot θ₁ − cot θ₂ < 0, so smaller measured angles give a higher n. Narration: "four degrees off square ... about one point six oh".
  (c) Dot slip: atan(1/20) = 2.86°; atan(1/40) = 1.43°; atan(1/80) = 0.72°. Said "almost three degrees" and "under one degree".
  (d) Random spread effect: θ₂ = 30° ± 1° at θ₁ = 50° gives n from 1.487 to 1.580, so one degree on the refraction angle is worth about ±3 per cent on n.
  (e) Site values checked, not used on screen: quick check sin 40° ÷ sin 25° = 1.521 (B); activity 1: 1.536, 1.506, 1.510, mean 1.517, 0.2 per cent from 1.52 (v24 does the many-pairs work with its own data).
  (f) Number line sets (illustrative): set 1 (accurate, reliable) 1.49, 1.50, 1.50, 1.51, 1.50; set 2 (accurate on average, not reliable) 1.42, 1.47, 1.50, 1.54, 1.57, mean 1.50; set 3 (reliable, not accurate) 1.59, 1.60, 1.60, 1.61, 1.60, mean 1.60. Ten more trials for set 3 (scene 6 to 8) land between 1.59 and 1.61; the mean stays 1.60.
  (g) Cross-check: 1 ÷ sin 41.5° = 1.509 (1.51); 0.6 per cent from 1.50 unrounded (0.7 from 1.51). Rays near the critical angle: the skimming point is judged by eye as the outside ray fades, which is its own limitation (not said; v24 can add it).
  (h) A1: sin 35° = 0.5736; sin 22° = 0.3746; n = 1.531 (1.53); (1.53 − 1.49) ÷ 1.49 × 100 = 2.7 per cent (2.8 unrounded): "about three per cent"; 35 ÷ 22 = 1.591.
  (i) A2: P mean 1.583 (1.58), range 0.01; Q mean 1.497 (1.50), range 0.11; P is (1.58 − 1.50) ÷ 1.50 = 5.3 per cent high (5.6 unrounded): "about five per cent".
  (j) Pronunciations: "sin theta one over sin theta two"; "one point five three"; "parallax" (PARR-a-lax); "perspex".

Main question: *Two students trace a ray through the same glass block and get 1.49 and 1.61. How can tracing a ray through a glass block measure its refractive index, and how accurate is the result?*
Entry knowledge (Stage 5 protractors and sine; fa1-v10 mean, percentage error, random and systematic error; v20 the trace; v21 the law of refraction; v22 sin θc = 1/n with air outside).
Stops after: n = sin θ₁/sin θ₂; the trace recalled; one value and its percentage error; accuracy and reliability; random errors and their fixes; systematic errors and their fixes; the hook answered; a second method as a cross-check. No graph, no gradient, no uncertainty of n, no risk assessment (v24).
Handoff: v24, a graph for n and its uncertainty.

## FA0 Working scientifically placement (proposal for root)

Route root decision: "FA0 (Working scientifically) skills are taught just in time inside or immediately before the investigation videos (fa1-v10, v15, v24, v31 and the FA2/FA3 investigations)". This video prepares v24's investigation (route coverage "preparation-for-investigation"), so it carries the accuracy half of the point and marks each FA0 point as **partial** in the ledger.

| FA0 point (ledger ID, codename) | Exact wording (ledger) | Taught in v23 | Left for later |
| --- | --- | --- | --- |
| P25-FA0-G5-04 `ci15366d75` | "Assess the validity , reliability, accuracy and precision of data and information" | Scenes 5, 8, A2: accuracy and reliability defined, shown with three sets and told apart; a reliable result can be inaccurate | Validity (v24's controls; fa1-v24 glossed it), precision (fa0 skills video) |
| P25-FA0-G5-03 `ci914a5e7e` | "Assess error, uncertainty and limitations in data and include calculations of percentage error , range , mean and standard deviation" | Scenes 4, 7, 8, A1, A2: percentage error calculated; random and systematic errors assessed with their effect on n | Range-based uncertainty, the gradient's uncertainty (v24); standard deviation (fa0-v05) |

Applied, not re-taught: P25-FA0-G2-02 `ci6c11c587` (reliable primary data: repeats, a narrow ray, dots far apart, read square on), P25-FA0-G5-06 `ci7e38e278` (improvements matched to each error, scenes 7 and 8), P25-FA0-G5-07 `ci5a02ec2a` (three figures from angles read to the degree; percentage errors to one or two figures). Recommendation to root: accept the table and record it as v23's partial FA0 coverage; v24 adds the investigation points (variables, risks, representations, uncertainty).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook (what pushed it off?)
> Last time, light got trapped past the critical angle. Now we'll use angles to measure something. Two students trace a ray through the same glass block. One gets a refractive index of one point four nine. The other gets one point six one. The accepted value, from careful standard measurements, is one point five oh. Neither student cheated. So what could push a careful result that far **off**?

Visual: opens on v22's last frame (the half-disc block at θc with the skimming ray, the grey row "sin θc = 1/n", the traced rectangular block with four dots and the protractor, chip "measure n?", the "Next" chip). The "Next" chip becomes the heading: "Measuring refractive index"; the memory line fades; the half-disc slides off to the left edge, small. On "Two students" two grey chips "Student P" and "Student Q" sit above a number line from 1.40 to 1.65 at the right. On "one point four nine" a dot lands under P; on "one point six one" a dot lands under Q; on "one point five oh" a dashed grey mark "accepted 1.50" (gloss "accepted value: from careful, standard measurements"). On "off" chips "one unlucky reading?", "a mistake that shifts every reading?", "the block changed?" and a 3-second countdown ring.

### 2. from angles to n
> First, how do angles give a refractive index? The law of refraction links them. The light starts in air, with an index of one point oh oh. So one point oh oh times sin theta one equals n times sin theta two. Divide both sides by sin theta two, and n equals sin theta one over sin theta two. So we need just two angles, both measured from the **normal**.

Visual: right column `AlignedAlgebra`, one row per sentence: "n₁ sin θ₁ = n₂ sin θ₂ (v21)"; "n₁ = 1.00 (air)"; "1.00 × sin θ₁ = n sin θ₂"; boxed "n = sin θ₁ / sin θ₂ (light from air)". On "normal" the traced block at the left shows the dashed normal at the entry point with navy arcs "θ₁" in the air and "θ₂" in the glass.

### 3. the trace, in one pass
> You met the trace when we investigated refraction. Draw round the block. Aim a narrow ray at one face. Mark two dots far apart on the ray going in, and two on the ray coming out. Take the block away, join the dots, and join the entry point to the exit point to show the path inside. Draw the normal at the entry point, and measure both angles from **it**.

Visual: v20's trace sequence in fast mode, one step per sentence (tag "as in the refraction investigation"): the dashed outline draws round the block plate; the ray box beam meets the face; two dots on the incoming beam, two on the outgoing beam; the block plate fades out; the dot-to-dot lines and the entry-to-exit line draw; the dashed normal at the entry point; on "it" the protractor plate reads "θ₁" and then "θ₂". A small grey tag on the outgoing line: "leaves parallel (v20)".

### 4. worked example: one trace
> Task: find the refractive index from one trace, and its percentage error. The givens: theta one is fifty degrees, theta two is thirty degrees, and the accepted value is one point five oh. n is sin fifty over sin thirty: zero point seven six six over zero point five oh oh, which is one point five **three**. The percentage error is the difference from the accepted value, as a percentage of it. That's zero point oh three over one point five oh, times one hundred: two point oh per **cent**.

Visual: calculation layout. Task strip "Find n from one trace, and its percentage error". Equation strip "n = sin θ₁ / sin θ₂; percentage error = |measured − accepted| ÷ accepted × 100". Givens group (navy): "θ₁ = 50°; θ₂ = 30°; accepted n = 1.50" (grey tag "site worked example values"). The trace at the left shows "50°" and "30°". Rows, one per cue: on "three" "n = sin 50° ÷ sin 30° = 0.766 ÷ 0.500 = 1.53", boxed; on "cent" "|1.53 − 1.50| ÷ 1.50 × 100 = 2.0%", boxed.

### 5. accuracy and reliability
> That percentage error measures accuracy: how close a result is to the accepted value. Reliability is something else. It's how closely repeated results agree with each other. Here are three sets of five trials. The first clusters tightly around one point five oh: accurate and reliable. The second is spread widely, but centred on it: accurate on average, but not reliable. The third clusters tightly at one point six oh: reliable, but not **accurate**.

Visual: board change: three stacked number lines (1.40 to 1.65) with the dashed grey "accepted 1.50" line through all three (tag "illustrative data", author note f). Glosses write on cue: "accuracy: how close to the accepted value"; "reliability: how closely repeats agree". Five dots land on each line in turn with a grey spread bracket and a teal mean tick: line 1 tight on 1.50, label "accurate, reliable"; line 2 spread from 1.42 to 1.57, mean on 1.50, label "accurate on average, not reliable"; on "accurate" line 3 tight on 1.60, label "reliable, not accurate", its gap to the accepted line shaded.

### 6. prediction: more repeats?
> That third student repeats the trace ten more times, just as carefully. Will their mean move closer to one point five **oh**?

Visual: line 3 stays bright; the other two dim. On "ten more times" a grey counter "+10 trials". On "oh" chips "yes, closer?", "no, it stays?" and a 3-second countdown ring.

### 7. random errors
> First, the spread-out set. Random errors push each reading up or down by a different amount. A wide ray makes its centre hard to find. Dots close together let a tiny slip become a big change in angle. A one millimetre slip across two centimetres tilts the line by almost three degrees, but across eight centimetres, by under one degree. And reading a protractor from the side adds parallax. Because random errors go both ways, the mean of many repeats lands closer to the true value. To shrink them, use a narrow ray, dots far apart, and read the protractor square **on**.

Visual: line 2 brightens beside the paper. Gloss "random error: pushes each reading up or down by a different amount". On "wide ray" a wide coded beam on the paper with a faint "centre?" band. On "Dots close together" the dot-slip lens (author note c): two dots 2 cm apart joined by a line; one dot nudges 1 mm and the line swings, readout "2.9°"; on "eight centimetres" the dots spread to 8 cm, the same nudge, "0.7°". On "parallax" the protractor edge over a pencil line with two grey viewpoint dots and their sight lines, one square on reading "30°", one from the side reading "31°" (gloss "parallax: a reading that shifts when you look from the side"). On "mean of many repeats" line 2's dots multiply and its mean tick holds on 1.50 while the bracket stays wide. On "on" a fixes list at the right: "narrow ray", "dots far apart", "read square on".

### 8. systematic errors
> Now the third set. More repeats won't help, because something shifts every reading the same way. That's a systematic error. Say the normal is drawn four degrees off square. Then both angles come out four degrees too small, every time, and for this block, one point five oh becomes about one point six **oh**. A block that slips while you mark the dots does the same kind of thing. Repeats can't fix it. You remove it at the cause: draw the normal with a set square, and check the block still sits in its **outline**. So the one point six one student? One trace can't tell an unlucky slip from a shift. Repeats can.

Visual: line 3 brightens; the "+10 trials" dots land between 1.59 and 1.61 and its mean tick stays on 1.60; the prediction's "no, it stays?" ticks and "yes, closer?" crosses. Gloss "systematic error: shifts every reading the same way". On "four degrees off square" the trace at the left: the dashed normal turns muted red and swings 4°; both navy arcs shrink together, readouts "50° → 46°", "30.7° → 26.7°", and a live readout "n = sin 46° ÷ sin 26.7° = 1.60" (author note b; tag "illustrative"). On "slips" the block plate nudges out of its dashed outline and the traced path shifts with it. On "outline" the set square plate (`phys-y11-set-square-v1.png`) slides along the face; the normal snaps back to grey at 90° and the arcs return to "50°" and "30.7°"; the block plate settles back inside its outline; fixes list "normal with a set square", "block stays in its outline". On "One trace can't tell" the hook's number line returns small: Q's "1.61" dot with two ghost futures, a scattered cluster round 1.50 and a tight cluster near 1.60; the hook chips "one unlucky reading?" and "a mistake that shifts every reading?" both ring; "the block changed?" crosses.

### 9. a second method
> Here's another way to catch a hidden shift: measure n a different way. Take a half-disc block of the same glass, and turn it until the ray outside just skims the flat face. Say that happens at forty-one point five degrees. With air outside, sin theta c is one over n, so n is one over sin forty-one point five: one point five **one**. When two different methods agree, a hidden error in either one is much less likely.

Visual: the half-disc block slides back in at the left (v22's `CriticalSweep` in skim mode; tag "illustrative"): the ray box turns until the outside ray lies along the flat face; navy arc "θc = 41.5°". Rows: "sin θc = 1/n (air outside, v22)"; on "one" "n = 1 ÷ sin 41.5° = 1.51", boxed. Beside it the trace's "1.53" result; a small number line with both results and the accepted 1.50, tag "two methods agree within about 2%".

### 10. memory aid
> So remember: repeats shrink the scatter, not the shift. Repeating and averaging tames random error. Only finding the cause fixes a systematic **one**.

Visual: the three number lines return small. The handwritten line writes large: "Repeats shrink the scatter, not the shift." Under it, smaller: "random: repeat and average; systematic: find the cause." On "scatter" line 2's bracket pulses; on "shift" line 3's gap pulses. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A ray passes from air into a perspex block. The angle of incidence is thirty-five point oh degrees, and the angle of refraction is twenty-two point oh degrees. Calculate the refractive index of the perspex. Its accepted value is one point four nine, so calculate the percentage error. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with an HSC-style line drawing (a block face, the dashed normal, the incident and refracted rays with arcs "35.0°" and "22.0°"): "A ray of light passes from air into a perspex block. The angle of incidence is 35.0° and the angle of refraction is 22.0°. (a) Calculate the refractive index of the perspex. (b) The accepted value is 1.49. Calculate the percentage error of the result. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> n is sin thirty-five over sin twenty-two: zero point five seven four over zero point three seven five, one point five **three**. The percentage error is zero point oh four over one point four nine, times one hundred: about three per **cent**. Dividing the angles themselves gives one point five nine. The law uses the sines, not the **angles**.

Visual: card shrinks to the top; "35.0°", "22.0°" and "1.49" underlined. Rows: on "three" "(a) n = sin 35.0° ÷ sin 22.0° = 0.574 ÷ 0.375 = 1.53", boxed; on "cent" "(b) |1.53 − 1.49| ÷ 1.49 × 100 ≈ 3%", boxed. On "angles" a chip "n = 35.0 ÷ 22.0 = 1.59" fades in and is crossed (caption "sines, not angles"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Two students each measure the refractive index of the same glass block three times. The accepted value is one point five oh. Student P gets one point five eight, one point five nine and one point five eight. Student Q gets one point four four, one point five five and one point five oh. Which set is more reliable, and which is more accurate? Suggest the type of error in P's results, and one way to fix it. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with a small table "Student P: 1.58, 1.59, 1.58; Student Q: 1.44, 1.55, 1.50": "Two students each measured the refractive index of the same glass block three times. The accepted value is 1.50. Their results are shown in the table. (a) State which set of results is more reliable and which is more accurate. Justify your answers. (b) Suggest the type of error in Student P's results and one way to reduce it. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> P's results agree closely, so P's set is more **reliable**. But Q's mean is one point five oh, right on the accepted value, while P's is one point five eight, about five per cent high. So Q's set is more **accurate**. P's tight but shifted results point to a systematic error, like a normal drawn off square, so redraw it with a set square. Agreeing results don't make P **right**.

Visual: card shrinks to the top; "same glass block" and "1.50" underlined. The table's values land on two small number lines with the accepted 1.50 line. On "reliable" "(a) P: range 0.01 → more reliable"; on "accurate" "Q: mean 1.50 (P: 1.58, about 5% high) → more accurate", boxed. Then "(b) systematic (e.g. normal off 90°): draw it with a set square", boxed. On "right" a chip "P is more accurate, because P's results agree" fades in and is crossed. Hold about 1 second.

### 15. handoff
> So one trace gives n from two sines, and its percentage error tells us how accurate it is. But every trace carries a little scatter, and one pair can't show it. What if we used every angle at once, on one graph? How can a graph determine a material's refractive index and its **uncertainty**?

Visual: the memory line returns small at the top. Board change: one sheet of paper with the block's outline and seven traces fanned from the same entry point (θ₁ = 10° to 70°; tag "illustrative data"); on "one graph" empty axes at the right, vertical "sin θ₁", horizontal "sin θ₂"; chip "all at once?". On "uncertainty" the chip "Next: How can a graph determine a material's refractive index and its uncertainty?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Light from air into a material: n = sin θ₁ / sin θ₂ (from n₁ sin θ₁ = n₂ sin θ₂ with n_air = 1.00). Both angles from the normal.
2. Percentage error = |measured − accepted| ÷ accepted × 100. It measures accuracy: how close to the accepted value.
3. Reliability: how closely repeated results agree. A reliable result can still be inaccurate.
4. Random errors (wide ray, dots too close, parallax) scatter readings both ways: use a narrow ray, dots far apart, read square on, repeat and average.
5. Systematic errors (normal off 90°, a slipping block) shift every reading the same way: repeats can't fix them; find the cause (set square; check the outline) or cross-check with a second method (critical angle: n = 1/sin θc).

Memory aid (large, on the notes screen): *Repeats shrink the scatter, not the shift.*

At the end the notes cross-fade back to scene 15's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why two angles give n: the law of refraction with n_air = 1 (2). Why percentage error measures accuracy: it compares with the accepted value (4). Why reliable is not accurate: a shift moves a tight cluster off target (5, 8). Why dots far apart: a fixed slip tilts a long line less (7, with numbers). Why averaging helps random error: the errors go both ways (7). Why averaging cannot help systematic error: every reading moves the same way (8, shown with the tilted normal). Why a second method helps: an independent check is unlikely to share the same hidden error (9).
- **Misconceptions addressed:** reliable means accurate (5, feedback 2 crossed; site misconception 1); repeats fix every error (6, 8, memory aid); one careful pair is enough (1, 8, handoff; site misconception 2); divide the angles (feedback 1 crossed); close dots are fine if careful (7).
- **One idea at a time:** the hook (1), the formula (2), the method (3), one value (4), two qualities (5), random (7), systematic (8), a cross-check (9).
- **Video makes it easier:** the student watches dots land on three number lines (5), watches a short line swing more than a long one for the same slip (7), watches two sight lines read different angles (7), watches a tilted normal shrink both arcs and push n to 1.60 (8), and watches the extra trials refuse to move a shifted mean (8).
- **Response opportunity:** two 3 s predictions (1, 6); two unseen HSC-style tasks, 10 seconds each with the full data on the card, nothing answer-bearing. One crossed mistake each; feedback about 25 s and 29 s.
- **Avoided double teaching:** the trace (v20) in one fast pass; the law of refraction (v21) and sin θc = 1/n (v22) recalled in a line each; mean and percentage error (fa1-v10) recalled with their meaning.
- **Syllabus coverage:** `ci68dbbc22` (preparation): determine the refractive index (2 to 4, 9, A1); assess the accuracy of the measurement (4, 5, 7 to 9, A1, A2). v24 completes it with the investigation. FA0 as the placement table.
- **Out of scope by design:** the graph, its gradient and the uncertainty of n; variables, risks and limitations for the full investigation (v24); precision; standard deviation.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A ray of light passes from air into a perspex block. The angle of incidence is 35.0° and the angle of refraction is 22.0°. (a) Calculate the refractive index of the perspex. (b) The accepted value is 1.49. Calculate the percentage error of the result."
Model answer: (a) n = sin θ₁ ÷ sin θ₂ = sin 35.0° ÷ sin 22.0° = 0.574 ÷ 0.375 = 1.53. (b) Percentage error = |1.53 − 1.49| ÷ 1.49 × 100 ≈ 3% (2.7%). Classic mistake (crossed): "n = 35.0 ÷ 22.0 = 1.59" (the law uses the sines).

**Attempt 2 (scene 13; original wording, HSC style, 4 marks suggested).** "Two students each measured the refractive index of the same glass block three times. The accepted value is 1.50. Student P: 1.58, 1.59, 1.58. Student Q: 1.44, 1.55, 1.50. (a) State which set of results is more reliable and which is more accurate. Justify your answers. (b) Suggest the type of error in Student P's results and one way to reduce it."
Model answer: (a) P's results are more reliable: they agree closely (range 0.01, against Q's 0.11). Q's results are more accurate: Q's mean is 1.50, equal to the accepted value, while P's mean is 1.58, about 5% too high. (b) P's results are consistent but all shifted the same way, which points to a systematic error, for example a normal drawn slightly off 90° (or a block that moved while the dots were marked). Reduce it by constructing the normal with a set square (or protractor) at exactly 90° and checking the block stays inside its traced outline; repeating trials alone would not remove it. Classic mistake (crossed): "P is more accurate, because P's results agree".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook (site hook) | 1.49, 1.61; accepted 1.50 | 1, 8 |
| Worked example (site `we-1`) | 50°, 30°; 0.766 ÷ 0.500 = 1.53; 2.0% | 4 |
| Number lines (illustrative) | sets centred 1.50 (tight), 1.50 (1.42 to 1.57), 1.60 (tight) | 5, 6, 8, 10 |
| Dot slip | 1 mm over 2 cm: 2.9°; over 8 cm: 0.7° | 7 |
| Parallax | 30° square on, 31° from the side (illustrative) | 7 |
| Tilted normal | 4°: 50° → 46°, 30.7° → 26.7°; n 1.60 | 8 |
| Cross-check (illustrative) | θc = 41.5°; n = 1.51 | 9 |
| A1 | 0.574 ÷ 0.375 = 1.53; about 3%; wrong 1.59 | 11, 12 |
| A2 | P mean 1.58 (range 0.01), about 5% high; Q mean 1.50 (range 0.11) | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- sin 50° ÷ sin 30° = 1.5321; (1.53 − 1.50) ÷ 1.50 = 2.0%; (1.5321 − 1.50) ÷ 1.50 = 2.1%.
- (1.61 − 1.50) ÷ 1.50 = 7.3%; (1.50 − 1.49) ÷ 1.50 = 0.67% (not shown).
- Tilted normal: sin⁻¹(sin 50° ÷ 1.50) = 30.71°; sin 46° ÷ sin 26.71° = 1.600; δ for 1.61: −4.33°; sin 52° ÷ sin 32.71° = 1.458.
- atan(1/20) = 2.86°; atan(1/80) = 0.72°.
- sin 50° ÷ sin 29° = 1.580; sin 50° ÷ sin 31° = 1.487.
- 1 ÷ sin 41.5° = 1.5092.
- A1: sin 35° = 0.57358; sin 22° = 0.37461; ratio 1.5311; (1.53 − 1.49) ÷ 1.49 = 2.68%; (1.5311 − 1.49) ÷ 1.49 = 2.76%; 35 ÷ 22 = 1.591.
- A2: P mean 1.5833, range 0.01; Q mean 1.4967, range 0.11; (1.58 − 1.50) ÷ 1.50 = 5.3%; (1.5833 − 1.50) ÷ 1.50 = 5.6%.
- Site checks (logged or not used): sin 40° ÷ sin 25° = 1.521; activity 1.536, 1.506, 1.510, mean 1.517; Q3 0.12 ÷ 1.50 = 8.0%.

## Memory aid check

- **"Repeats shrink the scatter, not the shift."** Written for this lesson. Meaning, as said in scene 10: repeating and averaging reduces the effect of random error (the scatter) on the mean, but it cannot reduce a systematic error (the shift), which needs its cause found. Assumptions checked: "shrink the scatter" means the mean of repeats is less affected by scatter, not that each new reading is less scattered (said in scene 7 as "the mean of many repeats lands closer"; the bracket stays wide on screen), which avoids the site's reliability wording (site correction 2); "the shift" is any error that moves every reading the same way (defined in 8); it helps a new case: any later investigation (v24's graph, FA3 practicals) where a consistent offset must be traced to a cause. Introduced after both kinds of error have been seen (7, 8).
- **Considered, not used:** "Accuracy is aim, reliability is grouping" (a target picture; the number lines do this job without clip-art).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,711 characters**, 16 scenes. Characters per scene (1 to 16): 390, 349, 351, 483, 448, 121, 568, 606, 414, 146, 317, 332, 439, 369, 288, 75. At 13.3 characters per second the speech is about 429 s; add about 16 s of holds and settling (the trace pass in 3, the number lines in 5, the dot-slip lens and sight lines in 7, the tilted normal and the extra trials in 8, the skim in 9, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 98 s of holds): **about 527 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. One practical point (its preparation half) and two FA0 points in part fill it without padding; the graph and uncertainty are v24's. Scene 8 is the longest (the systematic error and the hook's answer); if the learning review finds it dense, move the hook's answer (last three sentences, about 110 characters) to the start of scene 9.

## Scene list and build ids

Lesson key `p-y11-fa2-v23` (root decision 2). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v23` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v23` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, angles-to-n, trace-recalled, worked-one-trace, accuracy-reliability, repeats-prediction, random-errors, systematic-errors, second-method, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and repeats-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v22's last frame continues into scene 1 (camera continue: the same paper); 1 to 2 camera continue; 2 to 3 camera push to the paper; 3 to 4 clear change to the calculation layout; 4 to 5 board change to the number lines; 5 to 6 camera continue; 6 to 7 split board (paper left, line 2 right); 7 to 8 camera continue (line 3, the same paper); 8 to 9 camera continue (the half-disc slides in); 9 to 10 camera continue; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook and repeats-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v23-learning-review.md`, `science_check` = `checks/p-y11-fa2-v23-physics-check.md`.

## Assets

`public/assets/physics/` holds FA1 plates and `phys-y11-protractor-v1.png` (checked 3 Nov). Requested earlier, reused by name (uniform scaling only, never stretched):
- v18's `phys-y11-ray-box-v1.png` (scenes 1 to 4, 7 to 9, 15).
- v18's `phys-y11-glass-block-v1.png` (scenes 1 to 4, 7, 8, 15).
- v22's `phys-y11-semicircular-block-v1.png` (scenes 1, 9).
- `phys-y11-protractor-v1.png` (exists; scenes 1, 3, 7, 8).
- **Considered, not used:** a pencil plate (it implies a hand; the dots draw themselves, as v20); a perspex block plate (A1's card is a line drawing); a dartboard (clip-art; the number lines carry accuracy and reliability).

Need (new plate, Codex):
1. `phys-y11-set-square-v1.png`: scene 8 (and v24's improvement scene). Useful (it shows the fix for the systematic error); if not painted, the protractor's 90° mark does the job with no narration change beyond "with a set square" becoming "with a protractor" (open decision 3).

Coded: beams, rays and arrowheads, normals (grey and the muted red tilted one), arcs and readouts, the traced outline, dots and lines, the dot-slip lens, the sight lines and viewpoint dots, the number lines, brackets and mean ticks, the student chips, the table on the A2 card, `AlignedAlgebra`, `Countdown`, `QuestionCard` with a line drawing or a table, `Chip` with `cross`, `KeyNotes`, `Heading`.

Kit gaps (for the build brief): v20's **trace sequence** with a fast mode; **trials number line** (stacked lines, dots landing per trial, spread bracket, mean tick, accepted line); **dot-slip lens**; **parallax sight lines**; **tilted normal** (a normal that rotates by a set angle, with both arcs and a live n readout computed from the same geometry); v22's **`CriticalSweep`** skim mode.

## Codex asset brief (Year 11 Physics FA2 v23, measuring refractive index)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa2-v23.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to v18's ray box and glass block and the existing protractor plate, at least 8 per cent clear margin, no text, labels, numbers, scale markings, logos, brand names, people, hands, faces, backdrop, paper, ground or shadow. Keep the native aspect; never stretch. The plate gets a JSON sidecar with the named pixel coordinates.

1. **`phys-y11-set-square-v1.png`**: a clear plastic 45° school set square, seen from directly above lying flat on paper, faintly tinted, with its right-angled corner at the lower left and no printed scale or markings. Sidecar: the right-angle corner; the two end points of each short edge (the code aligns one short edge with the block face so the other gives the normal).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the tilted-normal animation turns both measured angles by the same 4° in the same rotational sense and that the live n readout comes from the drawn angles (author note b).
3. Confirm the physics and analysis claims: n = sin θ₁/sin θ₂ for light from air (n_air = 1.00); percentage error as defined; accuracy and reliability as defined; random errors scatter both ways and averaging reduces their effect on the mean; systematic errors shift every reading the same way and are not reduced by repeats; a tilted normal changes both angles the same way (site correction 1); the critical-angle cross-check n = 1/sin θc with air outside.
4. Confirm every illustrative item carries the "illustrative data" tag and the site values carry their source tag.
5. Confirm no person, hand, eye, face or body outline appears in any scene, card or plate (owner instruction); the parallax viewpoints are grey dots.
6. Confirm the memory aid's meaning is spoken (scenes 7, 8, 10).
7. Confirm both attempt questions are original in wording, carry all their data on the card, and show nothing answer-bearing.
8. Confirm the syllabus and FA0 quotes match the syllabus JSON and the ledger exactly and no 2017-syllabus label appears.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
10. Confirm the narration character count by script with the build parser rules.
11. Add site corrections 1 to 4 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Measuring Refractive Index: Accuracy, Reliability and Errors | Year 11 Physics

(Title length: 80 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson18.sa.html

Two students trace a ray through the same glass block and get 1.49 and 1.61. Neither cheated, so what went wrong? Learn how the law of refraction turns two measured angles into a refractive index, n = sin θ₁ / sin θ₂, and how to calculate the percentage error. See the difference between accuracy and reliability, how random errors (a wide ray, dots too close, parallax) scatter results, and how systematic errors (a normal drawn off square) shift every reading so that repeats can't fix them. Then check the answer a second way with the critical angle. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025):
"Conduct a laboratory experiment to determine the refractive index of a material and assess the accuracy of the measurement" (ci68dbbc22)
Working scientifically (in part): "Assess the validity, reliability, accuracy and precision of data and information" (ci15366d75); "Assess error, uncertainty and limitations in data and include calculations of percentage error, range, mean and standard deviation" (ci914a5e7e)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: Total internal reflection and the critical angle (previous video). Next: Refractive index investigation.

#Year11Physics #Physics #Waves #RefractiveIndex #HSCScience

## Open decisions

- **1. Learner question (root).** The route placeholder is rewritten as "How can tracing a ray through a glass block measure its refractive index, and how accurate is the result?" (v22's handoff chip uses it). Root to enter it in the route.
- **2. Split with v24 (root).** This video takes the single-pair calculation, accuracy against reliability and the error sources; v24 takes the graph, gradient, uncertainty, variables, risks and limitations. Root to confirm the split (both share site lesson 18 and `ci68dbbc22`).
- **3. Set square plate (root).** One small new plate for the fix in scene 8; root to confirm, or use the protractor's 90° mark (the narration's "with a set square" becomes "with a protractor").
- **4. Cross-check scene (root).** Scene 9 uses v22's critical angle as a second method. It is not in the site lesson; it is the first cut if the voiced preview runs long (the key note keeps one clause).
- **5. Site link form.** As v10.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from fa1-v10, v20, v21 and v22 at Year 11 entry; check that the hook's question is still open in the student's mind at scene 8; that the three number lines make accuracy and reliability visibly different; that the dot-slip numbers make "far apart" feel caused; that the tilted normal is readable at speaking pace; that the memory aid's "shrink" is not heard as "each reading gets better"; that the cards give nothing away), then the Codex physics check and error check.
- The number lines (5, 6, 8), the swinging short line (7), the sight lines (7) and the tilted normal with its live n (8) carry the explanation; judge them at playback speed in the voiced preview. All readouts must come from the same geometry as the drawn rays.
