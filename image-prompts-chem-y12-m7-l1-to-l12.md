# Image prompts — Chemistry Y12 Module 7 (Organic Chemistry), Lessons 1–12

Didactic illustration prompts for the lean image set referenced by the Module 7
lesson JSONs (`src/data/chemistry-y12-m7-l1` … `l12`). One image per asset.

**Workflow:** generate each image below, save to the listed path under
`public/assets/hscscience/generated/`, then register the camelCase name in
`src/assets/index.ts`, then run `npm run validate:lessons`. (Registration and
asset-index edits are intentionally NOT done in this lesson build — these JSONs
reference the names so the wiring is ready once the PNGs exist.)

Each lesson references **at most one image plus at most one coded diagram**. The
coded diagrams (homologous-series table, propyne reaction-flow, ΔHc bar chart,
oxidation summary table) are rendered in-engine by `DiagramRenderer` and need no
image asset — they are noted at the end of this file.

---

## Universal style prefix (apply to every prompt)

Clean, modern, didactic science illustration for a serious HSC Chemistry video.
Concrete and scientifically accurate: real molecular structures drawn as
**ball-and-stick** or **skeletal (line) formulas**, not abstract shapes or
metaphors. Soft volumetric shading, gentle single-source key light from the
upper-left, slight depth, matte surfaces with a hint of hand-touched texture.
Restrained palette: carbon dark slate-grey, hydrogen off-white, oxygen warm red,
nitrogen blue, halogens green/brown, with one calm teal-mint accent for emphasis.

**Conventions:** standard atom colours (C grey, H white, O red, N blue, Cl/Br
green-brown); bonds as clean cylinders (ball-and-stick) or crisp lines
(skeletal); correct geometry (tetrahedral 109.5°, trigonal planar 120°, linear
180°) where shape is the point.

**Transparent background required — export a PNG with a real alpha channel (no
baked background colour, no white fill behind the subject).**

**Do NOT include:** any text, letters, numerals, chemical labels, element
symbols, logos, or captions baked into the image. No cartoon faces. No glossy
plastic-blob look. No photorealistic lab clutter. One clear subject per image.

**Format:** 2048 × 2048 square PNG, transparent, subject centred at ~75% of frame.

---

## Asset 1 — `m7L1HydrocarbonFamilies` (Lesson 1, concept scene "Three families")

**Save to:** `public/assets/hscscience/generated/m7-l1-hydrocarbon-families.png`

**Subject:** Three small ball-and-stick molecules in a clean horizontal row,
all built from the same dark-grey carbon and off-white hydrogen atoms, showing
the progression from saturated to unsaturated:
1. **Ethane** — two carbons joined by a single bond, tetrahedral, six hydrogens.
2. **Ethene** — two carbons joined by a flat double bond (two parallel cylinders),
   trigonal-planar, four hydrogens, visibly flat.
3. **Ethyne** — two carbons joined by a straight triple bond (three cylinders),
   linear, two hydrogens, dead straight.
Equal spacing, identical scale, soft shadow under each so the geometry difference
(tetrahedral → flat → linear) reads at a glance. No text or labels.

---

## Asset 2 — `m7L2FunctionalGroups` (Lesson 2, concept scene "Reading the carbonyl")

**Save to:** `public/assets/hscscience/generated/m7-l2-functional-groups.png`

**Subject:** Three small skeletal/ball-and-stick molecules in a row that share a
carbonyl group (C=O, drawn with a warm-red oxygen double-bonded to carbon),
highlighting what differs around that carbon:
1. **An aldehyde** (e.g. propanal) — the C=O at the end of a short chain, with a
   hydrogen on the carbonyl carbon.
2. **A ketone** (e.g. propanone) — the C=O in the middle, flanked by two carbon
   groups.
3. **A carboxylic acid** (e.g. ethanoic acid) — the C=O at the end with a red
   –O–H hydroxyl on the same carbon.
The shared red carbonyl oxygen subtly emphasised with the teal-mint accent glow
behind each carbonyl carbon. No text.

---

## Asset 3 — `m7L3BranchingSurfaceArea` (Lesson 3, concept scene "Branching lowers BP")

**Save to:** `public/assets/hscscience/generated/m7-l3-branching-surface-area.png`

**Subject:** Two isomers of C5H12 shown as space-filling / chunky ball-and-stick
models side by side to contrast surface area:
- **Left: pentane** — an extended, elongated straight chain lying along a long
  axis, presenting a large flat contact surface (suggest faint contact lines to a
  ghosted neighbour molecule along its length).
- **Right: 2,2-dimethylpropane (neopentane)** — a compact, near-spherical branched
  blob with a central carbon and surrounding methyls, presenting little contact
  surface.
Same atom count, obviously different shape. A subtle teal-mint accent traces the
long contact face of pentane to imply stronger dispersion contact. No text.

---

## Asset 4 — `m7L4SigmaPiBond` (Lesson 4, concept scene "Inside a double bond")

**Save to:** `public/assets/hscscience/generated/m7-l4-sigma-pi-bond.png`

**Subject:** A single ethene molecule (two dark-grey carbons, four off-white
hydrogens, trigonal-planar and flat), drawn to reveal the two parts of the C=C
double bond:
- the **sigma bond** as a solid cylinder lying directly along the carbon–carbon
  axis;
- the **pi bond** as two soft, translucent teal-mint lobes, one above and one
  below the plane of the molecule, clearly sitting outside the axis (the exposed,
  reactive electron density).
The pi-bond lobes gently glowing to read as the reactive, accessible region.
Scientifically faithful sigma/pi depiction. No text or symbols.

---

## Asset 5 — `m7L5BromineWaterTest` (Lesson 5, concept scene "Addition and the bromine water test")

**Save to:** `public/assets/hscscience/generated/m7-l5-bromine-water-test.png`

**Subject:** Two clean test tubes side by side showing the bromine-water test:
- **Left tube:** still orange-brown bromine water with a saturated molecule
  (small ball-and-stick alkane, single bonds only) bubbling through — no change,
  colour stays orange.
- **Right tube:** the same orange liquid turning **colourless/clear** as an alkene
  (small ball-and-stick molecule with a teal-highlighted C=C double bond) reacts,
  bromine adding across the double bond.
Simple, uncluttered glassware, soft shadow, transparent background behind the
tubes. The colour change (orange → clear) is the whole point. No text or labels.

---

## Asset 6 — `m7L6Markovnikov` (Lesson 6, concept scene "Markovnikov's rule")

**Save to:** `public/assets/hscscience/generated/m7-l6-markovnikov.png`

**Subject:** Propene reacting with H–X, shown as a clean skeletal/ball-and-stick
reaction that makes the regiochemistry obvious:
- **Left:** propene with its C=C, clearly showing the terminal =CH2 carbon
  (two hydrogens) and the internal =CH carbon (one hydrogen).
- **An arrow region** (drawn as a simple shape/chevron, NOT a text label) where an
  H–X reagent approaches.
- **Right:** the major product 2-halopropane, with the new H added to the
  terminal carbon (the one that already had more H, glowing teal) and the halogen
  (green sphere) on the more-substituted middle carbon.
Emphasise with the teal accent that the H joins the H-rich carbon. No text,
no element symbols, no equation text — convey it purely through structure.

---

## Asset 7 — `m7L7AlkyneHydration` (Lesson 7, concept scene "Alkyne hydration gives a ketone")

**Save to:** `public/assets/hscscience/generated/m7-l7-alkyne-hydration.png`

**Subject:** A three-stage left-to-right transformation for propyne hydration,
shown as small ball-and-stick structures connected by simple arrow shapes
(arrows as plain chevrons, no text):
1. **Propyne** — a linear C≡C triple bond on a three-carbon skeleton.
2. **The unstable enol** — a C=C double bond bearing a red –O–H hydroxyl directly
   on a double-bond carbon (drawn slightly faded/translucent to read as
   short-lived/unstable).
3. **Propanone** — the stable ketone, a central carbon with a warm-red C=O
   double bond flanked by two methyls.
The faded middle structure and solid end structures make clear the enol rearranges
to the ketone. No text or labels.

---

## Asset 8 — `m7L9HydrogenBonding` (Lesson 9, concept scene "The hydroxyl group")

**Save to:** `public/assets/hscscience/generated/m7-l9-hydrogen-bonding.png`

**Subject:** Two or three ethanol molecules (ball-and-stick, each with its
two-carbon chain and a red O / off-white H hydroxyl) arranged so their –OH groups
face one another, with **hydrogen bonds drawn as short dashed teal-mint lines**
running from a δ+ hydrogen of one molecule to a lone pair on the oxygen of the
next. Make the donor H and acceptor O lone pairs visually distinct (a soft glow on
the donating H, faint lobes on the accepting O). Clearly an intermolecular
attraction network between separate molecules, not bonds within one molecule.
No text, no partial-charge symbols baked in.

---

## Asset 9 — `m7L10RefluxApparatus` (Lesson 10, concept scene "Substitution: aqueous or alcoholic?")

**Save to:** `public/assets/hscscience/generated/m7-l10-reflux-apparatus.png`

**Subject:** A clean, simple reflux setup drawn as a tidy schematic: a
round-bottom flask containing gently boiling liquid on a heat source, with a
vertical condenser fitted on top. Show **water-cooling jacket** on the condenser
(faint teal flow) and small vapour droplets condensing inside the condenser and
running **back down into the flask** (a subtle teal arrow loop, drawn as a curved
shape, NOT a text label, indicating vapour rises and returns). Minimal, modern,
uncluttered lab glassware on a transparent background. The returning-vapour idea
is the teaching point. No text or labels.

---

## Asset 10 — `m7L11Calorimeter` (Lesson 11, concept scene "The calorimetry calculation")

**Save to:** `public/assets/hscscience/generated/m7-l11-calorimeter.png`

**Subject:** A simple spirit-burner calorimeter, drawn as a clean schematic:
a spirit burner with a lit flame underneath a metal can / copper calorimeter that
holds water, with a thermometer dipping into the water. Add small soft arrows
(plain shapes, no text) showing heat rising from the flame into the water, and a
few faint arrows showing **heat escaping sideways to the surroundings** (the
systematic-error idea) in a muted grey, contrasted with the teal arrow into the
water. Clean, minimal apparatus, transparent background. No text, numerals, or
labels.

---

## Coded diagrams (rendered in-engine — no image asset needed)

These are `DiagramConfig` blocks already in the lesson JSON, drawn by
`DiagramRenderer`; listed here for completeness so no PNG is generated for them.

- **Lesson 3** — `table`: first-eight-alkanes reference (name / formula / state /
  boiling point), on the "first eight alkanes" concept scene.
- **Lesson 8** — `flow`: propyne synthesis hub (propyne → propane, cis-propene,
  propanone, 2,2-dibromopropane), on the "propyne: a synthesis hub" concept scene.
- **Lesson 11** — `barChart`: molar enthalpy of combustion vs chain length
  (methanol → pentan-1-ol), on the "energy with chain length" concept scene.
- **Lesson 12** — `table`: oxidation summary (alcohol class / equipment / product /
  colour change), on the "oxidation: class decides everything" concept scene.

---

## Desired NEW coded diagrams (NOT built — would touch shared files)

These organic-specific diagram types are not in the current `DiagramConfig` union
and would require editing `src/lesson/types.ts`, `DiagramRenderer.tsx` and
`validate-lesson.mjs` (out of scope for this build). They are noted as future
candidates that would let several of the images above be replaced by lean,
in-engine vector diagrams:

- **`structuralFormula`** — render a labelled skeletal/structural formula from a
  SMILES-like spec (would serve L1, L2, L4, L6, L7 directly).
- **`reactionMechanism`** / **`additionMechanism`** — show a reagent adding across
  a C=C or C≡C with curved-arrow regiochemistry (would serve L6 Markovnikov, L7
  alkyne addition).
- **`oxidationLadder`** — primary → aldehyde → carboxylic acid, secondary →
  ketone, tertiary → no reaction, with the dichromate colour change (would serve
  L12, richer than the current summary `table`).
