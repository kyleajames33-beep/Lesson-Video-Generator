# Image generation prompts — Chemistry Year 12, Module 7 (Organic Chemistry), Lessons 13–23

Twenty-two assets, two per lesson (one hook image + one concept visual). All
organic-structure visuals are concrete and didactic. **Every image must be a
transparent PNG with a real alpha channel (no background fill, not white).** No
text/labels baked into the image unless explicitly stated — the slide adds its
own captions. Aspect roughly 4:3 landscape, designed to read on a dark slide.

House style: clean flat vector, generous line weight, restrained palette
(deep teal #0f766e, plum #6d28d9, rose #be185d, amber #b45309, ink #1c1917),
soft drop shadow off. Match the "gold standard" dark/doodled HSCScience look:
confident hand-drawn-but-tidy chemistry diagram, not a photo, not 3D render.

For each asset: **registry key** (camelCase — to be added to `src/assets/index.ts`
later by the maintainer) and **save path** under `public/`.

NOTE TO MAINTAINER: these 22 keys are referenced by the new lesson JSON but are
NOT yet registered in `src/assets/index.ts` (shared file — left untouched per
build constraints). Register each key → save path before rendering.

---

## Lesson 13 — Aldehydes & Ketones

### `m7l13HookVanillaRaspberry`
Save: `public/assets/hscscience/chem-y12-m7/l13/hook-vanilla-raspberry.png`
Prompt: A split-scene flat illustration contrasting two flavour sources. On the
left, a vanilla pod and a single vanilla flower. On the right, a small cluster
of raspberries. Between them, a clean test tube showing a bright silver mirror
coating its inner wall on the vanilla side, and an unchanged clear test tube on
the raspberry side. Mood: curious, "same group, different result". Flat vector,
teal and rose palette. Transparent PNG, alpha channel, no text.

### `m7l13CarbonylComparison`
Save: `public/assets/hscscience/chem-y12-m7/l13/carbonyl-comparison.png`
Prompt: A didactic side-by-side skeletal structure comparison of propanal and
propanone. LEFT (propanal, aldehyde): CH3-CH2-CHO drawn with the terminal
carbonyl carbon clearly showing its C=O double bond AND its attached hydrogen,
with that H subtly highlighted by a small circle to mark "H on carbonyl carbon".
RIGHT (propanone, ketone): CH3-CO-CH3 drawn with the internal carbonyl carbon,
C=O pointing up, flanked by two methyl groups, and a small crossed-out circle
where an H would be to mark "no H on carbonyl carbon". Bonds clean and straight,
oxygen atoms in red, carbons in ink. Plum accent for the aldehyde, rose for the
ketone. This is a teaching diagram of two concrete molecules. Transparent PNG,
alpha channel, NO words/labels (the slide labels them).

---

## Lesson 14 — Carboxylic Acids

### `m7l14HookWineVinegar`
Save: `public/assets/hscscience/chem-y12-m7/l14/hook-wine-vinegar.png`
Prompt: A flat illustration of a wine glass on the left and an open bottle of
vinegar on the right, with a stylised thermometer between them showing a clearly
higher reading on the vinegar side. Subtle arrow from wine to vinegar suggesting
transformation. Warm amber and deep red palette. Conveys "heavier molecule yet
boils much higher". Flat vector, transparent PNG, alpha channel, no text.

### `m7l14EthanoicAcidDimer`
Save: `public/assets/hscscience/chem-y12-m7/l14/ethanoic-acid-dimer.png`
Prompt: A didactic structural diagram of the ethanoic acid hydrogen-bonded dimer.
Two ethanoic acid molecules (CH3COOH) drawn facing each other in mirror image,
each carboxyl group (-COOH) clearly showing one C=O double bond and one O-H
single bond. Between them, TWO parallel dashed hydrogen bonds forming the
characteristic eight-membered cyclic ring (O-H...O on each side). Oxygens red,
hydrogens of the O-H groups marked, methyl groups as CH3. Highlight the two
dashed H-bonds in blue. Concrete molecular teaching diagram. Transparent PNG,
alpha channel, no explanatory text (only the atom symbols within the structure).

---

## Lesson 15 — Esters

### `m7l15HookFruitEsters`
Save: `public/assets/hscscience/chem-y12-m7/l15/hook-fruit-esters.png`
Prompt: A flat illustration grouping a pineapple, a banana, and a halved avocado,
with light fragrance swirls rising from the fruit. Suggests "these flavours and
this fat are all esters". Bright, appetising flat vector, teal and gold palette.
Transparent PNG, alpha channel, no text.

### `m7l15EsterLinkage`
Save: `public/assets/hscscience/chem-y12-m7/l15/ester-linkage.png`
Prompt: A didactic structural diagram of ethyl ethanoate (CH3COOC2H5) showing the
ester linkage. Draw the full skeletal structure with the carbonyl C=O and the
single-bond ester oxygen clearly distinct. Use a dashed vertical "cut line"
through the single-bond oxygen that visually separates the molecule into two
shaded halves: the LEFT half (acid-derived, the CH3-C(=O)- part) tinted rose,
and the RIGHT half (alcohol-derived, the -O-CH2-CH3 part) tinted teal, with the
ester oxygen sitting on the boundary. Oxygens red. This teaches "cut at the
single-bond O; alcohol part vs acid part". Concrete molecule. Transparent PNG,
alpha channel, only atom symbols within the structure, no other text.

---

## Lesson 16 — Amines & Amides

### `m7l16HookAmines`
Save: `public/assets/hscscience/chem-y12-m7/l16/hook-amines.png`
Prompt: A flat conceptual illustration split between "decay and life": on one
side a stylised wilting/decay motif (a few muted wavy stink lines over a dark
leaf), on the other side a clean adrenaline-rush motif (a stylised lightning
bolt or a heart with a pulse line). Suggests amines span foul-smelling
decomposition compounds and vital biological molecules. Muted plum and teal
palette. Flat vector, transparent PNG, alpha channel, no text.

### `m7l16AmineVsAmide`
Save: `public/assets/hscscience/chem-y12-m7/l16/amine-vs-amide.png`
Prompt: A didactic side-by-side structural comparison of ethanamine and
ethanamide, focused on the nitrogen lone pair. LEFT (ethanamine, CH3CH2NH2): the
nitrogen drawn with its lone pair shown as a clear pair of dots in a small
highlighted bubble, with a curved arrow suggesting the lone pair is "free" and
available. RIGHT (ethanamide, CH3CONH2): the nitrogen drawn directly bonded to a
carbonyl (C=O), with the nitrogen lone pair shown delocalising into the C=O via a
curved resonance arrow and a faint shaded cloud spanning N and C=O, marking it as
"tied up". Nitrogen blue, oxygen red, carbons ink. This teaches free vs
delocalised lone pair. Concrete molecules. Transparent PNG, alpha channel, only
atom symbols, no other text.

---

## Lesson 17 — Soaps, Detergents & Saponification

### `m7l17HookGreaseWater`
Save: `public/assets/hscscience/chem-y12-m7/l17/hook-grease-water.png`
Prompt: A flat illustration of a greasy dinner plate with a few amber grease
blobs, beside a water droplet, with a small bar of soap between them and a subtle
arrow showing the grease lifting away. Conveys "soap bridges grease and water".
Clean flat vector, teal and amber palette. Transparent PNG, alpha channel, no
text.

### `m7l17Micelle`
Save: `public/assets/hscscience/chem-y12-m7/l17/micelle.png`
Prompt: A didactic cross-section of a soap micelle. A circular arrangement of
soap molecules drawn as classic "lollipop" shapes: each molecule is a small
filled circle (the ionic hydrophilic head) with a wavy line tail (the
hydrophobic hydrocarbon tail). Heads point OUTWARD into the surrounding water
(suggested by a pale blue ring), tails point INWARD toward a central non-polar
core containing a single amber grease droplet. Heads coloured teal, tails ink,
core amber. This teaches the amphipathic micelle structure trapping grease.
Transparent PNG, alpha channel, no text labels.

---

## Lesson 18 — Organic Acids & Bases

### `m7l18HookUnknownSolutions`
Save: `public/assets/hscscience/chem-y12-m7/l18/hook-unknown-solutions.png`
Prompt: A flat illustration of three identical unlabelled laboratory bottles of
clear colourless solution in a row, each with a blank label tag, and a strip of
red litmus paper resting beside them. Conveys "three unknown acids to identify".
Clean lab aesthetic, flat vector, cool neutral palette with a single red litmus
accent. Transparent PNG, alpha channel, no text.

### `m7l18ConjugateBaseStability`
Save: `public/assets/hscscience/chem-y12-m7/l18/conjugate-base-stability.png`
Prompt: A didactic three-panel comparison of conjugate-base charge delocalisation,
left to right in order of decreasing stability. PANEL 1 (carboxylate, RCOO-): the
two oxygens drawn equivalent with the negative charge shown smeared evenly across
both via a curved double-headed resonance arrow and a shaded cloud spanning both
oxygens — most stable. PANEL 2 (phenoxide, C6H5O-): a benzene ring with an O-
attached, the negative charge shown partly spreading into the ring with faint
delocalisation arrows — partly stable. PANEL 3 (alkoxide, RO-): a single oxygen
with the negative charge tightly localised as one bold dot on that one oxygen, no
resonance — least stable. Oxygens red, charge clouds in a translucent accent.
This teaches "more delocalisation = more stable base = stronger acid".
Transparent PNG, alpha channel, only atomic symbols/charges, no sentence text.

---

## Lesson 19 — Organic Reaction Pathways

### `m7l19HookSynthesisRoute`
Save: `public/assets/hscscience/chem-y12-m7/l19/hook-synthesis-route.png`
Prompt: A flat illustration of a winding dotted route/path on a stylised map,
starting at a small gas-cloud icon (labelled by shape only, representing ethene)
and ending at a perfume/flavour bottle icon, with two or three small flag
waypoints along the way. Conveys "plan a multi-step route between two molecules".
Map aesthetic, flat vector, teal and amber palette. Transparent PNG, alpha
channel, no text.

### `m7l19ReactionMap`
Save: `public/assets/hscscience/chem-y12-m7/l19/reaction-map.png`
Prompt: A didactic functional-group reaction map as a clean node-and-arrow
diagram. Six rounded rectangular nodes connected by labelled arrows, laid out so
the central ALCOHOL node is the clear hub. Nodes: Alkene (top left), Haloalkane
(top right), Alcohol (centre), Aldehyde/Ketone (right of centre), Carboxylic
acid (far right), Ester (bottom right). Arrows: Alkene to Alcohol; Alkene to
Haloalkane; Haloalkane to Alcohol; Alcohol to Aldehyde; Aldehyde to Carboxylic
acid; Carboxylic acid to Ester. Each node is a distinct soft colour (teal, plum,
amber, rose). Arrows are clean directional with arrowheads. THIS DIAGRAM MAY
INCLUDE the functional-group names inside the nodes (these are the only text
allowed). Generous spacing, no overlapping shapes. Transparent PNG, alpha
channel.

---

## Lesson 20 — Organic Reactions Mastery (★ Consolidation)

### `m7l20HookExamPathway`
Save: `public/assets/hscscience/chem-y12-m7/l20/hook-exam-pathway.png`
Prompt: A flat illustration of an exam answer booklet or clipboard showing a
stylised multi-step reaction scheme (a vertical chain of small molecule icons
linked by arrows), with a pencil and a small tick/checkmark and a clock icon
nearby. Conveys "writing a full-mark pathway answer under time pressure". Flat
vector, calm study palette (teal, ink, paper-cream as translucent, not solid).
Transparent PNG, alpha channel, no readable text (scheme is abstract marks).

### `m7l20ReactionMap`
Save: `public/assets/hscscience/chem-y12-m7/l20/reaction-map.png`
Prompt: A didactic master functional-group reaction map as a node-and-arrow
diagram, slightly fuller than the L19 version. Seven rounded rectangular nodes:
Alkyne or Alkene and Alkane feeding in from the left as hydrocarbons, Haloalkane,
the central ALCOHOL hub, Aldehyde/Ketone, Carboxylic acid, and Ester. Arrows:
Alkene to Alkane; Alkene to Haloalkane; Alkene to Alcohol; Alkane to Haloalkane;
Haloalkane to Alcohol; Alcohol to Aldehyde/Ketone; Aldehyde to Carboxylic acid;
Carboxylic acid to Ester. Alcohol node visually emphasised as the hub (larger or
ringed). Each node a distinct soft colour. Clean directional arrows with
arrowheads, generous spacing, no overlaps. Functional-group names inside nodes
are the only text allowed. Transparent PNG, alpha channel.

---

## Lesson 21 — Addition Polymers

### `m7l21HookPolyethylene`
Save: `public/assets/hscscience/chem-y12-m7/l21/hook-polyethylene.png`
Prompt: A flat illustration showing a single small ethene molecule (a short C=C
unit) on the left, an arrow, and on the right a stack of everyday polyethylene
products: a thin cling-film sheet and a sturdy milk crate. Conveys "one gas
becomes a thousand products". Flat vector, teal and amber palette. Transparent
PNG, alpha channel, no text.

### `m7l21AdditionMechanism`
Save: `public/assets/hscscience/chem-y12-m7/l21/addition-mechanism.png`
Prompt: A didactic diagram of addition polymerisation of ethene. On the left,
two or three ethene monomers (CH2=CH2) drawn with their C=C double bonds clearly
shown, with small curved arrows indicating the pi bond opening. An arrow to the
right leads to the polyethylene repeat unit drawn correctly: a bracketed
-[CH2-CH2]- unit with only SINGLE bonds in the backbone, open bonds extending
from both ends of the square brackets, and a subscript n outside the bracket.
Visually emphasise that the double bond is gone in the product. Carbons ink,
bonds clean. This teaches "C=C opens, single-bonded repeat unit, no by-product".
Transparent PNG, alpha channel; atom symbols, brackets and the subscript n are
the only text.

---

## Lesson 22 — Condensation Polymers

### `m7l22HookPolyester`
Save: `public/assets/hscscience/chem-y12-m7/l22/hook-polyester.png`
Prompt: A flat illustration pairing a folded polyester shirt and a clear plastic
drink bottle, with a small "=" or linking motif between them to suggest they are
the same polymer (PET). Clean retail/everyday aesthetic, flat vector, teal and
plum palette. Transparent PNG, alpha channel, no text.

### `m7l22PetFormation`
Save: `public/assets/hscscience/chem-y12-m7/l22/pet-formation.png`
Prompt: A didactic condensation-polymerisation diagram for PET. On the left, the
two monomers drawn as skeletal structures: ethylene glycol (HO-CH2-CH2-OH, a diol)
and terephthalic acid (HOOC-C6H4-COOH, a benzene ring with a carboxyl group on
each side). An arrow to the right leads to the PET repeat unit:
-[O-CH2CH2-O-CO-C6H4-CO]- bracketed with open bonds and subscript n, with the TWO
ester linkages clearly highlighted (small coloured rings around each -COO-
group). Below the arrow, a small water molecule (H2O) shown leaving as the
by-product. Oxygens red, benzene ring drawn as a hexagon with inner circle. This
teaches diol + diacid -> two ester linkages + water. Transparent PNG, alpha
channel; atom symbols, brackets, subscript n, and H2O are the only text.

---

## Lesson 23 — Polymers: Properties & Environment

### `m7l23HookPolymerUses`
Save: `public/assets/hscscience/chem-y12-m7/l23/hook-polymer-uses.png`
Prompt: A flat illustration contrasting two polyethylene products of very
different toughness: a flimsy thin shopping bag on one side and a rigid
protective panel (suggesting a bulletproof/armour plate) on the other, with a
subtle "same material" linking motif. Conveys "identical chemistry, opposite
properties". Flat vector, ink and teal palette. Transparent PNG, alpha channel,
no text.

### `m7l23ChainArchitectures`
Save: `public/assets/hscscience/chem-y12-m7/l23/chain-architectures.png`
Prompt: A didactic three-panel comparison of polymer chain architectures. PANEL 1
"linear": several straight parallel polymer chains packed closely together
(drawn as long straight lines, tightly stacked). PANEL 2 "branched": wavy
polymer chains with small side-branches, packed loosely with visible gaps between
them. PANEL 3 "cross-linked": multiple chains joined to each other by short
covalent cross-link rungs forming a rigid 2D/3D network. Use teal for linear,
amber for branched, plum for cross-linked. Clean line-art, clearly showing
packing density differences (tight vs loose vs networked). This teaches how chain
architecture controls properties. Transparent PNG, alpha channel, no text labels
(the slide labels each panel).

---

## Summary table

| Lesson | Hook image | Concept visual |
|---|---|---|
| L13 | m7l13HookVanillaRaspberry | m7l13CarbonylComparison |
| L14 | m7l14HookWineVinegar | m7l14EthanoicAcidDimer |
| L15 | m7l15HookFruitEsters | m7l15EsterLinkage |
| L16 | m7l16HookAmines | m7l16AmineVsAmide |
| L17 | m7l17HookGreaseWater | m7l17Micelle |
| L18 | m7l18HookUnknownSolutions | m7l18ConjugateBaseStability |
| L19 | m7l19HookSynthesisRoute | m7l19ReactionMap |
| L20 | m7l20HookExamPathway | m7l20ReactionMap |
| L21 | m7l21HookPolyethylene | m7l21AdditionMechanism |
| L22 | m7l22HookPolyester | m7l22PetFormation |
| L23 | m7l23HookPolymerUses | m7l23ChainArchitectures |

22 assets total (11 hook + 11 concept). All transparent PNG with alpha channel.
Concept visuals are concrete organic structures or labelled reaction maps; hook
images are conceptual scene-setters. Reaction-map images (L19, L20) are the only
ones permitted to contain text (functional-group names inside nodes).
