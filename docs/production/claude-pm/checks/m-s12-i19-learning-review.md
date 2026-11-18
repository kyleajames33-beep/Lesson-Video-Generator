# Maths S12 i19 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i19.md`, "What is an annuity, and how does its balance build period by period?" Source SHA256 `46ce84c73e5cc15eb7b8be1ec9bac8e7ddf251444dde27b63da60cd9616d531b`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i13: the period table and its spreadsheet; i02: compound interest per period) as a Mathematics Standard 2 student starting Year 12 (Standard 2 only). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass** (0 blockers, 0 should fix, 1 optional).

This is a good design. It says what an annuity is in plain words before any table ("an account with regular, equal payments, and interest each period"), shows both syllabus forms side by side, and then reuses i13's loan table with "Repayment" crossed out and "Contribution" written in, so nothing new has to be learned except a sign. The question students always ask, why year 1 earns nothing, is answered by the timing ("The first two thousand only arrives at the end of the year"), and the deposit tower makes the result visible: the first block grows tallest, the last has no interest layer. The spreadsheet scene explains the link and adds a zero-rate check that a student can use on any model. The withdrawal table gives the reason it drains slowly ("The interest keeps topping it up"). Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`): $0 / $2,000; $100 / $4,100; $205 / $6,305; $315.25 / $8,620.25 (and 2,000 × FV factor (5%, 4) = $8,620.25); the allowance $400 / $7,900, $316 / $5,716, $228.64 / $3,444.64, $137.79 / $1,082.43; $2,754.90 would empty it; A1 $90 / $3,090, $185.40 / $4,775.40, $286.52 / $6,561.92, interest $561.92; A2 $400 / $6,200, $310 / $4,310, $215.50 / $2,325.50; the site hook $2,453.51. All correct.

## Findings

1. **Optional, scene 5 ("set out like the lesson notes").** A viewer who finds this on YouTube may not have the notes. Say "set out the way you'd write it in an exam". The same wording appears in i17b scene 6 and i22 scene 7 ("the example from the lesson notes"); "a classic example" works there.

## Joins

i18 to i19: scene 1 opens on i18's two-route frame and fades the Standard 1 panel and the house, leaving the pay envelope and the question chip about saving the same amount every year. i19 to i20: the four-row table with "$8,620.25" ringed, ghost rows "years 5 to 10?" and a blank "Future value interest factors" page is i20's stated opening frame, with no factor shown.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's empty table and A2's table with only the $8,000 and the withdrawals filled give nothing away. Each feedback gives the answer, the reason and one crossed slip ("year 1 interest $90"; "year 1: (8,000 − 2,200) × 0.05"), about 26 s and 27 s. Summer-job savings, a gift for course fees and TAFE fees are real, fair anchors with no gambling (the site's lottery hook is excluded, MS-32); 5% and 4% are labelled against RBA F4 (October 2026, bonus savers 5.05%), and "rates change" is said once. No annuity formula appears (ruling 33).

## Key notes and length

The five notes are the model in order, with the zero-rate check. About 493 s with holds, 77 s under the 570 s cap.

No speech, design edits, builds or commits were made.
