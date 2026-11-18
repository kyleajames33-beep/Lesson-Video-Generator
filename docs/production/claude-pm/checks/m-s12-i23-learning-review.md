# Maths S12 i23 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i23.md`, "How do annuities answer superannuation, savings and loan decisions?" Source SHA256 `39ae37c4aaa9bfd735c7bb7685210926e01353a7fca3474e8971d29cf81ff7fd`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i22: time compounds; i20 and i21: FV and PV factors; i15: the SUV loan; Year 11 e-strand: gross pay, pay periods) as a Mathematics Standard 2 student starting Year 12 (Standard 2 only; the last money video). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

The three decisions are real and each closes in a sentence with numbers. Super is introduced from a payslip, with the two facts students most often get wrong said plainly: the 12% is "paid on top of your pay, not taken out of it", and the fund takes 15% contributions tax, so $255 of $300 arrives (MS-28's principle applied). "Regular, equal payments into an account that earns interest. That's an annuity" names the link. The 5.4% return is labelled an assumption after fees (ruling 39), "locked away until retirement age" is one plain sentence, and the 20-year against 30-year columns recall why starting earlier matters. Scene 5's "the loan amount is the present value of its repayments", checked by landing i15's repayment back on $24,999.87, is a satisfying close, and the responsible line ("the most a lender will offer isn't the most your budget can comfortably repay") is plain. Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`): $300 and $255; $238,358.74 after 520 fortnights, $132,600 paid in, $105,758.74 interest; $496,588.02 after 780 (2.08 times); the unused $939,463.17 and the site's $280,422.05; saving $600 at 0.4%: below $25,000 after 38 deposits, $25,269.37 after 39, $23,400 paid in, $1,869.37 earned; PV factor (0.6%, 60) 50.2621 and $24,999.87; A1 $54.00, $2,808.00, $2,386.80, 13.1808, $31,459.93; A2 $32,670.37, $2,329.63, $39,000; the memory-aid case 37.9740 and $15,189.60. All correct.

## Findings

1. **Should fix, scene 4 ("Compare the totals", but the totals are never given).** The crossed slip tells students to compare the totals, but the narration and board give only "$23,400 paid in" and "interest $4,843.40", and "Borrowing gets the car now, for about forty-eight hundred dollars more" leaves "more than what?" open (more than the price, not more than saving). A student will compare $4,843.40 with $0 and miss that saving also earned $1,869. Fix, narration after "in interest": "So saving, you pay in twenty-three thousand four hundred, and interest does the rest. Borrowing, you pay twenty-nine thousand eight hundred and forty-three dollars forty. Having the car three years sooner costs about sixty-four hundred dollars." Board: a row "save: $23,400 paid in; borrow: 60 × $497.39 = $29,843.40" and "difference ≈ $6,443" (green framed), replacing "for about forty-eight hundred dollars more". (29,843.40 − 23,400 = 6,443.40; the $269.37 left over after buying is ignored, which "about" covers.) About 6 s more, within the 63 s margin. Students should be able to state the save-or-borrow decision as two totals and a waiting time.

2. **Optional, scene 1 visual (the house key on the borrowing card).** The "How much can I borrow?" card sits over the house key, but scene 5 works the SUV loan. Put the SUV badge on that card too, or say in scene 5 "the same idea sets a home loan limit", so the key has a referent.

## Joins

i22 to i23: scene 1 opens on i22's final frame exactly and lays the three decision cards over its three objects. i23 to r01 (ruling 28): the grey strand thumbnails with "Money: done" and the water jug with its cordial layer, as on i18's right panel, so Standard 1 (from i18) and Standard 2 (from here) meet r01 on the same picture. The teaser stays provisional until r01 is designed (ruling 42).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, each giving the factor it needs; A1 carries "A simplified yearly model; real super arrives each payday." Each feedback gives the answer, the reason and one crossed slip ("$54 comes out of Kai's pay"; "$650 × 60 = $39,000"), about 30 s and 27 s. A first job's payslip, a car and a borrowing budget are real, fair anchors; the super guarantee (12%, 2026-27), Payday Super (from 1 July 2026) and the 15% contributions tax are cited to dated ATO pages, the rates to RBA F4 and F8, and "These rates and rules change" is said once. No logarithm or formula appears (ruling 33), and no lottery decision is used (MS-32).

## Key notes and length

The five notes are the three decisions and the habit of stating a non-money factor. About 507 s with holds, 63 s under the 570 s cap.

No speech, design edits, builds or commits were made.
