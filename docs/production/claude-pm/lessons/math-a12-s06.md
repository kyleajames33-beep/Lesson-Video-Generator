# Maths A12 S06: How do mode, median and quartiles differ for a density? The peak of f, solving F(x) = p, and why the most likely value is not the middle (design)

Status: Revision 3 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 2 (4 Nov 2026, brief 162 repairs). Not voiced (no `math-a12-s06/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the bar needs it. Earlier text is in git history (`git log -p -- docs/production/claude-pm/lessons/math-a12-s06.md`).

Narration 6,036 characters, 16 scene headings, about 536 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: sixth video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 58), after s05 (density and CDF) and before s07 (the continuous uniform model). Revision 3 follows `math-a12-d01.md` (Revision 6) and `../maths-visual-standard.md`, on the maths studio kit: painted plates carry the everyday anchor (a round choc-chip cookie, with X the distance of a random chip from the centre); graphs, areas, rings, tables and algebra stay coded. Site lessons read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson09.sa.html` (card 06, mode; problem 3 steps 3 and 4; trap 02; practice Q3), SHA256 `8724957cdae4920681fb1c1d0c2644a2db5d674edc47af98d4ab7009133dadf7`, and `lesson10.sa.html` (card 02 quantiles, problem 1 mode and median, Q2 lifetimes, traps 02 and 03), SHA256 `bb363c20ce881f9f2da10030a32abddca9c9bb5221f05ad4a1eb1f15817f1579`. The site repo is no longer on this machine (root decision 35): every site worked example is kept exactly as recorded below; Codex confirms them against the live site. Route entry: none yet (draft in Decisions).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" or "MAV-12-07" label anywhere; painted plates for real objects, coded graphs and algebra; no people, hands or faces; one reasoning stage at a time; worked examples in the g01 layout with framed answers and crossed slips; "Pause here to answer." then a 10 s countdown with the full worded question and a picture on screen; givens underlined in the feedback; brief feedback with one crossed mistake; original HSC-style questions; five short key-note bullets with the framed card; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Exact surds in the algebra (2√2, 2√3, ∛4, √3 − 1), decimals only in grey readouts; roots outside the domain rejected aloud; the d10 global-extremum method recalled, not re-taught.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci189487ff`: "Find the mode from a given probability density function"
- `ci9d3ce54c`: "Use a cumulative distribution function to calculate the median and quartiles for a continuous random variable"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s05 Revision 3's handoff frame (teal f(x) = 3x(2 − x)/4 on [0, 2], "?" over the hump, an unlabelled dashed line, chip "Next: the most likely value and the middle"). Contrasts the symmetric hump (mode and median both 1) with the cookie's distance density f(x) = x/8 on [0, 4] (mode 4, median 2√2; the site's card 06 and lesson 10 card 02 example, numbers unchanged, given the cookie meaning) as the hook; explains the mode as the peak of f with a sliding window of fixed width, finds it by calculus (site lesson 9 problem 3 steps 3 and 4: mode 1, f(1) = 3/4) and at an endpoint (x/8: mode 4), with the flat case in one sentence (`ci189487ff`); explains the median as half the area and solves F(m) = ½ for x/8 (m = 2√2, rejecting −2√2), the quartiles 2 and 2√3 as equal-area rings on the cookie, and the trap of solving f(x) = ½ (`ci9d3ce54c`); works site lesson 10 problem 1's mode, median and lower quartile (3x²/8 on [0, 2]); applies both to the site's component-lifetime context (Q2, numbers unchanged). Stops at mode, median and quartiles. Not taught: the mean and variance of a density (s08; one grey chip "the mean is a third kind of middle: a later video"); the uniform model (s07; the flat case is one sentence and the handoff question); percentiles beyond quartiles (one grey tag).

## Decisions

### Revision 3 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a choc-chip cookie, and the distance of a random chip from its centre (painted plates, live).** A round cookie of radius 4 cm with its chips spread evenly over its area. Pick a chip at random; X is its distance from the centre in centimetres. Then P(X ≤ x) is the fraction of the cookie's area within x of the centre: πx²/(π × 4²) = x²/16, so F(x) = x²/16 and f(x) = x/8 on [0, 4], exactly the site's own example. The cookie makes the lesson's surprise visible: the most likely distance is at the very edge (a thin ring near the edge holds more cookie than a thin ring near the centre), yet the circle of radius 2√2 ≈ 2.83 cm, not 2 cm, holds half the cookie; and the quartile circles at 2, 2.83 and 3.46 cm cut it into a centre disc and three rings of equal area that get thinner towards the edge. Cooking is on the owner's everyday list; the cookie is not used anywhere in `checks/root-decisions-maths-redesign.md` (i02's sourdough starter is a rising-volume context) or in the f01 to f08 redesigns.
- **Why not the suggested contexts.** Phone battery life overlaps i03 (a phone charging) and f's used-phone price; commute times overlap s07's bus waits. Neither gives a density whose formula carries the cause; the cookie derives x/8 from area in one line.
- **Idealising assumptions (author notes, not learner copy).** (i) The cookie is a flat disc of radius 4 cm and chips are spread evenly over its area (each chip treated as a point). (ii) "Pick a chip at random" means each chip equally likely, so X follows the area model. (iii) The 60 chips drawn are one stored random sample (author note h), so the ring counts are illustrative; the narration's "half" and "quarter" are the model's.
- **Join with s05 (fixed).** Scene 1 opens on s05 Revision 3's final frame exactly.
- **Join with s07 (fixed).** Scene 15's frame and narration are unchanged (a flat blue segment on [1, 5] at an unlabelled height, "?" chips, small empty F axes, "Next: a flat density"); s07 opens on it.
- **Simulations (standard item 3).**
  1. `ChipScatter` (scenes 1, 5, 6): 60 painted chip sprites land one by one at stored random positions on the painted cookie; a coded circle can be dragged out from the centre with a live readout "chips inside: n of 60" and "fraction of the cookie inside: x²/16"; a coded histogram of the chips' distances (four unit-wide classes, live counts 4, 11, 21, 24) grows beside it and is overlaid by the density x/8, which climbs to the edge.
  2. `SlidingWindow` (scene 2): a window of width 0.2 slides along the hump with its captured area as a live readout, largest under the peak.
  3. `QuantileReader` (scenes 5, 6, 8, 9; feedback 2): an amber line at height p runs across to F and drops to the axis while the matching area fills under f and, for the cookie, the matching circle draws on the plate.
- **Colour roles (fixed for the whole video).**
  - **the density f: teal** (`MATH_TEAL`), lower panel;
  - **the CDF F: violet** (`MATH_GRADIENT`), upper panel;
  - **the mode marker: a blue triangle** (`MATH_BLUE`) under the peak;
  - **median and quartile lines and circles: amber** (`MATH_AMBER`); quarter-areas alternate pale amber and pale teal;
  - **rejected roots: open red markers**; **answer: green**; **mistake: red**, crossed slips only; ink algebra.
- **Large type, handwriting, layout.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; text above y = 950. The cookie plate is 560 px across when it carries the idea. `HandTag`: "outer rings hold more cookie", "half the cookie", "top of f", "check the ends", "go across from ½", "equal-area rings", "height, not area", "low density: more width", "half fail early".
- **Stage changes (standard item 2):** the hump, then the cookie with its chips and the half-cookie circle (1); the sliding window on the hump (2); the tangent flattening (3); the endpoint table (4); the cookie and paired F and f with the half circle (5); the equal-area rings (6); the trap (7); the 3x²/8 board (8); the lifetime board (9); the framed card (10); question cards with pictures (11 to 14); the flat density (15); key notes (16).
- **Worked examples (g01 layout, standard item 7).** Scene 3 (task strip "Find the mode", givens with the density and its interval, rows at 52 px, green framed "mode = 1"); scene 5 (green framed "m = 2√2", red slip "m = ±2√2" crossed for keeping the negative root); scenes 8 and 9 (framed modes and medians). Feedback scenes carry a `GivensStrip`, framed answers and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Mode: the top of f. Median and quartiles: go across from F." with the key "Median: F(m) = ½" and a cookie badge (the 2.83 cm circle, "half the cookie").
- **Visual surprise (standard item 9).** The most likely distance is the edge, but the half-cookie circle sits at 2.83 cm, well past 2 (1, 5); the four equal-area pieces of the cookie get thinner towards the edge (6); the f = ½ trap lands exactly on the cookie's rim (7).
- **Question cards (full text and a picture).** A1: the worded question with empty axes x −0.2 to 1.2, y 0 to 2 (no curve); A2: the worded question with empty paired axes "F" and "x" (no curve, no lines).
- **Narration (not voiced).** Scene 1 brings in the cookie (497 to 688); scene 4 names the cookie's edge (358 to 394); scene 5 derives F from the cookie's area (439 to 566); scene 6 shows the quartiles as equal-area rings (443 to 555). Scenes 2, 3 and 7 to 16 keep their Revision 2 text.

### Kept from Revisions 1 and 2

- **Learner question kept (outline).** "How do mode, median and quartiles differ for a density?" The answer, built in order: the most likely value and the middle can be far apart (1); the mode is where f is highest, because a fixed narrow window catches the most probability there (2); it is a global maximum of f, found by calculus with the ends checked (3, 4); the median has half the area below it, so it solves F(m) = ½ (5); the quartiles solve F = ¼ and F = ¾, and quarters are narrower where f is higher (6); the median comes from F, not f (7); a second density shows the median and mode apart (8); in context, the gap says something real (9).
- **Mode from f, not F (site trap).** F only builds up probability, so its top doesn't tell you where f peaks.
- **Mode by calculus (site lesson 9 problem 3, steps 3 and 4).** f(x) = (6x − 3x²)/4, f′(x) = (6 − 6x)/4 = 0 at x = 1, f″ = −3/2 < 0, mode 1, f(1) = 3/4. Symmetric hump: median 1 too (F(1) = ½).
- **Mode at an endpoint (site card 06).** f(x) = x/8 on [0, 4]: f′ = 1/8, never 0; mode 4. Candidate table of two rows (x = 0: f = 0; x = 4: f = ½). The flat case: "no single mode" in one sentence.
- **Median and quartiles (site lesson 10 card 02, numbers unchanged).** F(x) = x²/16; m = 2√2 (reject −2√2); Q₁ = 2; Q₃ = 2√3. Quarter widths 2, 0.83, 0.64 and 0.54 (grey). IQR only as a grey readout (≈ 1.46).
- **Trap: f(x) = ½ (site lesson 10 trap 02).** For x/8 it gives x = 4, the end of the domain (the cookie's rim). Crossed.
- **Second example (site lesson 10 problem 1, steps 1 and 2 only).** 3x²/8 and F(x) = x³/8 on [0, 2]: mode 2, median ∛4 ≈ 1.59, Q₁ = ∛2 ≈ 1.26. The median's cause told directly: the low left part needs a lot of width to collect half the probability.
- **Context (site lesson 10 Q2, numbers unchanged).** Lifetime L hours, f(l) = 3(4 − l)²/64, F(l) = 1 − (4 − l)³/64 on [0, 4]: mode 0, median 4 − ∛32 ≈ 0.83 h ≈ 50 min.
- **Attempts (original).** (A1) f(x) = 12x²(1 − x) on [0, 1]: mode 2/3. Crossed: "mode = 0". (A2) F(x) = (x² + 2x)/8 on [0, 2]: Q₁ = √3 − 1. Crossed: "x = −1 ± √3".
- **Mistake scene:** none separate. "Maximise F for the mode" (2); "f′ = 0 always gives the mode" (feedback 1 crossed); "forget the ends" (4); "solve f(x) = ½ for the median" (7, crossed); "keep both roots" (5 crossed; feedback 2 crossed); "the mode is the middle" (1, 8).
- **Site sources used:** lesson 9 card 06, problem 3 steps 3 and 4, trap 02, Q3 (idea only); lesson 10 card 02, problem 1 steps 1 and 2, Q2, traps 02 and 03. Not used: lesson 10 cards 03 onwards (mean and variance, s08).
- **Site corrections (for the log):** (1) lesson 10 card 02's existence sentence: suggest "such a value always exists (and is unique when f > 0 there)"; (2) lesson 9 card 06 mixes "value" and "region"; (3) no numerical errors found.
- **Entry knowledge (draft route):** s05 (f = F′; probability as area; F from f; f = 3x(2 − x)/4); s04 (F never decreases, 0 to 1); d09 (stationary points, second-derivative test); d10 (global maximum: compare stationary points and ends); Year 11 quadratics, surds and cube roots; Stage 5 area of a circle.
- **Learner-visible vocabulary:** mode (scene 2); median (scene 5); lower and upper quartiles (scene 6); interquartile range (grey readout only).
- **Draft route entry (for the route file):** id `math-a12-s06`; playlistOrder 58; syllabusActionIds `ci189487ff`, `ci9d3ce54c`; start "s05's handoff: the hump 3x(2 − x)/4, then a cookie's chip distances"; stop "Mode as the peak of f (sliding window reason), by calculus and at an endpoint; flat has no single mode; median and quartiles by F(x) = p with roots outside the domain rejected; the f(x) = ½ trap. No mean or variance."; next "math-a12-s07: the continuous uniform density".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Hump: f(x) = 3x(2 − x)/4 on [0, 2]; F(x) = (3x² − x³)/4; F(1) = ½; f(1) = 3/4. Window areas (width 0.2): 0.9 to 1.1: 0.1495; 0.1 to 0.3: 0.0535.
  (b) Cookie, x/8 on [0, 4]: F(x) = x²/16 = (area within x)/(area of cookie) = πx²/16π; f′ = 1/8; mode 4; m = 2√2 ≈ 2.828; Q₁ = 2; Q₃ = 2√3 ≈ 3.464; IQR ≈ 1.464. Quarter widths 2, 0.828, 0.636, 0.536. Trap: x/8 = ½ gives x = 4 (the rim). A disc of radius 2 holds 4/16 = ¼ of the cookie, not half.
  (c) 3x²/8 on [0, 2]: F(x) = x³/8; mode 2, f(2) = 3/2; m = ∛4 ≈ 1.587; Q₁ = ∛2 ≈ 1.260.
  (d) A1: f′(x) = 12x(2 − 3x), zero at 0 and 2/3; f(2/3) = 16/9; mode 2/3.
  (d2) Lifetime: F(l) = 1 − (4 − l)³/64; mode 0, f(0) = 3/16; m = 4 − ∛32 ≈ 0.8252 h ≈ 49.5 min.
  (e) A2: x² + 2x − 2 = 0, x = −1 ± √3; Q₁ = −1 + √3 ≈ 0.732; −1 − √3 rejected.
  (f) Pronunciations: "two root two"; "two root three"; "the cube root of four"; "root three minus one"; "F of m equals one half"; "pi x squared over pi times sixteen".
  (g) Windows: hump x −0.3 to 2.3, f y 0 to 1, F y 0 to 1.1; x/8 on x −0.3 to 4.3, f y 0 to 0.6, F y 0 to 1.1; 3x²/8 on x −0.2 to 2.2, f y 0 to 1.6; flat density on x 0 to 6, y 0 to 0.5.
  (h) Chips for `ChipScatter`: 60 points uniform over the disc of radius 4 (Python 3.14 `random.Random(708)`, rejection sampling from the square, stored as data). Counts by quarter ring (0 to 2, 2 to 2√2, 2√2 to 2√3, 2√3 to 4): 15, 15, 15, 15. Counts by unit ring (0 to 1, 1 to 2, 2 to 3, 3 to 4): 4, 11, 21, 24 (model 3.75, 11.25, 18.75, 26.25). Inside 2√2: 30 of 60.

Main question: *Pick a chip at random from a cookie. Its most likely distance from the centre is right at the edge, yet half the chips are within 2.83 cm of the centre. Why is the mode the peak of f, why do the median and quartiles come from solving F(x) = ½, ¼ and ¾, and when are they far apart?*
Entry knowledge (s05 density and CDF; d09 and d10 maxima on closed intervals; Year 11 quadratics and surds; area of a circle).
Stops after: the mode from f (interior and endpoint), the median and quartiles from F with roots rejected. No mean, variance or skew ordering.
Handoff: math-a12-s07: a flat density on [1, 5] at an unknown height (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): f teal; F violet; the mode marker a blue triangle; median and quartile lines and circles amber; quarter-areas alternating pale amber and pale teal; rejected roots open red markers; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY"; scene headings in the hand font, 44 px. Exact surds in the algebra; decimals only in grey readouts.

### 1. hook: the most likely value or the middle?
> Last video ended here, with this density. Where is X most likely to be, and where's the middle, with half the probability on each side? For this symmetric hump, both answers are one, right in the centre. Now a cookie, four centimetres in radius, with its choc chips spread evenly. Pick a chip at random, and let X be its distance from the centre. Its density is x over eight, from zero to four. It climbs the whole way, because the outer rings hold more cookie. So the most likely distance is right at the edge, at **four**. Yet half the chips lie within about two point eight three centimetres of the **centre**. So the most likely value and the middle can be far apart. How do we find each one?

Visual: opens on s05 Revision 3's last frame exactly (teal f(x) = 3x(2 − x)/4 on [0, 2], "?" over the hump, an unlabelled dashed line, chip "Next: the most likely value and the middle"). Heading writes on: "Mode, median and quartiles of a density". On "both answers are one" the "?" settles at the peak (a blue triangle at x = 1) and the dashed line slides to x = 1; the two halves tint, grey readout "½ | ½". On "cookie" the hump shrinks to a 300 px card at the top left (tag "symmetric") and the painted cookie (`ma12-cookie-v1`, 560 px across) lands at the left; `ChipScatter` drops 60 painted chips (`ma12-choc-chip-v1`, 26 px each) one by one at their stored positions (about 3 s), tag "chips spread evenly". On "distance from the centre" a coded ruler line runs from the centre to one chip, label "X cm". At the right the graph f(x) = x/8 on [0, 4] draws in teal (700 × 440 px) over a blue histogram of the 60 chips' distances (classes 0 to 1, 1 to 2, 2 to 3, 3 to 4; counts 4, 11, 21, 24, labelled "illustrative sample"). On "outer rings" a thin ring near the centre and a thin ring near the edge of the cookie tint, the outer one visibly larger, hand tag "outer rings hold more cookie". On "four" a blue triangle marks x = 4, tag "highest density: the edge". On "centre" an amber circle grows from the cookie's centre to radius 2.83 cm, readout (52 px) "chips inside: 30 of 60", hand tag "half the cookie"; on the graph the area from 0 to 2√2 fills pale amber, grey readout "½ of the area", and a dashed line marks 2.83. A grey chip at the bottom right: "the mean is a third kind of middle: a later video".

### 2. the mode is the peak of f
> The mode is the value where the density is highest. Here's why that's the most likely place. Slide a narrow window, two tenths wide, along the hump. It catches the most area, and so the most probability, near the top of this symmetric hump. Near one, it catches about zero point one five, and near zero point two, about zero point zero five. So the mode is at the peak of f, not of **F**. F only builds up probability, so its top doesn't tell you where f peaks.

Visual: clear change back to the hump (author note g), teal f lower (1,000 × 340 px) and violet F upper (1,000 × 320 px), the cookie badge (200 px) at the top right. `SlidingWindow`: an amber window of width 0.2 slides from x = 0 to 1.8 and back to 1; its captured area reads live (52 px, grey: "≈ 0.054" at [0.1, 0.3], "≈ 0.150" at [0.9, 1.1]), largest under the peak; hand tag "top of f". On "F" the upper F glows at its right-hand end (2, 1) and a red slip "maximise F? always the right end" writes and is crossed.

### 3. finding the mode by calculus
> Finding the peak is a maximum problem, like the ones you've solved before. Write f as six x minus three x squared, over four. Its derivative is six minus six x, over four, which is zero at x equals **one**. The second derivative is minus three halves, which is negative, so that's a maximum. The mode is one, where the density is three **quarters**. And because this hump is symmetric about one, half the area lies on each side, so the median is one as well. F of one is a half, which checks it.

Visual: g01 board (F fades; f fills the left at 1,000 × 560 px). Task strip, 44 px, "Find the mode." Givens card: "f(x) = 3x(2 − x)/4 for 0 ≤ x ≤ 2; f(x) = 0 elsewhere". A tangent slides along the hump and flattens at x = 1 with the readout "gradient 0" on "one". Rows (52 px current): "f(x) = (6x − 3x²)/4"; "f′(x) = (6 − 6x)/4 = 0 ⇒ x = 1"; "f″(x) = −3/2 < 0: maximum"; on "quarters" the green frame "mode = 1, f(1) = 3/4". On "symmetric" the two halves tint either side of x = 1 and a grey row "F(1) = (3 − 1)/4 = ½: median 1" ticks.

### 4. a mode at an endpoint
> But a density doesn't always have a stationary point. For the cookie, x over eight, from zero to four, the derivative is one eighth, and it's never zero. The density keeps climbing, so its greatest value is at the right-hand end, the edge of the cookie. The mode is **four**. So, just like any global maximum, check the endpoints as well. And if a density is completely flat, it has no single **mode**.

Visual: clear change to f(x) = x/8 on [0, 4] (teal, 1,000 × 520 px) with the cookie (360 px) beside it, its rim glowing blue. Right column: "f′(x) = 1/8 ≠ 0: no stationary point". A candidate table with two end rows: "x = 0: f = 0" and "x = 4: f = ½" (highlighted on "four"); green frame "mode = 4", hand tag "check the ends". Grey chip "d10: check stationary points and ends". On "mode" (last) a small inset: a flat segment, tag "flat: no single mode (a later video)".

### 5. the median: half the area, from F
> Now the middle. The median, m, is the value with half the probability below it. That's an area on f, but F already holds the areas. So we solve F of m equals one half. For the cookie, F of x is the fraction of the cookie within x of the centre, pi x squared over pi times sixteen, which is x squared over sixteen. Integrating x over eight from zero gives the same. So m squared over sixteen is a half, m squared is eight, and m is two root two, about two point eight **three**. The negative root, minus two root two, is outside zero to four, so we reject it, and say so.

Visual: the paired view (author note g): violet F(x) = x²/16 upper, teal f = x/8 lower, the cookie (400 px) at the left. Right column, 44 px: "median m: F(m) = ½". On "F already holds the areas" `QuantileReader`: an amber line at height ½ on F runs across to the curve and drops to the x-axis, while the area under f fills from 0 to the same x. On "fraction of the cookie" a coded circle on the cookie grows with the line's x, readout "fraction inside = x²/16"; rows (52 px): "F(x) = πx²/(π × 4²) = x²/16" and, in grey, "= ∫₀ˣ t/8 dt". Rows "m²/16 = ½ ⇒ m² = 8 ⇒ m = ±2√2"; on "three" the green frame "m = 2√2 (≈ 2.83 cm)" and the cookie's amber circle settles at radius 2.83, "half the cookie". On the last sentence a domain strip [0, 4] with −2√2 as an open red marker outside it, tag "outside the domain: rejected", and a red slip "m = ±2√2" is crossed, caption "one root is outside [0, 4]".

### 6. the quartiles
> The quartiles split the probability into quarters. The lower quartile solves F equals one quarter, and the upper quartile solves F equals three quarters. Here, the lower quartile is two, and the upper quartile is two root three, about three point four **six**. Now look at the cookie. Circles at two, two point eight three and three point four six cut it into four pieces of equal area, and each holds fifteen of our sixty chips. The pieces get narrower towards the edge, because the density is higher there. A quarter of the probability fits into less **width**.

Visual: camera continue. `QuantileReader` adds amber lines at ¼ and ¾. Rows (52 px): "F(Q₁) = ¼ ⇒ Q₁² = 4 ⇒ Q₁ = 2"; "F(Q₃) = ¾ ⇒ Q₃² = 12 ⇒ Q₃ = 2√3" with the green frame "Q₁ = 2, Q₃ = 2√3 (≈ 3.46)" on "six"; grey "F(x) = p works for any p". On "look at the cookie" the cookie enlarges to 560 px and amber circles draw at 2, 2.83 and 3.46 cm; the centre disc and three rings tint alternately pale amber and pale teal, each labelled "¼", and live readouts count "15", "15", "15", "15" chips, hand tag "equal-area rings". On "narrower" width brackets under the f graph's four pieces read in grey "2", "0.83", "0.64", "0.54". On "width" the outermost ring pulses. A small grey readout "IQR = Q₃ − Q₁ = 2√3 − 2 ≈ 1.46".

### 7. a trap: the median comes from F
> One trap to avoid. The median comes from F, not f. Setting x over eight equal to a half gives four, which is just the end of the domain. The height of the density has nothing to do with half the **area**.

Visual: camera continue. A chip "f(m) = ½ ⇒ m/8 = ½ ⇒ m = 4" writes; a dashed line at height ½ on the lower f panel meets f at x = 4 and the cookie's rim glows. On "area" the chip is crossed in red (caption "height, not area"), and the correct "F(m) = ½: m = 2√2" glows with its half-cookie circle.

### 8. a second density: 3x squared over 8
> Try one more. A density is three x squared over eight, from zero to two, and its F is x cubed over eight. The density keeps increasing, so the mode is at the end, at **two**. For the median, x cubed over eight equals a half, so x cubed is four, and m is the cube root of four, about one point five **nine**. In the same way, the lower quartile is the cube root of two, about one point two six. The median is well left of the mode. The density is low near zero, so it takes a lot of width there to collect half the probability.

Visual: clear change to the g01 board (new case). Task strip "Find the mode and the median." Givens card: "f(x) = 3x²/8 and F(x) = x³/8 for 0 ≤ x ≤ 2" (site lesson 10 problem 1). Paired view (author note g) solid from the first frame. Rows (52 px): "f′(x) = 3x/4 > 0 on (0, 2]: f increasing"; on "two" the green frame "mode = 2" with a blue triangle at x = 2 (f(2) = 3/2, grey). Row "m³/8 = ½ ⇒ m³ = 4 ⇒ m = ∛4" with the green frame "m = ∛4 (≈ 1.59)" on "nine", and the amber line at ½; then "x³ = 2 ⇒ Q₁ = ∛2 (≈ 1.26)" with a line at ¼. On the last sentence the area from 0 to ∛4 fills pale amber and a width bracket "≈ 1.59 wide for half" sits under it, against "≈ 0.41" for the other half, hand tag "low density: more width".

### 9. in context: component lifetimes
> Here's why the difference matters in a real problem. A component's lifetime, L hours, has density three times four minus l, all squared, over sixty four, for l from zero to four. That density is highest at zero and falls the whole way, so the mode is **zero**. Its F is one minus four minus l, cubed, over sixty four. Setting F equal to a half gives four minus m, cubed, equals thirty two. So m is four minus the cube root of thirty two, about zero point eight three **hours**. Half of these components fail in under fifty minutes, even though some last up to four hours. The most likely lifetime and the median answer different questions.

Visual: clear change to the g01 board (new case). Task strip "Find the mode and the median lifetime." Givens card: "f(l) = 3(4 − l)²/64 and F(l) = 1 − (4 − l)³/64 for 0 ≤ l ≤ 4" (site lesson 10 Q2, numbers unchanged). Paired view on l from −0.3 to 4.3 (f y 0 to 0.25, F y 0 to 1.1). On "zero" a blue triangle at l = 0 (f(0) = 3/16, grey), row "f′(l) = −6(4 − l)/64 < 0 for l < 4: f decreasing; mode 0" in a green frame. Rows "1 − (4 − m)³/64 = ½ ⇒ (4 − m)³ = 32 ⇒ m = 4 − ∛32"; on "hours" the green frame "m ≈ 0.83 h", with the amber line at ½. On "fifty minutes" a grey readout "0.83 h ≈ 50 min", and the long thin tail of f out to 4 tints pale amber, hand tag "half fail early; some last 4 h".

### 10. memory aid
> Here's a way to keep them apart. The mode is the top of f. The median and quartiles go across from F. For the median, go across from one half, and down to the **axis**.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px). Main lines, hand font 56 px: "Mode: the top of f." (the blue triangle at a small f's peak pulses) and "Median and quartiles: go across from F." Key, 40 px: "Median: F(m) = ½". Badge at the left: the cookie (220 px) with its amber 2.83 cm circle, "half the cookie". On "axis" a small amber line runs across from ½ on a small violet F and down. Hold about 2 s.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A density is twelve x squared, times one minus x, for x from zero to one, and zero elsewhere. Find the mode, and justify your answer. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A continuous random variable X has probability density function f(x) = 12x²(1 − x) for 0 ≤ x ≤ 1, and f(x) = 0 elsewhere. Find the mode of X, justifying your answer." Picture slot: empty axes x −0.2 to 1.2, y 0 to 2, labelled "f(x)" (no curve). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 1 (brief)
> Expand f, and its derivative is twenty four x minus thirty six x squared, or twelve x times two minus three x. That's zero at x equals zero, and at two **thirds**. But f of zero is zero, the lowest value, and f is zero at x equals one too. At two thirds, f is sixteen ninths, its greatest value. So the mode is two **thirds**. Zero is wrong. It's a stationary point, but a **minimum**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "f(x) = 12x²(1 − x)", "0 ≤ x ≤ 1". On "Expand" "0 ≤ x ≤ 1" is underlined; rows (52 px) "f(x) = 12x² − 12x³"; "f′(x) = 24x − 36x² = 12x(2 − 3x) = 0 ⇒ x = 0 or x = 2/3" (on "thirds"). A candidate table: "x = 0: f = 0 (stationary, end)", "x = 2/3: f = 16/9", "x = 1: f = 0 (end)"; the card's axes draw the teal hump peaking at (2/3, 16/9). On "thirds" (second) the green frame "mode = 2/3". On "minimum" a red slip "mode = 0" writes and is crossed, caption "f′ = 0 at a minimum". Hold about 1 s.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A continuous random variable has F of x equals x squared plus two x, all over eight, for x from zero to two. Find the lower quartile exactly. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (x² + 2x)/8 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find the exact value of the lower quartile of X." Picture slot: empty axes x −0.5 to 2.5, y 0 to 1.2, labelled "F(x)" (no curve, no lines). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 14. feedback 2 (brief)
> Solve F of x equals one **quarter**. So x squared plus two x equals two. Complete the square: x plus one, all squared, is three, so x is minus one, plus or minus root three. Minus one minus root three is outside zero to two, so reject it. The lower quartile is root three minus one, about zero point seven **three**. Keeping both roots is wrong. Only one is in the **domain**.

Visual: the card shrinks to the top. `GivensStrip`: "F(x) = (x² + 2x)/8", "0 ≤ x ≤ 2", "lower quartile". On "quarter" "lower quartile" and "0 ≤ x ≤ 2" are underlined; the card's axes draw violet F and an amber line at ¼ runs across and down. Rows (52 px) "(x² + 2x)/8 = ¼ ⇒ x² + 2x = 2"; "(x + 1)² = 3 ⇒ x = −1 ± √3". A domain strip [0, 2] with −1 − √3 as an open red marker outside, tag "rejected". On "three" the green frame "Q₁ = √3 − 1 (≈ 0.73)". On "domain" a red slip "Q₁ = −1 ± √3" writes and is crossed, caption "one root is outside [0, 2]". Hold about 1 s.

### 15. handoff
> So the mode is the peak of f, and the median and quartiles come from F. Next, a new question. What if a density is completely flat, from one to five? There's no peak at all. How high must it be, and what does its F look like?

Visual: the two memory-card lines show small at the top, then fade on "Next". Board clears to one graph (author note g): a flat blue segment on [1, 5] at an unlabelled height, 0 elsewhere, tag "f(x) = ? for 1 ≤ x ≤ 5", a "?" chip at the y-axis where its height would be; small empty axes above for F with a "?". Chip "Next: a flat density". No height value, no area value, no F formula. Hold about 2 s. This is s07's opening frame (unchanged); scene 16 returns to it after the notes.

### 16. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Mode: where f is greatest. Use f, never F.
- Find it: solve f′(x) = 0, confirm a maximum, check the ends.
- Median: F(m) = ½. Quartiles: F(Q₁) = ¼, F(Q₃) = ¾.
- Reject any root outside the domain, and say so.
- Not f(m) = ½: a height is not an area.

Memory aid (framed card, right half of the notes screen, as in scene 10): *Mode: the top of f. Median and quartiles: go across from F.* Key: *Median: F(m) = ½.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s) back to scene 15's frame exactly (the flat segment on [1, 5] at an unlabelled height, the "?" chips and "Next: a flat density"). This is the final frame and s07's opening frame.

## Teaching checks

- **Does it explain causes?** Why the cookie's density climbs: outer rings hold more cookie (1). Why the mode is the peak of f: a fixed window catches the most probability there (2). Why not F: F never decreases (2). Why check ends: the mode is a global maximum (4). Why F(m) = ½: F holds the areas, here the fraction of the cookie (5). Why quarters narrow: higher density packs a quarter into less width, seen as thinner rings (6). Why not f = ½: height is not area (7). Why the median sits left of the mode for 3x²/8: low density needs more width (8). Why the gap matters: half the components fail early (9). Why reject a root: it lies outside the domain (5; feedback 2).
- **Misconceptions addressed:** as listed under "Mistake scene".
- **Visual standard, item by item:** 1 the painted cookie and chips by about 15 s, returning in 2, 4 to 7 and 10; 2 a new stage every 15 to 55 s; 3 `ChipScatter` with live inside-counts, `SlidingWindow`, `QuantileReader`; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards (3, 8, 9), framed answers and crossed slips; 8 framed card and five short bullets; 9 the half-cookie circle at 2.83 cm, the equal-area rings thinning to the edge, the f = ½ trap landing on the rim.
- **One idea at a time:** one density per scene in 2 to 4; one quantile per sentence in 5 and 6; the trap (7) alone; the second example (8) and the context (9) each clear the board.
- **Response opportunity:** two unseen HSC-style tasks with every condition visible and a picture each, 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 29 s and 28 s.
- **Avoided double teaching:** stationary points and the second-derivative test (d09) and the global method (d10) in one phrase and one chip; F from f (s05) in one phrase; completing the square shown, not taught; the area of a circle (Stage 5) used in one row.
- **Syllabus coverage:** `ci189487ff` (2 to 4, 8, 9; A1; key notes 1, 2); `ci9d3ce54c` (3, 5 to 9; A2; key notes 3 to 5).
- **Out of scope by design:** mean, variance and skew ordering (s08); the uniform model (s07); percentiles other than quartiles.

## Practice questions and model answers

**Attempt 1 (scene 11; original, HSC style, 2 marks suggested, not an official marking scheme).** "A continuous random variable X has probability density function f(x) = 12x²(1 − x) for 0 ≤ x ≤ 1, and f(x) = 0 elsewhere. Find the mode of X, justifying your answer."
Model answer: f′(x) = 24x − 36x² = 12x(2 − 3x) = 0 at x = 0 or x = 2/3. Compare f(0) = 0, f(2/3) = 16/9, f(1) = 0 (or f″(2/3) = −24 < 0). The mode is 2/3. Classic mistake (crossed): "mode = 0".

**Attempt 2 (scene 13; original, HSC style, 2 marks suggested).** "A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (x² + 2x)/8 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find the exact value of the lower quartile of X."
Model answer: F(Q₁) = ¼ gives x² + 2x = 2, (x + 1)² = 3, x = −1 ± √3. Since 0 ≤ x ≤ 2, reject −1 − √3. Q₁ = √3 − 1. Classic mistake (crossed): "−1 ± √3".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hump (s05, site lesson 9 problem 3) | mode 1, f(1) = 3/4; F(1) = ½, median 1 | 1 to 3 |
| Window areas (width 0.2) | ≈ 0.054; ≈ 0.150 | 2 |
| Cookie, x/8 (site card 06, lesson 10 card 02) | radius 4 cm; F = x²/16 = πx²/16π; f′ = 1/8; mode 4 | 1, 4 to 7, 10 |
| Chip sample | 60 chips; quarter rings 15 each; unit rings 4, 11, 21, 24; inside 2√2: 30 | 1, 6 |
| Median of x/8 | m = 2√2 ≈ 2.83 cm; reject −2√2 | 1, 5, 7 |
| Quartiles of x/8 | Q₁ = 2; Q₃ = 2√3 ≈ 3.46; IQR ≈ 1.46 (grey); widths 2, 0.83, 0.64, 0.54 | 6 |
| Trap | x/8 = ½ gives 4 (crossed) | 7 |
| 3x²/8 (site lesson 10 problem 1) | mode 2; m = ∛4 ≈ 1.59; Q₁ = ∛2 ≈ 1.26; halves 1.59 and 0.41 wide | 8 |
| Lifetime (site lesson 10 Q2) | mode 0; m = 4 − ∛32 ≈ 0.83 h ≈ 50 min | 9 |
| A1 | mode 2/3; f(2/3) = 16/9; crossed 0 | 11, 12 |
| A2 | Q₁ = √3 − 1 ≈ 0.73; crossed both roots | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python 3.14 (7 Nov, scratchpad `sims2.py`); Codex to re-check numerically and with a CAS.

- Hump: f′(x) = −3(x − 1)/2; f(1) = 3/4; F(1) = ½; window areas 0.1495 and 0.0535.
- Cookie: πx²/(16π) = x²/16; d/dx = x/8; roots of x²/16 = ¼, ½, ¾: ±2, ±2√2, ±2√3; 2√2 = 2.8284; 2√3 = 3.4641; widths 2, 0.8284, 0.6357, 0.5359; radius 2 holds ¼.
- Chip sample (author note h): quarter-ring counts 15, 15, 15, 15; unit-ring counts 4, 11, 21, 24.
- 3x²/8: ∫₀² = 1; ∛4 = 1.5874; ∛2 = 1.2599; 2 − ∛4 = 0.4126.
- Lifetime: ∫₀⁴ 3(4 − l)²/64 dl = 1; 4 − ∛32 = 0.82520 h = 49.5 min.
- A1: ∫₀¹ 12x²(1 − x) dx = 1; f(2/3) = 16/9; f″(2/3) = −24. A2: −1 + √3 = 0.7321; −1 − √3 = −2.7321.

## Memory aid check

- **"Mode: the top of f. Median and quartiles: go across from F."** Meaning, as said in scene 10: the mode is the x of the greatest value of f (interior peak or an end); a quantile is found by going across from height p on F to the curve, then down, which is solving F(x) = p. Assumptions checked: "the top of f" includes an endpoint maximum (4, feedback 1); a flat f has no single top (4); "across from F" needs F to reach p inside the domain, which holds because F is continuous from 0 to 1 (s04); a root outside the domain is rejected (key note 4). Feedback 2 uses it. Introduced after the causes and the context (2 to 9).
- **Considered, not used:** "MMM: mode, median, mean" ordering aids (need the mean, s08); "median = middle of the domain" (false for every skewed example here, including the cookie's 2.83 against 2).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,036 characters**, 16 scene headings (Revision 2: 5,570 by script, as stated). Characters per scene (1 to 16): 688, 457, 487, 394, 566, 555, 200, 518, 631, 164, 166, 373, 173, 364, 225, 75.

At 13.3 characters per second the speech before the notes is about 448 s. Holds: two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 17 s of settling for the chips landing and the half circle (1), the window slide (2), the tangent (3), the quantile lines (5, 8, 9), the rings (6); the key-notes scene is 45 s (1,350 frames). Total **about 536 s**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 34 s spare.

Reserve trims if the voiced take runs long: scene 5's "Integrating x over eight from zero gives the same." (keep the grey row); scene 9's last sentence (keep the tag). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12s06` (route math-a12-s06). Explainer folder `src/explainer/lessons/math-a12-s06`; build inputs in `docs/production/claude-pm/lessons/math-a12-s06/` (to be created at voicing).

In order (kebab-case; 16 scene headings, all `### N.`): hook-cookie, mode-peak-of-f, mode-by-calculus, mode-at-endpoint, median-from-F, quartiles-rings, median-trap, second-density, lifetime-context, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 57 s | 1 | The hump, then the cookie: chips landing, the half-cookie circle |
| 57 to 132 s | 2 to 3 | Sliding window on the hump; the tangent flattening (g01 board) |
| 132 to 161 s | 4 | The cookie density x/8 and its endpoint mode |
| 161 to 267 s | 5 to 7 | Paired F and f with the cookie: half circle, equal-area rings, the trap |
| 267 to 307 s | 8 | g01 board: 3x²/8 |
| 307 to 355 s | 9 | g01 board: component lifetimes |
| 355 to 369 s | 10 | Framed memory card |
| 369 to 472 s | 11 to 14 | Question cards with pictures and countdowns, then feedback with givens strips and crossed slips |
| 472 to 491 s | 15 | Flat density on [1, 5] (s07 opening frame) |
| 491 to 536 s | 16 | Key notes with the framed card, then a silent return to scene 15 |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s05's last frame continues into scene 1 (same window; the hump then shrinks to a corner and the cookie arrives); 1 to 2 clear change back to the hump; 2 to 3 camera continue; 3 to 4 clear change; 4 to 5 camera continue into the paired view; 5 to 6 to 7 camera continue; 7 to 8 clear change (new case); 8 to 9 clear change (new case); 9 to 10 clear change to the card; attempts and feedback: the card shrinks to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, then a silent return to scene 15's frame.

Holds: attempt-1, attempt-2 (10 s countdown, the ring shown full from "Pause here to answer."); key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12s06-rev3-learning-review.md`, `science_check` = `checks/m-a12s06-rev3-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only): no cookie, biscuit or baked-goods plate exists in any course (searched for cookie, biscuit, cake, chip, choc, oven, tray; the hits are laboratory trays, marble chips and a chicken-pasta tray). The round plates in the courses are Petri dishes and counters, which read as laboratory or game objects.

Need (painted, new; see the Codex asset brief): `ma12-cookie-v1.png` and `ma12-choc-chip-v1.png`.

Coded (studio kit): the chip positions, circles and rings on the cookie, the ruler line, the distance histogram, graphs, areas, the window, quantile lines, candidate tables, domain strips, working boards, question cards and their axes, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `ClassHistogram` (s04 additions), and the studio's `FunctionSimulator` (domain pieces, tangent riding), `PairedDerivativePanel`, `StudioCandidateTable`, `StudioDomainStrip`, `LiveReadoutBoard`, `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot, `GivensStrip` and `QuestionAxes`.

Additions:
1. **`ChipScatter`**: sprites landing at stored positions on a round plate (centre and radius from the plate's sidecar), a growing or fixed circle with a live "inside: n of N" count and an area-fraction readout, ring tinting between given radii with per-ring counts, and a linked histogram of the distances. Check: the counts equal the stored points inside each circle at every frame; the fraction readout equals r²/R².
2. **`SlidingWindow`**: a fixed-width window along f with its area from a supplied primitive (not integrated in the part). Checks: 0.0535 and 0.1495; greatest at left edge 0.9.
3. **`QuantileReader`**: lines at p across to F and down, area filled under f to the same x, optional quarter tinting with width brackets, optional rejected root on a domain strip, and an optional linked circle on a `ChipScatter` plate. Throws unless F(x) = p within 1e-9. Checks: x²/16 at ¼, ½, ¾; x³/8 at ½ and ¼; the lifetime F at ½; (x² + 2x)/8 at ¼.

## Codex asset brief (Maths A12 S06, a choc-chip cookie)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-s06.md`, draft route entry math-a12-s06. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style; at least 8 per cent clear margin; no text, labels, letters, numbers, scale marks, brand names, people, hands, faces, backdrop, plate or tray, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-cookie-v1.png` (2000 × 2000 px): one round, flat, golden-brown baked cookie seen **from directly above** (a true circle, not an ellipse), with a gently cracked, slightly uneven baked surface and a slightly darker rim, and **no chocolate chips** (the chips are separate sprites placed by code). The cookie's edge must be a clean circle: **centre at (1000, 1000) px, radius 840 px** (within 6 px all round). Codex reports the measured centre and radius in `ma12-cookie-v1.json`.
2. `ma12-choc-chip-v1.png` (300 × 300 px): one dark chocolate chip seen from above (a soft, slightly irregular rounded drop, dark brown with a faint highlight), matched in lighting and finish to plate 1 so it looks baked into the surface when placed on it at about 26 px.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 560 px across, a test of 60 chip sprites placed on the cookie at random, the circle measurement and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-s06-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the cookie model: chips spread evenly over the area of a disc of radius 4 cm give F(x) = x²/16 and f(x) = x/8 on [0, 4]; the circle of radius 2√2 holds half the area and the circles at 2 and 2√3 a quarter and three quarters.
3. Confirm every mode is a global maximum of f on its stated domain, and the lifetime F is the integral of the stated density from 0.
4. Confirm every median and quartile solves F(x) = p, with each rejected root outside the domain and the rejection stated.
5. Confirm the scope of every learner-visible general claim: "use f, never F" for the mode; the window claim tied to the hump; "a flat density has no single mode"; the chip counts labelled as an illustrative sample.
6. Confirm no mean, variance or skew ordering is taught (only the grey chip).
7. Confirm both attempt questions carry every demand and condition, each card has its picture, and neither card shows a derivative, an equation F = p or a root.
8. Confirm the opening equals s05 Revision 3's final frame, and scene 15 (unchanged) equals s07's opening frame.
9. Confirm the two syllabus quotes match the crosswalk JSON exactly and no site module label appears in learner copy or metadata.
10. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.

## YouTube metadata (draft)

Title: Mode, Median and Quartiles of a Probability Density Function | Year 12 Maths Advanced

(Title length: 84 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson10.sa.html

Pick a chocolate chip at random from a cookie. Its most likely distance from the centre is right at the edge, yet half the chips lie within 2.83 cm of the centre. The most likely value and the middle are different questions, and they can be far apart. See why the mode is the peak of the density f (a narrow window catches the most probability there), find it by calculus or at an endpoint, and why the median and quartiles come from the cumulative distribution function by solving F(x) = ½, ¼ and ¾, rejecting any root outside the domain. Then see what the gap means for component lifetimes. Includes the classic traps: maximising F instead of f, and solving f(x) = ½ for the median. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, statistics and probability.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Find the mode from a given probability density function"
"Use a cumulative distribution function to calculate the median and quartiles for a continuous random variable"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: Probability density functions (previous video); maxima and minima on a closed interval. Next: The continuous uniform distribution.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. Site link (root).** The mode content is in lesson 9 and the median and quartiles in lesson 10. The description links lesson 10; lesson 9 could be added.
- **2. A2 reuses s04's attempt 2 CDF (learning review).** As in Revision 2; replace with F(x) = (x² + 4x)/12 on [0, 2], Q₁ = −2 + √7, only if the reviewer finds the repeat unhelpful.
- **3. The cookie's area step (learning review).** Scene 5 uses the area of a circle to get F; confirm a student starting Year 12 follows "fraction of the cookie within x" in one row, with the integral as the check.

## Review notes

- Revision 3 (7 Nov) has had no independent review. Next: student learning review (trace from s05, d09 and d10; check that the cookie makes "most likely" and "middle" feel different before any rule; that "outer rings hold more cookie" explains why x/8 climbs; that the sliding window is the evidence for the mode; that the half-cookie circle and the equal-area rings make F(m) = ½ and the narrowing quarters visible; that the f = ½ trap is shown; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The chips landing, the growing circle, the window slide, the tangent and the quantile lines carry the explanation; judge them at playback speed in the voiced preview, not from stills.

## Revision 2 (4 November 2026, brief 162 repairs)

Scene 2's window claim tied to "this symmetric hump"; the F sentence now says F's top doesn't tell you where f peaks. Narration then 5,570 characters.

## Revision 3 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, every site number, the cause chain, both attempts, the memory aid and the s07 handoff are unchanged.

- **Anchor and why:** a round choc-chip cookie, with X the distance of a random chip from the centre. Evenly spread chips give F(x) = x²/16 and f(x) = x/8 on [0, 4], the site's own example, so the cookie shows why the density climbs (outer rings hold more cookie), why the mode is at the edge, and why the half-cookie circle sits at 2.83 cm.
- **Simulations:** `ChipScatter` (60 chips landing, a circle with a live inside-count, equal-area rings with 15 chips each, a live distance histogram); `SlidingWindow`; `QuantileReader` linked to the cookie's circles.
- **Colour roles:** f teal; F violet; the mode marker a blue triangle; median and quartile lines and circles amber; quarter-areas alternating pale amber and pale teal; rejected roots open red; answer green; mistake red.
- **Plates:** new `ma12-cookie-v1` and `ma12-choc-chip-v1` (brief above).
- **Narration changes (not voiced):** scenes 1, 4, 5 and 6 (listed with counts in Decisions). Other scenes keep their Revision 2 text.
- **Counts:** 5,570 → 6,036 characters; about 512 s with the old 60 s notes hold → about 536 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were four notes) beside the framed card.
- **Joins:** opens on s05 Revision 3's teal hump; ends on the flat density on [1, 5], unchanged, which s07 opens on.
- **Kit additions:** `ChipScatter`, `SlidingWindow`, `QuantileReader` (with a linked plate circle).
