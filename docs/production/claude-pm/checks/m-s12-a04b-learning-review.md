# Maths S12 a04b Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a04b.md`, "How do we find break-even, and profit or loss, in a spreadsheet?" Source SHA256 `735da63bccfb47e5dab3de4e05a6fce98b8edc9b5cab6f4ca160e8d6cd45d300`.

Written design reviewed by tracing it from its stated entry knowledge (a04a: C, R, break-even, profit = R − C, round up; Year 11 Standard f08 and l05, with the plain meanings standing in for students who have not used formulas) as both a Standard 2 and a Standard 1 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

The spreadsheet is built from empty cells, which is what Standard 1's "to model the problem" asks for, and every symbol is explained as it is typed ("=" so the cell calculates, "*" for times, A2 as "the number in cell A2"). The sign change in the profit column is a clear, visible test, and scene 4's "a table only traps it between two rows, like a bracket" is the right idea for why the step is refined. The $135 edit, with every row recomputing and the profit landing on exactly $0 at 130, is a genuine reason to use a spreadsheet. Recalculated with SymPy 1.14: cost, revenue and profit rows at 100 to 160; profits at 140 to 150; 144 gives 18,740 and 18,720, 145 gives 18,825 and 18,850; 6500/45 = 1300/9 ≈ 144.44; at $135, C = R = 17,550 at 130; food van rows; stands 800/9 ≈ 88.89, 88 gives 1,064 and 1,056, 89 gives 1,067 and 1,068. All correct.

## Findings

1. **Should fix, scene 3 (filling down is shown, not explained).** "Fill the formulas down, so every row does the same calculation for its own number of tickets" does not say how a row knows its own number. That is the one idea a Standard student needs to trust the spreadsheet and to write formulas in A2. The visual clicks B5 to show "=6500+85*A5", but nothing points at the change. Fix, after "for its own number of tickets": "When you fill down, the A two in each formula changes to A three, A four, and so on, so every row uses its own number of tickets." Visual: on "A three, A four" the cell reference in B3 and B4's formulas rings briefly, then B5 as planned. Students should understand why one formula serves every row, and why one edit in scene 5 changes them all.

2. **Should fix, scene 5 and feedback 2 (the check is algebra only, again).** The check "a hundred and thirty n equals six thousand five hundred plus eighty-five n. That's forty-five n equals six thousand five hundred" is a04a's Standard 2 route, and feedback 2 repeats it ("nine n equals eight hundred"). The pay-back route serves both courses and also explains scene 3's "+450" (ten tickets at $45 each), which the narration states without a reason. Fix. Scene 5: "We can check with break-even from last time. Each ticket brings in a hundred and thirty dollars and costs eighty-five for catering, so it pays back forty-five dollars. Six thousand five hundred divided by forty-five is about a hundred and forty-four point four." Keep "130n = 6500 + 85n, 45n = 6500" as a grey Standard 2 row. Scene 3, after "adds four hundred and fifty dollars": "because each ticket pays back forty-five." Feedback 2: "Each stand pays back nine dollars, so break-even is eight hundred divided by nine, about eighty-eight point nine."

3. **Optional, attempt 1 ("Between which two rows").** The expected answer is "between 60 and 70 meals", but "which two rows" invites "rows 3 and 4". Word it "Between which two numbers of meals is the break-even point?" on the card and in narration.

4. **Optional, scene 5 (graph window).** The graph runs to $21,000, but after the $135 edit revenue at 160 tickets is $21,600, off the top. Use $12,000 to $22,000.

## Joins

a04a to a04b matches exactly. a04b to a05 matches: the formal's columns A and D with "+450" arrows and "adds $450 each row", the phone with "day 0: 100 views" to "day 3: 800" and grey "?" arrows, and "each day: + ? or × ?" are a05's opening frame; no ratio is stated.

## Practice and feedback

Both cards keep every demand visible through the 10 s countdown. A1's table has no profit column and no shading, so it is not answer-bearing; A2's grid is empty. Feedback is brief with one crossed slip each (about 26 s and 28 s). The formal, food van and phone stands are realistic, everyday contexts; the site numbers in original wording are fine (root's open question 6: keep).

## Key notes and length

The five notes are a usable spreadsheet recipe. About 466 s with holds; the fixes add about 15 s. No absolute references are needed (root's open question 5: leave them out).

No speech, design edits, builds or commits were made.
