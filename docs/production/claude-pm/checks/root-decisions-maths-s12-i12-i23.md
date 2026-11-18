# Root decisions needed: Maths Standard Year 12, i12 to i23 (first-revision designs)

18 November 2026. Design author's handover to root for `lessons/math-s12-i12.md`, `i13.md`, `i14.md`, `i15.md`, `i16.md`, `i17a.md`, `i17b.md`, `i18.md`, `i19.md`, `i20.md`, `i21.md`, `i22.md` and `i23.md` (Revision 1 each). Documents only: no speech, build, render, plate or commit, and no sub-agent. Inputs: the packs `pre-design/maths-standard/math-s12-i12.md` to `i23.md`, `programme/maths-standard-route-inputs-3.json`, `checks/maths-standard-kit-needs-i.md`, `checks/root-rulings-maths-standard-outline.md` (rulings 1 to 33, binding), `site-corrections-maths-standard.md` (section 6, MS-19 to MS-32), the format of `lessons/math-s12-a04a.md`, `a04b.md` and `a06.md` (Revision 2) and `checks/m-s12-a01-a06-learning-review-resolution.md`, `maths-visual-standard.md`, `AGENTS.md`, and, for the i11 to i12 join, `lessons/math-s12-i11.md`. i13 to i23 were written first; i12 was written last. `checks/root-decisions-maths-s12-i01-i11.md` did not exist when i12 was written, so i12 opens on i11's final frame as specified in the i11 design itself (scene 12 and its Decisions "Handoff"); root should check the two agree once the i01 to i11 decisions file is written.

## 1. Summary

| Design | Characters | About (s, with holds) | Scenes | Courses | Anchor | New plate briefed here |
| --- | --- | --- | --- | --- | --- | --- |
| i12 BNPL, short and long loans | 5,249 | 494 | 13 | S1, S2 | a $3,000 e-bike (site card 08's table) | none (`ms12-ebike-v1.png` is i11's) |
| i13 reducing balance loan | 6,098 | 557 | 14 | S1, S2 | the e-bike's 2-year loan; site's $20,000 tractor spreadsheet | `ms12-farm-tractor-v1.png` |
| i14 extra, lump sum, frequency | 5,735 | 534 | 13 | S1, S2 | a camper trailer on site `we-2` ($15,000, 9.6%) | none (reused `ma12-camper-trailer-v1.png`) |
| i15 the four loan questions | 5,268 | 495 | 14 | S2 | a small SUV, $25,000 at 7.2% (site lesson12) | `ms12-small-suv-v1.png` |
| i16 credit cards | 5,292 | 497 | 12 | S1, S2 | a first credit card, $2,000 owing | `ms12-credit-card-v1.png`, `ms12-atm-v1.png` |
| i17a daily compound interest | 5,089 | 478 | 13 | S1, S2 | a $2,000 television at 19.99% for 30 days ($33.12) | `ms12-television-v1.png` |
| i17b statement, minimum payment | 5,313 | 500 | 14 | S1, S2 | an example statement, $3,000 at 20% | none |
| i18 card or personal loan | 5,017 | 476 | 13 | S1, S2 | a $6,000 car repair | `ms12-car-hoist-v1.png` |
| i19 annuities | 5,240 | 493 | 13 | S2 | summer-job savings, $2,000 a year at 5% (site card 07) | `ms12-pay-envelope-v1.png` |
| i20 interest factor tables | 5,535 | 515 | 14 | S2 | the summer job carried on; i19's allowance for PV | none |
| i21 contribution for a goal | 5,073 | 478 | 12 | S2 | a $50,000 first-home deposit in 8 years (site card 05) | `ms12-house-key-v1.png` |
| i22 effect of each input | 5,642 | 524 | 14 | S2 | a first job's $100 a month in a spreadsheet | none |
| i23 super, saving, loans | 5,422 | 507 | 12 | S2 | a payslip's super line; the i15 SUV | none |

Characters are the sum of the scene strings (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed), counted with scratchpad `s12i/check.py` (the same parser rules as `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632). Times use 13.3 characters per second plus two 10 s countdowns, about 6 s of short holds, 30 to 38 s of settling and the 45 s notes scene. All thirteen are under 570 s (the longest, i13, about 557 s; the shortest, i18, about 476 s) and all are inside 5,000 to 7,000 characters. Every design has 0 em dashes and 0 en dashes, every bold cue is quoted in its scene's Visual in spoken order (checked by script), every attempt narration ends "Pause here to answer.", every syllabus quote matches the route-inputs JSON exactly (including i14's Standard 1 "or a making a"), every title is under 100 characters (66 to 88), and every description ends #HSCScience with the wording under Standard 2 and Standard 1 headings and no codenames (ruling 16). All numbers were recalculated with SymPy 1.14 (scratchpad `s12i/verify.py`, run with `python -I`); Codex's maths check remains the authority.

Characters per scene (1 to last):
- i12: 464, 601, 687, 520, 639, 199, 178, 399, 371, 450, 391, 275, 75
- i13: 496, 557, 613, 572, 399, 886, 482, 192, 330, 398, 326, 400, 372, 75
- i14: 531, 612, 825, 595, 420, 741, 191, 375, 377, 266, 388, 339, 75
- i15: 508, 518, 717, 291, 519, 469, 244, 261, 287, 374, 351, 395, 259, 75
- i16: 442, 780, 756, 544, 689, 197, 447, 374, 367, 335, 286, 75
- i17a: 413, 515, 580, 736, 438, 472, 173, 324, 369, 390, 341, 263, 75
- i17b: 365, 500, 443, 379, 642, 830, 342, 201, 280, 382, 314, 306, 254, 75
- i18: 413, 451, 822, 464, 615, 189, 173, 493, 387, 338, 302, 295, 75
- i19: 482, 461, 386, 621, 795, 687, 214, 246, 342, 335, 355, 241, 75
- i20: 401, 483, 517, 626, 563, 814, 255, 232, 311, 395, 257, 320, 286, 75
- i21: 431, 364, 800, 452, 733, 234, 453, 340, 485, 382, 324, 75
- i22: 423, 663, 336, 640, 482, 418, 566, 207, 330, 405, 512, 329, 256, 75
- i23: 393, 682, 570, 919, 624, 229, 490, 395, 449, 356, 240, 75

Every feedback scene is at most 410 characters (about 31 s); i22's feedback 1 (405) and i20's (395) are the longest.

## 2. Joins (every opening and final frame)

1. **i11 to i12 (cross-author; ruling 31).** i12 opens on i11's scene 12 exactly as `math-s12-i11.md` writes it: the e-bike `ms12-ebike-v1.png` (about 1,100 px), the swing tag `ma12-swing-tag-v1.png` with coded "$3,000" and "buy now, pay later?", a grey thumbnail "What things are worth: done", chips "Next: the real cost of borrowing" and "?". i12 confirms the three details i11's open decision 1 asks about: the $3,000 price (site card 08), the thumbnail fading on i12's first sentence, and the chip wording. The i01 to i11 decisions file should record the same.
2. **i12 to i13.** The e-bike with "borrowed: $3,000", "1% a month", "$141.22 a month for 24 months"; an empty reducing-balance table header; chips "where does each $141.22 go?", "Next: reducing balance loans", "?".
3. **i13 to i14.** The camper trailer `ma12-camper-trailer-v1.png` with "$15,000", "0.8% a month", "$315.76 a month for 5 years"; a small balance graph landing at month 60 with a dashed "+$50?"; chips "what if we pay $50 more a month?", "Next: paying a loan off sooner", "?".
4. **i14 to i15 and i16 (ruling 30: two routes).** A split frame. Left, "Standard 2": the SUV, "$25,000 car loan", "7.2% a year for 5 years" and four question chips. Right, "Standard 1": the credit card plate beside an empty table with a "New purchases" column, chip "a loan you can borrow again?". i15 opens on it and fades the right panel.
5. **i15 to i16.** i15's final frame repeats i14's right panel full width (the card and the table with "New purchases"; "a loan you can borrow again?", "Next: credit cards", "?"), so i16 opens on one picture for both courses and needs nothing from i15 (ruling 30).
6. **i16 to i17a.** The television with "TV: $2,000 on the card", "19.99% a year", "not paid in full by the due date"; the statement-cycle timeline with the bracket broken and 30 amber ticks; chips "how much interest, day by day?", "Next: daily interest", "?".
7. **i17a to i17b (ruling 29).** The television and card; a coded statement with labels only and an empty warning box, "Minimum payment" ringed; chips "what's on the statement?", "Next: the statement and the minimum payment", "?".
8. **i17b to i18.** The warning box small with "28 years and 11 months" ringed; the car on a hoist with "car repair: $6,000"; chips "a card for a debt that lasts years?", "card or personal loan?", "Next: matching credit to the goal", "?".
9. **i18 to i19 and r01 (rulings 28 and 30: two routes).** A split frame. Left, "Standard 2": the house small and the pay envelope plate, chip "save the same amount every year: what does it grow to?", label "Standard 2 next: annuities". Right, "Standard 1": the water jug `ma11-water-jug-v1.png` with a coded cordial layer (no numbers), chips "how much of the jug is cordial?" and "Money: done", label "Standard 1 next: ratios". i19 opens on it and fades the right panel.
10. **i19 to i20.** The pay envelope; the four-row summer-job table with "$8,620.25" and ghost rows "years 5 to 10?"; a blank "Future value interest factors" page; chips "10 years: 10 rows by hand?", "Next: interest factor tables", "?".
11. **i20 to i21.** The pay envelope and house key; "goal: $50,000 deposit", "in 8 years", "5.4% a year, monthly"; "contribution × factor = future value" with "$50,000" in place and a violet "?"; chips "how much a month?", "Next: saving for a goal", "?".
12. **i21 to i22.** The twin timelines small, both reaching $50,000; an empty spreadsheet with four blank input cells and a blank "future value"; chips "change one input at a time: which matters most?", "Next: what changes an annuity's value", "?".
13. **i22 to i23.** A blank payslip strip with "Super (12%)" ringed; the SUV with "save for it, or borrow?"; the house key small; chips "super, saving or borrowing: three decisions", "Next: annuities in real decisions", "?".
14. **i23 to r01 (ruling 28).** Grey strand thumbnails with "Money: done"; the water jug with its cordial layer, exactly as i18's right panel, full width; chips "how much of the jug is cordial?", "Next: ratios", "?". Standard 1 (from i18) and Standard 2 (from i23) meet r01 on the same picture.

Routing (ruling 30): Standard 1: i12, i13, i14, i16, i17a, i17b, i18, then r01. Standard 2: i12 to i23, then r01.

## 3. Departures from the packs

- **i12.** The pack's attempt contexts change: a gaming console instead of a phone (the pack's own suggestion, to avoid a fourth phone) and solar panels instead of a car repair (i18's anchor is a car repair); the pack's numbers are kept. The i11 join is i11's design, as ruling 31 fixes.
- **i13.** The pack's e-bike opener becomes the whole table anchor; the site's tractor spreadsheet becomes the g01 worked example. The spreadsheet adds interest and subtracts the repayment (as the table does) instead of the site's "principal repaid" column; the site's split appears as the split bars.
- **i14.** The base plan is called 60 months with the spreadsheet's $0.07 61st row folded in (grey chip), so the site's "10 months sooner" holds; the lump sum (site has none) is the pack's $2,000 tax refund, shown early (month 12) and late (month 48, original) to carry the site's true or false item. Attempt 2 uses $480 instead of the teaching loan's $315.76 so it is unseen.
- **i15.** A teaching repayment table extract (6.0% to 7.8%, 3 to 5 years) is original; a short scene separates "total paid", "interest" and "still owing" (the site's warning). The site's $250,000 mortgage is not used (pack realism note).
- **i16.** The card table uses 21% ÷ 12 = 1.75% a month for two months (and says cards really charge daily, i17a). The rate ladder has four bars, not five (F8's 18.91% left off the ladder).
- **i17 split (ruling 29).** i17a: daily compound interest by calculator and spreadsheet; a new worked example ($640 car service at 21.49% for 42 days); attempt 2 is a new spreadsheet question ($900 for 14 days). i17b: an original example statement for $3,000 at 20% whose warning box is worked by the stated minimum rule (2% or $25); the site's card 06 ($60 against $150, MS-22 corrected) is the worked example; the site's Trap 03 is a short scene and attempt 2 is original. **A1's warning line is changed from the pack's 2 years to 3 years** ($99.45, $3,580.20), because Australian statements show the amount that repays the balance in 3 years (see open question 3).
- **i18.** Final frame is a two-route frame (Standard 2 to i19, Standard 1 to r01), replacing the pack's "t01" (ruling 28). The site's drill 1 (b) comparison is not used, to keep one comparison.
- **i19.** The pack's suggested "40 years?" chip becomes "10 years?", because the factor tables reach n = 10 at 5% (i20 uses it). The withdrawal annuity (MS-31) is the pack's original table.
- **i20.** A factor's meaning is shown by running i19's own table for $1 (no series or formula). i19's withdrawal annuity gives the PV meaning ($9,074.75 funds exactly four $2,500 withdrawals; it also explains i19's $1,082.43 leftover); the site's $500 a month PV follows. `we-1` (0.45%) is not used.
- **i21.** The site's card 05 numbers need a 0.45% column; the extract shows 0.40%, 0.45% and 0.50%. The single sum is for the given annuity ($417.57 × PV factor = $32,492.62), not $50,000 ÷ 1.0045⁹⁶.
- **i22.** The pack's rate experiment (1% a month, 12% p.a.) becomes halving to 0.25% a month (3% p.a.) for realism (ruling 5); attempt 1's case C changes to match ($13,974.14). The site's investors appear as "saver 1" and "saver 2" account books, never people.
- **i23.** The super teaching uses an original payslip ($2,500 a fortnight, $300 super, $255 after the 15% tax) on the site's `we-1` model, so the tax is deducted (MS-28 principle); the SUV from i15 carries the save-or-borrow decision (the site's card 06 is the same $25,000 car); the borrowing limit is i15's repayment read backwards ($497.39 × 50.2621 = $24,999.87). The final frame hands to r01, not t01, so the kit-needs file's roof-triangle overlay is dropped (ruling 28).

## 4. Open questions for root

1. **The r01 teaser (i18 right panel and i23's final frame).** r01 ("How do ratios relate to fractions, and how do we simplify them?") is not designed. Both frames use the existing water jug with a coded cordial layer and the neutral chip "how much of the jug is cordial?", no numbers. If the r01 designer picks another anchor, only those two frames change. The descriptions' "Next" lines name r01 generically until its title exists.
2. **Two-route frames (ruling 30).** i14 (to i15 and i16) and i18 (to i19 and r01) each use one split frame, as a08 did. i15's final frame repeats i14's right panel so i16 opens on one picture for both courses. Confirm, or ask for separate endings.
3. **Credit card statement warning (i17b).** The design follows the rule that statements show the minimum-only time and total and a monthly amount that repays the balance in 3 years (Moneysmart; ASIC instrument 20-0746, as the pack cites). Codex is asked to confirm the 3-year rule and exact wording; if it differs, only the warning's second line changes (teaching $111.49 and $4,013.64; A1 $99.45 and $3,580.20).
4. **Monthly-rate runs for cards (i16, i17b, i18).** The card tables and minimum-payment runs use the annual rate ÷ 12 per month, as the site and the pack do; i17a teaches daily compounding and each later video says cards really add interest daily. Confirm, or ask for daily-compounded runs (figures shift slightly).
5. **Factor-table layout (i15, i20, i21, i23).** Printed-style extracts, rate per period across, periods down, 4 decimal places. Confirm, or supply a NESA sample layout to match.
6. **Showing a factor's meaning (i20).** The 5%, 4-period factor is built as i19's table run for $1. Confirm this stays inside ruling 33 (it is the syllabus's tabular method, not a geometric series).
7. **New plates and paint order (ruling 17).** Seven new plates, each needed one video early because final frames show the next anchor: `ms12-farm-tractor-v1.png` (i13; worked example only, so it can wait for the i13 build); `ms12-small-suv-v1.png` (briefed in i15; needed by the i14 build); `ms12-credit-card-v1.png` and `ms12-atm-v1.png` (briefed in i16; the card is needed by the i14 build); `ms12-television-v1.png` (briefed in i17a; needed by the i16 build); `ms12-car-hoist-v1.png` (briefed in i18; needed by the i17b build); `ms12-pay-envelope-v1.png` (briefed in i19; needed by the i18 build); `ms12-house-key-v1.png` (briefed in i21; needed by the i20 build). Plus i11's `ms12-ebike-v1.png` before i11. Root may commission all eight together.
8. **Lengths.** i13 (about 557 s) has a 13 s margin and named reserve trims; i18, i17a and i21 are near 5,000 characters (each a single-method video with on-screen working). Measure on the voiced take.
9. **Attempt contexts and realism.** i12's console and solar panels; i22's halved rate; i23's 5.4% p.a. super return labelled an assumption after fees. Confirm.
10. **i11's published title.** i12's description "Builds on" line needs i11's title; i11's description uses a provisional i12 title, which should become "Buy Now, Pay Later and Loans: What They Really Cost".

## 5. Shared colour roles (for the builder)

- i12 to i18 (loans and cards): balance owed blue; interest amber (fees amber with a stamp outline); repayment violet; the part that pays off the debt, the price and the amount borrowed teal; new purchases dark ink; the interest-free bracket teal; answer green; mistake red, crossed slips only. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS".
- i19 to i23 (annuities): balance and future value blue; interest amber (the contributions tax amber with a stamp); contribution, withdrawal and repayment violet; present value, single sums and the amount initially invested teal; the FV factor table blue, the PV table teal, the repayment-per-$1,000 table violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ANNUITIES".
- Everywhere: text above y = 950; current working lines 44 px or more; nothing a student must read below 26 px.

## 6. Kit needs (as used; the i12 to i23 section of `maths-standard-kit-needs-i.md` already lists them)

- New: `ReducingBalanceTable` (i13; modes for new purchases (i16), contributions and withdrawals (i19, i20)), `InterestFactorTable` (i15; FV and PV versions in i20, i21, i23), `CreditCardStatement` (i17a's final frame, i17b), `CostSplitBars` (i12; i15, i17b, i22), `RateLadder` (i16), `PayslipLine` (i22's final frame, i23).
- Options: `PaymentPairing` on `PeriodTimeline` (i14); a statement-cycle timeline with a sliding purchase marker and cracking bracket (i16); a zone band on `PeriodTimeline` (i18); a draining tank from `GoalMeter` (i19); a collapsing timeline (i20, i23); SpreadsheetGrid rows-to-zero counter, row jump, =E2 link arrow, zero-rate check, input panel with results log (i13 to i15, i19, i22); a minimum-payment run (i17b); a coded fill layer inside the jug plate (i18, i23); an unbranded browser calculator frame for `ScreenApp` (i15, i22, i23).
- No logarithm, repayment formula or annuity formula is shown anywhere (ruling 33); `money.ts` may compute behind the scenes.

## 7. Sources cited (ruling 32; read 18 November 2026; Codex re-verifies)

- RBA statistical table F4, Advertised Deposit Rates (October 2026): bonus savers 5.05%, online savings 3.30%, 1-year term deposits 5.00%, 3-year 4.20% (i19 to i23).
- RBA statistical table F5, Indicator Lending Rates (October 2026): standard credit cards 21.74%, low-rate cards 13.49%, owner-occupier discounted variable 7.05% (i16 to i18).
- RBA statistical table F8, Personal Lending Rates (September 2026): new fixed-rate personal term loans 10.39%; card balances incurring interest 18.91% (i12 to i18, i23).
- Moneysmart: buy now pay later services; choosing a credit card; credit card calculator (i12, i16, i17b).
- ASIC: BNPL credit licensing from June 2025 (i12); instrument 20-0746 on the minimum repayment warning (i17b).
- ATO: super guarantee 12% for 2026-27; Payday Super from 1 July 2026; 15% tax on concessional contributions (i23).

Nothing recorded; human listening pending.
