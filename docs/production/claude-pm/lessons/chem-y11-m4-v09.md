# Year 11 Chemistry M4 V09: Combustion data in energy cycles. How can combustion data complete an unknown energy cycle? (design)

Status: Revision 1 (6 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,367 characters, 18 scenes, about 570 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: ninth Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 78, between `chem-y11-m4-v08` (standard enthalpies of formation) and `chem-y11-m4-v10` (photosynthesis and respiration); a calculation video built on one energy cycle. Templates: `chem-y11-m4-v02.md` (series layout, calculation board), `math-a12-d10.md` (calculation staging), `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates). No starter pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v09` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Draw and combine a simple combustion cycle, retain states and compare energy per mole with per gram."; next handoff: "How are photosynthesis and respiration related in an enthalpy cycle?"). Site lesson read in full (6 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson10.sa.html` (SHA256 `50dd5288cc5a6ee9520b5fe2616219c4dcca18b9fb5ef65768da976a98b601f6`, recomputed, matches the route), sections `l10-comparing-the-three-methods-when-to-use-each-title`, `l10-comparing-fuel-efficiency-per-mole-vs-per-gr-title`, `l10-calculating-hc-via-hess-s-law-and-h-f-title`. Used: the definition of heat of combustion ("the ΔH when one mole burns completely in O₂, exothermic, so ΔHc < 0"); the combustion triangle "elements → fuel, elements → products, fuel → products" and its identity ΔfH°(fuel) + ΔHc = ΣΔfH°(products); "Choose a route from the data" (formation table → formula; equations → cycle; bond energies → estimate); the fuel table (methane 55.5, octane 47.9, hydrogen about 142 kJ g⁻¹); Eg = |ΔHc| ÷ M; the misconception "Higher ΔHc per mole always means more energy per gram"; the "mass matters (aircraft)" use; drill 1's idea (a formation enthalpy found from combustion data), rebuilt with ethanol as attempt 1. Not used: the Brazil ANP hook (site note 1), the propan-1-ol worked example (the methane cycle does the same job with one fuel), the E10 tank estimate, policy and non-thermochemical fuel reasons, the stretch question's claim about carbon monoxide (site note 3). Site corrections file checked: no logged item touches Module 4.

Owner rules applied: as `chem-y11-m4-v02.md` (one learner question; no people, hands or faces; real apparatus as painted plates; cycles, ladders, bar charts, readouts and calculation rows coded in the data-graph style, never painted; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Drivers of Reactions; local ledger ID), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ2-03`: "apply Hess’s Law to simple energy cycles and solve problems to quantify enthalpy changes within reactions, including but not limited to:"
  - "heat of combustion"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 44)

**Boundary:** opens on m4-v08's final frame (ethanol's formation enthalpy, "how was this measured?"; reconciled, see Decisions). Teaches: why some formation enthalpies cannot be measured directly (carbon and hydrogen do not combine cleanly to methane); heat of combustion (recalled from m4-v03 and defined in plain words); the combustion energy cycle (two routes, same start, same finish) drawn for methane; route sums with scaling; solving for the unknown ΔfH°(CH₄) = −74.5 kJ mol⁻¹; an enthalpy ladder reading of the result; the bottom arrow is both "burn the elements" and "form the products", so the same cycle gives ΔHc from formation data (m4-v08's formula) and method choice by the data given; states must match (the steam trap); energy per mole against energy per gram (methane against octane; hydrogen). Not taught: Hess's law itself, reversing and scaling rules (m4-v07), the formation formula (m4-v08), bond-energy estimates (m4-v06), photosynthesis and respiration (v10), fuel policy.

## Decisions

- **Learner question (route wording kept).** "How can combustion data complete an unknown energy cycle?" The answer, in order: an unmeasurable step sits in a cycle whose other arrows are measured combustions (1 to 4); routes with the same start and finish have the same total, so the unknown is the difference (5, 6); the bottom "floor" of carbon dioxide and liquid water joins every route, which is why combustion and formation data are interchangeable (7, 8); every arrow must end in the same states (9); the same combustion values compare fuels, per mole or per gram (10, 11).
- **Opening frame (m4-v08 designed in parallel; reconciled to its file as found on 6 November).** The brief asked for an assumed frame. My first assumption was a formation data card with the methane row ringed. Before finishing, `chem-y11-m4-v08.md` appeared on disk with its actual final frame, so scene 1 now opens on that: the ethanol height diagram (elements line "ΔfH° = 0"; "C₂H₅OH(l) + 3O₂(g): −277.7 kJ"; "2CO₂(g) + 3H₂O(l): −1644.4 kJ"; red arrow "ΔHc = −1367 kJ mol⁻¹"; "−277.7" ringed amber with "how was this measured?"), the equation strip "2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)" with "can't be made directly in a calorimeter", `m7-spirit-burner-calorimeter-v1.png` small with "combustion can be measured", the amber chip "Can combustion data complete the cycle?" and the "Next" chip. Scene 1 takes up v08's question, solves it first with the simpler methane case (one carbon), and hands ethanol back as attempt 1, which answers v08's question directly (−277.4, matching v08's −277.7 within rounding). If v08's final frame changes in review, only scene 1's first three sentences and first visual beat change. Root to confirm.
- **v08's value in scene 1.** −277.7 kJ mol⁻¹ is spoken because v08's frame shows it; attempt 1's cycle gives −277.4 from the rounded combustion data, and feedback 1 tags the difference as rounding.
- **Prediction (3 s, scene 1).** "Burning the elements releases 965 kJ; burning the methane releases about 891 kJ. Is forming methane exothermic or endothermic?" Answer: exothermic (scene 2). It makes the cycle's logic felt before any algebra.
- **Why ΔfH°(CH₄) is not measured directly (scene 1).** Carbon and hydrogen do not combine cleanly to methane under calorimeter conditions (no reaction at room temperature; at high temperature a mixture forms). Said in one plain sentence; author note (a).
- **Heat of combustion (scene 3).** Plain meaning: "the enthalpy change when one mole of a substance burns completely in oxygen", always negative. Recalled from m4-v03 (molar enthalpy of combustion), not re-taught.
- **Data source.** OpenStax Chemistry 2e, Appendix G (checked online 6 November 2026): ΔfH°(CO₂, g) −393.51, ΔfH°(H₂O, l) −285.83, ΔfH°(H₂O, g) −241.82, ΔfH°(CH₄, g) −74.6 kJ mol⁻¹. Combustion values used: carbon −393.5, hydrogen (to liquid water) −285.8, methane −890.6 kJ mol⁻¹ (consistent with those formation values: −393.51 + 2(−285.83) + 74.6 = −890.57; NIST lists a measured −890.7 within uncertainty). Octane (liquid) −5470 kJ mol⁻¹ and butane (gas) −2878 kJ mol⁻¹ are NIST Chemistry WebBook combustion values (Codex to confirm; site octane −5471). Ethanol −1367 kJ mol⁻¹ keeps the course value from m4-v02 and m4-v03 (CRC −1366.8). Molar masses from HSC data-sheet atomic masses (H 1.008, C 12.01, O 16.00). Author note (b).
- **The cycle (scenes 4 to 6).** Layout constant: top left "C(s) + 2H₂(g) + 2O₂(g)" (elements), top right "CH₄(g) + 2O₂(g)", bottom centre "CO₂(g) + 2H₂O(l)". Arrows: top, amber dashed "ΔfH°(CH₄) = ?"; left down, orange "burn the elements: −393.5 + 2(−285.8)"; right down, orange "burn methane: −890.6". O₂ is carried in both top corners so atoms balance, and the narration says why it changes nothing (its formation enthalpy is zero, from m4-v08).
- **Calculation layout (scenes 5, 6; `math-a12-d10.md`).** Task strip "Find ΔfH° of methane"; equation strip "route 1 = route 2"; givens grouped with units; one stage per row; earlier rows dim. Result −74.5 kJ mol⁻¹ (three significant figures, Module 4 rule; agrees with the table's −74.6 within rounding of the inputs).
- **Enthalpy ladder (scene 7).** The same three states redrawn as levels on a vertical enthalpy axis (elements at 0, methane at −74.5, products at −965.1), so the result has a picture: methane already went part of the way down.
- **Same arrow, two names; method choice (scene 8).** Burning carbon is forming CO₂ from its elements, so ΔHc(C) = ΔfH°(CO₂); likewise hydrogen and water. Hence ΔHc(fuel) = ΣΔfH°(products) − ΔfH°(fuel), m4-v08's formula read off the same triangle. Method chips (site section): "formation data given → v08 formula", "combustion data or equations given → draw the cycle", "only bond energies → estimate (v06)".
- **States (scene 9; route stop "retain states").** The steam trap: using hydrogen's value for steam (−241.8) with methane's liquid-water value gives +13.5 kJ mol⁻¹, the wrong sign. Condensing a mole of steam releases about 44 kJ.
- **Per mole against per gram (scenes 10, 11; site table).** Octane 5470 kJ mol⁻¹ against methane 890.6 (6.1 times); per gram 47.9 against 55.5 kJ g⁻¹, so the ranking flips. The site's own misconception box uses methanol and ethanol, which does not flip; methane and octane do (site note 2). Hydrogen: 285.8 ÷ 2.016 = 141.8 kJ g⁻¹ (about 142; site 141.6 from M = 2.02). Per litre is named only as a reason hydrogen is hard to store (grey tag), not calculated.
- **Memory aid:** "Burn it all to the same floor." (see "Memory aid check"), scene 12.
- **Attempts (original wording, HSC style).** A1: ΔfH° of ethanol from combustion data: −277 kJ mol⁻¹ (unrounded −277.4; OpenStax −277.6). Crossed: "+277 kJ mol⁻¹ (subtracted the wrong way)". A2: butane against hydrogen per mole and per gram: butane per mole (about 10 times); hydrogen per gram (141.8 against 49.5 kJ g⁻¹). Crossed: "butane wins both, because 2878 > 285.8".
- **Mistake scene:** none separate. Unscaled hydrogen (5); a sign slip in the subtraction (6, crossed in A1); mixed states (9); per mole taken as per gram (10, crossed in A2).
- **Handoff (route next: `chem-y11-m4-v10`, "How are photosynthesis and respiration related in an enthalpy cycle?").** Scene 17: glucose also burns to the same floor (−2803 kJ mol⁻¹, the site's lesson 9 value); cells do the same overall reaction and plants run it backwards. Final frame: see "Opening frame and final frame".
- **Site notes (read 6 November; for root to log if accepted):**
  1. Lesson 10 hook and Revisit: "ethanol fuel delivers 26.8 MJ L⁻¹ versus petrol's 34.2 MJ L⁻¹, a 22% shortfall". Unsourced, and 26.8 matches ethanol's energy per kilogram (lower heating value, about 26.8 MJ kg⁻¹), not per litre: with the site's own 29.7 kJ g⁻¹ and density 0.789 g mL⁻¹, ethanol gives about 23.4 MJ L⁻¹ (higher heating value), roughly a third less than petrol per litre. Suggest citing a source and correcting the unit, or removing the figures.
  2. Lesson 10 misconception box: "Ethanol has higher ΔHc per mole than methanol, AND higher energy per gram". The example does not show the ranking flip the box warns about. Suggest the site's own methane and octane rows (per mole: octane; per gram: methane), as this video does.
  3. Lesson 10 stretch question and key term: "Carbon monoxide cannot be burned cleanly to CO₂ in isolation, so its ΔHc can't be measured directly" and "ΔHc° of a substance that cannot be burned cleanly (e.g., C → CO)". Carbon monoxide burns cleanly to CO₂ and its ΔHc is measured directly; what cannot be measured directly is carbon burning only to CO (ΔfH° of CO). Suggest: "Carbon cannot be burned cleanly to CO alone, so ΔfH°(CO) is found by Hess's law from ΔHc(C) and ΔHc(CO)", and rename the key term "indirect determination of an enthalpy change that cannot be measured directly".
  4. Lesson 10 short answer Q1: the stated bond-energy result "ΔH = −674 kJ mol⁻¹" and "a difference of 216 kJ mol⁻¹". With the question's own bond energies (C–H 413, O=O 498, C=O 743, O–H 463), broken 2648, formed 3338, so ΔH = −690 kJ mol⁻¹ and the difference from −890.3 is 200 kJ mol⁻¹. Suggest correcting both figures.
  5. Lesson 10 Revisit: "ethanol has a higher energy-to-carbon ratio and lower CO₂ per MJ". Per mole of CO₂ released, ethanol gives 1367 ÷ 2 = 684 kJ and octane 5471 ÷ 8 = 684 kJ: the same. Suggest removing the clause (lifecycle CO₂ differences come from how the fuel is grown, not from combustion).
  6. Lesson 10 summary box lists the misconception "(2) ΔH°f of all substances is zero", while the card above lists "(2) bond energy and ΔH°f methods always give the same ΔH". Minor inconsistency; suggest one list.
  7. Lesson 10 header cites "(ACSCH074)"; the syllabus dot point carries "(ACSCH037)". Minor.
  - Checked and correct: the fuel table (55.5, 47.9, 29.7, 22.7 kJ g⁻¹; hydrogen 141.6 with M = 2.02); worked example 1 (−2020.7 kJ mol⁻¹, 33.6 kJ g⁻¹); worked example 2 (22.7, 29.7); drills 1 to 3 (−83.7, −2676, 36.1); the pentan-1-ol core task (−3331 kJ mol⁻¹); Q3 (−1366.7, 117 MJ).
- **Cause chain taught, in order:** (1) carbon and hydrogen do not combine cleanly, so ΔfH°(CH₄) cannot be measured directly (1); (2) both routes start at the same elements and finish at the same products, so their totals are equal (2, 6); (3) burning releases energy, so heats of combustion are negative (3); (4) oxygen's formation enthalpy is zero, so carrying it changes nothing (4); (5) two moles of hydrogen burn, so hydrogen's value is doubled (5); (6) the unknown is the difference between the routes (6); (7) methane already released 74.5 kJ when it formed, so it releases less when burned than its elements do (7); (8) burning an element forms its oxide, so combustion and formation values are the same arrow (8); (9) condensing steam releases energy, so mixed states change the total (9); (10) a mole of a heavy fuel is many grams, so per-gram rankings can flip (10, 11).
- **Entry knowledge:** m4-v01 (exothermic, ΔH sign, thermochemical equations), m4-v03 (molar enthalpy of combustion from a burner), m4-v07 (Hess's law: same start and end, reverse, scale, cancel), m4-v08 (formation enthalpy; elements zero; products minus reactants); m2 molar mass.
- **Learner-visible vocabulary (plain meaning at first use):** energy cycle (2, "a diagram with two routes between the same start and the same finish"); heat of combustion (3); energy per gram (10, "the heat of combustion divided by the molar mass").
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **cycle board** (scenes 1 to 9: three corner cards, arrows that draw on cue, values that fly from the data card onto arrows, a route-total counter under each route); **enthalpy ladder** (scene 7: the corners slide onto a vertical axis); **data card** (scene 3: three combustion rows, each with a small coded flame icon and its equation); **steam trap** (scene 9: the bottom card swaps "2H₂O(l)" for "2H₂O(g)" on one route only, the two route floors split apart by a 44 kJ gap per mole of water); **fuel bars** (scenes 10, 11, A2 feedback: a coded horizontal bar chart that re-sorts when the unit toggles from kJ mol⁻¹ to kJ g⁻¹); `p01-bunsen-lit-v2.png` (methane), `m7-camping-gas-burner-v1.png` (butane); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Notation.** ΔfH° for standard enthalpy of formation, as `chem-y11-m4-v08.md` writes it; ΔHc for heat of combustion, as `chem-y11-m4-v03.md`. Scene 7's enthalpy ladder deliberately matches v08's memory aid ("Formation enthalpies are heights").
- **Colour key (continues v01 to v02):** combustion arrows warm orange (energy out); the unknown arrow amber dashed with "?"; formation arrows teal; elements and products ink; enthalpy levels ink on a slate axis; per-mole bars slate, per-gram bars teal; crossed items red strike; earlier rows dimmed.
- **Board layout (constant):** heading top left; the cycle at the left two thirds; givens and stage rows at the right.

Author notes (not learner copy):
(a) Direct synthesis: carbon and hydrogen do not react at room temperature; at high temperature (with catalysts) they give an equilibrium mixture of hydrocarbons, so the heat of the single reaction C(s) + 2H₂(g) → CH₄(g) is not measured in a calorimeter. ΔfH°(CH₄) in tables comes from combustion calorimetry (Rossini, 1931) by exactly this cycle.
(b) Data: OpenStax Chemistry 2e Appendix G (ΔfH° kJ mol⁻¹): CO₂(g) −393.51, H₂O(l) −285.83, H₂O(g) −241.82, CH₄(g) −74.6, C₂H₅OH(l) −277.6. Combustion: CH₄ −890.6 (derived from those; NIST WebBook ΔcH°gas about −890.7); C₈H₁₈(l) −5470 (NIST, about −5470); C₄H₁₀(g) −2878 (NIST about −2877.6); C₂H₅OH(l) −1367 (course value; CRC −1366.8). Codex to confirm the NIST values; if butane is printed as −2877, A2's numbers change by one unit only (49.5 kJ g⁻¹ unchanged).
(c) Prediction values: 965.1 and 890.6 spoken as "nine hundred and sixty-five" and "about eight hundred and ninety-one".
(d) Rounding: route totals and data keep one decimal place (data precision); the final ΔfH° is given to three significant figures (Module 4 rule) and spoken with one decimal because the comparison with −74.6 needs it.
(e) Hydrogen per litre: gaseous hydrogen at 25 °C and 100 kPa holds about 0.0116 MJ L⁻¹ (285.8 kJ mol⁻¹ ÷ 24.79 L mol⁻¹); not shown, only the grey tag "very light, so bulky to store".
(f) Pronunciations: "delta H f"; "C H four"; "kilojoules per mole"; "kilojoules per gram".

Main question: *How can combustion data complete an unknown energy cycle?*
Entry knowledge: m4-v01, m4-v03, m4-v07, m4-v08; molar mass.
Stops after: the methane combustion cycle solved, its ladder reading, the same arrow for combustion and formation, matching states, per mole against per gram. No photosynthesis or respiration.
Handoff: chem-y11-m4-v10, photosynthesis and respiration.

## Opening frame and final frame

- **Opening frame:** m4-v08's final frame as found in `chem-y11-m4-v08.md` on 6 November (described in Decisions: the ethanol height diagram with "−277.7" ringed and "how was this measured?").
- **Final frame (`chem-y11-m4-v10` opens on it):** the cycle board redrawn for glucose: top card "C₆H₁₂O₆(s) + 6O₂(g)" (amber outline), bottom card "6CO₂(g) + 6H₂O(l)" (the same "floor" style as the methane cycle), a solid orange down arrow at the right labelled "burning (or respiration): ΔH = −2803 kJ mol⁻¹", and a dashed up arrow at the left labelled "photosynthesis: ?". Small at the right: `b6a-mitochondrion-v1.png` beside the down arrow and `g1-leaf-v1.png` beside the up arrow, each with a grey label ("cell", "leaf"). The amber chip "Same two levels. How are the two arrows related?". The chip "Next: How are photosynthesis and respiration related in an enthalpy cycle?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Last time ended on a question. Ethanol's formation enthalpy is minus two hundred and seventy-seven point seven, yet nobody can make ethanol from its elements in a calorimeter. So how was it measured? Let's find out with a simpler fuel, methane, which has the same problem. But burning is easy to measure. Burning one mole of carbon and two moles of hydrogen releases nine hundred and sixty-five kilojoules. Burning one mole of methane releases about eight hundred and ninety-one. So is making methane from its elements exothermic, or **endothermic**?

Visual: opens on m4-v08's final frame; the "Next" chip fades. Heading writes: "Finding a number nobody can measure". On "how was it measured" the ringed "−277.7" pulses. On "a simpler fuel, methane" the ethanol diagram shrinks to a thumbnail at the top right, tagged "your turn, later", and a coded equation writes at centre: "C(s) + 2H₂(g) → CH₄(g)  ΔfH° = ?", with a grey cross over its arrow (tag "carbon and hydrogen don't react cleanly"). On "burning is easy to measure" `p01-bunsen-lit-v2.png` enters at the right, small. On "nine hundred and sixty-five kilojoules" an orange bar "burn C + 2H₂: 965 kJ released"; on "eight hundred and ninety-one" a shorter orange bar "burn CH₄: 891 kJ released". Chips "exothermic" and "endothermic". On "endothermic" the 3 s `Countdown` ring runs.

### 2. the energy cycle
> Exothermic. Both routes start with the same elements, and both finish as carbon dioxide and liquid water. Going straight there releases nine hundred and sixty-five kilojoules. Going through methane, the burning step releases only eight hundred and ninety-one, so the first step must have released the rest. Two routes between the same start and the same finish make an energy **cycle**.

Visual: "exothermic" ticks. On "the same elements" the two bars turn into two routes: a start card "elements" at the top left, a finish card "CO₂(g) + 2H₂O(l)" at the bottom. On "Going straight there" the left route draws down (orange, "965"). On "Going through methane" a card "CH₄" appears at the top right; the across arrow draws dashed amber, then the down arrow orange ("891"). On "released the rest" the across arrow fills amber with "about 74 out". On "energy cycle" gloss card "energy cycle: two routes between the same start and the same finish".

### 3. heats of combustion
> They come from heats of combustion. A heat of combustion is the enthalpy change when one mole of a substance burns completely in oxygen. It's always negative, because burning releases energy. Carbon's is minus three hundred and ninety-three point five kilojoules per mole. Hydrogen's is minus two hundred and eighty-five point eight. And methane's is minus eight hundred and ninety point six. Each one ends as carbon dioxide gas or liquid **water**.

Visual: the cycle shrinks to the left; the data card at the right. On "heat of combustion is" gloss card "heat of combustion, ΔHc: the enthalpy change when 1 mol burns completely in oxygen (always negative)". Rows write on cue, each with a small coded flame, under a grey tag "data: OpenStax Chemistry 2e, Appendix G": on "Carbon's" "C(s) + O₂(g) → CO₂(g)   ΔHc = −393.5 kJ mol⁻¹"; on "Hydrogen's" "H₂(g) + ½O₂(g) → H₂O(l)   −285.8 kJ mol⁻¹"; on "methane's" "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)   −890.6 kJ mol⁻¹". On "liquid water" the products "CO₂(g)" and "H₂O(l)" in all three rows are underlined teal.

### 4. drawing the cycle
> Now draw the full cycle. Top left, the elements: one carbon, two hydrogen molecules, and the two oxygen molecules that burning will need. Top right, methane, with the same two oxygens. At the bottom, carbon dioxide and two waters, the same finish for both. The arrow across the top is the unknown, methane's formation enthalpy. The oxygen changes nothing in that step, because its formation enthalpy is **zero**.

Visual: the cycle board fills the left two thirds. On "the elements: one carbon" the top-left card writes "C(s) + 2H₂(g) + 2O₂(g)"; on "methane, with the same two oxygens" the top-right card "CH₄(g) + 2O₂(g)"; on "the same finish for both" the bottom card "CO₂(g) + 2H₂O(l)" with two down arrows drawing to it (still unlabelled). On "the unknown" the top arrow draws amber dashed, label "ΔfH°(CH₄) = ?". On "zero" the two "2O₂(g)" terms pulse with a small tag "ΔfH°(O₂) = 0".

### 5. route one
> Route one goes straight down. Burn one mole of carbon, minus three hundred and ninety-three point five. Burn two moles of hydrogen, two times minus two hundred and eighty-five point eight. Together, that's minus nine hundred and sixty-five point one kilojoules. Don't forget to scale the hydrogen by **two**.

Visual: task strip at the right: "Find ΔfH° of methane". On "Burn one mole of carbon" the carbon row flies from the data card onto the left arrow: "−393.5". On "two times minus two hundred and eighty-five point eight" the hydrogen row follows with "× 2" written amber: "2 × (−285.8)". Stage row: "route 1 = −393.5 + 2(−285.8)"; on "nine hundred and sixty-five point one" "= −965.1 kJ" (orange); the left arrow's label settles as "−965.1". On "two" a crossed ghost row "−393.5 + (−285.8) = −679.3" flashes and fades (tag "hydrogen not doubled").

### 6. solving for the unknown
> Route two goes across, then down: the unknown, plus minus eight hundred and ninety point six. Same start, same finish, so both totals must be equal. That's Hess's law. So the unknown is minus nine hundred and sixty-five point one, plus eight hundred and ninety point six, which is minus seventy-four point five kilojoules per mole. The table lists minus seventy-four point six, so the cycle agrees, within **rounding**.

Visual: on "Route two goes across, then down" the top and right arrows glow in turn; the right arrow's label "−890.6". Equation strip: "route 1 = route 2". On "both totals must be equal" the stage row "−965.1 = ΔfH° + (−890.6)". On "So the unknown is" "ΔfH° = −965.1 + 890.6"; on "minus seventy-four point five kilojoules per mole" "= −74.5 kJ mol⁻¹" (amber), and the top arrow's "?" becomes "−74.5". On "minus seventy-four point six" a grey tag "table: −74.6 kJ mol⁻¹"; on "rounding" a small tick between them.

### 7. the enthalpy ladder
> Picture it as a ladder of enthalpy. The elements sit at the top. Methane sits seventy-four point five kilojoules lower, because forming it released that much. Carbon dioxide and water sit far below both. So burning methane releases less than burning its elements, because methane has already gone part of the way **down**.

Visual: the three cards slide onto a vertical slate axis "enthalpy, H" (no numbers on the axis): elements at a level marked "0"; on "Methane sits" methane at "−74.5"; on "far below both" products at "−965.1". Bracket arrows: amber "−74.5", orange "−890.6" from methane, orange "−965.1" from the elements. On "down" the amber step and the methane bracket highlight together and add up visibly to the long bracket.

### 8. the same arrow, two names
> Notice the bottom arrows. Burning carbon makes carbon dioxide from its elements, so carbon's heat of combustion is also the formation enthalpy of carbon dioxide. Hydrogen's is the formation enthalpy of liquid water. So the cycle can be read the other way. Know methane's formation enthalpy, and you can find its heat of combustion, using last time's formula. When formation data are given, use that formula. When combustion data are given, draw the **cycle**.

Visual: back to the triangle. On "Burning carbon makes carbon dioxide" the carbon label on the left arrow gains a second line in teal: "= ΔfH°(CO₂)"; on "hydrogen's is the formation enthalpy of liquid water" "= ΔfH°(H₂O, l)". On "read the other way" the right arrow becomes the unknown (amber "?") and the top arrow shows "−74.6"; a row "ΔHc(CH₄) = [ΔfH°(CO₂) + 2ΔfH°(H₂O)] − ΔfH°(CH₄) = −965.1 − (−74.6) = −890.5 kJ mol⁻¹" writes, with m4-v08's formula strip ghosting above it (tag "same calculation"). On "when formation data are given" three method chips stack at the right: "formation data → products minus reactants (v08)"; on "combustion data are given" "combustion data or equations → draw the cycle"; a grey third chip "only bond energies → an estimate (v06)".

### 9. keep the states
> Every arrow must finish in exactly the same states. Use hydrogen's value for making steam, minus two hundred and forty-one point eight, with methane's value for liquid water, and the cycle gives plus thirteen point five, the wrong sign. Steam releases about forty-four kilojoules per mole as it condenses, so mixed states break the cycle. Check that the state symbols **match**.

Visual: on "making steam" the left route's bottom card changes to "CO₂(g) + 2H₂O(g)" (the "(g)" amber) while the right route's stays "(l)"; the single floor splits into two floors with a gap. On "plus thirteen point five" a crossed row "−393.5 + 2(−241.8) + 890.6 = +13.5" with the red stamp "states don't match". On "about forty-four kilojoules" the gap is labelled "2 × 44 kJ" with a small coded steam-to-drops icon. On "match" the floors rejoin and every state symbol in the cycle is ringed teal.

### 10. per mole or per gram
> Heats of combustion also let us compare fuels, in two ways. Per mole, octane in petrol releases about five thousand four hundred and seventy kilojoules, more than six times methane's. But a mole of octane weighs about a hundred and fourteen grams, and a mole of methane only about sixteen. Divide each by its molar mass: methane gives fifty-five point five kilojoules per gram, and octane forty-seven point nine. Per gram, methane **wins**.

Visual: board clears to the fuel bars. Two slate bars, "CH₄: 890.6 kJ mol⁻¹" and on "five thousand four hundred and seventy kilojoules" "C₈H₁₈ (octane): 5470 kJ mol⁻¹" (tag "× 6.1"). On "a hundred and fourteen grams" mass tags "M = 114.2 g mol⁻¹" and on "about sixteen" "M = 16.04 g mol⁻¹". On "divide each by its molar mass" gloss "energy per gram = |ΔHc| ÷ M (kJ g⁻¹)". On "fifty-five point five" the bars re-scale and re-sort into teal per-gram bars: "CH₄: 890.6 ÷ 16.04 = 55.5 kJ g⁻¹"; on "forty-seven point nine" "octane: 5470 ÷ 114.2 = 47.9 kJ g⁻¹". On "wins" the methane bar is ringed.

### 11. which comparison matters
> So which comparison matters? Per mole compares the molecules, one against one. Per gram matters when you have to carry the fuel, in a plane or a hiker's pack. Hydrogen is the extreme: about a hundred and forty-two kilojoules per gram, because its molecules are so **light**.

Visual: two caption chips over the two bar sets: on "Per mole compares the molecules" "per mole: one molecule against one"; on "Per gram matters" "per gram: when the fuel's mass matters", with `m7-camping-gas-burner-v1.png` small beside it. On "Hydrogen is the extreme" a third bar joins each chart: per mole "H₂: 285.8 kJ mol⁻¹" (the shortest); on "a hundred and forty-two" the per-gram bar "H₂: 285.8 ÷ 2.016 = 141.8 kJ g⁻¹" shoots past the others (the axis extends). On "light" a grey tag "but very light, so bulky to store".

### 12. the same floor
> Here's the idea to remember. Burn it all to the same floor. Every combustion route ends at carbon dioxide and liquid water, so the floor connects any fuel to its **elements**.

Visual: the memory line writes large in the explainer's handwriting style: "Burn it all to the same floor." Beneath, the ladder from scene 7 returns small; on "the floor" the products level thickens into a floor line; on "elements" the elements level and the methane level each drop an orange arrow onto it.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Use these heats of combustion to calculate the standard enthalpy of formation of liquid ethanol. Carbon, minus three hundred and ninety-three point five. Hydrogen, minus two hundred and eighty-five point eight. Ethanol, minus one thousand three hundred and sixty-seven kilojoules per mole. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Use the following data to calculate the standard enthalpy of formation of ethanol, C₂H₅OH(l). Show an energy cycle or relevant equations. C(s) + O₂(g) → CO₂(g)  ΔH = −393.5 kJ mol⁻¹; H₂(g) + ½O₂(g) → H₂O(l)  ΔH = −285.8 kJ mol⁻¹; C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l)  ΔH = −1367 kJ mol⁻¹ (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> Ethanol has two carbons and six hydrogens, so route one burns two carbons and three hydrogen molecules: minus one thousand six hundred and forty-four point four. Add one thousand three hundred and sixty-seven, and the formation enthalpy is about minus two hundred and seventy-seven kilojoules per mole. Subtracting the other way round gives plus two hundred and seventy-seven, the wrong **sign**.

Visual: card shrinks to the top. A small cycle: "2C(s) + 3H₂(g) + 3½O₂(g)" top left, "C₂H₅OH(l) + 3O₂(g)" top right, "2CO₂(g) + 3H₂O(l)" bottom. Rows: "route 1 = 2(−393.5) + 3(−285.8) = −1644.4 kJ"; "ΔfH° = −1644.4 + 1367 = −277.4 ≈ −277 kJ mol⁻¹" (amber), with a grey tag "last video: −277.7 (rounding)" and the ethanol thumbnail from scene 1 ticking. On "Subtracting the other way round" a chip "−1367 − (−1644.4) = +277 kJ mol⁻¹" fades in and is crossed. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Butane, the fuel in a camping stove, has a heat of combustion of minus two thousand eight hundred and seventy-eight kilojoules per mole, and a molar mass of fifty-eight point one two. Hydrogen's is minus two hundred and eighty-five point eight, with a molar mass of two point zero one six. Which fuel releases more energy per mole, and which per gram? Pause here to answer.

Visual: `QuestionCard`: "Butane (C₄H₁₀, M = 58.12 g mol⁻¹) has ΔHc = −2878 kJ mol⁻¹. Hydrogen (H₂, M = 2.016 g mol⁻¹) has ΔHc = −285.8 kJ mol⁻¹. (a) Which fuel releases more energy per mole? (1 mark) (b) Calculate the energy released per gram for each fuel, and identify which releases more per gram. (2 marks)" `m7-camping-gas-burner-v1.png` small beside the card. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Per mole, butane releases about ten times as much. Per gram, butane gives forty-nine point five kilojoules, and hydrogen gives a hundred and forty-one point eight, so hydrogen wins by almost three times. A bigger number per mole doesn't mean more energy per **gram**.

Visual: card shrinks. Rows: "(a) butane: 2878 kJ mol⁻¹ > 285.8 kJ mol⁻¹"; "(b) butane: 2878 ÷ 58.12 = 49.5 kJ g⁻¹; hydrogen: 285.8 ÷ 2.016 = 141.8 kJ g⁻¹, so hydrogen" (teal). The fuel bars flip as in scene 10. On "doesn't mean more energy per gram" a chip "butane wins both: 2878 > 285.8" fades in and is crossed. Hold about 1 second.

### 17. conclusion and handoff
> So combustion data complete an energy cycle because every route burns down to the same floor, and routes with the same start and finish give the same total. One more fuel: glucose. Burned in oxygen, it ends as carbon dioxide and liquid water, releasing two thousand eight hundred and three kilojoules per mole. Your cells run the same overall reaction, and plants run it backwards. How are those two **related**?

Visual: the memory line returns small at the top. On "the same total" the methane cycle pulses once and shrinks away. On "glucose" the cycle board redraws for glucose: the top card "C₆H₁₂O₆(s) + 6O₂(g)"; on "carbon dioxide and liquid water" the bottom card "6CO₂(g) + 6H₂O(l)"; on "two thousand eight hundred and three kilojoules" the orange down arrow "burning: ΔH = −2803 kJ mol⁻¹". On "Your cells" `b6a-mitochondrion-v1.png` small beside it and the label gains "(or respiration)"; on "plants run it backwards" `g1-leaf-v1.png` beside a dashed up arrow "photosynthesis: ?". On "related" the amber chip "Same two levels. How are the two arrows related?" and the chip "Next: How are photosynthesis and respiration related in an enthalpy cycle?" write. Hold about 2 seconds. This is the final frame (m4-v10 opens on it).

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Heat of combustion, ΔHc: the enthalpy change when 1 mol burns completely in oxygen (always negative).
2. Combustion cycle: elements (top), fuel (top), CO₂(g) + H₂O(l) (bottom). Both routes give the same total, so ΔfH°(fuel) = [sum of ΔHc of the elements, scaled] − ΔHc(fuel). Methane: −965.1 + 890.6 = −74.5 kJ mol⁻¹.
3. ΔHc(C) = ΔfH°(CO₂); ΔHc(H₂) = ΔfH°(H₂O, l). Every arrow must end in the same states (steam ≠ liquid water).
4. Energy per gram = |ΔHc| ÷ M. Per mole compares molecules; per gram compares masses of fuel. Rankings can flip (methane 55.5, octane 47.9 kJ g⁻¹).

Memory aid (large, on the notes screen): *Burn it all to the same floor.*

At the end the notes cross-fade back to scene 17's final frame.

## Teaching checks

- **Does it explain causes?** Why the formation step is not measured (1); why the routes give equal totals (2, 6); why heats of combustion are negative (3); why oxygen changes nothing (4); why hydrogen is doubled (5); why methane releases less than its elements (7); why combustion and formation values coincide (8); why mixed states fail (9); why rankings flip per gram (10, 11).
- **Misconceptions addressed:** hydrogen not scaled (5); subtraction the wrong way (6; crossed in A1); a cycle needs exactly two equations (implicitly, three data rows in 3 to 6); mixed states (9); per mole equals per gram (10; crossed in A2).
- **One idea at a time:** prediction (1), cycle meaning (2), data (3), drawing (4), route 1 (5), solving (6), ladder (7), reading both ways and method choice (8), states (9), per gram (10, 11).
- **Video makes it easier:** two bars that become two routes (1, 2); values flying from the data card onto arrows (5, 6); corners sliding onto an enthalpy ladder (7); the floor splitting when one state changes (9); bars that re-sort when the unit changes (10, 11).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all data on the card, 10 s each, nothing answer-bearing. Feedback about 30 s and 21 s.
- **Avoided double teaching:** Hess's law, reversing and scaling (m4-v07); the formation formula (m4-v08, used once in 8); molar enthalpy of combustion from a burner (m4-v03); molar mass (Module 2).
- **Syllabus coverage:** `C4-IQ2-03` "apply Hess's Law to simple energy cycles and solve problems to quantify enthalpy changes", heat of combustion example (3 to 9, A1, A2). Photosynthesis and respiration examples are v10.
- **Out of scope by design:** fuel policy, per-litre calculations, photosynthesis and respiration, bond-energy calculations.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: energy cycle or equations showing elements → products directly and via ethanol (1 mark); route through the elements: 2(−393.5) + 3(−285.8) = −1644.4 kJ (1 mark); ΔfH°(C₂H₅OH) = −1644.4 − (−1367) = −277.4 ≈ −277 kJ mol⁻¹ (1 mark). Classic mistake (crossed): −1367 − (−1644.4) = +277 kJ mol⁻¹.

**Attempt 2 (scene 15; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: (a) butane (2878 kJ mol⁻¹ compared with 285.8 kJ mol⁻¹) (1 mark). (b) butane 2878 ÷ 58.12 = 49.5 kJ g⁻¹; hydrogen 285.8 ÷ 2.016 = 141.8 kJ g⁻¹ (1 mark); hydrogen releases more per gram (1 mark). Classic mistake (crossed): "butane releases more per gram because its ΔHc is larger".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Combustion data | C −393.5; H₂ (to H₂O(l)) −285.8; CH₄ −890.6 kJ mol⁻¹ | 1, 3, 5, 6 |
| Prediction | burn C + 2H₂: 965 kJ released; burn CH₄: about 891 kJ released | 1, 2 |
| Route 1 | −393.5 + 2(−285.8) = −965.1 kJ; unscaled slip −679.3 | 5 |
| Unknown | −965.1 + 890.6 = −74.5 kJ mol⁻¹; table −74.6 | 6, 7 |
| Reverse reading | −965.1 − (−74.6) = −890.5 kJ mol⁻¹ | 8 |
| Steam trap | −393.5 + 2(−241.8) + 890.6 = +13.5; 285.8 − 241.8 = 44.0 kJ per mol of water | 9 |
| Fuels per mole | CH₄ 890.6; octane 5470 (× 6.1); H₂ 285.8 kJ mol⁻¹ | 10, 11 |
| Molar masses | CH₄ 16.04; C₈H₁₈ 114.2; H₂ 2.016; C₄H₁₀ 58.12 g mol⁻¹ | 10, 11, 15 |
| Per gram | CH₄ 55.5; octane 47.9; H₂ 141.8 kJ g⁻¹ | 10, 11, 16 |
| A1 | 2(−393.5) + 3(−285.8) = −1644.4; + 1367 = −277.4 ≈ −277 kJ mol⁻¹; slip +277; v08's table value −277.7 | 1, 13, 14 |
| A2 | butane 2878 ÷ 58.12 = 49.5; H₂ 141.8 kJ g⁻¹; per mole ratio about 10 | 15, 16 |
| Handoff | glucose ΔHc −2803 kJ mol⁻¹ (site lesson 9) | 17, final frame |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 November); Codex to re-check.

- −393.5 + 2(−285.8) = −965.1; −393.5 − 285.8 = −679.3; −965.1 + 890.6 = −74.5; −965.1 + 74.6 = −890.5.
- −393.51 + 2(−285.83) + 74.6 = −890.57 (consistency of the methane value with OpenStax).
- −393.5 + 2(−241.8) + 890.6 = +13.5; −285.8 − (−241.8) = −44.0. Ethanol alternative (open decision 1): 2(−393.5) + 3(−241.8) + 1367 = −145.4.
- M: CH₄ 12.01 + 4(1.008) = 16.042; C₈H₁₈ 8(12.01) + 18(1.008) = 114.224; H₂ 2.016; C₄H₁₀ 4(12.01) + 10(1.008) = 58.12.
- 890.6 ÷ 16.042 = 55.52; 5470 ÷ 114.224 = 47.89 (5471 gives 47.90); 285.8 ÷ 2.016 = 141.77; 2878 ÷ 58.12 = 49.52; 5470 ÷ 890.6 = 6.14; 2878 ÷ 285.8 = 10.07; 141.77 ÷ 49.52 = 2.86.
- 2(−393.5) + 3(−285.8) = −1644.4; −1644.4 + 1367 = −277.4; −393.5 − 285.8 + 1367 = +687.7 (not shown).
- Site checks: bond energies 4(413) + 2(498) = 2648, 2(743) + 4(463) = 3338, difference −690; −890.3 − (−690) = −200.3; 1367 ÷ 2 = 683.5, 5471 ÷ 8 = 683.9; 29.67 × 0.789 = 23.4 MJ L⁻¹.

## Memory aid check

- **"Burn it all to the same floor."** Written for this lesson from the site's combustion triangle. Meaning, as said in scene 12: every complete combustion of a carbon and hydrogen compound ends at CO₂(g) and H₂O(l), so the products level is a shared floor that links any fuel to its elements. Assumptions checked: complete combustion (stated in the definition, scene 3); liquid water, not steam (scene 9 shows what breaks when states differ); compounds containing other elements (nitrogen, sulfur) need their own products, which is beyond this video's examples and stays in this note. It helps a new case: A1 (ethanol) and the glucose handoff use the same floor.
- **Considered, not used:** "P − R for formation, R − P for bonds" (site; belongs to v08 and v06).

## Narration length estimate

Revision 1 count (6 November; build parser rules): **6,367 characters**, 18 scenes (per scene: 546, 382, 445, 408, 304, 415, 318, 455, 374, 436, 270, 171, 322, 392, 383, 263, 408, 75). At 13.3 characters per second the speech is about 479 s; add about 10 s of settling (the routes in 2, the cycle in 4, the ladder in 7, the bars in 10), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold: **about 570 s**.

## Scene list and build ids

Lesson key `c-y11-m4-v09` (route chem-y11-m4-v09; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v09`.

In order (18 scene headings, all `### N.`): hook-prediction, energy-cycle, heats-of-combustion, draw-cycle, route-one, solve-unknown, enthalpy-ladder, same-arrow, keep-states, per-mole-per-gram, which-comparison, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m4-v08's final frame into scene 1 by camera continue (the methane row stays); 1 to 2 camera continue (bars become routes); 2 to 3 camera continue (cycle shrinks left); 3 to 4 camera continue; 4 to 5 camera continue; 5 to 6 camera continue; 6 to 7 morph (corners slide onto the ladder); 7 to 8 morph back; 8 to 9 camera continue; 9 to 10 clear change to the fuel bars; 10 to 11 camera continue; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v09-learning-review.md`, `checks/c-y11-m4-v09-science-check.md`.

## Assets

Have (inspected 6 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/p01-bunsen-lit-v2.png` (2000 × 2000; lit Bunsen burner, blue flame): scene 1.
- `public/assets/chemistry/m7-camping-gas-burner-v1.png` (2000 × 2000; blue butane canister stove, lit): scenes 11, 15.
- `public/assets/biology/b6a-mitochondrion-v1.png` (1970 × 900; cutaway mitochondrion): scene 17, final frame.
- `public/assets/chemistry/g1-leaf-v1.png` (2200 × 1400; green leaf): scene 17, final frame.
- **Inspected, not used:** `sun.png` (clip-art style, out of keeping with the painted set); `g1-sugar-bowl-v1.png` (table sugar is sucrose, not glucose); `m7-ethanol-fuel-bottle-v1.png` (A1 needs only the card).

Need: no new plates.

Coded: cycle board, corner cards, arrows, data card with flame icons, ladder, floor split, fuel bar charts, calculation rows, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module4/lesson10.sa.html` (the three named sections; the fuel table; the triangle identity) and the site notes' quotations.
3. Confirm OpenStax Chemistry 2e Appendix G values (CO₂ −393.51, H₂O(l) −285.83, H₂O(g) −241.82, CH₄ −74.6, C₂H₅OH(l) −277.6 kJ mol⁻¹) and the NIST combustion values for methane, octane (liquid) and butane (gas) (author note b).
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quote matches `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame still matches m4-v08's final frame (reconciled 6 November), and send the final frame to the m4-v10 designer.

## YouTube metadata (draft)

Title: Heat of Combustion and Energy Cycles: Finding an Enthalpy You Can't Measure | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Carbon and hydrogen won't react cleanly to make methane, so how do data tables know its enthalpy of formation? Draw a combustion energy cycle, use measured heats of combustion and Hess's law to find the missing value, see why every route must end in the same states, and compare fuels per mole and per gram (methane against octane, and hydrogen). Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"apply Hess’s Law to simple energy cycles and solve problems to quantify enthalpy changes within reactions, including but not limited to: heat of combustion"

Previous: How do standard formation enthalpies calculate a reaction enthalpy? Next: How are photosynthesis and respiration related in an enthalpy cycle?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Opening frame (root).** Reconciled to `chem-y11-m4-v08.md`'s final frame as found on 6 November (ethanol, "how was this measured?"). Scene 1 answers v08's question with methane first and returns ethanol as attempt 1. If root prefers ethanol as the worked example, swap the two cases (all ethanol numbers are already in "Numbers used"; the steam trap for ethanol gives −145.4 instead of the expected −277.4, a wrong value but not a wrong sign, which is less striking).
- **2. Data source (root, Codex).** OpenStax Appendix G for formation values; NIST for octane and butane combustion. The site's lesson 10 uses −890.3 (from ΔfH°(CH₄) = −74.8) and −5471; this video's −890.6 and −5470 differ by less than 0.1%. Root to confirm the cited-source policy for Module 4 (v11 to v14 use the same OpenStax table).
- **3. Methane result precision (science check).** −74.5 kJ mol⁻¹ from rounded inputs against the table's −74.6; the narration says "within rounding". If root prefers exact agreement, use ΔHc(CH₄) = −890.7 (NIST) and accept −74.4, or keep as is.
- **4. Length (learning review).** At about 570 s it sits at the cap. Reserve cut: scene 11's hydrogen sentence (about 140 characters); A2 still teaches the flip.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the prediction answerable in 3 s from the two bars; does scene 8's "read the other way" overload after the main calculation), then the science check and Codex error check.
- Checker output (6 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
