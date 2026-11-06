# Maths A12 F01: What are sequences, partial sums and summation notation? Order and position, finite and infinite, running totals, series and reading sigma from start to stop (design)

Status: Revision 2 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing. Previously Revision 1 (2 Nov 2026). Not voiced (no `math-a12-f01/` folder and no `measured/lesson.json`), so narration is rewritten freely where the anchor needs it. Nothing recorded; human listening pending.

Narration 6,063 characters, 16 scene headings, about 552 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

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

**Boundary (Revision 1 wording; Revision 2 anchor contexts and joins in Decisions override it):** starts from i14's last frame (i14 scene 14: the positions of its Problem 1 particle, x = t³ − 2t², at t = 1, 2, 3, 4 listed as −1, 0, 9, 32 with the chip "Next: sequences"; read 2 Nov); names that list a sequence without assuming the viewer has just watched i14, then defines a sequence as an ordered list (`ci0835b75e`), a_n as the term in position n (`cie99a9951`), finite and infinite sequences (`ci942a2e23`), the partial sum S_n as a running total that is itself a sequence, with S_n − S_{n−1} = a_n read off the stacks (`ci6cbe66dc`), a series as the sum of all terms of an infinite sequence (`ci042665ba`), and sigma notation with its start, stop, counter and rule, including a start other than 1 and the term count j − i + 1 (`ci291b45f0`). Stops at reading, evaluating and writing finite sigma sums of given rules. Not taught: arithmetic and geometric sequences and their formulas (f02 onwards; the handoff shows +4 steps as a question only); convergence and limiting sums (f07; scene 5 says only that some series settle on a number "in a later video"); recurrence relations and finding a_n from a formula for S_n (not 2024 content points; S_5 − S_4 = a_5 is shown once on the stacks as a reading of the definition, with no algebraic S_n formula); finance (later strand).

## Decisions

### Revision 2 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a cricket scoreboard (painted plates, live).** The runs scored in each over are a sequence in a fixed order (the over number is the position), and the scoreboard total after each over is the partial sum. Every idea in the lesson sits on that one picture: position against value (the third over against its runs), order (two teams with the same runs in reverse order have different scoreboards after over 1 but the same 16 after over 4), finite against infinite (a five-over game ends at a last term; a game whose overs never end does not), Sₙ as the running total, Sₙ − Sₙ₋₁ = aₙ as the jump on the scoreboard, a series as a total that keeps climbing, and ∑_{k=1}^{4} (2k − 1) = 16 as Team A's score after four overs. Sport, not science; it differs from every context in `checks/root-decisions-maths-redesign.md` and from i01 to i07's likely contexts. No players are drawn: only the scoreboard, the ball and the grass.
- **Site numbers unchanged.** The site's examples now carry runs: 1, 3, 5, 7 and its reverse (card 05), aₙ = 2n with S₁ to S₅ = 2, 6, 12, 20, 30 (cards 05, 06), ∑_{k=1}^{4} (2k − 1) = 16 (card 08). ∑_{k=3}^{7} k² = 135, Problem 1 (n² − n + 1) and the first ten odd numbers stay as plain number work (scenes 7 to 9), as on the site.
- **Idealising assumptions (author notes, not learner copy).** (i) Runs per over are whole numbers, and the "two n runs in over n" team is a made-up rule for illustration (real overs give at most 36 runs from six legal balls without extras; the rule is used only for n ≤ 5 on the scoreboard, and a₅₀ = 100 is said as a property of the rule, not of a game). (ii) "A game whose overs never end" is a thought experiment for an infinite sequence, said as such.
- **Join with i14 (kept).** Scene 1 opens on i14 Revision 2's final frame exactly (the row "−1, 0, 9, 32, ...", the faint x panel, "Next: sequences" and "?"); the first sentences name the list without assuming the viewer watched i14.
- **Join with f02 (changed, both designs edited together).** Scene 15 now ends on a stack of three painted chairs (80, 86, 92 cm) with a `TermLadder` and "+6" arcs, "Next: the same step every time" and "?". f02 Revision 2 opens on it.
- **Simulations (standard item 3).**
  1. **The two-innings race** (scene 2): two scoreboards run over by over from the same four runs in opposite orders; totals 1, 4, 9, 16 against 7, 12, 15, 16 with live readouts; they differ at every over and meet at 16 (the visual surprise).
  2. **The over ticker** (scenes 1, 4, 5; the main simulation): each over the ball rolls, the over's block drops onto the running column and the scoreboard's TOTAL flips, with `LiveReadoutBoard` "over n", "runs aₙ", "total Sₙ" (52 px); in scene 5 the columns build faster and run off the frame.
  3. **The counter dial** (scenes 6, 7): k steps from start to stop, each value feeding the rule and dropping a card (and flipping Team A's scoreboard in scene 6); the posts-and-gaps picture shows the term count.
- **Colour roles (fixed for the whole video).** Term values aₙ (runs) blue (`MATH_BLUE`); positions n (over number) grey ink (`inner` role ink, never faint); partial sums Sₙ (the total) teal (`MATH_TEAL`); the sigma start, stop and counter k amber (`MATH_AMBER`); answer green; mistake red, crossed slips only.
- **Large type (standard item 5).** See the type line under "Script and shots". The scoreboard about 620 to 820 px wide; ladder cards 52 px; stacks up to about 660 px tall.
- **Handwritten voice (standard item 6).** `HandTag`: "an ordered list", "two sequences", "position: 3", "value: 5", "same total", "after over 1: different", "game over", "running total", "the jump on the scoreboard is the last over's runs", "keeps climbing: no total", "add", "start", "stop", "+ 1 for the first", "the counter's letter doesn't matter", "the counter is k, not n", "started at k = 1", "that is a₄", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 70 s.** i14's frame to the scoreboard (1); the two-innings race (2); rule and end cap (3); the over ticker and stacks (4); run-off (5); the sigma builder with Team A's scoreboard (6); the counter and posts (7); the g01 board (8, 9); the framed memory card (10); question cards with pictures (11 to 14); the chair stack (15); key notes (16).
- **Worked examples and attempts (g01 layout, standard item 7).** Scenes 8 and 9: task strip, givens card, rows one at a time at 52 px, a green framed answer; scene 8 carries a crossed slip ("n inside the sigma"). Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip. Question cards show the full question at 40 px plus a picture: A1 the blank scoreboard; A2 an empty four-slot ladder and an empty S₄ column (no values).
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Bottom: start. Top: stop. Count: top − bottom + 1." Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Visual surprise (standard item 9).** The two scoreboards disagree after every over and still land on the same 16 (scene 2): the same terms in a different order make a different sequence with a different running total, even though the final sum agrees.
- **Narration (not voiced).** Scenes 1 to 6 and 15 are rewritten around the scoreboard and the chairs (the site's numbers are unchanged); the money sentence of Revision 1's hook is removed (finance comes later, and money is kept for the finance strand). Scenes 7 to 14 and 16 keep their Revision 1 text, with cue marks moved onto whole words in 7, 8 and 12.

### Revision 1 decisions (kept where not overridden above)

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
  - Next handoff (Revision 2): "math-a12-f02: a stack of three chairs, 80, 86, 92 cm, with +6 steps drawn; ask what happens when every step is the same."
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
Handoff (Revision 2): math-a12-f02: the chair stack 80, 86, 92 cm with +6 steps (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Revision 2 colour roles (fixed; see Decisions): term values aₙ (the runs in an over) **blue**; positions n (the over number) **grey ink** (`MATH_INNER` role, full ink, never faint); partial sums Sₙ (the scoreboard total) **teal**; the sigma start, stop and counter k **amber**; answer **green**; mistake **red**, crossed slips only. Type (standard item 5): current working line and live readout numbers 52 px; equation strip, task strip and givens 44 px; earlier lines 30 to 32 px and dimmed, never faint; ladder cards 52 px; axis and position labels at least 28 px; hand tags (`HandTag`, the explainer's hand font) at least 34 px; question cards 40 px; key-note bullets 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (plate, ladder, stack or simulation) is solid from the stage's first frame; labels, readouts and answers arrive on their cues. Header strip "MATHEMATICS ADVANCED · SEQUENCES AND SERIES"; scene headings in the hand font, 44 px.

### 1. hook (from a list of positions to a scoreboard)
> Here's a list of numbers: minus one, zero, nine, thirty-two. They're the positions of a moving particle, read at one, two, three and four seconds. A list of numbers in a fixed order, like this, is called a **sequence**. Sequences are everywhere. At a **cricket** match, the scoreboard changes once an over, in steps, not smoothly. The runs scored in each over make one sequence, and the scoreboard totals make **another**. So what exactly is a sequence, and how do we add up its terms neatly?

Visual: opens on i14's last frame exactly (i14 Revision 2 scene 14, to which its key notes cross-fade back): the faint x panel of i14's second particle (x = t³ − 2t², 0 ≤ t ≤ 4.3) at the left with dots at t = 1, 2, 3, 4; the row of large numbers "−1, 0, 9, 32, ..." at the centre with small grey labels "x at t = 1, 2, 3, 4"; the chips "Next: sequences" and "?". The narration does not assume the viewer has just watched i14. Heading writes on: "What are sequences, partial sums and summation notation?" as the "Next: sequences" chip fades. On the first sentence the row's numbers settle into `TermLadder` cards (52 px, blue), the "..." fading. On "sequence" a bracket "an ordered list" draws under the ladder (hand tag). On "cricket" the panel and ladder slide left and shrink (cards 32 px), and the painted scoreboard `ma12-cricket-scoreboard-v1.png` (about 820 px wide, solid from its first frame) rises at the right above the painted grass strip `ma12-cricket-grass-strip-v1.png`; its blank panels carry coded labels "OVER" and "TOTAL" (36 px) and coded flip numbers (`PlateReadout`, 72 px) reading "0" and "0". The painted ball `ma12-cricket-ball-v1.png` (about 90 px) rolls in along the grass once per over as the scoreboard flips through four quick overs: over 1, 2, 3, 4 with totals 2, 6, 12, 20 (a preview of scene 4; small grey tag "runs in steps, once an over"). On "another" two short rows write under the scoreboard: "runs each over: 2, 4, 6, 8" (blue) and "scoreboard total: 2, 6, 12, 20" (teal), hand tag "two sequences". The chip "What is a sequence? How do we add its terms?" moves to the top right as the scene question.

### 2. a sequence: position and value
> A sequence is an ordered list of objects, usually numbers. Each object is called a term, and every term has a position: first, second, third, and so on. We write a sub n for the term in position n, where n is a positive whole number. Say one team scores one, three, five and seven runs in the first four overs. Here, a sub three is **five**. The three is the position, the third over, and the five is the value, the runs. Now a second team scores the same runs in reverse: seven, five, three, **one**. After four overs, both teams have sixteen. But after the first over, one scoreboard shows one, and the other shows **seven**. The positions stay put and the values move. That's why order matters, and why these are different sequences.

Visual: clear change to the two-innings race (simulation 1). Two small scoreboards side by side at the top (the same plate drawn twice at about 520 px, labelled "Team A" and "Team B" in coded text below each), each with a `TermLadder` of four slots under it labelled grey "over n = 1" to "n = 4" (on "position"). Tag "aₙ: the term in position n" with grey alias "(also written Tₙ on the website and in many past papers)". On the team sentence Team A's blue cards 1, 3, 5, 7 drop into its slots. On "five" the third card glows; two hand tags draw: "position: 3" (grey ink, pointing to "n = 3") and "value: 5" (blue, pointing to the card), with the line "a₃ = 5" (52 px). On "one" Team B's ladder fills by copying Team A's cards, which lift and travel along arcs to their reversed slots (1 ↔ 7, 3 ↔ 5) while the position labels stay still. On the "four overs" sentence both scoreboards run over by over together: Team A's total flips 1, 4, 9, 16 and Team B's 7, 12, 15, 16 (`LiveReadoutBoard`, 52 px, teal); at over 4 both show "16" and a hand tag "same total". On "seven" the race replays to over 1 and freezes: Team A "1", Team B "7", ringed in blue, hand tag "after over 1: different". On "order matters" a chip "1, 3, 5, 7 ≠ 7, 5, 3, 1".

### 3. a rule, finite and infinite
> Often a rule gives each term from its position. Say a team scores two n runs in over n. Put in n equals one, and a sub one is two. Then come four, six, eight and **ten**. The rule only needs the position. So to find a sub fifty, put in fifty and get one **hundred**, without listing the first forty-nine terms. If the game stops after five overs, the list stops at ten, its fifth term, so it's a finite sequence. A finite sequence ends at some last term, a sub m. Here m is five. But if the list never stops, two, four, six, eight, ten, and so on forever, it's an infinite sequence. We show that with three dots at the **end**.

Visual: one scoreboard returns at the right (about 620 px, solid), its "OVER" panel stepping with each card. Left two-thirds: a rule chip "aₙ = 2n" (52 px, blue) above an empty five-slot `TermLadder`. On "n equals one" a substitution row "a₁ = 2 × 1 = 2" and the first card drops in as the ball rolls across the grass strip. Cards 4, 6, 8 drop one per number; on "ten" the fifth card. On "position" the rule chip glows; on "hundred" a grey side row "a₅₀ = 2 × 50 = 100" writes beside the ladder with a bracket "no need to list a₆ to a₄₉", then dims. On "stops after five overs" an ink end cap draws after the fifth card and the scoreboard's OVER panel shows "5" with a coded stump-and-bails icon (hand tag "game over"); tag "finite: last term a₅ (m = 5)". On "never stops" the cap lifts away and fades, and the ladder slides left as cards 12 and 14 enter from the right edge and run off it; on "end" "2, 4, 6, 8, 10, …" writes under the ladder with the "…" glowing and a tag "infinite: never terminates".

### 4. partial sums
> Now add the runs up as we go, like the scoreboard does. After one over, the total is S one, just the first term, **two**. S two adds the first two terms: two plus four is **six**. Then the scoreboard shows twelve, twenty and **thirty**. In general, S sub n is the sum of the first n terms. It's called the nth partial sum, a running total. Notice that the totals, two, six, twelve, twenty, thirty, make a new sequence of their own. And each total is the one before it, plus one more over. So S five minus S four leaves just the fifth over's runs: thirty minus twenty is **ten**.

Visual: camera continue into the over ticker (simulation 2, the lesson's main live simulation). The finite ladder 2, 4, 6, 8, 10 moves to the top as a thin row (32 px). Left: a `PartialSumStack` with five column positions labelled grey "S₁" to "S₅" (unit 22 px; columns solid outlines from the first frame). Right: the scoreboard (about 620 px) with `LiveReadoutBoard` (52 px) beside it: "over n" (grey ink), "runs aₙ" (blue), "total Sₙ" (teal). Each over the ball rolls across the grass, the over's block (blue outline, teal fill) drops onto the running column and the scoreboard's TOTAL flips. On "two" column S₁ builds, readout "S₁ = 2". On "six" a copy of the S₁ column slides across and the a₂ block (4) drops on top; readout "S₂ = 2 + 4 = 6". Columns S₃ (12), S₄ (20) and S₅ (30) build faster; on "thirty" the scoreboard reads "30". Definition line on "In general": "Sₙ = a₁ + a₂ + … + aₙ (the first n terms)" (44 px), hand tag "running total". On "new sequence" the five readouts lift into a teal `TermLadder` row "2, 6, 12, 20, 30". On "one more over" the top block of each column pulses in turn. On "ten" columns S₄ and S₅ sit side by side; S₄'s outline overlays the lower part of S₅ and the uncovered top block glows blue, tag "S₅ − S₄ = 30 − 20 = 10 = a₅", hand tag "the jump on the scoreboard is the last over's runs".

### 5. series
> What if the sequence is infinite, like a game whose overs never end? Then the sum of all its terms, a sub one plus a sub two plus a sub three, and so on, is called a series. The partial sums are the steps on the way. For two, plus four, plus six, and so on, the scoreboard just keeps climbing, so this series has no **total**. Some series do settle on a number, and we'll see which ones in a later video. So, S sub n means the first n terms. A series means all of them.

Visual: camera continue. The ladder row at the top gains its "…" again (infinite). Line: "series: a₁ + a₂ + a₃ + …" (44 px) with tag "the sum of all the terms of an infinite sequence". On "steps on the way" the stacks S₁ to S₅ dim to 60% and columns S₆, S₇, S₈ build faster and faster, each taller, while the scoreboard flips 42, 56, 72 and its digits blur; on "total" the last column runs off the top edge of the frame and the scoreboard's TOTAL panel shows "…" (hand tag "keeps climbing: no total"). On "later video" a grey chip "Later: which series settle (limiting sums)". On the last two sentences two chips side by side, 44 px: "Sₙ: the first n terms" (teal) and "series: all of the terms" (ink).

### 6. sigma notation
> Writing long sums out is slow, so we use sigma notation. Take the first team's runs again: one, three, five, seven. This big symbol is the Greek capital letter sigma, and it means add. Underneath, k equals one tells you where to **start**. On top, four tells you where to **stop**. And two k minus one, on the right, is the rule for each term. Each value of k makes one term. Put in k equals one, two, three and four, to get one, three, five and **seven**. Add them up, and the sum is **sixteen**, Team A's score after four overs.

Visual: clear change. Team A's small scoreboard at the right (about 460 px, showing over 0), and at the centre-left the `SigmaBuilder`: "∑" large (160 px) with three dashed slots (below, above, right), solid from the first frame. On "add" the ∑ glows with hand tag "add". On "start" "k = 1" writes into the lower slot in amber, tag "start". On "stop" "4" writes into the upper slot in amber, tag "stop". On "rule" "(2k − 1)" writes into the right slot in blue, tag "the rule for each term". On the next sentence a counter dial "k" (amber, 52 px) ticks 1, 2, 3, 4; at each tick the substitution "2(1) − 1 = 1" (and so on) flashes beside the rule, a blue term card drops into a sum row "1 + 3 + 5 + 7" (52 px) and Team A's scoreboard flips one over; on "seven" the last card lands. On "sixteen" the sum row closes with "= 16" in teal, the scoreboard reads "16", and the whole line reads "∑_{k=1}^{4} (2k − 1) = 1 + 3 + 5 + 7 = 16".

### 7. a sigma that starts later
> The start doesn't have to be one. Here's the sum from k equals three to seven, of k squared. The first term uses k equals three, so it's **nine**. Then come sixteen, twenty-five, thirty-six and **forty-nine**. That's five terms, not seven, because seven minus three is four, plus one for the first term. The total is one hundred and **thirty-five**. In general, the sum from k equals i to j, of a sub k, adds every term from a sub i up to a sub **j**. And k is just a counter. Use j instead, and the sum is exactly the same.

Visual: camera continue: the scene 6 line dims to 30 px and moves up; the scoreboard leaves. The `SigmaBuilder` refills: lower "k = 3", upper "7", rule "k²". On "nine" the counter dial starts at 3 (1 and 2 show greyed on the dial), and the card "9" drops. Cards 16, 25, 36 drop in turn; on "forty-nine" the card 49. On "five terms" the fence picture (simulation 3, `SigmaBuilder` gaps mode): the five k values 3, 4, 5, 6, 7 as amber posts (52 px labels) with four gaps between them, the gaps bracketed "7 − 3 = 4 steps" and the first post ringed "+ 1 for the first" (hand tags); a term counter under the row counts 1 to 5. On "thirty-five" the row closes "= 135" in teal. On "j" a grey general line writes under it: "∑_{k=i}^{j} aₖ = aᵢ + aᵢ₊₁ + … + aⱼ" (44 px), with "i" and "j" in amber. On the last two sentences every "k" in the builder morphs to "j" and back, with "= 135" unchanged and a hand tag "the counter's letter doesn't matter".

### 8. worked example: writing a sum in sigma
> Let's go the other way. A sequence has a sub n equals n squared minus n plus one. Its first five terms are one, three, seven, thirteen and **twenty-one**. Their sum, S five, is **forty-five**. To write S five in sigma notation, swap n for the counter k, start at one and stop at five. So S five is the sum, from k equals one to five, of k squared minus k plus one. That's forty-five **again**, written in one line.

Visual: clear change to the g01 layout. Task strip (44 px): "aₙ = n² − n + 1. Find the first five terms and S₅, and write S₅ in sigma notation." (site Problem 1, wording shortened). Givens card: "rule aₙ = n² − n + 1 (blue); n = 1 to 5 (grey ink)". Left: a `TermLadder` (solid slots) fills with 1, 3, 7, 13, 21, one substitution row at a time at 52 px ("a₁ = 1 − 1 + 1 = 1", …), each replaced by the next; on "twenty-one" the fifth card. On "forty-five" a single teal `PartialSumStack` column builds from the five blocks, readout "S₅ = 1 + 3 + 7 + 13 + 21 = 45" (52 px). On "swap n for the counter k" the rule chip slides into the `SigmaBuilder`'s right slot and its n letters morph to k; "k = 1" drops into the lower slot and "5" into the upper slot (amber). On "again" the framed answer (green, `AnswerFrame`): "S₅ = ∑_{k=1}^{5} (k² − k + 1) = 45". A red slip "∑_{k=1}^{5} (n² − n + 1)" writes small at the right and is crossed (hand caption "the counter is k, not n").

### 9. from words to sigma
> Now write a sum from words. Write the sum of the first ten odd numbers in sigma notation. First, find a rule for the odd numbers. One, three, five, seven: each one is one less than an even number, so the kth odd number is two k minus **one**. Check: k equals one gives one. Next, the start and the stop. The first ten odd numbers means k goes from one to **ten**. So it's the sum, from k equals one to ten, of two k minus one. The last term is two times ten, minus one, which is **nineteen**. And all ten add to one hundred.

Visual: clear change (new case, g01 layout). Task strip: "Write the sum of the first ten odd numbers in sigma notation." (site card 08). A `TermLadder` row of 1, 3, 5, 7 (blue, 52 px) with the even numbers 2, 4, 6, 8 above each card (grey ink, 36 px) and small "− 1" arrows down to it; on "one" the rule chip "kth odd number = 2k − 1" with the check "k = 1: 2(1) − 1 = 1". On "ten" the chip slides into a `SigmaBuilder`'s right slot, "k = 1" drops into the lower slot and "10" into the upper slot (amber). On "nineteen" the row "1 + 3 + 5 + … + 19" writes with the last term ringed and the grey row "2(10) − 1 = 19". On the last sentence the framed answer (green): "∑_{k=1}^{10} (2k − 1) = 1 + 3 + 5 + … + 19 = 100", with a grey tag "total stated now; the shortcut comes in two videos".

### 10. memory aid
> Here's a way to read any sigma. Bottom: start. Top: stop. And the number of terms is the top minus the bottom, plus **one**. From five to nine, that's five terms, not **four**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 620 px, double ink frame, hand-font heading "Memory aid"). Inside: a clean `SigmaBuilder` with amber labels "start" at the bottom and "stop" at the top; the hand-font line writes at 60 px: "Bottom: start. Top: stop. Count: top − bottom + 1." On "one" a small example inside the card: ∑ with limits 5 and 9; amber posts 5, 6, 7, 8, 9 with the four gaps bracketed and the first post ringed. On "four" a red slip "4 terms" writes and is crossed; "5 terms" stays in green. Hold about 2 s.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Evaluate the sum, from k equals two to five, of four k minus three. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Evaluate ∑_{k=2}^{5} (4k − 3)." (sigma typeset at 80 px with its limits). The full question stays on screen. Picture slot: the painted scoreboard (about 360 px) with blank panels, coded labels "OVER" and "TOTAL" and "?" in each (no numbers). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no builder, no dial).

### 12. feedback 1 (brief)
> Start at k equals two: four times two, minus three, is **five**. Then come nine, thirteen and **seventeen**. That's four terms, and they add to **forty-four**. Twenty-eight is wrong. It starts at k equals one, and stops one term **early**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "start k = 2", "stop 5", "rule 4k − 3" ("k = 2" and "5" underlined in the card as they are used). Rows, 52 px: "k = 2: 4(2) − 3 = 5" (on "five"); on "seventeen" the term row "5 + 9 + 13 + 17" with the grey row "5 − 2 + 1 = 4 terms". On "forty-four" the green framed answer "44". On "early" a red slip "1 + 5 + 9 + 13 = 28" writes and is crossed (hand caption "started at k = 1"). Hold about 1 s.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A sequence has a sub n equals ten minus two n. Find S four, and write S four in sigma notation. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A sequence has aₙ = 10 − 2n. Find S₄, and write S₄ in sigma notation." The full question stays on screen. Picture slot: an empty four-slot `TermLadder` with grey position labels "n = 1" to "n = 4" and an empty teal column outline labelled "S₄ = ?" (no values). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 14. feedback 2 (brief)
> The first four terms are eight, six, four and **two**. S four adds all four of them, to make **twenty**. In sigma notation, it's the sum, from k equals one to four, of ten minus two **k**. Two is wrong. That's a sub four, the fourth term, not the sum of the first four **terms**.

Visual: the card shrinks to the top. `GivensStrip`: "aₙ = 10 − 2n", "S₄: the first 4 terms" ("aₙ = 10 − 2n" and "S₄" underlined as used). The four-slot ladder fills 8, 6, 4, 2 (on "two"); on "twenty" a single teal stack column builds from the four blocks with readout "S₄ = 8 + 6 + 4 + 2 = 20". On "k" the green framed answer "S₄ = ∑_{k=1}^{4} (10 − 2k) = 20". On "terms" a red slip "S₄ = 2" writes and is crossed (hand caption "that is a₄"). Hold about 1 s.

### 15. handoff
> So a sequence is an ordered list, a sub n is the term in position n, S sub n adds up the first n terms, and sigma writes a sum in one line. Now look at a stack of chairs. One chair is eighty centimetres tall. Two stacked are eighty-six, and three are ninety-two. Each chair adds **six**. What happens when every step is the same?

Visual: the four key ideas show as small chips at the top ("aₙ", "Sₙ", "series", "∑", 34 px), then fade on "Now look". Board clears: at the left, the painted stacking chairs `ma12-stacking-chair-side-v1.png` drawn as three nested copies (each new chair drawn behind the stack, offset up by the plate's measured 6 cm step at 4 px per cm; the stack about 370 px tall), with a coded height scale in cm (0 to 120) beside it; at the right a `TermLadder` 80, 86, 92 (blue, 52 px) with grey positions "n = 1, 2, 3" ("number of chairs"). On "six" amber "+6" arcs draw between neighbouring cards and matching amber brackets "+6 cm" between the chair tops. A chip "Next: the same step every time" and a "?" chip. No formula, no "arithmetic" word. Hold about 2 s. This is f02's opening frame; scene 16 returns to it silently after the notes.

### 16. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Sequence: an ordered list. aₙ = term in position n.
- Finite: ends at a last term. Infinite: never stops.
- Sₙ = a₁ + a₂ + … + aₙ (a running total).
- Series: the sum of all terms of an infinite sequence.
- ∑_{k=i}^{j} aₖ adds aᵢ up to aⱼ.

Memory aid (framed card, right half of the notes screen, as in scene 10): *Bottom: start. Top: stop. Count: top − bottom + 1.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (1 s) to scene 15's frame exactly (the three nested chairs with the height scale, the ladder 80, 86, 92 with "+6" arcs, "Next: the same step every time" and "?"). This is the final frame and f02's opening frame.

## Teaching checks

- **Does it explain causes?** Why sequences: a scoreboard changes in steps, once an over, and its totals make a second sequence (1). Why the order matters beyond the final total: two teams with the same runs in reverse have different scoreboards until over 4 (2). Why order matters: positions stay and values move when a list is reversed, so a₁ changes (2). Why a list is finite or infinite: whether it has a last term (3). Why the partial sums form a sequence, and why S₅ − S₄ = a₅: each stack is the previous stack plus one block (4). Why 2 + 4 + 6 + … has no total: its stacks grow without limit (5). Why sigma gives exactly those terms: start, stop and the rule (6). Why 7 − 3 + 1: four steps between five values (7, 10). Why 2k − 1 makes the odd numbers: each is one less than an even number (9).
- **Misconceptions addressed:** n confused with aₙ (2); order doesn't matter (2); Sₙ confused with aₙ (4; A2 crossed); a series means a partial sum (5); wrong term count (7, 10; A1 crossed); the counter letter changes the sum (7).
- **One idea at a time:** one new word per scene from 2 to 7; the sigma builder lights one part per cue (6); one counter value per card (6, 7); scenes 8 and 9 run their tasks in turn, each replacing the last.
- **Video makes it easier:** the student watches values travel while positions stay and two scoreboards disagree over by over (2), sees each stack build from the one before and the top block left over (4), sees the stacks run off the frame (5), and watches the counter feed the rule one value at a time (6, 7). Each motion is the evidence for the next sentence.
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
| Handoff (Revision 2: chairs) | 80, 86, 92 cm; +6 | 15 |

Revision 2 additions (the anchor; every site value above is unchanged):

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Team A runs and totals | runs 1, 3, 5, 7; totals 1, 4, 9, 16 | 2, 6 |
| Team B (reverse) | runs 7, 5, 3, 1; totals 7, 12, 15, 16 | 2 |
| Over ticker (aₙ = 2n) | runs 2, 4, 6, 8, 10; scoreboard 2, 6, 12, 20, 30; overflow 42, 56, 72 | 1, 4, 5 |
| Chair stack (handoff) | 80, 86, 92 cm; +6 cm per chair | 15 |

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

Revision 2 additions (checked with Python, 7 Nov): running totals of 1, 3, 5, 7 are 1, 4, 9, 16; of 7, 5, 3, 1 are 7, 12, 15, 16 (equal only at over 4); 80 + 6(n − 1) for n = 1, 2, 3 gives 80, 86, 92.

## Memory aid check

- **"Bottom: start. Top: stop. Count: top − bottom + 1."** Original. Meaning, as said in scene 10: the lower limit is the first counter value, the upper limit the last, and the number of terms is one more than their difference. Assumptions checked: whole-number limits with the counter stepping by 1 (always true for this notation in the course); the upper limit is at least the lower limit (`ci291b45f0` has j > i). The "+1" has its cause shown in scene 7 (four gaps between five values) before the aid is stated. It helps a new case: ∑ from 10 to 30 has 21 terms. Introduced after the cause (7) and the uses (6 to 9).
- **Considered, not used:** a "machine" metaphor for the rule (fine but adds a picture without a cause); "S for sum, a for a single term" (true, but A2's crossed chip carries that contrast directly).

## Narration length estimate

Revision 2 (7 Nov 2026), counted by script with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,063 characters**, 16 scene headings (Revision 1, recounted the same way: 5,622). Characters per scene (in order): 480, 724, 615, 562, 465, 514, 508, 402, 512, 168, 100, 223, 127, 263, 325, 75.

At 13.3 characters per second the speech is about 456 s. Holds and settling: two 10 s countdowns 20 s; short holds (memory aid 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the two-innings race (2), the over ticker and run-off (4, 5) and the counter dial (6, 7) 25 s; the key-notes scene 45 s (about 96 s in all). Total **about 552 s (9 min 12 s)**, inside the 5,500 to 7,000 character band and 18 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 3's "So to find a sub fifty, put in fifty and get one hundred, without listing the first forty-nine terms." (keep the grey row on screen); scene 2's "The three is the position, the third over, and the five is the value, the runs." (keep the hand tags). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12f01` (route math-a12-f01). Suggested explainer folder `src/explainer/lessons/math-a12-f01` and build folder `docs/production/claude-pm/lessons/m-a12f01` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, position-and-value, rule-finite-infinite, partial-sums, series, sigma-notation, sigma-later-start, write-in-sigma, words-to-sigma, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): i14's last frame continues into scene 1 (the number row settles into cards; camera continue); 1 to 2 clear change (new list); 2 to 3 clear change (new rule); 3 to 4 camera continue (the ladder moves up); 4 to 5 camera continue (the stacks keep growing); 5 to 6 clear change; 6 to 7 camera continue (the builder refills); 7 to 8 clear change (new case); 8 to 9 clear change (new case); 9 to 10 camera pull back to the clean builder; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes scene, 45 s in all (1,350 frames in `config.ts`). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12f01-learning-review.md`, `science_check` = `checks/m-a12f01-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `biology/b6a-tennis-ball-v1.png` (a tennis ball; the wrong sport, and f07 uses it), `biology/m8-energy-drink-can-plain-v1.png` (a drink can; not a sport object), `physics/phys-y11-surface-floor-v1.png` (a grey floor strip; not grass). No scoreboard, cricket ball, grass strip or stacking chair exists.

Need (painted, new; see the Codex asset brief): `ma12-cricket-scoreboard-v1.png`, `ma12-cricket-ball-v1.png`, `ma12-cricket-grass-strip-v1.png`, and `ma12-stacking-chair-side-v1.png` (scene 15; also f02's anchor, briefed once here and in f02).

Coded (studio kit): the scoreboard's labels and flip numbers (drawn on the plate's measured blank panels), ladders, stacks, the sigma builder and dial, posts and gaps, givens cards, answer frames, slips, question cards and their pictures, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `PlateReadout`, `LiveReadoutBoard`, `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`.

Additions the build needs (the sequence strand's first kit pass; f02 to f08 reuse them):
1. **`TermLadder`, `PartialSumStack` and `SigmaBuilder`** (the Revision 1 contracts below are kept) in studio sizes and role colours: 52 px cards and readouts, grey-ink position labels at 28 px or more, a `labelPrefix` option ("over n = "), and a hook on `PartialSumStack` that fires a callback per built column (so a lesson can flip a plate readout in step).
2. **`PlateReadout` flip mode** (small): the existing readout drawn into a plate's measured blank panel, with a short flip animation when the value changes (the scoreboard's OVER and TOTAL).
3. **`SpriteStack`** (new, shared with f02, f03, f06): copies of one plate sprite placed by a list of offsets, at native aspect, with a z-order rule (each new copy drawn behind or in front), used here for the three nested chairs of scene 15.

## Codex asset brief (Maths A12 F01, a cricket scoreboard; plus the chair shared with f02)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-f01.md`. Paint after the learning review and maths check of this design pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style (match `biology/b4-car-yellow-v1.png` and `physics/phys-y11-lift-car-v1.png` in palette, line weight and finish); at least 8 per cent clear margin unless a plate is stated to be a tile; no text, labels, letters, numbers, logos, brand names, sponsors' boards, people, hands, faces, sky, glow or ground shadow beyond the plate's own ground patch. Never stretch to fit; keep the native aspect ratio.

1. `ma12-cricket-scoreboard-v1.png` (1600 × 1200 px): a traditional freestanding wooden cricket scoreboard, seen straight on: a white-painted timber frame on two posts with a small pitched roof, and **two large blank dark-green number panels** (an upper wide panel for the total and a lower panel for the over), each panel completely blank, with no digits, letters or painted words anywhere. A little grass at the base. Codex reports, in file pixels, the rectangle of each blank panel [x0, y0, x1, y1] (the build draws the coded labels and numbers inside them).
2. `ma12-cricket-ball-v1.png` (600 × 600 px): a red leather cricket ball, slightly worn, with its raised stitched seam visible across the front; no maker's stamp or lettering. Codex reports the centre and radius in file pixels.
3. `ma12-cricket-grass-strip-v1.png` (2400 × 300 px): a strip of mown cricket-ground grass seen from the side at a low angle, with faint mowing stripes, **tileable horizontally** (left and right edges join seamlessly; exempt from the side margins); transparent above the grass with at least 8 per cent clear margin there. No stumps, pitch markings, people or boundary signs.
4. `ma12-stacking-chair-side-v1.png` (1000 × 1400 px, portrait): one plain moulded plastic stacking chair (a school-hall chair, mid-blue seat and back, grey steel legs), seen exactly side-on, **painted so that copies nest when offset straight up**: the seat and back are open and the legs splay so that a copy placed 6 cm higher (see below) sits naturally inside it when drawn behind. The chair's real height is 80 cm. Codex reports, in file pixels: the floor line (foot y), the chair's top y, the pixels per cm (from the 80 cm height) and the vertical offset in pixels that equals 6 cm. Supply a two-copy and a five-copy nesting check image (copies offset by that amount, each new copy behind) with the plate.

Report inspection on the paper background (`#f6f1e7`) at 400 px and 820 px wide for plate 1, 90 px for plate 2, a two-copy tiling check for plate 3, and 370 px tall for plate 4, plus the alpha checks and anchor points. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-f01-provenance.json`.

### Coded part contracts (Revision 1, kept)

The Revision 1 contracts for `TermLadder`, `PartialSumStack` and `SigmaBuilder` are kept unchanged (scene references now follow the Revision 2 script):

1. **`TermLadder`.** A horizontal row of value cards on position slots. Props: `values`, `positions` (grey labels "n = k" under the slots), `dropAt`, `glow`, `reorder` ({to, at, duration}: cards travel along arcs while the position labels stay fixed, with a linked readout), `endCap` ({after, at, liftAt?}), `runOff` ({extra, at}), `arcs` ({from, to, label, at}[]), `cardWidth`, `gap`, `colour`. No computation: values are author inputs. At most six cards visible.
2. **`PartialSumStack`.** Columns of stacked blocks, one block per term. Props: `terms` (positive only in this version), `columns`, `buildAt`, `labels`, `readouts` (checked against the block totals; throws on a mismatch), `pulseTop`, `difference` ({upper, lower, at}), `overflow` ({extraTerms, at}), `single`. Checks: 2, 4, 6, 8, 10 → 2, 6, 12, 20, 30; 1, 3, 7, 13, 21 → 45; 8, 6, 4, 2 → 20.
3. **`SigmaBuilder`.** A large ∑ with lower, upper and right slots. Props: `start`, `stop`, `counter`, `rule` and `ruleFn`, `revealAt`, `dial` (with `showSkipped`), `cardsAt` and `totalAt`, `count`, `gaps` (posts and gaps), `morphCounter`, `fillFrom`. Checks: ∑_{k=1}^{4} (2k − 1) = 16; ∑_{k=3}^{7} k² = 135; ∑_{k=1}^{5} (k² − k + 1) = 45; ∑_{k=1}^{10} (2k − 1) = 100; ∑_{k=2}^{5} (4k − 3) = 44; ∑_{k=1}^{4} (10 − 2k) = 20; an error when stop < start.

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

## Revision 2 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, the six syllabus points, the learner question, the site's numbers, both attempts, the cause chain and the memory aid are unchanged. Programme decision 5 (coded only) is withdrawn by the visual standard; the Revision 1 lines that say "no painted plates" are superseded.

- **Anchor and why:** a cricket scoreboard. Runs per over are a sequence whose position is the over, and the scoreboard total after each over is exactly the partial sum Sₙ, so the anchor carries order, finite and infinite, running totals, Sₙ − Sₙ₋₁ = aₙ (the scoreboard's jump) and a first sigma (Team A's score after four overs). Sport, with no players drawn; distinct from every root-decision context and from i01 to i07's likely contexts.
- **Simulations:** the two-innings race (same runs, reverse order; totals differ after every over and meet at 16); the over ticker (ball, falling blocks, flipping scoreboard and `LiveReadoutBoard` "over n", "runs aₙ", "total Sₙ"; it runs off the frame for the series); the sigma counter dial with posts and gaps.
- **Colour roles:** term values (runs) blue; positions (over number) grey ink; partial sums (total) teal; sigma start, stop and counter amber; answer green; mistake red.
- **Plates:** new `ma12-cricket-scoreboard-v1.png`, `ma12-cricket-ball-v1.png`, `ma12-cricket-grass-strip-v1.png`, and `ma12-stacking-chair-side-v1.png` (scene 15 and f02's anchor; briefed here once). No reused plates.
- **Narration changes (not voiced):** scenes 1 to 6 (the scoreboard; the hook's money sentence removed; site numbers unchanged) and scene 15 (the chair stack replaces 3, 7, 11, 15, 19 as the handoff). Scenes 7 to 14 and 16 keep their Revision 1 text; bold cues in 7, 8 and 12 now sit on whole words.
- **Counts:** 5,622 → 6,063 characters (both recounted as the sum of scene strings; Revision 1 stated 5,637 with joining spaces); about 524 s (old 60 s notes hold) → about 552 s with holds (notes 45 s), 18 s under the cap.
- **Key notes:** five short one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on i14 Revision 2's final frame (unchanged list −1, 0, 9, 32); the final frame is now the three-chair stack with "+6" arcs, which f02 Revision 2 opens on (both edited together).
- **Kit additions:** studio-size `TermLadder`, `PartialSumStack` (with a per-column callback) and `SigmaBuilder`; a flip mode for `PlateReadout`; `SpriteStack` (shared with f02, f03 and f06).
