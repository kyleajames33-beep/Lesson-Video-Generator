# Maths A12 F02: How does a fixed difference determine an arithmetic sequence? Common difference, n − 1 steps to the nth term, a straight line in n, and whole-number positions (design)

Status: Revision 1 (2 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the maths kit (briefs 129, 131, 133, 135 and 143) and the sequence parts specified in `math-a12-f01.md` ("Codex asset brief": `TermLadder`, `PartialSumStack`, `SigmaBuilder`), plus two new parts specified below (`TermPlot`, `StepCounter`). Nothing recorded; human listening pending.

Narration 5,680 characters, 15 scenes, about 527 s (8.8 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: second video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 39), after f01 (sequences, partial sums and sigma) and before f03 (arithmetic partial sums). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5). No brief 151 pack and no route-inputs-3 entry exist for f02 (checked 2 Nov), so the pack work is done here: site lesson read (2 Nov, read-only) `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/sequences-and-series/lesson03.sa.html`, SHA256 `6ccf1ca41bea4fa028dec2301417d98bf39c6394ad06a0acebff03cfd413448b`; every number recalculated with SymPy; draft route entry in Decisions. Course outline entry: `math-a12-f02` (three content points, site source lesson 3).

Owner rules applied: as f01 (new 2024 syllabus only, codenames and exact wording, no site "Module" label; coded maths visuals; no people; one reasoning stage at a time; task, rule and grouped givens separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal conversational narration; exact values, with decimals only where an inequality's boundary is a decimal, shown in grey; attempt cards give nothing away; opens on f01's handoff frame; f01's terms aₙ, position, Sₙ and the "top − bottom + 1" count recalled, not re-taught).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Arithmetic sequences and series; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`, MathML in linear form:

- `cif2d358d2`: "Define a sequence a_n to be an arithmetic sequence, or arithmetic progression (AP), if every difference a_n − a_{n−1} of successive terms is the same where n ≥ 2, that is a_n − a_{n−1} = d for some constant d called the common difference"
- `cie8f37eac`: "Develop the formula a_n = a + (n − 1)d for the nth term of an AP, where a is the first term and n ≥ 1, and use it to solve problems"
- `cic396780a`: "Recognise that a_n is a linear function of n in an AP"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary:** starts from f01's last frame (3, 7, 11, 15, 19 on a `TermLadder` with four amber "+4" arcs, chips "Next: the same step every time" and "?"); defines an AP and d by successive differences, with negative d and a non-example (`cif2d358d2`); develops aₙ = a + (n − 1)d by counting steps (`cie8f37eac`); shows aₙ = dn + (a − d) as a linear function of n with gradient d, plotted as separate points at whole-number positions (`cic396780a`); uses the formula for a term, a position, a non-term (100 in 3, 7, 11, …), a and d from two terms, and the first negative term. Stops at single terms. Not taught: partial sums of an AP (f03; the handoff asks a question only); applications in context (f04); geometric sequences (f05).

## Decisions

- **Learner question kept (outline).** "How does a fixed difference determine an arithmetic sequence?" The answer, built in order: a fixed difference d between successive terms defines an AP (2); to reach position n you take n − 1 steps of d, because the first term needs no step (3); so the terms rise by d per position, which is a straight line in n with gradient d (4); the formula then finds terms, positions and non-terms (5, 6), recovers a and d from two terms by counting the steps between them (7), and finds where a decreasing AP first goes negative (8).
- **The hook surprise (the classic off-by-one, made visible).** f01 ended on 3, 7, 11, 15, 19 with +4 arcs. The tempting guess "3 + 100 × 4 = 403" is stated and held; scene 3 shows the steps are one fewer than the position and corrects it to 3 + 99 × 4 = 399. The hook names the list on its own terms ("Here's a sequence where every step adds four"), so it stays true if the playlist order changes.
- **Definition (`cif2d358d2`; site card 05 examples, unchanged).** 3, 7, 11, 15, 19 (d = 4); 20, 17, 14, 11 (d = −3); non-example 1, 4, 9, 16 (differences 3, 5, 7). Screen line "aₙ − aₙ₋₁ = d for n ≥ 2". The site's other non-example 2, 4, 8, 16 is kept for f04's handoff (ratios, f05).
- **The nth term by counting steps (`cie8f37eac`; site card 06 derivation).** The `StepCounter` labels each arc "1 step", "2 steps", "3 steps" as the ladder a, a + d, a + 2d, a + 3d builds; the cause sentence: "the number of steps is one less than the position, because the first term needed no step at all".
- **Linear in n (`cic396780a`; site card 06 "Linear in n" and Problem 1 (c)).** `TermPlot` of (n, aₙ) for n = 1 to 6 for 3, 7, 11, …: a dashed grey guide line y = 4n − 1, gradient triangle run 1, rise 4; a hollow grey marker at (0, −1) tagged "no term at n = 0"; points not joined (n counts positions). Expanded form aₙ = dn + (a − d) in the right column.
- **Worked examples (site, numbers unchanged).** (a) Card 06 WE1: a = 5, d = 3: a₁₀ = 32; aₙ = 50 gives n = 16. (b) Original, short: is 100 a term of 3, 7, 11, …? n = 25¼, not a whole number; a₂₅ = 99, a₂₆ = 103 bracket it on the plot. (c) Card 06 WE2: a₄ = 13, a₉ = 33: five steps rise 20, d = 4, a = 1, shown by step counting on a ladder with the two known cards and five arcs between them, with the site's simultaneous equations (a + 3d = 13, a + 8d = 33, subtract) as the matching algebra. (d) Problem 1 (a, b, c): a = 7, d = −4: aₙ = 11 − 4n < 0 gives n > 2.75 (grey decimal; exact 11/4 beside it), first negative term a₃ = −1; gradient −4. Problem 1 (a) a₈ = −21 is not used (one demand per stage).
- **Attempts (original).** (A1) "An arithmetic sequence has first term 12 and common difference −5. Find the 20th term." Answer −83. Crossed: "−88" (20 steps). (A2) "The 3rd term of an arithmetic sequence is 10 and the 7th term is 26. Find the first term and the common difference." Answer a = 2, d = 4. Crossed: "d = 3.2" (16 ÷ 5: counted terms, not steps). Neither card shows a formula, a step count or a sign.
- **Mistake scene:** none separate. "n steps to the nth term" (hook, 3; memory aid; A1 crossed); "d is a ratio" or "any pattern is arithmetic" (2, non-example); "divide by the number of terms" (7; A2 crossed); "every value on the line is a term" (4, 6); "round 2.75 down" (8).
- **Memory aid (original; fence posts).** "Terms are posts, steps are gaps: the nth term is n − 1 steps from the first." See "Memory aid check". It also matches f01's count rule (top − bottom + 1) in reverse.
- **Handoff (to f03, "Why do arithmetic partial-sum formulas work?").** Scene 14 sums up in one sentence, then shows a coded staircase of 50 thin bars of heights 1 to 50 (a `PartialSumStack`-style bar row, side by side, not stacked), the line "1 + 2 + 3 + … + 50 = ?" and the chip "Next: a shortcut for the total". No formula, no "pair" word. Scene 15 returns to this frame silently; it is f03's opening frame.
- **Site sources used:** lesson 3 cards 05 (definition, examples), 06 (derivation, linear form, WE1, WE2) and Problem 1 (b, c). Not used: the savings hook (f04 hook), cards 07 and 08 (sums, f03), card 09 and Problem 3 (applications, f04), Problem 2 (f03).
- **Site errors (new, lesson 3; for root to log, not yet in `site-corrections-maths-a12.md`):** (1) Card 08 "Type A" asks "Find n for which S_n = 200" for S_n = 3n² + 2n, then answers "n ≈ 7.84, round up to n = 8 (first n giving S_n ≥ 200)". S_n = 200 has no whole-number solution (S₇ = 161, S₈ = 208); the answer silently changes the question to a threshold. Correction: ask "Find the least n for which S_n ≥ 200" (answer 8), or state that S_n = 200 has no whole-number solution. (2) Problem 2 (b) asks for n with S_n = 322 for 4, 9, 14, …; no whole number works (n ≈ 11.05; S₁₁ = 319, S₁₂ = 378), and the step text prints visible self-correction ("re-check … Try n = 11 … The problem is illustrative"). Correction: replace with a target that is a partial sum (for example S_n = 319, n = 11) or ask the student to show that no n works. (3) Card 08 "Type C": "n > (−3 + √(9 + 40000))/10 ≈ 19.8"; the value is 19.70 (√40009 = 200.022). The conclusion n = 20 and the check S₂₀ = 1030 are right. (4) Card 08 heading "the 3-unknown rule" then lists five quantities (a, d, n, T_n, S_n). Correction: "five quantities; two pieces of information give two equations". (5) Footer link "Lesson 3 · Geometric Sequences, Series and Limiting Sums" is numbered 4 on the topic index (also logged from f01's note 6; log once).
- **Cause chain taught, in order:** (1) a fixed difference between successive terms defines an AP; differences that change rule it out (2); (2) the nth term is n − 1 steps after the first, because the first needs no step (3); (3) equal steps per position give a straight line with gradient d, at whole-number positions only (4); (4) solving aₙ = value gives the position; a fractional position means the value is not a term (5, 6); (5) the gap between two known positions counts steps, so dividing the rise by the steps gives d (7); (6) for a first negative term, the boundary is not a position, so take the next whole number (8).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f02`; playlist order 39; main learner question "How does a fixed difference determine an arithmetic sequence?"; syllabus actions `cif2d358d2`, `cie8f37eac`, `cic396780a`.
  - Entry knowledge: f01 (sequence, term, position, aₙ, the count top − bottom + 1); Year 11 linear functions y = mx + c and gradient as rise over run; solving linear equations and inequalities; simultaneous linear equations by elimination (Stage 5).
  - Start boundary: "Open on f01's 3, 7, 11, 15, 19 with +4 arcs; define AP and d by successive differences."
  - Stop boundary: "aₙ = a + (n − 1)d by counting steps; linear in n with gradient d at whole-number positions; terms, positions, non-terms, a and d from two terms, first negative term. No partial sums, contexts or GPs."
  - Next handoff: "math-a12-f03: a staircase of bars 1 to 50 with 1 + 2 + … + 50 = ?; ask for a shortcut."
  - Prerequisite videos: math-a12-f01.
- **Learner-visible vocabulary (plain meaning at first use):** arithmetic sequence, arithmetic progression, AP (a sequence where every step adds the same amount, 2); common difference d (that fixed amount, each term minus the one before, 2); first term a (a₁, 3); linear function of n (a rule whose graph is a straight line, 4); gradient (recall: rise for each step of one to the right, 4).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** `TermLadder` with `arcs` (f01 part); `StepCounter` (new: step labels on arcs, counting gaps; see "Codex asset brief"); `TermPlot` (new: discrete points against n with a dashed guide line, gradient triangle, hollow "no term" marker, horizontal reference line and bracketing); `AlignedAlgebra` for the formula rows; `Chip` with `cross`, `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).
- **Board layout (constant):** heading top-left; ladder or plot on the left two-thirds; algebra in the right column, current line bright and earlier lines dim; at most six ladder cards on screen.
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) aₙ = a + (n − 1)d; for 3, 7, 11: aₙ = 4n − 1, a₁₀₀ = 399, a₂₅ = 99, a₂₆ = 103; 4n − 1 = 100 gives n = 101/4 = 25.25.
  (b) a = 5, d = 3: a₁₀ = 32; 5 + 3(n − 1) = 50 gives n = 16.
  (c) a + 3d = 13, a + 8d = 33: d = 4, a = 1; a₉ = 1 + 8 × 4 = 33.
  (d) a = 7, d = −4: aₙ = 11 − 4n; 11 − 4n < 0 gives n > 11/4 = 2.75; a₂ = 3, a₃ = −1.
  (e) A1: 12 + 19(−5) = −83; 12 + 20(−5) = −88. A2: a + 2d = 10, a + 6d = 26: d = 4, a = 2; 16/5 = 3.2.
  (f) The linear claim: aₙ = dn + (a − d) is linear in n; the points (n, aₙ) lie on y = dx + (a − d) at x = 1, 2, 3, …; the line is a guide only. d = 0 gives a constant sequence (horizontal line); not spoken (author note, site card 05 "Key insight").
  (g) Pronunciations: "a sub n", "a sub ten", "n minus one lots of d", "d n, plus a minus d", "twenty-five and a quarter", "two point seven five".
  (h) Plot windows: scene 4 n from 0 to 6.5, y from −2 to 26 (points at n = 1 to 6: 3, 7, 11, 15, 19, 23); scene 6 n from 0 to 28, y from 0 to 112 (points at n = 1 to 27, small; reference line y = 100; a₂₅ and a₂₆ labelled); scene 8 n from 0 to 5.5, y from −11 to 9 (points 7, 3, −1, −5, −9; reference line y = 0; boundary n = 2.75 dashed).

Main question: *If every step adds the same amount, how do we find any term without listing the ones before it, and why does it make a straight line?*
Entry knowledge (f01; Year 11 linear functions; Stage 5 equations, inequalities and elimination): read aₙ and positions; gradient as rise over run.
Stops after: the AP definition, aₙ = a + (n − 1)d, the linear form, terms, positions, non-terms, a and d from two terms, first negative term. No sums, contexts or GPs.
Handoff: math-a12-f03: the staircase 1 + 2 + … + 50 = ? (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as f01): term values blue on cards; positions grey; step arcs and d amber (`MATH_ACCENT`); the first term a blue with a ring; plotted points blue, guide line dashed grey, gradient triangle amber; reference lines red dashed; crossed chips red; current algebra line bright, earlier lines dim.

### 1. hook (the hundredth term)
> Here's a sequence where every step adds four: three, seven, eleven, fifteen, nineteen. What's its hundredth term? Listing a hundred terms would take ages, so here's a quick guess. Start at three, and add a hundred fours. That gives four hundred and **three**. It sounds right, but is it? By the end of the next few minutes, you'll know exactly how to find any term, and whether that guess survives.

Visual: opens on f01's last frame exactly (f01 scene 15: `TermLadder` 3, 7, 11, 15, 19 with positions n = 1 to 5 and four amber "+4" arcs; chips "Next: the same step every time" and "?"). Heading writes on: "How does a fixed difference determine an arithmetic sequence?" as the chips fade. On "hundredth term" an empty card slot appears far right beyond a "…" gap, labelled grey "n = 100", with a "?" card. On "a hundred fours" a grey row "3 + 100 × 4"; on "three" it completes "= 403" and the result drops into the "?" card as a pencil-grey tentative value with a small tag "guess". On "is it?" the card gets a "?" badge. The guess card stays at the top right through scene 3.

### 2. arithmetic sequences
> A sequence like this is called an arithmetic sequence, or an arithmetic progression, AP for short. It's arithmetic when every difference between a term and the term before it is the same. That fixed difference is called the common difference, d. Here, seven minus three is four, eleven minus seven is four, and so on, so d is **four**. The difference can be negative, too. Twenty, seventeen, fourteen, eleven goes down by three each step, so d is minus **three**. But one, four, nine, sixteen isn't arithmetic. Its differences are three, five and seven, which aren't the **same**. So to test a sequence, find every difference, and check they all match.

Visual: camera continue on the ladder. Term tag "arithmetic sequence (arithmetic progression, AP)". On "difference between a term and the term before it" each "+4" arc relabels as a subtraction under the gap ("7 − 3 = 4", "11 − 7 = 4", …), one after another; on "four" all four glow and the definition line writes in the right column: "aₙ − aₙ₋₁ = d, the same for every n ≥ 2" with "d: common difference". On "negative" a second ladder slides in below: 20, 17, 14, 11 with arcs "−3"; on "three" tag "d = −3". On "isn't arithmetic" a third ladder: 1, 4, 9, 16 with arcs "+3", "+5", "+7" in grey; on "same" the three arcs are ringed red with "not all equal: not an AP". On the last sentence a small checklist chip "test: find every difference; all equal?". The second and third ladders fade at the end.

### 3. the nth term: count the steps
> So how do we jump straight to any term? Start at the first term, a. To reach the second term, add one d. The third term is two d's along, and the fourth term is three d's **along**. Each time, the number of steps is one less than the position, because the first term needed no step at all. So the nth term is a, plus n minus one lots of **d**. Now test the guess. The hundredth term of three, seven, eleven is ninety-nine steps after the first. That's three plus ninety-nine fours, which is three hundred and ninety-**nine**, not four hundred and three. The guess took one step too many.

Visual: the ladder's values morph to symbols: "a", "a + d", "a + 2d", "a + 3d" (first card ringed blue "a = a₁"). The `StepCounter` labels the arcs as each card is named: "1 step", "2 steps", "3 steps" (cue "along"); a small grey row under the positions: "position 2: 1 step; position 3: 2 steps; position 4: 3 steps". On "one less" the first card flashes "0 steps". On "d" the formula writes boxed in the right column: "aₙ = a + (n − 1)d". On "Now test the guess" the values morph back to 3, 7, 11, 15, 19 and the far slot "n = 100" returns; the gap "…" between n = 1 and n = 100 is bracketed "99 steps"; row "a₁₀₀ = 3 + 99 × 4". On "nine" "= 399" drops into the slot in blue ink, and the grey "403" guess card at the top right is crossed (caption "100 steps: one too many").

### 4. a straight line in n
> Here's why arithmetic sequences look so familiar. Plot each term against its position. Every step right by one goes up by d, the same amount each time, so the points lie on a straight **line**. Expand the formula, and you get d n, plus a minus d. That's a linear function of n, and its gradient is d. For our sequence, a sub n is four n minus one, so the line has gradient four. It would cross the vertical axis at minus one, but there's no term there, because n starts at **one**. And the points sit only at whole numbers, because n counts positions, so we don't join them up.

Visual: clear change to a `TermPlot` (author note h): horizontal axis "n (position)", ticks 1 to 6; vertical axis "aₙ". The ladder's cards fly to their points (1, 3), (2, 7), (3, 11), (4, 15), (5, 19), then (6, 23) appears. On "goes up by d" an amber run-1, rise-4 step drawn between each pair of points, one after another. On "line" a dashed grey guide line through the points. Right column rows: "aₙ = a + (n − 1)d = dn + (a − d)"; "linear in n, gradient d"; "here: aₙ = 4n − 1, gradient 4". On "one" a hollow grey marker at (0, −1) with tag "no term at n = 0". On the last sentence the guide line dims to faint and the six points pulse, tag "points only at n = 1, 2, 3, …".

### 5. worked example: a term and a position
> Let's use the formula. An arithmetic sequence has first term five, and common difference three. Find the tenth term. That's nine steps of three after the first term, so a sub ten is five plus twenty-seven, which is thirty-**two**. Now, which term equals fifty? Set the formula equal to fifty. Five, plus n minus one lots of three, equals fifty. Take away five, and n minus one lots of three is forty-five. Divide by three, and n minus one is **fifteen**. So n is sixteen, and fifty is the sixteenth term. Check: five plus fifteen threes is fifty.

Visual: board clears (new case). Task strip: "(a) Find the 10th term. (b) Which term equals 50?" Grouped givens chip: "a = 5, d = 3" (site card 06 WE1). Rule chip: "aₙ = a + (n − 1)d". (a) A short ladder 5, 8, 11, then "…", then the slot "n = 10" with the gap bracketed "9 steps"; row "a₁₀ = 5 + 9 × 3 = 5 + 27"; on "two" "= 32" boxed. (b) Rows one at a time, each replacing the last except the previous result: "5 + (n − 1) × 3 = 50"; "(n − 1) × 3 = 45"; on "fifteen" "n − 1 = 15"; then "n = 16" boxed. Check row with a tick: "5 + 15 × 3 = 50".

### 6. is one hundred a term?
> Here's a useful twist. Is one hundred a term of three, seven, eleven, and so on? Set the formula equal to one hundred. Three, plus n minus one lots of four, equals one hundred. So n minus one is ninety-seven over four, and n is twenty-five and a **quarter**. That's not a whole number, and there's no term in position twenty-five and a quarter. So one hundred is not a term. On the graph, the line passes one hundred between the twenty-fifth and twenty-sixth points, which are ninety-nine and one hundred and **three**.

Visual: task strip "Is 100 a term of 3, 7, 11, …?" (original). Rows: "3 + (n − 1) × 4 = 100"; "n − 1 = 97/4"; on "quarter" "n = 25¼" with a red tag "not a whole number". On "not a term" a chip "100 is not a term". On the last sentence the `TermPlot` returns in the left area with the scene 6 window (author note h): small points for n = 1 to 27, a red dashed reference line y = 100; the view zooms to n = 24 to 27, where the points (25, 99) and (26, 103) are labelled and the reference line passes between them; on "three" both points glow and a bracket "100 falls between a₂₅ and a₂₆".

### 7. worked example: from two terms
> Sometimes you're given two terms instead. The fourth term is thirteen, and the ninth term is thirty-three. Find a and d. From the fourth term to the ninth is five steps, and the value rises by twenty, from thirteen to thirty-three. So five d is twenty, and d is **four**. That's the same as subtracting the two equations. Now step back from the fourth term to the first. That's three steps of four, so a is thirteen minus twelve, which is **one**. Check: the ninth term is one plus eight fours, which is thirty-three.

Visual: board clears (new case). Task strip: "Find a and d." Givens chip: "a₄ = 13, a₉ = 33" (site card 06 WE2). A `TermLadder` with nine slots: only cards 4 (13) and 9 (33) filled; the five arcs between them draw with the `StepCounter` "1" to "5"; a rise bracket "33 − 13 = 20". Row "5d = 20"; on "four" "d = 4" boxed. On "subtracting the two equations" a grey side block: "a + 8d = 33; a + 3d = 13; subtract: 5d = 20" (the site's method, dim, as a match). On "step back" three arcs from card 4 back to card 1 draw amber, each labelled "− 4"; row "a = 13 − 3 × 4"; on "one" "a = 1" boxed. Check row with a tick: "a₉ = 1 + 8 × 4 = 33".

### 8. going down: the first negative term
> Now a decreasing one. An arithmetic sequence starts at seven, with common difference minus four. Which term is the first negative one? The formula gives a sub n equals seven, plus n minus one lots of minus four, which simplifies to eleven minus four n. Set that below zero. Then four n is bigger than eleven, so n is bigger than two point seven **five**. But n is a position, so it must be a whole number. The first whole number above two point seven five is three. Check: the terms are seven, three, and then minus **one**. And the gradient here is minus four, the same as d.

Visual: board clears (new case). Task strip: "Find the first negative term." Givens chip: "a = 7, d = −4" (site Problem 1 (b), (c)). Rows: "aₙ = 7 + (n − 1)(−4) = 11 − 4n"; "11 − 4n < 0"; "4n > 11"; on "five" "n > 11/4" with a grey "= 2.75". A `TermPlot` (author note h) at the left: points (1, 7), (2, 3), (3, −1), (4, −5), (5, −9) with a dashed guide line falling, a red dashed line y = 0 and a dashed vertical marker at n = 2.75 (grey label "2.75: not a position"). On "whole number" the marker's right side tints and the first point to its right, (3, −1), is ringed. Row "first negative term: a₃". On "one" a `TermLadder` strip 7, 3, −1 with arcs "−4", the −1 card glowing red-ink. On the last sentence the gradient triangle (run 1, rise −4) on the plot, tag "gradient −4 = d".

### 9. memory aid
> To remember why it's n minus one, think of fence posts. Five posts in a row have only four gaps between them. Terms are the posts, and the steps are the gaps. So the nth term sits n minus one steps after the **first**.

Visual: a coded fence: five posts with four rails between them (plain SVG, ink lines); posts labelled "a₁" to "a₅", gaps labelled "d" in amber; counter "5 posts, 4 gaps". The handwritten line writes large: "Terms are posts, steps are gaps." Under it: "aₙ is n − 1 steps from a₁." On "first" the first post ringed with "0 steps". Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. An arithmetic sequence has first term twelve, and common difference minus five. Find the twentieth term. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "An arithmetic sequence has first term 12 and common difference −5. Find the 20th term." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no fence, no formula).

### 11. feedback 1 (brief)
> The twentieth term is nineteen steps after the first. So it's twelve, plus nineteen lots of minus five. That's twelve minus ninety-five, which is minus eighty-**three**. Minus eighty-eight is wrong. It takes twenty steps, which is one too **many**.

Visual: card shrinks to the top; "12", "−5" and "20th" underlined as used. Row "a₂₀ = 12 + 19 × (−5)"; "= 12 − 95"; on "three" "= −83" boxed. On "many" a chip "12 + 20 × (−5) = −88" fades in and is crossed (caption "20 steps: one too many"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. The third term of an arithmetic sequence is ten, and the seventh term is twenty-six. Find the first term and the common difference. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The 3rd term of an arithmetic sequence is 10 and the 7th term is 26. Find the first term and the common difference." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> From the third term to the seventh is four steps, and the value rises by sixteen. So d is **four**. Now step back two places from the third term: ten minus eight is two, so a is **two**. Three point two is wrong for d. It divides by five, counting the terms instead of the steps between **them**.

Visual: card shrinks to the top; "3rd term is 10" and "7th term is 26" underlined. A small ladder with cards 3 (10) and 7 (26) and four arcs between, `StepCounter` "1" to "4"; row "4d = 26 − 10 = 16"; on "four" "d = 4" boxed. Two arcs back from card 3; row "a = 10 − 2 × 4"; on "two" "a = 2" boxed. On "them" a chip "d = 16 ÷ 5 = 3.2" fades in and is crossed (caption "5 terms, but 4 steps"). Hold about 1 second.

### 14. handoff
> So a fixed difference d means every term is a, plus n minus one lots of d, and the terms lie on a straight line in n. Next, the total. Here's one, plus two, plus three, all the way up to fifty. Adding them one at a time is slow. Is there a **shortcut**?

Visual: the boxed formula and a small plot motif show at the top, then fade on "Next". Board clears: a staircase of 50 thin teal bars side by side, heights 1 to 50 (bar width about 24 px, unit height about 14 px), rising left to right, with the first and last bars labelled "1" and "50"; the line "1 + 2 + 3 + … + 50 = ?" writes under it. On "shortcut" a chip "Next: a shortcut for the total" and a "?" chip. No formula, no pairing. Hold about 2 seconds. This is f03's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Arithmetic sequence (AP): aₙ − aₙ₋₁ = d, the same for every n ≥ 2. d is the common difference (it can be negative). Test: find every difference.
2. nth term: aₙ = a + (n − 1)d, where a = a₁. The nth term is n − 1 steps after the first.
3. aₙ = dn + (a − d) is a linear function of n with gradient d. Its graph is separate points at n = 1, 2, 3, ….
4. To find a position, solve aₙ = value; if n is not a whole number, the value is not a term. From two terms: d = (rise) ÷ (number of steps between them).

Memory aid (large, on the notes screen): *Terms are posts, steps are gaps.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 14's frame exactly (the 50-bar staircase, "1 + 2 + 3 + … + 50 = ?", the chips "Next: a shortcut for the total" and "?"). This is the final frame and f03's opening frame.

## Teaching checks

- **Does it explain causes?** Why a sequence is arithmetic: equal differences (2). Why n − 1: the first term needs no step (3, 9). Why a straight line: the same rise for every step of one (4). Why a fractional n means "not a term": positions are whole numbers (6). Why dividing by the steps between two terms gives d (7). Why round 2.75 up to 3: the boundary is not a position, and later terms are smaller (8).
- **Misconceptions addressed:** n steps to the nth term (hook, 3, 9; A1 crossed); dividing by the number of terms (7; A2 crossed); every value on the line is a term (4, 6); any pattern is arithmetic (2); rounding the boundary down (8).
- **One idea at a time:** one example per scene from 5 on; one algebra row per cue, with only the previous result kept; the plot appears only where it carries the cause (4, 6, 8).
- **Video makes it easier:** the student sees the step labels count one fewer than the positions (3), the guess card get crossed by the bracketed 99 steps (3), the run-and-rise steps line up into a line (4), and 100 fall between two points (6). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 19 s and 22 s (scenes 11 and 13).
- **Avoided double teaching:** aₙ, position and the term count are recalled from f01 by use, not re-taught; gradient and y = mx + c from Year 11 in one phrase.
- **Syllabus coverage:** `cif2d358d2` (2; key note 1); `cie8f37eac` (3, 5 to 8; A1, A2; key notes 2, 4); `cic396780a` (4, 6, 8; key note 3).
- **Out of scope by design:** partial sums; contexts and models; geometric sequences; d = 0 (author note f).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 1 mark suggested, not an official marking scheme).** "An arithmetic sequence has first term 12 and common difference −5. Find the 20th term."
Model answer: a₂₀ = 12 + 19 × (−5) = 12 − 95 = −83. Classic mistake (crossed): "−88" (20 steps).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "The 3rd term of an arithmetic sequence is 10 and the 7th term is 26. Find the first term and the common difference."
Model answer: a + 2d = 10 and a + 6d = 26, so 4d = 16, d = 4, and a = 10 − 2 × 4 = 2. Classic mistake (crossed): "d = 3.2" (16 ÷ 5, counting terms instead of steps).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook and guess | 3, 7, 11, 15, 19; guess 3 + 100 × 4 = 403 | 1 |
| Definition (site) | 3, 7, 11, …: d = 4; 20, 17, 14, 11: d = −3; 1, 4, 9, 16: differences 3, 5, 7 | 2 |
| Hundredth term | a₁₀₀ = 3 + 99 × 4 = 399 | 3 |
| Linear form | aₙ = 4n − 1; points (1, 3) to (6, 23); (0, −1) not a term | 4 |
| WE1 (site) | a = 5, d = 3: a₁₀ = 32; aₙ = 50 at n = 16 | 5 |
| Not a term | 3 + 4(n − 1) = 100: n − 1 = 97/4, n = 25¼; a₂₅ = 99, a₂₆ = 103 | 6 |
| WE2 (site) | a₄ = 13, a₉ = 33: 5d = 20, d = 4, a = 1; a₉ = 1 + 8 × 4 = 33 | 7 |
| Problem 1 (site) | a = 7, d = −4: aₙ = 11 − 4n; n > 11/4 = 2.75; a₃ = −1; gradient −4 | 8 |
| Fence | 5 posts, 4 gaps | 9 |
| A1 | 12 + 19 × (−5) = −83; crossed −88 | 10, 11 |
| A2 | 4d = 16, d = 4, a = 2; crossed 3.2 | 12, 13 |
| Handoff | bars 1 to 50; 1 + 2 + … + 50 = ? | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run); Codex to re-check.

- 3 + 100 × 4 = 403; 3 + 99 × 4 = 399; 4n − 1 at n = 1 to 6: 3, 7, 11, 15, 19, 23; at n = 25, 26: 99, 103; 4n − 1 = 100 at n = 25.25.
- 5 + 9 × 3 = 32; 5 + 3(n − 1) = 50 at n = 16.
- a + 3d = 13, a + 8d = 33: a = 1, d = 4.
- 7 + (n − 1)(−4) = 11 − 4n; 11/4 = 2.75; terms 7, 3, −1, −5, −9.
- A1: −83 and −88. A2: a = 2, d = 4; 16/5 = 3.2.

## Memory aid check

- **"Terms are posts, steps are gaps."** Original (the fence-post idea is common; the wording is ours). Meaning, as said in scene 9: n terms in a row have n − 1 steps between them, so aₙ is n − 1 steps of d after a₁. Assumptions checked: positions start at 1 (the syllabus's n ≥ 1); every step is the same d (true in an AP; the aid is about counting steps, not about their size, and says nothing false for a GP, where f05 counts n − 1 multiplications the same way). It helps a new case: from a₃ to a₁₀ there are 7 steps (A2 and scene 7 use the same count). Introduced after the cause (3) and the uses (5 to 8).
- **Considered, not used:** "first plus (n − 1) d's" as a bare chant (no cause); a staircase picture (used for f03's sums instead, to keep pictures distinct).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,680 characters**, 15 scenes. Characters per scene (1 to 15): 394, 640, 575, 569, 538, 511, 509, 568, 214, 137, 240, 163, 284, 249, 75 (the total includes the 14 joining spaces). At 13.3 characters per second the speech is about 427 s; add about 15 s of settling time for the ladders in scene 2, the symbol morph in scene 3, the plot in scene 4, the zoom in scene 6 and the plot in scene 8, 20 s for two countdowns, 5 s of short holds (scenes 9, 11, 13, 14) and about 60 s more of the quiet notes hold (about 100 s of holds): **about 527 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trim if the voiced take runs long: scene 1's "It sounds right, but is it?" (about 28 characters); scene 7's "That's the same as subtracting the two equations." (keep the grey block silent). More than about 180 characters of trims would drop below the 5,500 floor.

## Scene list and build ids

Lesson key `m-a12f02` (route math-a12-f02). Suggested explainer folder `src/explainer/lessons/math-a12-f02` and build folder `docs/production/claude-pm/lessons/m-a12f02` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, arithmetic-definition, nth-term-steps, linear-in-n, term-and-position, not-a-term, from-two-terms, first-negative-term, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f01's last frame continues into scene 1 (camera continue, same ladder); 1 to 2 to 3 camera continue (same ladder); 3 to 4 clear change (cards fly to the plot); 4 to 5 clear change (new case); 5 to 6 camera continue (same rule chip); 6 to 7 clear change; 7 to 8 clear change; 8 to 9 camera pull back to the fence; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/m-a12f02-learning-review.md`, `science_check` = `checks/m-a12f02-maths-check.md`.

## Assets

Have: no plates. Existing kit used: `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading`. From the f01 sequence parts: `TermLadder` (with `arcs`, symbolic values, sparse filling and a far slot beyond a "…" gap). The fence in scene 9 and the 50-bar staircase in scene 14 are plain SVG in the lesson folder (the staircase can reuse `PartialSumStack`'s block drawing if the build prefers).

New parts: `TermPlot`, `StepCounter` (below). `TermLadder` gains two options: `sparse` (only some slots filled, empty slots drawn dashed) and `farSlot` ({position, label, at}: a slot beyond a "…" gap with a bracket over the gap).

## Codex asset brief

No painted plate is needed (programme decision 5). Coded kit parts for the sequence-parts kit brief (with f01's three), in `src/explainer/math/`, exported through `kit.tsx`, each with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample:

1. **`TermPlot`** (scenes 4, 6, 8; f04 and f05 reuse it). Discrete points (n, aₙ) on graph-paper axes. Props: `window` ({nMin, nMax, yMin, yMax}), `nTicks`, `yTicks`, `termFn` (numeric function of whole n, author-supplied) or `points`, `nRange` (which whole n to draw), `flyFrom` (optional `TermLadder` card positions: each card flies to its point), `guideLine` ({slope, intercept, at, dimAt}: dashed grey line; the part checks that every drawn point lies on it within 1e-9 and throws otherwise), `stepTriangles` ({at}: run-1, rise-d amber steps between consecutive points, drawn one after another), `ghost` ({n: 0, label}: hollow grey marker), `referenceY` ({y, label, colour}: horizontal dashed line), `boundaryN` ({n, label}: vertical dashed marker at a non-integer n, with optional right-side tint), `zoom` ({nMin, nMax, yMin, yMax, at, duration}: animated window change), `ring` ({n, at}[]), `pointSize`. Points are never joined. A second series option (`series2`, its own colour and termFn) is needed in f04 for partial sums. Checks: pilot values 4n − 1 (n = 1 to 27), 11 − 4n (n = 1 to 5), and that 100 lies strictly between the n = 25 and n = 26 values.
2. **`StepCounter`** (scenes 3, 7, 13; f03 and f05 reuse it). Labels on `TermLadder` arcs that count gaps. Props: `ladder` (ref or slot geometry), `from`, `to` (slot indices; forwards or backwards), `labels` ("1 step", "2 steps", … or bare numbers), `stepLabel` (text per arc such as "+4" or "− 4"), `at`, `stagger`, `bracket` ({text, at}: a bracket over the counted gaps, such as "5 steps" or "99 steps" across a "…" gap). The count drawn must equal |to − from|; the part throws otherwise. Pilot: slots 4 to 9 (5 steps), 3 to 7 (4 steps), 4 back to 1 (3 steps), 1 to 100 across a gap (99 steps).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the three syllabus quotes match the official 2024 text (linear form), and that no site module label appears in learner copy or metadata.
3. Confirm the scope of learner-visible general claims: the AP definition for n ≥ 2 (2, key note 1); "the number of steps is one less than the position" (3); "a linear function of n, gradient d" with points only at whole n (4, key note 3); "if n is not a whole number, the value is not a term" (6, key note 4); d = rise ÷ steps between two terms (7, key note 4).
4. Confirm the first-negative-term reasoning (8): 11 − 4n < 0 gives n > 2.75, and the first whole n is 3 because the sequence decreases.
5. Confirm both attempts carry every demand, are original in wording, and that neither card or its visuals shows a formula, step count, sign or answer.
6. Confirm the handoff (scene 14) states no sum formula or pairing, and that scene 15 returns to its frame; confirm the opening matches f01's scene 15 exactly.
7. Confirm the site-error notes quote the site exactly and that the corrections are right (S₇ = 161, S₈ = 208 for 3n² + 2n; S₁₁ = 319, S₁₂ = 378 for 4, 9, 14, …; √40009 ≈ 200.022, so 19.70).
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Arithmetic Sequences: Why the nth Term Is a + (n − 1)d | Year 12 Maths Advanced

(Title length: 79 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/sequences-and-series/lesson03.sa.html

If every step adds four, is the 100th term of 3, 7, 11, … equal to 403? Count the steps: the first term needs none, so the 100th term is 99 steps along, and the answer is 399. See why an arithmetic sequence has aₙ = a + (n − 1)d, why its terms lie on a straight line with gradient d (but only at whole-number positions), how to tell whether 100 is a term, how to find a and d from two terms, and where a decreasing sequence first goes negative. A memory aid: terms are posts, steps are gaps. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, sequences and series.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define a sequence aₙ to be an arithmetic sequence, or arithmetic progression (AP), if every difference aₙ − aₙ₋₁ of successive terms is the same where n ≥ 2, that is aₙ − aₙ₋₁ = d for some constant d called the common difference"
"Develop the formula aₙ = a + (n − 1)d for the nth term of an AP, where a is the first term and n ≥ 1, and use it to solve problems"
"Recognise that aₙ is a linear function of n in an AP"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

Builds on: Sequences, partial sums and sigma notation (previous video). Next: Why the arithmetic sum formulas work.

#Year12Maths #MathsAdvanced #Sequences #HSCScience

## Open decisions

- **1. Notation (root; as f01 open decision 2).** aₙ and a (syllabus). The site writes Tₙ; the grey alias is in f01 only. If root wants it repeated, add "(Tₙ)" to key note 2.
- **2. Scene 6 (learning review).** "Is 100 a term?" is original and not on the site. It makes the whole-number nature of n concrete before the first-negative-term scene. Confirm it earns its place; if cut, the narration drops to about 5,170 characters (below the floor), so it would need a replacement of similar length.
- **3. Decimal boundary (maths check).** Scene 8 shows "n > 11/4" with a grey "= 2.75" and speaks "two point seven five" (the site's form). Root rule: decimals only in grey readouts; here the decimal is the grey readout and the spoken form. Confirm.
- **4. Site link form.** `.sa.html` form (root decision 15).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f01 and Year 11 linear functions; check that the off-by-one guess is visibly corrected by step counting before the formula is boxed; that the line is a guide only and the points are not joined; that "not a whole number, so not a term" is clear; that step counting in scene 7 is the cause and the equations are the matching algebra; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The step labels, the guess-card cross, the run-and-rise steps and the zoom carry the explanation; judge them at playback speed in the voiced preview. Every point and readout must be computed from the same term functions as the displayed expressions.
- The opening frame is f01's scene 15 (same designer, 2 Nov). If f01's handoff changes in review, change scene 1's first visual to match.
