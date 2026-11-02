# Maths A12 F01: What are sequences, partial sums and summation notation? Order and position, finite and infinite, running totals, series and reading sigma from start to stop (design)

Status: Revision 1 (2 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit and the maths kit (briefs 129, 131, 133, 135 and 143) plus the new sequence parts specified under "Codex asset brief" (`TermLadder`, `PartialSumStack`, `SigmaBuilder`). Nothing recorded; human listening pending.

Narration 5,637 characters, 16 scenes, about 524 s (8.7 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: first video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 38), after i14 (motion: x, v and a in both directions) and before f02 (arithmetic sequences). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5). No brief 151 pack and no route-inputs-3 entry exist for f01 to f04 (checked 2 Nov), so the pack work is done here: site lesson read (2 Nov, read-only) `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/sequences-and-series/lesson02.sa.html`, SHA256 `3e39912f80d83dc05cdfe2b1de2979342fb059faeb181bcbc92ffc9a10bdab77`; every number recalculated with SymPy (see "Numbers to verify"); draft route entry in Decisions. Course outline entry: `math-a12-f01` in `docs/production/programme/maths-a12-course-outline.json` (main learner question, six content points, site source lesson 2).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" label anywhere; maths visuals coded, never painted; no people, hands or figures; one reasoning stage at a time with only the needed earlier results kept; worked examples as separate task, rule and values; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule; exact values only (every value here is a whole number); attempt cards give nothing away; the opening frame is i14's final frame (i14 scene 14, read 2 Nov).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Sequences and series; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`, with the MathML written in linear form:

- `ci0835b75e`: "Define a sequence as an ordered list of objects"
- `cie99a9951`: "Use the notation a_n, where n is a positive integer, to represent the nth term of a sequence"
- `ci942a2e23`: "Distinguish between a finite sequence a_1, a_2, …, a_m that terminates at its mth term, for some whole number m ≥ 1, and an infinite sequence a_1, a_2, … that never terminates"
- `ci6cbe66dc`: "Define the nth partial sum S_n of a sequence a_1, a_2, … to be the sum of the first n terms of the sequence: S_n = a_1 + a_2 + … + a_n, for all whole numbers n ≥ 1"
- `ci042665ba`: "Define a series formally as the sum of the terms of an infinite sequence and use the notation a_1 + a_2 + a_3 + … for the series corresponding to the sequence a_1, a_2, a_3 …"
- `ci291b45f0`: "Use summation notation to represent the sum of terms a_i to a_j of a sequence where j > i, ∑_{k=i}^{j} a_k = a_i + a_{i+1} + a_{i+2} + … + a_{j−1} + a_j" (the crosswalk's linear text writes the limits as "∑_{k=i,j}"; the official MathML has lower limit k = i and upper limit j)

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary:** starts from i14's last frame (i14 scene 14: the positions of its Problem 1 particle, x = t³ − 2t², at t = 1, 2, 3, 4 listed as −1, 0, 9, 32 with the chip "Next: sequences"; read 2 Nov); names that list a sequence without assuming the viewer has just watched i14, then defines a sequence as an ordered list (`ci0835b75e`), a_n as the term in position n (`cie99a9951`), finite and infinite sequences (`ci942a2e23`), the partial sum S_n as a running total that is itself a sequence, with S_n − S_{n−1} = a_n read off the stacks (`ci6cbe66dc`), a series as the sum of all terms of an infinite sequence (`ci042665ba`), and sigma notation with its start, stop, counter and rule, including a start other than 1 and the term count j − i + 1 (`ci291b45f0`). Stops at reading, evaluating and writing finite sigma sums of given rules. Not taught: arithmetic and geometric sequences and their formulas (f02 onwards; the handoff shows +4 steps as a question only); convergence and limiting sums (f07; scene 5 says only that some series settle on a number "in a later video"); recurrence relations and finding a_n from a formula for S_n (not 2024 content points; S_5 − S_4 = a_5 is shown once on the stacks as a reading of the definition, with no algebraic S_n formula); finance (later strand).

## Decisions

- **Learner question kept (outline).** "What are sequences, partial sums and summation notation?" The answer, built in order: a list read in steps has an order (hook); each term has a position n and a value a_n, and reversing a list changes which value sits in each position, so order matters (2); a rule can produce a_n from n, and a sequence either stops at a last term a_m or never stops (3); S_n stacks the first n terms, and the stacks form a sequence of their own (4); a series is the sum of all the terms of an infinite sequence, which the partial sums approach step by step (5); sigma notation writes a sum in one line: start, stop, counter and rule (6, 7); writing a known sum in sigma reverses the reading (8).
- **The hook (a bridge, not a surprise; root note 2 Nov).** i14 ends on its particle's positions at t = 1, 2, 3, 4, listed as −1, 0, 9, 32 with "Next: sequences". Scene 1 opens on that frame, but its first sentence presents the list on its own terms ("Here's a list of numbers ... the positions of a moving particle"), so it stays true wherever sequences sit in the playlist. The narration then says why the course needs steps (the outline's next strand is finance, where money changes once a period) and asks the scene question. The motion context is not reused after scene 1 (one context per idea); its differences (1, 9, 23) are not mentioned.
- **Notation (syllabus form, site alias in grey).** Screen and narration use a_n, as `cie99a9951` requires. The site writes T_n throughout; a grey tag in scene 2 says "also written Tₙ (website and many past papers)". Key note 1 carries the same alias. See open decision 2.
- **Order and position (`ci0835b75e`, `cie99a9951`; site card 05 "Why the ordering matters").** The site's own pair 1, 3, 5, 7 and 7, 5, 3, 1. The `TermLadder` keeps its position labels n = 1 to 4 fixed while the value cards travel to their reversed slots, and a readout "a₁ = 1" becomes "a₁ = 7". This is the cause of "order matters": the positions stay, the values move. a₃ = 5 is read first, with "position" and "value" tagged separately (the classic confusion of n and a_n).
- **Finite and infinite (`ci942a2e23`; site card 05 and key terms, a_n = 2n).** 2, 4, 6, 8, 10 with an end cap after the fifth card (tag "m = 5: last term a₅"); then the cap lifts away and the ladder runs off the right edge with "…". The narration gives the syllabus words "ends at some last term" and "never stops".
- **Partial sums (`ci6cbe66dc`; site card 06, a_n = 2n, S_1 to S_5 = 2, 6, 12, 20, 30).** The `PartialSumStack` drops each term's block onto a running column; each new column is the previous column plus one block. The partial sums then line up as their own `TermLadder` (2, 6, 12, 20, 30). The site's identity is shown only as a reading of the stacks: S₅ − S₄ = 30 − 20 = 10 = a₅ (the top block glows). The site's closed form S_n = n(n + 1) is not shown (it needs the f03 formula, and it is not needed here).
- **Series (`ci042665ba`).** Formal syllabus meaning: the sum of all the terms of an infinite sequence, written a₁ + a₂ + a₃ + …. The stacks of scene 4 keep growing past the top of the frame for 2 + 4 + 6 + …, so this series "has no total". Convergence is deferred in one sentence ("Some series do settle on a number, and we'll see which ones in a later video"). Scope sentence, spoken: "S sub n means the first n terms. A series means all of them." The site also says "finite series" for S_N (card 07); many textbooks do too. This video keeps the syllabus's formal meaning and does not use "finite series" in learner copy (author note c; open decision 3).
- **Sigma notation (`ci291b45f0`; site card 08 examples, unchanged).** (a) ∑_{k=1}^{4} (2k − 1) = 1 + 3 + 5 + 7 = 16: the `SigmaBuilder` lights its four parts in turn (the symbol "add", the start below, the stop on top, the rule on the right), then a counter dial steps k = 1, 2, 3, 4 and each value feeds the rule and drops a term card into the sum row. (b) ∑_{k=3}^{7} k² = 9 + 16 + 25 + 36 + 49 = 135: the start is not 1; the term count is 7 − 3 + 1 = 5 (the fence-post cause: 7 − 3 counts the steps between the first and last k, so add one for the first). The dummy counter: replacing k by j changes nothing (site card 08 "Key insight").
- **Worked example (site Problem 1, numbers unchanged).** a_n = n² − n + 1: first five terms 1, 3, 7, 13, 21; S₅ = 45; S₅ = ∑_{k=1}^{5} (k² − k + 1) = 45. It runs the sigma reading in reverse: the rule becomes the general term with k for n, start 1, stop 5.
- **From words to sigma (site card 08 "Converting English to sigma", unchanged).** "The sum of the first ten odd numbers" → ∑_{k=1}^{10} (2k − 1) = 1 + 3 + … + 19 = 100. The rule's cause is shown (each odd number is one less than the even number 2k), then the start and stop come from the words "first ten", and the last term 19 checks the stop. This is the "use summation notation to represent" half of `ci291b45f0`, where scenes 6 and 7 are the reading half. The total 100 is stated, not derived (no sum formula yet; f03 has the formulas).
- **Attempts (both original).** (A1) "Evaluate ∑_{k=2}^{5} (4k − 3)." Terms 5, 9, 13, 17; sum 44. Tests a start other than 1 and the term count. Crossed: "28" (1 + 5 + 9 + 13: starts at k = 1 and stops one term early). (A2) "A sequence has aₙ = 10 − 2n. Find S₄, and write S₄ in sigma notation." Terms 8, 6, 4, 2; S₄ = 20 = ∑_{k=1}^{4} (10 − 2k). Tests a term against a partial sum. Crossed: "2" (that is a₄). The site's Problem 2 (∑_{k=2}^{5} (3k − 1) = 38) and short answer 2 (∑_{k=2}^{6} (k² − 1) = 85) are not used as attempts: students may have met them on the site.
- **Mistake scene:** none separate. "n and a_n are the same thing" (2); "order doesn't matter" (2); "S_n is the nth term" (4; A2 crossed); "a series means the first n terms" (5); "the sum from 3 to 7 has 7 terms" or "4 terms" (7; memory aid; A1 crossed); "the counter letter changes the value" (7).
- **Memory aid (original).** "Bottom: start. Top: stop. Count: top − bottom + 1." See "Memory aid check".
- **Handoff (to f02, "How does a fixed difference determine an arithmetic sequence?").** Scene 15 sums up in one sentence, then shows the site's lesson 3 sequence 3, 7, 11, 15, 19 on a `TermLadder` with amber "+4" arcs drawing between neighbours, a chip "Next: the same step every time" and a "?" chip. No formula and no "arithmetic" word. Scene 16 returns to this frame silently after the notes; it is f02's opening frame.
- **Site sources used:** lesson 2 cards 05 (1, 3, 5, 7 reversed; a_n = 2n; finite and infinite), 06 (S_1 to S_5 for 2n; S_n − S_{n−1}), 07 (series), 08 (∑ (2k − 1) to 4 = 16; ∑ k² from 3 to 7 = 135; dummy index) and Problem 1 (n² − n + 1). Not used: recurrence relations and Problem 3 (S_n = 4n² − n), which are not 2024 content points (see author note d); the stadium hook (f03 uses 1 + 2 + … + 50 instead); convergence examples (f07).
- **Site errors and notes (new; for root to log, not yet in `site-corrections-maths-a12.md`, which has no sequences items):** (1) Lesson 2 card 05 "Example, identify each type" prints visible self-correction as learner copy: "Which has T_5 = 32? Sequence B: T_5 = 2^{5−1} = 2^4 = 16, no. Check Sequence B: T_6 = 2^5 = 32, so T_6 = 32 in B. Actually …". Correction: ask "Which term of B equals 32?" and answer once: 2^{n−1} = 32 = 2^5, so n = 6. (2) Card 02 note "T_1 = S_1, always … since S_0 may be undefined or zero" gives a muddled reason. The real reason: the subtraction S_n − S_{n−1} needs an earlier partial sum, and a formula for S_n need not give 0 at n = 0, so the first term must be checked against S_1. (3) Notation: the site writes T_n and l (last term); the 2024 syllabus writes a_n. Not an error; flagged so the site can add "also written a_n". (4) Card 07 and key terms call S_N a "finite series"; the 2024 point `ci042665ba` defines a series formally as the sum of an infinite sequence's terms. Not an error in common usage; flagged as a wording mismatch. (5) Index page lists "Geometric Sequences in Finance" (lesson01, lesson id `maths-adv-y12-m7-l05`, title tag "Module 7") as Lesson 1 of the sequences topic, before sequences are defined; prerequisite order. (6) Lesson 3's footer link reads "Lesson 3 · Geometric Sequences, Series and Limiting Sums", but the index numbers that page Lesson 4.
- **Cause chain taught, in order:** (1) quantities that change in steps give an ordered list (hook); (2) each term has a position and a value, so reversing a list moves values to new positions, which is why order matters (2); (3) a rule gives each term from its position; a list either ends at a last term or never ends (3); (4) each partial sum is the previous one plus one more term, so the partial sums form a sequence, and S₅ − S₄ leaves a₅ (4); (5) a series adds every term of an infinite sequence; the partial sums are its steps, and they may grow without limit (5); (6) sigma tells you the start, the stop and the rule, so you can list and add the terms (6); (7) the count of terms is top − bottom + 1 because the first value needs no step (7); (8) writing a sum in sigma reverses the reading (8); (9) from words, find the rule's cause first, then the start and stop (9).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f01`; playlist order 38; main learner question "What are sequences, partial sums and summation notation?"; syllabus actions `ci0835b75e`, `cie99a9951`, `ci942a2e23`, `ci6cbe66dc`, `ci042665ba`, `ci291b45f0`.
  - Entry knowledge: substituting whole numbers into an expression and evaluating it (Stage 5); the meaning of a function rule; adding signed whole numbers; Year 11 function notation. From i14: nothing is assumed (the hook names the list as particle positions in its own words).
  - Start boundary: "Open on i14's list of particle positions −1, 0, 9, 32 at t = 1 to 4 (narration self-contained); define sequence, term, position and a_n."
  - Stop boundary: "Finite and infinite sequences; S_n as a running total and a sequence; series as the sum of an infinite sequence's terms; read, evaluate and write finite sigma sums, including starts other than 1 and the count j − i + 1. No AP or GP formulas, no convergence, no recurrences."
  - Next handoff: "math-a12-f02: 3, 7, 11, 15, 19 with +4 steps drawn; ask what happens when every step is the same."
  - Prerequisite videos: none in this strand (i14 for the opening frame only).
- **Entry knowledge (as above):** evaluating an expression at whole numbers (n², 2n − 1, 10 − 2n); adding a list of signed whole numbers; function notation from Year 11.
- **Learner-visible vocabulary (plain meaning at first use):** sequence (an ordered list of objects, usually numbers, scene 1 named, scene 2 defined); term (each object in the list, 2); position (first, second, third; the n in a_n, 2); finite and infinite sequence (ends at a last term; never stops, 3); partial sum (the sum of the first n terms, 4); series (the sum of all the terms of an infinite sequence, 5); sigma notation, capital sigma (a Greek letter meaning "add", 6); counter (the letter k that steps through the whole numbers from start to stop, 6, 7).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **term ladder** (`TermLadder`, new: position slots with value cards; reorder animation; end cap and run-off "…"); **partial-sum stacks** (`PartialSumStack`, new: blocks drop onto running columns; S_n readouts; difference highlight); **sigma builder** (`SigmaBuilder`, new: four lit parts, counter dial, term cards dropping into a sum row, term counter); crossed chips (`Chip` with `cross`), `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit). The hook keeps i14's faint `FunctionGraph` of x = t³ − 2t² on 0 ≤ t ≤ 4.3 with sample points at t = 1 to 4, and its number row becomes `TermLadder` cards.
- **Board layout (constant):** heading top-left; the ladder or stack in the upper two-thirds, full width; algebra or the sigma builder in the lower third or the right column. Ladders show at most six cards on screen at once.
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) Hook samples (i14 Problem 1 particle): x(t) = t³ − 2t² gives x(1) = −1, x(2) = 0, x(3) = 9, x(4) = 32 (x(0) = 0 is not shown as a term, so the list starts at position 1).
  (b) S_n for a_n = 2n is n(n + 1): 2, 6, 12, 20, 30. Not shown.
  (c) Series: a_1 + a_2 + a_3 + … is defined formally as an infinite sum; its value, when it exists, is the limit of S_n. For 2 + 4 + 6 + …, S_n = n(n + 1) grows without bound, so the series has no finite sum ("has no total" in the narration). Convergence, its word and the limit are f07's.
  (d) Not 2024 content points: recurrence relations (site cards 04, 05, quick check, MC Q4, SA 1) and finding a_n from a formula for S_n (site cards 02, 06, 09, Problem 3, MC Q3, SA 3). S₅ − S₄ = a₅ is shown once because it follows directly from the definition `ci6cbe66dc` and makes the stacks meaningful; no algebraic S_n formula is used. The open decision 4 notes where the S_n → a_n technique could live.
  (e) Term count for integer limits i ≤ j: j − i + 1 terms. ∑_{k=3}^{7}: 5 terms; ∑_{k=2}^{5}: 4 terms; memory aid example 5 to 9: 5 terms.
  (f) Pronunciations: "a sub n", "a sub three", "a sub one", "S sub n", "S one", "S two" (short forms for named partial sums), "S five minus S four", "the sum, from k equals one to four, of two k minus one", "k squared", "n squared minus n plus one", "sigma". Pilot item: "a sub n" against "a n" (open decision 5).
  (g) Ladder: card width about 150 px, gap 40 px; position labels "n = 1" to "n = 6" grey under the cards; value cards blue ink. Stacks: block unit about 22 px per unit (30 units = 660 px fits the 1080 frame with the heading).

Main question: *A sequence is a list in a fixed order. How do we name its terms, add them up as we go, and write a long sum in one short line?*
Entry knowledge (Stage 5 substitution; Year 11 function notation; i14 for the opening frame only, not assumed in speech): evaluate a rule at whole numbers and add the results.
Stops after: finite and infinite sequences, partial sums, series (formal meaning), reading and writing finite sigma sums. No AP or GP formulas, convergence or recurrences.
Handoff: math-a12-f02: 3, 7, 11, 15, 19 with +4 steps (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: term values blue on cards; positions grey under the cards; partial sums teal (stacks and readouts); sigma start and stop amber (`MATH_ACCENT`); the rule blue; the counter k amber; crossed chips red; the current line bright, earlier lines dim. Screen maths writes aₙ, a₃, Sₙ, S₅ and ∑ with limits above and below (built with the `SigmaBuilder`, not as inline text).

### 1. hook (from a list of positions)
> Here's a list of numbers: minus one, zero, nine, thirty-two. They're the positions of a moving particle, read only at one, two, three and four seconds. A list of numbers in a fixed order, like this, is called a **sequence**. Lists like this matter for the next big topic, money, like savings and loans, because money changes in steps, once a month or once a year, not **smoothly**. So what exactly is a sequence, and how do we add up its terms neatly?

Visual: opens on i14's last frame exactly (i14 scene 14, to which its key notes cross-fade back): the faint x panel of i14's Problem 1 particle (x = t³ − 2t², 0 ≤ t ≤ 4.3) at the left with dots at t = 1, 2, 3, 4; the row of large numbers "−1, 0, 9, 32, ..." at the centre with small grey labels "x at t = 1, 2, 3, 4"; the chips "Next: sequences" and "?". The narration does not assume the viewer has just watched i14 (the playlist may place sequences elsewhere). Heading writes on: "What are sequences, partial sums and summation notation?" as the "Next: sequences" chip fades. On the first sentence the row's numbers settle into `TermLadder` cards (the "..." fades out). On the second sentence the four dots on the faint graph pulse in turn, each linked by a thin grey line to its card. On "sequence" the panel fades and a bracket "an ordered list" draws under the ladder, with the word "sequence" beside it. On "money" a small grey chip "next topic: savings and loans" and a row of four calendar-style month tabs (coded, "Jan", "Feb", "Mar", "Apr") ticks across in steps; on "smoothly" a faint smooth curve beside the tabs is crossed through lightly in grey. The chip "What is a sequence? How do we add its terms?" moves to the top right as the scene question.

### 2. a sequence: position and value
> A sequence is an ordered list of objects, usually numbers. Each object is called a term, and every term has a position: first, second, third, and so on. We write a sub n for the term in position n, where n is a positive whole number. Take one, three, five, seven. Here, a sub three is **five**. The three is the position, and the five is the value. Now reverse the list: seven, five, three, **one**. Same numbers, but a sub one has changed from one to seven. The positions stay put and the values move. That's why order matters, and why this is a different sequence.

Visual: board clears to a `TermLadder` with four empty slots labelled grey "n = 1" to "n = 4" (on "position"). Tag "aₙ: the term in position n" with grey alias "(also written Tₙ on the website and in many past papers)". On "one, three, five, seven" blue value cards 1, 3, 5, 7 drop into the slots. On "five" the third card glows; two tags draw: "position: 3" (grey, pointing to "n = 3") and "value: 5" (blue, pointing to the card), with the line "a₃ = 5". On "one" (reverse) the four cards lift and travel along arcs to their reversed slots (1 ↔ 7, 3 ↔ 5) while the position labels stay still; a `ReadoutPanel` "a₁ = 1" changes to "a₁ = 7" as the 7 card lands. On "order matters" a grey chip "1, 3, 5, 7 ≠ 7, 5, 3, 1".

### 3. a rule, finite and infinite
> Often a rule gives each term from its position. Take a sub n equals two n. Put in n equals one, and a sub one is two. Then come four, six, eight and **ten**. The rule only needs the position. So to find a sub fifty, put in fifty and get one **hundred**, without listing the first forty-nine terms. If the list stops at ten, at its fifth term, it's a finite sequence. A finite sequence ends at some last term, a sub m. Here m is five. But if the list never stops, two, four, six, eight, ten, and so on forever, it's an infinite sequence. We show that with three dots at the **end**.

Visual: the ladder clears; a rule chip "aₙ = 2n" at the left. On "n equals one" a small substitution row "a₁ = 2 × 1 = 2" and the first card drops into slot n = 1. Cards 4, 6, 8, 10 drop in turn (one per number; cue "ten" on the last). On "position" the rule chip glows; on "hundred" a grey side row "a₅₀ = 2 × 50 = 100" writes beside the ladder with a skipped-cards bracket "no need to list a₆ to a₄₉", then fades. On "stops at ten" an ink end cap draws after the fifth card, with a tag "finite: last term a₅ (m = 5)". On "never stops" the cap lifts away and fades, the ladder slides left as cards 12 and 14 enter faint from the right edge and run off it; on "end" "2, 4, 6, 8, 10, …" writes under the ladder with the "…" glowing and a tag "infinite: never terminates".

### 4. partial sums
> Now add the terms up as we go. The first partial sum, S one, is just the first term, **two**. S two adds the first two terms: two plus four is **six**. S three is twelve, S four is twenty, and S five is **thirty**. In general, S sub n is the sum of the first n terms. It's a running total, like the total saved so far after each month. Notice that the partial sums, two, six, twelve, twenty, thirty, make a new sequence of their own. And each stack is the one before it, plus one more block. So S five minus S four leaves just the fifth term: thirty minus twenty is **ten**.

Visual: camera continue: the finite ladder 2, 4, 6, 8, 10 moves to the top as a thin row. Below, a `PartialSumStack` with five column positions labelled grey "S₁" to "S₅". On "two" the a₁ block (height 2, blue outline, teal fill) drops into column S₁; readout "S₁ = 2". On "six" column S₂ builds: a copy of the S₁ column slides across and the a₂ block (4) drops on top; readout "S₂ = 2 + 4 = 6". Columns S₃ (12), S₄ (20) and S₅ (30) build the same way, faster (cue "thirty"). Definition line on "In general": "Sₙ = a₁ + a₂ + … + aₙ (the first n terms)". On "new sequence" the five readouts lift into a teal `TermLadder` row "2, 6, 12, 20, 30". On "one more block" the top block of each column pulses in turn. On "ten" columns S₄ and S₅ sit side by side; S₄'s outline overlays the lower part of S₅ and the uncovered top block glows amber, tag "S₅ − S₄ = 30 − 20 = 10 = a₅".

### 5. series
> What if the sequence is infinite? Then the sum of all its terms, a sub one plus a sub two plus a sub three, and so on, is called a series. The partial sums are the steps on the way. For two, plus four, plus six, and so on, the stacks just keep growing, so this series has no **total**. Some series do settle on a number, and we'll see which ones in a later video. So, S sub n means the first n terms. A series means all of them.

Visual: camera continue. The ladder row at the top gains its "…" again (infinite). Line: "series: a₁ + a₂ + a₃ + …" with tag "the sum of all the terms of an infinite sequence". On "steps on the way" the stacks S₁ to S₅ dim and columns S₆, S₇, S₈ build faster and faster, each taller, the last running off the top edge of the frame (on "total"), readouts "42, 56, 72, …" in grey. Tag "2 + 4 + 6 + …: no total". On "later video" a grey chip "Later: which series settle (limiting sums)". On the last two sentences two chips side by side: "Sₙ: the first n terms" and "series: all of the terms".

### 6. sigma notation
> Writing long sums out is slow, so we use sigma notation. This big symbol is the Greek capital letter sigma, and it means add. Underneath, k equals one tells you where to **start**. On top, four tells you where to **stop**. And two k minus one, on the right, is the rule for each term. Each value of k makes one term. Put in k equals one, two, three and four, to get one, three, five and **seven**. Add them up, and the sum is **sixteen**.

Visual: board clears. The `SigmaBuilder` writes "∑" large in the centre-left with three empty dashed slots (below, above, right). On "add" the ∑ glows with tag "add". On "start" "k = 1" writes into the lower slot in amber, tag "start". On "stop" "4" writes into the upper slot in amber, tag "stop". On "rule" "(2k − 1)" writes into the right slot in blue, tag "the rule for each term". On the next sentence a counter dial "k" (amber) ticks 1, 2, 3, 4; at each tick the substitution "2(1) − 1 = 1" (and so on) flashes beside the rule and a blue term card drops into a sum row "1 + 3 + 5 + 7" (cue "seven" on the last card). On "sixteen" the sum row closes with "= 16" in teal and the whole line reads "∑_{k=1}^{4} (2k − 1) = 1 + 3 + 5 + 7 = 16".

### 7. a sigma that starts later
> The start doesn't have to be one. Here's the sum from k equals three to seven, of k squared. The first term uses k equals three, so it's **nine**. Then come sixteen, twenty-five, thirty-six and forty-**nine**. That's five terms, not seven, because seven minus three is four, plus one for the first term. The total is one hundred and thirty-**five**. In general, the sum from k equals i to j, of a sub k, adds every term from a sub i up to a sub **j**. And k is just a counter. Use j instead, and the sum is exactly the same.

Visual: camera continue: the scene 6 line dims and moves up. The `SigmaBuilder` refills: lower "k = 3", upper "7", rule "k²". On "nine" the counter dial starts at 3 (it skips 1 and 2, which show greyed on the dial), and the card "9" drops. Cards 16, 25, 36, 49 drop in turn (cue "nine" on 49). On "five terms" a term counter under the row counts 1 to 5, with the grey calculation "7 − 3 + 1 = 5"; the five k values 3, 4, 5, 6, 7 sit as small amber ticks with four gaps between them, the gaps bracketed "7 − 3 = 4 steps" and the first tick ringed "+ 1 for the first". On "thirty-five" the row closes "= 135" in teal. On "j" (bold) a grey general line writes under it: "∑_{k=i}^{j} aₖ = aᵢ + aᵢ₊₁ + … + aⱼ", with "i" and "j" in amber. On the last two sentences every "k" in the builder morphs to "j" and back, with the readout "= 135" unchanged and a grey tag "the counter's letter doesn't matter".

### 8. worked example: writing a sum in sigma
> Let's go the other way. A sequence has a sub n equals n squared minus n plus one. Its first five terms are one, three, seven, thirteen and twenty-**one**. Their sum, S five, is forty-**five**. To write S five in sigma notation, swap n for the counter k, start at one and stop at five. So S five is the sum, from k equals one to five, of k squared minus k plus one. That's forty-**five** again, written in one line.

Visual: board clears (new case): task strip "aₙ = n² − n + 1. Find the first five terms and S₅, and write S₅ in sigma notation." (site Problem 1, wording shortened). A `TermLadder` fills with 1, 3, 7, 13, 21 (one substitution row at a time, each replaced by the next: "a₁ = 1 − 1 + 1 = 1", …; cue "twenty-one"). On "forty-five" a small teal `PartialSumStack` of the five blocks builds into one column, readout "S₅ = 1 + 3 + 7 + 13 + 21 = 45". On "swap n for the counter k" the rule chip "n² − n + 1" slides into the `SigmaBuilder`'s right slot and its n letters morph to k; "k = 1" drops into the lower slot and "5" into the upper slot. On the last "forty-five" the line "S₅ = ∑_{k=1}^{5} (k² − k + 1) = 45" writes, with a tick.

### 9. from words to sigma
> Now write a sum from words. Write the sum of the first ten odd numbers in sigma notation. First, find a rule for the odd numbers. One, three, five, seven: each one is one less than an even number, so the kth odd number is two k minus **one**. Check: k equals one gives one. Next, the start and the stop. The first ten odd numbers means k goes from one to **ten**. So it's the sum, from k equals one to ten, of two k minus one. The last term is two times ten, minus one, which is **nineteen**. And all ten add to one hundred.

Visual: board clears (new case): task strip "Write the sum of the first ten odd numbers in sigma notation." (site card 08, "Converting English to sigma"). A `TermLadder` row of 1, 3, 5, 7 with the even numbers 2, 4, 6, 8 faint above each card and small "− 1" arrows down to it; on "one" (bold) the rule chip "kth odd number = 2k − 1" with the check "k = 1: 2(1) − 1 = 1". On "ten" the chip slides into a `SigmaBuilder`'s right slot, "k = 1" drops into the lower slot and "10" into the upper slot (amber). On "nineteen" the row "1 + 3 + 5 + … + 19" writes with the last term ringed and the grey "2(10) − 1 = 19". On the last sentence "= 100" closes the line in teal: "∑_{k=1}^{10} (2k − 1) = 1 + 3 + 5 + … + 19 = 100".

### 10. memory aid
> Here's a way to read any sigma. Bottom: start. Top: stop. And the number of terms is the top minus the bottom, plus **one**. From five to nine, that's five terms, not **four**.

Visual: a clean `SigmaBuilder` with amber labels "start" at the bottom and "stop" at the top. The handwritten line writes large: "Bottom: start. Top: stop. Count: top − bottom + 1." On "one" a small example: ∑ with limits 5 and 9; amber ticks 5, 6, 7, 8, 9 with the four gaps bracketed and the first tick ringed. On "four" a chip "4 terms" fades in and is crossed; "5 terms" stays. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Evaluate the sum, from k equals two to five, of four k minus three. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Evaluate ∑_{k=2}^{5} (4k − 3)." (sigma typeset with limits). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no builder, no dial).

### 12. feedback 1 (brief)
> Start at k equals two: four times two, minus three, is **five**. Then come nine, thirteen and seventeen. That's four terms, and they add to forty-**four**. Twenty-eight is wrong. It starts at k equals one, and stops one term **early**.

Visual: card shrinks to the top; "k = 2" and "5" are underlined in the card as they are used. Row "k = 2: 4(2) − 3 = 5"; on "seventeen" the term row "5 + 9 + 13 + 17" with a grey "5 − 2 + 1 = 4 terms". On "four" "= 44" boxed. On "early" a chip "1 + 5 + 9 + 13 = 28" fades in and is crossed (caption "started at k = 1"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A sequence has a sub n equals ten minus two n. Find S four, and write S four in sigma notation. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A sequence has aₙ = 10 − 2n. Find S₄, and write S₄ in sigma notation." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The first four terms are eight, six, four and **two**. S four adds all four of them, to make twenty. In sigma notation, it's the sum, from k equals one to four, of ten minus two **k**. Two is wrong. That's a sub four, the fourth term, not the sum of the first four **terms**.

Visual: card shrinks to the top; "aₙ = 10 − 2n" and "S₄" underlined as used. A small `TermLadder` 8, 6, 4, 2 (cue "two"); a single teal stack column builds from the four blocks with readout "S₄ = 8 + 6 + 4 + 2 = 20", boxed. On "k" the line "S₄ = ∑_{k=1}^{4} (10 − 2k) = 20" with a tick. On "terms" a chip "S₄ = 2" fades in and is crossed (caption "that is a₄"). Hold about 1 second.

### 15. handoff
> So a sequence is an ordered list, a sub n is the term in position n, S sub n adds up the first n terms, and sigma writes a sum in one line. Now look at this sequence: three, seven, eleven, fifteen, nineteen. Each step adds **four**. What happens when every step is the same?

Visual: the four key ideas show as small chips at the top ("aₙ", "Sₙ", "series", "∑"), then fade on "Now look". Board clears to a `TermLadder`: 3, 7, 11, 15, 19 (positions n = 1 to 5 in grey). On "four" amber "+4" arcs draw between neighbouring cards, one after another. A chip "Next: the same step every time" and a "?" chip. No formula, no "arithmetic" word. Hold about 2 seconds. This is f02's opening frame; scene 16 returns to it silently after the notes.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A sequence is an ordered list of objects. aₙ is the term in position n, where n = 1, 2, 3, … (also written Tₙ). Order matters: 1, 3, 5, 7 and 7, 5, 3, 1 are different sequences.
2. A finite sequence ends at a last term aₘ. An infinite sequence never stops: a₁, a₂, a₃, ….
3. Partial sum: Sₙ = a₁ + a₂ + … + aₙ, the sum of the first n terms. A series is the sum of all the terms of an infinite sequence: a₁ + a₂ + a₃ + ….
4. ∑_{k=i}^{j} aₖ = aᵢ + aᵢ₊₁ + … + aⱼ. Example: ∑_{k=3}^{7} k² = 9 + 16 + 25 + 36 + 49 = 135 (7 − 3 + 1 = 5 terms).

Memory aid (large, on the notes screen): *Bottom: start. Top: stop. Count: top − bottom + 1.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 15's frame exactly (3, 7, 11, 15, 19 with the four "+4" arcs, the chips "Next: the same step every time" and "?"). This is the final frame and f02's opening frame.

## Teaching checks

- **Does it explain causes?** Why we need sequences now: money changes in steps (1). Why order matters: positions stay and values move when a list is reversed, so a₁ changes (2). Why a list is finite or infinite: whether it has a last term (3). Why the partial sums form a sequence, and why S₅ − S₄ = a₅: each stack is the previous stack plus one block (4). Why 2 + 4 + 6 + … has no total: its stacks grow without limit (5). Why sigma gives exactly those terms: start, stop and the rule (6). Why 7 − 3 + 1: four steps between five values (7, 10). Why 2k − 1 makes the odd numbers: each is one less than an even number (9).
- **Misconceptions addressed:** n confused with aₙ (2); order doesn't matter (2); Sₙ confused with aₙ (4; A2 crossed); a series means a partial sum (5); wrong term count (7, 10; A1 crossed); the counter letter changes the sum (7).
- **One idea at a time:** one new word per scene from 2 to 7; the sigma builder lights one part per cue (6); one counter value per card (6, 7); scenes 8 and 9 run their tasks in turn, each replacing the last.
- **Video makes it easier:** the student watches values travel while positions stay (2), sees each stack build from the one before and the top block left over (4), sees the stacks run off the frame (5), and watches the counter feed the rule one value at a time (6, 7). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 19 s and 21 s (scenes 12 and 14).
- **Avoided double teaching:** i14's list is reused as a picture only, with no calculus spoken or used.
- **Syllabus coverage:** `ci0835b75e` (1, 2; key note 1); `cie99a9951` (2, 3; key note 1); `ci942a2e23` (3; key note 2); `ci6cbe66dc` (4, 8; A2; key note 3); `ci042665ba` (5; key note 3); `ci291b45f0` (6 to 10; A1, A2; key note 4).
- **Out of scope by design:** AP and GP formulas; convergence; recurrences; a_n from a formula for S_n.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 1 mark suggested, not an official marking scheme).** "Evaluate ∑_{k=2}^{5} (4k − 3)."
Model answer: k = 2, 3, 4, 5 give 5, 9, 13, 17 (5 − 2 + 1 = 4 terms); the sum is 5 + 9 + 13 + 17 = 44. Classic mistake (crossed): "28" (1 + 5 + 9 + 13, starting at k = 1).

**Attempt 2 (scene 13; original wording, HSC style, 2 marks suggested).** "A sequence has aₙ = 10 − 2n. Find S₄, and write S₄ in sigma notation."
Model answer: a₁ = 8, a₂ = 6, a₃ = 4, a₄ = 2; S₄ = 8 + 6 + 4 + 2 = 20; S₄ = ∑_{k=1}^{4} (10 − 2k). Classic mistake (crossed): "S₄ = 2" (that is a₄).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook samples (i14) | x(t) = t³ − 2t²: x(1) = −1, x(2) = 0, x(3) = 9, x(4) = 32 | 1 |
| Order | 1, 3, 5, 7: a₃ = 5, a₁ = 1; reversed 7, 5, 3, 1: a₁ = 7 | 2 |
| Rule 2n | 2, 4, 6, 8, 10 (m = 5); then 12, 14 faint | 3 |
| Partial sums of 2n | S₁ to S₅: 2, 6, 12, 20, 30; S₅ − S₄ = 10 = a₅; grey S₆ to S₈: 42, 56, 72 | 4, 5 |
| Sigma (site) | ∑_{k=1}^{4} (2k − 1) = 1 + 3 + 5 + 7 = 16 | 6 |
| Sigma from 3 (site) | ∑_{k=3}^{7} k² = 9 + 16 + 25 + 36 + 49 = 135; 7 − 3 + 1 = 5 terms | 7, key note 4 |
| Problem 1 (site) | aₙ = n² − n + 1: 1, 3, 7, 13, 21; S₅ = 45 = ∑_{k=1}^{5} (k² − k + 1) | 8 |
| Words to sigma (site) | first ten odd numbers: ∑_{k=1}^{10} (2k − 1) = 1 + 3 + … + 19 = 100; 2(10) − 1 = 19 | 9 |
| Memory aid | 5 to 9: 5 terms | 10 |
| A1 | ∑_{k=2}^{5} (4k − 3) = 5 + 9 + 13 + 17 = 44; crossed 1 + 5 + 9 + 13 = 28 | 11, 12 |
| A2 | 10 − 2n: 8, 6, 4, 2; S₄ = 20 = ∑_{k=1}^{4} (10 − 2k); crossed 2 (a₄) | 13, 14 |
| Rule 2n at 50 | a₅₀ = 100 | 3 |
| Handoff | 3, 7, 11, 15, 19; +4 | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated Python run, script in the designer's scratchpad); Codex to re-check.

- x(t) = t³ − 2t² at t = 1, 2, 3, 4: −1, 0, 9, 32 (matches i14 scene 14).
- 2n for n = 1 to 5: 2, 4, 6, 8, 10; partial sums 2, 6, 12, 20, 30; S₆, S₇, S₈ = 42, 56, 72; S₅ − S₄ = 10.
- ∑_{k=1}^{4} (2k − 1) = 16; ∑_{k=3}^{7} k² = 135 with terms 9, 16, 25, 36, 49.
- n² − n + 1 for n = 1 to 5: 1, 3, 7, 13, 21; sum 45.
- ∑_{k=2}^{5} (4k − 3) = 44 (terms 5, 9, 13, 17); ∑_{k=1}^{4} (4k − 3) = 28.
- 10 − 2n for n = 1 to 4: 8, 6, 4, 2; sum 20.
- a₅₀ = 2 × 50 = 100; ∑_{k=1}^{10} (2k − 1) = 100 with last term 19.
- Term counts: 7 − 3 + 1 = 5; 5 − 2 + 1 = 4; 9 − 5 + 1 = 5.

## Memory aid check

- **"Bottom: start. Top: stop. Count: top − bottom + 1."** Original. Meaning, as said in scene 10: the lower limit is the first counter value, the upper limit the last, and the number of terms is one more than their difference. Assumptions checked: whole-number limits with the counter stepping by 1 (always true for this notation in the course); the upper limit is at least the lower limit (`ci291b45f0` has j > i). The "+1" has its cause shown in scene 7 (four gaps between five values) before the aid is stated. It helps a new case: ∑ from 10 to 30 has 21 terms. Introduced after the cause (7) and the uses (6 to 9).
- **Considered, not used:** a "machine" metaphor for the rule (fine but adds a picture without a cause); "S for sum, a for a single term" (true, but A2's crossed chip carries that contrast directly).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,637 characters**, 16 scenes. Characters per scene (1 to 16): 443, 558, 569, 558, 424, 422, 508, 402, 512, 168, 100, 223, 127, 263, 270, 75 (the total includes the 15 joining spaces). A first draft counted 4,793 characters; scene 9 (words to sigma, a second syllabus use of sigma, site card 08) and four causal sentences were added (a₅₀ from the rule, the running-total meaning of Sₙ, one term per k, the general ∑ from i to j), not padding. At 13.3 characters per second the speech is about 424 s; add about 15 s of settling time for the reorder in scene 2, the stack builds in scene 4, the run-off in scene 5 and the counter in scenes 6, 7 and 9, 20 s for two countdowns, 5 s of short holds (scenes 10, 12, 14, 15) and about 60 s more of the quiet notes hold (about 100 s of holds): **about 524 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims are not available: the narration is about 140 characters above the 5,500 floor. If the voiced take runs long, shorten holds, not speech.

## Scene list and build ids

Lesson key `m-a12f01` (route math-a12-f01). Suggested explainer folder `src/explainer/lessons/math-a12-f01` and build folder `docs/production/claude-pm/lessons/m-a12f01` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, position-and-value, rule-finite-infinite, partial-sums, series, sigma-notation, sigma-later-start, write-in-sigma, words-to-sigma, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): i14's last frame continues into scene 1 (the number row settles into cards; camera continue); 1 to 2 clear change (new list); 2 to 3 clear change (new rule); 3 to 4 camera continue (the ladder moves up); 4 to 5 camera continue (the stacks keep growing); 5 to 6 clear change; 6 to 7 camera continue (the builder refills); 7 to 8 clear change (new case); 8 to 9 clear change (new case); 9 to 10 camera pull back to the clean builder; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12f01-learning-review.md`, `science_check` = `checks/m-a12f01-maths-check.md`.

## Assets

Have: no plates. Existing kit used: `FunctionGraph` (scene 1, i14's faint x panel, x = t³ − 2t² on 0 ≤ t ≤ 4.3 with four points), `ReadoutPanel` (2, 4), `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading`. The month tabs in scene 1 and the end cap in scene 3 are plain SVG in the lesson folder.

New parts (the sequence strand's first kit needs; specified below for one Codex kit brief that serves f01 to f04, and later f05 to f11): `TermLadder`, `PartialSumStack`, `SigmaBuilder`. f02 adds `TermPlot` and `StepCounter`; f03 adds `PairingRectangle`; f04 adds `PeriodTimeline` (each specified in its own design's Codex asset brief).

## Codex asset brief

No painted plate is needed (programme decision 5). Coded kit parts for the next maths kit brief (sequence parts), built in `src/explainer/math/` and exported through `kit.tsx`, each with a pilot example from this design's numbers, numerical checks of every displayed value, desktop and phone-landscape stills, and a short silent motion sample for Claude to judge at playback speed:

1. **`TermLadder`** (scenes 1 to 4, 8, 9, 14, 15; f02 to f04 reuse it). A horizontal row of value cards on position slots. Props: `values` (React nodes or numbers, author-supplied), `positions` (default 1, 2, 3, …; grey labels "n = k" under the slots, optional), `dropAt` (frame cue per card; the card falls into its slot), `glow` ({index, at}[]), `reorder` ({to: number[], at, duration}: cards travel along arcs to new slots while the position labels stay fixed; a linked `readout` option shows "a₁ = …" updating as cards land), `endCap` ({after: index, at, liftAt?}: an ink bar after the last term; lifting animates it away), `runOff` ({extra: values, at}: the row slides left and extra faint cards enter from the right edge and leave the frame; an "…" label glows), `arcs` ({from, to, label, at}[]: amber step arcs between neighbouring cards, label text such as "+4" or "+d"; f02 uses them), `cardWidth`, `gap`, `colour`. No computation: values are author inputs. Fit check with six cards at 1920 and phone landscape; at most six cards visible.
2. **`PartialSumStack`** (scenes 4, 5, 8, 14; f03 and f04 reuse it). Columns of stacked blocks, one block per term, unit height scaled from a `unit` prop. Props: `terms` (numbers; signed values must be rejected with an error in this version, as all strand uses are positive; a negative-term mode is a later need), `columns` (which partial sums to show, for example [1, 2, 3, 4, 5]), `buildAt` (cue per column: the previous column's copy slides across and the new block drops on top), `labels` ("S₁" … grey under each column), `readouts` (text per column, author-supplied, for example "S₂ = 2 + 4 = 6"; the part checks that each readout's final value equals the block total and throws if not), `pulseTop` (cue: the top block of each column pulses in turn), `difference` ({upper, lower, at}: the lower column's outline overlays the upper column and the uncovered blocks glow amber), `overflow` ({extraTerms, at}: further columns build faster and the last runs off the top edge; grey readouts), `single` (one column only, for scene 8 and feedback 2). Checks: block totals equal running sums for the pilot (2, 4, 6, 8, 10 → 2, 6, 12, 20, 30; and 1, 3, 7, 13, 21 → 45; 8, 6, 4, 2 → 20).
3. **`SigmaBuilder`** (scenes 6 to 10; f02 to f04 reuse it). A large typeset ∑ with three slots: lower (start, "k = i"), upper (stop), right (the rule). Props: `start`, `stop` (integers), `counter` (default "k"), `rule` (React node for display) and `ruleFn` (a numeric function of the counter, used to compute the term cards and the sum), `revealAt` ({part: 'sigma' | 'start' | 'stop' | 'rule', at}[]; each part lights with its tag "add", "start", "stop", "the rule for each term"), `dial` ({at, stepFrames}: an amber counter dial steps from start to stop; values below start show greyed when `showSkipped` is set), `cardsAt` (term cards drop into a sum row "t₁ + t₂ + …", each computed from `ruleFn`; the row closes with "= total" in teal at `totalAt`), `count` ({at}: a term counter 1 to (stop − start + 1) under the row, with the grey "stop − start + 1 = count"), `gaps` ({at}: amber ticks at each counter value, the gaps bracketed "stop − start = steps", the first tick ringed "+ 1 for the first"), `morphCounter` ({to: 'j', at, back}), `fillFrom` (an existing chip slides into the rule slot, with a letter morph from n to k). Checks: computed terms and totals for the pilot (∑_{k=1}^{4} (2k − 1) = 16; ∑_{k=3}^{7} k² = 135; ∑_{k=1}^{5} (k² − k + 1) = 45; ∑_{k=1}^{10} (2k − 1) = 100; ∑_{k=2}^{5} (4k − 3) = 44; ∑_{k=1}^{4} (10 − 2k) = 20) and an error when stop < start. The author-supplied `rule` display and `ruleFn` must agree; the pilot checks them at every counter value against a second independent evaluation.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the six syllabus quotes match the official 2024 text (linear form of the MathML), including the sigma limits of `ci291b45f0` (lower k = i, upper j), and that no site module label appears in learner copy or metadata.
3. Confirm the scope of every learner-visible general claim: "order matters" (2); "a finite sequence ends at some last term a sub m" (3); the definition of Sₙ (4, key note 3); "a series is the sum of all its terms" for an infinite sequence (5, key note 3); "2 + 4 + 6 + … has no total" (5); the term count top − bottom + 1 (7, 10; whole-number limits, stop ≥ start); "the kth odd number is 2k − 1" (9).
4. Confirm S₅ − S₄ = a₅ is presented as a reading of the definition only, with no algebraic Sₙ formula, and that no recurrence, convergence or AP formula appears.
5. Confirm both attempt questions carry every demand, are original in wording (not the site's Problem 2 or short answer 2), and that neither card or its visuals shows the terms or the answer.
6. Confirm the handoff (scene 15) states no formula and no "arithmetic" word, and that scene 16 returns to its frame.
7. Confirm the site-error notes in Decisions quote the site exactly and that their corrections are mathematically right.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Sequences, Partial Sums and Sigma Notation: Read ∑ from Start to Stop | Year 12 Maths Advanced

(Title length: 94 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/sequences-and-series/lesson02.sa.html

What is a sequence, and why does order matter? Each term has a position n and a value aₙ, so reversing a list moves the values to new positions. See finite and infinite sequences, build the partial sums Sₙ as running totals that make a sequence of their own, and meet a series: the sum of all the terms of an infinite sequence. Then read sigma notation part by part (start, stop and the rule) and evaluate ∑ (2k − 1) from 1 to 4 and ∑ k² from 3 to 7. A memory aid: bottom, start; top, stop; count, top minus bottom plus one. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, sequences and series.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define a sequence as an ordered list of objects"
"Use the notation aₙ, where n is a positive integer, to represent the nth term of a sequence"
"Distinguish between a finite sequence a₁, a₂, …, aₘ that terminates at its mth term, for some whole number m ≥ 1, and an infinite sequence a₁, a₂, … that never terminates"
"Define the nth partial sum Sₙ of a sequence a₁, a₂, … to be the sum of the first n terms of the sequence: Sₙ = a₁ + a₂ + … + aₙ, for all whole numbers n ≥ 1"
"Define a series formally as the sum of the terms of an infinite sequence and use the notation a₁ + a₂ + a₃ + … for the series corresponding to the sequence a₁, a₂, a₃ …"
"Use summation notation to represent the sum of terms aᵢ to aⱼ of a sequence where j > i, ∑_{k=i}^{j} aₖ = aᵢ + aᵢ₊₁ + aᵢ₊₂ + … + aⱼ₋₁ + aⱼ"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

Builds on: substituting into a rule (no calculus needed). Next: Arithmetic sequences.

#Year12Maths #MathsAdvanced #Sequences #HSCScience

## Open decisions

- **1. i14's final frame (resolved by root note, 2 Nov).** i14 scene 14 ends on its Problem 1 particle's positions at t = 1 to 4, "−1, 0, 9, 32, ...", with "Next: sequences" and "?". Scene 1 opens on it exactly; its narration names the list without referring to "last video", so it stays true if sequences move in the playlist. If i14's numbers change in review, change scene 1's four spoken numbers and the faint panel.
- **2. Notation (root).** aₙ (syllabus) on screen and in speech, with a grey "also written Tₙ" alias once in scene 2 and in key note 1. The site uses Tₙ and l throughout. Same treatment as root decision 21 for transformations. If root prefers Tₙ to match the site, change every aₙ in f01 to f04 together.
- **3. "Finite series" (learning review).** The video uses "series" only in the formal 2024 sense (infinite). Past HSC papers and the site often say "the series 5 + 8 + 11 + … + 92" for a finite sum. f03's attempt 1 says "the first thirty terms of the arithmetic series 5 + 8 + 11 + …", which is consistent with the formal meaning. Confirm this is clear enough without a spoken caveat.
- **4. aₙ from a formula for Sₙ (root).** The site teaches aₙ = Sₙ − Sₙ₋₁ with a check of a₁ = S₁ (cards 02, 06, 09; Problem 3; SA 3). It is not a 2024 content point. This video shows S₅ − S₄ = a₅ on the stacks only. If root wants the algebraic technique, its home is the strand's exam-practice video, not f01 (it would need about 90 s and a second worked example).
- **5. Spoken subscripts (voice pilot).** "a sub n", "S sub n", and the short forms "S one", "S five". Add to the brief 124 pilot list.
- **6. Site link form.** The description links lesson 2, the page every worked number comes from. The `.sa.html` form follows root decision 15.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from Stage 5 substitution and Year 11 function notation; check that the reversal in scene 2 makes "order matters" a consequence of positions; that "S sub n" and "a series" are clearly different; that the counter dial shows one value per card; that the term-count cause in scene 7 comes before the memory aid; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The reorder, the stack builds and the counter carry the explanation; judge them at playback speed in the voiced preview, not from stills. Every readout and term card must be computed from the same rule functions as the displayed expressions.
- The opening frame is i14 scene 14 as written on 2 Nov (open decision 1). If i14's handoff changes in review, change scene 1's first visual and spoken numbers to match.
