# Year 12 Maths Standard i12 to i23: learning review resolution

18 November 2026. This is the design author's resolution of `m-s12-i12-i23-learning-review-summary.md` and the per-design files `m-s12-<id>-learning-review.md` for i12, i13, i14, i15, i16, i17a, i17b, i18, i19, i20, i21, i22 and i23. It applies root's four binding decisions for this round:

1. i21 moves to 6% p.a. compounded monthly (ruling 40), with i20's handoff to match.
2. i17b's 3-year line is kept pending Codex, its source is the National Consumer Credit Protection Regulations, and the box layout is illustrative.
3. i12 gets a dated BNPL source and the "Builds on" title.
4. Every other should-fix finding is applied, cheap optional findings are applied, every design stays under 570 s, and every decision is recorded.

It also applies root's note of 18 Nov on the r01 join (see Joins). All thirteen designs now carry "Revision 2 (18 Nov 2026): learning review resolved" at the top, and their Status lines say "Revision 2 (18 Nov 2026): learning review resolved". Each Revision 2 section has the detail.

This round changed documents only: no speech, build, render or commit. Changed money was rechecked with SymPy 1.14 to the cent (`work/brief-resolve-standard-i2/verify.py`, `python -I`, 44 checks, 0 failures). Narration was recounted by script, as the sum of the scene strings (`work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632). Codex's maths check remains the authority. In i01 to i11, only i11's description "Next" line was changed.

**Totals:** 32 findings (1 blocker, 12 should fix, 19 optional).

- **Blocker and should fix:** all 13 applied. 10 use the reviewer's wording or fix as written, or follow root's decisions as written. 3 are adapted: i18 #2, i20 #2 and i23 #1.
- **Optional:** 17 applied, 1 declined (i13 #1, for length) and 1 deferred to Codex by root decision 2 (i17b #2).

## Blocker and should fix

- **i21 #1, scenes 1, 3, 4 and 5 (ruling 40), blocker:** accepted (root decision 1).
  - **Kept from the site:** the goal, term and method ($50,000 in 8 years, contributions at the end of each month).
  - **New rate:** 6% p.a. compounded monthly, the 0.5% column i20 already uses.
  - **Contribution:** FV factor 122.8285, so $407.08 a month, rounded up.
  - **Why round up:** scene 3 says why $407.07 falls short. "Four hundred and seven dollars and seven cents a month, times the factor, only reaches forty-nine thousand nine hundred and ninety-nine dollars eighty. That's twenty cents short." A grey row shows the product.
  - **Meter:** $407.08 reaches $50,001.03. Both meter readouts now use the table factor. Revision 1 showed a table value at the short end and an exact one at the long end.
  - **Interest:** $39,079.68 is paid in, so "almost eleven thousand dollars" is interest ($10,921.35; tag "about $10,900"). The factor is said as "a hundred and twenty-two".
  - **Single sum:** PV factor 76.0952 gives $30,976.83, which grows to $50,001.02.
  - **Table extracts:** the 0.5% and 1% columns at n = 84, 96 and 120. "Exam tables will give you the column you need" and its chip are gone.
  - **Rate source:** the chip reads "6% is a teaching rate" against RBA F4 (bonus savers 5.05% p.a.).
  - **Other text updated:** the boundary, main question, Decisions, author notes, Numbers, kit check, Codex brief, description and open decisions.
  - **Unchanged:** A1, A2 and the memory aid's new case.
  - The Revision 1 values are kept in author note (c2) for the record.
- **i21 #2, feedback 2 (6.8019 misspoken):** accepted ("six point eight oh one nine").
- **i20 #3, scene 13 (handoff rate):** accepted (root decision 1). "at six per cent a year, compounded monthly", and the card reads "6% a year, monthly". This is i21's opening frame again.
- **i20 #1, scene 6 (the present value is stated, not shown):** accepted, visual only.
  - The withdrawal table runs once from $9,074.75 to $0.01, as the reviewer wrote it, under the sentence about money earning interest while it waits.
  - Tags: "exactly pays all four" and the grey "1 cent: the factor is rounded".
  - Revision 1's grey chip "$1,082.43 was left" is dropped, because the run shows the same idea.
  - The Decisions note is corrected to $1,082.41 (the review's housekeeping item).
- **i20 #2, attempt 1 and feedback 1 (unreachable "6% column" slip):** accepted, adapted.
  - The red slip is "PV column: 250 × 42.5803 = $10,645.08", captioned "saving towards a future amount: FV".
  - The narration is "Using the present value column is the slip." The reviewer's second sentence is left out because feedback 1's first sentence already says it, which keeps the feedback at about 30 s.
- **i12 #1, BNPL source (ruling 32):** accepted (root decision 3).
  - **Date confirmed:** ASIC Information Sheet 285, "Buy now pay later credit contracts: Credit licensing" (https://www.asic.gov.au/regulatory-resources/credit/buy-now-pay-later-credit-contracts-credit-licensing; issued January 2025, read 18 November 2026), says "From 10 June 2025, anyone engaging in credit activities involving buy now pay later contracts must hold an Australian credit licence".
  - The dated narration and chip therefore stay.
  - The Moneysmart BNPL page (last updated 6 October 2026) does not state the date, so it is cited for fees only.
- **i15 #1, scene 5 (the false reason "mostly interest"):** accepted, reviewer's narration and visuals.
  - New reason: "the early repayments carry the most interest, so less of each one comes off the loan", with $347.39 off in month 1, row 1's $150.00 ringed and the new grey chip.
  - The Decisions and teaching checks match.
  - The review's optional extra row is not added: the 40% and 64% bars carry the point, and the board stays lighter.
- **i16 #1, scene 5 ("closing balance" before its meaning):** accepted. "the whole closing balance, everything the statement says you owe, by the due date".
- **i17a #1 (r means the daily rate on screen and the yearly rate in the notes):** accepted (root decision 4).
  - Every on-screen daily value now reads "daily rate = … ÷ 365", never r. This applies to scene 3, scene 4 and feedback 1.
  - Scene 3 keeps "FV = PV(1 + r)ⁿ" with the chip "i02: r is the rate per period".
  - The card keeps "I = P(1 + r ÷ 365)^days − P" with the line "r = yearly rate as a decimal; r ÷ 365 = daily rate".
  - Key note 1 is "r = yearly rate as a decimal; daily rate = r ÷ 365", and note 5 says "with r typed as the yearly rate".
  - The narration already said "daily rate" and is unchanged.
- **i18 #1, scene 3 (a crossed slip about a minimum the race never shows):** accepted, reviewer's wording. The slip is "same repayment, so the same cost", captioned "the card's interest bite is bigger". The Decisions, mistake list and teaching checks match.
- **i18 #2, feedback 1 (money misheard as one number):** accepted, adapted.
  - The loan line is the reviewer's.
  - The card line is shorter: "The card pays twenty-six payments plus the last one, and its interest is one thousand and forty-five thirty-six." The row shows the "− 4,000".
  - No two amounts are now said back to back.
  - Feedback 1 is 406 characters, about 31 s. The reviewer's full wording would have been about 32 s.
- **i22 #1, key note 3:** accepted. "Longer time or higher rate: the interest grows more than in proportion." Scene 8 adds "in the interest".
- **i23 #1, scene 4 (totals never given):** accepted, adapted.
  - New narration: "So in total, saving costs you twenty-three thousand four hundred, and borrowing costs twenty-nine thousand eight hundred and forty-three dollars forty. Having the car three years sooner costs over sixty-four hundred dollars."
  - The board row is "save: $23,400 paid in; borrow: 60 × $497.39 = $29,843.40", and the framed row is "29,843.40 − 23,400 = $6,443.40 more paid out".
  - "Over" replaces "about". The saver also keeps $269.37, so the gap is $6,443.40 or $6,712.77 depending on whether that is counted. Both are over $6,400.
  - The repeated "interest does the rest" is left out, because the sentence before already says it.

## Optional

- **i12 #2, scene 3:** applied ("more than two and a half times"; grey row "≈ 2.58").
- **i12 #3, scene 3 task strip:** applied. The strip holds the task, and the givens card holds the three options.
- **i13 #1, scene 5 (long-loan sentence):** declined. It costs about 8 s against a 13 s margin. Scene 5 already gives the cause, and i15 Revision 2 now gives the numbers for Standard 2.
- **i13 #2, scene 7:** applied ("all that's left").
- **i13 #3, scene 6:** applied. The givens card fades once E2 shows its formula.
- **i14 #1, scene 7 and the card:** applied ("or pay half every fortnight"; "Extra, early, or fortnightly halves: a shorter loan and less interest."). The handoff line, the key-notes card, the Decisions and the memory aid check match.
- **i14 #2, scene 3:** applied, visual only. The formula bar shows "=315.76+extra" for one beat.
- **i14 #3, scene 4:** applied ("One plain check.").
- **i15 #2, scene 1:** applied ("Most loan questions in the exam are one of these four.").
- **i15 #3, scene 5:** applied ("from the reducing balance video").
- **i16 #2, scene 2:** applied ("the loan table's columns, with new purchases added"; hand tag "the loan's columns + new purchases").
- **i16 #3, scene 1:** applied ("Lots of adults have one.").
- **i17a #2, feedback 1:** applied ("minus the eighteen fifty").
- **i17b #1, scene 2:** applied ("because last month's balance wasn't paid in full").
- **i17b #2, warning box layout:** deferred to Codex (root decision 2).
  - The 3-year line is kept, and the box is marked "illustrative" in the Decisions and in scene 5.
  - The source is cited as the National Consumer Credit Protection Regulations 2010, in place of the unconfirmed ASIC instrument 20-0746.
  - Open decision 1 holds the two-row table redraw, ready if Codex confirms that real statements use it. The numbers and narration would not change.
- **i18 #3, scene 3 task strip:** applied ("$6,000 for a car repair: compare a personal loan and a card on the same $282.44 a month."). The givens card gains "2 years".
- **i19 #1, scene 5:** applied ("set out the way you'd write it in an exam"). The same fix is applied where the review pointed: i17b scene 6 and i22 scene 7 ("a classic example").
- **i22 #2, scene 7:** applied ("Here's a classic example.").
- **i23 #2, scene 1 visual:** applied. Scene 5 adds "A lender sets a home loan limit the same way.", and the house key badge rings.

## Root's decisions and housekeeping

- **Decision 1 (i21, ruling 40):** applied as above. Every changed value is in `verify.py`: factors, contribution, both meter readouts, paid in, interest, single sum and its growth, the exact sum (not shown), and all twelve extract cells. i20 scene 13 and i21's boundary carry the same rate.
- **Decision 2 (i17b):** applied. The 3-year line is unchanged, the source is the regulations, the layout is illustrative, and Codex brief item 3 names the regulations.
- **Decision 3 (i12):** applied. The page states the 10 June 2025 date, so the dated wording stays. i12's "Builds on" line reads "Straight-Line vs Declining Balance Depreciation". i11's "Next" line reads "Buy Now, Pay Later and Loans: What They Really Cost", the only edit in i01 to i11.
- **Decision 4:** every remaining should-fix is applied, with three adaptations, each recorded. Cheap optional findings are applied. All thirteen are under 570 s.
- **Review housekeeping:** i20's $1,082.43 note is corrected to $1,082.41 (author note only; the chip is gone). i21's $50,001.04 note no longer applies, because the values changed.
- **Cues and dashes:** new or moved cues are i18 "six" (feedback 1), i21 "six" (second, scene 3) and "cents", i21 "eight" and "three" (scenes 4 and 5), and i23 "sooner". Every bold cue is quoted in its scene's Visual in spoken order, checked by script (`work/brief-resolve-standard-i2/cues.py`). No em dash (U+2014) or en dash (U+2013) appears in any of the thirteen designs or in i11.
- **Open decisions:** those closed in this round are marked in each design (i12 #1, i21 #1). The rest are kept, with the new values where they changed (i21 #2 and #3).

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Margin | Feedback 1, 2 |
| --- | --- | --- | --- | --- | --- |
| i12 | 5,249 | 5,253 | about 494 s | 76 s | 28 s, 29 s |
| i13 | 6,098 | 6,115 | about 558 s | 12 s | 30 s, 30 s |
| i14 | 5,735 | 5,750 | about 535 s | 35 s | 28 s, 29 s |
| i15 | 5,268 | 5,446 | about 508 s | 62 s | 28 s, 30 s |
| i16 | 5,292 | 5,335 | about 500 s | 70 s | 28 s, 25 s |
| i17a | 5,089 | 5,086 | about 478 s | 92 s | 28 s, 26 s |
| i17b | 5,313 | 5,347 | about 503 s | 67 s | 29 s, 23 s |
| i18 | 5,017 | 5,087 | about 481 s | 89 s | 31 s, 23 s |
| i19 | 5,240 | 5,252 | about 494 s | 76 s | 26 s, 27 s |
| i20 | 5,535 | 5,526 | about 514 s | 56 s | 30 s, 24 s |
| i21 | 5,073 | 5,093 | about 480 s | 90 s | 26 s, 28 s |
| i22 | 5,642 | 5,642 | about 524 s | 46 s | 31 s, 25 s |
| i23 | 5,422 | 5,557 | about 517 s | 53 s | 30 s, 27 s |

- **Caps and ranges:** all thirteen are under 570 s with holds and within 5,000 to 6,800 characters.
- **Thinnest margin:** i13 (12 s), which is why its optional finding 1 is declined. It keeps its named reserve trims.
- **Longest single scene:** i23 scene 4 (1,008 characters, about 76 s, one board). A new reserve trim is named: "How long does saving take, and what does borrowing cost?" (the task strip carries it).
- **Long feedbacks:** i18 feedback 1 and i22 feedback 1 are about 31 s, at the top of the brief range.

These are speech-only estimates; measure them on the voiced take.

## Joins

- **i11 → i12:** the frame is unchanged. i11's "Next" line and i12's "Builds on" line now name each other's titles.
- **i20 → i21:** matched. Both carry "6% a year, monthly"; no factor or contribution is shown.
- **i23 → r01 (root note, 18 Nov 2026):** the r01 pack opens on the cordial jug from i18's Standard 1 panel. i23's final frame already ends on that jug (`ma11-water-jug-v1.png` with the coded cordial layer, no numbers, no roof triangle), so it is confirmed, not changed. The kit-needs house roof triangle moves to r13 and r14, which hand to t01. Standard 1 (from i18) and Standard 2 (from i23) reach r01 on one picture. This is recorded in i23's Handoff decision and open decision 2, and in i18's open decision 1.
- **All other joins:** unchanged. i14's handoff changes in words only; its frame is the same.

## For root

- **i21 against the site:** the site's lesson02 card 05 still uses 5.4% p.a. ($417.57), while the video now uses 6% ($407.08). The description says the rates are examples. Root may want a site note, or a line in the description, so a student moving between the two is not confused.
- **i17b:** Codex still has to confirm three things under ruling 41: the 3-year line, the regulation provision, and whether the warning is set out as a table. If it is a table, only the box drawing changes.
- **i12:** INFO 285 was read by web fetch on 18 Nov 2026. Codex re-verifies it in the maths check.
- **Adaptations to confirm:**
  - i23 says "over sixty-four hundred" instead of "about". If root prefers "about", the board's $6,443.40 should carry a grey "saver keeps $269.37" chip.
  - i20 drops the "$1,082.43 was left" chip in favour of the run.
  - i18 feedback 1 is about 31 s.
- **Margins:** i13's 12 s margin is the thinnest in the strand. Accept, or ask for one of its named trims before voicing.
- **r01:** ruling 42 still calls the teaser provisional until r01 is designed. The r01 pack now agrees with the jug.

Nothing recorded; human listening pending.
