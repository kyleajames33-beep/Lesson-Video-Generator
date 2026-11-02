# Maths A12 F07: When does a geometric series have a limiting sum? Shrinking terms, a closing gap, S∞ = a/(1 − r) only when |r| < 1, and repeating decimals (design)

Status: Revision 1 (2 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the maths kit (briefs 129, 131, 133, 135 and 143) and the sequence parts specified in `math-a12-f01.md` (`TermLadder`, `PartialSumStack`), `math-a12-f02.md` (`TermPlot`), `math-a12-f04.md` (`PeriodTimeline`, handoff only), `math-a12-f05.md` (`TermLadder` and `TermPlot` extensions) and `math-a12-f06.md` (`PartialSumStack.gapLabels`), plus one new part specified below (`ConvergenceStrip`). Nothing recorded; human listening pending.

Narration 5,157 characters, 15 scenes, about 488 s (8.1 minutes; below the 5,500 floor by design, see "Narration length estimate"), counted by script with the build parser rules (see "Narration length estimate").

Scope: seventh video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 44), after f06 (finite geometric sums) and before f08 (geometric models). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5). No brief 151 pack and no route-inputs-3 entry exist (checked 2 Nov); pack work done here. Site lesson read (2 Nov, read-only): `sequences-and-series/lesson04.sa.html`, SHA256 `d1fd3515cc8305e434a4d55e703dffc7bff674fc014d3047911cf0b570497afc` (cards 02 and 08: derivation, 1 + ½ + ¼ + …, 0.3̇, finding r from a and S∞, divergence cases, exam checks; Problem 2; MC Q2 and Q4; SA 2). Every number recalculated with SymPy. Course outline entry: `math-a12-f07` (two content points, site source lesson 4).

Owner rules applied: as f05 and f06 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; optional key notes; Australian spelling; no em dashes; causal narration; exact values in algebra, decimals only in grey readouts; attempt cards give nothing away; opens on f06's handoff frame; f06's Sₙ recalled by use, not re-derived). Spoken |r|: "mod r", introduced as "the size of r, written mod r" (root decision 16's i04 pattern for |x|).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Geometric sequences and series; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`, MathML in linear form:

- `cieabfd3e4`: "Examine the behaviour of aₙ and Sₙ as n → ∞ for a GP when |r| < 1"
- `cifcaec9be`: "Develop the formula S∞ = a/(1 − r) for the limiting sum of a geometric series with |r| < 1, and use this formula to solve problems"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary:** starts from f06's last frame (`PartialSumStack` columns S₁ to S₈ of 64 + 32 + 16 + … with grey readouts up to 127½, a dashed red line at 128, grey gap labels 64, 32, …, ½, chips "What if we never stop adding?", "Next: an endless sum" and "?"); examines aₙ → 0 when |r| < 1, including a negative r (`cieabfd3e4`); splits f06's Sₙ into a constant and a shrinking gap, so Sₙ → a/(1 − r) (`cieabfd3e4`, `cifcaec9be`); defines the limiting sum and its condition; shows the four ways |r| ≥ 1 fails; works S∞ for r = ⅓ (site), r = −½ and a repeating decimal (site). Stops at limiting sums. Not taught: a formal definition of a limit (Year 12 Advanced uses the behaviour, not ε arguments), growth and decay models (f08; the handoff asks a question only), series that are not geometric.

## Decisions

- **Learner question kept (outline).** "When does a geometric series have a limiting sum?" The answer, built in order: each term of 64 + 32 + … fills half the gap left below 128, so the totals rise but never pass it (hook); multiplying by a ratio smaller than one in size shrinks every term towards zero, from one side or both (2); Sₙ = a/(1 − r) − (a/(1 − r))rⁿ, so the gap is a multiple of rⁿ and closes (3); that settling value is S∞ = a/(1 − r), only when |r| < 1 (4); for |r| ≥ 1, rⁿ does not shrink and the totals grow or bounce (5); the formula then sums a series (6), a zigzag series (7) and a repeating decimal (8).
- **The hook surprise (f06's handoff; site card 08's 1 + ½ + ¼ + … scaled by 64).** "Can infinitely many terms add to a finite number?" The gap labels on the opening frame are the evidence. The site's own series 1 + ½ + ¼ + … = 2 is the same series divided by 64 and appears as the key-notes example and a grey chip in scene 4, so the site's classic is still shown.
- **aₙ → 0 (`cieabfd3e4`).** (½)¹⁰ = 1/1024 < 1/1000 (grey "≈ 0.00098"); a `ConvergenceStrip` (new) shows the terms of 64(½)ⁿ⁻¹ and 64(−½)ⁿ⁻¹ closing on 0 on a number line. "Smaller than one in size" is the plain meaning of |r| < 1, and "the size shrinks by the same fraction every time" is the cause. No ε statement.
- **Sₙ → a/(1 − r) (`cieabfd3e4`).** Split f06's Sₙ = a(1 − rⁿ)/(1 − r) into a/(1 − r) − [a/(1 − r)]rⁿ. For 64 + 32 + …: 128 − 128(½)ⁿ; the second part is exactly the gap labelled on the opening frame (author note a). The split replaces the site's "r → 0, so substitute 0", which states the result without showing where the gap goes.
- **The formula and its condition (`cifcaec9be`).** S∞ = a/(1 − r) with |r| < 1 boxed together; "mod r" introduced as "the size of r". The condition is in learner copy and every key note, because without it the formula gives wrong values (author note b: r = 2 would give −a).
- **No limiting sum (site card 08 divergence list, numbers chosen to match).** r = 2 (totals grow without bound), r = 1 (grow by a each time), r = −1 (totals bounce between a and 0), r = −2 (named in the strip only). One cause sentence: "where the size of r is one or more, r to the n doesn't shrink, so the gap never closes".
- **Worked examples.** (6) Site Problem 2 (a), numbers unchanged: 12 + 4 + 4/3 + …: two ratios ⅓ (the site's "verify r using two consecutive ratios"), condition stated in writing, S∞ = 18. (7) Original: 8 − 4 + 2 − 1 + …, r = −½: partial sums 8, 4, 6, 5, 11/2, … zigzag on the `ConvergenceStrip` to 16/3 (grey ≈ 5.33). (8) Site Problem 2 (b) and SA 2, numbers unchanged: 0.2727… = 27/100 + 27/10000 + …, r = 1/100 (exact fractions on screen; decimals grey), S∞ = 27/99 = 3/11, checked by division.
- **Attempts.** (A1) Site MC Q4 numbers, original wording: "The geometric series 10 + 10r + 10r² + … has a limiting sum of 40. Find r." r = ¾ (condition checked). Crossed: "r = −3" (from 1 − r = 40/10; and r = −3 has no limiting sum). (A2) Original, HSC style: "For what values of x does the geometric series 1 + 2x + 4x² + … have a limiting sum? Find the limiting sum in terms of x." r = 2x, −½ < x < ½, S∞ = 1/(1 − 2x). Crossed: "−1 < x < 1" (applied the condition to x, not to the ratio 2x). Scene 6's "find r first, then check its size" prepares the step. Neither card shows r, the condition or a formula.
- **Mistake scene:** none separate. "Infinitely many terms must add to infinity" (hook, 3); "the terms reach zero" (2: they get as close as you like); "S∞ always exists" (4, 5); "r = −1 settles" (5); skipping the condition (6; A1 crossed answer also fails it); "a negative r makes S∞ bigger than a" (7); "the condition is on x" (A2 crossed).
- **Memory aid (original).** "Shrinking ratio, settling sum: |r| < 1, S∞ = a/(1 − r)." See "Memory aid check".
- **Handoff (to f08, "How do geometric models predict repeated growth or decay?").** Scene 14 sums up in one sentence, then shows a `PeriodTimeline` in time mode (f04 part): "t = 0: 500 bacteria", "×3" arcs to "after 1 hour: 1500", then "?" tabs to "after 6 hours: ?", with the chip "Next: growth and decay models" and "?". No formula and no term number. Scene 15 returns to this frame silently; it is f08's opening frame.
- **Site sources used:** card 08 (the derivation idea, 1 + ½ + ¼ + …, divergence cases, exam checks "state |r| < 1 before applying"), Problem 2 (a) and (b), SA 2 (the same decimal), MC Q4 (A1 numbers). Not used: 0.3̇ (the same skill as 0.2̇7̇, which is harder and the site's worked example), "a = 6, S∞ = 9" (the same skill as A1).
- **Site errors:** none new in the parts used (Problem 2 (a) S∞ = 18, (b) 3/11, card 08's 0.3̇ = 1/3 and r = ⅓ from a = 6, S∞ = 9, MC Q2 and Q4 recalculated and correct). Lesson 4 items are in f05 and f06's Decisions.
- **Cause chain taught, in order:** (1) each term of 64 + 32 + … fills half the remaining gap, so the totals cannot pass 128 (hook); (2) a ratio smaller than one in size shrinks every term's size by the same fraction, so aₙ gets as close to 0 as you like, alternating if r < 0 (2); (3) Sₙ is a constant minus a multiple of rⁿ, so the gap closes (3); (4) the settling value is S∞ = a/(1 − r), only for |r| < 1 (4); (5) for |r| ≥ 1, rⁿ does not shrink, so the totals grow or bounce (5); (6) a negative r adds to the bottom, so S∞ is smaller than a (7); (7) a repeating block is a geometric series with r = 1/100 per two-digit block (8).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f07`; playlist order 44; main learner question "When does a geometric series have a limiting sum?"; syllabus actions `cieabfd3e4`, `cifcaec9be`.
  - Entry knowledge: f05 (GP, r, aₙ = arⁿ⁻¹, alternating terms for r < 0); f06 (Sₙ = a(1 − rⁿ)/(1 − r), r ≠ 1); Year 11 absolute value as size or distance from 0; fractions and division by a fraction.
  - Start boundary: "Open on f06's partial sums of 64 + 32 + 16 + … approaching a dashed 128 line; ask whether infinitely many terms can add to a finite number."
  - Stop boundary: "aₙ → 0 and Sₙ → a/(1 − r) for |r| < 1, shown by the shrinking gap; S∞ = a/(1 − r) with its condition; no limiting sum for |r| ≥ 1; S∞ for r = ⅓, r = −½ and a repeating decimal. No formal limits, models or non-geometric series."
  - Next handoff: "math-a12-f08: a time strip from t = 0: 500 bacteria, ×3 each hour, 'after 6 hours: ?'; ask for the model."
  - Prerequisite videos: math-a12-f05, math-a12-f06.
- **Learner-visible vocabulary (plain meaning at first use):** infinite series (a sum that never stops adding terms, 1); limiting sum S∞ (the number the totals get closer and closer to as more terms are added, 4); mod r, |r| (the size of r, ignoring its sign, 4); without bound (bigger than any number you choose, 5).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **convergence strip** (`ConvergenceStrip`, new: a number line with a target marker on which successive values land as dots, with optional zigzag arcs and a shrinking gap bracket; see "Codex asset brief"); f01's `PartialSumStack` with f06's `gapLabels` (hook, 3, 4); f02's `TermPlot` (5, small divergence panels); f04's `PeriodTimeline` in time mode (handoff); `AlignedAlgebra`; `Chip` with `cross`, `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).
- **Board layout (constant):** heading top-left; the stack, strip or panels on the left two-thirds; givens chip at the top of the right column, algebra below it, current line bright and earlier lines dim.
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) 64 + 32 + …: a = 64, r = ½, a/(1 − r) = 128; Sₙ = 128 − 128(½)ⁿ = 128 − 64(½)ⁿ⁻¹, so the gap after n terms equals the nth term (64, 32, …, ½ for n = 1 to 8). The narration says "the second part is the gap that's left", true for every geometric series; the gap equalling the last term is special to r = ½ and is not claimed.
  (b) Without the condition: r = 2, a = 1 gives a/(1 − r) = −1, while the totals 1, 3, 7, … grow; r = −1 gives a/2, while the totals bounce between a and 0. Not shown; the condition is stated wherever the formula is.
  (c) "As small as you like": for 0 < |r| < 1 and any ε > 0, |r|ⁿ < ε for all large n. The narration says "closer and closer to zero" and "as close as you like"; it does not say the terms reach zero.
  (d) 8 − 4 + 2 − …: partial sums 8, 4, 6, 5, 11/2, 21/4, 43/8; S∞ = 8/(3/2) = 16/3 ≈ 5.333; the partial sums alternate above and below 16/3.
  (e) 0.2727…: 27/100 + 27/10⁴ + …; a = 27/100, r = 1/100; S∞ = (27/100)/(99/100) = 27/99 = 3/11; 3 ÷ 11 = 0.272727…
  (f) A1: 10/(1 − r) = 40, 1 − r = ¼, r = ¾ (|r| < 1); the inversion gives 1 − r = 4, r = −3. A2: r = 2x; |2x| < 1 iff −½ < x < ½; S∞ = 1/(1 − 2x); x = 0 gives the series 1 + 0 + 0 + …, which has ratio 0 and is not a GP by f05's definition (r ≠ 0); the model answer includes x = 0 as the series still sums to 1 = 1/(1 − 0) (open decision 2).
  (g) Pronunciations: "S infinity"; "mod r"; "one minus r"; "four thirds"; "sixteen thirds"; "twenty-seven hundredths"; "twenty-seven ten-thousandths"; "three elevenths"; "zero point two seven two seven, repeating".
  (h) Windows: hook stack y 0 to 140 with the 128 line; scene 2 strip from −40 to 70 with the target 0 (terms of 64(½)ⁿ⁻¹ and 64(−½)ⁿ⁻¹, n = 1 to 8); scene 5 small `TermPlot` panels of Sₙ for n = 1 to 6: r = 2 (a = 1: 1, 3, 7, 15, 31, 63), r = 1 (a = 1: 1 to 6), r = −1 (a = 1: 1, 0, 1, 0, 1, 0); scene 7 strip from 3 to 9 with target 16/3.

Main question: *Sixty-four plus thirty-two plus sixteen, and so on, never passes 128. When can infinitely many terms add to a finite number, and what is it?*
Entry knowledge (f05, f06; Year 11 absolute value): aₙ = arⁿ⁻¹; Sₙ = a(1 − rⁿ)/(1 − r).
Stops after: aₙ → 0 and Sₙ → a/(1 − r) for |r| < 1; S∞ and its condition; no limiting sum for |r| ≥ 1; three uses. No models.
Handoff: math-a12-f08: 500 bacteria tripling each hour from t = 0, "after 6 hours: ?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as f05 and f06): terms blue; running totals teal; the gap to the target amber; the target line red dashed; crossed chips red; current algebra line bright, earlier lines dim.

### 1. hook (an endless sum)
> Last video ended here. Sixty-four, plus thirty-two, plus sixteen, and so on. After eight terms, the total is one hundred and twenty-seven and a half. Each new term fills exactly half of the gap that's left below one hundred and twenty-**eight**. So the total keeps growing, but it can never pass one hundred and twenty-eight. Can infinitely many terms really add to a finite number? And when does that happen?

Visual: opens on f06's last frame exactly (f06 scene 15: eight `PartialSumStack` columns with grey readouts 64, 96, 112, 120, 124, 126, 127, 127½, the dashed red line at 128, grey gap labels 64, 32, 16, 8, 4, 2, 1, ½, chips "What if we never stop adding?", "Next: an endless sum" and "?"). Heading writes on: "When does a geometric series have a limiting sum?" as the chips fade. On "fills exactly half" the next block (¼) drops onto a ninth column and covers half of the last gap, which glows amber and halves; on "eight" (bold) a tenth block covers half again. On "can never pass" the 128 line pulses. Chip "infinitely many terms, a finite total?" at the top right.

### 2. what happens to the terms
> Start with the terms. Here r is a half, so each term is half the one before. Halving again and again makes a number as small as you like. After ten halvings, a half to the ten is less than one thousandth. So the terms get closer and closer to **zero**. The same is true for any r between minus one and one. Multiplying by a number smaller than one in size shrinks the size by the same fraction every time. With r equal to minus a half, the terms flip sign, but their size still halves, so they close in on zero from both **sides**.

Visual: clear change to a `ConvergenceStrip` (author note h): a number line with a red target marker at 0. Dots for 64, 32, 16, 8, … land one after another, each closer to 0; grey readout "(½)¹⁰ = 1/1024" with "≈ 0.00098" in grey; on "zero" (first bold) the dots crowd at 0 and a tag "aₙ → 0 (closer and closer, never reaching)". On "between minus one and one" a grey band −1 < r < 1 on a small r line in the right column. On "minus a half" a second row of the strip: 64, −32, 16, −8, … with arcs jumping across 0; on "sides" (bold) both rows' dots close on 0, tag "r < 0: signs flip, size still shrinks".

### 3. what happens to the totals
> Now the totals. From last video, S sub n is a, times one minus r to the n, over one minus r. Split that into two parts. It's a over one minus r, minus a over one minus r, times r to the **n**. For our series, a over one minus r is one hundred and twenty-eight, and the second part is the gap that's left. As n grows, r to the n shrinks towards zero, so the gap shrinks towards zero **too**. The totals get as close to one hundred and twenty-eight as you like, without ever passing it.

Visual: clear change (the stack returns at the left, smaller). Rows in the right column: "Sₙ = a(1 − rⁿ)/(1 − r)" (grey tag "last video"); on "two parts" "= a/(1 − r) − [a/(1 − r)] rⁿ"; on "n" (bold) the "rⁿ" is ringed amber. Row "64 + 32 + …: Sₙ = 128 − 128(½)ⁿ"; on "the gap that's left" the amber bracket "128(½)ⁿ" links to the amber gap above the stack's last column. On "too" (bold) the stack builds more columns quickly (n = 9 to 14), the gap thinning to a hairline, with the grey readouts "128(½)¹⁴ ≈ 0.008"; tag "Sₙ → 128".

### 4. the limiting sum
> That value is called the limiting sum, S infinity. It's the number the totals get closer and closer to, as we add more and more terms. So S infinity equals a over one minus r. For our series, it's sixty-four over a half, which is one hundred and twenty-**eight**. But it only works when r is between minus one and one. That's often written with the size of r, mod r, less than **one**.

Visual: camera continue. Boxed: "S∞ = a/(1 − r)" with the label "limiting sum: the value the totals approach". On "eight" row "S∞ = 64/(1 − ½) = 64 ÷ ½ = 128" with a tick against the 128 line, and a grey chip "same as 1 + ½ + ¼ + … = 2, times 64". On "one" (last bold) the condition joins the box: "S∞ = a/(1 − r), only when |r| < 1", with "|r| < 1 means −1 < r < 1" under it and the word "size" beside |r|.

### 5. when there's no limiting sum
> What goes wrong otherwise? If r is two, every term is double the last, so the totals grow without **bound**. If r is one, every term is a, so the total grows by a each time. If r is minus one, the terms are a, minus a, a, minus a, and the totals bounce between a and zero **forever**. They never settle on one number. Whenever the size of r is one or more, r to the n doesn't shrink, so the gap never closes. There's no limiting **sum**.

Visual: clear change. Three small `TermPlot` panels of Sₙ for n = 1 to 6 (author note h), drawn one per sentence: "r = 2": 1, 3, 7, 15, 31, 63 climbing off the top, on "bound" an arrow "grows without bound"; "r = 1": 1 to 6 on a rising line; "r = −1": 1, 0, 1, 0, 1, 0, on "forever" a bracket "bounces: no single value". On "Whenever the size of r" a grey `ConvergenceStrip` row for r = −2 (1, −2, 4, −8 jumping outwards) and the r line from scene 2 with the regions r ≤ −1 and r ≥ 1 tinted red; on "sum" a chip "|r| ≥ 1: no limiting sum".

### 6. worked example: one third
> Let's use it. Find the limiting sum of twelve, plus four, plus four thirds, and so on. First find r, from two ratios. Four over twelve is a third, and four thirds over four is a **third**. The size of r is less than one, so a limiting sum exists. Write that down before using the formula. S infinity is twelve over one minus a third, which is twelve over two thirds. Dividing by two thirds means multiplying by three over two, so it's **eighteen**.

Visual: board clears (new case). Task strip: "Find the limiting sum of 12 + 4 + 4/3 + …" (site Problem 2 (a)). Givens chip: "a = 12". Rows: "r = 4 ÷ 12 = ⅓"; on "third" (bold) "(4/3) ÷ 4 = ⅓ ✓". Row "|r| = ⅓ < 1, so S∞ exists" in a ringed box with a tag "write this first". Rows "S∞ = 12/(1 − ⅓) = 12 ÷ ⅔"; "= 12 × 3/2"; on "eighteen" "= 18" boxed. A small `ConvergenceStrip` under the rows: totals 12, 16, 52/3 (grey ≈ 17.33), … closing on 18.

### 7. worked example: a zigzag
> When r is negative, the totals zigzag. Take eight, minus four, plus two, minus one, and so on. Here r is minus a half. The totals go eight, four, six, five, five and a half, jumping above and below one value, and closing **in**. S infinity is eight, over one minus minus a half. That's eight over three halves, which is sixteen **thirds**, about five point three three. A negative r adds to the bottom, so the limiting sum is smaller than the first term.

Visual: board clears (new case). Task strip: "Find the limiting sum of 8 − 4 + 2 − 1 + …" (original). Givens chip: "a = 8, r = −4 ÷ 8 = −½, |r| < 1". A `ConvergenceStrip` (window 3 to 9): totals 8, 4, 6, 5, 5½ land in turn with zigzag arcs; on "in" (bold) a dashed target appears between them, with a shrinking bracket. Rows "S∞ = 8/(1 − (−½))"; "= 8 ÷ 3/2"; on "thirds" "= 16/3" boxed, with grey "≈ 5.33", and the target marker labelled "16/3". On the last sentence the "1 − (−½) = 3/2" bottom glows, tag "bottom > 1, so S∞ < a".

### 8. worked example: a repeating decimal
> Limiting sums also turn repeating decimals into fractions. Zero point two seven two seven, repeating, is twenty-seven hundredths, plus twenty-seven ten-thousandths, and so on. Each piece is one hundredth of the one before, so r is one **hundredth**. Then S infinity is twenty-seven hundredths, over ninety-nine hundredths. The hundredths cancel, leaving twenty-seven over ninety-nine, which simplifies to three **elevenths**. Check: three divided by eleven is zero point two seven two seven, **repeating**.

Visual: board clears (new case). Task strip: "Write 0.272727… as a fraction." (site Problem 2 (b), SA 2). The decimal "0.272727…" splits into blocks under it: "0.27", "0.0027", "0.000027", … then in exact form "27/100 + 27/10 000 + 27/1 000 000 + …". Givens chip: "a = 27/100"; on "hundredth" "r = 1/100, |r| < 1". Rows "S∞ = (27/100) ÷ (1 − 1/100)"; "= (27/100) ÷ (99/100) = 27/99"; on "elevenths" "= 3/11" boxed. On "repeating" a grey division "3 ÷ 11 = 0.272727…" with a tick.

### 9. memory aid
> Here's a way to remember the condition. When the size of r is less than one, the terms shrink, so the total settles. Shrinking ratio, settling **sum**. And the value it settles on is a over one minus r.

Visual: the handwritten line writes large: "Shrinking ratio, settling sum." Under it: "|r| < 1: S∞ = a/(1 − r)." Small icons: a strip of dots closing on a target and a stack meeting its dashed line; on "sum" both pulse. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. The geometric series ten, plus ten r, plus ten r squared, and so on, has a limiting sum of forty. Find r. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The geometric series 10 + 10r + 10r² + … has a limiting sum of 40. Find r." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no formula box, no condition).

### 11. feedback 1 (brief)
> Here a is ten, so ten over one minus r equals **forty**. Then one minus r is ten over forty, which is a **quarter**, so r is three quarters. Check the condition: three quarters is between minus one and one, so this limiting sum exists. Minus three is wrong. It turns the fraction upside down, and a ratio of minus three has no limiting sum at **all**.

Visual: card shrinks to the top; "10", "limiting sum of 40" underlined as used. Row "10/(1 − r) = 40" (on "forty"); on "quarter" "1 − r = 10/40 = ¼"; "r = ¾" boxed; tick chip "|¾| < 1 ✓". On "all" a chip "r = −3" fades in and is crossed (caption "1 − r = 40/10 is upside down; |−3| > 1"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. For what values of x does the geometric series one, plus two x, plus four x squared, and so on, have a limiting sum? Find the limiting sum in terms of x. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "For what values of x does the geometric series 1 + 2x + 4x² + … have a limiting sum? Find the limiting sum in terms of x." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> First find the ratio. Each term is two x times the one before, so r is two **x**. A limiting sum needs the size of two x to be less than one. So two x is between minus one and one, and x is between minus a half and a **half**. Then S infinity is one over one minus two x. Minus one to one is wrong. The condition is on the ratio, two x, not on **x**.

Visual: card shrinks to the top; "values of x", "1 + 2x + 4x²" and "in terms of x" underlined as used. Row "r = 2x ÷ 1 = 2x" (on "x"); rows "|2x| < 1"; "−1 < 2x < 1"; on "half" "−½ < x < ½" boxed. Row "S∞ = 1/(1 − 2x)" boxed. On "x" (last bold) a chip "−1 < x < 1" fades in and is crossed (caption "the condition is on r = 2x"). Hold about 1 second.

### 14. handoff
> So a geometric series has a limiting sum exactly when the size of r is less than one, and it's a over one minus r. Shrinking ratios settle, but growing ratios model real growth. A colony starts with five hundred bacteria, and it triples every hour. How many are there after six **hours**?

Visual: the memory-aid line and the boxed formula show small at the top, then fade on "but growing ratios". Board clears to f04's `PeriodTimeline` in time mode: a marker "t = 0: 500 bacteria", an amber "×3" arc to "after 1 hour: 1500", then "×3" arcs over "?" tabs to "after 6 hours: ?". On "hours" (bold) a chip "Next: growth and decay models" and a "?" chip. No formula and no term number. Hold about 2 seconds. This is f08's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. If |r| < 1 (that is, −1 < r < 1), then as n → ∞: rⁿ → 0, so aₙ → 0 and Sₙ → a/(1 − r). Example: 1 + ½ + ¼ + … = 2.
2. Limiting sum: S∞ = a/(1 − r), only when |r| < 1. Find r from two ratios and state |r| < 1 before using it.
3. If |r| ≥ 1 there is no limiting sum: the totals grow without bound or keep bouncing.
4. Repeating decimals: 0.272727… = 27/100 + 27/10 000 + …, a = 27/100, r = 1/100, so S∞ = 27/99 = 3/11.
5. If the ratio contains x (such as r = 2x), the condition is |2x| < 1, not |x| < 1.

Memory aid (large, on the notes screen): *Shrinking ratio, settling sum: |r| < 1, S∞ = a/(1 − r).*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 14's frame exactly (the time strip from "t = 0: 500 bacteria" with "×3" arcs, "after 1 hour: 1500", "after 6 hours: ?", the chips "Next: growth and decay models" and "?"). This is the final frame and f08's opening frame.

## Teaching checks

- **Does it explain causes?** Why the totals cannot pass 128: each term fills half the remaining gap (hook). Why the terms go to zero: a size factor below one shrinks them by the same fraction every time (2). Why the totals settle: Sₙ is a constant minus a multiple of rⁿ (3). Why the condition |r| < 1: otherwise rⁿ does not shrink and the gap never closes (4, 5). Why r = −1 fails although the terms do not grow: the totals bounce (5). Why a negative r gives S∞ < a: 1 − r > 1 (7). Why 0.2̇7̇ = 3/11: it is a geometric series with r = 1/100 (8).
- **Misconceptions addressed:** infinite sums must be infinite (hook, 3); terms reach zero (2); S∞ always exists (4, 5); r = −1 settles (5); skipping the condition (6; A1); a negative ratio makes S∞ bigger (7); the condition placed on x (A2 crossed); inverting the fraction (A1 crossed).
- **One idea at a time:** terms (2) before totals (3) before the formula (4) before failures (5); one example per scene in 6 to 8.
- **Video makes it easier:** the student watches each new block cover half the gap (hook), sees the dots crowd at zero from one or both sides (2), sees the amber gap in the algebra and the gap on the stack light together and thin to a hairline (3), sees three totals plots that grow, climb or bounce (5), and sees the zigzag close on 16/3 (7). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 26 s and 27 s (scenes 11 and 13).
- **Avoided double teaching:** f06's Sₙ is used and split, not re-derived; f05's alternating terms are recalled in one clause; Year 11 absolute value in a plain phrase ("the size of r").
- **Syllabus coverage:** `cieabfd3e4` (2, 3; key note 1); `cifcaec9be` (4 to 8; A1, A2; key notes 2 to 5).
- **Out of scope by design:** formal limits, growth and decay models, non-geometric series.

## Practice questions and model answers

**Attempt 1 (scene 10; site MC Q4 numbers, original wording, HSC style, 2 marks suggested, not an official marking scheme).** "The geometric series 10 + 10r + 10r² + … has a limiting sum of 40. Find r."
Model answer: a = 10, so 10/(1 − r) = 40; 1 − r = ¼; r = ¾, and |¾| < 1, so the limiting sum exists. Classic mistake (crossed): "r = −3".

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "For what values of x does the geometric series 1 + 2x + 4x² + … have a limiting sum? Find the limiting sum in terms of x."
Model answer: r = 2x; a limiting sum exists when |2x| < 1, that is −½ < x < ½; then S∞ = 1/(1 − 2x). Classic mistake (crossed): "−1 < x < 1".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening | 64 + 32 + …: S₁ to S₈ = 64, 96, 112, 120, 124, 126, 127, 127½; gaps 64 to ½; 128 | 1 |
| Terms | (½)¹⁰ = 1/1024 ≈ 0.00098; 64(½)ⁿ⁻¹ and 64(−½)ⁿ⁻¹, n = 1 to 8 | 2 |
| Split | Sₙ = 128 − 128(½)ⁿ; 128(½)¹⁴ ≈ 0.008 | 3 |
| S∞ | 64/(1 − ½) = 128; 1 + ½ + ¼ + … = 2 | 4 |
| No limit | r = 2: 1, 3, 7, 15, 31, 63; r = 1: 1 to 6; r = −1: 1, 0, 1, 0, 1, 0; r = −2: 1, −2, 4, −8 | 5 |
| Site Problem 2 (a) | r = ⅓ (two ratios); S∞ = 18; totals 12, 16, 52/3 | 6 |
| Zigzag | 8 − 4 + 2 − …; totals 8, 4, 6, 5, 11/2; S∞ = 16/3 ≈ 5.33 | 7 |
| Site Problem 2 (b) | 0.2727… = 27/99 = 3/11 | 8 |
| A1 (site MC Q4) | r = ¾; crossed r = −3 | 10, 11 |
| A2 | r = 2x; −½ < x < ½; S∞ = 1/(1 − 2x); crossed −1 < x < 1 | 12, 13 |
| Handoff | t = 0: 500; ×3; after 1 hour: 1500; after 6 hours: ? | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run); Codex to re-check.

- 64/(1 − ½) = 128; 128 − Sₙ for n = 1 to 8: 64, 32, 16, 8, 4, 2, 1, ½; 128(½)¹⁴ = 0.0078125.
- 2⁻¹⁰ = 1/1024 = 0.0009765625 < 0.001.
- 12/(1 − ⅓) = 18; 12 + 4 = 16; 16 + 4/3 = 52/3.
- Partial sums of 8(−½)ᵏ⁻¹: 8, 4, 6, 5, 11/2, 21/4, 43/8; 8/(3/2) = 16/3.
- (27/100)/(99/100) = 27/99 = 3/11; 3/11 = 0.272727…
- A1: 10/(1 − ¾) = 40; inversion gives r = −3. A2: |2x| < 1 iff −½ < x < ½; S∞ = 1/(1 − 2x) (check x = ¼: 1 + ½ + ¼ + … = 2 = 1/(1 − ½)).
- r = −1 totals 1, 0, 1, 0, …; r = 2 totals 2ⁿ − 1.

## Memory aid check

- **"Shrinking ratio, settling sum: |r| < 1, S∞ = a/(1 − r)."** Original. Meaning, as said in scene 9: when the ratio's size is below one, the terms shrink towards zero and the totals approach a/(1 − r). Assumptions checked: "shrinking" means the size |r| < 1, not r < 1 (r = −2 is less than 1 but its terms grow; the second line names |r|); r = −1 keeps the terms the same size and does not settle (scene 5); the series must be geometric (the strand's only case). It helps a new case: 5 − 5/4 + 5/16 − … has r = −¼, so it settles at 5/(5/4) = 4. Introduced after the cause (2, 3) and the formula (4).
- **Considered, not used:** "a over one minus r" alone (drops the condition, which would teach a wrong idea).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,157 characters**, 15 scenes. Characters per scene (1 to 15): 405, 523, 476, 377, 425, 440, 446, 494, 198, 138, 339, 185, 338, 284, 75 (the total includes the 14 joining spaces). At 13.3 characters per second the speech is about 388 s; add about 15 s of settling time for the gap fill in scene 1, the strip in scene 2, the stack build in scene 3, the three panels in scene 5 and the zigzag in scene 7, 20 s for two countdowns, 5 s of short holds (scenes 9, 11, 13, 14) and about 60 s more of the quiet notes hold (about 100 s of holds): **about 488 s**, under the 570 s cap but below the 5,500 character floor. The content genuinely fills about 5,150 characters: the two content points are one behaviour (terms and totals) and one formula with its condition, and the three worked examples cover the site's cases (a fraction ratio, a negative ratio, a repeating decimal). Adding a fourth example or a slower restatement would be padding, so the video stops here (template rule: stop rather than pad; root accepted i11 at 5,137 characters, root decision 33). Open decision 5. No trims are planned; if the voiced take runs long, the reserve trims are: scene 2's "After ten halvings, a half to the ten is less than one thousandth." (keep the grey readout); scene 6's "Write that down before using the formula." (keep the "write this first" tag).

## Scene list and build ids

Lesson key `m-a12f07` (route math-a12-f07). Suggested explainer folder `src/explainer/lessons/math-a12-f07` and build folder `docs/production/claude-pm/lessons/m-a12f07` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, terms-to-zero, totals-settle, limiting-sum, no-limiting-sum, one-third, zigzag, repeating-decimal, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f06's last frame continues into scene 1 (camera continue, same stack); 1 to 2 clear change (stack to strip); 2 to 3 clear change (stack returns); 3 to 4 camera continue; 4 to 5 clear change; 5 to 6, 6 to 7 and 7 to 8 clear changes (new cases); 8 to 9 camera pull back to the aid; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/m-a12f07-learning-review.md`, `science_check` = `checks/m-a12f07-maths-check.md`.

## Assets

Have: no plates. Existing kit used: `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading`. Sequence parts from f01 (`PartialSumStack` with f03's `referenceLine` and f06's `gapLabels`), f02 (`TermPlot`, small panels), f04 (`PeriodTimeline` in time mode, handoff). The r line in scenes 2 and 5 is plain SVG.

`PartialSumStack` extension (scenes 1, 3): `fastBuild` ({fromColumn, toColumn, at, duration}) with column widths shrinking to fit, and gap labels that switch to grey decimals below 0.01.

## Codex asset brief

No painted plate is needed (programme decision 5). Coded kit part for the sequence-parts kit brief (with f01's three, f02's two, f03's one, f04's one, f05's one and f06's one), in `src/explainer/math/`, exported through `kit.tsx`, with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample:

1. **`ConvergenceStrip`** (scenes 2, 5, 6, 7, 9 icon). A horizontal number line with a target marker; successive values land on it as dots. Props: `window` ({min, max}), `ticks`, `target` ({value, label, at}; optional, can appear late), `values` (numbers, author-supplied) or `valueFn` (numeric function of n) with `nRange`; if both are given the part checks them equal; `landAt` ({index, at}[] or {start, stagger}), `zigzag` (draw arcs from each dot to the next, for alternating sums), `gapBracket` ({at}: a bracket from the latest dot to the target, labelled with the gap, shrinking as dots land; the part computes the gap), `rows` (two or more strips stacked, each with its own values, for r = ½ and r = −½ side by side), `crowd` (dots closer than 2 px merge into a thickening mark at the target, so the strip never claims a dot lands on it), `diverge` ({direction}: dots that leave the window exit with an arrow), `size` ('full' | 'icon'). Checks: pilot 64(½)ⁿ⁻¹ and 64(−½)ⁿ⁻¹ for n = 1 to 8 close on 0; zigzag totals 8, 4, 6, 5, 11/2 alternate about 16/3 with gaps 8/3, −4/3, 2/3, −1/3, 1/6; 12, 16, 52/3 approach 18; r = −2 values 1, −2, 4, −8 leave a window of −5 to 5 with arrows. No dot may be drawn exactly on the target unless its value equals it; the part throws otherwise.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the two syllabus quotes match the official 2024 text (linear form of the MathML), and that no site module label or code appears in learner copy or metadata.
3. Confirm the scope of learner-visible general claims: "the terms get closer and closer to zero" for |r| < 1, never "reach zero" (2; author note c); the split Sₙ = a/(1 − r) − [a/(1 − r)]rⁿ (3); "S∞ = a/(1 − r), only when |r| < 1" wherever the formula appears (4, 6 to 8, 11, 13, key notes, memory aid); "whenever the size of r is one or more ... no limiting sum" (5, key note 3).
4. Confirm the claim in scene 7 that a negative r makes S∞ smaller than a (for a > 0) and its scope (stated for this example's positive a).
5. Confirm both attempts carry every demand, and that neither card or its visuals shows r, the condition or a formula. Confirm A2's answer interval and the treatment of x = 0 (author note f; open decision 2).
6. Confirm the opening matches f06's scene 15 exactly and the handoff (scene 14) gives no formula or term number; scene 15 returns to it.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Limiting Sums: When Does a Geometric Series Have a Sum to Infinity? | Year 12 Maths Advanced

(Title length: 91 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/sequences-and-series/lesson04.sa.html

64 + 32 + 16 + … never passes 128, because each new term fills half the gap that's left. See why the terms of a geometric sequence shrink towards zero when the size of r is less than one, why the totals then settle, and where the limiting sum S∞ = a/(1 − r) comes from. See what goes wrong when |r| ≥ 1 (totals that grow or bounce forever), and use the formula on 12 + 4 + 4/3 + …, a zigzag series with r = −½, and the repeating decimal 0.272727… = 3/11. A memory aid: shrinking ratio, settling sum. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, sequences and series.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Examine the behaviour of aₙ and Sₙ as n → ∞ for a GP when |r| < 1"
"Develop the formula S∞ = a/(1 − r) for the limiting sum of a geometric series with |r| < 1, and use this formula to solve problems"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

Builds on: Geometric sequences and the geometric sum formula (previous videos). Next: Geometric growth and decay models.

#Year12Maths #MathsAdvanced #Sequences #HSCScience

## Open decisions

- **1. Spoken |r| (voice pilot).** "the size of r, mod r" on first use, then "the size of r" in most places (it carries the meaning) and "mod r" on screen as |r|. Root decision 16's i04 pattern is followed; the pilot confirms "mod r".
- **2. A2 and x = 0 (maths check).** For x = 0 the series is 1 + 0 + 0 + …, with ratio 0, which f05's definition excludes from GPs (r ≠ 0). The model answer gives −½ < x < ½ as HSC solutions usually do, and the formula still gives the right total 1 at x = 0. Confirm, or add "x ≠ 0" to the model answer only (no narration change).
- **3. Scene 7's last sentence (learning review).** "A negative r adds to the bottom, so the limiting sum is smaller than the first term" is true for a > 0 (this example). Confirm it reads as a statement about this example, or trim it (about −90 characters).
- **4. Site link form.** `.sa.html` form (root decision 15).
- **5. Length (root).** 5,157 characters (about 488 s), below the 5,500 floor, because the two content points fill it without padding (see "Narration length estimate"). If root wants it longer, the one genuine addition is a short contrast of how fast the totals settle for r = 0.9 against r = ½ (S∞ = 10a against 2a; about 300 characters in scene 4), which shows why a ratio near 1 needs many terms; it is not in the site lesson.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f05, f06 and Year 11 absolute value; check that the hook's half-the-gap picture comes before any formula; that terms and totals are treated in separate scenes; that the split of Sₙ shows the gap as rⁿ times a constant; that the condition travels with the formula everywhere; that r = −1 is shown as bouncing, not growing; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The half-filling blocks, the crowding dots, the linked amber gap and the zigzag carry the explanation; judge them at playback speed in the voiced preview. Every dot, column and readout must be computed from the same values as the displayed expressions.
- The opening frame is f06's scene 15 (same designer, 2 Nov). Scene 14 is f08's opening (same designer, written next).
