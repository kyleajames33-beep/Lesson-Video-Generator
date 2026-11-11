# Maths A12 F03: Why do arithmetic partial-sum formulas work? Pairing first with last, two forms of Sₙ, counting terms, and solving for n (design)

Status: Revision 3 (12 Nov 2026): brief 238/240 findings resolved (root). Ready to voice. Previously: Revision 2 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing. Previously Revision 1 (2 Nov 2026). Not voiced (no `math-a12-f03/` folder and no `measured/lesson.json`), so narration is rewritten freely where the anchor needs it. Nothing recorded; human listening pending.

Narration 5,776 characters (Revision 3; was 5,742), 15 scene headings, about 531 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: third video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 40), after f02 (arithmetic sequences) and before f04 (arithmetic models). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5). No brief 151 pack and no route-inputs-3 entry exist for f03 (checked 2 Nov); pack work done here. Site lessons read (2 Nov, read-only): `sequences-and-series/lesson03.sa.html` (SHA256 `6ccf1ca41bea4fa028dec2301417d98bf39c6394ad06a0acebff03cfd413448b`; card 07 derivation and example, card 08 Type C, Problem 2, short answer 2) and `lesson02.sa.html` (SHA256 `3e39912f80d83dc05cdfe2b1de2979342fb059faeb181bcbc92ffc9a10bdab77`; the stadium hook 1 + 2 + … + 50 = 1275). Every number recalculated with SymPy. Course outline entry: `math-a12-f03` (two content points, site source lesson 3).

Owner rules applied: as f01 and f02 (2024 syllabus only, codenames and exact wording; coded maths visuals; no people; one reasoning stage at a time; task, formula and grouped givens separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; exact values, decimals only for an inequality's root, in grey; attempt cards give nothing away; opens on f02's handoff frame; f01's Sₙ and term count and f02's aₙ = a + (n − 1)d recalled, not re-taught).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Arithmetic sequences and series; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`, MathML in linear form:

- `ci69b15786`: "Develop the formula S_n = (n/2)(a + a_n) for the nth partial sum of an AP, and use the formula to solve problems"
- `ci3a79ab36`: "Develop the formula S_n = (n/2)[2a + (n − 1)d] for the nth partial sum of an AP, and use the formula to solve problems"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary (Revision 1 wording; Revision 2 anchor contexts and joins in Decisions override it):** starts from f02's last frame (a staircase of 50 bars of heights 1 to 50, "1 + 2 + 3 + … + 50 = ?", chips "Next: a shortcut for the total" and "?"); pairs first with last to find 1275 and shows the cause with a staircase and its upside-down copy forming a 50 by 51 rectangle; develops Sₙ = (n/2)(a + aₙ) by writing the sum forwards and backwards (`ci69b15786`) and Sₙ = (n/2)[2a + (n − 1)d] by substituting aₙ (`ci3a79ab36`); uses them for a sum of 20 terms, a sum between two limits with the term count, the least n for a threshold, and an equation with two valid roots. Stops at sums of APs without context. Not taught: contexts and models (f04; the handoff asks the savings question only); geometric sums (f06); finding aₙ from a formula for Sₙ (not a 2024 point; f01 open decision 4).

## Decisions

### Revision 2 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a supermarket pyramid of tins (painted plates, live).** A display stacked 1, 2, 3, …, 15 tins from the top down is the sum 1 + 2 + … + 15, and its pairing proof is physical: a second pyramid turned upside down fits against the first, every row then holds 16 tins, 15 rows hold 240, and the pyramid is half: 120. The tins make the cause visible tin by tin (a top row that gains one partner as the bottom row loses one), and the parallelogram is a real shape a shop could stack. Everyday shopping, not science and not money; distinct from every context in `checks/root-decisions-maths-redesign.md` and from i01 to i07's likely contexts (a shop's sales are about money over time; this is a display shape).
- **Site numbers.** The site's worked examples are unchanged: card 07 (S₂₀ of 3, 7, 11, … = 820), short answer 2 (50 to 200: 18,875), Problem 2 (c) (least n = 14) and the original two-root example. The site's classic 1 + 2 + … + 50 = 1275 (lesson 2 hook, card 07) is kept as the check row of the second form in scene 4; the hook and the pairing picture use the 15-row pyramid (1 + … + 15 = 120), which fits the frame at a readable tin size (author note k).
- **Idealising assumptions (author notes, not learner copy).** (i) The pyramid is drawn as a flat front view with rows offset by half a tin (a real display is three-dimensional; the front face is the sequence). (ii) The upside-down copy is a thought picture; the narration says "copy the pyramid". (k) Geometry: tin plate drawn at 96 px wide and 48 px tall (a 2:1 squat tin), 15 rows = 720 px tall, bottom row 1,440 px wide; the parallelogram is 16 tins wide per row.
- **Join with f02 (changed, both designs edited together).** Scene 1 opens on f02 Revision 2's final frame exactly (the 15-row tin pyramid on its display base, "1 + 2 + 3 + … + 15 = ?", "Next: a shortcut for the total" and "?").
- **Join with f04 (changed, both designs edited together).** Scene 14 now ends on the tree-planting strip (a painted hillside with tube seedlings over days 1 to 3, bars 50, 80, 110 with "+30" arcs, "?" over days 4 to 12, a dashed "1,200 in total?" line, "Next: more or less than 1,200?" and "?"). f04 Revision 2 opens on it.
- **Simulations (standard item 3).**
  1. **The tally** (scene 1): rows light one at a time while a live readout counts the tins so far; it slows down and a crossed mis-add shows why adding one by one is risky.
  2. **Flip and fit** (scene 2; the visual surprise): pair arcs, then the violet copy rotates and fits, and every row's readout reads 16.
  3. **Running totals against a target** (scenes 7, 8): columns build against the 500 line with live "n" and "Sₙ" readouts (scene 7); an n slider drives Sₙ up through 32, past a peak of 36 and back down to 32 (scene 8).
- **Colour roles (fixed for the whole video).** Terms (tin rows, bars, cards) blue; the upside-down partner copy violet; pair totals and sums teal; d and steps amber; the number of terms n grey ink; targets and reference lines dashed ink; answer green; mistake red, crossed slips only.
- **Large type (standard item 5).** See the type line under "Script and shots". The pyramid about 1,440 × 720 px; the parallelogram about 1,500 × 720 px.
- **Handwritten voice (standard item 6).** `HandTag`: "easy to slip", "+1", "−1", "row length a + aₙ, n rows", "average of first and last × number of terms", "know the last term: first form", "know d: second form", "20 steps: one too many", "top − bottom + 1 (from f01)", "every term positive: Sₙ only grows", "terms go negative: the sum comes back down", "S₁₀ = 200: not more than 200", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 35 to 60 s.** The tin pyramid and its tally (1); the flip-and-fit (2); forwards and backwards rows (3); the second form and the pyramid check (4); the g01 boards (5, 6); stacks against 500 (7); the rise-and-fall plot (8); the framed memory card (9); question cards with pictures (10 to 13); the planting strip (14); key notes (15).
- **Worked examples and attempts (g01 layout, standard item 7).** Scenes 5 to 8: task strip, givens card, equation strip, rows at 52 px, green framed answers; scene 5 carries a silent crossed slip (860, 20 steps) and scene 6 a crossed "n = 150?". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip. Question cards show the full question at 40 px plus a picture (A1: a ladder 5, 8, 11, … with an empty 30th slot; A2: an empty column beside a 200 line).
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Average of first and last, times how many. Arithmetic only." with the tin parallelogram icon. Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Visual surprise (standard item 9).** The upside-down copy of the pyramid fits exactly and every row reads 16 (scene 2); in scene 8 the running total climbs to 36 and comes back down to land on 32 a second time.
- **Narration (not voiced).** Scenes 1, 2, 4 and 14 are rewritten around the tins and the planting crew (scene 4 keeps the site's 1 to 50 check). Scenes 3 and 5 to 13 and 15 keep their Revision 1 text (cue marks on whole words in 6, 11).

### Revision 1 decisions (kept where not overridden above)

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
  - Start boundary (Revision 2): "Open on f02's 15-row tin pyramid with 1 + 2 + … + 15 = ?; pair the top row with the bottom row."
  - Stop boundary: "Develop and use both AP sum forms; term count; least n for a threshold; an equation with two valid roots. No contexts, GPs or aₙ from Sₙ."
  - Next handoff (Revision 2): "math-a12-f04: a planting crew, 50, 80, 110, … seedlings (+30 a day); after 12 days, more or less than 1,200?"
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
Handoff (Revision 2): math-a12-f04: the planting-crew question (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Revision 2 colour roles (fixed; see Decisions): terms (rows of tins, bars, ladder cards) **blue**; the upside-down partner copy and its tins **violet** (`MATH_GRADIENT`, tinted tins); pair totals, Sₙ and running totals **teal**; d and step labels **amber**; the number of terms n **grey ink**; targets and reference lines **dashed ink**; answer **green**; mistake **red**, crossed slips only. Type (standard item 5): current working line and live readout numbers 52 px; equation strip, task strip and givens 44 px; earlier lines 30 to 32 px and dimmed, never faint; row labels and axis numbers at least 28 px; hand tags (`HandTag`) at least 34 px; question cards 40 px; key-note bullets 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (the pyramid, ladders, plot or board) is solid from the stage's first frame; labels, readouts and answers arrive on their cues. Header strip "MATHEMATICS ADVANCED · SEQUENCES AND SERIES"; scene headings in the hand font, 44 px.

### 1. hook (how many tins?)
> Last video ended on this pyramid of tins. There's one tin on top, then two, then three, down to fifteen on the bottom row. How many tins is that? Adding fifteen numbers one at a time is slow, and it's easy to **slip**. There's a famous trick that does it in one line. But a trick isn't much use unless you know why it works. So why does it work, and does it work for every arithmetic sequence?

Visual: opens on f02's last frame exactly (f02 Revision 2 scene 14: the painted tin pyramid, `ma12-food-tin-v1.png` at 96 px wide in rows of 1 to 15, about 1,440 × 720 px, on the painted display base `ma12-display-base-v1.png`; grey row labels "1" to "15"; "1 + 2 + 3 + … + 15 = ?"; chips "Next: a shortcut for the total" and "?"). Heading writes on: "Why do arithmetic partial-sum formulas work?" as the chips fade. On "one at a time" the tally simulation runs: rows light blue from the top one after another while `LiveReadoutBoard` (52 px) counts "rows added" (grey ink) 1, 2, 3, … and "tins so far" (teal) 1, 3, 6, 10, 15, 21, …; it slows as the rows get longer. On "slip" a red slip "… 36, 45, 54?" flashes beside the tally (a mis-add at row 10, which should give 55) and is crossed (hand caption "easy to slip"); the tally stops at row 10 with a grey "…". On "in one line" a chip "a trick?". On the last two sentences the scene question chip moves to the top right: "Why does it work? Every AP?".

### 2. pairing
> Pair the top row with the bottom row. One plus fifteen is **sixteen**. Now pair the second row with the second last: two plus fourteen, also **sixteen**. Every pair gives the same total, because each time you move in one row, the top number goes up by one and the bottom number goes down by **one**. Here's the picture. Copy the pyramid, turn it upside down, and fit it against the first. Every row now holds sixteen tins, and there are fifteen rows, so the shape holds fifteen times sixteen. That's two hundred and forty. The pyramid is exactly half of **that**: one hundred and twenty tins.

Visual: camera continue on the pyramid (simulation 2, the flip-and-fit). On "Pair the top row with the bottom row" rows 1 and 15 glow and a teal arc joins their labels; on the first "sixteen" the label "1 + 15 = 16" (52 px). On "second last" rows 2 and 14 join; on the second "sixteen" "2 + 14 = 16". On "goes up by one" small amber arrows: beside row 3 "+1" (moving down) and beside row 13 "−1" (moving up); on "one" the label "3 + 13 = 16" appears without speech, then the arcs fade. On "Copy the pyramid" a violet-tinted copy of the whole pyramid lifts off, rotates 180° (about 1 s) and slides to fit against the blue pyramid's sloping side (about 1 s), so each blue row of k tins meets a violet row of 16 − k tins: a parallelogram of 15 rows. On "sixteen tins" a row readout "16" appears at the end of every row in turn (fast, top to bottom), one row (k = 4: 4 blue, 12 violet) ringed, and a bracket down the side "15 rows". Row: "15 × 16 = 240" (52 px). On "that" the violet copy slides back and fades, leaving the blue pyramid with a teal framed tag "half: 240 ÷ 2 = 120", and the hook line completes: "1 + 2 + … + 15 = 120" (green framed).

### 3. the general formula
> The same thing happens in any arithmetic sequence. Write the sum forwards, from the first term, a, up to the last term, a sub n. Then write the same sum backwards underneath. In each column, the top term goes up by d and the bottom term goes down by d, so every column adds to a plus a sub **n**. There are n columns, so two lots of S sub n is n times a plus a sub n. Halve it, and S sub n is n over two, times a plus a sub **n**. In words, it's the average of the first and last terms, times how many terms there are.

Visual: clear change (symbols). Left, solid from the first frame: a small copy of the scene 2 parallelogram (about 520 px wide), relabelled "row length a + aₙ, n rows" (grey ink). Right: two `TermLadder` rows (44 px cards). Top (forwards, blue): "a", "a + d", "a + 2d", "…", "aₙ". On "backwards" the bottom row writes in violet: "aₙ", "aₙ − d", "aₙ − 2d", "…", "a". On "goes up by d" amber "+d" arcs along the top row and "−d" arcs along the bottom row, one column at a time; on the first "n" a teal "a + aₙ" label drops under each column, all five the same. Right column rows (52 px): "2Sₙ = n(a + aₙ)"; on the second "n" the framed form: "Sₙ = (n/2)(a + aₙ)". On the last sentence a hand tag under the frame: "average of first and last × number of terms".

### 4. the second form
> Often you don't know the last term. But you do know it's a, plus n minus one lots of d. Swap that in for a sub n, and the bracket becomes two a, plus n minus one lots of d. So S sub n is also n over two, times two a plus n minus one lots of **d**. It's the same sum, written with a, d and n. Test it on the pyramid. With a and d both one, and n equal to fifteen, it's fifteen over two, times two plus fourteen. That's seven and a half times sixteen, which is one hundred and twenty **again**. Use the first form when you know the last term, and the second when you know the common difference.

Visual: camera continue. The framed first form stays bright. Row: "aₙ = a + (n − 1)d" (grey tag "earlier video"); on "Swap that in" it slides into the bracket: "(n/2)(a + a + (n − 1)d)"; then "(n/2)[2a + (n − 1)d]". On "d" the second form is framed beside the first. On "Test it on the pyramid" the pyramid returns at the left (about 600 px wide), a givens chip "a = 1, d = 1, n = 15" and the row "(15/2)(2 + 14) = 7.5 × 16"; on "again" "= 120" with a tick and the pyramid's base glows. A grey side row (32 px) checks the site's classic: "1 + 2 + … + 50: (50/2)(2 + 49) = 25 × 51 = 1275". On the last sentence two hand tags under the frames: "know the last term: first form" and "know d: second form".

### 5. worked example: twenty terms
> Find the sum of the first twenty terms of three, seven, eleven, and so on. Here a is three, d is four, and n is twenty. We don't know the last term, so use the second form. That's ten, times six plus nineteen fours. Nineteen fours is seventy-six, so it's ten times eighty-two, which is eight hundred and **twenty**. Check with the first form. The twentieth term is three plus seventy-six, which is seventy-nine, and ten times three plus seventy-nine is also eight hundred and twenty.

Visual: clear change to the g01 layout. Task strip: "Find the sum of the first 20 terms of 3, 7, 11, …" (site card 07). Givens card: "a = 3 (blue), d = 4 (amber), n = 20 (grey ink)". Equation strip: the second form. On "second form" the strip glows. Rows at 52 px, one at a time: "S₂₀ = (20/2)[2 × 3 + 19 × 4]"; "= 10(6 + 76)"; on "twenty" green framed "S₂₀ = 820". Grey check rows: "a₂₀ = 3 + 19 × 4 = 79"; "S₂₀ = 10(3 + 79) = 820" with a tick. A red slip "10(6 + 20 × 4) = 860" writes small at the right and is crossed (hand caption "20 steps: one too many"), silent.

### 6. worked example: fifty to two hundred
> Now, the sum of all the whole numbers from fifty to two hundred. It's arithmetic, with d equal to one. The first term is fifty, and the last is two hundred, so the first form fits. But how many terms are there? Not one hundred and fifty. It's two hundred minus fifty, plus one, which is one hundred and **fifty-one**. So the sum is one hundred and fifty-one over two, times fifty plus two hundred. That's one hundred and fifty-one, times one hundred and twenty-five, which is eighteen thousand, eight hundred and **seventy-five**.

Visual: clear change (new case, g01 layout). Task strip: "Find the sum of all the whole numbers from 50 to 200." (site short answer 2). Givens card: "a = 50, aₙ = 200, d = 1". A short ladder "50, 51, 52, …, 200" (44 px). On "how many terms" a red slip "n = 150?" writes; on "fifty-one" it is crossed and replaced by "n = 200 − 50 + 1 = 151" (grey ink) with the hand tag "top − bottom + 1 (from f01)". Rows at 52 px: "S = (151/2)(50 + 200)"; "= 151 × 125"; on "seventy-five" green framed "18 875".

### 7. when n is the unknown
> Sometimes n is the unknown. How many terms of four, plus nine, plus fourteen, and so on, are needed for the sum to first go over five hundred? Here a is four and d is five, so S sub n is n over two, times five n plus three. Set that above five hundred, and you get a quadratic inequality. Its positive root is about thirteen point eight **five**. But n must be a whole number, so the first one that works is fourteen. Check both sides. Thirteen terms make four hundred and forty-two, which isn't enough, and fourteen terms make five hundred and **eleven**. Because every term is positive, the sum only grows, so fourteen is the first.

Visual: clear change (new case, g01 layout). Task strip: "How many terms of 4 + 9 + 14 + … are needed for the sum to first exceed 500?" (site Problem 2 (c), reworded). Givens card: "a = 4, d = 5". Rows at 52 px: "Sₙ = (n/2)[8 + 5(n − 1)] = (n/2)(5n + 3)"; "(n/2)(5n + 3) > 500"; "5n² + 3n − 1000 > 0". On "five" "positive root n = (−3 + √20009)/10" with a grey "≈ 13.85". The running-total simulation (simulation 3) at the left: `PartialSumStack` columns S₁ to S₁₄ build quickly (unit 1.2 px per unit, teal) against a dashed ink line at 500, with `LiveReadoutBoard` "n" (grey ink) and "Sₙ" (teal) at 52 px; it pauses at n = 13 ("442", below the line). On "eleven" column 14 builds past the line ("511"), ringed. On the last sentence a hand tag "every term positive: Sₙ only grows" and green framed "14 terms".

### 8. a sum with two answers
> Here's a surprise. How many terms of eleven, plus nine, plus seven, and so on, add up to thirty-two? Here a is eleven and d is minus two, so S sub n simplifies to n times twelve minus n. Set that equal to thirty-two, and the quadratic has two roots: four and **eight**. Both are whole numbers, and both work. Four terms make thirty-two. The next four terms are three, one, minus one and minus three, and they add to zero, so eight terms make thirty-two **again**. When the terms go negative, the sum can come back down, so check every root.

Visual: clear change (new case, g01 layout). Task strip: "How many terms of 11 + 9 + 7 + … add up to 32?" (original). Givens card: "a = 11, d = −2". Rows at 52 px: "Sₙ = (n/2)[22 − 2(n − 1)] = n(12 − n)"; "n(12 − n) = 32"; "n² − 12n + 32 = 0"; on "eight" "(n − 4)(n − 8) = 0, so n = 4 or n = 8". The running-total simulation at the left: a `TermPlot` of Sₙ (teal points) with a dashed ink line y = 32; an n slider runs 1 → 9 while the readouts "aₙ" (blue) and "Sₙ" (teal) update and points 11, 20, 27, 32 appear (n = 4 meets the line). As the slider runs on, the terms 3, 1, −1, −3 light on a `TermLadder` strip (the negative cards outlined), the points rise to 35, 36 and fall back to 35, 32; on "again" the n = 8 point lands on the line and both crossing points ring green; a bracket "3 + 1 + (−1) + (−3) = 0". The ninth point (27) shows below the line. Hand tag "terms go negative: the sum comes back down"; chip "check every root".

### 9. memory aid
> Here's the short version. An arithmetic sum is the average of the first and last terms, times how many terms there are. It's guaranteed for arithmetic sequences, because their terms always pair up evenly. Other lists might not. For one, plus two, plus four, it gives seven and a half, but the real sum is **seven**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 620 px, double ink frame, hand-font heading "Memory aid"). Inside: a small tin-pyramid parallelogram icon (blue and violet tins, about 360 px) at the left; the hand-font line at 60 px: "Average of first and last, times how many." Under it, same size: "Arithmetic only." On "always pair up evenly" a small row "1 + 2 + 4": the pair totals 1 + 4 = 5 and 2 + 2 = 4 shown unequal. On "seven" a red slip "(1 + 4)/2 × 3 = 7.5" writes and is crossed beside "1 + 2 + 4 = 7" (green). Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Find the sum of the first thirty terms of the arithmetic series five, plus eight, plus eleven, and so on. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find the sum of the first 30 terms of the arithmetic series 5 + 8 + 11 + …." The full question stays on screen. Picture slot: a `TermLadder` 5, 8, 11, "…", then an empty slot labelled "n = 30" (no steps, no formula). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 1 (brief)
> Here a is five, d is three and n is thirty. The thirtieth term is five plus twenty-nine threes, which is **ninety-two**. So the sum is fifteen, times five plus ninety-two, which is one thousand four hundred and **fifty-five**. Fifteen hundred is wrong. It uses thirty steps of three, instead of **twenty-nine**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "a = 5", "d = 3", "n = 30" ("5 + 8 + 11" and "30 terms" underlined as used). Row at 52 px "a₃₀ = 5 + 29 × 3 = 92" (on "ninety-two") with an amber bracket "29 steps". Row "S₃₀ = (30/2)(5 + 92) = 15 × 97"; on "fifty-five" green framed "1455". On "twenty-nine" a red slip "15(10 + 30 × 3) = 1500" writes and is crossed (hand caption "30 steps: one too many"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. How many terms of two, plus six, plus ten, and so on, are needed for the sum to first be more than two hundred? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "How many terms of the arithmetic series 2 + 6 + 10 + … are needed for the sum to first be more than 200?" The full question stays on screen. Picture slot: an empty stack column outline beside a dashed ink line labelled "200" (no columns built). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 2 (brief)
> Here a is two and d is four, so S sub n simplifies to two n **squared**. Two n squared is more than two hundred when n squared is more than a hundred, so n is more than **ten**. Ten terms make exactly two hundred, which isn't more. So the answer is eleven terms. Ten is wrong. It reaches two hundred, but doesn't go **over**.

Visual: the card shrinks to the top. `GivensStrip`: "a = 2", "d = 4", "more than 200" ("2 + 6 + 10" and "more than 200" underlined as used). Row at 52 px "Sₙ = (n/2)[4 + 4(n − 1)] = 2n²" (on "squared"). Row "2n² > 200, n² > 100, n > 10" (on "ten"). Two teal stack columns beside the dashed ink line at 200: "S₁₀ = 200" (touching the line) and "S₁₁ = 242" (above); green framed "11 terms". On "over" a red slip "10 terms" writes and is crossed (hand caption "S₁₀ = 200: not more than 200"). Hold about 1 s.

### 14. handoff
> So pairing explains both sum formulas. Next, real situations. A volunteer crew plants fifty seedlings on its first day, eighty on the second and a hundred and ten on the third, thirty more each day. After twelve days, have they planted more or less than twelve hundred **seedlings**?

Visual: the two framed forms show small at the top (30 px), then fade on "Next". Board clears to the planting strip: the painted hillside strip `ma12-hillside-strip-v1.png` across the lower half (tiled at native scale, about 1,800 px), with 12 coded day tabs "day 1" to "day 12" along its lower edge; the painted tube seedling `ma12-tube-seedling-v1.png` (about 44 px tall) planted on the slope below the first three tabs only (one seedling per 10 planted: 5, 8 and 11 seedlings), with blue day bars above them labelled "50", "80", "110" and amber "+30" arcs between them; "?" over each of the other nine tabs. On "seedlings" a dashed ink reference line labelled "1,200 in total?" across a small empty teal total column at the right, a chip "Next: more or less than 1,200?" and a "?" chip. No answer, no formula. Hold about 2 s. This is f04's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Forwards + backwards: each column is a + aₙ.
- Sₙ = (n/2)(a + aₙ): last term known.
- Sₙ = (n/2)[2a + (n − 1)d]: d known.
- Terms from first to last (d = 1): last − first + 1.
- Solving for n: take whole n, check both sides.

Memory aid (framed card, right half of the notes screen, as in scene 9): *Average of first and last, times how many. Arithmetic only.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (1 s) to scene 14's frame exactly (the hillside strip with seedlings and bars over days 1 to 3, "?" tabs, the 1,200 line, "Next: more or less than 1,200?" and "?"). This is the final frame and f04's opening frame.

## Teaching checks

- **Does it explain causes?** Why every pair has the same total: one term rises by d as the other falls by d (2, 3). Why the sum is half the rectangle: two copies fill it exactly (2). Why the second form: it replaces aₙ (4). Why 151 terms: last − first + 1 (6). Why round up to 14 and why it is the first: whole n, and positive terms make Sₙ increase (7). Why two answers can both be right: negative terms bring the sum down again (8). Why the average rule fails for 1 + 2 + 4: its pairs do not have equal totals (9).
- **Misconceptions addressed:** n steps to the last term (5; A1 crossed); 150 terms from 50 to 200 (6); stopping at the boundary (7; A2 crossed); rejecting a valid second root (8); the average rule for any sequence (9).
- **One idea at a time:** one pairing per sentence (2); one column label at a time (3); one case per scene from 5 on; algebra rows replace each other with only the needed result kept.
- **Video makes it easier:** the student sees equal pair arcs, then the upside-down copy of the tin pyramid fit so every row reads 16 (2), the same column totals in symbols (3), the stacks either side of 500 (7), and the Sₙ points rise and come back down through 32 (8). Each motion is the evidence for the next sentence.
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
| Hook (Revision 2) | tin pyramid 1 + 2 + … + 15; tally 1, 3, 6, 10, 15, 21, 28, 36, 45; crossed mis-add 54 (for 55) | 1 |
| Pairing (Revision 2) | 1 + 15 = 2 + 14 = 3 + 13 = 16; 15 × 16 = 240; half 120 | 2 |
| Forms | Sₙ = (n/2)(a + aₙ); Sₙ = (n/2)[2a + (n − 1)d]; tests (15/2)(2 + 14) = 120 and (site) 25 × (2 + 49) = 1275 | 3, 4 |
| Card 07 (site) | 3, 7, 11: S₂₀ = 10(6 + 76) = 820; a₂₀ = 79; 10(3 + 79) = 820 | 5 |
| SA 2 (site) | 50 to 200: n = 151; (151/2)(250) = 151 × 125 = 18,875 | 6 |
| Problem 2 (c) (site) | 4, 9, 14: (n/2)(5n + 3) > 500; root (−3 + √20009)/10 ≈ 13.85; S₁₃ = 442, S₁₄ = 511 | 7 |
| Two roots | 11, 9, 7, …: n(12 − n) = 32; n = 4, 8; 3 + 1 − 1 − 3 = 0; Sₙ: 11, 20, 27, 32, 35, 36, 35, 32, 27 | 8 |
| Memory aid | 1 + 2 + 4 = 7; (1 + 4)/2 × 3 = 7.5 | 9 |
| A1 | a₃₀ = 92; S₃₀ = 1455; crossed 1500 | 10, 11 |
| A2 | Sₙ = 2n²; S₁₀ = 200, S₁₁ = 242; 11 terms; crossed 10 | 12, 13 |
| Handoff (Revision 2: planting crew) | 50, 80, 110 seedlings; +30; 1,200 in total?; sprites 5, 8, 11 (one per 10) | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run); Codex to re-check.

- Σ_{k=1}^{15} k = 120; 15 × 16 = 240; 7.5 × 16 = 120 (Revision 2, checked with Python); Σ_{k=1}^{50} k = 1275; 25 × 51 = 1275; scene 5 slip 10(6 + 20 × 4) = 860.
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

Revision 2 (7 Nov 2026), counted by script with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,742 characters**, 15 scene headings (Revision 1, recounted the same way: 5,719). Characters per scene (in order): 389, 576, 510, 584, 479, 522, 626, 532, 277, 138, 299, 143, 313, 279, 75.

At 13.3 characters per second the speech is about 432 s. Holds and settling: two 10 s countdowns 20 s; short holds (memory aid 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the tally (1), the flip and fit (2), the column builds (7) and the slider (8) 25 s; the key-notes scene 45 s (about 96 s in all). Total **about 528 s (8 min 48 s)**, inside the 5,500 to 7,000 character band and 42 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 4's last sentence (keep the two hand tags); scene 5's check sentence "Check with the first form. ..." (keep the grey check rows). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12f03` (route math-a12-f03). Suggested explainer folder `src/explainer/lessons/math-a12-f03` and build folder `docs/production/claude-pm/lessons/m-a12f03` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, pairing, general-formula, second-form, twenty-terms, fifty-to-two-hundred, unknown-n, two-answers, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f02's last frame continues into scene 1 (camera continue, same staircase); 1 to 2 camera continue; 2 to 3 clear change (symbols); 3 to 4 camera continue (the box stays); 4 to 5 clear change (new case); 5 to 6, 6 to 7, 7 to 8 clear changes; 8 to 9 camera pull back to the aid; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes scene, 45 s in all (1,350 frames in `config.ts`). Review evidence paths: `learning_review` = `checks/m-a12f03-learning-review.md`, `science_check` = `checks/m-a12f03-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `biology/m8-energy-drink-can-plain-v1.png` (a tall drink can with a blue and silver body; too tall and narrow for a 15-row pyramid at a readable size, and it reads as a drink, not a grocery display), `chemistry/m7-aerosol-spray-can-v1.png` (an aerosol; wrong object). No squat food tin, display base, hillside strip or tube seedling exists. `biology/m7-banksia-seedling-healthy-v1.png` (a bare-root seedling with its roots) was inspected for scene 14 and not used: planting crews put out tube stock in tree guards, not bare roots.

Need (painted, new; see the Codex asset brief): `ma12-food-tin-v1.png`, `ma12-display-base-v1.png` (both also f02's final frame); for scene 14, `ma12-hillside-strip-v1.png` and `ma12-tube-seedling-v1.png` (briefed in `math-a12-f04.md`, their main use).

Coded (studio kit): row labels, pair arcs, the flip-and-fit motion, readouts, ladders, stacks, the plot and slider, givens cards, answer frames, slips, question cards and their pictures, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`; `TermLadder`, `PartialSumStack`, `SpriteStack` (f01) and `TermPlot`, `StepCounter` (f02).

Additions the build needs:
1. **`SpriteStack` pyramid mode** (small): rows of 1 to n sprites centred with a half-sprite offset, row labels, a per-row glow, and a tint option (the violet copy).
2. **`PairingRectangle` on sprites** (the Revision 1 part, rebuilt on `SpriteStack`): copy the pyramid, rotate it 180° as a group, slide it against the original's sloping side, then show a readout at the end of each row; also the Revision 1 bar mode for the memory card icon.

## Codex asset brief (Maths A12 F03, a supermarket pyramid of tins)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-f03.md`. Paint after the learning review and maths check of this design pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style (match `biology/b4-car-yellow-v1.png` and `physics/phys-y11-lift-car-v1.png` in palette, line weight and finish); at least 8 per cent clear margin unless a plate is stated to be a tile; no text, labels, letters, numbers, logos, brand names, barcodes, price tags, people, hands, faces, sky, glow or ground shadow beyond the plate's own ground patch. Never stretch to fit; keep the native aspect ratio.

1. `ma12-food-tin-v1.png` (800 × 400 px plate, the tin about 2:1 wide to tall): one squat food tin (like a tin of tuna or pineapple rings) seen straight on from the side, with a ribbed silver rim at top and bottom and a **plain paper label in a single warm colour with a simple painted band, no text, picture or logo**. Drawn so that copies placed side by side with no gap, and rows stacked with a half-tin offset, look like a neat display (the top rim of one tin meets the bottom rim of the tin above). Codex reports, in file pixels, the tin's bounding box [x0, y0, x1, y1] (the build places copies by it) and supplies a 3-row stacking check image.
2. `ma12-display-base-v1.png` (2000 × 300 px): a low supermarket display plinth seen straight on: a pale timber top board on a short dark base, about 1,700 px of usable flat top; **not a tile**. No signs, shelf labels or price strips. Codex reports the y-coordinate of the flat top and its x-range in file pixels.

Report inspection on the paper background (`#f6f1e7`) at 96 px wide for plate 1 (and a 15-row pyramid check at that size) and 1,500 px wide for plate 2, plus the alpha checks and anchor points. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-f03-provenance.json`.

### Revision 1 coded part specification (kept; scene numbers as in Revision 1)

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

How many tins are in a supermarket pyramid with rows of 1 to 15? Pair the top row with the bottom row and every pair makes 16, because one row grows as the other shrinks. Turn a copy of the pyramid upside down, fit it against the first, and every row holds 16 tins: the pyramid is half of 15 × 16, which is 120. The same pairing proves Sₙ = n/2 (a + aₙ) for any arithmetic sequence, and substituting the last term gives Sₙ = n/2 [2a + (n − 1)d]. Then use both: the first 20 terms of 3, 7, 11, …, every whole number from 50 to 200, the least n for a sum over 500, and a surprise sum with two correct answers. A memory aid: average of first and last, times how many (arithmetic only). Two exam-style questions at the end.

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

## Revision 2 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, the two syllabus points, the learner question, the site's worked examples (and the 1 to 50 check), both attempts, the cause chain and the memory aid are unchanged. Programme decision 5 is withdrawn by the visual standard; the Revision 1 lines that say "no painted plates" are superseded.

- **Anchor and why:** a supermarket pyramid of tins, rows 1 to 15. The pairing proof becomes physical: an upside-down copy fits against the pyramid and every row holds 16 tins, so the pyramid is half of 15 × 16. Everyday shopping; distinct from every root-decision context and from i01 to i07's likely contexts.
- **Simulations:** the tally with a live "tins so far" readout and a crossed mis-add; the flip-and-fit with per-row readouts of 16; running-total columns against 500 with live n and Sₙ; an n slider taking Sₙ up to 36 and back down to 32.
- **Colour roles:** terms blue; the upside-down copy violet; pair totals and sums teal; d and steps amber; n grey ink; targets dashed ink; answer green; mistake red.
- **Plates:** new `ma12-food-tin-v1.png` and `ma12-display-base-v1.png` (also f02's final frame). Scene 14 uses `ma12-hillside-strip-v1.png` and `ma12-tube-seedling-v1.png` (briefed in f04). No reused plates.
- **Narration changes (not voiced):** scenes 1, 2 and 4 (the tin pyramid replaces the 50-bar staircase; the site's 1 + … + 50 = 1275 stays as the check of the second form) and scene 14 (the planting crew replaces the savings plan). Scenes 3, 5 to 13 and 15 keep their Revision 1 text.
- **Counts:** 5,719 → 5,742 characters (both as the sum of scene strings; Revision 1 stated 5,733 with joining spaces); about 531 s (old 60 s notes hold) → about 528 s with holds (notes 45 s), 42 s under the cap.
- **Key notes:** five short one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on f02 Revision 2's tin pyramid; ends on the planting strip that f04 Revision 2 opens on (edited together).
- **Kit additions:** a pyramid mode with tint for `SpriteStack`; `PairingRectangle` rebuilt on sprites (flip, fit, per-row readouts).

## Revision 3 (12 Nov 2026)

Brief 240 findings (Codex, 11 Nov) and fixes:

- **240-F03-PAIRING-CLAIM (should fix).** Scene 9 no longer says only arithmetic sequences pair up evenly (1, 4, 2, 5 also pairs evenly). It now says the rule is guaranteed for arithmetic sequences, because their terms always pair up evenly, and other lists might not; the 1 + 2 + 4 counterexample stays. The card's "Arithmetic only." stays as the reliable method instruction, as the review allows.
- **Narration changed:** scenes 9 (277 to 311). Total 5,742 to 5,776 characters, 15 scene strings (build parser rules).
