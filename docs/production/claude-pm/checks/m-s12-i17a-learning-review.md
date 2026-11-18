# Maths S12 i17a Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i17a.md`, "How is credit card interest charged by the day?" Source SHA256 `e50b04f1af56abc52bedfb4c60ba2c757212d36300e4f90ceeab207162ab6799`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i02: FV = PV(1 + r)^n and interest = FV − PV; i16: the interest-free period is lost if part-paid; a04b and i13: fill down) as a Mathematics Standard student starting Year 12, and again as a Standard 1 student (calculator route; the spreadsheet scene is tagged Standard 2). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

The design shows how daily interest builds before it uses a formula. Scene 2 shares the yearly rate over 365 days, then shows one day's $1.10 being added so that "tomorrow's interest is charged on the new total, two thousand and one dollars ten", and the second sliver comes out a hair thicker. Scene 3 then says why i02's formula applies ("each day multiplies the balance by the same number, one plus the daily rate"), so the formula is earned, not dropped in. Simple interest is named fairly, with the reason it is a few cents less ("simple interest never charges interest on interest") and the plain instruction that the question says which method (MS-20 corrected). The ÷ 12 slip is crossed with "twelve is for months". Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`): one day $1.10; day balances $2,001.10, $2,002.19, $2,010.98, $2,022.02, $2,033.12; interest $33.12; simple $32.86 (monthly ÷ 12, not used, $33.32); days 45 and 55 $49.89 and $61.14; the car service $656.02 and $16.02 (simple $15.83); A1 $25.50 and the slip $9,245.38; A2 $907.45, $7.45, day 1 $900.53. All correct.

## Findings

1. **Should fix, scene 3 against scene 7 and the key notes (the letter r changes meaning).** In scene 3 the strip writes "FV = PV(1 + r)ⁿ" and then "r = 0.1999 ÷ 365 (per day)", so r is the daily rate. The framed card and key notes then write "I = P(1 + r ÷ 365)^days − P", "Balance after n days = P(1 + r ÷ 365)ⁿ" and "B3 = B2*(1 + r/365)", where r is the yearly rate. A student who copies the notes and takes r from scene 3 divides by 365 twice and gets about 9 cents instead of $33.12. Fix: in scene 3 write "daily rate = 0.1999 ÷ 365" and "n = 30 (days)" in place of the r line, keeping "FV = PV(1 + r)ⁿ" with the grey chip "i02: r is the rate per period"; in the card, notes and spreadsheet note, write "yearly rate ÷ 365" in words, or define it once on the card: "r = yearly rate as a decimal". Students should be able to use their book notes on a new card question without a hidden change of meaning.

2. **Optional, feedback 1 ("minus the one eight five oh").** Say "minus the eighteen fifty", as money is said elsewhere.

## Joins

i16 to i17a: scene 1 opens on i16's final frame exactly (the television card, the broken bracket with 30 ticks, the "?"), and the first sentence picks up "not paid in full". i17a to i17b (ruling 29): the television and card plates beside a blank `CreditCardStatement` with only its labels and an empty "Minimum repayment warning" box, "Minimum payment" ringed, is i17b's stated opening frame.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A2's extract shows B3's formula and B16's value but no interest. A2 is answerable by a Standard 1 student from scene 6. Each feedback gives the answer, the reason and one crossed slip ("1,850 × 0.1999 × 25"; "interest = $907.45"), about 28 s and 26 s. A television and a car service on a card are real, fair anchors; 19.99% and 21.49% are labelled against RBA F5 (October 2026) and F8 (September 2026), and "card rates change" is said once. No effective annual rate appears (ruling 33).

## Key notes and length

The five notes are the method; apply finding 1 to notes 3 and 5. About 478 s with holds, 92 s under the 570 s cap.

No speech, design edits, builds or commits were made.
