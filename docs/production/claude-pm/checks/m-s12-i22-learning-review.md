# Maths S12 i22 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i22.md`, "How do the starting amount, payment, rate and term change an annuity's value?" Source SHA256 `7f2173f0b2d82bf226dbb37cbc067cd1782c7e73277145e48a2126a984f6e76e`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i19: the spreadsheet annuity; i20 and i21: future value, a single sum earns for the whole term; i02: a single sum grows by (1 + r)^n) as a Mathematics Standard 2 student starting Year 12 (Standard 2 only). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

This design teaches by experiment, which is what the content point asks: one input changed at a time in a live spreadsheet, a results log that keeps every case, and split bars that put "what went in" beside "what came out". Each result gets its cause in a sentence: doubling the payment doubles every deposit "so the interest each one earns doubles too"; doubling the term makes the interest five times as big because "the early dollars now sit there for twice as long, and the interest they've earned keeps earning more"; a head start "earns interest for the whole ten years, just like the single sum last lesson". Scene 7 makes why starting earlier matters concrete (two savers, 25 and 35: nearly double the result for $24,000 more paid in), drawn as account books, never people. The halved rate (ruling 39) is realistic. Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`): $16,387.93, $32,775.87, $46,204.09, $13,974.14, $20,026.73; 2,000 × 1.005¹²⁰ = $3,638.79; the unused 1% case $23,003.87; interest $4,387.93, $8,775.87, $22,204.09 (5.06 times), $1,974.14 (0.45 times), $6,026.73; the slip $32,775.86; $398,298.15 and $200,903.01; A1 (c) $3,638.80; A2 $69,306.13, $24,581.90, $44,724.23. All correct.

## Findings

1. **Should fix, key note 3 ("Longer time or higher rate: more than in proportion").** Read after note 2 ("Double the payment: the value exactly doubles"), note 3 says the value grows more than in proportion with the rate. Scene 5 showed the opposite for the value: halving the rate took the value from $16,387.93 to $13,974.14, only 15% less; it was the interest that fell by more than half. A student who writes note 3 will predict wrongly on a rate question. Fix: "Longer time or higher rate: the interest grows more than in proportion." In scene 8, keep "interest on interest makes the difference bigger than you'd expect" and add "in the interest" if time allows. Students should be able to say that the rate and the time act on the interest, while the payment scales everything.

2. **Optional, scene 7 ("Here's the example from the lesson notes").** Say "Here's a classic example", as YouTube viewers may not have the notes (see the i19 review).

## Joins

i21 to i22: scene 1 opens on i21's final frame exactly, and its first lines repeat i21's last idea (the starting amount matters) before filling the four inputs. i22 to i23: the blank payslip with "Super (12%)" ringed, the SUV with "save for it, or borrow?" and the house key small is i23's stated opening frame, with no amount shown.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's five-case table (32 px, six columns) is dense but complete, and every demand is answerable from it. Each feedback gives the answer, the reason and one crossed slip ("(c) $2,000"; "Alex has $18,000 more"), about 31 s and 25 s; feedback 1 is at the top of the brief range. A first job's savings and two friends saving from 18 and 28 are real, fair anchors; 6% and 3% are labelled against RBA F4 (October 2026), and "rates change" is said once. No formula is shown (ruling 33).

## Key notes and length

Notes 1, 2, 4 and 5 are right and short; apply finding 1 to note 3. About 524 s with holds, 46 s under the 570 s cap.

No speech, design edits, builds or commits were made.
