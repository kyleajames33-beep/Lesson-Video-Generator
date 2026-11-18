# Maths S12 i11 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i11.md`, "Which depreciation method loses value faster, and how does a spreadsheet compare them?" Source SHA256 `700d3b18092e6e8b4dd7eafdd6f938bb38980b518ac06f2520f00482dbf42220`.

Written design reviewed (narration, visual descriptions, spreadsheet, chart, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i09 and i10: both depreciation formulas; i05 and a04b: a two-column spreadsheet with a chart) as a Mathematics Standard student starting Year 12, Standard 1 and Standard 2 alike. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

This is a strong comparison video. The hook sets up the likely wrong answer ("You might say declining balance, because twenty per cent of forty thousand is eight thousand ... But that's only the first year"), the table is read row by row with "written off" given its plain meaning, and the yearly-loss bars give the real cause: declining balance's losses are "twenty per cent of a smaller value", dip under the $6,000 line from year 3, so straight-line "is losing more each year, catching up". "Same value, not same loss" is said and crossed twice, the stop at zero is contrasted with "eighty per cent of something is never zero", and one edited number moving the crossing to years 8 to 9 earns "Check the actual values". Standard 1 gets the table, the given graph and the spreadsheet with no algebra (ruling 30). The final frame matches ruling 31 and i12's design opens on it. Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`): straight-line 40,000 to 4,000 and −2,000 at year 7, zero at 6.67 years; declining balance 32,000, 25,600, 20,480, 16,384, 13,107.20, 10,485.76, 8,388.61; losses 8,000, 6,400, 5,120, 4,096, 3,276.80; the order changes between years 3 (22,000 > 20,480) and 4 (16,000 < 16,384); with D = 4,000, years 8 (8,000 > 6,710.89) and 9 (4,000 < 5,368.71); A1 $7,372.80, year 4, losses 3,600, 2,880, 2,304, 1,843.20; A2 $5,000 a year, the crossing between 5 and 6 (23,000 > 22,580.50; 18,000 < 19,419.23), $14,362.46 against $8,000. All correct.

## Findings

1. **Should fix, attempt 2 and feedback 2 (the given graph cannot be read to the values asked).** A2's graph has gridlines every $10,000, but part (b) needs the straight line's end value, $8,000, which sits between gridlines and is not labelled, and feedback 2 says the curve reads "about fourteen thousand four hundred" at year 8, a precision no one can get from $10,000 gridlines. A Standard 1 student, for whom the given graph is the syllabus route, will either guess D or think they misread. Fix. Add minor gridlines every $2,000 (labels still every $10,000), so $8,000 sits on a line and the year-8 curve reads "about $14,000"; feedback 2 says "about fourteen thousand", with the grey chip "calc: $14,362.46" kept. Alternatively, label the line's end point "$8,000" on the card's graph. Students should be able to answer every part from the graph as printed.

2. **Should fix, scene 5 (the cell that turns itself into 0).** "On 'reaches zero' the grid shows B8 '4000' and B9 '−2000' in grey, then B9 changes to '0'." The site's formula =40000-6000*A2 gives −2000 at year 7 and will keep giving it; a student who builds the sheet, as the video asks, will see −2000 and think they made a mistake. Fix. Leave B9 at "−2000" and cross it in grey (not red, since it is not the student's slip), with the hand tag "the formula keeps going; the model stops at $0"; the chart's blue line still stops at (6.67, 0). The narration already says "A value can't go below zero, so the line stops there" and needs no change. Students should know the stop at zero is a modelling decision, not something the spreadsheet does.

3. **Optional, scene 4 (why the flip waits until year 4).** Declining balance's losses fall below $6,000 in year 3, but the values only change order at year 4, and a sharp student will ask why. A gap readout under the grid answers it in one line: "declining balance lower by: $2,000, $2,400, $1,520, then higher by $384", ringing as straight-line catches up. No narration change is needed; "catching up" already says it.

4. **Optional, scenes 2 and 5 (the formulas and the chart selection).** As in i05: tag the B formula "V₀ − D × n" and the C formula "V₀ × (1 − r)ⁿ" in grey under the formula bar, so the cells visibly match i09 and i10; and select the year column with B and C before inserting the chart, so the x-axis shows years 0 to 7 in a real spreadsheet app.

## Joins

i10 to i11 matches: scene 1 opens on the van with "$40,000" and the blue and olive method chips. i11 to i12 matches ruling 31 and the decisions file exactly (the e-bike, the swing tag with "$3,000" and "buy now, pay later?", the grey "What things are worth: done" thumbnail, "Next: the real cost of borrowing"), with no payment option, rate or fee shown, and i12's design opens on it.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's table (with "?" and no shading) and A2's unlabelled graphs give nothing away. Each asks four things in 10 s, which "Pause here to answer." covers. Feedback 1 (about 30 s) gives the value, the formula, the year, the reason from the shrinking losses and the crossed 0.2; feedback 2 (about 28 s) gives the curve's reason, D, the crossing's meaning and the year-8 comparison, and crosses "same amount". A delivery van, a café's espresso machine and a minibus are real, fair business assets; the ATO choice of methods is cited in the design, and "the rules and prices change" is said once.

## Key notes and length

The five notes are short and useful, and the memory card's key line ends "Check the values, not a rule", which keeps its condition (declining balance's first loss larger than D). About 507 s with holds, 63 s under the cap.

No speech, design edits, builds or commits were made.
