# Maths Standard Year 12 i01 to i11 Revision 1: learning review summary

18 November 2026. Independent student learning review of the thirteen investment and depreciation designs (`lessons/math-s12-i01.md`, `i02a.md`, `i02b.md`, `i03.md`, `i04.md`, `i05.md`, `i06a.md`, `i06b.md`, `i07.md`, `i08.md`, `i09.md`, `i10.md`, `i11.md`), following `docs/production/student-learning-review.md`, root rulings 1 to 38 and `checks/root-decisions-maths-s12-i01-i11.md`. Each design was traced from its stated entry knowledge as a Mathematics Standard student starting Year 12; shared designs (i01 to i03, i05, i08 to i11) were traced a second time as a Standard 1 student on ruling 30's path (i01 → i02a → i02b → i03 → i05 → i08 → i09 → i10 → i11), and i05 and i08 from both arrival routes. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under "Numbers to verify" was recalculated with SymPy 1.14, money as exact rationals rounded half up to the cent, together with every number in a suggested fix (`work/brief-review-standard-i1/verify.py` with `verify_parts.py`, run with `python -I`; all checks pass). Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| i01 simple interest | should-fix | 0 | 2 | 2 | `m-s12-i01-learning-review.md` |
| i02a compound interest: future value | should-fix | 0 | 2 | 2 | `m-s12-i02a-learning-review.md` |
| i02b present value and the rate | should-fix | 0 | 1 | 3 | `m-s12-i02b-learning-review.md` |
| i03 inflation and appreciation | should-fix | 0 | 2 | 2 | `m-s12-i03-learning-review.md` |
| i04 rate, term and compounding period | should-fix | 0 | 1 | 2 | `m-s12-i04-learning-review.md` |
| i05 simple against compound | should-fix | 0 | 1 | 3 | `m-s12-i05-learning-review.md` |
| i06a share tables, dividends, yield | pass | 0 | 0 | 3 | `m-s12-i06a-learning-review.md` |
| i06b a share's value over time | should-fix | 0 | 1 | 2 | `m-s12-i06b-learning-review.md` |
| i07 brokerage and total cost | should-fix | 0 | 1 | 3 | `m-s12-i07-learning-review.md` |
| i08 which investment suits which goal | should-fix | 0 | 2 | 2 | `m-s12-i08-learning-review.md` |
| i09 straight-line depreciation | pass | 0 | 0 | 2 | `m-s12-i09-learning-review.md` |
| i10 declining balance | should-fix | 0 | 1 | 2 | `m-s12-i10-learning-review.md` |
| i11 comparing the two methods | should-fix | 0 | 2 | 2 | `m-s12-i11-learning-review.md` |

Totals: 2 pass, 11 should-fix, 0 blockers; 16 should-fix findings, 30 optional. Every should-fix is a wording, label or visual-detail repair inside an existing scene; none needs a new scene, a new plate or a split. The designs are good. Each gives the reason before the rule: interest "paid out" so it never earns interest; "two hundred and eight dollars, not two hundred" for interest on interest; "a hundred per cent plus five per cent" before 1.05; dividing to go back because forwards multiplies; "prices rise on last year's prices"; locked inputs so one change has one cause; "no earlier interest yet" for the equal first year; the same numerator over a bigger price; "a value can't go below nothing"; "seventy-eight per cent of something is never zero"; and the yearly losses that make the depreciation lines cross. None is a slideshow on paper.

## Top findings

1. **i08 scene 4: ruling 35, and "more, because the money's locked away".** The site's 4.2% and 4.8% must become current, dated rates. The design's own sources put bonus savings rates (5.5% to 6.5%, with conditions) at or above term deposits (5.5% to 5.7%), so "locked away, so it pays more" is not reliably true and should not be taught as a rule. Suggested: 5.2% against 5.6% ($64,424.15, $65,658.29, $1,234.14; rounded and full values agree), with "banks often pay more for money that's locked away, but some savings accounts match it, so compare the actual rates". Codex confirms the 5-year rate source.
2. **i01, i02a and i03: the interest blocks are drawn too small to see.** At one scale with the balance, i01's $200 steps are about 20 px on a $7,000 axis, i02a's $5 olive sliver is about 1.5 px, and i03's growing $8.60 to $10.18 rises look equal. Each scene's visual reason (the line of stack tops, the interest-on-interest sliver, rises that grow) disappears. Fix with a labelled "zoomed in" side column or inset (scale and dashed reference line given in each file), keeping the honest $0 axis behind it; run i01's comparison window to 10 years. The same applies to i05 scene 2's $18 olive sliver on a $5,000 bar, which this review did not list separately.
3. **i11 attempt 2: the given graph cannot be read to the values asked.** Gridlines every $10,000 cannot give the straight line's $8,000 end value (needed for D) or the "about fourteen thousand four hundred" in feedback 2. Add $2,000 minor gridlines and say "about fourteen thousand". This is Standard 1's syllabus route, so it matters.
4. **i02a scene 4: 1.05 never becomes 1 + r.** Say that the one is the hundred per cent kept and r is the five per cent added, and give "period" its plain meaning aloud (i01 has the same unspoken "per period" tags, optional there).
5. **i01 scene 5: why divide by 0.05.** Standard 1's only route to the principal is "one year first", and the division by the rate is asserted. Add the unitary step (5% is $150, 1% is $30, 100% is $3,000).
6. **i07 scene 3: the small-trade cost is this example's, not the market's.** The design's dated CommSec source charges $5 up to $1,000, so a $500 parcel costs 1% to buy, not "about four per cent". Say "with this broker's flat fee" and add one sentence that some brokers charge less on small trades.
7. **i02b scene 5: the main slip has a label, not a reason.** Show that 4.17% compounded for three years overshoots to about $4,521 ($4,521.12), because the interest earns interest.
8. **i03 scene 4: why not take 3% off.** Last year's rise was 3% of last year's smaller price; a one-year check (194 × 1.03 = 199.82, not 200) makes it concrete, in i02b's "check forwards" habit.
9. **i08 scene 3: dots mean "good" in two columns and "bad" in two.** Property scores ●●● for return and for cost to enter. Label each column "more is better" or "more is worse", or shade helpful and harmful dots differently.
10. **i04 and i05: spreadsheet formulas read as strings.** Tag the formula parts with what the student already knows (B2/B4 "rate per period", B3*B4 "number of periods"; B as P + Prn, C as PV(1 + r)ⁿ) and say the link once.

Other should-fix items: i06b scene 2 (the narration and tag say the axis starts at $3; it starts at $2.50); i10 scene 3 ("V nought, the starting value" at first use, ruling 36); i11 scene 5 (leave the spreadsheet's −2000 visible and grey-crossed rather than a cell that turns itself into 0).

## Rulings and open questions, as they bear on learning

- **Ruling 30 (Standard 1 path):** workable throughout. Every shared design keeps its Standard 1 route arithmetic (one year first in i01, trial then the root key in i02b, division and "round up, check both sides" in i09, the table, a given graph and the spreadsheet in i05 and i11). i03's and i05's two-route frames name each course aloud, and i05 and i08 assume nothing from the Standard 2-only videos. i08 names shares once as Standard 2 and every calculation avoids them. The only Standard 1 gap found is i11's A2 graph (top finding 3) and the support i01 scene 5 needs (top finding 5).
- **Ruling 32 (dated sources):** every rate, fee and duty figure is cited with a date in the designs, and "rates change" (or fees, duty, rules) is said once in each. Two fairness issues: i08's "locked away, so it pays more" (top finding 1) and i07's small-trade percentages (top finding 6). Optional: i03's guitar should be "vintage" if it appreciates, and i10's A2 uses an unrealistic 15% investment rate (8% works).
- **Shares (rulings 6, 32):** i06a, i06b and i07 frame shares as part-ownership of a business with risk said once and shown once, no gambling words or images, and all companies invented (Codex confirms none is an ASX listing, ruling 37).
- **Open decisions answered:** i01 decision 2 (say "studio speakers"); i02a decision 2 (the two anchors do not crowd); i02b decision 1 (keep "x√" and add "often SHIFT, then the power key", or root names one layout); i04 decision 1 (no split) and decision 2 ($4,000 confirmed: $8,000 gives $45.31 against $45.32); i05 decision 1 (the two-row check is right); i06b decisions 1 and 2 (swings as risk, and A1 without drawing, both right); i07 decisions 1 and 2 (keep both); i09 decision 1 ("V nought", per ruling 36); i10 decision 1 (`we-4` stays out). i08 decision 2 and i11 decision 2 (hatched risk and olive at phone size) need a still, not a text review.

## Joins

- **a13 → i01 (Standard 2) and a08 → i01 (Standard 1):** a13's final frame and a08's right panel carry the same jar, axes and chip; "Last time ended with a coin jar" is true for both.
- **i01 → i02a → i02b → i03:** each final frame is the next design's stated opening frame, and each opening line answers the previous chip without the previous frame stating the answer ($208, the phone's PV, the shop's future price).
- **i03 → i04 (Standard 2) and i03 → i05 (Standard 1); i04 → i05:** one picture serves both routes; i04's final frame repeats i03's right panel full-frame (ruling 38).
- **i05 → i06a (Standard 2) and i05 → i08 (Standard 1); i06a → i06b → i07 → i08:** the same pattern; i07's final frame repeats i05's right panel.
- **i08 → i09 → i10 → i11:** each final frame (tool box, ute, van) is the next anchor, with no rate shown.
- **i11 → i12 (ruling 31):** the e-bike frame matches the decisions file exactly, and i12's design opens on it.

## Practice and feedback

All 26 question cards keep the full worded question on screen through the 10 s countdown, and no picture is answer-bearing (supplied tables and graphs keep their "?" or leave the answer unmarked). Several cards ask three or four things in 10 s, which "Pause here to answer." covers. All 26 feedbacks give the answer, the key reason, short working and one crossed classic slip, between about 21 s and 31 s by speech estimate; three run about 30.5 to 31 s (i07 and i08 feedback 2, and i11 feedback 1 at the limit), and i07's and i08's files name a trim. Anchors are real, everyday and non-science (a gap-year fund, a band's loan, birthday money, a phone, the weekly shop, a salon, a coffee cart, a gym chain, a phone network, savings, an investment unit, an apprentice's tools, a landscaper's excavator, a ute, a food truck, a delivery van, a café, an e-bike), with no gambling and no people drawn.

## Lengths

All thirteen are under 570 s by the designers' estimate (465 s to 538 s), with margins of 32 s (i01) to 105 s. The fixes add little: the largest is i02a finding 1 (about 10 s of a 103 s margin) and i01 finding 1 (about 7 s of 32 s, covered by a named reserve trim). Measure on the voiced take.

## Housekeeping

- Every design's `learning_review` path matches these file names.
- No em dash (U+2014) appears in any of the thirteen designs (scripted check) or in these review files.

No speech, design edits, builds or commits were made.
