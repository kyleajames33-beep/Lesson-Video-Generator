# Year 11 Chemistry M1 V23: Molecular shape and polarity. How does molecular shape determine whether bond dipoles cancel? (design)

Status: Revision 2 (7 Nov 2026): brief 179 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing. Previously Revision 1 (5 November 2026): first design.

Narration 5,910 characters (sum of scene strings), 17 scenes, about 527 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: twenty-third video of Year 11 Chemistry (2017 syllabus), Module 1; the molecular-shape video, after v22 (ionic solids and conductivity, designed in parallel) and before v24 (metals). Templates: `phys-y11-fa1-v01.md` (structure), `chem-y11-m1-v14.md` and `chem-y11-m1-v17.md` (series conventions). No starter pack exists; the pack work is done here. Route entry: `chem-y11-m1-v23` in `../../programme/chem-y11-route-inputs.json`. Site lessons read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module1/lesson09.sa.html` (SHA256 `992295bba54e94aa8fc5f4d50214c1db498691a6d695516e06da38439815542f`, recomputed, matches the route; used: `l09-covalent-molecular-vs-network-the-critical-d-title` for the "discrete molecules" framing and `l09-covalent-molecular-substances-in-detail-title` for "polar molecules"), `.../module1/lesson10.sa.html` (SHA256 `d10900d8424d90f37ef09e3b240a5b80463623ffd459f1c124106653e0dea52c`, matches; used: `l10-the-three-types-of-intermolecular-forces-title`, only its definition of a polar molecule as one with permanent partial charges, and its CHCl₃ example as a pointer for scene 10) and `.../module1/lesson19.sa.html` (SHA256 `bf0c603459da030fe0c3d036c87ccb0efdfaaed2b1b89235f5d6ae1894d8a025`, matches; used: `l19-lewis-dot-diagrams-title`, the water Lewis diagram with "2 bonding pairs + 2 lone pairs = 4 electron domains"). The site lessons never teach molecular shapes explicitly (no VSEPR section; water is called "bent" in passing and CO₂'s symmetry appears only in lesson 12's Activity 2 answer A). As the route asks ("add explicit shape teaching if source examples only imply it"), scenes 4 to 6 add VSEPR shape teaching from a standard source (author note b). Site corrections file checked: no logged item touches lessons 9, 10 or 19.

Owner rules applied: as v14 (one learner question; no people, hands or faces; coded models and text, the 3D ball-and-stick models coded; Revision 2 adds two painted anchor plates in scene 1 and pictures on the question cards; 3 s prediction countdown; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 1; local ledger ID `C1-IQ4-02`), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger's broken apostrophe character restored as "'", root decision 9):

- "investigate the differences between ionic and covalent compounds through:"
  - "using nomenclature, valency and chemical formulae (including Lewis dot diagrams) (ACSCH029)" (Lewis diagrams used as the starting point, from v21)
  - "examining the spectrum of bonds between atoms with varying degrees of polarity with respect to their constituent elements' positions on the periodic table" (bond polarity recalled from v21 and combined with shape)
  - "modelling the shapes of molecular substances (ACSCH056, ACSCH057)" (this video)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 38)

**Boundary:** opens on v22's final frame (assumed; see Decisions). Recalls the polar bond and the δ+/δ− labels from v21 and draws them as bond dipole arrows; teaches VSEPR (electron groups around a central atom repel and spread as far apart as possible; a double bond counts as one group; lone pairs count but the shape is named from the atoms); builds the five shapes the route names (linear CO₂, trigonal planar BCl₃, tetrahedral CH₄, trigonal pyramidal NH₃, bent H₂O) with their angles; then combines bond polarity with symmetry (CO₂ against H₂O, BCl₃ against NH₃, CCl₄ against CH₃Cl); one three-step method and one memory aid. Stops before intermolecular forces (v26) and solubility (v27), which are named only as "later videos"; no five- or six-group shapes, no resonance.

## Decisions

- **Learner question (route wording kept).** "How does molecular shape determine whether bond dipoles cancel?" The answer, in order: a polar bond is a pull toward the more electronegative atom (2); the pulls add like arrows, and equal, opposite pulls cancel (3); electron groups set the shape (4 to 6); symmetric shapes with identical outer atoms and no lone pair on the centre cancel, others don't (8 to 10); the method (11).
- **Opening frame (reconciled by root, 5 November).** v23 opens on v22's actual final frame: bent water and straight CO₂ already drawn in 2D with bond-dipole arrows and "net?" marks. Scene 1 keeps them and lifts them into 3D on "shape"; the narration stands.
- **Bond dipole arrow (convention).** The arrow points toward the δ− atom, with a small cross on the tail at the δ+ end (the convention in most Australian textbooks). Learner copy: "bond dipole: an arrow from δ+ to δ−". Sizes are drawn roughly in proportion to the Pauling difference (author note a), so the C–H arrow in scene 10 is visibly tiny.
- **Electronegativity values (one decimal, as v14).** Pauling values (PubChem): H 2.2, B 2.0, C 2.6, N 3.0, O 3.4, Si 1.9, P 2.2, S 2.6, Cl 3.2. The site uses O 3.5 (an older table); this series uses 3.4, matching v14's source (site note 1).
- **VSEPR added (route note).** Taught in plain words: "groups of electrons around a central atom repel each other, so they spread out as far apart as possible"; a group is a single bond, a double bond or a lone pair. The acronym is spoken once ("valence shell electron pair repulsion") because textbooks and exam papers use it. Lone pairs push slightly harder than bonding pairs (one sentence, scene 6), which is why NH₃ is about 107° and H₂O about 104.5°.
- **Molecules chosen.** CO₂ (linear), BCl₃ (trigonal planar), CH₄ (tetrahedral), NH₃ (trigonal pyramidal), H₂O (bent): the five shapes the route names. BF₃ (the usual textbook example) is avoided because its B–F difference (3.98 − 2.04 = 1.94) sits above the site's 1.7 "ionic" threshold that v21 teaches, which would confuse a first exposure; BCl₃ (difference 1.1) is a clean polar-covalent example. CCl₄ against CH₃Cl shows the "identical outer atoms" condition with one shape (site lesson 10 lists CHCl₃ as a polar example; chloromethane is simpler, with one unbalanced C–Cl).
- **3D models (coded, preferred over painted or flat images).** The explainer's ball-and-stick `BallStick`, `Lobes` and `AngleArc` from `src/explainer/lessons/chem-m7-c01/molecules.tsx` (the explainer port of the shared engine3d projection maths) draw every molecule as a slowly turning 3D model, with violet lone-pair lobes. The VSEPR direction table (linear, trigonal planar, tetrahedral, trigonal pyramidal, bent) is ported as logic from the frozen `src/slides/diagrams/Molecule3DDiagram.tsx` (legacy-engine policy: port logic, redrawn in explainer style; the legacy file is not imported or edited). Build note: `Atom3.el` must be extended to B, N, F, Si, P and S. Angle labels are top overlays, never depth-sorted (porting addendum, `docs/diagram-and-scene-extension-contract.md`).
- **Analogy: tug of war with two ropes on one knot.** v14 used a tug of war for one shared pair. Here each bond dipole is a rope tied to the same central knot; equal ropes pulled in opposite directions leave the knot still. Assumptions checked in "Memory aid check" (dipoles add as vectors; the "knot" is the molecule's centre of charge, not a moving atom).
- **In-teaching prediction (3 s, scene 7).** CO₂ (linear) or H₂O (bent): whose dipoles cancel?
- **Memory aid:** "Polar bonds plus perfect symmetry make a non-polar molecule." Checked in "Memory aid check" (up to four electron groups; "perfect symmetry" spelt out as no lone pair on the centre and identical outer atoms).
- **Attempts (original wording, HSC style).** A1: H₂S with its electron groups given; identify the shape and explain the polarity (3 marks). Crossed: "linear, because it has three atoms". A2: SiCl₄ and PCl₃; explain why one is polar (4 marks). Crossed: "both non-polar, because both have only chlorine outer atoms".
- **Mistake scene:** none separate. "Polar bonds always make a polar molecule" (1, 8); "lone pairs don't affect shape" (6); "three atoms means linear" (crossed in 13); "same outer atoms means the same polarity" (crossed in 15); "shape is named from the electron groups" (6, tag "shape named from the atoms").
- **Handoff (route next: `chem-y11-m1-v24`, "Why can a metal bend while retaining electrical conductivity?").** Scene 16 (Revision 2, brief 179): in molecules every outer electron is held in a bond or lone pair (core electrons are not bonding or lone-pair electrons), so molecular substances like pure water don't carry a current well; a metal's outer electrons are not held by any one atom. Final frame: the turning water model at the left, dimmed, with the tag "every outer electron held in a bond or lone pair"; at the right the new bent copper wire plate `y11c-copper-wire-bent-v1.png` (requested in `chem-y11-m1-v24.md`) with a small "?" spark beside it; chip "Next: why can a metal bend and still conduct electricity?".
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. `l09` worked example 2 and `l10` worked example 2: "oxygen is highly electronegative (χ = 3.5)". Pauling value 3.44 (PubChem), so 3.4 to one decimal; the site's lesson 18 table (used in v14) should match. Minor consistency.
  2. `l10-hydrogen-bonding-in-detail-title`: "Chlorine is not electronegative enough (χ = 3.0 vs F = 4.0, O = 3.5, N = 3.0, Cl is borderline...)". Chlorine's Pauling value is 3.16, higher than nitrogen's 3.04, so electronegativity alone cannot be the reason. The usual explanation adds atom size: chlorine's lone pairs are larger and more spread out, so the attraction to a δ+ hydrogen is much weaker. Suggest rewording (affects v26 too).
  3. `l12` Activity 2 answer A is the only place on the site where dipole cancellation by symmetry is explained; lessons 9 and 10 call molecules "polar" without teaching shape. No error; scenes 4 to 10 supply the shape teaching (route note).
- **Cause chain taught, in order:** (1) unequal sharing gives a polar bond, drawn as an arrow toward δ− (2); (2) bond dipoles add like pulls; equal and opposite pulls cancel (3); (3) electron groups repel and spread out, which sets the shape (4 to 6); (4) in a linear or other symmetric shape with identical outer atoms the dipoles cancel, so the molecule is non-polar (8, 9, 10); (5) a lone pair on the centre or different outer atoms leave an overall dipole, so the molecule is polar (8, 9, 10).
- **Entry knowledge:** v21 (electronegativity difference, polar and non-polar covalent bonds, δ+ and δ− labels, Lewis diagrams with bonding and lone pairs); v14 (electronegativity values and the tug of war); Stage 5 covalent sharing.
- **Learner-visible vocabulary:** bond dipole (an arrow showing which way a polar bond pulls the shared electrons, 2); polar molecule (one end slightly negative, the other slightly positive overall, 3); non-polar molecule (no overall dipole, 3); electron group (a single bond, double bond or lone pair around the central atom, 4); lone pair (a pair of outer electrons not shared with another atom, 4); VSEPR (valence shell electron pair repulsion, 4); linear, trigonal planar, tetrahedral, trigonal pyramidal, bent (5, 6); bond angle (the angle between two bonds at the central atom, 5).
- **Legacy logic ported:** the VSEPR unit-direction table (linear, trigonal planar, tetrahedral, trigonal pyramidal, bent) from `src/slides/diagrams/Molecule3DDiagram.tsx`, as logic only.
- **Explainer motion (coded):** **ball-and-stick turntable** (`BallStick`, slow yaw, about 14 s a turn; atoms in CPK-like soft colours: C charcoal, H soft grey, O red-brown, N indigo, Cl green, B salmon, Si tan, P orange, S yellow; matches the M7 kit); **lone-pair lobes** (`Lobes`, violet); **angle arcs** (`AngleArc`, navy, with the angle written as a top overlay); **bond dipole arrows** (orange arrows along each bond, crossed tail, drawn from δ+ to δ−, growing as named); **vector sum** (the arrows lift off the model and slide tip to tail at the side; the resultant draws in thick red, or a grey "0" ring when they close); **Lewis panel** (flat Lewis diagram with dots, groups ringed and counted 1, 2, 3, 4); **shape table** (a growing five-row table: groups, lone pairs, shape, angle, example); **two-rope knot** (scene 3 only: a small ring with two orange ropes); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, scribble circle, `HandText`, `KeyNotes`, `Heading`.
- **Board layout (constant):** heading top left; the 3D model centre left; the Lewis panel or vector sum at the right; the shape table builds at the far right from scene 5 and stays as a reference until scene 11.
- **Anchor (Revision 2).** Two existing painted plates in scene 1: `y11c-dry-ice-v1.png` (solid carbon dioxide, which turns straight to gas at −78 °C) and `y11c-beaker-water-36ml-v1.png` (liquid water at room temperature). They make "that one difference changes how they behave" concrete before any arrow is drawn, and return as thumbnails in scene 8 when the answer lands.
- **Simulations (Revision 2).** (1) The dipole adder: two equal orange bond-dipole arrows on a central atom with a bond-angle slider (180° down to 90°) and two readouts (52 px), "bond angle" and "overall pull" in units of one bond dipole (2 × cos(angle ÷ 2): 0.00 at 180°, 0.52 at 150°, 1.00 at 120°, 1.22 at 104.5°, 1.41 at 90°). The red resultant grows from nothing as the angle closes (scene 3), and the readout is shown again for CO₂ (180°, 0.00) and H₂O (104.5°, 1.22) in scene 8. The readout is geometric only (equal bond dipoles); real dipole moments are not shown. (2) The group stepper: a central atom with 2, 3 or 4 balloon-like electron groups and a readout "angle between groups" (180°, 120°, 109.5°) that updates as the groups push apart (scene 4).
- **Colour roles (Revision 2, fixed for the whole video):** bond dipole arrows orange; the overall dipole thick red; lone-pair lobes violet; angle arcs and angle readouts navy; δ− red, δ+ blue; the "0" cancel ring grey; givens strips navy; framed answers dark-ink box with a green tick; crossed slips red strike with a red hand tag; hand tags take the colour of what they mark.
- **Type sizes (Revision 2, 1080p):** the current statement and table row at least 44 px; slider and stepper readouts about 52 px; angle labels 40 px; table, chips and supporting lines 32 to 36 px; hand tags at least 30 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.

Author notes (not learner copy):
(a) Pauling electronegativities (PubChem periodic table, retrieved 5 November 2026): H 2.20, B 2.04, C 2.55, N 3.04, O 3.44, F 3.98, Si 1.90, P 2.19, S 2.58, Cl 3.16. Differences: O–H 1.24, C=O 0.89, N–H 0.84, B–Cl 1.12, C–Cl 0.61, C–H 0.35, S–H 0.38, Si–Cl 1.26, P–Cl 0.97, B–F 1.94. Dipole moments (CRC Handbook of Chemistry and Physics, "Dipole moments" table, for the check only, not shown): CO₂ 0; H₂O 1.85 D; NH₃ 1.47 D; BCl₃ 0; CH₄ 0; CCl₄ 0; CH₃Cl 1.89 D; H₂S 0.97 D; SiCl₄ 0; PCl₃ 0.56 D.
(b) VSEPR shapes and angles: OpenStax Chemistry 2e, section 7.6 "Molecular Structure and Polarity" (Figures 7.17 to 7.19 and Example 7.13): linear 180°, trigonal planar 120°, tetrahedral 109.5°, NH₃ 107°, H₂O 104.5°; lone pairs repel more strongly than bonding pairs; polarity from the vector sum of bond dipoles. NH₃ measured 106.7° (rounded to 107°); H₂O 104.5°.
(c) BCl₃: boron has only six electrons around it (an exception to the octet rule). Scene 5 says "three single bonds, and no lone pairs" and does not draw its Lewis diagram, so the exception is not raised.
(d) CH₃Cl: C–H bonds are only slightly polar (difference 0.35); the C–Cl dipole dominates. The molecule's net dipole points toward chlorine. The narration's "C H bonds are only very slightly polar" is accurate.
(e) Pronunciations: "VSEPR" (VES-per; spoken expanded once, then not used); "trigonal" (TRIG-uh-nul); "tetrahedral" (tet-ruh-HEE-drul); "tetrachloromethane"; "chloromethane"; formulae spelt "C Cl four", "C H three Cl", "B Cl three", "H two S", "Si Cl four", "P Cl three" for the Google voice (root decision 5 fallback: say the names only).

Main question: *How does molecular shape determine whether bond dipoles cancel?*
Entry knowledge: v21, v14; Stage 5 covalent sharing.
Stops after: bond dipoles, VSEPR with five shapes and angles, symmetry and polarity, a method and a memory aid. No intermolecular forces, solubility, five- or six-group shapes.
Handoff: chem-y11-m1-v24, metals bending and conducting.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key (continues v14; Revision 2 colour roles and type sizes in Decisions): bond dipole arrows orange; overall dipole thick red; lone-pair lobes violet; angle arcs navy; δ− red, δ+ blue; crossed chips red strike.

### 1. hook: same bonds, different molecules
> Carbon dioxide and water have a lot in common. Each molecule has one central atom joined to two others, and each has two polar bonds to **oxygen**. Yet water molecules are polar, and carbon dioxide molecules are **not**. That one difference changes how they boil and what they dissolve, as we'll see in later videos. The difference isn't in the bonds. It's in the **shape**.

Visual: opens on v22's final frame exactly (`chem-y11-m1-v22.md` "Final frame": dimmed NaCl lattice at left, bent water and straight O=C=O with δ labels, bond-dipole arrows and grey "net?" marks, "Next" chip). The chip fades and the lattice clears; the two 2D drawings, with their dipole arrows and "net?" marks, move to centre. On "oxygen" both C=O and both O–H bonds glow orange, tag "polar bonds". On "not" chips write under each: "water: polar molecule" and "carbon dioxide: non-polar molecule", with a grey "?" between them. On the third sentence the painted plates set down solid under the drawings (about 380 px wide each): `y11c-dry-ice-v1.png` under CO₂ with an orange hand tag "solid CO₂: a gas above −78 °C", and `y11c-beaker-water-36ml-v1.png` under water with a hand tag "water: liquid at room temperature"; a red pen arrow joins the two plates with "why so different?". On "shape" the 2D drawings lift into turning 3D ball-and-stick models, CO₂ straight and H₂O bent, and the heading writes on: "Shape decides whether bond dipoles cancel".

### 2. bond dipoles
> Two videos ago, we saw that when two atoms share a pair of electrons unequally, the pair sits closer to the more electronegative atom. That atom gets a small negative charge, delta minus, and the other gets delta plus. We can draw a polar bond as an arrow, called a bond dipole, pointing toward the delta minus **end**. Oxygen is more electronegative than carbon, so in carbon dioxide both arrows point out toward the **oxygens**.

Visual: board clears to one C=O bond enlarged, the shared pair shown as blue dots sliding toward O; δ+ (blue) writes on C and δ− (red) on O, with values "C 2.6, O 3.4" in grey. On "end" an orange arrow draws along the bond from C to O with a crossed tail at C, tag "bond dipole: arrow from δ+ to δ−". On "oxygens" the CO₂ model returns and two arrows draw outward from carbon, one toward each oxygen; red hand tag "electrons pulled this way" with a pen arrow toward O, blue "δ+" circled on C.

### 3. adding the pulls
> So is the whole molecule polar? Treat each bond dipole as a pull, with a size and a direction, like two ropes tied to one knot. If two equal pulls point in opposite directions, the knot doesn't move. The dipoles cancel, and the molecule is **non-polar**, even though its bonds are polar. If the pulls don't cancel, there's an overall dipole, with one end of the molecule slightly negative and the other slightly **positive**. That's a polar molecule. So we need to know the **shape**.

Visual: a small ring with two orange ropes appears at the right; the dipole adder (simulation, Decisions) fills the centre from the first frame, two equal arrows at 180° with readouts "bond angle 180°" and "overall pull 0.00" (52 px). On the second sentence's "opposite directions" beat the ropes pull left and right, equal length, and the ring stays still. On "non-polar" the two arrows slide tip to tail and close to a grey "0" ring, tag "no overall dipole: non-polar molecule", hand tag "cancel" with a pen ring round "0.00". Then the slider closes the angle live: 180° → 150° → 120° → 90°, the readout climbing 0.00 → 0.52 → 1.00 → 1.41 and a red resultant growing from nothing; on "positive" the thick red resultant is full and the tag "overall dipole: polar molecule" writes; red hand tag "angle closes, pull grows". On "shape" the ring and ropes fade and a chip writes "polar molecule? need the shape" (44 px).

### 4. VSEPR: electron groups spread out
> Here's the rule that sets the shape. Around a central atom, groups of electrons repel each other, so they spread out as far apart as possible. A group can be a single bond, a double bond, or a lone pair, which is a pair of electrons that isn't shared. This is called VSEPR, short for valence shell electron pair repulsion. Start from the Lewis diagram, and count the electron groups around the central **atom**.

Visual: board clears to the group stepper (simulation, Decisions): a central atom with soft grey balloon-like regions pushing apart as the first sentence runs (two, then three, then four regions settling), and the readout "angle between groups" updating 180° → 120° → 109.5° (52 px, navy); hand tag "push apart" with pen arrows between the regions. On the third sentence a grey legend writes: "group = single bond, double bond or lone pair". On "repulsion" the acronym writes as a grey tag. On "atom" the Lewis panel draws CO₂ (O=C=O with oxygen lone pairs) and the two groups on carbon are ringed and counted "1, 2", with a hand tag "a double bond counts as one group".

### 5. two and three groups
> Carbon dioxide's carbon has two groups, both double bonds, and no lone pairs. Two groups get furthest apart on opposite sides, so the molecule is linear, with a bond angle of a hundred and eighty **degrees**. Boron trichloride, B Cl three, has three single bonds on boron, and no lone pairs. Three groups spread out flat, a hundred and twenty degrees apart. That shape is called trigonal **planar**.

Visual: the turning CO₂ model at centre left; on "degrees" a navy angle arc writes "180°" and the shape table opens at the right with row 1: "2 groups, 0 lone pairs, linear, 180°, CO₂". The model slides aside; a BCl₃ model draws in (B salmon, Cl green), seen first edge-on then turning to face the camera so it reads as flat. On "planar" the arc writes "120°" and row 2 writes: "3, 0, trigonal planar, 120°, BCl₃"; hand tags navy "flat" with a pen line along the plane, ink "opposite sides" on the CO₂ thumbnail.

### 6. four groups and lone pairs
> Four groups get furthest apart in three dimensions. Methane's carbon has four bonds, pointing to the corners of a tetrahedron, about a hundred and nine and a half degrees **apart**. Ammonia's nitrogen also has four groups, but one is a lone pair. We name the shape from the atoms only, so ammonia is trigonal **pyramidal**, like a short tripod. Water's oxygen has two bonds and two lone pairs, so the atoms make a **bent** shape. Lone pairs push a little harder than bonds, which squeezes the angles to about a hundred and seven degrees in ammonia, and a hundred and four and a half in **water**.

Visual: stage change (Revision 2): the CH₄ model turns large at centre left with a tetrahedron outline in full ink and a hand tag "3D, not flat"; on "apart" the arc writes "109.5°" and row 3 writes "4, 0, tetrahedral, 109.5°, CH₄". NH₃ model replaces it, the lone pair a violet lobe where the fourth hydrogen would be; on "pyramidal" the lobe fades to a dashed outline, the three H atoms and N stay bright, tag "shape named from the atoms", row 4 "4, 1, trigonal pyramidal, 107°, NH₃". H₂O model with two violet lobes; on "bent" the lobes dash out and row 5 writes "4, 2, bent, 104.5°, H₂O". On "water" the lobes pulse and small arrows push the O–H bonds closer, arcs reading "107°" and "104.5°"; violet hand tag "lone pairs push harder" with a pen arrow from a lobe to the arc.

### 7. prediction (countdown, 3 seconds)
> Quick prediction. Carbon dioxide is linear, and water is bent. In which molecule do the bond dipoles cancel? Have a **think**.

Visual: CO₂ and H₂O models side by side, bond dipole arrows on each, no resultants. Chip "CO₂ or H₂O: dipoles cancel?". On "think" the 3 s `Countdown` ring runs.

### 8. cancel or add
> Carbon dioxide. Its two bond dipoles are the same size, and they point in exactly opposite directions, so they cancel. Carbon dioxide is **non-polar**. In water, the two arrows both lean toward the oxygen side. They add up to an overall dipole, with the oxygen end slightly negative, and the hydrogen end slightly positive. Water is **polar**. Same kind of bond, different shape, different result.

Visual: on the second sentence CO₂'s arrows slide tip to tail and close; on "non-polar" the grey "0" ring writes, tag "non-polar molecule". H₂O's arrows slide tip to tail; the thick red resultant draws, pointing from between the hydrogens toward oxygen; δ− writes at the O end and δ+ at the H end of the whole molecule; on "polar" the tag "polar molecule" writes. The dipole adder's readouts appear under each model: CO₂ "180°, overall pull 0.00" and H₂O "104.5°, overall pull 1.22", with hand tags "cancel" (grey) and "add" (red). The dry-ice and water plates return as small thumbnails under their models with a pen tick. The last sentence writes as a line (44 px) under both, framed.

### 9. lone pairs break symmetry
> Boron trichloride follows the same pattern. Three equal B Cl dipoles, spread evenly in a flat triangle, pull equally in three directions, so they **cancel**. Ammonia's three N H dipoles all lean toward the nitrogen, on the same side as its lone pair, so they don't cancel. Ammonia is **polar**. Here's the clue. A lone pair on the central atom usually breaks the **symmetry**.

Visual: BCl₃ at the left, three orange arrows outward; they slide tip to tail into a closed triangle; on "cancel" the grey "0" ring writes, tag "non-polar". NH₃ at the right, three arrows toward N (crossed tails at the H atoms); they slide tip to tail and leave a gap; the red resultant draws upward toward N and the lone pair; on "polar" tag "polar". On "symmetry" the NH₃ lone-pair lobe pulses violet with a violet pen ring and a chip writes "lone pair on the centre: usually polar"; grey hand tag "even spread" on BCl₃'s closed triangle.

### 10. identical outer atoms
> Symmetry also needs matching outer atoms. Tetrachloromethane, C Cl four, is tetrahedral, with four identical polar bonds. They pull equally in every direction, so they cancel, and the molecule is **non-polar**. Now swap three chlorines for hydrogens, to make chloromethane, C H three Cl. It's still roughly tetrahedral, but C H bonds are only very slightly polar, so the strong C Cl dipole isn't balanced. Chloromethane is **polar**.

Visual: CCl₄ model turning, four equal orange arrows outward; on "non-polar" they close to the "0" ring. Three Cl atoms morph to H (green to soft grey); their arrows shrink to tiny ones pointing toward carbon (C 2.6, H 2.2, grey values); the single C–Cl arrow stays large; on "polar" the red resultant draws toward Cl, tag "different outer atoms: polar"; hand tags orange "big" on the C–Cl arrow and grey "tiny" on the C–H arrows, with a pen ring round the lone Cl.

### 11. the method and a line to remember
> So here's the method. One, check for polar bonds. With none, the molecule is non-polar. Two, find the shape from the electron groups. Three, ask whether the shape is symmetrical, with no lone pair on the central atom and identical outer atoms. If it is, the dipoles cancel. If not, the molecule is **polar**. A short way to remember it: polar bonds plus perfect symmetry make a non-polar **molecule**.

Visual: board clears to a three-step strip at the right, each step writing as spoken: "1 polar bonds? (no: non-polar)", "2 shape from electron groups", "3 symmetrical? no lone pair on the centre, identical outer atoms: dipoles cancel". The shape table shrinks to the left as a reference. On "polar" the step 3 "no" branch writes "polar". On "molecule" the memory line writes in a framed card in hand lettering (48 px): "Polar bonds + perfect symmetry = non-polar molecule." Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. In hydrogen sulfide, H two S, the sulfur atom has two bonding pairs and two lone pairs. Identify the shape of the molecule, and explain whether it's polar. Pause here to answer.

Visual: `QuestionCard` (subject "Chemistry", tag "HSC-style question, written for HSCScience"): "In a molecule of hydrogen sulfide, H₂S, the sulfur atom has two bonding pairs and two lone pairs of electrons. Electronegativities: H 2.2, S 2.6. (a) Identify the shape of the molecule. (b) Explain whether H₂S is a polar molecule. (3 marks)" Picture on the card's right: `y11c-sample-sulfur-v1.png` (about 240 px, uniform scale), captioned "sulfur, the S in H₂S". Card text 32 px. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no model, no table).

### 13. feedback 1 (brief)
> Bent, like water. Sulfur has four electron groups, and two are lone pairs, so the three atoms make a bent **shape**. The S H bonds are slightly polar, and in a bent shape their dipoles don't cancel, so hydrogen sulfide is a polar molecule. Calling it linear because it has three atoms is the classic **slip**.

Visual: card shrinks to the top with its picture kept small. A navy givens strip on the answer side: "S: 2 bonding pairs, 2 lone pairs | H 2.2, S 2.6". The H₂S model draws (S yellow) with two violet lobes; on "shape" rows (44 px) "(a) bent (4 groups, 2 lone pairs)", framed; then the small arrows and red resultant draw and row "(b) S–H slightly polar; bent, so dipoles don't cancel: polar", framed with a green tick. On "slip" a chip "linear, because it has three atoms" fades in and is struck in red, red hand tag "lone pairs bend it". Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Silicon tetrachloride, Si Cl four, and phosphorus trichloride, P Cl three, both have polar bonds to chlorine. The phosphorus atom has one lone pair, and the silicon atom has none. Explain why one of these molecules is polar and the other is not. Pause here to answer.

Visual: `QuestionCard`: "Silicon tetrachloride (SiCl₄) and phosphorus trichloride (PCl₃) both contain polar bonds to chlorine. In SiCl₄ the silicon atom has four bonding pairs and no lone pairs; in PCl₃ the phosphorus atom has three bonding pairs and one lone pair. With reference to molecular shape, explain why one molecule is polar and the other is non-polar. (4 marks)" Pictures on the card's right: `y11c-sample-silicon-v1.png` and `y11c-sample-red-phosphorus-v1.png` (about 200 px each, uniform scale), captioned "silicon" and "phosphorus". Card text 32 px. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> Si Cl four has four groups and no lone pairs, so it's tetrahedral. Four equal dipoles cancel, so it's non-polar. P Cl three has four groups, one a lone pair, so it's trigonal pyramidal. Its three dipoles don't cancel, so it's **polar**. Saying both are non-polar because they both have chlorine outer atoms is the **trap**.

Visual: card shrinks to the top with its pictures kept small. A navy givens strip on the answer side: "SiCl₄: 4 bonding pairs, 0 lone pairs | PCl₃: 3 bonding pairs, 1 lone pair". SiCl₄ model (Si tan) at the left with four arrows closing to "0", row (44 px) "SiCl₄: tetrahedral, symmetrical: non-polar", framed; PCl₃ model (P orange) at the right with its lone-pair lobe; on "polar" the red resultant draws, row "PCl₃: trigonal pyramidal, lone pair: polar", framed with a green tick. On "trap" a chip "both non-polar: same outer atoms" fades in and is struck in red, red hand tag "shape decides". Hold about 1 second.

### 16. handoff: electrons held, electrons free
> Notice where every outer electron in these molecules is. Each one is held in a bond or a lone pair, inside its own molecule. So substances made of molecules, like pure water, don't carry an electric current well. Metals are different. Their outer electrons aren't held by any one atom, and a copper wire can be bent into any shape and still **conduct**. Next time, we'll find out why a metal can bend and still conduct **electricity**.

Visual: board clears to the turning water model at the left; its bonding pairs and lone pairs glow in turn, tag "every outer electron held in a bond or lone pair". On "conduct" `y11c-copper-wire-bent-v1.png` slides in at the right, with a small "?" spark beside it. On "electricity" the water model dims and the chip writes: "Next: why can a metal bend and still conduct electricity?". Hold about 2 seconds. This is the final frame (v24 opens on it).

### 17. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Bond dipole: an arrow from δ+ to δ−.
2. VSEPR: electron groups repel and spread out.
3. 2 groups linear 180°; 3 trigonal planar 120°; 4 tetrahedral 109.5°.
4. Lone pairs: NH₃ pyramidal 107°; H₂O bent 104.5°.
5. Symmetrical, same outer atoms: dipoles cancel (CO₂, CCl₄).

Memory aid (framed card under the notes, hand lettering as in scene 11): *Polar bonds + perfect symmetry = non-polar molecule.* Notes 34 px in the role colours (dipoles orange, angles navy, lone pairs violet); no paragraphs. The quiet hold runs about 45 s after the spoken line.

## Teaching checks

- **Does it explain causes?** Why a bond is polar: unequal sharing (2, recalled). Why dipoles cancel: equal, opposite pulls (3). Why molecules take their shapes: electron groups repel (4). Why NH₃ and H₂O angles are smaller: lone pairs push harder (6). Why CO₂ is non-polar but H₂O is polar: symmetry (8). Why NH₃ and CH₃Cl are polar: a lone pair, or different outer atoms (9, 10).
- **Misconceptions addressed:** polar bonds always mean a polar molecule (1, 8); lone pairs don't count (6); shape named from groups (6, tag); three atoms means linear (crossed in 13); same outer atoms means same polarity (crossed in 15).
- **One idea at a time:** dipoles (2, 3), then shape (4 to 6), then the combination (8 to 10), then the method (11).
- **Video makes it easier:** turning 3D models show depth that flat drawings hide (the pyramid and the tetrahedron); arrows lift off and add tip to tail, so cancelling is seen, not asserted; lone pairs appear as lobes, then fade to show how the shape is named.
- **Response opportunity:** prediction (3 s); two unseen tasks with every condition on the card; 10 s each. Feedback about 24 s and 26 s.
- **Avoided double teaching:** electronegativity, polar bonds and Lewis diagrams recalled from v14 and v21 (not re-derived); intermolecular forces and solubility named only as later videos (v26, v27).
- **Syllabus coverage:** `C1-IQ4-02`, "modelling the shapes of molecular substances", with Lewis diagrams and the bond-polarity spectrum used.
- **Out of scope by design:** five and six electron groups; resonance; dipole moment values; intermolecular forces (v26).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style).** "In a molecule of hydrogen sulfide, H₂S, the sulfur atom has two bonding pairs and two lone pairs of electrons. Electronegativities: H 2.2, S 2.6. (a) Identify the shape of the molecule. (b) Explain whether H₂S is a polar molecule. (3 marks)"
Model answer: (a) Bent (V-shaped) (1). (b) The S–H bonds are polar because sulfur is more electronegative than hydrogen (1). The four electron groups (two of them lone pairs) give a bent shape, so the two bond dipoles do not cancel and the molecule has an overall dipole: H₂S is polar (1). Classic mistake (crossed): "linear, because it has three atoms".

**Attempt 2 (scene 14; original wording, HSC style).** "Silicon tetrachloride (SiCl₄) and phosphorus trichloride (PCl₃) both contain polar bonds to chlorine. In SiCl₄ the silicon atom has four bonding pairs and no lone pairs; in PCl₃ the phosphorus atom has three bonding pairs and one lone pair. With reference to molecular shape, explain why one molecule is polar and the other is non-polar. (4 marks)"
Model answer: SiCl₄: four electron groups, no lone pairs, so tetrahedral (1); four identical Si–Cl dipoles are arranged symmetrically and cancel, so SiCl₄ is non-polar (1). PCl₃: four electron groups including one lone pair, so trigonal pyramidal (1); the three P–Cl dipoles do not cancel, giving an overall dipole, so PCl₃ is polar (1). Classic mistake (crossed): "both non-polar, because both have only chlorine outer atoms".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Electronegativities (one decimal) | H 2.2, C 2.6, O 3.4, S 2.6 (others in author note a) | 2, 10, 12 |
| Bond angles | 180°, 120°, 109.5°, 107°, 104.5° | 5, 6, 17 |
| Electron groups | CO₂ 2; BCl₃ 3; CH₄ 4; NH₃ 4 (1 lone pair); H₂O 4 (2); H₂S 4 (2); SiCl₄ 4 (0); PCl₃ 4 (1) | 4 to 6, 12 to 15 |
| C–H against C–Cl polarity | differences 0.35 and 0.61 | 10 (arrow sizes) |
| B–F difference (why BF₃ is not used) | 3.98 − 2.04 = 1.94 | Decisions only |
| Dipole adder readout (Revision 2) | 2 × cos(angle ÷ 2): 180° 0.00; 150° 0.52; 120° 1.00; 104.5° 1.22; 90° 1.41 (units of one bond dipole; geometric only) | 3, 8 |
| Dry ice | solid CO₂ turns to gas at −78 °C (−78.5 °C, 1 atm) | 1 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- Pauling rounding: 2.20 → 2.2; 2.55 → 2.6; 3.44 → 3.4; 2.58 → 2.6.
- Differences: 3.44 − 2.20 = 1.24; 3.44 − 2.55 = 0.89; 3.04 − 2.20 = 0.84; 3.16 − 2.04 = 1.12; 3.16 − 2.55 = 0.61; 2.55 − 2.20 = 0.35; 2.58 − 2.20 = 0.38; 3.16 − 1.90 = 1.26; 3.16 − 2.19 = 0.97; 3.98 − 2.04 = 1.94.
- Angles against OpenStax 2e section 7.6: 180°, 120°, 109.5°, 107°, 104.5°.
- Zero dipoles (CRC) for CO₂, BCl₃, CCl₄, SiCl₄; non-zero for H₂O, NH₃, CH₃Cl, H₂S, PCl₃.

## Memory aid check

- **"Polar bonds + perfect symmetry = non-polar molecule."** Written for this lesson. Meaning, as said in scene 11: if the bonds are polar but arranged perfectly symmetrically, the dipoles cancel. "Perfect symmetry" is defined on screen as "no lone pair on the centre, identical outer atoms". Assumptions checked: holds for every shape in this course (two to four electron groups); symmetric shapes with lone pairs on the centre (XeF₂, XeF₄, five or six groups) are outside the course and would need "perfect symmetry" judged from the whole electron arrangement; molecules with no polar bonds (H₂, Cl₂, and practically CH₄) are non-polar by step 1. It helps a new case: A1 and A2.
- **Two ropes on one knot (scene 3):** bond dipoles add as vectors, so the rope picture is accurate for direction and size. The "knot" is not an atom being pulled away; nothing moves. The narration says "the knot doesn't move", and the visual never shows an atom leaving.
- **"Like a short tripod" (scene 6):** the three hydrogens are the feet and nitrogen the top; it describes the atom positions only, which is how the shape is named.
- **Considered, not used:** "AXE notation" (useful later, adds symbols for a first exposure).

## Narration length estimate

Revision 2 count (7 November; build parser rules, the total is the sum of the 17 scene strings): **5,910 characters** (Revision 1 was 5,935 as a sum, stated 5,951 with the joining spaces). At 13.3 characters per second the speech is about 444 s; add about 6 s for the turning models in scenes 5, 6 and 8, 3 s for the dipole adder and group stepper to settle (3, 4), 2 s for the scene 11 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 45 s of quiet notes hold: **about 527 s**, inside 5,500 to about 7,000 characters and under 570 s.

Revision 1 estimate (superseded): **5,951 characters**, 17 scenes. At 13.3 characters per second the speech is about 447 s; add about 6 s for the turning models in scenes 5, 6 and 8, 2 s for the scene 11 hold, 3 s for the prediction countdown, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 47 s more of the quiet notes hold (about 82 s): **about 529 s**, inside the band and under the cap. Reserve trims: scene 1's third sentence, scene 3's last sentence (keep the chip), scene 16's third sentence.

## Scene list and build ids

Lesson key `c-y11-m1-v23` (route chem-y11-m1-v23; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m1-v23`.

In order (17 scene headings, all `### N.`): hook, bond-dipoles, adding-pulls, vsepr, two-three-groups, four-groups, prediction, cancel-or-add, lone-pairs, outer-atoms, method, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: 1 to 2 camera push into one C=O bond; 2 to 3 camera pull back; 3 to 4 clear change; 4 to 5 camera continue (the Lewis panel shrinks to a corner); 5 to 6 stage change (Revision 2: the tetrahedron model takes the stage; the shape table stays at the right), so the scenes 4 and 5 set-up runs about 60 s; 6 to 7 clear change; 7 to 8 camera continue; 8 to 9 and 9 to 10 model swap with the table kept; 10 to 11 clear change; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 45 s quiet). Review evidence paths: `checks/c-y11-m1-v23-learning-review.md`, `checks/c-y11-m1-v23-science-check.md`.

## Assets

Have (Revision 2, inspected 7 November; uniform scale only):
- `public/assets/chemistry/y11c-dry-ice-v1.png` (white dry-ice pellets in a white dish): scene 1, scene 8 thumbnail.
- `public/assets/chemistry/y11c-beaker-water-36ml-v1.png` (a beaker of clear water): scene 1, scene 8 thumbnail.
- `public/assets/chemistry/y11c-sample-sulfur-v1.png` (yellow sulfur on a watch glass): attempt 1 card picture.
- `public/assets/chemistry/y11c-sample-silicon-v1.png` and `y11c-sample-red-phosphorus-v1.png`: attempt 2 card pictures.
- `public/assets/chemistry/y11c-copper-wire-bent-v1.png` (brief 179, delivered): final frame.

Need: none.

Coded: the dipole adder and group stepper with their readouts, 3D ball-and-stick models with lone-pair lobes and angle arcs, bond dipole arrows, vector sums, Lewis panel, shape table, two-rope knot, method strip, chips, attempt cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used" and the cited sources.
2. Confirm the science of every learner-visible claim: the bond dipole convention; VSEPR as taught (groups, double bond as one group, lone pairs counted, shape named from atoms, lone pairs push harder); each shape and angle; the polarity of CO₂, H₂O, BCl₃, NH₃, CCl₄, CH₃Cl, H₂S, SiCl₄ and PCl₃; the direction of each overall dipole; four groups get furthest apart in three dimensions; "every outer electron" (not every electron) is held in a bond or lone pair; the dipole adder readouts (geometric, equal dipoles).
3. Confirm the memory aid's assumptions (two to four electron groups).
4. Confirm both attempt cards are original, carry every condition, and show nothing answer-bearing.
5. Confirm the syllabus quotes match the ledger (apostrophe restored).
6. Confirm no person, hand or face is drawn or requested (the tripod is a description only).
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script.
9. Confirm the opening frame against v22's actual final frame (assumed here) and that the final frame matches v24's opening.

## YouTube metadata (draft)

Title: Molecular Shapes and Polarity: Why Some Polar Bonds Cancel | Year 11 Chemistry

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year11/module1/lesson09.sa.html

Carbon dioxide and water both have polar bonds to oxygen, so why is water polar and carbon dioxide not? Learn how electron groups spread out to set a molecule's shape (VSEPR), the five shapes you need (linear, trigonal planar, tetrahedral, trigonal pyramidal and bent), and how shape decides whether bond dipoles cancel. 3D models throughout. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 1: Properties and Structure of Matter.
Syllabus content (NSW Chemistry Stage 6):
"investigate the differences between ionic and covalent compounds through:
- using nomenclature, valency and chemical formulae (including Lewis dot diagrams) (ACSCH029)
- examining the spectrum of bonds between atoms with varying degrees of polarity with respect to their constituent elements' positions on the periodic table
- modelling the shapes of molecular substances (ACSCH056, ACSCH057)"

Previous: Why ionic solids conduct only when their ions can move. Next: Why a metal can bend and still conduct electricity.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **Opening frame (reconciled by root, 5 November).** v23 opens on v22's actual final frame: bent water and straight CO₂ already drawn in 2D with bond-dipole arrows and "net?" marks. Scene 1 keeps them and lifts them into 3D on "shape"; the narration stands.
- **2. VSEPR added (root).** The site never teaches shapes explicitly; scenes 4 to 6 add VSEPR from OpenStax 2e 7.6 (route note). Confirm the acronym is spoken once.
- **3. BCl₃ for BF₃ (root).** Chosen to avoid the B–F difference above the site's ionic threshold. Confirm.
- **4. Lesson link (root).** No site lesson teaches shapes; the metadata links lesson 9 (molecular substances). Root to choose (lesson 19 holds the Lewis diagrams).
- **5. Site notes 1 and 2 (root).** Log the O 3.5 value and the HCl hydrogen-bond explanation if accepted.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is VSEPR followable in three short scenes; do the tip-to-tail sums read without vector teaching; is scene 10 one example too many), then the science check and Codex error check.
- Checker output (5 November): narration 5,951 characters; per scene (1 to 17): 362, 422, 472, 407, 391, 596, 122, 389, 364, 425, 393, 188, 301, 277, 315, 436, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

## Revision 2 (7 Nov 2026)

Findings from `../checks/c-y11-m1-v23-learning-review.md` and `../checks/c-y11-m1-v23-science-check.md` (brief 179; 0 blockers, 2 should fix):

1. **Wrong reason for tetrahedral (should fix):** "Four groups can't fit flat, so they spread out in three dimensions" became "Four groups get furthest apart in three dimensions" (scene 6; shorter; matches the repulsion cause in scene 4).
2. **Core electrons omitted (should fix):** scene 16 now says "every outer electron", the handoff tag and the final-frame description read "every outer electron held in a bond or lone pair", and "That's one reason" became "So" (funding the change). v24's opening tag is updated to match (same wave).

Visual upgrade (`../maths-visual-standard.md`, build-agent-brief root rules):
- Scene 1: painted anchors added (existing, inspected): dry ice (solid CO₂) and a beaker of water, with hand tags and a pen arrow; they return as thumbnails in scene 8.
- Live simulations: the dipole adder (bond-angle slider with "bond angle" and "overall pull" readouts, 0.00 at 180° to 1.41 at 90°; reused for CO₂ and H₂O in scene 8, 0.00 and 1.22) and the group stepper (2, 3, 4 groups with the angle readout 180°, 120°, 109.5°). Values checked by script (2 × cos(angle ÷ 2)).
- Cut: scene 6 is a stage change, so no set-up runs past about 60 s.
- Hand tags and pen marks added to scenes 1 to 6 and 8 to 11; framed answers with green ticks and red-struck slips with red hand tags in 8, 13 and 15; navy givens strips on the answer side of 13 and 15.
- Question cards carry pictures: sulfur (attempt 1); silicon and red phosphorus (attempt 2).
- Memory aid framed in scene 11 and on the notes screen; key notes cut to five short bullets with a 45 s quiet hold.
- Colour roles and type sizes stated in Decisions.
- New plates: none.

Narration: 5,910 characters as the sum of the 17 scene strings (Revision 1: 5,935 as a sum, 5,951 stated with joining spaces); about 527 s with holds. Bold cues quoted in spoken order; no em dashes.
