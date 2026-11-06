# Year 11 Chemistry M4 V14: Temperature and spontaneity. When can changing temperature reverse reaction spontaneity? (design)

Status: Revision 2 (6 Nov 2026): brief 184 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,558 characters, 14 scenes, about 513 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fourteenth and last Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 83, after `chem-y11-m4-v13` (Gibbs free energy and spontaneity); the last video of the whole Year 11 Chemistry course. A calculation and analysis video, ending with a short Module 4 recap and a course-end frame. Templates: `chem-y11-m4-v13.md` (same designer, colour key, calculation board), `math-a12-d10.md` (calculation staging), `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates); line-graph style from the coded `lineGraph` data-graph conventions (never a painted graph). No starter pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v14` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Analyse sign combinations and solve a threshold with kelvin and consistent units; check either side without claiming a rate."; next: none; next handoff: "Complete and communicate an approved depth study with your teacher."). Site lesson read in full (6 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson13.sa.html` (SHA256 `898ff79cedc1b9ac4309c53ee9cf48c201f1da8c6b5ec98291d3e9c767b76e0a`, recomputed, matches the route), sections `l13-defining-gibbs-free-energy-title`, `l13-the-haber-process-paradox-resolved-title`, `l13-solving-g-problems-step-by-step-title`. Used: the four ΔH/ΔS sign combinations and their temperature behaviour; the ΔG against T graph ("it starts at ΔH when T = 0 and has slope −ΔS"); the crossover temperature T = ΔH° ÷ ΔS° with ΔS° in kJ K⁻¹ mol⁻¹, and its caution ("an estimate ... assuming ΔH° and ΔS° stay roughly constant ... no phase change"); "Then determine which side of Tcross the given temperature falls on"; the limestone kiln drill (rebuilt with cited data); the water-freezing drill ("0 °C is the crossover temperature ... for the liquid–solid transition"); the Haber crossover (about 465 K with the site's data), used as attempt 1; the common error "exothermic reactions are always spontaneous". Not used: the industrial operating-temperature paradox (needs Year 12 equilibrium; v13 site note 3), ΔG = ΔG° + RT ln Q, K, the 3O₂ → 2O₃ example (replaced by a reaction students have already met). Site corrections file checked: no logged item touches Module 4.

Owner rules applied: as `chem-y11-m4-v13.md` (one learner question; no people, hands or faces; real objects as painted plates; ΔG against T graphs, calculation rows and the course-end frame coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Drivers of Reactions; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ3-05`: "solve problems using standard references and ΔG° = ΔH° - TΔS° (Gibbs free energy formula) to classify reactions as spontaneous or nonspontaneous"
- `C4-IQ3-06`: "predict the effect of temperature changes on spontaneity (ACSCH070)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 44)

**Boundary:** opens on m4-v13's final frame (same designer). Teaches: ΔG against T as a straight line (starts at ΔH, falls by ΔS per kelvin when ΔS is positive), with its assumption (ΔH and ΔS roughly constant); the threshold temperature where ΔG = 0, T = ΔH ÷ ΔS, with ΔS in kJ K⁻¹ mol⁻¹ and T in kelvin (limestone 1110 K, about 837 °C); checking either side (298 K and 1173 K) and saying what the threshold does not tell (rate); ice and water as an everyday threshold (273 K), with the reverse reaction flipping both signs; the four sign combinations; a short Module 4 recap and a course-end frame. Not taught: why industry runs reactions above or below thresholds, equilibrium and K (Year 12), any Year 12 preview.

## Decisions

- **Learner question (route wording kept).** "When can changing temperature reverse reaction spontaneity?" The answer, in order: temperature multiplies ΔS, so ΔG changes in a straight line with T (2); when ΔH and ΔS have the same sign, the line crosses zero at T = ΔH ÷ ΔS, and spontaneity reverses there (3 to 5); when they have opposite signs, it never crosses (6).
- **Opening frame (equals `chem-y11-m4-v13.md`'s final frame, same designer).** Left: `y11c-limestone-lumps-v1.png`, the card "CaCO₃(s) → CaO(s) + CO₂(g)", chips "ΔH° = +178.3 kJ mol⁻¹" and "ΔS° = +160.6 J K⁻¹ mol⁻¹". Right: the ΔG axis with the red point "298 K: +130.4" and a dashed purple arrow "−TΔS grows as T rises". The amber chip "Hot enough, could ΔG turn negative?"; the "Next" chip, which fades.
- **Prediction (3 s, scene 1).** "A lime kiln at 900 °C, which is 1173 K: is ΔG° positive or negative?" Answer: negative (−10.1 kJ mol⁻¹; scene 4). The student can reason from the dashed arrow before any formula.
- **The ΔG against T graph (scene 2; site graph).** Coded line graph: x "T (K)" 0 to 1300, y "ΔG° (kJ mol⁻¹)" −40 to +200, zero line. Points plotted on cue: 298 K +130.4, 600 K +81.9, 900 K +33.8. The line is extended to T = 0 at +178.3 (ΔH°) as a dashed grey segment with the tag "starts at ΔH", and falls by 0.1606 kJ per kelvin. Assumption, spoken once: ΔH and ΔS stay roughly the same as the temperature changes, so the threshold is an estimate (site caution).
- **Threshold (scene 3; route stop).** Set ΔG = 0: ΔH = TΔS, so T = ΔH ÷ ΔS. Limestone: 178.3 ÷ 0.1606 = 1110 K (1110.2), about 837 °C. Crossed: "178.3 ÷ 160.6 = 1.11 K" (ΔS not converted). The word "threshold" is used in narration, with "crossover temperature" given as the other name students will see (site).
- **Either side (scene 4; route stop "check either side without claiming a rate").** 1173 K (900 °C): ΔG° = 178.3 − 1173 × 0.1606 = −10.1 kJ mol⁻¹, spontaneous; 298 K: +130.4, non-spontaneous. The limestone plate cross-fades to the quicklime plate (aligned pair). Spoken: the threshold says which direction is favoured, not how fast it goes. Author note: kilns sweep CO₂ away; standard conditions assume CO₂ at 100 kPa.
- **Ice and water (scene 5).** Melting H₂O(s) → H₂O(l): ΔH = +6.01 kJ mol⁻¹, ΔS = +22.0 J K⁻¹ mol⁻¹; T = 6.01 ÷ 0.0220 = 273 K = 0 °C. Above 0 °C melting is spontaneous; below, freezing (the reverse: ΔH −6.01, ΔS −22.0, both signs flip) is spontaneous; at 0 °C neither is favoured, so ice and water sit together. This is the clearest everyday case of temperature reversing spontaneity (site drill).
- **Four combinations (scene 6; route stop "analyse sign combinations").** A 2 × 2 grid of small coded ΔG against T lines, each with a course example: ΔH −, ΔS + (always spontaneous: hydrogen peroxide decomposing, v13); ΔH +, ΔS − (never: making hydrogen peroxide from water and oxygen, the reverse, so both signs flip); ΔH +, ΔS + (spontaneous above the threshold: limestone, melting); ΔH −, ΔS − (spontaneous below the threshold: freezing; ammonia, attempt 1). Rule: the line crosses zero only when ΔH and ΔS have the same sign.
- **Memory aid:** "Same signs: temperature decides. Opposite signs: it never switches." (see "Memory aid check"), scene 7.
- **Attempts (original wording, HSC style).** A1: ammonia (ΔH° = −91.8 kJ mol⁻¹, ΔS° = −198.1 J K⁻¹ mol⁻¹, v12 and v13 values): identify the combination; calculate the temperature above which the reaction is non-spontaneous under standard conditions: 463 K (463.4; about 190 °C). Crossed: "91.8 ÷ 198.1 = 0.463 K". A2: water freezing (ΔH = −6.01 kJ mol⁻¹, ΔS = −22.0 J K⁻¹ mol⁻¹): show by calculation that freezing is spontaneous at −5 °C but not at +5 °C: ΔG(268 K) = −0.11 kJ mol⁻¹; ΔG(278 K) = +0.11 kJ mol⁻¹. Crossed: "freezing is exothermic, so it is spontaneous at any temperature".
- **Mistake scene:** none separate. ΔS not converted in the threshold (3; crossed in A1); a spontaneous reaction above the threshold must be fast (4); exothermic means always spontaneous (6; crossed in A2); a positive ΔG means "impossible at any temperature" (2, 6).
- **Module 4 recap and course end (scenes 12, 13).** Module 4 in three lines on one board (the route's driver question): enthalpy (energy in or out, v01 to v10), entropy (counting the ways, v11, v12), Gibbs free energy (both, scaled by temperature, v13, v14). Then the course-end frame (Final frame). No Year 12 content; the route's handoff (the depth study) is a small chip.
- **Data source.** Ammonia from OpenStax Chemistry 2e Appendix G (as v12, v13). Limestone from the NBS tables (Wagman et al. 1982), as v13. Water: ΔH(fus) = 6.01 kJ mol⁻¹ (OpenStax Chemistry 2e, section 10.4, and CRC) and ΔS(fus) = 22.0 J K⁻¹ mol⁻¹ (CRC: 6010 ÷ 273.15 = 22.0).
- **Site notes (read 6 November; for root to log if accepted):**
  1. Lesson 13 (logged in v13): "ΔG = 0: equilibrium, at T = ΔH ÷ ΔS". At the threshold, ΔG° = 0 (neither direction favoured under standard conditions); equilibrium itself is ΔG = 0 at any temperature. This video says "neither direction is favoured" at the threshold.
  2. Lesson 13 four-combinations table, row "−ΔH, +ΔS: More spontaneous at higher T" and the text description example "ΔH < 0, ΔS > 0: always spontaneous ... Example: C(s) + O₂ → CO₂". Correct, but ΔS° for carbon burning is only +2.9 J K⁻¹ mol⁻¹ (v12), so the example barely shows the entropy help. Suggest hydrogen peroxide decomposing (ΔS° = +126 J K⁻¹ mol⁻¹), as this video does.
  3. Lesson 13 limestone drill (d): "This is exactly why lime kilns operate above 900°C." The threshold makes decomposition favoured above about 835 to 840 °C under standard conditions; kilns also run hotter for rate and because CO₂ is swept away. Suggest "Kilns run above this temperature; at 900 °C ΔG° is negative" without "exactly why".
  - Checked and correct: the crossover values in worked examples 1 and 2 (464.6 K; 720 K), drills (1108 K; 1053 K; 326 K; 273 K), Q6 (1108 K, −10.5 kJ mol⁻¹), Q7 (3002 K) with the site's data.
- **Cause chain taught, in order:** (1) temperature multiplies ΔS, so each extra kelvin changes ΔG by the same amount, giving a straight line (2); (2) if ΔS is positive, the line falls as T rises, so a non-spontaneous reaction can become spontaneous (2); (3) at the threshold the two terms balance, ΔH = TΔS, so T = ΔH ÷ ΔS (3); (4) ΔS must be in kJ to match ΔH, and T comes out in kelvin (3); (5) on either side of the threshold ΔG has opposite signs, so spontaneity reverses there (4, 5); (6) reversing a reaction flips both ΔH and ΔS, so the reverse is spontaneous on the other side (5); (7) when ΔH and ΔS have opposite signs, the two terms never pull against each other, so the line never crosses zero (6).
- **Entry knowledge:** m4-v13 (ΔG = ΔH − TΔS, signs, units, spontaneous is not fast; limestone at 25 °C); m4-v12 (ammonia ΔS°); m4-v11 (ice melting, entropy); m4-v07 (reversing a reaction flips the sign of ΔH; here ΔS too).
- **Learner-visible vocabulary (plain meaning at first use):** threshold temperature (3, "the temperature where ΔG is zero and the reaction switches between spontaneous and non-spontaneous", also called the crossover temperature).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **ΔG against T graph** (scenes 1 to 4, coded line graph in the data-graph style; points drop on cue; the line extends; the zero crossing is ringed; shaded regions "non-spontaneous" (red tint, above zero) and "spontaneous" (green tint, below)); **calculation board** (scenes 3, 4, A1, A2); **ice and water graph** (scene 5: a small second graph for melting and freezing crossing at 273 K, mirrored lines); **combination grid** (scene 6: four small graphs, each with ΔH and ΔS sign chips, an example card, and a verdict chip); **Module 4 ladder** (scene 12: three steps "enthalpy", "entropy", "Gibbs + temperature", each with a thumbnail from its videos); **course-end frame** (scene 13); `y11c-limestone-lumps-v1.png` (from v13) and new `y11c-quicklime-lumps-v1.png` (aligned pair), `c9-ice-cube-v1.png`; `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v13):** ΔG green when negative, red when positive; enthalpy orange or blue; entropy purple; temperature slate; thresholds amber rings; crossed items red strike; earlier rows dimmed.
- **Board layout (Revision 2, high-risk redesign):** heading top left. Revision 1 kept one limestone board (plate, card and graph) for scenes 1 to 4 (about 161 s). Revision 2 stages, each under about 45 s: m4-v13's final frame with the painted limestone (1); the graph at full width with the temperature slider (2); full-width working with the graph as a thumbnail (3); the painted limestone large, cross-fading to quicklime, beside the graph's shaded regions and the slider at 1173 K (4); the painted ice with the melting and freezing graph (5); the combination grid (6); the framed memory card (7); question cards (8 to 11); the Module 4 ladder with painted thumbnails (12); the course-end frame (13).
- **Colour roles (Revision 2, fixed for the whole video):** ΔG green when negative, red when positive; enthalpy orange or blue; entropy purple; temperature slate (the slider and its marker slate); thresholds amber rings; framed answers in a dark-ink box with a tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark; assumption and source tags grey; earlier rows dimmed.
- **Type sizes (Revision 2, 1080p):** the current calculation row at least 44 px (48 px); framed results and the slider readouts (T and ΔG°) about 52 px; axis titles, givens and grid labels 34 to 36 px; earlier rows 30 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px (assumption tags 26 px). All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the temperature slider (scenes 2 and 4).** A live control on the core idea (temperature changes ΔG along a straight line, and the sign flips at the threshold): a slate marker rides the limestone line as a slider sets T, with two readouts (52 px) "T" and "ΔG°" recomputed from 178.3 − T × 0.1606: 298 K, +130.4; 600 K, +81.9; 900 K, +33.8 (scene 2); then 1110 K, 0.0 (the amber ring) and 1173 K, −10.1 kJ mol⁻¹, where the marker's region turns green (scene 4). The readout colour follows the sign (red above zero, green below).

Author notes (not learner copy):
(a) Graph points (ΔH° = 178.3 kJ mol⁻¹, ΔS° = 0.1606 kJ K⁻¹ mol⁻¹): 298 K +130.44; 600 K +81.94; 900 K +33.76; 1110 K +0.03; 1173 K −10.08; 1273 K −26.14. The straight line assumes ΔH° and ΔS° independent of T (each changes only slightly over this range; the real CaCO₃ threshold at 100 kPa of CO₂ is close to 1170 K, about 900 °C, from measured decomposition pressures). This is why the site and this video call the threshold an estimate; the science check may prefer "about 840 to 900 °C" wording (open decision 2).
(b) Kilns: CO₂ is carried away by the flue gases, so its pressure over the limestone is below 100 kPa, which lowers the actual decomposition temperature; not said (Year 12 equilibrium idea).
(c) Water: ΔS(fus) = 6010 J mol⁻¹ ÷ 273.15 K = 22.0 J K⁻¹ mol⁻¹ (CRC lists 22.0); T = 6.01 ÷ 0.0220 = 273.2 K → "273 K, 0 °C". A2: 268 K: −6.01 + 268 × 0.0220 = −0.114; 278 K: −6.01 + 278 × 0.0220 = +0.106. Both shown to two significant figures (−0.11, +0.11), the precision the data allow for a difference this small.
(d) Ammonia: 91.8 ÷ 0.1981 = 463.4 K = 190.4 °C ("about 190 °C"). Site: 464.6 K (with −92.4) and "≈ 465 K".
(e) Peroxide reverse: ΔH = +196.1, ΔS = −126.0; ΔG(298) = +233.6 kJ mol⁻¹; positive at every temperature.
(f) Course list (2017 syllabus, Year 11 Chemistry): Module 1 Properties and Structure of Matter; Module 2 Introduction to Quantitative Chemistry; Module 3 Reactive Chemistry; Module 4 Drivers of Reactions. Depth study: the route's next handoff; the 2017 syllabus requires at least one depth study in Year 11 (said only as "with your teacher").
(g) Pronunciations: "delta H divided by delta S"; "one thousand one hundred and ten kelvin"; "eight hundred and thirty-seven degrees".

Main question: *When can changing temperature reverse reaction spontaneity?*
Entry knowledge: m4-v13, m4-v12, m4-v11, m4-v07.
Stops after: the ΔG against T line, the threshold calculation with units, checks either side, ice and water, the four sign combinations, a Module 4 recap and the course-end frame. No equilibrium, K, or industrial trade-offs.
Handoff: none in the course; route handoff "Complete and communicate an approved depth study with your teacher" (chip on the final frame).

## Opening frame and final frame

- **Opening frame:** m4-v13's final frame exactly (Decisions).
- **Final frame (course end; nothing opens on it):** a calm, uncluttered frame on the explainer paper background. Heading in the handwriting style, centred in the upper third: "Year 11 Chemistry: complete". Beneath it, four module tiles in a row, each a simple coded card with its module number and title and a green tick: "Module 1: Properties and Structure of Matter", "Module 2: Introduction to Quantitative Chemistry", "Module 3: Reactive Chemistry", "Module 4: Drivers of Reactions" (the Module 4 tile carries a tiny coded ΔG line, the last graph of the course). Below, the memory line of this video small and grey. One slate chip at the bottom of the safe area (above the bottom 12%): "Next: plan and complete your depth study with your teacher". No Year 12 titles, no previews, no plates. Held about 4 seconds, then the key notes; the notes cross-fade back to this frame at the end.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> At twenty-five degrees, limestone doesn't break down by itself. Delta G is plus one hundred and thirty point four. But its delta S is positive, so as the temperature rises, minus T delta S gets bigger and more negative. Here's the question for this last video of the course. A lime kiln runs at about nine hundred degrees, which is eleven hundred and seventy-three kelvin. There, is delta G positive, or **negative**?

Visual: opens on m4-v13's final frame; the "Next" chip fades. Heading writes: "When temperature flips the answer". On "plus one hundred and thirty point four" the red point pulses. On "minus T delta S gets bigger" the dashed purple arrow lengthens. On "nine hundred degrees" a slate marker drops on the T axis at "1173 K (900 °C)". Chips "positive" and "negative". On "negative" the 3 s `Countdown` ring runs. Hand tags: blue "costs heat" on the ΔH° chip, purple "gains ways" on the ΔS° chip; slate hand tag "hotter?" with a `PenArrow` along the dashed arrow toward the 1173 K marker.

### 2. delta G is a straight line
> Negative, and here's how to see it. Delta G equals delta H minus T delta S, so each extra kelvin changes delta G by the same amount, delta S. That makes a straight line. For limestone it would start at delta H, plus one hundred and seventy-eight point three, at zero kelvin, and fall by zero point one six zero six kilojoules for every kelvin. At six hundred kelvin, delta G is plus eighty-one point nine. At nine hundred, it's plus thirty-three point eight. The line is heading for zero. This assumes delta H and delta S stay roughly the same as the temperature changes, so it's an **estimate**.

Visual: stage change: the graph enlarges to fill the frame (the painted limestone a thumbnail at the top left): x "T (K)" 0 to 1300, y "ΔG° (kJ mol⁻¹)" −40 to +200, zero line. On "each extra kelvin changes delta G by the same amount" a small step triangle "+1 K → −0.1606 kJ" on the line. On "start at delta H" a dashed grey segment back to the y axis at "+178.3" (tag "starts at ΔH"). On "At six hundred kelvin" the temperature slider (Decisions) carries the marker along the line, readouts "T = 600 K", "ΔG° = +81.9", leaving a red point "600 K: +81.9"; on "At nine hundred" "T = 900 K", "ΔG° = +33.8", point "900 K: +33.8". On "heading for zero" the line extends toward the zero line. On "estimate" a grey tag "assumes ΔH and ΔS stay about the same". Hand tags: purple "−0.1606 per K" with a pen ring on the step triangle; grey "straight line" along the extended line.

### 3. finding the threshold
> Where does it cross zero? At that temperature, delta G is zero, so delta H equals T delta S, and T equals delta H divided by delta S. This is called the threshold temperature, or the crossover temperature. Keep the units consistent. Delta S must be in kilojoules, so T is one hundred and seventy-eight point three divided by zero point one six zero six. That's one thousand one hundred and ten kelvin, about eight hundred and thirty-seven degrees. Divide by one hundred and sixty point six instead, and you'd get one point one one kelvin, which is **absurd**.

Visual: stage change: the working takes the full width (current row 48 px), the graph a thumbnail at the top right. Task strip: "Find the temperature where ΔG° = 0". Rows: on "delta G is zero" "0 = ΔH° − TΔS°"; on "delta H equals T delta S" "ΔH° = TΔS°"; on "T equals delta H divided by delta S" "T = ΔH° ÷ ΔS°" (amber). On "the threshold temperature" gloss "threshold (crossover) temperature: where ΔG° = 0 and spontaneity switches". On "Delta S must be in kilojoules" "ΔS° = 160.6 ÷ 1000 = 0.1606 kJ K⁻¹ mol⁻¹". On "one hundred and seventy-eight point three divided by zero point one six zero six" "T = 178.3 ÷ 0.1606"; on "one thousand one hundred and ten kelvin" "= 1110 K" (amber, framed in a dark-ink box with a tick, 52 px; grey tag "estimate from 25 °C data (measured about 1170 K)") and the thumbnail graph's zero crossing is ringed amber at 1110 K; on "eight hundred and thirty-seven degrees" "1110 − 273 = 837 °C". On "Divide by one hundred and sixty point six" a chip "178.3 ÷ 160.6 = 1.11 K" fades in; on "absurd" it is crossed, stamp "ΔS not converted". Hand tags: amber "terms balance here" with a pen ring on "ΔH° = TΔS°"; purple "÷ 1000 first" on the conversion row; the crossed chip carries a red hand tag "kJ, not J".

### 4. checking either side
> Now check each side. At eleven hundred and seventy-three kelvin, delta G is one hundred and seventy-eight point three minus eleven seventy-three times zero point one six zero six, which is minus ten point one kilojoules. Negative, so in the kiln, limestone breaking down into lime and carbon dioxide is spontaneous. At twenty-five degrees it's plus one hundred and thirty point four, non-spontaneous. Above the threshold, the entropy term wins, and below it, the heat term wins. But the threshold only tells us which direction is favoured. It says nothing about how fast the change **goes**.

Visual: stage change: the painted limestone large at the left, the graph at the right. On "At eleven hundred and seventy-three kelvin" the slider carries the marker through the amber ring ("T = 1110 K", "ΔG° = 0.0") to "T = 1173 K", and a row writes "ΔG° (1173 K) = 178.3 − 1173 × 0.1606"; on "minus ten point one kilojoules" "= −10.1 kJ mol⁻¹" (green) and a green point on the graph at 1173 K below the zero line; the prediction chip "negative" ticks. On "limestone breaking down" the limestone plate cross-fades to `y11c-quicklime-lumps-v1.png` (aligned pair, translation only), with coded CO₂ wisps leaving; label "CaO (quicklime)". On "plus one hundred and thirty point four" the 298 K point pulses red. On "Above the threshold" the region right of 1110 K shades green "spontaneous"; on "below it" the left region red "non-spontaneous". On "goes" a grey chip "threshold: direction, not rate". Hand tags: green "entropy wins" on the right region, red "heat wins" on the left; the −10.1 row frames in a dark-ink box with a green tick (52 px); grey "lime + CO₂" on the quicklime plate.

### 5. ice and water
> You see a threshold every winter. When ice melts, delta H is plus six point zero one kilojoules, and delta S is plus twenty-two point zero joules per kelvin. So the threshold is six point zero one divided by zero point zero two two zero, two hundred and seventy-three kelvin. That's zero degrees. Above it, melting is spontaneous. Freezing is the reverse, so both signs flip, and freezing is spontaneous below zero degrees. Right at zero, neither is favoured, so ice and water sit together. Changing the temperature reverses the **direction**.

Visual: board clears to `c9-ice-cube-v1.png` at the left with the card "H₂O(s) → H₂O(l)" and chips "ΔH = +6.01 kJ mol⁻¹" (blue), "ΔS = +22.0 J K⁻¹ mol⁻¹" (purple). On "six point zero one divided by zero point zero two two zero" a row "T = 6.01 ÷ 0.0220 = 273 K"; on "zero degrees" "= 0 °C" (amber). A small graph at the right: on "Above it, melting is spontaneous" the melting line (falling) crosses zero at 273 K, the right side tinted green "melting spontaneous"; on "Freezing is the reverse" the card flips to "H₂O(l) → H₂O(s)" with chips "ΔH = −6.01" and "ΔS = −22.0", and a mirrored rising line crosses at the same point, the left side tinted green "freezing spontaneous". On "neither is favoured" the crossing is ringed amber with the ice cube half melted. On "direction" a two-headed arrow across 273 K. The 273 K row frames in a dark-ink box with a tick. Hand tags: amber "0 °C: both together" with a pen ring on the crossing; blue "flip both signs" with a `PenArrow` between the two cards.

### 6. the four combinations
> So when does temperature matter? Look at the signs. If delta H is negative and delta S is positive, both terms help, and the reaction is spontaneous at every temperature, like hydrogen peroxide decomposing. Its reverse has delta H positive and delta S negative, so both terms hurt, and it's never spontaneous. But when the signs are the same, the two terms pull against each other, and temperature decides. Both positive, like limestone or melting, it's spontaneous above the threshold. Both negative, like freezing, it's spontaneous **below**.

Visual: the combination grid, four small ΔG against T graphs, each with sign chips. On "delta H is negative and delta S is positive" the top-left graph: a line starting below zero and falling, all green; example card "2H₂O₂(l) → 2H₂O(l) + O₂(g)", verdict chip "always spontaneous". On "Its reverse" the top-right graph: a line starting above zero and rising, all red; example "2H₂O(l) + O₂(g) → 2H₂O₂(l)", verdict "never spontaneous". On "the two terms pull against each other" the bottom row lights. On "Both positive" bottom-left: starts above zero, falls, crosses (amber ring); examples "CaCO₃ → CaO + CO₂; ice melting", verdict "spontaneous above the threshold". On "below" bottom-right: starts below zero, rises, crosses; example "water freezing", verdict "spontaneous below the threshold". Stage: the grid fills the frame (grid labels 36 px). Hand tags: amber "same signs: crosses" on the bottom row, grey "opposite: never" on the top row, with a pen ring on each crossing.

### 7. same signs
> Here's the rule in one line. Same signs, temperature decides. Opposite signs, it never **switches**. So if the signs agree, find the threshold. If they don't, the answer is the same at every temperature.

Visual: the memory line writes large in the explainer's hand font as a framed card (dark ink, 44 px): "Same signs: temperature decides. Opposite signs: it never switches." Beneath, the grid returns small; on "Same signs" the bottom row glows amber; on "switches" the top row glows grey.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. For the formation of ammonia, delta H is minus ninety-one point eight kilojoules, and delta S is minus one hundred and ninety-eight point one joules per kelvin. Identify the sign combination. Then calculate the temperature above which the reaction is non-spontaneous under standard conditions. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "N₂(g) + 3H₂(g) → 2NH₃(g)  ΔH° = −91.8 kJ mol⁻¹  ΔS° = −198.1 J K⁻¹ mol⁻¹. (a) Identify how the signs of ΔH° and ΔS° make the spontaneity of this reaction depend on temperature. (1 mark) (b) Calculate the temperature above which the reaction is non-spontaneous under standard conditions. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 9. feedback 1 (brief)
> Both signs are negative, so temperature decides: it's spontaneous below the threshold. T is ninety-one point eight divided by zero point one nine eight one, which is four hundred and sixty-three kelvin, about one hundred and ninety degrees. Above that, it's non-spontaneous. Forgetting to convert gives zero point four six three kelvin, which makes no **sense**.

Visual: card shrinks to the top. Rows: "(a) ΔH° < 0 and ΔS° < 0: spontaneous below the threshold" (amber); "(b) ΔS° = −0.1981 kJ K⁻¹ mol⁻¹; T = −91.8 ÷ (−0.1981) = 463 K (about 190 °C)"; "above 463 K: ΔG° > 0, non-spontaneous" (red). A mini graph: a rising line crossing at 463 K. On "Forgetting to convert" a chip "91.8 ÷ 198.1 = 0.463 K" fades in; on "sense" it is crossed. Hold about 1 second. Row (b) frames in a dark-ink box with a tick (52 px). The crossed chip carries a red hand tag "convert ΔS".

### 10. attempt 2 (countdown, 10 seconds)
> Last one. For water freezing, delta H is minus six point zero one kilojoules, and delta S is minus twenty-two point zero joules per kelvin. Show by calculation that freezing is spontaneous at minus five degrees, but not at plus five degrees. Pause here to answer.

Visual: `QuestionCard`: "For the freezing of water, H₂O(l) → H₂O(s): ΔH = −6.01 kJ mol⁻¹ and ΔS = −22.0 J K⁻¹ mol⁻¹. Show by calculation that freezing is spontaneous at −5 °C but non-spontaneous at +5 °C. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 2 (brief)
> At minus five degrees, two hundred and sixty-eight kelvin, delta G is minus six point zero one plus five point nine zero, about minus zero point one one, so freezing is spontaneous. At plus five degrees, two hundred and seventy-eight kelvin, it's about plus zero point one one, so it isn't. Calling freezing always spontaneous because it's exothermic ignores the entropy **term**.

Visual: card shrinks. Rows: "268 K: ΔG = −6.01 − 268 × (−0.0220) = −6.01 + 5.90 = −0.11 kJ mol⁻¹: spontaneous" (green); "278 K: ΔG = −6.01 − 278 × (−0.0220) = −6.01 + 6.12 = +0.11 kJ mol⁻¹: non-spontaneous" (red). On "Calling freezing always spontaneous" a chip "exothermic, so always spontaneous" fades in; on "term" it is crossed. Hold about 1 second. Both rows frame in a dark-ink box with a tick. The crossed chip carries a red hand tag "TΔS can win".

### 12. Module 4 in one picture
> So temperature can reverse spontaneity when delta H and delta S have the same sign, and the switch happens at the threshold, delta H divided by delta S, in kelvin. That finishes Module 4. It asked what drives reactions. First, enthalpy, the energy taken in or given out. Then entropy, counting the ways. And finally Gibbs free energy, which weighs the two, with temperature setting the **balance**. Every reaction you meet can be read with those three ideas.

Visual: the memory line returns small at the top. On "at the threshold" the limestone graph returns briefly with its amber ring at 1110 K. On "That finishes Module 4" the Module 4 ladder builds at centre: on "enthalpy" step 1 "enthalpy, ΔH: energy in or out" with a painted thumbnail of `m7-spirit-burner-calorimeter-v1.png` (v01 to v03) beside a small coded glucose cycle (v10); on "entropy, counting the ways" step 2 "entropy, ΔS: counting the ways" with a painted `y11c-dry-ice-v1.png` thumbnail (v11, v12) beside a small tally; on "Gibbs free energy" step 3 "Gibbs free energy, ΔG = ΔH − TΔS" with the painted limestone and quicklime pair and the limestone graph; on "balance" the v12 balance beam appears on step 3 and settles. Slate hand tag "three ideas" with a `PenArrow` up the ladder.

### 13. the end of Year 11 Chemistry
> And that's the end of Year 11 Chemistry. You've built up the particles and bonds that make up matter, learned to count them in moles, explored how and why substances react, and found what drives a reaction to go. Next, plan and finish your depth study with your teacher. Well **done**.

Visual: the ladder shrinks into the Module 4 tile. On "the particles and bonds" the Module 1 tile writes with a green tick; on "count them in moles" the Module 2 tile; on "how and why substances react" the Module 3 tile; on "what drives a reaction to go" the Module 4 tile (with its tiny ΔG line). Heading writes "Year 11 Chemistry: complete". On "plan and finish your depth study" the slate chip "Next: plan and complete your depth study with your teacher". On "done" the four ticks pulse once. Hold about 4 seconds. This is the final frame of the course.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. ΔG° = ΔH° − TΔS° is a straight line against T (if ΔH° and ΔS° stay about constant).
2. Threshold: ΔG° = 0, so T = ΔH° ÷ ΔS° (ΔS° in kJ K⁻¹ mol⁻¹; T in K).
3. Check a temperature each side; the threshold gives direction, not rate.
4. Limestone: about 1110 K (estimate from 25 °C data). Ice and water: 273 K.
5. Both +: spontaneous above the threshold; both −: below. Opposite signs never switch.

Memory aid (framed card, on the notes screen): *Same signs: temperature decides. Opposite signs: it never switches.*

At the end the notes cross-fade back to scene 13's final frame.

## Teaching checks

- **Does it explain causes?** Why the graph is a straight line (2: T multiplies a fixed ΔS); why the threshold is ΔH ÷ ΔS (3: the terms balance); why ΔS must be in kJ (3); why the sign reverses across the threshold (4); why the reverse reaction is spontaneous on the other side (5: both signs flip); why opposite signs never switch (6: both terms push the same way).
- **Misconceptions addressed:** ΔS not converted (3; crossed in A1); the threshold says how fast (4); a positive ΔG means never (2, 6); exothermic means always spontaneous (6; crossed in A2).
- **One idea at a time:** prediction (1), straight line (2), threshold (3), either side (4), ice and water (5), combinations (6), recap (12), course end (13).
- **Video makes it easier:** points dropping onto a line that heads for zero (2); the crossing ringed as the calculation lands (3); green and red regions either side (4); mirrored melting and freezing lines (5); a 2 × 2 grid of small graphs (6).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all data on the cards, 10 s each, nothing answer-bearing. Feedback about 28 s and 29 s.
- **Avoided double teaching:** ΔG and units (m4-v13); ammonia's ΔS (m4-v12); ice and entropy (m4-v11); reversing equations (m4-v07).
- **Syllabus coverage:** `C4-IQ3-06` "predict the effect of temperature changes on spontaneity" (2 to 7, A1, A2); `C4-IQ3-05` "solve problems using standard references and ΔG° = ΔH° - TΔS° ... to classify reactions as spontaneous or nonspontaneous" (3, 4, A1, A2).
- **Out of scope by design:** industrial operating conditions and equilibrium (Year 12), K and Q, temperature dependence of ΔH and ΔS.

## Practice questions and model answers

**Attempt 1 (scene 8; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) ΔH° and ΔS° are both negative, so the reaction is spontaneous at low temperature and non-spontaneous above a threshold (1 mark). (b) ΔS° = −198.1 ÷ 1000 = −0.1981 kJ K⁻¹ mol⁻¹; T = ΔH° ÷ ΔS° = −91.8 ÷ (−0.1981) = 463 K (1 mark); above about 463 K (190 °C) the reaction is non-spontaneous under standard conditions (1 mark). Classic mistake (crossed): 91.8 ÷ 198.1 = 0.463 K.

**Attempt 2 (scene 10; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: at −5 °C, T = 268 K: ΔG = −6.01 − 268 × (−0.0220) = −0.11 kJ mol⁻¹, negative, spontaneous (1 mark); at +5 °C, T = 278 K: ΔG = −6.01 − 278 × (−0.0220) = +0.11 kJ mol⁻¹, positive, non-spontaneous (1 mark); ΔS converted to kJ and T in kelvin, with both conclusions stated (1 mark). Classic mistake (crossed): "freezing is exothermic, so it is spontaneous at any temperature".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Limestone data (NBS) | ΔH° = +178.3 kJ mol⁻¹; ΔS° = +160.6 J K⁻¹ mol⁻¹ = 0.1606 kJ K⁻¹ mol⁻¹ | opening, 1 to 4 |
| Graph points | 298 K +130.4; 600 K +81.9; 900 K +33.8; 1173 K −10.1 kJ mol⁻¹ | 1, 2, 4 |
| Threshold | 178.3 ÷ 0.1606 = 1110 K; 1110 − 273 = 837 °C; slip 1.11 K | 3, key notes |
| Kiln | 900 °C = 1173 K | 1, 4 |
| Ice and water | ΔH = ±6.01 kJ mol⁻¹; ΔS = ±22.0 J K⁻¹ mol⁻¹; 6.01 ÷ 0.0220 = 273 K = 0 °C | 5, A2 |
| Ammonia (A1) | ΔH° −91.8; ΔS° −198.1 → −0.1981; T = 463 K (463.4), about 190 °C; slip 0.463 K | 8, 9 |
| A2 | 268 K: −6.01 + 5.90 = −0.11; 278 K: −6.01 + 6.12 = +0.11 kJ mol⁻¹ | 10, 11 |
| Combinations | peroxide ΔH −196.1, ΔS +126.0 (v13); reverse +196.1, −126.0 | 6 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 November); Codex to re-check.

- 178.3 − 298 × 0.1606 = 130.44; 178.3 − 600 × 0.1606 = 81.94; 178.3 − 900 × 0.1606 = 33.76; 178.3 − 1173 × 0.1606 = −10.08; 178.3 ÷ 0.1606 = 1110.2; 1110 − 273 = 837; 178.3 ÷ 160.6 = 1.110.
- 6.01 ÷ 0.0220 = 273.2; 6010 ÷ 273.15 = 22.00.
- −6.01 + 268 × 0.0220 = −0.114; −6.01 + 278 × 0.0220 = +0.106; 268 × 0.0220 = 5.896; 278 × 0.0220 = 6.116.
- 91.8 ÷ 0.1981 = 463.4; 463.4 − 273 = 190.4; 91.8 ÷ 198.1 = 0.4634.
- 196.1 + 298 × 0.1260 = 233.6 (reverse peroxide, author note e).

## Memory aid check

- **"Same signs: temperature decides. Opposite signs: it never switches."** Written for this lesson from the site's four-combination table. Meaning, as said in scenes 6 and 7: when ΔH and ΔS have the same sign, ΔG changes sign at T = ΔH ÷ ΔS, so temperature decides; when they have opposite signs, ΔG keeps one sign at every temperature. Assumptions checked: "never" holds within the model (ΔH and ΔS roughly constant, no phase change; scene 2 states the assumption) and for positive kelvin temperatures; it says nothing about rate (scene 4). Which side is spontaneous for same signs (both + above, both − below) is shown in the grid and key notes, not in the aid, to keep it short. It helps a new case: A1 and A2.
- **Considered, not used:** "Plus-plus goes up high, minus-minus stays down low" (sound but adds a second rhyme to remember; the grid shows it).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **5,558 characters**, 14 scenes (per scene: 413, 592, 555, 587, 539, 540, 199, 326, 358, 263, 376, 454, 281, 75; Revision 1: 5,558). At 13.3 characters per second the speech is about 418 s; add about 12 s of settling (the graph and slider in 2, the crossing in 3, the slider, regions and cross-fade in 4, the grid in 6), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 4 s for the course-end hold and about 54 s more of the quiet notes hold (about 60 s in all): **about 513 s** (Revision 1: about 511 s). Narration unchanged, so the total stays above the 5,500 floor.

## Scene list and build ids

Lesson key `c-y11-m4-v14` (route chem-y11-m4-v14; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v14`.

In order (14 scene headings, all `### N.`): hook-prediction, straight-line, threshold, either-side, ice-and-water, four-combinations, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, module-recap, course-end, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end; scene 13 is `explain` with a 4 s hold. Transitions: m4-v13's final frame into scene 1 by camera continue; 1 to 2 camera push (the graph enlarges); 2 to 3 camera continue (working at the left); 3 to 4 camera continue; 4 to 5 clear change to the ice board; 5 to 6 clear change to the grid; 6 to 7 clear change; attempts and feedback card shrink to the top; 11 to 12 board clear; 12 to 13 morph (the ladder shrinks into the Module 4 tile); 13 to 14 fade to the notes board, and 14 cross-fades back to 13's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), course end (4 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v14-learning-review.md`, `checks/c-y11-m4-v14-science-check.md`.

## Assets

Have (inspected 6 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/c9-ice-cube-v1.png` (2095 × 2105): scene 5.
- `public/assets/chemistry/y11c-limestone-lumps-v1.png` (1254 × 1254 native; delivered in brief 184; inspected 6 November on a dark sheet: pale grey matt lumps): opening, scenes 1 to 4, scene 12 (thumbnail).
- `public/assets/chemistry/y11c-quicklime-lumps-v1.png` (1254 × 1254 native; delivered in brief 184; inspected: white chalky lumps in the same heap outline; registered to the limestone within about 3 native pixels): scene 4 (cross-fade in place), scene 12 (thumbnail). Root accepts the native size (not upsampled) and the visible, not pixel-identical, registration; the cross-fade is checked at playback.
- `public/assets/chemistry/m7-spirit-burner-calorimeter-v1.png` (2000 × 2000) and `y11c-dry-ice-v1.png` (1619 × 972): scene 12 thumbnails (Revision 2; existing, inspected).
- **Inspected, not used:** `m5x-limestone-cave-v1.png` (different reaction); `c9-no2-tube-brown-v1.png` (its temperature colour change is a Year 12 equilibrium demonstration).

Need: no new plates (Revision 2: the quicklime plate requested below was delivered in brief 184).

Requested in Revision 1 (now delivered):
- `public/assets/chemistry/y11c-quicklime-lumps-v1.png`: the same small heap as `y11c-limestone-lumps-v1.png` after strong heating: lumps now white to off-white, slightly chalky and crumbly at the edges, a little powder at the base, same outline and positions as the limestone plate (aligned pair: identical 2000 × 2000 px canvas, camera, scale, heap outline and lighting, so the two cross-fade by translation only), soft studio light from the upper left, HSCScience chemistry plate style. **Transparent PNG with an alpha channel.** No flame, kiln, text, labels, people or hands. Paint after the limestone plate and register to it. Used: scene 4.

Coded: ΔG against T graphs and regions, calculation rows, ice and water graph, combination grid, Module 4 ladder with thumbnails, module tiles, course-end frame, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module4/lesson13.sa.html` (the three named sections; the four combinations; the crossover caution; the limestone and freezing drills) and the site notes' quotations.
3. Confirm water's ΔH(fus) 6.01 kJ mol⁻¹ and ΔS(fus) 22.0 J K⁻¹ mol⁻¹, and the NBS limestone values (as in v13).
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json` (including the hyphen-minus in "ΔH° - TΔS°" as printed in the ledger).
6. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling; the course-end frame names no Year 12 content.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m4-v13's final frame, and that the quicklime plate brief pairs with v13's limestone plate brief.

## YouTube metadata (draft)

Title: How Temperature Changes Spontaneity: The Threshold Temperature | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Limestone doesn't break down at 25 °C, yet a lime kiln turns it into quicklime. Plot ΔG = ΔH − TΔS against temperature, find the threshold temperature where ΔG = 0 (with ΔS in kJ and T in kelvin), check either side, and see the same idea in ice and water at 0 °C. Then sort every reaction into one of four ΔH/ΔS sign combinations. Two exam-style questions, a Module 4 recap, and the end of Year 11 Chemistry.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"solve problems using standard references and ΔG° = ΔH° - TΔS° (Gibbs free energy formula) to classify reactions as spontaneous or nonspontaneous"
"predict the effect of temperature changes on spontaneity (ACSCH070)"

Previous: How do enthalpy, entropy and temperature determine spontaneity?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Course-end frame (root).** Scene 13 and the final frame close the Year 11 course with four module tiles and the depth-study chip (the route's handoff), with no Year 12 content. Root to confirm the module titles and whether the depth-study chip should stay (it is a Year 11 requirement, not a preview).
- **2. Limestone threshold wording (resolved by Module 4 root decision 12).** Scene 2 states the estimate aloud and scene 3's threshold row carries the grey tag "estimate from 25 °C data (measured about 1170 K)"; key note 4 says "estimate from 25 °C data".
- **3. A2 precision (science check).** ±0.11 kJ mol⁻¹ shown to two significant figures (a small difference of two numbers); the signs are what matter.
- **4. Length (learning review).** About 511 s and 5,558 characters, near the lower bound; no cut is needed. If scene 6's peroxide-reverse sentence is cut for focus (about 100 characters), add a matching sentence to scene 4 or 5 to stay above 5,500.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the straight-line idea in scene 2 clear without the derivation; does the course-end frame feel earned and short), then the science check and Codex error check.
- Checker output (6 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
- Brief 184 reviews (6 November): 0 blocker, 0 should fix, 0 optional.
- Checker output (Revision 2, 6 November): narration 5,558 characters (per scene in "Narration length estimate"); no em dash; every bold cue quoted exactly in its scene's Visual in spoken order (scene 3 "absurd", scene 4 "goes", scene 9 "sense" and scene 11 "term" now quoted).

## Revision 2 (6 Nov 2026)

Brief 184 findings (`checks/c-y11-m4-v14-learning-review.md`, `checks/c-y11-m4-v14-science-check.md`): 0 blocker, 0 should fix, 0 optional. Nothing to resolve; the descending limestone line, the either-side checks, the melting and freezing case, the spoken threshold assumption and the four-tile course end are kept as the reviewers asked.

High-risk redesign (scene level; narration, numbers and teaching logic kept):
- Revision 1 held one limestone board for scenes 1 to 4 (about 161 s). Revision 2 stages (Board layout): the opening (1), the graph at full width with the slider (2), full-width working (3), the painted limestone large cross-fading to quicklime beside the shaded graph (4). No set-up runs past about 45 s.
- Live control: the temperature slider (2, 4): the marker rides the limestone line with readouts 298 K +130.4, 600 K +81.9, 900 K +33.8, 1110 K 0.0 and 1173 K −10.1 kJ mol⁻¹ (Python: 178.3 − T × 0.1606 gives 130.44, 81.94, 33.76, 0.03, −10.08).
- The Module 4 ladder (12) now uses painted thumbnails (spirit burner rig, dry ice, limestone and quicklime) instead of coded thumbnails only. The course-end frame (13) is unchanged: four module tiles, no plates, the depth-study chip (root decision 13).
- Both new plates are delivered (brief 184) and inspected; Assets records them as had, at native size.

Visual upgrade:
- Framed answers: 1110 K with the grey "estimate from 25 °C data (measured about 1170 K)" tag (3), −10.1 (4), 273 K (5), 463 K (feedback 1), ±0.11 (feedback 2). Crossed slips carry red hand tags.
- Hand tags and a pen mark in role colours in every teaching scene (1 to 6, 12).
- Bold cues now quoted exactly: scene 3 "absurd", scene 4 "goes", scene 9 "sense", scene 11 "term".
- Memory line as a framed card; key notes cut to five short bullets (about 400 characters of bullet text), with the estimate wording in note 4.
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout"; open decision 2 is closed by root decision 12.
- Question cards already arrive with their full text; unchanged. The opening (m4-v13's final frame, unchanged in its Revision 2) and the course-end frame are unchanged.

New plate requests: none.

Counts: 5,558 characters (Revision 1: 5,558, unchanged); about 511 s to about 513 s.
