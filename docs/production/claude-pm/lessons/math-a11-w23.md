# Maths A11 W23: How does inverse variation y = k/xⁿ differ from direct variation? A constant product, k by multiplying, the inverse doubling ladder and rounding in context (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models) and the w01 to w14 root rulings (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced (no `math-a11-w23/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,598 characters, 14 scene headings, about 508 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: twenty-third video of the Year 11 Mathematics Advanced course (outline playlist order 23), after w22 (direct variation) and before w24 (the circle x² + y² = r²). Pre-design pack: `../pre-design/maths-a11/math-a11-w23.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson21.sa.html` (Inverse Variation, SHA256 `3074addb757d8b95a04ba6f051bb45aaaab42d333211a95a09ed15d50e72fab5`, `we-1`, `we-2`, `we-3`). The site teaches n = 1 only (crosswalk: partial); n = 2 is original teaching. Every number recalculated with SymPy. Route entry: `math-a11-w23` in `../../programme/maths-a11-route-inputs-2.json`.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording; painted plates for real objects (a bare room floor and two floor tiles, a printer, a jug; w24's dartboard and dart in the handoff), coded tile grids, rectangles, ladders, tables, curves and algebra; no people, hands or faces (the site's painters become identical printers, numbers unchanged); one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (tiling a floor, home); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `cie81af7cc` (Direct and inverse variation): "Develop the model y = k/(x^n), where k is a non-zero constant, from descriptions of situations in which one quantity varies inversely with another"
- `ci52779ff4` (Direct and inverse variation): "Evaluate k in the equations y = kx^n and y = k/(x^n), given one pair of values for the variables, and use the resulting formula to find other values of the variables"
- `ci70194fe3` (Direct and inverse variation): "Analyse and solve problems involving direct and inverse variation"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w22's final frame (the floor with a 540-tile grid of 20 cm tiles, a 30 cm tile and "30 cm: how many?"), recalling w22 (y = kxⁿ, finding k from one pair, the doubling ladder) and w21 (the hyperbola y = k/x). Develops y = k/x from a description, with k found by multiplying (site `we-1`, re-set from painters to identical printers with the numbers unchanged), uses it backwards (site `we-2`), identifies inverse against direct variation from data by constant product against constant ratio (site `we-3`), shows the product as equal-area rectangles tracing the hyperbola; develops N = k/s² for the tiles from the reason (each tile covers s², and the floor's area is fixed); the inverse doubling ladder (÷2, ÷4) against w22's; rounding up or down by context and the positive branch only. Covers the inverse half of `ci52779ff4` and `ci70194fe3` (the direct half is w22). Stops at inverse variation. Not taught: the circle (w24, the handoff); joint variation (not in the 2024 points); gas laws (the site's Q2 is science and is kept out, pack section 8).

## Decisions

- **Anchor: tiling a floor (painted plates, live).** A bare room floor, 6 m by 3.6 m (216 000 cm²), takes 540 square tiles of side 20 cm (30 × 18). The number of tiles varies inversely with the square of the side, N = k/s², because each tile covers s² and together they cover the same floor, so N × s² = 216 000 = k, the floor's area. 30 cm tiles: 240 (not 360); 40 cm tiles: 135 (a quarter, not a half); 25 cm tiles: 345.6, so at least 346 by area. The real grid checks (20 × 12 = 240 and 15 × 9 = 135), so the model and the picture agree exactly. Home. Distinct from every Year 12 Maths anchor ("tiles" in Year 12 are calendar page tiles in s02 and UI tiles; i14's hallway is a timber floor for a robot vacuum, a different idea) and from w01 to w22, and from the w24 to w31 anchors (`../checks/root-decisions-maths-a11-w24-w31.md`). The pack's 2 L juice bottle is attempt 1 (as a jug, rounding down); its $120 group gift was not used (Year 12 i04's fundraiser donations are 1000/t).
- **Site re-set (root ruling 9 precedent).** Site `we-1` and `we-2` use painters; the owner's rule is no people drawn, so they become identical printers printing a club's yearbooks: 4 printers take 6 hours; k = 24 printer-hours; 8 printers take 3 hours; 2 hours needs 12 printers. Numbers and answers unchanged.
- **Idealising assumptions (author notes, not learner copy).** (i) Tiles butt with no grout gap; the count is by area. (ii) For 25 cm tiles the grid does not fit exactly (600 ÷ 25 = 24 but 360 ÷ 25 = 14.4), so a real job cuts tiles and buys extra; the narration says "by area, at least 346" and "cut tiles mean you'd buy a few extra too". (iii) Printers share the job equally.
- **Simulations (standard item 3).**
  1. **The tile swap** (scenes 1 and 5, new `TileSwap` on the floor plate's sidecar): a blue slider "tile side s" steps 20 → 30 → 40 cm; the coded grid over the painted floor redraws with that tile size (the painted tile plate shown at the corner), a teal counter reads the number of tiles, and a violet readout shows "N × s² = 216 000". For 25 cm the grid overruns the far wall with a band of cut tiles hatched grey, and the counter shows "345.6 by area".
  2. **Equal-area rectangles** (scene 4, new `EqualAreaRect`): a rectangle with a corner at the origin and the opposite corner on a rider; its width x (blue) stretches while its height y (teal) shrinks so that the area readout stays "36" (violet); the corner leaves a trace that is the hyperbola y = 36/x from w21.
  3. **The doubling ladder** (scene 6, `DoublingLadder` from w22): direct columns (×2, ×4) beside inverse columns (÷2, ÷4), x doubling on each rung.
- **Colour roles (fixed for the whole video).** The input x (number of printers, tile side, glass size) **blue**; the output y (time, number of tiles, number of glasses) **teal** (root ruling 12); k and products **violet**; the power n **amber**; answer green; mistake red, crossed slips only; graphs ink; cut tiles grey hatching.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "fewer, but how many?", "fixed number ÷ x", "× x: xy = k", "the whole job", "double x: halve y", "check the product", "ratio? not constant", "product? constant", "same area", "a falling line isn't inverse", "each tile covers s²", "k = the floor", "÷ 2.25", "a quarter, not a half", "÷ 2ⁿ", "round up to cover", "round down: full glasses", "only s > 0", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 55 s.** w22's frame and the guess (1); g01 board with the printer (2); backwards (3); the table and the equal-area rectangles (4); the tile swap (5); two ladders side by side (6); 25 cm tiles and rounding (7); framed memory card (8); question cards (9 to 12); the dartboard handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** 2 (`we-1`, re-set): k = 24 printer-hours; 8 printers 3 hours; crossed "k = 6 ÷ 4 = 1.5" captioned "inverse: multiply, k = tn". 3 (`we-2`, re-set): 12 printers; crossed "n = 2 ÷ 24" captioned "2 = 24/n, so 2n = 24". 4 (`we-3`): ratios 9 and 4, products 36: y = 36/x; crossed "a falling line, so inverse" captioned "test the product". 5 (the tiles): N = 216 000/s²: 240 and 135; crossed "360 tiles" captioned "÷ 1.5² = ÷ 2.25". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Direct, the ratio stays. Inverse, the product stays." Key line: "Direct y = kxⁿ: k = y ÷ xⁿ. Inverse y = k/xⁿ: k = y × xⁿ. Double x: direct × 2ⁿ, inverse ÷ 2ⁿ." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** On the tile swap, the 30 cm grid lands with far fewer tiles than the guessed 360 (240), and the 40 cm grid with exactly a quarter (135), while the violet readout N × s² never changes from 216 000, the floor itself. On the equal-area rectangles, a rectangle that keeps its area traces the very hyperbola from w21.
- **Site numbers unchanged.** `we-1`: k = 24, 3 hours. `we-2`: 12, check 12 × 2 = 24. `we-3`: ratios 9 and 4; products 36; y = 36/x.
- **Attempts (pack questions, original).** A1 (pack anchor 2 as a question; rounding down): "The number of glasses a jug can fill varies inversely with the size of the glass. The jug fills 12 glasses of 250 mL. How many 350 mL glasses can it fill completely?" Answer 8. Crossed "9 glasses". A2 (pack question 2): "y varies inversely with the square of x, and y = 8 when x = 3. Find y when x = 6, and explain why doubling x did not halve y." Answer y = 2; doubling x multiplies x² by 4, so y is divided by 4. Crossed "y = 4". (The pack's question 1, floor tiles 600 → 267, is the anchor's idea and is replaced by the anchor's own numbers.)
- **Mistake scene:** none separate. Dividing to find k (2 crossed); solving backwards wrongly (3 crossed); a falling straight line as inverse variation (4 crossed); scaling linearly for n = 2 (1, 5 crossed; A2 crossed); rounding the wrong way (7; A1 crossed); the negative branch in context (7).
- **Cause chain taught, in order:** (1) "varies inversely" means y is a fixed number divided by x (or a power of x), y = k/xⁿ, so x × y (or xⁿ × y) stays constant: k is found by multiplying (2); (2) the constant is the whole job (printer-hours) or the whole floor, which is why it stays fixed (2, 5); (3) a constant product, not a constant ratio, identifies inverse variation, and equal-area rectangles show why the graph is the hyperbola (4); (4) tiles go by the square because each covers s², so N × s² is the floor's area (5); (5) doubling x multiplies xⁿ by 2ⁿ, so y is divided by 2ⁿ (6); (6) answers are rounded by meaning: up to cover a floor, down for full glasses; only positive sizes make sense (7, A1).
- **Entry knowledge (route):** w22 (direct variation, finding k, the doubling ladder); w21 (the hyperbola y = k/x, its branches).
- **Learner-visible vocabulary (plain meaning at first use):** varies inversely (is a fixed number divided by, 2); constant product (multiplying the pair always gives the same number, 2, 4); printer-hours (the work: printers × hours, 2); "varies inversely with the square of" (is a fixed number divided by the square of, 5).
- **Handoff (to w24, "How does Pythagoras give the equation of a circle centred at the origin?").** Fixed with the w24 to w31 designer (`../checks/root-decisions-maths-a11-w24-w31.md`, "The w23 to w24 join"): scene 13 ends on the painted dartboard `ma11-dartboard-v1.png` (face-on, about 640 px across, bullseye at about (1300, 520)) with one painted dart `ma11-dart-v1.png` whose tip is placed by code 6 cm right of and 8 cm below the bullseye; coded dashed legs "6 cm" (horizontal) and "8 cm" (vertical), a red-pencil "?" on the straight line from the bullseye to the tip; chips "Next: which points are exactly 10 cm from the centre?" and "?". The floor badge stays small at the top left (w24 fades it). This is w24's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Floor 600 cm × 360 cm = 216 000 cm². N = 216 000/s²: s = 20, 30, 40, 25 give 540, 240, 135, 345.6. Grids: 30 × 18, 20 × 12, 15 × 9; 25 cm does not fit (24 × 14.4).
  (b) Printers: k = 6 × 4 = 24; 24/8 = 3; 24/n = 2 gives n = 12.
  (c) `we-3`: 18/2 = 9, 12/3 = 4; 2 × 18 = 3 × 12 = 6 × 6 = 36.
  (d) A1: k = 12 × 250 = 3000 mL; 3000/300 = 10; 3000/350 = 8.57, so 8 full glasses. A2: k = 8 × 9 = 72; 72/36 = 2.
  (e) The dart for w24: 6² + 8² = 100, so 10 cm (w24 answers it; w23 shows only the legs and "?").
  (f) Pronunciations: "printer-hours", "two hundred and sixteen thousand square centimetres", "three hundred and forty-five point six", "y equals k over x to the n".
  (g) Windows: the floor plate at 200 px per metre (a 20 cm tile is 40 px); equal-area plot x 0 to 20, y 0 to 20 (labelled); the tiles' N against s plot s 0 to 50, N 0 to 600 (labelled).

Main question: *540 tiles of 20 cm cover a floor. Bigger 30 cm tiles mean fewer, but how many? How does inverse variation y = k/xⁿ differ from direct variation?*
Entry knowledge (w22; w21): direct variation and finding k; the hyperbola y = k/x.
Stops after: y = k/xⁿ (n = 1, 2) from a description; k by multiplying; the model both ways; constant product against constant ratio; the inverse doubling ladder; rounding by context and the positive branch.
Handoff: math-a11-w24: the dartboard and the dart 6 cm across and 8 cm down: "?".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): input blue; output teal; k and products violet; n amber; answer green; mistake red, crossed slips only; graphs ink; cut tiles grey hatching. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: fewer, but how many?
> Here's a floor covered with five hundred and forty square tiles, each twenty centimetres wide. Swap to bigger tiles, thirty centimetres wide, and you'll need fewer. But how many fewer? The new tiles are one and a half times as wide, so is it five hundred and forty divided by one and a half, three hundred and **sixty**? Not quite. Each bigger tile covers more than one and a half times the area. So how does inverse variation work, and how does it differ from direct **variation**?

Visual: opens on w22's final frame exactly (the painted floor `ma11-tiled-floor-empty-v1.png`, about 1,200 px wide, with the coded 30 × 18 grid of 20 cm tiles and "540 tiles, 20 cm"; the painted 30 cm tile `ma11-floor-tile-30-v1.png`; "30 cm: how many?"; chips "Bigger tiles: fewer of them. How many?" and "Next: inverse variation, y = k/xⁿ"). On the first sentence the "Next" chip fades and the heading writes on "Fewer, but how many?". The painted 20 cm tile `ma11-floor-tile-20-v1.png` appears beside the 30 cm one at the same scale, hand tag "fewer, but how many?". On "sixty" a pencil guess "540 ÷ 1.5 = 360?" writes. On "Not quite" the 30 cm tile slides over the 20 cm tile: it covers it and more, a grey overlay showing 2.25 small-tile areas in one large tile (a 1.5 × 1.5 outline), hand tag "more than 1.5 times the area". On "variation" the chip "inverse: how?" moves to the top right as the scene question.

### 2. varies inversely: k by multiplying
> When one quantity varies inversely with another, it's a fixed number divided by it. y equals k over x, for a constant k that isn't zero. Multiply both sides by x, and x times y equals k. So for inverse variation, the product stays the same. Here's an example. The time to print a club's yearbooks varies inversely with the number of identical printers used. Four printers take six hours. How long would eight printers take? t equals k over n, so k is t times n, six times four, which is twenty-four printer **hours**. That's the whole job. Eight printers take twenty-four over eight, which is three **hours**. Doubling the printers halves the **time**.

Visual: clear change. Top: a definition strip, 44 px: "y varies inversely with x: y = k/x (k ≠ 0)" with k violet, and on "Multiply both sides" the row "× x: xy = k" with hand tag "× x: xy = k"; a small graph of a hyperbola branch (w21, 300 px). Then the g01 board below. Task strip, 44 px: "The time to print a club's yearbooks varies inversely with the number of identical printers. Four printers take 6 hours. How long would 8 printers take?" (site `we-1`, re-set). Picture slot: the painted printer `ma11-office-printer-v1.png` (300 px) with a coded "× 4" badge. Rows, 52 px: "t = k/n" (t teal, n blue); on "hours" (first) "k = tn = 6 × 4 = 24 printer-hours" (violet), hand tag "the whole job"; "t = 24/n"; on "hours" (second) "t = 24 ÷ 8 = 3 hours". On "time" the badge changes to "× 8", hand tag "double x: halve y". Framed answer (green): "8 printers take 3 hours." A red slip "k = 6 ÷ 4 = 1.5" writes small and is crossed (caption "inverse: multiply, k = tn").

### 3. using the model backwards
> Now backwards. How many printers are needed to finish in two hours? Two equals twenty-four over n. Multiply both sides by n, so two n is twenty-four, and n is twelve **printers**. Check the product. Twelve times two is twenty-four, the same job, so it **works**. Three times as many printers as the first four, and a third of the time.

Visual: camera continue on the board. Task strip, 44 px: "For the same job, how many printers are needed to finish in 2 hours?" (site `we-2`, re-set). Rows, 52 px: "2 = 24/n"; "2n = 24"; on "printers" "n = 12". On "works" the check row "12 × 2 = 24 ✓" (violet), hand tag "check the product"; then "× 3 printers, ÷ 3 time" in grey under it. Framed answer (green): "12 printers." A red slip "n = 2 ÷ 24" writes small and is crossed (caption "2 = 24/n, so 2n = 24").

### 4. direct or inverse? the constant product
> From data, how do you tell direct from inverse? Here's a table. x is two, y is eighteen. x is three, y is twelve. x is six, y is six. Try the ratios first. Eighteen over two is nine, and twelve over three is four. Not constant, so it's not direct **variation**. Now the products. Two times eighteen is thirty-six, three times twelve is thirty-six, and six times six is thirty-**six**. The product is constant, so it's inverse variation, y equals thirty-six over x. Picture each pair as a rectangle, x wide and y tall. Every rectangle has the same area, thirty-six. As one side stretches, the other shrinks, and the corner traces the hyperbola from two videos ago. So a line that just slopes downwards isn't inverse variation. Its products aren't **constant**.

Visual: clear change. Left: the table (52 px) with columns "x" (blue), "y" (teal), "y ÷ x" and "x × y" (site `we-3`). On "variation" the "y ÷ x" column fills "9", "4" and stays grey-red "not constant", hand tag "ratio? not constant". On "six" the "x × y" column fills "36", "36", "36" and turns green "constant", hand tag "product? constant"; framed answer (green): "inverse variation, y = 36/x". Right: the equal-area rectangles (simulation 2) on axes (0 to 20 each): rectangles 2 × 18, 3 × 12, 6 × 6, then the rider runs the corner out to 18 × 2 and back, area readout "36" fixed (violet), the corner's trace drawing y = 36/x, hand tag "same area". On "constant" (last) a falling dashed line y = 20 − x draws in grey with three products "19", "36", "51" (red-grey), hand tag "a falling line isn't inverse". A red slip "a falling line, so inverse" writes small and is crossed (caption "test the product").

### 5. the tiles: inverse with the square
> Now the tiles. Each tile covers its side length squared. And however many tiles you use, together they cover the same floor. So the number of tiles times the side squared is always the floor's area. That's inverse variation with the square, N equals k over s **squared**. From the twenty centimetre tiles, k is five hundred and forty times four hundred, which is two hundred and sixteen thousand square centimetres. That's the floor's **area**. For thirty centimetre tiles, N is two hundred and sixteen thousand over nine hundred, which is two hundred and **forty**. Not three sixty. And forty centimetre tiles, twice as wide as the first, need two hundred and sixteen thousand over sixteen hundred, which is a hundred and thirty-five. That's a quarter of five forty, not **half**.

Visual: clear change back to the painted floor (about 1,100 px wide) with the tile swap (simulation 1); rows at the right third. On "Each tile covers" the 20 cm tile plate shows a violet "20² = 400 cm²" tag, hand tag "each tile covers s²". On "squared" row "N = k/s²" ("2" amber). On "area" (first bold) rows "k = Ns² = 540 × 20² = 216 000 cm²" (violet), and the floor's outline lights with "6 m × 3.6 m = 216 000 cm²", hand tag "k = the floor". On "forty" (first) the slider steps to 30: the grid redraws as 20 × 12 with the 30 cm tile plate at the corner; the counter reads "240", row "N = 216 000 ÷ 900 = 240", the pencil "360?" from scene 1 is crossed (caption "÷ 1.5² = ÷ 2.25"), hand tag "÷ 2.25". On "half" the slider steps to 40: the grid redraws 15 × 9, the counter reads "135", row "N = 216 000 ÷ 1600 = 135", hand tag "a quarter, not a half". Throughout, the readout "N × s² = 216 000" stays fixed. Framed answer (green): "30 cm tiles: 240. 40 cm tiles: 135."

### 6. the ladder, upside down
> That's the doubling ladder, upside down. For direct variation, doubling x multiplies y by two to the n. For inverse variation, doubling x divides y by two to the n. So with n equals one, y halves. With n equals two, y is divided by **four**. The tiles showed it. Going from twenty to forty centimetres doubled the side, and five hundred and forty became a hundred and thirty-five, divided by four. Direct, the ratio stays the same. Inverse, the product stays the **same**.

Visual: clear change to two ladders side by side (simulation 3), full width. Left, "direct" (from w22): columns n = 1, 2 with bars ×2, ×4 per rung. Right, "inverse": columns n = 1, 2 with bars ÷2, ÷4 per rung, x doubling on each rung (1, 2, 4, blue). On "four" the inverse n = 2 column completes and the tile badge (220 px) lights beside it ("20 → 40 cm: 540 → 135"), hand tag "÷ 2ⁿ". On "same" two cards, 44 px: "direct: y ÷ xⁿ = k" and "inverse: y × xⁿ = k" (violet).

### 7. rounding by meaning
> Context matters when you round. What about twenty-five centimetre tiles? Two hundred and sixteen thousand over six hundred and twenty-five is three hundred and forty-five point six. You can't buy point six of a tile, and three hundred and forty-five wouldn't cover the floor, so you round up, to at least three hundred and forty-**six**. In a real room, cut tiles mean you'd buy a few extra too. And only positive side lengths make sense, so only the first branch of the curve **counts**.

Visual: clear change back to the floor with the tile swap at 25 cm: the grid overruns the far wall with a band of cut tiles hatched grey, the counter "345.6 by area". Rows, 52 px: "N = 216 000 ÷ 25² = 216 000 ÷ 625 = 345.6"; on "six" "at least 346 tiles", hand tag "round up to cover"; a grey tag "real floors: extra for cuts". On "counts" a small plot of N = 216 000/s² (s 0 to 50) with the s > 0 branch in ink and the s < 0 branch ghosted grey with "only s > 0", hand tag "only s > 0"; the points (20, 540), (30, 240), (40, 135) ringed.

### 8. memory aid
> Here's a way to remember it. Direct, the ratio stays. Inverse, the product stays. So for direct variation you divide to find k, and for inverse variation you multiply to find **k**, just as five hundred and forty times twenty squared gave the floor.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: an equal-area rectangle stretching and shrinking beside a straight line through the origin (a 3 s loop). Main line, hand font 56 px: "Direct, the ratio stays. Inverse, the product stays." On "k" the key line, 40 px: "Direct y = kxⁿ: k = y ÷ xⁿ. Inverse y = k/xⁿ: k = y × xⁿ. Double x: direct × 2ⁿ, inverse ÷ 2ⁿ." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. The number of glasses a jug can fill varies inversely with the size of the glass. The jug fills twelve glasses of two hundred and fifty millilitres. How many three hundred and fifty millilitre glasses can it fill completely? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The number of glasses a jug can fill varies inversely with the size of the glass. The jug fills 12 glasses of 250 mL. How many 350 mL glasses can it fill completely?" The full question stays on screen. Picture slot: the painted jug `ma11-water-jug-v1.png` (320 px), no glasses counted. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> k is twelve times two hundred and fifty, which is three thousand millilitres, the whole **jug**. Three thousand over three hundred and fifty is about eight point **six**. Only full glasses count, so this time you round down. The jug fills eight glasses. Saying nine is the trap here. There isn't enough left for a ninth full **glass**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "12 glasses of 250 mL", "350 mL", "completely" (underlined as used). Rows, 52 px: "G = k/v"; on "jug" "k = 12 × 250 = 3000 mL" (violet); on "six" "G = 3000 ÷ 350 ≈ 8.57"; "8 full glasses", hand tag "round down: full glasses". Framed answer (green): "8 glasses." On "glass" a red slip "9 glasses" writes and is crossed (hand caption "9 × 350 = 3150 > 3000"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. y varies inversely with the square of x, and y equals eight when x equals three. Find y when x equals six, and explain why doubling x did not halve y. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "y varies inversely with the square of x, and y = 8 when x = 3. Find y when x = 6, and explain why doubling x did not halve y." The full question stays on screen. Picture slot: a two-row table "x: 3, 6" and "y: 8, ?" (as the question states). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> y equals k over x squared, so k is eight times nine, which is seventy-**two**. At x equals six, y is seventy-two over thirty-six, which is **two**. Doubling x multiplies x squared by four, so y is divided by four, not two. Eight becomes two, not four. Halving would be right only if y varied inversely with x **itself**.

Visual: the card shrinks to the top. `GivensStrip`: "inversely with the square", "y = 8 when x = 3" (underlined as used). Rows, 52 px: "y = k/x²"; on "two" (first) "k = 8 × 3² = 72"; on "two" (second) "y = 72 ÷ 6² = 72 ÷ 36 = 2"; row "x × 2 ⇒ x² × 4 ⇒ y ÷ 4", hand tag "÷ 2ⁿ". Framed answer (green): "y = 2. Doubling x multiplies x² by 4, so y is divided by 4." On "itself" a red slip "y = 4" writes and is crossed (hand caption "squared: ÷ 4, not ÷ 2"). Hold about 1 s.

### 13. handoff
> So inverse variation is y equals k over x to the n, and the product stays the same. Next, a different question about distance. Here's a dart, six centimetres right of the bullseye and eight centimetres below it. How far is it from the centre in a straight line? And which points are exactly ten centimetres **out**?

Visual: the memory line shows small at the top (30 px), then fades on "Next". The floor shrinks to a 280 px badge at the top left. Board clears to the painted dartboard `ma11-dartboard-v1.png` (face-on, about 640 px across, bullseye at about (1300, 520)) with the painted dart `ma11-dart-v1.png`, its tip placed by code 6 cm right of and 8 cm below the bullseye (board scale from w24's sidecar: the coded treble wire is a 10 cm circle). On "six centimetres right" a dashed horizontal leg "6 cm" draws from the bullseye; on "eight centimetres below" a dashed vertical leg "8 cm" down to the tip. On "straight line" a red-pencil "?" on the straight line from the bullseye to the tip. On "out" chips "Next: which points are exactly 10 cm from the centre?" and "?". Hold about 2 s. This is w24's opening frame (as fixed in `../checks/root-decisions-maths-a11-w24-w31.md`); scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- y varies inversely with xⁿ: y = k/xⁿ, k ≠ 0.
- One pair gives k = y × xⁿ (multiply). Write the model.
- Test data: x × y constant means inverse (y = k/x).
- Double x: y ÷ 2 (n = 1), y ÷ 4 (n = 2).
- Round by meaning: up to cover, down for full ones.

Memory aid (framed card, right side of the notes screen, as in scene 8): *Direct, the ratio stays. Inverse, the product stays.* Key: *Direct y = kxⁿ: k = y ÷ xⁿ. Inverse y = k/xⁿ: k = y × xⁿ. Double x: direct × 2ⁿ, inverse ÷ 2ⁿ.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the floor badge, the dartboard, the dart with its dashed legs "6 cm" and "8 cm", the "?" and both chips). This is the final frame and w24's opening frame.

## Teaching checks

- **Does it explain causes?** Why multiply to find k: xy = k for inverse variation (2). Why k stays constant: it is the whole job or the whole floor (2, 5). Why a constant product identifies inverse variation, and why its graph is the hyperbola: equal-area rectangles (4). Why tiles go by the square: each covers s² (5). Why doubling x divides by 4 when n = 2: (2x)² = 4x² (6, A2). Why round up for tiles and down for glasses: the meaning of "cover" and "full" (7, A1). Why only one branch: sizes are positive (7).
- **Misconceptions addressed:** dividing to find k (2 crossed); solving backwards wrongly (3 crossed); a falling line as inverse (4 crossed); linear scaling for n = 2 (1, 5 crossed; A2 crossed); rounding the wrong way (7; A1 crossed); the negative branch in context (7).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted floor and tiles from the first frame, answered in 5 and 7; the printer and jug in worked examples and attempts; 2 a new stage every 30 to 55 s; 3 the tile swap (grids redrawn with a live count and a fixed N × s²), the equal-area rectangles tracing the hyperbola, the paired ladders; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 2, 3, 4 and 5 with framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the 240 and 135 grids against the guessed 360, with N × s² never changing.
- **One idea at a time:** n = 1 forwards (2), backwards (3), the test (4), n = 2 on the anchor (5), the ladder (6), rounding (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; each card with a picture or the question's own table; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 24 s and 26 s.
- **Avoided double teaching:** finding k and the doubling ladder (w22), the hyperbola (w21) are used, not re-taught.
- **Syllabus coverage:** `cie81af7cc` develop y = k/xⁿ from descriptions (2, 5; A1, A2; key note 1); `ci52779ff4` evaluate k and use the formula (2, 3, 5, 7; A1, A2; key note 2) (inverse half; the direct half is w22); `ci70194fe3` analyse and solve problems, direct against inverse (4, 6, 7; key notes 3 to 5).
- **Out of scope by design:** the circle (w24); joint variation; gas laws (site Q2).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "The number of glasses a jug can fill varies inversely with the size of the glass. The jug fills 12 glasses of 250 mL. How many 350 mL glasses can it fill completely?"
Model answer: G = k/v. k = 12 × 250 = 3000 (mL). G = 3000 ÷ 350 ≈ 8.57. Only full glasses count, so the jug fills 8 glasses of 350 mL. Classic mistake (crossed): "9 glasses".

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "y varies inversely with the square of x, and y = 8 when x = 3. Find y when x = 6, and explain why doubling x did not halve y."
Model answer: y = k/x². k = 8 × 3² = 72. At x = 6, y = 72 ÷ 36 = 2. Doubling x multiplies x² by 4, so y is divided by 4, not 2. Classic mistake (crossed): "y = 4".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Floor | 600 cm × 360 cm = 216 000 cm²; 20 cm tiles: 30 × 18 = 540 | 1, 5 |
| Tiles | N = 216 000/s²: 30 cm 240 (20 × 12); 40 cm 135 (15 × 9); 25 cm 345.6, at least 346; guess 360 crossed | 1, 5, 6, 7 |
| Site `we-1` (re-set) | k = 6 × 4 = 24 printer-hours; 8 printers: 3 hours | 2 |
| Site `we-2` (re-set) | 2 = 24/n: n = 12; check 12 × 2 = 24 | 3 |
| Site `we-3` | ratios 9, 4; products 36; y = 36/x | 4 |
| Falling line | y = 20 − x: products 19, 36, 51 at x = 1, 2, 3 | 4 |
| A1 | k = 3000 mL; 3000/350 ≈ 8.57: 8 glasses; crossed 9 (9 × 350 = 3150) | 9, 10 |
| A2 | k = 72; y(6) = 2; crossed 4 | 11, 12 |
| Handoff | dart 6 cm across, 8 cm down (w24 answers 10 cm) | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w15w23/verify.py`, 85 checks, none failing); Codex to re-check.

- 6 × 4 = 24; 24/8 = 3; 24/n = 2 gives n = 12; 12 × 2 = 24.
- 18/2 = 9; 12/3 = 4; 2 × 18 = 3 × 12 = 6 × 6 = 36.
- 1 × 19 = 19, 2 × 18 = 36, 3 × 17 = 51 (the falling line y = 20 − x).
- 540 × 20² = 216 000 = 600 × 360; (600 ÷ 20) × (360 ÷ 20) = 540; 216 000/900 = 240 = 20 × 12; 216 000/1600 = 135 = 15 × 9; 216 000/625 = 345.6, rounded up 346.
- 12 × 250 = 3000; 3000/300 = 10; 3000/350 ≈ 8.571, floor 8; 9 × 350 = 3150.
- 8 × 9 = 72; 72/36 = 2.
- 3² + 4² = 5², so 6² + 8² = 10² (w24's dart).

## Memory aid check

- **"Direct, the ratio stays. Inverse, the product stays."** Original (the pack's pairing). Meaning, as said in scene 8: for y = kxⁿ the ratio y ÷ xⁿ is constant, so k is found by dividing; for y = k/xⁿ the product y × xⁿ is constant, so k is found by multiplying. Assumptions checked: "ratio" and "product" mean with xⁿ for the right n (for n = 1, simply y ÷ x and xy); k ≠ 0; positive values in the contexts. It helps a new case: data (1, 12), (2, 6), (4, 3): products 12, 12, 12, so y = 12/x. Introduced after the causes in 2, 4 and 5.
- **Considered, not used:** "Up one, down the other" (true of any decreasing function, so it would admit a falling line; scene 4 crosses that).

## Narration length estimate

Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,598 characters**, 14 scene headings. Characters per scene (1 to 14): 474, 640, 327, 747, 765, 464, 480, 245, 257, 323, 182, 308, 311, 75.

At 13.3 characters per second the speech is about 421 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the tile overlay (1), the equal-area rectangles (4), the tile swap's three grids (5), the paired ladders (6) and the 25 cm overrun (7), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 508 s (8 min 28 s)**, inside the 5,500 to 6,800 character band and about 62 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 4's last two sentences (keep the grey falling line and its products on screen); scene 7's "In a real room, cut tiles mean you'd buy a few extra too." (keep the grey tag). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w23` (route math-a11-w23). Explainer folder `src/explainer/lessons/math-a11-w23`; build inputs in `docs/production/claude-pm/lessons/math-a11-w23/` (to be created at voicing).

In order (kebab-case; 14 scene headings): hook-tiles, k-by-multiplying, backwards, constant-product, tiles-square, ladder-upside-down, rounding, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 38 s | 1 | w22's frame; the 30 cm tile over the 20 cm tile |
| 38 to 96 s | 2 | Definition and the printer board |
| 96 to 119 s | 3 | Backwards, with the product check |
| 119 to 184 s | 4 | The table and the equal-area rectangles |
| 184 to 248 s | 5 | The tile swap: 240 and 135 |
| 248 to 275 s | 6 | Two ladders, direct and inverse |
| 275 to 315 s | 7 | 25 cm tiles, rounding, the positive branch |
| 315 to 332 s | 8 | Framed memory card |
| 332 to 436 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 436 to 463 s | 13 | The dartboard and the dart's legs |
| 463 s to end | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w22's last frame continues into scene 1 (identical frame); 1 to 2 clear change; 2 to 3 camera continue (same board); 3 to 4 clear change; 4 to 5 clear change back to the floor; 5 to 6 clear change; 6 to 7 clear change back to the floor; 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w23-learning-review.md`, `science_check` = `checks/m-a11w23-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only): `ma12-hallway-floor-v1.png` (viewed: a timber-board hallway strip, not a bare room floor for square tiles; not used). No floor-tile, printer or jug plate exists in `maths/`. w24's `ma11-dartboard-v1.png` and `ma11-dart-v1.png` are commissioned in w24's brief.

Need (painted, new; see the Codex asset brief): `ma11-tiled-floor-empty-v1.png`, `ma11-floor-tile-20-v1.png`, `ma11-floor-tile-30-v1.png` (plates 1 and 3 also w22's handoff), `ma11-office-printer-v1.png`, `ma11-water-jug-v1.png`. Required before this video's build (commissioned in w24's brief): `ma11-dartboard-v1.png` and `ma11-dart-v1.png` with their sidecars.

Coded (studio kit): every tile grid, counter, readout, rectangle, trace, ladder, table, plot, leg, working board, question card, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `StudioPlot`, `FunctionSimulator`, `DoublingLadder` (w22), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows` (table mode), `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`.

Additions (new kit-needs row w23):
1. **`TileSwap`** (lesson folder): draws a coded square grid of side s over the floor plate's measured floor rectangle (sidecar), counts whole tiles for an exact fit, hatches the overrun band when s does not divide both sides, and shows N = area ÷ s² and N × s². Checks: s = 20, 30, 40 give 540, 240, 135 with exact grids 30 × 18, 20 × 12, 15 × 9; s = 25 shows 345.6 with a hatched band.
2. **`EqualAreaRect`** (new; course-neutral): a rectangle from the origin to a rider on y = k/x, with a fixed area readout and a corner trace. Check: k = 36 gives areas of 36 at x = 2, 3, 6, 18.
3. **`DoublingLadder` inverse columns** (from w22's addition): sign −1 columns divide by 2ⁿ per rung.

## Codex asset brief (Maths A11 W23, a bare floor, two tiles, a printer and a jug; also w22's handoff)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w23.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and **before the w22 build** (w22's final frame uses plates 1 and 3). Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-timber-deck-v1.png` and `maths/ma12-pen-wall-v1.png`; no text, logos, people, hands, faces, pets, furniture, glow or shadow beyond a faint contact shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma11-tiled-floor-empty-v1.png`: a bare rectangular room floor seen from directly above, smooth grey screed ready for tiling, with a thin skirting edge on all four sides, the floor itself **exactly 6.0 m by 3.6 m painted at 200 px per metre (1200 × 720 px)**, centred on a 1300 × 820 px canvas. No tiles painted (the builder draws the grid).
2. `ma11-floor-tile-20-v1.png` and 3. `ma11-floor-tile-30-v1.png`: one square glazed floor tile each, plain matte off-white with a faint speckle, seen from directly above, **painted at 10 px per centimetre** (200 × 200 px and 300 × 300 px of tile on canvases 20 px larger each side), so the two plates show the true size ratio 2 : 3 at the same scale.
4. `ma11-office-printer-v1.png`: a plain office laser printer, three-quarter view, a short stack of blank pages in its output tray, 800 × 640 px, no brand or screen text.
5. `ma11-water-jug-v1.png`: a clear glass jug of water with a handle, side-on, 520 × 700 px, no measurement markings.

Report in a sidecar `ma11-tiled-floor-v1.json`, in file pixels: the floor rectangle's four inner corners (inside the skirting) on plate 1, and the tile edges on plates 2 and 3. Report inspection on the paper background (`#f6f1e7`) at 1,100 px wide (plate 1) and at display size (the others), the alpha checks, and plate 1 with a coded 30 × 18 grid overlaid (every line must land inside the skirting).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", the floor and tile sizes in the asset brief, and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the three syllabus quotes match the route-inputs JSON exactly, and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "varies inversely: y = k/x, so xy = k" (2); "a constant product identifies inverse variation" (4; n = 1, with xⁿy for n > 1 in the key line); "a falling line isn't inverse variation" (4); "tiles go by the square because each covers s²" (5; by area); "doubling x divides y by 2ⁿ" (6, 8); "round up to cover, down for full ones" (7, A1; by meaning); "only positive side lengths make sense" (7).
4. Confirm the site's `we-1`, `we-2` (re-set to printers) and `we-3` keep their numbers and answers, and that the site's gas-law question does not appear.
5. Confirm both attempt questions carry every demand, and that neither card or its picture shows an answer.
6. Confirm the opening matches w22's final frame and scene 13's frame matches the join fixed in `../checks/root-decisions-maths-a11-w24-w31.md` (dartboard, dart tip 6 cm right and 8 cm below, legs "6 cm" and "8 cm", "?" on the straight line, a "Next" chip and a "?" chip).
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate requests contain no people, pets, text or logos.

## YouTube metadata (draft)

Title: Inverse Variation y = k/xⁿ: When the Product Stays the Same | Year 11 Maths Advanced

(Title length: 86 characters; shorter alternative "Inverse Variation y = k/xⁿ | Year 11 Maths Advanced", 51 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson21.sa.html

540 tiles of 20 cm cover a floor. Swap to 30 cm tiles and you need fewer, but it's not 360. When one quantity varies inversely with another, or with its square, the model is y = k/xⁿ, and the product stays the same, so k is found by multiplying. Use the model forwards and backwards, tell inverse from direct variation with a constant product against a constant ratio, see why equal-area rectangles trace the hyperbola, turn the doubling ladder upside down, and round answers by what they mean. A memory aid: direct, the ratio stays; inverse, the product stays. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Develop the model y = k/(x^n), where k is a non-zero constant, from descriptions of situations in which one quantity varies inversely with another"
"Evaluate k in the equations y = kx^n and y = k/(x^n), given one pair of values for the variables, and use the resulting formula to find other values of the variables"
"Analyse and solve problems involving direct and inverse variation"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: direct variation; the hyperbola y = k/x. Next: Pythagoras and the equation of a circle.

#Year11Maths #MathsAdvanced #Variation #HSCScience

## Open decisions

- **1. Printers for painters (root).** The site's painters are re-set to identical printers (numbers unchanged), as root ruling 9 allowed for other site examples.
- **2. Title length (root).** 86 characters; the 51-character alternative is offered.
- **3. The join to w24 (root).** Scene 13 follows the w24 designer's fixed join exactly; the dartboard and dart plates must be painted before this video's build.
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w22 and w21; check that "varies inversely" gets a plain meaning; that multiplying for k is tied to xy = k; that the equal-area rectangles make the hyperbola's link clear; that "up to cover, down for full" is reasoned, not a rule), then the Codex maths check and error check, then voicing and a build to grade A.
- The tile swap and the equal-area rectangles carry the explanation; judge them at playback speed, not from stills. Every count and readout must be computed from the same k and n as the displayed model.
