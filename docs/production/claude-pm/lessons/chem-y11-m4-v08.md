# Year 11 Chemistry M4 V08: Standard enthalpies of formation. How do standard formation enthalpies calculate a reaction enthalpy? (design)

Status: Revision 1 (6 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,364 characters, 19 scenes, about 569 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: eighth Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 77, between `chem-y11-m4-v07` and `chem-y11-m4-v09`; a concept and calculation video. Templates: `chem-y11-m4-v07.md` and `chem-y11-m4-v06.md` (same designer, series layout, diagrams), `math-a12-d10.md` (calculation layout), `phys-y11-fa1-v01.md`, `bio-y11-fa1-v05.md`. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v08` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Sum coefficient-weighted products minus reactants, using the stated standard forms. Distinguish this expression from bond-energy sums."; next handoff: "How can combustion data complete an unknown energy cycle?"). Site lesson read in full (6 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson07.sa.html` (SHA256 `c05ea947313f95c070a4a77060b643ed8da89aa94e2e4cba379ab33e60276d4c`, recomputed, matches the route), sections `l07-calculating-h-rxn-from-h-f-values-title`, `l07-comparing-accuracy-bond-energy-vs-h-f-title`, `l07-worked-examples-title`. Used: the definition of ΔfH° and of standard state (most stable form at 25 °C and 100 kPa; O₂(g), C(graphite), H₂(g)); elements in their standard states = 0 "by definition"; the baseline diagram (elements at zero, reactant and product levels measured from it, ΔH = products − reactants); the method (balanced equation with states, list ΔfH, multiply by coefficients, products minus reactants, check the sign); "Multiply by the coefficient before summing"; the warning that the formula direction is opposite to the bond energy formula; the comparison table (measured values for real substances in real states against averages for gases); worked example 1 unchanged (ethanol combustion, −1366.7 ≈ −1367); worked example 2's values (H₂O₂(l) decomposition, −196.0; rebuilt as attempt 2); drill 1 (methane −890.3); drill 3's NH₃ value; traps 1 to 3 (reversed order; coefficients; O₂ non-zero); the note that "this method is really a Hess's-Law cycle". Not used: the Apollo and hydrazine anchor (site note 3), the thermodynamic stability key term (ΔG is later), the site's letter mnemonics (site note 2), ethyne stretch.

Owner rules applied: as `chem-y11-m4-v07.md` (one learner question; no people, hands or faces; the spirit burner plate only for the callback; height diagrams, tables, equations and calculation rows coded; 3 s prediction; "Pause here to answer." then a 10 s countdown; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Enthalpy and Hess's Law; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ2-02`: "investigate Hess’s Law in quantifying the enthalpy change for a stepped reaction using standard enthalpy change data and bond energy data, for example: (ACSCH037)"
- `C4-IQ2-03` (heat of combustion; v09 and v10 own the rest): "apply Hess’s Law to simple energy cycles and solve problems to quantify enthalpy changes within reactions, including but not limited to:"
  - "heat of combustion"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 44)

**Boundary:** opens on m4-v07's final frame (the carbon two-route diagram with "elements" on the top level, "forming 1 mol of CO from its elements" (−110.5) and "forming 1 mol of CO₂ from its elements" (−393.5), "How do they give a reaction's ΔH?"). Teaches: a prediction (ΔfH of O₂(g) = 0); the definition of standard enthalpy of formation and standard state; elements = 0; formation equations make one mole (fractions allowed) and states matter (H₂O(l) against H₂O(g)); elements as a "sea level" reference; why products minus reactants (a Hess route through the elements); the formula with coefficients; ethanol combustion (−1367, the v03 data value); accuracy compared with calorimetry and bond enthalpies; the contrast with the bond enthalpy order and its reason; traps; memory aid. Not taught: finding an unknown formation enthalpy from combustion data and per-gram comparisons (v09), photosynthesis and respiration cycles (v10), ΔG and stability.

## Decisions

- **Learner question (route wording kept).** "How do standard formation enthalpies calculate a reaction enthalpy?" The answer, in order: each is the enthalpy change for making one mole of a compound from its elements in standard states, with elements at zero (2, 3); that puts every substance on one scale measured from the elements (4); going from reactants back to elements and then to products is a Hess route, so ΔH = Σ products − Σ reactants, each times its coefficient (5, 6).
- **Opening frame (equals `chem-y11-m4-v07.md`'s final frame, same designer).** The carbon two-route diagram: top "C(s) + O₂(g)" tagged "elements"; middle "CO(g) + ½O₂(g)"; bottom "CO₂(g)"; arrows "direct: −393.5 kJ mol⁻¹", "step 1: −110.5", "step 2: −283.0"; slate tags "forming 1 mol of CO from its elements" and "forming 1 mol of CO₂ from its elements"; `c4-icon-carbon-lump-v1.png` small; amber chip "Values like these are tabulated for thousands of compounds. How do they give a reaction's ΔH?"; the "Next" chip, which fades.
- **Prediction (3 s, scene 1; site trap 3).** "ΔfH of O₂(g): positive, zero or negative?" Answer: zero.
- **Definitions (scene 2).** Standard enthalpy of formation, ΔfH°: "the enthalpy change when one mole of a compound forms from its elements, with every substance in its standard state". Standard state: "its most stable form at 25 °C and 100 kPa" (site). Examples O₂(g), C(s, graphite), H₂O(l). Elements in standard states: zero, because forming an element from itself is no change (site: "by definition").
- **Formation equations and states (scene 3).** One mole of product, fractions allowed: ½N₂(g) + 3/2 H₂(g) → NH₃(g), −46.1; 2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l), −277.7. States: H₂O(l) −285.8 against H₂O(g) −241.8 (the 44 kJ from v06 shows up again; one tag, not spoken).
- **Sea-level analogy (scene 4).** Elements at sea level; compounds at heights above or below (most below; ethene above, no number spoken). It continues v07's altitude idea. Assumptions in "Memory aid check".
- **Why products minus reactants (scene 5; site "this method is really a Hess's-Law cycle").** Route: reactants → elements (reverse of their formation: −ΣΔfH(reactants)), elements → products (+ΣΔfH(products)); Hess's law adds them. Shown on the height diagram as a down-and-up dashed route through the sea-level line, beside the direct arrow.
- **Formula (scene 6).** ΔH° = ΣnΔfH°(products) − ΣnΔfH°(reactants), with "n = coefficient" under each sum.
- **Worked example (scenes 7, 8; site worked example 1 unchanged).** C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l). Products 2(−393.5) + 3(−285.8) = −787.0 − 857.4 = −1644.4; reactants −277.7 + 3(0) = −277.7; ΔH = −1644.4 − (−277.7) = −1366.7 ≈ −1367 kJ mol⁻¹. Layout as v07 (task strip, equation strip, a small data table as grouped givens, one row per stage, the double negative written as its own row).
- **Callback (scene 9).** −1367 is the data value the spirit burner fell short of in v03 (−626). One sentence on accuracy: values measured for each pure substance in its real state.
- **Contrast with bond enthalpies (scene 10; route stop).** Bond enthalpies: broken − formed (reactants first) because bond enthalpies are energies to break bonds (costs: in minus out, v06). Formation enthalpies: products − reactants because they are heights on one scale (a change in height is finish minus start). A two-column contrast card, each with its reason; a reversed-order example is crossed in feedback 1.
- **Methane check (scene 11).** −393.5 + 2(−285.8) − (−74.8) = −890.3 kJ mol⁻¹ (site drill 1), against v06's bond estimate −808 for steam. Formation values are for these exact substances in these exact states, so they give the data value; bond enthalpies give an estimate.
- **Traps (scene 12; site traps 1 to 3).** Coefficients; zero for elements; correct state; order.
- **Memory aid:** "Formation enthalpies are heights: products minus reactants." (see "Memory aid check"), scene 13. It pairs with v06's "ΔH = in − out" for bonds.
- **Attempts (original wording, HSC style).** A1 (propane combustion; values given; equation given): products 3(−393.5) + 4(−285.8) = −2323.7; reactants −103.8; ΔH = −2219.9 ≈ −2220 kJ mol⁻¹. Crossed: "+2220 (reactants − products)". A2 (H₂O₂(l) decomposition; site worked example 2's values in new wording, with "explain why O₂ is not given"): −571.6 − (−375.6) = −196.0 kJ mol⁻¹; O₂(g) is an element in its standard state. Crossed: "−98.0 (coefficients ignored)". The equation states "(l)" so the value differs from v05's aqueous −189 for a stated reason (v05 author note a).
- **Mistake scene:** none separate. "ΔfH of O₂ is unknown or non-zero" (1, 2; A2); coefficients ignored (12; crossed in A2); the bond enthalpy order used here (10, 12; crossed in A1); the wrong state of water (3, 12).
- **Handoff (route next: `chem-y11-m4-v09`, "How can combustion data complete an unknown energy cycle?").** Scene 18: where do the formation enthalpies come from? Ethanol cannot be made by mixing carbon, hydrogen and oxygen in a calorimeter, so its −277.7 must be found another way; could combustion data complete that cycle? Final frame: see "Opening frame and final frame" (described exactly for the v09 designer).
- **Site notes (read 6 November; for root to log if accepted; module 4 lesson 7):**
  1. Worked example 1's comparison: "Compare to the bond energy result from L06 (−1234 kJ mol⁻¹)". Lesson 6 does not calculate ethanol; −1234.7 kJ mol⁻¹ is the formation-enthalpy result with H₂O(g) (2(−393.5) + 3(−241.8) + 277.7). Suggest removing the comparison or replacing it with "with H₂O(g) the same method gives −1234.7, showing how much the state of water matters".
  2. Mnemonics: "Formation → f → the f irst thing in the formula is products. Bond energy → b → you b reak bonds in reactants first", then in the formula reference "Bond energy → R eactants first (bonds you R ead from the reactant side first) | Formation enthalpy → P roducts first (P roducts are what you f orm ...)". Two different letter tricks, with broken spacing ("f irst", "R ead"). Suggest one reason-based aid, for example "Bond enthalpies are costs to break: broken − formed. Formation enthalpies are heights: products − reactants."
  3. Real-world anchor: "NASA engineers estimated the Apollo Lunar Module descent engine's energy output from ΔH°f data tables alone" and the Revisit's "the margin for fuel calculations was lives on the Moon" are unsourced claims. Suggest removing the attribution and keeping hydrazine as a chemistry example.
  4. The methane comparison (Explain-it, drill 2, Q7) repeats lesson 6's −674 kJ mol⁻¹ bond-energy result, which depends on C=O = 743 for CO₂ (`chem-y11-m4-v06.md` site note 1). With C=O 804 the bond result is −808 (steam), and the explanation that average values account for a large share of the gap no longer holds.
  - Checked and correct: worked example 1 (−1644.4, −277.7, −1366.7); worked example 2 (−571.6, −375.6, −196.0); drill 1 (−965.1, −74.8, −890.3); drill 3 (−92.2); drill 4 (−622.2); drill 5 and Q6 (−1358.6, +52.4, −1411.0); supported frame (−393.5).
- **Cause chain taught, in order:** (1) forming an element from itself is no change, so elements in standard states are zero (2); (2) each compound's ΔfH° is then its enthalpy measured from the elements, so all substances share one scale (4); (3) breaking reactants into elements reverses their formation, so it contributes −ΣΔfH(reactants) (5); (4) building products from elements contributes +ΣΔfH(products) (5); (5) by Hess's law the route's total equals the reaction's ΔH, so products minus reactants (5); (6) values are per mole, so each is multiplied by its coefficient (6); (7) values are measured for real substances in real states, so the result matches data better than bond averages for gases (9, 11).
- **Entry knowledge:** m4-v01 (thermochemical equations, states matter); m4-v03 (ethanol data value −1367); m4-v06 (bond enthalpy order and its reason; −808 for methane); m4-v07 (Hess's law, reversing, the two carbon values).
- **Learner-visible vocabulary (plain meaning at first use):** standard enthalpy of formation, ΔfH° (2); standard state (2); formation equation (3).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **carbon diagram** (opening, scene 1); **formation cards** (scene 3: equation strips that build one mole of product from element symbols); **height diagram** (scenes 4, 5, 7, 8, 11, 18: a horizontal sea-level line "elements: ΔfH° = 0", compound levels drawn above or below at heights proportional to their values; ethene a short way above; the reactant and product sums as levels; the direct red arrow; the dashed route down to and up from the line in scene 5); **data table** (scenes 7, 8, 14 to 17: a small ΔfH° table, each row lighting when used); **calculation board** (scenes 7, 8, 15, 17); **contrast card** (scene 10: "bond enthalpies" and "formation enthalpies" columns with formula, reason and icon: a blue up arrow labelled "cost to break" against a height bar labelled "height from elements"); **burner callback** (scene 9: `m7-spirit-burner-calorimeter-shield-v1.png` thumbnail with "−626", and a bar comparison −626 against −1367); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v04 to v07):** sea-level line teal; compound levels ink; products sum green-grey, reactants sum grey; ΔH red when negative, blue when positive; coefficients amber; data values slate blue; crossed items red strike.
- **Board layout (constant):** heading top left; height diagram at the left; data table, formula and rows at the right.

Author notes (not learner copy):
(a) Formation enthalpies: NBS tables of chemical thermodynamic properties (Wagman et al., J. Phys. Chem. Ref. Data 11, Suppl. 2, 1982), ΔfH° at 298.15 K, kJ mol⁻¹: CO₂(g) −393.51; H₂O(l) −285.83; H₂O(g) −241.82; CH₄(g) −74.81; C₂H₅OH(l) −277.69; NH₃(g) −46.11; C₃H₈(g) −103.85; H₂O₂(l) −187.78; C₂H₄(g) +52.26 (CRC gives +52.4, the site's value; no number is spoken here). Shown to one decimal place as on the site; C₃H₈ shown −103.8 (the site's convention for −103.85; Codex to confirm the rounding the course prefers).
(b) The HSC data sheet prints no formation enthalpies (`chem-y11-m4-v06.md` author note b), so every card supplies them; scene 2 does not repeat the data-sheet point.
(c) Standard state: the site uses 25 °C and 100 kPa; IUPAC defines the standard state by pressure (1 bar = 100 kPa) and data are tabulated at 298.15 K. The narration's "most stable form at twenty-five degrees and one hundred kilopascals" is the school definition.
(d) ΔH° is written "ΔH°" on cards with the degree sign; the narration says "delta H f" and "delta H". The data sheet's own notation (ΔH° in ΔG° = ΔH° − TΔS°) matches.
(e) Ethanol: the result −1366.7 is the data value (−1366.8 in CRC); per gram comparisons are v09's.
(f) Pronunciations: "delta H f"; "C two H five O H" spoken as "ethanol"; "C three H eight" as "propane"; "H two O two" as "hydrogen peroxide".

Main question: *How do standard formation enthalpies calculate a reaction enthalpy?*
Entry knowledge: m4-v01, m4-v03, m4-v06, m4-v07.
Stops after: definitions; elements zero; one-mole formation equations and states; products minus reactants explained by a Hess route; ethanol and methane; contrast with bond enthalpies; traps.
Handoff: chem-y11-m4-v09, combustion data in an energy cycle.

## Opening frame and final frame

- **Opening frame:** m4-v07's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v09` opens on it; for the v09 designer):** left half: the ethanol height diagram (coded). A teal horizontal line across the left half labelled "elements: C(s), H₂(g), O₂(g); ΔfH° = 0". Below it, a level "C₂H₅OH(l) + 3O₂(g): −277.7 kJ" (grey), and further below a level "2CO₂(g) + 3H₂O(l): −1644.4 kJ" (green-grey). A red arrow from the upper level down to the lower one, labelled "ΔHc = −1367 kJ mol⁻¹". The "−277.7" on the ethanol level is ringed amber with a "?" tag beside it reading "how was this measured?". Right half: an equation strip "2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)  ΔfH° = −277.7 kJ mol⁻¹" with a grey crossed tag "can't be made directly in a calorimeter"; beneath it `m7-spirit-burner-calorimeter-v1.png` small with the slate chip "combustion can be measured". The amber chip "Can combustion data complete the cycle?". The chip "Next: How can combustion data complete an unknown energy cycle?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here are the two carbon numbers from last time. Each one is the enthalpy change for making one mole of a compound from its elements. These values have a name, standard enthalpies of formation, and data tables list them. So here's a prediction. Oxygen gas is already an element. What's the enthalpy of formation of oxygen **gas**?

Visual: opens on m4-v07's final frame; the "Next" chip fades. On "making one mole of a compound from its elements" the two slate tags pulse. On "standard enthalpies of formation" a heading writes: "Standard enthalpies of formation". On "data tables" a coded table slides in at the right with rows "CO(g) −110.5", "CO₂(g) −393.5", "H₂O(l) −285.8", "NH₃(g) −46.1", "C₂H₅OH(l) −277.7", and an empty row "O₂(g) ?". Chips "positive", "zero", "negative". On "gas" the 3 s `Countdown` ring runs.

### 2. definition and the zero
> It's zero. The standard enthalpy of formation, delta H f, is the enthalpy change when one mole of a compound forms from its elements, with every substance in its standard state. That means its most stable form at twenty-five degrees and one hundred kilopascals, like oxygen gas, carbon as graphite, and liquid water. Making oxygen gas from oxygen gas changes nothing, so every element in its standard state has a formation enthalpy of **zero**.

Visual: "zero" ticks and the table's O₂ row fills "0". On "The standard enthalpy of formation" gloss card "standard enthalpy of formation, ΔfH°: the enthalpy change when 1 mol of a compound forms from its elements, all in standard states". On "its most stable form" gloss "standard state: most stable form at 25 °C and 100 kPa"; on "oxygen gas, carbon as graphite, and liquid water" three chips "O₂(g)", "C(s, graphite)", "H₂O(l)". On "Making oxygen gas from oxygen gas" a strip "O₂(g) → O₂(g): no change"; on "zero" rows "C(s) 0", "H₂(g) 0", "N₂(g) 0" join the table.

### 3. formation equations
> A formation equation always makes exactly one mole of the compound, even if that means fractions in front of the elements. For ammonia, it's half a nitrogen plus one and a half hydrogen, minus forty-six point one. For liquid ethanol, it's two carbon, three hydrogen and half an oxygen, minus two hundred and seventy-seven point seven. The state matters too. Liquid water is minus two hundred and eighty-five point eight, but steam is only minus two hundred and forty-one point **eight**.

Visual: on "exactly one mole of the compound" a formation card builds "→ 1 NH₃(g)" first, then on "half a nitrogen plus one and a half hydrogen" the left side fills "½N₂(g) + 3/2 H₂(g)" (amber fractions) and "ΔfH° = −46.1 kJ mol⁻¹". On "For liquid ethanol" a second card "2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)  ΔfH° = −277.7 kJ mol⁻¹". On "The state matters" two rows "H₂O(l) −285.8" and on "steam" "H₂O(g) −241.8" (grey tag "difference 44: condensing, m4-v06"); on "eight" the state symbols ring.

### 4. heights from sea level
> Think of the elements as sea level. Each compound's formation enthalpy is its height above or below that level. Most compounds sit below, because forming them releases energy, but a few, like ethene, sit above. Once every substance has a height measured from the same sea level, any reaction's delta H is just the difference in **height**.

Visual: clear change to the height diagram. On "sea level" a teal horizontal line "elements: ΔfH° = 0". On "its height above or below" the table's compounds drop to levels below the line at proportional depths: "NH₃(g) −46.1", "CO(g) −110.5", "C₂H₅OH(l) −277.7", "H₂O(l) −285.8", "CO₂(g) −393.5". On "a few, like ethene, sit above" a level "C₂H₄(g)" a short way above the line (blue). On "the difference in height" two levels are joined by a red arrow with a height bracket.

### 5. why products minus reactants
> Here's why that works. Imagine an indirect route. First, break the reactants back down into their elements. That's the reverse of forming them, so its delta H is minus the reactants' formation enthalpies. Then build the products from those same elements, which adds the products' formation enthalpies. By Hess's law, that route gives the same delta H as the reaction itself. So it's products minus **reactants**.

Visual: on "an indirect route" a reactants level and a products level on the height diagram with the direct red arrow between them. On "break the reactants back down into their elements" a dashed arrow rises from the reactants level to the sea-level line, labelled "−ΣΔfH°(reactants)" (teal outline, the v07 flip colour). On "build the products" a dashed arrow drops from the line to the products level, "+ΣΔfH°(products)". On "By Hess's law" the two dashed arrows slide end to end beside the direct arrow (tag "m4-v07"); on "reactants" the strip "ΔH = ΣΔfH°(products) − ΣΔfH°(reactants)" writes.

### 6. the formula
> So delta H for a reaction is the sum of the formation enthalpies of the products, minus the sum for the reactants. Each value is per mole of that substance, so multiply it by its coefficient in the equation **first**.

Visual: the formula strip settles at the top right: "ΔH° = Σ n ΔfH°(products) − Σ n ΔfH°(reactants)". On "Each value is per mole" a tag "kJ per mol of that substance"; on "multiply it by its coefficient" the n's light amber with "n = coefficient"; on "first" an example chip "2 CO₂(g): 2 × (−393.5) = −787.0".

### 7. ethanol: the products
> Let's calculate a number you've already met, the enthalpy of combustion of ethanol. Liquid ethanol plus three oxygen gives two carbon dioxide and three liquid water. For the products, it's two times minus three hundred and ninety-three point five, plus three times minus two hundred and eighty-five point eight. That's minus one thousand six hundred and forty-four point **four**.

Visual: board settles into the calculation layout. Task strip "Find ΔHc of ethanol from ΔfH° data". On "Liquid ethanol plus three oxygen" the equation strip "C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l)" with the states ringed. Givens (the data table, lit rows): "C₂H₅OH(l) −277.7; O₂(g) 0; CO₂(g) −393.5; H₂O(l) −285.8 kJ mol⁻¹". On "two times minus three hundred and ninety-three point five" the row "products: 2(−393.5) + 3(−285.8)"; on "four" "= −787.0 + (−857.4) = −1644.4 kJ" (green-grey). On the height diagram at the left the products level draws at −1644.4.

### 8. ethanol: the answer
> For the reactants, ethanol is minus two hundred and seventy-seven point seven, and oxygen is an element, so three times zero. So delta H is minus one thousand six hundred and forty-four point four, minus minus two hundred and seventy-seven point seven. Subtracting a negative means adding, so it's minus one thousand three hundred and sixty-six point seven, which rounds to minus one thousand three hundred and sixty-**seven**.

Visual: on "oxygen is an element, so three times zero" the row "reactants: 1(−277.7) + 3(0) = −277.7 kJ" (grey); the reactants level draws at −277.7 on the height diagram. On "minus minus" the row "ΔH = −1644.4 − (−277.7)"; on "Subtracting a negative means adding" the next row "= −1644.4 + 277.7"; on "minus one thousand three hundred and sixty-six point seven" "= −1366.7 kJ mol⁻¹"; on "seven" "≈ −1367 kJ mol⁻¹" (red, ringed), and the red arrow draws on the height diagram between the two levels.

### 9. the burner's missing energy
> That's the data value our spirit burner fell short of. Formation enthalpies are measured carefully for each pure substance in its real state, so this method is accurate. It's far more reliable than a school calorimeter, which lost over half the heat, and more exact than average bond **enthalpies**.

Visual: on "our spirit burner fell short of" `m7-spirit-burner-calorimeter-shield-v1.png` thumbnail at the lower left with "−626 kJ mol⁻¹ (m4-v03)" and two bars, red −626 and slate −1367. On "each pure substance in its real state" the state symbols on the table rows pulse. On "lost over half the heat" the −626 bar pulses; on "enthalpies" a third small bar "bond estimate (approximate)" appears greyed, tag "m4-v06".

### 10. bonds against formation
> Don't mix this up with bond enthalpies. There, it was bonds broken minus bonds formed, which puts the reactants first, because bond enthalpies are the costs of breaking bonds. Here, it's products minus reactants, because formation enthalpies are heights, and a change in height is always the finish minus the **start**.

Visual: clear change to the contrast card, two columns. Left on "bond enthalpies": "bond enthalpies: ΔH = Σ(broken) − Σ(formed)  reactants first" with a blue up arrow labelled "cost to break" (v06's memory line small: "in − out"). Right on "products minus reactants": "formation enthalpies: ΔH = ΣnΔfH°(products) − ΣnΔfH°(reactants)" with a height bar labelled "height from elements". On "finish minus the start" an arrow on the height bar from "start" to "finish".

### 11. methane, both ways
> For methane, our bond enthalpy estimate was minus eight hundred and eight, and that was for steam. Formation enthalpies give minus eight hundred and ninety point three, which is the data value for liquid water, because each one was measured for that exact substance in that exact **state**.

Visual: rows on cue: "bonds (m4-v06): −808 kJ mol⁻¹, H₂O(g), estimate" (grey); on "minus eight hundred and ninety point three" "ΔfH°: (−393.5) + 2(−285.8) − (−74.8) = −890.3 kJ mol⁻¹, H₂O(l)" (red), with the table row "CH₄(g) −74.8" lighting; on "state" the "(l)" in the equation rings.

### 12. traps
> Four traps. Multiply every value by its coefficient. Write zero for elements like oxygen. Use the right state, because liquid water and steam have different values. And keep the order, products minus reactants. Get it backwards, and you flip the **sign**.

Visual: a four-row checklist writes, each on its cue: "× coefficients" (amber); "elements = 0 (O₂, H₂, N₂, C)" (with a crossed chip "O₂: −393.5?"); "right state: H₂O(l) −285.8, H₂O(g) −241.8"; "products − reactants". On "sign" a crossed chip "−277.7 − (−1644.4) = +1366.7".

### 13. the line to remember
> Here's the line to remember. Formation enthalpies are heights, so delta H is products minus **reactants**.

Visual: the memory line writes large in the explainer's handwriting style: "Formation enthalpies are heights: products − reactants." Beneath it, v06's line small: "Bonds: break in, make out: in − out." On "reactants" the height diagram's red arrow pulses.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. Propane gas burns to form carbon dioxide and liquid water. Calculate the enthalpy of combustion of propane. The formation enthalpies are, propane, minus one hundred and three point eight, carbon dioxide, minus three hundred and ninety-three point five, and liquid water, minus two hundred and eighty-five point eight kilojoules per mole. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Propane burns according to the equation C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l). Use the standard enthalpies of formation below to calculate the enthalpy of combustion of propane. ΔfH° (kJ mol⁻¹): C₃H₈(g) −103.8; CO₂(g) −393.5; H₂O(l) −285.8. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 1 (brief)
> Products: three times minus three hundred and ninety-three point five, plus four times minus two hundred and eighty-five point eight, which is minus two thousand three hundred and twenty-three point seven. Reactants: minus one hundred and three point eight, and oxygen is zero. So delta H is about minus two thousand two hundred and twenty kilojoules per mole. Reactants minus products gives the wrong **sign**.

Visual: card shrinks to the top. Rows on cue: "products: 3(−393.5) + 4(−285.8) = −1180.5 − 1143.2 = −2323.7 kJ"; "reactants: −103.8 + 5(0) = −103.8 kJ"; "ΔHc = −2323.7 − (−103.8) = −2219.9 ≈ −2220 kJ mol⁻¹" (red). On "sign" a chip "−103.8 − (−2323.7) = +2220" fades in and is crossed, note "bond order used". Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. Liquid hydrogen peroxide decomposes into liquid water and oxygen gas. The formation enthalpies are, hydrogen peroxide, minus one hundred and eighty-seven point eight, and liquid water, minus two hundred and eighty-five point eight. Calculate delta H for the equation on the card, and explain why no value is given for oxygen. Pause here to answer.

Visual: `QuestionCard`: "Hydrogen peroxide decomposes: 2H₂O₂(l) → 2H₂O(l) + O₂(g). ΔfH° (kJ mol⁻¹): H₂O₂(l) −187.8; H₂O(l) −285.8. (a) Calculate ΔH for this reaction. (2 marks) (b) Explain why no ΔfH° value is given for O₂(g). (1 mark)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> Products: two times minus two hundred and eighty-five point eight, plus zero for oxygen, minus five hundred and seventy-one point six. Reactants: two times minus one hundred and eighty-seven point eight, minus three hundred and seventy-five point six. So delta H is minus one hundred and ninety-six point zero kilojoules per mole. Oxygen gas is an element in its standard state, so its value is zero. Leaving out the twos gives minus ninety-eight point **zero**.

Visual: card shrinks. Rows on cue: "products: 2(−285.8) + 0 = −571.6 kJ"; "reactants: 2(−187.8) = −375.6 kJ"; "ΔH = −571.6 − (−375.6) = −196.0 kJ mol⁻¹" (red); "(b) O₂(g): element in its standard state, ΔfH° = 0". On "zero" a chip "−285.8 − (−187.8) = −98.0" fades in and is crossed, note "coefficients ignored". Hold about 1 second.

### 18. conclusion and handoff
> So standard formation enthalpies calculate a reaction enthalpy because each one is a height measured from the elements, and by Hess's law, products minus reactants gives the change. But where do those heights come from? You can't make ethanol by mixing carbon, hydrogen and oxygen in a calorimeter, so its formation enthalpy has to be found another way. Ethanol's combustion, though, is easy to measure. Could combustion data complete the **cycle**?

Visual: the memory line returns small at the top. On "a height measured from the elements" the ethanol height diagram returns on the left half: the teal line "elements: C(s), H₂(g), O₂(g); ΔfH° = 0", the level "C₂H₅OH(l) + 3O₂(g): −277.7 kJ", the level "2CO₂(g) + 3H₂O(l): −1644.4 kJ" and the red arrow "ΔHc = −1367 kJ mol⁻¹". On "where do those heights come from" the "−277.7" is ringed amber with the tag "? how was this measured?". On "You can't make ethanol" the right half shows the strip "2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)  ΔfH° = −277.7 kJ mol⁻¹" with a grey crossed tag "can't be made directly in a calorimeter". On "easy to measure" `m7-spirit-burner-calorimeter-v1.png` small beneath it with the slate chip "combustion can be measured". On "cycle" the amber chip "Can combustion data complete the cycle?" and the chip "Next: How can combustion data complete an unknown energy cycle?" write. Hold about 2 seconds. This is the final frame (m4-v09 opens on it).

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Standard enthalpy of formation, ΔfH°: the enthalpy change when 1 mol of a compound forms from its elements, all in standard states (most stable form at 25 °C and 100 kPa). Elements in standard states: ΔfH° = 0.
2. ΔH° = Σ n ΔfH°(products) − Σ n ΔfH°(reactants), n = coefficient. (A Hess route through the elements.)
3. States matter: H₂O(l) −285.8, H₂O(g) −241.8 kJ mol⁻¹. Example: C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l), ΔH = −1367 kJ mol⁻¹.
4. Bond enthalpies: broken − formed (costs to break). Formation enthalpies: products − reactants (heights). Formation data give accurate values; bond enthalpies give estimates.

Memory aid (large, on the notes screen): *Formation enthalpies are heights: products − reactants.*

At the end the notes cross-fade back to scene 18's final frame.

## Teaching checks

- **Does it explain causes?** Why elements are zero (2); why formation equations make one mole (3, from the definition); why products minus reactants (5: Hess route through elements); why coefficients (6); why the method is accurate (9, 11); why the bond order differs (10).
- **Misconceptions addressed:** O₂ has a non-zero or missing value (1, 2; A2); coefficients ignored (12; crossed in A2); bond order used (10, 12; crossed in A1); wrong state of water (3, 12); the double negative (8).
- **One idea at a time:** prediction (1), definition (2), formation equations (3), heights (4), why (5), formula (6), worked example (7, 8), accuracy (9), contrast (10), methane (11), traps (12), memory line (13).
- **Video makes it easier:** compounds dropping to heights below a sea-level line (4); a dashed route up to the line and down again, sliding beside the direct arrow (5); levels drawing on the height diagram as each sum is spoken (7, 8); a two-column contrast with a cost arrow against a height bar (10).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 27 s and 32 s.
- **Avoided double teaching:** Hess's law and reversing (m4-v07, used in scene 5); bond enthalpy method (m4-v06, contrasted only); thermochemical equations and states (m4-v01).
- **Syllabus coverage:** `C4-IQ2-02` Hess's law with standard enthalpy change data (5 to 8, 11, A1, A2); `C4-IQ2-03` heat of combustion (7 to 9, 11, A1). Energy cycles with combustion data continue in v09.
- **Out of scope by design:** finding ΔfH° from combustion data, per-gram comparisons (v09); photosynthesis and respiration (v10); stability and ΔG.

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: ΣnΔfH°(products) = 3(−393.5) + 4(−285.8) = −1180.5 + (−1143.2) = −2323.7 kJ (1 mark). ΣnΔfH°(reactants) = −103.8 + 5(0) = −103.8 kJ (1 mark). ΔHc = −2323.7 − (−103.8) = −2219.9 ≈ −2220 kJ mol⁻¹ (1 mark). Classic mistake (crossed): +2220 kJ mol⁻¹ (reactants − products).

**Attempt 2 (scene 16; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: (a) ΣnΔfH°(products) = 2(−285.8) + 0 = −571.6 kJ; ΣnΔfH°(reactants) = 2(−187.8) = −375.6 kJ (1 mark); ΔH = −571.6 − (−375.6) = −196.0 kJ mol⁻¹ (1 mark). (b) O₂(g) is an element in its standard state, so its standard enthalpy of formation is zero by definition (1 mark). Classic mistake (crossed): −98.0 kJ mol⁻¹ (coefficients ignored).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening (v07) | −110.5; −283.0; −393.5 | opening, 1 |
| ΔfH° values (NBS) | CO −110.5; CO₂ −393.5; H₂O(l) −285.8; H₂O(g) −241.8; NH₃ −46.1; C₂H₅OH(l) −277.7; CH₄ −74.8; C₃H₈ −103.8; H₂O₂(l) −187.8; elements 0 | 1 to 4, 7, 8, 11, 12, 14 to 17 |
| Ethanol | products −787.0 − 857.4 = −1644.4; reactants −277.7; −1366.7 ≈ −1367 | 7 to 9, 18, final frame |
| Callback | burner −626 (v03) | 9 |
| Methane | bonds −808 (steam, v06); ΔfH° −890.3 | 11 |
| Order slip | +1366.7 | 12 |
| A1 | −1180.5 − 1143.2 = −2323.7; −103.8; −2219.9 ≈ −2220; slip +2220 | 14, 15 |
| A2 | −571.6; −375.6; −196.0; slip −98.0 | 16, 17 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 November); Codex to re-check.

- 2(−393.5) + 3(−285.8) = −787.0 − 857.4 = −1644.4; −1644.4 − (−277.7) = −1366.7.
- −393.5 + 2(−285.8) − (−74.8) = −890.3.
- 3(−393.5) + 4(−285.8) = −1180.5 − 1143.2 = −2323.7; −2323.7 + 103.8 = −2219.9 (NBS unrounded −2220.0).
- 2(−285.8) − 2(−187.8) = −571.6 + 375.6 = −196.0; slip −285.8 + 187.8 = −98.0.
- Site check: 2(−393.5) + 3(−241.8) + 277.7 = −1234.7 (site note 1).

## Memory aid check

- **"Formation enthalpies are heights: products − reactants."** Meaning: each ΔfH° is a substance's enthalpy measured from the elements (zero), so a reaction's ΔH is the final height minus the starting height. Assumptions checked: all values must be on the same reference (standard states, 298 K), which is how tables are built (author note c); heights are scaled by coefficients because a height here is per mole (scene 6); "heights" need not be below zero (ethene is above, scene 4). It pairs with v06's "in − out" and gives a reason for each order instead of a letter trick (site note 2).
- **Considered, not used:** the site's letter mnemonics (site note 2); "PMR: products minus reactants" (no reason attached, easy to swap with the bond order).

## Narration length estimate

Revision 1 count (6 November; build parser rules): **6,364 characters**, 19 scenes (per scene: 325, 440, 483, 335, 408, 213, 376, 423, 295, 315, 286, 251, 102, 370, 407, 357, 458, 445, 75). At 13.3 characters per second the speech is about 478 s; add about 10 s of settling (the height diagram in 4, the route in 5, the levels in 7 and 8), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold: **about 569 s**.

## Scene list and build ids

Lesson key `c-y11-m4-v08` (route chem-y11-m4-v08; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v08`.

In order (19 scene headings, all `### N.`): hook-prediction, definition-zero, formation-equations, heights, why-products-minus-reactants, formula, ethanol-products, ethanol-answer, burner-callback, bonds-vs-formation, methane-both-ways, traps, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m4-v07's final frame into scene 1 by camera continue (the table slides in beside the diagram); 1 to 2 camera continue; 2 to 3 camera continue; 3 to 4 clear change to the height diagram; 4 to 5 camera continue; 5 to 6 camera continue; 6 to 7 camera continue (calculation layout beside the diagram); 7 to 8 camera continue; 8 to 9 camera continue; 9 to 10 clear change to the contrast card; 10 to 11 camera continue; 11 to 12 clear change; 12 to 13 clear change; attempts and feedback card shrink to the top; 17 to 18 board clear; 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v08-learning-review.md`, `checks/c-y11-m4-v08-science-check.md`.

## Assets

Have (inspected 6 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/c4-icon-carbon-lump-v1.png`: opening only (from v07's final frame).
- `public/assets/chemistry/m7-spirit-burner-calorimeter-shield-v1.png`: scene 9 (thumbnail).
- `public/assets/chemistry/m7-spirit-burner-calorimeter-v1.png`: scene 18, final frame.

Need: no new plates.

Coded: data table, formation cards, height diagram with sea-level line and route arrows, bars, contrast card, checklist, calculation rows, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the ΔfH° values against the NBS tables (author note a), including the rounding of C₃H₈ (−103.85).
3. Confirm the site content used matches `module4/lesson07.sa.html` (definitions, elements zero, baseline diagram, method, comparison table, worked examples 1 and 2, drills 1 and 3, traps 1 to 3) and log the four site notes.
4. Confirm every equation is balanced with states, and each formation equation makes one mole of product.
5. Confirm both attempt cards are original (A2 reuses the site's values in new wording), carry every needed fact, and show nothing answer-bearing.
6. Confirm the syllabus quotes match `chem-2017-y11.json`.
7. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
8. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
9. Confirm the opening frame equals m4-v07's final frame, and send the final frame description to the `chem-y11-m4-v09` designer (written in parallel) so v09 opens on it exactly.

## YouTube metadata (draft)

Title: Standard Enthalpies of Formation: Products Minus Reactants, and Why | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Data tables list one number per compound: its standard enthalpy of formation. Learn what it means, why elements are zero, why states matter, and why a reaction's ΔH is products minus reactants (a Hess's law route through the elements). Calculate the enthalpy of combustion of ethanol, see why this method beats bond enthalpies for accuracy, and never mix up the two formulas again. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"investigate Hess’s Law in quantifying the enthalpy change for a stepped reaction using standard enthalpy change data and bond energy data, for example: (ACSCH037)"
"apply Hess’s Law to simple energy cycles and solve problems to quantify enthalpy changes within reactions, including but not limited to: heat of combustion"

Previous: Why can we add reaction enthalpies along different paths? Next: How can combustion data complete an unknown energy cycle?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Final frame for v09 (root).** The final frame poses "how was ethanol's −277.7 measured? Can combustion data complete the cycle?", which assumes v09 finds a formation enthalpy from combustion data (the site's lesson 10 section "calculating ΔHc via Hess's law and ΔHf" and the route's "draw and combine a simple combustion cycle"). If the v09 designer's opening uses a different case, root reconciles v09's scene 1 to this frame (or this video's scene 18 last three sentences and chip change, about 200 characters).
- **2. Heights analogy (learning review).** "Heights" for enthalpies risks students thinking absolute enthalpy is known. The sea-level line is labelled "elements: ΔfH° = 0" (a chosen reference), and v01 already said absolute enthalpy cannot be measured. Check in review.
- **3. Ethene above sea level (science check).** Shown without a number (+52.3 NBS; +52.4 CRC and site).
- **4. Length (learning review).** Reserve cut: scene 11 (methane both ways, about 280 characters), since scene 9 already makes the accuracy point.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the route through the elements in scene 5 make "products minus reactants" feel derived; is the contrast in scene 10 enough to stop students mixing the two orders), then the science check and Codex error check.
- Checker output (6 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
