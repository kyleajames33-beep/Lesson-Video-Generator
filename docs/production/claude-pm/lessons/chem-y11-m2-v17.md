# Year 11 Chemistry M2 V17: Boyle's law. How does changing gas volume change pressure at constant temperature? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,763 characters, 16 scenes, about 520 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: seventeenth Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 51, between `chem-y11-m2-v16` and `chem-y11-m2-v18`; the second gas-laws video and the Boyle's law practical. Templates: `chem-y11-m2-v16.md` (same series, layout and colour key), `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation staging), `bio-y11-fa1-v05.md` (plates), `chem-m8-p02.md` (practical conventions). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v17` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Explain Boyle law with collisions and calculate a two-state change; record a sealed syringe pressure-volume series and test P against 1/V."; next handoff: "Why do gas volume and pressure laws require kelvin?"; practical: "Boyle-law syringe investigation"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson15.sa.html` (SHA256 `fddafeba74553bc550196bfae464df4d3da32f508ee29efb3501efbcbc264d1e`, recomputed, matches the route), sections `l15-gaslaws-title` and `l15-prac-title`. Used: Boyle's law card ("Constant T, n; P and V inversely proportional; P₁V₁ = P₂V₂"); "Pressure and volume can be in any consistent units for the ratio laws"; the P–V graph as "a falling curve"; the practical card (gas syringe trapping a fixed volume of air connected to a pressure sensor through a short length of tubing, sealed; change the volume in small steps and record pressure and volume; "do not touch or warm the syringe barrel"; plot P against V for a curve and P against 1/V for "a straight line through the origin"); the controlled-variables box (T controlled; n fixed by sealing); the true-or-false check (P against 1/V straight, P against V curved); the drill question (2.0 L at 100 kPa compressed to 1.0 L gives 200 kPa), reused as the hook's doubling. Not used: Charles, Gay-Lussac and kelvin (m2-v18), the combined and ideal gas laws (m2-v19), the "gradient equal to nRT" sentence (true, but it needs PV = nRT; m2-v19), "adding masses to a plunger platform" (the sensor method is simpler to show and read).

Owner rules applied: as `chem-y11-m2-v16.md` (one learner question; no people, hands or faces: the plunger is moved by code, no hand on it; real apparatus as painted plates; particle windows, readouts, tables, graphs and calculation rows coded, following HSC particle conventions: particles as small circles, far apart, straight-line paths between collisions; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame). Data are illustrative and tagged so.

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger ID), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger's broken apostrophes shown corrected, root decision m1-9):

- `C2-IQ4-01`: "conduct investigations and solve problems to determine the relationship between the Ideal Gas Law and:"
  - "Boyle's Law"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on m2-v16's final frame (the sealed syringe, plunger ghosted from 100 mL to 50 mL, twelve particles, "same gas, same n, same T", "V halves → P = ?", "T = 25 °C (steady)"). Teaches: halving the volume doubles the pressure (prediction); the collision cause (same particles, same average speed, so each hit is as hard, but twice as many particles near each patch of wall, so twice the hits per second); inverse proportion and PV constant; Boyle's law with its two fixed quantities (T and n) and why each must be fixed (warming, leaks, fast squeezing); the syringe and pressure-sensor investigation (variables, method); a results table and the PV check; the P against V curve and why P against 1/V is plotted; a limitation found in the data (gas in the tube; leaks) and its fix; a two-state calculation P₁V₁ = P₂V₂ with any consistent units. Not taught: temperature changes and kelvin (m2-v18, the handoff), the combined and ideal gas laws (m2-v19), real-gas deviations at high pressure (m2-v19's assumptions).

## Decisions

- **Learner question (route wording kept).** "How does changing gas volume change pressure at constant temperature?" The answer, in order: halving the volume doubles the pressure (1); because the same particles hit each patch of wall twice as often, each hit as hard as before (2); so P × V stays constant, Boyle's law (3); only while T and n stay fixed (4); a sealed-syringe investigation tests it (5, 6), using P against 1/V (7); a drift in the data reveals a limitation (8); P₁V₁ = P₂V₂ solves two-state problems (9).
- **Opening frame (equals `chem-y11-m2-v16.md`'s final frame, same series).** The sealed syringe (`c4a-syringe-barrel-v1.png` with `c4a-syringe-plunger-v1.png`, nozzle closed by a coded cap) at the centre, plunger shown pushed in from "100 mL" to "50 mL" by a dashed ghost; twelve coded particles inside, now closer together; strip "same gas, same n, same T"; amber chip "V halves → P = ?"; conditions strip at the top right "T = 25 °C (steady)"; the "Next" chip, which fades.
- **Starting pressure.** The syringe starts at 100 kPa (room pressure, matching m2-v16's conditions). The site's drill (2.0 L at 100 kPa to 1.0 L gives 200 kPa) is the same doubling, reused as the hook's answer.
- **Prediction (3 s, scene 1).** "Does the pressure stay the same, halve, or double?" Answer: double, 200 kPa.
- **The collision cause (scene 2; extends the site, which states the law without a mechanism).** At constant temperature the particles keep the same average speed (m2-v16, scene 4), so each hit pushes as hard as before; with the same particles in half the volume, twice as many are near any patch of wall at any moment, so that patch receives twice as many hits per second. Said this way (crowding, not "shorter trips") so it holds for any container shape. The memory aid compresses it: "Half the room, twice the hits."
- **Inverse proportion (scene 3).** Defined in plain words: when one quantity goes up by some factor, the other goes down by the same factor, so their product stays the same. Table 100 mL, 100 kPa; 50, 200; 25, 400; 200, 50; PV = 10 000 kPa mL each.
- **Why T and n must be fixed (scene 4).** Warming gives faster, harder hits (pressure rises for a second reason; m2-v18 owns this); a leak removes particles; fast squeezing warms the gas (a bike pump warms; tag), so readings are taken after a short wait. These are the practical's controlled variables.
- **The investigation (site practical card; illustrative data).** A 100 mL gas syringe connected by a short tube to a gas pressure sensor and data logger; joints sealed; start at 100.0 mL and 100.0 kPa; plunger pushed in 10 mL at a time to 50.0 mL; wait about 10 s before each reading; volume from the syringe scale, pressure from the sensor. Independent variable V, dependent P, controlled T and n. Pressure-sensor ranges vary (many school sensors read to about 210 kPa), so the series stops at 50 mL; tag "check your sensor's range".
- **Illustrative data (author note b).** Generated with 2.0 mL of air hidden in the tube and sensor: 100.0, 110.9, 124.4, 141.7, 164.5, 196.2 kPa at 100, 90, 80, 70, 60, 50 mL. PV: 10 000, 9 981, 9 952, 9 919, 9 870, 9 810 kPa mL (about 2% drift). The data are realistic rather than perfect so that the limitation is found in the evidence, not asserted.
- **Graphs (scene 7; coded `LineGraph`, never painted).** P against V falls in a curve; P against 1/V is a straight line through (nearly) the origin. Why plot 1/V: many relationships give curves, but a straight line through the origin is easy to judge by eye and is exactly what "P is proportional to 1/V" predicts. The line of best fit for the data meets the P axis at about 4 kPa (author note b), not at zero.
- **Limitation from the data (scene 8; route stop "test P against 1/V").** The drift in PV and the small intercept share a cause: gas in the tube and sensor that the syringe scale does not count, which matters more as the gas is squeezed (author note b). Improvements: a short, narrow tube, or measure the tube's volume and add it to every reading. A small leak would also make PV drift down; check that the plunger returns to 100 mL when released. Systematic, with a direction, in ws-v05's language, without naming the error type again.
- **Two-state calculation (scene 9; original numbers).** 60.0 mL at 100.0 kPa, pushed in until 150.0 kPa: V₂ = P₁V₁ ÷ P₂ = 40.0 mL; sense check (pressure up, volume down). Calculation layout: task strip, equation strip, grouped givens with units, one row at a time.
- **Units (scene 10; site).** Any units, so long as both sides match; temperature does not appear in Boyle's law, so no kelvin yet (handoff). This is one sentence and a chip.
- **Memory aid (see "Memory aid check"):** "Half the room, twice the hits."
- **Attempts (original wording, HSC style).** A1 (two-state, pressure lowered): 4.00 L at 120 kPa to 80.0 kPa: 6.00 L; crossed "2.67 L (ratio flipped)". A2 (practical analysis): which graph to draw and its expected shape: P against 1/V, a straight line through the origin; crossed "P against V: a straight line sloping down".
- **Mistake scene:** none separate. "Pressure and volume rise together" (1, 2); "the particles hit harder when squeezed" (2: they hit more often, not harder); flipped ratio (crossed in A1); straight-line P against V (crossed in A2).
- **Handoff (route next: `chem-y11-m2-v18`, "Why do gas volume and pressure laws require kelvin?").** Scene 15: the syringe, plunger free, goes into cold water at 10 °C (50.0 mL); the water warms to 20 °C and the volume only reaches 51.8 mL, though the Celsius number doubled. Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log if accepted):**
  1. Lesson 15 `l15-gaslaws-title` states each law without a cause. Suggest one collision sentence under Boyle's law: "At constant temperature each hit is as hard as before, but squeezing the same particles into less space means more hits on each part of the wall every second, so the pressure rises."
  2. Lesson 15 `l15-prac-title`, Boyle's method: "increase the pressure in small, controlled steps (for example by adding masses to a plunger platform, or using a screw clamp)" and "repeat for a wide range of volumes". With a pressure sensor the volume is set and the pressure read, so the independent variable is V. Suggest: "Push the plunger in small steps, reading the volume from the syringe scale and the pressure from the sensor at each step, after waiting a few seconds for the temperature to settle."
  3. Lesson 15 `l15-prac-title` gives no limitation for the Boyle method. Suggest adding: "Air in the connecting tube is not shown on the syringe scale, so the true volume is a little larger than the reading; PV drifts down slightly and the P against 1/V line misses the origin. Use a short tube or add its volume."
  4. Lesson 15 `l15-traps-title` trap 1: "off by a factor of 24.8 ÷ 22.71 = 1.107, a 10.7% error". 24.8 ÷ 22.71 = 1.092 (a 9.2% error); 1.107 is 24.8 ÷ 22.4. The lesson's own MC 5 answer gives 9.2%. Suggest "24.8 ÷ 22.71 = 1.092, about a 9% error".
  - Checked and correct: the Boyle quiz item (200 kPa); the true-or-false check; lesson 15's other numbers are checked in `chem-y11-m2-v18.md` to `v20.md`, which use them.
- **Cause chain taught, in order:** (1) squeezing keeps the same particles at the same average speed, so each hit is as hard (2); (2) the particles crowd closer, so each patch of wall gets more hits per second (2); (3) so pressure rises by the factor the volume fell, and PV is constant (3); (4) a change in T or n would change the pressure for another reason, so both are fixed (4); (5) so P against 1/V is a straight line through the origin (7); (6) hidden gas in the tube makes the true volume larger than the reading, so PV drifts (8).
- **Entry knowledge:** Stage 5 particle model; m2-v16 (pressure from wall hits; equal average push per particle at one temperature; the syringe and its particle window); ws-v04 and ws-v05 (tables, graphs, lines of best fit, systematic errors with a direction).
- **Learner-visible vocabulary (plain meaning at first use):** inversely proportional (3); Boyle's law (3, stated); pressure sensor (5, "a probe that reads the gas pressure"); independent and dependent variable (5, recalled from Stage 5 with a chip).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **syringe rig** (scenes 1 to 8, 15: `c4a-syringe-barrel-v1.png` with `c4a-syringe-plunger-v1.png`, the plunger translated along the barrel axis by code; scale ticks coded on the barrel every 10 mL; a coded particle window inside, twelve particles); **wall patch** (scene 2: a magnified square of the barrel wall with a hit counter per second, the hits per second doubling while each hit's push bar stays the same); **pressure readout** (scenes 1 to 9: a coded digit display on the data logger plate's screen); **PV table** (scenes 3, 6: rows writing in turn with a product column); **graphs** (scene 7: coded `LineGraph`, P against V then P against 1/V, with a line of best fit drawn on cue); **tube zoom** (scene 8: the connecting tube enlarged with its hidden particles highlighted in amber); **calculation board** (scenes 9, 12); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m2-v16):** pressure red; volumes slate blue; moles teal (only as "same n"); conditions strip slate with a thermometer icon; crossed items red strike; the hidden tube gas amber.
- **Board layout (constant):** heading top left; conditions strip top right ("T = 25 °C (steady)"); the rig at the left (syringe, tube, sensor, logger); table, graphs and rows at the right.

Author notes (not learner copy):
(a) Doubling: 100 mL × 100 kPa = 10 000 kPa mL; 50 mL → 200 kPa; 25 mL → 400 kPa; 200 mL → 50 kPa.
(b) Illustrative data with a hidden volume v₀ = 2.0 mL: P = 100 × 102 ÷ (V + 2.0): 100 → 100.0; 90 → 110.9; 80 → 124.4; 70 → 141.7; 60 → 164.5; 50 → 196.2 kPa. PV (reading): 10 000, 9 981, 9 952, 9 919, 9 870, 9 810 (drop 1.9%). P against 1/V least-squares line: gradient 9 618 kPa mL, intercept +4.1 kPa. The direction: P × V(reading) = k − P v₀, which falls as P rises.
(c) Fast compression warms the gas (work done on it); the warming fades as heat flows into the barrel, which is why the readings wait about 10 s. Not quantified.
(d) Worked example: 100.0 × 60.0 ÷ 150.0 = 40.0 mL.
(e) A1: 120 × 4.00 ÷ 80.0 = 6.00 L; flipped: 4.00 × 80.0 ÷ 120 = 2.67 L.
(f) Handoff: Charles's law at constant pressure, 50.0 mL at 10 °C (283.15 K): at 20 °C (293.15 K), 50.0 × 293.15 ÷ 283.15 = 51.77 → 51.8 mL ("about fifty-two"). m2-v18 owns the calculation.
(g) Pronunciations: "P one V one equals P two V two"; "one over V"; "kilopascals".

Main question: *How does changing gas volume change pressure at constant temperature?*
Entry knowledge: Stage 5 particle model; m2-v16; ws-v04, ws-v05.
Stops after: the collision cause, PV constant, Boyle's law with fixed T and n, the syringe investigation with P against 1/V and its tube limitation, P₁V₁ = P₂V₂. No kelvin, Charles, Gay-Lussac or PV = nRT.
Handoff: chem-y11-m2-v18, Charles's and Gay-Lussac's laws and kelvin.

## Opening frame and final frame

- **Opening frame:** m2-v16's final frame exactly (Decisions).
- **Final frame (m2-v18 opens on it):** at the left, `m8-beaker-hotplate-clear-v1.png` (a beaker of clear water on a hotplate) with the syringe (`c4a-syringe-barrel-v1.png` with `c4a-syringe-plunger-v1.png`, rotated upright by code, nozzle down and capped) held in it by a coded clamp, the barrel's lower two thirds under a coded water tint; `c8-thermometer-hot-v1.png` standing in the water; a tag "plunger free: P stays at room pressure"; at the right, a two-row table "T (°C) | V (mL)": "10 | 50.0", "20 | 51.8"; an amber chip "20 °C is double 10 °C. Why isn't V doubled?"; the conditions strip at the top right "P = 100 kPa (steady)"; the chip "Next: Why do gas volume and pressure laws require kelvin?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's that sealed syringe again, holding a hundred millilitres of air at twenty-five degrees and a hundred kilopascals. Last time, every comparison kept the temperature and the pressure fixed. Now we change something. Keep the temperature steady, and push the plunger in until the air fills only fifty millilitres. So, quick prediction. Does the pressure stay the same, halve, or **double**?

Visual: opens on m2-v16's final frame; the "Next" chip fades. The data logger (`phys-y11-data-logger-v1.png`) slides in at the left and a coded tube joins the syringe nozzle to a coded sensor port; the readout writes "100 kPa"; the volume chip "100 mL". On "Last time" a small thumbnail of m2-v16's memory line "Same T, same P, same V: same number" appears and fades. On "push the plunger in" the ghost becomes the real plunger, sliding from "100 mL" to "50 mL"; the twelve particles crowd closer; the readout shows "? kPa". Chips "same", "halve", "double". On "double" the 3 s `Countdown` ring runs. Heading writes: "Boyle's law".

### 2. twice as many hits
> It doubles, to two hundred kilopascals. Here's why. Pressure comes from particles hitting the walls. Squeezing doesn't change how many particles there are, and at a steady temperature they keep the same average speed, so each hit is just as hard. But now the same particles share half the space, so twice as many are close to any patch of wall at any moment. That patch gets twice as many hits every second, so the pressure **doubles**.

Visual: "double" ticks; the readout counts up to "200 kPa" (red). On "particles hitting the walls" a magnified square of the barrel wall opens at the right with a hit counter. On "same average speed" each particle's motion trail stays the same length (tag "same T: same speed"); on "just as hard" a push bar per hit, the same length before and after. On "half the space" a split view: "100 mL" with a few particles near the wall patch, "50 mL" with twice as many near it. On "twice as many hits" the counter in the 50 mL view runs twice as fast ("hits per second × 2"). On "doubles" the two pressure bars "100 kPa" and "200 kPa" sit side by side.

### 3. pressure times volume stays the same
> Keep going. Squeeze it to twenty-five millilitres and the pressure doubles again, to four hundred. Let the gas spread out to two hundred millilitres and it halves, to fifty. Whenever the volume goes up by some factor, the pressure goes down by the same factor. That's called inverse proportion, and it means pressure times volume stays the same, here ten thousand every time. That's Boyle's law. For a fixed amount of gas at constant temperature, P one V one equals P two V **two**.

Visual: PV table at the right, rows writing in turn: "100 mL | 100 kPa", "50 | 200"; on "twenty-five millilitres" the plunger slides in further, row "25 | 400"; on "two hundred millilitres" a longer coded barrel outline extends and the plunger slides out, row "200 | 50". On "inverse proportion" gloss chip "inversely proportional: one × 2, the other ÷ 2". On "pressure times volume" a product column "P × V" fills "10 000" in every row (tag "kPa mL"). On "Boyle's law" a navy card: "Boyle's law: for a fixed amount of gas at constant temperature, P ∝ 1/V". On "two" the strip "P₁V₁ = P₂V₂ (constant T and n)" writes under it.

### 4. why T and n must stay fixed
> Those two conditions matter. If the gas warms up, its particles move faster and hit harder, so the pressure rises for a second reason. If gas leaks out, there are fewer particles left to hit the walls. Even squeezing quickly warms the gas a little, the way a bike pump warms up. So in a Boyle's law test, you seal the gas, push slowly, and wait a few seconds before each **reading**.

Visual: the navy card shrinks to the top right. On "warms up" a small coded heat glow under the barrel; particle trails lengthen; the readout ticks up an extra few kPa (tag "T changed: not Boyle"). The glow fades. On "leaks out" two particles escape through a coded gap at the cap; the readout drops (tag "n changed: not Boyle"); the gap closes. On "bike pump" a small coded outline of a bike pump barrel with a warm glow (tag "fast squeeze: warms the gas"). On "reading" a checklist writes: "seal every joint (n fixed)", "push slowly, wait ~10 s (T fixed)".

### 5. the investigation
> Here's how you'd test it. Connect a gas syringe to a pressure sensor, a probe that reads the gas pressure, using a short tube, and seal every joint. Start with the plunger at a hundred millilitres, at room pressure. Then push it in ten millilitres at a time, recording the volume from the syringe scale and the pressure from the sensor. The volume you set is the independent variable, the pressure is the dependent variable, and the temperature and amount of gas are kept **constant**.

Visual: board clears to the rig at full width: the syringe (horizontal), a coded short clear tube, the new pressure sensor plate `y11c-gas-pressure-sensor-v1.png`, its coded cable to `phys-y11-data-logger-v1.png` (readout "100.0 kPa"). On "pressure sensor" label "pressure sensor" with a pen arrow. On "seal every joint" the two joints pulse teal. On "ten millilitres at a time" the plunger steps 100 → 90 → 80 mL, the readout updating each step after a small settling flicker. On "independent variable" chips write: "independent: V", "dependent: P"; on "constant" chip "controlled: T, n". Tag "illustrative data" appears at the right edge.

### 6. results and the P V check
> Here are some results. As the volume falls from a hundred to fifty millilitres, the pressure climbs from a hundred to about a hundred and ninety-six kilopascals. Now multiply each pair. P times V stays close to ten thousand, but it drifts down a little, by about two percent by the end. Hold on to that drift, because it's a **clue**.

Visual: results table at the right, rows writing in step with the plunger: "100.0 mL | 100.0 kPa", "90.0 | 110.9", "80.0 | 124.4", "70.0 | 141.7", "60.0 | 164.5", "50.0 | 196.2" (tag "illustrative data"). On "multiply each pair" a "P × V" column fills: "10 000", "9 981", "9 952", "9 919", "9 870", "9 810". On "drifts down" a thin amber arrow runs down the column (tag "−2%"). On "clue" an amber magnifier icon settles beside the column.

### 7. the curve and the straight line
> First, the graph. Pressure against volume gives a curve that falls more and more gently. The trouble is that lots of relationships make curves, so a curve is hard to judge by eye. So plot pressure against one over volume instead. If pressure is inversely proportional to volume, that graph is a straight line through the origin. And our points do sit on a straight **line**.

Visual: table shrinks to the right edge. Coded `LineGraph` A: "P (kPa)" against "V (mL)", six points plotting in turn, a smooth falling curve drawn through them. On "lots of relationships make curves" two faint alternative curves overlay and fade (tag "a curve: hard to test"). On "one over volume" a new column "1/V (mL⁻¹)" writes beside the table (0.0100, 0.0111, 0.0125, 0.0143, 0.0167, 0.0200), and graph B builds beside A: "P (kPa)" against "1/V (mL⁻¹)", the axes running to the origin. On "straight line through the origin" a dashed prediction line from the origin. On "line" the six points plot and the line of best fit draws through them.

### 8. the clue: hidden gas in the tube
> Now the clue. Look closely, and the line meets the pressure axis a little above zero. That, and the drift in P times V, have the same cause. Some air sits inside the tube and the sensor, where the syringe scale can't see it. So the real volume of gas is always a bit bigger than the reading. Use a short, narrow tube, or measure its volume and add it on. A tiny leak would cause a drift too, so check that the plunger comes back to a hundred millilitres when you let **go**.

Visual: graph B zooms to the origin: the line of best fit meets the P axis at "≈ 4 kPa" (amber ring). On "the drift in P times V" the PV column's amber arrow pulses. On "inside the tube" the tube zoom: the connecting tube and sensor port enlarge, with two particles inside highlighted amber (tag "gas the scale can't see"). On "a bit bigger than the reading" a bracket on the syringe: "reading 50.0 mL" and "real ≈ 52 mL". On "short, narrow tube" a fix chip (teal tick); on "add it on" chip "or V(real) = V(reading) + V(tube)". On "tiny leak" a single particle escapes and is crossed out; on "go" the plunger springs back to "100 mL" (tag "leak check").

### 9. a two-state calculation
> Now a two-state calculation. A sealed syringe holds sixty millilitres of air at a hundred kilopascals. The plunger is pushed in slowly until the pressure reads a hundred and fifty. What's the new volume? The temperature and amount don't change, so P one V one equals P two V two. Rearranged, V two is P one V one over P two. That's a hundred times sixty, over a hundred and fifty, which is forty point zero **millilitres**. Pressure went up, so volume went down. That **checks** out.

Visual: board clears to the calculation layout. Task strip: "Find V₂". Equation strip: "P₁V₁ = P₂V₂ (constant T, n)". Givens, grouped: "P₁ = 100.0 kPa, V₁ = 60.0 mL" (state 1) and "P₂ = 150.0 kPa, V₂ = ?" (state 2). On "Rearranged" row "V₂ = P₁V₁ ÷ P₂"; then row "= 100.0 × 60.0 ÷ 150.0". On "millilitres" row "= 40.0 mL" (slate). On "checks" chip "P ↑ so V ↓ ✓". A small syringe icon at the left slides from "60.0" to "40.0".

### 10. units and the memory line
> So here's a way to remember the cause: half the room, twice the hits. For the calculation, any units work, as long as both sides use the same ones, millilitres with millilitres and kilopascals with kilopascals. And notice that temperature never appears in Boyle's law, so there's nothing to convert **yet**.

Visual: the memory line writes large in the explainer's handwriting style: "Half the room, twice the hits." with the 100 mL and 50 mL wall-patch views small beneath. On "any units work" chips "mL with mL", "kPa with kPa", "L with L" (tag "units must match on both sides"). On "yet" a grey chip "T: not in Boyle's law (next video)".

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A sample of gas occupies four point zero zero litres at a hundred and twenty kilopascals. At constant temperature, the pressure is lowered to eighty point zero kilopascals. Calculate the new volume of the gas. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A sample of gas occupies 4.00 L at 120 kPa. The pressure is lowered to 80.0 kPa at constant temperature. Calculate the new volume of the gas. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> V two is P one V one over P two, which is a hundred and twenty times four, over eighty, six point zero zero litres. Lower pressure means a bigger volume, so the answer should grow. Two point six seven litres means the ratio was flipped, and the volume shrank when it should have **grown**.

Visual: card shrinks to the top. Rows: "V₂ = P₁V₁ ÷ P₂ = 120 × 4.00 ÷ 80.0 = 6.00 L" (slate); chip "P ↓ so V ↑". On "grown" a chip "2.67 L (ratio flipped)" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A student measures the pressure and volume of air in a sealed syringe at constant temperature. Describe the graph the student should draw to show that the data support Boyle's law, and what the graph should look like. Pause here to answer.

Visual: `QuestionCard`: "A student measures the pressure and volume of air trapped in a sealed syringe at constant temperature. Describe the graph the student should draw to show that the data support Boyle's law, and the shape the graph should have. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph on screen).

### 14. feedback 2 (brief)
> Plot pressure against one over volume. If Boyle's law holds, the points lie on a straight line through the origin, because pressure is proportional to one over volume. Pressure against volume gives a curve, so expecting a straight line sloping down on that graph is the classic **slip**.

Visual: card shrinks. A small `LineGraph` "P against 1/V": points on a straight line through the origin (tick). Beside it a small "P against V" curve. On "slip" a chip "P against V: a straight line sloping down" fades in and is crossed. Hold about 1 second.

### 15. conclusion and handoff
> So squeezing a gas raises its pressure, because the same particles crowd into less space and hit each part of the wall more often. At constant temperature, P times V stays the same. But what if the temperature changes? Stand the syringe in cold water at ten degrees, with the plunger free to move, so the pressure stays the same. It reads fifty millilitres. Warm the water to twenty degrees, double the Celsius number, and the volume only creeps up to about fifty-two. So why do gas volume and pressure laws require **kelvin**?

Visual: the memory line returns small at the top with the navy Boyle card. On "what if the temperature changes" the board clears to the final frame's layout: `m8-beaker-hotplate-clear-v1.png` with the syringe upright and capped in it (coded clamp; coded water tint over the lower barrel), `c8-thermometer-hot-v1.png` in the water. On "plunger free to move" tag "plunger free: P stays at room pressure"; conditions strip "P = 100 kPa (steady)". On "fifty millilitres" the thermometer label "10 °C" and table row "10 | 50.0". On "twenty degrees" the hotplate glows faintly, the label changes to "20 °C", the plunger rises slightly and row "20 | 51.8" writes. On "double the Celsius number" the amber chip "20 °C is double 10 °C. Why isn't V doubled?". On "kelvin" the chip "Next: Why do gas volume and pressure laws require kelvin?" writes. Hold about 2 seconds. This is the final frame (m2-v18 opens on it).

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Boyle's law: for a fixed amount of gas at constant temperature, P ∝ 1/V, so P₁V₁ = P₂V₂ (any units, the same on both sides).
2. Why: halving the volume puts the same particles in half the space; each hit is as hard (same T), but each part of the wall gets twice as many hits, so P doubles.
3. Test: sealed syringe and pressure sensor; V independent, P dependent, T and n controlled. Plot P against 1/V: a straight line through the origin.
4. Limitation: gas in the tube is not on the syringe scale, so PV drifts down; use a short tube or add its volume.

Memory aid (large, on the notes screen): *Half the room, twice the hits.*

At the end the notes cross-fade back to scene 15's final frame.

## Teaching checks

- **Does it explain causes?** Why the pressure doubles (2); why PV is constant (3); why T and n must be fixed (4); why P against 1/V is plotted (7); why PV drifts and the line misses the origin (8); why the answer in A1 must grow (12).
- **Misconceptions addressed:** pressure and volume rise together (1, 2); squeezed particles hit harder (2); flipped ratio (crossed in A1); straight line on P against V (crossed in A2); data that do not fit perfectly mean the law is wrong (8: a hidden volume explains it).
- **One idea at a time:** the effect (1), the cause (2), the law (3), its conditions (4), the method (5), the data (6), the graph (7), the limitation (8), the calculation (9), units (10).
- **Video makes it easier:** particles crowd as the plunger moves and a wall-patch counter doubles while the push per hit stays the same (2); the PV column fills with the same number (3); a curve turns into a straight line when the axis changes to 1/V (7); hidden particles light up in the tube (8).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 21 s each.
- **Avoided double teaching:** pressure from wall hits and equal push per particle (m2-v16); tables, lines of best fit and systematic errors (ws-v04, ws-v05, recalled by use, not retaught).
- **Syllabus coverage:** `C2-IQ4-01` "Boyle's Law" (1 to 10, A1, A2; "conduct investigations" in 5 to 8, "solve problems" in 9 and A1). The link to the Ideal Gas Law is m2-v19's.
- **Out of scope by design:** temperature changes, kelvin, Charles, Gay-Lussac, PV = nRT, real-gas deviations.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: at constant T and n, P₁V₁ = P₂V₂, so V₂ = P₁V₁ ÷ P₂ (1 mark) = 120 × 4.00 ÷ 80.0 = 6.00 L (1 mark). Classic mistake (crossed): 2.67 L (ratio flipped).

**Attempt 2 (scene 13; original wording, HSC style, 2 marks suggested).** As on the card.
Model answer: plot pressure against 1/volume (1 mark); the points should lie on a straight line through the origin, showing P is proportional to 1/V (1 mark). Classic mistake (crossed): "P against V: a straight line sloping down" (P against V is a curve).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | 100 mL, 100 kPa, 25 °C; 50 mL → 200 kPa | opening, 1, 2 |
| PV table | 100/100; 50/200; 25/400; 200/50; PV = 10 000 kPa mL | 3 |
| Investigation data (illustrative) | 100.0, 90.0, 80.0, 70.0, 60.0, 50.0 mL; 100.0, 110.9, 124.4, 141.7, 164.5, 196.2 kPa | 5, 6 |
| PV column | 10 000, 9 981, 9 952, 9 919, 9 870, 9 810; about −2% | 6, 8 |
| 1/V column | 0.0100, 0.0111, 0.0125, 0.0143, 0.0167, 0.0200 mL⁻¹ | 7 |
| Intercept | about 4 kPa; hidden volume about 2 mL (real ≈ 52 mL at the 50.0 mL reading) | 8 |
| Waiting time | about 10 s per reading | 4, 5 |
| Worked example | 60.0 mL, 100.0 kPa, 150.0 kPa → 40.0 mL | 9 |
| A1 | 4.00 L, 120 kPa, 80.0 kPa → 6.00 L; slip 2.67 L | 11, 12 |
| Handoff | 10 °C, 50.0 mL; 20 °C, 51.8 mL ("about fifty-two"); 100 kPa | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 100 × 100 = 50 × 200 = 25 × 400 = 200 × 50 = 10 000.
- 10 200 ÷ 102 = 100.0; ÷ 92 = 110.87; ÷ 82 = 124.39; ÷ 72 = 141.67; ÷ 62 = 164.52; ÷ 52 = 196.15.
- 100.0 × 100 = 10 000; 110.9 × 90 = 9 981; 124.4 × 80 = 9 952; 141.7 × 70 = 9 919; 164.5 × 60 = 9 870; 196.2 × 50 = 9 810; 9 810 ÷ 10 000 = 0.981.
- 1/100 = 0.0100; 1/90 = 0.0111; 1/80 = 0.0125; 1/70 = 0.0143; 1/60 = 0.0167; 1/50 = 0.0200.
- Least-squares P against 1/V (rounded P values): gradient 9 618, intercept 4.06 kPa.
- 100.0 × 60.0 ÷ 150.0 = 40.0.
- 120 × 4.00 ÷ 80.0 = 6.00; 4.00 × 80.0 ÷ 120 = 2.667.
- 50.0 × 293.15 ÷ 283.15 = 51.77.

## Memory aid check

- **"Half the room, twice the hits."** Written for this video. Meaning: halve the volume and each part of the wall receives twice as many hits per second, so the pressure doubles. Assumptions checked: constant temperature (so each hit is as hard; said in scene 2 and kept in the law's statement); a fixed amount of gas (scene 4); ideal behaviour (very close at school pressures; m2-v19 states the assumptions). It helps a new case: any factor works the same way ("a third of the room, three times the hits"), and it gives the direction check used in A1.
- **Considered, not used:** "Boyle: squeeze it and it pushes back" (true, but gives no amount and no cause).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **5,763 characters**, 16 scenes. At 13.3 characters per second the speech is about 433 s; add about 8 s of settling (the wall-patch counters in 2, the stepping plunger in 5, the graph build in 7, the tube zoom in 8), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 520 s**.

## Scene list and build ids

Lesson key `c-y11-m2-v17` (route chem-y11-m2-v17; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v17`.

In order (16 scene headings, all `### N.`): hook-prediction, twice-the-hits, pv-constant, fixed-t-and-n, investigation, results-pv, curve-and-line, hidden-gas, two-state-calc, units-memory, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m2-v16's final frame into scene 1 by camera continue (the logger slides in); 1 to 2 camera continue (the wall patch opens); 2 to 3 camera continue; 3 to 4 camera continue; 4 to 5 clear change (the rig at full width); 5 to 6 camera continue (the table writes as the plunger steps); 6 to 7 camera continue; 7 to 8 camera continue (zoom to the origin, then to the tube); 8 to 9 clear change; 9 to 10 camera continue; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v17-learning-review.md`, `checks/c-y11-m2-v17-science-check.md`.

## Assets

Have (inspected 5 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/c4a-syringe-barrel-v1.png` and `c4a-syringe-plunger-v1.png` (2062 × 1031 each, one canvas, transparent; the plunger slides along the barrel by code): opening, scenes 1 to 9, 15 (upright by rotation in 15; rotation only, no stretch).
- `public/assets/physics/phys-y11-data-logger-v1.png` (1400 × 900, transparent; a grey logger with a dark screen and two sockets; its JSON gives the screen rectangle for the coded readout): scenes 1 to 8.
- `public/assets/chemistry/m8-beaker-hotplate-clear-v1.png` (2000 × 2000; clear water in a beaker on a hotplate): scene 15, final frame.
- `public/assets/chemistry/c8-thermometer-hot-v1.png` (216 × 1988; red-liquid thermometer): scene 15, final frame.
- **Inspected, not used:** `phys-y11-sealed-syringes-v1.png` (packaged syringes, not a rig); `biology/y11-gas-syringe-rig-v1.png` (yeast flask; wrong context); `c8-pressure-vessel-v1.png` (an industrial vessel with a dial gauge; not a school sensor); `biology/m6-water-bath-tube-v1.png` (a lidded electric water bath; the beaker on a hotplate shows the water level and the syringe better); `phys-y11-force-sensor-v1.png` (a force sensor, not a gas pressure sensor).

Need (new plates, Codex):
1. `y11c-gas-pressure-sensor-v1.png`: essential (scenes 5 to 8; m2-v18 reuses it for the fixed-volume flask).

Coded: syringe scale ticks and particle window, connecting tube and cable, logger readout, wall patch and counters, push bars, PV and results tables, `LineGraph`s, tube zoom, clamp, water tint, calculation rows, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v17)

Style as `c4a-syringe-barrel-v1.png` and `phys-y11-data-logger-v1.png` (painted, realistic school apparatus, soft studio light, dark-board friendly). Transparent PNG with alpha channel; no text, numbers or brand names; no people, hands or faces.

1. `y11c-gas-pressure-sensor-v1.png` (about 1600 × 900, landscape): a school gas pressure sensor seen from the side: a grey plastic handheld sensor body about the length of a pen case, with a short clear plastic connector on its left end ending in a small luer fitting (so a coded tube can meet it), and a black cable leaving its right end and trailing off to the lower right edge of the canvas (cut cleanly at the edge so a coded cable can continue it). No display on the sensor itself. Codex records the luer tip and cable-end coordinates in a JSON sidecar (as `phys-y11-data-logger-v1.json`).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `lesson15.sa.html` (`l15-gaslaws-title` Boyle card; `l15-prac-title` Boyle method, graphs and controlled variables).
3. Confirm the illustrative data are tagged "illustrative data" wherever shown, and that the hidden-volume explanation gives the stated drift direction.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quote matches `chem-2017-y11.json` (apart from the corrected apostrophe).
6. Confirm no person, hand or face is drawn or requested (the plunger moves by code; the bike pump is an outline of the pump only); no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m2-v16's final frame, and send the final frame to the m2-v18 designer.

## YouTube metadata (draft)

Title: Boyle's Law: Why Squeezing a Gas Raises Its Pressure | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Push a syringe plunger in until the air fills half the space, and the pressure doubles. See why, using the particles hitting the walls, then test Boyle's law with a sealed syringe and a pressure sensor: a results table, the P × V check, why we plot P against 1/V, and the hidden gas in the tube that makes real data drift. Then solve a two-state problem with P₁V₁ = P₂V₂. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct investigations and solve problems to determine the relationship between the Ideal Gas Law and:"
"Boyle's Law"

Previous: Why do equal gas volumes contain equal amounts at the same conditions? Next: Why do gas volume and pressure laws require kelvin?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. The tube limitation (learning review).** Scene 8 finds a limitation in the data (PV drift, a 4 kPa intercept). Confirm it is followable at playback speed; the fallback keeps one sentence ("Air hidden in the tube makes the real volume a little bigger than the reading, so keep the tube short") and drops the leak check (saves about 200 characters).
- **2. Bike pump outline (root).** Scene 4's coded bike pump outline (pump barrel only, no person) is the one everyday example of fast compression warming a gas. Cut if it reads as clip art; the tag alone remains.
- **3. New plate (root).** `y11c-gas-pressure-sensor-v1.png` is essential for the practical and is reused in m2-v18. Fallback: a coded sensor box with a label "pressure sensor", which the owner rules discourage for real apparatus.
- **4. Site note 4 (root).** Lesson 15 trap 1's "1.107, a 10.7% error" is a site error found while reading the gas-laws pages; logged here because this is the first video to read those sections.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the crowding explanation in scene 2 land without "shorter trips"; is scene 8 one clear idea), then the science check and Codex error check.
- Checker output (5 November): narration 5,763 characters; per scene (1 to 16): 388, 432, 478, 379, 481, 330, 370, 470, 475, 303, 242, 285, 249, 283, 523, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
