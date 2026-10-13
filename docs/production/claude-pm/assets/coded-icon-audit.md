# Coded pictorial icon audit (14 October 2026)

Scope: SVG drawings of objects, organisms and processes in `src/explainer/lessons/*`. Ignored: graphs, tables, equations, ladders, particle dots, rate bars, loop diagrams, chromosomes, labels, arrows, gas-tube particle fills, calculation cards.
Read from code and existing stills only. Nothing was rendered. Sizes are approximate on-screen sizes at 1920 x 1080.
Verdicts: unreadable = a viewer cannot tell what it is; weak = readable but looks like a child's drawing next to the painted plates; fine = leave coded.
Anim = how it changes in the scene (decides whether a painted replacement needs an aligned set or a part code can move).

Part 1 is unpublished lessons (priority). Part 2 is plates that already exist in `public/assets` but are not wired into the code (no new art needed). Part 3 is published lessons ("only if re-rendered").

## Part 1. Unpublished lessons

### B2b (bio-m5-b02b) : 18 items to replace

| # | Icon | Component (file:line) | Meant to show | Scenes and size | Verdict | Anim |
|---|---|---|---|---|---|---|
| 1 | Embryo sprout (two green leaf ellipses on a stick) | `Embryo` s3.tsx:11 | the embryo plant after zygote divides | `fertilisation`, about 230 x 245 px at (1450,520) | unreadable | Grows 0.6 to 1.0 and crossfades in from the cell cluster |
| 2 | Zygote and cell divisions (flat pink circles 1, 2, 4, 8) | inline s3.tsx:34-58 and 60-66 | zygote dividing again and again | `fertilisation`, about 250 px cluster at (1450,520) | weak | Cell count steps 1, 2, 4, 8 then fades to embryo (aligned set) |
| 3 | Parent plant ("the parent plant", "a piece") | `MiniPlant` s4.tsx:15, used s4.tsx:60 | parent plant and the piece taken from it | `vegetative`, about 170 x 190 px at (330,680) | unreadable | Static, fades in. Dashed red line marks "a piece" |
| 4 | Plant with roots ("roots and leaves grow") | inline s4.tsx:64-70 | cutting growing roots and leaves | `vegetative`, about 200 x 330 px at (1100,640) | unreadable | Roots path fades in after leaves (needs before and after) |
| 5 | Separate new plant | `MiniPlant` s4.tsx:76 | independent new plant | `vegetative`, about 170 x 190 px at (1640,680) | unreadable | Static, fades in |
| 6 | Clone pair of sprouts | `MiniPlant` s4.tsx:99 | two identical clones | `vegetative`, 2 x about 70 px at (800,950) and (880,950) | unreadable | Static |
| 7 | Bee and wind "no carrier needed" | `BeeIcon` shared.tsx:~170 and wavy path, s4.tsx:103-104 | no carrier is needed for vegetative spread | `vegetative`, bee about 100 px at (1360,926) | weak (plate `b2b-bee-on-flower` exists, see Part 2) | Static, red cross draws over it |
| 8 | Bee in flight | `BeeIcon` s2.tsx (flightP), shared.tsx | bee carrying pollen to the stigma | `pollination`, about 100 px, flies from bee plate to flower | weak | Moves along a path with slight rotation (needs a separate flying bee) |
| 9 | Seed-dispersal wind icon (blue lines and a dot) | `WindIcon` s3.tsx:112 | wind carries seeds | `dispersal`, about 190 x 100 px at (760,330) | unreadable | Wind lines draw on; seed dot static |
| 10 | Seed-dispersal water icon (waves and a dot) | `WaterIcon` s3.tsx:118 | water carries seeds | `dispersal`, about 190 x 90 px at (1060,330) | unreadable | Waves draw on |
| 11 | Seed-dispersal animal icon (grey blob with beak, yellow beak triangle) | `AnimalIcon` s3.tsx:124 | animals carry seeds (fruit eaten, burrs in fur) | `dispersal`, about 150 x 130 px at (1380,320) | unreadable | Fades in |
| 12 | "Need to reach new places" seed over a fence | inline s4.tsx:~145-151 (seed ellipse, fence, dashed "new place" box) | a seed travels far to an empty patch | `seeds-better`, about 970 x 120 px strip at y 860-930 | unreadable (owner: "looks nothing like a seed moving around") | Seed ellipse moves along an arc from x 760 to 1490 |
| 13 | Pollen carried by water (wave lines and 4 yellow dots) | inline s2.tsx:~63 | water as a pollen carrier | `pollination`, about 230 x 200 px at (1620-1850,450-660) | weak | Dots bob; static waves |
| 14 | Step card "land" (grains on a stigma) | `SeqIcon` k=land, shared.tsx:98 | pollen lands on the stigma | `SeqStrip` pills 56 px in `pollination`, `pollen-tube`, `fertilisation`, `seed-fruit`; sentence cards 64 px in `worked-outline`; memory cards about 270 x 190 px in `memory`; chips 40 px in `attempt` | unreadable | Static, appears in order |
| 15 | Step card "tube" (pollen tube growing) | `SeqIcon` k=tube | pollen tube grows down | same places as 14 | unreadable | Static |
| 16 | Step card "join" (sperm nucleus and egg) | `SeqIcon` k=join | sperm joins egg cell | same places as 14 | unreadable | Static |
| 17 | Step card "seed" | `SeqIcon` k=seed | ovule becomes a seed | same places as 14 | unreadable | Static |
| 18 | Three tiny cell glyphs (egg and sperm, pollen, joined cell) | `TinyCells` s5.tsx:190 | memory aid cell shapes | `memory` bottom right, about 3 x 60 px | weak | Fades in |

Fine in B2b (leave coded): pollen grains and sperm dots (`SpermDot`, `EggDot`, `Specks`, small, move along paths), `Droplet`, pollen tube path (drawn over the flower plate and must follow exact coordinates), germination condition glyphs (water drop, oxygen bubbles, thermometer in `dispersal`), `PaperPill`, `Cross`, wind lines in `pollination`, flowers, bee, grass, onion, potato, mint, bean, ovule, pod, grain, bagged flower and paintbrush plates (already painted).
Also in B2b: the pollen grain drawn as a yellow dotted circle (about 170 px) in `male-side` (s1.tsx:~38) should use the existing `b2b-pollen-grain-closeup-v1.png` (Part 2).

### G01 (chem-m5-g01) : 6 items

| # | Icon | Component (file:line) | Meant to show | Scenes and size | Verdict | Anim |
|---|---|---|---|---|---|---|
| 1 | Tree (brown stick, five green circles) | inline s1.tsx:40-44 | a tree that makes sugar and wood from CO2 and water | `SceneHook`, about 320 x 430 px at x 1244-1560, y 284-710. Coded arrows: CO2 in at (1150-1262, 420-450), H2O up at (1400, 790-730), "sugar and wood" label out at (1500-1640, 262-330) | unreadable (owner flagged) | Fades in only |
| 2 | Leaf (flat green blob with vein lines) | inline s3.tsx:98-100 | the leaf in an open system | `ScenePhotoLeaf`, about 530 x 240 px at (700-1230, 290-560). Flow arrows in from the left (CO2) and out to the right (O2) and a sun top right | weak | Static, dims when "cut" (live to dead via opacity) |
| 3 | Sun (circle with 10 rays) | inline s3.tsx:102-104 | sunlight energy in | `ScenePhotoLeaf`, about 150 px at (1560,250) | fine (simple symbol) | Dims with the leaf |
| 4 | Sugar bowl with spoon | `Bowl` s2.tsx:114, drawn at scale 2 (s2.tsx:141) | sugar sits there for years without burning (heading, not speed) | `SceneHeading`, about 600 x 330 px at (1150,700) | weak | Fades in beside the clock and calendar |
| 5 | Fire icon (orange flame) | `FireIcon` parts.tsx:312 | "burning" row symbol | `SceneAid` row icon 90 px (s3.tsx:155), `SceneDecision` 80 px (s4.tsx:157) | weak | Static, lit state is opacity |
| 6 | Leaf icon (green leaf) | `LeafIcon` parts.tsx:318 | "photosynthesis" row symbol | `SceneAid` 90 px (s3.tsx:155), `SceneDecision` 80 px (s4.tsx:163) | weak | Static |

Fine in G01: campfire and ash plates (painted, already used for log, fire and ash), flask plate, `ClockCal`, `Compass`, `HeatIcon`, `SpreadIcon`, `DgIcon`, `Crystal` lattice (sugar crystal drawn as a dot grid, about 150 px, part of the reaction box particles), `ReactionBox`, `Tube` particle tubes, rate bars, level diagrams.
G01 has no coded log. The only other pictorial items are 2, 4, 5 and 6. Items 5 and 6 are 80 to 90 px, so a painted tree and leaf plate can be downscaled for them (Part 1 brief item G3).

### C04a (chem-m5-c04a) : 5 items

| # | Icon | Component (file:line) | Meant to show | Scenes and size | Verdict | Anim |
|---|---|---|---|---|---|---|
| 1 | Steel cylinder and piston (coded stand-in, no painted version) | `Syringe` with `cyl`, parts.tsx:32 | a gas cylinder with a fixed piston (attempt questions) | `SceneAttempt` s4.tsx:111 (760 px wide) and s5.tsx:30, 77 (900 px wide) | weak | Piston slides; gas dots inside are coded |
| 2 | Plunger and rod of the syringe | inside `Syringe` parts.tsx (coded by design, see assets.ts README) | plunger sliding half to double volume | all Syringe scenes, 600 to 1250 px wide | weak (the painted barrel is fine, the plunger beside it is coded) | Slides left and right; needs a painted part that code can move (see brief) |
| 3 | `PlungerIcon` (push arrow) | parts.tsx:191 | "squeeze the syringe" | s4.tsx:77 about 160 x 50 px; s5.tsx:120 about 200 x 70 px | weak | Fades in |
| 4 | `LockBoxIcon` (box with padlock) | parts.tsx:202 | "fixed volume, nothing can change" | s4.tsx:78 about 160 x 100 px; s5.tsx:122 about 190 x 120 px | weak | Fades in |
| 5 | `DropperIcon` (dropper and red drop) | parts.tsx:212 | "add a reactant" | s5.tsx:121 about 70 x 150 px | weak | Fades in |

Fine in C04a: `Dial`, `Gauge` (instrument faces), `TempGlyph` thermometer, `NetBar`, painted flask thumbnail, painted barrel.
Also: `C(s)` grey rectangles (carbon block, 200 x 150 px) in `Solids do not count`, s3.tsx:105 and 112: weak, static. Optional painted charcoal lump (brief item).

### C04b (chem-m5-c04b) : 7 items

| # | Icon | Component (file:line) | Meant to show | Scenes and size | Verdict | Anim |
|---|---|---|---|---|---|---|
| 1 | Gas tubes with metal clamps (coded glass) | `GasTube` parts.tsx:57 | sealed tubes of H2, I2, HI | s1 (two tubes), s3 (620 x 140 horizontal), s4 (540 x 140 and 90 x 250), s5 (170 x 420) | weak (plate `c4b-sealed-tube-v1.png` exists, not wired, see Part 2) | Dots move inside; tube body static |
| 2 | Metal catalyst piece | `Crumple` parts.tsx:98 | catalyst dropped in | s1:29, s4:25, 140, s5:64, 159, 213; 100 to 140 px | fine (painted plate wired via `HAVE`) | Falls and rotates |
| 3 | `Plunger` (syringe block) | parts.tsx:305 | "squeeze" on a worked row | s4.tsx:120, 138; about 65 x 60 px | weak | Moves down 24 px |
| 4 | `Thermo` thermometer | parts.tsx:315 and `Thermo2` s1.tsx:61 | "heat it" | s4.tsx:118; s1.tsx:34; about 40 x 90 px | fine (tiny functional glyph) | Static |
| 5 | `Dropper` | parts.tsx:324 | "add some" | s4.tsx:112; about 40 x 110 px | weak | Static |
| 6 | `Seesaw` | parts.tsx:333 | balance of forward and reverse rates | s3.tsx:186 about 330 x 130 px; s5.tsx:234 small | weak | Beam tilts around the pivot; needs a pivot and a beam part |
| 7 | Cylinder for `Ball` profile hill | `Ball` parts.tsx:204 | ball on an energy profile | s1.tsx:122, s2.tsx:79 | fine (diagram element) | Rolls |

### C05 (chem-m5-c05) : 3 items

| # | Icon | Component (file:line) | Meant to show | Scenes and size | Verdict | Anim |
|---|---|---|---|---|---|---|
| 1 | Copper test tube (coded) | `CuTube` parts.tsx:215 | pale blue to deep blue copper solution | s5.tsx:37 (64 x 210 px), s4.tsx:85 (70 x 220 px) | weak (aligned pair `c5-copper-tube-pale-v1.png` and `-deep-v1.png` exist, not wired, see Part 2) | Colour change |
| 2 | Clear flask | `Flask` parts.tsx:230 | a flask of clear solution | s4.tsx:60 (110 x 150 px), s5.tsx:42 (130 x 170 px) | weak | Fades in |
| 3 | Grey solid block (rect with cross) | inline s4.tsx:137 | a solid is ignored in K | `Solids` icon, about 90 x 58 px | weak | Static |

### C06 (chem-m5-c06) : 3 items

| # | Icon | Component (file:line) | Meant to show | Scenes and size | Verdict | Anim |
|---|---|---|---|---|---|---|
| 1 | NO2 vessel (coded flask, brown tint) | `CodedVessel` parts.tsx:118 | N2O4 and NO2 vessel colour question | s5.tsx:45, 101, size about 360 x 480 px | weak (plates `c6-no2-vessel-colourless-v1.png` and `c6-no2-vessel-brown-v1.png` exist, assets.ts only lists a different name, see Part 2) | Colour tint varies continuously |
| 2 | Furnace with tube | `FurnaceIcon` parts.tsx:164 | "high temperature reaction" next-step teaser | s5.tsx:260, about 340 x 120 px | weak | Flame flickers |
| 3 | Hot tubes | `HotTube` parts.tsx:64 over `GasTube` | hot sealed tube | s2, s3, s4 (140 x 330 px) | weak (same as C04b item 1) | Dots only |

### B3a (bio-m5-b03a) : 6 items

| # | Icon | Component (file:line) | Meant to show | Scenes and size | Verdict | Anim |
|---|---|---|---|---|---|---|
| 1 | Sperm cell (blue head, orange mid piece, wavy tail) | `Sperm` shared.tsx:169 | sperm swimming to the egg and entering | `SceneGametes` s1.tsx:122 (about 370 px long), `SceneZygote` s1.tsx:179 (smaller) | weak | Tail waves; head moves in; tail drops away on entry |
| 2 | Egg cell (peach disc, dots, pale ring, purple nucleus) | `Egg` shared.tsx:191 | the egg and its outer layer | s1.tsx:123, 173; about 460 px | weak | Outer ring opens (gap), nucleus fades as sperm nucleus merges |
| 3 | Pregnancy test stick | `TestStick` shared.tsx:247 | hCG positive test | s1.tsx:31 (700 x 160 px), s3.tsx:148 (400 x 90 px) | weak | Second line draws in |
| 4 | Embryo drawing (curled beige blob) | `EmbryoDraw` s4.tsx:151 | the embryo in the exchange panel | s4.tsx:172, 110 px | weak | Static |
| 5 | Petri dish with embryo plate | `Dish` s5.tsx:125 | embryo in a dish (feedback) | about 190 x 70 px | weak | Static |
| 6 | Cleavage cell circles | s2.tsx:48-50 | zygote splitting to two cells | `SceneCleavage`, about 190 px, 128 px | weak (painted `b3a-cleavage-1..5` exist and are used next to them) | Splits apart |

Fine in B3a: tract plates, implantation plates, fetus plate, placenta exchange panel (diagram), hormone graphs, organ chains, rail.
Brief 23 items for B3a (ovary plates) are in B3a part 2 below.

### B3a part 2 (bio-m5-b03a2) : 6 items

| # | Icon | Component (file:line) | Meant to show | Scenes and size | Verdict | Anim |
|---|---|---|---|---|---|---|
| 1 | Brain with pituitary | `Brain` shared.tsx:32 | brain and pituitary gland | s1.tsx:97, s2.tsx:35, s3.tsx:137, s4.tsx:78, 117, s5.tsx:121; about 280 x 220 px | weak | Pituitary pulses; fade in |
| 2 | Milk gland schematic | `MilkGland` shared.tsx:136 | milk sacs, ducts, nipple filling and squeezing | s4.tsx:79, 118 (about 700 x 520 px), s5.tsx:159 (700 px), small 250 px in s1 and s5 | weak | Sacs fill, squeeze, crescent oxytocin ring (keep a coded overlay on a painted base) |
| 3 | Tablet (half yellow capsule) | `Tablet` shared.tsx:191 | a drug tablet | s5.tsx:59, 122; about 110 px | weak | Static |
| 4 | Ovary inset (cropped from tract plate) | `OvaryRound` shared.tsx:225 | ovary with follicle | feedback scene | weak, already covered by Brief 23 items 7 and 8 (`b3a2-ovary-closeup-v1.png`, `b3a2-ovary-no-ripening-v1.png` exist, not wired) | Static pair |
| 5 | Egg mark (red ring) | `EggMark` shared.tsx:216 | egg released | small 28 px | fine | Static |
| 6 | Chain icons (circle badges with mini glyphs) | `ChainIcon` shared.tsx:116 | organ chain steps | s3.tsx:155, 218 (92 px), s5.tsx:270 | fine (badges, tiny) | Lit and grey |

Fine in B3a2: thermometer and thermostat (animated mercury), muscle cell with receptor sockets (schematic), loop cards, graphs, cervix plates (painted).

### B3b (bio-m5-b03b) : 10 items

| # | Icon | Component (file:line) | Meant to show | Scenes and size | Verdict | Anim |
|---|---|---|---|---|---|---|
| 1 | Cow, bull and sheep icons | `AnimalIcon` shared.tsx:69 | the animals in rows, herds and pans | s2.tsx:52, 72, 79, 145; s4.tsx:110-117, 153, 214; s5.tsx:54, 60; 50 to 150 px | weak (painted `b3b-dairy-cow-side`, `-bull-side`, `-calf-side`, `merino-sheep-side` exist, not wired, see Part 2) | Static; grey and ring states are overlays |
| 2 | Herd grid (many tiny animals recoloured) | `HerdGrid` shared.tsx:292 | gene pool of herd, colour per animal | s2.tsx:42, s4.tsx:148, s5.tsx:104 | fine (must stay coded: per-animal colour) |
| 3 | Insemination straws (yellow capsules, frosted) | `Straw` shared.tsx:109 | frozen semen straws | s1.tsx:87, 99, 110, 175; s2.tsx:129; s4.tsx:111, 206; s5.tsx:55, 63; 45 to 140 px long | weak | Straws move, tilt and frost |
| 4 | Cow reproductive tract cut-away (coded tubes and ovals) | `CowTract` shared.tsx:401 | cow tract where straw is placed and the egg released | s1.tsx:109, 147; about 560 x 340 px | unreadable | Dot (egg) moves from ovary to funnel; straw moves in |
| 5 | Collection vial and freezer | inline s1.tsx:79-94 | semen vial and freezer box | `SceneInsemination`, vial 80 x 180 px, freezer 150 x 200 px | weak | Vial fills; freezer door closes |
| 6 | Forceps | `Forceps` shared.tsx:343 | removing anthers (emasculation) | s3.tsx:85, s5.tsx:159; about 60 x 240 px | weak | Opens and moves |
| 7 | Cover bag | `CoverBag` shared.tsx:352 | bag over the wheat floret | s3.tsx:91 (about 500 x 720 px), s5.tsx:161 | weak | Lowers over the floret |
| 8 | Wheat plant icon | `WheatIcon` shared.tsx:142 | healthy and rusted wheat plants in rows | s3.tsx:115, 171, 235; 60 to 90 px | weak (painted `b3b-wheat-ear-floret` and `b3b-wheat-rust-leaf` exist) | Rust spots and shield overlay |
| 9 | Potato plant (brown box, green leaves) | `PotatoPlant` s3.tsx:257 | a potato plant with disease spots | `SceneCloning`, about 90 px; row of several | weak | Spots overlay |
| 10 | Barn | `BarnIcon` shared.tsx:134 | barn for "farm" | s2.tsx:128, 145; s5.tsx:59; 70 px | weak | Static |

Fine in B3b: `CoinIcon`, `HeartIcon`, `Balance`, `ShieldBreak` (symbols with overlays), `Wisp` (wind doodle), pollen flow dots, scorecard.

### B4 (bio-m5-b04) : 3 items

| # | Icon | Component (file:line) | Meant to show | Scenes and size | Verdict | Anim |
|---|---|---|---|---|---|---|
| 1 | Parent and child person figures | `Person` s4b.tsx:29 | person with changed DNA and their child | `SceneErrorsEffects` (s4b.tsx:47), about 80 to 140 px | weak | Static |
| 2 | Cars (antiparallel traffic lanes) | `Car` s2.tsx:14 | two cars in opposite lanes for antiparallel strands | `SceneAntiparallel`, about 130 x 60 px | weak | Drive along lanes in opposite directions |
| 3 | Generic cell blob | `Blob` s4b.tsx:26 with `Mini` | a cell that carries the changed DNA | s4b.tsx:102-130; 280 to 420 px | weak | Splits in two (aligned count) |

Fine in B4: ladders, tiles, `Helicase`, `Polymerase`, `RepairIcon`, `HalfIcon`, `TwistHelix` (coded enzyme and helix icons that must follow the strands), amoeba plate (painted), `Clock`.

## Part 2. Plates that already exist but are not wired (no new art)

| Lesson | Existing file | Replaces |
|---|---|---|
| B2b | `b2b-pollen-grain-closeup-v1.png` | coded pollen grain circle in `male-side` and `pollen-tube` panel (the panel already uses it) |
| B2b | `b2b-bee-on-flower-v1.png`, `b2b-grass-flower-wind-v1.png` | `BeeIcon` and wavy-line wind in `vegetative` "no carrier needed" (use the plates scaled down, cross over them) |
| B3b | `b3b-dairy-cow-side-v1.png`, `b3b-dairy-bull-side-v1.png`, `b3b-calf-side-v1.png`, `b3b-merino-sheep-side-v1.png` | `AnimalIcon` in rows and pans (herd grids stay coded) |
| B3b | `b3b-wheat-ear-floret-v1.png`, `b3b-wheat-rust-leaf-v1.png`, `b2b-potato-tuber-sprouts-v1.png` | `WheatIcon`, `PotatoPlant` |
| B3a2 | `b3a2-ovary-closeup-v1.png`, `b3a2-ovary-no-ripening-v1.png` | `OvaryRound` crop |
| C05 | `c5-copper-tube-pale-v1.png`, `c5-copper-tube-deep-v1.png` | `CuTube` |
| C06 | `c6-no2-vessel-colourless-v1.png`, `c6-no2-vessel-brown-v1.png` | `CodedVessel` (assets.ts lists the wrong name `c6-no2-vessel-v1.png`) |
| C04b | `c4b-sealed-tube-v1.png` | vertical `GasTube` glass (horizontal variants s3 and s4 would need their own plate) |
| C04a | `c4a-syringe-plunger-v1.png` | not used by design (rod would leave the frame); see brief item for a plunger the code can slide |
| B3a | `b3a-cleavage-1..5-v1.png` | circle cells in `SceneCleavage` |

## Part 3. Published lessons (only if re-rendered)

| Lesson | Icon (file:line) | Verdict |
|---|---|---|
| mould | `SporeCases` stalks and sporangia, scenes.tsx:144 (about 700 x 340 px, grow, crack and burst) | weak |
| mould | `Cond` icons (food, water drop, thermometer), scenes.tsx:345-347, about 60 px | fine (symbols) |
| bio-m5-b02a | `Parent` figure, shared.tsx:112 (130 to 250 px, used in `s2`, `s3`, `s5`) | weak |
| bio-m5-b02a | `FishIcon`, `SharkIcon`, `SealIcon`, shared.tsx:57, 94, 102 (50 to 120 px, counted icons) | weak |
| bio-m5-b01 | `Berry` shared.tsx:137 (about 110 px), `Sun` and `Germ` (30 to 70 px) | weak (Berry), fine (Sun, Germ) |
| bio-m5-b02c | `StepIcon`, `CellDot`, `Loop`, `Nucleus` (diagram glyphs) | fine |
| chem-m5-c01 | `Bottle` uses painted plates; `Co2` is a particle model | fine |
| chem-m5-c02 | `PaintedFlask` uses plates; particle lens | fine |
| chem-m5-c03 | `IronTube`, `CobaltTube` use plates (coded fallback only); `HeatIcon` arrows | fine |

## Counts

| Lesson | New art needed | Wire existing plate only | Fine (left coded) |
|---|---|---|---|
| B2b | 18 | 2 | 8 |
| G01 | 5 (tree, leaf, bowl, fire, leaf icon share the tree and leaf plates) | 0 | 6 |
| C04a | 5 | 1 (unused plunger plate) | 4 |
| C04b | 3 (plunger, dropper, seesaw) | 1 | 4 |
| C05 | 3 | 1 | 0 |
| C06 | 2 (furnace, hot tube share) | 1 | 3 |
| B3a | 6 | 1 | 5 |
| B3a2 | 3 | 1 | 4 |
| B3b | 7 | 3 | 4 |
| B4 | 3 | 0 | 6 |

## Wired (14 Oct)

### G01 (chem-m5-g01)
Replaced with painted plates (files added to `assets.ts` ASSETS; helper `SvgPaint` and `G1` boxes in `common.tsx`):
- Hook tree: `g1-tree-v1.png` (alpha box placed at x 1212, y 250, 416 px wide). Coded CO2, H2O and "sugar and wood" arrows and labels kept and re-aimed at the painted canopy and roots (CO2 into the left of the crown, H2O up into the roots, sugar and wood out of the top right).
- Leaf in the open-system scene: `g1-leaf-v1.png`, 530 px wide. When the light is cut it desaturates and dims (the old coded leaf did not change).
- Sugar bowl in "heading, not speed": `g1-sugar-bowl-v1.png` (468 px wide, replaces the coded bowl at scale 2).
- Fire icon (rows, 80 to 90 px): `g1-flame-v1.png`. Leaf icon (rows): `g1-leaf-v1.png` (the leaf reads better than the tree at this size).
Left coded: sun, clock, calendar, compass, particle blocks, rate bars.

### B2b (bio-m5-b02b)
All new plates are in `PAINTED`/`HAVE` in `assets.ts`; remove one from HAVE and the coded icon returns. `ART` boxes in `shared.tsx` use [x, y, w, h] from PIL (alpha > 20); `SvgArt`/`SvgArtC`/`has` added.
- Step cards land, tube, join, seed: `b2b-step-*` in `SeqIcon`, so every use is painted (strip pills, sentence cards 64 px, attempt and feedback chips 40 px, memory cards).
- Fertilisation: zygote 1, 2, 4, 8 aligned set crossfaded as the cells double; embryo plate replaces the stick sprout and grows in.
- Vegetative: parent plant with the red cut line, piece then rooting (aligned, crossfade shows roots appearing), new plant; clone pair uses the new-plant plate at 50 px; "no carrier needed" now uses bee-on-flower and grass-flower-wind plates (previously unwired) with the cross over them.
- Pollination: flying bee plate replaces `BeeIcon` on the flight to the stigma; `b2b-water-pollen` replaces the wave lines.
- Dispersal: `b2b-disp-wind`, `-water`, `-animal` replace the three coded icons (labels below moved down about 15 to 35 px).
- Seeds better: fence, bare patch to sprout (aligned pair) and a parachute seed arcing over the fence replace the coded strip; sprout appears on landing.
- Male side: painted pollen grain (top of `b2b-pollen-grain-closeup`, clipped to the grain) replaces the dotted circle. Memory scene glyphs: pollen grain, join and zygote-1 plates.
- Fixed two stale ART entries that did not match the delivered files: `grain` (nat 1628 x 1600, box 544, 373, 558, 844; nucleus anchor moved) and `bagged` (nat 1652 x 1600, box 397, 263, 877, 1035).
Left coded: `SpermDot`, `EggDot`, pollen specks, droplet, germination glyphs, paintbrush stand-in (plate not delivered), wind lines in pollination, pollen tube path. Unused plates: `b2b-seed-burr`, `b2b-seed-fruit`. Small land and tube step icons look alike at 40 px (labels carry the difference).
