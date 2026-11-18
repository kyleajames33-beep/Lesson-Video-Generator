# Maths Standard Year 12 i12 to i23 Revision 1: learning review summary

18 November 2026. Independent student learning review of the thirteen money designs (`lessons/math-s12-i12.md`, `i13.md`, `i14.md`, `i15.md`, `i16.md`, `i17a.md`, `i17b.md`, `i18.md`, `i19.md`, `i20.md`, `i21.md`, `i22.md`, `i23.md`), following `docs/production/student-learning-review.md`, root rulings 1 to 42 and `checks/root-decisions-maths-s12-i12-i23.md`. Each design was traced from its stated entry knowledge as a Mathematics Standard student starting Year 12, and where shared (i12, i13, i14, i16, i17a, i17b, i18) a second time as a Standard 1 student on the ruling 30 path (i14 to i16 without i15; i18 to r01). Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under "Numbers to verify" (and the on-screen table extracts) was recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, numbers in suggested fixes in `suggested.py`, both run with `python -I`), money to the cent with interest rounded each period; Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| i12 BNPL, short and long loans | should-fix | 0 | 1 | 2 | `m-s12-i12-learning-review.md` |
| i13 reducing balance loan | pass | 0 | 0 | 3 | `m-s12-i13-learning-review.md` |
| i14 extra, lump sum, frequency | pass | 0 | 0 | 3 | `m-s12-i14-learning-review.md` |
| i15 the four loan questions | should-fix | 0 | 1 | 2 | `m-s12-i15-learning-review.md` |
| i16 credit cards | should-fix | 0 | 1 | 2 | `m-s12-i16-learning-review.md` |
| i17a daily compound interest | should-fix | 0 | 1 | 1 | `m-s12-i17a-learning-review.md` |
| i17b statement, minimum payment | pass | 0 | 0 | 2 | `m-s12-i17b-learning-review.md` |
| i18 card or personal loan | should-fix | 0 | 2 | 1 | `m-s12-i18-learning-review.md` |
| i19 annuities | pass | 0 | 0 | 1 | `m-s12-i19-learning-review.md` |
| i20 interest factor tables | should-fix | 0 | 3 | 0 | `m-s12-i20-learning-review.md` |
| i21 contribution for a goal | blocker | 1 | 1 | 0 | `m-s12-i21-learning-review.md` |
| i22 effect of each input | should-fix | 0 | 1 | 1 | `m-s12-i22-learning-review.md` |
| i23 super, saving, loans | should-fix | 0 | 1 | 1 | `m-s12-i23-learning-review.md` |

Totals: 4 pass, 8 should-fix, 1 blocker; 1 blocker finding, 12 should-fix findings, 19 optional. The blocker is root's own ruling 40, not yet applied to i21. Every other fix is a sentence, a label, a crossed slip or a visual-only row inside an existing scene; none needs a new scene, a new plate or a split. The designs are good. Each causal question the strand turns on is explained in words with a picture that carries it: why a longer loan costs more (i12's "dollars owed × time"); why the split changes while the repayment does not (i13's four equal bars); why an extra $50 saves $694 (i14's 40 cents that snowball); why the minimum takes 29 years (i17b's $50 of $60 and the shrinking minimum); how daily interest builds (i17a's thicker slivers); what an annuity is and why year 1 earns nothing (i19); why a factor works (i20's table for $1); why starting earlier matters (i22's two savers, i23's super columns). None is a slideshow on paper.

## Top findings

1. **i21: ruling 40 not applied (blocker).** The worked goal still needs the 0.45% column. Suggested: keep $50,000 in 8 years at 6% p.a. compounded monthly (the 0.5% column used in i20): FV factor 122.8285, $407.08 a month rounded up ($407.07 is 20 cents short), $39,079.68 paid in, single sum $30,976.83 (PV factor 76.0952). i20's final frame changes with it (i20 finding 3).
2. **i15 scene 5: a false reason for "slow at first".** "The early repayments are mostly interest", but the first repayment is $150 interest of $497.39 (30%). Say that early repayments carry the most interest, so less of each comes off ($347.39 in month 1, almost all of it near the end).
3. **i17a: r means the daily rate in scene 3 and the yearly rate on the card and in the notes.** A student using the notes with scene 3's r divides by 365 twice. Write "daily rate" and "yearly rate ÷ 365" in words.
4. **i22 key note 3: "Longer time or higher rate: more than in proportion".** True of the interest, not the value (halving the rate cut the value by only 15%). Say "the interest grows more than in proportion".
5. **i20 attempt 1: the crossed "6% column" slip is unreachable.** The extract has only 0.5% and 1% columns. Cross the PV column instead ("250 × 42.5803 = $10,645.08").
6. **i20 scene 6: the present value is stated, not shown.** Run i19's withdrawal table from $9,074.75 to $0.01 under the existing narration (visual only).
7. **i18 scene 3: the crossed slip names a "minimum" that the equal-repayment race never shows.** Cross "same repayment, so the same cost" instead.
8. **i23 scene 4: "Compare the totals" with no totals given.** Add $23,400 paid in against $29,843.40, about $6,443 more for the car three years sooner.
9. **i16 scene 5: "closing balance" spoken before its meaning** in the key condition. Add "everything the statement says you owe".
10. **i18 feedback 1 and i21 feedback 2: misheard or misspoken money.** "minus four thousand, five hundred and eighteen ninety-six" is heard as one number; i21 says "six point oh eight oh one nine" for 6.8019.

Other should-fix item: i12's BNPL regulation source (ruling 32) is a consultation news item; cite a dated page stating the 10 June 2025 start.

## For root to decide

- **i21 rate under ruling 40.** The suggested 6% p.a. monthly (0.5% column) is above today's best savings rates, as i20 and i22 already say; alternatively 4.8% p.a. monthly (0.4%), if root counts 0.4% as a standard column. Either way i20 scene 13 changes to match.
- **i17b's warning box (ruling 41).** If Codex confirms the 3-year line, consider drawing the box in the table layout real statements use (i17b optional 2); the numbers already check. The cited ASIC instrument should be confirmed or replaced by the credit regulations that set the warning.
- **Titles.** i12's "Builds on" line should read "Straight-Line vs Declining Balance Depreciation", and i11's "Next" line should become "Buy Now, Pay Later and Loans: What They Really Cost" (root decisions open question 10; i11 is outside this review, so not edited).

## Open questions in the designer's handover, as they bear on learning

- **1. r01 teaser:** the jug frame is neutral and number-free in i18 and i23; fine until r01 is designed (ruling 42).
- **2. Two-route frames:** keep. i14's and i18's split frames say each route in words and on screen, and i15 repeats i14's right panel so i16 opens on one picture.
- **3. i17b's 3-year line:** see above (ruling 41).
- **4. Monthly runs for cards (i16, i17b, i18):** keep; each says plainly that cards charge daily and the pattern is the same.
- **5. Factor-table layout:** rate across, periods down, 4 decimal places reads well; i20's FV-blue and PV-teal headers make the choice visible.
- **6. i20's $1 table:** inside ruling 33 (ruling 39 accepts it), and the strongest teaching move in the annuity run.
- **8. Lengths:** see below.
- **9. Attempt contexts:** the console, solar panels, halved rate and labelled super return are realistic and fair.

## Joins

- **i11 to i12 (ruling 31):** i11's final frame in `lessons/math-s12-i11.md` scene 12 and `checks/root-decisions-maths-s12-i01-i11.md` (the e-bike at about 1,100 px, the swing tag "$3,000" and "buy now, pay later?", the grey "What things are worth: done" thumbnail, "Next: the real cost of borrowing" and "?") is exactly i12 scene 1's opening frame; i12 fades the thumbnail on its first sentence, which the i01 to i11 file allows. The two files agree.
- **i12 to i13, i13 to i14, i15 to i16, i16 to i17a, i17a to i17b, i17b to i18, i19 to i20, i21 to i22, i22 to i23:** each final frame is the next design's stated opening frame, and no frame shows the answer it hands on.
- **i20 to i21:** matches once both carry the ruling 40 rate.
- **i14 to i15 and i16; i18 to i19 and r01; i23 to r01 (rulings 28 and 30):** the split frames are self-explanatory, and Standard 1 (from i18) and Standard 2 (from i23) meet r01 on the same jug.
- **Standard 1 path (ruling 30: i12, i13, i14, i16, i17a, i17b, i18, r01):** complete. i16 relies on nothing from i15 (its table is i13's; "unlike a car loan" is generic); i17a's spreadsheet is tagged Standard 2 and its attempt 2 is answerable from the scene; i18 serves both courses and hands Standard 1 to ratios. Optional: i13's "smaller last payment" gets four words of reason for Standard 1 viewers, who skip i15.

## Practice and feedback

All 26 question cards keep the full worded question on screen through the 10 s countdown, with "Pause here to answer." at the end of each narration; no card or picture is answer-bearing (supplied tables, extracts and final payments are the items' normal forms). Several ask for three parts, more than 10 s allows, which the pause covers. All 26 feedbacks give the answer, the key reason, short working and one crossed classic slip, about 23 s to 31 s by speech estimate; only i20 A1's slip is unreachable (top finding 5). Anchors are real, everyday and fair (an e-bike, a console, solar panels, a tinny, a camper trailer, an SUV, a kitchen, a first credit card, a television, a car service, a car repair, furniture, flights, summer-job savings, course fees, a first-home deposit, a pool, a payslip), with no gambling (MS-32) and no people drawn (savers are account books; names appear only in question text). Every rate or fee is dated to RBA F4, F5 or F8, Moneysmart, ASIC or the ATO and labelled an example, and each video says once that rates change (ruling 32), with i12's ASIC link the one source to replace. No logarithm, repayment formula, annuity formula or effective annual rate appears on screen (ruling 33). Responsible-money lines are stated once each, plainly and with numbers, without lecturing.

## Lengths

All thirteen are under 570 s by the designer's estimate (476 s to 557 s). The fixes add little: i23 finding 1 about 6 s (63 s margin), i18 finding 2 about 3 s, i16 finding 1 about 3 s; i15, i17a, i20 and i21 fixes are same-length or shorter, and i20's PV run is visual only. i13 (13 s margin) needs no change; its optional finding 1 should be taken only with a reserve trim. Measure on the voiced take.

## Housekeeping

- Every design's `learning_review` path matches these file names.
- No em dash (U+2014) or en dash (U+2013) was found in any of the thirteen designs (scripted check).
- Two author notes are a cent or two out and not on screen: i20's (10,000 − 9,074.75) × 1.04⁴ is $1,082.41 (the on-screen $1,082.43 is i19's table, which is right), and i21's $32,492.62 × 1.0045⁹⁶ is $50,001.04 (the screen shows "≈ $50,001").

No speech, design edits, builds or commits were made.
