# Year 11 Chemistry M2 V01: Conservation of mass and balancing equations. Why must mass be conserved when a chemical equation is balanced? (design)

Status: Revision 2 (6 Nov 2026): brief 180 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,975 characters, 19 scenes, about 530 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: first video of Year 11 Chemistry (2017 syllabus) Module 2, playlist entry 31, after `chem-y11-m1-v27` and before `chem-y11-m2-v02`. Templates: `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief); series conventions from `chem-y11-m1-v07.md` (atom colours, mass bars, calculation strips) and `chem-y11-m1-v27.md` (the final frame this video opens on). No starter pack exists; the pack work is done here (unchanged site givens, independent arithmetic in Python, original questions, asset reuse). Route entry: `chem-y11-m2-v01` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Count atoms before and after, including gases in the boundary; balance coefficients without changing formula subscripts"; next handoff: "How does a mole connect particle count with chemical amount?"). Site lessons read in full (5 November, read-only; SHA256 recomputed, both match the route):
- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson11.sa.html` (`1c1afd11799fc27c88f06f6c643be9e8cc0f475b4a4f3a4a9c62c620a3ba8d83`). Used: `l11-conservation-title` (the law, "a chemical equation must have the same number of atoms of each element on both sides", H₂ + O₂ → H₂O balanced to 2H₂ + O₂ → 2H₂O, the inspection steps "never change subscripts"), trap 2 ("H₂O₂ and H₂O are different compounds"). Not used: mole ratios, Job's method and the four worked examples' mole steps (m2-v06, v07).
- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module3/lesson02.sa.html` (`a7facf444691b5c5632a09f95ab0ae7e52e3ecff9a89e8c32525be1e2f645546`). Used: `l02-balancing-synthesis-and-decomposition-equati-title` (method, the "Critical error: never place a coefficient inside a chemical formula", H₂O electrolysis count table), worked example 1 (Mg + O₂ → 2MgO, balanced in the site's order) and worked example 2 (CuCO₃(s) → CuO(s) + CO₂(g), "already balanced"), drill 2's style of atom-count check. Not used: synthesis and decomposition as reaction types and the ammonium nitrate case study (Module 3).

Owner rules applied: one learner question; no people, hands or faces (tongs lie on the mat, apparatus is shown alone); real apparatus and substances as painted plates; particle models, atom tiles, tallies and calculation rows coded; one reasoning stage at a time; 3 s prediction countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key-notes hold; Australian spelling ("aluminium", "sulfate"); no em dashes; conversational narration; earlier videos recalled, not re-taught; nothing in the bottom 12% of the frame.

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger ID `C2-IQ1-02`), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- "relate stoichiometry to the law of conservation of mass in chemical reactions by investigating:"
  - "balancing chemical equations (ACSCH039)"
  - "solving problems regarding mass changes in chemical reactions (ACSCH046)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 39)

**Boundary:** opens on m1-v27's final frame (the balance reading 110.0 g, "Module 1 complete"). Teaches: an open-crucible reaction that loses mass (copper carbonate) and one that gains mass (magnesium), explained by gas crossing the system boundary; system defined; a closed container keeps the reading constant; the law of conservation of mass; why it holds (atoms rearranged, none made or destroyed, each keeps its mass); so an equation must count the same atoms on both sides; subscripts fix the substance, coefficients count particles; balancing by inspection (H₂ and O₂, Mg and O₂, CuCO₃ already balanced); state symbols (g) linked to the boundary; mass-change problems from conservation (measured masses only); two attempts. Stops before moles and mole ratios (m2-v02, m2-v06), mass-to-mass stoichiometry (m2-v07), and planning a mass-balance investigation (m2-v09 owns defining the system in a planned investigation; here it is one sentence and two demonstrations). Not taught: reaction types (Module 3).

## Decisions

- **Learner question (route wording kept).** "Why must mass be conserved when a chemical equation is balanced?" The answer, in order: some reactions seem to lose or gain mass (1, 4); gas crossing the boundary explains both (2, 4); with nothing crossing, mass is constant (5); because atoms are only rearranged and keep their masses (6); so a written equation must keep every atom (7); and you may only change how many particles, not what they are (8 to 11); the law then solves mass-change problems (12).
- **Opening frame (equals m1-v27's final frame, `chem-y11-m1-v27.md` scene 15).** `y11c-top-pan-balance-v1.png` with the salt-solution beaker (`m5x-unsaturated-beaker-v1.png`) on the pan, coded display "110.0 g", rows "water 100.0 g + salt 10.0 g" and "100.0 + 10.0 = 110.0 g", grey tag "beaker tared", the small lens of Na⁺ and Cl⁻ among water molecules ("every particle still there"), grey tag "Module 1 complete" at the top right, and the chip "Next: why must mass be conserved when a chemical equation is balanced?". Scene 1 keeps the balance and swaps the beaker for the crucible.
- **The hook is a contradiction (route start: concrete case).** Dissolving kept every gram; the first reaction shown loses 0.88 g. The prediction then shows a reaction that gains mass. Both are resolved by one idea, the boundary, before the law is stated, so the law arrives as an explanation, not a rule.
- **System and boundary (route stop: "including gases in the boundary").** Defined in plain words in scene 2: "everything inside that line", drawn as a dashed teal outline round the crucible on the balance. Gases are drawn crossing it (CO₂ out, O₂ in). The closed-system demonstration (scene 5) uses a reaction that makes no gas, a precipitate forming in two beakers on the pan (Revision 2, root decision 3 fallback; author note b). m2-v09 owns planning a mass-balance investigation; this video does not teach procedure.
- **Why conservation holds (cause before rule).** Scene 6 uses a coded particle model of 2H₂ + O₂ → 2H₂O (the site's equation): the six atoms are tracked by their positions, bonds break and re-form, a count tally stays "4 H, 2 O" before and after. "Each atom keeps its own mass" is said because the mass argument needs it.
- **Subscripts against coefficients (site trap 2, made causal).** The subscript fixes what the substance is (H₂O to H₂O₂ is hydrogen peroxide; v19 taught formulae); the coefficient counts particles. The site's key terms say a coefficient indicates "the number of moles"; the mole has not been taught, so this video says "how many of those particles" (site note 1). m2-v02 extends the count to moles.
- **Worked balancing, site examples exactly:** 2H₂ + O₂ → 2H₂O (site lesson 11, scene 9); 2Mg + O₂ → 2MgO in the site's order (MgO first, then Mg; scene 10); CuCO₃(s) → CuO(s) + CO₂(g), already balanced (scene 11). State symbols are taught only as far as (g), because it is the boundary link; (s), (l) and (aq) are shown on screen and named in key notes.
- **Mass-change problems (`C2-IQ1-02` second example) without moles.** Masses of reactants add to masses of products, so a missing mass is found by subtraction: oxygen gained 0.16 g; carbon dioxide lost 0.88 g. Numbers are idealised from the formulae (author note a) and tagged "illustrative data".
- **In-teaching prediction (3 s, scene 3).** "Burn magnesium ribbon: mass up, down or the same?" The common intuition (burning makes things lighter, like ash) is named in the answer and explained by the same boundary idea.
- **Memory aid (new; see "Memory aid check"):** "Atoms in, atoms out. Change the big number in front, never the small number inside."
- **Attempts (original wording, HSC style).** A1: balance Al(s) + O₂(g) → Al₂O₃(s); 4Al + 3O₂ → 2Al₂O₃; crossed "2Al + O₃ → Al₂O₃" (subscript changed; O₃ is ozone). A2: 5.00 g calcium carbonate heated to constant mass in an open crucible leaves 2.80 g calcium oxide; CO₂ released 2.20 g; explain the decrease (gas left the open system); crossed "mass was destroyed". The site's Fe + O₂ → Fe₂O₃ example is left for site practice.
- **Mistake scene:** none separate. "Mass disappears in some reactions" (1, 2; crossed in A2); "burning makes things lighter" (4); "fix an equation by changing a subscript" (8; crossed in A1); "an unbalanced equation is just untidy" (7: it claims an atom vanished).
- **Handoff (route next).** Scene 18: a balanced equation counts particles, but 0.24 g of magnesium holds far too many to count. Final frame (m2-v02 opens on it): see "Opening frame and final frame".
- **Site notes (for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. module2/lesson11, key terms: "coefficient ... indicating the number of moles of that substance" and "In 2H₂O, the subscript 2 in H₂ tells you atoms in one molecule": a coefficient counts particles (molecules, atoms or formula units) in any consistent unit, including moles; and in "2H₂O" there is no H₂ (the subscript 2 belongs to H in H₂O). Suggest "In 2H₂O, the subscript 2 means two H atoms in one water molecule; the coefficient 2 means two water molecules (or two moles of them)."
  2. module3/lesson02, worked example 2: "Copper(II) carbonate decomposes on heating": the green school reagent sold as "copper carbonate" is basic copper(II) carbonate, CuCO₃·Cu(OH)₂, which also releases water. The CuCO₃ equation is fine as the textbook model; suggest a teacher note. This video keeps CuCO₃ with author note a.
  - Checked and correct: lesson 11 WE1 (4Fe + 3O₂ → 2Fe₂O₃, 4 Fe and 6 O each side); lesson 3/02 drills (2Fe + 3Cl₂ → 2FeCl₃; 2KClO₃ → 2KCl + 3O₂; 2SO₂ + O₂ → 2SO₃) and the NH₄NO₃ atom counts.
- **Cause chain taught, in order:** (1) open-crucible reactions change mass because gas crosses the boundary (1 to 4); (2) with nothing crossing, mass is constant: the law (5); (3) atoms are rearranged, not made or destroyed, and keep their masses (6); (4) so the written equation must show the same atoms (7); (5) subscripts fix substances, so only coefficients change (8); (6) balancing by counting (9 to 11); (7) the law turns a mass change into the mass of the gas (12).
- **Entry knowledge:** Stage 5 particle model, physical and chemical change, simple formulae; m1-v19 (formulae from ion charges: MgO, Al₂O₃), m1-v27 (dissolving conserves mass), m1-v07 (atom tiles and colours).
- **Learner-visible vocabulary:** system (everything inside the boundary we weigh, 2); closed system (nothing can cross the boundary, 5); law of conservation of mass (5); subscript (8); coefficient (8); balanced equation (same number of each atom on both sides, 9); state symbols (s, l, g, aq; 10).
- **Legacy logic ported:** none.
- **Explainer motion (coded, plus plates):** **balance readout** (coded display over the plate, ticks between values); **system boundary** (dashed teal outline that draws round the crucible; gas wisps cross it with small arrows labelled with the gas); **particle model** (H white, O red, Mg pale green, Cu copper-brown, C dark grey, Al silver-grey, as m1-v07; bonds as sticks that break and re-form; atoms move, never appear or vanish); **atom tally** (two columns "left" and "right" with one row per element; counts tick as coefficients are written; a row turns teal when equal); **coefficient slot** (a dashed box in front of each formula where coefficients write; subscripts are locked, drawn with a small padlock glyph on first mention only); **mass rows** (task strip, grouped givens, working rows as m1-v07); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, scribble circle, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** heading top left; balance and plates at the left; equation across the upper middle with the tally below it at the right; working rows at the right. Exceptions (Revision 2): scene 5 puts the balance large at the centre (new stage); scene 9 gives the coefficient stepper the full width; scene 12 uses the full-width calculation layout.
- **Colour roles (Revision 2, fixed for the whole video):** atoms in element colours (as m1-v07); coefficients amber; subscripts ink with the padlock; the system boundary and anything that stays the same teal; gas crossing as grey wisps; balance display ink; givens navy; framed answers in a dark-ink box with a green tick; mistakes red (strike plus red hand tag). Hand-font tags take the role colour of what they mark.
- **Type sizes (Revision 2, at 1080p):** current working line and equations 44 px or more (the balancing equation about 72 px); balance display and live readouts about 52 px; supporting lines and glosses 30 px; hand tags 34 to 40 px; nothing a student must read below 26 px (the "illustrative data" tag is 26 px). Older rows shrink and dim; the current line is never left small.
- **Anchor and simulation (Revision 2).** Painted anchor from the first frame: the top-pan balance and the green copper carbonate crucible (existing plates `y11c-top-pan-balance-v1.png`, `y11c-cuco3-crucible-green-v1.png`). The genuine simulation is scene 9's coefficient stepper: amber coefficient dials step 1 → 2 and the live atom readouts ("H: left 2 | right 4" and so on, 52 px) recount on every step, turning teal only when they match. Scene 6's particle model carries two live readouts ("atoms: 6", "mass: unchanged") that hold steady while the bonds break and re-form.

Author notes (not learner copy):
(a) Copper carbonate is modelled as CuCO₃ (Cu 63.5, C 12.0, O 16.0: Mr 123.5; CuO 79.5; CO₂ 44.0). 2.47 g gives 1.59 g CuO and 0.88 g CO₂ exactly. The school reagent is basic copper carbonate (site note 2), which also loses water; the plate shows the familiar green powder turning black, and the numbers are tagged "illustrative data". Magnesium (Mg 24.3, O 16.0): 0.24 g gives 0.398 g MgO (shown 0.40 g; oxygen 0.16 g, from 0.40 − 0.24). In practice some MgO escapes as smoke and some Mg forms nitride, so class results are often lower; not said.
(b) Closed system (Revision 2: root decision 3 fallback, brief 180 blocker). No safe small-quantity capped-vessel method has been verified against current NSW school guidance, so the capped bottle is withdrawn and the root-approved no-gas fallback is used: dilute sodium carbonate solution poured into dilute calcium chloride solution (Na₂CO₃(aq) + CaCl₂(aq) → CaCO₃(s) + 2NaCl(aq)). A white precipitate forms and no gas is made, so nothing crosses the boundary and the reading stays constant. Both beakers stay on the pan (the emptied one too). Low-hazard solutions at about 0.5 mol L⁻¹; safety glasses; run under the school's risk assessment. The equation is not shown or spoken (precipitation equations come later); the names are enough. Displayed mass 98.42 g before and after (illustrative). A balloon is also avoided (buoyancy lowers the reading). No pressurised container is painted or presented as a school method.
(c) Hydrogen burning is shown only as a particle model (no plate of a flame or explosion).
(d) Pronunciations: "H two, plus O two, makes H two O"; "M g O"; "C u C O three"; "A l two O three". Each formula is spoken once so students hear it read; the name is used otherwise.
(e) CaCO₃ (A2): Ca 40.1, C 12.0, O 16.0, Mr 100.1; CaO 56.1; 5.00 g gives 2.80 g CaO (2.802) and 2.20 g CO₂ (2.198). The question gives both measured masses, so no formula masses are needed.

Main question: *Why must mass be conserved when a chemical equation is balanced?*
Entry knowledge: Stage 5 particle model and formulae; m1-v19 formulae; m1-v27 dissolving conserves mass.
Stops after: boundary and closed system, the law and its cause, balancing by coefficients, (g) and the boundary, mass changes by subtraction. No moles.
Handoff: m2-v02, the mole.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key (continues m1-v07): atoms in element colours with an ink outline; coefficients amber; subscripts ink and locked; the system boundary dashed teal; gases as grey wisps with a label; equal tally rows teal; givens navy; earlier rows dimmed; crossed chips red strike; "illustrative data" tag grey on every measured mass.

### 1. hook: a reaction that loses mass
> Last time, a hundred grams of water and ten grams of salt made a hundred and ten grams of solution, because every particle was still there. Dissolving is a physical change. So what happens to mass in a chemical reaction? Here's green copper carbonate in a crucible. Heat it, and it turns black. And the balance reading **falls**, by zero point eight eight of a gram. Did some mass just get **destroyed**?

Visual: opens on m1-v27's final frame (Decisions); the "Next" chip and "Module 1 complete" tag fade on the second sentence. On the third sentence the beaker lifts off and the display returns to "0.00 g" with the tag "crucible tared". The new plate `y11c-cuco3-crucible-green-v1.png` (green powder in an open crucible on a pipeclay triangle and tripod, burner unlit) appears beside the balance with "2.47 g" written under it (grey tag "illustrative data"). The burner lights (cross-fade to `y11c-cuco3-crucible-green-lit-v1.png`) and the powder cross-fades to black (`y11c-cuco3-crucible-black-lit-v1.png`). The crucible returns to the balance. On "falls" the display ticks down from "2.47 g" to "1.59 g" and a rose chip "−0.88 g" drops beside it. On "destroyed" a large red "?" writes over the chip and a red hand tag "mass destroyed?" (36 px) writes beside it with a red pen arrow to the display. The display digits are 52 px throughout. Heading writes on: "Conservation of mass".

### 2. where it went: the system boundary
> No. Heating breaks the copper carbonate down into two new substances: black copper oxide, and carbon dioxide **gas**. The copper oxide stays in the crucible, but the gas drifts out into the air. Draw a line around what's on the balance. We'll call everything inside that line the **system**. The carbon dioxide crossed that line, so the balance stopped weighing it. It has a mass of zero point eight eight of a gram, exactly the mass that **vanished**.

Visual: the black crucible (lit plate) at the left. On "gas" grey wisps rise from the powder, labelled "carbon dioxide gas", and two word labels write: "copper carbonate → copper oxide + carbon dioxide". On "system" a dashed teal outline draws round the crucible on the balance, gloss "system: everything inside the boundary we weigh". The wisps cross the outline with small arrows pointing out. On "vanished" the rose "−0.88 g" chip slides onto the escaping wisps and relabels "carbon dioxide: 0.88 g"; the "?" from scene 1 is crossed out with the red "mass destroyed?" tag. A teal hand tag "gas out" writes where the wisps cross, with a teal pen ring round the crossing point, and an ink hand tag "same 0.88 g" links the chip to the display drop.

### 3. prediction (countdown, 3 seconds)
> Now a quick prediction. Burn a strip of magnesium ribbon in a crucible, and it flares into white powder. Will the mass go up, go down, or stay the **same**?

Visual: stage change: the copper carbonate crucible slides to a thumbnail at the top right with its "0.88 g out" tag, and the magnesium takes the stage. `p01-mg-ribbon-v1.png` (coiled ribbon on a mat) at the left, tag "magnesium ribbon: 0.24 g" (grey "illustrative data"). Three chips write: "up", "down", "same". On "same" the 3 s `Countdown` ring runs.

### 4. magnesium gains mass
> It goes up. Zero point two four of a gram of magnesium becomes zero point four zero of a gram of white magnesium **oxide**. The extra zero point one six of a gram is oxygen. It came from the air, crossed into the system, and joined the **magnesium**. Burning things often seems to make them lighter, like a log turning to ash, but that's because the gases it makes float **away**.

Visual: the "up" chip ticks. The ribbon cross-fades to `m5-g02b-open-crucible-v1.png` (white powder in a crucible over a lit burner), tag "magnesium oxide". On "oxide" the balance display ticks "0.24 g" to "0.40 g" with a teal chip "+0.16 g". On "magnesium" the dashed teal boundary draws round the crucible and grey wisps labelled "oxygen from the air" flow inward across it; the "+0.16 g" chip slides onto them, relabelled "oxygen: 0.16 g", teal hand tag "gas in" with a pen ring round the inward wisps. On "away" a small grey card shows two arrows side by side: "copper carbonate: gas out, mass falls" and "magnesium: gas in, mass rises"; a small grey chip "burning makes things lighter?" is struck through in red.

### 5. a closed system
> So what if nothing crosses the line? Here, two clear solutions, sodium carbonate and calcium chloride, sit in beakers on the **balance**. Pour one into the other, and a cloudy white solid forms, but no gas is **made**. Nothing crosses the line, so the reading doesn't **change**. That's the law of conservation of mass. In a closed system, where nothing crosses, the total mass after a reaction equals the total mass **before**.

Visual: clear change to a new stage: the balance at the centre, large, with two copies of `y11c-beaker-colourless-solution-v1.png` (about 260 px wide each, uniform scale) side by side on the pan, coded labels "sodium carbonate solution" and "calcium chloride solution" (navy, 30 px); the copper carbonate and magnesium crucibles sit as two small thumbnails at the top right with their "gas out" and "gas in" tags. On "balance" the display reads "98.42 g" (52 px, grey tag "illustrative data", 26 px) and the dashed teal boundary draws round both beakers, ink hand tag "everything we weigh". On "made" the left beaker tilts by code (rotation only, no hands) and its liquid pours as a coded stream into the right beaker, which cross-fades to the new plate `y11c-beaker-white-precipitate-v1.png` (same beaker, cloudy white solid settling); the emptied beaker swaps to `m6-beaker-v1.png` and rights itself on the pan. A teal hand tag "no gas made" writes inside the boundary with a pen ring round the boundary line (no wisps cross it). On "change" the display holds "98.42 g" and blinks once; a teal tick and a teal hand tag "same reading". On "before" the law writes in a framed `HandText` banner (44 px): "Law of conservation of mass: in a closed system, total mass before = total mass after", gloss underneath "closed system: nothing crosses the boundary" (30 px).

### 6. why: atoms are rearranged
> Why must mass be conserved? Because a reaction only rearranges atoms. Bonds break and new bonds form, but no atom is created or destroyed, and each atom keeps its own **mass**. Look at hydrogen burning in oxygen to make water. The same four hydrogen atoms and two oxygen atoms are there before and **after**. They're just joined up **differently**. Same atoms, so the same mass.

Visual: the plates leave; the law banner shrinks to the top. On "mass" a single coded atom pair (one white H, one red O) sits on a small abstract balance outline, then returns. A coded particle model at full width: two H₂ molecules and one O₂ molecule at the left. Two live readouts sit above the model (52 px, teal), "atoms: 6" and "mass: unchanged"; they hold steady through every frame of the rearrangement while bonds break and re-form. On "after" the bonds break (sticks fade), the six atoms drift and re-bond as two H₂O molecules at the right, each atom keeping a faint numbered halo (H1 to H4, O1, O2) so its path can be followed. On "differently" a tally writes under each side: "4 H, 2 O" and "4 H, 2 O", both rows teal. The final sentence writes as a teal hand tag "same atoms → same mass" (40 px) with a pen ring round the two tallies.

### 7. an equation must keep every atom
> So a chemical equation has to count the same atoms on each side. Here's the reaction written quickly: H two, plus O two, makes H two O. Count the **oxygen**. Two on the left, but only one on the **right**. Read literally, this equation says an oxygen atom vanished, and atoms can't do **that**. It isn't balanced yet.

Visual: the particle model shrinks above. The equation "H₂ + O₂ → H₂O" writes large across the middle, with formula tiles under each formula (one H₂, one O₂, one H₂O). The atom tally opens at the right ("left | right" columns; rows H and O). On "oxygen" the O row fills "2 | 1" and turns rose. On "right" the H row fills "2 | 2" (teal). On "that" one red O atom tile at the left blinks with a ghost "vanished?" tag and is crossed (tag "atoms can't vanish"), red hand tag "an atom vanished?" with a red pen arrow to the "1".

### 8. two kinds of number
> There are two kinds of number in an equation. The small number inside a formula is a subscript. It says how many atoms are in one particle, so it fixes what the substance **is**. Change H two O to H two O two, and you've written hydrogen peroxide, a different chemical. The big number in front of a formula is a **coefficient**. It says how many of those particles there are. To balance an equation, you only change **coefficients**.

Visual: "H₂O" enlarges at the centre; a `PenArrow` points at its subscript 2, gloss "subscript: atoms in one particle". On "is" a small padlock glyph appears beside the subscript with the tag "fixes the substance". The formula edits to "H₂O₂" with its tile model (two H, two O) and a grey label "hydrogen peroxide: a different substance"; it is crossed and reverts. On "coefficient" a dashed amber slot appears in front of "H₂O" and a "2" writes in it; two separate water tile models appear side by side, gloss "coefficient: how many particles". On "coefficients" every formula in the scene 7 equation gains an empty amber slot; amber hand tag "change this" by a slot and an ink hand tag "never this" by the padlock.

### 9. balancing hydrogen and oxygen
> Let's balance it. To get two oxygen atoms on the right, we need two water molecules, so write a two in front of H two **O**. Now the right has four hydrogen atoms, but the left has two. So write a two in front of H two as **well**. Count again. Four hydrogen and two oxygen on each **side**. Two hydrogen molecules and one oxygen molecule make two water **molecules**.

Visual: cut to the full-width coefficient stepper (the simulation): the equation at about 72 px with an amber dial in each slot showing "1", and under it one live readout per element (52 px): "H: left 2 | right 2" and "O: left 2 | right 1" (the O readout rose). On "O" the H₂O dial clicks 1 → 2; a second water tile model copies in and both readouts recount live: "O: left 2 | right 2" turns teal while "H: left 2 | right 4" turns rose, amber hand tag "fixes O, breaks H" with a pen arrow to the H readout. On "well" the H₂ dial clicks 1 → 2; a second H₂ model copies in; "H: left 4 | right 4" turns teal. On "side" both readouts glow teal and a framed line writes (dark-ink box, green tick): "2H₂ + O₂ → 2H₂O, balanced"; teal hand tag "count again" with a pen ring round both readouts. On "molecules" the scene 6 particle model returns small above it, captioned "2 molecules + 1 molecule → 2 molecules".

### 10. magnesium and oxygen
> Now magnesium. Magnesium plus oxygen makes magnesium oxide, M g O. Oxygen gas is made of O two molecules, so there are two oxygen atoms on the left, and one on the **right**. Put a two in front of M g O, then a two in front of magnesium to match. Two magnesium plus O two makes two M g **O**. The letter g in brackets after O two marks a gas, and that's the oxygen that crossed into the **crucible**.

Visual: board resets; the magnesium oxide crucible small at the left with its boundary and "oxygen: 0.16 g" tag. The equation "Mg + O₂ → MgO" writes with slots and a fresh tally. On "right" the O row reads "2 | 1" (rose), amber hand tag "MgO first" by the MgO slot. On the fourth sentence "2" writes in the MgO slot (O teal, Mg "1 | 2" rose), then "2" in the Mg slot (Mg teal). On "O" (the end of the fifth sentence, "Two magnesium plus O two makes two M g O") the balanced equation glows and is framed with a green tick: "2Mg + O₂ → 2MgO". On "crucible" state symbols write in: "2Mg(s) + O₂(g) → 2MgO(s)", the "(g)" ringed, and a line links it to the inward oxygen wisps on the crucible; a small grey key writes: "(s) solid, (l) liquid, (g) gas, (aq) dissolved in water" (30 px); teal hand tag "crossed in" beside the ring.

### 11. copper carbonate: already balanced
> And copper carbonate? C u C O three makes C u O plus C O two. Count it: one copper, one carbon and three oxygens on each **side**. It's already **balanced**. Here, the g marks the carbon dioxide as a gas, the one that crossed out of the **system**.

Visual: the copper carbonate thumbnail returns to the left with its boundary and "carbon dioxide: 0.88 g" wisps. "CuCO₃ → CuO + CO₂" writes; under it the tile models (one Cu, one C, three O on the left; Cu and O, then C and two O on the right). On "side" the tally fills "Cu 1 | 1", "C 1 | 1", "O 3 | 3", all teal. On "balanced" a tick and "no coefficients needed (each is 1)", teal hand tag "already equal" with a pen ring round the tally. On "system" state symbols write: "CuCO₃(s) → CuO(s) + CO₂(g)", the "(g)" ringed and linked to the outward wisps, teal hand tag "crossed out".

### 12. solving mass changes
> Conservation of mass also lets you calculate mass changes. The masses of the reactants add up to the masses of the products. For magnesium, zero point two four of a gram, plus the oxygen, equals zero point four zero of a gram, so the oxygen was zero point one six of a **gram**. For copper carbonate, two point four seven grams makes one point five nine grams of copper oxide, so the carbon dioxide must be zero point eight eight of a **gram**. The equation tells you which substance crossed the boundary. The balance tells you how **much**.

Visual: calculation layout. Equation strip: "mass of reactants = mass of products". Task strip: "Find the mass of the gas". Givens (navy, grey "illustrative data"): "Mg 0.24 g; MgO 0.40 g" and "CuCO₃ 2.47 g; CuO 1.59 g". On "gram" (first) rows build at 48 px: "0.24 g + m(O₂) = 0.40 g" then "m(O₂) = 0.40 − 0.24 = 0.16 g", the "0.16 g" framed in a dark-ink box with a green tick; teal hand tag "gas in: the gain"; a red chip "0.24 + 0.40 = 0.64 g" fades in at the lower left and is struck through, red hand tag "don't add before and after". On "gram" (second) the magnesium rows and the crossed chip shrink and dim; rows "2.47 g = 1.59 g + m(CO₂)" then "m(CO₂) = 2.47 − 1.59 = 0.88 g", the "0.88 g" framed with a green tick, teal hand tag "gas out: the loss". On "much" two chips write side by side: "equation: which gas (g)" and "balance: how much".

### 13. one line to remember
> Here's a line to remember. Atoms in, atoms **out**. Change the big number in front, never the small number **inside**.

Visual: the three balanced equations stack small, their tallies teal. On "out" a framed memory card draws at the centre and the first half writes large in it as `HandText` (teal, 48 px): "Atoms in, atoms out." On "inside" the second half writes (amber and ink, 44 px): "Change the big number in front, never the small number inside.", with an amber ring on a coefficient and the padlock on a subscript. Hold about 2 seconds.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. Aluminium reacts with oxygen gas to form aluminium oxide, A l two O three. Balance the equation. Pause here to answer.

Visual: `QuestionCard` (subject "Chemistry", tag "HSC-style question, written for HSCScience"): "Aluminium reacts with oxygen gas to form aluminium oxide. Balance the equation: Al(s) + O₂(g) → Al₂O₃(s)". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no slots filled, no tally).

### 15. feedback 1 (brief)
> Aluminium oxide has three oxygen atoms, and oxygen gas comes in pairs. Six is the smallest number both fit, so use three O two and two A l two O **three**. That's four aluminium atoms on the right, so write a four in front of **aluminium**. Four A l plus three O two makes two A l two O three. Writing O three to fix the oxygen is the classic slip. O three is ozone, a different **substance**.

Visual: card shrinks to the top. The equation writes with slots and a tally. On "three" "3" writes in the O₂ slot and "2" in the Al₂O₃ slot; "O 6 | 6" turns teal, "Al 1 | 4" rose. On "aluminium" "4" writes in the Al slot; "Al 4 | 4" teal; the balanced line glows and is framed in a dark-ink box with a green tick: "4Al(s) + 3O₂(g) → 2Al₂O₃(s)"; amber hand tag "6 fits both" by the O row. On "substance" a chip "2Al + O₃ → Al₂O₃" fades in and is crossed in red, red hand tag "subscript changed: O₃ is ozone". Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. A student heats five point zero zero grams of calcium carbonate in an open crucible until the mass stops changing. Two point eight zero grams of calcium oxide is left. Calculate the mass of carbon dioxide released, and explain why the mass decreased. Pause here to answer.

Visual: `QuestionCard`: "A student heats 5.00 g of calcium carbonate, CaCO₃, in an open crucible until its mass stops changing. The equation is CaCO₃(s) → CaO(s) + CO₂(g). 2.80 g of calcium oxide remains. (a) Calculate the mass of carbon dioxide released. (b) Explain why the mass in the crucible decreased, with reference to the law of conservation of mass." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> Five point zero zero minus two point eight zero is two point two zero grams of carbon dioxide. The mass of the reactant still equals the mass of the products, but carbon dioxide is a gas that left the open crucible, so the balance no longer weighed **it**. Saying the mass was destroyed is the slip to **avoid**.

Visual: card shrinks to the top; "open crucible" and "CO₂(g)" underlined in the card. Row "m(CO₂) = 5.00 − 2.80 = 2.20 g" writes with the first sentence (48 px), the "2.20 g" framed with a green tick. On "it" a small coded crucible outline with a dashed teal boundary shows grey wisps "CO₂ 2.20 g" crossing out. On "avoid" a chip "mass was destroyed" fades in and is crossed in red, red hand tag "it left as a gas". Hold about 1 second.

### 18. handoff: too many to count
> One more thing. A balanced equation counts particles. Two magnesium atoms react with one oxygen molecule. But that zero point two four of a gram of magnesium holds an enormous number of atoms, far too many to count one by **one**. Next time, we'll see how a mole connects that particle count with an amount chemists can actually **use**.

Visual: board clears to "2Mg(s) + O₂(g) → 2MgO(s)" large at the centre; under it, in small grey, "2 atoms : 1 molecule : 2 units of MgO". `p01-mg-ribbon-v1.png` slides in at the left on `y11c-top-pan-balance-v1.png`, display "0.24 g". On "one" a magnifier circle over the ribbon fills with a dense coded field of pale green atoms, and the tag "how many atoms?" writes beside it. On "use" the chip writes: "Next: How does a mole connect particle count with chemical amount?". Hold about 2 seconds. This is the final frame (m2-v02 opens on it).

### 19. key notes (quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Conservation of mass: in a closed system, total mass before = total mass after, because atoms are rearranged, never made or destroyed.
2. Open container: a gas leaving lowers the mass; a gas joining from the air raises it. (g) marks a gas.
3. Balance with coefficients (how many particles), never subscripts (they fix the substance).
4. Check by counting each atom on both sides: 2H₂ + O₂ → 2H₂O has 4 H and 2 O on each side.
5. Mass change: mass of reactants = mass of products, so 5.00 g CaCO₃ − 2.80 g CaO = 2.20 g CO₂.

Memory aid (framed card under the notes, hand lettering, teal and amber as in scene 13): *Atoms in, atoms out. Change the big number in front, never the small number inside.* Notes 32 px in the role colours (boundary teal, coefficients amber, framed result ink); 506 characters; no paragraphs.

At the end the notes cross-fade back to scene 18's final frame.

## Teaching checks

- **Does it explain causes?** Why the copper carbonate lost mass (gas left the system, 2); why magnesium gained mass (oxygen joined from the air, 4); why the precipitation on the balance doesn't change (no gas, nothing crosses, 5); why mass is conserved at all (atoms rearranged, each keeps its mass, 6); why an unbalanced equation is wrong (it claims an atom vanished, 7); why subscripts can't change (they fix the substance, 8).
- **Misconceptions addressed:** mass is destroyed or created in reactions (1 to 5; crossed in 17); burning makes things lighter (4); balance by changing subscripts (8; crossed in 15); coefficients are decoration (9: they count particles).
- **One idea at a time:** loss (1, 2), gain (3, 4), closed (5), cause (6), consequence for equations (7), the two numbers (8), balancing (9 to 11), calculation (12).
- **Video makes it easier:** the boundary makes "where did the mass go" visible (2, 4, 5); atoms move without appearing or vanishing (6); the tally turns teal row by row as coefficients write (9 to 11, 15).
- **Response opportunity:** prediction (3 s) and two unseen tasks with every needed formula and mass on the card; 10 s each; nothing answer-bearing. Feedback about 30 s and 18 s.
- **Avoided double teaching:** formulae (m1-v19) and atom tiles (m1-v07) recalled, not re-taught; dissolving (m1-v27) in one sentence. Moles and mole ratios left for m2-v02 and m2-v06; investigation planning for m2-v09.
- **Syllabus coverage:** `C2-IQ1-02`: balancing chemical equations (7 to 11, 15); solving problems regarding mass changes in chemical reactions (12, 17), related to the law of conservation of mass (5, 6).
- **Out of scope by design:** moles, mass-to-mass calculations, reaction types, ionic equations.

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style).** "Aluminium reacts with oxygen gas to form aluminium oxide. Balance the equation: Al(s) + O₂(g) → Al₂O₃(s)"
Model answer: 4Al(s) + 3O₂(g) → 2Al₂O₃(s). Check: Al 4 and 4; O 6 and 6. Classic mistake (crossed): "2Al + O₃ → Al₂O₃" (changes the subscript of oxygen; O₃ is ozone, a different substance).

**Attempt 2 (scene 16; original wording, HSC style).** "A student heats 5.00 g of calcium carbonate, CaCO₃, in an open crucible until its mass stops changing. The equation is CaCO₃(s) → CaO(s) + CO₂(g). 2.80 g of calcium oxide remains. (a) Calculate the mass of carbon dioxide released. (b) Explain why the mass in the crucible decreased, with reference to the law of conservation of mass."
Model answer: (a) m(CO₂) = 5.00 − 2.80 = 2.20 g. (b) Mass is conserved: the mass of CaCO₃ equals the mass of CaO plus CO₂. The CO₂ is a gas that escaped from the open crucible, so it was no longer weighed and the recorded mass fell by 2.20 g. Classic mistake (crossed): "mass was destroyed in the reaction".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening (m1-v27) | 100.0 g + 10.0 g = 110.0 g | 1 |
| Copper carbonate (illustrative) | 2.47 g → 1.59 g; CO₂ 0.88 g | 1, 2, 11, 12 |
| Magnesium (illustrative) | 0.24 g → 0.40 g; O₂ 0.16 g | 3, 4, 10, 12, 18 |
| No-gas precipitation, two beakers (illustrative) | 98.42 g before and after | 5 |
| Balanced equations | 2H₂ + O₂ → 2H₂O; 2Mg + O₂ → 2MgO; CuCO₃ → CuO + CO₂ | 6 to 11 |
| A1 | 4Al + 3O₂ → 2Al₂O₃ (Al 4, O 6 each side) | 14, 15 |
| A2 | 5.00 − 2.80 = 2.20 g CO₂ | 16, 17, key note 4 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- CuCO₃: 63.5 + 12.0 + 3 × 16.0 = 123.5; CuO 79.5; CO₂ 44.0; 2.47 × 79.5 ÷ 123.5 = 1.590; 2.47 × 44.0 ÷ 123.5 = 0.880; 2.47 − 1.59 = 0.88.
- Mg: 0.24 × 40.3 ÷ 24.3 = 0.398 (shown 0.40); 0.40 − 0.24 = 0.16.
- CaCO₃: 5.00 × 56.1 ÷ 100.1 = 2.802 (2.80); 5.00 − 2.80 = 2.20.
- Scene 5 (Revision 2): Na₂CO₃ + CaCl₂ → CaCO₃ + 2NaCl conserves atoms (Na 2, C 1, O 3, Ca 1, Cl 2 each side); no gas; display 98.42 g held (illustrative). Slip chip in scene 12: 0.24 + 0.40 = 0.64.
- Atom counts: 2H₂ + O₂ → 2H₂O (H 4, O 2); 2Mg + O₂ → 2MgO (Mg 2, O 2); CuCO₃ → CuO + CO₂ (Cu 1, C 1, O 3); 4Al + 3O₂ → 2Al₂O₃ (Al 4, O 6).

## Memory aid check

- **"Atoms in, atoms out. Change the big number in front, never the small number inside."** Written for this lesson; the first half condenses the cause (scene 6), the second the balancing rule (scene 8). Assumptions checked: "atoms in, atoms out" means the same atoms of each element on both sides, not the same number of particles (2H₂ + O₂ is three molecules on the left, two on the right; scene 9 caption shows this); "the big number in front" is the coefficient. It helps a new case directly (A1). Introduced after the three worked equations.
- **Considered, not used:** "Never touch the subscripts" alone (gives the rule without the reason); the site's "pause and copy" prompt (kept as the key-notes hold).

## Narration length estimate

Revision 2 count (6 November; build parser rules: only lines starting "> ", `**` removed, total = sum of scene strings): **5,975 characters**, 19 scenes (Revision 1's headline 5,993 included 18 joining spaces; scene sum was 5,975, and scene 5's rewrite keeps 412). At 13.3 characters per second the speech is about 449 s; add about 3 s for the heating cross-fades (1), 2 s for the pour and settle (5), 2 s for the particle model (6), 2 s for the scene 13 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 45 s more of the quiet notes hold (about 81 s): **about 530 s**. Reserve trims if the voiced take runs long: scene 4's last sentence (the ash comparison), scene 12's last two sentences (the chips stay), scene 1's first sentence.

## Opening frame and final frame

- **Opening frame:** m1-v27's final frame exactly (Decisions).
- **Final frame (m2-v02 opens on it):** "2Mg(s) + O₂(g) → 2MgO(s)" large at the upper centre, with "2 atoms : 1 molecule : 2 units of MgO" in small grey beneath it; at the left, `y11c-top-pan-balance-v1.png` with `p01-mg-ribbon-v1.png` on the pan and the coded display "0.24 g"; a magnifier circle over the ribbon filled with a dense coded field of pale green atoms, tagged "how many atoms?"; the chip "Next: How does a mole connect particle count with chemical amount?".

## Scene list and build ids

Lesson key `c-y11-m2-v01` (route chem-y11-m2-v01; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v01`.

In order (19 scene headings, all `### N.`): hook, boundary, prediction, magnesium-gain, closed-system, atoms-rearranged, unbalanced, subscript-coefficient, balance-water, balance-magnesium, copper-carbonate, mass-changes, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: m1-v27's final frame into scene 1 by camera continue (the balance stays, the beaker lifts off); 1 to 2 camera continue; 2 to 3 camera continue (crucible to thumbnail); 3 to 4 camera continue; 4 to 5 clear change; 5 to 6 board clear (law banner carries over); 6 to 7 camera continue (the particle model shrinks above); 7 to 8 to 9 camera continue; 9 to 10 board reset; 10 to 11 camera continue; 11 to 12 clear change; 12 to 13 board clear; attempts and feedback card shrink to the top; 17 to 18 board clear; 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 50 s). Review evidence paths: `checks/c-y11-m2-v01-learning-review.md`, `checks/c-y11-m2-v01-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet; scaled uniformly only, never stretched):
- `public/assets/chemistry/y11c-top-pan-balance-v1.png` (1402 × 1122; wide steel pan, blank display; inspected again 6 November): scenes 1, 4, 5, 18 (m1-v27's balance).
- `public/assets/chemistry/y11c-beaker-colourless-solution-v1.png` (inspected 6 November: a clear glass beaker with spout, colourless liquid about half full): scene 5, two copies side by side on the pan.
- `public/assets/chemistry/m6-beaker-v1.png` (empty beaker): scene 5, the emptied beaker after the pour.
- `public/assets/chemistry/y11c-cuco3-crucible-green-v1.png`, `-green-lit-v1.png`, `-black-lit-v1.png` (delivered in the brief 180 crucible set; green inspected 6 November: green powder in a white crucible on a pipeclay triangle, burner unlit): scenes 1, 2, 11.
- `public/assets/chemistry/m5x-unsaturated-beaker-v1.png`: opening frame only.
- `public/assets/chemistry/p01-mg-ribbon-v1.png` (2000 × 2000; coiled ribbon on a dark mat): scenes 3, 18.
- `public/assets/chemistry/m5-g02b-open-crucible-v1.png` (1280 × 1920; white powder in a crucible over a lit burner): scene 4, as magnesium oxide.
- **Inspected, not used:** `c1-burned-magnesium-v1.png` (white ash on a heat mat with tongs; no crucible, can't sit on the balance); `p01-mgo-ash-dish-v1.png` (evaporating dish, wrong vessel); `m6-clip-baking-soda-vinegar-before/fizz-v1.png` (open beaker, can't show a closed system); `m6-marble-chips-acid-v1.png` (open beaker); the root-level `carbon-12-molar-mass-balance.png` (flat infographic style, opaque background).

Need (new plates, Codex):
1. The three copper carbonate crucible plates are now delivered (see Have); confirm their overlay QA before build.
2. `y11c-beaker-white-precipitate-v1.png` (Revision 2, new): scene 5. Essential (the no-gas closed-system beat). Fallback: `y11c-beaker-colourless-solution-v1.png` with a coded white cloud fill (weaker).
3. Withdrawn (Revision 2, brief 180 blocker): `y11c-capped-bottle-chips-v1.png` and `y11c-capped-bottle-fizz-v1.png`. Do not paint them for this video.

Coded: balance display, pour stream, coefficient stepper dials and live readouts, boundary, gas wisps, particle models, atom tiles, tallies, coefficient slots, padlock glyph, magnifier atom field, calculation rows, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v01)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-m2-v01.md`. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo**, ink and watercolour in the house style, no text, labels, numbers, people, hands, faces, backdrop, glow or ground shadow. Never stretch; keep the native aspect ratio.

1. `y11c-cuco3-crucible-green-v1.png` (1280 × 1920 px, the same canvas as `m5-g02b-open-crucible-v1.png`): **edit of that plate**, identical in every line (crucible, pipeclay triangle, tripod, burner position), except: the burner is unlit (no flame, barrel top visible) and the crucible holds a fine pale green powder (basic copper carbonate) instead of the white powder, at the same level.
2. `y11c-cuco3-crucible-green-lit-v1.png` (same canvas): plate 1 with the small blue flame copied exactly from `m5-g02b-open-crucible-v1.png`.
3. `y11c-cuco3-crucible-black-lit-v1.png` (same canvas): plate 2 with the powder black (copper(II) oxide), slightly lower and settled.
4. Withdrawn (Revision 2): the two capped-bottle plates. Not to be painted as a school method.
5. `y11c-beaker-white-precipitate-v1.png` (Revision 2; same canvas as `y11c-beaker-colourless-solution-v1.png`): **edit of that plate**, identical in every line (glass, spout, rim, liquid level), except the liquid is milky white and a soft layer of fine white solid (calcium carbonate precipitate) is settling at the bottom. The two plates must overlay exactly so they cross-fade.

All crucible plates (with `m5-g02b-open-crucible-v1.png`) must overlay exactly so they cross-fade; plate 5 and `y11c-beaker-colourless-solution-v1.png` likewise. Report the overlay check on the paper and dark board backgrounds at about 300 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m2-v01-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the chemistry of every learner-visible claim: open-crucible mass loss and gain by gas crossing the boundary; the no-gas closed-system demonstration (author note b: Na₂CO₃ and CaCl₂ solutions, low hazard, no gas; no pressurised container shown); the law and its cause; subscripts against coefficients; every balanced equation and state symbol.
3. Confirm the memory aid's assumptions (Memory aid check).
4. Confirm the site examples are used exactly (2H₂ + O₂ → 2H₂O; 2Mg + O₂ → 2MgO; CuCO₃ → CuO + CO₂) and that "mole" appears in learner copy only in the handoff and its chip.
5. Confirm both attempt cards are original, carry every needed formula and mass, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the ledger.
7. Confirm no person, hand or face is drawn or requested (the beaker tilts by code).
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script.
10. Confirm the opening frame equals m1-v27's final frame and the final frame matches m2-v02's opening.

## YouTube metadata (draft)

Title: Conservation of Mass and Balancing Equations | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module2/lesson11.sa.html

Heat copper carbonate and the balance reading falls. Burn magnesium and it rises. Is mass really conserved? See how gases crossing the boundary explain both, why atoms being rearranged means mass can't change, why a chemical equation must count the same atoms on each side, how to balance equations by changing coefficients (never subscripts), and how to calculate a mass change. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"relate stoichiometry to the law of conservation of mass in chemical reactions by investigating:
- balancing chemical equations (ACSCH039)
- solving problems regarding mass changes in chemical reactions (ACSCH046)"

Previous: How attractions explain whether a substance dissolves. Next: The mole and Avogadro's constant.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Site notes 1 and 2 (root).** Log in `../site-corrections-chem-y11.md` if accepted (coefficient "number of moles" before the mole, and the "subscript 2 in H₂" slip in "2H₂O"; basic copper carbonate teacher note).
- **2. Closed-system demonstration (resolved, Revision 2).** Brief 180 blocker: the capped bottle is replaced by root decision 3's no-gas fallback (sodium carbonate into calcium chloride on the balance; author note b). The science check confirms the concentration and safety line.
- **3. Copper carbonate model (root).** CuCO₃ numbers with an "illustrative data" tag (author note a).
- **4. Spoken formulae (root, listening).** Four formulae are spoken once each (author note d); names only if the Google voice mangles them.
- **5. Plates (root).** Revision 2: the three crucible edits are delivered; the two bottle plates are withdrawn; one new plate (`y11c-beaker-white-precipitate-v1.png`).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the boundary idea land before the law; is the particle model followable; is "coefficient counts particles" clear without moles; does scene 12's subtraction feel like a use of the law, not a trick), then the science check (author notes a, b) and the Codex error check.
- Checker output (5 November): narration 5,993 characters; per scene (1 to 19): 396, 440, 152, 368, 412, 366, 305, 421, 352, 388, 236, 529, 110, 129, 381, 282, 304, 329, 75; no em dash; every quoted cue found in its scene's narration in spoken order. Scene 12 (529) is the longest stage.
- Revision 2 count (6 November): 5,975 characters (sum of scene strings); per scene (1 to 19): 396, 440, 152, 368, 412, 366, 305, 421, 352, 388, 236, 529, 110, 129, 381, 282, 304, 329, 75. Scene 5's new cues ("balance", "made", "change", "before") checked in its Visual in spoken order; no em dash.

## Revision 2 (6 Nov 2026)

Brief 180 findings (`checks/c-y11-m2-v01-learning-review.md`, `checks/c-y11-m2-v01-science-check.md`):
- **Blocker, scene 5 capped vessel:** resolved by root decision 3's fallback. The capped bottle and its two plates are withdrawn; scene 5 now pours sodium carbonate solution into calcium chloride solution on the balance. A white precipitate forms, no gas is made, nothing crosses the boundary and the reading holds at 98.42 g (illustrative). Narration rewritten within its length (412 characters before and after). Author note b, Numbers, Assets, Codex asset brief, error-check item 2 and Open decision 2 updated. No pressurised container is shown or painted.
- **Should fix, scene 10 cue:** the balanced-equation glow is retied to the end of the fifth sentence ("Two magnesium plus O two makes two M g O"). No speech change.
- **Count method:** headline restated as the sum of scene strings (5,975; Revision 1's 5,993 included joining spaces).

Visual upgrade (`../maths-visual-standard.md`, audit recommendation):
- Decisions: colour roles, type sizes (current line 44 px+, readouts about 52 px, floor 26 px), anchor and simulation lines added.
- Scene 1 already opens on painted plates (balance, green copper carbonate crucible); red hand tag "mass destroyed?" with a pen arrow.
- Hand tags and pen marks in role colours in every teaching scene (2 "gas out", 4 "gas in", 5 "no gas made", "same reading", 6 "same atoms → same mass", 7 "an atom vanished?", 8 "change this" and "never this", 9 "fixes O, breaks H", "count again", 10 "MgO first", "crossed in", 11 "already equal", "crossed out", 12 "gas in: the gain", "gas out: the loss").
- Simulation: scene 9 becomes a full-width coefficient stepper with live atom readouts (52 px) that recount on each dial step; scene 6 holds "atoms: 6" and "mass: unchanged" readouts through the rearrangement.
- Framed answers: 2H₂ + O₂ → 2H₂O (9), 2Mg + O₂ → 2MgO (10), 0.16 g and 0.88 g (12), the aluminium equation (15), 2.20 g (17). Crossed slips: "0.24 + 0.40 = 0.64 g" (12), "burning makes things lighter?" (4), "2Al + O₃" (15), "mass was destroyed" (17).
- Stage cuts: scene 3 is a stage change (copper carbonate to a thumbnail), scene 5 a new centred balance stage, scene 9 a full-width stepper; no set-up now runs past about 80 s.
- Memory aid in a framed card (13, notes); key notes cut to five short bullets (506 characters).
- New plate request: `y11c-beaker-white-precipitate-v1.png` (edit of the existing colourless-solution beaker). Withdrawn: the two capped-bottle plates.
