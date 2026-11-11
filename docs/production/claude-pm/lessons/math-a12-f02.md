# Maths A12 F02: How does a fixed difference determine an arithmetic sequence? Common difference, n − 1 steps to the nth term, a straight line in n, and whole-number positions (design)

Status: Revision 3 (12 Nov 2026): brief 238/240 findings resolved (root). Ready to voice. Previously: Revision 2 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing. Previously Revision 1 (2 Nov 2026). Not voiced (no `math-a12-f02/` folder and no `measured/lesson.json`), so narration is rewritten freely where the anchor needs it. Nothing recorded; human listening pending.

Narration 5,980 characters (Revision 3; was 5,911), 15 scene headings, about 545 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: second video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 39), after f01 (sequences, partial sums and sigma) and before f03 (arithmetic partial sums). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5). No brief 151 pack and no route-inputs-3 entry exist for f02 (checked 2 Nov), so the pack work is done here: site lesson read (2 Nov, read-only) `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/sequences-and-series/lesson03.sa.html`, SHA256 `6ccf1ca41bea4fa028dec2301417d98bf39c6394ad06a0acebff03cfd413448b`; every number recalculated with SymPy; draft route entry in Decisions. Course outline entry: `math-a12-f02` (three content points, site source lesson 3).

Owner rules applied: as f01 (new 2024 syllabus only, codenames and exact wording, no site "Module" label; coded maths visuals; no people; one reasoning stage at a time; task, rule and grouped givens separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal conversational narration; exact values, with decimals only where an inequality's boundary is a decimal, shown in grey; attempt cards give nothing away; opens on f01's handoff frame; f01's terms aₙ, position, Sₙ and the "top − bottom + 1" count recalled, not re-taught).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Arithmetic sequences and series; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`, MathML in linear form:

- `cif2d358d2`: "Define a sequence a_n to be an arithmetic sequence, or arithmetic progression (AP), if every difference a_n − a_{n−1} of successive terms is the same where n ≥ 2, that is a_n − a_{n−1} = d for some constant d called the common difference"
- `cie8f37eac`: "Develop the formula a_n = a + (n − 1)d for the nth term of an AP, where a is the first term and n ≥ 1, and use it to solve problems"
- `cic396780a`: "Recognise that a_n is a linear function of n in an AP"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary (Revision 1 wording; Revision 2 anchor contexts and joins in Decisions override it):** starts from f01's last frame (3, 7, 11, 15, 19 on a `TermLadder` with four amber "+4" arcs, chips "Next: the same step every time" and "?"); defines an AP and d by successive differences, with negative d and a non-example (`cif2d358d2`); develops aₙ = a + (n − 1)d by counting steps (`cie8f37eac`); shows aₙ = dn + (a − d) as a linear function of n with gradient d, plotted as separate points at whole-number positions (`cic396780a`); uses the formula for a term, a position, a non-term (100 in 3, 7, 11, …), a and d from two terms, and the first negative term. Stops at single terms. Not taught: partial sums of an AP (f03; the handoff asks a question only); applications in context (f04); geometric sequences (f05).

## Decisions

### Revision 2 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a stack of plastic stacking chairs (painted plates, live).** One chair is 80 cm tall and each chair added makes the stack 6 cm taller, so the stack heights 80, 86, 92, … are an arithmetic sequence whose position is the number of chairs. The anchor carries every idea: the fixed difference (each chair adds the same 6 cm), the nth term by counting steps (a stack of n chairs is n − 1 additions above one chair), the classic off-by-one guess (80 + 20 × 6 = 200 against the true 194; a ghost 21st chair shows the extra step), the straight line with gradient d and no point at n = 0 (no stack of zero chairs), points that are not joined (no part chairs), and a value that is not a term (no stack is exactly 150 cm: 12 chairs reach 146 and 13 reach 152). School-hall furniture, not science; distinct from every context in `checks/root-decisions-maths-redesign.md` and from i01 to i07's likely contexts.
- **Site numbers.** The site's worked examples are unchanged: card 06 WE1 (a = 5, d = 3), card 06 WE2 (a₄ = 13, a₉ = 33), Problem 1 (a = 7, d = −4) and the card 05 examples 20, 17, 14, 11 and 1, 4, 9, 16. The site's illustrative list 3, 7, 11, 15, 19 (and the original "is 100 a term?" built on it) is replaced by the chairs: hook 80 + 19 × 6 = 194 (was 3 + 99 × 4 = 399), line 6n + 74 (was 4n − 1), and "is 150 a term?" n = 12⅔ (was n = 25¼). f03 still opens its first worked example on 3, 7, 11, … (site card 07), which needs no introduction from f02.
- **Idealising assumptions (author notes, not learner copy).** (i) Every chair adds exactly 6 cm when nested (real stacking chairs add a near-constant amount; the plate is painted to nest at that offset). (ii) The door line is a reference at 200 cm; "only just fit" is said of the guess, and the true 194 cm stack fits with 6 cm to spare. (iii) The plot's points are drawn at whole n only.
- **Join with f01 (changed, both designs edited together).** Scene 1 opens on f01 Revision 2's final frame exactly (three nested chairs at 4 px per cm, the ladder 80, 86, 92 with "+6" arcs, "Next: the same step every time" and "?"), then pulls back to 3.2 px per cm.
- **Join with f03 (changed, both designs edited together).** Scene 14 now ends on a 15-row pyramid of painted tins on a display base with "1 + 2 + 3 + … + 15 = ?", "Next: a shortcut for the total" and "?". f03 Revision 2 opens on it.
- **Simulations (standard item 3).**
  1. **The chair stack** (`SpriteStack`, scenes 1, 3, 6; the main simulation): chairs drop in one at a time behind the stack against a coded cm scale and a 2 m door line, with `LiveReadoutBoard` "chairs n", "steps n − 1", "height (cm)" (52 px); the ghost 21st chair shows the guess's extra step; in scene 6 the stack straddles the 150 cm line between 12 and 13 chairs.
  2. **Heights become points** (scene 4): the stack replays chairs 1 to 8 while each chair's height flies to the `TermPlot` as a point, with amber run-1, rise-6 steps.
- **Colour roles (fixed for the whole video).** Terms aₙ (heights, cards, points) blue; positions n (number of chairs) grey ink; d, step arcs, step brackets and the gradient triangle amber; guide and reference lines dashed ink; answer green; mistake red, crossed slips only.
- **Large type (standard item 5).** See the type line under "Script and shots". The chair stack about 640 to 700 px tall at 3.2 px per cm; the plot about 1,100 × 700 px.
- **Handwritten voice (standard item 6).** `HandTag`: "guess: just fits?", "0 steps", "20 steps: one chair too many", "not all equal: not an AP", "no stack of 0 chairs", "points only at n = 1, 2, 3, …", "not a whole number", "12 chairs too short, 13 too tall", "that is n − 1", "gradient −4 = d", "5 terms, but 4 steps", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 35 to 60 s.** f01's chairs and the twenty-chair question (1); the three ladders (2); the stack simulation with step brackets (3); heights to points on the plot (4); the g01 board (5); the 150 cm stack and the zoomed plot (6); the step ladder (7); the falling plot (8); the framed memory card (9); question cards with pictures (10 to 13); the tin pyramid (14); key notes (15).
- **Worked examples and attempts (g01 layout, standard item 7).** Scenes 5, 7 and 8: task strip, givens card, equation strip, rows one at a time at 52 px, green framed answers; scene 5 carries a silent crossed slip ("n = 15"). Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip. Question cards show the full question at 40 px plus a picture (A1: a ladder with the first card 12 and an empty 20th slot; A2: a seven-slot ladder with only cards 3 and 7 filled).
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Terms are posts, steps are gaps." with five chairs as the posts. Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Visual surprise (standard item 9).** The guess stack would just touch the door line, but the real twenty-chair stack stops 6 cm short: the ghost 21st chair is the guess's extra step, crossed (scene 3).
- **Narration (not voiced).** Scenes 1 to 4, 6 and 14 are rewritten around the chairs and the tins. Scenes 5 and 7 to 13 keep their Revision 1 text (cue marks on whole words in 5 and 11), and scene 15 keeps its line.

### Revision 1 decisions (kept where not overridden above)

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
  - Start boundary (Revision 2): "Open on f01's chair stack 80, 86, 92 with +6 arcs; ask how tall twenty chairs are; define AP and d by successive differences."
  - Stop boundary: "aₙ = a + (n − 1)d by counting steps; linear in n with gradient d at whole-number positions; terms, positions, non-terms, a and d from two terms, first negative term. No partial sums, contexts or GPs."
  - Next handoff (Revision 2): "math-a12-f03: a 15-row tin pyramid with 1 + 2 + … + 15 = ?; ask for a shortcut."
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
Handoff (Revision 2): math-a12-f03: the tin pyramid 1 + 2 + … + 15 = ? (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Revision 2 colour roles (fixed; see Decisions): terms aₙ (stack heights, card values, plotted points) **blue**; positions n (number of chairs) **grey ink** (`inner` role ink, never faint); the common difference d, step arcs, step brackets and the gradient triangle **amber**; the first term a **blue with a ring**; guide lines and reference lines **dashed ink**; answer **green**; mistake **red**, crossed slips only. Type (standard item 5): current working line and live readout numbers 52 px; equation strip, task strip and givens 44 px; earlier lines 30 to 32 px and dimmed, never faint; ladder cards 52 px; axis numbers at least 28 px; hand tags (`HandTag`) at least 34 px; question cards 40 px; key-note bullets 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (plate stack, ladder, plot or board) is solid from the stage's first frame; labels, readouts and answers arrive on their cues. Header strip "MATHEMATICS ADVANCED · SEQUENCES AND SERIES"; scene headings in the hand font, 44 px.

### 1. hook (how tall is a stack of twenty?)
> Last video ended on a stack of chairs. One chair is eighty centimetres tall, and every chair you add makes the stack six centimetres taller. So how tall is a stack of twenty chairs? Here's a quick guess. Start at eighty, and add twenty sixes. That gives two hundred **centimetres**, so it would only just fit under a two-metre door. It sounds right, but is it? By the end of the next few minutes, you'll know how to find any term, and whether that guess survives.

Visual: opens on f01's last frame exactly (f01 Revision 2 scene 15: three nested painted chairs `ma12-stacking-chair-side-v1.png` at 4 px per cm beside a coded height scale 0 to 120 cm; the `TermLadder` 80, 86, 92 with grey positions "n = 1, 2, 3" and amber "+6" arcs; chips "Next: the same step every time" and "?"). Heading writes on: "How does a fixed difference determine an arithmetic sequence?" as the chips fade. On "every chair you add" a fourth chair drops in behind the stack (`SpriteStack`, each new chair drawn behind, offset 6 cm) with an amber bracket "+6 cm". On "stack of twenty" the camera pulls back to 3.2 px per cm: the height scale extends to 220 cm, a dashed ink line at 200 cm labelled "door: 2 m" (36 px), and an empty dashed outline of a tall stack with a "?" at its top; `LiveReadoutBoard` (52 px): "chairs n" (grey ink), "height (cm)" (blue). On "add twenty sixes" a grey row "80 + 20 × 6"; on "centimetres" it completes "= 200" and a pencil-grey tentative marker sits on the 200 cm line with a hand tag "guess: just fits?". On "is it?" the marker gets a "?" badge. The guess marker stays through scene 3.

### 2. arithmetic sequences
> A sequence like eighty, eighty-six, ninety-two is called an arithmetic sequence, or an arithmetic progression, AP for short. It's arithmetic when every difference between a term and the term before it is the same. That fixed difference is called the common difference, d. Here, eighty-six minus eighty is six, ninety-two minus eighty-six is six, and so on, so d is **six**. The difference can be negative, too. Twenty, seventeen, fourteen, eleven goes down by three each step, so d is minus **three**. But one, four, nine, sixteen isn't arithmetic. Its differences are three, five and seven, which aren't the **same**. So to test a list of terms, check that each difference matches. For a sequence given by a rule, show the difference is the same for every n.

Visual: the chair stack (four chairs) stays at the left (about 340 px tall), solid. Right two-thirds: the ladder 80, 86, 92, 98 (52 px) with tag "arithmetic sequence (arithmetic progression, AP)". On "difference between a term and the term before it" each "+6" arc relabels as a subtraction under the gap ("86 − 80 = 6", "92 − 86 = 6", "98 − 92 = 6"), one after another, in step with amber brackets between the chair tops; on "six" all three glow and the definition line writes: "aₙ − aₙ₋₁ = d, the same for every n ≥ 2" (44 px) with "d: common difference" (amber). On "negative" a second ladder slides in below: 20, 17, 14, 11 with amber arcs "−3"; on "three" tag "d = −3". On "isn't arithmetic" a third ladder: 1, 4, 9, 16 with arcs "+3", "+5", "+7"; on "same" the three arcs are ringed red with the hand tag "not all equal: not an AP". On the last two sentences a chip "test a list: is each difference equal?" and under it "a rule: is aₙ − aₙ₋₁ the same for every n?". The second and third ladders fade at the end.

### 3. the nth term: count the steps
> So how do we jump straight to any term? Start at the first term, a, one chair. To reach the second term, add one d. The third term is two d's along, and the fourth term is three d's **along**. Each time, the number of steps is one less than the position, because the first chair needed no step at all. So the nth term is a, plus n minus one lots of **d**. Now test the guess. A stack of twenty chairs is nineteen steps above one chair. That's eighty plus nineteen sixes, which is one hundred and **ninety-four** centimetres, not two hundred. The guess added one chair too many.

Visual: the chair stack simulation (simulation 1, the lesson's main live simulation) at the left, about 700 px tall at 3.2 px per cm, with the height scale and the "door: 2 m" line. The ladder's values morph to symbols: "a", "a + d", "a + 2d", "a + 3d" (first card ringed blue "a = a₁"); in step, the `StepCounter` labels the amber brackets between chair tops "1 step", "2 steps", "3 steps" (cue "along"); grey row under the positions: "position 2: 1 step; position 3: 2 steps; position 4: 3 steps". On "one less" the bottom chair flashes with the hand tag "0 steps". On "d" the formula writes framed in the right column: "aₙ = a + (n − 1)d" (52 px). On "Now test the guess" chairs drop in one after another (about 3 s) as the readouts run: "chairs n" 4 → 20, "steps n − 1" (amber) 3 → 19, "height" 98 → 194 cm; row "a₂₀ = 80 + 19 × 6". On "ninety-four" the stack top settles at 194 cm, green framed "194 cm", and a dashed ghost 21st chair rises on top to the guess marker at 200 cm and is crossed in red (hand caption "20 steps: one chair too many").

### 4. a straight line in n
> Here's why arithmetic sequences look so familiar. Plot each stack's height against the number of chairs. Every extra chair goes up by d, the same amount each time, so the points lie on a straight **line**. Expand the formula, and you get d n, plus a minus d. That's a linear function of n, and its gradient is d. For the chairs, a sub n is six n plus seventy-four, so the line has gradient six. It would cross the vertical axis at seventy-four, but there's no stack of zero chairs, because n starts at **one**. And the points sit only at whole numbers, because you can't stack part of a chair, so we don't join them up.

Visual: clear change to a `TermPlot` (windows: see the `TermPlot` contract; about 1,100 × 700 px), solid frame and axes from the first frame: horizontal axis "n (number of chairs)", ticks 1 to 8; vertical axis "aₙ (height, cm)" from 60 to 130. The chair stack shrinks to a 260 px column at the left edge; as it replays chairs 1 to 8, each chair's height flies as a blue point to (1, 80), (2, 86), …, (8, 122). On "goes up by d" an amber run-1, rise-6 step draws between each pair of points. On "line" a dashed ink guide line through the points. Right column rows (52 px, earlier rows dimmed): "aₙ = a + (n − 1)d = dn + (a − d)"; "linear in n, gradient d"; "chairs: aₙ = 6n + 74, gradient 6". On "one" a hollow grey marker at (0, 74) with the hand tag "no stack of 0 chairs". On the last sentence the guide line thins and the points pulse; hand tag "points only at n = 1, 2, 3, …".

### 5. worked example: a term and a position
> Let's use the formula. An arithmetic sequence has first term five, and common difference three. Find the tenth term. That's nine steps of three after the first term, so a sub ten is five plus twenty-seven, which is **thirty-two**. Now, which term equals fifty? Set the formula equal to fifty. Five, plus n minus one lots of three, equals fifty. Take away five, and n minus one lots of three is forty-five. Divide by three, and n minus one is **fifteen**. So n is sixteen, and fifty is the sixteenth term. Check: five plus fifteen threes is fifty.

Visual: clear change to the g01 layout. Task strip: "(a) Find the 10th term. (b) Which term equals 50?" Givens card: "a = 5 (blue), d = 3 (amber)" (site card 06 WE1). Equation strip: "aₙ = a + (n − 1)d". (a) A short ladder 5, 8, 11, then "…", then the slot "n = 10" with the gap bracketed amber "9 steps"; row "a₁₀ = 5 + 9 × 3 = 5 + 27"; on "thirty-two" the green framed answer "a₁₀ = 32". (b) Rows at 52 px, one at a time, each earlier row dimmed: "5 + (n − 1) × 3 = 50"; "(n − 1) × 3 = 45"; on "fifteen" "n − 1 = 15"; then green framed "n = 16". Grey check row with a tick: "5 + 15 × 3 = 50". A red slip "n = 15" writes small at the right and is crossed (hand caption "that is n − 1"), silent.

### 6. can a stack be exactly 150 cm?
> Here's a useful twist. Can a stack be exactly one hundred and fifty centimetres tall? Set the formula equal to one hundred and fifty. Eighty, plus n minus one lots of six, equals one hundred and fifty. So n minus one is seventy over six, and n is twelve and two **thirds**. That's not a whole number, and you can't have two thirds of a chair. So one hundred and fifty is not a term. On the graph, the line passes one hundred and fifty between the twelfth and thirteenth points, which are one hundred and forty-six and one hundred and **fifty-two**.

Visual: the chair stack simulation returns at the left (about 640 px tall) with a dashed ink line at 150 cm labelled "150 cm?". Task strip: "Is 150 a term of 80, 86, 92, …?" (original). Rows at 52 px: "80 + (n − 1) × 6 = 150"; "n − 1 = 70/6"; on "thirds" "n = 12⅔" with a red hand tag "not a whole number". On "not a term" a chip "150 is not a term". On the graph sentence a `TermPlot` (n from 10 to 15) slides in at the right with points (11, 140), (12, 146), (13, 152), (14, 158) and the dashed ink line y = 150 passing between them; in step the stack builds to 12 chairs (readout "146 cm", top below the line), then a 13th chair drops (readout "152 cm", top above the line). On "fifty-two" both points glow and a bracket "150 falls between a₁₂ and a₁₃", hand tag "12 chairs too short, 13 too tall".

### 7. worked example: from two terms
> Sometimes you're given two terms instead. The fourth term is thirteen, and the ninth term is thirty-three. Find a and d. From the fourth term to the ninth is five steps, and the value rises by twenty, from thirteen to thirty-three. So five d is twenty, and d is **four**. That's the same as subtracting the two equations. Now step back from the fourth term to the first. That's three steps of four, so a is thirteen minus twelve, which is **one**. Check: the ninth term is one plus eight fours, which is thirty-three.

Visual: clear change (new case, g01 layout). Task strip: "Find a and d." Givens card: "a₄ = 13, a₉ = 33" (site card 06 WE2). A `TermLadder` with nine slots (cards 44 px): only cards 4 (13) and 9 (33) filled; the five amber arcs between them draw with the `StepCounter` "1" to "5"; a rise bracket "33 − 13 = 20". Row "5d = 20"; on "four" green framed "d = 4". On "subtracting the two equations" a grey side block (32 px): "a + 8d = 33; a + 3d = 13; subtract: 5d = 20". On "step back" three arcs from card 4 back to card 1 draw amber, each "− 4"; row "a = 13 − 3 × 4"; on "one" green framed "a = 1". Grey check row with a tick: "a₉ = 1 + 8 × 4 = 33".

### 8. going down: the first negative term
> Now a decreasing one. An arithmetic sequence starts at seven, with common difference minus four. Which term is the first negative one? The formula gives a sub n equals seven, plus n minus one lots of minus four, which simplifies to eleven minus four n. Set that below zero. Then four n is bigger than eleven, so n is bigger than two point seven **five**. But n is a position, so it must be a whole number. The first whole number above two point seven five is three. Check: the terms are seven, three, and then minus **one**. And the gradient here is minus four, the same as d.

Visual: clear change (new case, g01 layout). Task strip: "Find the first negative term." Givens card: "a = 7, d = −4" (site Problem 1 (b), (c)). Rows at 52 px: "aₙ = 7 + (n − 1)(−4) = 11 − 4n"; "11 − 4n < 0"; "4n > 11"; on "five" "n > 11/4" with a grey "= 2.75". A `TermPlot` (Revision 1 window, note h) at the left, solid: points (1, 7), (2, 3), (3, −1), (4, −5), (5, −9) with a dashed ink guide line falling, a dashed ink line y = 0 and a dashed vertical marker at n = 2.75 (grey label "2.75: not a position"). On "whole number" the region right of the marker tints pale amber and the first point to its right, (3, −1), is ringed. On "one" a `TermLadder` strip 7, 3, −1 with arcs "−4", and the green framed answer "first negative term: a₃ = −1". On the last sentence the amber gradient triangle (run 1, rise −4), hand tag "gradient −4 = d".

### 9. memory aid
> To remember why it's n minus one, think of fence posts. Five posts in a row have only four gaps between them. Terms are the posts, and the steps are the gaps. So the nth term sits n minus one steps after the **first**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 620 px, double ink frame, hand-font heading "Memory aid"). Inside, left: five chairs from the stack laid out as a small side-by-side row of the chair plate (about 120 px each) standing for the posts, with amber "d" brackets in the four gaps between their tops; counter "5 terms, 4 steps" (44 px). Right: the hand-font line at 60 px: "Terms are posts, steps are gaps." Under it, 44 px: "aₙ is n − 1 steps from a₁." On "first" the first chair is ringed with "0 steps". Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. An arithmetic sequence has first term twelve, and common difference minus five. Find the twentieth term. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "An arithmetic sequence has first term 12 and common difference −5. Find the 20th term." The full question stays on screen. Picture slot: an empty `TermLadder` with grey slots "n = 1, 2, 3, …, 20" (the first card "12", the last slot "?"; no steps counted). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 1 (brief)
> The twentieth term is nineteen steps after the first. So it's twelve, plus nineteen lots of minus five. That's twelve minus ninety-five, which is minus **eighty-three**. Minus eighty-eight is wrong. It takes twenty steps, which is one too **many**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "a = 12", "d = −5", "n = 20" ("12", "−5" and "20th" underlined in the card as used). Rows at 52 px: "a₂₀ = 12 + 19 × (−5)" with an amber bracket "19 steps"; "= 12 − 95"; on "eighty-three" the green framed answer "−83". On "many" a red slip "12 + 20 × (−5) = −88" writes and is crossed (hand caption "20 steps: one too many"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. The third term of an arithmetic sequence is ten, and the seventh term is twenty-six. Find the first term and the common difference. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The 3rd term of an arithmetic sequence is 10 and the 7th term is 26. Find the first term and the common difference." The full question stays on screen. Picture slot: a seven-slot `TermLadder` with only card 3 (10) and card 7 (26) filled, no arcs or step counts. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 2 (brief)
> From the third term to the seventh is four steps, and the value rises by sixteen. So d is **four**. Now step back two places from the third term: ten minus eight is two, so a is **two**. Three point two is wrong for d. It divides by five, counting the terms instead of the steps between **them**.

Visual: the card shrinks to the top. `GivensStrip`: "a₃ = 10", "a₇ = 26" ("3rd term is 10" and "7th term is 26" underlined). The picture's ladder grows its four amber arcs between cards 3 and 7 with the `StepCounter` "1" to "4"; row "4d = 26 − 10 = 16"; on "four" green framed "d = 4". Two arcs back from card 3; row "a = 10 − 2 × 4"; on "two" green framed "a = 2". On "them" a red slip "d = 16 ÷ 5 = 3.2" writes and is crossed (hand caption "5 terms, but 4 steps"). Hold about 1 s.

### 14. handoff
> So a fixed difference d means every term is a, plus n minus one lots of d, and the terms lie on a straight line in n. Next, the total. A supermarket stacks tins in a pyramid: one on top, two below it, then three, down to fifteen on the bottom row. How many tins is that? Adding them one row at a time is slow. Is there a **shortcut**?

Visual: the framed formula and a small plot icon show at the top (30 px), then fade on "Next". Board clears: the painted tin pyramid (`SpriteStack` pyramid mode, the tin plate `ma12-food-tin-v1.png` drawn at 96 px wide, rows of 1 to 15 tins, about 1,440 × 720 px, standing on the painted display base `ma12-display-base-v1.png`), solid from its first frame; small grey row labels "1", "2", "3", …, "15" down the left side. The line "1 + 2 + 3 + … + 15 = ?" (52 px) writes under it. On "shortcut" a chip "Next: a shortcut for the total" and a "?" chip. No formula, no pairing. Hold about 2 s. This is f03's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- AP: aₙ − aₙ₋₁ = d, the same every step.
- aₙ = a + (n − 1)d, where a = a₁.
- aₙ = dn + (a − d): linear in n, gradient d.
- n not a whole number: the value is not a term.
- From two terms: d = rise ÷ steps between them.

Memory aid (framed card, right half of the notes screen, as in scene 9): *Terms are posts, steps are gaps.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (1 s) to scene 14's frame exactly (the 15-row tin pyramid on its base, "1 + 2 + 3 + … + 15 = ?", "Next: a shortcut for the total" and "?"). This is the final frame and f03's opening frame.

## Teaching checks

- **Does it explain causes?** Why a sequence is arithmetic: equal differences (2). Why n − 1: the first term needs no step (3, 9). Why a straight line: the same rise for every step of one (4). Why a fractional n means "not a term": positions are whole numbers (6). Why dividing by the steps between two terms gives d (7). Why round 2.75 up to 3: the boundary is not a position, and later terms are smaller (8).
- **Misconceptions addressed:** n steps to the nth term (hook, 3, 9; A1 crossed); dividing by the number of terms (7; A2 crossed); every value on the line is a term (4, 6); any pattern is arithmetic (2); rounding the boundary down (8).
- **One idea at a time:** one example per scene from 5 on; one algebra row per cue, with only the previous result kept; the plot appears only where it carries the cause (4, 6, 8).
- **Video makes it easier:** the student sees the step labels count one fewer than the positions (3), the twentieth chair stop 6 cm below the guess, with the ghost 21st chair crossed (3), the run-and-rise steps line up into a line (4), and 150 cm fall between the twelfth and thirteenth chairs (6). Each motion is the evidence for the next sentence.
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
| Hook and guess (Revision 2) | chairs 80, 86, 92, …; guess 80 + 20 × 6 = 200 cm | 1 |
| Definition | 80, 86, 92, 98: d = 6 (Revision 2); site: 20, 17, 14, 11: d = −3; 1, 4, 9, 16: differences 3, 5, 7 | 2 |
| Twenty chairs (Revision 2) | a₂₀ = 80 + 19 × 6 = 194 cm | 3 |
| Linear form (Revision 2) | aₙ = 6n + 74; points (1, 80) to (8, 122); (0, 74) not a term | 4 |
| WE1 (site) | a = 5, d = 3: a₁₀ = 32; aₙ = 50 at n = 16 | 5 |
| Not a term (Revision 2) | 80 + 6(n − 1) = 150: n − 1 = 70/6, n = 12⅔; a₁₂ = 146, a₁₃ = 152; a₁₁ = 140, a₁₄ = 158 | 6 |
| WE2 (site) | a₄ = 13, a₉ = 33: 5d = 20, d = 4, a = 1; a₉ = 1 + 8 × 4 = 33 | 7 |
| Problem 1 (site) | a = 7, d = −4: aₙ = 11 − 4n; n > 11/4 = 2.75; a₃ = −1; gradient −4 | 8 |
| Fence (chairs as posts) | 5 terms, 4 steps | 9 |
| A1 | 12 + 19 × (−5) = −83; crossed −88 | 10, 11 |
| A2 | 4d = 16, d = 4, a = 2; crossed 3.2 | 12, 13 |
| Handoff (Revision 2) | tin pyramid, rows 1 to 15; 1 + 2 + … + 15 = ? | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run); Codex to re-check.

- Revision 2 (checked with Python, 7 Nov): 80 + 20 × 6 = 200; 80 + 19 × 6 = 194; 6n + 74 at n = 1 to 8: 80, 86, 92, 98, 104, 110, 116, 122; at n = 11 to 14: 140, 146, 152, 158; 6n + 74 = 150 at n = 38/3 = 12⅔. (Revision 1's 3, 7, 11 values are no longer used.)
- 5 + 9 × 3 = 32; 5 + 3(n − 1) = 50 at n = 16.
- a + 3d = 13, a + 8d = 33: a = 1, d = 4.
- 7 + (n − 1)(−4) = 11 − 4n; 11/4 = 2.75; terms 7, 3, −1, −5, −9.
- A1: −83 and −88. A2: a = 2, d = 4; 16/5 = 3.2.

## Memory aid check

- **"Terms are posts, steps are gaps."** Original (the fence-post idea is common; the wording is ours). Meaning, as said in scene 9: n terms in a row have n − 1 steps between them, so aₙ is n − 1 steps of d after a₁. Assumptions checked: positions start at 1 (the syllabus's n ≥ 1); every step is the same d (true in an AP; the aid is about counting steps, not about their size, and says nothing false for a GP, where f05 counts n − 1 multiplications the same way). It helps a new case: from a₃ to a₁₀ there are 7 steps (A2 and scene 7 use the same count). Introduced after the cause (3) and the uses (5 to 8).
- **Considered, not used:** "first plus (n − 1) d's" as a bare chant (no cause); a staircase picture (used for f03's sums instead, to keep pictures distinct).

## Narration length estimate

Revision 2 (7 Nov 2026), counted by script with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,911 characters**, 15 scene headings (Revision 1, recounted the same way: 5,666). Characters per scene (in order): 459, 678, 565, 611, 538, 540, 509, 568, 214, 137, 240, 163, 284, 330, 75.

At 13.3 characters per second the speech is about 444 s. Holds and settling: two 10 s countdowns 20 s; short holds (memory aid 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the chair drops (1, 3, 6), the points flying to the plot (4) and the board changes (5, 7, 8) 25 s; the key-notes scene 45 s (about 96 s in all). Total **about 540 s (9 min 0 s)**, inside the 5,500 to 7,000 character band and 30 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 2's "So to test a list of terms, check that each difference matches. For a sequence given by a rule, show the difference is the same for every n." (keep the chip); scene 4's last sentence (keep the hand tag). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12f02` (route math-a12-f02). Suggested explainer folder `src/explainer/lessons/math-a12-f02` and build folder `docs/production/claude-pm/lessons/m-a12f02` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, arithmetic-definition, nth-term-steps, linear-in-n, term-and-position, not-a-term, from-two-terms, first-negative-term, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f01's last frame continues into scene 1 (camera continue, same ladder); 1 to 2 to 3 camera continue (same ladder); 3 to 4 clear change (cards fly to the plot); 4 to 5 clear change (new case); 5 to 6 camera continue (same rule chip); 6 to 7 clear change; 7 to 8 clear change; 8 to 9 camera pull back to the fence; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes scene, 45 s in all (1,350 frames in `config.ts`). Review evidence paths: `learning_review` = `checks/m-a12f02-learning-review.md`, `science_check` = `checks/m-a12f02-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `physics/phys-y11-box-v1.png` and `physics/phys-y11-crate-v1.png` (boxes; stacking boxes adds their full height, which hides the "first term differs" idea), `biology/m5x-card-pile-v1.png` (a card pile; too thin to read a step). No stacking chair or tin exists.

Need (painted, new): `ma12-stacking-chair-side-v1.png` (briefed in `math-a12-f01.md`, plate 4; not re-briefed here), and for scene 14 `ma12-food-tin-v1.png` and `ma12-display-base-v1.png` (briefed in `math-a12-f03.md`, plates 1 and 2, because f03 is their main use).

Coded (studio kit): the height scale and door line, step brackets, readouts, ladders and step counters, the plot, givens cards, answer frames, slips, question cards and their pictures, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`; `TermLadder` and `SpriteStack` (f01's kit pass).

Additions the build needs:
1. **`TermPlot`** and **`StepCounter`** (the Revision 1 contracts below are kept), in studio sizes: 52 px point labels on cue, a `flyFrom` option so a point can arrive from a screen position (the top of the chair stack), and a zoomed window mode (scene 6).
2. **`SpriteStack` scale animation** (small): the stack's px-per-cm changes smoothly on a camera pull-back (4 → 3.2 px per cm), uniform scale only (the plate's aspect never changes).
3. **A ghost sprite** (small, `SpriteStack` option): a dashed-outline copy of the sprite at the next offset, which can be crossed.

## Codex asset brief (Maths A12 F02)

No new plate is briefed in this file. The stacking chair is plate 4 of `math-a12-f01.md`'s brief; the tin and the display base are plates 1 and 2 of `math-a12-f03.md`'s brief. Paint them in those briefs' batches; f02 needs all three.

### Coded part contracts (Revision 1, kept)

**`StepCounter`.** Step labels on arcs between ladder cards ("1 step", "2 steps", …) or numbers "1" to "k" across a gap, with a bracket "k steps" and a "0 steps" flash on the first card; used on chair-top brackets in scenes 3 and 9. **`TermPlot`.** Discrete points (n, aₙ) for whole n only, with a dashed guide line, gradient triangle, hollow "no term" marker, horizontal reference line, vertical boundary marker with a tinted side, bracketing labels and a second series option; windows as author note i (Revision 2: scene 4 n from 0 to 8.5, y from 60 to 130; scene 6 n from 10 to 15, y from 135 to 162 with the line y = 150; scene 8 as Revision 1's note h).

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

One chair is 80 cm tall and each extra chair adds 6 cm. Is a stack of twenty chairs 200 cm tall? Count the steps: the first chair needs none, so twenty chairs are 19 steps up, and the stack is 194 cm. See why an arithmetic sequence has aₙ = a + (n − 1)d, why its terms lie on a straight line with gradient d (but only at whole-number positions), why no stack is exactly 150 cm tall (a value that is not a term), how to find a and d from two terms, and where a decreasing sequence first goes negative. A memory aid: terms are posts, steps are gaps. Two exam-style questions at the end.

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

## Revision 2 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, the three syllabus points, the learner question, the site's worked examples, both attempts, the cause chain and the memory aid are unchanged. Programme decision 5 is withdrawn by the visual standard; the Revision 1 lines that say "no painted plates" are superseded.

- **Anchor and why:** a stack of plastic stacking chairs (80 cm, then +6 cm per chair). It makes the fixed difference physical, turns the classic off-by-one into a visible extra chair, explains why the graph is separate points with none at n = 0, and gives "not a term" a real meaning (no stack is exactly 150 cm). School-hall furniture; distinct from every root-decision context and from i01 to i07's likely contexts.
- **Simulations:** the chair stack with live "chairs n", "steps n − 1" and "height" readouts against a 2 m door line (with the crossed ghost chair); heights flying to the plot as points; the stack straddling 150 cm between 12 and 13 chairs.
- **Colour roles:** terms blue; positions grey ink; d, steps and gradient amber; guide and reference lines dashed ink; answer green; mistake red.
- **Plates:** no new plate briefed here; uses `ma12-stacking-chair-side-v1.png` (briefed in f01) and `ma12-food-tin-v1.png` and `ma12-display-base-v1.png` (briefed in f03).
- **Narration changes (not voiced):** scenes 1 to 4 and 6 (the chairs replace 3, 7, 11, …; the guess is 200 cm against 194 cm; "is 150 a term?" replaces "is 100 a term?") and scene 14 (the tin pyramid replaces the 50-bar staircase). Scenes 5 and 7 to 13 and 15 keep their Revision 1 text.
- **Counts:** 5,666 → 5,911 characters (both as the sum of scene strings; Revision 1 stated 5,680 with joining spaces); about 527 s (old 60 s notes hold) → about 540 s with holds (notes 45 s), 30 s under the cap.
- **Key notes:** five short one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on f01 Revision 2's chair frame; ends on the 15-row tin pyramid that f03 Revision 2 opens on (all three edited together).
- **Kit additions:** studio-size `TermPlot` (with `flyFrom` and zoom) and `StepCounter`; a scale animation and a ghost sprite for `SpriteStack`.

## Revision 3 (12 Nov 2026)

Brief 240 findings (Codex, 11 Nov) and fixes:

- **240-F02-INFINITE-TEST (should fix).** Scene 2 no longer tells students to find every difference of a sequence, which cannot be done by listing an infinite sequence. It now says: for a list of terms, check each difference matches; for a sequence given by a rule, show the difference is the same for every n. The chip and the reserve-trim note match.
- **Narration changed:** scenes 2 (678 to 747). Total 5,911 to 5,980 characters, 15 scene strings (build parser rules).
