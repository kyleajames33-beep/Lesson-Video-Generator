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

### C04b (chem-m5-c04b)
Plates added to `assets.ts` HAVE (remove one and the coded icon returns). New helper `Plate` (fit a plate by its alpha box into a slot), `PaintedTube` and `PaintedSeesaw` in `parts.tsx`.
- Gas tubes (hook two upright tubes, tube A and B, limited-time scenes, decision tube): `c4b-sealed-tube-v1.png` is one horizontal 4:1 tube with clamp rings, so it is drawn in three slices (two painted end caps and a stretched plain middle) at any length, rotated 90 degrees for upright tubes. The coded purple iodine tint stays behind the clear painted glass and the coded dots stay on top. Horizontal tubes show the painted clamp rings (the coded clamp feet are dropped, the plate stand rail is not used because it would run into the legends below). Upright tubes keep the coded base line. Tube B keeps its heavy outline as a coded ink ring around the painted glass.
- Plunger icon (`which-rates-change`, two squeeze rows): `c4-icon-plunger-push-v1.png`, about 136 px tall. The old coded "down 24 px" press (one use) is now a 24 px shift of the whole painted syringe.
- Dropper (`which-rates-change`): `c4-icon-dropper-v1.png`, about 176 px tall.
- Seesaw ("balance point" and the next-step chip): `c4b-seesaw-base-v1.png` and `-beam-v1.png` (beam rotates about the pivot pin at plate (1100, 500), `tilt` still works); coded blue (forward) and amber (reverse) weights sit on the beam ends. Next-step chip seesaw is small (about 150 px wide).
Left coded: thermometer, the energy-profile ball, particle dots, rate bars.

### B3a (bio-m5-b03a)
Plates added to `assets.ts` (`PAINTED`, in HAVE); `PL` entries `sperm`, `egg`, `eggOpen`, `eggNuc`, `test1`, `test2`, `embryo`, `dish` in `shared.tsx`; new SVG helpers `SArt` and `SFit` (plate by alpha box inside an svg). Remove a plate from HAVE and the coded drawing returns.
- Sperm (`gametes`, `zygote`): `b3a-sperm-v1.png`, head centre anchored at plate (1740, 834) at 0.27 x the old scale. The tail and mid piece are the part left of the neck (x 1530) and sway about the neck with the old `phase`, so it still swims; `tailO` fades them as the head enters (head and acrosome stay). The head-only plate is not needed.
- Egg: `b3a-egg-v1.png` at the old 460 px diameter. The gap opening is `b3a-egg-open-v1.png` fading in over it (the plates are aligned). The nuclei merging: `b3a-egg-nucleus-v1.png` scaled 1.22 fades in over the egg's own nucleus (the nucleus cannot be removed from the baked egg), replacing the coded purple blob.
- Pregnancy test (`hook`, `hcg`): `b3a-test-1` (control line only) with `b3a-test-2` (two lines) fading in as the second line used to draw. The result window sits where the coded one was, so the hormone path still ends on it. Hook size 700 px wide, hcg card 400 px (the second line is small there).
- Embryo card (`exchange`, 110 px): `b3a-embryo-v1.png`.
- Petri dish (`feedback-one`): `b3a-petri-dish-v1.png` (248 px), with the painted blastocyst round plate seated in it.
- `cleavage` demo cell (1610, 380): cleavage-1 and cleavage-2 crossfade (230 px) with the coded DNA squiggles and red cut line over the nucleus; replaces the flat circles.
Left coded: the blue sperm nucleus circle that travels in the zygote scene (colour code blue = sperm), energy sparks and enzyme dots, hormone graphs, chains, the placenta panel.

### B3a part 2 (bio-m5-b03a2)
Plates added to `assets.ts` (`PAINTED`, in HAVE); remove one and the coded drawing returns.
- Brain with pituitary (every scene that used `Brain`): `b3a2-brain-v1.png` at 0.2 x scale (about 288 x 244 px), placed so the painted pituitary lands exactly on `PIT`, so every route, label and bar head still starts on it. `b3a2-pituitary-part-v1.png` (aligned part) scales about its centre as the old `pulse`, with a soft amber glow. The painted pituitary is small (about 19 px).
- Milk gland (`hook`, `milk-jobs`, `milk-trigger`, feedback two, attempt card): `b3a2-milk-gland-empty` and `-full` (aligned) at 0.45 of plate scale, so the milk fills by crossfade as `fill` rises and falls. `NIPPLE`, the duct junction (`JUNCT`) and the six sac centres (`SACS`, measured on a plate grid) are re-mapped, so the flowing dots and the violet oxytocin rings sit on the painted clusters; the rings shrink as the old squeeze. "muscle cells" label now points at the left cluster (`SAC_LABEL`). Coded fallback is unchanged.
- Tablet (attempt card, feedback one): `b3a2-tablet-v1.png`, same footprint (about 150 px per unit of scale), tilted to match the old angle.
- Ovary (`brake`, `explain-answer`, feedback one): `OvaryRound` now draws the aligned pair `b3a2-ovary-closeup` and `b3a2-ovary-no-ripening` as a free oval (1.25 x the old round slot, no ring), with `mix`. In `brake` the ovary starts with the ripe follicle and crossfades to no ripening at "with less FSH and LH"; the other two uses show no ripening. The coded yellow follicle glow and the red `EggMark` on the ovary are turned off when painted (the egg is in the plate).
Left coded: `ChainIcon` badges (the pituitary and other glyphs are 92 px badges), thermostat, muscle-cell schematic, loop cards, graphs, the `EggMark` small 28 px elsewhere.

### C05 (chem-m5-c05)
The copper tube pair (`CuTube`) was already painted in the code (the audit row was stale), so only two items were left.
- Clear flask (s4 memory card 110 x 150, s5 attempt 130 x 170): `c5-flask-clear-v1.png`, fitted into the old slot by its alpha box (about 90 and 102 px wide). The coded `Flask` is the fallback.
- Solid in the "pure solid drops out" icon (about 90 x 58 px): `c5-solid-lump-v1.png` as `SolidLump` (76 px tall) with the cross still drawn over it.
- The painted C4b sealed tube now also shows in C05 (the lesson re-uses the C4b `GasTube`), so `chem-m5-c05/assets.ts` lists `c4b-sealed-tube-v1.png`: tubes in `coefficient-power` (upright 190 x 430), `any-equation` (two horizontal 360 x 180), the K card and the decision rule.
Left coded: the black carbon block in "left out" (340 x 150, labelled "carbon", particles wobble against it; the carbon-lump plate was made for C04a and would need its white label moved), the droplet icon, the beaker, particle dots, number line, rate bars.

### C06 (chem-m5-c06)
The NO2 vessel pair (`NO2Vessel`) was already painted in the code (the audit row was stale). Done now:
- Furnace with tube (next-step teaser card, 340 x 120): `c6-furnace-tube-v1.png` in `FurnaceIcon`, 360 px wide, with a faint coded glow ellipse over the heating zone that breathes like the old flame flicker. The coded icon is the fallback.
- Hot sealed tubes (`k-given`, `unknown-x`, `check`, `reverse-equation`, 140 x 330 upright): now the painted C4b sealed tube through the shared `GasTube` (purple tint behind painted glass, coded dots on top). `chem-m5-c06/assets.ts` lists `c4b-sealed-tube-v1.png`.
Left coded: the ICE tables, particle dots, tube scale legend, dials.

### B3b (bio-m5-b03b)
The animal side views, wheat ear, rust leaf and potato pair were already wired (the audit rows were stale), so the remaining plates went in now (`assets.ts` `ICONS`, in HAVE; `PL` entries and `ImgPlate` in `shared.tsx`; each coded drawing is the fallback):
- Cow reproductive tract (`insemination`, `heat-timing`): `b3b-cow-tract-v1.png`, mirrored so the opening is on the left and the ovaries on the right as in the old cut-away. `CT` (opening, cervix, uterus, ovaries, funnel) is re-measured on a plate grid, so the applicator tube, the doses, the egg leaving the ovary for the funnel, the uterus scribble and labels sit on the painted anatomy. The applicator now enters from the left edge along the lumen (the old route came down from above).
- Straws (hook strip, travelling straw, tract, heat timeline, barns row, feedback): `b3b-straw-v1.png` with `b3b-straw-frost-v1.png` fading in as `frost`. The plug is mirrored to the right as before and the straw is stretched 2 x thicker for legibility (it is a plain cylinder). At 44 to 64 px wide the straws are still hair thin.
- Collection vial: `b3b-vial-empty` and `b3b-vial-full` (aligned) crossfade as the semen is collected and then split into doses. 80 px wide.
- Freezer: `b3b-freezer-v1.png` (storage tank, lid open, straws racked), about 136 px wide, with a coded snow mark beside it. The old coded "door closing" is gone.
- Forceps (`pollination`, `feedback-two`): `b3b-forceps-v1.png`, tips down (does not open or close, it moves as before).
- Cover bag (`pollination`, `feedback-two`): `b3b-cover-bag-v1.png` at 80 per cent opacity so the floret still shows through, lowered as before.
- Barn (`fertility-cost` rows, `gain-and-risk` pans, attempt card): `b3b-barn-v1.png`, 84 px wide.
Left coded: herd grids (per-animal colour), scorecard, balance, symbols (coin, heart, shield).

### C7 (chem-m5-c07, brief 31)
Plates added to `assets.ts` (`PL7` with PIL alpha boxes, in `HAVE7`); new helper `Pic` (fit a plate by its alpha box into a slot, coded drawing as the child fallback) in `parts.tsx`. Remove a plate from `HAVE7` and the coded drawing returns.
- Recycle scene: `c7-reactor-bed-v1` (about 140 x 306 px), `c7-condenser-cooler-v1` (260 px wide), `c7-ammonia-storage-tank-v1` (380 px wide, headspace dots re-aimed at the painted body, coded green liquid overlay grows inside the painted cutaway window), `c7-gas-compressor-pump-v1` on the recycle pipe (130 px). "tank" and "stay gases" labels moved right of the wider tank.
- Pressure scene: `c7-thick-steel-wall-v1` grows in height on "thicker steel", pump plate (scales in), `c7-flame-energy-v1` (scales in and flickers), `c7-pipe-leak-v1` (250 px wide, moved right of the last bar; the coded warning triangle is gone).
- Flame icon everywhere (`Flame`: memory-aid tug of war, model answer, decision rule): painted flame plate, about 100 px tall per unit scale.
- Iron catalyst: `c7-iron-catalyst-pellets-v1` as two piles in the reactor housing (time-in-reactor) and one pile in the catalyst tag.
Left coded: snowflake, gauges, sliders, CrowdBox, dots, graphs.

### C8 (chem-m5-c08, brief 31)
Plates added to `assets.ts` (`PL8` with PIL alpha boxes, in `HAVE8`); helpers `Pic`, `HotTube`, `HotThermo`, `FlaskLens` and a painted branch of `Stopwatch` in `parts.tsx`. Remove a plate from `HAVE8` and the coded drawing returns.
- Hook: `c8-hot-hi-tube-v1` (800 px wide furnace tube) with the coded 0.05 mol/L dots (new `bare` mode of `Tube`) kept inside the plate's clear glass window; on "forty-nine" it crossfades to the coded board tube, which slides to the left slot as before. The board tube and the settled-tube thumbnails stay coded (a 3:1 furnace does not fit the 230 x 236 slot).
- Thermometer: `c8-thermometer-hot-v1` (250 px tall) replaces the coded thermometer; the "about 450 C" chip moved below it.
- Stopwatch: `c8-stopwatch-v1` (about 360 px tall). The plate's baked hand is hidden by a blurred dial-colour stripe (a faint trace is visible on close inspection) and the coded amber hand (still trembles, freezes on "before anything moves") and "0.0 s" are drawn over the hub.
- Q equals K edge cases: `c8-round-flask-v1` (272 px tall) with the coded particle dots over the round body (bare `ParticleLens`); both flasks reuse the plate.
Left coded: board tube and ghost tubes, bars, number line, rate model.

### B5a (bio-m5-b05a, brief 31)
Plates added to `assets.ts` (`EPI`, `PLANT`, in HAVE; `PLATES.epi` and `PLATES.plant` in `shared.tsx`, new SVG helper `SvgPlate` places a plate by its alpha box, optionally rotated). Remove one from HAVE and the coded drawing returns.
- Uses scene, "replacement": `b5a-epithelium-shedding-v1` (340 px wide, rises in on "worn-out skin") replaces the tan box with sliding ovals; an amber arrow shows the new cells rising on "gut lining".
- Telophase and cytokinesis plant-cell inset (about 240 x 192 px): `b5a-plant-cell-plate-v1` rotated 90 degrees so the new wall is vertical like the coded one. The coded olive wall line still draws outward from the centre on "pinches in" over the painted wall (the plate already shows a finished wall, so the line reads as it forming). "plant cell: new wall" label moved 20 px down.
- Not done: `b5a-skin-graze-closeup-v1` was not delivered (not in the provenance file), so the hook zoom stays at the 2.4x applied on 14 Oct.

### B5b (bio-m5-b05b, brief 31)
Plates added to `assets.ts` (`PARENTS`, plus the B3a `SPERM` and `EGG` plates reused as B3a wires them; all in HAVE). `PL` entries and an SVG helper `SvgPlate` (plate by alpha box, optional rotation, coded child as fallback) in `shared.tsx`; `SpermArt` and `EggArt` in `sA.tsx` wrap the old `SpermDot` and `EggDot` as fallback. Remove a file from HAVE and the coded drawing returns.
- Hook: `b5b-parents-v1` (208 px wide, one plate with mother and father side by side) replaces the two grey pictograms. The "mother" and "father" labels sit left and right of the pair (they are no longer under each figure) and the dotted paths to the egg and sperm are shortened to start at their feet.
- Hook and why-halve: painted egg (88 px, about 96 px in the chains) and painted sperm (about 170 px, 156 px in the chains) replace the dot and squiggle on the travel to the ringed positions and in the two "gamete" chains (the sperm plate does not swim or sway; it travels as the old squiggle did).
Left coded: the small gamete circles and the sperm and egg thumbnails in the meiosis outcome scenes (cells, not objects), chromosomes, spindles and trackers. The painted sperm is pale next to the egg at 156 px.
