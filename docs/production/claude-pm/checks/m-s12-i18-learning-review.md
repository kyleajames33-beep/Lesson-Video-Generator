# Maths S12 i18 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i18.md`, "Credit card or personal loan: which suits a short, medium or long-term goal?" Source SHA256 `ffd9025ccfab62eca504ca6cadd65e020f410e704d25fa552a9c7236a109e87b`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i12: compare on total cost; i16: rates, fees, free days; i17a: daily interest; i17b: the minimum's cost; Year 11 m09: an emergency fund) twice: as a Standard 2 student going on to i19, and as a Standard 1 student for whom this is the last money video before r01 (rulings 28 and 30). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

The design starts from the goal, not the product, and says honestly that the short, medium and long cut-offs are a convention. The race in scene 3 is a fair test (same $6,000, same $282.44 a month) and the picture explains the result: both bars take the same bite, the card's amber cap is thicker, so the loan is empty at month 24 while the card still owes $763.54. Scene 4 stops "personal loans are always better" with the case where the card wins (paid in full, $0), scene 5 names the open limit as a risk and points a home to a home loan after a deposit, and the decision card turns it into three questions a student can reuse. Responsible framing ("saving first, or an emergency fund, avoids interest altogether") is plain and brief. Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`): $282.44, $6,778.56, $778.56; the card at 1.75% a month on $282.44, 27 payments, last $224.53, interest $1,567.97, balance after 24 payments $763.54; difference $789.41; flights $31.33; the unused $180 and $120 runs (51 and $3,083.75; 120 and $8,383.57); A1 $188.29, $4,518.96, $518.96, 27 payments, last $149.82, $5,045.36, $1,045.36, $526.40; the pack's drill (46 payments, $1,315.72). All correct.

## Findings

1. **Should fix, scene 3 (the crossed slip does not fit the test just shown).** The board has just paid the card and the loan the same $282.44 a month, then crosses "the card's minimum is smaller, so the card is cheaper". No minimum appears in this comparison, so a student asks "what minimum?". The slip that this race answers is "same repayment, so the same cost". Fix, narration: "Saying the same repayment means the same cost is the slip. The card's higher rate takes a bigger bite of interest every month, so compare the total interest." Visual: red slip "same repayment, so the same cost" crossed (caption "the card's interest bite is bigger"); keep the hand tag "compare total interest" and the grey chip "i12: total cost, not the repayment". Same length. Students should be able to say why equal repayments still give unequal costs.

2. **Should fix, feedback 1 (money that is misheard).** "The loan is twenty-four times one eighty-eight twenty-nine, minus four thousand, five hundred and eighteen ninety-six in interest" will be heard as "minus four thousand five hundred and eighteen ninety-six", and the card line has the same shape ("minus four thousand, one thousand and forty-five thirty-six"). Fix: "The loan pays twenty-four times one eighty-eight twenty-nine. Take away the four thousand, and the interest is five hundred and eighteen ninety-six. The card pays twenty-six payments plus the last one. Take away four thousand, and its interest is one thousand and forty-five thirty-six." About 3 s more; feedback stays near 32 s.

3. **Optional, scene 3 (task strip).** As in i12, the 44 px strip restates the whole problem and the givens card repeats it. Shorten the strip to "$6,000 for a car repair: compare a personal loan and a card on the same $282.44 a month."

## Joins

i17b to i18: scene 1 opens on i17b's final frame exactly and its first lines pick up "a debt that lasts years". i18 to i19 and r01 (rulings 28 and 30): the split frame is labelled in words and on screen ("Standard 2 next: annuities"; "Standard 1 next: ratios", with "Money: done"), and the narration tells each course where it goes. i19 opens on it and fades the right panel; i23's final frame repeats the right panel (the jug) full width, so both courses meet r01 on one picture. The r01 teaser stays provisional (ruling 42).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1 states the card's final payment, which the item needs, and A2's empty timeline gives nothing away. Each feedback gives the answer, the reason and one crossed slip ("the card is cheaper because there are no fees"; "a personal loan for the first home"), about 29 s and 23 s. A car repair, furniture for a first flat, flights, a used car and a first home are real, fair anchors; card about 21%, personal loan 10% to 14% and home loan about 7% are dated against RBA F5 (October 2026) and F8 (September 2026), and "example rates, and rates change" is said once.

## Key notes and length

The five notes are the decision rules, short enough to copy. About 476 s with holds, 94 s under the 570 s cap.

No speech, design edits, builds or commits were made.
