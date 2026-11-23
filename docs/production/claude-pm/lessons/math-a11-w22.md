# Maths A11 W22: How does one pair of values fix a direct variation model y = kxⁿ? Finding k, using the model both ways, the ratio test and the doubling ladder (design)

Status: learning review resolved, Revision 1 plus 23 Nov 2026 text corrections (status updated 23 Nov 2026, coherence audit N-4): the independent learning review passed with 0 blockers and 0 should-fix findings (`../checks/m-a11-w22-learning-review.md`) and the Codex maths check passed (`../checks/m-a11-w22-maths-check.md`). The maths check's count correction is applied (5,652 characters; scene 10 is 353). Not voiced. Next: voicing on the Google voice and a build on the studio kit to grade A. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models) and the w01 to w14 root rulings (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced (no `math-a11-w22/` folder, no audio). Nothing recorded; human listening pending.

Narration 5,652 characters (recounted 23 Nov 2026, as the maths check found), 14 scene headings, about 513 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: twenty-second video of the Year 11 Mathematics Advanced course (outline playlist order 22), after w21 (y = k/x) and before w23 (inverse variation). Pre-design pack: `../pre-design/maths-a11/math-a11-w22.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson20.sa.html` (Direct Variation, SHA256 `3acc5f2d8a823f2af07743d7f30a1dfe521bbd641ad23e0b69a1fff52018e4cf`, `we-1`, `we-2`, `we-3`). The site teaches n = 1 only (crosswalk: partial); n = 2 and n = 3 are original teaching. Every number recalculated with SymPy. Route entry: `math-a11-w22` in `../../programme/maths-a11-route-inputs-2.json`.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording; painted plates for real objects (a car, reused, on a new road strip; books, a fabric roll, gobstoppers; a cake and a watermelon for the attempts), coded braking bars, ladders, tables, curves and algebra; no people, hands or faces; one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (a car's braking distance, travel); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `ci388144c4` (Direct and inverse variation): "Develop models of the form y = kx^n, where k is a non-zero constant, from descriptions of situations in which one quantity varies directly with another"
- `ci52779ff4` (Direct and inverse variation): "Evaluate k in the equations y = kx^n and y = k/(x^n), given one pair of values for the variables, and use the resulting formula to find other values of the variables"
- `ci70194fe3` (Direct and inverse variation): "Analyse and solve problems involving direct and inverse variation"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w21's final frame (the hatchback on the road strip, "18 m at 60 km/h", a dashed "? m at 120 km/h", "Twice the speed: twice the distance?"), recalling w10 (y = mx is a line through the origin) and w12 (a model with variables, units and restrictions). Develops y = kx from a description and finds k from one pair (site `we-1`), uses the model backwards (site `we-2`), tests a table by the constant ratio and contrasts a fixed fee (site `we-3`; w08's taxi); develops d = kv² for the braking anchor, uses it both ways; the doubling ladder for n = 1, 2, 3 and the ratio y/xⁿ; n = 3 (a gobstopper). Covers the direct half of `ci52779ff4` and `ci70194fe3`; the inverse half is w23. Stops at direct variation. Not taught: inverse variation (w23); fitting n from data (not required); joint variation (not in the 2024 points).

## Decisions

- **Anchor: a car's braking distance (reused painted car on a new painted road strip, live).** "Braking distance varies directly with the square of the speed": d = kv². With 18 m at 60 km/h, k = 1/200 m per (km/h)², so 120 km/h needs 72 m (four times, not twice) and a 50 m braking distance means 100 km/h. Travel. It carries the lesson's surprise (double the speed, four times the distance) and a real reason to care. Distinct from every Year 12 Maths anchor: cars appear in d08 (a road trip's average speed), d14 (headlights on a curve) and d19 (depreciation), with different ideas; "braking" appears in Year 12 only as a magnetic-braking plate note (d10) and a rejected idea (d16). Reusing `ma12-used-hatchback-v1.png` is plate reuse, not a shared anchor (root ruling 6). Distinct from w01 to w21 and from the w24 to w31 pack suggestions (w29's toll gantry and bus route and w31's train are different objects and ideas). The pack's round cake (n = 2) is attempt 1; its streaming data (n = 1) was not used (Year 12 d17 is video views).
- **Model language (pack section 8).** Braking numbers are illustrative: the narration says "in this model", the distance is braking distance only (reaction distance is not included; said on screen as a grey tag "braking only, not reaction"), on a dry road.
- **Simulations (standard item 3).**
  1. **The braking rig** (scenes 1, 5 and 6, new `BrakingRig` on `ParameterSlider`, `PlateImg` and `LiveReadoutBoard`): a blue slider "speed v" (km/h); the painted car slides along the road strip from a coded "brakes on" marker and stops after a teal bar of length d = v²/200 (to scale: 10 px per metre); readouts "v", "v²", "d" and "d ÷ v²" (violet, constant 0.005). At 60 the bar is 18 m; at 120 it is 72 m and the 18 m bar is shown four times end to end beside it.
  2. **The doubling ladder** (scene 6, and w23, new `DoublingLadder`): three columns (n = 1, 2, 3); x doubles up each rung (1, 2, 4) and the y bars grow ×2, ×4, ×8 per rung, each labelled; the braking column lights with the n = 2 column.
  3. **The ratio table** (scene 4 and 6, `WorkingRows` table mode): a y/xⁿ column fills in; when every entry matches it turns green with "constant"; a taxi row stays red-grey with "not constant".
- **Colour roles (fixed for the whole video).** The input x (number of books, length, speed, diameter) **blue**; the output y (weight, cost, braking distance, mass) **teal** (root ruling 12); k **violet**; the power n **amber**; answer green; mistake red, crossed slips only; graphs ink.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "name the variables", "one pair finds k", "k has units", "full model first", "backwards", "divide each pair", "constant", "fixed fee: not direct", "through the origin", "squared", "× 4, not × 2", "speed > 0", "double x: × 2ⁿ", "ratio y ÷ xⁿ", "cubed", "× 8", "√ and ∛ undo", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 50 s.** w21's frame and the braking rig (1); g01 board with the books (2); g01 board, the fabric backwards (3); the ratio table and the taxi (4); the car's model (5); the doubling ladder (6); g01 board, gobstoppers (7); framed memory card (8); question cards (9 to 12); the floor-tile handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** 2 (`we-1`): k = 1.5 kg per book; 10 books 15 kg; crossed "k = 4 ÷ 6" captioned "k = w ÷ b = 6 ÷ 4". 3 (`we-2`): k = 6.5 dollars per metre; 8 m; crossed "52 × 6.5 = 338 m" captioned "solve 52 = 6.5L: divide". 4 (`we-3`): y = 2.5x; crossed "taxi: direct variation" captioned "fixed fee: not through the origin". 5 (the car): k = 1/200; 72 m; 100 km/h; crossed "36 m" captioned "squared: × 4". 7 (gobstopper): k = 5/8 g/cm³; 40 g; crossed "10 g" captioned "cubed: × 8". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Find k first. Double x, times 2ⁿ." Key line: "y = kxⁿ: k = y ÷ xⁿ from one pair. Doubling x multiplies y by 2, 4 or 8 for n = 1, 2, 3." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** In the braking rig, the slider moves from 60 to 120 and the car slides four times as far as before; four copies of the 18 m bar fit end to end under the 72 m bar.
- **Site numbers unchanged.** `we-1`: k = 1.5 kg per book, 15 kg. `we-2`: k = 6.5 dollars per metre, 8 m. `we-3`: ratio 2.5, y = 2.5x.
- **Attempts (pack questions, original).** A1 (pack question 1): "The price of a round cake varies directly with the square of its diameter. A 20 cm cake costs $36. Find the price of a 30 cm cake." Answer $81. Crossed "$54". A2 (original, n = 3 backwards; the pack's question 2, braking backwards, is taught in scene 5): "The mass of a watermelon varies directly with the cube of its diameter. A 20 cm melon has a mass of 4 kg. Find the diameter of a melon with a mass of 13.5 kg." Answer 30 cm. Crossed "67.5 cm".
- **Mistake scene:** none separate. k upside down (2 crossed); multiplying instead of solving backwards (3 crossed); a fixed fee as direct variation (4 crossed); doubling for n = 2 (1, 5 crossed; A1 crossed); n = 3 scaled linearly (7 crossed; A2 crossed); testing y/x when the model is y/x² (6).
- **Cause chain taught, in order:** (1) "varies directly" means y is a fixed multiple of x (or of a power of x), y = kxⁿ, with k ≠ 0, so y is 0 when x is 0 (2); (2) one known pair fixes k, because it is the only unknown left (2, 5, 7); (3) write the full model before using it, forwards or backwards (2, 3); (4) if y = kxⁿ then y ÷ xⁿ = k for every pair, so a constant ratio is the test, and a fixed fee breaks it (4, 6); (5) doubling x multiplies xⁿ by 2ⁿ, so y multiplies by 2, 4 or 8 (6); (6) for a solid, every length doubling makes the volume, and so the mass, eight times as big (7).
- **Entry knowledge (route):** w10 (y = mx through the origin, gradient as a rate); w12 (a model with variables, units and restrictions); w01 (powers and roots, for v² = 10 000 and cube roots); w08's taxi fare is recalled for the contrast.
- **Learner-visible vocabulary (plain meaning at first use):** varies directly (is a fixed multiple of, 2); constant of variation k (the fixed multiplier, with units, 2, 3); "varies directly with the square of" (is a fixed multiple of the square of, 5); ratio (one quantity divided by another, 4).
- **Handoff (to w23, "How does inverse variation y = k/xⁿ differ from direct variation?").** Scene 13: the painted floor (`ma11-tiled-floor-empty-v1.png`) with a coded 30 × 18 grid of 20 cm tiles ("540 tiles, 20 cm") and a single painted 30 cm tile (`ma11-floor-tile-30-v1.png`) beside it with "30 cm: how many?"; chips "Bigger tiles: fewer of them. How many?" and "Next: inverse variation, y = k/xⁿ". This is w23's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) d = kv²: k = 18/3600 = 1/200; d(120) = 72; d(30) = 4.5; d = 50 gives v² = 10 000, v = 100 (v > 0). Ratios 18/3600 = 72/14 400 = 0.005.
  (b) Taxi (w08): C = 5 + 1.8d; C/d = 6.8 at d = 1 and 2.3 at d = 10.
  (c) Gobstopper: m = kd³; k = 5/8; m(4) = 40; m(3) = 16.875 (author only).
  (d) Cake: k = 36/400 = 0.09; P(30) = 81; ×1.5 slip 54. Melon: k = 4/8000 = 1/2000; d³ = 27 000; d = 30; linear slip 13.5/4 × 20 = 67.5.
  (e) Pronunciations: "k x to the n", "one over two hundred", "fourteen thousand four hundred", "five eighths", "cube root of twenty-seven thousand", "zero point zero nine".
  (f) Windows: braking bars at 10 px per metre (72 m = 720 px); d against v plot v 0 to 130, d 0 to 90 (labelled); n = 1 plots through the origin.

Main question: *At 60 km/h a car needs 18 m to brake. Does twice the speed need twice the distance? How does one pair of values fix a direct variation model y = kxⁿ?*
Entry knowledge (w10; w12; w01): a line through the origin; a model with units; powers and roots.
Stops after: y = kxⁿ (n = 1, 2, 3) from a description; k from one pair, with units; the model forwards and backwards; the ratio test; the doubling ladder. No inverse variation.
Handoff: math-a11-w23: the floor with 540 tiles of 20 cm and the 30 cm tile.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): input blue; output teal; k violet; n amber; answer green; mistake red, crossed slips only; graphs ink. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: twice the speed?
> Here's a car braking on a dry road. In this model, at sixty kilometres an hour it needs eighteen metres of braking to stop. At a hundred and twenty, twice as fast, does it need twice the distance, thirty-six **metres**? It feels right, but it's wrong, and the reason matters on a real road. Braking distance varies directly with the square of the speed. So how does one pair of values, like sixty and eighteen, fix a model like this, and what does the power **do**?

Visual: opens on w21's final frame exactly (the hatchback `ma12-used-hatchback-v1.png` on the road strip `ma11-road-side-strip-v1.png`, the "brakes on" marker, the teal bracket "18 m at 60 km/h", the dashed "? m at 120 km/h", chips "Twice the speed: twice the distance?" and "Next: direct variation, y = kxⁿ"). On the first sentence the "Next" chip fades and the heading writes on "Twice the speed?". The braking rig (simulation 1): on "sixty" the car slides from the marker and stops after the 18 m teal bar; a grey tag "braking only, not reaction". On "metres" a pencil guess "36 m?" writes on the dashed bracket. On "wrong" the speed slider moves to 120 and the car slides on past the 36 m mark to stop at 72 m (the bar labelled only "?" for now), hand tag "much further". On "square of the speed" a strip writes, 44 px: "braking distance varies directly with the square of the speed". On "do" the chip "one pair fixes the model?" moves to the top right as the scene question.

### 2. varies directly: find k from one pair
> Start with the simplest kind. When one quantity varies directly with another, it's a fixed multiple of it. y equals k x, for a constant k that isn't zero. Its graph is a straight line through the origin, like y equals m x. Here's an example. The weight of a stack of identical books varies directly with the number of books. Four books weigh six kilograms. Find the weight of ten books. Let w be the weight in kilograms and b the number of books, so w equals k **b**. Put in the pair you know. Six equals k times four, so k is one and a half kilograms per **book**. Write the full model, w equals one point five b, then use it. Ten books weigh **fifteen** kilograms.

Visual: clear change. Top: a definition strip, 44 px: "y varies directly with x: y = kx (k ≠ 0)" with k violet, and a small graph of y = kx through the origin (300 px), hand tag "through the origin". Then the g01 board below. Task strip, 44 px: "The weight of a stack of identical books varies directly with the number of books. Four books weigh 6 kg. Find the weight of 10 books." (site `we-1`). Picture slot: the painted book stack `ma11-book-stack-v1.png` (four books, 320 px). Rows, 52 px: on "b" "w = kb" (w teal, b blue, k violet), hand tag "name the variables"; on "book" "6 = k × 4 ⇒ k = 1.5 kg per book", hand tag "one pair finds k"; "w = 1.5b", hand tag "full model first"; on "fifteen" "w = 1.5 × 10 = 15 kg". Framed answer (green): "10 books weigh 15 kg." A red slip "k = 4 ÷ 6" writes small and is crossed (caption "k = w ÷ b = 6 ÷ 4").

### 3. using the model backwards
> The same model works backwards. The cost of fabric varies directly with its length, and three metres cost nineteen dollars fifty. How much can you buy for fifty-two dollars? C equals k L, and nineteen fifty equals k times three, so k is six dollars fifty a **metre**. Notice k has units, dollars per metre. Now fifty-two equals six point five L, so L is fifty-two divided by six point five, which is eight **metres**.

Visual: clear change to the g01 board. Task strip, 44 px: "The cost of fabric varies directly with its length. 3 m costs $19.50. How much fabric can be bought for $52?" (site `we-2`). Picture slot: the painted fabric roll `ma11-fabric-roll-v1.png` (320 px). Rows, 52 px: "C = kL"; on "metre" "19.50 = k × 3 ⇒ k = 6.5 dollars per metre", hand tag "k has units"; "C = 6.5L"; "52 = 6.5L", hand tag "backwards"; on "metres" "L = 52 ÷ 6.5 = 8 m". Framed answer (green): "$52 buys 8 m of fabric." A red slip "52 × 6.5 = 338 m" writes small and is crossed (caption "solve 52 = 6.5L: divide").

### 4. testing a table: the constant ratio
> How can you tell from data whether something varies directly? If y equals k x, then y over x is always k. So divide each pair. Five over two is two point five, fifteen over six is two point five, and twenty-five over ten is two point **five**. The ratio is constant, so y varies directly with x, and y equals two point five x. Compare the taxi fare, five dollars plus one dollar eighty a kilometre. One kilometre costs six eighty, a ratio of six point eight. Ten kilometres costs twenty-three dollars, a ratio of two point three. Not constant. A line with a fixed fee isn't direct **variation**, because it doesn't pass through the origin.

Visual: clear change to the ratio table (simulation 3). Task strip, 44 px: "Decide whether this data shows direct variation: x = 2, y = 5; x = 6, y = 15; x = 10, y = 25." (site `we-3`). Table, 52 px: columns "x" (blue), "y" (teal), "y ÷ x" (violet); on "five" (last of the three) the three ratios fill "2.5", "2.5", "2.5" and the column turns green with "constant", hand tag "divide each pair". Framed answer (green): "Constant ratio 2.5: direct variation, y = 2.5x". On "taxi fare" a small w08 taxi badge (`ma11-taxi-side-v1.png`, 260 px) and a second table: "C = 5 + 1.8d": "d = 1: 6.80 ÷ 1 = 6.8", "d = 10: 23 ÷ 10 = 2.3", the column red-grey "not constant". On "variation" a small graph shows y = 2.5x through the origin and the taxi line meeting the C axis at 5, hand tag "fixed fee: not direct". A red slip "taxi: direct variation" writes small and is crossed (caption "fixed fee: not through the origin").

### 5. the car: varies with the square
> Now back to the car. Braking distance varies directly with the square of the speed, so d equals k v **squared**. Find k from the pair we know. Eighteen equals k times sixty squared, which is k times thirty-six hundred. So k is eighteen over thirty-six hundred, one over two **hundred**. Now the model is d equals v squared over two hundred. At a hundred and twenty, that's fourteen thousand four hundred over two hundred, which is seventy-two **metres**. Not thirty-six. Four times the distance. And backwards, what speed gives a fifty metre braking distance? Fifty equals v squared over two hundred, so v squared is ten thousand, and v is one hundred kilometres an **hour**. We take the positive root, because speed is positive here.

Visual: clear change back to the car on the road strip (the braking rig across the top half) with the g01 rows below. Givens card: "60 km/h: 18 m". On "squared" (first bold) row "d = kv²" with "2" amber, hand tag "squared". On "hundred" rows "18 = k × 60² = 3600k", "k = 18 ÷ 3600 = 1/200" (violet). Row "d = v² ÷ 200", hand tag "full model first". On "metres" the slider moves to 120: the car slides to 72 m; row "d = 120² ÷ 200 = 14 400 ÷ 200 = 72 m"; four copies of the 18 m bar slide in end to end under the 72 m bar, hand tag "× 4, not × 2". On "hour" rows "50 = v² ÷ 200", "v² = 10 000", "v = 100 km/h"; the slider moves to 100 and the car stops at the 50 m mark; on "positive here" hand tag "speed > 0". Framed answer (green): "d = v²/200: 72 m at 120 km/h; 50 m at 100 km/h." A red slip "36 m" writes small and is crossed (caption "squared: × 4").

### 6. the doubling ladder and the ratio y ÷ xⁿ
> Why four times? Double the speed, and v squared becomes two v, all squared, which is four v **squared**. So the distance multiplies by four. That's the doubling ladder. When y varies with x, doubling x doubles y. With x squared, doubling x multiplies y by four. With x cubed, by **eight**. And the data test changes too. For y equals k x to the n, the constant ratio is y over x to the n, not y over **x**. For the car, eighteen over thirty-six hundred and seventy-two over fourteen thousand four hundred are both one over two hundred.

Visual: clear change to the doubling ladder (simulation 2), full width. Row at the top, 52 px: on "squared" "(2v)² = 4v²" with the "2" and "4" circled amber. Three columns "n = 1", "n = 2", "n = 3" (n amber); rungs x = 1, 2, 4 (blue); teal bars grow ×2, ×4, ×8 per rung, each labelled; hand tag "double x: × 2ⁿ"; the car badge (220 px) lights on the n = 2 column. On "eight" the n = 3 bars complete. On "x" (last bold) a ratio table: "v: 60, 120", "d: 18, 72", columns "d ÷ v" (grey: 0.3, 0.6, not constant) and "d ÷ v²" (green: 0.005, 0.005, constant), hand tag "ratio y ÷ xⁿ".

### 7. worked example: a cube
> Here's n equals three. The mass of a gobstopper varies directly with the cube of its diameter. A two centimetre gobstopper has a mass of five grams. Find the mass of a four centimetre one. m equals k d cubed, and five equals k times eight, so k is five eighths of a gram per cubic **centimetre**. At four centimetres, m is five eighths times sixty-four, which is forty **grams**. Twice as wide, eight times the mass. That's the ladder again, because the whole ball is twice as long, twice as wide and twice as **deep**.

Visual: clear change to the g01 board. Task strip, 44 px: "The mass of a gobstopper varies directly with the cube of its diameter. A 2 cm gobstopper has a mass of 5 g. Find the mass of a 4 cm gobstopper." (original). Picture slot: the painted pair `ma11-gobstoppers-v1.png` (2 cm and 4 cm at true relative size, 420 px). Rows, 52 px: "m = kd³" ("3" amber), hand tag "cubed"; on "centimetre" "5 = k × 2³ = 8k ⇒ k = 5/8"; on "grams" "m = 5/8 × 4³ = 5/8 × 64 = 40 g". Framed answer (green): "The 4 cm gobstopper has a mass of 40 g." On "deep" the large gobstopper fills with eight faint copies of the small one's bounding cube (a 2 × 2 × 2 stack drawn in coded outline), hand tag "× 8". A red slip "10 g" writes small and is crossed (caption "cubed: × 8").

### 8. memory aid
> Here's a way to remember it. Find k first, then use the model. And when x doubles, y multiplies by two to the n. That's two, four or eight, for n equals one, two or **three**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: the doubling ladder's three columns growing (a 3 s loop). Main line, hand font 60 px: "Find k first. Double x, times 2ⁿ." On "three" the key line, 40 px: "y = kxⁿ: k = y ÷ xⁿ from one pair. Doubling x multiplies y by 2, 4 or 8 for n = 1, 2, 3." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. The price of a round cake varies directly with the square of its diameter. A twenty centimetre cake costs thirty-six dollars. Find the price of a thirty centimetre cake. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The price of a round cake varies directly with the square of its diameter. A 20 cm cake costs $36. Find the price of a 30 cm cake." The full question stays on screen. Picture slot: the painted cake `ma11-round-cake-v1.png` (320 px), no price shown. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> P equals k d squared. Thirty-six equals k times four hundred, so k is zero point zero **nine**. At thirty centimetres, P is zero point zero nine times nine hundred, which is eighty-one **dollars**. Fifty-four dollars is the classic slip. The cake is one and a half times as wide, but its price goes with the square, so it costs two point two five times as **much**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "square of its diameter", "20 cm: $36" (underlined as used). Rows, 52 px: "P = kd²"; on "nine" "36 = k × 20² = 400k ⇒ k = 0.09"; on "dollars" "P = 0.09 × 30² = 0.09 × 900 = $81". Framed answer (green): "A 30 cm cake costs $81." On "much" a red slip "$36 × 1.5 = $54" writes and is crossed (hand caption "squared: × 1.5² = × 2.25"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. The mass of a watermelon varies directly with the cube of its diameter. A twenty centimetre melon has a mass of four kilograms. Find the diameter of a melon with a mass of thirteen point five kilograms. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The mass of a watermelon varies directly with the cube of its diameter. A 20 cm melon has a mass of 4 kg. Find the diameter of a melon with a mass of 13.5 kg." The full question stays on screen. Picture slot: the painted watermelon `ma11-watermelon-v1.png` (320 px). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> m equals k d cubed. Four equals k times eight thousand, so k is one over two **thousand**. Then thirteen point five equals d cubed over two thousand, so d cubed is twenty-seven **thousand**. The cube root of twenty-seven thousand is thirty, so the diameter is thirty **centimetres**. Sixty-seven point five scales it as if it were a straight line. Mass grows with the cube, so the diameter grows much more **slowly**.

Visual: the card shrinks to the top. `GivensStrip`: "cube of its diameter", "20 cm: 4 kg", "13.5 kg" (underlined as used). Rows, 52 px: "m = kd³"; on "thousand" (first) "4 = k × 20³ = 8000k ⇒ k = 1/2000"; on "thousand" (second) "13.5 = d³ ÷ 2000 ⇒ d³ = 27 000"; on "centimetres" "d = ∛27 000 = 30 cm", hand tag "∛ undoes cubing". Framed answer (green): "The diameter is 30 cm." On "slowly" a red slip "13.5 ÷ 4 × 20 = 67.5 cm" writes and is crossed (hand caption "cubed: use ∛"). Hold about 1 s.

### 13. handoff
> So direct variation is y equals k x to the n, and one pair of values fixes k. Next, quantities that go the opposite way. Here's a floor covered with five hundred and forty square tiles, each twenty centimetres wide. Use bigger tiles, thirty centimetres wide, and you need fewer. But how many? Next, inverse **variation**.

Visual: the memory line shows small at the top (30 px), then fades on "Next". Board clears to the painted floor `ma11-tiled-floor-empty-v1.png` (about 1,200 px wide, solid) with a coded 30 × 18 grid of 20 cm tiles ("540 tiles, 20 cm", teal count), and beside it the painted 30 cm tile `ma11-floor-tile-30-v1.png` (at the floor's scale) with "30 cm: how many?". On "variation" chips "Bigger tiles: fewer of them. How many?" and "Next: inverse variation, y = k/xⁿ". Hold about 2 s. This is w23's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- y varies directly with xⁿ: y = kxⁿ, k ≠ 0.
- One pair gives k = y ÷ xⁿ (with units). Write the model.
- Use the model forwards, or solve it backwards.
- Test data: y ÷ xⁿ constant. A fixed fee is not direct.
- Double x: y × 2 (n = 1), × 4 (n = 2), × 8 (n = 3).

Memory aid (framed card, right side of the notes screen, as in scene 8): *Find k first. Double x, times 2ⁿ.* Key: *y = kxⁿ: k = y ÷ xⁿ from one pair. Doubling x multiplies y by 2, 4 or 8 for n = 1, 2, 3.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the floor with its 540-tile grid, the 30 cm tile, "30 cm: how many?" and both chips). This is the final frame and w23's opening frame.

## Teaching checks

- **Does it explain causes?** Why one pair is enough: k is the only unknown (2, 5, 7). Why k has units: it is y per unit of xⁿ (3). Why the ratio test works: y ÷ xⁿ = k for every pair (4, 6). Why a fixed fee fails: it does not pass through the origin, so the ratio changes (4). Why twice the speed gives four times the distance: (2v)² = 4v² (5, 6). Why a cube gives eight: every length of a solid doubles (7). Why the positive root: speed is positive here (5).
- **Misconceptions addressed:** k upside down (2 crossed); multiplying when solving backwards (3 crossed); a straight line with a fee as direct variation (4 crossed); doubling for n = 2 (1, 5 crossed; A1 crossed); linear scaling for n = 3 (7 crossed; A2 crossed); y/x for a squared model (6).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted car on the road from the first frame, answered in 5; books, fabric and gobstoppers in the worked examples; 2 a new stage every 30 to 50 s; 3 the braking rig (the car sliding four times as far, with readouts), the doubling ladder, the ratio table turning green; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 2, 3, 4, 5 and 7 with framed answers and crossed slips; 8 framed memory card and five short bullets; 9 four 18 m bars fitting under the 72 m bar.
- **One idea at a time:** n = 1 forwards (2), backwards (3), the test (4), n = 2 on the anchor (5), why (6), n = 3 (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with a painted picture; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 27 s and 31 s.
- **Avoided double teaching:** y = mx (w10), modelling with units (w12), powers and roots (w01) are used, not re-taught.
- **Syllabus coverage:** `ci388144c4` develop y = kxⁿ from descriptions (2, 5, 7; A1, A2; key note 1); `ci52779ff4` evaluate k and use the formula (2, 3, 5, 7; A1, A2; key notes 2, 3) (direct half; the inverse half is w23); `ci70194fe3` analyse and solve direct variation problems (4, 5, 6; key notes 4, 5) (direct half).
- **Out of scope by design:** inverse variation (w23); fitting n from data; joint variation.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "The price of a round cake varies directly with the square of its diameter. A 20 cm cake costs $36. Find the price of a 30 cm cake."
Model answer: P = kd². 36 = k(20²) = 400k, so k = 0.09 (dollars per cm²). P = 0.09 × 30² = 0.09 × 900 = 81. A 30 cm cake costs $81. Classic mistake (crossed): "$54".

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "The mass of a watermelon varies directly with the cube of its diameter. A 20 cm melon has a mass of 4 kg. Find the diameter of a melon with a mass of 13.5 kg."
Model answer: m = kd³. 4 = k(20³) = 8000k, so k = 1/2000 (kg per cm³). 13.5 = d³/2000, so d³ = 27 000 and d = ∛27 000 = 30. The diameter is 30 cm. Classic mistake (crossed): "67.5 cm".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Braking | d = kv²; 18 = 3600k; k = 1/200; d(120) = 72; d = 50 at v = 100; ratios 0.005 | 1, 5, 6 |
| Site `we-1` | 6 = 4k; k = 1.5 kg per book; 10 books: 15 kg | 2 |
| Site `we-2` | 19.50 = 3k; k = 6.5 $/m; 52 ÷ 6.5 = 8 m; crossed 338 | 3 |
| Site `we-3` | 5/2 = 15/6 = 25/10 = 2.5; y = 2.5x | 4 |
| Taxi (w08) | C = 5 + 1.8d: 6.8 at d = 1; 2.3 at d = 10 | 4 |
| Ladder | (2x)ⁿ = 2ⁿxⁿ: ×2, ×4, ×8 | 6 |
| Gobstopper | 5 = 8k; k = 5/8; m(4) = 40 g; crossed 10 g | 7 |
| A1 | k = 0.09; P(30) = 81; crossed 54 | 9, 10 |
| A2 | k = 1/2000; d³ = 27 000; d = 30 cm; crossed 67.5 | 11, 12 |
| Handoff | 540 tiles of 20 cm (30 × 18) | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w15w23/verify.py`, 85 checks, none failing); Codex to re-check.

- 6/4 = 1.5; 1.5 × 10 = 15.
- 19.50/3 = 6.5; 52/6.5 = 8.
- 5/2 = 15/6 = 25/10 = 2.5.
- (5 + 1.8 × 1)/1 = 6.8; (5 + 1.8 × 10)/10 = 2.3.
- 18/3600 = 1/200; 120²/200 = 72; 30²/200 = 4.5; v²/200 = 50 gives v = ±100 (100 taken); 72/14 400 = 1/200.
- (2x)ⁿ/xⁿ = 2ⁿ for n = 1, 2, 3.
- 5/8 × 4³ = 40; 5/8 × 3³ = 16.875 (author only).
- 36/400 = 0.09; 0.09 × 900 = 81; 36 × 1.5 = 54.
- 4/8000 = 1/2000; d³/2000 = 13.5 gives d = 30 (real root); 13.5/4 × 20 = 67.5.
- 30 × 18 = 540.

## Memory aid check

- **"Find k first. Double x, times 2ⁿ."** Original. Meaning, as said in scene 8: for y = kxⁿ, use the known pair to find k = y ÷ xⁿ and write the model before using it; when x doubles, y multiplies by 2ⁿ (2, 4 or 8 for n = 1, 2, 3). Assumptions checked: direct variation (y = kxⁿ, k ≠ 0, no added constant); x > 0 in the contexts; the doubling rule follows from (2x)ⁿ = 2ⁿxⁿ for any n. It helps a new case: area of a square tile ∝ side², so a tile twice as wide covers four times the area. Introduced after the causes in 2 to 7.
- **Considered, not used:** "Ratio stays: direct" (true, but it belongs with w23's "product stays: inverse" as a pair; w23 uses both).

## Narration length estimate

Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,660 characters**, 14 scene headings. Recount 23 Nov 2026 (same rules; the maths check's correction): **5,652 characters**; scene 10 is 353, not 361. Characters per scene (1 to 14): 457, 654, 409, 631, 718, 523, 507, 171, 202, 353, 234, 401, 317, 75.

At 13.3 characters per second the speech is about 426 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the braking rig at three speeds (1, 5), the ratio tables (4), the doubling ladder (6) and the eight-cube outline (7), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 513 s (8 min 33 s)**, inside the 5,500 to 6,800 character band and about 57 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 6's last sentence (keep the ratio table); scene 7's last sentence (keep the eight-cube outline). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w22` (route math-a11-w22). Explainer folder `src/explainer/lessons/math-a11-w22`; build inputs in `docs/production/claude-pm/lessons/math-a11-w22/` (to be created at voicing).

In order (kebab-case; 14 scene headings): hook-braking, find-k, backwards, ratio-test, braking-model, doubling-ladder, worked-cube, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 36 s | 1 | w21's frame; the braking rig at 60 and 120 km/h |
| 36 to 92 s | 2 | Definition and the books board |
| 92 to 125 s | 3 | g01 board: the fabric backwards |
| 125 to 177 s | 4 | The ratio table and the taxi contrast |
| 177 to 235 s | 5 | The car's model: 72 m and 100 km/h |
| 235 to 279 s | 6 | The doubling ladder and y ÷ xⁿ |
| 279 to 323 s | 7 | g01 board: the gobstopper |
| 323 to 339 s | 8 | Framed memory card |
| 339 to 442 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 442 to 468 s | 13 | The floor and the 30 cm tile |
| 468 s to end | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w21's last frame continues into scene 1 (identical frame); 1 to 2 clear change; 2 to 3 clear change (new case); 3 to 4 clear change; 4 to 5 clear change back to the car; 5 to 6 clear change; 6 to 7 clear change; 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-w22-learning-review.md`, `science_check` = `checks/m-a11-w22-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only): `ma12-used-hatchback-v1.png` (viewed: a red hatchback side-on, no people; reused); `ma12-country-road-v1.png` (a perspective country road, not a side-on strip; not used); `ma11-taxi-side-v1.png` is commissioned in w08's brief (reused as a badge). No road strip, book, fabric, gobstopper, cake or melon plate exists in `maths/`.

Need (painted, new; see the Codex asset brief): `ma11-road-side-strip-v1.png` (also w21's handoff), `ma11-book-stack-v1.png`, `ma11-fabric-roll-v1.png`, `ma11-gobstoppers-v1.png`, `ma11-round-cake-v1.png`, `ma11-watermelon-v1.png`. w23's `ma11-tiled-floor-empty-v1.png` and `ma11-floor-tile-30-v1.png` are commissioned in w23's brief and must be painted before this video's build (scene 13). Reused: `maths/ma12-used-hatchback-v1.png`, `ma11-taxi-side-v1.png` (w08).

Coded (studio kit): the braking bars and marker, every slider, readout, ladder, table, graph, the eight-cube outline, working boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `StudioPlot`, `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows` (with a table mode), `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`.

Additions (new kit-needs row w22):
1. **`BrakingRig`** (lesson folder; the car slide is anchor-specific): a speed slider; the car plate translates along the road strip by d(v) = v²/200 at a fixed px-per-metre scale; readouts v, v², d and d ÷ v²; optional ghost copies of a reference bar. Checks: 60 gives 18 m (180 px at 10 px/m); 120 gives 72 m; 100 gives 50 m; d ÷ v² reads 0.005 at every speed.
2. **`DoublingLadder`** (new; reused by w23): `columns` [{n, sign: +1 for direct, −1 for inverse}], `rungs` x = 1, 2, 4; bars scale by 2^(sign·n) per rung, labelled ×2ⁿ or ÷2ⁿ. Checks: direct n = 1, 2, 3 give ×2, ×4, ×8; inverse n = 1, 2 give ÷2, ÷4.

## Codex asset brief (Maths A11 W22, a road strip and five objects; also w21's handoff)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w22.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and **before the w21 build** (w21's final frame uses plate 1). Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-timber-deck-v1.png`, `maths/ma12-pen-wall-v1.png` and the reused `maths/ma12-used-hatchback-v1.png`; no text, logos, labels, prices, people, hands, faces, pets, glow or shadow beyond a faint contact shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma11-road-side-strip-v1.png`: a side-on strip of dry bitumen road with a kerb edge and a faint dashed centre line seen edge-on, **tileable left to right**, 2400 × 260 px, its top surface a straight line at y = 60 px (the car's wheels sit on it). No markings with numbers or text.
2. `ma11-book-stack-v1.png`: four identical closed hardback books stacked flat, spines towards the viewer, plain coloured covers, no titles, 700 × 520 px.
3. `ma11-fabric-roll-v1.png`: a bolt of plain patterned cotton fabric partly unrolled across a cutting table edge, 900 × 520 px, no text or tape-measure numbers.
4. `ma11-gobstoppers-v1.png`: two round striped gobstoppers side by side, **diameters exactly in the ratio 1 : 2** (the small one 160 px across, the large one 320 px across), on an 800 × 420 px canvas, same lighting.
5. `ma11-round-cake-v1.png`: a round iced celebration cake on a plate, three-quarter view, no candles with numbers, no writing, 800 × 600 px.
6. `ma11-watermelon-v1.png`: a whole round watermelon, side view, 700 × 600 px.

Report in a sidecar `ma11-w22-plates-v1.json`, in file pixels: the road strip's surface line y and its tile seam check, and the two gobstopper diameters. Report inspection on the paper background (`#f6f1e7`) at display size, the alpha checks, and the hatchback placed on the road strip.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the three syllabus quotes match the route-inputs JSON exactly, and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "varies directly: y = kx, a line through the origin" (2; n = 1); "if y = kxⁿ then y ÷ xⁿ is always k" (4, 6); "a line with a fixed fee isn't direct variation" (4); "doubling x multiplies y by 2ⁿ" (6, 8); "take the positive root, because speed is positive here" (5); the model language for braking (1, 5: braking only, dry road, illustrative).
4. Confirm the site's `we-1`, `we-2` and `we-3` keep their answers.
5. Confirm both attempt questions carry every demand, and that neither card or its picture shows a price, mass or answer.
6. Confirm the opening matches w21's final frame and scene 13's frame is w23's opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate requests contain no people, pets, text, prices or logos.

## YouTube metadata (draft)

Title: Direct Variation y = kxⁿ: One Pair Fixes the Model | Year 11 Maths Advanced

(Title length: 77 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson20.sa.html

At 60 km/h a car needs 18 m of braking. At twice the speed, does it need twice the distance? When one quantity varies directly with another, or with its square or cube, the model is y = kxⁿ, and one pair of values fixes k. Find k with its units, use the model forwards and backwards, test data with the constant ratio y ÷ xⁿ, see why a fixed fee isn't direct variation, and climb the doubling ladder: double x and y multiplies by 2, 4 or 8. A memory aid: find k first, double x, times 2ⁿ. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Develop models of the form y = kx^n, where k is a non-zero constant, from descriptions of situations in which one quantity varies directly with another"
"Evaluate k in the equations y = kx^n and y = k/(x^n), given one pair of values for the variables, and use the resulting formula to find other values of the variables"
"Analyse and solve problems involving direct and inverse variation"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: lines through the origin; building models with units; powers and roots. Next: Inverse variation: how y = k/xⁿ differs.

#Year11Maths #MathsAdvanced #Variation #HSCScience

## Open decisions

- **1. Cars (root).** Year 12 uses cars in d08, d14 and d19 with other ideas; braking distance is a new idea and reuses the hatchback plate (ruling 6). Fallback: the pack's round cake as the anchor (n = 2), with A1 moved to a pizza-free food item.
- **2. Six new small plates (root).** Books, fabric, gobstoppers, cake and melon are worked-example and question pictures; root may cut books and fabric to coded picture slots if plate budget is tight (the standard prefers plates for real objects).
- **3. Two shared syllabus points (root).** `ci52779ff4` and `ci70194fe3` are quoted in full here and in w23; each video covers its own half (the outline notes they span w22 and w23).
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w10, w12 and w01; check that "varies directly" gets a plain meaning before the symbols; that k's units are said; that the ×4 is seen on the road before it is explained; that the ratio y ÷ xⁿ is not confused with y ÷ x), then the Codex maths check and error check, then voicing and a build to grade A.
- The braking rig and the doubling ladder carry the explanation; judge them at playback speed, not from stills. Every bar and readout must be computed from the same k and n as the displayed model.
