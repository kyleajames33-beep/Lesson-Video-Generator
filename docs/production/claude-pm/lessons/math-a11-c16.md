# Maths A11 C16: How do we find and justify the stationary points of a cubic? Solving f′(x) = 0, heights from f, a table of slopes for local maximum, local minimum or neither, and where the cubic increases and decreases (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `c06.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,522 characters by script (see "Narration length estimate"), 13 scene headings, about 503 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: forty-seventh video of Year 11 Mathematics Advanced (2024), outline order 47, Introduction to differentiation (Graphical applications of the derivative). Pre-design pack: `../pre-design/maths-a11/math-a11-c16.md` (brief 243). Site lessons (read through the pack's quotations, read only): `introduction-to-differentiation/lesson08.sa.html` (`we-1`, x³ − 3x², with the pack's classification step added; Q2, x³ at 0) and `lesson10.sa.html` (`we-2`, the same cubic's intervals). Route entry: `math-a11-c16` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted pump track (c15's brief) and a painted hot-air balloon for the handoff (prefix `ma11-`); every profile, table and row coded.

Owner rules applied: as c01 to c15 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (sport and games: a bike pump track), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, Graphical applications of the derivative), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci6341be75`: "Identify stationary points on the graph of a cubic function, and the values of x for which the function is increasing and/or decreasing, by first calculating the derivative, and justify conclusions"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c15's final frame (the pump-track plate with its coded profile, "heights × 2", "y = (x³ − 9x² + 24x)/20 m", "crest: where exactly?", "hollow: where exactly?", "which is which? prove it", "Next: stationary points of a cubic", "?"). Recalls w20 (sketching a cubic from its factors, turns only guessed) and c14 (stationary when f′(c) = 0; increasing and decreasing from the sign of f′). Teaches: for a cubic, find f′(x), solve f′(x) = 0 by factorising (w04), find each stationary point's y-value from f; justify each as a local maximum, local minimum or neither from the sign of f′ just left and just right (a table of slopes), with test values that do not pass another stationary point; state where the cubic increases and decreases (`ci6341be75`). Stops at cubics. Not taught: the second derivative (Year 12); optimisation (Year 12); the term "horizontal point of inflection" (author note only, pack decision).

## Decisions

- **Anchor: a pump track's crest and hollow (painted plate, live).** One section of a dirt pump track has the profile y = (x³ − 9x² + 24x)/20 m for 0.5 ≤ x ≤ 5 m: it rises to a crest at (2, 1), dips to a hollow at (4, 0.8) and climbs again to 1 m at x = 5. "Which is the crest? Prove it" is the syllabus's "justify conclusions"; the end of the section is as high as the crest, which makes "local" concrete. Sport and games; original (the pack's mini-golf hump was rejected because w15 to w17 use a golf chip and a golf bank, and its sand dune because Year 12 t01 and d11 use beach and dune plates; Year 12's hiking elevation profile, with its flat ledge, is a near idea, noted for root, and this track has no ledge). Grep 16 Nov: "pump track" no hits; "BMX" appears only in w16's list of rejected pack anchors. No people or bikes are drawn.
- **The model.** The profile is drawn with heights × 2 (labelled), as c09's driveway, so the 0.2 m dip reads at video size; the slopes quoted are the real ones. Gradients at the test points: y′(1) = 0.45, y′(3) = −0.15, y′(5) = 0.45 (author note a).
- **Simulations (standard item 3).**
  1. **Profile rider** (`FunctionRider` on the plate's sidecar profile; scenes 1 to 3): a violet tangent rides the track with a live gradient readout; it flattens and turns amber at x = 2 and x = 4, where the dots snap onto the profile with their coordinates.
  2. **Table of slopes** (`SignStrip` laid out as a table; scenes 3 to 6): columns at test x-values and the stationary x-values, rows "f′ sign" and "slope" with glyphs ╱ ─ ╲; each column fills as the rider passes, then the verdict writes under each stationary point ("local max", "local min", "neither").
  3. **Side by side** (scene 5): x³ − 3x² (two stationary points, one max and one min) beside x³ (one stationary point, neither), each with its table.
- **Colour roles (the c01 to c15 roles, root ruling 7).** f and heights **teal**; f′ and tangents **violet**; stationary points **amber**; "+" and rising the kit's up token, "−" and falling the down token (as c14); x blue; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As c01. Hand tags: "flat: f′ = 0", "factorise", "heights from f", "both coordinates", "up, flat, down", "down, flat, up", "up, flat, up", "test between, not past", "local: nearby", "a square is never negative".
- **Stage changes (standard item 2).** The pump track and its rider (1); g01 board, solving f′ = 0 (2); the table of slopes on the track (3); g01 board, site `we-1` (4); side-by-side panels, the "neither" case (5); framed card (6); question cards (7 to 10); the hot-air balloon (11); key notes (12). Scene 3 splits into 3a and 3b at "Local means" (13 headings).
- **Worked examples (g01 layout).** 2 and 3: the track: (2, 1) local maximum, (4, 0.8) local minimum; increasing for 0.5 ≤ x < 2 and 4 < x ≤ 5, decreasing for 2 < x < 4; crossed "x = 2 and x = 4" (no heights). 4: site `we-1`: (0, 0) local maximum, (2, −4) local minimum; crossed "test x = 3 for the point at 0". 5: x³ at 0: neither.
- **Memory aid.** Framed card: "Plus to minus: a crest. Minus to plus: a hollow. No change: neither." Key line: "Always both coordinates."
- **Visual surprise.** The tangent's readout flips sign exactly as the rider passes each stationary point, and the table's glyphs ╱ ─ ╲ redraw the crest's shape in miniature under it; for x³ the glyphs read ╱ ─ ╱, a shape with no turn.
- **Site notes (pack section 8).** lesson08's key terms define local maxima and minima through f″ (logged); this video uses the sign of f′ only and never mentions f″. lesson08's "Move 2" (second-derivative test) is not used. lesson08 `we-1` says "classify" but only finds; the classification step from the pack's correction is added here. lesson08 Q3 (finding a, b, c, d) is not used (pack decision). "Horizontal point of inflection" is not used in learner copy.
- **Plain meanings at first use.** Stationary point ("a point where the curve is flat for an instant", recalled from c14); local maximum ("higher than every point close by, though not necessarily the highest overall"); local minimum (the reverse); nature ("whether it's a maximum, a minimum or neither"); justify ("show the reason: the sign of f′ on each side").
- **Attempts (pack questions).** A1: 2x³ − 3x² − 12x + 5: (−1, 12) local maximum, (2, −15) local minimum; crossed "x = −1 and x = 2" (no heights). A2: x³ − 3x² + 3x: one stationary point (1, 1), neither; crossed "f′ = 0, so a turning point".
- **Mistake scene:** none separate. x-values only (2 crossed; A1 crossed); classifying by the sign of f (3 tag); a test value past another stationary point (4 crossed); every stationary point a turn (5; A2 crossed).
- **Cause chain taught, in order:** (1) at a crest or hollow the tangent is flat, so f′ = 0, and for a cubic f′ is a quadratic that factorises (2); (2) the points lie on the curve, so their heights come from f (2); (3) f′'s sign says rising or falling, so the pattern of signs either side says the shape: rising then falling is a crest (3); (4) f′ can only change sign at its zeros, so a test value must stay between neighbouring stationary points (4); (5) if f′ keeps its sign (a repeated factor), the curve flattens without turning (5, A2).
- **Entry knowledge (route):** c14 (stationary when f′(c) = 0; the sign of f′); c07 (differentiating cubics); w20 (graphs of cubics); w04 (solving quadratics by factorising).
- **Handoff (to math-a11-c17, "What does f′(c) tell us about a real situation?").** Scene 11: the hot-air balloon sprite (`ma11-hot-air-balloon-v1.png`) above the paddock strip (`ma11-launch-paddock-v1.png`); chip "h(t) = (60t² − t³)/50 m, t in minutes"; chip "h′(10) = ?" with an empty units box "? per ?"; chips "Next: what f′(c) means" and "?". This is c17's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Track: y = (x³ − 9x² + 24x)/20, 0.5 ≤ x ≤ 5; y′ = 3(x − 2)(x − 4)/20; y(0.5) = 79/160 ≈ 0.49, y(1) = 0.8, y(2) = 1, y(3) = 0.9, y(4) = 0.8, y(5) = 1; y′(0.5) = 63/80 ≈ 0.79 (about 38°), y′(1) = 0.45, y′(3) = −0.15, y′(5) = 0.45. Heights drawn × 2.
  (b) `we-1`: f′ = 3x(x − 2); f(0) = 0, f(2) = −4; f′(−1) = 9, f′(1) = −3, f′(3) = 9.
  (c) x³: f′ = 3x²; f′(±1) = 3. In Year 12 language (not used): a horizontal point of inflection.
  (d) A1: y′ = 6(x − 2)(x + 1); y(−1) = 12, y(2) = −15; y′(−2) = 24, y′(0) = −12, y′(3) = 24. A2: y′ = 3(x − 1)²; y(1) = 1; y′(0) = y′(2) = 3.
  (e) Pronunciations: "x cubed minus nine x squared plus twenty-four x, all over twenty"; "zero point four five"; "minus zero point one five"; "two, one" and "four, zero point eight" for the points; "two, minus fifteen".
  (f) Windows: track x 0.5 to 5 m, y 0 to 1.2 m (× 2); `we-1` x −1.5 to 3.5, y −5 to 1; x³ x −1.6 to 1.6.

Main question: *Where exactly are a pump track's crest and hollow, and how do you prove which is which? How do we find and justify the stationary points of a cubic?*
Entry knowledge (c14, c07, w20, w04): f′ = 0 at stationary points and the sign of f′; differentiating cubics; cubic graphs; factorising quadratics.
Stops after: stationary points with both coordinates; local maximum, local minimum or neither from a table of slopes; increasing and decreasing x-values. No f″, no optimisation.
Handoff: math-a11-c17: "a hot-air balloon's height formula: what does h′(10) actually tell us?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): f and heights teal; f′ and tangents violet; stationary points amber; "+" up token, "−" down token; x blue; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: exactly where, and which is which?
> Here's that pump track, side on. Its height, x metres along, is x cubed minus nine x squared plus twenty-four x, all over twenty, in metres. It rises to a crest, dips into a hollow, then climbs again. When you sketched cubics before, you could find where they cross the axis, but the turns were only a guess. Now we have the derivative. Where exactly are the crest and the hollow? And how can we prove which one is the crest, without just trusting the picture? How do we find and justify the stationary points of a **cubic**?

Visual: opens on c15's final frame exactly (the pump-track plate `ma11-pump-track-v1.png` with its coded profile, "heights × 2", "y = (x³ − 9x² + 24x)/20 m", "crest: where exactly?", "hollow: where exactly?", "which is which? prove it", "Next: stationary points of a cubic", "?"). On the first sentence the "Next" chips fade. On "rises to a crest" the rider runs the profile once, its violet tangent tilting up, flattening, down, flattening, up, with a live "gradient" readout. On "When you sketched cubics before" a 300 px grey thumbnail of a w20 cubic sketch with "?" at its turns, grey chip "w20: turns guessed". On "cubic" heading "Stationary points of a cubic: find, then justify". The chips "where exactly?" and "prove it" move to the top right.

### 2. find them: solve f′(x) = 0
> At a crest or a hollow, the track is flat for an instant, so its gradient is zero. These are stationary points. First, differentiate. y prime is three x squared minus eighteen x plus twenty-four, all over twenty. Take out the three, and the quadratic factorises. It's three times x minus two, times x minus four, over twenty. So y prime is zero at x equals two and at x equals **four**. The derivative of a cubic is a quadratic, so a cubic has at most two stationary points. A point needs a height too, so put those back into the original function, not the derivative. At two, the height is twenty over twenty, which is one metre. At four, it's sixteen over twenty, which is zero point eight metres. So the stationary points are two, one, and four, zero point **eight**. Stopping at x equals two and four is the slip. Those are only half of each **point**.

Visual: clear change to the g01 board, the track as a 420 px panel at the right. Task strip, 44 px: "Find the stationary points of y = (x³ − 9x² + 24x)/20." Rows, current 52 px, earlier 32 px and dimmed: "y′ = (3x² − 18x + 24)/20", hand tag "flat: f′ = 0"; "= 3(x² − 6x + 8)/20 = 3(x − 2)(x − 4)/20", hand tag "factorise"; on "four" "y′ = 0: x = 2 or x = 4" (blue); on "at most two" grey chip "cubic → quadratic f′: at most 2". Hand tag "heights from f"; "y(2) = (8 − 36 + 48)/20 = 1"; "y(4) = (64 − 144 + 96)/20 = 0.8" (teal); on "eight" framed answer (green): "(2, 1) and (4, 0.8)", the two amber dots snapping onto the panel's profile. On "point" a red slip "x = 2 and x = 4" writes and is crossed, hand tag "both coordinates".

### 3a. justify: a table of slopes
> Which is the crest? Don't just trust the picture. Justify it with the sign of the gradient on each side. Pick a test value on each side of each stationary point, without going past the next one. Any value will do, as long as it stays in the right stretch. At x equals one, y prime is zero point four five, so the track is rising. At three, it's minus zero point one five, so it's falling. At five, it's zero point four five again, **rising**. So at x equals two, the track goes from rising to falling: up, flat, down. That's a local maximum, the **crest**. At x equals four, it goes from falling to rising: down, flat, up. That's a local minimum, the **hollow**.

Visual: stage change: the track profile full width (1,500 × 420 px, heights × 2) with the table of slopes below it (1,500 × 260 px), columns "x = 1", "x = 2", "x = 3", "x = 4", "x = 5"; rows "y′" and "slope". The rider moves to each column in turn: "0.45, +, ╱" (up token); "0, ─" (amber); "−0.15, −, ╲" (down token); "0, ─"; on "rising" "0.45, +, ╱". On "crest" the verdict under x = 2 writes "local maximum" (green), hand tag "up, flat, down", and the crest on the plate rings. On "hollow" "local minimum" (green) under x = 4, hand tag "down, flat, up", the hollow ringing.

### 3b. local, and where it rises
> Local means it's the highest or lowest point nearby, not necessarily overall. At five metres, the track is just as high as the crest, and beyond that section it keeps on climbing. The same table tells us where the track rises and falls. It's increasing before two metres and after four, and decreasing between two and **four**. So a full answer gives the points, what each one is, and these stretches. That's what justify means: every claim comes with a reason you can point to.

Visual: on "Local means" the end of the profile at x = 5 rings with "1 m" and a dashed teal line joins it to the crest's height, hand tag "local: nearby". On "increasing" the table's sign row extends into a `SignStrip` under the profile: "+" from 0.5 to 2, amber dot, "−" from 2 to 4, amber dot, "+" from 4 to 5; on "four" rows 44 px "increasing: 0.5 ≤ x < 2 and 4 < x ≤ 5", "decreasing: 2 < x < 4" (green frame).

### 4. worked example: a plain cubic
> Here's the same method on a plain cubic. Find the stationary points of f of x equals x cubed minus three x squared, and determine their nature. f prime of x is three x squared minus six x, which is three x times x minus two. That's zero at x equals zero and x equals two. f of zero is zero, and f of two is eight minus twelve, which is minus **four**. So the points are zero, zero, and two, minus four. Now the table. f prime of minus one is nine, f prime of one is minus three, and f prime of three is **nine**. Plus, minus, plus. So zero, zero is a local maximum, and two, minus four is a local **minimum**. Notice the maximum has height zero and the minimum's height is negative. The heights don't decide the nature. The slopes do. Testing x equals three to classify the point at zero is the slip. Three is past the other stationary point, so it tells you nothing about the point at **zero**.

Visual: clear change to the g01 board with a small graph at the right (y = x³ − 3x², 480 px). Task strip, 44 px: "Find the stationary points of f(x) = x³ − 3x² and determine their nature." Rows, 52 px: "f′(x) = 3x² − 6x = 3x(x − 2)"; "f′ = 0: x = 0 or x = 2"; on "four" "f(0) = 0, f(2) = 8 − 12 = −4" (teal). Table of slopes, 44 px: columns −1, 0, 1, 2, 3; on "nine" (second) "9 +, 0, −3 −, 0, 9 +" with glyphs ╱ ─ ╲ ─ ╱. On "minimum" framed answer (green): "(0, 0) local maximum; (2, −4) local minimum"; the small graph's two points ring. On "zero" (last) a red slip "x = 3: f′ > 0, so (0, 0) is a minimum" writes and is crossed, hand tag "test between, not past", with an arrow showing 3 lies beyond x = 2. On "The heights don't decide" the heights "0" and "−4" grey out and the sign row brightens, hand tag "slopes decide, not heights".

### 5. neither: a flat spot that doesn't turn
> A stationary point doesn't have to be a maximum or a minimum. Remember x cubed. Its derivative, three x squared, is zero at the origin, but positive on both sides. In the table, that's up, flat, up. Compare it with the plain cubic's table: here the sign never flips. The curve flattens for an instant and keeps on rising, so it's a stationary point that is neither a maximum nor a **minimum**. That's why we check both sides every time, instead of assuming every stationary point is a turn.

Visual: clear change: two panels side by side (each 820 × 560 px): left, y = x³ − 3x² with its table "╱ ─ ╲ ─ ╱" and verdicts "max", "min"; right, y = x³ with its table "+ 0 +", glyphs "╱ ─ ╱", grey chip "c14, c15: x³". On "minimum" the verdict under x = 0 on the right writes "neither" (amber), hand tag "up, flat, up".

### 6. memory aid
> Here's the summary. Plus to minus, a crest. Minus to plus, a hollow. No change in sign, **neither**. Read the signs from left to right, and always give both coordinates.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the three glyph patterns "╱ ─ ╲", "╲ ─ ╱", "╱ ─ ╱" beside small crest, hollow and flat-spot sketches. Main line, hand font 56 px: "Plus to minus: a crest. Minus to plus: a hollow. No change: neither." On "neither" the key line, 40 px: "Always both coordinates." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Find the stationary points of y equals two x cubed minus three x squared minus twelve x plus five, and determine their nature. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find the stationary points of y = 2x³ − 3x² − 12x + 5 and determine their nature." The full question stays on screen. Picture slot: an empty table of slopes with blank columns. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> d y by d x is six x squared minus six x minus twelve, which is six times x minus two, times x plus one. So x is minus one or **two**. y of minus one is twelve, and y of two is minus **fifteen**. Testing minus two, zero and three gives plus, minus, plus. So minus one, twelve is a local maximum, and two, minus fifteen is a local **minimum**. Giving only the x values is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "y′ = 6x² − 6x − 12 = 6(x − 2)(x + 1)"; on "two" "x = −1 or x = 2"; on "fifteen" "y(−1) = 12, y(2) = −15" (teal); table "24 +, 0, −12 −, 0, 24 +" with glyphs; on "minimum" framed answer (green): "(−1, 12) local maximum; (2, −15) local minimum". On "slip" a red slip "x = −1 and x = 2" writes and is crossed, caption "both coordinates". Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. Show that y equals x cubed minus three x squared plus three x has exactly one stationary point, and that it's neither a maximum nor a minimum. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Show that y = x³ − 3x² + 3x has exactly one stationary point, and that it is neither a maximum nor a minimum." Picture slot: empty table. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> d y by d x is three x squared minus six x plus three, which is three times x minus one, **squared**. That's zero only at x equals one, where y is one, so there's exactly one stationary point, one, **one**. A square is never negative, so d y by d x is positive on both sides. Up, flat, up: it's **neither**. Calling it a turning point because the gradient is zero is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "squared" "y′ = 3x² − 6x + 3 = 3(x − 1)²"; on "one" (last) "y′ = 0 only at x = 1; y(1) = 1: one stationary point (1, 1)"; hand tag "a square is never negative"; table "3 +, 0, 3 +" (x = 0, 1, 2), glyphs ╱ ─ ╱; on "neither" framed answer (green): "(1, 1): neither". On "slip" a red slip "y′ = 0, so a turning point" writes and is crossed. Hold about 1 s.

### 11. handoff
> So the derivative finds exactly where a curve turns, and proves which way it turns. Next, what the derivative means in a real situation, with units. Here's a hot-air balloon. Its height after t minutes is sixty t squared minus t cubed, over fifty, in metres, while it climbs. What does the derivative at ten minutes actually tell us, and in what units? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the paddock strip `ma11-launch-paddock-v1.png` along the bottom and the balloon sprite `ma11-hot-air-balloon-v1.png` (600 px tall) rising from it. On "sixty t squared" chip, 44 px, "h(t) = (60t² − t³)/50 m, t in minutes" (t blue, h teal). On "the derivative at ten minutes" chip "h′(10) = ?" (violet) with an empty units box "? per ?". On "next" chips "Next: what f′(c) means" and "?". Hold about 2 s. This is c17's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Stationary points: solve f′(x) = 0, then find y from f.
- Justify with the sign of f′ just left and right (don't pass another stationary point).
- + then −: local maximum. − then +: local minimum. No change: neither.
- Increasing where f′ > 0; decreasing where f′ < 0 (exclude stationary x).
- Local: highest or lowest nearby, not necessarily overall.

Memory aid (framed card, right side, as in scene 6): *Plus to minus: a crest. Minus to plus: a hollow. No change: neither.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and c17's opening frame.

## Teaching checks

- **Does it explain causes?** Why f′ = 0: the tangent is flat at a crest or hollow (2). Why heights from f: the points are on the curve (2). Why the sign pattern decides: rising then falling makes a crest (3a). Why "local": the track later climbs higher (3b). Why test values stay between stationary points: f′ only changes sign at its zeros (4). Why x³ is neither: f′ keeps its sign (5).
- **Misconceptions addressed:** x-values only (2, A1 crossed); classifying by the sign of f (3a's "don't just trust the picture" and the table's sign of f′); a test past another stationary point (4 crossed); every stationary point a turn (5, A2 crossed).
- **Visual standard, item by item:** 1 the painted pump track from the first frame with a live rider, returning in 2 and 3; 2 a new stage every 30 to 60 s; 3 the profile rider, the table of slopes filling as the rider passes, the side-by-side "neither"; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 2 and 4; 8 framed card and five bullets; 9 the glyphs redrawing the crest's shape under it.
- **One idea at a time:** finding (2), justifying (3a), local and intervals (3b), a plain cubic (4), neither (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 27 s.
- **Avoided double teaching:** the sign of f′ (c14) and x³'s flat spot (c14, c15) are recalled, not re-taught; this video adds the table and the verdicts. Factorising (w04) is used.
- **Syllabus coverage:** `ci6341be75` (2 to 5, A1, A2; key notes 1 to 5).
- **Out of scope by design:** the second derivative and optimisation (Year 12).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Find the stationary points of y = 2x³ − 3x² − 12x + 5 and determine their nature."
Model answer: dy/dx = 6x² − 6x − 12 = 6(x − 2)(x + 1) = 0 at x = −1 and 2. y(−1) = 12, y(2) = −15. Slopes: + then − at x = −1, so (−1, 12) is a local maximum; − then + at x = 2, so (2, −15) is a local minimum. Classic mistake (crossed): "x = −1 and x = 2".

**Attempt 2 (scene 9; pack question 2, original, HSC style, 2 marks suggested).** "Show that y = x³ − 3x² + 3x has exactly one stationary point, and that it is neither a maximum nor a minimum."
Model answer: dy/dx = 3x² − 6x + 3 = 3(x − 1)², zero only at x = 1, where y = 1. dy/dx > 0 on both sides of x = 1, so the curve keeps rising: (1, 1) is a stationary point that is neither. Classic mistake (crossed): "y′ = 0, so a turning point".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Track | y = (x³ − 9x² + 24x)/20, 0.5 ≤ x ≤ 5 | 1 |
| Stationary points | y′ = 3(x − 2)(x − 4)/20; (2, 1), (4, 0.8) | 2 |
| Slopes | y′(1) = 0.45, y′(3) = −0.15, y′(5) = 0.45; max at 2, min at 4 | 3a |
| Local, intervals | y(5) = 1; increasing 0.5 ≤ x < 2 and 4 < x ≤ 5; decreasing 2 < x < 4 | 3b |
| `we-1` | 3x(x − 2); f(2) = −4; 9, −3, 9; (0, 0) max, (2, −4) min | 4 |
| x³ | 3x²; neither at 0 | 5 |
| A1 | 6(x − 2)(x + 1); (−1, 12) max; (2, −15) min; 24, −12, 24 | 7, 8 |
| A2 | 3(x − 1)²; (1, 1) neither; 3, 3 | 9, 10 |
| Handoff | h(t) = (60t² − t³)/50 m (no value stated) | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c10c18/verify.py`); Codex to re-check.

- y = (x³ − 9x² + 24x)/20: y′ = 3(x − 4)(x − 2)/20; y(0.5) = 79/160, y(1) = 4/5, y(2) = 1, y(3) = 9/10, y(4) = 4/5, y(5) = 1; y′(0.5) = 63/80, y′(1) = 9/20, y′(3) = −3/20, y′(5) = 9/20.
- x³ − 3x²: (0, 0), (2, −4); f′(−1) = 9, f′(1) = −3, f′(3) = 9.
- x³: f′(−1) = 3, f′(0) = 0, f′(1) = 3.
- 2x³ − 3x² − 12x + 5: y′ = 6(x − 2)(x + 1); y(−1) = 12, y(2) = −15; y′(−2) = 24, y′(0) = −12, y′(3) = 24.
- x³ − 3x² + 3x: y′ = 3(x − 1)²; y(1) = 1; y′(0) = y′(2) = 3.

## Memory aid check

- **"Plus to minus: a crest. Minus to plus: a hollow. No change: neither."** Original wording of the first-derivative test. Meaning, as said in scene 6: read the sign of f′ just left then just right of a stationary point; + then − is a local maximum (a crest), − then + a local minimum (a hollow), the same sign both sides neither. Key line: give both coordinates. Assumptions checked: f′ = 0 at the point; the test values lie between neighbouring stationary points; "crest" and "hollow" are local. It helps a new case: x³ − 12x has + − + around −2 and 2, so (−2, 16) is a maximum and (2, −16) a minimum. Introduced after scenes 2 to 5.
- **Considered, not used:** "Up-down peak, down-up dip" (same idea; "plus to minus" names the sign the student actually computes).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,522 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the rider, the table filling) and the 45 s notes scene: about 503 s. Characters per scene (1 to 12, with 3a and 3b counted separately): 521, 844, 650, 474, 879, 486, 165, 159, 367, 174, 363, 365, 75. Speech before the notes is about 410 s, under the 570 s cap. Feedback speech: about 28 s and 27 s.

Reserve trims if the voiced take runs long: scene 5's last sentence; scene 1's "When you sketched cubics before" sentence (keep the thumbnail).

## Scene list and build ids

Lesson key `m-a11c16` (route math-a11-c16). Explainer folder `src/explainer/lessons/math-a11-c16`; build inputs in `docs/production/claude-pm/lessons/math-a11-c16/` (at voicing).

In order (13 scene headings): hook-pump-track, solve-fprime-zero, slope-table, local-and-intervals, example-cubic, neither, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 42 s | 1 | c15's frame; the rider on the track |
| 42 to 98 s | 2 | g01 board: f′ = 0 and the heights |
| 98 to 145 s | 3a | Track and table of slopes |
| 145 to 168 s | 3b | Local, and the sign strip |
| 168 to 228 s | 4 | g01 board: x³ − 3x² |
| 228 to 258 s | 5 | Side by side: neither |
| 258 to 272 s | 6 | Framed memory card |
| 272 to 375 s | 7 to 10 | Question cards and countdowns, then feedback |
| 375 to 403 s | 11 | The hot-air balloon |
| 403 to 448 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c15's last frame continues into 1; 1 to 2 clear change to the board; 2 to 3a stage change; 3a to 3b the table extends into a strip; 3b to 4 clear change to the board; 4 to 5 clear change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11c16-learning-review.md`, `science_check` = `checks/m-a11c16-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only, file list): no balloon or paddock plate exists; the pump track is c15's brief.

Need (painted, new; see the Codex asset brief): `ma11-hot-air-balloon-v1.png` and `ma11-launch-paddock-v1.png` (this video's handoff and c17). Reused: `ma11-pump-track-v1.png` with its profile sidecar (c15's brief).

Coded: the profile, rider, tangent, readouts, tables of slopes, glyphs, sign strip, every graph and row, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `FunctionRider` (plate-profile rider, c05's addition), `SignStrip`, `StudioPlot`, `WorkingBoard`, `TaskStrip`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Table of slopes** (new layout of `SignStrip`): columns at chosen x-values (tests and stationary points), rows for the f′ value, its sign and a slope glyph (╱ ─ ╲), and a verdict row; the columns fill when the rider reaches them. Check: every sign matches the computed f′ at its column; verdicts follow the sign pattern.

## Codex asset brief (Maths A11 C16, a hot-air balloon and its launch paddock; open c17)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c16.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c16 build (its final frame shows these plates). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-hot-air-balloon-v1.png` (1200 × 1700 px): a hot-air balloon in flight seen side-on from a distance: a teal-and-amber striped envelope, the wicker basket below with its burner frame; the basket's rim is high enough that no one is visible. No flame glow, no logo or lettering on the envelope.
2. `ma11-launch-paddock-v1.png` (2600 × 500 px): a wide strip of green paddock with a low fence line and a few gum trees on gently rolling hills, seen side-on at ground level, the top fading to transparent so code can place the sky and the balloon.

Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, a composite of the balloon over the paddock at two heights, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c16-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm no second derivative, f″ or "point of inflection" appears in learner copy.
4. Confirm every test value lies between neighbouring stationary points, and every classification follows the sign of f′ either side.
5. Confirm the track plate's painted edge matches the formula within the sidecar tolerance and the × 2 label is on screen whenever the profile is.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c15's final frame.

## YouTube metadata (draft)

Title: Stationary Points of a Cubic: Find Them, Then Prove Which Is Which | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson08.sa.html

A pump track rises to a crest, dips into a hollow and climbs again. Where exactly are they, and how do you prove which is which? Solve f′(x) = 0, find both coordinates from f, then justify each point with a table of slopes: plus to minus is a local maximum, minus to plus a local minimum, no change is neither. Find where the cubic increases and decreases, and see a stationary point that isn't a turn. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Identify stationary points on the graph of a cubic function, and the values of x for which the function is increasing and/or decreasing, by first calculating the derivative, and justify conclusions"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: Sketching the graph of f′. Next: What f′(c) means in a real situation.

#Year11Maths #MathsAdvanced #StationaryPoints #HSCScience

## Open decisions

- **1. Near idea with Year 12's hike (root).** A Year 12 design anchors on a hike's elevation profile with a flat ledge; this pump track is a short cubic section with a crest and hollow and no ledge. Judged distinct; if root disagrees, the fallback anchor is the same profile as a skate-park bump (but skateboards appear in several designs).
- **2. Real slope at the track's start (Codex check).** The section starts at x = 0.5 m, where the real slope is about 38°; earlier the cubic is steeper than a real pump track, so the section is cropped there.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from c14, c07, w20 and w04; check that "justify" is felt as the table of slopes, that "local" is clear from the track's end, that test values are seen to stay between stationary points, and that "neither" is the third verdict, not an exception), then the Codex maths check and error check, then voicing and a build to grade A.
