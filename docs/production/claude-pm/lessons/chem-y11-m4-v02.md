# Year 11 Chemistry M4 V02: Calorimetry and q = mcΔT. How can a calorimeter turn a temperature rise into heat transfer? (design)

Status: Revision 2 (6 Nov 2026): brief 183 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,345 characters, 19 scenes, about 568 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: second Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 71, between `chem-y11-m4-v01` and `chem-y11-m4-v03`; a calculation video with two calorimeters. Templates: `chem-y11-m4-v01.md` (same designer, colour key), `math-a12-d10.md` and `chem-m5-g02.md` (calculation staging), `chem-y11-m2-v20.md` (series layout), `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates). Year 12 `chem-m6-c03.md` and `chem-m6-p02.md` build on this video (they assume Year 11 taught q = mcΔT and specific heat capacity) and reuse the same foam-cup plate. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v02` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Use q=mcDeltaT with the measured heated material and its specific heat; distinguish qsurroundings from reaction enthalpy and state assumptions."; next handoff: "Why does combustion calorimetry underestimate a fuel enthalpy?"). Site lessons read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson02.sa.html` (SHA256 `8767d8a9172673f06f89e589b7606fbcd14ce5f090d2465d2e25c06e488bb318`, recomputed, matches the route), section `l02-the-spirit-burner-calorimeter-setup-title`; `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson03.sa.html` (SHA256 `4f02388499473c9a66690e4936ba14c21d1f8022a6a5b27cd9d226b890b82d42`, recomputed, matches), sections `l03-combustion-vs-neutralisation-calorimetry-title` and `l03-m-is-just-the-mass-of-the-acid-or-the-base-title`. Used: the spirit-burner calorimeter components (copper can of known mass of water, thermometer in the water, burner weighed before and after); "Copper is chosen ... high thermal conductivity"; lesson 2 worked example 1's data (152.34 → 151.62 g, 200.0 g of water, 19.5 → 31.2 °C, q = 9781 J = 9.781 kJ) kept exactly; the trap "'m in q = mcΔT is the mass of fuel'" and its fix ("the mass of the substance being heated"); key term ΔT = T(final) − T(initial), "1 °C equals a change of 1 K"; the combustion against neutralisation table ("'m' in q = mcΔT: Mass of water in calorimeter / Total mass of combined solution"; copper conducts, polystyrene insulates); lesson 3 worked example 1's data (50.0 + 50.0 mL, 21.4 → 28.0 °C, q = 2758.8 J) kept exactly; the trap "m is just the mass of the acid (or the base)"; the stated assumptions (density 1.0 g mL⁻¹ and c of water; cup's heat capacity neglected); the ideal school model "q(reaction) ≈ −q(water)". Not used here: ΔHc = −q/n and the molar step (v03), sources of error and percentage error (v03), the net ionic −57 kJ mol⁻¹ discussion and diprotic acids (Year 12 `chem-m6-c03`), the Lavoisier ice calorimeter hook (author note f).

Owner rules applied: as `chem-y11-m4-v01.md` (one learner question; no people, hands or faces: solutions pour by coded tilts, the burner is already lit; real apparatus as painted plates; calculation rows, readouts and particle sketches coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Energy Changes in Chemical Reactions; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ1-02`: "investigate enthalpy changes in reactions using calorimetry and q = mcΔT (heat capacity formula) to calculate, analyse and compare experimental results with reliable secondary-sourced data, and to explain any differences"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 43)

**Boundary:** opens on m4-v01's final frame (the spirit-burner can, 19.5 → 31.2 °C, "200.0 g of water", "How many joules flowed into it?"). Teaches: the same heat in twice the water gives half the rise (prediction); heat against temperature; specific heat capacity (water 4.18 J g⁻¹ K⁻¹; copper about 0.39 for contrast; the data sheet's per-kilogram form); building q = mcΔT by scaling; ΔT = final − initial, °C and K changes equal, sign; the burner calculation (9781 J = 9.78 kJ); m and c belong to the material that warmed (not the fuel; crossed 35 J); a foam-cup calorimeter (neutralisation as the example reaction) with m as the whole mixture and its two assumptions; q = 2759 J ≈ 2.8 kJ (crossed: half the mass); why copper for a flame and foam for a solution; q is the heat gained by the surroundings, positive; the reaction's heat change has the opposite sign; ΔH also needs a per-mole step (named, next video); the shared assumption that all heat reaches the measured liquid. Not taught: moles and ΔH = −q/n (v03), heat-loss errors and percentage error (v03), dissolution enthalpy (v04), the cup's or can's heat capacity in calculations (author note d).

## Decisions

- **Learner question (route wording kept).** "How can a calorimeter turn a temperature rise into heat transfer?" The answer, in order: the rise depends on the heat, the mass warmed and the material (1 to 3); multiplying them gives q = mcΔT (4, 5); every quantity in it belongs to the material that warmed (6 to 9); the container helps get the heat into that material (10); q is the surroundings' gain, so the reaction's heat change is the same size with the opposite sign (11); the result is only as good as the assumption that all the heat reached the liquid (12).
- **Opening frame (equals `chem-y11-m4-v01.md`'s final frame, same designer).** `m7-spirit-burner-calorimeter-v1.png` large at the left, readout "31.2 °C" with "started at 19.5 °C", label "200.0 g of water", orange arrows into the can; the methane profile small at the right with "energy out: how much?"; the amber chip "The water warmed by 11.7 °C. How many joules flowed into it?"; the "Next" chip, which fades.
- **Prediction (3 s, scene 1).** "Twice the water, 400 g, same heat: 11.7 °C, about twice, or about half?" Answer: about half (5.85 °C). It builds the m in q = mcΔT before the formula appears.
- **Heat and temperature (scene 2).** Heat: "energy transferred because of a temperature difference". Temperature: "how hot something is, which depends on the average energy of its particles". Coded particle lens: the same energy packets shared among twice as many particles.
- **Specific heat capacity (scene 3).** "The energy needed to warm one gram of a substance by one degree"; water 4.18 J g⁻¹ K⁻¹ (the brief's value, as on the HSC data sheet, which prints 4.18 × 10³ J kg⁻¹ K⁻¹; Revision 2, brief 183: the same physical value written per gram, not the same number, since 4180 J per kilogram equals 4.18 J per gram; author note a). Copper 0.385 J g⁻¹ K⁻¹ (spoken "about zero point three nine") as the contrast that makes "c depends on the material" concrete; it also prepares scene 10 and v03's heat soaked up by the can.
- **Building the formula (scene 4).** By scaling, not by assertion: 1 g by 1 K takes 4.18 J; 200.0 g takes 200 times as much; 11.7 K takes 11.7 times that again. Then the formula strip "q = m c ΔT" with each symbol's meaning and unit under it.
- **ΔT (scene 5; site key term).** ΔT = T(final) − T(initial); a change of 1 °C equals a change of 1 K, so no conversion; ΔT is negative when the temperature falls (needed for v04).
- **Calculation layout (scenes 6, 9; `math-a12-d10.md`).** Task strip; equation strip "q = m c ΔT"; grouped givens with units (m, c, T values, ΔT as its own given row); one stage per row; earlier rows dim. Precision (Revision 2, Module 4 root decision 3): every final result to three significant figures, with a grey tag where the data justify fewer. 9781 J → 9.78 kJ; the foam cup's 2758.8 J → 2.76 kJ (grey tag "ΔT = 6.6 justifies two figures"); A1 9196 J → 9.20 kJ (grey tag "ΔT = 8.8 justifies two"); A2 1655.28 J → 1.66 kJ, reaction −1.66 kJ (grey tag "ΔT = 6.6 justifies two"). Spoken sizes match the screen.
- **The m trap (scene 7; site lesson 2 trap).** m and c are the mass and specific heat capacity of the material that warmed and was measured: the water, not the fuel. The fuel's mass (0.72 g) gives 0.72 × 4.18 × 11.7 = 35.2 J, crossed. Memory aid built from it (scene 13).
- **The foam cup (scenes 8, 9; site lesson 3 worked example 1, data unchanged).** 50.0 mL of 1.00 mol L⁻¹ HCl and 50.0 mL of 1.00 mol L⁻¹ NaOH, 21.4 → 28.0 °C. Neutralisation is used only as an example of a reaction in solution (the site's own "Beyond the syllabus" box says neutralisation is a supporting application; Year 12 owns its molar enthalpy). Assumptions stated aloud: density of water (V(total) = 100.0 mL, then m = ρV = 100.0 g) and c of water. Crossed: "m = 50.0 g (the acid only)" (site trap). The pouring is two `m6-beaker-v1.png` plates tilting on coded arcs over the cup (as in Year 12 `chem-m6-c03`), with coded colourless fills and labels.
- **Containers (scene 10; site table).** Copper conducts heat from the flame into the water quickly; foam insulates a reaction that happens in the liquid itself. Both aim to get the heat into the measured liquid.
- **q of the surroundings against the reaction (scene 11; route stop).** q(water) = +9.78 kJ: heat gained by the surroundings, positive because they warmed. The reaction's heat change: −9.78 kJ (same size, opposite sign, in the ideal model). ΔH is the enthalpy change per mole of reaction (kJ mol⁻¹, sign from the system's view), so it needs the moles that reacted: "the next step" (v03). Three-row card: "q(water): + 9.78 kJ, this sample, surroundings gained", "heat change of the reaction: − 9.78 kJ", "ΔH: kJ per mole, needs moles (next video)".
- **Assumptions (scene 12; route stop).** All the reaction's heat goes into the liquid (none into the can or cup, none to the air); for solutions, the mixture behaves like water. Revision 2 (brief 183): if heat escapes, the calculated q is too small; an inaccurate assumed density or c can bias q either way, so only the heat-loss direction is stated (as scene 12's narration already does). This is the handoff's seed.
- **Memory aid:** "Mass, c and ΔT: all from the stuff that warmed." (see "Memory aid check"), scene 13.
- **Attempts (original wording, HSC style).** A1 (burner; new numbers): 250.0 g of water in a copper can, 18.6 → 27.4 °C, burner mass falls by 0.60 g; heat absorbed by the water in kJ: 9196 J = 9.20 kJ. Crossed: "0.60 × 4.18 × 8.8 = 22 J" (fuel mass). A2 (foam cup; new numbers): 30.0 mL of 1.00 mol L⁻¹ HCl with 30.0 mL of 1.00 mol L⁻¹ NaOH, 20.8 → 27.4 °C, density 1.00 g mL⁻¹, c = 4.18; (a) heat absorbed by the solution: 1655 J = 1.66 kJ; (b) the reaction's heat change with sign: −1.66 kJ. Crossed: "m = 30.0 g: 0.828 kJ".
- **Mistake scene:** none separate. Heat and temperature as the same thing (2); c is the same for everything (3); converting ΔT to kelvin by adding 273 (5); the fuel's mass (7; crossed in A1); one solution's mass (9; crossed in A2); q is the reaction's heat with the same sign (11).
- **Handoff (route next: `chem-y11-m4-v03`, "Why does combustion calorimetry underestimate a fuel enthalpy?").** Scene 18: the burner lost 0.72 g of ethanol; burning that much releases about 21 kJ (data value), yet the water gained 9.78 kJ. Where did the rest go? Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log if accepted):**
  1. Lesson 2 key term "q = mcΔT: The heat equation: heat (J) = mass of solution (g) × specific heat capacity (J g⁻¹ °C⁻¹)". In the combustion lesson the mass is the water in the can, not a solution; the lesson's own trap says so. Suggest "mass of the water (or solution) being heated".
  2. Lesson 2 hook: Lavoisier and Laplace's ice calorimeter is said to give "approximately 34 kJ g⁻¹" for charcoal and to be "the first quantitative measurement of chemical energy". Neither figure nor the priority claim is sourced, and the "Revisit" task's ΔT for 1.50 g of charcoal into 200 g of water assumes no loss (1.50 × 34 000 ÷ (200 × 4.18) = 61 °C, a boil-risk value worth a note). Suggest citing a source for the 1780 value or saying "about 30 kJ per gram (their published estimate)" with a reference; and in the Revisit task note that the water would approach boiling.
  3. Lesson 3 worked example 2 (H₂SO₄): ΔT = 13.2 °C gives −41.4 kJ mol⁻¹; the expected rise for 0.100 mol of water in 75.0 g is about 18 °C. The lesson already flags the 27% shortfall as needing evaluation; consider choosing data near the expected rise so the worked example models a typical result, keeping the evaluation as a separate question.
  - Checked and correct: lesson 2 worked example 1 (0.72 g; 0.01562 mol; 11.7 K; 9781 J; −626 kJ mol⁻¹); lesson 3 worked example 1 (100.0 g; 6.6 K; 2758.8 J; 0.0500 mol; −55.2 kJ mol⁻¹); lesson 3 drill 1 (1379.4 J; −55.2); lesson 2 supported frame (5643 J).
- **Cause chain taught, in order:** (1) the same heat shared among more particles raises each one's energy less, so twice the water rises half as much (1, 2); (2) different materials need different energy per gram per degree (3); (3) energy needed scales with grams and with degrees, so q = mcΔT (4); (4) a change of one degree Celsius is a change of one kelvin (5); (5) only the material that warmed absorbed the heat, so its mass and c go in (7, 8); (6) both solutions warm, so the whole mixture's mass goes in (8, 9); (7) copper passes flame heat into the water; foam keeps solution heat in (10); (8) energy gained by the surroundings was lost by the system, so the signs are opposite (11); (9) any heat that misses the liquid makes q too small (12).
- **Entry knowledge:** m4-v01 (system, surroundings, exothermic, ΔH sign, the burner and foam cup readings); Stage 5 particle model and energy units (joules); m2-v10 (concentration and volume, for the card only); grams and millilitres of water (1 mL ≈ 1 g, said as an assumption).
- **Learner-visible vocabulary (plain meaning at first use):** heat (2); temperature (2); specific heat capacity, c (3); calorimeter (6, "a container for measuring the heat of a reaction by the temperature change of a liquid"); q (4, "heat").
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **burner rig** (`m7-spirit-burner-calorimeter-v1.png`; coded readout; label card); **particle lens** (scene 2: energy packets shared among 200 and 400 particle dots; temperature bars); **c comparison** (scene 3: two coded blocks "1 g water" and "1 g copper" each warming by 1 degree with an energy counter "4.18 J" and "0.39 J"); **scaling ladder** (scene 4: "1 g, 1 K: 4.18 J" → "× 200.0 g" → "× 11.7 K" → "9781 J", each rung on cue, collapsing into the formula strip); **calculation board** (scenes 6, 9, 11); **foam cup station** (scenes 8 to 10: `m6-foam-cup-calorimeter-v1.png`, two `m6-beaker-v1.png` with coded colourless fills, tilt arcs, a coded readout); **sign card** (scene 11); **assumption leaks** (scene 12: faint orange arrows escaping from the can's sides and the cup's lid, each tagged); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v01):** heat q warm orange; mass amber; c teal; ΔT deep orange; temperatures slate; energy into the surroundings orange arrows; the reaction's sign red when negative; crossed items red strike; earlier rows dimmed.
- **Board layout (Revision 2):** heading top left. Stages, each under about 60 s: the burner can and ghost can (1); the water-mass slider with two particle lenses (2); the two 1 g blocks (3); the scaling ladder (4); the °C and K scales at full width (5); the calculation layout beside the burner (6, 7, about 60 s with the crossed fuel row arriving in 7); the foam cup station (8, 9, about 55 s with the pours and then the rows); the split containers (10); the sign card and leak arrows (11, 12, about 56 s); the memory card (13); question cards (14 to 17); the final layout (18).
- **Colour roles (Revision 2, fixed for the whole video):** heat q warm orange; mass amber; c teal; ΔT deep orange; temperatures slate; energy into the surroundings orange arrows; the reaction's sign red when negative; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark; precision, data and assumption tags grey; earlier rows dimmed.
- **Type sizes (Revision 2, 1080p):** the current calculation row at least 44 px (48 px); framed results, temperature readouts and the slider's ΔT readout about 52 px; givens 36 px; earlier rows 30 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px (precision tags 26 px). All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the water-mass slider (scene 2).** A live readout on the core idea (the same heat spread through more water gives a smaller rise): with the heat fixed at 9781 J, a slider sets the water in the can from 100 g to 400 g; the can's coded water level rises, the particle lens adds dots, and the ΔT readout (52 px) recomputes q ÷ (m × 4.18): 23.4, 11.7, 7.8 and 5.85 °C at 100, 200, 300 and 400 g. The student sees half the rise at twice the mass before the formula is written.

Author notes (not learner copy):
(a) HSC Chemistry data sheet: specific heat capacity of water 4.18 × 10³ J kg⁻¹ K⁻¹ (Codex to confirm the printed form on the current data sheet); 4.18 × 10³ J kg⁻¹ K⁻¹ = 4.18 J g⁻¹ K⁻¹ (the same physical value; the number changes with the unit). Copper 0.385 J g⁻¹ K⁻¹ (CRC Handbook, 25 °C).
(b) Burner (site lesson 2 worked example 1): ΔT = 31.2 − 19.5 = 11.7; q = 200.0 × 4.18 × 11.7 = 9781.2 J = 9.78 kJ. Prediction: 9781.2 ÷ (400.0 × 4.18) = 5.85 °C. Fuel-mass slip: 0.72 × 4.18 × 11.7 = 35.2 J.
(c) Foam cup (site lesson 3 worked example 1): ΔT = 28.0 − 21.4 = 6.6; q = 100.0 × 4.18 × 6.6 = 2758.8 J = 2.76 kJ (three figures, Module 4 root decision 3); half-mass slip 50.0 × 4.18 × 6.6 = 1379.4 J = 1.38 kJ.
(d) The can's own heat capacity: a 60 g copper can would take 60 × 0.385 × 11.7 = 270 J (about 3% of q), ignored in the school model; the foam cup's heat capacity is small and also ignored (site). v03 discusses where the rest of the 21 kJ goes; the can is a small part of it.
(e) Handoff data: ethanol MM = 2 × 12.01 + 6 × 1.008 + 16.00 = 46.068; 0.72 ÷ 46.068 = 0.01563 mol; × 1367 kJ mol⁻¹ (standard enthalpy of combustion of ethanol, the site's accepted value; CRC −1366.8) = 21.4 kJ ("about twenty-one kilojoules"); 9.78 ÷ 21.4 = 46%.
(f) The Lavoisier hook is not used (site note 2; and the video's question begins from v01's can).
(g) Pronunciations: "q equals m c delta T"; "four point one eight joules per gram per degree"; "four point one eight times ten to the three joules per kilogram per kelvin".

Main question: *How can a calorimeter turn a temperature rise into heat transfer?*
Entry knowledge: m4-v01; Stage 5; m2-v10.
Stops after: q = mcΔT built and used for two calorimeters with the heated material's m and c; the surroundings' q against the reaction's sign; assumptions. No molar ΔH.
Handoff: chem-y11-m4-v03, combustion calorimetry errors.

## Opening frame and final frame

- **Opening frame:** m4-v01's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v03` opens on it):** left: `m7-spirit-burner-calorimeter-v1.png` with readout "31.2 °C", "started at 19.5 °C", label "200.0 g of water", and a teal result chip on the can "water gained 9.78 kJ". Lower left: `m7-spirit-burner-on-balance-v1.png` small, coded readout "151.62 g" with a grey "started at 152.34 g" and a chip "0.72 g of ethanol burned". Right: a two-bar comparison (coded): an orange bar "0.72 g of ethanol can release about 21 kJ (data)" and a shorter teal bar "the water gained 9.78 kJ", the gap between their ends shaded grey with a "?" in it. The amber chip "Where did the rest of the energy go?". The chip "Next: Why does combustion calorimetry underestimate a fuel enthalpy?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's the can of water from last time. It warmed by eleven point seven degrees. To turn that into joules, start with a prediction. Suppose the can held twice as much water, four hundred grams, and it received exactly the same heat. Would it warm by eleven point seven degrees, by about twice as much, or by about **half**?

Visual: opens on m4-v01's final frame; the "Next" chip fades and the profile at the right fades. On "eleven point seven degrees" the readout pulses "+11.7 °C". Heading writes: "From a temperature rise to joules". On "twice as much water" a ghost second can beside the first at the same scale, label "400 g of water", same orange arrows (tag "same heat"; amber hand tag "2 × water" with a pen arrow between the cans). Chips "11.7 °C", "about twice", "about half". On "half" the 3 s `Countdown` ring runs.

### 2. heat is not temperature
> About half. The same energy, shared among twice as many particles, gives each one only about half as much extra. That's the difference between heat and temperature. Heat is energy transferred because of a temperature difference. Temperature is how hot something is, and it depends on the average energy of the particles. So the rise depends on how much heat went in, and on how much stuff it had to **warm**.

Visual: "about half" ticks; the ghost can's readout shows "+5.85 °C". On "shared among twice as many particles" (stage change: the water-mass slider) a particle lens for each can: the same number of orange energy packets drops into 200 dots and into 400 dots; each dot's glow is weaker on the right; the slider then runs (see Simulation), the ΔT readout recomputing 23.4, 11.7, 7.8, 5.85 °C as the water goes from 100 g to 400 g (deep orange hand tag "more water, smaller rise"). On "Heat is energy transferred" gloss card "heat: energy transferred because of a temperature difference" (orange); on "Temperature is" gloss card "temperature: how hot something is (average particle energy)" (slate). On "warm" two chips "how much heat" and "how much stuff" (a pen ring around "5.85").

### 3. specific heat capacity
> It also depends on what the stuff is. Specific heat capacity, c, is the energy needed to warm one gram of a substance by one degree. For water it's four point one eight joules per gram per degree. Copper needs only about zero point three nine joules. The data sheet writes water's value per kilogram, four point one eight times ten to the three joules per kilogram per kelvin. That's the same value, written per **gram**.

Visual: the c comparison: two coded blocks, "1 g of water" (blue) and "1 g of copper" (copper colour), each with a thermometer rising one degree. On "Specific heat capacity, c" gloss card "specific heat capacity, c: the energy to warm 1 g by 1 degree". On "four point one eight joules" the water's energy counter fills to "4.18 J" (teal); on "zero point three nine" the copper's counter stops at "0.39 J" (tag "copper: 0.385 J g⁻¹ K⁻¹"). On "The data sheet" a coded data-sheet strip "Specific heat capacity of water: 4.18 × 10³ J kg⁻¹ K⁻¹"; on "gram" an equals sign links it to "4.18 J g⁻¹ K⁻¹" with the working "4180 J per kg ÷ 1000 g per kg = 4.18 J per g" (teal hand tag "same value, new unit").

### 4. building q = mcΔT
> Now build the formula. One gram of water, warmed by one degree, takes four point one eight joules. Two hundred grams takes two hundred times as much. And warming it by eleven point seven degrees takes eleven point seven times that again. So the heat is the mass, times the specific heat capacity, times the temperature change. q equals m c delta **T**.

Visual: the scaling ladder at the right: rung 1 "1 g, 1 degree: 4.18 J"; on "Two hundred grams" rung 2 "200.0 g, 1 degree: 200.0 × 4.18 J" (amber 200.0); on "eleven point seven degrees" rung 3 "200.0 g, 11.7 degrees: 200.0 × 4.18 × 11.7 J" (deep orange 11.7). On "the mass, times the specific heat capacity, times the temperature change" the three numbers lift out and the ladder collapses into the formula strip "q = m c ΔT" with labels under each symbol: "heat (J)", "mass (g)", "J g⁻¹ K⁻¹", "temperature change (K or °C)". On "T" the strip settles at the top of the board, where it stays (framed; ink hand tag "built, not given").

### 5. the temperature change
> Delta T is the final temperature minus the starting temperature. A change of one degree Celsius is the same size as a change of one kelvin, so you don't convert a temperature change. Here it's thirty-one point two minus nineteen point five, which is eleven point seven. And if the temperature falls, delta T comes out **negative**.

Visual: (stage change: the °C and K scales at full width; about 25 s) under the formula strip, "ΔT = T(final) − T(initial)" (48 px). On "one degree Celsius is the same size as a change of one kelvin" two coded scales side by side, °C and K, with matching 1-degree steps bracketed; a crossed chip "add 273 to ΔT". On "thirty-one point two minus nineteen point five" the row "ΔT = 31.2 − 19.5 = 11.7 °C (= 11.7 K)". On "negative" a grey chip "temperature falls → ΔT negative (for example the NH₄Cl cup: −5.8 °C)". The crossed chip carries a red hand tag "a change is a change".

### 6. the burner calculation
> So here's the calculation. This can is a simple calorimeter, a container for measuring the heat of a reaction from the temperature change of a liquid. The water's mass is two hundred point zero grams, c is four point one eight, and delta T is eleven point seven. Two hundred times four point one eight times eleven point seven gives nine thousand seven hundred and eighty-one joules. Divide by a thousand, and that's nine point seven eight **kilojoules**.

Visual: the board settles into the calculation layout beside the burner rig. On "simple calorimeter" gloss "calorimeter: a container for measuring the heat of a reaction from a liquid's temperature change". Task strip: "Find the heat absorbed by the water". Equation strip: "q = m c ΔT". Givens grouped (each on its cue): "m(water) = 200.0 g" (amber); "c(water) = 4.18 J g⁻¹ K⁻¹" (teal); "ΔT = 11.7 K" (deep orange). Stage row on "Two hundred times": "q = 200.0 × 4.18 × 11.7"; on "nine thousand seven hundred and eighty-one joules" "= 9781 J" (orange). On "Divide by a thousand" the next row "= 9781 ÷ 1000 = 9.78 kJ"; on "kilojoules" the result frames in a dark-ink box with a green tick (orange hand tag "heat into the water").

### 7. whose mass?
> Which mass goes in the formula? It's the mass of whatever warmed up and was measured, here the water. Not the fuel. The ethanol is the energy source, and it burned away. Put in the fuel's mass, zero point seven two grams, and you'd get about thirty-five joules, which is nowhere near right. And use c for the same material that you weighed, here **water**.

Visual: on "whatever warmed up and was measured" the water in the can is ringed and the "m(water)" given pulses. On "Not the fuel" the burner's wick is ringed in grey, label "energy source". On "zero point seven two grams" a crossed row: "q = 0.72 × 4.18 × 11.7 = 35 J" with a red strike and a red hand tag "fuel mass: wrong". On "water" the givens "m(water)" and "c(water)" are bracketed together, tag "same material".

### 8. a foam cup calorimeter
> Now a different calorimeter, a foam cup. Fifty millilitres of hydrochloric acid and fifty millilitres of sodium hydroxide solution are mixed, and the temperature rises from twenty-one point four to twenty-eight point zero degrees. Both solutions warm up, so m is the whole mixture, a hundred millilitres, taken as a hundred grams. That's two assumptions. The solution has the density of water, and it has the specific heat capacity of **water**.

Visual: the board clears to the foam cup station: `m6-foam-cup-calorimeter-v1.png` with coded readout "21.4 °C"; two `m6-beaker-v1.png` with coded colourless fills, labels "50.0 mL HCl, 1.00 mol L⁻¹" and "50.0 mL NaOH, 1.00 mol L⁻¹". On "are mixed" the beakers tilt on coded arcs over the cup in turn (no hands); the readout climbs "21.4 → 28.0 °C" (tag "data: HSCScience worked example"). On "Both solutions warm up" the whole liquid in the cup's window glows faint orange. On "the whole mixture" the givens write (amber): "V(total) = 50.0 + 50.0 = 100.0 mL" then "m = ρV = 1.00 g mL⁻¹ × 100.0 mL = 100.0 g" (amber hand tag "both solutions warmed"). On "two assumptions" two chips: "density of water: 1.00 g mL⁻¹" and on "specific heat capacity" "c of water: 4.18 J g⁻¹ K⁻¹".

### 9. the foam cup calculation
> Delta T is six point six degrees. So q is a hundred times four point one eight times six point six, which is two thousand seven hundred and fifty-nine joules, or two point seven six kilojoules. Using only fifty grams, the acid on its own, would halve the answer, because the base warmed up **too**.

Visual: calculation rows beside the cup: "ΔT = 28.0 − 21.4 = 6.6 K"; on "a hundred times four point one eight times six point six" "q = 100.0 × 4.18 × 6.6"; on "two thousand seven hundred and fifty-nine joules" "= 2758.8 J"; on "two point seven six kilojoules" "= 2.76 kJ" framed in a dark-ink box with a green tick (grey tag "three figures (course rule); ΔT = 6.6 justifies two"). On "Using only fifty grams" a crossed row "q = 50.0 × 4.18 × 6.6 = 1.38 kJ (acid only)" (red hand tag "half the mixture"). On "too" the two beaker labels pulse together.

### 10. why these containers
> The copper can sits over a flame, and copper conducts heat well, so heat passes quickly from the flame into the water. The foam cup holds a reaction that happens in the liquid itself, and foam insulates, so less heat escapes through its walls. Each one is trying to get as much of the heat as possible into the liquid we're **measuring**.

Visual: split: left the burner rig with orange arrows passing quickly through the copper base into the water (tag "copper conducts"); right the foam cup with orange arrows from the liquid bouncing back off the cup wall (tag "foam insulates"). On "measuring" both liquids are ringed teal (hand tags copper "conducts in", grey "keeps it in").

### 11. q is the surroundings' heat
> So what does q actually measure? It's the heat gained by the water, the surroundings. It's positive, because the water warmed up. The reaction lost that energy, so from the system's point of view, the heat change is the same size with the opposite sign, minus nine point seven eight kilojoules for the burner. That's why delta H will come out negative. To get delta H, we'll also need to divide by the moles that reacted, and that's the next **step**.

Visual: the sign card, three rows. Row 1 on "heat gained by the water": "q(water) = +9.78 kJ: heat gained by the surroundings (this sample)" (orange, with the can thumbnail). Row 2 on "the same size with the opposite sign": "heat change of the reaction = −9.78 kJ" (red), linked to row 1 by a "× (−1)" arrow and m4-v01's outward orange arrows crossing the dashed system outline. Row 3 on "delta H will come out negative": "ΔH: the enthalpy change per mole of reaction, kJ mol⁻¹" (red). On "divide by the moles" a grey "÷ n" box with "next video" in it. On "step" row 3 pulses; a red hand tag "opposite sign" sits on the "× (−1)" arrow.

### 12. the big assumption
> All of this rests on one big assumption. All the heat from the reaction went into the liquid. None went into the can or the cup, and none escaped into the air. For the foam cup, we also assumed the mixture behaves like water. Whenever heat escapes, the water warms less, so q comes out too **small**.

Visual: both calorimeters side by side; on "All the heat from the reaction went into the liquid" a tick chip "assume: all heat → liquid". On "None went into the can" the copper can's wall glows faintly (tag "can warms too"); on "none escaped into the air" faint orange arrows leak from the can's sides and the flame's edges (tags "lost to the air"), and from the cup's lid (smaller). On "behaves like water" the two assumption chips from scene 8 return. On "small" a chip "heat lost → ΔT smaller → q too small" (orange, with a down arrow; orange hand tag "leaks make q small").

### 13. the stuff that warmed
> Here's the rule to remember. Mass, c and delta T, all from the stuff that **warmed**.

Visual: the memory line writes large in the explainer's handwriting style: "Mass, c and ΔT: all from the stuff that warmed." On "warmed" the water in the can and the mixture in the cup are ringed, each with its m, c and ΔT tags.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. A spirit burner heats two hundred and fifty grams of water in a copper can from eighteen point six to twenty-seven point four degrees. During the experiment, the burner's mass falls by zero point six zero grams. Calculate the heat absorbed by the water, in kilojoules. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A spirit burner is used to heat 250.0 g of water in a copper can. The temperature of the water rises from 18.6 °C to 27.4 °C, and the mass of the spirit burner decreases by 0.60 g. Calculate the heat absorbed by the water, in kJ. (Specific heat capacity of water = 4.18 J g⁻¹ K⁻¹) (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 1 (brief)
> Delta T is twenty-seven point four minus eighteen point six, eight point eight. Then q is two hundred and fifty times four point one eight times eight point eight, nine thousand one hundred and ninety-six joules, or nine point two zero kilojoules. The zero point six zero grams is the fuel, so it doesn't go in the **formula**.

Visual: card shrinks to the top. Rows: "ΔT = 27.4 − 18.6 = 8.8 K"; "q = 250.0 × 4.18 × 8.8 = 9196 J = 9.20 kJ" framed in a dark-ink box with a green tick (grey tag "ΔT = 8.8 justifies two figures"). On "formula" a chip "q = 0.60 × 4.18 × 8.8 = 22 J" fades in and is crossed in red (red hand tag "fuel mass"). Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. Thirty millilitres of one mole per litre hydrochloric acid is mixed with thirty millilitres of one mole per litre sodium hydroxide solution in a foam cup, and the temperature rises from twenty point eight to twenty-seven point four degrees. Calculate the heat absorbed by the solution, then state the heat change of the reaction, with its sign. Pause here to answer.

Visual: `QuestionCard`: "30.0 mL of 1.00 mol L⁻¹ hydrochloric acid is mixed with 30.0 mL of 1.00 mol L⁻¹ sodium hydroxide solution in a polystyrene foam cup. The temperature rises from 20.8 °C to 27.4 °C. Assume the density of the mixture is 1.00 g mL⁻¹ and its specific heat capacity is 4.18 J g⁻¹ K⁻¹. (a) Calculate the heat absorbed by the solution. (2 marks) (b) State the heat change of the reaction, including its sign. (1 mark)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> The sixty millilitre mixture has a mass of sixty grams. Delta T is six point six. So q is sixty times four point one eight times six point six, about one thousand six hundred and fifty-five joules, or one point six six kilojoules. The reaction released that heat, so its heat change is minus one point six six kilojoules. Using thirty grams would leave out half the **mixture**.

Visual: card shrinks. Rows: "V(total) = 30.0 + 30.0 = 60.0 mL; m = ρV = 1.00 g mL⁻¹ × 60.0 mL = 60.0 g" (amber); "ΔT = 27.4 − 20.8 = 6.6 K"; "q = 60.0 × 4.18 × 6.6 = 1655 J = 1.66 kJ" and "(b) heat change of the reaction = −1.66 kJ (released)", both framed in a dark-ink box with a green tick (grey tag "ΔT = 6.6 justifies two figures"). On "mixture" a chip "m = 30.0 g: q = 0.828 kJ" fades in and is crossed in red (red hand tag "both solutions warmed"). Hold about 1 second.

### 18. conclusion and handoff
> So a calorimeter turns a temperature rise into heat with q equals m c delta T, using the mass, specific heat capacity and temperature change of the material that warmed. But here's a puzzle. The burner lost zero point seven two grams of ethanol. Burning that much ethanol can release about twenty-one kilojoules, yet the water gained only nine point seven eight. Where did the rest **go**?

Visual: the memory line returns small at the top. On "q equals m c delta T" the formula strip pulses. On "The burner lost" the board settles into the final frame: the burner rig with "water gained 9.78 kJ"; on "zero point seven two grams" `m7-spirit-burner-on-balance-v1.png` small at the lower left with "151.62 g", "started at 152.34 g" and the chip "0.72 g of ethanol burned". On "about twenty-one kilojoules" the orange bar "0.72 g of ethanol can release about 21 kJ (data)" draws at the right; on "nine point seven eight" the shorter teal bar "the water gained 9.78 kJ"; the gap shades grey with "?". On "go" the amber chip "Where did the rest of the energy go?" and the chip "Next: Why does combustion calorimetry underestimate a fuel enthalpy?" write. Hold about 2 seconds. This is the final frame (m4-v03 opens on it).

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Heat: energy transferred because of a temperature difference.
2. c: energy to warm 1 g by 1 degree (water 4.18 J g⁻¹ K⁻¹).
3. q = mcΔT, using the m, c and ΔT of the material that warmed, never the fuel.
4. ΔT = final − initial; a 1 °C change = a 1 K change.
5. q is the surroundings' gain; the reaction's heat change has the opposite sign.

Memory aid (framed card, on the notes screen): *Mass, c and ΔT: all from the stuff that warmed.*

At the end the notes cross-fade back to scene 18's final frame.

## Teaching checks

- **Does it explain causes?** Why twice the water rises half as much (2: the same energy shared among more particles); why c differs (3); why the formula multiplies (4: energy scales with grams and degrees); why °C and K changes match (5); why the water's mass, not the fuel's (7); why the whole mixture (8, 9); why copper and foam (10); why the signs are opposite (11); why lost heat makes q small (12).
- **Misconceptions addressed:** heat equals temperature (2); c is the same for all materials (3); add 273 to ΔT (5); fuel mass in q (7; crossed in A1); one solution's mass (9; crossed in A2); q carries the reaction's sign (11).
- **One idea at a time:** prediction (1), heat and temperature (2), c (3), formula (4), ΔT (5), worked burner (6, 7), foam cup (8, 9), containers (10), signs (11), assumptions (12).
- **Video makes it easier:** energy packets shared among more particles (2); two 1 g blocks with energy counters (3); the scaling ladder collapses into the formula (4); calculation rows on the word that says them (6, 9); outward arrows and a "× (−1)" link between q and the reaction (11); leaking arrows for the assumption (12).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 24 s and 28 s.
- **Avoided double teaching:** system, surroundings and the ΔH sign (m4-v01); concentration (m2-v10; on cards only). Year 12 `chem-m6-c03` builds on this video.
- **Syllabus coverage:** `C4-IQ1-02` calorimetry and q = mcΔT used to calculate (6, 9, A1, A2); "analyse" through assumptions (8, 12) and the sign distinction (11); the comparison with secondary data and the explanation of differences begin in the handoff (18) and are completed in v03.
- **Out of scope by design:** molar ΔH, percentage error and error sources (v03); dissolution (v04); heat capacity of the apparatus in calculations.

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: ΔT = 27.4 − 18.6 = 8.8 K (1 mark); q = m c ΔT = 250.0 × 4.18 × 8.8 = 9196 J = 9.20 kJ (1 mark). Classic mistake (crossed): q = 0.60 × 4.18 × 8.8 = 22 J (the fuel's mass used).

**Attempt 2 (scene 16; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: (a) V(total) = 30.0 + 30.0 = 60.0 mL; m = ρV = 1.00 g mL⁻¹ × 60.0 mL = 60.0 g; ΔT = 27.4 − 20.8 = 6.6 K (1 mark); q = 60.0 × 4.18 × 6.6 = 1655 J = 1.66 kJ (1 mark; three figures by the course rule, two justified by ΔT). (b) The reaction released this heat, so its heat change is −1.66 kJ (negative: exothermic) (1 mark). Classic mistake (crossed): m = 30.0 g, giving 0.828 kJ.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Burner (site data) | 200.0 g water; 19.5 → 31.2 °C; ΔT 11.7; q = 9781 J = 9.78 kJ | opening, 1, 4 to 7, 11, 18 |
| Prediction and slider | 400.0 g, same heat: 5.85 °C; slider 100, 200, 300, 400 g: 23.4, 11.7, 7.8, 5.85 °C | 1, 2 |
| c values | water 4.18 J g⁻¹ K⁻¹ (4.18 × 10³ J kg⁻¹ K⁻¹); copper 0.385 (about 0.39) | 3 |
| Fuel-mass slip | 0.72 × 4.18 × 11.7 = 35 J | 7 |
| Foam cup (site data) | 50.0 + 50.0 mL, 1.00 mol L⁻¹ each; V 100.0 mL, m = ρV = 100.0 g; 21.4 → 28.0 °C; ΔT 6.6; q = 2758.8 J = 2.76 kJ; slip 1379.4 J = 1.38 kJ | 8, 9 |
| Signs | q(water) +9.78 kJ; reaction −9.78 kJ | 11 |
| A1 | 250.0 g; 18.6 → 27.4 °C; ΔT 8.8; 9196 J = 9.20 kJ; fuel 0.60 g; slip 22 J | 14, 15 |
| A2 | 30.0 + 30.0 mL, 1.00 mol L⁻¹; 20.8 → 27.4 °C; ΔT 6.6; V 60.0 mL, m = ρV = 60.0 g; 1655 J = 1.66 kJ; reaction −1.66 kJ; slip 0.828 kJ | 16, 17 |
| Handoff | burner 152.34 → 151.62 g; 0.72 g ethanol; 0.01563 mol; × 1367 kJ mol⁻¹ = 21.4 kJ (about 21 kJ); 9.78 kJ is 46% | 18, final frame |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 31.2 − 19.5 = 11.7; 200.0 × 4.18 × 11.7 = 9781.2 J; ÷ 1000 = 9.78 kJ; 9781.2 ÷ (400.0 × 4.18) = 5.85 °C.
- 0.72 × 4.18 × 11.7 = 35.21 J.
- 4.18 × 10³ J kg⁻¹ K⁻¹ ÷ 1000 g kg⁻¹ = 4.18 J g⁻¹ K⁻¹.
- 28.0 − 21.4 = 6.6; 100.0 × 4.18 × 6.6 = 2758.8 J → 2.76 kJ; 50.0 × 4.18 × 6.6 = 1379.4 J → 1.38 kJ.
- Slider: 9781.2 ÷ (m × 4.18) for m = 100, 200, 300, 400 g: 23.40, 11.70, 7.80, 5.85 °C.
- 27.4 − 18.6 = 8.8; 250.0 × 4.18 × 8.8 = 9196 J = 9.196 kJ → 9.20 kJ; 0.60 × 4.18 × 8.8 = 22.07 J.
- 27.4 − 20.8 = 6.6; 60.0 × 4.18 × 6.6 = 1655.28 J → 1.66 kJ (three figures; guard digits 1.65528); 30.0 × 4.18 × 6.6 = 827.64 J → 0.828 kJ.
- 152.34 − 151.62 = 0.72 g; MM(C₂H₅OH) = 46.068; 0.72 ÷ 46.068 = 0.015629 mol; × 1367 = 21.37 kJ; 9.7812 ÷ 21.37 = 0.458.
- Copper can (author note d): 60 × 0.385 × 11.7 = 270.3 J.

## Memory aid check

- **"Mass, c and ΔT: all from the stuff that warmed."** Meaning: every quantity in q = mcΔT describes the one material whose temperature was measured. Assumptions checked: in both school calorimeters the measured material is the water or the whole solution, and the model ignores the can, the cup and the air (stated in scene 12); "warmed" also covers cooling (ΔT negative; scene 5 says so), so the aid still holds for v04's cooling solutions if read as "the stuff whose temperature changed" (noted for the v04 designer). It blocks both site traps (fuel mass; one solution's mass).
- **Considered, not used:** "MCAT" for m c ΔT (the formula is short; the acronym adds nothing and is a US exam name).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **6,345 characters**, 19 scenes (per scene: 319, 404, 417, 348, 327, 451, 352, 441, 294, 334, 447, 296, 81, 301, 323, 376, 374, 385, 75; Revision 1: 6,336). At 13.3 characters per second the speech is about 477 s; add about 10 s of settling (the lens and slider in 2, the ladder in 4, the pours in 8, the sign card in 11), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 60 s in all): **about 568 s** (Revision 1: about 567 s), just under the cap.

## Scene list and build ids

Lesson key `c-y11-m4-v02` (route chem-y11-m4-v02; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v02`.

In order (19 scene headings, all `### N.`): hook-prediction, heat-vs-temperature, specific-heat, build-formula, temperature-change, burner-calculation, whose-mass, foam-cup, foam-cup-calculation, containers, surroundings-sign, assumptions, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m4-v01's final frame into scene 1 by camera continue; 1 to 2 camera push into the two cans' particles; 2 to 3 clear change to the blocks; 3 to 4 camera continue (the water block becomes rung 1); 4 to 5 camera continue; 5 to 6 camera continue (the burner returns at the left); 6 to 7 camera continue; 7 to 8 clear change to the foam cup; 8 to 9 camera continue; 9 to 10 split screen; 10 to 11 camera continue; 11 to 12 camera continue; 12 to 13 clear change; attempts and feedback card shrink to the top; 17 to 18 board clear; 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v02-learning-review.md`, `checks/c-y11-m4-v02-science-check.md`.

## Assets

Have (inspected 5 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/m7-spirit-burner-calorimeter-v1.png` (2000 × 2000; copper can with thermometer over a lit spirit burner, cap beside it): opening, scenes 1, 2, 6, 7, 10 to 12, 18, final frame.
- `public/assets/chemistry/m7-spirit-burner-on-balance-v1.png` (2000 × 2000; spirit burner on a digital balance): scene 18, final frame.
- `public/assets/chemistry/m6-foam-cup-calorimeter-v1.png` (2000 × 2000; lidded foam cup, cutaway window, probe through the lid): scenes 8 to 12.
- `public/assets/chemistry/m6-beaker-v1.png` (2048 × 2048; empty glass beaker; two copies with coded colourless fills): scene 8.
- **Inspected, not used:** `p02-foam-cup-in-beaker-v1.png` (Year 12's double-cup practical set-up; one cup is enough here); `m7-ps-foam-cup-v1.png` (a plain foam cup with no lid or probe); `m7-spirit-burner-calorimeter-shield-v1.png` (the draught shield is v03's improvement and should first appear there); `c8-thermometer-hot-v1.png` (the can already has a thermometer).

Need: no new plates.

Coded: readouts, particle lens and energy packets, c blocks and counters, data-sheet strip, scaling ladder, formula and calculation rows, tilt arcs and fills, split screen arrows, sign card, leak arrows, comparison bars, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module4/lesson02.sa.html` (`l02-the-spirit-burner-calorimeter-setup-title`; worked example 1's data and q; the fuel-mass trap) and `module4/lesson03.sa.html` (`l03-combustion-vs-neutralisation-calorimetry-title`; worked example 1's data and q; the one-solution trap; the stated assumptions).
3. Confirm the printed form of water's specific heat capacity on the current HSC Chemistry data sheet (author note a), copper's 0.385 J g⁻¹ K⁻¹, and the ethanol enthalpy of combustion used for the handoff (−1367 kJ mol⁻¹).
4. Confirm both attempt cards are original, carry every needed fact (A2 states density and c), and show nothing answer-bearing.
5. Confirm the syllabus quote matches `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested (beakers tilt by code); no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m4-v01's final frame, and send the final frame to the m4-v03 designer.

## YouTube metadata (draft)

Title: Calorimetry and q = mcΔT: Turning a Temperature Rise into Joules | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

A can of water over a spirit burner warmed by 11.7 °C. How many joules is that? Build q = mcΔT from specific heat capacity, see why m is the mass of the water (never the fuel) and why a foam cup's m is the whole mixture, and learn why q is positive for the surroundings while the reaction's heat change is negative. State the assumptions every school calorimeter relies on. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"investigate enthalpy changes in reactions using calorimetry and q = mcΔT (heat capacity formula) to calculate, analyse and compare experimental results with reliable secondary-sourced data, and to explain any differences"

Previous: How does an energy profile distinguish endothermic from exothermic change? Next: Why does combustion calorimetry underestimate a fuel enthalpy?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Neutralisation as the second calorimeter (root).** The route's source sections use the foam cup with neutralisation; the site calls neutralisation a supporting application, and Year 12 owns its molar enthalpy. Here it is only the reaction that warms the foam cup (no −57 kJ mol⁻¹, no moles). Alternative if root prefers a syllabus-named context: dissolving anhydrous calcium chloride in water (which would overlap v04).
- **2. Data-sheet form (Codex).** The narration says the data sheet prints 4.18 × 10³ J kg⁻¹ K⁻¹. If the current data sheet prints a different form, scene 3's last two sentences change (about 160 characters) or are cut.
- **3. Precision (resolved in Revision 2).** Module 4 root decision 3 applied: three significant figures throughout (9.78, 2.76, 9.20, 1.66 and −1.66 kJ), with grey tags where ΔT justifies two.
- **4. Length (learning review).** About 567 s, just under the cap. Reserve cut: scene 10 (containers; about 330 characters) can shrink to its first two sentences.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the scaling ladder in scene 4 make the formula feel derived rather than given; is scene 11's sign card followable before ΔH = −q/n exists), then the science check and Codex error check.
- Checker output (5 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
- Brief 183 reviews (6 November): 0 blocker, 3 should fix; all resolved in Revision 2.
- Checker output (Revision 2, 6 November): narration 6,345 characters (per scene in "Narration length estimate"); no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 183 findings (`checks/c-y11-m4-v02-learning-review.md`, `checks/c-y11-m4-v02-science-check.md`; both list the same three):
1. Apply the root rounding decision (should fix): Module 4 root decision 3 applied. Final results are 9.78 kJ, 2.76 kJ (foam cup), 9.20 kJ (A1), 1.66 kJ and −1.66 kJ (A2), with grey tags where ΔT justifies two figures; the crossed slips become 1.38 kJ and 0.828 kJ. Scene 9 now says "two point seven six kilojoules"; feedback 2 says "one point six six" and "minus one point six six". Arithmetic recomputed with Python (2758.8, 1379.4, 1655.28, 827.64, 9196 J). The Calculation layout decision, the A2 decision, author note (c), "Numbers used", "Numbers to verify" and open decision 3 are updated.
2. Unit and quantity wording (should fix): scene 3 now says "That's the same value, written per gram", with the working "4180 J per kg ÷ 1000 g per kg = 4.18 J per g" on screen. The foam cup and A2 working now write "V(total) = ... mL" then "m = ρV = ... g" (scene 8, feedback 2, model answer); feedback 2's narration says "The sixty millilitre mixture has a mass of sixty grams".
3. Direction of error (should fix): the Assumptions decision now says heat loss makes q too small, while an inaccurate assumed density or c can bias q either way; scene 12's narration (heat loss only) was already correct and is unchanged.

Visual upgrade (teaching logic unchanged):
- Scene 1 already opens on the painted burner can (m4-v01's final frame); a ghost can and hand tag added.
- Live readout: the water-mass slider (scene 2): at fixed heat, 100 to 400 g of water gives a ΔT readout of 23.4, 11.7, 7.8, 5.85 °C.
- Stage list written (Board layout); the °C and K scales get their own full-width stage (5); no set-up runs past about 60 s.
- Framed answers with a green tick: 9.78 kJ (6), 2.76 kJ (9), 9.20 kJ (feedback 1), 1.66 kJ and −1.66 kJ (feedback 2); the formula strip framed (4). Crossed slips carry red hand tags ("a change is a change", "fuel mass: wrong", "half the mixture", "fuel mass", "both solutions warmed").
- Hand tags and a pen mark in role colours in every teaching scene (1 to 12).
- Memory card framed; key notes cut to five short bullets (about 323 characters of bullet text).
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- Question cards already arrive with their full text; unchanged. The opening and the final frame are unchanged, so the joins with m4-v01 and m4-v03 (which opens on this final frame, with 9.78 kJ) hold.

New plate requests: none.

Counts: 6,345 characters (Revision 1: 6,336); about 567 s to about 568 s. No reserve cut was needed.
