# Maths S11 f08 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-f08.md`, "How does a spreadsheet apply one formula to a whole table of cases?" Source SHA256 `c560f27cb2a4e6a100f928b23818ec4da1ed584606fff40720bb14c42cfa81c0`.

Written design reviewed by tracing it from its stated entry knowledge (f01's substitution and order of operations; f04b's stopping-distance model; f04a's ÷ 3.6; Stage 5 tables) as a Year 11 Mathematics Standard student who may never have used a spreadsheet formula. Checked against rulings 88 to 95 and the pack `pre-design/maths-standard/math-s11-f08.md`; the final frame checked against section 1 of `checks/root-decisions-maths-s11-f01-f08.md` and scene 1 of `lessons/math-s11-l01.md`. No built preview, playback or human listening is claimed; `SpreadsheetGrid` does not exist yet (ruling 90). An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

"=B2*C2+D2 is T = qc + f with cell names" ties the spreadsheet to the algebra the strand has built, the two views of one cell (value in the cell, formula in the bar) answer the question students most often have, and the fill-down sweep with each row number ringed shows relative references without the jargon. The cents-in-a-dollars-column error is a realistic slip, and the capstone reuses f04b's model so the strand closes on something familiar. Ruling 95's final frame is applied exactly. Recalculated with SymPy 1.14 (14 checks for f08): orders 58, 55, 36, 44; edit to 15 bags 70; misread 12 × (4 + 10) = 168; cents error 2,610; capstone reaction 12 to 33, braking 16 to 121, stopping 28, 40, 54, 70, 88, 108, 130, 154 (all inside the final frame's 0 to 160 axis); 88 ÷ 28 ≈ 3.1; A1 $77.95; A2 25 m; the final frame's 10 to 34 and l01's warm-up c = 10, m = 4. All correct.

## Findings

1. **Should fix, narration (ruling 95: say "times").** Root ruled that the narration says "times", with one line saying "the star means times in a spreadsheet"; the design says "star" 13 times. Replacements: scene 2, "Times is a star, divide is a slash, and a power is a little hat. So the total for row two is equals B2 star C2 plus **D2**." becomes "In a spreadsheet, the star means times, a slash means divide, and a little hat means a power. So the total for row two is equals B2 times C2 plus **D2**." Scene 3, "the text, B2 star C2 plus D2" becomes "the text, B2 times C2 plus D2". Scene 4, "B3 star C3 plus D3 ... B4 star C4 plus D4" becomes "B3 times C3 plus D3 ... B4 times C4 plus D4". Scene 6, "equals zero point three star A2" becomes "equals zero point three times A2", and "equals zero point zero one star A2, hat two" becomes "equals zero point zero one times A2, to the power two". Attempt 1, "Cell E2 contains equals B2 times C2 plus D2." Feedback 1, "equals B3 times C3 plus **D3**. Keeping B2 times C2 plus D2 in E3 is the slip." Feedback 2, "So it's equals B2 divided by three point six, times one point **five**." and "In C3, it's equals B3 divided by three point six, times one point **five**." Keep feedback 2's slip line "Typing an x for times is the slip. A spreadsheet needs the **star**." (it names the symbol; root to confirm as the second "star"). The screen keeps "*", "/" and "^" throughout. Update author note (e) and open decision 1. Students hear the formula as they would say it and see the symbol they must type.

2. **Should fix, scenes 6 and 11 (codenames spoken aloud).** Scene 6, "Remember f04b's road-safety model, D equals ..." becomes "Remember the road-safety model for stopping distance, D equals ...". Feedback 2, "At sixty, that's twenty-five metres, just like f04b." becomes "At sixty, that's twenty-five metres, just like the stopping-distance video." The grey chips may keep their codenames.

3. **Optional, scene 6 (the P-plate badge beside speeds to 110 km/h).** Hide the coded "P" on the capstone's car badge (see f04b finding 4), or use the stopping-strip car without its plate.

## Joins

f07 to f08: scene 1 opens on f07's final frame exactly. f08 to l01: scene 12's spoken text matches section 1 word for word, and the frame (header "MATHEMATICS STANDARD", the pancake plate, the small grid "=A2*4+10" with 0 to 6 bags and 10 to 34, the straight blue line meeting the axis at 10, the amber dotted curve through the eight capstone points, the three chips, no gradient or intercept labelled) is the frame l01 scene 1 opens on and reads c = 10 and m = 4 from. The join holds.

## Practice and feedback

Both cards keep every part of the question on screen through the countdown, and the picture-slot grids show E2, E3, C2 and C3 empty. Feedback 1 (about 19 s) and feedback 2 (about 23 s) each give the answer and one crossed slip (the row staying at 2; "x" for times).

## Key notes and length

The notes give the cell name, the symbols, the T = qc + f link, fill down and one unit per column. Narration 4,742 characters by this reviewer's count, about 447 s with holds, 123 s under the cap; finding 1 changes the count by a few characters only. No em dash.

No speech, design edits, builds or commits were made.
