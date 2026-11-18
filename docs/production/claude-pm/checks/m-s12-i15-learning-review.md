# Maths S12 i15 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i15.md`, "How do we find the repayment, amount owing, total paid and time to repay a loan?" Source SHA256 `2e7a20adad8e50ed997bed422672e709a90e099893adde954935d8b7400d0711`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i13: period tables and spreadsheets; i14: a term from a spreadsheet or graph; i12: total cost; i04: rate per period) as a Mathematics Standard 2 student starting Year 12 (Standard 2 only, ruling 30). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

The four questions on one SUV loan give the video a clear spine, and each tool is used for the question it suits: the repayments-per-$1,000 table for the repayment (with "twenty-five lots of a thousand" said, and the half-a-million slip as a sense check), stacked blocks for the total, the spreadsheet row and a graph reader for "still owing" (with the row 2 slip crossed), and the first zero row for the time, where "Only fifty-four dollars fifty-eight is left to pay, so the last payment is smaller" gives the reason. Scene 7's three look-alike phrases, each with its own number, is a useful exam move. Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`): every cell of the teaching table (6.0% to 7.8%, 3 to 5 years) and of A1's table (7% to 9%, 2 to 5 years); 25 × 19.8957 = 497.3925, so $497.39 (the exact repayment also rounds to $497.39); $29,843.40 and $4,843.40; rows $150.00 / $24,652.61, $147.92 / $24,303.14, $145.82 / $23,951.57; after 12 payments $20,690.95; after 24, $16,061.23 (64%); $0.21 left after 60; at $600, 49 payments with row 49 opening $54.25, interest $0.33, last $54.58, interest $3,854.58; A1 $439.43, $21,092.64, $3,092.64; A2 $13,648.00, $13,293.54, $9,609.53, 36 payments, last $95.10, $15,845.10, $1,845.10. All correct.

## Findings

1. **Should fix, scene 5 and its chip (the reason given for "slow at first" is not true for this loan).** The narration says "That's because the early repayments are mostly interest", the chip says "i13: early repayments are mostly interest", and the Decisions and teaching checks repeat it. On this loan the first repayment is $150.00 interest out of $497.39, about 30%, so most of it already pays off the loan; i13 did not teach "mostly interest" either (its first e-bike payment was $30 of $141.22). A student who checks row 1 on screen will see the claim fail, on the exact point that explains why the balance falls slowly at first. Fix, narration: "That's because the early repayments carry the most interest, so less of each one comes off the loan. In month one, three hundred and forty-seven dollars comes off. Near the end, almost all of the four ninety-seven does." Visual: on "less of each one" ring row 1's interest cell ($150.00) and show a teal chip "off the loan: $347.39 in month 1"; replace the grey chip with "i13: the interest shrinks, so more comes off each month". Optionally add the row "24 payments: $11,937.36 paid, $8,938.77 off the loan" under the 40% and 64% bars. (Checked in `work/brief-review-standard-i2/suggested.py`.) About the same length as the sentence it replaces. Students should understand that the balance falls slowly early because each early repayment loses more to interest, not because it is mostly interest.

2. **Optional, scene 1 ("Every loan question in the exam is one of these four").** That overclaims (i14's extra-repayment questions and i16's card questions are loan questions too). Say "Most loan questions in the exam are one of these four."

3. **Optional, scene 5 ("The spreadsheet from last lessons has every row").** Say "The spreadsheet from the reducing balance video has every row", which names the video a student can rewatch.

## Joins

i14 to i15: scene 1 opens on i14's two-route frame and fades the right panel; the SUV card and the four chips then become the four questions. i15 to i16 (ruling 30): the final frame repeats i14's right panel full width (the card plate and the table with "New purchases" ringed), so i16 opens on one picture for both courses and needs nothing from this video.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, with A1's table and A2's spreadsheet extracts supplied; nothing gives the answer away (A2's extract states the final payment, which is the item's normal form). Each feedback gives the answer, the reason and one crossed slip ("interest = $21,092.64"; "36 × $450 = $16,200"), about 28 s and 30 s. A small SUV for a commute to a first full-time job, a kitchen renovation and a camera kit are real, fair anchors; 7.2% for a secured car loan is plausibly labelled against RBA F8 (September 2026) and "rates change" is said once.

## Key notes and length

The five notes match the four questions and the smaller last payment. About 495 s with holds, 75 s under the 570 s cap.

No speech, design edits, builds or commits were made.
