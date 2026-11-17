# Maths A11 T14b: How do we prove further trig identities? Why a matching graph is not a proof, the one-side proof layout, reducing to sin and cos, factorising with the Pythagorean identity, and simplifying with stated restrictions (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. This is the second of two videos split from the outline's t14 (see `../checks/root-decisions-maths-a11-t09-t16.md`, split 1). Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,044 characters by script (see "Narration length estimate"), 13 scene headings, about 470 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: seventy-first video of Year 11 Mathematics Advanced (2024), outline order 71 (second part), Trigonometric identities and equations. Pre-design pack: `../pre-design/maths-a11/math-a11-t14.md` (brief 243). Site lessons (read through the pack's quotations, read only): `trigonometric-identities-and-equations/lesson10.sa.html` (`we-1`, tan θ + cot θ = sec θ cosec θ, with its steps and restriction; drill 2, (1 − cos² x)/(sin x cos x) = tan x) and `lesson02.sa.html` (`we-1`, sin⁴ θ − cos⁴ θ = 2 sin² θ − 1; short answer 3, sin² θ/(1 − cos θ) = 1 + cos θ with cos θ ≠ 1). Route entry: `math-a11-t14` in `../../programme/maths-a11-route-inputs-4.json`. Visual system: maths studio kit; a pure-proof lesson anchored on a visual surprise in a coded graphing app (standard item 1 allows this), with t04's painted wall clock for the handoff; every graph, board row and reason coded.

Owner rules applied: as e08 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, a visual-surprise anchor (two graphs that agree, and two that only seem to), Australian spelling, no em dashes, "zero point" decimals, conversational narration, the reciprocal ratios spoken "secant", "cosecant" and "cotangent").

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Trigonometric identities and equations), quoted from `../../programme/maths-a11-route-inputs-4.json`:

- `ci1ff2042e` (shared with t14a; here: prove further identities and simplify, by substitution and by reduction to sin x and cos x): "Apply trigonometric identities to solve problems, simplify expressions and prove further trigonometric identities using substitution and/or reduction to sin x and cos x"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c

**Boundary:** starts from t14a's final frame exactly (a coded graphing-app screen plotting y = tan x + cot x (teal) and y = sec x cosec x (violet, dashed) for −π < x < π, lying exactly on top of each other with gaps at multiples of π/2; chips "same graph?", "is that a proof?", "Next: proving identities", "?"). Recalls t12 (tan = sin/cos, cot = cos/sin, sec = 1/cos, cosec = 1/sin, and their exclusions), t14a (the three Pythagorean identities and their rearrangements) and w02 (common denominators, factorising, the difference of two squares) in a phrase or grey chip each. Teaches: why a graph is evidence and not a proof (two expressions that agree to the pixel in one window, then split); the proof layout (start from the busier side, one side only, a reason on every line, finish at the other side; never assume the result); reduction to sin and cos with a common denominator (site lesson10 `we-1`); substitution with the difference of two squares (site lesson02 `we-1`); simplifying with a cancelled factor and its restriction (site short answer 3). Stops at proving and simplifying. Not taught: solving equations (t15a, t15b, t16); double-angle or sum formulas (Year 12 Extension 1, not Advanced).

## Decisions

- **Anchor: two graphs that agree, and two that only seem to (coded graphing app; visual surprise, standard item 1's pure-proof case).** t14a's app shows tan x + cot x and sec x cosec x landing on each other. The hook then plots y = sin x and y = x for −0.25 ≤ x ≤ 0.25: they also land on each other, to the pixel, yet zooming out splits them (sin 1 ≈ 0.84). A matching picture in one window is evidence, not proof; a proof must show equality for every angle where both sides exist. No painted plate is needed for a lesson about proof; the clock in the handoff is t15a's anchor. The app is unbranded (`ScreenApp`), as e08.
- **Simulations (standard item 3).**
  1. **Zoom-out split** (scene 1; `AppGraph` with a zoom): the window widens smoothly from ±0.25 to ±3; y = sin x (teal) and y = x (violet) peel apart, with a live readout of the gap at x = 1, "sin 1 = 0.841, not 1"; then the same zoom on tan x + cot x and sec x cosec x keeps them together at every scale.
  2. **Proof ladder** (`WorkingBoard` proof mode, new small addition; scenes 2 to 5): the LHS sits at the top-left, the RHS is shown greyed at the top-right as the target; each new row writes under the last with "=" at the left and a grey reason at the right ("tan = sin/cos", "common denominator", "Pythagorean identity", "difference of two squares"); the target lights green only when the last row matches it.
  3. **Factor glow** (scenes 4, 5): the parts that factorise or cancel glow in matching colours before the step ("sin² θ + cos² θ" glows teal → "1"; "1 − cos θ" glows violet top and bottom → cancels).
- **Colour roles (fixed for this video).** The left-hand side and its rows **blue** (the input of the proof); the target right-hand side **teal** (the output); reasons grey; substituted identities keep t14a's colours (cos violet, sin amber); answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As e08 (current lines and readouts 52 px, strips 44 px, reasons 32 px grey, nothing below 26 px, all text above y = 950). Hand tags: "one window", "evidence, not proof", "busier side", "sin and cos", "one side only", "a reason on every line", "common denominator", "= 1", "split it", "squares of squares", "aim for sin only", "factorise, then cancel", "cos θ ≠ 1".
- **Stage changes (standard item 2).** The app and the zoom-out (1); the proof rules beside a crossed both-sides attempt (2); proof ladder, site lesson10 `we-1` (3); proof ladder, site lesson02 `we-1` (4); g01 board, a simplification (5); the app with a counterexample (6); framed card (7); question cards (8 to 11); the clock for t15a (12); key notes (13).
- **Worked examples (g01 layout, proof ladder).** 3: lesson10 `we-1`: tan θ + cot θ = sec θ cosec θ (sin θ, cos θ ≠ 0). 4: lesson02 `we-1`: sin⁴ θ − cos⁴ θ = 2 sin² θ − 1. 5: lesson02 short answer 3: sin² θ/(1 − cos θ) = 1 + cos θ (cos θ ≠ 1). Crossed slips: working on both sides (2), "1/cos θ − cos θ = 1 − cos² θ" (A1), "cot x" (A2). 6: one counterexample (original): sin θ + cos θ = 1 fails at 45°.
- **Memory aid.** Framed card: "Busy side first: write it in sin and cos, then simplify towards the other side." Second line: "One side only, a reason on every line."
- **Visual surprise.** y = sin x and y = x agree to the pixel near 0 and then split as the window widens, while tan x + cot x and sec x cosec x stay together at every zoom.
- **Site notes (pack section 8).** lesson10 `we-1`'s restriction ("where sin θ ≠ 0 and cos θ ≠ 0") is kept. lesson02 short answer 3's "cancel (where cos θ ≠ 1)" is kept. "csc" is written "cosec". No double-angle results are used.
- **Plain meanings at first use.** Proof ("a chain of equal expressions from one side to the other, each step with a reason"); LHS and RHS ("the left-hand side and the right-hand side"); "assume the result" ("start from the thing you're trying to show, as if it were already true").
- **Attempts (pack question 1 and site drill).** A1 (pack question 1): prove sec θ − cos θ = sin θ tan θ; crossed "1/cos θ − cos θ = 1 − cos² θ" (the common denominator lost). A2 (site lesson10 drill 2): simplify (1 − cos² x)/(sin x cos x) = tan x; crossed "cot x".
- **Mistake scene:** none separate. Treating a graph as a proof (1); working on both sides or starting from the identity (2 crossed); dividing without stating a restriction (3, 5 conditions); losing a denominator (A1 crossed); a flipped fraction (A2 crossed).
- **Cause chain taught, in order:** (1) a graph shows one window to the nearest pixel, so it can mislead; a proof must hold for every angle (1); (2) a proof is a chain of equal expressions, so it must start from one side and only use true steps; starting from the identity assumes it (2); (3) writing everything in sin and cos leaves only two ratios, linked by the Pythagorean identity, so terms combine (3); (4) spotting a known pattern (a difference of two squares) lets the identity replace a factor with 1 (4); (5) a factor can be cancelled only where it is non-zero, which sets the restriction (5); (6) an identity must hold at every angle, so one angle where it fails disproves it (6).
- **Entry knowledge (route):** t14a (the three Pythagorean identities and their rearrangements); t12 (reciprocal and quotient identities and their exclusions); w02 (algebraic fractions, common denominators, the difference of two squares).
- **What later videos rely on.** t16 uses sin² θ = 1 − cos² θ to reduce a mixed equation (t14a), not the proof layout. Year 12 calculus proofs (for example d/dx tan x) reduce to sin and cos in the same way and recall "write it in sin and cos".
- **Handoff (to math-a11-t15a, "How do we find every solution of sin θ = k, cos θ = k or tan θ = k in a domain?").** Scene 11: t04's wall clock plate `ma11-wall-clock-v1.png` (numerals-free face) with a coded minute hand at 10 minutes past (turned 60° from twelve), a dashed level line at half the hand's length above the centre, the tip on it; chips "height = L cos(6m°)", "half a hand-length: cos(6m°) = 0.5", a coded calculator strip "cos⁻¹(0.5) = 60° → m = 10"; a grey ghost hand at 50 minutes past with its tip on the same line and "?"; chips "Next: solving trig equations" and "?". This is t15a's opening frame (the t15 pack's start, re-set on the clock; see the decisions file).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Hook window: −0.15 ≤ x ≤ 0.15 with y on the same scale (about 700 px tall): the largest gap, at x = ±0.15, is 0.15 − sin 0.15 = 0.00056, about 1.3 px, so the curves look identical. The builder checks the gap is at most 2 px. sin 1 = 0.8415.
  (b) lesson10 `we-1`: tan θ + cot θ = (sin² θ + cos² θ)/(sin θ cos θ) = 1/(sin θ cos θ) = sec θ cosec θ.
  (c) lesson02 `we-1`: (sin² θ − cos² θ)(sin² θ + cos² θ) = sin² θ − cos² θ = sin² θ − (1 − sin² θ) = 2 sin² θ − 1.
  (d) Short answer 3: (1 − cos² θ)/(1 − cos θ) = (1 − cos θ)(1 + cos θ)/(1 − cos θ) = 1 + cos θ (cos θ ≠ 1).
  (e) A1: 1/cos θ − cos θ = (1 − cos² θ)/cos θ = sin² θ/cos θ = sin θ tan θ (cos θ ≠ 0). A2: sin² x/(sin x cos x) = sin x/cos x = tan x (sin x, cos x ≠ 0).
  (f) Clock (handoff): the minute hand turns 6° per minute from twelve; the tip's height above the centre is L cos(6m°); cos(6m°) = ½ at 6m = 60° and 300°, m = 10 and 50 (answered in t15a).
  (g) Pronunciations: "sine to the fourth theta"; "two sine squared theta minus one"; "L H S" is not voiced: the narration says "the left side".

Main question: *How do we prove further trig identities? If two expressions make the same graph, is that a proof?*
Entry knowledge (t12, t14a, w02): the reciprocal and quotient identities; the Pythagorean identities; algebraic fractions and factorising.
Stops after: the one-side proof layout with reasons; reduction to sin and cos; substitution with factorising; simplification with restrictions. No equations.
Handoff: math-a11-t15a: "a clock's minute hand is half a hand-length above the centre when cos(6m°) = 0.5. The calculator says 10 minutes past. What about 50?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): left side blue; target right side teal; reasons grey; cos violet; sin amber; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · TRIGONOMETRIC IDENTITIES AND EQUATIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: same graph, but is it proof?
> Here are two expressions that make exactly the same graph, tangent x plus cotangent x, and secant x times cosecant x. Is that a proof that they're equal? Look at another pair. Near zero, y equals sine x and y equals x also sit right on top of each other. But zoom **out**, and they split apart. Sine of one is about zero point eight four, not one. A graph only shows one window, to the nearest pixel, so it's good evidence, but it isn't a proof. A proof shows the two sides are equal for every angle where they both exist. The first pair stays together however far we **zoom**. So how do we prove that it always will?

Visual: opens on t14a's final frame exactly (the app with y = tan x + cot x and y = sec x cosec x overlapping; chips "same graph?", "is that a proof?", "Next: proving identities", "?"). On the first sentence the "Next" chips fade. On "Look at another pair" the app clears to y = sin x (teal) and y = x (violet) in a narrow window around 0 (−0.15 ≤ x ≤ 0.15, so the two curves are at most 2 px apart; author note a): one line, hand tag "one window". On "out" the window widens smoothly to −3 ≤ x ≤ 3 and the curves peel apart; at x = 1 a readout "sin 1 = 0.841, not 1" rings. Hand tag "evidence, not proof". On "zoom" the app returns to the first pair and zooms out from ±0.5 to ±3π: the two graphs stay together at every scale. Heading "Proving identities"; the question chip "How do we prove it for every angle?" moves to the top right.

### 2. the rules of a proof
> A proof is a chain of equal expressions, from one side to the other. Start with the side that looks busier, because there's more to simplify. Rewrite everything in sine and cosine, using the identities from earlier. Then use algebra, like common denominators and factorising, and the Pythagorean identity, until you reach the other **side**. Give a reason on every line. And work on one side only. Writing the identity down first and changing both sides at once assumes what you're trying to prove. That's the **slip**.

Visual: stage change: a rules card at the left (900 px), 44 px, one rule per cue with a small icon: "1. Start with the busier side" (hand tag "busier side"); "2. Write it in sin and cos" (grey chip "t12: tan = sin/cos, cot = cos/sin, sec = 1/cos, cosec = 1/sin"; hand tag "sin and cos"); "3. Simplify: common denominators, factorise, sin² + cos² = 1" (grey chip "t14a, w02"); on "side" "4. Stop when you reach the other side"; "5. A reason on every line" (hand tag "a reason on every line"). At the right, a small proof ladder outline: the LHS box at the top, the greyed target RHS at the top-right, arrows only downward from the LHS, hand tag "one side only". On "slip" a red slip board writes "tan θ + cot θ = sec θ cosec θ" at the top and then both sides changing below it, and is crossed, caption "assumes the result".

### 3. worked example: reduce to sine and cosine
> Prove that tangent theta plus cotangent theta equals secant theta times cosecant theta. The left side has two terms, so start there. Tangent theta is sine over cosine, and cotangent theta is cosine over **sine**. Add them over the common denominator, sine theta times cosine theta. The top becomes sine squared theta plus cosine squared theta, and that's the Pythagorean identity, so the top is **one**. Now one over sine theta cosine theta splits into one over cosine theta, times one over sine theta. That's secant theta times cosecant theta, which is the right **side**. It holds wherever sine and cosine are both non-zero, which is exactly where both sides exist.

Visual: clear change to the proof ladder (full width). Task strip, 44 px: "Prove that tan θ + cot θ = sec θ cosec θ." LHS box (blue) "LHS = tan θ + cot θ" at the top-left; target "RHS = sec θ cosec θ" (teal, greyed) at the top-right. Rows, current 52 px, earlier 32 px dimmed, each with a grey reason at the right: on "sine" "= sin θ/cos θ + cos θ/sin θ" | "tan = sin/cos, cot = cos/sin" (hand tag "sin and cos"); "= (sin² θ + cos² θ)/(sin θ cos θ)" | "common denominator" (hand tag "common denominator"); the numerator glows teal; on "one" "= 1/(sin θ cos θ)" | "Pythagorean identity" (hand tag "= 1"); "= 1/cos θ × 1/sin θ" | "split" (hand tag "split it"); on "side" "= sec θ cosec θ = RHS" | "sec = 1/cos, cosec = 1/sin"; the target lights green and a ✓ draws. Grey condition row: "sin θ ≠ 0, cos θ ≠ 0".

### 4. worked example: squares of squares
> Next, prove that sine to the fourth theta, minus cosine to the fourth theta, equals two sine squared theta minus one. Start on the left. Fourth powers are squares of squares, so this is a difference of two squares. It factorises into sine squared minus cosine squared, times sine squared plus cosine **squared**. The second bracket is the Pythagorean identity, so it's one, and we're left with sine squared theta minus cosine squared **theta**. The right side has only sine, so aim for sine. Replace cosine squared theta with one minus sine squared theta. That gives sine squared theta, minus one, plus sine squared theta, which is two sine squared theta minus one. That's the right **side**.

Visual: the ladder clears row by row (stage continues). Task strip: "Prove that sin⁴ θ − cos⁴ θ = 2 sin² θ − 1." LHS box: "LHS = sin⁴ θ − cos⁴ θ"; target "RHS = 2 sin² θ − 1" (greyed). Rows, 52 px, reasons grey: "= (sin² θ)² − (cos² θ)²" | "squares of squares" (hand tag "squares of squares"); on "squared" "= (sin² θ − cos² θ)(sin² θ + cos² θ)" | "difference of two squares (w02)"; the second bracket glows teal; on "theta" "= (sin² θ − cos² θ) × 1" | "Pythagorean identity"; the target's "sin only" glows, hand tag "aim for sin only"; "= sin² θ − (1 − sin² θ)" | "cos² θ = 1 − sin² θ"; on "side" "= 2 sin² θ − 1 = RHS" | "collect"; the target lights green with ✓.

### 5. simplify, and say where
> Simplifying works the same way, with one extra job. Simplify sine squared theta, over one minus cosine theta. Replace sine squared theta with one minus cosine squared theta. That's a difference of two squares, one minus cosine theta, times one plus cosine **theta**. Now cancel the factor one minus cosine theta, top and bottom. We can only cancel it where it isn't zero, so where cosine theta isn't one. The answer is one plus cosine **theta**, with cosine theta not equal to one. Every time you divide or cancel, say where it's allowed.

Visual: clear change to the g01 board (`WorkingBoard`). Task strip, 44 px: "Simplify sin² θ/(1 − cos θ)." Rows, 52 px, reasons grey: "= (1 − cos² θ)/(1 − cos θ)" | "sin² θ = 1 − cos² θ"; on "theta" "= (1 − cos θ)(1 + cos θ)/(1 − cos θ)" | "difference of two squares"; the two "1 − cos θ" factors glow violet top and bottom and slash, hand tag "factorise, then cancel"; on "theta" (second) "= 1 + cos θ" (green frame) with "cos θ ≠ 1" (grey frame beside it), hand tag "cos θ ≠ 1".

### 6. one counterexample is enough
> Not every equation that looks reasonable is an identity. Is sine theta plus cosine theta equal to one, for every angle? Try forty-five degrees. Root two over two, plus root two over two, is root two, about one point four one, not **one**. So it isn't an identity. It's true at zero and ninety degrees, but not everywhere. To prove an identity, you need every angle. To show an equation isn't one, a single angle is **enough**.

Visual: clear change: the app returns (`ScreenApp`, 1,200 × 700 px): y = sin x + cos x (teal) and y = 1 (violet, dashed) for 0 ≤ x ≤ 2π; they meet only at x = 0, π/2 and 2π (points ringing). On "one" the point at x = π/4 rings with readout "sin 45° + cos 45° = √2 ≈ 1.41"; board row at the left, 52 px: "θ = 45°: √2/2 + √2/2 = √2 ≠ 1" (green frame "not an identity"), hand tag "one counterexample". On "enough" a two-column strip, 44 px: "prove: every angle" | "disprove: one angle".

### 7. memory aid
> Here's the summary. Start with the busier side, write it in sine and cosine, and simplify towards the other side, with a reason on every line. One side only, and say where any cancelling is **allowed**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: a small proof ladder with its target lighting green. Main line, hand font 56 px: "Busy side first: write it in sin and cos, then simplify towards the other side." On "allowed" the key line, 40 px: "One side only, a reason on every line." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Prove that secant theta minus cosine theta equals sine theta times tangent theta. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Prove that sec θ − cos θ = sin θ tan θ." The full question stays on screen. Picture slot: an empty proof ladder with "LHS =" at the top-left and "RHS" greyed at the top-right. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Secant theta is one over cosine theta, so the left side is one over cosine theta, minus cosine theta. Over the common denominator, that's one minus cosine squared theta, over cosine **theta**, which is sine squared theta over cosine theta. Split it as sine theta times sine over cosine, which is sine theta tangent **theta**. Dropping the denominator, and writing one minus cosine squared, is the slip.

Visual: the card shrinks to the top (30 px). Ladder rows, 44 px, reasons grey: "LHS = 1/cos θ − cos θ" | "sec = 1/cos"; on "theta" "= (1 − cos² θ)/cos θ" | "common denominator"; "= sin² θ/cos θ" | "Pythagorean identity"; on "theta" (second) "= sin θ × sin θ/cos θ = sin θ tan θ = RHS" (green frame), ✓; grey "cos θ ≠ 0". On "Dropping" a red slip "1/cos θ − cos θ = 1 − cos² θ" writes and is crossed, caption "keep the denominator". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Simplify one minus cosine squared x, all over sine x times cosine x. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Simplify (1 − cos² x)/(sin x cos x)." Picture slot: empty. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The top, one minus cosine squared x, is sine squared **x**. Cancel one sine x, top and bottom, which leaves sine x over cosine x. That's tangent **x**, where sine x and cosine x aren't zero. Turning it upside down, and writing cotangent x, is the slip.

Visual: the card shrinks to the top. Rows, 44 px: on "x" "= sin² x/(sin x cos x)" | "1 − cos² x = sin² x"; "= sin x/cos x"; on "x" (second) "= tan x" (green frame) with "sin x ≠ 0, cos x ≠ 0" (grey). On "Turning it upside down" a red slip "cot x" writes and is crossed, caption "sin over cos is tan". Hold about 1 s.

### 12. handoff
> Identities let us rewrite. Next, we solve. Here's the wall clock from related angles again. After m minutes, the minute hand has turned six m degrees from twelve, and the tip's height above the centre is the hand's length times cosine of six m degrees. When is the tip exactly half a hand-length above the centre? Cosine of six m degrees equals a half. A calculator says sixty degrees, so ten minutes past. But at ten to the hour, the tip is at exactly the same height. So how do we find every solution? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the wall clock plate `ma11-wall-clock-v1.png` (720 px, numerals-free face) at the left with a coded minute hand (ink); a dashed vertical from the centre up to twelve; on "six m degrees" a blue arc "6m°" from twelve to the hand; on "height" a dashed teal drop from the tip to the vertical line, chip "height = L cos(6m°)". On "half a hand-length" the hand sits at 10 past (60°) and a dashed amber level line at L/2 crosses the clock; chip "cos(6m°) = 0.5". On "A calculator says" a coded calculator strip "cos⁻¹(0.5) = 60° → m = 10". On "ten to the hour" a grey ghost hand appears at 50 minutes past (300°), its tip on the same level line, chip "?". On "next" chips "Next: solving trig equations" and "?". Hold about 2 s. This is t15a's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- A matching graph is evidence; one counterexample disproves.
- Prove: start from the busier side; work on one side only.
- Write it in sin and cos; common denominators; sin² θ + cos² θ = 1.
- Spot a difference of two squares: 1 − cos² θ = (1 − cos θ)(1 + cos θ).
- When you cancel or divide, state the restriction (cos θ ≠ 1).

Memory aid (framed card, right side, as in scene 7): *Busy side first: write it in sin and cos, then simplify towards the other side.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and t15a's opening frame.

## Teaching checks

- **Does it explain causes?** Why a graph is not a proof: it shows one window to the nearest pixel, and sin x against x shows two curves that agree and then split (1). Why one side only: a chain of equal expressions; starting from the identity assumes it (2). Why sin and cos: only two ratios remain, linked by the Pythagorean identity (3). Why factorise: a known pattern lets a bracket become 1 (4). Why a restriction: cancelling needs a non-zero factor (5).
- **Misconceptions addressed:** a graph as proof (1); an equation true at some angles taken as an identity (6); both sides at once (2 crossed); no restriction (3, 5); a lost denominator (A1 crossed); a flipped fraction (A2 crossed).
- **Visual standard, item by item:** 1 the app's surprise from the first frame (t14a's frame, a pure-proof lesson's visual anchor), and the painted clock in 11; 2 a new stage every 35 to 60 s; 3 the zoom-out split, the proof ladder with its target lighting, the factor glow; 4 fixed roles (LHS blue, target teal); 5 large type; 6 hand tags; 7 g01-style ladders and board in 3 to 5, framed answers and crossed slips; 8 framed card and five bullets; 9 the curves that split while the true pair holds.
- **One idea at a time:** graph against proof (1), the rules (2), reduce to sin and cos (3), factorise and substitute (4), simplify with a restriction (5), disprove with one angle (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 30 s and 18 s.
- **Avoided double teaching:** t12's and t14a's identities and w02's algebra are recalled in a phrase or grey chip.
- **Syllabus coverage:** `ci1ff2042e` (proving further identities by reduction to sin x and cos x (3, A1) and by substitution (4); simplifying (5, A2); disproving (6); key notes 1 to 5), completing the point with t14a.
- **Out of scope by design:** equations (t15a onward); double-angle results.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Prove that sec θ − cos θ = sin θ tan θ."
Model answer: LHS = 1/cos θ − cos θ = (1 − cos² θ)/cos θ = sin² θ/cos θ = sin θ × (sin θ/cos θ) = sin θ tan θ = RHS (cos θ ≠ 0). Classic mistake (crossed): "1/cos θ − cos θ = 1 − cos² θ".

**Attempt 2 (scene 10; site lesson10 drill 2, 1 mark suggested).** "Simplify (1 − cos² x)/(sin x cos x)."
Model answer: (1 − cos² x)/(sin x cos x) = sin² x/(sin x cos x) = sin x/cos x = tan x (sin x ≠ 0, cos x ≠ 0). Classic mistake (crossed): "cot x".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | sin 1 ≈ 0.841; window set so sin x and x differ by at most 2 px | 1 |
| lesson10 `we-1` | (sin² θ + cos² θ)/(sin θ cos θ) = sec θ cosec θ | 3 |
| lesson02 `we-1` | sin⁴ θ − cos⁴ θ = 2 sin² θ − 1 | 4 |
| Short answer 3 | sin² θ/(1 − cos θ) = 1 + cos θ, cos θ ≠ 1 | 5 |
| Counterexample | sin 45° + cos 45° = √2 ≈ 1.41 ≠ 1 | 6 |
| A1 | sin² θ/cos θ = sin θ tan θ | 8, 9 |
| A2 | tan x | 10, 11 |
| Handoff | cos(6m°) = 0.5; cos⁻¹(0.5) = 60°; m = 10 (50 not stated) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (17 Nov 2026, scratchpad `t/verify.py`); Codex to re-check.

- sin 1 = 0.84147.
- tan θ + cot θ − sec θ cosec θ simplifies to 0 (SymPy leaves it as tan θ + cot θ − 2/sin 2θ, which is 0 since sin 2θ = 2 sin θ cos θ; numerical check at five angles).
- sin⁴ θ − cos⁴ θ − (2 sin² θ − 1) simplifies to 0.
- sin² θ/(1 − cos θ) − (1 + cos θ) simplifies to 0 for cos θ ≠ 1.
- sec θ − cos θ − sin θ tan θ simplifies to 0.
- (1 − cos² x)/(sin x cos x) − tan x simplifies to 0.
- sin 45° + cos 45° = √2 = 1.4142.
- cos⁻¹(0.5) = 60°.

## Memory aid check

- **"Busy side first: write it in sin and cos, then simplify towards the other side."** Original. Meaning, as said in scene 7: begin a proof with the side that has more to simplify, rewrite every ratio in sin and cos (t12), then use algebra and the Pythagorean identity to reach the other side. Assumptions checked: "busy" is a heuristic, not a rule (either side is valid if the chain reaches the other); "write it in sin and cos" is not always needed (scene 4 uses substitution within sin and cos already), so the second line carries the rules that always apply. It helps a new case: to prove cot θ + tan θ = cosec θ sec θ, start on the left and follow scene 3.
- **"One side only, a reason on every line."** The two non-negotiable rules, both shown before the card.
- **Considered, not used:** "LHS → RHS" as the card (correct but carries no strategy).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `t/count.py`): 5,044 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 20 s of settling (the zoom, the ladders' targets, the counterexample graph) and the 45 s notes scene: about 470 s. Characters per scene (1 to 13): 609, 511, 655, 680, 530, 418, 198, 114, 394, 100, 244, 516, 75. Speech before the notes is about 374 s, under the 570 s cap. Feedback speech: about 30 s and 18 s.

Reserve trims if the voiced take runs long: scene 1's "Sine of one is about zero point eight four, not one" (keep the readout); feedback 1's "Over the common denominator" becomes "Combined" if it measures over 30 s.

## Scene list and build ids

Lesson key `m-a11t14b` (route math-a11-t14, part b). Explainer folder `src/explainer/lessons/math-a11-t14b`; build inputs in `docs/production/claude-pm/lessons/math-a11-t14b/` (at voicing).

In order (13 scene headings): hook-graph-not-proof, proof-rules, example-sin-cos, example-squares-of-squares, simplify-restriction, one-counterexample, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 50 s | 1 | The app: the true pair, the zoom-out split |
| 50 to 85 s | 2 | Rules card and the crossed both-sides board |
| 85 to 140 s | 3 | Proof ladder: tan θ + cot θ |
| 140 to 195 s | 4 | Proof ladder: sin⁴ θ − cos⁴ θ |
| 195 to 235 s | 5 | g01 board: a simplification with its restriction |
| 235 to 268 s | 6 | The app: one counterexample |
| 268 to 285 s | 7 | Framed memory card |
| 285 to 372 s | 8 to 11 | Question cards and countdowns, then feedback |
| 372 to 412 s | 12 | The clock (t15a's frame) |
| 412 to 457 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t14a's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change to the ladder; 3 to 4 ladder row clear; 4 to 5 clear change to the board; 5 to 6 clear change to the app; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-t14b-learning-review.md`, `science_check` = `checks/m-a11-t14b-maths-check.md`.

## Assets

Reused: `ma11-wall-clock-v1.png`, briefed in t04's design (a numerals-free cream face with twelve ticks and no hands; t04 uses its hour marks for related angles). It returns here, in t15a and in t15b with a coded minute hand, a deliberate callback: t04's mirror-image hour marks are exactly the pairs of solutions t15a finds.

Coded: the app and graphs, the zoom, the rules card, the proof ladders and reasons, the board, the clock's hands, arcs and level line, the calculator strip, countdown, key notes.

### Studio kit use and additions

Uses: `ScreenApp`, `AppGraph`, `WorkingBoard`, `TaskStrip`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Proof ladder** (small, a `WorkingBoard` mode): an LHS box, a greyed target RHS, rows with "=" aligned at the left and a grey reason column at the right; the target lights green with a ✓ only when the final row's expression string matches it.
2. **App zoom** (small): a smooth window change on `AppGraph` from one x-range to another, keeping equal y-scaling rules; a readout pinned to a chosen x.
3. **Clock hands on a plate** (small, shared with t15a and t15b): a coded minute hand from the clock plate's centre (sidecar) at angle 6m° clockwise from twelve, with a ghost-hand option and a level line at a chosen fraction of the hand's length.

## Codex asset brief

No new plate. `ma11-wall-clock-v1.png` is painted under t04's brief and must exist before the t04 build, so it is ready for t14b.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every identity under "Numbers to verify" with a CAS, and every expression in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly, and that `ci1ff2042e` is marked as shared with t14a.
3. Confirm every proof starts from one side, never manipulates both sides, and gives a reason on each row.
4. Confirm each cancellation or division states its restriction.
5. Confirm the hook's window keeps sin x and x within 2 px, and that the zoom-out shows them separating.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on t14a's final frame.

## YouTube metadata (draft)

Title: How to Prove Trig Identities | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson02.sa.html

Two expressions make the same graph in an app. Is that a proof? See why not, then learn how to prove a trig identity: start with the busier side, write everything in sin and cos, use common denominators, factorising and sin² θ + cos² θ = 1, and give a reason on every line. Prove tan θ + cot θ = sec θ cosec θ and sin⁴ θ − cos⁴ θ = 2 sin² θ − 1, and simplify an expression while stating where cancelling is allowed. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Trigonometric identities and equations.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply trigonometric identities to solve problems, simplify expressions and prove further trigonometric identities using substitution and/or reduction to sin x and cos x"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c

Builds on: The Pythagorean identities. Next: Solving trig equations in a domain.

#Year11Maths #MathsAdvanced #TrigIdentities #HSCScience

## Open decisions

- **1. No painted anchor (root).** This is a proof lesson anchored on the app's visual surprise (standard item 1's pure-proof case); the clock appears only in the handoff. If root wants a plate in the first 20 s, the t14a mixing-desk badge can return in scene 1 with its "= 1.000" readout, as a reminder of why sin² + cos² = 1 is trusted.
- **2. sin x against x (learning review).** The hook uses y = sin x and y = x near 0 only as a picture of two curves agreeing in a window; no small-angle result is taught or named. Check it does not distract.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from t12, t14a and w02; check that the zoom-out convinces that a graph is not a proof, that the both-sides slip is clear, that each ladder row is one step with its reason, and that the restriction in scene 5 is understood as caused by cancelling), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
