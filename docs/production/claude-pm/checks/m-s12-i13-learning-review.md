# Maths S12 i13 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i13.md`, "How does a reducing balance loan change from one period to the next?" Source SHA256 `3c39604ee26b9f162ddffee1875fab20ee5be6791556cada4e187b6a34745b7b`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i12: total paid; i02: compound interest per period; a04b: cells, formulas, fill down; Standard 2 also i04) as a Mathematics Standard student starting Year 12, and again as a Standard 1 student who is given the monthly rate and models three rows. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass** (0 blockers, 0 should fix, 3 optional).

This is a strong design. It answers exactly the question i12 leaves on screen, on the same e-bike, so the student never meets a new loan while learning the mechanism. "Balance" and "reducing balance loan" get plain meanings before the table; each month is three spoken moves with matching hand tags ("1% of what's owed", "add it on", "take the repayment off"); the closing balance visibly flies down to the next row. Scene 4's four equal violet bars with shrinking amber and growing teal slices are the right picture for "the repayment never changed, the split did", and scene 5 says why the balance falls faster each month ("The interest on top gets thinner, the repayment stays the same size"). The spreadsheet scene explains the link, not just shows it ("Month two opens with month one's closing balance, so B three is equals E two"), and crosses the classic =B2 slip with its consequence ($100 interest every month). The Standard 1 route is clean: row 4 is introduced by "If you're doing Standard 2" and tagged. Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`): the e-bike rows ($30.00, $28.89, $27.76, $26.63; $3,030.00, $2,917.67, $2,804.21, $2,689.62; $2,888.78, $2,776.45, $2,662.99, $2,548.40), the splits ($111.22 to $114.59), 24 payments clearing it with a last payment of $141.22 and $389.28 interest, the month 20 interest $6.85; the tractor rows to $17,984.95, 37 payments, last $333.60, interest $1,933.60; at $700, 31 payments, last $635.15, interest $1,635.15, saving $298.45; A1 and A2 rows; the handoff's 315.7615; the memory-aid case. All correct.

## Findings

1. **Optional, scene 5 (why the balance falls slowly at first).** The design says the balance falls "a little faster each time", which is the right cause, but on a 2-year loan at 1% the effect is small (from $111.22 to $114.59 off the debt), so a student may not see why long loans barely move early. One sentence ties it to i12's picture: "On a long loan it's even clearer. After a year, i12's five-year loan had taken eight hundred dollars in repayments, but only four hundred and sixty-six came off the debt." (12 × $66.73 = $800.76; $3,000 − $2,534.18 = $465.82; checked in `work/brief-review-standard-i2/suggested.py`.) About 8 s against a 13 s margin, so take it only with the named reserve trim in scene 7, or leave it to i15 (see the i15 review, finding 1).

2. **Optional, scene 7 ("a smaller last payment").** Standard 1 students skip i15, where the smaller last payment is explained. Add four words: "a smaller last payment of three hundred and thirty-three dollars sixty, all that's left".

3. **Optional, scene 6 (board load).** The g01 board carries a task strip, a givens card, the tractor badge, a 5-column grid, the formula bar, a framed answer, a grey chip and the crossed slip. Fade the givens card once the grid shows B2, D2 and the rate in C2, so the formula bar and the link arrow are the brightest things on screen when "B three is equals E two" is said.

## Joins

i12 to i13: i12's final frame (the e-bike at about 900 px with "borrowed: $3,000", "1% a month", "$141.22 a month for 24 months"; the empty six-column table header; "where does each $141.22 go?", "Next: reducing balance loans", "?") is scene 1's opening frame, and the empty header becomes the table the video fills. i13 to i14: the camper trailer with "$15,000", "0.8% a month", "$315.76 a month for 5 years", the small balance graph and the dashed "+$50?" is i14's stated opening frame, with no saving shown.

## Practice and feedback

Both cards keep the full worded question and the empty table or formula extract on screen through the 10 s countdown; A2's extract shows formulas only. A1's "three rows, Standard 2: four" serves both courses. Each feedback gives the answer, the reason, the rows and one crossed slip ("month 2 interest: 12,000 × 0.0075 = $90"; "interest $60 every month"), about 30 s each. A tinny and trailer, a fridge and washing machine and a farm's second-hand tractor are real, fair anchors; 1% and 0.5% a month are called example rates against RBA F8 (September 2026), and "Rates change all the time" is said once.

## Key notes and length

The five notes are the method in order and end with the spreadsheet link. About 557 s with holds, 13 s under the 570 s cap; finding 1 would use most of that, so take it only with a trim, and measure on the voiced take.

No speech, design edits, builds or commits were made.
