# Maths A11 T09: How do radians simplify arc length, sector area and segment area? l = rθ in one step, the proof of A = ½r²θ, working backwards, a segment as sector minus triangle, and major arcs, sectors and segments (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Opens on t08's final frame as described in `../checks/root-decisions-maths-a11-t01-t08.md`. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,731 characters by script (see "Narration length estimate"), 13 scene headings, about 522 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: sixty-sixth video of Year 11 Mathematics Advanced (2024), outline order 66, Trigonometry and measure of angles (Radians). Pre-design pack: `../pre-design/maths-a11/math-a11-t09.md` (brief 243). Site lessons (read through the pack's quotations, read only): `trigonometry-and-measure-of-angles/lesson02.sa.html` (card 05, l = rθ and A = ½r²θ by the fraction of the circle; card 06, the segment as sector minus triangle; `we-1`, r = 8, θ = π/4; `we-3`, area 27π, θ = π/2, r = 6√3; all with their numbers; trap 01 with its correction) and `trigonometric-identities-and-equations/lesson10.sa.html` (the arc, sector and segment short answer, used as a check only). Route entry: `math-a11-t09` in `../../programme/maths-a11-route-inputs-4.json`. Visual system: maths studio kit; the painted pizza from t08 (w09's plate), a new painted drop-leaf table, and the phone and tuning fork for the handoff; every arc, sector, triangle, segment and row coded.

Owner rules applied: as e08 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchors (cooking: t08's pizza; home: a round drop-leaf table), Australian spelling, no em dashes, "zero point" decimals, conversational narration, angles always spoken with "degrees" or "radians").

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Trigonometry and measure of angles, Radians), quoted from `../../programme/maths-a11-route-inputs-4.json`:

- `cib55a24b7`: "Establish and use the formula l = rθ for the length l of arc subtending an angle θ in radians at the centre of a circle of radius r"
- `ci56cda609`: "Prove and use the formula A = 1/2 r^2θ for the area of a sector with angle θ in radians at the centre of a circle of radius r"
- `cibf527c60`: "Solve problems involving arc lengths and areas of major and minor sectors and segments"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5

**Boundary:** starts from t08's final frame exactly (header "MATHEMATICS ADVANCED · TRIGONOMETRY AND MEASURE OF ANGLES"; the pizza `ma11-pizza-top-v1.png` about 760 px across, centred at about (560, 560), with two coded radii (ink, 4 px) at 0° and 45° outlining one slice, its crust arc teal (8 px), the blue angle "45° = π/4" (44 px), "r = 20 cm" (ink, 40 px) on the lower radius; the right column from x ≈ 1,080 px, 44 px: grey chip "whole crust: 2π × 20 = 40π cm", teal chip "slice: ⅛ of a turn", teal chip with green frame "slice crust: ⅛ × 40π = 5π cm ≈ 15.7 cm", the amber hand tag "one step instead of two?", chips "Next: arc length and sector area" and "?"; no l = rθ and no area formula on screen). Recalls t08 (θ in radians = arc length ÷ radius; arc ÷ circumference = sector ÷ circle = θ ÷ one turn; the slice's 50π cm²), t05 (area of a triangle = ½ab sin C) and Stage 5 (2πr and πr²) in a phrase or grey chip each. Teaches: l = rθ from θ = l/r, with the perimeter of a sector (two radii plus the arc) and the degree slip (`cib55a24b7`); the proof of A = ½r²θ as θ/2π of πr² (`ci56cda609`); finding r from an area (site `we-3`); a segment as sector minus triangle, ½r²(θ − sin θ), with θ in radians and the calculator in radian mode; major segments and arcs as the rest of the circle (`cibf527c60`). Stops at arcs, sectors and segments. Not taught: graphs of sin, cos and tan (t10).

## Decisions

- **Anchors: t08's pizza for the arc and the sector (painted plate, reused, live), then a round drop-leaf table for the segment (painted plate, new, live).** The pizza is t08's handoff, so the video starts from a slice students have just met: its crust 5π cm in one step (20 × π/4) and its area 50π cm² from ½r²θ, matching t08's fraction answer. For the segment, a round table whose drop leaf folds down along a straight hinge: the leaf is exactly a minor segment (the region between the hinge chord and the arc), and the fixed top is the major segment, with its curved edge the major arc. Home; the pack's anchor 3 (the cheesecake, anchor 2, sits too close to the pizza). Radius 50 cm, hinge subtending 2π/3 (120°) at the centre (original numbers). No Year 12 or a11 design uses a drop-leaf table (grep 17 Nov: none; "table" hits are data tables).
- **Simulations (standard item 3).**
  1. **Arc straightening** (`RadiusWrap` arc mode, t08's part; scene 2): the slice's teal crust peels off the pizza and straightens beside the radius, laid out as radius-lengths: for π/4 it is a little over three quarters of one radius (0.785 r), readout "l = rθ = 20 × π/4 = 5π ≈ 15.7 cm".
  2. **Sector as a fraction** (`SpinnerSectors`; scene 3): a sector's angle sweeps from 0 to 2π on the pizza while a bar shows "θ/2π" of the disc filling; the area readout "πr² × θ/2π" updates and, on the cue, the π and 2π cancel on screen to "½r²θ".
  3. **Segment lift-out** (`SectorSegment`, new; scenes 5, 6): on the table plate, the sector (pale teal) fills from the centre to the leaf's arc; the isosceles triangle (two radii, angle θ, grey) lifts out of it, leaving the segment (amber) shaded exactly over the painted leaf; a toggle swaps to the major sector and major segment (violet), with the triangle added back.
- **Colour roles (fixed for this video, continuing t08's).** The angle θ (degrees and radians) **blue**; the radius ink; arc length **teal** (t08); sector area pale teal fill with teal values; the triangle grey; the segment **amber**; major parts **violet**; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As e08 (current lines and readouts 52 px, strips 44 px, nothing below 26 px, all text above y = 950). Hand tags: "one step", "θ = l/r", "θ radius-lengths", "radians only", "about 57.3 × too long", "two radii + arc", "θ/2π of the circle", "π cancels", "proof", "same 50π", "runs backwards", "sector − triangle", "½ab sin C", "radian mode", "the rest of the circle", "2π − θ", "+ triangle".
- **Stage changes (standard item 2).** t08's frame and the one-step crust (1); the arc straightening and the g01 board (2); the sector sweep and the proof (3); g01 board, finding r (4); the drop-leaf table with the segment lift-out (5); the major toggle on the table (6); framed card (7); question cards (8 to 11); the phone, fork and circle for t10 (12); key notes (13).
- **Worked examples (g01 layout).** 2: site `we-1` (r = 8 cm, θ = π/4: l = 2π cm); the pizza slice's perimeter 40 + 5π cm; the degree slip on r = 10 cm, 60° (pack original: 600 against 10π/3 ≈ 10.47 cm). 3: the pizza slice's area ½ × 400 × π/4 = 50π cm². 4: site `we-3` (A = 27π cm², θ = π/2: r = 6√3 ≈ 10.4 cm). 5: the table's leaf (r = 50 cm, θ = 2π/3): 2500π/3 − 625√3 ≈ 1,535 cm² (original). 6: the fixed top ≈ 6,318 cm² and its major arc 200π/3 ≈ 209 cm (original). Crossed slips: "l = 10 × 60 = 600" (2), "A = r²θ" (3), "the leaf's area for the fixed top" (6), "arc = 50" (A1), "major = 24π − 9√3" (A2).
- **Memory aid.** Framed card: "In radians: arc rθ, sector ½r²θ. Segment = sector − triangle = ½r²(θ − sin θ)." Second line: "Major = the rest of the circle."
- **Visual surprise.** The crust peels off and lies along the radius as exactly θ radius-lengths; in scene 5 the triangle lifts out of the sector and what is left lands exactly on the painted leaf.
- **Site notes (pack section 8 and `../site-corrections-maths-a11.md` section 7).** Trap 01's "wrong by a factor of π/180" is corrected: a degree substitution makes the arc 180/π ≈ 57.3 times too long (scene 2 says "about fifty-seven times too long"). Card 05's satellite-dish paragraph is not used. The half-mark awards ([1.5], [0.5]) are not used. Drill 4's θ = 2π (a full circle) is not used. The major example is original (`cibf527c60` names major segments; the site works none).
- **Plain meanings at first use.** Arc (recalled from t08: "part of the circle's edge"); sector ("a slice of the circle, bounded by two radii and an arc"); perimeter ("the whole way round its edge"); chord ("a straight line joining two points on the circle"); segment ("the region between a chord and its arc"); minor and major ("the smaller and the larger of the two parts"); subtend is not voiced: the narration says "cuts off an angle of ... at the centre".
- **Attempts (pack questions).** A1: r = 15 cm, perimeter 50 cm: θ = 4/3 radians, area 150 cm²; crossed "arc = 50". A2: r = 6 cm, θ = 2π/3: minor segment 12π − 9√3 ≈ 22.1 cm², major segment 24π + 9√3 ≈ 91.0 cm²; crossed "major = 24π − 9√3".
- **Mistake scene:** none separate. Degrees in l = rθ (2 crossed); A = r²θ (3 crossed); sin θ in degree mode (5 tag "radian mode"); leaving out the two radii from a perimeter (A1 crossed); the minor segment given for the major (6 crossed); subtracting the triangle from the major sector (A2 crossed).
- **Cause chain taught, in order:** (1) a radian is arc over radius, so arc = radius × angle, in one step (1, 2); (2) the formula needs the angle as a ratio of lengths, so degrees give nonsense (2); (3) a sector is the fraction θ/2π of the circle, so its area is πr² × θ/2π = ½r²θ (3); (4) the same equations can be solved for r or θ (4, A1); (5) a segment is what is left of a sector when its triangle is removed, and the triangle is ½r² sin θ by t05's rule (5); (6) a major part is the rest of the circle; the major segment is the major sector plus the triangle (6, A2).
- **Entry knowledge (route):** t08 (θ in radians = arc length/radius; arc/circumference = sector/area = θ/2π); t05 (area of a triangle = ½ab sin C); Stage 5 (circumference 2πr and area πr²).
- **What later videos rely on.** t10 needs radians as an axis (the handoff). Year 12 integration (area between curves) and rates with circles recall l = rθ and A = ½r²θ in a chip each.
- **Handoff (to math-a11-t10, "What do the graphs of sin, cos and tan show about their behaviour?").** Scene 12, as the t10 pack's start with the anchor added: the phone plate `ma12-phone-v1.png` (520 px, left) with a coded tuner screen showing a teal pure-tone wave and "pure tone", the tuning fork plate `ma11-tuning-fork-v1.png` (300 px) beside it; the coded circle of radius 1 at the centre with a point turning on it and its teal drop line "height = sin θ"; empty axes at the right labelled "angle" and "height"; chips "plot the height against the angle?", "Next: the graphs of sin, cos and tan" and "?". This is t10's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Pizza: r = 20 cm, θ = π/4: l = 5π ≈ 15.71 cm; perimeter 40 + 5π ≈ 55.71 cm; A = ½ × 400 × π/4 = 50π ≈ 157.1 cm².
  (b) `we-1`: 8 × π/4 = 2π ≈ 6.28 cm. Degree slip: 10 × 60 = 600 against 10 × π/3 = 10.47 cm; ratio 180/π = 57.30.
  (c) `we-3`: 27π = ½r²(π/2) = πr²/4, r² = 108, r = 6√3 ≈ 10.39 cm.
  (d) Table: r = 50 cm, θ = 2π/3: sector 2500π/3 ≈ 2,618.0 cm²; triangle ½ × 2500 × sin(2π/3) = 625√3 ≈ 1,082.5 cm²; leaf (minor segment) 2500π/3 − 625√3 ≈ 1,535.5 cm²; circle 2500π ≈ 7,854.0 cm²; fixed top (major segment) 5000π/3 + 625√3 ≈ 6,318.5 cm²; major arc 50 × 4π/3 = 200π/3 ≈ 209.4 cm; minor arc 100π/3 ≈ 104.7 cm (not stated).
  (e) A1: arc = 50 − 30 = 20; θ = 20/15 = 4/3; A = ½ × 225 × 4/3 = 150. A2: minor 18(2π/3 − √3/2) = 12π − 9√3 ≈ 22.11; major 36π − (12π − 9√3) = 24π + 9√3 ≈ 90.99.
  (f) The table is idealised as a circle with a straight hinge; real drop leaves vary (not said).
  (g) Pronunciations: "a half r squared theta"; "r squared theta"; "two pi over three radians"; "six root three"; "two thousand five hundred pi over three" is not voiced (decimals only aloud; exact forms on screen).

Main question: *How do radians simplify arc length, sector area and segment area? Can the pizza slice's crust come in one step?*
Entry knowledge (t05, t08, Stage 5): radians as arc over radius; fractions of a turn; ½ab sin C; 2πr and πr².
Stops after: l = rθ, A = ½r²θ (proved), perimeters, finding r or θ, minor and major segments, sectors and arcs. No graphs.
Handoff: math-a11-t10: "a tuning fork's pure tone makes a wave; a point going round a circle has a height. Plot the height against the angle?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed, continuing t08): angle blue; radius ink; arc teal; sector pale teal; triangle grey; segment amber; major parts violet; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · TRIGONOMETRY AND MEASURE OF ANGLES". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: one step instead of two
> Here's the pizza from last time. Its radius is twenty centimetres, and one slice has an angle of forty-five degrees, or pi over four radians. To find the slice's crust, we took two steps. The whole crust is two pi times twenty, forty pi centimetres, and one slice gets an eighth of it, five pi centimetres. But an angle in radians is arc length over radius. So the crust should come straight from the radius and the angle: twenty times pi over four is five pi. One **step**. So how do radians simplify arc length, sector area and segment **area**?

Visual: opens on t08's final frame exactly (the pizza with one slice outlined, the teal crust, "45° = π/4", "r = 20 cm"; the right column "whole crust: 2π × 20 = 40π cm", "slice: ⅛ of a turn", "slice crust: ⅛ × 40π = 5π cm ≈ 15.7 cm", "one step instead of two?", "Next: arc length and sector area", "?"). On the first sentence the "Next" chips fade. On "two steps" the first two chips pulse in turn, a grey "1" and "2" beside them. On "arc length over radius" grey chip "t08: θ = l/r". On "step" a new row writes under the column, 52 px: "20 × π/4 = 5π cm" (teal, green frame), hand tag "one step"; the two-step chips dim. On "area" heading "Arcs, sectors and segments"; the question chip "One step for arcs, sectors, segments?" moves to the top right.

### 2. arc length: l = rθ
> Here's why it works. The angle in radians is the arc length over the radius: theta equals l over r. Multiply both sides by r, and the arc length is r times **theta**. Picture it. The arc peels off and straightens beside the radius, and it's exactly theta radius-lengths long. For example, a sector with a radius of eight centimetres and an angle of pi over four radians has an arc of eight times pi over four, two pi **centimetres**. The whole edge of a sector, its perimeter, is the arc plus two radii. For the pizza slice, that's forty plus five pi centimetres. But this only works in radians. Put sixty degrees straight in, with a radius of ten, and you'd get six hundred centimetres, about fifty-seven times too long. Sixty degrees is pi over three radians, so the arc is about ten point five **centimetres**. Using degrees in l equals r theta is the slip.

Visual: stage change: the pizza (640 px) at the left with the slice; g01 rows at the right. Rows, current 52 px, earlier 32 px dimmed: "θ = l/r" (hand tag "θ = l/r"); on "theta" "l = rθ" (60 px, framed). On "Picture it" the teal crust peels off the pizza and straightens beside the lower radius (`RadiusWrap` arc mode), lying as 0.785 of one radius-length, hand tag "θ radius-lengths". Task strip, 44 px: "Find the arc length: r = 8 cm, θ = π/4." Rows: "l = 8 × π/4"; on "centimetres" "l = 2π cm" (green frame). On "perimeter" the slice's two radii and crust trace together in ink and teal, row "perimeter = 2r + l = 40 + 5π cm", hand tag "two radii + arc". On "sixty degrees" a red slip "l = 10 × 60 = 600 cm" writes and is crossed, caption "60 is not in radians", hand tags "radians only" and "about 57.3 × too long"; row "60° = π/3: l = 10 × π/3 ≈ 10.5 cm" (green frame) on "centimetres" (last).

### 3. sector area: proving A = ½r²θ
> Now the area. A sector, a slice of the circle, takes the same fraction of the circle's area as its angle takes of a full turn. A full turn is two pi radians, so the fraction is theta over two pi. The whole circle's area is pi r squared, so the sector's area is pi r squared, times theta over two **pi**. The pis cancel, and half of r squared theta is left: A equals a half r squared **theta**. That's the proof. For the pizza slice, it's a half times four hundred, times pi over four, which is fifty pi square centimetres, the same as the fraction gave last **time**. Leaving out the half, and writing r squared theta, is the **slip**.

Visual: clear change: the pizza (700 px) at the left with a sector sweeping from 0 to 2π and back to π/4 (`SpinnerSectors`), its fill pale teal, a bar beside it "fraction of the circle: θ/2π" filling in step, hand tag "θ/2π of the circle". Rows at the right, 52 px: "circle: πr²"; on "pi" "A = πr² × θ/2π"; the π on top and the π in 2π slash, hand tag "π cancels"; on "theta" "A = ½r²θ" (60 px, framed), hand tag "proof". Task strip, 44 px: "The pizza slice: r = 20 cm, θ = π/4." Row: "A = ½ × 400 × π/4"; on "time" "A = 50π cm² ≈ 157 cm²" (green frame), grey chip "t08: ⅛ of 400π = 50π", hand tag "same 50π". On "slip" a red slip "A = r²θ" writes and is crossed, caption "the half came from θ/2π".

### 4. working backwards
> The formulas also run backwards. A sector has an area of twenty-seven pi square centimetres and an angle of pi over two radians. Find its radius. Substitute into A equals a half r squared theta: twenty-seven pi equals a half r squared, times pi over two, which is pi r squared over **four**. Cancel the pi and multiply by four, so r squared is a hundred and eight. The radius is the square root of a hundred and eight, which simplifies to six root three centimetres, about ten point four **centimetres**.

Visual: clear change to the full-width g01 board (`WorkingBoard`), a small coded sector (quarter circle, θ = π/2 in blue, r unknown) at the right. Task strip, 44 px: "A sector has area 27π cm² and angle π/2. Find its radius." Equation strip: "A = ½r²θ". Givens card: "A = 27π cm²" (pale teal), "θ = π/2" (blue). Rows, current 52 px, earlier 32 px dimmed: "27π = ½r² × π/2"; on "four" "27π = πr²/4"; "r² = 108"; on "centimetres" "r = √108 = 6√3 ≈ 10.4 cm" (green frame), the sector's radius labelling "6√3 cm", hand tag "runs backwards".

### 5. a segment: sector minus triangle
> Now a shape with a straight edge. Here's a round table with a drop leaf. The leaf folds down along a straight hinge, so it's a segment, the region between a chord and its arc. The table's radius is fifty centimetres, and the hinge cuts off an angle of two pi over three radians at the centre. Draw the two radii to the ends of the hinge. With the leaf, they make a sector. So the segment is the sector, minus the triangle. The sector is a half r squared theta. The triangle has two sides of length r, with the angle theta between them, so by the area rule it's a half r squared sine theta. Subtract, and the segment's area is a half r squared, times theta minus sine **theta**. For the leaf, that's about one thousand five hundred and thirty-five square **centimetres**. Theta must be in radians here, so if you find sine theta on a calculator, use radian mode.

Visual: stage change: the table plate `ma11-drop-leaf-table-top-v1.png` (820 px, top view) at the left with a coded dashed hinge line across it; the pizza shrinks to a 200 px badge at the top right. On "chord" the hinge line labels "chord", the leaf's edge labels "arc", the leaf region glows amber, label "segment". On "two pi over three" the centre and two radii (ink) draw to the hinge's ends, "r = 50 cm" and the blue angle "2π/3". On "sector" the sector fills pale teal over the leaf and the triangle (`SectorSegment`); on "minus the triangle" the grey triangle lifts out and slides aside, leaving the amber segment exactly over the painted leaf, hand tag "sector − triangle". Rows at the right, 52 px: "sector: ½r²θ" (teal); "triangle: ½r² sin θ" (grey), grey chip "t05: ½ab sin C", hand tag "½ab sin C"; on "theta" "segment = ½r²(θ − sin θ)" (60 px, framed). Task strip row, 44 px: "Leaf: ½ × 50² × (2π/3 − √3/2)"; "= 2500π/3 − 625√3"; on "centimetres" "≈ 1535 cm²" (green frame). On "radian mode" a coded calculator badge "RAD", hand tag "radian mode".

### 6. major: the rest of the circle
> The rest of the table top, the part that stays flat, is the major segment. It's whatever the leaf **isn't**. The whole circle is pi times fifty squared, about seven thousand eight hundred and fifty-four square centimetres, so the fixed top is about six thousand three hundred and eighteen square **centimetres**. Its curved edge is the major arc, and it uses the reflex angle, two pi minus two pi over three, which is four pi over three radians. So the major arc is fifty times four pi over three, about two hundred and nine **centimetres**. Giving the leaf's area when a question asks for the major segment is the **slip**.

Visual: the table stays (stage continues); on "isn't" the toggle swaps (`SectorSegment` major mode): the fixed top glows violet, label "major segment", hand tag "the rest of the circle". Rows, 52 px: "circle: π × 50² ≈ 7854 cm²"; on "centimetres" "major segment ≈ 7854 − 1535 ≈ 6318 cm²" (green frame). The major arc traces violet round the fixed top, the reflex angle at the centre in blue "4π/3", hand tag "2π − θ"; row "major arc = 50 × 4π/3 = 200π/3"; on "centimetres" (last) "≈ 209 cm" (green frame). A grey check row: "major segment = major sector + triangle = 5000π/3 + 625√3 ✓", hand tag "+ triangle". On "slip" a red slip "major segment ≈ 1535 cm²" writes and is crossed, caption "that's the minor one".

### 7. memory aid
> Here's the summary. In radians, the arc is r theta, and the sector is a half r squared theta. Take away the triangle, a half r squared sine theta, to get the segment. And for the major parts, use the rest of the **circle**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the straightened crust beside its radius, and the table's leaf with the triangle lifted out. Main line, hand font 56 px: "In radians: arc rθ, sector ½r²θ. Segment = sector − triangle = ½r²(θ − sin θ)." On "circle" the key line, 40 px: "Major = the rest of the circle." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A sector of a circle has a radius of fifteen centimetres, and a perimeter of fifty centimetres. Find the angle at the centre in radians, and the area of the sector. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A sector of a circle has radius 15 cm and perimeter 50 cm. Find the angle at the centre in radians, and the area of the sector." The full question stays on screen. Picture slot: a coded sector with both radii labelled "15 cm", the angle "θ" and the arc unlabelled. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The perimeter is two radii plus the arc, so the arc is fifty minus thirty, twenty **centimetres**. Theta is l over r, twenty over fifteen, which is four thirds radians. The area is a half times two hundred and twenty-five, times four thirds, which is a hundred and fifty square **centimetres**. Forgetting the two radii, and using an arc of fifty, is the slip.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "l = 50 − 2 × 15"; on "centimetres" "l = 20 cm", the picture's arc labelling "20 cm"; "θ = 20/15 = 4/3"; on "centimetres" (last) "A = ½ × 15² × 4/3 = 150 cm²" (green frame, with "θ = 4/3" in the same frame). On "Forgetting" a red slip "l = 50" writes and is crossed, caption "perimeter = 2r + l". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A chord of a circle of radius six centimetres subtends an angle of two pi over three radians at the centre. Find the exact areas of the minor segment and the major segment. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A chord of a circle of radius 6 cm subtends an angle of 2π/3 at the centre. Find the exact areas of the minor segment and the major segment." Picture slot: a coded circle with the chord and two radii, "6 cm" and "2π/3" marked, no shading. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The minor segment is a half times thirty-six, times two pi over three minus root three over two. That's twelve pi minus nine root **three**, about twenty-two point one square centimetres. The whole circle is thirty-six pi, so the major segment is the rest: twenty-four pi plus nine root **three**, about ninety-one. Writing minus nine root three for the major segment is the slip.

Visual: the card shrinks to the top. Rows, 44 px: "minor = ½ × 36 × (2π/3 − √3/2)"; on "three" "= 12π − 9√3 ≈ 22.1 cm²" (green frame), the minor segment shading amber; "major = 36π − (12π − 9√3)"; on "three" (second) "= 24π + 9√3 ≈ 91.0 cm²" (green frame), the major segment shading violet. On "Writing" a red slip "major = 24π − 9√3" writes and is crossed, caption "major sector + triangle". Hold about 1 s.

### 12. handoff
> So far, radians have measured arcs and areas. Next, they become the axis of a graph. Here's a tuning fork, and a phone's tuner showing its pure tone, a wave that rises and falls again and again. And here's a point going round a circle of radius one, with its height marked. What would we see if we plotted that height against the angle? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: on "tuning fork" the phone plate `ma12-phone-v1.png` (520 px, left) with a coded tuner screen drawing a teal pure-tone wave and "pure tone", and the tuning fork plate `ma11-tuning-fork-v1.png` (300 px) beside it. On "a point going round" the coded circle of radius 1 at the centre, a point turning on it with its teal drop line "height = sin θ"; empty axes at the right labelled "angle" and "height". On "plotted" chip "plot the height against the angle?". On "next" chips "Next: the graphs of sin, cos and tan" and "?". Hold about 2 s. This is t10's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Arc length: l = rθ (θ in radians).
- Sector area: A = ½r²θ (θ/2π of πr²).
- Sector perimeter = 2r + rθ.
- Segment = sector − triangle = ½r²(θ − sin θ), calculator in radian mode.
- Major sector or segment = circle − minor part; major angle 2π − θ.

Memory aid (framed card, right side, as in scene 7): *In radians: arc rθ, sector ½r²θ. Segment = sector − triangle.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and t10's opening frame.

## Teaching checks

- **Does it explain causes?** Why one step: a radian is arc over radius (1, 2). Why degrees fail: the formula needs the angle as a ratio of lengths (2). Why ½r²θ: the sector is θ/2π of πr², and the π cancels (3). Why the segment formula: the sector minus t05's triangle (5). Why major parts are differences: they are the rest of the circle (6).
- **Misconceptions addressed:** degrees in l = rθ (2 crossed); A = r²θ (3 crossed); sin θ in degree mode (5); the perimeter without the radii (A1 crossed); minor for major (6 crossed); the triangle subtracted from the major part (A2 crossed).
- **Visual standard, item by item:** 1 the pizza from the first frame (t08's frame), the table from scene 5; 2 a new stage every 35 to 60 s; 3 the arc straightening, the sector sweep with its fraction bar, the segment lift-out and major toggle; 4 fixed roles (t08's, plus segment amber and major violet); 5 large type; 6 hand tags; 7 g01 boards in 2 to 6; 8 framed card and five bullets; 9 the triangle lifting out to leave exactly the leaf.
- **One idea at a time:** one step (1), arc and perimeter (2), sector proof (3), backwards (4), segment (5), major parts (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 28 s.
- **Avoided double teaching:** t08's radians and fractions of a turn, t05's area rule and Stage 5's circle formulas are recalled in a phrase or grey chip.
- **Syllabus coverage:** `cib55a24b7` (1, 2, A1; key notes 1, 3); `ci56cda609` (3, 4, A1; key note 2: proved and used); `cibf527c60` (4 to 6, A1, A2; key notes 4, 5): arc lengths, minor and major sectors and segments.
- **Out of scope by design:** trig graphs (t10).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A sector of a circle has radius 15 cm and perimeter 50 cm. Find the angle at the centre in radians, and the area of the sector."
Model answer: arc = 50 − 2 × 15 = 20 cm, so θ = l/r = 20/15 = 4/3. Area = ½ × 15² × 4/3 = 150 cm². Classic mistake (crossed): "l = 50".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "A chord of a circle of radius 6 cm subtends an angle of 2π/3 at the centre. Find the exact areas of the minor segment and the major segment."
Model answer: minor: ½ × 36 × (2π/3 − sin(2π/3)) = 18(2π/3 − √3/2) = 12π − 9√3 ≈ 22.11 cm². Major: 36π − (12π − 9√3) = 24π + 9√3 ≈ 90.99 cm². Classic mistake (crossed): "major = 24π − 9√3".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Pizza | r = 20 cm, θ = π/4: l = 5π ≈ 15.7 cm; perimeter 40 + 5π cm; A = 50π ≈ 157 cm² | 1 to 3 |
| `we-1` | r = 8, θ = π/4: l = 2π cm | 2 |
| Degree slip | 10 × 60 = 600 against 10π/3 ≈ 10.5 cm; ratio about 57.3 | 2 |
| `we-3` | 27π = πr²/4; r² = 108; r = 6√3 ≈ 10.4 cm | 4 |
| Table | r = 50 cm, θ = 2π/3: leaf 2500π/3 − 625√3 ≈ 1535 cm²; circle ≈ 7854 cm²; fixed top ≈ 6318 cm² (= 5000π/3 + 625√3); major arc 200π/3 ≈ 209 cm | 5, 6 |
| A1 | l = 20; θ = 4/3; A = 150 cm² | 8, 9 |
| A2 | 12π − 9√3 ≈ 22.1; 24π + 9√3 ≈ 91.0 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (17 Nov 2026, scratchpad `t/verify.py`); Codex to re-check.

- 20 × π/4 = 5π = 15.708; 40 + 5π = 55.708; ½ × 400 × π/4 = 50π = 157.08.
- 8 × π/4 = 2π. 10 × π/3 = 10.472; 600/10.472 = 57.30 (180/π).
- 27π = ½r²(π/2) ⇒ r² = 108 ⇒ r = 6√3 = 10.392.
- r = 50, θ = 2π/3: ½r²θ = 2500π/3 = 2617.99; ½r² sin θ = 625√3 = 1082.53; segment 1535.46; πr² = 7853.98; major segment 6318.52 = 5000π/3 + 625√3; major arc 200π/3 = 209.44.
- A1: (50 − 30)/15 = 4/3; ½ × 225 × 4/3 = 150.
- A2: 18(2π/3 − √3/2) = 12π − 9√3 = 22.111; 36π − (12π − 9√3) = 24π + 9√3 = 90.987.

## Memory aid check

- **"In radians: arc rθ, sector ½r²θ. Segment = sector − triangle = ½r²(θ − sin θ)."** Original wording of the standard results. Meaning, as said in scene 7: with θ in radians, an arc's length is rθ and a sector's area ½r²θ; a segment's area is the sector's minus the isosceles triangle's, ½r² sin θ. Assumptions checked: θ in radians (said and shown, with radian mode for sin θ); for the minor segment θ < π; for θ > π the same formula gives the major segment directly (½r²(θ − sin θ) with sin θ < 0 adds the triangle), which agrees with scene 6's "rest of the circle" (author check: θ = 4π/3, r = 50: ½ × 2500 × (4π/3 + √3/2) = 6318.5 ✓). It helps a new case: a sector of radius 9 and angle 2π/3 has arc 6π and area 27π (the site's Q1).
- **"Major = the rest of the circle."** The working rule for major arcs, sectors and segments; shown in scene 6 and A2.
- **Considered, not used:** "arc is r θ, area is half r squared θ" sung as a rhyme (no rhyme lands naturally).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `t/count.py`): 5,731 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 20 s of settling (the arc straightening, the sector sweep, the triangle lift-out, the major toggle) and the 45 s notes scene: about 522 s. Characters per scene (1 to 13): 539, 848, 619, 496, 853, 608, 219, 197, 352, 204, 372, 349, 75. Speech before the notes is about 425 s, under the 570 s cap. Feedback speech: about 26 s and 28 s.

Reserve trims if the voiced take runs long: scene 2's perimeter sentence moves to the screen only (keep the row and tag, silent); scene 6's "It's whatever the leaf isn't" (keep the violet glow).

## Scene list and build ids

Lesson key `m-a11t09` (route math-a11-t09). Explainer folder `src/explainer/lessons/math-a11-t09`; build inputs in `docs/production/claude-pm/lessons/math-a11-t09/` (at voicing).

In order (13 scene headings): hook-one-step, arc-length, sector-proof, working-backwards, segment, major-parts, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | t08's pizza frame; the one-step crust |
| 40 to 105 s | 2 | The arc straightening; g01 rows |
| 105 to 158 s | 3 | The sector sweep and the proof |
| 158 to 195 s | 4 | g01 board: finding r |
| 195 to 265 s | 5 | The drop-leaf table: segment lift-out |
| 265 to 310 s | 6 | The table's major segment and arc |
| 310 to 328 s | 7 | Framed memory card |
| 328 to 418 s | 8 to 11 | Question cards and countdowns, then feedback |
| 418 to 445 s | 12 | Phone, fork and circle (t10's frame) |
| 445 to 490 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t08's last frame continues into 1; 1 to 2 stage change (the pizza moves left); 2 to 3 clear change; 3 to 4 clear change to the board; 4 to 5 stage change to the table; 5 to 6 same table (stage continues with the major toggle); 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-t09-learning-review.md`, `science_check` = `checks/m-a11-t09-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets`, file list): `ma11-pizza-top-v1.png` and its sidecar exist (w09's plate, reused by t08); `ma12-phone-v1.png` exists (blank dark screen, checked by eye). No drop-leaf table or tuning fork plate exists.

Reused: `ma11-pizza-top-v1.png` (scenes 1 to 3, 5 badge), `ma12-phone-v1.png` (scene 12).

Need (painted, new; see the Codex asset brief): `ma11-drop-leaf-table-top-v1.png` (this video), `ma11-tuning-fork-v1.png` (this video's handoff and t10's anchor; briefed here because t09's build shows it first).

Coded: radii, arcs, the straightened crust, sector fills and bars, the triangle and segments, the hinge line, board rows, the tuner screen, circle and axes, countdown, key notes.

### Studio kit use and additions

Uses: `RadiusWrap` (t08's new part, arc mode), `SpinnerSectors`, `SectorSegment` (new, kit needs), `WorkingBoard`, `TaskStrip`, `GivensCard`, `ScreenApp` (calculator badge), `StudioCirclePoint` (scene 12), surd formatter (kit needs), `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Segment on a plate** (small, part of `SectorSegment`): the sector, triangle and segment drawn from the table plate's sidecar (centre, radius and hinge chord ends), so the amber segment lands exactly on the painted leaf; the major toggle uses the same geometry.
2. **Crust peel** (small, part of `RadiusWrap`): the slice's arc on the pizza plate (sidecar centre and inner-crust radius) lifts and straightens beside the lower radius.

## Codex asset brief (Maths A11 T09, a round drop-leaf table from above, and a tuning fork; the fork also opens t10)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-t09.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the t09 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-drop-leaf-table-top-v1.png` (1600 × 1600 px): a round timber drop-leaf table seen from directly above with its leaf raised, so the top is a complete circle; a straight hinge seam crosses the top as a chord, cutting off the leaf on the right; the chord's ends are one third of the way round the rim apart (the chord subtends 120° at the centre). Plain timber grain, nothing on the table. The top must be a true circle.
2. `ma11-tuning-fork-v1.png` (600 × 1400 px): one steel tuning fork standing upright on a small round wooden resonator block, side-on, plain and unmarked.

Sidecar JSON: table (`ma11-drop-leaf-table-top-v1.json`): the top's centre pixel, its radius in pixels, and the two pixel points where the hinge seam meets the rim. Fork: none. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-t09-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quotes match the route-inputs JSON exactly.
3. Confirm l = rθ is established from θ = l/r and A = ½r²θ is proved as θ/2π of πr², in full.
4. Confirm the degree slip states "about 57.3 times too long" (180/π), not "π/180" (site trap 01 corrected).
5. Confirm a major segment and a major arc are worked, and that the major segment adds the triangle.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on t08's final frame as described in `checks/root-decisions-maths-a11-t01-t08.md`.

## YouTube metadata (draft)

Title: Arc Length, Sector Area and Segments in Radians | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/trigonometry-and-measure-of-angles/lesson02.sa.html

A pizza slice's crust took two steps in degrees. In radians it takes one: l = rθ. Prove the sector area formula A = ½r²θ, use both formulas backwards to find a radius, then find the area of a round table's drop leaf as a segment, sector minus triangle, ½r²(θ − sin θ), and the major segment and major arc of the fixed top. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Trigonometry and measure of angles.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Establish and use the formula l = rθ for the length l of arc subtending an angle θ in radians at the centre of a circle of radius r"
"Prove and use the formula A = 1/2 r^2θ for the area of a sector with angle θ in radians at the centre of a circle of radius r"
"Solve problems involving arc lengths and areas of major and minor sectors and segments"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5

Builds on: Radians. Next: Graphs of sin, cos and tan.

#Year11Maths #MathsAdvanced #ArcLength #HSCScience

## Open decisions

- **1. Two anchors (root).** The pizza continues from t08 for arcs and sectors (a deliberate return, as the RC car across c01 and c02), and the drop-leaf table carries segments and major parts. If root wants the pizza only, a "crust bite" segment is possible but less natural.
- **2. Spoken exact forms (learning review).** The leaf's exact area (2500π/3 − 625√3) and the fixed top's (5000π/3 + 625√3) are on screen only; the narration gives the decimals. Check that a student can follow the exact forms without hearing them.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from t05 and t08; check that the one-step crust makes l = rθ feel caused, that the proof in scene 3 is complete and followable, that the triangle lift-out makes "sector minus triangle" visible, and that the major segment's "adds the triangle back" is understood before A2), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
