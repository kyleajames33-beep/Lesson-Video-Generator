# Maths S12 i16 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i16.md`, "Why is a credit card a reducing balance loan, and what do its fees and interest-free period mean?" Source SHA256 `6cffca9a1b1592f79e602c6db72288ed22fa9f20a4b03709b87640303fc3dc28`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i13: interest on the balance owing, the period table; i12: comparing on cost; Year 11 m03: fees) twice: as a Standard 2 student arriving from i15, and as a Standard 1 student arriving from i14 who has never seen i15 (ruling 30). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

The design answers "why is a card a reducing balance loan" with the i13 table and one new column, which is the clearest possible proof: interest on what's owed, repayments reduce it, new purchases add to it. The rate comparison is fair (one month's interest on the same $2,000 at four RBA rates, about 3 times a home loan and 2 times a personal loan) and crosses the month-against-year slip. Fees are taught by their triggers, so "you can usually avoid it" follows. The interest-free scene is the best beat: the purchase marker slides from day 1 to day 29 and the free days fall from 55 to 26, then a part payment cracks the bracket. The responsible line is stated once, with numbers. It relies on nothing from i15 (ruling 30): "Unlike a car loan" is generic, and the table is i13's, which both courses saw. Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`): $35.00, $1,835.00, $32.11, $1,517.11; $36.23, $22.48, $17.32, $11.75 (ratios 3.08 and 2.09; 21.74 ÷ 12 = 1.81); the unused F8 18.91% month $31.52; 55 and 26 days; A1 $72.00; A2 $87.46, $50.00, $29.17 and the slip $1,049.50. All correct.

## Findings

1. **Should fix, scene 5 ("You must pay the whole closing balance by the due date").** This is the video's key condition, but "closing balance" is spoken here for the first time without its meaning; the plain meaning is only in a chip that appears on the same word. A Standard 1 student hearing it may think "closing balance" is the minimum or the last purchase. Fix, narration: "You must pay the whole closing balance, everything the statement says you owe, by the due date." The chip stays. About 3 s. Students should understand that the condition is paying everything owed at the statement date, not most of it, which A1 (b) then tests.

2. **Optional, scene 2 ("They're the same as a loan's, with one more").** i13's table had a "Balance plus interest" column that this table drops, so a student comparing the two sees one fewer as well as one more. Say "They're the loan table's columns, with new purchases added."

3. **Optional, scene 1 ("Most adults have one").** That is not clearly true in Australia and adds nothing to the reasoning. Say "Lots of adults have one."

## Joins

i15 to i16: scene 1 opens on i15's final frame exactly (the card plate, the empty table with "New purchases" ringed, the chips). i14 to i16 (Standard 1): i14's right panel shows the same card plate and the same table, smaller, so the Standard 1 viewer recognises the picture. i16 to i17a: the television with "TV: $2,000 on the card", "19.99% a year", "not paid in full by the due date" and the broken-bracket timeline with 30 amber ticks is i17a's stated opening frame, with no amount shown.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1 shows the card's terms in full with "Fees are invented for this question", and A2's three empty bars give nothing away. Each feedback gives the answer, the reason and one crossed slip ("no interest: she paid most of it"; "5,000 × 0.2099 = $1,049.50 a month"), about 28 s and 25 s. A first credit card, overseas accommodation and a car loan are real, fair anchors; the four rates are dated RBA F5 (October 2026) and F8 (September 2026) figures, shown with a source line, and "these rates change" is said. The monthly 21% ÷ 12 table is labelled, with "Most cards actually work it out by the day, and that's next video" (ruling 39).

## Key notes and length

The five notes cover the three content points, and note 5 keeps the WHOLE-balance condition. About 497 s with holds, 73 s under the 570 s cap.

No speech, design edits, builds or commits were made.
