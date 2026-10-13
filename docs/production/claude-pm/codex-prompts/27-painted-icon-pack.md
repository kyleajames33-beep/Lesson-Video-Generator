# Brief 27: painted plates to replace weak coded icons in unpublished lessons

Read `00-standing-rules.md` first, then follow the "Style for every image" section of `01-assets-wave1-c1-b1.md`. Background: the owner reviewed B2b and said the coded cartoons look like they were drawn by a five-year-old in Paint and are hard to read. The audit is in `docs/production/claude-pm/assets/coded-icon-audit.md` (read the table for your lesson to see what each coded icon looked like and how big it is on screen).

## Style for every image

- Ink and watercolour textbook plate, not AI-glossy and not cartoon. Fine ink linework, soft transparent washes, warm natural colour, a little paper-grain texture inside the colour. Match the named existing plate for each item: `public/assets/biology/b2b-flower-cutaway-v1.png` and `b2b-bee-on-flower-v1.png` (botanical), `b3b-dairy-bull-cow-v1.png` (animals), `public/assets/chemistry/c3-iron-tube-start-v1.png` (apparatus). Open those three first.
- Transparent PNG with a real alpha channel. No background, no ground patch, no cast shadow, no glow, no white halo. Clean soft edges.
- No text, labels, numbers, arrows, watermarks or frames. The video draws arrows and labels over the plate.
- At least 1600 px on the long side (square 1600 x 1600 is fine unless told otherwise). At least 8% fully transparent margin on every side.
- Each plate must read clearly at 150 to 200 px on the long side. Use a bold, simple silhouette and one main subject. Do not fill the canvas with small detail that disappears when shrunk. Check every plate at 200 px on a checkerboard and on the cream paper colour `#f6f1e7`.
- Plain, scientifically correct subjects only. Where a description says what must be visible, that detail is the reason for the plate.
- No em dashes (U+2014) in any file you write.

## Aligned sets

Where a set is "aligned", every image in the set uses the same canvas size and the shared object does not move or change size between images (the video crossfades between them). Draw the shared part once, then add only the changing parts. Overlay the set at 50% opacity to check that the shared object lines up. Where a plate is marked "part", it is a separate transparent plate that the code will move on top of a base plate: draw it alone, on the same canvas size as its base, in the exact position it takes in the base image's rest state.

---

## B2b: pollination and seeds (do these first; the owner is watching this video)

Match `b2b-flower-cutaway-v1.png` unless noted. The video code already has the flower, bee, grass, onion, potato, mint, bean, seedling, ovule, ovary, pod, pollen grain and paintbrush plates. Do not remake those.

### Step cards (used at 40 px, 56 px, 64 px and about 270 px: make them bold and simple, one idea each)

1. `b2b-step-land-v1.png`: close-up of the top of a stigma (rounded, sticky, slightly feathery, pale green) with six to eight bright yellow pollen grains stuck on its surface. Side view. No other plant parts.
2. `b2b-step-tube-v1.png`: the same stigma top in the same position, with one pollen grain on it that has grown a thin pale-gold pollen tube pushing down into the style (cut away so the tube is visible inside the style, which continues down to the bottom of the canvas). Aligned with item 1: same canvas, same stigma size and position.
3. `b2b-step-join-v1.png`: close-up inside an ovule, centred: one large round egg cell with a clear nucleus, and one small sperm nucleus just touching and merging with the egg nucleus. Soft pale cell colours (peach cytoplasm, violet nucleus). Draw as a plate, not a diagram: no outline shapes with flat fill.
4. `b2b-step-seed-v1.png`: one whole intact seed (a plain brown seed with a seam, like a bean, front three-quarter view) resting alone. Aligned canvas size with items 1 to 3 (1600 x 1600).

### Zygote and embryo (fertilisation scene)

5. Aligned set, same canvas, centred on the same point, same scale: `b2b-zygote-1-v1.png` (a single large round plant zygote cell with nucleus), `b2b-zygote-2-v1.png` (two cells side by side), `b2b-zygote-4-v1.png` (four cells), `b2b-zygote-8-v1.png` (a compact cluster of eight cells). Plant cells, pale cream-green with thin cell walls and visible nuclei. The cluster grows but the overall centre stays fixed.
6. `b2b-embryo-v1.png`: a young plant embryo as seen inside a seed, standing upright: two plump pale cotyledon halves curving open, a tiny green shoot tip between them, a short pale root (radicle) pointing down. Clearly readable as "a tiny new plant", not a leaf pair on a stick.

### Vegetative propagation row (aligned set, one plant, four stages; each image is the same canvas 1600 x 1600 and the same herb species drawn like the mint plate `b2b-mint-cutting-glass-v1.png`)

7. `b2b-prop-parent-v1.png`: a healthy leafy herb plant growing from a small pot of soil, side view, full height, with a clear stem node where a piece could be cut.
8. `b2b-prop-piece-v1.png`: one cut stem piece from that plant lying upright on a plain surface, with two or three leaves and a clean cut end at the bottom. No roots. No pot.
9. `b2b-prop-rooting-v1.png`: the same cut piece standing in a jar of water or damp soil with fine white roots just starting from the base and one new leaf unfurling. Same piece, same size and position as item 8; the roots and the new leaf are the only additions.
10. `b2b-prop-new-plant-v1.png`: a young independent plant in its own small pot of soil, same species, with roots visible through a soil cut-away at the base. Used large and also at about 70 px twice as the "clone pair", so keep the silhouette bold.

### Pollen carriers

11. `b2b-bee-flying-v1.png`: a honey bee flying, side view facing right, wings spread and slightly blurred, pollen baskets full of yellow pollen on the hind legs, no flower. About 100 px on screen, so keep the body and wings clear. The code moves it from one flower to another.
12. `b2b-water-pollen-v1.png`: a few pale yellow pollen grains floating on the calm surface of clear water with gentle concentric ripples, slight top-down tilted view, landscape 2200 x 1600. Water edge soft, no shoreline.

### Seed dispersal (three scene plates, plus the travelling seeds)

13. `b2b-disp-wind-v1.png`: a dandelion seed head that is breaking up, with several parachute seeds (pappus with seed) lifting off and drifting to the right, view from the side, landscape 2200 x 1600. Seeds must show the fine feathery parachute and the small seed below it.
14. `b2b-disp-water-v1.png`: a coconut (in its husk, slightly open at the top, with a green sprout tip) floating on a calm shallow sea with small ripples around it, landscape 2200 x 1600.
15. `b2b-disp-animal-v1.png`: left half: a burr seed (small round spiky seed case with hooked spines) caught in the fur of a mammal's flank (kangaroo or dog, fur only, no head needed). Right half: a ripe red fleshy fruit hanging on a twig with a small bird (honeyeater or silvereye) perched beside it, beak close to the fruit. Landscape 2200 x 1600, the two groups clearly separated so either can be used alone.
16. `b2b-seed-parachute-v1.png`: one single dandelion parachute seed on its own, upright, feathery top and small seed below, 1600 x 1600. The code drifts this one across the screen.
17. `b2b-seed-burr-v1.png`: one burr seed on its own, 1600 x 1600.
18. `b2b-seed-fruit-v1.png`: one single ripe red fleshy fruit with a short stem on its own, 1600 x 1600.

### "Need to reach new places" (seeds-better scene; code arcs a seed from left to right across a barrier to an empty patch)

19. `b2b-far-fence-v1.png`: a short rural timber post-and-rail fence, side view, 3 to 4 posts, landscape 2200 x 800, transparent behind, no ground.
20. Aligned pair `b2b-far-patch-bare-v1.png` and `b2b-far-patch-sprout-v1.png`: a patch of bare brown soil with a few small stones, and the same patch with one small green seedling poking through. Same canvas (2200 x 800), same soil patch; only the seedling is added. These show where the far seed lands.

### Memory scene and plant memory glyphs

21. Reuse items 1 to 4 for the memory cards and the small cell glyphs. No separate plates.

---

## G01: photosynthesis and burning (top priority with B2b; the owner approved the rest of the video and will render once this plate is in)

Match `b2b-flower-cutaway-v1.png` for the foliage and bark detail.

G1. `g1-tree-v1.png`: one leafy broadleaf tree (eucalypt or fig is ideal), side view, with a visible trunk and the main roots spreading below a soft ground line, so a viewer reads "tree" at once. Landscape or portrait, 1800 x 2200 (portrait). Layout rule: the canopy must be an open, rounded crown in the upper 55% of the canvas, with at least 12% clear transparent space on both sides, so the code can point an arrow into the leaves from the left (CO2 in), another label out at the top right (sugar and oxygen out), and an arrow rising into the trunk base and roots from underneath (water up). The roots must be visible below the ground line. Draw the ground line as a thin cross-section of soil that includes the root zone, not a full landscape.
G2. `g1-leaf-v1.png`: one large green leaf (broadleaf, like the tree's), shown flat from the front, with its midrib and fine veins, a short leaf stalk on the left, filling about 70% of a landscape canvas 2200 x 1400. Used large on screen (about 530 x 240 px) with gas arrows in and out of its surface.
G3. Small icons: use G1 and G2 scaled down for the 80 to 90 px "photosynthesis" icons. No separate plates.
G4. `g1-sugar-bowl-v1.png`: a plain white ceramic bowl of white sugar crystals with a teaspoon resting in it, three-quarter side view, 1600 x 1400. It sits on screen at about 600 x 330 px beside a coded clock and calendar. Sugar must look like granules, not salt or flour.
G5. `g1-flame-v1.png`: one stylised-realistic orange and yellow flame (a candle-sized flame) on its own, 1400 x 1800. Used at 80 to 90 px in a table row beside the leaf icon. Check at 90 px.

The campfire and ash plates are already painted and used; do not remake them.

---

## C04a: gas pressure (match `public/assets/chemistry/c4a-syringe-barrel-v1.png` and `c3-iron-tube-start-v1.png`)

The lesson already uses the painted syringe barrel. Only the cylinder and plunger assets below are missing.

C1. Aligned set (same canvas 2200 x 1000, barrel centred, barrel never moves): `c4a-cylinder-body-v1.png` (a steel gas cylinder with a thick glass-clear wall seen from the side, open at the right end, no piston) and `c4a-cylinder-piston-v1.png` (part: a heavy steel piston disc with a short rod pointing right, drawn in the correct position for the cylinder at half volume). The code moves the piston along the cylinder, so the piston plate must be on the same canvas size as the body, with the piston shown in position 1 (about 50% along), and have transparent space on both sides so it can slide left and right by sliding the whole plate.
C2. `c4a-plunger-v1.png` check: the existing plate is not used because the rod leaves the frame. Make `c4a-plunger-part-v1.png` as a separate part for the syringe (matching `c4a-syringe-barrel-v1.png`): grey glass-clear plunger with dark rubber seal, the rod short enough to fit on canvas 2000 x 500, rod pointing right, seal at the left. The code slides it.
C3. Small lab icons (shared with C04b, each 1600 x 1600, bold silhouette, readable at 100 px): `c4-icon-plunger-push-v1.png` (a hand-free plunger being pressed, drawn plain, no arrow), `c4-icon-padlock-box-v1.png` (a small sealed box with a closed padlock on top), `c4-icon-dropper-v1.png` (a glass dropper with one coloured drop hanging from the tip).
C4. `c4-icon-carbon-lump-v1.png`: one lump of black charcoal, three-quarter view, 1600 x 1600 (replaces a grey rectangle labelled C(s), about 200 x 150 px).

## C04b: sealed tubes and rates

C5. `c4b-seesaw-base-v1.png` and `c4b-seesaw-beam-v1.png` (part): a simple wooden seesaw: a triangular wooden pivot (base) and a plank (beam) drawn on the same 2200 x 1000 canvas, the beam horizontal and centred over the pivot. The beam plate is rotated by the code around the pivot. No children and no weights drawn.

(Plunger, dropper and thermometer icons use C3. Gas tubes: wire the existing `c4b-sealed-tube-v1.png`; no new plate unless Claude asks.)

## C05: equilibrium expressions

C6. `c5-flask-clear-v1.png`: a round-bottomed or conical laboratory flask with clear pale solution about half full, side view, 1200 x 1600, in the style of `c3-iron-tube-start-v1.png` (existing copper tube pair stays as delivered; wire them).
C7. `c5-solid-lump-v1.png`: one grey metal pellet or lump of solid, 1600 x 1600 (replaces a grey rectangle with a cross).

## C06: equilibrium calculations

C8. `c6-furnace-tube-v1.png`: a small tube furnace (a ceramic-and-steel box with a glowing orange heating zone and a glass tube running through it), side view, landscape 2200 x 900. Used at about 340 x 120 px, so keep the glow and the glass tube as the clearly readable features.

(NO2 vessels: wire the existing `c6-no2-vessel-colourless-v1.png` and `c6-no2-vessel-brown-v1.png`.)

---

## B3a: fertilisation and early pregnancy (match `public/assets/biology/b3a-tract-thick-lining-v1.png`)

P1. Sperm and egg plates, aligned on one canvas 2200 x 1600 so the code can place and move them:
   - `b3a-sperm-v1.png`: one human sperm cell, side view, head on the right, a distinct acrosome cap on the head, a short mid piece, and a long tail curving to the left. Plain wash colours, microscope-textbook style. The tail will be shown or hidden by code, so also make `b3a-sperm-head-v1.png` (part): head and mid piece only, same canvas and exact position as in `b3a-sperm-v1.png`.
   - `b3a-egg-v1.png`: one human egg cell, large round, centred, with a thick clear outer layer (zona) around a peach cytoplasm with a visible nucleus, canvas 2000 x 2000.
   - `b3a-egg-open-v1.png`: aligned with `b3a-egg-v1.png` (same canvas, same egg position and size): the same egg but with a gap in the outer layer on the left side where a sperm enters.
   - `b3a-egg-nucleus-v1.png` (part): the nucleus alone at the exact position it has in the egg plates, so the code can fade it.
P2. Aligned set `b3a-test-1-v1.png`, `b3a-test-2-v1.png`: a home pregnancy test stick, flat, top view, with a result window on the right and a sample end on the left. First image: one control line only. Second image: two lines. Same canvas 2200 x 600, same stick, only the second line differs.
P3. `b3a-embryo-v1.png`: a very early human embryo (a few weeks), curled, side view, about the size of a bean on a canvas 1200 x 1200, naturalistic. Replaces a beige squiggle at about 110 px.
P4. `b3a-petri-dish-v1.png`: a shallow lab petri dish, three-quarter view from slightly above, 1600 x 800, empty and clear (the cleavage plates are placed in it by code).

## B3a part 2: hormone control of pregnancy and birth (match `b3a-tract-thick-lining-v1.png`)

P5. Aligned set, canvas 1800 x 1600: `b3a2-brain-v1.png` (a human brain in side section, head facing left, showing the cerebrum, cerebellum, brain stem and the pituitary gland hanging below the base on a short stalk) and `b3a2-pituitary-part-v1.png` (part: the pituitary gland alone, in the exact position it has in the brain plate, so the code can pulse it).
P6. Aligned set, same canvas 2000 x 1500: `b3a2-milk-gland-empty-v1.png` (a breast cut-away showing a branching duct tree with five or six small round milk sacs (alveoli) and a nipple on the right, all empty and pale) and `b3a2-milk-gland-full-v1.png` (the same drawing with the sacs full of cream-white milk). The duct layout, nipple and sacs must not move between the two images. The code adds the squeezing ring and arrows.
P7. `b3a2-tablet-v1.png`: one two-colour capsule tablet, 1600 x 800, readable at 110 px.

## B3b: reproduction in agriculture (match `public/assets/biology/b3b-dairy-bull-cow-v1.png`)

The painted cow, bull, calf and sheep plates already exist; wire them. New plates:

A1. `b3b-cow-tract-v1.png`: a cow's reproductive tract in side cut-away: vagina, cervix, uterine body, two uterine horns, two oviducts with funnels, two ovaries (one on each side). Clean anatomy, soft pink tissue washes, the lumen visible so a straw can be shown entering and an egg can travel from an ovary to the funnel. Canvas 2200 x 1400. No labels. This replaces an unreadable coded tube diagram.
A2. Aligned pair `b3b-straw-v1.png` and `b3b-straw-frost-v1.png`: one semen straw (a thin pale yellow plastic tube with a coloured plug at one end), horizontal, canvas 2200 x 500. Second image: the same straw covered in fine frost. Same canvas, same straw position.
A3. Aligned pair `b3b-vial-empty-v1.png` and `b3b-vial-full-v1.png`: one glass collection vial, upright, with a screw cap (empty, then half full of creamy semen), canvas 1000 x 1600.
A4. `b3b-freezer-v1.png`: a small laboratory liquid-nitrogen storage tank (silver dewar) with the lid open and a rack of straws visible, 1600 x 1600.
A5. `b3b-forceps-v1.png`: a pair of fine steel forceps, tips pointing down, slightly open, 800 x 1600.
A6. `b3b-cover-bag-v1.png`: a translucent paper or glassine cover bag (open at the bottom, tied or folded at the top), 1400 x 2000, so the video can lower it over a wheat floret.
A7. `b3b-potato-plant-v1.png` and `b3b-potato-plant-sick-v1.png` (aligned): a young potato plant above ground with five or six compound leaves (match `b2b-potato-tuber-sprouts-v1.png`); second image has brown blight spots on the leaves. Same canvas 1400 x 1600, same plant.
A8. `b3b-barn-v1.png`: a simple red-brown timber barn, front three-quarter view, 1600 x 1400.

## B4: DNA replication (match `public/assets/biology/b2c-amoeba-fission-1-v1.png` for ink-and-wash line quality)

D1. `b4-person-adult-v1.png` and `b4-person-child-v1.png`: a simple figure of an adult and a child standing, full body, front view, plain clothes, gentle painted style (no cartoon faces), same canvas 800 x 1600 and the same figure style, child about 60% of adult height. Used at 80 to 140 px.
D2. `b4-car-yellow-v1.png` and `b4-car-blue-v1.png`: a small hatchback car, side view facing right, yellow and blue, 1600 x 800 each. The code flips the blue car to face left. Used at about 130 px.

---

## Priority order if time is short

1. G01: G1, G2 (the tree and leaf), then G4, G5.
2. B2b: items 1 to 4, 6 to 10, 13 to 20, then 5, 11, 12.
3. B3b: A1, A2, A3. B3a2: P5, P6. B3a: P1, P2.
4. C04a, C04b, C05, C06, B4 and the rest.

## Record

Write `docs/production/claude-pm/assets/art-icons-27-provenance.json` (same fields as earlier provenance files: file, prompt, model, retakes, sha256, checks, plus a `set` field naming the aligned set and a `part_of` field for part plates). Keep QA images (checkerboard at full size, checkerboard at 200 px, and the aligned-set overlay for each set) in `docs/production/claude-pm/assets/art-icons-27-qa/`. Retake any plate that fails: it has text, a halo, a background, a flat cartoon look, or does not read at 200 px. Do not wire anything into the video code. Append a hand-in to `status.md` under "Codex hand-ins": files made, anything not done, and anything you think is scientifically wrong in a description (report it, do not change the description).
