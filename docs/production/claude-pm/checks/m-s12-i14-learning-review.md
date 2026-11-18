# Maths S12 i14 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i14.md`, "How do extra repayments, lump sums and paying more often shorten a loan?" Source SHA256 `0ebc46916f620d05f43a5441149084c5378199730c1e0f7bfd7272d13398b1f9`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i13: interest on the balance owing each period, the spreadsheet model; i12: total cost) as a Mathematics Standard student starting Year 12, and again as a Standard 1 student who reads every result from a spreadsheet or graph and goes next to i16. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass** (0 blockers, 0 should fix, 3 optional).

This design explains why extra repayments save so much, which is the hard part. Scene 2 runs two balance bars side by side: the same $120 of interest in month one, $50 more off on the right, then "forty cents less" in month two "because it's charged on fifty dollars less", and the gap widening to month 12 ($12,544.70 against $11,917.58). That turns a tiny number into a snowball the student can watch. The worked example crosses the natural slip ("saved 10 × $315.76 = $3,157.60", caption "you paid more each month: compare the interest"); early beats late is given its cause ("off the balance for three extra years"); and the fortnightly scene gives the honest reason (26 halves are 13 repayments) and says the extra frequency "helps a little too". The responsible line (bills first; some fixed loans limit extra payments or charge a fee) is plain and said once. Every term comes from a row count or a graph, with no logarithm (ruling 33), so the Standard 1 route works. Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`): the base run (61 rows, last $0.07, interest $3,945.67; 60 × $315.76 − $15,000 = $3,945.60); month 1 closings $14,804.24 and $14,754.24; month 2 interest $118.43 and $118.03; after 12, $12,544.70 and $11,917.58; +$50: 50 payments, last $329.79, $3,252.03, saving $693.64; lump sum after month 12: 52, last $2.60, $3,106.36, $839.31; after month 48: 54, last $60.51, $3,795.79, $149.88; fortnightly: 118, last $34.92, $3,506.88, $438.79; year totals $3,789.12 and $4,104.88; A1 36 and $1,753.89, 30 and $1,455.93, 32 and $1,430.97, saving $297.96; A2 $5,760 and $6,240. All correct.

## Findings

1. **Optional, scene 7 and the framed card ("often").** "Extra, early, often" and "pay more often, and the loan ends sooner" can be heard as "any more frequent schedule saves a lot", which scene 6 itself says is not the main effect. Make the card's word match the cause: "Extra, early, or fortnightly halves: a shorter loan and less interest", and in the narration "or pay half every fortnight". Key note 4 is already exact.

2. **Optional, scene 3 (how the extra cell works).** "A spreadsheet with an extra cell does the work" shows an input "extra: 50" but not where it goes. Show the repayment column reading "365.76" with the formula bar "=315.76+extra" for one beat, so a student who built i13's sheet could rebuild this one.

3. **Optional, scene 4 ("One plain check first.").** The check comes after the result, so "first" jars. Say "One plain check."

## Joins

i13 to i14: i13's final frame (the camper trailer with its card, the balance graph landing at 60 and the dashed "+$50?") is scene 1's opening frame; the dashed arrow turns solid on "month". i14 to i15 and i16 (ruling 30): the split frame labels each route in words and on screen ("Standard 2 next: the four loan questions"; "Standard 1 next: credit cards"), and the narration says which path is which. i15 opens on it and fades the right panel, and i16 opens on i15's final frame, which repeats this right panel, so a Standard 1 viewer arriving from here sees the same card and table. The frame is self-explanatory.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's results table and A2's empty one-year strip give nothing away. Each feedback gives the answer, the reason and one crossed slip ("the $350 plan: biggest repayment"; "interest charged twice as often"), about 28 s and 29 s. A camper trailer, a personal loan and a tax refund are real, fair anchors; 9.6% is the site's rate and fits RBA F8 (September 2026), labelled "an example rate, since rates change".

## Key notes and length

The five notes are short and keep the cause ("Every extra dollar comes straight off the balance"). About 534 s with holds, 36 s under the 570 s cap.

No speech, design edits, builds or commits were made.
