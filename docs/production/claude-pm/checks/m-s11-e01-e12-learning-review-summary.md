# Maths S11 e01 to e12 (Revision 1): independent learning review summary

19 November 2026. Thirteen designs (`lessons/math-s11-e01.md`, `e02`, `e03`, `e04a`, `e04b`, `e05` to `e12`), Earning money: wages, overtime, commission, piecework and royalties, government payments and sole traders, leave loading, a pay spreadsheet, taxable income, tax tables, PAYG, the Medicare levy and net pay, tax returns and tax scenarios. Method: `docs/production/student-learning-review.md`, rulings 84 to 94 in `root-rulings-maths-standard-outline.md`, and the author's handover `root-decisions-maths-s11-e01-e12.md`. Each design was traced from its stated entry knowledge as a Year 11 Standard student with a Stage 5 background. Written designs only: no built preview, plate inspection, spreadsheet run, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

PAYG rows (e09, e11), ATO deduction details (e07) and the Medicare low-income threshold (e10) are known placeholders waiting for Codex (ruling 94). They are not graded as blockers; only the arithmetic built on them, and any wording that would teach a wrong idea around them, was checked.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| e01 wages and salaries | should-fix | 0 | 2 | 1 | `m-s11-e01-learning-review.md` |
| e02 overtime and penalty rates | should-fix | 0 | 2 | 2 | `m-s11-e02-learning-review.md` |
| e03 commission | should-fix | 0 | 2 | 1 | `m-s11-e03-learning-review.md` |
| e04a piecework and royalties | pass | 0 | 0 | 1 | `m-s11-e04a-learning-review.md` |
| e04b government payments, sole traders | pass | 0 | 0 | 2 | `m-s11-e04b-learning-review.md` |
| e05 leave loading | should-fix | 0 | 1 | 1 | `m-s11-e05-learning-review.md` |
| e06 pay spreadsheet | should-fix | 0 | 2 | 1 | `m-s11-e06-learning-review.md` |
| e07 taxable income | blocker | 1 | 0 | 1 | `m-s11-e07-learning-review.md` |
| e08 tax tables | should-fix | 0 | 1 | 1 | `m-s11-e08-learning-review.md` |
| e09 PAYG withholding | should-fix | 0 | 1 | 0 | `m-s11-e09-learning-review.md` |
| e10 Medicare levy, net pay | should-fix | 0 | 1 | 1 | `m-s11-e10-learning-review.md` |
| e11 refund or debt | should-fix | 0 | 1 | 2 | `m-s11-e11-learning-review.md` |
| e12 tax scenarios | should-fix | 0 | 1 | 1 | `m-s11-e12-learning-review.md` |
| **Total** | | **1** | **14** | **15** | |

## The blocker

**e07: a charity gift fails the three tests the video teaches.** Every deduction "has to pass three tests", and the card says "for earning this income", yet a registered-charity gift is sorted allowable with no reason and A1's answer needs it. A student who applies the taught rule gets A1 wrong ($55 932). One sentence names gifts as a special rule, and the card and key note add "Also: gifts of $2 or more to registered charities" (about 6 s).

## Should-fix findings by theme

- **Rulings 94 not yet in the designs.** e08 still says "row's lower limit" (ruling: introduce "threshold" once, then use it; the review ties the row threshold to the tax-free threshold so the word is one idea). e12 still uses the nested IF (ruling: a single IF); `=IF(A2<=45000,0.15*(A2-18200),4020+0.3*(A2-45000))` equals the table at every income in the video, for $18 201 to $135 000, with exact narration supplied.
- **The screen and the speech disagree.** e01: 52 weekly paydays dropped onto a one-month calendar; e02: the roster card is not the roster worked (it also changes e01's handoff); e02: "three more overtime hours" against a strip of 2 + 3; e05: the overtime slip crossed on a sentence about weeks; e06: one sheet whose column C means two things.
- **A sentence that would plant a wrong idea or a wrong question.** e03: "never lowers the rate" (the misconception is "raises"); e03: one phone shop with two pay schemes; e06: "one formula, every worker" (each pay type needs its own); e09: "the real tax" for a figure e08 called "tax from the table"; e10: "other deductions" mixing allowable deductions with pay-slip deductions.
- **A number whose cause the video contradicts.** e11: Priya's site withholding gives a $2976 refund from $2850 of deductions, while scene 5 teaches that refunds come from deductions. Repricing withheld to $16 950 (the tax and levy on her salary) gives a $526 refund, which fits the explanation.

## Joins

| Join | Status |
| --- | --- |
| l07 to e01 | Matches l07 Revision 2 scene 11 exactly (axes, $29.40 line, "k dollars per hour", "pay = k × hours", chips), and l07's spoken question is answered in e01's third sentence. Ruling 93 satisfied. |
| e01 to e02 | Matches except the roster rows (e01 finding 2, e02 finding 1: "Weekdays 16 h", "Sat 6 h", "Public holiday 5 h"). |
| e02 to e03, e03 to e04a, e04a to e04b, e04b to e05 | Match. |
| e05 to e06 | Matches; chip wording per e06 finding 1. |
| e06 to e07, e07 to e08, e08 to e09, e09 to e10, e10 to e11, e11 to e12 | Match (e09 to e10 values follow the copied PAYG row; e11 to e12 is unchanged by the Priya repricing). |
| e12 to m01 | Provisional (ruling 87): `math-s11-m01.md` does not exist yet. |

## Strand checks

- **Causes before symbols.** Every design says each step in words before its row, and each worked example uses the g01 order (task, formula, grouped givens, rows, framed answer, crossed slip).
- **Attention and the visual medium.** Each video has two to four simulations that show the idea (hours slider, rate blocks, sliced bar, crate counter crossing a target line, payment strip, receipt sort, tax-table reader, coin jar, balance, scenario rows and graph). No static slideshow risk found in the written plans; motion still needs judging at playback speed.
- **Practice.** All 26 attempt cards keep the full worded question (and, where needed, the table or excerpt) on screen through the 10 s countdown; all 26 attempt narrations end "Pause here to answer."; no picture slot shows an answer.
- **Feedback.** 26 feedback scenes, 19 to 31 s at 13.3 characters a second (longest e04b feedback 2 and e11 feedback 1, about 30.5 s), each with the answer, the key reason, short working and exactly one crossed slip; no re-teaching.
- **Reading load.** Suitable for Standard 1 with the fixes; the heaviest screens were e12's nested IF (finding) and e06's multi-tab scene 5 (optional).
- **2026-27 figures.** $26.44 appears only as a dated chip; every worked wage is above it. Super is always 12% of ordinary-time earnings, paid by the employer on top and never deducted (e04b, e10). Every tax figure uses the 2026-27 resident table (nil to $18 200; 15% to $45 000; $4020 + 30%; $31 020 + 37%; $51 370 + 45%); no 2024-25 value appears.
- **Anchors and people.** Everyday anchors throughout (paydays, a takeaway shop, a car yard, strawberry crates, a window cleaner, a road trip, a garden centre, work boots, a pay slip, a return, job offers). Names appear in questions only; no people drawn.
- **Style and length.** 0 em dashes and 0 en dashes in all 13 files. Narration 4,760 to 5,534 characters; the author's totals with holds run 448 to 504 s, all under 570 s, and the fixes add at most about 6 s to any one video.

## SymPy recomputation

`work/brief-review-s11-e/verify.py` (SymPy 1.14, `python -I`): **331 checks, 331 passed, 0 failed.** It covers every value in all 13 designs (worked examples, ghosts and crossed slips, attempts, memory-aid new cases), the placeholder-dependent arithmetic as written, the nested IF and the suggested single IF against the 2026-27 table at every income used, and the reviewer's suggested values (Priya $16 952, $526, $2145). `work/brief-review-s11-e/count.py` gives the narration counts, feedback lengths, pause lines, dash counts and source hashes. No arithmetic error was found in any design.

## Decisions for root

1. **e07 blocker:** accept the gift special-rule sentence, card line and key note.
2. **Ruling 94 wording:** confirm the e08 "threshold" sentence as written in the review, and the reading of "a single IF per rule" for e12 (one IF for the 15c and 30c rows, with the $18 201 to $135 000 range chip).
3. **Open decision 3 (realistic withholding):** reprice Priya's withheld to $16 950 (refund $526); keep or adjust Ella ($180 refund with no deductions; optional $4,800 for a $120 debt); for e10's $276, decide whether Codex reads NAT 1005 at $1338 (salary sacrifice taken before tax) or the stated amount stays.
4. **Cross-file roster change:** e01 scene 12, e02 scenes 1 and 4 and section 2 item 2 of the root decisions file take the three-row roster ("Weekdays 16 h", "Sat 6 h", "Public holiday 5 h"), and e01's last question becomes "on a Saturday, or a public holiday?".
5. **e05 to e06 chip:** "a formula, filled down" in place of "one formula, every worker" (e05 scene 11, e06 scene 1).
6. **e09 scene 6:** when Codex copies the $1056 row, compare like with like and keep or rewrite the "a few dollars too much" sentence as the review describes.
7. **Optional findings:** take those that cost no new scene or plate (all fifteen qualify).

No speech, design edits, builds, renders or commits were made. Human listening pending.
