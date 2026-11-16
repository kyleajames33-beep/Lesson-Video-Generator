# Maths A11 W14: Where are a function's zeros, and how does the discriminant place a parabola? Zeros, intercepts and f(0), factored form, and the discriminant with the sign of a (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models). Not voiced (no `math-a11-w14/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,723 characters, 14 scene headings, about 521 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w14-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Optional, feedback 1 ("minus, times minus two, times five"): **accepted**: "That's the negative of minus two times five, so plus ten, and the point is zero, ten."

Narration now 5,723 characters by script, about 521 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: fourteenth video of the Year 11 Mathematics Advanced course (outline playlist order 14), after w13 (break-even and simultaneous linear models) and before w15 (completing the square for the vertex and axis). Last video of this design batch. Pre-design pack: `../pre-design/maths-a11/math-a11-w14.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson13.sa.html` (Parabolas: Intercepts and the Discriminant, SHA256 `3cda738ba2076762faf65accb4b5107319c4f517e494f397e45ba8cfb49e9919`, `we-1`, `we-2`, `we-3`). Every number recalculated with SymPy. Route entry: `math-a11-w14` in `../../programme/maths-a11-route-inputs-1.json`.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording; painted plates for the real object (a hammock on a freestanding frame, in three sag states) over a reused painted lawn strip, coded parabolas, sliders, readouts and algebra; no people, hands or faces (the hammock's load is unstated and never drawn); one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (a backyard, not science); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-1.json`:

- `ci9169adaa` (Introduction to functions and relations): "Refer to a value in the domain of a function at which the function is 0 as a zero of the function"
- `ci40fe4286` (Introduction to functions and relations): "Recognise that the x-intercepts of the graph of y = f(x) are its zeroes, the solutions of f(x) = 0, and that the y-intercept is f(0)"
- `ci7b0b3647` (Quadratic and cubic functions): "Identify the x-intercepts of a parabola whose quadratic function is expressed in factored form"
- `cicd85f895` (Quadratic and cubic functions): "Use the discriminant to determine the number of x-intercepts on a parabola and justify its position in relation to the x-axis"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w13's final frame (the profit line P = 2n − 200 ringed at its zero, n = 100, and the hammock on its frame with "clears?", "touches?", "drags?"). Defines a zero of a function in general, first on that linear profit function (`ci9169adaa`, filling the site's gap); x-intercepts as zeros, the solutions of f(x) = 0, and the y-intercept as f(0) (`ci40fe4286`); x-intercepts from factored form by the null factor law (w04), on the hammock and the site's `we-1` (`ci7b0b3647`); the discriminant (w05) as the count of x-intercepts, watched on the hammock's sag and the site's `we-2`, then with the sign of a as the side of the axis, on the site's `we-3` (`cicd85f895`). Stops at intercepts and position. Not taught: the vertex, the axis of symmetry and completing the square for graphs (w15; the handoff asks for the lowest point as a question only); sketching a full parabola (w15); cubics (later); solving quadratic inequalities (w18). Site `we-2` (3x² − 4x + 2, Δ = −8) is the counting example, before `we-3` adds the side.

## Decisions

- **Anchor: a hammock on a freestanding frame (painted plates, live).** The height of the hammock above the grass, x metres along from the left attachment, is a parabola that opens upward (a > 0). With both rope ends fixed at 1.5 m, the hammock's sag decides everything the lesson asks: a light sag clears the grass (no zeros; Δ < 0 and a > 0, so wholly above); a deeper sag just touches (one zero; Δ = 0); a deeper sag still would dip below the grass in the model, so the real hammock drags on the ground between the two zeros (Δ > 0). The rope's height at the left end is the y-intercept, f(0) = 1.5, which never changes while the zeros appear, so f(0) and the zeros are seen to be different questions. The dragging state has a clean factored form, h(x) = ½(x − 1)(x − 3), whose zeros are where the hammock meets the grass. A backyard, leisure, not science; distinct from Year 12's i12 stone footbridge arch (even symmetry) and d15 skateboard (smooth joins), and from every other Year 12 anchor; distinct from the w01 to w07 packs' suggestions (w05's basketball shot is a different object and question) and from this batch. The pack's skate ramp (d15's skateboard context) and bakery break-even (w13 just did break-even) were rejected; its netball pass carries zeros and f(0) but never "wholly above".
- **Idealising assumptions (author notes, not learner copy).** (i) A hanging hammock is closer to a catenary than a parabola; the narration says "model" ("its height is modelled by"). (ii) The rope ends are fixed at 1.5 m, 4 m apart; the load that changes the sag is not named or drawn. (iii) In the dragging state the model goes below 0 between x = 1 and x = 3; the real hammock lies on the grass there (said in scene 3).
- **The model.** h(x) = a·x(x − 4) + 1.5 for 0 ≤ x ≤ 4, with three plate states: light a = 1/4: h = ¼x² − x + 1.5, lowest 0.5 m, Δ = −½; touching a = 3/8: h = ⅜x² − 1.5x + 1.5, lowest 0 m at x = 2, Δ = 0; dragging a = 1/2: h = ½x² − 2x + 1.5 = ½(x − 1)(x − 3), zeros 1 and 3, Δ = 1. In every state h(0) = h(4) = 1.5.
- **Simulations (standard item 3).**
  1. **The sag slider** (scenes 1 and 5, the main simulation; new `CrossingCounter` in a sag mode): a slider "sag" drives a from 0.2 to 0.55; the coded curve h(x) on an equal-scale plot redraws live with both ends pinned at (0, 1.5) and (4, 1.5); a `LiveReadoutBoard` shows "Δ = b² − 4ac" (violet, to 2 decimals) and "x-intercepts" (amber: 0, 1 or 2), both computed from the same a, so they cannot disagree; the painted hammock cross-fades between its three states as a passes 1/4, 3/8 and 1/2; amber dots appear at the zeros as soon as they exist and split apart as the sag deepens.
  2. **The null factor lights** (scenes 3, 4; `ExpressionSlot` on the factored form): each bracket of the factored form lights in turn, its "= 0" writes, and the matching intercept dot drops onto the x axis with its sign flipped (x − 1 lights the dot at +1); the leading number glows grey with "can't be 0".
  3. **The y-axis probe** (scenes 2, 3): a vertical line at x = 0 slides in from the left and meets the curve; the meeting point's height reads out as f(0) (blue).
- **Colour roles (fixed for the whole video).** Zeros and x-intercepts **amber** (`MATH_AMBER`); the y-intercept f(0) **blue** (`MATH_BLUE`); the discriminant Δ **violet** (`MATH_GRADIENT`); the leading coefficient a and the side of the axis **teal** (`MATH_TEAL`); the curve ink; the grass (the x axis in the anchor) a coded green-grey line, labelled "grass: h = 0"; answer **green**; mistake **red**, crossed slips only.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "zero: f(x) = 0", "height 0", "x = 0 here", "f(0)", "one bracket = 0", "sign flips", "can't be 0", "Δ < 0: none", "Δ = 0: touches", "Δ > 0: two", "a > 0: opens up", "wholly above", "both facts", "lies on the grass", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** w13's frame becomes the hammock and its sag (1); the profit line's zero and the general definition with the y-axis probe (2); the dragging hammock's factored form (3); g01 board, the site's factored form (4); the sag slider with Δ (5); g01 board, counting the crossings (6); the two side panels and the g01 board, positive for all x (7); framed memory card (8); question cards with pictures (9 to 12); the lowest-point handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** Scene 4 (`we-1`): y = 2(x − 3)(x + 1) has x-intercepts 3 and −1 and y-intercept −6; crossed slip "x = −3 and x = 1" captioned "each zero has the opposite sign". Scene 6 (`we-2`): y = 3x² − 4x + 2 has Δ = −8, so no x-intercepts; crossed slip "−4² = −16" captioned "(−4)² = +16". Scene 7 (`we-3`): y = 2x² + 3x + 5 is positive for all real x (Δ = −31 < 0 and a = 2 > 0); crossed slip "Δ < 0, so y > 0" captioned "you also need a > 0". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Δ counts the crossings. a says which side." with the key line "Δ > 0: two. Δ = 0: touches. Δ < 0: none, so a > 0 above, a < 0 below." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** As the sag deepens, the y-intercept readout f(0) = 1.5 never moves, while the x-intercept count jumps from 0 to 1 to 2 and the discriminant readout crosses zero at exactly the moment the hammock touches the grass (scene 5). The touching point is where Δ = 0, seen, not stated.
- **Site numbers unchanged.** `we-1`: (3, 0), (−1, 0), (0, −6). `we-3`: Δ = −31, a = 2, positive for all x. `we-2`: Δ = −8, never crosses (scene 6).
- **Attempts (pack questions, original).** A1: "Find all the intercepts of y = −(x − 2)(x + 5)." Answer (2, 0), (−5, 0), (0, 10). Crossed: "x = −2 and x = 5". A2: "Show that y = −x² + 4x − 7 lies entirely on one side of the x-axis, and state which side." Answer Δ = −12 < 0 and a = −1 < 0: wholly below, y < 0 for all x. Crossed: "Δ < 0, so it lies above the axis".
- **Mistake scene:** none separate. Intercepts without reversing the sign (4 crossed; A1 crossed); the leading factor giving an intercept (4 tag); squaring −4 as −16 (6 crossed); "Δ < 0 means positive" (7 crossed; A2 crossed); a touching point counted as two intercepts (5 tag "one point"); f(0) confused with a zero (2, 5).
- **Cause chain taught, in order:** (1) a zero is an input where the function's value is 0 (2); (2) on a graph the value is the height, so zeros are where the graph meets the x axis, the solutions of f(x) = 0 (2); (3) the y axis is where x = 0, so the y-intercept is f(0) (2, 3); (4) a product is 0 only when one factor is 0, so each bracket of a factored form gives one zero, with the opposite sign to its number (3, 4); (5) the discriminant counts the real solutions of f(x) = 0 (w05), so it counts the x-intercepts, and a negative b squares to a positive (5, 6); (6) a curve that never meets the axis must stay on one side, and a's sign says which way it opens, so Δ < 0 with a > 0 means wholly above, and with a < 0 wholly below (7).
- **Entry knowledge (route):** w05 (the discriminant counts real roots); w08 (f(0) and substitution); w04 (the null factor law); w13 (the profit function, for the opening only).
- **Learner-visible vocabulary (plain meaning at first use):** zero of a function (an input where the function equals 0, 2); x-intercept, y-intercept (recalled from w11 for lines, extended to curves, 2); factored form (a quadratic written as a product of brackets, 3); discriminant Δ = b² − 4ac (recalled from w05, 5); "wholly above" (every point of the curve is above the axis, 6).
- **Handoff (to w15, "How does completing the square reveal the vertex and axis of a parabola?").** Scene 12: the light hammock (`ma11-hammock-frame-high-v1.png`) with its curve h = ¼x² − x + 1.5, a "?" at its lowest point and a dashed vertical "axis?" line through it, chips "Next: the lowest point and the line of symmetry" and "?". This is w15's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) h_a(x) = a·x(x − 4) + 1.5 = ax² − 4ax + 1.5; Δ = 16a² − 6a = 2a(8a − 3), zero at a = 3/8; lowest point (2, 1.5 − 4a): 0.5, 0, −0.5 for a = 1/4, 3/8, 1/2.
  (b) ½(x − 1)(x − 3) = ½x² − 2x + 1.5; h(0) = ½(−1)(−3) = 1.5.
  (c) `we-1`: 2(x − 3)(x + 1): zeros 3, −1; y(0) = 2(−3)(1) = −6. `we-3`: 3² − 4(2)(5) = −31; minimum 31/8 at x = −3/4 (author only). `we-2`: (−4)² − 4(3)(2) = −8.
  (d) A1: −(x − 2)(x + 5): zeros 2, −5; y(0) = −(−2)(5) = 10. A2: 4² − 4(−1)(−7) = −12; maximum −3 at x = 2 (author only).
  (e) Pronunciations: "delta", "b squared minus four a c", "one and a half", "a half, times x minus one, times x minus three", "minus thirty-one". Voice-pilot item: "delta" (w05 should fix it first).
  (f) Windows: hammock plot x −0.5 to 4.5, y −0.8 to 2.0, equal scale, matched to the plate's 300 px per metre; worked-example plots x −3 to 5, y −8 to 8 (not equal scale, labelled).

Main question: *A hammock hangs from a frame. Does it clear the grass, just touch it, or drag along it? Where are a function's zeros, and how can the discriminant and the sign of a tell where a parabola sits, without drawing it?*
Entry knowledge (w05; w08; w04): the discriminant counts real roots; f(0) by substitution; the null factor law.
Stops after: zeros, x-intercepts as solutions of f(x) = 0, the y-intercept as f(0), intercepts from factored form, the discriminant with the sign of a. No vertex, axis or full sketch.
Handoff: math-a11-w15: the light hammock's lowest point and its line of symmetry (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): zeros amber; f(0) blue; Δ violet; a and the side teal; curve ink; grass line green-grey; answer green; mistake red, crossed slips only. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: clear, touch or drag?
> Here's that hammock, hanging from a frame. Its rope ends are one and a half metres up, four metres apart, and it sags in between. A light hammock clears the grass. Load it more, and it sags lower, until it just **touches**. Load it more again, and it drags along the **ground**. Its height above the grass can be modelled by a parabola, a function of the distance along. So where is that height zero? And how can we tell whether a curve clears the ground, without drawing it at all?

Visual: opens on w13's final frame exactly (the small profit line ringed at its zero at the top left, the painted hammock `ma11-hammock-frame-high-v1.png` on the tiled grass strip `ma12-cricket-grass-strip-v1.png`, chips "clears?", "touches?", "drags?", "Next: where is a function zero?" and "?"). On the first sentence the "Next" chip and the profit line fade, and the heading writes on: "Where are a function's zeros, and where does a parabola sit?". The hammock grows to about 1,200 px wide (300 px per metre), with coded ticks "0 m" and "4 m" under the rope ends and a coded height mark "1.5 m" at the left end. On "light" the "clears?" chip ticks. On "touches" the plate cross-fades to `ma11-hammock-frame-touch-v1.png` and the chip "touches?" ticks, its touching point ringed. On "ground" the plate cross-fades to `ma11-hammock-frame-drag-v1.png` and "drags?" ticks. On "modelled by a parabola" the coded curve h(x) draws over the bed in ink, matching the plate, with axes along the grass (x, "metres along") and up the left end (y, "height (m)"). On the last sentence the chip "Where is it zero? Which side of the ground?" moves to the top right as the scene question.

### 2. zeros, intercepts and f(0)
> First, a name. A value of x where a function equals zero is called a zero of the function. You've met one already. The stall's profit, two n minus two hundred, was zero at a hundred cups, its break-even. So one hundred is a zero of the profit **function**. On a graph, the function's value is the height, so a zero is where the graph meets the x **axis**. That means the x intercepts of y equals f of x are its zeros, the solutions of f of x equals zero. And the y intercept is where x is zero, so it's simply f of **zero**.

Visual: clear change. Left half: the profit line P = 2n − 200 on axes (n 0 to 200, P −200 to 200; 760 × 520 px), teal above the axis, grey below (w13's roles), ringed at (100, 0). Definition chip, 44 px: "zero of f: an x where f(x) = 0" (amber). On "function" the row "P(100) = 2(100) − 200 = 0" (52 px) with "100" amber. On "axis" the right half shows the dragging hammock's curve on its plot (the plate small above it, 480 px, solid) and two amber dots land at (1, 0) and (3, 0), hand tag "height 0". Row: "x-intercepts = zeros = solutions of f(x) = 0" (44 px). On "zero" (last bold) the y-axis probe (simulation 3) slides in at x = 0 on both graphs: on the profit line it meets (0, −200), on the hammock (0, 1.5), each in blue with "f(0)" tags, hand tag "x = 0 here".

### 3. the hammock in factored form
> For the dragging hammock, the height, x metres along, is h of x equals a half, times x minus one, times x minus **three**. Its y intercept is h of zero. Put in zero: a half, times minus one, times minus three, is one and a half. That's the rope's height at the left end, as **expected**. Now the zeros. A product is zero only when one of its factors is zero. The half can't be zero, so either x minus one is zero, or x minus three is zero. So x is one, or x is **three**. Between those points the model dips below zero, which can't happen, so the real hammock lies on the grass from one metre to three metres **along**.

Visual: camera continue onto the dragging hammock: plate `ma11-hammock-frame-drag-v1.png` (about 1,200 px wide, solid) with the coded curve and axes over it. Equation strip, 52 px: "h(x) = ½(x − 1)(x − 3)" with each bracket in a dashed slot; on "three" (first bold) the strip settles. On "h of zero" the y-axis probe at x = 0 and the row "h(0) = ½(0 − 1)(0 − 3) = 1.5" (52 px, "1.5" blue); on "expected" the coded "1.5 m" mark at the left rope end pulses. On "A product is zero" a chip "A × B = 0 ⇒ A = 0 or B = 0" (44 px), hand tag "one bracket = 0". The null factor lights run (simulation 2): the "½" glows grey with "can't be 0"; "(x − 1)" lights, "x − 1 = 0, x = 1" writes and an amber dot drops onto the grass line at 1; on "three" (second bold) "(x − 3)" lights, "x = 3", dot at 3, hand tag "sign flips". On "dips below zero" the curve's part between 1 and 3 shows dashed below the grass line in grey, and on "along" a green-grey bracket on the plate between the dots, hand tag "lies on the grass".

### 4. worked example 1: intercepts from factored form
> Here's the same idea on its own. Find all the intercepts of y equals two, times x minus three, times x plus one. Set each bracket to zero. X minus three is zero when x is **three**, and x plus one is zero when x is minus **one**. Notice the signs flip: plus one in the bracket gives minus one. The two in front can't be zero, so it doesn't give an intercept. For the y intercept, put x equals zero: two, times minus three, times one, which is minus **six**. So the intercepts are three, zero, minus one, zero, and zero, minus six.

Visual: clear change to the g01 board. Task strip, 44 px: "Find all intercepts of y = 2(x − 3)(x + 1)." (site `we-1`). Givens card: "y = 2(x − 3)(x + 1)", with each bracket boxed amber and the "2" boxed grey. A plot at the right (x −3 to 5, y −8 to 8, labelled scales; 600 × 520 px) with empty axes. Rows, 52 px: on "three" (first bold) "x − 3 = 0 ⇒ x = 3", amber dot at (3, 0); on "one" "x + 1 = 0 ⇒ x = −1", dot at (−1, 0), hand tag "sign flips". On "The two in front" the "2" glows grey, tag "2 ≠ 0: no intercept". On "put x equals zero" the probe at x = 0; on "six" "y = 2(−3)(1) = −6", blue dot at (0, −6). Framed answer (green): "(3, 0), (−1, 0), (0, −6)", and the parabola draws through the three dots. A red slip "x = −3 and x = 1" writes small at the right and is crossed (caption "each zero has the opposite sign").

### 5. the discriminant counts the crossings
> Not every quadratic comes factored, and some never reach zero at all. From an earlier video, the discriminant, b squared minus four a c, counts a quadratic's real roots. Roots of f of x equals zero are its zeros, so the discriminant counts the x intercepts. Watch the hammock's sag deepen, while its rope ends stay put. While it clears the grass, the discriminant is negative: no zeros, and no x **intercepts**. When it just touches, the discriminant is zero: one point, where the curve touches the axis without **crossing**. Sag it further, and the discriminant turns positive: two zeros, and the curve meets the axis **twice**. And all the while, the y intercept stays at one and a **half**.

Visual: clear change to the sag slider (simulation 1). Left two-thirds: the painted hammock (about 1,100 px wide) with its coded curve and the grass line as the x axis; under it the slider "sag" (teal track). Right third: `LiveReadoutBoard` (52 px): "Δ = b² − 4ac" (violet), "x-intercepts" (amber), "f(0)" (blue). On "b squared minus four a c" a chip "Δ = b² − 4ac (from w05)". On "Roots of f of x equals zero" a hand tag "roots = zeros". On "Watch" the slider starts at a = 0.2 (Δ = −0.56). On "intercepts" the slider holds at a = 1/4 (light plate): "Δ = −0.50", "x-intercepts 0", hand tag "Δ < 0: none". On "crossing" the slider reaches a = 3/8, the plate cross-fades to the touching state, "Δ = 0.00", "x-intercepts 1", a single amber dot at (2, 0), hand tag "Δ = 0: touches (one point)". On "twice" the slider moves to a = 1/2, the dragging plate, "Δ = 1.00", "x-intercepts 2", the dot splitting into two at 1 and 3, hand tag "Δ > 0: two". On "half" the f(0) readout "1.5" pulses (it has not changed), with the probe's blue dot fixed at (0, 1.5).

### 6. worked example 2: counting the crossings
> Here's the count on its own. How many times does y equals three x squared minus four x plus two cross the x axis? Read the coefficients with their signs: a is three, b is minus four, and c is **two**. The discriminant is minus four, all squared, minus four times three times two. Minus four squared is plus sixteen, and four times three times two is twenty-four. So it's sixteen minus twenty-four, which is minus **eight**. It's negative, so the curve never crosses the x axis at all. Writing minus four squared as minus sixteen is the classic slip. A negative number squared is **positive**.

Visual: clear change to the g01 board. Task strip, 44 px: "How many times does y = 3x² − 4x + 2 cross the x-axis?" (site `we-2`). Givens card, on "two": "a = 3 (teal), b = −4, c = 2", with "b = −4" ringed, hand tag "keep the sign". Equation strip: "Δ = b² − 4ac" (violet). Rows, 52 px, one at a time: "Δ = (−4)² − 4(3)(2)", with "(−4)²" boxed amber; "= 16 − 24"; on "eight" "= −8 < 0" (violet), and an x-intercept counter beside the board reads "0", hand tag "Δ < 0: none". Framed answer (green): "Δ = −8 < 0: it never crosses the x-axis". On "positive" a red slip "−4² = −16, so Δ = −16 − 24 = −40" writes and is crossed, caption "(−4)² = +16". A small plot at the right draws the curve clear of its axis, with a teal "?" chip "above or below?" that carries into scene 7.

### 7. which side: the sign of a
> But a negative discriminant only says the curve never meets the axis. It doesn't say which side it's on. That's the job of a. If a is positive, the parabola opens upwards, so a curve that never meets the axis must sit wholly above it. If a is negative, it opens downwards, and sits wholly **below**. So, show that y equals two x squared plus three x plus five is positive for all real x. The discriminant is three squared, minus four times two times five. That's nine minus forty, which is minus thirty-**one**. It's negative, so the curve never meets the x axis. And a is two, which is positive, so the curve opens upwards, and lies wholly above the axis. So y is positive for every real **x**. You need both facts. A negative discriminant on its own doesn't **prove** it.

Visual: clear change. Top: two small panels (each 520 × 300 px): an upward parabola floating above its axis with "a > 0: opens up" (teal) and a downward one below its axis with "a < 0: opens down"; on "below" both panels carry "Δ < 0" and the tags "wholly above" and "wholly below". Below them the g01 board. Task strip, 44 px: "Show that y = 2x² + 3x + 5 is positive for all real values of x." (site `we-3`). Givens card: "a = 2 (teal), b = 3, c = 5". Rows, 52 px, one at a time: "Δ = 3² − 4(2)(5)"; on "one" "= 9 − 40 = −31 < 0" (violet), hand tag "never meets the x axis". On "And a is two" the row "a = 2 > 0: opens upwards" (teal), and a plot at the right draws the curve wholly above its axis (lowest point not labelled). On "x" (last bold) the framed answer (green): "Δ < 0 and a > 0, so y > 0 for all real x", hand tag "both facts". On "prove" a red slip "Δ < 0, so y > 0" writes small and is crossed (caption "you also need a > 0").

### 8. memory aid
> Here's a way to keep the two jobs apart. The discriminant counts the crossings. The sign of a says which side. Positive discriminant, two crossings. Zero, it touches. Negative, none, and then a tells you whether the whole curve is above the axis, or **below** it.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: three tiny hammock sketches (drag, touch, clear) above an axis line, with "2", "1", "0" counts. Main line, hand font 60 px: "Δ counts the crossings. a says which side." On "below" the key line, 40 px: "Δ > 0: two. Δ = 0: touches. Δ < 0: none, so a > 0 above, a < 0 below." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find all the intercepts of y equals minus, x minus two, times x plus five. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find all the intercepts of y = −(x − 2)(x + 5)." The full question stays on screen. Picture slot: empty axes (x −7 to 4, y −4 to 14) with no dots and no curve. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Set each bracket to zero: x is two, or x is minus **five**. For the y intercept, put x equals zero. That's the negative of minus two times five, so plus ten, and the point is zero, **ten**. Saying x is minus two and five is wrong. Each intercept has the opposite sign to the number in its **bracket**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "y = −(x − 2)(x + 5)" ("(x − 2)", "(x + 5)" and the leading "−" underlined as used). Rows, 52 px: "x − 2 = 0 ⇒ x = 2"; on "five" "x + 5 = 0 ⇒ x = −5", amber dots at 2 and −5. On "put x equals zero" "y = −(0 − 2)(0 + 5) = −(−10)"; on "ten" "= 10", blue dot at (0, 10). Framed answer (green): "(2, 0), (−5, 0), (0, 10)"; the downward parabola draws through them. On "bracket" a red slip "x = −2 and x = 5" writes and is crossed (hand caption "opposite sign"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Show that y equals minus x squared plus four x minus seven lies entirely on one side of the x axis, and state which side. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Show that y = −x² + 4x − 7 lies entirely on one side of the x-axis, and state which side." The full question stays on screen. Picture slot: an empty x axis line with a "?" above it and a "?" below it (no curve). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Here a is minus one, b is four, and c is minus seven. The discriminant is sixteen minus twenty-eight, which is minus **twelve**. It's negative, so the curve never meets the x axis. And a is negative, so it opens downwards. It lies wholly **below** the axis, so y is negative for every x. Saying it's above the axis, just because the discriminant is negative, is wrong. That ignores the sign of **a**.

Visual: the card shrinks to the top. `GivensStrip`: "a = −1 (teal)", "b = 4", "c = −7" (underlined in the card as used). Rows, 52 px: "Δ = 4² − 4(−1)(−7) = 16 − 28"; on "twelve" "= −12 < 0" (violet). Row "a = −1 < 0: opens downwards" (teal). On "below" the curve draws wholly below the axis on the picture's axis line, framed answer (green): "Δ < 0 and a < 0: wholly below, y < 0 for all x". On "a" (last bold) a red slip "Δ < 0, so above the axis" writes and is crossed (hand caption "check the sign of a"). Hold about 1 s.

### 13. handoff
> So zeros are where a function equals zero, which are the x intercepts, and the y intercept is f of zero. Factored form gives the zeros straight away, and the discriminant, with the sign of a, places a parabola against the axis. One question is left. Where exactly is the hammock's lowest point, and what line is it symmetric **about**?

Visual: the memory line shows small at the top (30 px), then fades on "One question". Board clears to the light hammock (`ma11-hammock-frame-high-v1.png`, about 1,100 px wide, solid) on the grass strip, with its coded curve h = ¼x² − x + 1.5 and the axes; a "?" ring at the curve's lowest point (unlabelled). On "about" a dashed vertical line through the lowest point labelled "axis?". Chips "Next: the lowest point and the line of symmetry" and "?". Hold about 2 s. This is w15's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Zero of f: an x where f(x) = 0.
- x-intercepts are the zeros. y-intercept is f(0).
- y = a(x − p)(x − q): x-intercepts p and q.
- Δ > 0: two. Δ = 0: touches. Δ < 0: none.
- Δ < 0: a > 0 wholly above; a < 0 wholly below.

Memory aid (framed card, right side of the notes screen, as in scene 8): *Δ counts the crossings. a says which side.* Key: *Δ > 0: two. Δ = 0: touches. Δ < 0: none, so a > 0 above, a < 0 below.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the light hammock with its curve, the "?" at the lowest point, the dashed "axis?" line, "Next: the lowest point and the line of symmetry"). This is the final frame and w15's opening frame.

## Teaching checks

- **Does it explain causes?** Why a zero is where the graph meets the x axis: the value is the height (2). Why the y-intercept is f(0): the y axis is where x = 0 (2, 3). Why each bracket gives a zero: a product is 0 only when a factor is 0 (3, 4). Why the sign flips: x − 1 = 0 when x = +1 (3, 4). Why the leading number gives no intercept: it is never 0 (4). Why the discriminant counts intercepts: intercepts are the real roots of f(x) = 0 (5, 6). Why (−4)² = 16: a negative times a negative (6). Why Δ < 0 alone is not enough: the curve could be wholly above or wholly below; a's sign decides (7).
- **Misconceptions addressed:** unreversed signs (4 crossed; A1 crossed); the leading factor as an intercept (4 tag); a touching point as two intercepts (5 tag); (−4)² as −16 (6 crossed); "Δ < 0 means positive" (7 crossed; A2 crossed); f(0) confused with a zero (2, 5 readouts).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted hammock from the first seconds, in three states, returning in 2, 3, 5 and 13; 2 a new stage every 30 to 60 s; 3 the sag slider with live Δ, intercept count and f(0), the null factor lights, the y-axis probe; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 4, 6 and 7, framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the Δ readout crossing zero at the instant the hammock touches, while f(0) never moves.
- **One idea at a time:** definitions (2), factored form on the anchor then alone (3, 4), the count (5, 6), the side (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with a picture; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 22 s and 30 s.
- **Avoided double teaching:** the discriminant formula and its three cases for roots (w05) and the null factor law (w04) are recalled, not re-taught; this video adds what they mean for the graph.
- **Syllabus coverage:** `ci9169adaa` (2; key note 1); `ci40fe4286` (2, 3, 4; A1; key note 2); `ci7b0b3647` (3, 4; A1; key note 3); `cicd85f895` (5, 6, 7; A2; key notes 4, 5).
- **Out of scope by design:** vertex and axis (w15); full sketching (w15); cubics; quadratic inequalities (w18).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Find all the intercepts of y = −(x − 2)(x + 5)."
Model answer: x-intercepts: x − 2 = 0 or x + 5 = 0, so x = 2 or x = −5, giving (2, 0) and (−5, 0). y-intercept: y = −(0 − 2)(0 + 5) = 10, giving (0, 10). Classic mistake (crossed): "x = −2 and x = 5".

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "Show that y = −x² + 4x − 7 lies entirely on one side of the x-axis, and state which side."
Model answer: a = −1, b = 4, c = −7. Δ = 16 − 28 = −12 < 0, so the curve has no x-intercepts. a = −1 < 0, so it is concave down (opens downwards). Hence it lies wholly below the x-axis: y < 0 for all real x. Classic mistake (crossed): "Δ < 0, so it lies above the axis".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Profit zero (w13) | P = 2n − 200; P(100) = 0; P(0) = −200 | 2 |
| Hammock model | h = a·x(x − 4) + 1.5; h(0) = 1.5; a = 1/4, 3/8, 1/2: Δ = −0.5, 0, 1; lowest 0.5, 0, −0.5 m | 1, 2, 3, 5, 13 |
| Dragging state | ½(x − 1)(x − 3) = ½x² − 2x + 1.5; zeros 1, 3; h(0) = 1.5 | 2, 3, 5 |
| Slider start | a = 0.2: Δ = 16(0.04) − 1.2 = −0.56 | 5 |
| Site `we-1` | 2(x − 3)(x + 1): zeros 3, −1; y(0) = −6 | 4 |
| Site `we-2` | 3x² − 4x + 2: Δ = 16 − 24 = −8; no x-intercepts; crossed −40 | 6 |
| Site `we-3` | 2x² + 3x + 5: Δ = −31; a = 2 > 0; positive for all x | 7 |
| A1 | −(x − 2)(x + 5): (2, 0), (−5, 0), (0, 10); crossed −2 and 5 | 9, 10 |
| A2 | −x² + 4x − 7: Δ = −12; a = −1; wholly below | 11, 12 |
| Handoff | h = ¼x² − x + 1.5 (lowest point not shown) | 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w08w14/verify.py`); Codex to re-check.

- a·x(x − 4) + 1.5 expands to ax² − 4ax + 1.5; Δ = 16a² − 6a; at a = 1/4: −1/2; at 3/8: 0; at 1/2: 1; at 0.2: −0.56. Roots at a = 1/2: 1 and 3; at a = 3/8: 2 (double); at a = 1/4: none real. h(2) = 1.5 − 4a: 0.5, 0, −0.5.
- ½(x − 1)(x − 3) = ½x² − 2x + 1.5; value at 0 is 1.5.
- 2(x − 3)(x + 1): zeros −1, 3; value at 0 is −6.
- 3² − 4(2)(5) = −31; (−4)² − 4(3)(2) = −8 (site `we-2`, scene 6); slip −16 − 24 = −40; minimum of 2x² + 3x + 5 is 31/8 > 0.
- −(x − 2)(x + 5): zeros −5, 2; value at 0 is 10.
- 4² − 4(−1)(−7) = −12; maximum of −x² + 4x − 7 is −3 < 0.

## Memory aid check

- **"Δ counts the crossings. a says which side."** Original. Meaning, as said in scene 8: for a quadratic y = ax² + bx + c, the discriminant gives the number of x-intercepts (two, one touching point, or none), and when there are none, the sign of a gives the side (above for a > 0, below for a < 0). Assumptions checked: a ≠ 0 (a quadratic); real coefficients; "crossings" includes the touching case, which the key line names separately ("touches"). It helps a new case: y = x² + x + 1 has Δ = −3 and a = 1, so it is wholly above. Introduced after the causes in 5, 6 and 7.
- **Considered, not used:** "Positive definite: Δ < 0 and a > 0" (the term is not in the 2024 points and adds jargon).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,723 characters**, 14 scene headings. Characters per scene (1 to 14): 474, 512, 603, 518, 677, 580, 757, 259, 107, 289, 153, 388, 331, 75.

At 13.3 characters per second the speech is about 430 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the plate cross-fades (1), the probe (2), the lit brackets (3, 4), the sag slider's three held states (5) and the side panels (7) about 25 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 521 s (8 min 41 s)**, inside the 5,500 to 6,800 character band and about 49 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 5's "And all the while, the y intercept stays at one and a half." (keep the pulsing readout); scene 7's "A negative discriminant on its own doesn't prove it." (keep the crossed slip). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w14` (route math-a11-w14). Explainer folder `src/explainer/lessons/math-a11-w14`; build inputs in `docs/production/claude-pm/lessons/math-a11-w14/` (to be created at voicing).

In order (kebab-case; 14 scene headings, all `### N.`): hook-hammock, zeros-and-intercepts, hammock-factored, worked-factored, discriminant-count, worked-count, which-side, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | w13's frame; the hammock in three painted states; the model curve |
| 40 to 81 s | 2 | The profit line's zero; the y-axis probe on two graphs |
| 81 to 130 s | 3 | The dragging hammock in factored form; lit brackets |
| 130 to 172 s | 4 | g01 board: intercepts from factored form |
| 172 to 229 s | 5 | The sag slider with live Δ, count and f(0) |
| 229 to 275 s | 6 | g01 board: counting the crossings |
| 275 to 335 s | 7 | The two side panels; g01 board, positive for all x |
| 335 to 356 s | 8 | Framed memory card |
| 356 to 448 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 448 to 475 s | 13 | The light hammock with "?" at its lowest point |
| 475 to 520 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w13's last frame continues into scene 1 (camera continue; the hammock grows); 1 to 2 clear change (two graphs); 2 to 3 camera continue onto the dragging hammock; 3 to 4 clear change (new case); 4 to 5 clear change back to the hammock; 5 to 6 clear change (new case); 6 to 7 camera continue (the "above or below?" chip carries over); 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w14-learning-review.md`, `science_check` = `checks/m-a11w14-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): `maths/ma12-young-gum-tree-v1.png` (viewed: a young staked gum, too thin to hold a hammock, and it carries i-strand meaning); `maths/ma12-cricket-grass-strip-v1.png` (tileable mown grass; reused as the lawn under the hammock). No hammock or frame plate exists.

Need (painted, new; see the Codex asset brief): `ma11-hammock-frame-high-v1.png` (also w13's handoff and w15's opening), `ma11-hammock-frame-touch-v1.png`, `ma11-hammock-frame-drag-v1.png`. Reused: `maths/ma12-cricket-grass-strip-v1.png`.

Coded (studio kit): the curve over the bed, the axes along the grass and the left end, the slider and readouts, the probe, the dots, the brackets and lights, plots, working boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `StudioPlot`, `FunctionSimulator` (draw-as-you-go), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`; `ExpressionSlot` (algebra.tsx) for the lit brackets.

Additions (kit-needs row w14):
1. **`CrossingCounter`** (new; reused by w15 to w18): one timeline drives a quadratic's parameter (modes: `shift` for c, as the kit-needs row describes, and `sag` for a with fixed ends, used here), the curve, a live Δ readout and a live x-intercept count (0, 1, 2, computed from the same coefficients), zero dots that merge and split, and an optional plate cross-fade keyed to parameter values. Props: `mode`, `coeffs(t)`, `plateStates` ({value, src}[]), `readouts`. Checks: sag mode with ends (0, 1.5) and (4, 1.5) gives Δ = −0.5, 0, 1 and counts 0, 1, 2 at a = 1/4, 3/8, 1/2; the count is 1 only within 1e-9 of a = 3/8 (the build holds the slider there for the touching beat).
2. **Plate cross-fade by state** (lesson folder): the three hammock plates share identical framing; the build cross-fades over 0.3 s as the slider passes each state value and holds each state while the narration names it.

## Codex asset brief (Maths A11 W14, a hammock in three states; also w13's handoff and w15's opening)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w14.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w13 build (w13's final frame uses plate 1). Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-timber-deck-v1.png` and `maths/ma12-pen-wall-v1.png`; no text, logos, people, hands, faces, pets, objects in the hammock, sky, glow or shadow beyond a faint contact shadow on the ground line. Never stretch to fit; keep the native aspect ratio.

The three plates are one set, **identical in size, framing, frame, lighting and ground line**, differing only in the hammock's sag. Each is 2100 × 900 px, **painted at equal scale, 300 px per metre**, side-on: a freestanding curved timber hammock frame standing on a flat ground line (the grass is supplied separately as a tile; paint the frame's feet resting on a straight line at y = 800 px), with the hammock's rope ends attached to the frame's two hooks **exactly 4.00 m apart (1,200 px) at 1.50 m (450 px) above the ground line**. The hammock is a plain striped canvas hammock with spreader bars omitted, so that its rope-and-bed line hangs as one smooth curve between the hooks. Take x = 0 at the left hook and heights above the ground line. Paint the line of the hammock's lowest edge to these heights (within 2 per cent of the span), as in root decision 30:

| x (m) | 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| high (a = 1/4) | 1.500 | 1.063 | 0.750 | 0.563 | 0.500 | 0.563 | 0.750 | 1.063 | 1.500 |
| touch (a = 3/8) | 1.500 | 0.844 | 0.375 | 0.094 | 0.000 | 0.094 | 0.375 | 0.844 | 1.500 |
| drag (a = 1/2) | 1.500 | 0.625 | 0.000 | (on the ground) | (on the ground) | (on the ground) | 0.000 | 0.625 | 1.500 |

1. `ma11-hammock-frame-high-v1.png`: the "high" row; the hammock clears the ground with 0.5 m to spare at its middle.
2. `ma11-hammock-frame-touch-v1.png`: the "touch" row; the lowest point just meets the ground line at x = 2 m, with a tiny contact mark.
3. `ma11-hammock-frame-drag-v1.png`: the "drag" row; the hammock meets the ground at x = 1 m and x = 3 m and lies **flat on the ground line between them**, slightly bunched.

Codex reports in one sidecar `ma11-hammock-frame-v1.json`, in file pixels: the ground line y, the two hook points, and the measured lowest-edge heights at the nine x values for each plate. If a plate misses the table by more than 2 per cent of the span, the builder fits the coded curve to the measured points; the plate is never warped. Report inspection on the paper background (`#f6f1e7`) at 1,000 px and 1,200 px wide, the alpha checks, a three-way cross-fade test strip, and each plate with the model curve overlaid.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", the profile table in the asset brief, and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the four syllabus quotes match the route-inputs JSON exactly (including "zeroes" in `ci40fe4286`), and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "a zero is where the graph meets the x axis" (2); "a product is zero only when one of its factors is zero" (3); "the discriminant counts the x intercepts" (5; quadratics with real coefficients); "if a is positive ... a curve that never meets the axis must sit wholly above it" (6); "you need both facts" (6); the model language for the hammock (1, 3).
4. Confirm the site's `we-1`, `we-2` and `we-3` keep their answers, and that `we-2` (scene 6) keeps Δ = −8.
5. Confirm both attempt questions carry every demand, and that neither card or its picture shows a dot, curve or answer.
6. Confirm the opening matches w13's final frame and scene 13's frame is w15's opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate requests contain no people, pets, text or loads in the hammock.

## YouTube metadata (draft)

Title: Zeros, Intercepts and the Discriminant: Where Does a Parabola Sit? | Year 11 Maths Advanced

(Title length: 91 characters; shorter alternative "Zeros, Intercepts and the Discriminant | Year 11 Maths Advanced", 63 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson13.sa.html

A hammock hangs from a frame. Does it clear the grass, just touch it, or drag? Meet the zeros of a function (the inputs where it equals zero), see why the x-intercepts are the zeros and the y-intercept is f(0), and read the intercepts of a parabola straight from factored form. Then watch the hammock sag while the discriminant counts the crossings: negative, none; zero, it touches; positive, two. Finally, use the sign of a to prove a parabola lies wholly above or wholly below the x-axis. A memory aid: Δ counts the crossings, a says which side. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Refer to a value in the domain of a function at which the function is 0 as a zero of the function"
"Recognise that the x-intercepts of the graph of y = f(x) are its zeroes, the solutions of f(x) = 0, and that the y-intercept is f(0)"
"Identify the x-intercepts of a parabola whose quadratic function is expressed in factored form"
"Use the discriminant to determine the number of x-intercepts on a parabola and justify its position in relation to the x-axis"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: the discriminant and the null factor law; f(x) notation. Next: Completing the square: the vertex and axis of a parabola.

#Year11Maths #MathsAdvanced #Parabolas #HSCScience

## Open decisions

- **1. Site `we-2` (root).** The counting example (Δ = −8) is kept as its own short g01 board, because it carries the squared-negative slip and sets up "above or below?" for `we-3`. If time is short, it is the scene to fold into scene 7's first step.
- **2. Hammock model language (learning review).** The narration says the height "can be modelled by a parabola" and that the real hammock "lies on the grass" where the model dips below zero. The reviewer checks that students do not take the dashed below-grass curve as the hammock.
- **3. Title (root).** The 91-character title is near the 100-character limit; use the 63-character alternative if root prefers short titles for this strand.
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w14-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w05, w08 and w04; check that the general definition of a zero lands on the linear profit function before any parabola; that f(0) and the zeros are visibly different questions; that the brackets' sign flip is shown, not only said; that Δ crossing zero lines up with the touching plate at speed; that "both facts" is the reason, not a slogan; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The sag slider, the lit brackets and the probe carry the explanation; judge them at playback speed, not from stills. Every readout, dot and count must be computed from the same coefficients as the displayed curve.
