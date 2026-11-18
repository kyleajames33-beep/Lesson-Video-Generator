# Maths S12 i20 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i20.md`, "How does a table of interest factors give an annuity's future or present value?" Source SHA256 `50f8d6226fb22d77fac09098515532ce285a5e9b255a015861ec59dcb2a9f8b2`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i19: an annuity's table, payments at the end of each period, the withdrawal annuity; i04: rate per period and number of periods) as a Mathematics Standard 2 student starting Year 12 (Standard 2 only). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 0 optional).

Scene 2 is the best teaching move in the annuity run: i19's own table is run again for one dollar, and its last cell, 4.310125, becomes the factor "4.3101" that looks like a random printed number. That is why the table of factors works, shown inside ruling 33 (ruling 39 accepts it). The 5-cent check against i19 explains rounding, the worked example crosses the "factor × total" slip with its cause ("The factor already counts all ten payments"), the monthly case says how to get the rate per period and the number of periods, and scene 7 makes the FV or PV choice from the wording. Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`): FV factors 4.3101, 12.5779, 25.4320, 54.0978, 81.6697; PV factors 3.6299, 51.7256, 44.9550; every cell of the attempts' extract; $8,620.20, $25,155.80 (exact $25,155.79), $2,543.20, $9,074.75, $25,862.80 (exact $25,862.78); A1 $13,524.45 (exact $13,524.46) and $1,524.45; A2 $18,881.10 (exact $18,881.12) and the slip $34,301.27. One author note is 2 cents out and not on screen: (10,000 − 9,074.75) × 1.04⁴ = $1,082.41, not $1,082.43 (the $1,082.43 on screen is i19's table, which is right).

## Findings

1. **Should fix, scene 6 (the present value is stated, not shown).** The FV factor is earned by running a table; the PV factor is only asserted ("the single amount today that's worth the same as all the payments"), with a grey chip about i19's leftover. "Worth the same today" is the hardest idea in the annuity run for a Standard student. Show it the same way, visual only: when "$9,074.75" lands, run i19's withdrawal table once from it, four rows at 40 px: "$9,074.75 + $362.99 − $2,500 = $6,937.74", "$6,937.74 + $277.51 − $2,500 = $4,715.25", "$4,715.25 + $188.61 − $2,500 = $2,403.86", "$2,403.86 + $96.15 − $2,500 = $0.01", with a grey tag "1 cent: the factor is rounded" and a hand tag "exactly pays all four". (Checked in `work/brief-review-standard-i2/suggested.py`.) No narration time is needed: it plays under "How much would you need today to pay exactly that, and end at zero?". Students should see that the present value is the starting amount that the withdrawals use up exactly.

2. **Should fix, attempt 1 and feedback 1 (the crossed slip cannot happen with this table).** Feedback 1 crosses "Using a six per cent column", but the supplied extract has only 0.5% and 1% columns, so no student can make that slip from it (the same fault as a03's unreachable units trap). Fix: cross the slip this table invites, the wrong table: red slip "PV column: 250 × 42.5803 = $10,645.08" (caption "saving towards a future amount: FV"), narration "Using the present value column is the slip. This is saving towards a future amount." Same length. A2 then crosses the opposite choice, which is exactly scene 7's lesson.

3. **Should fix, scene 13 (the handoff must follow ruling 40).** The final frame's card reads "5.4% a year, monthly", which needs the unusual 0.45% column that ruling 40 removes from i21. Change the card and the narration to the rate root sets for i21. If root takes the suggestion in the i21 review (6% a year, compounded monthly, the 0.5% column used here in scenes 5 and 6), the line becomes "at six per cent a year, compounded monthly", and the frame stays i21's opening frame.

## Joins

i19 to i20: scene 1 opens on i19's final frame exactly, and the blank factor page tilts forward on "multiplication". i20 to i21: the pay envelope, the house key, the goal card and "contribution × factor = future value" with "$50,000" in place and a violet "?" is i21's stated opening frame, with no factor shown, once finding 3 is applied to both designs.

## Practice and feedback

Both cards keep the full worded question and the same four-column extract on screen through the 10 s countdown; nothing gives the answer away. Each feedback gives the answer, the reason (which table, rate per month, number of months) and one crossed slip, about 30 s and 24 s. The summer job, a first-home move and a car loan budget are real, fair anchors; 6% is said to be "a little above today's best savings rates", against RBA F4 (October 2026). No series or closed-form formula appears (ruling 33).

## Key notes and length

The five notes are the method and the choice, and note 5 keeps the rounding caveat. About 515 s with holds, 55 s under the 570 s cap; finding 1 adds no speech.

No speech, design edits, builds or commits were made.
