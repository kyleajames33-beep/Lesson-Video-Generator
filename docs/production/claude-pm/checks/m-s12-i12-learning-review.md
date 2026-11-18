# Maths S12 i12 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i12.md`, "What do buy now pay later, short-term and long-term loans really cost?" Source SHA256 `fd68fce0e91fcaf5aa140a8487c3bfd759af40b0e26041ce55824fc1b97579ec`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 m03 and m04: BNPL fees, buying on terms, comparing totals; i01 and i02: interest as the price of borrowing) as a Mathematics Standard student starting Year 12, and a second time as a Standard 1 student (the video is shared). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

This is a good opening to borrowing. "Total paid" and "extra cost" are defined before the comparison, and the seesaw bars in scene 3 make the trap visible: the repayment shrinks ($250, $141.22, $66.73) while the amber cost grows ($0, $389.28, $1,003.80). Scene 4 gives the real reason a longer loan costs more at the same rate ("Interest is charged on what you still owe, every month you owe it"), with balances after a year ($1,589.45 against $2,534.18) and the shaded "dollars owed × time" carrying it without a formula. BNPL's condition is stated plainly ("The zero holds only while every instalment is paid on time"), fees are named without a lecture, and scene 6 turns it into one question a student can use. Every step is a given repayment times a count, then a subtraction, so the Standard 1 route is complete. Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`): $141.22 and $66.73 at 1% a month; totals $3,389.28 and $4,003.80; interest $389.28 and $1,003.80; ratio 2.579; balances after 12 payments $1,589.45 and $2,534.18; after 24, $2,009.27; the 5-year run's 61st payment $0.27; 800 × 0.18 × 0.5 = $72; A1 $132.02, $71.89, $1,584.24, $1,725.36, $144.24, $285.36, $1,460; A2 $376.59, $210.67, $1,038.16, $2,112.16, $1,074.00; the memory-aid case $166.07, $111.22, $5,978.52, $6,673.20. All correct.

## Findings

1. **Should fix, Decisions "Rates and rules" (ruling 32: the BNPL regulation source).** Scene 5 says "Since June twenty twenty-five, BNPL is regulated as credit, so there's a credit check", and the chip says "regulated as credit since June 2025 (ASIC)". The cited ASIC link is a news item inviting feedback on draft regulatory guidance, which does not itself show the start date. Fix: cite a dated page that states the commencement (ASIC's or Moneysmart's page saying BNPL providers need an Australian credit licence from 10 June 2025, with the read date), and keep the chip wording. Codex re-verifies in the maths check. Students should be able to trust that the one legal fact in the video is current and sourced.

2. **Optional, scene 3 ("about two and a half times").** The narration says "about two and a half times the two-year loan's interest" while the grey row shows "1,003.80 ÷ 389.28 ≈ 2.6". A careful student hears 2.5 and reads 2.6. Say "more than two and a half times", or show "≈ 2.58".

3. **Optional, scene 3 (task strip).** The 44 px task strip repeats all three options in full, and the givens card repeats them again ("A: 12 × $250", "B: 24 × $141.22", "C: 60 × $66.73"). Shorten the strip to the task ("A $3,000 e-bike: find the total paid and the extra cost for each way to pay.") and let the givens card hold the options. The same applies to i18 scene 3.

## Joins

i11 to i12 (ruling 31): i11's final frame, as written in `lessons/math-s12-i11.md` scene 12 and `checks/root-decisions-maths-s12-i01-i11.md`, is the e-bike `ms12-ebike-v1.png` at about 1,100 px with the swing tag ("$3,000", "buy now, pay later?"), the grey "What things are worth: done" thumbnail and the chips "Next: the real cost of borrowing" and "?". i12 scene 1 opens on exactly that frame, fades the thumbnail and "Next" chip on the first sentence (which the i01 to i11 decisions file allows), and its first line picks up i11's last question. The two files agree. i12 to i13: i12's final frame (the e-bike, "borrowed: $3,000", "1% a month", "$141.22 a month for 24 months", the empty table header, "where does each $141.22 go?") is i13's stated opening frame. Housekeeping: the description's "Builds on" line should name i11's title, "Straight-Line vs Declining Balance Depreciation", and i11's "Next" line should become this video's title (root decisions open question 10).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, with nothing answer-bearing. A1 asks for three parts including a justified recommendation, more than 10 s allows, but "Pause here to answer." covers that. Each feedback gives the answer, the reason, short working and one crossed slip ("two missed: still $1,440"; "same rate, so the same cost"), about 28 s and 29 s. The e-bike for work or TAFE, a gaming console and solar panels are real, fair anchors; 12% a year is fairly labelled against RBA F8 (September 2026, 10.39% for new fixed personal loans) and "fees and rates change" is said once.

## Key notes and length

The five notes are short and usable, and note 4 keeps BNPL's condition. About 494 s with holds, 76 s under the 570 s cap.

No speech, design edits, builds or commits were made.
