# Maths A12 S05: How does a density determine its CDF and probabilities? f(x) = F′(x), probability as area, the two properties of a density, and moving between f and F (design)

Status: Revision 4 (12 Nov 2026): brief 238/240 findings resolved (root). Ready to voice. Previously: Revision 3 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 2 (4 Nov 2026, brief 162 repairs). Not voiced (no `math-a12-s05/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the bar needs it. Earlier text is in git history (`git log -p -- docs/production/claude-pm/lessons/math-a12-s05.md`).

Narration 6,264 characters (Revision 4; was 6,107), 16 scene headings, about 556 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: fifth video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 57), after s04 (P(X = x) = 0 and the CDF) and before s06 (mode, median and quartiles of a density). Revision 3 follows `math-a12-d01.md` (Revision 6) and `../maths-visual-standard.md`, on the maths studio kit: painted plates carry the everyday anchor (a parcel's delivery window, tracked by the chance it has arrived so far); graphs, areas, tables and algebra stay coded. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson09.sa.html` (Probability Density Functions), SHA256 `8724957cdae4920681fb1c1d0c2644a2db5d674edc47af98d4ab7009133dadf7`. The site repo is no longer on this machine (root decision 35): every site worked example is kept exactly as recorded below; Codex confirms them against the live site. Route entry: none yet (draft in Decisions).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" or "MAV-12-07" label anywhere; painted plates for real objects, coded graphs and algebra; no people, hands or faces (no driver is drawn); one reasoning stage at a time; worked examples in the g01 layout with framed answers and crossed slips; "Pause here to answer." then a 10 s countdown with the full worded question and a picture on screen; givens underlined in the feedback; brief feedback with one crossed mistake; original HSC-style questions; five short key-note bullets with the framed card; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Exact values in the algebra (1/8, 7/16, 5/8), decimals only for data or in grey readouts; every density and CDF stated with its interval and "0 elsewhere" or its flat pieces; integrals checked.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json` (U+2061 removed, root decision 56):

- `cicf91daa4`: "Define a probability density function (PDF), f(x) , for a random variable X with cumulative distribution function F(x) as f(x)=F'(x) and recognise that P(a<X<b)=∫_{a}^(b)f(x)dx"
- `ci660140f9`: "Recognise the properties of a probability density function: f(x)≥0 for all x in the domain of f(x), and ∫_{a}^(b)f(x)dx=1 if the domain of f(x) is [a,b] , or ∫_{-∞}^(∞)f(x)dx=1 if the domain of f(x) is all real x"
- `ci7d5b28b0`: "Apply the properties of a probability density function to solve problems and justify conclusions"
- `cic6439f2a`: "Obtain the cumulative distribution function using the formula F(x)=∫_{a}^(x)f(t)dt where f(x) is a given probability density function defined on the interval (a,b]"
- `cibf3988c1`: "Find the probability density function from a given cumulative distribution function"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s04 Revision 4's handoff frame (violet F(x) = x²/9 on x from −1 to 4 with a gentle tangent at 0.5 and a steep one at 2.5, chips "Next: how steeply F climbs" and "?"). Gives F a meaning (the chance a parcel has arrived x hours after nine, in a 9 to 12 window); compares equal-width strips to show steepness as packing; defines f(x) = F′(x) as probability per unit of x, f(x) = 2x/9 on [0, 3] (`cicf91daa4`); rescales s04's reaction-time histogram to a density histogram, so a density of 3.5 per second is allowed; shows P(c < X < d) as the area ∫ f = F(d) − F(c), reproducing s04's 1/3; states and explains the two properties (`ci660140f9`); finds k for k(4 − x) on [0, 4] and P(X < 1) = 7/16 (site problem 1, numbers unchanged, told as a second courier; `ci7d5b28b0`); builds F(x) = (8x − x²)/16 by accumulating f with a dummy variable (site problem 2; `cic6439f2a`); differentiates F(x) = x²(3 − x)/4 to f(x) = 3x(2 − x)/4 (site problem 3 steps 1 and 2 only; `cibf3988c1`). Stops at moving between f and F and computing probabilities. Not taught: the mode (s06); median and quartiles (s06); the continuous uniform model (s07); continuous mean and variance (s08).

## Decisions

### Revision 3 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a parcel's delivery window and its tracker (painted plates, live).** s04 ends on F(x) = x²/9 on [0, 3] with no meaning. Revision 3 gives it one: a tracker says the parcel will come between 9 am and 12 noon; X is the arrival time in hours after nine, and F(x) is the chance it has arrived by then. Steep F late in the window means arrivals are packed late (the street is near the end of the driver's route), and f = F′ becomes "how fast the chance of arrival is building", probability per hour. The site's problem 1 density k(4 − x) on [0, 4] becomes a second courier (8 am to noon, its stop early on the route, so early arrivals are most likely), with the site's numbers unchanged. Waiting for a delivery is an everyday experience with no science; it is not used in `checks/root-decisions-maths-redesign.md` and is distinct from s07's bus waits (s07 waits for something that comes every ten minutes; here one parcel arrives once).
- **Memory aid redrawn for the anchor.** Revision 2's tank-from-a-tap picture recalled i06's tap, which i06 Revision 3 replaced with a rain gauge. The aid is now the tracker itself: "F: the chance it has arrived so far. f: how fast that chance is building." The meaning and the assumptions are unchanged (see "Memory aid check").
- **Idealising assumptions (author notes, not learner copy).** (i) The arrival time is a continuous random variable with F(x) = x²/9 on [0, 3] (the site's function, told as a story); no claim about any courier. (ii) The parcel certainly arrives inside the window (F(3) = 1). (iii) The second courier's density is the site's k(4 − x), told as a story.
- **Join with s04 (fixed).** Scene 1 opens on s04 Revision 4's final frame exactly (F violet).
- **Join with s06 (fixed).** Scene 15's frame is unchanged in content (f(x) = 3x(2 − x)/4 on [0, 2], "?" over the hump, an unlabelled dashed line, chip "Next: the most likely value and the middle"); the curve is teal (the strand's f role), as s06 Revision 3 expects.
- **Simulations (standard item 3).**
  1. `ArrivalDots` (scene 1): 90 stored simulated arrivals drop one by one onto the time axis (a small van icon plate runs along the top as they fall), each hour's tally counting live (10, 30, 50), so "packed late" is seen before f is named (author note j).
  2. `StripRiseRatio` (scenes 1, 2): two equal strips with rise brackets; then one strip at 1.5 narrowing with a live "rise ÷ width" readout approaching the tangent gradient 1/3.
  3. `DensityDial` (scene 6; `ParameterSlider` on k): k sweeps up while the triangle under k(4 − x) grows and the area readout climbs, stopping at 1 when k = 1/8.
  4. `TrackerFill` (scenes 8, 10; on `AccumulationTracer`): a marker sweeps x while the area under f fills amber and a coded tracker bar "chance it has arrived" fills to the same value, drawing F live.
- **Colour roles (fixed for the whole video).**
  - **the CDF F: violet** (`MATH_GRADIENT`), upper panel, and the tracker bar;
  - **the density f: teal** (`MATH_TEAL`), lower panel;
  - **probability areas, strips and brackets: amber** (`MATH_AMBER`, a pale amber fill for areas);
  - **data histogram (scene 3, recalled from s04): blue**;
  - **answer: green**; **mistake: red**, crossed slips only; ink algebra.
- **Large type, handwriting, layout.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; text above y = 950. Paired view: F upper (1,000 × 380 px), f lower (1,000 × 300 px). `HandTag`: "packed late", "rise ÷ width → gradient", "per hour", "area, not height", "F climbs, so f ≥ 0", "area = 1", "t: x is taken", "flat F: f = 0". The parcel and van plates are at least 300 px wide when they carry the idea.
- **Stage changes (standard item 2):** the tracker graph with the parcel and van, strips and falling arrivals (1); the narrowing strip and the paired view (2); the density histogram (3); area as probability (4, 5); the courier's g01 board with the k dial (6, 7); the tracker fill building F (8); the f-from-F board (9); the framed card (10); question cards with pictures (11 to 14); the hump (15); key notes (16).
- **Worked examples (g01 layout, standard item 7).** Scene 6 (task strip "Find k", givens "f(x) = k(4 − x) for 0 ≤ x ≤ 4; 0 elsewhere", rows at 52 px, green framed "k = 1/8", crossed slip "k = −1/8" captioned "a density can't be negative"); scene 7 (green framed "7/16"); scenes 8 and 9 (framed F and f with their domains). Feedback scenes carry a `GivensStrip`, framed answers and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "F: the chance so far. f: how fast it's building." with the keys "Differentiate F → f. Integrate f → F." and "Total: 1", and a tracker badge (the parcel with a full violet bar at 12 noon).
- **Visual surprise (standard item 9).** Equal strips hold almost five times as much probability late in the window, and the falling arrivals pile up there (1); the density histogram's bars grow past 1 while their areas stay put (3); the k dial stops dead when the area reaches 1 (6).
- **Question cards (full text and a picture).** A1: the worded question with empty axes x −0.5 to 2.5, y 0 to 1 (no line, no area); A2: the worded question with empty paired axes labelled "F" and "f" (no curves).
- **Narration (not voiced).** Scene 1 gives F the parcel meaning (499 to 706); scene 2 says "per hour" (498 to 522); scene 4 reads the area as the chance of arriving between ten and eleven (439 to 478); scene 6 names the second courier (373 to 495); scene 7 reads P(X < 1) in courier terms (297 to 328); scene 10 is the tracker memory aid (256 to 7060). Scenes 3, 5, 8, 9 and 11 to 16 keep their Revision 2 text.

### Kept from Revisions 1 and 2

- **Learner question kept (outline).** "How does a density determine its CDF and probabilities?" The answer, built in order: equal-width strips hold more probability where F is steep (1); rise per width tends to F′(x), so f = F′ measures probability per unit of x (2); a density can exceed 1, because probability is the area (3); area under f from c to d is F(d) − F(c) (4); f ≥ 0 because F never decreases, and total area 1 because it is all of the probability (5); these properties find unknown constants and probabilities (6, 7); F is the accumulated area from the start of the domain (8); f is the derivative of F, 0 on the flat pieces (9).
- **Density can exceed 1, with s04's data (and a site correction).** Density heights are relative frequency ÷ class width: 1.0, 2.5, 3.5, 2.0, 1.0 per second; areas stay 0.10 to 0.35.
- **Probability as area.** F is a primitive of f, so ∫_c^d f(x) dx = F(d) − F(c) (i08 and i09 recalled in one phrase). For 2x/9 from 1 to 2: 1/3.
- **The two properties with their reasons (`ci660140f9`).** f ≥ 0 because F never decreases; total area 1 because it is all of the probability; both domain forms of the syllabus stated. Checked on 2x/9: triangle ½ × 3 × 2/3 = 1.
- **Problems (site problem 1, numbers unchanged).** k(4 − x) on [0, 4]: area 8k, k = 1/8, positive because f ≥ 0. P(X < 1) = 7/16.
- **F from f (site problem 2) and f from F (site problem 3 steps 1 and 2).** F(x) = (8x − x²)/16 on [0, 4]; F(x) = x²(3 − x)/4 gives f(x) = 3x(2 − x)/4 on [0, 2], 0 elsewhere.
- **Attempts (original).** (A1) f(x) = k(x + 1) on [0, 2]: k = 1/4, P(X > 1) = 5/8. Crossed: "3/4" (a height). (A2) F(x) = (4x − x²)/4 on [0, 2]: f(x) = (2 − x)/2, 0 elsewhere. Crossed: "f(x) = 1 for x > 2".
- **Mistake scene:** none separate. "A density is a probability" and "a density can't exceed 1" (2, 3); "a negative k is fine" (6, crossed); "read a probability as a height" (feedback 1 crossed); "reuse x as the integration variable" (8); "drop 0 elsewhere" (9; feedback 2 crossed).
- **Site sources used:** lesson 9 cards 02, 03, 04, 07 (problems 1, 2 and 3 steps 1 and 2) and 08 (traps 01, 03, 04). Not used here: the uniform card 05 (s07), the mode card 06 and problem 3 steps 3 and 4 (s06), the practice questions.
- **Site corrections (for the log):** (1) card 02's "bar heights were relative frequency per class, which is density" is wrong (density = relative frequency ÷ class width); (2) card 03's "a negative constant is a signal that a limit of integration has been swapped" is too narrow.
- **Entry knowledge (draft route):** s04 (P(X = x) = 0; F(x) = P(X ≤ x); F(b) − F(a); F never decreases, 0 to 1, flat pieces; x²/9; the reaction-time histogram); i06 and i07 (definite integral as signed area); i08 (F(x) = ∫ₐˣ f(t) dt has derivative f(x); a dummy variable); i09 (∫_c^d f = F(d) − F(c)); d01 to d04 (power rule); Year 11 area of a triangle and trapezium.
- **Learner-visible vocabulary:** probability density function, PDF, density (f(x) = F′(x), probability per unit of x, scene 2); dummy variable (scene 8); domain (recall, scene 5).
- **Draft route entry (for the route file):** id `math-a12-s05`; playlistOrder 57; syllabusActionIds as above; start "s04's handoff: equal strips on x²/9, now a parcel's arrival chance; steepness as packing"; stop "f = F′; density histogram; P = ∫ f = F(d) − F(c); f ≥ 0 and total area 1 with reasons; unknown constant k(4 − x); F from f with a dummy variable; f from F with 0 elsewhere."; next "math-a12-s06: mode, median and quartiles of a density".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Strips on x²/9: F(0.6) − F(0.5) = 11/900 ≈ 0.0122; F(2.6) − F(2.5) = 51/900 ≈ 0.0567; ratio ≈ 4.64. At 1.5: h = 0.1 gives 0.344; h = 0.01 gives 0.334; F′(1.5) = 1/3.
  (b) Density histogram: 1.0, 2.5, 3.5, 2.0, 1.0 per second; areas 0.10 to 0.35; total 1.
  (c) ∫₁² 2x/9 dx = 1/3 (arrival between 10 am and 11 am); ∫₀³ 2x/9 dx = 1.
  (d) k(4 − x): area 8k; k = 1/8; f(0) = 1/2. P(X < 1) = 7/16 (the second courier arrives before 9 am). F(x) = (8x − x²)/16; F(4) = 1; F(1) = 7/16.
  (e) F(x) = x²(3 − x)/4 on [0, 2]; f(x) = 3x(2 − x)/4; ∫₀² f = 1.
  (f) A1: k = 1/4; P(X > 1) = 5/8; f(2) = 3/4 (crossed). A2: f(x) = (2 − x)/2 on [0, 2].
  (g) Pronunciations: "F prime of x"; "two x over nine"; "k times four minus x"; "eight x minus x squared, over sixteen"; "f of t, d t"; "three x times two minus x, over four"; "five eighths"; "seven sixteenths".
  (h) Windows: F upper x −1 to 4, y −0.2 to 1.2 (s04's handoff window; tick labels "9 am", "10", "11", "12" in grey under 0, 1, 2, 3); f lower y 0 to 0.8; density histogram y 0 to 4 per second; k(4 − x) on x −0.5 to 4.5, y 0 to 0.8 (dial k from 0.05 to 0.2); scene 9 x −0.5 to 2.5.
  (i) Tracker bar: a coded horizontal bar, 900 px, labelled "chance it has arrived", filled to F(x) at the marker, with a percentage readout (F × 100, rounded).
  (j) Arrivals for `ArrivalDots`: 90 stored values x = 3√u with u from Python 3.14 `random.Random(70).random()`; hour tallies 10 (9 to 10), 30 (10 to 11), 50 (11 to 12), matching the model's 1/9, 3/9, 5/9 exactly. Stored as data; labelled "simulated".

Main question: *A parcel tracker's chance of "arrived" climbs slowly at first and steeply near noon. How does that steepness become a density f, why are probabilities areas under it, and how do we move between f and F?*
Entry knowledge (s04 CDF and its properties; i08 accumulation function; i09 definite integrals; power rule).
Stops after: f = F′, probability as area, the two properties, constants, F from f and f from F. No mode, quantiles, uniform or mean.
Handoff: math-a12-s06: f(x) = 3x(2 − x)/4 on [0, 2], "where is X most likely, and where is the middle?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): F and the tracker bar violet; f teal; areas, strips and brackets amber; the recalled histogram blue; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY"; scene headings in the hand font, 44 px. Exact fractions in the algebra; decimals only in grey readouts and data.

### 1. hook: equal strips, unequal probability
> Last video ended here, with F of x equals x squared over nine. Let's give it a meaning. A parcel tracker says your delivery will come between nine and twelve. X is the arrival time in hours after nine, and F of x is the chance the parcel has arrived by then. F climbs slowly near zero, and steeply near three. Compare two strips of the same width, a tenth of an hour. From zero point five to zero point six, F only rises by about zero point zero one two. From two point five to two point six, it rises by about zero point zero five **seven**. So the same width holds almost five times as much probability near two point five. Steep means the arrival times are packed **closely**. So how do we measure that packing?

Visual: opens on s04 Revision 4's last frame exactly (violet F(x) = x²/9 on x from −1 to 4 with its flat pieces, the gentle tangent at 0.5 and the steep one at 2.5, chips "Next: how steeply F climbs" and "?"). Heading writes on: "How does a density give probabilities?". On "parcel tracker" the graph slides right (1,000 × 560 px) and the painted parcel (`physics/phys-y11-box-v1.png`, 340 px wide) sits at the left under the painted delivery van (`ma12-delivery-van-v1`, 420 px wide), tag "delivery: 9 to 12"; grey hour labels "9 am", "10", "11", "12" appear under x = 0, 1, 2, 3, and the vertical axis is labelled "F(x): chance it has arrived". A coded tracker bar under the parcel fills to F as a violet dot rides the curve from 0 to 3 (0 per cent to 100 per cent), then resets. On "two strips" the tangents fade and two amber strips of width 0.1 draw at [0.5, 0.6] and [2.5, 2.6], each with a rise bracket on the F axis; grey readouts (52 px) "rise ≈ 0.012" and, on "seven", "rise ≈ 0.057". On "five times" a grey chip "0.057 ÷ 0.012 ≈ 4.6". On "closely" `ArrivalDots` runs (about 4 s): 90 simulated arrivals drop one by one onto the time axis below the graph, the hour tallies counting live to 10, 30 and 50, hand tag "packed late"; tag "simulated arrivals".

### 2. the density is the gradient of F
> Divide the rise in F by the width of the strip, and you get probability per unit of x, here per hour. Make the strip thinner and thinner, and that becomes the gradient of F. So we define the probability density function, f of x, as F prime of x, wherever F has a gradient. Here, f of x is two x over nine, between zero and three, and zero everywhere else. At one point five, F has gradient one third, so the density there is one third per **hour**. A density isn't a probability. It's probability per unit of x, like a rope's density in grams per metre. A high density means probability is packed in near that value, not that the exact value is likely.

Visual: camera continue (the parcel and van shrink to a 260 px badge at the top left). `StripRiseRatio`: one strip at x = 1.5 (width 0.1), readout (52 px) "rise ÷ width ≈ 0.344"; on "thinner" it narrows to 0.01, readout "≈ 0.334", and the tangent at (1.5, 1/4) draws with a `StudioTangentTriangle` and the readout "gradient 1/3", hand tag "rise ÷ width → gradient". Right column: green frame "f(x) = F′(x)" with tag "probability density function (PDF)". The window splits into the paired view: F upper; on "two x over nine" the lower panel draws f(x) = 2x/9 in teal on [0, 3] and y = 0 outside it, tag "f(x) = 2x/9, 0 ≤ x ≤ 3; 0 elsewhere". On "hour" a dashed connector drops from the tangent point to (1.5, 1/3) on f, which glows, hand tag "per hour". On the last sentence a chip "density = probability per unit of x" and a grey "rope: grams per metre".

### 3. a density can be bigger than one
> Here's why that matters. Go back to the reaction-time histogram from last video. Divide each relative frequency by the class width, one tenth of a second. The heights become one, two point five, three point five, two and one, per **second**. Now each bar's area, height times width, is its probability, and the areas add to one. Three point five is bigger than one, and that's fine. A density can be bigger than one, because the probability is the area, not the **height**.

Visual: clear change to s04's reaction-time histogram (`ClassHistogram`, relative mode, blue, heights 0.10 to 0.35, y axis 0 to 0.4, 1,100 × 560 px), the starting-blocks badge (`ma12-starting-blocks-v1`, 240 px) at the top left. On "Divide" the y axis rescales to "density (per second)", 0 to 4, and the bars grow to 1.0, 2.5, 3.5, 2.0, 1.0 (about 1 s) while each bar's area label stays: "0.10", "0.25", "0.35", "0.20", "0.10". On "second" grey row "height = relative frequency ÷ 0.1". On "areas add to one" the area labels sum in the right column (52 px): "0.10 + 0.25 + 0.35 + 0.20 + 0.10 = 1". On "Three point five" the tallest bar glows with a dashed line y = 1 beneath its top, tag "density 3.5 > 1: allowed". On "height" the bar's area tints amber, hand tag "area, not height".

### 4. probability is area under the density
> So for a density, probability is area. For the density models we use, F is a primitive of f, so the area under f from c to d is F of d minus F of c. That's exactly the probability that X is between c and d. For the parcel, the area under two x over nine from one to two is four ninths minus one ninth, which is one **third**. That's the chance it arrives between ten and eleven, the same one third last video found from F. And since single values carry no probability, the ends of the interval still don't matter.

Visual: clear change back to the paired view (violet F upper, teal f = 2x/9 lower), the parcel badge at the top left. Right column: "P(c < X < d) = ∫_c^d f(x) dx = F(d) − F(c)" (grey tag "F is a primitive of f"). On "one to two" the area under f from 1 to 2 fills pale amber, and in the upper panel amber brackets mark F(1) = 1/9 and F(2) = 4/9. Row (52 px): "∫₁² 2x/9 dx = [x²/9]₁² = 4/9 − 1/9"; on "third" the green frame "= 1/3" and both the area and the bracket label "1/3" glow together, hand tag "10 am to 11 am". On the last sentence a grey chip "≤ or <: same (P(X = c) = 0)".

### 5. the two properties of a density
> Every density has two properties. First, f of x is never negative, because F never decreases, so its gradient can't be below zero. Second, the total area under f is one, because that's all of the probability. If X lives on an interval from a to b, the integral from a to b is one. If X can be any real number, the integral from minus infinity to infinity is one. Check two x over nine. It's never negative from zero to three, and its area is a triangle, half of three times two thirds, which is **one**.

Visual: camera continue. Right column, two framed rows: "f(x) ≥ 0 for all x in the domain" (on "never negative"; the lower curve tints above the axis, hand tag "F climbs, so f ≥ 0") and "∫_a^b f(x) dx = 1 on [a, b], or ∫_−∞^∞ f(x) dx = 1 on all real x" (on "total area"). On "Check" the whole triangle under 2x/9 from 0 to 3 fills pale amber, base bracket "3" and height bracket "2/3"; on "one" the green frame "½ × 3 × 2/3 = 1", hand tag "area = 1", and the upper F reaches 1 at x = 3 while the tracker badge's bar shows 100 per cent.

### 6. finding an unknown constant
> These two properties solve problems. A second courier's arrival time, X hours after eight, has density k times four minus x, for x from zero to four, and zero elsewhere. Their stop is early on the route, so early arrivals are most likely. Find k. The total area must be one. The graph is a triangle with base four and height four k, so its area is eight **k**. Integrating gives the same answer. So eight k equals one, and k is one **eighth**. It has to be positive, because a density can't be negative.

Visual: clear change to the g01 board (new case). A second van badge (the same van plate, 260 px) at the top left, tag "second courier: 8 am to 12". Task strip, 44 px, "Find k." Givens card: "f(x) = k(4 − x) for 0 ≤ x ≤ 4; f(x) = 0 elsewhere" (site problem 1). Graph (author note h, 900 × 520 px) solid from the first frame: the triangle under k(4 − x) at k = 0.05, brackets "base 4" and "height 4k". A `ParameterSlider` "k" (amber badge, 52 px) and a readout "area". On "eight k" the row "area = ½ × 4 × 4k = 8k"; the slider sweeps k up while the triangle grows and the area readout climbs (grey decimals); it stops on "eighth" at k = 1/8, readout "area = 1", tick. Rows (52 px): "∫₀⁴ k(4 − x) dx = k[4x − x²/2]₀⁴ = 8k" (on "Integrating"), and the green frame "8k = 1, so k = 1/8". On the last sentence a red slip "k = −1/8" writes and is crossed, caption "a density can't be negative".

### 7. a probability as an area
> Now find the probability that X is less than one, so this courier comes before nine. Integrate four minus x, over eight, from zero to one. That's one eighth of four minus a half, which is seven sixteenths. Just under half of the probability sits in the first hour of the four. That fits, because this density is highest at **zero**.

Visual: camera continue (the slider fades; f(x) = (4 − x)/8 fixed, teal). Task strip "Find P(X < 1)." The area from 0 to 1 fills pale amber, grey hour labels "8 am" to "12" under 0 to 4. Row (52 px): "P(X < 1) = ∫₀¹ (4 − x)/8 dx = (1/8)[4x − x²/2]₀¹ = (1/8)(4 − ½)" and the green frame "= 7/16", grey readout "≈ 0.44". On "first hour" a bracket over [0, 1] tagged "first hour of four"; on "zero" the point (0, ½) glows, tag "highest density".

### 8. building F from f
> We can also build F from f. F of x is the area under f from the start of the domain up to x. So F of x is the integral from zero to x of f of t, d t. The letter t is a dummy variable, because x is already the upper limit. Here, that gives eight x minus x squared, over sixteen, for x from zero to four. Check the ends. F of zero is zero, and F of four is thirty two minus sixteen, over sixteen, which is **one**. And F of one is seven sixteenths, the area we just found.

Visual: the paired view returns for this example (violet F upper, y 0 to 1.2; teal f lower), the van badge at the top left with its tracker bar. `TrackerFill`: a marker on the lower axis sweeps x from 0 to 4 while the area under f fills amber and the upper curve draws up to the marker; the tracker bar "chance it has arrived" fills to the same value (live percentage). On "seven sixteenths" (last sentence) a dot at (1, 7/16) on F glows with a connector to the scene 7 area. Right column: "F(x) = ∫₀ˣ f(t) dt" with "t" circled (hand tag "t: x is taken"); "= ∫₀ˣ (4 − t)/8 dt = (1/8)[4t − t²/2]₀ˣ" and the green frame "F(x) = (8x − x²)/16, 0 ≤ x ≤ 4"; checks "F(0) = 0, F(4) = (32 − 16)/16 = 1" ticked on "one". Grey under it: "F(x) = 0 for x < 0; F(x) = 1 for x > 4" with the flat pieces drawing on the upper graph.

### 9. finding f from F
> Going the other way takes one step. Differentiate. A variable has F of x equals x squared times three minus x, over four, for x from zero to two. First check the ends. F of zero is zero, and F of two is four times one, over four, which is one. Expand it, and differentiate. The density is three x times two minus x, over **four**. Both factors are positive between zero and two, so f is never negative. And f is zero elsewhere, because the flat pieces of F have gradient **zero**.

Visual: clear change to the g01 board (new case). Task strip "Find the probability density function." Givens card: "F(x) = 0 for x < 0; F(x) = x²(3 − x)/4 for 0 ≤ x ≤ 2; F(x) = 1 for x > 2" (site problem 3). Paired graphs at the left (author note h) solid from the first frame: violet F with flat pieces; empty lower axes. Rows (52 px current): "F(0) = 0, F(2) = (4 × 1)/4 = 1" ticked; "F(x) = (3x² − x³)/4"; on "four" the green frame "f(x) = F′(x) = (6x − 3x²)/4 = 3x(2 − x)/4", with "3x" and "(2 − x)" tinting green on "positive"; on "Differentiate" a tangent sweeps along F and the lower teal curve f draws as a hump on [0, 2]. On "zero" (last) the flat pieces of F glow, tangent stubs on them read "gradient 0", the lower line y = 0 outside [0, 2] glows, row "f(x) = 0 elsewhere", hand tag "flat F: f = 0", and a grey tag at x = 0 and x = 2 "F has a corner here; f's value at a single point changes no probability".

### 10. memory aid
> Here's a picture to hold on to. Think of the parcel tracker. F is the chance it has arrived so far, and f is how fast that chance is building at x. Differentiate F to get f. Integrate f to get F. And by the end of the window, F reaches exactly **one**.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px). Main line, hand font 56 px: "F: the chance so far. f: how fast it's building." Keys, 40 px: "Differentiate F → f. Integrate f → F." and "Total: 1". Left slot: the parcel (220 px) above a small teal f and a tracker bar filling as a marker sweeps; on "one" the bar reaches 100 per cent at "12". Hold about 2 s.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A density is k times x plus one, for x from zero to two, and zero elsewhere. Find k, then find the probability that X is greater than one. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A continuous random variable X has probability density function f(x) = k(x + 1) for 0 ≤ x ≤ 2, and f(x) = 0 elsewhere. (a) Find the value of k. (b) Find P(X > 1)." Picture slot: empty axes x −0.5 to 2.5, y 0 to 1, labelled "f(x)" (no line, no area). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 1 (brief)
> The total area is k times x squared over two plus x, from zero to two, which is four **k**. So k is one quarter. Then the probability that X is more than one is the integral from one to two of x plus one, over four. That's one quarter of four minus one and a half, which is five **eighths**. Three quarters is wrong. That's the height of f at two, not an **area**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "f(x) = k(x + 1), 0 ≤ x ≤ 2", "0 elsewhere". On "k" (in "four k") "0 ≤ x ≤ 2" is underlined in the card; row (52 px) "∫₀² k(x + 1) dx = k[x²/2 + x]₀² = 4k = 1, so k = 1/4" in a green frame. On "eighths" the card's axes draw (x + 1)/4 in teal and the trapezium from 1 to 2 fills amber; the green frame "P(X > 1) = (1/4)[x²/2 + x]₁² = (1/4)(4 − 3/2) = 5/8". On "area" a red slip "P(X > 1) = f(2) = 3/4" writes and is crossed, caption "a height, not an area". Hold about 1 s.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A continuous random variable has F of x equals four x minus x squared, over four, for x from zero to two, with F equal to zero below zero, and one above two. Find its probability density function. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (4x − x²)/4 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find the probability density function of X." Picture slot: empty paired axes labelled "F" (upper) and "f" (lower), x −0.5 to 2.5 (no curves). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 14. feedback 2 (brief)
> Differentiate the middle piece. Four minus two x, over four, is two minus x, over **two**, for x from zero to two. It's never negative there. Outside that interval, f is zero, because the flat pieces of F have gradient **zero**. Saying f is one for x above two is wrong. The derivative of a constant is zero, not **one**.

Visual: the card shrinks to the top. `GivensStrip`: "F(x) = (4x − x²)/4, 0 ≤ x ≤ 2", "F = 0 below, 1 above". On "two" "(4x − x²)/4" is underlined and the green frame "f(x) = F′(x) = (4 − 2x)/4 = (2 − x)/2, 0 ≤ x ≤ 2" writes; the card's axes draw violet F above and teal f below. Grey tag "≥ 0 on [0, 2]". On "zero" the row "f(x) = 0 elsewhere" joins the frame and F's flat pieces glow. On "one" a red slip "f(x) = 1 for x > 2" writes and is crossed, caption "d/dx (1) = 0". Hold about 1 s.

### 15. handoff
> So the density is the gradient of F, probabilities are areas under it, and the total area is one. Next, a new question. Here's the density we found a moment ago, three x times two minus x, over four. Where is X most likely to be? And where's the middle, with half the probability on each **side**?

Visual: the two memory-card lines show small at the top, then fade on "Next". Board clears to one graph (author note h, 1,100 × 600 px): f(x) = 3x(2 − x)/4 in teal on [0, 2], 0 elsewhere, x ticks 0, 1, 2, no y value at the peak. On "most likely" a "?" chip sits above the hump; on "side" a dashed vertical line with a "?" label slides along the axis and stops at no labelled value. Chip "Next: the most likely value and the middle". No peak value, no area shading, no "1". Hold about 2 s. This is s06's opening frame; scene 16 returns to it after the notes.

### 16. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 36 to 40 px in the left 58 to 60% (root decision 58), each one line or two short lines; the framed card on the right.
> Here are the key notes. Pause the video if you need more time to copy them.

- f(x) = F′(x) where F has a gradient: probability per unit of x.
- A density is not a probability. It can be bigger than 1.
- P(c < X < d) = ∫ from c to d of f(x) dx = F(d) − F(c).
- Every density: f(x) ≥ 0 and total area 1. Use these to find k.
- F(x) = ∫ₐˣ f(t) dt. f = F′, and f = 0 outside the domain.

Memory aid (framed card, right half of the notes screen, as in scene 10): *F: the chance so far. f: how fast it's building.* Keys: *Differentiate F → f. Integrate f → F.* and *Total: 1.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s) back to scene 15's frame exactly (teal f(x) = 3x(2 − x)/4 with the "?" over the hump, the unlabelled dashed line, and the chip "Next: the most likely value and the middle"). This is the final frame and s06's opening frame.

## Teaching checks

- **Does it explain causes?** Why measure steepness: equal widths hold different probability, and the arrivals pile up late (1). Why f = F′: rise per width tends to the gradient (2). Why a density can exceed 1: area, not height, is probability (3). Why area is probability: F is a primitive of f (4). Why f ≥ 0: F never decreases (5). Why total area 1: it is all of the probability (5). Why k = 1/8 and positive: total area 1 and f ≥ 0 (6). Why t: x is the upper limit (8). Why f = 0 outside: F's flat pieces have gradient 0 (9).
- **Misconceptions addressed:** as listed under "Mistake scene".
- **Visual standard, item by item:** 1 the painted parcel and van by about 8 s, returning in 2, 4, 5, 6, 8 and 10; 2 a new stage every 25 to 55 s; 3 `ArrivalDots`, `StripRiseRatio`, the k dial and `TrackerFill`, each with live readouts; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards (6, 7, 9), framed answers and crossed slips; 8 framed card and five short bullets; 9 the arrivals piling up late, bars growing past 1 with their areas unchanged, the dial stopping at area 1.
- **One idea at a time:** one strip per sentence in 1 and 2; one property per sentence in 5; constant (6), probability (7), accumulation (8) and differentiation (9) as separate scenes.
- **Response opportunity:** two unseen HSC-style tasks with every condition visible and a picture each, 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 27 s and 24 s.
- **Avoided double teaching:** P(X = x) = 0 and F(b) − F(a) (s04) in one phrase each; the accumulation function and dummy variable (i08) and ∫ = F(d) − F(c) (i09) in one phrase; s04's histogram reused.
- **Syllabus coverage:** `cicf91daa4` (2, 4; key notes 1 to 3); `ci660140f9` (5; both domain forms; key note 4); `ci7d5b28b0` (6, 7; A1; key note 4); `cic6439f2a` (8; key note 5); `cibf3988c1` (9; A2; key note 5).
- **Out of scope by design:** mode, median and quartiles (s06); uniform (s07); mean and variance (s08).

## Practice questions and model answers

**Attempt 1 (scene 11; original, HSC style, 3 marks suggested, not an official marking scheme).** "A continuous random variable X has probability density function f(x) = k(x + 1) for 0 ≤ x ≤ 2, and f(x) = 0 elsewhere. (a) Find the value of k. (b) Find P(X > 1)."
Model answer: (a) ∫₀² k(x + 1) dx = 4k = 1, so k = 1/4 (positive, so f ≥ 0). (b) P(X > 1) = ∫₁² (x + 1)/4 dx = (1/4)[(2 + 2) − (½ + 1)] = 5/8. Classic mistake (crossed): "3/4" (f(2), a height).

**Attempt 2 (scene 13; original, HSC style, 2 marks suggested).** "A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (4x − x²)/4 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find the probability density function of X."
Model answer: f(x) = F′(x) = (4 − 2x)/4 = (2 − x)/2 for 0 ≤ x ≤ 2, and f(x) = 0 elsewhere. Classic mistake (crossed): "f(x) = 1 for x > 2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Parcel window | X hours after 9 am, 0 ≤ X ≤ 3; F(x) = x²/9 | 1, 2, 4, 5, 10 |
| Hook strips on x²/9 | [0.5, 0.6]: rise 11/900 ≈ 0.012; [2.5, 2.6]: 51/900 ≈ 0.057; ratio ≈ 4.6 | 1 |
| Simulated arrivals | 90 arrivals: 10, 30, 50 per hour | 1 |
| Strip at 1.5 | h = 0.1: ≈ 0.344; h = 0.01: ≈ 0.334; F′(1.5) = 1/3 | 2 |
| Density of x²/9 | f(x) = 2x/9 on [0, 3], 0 elsewhere | 2, 4, 5 |
| Density histogram | 1.0, 2.5, 3.5, 2.0, 1.0 per second; areas 0.10 to 0.35; sum 1 | 3 |
| Area 1 to 2 | 1/3 (10 am to 11 am) | 4 |
| Total area | ½ × 3 × 2/3 = 1 | 5 |
| Second courier (site problem 1) | X hours after 8 am; area 8k; k = 1/8; f(0) = 1/2; crossed k = −1/8 | 6 |
| P(X < 1) | 7/16 ≈ 0.44 (before 9 am) | 7 |
| F from f (site problem 2) | (8x − x²)/16 on [0, 4]; F(0) = 0, F(4) = 1, F(1) = 7/16 | 8 |
| f from F (site problem 3) | f(x) = 3x(2 − x)/4 on [0, 2], 0 elsewhere | 9, 15 |
| A1 | k = 1/4; P(X > 1) = 5/8; crossed 3/4 | 11, 12 |
| A2 | f(x) = (2 − x)/2 on [0, 2], 0 elsewhere; crossed f = 1 for x > 2 | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python 3.14 (7 Nov, scratchpad `sims2.py`); Codex to re-check numerically and with a CAS.

- (0.6² − 0.5²)/9 = 0.012222; (2.6² − 2.5²)/9 = 0.056667; ratio 4.636.
- (1.6² − 1.5²)/0.9 = 0.34444; (1.51² − 1.5²)/0.09 = 0.33444; F′(1.5) = 1/3.
- Arrivals (author note j): tallies 10, 30, 50; model hourly probabilities 1/9, 3/9, 5/9.
- 0.10/0.1 to 0.10/0.1 = 1, 2.5, 3.5, 2, 1.
- ∫₁² 2x/9 dx = 1/3; ∫₀³ 2x/9 dx = 1.
- ∫₀⁴ k(4 − x) dx = 8k; k = 1/8; ∫₀¹ (4 − x)/8 dx = 7/16; ∫₀ˣ (4 − t)/8 dt = (8x − x²)/16.
- d/dx [x²(3 − x)/4] = 3x(2 − x)/4; ∫₀² 3x(2 − x)/4 dx = 1.
- A1: 4k = 1; ∫₁² (x + 1)/4 dx = 5/8; f(2) = 3/4. A2: d/dx [(4x − x²)/4] = (2 − x)/2; ∫₀² (2 − x)/2 dx = 1.

## Memory aid check

- **"F: the chance so far. f: how fast it's building."** Meaning, as said in scene 10: F(x) is the probability accumulated up to x (for the parcel, the chance it has arrived by x hours after nine); f is the rate at which that probability builds per unit of x. Assumptions checked: the rate is never negative (f ≥ 0, so the chance never falls: F never decreases); F ends at exactly 1 (total area 1; the parcel certainly comes in the window); "how fast" means per unit of x, not per second of clock time in general (for the parcel x is time, so both readings agree; for other variables the scene 2 wording "per unit of x" governs). It helps a new case: given F, "how fast does it build" means differentiate (A2). Introduced after the causes (2 to 9).
- **Considered, not used:** Revision 2's tank and tap (it recalled i06's tap, which i06 Revision 3 removed); "PDF = derivative, CDF = integral" as letters (easy to swap).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,107 characters**, 16 scene headings (Revision 2: 5,692 by script, as stated). Characters per scene (1 to 16): 706, 522, 465, 478, 499, 495, 328, 466, 472, 248, 171, 352, 228, 309, 293, 75.

At 13.3 characters per second the speech before the notes is about 454 s. Holds: two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 19 s of settling for the tracker ride and the falling arrivals (1), the narrowing strip (2), the rescaling bars (3), the k dial (6), the tracker fill (8) and the derivative sweep (9); the key-notes scene is 45 s (1,350 frames). Total **about 544 s**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 26 s spare.

Reserve trims if the voiced take runs long: scene 6's "Their stop is early on the route, so early arrivals are most likely." (keep the tag); scene 2's rope comparison (keep the chip). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12s05` (route math-a12-s05). Explainer folder `src/explainer/lessons/math-a12-s05`; build inputs in `docs/production/claude-pm/lessons/math-a12-s05/` (to be created at voicing).

In order (kebab-case; 16 scene headings, all `### N.`): hook-parcel, density-is-gradient, density-over-one, probability-is-area, two-properties, unknown-constant, probability-area, f-to-F, F-to-f, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 58 s | 1 | x²/9 as the parcel tracker; strips and falling arrivals |
| 58 to 99 s | 2 | Narrowing strip, then the paired F and f view |
| 99 to 136 s | 3 | Density histogram: bars past 1, areas unchanged |
| 136 to 212 s | 4 to 5 | Area as probability; the two properties |
| 212 to 277 s | 6 to 7 | g01 board: the second courier, the k dial, P(X < 1) |
| 277 to 315 s | 8 | Tracker fill building F from f |
| 315 to 352 s | 9 | g01 board: f from F |
| 352 to 373 s | 10 | Framed memory card |
| 373 to 475 s | 11 to 14 | Question cards with pictures and countdowns, then feedback with givens strips and crossed slips |
| 475 to 499 s | 15 | The hump 3x(2 − x)/4 (s06 opening frame) |
| 499 to 544 s | 16 | Key notes with the framed card, then a silent return to scene 15 |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s04's last frame continues into scene 1 (same window; the parcel and van arrive, the tangents give way to strips); 1 to 2 camera continue, then the window splits into the paired view; 2 to 3 clear change (histogram); 3 to 4 clear change (paired view back); 4 to 5 camera continue; 5 to 6 clear change (new case); 6 to 7 camera continue; 7 to 8 camera continue into the paired view; 8 to 9 clear change (new case); 9 to 10 clear change to the card; attempts and feedback: the card shrinks to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, then a silent return to scene 15's frame.

Holds: attempt-1, attempt-2 (10 s countdown, the ring shown full from "Pause here to answer."); key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12s05-rev3-learning-review.md`, `science_check` = `checks/m-a12s05-rev3-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `physics/phys-y11-box-v1.png` (1200 × 1000, a plain closed brown cardboard box, front view, transparent, no tape or labels) reads as a parcel and is reused. `biology/m7-stock-truck-v1.png` is a livestock truck and `physics/phys-y11-box-trailer-v1.png` a trailer, neither a delivery van. `ma12-starting-blocks-v1` (s04's brief) is reused as the badge in scene 3.

Reused: `physics/phys-y11-box-v1.png`; from s04's brief `ma12-starting-blocks-v1`.

Need (painted, new; see the Codex asset brief): `ma12-delivery-van-v1.png`.

Coded (studio kit): the tracker bar and its percentages, the arrival dots and tallies, graphs, strips, areas, brackets, the slider, the histogram, working boards, question cards and their axes, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `ClassHistogram` and `CdfSubtraction` (s04 additions), and the studio's `FunctionSimulator` (domain pieces, tangent stubs), `PairedDerivativePanel`, `StudioTangentTriangle`, `ParameterSlider`, `LiveReadoutBoard`, `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot, `GivensStrip` and `QuestionAxes`.

Additions:
1. **`StripRiseRatio`**: strips [x, x + h] on an increasing F with rise brackets and a live rise ÷ h readout; animatable h; optional tangent for comparison. Checks: 0.01222 and 0.05667; 0.3444 and 0.3344; 1/3.
2. **`ArrivalDots`**: stored values dropping one by one onto an axis with live tallies per interval and an optional plate icon running along the top. Check: the tallies equal the dots dropped so far.
3. **`TrackerFill`** (on the i-series `AccumulationTracer`): a sweeping marker, the area under f filled to it, F drawn to it, and a linked horizontal progress bar with a percentage readout equal to F at the marker; flat pieces beyond the domain. Checks: F(1) = 7/16 and F(4) = 1 for (8x − x²)/16; F(3) = 1 for x²/9.
4. **`StudioAreaFill`** on a piecewise f that is 0 outside its domain (if not already built for i06 and i07).

## Codex asset brief (Maths A12 S05, a parcel delivery)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-s05.md`, draft route entry math-a12-s05. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style, matched to `physics/phys-y11-box-v1.png`; at least 8 per cent clear margin; no text, labels, letters, numbers, scale marks, brand names, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-delivery-van-v1.png` (2400 × 1400 px): one small white delivery van, side view facing right, wheels on an implied flat road (no road drawn), plain panel sides with no logo, lettering or number plate text, a rear roller door closed. The cab windows are tinted dark grey so **no driver or person is visible**. Proportions of an ordinary Australian courier van; no roof lights or ladders.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px wide, side by side with `physics/phys-y11-box-v1.png` at a plausible relative scale, plus the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-s05-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm every density and CDF is stated with its domain and "0 elsewhere" or its flat pieces wherever it is written (scenes 2, 6, 8, 9, 15; both attempts; key notes).
3. Confirm the parcel meanings: F(x) = x²/9 as the chance of arrival by x hours after 9 am; 1/3 as 10 am to 11 am; the second courier's X in hours after 8 am; 7/16 as before 9 am.
4. Confirm the density-histogram heights are relative frequency ÷ class width and the narration does not call the relative-frequency bars a density.
5. Confirm the scope of every learner-visible general claim: "a density can be bigger than 1" with "probability is the area"; the two properties with both domain forms; "k must be positive because f ≥ 0"; the memory aid's "how fast" read as per unit of x.
6. Confirm F(x) = ∫ₐˣ f(t) dt is written with a dummy variable, with F(a) = 0 and F(b) = 1 checked.
7. Confirm both attempt questions carry every demand and condition, each card has its picture, and neither card shows a constant, an area, a derivative or the form of the answer.
8. Confirm the opening equals s04 Revision 4's final frame (F violet) and scene 15 states no mode, peak value, median or area (a question only) and equals s06 Revision 3's opening.
9. Confirm the five syllabus quotes match the crosswalk JSON exactly (U+2061 removed) and no site module label appears in learner copy or metadata.
10. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.

## YouTube metadata (draft)

Title: Probability Density Functions: f(x) = F′(x), Probability as Area | Year 12 Maths Advanced

(Title length: 85 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson09.sa.html

A parcel tracker says your delivery will come between 9 and 12, and the chance it has arrived climbs slowly at first, then steeply. Where that cumulative distribution function climbs steeply, arrival times are packed closely. Measure the steepness and you get the probability density function, f(x) = F′(x): probability per unit of x. See why a density can be bigger than 1 (the probability is the area, not the height), why P(c < X < d) is the area under f, and why every density is never negative with total area 1. Then find an unknown constant, build F(x) by integrating f, and recover f by differentiating F, with "0 elsewhere". Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, statistics and probability.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define a probability density function (PDF), f(x) , for a random variable X with cumulative distribution function F(x) as f(x)=F'(x) and recognise that P(a<X<b)=∫_{a}^(b)f(x)dx"
"Recognise the properties of a probability density function: f(x)≥0 for all x in the domain of f(x), and ∫_{a}^(b)f(x)dx=1 if the domain of f(x) is [a,b] , or ∫_{-∞}^(∞)f(x)dx=1 if the domain of f(x) is all real x"
"Apply the properties of a probability density function to solve problems and justify conclusions"
"Obtain the cumulative distribution function using the formula F(x)=∫_{a}^(x)f(t)dt where f(x) is a given probability density function defined on the interval (a,b]"
"Find the probability density function from a given cumulative distribution function"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: Continuous random variables and the CDF (previous video); definite integrals and the accumulation function. Next: Mode, median and quartiles of a density.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. Syllabus quote form (root, kept).** The YouTube description may need the clean linear form ("∫_a^b f(x) dx = 1") if the upload tool mangles the crosswalk's spacing; root to decide once for s04 to s09.
- **2. Parcel story (learning review).** Confirm that "X hours after nine" and the grey hour labels make the 0 to 3 window easy to read, and that the second courier (8 am to noon) is not confused with the first.
- **3. Spoken "F prime of x" (voice pilot).** Series form, with "f of t, d t".

## Review notes

- Revision 3 (7 Nov) has had no independent review. Next: student learning review (trace from s04 and i08; check that the tracker meaning of F is clear before any density; that the falling arrivals make "packing" visible before f is defined; that the narrowing strip is the evidence for f = F′; that "a density can be bigger than 1" is earned by the area labels; that each property has its reason; that the dial shows why k = 1/8; that the tracker aid's assumptions are not over-claimed; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The arrivals, the strips, the rescaling bars, the k dial and the tracker fill carry the explanation; judge them at playback speed in the voiced preview, not from stills. Readouts must be computed from the same functions as the curves.

## Revision 2 (4 November 2026, brief 162 repairs)

Invisible U+2061 removed from the quotes (root decision 56); `cic6439f2a` quote corrected to the official (a,b]. Narration then 5,692 characters.

## Revision 3 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, every site number, the cause chain and both attempts are unchanged.

- **Anchor and why:** a parcel's delivery window: F(x) = x²/9 becomes the chance the parcel has arrived x hours after nine, and f the rate that chance builds. It gives s04's abstract handoff curve an everyday meaning and turns the memory aid into a tracker; the site's k(4 − x) becomes a second courier.
- **Simulations:** `ArrivalDots` (90 simulated arrivals piling up late); `StripRiseRatio` (rise ÷ width approaching the gradient); the k dial (area readout stopping at 1); `TrackerFill` (the area filling while F and a tracker bar build).
- **Colour roles:** F and the tracker bar violet; f teal; areas, strips and brackets amber; the recalled histogram blue; answer green; mistake red.
- **Plates:** reused `physics/phys-y11-box-v1.png` and s04's `ma12-starting-blocks-v1`; new `ma12-delivery-van-v1` (brief above).
- **Narration changes (not voiced):** scenes 1, 2, 4, 6, 7 and 10 (listed with counts in Decisions). Other scenes keep their Revision 2 text.
- **Counts:** 5,692 → 6,107 characters; about 520 s with the old 60 s notes hold → about 544 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on s04 Revision 4's final frame (F violet); ends on the teal hump 3x(2 − x)/4, which s06 Revision 3 opens on.
- **Memory aid:** the tracker ("F: the chance so far. f: how fast it's building.") replaces the tank and tap.
- **Kit additions:** `StripRiseRatio`, `ArrivalDots`, `TrackerFill` (on `AccumulationTracer`), and `StudioAreaFill` on piecewise f.

## Revision 4 (12 Nov 2026)

Brief 240 findings (Codex, 11 Nov) and fixes:

- **f = F′ where differentiable (scene 2, key note 1).** "as F prime of x, wherever F has a gradient". Scene 9 adds a grey tag at the corners x = 0 and x = 2: f's value at a single point changes no probability.
- **Scope to density models (scene 4).** "For the density models we use, F is a primitive of f".
- **Local density versus point probability (scene 2).** "A high density means probability is packed in near that value, not that the exact value is likely."
- **Source.** Lesson 09 Problems 1 to 3 confirmed by Codex's follow-up; no change.
- **Narration changed:** scenes 2 (522 to 648), 4 (478 to 509). Total 6,107 to 6,264 characters, 16 scene strings (build parser rules).
