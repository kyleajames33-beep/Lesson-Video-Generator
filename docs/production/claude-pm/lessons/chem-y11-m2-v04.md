# Year 11 Chemistry M2 V04: Measuring molar mass in a practical. How can measuring a mass and a gas volume reveal a molar mass? (design)

Status: Revision 3 (7 Nov 2026): brief 214 error-check findings resolved (root). Ready to voice. Previously Revision 2 (6 Nov 2026): brief 180 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,331 characters, 19 scenes, about 556 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fourth video of Year 11 Chemistry (2017 syllabus) Module 2, playlist entry 34, between `chem-y11-m2-v03` and `chem-y11-ws-v04`. Templates: `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief); practical conventions `chem-m8-p02.md`; series conventions from `chem-y11-m2-v01.md` to `v03.md` and the skills videos `chem-y11-ws-v01.md` to `ws-v03.md` (valid, reliable, accurate, precise as defined there; root decision 12). No starter pack exists; the pack work is done here. Route entry: `chem-y11-m2-v04` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Compare a sourced element method with the site volatile-compound method, controlling the gas conditions and examining loss and uncertainty. The element method needs new primary-source preparation."; next handoff: "How do raw chemistry readings become a usable table or graph?"; practical: "Element and compound molar-mass investigations"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson02.sa.html` (SHA256 `751832bc580a28da97ddd7500268ddbbab24f8df0f90f241f76a0f10669d35b6`, recomputed, matches the route). Used: `l02-practical-title` (the volatile liquid method: weigh flask and pinholed foil cap m₁; add 2 to 3 mL; boiling water bath "rather than a naked flame, since these liquids are flammable"; record bath temperature and atmospheric pressure; cool, dry the outside and reweigh m₂; fill with water for the volume; "Why a foil cap with a pinhole?"; MM = mass of vapour ÷ moles of vapour). The site finds the moles with PV = nRT, which this course teaches later (m2-v19); this video gives the molar volume at the bath's conditions instead (Decisions).

Element method source (route: "needs new primary-source preparation"): Royal Society of Chemistry, Nuffield Practical Collection, *Determining the relative atomic mass of magnesium* (class practical, 14 to 16): magnesium ribbon about 3 to 4 cm long, cleaned with emery paper, weighed to 0.001 g, reacted with dilute hydrochloric acid; the hydrogen is collected in an upturned burette; Mg + 2HCl → MgCl₂ + H₂, so 1 mol of magnesium gives 1 mol of hydrogen molecules; moles from the molar volume; result compared with the accepted value. Student sheet: https://edu.rsc.org/download?ac=545730 ; resource page: https://edu.rsc.org/resources/what-is-rust/401.article (link text "Use this class practical to determine the relative atomic mass of magnesium using its reaction with hydrochloric acid"). Codex confirms the stable URL and the method details against the teacher notes (error check 2).

Owner rules applied: as m2-v01 to v03 (one learner question; no people, hands or faces: apparatus alone, the ribbon is placed and the flask moved by code; apparatus as painted plates; gas levels, readouts, particles and calculation rows coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full question and data on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame). Data are illustrative and tagged so.

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger ID `C2-IQ2-01`), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- "conduct a practical investigation to demonstrate and calculate the molar mass (mass of one mole) of:"
  - "an element"
  - "a compound (ACSCH046)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on m2-v03's final frame ("MM = m ÷ n"; "m: weigh it"; "n: find it another way?"; an element and an unknown liquid). Teaches: a gas volume can count moles, because at the same temperature and pressure equal volumes of gases hold equal numbers of particles (stated, with the reason in one sentence; m2-v16 owns the law and the molar volumes); the data-sheet molar volume 24.79 L mol⁻¹ at 25 °C and 100 kPa; why the temperature and pressure must be measured and kept steady; the element method (magnesium and hydrochloric acid, hydrogen in an upturned burette; one Mg atom gives one H₂ molecule, m2-v01's coefficients); the calculation; losses and their direction (hydrogen escaping; oxide coating); the mass reading as the weak link (0.01 g against 0.001 g balance); the compound method (site volatile liquid, on a hotplate water bath); its calculation with a given molar volume at the bath's conditions (30.6 L mol⁻¹ at 100.0 °C and 101.3 kPa) and identification of the liquid; its losses (wet flask, liquid left); a comparison of the two methods. Stops before: random and systematic error by name and percentage uncertainty (ws-v05); processing several runs into a table and graph (ws-v04, the handoff); gas laws and PV = nRT (m2-v16 to v19); mole ratios beyond 1 : 1 (m2-v06).

## Decisions

- **Learner question (route wording made causal; open decision 1).** Route: "How can a practical determine molar mass?" Proposed: "How can measuring a mass and a gas volume reveal a molar mass?" Both methods share one idea: weigh to get m, use a gas volume at known conditions to count n, divide. The answer, in order: MM = m ÷ n, and the hard part is n (1); a gas's volume counts its particles at fixed temperature and pressure (2); the element method (3 to 5); losses push the answer one way (6, 7); a small mass needs a fine balance (8); the compound method (9 to 12); one idea, two routes (13).
- **Opening frame (equals m2-v03's final frame).** "MM = m ÷ n" large at the centre; "m: weigh it" with a tick and the small balance; "n: find it another way?"; `p01-mg-ribbon-v1.png` ("an element") and `m6-conical-flask-v1.png` ("an unknown liquid"), each "MM = ?"; the "Next" chip, which fades.
- **Counting moles with a gas (stated, not derived).** "At the same temperature and pressure, equal volumes of any gas hold the same number of particles", with one causal sentence: gas particles are far apart, so the volume depends on how many particles there are, not on how big they are. The molar volume 24.79 L mol⁻¹ at 25 °C and 100 kPa is the HSC data sheet value. m2-v16 owns the law, the reason in depth and 22.71 against 24.79 (grey chip "explained in a later video"). "Controlling the gas conditions" (route stop): warming a gas makes it expand and pressing on it makes it shrink, so the temperature and pressure are measured and kept steady during the collection, and the molar volume used must match them.
- **Element method (RSC; values illustrative).** 0.042 g of cleaned magnesium ribbon (about 3 to 4 cm), dilute hydrochloric acid, an upturned 50 mL burette; readings 48.50 mL then 6.30 mL, so 42.2 mL of hydrogen (shown, not processed in narration: ws-v04 owns processing); room 25 °C, 100 kPa. n(H₂) = 0.0422 L ÷ 24.79 L mol⁻¹ = 1.70 × 10⁻³ mol = n(Mg) (one Mg atom gives one H₂ molecule; m2-v01's equation read as particles); MM = 0.042 ÷ 1.70 × 10⁻³ = 24.7 g mol⁻¹ against the accepted 24.31.
- **Losses and their direction (route stop "loss").** Prediction (3 s): "If some hydrogen escaped before it was collected, would the calculated molar mass be too high or too low?" Answer: too high (V small → n small → m ÷ n large). Second loss: an oxide coating weighs but makes no hydrogen, so MM is too high; emery paper removes it (RSC). The water vapour in the collected gas (which pushes the other way) is not narrated, because a correction would need partial pressures; Revision 2 (brief 180) makes the approximation visible on screen instead: the gas volume is labelled "gas collected over water, uncorrected (includes some water vapour)" and the result row carries a grey tag "uncorrected: reads about 3% low from water vapour". The method also matches the liquid levels inside and outside the burette before reading (the clamp is moved by code), so the collected gas is at room pressure; the tag "levels matched" shows it (author note c).
- **Uncertainty, qualitatively (route stop "uncertainty"; ws-v05 owns the quantities).** On a 0.01 g balance, 0.042 g shows as 0.04 g, which could be anything from about 0.035 to 0.045 g, so the molar mass could be anything from about 21 to 26 g mol⁻¹ (author note d). On a 0.001 g balance (RSC's choice) the reading is fine enough. Said as "the smallest reading is the weak link"; the words "uncertainty" and "limits" are left for ws-v05 except one grey chip.
- **Compound method (site, made safer and taught without PV = nRT).** The site's method, with two changes: the water bath is on an electric hotplate (site note 1: the site's diagram text puts the bath "over a flame" while its method warns against naked flames; vapour escapes from the pinhole), and the moles come from a given molar volume at the bath's conditions, "30.6 L mol⁻¹ at 100.0 °C and 101.3 kPa, worked out with the gas laws later in this module" (author note e). Illustrative data: flask volume 140 mL (filled with water and measured); mass of condensed vapour 0.272 g; n = 0.140 ÷ 30.6 = 4.58 × 10⁻³ mol; MM = 59.5 g mol⁻¹; candidates on screen: ethanol 46.07, propanone 58.08, hexane 86.17, so the liquid is most likely propanone.
- **Why the pinhole (site's card, kept).** It lets air and extra vapour out so the flask ends full of vapour at the room's pressure; sealing it would trap air and build pressure. Said in one sentence.
- **Compound losses.** The outside of the flask still wet from the bath (mass high → MM high; site's step "dry the outside"); liquid left unevaporated (mass high → MM high). Attempt 2 tests the first.
- **Comparison (route stop "Compare").** Same: MM = m ÷ n; n from a gas volume at measured conditions; mass from a balance. Different: the element's gas is a product, so the equation links the moles (1 : 1); the compound's gas is the substance itself, so no equation is needed. A two-column `CompareTable`.
- **Course definitions (root decision 12).** "Accurate" (close to the accepted value) is used once, in scene 5, as ws-v03 defined it. Valid, reliable and precise are not needed here.
- **Safety (science check).** Dilute hydrochloric acid, safety glasses, no flames near hydrogen; hotplate water bath for the flammable liquid, small volume (2 to 3 mL), good ventilation. Shown as a three-line safety strip, not narrated at length (ws-v02 and ws-v03 taught risk assessment).
- **Memory aid (new; see "Memory aid check"):** "Weigh it, count it with a gas, then divide."
- **Attempts (original wording, HSC style).** A1 (element, a new metal): 0.150 g of zinc reacts with excess dilute hydrochloric acid; 56.9 mL of hydrogen at 25 °C and 100 kPa; Zn + 2HCl → ZnCl₂ + H₂; calculate the molar mass: 65.4 g mol⁻¹; crossed "0.0654 g mol⁻¹" (volume left in mL). A2 (compound, a loss): a student reweighs the flask without drying its outside; explain the effect on the calculated molar mass: too high; crossed "too low, because the water dilutes the liquid".
- **Mistake scene:** none separate. "Any loss makes the answer too low" (6, 7); "a balance reading is exact" (8); "volume in mL with L mol⁻¹" (A1 crossed); "the compound method needs an equation" (13).
- **Handoff (route next, ws-v04).** Scene 18: one run gives one number; the class did five runs of the magnesium method with different masses; their raw readings are a mess. Final frame: see "Opening frame and final frame".
- **Site notes (for root to log if accepted):**
  1. `l02-practical-title`, diagram text: "The bath stands on a tripod and gauze over a flame" conflicts with the method's "a water bath rather than a naked flame, since these liquids are flammable", and vapour leaves through the pinhole. Suggest "an electric hotplate or kettle-heated water bath; no naked flame nearby".
  2. Same card: "Sealing the flask completely would ... trap air, giving a molar mass that is too high": a sealed flask would hold air and vapour above atmospheric pressure, and the reweighed mass would then include whatever condensed; the direction depends on details. Suggest keeping only the safety reason and "the vapour would not be at the measured pressure".
  3. Same card refers to PV = nRT "developed fully in Lesson 15" in Lesson 2; the moles step cannot be done by a student at this point. Suggest giving the molar volume at the bath's conditions, as here.
- **Cause chain taught, in order:** (1) MM = m ÷ n, and n can't be weighed directly (1); (2) gas volume counts particles at fixed conditions, so conditions must be measured and steady (2); (3) the equation links hydrogen moles to magnesium moles (3, 4); (4) a loss that shrinks n or inflates m raises MM (6, 7, 12); (5) a coarse reading of a small mass dominates the result (8); (6) in the compound method the vapour is the substance, so n of vapour is n of compound (9 to 11).
- **Entry knowledge:** Stage 5 safe practical work; m2-v01 (equations count particles; gases cross boundaries), m2-v02 (mole), m2-v03 (n = m/MM, MM = m ÷ n), ws-v02 and ws-v03 (planning, accurate).
- **Learner-visible vocabulary:** molar volume (the volume of one mole of gas at stated temperature and pressure, 2); volatile (evaporates easily, 9); accepted value (recalled from ws-v03, 5); condense (vapour turning back to liquid, 10).
- **Legacy logic ported:** none.
- **Explainer motion (coded, plus plates):** **gas boxes** (scene 2: three equal coded boxes of H₂, O₂ and CO₂ particles with the same count, far apart; one box warmed (red tint) expands, one squeezed shrinks); **burette gas column** (coded: between the two burette plates, a gas space grows at the top while bubbles rise; readout tags "48.50 mL" and "6.30 mL"); **particle pairing** (one Mg atom → one H₂ molecule, repeated); **direction chain** (a three-link chain "V ↓ → n ↓ → MM ↑" with arrows that light); **reading window** (scene 8: a 0.01 g display "0.04 g" with a bracket "0.035 to 0.045 g" and a result bracket "21 to 26 g mol⁻¹"; the display swaps to "0.042 g" and the bracket narrows); **vapour fill** (scene 9: coded vapour wisps filling the flask, air dots leaving through the pinhole); **candidate strip** (three coded formula cards with molar masses; the closest glows); **`CompareTable`** (two columns, element and compound, rows that fill); calculation layout; `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** heading top left; apparatus plates at the left; conditions strip ("25 °C, 100 kPa" or "100.0 °C, 101.3 kPa") at the top right; working rows in the right column; the "MM = m ÷ n" strip stays at the top centre throughout. Revision 2 exceptions: the two calculations (5, 11) cut to the full-width g01 layout with the apparatus as a thumbnail, then the apparatus returns for the losses (6, 12), so neither method holds one board for more than about 60 s.
- **Colour roles (Revision 2, fixed):** masses navy; chemical amounts amber; molar masses teal; gas volumes and conditions slate blue; losses and their arrows rose; accepted values gold; framed answers in a dark-ink box with a green tick; mistakes red (strike plus red hand tag); approximations grey. Hand tags take the role colour of what they mark.
- **Type sizes (Revision 2, at 1080p):** current working row 48 px (never below 44 px); live readouts (gas volume, n and MM in the collection simulation; balance display) 52 px; supporting lines 30 px; hand tags 34 to 40 px; the "uncorrected" and "illustrative data" tags 26 px, the floor.
- **Anchor and simulation (Revision 2).** Painted plates from the first frame (m2-v03's final frame: balance, ribbon, conical flask), then the upturned burette and water-bath plates. The genuine simulation is the collection in scene 4: as the gas column grows, three live readouts update together, "gas collected" (slate blue, 0.0 to 42.2 mL), "n(H₂) so far" (amber) and "MM if you stopped now = 0.042 ÷ n" (teal), the MM readout falling from huge values towards 24.7 as the gas comes in. Scene 7 scrubs the same simulation back to show escaping gas leaving MM too high.

Author notes (not learner copy):
(a) Element run: 0.042 ÷ 24.31 = 1.728 × 10⁻³ mol would give 42.8 mL ideally; 42.2 mL collected. n = 0.0422 ÷ 24.79 = 1.7023 × 10⁻³ mol (shown 1.70 × 10⁻³); MM = 0.042 ÷ 1.7023 × 10⁻³ = 24.67 (24.7). 1.5% above 24.31 (not spoken; percentage error is ws-v05's).
(b) RSC practical: burette filled with dilute acid topped with water and inverted into a beaker of water, ribbon held at the mouth; the plates show the upturned burette in a beaker with the ribbon just inside the open end (no hands, no wire detail needed). Readings fall as gas collects at the tap end, so volume = start − end (ws-v04 processes this).
(c) Water vapour: hydrogen collected over water at 25 °C contains water vapour at about 3.2 kPa, so the gas volume overstates the hydrogen by about 3% and pushes MM about 3% low; in this illustrative run the escape loss outweighs it. Not narrated; Revision 2 shows it as a grey on-screen approximation tag beside the volume and the result (brief 180). The illustrative 42.2 mL is the wet-gas reading, used uncorrected with the dry molar volume, and is labelled so; the levels inside and outside the burette are matched before reading so the gas is at room pressure (a liquid column above the beaker level would leave it below room pressure). ws-v05 may use the correction.
(d) Mass window: 0.035 ÷ 1.7023 × 10⁻³ = 20.6; 0.045 ÷ 1.7023 × 10⁻³ = 26.4 ("about 21 to 26"). With 0.001 g: 0.041 to 0.043 gives 24.1 to 25.3 (not spoken).
(e) Molar volume at 100.0 °C (373.15 K) and 101.3 kPa: 8.314 × 373.15 ÷ 101.3 = 30.63 L mol⁻¹ (shown 30.6). n = 0.140 ÷ 30.6 = 4.575 × 10⁻³ (4.58 × 10⁻³); MM = 0.272 ÷ 4.575 × 10⁻³ = 59.45 (59.5); with 30.63, 59.50. Propanone C₃H₆O = 3 × 12.01 + 6 × 1.008 + 16.00 = 58.08; ethanol 46.07; hexane 86.17. The result is 2.4% high (not spoken). On cooling, air re-enters as the vapour condenses, so m₂ − m₁ is the condensed vapour's mass to a good approximation; the small residual vapour and air-buoyancy effects are not discussed.
(f) A1: Zn + 2HCl → ZnCl₂ + H₂; n(H₂) = 0.0569 ÷ 24.79 = 2.295 × 10⁻³ mol; MM = 0.150 ÷ 2.295 × 10⁻³ = 65.35 (65.4; zinc 65.38). Wrong route: 0.150 ÷ (56.9 ÷ 24.79) = 0.0654.
(g) Spoken: "M M"; "twenty-four point seven nine litres per mole"; "propanone" (PRO-pa-nohn), "also called acetone" on screen only.

Main question: *How can measuring a mass and a gas volume reveal a molar mass?*
Entry knowledge: m2-v01 to v03; ws-v02, ws-v03.
Stops after: two methods, gas conditions, losses and their direction, the weak reading, the comparison. No percentage uncertainty, no gas laws.
Handoff: ws-v04, tables and graphs from the class's raw readings.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key (continues m2-v03): masses navy; chemical amounts amber; molar masses teal; gas volumes and conditions slate blue; losses and their arrows rose; accepted values gold; earlier rows dimmed; crossed chips red strike; "illustrative data" tag grey on every reading.

### 1. hook: the hard part is the moles
> Last time, we turned the equation around. Molar mass equals mass divided by moles. The mass is easy, because a balance gives it to **us**. The hard part is the moles. You can't weigh them, and you can't count the particles. But there's a trick. If the substance is a gas, or makes a gas, its volume can do the **counting**.

Visual: opens on m2-v03's final frame (Decisions); the "Next" chip fades. On "us" the "m: weigh it" tick pulses, navy hand tag "easy". On the fourth sentence ("The hard part is the moles"; brief 180 cue fix) the "n: find it another way?" tag pulses rose and a rose hand tag "the hard part" writes with a pen ring round "n". On "counting" a coded gas syringe outline draws beside "n" with gas dots inside and the tag "volume → moles?". Heading writes on: "Measuring molar mass".

### 2. a gas volume counts particles
> At the same temperature and pressure, equal volumes of any gas hold the same number of particles. That's because gas particles are so far apart that the volume depends on how many there are, not on how big they **are**. At twenty-five degrees and a hundred kilopascals, one mole of any gas takes up twenty-four point seven nine **litres**. But warm a gas and it expands. Squeeze it and it shrinks. So you must measure the temperature and pressure, and keep them **steady**.

Visual: three equal coded boxes of gas particles, small H₂, larger O₂, larger CO₂, each with the same count of widely spaced particles, tag "same T and P: same volume, same number". On "are" a magnifier shows the large gaps between particles. On "litres" a slate-blue card writes "molar volume: 24.79 L mol⁻¹ at 25 °C and 100 kPa" with grey tags "HSC data sheet" and "explained in a later video". On the fourth sentence one box warms (red tint) and grows; on the fifth another is pressed and shrinks. On "steady" a conditions strip writes at the top right: "record T and P; keep them steady", slate-blue hand tag "measure both" with a pen ring round the strip.

### 3. the element method: magnesium makes hydrogen
> First, an element. Magnesium isn't a gas, but it makes one. Magnesium reacts with dilute hydrochloric acid to make hydrogen gas. The equation says one magnesium atom gives one hydrogen **molecule**. So the moles of hydrogen collected equal the moles of magnesium that reacted. The ribbon is rubbed with emery paper to remove its oxide coating, then weighed on a balance that reads to a thousandth of a **gram**.

Visual: board clears. "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)" writes. On "molecule" a pale green Mg atom below "Mg" maps by a dashed arrow to one white H₂ pair below "H₂", repeated three times, tag "1 Mg atom → 1 H₂ molecule, so n(Mg) = n(H₂)", amber hand tag "1 : 1" with a pen ring round the coefficients. On "gram" `p01-mg-ribbon-v1.png` sits on `y11c-top-pan-balance-v1.png`, display "0.042 g" (52 px), navy hand tag "to 0.001 g", tag "cleaned with emery paper" and a grey source tag "method: RSC, Nuffield Practical Collection". A safety strip writes small: "dilute acid; safety glasses; no flames near hydrogen".

### 4. collecting the hydrogen
> The ribbon sits at the mouth of a burette, turned upside down and full of liquid. As the acid reaches it, hydrogen bubbles up and collects at the top, pushing the liquid **down**. When the ribbon has gone, the gas takes up forty-two point two **millilitres**. The room is at twenty-five degrees and a hundred kilopascals.

Visual: camera push to the burette stage: the plate `y11c-burette-upturned-start-v1.png` (upturned 50 mL burette clamped with its open end in a beaker of water, a small coil of ribbon just inside the mouth) large at the left; at the right three live readouts (the simulation, 52 px): "gas collected: 0.0 mL" (slate blue), "n(H₂) so far: 0" (amber) and "MM if you stopped now: ?" (teal). On "down" coded bubbles rise from the ribbon and a coded gas space grows at the top while the readouts update together: the volume climbs, n climbs, and the MM readout falls from hundreds ("247.9 g mol⁻¹" at 4.2 mL) towards the final value; teal hand tag "more gas, smaller MM" with a pen arrow down the MM readout. The plate cross-fades to `y11c-burette-upturned-end-v1.png` (ribbon gone, gas space at the top). Readout tags write beside the scale: "start 48.50 mL", "end 6.30 mL". On "millilitres" the clamp lowers the burette by code until the liquid level inside matches the beaker's (grey tag "levels matched: gas at room pressure"), and the readouts settle at "42.2 mL", "1.702 × 10⁻³ mol", "24.7 g mol⁻¹"; slate-blue tag "gas collected over water: 42.2 mL" with a grey tag beneath "uncorrected (includes some water vapour)" and "illustrative data" (26 px). The conditions strip fills: "25 °C, 100 kPa ✓".

### 5. calculating the molar mass
> Now the calculation. Change forty-two point two millilitres to litres, then divide by twenty-four point seven nine. That's one point seven zero times ten to the minus three moles of hydrogen, so the same amount of **magnesium**. Molar mass equals mass divided by moles. Zero point zero four two grams, divided by one point seven zero times ten to the minus three, is twenty-four point seven grams per **mole**. The accepted value is twenty-four point three one. That's close, but a little **high**.

Visual: clear change to the full-width calculation layout (Chemistry g01 layout); the burette shrinks to a thumbnail at the top left. Task strip (40 px): "Find the molar mass of magnesium". Givens card: "m(Mg) = 0.042 g; V(gas over water, uncorrected) = 42.2 mL = 0.0422 L; molar volume 24.79 L mol⁻¹ (25 °C, 100 kPa)". Rows at 48 px, colours carried: "n(H₂) ≈ 0.0422 ÷ 24.79 = 1.702 × 10⁻³ mol" (shown "1.70 × 10⁻³", the unrounded value kept, grey tag "keep the unrounded value"); slate-blue hand tag "mL → L first"; on "magnesium" "n(Mg) = n(H₂) = 1.70 × 10⁻³ mol" with the 1 : 1 arrows from scene 3 flashing. On "mole" "MM = m ÷ n = 0.042 ÷ 1.702 × 10⁻³ = 24.7 g mol⁻¹" framed in a dark-ink box with a green tick, grey tag beneath (26 px) "uncorrected gas: water vapour makes this read about 3% low". On "high" a gold chip "accepted: 24.31 g mol⁻¹" writes beside it with a small up-arrow, gold hand tag "a little high", tag "accurate means close to this" (ws-v03).

### 6. prediction (countdown, 3 seconds)
> Quick prediction. Suppose some hydrogen escaped before it was collected. Would the molar mass come out too high, or too **low**?

Visual: stage change back to the burette stage: the burette plate large with a few coded bubbles escaping sideways from under its mouth, rose tag "some H₂ escapes". Chips "too high", "too low". On "low" the 3 s `Countdown` ring runs. The three readouts stay visible but blank (nothing answer-bearing).

### 7. losses push the answer one way
> Too high. Less gas means a smaller volume, so fewer moles are counted. Dividing the same mass by fewer moles gives a bigger molar **mass**. An oxide coating does the same thing. It adds to the mass on the balance, but it makes no hydrogen, so the molar mass comes out high **again**. That's why the ribbon is cleaned, and why the gas must be caught from the very first **bubble**.

Visual: "too high" ticks. The collection simulation replays with escaping bubbles: the volume readout stops at "38.0 mL", n at "1.533 × 10⁻³ mol" and the MM readout stays up at "27.4 g mol⁻¹" (rose); rose hand tag "escaped gas: MM too high". On "mass" the direction chain writes in rose: "V ↓ → n ↓ → MM = m ÷ n ↑". On "again" a magnifier on the ribbon shows a thin grey oxide skin, chain "m ↑ (oxide), n unchanged → MM ↑". On "bubble" two fixes write as teal chips: "clean with emery paper" and "start collecting at once"; a red chip "any loss makes it too low" is struck through, red hand tag "depends what you lose".

### 8. the weak link is the smallest reading
> There's another limit, and it's the mass. On a balance that reads to a hundredth of a gram, our ribbon just shows zero point zero **four**. The real mass could be anywhere from about zero point zero three five to zero point zero four five, so the molar mass could be anywhere from about twenty-one to twenty-**six**. A balance that reads to a thousandth of a gram narrows that **down**. The smallest reading is usually the weak **link**.

Visual: the reading window: a coded 0.01 g display "0.04 g". On "four" a bracket under it "0.035 to 0.045 g?". On "six" the bracket carries over to a result bar "MM: about 21 to 26 g mol⁻¹", wide and rose. On "down" the display swaps to "0.042 g" (0.001 g balance) and the result bar narrows sharply around 24.7. On "link" a grey chip writes "more on uncertainty: a later video" and fades to the corner; navy hand tag "weak link" with a pen ring round the 0.01 g display.

### 9. the compound method: a volatile liquid
> Now a compound, an unknown liquid that evaporates easily. Chemists call that volatile. Weigh a dry flask with a foil cap pierced by a pinhole. Add a few millilitres of the liquid, and stand the flask in a boiling water bath on a hotplate, because the vapour is flammable and must stay away from **flames**. The liquid boils away, and its vapour pushes the air out through the **pinhole**, until the flask is full of vapour, at the bath's temperature and the room's **pressure**.

Visual: board clears to the water-bath stage. The new plate `y11c-flask-foil-cap-v1.png` (dry conical flask with an aluminium foil cap) sits on the balance, display "m₁" (coded). The new plate `y11c-flask-water-bath-liquid-v1.png` (the capped flask with a little colourless liquid, standing in a beaker of boiling water on a hotplate with a thermometer) slides in. On "flames" a safety tag: "flammable: hotplate, no naked flame". On "pinhole" coded vapour wisps fill the flask while grey air dots leave through the pinhole; the plate cross-fades to `y11c-flask-water-bath-vapour-v1.png` (same, liquid gone). On "pressure" the conditions strip updates: "100.0 °C (thermometer), 101.3 kPa (barometer)"; a small gloss "pinhole: lets air and extra vapour out, so the pressure stays at the room's" (30 px), slate-blue hand tag "room pressure" with a pen arrow to the pinhole.

### 10. cool, reweigh, and measure the volume
> Then take the flask out and let it cool. The vapour inside condenses back to liquid, so reweighing the dried flask gives the mass of vapour that filled **it**, zero point two seven two of a gram. Finally, fill the flask with water and measure that water, to find the volume the vapour took up, one hundred and forty **millilitres**.

Visual: the flask returns to the balance (cooled, a thin film of condensed liquid at the bottom, coded); rows "m₂ − m₁ = mass of vapour". On "it" a navy tag "0.272 g" (grey "illustrative data"), navy hand tag "mass of vapour". On "millilitres" `m6-measuring-cylinder-v1.png` slides in with a coded water fill, tag "flask volume = 140 mL", slate-blue hand tag "= vapour volume".

### 11. which liquid is it?
> At the bath's temperature, gases spread out more, so a mole takes up more room, about thirty point six litres, using the gas laws you'll meet later in this module. So the vapour is zero point one four zero divided by thirty point six, about four point five eight times ten to the minus three **moles**. The molar mass is zero point two seven two divided by that, fifty-nine point five grams per **mole**. Of the likely liquids, propanone is closest, at fifty-eight point zero **eight**.

Visual: clear change to the full-width calculation layout (g01); the bath plate shrinks to a thumbnail. Givens card: "m(vapour) = 0.272 g; V = 140 mL = 0.140 L; molar volume at 100.0 °C and 101.3 kPa = 30.6 L mol⁻¹" (grey tag "from the gas laws, later in this module"). On "moles" row "n = 0.140 ÷ 30.6 = 4.575 × 10⁻³ mol" (48 px; shown with the guard digit, grey tag "≈ 4.58 × 10⁻³; keep the unrounded value"). On "mole" row "MM = 0.272 ÷ 4.575 × 10⁻³ = 59.45 = 59.5 g mol⁻¹", the "59.5 g mol⁻¹" framed with a green tick (brief 180: the divisor keeps its guard digit, so the row rounds to 59.5, not 59.4). On "eight" the candidate strip: "ethanol 46.07", "propanone 58.08", "hexane 86.17" with a live teal marker sliding along a molar-mass scale to 59.5; propanone glows with a tick, teal hand tag "closest", and a grey "also called acetone".

### 12. what pushes this result high?
> This result is a little high too. If the outside of the flask is still wet from the bath, the water adds mass, so the molar mass comes out **high**. And if some liquid hadn't evaporated, the flask holds extra mass, which also pushes it **up**.

Visual: stage change back to the flask: the reweighed flask plate large with coded water droplets on its outside, rose tag "wet outside: m ↑ → MM ↑", rose pen ring round the droplets. On "high" the chain lights. On "up" a small liquid pool remains in the bath plate's flask (coded), tag "liquid left: m ↑ → MM ↑"; teal fix chips "dry the outside" and "heat until no liquid is left".

### 13. one idea, two routes
> So both methods use one idea. Weigh the substance, use a gas volume at known temperature and pressure to count the moles, then **divide**. The difference is where the gas comes from. Magnesium makes hydrogen, so the equation links the two **amounts**. The liquid becomes the gas itself, so its moles are the vapour's **moles**. Here's a line to remember. Weigh it, count it with a gas, then **divide**.

Visual: the `CompareTable` builds: columns "element: magnesium" and "compound: volatile liquid"; on "divide" (first) the shared row "MM = m ÷ n; n from a gas volume at measured T and P" spans both columns. On "amounts" row "gas: hydrogen, made by the reaction; n(Mg) = n(H₂) from the equation" fills the element column. On "moles" row "gas: the substance's own vapour; no equation needed" fills the compound column. On "divide" (second) a framed memory card draws and the line writes large in it as `HandText` (navy "Weigh it," slate blue "count it with a gas," teal "then divide.", 48 px). Hold about 2 seconds.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. Zero point one five zero grams of zinc reacts completely with dilute hydrochloric acid, making fifty-six point nine millilitres of hydrogen at twenty-five degrees and a hundred kilopascals. Calculate the molar mass of zinc. Pause here to answer.

Visual: `QuestionCard` (subject "Chemistry", tag "HSC-style question, written for HSCScience"): "0.150 g of zinc reacts completely with excess dilute hydrochloric acid: Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g). The hydrogen collected has a volume of 56.9 mL at 25 °C and 100 kPa. Calculate the molar mass of zinc. (Molar volume of a gas at 25 °C and 100 kPa = 24.79 L mol⁻¹)". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 1 (brief)
> Fifty-six point nine millilitres is zero point zero five six nine litres. Divided by twenty-four point seven nine, that's two point two nine five times ten to the minus three moles of hydrogen, and of zinc, because the equation is one to **one**. So the molar mass is zero point one five zero divided by that, sixty-five point four grams per **mole**. Leaving the volume in millilitres gives a tiny, impossible answer. That's the slip to **avoid**.

Visual: card shrinks to the top. Rows: "V = 56.9 mL = 0.0569 L"; "n(H₂) = 0.0569 ÷ 24.79 = 2.295 × 10⁻³ mol"; on "one" "n(Zn) = n(H₂)" with "Zn ... H₂" underlined in the card. On "mole" "MM = 0.150 ÷ 2.295 × 10⁻³ = 65.4 g mol⁻¹" (48 px), the "65.4 g mol⁻¹" framed with a green tick. On "avoid" a chip "0.150 ÷ (56.9 ÷ 24.79) = 0.0654 g mol⁻¹" fades in and is crossed in red, red hand tag "mL to L first". Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. In the volatile liquid method, a student reweighs the cooled flask without drying its outside. Explain the effect on the calculated molar mass. Pause here to answer.

Visual: `QuestionCard`: "In the volatile liquid method, a student removes the flask from the water bath, cools it, and reweighs it without drying the outside of the flask. Explain the effect of this on the calculated molar mass of the liquid." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> The molar mass comes out too high. The water on the outside is weighed as if it were vapour, so the mass of vapour is too **big**. The volume, and so the moles, don't change. A bigger mass divided by the same moles gives a bigger molar mass. Saying it's too low, because water dilutes the liquid, is the classic **slip**.

Visual: card shrinks to the top; "without drying the outside" underlined. On "big" the chain writes: "m(vapour) ↑, n unchanged → MM = m ÷ n ↑", with "too high" framed. On "slip" a chip "too low: the water dilutes the liquid" fades in and is crossed in red, red hand tag "the water is outside the flask". Hold about 1 second.

### 18. handoff: one run is one number
> One run gives one number. So a class did the magnesium method five times, with five different masses of ribbon. Here's what they wrote down. Mixed units, missing labels, and a note about bubbles getting **away**. Next time, we'll turn raw readings like these into a table and a graph we can actually **use**.

Visual: board clears to the raw notebook page (coded, on a ruled-paper card; final frame, see "Opening frame and final frame"). On the second sentence five run lines write one after another in handwriting style. On "away" the run 3 note "ribbon floated, some bubbles escaped" gets a faint rose underline. On "use" the chip writes: "Next: How do raw chemistry readings become a usable table or graph?". Hold about 2 seconds. This is the final frame (ws-v04 opens on it).

### 19. key notes (quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. MM = m ÷ n: weigh to get m; use a gas volume to find n.
2. Same T and P: equal gas volumes hold equal particles. 24.79 L mol⁻¹ at 25 °C, 100 kPa; n = V (L) ÷ 24.79.
3. Element: Mg + 2HCl → MgCl₂ + H₂, so n(Mg) = n(H₂).
4. Compound: a volatile liquid's vapour fills the flask; n(vapour) = n(compound).
5. n too small or m too big → MM too high (escaped gas, oxide, wet flask). Small mass: fine balance.

Memory aid (framed card under the notes, hand lettering, navy, slate blue and teal as in scene 13): *Weigh it, count it with a gas, then divide.* Notes 32 px in the role colours; no paragraphs.

At the end the notes cross-fade back to scene 18's final frame.

## Teaching checks

- **Does it explain causes?** Why a gas volume counts moles (particles far apart, 2); why T and P matter (warming expands, squeezing shrinks, 2); why n(Mg) = n(H₂) (one atom gives one molecule, 3); why escaping gas raises MM (fewer moles counted, same mass, 7); why an oxide coating raises MM (mass with no gas, 7); why a coarse balance hurts (a small mass's reading window is wide, 8); why the pinhole (pressure stays at the room's, 9); why a wet flask raises MM (17).
- **Misconceptions addressed:** every loss makes the answer too low (6, 7; 17 crossed); a balance reading is exact (8); millilitres with litres per mole (15 crossed); the compound method needs an equation (13).
- **One idea at a time:** the need (1), the gas link (2), element set-up (3), collection (4), calculation (5), loss direction (6, 7), the weak reading (8), compound set-up (9), measurements (10), calculation and identity (11), its losses (12), comparison (13).
- **Video makes it easier:** equal gas boxes with different-sized particles (2); the gas column growing in the burette (4); the direction chain (7, 12, 17); the reading window narrowing (8); vapour pushing air out (9); the comparison table (13).
- **Response opportunity:** prediction (3 s) and two unseen tasks with the equation and molar volume on the card; 10 s each; nothing answer-bearing. Feedback about 30 s and 24 s.
- **Avoided double teaching:** n = m/MM and MM = m ÷ n (m2-v03), equations as particle counts (m2-v01), accurate (ws-v03) recalled; gas laws named as later; error types and percentage uncertainty left to ws-v05; processing several runs left to ws-v04.
- **Syllabus coverage:** `C2-IQ2-01`: demonstrate and calculate the molar mass of an element (magnesium; zinc in A1) and of a compound (volatile liquid).
- **Out of scope by design:** PV = nRT and the derivation of 30.6 L mol⁻¹ (m2-v16 to v19); water-vapour corrections; percentage error and uncertainty (ws-v05).

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style).** "0.150 g of zinc reacts completely with excess dilute hydrochloric acid: Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g). The hydrogen collected has a volume of 56.9 mL at 25 °C and 100 kPa. Calculate the molar mass of zinc. (Molar volume of a gas at 25 °C and 100 kPa = 24.79 L mol⁻¹)"
Model answer: V = 0.0569 L; n(H₂) = 0.0569 ÷ 24.79 = 2.295 × 10⁻³ mol; n(Zn) = n(H₂) (1 : 1); MM = 0.150 ÷ 2.295 × 10⁻³ = 65.4 g mol⁻¹. Classic mistake (crossed): leaving V in mL, 0.0654 g mol⁻¹.

**Attempt 2 (scene 16; original wording, HSC style).** "In the volatile liquid method, a student removes the flask from the water bath, cools it, and reweighs it without drying the outside of the flask. Explain the effect of this on the calculated molar mass of the liquid."
Model answer: the water on the outside is included in the final mass, so the calculated mass of vapour is too large; the volume and moles of vapour are unchanged; MM = m ÷ n is therefore too high. Classic mistake (crossed): "too low, because the water dilutes the liquid".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Molar volume (data sheet) | 24.79 L mol⁻¹ at 25 °C, 100 kPa | 2, 5, 14, 15, key notes |
| Element run (illustrative) | 0.042 g; burette 48.50 → 6.30 mL; 42.2 mL (gas over water, uncorrected); n 1.702 × 10⁻³ mol (shown 1.70); MM 24.7 g mol⁻¹; accepted 24.31 | 3 to 5, 18 |
| Collection simulation (Revision 2) | at 4.2 mL: n 1.694 × 10⁻⁴ mol, MM 247.9 (shown "247.9"); end 42.2 mL, 1.702 × 10⁻³ mol, 24.7; escape replay 38.0 mL, 1.533 × 10⁻³ mol, 27.4 | 4, 7 |
| Mass window | 0.035 to 0.045 g → about 21 to 26 g mol⁻¹ | 8 |
| Compound run (illustrative) | m 0.272 g; V 140 mL; 30.6 L mol⁻¹ at 100.0 °C, 101.3 kPa; n 4.575 × 10⁻³ mol (≈ 4.58); MM 59.45, shown 59.5 g mol⁻¹ | 9 to 11 |
| Candidates | ethanol 46.07; propanone 58.08; hexane 86.17 | 11 |
| A1 | 0.0569 L; 2.295 × 10⁻³ mol; 65.4 g mol⁻¹; crossed 0.0654 | 14, 15 |
| Final frame notebook | five runs (see "Opening frame and final frame") | 18 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 48.50 − 6.30 = 42.20; 0.0422 ÷ 24.79 = 1.7023 × 10⁻³; 0.042 ÷ 1.7023 × 10⁻³ = 24.67 (24.7); ideal V for 0.042 g = 0.042 ÷ 24.31 × 24.79 L = 42.83 mL.
- 0.035 ÷ 1.7023 × 10⁻³ = 20.56; 0.045 ÷ 1.7023 × 10⁻³ = 26.43.
- 8.314 × 373.15 ÷ 101.3 = 30.63; 0.140 ÷ 30.6 = 4.5752 × 10⁻³; 0.272 ÷ 4.5752 × 10⁻³ = 59.45 (59.5); with 30.63: 59.51. Revision 2 (brief 180): 0.272 ÷ the rounded 4.58 × 10⁻³ = 59.39 (59.4), so the screen row shows the guard digit 4.575 and 59.45.
- Revision 2 simulation: 0.0042 ÷ 24.79 = 1.694 × 10⁻⁴, 0.042 ÷ 1.694 × 10⁻⁴ = 247.9; 0.0380 ÷ 24.79 = 1.5329 × 10⁻³, 0.042 ÷ 1.5329 × 10⁻³ = 27.40.
- Propanone 3 × 12.01 + 6 × 1.008 + 16.00 = 58.08; ethanol 2 × 12.01 + 6 × 1.008 + 16.00 = 46.07; hexane 6 × 12.01 + 14 × 1.008 = 86.17.
- Zn: 0.0569 ÷ 24.79 = 2.2953 × 10⁻³; 0.150 ÷ 2.2953 × 10⁻³ = 65.35 (65.4); 0.150 ÷ (56.9 ÷ 24.79) = 0.06535.

## Memory aid check

- **"Weigh it, count it with a gas, then divide."** Written for this lesson. Meaning, as said in scene 13: the mass comes from a balance; the moles come from a gas volume at measured temperature and pressure (with an equation if the gas is a product); MM = m ÷ n. Assumptions checked: "count it with a gas" holds only at known T and P with the matching molar volume (said in the same scene); "it" in "count it" is the gas, linked to the substance by the equation in the element method. It helps A1 directly.
- **Considered, not used:** "MM = m over n" alone (gives no method).

## Narration length estimate

Revision 2 count (6 November; build parser rules: only lines starting "> ", `**` removed, total = sum of scene strings): **6,331 characters**, 19 scenes, speech unchanged (Revision 1's headline 6,349 included 18 joining spaces). At 13.3 characters per second the speech is about 476 s; add about 2 s for the gas column and live readouts (4), 1 s for the levels-matching move (4), 1 s for the escape replay (7), 2 s for the vapour fill (9), 2 s for the scene 13 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 45 s more of the quiet notes hold (about 80 s): **about 556 s**. Reserve trims if the voiced take runs long: scene 12's second sentence (the tag stays), scene 8's last sentence, scene 2's reason sentence (keep the stated fact).

## Opening frame and final frame

- **Opening frame:** m2-v03's final frame exactly (Decisions).
- **Final frame (ws-v04 opens on it):** a coded ruled-paper notebook card at the centre left, headed in handwriting "Mg + HCl, gas in upturned burette (25 °C, 100 kPa)", with five run lines exactly:
  - "Run 1: Mg 12 mg. Burette 48.50 → 36.40"
  - "Run 2: 0.020 g. 49.2 → 28.6 mL"
  - "Run 3: Mg 0.028 g, start 47.80, end 25.40. Ribbon floated, some bubbles escaped!" (the note faintly underlined rose)
  - "Run 4: 0.035, 48.90 → 13.60"
  - "Run 5: 0.042 g. 48.50 → 6.30 mL"
  At the right, small, the upturned burette end plate (`y11c-burette-upturned-end-v1.png`) and the result chip "one run: 24.7 g mol⁻¹"; the "MM = m ÷ n" strip at the top centre; the chip "Next: How do raw chemistry readings become a usable table or graph?".

## Scene list and build ids

Lesson key `c-y11-m2-v04` (route chem-y11-m2-v04; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v04`.

In order (19 scene headings, all `### N.`): hook, gas-counts, element-setup, collect-hydrogen, element-calc, prediction, loss-direction, weak-reading, compound-setup, reweigh-volume, compound-calc, compound-losses, compare, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: m2-v03's final frame into scene 1 by camera continue; 1 to 2 clear change (gas boxes); 2 to 3 board clear (conditions strip stays); 3 to 4 camera push to the burette; 4 to 5 clear change to the full-width calculation (Revision 2); 5 to 6 stage change back to the burette; 6 to 7 camera continue; 7 to 8 clear change; 8 to 9 board clear; 9 to 10 camera continue; 10 to 11 clear change to the full-width calculation (Revision 2); 11 to 12 stage change back to the flask; 12 to 13 board clear; attempts and feedback card shrink to the top; 17 to 18 board clear; 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 50 s). Review evidence paths: `checks/c-y11-m2-v04-learning-review.md`, `checks/c-y11-m2-v04-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet; scaled uniformly only, never stretched):
- `public/assets/chemistry/y11c-top-pan-balance-v1.png` (1402 × 1122): scenes 3, 9, 10.
- `public/assets/chemistry/p01-mg-ribbon-v1.png` (2000 × 2000): scene 3.
- `public/assets/chemistry/m6-measuring-cylinder-v1.png` (2000 × 2000): scene 10, with a coded water fill.
- **Inspected, not used:** `m8-aspirin-water-bath-v1.png` (conical flask in a water bath on a hotplate with a thermometer; the flask holds white solid and has no foil cap; used as the base for the new bath plates); `m5x-strong-acid-mg-v1.png` (ribbon fizzing in an open beaker of acid: shows the reaction but not the collection, kept as an optional insert for scene 3 if root wants the reaction seen first); `m6-burette-clamp-stand-v1.png` (upright burette for titration, wrong orientation and set-up); `c4a-syringe-barrel-v1.png` (a syringe part from a gas-law diagram, not a collection set-up).

Need (new plates, Codex):
1. `y11c-burette-upturned-start-v1.png` and `y11c-burette-upturned-end-v1.png`: scenes 4, 6, 18. Essential (the element method).
2. `y11c-flask-foil-cap-v1.png`: scenes 9, 10, 12. Essential.
3. `y11c-flask-water-bath-liquid-v1.png` and `y11c-flask-water-bath-vapour-v1.png`: scene 9. Essential (the compound method), edits of `m8-aspirin-water-bath-v1.png`.

Coded: collection simulation readouts (volume, n, MM), clamp move, gas boxes, gas column and bubbles, readouts, particle pairing, direction chains, reading window, vapour and air dots, water droplets, candidate strip, `CompareTable`, calculation rows, notebook card, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v04)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-m2-v04.md`. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo**, ink and watercolour in the house style, no text, labels, numbers, people, hands, faces, backdrop, glow or ground shadow. Never stretch; keep the native aspect ratio. Burette graduations may be drawn as unlabelled tick marks only.

1. `y11c-burette-upturned-start-v1.png` (about 1100 × 2200 px): a 50 mL glass burette turned upside down (tap at the top, closed), held by a plain clamp on a retort stand, its open end dipping into a 250 mL beaker of water; the burette completely full of colourless liquid; a small coil of magnesium ribbon (silvery) just inside the open end. Side view.
2. `y11c-burette-upturned-end-v1.png` (same canvas): plate 1 identical except the ribbon is gone and the top part of the burette (tap end, about 42 of 50 mL of the graduated length) holds gas, with the liquid surface lower. The two plates overlay exactly.
3. `y11c-flask-foil-cap-v1.png` (about 1400 × 1600 px): a dry, empty 125 mL conical flask with a crimped aluminium foil cap over its neck (a tiny pinhole suggested, no label). Matches the flask in plates 4 and 5 in shape and scale.
4. `y11c-flask-water-bath-liquid-v1.png` (the same canvas as `m8-aspirin-water-bath-v1.png`, 2000 × 2000): **edit of that plate**, identical in every line (beaker, hotplate, thermometer, water level, gentle bubbles), except the flask holds only a thin layer (2 to 3 mL) of colourless liquid instead of white solid, and wears the foil cap from plate 3. Remove any rising steam above the flask mouth.
5. `y11c-flask-water-bath-vapour-v1.png` (same canvas): plate 4 with the liquid gone (empty flask); everything else identical. Plates 4 and 5 overlay exactly with `m8-aspirin-water-bath-v1.png`.

Report the overlay checks on the paper and dark board backgrounds at about 300 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m2-v04-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the RSC element method details and the stable URL (Decisions; open decision 3), and that the video's method matches them (cleaning, 0.001 g balance, upturned burette, 1 : 1).
3. Confirm the chemistry of every learner-visible claim: equal volumes and equal particles at the same T and P; 24.79 L mol⁻¹ (data sheet); 30.6 L mol⁻¹ at 100.0 °C and 101.3 kPa; loss directions; the pinhole's purpose; candidates' molar masses.
4. Confirm the safety lines against current NSW school guidance (dilute HCl, hydrogen and flames, a hotplate water bath for a flammable liquid, small volumes, ventilation).
5. Confirm the memory aid's assumptions (Memory aid check).
6. Confirm both attempt cards are original, carry the equation and molar volume, and show nothing answer-bearing.
7. Confirm the syllabus quote matches the ledger.
8. Confirm no person, hand or face is drawn or requested.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
10. Confirm the narration character count by script, that the opening frame equals m2-v03's final frame, and that the final frame's notebook lines match ws-v04's opening exactly.

## YouTube metadata (draft)

Title: Measuring Molar Mass in the Lab: Magnesium and a Volatile Liquid | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module2/lesson02.sa.html

You can weigh a substance, but how do you count its moles? Use a gas. See how magnesium's hydrogen and a volatile liquid's vapour each give the moles, why temperature and pressure must be measured, how escaping gas or a wet flask pushes the answer too high, why a tiny mass needs a fine balance, and how to identify an unknown liquid from its molar mass. Element method based on the Royal Society of Chemistry's Nuffield practical. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct a practical investigation to demonstrate and calculate the molar mass (mass of one mole) of:
- an element
- a compound (ACSCH046)"

Previous: Molar mass and n = m/MM. Next: Turning raw readings into tables and graphs.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Learner question wording (root).** Route: "How can a practical determine molar mass?" Proposed: "How can measuring a mass and a gas volume reveal a molar mass?"
- **2. Molar volume before the gas laws (root, science check).** The video states the equal-volumes fact and gives 24.79 L mol⁻¹ (data sheet) and 30.6 L mol⁻¹ at the bath's conditions as given values, with "a later video" tags (m2-v16, v19). The alternative is to place this video after m2-v16, which the route order does not allow.
- **3. Element method source (root).** RSC Nuffield Practical Collection, "Determining the relative atomic mass of magnesium"; the download and resource URLs were found by search on 5 November; the teacher notes were not opened. Codex confirms the details and a stable link before the description is published.
- **4. Site notes 1 to 3 (root).** Log if accepted (naked flame under the bath; sealed-flask direction claim; PV = nRT before it is taught).
- **5. Plates (root).** Five new plates (two burette, three flask). `m5x-strong-acid-mg-v1.png` is available as an optional reaction insert.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the given molar volume acceptable without the gas laws; is the loss-direction chain clear; is scene 8 understood without the word "uncertainty"; is the compound section too long at four scenes), then the science check (safety, author notes c and e) and the Codex error check.
- Checker output (5 November): narration 6,349 characters; per scene (1 to 19): 315, 461, 403, 313, 486, 124, 368, 421, 466, 324, 474, 235, 386, 256, 436, 175, 313, 300, 75; no em dash; every quoted cue found in its scene's narration in spoken order. About 555 s: within the cap with 15 s to spare; reserve trims are listed in the length estimate.
- Revision 2 count (6 November): 6,331 characters (sum of scene strings; speech unchanged); per scene as Revision 1. Every bold cue checked in its Visual in spoken order; no em dash.

## Revision 2 (6 Nov 2026)

Brief 180 findings (`checks/c-y11-m2-v04-learning-review.md`, `checks/c-y11-m2-v04-science-check.md`):
- **Should fix, wet gas and liquid-column pressure (scenes 4, 5):** the 42.2 mL is now labelled on screen as "gas collected over water, uncorrected (includes some water vapour)", the calculation row uses "≈" and carries a grey tag "uncorrected gas: water vapour makes this read about 3% low", and the method matches the liquid levels inside and outside the burette before reading (clamp moved by code; tag "levels matched: gas at room pressure"). No speech added; Decisions and author note c updated.
- **Should fix, scene 11 guard digits:** the moles row shows 4.575 × 10⁻³ (≈ 4.58, unrounded value kept) and the result row 0.272 ÷ 4.575 × 10⁻³ = 59.45, shown 59.5. Scene 5 likewise shows 1.702 × 10⁻³. No speech change.
- **Should fix, scene 1 cue:** the n-tag pulse moves to the fourth sentence, "The hard part is the moles". No speech change.
- **Count method:** headline restated as the sum of scene strings (6,331; Revision 1's 6,349 included joining spaces). Estimate about 556 s.

Visual upgrade (`../maths-visual-standard.md`, audit recommendation):
- Decisions: colour roles, type sizes (current row 48 px, readouts 52 px, floor 26 px), anchor and simulation lines; board-layout exceptions.
- Simulation: scene 4's collection now drives three live readouts (gas volume, n so far, "MM if you stopped now"), the MM readout falling as gas arrives; scene 7 replays it with escaping gas to show MM left too high (27.4).
- Stage cuts: both calculations (5, 11) move to the full-width g01 layout and the apparatus returns for the losses (6, 12), so the 127 s magnesium stretch and the 113 s liquid stretch are each split into stages under about 60 s.
- Hand tags and pen marks in role colours in every teaching scene; framed answers on 24.7 (5), 59.5 (11), 65.4 (15) and "too high" (17); crossed slips with red hand tags (7 new "any loss makes it too low", 15, 17); live candidate marker in 11.
- Memory line in a framed card (13); key notes cut to five short bullets (385 characters) with the framed card.
- No new plate requests (the five Revision 1 requests stand; the burette and bath plates are now on disk and should be inspected at build).

## Revision 3 (7 Nov 2026)

Brief 214 error check (`checks/c-y11-m2-v04-rev2-error-check.md`), should-fix finding resolved (root):
- Scene 4: the live MM readout at 4.2 mL now shows "247.9 g mol⁻¹" (0.042 g ÷ (0.0042 L ÷ 24.79 L mol⁻¹) = 247.9, rechecked in Python). The Numbers used row now says shown "247.9". The final 24.7 and the escaped-gas 27.4 are unchanged and correct.
- No speech change. Narration 6,331 characters (sum of 19 scene strings), about 556 s. Bold cues quoted in spoken order; no em dashes.
