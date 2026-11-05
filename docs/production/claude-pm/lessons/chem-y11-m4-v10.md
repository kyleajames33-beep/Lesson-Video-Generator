# Year 11 Chemistry M4 V10: Photosynthesis and respiration. How are photosynthesis and respiration related in an enthalpy cycle? (design)

Status: Revision 1 (6 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,555 characters, 15 scenes, about 509 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: tenth Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 79, between `chem-y11-m4-v09` (combustion data in energy cycles) and `chem-y11-m4-v11` (entropy); an application of Hess's law to the glucose cycle, with one calculation. Templates: `chem-y11-m4-v09.md` (same designer, cycle board and colour key), `chem-y11-m4-v02.md` (series layout), `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates). No starter pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v10` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Balance the overall reactions, reverse the thermochemical direction and distinguish enthalpy from biological efficiency or Gibbs coupling."; next handoff: "How does entropy describe spreading and possible particle arrangements?"). Site lesson read in full (6 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson09.sa.html` (SHA256 `8610bc8e709b89bb6b34b7883872e404c3ff2a9ca914e2e56de974ddda14c57e`, recomputed, matches the route), sections `l09-constructing-the-hess-s-law-energy-cycle-title`, `l09-atp-coupling-hess-s-law-in-biology-title`, `l09-worked-examples-title`. Used: the two overall equations with states and ΔH ≈ ±2803 kJ mol⁻¹; "the actual biochemical pathways are not literal step-by-step reverses, only the overall net equations are"; the cycle-drawing rules (CO₂ + H₂O at the lower level, glucose + O₂ at the upper level, photosynthesis arrow up, respiration arrow down, the loop sums to zero); the common diagram error (photosynthesis arrow drawn downward); the formation-data check (Drill 3); the trap "Photosynthesis releases energy, plants produce glucose"; the trap "Plants don't need energy for photosynthesis because sunlight is free"; worked example 1's three parts (reverse, close the loop, meaning); the "Beyond the syllabus" message that coupling is decided by Gibbs energy, not ΔH; the ATP yield estimate (about a third of the available energy captured, Drill 5). Not used: the ATP coupling arithmetic (−30.5, +45, −61 kJ mol⁻¹; not a syllabus requirement, and the site mixes ΔH with ΔG there, site note 1); "exactly 2803 kJ of solar energy" (site note 2); the carbon-cycle key term. Site corrections file checked: no logged item touches Module 4.

Owner rules applied: as `chem-y11-m4-v09.md` (one learner question; no people, hands or faces; organisms and organelles as painted plates; cycles, levels, light rays and calculation rows coded in the data-graph style; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Drivers of Reactions; local ledger ID), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ2-03`: "apply Hess’s Law to simple energy cycles and solve problems to quantify enthalpy changes within reactions, including but not limited to:"
  - "enthalpy changes involved in photosynthesis"
  - "enthalpy changes involved in respiration (ACSCH037)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 44)

**Boundary:** opens on m4-v09's final frame (same designer). Teaches: balancing the overall respiration equation with states; respiration has the same ΔH as burning glucose, because ΔH depends only on the start and finish (m4-v07), with energy per gram as a short callback to v09; photosynthesis as the overall reverse, so ΔH = +2803 kJ mol⁻¹; the two-level energy cycle, its arrow directions and the zero sum; a check from formation enthalpies (m4-v08); energy stored is not light absorbed (photosynthetic efficiency of a few per cent); a cell captures only about a third of respiration's energy in ATP, and whether a cell reaction can go is decided by Gibbs free energy (named only, taught in v13); a scaled calculation (energy stored in 10.0 g of glucose). Not taught: biochemical pathways, ATP coupling arithmetic, Gibbs free energy, entropy (v11).

## Decisions

- **Learner question (route wording kept).** "How are photosynthesis and respiration related in an enthalpy cycle?" The answer, in order: their overall equations are exact reverses (2, 4); ΔH depends only on start and finish, so respiration equals burning and photosynthesis is its negative (3, 4); the cycle has two levels and a zero sum (5, 6); ΔH is stored energy, not the light used or the energy a cell captures (7, 8).
- **Opening frame (equals `chem-y11-m4-v09.md`'s final frame, same designer).** The glucose cycle board: top card "C₆H₁₂O₆(s) + 6O₂(g)", bottom card "6CO₂(g) + 6H₂O(l)", orange down arrow "burning (or respiration): ΔH = −2803 kJ mol⁻¹", dashed up arrow "photosynthesis: ?", `b6a-mitochondrion-v1.png` and `g1-leaf-v1.png` small with grey labels, the amber chip "Same two levels. How are the two arrows related?", the "Next" chip, which fades.
- **Prediction (3 s, scene 1).** "Photosynthesis: −2803, +2803, or a different number?" Answer: +2803 kJ mol⁻¹ (scene 4). The site's own Predict-then-reveal, kept.
- **Balancing (scene 2; route stop).** Carbon, then hydrogen, then oxygen (6 from glucose plus 12 from 6O₂ = 18 = 12 in 6CO₂ + 6 in 6H₂O). States: glucose (s), O₂ (g), CO₂ (g), H₂O (l), stated as the standard-state convention for the overall equation (body water is liquid). "Overall" glossed as "the net change, start to finish, not the steps".
- **Burning against respiration (scene 3).** The flame does it in one hot step; a cell in dozens of small steps; the ΔH is the same because the start and finish are the same (m4-v07, "state function" not named). Energy per gram 2803 ÷ 180.16 = 15.6 kJ g⁻¹, much less than methane's 55.5 because glucose already contains oxygen (partly oxidised); one sentence, as a v09 callback.
- **Photosynthesis (scene 4).** Reverse the overall equation, reverse the sign (m4-v07): 6CO₂(g) + 6H₂O(l) → C₆H₁₂O₆(s) + 6O₂(g), ΔH = +2803 kJ mol⁻¹; endothermic, energy from absorbed light. The site's trap "photosynthesis releases energy because glucose is made" is crossed here.
- **The cycle (scene 5; site rules).** Two levels on a slate enthalpy axis; glucose + O₂ high, CO₂ + H₂O low; blue up arrow +2803 (photosynthesis), orange down arrow −2803 (respiration); the loop sums to zero. Crossed: the photosynthesis arrow drawn downward (site's common diagram error).
- **Formation check (scene 6; site Drill 3).** ΣΔfH°(products) = 6(−393.5) + 6(−285.8) = −4075.8; ΔfH°(glucose, s) = −1273.3 kJ mol⁻¹ (CRC Handbook; OpenStax Appendix G does not list glucose; the site uses −1272.8, which gives −2803.0 exactly); ΔH = −4075.8 − (−1273.3) = −2802.5 ≈ −2803 kJ mol⁻¹. It shows a second route to the same number.
- **Enthalpy against biological efficiency (scenes 7, 8; route stop).** Photosynthesis: the 2803 kJ is the enthalpy the products store, not the light absorbed; even in ideal conditions only about 5% of the sunlight reaching a leaf ends up stored (Zhu, Long and Ort 2008: theoretical maxima about 4.6% for C3 and 6% for C4 plants); most absorbed light is released as heat. Respiration: a cell captures roughly a third of glucose's available energy in ATP (site Drill 5: about 32 ATP); the rest warms the body. Gibbs: "whether a reaction in a cell can go is decided by a different quantity, Gibbs free energy, at the end of this module", one sentence, no numbers.
- **Memory aid:** "Up is plus, down is minus, and it's the same hill." (see "Memory aid check"), scene 9.
- **Attempts (original wording, HSC style).** A1: write the thermochemical equation for photosynthesis from respiration's, then the energy stored when a plant makes 10.0 g of glucose: n = 0.0555 mol; 156 kJ absorbed. Crossed: "2803 kJ (the per-mole value, not scaled)". A2: evaluate "a plant absorbs exactly 2803 kJ of light energy to make one mole of glucose": incorrect (at least 2803 kJ must be stored, but far more light is absorbed; most becomes heat). Crossed: "Correct, Hess's law says exactly 2803 kJ".
- **Mistake scene:** none separate. Photosynthesis releases energy (4); arrow drawn down (5); per-mole value used for a mass (A1); ΔH taken as light absorbed (7; crossed in A2); a cell captures all 2803 kJ (8).
- **Handoff (route next: `chem-y11-m4-v11`, "How does entropy describe spreading and possible particle arrangements?").** Scene 14: photosynthesis is uphill and stops in the dark, but some endothermic changes happen by themselves (ice melting on a warm bench, the cold pack from m4-v04). Final frame: see "Opening frame and final frame".
- **Site notes (read 6 November; for root to log if accepted):**
  1. Lesson 9, ATP card and its summary, formula reference and Revisit: "The combined reaction is exothermic overall thermodynamically favourable from an enthalpy perspective ... the cell achieves a net negative ΔH"; "Organisms couple endothermic reactions ... to the highly exothermic hydrolysis of ATP (ΔH ≈ −30 kJ mol⁻¹) ... The summed ΔH of coupled reactions determines spontaneity"; "ATP hydrolysis ... ΔH ≈ −30.5 kJ mol⁻¹"; Drill 4 answer "ΔH = +42 + (−61) ... Enthalpy-favourable". −30.5 kJ mol⁻¹ is ΔG°′, not ΔH, and spontaneity is decided by ΔG, as the same card's "Beyond the syllabus" box says. Suggest replacing every ΔH in the ATP material with ΔG°′ and "favourable" (not "exothermic"), and "endothermic" biological processes (muscle contraction, protein synthesis, ion pumping) with "unfavourable on their own (positive ΔG)".
  2. Lesson 9 worked example 1 (c) and trap 3: "Plants absorb exactly 2803 kJ mol⁻¹ of solar energy to produce one mole of glucose ... the amount of solar energy captured equals the amount of chemical energy stored" and "Photosynthesis requires exactly 2803 kJ mol⁻¹ of energy input". The products store 2803 kJ more enthalpy, but plants absorb much more light than that (maximum conversion efficiency about 4.6% to 6%; Zhu, Long and Ort 2008). Suggest "at least 2803 kJ must end up stored for each mole of glucose; the light absorbed is much larger, and most is released as heat".
  3. Lesson 9 misconception fix: "The magnitudes are necessarily equal because the same bonds are broken and formed in opposite directions." The cause is that ΔH depends only on the start and end states (as the lesson says elsewhere); the pathways use different bonds and steps. Suggest leading with the state-function reason.
  - Checked and correct: the two overall equations and states; ±2803 kJ mol⁻¹; the cycle-drawing rules; Drill 3 (−4075.8, −2803.0 with −1272.8); Drill 5 (976 kJ, about 34%, with its stated ΔG basis); Q8 model answer.
- **Cause chain taught, in order:** (1) atoms are conserved, so the overall equation balances to 6 O₂, 6 CO₂ and 6 H₂O (2); (2) ΔH depends only on start and finish, so a cell's many steps release the same total as a flame (3); (3) glucose already contains oxygen, so it releases less per gram than methane (3); (4) reversing a reaction reverses its ΔH, so photosynthesis is +2803 (4); (5) products of photosynthesis sit higher, so its arrow points up and the loop sums to zero (5); (6) any route between the same states gives the same ΔH, so formation data agree (6); (7) leaves absorb far more light than they store, because most becomes heat (7); (8) cells capture only part of the energy in ATP; the rest is released as heat (8).
- **Entry knowledge:** m4-v01 (endothermic, exothermic, ΔH sign, energy levels), m4-v07 (reverse and scale; same start and finish), m4-v08 (formation formula), m4-v09 (the glucose cycle opening; per gram); m2 molar mass and moles; Stage 5 photosynthesis and respiration word equations.
- **Learner-visible vocabulary (plain meaning at first use):** overall equation (2, "the net change, start to finish, not the steps"); photosynthesis and respiration (1, in plain words); ATP (8, "the molecule cells use to carry energy to where it's needed").
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **cycle board** (from v09; arrows draw on cue; values written on arrows); **balancing tiles** (scene 2: atom counters under each formula that turn teal when matched); **two-path view** (scene 3: one tall orange flame arrow beside a coded staircase of small orange steps, both from the same top level to the same bottom level); **level diagram** (scene 5: the cards slide onto a slate enthalpy axis); **light budget bar** (scene 7: a coded bar for light absorbed with a small teal segment "stored" and a long grey segment "released as heat", tagged "about 5% at best"); **energy split bar** (scene 8: "about a third: ATP" and "the rest: heat"); `g1-leaf-v1.png`, `b6a-chloroplast-v1.png`, `b6a-mitochondrion-v1.png`; final frame `c9-ice-cube-v1.png` and `m5x-cold-pack-v1.png`; `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v01 and v09):** energy out (respiration, burning) warm orange, arrows down; energy in (photosynthesis) cool blue, arrows up; light rays pale yellow; enthalpy levels ink on a slate axis; stored energy teal; heat lost grey; crossed items red strike.
- **Board layout (constant):** heading top left; the cycle at the left; the leaf and mitochondrion plates and the working at the right.

Author notes (not learner copy):
(a) Data: respiration and combustion of glucose ΔH ≈ −2803 kJ mol⁻¹ (site; NIST WebBook ΔcH° of solid α-D-glucose is about −2803 kJ mol⁻¹, Codex to confirm); ΔfH°(C₆H₁₂O₆, s) −1273.3 kJ mol⁻¹ (CRC Handbook); CO₂(g) −393.5 and H₂O(l) −285.8 (OpenStax Appendix G, rounded). M(glucose) = 6(12.01) + 12(1.008) + 6(16.00) = 180.156 g mol⁻¹.
(b) Strictly, the minimum energy that must be supplied to drive photosynthesis is its Gibbs energy change (about +2880 kJ mol⁻¹), which is larger than ΔH; "at least 2803 kJ" in learner copy is therefore true. Not said aloud (Gibbs is v13).
(c) Photosynthetic efficiency: Zhu X-G, Long SP, Ort DR (2008) Current Opinion in Biotechnology 19: 153 to 159: maximum conversion of solar energy to biomass about 4.6% (C3) and 6.0% (C4) at 30 °C and current CO₂; field crops typically reach about 1% to 2% over a season. Learner copy says "only about five per cent, even in ideal conditions".
(d) ATP: about 30 to 32 ATP per glucose; 32 × 30.5 = 976 kJ of Gibbs energy against about 2880 available, about 34% (site Drill 5, Gibbs basis). Learner copy says "roughly a third of the energy", without saying ΔH or ΔG.
(e) Partly oxidised: glucose's carbon atoms are already bonded to oxygen, so less energy is released per carbon on complete combustion; 2803 ÷ 6 = 467 kJ per carbon against methane's 890.6 per carbon.
(f) Pronunciations: "C six H twelve O six"; "two thousand eight hundred and three kilojoules per mole".

Main question: *How are photosynthesis and respiration related in an enthalpy cycle?*
Entry knowledge: m4-v01, m4-v07, m4-v08, m4-v09; molar mass and moles.
Stops after: balanced overall equations, reverse direction and sign, the two-level cycle with a zero sum, the formation check, enthalpy distinguished from photosynthetic and respiratory efficiency, Gibbs named only. No entropy.
Handoff: chem-y11-m4-v11, entropy.

## Opening frame and final frame

- **Opening frame:** m4-v09's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v11` opens on it):** left, small: the finished glucose cycle (blue up arrow "photosynthesis +2803", orange down arrow "respiration −2803") with a pale-yellow light chip on the up arrow "needs light". Right, large: `c9-ice-cube-v1.png` on a coded bench line with a coded puddle beginning around it, a readout "room 25 °C", a blue inward arrow tagged "ΔH = +6.01 kJ mol⁻¹ (absorbs heat)"; below it `m5x-cold-pack-v1.png` with a coded readout "25.0 → 12 °C" and a blue tag "endothermic". The amber chip "Endothermic, yet it happens by itself. What else decides the direction?". The chip "Next: How does entropy describe spreading and possible particle arrangements?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's glucose, burning down to the same floor as every other fuel. Your cells do the same overall reaction, called respiration, and release two thousand eight hundred and three kilojoules for every mole of glucose. Plants do the opposite, called photosynthesis. They build glucose and oxygen from carbon dioxide and water. So for photosynthesis, is delta H minus two thousand eight hundred and three, plus two thousand eight hundred and three, or something **else**?

Visual: opens on m4-v09's final frame; the "Next" chip fades. Heading writes: "Photosynthesis and respiration: one cycle". On "Your cells" the mitochondrion plate enlarges slightly, with a label "respiration (in mitochondria)". On "Plants do the opposite" the leaf plate enlarges, label "photosynthesis (in chloroplasts)", and `b6a-chloroplast-v1.png` fades in small beside it. On "from carbon dioxide and water" the dashed up arrow pulses. Chips "−2803", "+2803", "something else". On "else" the 3 s `Countdown` ring runs.

### 2. balancing the overall equation
> Start by writing respiration properly. Glucose is C six H twelve O six, and it reacts with oxygen. Six carbons make six carbon dioxides. Twelve hydrogens make six waters. Now count oxygen on the right: twelve in the carbon dioxide, and six in the water, eighteen in all. Glucose brings six, so oxygen gas must bring twelve, which is six O two. This is the overall equation, the net change from start to finish, not the many steps in **between**.

Visual: the board clears to an equation strip with atom counters. "C₆H₁₂O₆(s) + _O₂(g) → _CO₂(g) + _H₂O(l)". On "Six carbons make six carbon dioxides" "6" writes before CO₂, carbon counters "6 | 6" turn teal. On "Twelve hydrogens make six waters" "6" before H₂O, hydrogen "12 | 12" teal. On "twelve in the carbon dioxide, and six in the water" the right-side oxygen counter builds "12 + 6 = 18". On "Glucose brings six" the left counter "6 + ?"; on "six O two" "6" before O₂, oxygen "18 | 18" teal. On "overall equation" gloss "overall equation: the net change, start to finish, not the steps"; on "between" a faint ghost staircase of many small arrows appears under the equation arrow and fades.

### 3. burning and respiration
> In a flame, glucose burns in one hot rush. In a cell, it's broken down in dozens of small, controlled steps. But both start with glucose and oxygen, and both finish as carbon dioxide and liquid water. Delta H depends only on the start and the finish, so respiration releases the same two thousand eight hundred and three kilojoules per mole as burning. That's only about fifteen point six kilojoules per gram, far less than methane, because glucose already contains oxygen. It's partly burned **already**.

Visual: the two-path view: top level "C₆H₁₂O₆(s) + 6O₂(g)", bottom level "6CO₂(g) + 6H₂O(l)". On "one hot rush" a single tall orange arrow with a small coded flame. On "dozens of small, controlled steps" a staircase of small orange steps beside it, the mitochondrion plate at its foot. On "both start with glucose and oxygen" the two paths' tops glow; on "both finish" their feet glow. On "the same two thousand eight hundred and three kilojoules" both are labelled "ΔH = −2803 kJ mol⁻¹". On "fifteen point six kilojoules per gram" a small bar pair from v09 returns: "glucose: 2803 ÷ 180.16 = 15.6 kJ g⁻¹" beside "methane: 55.5 kJ g⁻¹". On "already contains oxygen" the six O atoms in the glucose formula ring amber; on "already" a grey tag "partly oxidised".

### 4. photosynthesis is the reverse
> Now look at photosynthesis. Its overall equation is exactly the reverse: six carbon dioxides and six waters make one glucose and six oxygens. When you reverse a thermochemical equation, you reverse the sign of delta H. So photosynthesis is plus two thousand eight hundred and three kilojoules per mole. It's endothermic. Making glucose doesn't release energy, it stores it, and that energy comes from absorbed **light**.

Visual: the respiration equation writes "ΔH = −2803 kJ mol⁻¹" at its end. On "exactly the reverse" a copy flips left to right beneath it: "6CO₂(g) + 6H₂O(l) → C₆H₁₂O₆(s) + 6O₂(g)". On "reverse the sign" a "× (−1)" link between the two ΔH values; on "plus two thousand eight hundred and three" "ΔH = +2803 kJ mol⁻¹" (blue); the prediction chip "+2803" ticks. On "endothermic" a blue tag. On "doesn't release energy" a crossed chip "photosynthesis releases energy (it makes glucose)". On "light" pale-yellow coded rays fall onto the leaf plate.

### 5. the cycle
> Draw it as a cycle with two levels. Glucose and oxygen sit at the higher level, and carbon dioxide and water at the lower level. Photosynthesis goes up, so its arrow points up, plus two thousand eight hundred and three. Respiration comes down, minus two thousand eight hundred and three. Go round the loop and you add up to zero, because you're back where you started. A common mistake is drawing the photosynthesis arrow **downward**.

Visual: the two equations collapse into the level diagram on a slate axis "enthalpy, H". On "the higher level" the top level "C₆H₁₂O₆(s) + 6O₂(g)" settles high; on "the lower level" "6CO₂(g) + 6H₂O(l)" settles low. On "its arrow points up" a blue up arrow at the left with the leaf plate and "+2803 kJ mol⁻¹"; on "Respiration comes down" an orange down arrow at the right with the mitochondrion and "−2803 kJ mol⁻¹". On "add up to zero" a loop arrow circles and the row "+2803 + (−2803) = 0" writes. On "downward" a ghost blue arrow pointing down appears beside the up arrow and is crossed (red stamp "arrow must point up").

### 6. a second route agrees
> You can check the number with formation enthalpies from earlier. The products, six carbon dioxides and six waters, add to minus four thousand and seventy-five point eight. Glucose's formation enthalpy is minus one thousand two hundred and seventy-three point three, and oxygen's is zero. Products minus reactants gives minus two thousand eight hundred and two point five, about minus two thousand eight hundred and three. A different route, the same **answer**.

Visual: calculation rows at the right. Task strip: "Check ΔH for respiration with formation data". Givens (grouped, with a grey source tag "CO₂, H₂O: OpenStax; glucose: CRC Handbook"): "ΔfH°(CO₂, g) = −393.5", "ΔfH°(H₂O, l) = −285.8", "ΔfH°(C₆H₁₂O₆, s) = −1273.3", "ΔfH°(O₂, g) = 0" (kJ mol⁻¹). On "add to minus four thousand and seventy-five point eight" "Σ products = 6(−393.5) + 6(−285.8) = −4075.8". On "oxygen's is zero" "Σ reactants = −1273.3 + 6(0) = −1273.3". On "Products minus reactants" "ΔH = −4075.8 − (−1273.3) = −2802.5 ≈ −2803 kJ mol⁻¹" (orange). On "answer" the result links by a dotted line to the respiration arrow's −2803.

### 7. stored energy is not light absorbed
> But be careful what that plus two thousand eight hundred and three means. It's the extra enthalpy stored in glucose and oxygen. It isn't the amount of light the plant absorbs. Leaves absorb far more light energy than that, and most of it ends up as heat. Even in ideal conditions, only about five per cent of the sunlight reaching a leaf ends up stored in the plant. Delta H tells you what's stored, not how efficient the plant **is**.

Visual: the level diagram moves left. On "the extra enthalpy stored" the gap between the levels fills teal, tag "stored: 2803 kJ per mol of glucose". On "far more light energy" the light budget bar draws at the right: a long pale-yellow bar "light absorbed" that splits into a long grey segment "released as heat" and a short teal segment "stored". On "about five per cent" a sunlight bar above it, with only a sliver marked "stored: about 5% at best" (grey source tag "Zhu, Long and Ort, 2008"). On "is" a chip "ΔH = energy stored, not light absorbed".

### 8. respiration in a real cell
> The same goes for respiration. A cell doesn't capture all two thousand eight hundred and three kilojoules. It captures roughly a third of the energy in ATP, the molecule cells use to carry energy to where it's needed. The rest is released as heat, which is part of what keeps you warm. And whether a reaction in a cell can actually go isn't decided by delta H alone. That's decided by a quantity called Gibbs free energy, which we'll meet at the end of this **module**.

Visual: on "doesn't capture all" the respiration arrow's −2803 label pulses; the energy split bar draws: "about a third: ATP" (teal) and "the rest: released as heat" (grey). On "ATP, the molecule cells use" gloss "ATP: the molecule cells use to carry energy to where it's needed". On "keeps you warm" small orange heat arrows leave the mitochondrion plate. On "Gibbs free energy" a grey chip "ΔG: Gibbs free energy (coming in this module)".

### 9. same hill
> Here's a way to hold it. Up is plus, down is minus, and it's the same **hill**. Photosynthesis climbs it using light, and respiration comes back down it, so the height is the same both ways.

Visual: the memory line writes large in the explainer's handwriting style: "Up is plus, down is minus, and it's the same hill." Beneath, the level diagram as a simple coded hill outline; on "hill" the blue up arrow and the orange down arrow trace the same height, both labelled "2803".

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Respiration has a delta H of minus two thousand eight hundred and three kilojoules per mole of glucose. Write the thermochemical equation for photosynthesis. Then calculate the energy stored when a plant makes ten point zero grams of glucose. Glucose has a molar mass of one hundred and eighty point one six. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Cellular respiration: C₆H₁₂O₆(s) + 6O₂(g) → 6CO₂(g) + 6H₂O(l)  ΔH = −2803 kJ mol⁻¹. (a) Write the thermochemical equation for photosynthesis. (1 mark) (b) Calculate the energy stored when a plant produces 10.0 g of glucose. (M(C₆H₁₂O₆) = 180.16 g mol⁻¹) (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Reverse the equation and the sign: six CO two and six water give glucose and six oxygen, delta H plus two thousand eight hundred and three. Ten grams is zero point zero five five five moles, and times two thousand eight hundred and three, that's about a hundred and fifty-six kilojoules. Writing two thousand eight hundred and three kilojoules forgets to scale to the **mass**.

Visual: card shrinks to the top. Rows: "(a) 6CO₂(g) + 6H₂O(l) → C₆H₁₂O₆(s) + 6O₂(g)  ΔH = +2803 kJ mol⁻¹" (blue); "(b) n = 10.0 ÷ 180.16 = 0.0555 mol"; "energy stored = 0.0555 × 2803 = 156 kJ" (teal). On "forgets to scale" a chip "2803 kJ" fades in and is crossed, note "per mole, not per 10.0 g". Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A student says, "A plant must absorb exactly two thousand eight hundred and three kilojoules of light energy to make one mole of glucose." Evaluate this statement, using what delta H actually measures. Pause here to answer.

Visual: `QuestionCard`: "A student states: 'A plant must absorb exactly 2803 kJ of light energy to make one mole of glucose, because ΔH for photosynthesis is +2803 kJ mol⁻¹.' Evaluate this statement. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Partly right. Glucose and oxygen do store two thousand eight hundred and three kilojoules more enthalpy per mole, so at least that much energy must end up stored. But the plant absorbs far more light than that, and most of it is released as heat. So "exactly" is wrong. Delta H is what's stored, not what's **absorbed**.

Visual: card shrinks. Rows: "correct: products store 2803 kJ more per mol, so at least this much must be supplied" (teal); "incorrect: far more light is absorbed; most is released as heat (about 5% stored at best)" (grey); "so: not 'exactly'". On "absorbed" a chip "Correct: Hess's law says exactly 2803 kJ of light" fades in and is crossed. Hold about 1 second.

### 14. conclusion and handoff
> So photosynthesis and respiration are the same cycle, run in opposite directions: the same size of delta H, with opposite signs. Photosynthesis climbs uphill, and it stops in the dark, because it needs light all the time. But some uphill changes happen all by themselves. Ice melts on a warm bench, and a cold pack gets cold, and both absorb heat. So if energy isn't the whole story, what else decides which way a change **goes**?

Visual: the memory line returns small at the top. On "the same cycle" the level diagram pulses, then shrinks to the left. On "it stops in the dark" the light rays switch off and the up arrow dims, tag "needs light". On "Ice melts on a warm bench" `c9-ice-cube-v1.png` enters at the right on a coded bench line, a coded puddle spreading, readout "room 25 °C", a blue inward arrow "ΔH = +6.01 kJ mol⁻¹ (absorbs heat)". On "a cold pack gets cold" `m5x-cold-pack-v1.png` below it with readout "25.0 → 12 °C" and a blue tag "endothermic". On "goes" the amber chip "Endothermic, yet it happens by itself. What else decides the direction?" and the chip "Next: How does entropy describe spreading and possible particle arrangements?" write. Hold about 2 seconds. This is the final frame (m4-v11 opens on it).

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Respiration (overall): C₆H₁₂O₆(s) + 6O₂(g) → 6CO₂(g) + 6H₂O(l), ΔH = −2803 kJ mol⁻¹ (the same as burning glucose: same start and finish).
2. Photosynthesis (overall) is the reverse: 6CO₂(g) + 6H₂O(l) → C₆H₁₂O₆(s) + 6O₂(g), ΔH = +2803 kJ mol⁻¹ (endothermic; energy from light).
3. Cycle: glucose + O₂ on the higher level, CO₂ + H₂O on the lower; photosynthesis arrow up, respiration arrow down; the loop sums to zero.
4. ΔH is the energy stored or released, not efficiency: leaves store about 5% of sunlight at best; cells capture roughly a third of glucose's energy in ATP, the rest as heat.

Memory aid (large, on the notes screen): *Up is plus, down is minus, and it's the same hill.*

At the end the notes cross-fade back to scene 14's final frame.

## Teaching checks

- **Does it explain causes?** Why the coefficients are 6 (2: atoms conserved); why a cell releases the same ΔH as a flame (3); why glucose is weaker per gram (3); why photosynthesis is positive (4); why the arrow points up and the loop is zero (5); why the formation route agrees (6); why ΔH is not light absorbed (7: most light becomes heat); why a cell does not capture all of it (8).
- **Misconceptions addressed:** photosynthesis releases energy (4); arrow drawn downward (5); the equal values are a coincidence (3, 5: same start and finish); ΔH equals light absorbed (7; crossed in A2); cells capture all the energy (8); per-mole value used for a mass (A1).
- **One idea at a time:** prediction (1), balancing (2), path independence (3), reversal (4), cycle (5), check (6), light budget (7), cell budget (8).
- **Video makes it easier:** atom counters that turn teal (2); a flame arrow beside a staircase between the same levels (3); a flipped equation with a "× (−1)" link (4); a loop that sums to zero (5); a light budget bar with a sliver stored (7).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 28 s and 25 s.
- **Avoided double teaching:** reversing and the same-start rule (m4-v07); the formation formula (m4-v08); the cycle board and per gram (m4-v09). Biology's own respiration and photosynthesis pathways are not taught.
- **Syllabus coverage:** `C4-IQ2-03` "enthalpy changes involved in photosynthesis" and "enthalpy changes involved in respiration" (2 to 6, A1, A2).
- **Out of scope by design:** ATP coupling arithmetic, ΔG values, biochemical pathways, entropy (v11).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) 6CO₂(g) + 6H₂O(l) → C₆H₁₂O₆(s) + 6O₂(g), ΔH = +2803 kJ mol⁻¹ (1 mark, needs states and positive sign). (b) n = 10.0 ÷ 180.16 = 0.0555 mol (1 mark); energy stored = 0.0555 × 2803 = 156 kJ (1 mark). Classic mistake (crossed): "2803 kJ" (not scaled to 10.0 g).

**Attempt 2 (scene 12; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: the statement is partly correct: the products of photosynthesis have 2803 kJ more enthalpy per mole of glucose, so at least this much energy must be supplied and stored (1 mark). However, ΔH describes the change in stored enthalpy, not the light absorbed; plants absorb much more light energy, most of which is released as heat (only about 5% of sunlight is stored, even in ideal conditions) (1 mark). So "exactly 2803 kJ" is incorrect (1 mark). Classic mistake (crossed): "Correct: Hess's law means exactly 2803 kJ of light is absorbed".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Respiration and burning | ΔH = −2803 kJ mol⁻¹ (site) | opening, 1, 3, 5, 8, A1 |
| Photosynthesis | ΔH = +2803 kJ mol⁻¹ | 4, 5, 7, A1, A2 |
| Balancing | O: 6 + 12 = 18 = 12 + 6 | 2 |
| Per gram | M(glucose) 180.16; 2803 ÷ 180.16 = 15.6 kJ g⁻¹; methane 55.5 (v09) | 3 |
| Formation check | 6(−393.5) + 6(−285.8) = −4075.8; glucose −1273.3; −4075.8 + 1273.3 = −2802.5 ≈ −2803 | 6 |
| Efficiency | about 5% of sunlight stored at best (4.6% C3, 6% C4); about a third of energy captured in ATP | 7, 8, A2 |
| A1 | 10.0 ÷ 180.16 = 0.0555 mol; × 2803 = 155.6 ≈ 156 kJ | 10, 11 |
| Handoff | ice melting ΔH = +6.01 kJ mol⁻¹; cold pack 25.0 → 12 °C (illustrative, as m4-v01's ammonium salt cup) | 14, final frame |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 November); Codex to re-check.

- 6(12.01) + 12(1.008) + 6(16.00) = 180.156; 2803 ÷ 180.156 = 15.56.
- 6(−393.5) = −2361.0; 6(−285.8) = −1714.8; sum −4075.8; −4075.8 + 1273.3 = −2802.5; (with the site's −1272.8: −2803.0).
- 10.0 ÷ 180.156 = 0.05551 mol; 0.05551 × 2803 = 155.6 kJ.
- 32 × 30.5 = 976; 976 ÷ 2880 = 0.339 (author note d).
- 2803 ÷ 6 = 467 kJ per carbon (author note e).
- Ice: ΔH(fus) of water 6.01 kJ mol⁻¹ (standard value; OpenStax and CRC). The cold-pack readout "25.0 → 12 °C" is illustrative; Codex to check it matches m4-v04's design if that exists by build time.

## Memory aid check

- **"Up is plus, down is minus, and it's the same hill."** Written for this lesson from the site's two-level cycle. Meaning, as said in scene 9: on an enthalpy diagram an upward arrow is endothermic (positive), a downward arrow exothermic (negative), and a forward and reverse reaction between the same two levels have the same size. Assumptions checked: "hill" means the vertical enthalpy gap between two fixed states (same states, same conditions); it is not the activation-energy hill of m4-v01 and m4-v05, so the scene 9 visual draws two flat levels joined by a gentle outline rather than a peaked profile (the learning review should check this does not blur with activation energy; fallback wording "same gap"). It helps a new case: any reversed thermochemical equation (A1).
- **Considered, not used:** "Plants make it, we break it" (true but adds nothing about signs).

## Narration length estimate

Revision 1 count (6 November; build parser rules): **5,555 characters**, 15 scenes (per scene: 463, 441, 501, 416, 431, 457, 431, 465, 186, 341, 373, 233, 316, 426, 75). At 13.3 characters per second the speech is about 418 s; add about 10 s of settling (the counters in 2, the two paths in 3, the level diagram in 5, the budget bars in 7), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold: **about 509 s**.

## Scene list and build ids

Lesson key `c-y11-m4-v10` (route chem-y11-m4-v10; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v10`.

In order (15 scene headings, all `### N.`): hook-prediction, balance-respiration, burning-vs-cells, photosynthesis-reverse, the-cycle, formation-check, stored-not-absorbed, cell-budget, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m4-v09's final frame into scene 1 by camera continue; 1 to 2 clear change to the equation strip; 2 to 3 camera continue (the equation becomes the two levels); 3 to 4 camera continue; 4 to 5 morph (the equations collapse into the level diagram); 5 to 6 camera continue (working at the right); 6 to 7 camera continue; 7 to 8 camera continue; 8 to 9 clear change; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v10-learning-review.md`, `checks/c-y11-m4-v10-science-check.md`.

## Assets

Have (inspected 6 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/g1-leaf-v1.png` (2200 × 1400; green leaf): opening, scenes 1, 4, 5, 7.
- `public/assets/biology/b6a-chloroplast-v1.png` (1854 × 1151; cutaway chloroplast with grana): scene 1 (small, beside the leaf).
- `public/assets/biology/b6a-mitochondrion-v1.png` (1970 × 900; cutaway mitochondrion): opening, scenes 1, 3, 5, 8.
- `public/assets/chemistry/c9-ice-cube-v1.png` (2095 × 2105; ice cube): scene 14, final frame.
- `public/assets/chemistry/m5x-cold-pack-v1.png` (2000 × 2000; blue instant cold pack): scene 14, final frame.
- **Inspected, not used:** `sun.png` (clip-art style; light is coded rays instead); `g1-tree-v1.png` (the leaf is enough); `g1-sugar-bowl-v1.png` (table sugar is sucrose, not glucose).

Need: no new plates. Check by build: the chloroplast and mitochondrion plates are Year 12 Biology's; confirm their cell-style scale reads correctly next to the leaf (they are drawn at different scales: a grey tag "not to scale" if both are on screen at once).

Coded: cycle board, equation strip with atom counters, two-path staircase, level diagram, light rays, budget bars, calculation rows, bench line and puddle, readouts, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module4/lesson09.sa.html` (the three named sections; the equations, ±2803, cycle rules, Drill 3 and Drill 5) and the site notes' quotations.
3. Confirm ΔfH°(glucose, s) −1273.3 kJ mol⁻¹ (CRC), glucose's standard enthalpy of combustion (about −2803 kJ mol⁻¹), Zhu, Long and Ort (2008) efficiency figures, and water's ΔH of fusion 6.01 kJ mol⁻¹.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quote matches `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m4-v09's final frame, and send the final frame to the m4-v11 designer.

## YouTube metadata (draft)

Title: Photosynthesis and Respiration in a Hess's Law Energy Cycle | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Respiration releases 2803 kJ per mole of glucose. So what is ΔH for photosynthesis? Balance the overall equations, reverse the thermochemical equation, draw the two-level energy cycle, and check the value with formation enthalpies. Then see why ΔH is the energy stored, not the light a leaf absorbs or the energy a cell captures. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"apply Hess’s Law to simple energy cycles and solve problems to quantify enthalpy changes within reactions, including but not limited to: enthalpy changes involved in photosynthesis; enthalpy changes involved in respiration (ACSCH037)"

Previous: How can combustion data complete an unknown energy cycle? Next: How does entropy describe spreading and possible particle arrangements?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Glucose formation value (root, Codex).** CRC −1273.3 kJ mol⁻¹ (gives −2802.5 ≈ −2803) against the site's −1272.8 (gives −2803.0). OpenStax does not list glucose. Root to confirm the CRC value is acceptable as the cited source for this one species.
- **2. Efficiency figures (science check).** "About five per cent at best" (Zhu, Long and Ort 2008) and "roughly a third in ATP" (Gibbs basis, not said). If the science check prefers no percentages, scene 7 says "only a small fraction" and scene 8 "only part of the energy" (no other change).
- **3. Memory aid wording (learning review).** "the same hill" might blur with the activation-energy hill; fallback "the same gap".
- **4. Length (learning review).** About 509 s and 5,555 characters, near the lower bound, so there is no reserve cut. If scene 3's per-gram callback is cut for focus (about 150 characters), add the same length to scene 6 or 7 to stay above 5,500.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the balancing in scene 2 at the right pace for a Year 11 student; does scene 8's Gibbs sentence feel like a loose end), then the science check and Codex error check.
- Checker output (6 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
