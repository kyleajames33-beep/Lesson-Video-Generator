# Maths A11 T01: How do two special triangles give exact values at 30, 45 and 60 degrees? The half-square and the half-equilateral triangle by Pythagoras, the exact ratios, rationalised form, and exact-value expressions (design)

Status: Revision 2 (17 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Designer's decisions for t01 to t08: `../checks/root-decisions-maths-a11-t01-t08.md`. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 6,402 characters by script (see "Narration length estimate"; Revision 2), 14 scene headings, about 567 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov 2026): learning review resolved

Review: `../checks/m-a11-t01-learning-review.md` (summary `../checks/m-a11-t01-t08-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-t-g-s-packs.md` and root's resolution brief of 17 Nov (decisions 4, the cliff waterline, and 5, the e08 chip). Resolution log: `../checks/m-a11-t01-t08-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 7 (the side is the diagonal times cos 45°, stated without the ratio): **accepted**, reviewer's narration and rows. Scene 7 now says "cosine forty-five degrees is the side over the diagonal, adjacent over hypotenuse", then rearranges, then checks on the drawn 2 cm square ("2√2 × √2/2 = 2 ✓"). The decimal now carries its unit ("about two point eight three centimetres").
2. Should fix, scene 3 (the right angle at the base is asserted): **accepted**, reviewer's narration. The third angle comes from the angle sum; on "ninety" a right-angle mark draws at the foot of the height, hand tag "180° − 30° − 60° = 90°".
3. Optional, scene 7 (why scaling keeps the ratios): **applied**, as a replacement for the old clause rather than an addition: "Scaling multiplies every side by the same number, so it cancels in each ratio." Teal row "2 ÷ 2√2 = 1 ÷ √2" beside the 2 cm square.
4. Optional, scene 2 (why the diagonal halves the right angle): **applied**, reviewer's reason ("the two sides at that corner are equal, so the cut is a mirror line"), hand tag "equal sides: mirror line".
5. Optional, scene 1 (e08's grey chip missing from the opening frame): **applied** as root's decision 5. The opening frame lists every element of e08's final frame, including the grey chip "e04: log₂ 100 ≈ 6.644, exact as log₂ 100", which fades with the "Next" chips on the first sentence.

Root's decision 4 (the cliff waterline): in scene 13 the sight line and the 40 m now both start at the yacht's waterline point on the side facing the cliff, so the triangle's corners are the yacht at the water, the cliff's foot and the clifftop, and the horizontal is the waterline itself (no deck-level line). The Codex asset brief now asks for the yacht with its bow to the right and a sidecar waterline point at the bow. t02a's opening frame repeats this geometry exactly.

Open decisions 1 (two anchors, ruling 15) and 2 ("sine" in full, no learning objection) are closed. Length: 6,402 characters (Revision 1: 6,145), about 567 s with holds and about 476 s of speech before the notes, under the 570 s cap; Revision 1's scene 5 reserve trim was taken and two small cuts made (see "Narration length estimate"). Changed values were rechecked with SymPy (`work/brief-resolve-t/verify.py`); Codex's maths check remains the authority. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: fifty-eighth video of Year 11 Mathematics Advanced (2024), outline order 58, Trigonometry and measure of angles (Trigonometry with acute angles); the first video of the trigonometry strand. Pre-design pack: `../pre-design/maths-a11/math-a11-t01.md` (brief 243). Site lesson (read through the pack's quotations, read only): `trigonometry-and-measure-of-angles/lesson05.sa.html` (card 02 exact values; card 08 worked example sin² 30° + cos² 30° + tan 45°; the `orient` square of side 2; short answer tan 60° − tan 30°; all with their numbers). Route entry: `math-a11-t01` in `../../programme/maths-a11-route-inputs-4.json`. Visual system: maths studio kit; a painted square sandwich and pool rack (prefix `ma11-`), and a painted sea cliff and yacht for the handoff; every triangle, table and working row coded.

Owner rules applied: 2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (food and games: a sandwich and a pool rack), Australian spelling, no em dashes, "zero point" decimals, angles always spoken with "degrees", conversational narration.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Trigonometry and measure of angles, Trigonometry with acute angles), quoted from `../../programme/maths-a11-route-inputs-4.json`:

- `ci83df430f`: "Use Pythagoras’ theorem to find the exact sine, cosine and tangent ratios for angles of 30°, 45° and 60°"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5

**Boundary:** starts from e08's final frame exactly (a square of side 1 with its diagonal and one 45° angle marked; an equilateral triangle of side 2 with its height drawn and 30° and 60° marked; the calculator strip "sin 45° = 0.7071067811…" with digits running on; the small grey chip "e04: log₂ 100 ≈ 6.644, exact as log₂ 100"; chips "never ends: exact form?", "30°, 45°, 60°: exact values?", "Next: exact trig values", "?"). Recalls Year 10 SOH CAH TOA and Pythagoras in one sentence each, and w03 (rationalising a denominator) in a phrase. Teaches: the half-square has sides 1, 1, √2 and angles 45°, 45°, 90°; the half-equilateral triangle has sides 1, √3, 2 and angles 30°, 60°, 90°, with the shortest side opposite 30°; exact sin, cos and tan of 30°, 45° and 60° read from them, in rationalised form; that both triangles scale; exact-value expressions by substitution (site card 08, short answer) (`ci83df430f`). Stops at acute angles in degrees. Not taught: other quadrants (t04); radians (t08); sec, cosec and cot (t11); sin 30° = cos 60° as an identity (t13); sin² θ + cos² θ = 1 (t14).

## Decisions

- **Anchor: a square sandwich cut corner to corner, and a pool table's triangle rack cut down its middle (painted plates, live).** e08's coded frame already holds a square and an equilateral triangle; scene 1 sets each beside the object it is, so the shapes are things students have handled: the sandwich's cut is the diagonal, and the rack is an equilateral triangle whose centre line halves it. Food and games; the pack's anchors 1 and 2 combined (the pack's give way sign would need its printed words). No Year 11 or Year 12 design uses a sandwich or a pool rack (grep 17 Nov). The plates return as 220 px badges beside each triangle in scenes 2 and 3 and on the memory card.
- **Join (root ruling 3 on e01 to e08).** Scene 1 opens on e08's frame unchanged; the plates arrive during scene 1 beside the shapes, the only change, so the e08 join holds.
- **Simulations (standard item 3).**
  1. **Decimal settling** (scene 2): the calculator strip's running digits "0.7071067811…" slow and lock as the board writes √2/2; a `DrawnMark` links the strip to the surd, readout "√2/2 = 0.7071067811… ✓".
  2. **Splits** (`StudioTriangle` presets, scenes 2, 3): the square splits along its diagonal and one half lifts out; the rack's triangle splits down its height and one half lifts out; each side's length writes as Pythagoras runs.
  3. **Sine rising** (scene 5): a right triangle with hypotenuse fixed at 1 (`StudioTriangle` limit mode with `ParameterSlider`), its angle sweeping 0° to 90°; the opposite side (amber) grows and a live readout "sin θ = opposite ÷ 1" passes 0.5, 0.71 and 0.87, pausing briefly at 30°, 45° and 60° where the exact value writes beside it.
- **Colour roles (fixed for the trigonometry strand, t01 to t04).** The angle **blue** (the input); the opposite side **amber**; the adjacent side **violet**; the hypotenuse **ink**; exact ratio values **teal** (the outputs); answer green; mistake red, crossed slips only; construction lines dashed grey.
- **Large type, handwritten voice.** Current rows 52 px, supporting rows 32 px, task strips 44 px. Hand tags: "cut = diagonal", "equal sides: mirror line", "right angle halved", "√(1² + 1²)", "× √2/√2", "the calculator's number, exactly", "all sides 2", "base halved", "top angle halved", "180° − 30° − 60° = 90°", "√(2² − 1²)", "1 faces 30°", "opposite and adjacent swap", "both forms equal", "sin grows", "backwards", "(sin 30°)²", "√3 × √3 = 3", "scale keeps ratios", "same denominator".
- **Stage changes (standard item 2).** e08's frame with the two plates (1); the half-square (2); the half-rack (3); the 60° and 30° readings (4); the exact-value table and the sine sweep (5); g01 board, card 08 (6); g01 board, scaling and tan 60° − tan 30° (7); framed card (8); question cards (9 to 12); the cliff and yacht (13); key notes (14).
- **Worked examples (g01 layout).** 6: site card 08, sin² 30° + cos² 30° + tan 45° = 2; crossed "sin 900°". 7: site `orient` (square of side 2: diagonal 2√2 cm) and site short answer (tan 60° − tan 30° = 2√3/3). Exact values in scenes 2 and 4 are read on g01-style rows beside the triangle.
- **Memory aid.** Framed card: "sin 30°, 45°, 60°: √1/2, √2/2, √3/2. Cos runs the same list backwards." Second line: "tan 45° = 1."
- **Visual surprise.** The calculator's endless digits lock into √2/2: the decimal the video opened on is the exact value, written another way.
- **Site notes (pack section 8; `../site-corrections-maths-a11.md` S11-14 and minor items).** The site's "HSC marking guidelines almost always require rationalised denominators" is not used; scene 4 says rationalised form is the usual way to write an answer and the two forms are equal (S11-14). The site's sin 75° hook and "double-angle" note (Extension 1) and "every exact trig value you will ever need" are not used. Quadrant and radian parts of lesson05 move to t04 and t08.
- **Plain meanings at first use.** Hypotenuse ("the longest side, facing the right angle"); equilateral ("all three sides equal, so all three angles are sixty degrees"); exact value ("written with whole numbers and roots, not a rounded decimal"); rationalise ("multiply top and bottom by the root, so no root is left on the bottom", recalled from w03).
- **Attempts (pack questions).** A1: 4 sin 60° cos 30° − tan² 45° = 2; crossed "√3 − 1" (√3 × √3 taken as √3). A2: diagonal 8 cm, side = 8 cos 45° = 4√2 cm ≈ 5.66 cm; crossed "8√2".
- **Mistake scene:** none separate. Swapping sin 30° and sin 60° (5 crossed); sin² 30° read as sin(30²) (6 crossed); √3 × √3 slip (A1 crossed); multiplying by √2 instead of cos 45° (A2 crossed). The 1, √3, 2 labelling trap is handled by the tag "1 faces 30°" (3).
- **Cause chain taught, in order:** (1) a rounded decimal is never exact, so an exact value needs a triangle with exact sides (1); (2) the diagonal halves the square's right angle, so the half-square is 45°, 45°, 90°, and Pythagoras gives √2 (2); (3) an equilateral triangle's height halves its base and its top angle, so the half is 30°, 60°, 90°, and Pythagoras gives √3 (3); (4) reading opposite, adjacent and hypotenuse at each corner gives the values, and moving corners swaps opposite and adjacent (4); (5) as the angle grows, the opposite side grows, so sine increases from 30° to 60°, which orders the table (5); (6) scaling keeps angles and ratios, so the values work at any size (7).
- **Entry knowledge (route):** Year 10 Pythagoras and SOH CAH TOA; w03 (simplifying surds and rationalising, 1/√3 = √3/3); e08's final frame.
- **What later videos rely on.** t02a to t08 use these nine values without re-teaching; t04 and t08 copy them into every quadrant and into radians; t03 reuses "the half-equilateral triangle, sides one, root three and two" for 120°.
- **Handoff (to math-a11-t02a, "How do angles of elevation and depression find heights and distances?"; t02 was split into t02a and t02b on 17 Nov).** Scene 13: the sea cliff `ma11-sea-cliff-v1.png` with the yacht `ma11-yacht-side-v1.png` 40 m out from its foot; a dashed grey horizontal along the waterline from the yacht's bow waterline point to the cliff's foot, labelled "40 m" (ink), and a dashed sight line from the same waterline point to the clifftop with the blue angle "52°" (Revision 2, root's decision 4: both measure from water level); chips "not 30°, 45° or 60°", "cliff height h = ?", "Next: right-triangle problems" and "?". This is t02a's opening frame. (Departure from the t02 pack's ladder start: see the decisions file, departure 1.)
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Half-square: legs 1, 1, hypotenuse √2. Half-equilateral: 1, √3, 2 (height √(4 − 1)).
  (b) sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3 = √3/3; sin 45° = cos 45° = 1/√2 = √2/2, tan 45° = 1; sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3. Decimals 0.5, 0.7071, 0.8660; √3/3 ≈ 0.5774.
  (c) Card 08: 1/4 + 3/4 + 1 = 2. Short answer: √3 − √3/3 = 2√3/3. Square of side 2: diagonal 2√2 ≈ 2.83 cm.
  (d) A1: 4 × 3/4 − 1 = 2; slip value √3 − 1. A2: 8 × √2/2 = 4√2 ≈ 5.657; slip 8√2 ≈ 11.31.
  (e) Pronunciations: "root two over two"; "root three over three"; "sine squared thirty degrees"; "tangent squared forty-five degrees"; "two root three over three"; "four root two". The narration writes "sine", "cosine" and "tangent" in full throughout (decisions file, open question 3).
  (f) Windows: triangles drawn to scale, the half-square at 520 px per unit and the half-rack at 300 px per unit; the sine sweep triangle hypotenuse 600 px.

Main question: *How do two special triangles give exact values at 30, 45 and 60 degrees? Where does the exact form of sin 45° = 0.7071… come from?*
Entry knowledge (Year 10, w03, e08): Pythagoras; SOH CAH TOA; rationalising a denominator.
Stops after: exact sin, cos and tan of 30°, 45° and 60° from the two triangles, rationalised; exact-value expressions; scaling. No other quadrants, radians or identities.
Handoff: math-a11-t02a: "a yacht 40 m from a cliff sees the top at 52°, which neither triangle has: how high is the cliff?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): the angle blue; opposite amber; adjacent violet; hypotenuse ink; exact values teal; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · TRIGONOMETRY AND MEASURE OF ANGLES". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: digits that never end
> Here's the calculator from last time. Sine forty-five degrees is zero point seven zero seven one, and the digits keep running. A rounded decimal is never exact. Remember from Year 10, in a right-angled triangle, sine is the opposite side over the hypotenuse, the longest side. Cosine is the adjacent side over the hypotenuse, and tangent is opposite over adjacent. So an exact value needs a triangle with exact sides, and two everyday shapes give us those. A square sandwich, cut corner to **corner**. And the triangle rack from a pool table, cut down the **middle**. So how do two special triangles give exact values at thirty, forty-five and sixty **degrees**?

Visual: opens on e08's final frame exactly (square of side 1 with diagonal and one 45° mark; equilateral triangle of side 2 halved, 30° and 60° marked; calculator strip "sin 45° = 0.7071067811…" running; the small grey chip "e04: log₂ 100 ≈ 6.644, exact as log₂ 100"; chips "never ends: exact form?", "30°, 45°, 60°: exact values?", "Next: exact trig values", "?"). On the first sentence the grey e04 chip and the "Next" chips fade; the digits keep running. On "Remember from Year 10" a grey chip writes: "Year 10: sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj" (opp amber, adj violet, hyp ink). On "corner" the sandwich plate `ma11-sandwich-square-v1.png` (420 px) slides in under the square, its cut lined up with the diagonal; hand tag "cut = diagonal". On "middle" the pool rack plate `ma11-pool-rack-v1.png` (480 px) slides in under the triangle, its centre line lined up with the drawn height. On "degrees" heading "Exact values from two triangles", and the question chip "Exact sin 45°?" moves to the top right.

### 2. the half-square
> Start with the sandwich, one unit along each side. The cut runs along the diagonal. The two sides at that corner are equal, so the cut is a mirror line, and it splits the right angle into two equal halves. So each half has angles of forty-five, forty-five and ninety degrees. How long is the cut? By Pythagoras, it's the square root of one squared plus one squared, so root **two**. Now read sine forty-five degrees. The side opposite the angle is one, and the hypotenuse is root two, so it's one over root two. Multiply top and bottom by root two, and that's root two over two, which is zero point seven zero seven one, running on for **ever**. Cosine forty-five degrees is the same, adjacent one over root two. And tangent forty-five degrees is one over one, just **one**.

Visual: stage change: the square (520 px per unit) at the left with the sandwich as a 220 px badge above it; the calculator strip shrinks to the top right, still running. On "mirror line" the two halves flash as mirror images across the diagonal, hand tag "equal sides: mirror line". The square splits along its diagonal (`StudioTriangle` half-square preset) and the lower half lifts out to the centre; the 90° corner's arc halves, hand tag "right angle halved", both acute angles labelled "45°" (blue). Sides: "1" (amber, opposite the marked 45°), "1" (violet, adjacent), hypotenuse "?" (ink). On "two" the hypotenuse writes "√2" with hand tag "√(1² + 1²)". Rows at the right, 52 px: "sin 45° = 1/√2"; "= √2/2" (teal) with hand tag "× √2/√2". On "ever" the calculator strip's digits slow and lock, a `DrawnMark` arrow runs from the strip to "√2/2", readout "√2/2 = 0.7071067811… ✓", hand tag "the calculator's number, exactly". Rows: "cos 45° = 1/√2 = √2/2" (teal); on "one" "tan 45° = 1/1 = 1" (teal).

### 3. the half-rack
> Now the rack. It's an equilateral triangle, with all three sides equal, so all three angles are sixty degrees. Make each side two units, so that half of it is exactly one. Cut it straight down the middle, from the top corner to the middle of the base. The base splits into one and one, and the top angle splits into thirty and thirty. So each half has angles of thirty and sixty degrees, and since a triangle's angles add to a hundred and eighty, the third angle, at the base, is **ninety** degrees. Each half has a hypotenuse of two and a short side of one. By Pythagoras again, two squared minus one squared is three, so the height is root **three**. The sides are one, root three and two. And the shortest side, one, sits opposite the smallest angle, thirty **degrees**.

Visual: clear change: the equilateral triangle (300 px per unit) at the left with the rack as a 220 px badge above it; each side labelled "2", hand tag "all sides 2", each angle "60°". The height draws down the middle (dashed grey, then solid); hand tags "base halved" at the base ("1" and "1") and "top angle halved" ("30°" and "30°", blue). On "ninety" a right-angle mark draws at the foot of the height, hand tag "180° − 30° − 60° = 90°". The right half lifts out (`StudioTriangle` half-equilateral preset): hypotenuse "2" (ink), base "1", height "?". Row, 52 px: "h² = 2² − 1² = 3"; on "three" the height writes "√3", hand tag "√(2² − 1²)". Row: "sides 1, √3, 2". On "degrees" the "1" and the "30°" ring together, joined by a hand arrow, hand tag "1 faces 30°".

### 4. reading sixty and thirty degrees
> Stand at the sixty degree corner first. The opposite side is root three, the adjacent side is one, and the hypotenuse is two. So sine sixty degrees is root three over two, cosine sixty degrees is a half, and tangent sixty degrees is root three over one, just root **three**. Now move to the thirty degree corner. It's the same triangle, but the opposite and adjacent sides swap over. Sine thirty degrees is one over two, a half. Cosine thirty degrees is root three over two. And tangent thirty degrees is one over root three. Rationalise it, multiplying top and bottom by root three, and it's root three over **three**. Both forms are equal, and root three over three is the usual way to write an answer.

Visual: clear change: the half-rack large at the left (1, √3, 2). The 60° corner rings blue; side colours set from it: "√3" amber (opposite), "1" violet (adjacent), "2" ink. Rows at the right, 52 px: "sin 60° = √3/2", "cos 60° = 1/2", on "three" (first) "tan 60° = √3/1 = √3" (all teal). On "move to the thirty degree corner" the blue ring moves to 30° and the side colours swap in place ("1" amber, "√3" violet), hand tag "opposite and adjacent swap". Earlier rows dim to 32 px. Rows: "sin 30° = 1/2", "cos 30° = √3/2", "tan 30° = 1/√3". On "three" (last) "= √3/3" (teal) writes beside it with `StudioCancellation` showing "× √3/√3"; hand tag "both forms equal".

### 5. the table, and why sine grows
> Here's the whole table. Keep the hypotenuse at one: as the angle climbs, the opposite side grows, so sine **grows**. Sine thirty, forty-five and sixty degrees is a half, root two over two, and root three over two. That's about zero point five, zero point seven one, and zero point eight seven. Cosine runs the same list **backwards**. Tangent goes root three over three, one, then root three. So sine sixty degrees can't be a half, because it's bigger than sine thirty degrees. Swapping them is the **slip**.

Visual: stage change: the exact-value table (3 × 3, 48 px, teal values) at the right, filling cell by cell from scenes 2 and 4 as the narration names each row. At the left, the sine sweep (`StudioTriangle` limit mode, hypotenuse fixed at 1, 600 px): on "grows" the angle (blue) sweeps from 0° to 90°, the opposite side (amber) rising, live readout "sin θ = opposite ÷ 1 = …", pausing at 30°, 45° and 60° where "1/2", "√2/2" and "√3/2" flash beside the readout; hand tag "sin grows". Grey row under the table: "≈ 0.5, 0.71, 0.87". On "backwards" a violet arrow runs right to left along the cos row, hand tag "backwards". On "slip" a red slip "sin 60° = 1/2" writes and is crossed, caption "1/2 is sin 30°".

### 6. worked example: sine squared thirty degrees
> Now use the table. Find the exact value of sine squared thirty degrees, plus cosine squared thirty degrees, plus tangent forty-five degrees. Sine squared thirty degrees means find sine thirty degrees, then square it. So it's a half, squared, which is a **quarter**. Cosine squared thirty degrees is root three over two, squared. Root three times root three is three, and two times two is four, so it's three **quarters**. And tangent forty-five degrees is one. A quarter plus three quarters is one, and one more makes **two**. Squaring the angle instead, sine of nine hundred degrees, is the **slip**.

Visual: clear change to the full-width g01 board (`WorkingBoard`). Task strip, 44 px: "Find the exact value of sin² 30° + cos² 30° + tan 45°." Givens card (left, 40 px): "sin 30° = 1/2", "cos 30° = √3/2", "tan 45° = 1" (teal). Rows, current 52 px, earlier 32 px and dimmed: "sin² 30° = (sin 30°)²" with hand tag "(sin 30°)²"; on "quarter" "(1/2)² = 1/4"; "cos² 30° = (√3/2)²"; on "quarters" "= 3/4" with hand tag "√3 × √3 = 3"; "tan 45° = 1"; on "two" "1/4 + 3/4 + 1 = 2" (green frame). On "slip" a red slip "sin (30²)° = sin 900°" writes and is crossed, caption "square the value, not the angle".

### 7. any size, and a difference of tangents
> The triangles work at any size. Scaling multiplies every side by the same number, so it cancels in each ratio. A square of side two centimetres has a diagonal of two root two centimetres, about two point eight three centimetres. And in any half-square, cosine forty-five degrees is the side over the diagonal, adjacent over hypotenuse. So the side is the diagonal times cosine forty-five **degrees**. Check it here: two root two, times root two over two, is two **centimetres**. Here's one more. Show that tangent sixty degrees minus tangent thirty degrees is two root three over three. That's root three, minus root three over three. Give them the same denominator, so root three becomes three root three over three. Then the difference is two root three over **three**.

Visual: the board clears row by row (stage continues). Left: a half-square of side 2 cm drawn over the scene 2 triangle as a ghost, the two scaling together; hand tag "scale keeps ratios"; on "Scaling multiplies" a teal row beside it "2 ÷ 2√2 = 1 ÷ √2". Labels "2", "2", "2√2 ≈ 2.83 cm" (green frame on the diagonal). On "side over the diagonal" a row, 44 px: "cos 45° = side ÷ diagonal" (side violet, diagonal ink). On "degrees" the row "side = diagonal × cos 45°" (cos 45° teal) writes under it. On "centimetres" (last) a row "2√2 × √2/2 = 2 ✓" (green frame), with a hand arrow to the drawn side "2". Task strip, 44 px: "Show that tan 60° − tan 30° = 2√3/3." Rows, 52 px: "√3 − √3/3"; "= 3√3/3 − √3/3" with hand tag "same denominator"; on "three" "= 2√3/3 ✓" (green frame).

### 8. memory aid
> Here's the summary. Sine of thirty, forty-five and sixty degrees is root one, root two and root three, all over two. Cosine is the same list, **backwards**. And tangent forty-five degrees is one.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the two half-triangles small with their sides (1, 1, √2 and 1, √3, 2) and the sandwich and rack badges. Main line, hand font 56 px: "sin 30°, 45°, 60°: √1/2, √2/2, √3/2. Cos runs the same list backwards." On "backwards" the key line, 40 px: "tan 45° = 1." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Without a calculator, find the exact value of four times sine sixty degrees times cosine thirty degrees, minus tangent squared forty-five degrees. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Without a calculator, find the exact value of 4 sin 60° cos 30° − tan² 45°." The full question stays on screen. Picture slot: the two half-triangles with their sides only (no values). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Sine sixty degrees and cosine thirty degrees are both root three over two. Their product is three quarters, because root three times root three is **three**. Four times three quarters is three, and tangent squared forty-five degrees is one. So the answer is three minus one, **two**. Taking root three times root three as root three is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "sin 60° = cos 30° = √3/2"; on "three" "√3/2 × √3/2 = 3/4"; "4 × 3/4 = 3"; "tan² 45° = 1² = 1"; on "two" "3 − 1 = 2" (green frame). On "slip" a red slip "√3 × √3 = √3 ⇒ √3 − 1" writes and is crossed, caption "√3 × √3 = 3". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. The diagonal of a square is eight centimetres. Using an exact value of cosine forty-five degrees, find the exact side length of the square. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The diagonal of a square is 8 cm. Using an exact value of cos 45°, find the exact side length of the square." Picture: a square with its diagonal labelled "8 cm" and one 45° angle marked; sides unlabelled. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> The diagonal is the hypotenuse of a half-square, and the side is adjacent to forty-five degrees. So the side is eight times cosine forty-five degrees, eight times root two over two. That's four root two, about five point six six **centimetres**. Multiplying by root two instead, to get eight root two, is the **slip**. A side can't be longer than the diagonal.

Visual: the card shrinks to the top. The picture's lower half-square lights; the side violet, the diagonal ink. Rows, 44 px: "side = 8 cos 45°"; "= 8 × √2/2"; on "centimetres" "= 4√2 cm ≈ 5.66 cm" (green frame). On "slip" a red slip "8√2" writes and is crossed, caption "longer than the diagonal?". Hold about 1 s.

### 13. handoff
> So two triangles give exact values at three angles. But most real angles aren't thirty, forty-five or sixty degrees. Here's a yacht, forty metres out from the foot of a sea cliff. From the water, the clifftop sits fifty-two degrees above the horizontal. Neither special triangle has a fifty-two degree angle. So how high is the cliff, and how do we set up problems like this? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the sea cliff `ma11-sea-cliff-v1.png` (1,300 px wide, right side) with the yacht `ma11-yacht-side-v1.png` (300 px) on the water at the left. On "forty metres" a dashed grey horizontal draws along the waterline from the yacht's bow waterline point to the cliff's foot, with the ink label "40 m" beside it (positions from the sidecars). On "fifty-two degrees" a dashed sight line draws from the same bow waterline point to the clifftop, with the blue angle arc "52°" between the waterline and the sight line. The sight line and the 40 m start at the same point at water level, so the triangle's corners are the yacht at the water, the cliff's foot and the clifftop; there is no deck-level line. On "Neither" chip "not 30°, 45° or 60°". On "how high" a dashed vertical up the cliff face with chip "cliff height h = ?". On "next" chips "Next: right-triangle problems" and "?". Hold about 2 s. This is t02a's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Half-square: sides 1, 1, √2; angles 45°, 45°, 90°.
- Half-equilateral: sides 1, √3, 2; the side 1 faces 30°.
- sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2 (cos: the same, backwards).
- tan 30° = √3/3, tan 45° = 1, tan 60° = √3.
- sin² 30° means (sin 30°)².

Memory aid (framed card, right side, as in scene 8): *sin 30°, 45°, 60°: √1/2, √2/2, √3/2. Cos runs the same list backwards.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and t02a's opening frame.

## Teaching checks

- **Does it explain causes?** Why exact values need a triangle: a decimal is rounded (1). Why 45°: the two sides at the corner are equal, so the diagonal is a mirror line and halves the right angle (2). Why 30° and 60°: an equilateral triangle's height halves the top angle, and the angle sum gives the right angle at the base (3). Why √2 and √3: Pythagoras (2, 3). Why the sine list increases: the opposite side grows as the angle grows (5). Why the values work at any size: scaling multiplies every side by the same number, which cancels in each ratio (7). Why the side is the diagonal times cos 45°: cos 45° is side over diagonal, rearranged (7).
- **Misconceptions addressed:** swapping sin 30° and sin 60° (5 crossed); the 1, √3, 2 labels in the wrong places (3 tag); sin² 30° as sin 900° (6 crossed); √3 × √3 = √3 (A1 crossed); multiplying by √2 instead of cos 45° (A2 crossed).
- **Visual standard, item by item:** 1 the sandwich and rack in scene 1 (about 30 s in, after e08's coded opening, which root ruling 3 requires), returning as badges in 2, 3 and 8; 2 a new stage every 30 to 55 s; 3 the decimal settling, the splits, the sine sweep; 4 fixed roles (angle blue, opposite amber, adjacent violet, values teal); 5 large type; 6 hand tags; 7 g01 boards in 6 and 7, g01-style rows in 2 and 4; 8 framed card and five bullets; 9 the running decimal locking into √2/2.
- **One idea at a time:** the need (1), the half-square (2), the half-rack (3), reading values (4), the table's order (5), using values (6, 7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 25 s and 26 s.
- **Avoided double teaching:** SOH CAH TOA and Pythagoras (Year 10) and rationalising (w03) are recalled in a sentence or a grey chip.
- **Syllabus coverage:** `ci83df430f` (2 to 7, A1, A2; key notes 1 to 5).
- **Out of scope by design:** other quadrants (t04); radians (t08); reciprocal ratios (t11); identities (t13, t14).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Without a calculator, find the exact value of 4 sin 60° cos 30° − tan² 45°."
Model answer: sin 60° = cos 30° = √3/2, so 4 × (√3/2)(√3/2) = 4 × 3/4 = 3; tan² 45° = 1; answer 3 − 1 = 2. Classic mistake (crossed): "√3 − 1".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "The diagonal of a square is 8 cm. Using an exact value of cos 45°, find the exact side length of the square."
Model answer: each half of the square is a 45°-45°-90° triangle with hypotenuse 8; side = 8 cos 45° = 8 × √2/2 = 4√2 cm (about 5.66 cm). Classic mistake (crossed): "8√2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Calculator | sin 45° = 0.7071067811… | 1, 2 |
| Half-square | 1, 1, √2; sin 45° = cos 45° = 1/√2 = √2/2; tan 45° = 1 | 2 |
| Half-equilateral | sides 2 halved: 1, √3, 2; h² = 4 − 1 = 3 | 3 |
| 60° and 30° | sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3; sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3 = √3/3 | 4, 5 |
| Decimals | 0.5, 0.71, 0.87 | 5 |
| Card 08 | 1/4 + 3/4 + 1 = 2; slip sin 900° | 6 |
| Scaling | square of side 2 cm: diagonal 2√2 ≈ 2.83 cm; 2 ÷ 2√2 = 1 ÷ √2; cos 45° = side ÷ diagonal; 2√2 × √2/2 = 2 | 7 |
| Angle sum | 180° − 30° − 60° = 90° | 3 |
| Short answer | √3 − √3/3 = 3√3/3 − √3/3 = 2√3/3 | 7 |
| A1 | 4 × 3/4 − 1 = 2; slip √3 − 1 | 9, 10 |
| A2 | 8 × √2/2 = 4√2 ≈ 5.66 cm; slip 8√2 | 11, 12 |
| Handoff | 40 m, 52° (no height stated) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (17 Nov 2026, scratchpad `t01t08/verify.py`); Revision 2's new and changed values rechecked with SymPy (`work/brief-resolve-t/verify.py`); Codex to re-check.

- sin, cos, tan of 30°, 45°, 60°: 1/2, √3/2, √3/3; √2/2, √2/2, 1; √3/2, 1/2, √3.
- sin 45° = 0.707106781187; √3/2 = 0.866025; √3/3 = 0.577350.
- √(1² + 1²) = √2; √(2² − 1²) = √3.
- sin² 30° + cos² 30° + tan 45° = 2.
- 2√2 = 2.828 (≈ 2.83); 2/(2√2) = 1/√2; 2√2 × √2/2 = 2 (Revision 2).
- 180 − 30 − 60 = 90 (Revision 2).
- tan 60° − tan 30° = 2√3/3.
- 4 sin 60° cos 30° − tan² 45° = 2; slip value √3 − 1.
- 8 cos 45° = 4√2 = 5.657 (≈ 5.66); slip 8√2 = 11.31.

## Memory aid check

- **"sin 30°, 45°, 60°: √1/2, √2/2, √3/2. Cos runs the same list backwards."** A standard pattern, phrased here. Meaning, as said in scene 8: the sines of 30°, 45° and 60° are √1/2 (= 1/2), √2/2 and √3/2, and the cosines of the same angles are √3/2, √2/2, √1/2. Assumptions checked: acute angles 30°, 45°, 60° only, in degrees (t04 and t08 extend by related angles); √1 is written to show the pattern and equals 1. It helps a new case: cos 60° is the third entry of the backwards list, √1/2 = 1/2, without redrawing the triangle; and tan follows as sin over cos for these three (not taught here). Introduced after scenes 2 to 7.
- **Considered, not used:** the "hand trick" (fingers held up; it shows hands and depends on a demonstration); "SOH CAH TOA" as the aid (Year 10's, already known).

## Narration length estimate

Counted by script (narration blockquotes inside each numbered scene, bold markers removed; `work/brief-resolve-t/count.py`, which reproduces e08's 5,632 and c10's 5,915): 6,402 characters in Revision 2 (Revision 1: 6,145). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 20 s of settling (the splits, the decimal settling, the sine sweep) and the 45 s notes scene: about 567 s. Characters per scene (1 to 14): 650, 762, 761, 696, 496, 585, 759, 191, 179, 337, 171, 352, 388, 75. Speech before the notes is about 476 s, under the 570 s cap, and the whole video with holds is about 567 s, also under it. Feedback speech: about 25 s and 26 s. Measure on the Year 11 voice; if the take runs over 570 s, take the reserve trims below.

Reserve trims if the voiced take runs long: scene 2's "The two sides at that corner are equal, so the cut is a mirror line, and" (keep the tag); scene 13's ", and how do we set up problems like this" (the frame is unchanged). Revision 2 took Revision 1's scene 5 trim ("To check it, picture ..." became "Keep the hypotenuse at one:") and shortened scene 7's second sentence and feedback 1's last sentence (the crossed row still shows "√3 − 1").

## Scene list and build ids

Lesson key `m-a11t01` (route math-a11-t01). Explainer folder `src/explainer/lessons/math-a11-t01`; build inputs in `docs/production/claude-pm/lessons/math-a11-t01/` (at voicing).

In order (14 scene headings): hook-never-ending-digits, half-square, half-rack, reading-60-and-30, table-and-sine-sweep, example-card-08, scaling-and-tangents, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds; Revision 1 times, not re-timed for Revision 2's additions; frames come from the recording's word timings):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | e08's frame; the sandwich and the rack |
| 45 to 100 s | 2 | The half-square; the decimal settling |
| 100 to 145 s | 3 | The half-rack |
| 145 to 195 s | 4 | Reading 60° and 30° |
| 195 to 240 s | 5 | The table and the sine sweep |
| 240 to 285 s | 6 | g01 board: card 08 |
| 285 to 330 s | 7 | g01 board: scaling; tan 60° − tan 30° |
| 330 to 345 s | 8 | Framed memory card |
| 345 to 440 s | 9 to 12 | Question cards and countdowns, then feedback |
| 440 to 470 s | 13 | The cliff and the yacht |
| 470 to 515 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e08's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change; 3 to 4 clear change (same triangle, larger); 4 to 5 stage change; 5 to 6 clear change to the board; 6 to 7 board row clear; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-t01-learning-review.md`, `science_check` = `checks/m-a11-t01-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets/maths`, read only, file list): no sandwich, pool rack, cliff or yacht plate exists in any course.

Need (painted, new; see the Codex asset brief): `ma11-sandwich-square-v1.png`, `ma11-pool-rack-v1.png` (this video); `ma11-sea-cliff-v1.png`, `ma11-yacht-side-v1.png` (this video's handoff and t02a's anchor; must be painted before this build).

Coded: the square and triangle splits, every side label, Pythagoras rows, the calculator strip, the exact-value table, the sine sweep, working boards, question cards, the countdown, hand tags, the framed card and key notes, and the handoff's lines and labels.

### Studio kit use and additions

Uses: `StudioTriangle` (half-square and half-equilateral presets; limit mode), `ParameterSlider`, `LiveReadoutBoard`, `WorkingBoard`, `TaskStrip`, `GivensCard`, `AlignedAlgebra`, `StudioCancellation`, `DrawnMark`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (from `../checks/maths-a11-kit-needs.md`, trigonometry section):
1. **Surd formatter** (first use): exact values with roots as built-up fractions (√2/2, √3/3, 2√3/3, 4√2). Check: every surd in the table renders at 48 px with the root bar covering its radicand.
2. **`StudioTriangle` presets and limit mode** (first use): the half-square and half-equilateral splits from e08's shapes, side colours that follow the focus angle, and a fixed-hypotenuse sweep with a readout. Check: at 30°, 45° and 60° the readout equals 0.5000, 0.7071 and 0.8660.
3. **Running-digits strip that locks** (small): the calculator strip's digits slow and stop on a cue, with a link mark to a surd.

## Codex asset brief (Maths A11 T01, a square sandwich and a pool rack; a sea cliff and a yacht for the handoff, also t02a's anchor)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-t01.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the t01 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-sandwich-square-v1.png` (1400 × 1400 px): a square sandwich of white sandwich bread with a thin visible filling (cheese and lettuce), seen from directly above, cut corner to corner into two triangles that sit with a small even gap (about 3 per cent of the side) along the diagonal. The outline is a true square: the four outer corners square to within 1 per cent, and the cut runs exactly corner to corner.
2. `ma11-pool-rack-v1.png` (1600 × 1450 px): an empty timber triangle rack for pool balls, seen from directly above, a true equilateral triangle (inner edges equal within 1 per cent), with no balls inside and no markings.
3. `ma11-sea-cliff-v1.png` (2200 × 1400 px): a vertical sandstone sea cliff seen side-on from the sea, with a flat grassy top, a sheer face, and a strip of calm blue sea along the bottom running out to the left; the left 55 per cent is open sea and sky (code draws lines there). No buildings, rails or lighthouse.
4. `ma11-yacht-side-v1.png` (900 × 1000 px): a small white sailing yacht seen side-on, bow pointing to the right (towards the cliff, which sits to its right on screen), sails up, sitting level on its waterline, no numbers on the sail or hull.

Sidecar JSON: for the cliff (`ma11-sea-cliff-v1.json`), the pixel points of the cliff's foot at the waterline and of the clifftop edge directly above it, and the waterline's y; for the yacht (`ma11-yacht-side-v1.json`), the pixel point where the bow meets the waterline (the start of both the 40 m line and the sight line; Revision 2, root's decision 4) and the waterline's y. The yacht's waterline and the cliff's waterline must be placed at the same screen height; for the sandwich, the four outer corners; for the rack, the three inner corners. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-t01-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm both triangles come from Pythagoras on screen (√(1² + 1²) and √(2² − 1²)), and that the side 1 is opposite 30°.
4. Confirm no marking claim about rationalised denominators (S11-14), no quadrant, radian or identity work, and no compound-angle result.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, every spoken angle carries "degrees", the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on e08's final frame.

## YouTube metadata (draft)

Title: Exact Trig Values from Two Special Triangles | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson05.sa.html

A calculator says sin 45° = 0.7071…, and the digits never end. Where does an exact value come from? Cut a square sandwich corner to corner and a pool rack down the middle, and Pythagoras gives two special triangles: 1, 1, √2 and 1, √3, 2. Read off exact sin, cos and tan of 30°, 45° and 60°, see why the sine values increase, rationalise 1/√3, and evaluate exact-value expressions. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Trigonometry and measure of angles.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Use Pythagoras’ theorem to find the exact sine, cosine and tangent ratios for angles of 30°, 45° and 60°"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5

Builds on: Log graphs as reflections; Year 10 trigonometry. Next: Angles of elevation and depression.

#Year11Maths #MathsAdvanced #ExactValues #HSCScience

## Open decisions

- **1. Two anchors (root).** Closed by ruling 15 (accepted).
- **2. Reading "sine" in full (root; decisions file, open question 3).** Closed: the learning review found no objection; the narration keeps "sine", "cosine" and "tangent" in full.

## Review notes

- Revision 1 had its independent student learning review on 17 Nov (`../checks/m-a11-t01-learning-review.md`): should-fix, 0 blockers, 2 should fix, 3 optional. Revision 2 resolves all five findings (see "Revision 2" above) and root's decisions 4 and 5. Next: Codex maths check and error check on Revision 2, then voicing on the Google voice and a build to grade A; the exact voiced preview needs the repeat learning check before full export.
