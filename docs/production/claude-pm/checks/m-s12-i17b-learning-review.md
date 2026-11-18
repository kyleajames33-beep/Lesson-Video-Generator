# Maths S12 i17b Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i17b.md`, "What does a credit card statement tell us, and what does paying only the minimum cost?" Source SHA256 `a41bdbf31f2cf6b96988a7d88c8209c1f5c5f5f413ff7776f1f75e49266c001e`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i16: closing balance, due date, the interest-free condition, late fee; i17a: daily interest; i13: interest on the balance) as a Mathematics Standard student starting Year 12, and again as a Standard 1 student (the point is shared word for word). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass** (0 blockers, 0 should fix, 2 optional).

This design explains why paying only the minimum takes years, in two steps a Standard student can hold. Scene 4: of the first $60, $50 is interest and only $10 comes off ("That's why the minimum feels like it's doing nothing"). Scene 5: the minimum is 2% of the balance, "so as the balance shrinks, the minimum shrinks too, and the debt crawls", shown by a readout falling from $60 towards the $25 floor while the curve flattens into a 29-year tail. The statement is read line by line with a running sum, the minimum is computed from its stated rule, and "The minimum doesn't stop the interest" is said plainly. The corrected site example (MS-22: 25 payments and $3,679.80, not "about 24 months") crosses the "2.5 times faster" slip with its cause, and scene 7's growing balance (a payment below the month's interest) is a real trap, not a scare. Responsible framing is numbers, not a lecture. Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`; interest rounded to the cent monthly; minimum max($25, 2% of the balance after interest)): the statement sums to $3,000.00 and the minimum is $60; minimum only, 347 payments (28 years 11 months), $12,409.15, interest $9,409.15; 3-year payment $111.49, total $4,013.64; $60 rows $50.00 / $10.00, $49.83 / $10.17, $49.66 / $10.34; $60 fixed, 109 payments, last $24.24, $6,504.24, $3,504.24; $150 fixed, 25 payments, last $79.80, $3,679.80, $679.80; saving $2,824.44; 109 ÷ 2.5 = 43.6; the trap $36.67 and $11.67; A1 $52.80, 381 payments (31 years 9 months), $12,879.52, $10,239.52, $99.45, $3,580.20, $9,299.32 (the pack's replaced 2-year line, $135.65 and $3,255.60, also checks); A2 $31.50 and $1,806.50. All correct.

## Findings

1. **Optional, scene 2 (why there is interest on the statement).** A student fresh from i16 may ask why $47.60 of interest was charged at all. Add a clause: "Interest of forty-seven dollars sixty was charged, because last month's balance wasn't paid in full."

2. **Optional, scene 5 and A1's extract (warning box layout; ruling 41).** Real Australian statements usually set the minimum repayment warning out as a small table (each month you pay / you will pay off the balance in / and pay an estimated total of), often with an "estimated savings" figure. If Codex's check under ruling 41 confirms that layout, draw the box that way (two rows: "Only the minimum: 28 years 11 months, $12,409.15"; "$111.49: 3 years, $4,013.64"), so the video matches what students will see; the numbers already check. Ruling 41 also asks Codex to confirm the legal source: the warning comes from the credit regulations, and the cited ASIC instrument number should be confirmed or replaced.

## Joins

i17a to i17b: scene 1 opens on i17a's final frame exactly (the plates, the blank statement, "Minimum payment" ringed), and the statement becomes the live object. i17b to i18: the warning box small with "28 years and 11 months" ringed and the car on a hoist with "car repair: $6,000" is i18's stated opening frame, with no comparison worked.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's statement extract is complete and asks only for working from it. Each feedback gives the answer, the reason and one crossed slip ("interest = $12,879.52"; "the balance falls by $25"), about 29 s and 23 s. A monthly card statement and a $1,800 card balance are real, fair anchors; 20% and 20.99% sit under RBA F5 (October 2026, 21.74%), and "card rates change" is said once. Monthly ÷ 12 runs are labelled with "the card really adds it daily (i17a), and the pattern is the same" (root decisions open question 4).

## Key notes and length

The five notes are short and keep the two conditions apart (minimum avoids a late fee; only the full balance avoids interest). About 500 s with holds, 70 s under the 570 s cap.

No speech, design edits, builds or commits were made.
