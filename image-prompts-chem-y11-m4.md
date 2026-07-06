# Image Prompts — Chemistry Y11 Module 4 (Drivers of Reactions)

Generated for ChatGPT 2.0 / DALL-E image generation. Covers all 13 lessons + 3 checkpoints (16 compositions, 104 image references total).

> **Module 4 is calculation-heavy** (calorimetry q=mcΔT, Hess's law, bond energies, ΔS°, ΔG° = ΔH° − TΔS°). Many illustrations are formulas, energy profiles, and table-style visuals — not photographic scenes.

---

## Universal Style Prefix

**Copy at the start of EVERY prompt:**

> Clean flat vector illustration, minimalist educational science style, smooth lines, no photorealism, no 3D renders, no shadows, subtle teal (#0d6b52) and amber (#f0a830) accent colors, simple geometric shapes, consistent 2px line weight, professional textbook diagram aesthetic, no text labels inside the image, high resolution. **OUTPUT MUST BE A PNG WITH ALPHA CHANNEL AND A FULLY TRANSPARENT BACKGROUND — NOT WHITE, NOT CREAM, NOT ANY SOLID COLOR.**

**Verification before saving:**
- Open in a viewer that shows a transparent checkerboard. If you see a solid rectangle behind the artwork, the PNG is wrong.
- Programmatic check: byte 25 of the PNG must be **6** (RGBA) or **4** (greyscale + alpha). Color type 2 (RGB) = no alpha, reject.

---

## Workflow

1. Generate each PNG at **1920×1080** (or 16:9).
2. Drop into `public/assets/hscscience/chem-y11-m4/<lessonId>/<assetName>.png` (one folder per lesson — `l1`, `l2`, …, `l13`, `cp1`, `cp2`, `cp3`).
3. Register in `src/assets/index.ts` following the M3 pattern (the asset name in the JSON matches the filename exactly minus `.png`).
4. Run `npm run validate:lessons` to confirm.

**Recommended generation order:**
1. **Pilot a single hook first** — say `m4l1HookPacks` — verify it renders cleanly in the slide before generating the rest.
2. **All hooks (16)** — set the emotional tone of each lesson.
3. **All worked-example + concept/formula visuals (~50)** — the teaching core.
4. **All misconception + quick-check (~30)** — the practice support.
5. **All summary badges (16)** — repetitive, batch-able.

---

## Lesson 1 — Enthalpy & Energy Profile Diagrams

### `m4l1HookPacks`
> [STYLE PREFIX] Two flexible plastic packs side-by-side. Left pack: warm tones, small warmth waves rising, labelled icon of a flame/heater suggesting "exothermic". Right pack: cool tones, small frost crystals on surface, labelled icon of a snowflake suggesting "endothermic". Identical pack shapes — only the colour temperature and surface effect differ. Clean flat vector, no text.

### `m4l1ConceptEnthalpy`
> [STYLE PREFIX] A simple bar-chart-style comparison. Left bar: tall reactant level (teal). Right bar: lower product level (teal). An arrow between them pointing down marked with "ΔH" (drawn as a shape glyph, not literal text). A small abstract bank-statement card to the side suggesting "you only see the change, not the total". Clean flat vector.

### `m4l1FormulaThermochemical`
> [STYLE PREFIX] A horizontal thermochemical equation rendered as connected shape-blocks: a reactants box on the left, an arrow, a products box on the right, and a "ΔH" tag above the arrow. Below the equation, two small operation icons: a "×2" multiplier (scaling) and a curved reverse-arrow (reversing). Clean flat vector, teal blocks, amber operation icons.

### `m4l1WorkedPropane`
> [STYLE PREFIX] A propane molecule (3-carbon chain with hydrogens) on the left, a plus sign, five O₂ molecules (red sphere doublets) stacked. An arrow. On the right: three CO₂ molecules (linear three-sphere) and four H₂O molecules (bent three-sphere). Above the arrow, a small thermometer with downward arrow and "ΔH < 0" glyph. Clean flat vector, white-background-NO, transparent background.

### `m4l1MisconceptionSign`
> [STYLE PREFIX] A diagram of a system (large beaker) and surroundings (room around it). An arrow labelled "heat" leaving the beaker, going to the surroundings (which warm — sun-rays icon). The beaker itself has a downward red arrow on it (system loses energy → ΔH negative). A small "✗" symbol crossing out an upward arrow inside the beaker. Clean flat vector.

### `m4l1QuickCheckProfile`
> [STYLE PREFIX] An energy profile diagram: x-axis "reaction progress", y-axis "energy". A curve starts at reactant level, rises to a peak, drops to a product level slightly lower than reactants. Two labelled arrows: forward Ea (reactants up to peak) and ΔH (reactant level to product level). A question mark hovers above the reverse-direction Ea. Clean flat vector.

### `m4l1SummaryBadges`
> [STYLE PREFIX] Five circular badges in a vertical stack or arc: (1) ΔH equation block, (2) downward arrow on a temperature glyph (exo), (3) upward arrow on a temperature glyph (endo), (4) a system-vs-surroundings boundary, (5) a thermochemical equation with × and ↔ operators. Teal borders, amber accents, transparent background.

---

## Lesson 2 — Calorimetry: Combustion

### `m4l2HookFuel`
> [STYLE PREFIX] Three fuel containers side-by-side suggesting fuel-energy density: a petrol can, an ethanol bottle, a small hydrogen cylinder. Each has a small flame icon above it of different sizes (suggesting different energy density). Clean flat vector, transparent.

### `m4l2ConceptCalorimeter`
> [STYLE PREFIX] A simple calorimeter setup: a beaker of water on a tripod, a small spirit-burner flame underneath, a thermometer plunged into the water. A subtle arrow showing heat flow from flame → water. Clean flat vector, side-on view.

### `m4l2FormulaEquations`
> [STYLE PREFIX] Two stacked equation cards. Top card: q = m c ΔT rendered as connected variable boxes (m for mass, c for specific heat, ΔT for temperature change). Bottom card: ΔHc = −q / n rendered with q and n as separate boxes and a minus-sign glyph. Teal boxes, amber operators.

### `m4l2WorkedEthanol`
> [STYLE PREFIX] An ethanol bottle being burned under a beaker of water on a tripod. The thermometer shows two readings: a cold temperature (start) and a warmer temperature (end), connected by a small upward arrow. Subtle steam rising. Clean flat vector.

### `m4l2MisconceptionQvsH`
> [STYLE PREFIX] Two labelled flasks side-by-side. Left flask labelled "q" (with a joules unit glyph and a small heat icon) — visually highlights "heat in water". Right flask labelled "ΔH" with a kJ/mol unit glyph — highlights "per mole". An "= ?" between them crossed out by a red diagonal line, indicating they're not equal. Clean flat vector.

### `m4l2QuickCheckError`
> [STYLE PREFIX] A simplified calorimeter setup with red wavy arrows leaking heat to the sides (heat loss to surroundings) and a small flame at the base producing yellow smoke (incomplete combustion). A "% error" magnifier icon over the apparatus. Clean flat vector.

### `m4l2SummaryBadges`
> [STYLE PREFIX] Five circular badges: (1) calorimeter mini, (2) q = mcΔT equation card, (3) ÷ n divider, (4) ΔH negative arrow, (5) a small "% error" sign. Teal borders, amber accents.

---

## Lesson 3 — Calorimetry: Neutralisation

### `m4l3HookCup`
> [STYLE PREFIX] A clear plastic cup with two liquids being poured into it from above (one from the left, one from the right). The cup contents glow faintly amber suggesting warmth. A thermometer beside the cup shows a rising reading. Clean flat vector.

### `m4l3ConceptMixing`
> [STYLE PREFIX] Two beakers being tipped into a third, combined beaker. The combined beaker's contents glow gently. Around the combined beaker, a faint dashed rectangle labelled "total mass = both volumes" (drawn as a measurement bracket, not text). Clean flat vector.

### `m4l3WorkedNeutralisation`
> [STYLE PREFIX] A graduated cylinder pouring acid into a beaker, another pouring base, into a third combined beaker with a thermometer. The thermometer shows a clear temperature rise from a labelled starting point. Steam-style warmth waves rising from the combined beaker. Clean flat vector.

### `m4l3MisconceptionTotalMass`
> [STYLE PREFIX] Two side-by-side mini diagrams. Left: an acid beaker with a balance-scale icon next to it labelled "acid only" with a red X. Right: both acid + base combined in a beaker with a balance-scale icon labelled "total mass" with a green tick. Clean flat vector.

### `m4l3QuickCheckH2SO4`
> [STYLE PREFIX] A beaker showing a mixed sulfuric-acid + sodium-hydroxide solution. Small molecule icons floating around: H⁺ (amber) being captured by OH⁻ (teal) to form H₂O (small bent three-sphere). A thermometer beside the beaker showing a temperature rise. Clean flat vector.

### `m4l3SummaryBadges`
> [STYLE PREFIX] Five circular badges: (1) two beakers combining, (2) q = mcΔT card, (3) total-mass bracket, (4) ΔHn negative arrow, (5) limiting reactant icon. Teal borders, amber accents.

---

## Lesson 4 — Calorimetry: Dissolution

### `m4l4HookPacks`
> [STYLE PREFIX] Two flexible packs side-by-side, very similar to L1's hooks but with explicit chemical labels via small molecular formula icons (no readable text): NH₄NO₃ pack on the left (frost crystals, blue/cold tones) and CaCl₂ pack on the right (warmth waves, amber/warm tones). Clean flat vector.

### `m4l4ConceptTugOfWar`
> [STYLE PREFIX] A horizontal tug-of-war rope diagram. Left side: a tightly bound ionic lattice cube being pulled inward (lattice energy, absorbed). Right side: water molecules (small bent three-sphere shapes) surrounding individual ions, pulling outward (hydration energy, released). A central rope-flag indicating which side is winning (slight tilt to one side). Clean flat vector.

### `m4l4WorkedAmmoniumNitrate`
> [STYLE PREFIX] A clear beaker of water with NH₄NO₃ crystals dissolving (small white crystals at the bottom). Frost crystals forming on the outside of the beaker (endothermic — beaker gets cold). A thermometer showing a clear temperature drop. Clean flat vector.

### `m4l4MisconceptionBalance`
> [STYLE PREFIX] A balance scale with two pans. Left pan: a lattice cube labelled with absorbed-energy arrow (upward). Right pan: water-molecule cluster labelled with released-energy arrow (downward). The scale tips toward whichever wins — could be either direction. A "?" floats above the scale. Clean flat vector.

### `m4l4QuickCheckCaCl2`
> [STYLE PREFIX] A beaker of water with CaCl₂ crystals dissolving. The beaker is surrounded by gentle warmth waves (exothermic — beaker gets warm). A thermometer showing a clear temperature rise. Clean flat vector.

### `m4l4SummaryBadges`
> [STYLE PREFIX] Five circular badges: (1) cold and hot packs side by side, (2) tug-of-war scale, (3) lattice cube, (4) water molecule cluster, (5) ΔHsol with ± symbol. Teal borders, amber accents.

---

## Lesson 5 — Activation Energy, Catalysts & Energy Diagrams

### `m4l5HookConverter`
> [STYLE PREFIX] A cross-section of a car catalytic converter — a cylindrical chamber with a honeycomb structure visible inside. Toxic exhaust gases (red molecules) enter the left side, harmless products (teal molecules) exit the right. A subtle "Pt" marker on the honeycomb suggesting platinum catalyst. Clean flat vector.

### `m4l5WorkedProfile`
> [STYLE PREFIX] An energy profile diagram with TWO curves overlaid: an uncatalysed curve (taller peak, amber) and a catalysed curve (lower peak, teal). Both curves start at the same reactant level and end at the same product level. The two peaks clearly differ in height; ΔH is unchanged. Labels on the diagram as shape glyphs (Ea forward, Ea catalysed, ΔH). Clean flat vector.

### `m4l5MisconceptionDeltaH`
> [STYLE PREFIX] Two energy-profile cards side-by-side. Left card: uncatalysed profile with normal reactant and product levels. Right card: an INCORRECT catalysed profile where the product level is lower than the uncatalysed product level (the common mistake). A big red ✗ over the wrong product level, and a green ✓ over the correct one (which would match the uncatalysed level). Clean flat vector.

### `m4l5QuickCheckDiagram`
> [STYLE PREFIX] An energy-profile diagram with a question mark hovering over the product level — student must identify what's wrong. Two curves shown, with product levels at different heights (which would be the error). Clean flat vector.

### `m4l5SummaryBadges`
> [STYLE PREFIX] Five circular badges: (1) reaction peak with Ea label, (2) two overlaid curves (catalyst), (3) horizontal arrow (alternative pathway), (4) ΔH unchanged glyph, (5) tunnel icon (analogy). Teal borders, amber accents.

---

## Lesson 6 — Bond Energy

### `m4l6HookHaber`
> [STYLE PREFIX] An N₂ molecule (two N atoms with a triple bond — three parallel lines between the spheres) in the centre, large and prominent. A small Haber-process industrial silhouette in the background (chimney + pipes). Above the N₂, a small fertiliser-bag icon. Clean flat vector.

### `m4l6ConceptBonds`
> [STYLE PREFIX] A horizontal "bonds in vs bonds out" diagram. Left side: two molecules with bonds drawn explicitly, with a "breaking" arrow showing the bonds being pulled apart (absorbed energy → up-arrow). Right side: new molecules with bonds forming (released energy → down-arrow). Centre: a simple subtraction equation rendered as shape boxes. Clean flat vector.

### `m4l6WorkedHCl`
> [STYLE PREFIX] A horizontal reaction diagram: H₂ (two-sphere H molecule) + Cl₂ (two-sphere Cl molecule) → two HCl molecules. Below the equation, a small calculation panel showing "679 − 864" as connected shape blocks (no readable text), and an output arrow leading to a final answer block. Clean flat vector.

### `m4l6MisconceptionBreaking`
> [STYLE PREFIX] Two side-by-side mini diagrams. Left (wrong): a bond being broken with a "+ energy" arrow OUT of the bond (red ✗). Right (correct): same broken bond with an "+ energy" arrow INTO the bond (green ✓ — breaking absorbs). Below: the reverse pair for forming bonds. Clean flat vector.

### `m4l6QuickCheckHBr`
> [STYLE PREFIX] A horizontal equation: H₂ + Br₂ → 2HBr. Below, two stacked numerical totals: "bonds broken" and "bonds formed", each shown as a connected stack of bond-energy values (shape blocks, no readable digits). A question mark over the final ΔH. Clean flat vector.

### `m4l6SummaryBadges`
> [STYLE PREFIX] Five circular badges: (1) bond breaking with up-arrow, (2) bond forming with down-arrow, (3) Σ broken − Σ formed equation card, (4) magnet-pair analogy icon, (5) ΔH ± sign. Teal borders, amber accents.

---

## Lesson 7 — Enthalpy of Formation

### `m4l7HookApollo`
> [STYLE PREFIX] A simplified Apollo lunar module silhouette in profile, with a small fuel-tank cutaway showing hydrazine molecules inside. An open textbook beside it with a small table of ΔH°f values rendered as data-rows (no readable text). A subtle thrust-flame leaving the engine. Clean flat vector.

### `m4l7ConceptReference`
> [STYLE PREFIX] A horizontal sea-level analogy: a coastline on the left with a clear "0" reference line at sea level (where O₂, H₂, N₂ icons sit). Above sea level, mountains (positive ΔH°f compounds). Below sea level, undersea geography (negative ΔH°f compounds). The waterline serves as the reference. Clean flat vector.

### `m4l7FormulaEquation`
> [STYLE PREFIX] A horizontal equation card: ΔH = Σ ΔH°f(products) − Σ ΔH°f(reactants), rendered as connected shape boxes. Beneath, two stacked tables (rectangles representing rows of formation enthalpies). An arrow from each table feeds into the corresponding sum. Clean flat vector.

### `m4l7WorkedMethane`
> [STYLE PREFIX] A horizontal reaction diagram: CH₄ + 2O₂ → CO₂ + 2H₂O. Each species labelled with its ΔH°f value as a small data tag (shape glyph, not text). A subtraction panel below showing "products sum − reactants sum" as connected shape boxes. Clean flat vector.

### `m4l7MisconceptionZero`
> [STYLE PREFIX] A horizontal lineup of elements (O₂, H₂, N₂, C-graphite) on a "0" reference line. Above each element, a "ΔH°f = 0" tag with a green tick. Beside the lineup, a person about to assign a non-zero value to O₂ with a red ✗ stopping them. Clean flat vector.

### `m4l7QuickCheckWater`
> [STYLE PREFIX] A horizontal equation: 2H₂ + O₂ → 2H₂O(l). Each species labelled with its ΔH°f as a data tag (with H₂ and O₂ tagged as "0"). A question mark over the final ΔH calculation. Clean flat vector.

### `m4l7SummaryBadges`
> [STYLE PREFIX] Five circular badges: (1) sea-level reference icon, (2) ΔH°f = 0 element tag, (3) Σ products − Σ reactants equation, (4) table of values, (5) rocket-thrust icon. Teal borders, amber accents.

---

## Lesson 8 — Hess's Law

### `m4l8HookIndirectPath`
> [STYLE PREFIX] A simple triangle diagram. Reactants on the left vertex, products on the right vertex. A direct path arrow between them (top edge). Two indirect-path arrows going through a "via intermediate" vertex at the bottom. Both paths labelled with "same ΔH" tags. Clean flat vector.

### `m4l8ConceptMoves`
> [STYLE PREFIX] Two operation icons stacked: top — a horizontal equation with a "reverse" curved arrow above it (flipping). Bottom — the same equation with a "×n" multiplier (scaling). Each operation shows what happens to ΔH (flip sign / multiply by n) using shape glyphs. Clean flat vector.

### `m4l8WorkedCO`
> [STYLE PREFIX] Three stacked equations rendered as connected shape blocks: equation 1 (C + O₂ → CO₂), equation 2 (CO + ½O₂ → CO₂, with a "reverse arrow" beside it indicating it's being reversed), and a target sum at the bottom (C + ½O₂ → CO). Cancelled species (CO₂s) shown with a faint strikethrough. Clean flat vector.

### `m4l8MisconceptionRewrite`
> [STYLE PREFIX] A panel showing a chemical formula being modified — e.g. CO being rewritten as CO₂ (with an arrow). A big red ✗ over the modification. Beside it, the allowed operations: reverse (curved arrow) and scale (×n), both with green ticks. Clean flat vector.

### `m4l8QuickCheckNO2`
> [STYLE PREFIX] Two stacked equations involving NO and NO₂. An addition operator (+) between them. A question mark over the result. The species that cancel (2NO) faintly highlighted. Clean flat vector.

### `m4l8SummaryBadges`
> [STYLE PREFIX] Five circular badges: (1) triangle path-independence icon, (2) reverse curved arrow, (3) ×n multiplier, (4) addition sum icon, (5) cancel-species strikethrough icon. Teal borders, amber accents.

---

## Lesson 9 — Hess Applied: Photosynthesis & Respiration

### `m4l9HookCycle`
> [STYLE PREFIX] A circular cycle diagram: a sun on the top-left feeding energy into a plant (top) doing photosynthesis (CO₂ + H₂O → C₆H₁₂O₆ + O₂). The plant's glucose feeds a cell (bottom) doing respiration (C₆H₁₂O₆ + O₂ → CO₂ + H₂O). The arrows form a complete loop. Clean flat vector.

### `m4l9ConceptMirror`
> [STYLE PREFIX] A horizontal mirror-image diagram. Left side: respiration equation rendered as shape blocks with a downward energy arrow (exothermic). Right side: the same equation reversed, with an upward energy arrow (endothermic). A central vertical mirror line. Equal magnitude indicated by matching arrow lengths. Clean flat vector.

### `m4l9WorkedReverse`
> [STYLE PREFIX] Two stacked equations: respiration on top with "ΔH = -2803 kJ/mol" as a value tag. A "reverse" curved arrow leading to photosynthesis on the bottom with "ΔH = +2803 kJ/mol" as a value tag. The flip-sign operation highlighted in amber. Clean flat vector.

### `m4l9MisconceptionLinked`
> [STYLE PREFIX] Two diagrams side-by-side. Left: photosynthesis and respiration drawn as two disconnected reactions with "?" tags (wrong, independent). Right: the same two reactions drawn with a clear reverse-arrow connecting them and matching ΔH magnitudes (correct, linked). Red ✗ on the left, green ✓ on the right. Clean flat vector.

### `m4l9QuickCheckMethane`
> [STYLE PREFIX] Methane combustion equation on top (CH₄ + 2O₂ → CO₂ + 2H₂O) with ΔH value tag "-890". A reverse curved arrow leading to the reverse equation below with a "?" ΔH value tag. Clean flat vector.

### `m4l9SummaryBadges`
> [STYLE PREFIX] Five circular badges: (1) photosynthesis-respiration cycle, (2) mirror-image icon, (3) flip-sign operator, (4) sun symbol (energy source), (5) "same |ΔH|" glyph. Teal borders, amber accents.

---

## Lesson 10 — Hess Applied: Consolidation

### `m4l10HookToolbox`
> [STYLE PREFIX] An open toolbox with three distinct tools visible: a bond-energy ruler (with bond-length markings), a formation-enthalpy table (rolled scroll), and a Hess-equation manipulator (set of arrows). All three tools clearly different but living in the same box. Clean flat vector.

### `m4l10ConceptDecision`
> [STYLE PREFIX] A horizontal flowchart starting with a "data given?" diamond branching into three boxes: (1) bond energies → method icon, (2) ΔH°f table → method icon, (3) thermochemical equations → method icon. All three branches converge at a single "ΔH" answer box on the right. Clean flat vector.

### `m4l10WorkedEthanol`
> [STYLE PREFIX] Ethanol combustion equation across the top (C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O). Below: a small table showing ΔH°f values for each species. To the right: a connected-blocks calculation showing products sum − reactants sum, ending in the final answer block. Clean flat vector.

### `m4l10MisconceptionMethods`
> [STYLE PREFIX] Three columns showing the three methods (bond energies, ΔH°f, Hess from equations), each ending in the same final ΔH value (highlighted in amber). A "✓ same answer" label below. Clean flat vector.

### `m4l10QuickCheckMethod`
> [STYLE PREFIX] A multiple-choice-style panel showing a question scenario at the top, and three method-icon options below (bond energies / ΔH°f / Hess equations). A "?" hovers over the correct choice. Clean flat vector.

### `m4l10SummaryBadges`
> [STYLE PREFIX] Five circular badges: (1) toolbox icon, (2) bond-energy ruler, (3) ΔH°f table icon, (4) Hess equation arrows, (5) "same answer" convergence. Teal borders, amber accents.

---

## Lesson 11 — Entropy

### `m4l11HookGlass`
> [STYLE PREFIX] A horizontal before-and-after diagram. Left: a whole drinking glass standing upright (one configuration). Right: the same glass shattered into many shards (many configurations). An arrow from left to right (with a "smash!" burst). A reverse arrow with a big red ✗ (can't unshatter). Clean flat vector.

### `m4l11ConceptStates`
> [STYLE PREFIX] Three vertical panels showing the same substance as solid (tight ordered lattice), liquid (loose arrangement), and gas (widely spread particles). Arrows pointing right from each to the next, labelled "more entropy" with an upward gradient bar on the right. Clean flat vector.

### `m4l11WorkedPredictions`
> [STYLE PREFIX] Three horizontal mini-equations stacked: (a) H₂O(l) → H₂O(g) with an upward ΔS arrow; (b) 2NO₂(g) → N₂O₄(g) with a downward ΔS arrow; (c) 2H₂(g) + O₂(g) → 2H₂O(l) with a strongly downward ΔS arrow. Each equation labelled with its predicted ΔS sign as a glyph. Clean flat vector.

### `m4l11MisconceptionUniverse`
> [STYLE PREFIX] A diagram of a "system" (small box) inside a larger "surroundings + system = universe" box. The system box has a small downward ΔS arrow inside (decreasing). The surroundings have a larger upward ΔS arrow. The universe overall has a net upward arrow. Labels via glyphs. Clean flat vector.

### `m4l11QuickCheckCaCO3`
> [STYLE PREFIX] A reaction diagram: a calcium carbonate solid block on the left, an arrow, calcium oxide solid + a CO₂ gas molecule on the right. The CO₂ rises as a small gas plume. A question mark over a ΔS sign tag. Clean flat vector.

### `m4l11SummaryBadges`
> [STYLE PREFIX] Five circular badges: (1) disorder/spread-out particles, (2) solid→liquid→gas arrow gradient, (3) gas-mole counter, (4) universe-vs-system boxes, (5) ΔS ± sign. Teal borders, amber accents.

---

## Lesson 12 — Calculating ΔS°

### `m4l12HookFromSign`
> [STYLE PREFIX] A horizontal "sign → number" diagram. Left: a "+/−" sign tag (qualitative). An arrow rightward. Right: a numerical value tag showing "-198.9 J/K/mol" rendered as connected shape blocks (no readable digits — represented by a precise data card). A table icon between them suggesting "look-up". Clean flat vector.

### `m4l12FormulaEquation`
> [STYLE PREFIX] A horizontal equation card: ΔS° = Σ S°(products) − Σ S°(reactants), rendered as connected shape boxes. Below, a small table of S° values (rows of shape-block data). Arrows from the table feeding into the equation. Clean flat vector.

### `m4l12WorkedHaber`
> [STYLE PREFIX] Haber equation across the top: N₂ + 3H₂ → 2NH₃. Each species tagged with its S° value as a small data tag. Below: a calculation panel showing Σ products − Σ reactants as connected shape blocks. Final answer block at the bottom highlighted in amber. Clean flat vector.

### `m4l12MisconceptionS`
> [STYLE PREFIX] Two side-by-side diagrams. Left: ΔH°f convention — elements on a "0" line (with green ticks). Right: S° convention — elements ABOVE the "0" line (with green ticks indicating their values are nonzero). A clear visual contrast between the two reference systems. Clean flat vector.

### `m4l12QuickCheckWater`
> [STYLE PREFIX] Hydrogen combustion to liquid water equation: 2H₂(g) + O₂(g) → 2H₂O(l). Each species tagged with its S° value. A question mark over the ΔS° calculation result. Clean flat vector.

### `m4l12SummaryBadges`
> [STYLE PREFIX] Five circular badges: (1) S° table card, (2) Σ products − Σ reactants equation, (3) "J not kJ" unit tag, (4) elements-nonzero glyph, (5) sign-match-prediction checkmark. Teal borders, amber accents.

---

## Lesson 13 — Gibbs Free Energy

### `m4l13HookGoNoGo`
> [STYLE PREFIX] A horizontal scale-like balance. Left side: ΔH icon (energy change, downward arrow tag). Right side: ΔS icon (disorder change, upward arrow tag). Below, a temperature dial (T). All three feeding into a central "ΔG" arrow that points either down (negative, "GO" with green) or up (positive, "NO-GO" with red). A small switch indicating which way. Clean flat vector.

### `m4l13FormulaGibbs`
> [STYLE PREFIX] A horizontal equation card: ΔG° = ΔH° − T·ΔS°, rendered as connected shape boxes. Each box labelled via icon (ΔH energy block, T temperature dial, ΔS entropy block). Below, a small unit-conversion sub-card showing "J → kJ ÷ 1000" as a conversion icon. Clean flat vector.

### `m4l13WorkedHaber`
> [STYLE PREFIX] A multi-panel layout. Top: ΔH and ΔS values as data tags. Middle: T = 298 K dial and the ΔG = ΔH − TΔS calculation. Bottom: the result ΔG = -33.1 kJ/mol with a green "spontaneous" tag. To the right: a small crossover temperature dial showing T_cross ≈ 465 K. Clean flat vector.

### `m4l13MisconceptionRate`
> [STYLE PREFIX] A horizontal "thermodynamics vs kinetics" diagram. Left: a downhill slope labelled "ΔG < 0 → spontaneous" (with a green checkmark). Right: a clock icon with a snail beside it labelled "but slow" (rate is separate). A "≠" sign between the two. Clean flat vector.

### `m4l13QuickCheckHydrogenation`
> [STYLE PREFIX] Hydrogenation equation: C₂H₄ + H₂ → C₂H₆. Tagged with ΔH and ΔS values. A temperature dial at 298 K. A "?" over the spontaneity result. Clean flat vector.

### `m4l13SummaryBadges`
> [STYLE PREFIX] Five circular badges: (1) ΔG = ΔH − TΔS equation card, (2) unit conversion glyph, (3) kelvin temperature dial, (4) spontaneous/non-spontaneous switch, (5) "spontaneous ≠ fast" warning. Teal borders, amber accents.

---

## Checkpoint 1 — IQ1: Energy Changes (covers L1–L5)

### `m4cp1ColdOpenScenarios`
> [STYLE PREFIX] A 2×2 grid (or three-panel row) of mini-scenarios: (A) a ΔH value tag and an arrow, (B) an ethanol burner under a beaker with a thermometer, (C) an energy profile diagram with Ea and ΔH labels. Each panel in a rounded teal-bordered square. Clean flat vector.

### `m4cp1DecisionTree`
> [STYLE PREFIX] A vertical flowchart starting at a "what data?" diamond, branching into four method icons: sign convention, calorimetry (q=mcΔT), energy profile, catalyst. Each branch arrow labelled with the data cue. Clean flat vector.

### `m4cp1Walkthrough1Sign`
> [STYLE PREFIX] A horizontal thermochemical equation with ΔH value tag. Operations stacked beside it: a "×2" multiplier icon (scaling), and a "reverse" curved arrow (sign flip). Output blocks showing each result. Clean flat vector.

### `m4cp1Walkthrough2Calorimetry`
> [STYLE PREFIX] A calorimeter setup with an ethanol bottle under a beaker. A thermometer with temperature-rise indicator. A calculation block beside showing q = mcΔT → ÷ n → ΔHc. Clean flat vector.

### `m4cp1Walkthrough3Profile`
> [STYLE PREFIX] An energy profile diagram with TWO overlaid curves (uncatalysed taller, catalysed lower). Reactant and product levels matching. Labels for Ea forward (both versions), Ea reverse (both versions), and ΔH (unchanged) as shape glyphs. Clean flat vector.

### `m4cp1ExamPitfalls`
> [STYLE PREFIX] Three warning-style cards in a row: (1) "ΔH > 0 for exo?" with a red ✗ over a thermometer; (2) "q is ΔH?" with a red ✗ over a "÷n" missing-step diagram; (3) "catalyst moves product level?" with a red ✗ over a wrong energy-profile diagram. Teal cards, red warning accents. Clean flat vector.

### `m4cp1QuickCheckBossFight`
> [STYLE PREFIX] A three-part question card: part (a) classify exo/endo with ΔH = +40 tag, part (b) reverse Ea calculation, part (c) catalyst effect. Each part with a question mark hover. Clean flat vector.

### `m4cp1SummaryClosing`
> [STYLE PREFIX] Five badges representing the IQ1 method toolkit: sign tag, calorimeter, energy profile, catalyst icon, decision-tree icon. Teal borders, amber accents.

---

## Checkpoint 2 — IQ2: Enthalpy & Hess (covers L6–L10)

### `m4cp2ColdOpenScenarios`
> [STYLE PREFIX] Three method scenarios in a horizontal row: (A) bond-energy values shown as data tags; (B) a ΔH°f table icon; (C) two stacked thermochemical equations. Each in a teal-bordered square. Clean flat vector.

### `m4cp2DecisionTree`
> [STYLE PREFIX] A vertical flowchart with three method paths converging on a single ΔH answer at the bottom. Each path labelled with its trigger data cue (bond energies / ΔH°f table / equations given). Clean flat vector.

### `m4cp2Walkthrough1BondEnergy`
> [STYLE PREFIX] A horizontal H₂ + Cl₂ → 2HCl equation with bond-energy value tags above each molecule. Below: Σ broken − Σ formed calculation as connected shape blocks. Final answer block. Clean flat vector.

### `m4cp2Walkthrough2Formation`
> [STYLE PREFIX] A methane combustion equation with ΔH°f tags on each species. Below: a Σ products − Σ reactants calculation panel. Highlighted O₂ tag as "0" (element). Final answer block. Clean flat vector.

### `m4cp2Walkthrough3Hess`
> [STYLE PREFIX] Two given thermochemical equations stacked. A "reverse" curved arrow on equation 2. Below: the manipulated equations being added, with cancelled species struck through. Final target equation at the bottom. Clean flat vector.

### `m4cp2ExamPitfalls`
> [STYLE PREFIX] Three warning-style cards: (1) "breaking bonds releases energy" with a red ✗; (2) "O₂ has nonzero ΔH°f" with a red ✗; (3) "rewrite CO as CO₂" with a red ✗. Teal cards, red warning accents. Clean flat vector.

### `m4cp2QuickCheckBossFight`
> [STYLE PREFIX] Two given equations and a target equation card. Operations available (reverse, scale, ½) shown as icons. A question mark over the final ΔH. Clean flat vector.

### `m4cp2SummaryClosing`
> [STYLE PREFIX] Five badges representing the IQ2 method toolkit: bond-energy ruler, ΔH°f table, Hess triangle, sign-flip reverse arrow, "Hess unifies all" convergence icon. Teal borders, amber accents.

---

## Checkpoint 3 — IQ3: Entropy & Gibbs (covers L11–L13)

### `m4cp3ColdOpenScenarios`
> [STYLE PREFIX] Three scenarios in a row: (A) a gas-moles count comparison; (B) an S° table card; (C) a ΔG = ΔH − TΔS equation with a temperature dial. Each in a teal-bordered square. Clean flat vector.

### `m4cp3DecisionTree`
> [STYLE PREFIX] A vertical three-rung ladder labelled: rung 1 "predict ΔS sign", rung 2 "calculate ΔS°", rung 3 "calculate ΔG°". Each rung connected to the next by an upward arrow. At the top: a spontaneity tag (negative ΔG → spontaneous). Clean flat vector.

### `m4cp3Walkthrough1Sign`
> [STYLE PREFIX] Three mini-equations stacked: (a) 2NO + O₂ → 2NO₂ with a downward ΔS arrow; (b) CaCO₃ → CaO + CO₂ with an upward ΔS arrow; (c) H₂O(l) → H₂O(s) with a downward ΔS arrow. Each labelled with its predicted sign as a glyph. Clean flat vector.

### `m4cp3Walkthrough2Calc`
> [STYLE PREFIX] Hydrogen combustion to liquid water equation. Each species tagged with its S° value. Below: a Σ products − Σ reactants calculation panel. Final answer block with a "matches gas-moles prediction" green tick. Clean flat vector.

### `m4cp3Walkthrough3Gibbs`
> [STYLE PREFIX] Haber equation. ΔH and ΔS value tags. A temperature dial set to 298 K. Below: the ΔG = ΔH − TΔS substitution as connected shape blocks. Result shown as ΔG with a green "spontaneous" tag. A small crossover-temperature dial to the side. Clean flat vector.

### `m4cp3ExamPitfalls`
> [STYLE PREFIX] Three warning-style cards: (1) "ΔS always positive?" with a red ✗ over a universe-vs-system icon; (2) "S° of element = 0?" with a red ✗ over an element on a zero line; (3) "spontaneous = fast?" with a red ✗ over a snail with a clock. Teal cards, red warning accents. Clean flat vector.

### `m4cp3QuickCheckBossFight`
> [STYLE PREFIX] An ethene hydrogenation equation with ΔH and ΔS value tags. A temperature dial. Three question marks: ΔS sign, ΔG° value, T_cross. Clean flat vector.

### `m4cp3SummaryClosing`
> [STYLE PREFIX] Five badges representing the IQ3 toolkit: gas-mole counter, S° table, J-to-kJ unit-conversion glyph, ΔG = ΔH − TΔS equation card, "spontaneous ≠ fast" warning. Teal borders, amber accents.

---

## Asset summary

- **L1–L5 (IQ1):** 35 images
- **L6–L10 (IQ2):** 30 images
- **L11–L13 (IQ3):** 19 images
- **cp1–cp3:** 24 images
- **Total: 108 image prompts** (the slight discrepancy from 104 actual JSON refs is because some shared concept images appear once but get re-referenced if you want lesson-specific variants)

If you want to reduce volume, candidate shared assets across the module:
- Generic summary-badges set for any lesson at 100% (drop 16 → 1, saving 15)
- Single "calorimeter setup" image reused across L2, L3, L4 (drop 3 → 1, saving 2)
- Single "energy-profile two-curve" image reused across L1, L5, cp1-walkthrough-3 (drop 3 → 1, saving 2)

That'd cut the batch down to ~89 unique images instead of 108 — if you want, I can refactor the JSONs and `assets/index.ts` to share those keys.
