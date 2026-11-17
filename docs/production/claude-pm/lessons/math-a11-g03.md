# Maths A11 G03: How does replacing x by x/k or y by y/l stretch a graph? A photocopier's width, height and zoom settings, horizontal and vertical dilations from an axis, factors between 0 and 1, f(3x) as a squash by one third, and enlargement by the same factor both ways (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`, `w31.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,683 characters by script (see "Narration length estimate"), 13 scene headings, about 515 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: seventy-sixth video of Year 11 Mathematics Advanced (2024), outline order 76, Graph transformations. Pre-design pack: `../pre-design/maths-a11/math-a11-g03.md` (brief 243). Site lesson (read through the pack's quotations, read only): `graph-transformations/lesson03.sa.html` (Dilations of Functions, SHA256 `fe6e40320e4db37743ff21d89b66c887a0fac386447e86e77b7c2b1c6b864bfb`; the establish task's √x family and `we-dil-3` used with the site's numbers; card 05's proportions claim corrected, S11-G02). Route entry: `math-a11-g03` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; a painted photocopier (new); the page, every graph, the app screen and the board coded.

Owner rules applied: as e08 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, an everyday anchor (home and office: a photocopier's zoom settings), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Graph transformations), quoted from `../../programme/syllabus/maths-advanced-2024-y11-crosswalk.json`:

- `cic990ec79`: "Describe a horizontal dilation as a stretch from the y-axis and a vertical dilation as a stretch from the x-axis"
- `cide27d1f1`: "Establish using graphing applications that replacing x by x/k in the equation of a graph corresponds to a horizontal dilation of a graph by a factor of k, that replacing y by y/l corresponds to a vertical dilation by a factor of l, and determine the effects on the graph when the magnitude of the dilation factor lies between 0 and 1"
- `ci950cc744`: "Establish, using graphing applications, replacing x by x/k and replacing y by y/k in the equation of a graph corresponds to a dilation by a factor of k, that is, an enlargement of the graph when k > 1 and a reduction of the graph when 0 < k < 1"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3

**Boundary:** starts from g02's final frame exactly (the photocopier plate `ma11-photocopier-v1.png`; a coded page with y = x² for x 0 to 3 on graph paper, origin at the page's lower-left corner; the copier's coded panel "Zoom 200%" and the setting "Width 200% · Height 100%"; chips "copy at 200%: what equation?", "width only: what equation?", "Next: stretching a graph", "?"). Recalls g01 ("the new graph at x does what the old one did at ...") and g02 (images of points; "outside acts on every height, as written") in a phrase each, w24 (the circle x² + y² = r²) and w15 (narrower and wider parabolas) in grey chips. Teaches: replacing x by x/2 stretches a graph from the y-axis by factor 2 (a horizontal dilation), because the new graph at x does what the old one did at x/2 (`cic990ec79`, `cide27d1f1`); replacing y by y/2 gives y = 2f(x), a vertical dilation by factor 2 from the x-axis, x-intercepts fixed; in a graphing app, factors between 0 and 1 squash towards the axis, and f(3x) is a dilation by factor ⅓ because 3x = x ÷ ⅓ (the reciprocal link Year 12 needs); images of points under both dilations (site `we-dil-3`); replacing x by x/3 and y by y/3 together is a dilation by factor 3, an enlargement (the unit circle becomes the circle of radius 3), and a factor between 0 and 1 gives a reduction; an enlarged parabola is the same shape; a one-way dilation changes the shape (`ci950cc744`; S11-G02). Stops at single dilations and the same factor both ways. Not taught: negative factors (a dilation with a reflection; g04 names k < 0 and a < 0); combining with translations (g04); the general form y = k f(a(x + b)) + c (g04).

## Decisions

- **Anchor: a photocopier's zoom settings (painted plate, live).** A page with y = x² drawn on graph paper, its origin at the corner the copier scales from. "Zoom 200%" doubles every distance from that corner: the same factor both ways, an enlargement. A width-only setting ("Width 200% · Height 100%", the independent X and Y zoom that many office copiers offer) stretches from the left edge (the y-axis) only; a height-only setting stretches from the bottom edge (the x-axis). So one familiar machine gives a horizontal dilation, a vertical dilation and an enlargement, each from the right line. Home and office; the pack's anchor 1 (photocopier at 200% and 50%), extended to the one-way settings. No Year 11 or Year 12 Maths design uses a photocopier (grep "photocopier", "copier", 17 Nov). The existing `ma11-office-printer-v1.png` (viewed: a desktop laser printer with no scanner lid) is not a copier and is not reused.
- **Notation (root ruling 4).** The syllabus writes "x/k" for a horizontal factor k, but the Year 12 form y = k f(a(x + b)) + c uses k for the vertical factor. To avoid two meanings of k in one year, the screen and narration use numbers only ("replace x by x/2", "factor 2"); the letters k and l appear only in the quoted syllabus text in the YouTube description. The general form arrives in g04, where the reciprocal link taught here ("inside 3x: factor ⅓") reads as "inside ax: factor 1/a".
- **Graphing applications (syllabus wording).** Scene 4 is a coded graphing-app screen (`ScreenApp`) with the site's √x family and a factor slider; scene 6 shows the enlargement in the same app. Unbranded.
- **Simulations (standard item 3).**
  1. **Copier stretch** (`StretchFromAxis`, scenes 1 to 3; new part): the page's grid and curve stretch from the fixed axis (drawn bold amber or blue), with every sampled point carried along an arrow whose length is proportional to its distance from that axis; the copy slides out of the copier.
  2. **Factor slider** (`ScreenApp` with `FunctionSimulator` xScale and yScale, scene 4): the horizontal factor sweeps 3 → 1 → ⅓ (stopping short of 0, grey tag "never 0"), with a live readout "factor 3", "factor ⅓" and "stretch"/"squash"; then the vertical factor does the same.
  3. **Enlargement** (`CircleTracer` with equal scales, scene 6): the unit circle grows to radius 3 with four radius spokes; then y = x² enlarges by factor 2 and lands exactly on y = x²/2; then a width-only stretch turns the circle into an oval.
- **Colour roles (fixed for the g strand, from Year 12 t01 Revision 3).** Horizontal dilation (x replaced by x/2, the y-axis it stretches from, the factor's readout) **blue**; vertical dilation (y replaced by y/2, the x-axis it stretches from) **amber**; horizontal and vertical translation teal and violet (g01, recalled only); the parent a **dashed grey ghost**; the image **ink**; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As g02 (current lines 52 px, strips 44 px, nothing below 26 px, all text above y = 950). Hand tags: "×2 from the y-axis", "on the axis: stays", "inside ÷2: twice as wide", "×2 from the x-axis", "x-intercepts stay", "y/2 = x² → y = 2x²", "3x = x ÷ ⅓", "squash", "outside: as written", "never 0", "x × 3", "y × 2", "same shape, bigger", "one way: shape changes".
- **Stage changes (standard item 2).** The copier and its page (1); the width-only copy (2); the height-only copy (3); the graphing app (4); the g01 board (5); enlargement on equal axes (6); framed card (7); question cards (8 to 11); the oven frame for g04 (12); key notes (13).
- **Worked example (g01 layout).** 5: site `we-dil-3`, (2, 3) and (6, −1) on y = 2f(x/3) → (6, 6) and (18, −2). Crossed slip: "(⅔, 6)" (dividing the x-coordinate by 3). Scenes 2 to 4 and 6 are simulation stages with rows.
- **Memory aid.** Framed card: "Divide x by 3: stretch 3 from the y-axis. Multiply x by 3: squash to a third." Key line: "Outside: on y, as written. Inside: on x, the opposite." (Year 12 t01's memory aid, word for word, so t01 recalls exactly what g03 taught.)
- **Visual surprise.** The copier's 200% copy of y = x² lands exactly on the graph of y = x²/2: the "wider parabola" is the same shape, bigger.
- **Site notes (pack section 8; `../site-corrections-maths-a11.md` section 8).** S11-G02 (card 05 says dilations "preserve the overall proportions of the graph"): not taught; scene 6 shows the opposite (a one-way stretch turns the circle into an oval; only the same factor both ways keeps the shape). The site teaches only the coefficient forms y = af(x) and y = f(bx); this design teaches the syllabus replace-form first, then the coefficient forms with the reciprocal link (crosswalk partial). `ci950cc744` is missing from the site and is original teaching here.
- **Plain meanings at first use.** Dilation ("a stretch or squash by a factor, measured from an axis"); factor ("the number every distance from that axis is multiplied by"); enlargement and reduction ("the same factor both ways, bigger or smaller, same shape").
- **Attempts (pack questions).** A1: P(4, −3) with x → x/2 and y → y/3: (8, −9), horizontal factor 2 from the y-axis, vertical factor 3 from the x-axis; crossed "(2, −1)". A2: x² + y² = 16 with x → 2x and y → 2y: x² + y² = 4, radius 2, a reduction by factor ½; crossed "enlargement by factor 2, radius 8".
- **Mistake scene:** none separate. "Dividing x by 2 makes it narrower" (2, said and tagged); "y/2 halves the heights" (3 crossed); "f(3x) stretches by 3" (4, said; the Year 12 t01 misconception "factor ½ doubles the width" answered by the readout "squash"); dividing coordinates instead of multiplying (5 crossed, A1 crossed); "a one-way stretch keeps the shape" (6); reduction mistaken for enlargement (A2 crossed).
- **Cause chain taught, in order:** (1) a width-only copy moves every point twice as far from the y-axis, so the new graph at x does what the old did at x/2: replacing x by x/2 is a horizontal dilation by factor 2 (2); (2) a height-only copy doubles every height, so y/2 = f(x), that is y = 2f(x): a vertical dilation by factor 2 from the x-axis, which keeps the x-intercepts (3); (3) 3x = x ÷ ⅓, so f(3x) is a dilation by factor ⅓, a squash; a factor between 0 and 1 squashes and never reaches 0 (4); (4) dilations multiply coordinates, so images of points come from multiplying (5); (5) the same factor both ways scales every distance from the origin, so shapes are kept: an enlargement or a reduction (6).
- **Entry knowledge (route):** g01 (replacing x or y moves every point the same way); g02 (images of points; the outside number acts on every height); w24 (x² + y² = r², centre the origin); w15 (y = ax² is narrower or wider than y = x²).
- **What Year 12 relies on.** Year 12 t01 says "2x squashes by a half" and "a horizontal dilation by a factor of one half", lists "a horizontal dilation by factor ½ doubles the graph's width" as a misconception, and uses the memory aid "Outside: on y, as written. Inside: on x, the opposite." d02 says "y = 2ˣ is y = eˣ scaled horizontally by the factor 1/ln 2", and d06 and d13 say "sin 2x is the sine curve squashed sideways by a half" and "3^(2x) is 3ˣ squashed sideways by 1/2". Scene 4 delivers the reciprocal link in words ("Three x is x divided by a third, so this is a dilation by a factor of one third") and the readout "squash"; scenes 2 and 4 deliver "a factor of" language; scene 7 carries t01's aid word for word.
- **Handoff (to math-a11-g04, "Why does the order of transformations matter?").** Scene 12: the oven plate `ma11-oven-dial-v1.png` (new) with coded °F marks on its blank dial; a coded recipe card "Bake at 180 °C"; a rule card "°F = 1.8 × °C + 32"; two coded workings side by side, "× 1.8, then + 32 = ?" and "+ 32, then × 1.8 = ?" (no results); chips "same two steps, different order?", "Next: does the order matter?", "?". This is g04's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Width 200%: (x, y) → (2x, y). y = x² becomes y = (x/2)²: (1, 1) → (2, 1), (2, 4) → (4, 4), (3, 9) → (6, 9).
  (b) Height 200%: (x, y) → (x, 2y). y/2 = x² gives y = 2x²: (1, 1) → (1, 2).
  (c) Zoom 200%: (x, y) → (2x, 2y). y/2 = (x/2)² gives y = x²/2; (1, 1) → (2, 2), and (2, 2) is on y = x²/2. In general y = ax² (a > 0) is y = x² dilated by factor 1/a both ways.
  (d) √x family (site): √(x/3) through (3, 1), (12, 2); √(3x) through (⅓, 1), (4/3, 2); 3√x through (1, 3), (4, 6); (1/3)√x through (1, ⅓), (4, ⅔).
  (e) `we-dil-3`: x × 3, y × 2: (2, 3) → (6, 6), (6, −1) → (18, −2). Check: at x = 6 the inside is 6/3 = 2, the old x, and the output is 2f(2) = 6.
  (f) Unit circle with x → x/3, y → y/3: x²/9 + y²/9 = 1, so x² + y² = 9. Width only, factor 2: x²/4 + y² = 1, an ellipse (said "oval"; the word ellipse is not needed).
  (g) A1: (4, −3) → (8, −9). A2: 4x² + 4y² = 16 → x² + y² = 4, radius 2; 2x = x ÷ ½.
  (h) A factor of 0 would send every point onto the axis (not a dilation); negative factors combine a dilation with a reflection (g04).
  (i) Pronunciations: "x over two, all squared"; "root x"; "root of three x"; "three root x"; "a third of root x"; "x squared on two"; "two f of x over three" (bracket wording if needed: "two times f of, x over three").
  (j) Windows: page and copies x 0 to 6, y 0 to 9 with the origin at the page corner; app x −1 to 13, y −1 to 7; scene 5 board plot x −2 to 20, y −4 to 8; scene 6 equal units, x and y −4 to 4, then x −3 to 3, y −1 to 5 for the parabolas.

Main question: *A photocopier can double a page's width, its height, or both. How does replacing x by x/k or y by y/l stretch a graph?* (On screen with numbers: "Replace x by x/2, or y by y/2: what stretch?")
Entry knowledge (g01, g02, w24, w15): replacing x or y in an equation; images of points; the circle x² + y² = r²; narrower and wider parabolas.
Stops after: horizontal and vertical dilations by a factor from the y-axis and from the x-axis, factors between 0 and 1, f(3x) as factor ⅓, images of points, and enlargement or reduction by the same factor both ways. No negative factors, no combined sequences.
Handoff: math-a11-g04: "°F = 1.8 × °C + 32: multiply then add, or add then multiply. Does the order matter?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed for the g strand): horizontal dilation and the y-axis it stretches from blue; vertical dilation and the x-axis it stretches from amber; parent dashed grey ghost; image ink; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · GRAPH TRANSFORMATIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: three copier settings
> Here's the photocopier, and the page with y equals x squared on graph paper, its origin at the corner. Copy it at two hundred per cent, and every distance on the page doubles. The point one, one lands at two, **two**. Now stretch only the width to two hundred per cent. The point one, one lands at two, one, so the curve gets wider, but no **taller**. Both copies are dilations, which means stretches by a factor, measured from an axis. Each one has an equation, and it comes from dividing x, or y, by the factor. So how does replacing x by x over a number, or y by y over a number, stretch a **graph**?

Visual: opens on g02's final frame exactly (the copier `ma11-photocopier-v1.png`, 560 px wide, at the left; the coded page with y = x² on graph paper, origin at the lower-left corner; the panel "Zoom 200%" and the setting "Width 200% · Height 100%"; chips "copy at 200%: what equation?", "width only: what equation?", "Next: stretching a graph", "?"). On the first sentence the "Next" chips fade and the page enlarges to 720 × 760 px (x 0 to 6, y 0 to 9). On "Copy it at two hundred per cent" the copier's tray glows and a copy slides out beside the page: every grid line and the curve scaled from the corner by 2 (`StretchFromAxis`, both axes); on "two" the point (1, 1) on the page and its image (2, 2) on the copy ring, joined by a dashed arrow from the corner, hand tag "every distance × 2". The copy returns to the tray. On "only the width" the panel's "Width 200%" lights blue and a second copy slides out stretched from the left edge only; on "taller" (1, 1) → (2, 1) rings, hand tag "wider, not taller". On "graph" heading "Stretching graphs", and the question chip "÷ inside: what stretch?" moves to the top right.

### 2. replace x by x/2: a stretch from the y-axis
> Start with the width setting. Every point moves twice as far from the left edge of the page, which is the y-axis. The point two, four lands at four, **four**. So the new curve, at x equals four, has the height the old one had at two. The new graph at x does what the old graph did at x over two. So its equation is y equals x over two, all **squared**. Replacing x by x over two stretches the graph sideways by a factor of two. That's a horizontal dilation, a stretch from the y-axis. Each point's distance from the y-axis doubles, and points on the y-axis, like the vertex, stay **put**. Dividing by two inside makes the graph twice as wide, not narrower.

Visual: stage change: a large plot (1,250 × 760 px, x −1 to 7, y −1 to 10) with y = x² as a dashed grey ghost and the y-axis drawn bold blue ("stretch from here"); the copier as a 260 px badge at the top left. `StretchFromAxis` (horizontal): sampled points of the ghost carry along blue arrows away from the y-axis, each arrow as long as the point's distance from the axis; the ink image y = (x/2)² forms. On "four" (first) the point (2, 4) and its image (4, 4) ring, readout pair (52 px) "new graph at x = 4" and "copies the old graph at x = 4 ÷ 2 = 2", the ÷ 2 blue. On "squared" the equation strip writes (52 px) "y = (x/2)²", with "x/2" blue in a glowing slot (`ExpressionSlot`), hand tag "replace x by x/2"; rule chip "(x, y) → (2x, y)". Chip "horizontal dilation, factor 2, from the y-axis" (44 px). On "put" the vertex (0, 0) pulses, hand tag "on the axis: stays"; hand tag "inside ÷2: twice as wide" on the last sentence.

### 3. replace y by y/2: a stretch from the x-axis
> Now stretch only the height to two hundred per cent. Every point moves twice as far from the x-axis, so one, one goes to one, **two**. The new height is twice the old height, so the new y, divided by two, gives the old height. That's y over two equals x squared, which rearranges to y equals two x squared. It's a vertical dilation by a factor of two, a stretch from the x-axis. Heights double, and any point on the x-axis stays put, so x-intercepts never move. Reading y over two as halving the heights is the **slip**. Solve for y, and they **double**.

Visual: clear change: the same plot reset to the ghost y = x², the x-axis drawn bold amber ("stretch from here"); the copier badge's panel shows "Height 200%". `StretchFromAxis` (vertical): amber arrows carry points straight up, lengths proportional to their heights; the ink image y = 2x² forms. On "two" (first) (1, 1) → (1, 2) rings, rule chip "(x, y) → (x, 2y)". Rows (52 px): "y/2 = x²" with "y/2" amber in a slot, then "y = 2x²", hand tag "y/2 = x² → y = 2x²". Chip "vertical dilation, factor 2, from the x-axis" (44 px). On "x-intercepts never move" a small inset (300 × 220 px) shows y = x² − 1 stretched to y = 2(x² − 1) with its intercepts ±1 ringed and staying, hand tag "x-intercepts stay". On "slip" a red slip "y/2: heights halve" writes and is crossed; on "double" its caption "y = 2x²: heights × 2".

### 4. in a graphing app: factors below one
> Let's try other factors in a graphing app, with y equals root x. Replace x by x over three, and the graph stretches from the y-axis by a factor of three. Now replace x by three x. Three x is x divided by a third, so this is a dilation by a factor of one **third**. A factor between zero and one squashes the graph towards the y-axis, to a third of its width. So a number multiplying x works the opposite way. Root of three x is squashed to a third, not stretched by three. Outside is different. Three root x multiplies every height by three, just as it's **written**. Slide a factor down past one and a stretch becomes a squash, but it never reaches zero, which would flatten the **graph**.

Visual: stage change to the graphing-app screen (`ScreenApp`, 1,150 × 760 px, x −1 to 13, y −1 to 7; unbranded input bar), with y = √x (ink) and a dashed ghost. Input "y = √(x/3)" types; the curve stretches from the bold blue y-axis; the point (4, 2) → (12, 2) rings; readout (52 px) "horizontal factor 3: stretch". Input "y = √(3x)" types; on "third" the row "3x = x ÷ ⅓" (44 px, ⅓ blue) writes beside the app, hand tag "3x = x ÷ ⅓", the curve squashes towards the y-axis, (4, 2) → (4/3, 2) ringing; readout "horizontal factor ⅓: squash", hand tag "squash". Chip "inside × 3: factor ⅓" (44 px). On "Outside is different" input "y = 3√x" types, the x-axis bold amber, (4, 2) → (4, 6) rings; on "written" readout "vertical factor 3", hand tag "outside: as written". On "Slide a factor" the horizontal factor slider (blue) runs 3 → 1 → ⅓ → 0.15 and stops, the readout flipping "stretch" to "squash"; on "graph" a grey tag "never 0" at the slider's end, and a faint dotted preview of everything flattening onto the y-axis, crossed in grey.

### 5. worked example: images of points
> Here's a worked example. The graph of y equals f of x passes through two, three, and six, minus one. Find the matching points on y equals two f of x over three. Read the replacements. x over three inside is a horizontal dilation by a factor of three, so every x-coordinate is multiplied by three. The two outside is a vertical dilation by a factor of two, so every y-coordinate is multiplied by two. Two, three goes to six, **six**. Six, minus one goes to eighteen, minus **two**. Dividing the x-coordinate by three, to get two thirds, is the **slip**. Check it: at x equals six, the inside is two, the old x.

Visual: clear change to the g01 board. Task strip (44 px): "y = f(x) passes through (2, 3) and (6, −1). Find the matching points on y = 2f(x/3)." Equation strip (52 px): "y = 2f(x/3)", the 2 amber and the "x/3" blue. Givens card (44 px, left): "x/3 inside: horizontal factor 3: x × 3" (blue), "2 outside: vertical factor 2: y × 2" (amber), each on its spoken words, hand tags "x × 3" and "y × 2". A plot at the right (720 × 560 px, x −2 to 20, y −4 to 8) with the two points as grey dots. Rows (52 px): "(2, 3) → (2 × 3, 3 × 2)"; on "six" (second) "= (6, 6)" (green frame), the point flying along a blue then an amber arrow. "(6, −1) → (6 × 3, −1 × 2)"; on "two" (last) "= (18, −2)" (green frame). On "slip" a red slip "(2, 3) → (⅔, 6)" writes and is crossed, caption "inside ÷ 3: x × 3". On the last sentence a grey check row "x = 6: inside 6/3 = 2 ✓".

### 6. same factor both ways: enlargement
> Back to the full copy, where both directions use the same factor. Replace x by x over three, and y by y over three. That's a dilation by a factor of three, an **enlargement**. Take the unit circle, x squared plus y squared equals one. With both replacements, and after multiplying through by nine, it becomes x squared plus y squared equals nine, a circle of radius **three**. Same shape, three times the size. A factor between zero and one gives a reduction. Now the surprise. Enlarge y equals x squared by a factor of two, and you get y equals x squared on two. That wider parabola isn't a new shape. It's the same shape, **bigger**. Stretch only one way, though, and the shape changes. The circle becomes an **oval**.

Visual: stage change: an equal-unit plot (900 × 900 px, x and y −4 to 4) in the app frame, the copier panel badge reading "Zoom 300%". The unit circle (ink, with a grey chip "w24: x² + y² = r²") and four radius spokes. On "enlargement" both axes glow (blue and amber) and the circle grows from the origin to radius 3 (`CircleTracer`, equal scales), the spokes lengthening ×3; rows at the right (44 px): "(x/3)² + (y/3)² = 1", "× 9: x² + y² = 9"; on "three" (second) "radius 3" (green frame), hand tag "enlargement × 3". On "reduction" the circle shrinks to radius ⅓ and back (tag "factor ⅓: reduction"). On "Now the surprise" the window changes (x −3 to 3, y −1 to 5, equal units): y = x² (ink) and a dashed blue y = x²/2. The copier copies the page at 200%: the copy's curve scales from the origin and on "bigger" lands exactly on y = x²/2, rows "y/2 = (x/2)² → y = x²/2", hand tag "same shape, bigger" (the visual surprise); grey chip "w15: y = ax², a wider parabola". On "oval" the unit circle returns and the width alone stretches by 2 (blue arrows only) into an oval, hand tag "one way: shape changes".

### 7. memory aid
> Here's the summary. Divide x by a number, and the graph stretches from the y-axis by that factor. Multiply x by a number, and it squashes by one over that number. Outside the bracket, a number multiplies the heights, as written. Inside, on x, it works the opposite way. And the same factor both ways keeps the shape, an enlargement or a **reduction**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the copier badge and y = x² stretching from the blue y-axis, then from the amber x-axis. Main line, hand font 56 px: "Divide x by 3: stretch 3 from the y-axis. Multiply x by 3: squash to a third." On "reduction" the key line, 40 px: "Outside: on y, as written. Inside: on x, the opposite." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. The point P, four, minus three, lies on the graph of y equals f of x. In the equation, x is replaced by x over two, and y is replaced by y over three. Find the image of P, and describe each dilation. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The point P(4, −3) lies on the graph of y = f(x). In the equation, x is replaced by x/2 and y is replaced by y/3. Find the image of P and describe each dilation." The full question stays on screen. Picture slot: empty axes, x −2 to 10, y −10 to 2, with P plotted and labelled. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> x over two is a horizontal dilation by a factor of two, from the y-axis, so the x-coordinate doubles to **eight**. y over three is a vertical dilation by a factor of three, from the x-axis, so the y-coordinate triples to minus **nine**. The image is eight, minus nine. Dividing, to get two, minus one, is the **slip**.

Visual: the card shrinks to the top (30 px). Rows (44 px): "x/2: horizontal factor 2, from the y-axis: 4 × 2" (blue); on "eight" "= 8"; "y/3: vertical factor 3, from the x-axis: −3 × 3" (amber); on "nine" "= −9". Framed answer (green): "P′(8, −9)", the point flying along a blue then an amber arrow on the picture. On "slip" a red slip "(2, −1)" writes and is crossed, caption "replace with ÷: coordinates ×". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. The circle x squared plus y squared equals sixteen is transformed by replacing x by two x, and y by two y. Find the new equation and its radius, and describe the transformation. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The circle x² + y² = 16 is transformed by replacing x by 2x and y by 2y. Find the new equation and its radius, and describe the transformation." Picture slot: empty equal-unit axes, x and y −5 to 5, with the circle x² + y² = 16 drawn and labelled. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Two x, all squared, is four x squared, so you get four x squared plus four y squared equals sixteen. Divide by four, and x squared plus y squared equals four, a radius of **two**. Two x is x divided by a half, so this is a dilation by a factor of a half in both directions, a **reduction**. Calling it an enlargement by two, with radius eight, is the **slip**.

Visual: the card shrinks to the top. Rows (44 px): "(2x)² + (2y)² = 16", "4x² + 4y² = 16"; on "two" (first) "x² + y² = 4: radius 2" (green frame), the circle shrinking on the picture from radius 4 to 2. Row "2x = x ÷ ½: factor ½, both ways"; on "reduction" "reduction by factor ½" (green frame). On "slip" a red slip "enlargement × 2, radius 8" writes and is crossed, caption "× 2 inside: factor ½". Hold about 1 s.

### 12. handoff
> We can now slide, flip and stretch a graph. Next, we do more than one move at a time. Here's an oven whose dial is marked in degrees Fahrenheit, and a recipe that says a hundred and eighty degrees Celsius. To convert, multiply by one point eight, then add thirty-two. But add first and then multiply, and you get a different temperature. Same two steps, different order. Why does the order matter? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear. On "oven" the oven plate `ma11-oven-dial-v1.png` (600 px wide) arrives at the left, its blank dial overlaid with coded °F marks (200 to 500 °F). On "recipe" a coded recipe card "Bake at 180 °C" slides in. On "multiply by one point eight" a rule card "°F = 1.8 × °C + 32" (44 px). On "add first" two coded workings side by side, "× 1.8, then + 32 = ?" and "+ 32, then × 1.8 = ?" (no results). On "next" chips "same two steps, different order?", "Next: does the order matter?" and "?". Hold about 2 s. This is g04's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Replace x by x/3: horizontal dilation by factor 3, a stretch from the y-axis.
- Replace y by y/2: y = 2f(x), vertical dilation by factor 2, from the x-axis.
- y = f(3x): 3x = x ÷ ⅓, so horizontal factor ⅓, a squash.
- A factor between 0 and 1 squashes towards the axis.
- The same factor both ways keeps the shape: an enlargement or a reduction.

Memory aid (framed card, right side, as in scene 7): *Outside: on y, as written. Inside: on x, the opposite.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and g04's opening frame.

## Teaching checks

- **Does it explain causes?** Why x/2 stretches by 2: the new graph at x does what the old did at x/2, so each old point appears twice as far out (2). Why y/2 doubles the heights: y/2 = f(x) solves to y = 2f(x) (3). Why f(3x) squashes: 3x = x ÷ ⅓ (4). Why points on an axis stay: 0 times any factor is 0 (2, 3). Why the enlarged parabola is the same shape: both directions scale by the same factor (6). Why a one-way stretch changes the shape: only one direction scales (6).
- **Misconceptions addressed:** ÷ inside read as narrower (2); y/2 read as halving (3 crossed); f(3x) read as a stretch by 3 (4); dividing coordinates (5 crossed, A1 crossed); "dilations keep proportions" (6, S11-G02); reduction read as enlargement (A2 crossed).
- **Visual standard, item by item:** 1 the painted copier from the first frame (g02's frame), returning as a badge in 2, 3, 6 and 7; 2 a new stage every 40 to 60 s; 3 `StretchFromAxis` with proportional arrows, the factor slider passing below 1, the circle growing; 4 fixed roles (horizontal blue, vertical amber); 5 large type; 6 hand tags; 7 the g01 board in 5; 8 framed card and five bullets; 9 the 200% copy landing exactly on y = x²/2.
- **One idea at a time:** horizontal (2), vertical (3), factors below 1 and the coefficient form (4), images of points (5), both ways (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 23 s and 26 s.
- **Avoided double teaching:** g01's "the new graph at x does what the old did at ..." and g02's "outside acts on every height" are recalled in a phrase; w24's circle and w15's parabolas are grey chips.
- **Syllabus coverage:** `cic990ec79` (2, 3; key notes 1, 2); `cide27d1f1` (2 to 5, A1; key notes 1 to 4), factors between 0 and 1 (4, A2; key note 4), with a graphing application (4); `ci950cc744` (6, A2; key note 5), with a graphing application (6).
- **Out of scope by design:** negative factors (g04); sequences (g04); the general form (g04).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "The point P(4, −3) lies on the graph of y = f(x). In the equation, x is replaced by x/2 and y is replaced by y/3. Find the image of P and describe each dilation."
Model answer: x/2 is a horizontal dilation by factor 2 from the y-axis; y/3 is a vertical dilation by factor 3 from the x-axis. Image (8, −9). Classic mistake (crossed): "(2, −1)".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "The circle x² + y² = 16 is transformed by replacing x by 2x and y by 2y. Find the new equation and its radius, and describe the transformation."
Model answer: (2x)² + (2y)² = 16 gives x² + y² = 4, radius 2. 2x = x ÷ ½, so this is a dilation by factor ½ in both directions, a reduction. Classic mistake (crossed): "enlargement by factor 2, radius 8".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Copier | 200%: (1, 1) → (2, 2); width only: (1, 1) → (2, 1) | 1 |
| Width only | y = (x/2)²; (2, 4) → (4, 4); new at 4 copies old at 2 | 2 |
| Height only | y = 2x²; (1, 1) → (1, 2); inset y = x² − 1 → 2(x² − 1), intercepts ±1 | 3 |
| App | √(x/3): (4, 2) → (12, 2); √(3x): (4, 2) → (4/3, 2); 3√x: (4, 2) → (4, 6); slider 3 → 1 → ⅓ → 0.15 | 4 |
| Site `we-dil-3` | (2, 3) → (6, 6); (6, −1) → (18, −2); check inside 6/3 = 2 | 5 |
| Enlargement | x² + y² = 1 → x² + y² = 9; factor ⅓: radius ⅓; y = x² at 200% → y = x²/2; width-only circle → oval | 6 |
| A1 | (8, −9) | 8, 9 |
| A2 | x² + y² = 4, radius 2, factor ½ | 10, 11 |
| Handoff | °F = 1.8 × °C + 32; 180 °C (no result shown) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (17 Nov 2026, scratchpad `g-designs/verify.py`, run with `python -I`); Codex to re-check.

- (x/2)² at 4 = 4; 2x² at 1 = 2; (2, 2) lies on y = x²/2; y/2 = (x/2)² ⟺ y = x²/2.
- √(12/3) = 2; √(3 × 4/3) = 2; 3√4 = 6.
- `we-dil-3`: (2 × 3, 3 × 2) = (6, 6); (6 × 3, −1 × 2) = (18, −2).
- 9((x/3)² + (y/3)² − 1) = x² + y² − 9.
- (4 × 2, −3 × 3) = (8, −9); ((2x)² + (2y)² − 16)/4 = x² + y² − 4.

## Memory aid check

- **"Divide x by 3: stretch 3 from the y-axis. Multiply x by 3: squash to a third."** with key line **"Outside: on y, as written. Inside: on x, the opposite."** The key line is Year 12 t01's aid, word for word (shared wording, as root accepted for c11 and c12 with d07 and d08). Meaning, as said in scene 7: replacing x by x/3 multiplies x-coordinates by 3; a number multiplying x inside divides x-coordinates by it; a number multiplying f(x) outside multiplies the heights by it. Assumptions checked: positive factors (negative ones add a reflection, g04); the dilation is from the axis, so points on that axis stay; "the opposite" applies to the number inside the bracket, after the inside is written as a multiple of x (g04 adds "factor the inside first"). It helps a new case: y = f(x/4) is four times as wide; y = f(4x) a quarter as wide. Introduced after scenes 2 to 6.
- **Considered, not used:** "Bigger number, smaller graph" (true only inside, and only for multiplying; it misleads for x/3).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `g-designs/count.py`): 5,683 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the copies sliding out, the stretches, the factor slider, the circle growing) and the 45 s notes scene: about 515 s. Characters per scene (1 to 13): 591, 644, 542, 678, 597, 704, 347, 232, 306, 209, 348, 410, 75. Speech before the notes is about 422 s, under the 570 s cap. Feedback speech: about 23 s and 26 s.

Reserve trims if the voiced take runs long: scene 6's "A factor between zero and one gives a reduction" (keep the silent shrink); scene 4's last sentence (keep the slider and the grey "never 0" tag).

## Scene list and build ids

Lesson key `m-a11g03` (route math-a11-g03). Explainer folder `src/explainer/lessons/math-a11-g03`; build inputs in `docs/production/claude-pm/lessons/math-a11-g03/` (at voicing).

In order (13 scene headings): hook-copier, stretch-from-y-axis, stretch-from-x-axis, app-factors, worked-points, enlargement, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | g02's frame; the copier's three settings |
| 45 to 100 s | 2 | Width only: stretch from the y-axis |
| 100 to 145 s | 3 | Height only: stretch from the x-axis |
| 145 to 205 s | 4 | Graphing app: factors below 1, inside against outside |
| 205 to 255 s | 5 | g01 board: images of points |
| 255 to 315 s | 6 | Enlargement: circle, parabola, oval |
| 315 to 340 s | 7 | Framed memory card |
| 340 to 425 s | 8 to 11 | Question cards and countdowns, then feedback |
| 425 to 460 s | 12 | Oven frame for g04 |
| 460 to 505 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: g02's last frame continues into 1; 1 to 2 stage change (the page becomes a plot); 2 to 3 clear change (reset); 3 to 4 stage change to the app; 4 to 5 clear change to the board; 5 to 6 stage change to equal axes; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-g03-learning-review.md`, `science_check` = `checks/m-a11-g03-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets/maths`, read only): `ma11-office-printer-v1.png` (a desktop laser printer, no scanner lid or zoom panel; not a copier, not reused). No photocopier or oven plate exists.

Need (painted, new; see the Codex asset brief): `ma11-photocopier-v1.png` (also needed for g02's final frame) and `ma11-oven-dial-v1.png` (needed for this video's final frame and g04's opening).

Coded: the page and its copies, the copier's panel text, every graph and stretch arrow, the app screen and slider, the circles and oval, the board, the recipe and rule cards, the °F marks on the dial, the countdown, the key notes.

### Studio kit use and additions

Uses: `FunctionSimulator` (xScale, yScale), `StretchFromAxis` (new, listed in `../checks/maths-a11-kit-needs-g-s.md`), `CircleTracer` (planned, w24), `ScreenApp`, `StudioPlot`, `ExpressionSlot`, `ParameterSlider`, `LiveReadoutBoard`, `PlateImg`, `HandTag`, the g01 `WorkingBoard` parts, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`StretchFromAxis`** (new, as listed): the fixed axis drawn bold in its role colour; sampled points carried along arrows proportional to their distance from it; the parent kept as a ghost. Check: every image point is the parent point with one coordinate multiplied by the factor.
2. **Copier copy slide** (small): a coded page that scales from its corner by (sx, sy) and slides out beside the plate. Check: the copy's curve matches y = (x/sx)² scaled by sy within 2 px at five points.

## Codex asset brief (Maths A11 G03, a photocopier and an oven dial; also g02's and g04's frames)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-g03.md`, route entry math-a11-g03. Paint after the learning review and maths check pass and root gives the go-ahead, and before the g02 build (g02's final frame shows the photocopier) and the g03 build (its final frame shows the oven). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma11-office-printer-v1.png`; no text, numbers, labels, logos, brand names, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-photocopier-v1.png` (1400 × 1200 px): a compact office photocopier seen from the front at a slight angle, with a closed scanner lid on top, a **blank** control panel at the front right (a plain rectangular screen area and a few round buttons, no symbols), and an output tray at the side holding one sheet of white paper. Grey and off-white. Sidecar JSON: the panel screen's four corners (code writes "Zoom 200%" and "Width 200% · Height 100%") and the output tray's top edge (where coded copies slide out).
2. `ma11-oven-dial-v1.png` (1400 × 1000 px): the upper front of a kitchen oven in brushed steel, showing the top of the glass door and one large round temperature dial on the panel above it, its face **blank** (no marks or numbers), with a short pointer ridge. Sidecar JSON: the dial face's centre and radius, and the pointer's angle at rest (code writes the °F marks and turns the pointer).

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-g03-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the crosswalk JSON exactly.
3. Confirm every horizontal dilation is described as from the y-axis and every vertical one as from the x-axis, each with its factor; that f(3x) is called factor ⅓; and that no screen text uses the letters k or l for a factor.
4. Confirm no claim that a one-way dilation keeps a graph's proportions (S11-G02), and that the enlargement scene uses equal axis units.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, that scene 1 opens on g02's final frame and that scene 12 matches g04's opening frame.

## YouTube metadata (draft)

Title: Stretching Graphs: Dilations, x/k and y/l | Year 11 Maths Advanced

(Title length: 66 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/graph-transformations/lesson03.sa.html

A photocopier can double a page's width, its height, or both. Each setting is a dilation of the graph on the page. See why replacing x by x/2 stretches a graph from the y-axis and replacing y by y/2 stretches it from the x-axis, why y = f(3x) is squashed to a third of its width, how to find images of points, and why the same factor both ways enlarges or reduces a graph without changing its shape. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Graph transformations.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Describe a horizontal dilation as a stretch from the y-axis and a vertical dilation as a stretch from the x-axis"
"Establish using graphing applications that replacing x by x/k in the equation of a graph corresponds to a horizontal dilation of a graph by a factor of k, that replacing y by y/l corresponds to a vertical dilation by a factor of l, and determine the effects on the graph when the magnitude of the dilation factor lies between 0 and 1"
"Establish, using graphing applications, replacing x by x/k and replacing y by y/k in the equation of a graph corresponds to a dilation by a factor of k, that is, an enlargement of the graph when k > 1 and a reduction of the graph when 0 < k < 1"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3

Builds on: Translating and reflecting graphs; circles centred at the origin. Next: Why the order of transformations matters.

#Year11Maths #MathsAdvanced #GraphTransformations #HSCScience

## Open decisions

- **1. No k or l on screen (root).** The syllabus letters x/k and y/l are kept out of learner copy because the Year 12 form uses k for the vertical factor (see Decisions, Notation). If root prefers the syllabus letters on screen, scenes 2, 3 and 7 gain one grey chip each ("replace x by x/k: factor k"), and g04 must then warn that k changes role.
- **2. Width-only copier setting (learning review).** Independent X and Y zoom is real on many office copiers but not on every home printer. Check that "a setting that stretches only the width" reads as believable; the fallback is a design app's "stretch to fill" (pack anchor 3), with no other change.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from g01, g02, w24 and w15; check that "the new graph at x does what the old did at x/2" makes "÷ inside, wider" feel caused; that "3x = x ÷ ⅓" is heard and seen before attempt 2 needs it; that the enlarged parabola landing on y = x²/2 is read as "same shape"; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
