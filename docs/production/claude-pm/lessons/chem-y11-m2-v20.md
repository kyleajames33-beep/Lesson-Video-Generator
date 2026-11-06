# Year 11 Chemistry M2 V20: Gas volumes in reactions. How can a gas volume measure the progress or quantity of a reaction? (design)

Status: Revision 2 (6 Nov 2026): brief 182 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,913 characters, 15 scenes, about 537 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: twentieth and last Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 54, between `chem-y11-m2-v19` and `chem-y11-m3-v01`; a practical and calculation video that applies the gas laws to a reaction. Templates: `chem-y11-m2-v19.md` and `v17.md` (same designer, layout and colour key), `chem-y11-m2-v09.md` (the marble-chip mass-balance practical, recalled), `chem-y11-m2-v04.md` (gas volumes counting moles, the burette method), `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` and `chem-m5-g02.md` (calculation staging), `bio-y11-fa1-v05.md` (plates), `chem-m8-p02.md` (practical conventions). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v20` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Measure collected gas under stated conditions, correct only conditions actually needed, and use the balanced mole ratio."; next handoff: "Which observations are evidence that new substances formed?"; practical: "Quantitative gas-volume reaction investigation"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson15.sa.html` (SHA256 `fddafeba74553bc550196bfae464df4d3da32f508ee29efb3501efbcbc264d1e`, recomputed, matches the route), sections `l15-avogadro-title`, `l15-prac-title` and `l15-worked-title`. Used: "Gas stoichiometry is not a new method ... When a gas is given or asked for, you convert between volume and moles ... The only trap is choosing the right molar volume for the stated conditions"; "Always identify conditions before choosing the molar volume value"; trap 2 ("Always go mass → moles → ratio → moles of gas → volume. Never skip the mass-to-moles step"); trap 3 (the volume-ratio shortcut only for gases; already taught in m2-v16, recalled once); the gas-syringe practical apparatus (`l15-prac-title`); worked example 1's reaction family (calcium carbonate giving carbon dioxide, 1 : 1) and worked example 3's direction (gas volume given, solid mass found); the site's Activity 2 row 1 reaction (2H₂O₂ → 2H₂O + O₂, 2 : 1), used in attempt 2 with new numbers. Not used: the "Step 0 / Step 5" naming (m2-v16 site note 3; the course's "Known to moles, ratio, unknown" line is used, root decision m2-17); "STP" and "RTP" (the cards state the conditions); the site's 24.8 (the course uses 24.79, root decision m2-2).

Owner rules applied: as `chem-y11-m2-v19.md` (one learner question; no people, hands or faces: apparatus alone, the chips added and the bung inserted by code; real apparatus as painted plates; readouts, tables, `LineGraph`s and calculation rows coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame). Data are illustrative and tagged so.

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger's broken apostrophes shown corrected, root decision m1-9):

- `C2-IQ1-01`: "conduct practical investigations to observe and measure the quantitative relationships of chemical reactions, including but not limited to:"
  - "volumes of gases in chemical reactions (ACSCH046)"
- `C2-IQ2-03`: "explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"
  - "moles of elements and compounds n = m/MM  (n = chemical amount in moles, m = mass in grams, MM = molar mass in gmol-1)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (pages 39 and 40)

**Boundary:** opens on m2-v19's final frame (the bunged flask of marble chips fizzing in acid, a tube to the gas syringe at 0 mL, "room: 21.0 °C, 101.3 kPa", "PV = nRT", "gas volume → moles → how far? how much?"). Teaches: catching the gas instead of weighing its loss (m2-v09 recalled); the limiting chips set the amount of gas, so double the chips gives double the volume (prediction, m2-v16's V ∝ n); the set-up and two method reasons (a syringe, not water, because carbon dioxide dissolves; the syringe reading equals the gas made even though it first receives displaced air); a volume-time table and graph; the flat line as "finished"; progress as a fraction of the final volume (1 : 1, so volume made is proportional to carbonate used); a one-sentence reason it slows (rates later); waiting for room temperature and measuring T and P; choosing the conditions actually measured (PV = nRT; 24.79 only if the conditions are 25 °C and 100 kPa; 22.71 gives an impossible answer here); the calculation V → n → ratio → mass; the comparison with the mass used and the low-reading limitations; a reaction with a 2 : 3 ratio (attempt 1) and a 2 : 1 ratio at non-standard conditions (attempt 2). Not taught: reaction rate and its factors (Module 3), water-vapour corrections for gas collected over water (author note), percentage yield or purity by name.

## Decisions

- **Learner question (route wording kept).** "How can a gas volume measure the progress or quantity of a reaction?" The answer, in order: the gas volume counts moles of gas, which the limiting reactant sets (1, 2); collect it so none is lost or dissolved, and the reading is the gas made (3); its growth shows how far the reaction has gone, and the flat line shows it has finished (4); read the final volume at a measured T and P (5); turn it into moles with the conditions actually measured (6, 7); the ratio turns gas moles into reactant moles and mass (7); the gap shows the method's limits (8).
- **Opening frame (equals `chem-y11-m2-v19.md`'s final frame, same designer).** At the left `y11c-flask-chips-acid-bung-fizz-v1.png`; a coded clear tube from its delivery tube to the horizontal gas syringe (`c4a-syringe-barrel-v1.png` with `c4a-syringe-plunger-v1.png`, coded ticks every 10 mL to 100 mL) at "0 mL", plunger just starting to move; grey wisps "CO₂(g)"; conditions strip "room: 21.0 °C, 101.3 kPa"; navy card "PV = nRT" top left; amber chip "gas volume → moles → how far? how much?"; the "Next" chip, which fades.
- **Callback to m2-v09.** The same reaction (CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)) and the same idea of a system boundary: there the balance measured the mass of gas that left; here the syringe catches its volume. A thumbnail of m2-v09's mass-time graph in scene 1 only.
- **The investigation (illustrative data, tagged).** 0.300 g of marble chips (taken as calcium carbonate, as in m2-v09), 20.0 mL of 1.00 mol L⁻¹ hydrochloric acid (0.0200 mol, more than three times the 0.00599 mol needed: excess; m2-v10's concentration and m2-v08's limiting reagent recalled by chip), 100 mL gas syringe, 250 mL conical flask with bung and delivery tube. Readings every 30 s: 0, 28.0, 45.0, 55.0, 61.5, 65.5, 68.0, 69.5, 70.5, 71.0, 71.0, 71.0 mL (0 to 330 s); final 71.0 mL. Room 21.0 °C and 101.3 kPa (school laboratories rarely sit at 25 °C and 100 kPa; this is the route's "correct only conditions actually needed" case).
- **Prediction (3 s, scene 1).** "With twice the mass of chips (acid still in excess), would the final gas volume be the same, double or half?" Answer: double. It ties the volume to moles of the limiting reactant before any calculation.
- **Two method reasons (scene 3).** A syringe rather than collecting over water (m2-v04's upturned burette), because carbon dioxide dissolves in water (it would read low). The syringe reading equals the gas made even though the first gas into the syringe is air pushed out of the flask: each millilitre of CO₂ made displaces one millilitre along (at the same T and P). This answers a common confusion; it is one sentence plus a coded particle animation.
- **Progress (scene 4; Revision 2, brief 182 finding 1).** Because CaCO₃ : CO₂ is 1 : 1, the volume collected so far tracks the carbonate used so far; at 60 s, 45.0 ÷ 71.0 = 63% of the final collected volume, spoken as "about sixty-three percent". The inset is labelled "approximate progress: fraction of final collected volume", because some gas dissolves or escapes before sealing (scene 8), so the equality is approximate. Completion evidence is three things together: the flat line, no chips left in the flask, and the acid in excess (0.0200 mol against 0.00599 mol needed). A plateau alone would not prove the limiting reactant is used up.
- **Why it slows (scene 5; one sentence).** Smaller chips and less concentrated acid give fewer reacting collisions per second (Revision 2, brief 182 finding 2: "weaker" would confuse concentration with acid strength; hydrochloric acid stays a strong acid); "reaction rates later in the course" (Module 3, rates). No factors taught.
- **Waiting for room temperature (scene 5).** The reaction warms the gas slightly, and warm gas takes more room (m2-v18), so the final reading waits until the flask returns to room temperature; then the room's T and P are recorded (laboratory thermometer and the school's barometer or weather-station reading; tag).
- **Choosing the conditions (scene 6; route stop "correct only conditions actually needed").** At 21.0 °C and 101.3 kPa neither data-sheet molar volume is exact: 24.79 gives 0.287 g (about 3% low); 22.71 gives 0.313 g, more carbonate than was used, which is impossible (a self-check students can apply). So PV = nRT with the measured values. Converting the volume to standard conditions first is not needed and is not shown. If the measured conditions were 25 °C and 100 kPa, 24.79 would be exact and no correction would be needed (said once).
- **Calculation (scene 7).** Task strip, equation strips, grouped givens with units, one stage at a time: n(CO₂) = PV ÷ RT = 101.3 × 0.0710 ÷ (8.314 × 294.15) = 2.94 × 10⁻³ mol; ratio 1 : 1 from the balanced equation; n(CaCO₃) = 2.94 × 10⁻³ mol; MM(CaCO₃) = 100.09 g mol⁻¹ (data-sheet masses, root decision m2-1); m = 0.294 g. Volume converted to litres as its own given (71.0 mL = 0.0710 L).
- **Comparison and limitations (scene 8; route practical).** 0.294 g of 0.300 g, about 98%. Two causes, both making the volume low: carbon dioxide dissolving in the acid (m2-v09's dissolved CO₂) and gas escaping before the bung goes in; a stiff plunger also reads low. Purity is not claimed as a cause (dolomitic marble would push the other way; author note f). Improvements: hold the chips in a small tube inside the bunged flask and tip it to start (coded tilt, no hand); check the plunger slides freely.
- **Memory aid (see "Memory aid check"):** "Conditions first, then known to moles, ratio, unknown." (extends root decision m2-17's shared line).
- **Attempts (original wording, HSC style).** A1 (2 : 3 ratio, data-sheet conditions): 0.0540 g Al with excess HCl, 2Al + 6HCl → 2AlCl₃ + 3H₂, at 25 °C and 100 kPa: 74.4 mL; crossed "49.6 mL (ratio skipped)". A2 (2 : 1 ratio, measured conditions; the site's Activity 2 reaction with new numbers): 48.0 mL O₂ at 20.0 °C and 101.0 kPa from 2H₂O₂ → 2H₂O + O₂: n(O₂) = 1.99 × 10⁻³ mol, n(H₂O₂) = 3.98 × 10⁻³ mol; crossed "3.87 × 10⁻³ mol (24.79 used at 20 °C)".
- **Mistake scene:** none separate. "The syringe holds air, so the reading is wrong" (3); "the curve flattening means the syringe is full" (4); wrong molar volume (6; crossed in A2); skipping the ratio (crossed in A1); skipping mass-to-moles (site trap 2; scene 9's line).
- **Handoff (route next: `chem-y11-m3-v01`, "Which observations are evidence that new substances formed?").** Scene 14: Module 2 ends; the fizzing chips and an opened bottle of sparkling water both release carbon dioxide; which is evidence of a new substance? Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log if accepted):**
  1. Lesson 15 `l15-prac-title` has no practical for measuring a gas volume made in a reaction (both cards are gas-law investigations), though the lesson title is gas stoichiometry and the syllabus lists "volumes of gases in chemical reactions" under practical investigations. Suggest a short card: marble chips (or magnesium) with acid, gas syringe, volume-time readings, final volume at measured T and P, then n = PV ÷ RT.
  2. Lesson 15's gas-stoichiometry method converts with 22.71 or 24.8 only; no example uses measured laboratory conditions, which is the usual practical case. Suggest one example at measured conditions using PV = nRT, with the note "use 22.71 or 24.79 only when the conditions match".
  3. Lesson 15 Short answer Q1(b) model answer: "the kiln operates at high temperature, not STP, gases expand at higher temperatures, so the actual volume would be much larger than calculated". The amount of CO₂ is the same; only its volume at kiln conditions is larger. Suggest "the same amount of CO₂ occupies a larger volume at kiln temperature; at STP it would occupy 1.13 × 10⁵ L".
  - Checked and correct: worked example 1 (25.0 g CaCO₃ → 5.67 L at 0 °C); worked example 2 (43.4 L with 24.8; 43.38 with 24.79); worked example 3 (3.72 L H₂ → 9.81 g Zn); worked example 4 (4.00 L); Activity 2 rows 1 to 3 (5.67 L, 8.02 g, 7.44 L); short answers Q2 (2.48 L, 2.27 L, 8.47%), Q4 (45.0 L); MC answers 2 to 6.
- **Cause chain taught, in order:** (1) the limiting reactant sets the moles of gas, and at fixed T and P volume counts moles, so double the chips gives double the gas (2); (2) each millilitre of gas made pushes one millilitre into the syringe, so the reading is the gas made (3); (3) with a 1 : 1 ratio, volume made is proportional to carbonate used, so the curve shows progress and its flat end shows the chips are gone (4); (4) warm gas takes more room, so read at room temperature (5); (5) the measured T and P decide the moles, so use PV = nRT unless the conditions match a data-sheet value (6, 7); (6) the balanced ratio turns gas moles into reactant moles (7); (7) dissolving and escaping gas make the volume low, so the answer is low (8).
- **Entry knowledge:** Stage 5 particle model; m2-v03 (n = m ÷ MM); m2-v06 (coefficients as mole ratios); m2-v08 (limiting reagent); m2-v09 (the marble-chip reaction, dissolved CO₂, constant reading as "finished"); m2-v10 (concentration, on the chip only); m2-v16 to v19 (Avogadro, molar volumes, kelvin, PV = nRT).
- **Learner-visible vocabulary (plain meaning at first use):** progress of a reaction (4, "how much of the reactant has reacted so far"); no new terms otherwise.
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **gas rig** (scenes 1 to 5, 8: the flask plates swap from still to fizz to spent; the coded tube carries grey wisps; the syringe plunger moves out to each reading; a coded timer); **displacement window** (scene 3: a cut-away of flask, tube and syringe with grey air particles and darker CO₂ particles: each new CO₂ particle in the flask pushes one particle into the syringe); **volume-time graph** (scenes 4, 5: coded `LineGraph` "V (mL)" against "t (s)", points plotting with the plunger; a dashed level at 71.0 mL; a progress bracket at 60 s); **conditions card** (scenes 5 to 7: room thermometer and barometer readings coded into the conditions strip); **choice rows** (scene 6: three routes, two crossed); **calculation board** (scenes 7, 11, 13); **comparison bar** (scene 8: 0.294 g against 0.300 g); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m2-v19):** volumes slate blue; moles teal; masses amber; pressure red; temperature deep orange; conditions strip slate with a thermometer icon; CO₂ grey; crossed items red strike.
- **Pressure reference (Revision 2, brief 182 finding 3).** The recorded pressure is the local absolute (station) pressure from a school barometer, not a weather-service value reduced to sea level, which can differ by several kPa at a school above sea level. Shown on the scene 5 tag; no speech.
- **Method and safety (Revision 2, brief 182 findings 4 and 5).** The collection path stays open to a freely moving plunger; never a capped or rigid vessel. Use the school's approved method for this reaction, a gas syringe whose capacity covers the expected volume (about 71 mL here, so a 100 mL syringe), secure clamps for the flask and syringe, eye protection, and care with the acid. The doubled-chips case (about 142 mL) is a theoretical comparison shown as coded volume bars, not the same 100 mL syringe; doubling the charge would need a larger syringe. Public NSW guidance does not approve this exact 0.300 g, 20.0 mL, 1.00 mol L⁻¹ set-up: the school's approved procedure governs. The attempts (aluminium, hydrogen peroxide) are calculations, not lab instructions.
- **Board layout (Revision 2, high-risk redesign):** heading top left; conditions strip top right. Revision 1 kept the rig at the left and the graph or rows at the right for scenes 1 to 8 (about 280 s). Revision 2 stages, each under about 45 s: the rig filling the frame (1); two coded volume bars (2); the rig at full width with its safety strip and the displacement window (3); the volume-time graph at full width with the time scrubber (4); the rig with the room readings (5); three choice rows at full width (6); the calculation layout (7); the comparison bar beside the rig (8); the route card (9).
- **Colour roles (Revision 2, fixed for the whole video):** volumes slate blue; moles teal; masses amber; pressure red; temperature deep orange; conditions strip slate with a thermometer icon; CO₂ grey; progress violet; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the quantity they mark; illustrative data tagged grey.
- **Type sizes (Revision 2, 1080p):** the current working row at least 44 px (rows 48 px); live readouts (timer, V, progress) about 52 px; table cells 40 px; supporting lines and givens 30 to 36 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the time scrubber (scene 4).** A live control on the core idea (the collected volume shows how far the reaction has gone): a marker rides the volume-time curve as the timer runs from 0 to 330 s; three readouts update live (52 px): "t" (slate), "V" (slate, 0 → 45.0 → 71.0 mL) and a violet progress bar "fraction of final collected volume" (0 → 63% → 100%); the flask plate's chips shrink in step and the plate cross-fades to the spent flask at the plateau. Readouts use the illustrative data (author note c).

Author notes (not learner copy):
(a) MM(CaCO₃) = 40.08 + 12.01 + 3 × 16.00 = 100.09 g mol⁻¹. n = 0.300 ÷ 100.09 = 2.997 × 10⁻³ mol. Predicted CO₂: at 25 °C, 100 kPa, 74.3 mL; at 21.0 °C, 101.3 kPa, V = nRT ÷ P = 72.4 mL. Measured 71.0 mL (illustrative) is 1.9% under the room-conditions prediction, consistent with some CO₂ dissolving in 20 mL of acid.
(b) Acid: 20.0 mL × 1.00 mol L⁻¹ = 0.0200 mol HCl; needed 2 × 2.997 × 10⁻³ = 5.99 × 10⁻³ mol; excess.
(c) Readings (illustrative; Revision 2: collection assumed complete apart from the small losses in scene 8, smoothed from V = 71.0(1 − e^(−t/60)) and rounded to 0.5 mL, then levelled): 0, 28.0, 45.0, 55.0, 61.5, 65.5, 68.0, 69.5, 70.5, 71.0, 71.0, 71.0 mL at 0 to 330 s; flat from 270 s ("about four and a half minutes"). Progress at 60 s: 45.0 ÷ 71.0 = 0.634.
(d) n(CO₂) = 101.3 × 0.0710 ÷ (8.314 × 294.15) = 2.941 × 10⁻³ mol; × 100.09 = 0.2944 g; 0.2944 ÷ 0.300 = 98.1%. With 24.79: 0.0710 ÷ 24.79 × 100.09 = 0.2867 g (2.6% under 0.2944); with 22.71: 0.3129 g (over 0.300 g).
(e) Displacement: the syringe change equals the volume of CO₂ produced at the flask's T and P, since the flask's gas space is constant (the 0.300 g of chips occupy about 0.1 mL and dissolve; neglected). Gas over water would add water vapour (about 2.5 kPa at 21 °C) and lose dissolved CO₂; not taught.
(f) Marble is mostly calcite; silicate impurities give no gas (low result), while dolomite (CaMg(CO₃)₂, more CO₂ per gram) would give a high result. So impurity is not named as a one-direction cause.
(g) A1: n(Al) = 0.0540 ÷ 26.98 = 2.001 × 10⁻³; n(H₂) = × 3/2 = 3.002 × 10⁻³; V = × 24.79 = 74.4 mL. Slip (1 : 1): 2.001 × 10⁻³ × 24.79 = 49.6 mL.
(h) A2: n(O₂) = 101.0 × 0.0480 ÷ (8.314 × 293.15) = 1.989 × 10⁻³ mol; n(H₂O₂) = 3.978 × 10⁻³ → 3.98 × 10⁻³ mol. Slip (24.79 at 20 °C): 0.0480 ÷ 24.79 × 2 = 3.873 × 10⁻³ → 3.87 × 10⁻³ mol.
(i) Pronunciations: "C a C O three"; "two A l plus six H C l makes two A l C l three plus three H two"; "two H two O two makes two H two O plus O two"; "two point nine four times ten to the minus three".

Main question: *How can a gas volume measure the progress or quantity of a reaction?*
Entry knowledge: Stage 5 particle model; m2-v03, v06, v08 to v10, v16 to v19.
Stops after: the gas-syringe investigation, progress from the volume-time curve, the final volume at measured conditions, V → n → ratio → mass, limitations, two ratio cases. No rates, no water-vapour correction.
Handoff: chem-y11-m3-v01, indicators of chemical change.

## Opening frame and final frame

- **Opening frame:** m2-v19's final frame exactly (Decisions).
- **Final frame (`chem-y11-m3-v01` opens on it):** the board split in two halves on the dark background. Left half: `m6-marble-chips-acid-v1.png` (an open beaker of white marble chips fizzing in clear acid), label "marble chips + acid" above it, grey chip "CO₂ bubbles" beside it. Right half: `c1-sparkling-bottle-open-v1.png` (an opened clear glass bottle of sparkling water with rising bubbles, its cap lying beside it), label "sparkling water, just opened" above it, grey chip "CO₂ bubbles" beside it. A thin vertical slate divider between them. Centred under both, an amber chip "Both release CO₂. Which one made a new substance?". Top left a small grey tag "Module 2 complete". The chip "Next: Which observations are evidence that new substances formed?" at the bottom of the safe area (above the bottom 12%). Coded bubbles keep rising slowly in both (loop).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's the flask of marble chips in acid, joined to a gas syringe. In the mass-balance practical, we let the carbon dioxide escape and weighed what was lost. This time, we catch it. The flask holds zero point three zero zero grams of marble chips, taken as calcium carbonate, in twenty millilitres of one mole per litre hydrochloric acid, which is plenty of acid. So, quick prediction. With twice the mass of chips, would the final gas volume be the same, double, or **half**?

Visual: opens on m2-v19's final frame; the "Next" chip fades and the amber chip shrinks to the top right. On "mass-balance practical" a small thumbnail of m2-v09's balance and mass-time graph ("149.80 g") appears and fades. On "we catch it" the syringe plunger pulses. On "zero point three zero zero grams" givens card at the right: "CaCO₃ (marble chips): 0.300 g" (amber); "HCl: 20.0 mL, 1.00 mol L⁻¹ (excess)" with chip "chips: limiting" (m2-v08). Chips "same", "double", "half". On "half" the 3 s `Countdown` ring runs. Heading writes: "Gas volumes in reactions".

### 2. volume counts the gas made
> Double. The chips run out first, so they decide how much carbon dioxide forms. Twice the chips gives twice the moles of gas, and at the same temperature and pressure, twice the moles fills twice the volume. That's why a gas volume can measure a reaction. It counts the moles of gas the reaction **made**.

Visual: "double" ticks. Stage change: two coded volume bars side by side at full width (no syringe drawn): "0.300 g → ≈ 71 mL" and a ghost "0.600 g → ≈ 142 mL", with a grey tag "theoretical: would need a bigger syringe". On "twice the moles" teal chips "n" and "2n" (teal hand tag "× 2"). On "same temperature and pressure" m2-v16's memory line thumbnail "Same T, same P, same V: same number" (small). On "made" strip "gas volume → moles of gas" (slate to teal), framed.

### 3. the set-up
> Here's the set-up. Pour the acid into the flask, add the chips, and push the bung in straight away, then start the timer. A gas syringe is better than collecting over water, because carbon dioxide dissolves in water. And even though the first gas pushed into the syringe is air from the flask, every millilitre of carbon dioxide made pushes one millilitre along, so the reading still equals the volume of gas **made**.

Visual: the rig at full width, reset to the start, with a slate safety strip along the top: "approved school method; syringe free to move, never a capped vessel; clamps; eye protection". `y11c-flask-acid-bung-v1.png` (acid only); on "add the chips" the plate cross-fades to `y11c-flask-chips-acid-bung-v1.png` (chips settle, coded); on "push the bung in" a short coded seat motion of the bung outline; then the plate cross-fades to `y11c-flask-chips-acid-bung-fizz-v1.png`; on "start the timer" a coded timer "0 s". On "collecting over water" a small ghost of m2-v04's upturned burette (`y11c-burette-upturned-start-v1.png`) with a chip "CO₂ dissolves in water", crossed in red (red hand tag "reads low"). On "air from the flask" the displacement window: a cut-away with grey air particles in the flask's space and tube; on "pushes one millilitre along" each new dark CO₂ particle appearing in the flask pushes one grey particle into the syringe; on "made" slate hand tag "1 mL made → 1 mL in the syringe".

### 4. progress: the volume-time curve
> Now read the volume every thirty seconds. At first the plunger moves fast, then more slowly, and after about four and a half minutes it stops, at seventy-one millilitres. That flat line, with no chips left in plenty of acid, means the reaction has finished. The curve also shows progress, meaning how much has reacted so far. One carbonate gives one carbon dioxide, so at sixty seconds, with forty-five of the seventy-one millilitres collected, about sixty-three percent of the carbonate has **reacted**.

Visual: stage change: the volume-time graph at full width, the table as a strip along the bottom edge above the 12% line, the flask plate small at the top left. The time scrubber runs (simulation): the timer runs, a marker rides the curve as it builds, the readouts "t" and "V" (52 px) update and the violet progress bar fills; the rows write "0 | 0", "30 | 28.0", "60 | 45.0", "90 | 55.0", "120 | 61.5", "150 | 65.5", "180 | 68.0", "210 | 69.5", "240 | 70.5", "270 | 71.0", "300 | 71.0", "330 | 71.0" (tag "illustrative data"). On "stops, at seventy-one millilitres" a dashed level line "71.0 mL", framed with a green tick; the flask plate cross-fades to `y11c-flask-acid-bung-spent-v1.png` (no chips, no bubbles). On "flat line" three ticks write beside it: "flat line", "no chips left", "acid in excess" (slate hand tag "all three: finished"). On "progress" gloss chip "progress: how much has reacted so far". On "One carbonate gives one carbon dioxide" chip "CaCO₃ : CO₂ = 1 : 1". On "reacted" the scrubber returns to t = 60 s: bracket "45.0 ÷ 71.0 ≈ 63%" with the violet bar labelled "approximate progress: fraction of final collected volume".

### 5. slowing down, and the final reading
> Why does it slow down? The chips get smaller and the acid becomes less concentrated, so there are fewer reacting collisions each second. You'll study reaction rates later in the course. Before the final reading, there's one more thing. The reaction warms the gas a little, and warm gas takes up more room, so wait until the flask is back at room temperature. Then record the room's temperature and pressure, twenty-one point zero degrees and a hundred and one point three **kilopascals**.

Visual: stage change: the rig at the left, a large inset at the right. On "chips get smaller" the inset: chips shrinking, fewer particle hits on their surface (grey tag "rates: Module 3"; violet hand tag "fewer hits per second"). On "warms the gas" a faint warm glow on the flask and the plunger a hair further out (deep-orange hand tag "warm gas: bigger"); on "back at room temperature" the glow fades and the plunger settles at "71.0 mL". On "record the room's temperature and pressure" a coded room thermometer "21.0 °C" and a barometer readout "101.3 kPa" appear (52 px; grey tag "school barometer: local station pressure, not sea-level"); on "kilopascals" both readings write into the conditions strip "T = 21.0 °C, P = 101.3 kPa (measured)".

### 6. use the conditions you measured
> So which conditions do you use? This gas was measured at twenty-one degrees and a hundred and one point three kilopascals. That's neither of the data-sheet conditions, so neither molar volume is exact. Twenty-four point seven nine would be about three percent out. And twenty-two point seven one would say more carbonate reacted than we put in, which is impossible. So use P V equals n R T, with the conditions you actually measured. If the room had been exactly twenty-five degrees and a hundred kilopascals, twenty-four point seven nine would be right, and there'd be nothing to **correct**.

Visual: stage change: three choice rows at full width (48 px): "24.79 L mol⁻¹ (25 °C, 100 kPa)", "22.71 L mol⁻¹ (0 °C, 100 kPa)", "PV = nRT (21.0 °C, 101.3 kPa)". On "about three percent out" row 1 shows "→ 0.287 g" and is crossed in red (red hand tag "≈ 3% low"). On "more carbonate reacted than we put in" row 2 shows "→ 0.313 g > 0.300 g" and is crossed in red (red hand tag "impossible"). On "use P V equals n R T" row 3 ticks and is framed. On "exactly twenty-five degrees" a grey chip "if T = 25 °C and P = 100 kPa: n = V ÷ 24.79"; on "correct" slate hand tag "correct only what you need".

### 7. from gas volume to mass
> Here's the calculation. First, the moles of carbon dioxide. n equals P V over R T, so a hundred and one point three, times zero point zero seven one zero litres, over eight point three one four times two ninety-four point one five. That's two point nine four times ten to the minus three **moles**. Next, the ratio. In the balanced equation, one calcium carbonate gives one carbon dioxide, so the moles of carbonate are the same. Finally, the mass. Times a hundred point zero nine gives zero point two nine four **grams**.

Visual: board clears to the calculation layout. Task strip: "Find the mass of CaCO₃ that reacted". Equation strip: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)". Givens card, grouped: "V = 71.0 mL = 0.0710 L" (slate hand tag "mL → L"); "P = 101.3 kPa"; "T = 21.0 + 273.15 = 294.15 K"; "R = 8.314". Stage 1 row (48 px): "n(CO₂) = PV ÷ RT = 101.3 × 0.0710 ÷ (8.314 × 294.15)"; on "moles" "= 2.94 × 10⁻³ mol" (teal); a ghost row "with V = 71.0: 2.94 mol → 294 g" fades in and is crossed in red (red hand tag "mL left in: 1000 × too big"). On "the ratio" the coefficients 1 and 1 get teal pen rings; stage 2 row "n(CaCO₃) = n(CO₂) = 2.94 × 10⁻³ mol". On "Finally, the mass" stage 3 row "m = n × MM = 2.94 × 10⁻³ × 100.09"; on "grams" "= 0.294 g" (amber, 52 px), framed in a dark-ink box with a green tick. Earlier stage rows dim to 34 px to keep only the current stage bright.

### 8. how close, and why it's short
> So the gas accounts for zero point two nine four grams of the zero point three zero zero grams of chips, about ninety-eight percent. The small shortfall makes sense. A little carbon dioxide dissolves in the acid, just as in the mass-balance practical, and a little escapes before the bung goes in. Both make the volume too low. To improve it, hold the chips in a small tube inside the sealed flask and tip them in, and check that the plunger slides **freely**.

Visual: stage change: the comparison bar at the right: "0.294 g (from the gas)" against "0.300 g (weighed)", gap "2%" (amber hand tag "98%: close"). On "dissolves in the acid" the rig at the left: a few CO₂ particles stay in the acid (grey hand tag "dissolved: not collected"; m2-v09's chip thumbnail). On "escapes before the bung goes in" a wisp leaves the open neck in a short replay (grey hand tag "lost before sealing"). On "too low" chip "both: volume low → mass low". On "small tube inside the sealed flask" a coded small tube of chips stands inside the bunged flask and the flask tilts by code so the chips fall in (no hand; teal tick); on "freely" the plunger outline glows teal (teal hand tag "a stiff plunger reads low").

### 9. the route for any gas question
> So here's the route for any gas question. Conditions first, then known to moles, ratio, unknown. Read the temperature and pressure, turn the known amount into moles, use the balanced equation's ratio, then turn those moles into whatever's asked for, a mass or a **volume**.

Visual: the memory line writes large as a framed card in the explainer's handwriting style (dark-ink frame; slate "Conditions first", teal "known to moles", amber "unknown"): "Conditions first, then known to moles, ratio, unknown." Beneath, four linked boxes at full width: "conditions: T, P" (slate) → "known → n" (teal: "n = m ÷ MM", "n = V ÷ Vm", "n = PV ÷ RT") → "ratio (coefficients)" → "n → unknown" (amber "m = n × MM"; slate "V = nRT ÷ P"). On "volume" the scene 7 stages flash in the matching boxes, with pen arrows.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Aluminium reacts with excess hydrochloric acid. Two A l plus six H C l makes two A l C l three plus three H two. Zero point zero five four zero grams of aluminium reacts completely. Calculate the volume of hydrogen gas produced, measured at twenty-five degrees and a hundred kilopascals. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Aluminium reacts with excess hydrochloric acid: 2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g). 0.0540 g of aluminium reacts completely. Calculate the volume of hydrogen gas produced, measured at 25 °C and 100 kPa. (Al = 26.98; molar volume of an ideal gas at 100 kPa and 25 °C: 24.79 L mol⁻¹) (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Aluminium is zero point zero five four zero over twenty-six point nine eight, two point zero zero times ten to the minus three moles. The ratio is two to three, so hydrogen is three point zero zero times ten to the minus three moles. At the data-sheet conditions, that's seventy-four point four millilitres. Forty-nine point six means the ratio was **skipped**.

Visual: card shrinks to the top. Rows: "n(Al) = 0.0540 ÷ 26.98 = 2.00 × 10⁻³ mol"; "n(H₂) = 2.00 × 10⁻³ × 3/2 = 3.00 × 10⁻³ mol" (teal; "Al : H₂ = 2 : 3" outlined); "V = 3.00 × 10⁻³ × 24.79 = 0.0744 L = 74.4 mL" (slate), framed in a dark-ink box with a green tick; chip "25 °C, 100 kPa: data-sheet value fits". On "skipped" a chip "49.6 mL (ratio skipped)" fades in and is crossed in red (red hand tag "2 : 3 missed"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. With a catalyst, hydrogen peroxide decomposes. Two H two O two makes two H two O plus O two. Forty-eight point zero millilitres of oxygen is collected at twenty point zero degrees and a hundred and one point zero kilopascals. Calculate the moles of hydrogen peroxide that decomposed. Pause here to answer.

Visual: `QuestionCard`: "With a catalyst, hydrogen peroxide decomposes: 2H₂O₂(aq) → 2H₂O(l) + O₂(g). 48.0 mL of oxygen is collected in a gas syringe at 20.0 °C and 101.0 kPa. Calculate the amount, in moles, of hydrogen peroxide that decomposed. (R = 8.314 J mol⁻¹ K⁻¹) (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Use n equals P V over R T, with two ninety-three point one five kelvin and zero point zero four eight zero litres. That gives one point nine nine times ten to the minus three moles of oxygen. Two peroxide give one oxygen, so double it, three point nine eight times ten to the minus three. Using twenty-four point seven nine at twenty degrees gives three point eight seven, the classic **slip**.

Visual: card shrinks. Rows: "T = 293.15 K, V = 0.0480 L"; "n(O₂) = 101.0 × 0.0480 ÷ (8.314 × 293.15) = 1.99 × 10⁻³ mol" (teal); "n(H₂O₂) = 2 × 1.99 × 10⁻³ = 3.98 × 10⁻³ mol" ("H₂O₂ : O₂ = 2 : 1" outlined), framed in a dark-ink box with a green tick. On "slip" a chip "3.87 × 10⁻³ mol (24.79 used at 20 °C)" fades in and is crossed in red (red hand tag "conditions don't match"). Hold about 1 second.

### 14. conclusion and handoff
> So a gas volume measures a reaction because it counts the moles of gas made. Its growth over time shows how far the reaction has gone, and its final value, with the measured temperature and pressure and the balanced ratio, tells you how much reacted. That's the end of Module 2. But how did we know the carbon dioxide was a new substance at all? Open a bottle of sparkling water, and it fizzes too. Which observations are evidence that new substances **formed**?

Visual: the memory line returns small at the top with the volume-time graph. On "end of Module 2" grey tag "Module 2 complete". On "a new substance at all" the board clears to the final frame's layout: left half `m6-marble-chips-acid-v1.png` with label "marble chips + acid" and chip "CO₂ bubbles". On "sparkling water" right half `c1-sparkling-bottle-open-v1.png` with label "sparkling water, just opened" and chip "CO₂ bubbles"; the slate divider; coded bubbles rise in both. On "evidence" the amber chip "Both release CO₂. Which one made a new substance?". On "formed" the chip "Next: Which observations are evidence that new substances formed?" writes. Hold about 2 seconds. This is the final frame (m3-v01 opens on it).

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Collect CO₂ in a gas syringe, not over water.
2. Progress ≈ volume so far ÷ final volume.
3. Finished: flat line, no chips left, acid in excess.
4. Record T and P; n = PV ÷ RT unless they match the data sheet.
5. Then ratio, then the unknown.

Memory aid (framed card, on the notes screen): *Conditions first, then known to moles, ratio, unknown.*

At the end the notes cross-fade back to scene 14's final frame.

## Teaching checks

- **Does it explain causes?** Why double chips double the gas (2); why a syringe, and why its reading is the gas made (3); why the curve shows progress and why it flattens (4); why it slows (5, one sentence); why wait for room temperature (5); why the measured conditions decide the method (6); why the ratio is needed (7, A1); why the result is low (8).
- **Misconceptions addressed:** the syringe's first gas is air, so the reading is wrong (3); flattening means the syringe is full (4); the wrong molar volume (6; crossed in A2); skipping the ratio (crossed in A1); converting to standard conditions as a habit (6).
- **One idea at a time:** the link (2), the set-up (3), progress (4), the reading (5), conditions (6), calculation (7), evaluation (8), the route (9).
- **Video makes it easier:** each new CO₂ particle pushes one particle into the syringe (3); the plunger and graph move together, and the chips vanish as the line flattens (4); two wrong routes are crossed by their own results, one impossible (6); stage rows dim as the next one lights (7).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 27 s and 29 s (two steps each, inside the brief-answer range).
- **Avoided double teaching:** the marble-chip reaction and dissolved CO₂ (m2-v09); limiting reagents (m2-v08); molar volumes and PV = nRT (m2-v16, v19, used, not retaught); volume ratios for all-gas reactions (m2-v16, not repeated).
- **Syllabus coverage:** `C2-IQ1-01` "volumes of gases in chemical reactions" (1 to 8); `C2-IQ2-03` "n = m/MM" and chemical amounts (7, A1, A2).
- **Out of scope by design:** rates and their factors, water-vapour corrections, percentage yield or purity by name.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: n(Al) = 0.0540 ÷ 26.98 = 2.00 × 10⁻³ mol (1 mark); n(H₂) = 2.00 × 10⁻³ × 3/2 = 3.00 × 10⁻³ mol (1 mark); V = 3.00 × 10⁻³ × 24.79 = 0.0744 L = 74.4 mL (1 mark). Classic mistake (crossed): 49.6 mL (the 2 : 3 ratio skipped).

**Attempt 2 (scene 12; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: T = 293.15 K, V = 0.0480 L; n(O₂) = PV ÷ RT = 101.0 × 0.0480 ÷ (8.314 × 293.15) = 1.99 × 10⁻³ mol (2 marks); n(H₂O₂) = 2 × 1.99 × 10⁻³ = 3.98 × 10⁻³ mol (1 mark). Classic mistake (crossed): 3.87 × 10⁻³ mol (24.79 L mol⁻¹ used at 20 °C).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Investigation | 0.300 g CaCO₃; 20.0 mL of 1.00 mol L⁻¹ HCl (0.0200 mol; 5.99 × 10⁻³ mol needed); 100 mL syringe | 1, 3 |
| Prediction | 0.600 g → about 142 mL (double) | 1, 2 |
| Readings (illustrative) | 0 to 330 s every 30 s: 0, 28.0, 45.0, 55.0, 61.5, 65.5, 68.0, 69.5, 70.5, 71.0, 71.0, 71.0 mL; flat from about 270 s | 4 |
| Progress | 45.0 ÷ 71.0 = 63% at 60 s | 4 |
| Conditions | 21.0 °C = 294.15 K; 101.3 kPa | opening, 5, 6, 7 |
| Wrong routes | 24.79: 0.287 g (about 3% low); 22.71: 0.313 g (> 0.300 g) | 6 |
| Calculation | 0.0710 L; n(CO₂) = 2.94 × 10⁻³ mol; 1 : 1; MM 100.09; 0.294 g | 7 |
| Comparison | 0.294 of 0.300 g: about 98%; gap 2% | 8 |
| A1 | 0.0540 g Al; 26.98; 2.00 × 10⁻³ mol; 3/2; 3.00 × 10⁻³ mol; 24.79; 74.4 mL; slip 49.6 mL | 10, 11 |
| A2 | 48.0 mL O₂; 20.0 °C = 293.15 K; 101.0 kPa; 1.99 × 10⁻³ mol; × 2 = 3.98 × 10⁻³ mol; slip 3.87 × 10⁻³ mol | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 40.08 + 12.01 + 48.00 = 100.09; 0.300 ÷ 100.09 = 2.9973 × 10⁻³; × 24.79 = 0.07430 L; × 8.314 × 294.15 ÷ 101.3 = 0.07236 L.
- 20.0 × 1.00 ÷ 1000 = 0.0200 mol; 2 × 2.9973 × 10⁻³ = 5.995 × 10⁻³ mol.
- 71.0 × (1 − e^(−t/60)) at t = 30, 60, 90, 120: 27.9, 44.9, 55.2, 61.4 (readings rounded and levelled as listed).
- 45.0 ÷ 71.0 = 0.634.
- Slip (Revision 2 ghost row, scene 7): 101.3 × 71.0 ÷ (8.314 × 294.15) = 2.941 mol; × 100.09 = 294.4 g.
- 101.3 × 0.0710 ÷ (8.314 × 294.15) = 2.9410 × 10⁻³; × 100.09 = 0.29436; ÷ 0.300 = 0.9812.
- 0.0710 ÷ 24.79 × 100.09 = 0.28666; 0.0710 ÷ 22.71 × 100.09 = 0.31292.
- 0.0540 ÷ 26.98 = 2.0015 × 10⁻³; × 1.5 = 3.0022 × 10⁻³; × 24.79 = 0.074425 L; 2.0015 × 10⁻³ × 24.79 = 0.049617 L.
- 101.0 × 0.0480 ÷ (8.314 × 293.15) = 1.9891 × 10⁻³; × 2 = 3.9783 × 10⁻³; 0.0480 ÷ 24.79 × 2 = 3.8725 × 10⁻³.

## Memory aid check

- **"Conditions first, then known to moles, ratio, unknown."** Extends the course's shared line "Known to moles, ratio, unknown" (root decision m2-17; also used in Year 12) with the gas step this video adds. Meaning: read T and P before choosing how to convert a gas volume; then convert the known quantity to moles, apply the balanced ratio, and convert to the unknown. Assumptions checked: the equation is balanced (scenes 7, A1, A2); ideal-gas behaviour at school conditions (m2-v19); the reaction goes to completion with the stated reactant limiting (scene 4). It helps a new case: A1 (data-sheet conditions) and A2 (measured conditions).
- **Considered, not used:** the site's "Step 0 / Step 5" pathway (m2-v16 site note 3).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **5,913 characters**, 15 scenes (Revision 1: 5,891). Revision 2 adds about 3 s of settling for its simulation and stage changes to the estimate below. At 13.3 characters per second the speech is about 443 s; add about 10 s of settling (the displacement window in 3, the graph build in 4, the crossed routes in 6, the tilt in 8), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 537 s** (Revision 1: about 532 s).

## Scene list and build ids

Lesson key `c-y11-m2-v20` (route chem-y11-m2-v20; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v20`.

In order (15 scene headings, all `### N.`): hook-prediction, volume-counts-gas, set-up, progress-curve, final-reading, measured-conditions, volume-to-mass, how-close, gas-route, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m2-v19's final frame into scene 1 by camera continue; 1 to 2 camera continue; 2 to 3 clear change (rig reset); 3 to 4 camera continue (the graph builds as the plunger moves); 4 to 5 camera continue; 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 camera continue; 8 to 9 clear change; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v20-learning-review.md`, `checks/c-y11-m2-v20-science-check.md`.

## Assets

Have (inspected 5 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/c4a-syringe-barrel-v1.png` and `c4a-syringe-plunger-v1.png`: opening, scenes 1 to 5, 8.
- `public/assets/chemistry/m6-marble-chips-acid-v1.png` (2000 × 2000; open beaker, white chips fizzing in clear liquid): scene 14, final frame.
- `public/assets/chemistry/c1-sparkling-bottle-open-v1.png` (1041 × 1822; opened glass bottle with bubbles, cap beside it): scene 14, final frame.
- `y11c-burette-upturned-start-v1.png` (requested in `chem-y11-m2-v04.md`): scene 3 ghost only; if not yet made, a coded outline of an upturned burette.
- Thumbnails from m2-v09 (balance, graph) and m2-v16 (memory line): scenes 1, 2, 8.
- **Inspected, not used:** `biology/y11-gas-syringe-rig-v1.png` (a yeast flask in a water bath; wrong reaction, and its syringe is fixed in the painting); `m6-conical-flask-v1.png` with `m5x-stopper-v1.png` (no delivery tube; the new set shows the bung and tube as one painted object); `m8-carbonate-tube-fizz-v1.png` (a test tube; the conical flask matches m2-v09).

Need (new plates, Codex):
1. `y11c-flask-acid-bung-v1.png` (acid only): scene 3.
2. `y11c-flask-chips-acid-bung-v1.png` (chips in acid, still): scene 3.
3. `y11c-flask-chips-acid-bung-fizz-v1.png` (fizzing): essential (m2-v19 final frame, opening, scenes 1, 3, 4, 8).
4. `y11c-flask-acid-bung-spent-v1.png` (no chips, no bubbles): scenes 4, 5, 8.

Coded: connecting tube and wisps, syringe ticks, timer, displacement window, table and `LineGraph`, room thermometer and barometer readouts, choice rows, calculation rows, comparison bar, small chip tube and the flask tilt, route boxes, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v20)

Style, canvas and camera exactly as the plugged flask set in `chem-y11-m2-v08.md` and `chem-y11-m2-v09.md` (`y11c-flask-chips-acid-plug-v1.png` and its partners), so the series looks like one flask; transparent PNG with alpha channel; no text, no people, hands or faces. All four plates on one canvas with identical flask position (they cross-fade).

1. `y11c-flask-acid-bung-v1.png`: the same 250 mL conical flask, about one tenth full of clear colourless liquid, closed with a dark rubber bung through which a bent glass delivery tube rises and turns right, then runs horizontally to the right edge of the flask's bounding area, ending cleanly (a coded plastic tube continues it). No chips, no bubbles.
2. `y11c-flask-chips-acid-bung-v1.png`: as 1, with a few small white marble chips resting on the bottom, the liquid still.
3. `y11c-flask-chips-acid-bung-fizz-v1.png`: as 2, with steady small bubbles rising from the chips and a few at the surface.
4. `y11c-flask-acid-bung-spent-v1.png`: as 1 (no chips, no bubbles), the liquid surface still.

Codex records the delivery tube's open end in a JSON sidecar.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm Al = 26.98, Ca = 40.08, C = 12.01, O = 16.00 and R = 8.314 match the current HSC Chemistry data sheet.
3. Confirm the site content used matches `lesson15.sa.html` (`l15-avogadro-title` conditions trap; `l15-prac-title` gas syringe; `l15-worked-title` examples 1 and 3; traps 2 and 3; Activity 2 row 1's reaction).
4. Confirm the equations are balanced: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂; 2Al + 6HCl → 2AlCl₃ + 3H₂; 2H₂O₂ → 2H₂O + O₂.
5. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
6. Confirm the syllabus quotes match `chem-2017-y11.json` (apart from the corrected apostrophe).
7. Confirm no person, hand or face is drawn or requested (the chips, bung and tilt move by code); no em dash (U+2014); Australian spelling.
8. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
9. Confirm the opening frame equals m2-v19's final frame, and send the final frame to the m3-v01 designer.

## YouTube metadata (draft)

Title: Measuring a Reaction with Gas Volume: Gas Syringes and PV = nRT | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Catch the carbon dioxide from marble chips in acid in a gas syringe. See why the syringe reading equals the gas made, how the volume-time curve shows how far the reaction has gone, and why you read the final volume at room temperature. Then choose the right conditions (PV = nRT at the measured temperature and pressure, not a molar volume that doesn't fit), use the balanced ratio and find the mass that reacted. Two exam-style questions at the end, with 2 : 3 and 2 : 1 ratios.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct practical investigations to observe and measure the quantitative relationships of chemical reactions, including but not limited to:"
"volumes of gases in chemical reactions (ACSCH046)"
"explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"

Previous: How does PV=nRT combine the simple gas laws? Next: Which observations are evidence that new substances formed?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Feedback and scene length (learning review, root).** Both feedback scenes run about 27 to 29 s because each has two steps (ratio and conditions). Scene 6 is the longest scene (589 characters); trim option: drop its final sentence about 25 °C (about 140 characters; the key-notes item keeps the rule).
- **2. Safety and method (Revision 2).** 0.300 g marble chips with 20.0 mL of 1.00 mol L⁻¹ HCl and a 100 mL gas syringe; the hydrogen peroxide attempt names "a catalyst" only. Brief 182: the path stays open to a freely moving plunger (no capped vessel); the school's approved method, syringe capacity, secure clamps, eye protection and acid care are in the Decisions and scene 3's safety strip. Public NSW guidance does not approve this exact set-up; the school's procedure governs.
- **3. New plates (root).** Four bung-and-tube flask plates, matched to the m2-v08 and m2-v09 set. Plate 3 is essential (it also closes m2-v19); plates 1, 2 and 4 can fall back to cross-fades of plate 3 with coded bubbles off (worse, since the chips must vanish).
- **4. Module 3 join (root).** The final frame hands m3-v01 two fizzing plates; the m3-v01 design (same designer, this wave) opens on it.

## Review notes

- Revision 1 was reviewed by brief 182 (0 blockers, 5 should fix, 0 optional); every finding is resolved in Revision 2 (see "Revision 2"). Earlier note: Revision 1 had no independent review. Next: student learning review (is the displacement sentence in scene 3 clear at playback speed; is scene 6's "impossible" self-check followable), then the science check and Codex error check.
- Checker output (5 November): narration 5,891 characters; per scene (1 to 15): 472, 300, 414, 492, 470, 589, 514, 456, 269, 320, 357, 315, 390, 458, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

- Checker output (Revision 2, 6 November): narration 5,913 characters (sum of scene strings); per scene (1 to 15): 472, 300, 414, 500, 484, 589, 514, 456, 269, 320, 357, 315, 390, 458, 75; no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 182 findings (`checks/c-y11-m2-v20-learning-review.md`, `checks/c-y11-m2-v20-science-check.md`):
1. Extent and completion inference (should fix): the scene 4 inset reads "approximate progress: fraction of final collected volume" and "45.0 ÷ 71.0 ≈ 63%"; the narration keeps "about sixty-three percent". Completion now rests on three things together, shown as three ticks: the flat line, no chips left, acid in excess. Scene 4's sentence is "That flat line, with no chips left in plenty of acid, means the reaction has finished." Key note 2 uses "≈".
2. Acid strength terminology (should fix): scene 5 says "the acid becomes less concentrated" (was "gets weaker").
3. Pressure reference (should fix): scene 5's tag says "school barometer: local station pressure, not sea-level"; a Decisions item explains why. No speech change.
4. Syringe capacity (should fix): scene 2 shows the doubled case as two coded volume bars with the tag "theoretical: would need a bigger syringe", not the 100 mL syringe reaching 142 mL.
5. Method approval and controls (should fix): a Decisions item and scene 3's safety strip state the open path to a free plunger (never a capped vessel), the school's approved method, syringe capacity, clamps, eye protection and acid care. The attempts stay calculations.

Visual upgrade (high-risk design: scene-level redesign of the long stretch; teaching logic unchanged):
- Scene 1: the flask and syringe plates already fill the frame in the first 20 s.
- Redesign of scenes 1 to 8 (about 280 s with the rig at the left and the graph or rows at the right): nine stages (rig, volume bars, rig with safety strip, full-width graph with scrubber, rig with readings, choice rows, calculation, comparison, route card), none longer than about 45 s.
- Live control: the time scrubber (scene 4) drives t, V and a violet progress bar along the curve, with the chips shrinking and the spent-flask swap at the plateau.
- Framed answers with a green tick: the gas-volume strip (2), 71.0 mL (4), PV = nRT row (6), 0.294 g (7), 74.4 mL (11), 3.98 × 10⁻³ mol (13). Crossed slips carry red hand tags: a new mL-not-converted ghost row in the worked example (7: 294 g), over water (3), the two molar volumes (6), 49.6 mL (11), 3.87 × 10⁻³ mol (13).
- Hand tags and pen marks in role colours in every teaching scene (1 to 9).
- Memory line as a framed card (scene 9 and the notes screen); key notes cut to five short bullets.
- Decisions gain "Pressure reference", "Method and safety", "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- No new plate requests.

Counts: 5,913 characters (Revision 1: 5,891); about 532 to about 537 s.
