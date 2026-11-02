# Maths A12 F03: Why do arithmetic partial-sum formulas work? Pairing first with last, two forms of Sₙ, counting terms, and solving for n (design)

Status: Revision 1 (2 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the maths kit (briefs 129, 131, 133, 135 and 143), the sequence parts specified in `math-a12-f01.md` (`TermLadder`, `PartialSumStack`, `SigmaBuilder`) and `math-a12-f02.md` (`TermPlot`, `StepCounter`), plus one new part specified below (`PairingRectangle`). Nothing recorded; human listening pending.

Narration 5,733 characters, 15 scenes, about 531 s (8.9 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: third video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 40), after f02 (arithmetic sequences) and before f04 (arithmetic models). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5). No brief 151 pack and no route-inputs-3 entry exist for f03 (checked 2 Nov); pack work done here. Site lessons read (2 Nov, read-only): `sequences-and-series/lesson03.sa.html` (SHA256 `6ccf1ca41bea4fa028dec2301417d98bf39c6394ad06a0acebff03cfd413448b`; card 07 derivation and example, card 08 Type C, Problem 2, short answer 2) and `lesson02.sa.html` (SHA256 `3e39912f80d83dc05cdfe2b1de2979342fb059faeb181bcbc92ffc9a10bdab77`; the stadium hook 1 + 2 + … + 50 = 1275). Every number recalculated with SymPy. Course outline entry: `math-a12-f03` (two content points, site source lesson 3).

Owner rules applied: as f01 and f02 (2024 syllabus only, codenames and exact wording; coded maths visuals; no people; one reasoning stage at a time; task, formula and grouped givens separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; exact values, decimals only for an inequality's root, in grey; attempt cards give nothing away; opens on f02's handoff frame; f01's Sₙ and term count and f02's aₙ = a + (n − 1)d recalled, not re-taught).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Arithmetic sequences and series; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`, MathML in linear form:

- `ci69b15786`: "Develop the formula S_n = (n/2)(a + a_n) for the nth partial sum of an AP, and use the formula to solve problems"
- `ci3a79ab36`: "Develop the formula S_n = (n/2)[2a + (n − 1)d] for the nth partial sum of an AP, and use the formula to solve problems"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary:** starts from f02's last frame (a staircase of 50 bars of heights 1 to 50, "1 + 2 + 3 + … + 50 = ?", chips "Next: a shortcut for the total" and "?"); pairs first with last to find 1275 and shows the cause with a staircase and its upside-down copy forming a 50 by 51 rectangle; develops Sₙ = (n/2)(a + aₙ) by writing the sum forwards and backwards (`ci69b15786`) and Sₙ = (n/2)[2a + (n − 1)d] by substituting aₙ (`ci3a79ab36`); uses them for a sum of 20 terms, a sum between two limits with the term count, the least n for a threshold, and an equation with two valid roots. Stops at sums of APs without context. Not taught: contexts and models (f04; the handoff asks the savings question only); geometric sums (f06); finding aₙ from a formula for Sₙ (not a 2024 point; f01 open decision 4).

## Decisions

- **Learner question kept (outline).** "Why do arithmetic partial-sum formulas work?" The answer, built in order: pairing the first and last terms gives equal pair totals, because one term rises by d as the other falls by d (2, 3); the staircase and its upside-down copy fill an n by (a + aₙ) rectangle, so the sum is half of it (2, 3); substituting aₙ = a + (n − 1)d gives the second form (4); the forms then solve problems (5 to 8).
- **The hook (site lesson 2's stadium numbers, without the stadium).** 1 + 2 + … + 50 = 1275 (site lesson 2 hook and card 07). No seats or people are drawn; the staircase of bars is f02's handoff frame. The famous-trick story is mentioned without a name (no person; the attribution is uncertain anyway).
- **Pairing, then the picture (owner quality bar: cause before rule).** Scene 2 pairs 1 + 50 and 2 + 49 aloud and on the bars, states the cause (front rises by 1, back falls by 1), then the `PairingRectangle` copies the staircase, rotates it 180° and slides it on top: every column is 51 tall; 50 × 51 = 2550; half is 1275. Scene 3 repeats with symbols: forwards a, a + d, …, aₙ; backwards aₙ, aₙ − d, …, a; each column a + aₙ; 2Sₙ = n(a + aₙ) (site card 07 derivation).
- **Second form (`ci3a79ab36`).** Substitution of aₙ = a + (n − 1)d into the first form; checked on the staircase (a = d = 1, n = 50: 25 × 51 = 1275). Choice rule: last term known, first form; d known, second form (site card 07 "When to use which form").
- **Worked examples (site, numbers unchanged where used).** (a) Card 07: first 20 terms of 3, 7, 11, …: S₂₀ = 10(6 + 76) = 820; checked with a₂₀ = 79 and 10(3 + 79). (b) Short answer 2: whole numbers 50 to 200: n = 200 − 50 + 1 = 151 (f01's count recalled); S = (151/2)(250) = 18,875. (c) Problem 2 (c): 4 + 9 + 14 + …: least n with Sₙ > 500: (n/2)(5n + 3) > 500, 5n² + 3n − 1000 > 0, positive root ≈ 13.85 (grey; exact (−3 + √20009)/10 beside it), so n = 14; S₁₃ = 442, S₁₄ = 511; Sₙ increases because every term is positive. (d) Original: 11 + 9 + 7 + …: Sₙ = n(12 − n) = 32 has roots 4 and 8, both valid, because the extra terms 3, 1, −1, −3 add to zero. This is the useful surprise of the video and the correct version of the site's flawed "find n with Sₙ = k" items (see site errors in f02's Decisions).
- **Attempts (original).** (A1) "Find the sum of the first 30 terms of the arithmetic series 5 + 8 + 11 + …." a₃₀ = 92; S₃₀ = 15(5 + 92) = 1455. Crossed: "1500" (15(10 + 30 × 3): 30 steps). (A2) "How many terms of the arithmetic series 2 + 6 + 10 + … are needed for the sum to first be more than 200?" Sₙ = 2n²; n > 10; S₁₀ = 200 exactly, so 11 terms (S₁₁ = 242). Crossed: "10" (reaches 200 but does not exceed it). Neither card shows a formula, a value of n or a sum.
- **Mistake scene:** none separate. "n steps in the last term" (5; A1 crossed); "150 terms from 50 to 200" (6); "round the root down" or "take the boundary" (7; A2 crossed); "only one root can be right" (8); "the average rule works for any sequence" (memory aid: 1 + 2 + 4).
- **Memory aid (original).** "Average of first and last, times how many." With the necessary condition kept in learner copy: "Arithmetic only." Omitting it would teach a wrong rule just before f05 and f06 (geometric). See "Memory aid check".
- **Handoff (to f04, "How do arithmetic sequences model linear change?").** The site's lesson 3 hook: savings of $50, $80, $110, … (+$30 a month); after 12 months, more or less than $1,200? Scene 14 shows a coded `PeriodTimeline` strip of 12 month tabs with deposit bars for the first three months only ($50, $80, $110) and "?" over the rest, the chip "Next: more or less than $1,200?" and a "?" chip. No answer, no formula. Scene 15 returns to this frame silently; it is f04's opening frame.
- **Site sources used:** lesson 2 hook and card 07 (1 + … + 50 = 1275); lesson 3 card 07 (derivation, both forms, choice rule, S₂₀ = 820), Problem 2 (c) (S₁₄ = 511), short answer 2 (18,875), hook (handoff only). Not used: Problem 2 (a) S₁₅ = 585 (same skill as card 07's example) and (b) (no valid n; site error 2 in f02), card 08 Types A and B (site error 1 in f02; Type B is not a 2024 point).
- **Site errors:** no new ones beyond those logged in f02's Decisions (card 08 Type A, Problem 2 (b), the 19.8 value, "3-unknown rule"). Lesson 3 card 07 and Problem 2 (a), (c), short answer 2 and the MC answers MC 2 (555) and MC 4 (9) were recalculated and are correct.
- **Cause chain taught, in order:** (1) a long sum by hand is slow and error-prone (hook); (2) paired from the outside in, every pair has the same total, because one term rises by d as the other falls by d (2, 3); (3) a staircase and its upside-down copy make a rectangle, so the sum is half of n × (first + last) (2, 3); (4) replacing the last term by a + (n − 1)d gives the second form (4); (5) choose the form by what is known (4 to 6); (6) count terms as last − first + 1 (6); (7) a threshold needs the first whole n past the root, checked on both sides, and positive terms make the sum increase (7); (8) negative terms can bring the sum back, so an equation may have two valid n (8).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f03`; playlist order 40; main learner question "Why do arithmetic partial-sum formulas work?"; syllabus actions `ci69b15786`, `ci3a79ab36`.
  - Entry knowledge: f01 (Sₙ, term count top − bottom + 1); f02 (AP, d, aₙ = a + (n − 1)d); Year 11 quadratic equations and inequalities, the quadratic formula, factorising.
  - Start boundary: "Open on f02's 50-bar staircase with 1 + 2 + … + 50 = ?; pair first with last."
  - Stop boundary: "Develop and use both AP sum forms; term count; least n for a threshold; an equation with two valid roots. No contexts, GPs or aₙ from Sₙ."
  - Next handoff: "math-a12-f04: the savings $50, $80, $110, … (+$30 a month); after 12 months, more or less than $1,200?"
  - Prerequisite videos: math-a12-f01, math-a12-f02.
- **Learner-visible vocabulary (plain meaning at first use):** pair (a first-and-last couple of terms, 2); the last term aₙ (2, 3); arithmetic series (f01: the sum of an infinite AP's terms; "the first thirty terms of the arithmetic series" is a partial sum of it, A1); quadratic inequality (recall from Year 11, 7); root (recall: a solution of the quadratic equation, 7, 8).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **pairing rectangle** (`PairingRectangle`, new: staircase, its 180° copy, slide on top, equal columns, half-shading); `TermLadder` forwards and backwards rows (f01 part) for scene 3; `PartialSumStack` (f01 part) single columns for checks in 7 and 8; `TermPlot` with `series2` (f02 part, Sₙ points) in scene 8 to show the sum rising then falling; `StepCounter` (f02) in feedback 1; `AlignedAlgebra`; `Chip` with `cross`, `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit). The scene 14 month strip uses `PeriodTimeline` (f04's new part; specified in f04).
- **Board layout (constant):** heading top-left; the picture (staircase, rectangle, ladders or plot) on the left two-thirds; algebra in the right column, current line bright and earlier lines dim.
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) 1 + … + 50 = 1275; 50 × 51 = 2550; 25 pairs of 51.
  (b) Derivation: Sₙ = Σ_{k=0}^{n−1} (a + kd) = Σ_{k=0}^{n−1} (aₙ − kd); adding, 2Sₙ = n(a + aₙ). With aₙ = a + (n − 1)d, Sₙ = (n/2)[2a + (n − 1)d]. Test a = 1, d = 1, n = 50: 25 × 51 = 1275.
  (c) 3, 7, 11: S₂₀ = 10(6 + 19 × 4) = 820; a₂₀ = 79; 10(3 + 79) = 820.
  (d) 50 to 200: n = 151; S = 151 × 125 = 18,875.
  (e) 4, 9, 14: Sₙ = (n/2)(5n + 3); 5n² + 3n − 1000 = 0 at n = (−3 + √20009)/10 ≈ 13.845; S₁₃ = 442, S₁₄ = 511. Terms positive, so Sₙ increases.
  (f) 11, 9, 7, …: Sₙ = (n/2)(22 − 2(n − 1)) = n(12 − n); n(12 − n) = 32 gives n² − 12n + 32 = 0, (n − 4)(n − 8) = 0. Terms 11, 9, 7, 5, 3, 1, −1, −3; S₄ = S₈ = 32; S₆ = 36 is the largest partial sum. Sₙ points for the plot: 11, 20, 27, 32, 35, 36, 35, 32, 27 (n = 1 to 9).
  (g) A1: a = 5, d = 3, n = 30: a₃₀ = 92; S₃₀ = 15 × 97 = 1455; 15(10 + 90) = 1500. A2: a = 2, d = 4: Sₙ = (n/2)(4 + 4(n − 1)) = 2n²; S₁₀ = 200, S₁₁ = 242.
  (h) Memory aid counterexample: 1 + 2 + 4: (1 + 4)/2 × 3 = 7.5; true sum 7.
  (i) Pronunciations: "n over two, times a plus a sub n"; "n over two, times two a plus n minus one lots of d"; "thirteen point eight five"; "eighteen thousand, eight hundred and seventy-five".
  (j) Rectangle geometry: 50 bars, width 24 px, unit 7 px (51 units = 357 px); the copy rotates 180° about its own centre, then translates up so its lowest bar (height 1) sits on the tallest original bar (height 50).

Main question: *Adding an arithmetic sequence term by term is slow. Why does pairing the first and last terms give the total, and how do the two sum formulas come from that?*
Entry knowledge (f01, f02; Year 11 quadratics): Sₙ, the term count, aₙ = a + (n − 1)d; solving quadratic equations and inequalities.
Stops after: both AP sum forms, developed and used, including threshold and equation problems. No contexts or GPs.
Handoff: math-a12-f04: the savings question (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as f01, f02): bars and term values blue; the upside-down copy amber outline with light amber fill; pair totals and sums teal; d and step labels amber; crossed chips red; current algebra line bright, earlier lines dim.

### 1. hook (one plus two plus ... plus fifty)
> Here's a staircase of numbers: one, plus two, plus three, all the way up to fifty. What's the total? Adding fifty numbers one at a time is slow, and it's easy to slip. There's a famous trick that does it in one line. But a trick isn't much use unless you know why it works. So why does it work, and does it work for every arithmetic sequence?

Visual: opens on f02's last frame exactly (f02 scene 15: the 50-bar staircase, "1 + 2 + 3 + … + 50 = ?", chips "Next: a shortcut for the total" and "?"). Heading writes on: "Why do arithmetic partial-sum formulas work?" as the chips fade. On "one at a time" a running tally readout at the right counts "1, 3, 6, 10, 15, …" fast as the first six bars light in turn, then stalls with a grey "…" (slow). On "in one line" a chip "a trick?" appears. On the last two sentences the scene question chip moves to the top right: "Why does it work? Every AP?".

### 2. pairing
> Pair the first number with the last. One plus fifty is fifty-**one**. Now pair the second with the second last: two plus forty-nine, also fifty-**one**. Every pair gives the same total, because each time you move in one place, the front number goes up by one and the back number goes down by **one**. Here's the picture. Copy the staircase, turn it upside down, and fit it on top. Every column is now fifty-one tall, and there are fifty columns, so the rectangle holds fifty times fifty-one. That's two thousand five hundred and fifty. The staircase is exactly half of **that**: one thousand two hundred and seventy-five.

Visual: camera continue on the staircase. On "first number with the last" bars 1 and 50 lift slightly and an amber arc joins them; on "one" (first bold) the label "1 + 50 = 51". On "second last" bars 2 and 49 join, "2 + 49 = 51" on the second bold. On "goes up by one" small arrows: under bar 3 "+1" (moving right) and under bar 48 "−1" (moving left); on "one" (third bold) the label "3 + 48 = 51" appears without speech, then the arcs fade. On "Copy the staircase" the `PairingRectangle` makes an amber copy, rotates it 180° (about 1 s), and slides it down onto the blue staircase (about 1 s), so each blue bar of height k meets an amber bar of height 51 − k. On "fifty-one tall" a bracket on the right edge "51" and one column (k = 2: blue 2, amber 49) is ringed; along the bottom a bracket "50 columns". Row: "rectangle: 50 × 51 = 2550". On "that" the amber half fades back, leaving the blue staircase with a teal tag "half: 2550 ÷ 2 = 1275", and the hook line completes: "1 + 2 + … + 50 = 1275".

### 3. the general formula
> The same thing happens in any arithmetic sequence. Write the sum forwards, from the first term, a, up to the last term, a sub n. Then write the same sum backwards underneath. In each column, the top term goes up by d and the bottom term goes down by d, so every column adds to a plus a sub **n**. There are n columns, so two lots of S sub n is n times a plus a sub n. Halve it, and S sub n is n over two, times a plus a sub **n**. In words, it's the average of the first and last terms, times how many terms there are.

Visual: clear change (symbols). Two `TermLadder` rows, one above the other. Top (forwards): "a", "a + d", "a + 2d", "…", "aₙ". On "backwards" the bottom row writes: "aₙ", "aₙ − d", "aₙ − 2d", "…", "a". On "goes up by d" amber "+d" arcs along the top row and "−d" arcs along the bottom row, one column at a time; on "n" (first bold) a teal "a + aₙ" label drops under each column, all five the same. A small grey picture at the left: the scene 2 rectangle, relabelled "height a + aₙ, width n". Right column rows: "2Sₙ = n(a + aₙ)"; on "n" (second bold) the boxed form: "Sₙ = (n/2)(a + aₙ)". On the last sentence a plain-words tag under the box: "average of first and last × number of terms".

### 4. the second form
> Often you don't know the last term. But you do know it's a, plus n minus one lots of d. Swap that in for a sub n, and the bracket becomes two a, plus n minus one lots of d. So S sub n is also n over two, times two a plus n minus one lots of **d**. It's the same sum, written with a, d and n. Test it on the staircase. With a and d both one, and n equal to fifty, it's twenty-five, times two plus forty-nine. That's twenty-five times fifty-one, which is one thousand two hundred and seventy-five **again**. Use the first form when you know the last term, and the second when you know the common difference.

Visual: camera continue. The boxed first form stays bright. Row: "aₙ = a + (n − 1)d" (grey tag "earlier video"); on "Swap that in" it slides into the bracket: "(n/2)(a + a + (n − 1)d)"; then "(n/2)[2a + (n − 1)d]". On "d" (first bold) the second form is boxed beside the first. On "Test it on the staircase" a small chip "a = 1, d = 1, n = 50" and the row "25 × (2 + 49) = 25 × 51"; on "again" "= 1275" with a tick, and a mini staircase icon glows. On the last sentence two tags under the boxes: "know the last term: first form" and "know d: second form".

### 5. worked example: twenty terms
> Find the sum of the first twenty terms of three, seven, eleven, and so on. Here a is three, d is four, and n is twenty. We don't know the last term, so use the second form. That's ten, times six plus nineteen fours. Nineteen fours is seventy-six, so it's ten times eighty-two, which is eight hundred and **twenty**. Check with the first form. The twentieth term is three plus seventy-six, which is seventy-nine, and ten times three plus seventy-nine is also eight hundred and twenty.

Visual: board clears (new case). Task strip: "Find the sum of the first 20 terms of 3, 7, 11, …" (site card 07). Givens chip: "a = 3, d = 4, n = 20". On "second form" the second box glows. Rows one at a time: "S₂₀ = (20/2)[2 × 3 + 19 × 4]"; "= 10(6 + 76)"; on "twenty" "= 10 × 82 = 820" boxed. Check rows (grey): "a₂₀ = 3 + 19 × 4 = 79"; "S₂₀ = 10(3 + 79) = 820" with a tick.

### 6. worked example: fifty to two hundred
> Now, the sum of all the whole numbers from fifty to two hundred. It's arithmetic, with d equal to one. The first term is fifty, and the last is two hundred, so the first form fits. But how many terms are there? Not one hundred and fifty. It's two hundred minus fifty, plus one, which is one hundred and fifty-**one**. So the sum is one hundred and fifty-one over two, times fifty plus two hundred. That's one hundred and fifty-one, times one hundred and twenty-five, which is eighteen thousand, eight hundred and seventy-**five**.

Visual: board clears (new case). Task strip: "Find the sum of all the whole numbers from 50 to 200." (site short answer 2). Givens chip: "a = 50, aₙ = 200, d = 1". A short ladder "50, 51, 52, …, 200". On "how many terms" a grey chip "150?" fades in; on "one" (bold) it is crossed and replaced by "n = 200 − 50 + 1 = 151" with the f01 count tag "top − bottom + 1". Rows: "S = (151/2)(50 + 200)"; "= 151 × 125"; on "five" "= 18 875" boxed.

### 7. when n is the unknown
> Sometimes n is the unknown. How many terms of four, plus nine, plus fourteen, and so on, are needed for the sum to first go over five hundred? Here a is four and d is five, so S sub n is n over two, times five n plus three. Set that above five hundred, and you get a quadratic inequality. Its positive root is about thirteen point eight **five**. But n must be a whole number, so the first one that works is fourteen. Check both sides. Thirteen terms make four hundred and forty-two, which isn't enough, and fourteen terms make five hundred and **eleven**. Because every term is positive, the sum only grows, so fourteen is the first.

Visual: board clears (new case). Task strip: "How many terms of 4 + 9 + 14 + … are needed for the sum to first exceed 500?" (site Problem 2 (c), reworded). Givens chip: "a = 4, d = 5". Rows: "Sₙ = (n/2)[8 + 5(n − 1)] = (n/2)(5n + 3)"; "(n/2)(5n + 3) > 500"; "5n² + 3n − 1000 > 0". On "five" (bold) "positive root n = (−3 + √20009)/10" with a grey "≈ 13.85". A small number line with n = 13, 13.85 (dashed marker) and 14; on "fourteen" the 14 tick is ringed. On "Check both sides" two single `PartialSumStack` columns side by side against a red dashed line at 500: "S₁₃ = 442" (below the line) and, on "eleven", "S₁₄ = 511" (above it). On the last sentence a grey tag "every term positive: Sₙ only grows" and the answer row "14 terms" boxed.

### 8. a sum with two answers
> Here's a surprise. How many terms of eleven, plus nine, plus seven, and so on, add up to thirty-two? Here a is eleven and d is minus two, so S sub n simplifies to n times twelve minus n. Set that equal to thirty-two, and the quadratic has two roots: four and **eight**. Both are whole numbers, and both work. Four terms make thirty-two. The next four terms are three, one, minus one and minus three, and they add to zero, so eight terms make thirty-two **again**. When the terms go negative, the sum can come back down, so check every root.

Visual: board clears (new case). Task strip: "How many terms of 11 + 9 + 7 + … add up to 32?" (original). Givens chip: "a = 11, d = −2". Rows: "Sₙ = (n/2)[22 − 2(n − 1)] = n(12 − n)"; "n(12 − n) = 32"; "n² − 12n + 32 = 0"; on "eight" "(n − 4)(n − 8) = 0, so n = 4 or n = 8". A `TermLadder` 11, 9, 7, 5 lights, readout "S₄ = 32"; then 3, 1, −1, −3 light in a second colour with a bracket "3 + 1 + (−1) + (−3) = 0"; on "again" readout "S₈ = 32". On the last sentence a small `TermPlot` (series2 mode, teal) of Sₙ for n = 1 to 9 (11, 20, 27, 32, 35, 36, 35, 32, 27) with a red dashed line y = 32 meeting the points at n = 4 and n = 8; tag "terms go negative: the sum comes back down". Chip "check every root".

### 9. memory aid
> Here's the short version. An arithmetic sum is the average of the first and last terms, times how many terms there are. It only works for arithmetic sequences, because only they pair up evenly. For one, plus two, plus four, it gives seven and a half, but the real sum is **seven**.

Visual: the handwritten line writes large: "Average of first and last, times how many." Under it, in the same size: "Arithmetic only." A tiny pairing-rectangle icon beside it. On "only they pair up evenly" a small row "1 + 2 + 4": the pair totals 1 + 4 = 5 and 2 + 2 = 4 shown unequal (red). On "seven" a chip "(1 + 4)/2 × 3 = 7.5" fades in and is crossed beside "1 + 2 + 4 = 7". Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Find the sum of the first thirty terms of the arithmetic series five, plus eight, plus eleven, and so on. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Find the sum of the first 30 terms of the arithmetic series 5 + 8 + 11 + …." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no boxed formulas).

### 11. feedback 1 (brief)
> Here a is five, d is three and n is thirty. The thirtieth term is five plus twenty-nine threes, which is ninety-**two**. So the sum is fifteen, times five plus ninety-two, which is one thousand four hundred and fifty-**five**. Fifteen hundred is wrong. It uses thirty steps of three, instead of twenty-**nine**.

Visual: card shrinks to the top; "5 + 8 + 11" and "30 terms" underlined as used. Givens chip "a = 5, d = 3, n = 30". Row "a₃₀ = 5 + 29 × 3 = 92" (on "two"), with a tiny `StepCounter` bracket "29 steps". Row "S₃₀ = (30/2)(5 + 92) = 15 × 97"; on "five" "= 1455" boxed. On "nine" a chip "15(10 + 30 × 3) = 1500" fades in and is crossed (caption "30 steps: one too many"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. How many terms of two, plus six, plus ten, and so on, are needed for the sum to first be more than two hundred? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "How many terms of the arithmetic series 2 + 6 + 10 + … are needed for the sum to first be more than 200?" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Here a is two and d is four, so S sub n simplifies to two n **squared**. Two n squared is more than two hundred when n squared is more than a hundred, so n is more than **ten**. Ten terms make exactly two hundred, which isn't more. So the answer is eleven terms. Ten is wrong. It reaches two hundred, but doesn't go **over**.

Visual: card shrinks to the top; "2 + 6 + 10" and "more than 200" underlined as used. Givens chip "a = 2, d = 4". Row "Sₙ = (n/2)[4 + 4(n − 1)] = 2n²" (on "squared"). Row "2n² > 200, n² > 100, n > 10" (on "ten"). Two single stack columns against a red dashed line at 200: "S₁₀ = 200" (touching the line) and "S₁₁ = 242" (above); "11 terms" boxed. On "over" a chip "10 terms" fades in and is crossed (caption "S₁₀ = 200: not more than 200"). Hold about 1 second.

### 14. handoff
> So pairing explains both sum formulas. Next, real situations. You save fifty dollars in January, eighty in February, a hundred and ten in March, adding thirty dollars more each month. After twelve months, have you saved more or less than twelve hundred **dollars**?

Visual: the two boxed forms show small at the top, then fade on "Next". Board clears to a `PeriodTimeline` (f04 part): 12 month tabs "Jan" to "Dec" along a baseline; deposit bars over the first three only, labelled "$50", "$80", "$110", with "+$30" arcs between them; "?" over each of the other nine tabs. On "dollars" a dashed red reference line labelled "$1,200 in total?" across a small empty total column at the right, a chip "Next: more or less than $1,200?" and a "?" chip. No answer, no formula. Hold about 2 seconds. This is f04's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Why it works: write Sₙ forwards and backwards; each column adds to a + aₙ (one term rises by d, the other falls by d), so 2Sₙ = n(a + aₙ).
2. Sₙ = (n/2)(a + aₙ) when you know the last term; Sₙ = (n/2)[2a + (n − 1)d] when you know d.
3. Number of terms from first to last: last − first + 1 (for d = 1); in general, aₙ = a + (n − 1)d gives n.
4. Solving for n: a threshold needs the first whole n past the root (check both sides); an equation can have two valid whole roots when terms go negative.

Memory aid (large, on the notes screen): *Average of first and last, times how many. Arithmetic only.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 14's frame exactly (the month strip with $50, $80, $110 and "?" tabs, the $1,200 line, the chips "Next: more or less than $1,200?" and "?"). This is the final frame and f04's opening frame.

## Teaching checks

- **Does it explain causes?** Why every pair has the same total: one term rises by d as the other falls by d (2, 3). Why the sum is half the rectangle: two copies fill it exactly (2). Why the second form: it replaces aₙ (4). Why 151 terms: last − first + 1 (6). Why round up to 14 and why it is the first: whole n, and positive terms make Sₙ increase (7). Why two answers can both be right: negative terms bring the sum down again (8). Why the average rule fails for 1 + 2 + 4: its pairs do not have equal totals (9).
- **Misconceptions addressed:** n steps to the last term (5; A1 crossed); 150 terms from 50 to 200 (6); stopping at the boundary (7; A2 crossed); rejecting a valid second root (8); the average rule for any sequence (9).
- **One idea at a time:** one pairing per sentence (2); one column label at a time (3); one case per scene from 5 on; algebra rows replace each other with only the needed result kept.
- **Video makes it easier:** the student sees equal pair arcs, then the upside-down copy fill the rectangle (2), the same column totals in symbols (3), the stacks either side of 500 (7), and the Sₙ points rise and come back down through 32 (8). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 23 s and 24 s (scenes 11 and 13).
- **Avoided double teaching:** f01's Sₙ and term count, f02's aₙ formula and Year 11 quadratics are recalled by use, each in a phrase or grey tag.
- **Syllabus coverage:** `ci69b15786` (2, 3, 5 check, 6; A1; key notes 1, 2); `ci3a79ab36` (4, 5, 7, 8; A2; key note 2).
- **Out of scope by design:** contexts and models (f04); geometric sums (f06); aₙ from a formula for Sₙ.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Find the sum of the first 30 terms of the arithmetic series 5 + 8 + 11 + …."
Model answer: a = 5, d = 3, n = 30; a₃₀ = 5 + 29 × 3 = 92; S₃₀ = (30/2)(5 + 92) = 15 × 97 = 1455 (or (30/2)[10 + 29 × 3] = 15 × 97). Classic mistake (crossed): "1500" (used 30 × 3).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "How many terms of the arithmetic series 2 + 6 + 10 + … are needed for the sum to first be more than 200?"
Model answer: a = 2, d = 4; Sₙ = (n/2)[4 + 4(n − 1)] = 2n²; 2n² > 200 gives n > 10 (n positive); S₁₀ = 200 is not more than 200, so 11 terms (S₁₁ = 242). Classic mistake (crossed): "10" (S₁₀ equals 200).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | 1 + 2 + … + 50; tally 1, 3, 6, 10, 15 | 1 |
| Pairing | 1 + 50 = 2 + 49 = 3 + 48 = 51; 50 × 51 = 2550; half 1275 | 2 |
| Forms | Sₙ = (n/2)(a + aₙ); Sₙ = (n/2)[2a + (n − 1)d]; test 25 × (2 + 49) = 1275 | 3, 4 |
| Card 07 (site) | 3, 7, 11: S₂₀ = 10(6 + 76) = 820; a₂₀ = 79; 10(3 + 79) = 820 | 5 |
| SA 2 (site) | 50 to 200: n = 151; (151/2)(250) = 151 × 125 = 18,875 | 6 |
| Problem 2 (c) (site) | 4, 9, 14: (n/2)(5n + 3) > 500; root (−3 + √20009)/10 ≈ 13.85; S₁₃ = 442, S₁₄ = 511 | 7 |
| Two roots | 11, 9, 7, …: n(12 − n) = 32; n = 4, 8; 3 + 1 − 1 − 3 = 0; Sₙ: 11, 20, 27, 32, 35, 36, 35, 32, 27 | 8 |
| Memory aid | 1 + 2 + 4 = 7; (1 + 4)/2 × 3 = 7.5 | 9 |
| A1 | a₃₀ = 92; S₃₀ = 1455; crossed 1500 | 10, 11 |
| A2 | Sₙ = 2n²; S₁₀ = 200, S₁₁ = 242; 11 terms; crossed 10 | 12, 13 |
| Handoff | $50, $80, $110; +$30; $1,200? | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run); Codex to re-check.

- Σ_{k=1}^{50} k = 1275; 50 × 51 = 2550; 25 × 51 = 1275.
- (n/2)(a + a + (n − 1)d) = (n/2)[2a + (n − 1)d] (symbolic).
- 10(6 + 76) = 820; 3 + 19 × 4 = 79; 10 × 82 = 820.
- 200 − 50 + 1 = 151; 151 × 125 = 18,875.
- (n/2)(8 + 5(n − 1)) = (n/2)(5n + 3); root of 5n² + 3n − 1000 = 0: 13.845…; S₁₃ = 442, S₁₄ = 511.
- (n/2)(22 − 2(n − 1)) = n(12 − n); roots of n² − 12n + 32: 4, 8; S₁ to S₉ = 11, 20, 27, 32, 35, 36, 35, 32, 27.
- A1: 5 + 29 × 3 = 92; 15 × 97 = 1455; 15 × 100 = 1500. A2: (n/2)(4 + 4(n − 1)) = 2n²; 200, 242.
- 1 + 2 + 4 = 7; 2.5 × 3 = 7.5.

## Memory aid check

- **"Average of first and last, times how many. Arithmetic only."** Original wording of a standard idea. Meaning, as said in scene 9: Sₙ = n × (a + aₙ)/2. Assumptions checked: the sequence is arithmetic, because only then do the outside-in pairs have equal totals (the cause shown in scenes 2 and 3); the counterexample 1 + 2 + 4 shows the rule failing for a GP, which comes next in the strand. "How many" is the number of terms, not the number of steps (scene 6 and A1). Works with negative terms (scene 8: 11 + 9 + … + (−3): 8 × (11 − 3)/2 = 32). Introduced after the cause (2, 3) and the uses (5 to 8).
- **Considered, not used:** "half n times first plus last" (a chant without the average meaning); the stadium story (no people; f03 uses bars).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,733 characters**, 15 scenes. Characters per scene (1 to 15): 342, 605, 510, 597, 479, 522, 626, 532, 277, 138, 299, 143, 313, 261, 75 (the total includes the 14 joining spaces). At 13.3 characters per second the speech is about 431 s; add about 15 s of settling time for the copy-rotate-slide in scene 2, the column labels in scene 3, the stacks in scene 7 and the plot in scene 8, 20 s for two countdowns, 5 s of short holds (scenes 9, 11, 13, 14) and about 60 s more of the quiet notes hold (about 100 s of holds): **about 531 s**, inside the band and under the 570 s cap. Watch scene 2: the rotate and slide must finish before "Every column is now fifty-one tall". Reserve trim if the voiced take runs long: scene 1's "There's a famous trick that does it in one line." (about 47 characters). More than about 230 characters of trims would drop below the 5,500 floor.

## Scene list and build ids

Lesson key `m-a12f03` (route math-a12-f03). Suggested explainer folder `src/explainer/lessons/math-a12-f03` and build folder `docs/production/claude-pm/lessons/m-a12f03` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, pairing, general-formula, second-form, twenty-terms, fifty-to-two-hundred, unknown-n, two-answers, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f02's last frame continues into scene 1 (camera continue, same staircase); 1 to 2 camera continue; 2 to 3 clear change (symbols); 3 to 4 camera continue (the box stays); 4 to 5 clear change (new case); 5 to 6, 6 to 7, 7 to 8 clear changes; 8 to 9 camera pull back to the aid; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/m-a12f03-learning-review.md`, `science_check` = `checks/m-a12f03-maths-check.md`.

## Assets

Have: no plates. Existing kit used: `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading`. Sequence parts from f01 (`TermLadder`, `PartialSumStack` single columns with a reference line) and f02 (`TermPlot` with `series2`, `StepCounter`). Month strip in scene 14: `PartialSumStack` gains a `referenceLine` ({value, label}) option for scenes 7 and 13; `PeriodTimeline` is specified in f04.

New part: `PairingRectangle` (below).

## Codex asset brief

No painted plate is needed (programme decision 5). Coded kit part for the sequence-parts kit brief (with f01's three and f02's two), in `src/explainer/math/`, exported through `kit.tsx`, with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample:

1. **`PairingRectangle`** (scenes 2, 3 small icon, 9 icon). A staircase of n bars for an AP (author-supplied a, d, n; heights a, a + d, …, aₙ, all positive in this version) and its paired copy. Props: `a`, `d`, `n`, `unit` (px per unit height), `barWidth`, `pairArcs` ({i, j, label, at}[]: arcs joining bar i and bar j with a label such as "1 + 50 = 51"; the part computes the pair total and throws if the label's value differs), `shiftArrows` ({at}: "+d" under a front bar, "−d" under a back bar), `copyAt` (amber copy appears), `rotateAt` (180° rotation about the copy's centre, about 1 s), `slideAt` (the copy translates so its shortest bar sits on the tallest original bar, about 1 s), `columnBrackets` ({height label, width label, at}: right-edge bracket "a + aₙ" or "51" and bottom bracket "n columns" or "50 columns"), `ringColumn` ({k, at}), `halfAt` (the copy fades, leaving the original with a half tag), `symbolic` (labels the brackets "a + aₙ" and "n" instead of numbers), `size` ('full' | 'icon'). Checks: for the pilot (a = 1, d = 1, n = 50) every column height equals 51 after the slide, the rectangle area equals 2550 and the staircase total equals 1275; for a second pilot (a = 3, d = 4, n = 6: 3, 7, 11, 15, 19, 23) every column equals 26 and the total equals 78. Fit check: 50 bars at 1920 and phone landscape (bar width may drop to 18 px).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the two syllabus quotes match the official 2024 text (linear form), and that no site module label appears in learner copy or metadata.
3. Confirm the derivation (scenes 2 to 4): each column adds to a + aₙ; 2Sₙ = n(a + aₙ); the substitution gives the second form; and the rectangle in scene 2 is n by (a + aₙ) with no claim of area units.
4. Confirm the scope of learner-visible general claims: "average of first and last, times how many; arithmetic only" (9, key notes); "every term positive: Sₙ only grows" (7); "an equation can have two valid whole roots when terms go negative" (8, key note 4); key note 3's term count (d = 1 case, and aₙ in general).
5. Confirm the threshold reasoning in scene 7 and A2: the first whole n past the root, checked on both sides; S₁₀ = 200 is not more than 200.
6. Confirm both attempts carry every demand, are original in wording, and that neither card or its visuals shows a formula, n or a sum.
7. Confirm the opening matches f02's scene 15 exactly and the handoff (scene 14) gives no answer; scene 15 returns to it.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Why the Arithmetic Series Formula Works: Sₙ = n/2 (a + l) by Pairing | Year 12 Maths Advanced

(Title length: 93 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/sequences-and-series/lesson03.sa.html

What is 1 + 2 + 3 + … + 50? Pair the first number with the last and every pair makes 51, because one number goes up as the other comes down. Turn the staircase upside down, fit it on top, and the sum is half of a 50 by 51 rectangle: 1275. The same pairing proves Sₙ = n/2 (a + aₙ) for any arithmetic sequence, and substituting the last term gives Sₙ = n/2 [2a + (n − 1)d]. Then use both: the first 20 terms of 3, 7, 11, …, every whole number from 50 to 200, the least n for a sum over 500, and a surprise sum with two correct answers. A memory aid: average of first and last, times how many (arithmetic only). Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, sequences and series.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Develop the formula Sₙ = (n/2)(a + aₙ) for the nth partial sum of an AP, and use the formula to solve problems"
"Develop the formula Sₙ = (n/2)[2a + (n − 1)d] for the nth partial sum of an AP, and use the formula to solve problems"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

Builds on: Arithmetic sequences (previous video); sigma notation and partial sums. Next: Arithmetic models of linear change.

#Year12Maths #MathsAdvanced #Sequences #HSCScience

## Open decisions

- **1. Title notation (root).** The draft title uses "a + l" because past papers and the site write l for the last term; the description and the video use aₙ (syllabus). Alternative title with the syllabus form: "Why the Arithmetic Series Formula Works: Pairing First and Last | Year 12 Maths Advanced".
- **2. Scene 8 (learning review).** The two-root example is original and not on the site. It replaces the site's flawed "Sₙ = k" items with a correct one and gives the video its surprise. Confirm it is followable for a student starting Year 12; fallback of similar length: the site's Problem 2 (a) S₁₅ = 585 for 4, 9, 14, … plus one sentence on choosing the form.
- **3. "Arithmetic series" in A1 (learning review; f01 open decision 3).** "The first 30 terms of the arithmetic series 5 + 8 + 11 + …" keeps "series" in its formal (infinite) sense. Confirm.
- **4. Site link form.** `.sa.html` form (root decision 15).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f01, f02 and Year 11 quadratics; check that the equal pair totals are explained before the rectangle; that the rectangle is n by (a + aₙ) and the half is clear; that the form-choice rule is stated once; that the 151 count recalls f01 without re-teaching; that the threshold check shows both sides; that the two-root surprise is clear; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The copy-rotate-slide and the Sₙ plot carry the explanation; judge them at playback speed in the voiced preview. Every bar, column and readout must be computed from the same a, d and n as the displayed expressions.
- The opening frame is f02's scene 15 (same designer, 2 Nov). If f02's handoff changes in review, change scene 1's first visual to match. Scene 14 must match f04's scene 1 opening.
