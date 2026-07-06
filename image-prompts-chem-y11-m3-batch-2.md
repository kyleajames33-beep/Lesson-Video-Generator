# Image Prompts — Chemistry Y11 Module 3 (Batch 2: L6, L7–L12, Checkpoints)

Generated as the second asset batch for Module 3. L1–L5 ChatGPT-generated images already exist; this batch covers everything missing or running on generic placeholders.

> **Status before this batch:**
> - L1–L5: ✅ Real ChatGPT-generated assets, transparent backgrounds
> - L6: ❌ JSON references images, none are registered in `src/assets/index.ts`
> - L7–L10: ⚠️ Asset names registered, but mapped to generic placeholders (Beaker, scale, testtube, Atom) — they render the wrong illustration
> - L11–L12: ❌ Same as L6 — JSON references images, nothing registered
> - Checkpoints 1, 2, 3: ❌ Same as L6 — JSON references images, nothing registered

**Total missing/wrong: ~72 images.** Generate via ChatGPT 2.0 using the prompts below.

---

## Universal Style Prefix

Copy at the start of every prompt:

> Clean flat vector illustration, minimalist educational science style, smooth lines, no photorealism, no 3D renders, no shadows, subtle teal (#0d6b52) and amber (#f0a830) accent colors, simple geometric shapes, consistent 2px line weight, professional textbook diagram aesthetic, no text labels inside the image, high resolution. **OUTPUT MUST BE A PNG WITH ALPHA CHANNEL AND A FULLY TRANSPARENT BACKGROUND — NOT WHITE, NOT CREAM, NOT ANY SOLID COLOR.**

(Same workflow as `image-prompts-chem-y11-m3.md`. After generation, drop files into `public/assets/hscscience/chem-y11-m3/lN/` and register in `src/assets/index.ts`.)

---

## Lesson 6 — Indigenous Detoxification

### `l6HookCycad`
> [STYLE PREFIX] A cycad palm with its distinctive cone fruit at the center, framed by Aboriginal-style cross-hatching patterns in the background. The cone is highlighted in amber. Clean flat vector, teal palm fronds, white background area showing a Country-style ochre pattern. Respectful, professional, no caricature.

### `l6ConceptLeaching`
> [STYLE PREFIX] A clear glass container holding sliced cycad pieces submerged in running water — arrows showing water flow in and out. Small toxin molecules drift out with the water current. Teal water, amber toxin molecules with gentle motion lines. Cross-section view, side-on.

### `l6DefinitionProcesses`
> [STYLE PREFIX] Three sequential icons in a horizontal row showing: (1) leaching (water and basin), (2) fermentation (a covered vessel with bubbles), (3) roasting (flame under a vessel). Each icon in a rounded teal-bordered square. Arrows between them.

### `l6WorkedExampleBalancing`
> [STYLE PREFIX] A balance scale illustration with chemical equation symbols on each pan — left pan: H + O atoms (small spheres), right pan: H₂O molecule clusters. Balance is level. Clean flat vector, teal scale, amber atom highlights.

### `l6MisconceptionKnowledge`
> [STYLE PREFIX] A split visual: left shows a stylised modern lab beaker with bubbles, right shows traditional weaving and bush food preparation. An equals sign between them showing they're equivalent processes. Teal lab elements, amber traditional elements, respectful style.

### `l6QuickCheckBalancing`
> [STYLE PREFIX] An unbalanced chemical equation visualised as a tilted balance scale — left pan heavier than right. A question mark hovers above. Clean flat vector, teal scale, amber question mark.

### `l6SummaryDetoxification`
> [STYLE PREFIX] A circular icon set of 5 small badges arranged in a vertical stack: leaching (water drop), fermentation (bubbles), roasting (flame), balancing (scale), respect (open hand). Teal borders, amber inner accents.

---

## Lesson 7 — Metal Activity Series

### `l7HookHarbourBridge`
> [STYLE PREFIX] Stylised cross-section of the Sydney Harbour Bridge structural steel showing a layer of zinc coating on top of steel. Tiny arrows show electrons moving from zinc (sacrificial) to steel. Teal bridge silhouette in background, amber zinc layer.

### `l7DefinitionActivitySeries`
> [STYLE PREFIX] A vertical ladder of metal element squares stacked from "most reactive" at top (K, Na, Mg) in amber to "least reactive" at bottom (Au, Ag) in teal. Each square is a clean rounded rectangle with the element symbol. An arrow runs along the left side pointing downward saying "reactivity decreases".

### `l7MarginaliaSacrificial`
> [STYLE PREFIX] A submerged ship hull with a zinc block attached to it. The zinc block has corrosion lines (dissolving), the hull is pristine. Arrows show electron flow from zinc to hull. Clean flat vector, teal hull, amber zinc block, blue-grey water tint at bottom.

### `l7WorkedDisplacement`
> [STYLE PREFIX] A test tube with copper sulfate solution (blue) and a zinc strip inserted. The zinc is dissolving and copper metal (orange-brown) is forming on it. The solution is fading from blue to colourless. Side-on view, teal tube outline.

### `l7MisconceptionAluminium`
> [STYLE PREFIX] Cross-section of an aluminium block with a thin amber oxide layer on the outside. Arrows from acid bouncing OFF the oxide layer (red, "X" marks). Inside the metal, a small reactive Al atom looks "trapped". Clean flat vector.

### `l7LabFootageAcidReactions`
> [STYLE PREFIX] Three test tubes in a rack, side-on. Each has acid in it with a different metal: zinc (vigorous bubbles), iron (slow bubbles), copper (no reaction). Tubes are arranged left to right by reactivity. Clean flat vector, teal rack, amber bubbles.

### `l7QuickCheckFeCu`
> [STYLE PREFIX] An iron nail submerged in blue copper sulfate solution. Copper-coloured deposits on the nail. Solution fading from blue to pale green (iron sulfate). Side-on view. Teal beaker outline.

### `l7SummaryActivitySeries`
> [STYLE PREFIX] Five circular badges in a vertical stack: ladder (activity series), arrow (displacement), shield (sacrificial), block (passivation), question (predict). Teal borders, amber inner accents.

---

## Lesson 8 — Redox & Oxidation States

### `l8HookBleach`
> [STYLE PREFIX] A clean bleach bottle (white plastic with simplified label "BLEACH") on the left. On the right, a small molecular formula visual showing OCl⁻ ion (one O sphere bonded to one Cl sphere with a negative charge halo). An arrow from bottle to molecule. Teal outlines, amber charge halo.

### `l8ConceptElectronTransfer`
> [STYLE PREFIX] Two atoms side-by-side — one labelled simply "M" (metal), one "X" (non-metal). An electron (small amber sphere) is being passed from M to X, mid-transfer. The atoms have visible electron shells around them. Clean flat vector.

### `l8DefinitionOxidationRules`
> [STYLE PREFIX] A stack of six numbered cards, each showing a rule abstractly via icon: (1) "0" for elements, (2) "±1" for hydrogen, (3) "-2" for oxygen, (4) Group 1 = "+1", (5) Group 2 = "+2", (6) "Σ = 0 or charge" for compounds. Cards are rounded rectangles with teal borders, amber numbers.

### `l8MarginaliaHalfEquation`
> [STYLE PREFIX] Two horizontal strips representing two half-equations. Top strip: oxidation half — atoms losing electrons (electrons drifting away as small amber spheres). Bottom strip: reduction half — atoms gaining electrons. An equals sign in the middle showing they balance. Clean flat vector.

### `l8WorkedExampleMnO4`
> [STYLE PREFIX] A test tube with vivid purple solution (KMnO₄) being decolourised by an added reducing agent. The purple is fading to pale pink (Mn²⁺) at the bottom. Side-on view, dramatic colour gradient.

### `l8MisconceptionBleach`
> [STYLE PREFIX] A diagram showing a fabric stain (amber blob) being bleached. Above the stain, an OCl⁻ ion (no O₂ molecule!) is the active oxidant. A red X struck through an O₂ molecule on the side to show "oxygen NOT required". Clean flat vector.

### `l8QuickCheckCr2O7`
> [STYLE PREFIX] A test tube with vivid orange solution (Cr₂O₇²⁻) on the left, and the same tube turning green (Cr³⁺) on the right with an arrow between. Colour change shown clearly. Teal test tube outlines.

### `l8SummaryRedox`
> [STYLE PREFIX] Five circular badges: (1) "e⁻" with arrow (transfer), (2) OIL RIG letters in a circle, (3) numbered "+/-" (oxidation states), (4) two half-equations stacked, (5) bleach bottle (real-world). Teal borders, amber inner accents.

---

## Lesson 9 — Galvanic Cells

### `l9HookBattery`
> [STYLE PREFIX] A simple AA battery silhouette with its terminals labelled "+" and "-". Inside (cutaway), tiny dots representing electrons flow through an external wire from the negative terminal, through a small lightbulb (glowing amber), to the positive terminal. Clean flat vector.

### `l9DefinitionReductionPotentials`
> [STYLE PREFIX] A vertical ladder of half-equation cards arranged by E° value. Top: most positive (Au³⁺/Au at +1.5 V) in amber. Bottom: most negative (Li⁺/Li at -3.0 V) in teal. The standard hydrogen electrode (SHE) at 0.00 V highlighted in the middle with a horizontal line. Arrow on right side: "stronger oxidising agent ↑".

### `l9WorkedExampleZnCu`
> [STYLE PREFIX] A complete galvanic cell schematic: left beaker has Zn electrode in ZnSO₄ solution, right beaker has Cu electrode in CuSO₄ solution. A salt bridge connects them. An external wire runs from Zn (anode) to Cu (cathode) with a voltmeter showing "+1.10 V". Electrons flow shown as arrows along the wire.

### `l9MisconceptionSaltBridge`
> [STYLE PREFIX] A close-up of just the salt bridge: a U-shaped tube containing ions (Na⁺ amber spheres, NO₃⁻ teal spheres) drifting in opposite directions to maintain charge balance. A red X struck through an electron symbol to indicate "electrons do NOT flow here". Clean flat vector.

### `l9QuickCheckFeNi`
> [STYLE PREFIX] A galvanic cell with Fe electrode in FeSO₄ solution on the left and Ni electrode in NiSO₄ solution on the right. Voltmeter shown with a question mark "+? V" instead of a value. Salt bridge connecting. Side-on view.

### `l9SummaryGalvanicCell`
> [STYLE PREFIX] Five circular badges: (1) galvanic cell schematic (mini), (2) salt bridge U-tube, (3) E°cell formula box, (4) anode/cathode labelled arrows, (5) > 0 V symbol. Teal borders, amber inner accents.

---

## Lesson 10 — Inert Electrodes

### `l10HookCopperAcid`
> [STYLE PREFIX] Two test tubes side-by-side. Left: copper wire in dilute HCl — NO bubbles, no reaction. Right: zinc strip in dilute HCl — vigorous bubbles. A clear contrast between the two. Side-on, teal tube outlines.

### `l10DefinitionAcidReactivity`
> [STYLE PREFIX] A vertical reduction-potential ladder. The 0.00 V line of hydrogen (H⁺/H₂) is highlighted in amber. Metals above 0.00 V (Cu, Ag, Au) are marked "won't react with acid" in green. Metals below (Zn, Mg, Fe) marked "WILL react with acid" in amber.

### `l10WorkedExampleCuZn`
> [STYLE PREFIX] A galvanic cell with an INERT graphite electrode in a solution of Cu²⁺ + Zn²⁺ ions. The graphite electrode is labelled "Pt or C — does not react". Tiny ions are docking at the electrode surface and getting reduced. Cross-section view, teal beaker outline.

### `l10MisconceptionCopperAcid`
> [STYLE PREFIX] A test tube with copper metal in HCl. A label "no reaction" with a green tick. Beside it, a small E° reference: "Cu²⁺/Cu = +0.34 V > H⁺/H₂ = 0.00 V → no reaction". A red X struck through a fizzy bubble pattern to show the common mistake.

### `l10QuickCheckMgSn`
> [STYLE PREFIX] A galvanic cell with Mg electrode on left, Sn electrode on right. Voltmeter showing question mark. Below, two half-equations stacked vertically: Mg²⁺ + 2e⁻ → Mg (E°: -2.37 V) and Sn²⁺ + 2e⁻ → Sn (E°: -0.14 V). Clean flat vector.

### `l10SummaryInertElectrodes`
> [STYLE PREFIX] Five circular badges: (1) graphite/Pt electrode icon, (2) ship with sacrificial anode, (3) H⁺/H₂ reference line, (4) cell with voltmeter, (5) > 0 V symbol. Teal borders, amber inner accents.

---

## Lesson 11 — Collision Theory

### `l11HookGlowStick`
> [STYLE PREFIX] Two glow sticks side-by-side: left in cold water (dim glow, small amber sparkle), right in warm water (bright glow, large amber burst). Background tinted with a gradient suggesting temperature difference. Stylised, no photorealism.

### `l11ConceptBilliards`
> [STYLE PREFIX] Three pairs of molecules colliding at different angles: (1) head-on with enough energy → reaction (amber spark), (2) glancing blow → no reaction (grey X), (3) head-on but low energy → no reaction (grey X). Clean flat vector, teal molecules.

### `l11WorkedExampleEnergyProfile`
> [STYLE PREFIX] An energy profile diagram: x-axis "reaction progress", y-axis "energy". A curve starts at reactants level (low), peaks at a transition state (high), and drops to products level (lower than reactants — exothermic). Ea labelled (peak above reactants), ΔH labelled (products below reactants). Teal curve, amber labels.

### `l11MisconceptionTemperature`
> [STYLE PREFIX] A horizontal split: left shows higher temperature shifting Maxwell-Boltzmann curve right (more molecules above Ea threshold) — RATE increases. Right shows an equilibrium box with arrows — yield depends on K, not just T. An equals sign with a slash through it between rate and yield.

### `l11QuickCheckEnergyProfile`
> [STYLE PREFIX] A blank energy profile diagram: x-axis and y-axis only, with a generic curve drawn. Question marks hovering above the peak and at the products endpoint, asking the student to identify Ea and ΔH. Teal curve.

### `l11SummaryCollisionTheory`
> [STYLE PREFIX] Five circular badges: (1) two molecules colliding, (2) energy profile curve, (3) Ea threshold line, (4) ΔH arrow, (5) thermometer (temperature effect). Teal borders, amber inner accents.

---

## Lesson 12 — Factors Affecting Rate

### `l12HookCooking`
> [STYLE PREFIX] A car silhouette in profile with steam/exhaust from the tailpipe. Inside (cutaway), a small catalytic converter highlighted. A thermometer beside the car at low temperature with a red "cold start" label. Teal car outline, amber thermometer.

### `l12DefinitionFactors`
> [STYLE PREFIX] Four equal-sized icon cards arranged in a 2x2 grid: (1) thermometer (temperature), (2) beaker with high concentration of dots (concentration), (3) crushed solid vs whole solid (surface area), (4) molecule with arrows speeding around (catalyst). Teal borders, amber accents.

### `l12WorkedExampleScenarios`
> [STYLE PREFIX] A rate-vs-time graph with three curves: (a) baseline (teal), (b) higher T (steeper amber), (c) with catalyst (steepest amber). Each curve plateaus at the same final value (same yield, different speed). Axes labelled simply.

### `l12MisconceptionCatalyst`
> [STYLE PREFIX] An energy profile diagram showing two pathways: uncatalysed (high peak, amber line) and catalysed (lower peak — alternative pathway, teal line). Both start and end at the same energy levels. A label clarifies "catalyst provides a different path, not energy".

### `l12QuickCheckMagnesium`
> [STYLE PREFIX] Two test tubes side-by-side. Left: a whole strip of magnesium ribbon in acid (small bubbles). Right: magnesium powder (same total mass) in same acid (vigorous bubbles, foaming). Clear comparison of surface area effect.

### `l12SummaryFactors`
> [STYLE PREFIX] Five circular badges: (1) thermometer up arrow, (2) concentrated beaker, (3) crushed solid, (4) catalyst molecule, (5) Maxwell-Boltzmann curve. Teal borders, amber inner accents.

---

## Checkpoint 1 — Predicting Products (covers L1–L6)

### `cp1ColdOpenScenarios`
> [STYLE PREFIX] A 2x2 grid of four mini reaction scenarios shown as small panels: (1) precipitate forming in a beaker, (2) combustion flame, (3) acid-carbonate fizzing, (4) acid-base mixing with thermometer (no fizz). Each in a teal-bordered square. No labels.

### `cp1DecisionTree`
> [STYLE PREFIX] A flowchart starting at "Two aqueous solutions mixed?" — branching to "yes → precipitation, no → continue". Then "Fuel + O₂?" → "yes → combustion, no → continue". Then "Acid + base?" → "yes → neutralisation/SWC". Clean flat vector, teal boxes with arrows.

### `cp1Walkthrough1Precipitation`
> [STYLE PREFIX] Two beakers being mixed: AgNO₃ and NaCl. The combined beaker shows a thick white precipitate (AgCl) settling. Ions shown around it (Na⁺, NO₃⁻ as spectators).

### `cp1Walkthrough2Combustion`
> [STYLE PREFIX] A balanced hydrocarbon combustion equation: C₃H₈ + O₂ → CO₂ + H₂O with coefficients being filled in step-by-step. Methane/propane molecule on the left, products on the right. Teal molecules, amber coefficients.

### `cp1Walkthrough3Carbonate`
> [STYLE PREFIX] A beaker with sodium carbonate powder. HCl being added via dropper. Vigorous bubbles rising (CO₂). Above the beaker, three product icons floating: NaCl crystal, H₂O droplet, CO₂ gas molecule. Teal beaker outline.

### `cp1ExamPitfalls`
> [STYLE PREFIX] Three warning-style cards in a row showing common errors: (1) wrong NAGSAG application (red X over a "soluble" label on insoluble compound), (2) forgetting CO₂ in acid-carbonate (red X over an "salt + water" answer), (3) unbalanced equation (red X over a coefficient mistake). Teal cards, red warning accents.

### `cp1QuickCheckBossFight`
> [STYLE PREFIX] A 4-scenario quick check grid (like the cold open) but each with a question mark — student must identify the reaction type. Each panel in a rounded rectangle.

### `cp1SummaryClosing`
> [STYLE PREFIX] Five circular badges: (1) decision tree icon, (2) precipitate, (3) combustion flame, (4) bubbles (SWC), (5) thermometer (neutralisation). Teal borders, amber inner accents.

---

## Checkpoint 2 — Metal Reactivity & Electrochemistry (covers L7–L10)

### `cp2ColdOpenScenarios`
> [STYLE PREFIX] A 2x2 grid: (1) zinc + acid bubbling, (2) copper + acid (no reaction), (3) galvanic cell with voltmeter, (4) ship hull with sacrificial anode. Teal-bordered squares.

### `cp2DecisionTree`
> [STYLE PREFIX] A flowchart: "Metal reacts with acid?" → check E° vs H⁺/H₂. "Galvanic cell?" → identify anode/cathode using E°. "Spontaneous?" → check E°cell > 0. Clean flat vector.

### `cp2Walkthrough1Redox`
> [STYLE PREFIX] A redox equation being split into two half-equations vertically. Top: oxidation half-equation with electrons being released (amber). Bottom: reduction half-equation with electrons being captured.

### `cp2Walkthrough2Cell`
> [STYLE PREFIX] A complete galvanic cell with all components labelled abstractly via colour: anode (amber), cathode (teal), salt bridge (purple), wire (grey), voltmeter showing a positive value. Cross-section view.

### `cp2Walkthrough3Acid`
> [STYLE PREFIX] A reduction-potential ladder with the H⁺/H₂ line (0.00 V) highlighted. Above the line: Cu, Ag, Au shown as "no reaction with acid". Below the line: Zn, Mg shown as "reacts with acid". Arrows indicating each direction.

### `cp2ExamPitfalls`
> [STYLE PREFIX] Three warning cards: (1) confusing anode/cathode (red X over swapped labels), (2) using salt bridge for electrons (red X over electron flow in bridge), (3) forgetting to check E° vs H⁺/H₂ (red X over "all metals react with acid").

### `cp2QuickCheckBossFight`
> [STYLE PREFIX] Four mini galvanic cell setups, each with a question mark over the voltmeter. Student identifies which is spontaneous and calculates E°cell. Teal cell outlines.

### `cp2SummaryClosing`
> [STYLE PREFIX] Five badges: (1) activity series ladder, (2) electron transfer arrows (OIL RIG), (3) cell schematic, (4) E°cell > 0 symbol, (5) salt bridge U-tube. Teal borders, amber inner accents.

---

## Checkpoint 3 — Rates & Synthesis (covers L11–L12 + cross-module)

### `cp3ColdOpenScenarios`
> [STYLE PREFIX] A 2x2 grid: (1) two molecules colliding effectively (amber spark), (2) energy profile curve with Ea labelled, (3) Maxwell-Boltzmann distribution shifting right with higher T, (4) catalyst lowering activation energy. Teal-bordered squares.

### `cp3DecisionTree`
> [STYLE PREFIX] A flowchart: "Effective collision?" → energy ≥ Ea AND orientation. "Change rate?" → list 4 factors (T, conc, SA, catalyst). "Catalyst mechanism?" → "alternative pathway, lower Ea". Clean flat vector.

### `cp3Walkthrough1EnergyProfile`
> [STYLE PREFIX] An energy profile diagram with Ea, ΔH, transition state all labelled clearly. Two curves: uncatalysed (taller peak, amber) and catalysed (lower peak, teal — alternative pathway). Same start and end.

### `cp3Walkthrough2Boltzmann`
> [STYLE PREFIX] A Maxwell-Boltzmann distribution chart with two curves: low T (taller peak, narrower) and high T (lower peak, wider). The activation energy threshold marked as a vertical amber line. The area under the curve to the right of Ea is highlighted (more molecules can react at high T).

### `cp3Walkthrough3Factors`
> [STYLE PREFIX] Four mini rate-vs-time graphs in a 2x2 grid showing each factor's effect: (1) high T (steeper), (2) high conc (steeper), (3) high SA (steeper), (4) with catalyst (steepest). Each graph in a teal-bordered square.

### `cp3ExamPitfalls`
> [STYLE PREFIX] Three warning cards: (1) "higher T = more product" (red X — confusing rate with yield), (2) "catalysts give energy" (red X — they provide alternative path), (3) "concentration alone determines rate" (red X — collision frequency depends on multiple factors).

### `cp3QuickCheckBossFight`
> [STYLE PREFIX] A rate-vs-time graph with two unlabelled curves diverging. Student identifies which factor changed between them. Question marks above each curve.

### `cp3SummaryClosing`
> [STYLE PREFIX] Five badges: (1) two molecules colliding, (2) energy profile curve, (3) Maxwell-Boltzmann curves, (4) catalyst pathway, (5) thermometer with arrow up. Teal borders, amber inner accents.

---

## Registration after generation

Each generated PNG drops into `public/assets/hscscience/chem-y11-m3/<lessonId>/<name>.png`. Then add to `src/assets/index.ts` following the L1–L5 pattern. The corresponding `staticFile('assets/...placeholder.png')` lines in `index.ts` should be REPLACED, not added alongside.
