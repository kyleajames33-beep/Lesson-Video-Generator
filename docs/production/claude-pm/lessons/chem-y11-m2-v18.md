# Year 11 Chemistry M2 V18: Charles's law, Gay-Lussac's law and kelvin. Why do gas volume and pressure laws require kelvin? (design)

Status: Revision 3 (7 Nov 2026): brief 218 error-check findings resolved (root). Ready to voice. Previously Revision 2 (6 Nov 2026): brief 182 findings resolved (including the secondary-data blocker) and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,380 characters, 17 scenes, about 570 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: eighteenth Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 52, between `chem-y11-m2-v17` and `chem-y11-m2-v19`; the third gas-laws video, with the Charles's law practical and secondary fixed-volume data. Templates: `chem-y11-m2-v17.md` (same designer, layout and colour key), `chem-y11-m2-v16.md`, `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation staging), `bio-y11-fa1-v05.md` (plates), `chem-m8-p02.md` (practical conventions). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v18` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Compare Charles and Gay-Lussac at their different fixed quantities; convert Celsius to kelvin and calculate one case of each."; next handoff: "How does PV=nRT combine the simple gas laws?"; practical: "Charles-law volume/temperature investigation; approved secondary fixed-volume pressure data"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson15.sa.html` (SHA256 `fddafeba74553bc550196bfae464df4d3da32f508ee29efb3501efbcbc264d1e`, recomputed, matches the route), sections `l15-gaslaws-title` and `l15-prac-title`. Used: "Always use kelvin ... T(K) = T(°C) + 273.15. Using °C gives wrong answers (and can divide by zero or go negative)"; the Charles and Gay-Lussac cards (constant P, n; constant V, n; V₁/T₁ = V₂/T₂; P₁/T₁ = P₂/T₂); "Why kelvin, and why 0 K?" (both graphs extrapolate to the same point, 0 K, −273.15 °C; cooling slows particles; absolute zero as the minimum of particle motion; never reached; no temperature below it; no negative kelvin values); the Charles method (gas syringe with a free plunger in a water bath with a thermometer, heated slowly, readings every 5 to 10 °C after thermal equilibrium, V against T in kelvin, extrapolation close to 0 K); the controlled-variables box (P kept constant by the free plunger; n fixed by sealing); the quick check (a sealed rigid steel cylinder heated: Gay-Lussac, pressure rises), which becomes attempt 1's context. Not used: the combined and ideal gas laws, R (m2-v19), the weather balloon (m2-v19), "273" without the ".15" (the course uses the data sheet's 273.15; site note 2).

Owner rules applied: as `chem-y11-m2-v17.md` (one learner question; no people, hands or faces: apparatus alone, moved by code; real apparatus as painted plates; particle windows, readouts, tables, `LineGraph`s and calculation rows coded, following HSC particle conventions; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame). Data are illustrative and tagged so.

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger ID), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger's broken apostrophes shown corrected, root decision m1-9):

- `C2-IQ4-01`: "conduct investigations and solve problems to determine the relationship between the Ideal Gas Law and:"
  - "Gay-Lussac's Law (temperature)"
  - "Charles' Law"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on m2-v17's final frame (the capped syringe upright in a beaker of water on a hotplate, plunger free; thermometer; "10 | 50.0", "20 | 51.8"; "20 °C is double 10 °C. Why isn't V doubled?"; "P steady"). Teaches: heating to 80 °C gives only 62.4 mL (prediction); the Charles data form a straight line against °C that does not pass through 0 °C, and it extrapolates to zero volume at about −273 °C; why (cooling slows particles; absolute zero, −273.15 °C, the minimum of particle motion; real gases liquefy first, so the line is extended on paper); the kelvin scale (same step size, add 273.15; no negative values); Charles's law, V ∝ T(K) at constant P and n, with the cause (the free plunger moves out until the push matches outside); the check that 51.8 mL is 3.5% more because 293.15 K is 3.5% more than 283.15 K; why Celsius ratios fail (divide by zero, negative volumes); the method and its limitations (whole barrel under water, slow heating, waiting, a sticky plunger); one Charles calculation; Gay-Lussac's law, P ∝ T(K) at constant V and n, with the cause (the walls cannot move); secondary fixed-volume data extrapolating to the same zero; the comparison of the two laws' fixed quantities. Not taught: the combined gas law and PV = nRT (m2-v19, the handoff), the kinetic energy formula (one grey tag only), real-gas behaviour near liquefaction beyond one sentence.

## Decisions

- **Learner question (route wording kept).** "Why do gas volume and pressure laws require kelvin?" The answer, in order: Celsius doubling does not double the volume (1); the volume line points to a zero at −273 °C (2); that zero is where particle motion is least, absolute zero (3); kelvin counts from there (4); measured from there, V is proportional to T (5, 6); the same zero appears for pressure at fixed volume (9, 10); so ratios need kelvin (11).
- **Opening frame (equals `chem-y11-m2-v17.md`'s final frame, same designer).** At the left, `m8-beaker-hotplate-clear-v1.png` with the syringe (`c4a-syringe-barrel-v1.png` with `c4a-syringe-plunger-v1.png`, rotated upright, nozzle down and capped) held by a coded clamp, the barrel's lower two thirds under a coded water tint; `c8-thermometer-hot-v1.png` in the water; tag "plunger free: P steady"; at the right, the table "T (°C) | V (mL)": "10 | 50.0", "20 | 51.8"; amber chip "20 °C is double 10 °C. Why isn't V doubled?"; conditions strip "P steady"; the "Next" chip, which fades.
- **Prediction (3 s, scene 1).** "Heat on to 80 °C, eight times 10. Will the volume be eight times as big, about twice as big, or only a little bigger?" Answer: only a little bigger, 62.4 mL.
- **Charles data (illustrative, from V = 50.0 × T(K) ÷ 283.15; author note a).** 10 → 50.0; 20 → 51.8; 30 → 53.5; 40 → 55.3; 50 → 57.1; 60 → 58.8; 70 → 60.6; 80 → 62.4 mL. The volume rises by about 1.8 mL every 10 °C. Plotted on a °C axis that runs from −300 to 100 °C so the extrapolation is visible; zero volume at −273 °C. The method starts in cold water (ice added to reach 10 °C), as the site's method starts "from room temperature"; tagged "illustrative data".
- **Absolute zero (scenes 2, 3; site's "Why kelvin, and why 0 K?").** Said as "the temperature where the particles would have the least motion possible", not "particles stop" (the site's "would reach a minimum" wording; quantum zero-point motion is an author note, not learner copy). The necessary caveat is spoken: a real gas turns to a liquid long before, so the line is extended on paper (otherwise students infer gases shrink to nothing).
- **Kelvin (scene 4).** Same-size step, add 273.15; 0 °C = 273.15 K and 25 °C = 298.15 K (the data sheet's pair, linking m2-v16's molar volumes); "K, not °K" as a grey chip.
- **Why V ∝ T(K) (scene 5).** On the kelvin scale, temperature is proportional to the particles' average energy of motion (grey tag; "kinetic energy" not spoken, as in m2-v16). Doubling T(K) doubles the push the same particles give in the same volume, so the free plunger slides out until the push per square metre is back to its steady value, which takes twice the volume (brief 182 finding 2: a free vertical plunger holds the pressure approximately steady under its weight and the outside pressure, not exactly at room pressure; the 100 kPa figure assumes a negligible or counterbalanced plunger load). Qualitative; author note b.
- **The 3.5% check (scene 6).** 293.15 ÷ 283.15 = 1.035 ≈ 51.8 ÷ 50.0 = 1.036 (51.8 is a rounded volume, so the screen shows ≈, not =; brief 182 finding 4). This makes the hook's puzzle resolve with the opening data, not a new example. Celsius ratio 20 ÷ 10 = 2 shown crossed. Divide by zero at 0 °C, negative volume at −10 °C (site).
- **Method and limitations (scene 7; site method plus three limitations).** Keep the whole gas-filled barrel under water (only the gas at the bath's temperature follows the reading); heat slowly and stir; wait until the volume stops changing; check the plunger slides freely (a sticky plunger lags, so the volume reads low and the pressure is not quite constant). The site's "toward boiling" is replaced by 80 °C (the syringe scale and safety; author note c). Apparatus condition (brief 182 finding 3): use a gas syringe and seals whose manufacturer rating covers 80 °C water, under the school's approved hot-water method; a generic plastic syringe is not assumed suitable. Shown as a safety strip in scene 7; no speech.
- **Charles calculation (scene 8; original numbers).** 45.0 mL at 20 °C warmed to 60 °C at constant pressure: 45.0 × 333.15 ÷ 293.15 = 51.1 mL. Celsius slip 135 mL shown crossed in the teaching, so attempt 1 can cross a different law's slip.
- **Gay-Lussac's law (scene 9).** A rigid flask (`m6-conical-flask-v1.png` with `m5x-stopper-v1.png`) connected by a coded tube to the pressure sensor from m2-v17 (`y11c-gas-pressure-sensor-v1.png`), in the water bath. The walls cannot move, so faster particles hit harder and more often and the pressure rises.
- **Secondary data (scene 10; route "approved secondary fixed-volume pressure data"; Revision 2, brief 182 blocker and root decision 22).** The published fixed-volume, fixed-amount air table from OpenStax, *Chemistry: Atoms First* 2e, section 8.2, figure 8.11 (OpenStax, Rice University; https://openstax.org/books/chemistry-atoms-first-2e/pages/8-2-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law), copied unchanged: −100 °C → 36.0; −50 → 46.4; 0 → 56.7; 50 → 67.1; 100 → 77.5; 150 → 88.0 kPa (the source also lists rounded kelvin values 173 to 423 K, not shown). Its line extrapolates to zero pressure at about −273 °C (fit −273.08 °C; work/brief182/v18-published-secondary-data.json), matching the volume line (the site's "both extrapolate back to the same point"). Citation tag on screen: "secondary data: OpenStax Chemistry 2e, Fig. 8.11". The Charles values in scenes 1 to 3 stay tagged "illustrative data" throughout (they are calculated, not measured). This does not approve repeating the source's conditions in a school.
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
- **Board layout (Revision 2, high-risk redesign):** heading top left; conditions strip top right ("P steady" for Charles; "V fixed" for Gay-Lussac). Revision 1 kept the rig at the left and the graph or rows at the right for scenes 1 to 6 (about 207 s). Revision 2 stages, each under about 41 s: the bath rig filling the frame (1); the V–T graph at full width with the rig as a stepping thumbnail (2); the cooling slider stage (3); the full-frame scale strip (4); the particle box beside the re-labelled graph (5); the full-width ratio check (6); the bath rig at full width with its safety strip (7); the calculation layout (8); the flask rig (9); the P–T graph at full width (10); the partner card (11).
- **Colour roles (Revision 2, fixed for the whole video):** pressure red; volumes slate blue; temperature orange (°C) and deep orange (K); absolute zero navy; conditions strip slate with a thermometer icon; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the quantity they mark; illustrative data tagged grey; the published data's citation tag slate.
- **Type sizes (Revision 2, 1080p):** the current working row at least 44 px (rows 48 px); live readouts (T, V, the logger screen) about 52 px; table cells 40 px; supporting lines and givens 30 to 36 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the cooling slider (scene 3).** A live control on the core idea (the volume line points to a temperature of least motion): an orange slider on the graph's T axis drags from 80 °C down towards −273 °C; two live readouts (52 px) update, "T (°C)" (orange) and "V (mL)" (slate, from the illustrative model V = 50.0 × (T + 273.15) ÷ 283.15: 62.4 → 50.0 → 25.0 → 0), while a marker rides the line and the particle window's trails shorten in step. Below about −200 °C the slider enters a grey zone "real gases liquefy before this" and the line turns dashed. Readouts use the illustrative model (author note a).

Author notes (not learner copy):
(a) Charles data: V = 50.0 × (T + 273.15) ÷ 283.15: 10 → 50.00; 20 → 51.77; 30 → 53.53; 40 → 55.30; 50 → 57.07; 60 → 58.83; 70 → 60.60; 80 → 62.36 mL. Slope 0.1766 mL per °C; V = 0 at −273.15 °C. 80 °C against 10 °C: 62.4 ÷ 50.0 = 1.25 (prediction answer).
(b) Kinetic theory: for an ideal gas the average translational kinetic energy is (3/2)kT, so with T in kelvin the push of a fixed number of particles in a fixed volume is proportional to T. At absolute zero a real substance retains zero-point motion, so "least motion possible" is used, not "no motion".
(c) Method: 80 °C keeps the volume inside a 100 mL scale (62.4 mL). It is not a verified rating for any plastic syringe (brief 182 finding 3): the exact syringe and seals need a manufacturer rating that covers 80 °C water, used under the school's approved hot-water method with the usual heated-water precautions. Public NSW guidance alone does not approve this exact apparatus and temperature.
(d) Ratios: 293.15 ÷ 283.15 = 1.0353; 51.8 ÷ 50.0 = 1.036.
(e) Charles calculation: 45.0 × 333.15 ÷ 293.15 = 51.14 → 51.1 mL; Celsius slip 45.0 × 60 ÷ 20 = 135 mL.
(f) Secondary data (Revision 2): OpenStax Chemistry: Atoms First 2e, figure 8.11, unchanged: −100, −50, 0, 50, 100, 150 °C; 36.0, 46.4, 56.7, 67.1, 77.5, 88.0 kPa. Least-squares slope 0.2078 kPa per °C, intercept 56.75 kPa at 0 °C, P = 0 at −273.08 °C ("about minus two hundred and seventy-three"). Revision 1's calculated table (93.2 to 127.3 kPa) is withdrawn: it came from the law being taught.
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
> Here's the syringe in its water bath, with the plunger free to move, so the gas pressure stays steady. At ten degrees, the air fills fifty millilitres. At twenty degrees, the Celsius number has doubled, but the volume has only crept up to fifty-one point eight. So, quick prediction. If we keep heating to eighty degrees, eight times ten, will the volume be eight times as big, about twice as big, or only a little **bigger**?

Visual: opens on m2-v17's final frame; the "Next" chip fades; the beaker, syringe and thermometer plates grow to fill the left two thirds at uniform scale, the table at the right (40 px). On "plunger free to move" the tag "plunger free: P steady" glows (slate hand tag "free to move"). On "fifty millilitres" row "10 | 50.0" glows; on "fifty-one point eight" row "20 | 51.8" glows and the amber chip pulses, orange hand tags "× 2" beside the temperatures and slate "only +1.8" beside the volumes. On "eighty degrees" the thermometer label shows "80 °C?" and chips "× 8", "× 2", "a little". On "bigger" the 3 s `Countdown` ring runs. Heading writes: "Charles, Gay-Lussac and kelvin".

### 2. the line that misses zero
> Only a little bigger, about sixty-two millilitres. Here's the full set. Heat the water slowly, and at each temperature, wait for the gas to reach the water's temperature before reading the volume. Every ten degrees, the volume grows by the same amount, so the points make a straight line. But the line doesn't go through zero degrees. So where would the volume reach zero? Extrapolate, which means extend the line beyond the data, and it reaches zero volume at about minus two hundred and seventy-three **degrees**.

Visual: "a little" ticks. Stage change: the V–T graph grows to full width (axis "T (°C)" from −300 to 100); the bath rig shrinks to a thumbnail at the top left, where the hotplate glows and the plunger rises as the thermometer label steps 30, 40 ... 80 °C, each point plotting as it is read: 53.5, 55.3, 57.1, 58.8, 60.6, 62.4 mL (tag "illustrative data"). On "Only a little bigger" "62.4 mL" is framed in a dark-ink box with a green tick. On "wait for the gas" a small clock chip "wait until V stops changing". On "straight line" the line of best fit draws (slate hand tag "+1.8 mL every 10 °C"). On "zero degrees" a ring at the "0 °C" gridline shows the line still well above zero volume (red hand tag "V ≠ 0 at 0 °C"). On "Extrapolate" gloss chip "extrapolate: extend the line beyond the data"; on "degrees" a dashed line runs back to the T axis, meeting it at "−273 °C" (navy ring, navy pen arrow).

### 3. absolute zero
> That's no accident. Cooling a gas slows its particles down, so they push less, and at a fixed pressure the gas shrinks. The line points to the temperature where the particles would have the least motion possible, and push on nothing. That's absolute zero, minus two hundred and seventy-three point one five degrees Celsius. A real gas turns into a liquid long before then, so this end of the line is only extended on paper, not **measured**.

Visual: stage change to the cooling slider stage: the graph at the right, a large particle window from the syringe at the left. On "slows its particles down" the simulation runs: the orange slider on the T axis drags down from 80 °C; the live readouts "T (°C)" and "V (mL)" (52 px) fall together, a marker riding the line; the particles' trails shorten and the plunger sinks (orange hand tag "colder: slower"). On "least motion possible" the marker reaches the dashed line's end, which glows; the particles nearly still (navy hand tag "least motion"). On "absolute zero" the label writes at the navy ring, framed: "absolute zero: −273.15 °C". On "turns into a liquid" the slider passes about −200 °C into a grey zone marked "real gases liquefy before this"; on "measured" tags on the graph: "data range (illustrative)" over the solid section, "extended on paper: not measured" over the dashed section.

### 4. the kelvin scale
> The kelvin scale starts at absolute zero. Each kelvin is the same size step as a degree Celsius, so to convert, you just add two hundred and seventy-three point one five. Zero degrees Celsius is two seventy-three point one five kelvin, and twenty-five degrees is two ninety-eight point one five. There are no negative kelvin temperatures, because nothing can have less motion than the **minimum**.

Visual: stage change: the scale strip fills the frame: two tall vertical scales side by side, "°C" (orange) and "K" (deep orange), ticks lined up. On "starts at absolute zero" the K scale's "0 K" sits level with "−273.15 °C" (navy pen line across both). On "same size step" one 10-degree interval on each scale highlights, equal heights (hand tag "same size"). On "add two hundred and seventy-three point one five" the strip "T(K) = T(°C) + 273.15" writes (48 px), framed. On "Zero degrees Celsius" pairs light: "0 °C = 273.15 K"; then "25 °C = 298.15 K" (tag "the data sheet's two molar-volume temperatures"). On "minimum" the region below 0 K greys out (red hand tag "no negative kelvin"); grey chip "write K, not °K".

### 5. Charles's law
> Now the data make sense. Measured from absolute zero, the gas's volume is proportional to its temperature. On the kelvin scale, temperature tracks how much the particles are moving. So double the kelvin temperature, and the same particles push twice as hard on the walls. The free plunger slides out until the push on each square metre is back to its steady value, and that takes twice the volume. That's Charles's law. For a fixed amount of gas at constant pressure, V one over T one equals V two over T **two**, with T in kelvin.

Visual: stage change: the V–T graph at the right re-labels its axis with a second scale beneath, "T (K)", its zero at the navy ring; the line now runs from the K origin. On "proportional" deep-orange hand tag "V ∝ T (K)". On "tracks how much the particles are moving" grey tag "kelvin temperature: proportional to the average energy of motion". On "push twice as hard" a large particle box at the left, particles speeding up and outward push arrows doubling (red hand tag "push × 2"). On "slides out" the box's lid slides out until its outside arrows ("P steady") match again; slate hand tag "V × 2". On "Charles's law" a navy card: "Charles's law: for a fixed amount of gas at constant pressure, V ∝ T (in K)"; on "two" strip "V₁/T₁ = V₂/T₂ (T in K)", framed.

### 6. why Celsius fails
> Check it with our first two readings. Ten degrees is two eighty-three point one five kelvin, and twenty degrees is two ninety-three point one five. That's only about three and a half percent warmer, which is exactly how much the volume grew. Celsius ratios mean nothing, because zero degrees Celsius is just where water freezes, not where motion stops. Put Celsius into a gas law, and zero degrees would mean dividing by zero, and minus ten would give a negative **volume**.

Visual: stage change: the ratio check at full width (48 px rows). On "Ten degrees" row "10 °C = 283.15 K"; "20 °C = 293.15 K". On "three and a half percent" row "293.15 ÷ 283.15 = 1.035" (deep orange) beside "51.8 ÷ 50.0 = 1.036" (slate), linked by "≈" (grey tag "51.8 is rounded"), framed with a green tick. Above it a row "20 ÷ 10 = 2" appears and is crossed in red (red hand tag "Celsius ratio: meaningless"). On "where water freezes" a small °C scale's zero glows with tag "0 °C: water freezes". On "dividing by zero" chip "V/0 ?" crossed; on "volume" chip "−10 °C → negative V?" crossed (red hand tag "impossible").

### 7. method points and limitations
> A few method points make this work. Keep the whole barrel under the water, so all of the gas is at the temperature you read. Heat slowly and stir, and wait until the volume stops changing. And check that the plunger slides freely. A sticky plunger lags behind, so the volume reads low, and the pressure isn't quite **constant** either.

Visual: back to the bath rig at full width, with a slate safety strip along the top: "gas syringe rated for 80 °C water (check the maker's rating); school hot-water method". On "whole barrel under the water" the water tint covers the barrel's gas-filled part (tick); a ghost version with the top third above the water is crossed (red hand tag "gas above the water: wrong T"). On "Heat slowly and stir" a coded stirrer rod moves in the water (no hand; the rod alone). On "stops changing" the clock chip. On "slides freely" the plunger outline glows teal (teal pen ring); on "lags behind" a ghost plunger sits a little below where it should be (amber bracket "reads low"); on "constant" chip "friction: P not quite constant".

### 8. a Charles's law calculation
> Here's a calculation. A gas syringe holds forty-five millilitres of air at twenty degrees. At constant pressure, it's warmed to sixty degrees. What's the new volume? First, convert both temperatures to kelvin, two ninety-three point one five and three thirty-three point one five. Then V two is V one times T two over T one, so forty-five times three thirty-three point one five, over two ninety-three point one five. That's fifty-one point one **millilitres**. Using Celsius would give a hundred and thirty-five, tripling the volume for a gentle **warm-up**.

Visual: board clears to the calculation layout. Task strip: "Find V₂ (constant P, n)". Equation strip: "V₁/T₁ = V₂/T₂ (T in K)". Givens card: "V₁ = 45.0 mL, T₁ = 20 °C" and "T₂ = 60 °C, V₂ = ?". On "convert both temperatures" row (48 px) "T₁ = 20 + 273.15 = 293.15 K; T₂ = 60 + 273.15 = 333.15 K" (deep orange; hand tag "kelvin first"). Next row "V₂ = V₁ × T₂ ÷ T₁ = 45.0 × 333.15 ÷ 293.15", earlier rows dimming to 34 px; on "millilitres" row "= 51.1 mL" (slate, 52 px), framed in a dark-ink box with a green tick, with chip "T ↑ a little, V ↑ a little ✓". On "warm-up" a chip "135 mL (°C used)" fades in and is crossed in red (red hand tag "tripled? no").

### 9. Gay-Lussac's law
> Now fix the volume instead. Seal some air in a rigid flask, connect the pressure sensor, and warm the flask in a water bath. The walls can't move, so the gas can't expand. Its faster particles hit the walls harder and more often, and the pressure rises. That's Gay-Lussac's law. For a fixed amount of gas at constant volume, the pressure is proportional to the kelvin temperature, so P one over T one equals P two over T **two**.

Visual: board clears to the flask rig, filling the frame: `m6-conical-flask-v1.png` with `m5x-stopper-v1.png` in its neck, a coded tube to `y11c-gas-pressure-sensor-v1.png` and the logger (`phys-y11-data-logger-v1.png`, readout "100.0 kPa", 52 px); the flask stands in the beaker on the hotplate (`m8-beaker-hotplate-clear-v1.png`, coded water tint). Conditions strip "V fixed". On "The walls can't move" the flask outline flashes navy (navy hand tag "rigid: V fixed"). On "faster particles" a particle window in the flask: trails lengthen, wall-hit flashes brighter and more frequent; the readout climbs (red hand tag "harder and more often"). On "Gay-Lussac's law" a navy card: "Gay-Lussac's law: for a fixed amount of gas at constant volume, P ∝ T (in K)"; on "two" strip "P₁/T₁ = P₂/T₂ (T in K)", framed.

### 10. secondary data: the same zero
> Here's some secondary data, meaning data someone else collected, for air at a fixed volume, from the OpenStax Chemistry textbook. From minus a hundred to a hundred and fifty degrees, the pressure climbs from thirty-six to eighty-eight kilopascals, in a straight line. Extended backwards, it reaches zero pressure at about minus two hundred and seventy-three degrees, the same point as the volume line. So both point to the same absolute **zero**.

Visual: stage change: the P–T graph at full width (axis "T (°C)" from −300 to 200), with the table at the right (40 px): "T (°C) | P (kPa)": "−100 | 36.0", "−50 | 46.4", "0 | 56.7", "50 | 67.1", "100 | 77.5", "150 | 88.0"; slate citation tag "secondary data: OpenStax, Chemistry: Atoms First 2e, Fig. 8.11 (°C and kPa columns, unchanged)". On "secondary data" gloss chip "secondary data: collected by someone else". On "straight line" the six points plot with their line of best fit (red hand tag "straight"). On "Extended backwards" a dashed line to the axis; on "the same point as the volume line" the V–T graph (tag "illustrative data") slides in above it, both dashed lines meeting the axis at the same navy ring "−273 °C" (navy pen ring). On "zero" label "0 K", framed.

### 11. partners, and the memory line
> So the two laws are partners. Charles's law fixes the pressure and lets the volume change, like the free plunger. Gay-Lussac's law fixes the volume and lets the pressure change, like the rigid flask. Both fix the amount of gas, and both need kelvin. Remember: ratios need a true zero, so always use **kelvin**.

Visual: partner card, two columns at full width: "Charles | fixed P, n | V changes | free plunger | V₁/T₁ = V₂/T₂" and "Gay-Lussac | fixed V, n | P changes | rigid flask | P₁/T₁ = P₂/T₂", the syringe and flask plates small at the head of each column. On "Both fix the amount" a teal band "fixed n" across both; on "both need kelvin" a deep-orange band "T in K" (deep-orange hand tag "both!"). On "kelvin" the memory line writes large as a framed card in the explainer's handwriting style (dark-ink frame; navy "true zero", deep-orange "kelvin"): "Ratios need a true zero: always kelvin."

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A sealed, rigid steel cylinder contains gas at a hundred and fifty kilopascals and twenty degrees Celsius. It's left in the sun, and the gas warms to fifty degrees Celsius. Calculate the new pressure of the gas. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A sealed, rigid steel cylinder contains a gas at 150 kPa and 20 °C. The cylinder is left in the sun and the gas warms to 50 °C. Calculate the new pressure of the gas. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> The volume is fixed, so use Gay-Lussac's law, in kelvin. P two is a hundred and fifty times three twenty-three point one five, over two ninety-three point one five, which is a hundred and sixty-five kilopascals. Using Celsius gives three hundred and seventy-five, more than doubling the pressure on a warm afternoon. That's the classic **slip**.

Visual: card shrinks to the top. Rows: "rigid: V fixed → P₁/T₁ = P₂/T₂"; "T₁ = 293.15 K, T₂ = 323.15 K"; "P₂ = 150 × 323.15 ÷ 293.15 = 165 kPa" (red), framed in a dark-ink box with a green tick. On "slip" a chip "375 kPa (°C used)" fades in and is crossed in red (red hand tag "Celsius: more than doubled"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A student claims that heating a gas from twenty degrees Celsius to forty degrees Celsius, at constant pressure, doubles its volume. Evaluate the student's claim. Pause here to answer.

Visual: `QuestionCard`: "A student claims: 'Heating a gas from 20 °C to 40 °C at constant pressure doubles its volume.' Evaluate the student's claim. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The claim is wrong. Doubling the Celsius number isn't doubling the temperature. In kelvin, it rises from two ninety-three to three thirteen, only about seven percent, so the volume grows by about seven percent. Saying the volume doubles is exactly the **slip** this video is about.

Visual: card shrinks. Rows: "20 °C = 293.15 K → 40 °C = 313.15 K"; "313.15 ÷ 293.15 = 1.07 → V rises about 7%" (slate), framed in a dark-ink box with a green tick. On "slip" a chip "the volume doubles" fades in and is crossed in red (red hand tag "only 7% warmer"). Hold about 1 second.

### 16. conclusion and handoff
> So gas laws need kelvin, because volume and pressure are proportional to temperature measured from absolute zero, where particle motion is least. Celsius starts where water freezes, so its ratios don't describe the gas. We now have four gas laws, Boyle, Charles, Gay-Lussac and Avogadro, and each one fixes two quantities and links the other two. Could one equation hold all four? How does P V equals n R T combine the simple gas **laws**?

Visual: the memory line returns small at the top. On "four gas laws" the board clears to the final frame's layout: four law cards write in turn in a two-by-two grid (Boyle top left, Charles top right, Gay-Lussac bottom left, Avogadro bottom right), each with its fixed-quantity chip; deep-orange "T in K" tags on the Boyle, Charles and Gay-Lussac cards. On "fixes two quantities" each card's fixed-quantity chip glows in turn. On "one equation" the amber chip "one equation for all four?" writes at the centre. On "laws" the chip "Next: How does PV=nRT combine the simple gas laws?" writes. Hold about 2 seconds. This is the final frame (m2-v19 opens on it).

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. T(K) = T(°C) + 273.15.
2. Absolute zero, 0 K: the least particle motion.
3. Charles: fixed P, n: V₁/T₁ = V₂/T₂.
4. Gay-Lussac: fixed V, n: P₁/T₁ = P₂/T₂.
5. Doubling °C does not double V or P.

Memory aid (framed card, on the notes screen): *Ratios need a true zero: always kelvin.*

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
| Opening | 10 °C, 50.0 mL; 20 °C, 51.8 mL; P steady (about 100 kPa, plunger load negligible) | opening, 1 |
| Prediction | 80 °C; 62.4 mL ("about sixty-two") | 1, 2 |
| Charles data (illustrative) | 10 to 80 °C: 50.0, 51.8, 53.5, 55.3, 57.1, 58.8, 60.6, 62.4 mL | 2 |
| Absolute zero | −273.15 °C; "about −273" on the graph | 2, 3, 4, 10 |
| Kelvin | + 273.15; 0 °C = 273.15 K; 25 °C = 298.15 K | 4 |
| Ratio check | 283.15 K, 293.15 K; 1.035 ≈ 51.8 ÷ 50.0 = 1.036 (rounded volume); °C ratio 2 (crossed) | 6 |
| Charles calculation | 45.0 mL, 20 °C → 60 °C; 293.15 K, 333.15 K; 51.1 mL; slip 135 mL | 8 |
| Secondary data (published, OpenStax Chemistry: Atoms First 2e Fig. 8.11, °C and kPa columns; kelvin column not shown) | −100, −50, 0, 50, 100, 150 °C: 36.0, 46.4, 56.7, 67.1, 77.5, 88.0 kPa; zero at about −273 °C (fit −273.08) | 10 |
| A1 | 150 kPa, 20 °C → 50 °C; 293.15 K, 323.15 K; 165 kPa; slip 375 kPa | 12, 13 |
| A2 | 20 °C → 40 °C; 293.15 K → 313.15 K; 1.07; about 7% | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 50.0 × (T + 273.15) ÷ 283.15 for T = 10 to 80 step 10: 50.00, 51.77, 53.53, 55.30, 57.07, 58.83, 60.60, 62.36.
- 293.15 ÷ 283.15 = 1.0353; 51.8 ÷ 50.0 = 1.036.
- 45.0 × 333.15 ÷ 293.15 = 51.14; 45.0 × 60 ÷ 20 = 135.
- OpenStax table unchanged (36.0, 46.4, 56.7, 67.1, 77.5, 88.0 kPa at −100 to 150 °C step 50): least-squares slope 0.2078 kPa per °C, intercept 56.75 kPa, zero at −273.08 °C.
- 150 × 323.15 ÷ 293.15 = 165.35; 150 × 50 ÷ 20 = 375.
- 313.15 ÷ 293.15 = 1.0682.

## Memory aid check

- **"Ratios need a true zero: always kelvin."** Written for this video. Meaning: every gas-law equation with T is a ratio (V/T, P/T), and a ratio only describes the gas if the scale's zero means "least motion"; kelvin's does, Celsius's does not. Assumptions checked: ideal-gas behaviour (the line extended on paper, scene 3); the amount of gas fixed (both laws); it does not apply to temperature differences (a rise of 10 °C equals a rise of 10 K), which the video does not use, so no caveat is needed in learner copy. It helps a new case: A1, A2 and m2-v19's PV = nRT.
- **Considered, not used:** "Charles: Constant Pressure; Gay-Lussac: Got a fixed Volume" (forced); the scenes' "free plunger" and "rigid flask" pictures carry the distinction instead.

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **6,380 characters**, 17 scenes (Revision 1: 6,367). Revision 2 adds about 3 s of settling for its simulation and stage changes to the estimate below. At 13.3 characters per second the speech is about 479 s; add about 8 s of settling (the stepping readings in 2, the extrapolation in 3, the scales in 4, the two graphs meeting in 10), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 570 s** (Revision 1: about 566 s).

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
3. Secondary data: confirm scene 10's table matches OpenStax Chemistry: Atoms First 2e figure 8.11 unchanged, with the citation tag on screen; confirm the Charles values (scenes 1 to 3) are tagged illustrative wherever shown.
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

- **1. Secondary data (resolved, Revision 2).** Brief 182 found a citable published table (OpenStax figure 8.11); scene 10 uses it unchanged with its citation, as root decision 22 requires.
- **2. Bath limit (Revision 2).** 80 °C replaces the site's "toward boiling" (site note 1). Brief 182: no generic plastic syringe is assumed suitable; the method note and scene 7's safety strip require a gas syringe rated for 80 °C water and the school's approved hot-water method. The exact syringe remains a school choice.
- **3. Composite rig (root).** The bath rig composes existing plates (rotated syringe, beaker on hotplate, thermometer, coded clamp and water tint). If Codex's layering check fails, request one plate `y11c-syringe-water-bath-v1.png` with a separate plunger layer.
- **4. Length (learning review).** At about 566 s the video is near the cap. If the review finds it full, cut scene 7's sticky-plunger sentence (about 110 characters) first.

## Review notes

- Revision 1 was reviewed by brief 182 (1 blocker, 3 should fix, 0 optional); every finding is resolved in Revision 2 (see "Revision 2"). Earlier note: Revision 1 had no independent review. Next: student learning review (does scene 5's "push twice as hard, so twice the volume" follow from m2-v16; is the absolute-zero caveat clear), then the science check and Codex error check.
- Checker output (5 November): narration 6,367 characters; per scene (1 to 17): 423, 511, 437, 393, 522, 470, 331, 551, 425, 433, 306, 244, 341, 193, 277, 435, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

- Checker output (Revision 2, 6 November): narration 6,380 characters (sum of scene strings); per scene (1 to 17): 422, 511, 437, 393, 527, 470, 331, 551, 425, 442, 306, 244, 341, 193, 277, 435, 75; no em dash; every bold cue quoted in its scene's Visual in spoken order. Scene 10's cue "Extend it backwards" became "Extended backwards".

## Revision 2 (6 Nov 2026)

Brief 182 findings (`checks/c-y11-m2-v18-learning-review.md`, `checks/c-y11-m2-v18-science-check.md`):
1. Data provenance (blocker): scene 10 now uses the published fixed-volume air table from OpenStax *Chemistry: Atoms First* 2e, figure 8.11, unchanged (−100 to 150 °C; 36.0 to 88.0 kPa), with a citation tag on screen; the narrated range is "minus a hundred to a hundred and fifty degrees" and "thirty-six to eighty-eight kilopascals", and the extrapolation is "about minus two hundred and seventy-three" (fit −273.08 °C). Revision 1's calculated table is withdrawn. The Charles values stay tagged "illustrative data", and scene 3's "measured" tag over the data now reads "data range (illustrative)". The closing line says "both point to the same absolute zero" rather than "two different measurements". Scene 10 is 442 characters (Revision 1: 433).
2. Shared movable-boundary condition (should fix): scene 1 says "the gas pressure stays steady" (was "stays at room pressure"); scene 5 says the plunger slides out "until the push on each square metre is back to its steady value" (was "matches the room again"); the opening tag, conditions strip and scene 5 arrows read "P steady". The Decisions note the negligible or counterbalanced load assumption. Matches m2-v17's final frame.
3. Apparatus temperature rating (should fix): author note (c) no longer claims 80 °C is below plastic syringes' softening range; the method decision and a scene 7 safety strip require a gas syringe rated for 80 °C water and the school's approved hot-water method. No speech change.
4. Rounded equality (should fix): scene 6 links 1.035 and 1.036 with "≈" and a grey tag "51.8 is rounded". No speech change.

Visual upgrade (high-risk design: scene-level redesign of the long stretches; teaching logic unchanged):
- Scene 1: the beaker, syringe and thermometer plates fill the frame in the first 20 s.
- Redesign of scenes 1 to 6 (about 207 s with the rig at the left and the graph at the right): eleven stages through scene 11 (anchor, full-width V–T graph, cooling slider, scale strip, particle box, ratio check, rig with safety strip, calculation, flask rig, P–T graph, partner card), none longer than about 41 s.
- Live control: the cooling slider (scene 3) drives T (°C) and V (mL) readouts along the line towards absolute zero, with the particle trails shortening and a grey "real gases liquefy" zone.
- Framed answers with a green tick: 62.4 mL (2), absolute zero (3), the conversion strip (4), the Charles and Gay-Lussac strips (5, 9), the ratio check (6), 51.1 mL (8), 0 K (10), 165 kPa (13), "about 7%" (15). Crossed slips carry red hand tags (Celsius ratio, V/0, 135 mL, 375 kPa, "the volume doubles").
- Hand tags and pen marks in role colours in every teaching scene (1 to 11).
- Memory line as a framed card (scene 11 and the notes screen); key notes cut to five short bullets.
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- No new plate requests (the gas pressure sensor was delivered by brief 182; the other plates are reused).

Counts: 6,380 characters (Revision 1: 6,367); about 566 to about 570 s.

## Revision 3 (7 Nov 2026)

Brief 218 error check (`checks/c-y11-m2-v18-rev2-error-check.md`), should-fix finding resolved (root):
- Scene 10: the on-screen citation now names the inspected source, "OpenStax, Chemistry: Atoms First 2e, Fig. 8.11", and identifies the table as the unchanged °C and kPa columns (the publisher's rounded kelvin column, 173 to 423 K, is not shown). The Numbers used row says the same. The six row pairs are unchanged. The spoken "the OpenStax Chemistry textbook" stays (true of the Atoms First edition).
- No speech change. Narration 6,380 characters (sum of 17 scene strings), about 570 s. Bold cues quoted in spoken order; no em dashes.
