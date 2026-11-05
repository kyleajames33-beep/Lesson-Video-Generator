# Year 11 Chemistry M2 V18: Charles's law, Gay-Lussac's law and kelvin. Why do gas volume and pressure laws require kelvin? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,367 characters, 17 scenes, about 566 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: eighteenth Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 52, between `chem-y11-m2-v17` and `chem-y11-m2-v19`; the third gas-laws video, with the Charles's law practical and secondary fixed-volume data. Templates: `chem-y11-m2-v17.md` (same designer, layout and colour key), `chem-y11-m2-v16.md`, `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation staging), `bio-y11-fa1-v05.md` (plates), `chem-m8-p02.md` (practical conventions). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v18` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Compare Charles and Gay-Lussac at their different fixed quantities; convert Celsius to kelvin and calculate one case of each."; next handoff: "How does PV=nRT combine the simple gas laws?"; practical: "Charles-law volume/temperature investigation; approved secondary fixed-volume pressure data"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson15.sa.html` (SHA256 `fddafeba74553bc550196bfae464df4d3da32f508ee29efb3501efbcbc264d1e`, recomputed, matches the route), sections `l15-gaslaws-title` and `l15-prac-title`. Used: "Always use kelvin ... T(K) = T(°C) + 273.15. Using °C gives wrong answers (and can divide by zero or go negative)"; the Charles and Gay-Lussac cards (constant P, n; constant V, n; V₁/T₁ = V₂/T₂; P₁/T₁ = P₂/T₂); "Why kelvin, and why 0 K?" (both graphs extrapolate to the same point, 0 K, −273.15 °C; cooling slows particles; absolute zero as the minimum of particle motion; never reached; no temperature below it; no negative kelvin values); the Charles method (gas syringe with a free plunger in a water bath with a thermometer, heated slowly, readings every 5 to 10 °C after thermal equilibrium, V against T in kelvin, extrapolation close to 0 K); the controlled-variables box (P kept constant by the free plunger; n fixed by sealing); the quick check (a sealed rigid steel cylinder heated: Gay-Lussac, pressure rises), which becomes attempt 1's context. Not used: the combined and ideal gas laws, R (m2-v19), the weather balloon (m2-v19), "273" without the ".15" (the course uses the data sheet's 273.15; site note 2).

Owner rules applied: as `chem-y11-m2-v17.md` (one learner question; no people, hands or faces: apparatus alone, moved by code; real apparatus as painted plates; particle windows, readouts, tables, `LineGraph`s and calculation rows coded, following HSC particle conventions; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame). Data are illustrative and tagged so.

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger ID), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger's broken apostrophes shown corrected, root decision m1-9):

- `C2-IQ4-01`: "conduct investigations and solve problems to determine the relationship between the Ideal Gas Law and:"
  - "Gay-Lussac's Law (temperature)"
  - "Charles' Law"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on m2-v17's final frame (the capped syringe upright in a beaker of water on a hotplate, plunger free; thermometer; "10 | 50.0", "20 | 51.8"; "20 °C is double 10 °C. Why isn't V doubled?"; "P = 100 kPa (steady)"). Teaches: heating to 80 °C gives only 62.4 mL (prediction); the Charles data form a straight line against °C that does not pass through 0 °C, and it extrapolates to zero volume at about −273 °C; why (cooling slows particles; absolute zero, −273.15 °C, the minimum of particle motion; real gases liquefy first, so the line is extended on paper); the kelvin scale (same step size, add 273.15; no negative values); Charles's law, V ∝ T(K) at constant P and n, with the cause (the free plunger moves out until the push matches outside); the check that 51.8 mL is 3.5% more because 293.15 K is 3.5% more than 283.15 K; why Celsius ratios fail (divide by zero, negative volumes); the method and its limitations (whole barrel under water, slow heating, waiting, a sticky plunger); one Charles calculation; Gay-Lussac's law, P ∝ T(K) at constant V and n, with the cause (the walls cannot move); secondary fixed-volume data extrapolating to the same zero; the comparison of the two laws' fixed quantities. Not taught: the combined gas law and PV = nRT (m2-v19, the handoff), the kinetic energy formula (one grey tag only), real-gas behaviour near liquefaction beyond one sentence.

## Decisions

- **Learner question (route wording kept).** "Why do gas volume and pressure laws require kelvin?" The answer, in order: Celsius doubling does not double the volume (1); the volume line points to a zero at −273 °C (2); that zero is where particle motion is least, absolute zero (3); kelvin counts from there (4); measured from there, V is proportional to T (5, 6); the same zero appears for pressure at fixed volume (9, 10); so ratios need kelvin (11).
- **Opening frame (equals `chem-y11-m2-v17.md`'s final frame, same designer).** At the left, `m8-beaker-hotplate-clear-v1.png` with the syringe (`c4a-syringe-barrel-v1.png` with `c4a-syringe-plunger-v1.png`, rotated upright, nozzle down and capped) held by a coded clamp, the barrel's lower two thirds under a coded water tint; `c8-thermometer-hot-v1.png` in the water; tag "plunger free: P stays at room pressure"; at the right, the table "T (°C) | V (mL)": "10 | 50.0", "20 | 51.8"; amber chip "20 °C is double 10 °C. Why isn't V doubled?"; conditions strip "P = 100 kPa (steady)"; the "Next" chip, which fades.
- **Prediction (3 s, scene 1).** "Heat on to 80 °C, eight times 10. Will the volume be eight times as big, about twice as big, or only a little bigger?" Answer: only a little bigger, 62.4 mL.
- **Charles data (illustrative, from V = 50.0 × T(K) ÷ 283.15; author note a).** 10 → 50.0; 20 → 51.8; 30 → 53.5; 40 → 55.3; 50 → 57.1; 60 → 58.8; 70 → 60.6; 80 → 62.4 mL. The volume rises by about 1.8 mL every 10 °C. Plotted on a °C axis that runs from −300 to 100 °C so the extrapolation is visible; zero volume at −273 °C. The method starts in cold water (ice added to reach 10 °C), as the site's method starts "from room temperature"; tagged "illustrative data".
- **Absolute zero (scenes 2, 3; site's "Why kelvin, and why 0 K?").** Said as "the temperature where the particles would have the least motion possible", not "particles stop" (the site's "would reach a minimum" wording; quantum zero-point motion is an author note, not learner copy). The necessary caveat is spoken: a real gas turns to a liquid long before, so the line is extended on paper (otherwise students infer gases shrink to nothing).
- **Kelvin (scene 4).** Same-size step, add 273.15; 0 °C = 273.15 K and 25 °C = 298.15 K (the data sheet's pair, linking m2-v16's molar volumes); "K, not °K" as a grey chip.
- **Why V ∝ T(K) (scene 5).** On the kelvin scale, temperature is proportional to the particles' average energy of motion (grey tag; "kinetic energy" not spoken, as in m2-v16). Doubling T(K) doubles the push the same particles give in the same volume, so the free plunger slides out until the push per square metre is back to 100 kPa, which takes twice the volume. Qualitative; author note b.
- **The 3.5% check (scene 6).** 293.15 ÷ 283.15 = 1.035; 51.8 ÷ 50.0 = 1.036 (rounding). This makes the hook's puzzle resolve with the opening data, not a new example. Celsius ratio 20 ÷ 10 = 2 shown crossed. Divide by zero at 0 °C, negative volume at −10 °C (site).
- **Method and limitations (scene 7; site method plus three limitations).** Keep the whole gas-filled barrel under water (only the gas at the bath's temperature follows the reading); heat slowly and stir; wait until the volume stops changing; check the plunger slides freely (a sticky plunger lags, so the volume reads low and the pressure is not quite constant). The site's "toward boiling" is replaced by 80 °C (the syringe scale and safety; author note c).
- **Charles calculation (scene 8; original numbers).** 45.0 mL at 20 °C warmed to 60 °C at constant pressure: 45.0 × 333.15 ÷ 293.15 = 51.1 mL. Celsius slip 135 mL shown crossed in the teaching, so attempt 1 can cross a different law's slip.
- **Gay-Lussac's law (scene 9).** A rigid flask (`m6-conical-flask-v1.png` with `m5x-stopper-v1.png`) connected by a coded tube to the pressure sensor from m2-v17 (`y11c-gas-pressure-sensor-v1.png`), in the water bath. The walls cannot move, so faster particles hit harder and more often and the pressure rises.
- **Secondary data (scene 10; route "approved secondary fixed-volume pressure data"; open decision 1).** Illustrative values for a sealed flask from P = 100.0 × T(K) ÷ 293.15: 0 → 93.2; 20 → 100.0; 40 → 106.8; 60 → 113.6; 80 → 120.5; 100 → 127.3 kPa (tag "secondary data (illustrative)"). Extrapolates to zero pressure at −273 °C, matching the volume line (the site's "both extrapolate back to the same point"). Codex is asked to find an approved published school dataset with the same shape; if found, the scene swaps to it with its citation.
- **Comparison (scene 11; route stop).** A two-column card: Charles (fixed P and n; V changes; "free plunger"; V₁/T₁ = V₂/T₂) and Gay-Lussac (fixed V and n; P changes; "rigid flask"; P₁/T₁ = P₂/T₂). Both: T in kelvin.
- **Memory aid (see "Memory aid check"):** "Ratios need a true zero: always kelvin."
- **Attempts (original wording, HSC style).** A1 (Gay-Lussac; site quick-check context): a sealed rigid steel cylinder at 150 kPa and 20 °C warms to 50 °C: 165 kPa; crossed "375 kPa (Celsius used)". A2 (the learner question as a claim): "heating from 20 °C to 40 °C at constant pressure doubles the volume": incorrect; 293.15 K to 313.15 K is about 7% warmer, so V rises about 7%; crossed "the volume doubles".
- **Mistake scene:** none separate. "Doubling °C doubles V" (1, 6; crossed in A2); Celsius in the calculation (8; crossed in A1); "gases shrink to nothing at absolute zero" (3); "°K" (4, tag); mixing up which quantity each law fixes (11).
- **Handoff (route next: `chem-y11-m2-v19`, "How does PV=nRT combine the simple gas laws?").** Scene 16 lays out four law cards; final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log if accepted):**
  1. Lesson 15 `l15-prac-title`, Charles method: "heat the bath slowly ... as the bath heats from room temperature toward boiling". A plastic syringe near 100 °C may soften and the volume may exceed the scale; and water vapour from a near-boiling bath is a scalding risk. Suggest "to about 80 °C".
  2. Lesson 15 worked example "Combined gas law" uses 273 (27 + 273 = 300 K), while the formula card and key facts use 273.15. The answer is unchanged to three figures (31.3 L either way), but suggest one convention (273.15, as on the HSC data sheet) or a note that 273 is acceptable when the data have three significant figures.
  3. Lesson 15 key terms: "STP ... 0°C (273 K)" and "RTP ... 25°C (298 K)" beside "T(K) = T(°C) + 273.15". Suggest 273.15 K and 298.15 K, matching the data sheet.
  - Checked and correct: lesson 15's quick check (rigid cylinder: Gay-Lussac, pressure rises); the extrapolation to −273.15 °C; the "never actually reached" wording.
- **Cause chain taught, in order:** (1) cooling slows the particles, so at fixed pressure the gas shrinks (3); (2) the shrinking line points to a temperature of least motion, absolute zero (2, 3); (3) temperature measured from there is proportional to the particles' average energy of motion (5, tag); (4) so doubling the kelvin temperature doubles the push, and a free plunger moves out to double the volume (5); (5) a fixed wall cannot move, so the pressure doubles instead (9); (6) Celsius starts at water's freezing point, so its ratios do not describe the gas (6).
- **Entry knowledge:** Stage 5 particle model; m2-v16 (wall hits, push matching outside pressure, 273.15 K and 298.15 K on the molar-volume cards); m2-v17 (Boyle's law, the syringe, the pressure sensor, P₁V₁ = P₂V₂ with matching units); ws-v04 (lines of best fit, extrapolation).
- **Learner-visible vocabulary (plain meaning at first use):** extrapolate (2, "extend the line beyond the data"); absolute zero (3); kelvin (4); Charles's law (5, stated); Gay-Lussac's law (9, stated); secondary data (10, "data someone else collected").
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **bath rig** (scenes 1, 2, 7, 8: the opening frame's beaker, syringe, clamp, water tint and thermometer; the plunger rises with each reading; the thermometer's coded label changes; the hotplate glows faintly while heating); **V–T graph** (scenes 2, 3, 5, 6: coded `LineGraph` "V (mL)" against "T (°C)", axis from −300 to 100 °C; points plot in turn; line of best fit; a dashed extrapolation runs back to the axis at −273 °C); **particle window** (scene 3: particles in the syringe slow and the plunger sinks as the dashed line runs back); **scale strip** (scene 4: two thermometer-style scales side by side, °C and K, the K scale's zero at −273.15 °C, ticks the same spacing); **ratio check** (scene 6: two rows, °C crossed and K ticked); **flask rig** (scenes 9, 10: conical flask, stopper, coded tube, pressure sensor and logger readout, in the beaker on the hotplate); **P–T graph** (scene 10: coded `LineGraph` "P (kPa)" against "T (°C)", the same −300 to 100 °C axis, extrapolating to the same point); **partner card** (scene 11); calculation board (scenes 8, 12, 14); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m2-v17):** pressure red; volumes slate blue; temperature orange (°C) and deep orange (K); conditions strip slate with a thermometer icon; absolute zero marked in navy; crossed items red strike.
- **Board layout (constant):** heading top left; conditions strip top right ("P = 100 kPa (steady)" for Charles; "V fixed" for Gay-Lussac); the rig at the left; the graph or rows at the right.

Author notes (not learner copy):
(a) Charles data: V = 50.0 × (T + 273.15) ÷ 283.15: 10 → 50.00; 20 → 51.77; 30 → 53.53; 40 → 55.30; 50 → 57.07; 60 → 58.83; 70 → 60.60; 80 → 62.36 mL. Slope 0.1766 mL per °C; V = 0 at −273.15 °C. 80 °C against 10 °C: 62.4 ÷ 50.0 = 1.25 (prediction answer).
(b) Kinetic theory: for an ideal gas the average translational kinetic energy is (3/2)kT, so with T in kelvin the push of a fixed number of particles in a fixed volume is proportional to T. At absolute zero a real substance retains zero-point motion, so "least motion possible" is used, not "no motion".
(c) Method: 80 °C keeps the syringe below softening temperatures for common plastic syringes and inside a 100 mL scale (62.4 mL); science check to confirm the syringe type and bath limit against current NSW school guidance.
(d) Ratios: 293.15 ÷ 283.15 = 1.0353; 51.8 ÷ 50.0 = 1.036.
(e) Charles calculation: 45.0 × 333.15 ÷ 293.15 = 51.14 → 51.1 mL; Celsius slip 45.0 × 60 ÷ 20 = 135 mL.
(f) Secondary data: P = 100.0 × (T + 273.15) ÷ 293.15: 0 → 93.18; 20 → 100.00; 40 → 106.82; 60 → 113.65; 80 → 120.47; 100 → 127.29 kPa; slope 0.3411 kPa per °C; P = 0 at −273.15 °C.
(g) A1: 150 × 323.15 ÷ 293.15 = 165.35 → 165 kPa; slip 150 × 50 ÷ 20 = 375 kPa. A2: 313.15 ÷ 293.15 = 1.068 (6.8%, "about 7%").
(h) Pronunciations: "Gay-Lussac" (gay-loo-SAK); "two hundred and seventy-three point one five"; "V one over T one equals V two over T two"; "kelvin" (not "degrees kelvin").

Main question: *Why do gas volume and pressure laws require kelvin?*
Entry knowledge: Stage 5 particle model; m2-v16, m2-v17; ws-v04.
Stops after: the V–T line and its extrapolation, absolute zero, kelvin conversion, Charles's law with cause and practical, one Charles calculation, Gay-Lussac's law with cause and secondary data, one Gay-Lussac calculation (A1), the comparison of fixed quantities. No combined law or PV = nRT.
Handoff: chem-y11-m2-v19, the ideal gas law.

## Opening frame and final frame

- **Opening frame:** m2-v17's final frame exactly (Decisions).
- **Final frame (m2-v19 opens on it):** four law cards in a two-by-two grid on the dark board, each with its fixed quantities as a slate chip at the top: top left "Boyle: fixed T, n | PV = constant | P₁V₁ = P₂V₂"; top right "Charles: fixed P, n | V/T = constant | V₁/T₁ = V₂/T₂"; bottom left "Gay-Lussac: fixed V, n | P/T = constant | P₁/T₁ = P₂/T₂"; bottom right "Avogadro: fixed T, P | V/n = constant | V₁/n₁ = V₂/n₂"; a deep-orange tag "T in K" on the three cards that contain T; at the centre, where the cards meet, an amber chip "one equation for all four?"; the chip "Next: How does PV=nRT combine the simple gas laws?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's the syringe in its water bath, with the plunger free to move, so the gas stays at room pressure. At ten degrees, the air fills fifty millilitres. At twenty degrees, the Celsius number has doubled, but the volume has only crept up to fifty-one point eight. So, quick prediction. If we keep heating to eighty degrees, eight times ten, will the volume be eight times as big, about twice as big, or only a little **bigger**?

Visual: opens on m2-v17's final frame; the "Next" chip fades. On "plunger free to move" the tag "plunger free: P stays at room pressure" glows. On "fifty millilitres" row "10 | 50.0" glows; on "fifty-one point eight" row "20 | 51.8" glows and the amber chip pulses. On "eighty degrees" the thermometer label shows "80 °C?" and chips "× 8", "× 2", "a little". On "bigger" the 3 s `Countdown` ring runs. Heading writes: "Charles, Gay-Lussac and kelvin".

### 2. the line that misses zero
> Only a little bigger, about sixty-two millilitres. Here's the full set. Heat the water slowly, and at each temperature, wait for the gas to reach the water's temperature before reading the volume. Every ten degrees, the volume grows by the same amount, so the points make a straight line. But the line doesn't go through zero degrees. So where would the volume reach zero? Extrapolate, which means extend the line beyond the data, and it reaches zero volume at about minus two hundred and seventy-three **degrees**.

Visual: "a little" ticks; the hotplate glows; the plunger rises as the thermometer label steps 30, 40 ... 80 °C, the table filling "30 | 53.5", "40 | 55.3", "50 | 57.1", "60 | 58.8", "70 | 60.6", "80 | 62.4" (tag "illustrative data"). On "wait for the gas" a small clock chip "wait until V stops changing". On "straight line" the V–T graph at the right: points plot, line of best fit draws (axis "T (°C)" from −300 to 100). On "zero degrees" a ring at the "0 °C" gridline shows the line still well above zero volume (tag "V ≠ 0 at 0 °C"). On "Extrapolate" gloss chip "extrapolate: extend the line beyond the data"; on "degrees" a dashed line runs back to the T axis, meeting it at "−273 °C" (navy ring).

### 3. absolute zero
> That's no accident. Cooling a gas slows its particles down, so they push less, and at a fixed pressure the gas shrinks. The line points to the temperature where the particles would have the least motion possible, and push on nothing. That's absolute zero, minus two hundred and seventy-three point one five degrees Celsius. A real gas turns into a liquid long before then, so this end of the line is only extended on paper, not **measured**.

Visual: a particle window in the syringe at the left. On "slows its particles down" the particles' trails shorten and the plunger sinks a little. On "least motion possible" the dashed line's end glows; particles in a small window beside it nearly still (tag "least motion"). On "absolute zero" the label writes at the navy ring: "absolute zero: −273.15 °C". On "turns into a liquid" a short grey section of the dashed line near −200 °C is marked "real gases liquefy before this"; on "measured" tags on the graph: "measured" over the solid section, "extended on paper" over the dashed section.

### 4. the kelvin scale
> The kelvin scale starts at absolute zero. Each kelvin is the same size step as a degree Celsius, so to convert, you just add two hundred and seventy-three point one five. Zero degrees Celsius is two seventy-three point one five kelvin, and twenty-five degrees is two ninety-eight point one five. There are no negative kelvin temperatures, because nothing can have less motion than the **minimum**.

Visual: scale strip: two vertical scales side by side, "°C" (orange) and "K" (deep orange), ticks lined up. On "starts at absolute zero" the K scale's "0 K" sits level with "−273.15 °C". On "same size step" one 10-degree interval on each scale highlights, equal heights. On "add two hundred and seventy-three point one five" the strip "T(K) = T(°C) + 273.15" writes. On "Zero degrees Celsius" pairs light: "0 °C = 273.15 K"; then "25 °C = 298.15 K" (tag "the data sheet's two molar-volume temperatures"). On "minimum" the region below 0 K greys out (tag "no negative kelvin"); grey chip "write K, not °K".

### 5. Charles's law
> Now the data make sense. Measured from absolute zero, the gas's volume is proportional to its temperature. On the kelvin scale, temperature tracks how much the particles are moving. So double the kelvin temperature, and the same particles push twice as hard on the walls. The free plunger slides out until the push on each square metre matches the room again, and that takes twice the volume. That's Charles's law. For a fixed amount of gas at constant pressure, V one over T one equals V two over T **two**, with T in kelvin.

Visual: the V–T graph re-labels its axis with a second scale beneath, "T (K)", its zero at the navy ring; the line now runs from the K origin. On "proportional" tag "V ∝ T (K)". On "tracks how much the particles are moving" grey tag "kelvin temperature: proportional to the average energy of motion". On "push twice as hard" a small box at the left with particles speeding up and outward push arrows doubling. On "slides out" the box's lid slides out until its outside arrows ("100 kPa") match again; volume label "× 2". On "Charles's law" a navy card: "Charles's law: for a fixed amount of gas at constant pressure, V ∝ T (in K)"; on "two" strip "V₁/T₁ = V₂/T₂ (T in K)".

### 6. why Celsius fails
> Check it with our first two readings. Ten degrees is two eighty-three point one five kelvin, and twenty degrees is two ninety-three point one five. That's only about three and a half percent warmer, which is exactly how much the volume grew. Celsius ratios mean nothing, because zero degrees Celsius is just where water freezes, not where motion stops. Put Celsius into a gas law, and zero degrees would mean dividing by zero, and minus ten would give a negative **volume**.

Visual: ratio check rows at the right. On "Ten degrees" row "10 °C = 283.15 K"; "20 °C = 293.15 K". On "three and a half percent" row "293.15 ÷ 283.15 = 1.035" (deep orange) beside "51.8 ÷ 50.0 = 1.036" (slate), with an equals link. Above it a row "20 ÷ 10 = 2" appears and is crossed. On "where water freezes" the °C scale's zero glows with tag "0 °C: water freezes". On "dividing by zero" chip "V/0 ?" crossed; on "volume" chip "−10 °C → negative V?" crossed.

### 7. method points and limitations
> A few method points make this work. Keep the whole barrel under the water, so all of the gas is at the temperature you read. Heat slowly and stir, and wait until the volume stops changing. And check that the plunger slides freely. A sticky plunger lags behind, so the volume reads low, and the pressure isn't quite **constant** either.

Visual: back to the bath rig at full width. On "whole barrel under the water" the water tint covers the barrel's gas-filled part (tick); a ghost version with the top third above the water is crossed. On "Heat slowly and stir" a coded stirrer rod moves in the water (no hand; the rod alone). On "stops changing" the clock chip. On "slides freely" the plunger outline glows teal; on "lags behind" a ghost plunger sits a little below where it should be (amber bracket "reads low"); on "constant" chip "friction: P not quite constant".

### 8. a Charles's law calculation
> Here's a calculation. A gas syringe holds forty-five millilitres of air at twenty degrees. At constant pressure, it's warmed to sixty degrees. What's the new volume? First, convert both temperatures to kelvin, two ninety-three point one five and three thirty-three point one five. Then V two is V one times T two over T one, so forty-five times three thirty-three point one five, over two ninety-three point one five. That's fifty-one point one **millilitres**. Using Celsius would give a hundred and thirty-five, tripling the volume for a gentle **warm-up**.

Visual: board clears to the calculation layout. Task strip: "Find V₂ (constant P, n)". Equation strip: "V₁/T₁ = V₂/T₂ (T in K)". Givens: "V₁ = 45.0 mL, T₁ = 20 °C" and "T₂ = 60 °C, V₂ = ?". On "convert both temperatures" row "T₁ = 20 + 273.15 = 293.15 K; T₂ = 60 + 273.15 = 333.15 K" (deep orange). Next row "V₂ = V₁ × T₂ ÷ T₁ = 45.0 × 333.15 ÷ 293.15"; on "millilitres" row "= 51.1 mL" (slate) with chip "T ↑ a little, V ↑ a little ✓". On "warm-up" a chip "135 mL (°C used)" fades in and is crossed.

### 9. Gay-Lussac's law
> Now fix the volume instead. Seal some air in a rigid flask, connect the pressure sensor, and warm the flask in a water bath. The walls can't move, so the gas can't expand. Its faster particles hit the walls harder and more often, and the pressure rises. That's Gay-Lussac's law. For a fixed amount of gas at constant volume, the pressure is proportional to the kelvin temperature, so P one over T one equals P two over T **two**.

Visual: board clears to the flask rig: `m6-conical-flask-v1.png` with `m5x-stopper-v1.png` in its neck, a coded tube to `y11c-gas-pressure-sensor-v1.png` and the logger (`phys-y11-data-logger-v1.png`, readout "100.0 kPa"); the flask stands in the beaker on the hotplate (`m8-beaker-hotplate-clear-v1.png`, coded water tint). Conditions strip "V fixed". On "The walls can't move" the flask outline flashes navy (tag "rigid: V fixed"). On "faster particles" a particle window in the flask: trails lengthen, wall-hit flashes brighter and more frequent; the readout climbs. On "Gay-Lussac's law" a navy card: "Gay-Lussac's law: for a fixed amount of gas at constant volume, P ∝ T (in K)"; on "two" strip "P₁/T₁ = P₂/T₂ (T in K)".

### 10. secondary data: the same zero
> Here's a set of secondary data for a flask like this, meaning data someone else collected. Between zero and a hundred degrees, the pressure climbs from about ninety-three to a hundred and twenty-seven kilopascals, in a straight line. Extend it backwards, and the pressure reaches zero at about minus two hundred and seventy-three degrees, the same point as the volume line. Two different measurements point to the same absolute **zero**.

Visual: table "T (°C) | P (kPa)": "0 | 93.2", "20 | 100.0", "40 | 106.8", "60 | 113.6", "80 | 120.5", "100 | 127.3" (tag "secondary data (illustrative)"). On "secondary data" gloss chip "secondary data: collected by someone else". On "straight line" the P–T graph plots with its line of best fit, axis "T (°C)" from −300 to 100. On "Extend it backwards" a dashed line to the axis; on "the same point as the volume line" the V–T graph slides in above it, both dashed lines meeting the axis at the same navy ring "−273.15 °C". On "zero" label "0 K".

### 11. partners, and the memory line
> So the two laws are partners. Charles's law fixes the pressure and lets the volume change, like the free plunger. Gay-Lussac's law fixes the volume and lets the pressure change, like the rigid flask. Both fix the amount of gas, and both need kelvin. Remember: ratios need a true zero, so always use **kelvin**.

Visual: partner card, two columns: "Charles | fixed P, n | V changes | free plunger | V₁/T₁ = V₂/T₂" and "Gay-Lussac | fixed V, n | P changes | rigid flask | P₁/T₁ = P₂/T₂", small syringe and flask icons heading each column. On "Both fix the amount" a teal band "fixed n" across both; on "both need kelvin" a deep-orange band "T in K". On "kelvin" the memory line writes large in the explainer's handwriting style: "Ratios need a true zero: always kelvin."

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A sealed, rigid steel cylinder contains gas at a hundred and fifty kilopascals and twenty degrees Celsius. It's left in the sun, and the gas warms to fifty degrees Celsius. Calculate the new pressure of the gas. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A sealed, rigid steel cylinder contains a gas at 150 kPa and 20 °C. The cylinder is left in the sun and the gas warms to 50 °C. Calculate the new pressure of the gas. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> The volume is fixed, so use Gay-Lussac's law, in kelvin. P two is a hundred and fifty times three twenty-three point one five, over two ninety-three point one five, which is a hundred and sixty-five kilopascals. Using Celsius gives three hundred and seventy-five, more than doubling the pressure on a warm afternoon. That's the classic **slip**.

Visual: card shrinks to the top. Rows: "rigid: V fixed → P₁/T₁ = P₂/T₂"; "T₁ = 293.15 K, T₂ = 323.15 K"; "P₂ = 150 × 323.15 ÷ 293.15 = 165 kPa" (red). On "slip" a chip "375 kPa (°C used)" fades in and is crossed. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A student claims that heating a gas from twenty degrees Celsius to forty degrees Celsius, at constant pressure, doubles its volume. Evaluate the student's claim. Pause here to answer.

Visual: `QuestionCard`: "A student claims: 'Heating a gas from 20 °C to 40 °C at constant pressure doubles its volume.' Evaluate the student's claim. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The claim is wrong. Doubling the Celsius number isn't doubling the temperature. In kelvin, it rises from two ninety-three to three thirteen, only about seven percent, so the volume grows by about seven percent. Saying the volume doubles is exactly the **slip** this video is about.

Visual: card shrinks. Rows: "20 °C = 293.15 K → 40 °C = 313.15 K"; "313.15 ÷ 293.15 = 1.07 → V rises about 7%" (slate). On "slip" a chip "the volume doubles" fades in and is crossed. Hold about 1 second.

### 16. conclusion and handoff
> So gas laws need kelvin, because volume and pressure are proportional to temperature measured from absolute zero, where particle motion is least. Celsius starts where water freezes, so its ratios don't describe the gas. We now have four gas laws, Boyle, Charles, Gay-Lussac and Avogadro, and each one fixes two quantities and links the other two. Could one equation hold all four? How does P V equals n R T combine the simple gas **laws**?

Visual: the memory line returns small at the top. On "four gas laws" the board clears to the final frame's layout: four law cards write in turn in a two-by-two grid (Boyle top left, Charles top right, Gay-Lussac bottom left, Avogadro bottom right), each with its fixed-quantity chip; deep-orange "T in K" tags on the Boyle, Charles and Gay-Lussac cards. On "fixes two quantities" each card's fixed-quantity chip glows in turn. On "one equation" the amber chip "one equation for all four?" writes at the centre. On "laws" the chip "Next: How does PV=nRT combine the simple gas laws?" writes. Hold about 2 seconds. This is the final frame (m2-v19 opens on it).

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. T(K) = T(°C) + 273.15. Absolute zero (0 K, −273.15 °C) is where particle motion is least. No negative kelvin.
2. Charles's law: fixed P and n, V ∝ T (K): V₁/T₁ = V₂/T₂. A free plunger moves out as the particles push harder.
3. Gay-Lussac's law: fixed V and n, P ∝ T (K): P₁/T₁ = P₂/T₂. Rigid walls cannot move, so the pressure rises.
4. Both graphs (against °C) are straight lines that extrapolate to −273.15 °C. Doubling °C does not double V or P.

Memory aid (large, on the notes screen): *Ratios need a true zero: always kelvin.*

At the end the notes cross-fade back to scene 16's final frame.

## Teaching checks

- **Does it explain causes?** Why the volume line points to −273 °C (3); why kelvin starts there (4); why V ∝ T(K) (5); why Celsius ratios fail (6); why each method point matters (7); why P rises in a rigid flask (9); why two experiments meet at one zero (10).
- **Misconceptions addressed:** doubling °C doubles V (1, 6; crossed in A2); Celsius in calculations (8; crossed in A1); gases shrink to nothing (3); "°K" (4); which law fixes what (11).
- **One idea at a time:** the puzzle (1), the data and zero (2), absolute zero (3), kelvin (4), Charles's law (5), the check (6), method (7), calculation (8), Gay-Lussac's law (9), its data (10), comparison (11).
- **Video makes it easier:** the plunger rises with each reading while the points build a line (2); the dashed line runs back to −273 °C as particles slow (3); two scales line up to show the shifted zero (4); a box's lid slides out until the pushes balance (5); two graphs meet the axis at one point (10).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 26 s and 21 s.
- **Avoided double teaching:** wall hits and push matching outside pressure (m2-v16); Boyle's law, the syringe and the sensor (m2-v17); lines of best fit and extrapolation as a skill (ws-v04, used, not retaught).
- **Syllabus coverage:** `C2-IQ4-01` "Gay-Lussac's Law (temperature)" (9, 10, 12, 13) and "Charles' Law" (1 to 8, 14, 15); "conduct investigations" (2, 7, 10) and "solve problems" (8, A1, A2). The link to the Ideal Gas Law is m2-v19's.
- **Out of scope by design:** combined gas law, PV = nRT, R, kinetic energy formula, real-gas liquefaction beyond one sentence.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: the cylinder is rigid, so V and n are fixed and P₁/T₁ = P₂/T₂ with T in kelvin: T₁ = 293.15 K, T₂ = 323.15 K (1 mark); P₂ = 150 × 323.15 ÷ 293.15 = 165 kPa (1 mark). Classic mistake (crossed): 375 kPa (°C used).

**Attempt 2 (scene 14; original wording, HSC style, 2 marks suggested).** As on the card.
Model answer: the claim is incorrect; at constant pressure V is proportional to the kelvin temperature (1 mark); 20 °C = 293.15 K and 40 °C = 313.15 K, a ratio of 1.07, so the volume increases by only about 7% (1 mark). Classic mistake (crossed): "the volume doubles".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening | 10 °C, 50.0 mL; 20 °C, 51.8 mL; 100 kPa | opening, 1 |
| Prediction | 80 °C; 62.4 mL ("about sixty-two") | 1, 2 |
| Charles data (illustrative) | 10 to 80 °C: 50.0, 51.8, 53.5, 55.3, 57.1, 58.8, 60.6, 62.4 mL | 2 |
| Absolute zero | −273.15 °C; "about −273" on the graph | 2, 3, 4, 10 |
| Kelvin | + 273.15; 0 °C = 273.15 K; 25 °C = 298.15 K | 4 |
| Ratio check | 283.15 K, 293.15 K; 1.035; 51.8 ÷ 50.0 = 1.036; °C ratio 2 (crossed) | 6 |
| Charles calculation | 45.0 mL, 20 °C → 60 °C; 293.15 K, 333.15 K; 51.1 mL; slip 135 mL | 8 |
| Secondary data (illustrative) | 0 to 100 °C: 93.2, 100.0, 106.8, 113.6, 120.5, 127.3 kPa | 10 |
| A1 | 150 kPa, 20 °C → 50 °C; 293.15 K, 323.15 K; 165 kPa; slip 375 kPa | 12, 13 |
| A2 | 20 °C → 40 °C; 293.15 K → 313.15 K; 1.07; about 7% | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 50.0 × (T + 273.15) ÷ 283.15 for T = 10 to 80 step 10: 50.00, 51.77, 53.53, 55.30, 57.07, 58.83, 60.60, 62.36.
- 293.15 ÷ 283.15 = 1.0353; 51.8 ÷ 50.0 = 1.036.
- 45.0 × 333.15 ÷ 293.15 = 51.14; 45.0 × 60 ÷ 20 = 135.
- 100.0 × (T + 273.15) ÷ 293.15 for T = 0 to 100 step 20: 93.18, 100.00, 106.82, 113.65, 120.47, 127.29.
- 150 × 323.15 ÷ 293.15 = 165.35; 150 × 50 ÷ 20 = 375.
- 313.15 ÷ 293.15 = 1.0682.

## Memory aid check

- **"Ratios need a true zero: always kelvin."** Written for this video. Meaning: every gas-law equation with T is a ratio (V/T, P/T), and a ratio only describes the gas if the scale's zero means "least motion"; kelvin's does, Celsius's does not. Assumptions checked: ideal-gas behaviour (the line extended on paper, scene 3); the amount of gas fixed (both laws); it does not apply to temperature differences (a rise of 10 °C equals a rise of 10 K), which the video does not use, so no caveat is needed in learner copy. It helps a new case: A1, A2 and m2-v19's PV = nRT.
- **Considered, not used:** "Charles: Constant Pressure; Gay-Lussac: Got a fixed Volume" (forced); the scenes' "free plunger" and "rigid flask" pictures carry the distinction instead.

## Narration length estimate

Revision 1 count (5 November; build parser rules): **6,367 characters**, 17 scenes. At 13.3 characters per second the speech is about 479 s; add about 8 s of settling (the stepping readings in 2, the extrapolation in 3, the scales in 4, the two graphs meeting in 10), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 566 s**.

## Scene list and build ids

Lesson key `c-y11-m2-v18` (route chem-y11-m2-v18; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v18`.

In order (17 scene headings, all `### N.`): hook-prediction, line-misses-zero, absolute-zero, kelvin-scale, charles-law, celsius-fails, method-limits, charles-calc, gay-lussac-law, secondary-data, partners-memory, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m2-v17's final frame into scene 1 by camera continue; 1 to 2 camera continue (the bath heats, the graph builds); 2 to 3 camera continue; 3 to 4 camera continue (the graph shifts left, the scales enter); 4 to 5 camera continue (the K axis joins the graph); 5 to 6 camera continue; 6 to 7 clear change (the rig at full width); 7 to 8 clear change; 8 to 9 clear change; 9 to 10 camera continue; 10 to 11 camera continue; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v18-learning-review.md`, `checks/c-y11-m2-v18-science-check.md`.

## Assets

Have (inspected 5 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/c4a-syringe-barrel-v1.png` and `c4a-syringe-plunger-v1.png`: opening, scenes 1 to 3, 7 (upright by rotation only).
- `public/assets/chemistry/m8-beaker-hotplate-clear-v1.png`: opening, scenes 1, 2, 7, 9 (water bath).
- `public/assets/chemistry/c8-thermometer-hot-v1.png`: opening, scenes 1, 2, 7.
- `public/assets/chemistry/m6-conical-flask-v1.png` (2048 × 2048, empty, transparent) with `m5x-stopper-v1.png` (2000 × 2000, black rubber stopper; scaled to the flask neck, uniform scaling): scenes 9, 10 (the rigid flask).
- `public/assets/physics/phys-y11-data-logger-v1.png`: scenes 9, 10.
- `y11c-gas-pressure-sensor-v1.png` (requested in `chem-y11-m2-v17.md`): scenes 9, 10.
- **Inspected, not used:** `c8-round-flask-v1.png` (has a cork and liquid inside; the gas-only flask needs to be empty); `biology/m6-water-bath-tube-v1.png` (lidded electric bath; hides the syringe); `m5x-thermometer-cold-v1.png` (blue liquid; one thermometer for all readings).

Need (new plates, Codex): none beyond m2-v17's sensor.

Coded: clamp, water tint, stirrer rod, plunger motion, particle windows, scales, `LineGraph`s with extrapolation, tables, ratio rows, partner card, law cards, calculation rows, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v18)

No new plates. Codex confirms: (1) the rotated syringe sits inside the beaker plate without the barrel crossing the beaker's front glass edge in a way that breaks the layering (barrel behind the front rim highlight, water tint over the barrel); (2) `m5x-stopper-v1.png` scaled uniformly fits the neck of `m6-conical-flask-v1.png` (if not, request a stoppered-flask plate in the same style); (3) the sensor plate from m2-v17 joins the flask's coded tube.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `lesson15.sa.html` (`l15-gaslaws-title` kelvin box, Charles and Gay-Lussac cards, "Why kelvin, and why 0 K?"; `l15-prac-title` Charles method).
3. Secondary data: search for an approved, citable school-level fixed-volume pressure-temperature dataset (for example from a state education department or a sensor maker's published experiment) and report it with its URL; otherwise confirm the illustrative values are tagged.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json` (apart from the corrected apostrophes).
6. Confirm no person, hand or face is drawn or requested (the stirrer rod moves alone); no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m2-v17's final frame, and send the final frame to the m2-v19 designer.

## YouTube metadata (draft)

Title: Why Gas Laws Need Kelvin: Charles's and Gay-Lussac's Laws | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Heat a gas from 10 °C to 20 °C and its volume does not double. Why not? Follow a gas-syringe investigation whose straight line points back to −273 °C, absolute zero, and see why the kelvin scale starts there. Then use Charles's law (constant pressure) and Gay-Lussac's law (constant volume), with secondary data that point to the same zero, and solve one calculation of each. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct investigations and solve problems to determine the relationship between the Ideal Gas Law and:"
"Gay-Lussac's Law (temperature)"
"Charles' Law"

Previous: How does changing gas volume change pressure at constant temperature? Next: How does PV=nRT combine the simple gas laws?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Secondary data (root).** The route asks for "approved secondary fixed-volume pressure data". The design uses illustrative values (tagged) until Codex finds a citable dataset (error check 3). Root decides whether tagged illustrative secondary data are acceptable if none is found.
- **2. Bath limit (science check).** 80 °C replaces the site's "toward boiling" (site note 1); confirm against current NSW school guidance and the syringe type.
- **3. Composite rig (root).** The bath rig composes existing plates (rotated syringe, beaker on hotplate, thermometer, coded clamp and water tint). If Codex's layering check fails, request one plate `y11c-syringe-water-bath-v1.png` with a separate plunger layer.
- **4. Length (learning review).** At about 566 s the video is near the cap. If the review finds it full, cut scene 7's sticky-plunger sentence (about 110 characters) first.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does scene 5's "push twice as hard, so twice the volume" follow from m2-v16; is the absolute-zero caveat clear), then the science check and Codex error check.
- Checker output (5 November): narration 6,367 characters; per scene (1 to 17): 423, 511, 437, 393, 522, 470, 331, 551, 425, 433, 306, 244, 341, 193, 277, 435, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
