# Maths A11 C07: Why does x^n differentiate to nx^(n − 1), and how do sums and multiples follow? Inferring the power rule from gradients, checking it with an app, rewriting roots and reciprocals as powers, and the sum and constant multiple rules (design)

Status: Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `w31.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,589 characters by script (see "Narration length estimate"), 14 scene headings, about 510 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-c07-learning-review.md` (summary `../checks/m-a11-c01-c18-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md`. Resolution log: `../checks/m-a11-c01-c18-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scenes 1 and 7 (h now means a height): **accepted**, reviewer's wording. The lookout height is x throughout (narration, chips, slider, rows, Decisions, author notes, numbers, YouTube draft); h no longer appears in this video. The opening chip quotes c06's revised final frame exactly ("distance ≈ 3.57√x km, x = height in m") rather than the reviewer's shorter "d ≈ 3.57√x km (x = height in m)", so the join holds. Scene 7's cue is now "x" (bold).
2. Should fix, attempt 2 ("expand first" is never taught before the countdown): **accepted, adapted.** Reviewer's sentence after "Do each term on its own." ("And if you're given brackets multiplied together, expand them first, so you have separate terms to work with."), cue "expand them first". The grey row uses x(x + 4) → x² + 4x instead of the reviewer's x²(x − 3) → x³ − 3x², because that is attempt 2's own function and showing its expansion would answer A2's first step before the countdown. Feedback 2 unchanged.
3. Optional, scene 2 ("The app's numbers are exact gradients, not estimates."): **accepted**: the sentence is cut (it was scene 2's reserve trim, and it pays for finding 2). Scene 2's "And x itself" sentence is the new reserve trim.

Narration now 5,589 characters by script (Revision 1: 5,533), about 510 s with holds (see "Narration length estimate"); within 5,500 to 6,800 and under 570 s. Every changed value was rechecked with SymPy 1.14 (scratchpad `c-rev2/verify.py`; see "Numbers to verify"); Codex's maths check remains the authority. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: thirty-eighth video of Year 11 Mathematics Advanced (2024), outline order 38, Introduction to differentiation. Pre-design pack: `../pre-design/maths-a11/math-a11-c07.md` (brief 243). Site lessons (read through the pack's quotations, read only): `introduction-to-differentiation/lesson04.sa.html` (`we-1` polynomial and `we-2` √x + 1/x², both with their numbers; `we-3` not used) and `lesson13.sa.html` (gradient tables only). Route entry: `math-a11-c07` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted coastal lookout (c06's brief), the reused phone for the graphing app, and a painted marble run for the handoff (prefix `ma11-`); every graph, table and working row coded.

Owner rules applied: as c01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (travel: a coastal lookout), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation; The derivative, and Calculations with the derivative), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `cicccefba1`: "Infer that nx^(n - 1) is the gradient of f(x) = x^n and verify the result using graphing applications"
- `ci1d192d62`: "Use the formula d/dx (x^n) = nx^(n - 1) for all real values of n"
- `cif6a6cb7d`: "Apply the fact that the derivative of a sum is the sum of the derivatives: d/dx (f(x) + g(x)) = f'(x) + g'(x), and the derivative of a multiple of a function is the multiple of its derivative: d/dx (k ⋅ f(x)) = k ⋅ f'(x)"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c06's final frame (the lookout with its dashed sight line, "distance ≈ 3.57√x km, x = height in m", "farther per metre climbed? ?", the table "x² → 2x ✓, x³ → ?, x⁴ → ?, √x → ?"). Teaches: tabulating app gradients of x, x², x³, x⁴ at x = 1, 2, 3 and inferring nx^(n − 1) (`cicccefba1`, original teaching: crosswalk partial); verifying it by overlaying the app's gradient graph of x³ on 3x² (`cicccefba1`); the rule for all real n after rewriting roots and reciprocals as powers (`ci1d192d62`, site `we-2`); the constant multiple rule (every rise × k over the same run) and the sum rule (rises add over the same run), with a constant term giving 0 (`cif6a6cb7d`, site `we-1`); evaluating at a point on the lookout (n = ½, x = 100). Stops at sums of powers. Not taught: products of brackets by rule (A2 expands first; the product rule is c11); the chain rule (c10); tangent equations (c08). Root ruling 3: the three points stay in one video because the design is under 570 s.

## Decisions

- **Anchor: a coastal lookout and the distance to the horizon (painted plate, live).** From x metres above the sea you can see about 3.57√x km (author note a), so "how much farther per metre climbed?" is the derivative of a square root, which needs n = ½ and the constant multiple rule together, and its answer (about 179 m more view per metre at 100 m up, shrinking as you climb) is a real surprise. Travel; the pack's anchor 2. No Year 12 or w-strand design uses a horizon or lookout as an anchor (w30 names a "lookout" only as a flag on a number line; grep 16 Nov). The pack's phone game XP (anchor 1) was rejected: its derivative over whole levels is a discrete idea.
- **Simulations (standard item 3).**
  1. **App gradient table** (`RefinementTable` as a gradient table, with `ScreenApp` on the reused phone; scene 2): the app's tangent tool taps x = 1, 2, 3 on x², x³, x⁴ in turn and each reading drops into the table; a factorised second line ("3 × 1, 3 × 4, 3 × 9") writes under each row.
  2. **Gradient-graph overlay** (`ScreenApp` with `StudioDerivativeCheck`; scene 3): the app plots y = x³, then its own gradient graph (violet) traced by a riding tangent; the coded curve 3x² (amber, dashed) lays on top and the two coincide; `StudioDerivativeCheck` runs its numeric check so a mismatch cannot render.
  3. **Stretch and stack** (scene 4): `scaledFamily` stretches y = x² to y = 3x² while a rise-and-run triangle at x = 1 keeps its run and triples its rise (2 → 6); then a new **`RiseStack`** shows y = x² and y = x³ and their sum, with the three rises over the same run stacked (2 + 3 = 5 at x = 1).
  4. **Lookout readout** (scenes 1, 7): the sight line redraws as a coded slider raises the platform height x from 2 m to 100 m, with readouts "distance" (teal, km) and "extra view per metre" (violet, m), the latter computed from 1.785/√x × 1000.
- **Colour roles (fixed, as c01 to c06).** The power n **blue**; the coefficient k **amber** ("comes along for the ride"); derivatives and tangents **violet**; heights teal; answer green; mistake red, crossed slips only. In every rule row the n comes down blue and the new power (n − 1) is blue with "− 1" handwritten.
- **Large type, handwritten voice.** As c01. Hand tags: "app reading", "3 × 1², 3 × 2², 3 × 3²", "power down", "one less", "match", "heights × 3", "same run", "rises add", "along for the ride", "lifts, no slope", "each term", "rewrite first", "½ − 1 = −½", "−2 − 1 = −3", "km → m".
- **Stage changes (standard item 2).** The lookout (1); the app and table (2); the overlay (3); stretch and stack (4); g01 board, polynomial (5); g01 board, rewrite (6); the lookout's slider (7); framed card (8); question cards (9 to 12); the marble run (13); key notes (14).
- **Worked examples (g01 layout).** 5: site `we-1`, 3x⁴ − 2x³ + 5x − 7 → 12x³ − 6x² + 5; crossed "12x⁴". 6: site `we-2`, √x + 1/x² → 1/(2√x) − 2/x³; crossed "−2x⁻¹" (the power reduced the wrong way). 7: the lookout, d = 3.57x^(1/2): d′(x) = 1.785/√x; at 100: 0.1785 km per metre, about 179 m per metre.
- **Memory aid.** Framed card: "Rewrite as powers. Power down, take one off." Second line: "Each term on its own; numbers out the front ride along."
- **Visual surprise.** The app's own gradient graph of x³ and the coded 3x² land exactly on top of each other; on the lookout, the extra view per metre falls as you climb (from about 1.26 km per metre at 2 m to 179 m at 100 m).
- **Site notes (pack section 8).** lesson04's "prove the power rule" model answer uses the binomial theorem (Extension 1; logged); not used. The site states the rule without inferring it; the inference and app check are original here.
- **Plain meanings at first use.** Power (the index n, recalled from w01); coefficient ("the number out the front"); gradient function graph ("the graph of f′"); "rewrite as a power" (√x = x^½, 1/x² = x⁻², recalled from w01).
- **Attempts (pack questions).** A1: y = 4x³ − 6√x + 5/x → 12x² − 3/√x − 5/x²; crossed "−6√x → −3√x" (½ − 1 not done). A2: y = x²(x − 3), gradient at x = −1: expand to x³ − 3x², 3x² − 6x, 9; crossed "2x × 1 = 2x, so −2".
- **Mistake scene:** none separate. Power not reduced (5 crossed); negative powers reduced the wrong way (6 crossed); roots not rewritten (6, A1 crossed); constant kept (5 tag "lifts, no slope"); products differentiated factor by factor (A2 crossed).
- **Cause chain taught, in order:** (1) app gradients of x², x³, x⁴ show the power coming down and one less (2, 3); (2) the app's gradient graph matches nx^(n − 1), which checks the inference (3); (3) multiplying a function by k multiplies every rise by k with the run unchanged, so the gradient is k times (4); (4) adding functions adds their heights, so over the same run the rises add, and so do the gradients; a constant lifts the graph without changing any slope (4); (5) the rule needs a power of x, so roots and reciprocals are rewritten first, and the power rule then works for any real n (6); (6) applied to the lookout, the rate is 1.785/√x km per metre, which shrinks as x grows (7).
- **Entry knowledge (route):** c06 (x² → 2x, lines, constants); c04 (the graphing app's tangent tool); w01 (index laws: √x = x^½, 1/x² = x⁻²).
- **What d01 relies on (Year 12):** `cif6a6cb7d` (constant multiple rule, d01 scene 7 says "the three comes along for the ride") and `ci1d192d62`. This video uses the same phrase "comes along for the ride" for k.
- **Handoff (to math-a11-c08, "How does the derivative give the tangent and normal at a point?").** Scene 13: the marble run plate (`ma11-marble-run-v1.png`) with its last ramp ending in a lip in mid-air; a coded marble at the lip; a dashed violet line leaving the lip with "?" on it; chips "Next: the tangent's equation" and "?". This is c08's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Horizon distance d ≈ √(2Rx) for an eye x metres above the sea, R ≈ 6,371 km: √(2 × 6,371,000 x) m ≈ 3,570√x m = 3.57√x km (refraction ignored). d′(x) = 1.785x^(−½) km per metre. At x = 100: d = 35.7 km, d′ = 0.1785 km per metre = 178.5 m per metre ("about one hundred and seventy-nine"). At x = 2: d′ ≈ 1.262 km per metre.
  (b) Gradient table: x: 1, 1, 1; x²: 2, 4, 6; x³: 3, 12, 27; x⁴: 4, 32, 108.
  (c) Multiple: at x = 1, run 1: x² rises from 1 to... (tangent triangle: gradient 2, rise 2 over run 1); 3x²: rise 6. Sum: x² + x³ at x = 1: gradients 2 + 3 = 5.
  (d) `we-1`: 12x³ − 6x² + 5. `we-2`: ½x^(−½) − 2x^(−3) = 1/(2√x) − 2/x³.
  (e) A1: 4x³ − 6x^½ + 5x⁻¹ → 12x² − 3x^(−½) − 5x⁻² = 12x² − 3/√x − 5/x². A2: x³ − 3x² → 3x² − 6x; at −1: 3 + 6 = 9; slip 2x × 1 = 2x at −1: −2.
  (f) Pronunciations: "x to the n"; "n x to the n minus one"; "x to the half"; "x to the minus two"; "one over two root x"; "root x"; "three point five seven"; "one point seven eight five"; "zero point one seven eight five".
  (g) Windows: overlay x −2 to 2, y −1 to 12; stretch plot x 0 to 2, y 0 to 12; lookout slider x 2 to 100 m.

Main question: *From a lookout you can see about 3.57√x km. How much farther for each metre you climb? Why does x^n differentiate to nx^(n − 1), and how do sums and multiples follow?*
Entry knowledge (c06, c04, w01): x² → 2x; the app's tangent tool; index laws for roots and reciprocals.
Stops after: the power rule inferred, checked and used for all real n; the sum and constant multiple rules; derivatives at a point. No tangent equations, no chain or product rule.
Handoff: math-a11-c08: "the marble leaves the lip of the track: along which line exactly?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): n blue; k amber; derivatives and tangents violet; heights teal; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: how much farther per metre?
> Here's that coastal lookout. From a height of x metres above the sea, you can see about three point five seven times the square root of x kilometres to the horizon. Climb higher, and you see farther. But how much farther, for each extra metre you climb? And does each extra metre help as much as the last one? That needs the derivative of a square root, and first principles gets messy. So let's look for a pattern instead. Why does x to the n differentiate to n x to the n minus one, and how do sums and multiples **follow**?

Visual: opens on c06's final frame exactly (the lookout plate `ma11-coastal-lookout-v1.png`, the dashed sight line, "distance ≈ 3.57√x km, x = height in m", "farther per metre climbed? ?", the small table "x² → 2x ✓, x³ → ?, x⁴ → ?, √x → ?", chips "Next: a rule for every power" and "?"). On the first sentence the "Next" chips fade. On "Climb higher" the lookout slider raises the platform height from 20 m to 60 m and the sight line reaches farther, the distance readout ticking (teal, "16.0 km" to "27.7 km"). On "follow" heading "x^n → nx^(n − 1)? Sums and multiples?"; the table chip moves to the top right as the scene question.

### 2. collecting gradients
> Let's collect some gradients. A graphing app can read the tangent's gradient at any point. For x squared, at x equals one, two and three, it gives two, four and six. That's two x, as we **proved**. For x cubed, it gives three, twelve and twenty-**seven**. That's three times one, three times four, and three times nine, so three x **squared**. For x to the fourth, it gives four, thirty-two and one hundred and **eight**. That's four times one, four times eight, and four times twenty-seven, so four x **cubed**. And x itself has gradient one everywhere.

Visual: clear change: the reused phone (`maths/ma12-phone-v1.png`, 560 px) at the left with `ScreenApp`; the gradient table at the right (rows 44 px, columns "x = 1", "x = 2", "x = 3", "pattern"). The app draws y = x² and taps x = 1, 2, 3; each "gradient" reading flies into the row "x²: 2, 4, 6"; on "proved" the pattern cell "2x ✓", grey chip "c06". On "seven" the app switches to x³, row "x³: 3, 12, 27"; on "squared" a second line under it "3 × 1², 3 × 2², 3 × 3²" (hand tag) and the pattern cell "3x²". On "eight" row "x⁴: 4, 32, 108"; on "cubed" "4 × 1³, 4 × 2³, 4 × 3³", pattern "4x³". Then row "x: 1, 1, 1", pattern "1". Hand tag "app reading" by the phone.

### 3. the pattern, checked
> Look at the pattern. The power comes down in front, and the new power is one less. x squared gives two x to the one. x cubed gives three x squared. x to the fourth gives four x cubed. So x to the n gives n x to the n minus **one**. Check x itself. One times x to the zero is one, which matches. Now let's check the rule with the app. Ask it to plot the gradient function of x cubed, and lay three x squared on top. The two curves match **exactly**. This rule works for every real power n, including fractions and negatives, as long as the function is written as a power of x. So roots and fractions need nothing new, just a rewrite.

Visual: stage change: the pattern column enlarges, each row animating its blue power dropping to the front and a handwritten "− 1" on the new power ("x³ → 3x²", hand tags "power down", "one less"). On "one" the rule, 60 px, framed in violet: "d/dx(xⁿ) = nxⁿ⁻¹" (n blue). On "Check x itself" a row "x¹ → 1·x⁰ = 1 ✓". On "plot the gradient function" the phone returns at 700 px: the app draws y = x³ (teal), then a riding tangent traces its violet gradient graph; the coded dashed amber curve "3x²" lays on top; on "exactly" the two coincide, hand tag "match" (`StudioDerivativeCheck` tick). On "every real power" a grey strip, 40 px: "n can be 5, ½, −1, −2 …".

### 4. multiples and sums
> Two more rules let us handle whole expressions. First, multiples. Three x squared is x squared with every height tripled. That triples every rise, while the runs stay the same, so every gradient triples too. The derivative of k times f is k times f prime, so the three comes along for the **ride**. Three x squared differentiates to three times two x, which is six x. Second, sums. The height of f plus g is the two heights added. Over the same run, the rises add, and so do the gradients. The derivative of a sum is the sum of the **derivatives**. So x squared plus x cubed differentiates to two x plus three x squared. And a constant term just lifts the whole graph, so its derivative is zero, as we saw last time.

Visual: clear change. Left (860 × 620 px): y = x² with a rise-and-run triangle at x = 1 (run 1 blue, rise 2 teal); `scaledFamily` stretches the curve to y = 3x² (k = 3 amber) and the triangle's rise grows 2 → 6 while the run stays 1, hand tags "heights × 3" and "same run". Row, 52 px: "d/dx(k·f) = k·f′" with k amber; on "ride" "d/dx(3x²) = 3 × 2x = 6x", hand tag "along for the ride". Right (`RiseStack`, 860 × 620 px): y = x² and y = x³ and their sum; at x = 1 the three rises over the same run stack: "2" + "3" = "5", hand tag "rises add". On "derivatives" row "d/dx(f + g) = f′ + g′". On "constant term" the sum curve lifts by 4 and the triangle is unchanged, hand tag "lifts, no slope".

### 5. worked example: a polynomial
> Let's put it together. Differentiate three x to the fourth, minus two x cubed, plus five x, minus seven. Do each term on its own. And if you're given brackets multiplied together, expand them first, so you have separate terms to work with. Three x to the fourth gives three times four x cubed, which is twelve x **cubed**. Minus two x cubed gives minus six x **squared**. Five x gives five, and minus seven gives **zero**, because a constant doesn't change. So f prime of x is twelve x cubed minus six x squared plus five. Writing twelve x to the fourth is the slip. Multiply by the power, then take one off the **power**.

Visual: clear change to the g01 board. Task strip, 44 px: "Differentiate f(x) = 3x⁴ − 2x³ + 5x − 7." Each term sits in its own coloured slot (coefficients amber, powers blue), hand tag "each term". On "expand them first" a grey side row, 44 px, under the task strip: "x(x + 4) → x² + 4x first", hand tag "brackets: expand first"; it dims before "cubed". Rows, 52 px: on "cubed" "3x⁴ → 3 × 4x³ = 12x³"; on "squared" "−2x³ → −2 × 3x² = −6x²"; "5x → 5"; on "zero" "−7 → 0" (tag "lifts, no slope"). Framed answer (green): "f′(x) = 12x³ − 6x² + 5". On "power" a red slip "3x⁴ → 12x⁴" writes and is crossed, caption "4 − 1 = 3".

### 6. worked example: rewrite first
> Roots and fractions need one extra step. Differentiate the square root of x, plus one over x squared. First, rewrite each term as a power of x. The square root of x is x to the half, and one over x squared is x to the minus **two**. Now use the rule. x to the half gives a half, times x to the minus a half, which is one over two root **x**. x to the minus two gives minus two x to the minus three, which is minus two over x **cubed**. The rule doesn't care whether the power is a whole number. Rewrite first, then differentiate. And careful with negative powers. Minus two, take one, is minus three, not minus **one**.

Visual: clear change to a fresh g01 board. Task strip, 44 px: "Differentiate f(x) = √x + 1/x²." A tinted "rewrite" row first, 52 px: on "two" "f(x) = x^½ + x⁻²", hand tag "rewrite first", grey chip "w01: √x = x^½, 1/x² = x⁻²". Rows: "x^½ → ½x^(−½)" with tag "½ − 1 = −½"; on "x" "= 1/(2√x)"; "x⁻² → −2x⁻³" with tag "−2 − 1 = −3"; on "cubed" "= −2/x³". Framed answer (green): "f′(x) = 1/(2√x) − 2/x³". On "one" a red slip "x⁻² → −2x⁻¹" writes and is crossed, caption "−2 − 1 = −3".

### 7. back to the lookout
> Back to the lookout. The distance is three point five seven, times x to the half. Its derivative is three point five seven, times a half, times x to the minus a half. That's one point seven eight five over root **x**. At a height of one hundred metres, root x is ten, so the rate is zero point one seven eight five kilometres per metre. Let's change that to metres. It's about one hundred and seventy-nine metres of extra view, for each extra metre you **climb**. And because root x grows, that rate shrinks as you go higher. So the first few metres of climbing help the most.

Visual: stage change: the lookout plate (1,200 px) with its sight line; a working strip at the right, 52 px: "d = 3.57x^½" (3.57 amber, ½ blue); "d′(x) = 3.57 × ½ × x^(−½)"; on "x" (bold) "= 1.785/√x km per metre" (violet). The slider sets x = 100 m: rows "√100 = 10", "d′(100) = 0.1785 km per metre"; on "Let's change that to metres" a hand tag "km → m: × 1000"; on "climb" "≈ 179 m per metre" (green frame). On the last sentence the slider sweeps x from 2 m to 100 m and the violet readout falls from "1,262 m per metre" to "179 m per metre" while the teal distance grows "5.0 km" to "35.7 km".

### 8. memory aid
> Here's the summary. Rewrite as powers. Bring the power down, then take one off it. Do each term on its own, and let numbers out the front come along for the **ride**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: "x³ → 3x²" with the blue 3 dropping. Main line, hand font 60 px: "Rewrite as powers. Power down, take one off." On "ride" the second line, 40 px: "Each term on its own; numbers out the front ride along." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Differentiate y equals four x cubed, minus six root x, plus five over x. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Differentiate y = 4x³ − 6√x + 5/x." The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Rewrite it first. y is four x cubed, minus six x to the half, plus five x to the minus **one**. Then d y by d x is twelve x squared, minus three x to the minus a half, minus five x to the minus two. That's twelve x squared, minus three over root x, minus five over x **squared**. Writing minus three root x is the slip. A half, take one, is minus a **half**.

Visual: the card shrinks to the top (30 px). Rewrite row (tinted), 44 px: on "one" "y = 4x³ − 6x^½ + 5x⁻¹". Row 52 px: "dy/dx = 12x² − 3x^(−½) − 5x⁻²"; on "squared" framed answer (green): "dy/dx = 12x² − 3/√x − 5/x²". On "half" a red slip "−6√x → −3√x" writes and is crossed, caption "½ − 1 = −½". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Find the gradient of the curve y equals x squared, times x minus three, at x equals minus one. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Find the gradient of the curve y = x²(x − 3) at x = −1." Picture: the curve y = x²(x − 3) (x −1.5 to 3.5), with no point marked. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> Expand first. y is x cubed minus three x squared, so d y by d x is three x squared minus six **x**. At minus one, that's three plus six, which is **nine**. Differentiating each factor and multiplying, two x times one, is the slip. That gives minus two, and products don't work like that. A rule for products comes **later**.

Visual: the card shrinks to the top. Rows, 52 px: "y = x³ − 3x²", hand tag "expand first"; on "x" "dy/dx = 3x² − 6x"; on "nine" "3(−1)² − 6(−1) = 3 + 6 = 9" (green frame), the point (−1, −4) and its violet tangent on the picture. On "later" a red slip "2x × 1 = 2x → −2" writes and is crossed, caption "expand, then differentiate". Hold about 1 s.

### 13. handoff
> Now we can find the gradient of a curve anywhere. Here's a marble run. The marble rolls down, up the last ramp, and flies off the end. Which straight line does it leave along? That's the tangent at the end of the track, and we can now find its gradient. Next, the equations of tangents and **normals**.

Visual: the memory line shows small at the top (30 px), then fades. The marble run plate `ma11-marble-run-v1.png` (1,300 px wide) with its last ramp ending in a lip in mid-air; a coded marble rolls to the lip; a dashed violet line leaves the lip with "?" on it. On "normals" chips "Next: the tangent's equation" and "?". Hold about 2 s. This is c08's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- d/dx(xⁿ) = nxⁿ⁻¹, for every real n.
- Rewrite first: √x = x^½, 1/xⁿ = x⁻ⁿ.
- d/dx(k·f) = k·f′. d/dx(f + g) = f′ + g′.
- A constant term differentiates to 0.
- Products of brackets: expand first.

Memory aid (framed card, right side, as in scene 8): *Rewrite as powers. Power down, take one off.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and c08's opening frame.

## Teaching checks

- **Does it explain causes?** Why the pattern: inferred from gradients and checked on a graph (2, 3). Why k rides along: every rise scales by k over the same run (4). Why sums add: heights add, so rises add (4). Why a constant vanishes: it lifts without tilting (4, 5). Why rewrite: the rule is for powers of x (6). Why the lookout's rate shrinks: √x grows, so 1/√x falls (7).
- **Misconceptions addressed:** power not reduced (5 crossed); negative powers reduced the wrong way (6 crossed); roots not rewritten (6, A1 crossed); constant kept (5); products term by term (A2 crossed).
- **Visual standard, item by item:** 1 the painted lookout from the first frame with a live height slider, returning in 7; 2 a new stage every 35 to 55 s; 3 the app table, the gradient-graph overlay, the stretch and stack, the lookout slider; 4 fixed roles (n blue, k amber); 5 large type; 6 hand tags; 7 g01 boards in 5 and 6; 8 framed card and five bullets; 9 the app's gradient graph landing on 3x².
- **One idea at a time:** the data (2), the rule and check (3), multiples and sums (4), a polynomial (5), rewriting (6), the anchor (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 23 s.
- **Avoided double teaching:** x² → 2x and constants (c06) and index laws (w01) are recalled in a phrase and grey chips.
- **Syllabus coverage:** `cicccefba1` (2, 3; key note 1); `ci1d192d62` (3, 6, 7, A1; key notes 1, 2); `cif6a6cb7d` (4, 5, 7, A1, A2; key notes 3, 4).
- **Out of scope by design:** tangent equations (c08); chain rule (c10); product rule (c11).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Differentiate y = 4x³ − 6√x + 5/x."
Model answer: y = 4x³ − 6x^½ + 5x⁻¹, so dy/dx = 12x² − 3x^(−½) − 5x⁻² = 12x² − 3/√x − 5/x². Classic mistake (crossed): "−6√x → −3√x".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "Find the gradient of the curve y = x²(x − 3) at x = −1."
Model answer: y = x³ − 3x², dy/dx = 3x² − 6x; at x = −1: 3 + 6 = 9. Classic mistake (crossed): "2x × 1 = 2x, so −2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Lookout | 3.57√x km; x 20 → 60: 16.0 → 27.7 km | 1 |
| Table | x: 1, 1, 1; x²: 2, 4, 6; x³: 3, 12, 27; x⁴: 4, 32, 108 | 2, 3 |
| Multiple | 3x² → 6x; rise 2 → 6 at x = 1 | 4 |
| Sum | at x = 1: 2 + 3 = 5 | 4 |
| Site `we-1` | 12x³ − 6x² + 5 | 5 |
| Site `we-2` | ½x^(−½) − 2x⁻³ = 1/(2√x) − 2/x³ | 6 |
| Lookout rate | 1.785/√x; at 100: 0.1785 km/m ≈ 179 m/m; at 2: ≈ 1,262 m/m; d(100) = 35.7 km; d(2) ≈ 5.0 km | 7 |
| A1 | 12x² − 3/√x − 5/x² | 9, 10 |
| A2 | 3x² − 6x; 9; slip −2; point (−1, −4) | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c01c09/verify.py`); Codex to re-check.

- Revision 2: x(x + 4) = x² + 4x (scene 5 grey row). The lookout values are unchanged with x for the height: 3.57√x, d′ = 1.785/√x, 0.1785 km per metre at x = 100.
- d/dx xⁿ at 1, 2, 3: n = 1: 1, 1, 1; n = 2: 2, 4, 6; n = 3: 3, 12, 27; n = 4: 4, 32, 108.
- 3x⁴ − 2x³ + 5x − 7 → 12x³ − 6x² + 5. √x + 1/x² → 1/(2√x) − 2/x³.
- 3.57√x: d′ = 1.785/√x; at 100: 0.1785; ×1000 = 178.5; at 2: 1.785/√2 = 1.2622; d(100) = 35.7; d(2) = 5.049; d(20) = 15.97; d(60) = 27.65. Check of 3.57: √(2 × 6,371,000)/1000 = 3.5696.
- 4x³ − 6√x + 5/x → 12x² − 3/√x − 5/x².
- x²(x − 3) = x³ − 3x²; derivative 3x² − 6x; at −1: 9; y(−1) = −4.
- 3x² at x = 1: gradient 6; x² + x³ at 1: 5.

## Memory aid check

- **"Rewrite as powers. Power down, take one off."** Original wording of the standard rule. Meaning, as said in scene 8: write every term as kxⁿ; its derivative is k·n·xⁿ⁻¹; differentiate each term on its own and keep the coefficient. Assumptions checked: each term is a constant times a power of x (products and compositions need c10 to c12); n is real; x > 0 where n is fractional with even roots (√x needs x ≥ 0, its derivative x > 0). It helps a new case: 2/x³ = 2x⁻³ → −6x⁻⁴. Introduced after scenes 2 to 7. The phrase "ride along" matches Year 12 d01.
- **Considered, not used:** "Multiply by the power, then subtract one" (accurate, kept in the narration; the card's shorter form is easier to copy).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,589 characters (Revision 2; Revision 1 was 5,533). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 24 s of settling (the app taps, the overlay, the stretch and stack, the lookout sweep) and the 45 s notes scene: about 510 s. Characters per scene (1 to 14): 522, 534, 624, 708, 606, 603, 568, 162, 105, 346, 126, 312, 298, 75. Speech before the notes is about 415 s, 60 s under the 570 s cap. Feedback speech: about 26 s and 23 s.

Reserve trims if the voiced take runs long: scene 2's "And x itself" sentence (keep the row); scene 3's "Check x itself" sentences (keep the row). If the voiced video runs over 570 s, root ruling 3 allows splitting "all real n" (scene 6 and A1) into its own short video.

## Scene list and build ids

Lesson key `m-a11c07` (route math-a11-c07). Explainer folder `src/explainer/lessons/math-a11-c07`; build inputs in `docs/production/claude-pm/lessons/math-a11-c07/` (at voicing).

In order (14 scene headings): hook-lookout, collect-gradients, pattern-checked, multiples-sums, polynomial, rewrite-first, lookout-rate, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 38 s | 1 | c06's frame; the lookout slider |
| 38 to 85 s | 2 | The app and the gradient table |
| 85 to 135 s | 3 | The rule; the overlay check |
| 135 to 182 s | 4 | Stretch and stack |
| 182 to 222 s | 5 | g01 board: polynomial |
| 222 to 268 s | 6 | g01 board: rewrite first |
| 268 to 312 s | 7 | The lookout's rate |
| 312 to 328 s | 8 | Framed memory card |
| 328 to 420 s | 9 to 12 | Question cards and countdowns, then feedback |
| 420 to 445 s | 13 | The marble run |
| 445 to 490 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c06's last frame continues into 1; 1 to 2 clear change; 2 to 3 stage change; 3 to 4 clear change; 4 to 5 clear change to the board; 5 to 6 clear change; 6 to 7 stage change to the lookout; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-c07-learning-review.md`, `science_check` = `checks/m-a11-c07-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): `maths/ma12-phone-v1.png` reused for the app. No marble run plate exists (the Year 12 s-strand marbles are bag-draw icons, not a toy track).

Need (painted, new; see the Codex asset brief): `ma11-marble-run-v1.png` (this video's handoff and c08). Reused: `ma11-coastal-lookout-v1.png` (c06's brief), `maths/ma12-phone-v1.png`.

Coded: the app screen, the table, every graph, triangle, stack and readout, the sight line, working boards, cards, countdown, hand tags, key notes, the marble.

### Studio kit use and additions

Uses: `ScreenApp`, `RefinementTable`, `StudioDerivativeCheck`, `scaledFamily`, `StudioTangentTriangle`, `ParameterSlider`, `LiveReadoutBoard`, `PlateImg`, `HandTag`, `WorkingBoard`, `TaskStrip`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`RiseStack`** (new): two functions and their sum on one plot, with rise-and-run triangles over the same run at a chosen x, whose rises stack visibly into the sum's rise. Check: the stacked rise equals the sum's tangent rise to within 1 px (computed derivatives).
2. **Lookout sight line**: a dashed line from the platform point (sidecar) to the horizon, its "distance" and "extra view per metre" readouts computed from 3.57√x and 1.785/√x at the slider's x.

## Codex asset brief (Maths A11 C07, a marble run; also c08)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c07.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c07 build (its final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-marble-run-v1.png` (2400 × 1400 px): a wooden toy marble run seen exactly side-on: a tall starting ramp at the left curving down to a low point, then a final ramp curving up to the right and ending abruptly in a lip in mid-air (no catcher), its end at about two-thirds height; simple wooden supports underneath; the track's top edge clean and smooth so code can trace it; no marble painted (code draws the marble). The final ramp's shape should be close to an upward parabola (sidecar points let code fit it).

Sidecar JSON (`ma11-marble-run-v1.json`): 30 to 40 points along the track's top edge, left to right, in image pixels, with the lip's end point flagged. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c07-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the route-inputs JSON exactly.
3. Confirm the lookout's km-to-m change is spoken ("Let's change that to metres") and shown (× 1000).
4. Confirm no binomial theorem, product rule or chain rule appears; A2 expands first.
5. Confirm the app overlay's numeric check passes (3x² against the app's gradient graph of x³).
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c06's final frame.

## YouTube metadata (draft)

Title: The Power Rule, Sums and Multiples: Differentiating Powers of x | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson04.sa.html

From a lookout x metres above the sea you can see about 3.57√x km. How much farther for each metre you climb? Collect gradients of x², x³ and x⁴ with a graphing app, spot that xⁿ differentiates to nxⁿ⁻¹, and check it on the app's own gradient graph. See why a multiple rides along and why sums add, rewrite roots and fractions as powers, and answer the lookout question. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Infer that nx^(n - 1) is the gradient of f(x) = x^n and verify the result using graphing applications"
"Use the formula d/dx (x^n) = nx^(n - 1) for all real values of n"
"Apply the fact that the derivative of a sum is the sum of the derivatives: d/dx (f(x) + g(x)) = f'(x) + g'(x), and the derivative of a multiple of a function is the multiple of its derivative: d/dx (k ⋅ f(x)) = k ⋅ f'(x)"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: Differentiation from first principles. Next: Tangents and normals.

#Year11Maths #MathsAdvanced #PowerRule #HSCScience

## Open decisions

- **1. The lookout formula's provenance (Codex maths check).** 3.57√x km is the standard geometric approximation (author note a); the narration says "about". If root prefers no real-world constant, use "about three and a half times root x" and change the numbers in scene 7 (1.75/√x; 175 m per metre).
- **2. Split (root ruling 3).** Not needed at this length. The split point, if a voiced take runs over 570 s, is before scene 6.

## Review notes

- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" at the top). Next: the Codex maths check and error check (brief 248), then voicing on the Google voice and a build on the studio kit to grade A, with a learning check on the exact voiced preview.
- Revision 1 has had no independent review. Next: student learning review (trace from c06 and w01; check that the pattern is inferred, not announced, that the stretch and stack make the two rules feel obvious, that the km-to-m change is followed, and that A2's "expand first" is fair after scene 5), then the Codex maths check and error check, then voicing and a build to grade A.
