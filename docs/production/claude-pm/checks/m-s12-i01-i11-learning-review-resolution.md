# Year 12 Maths Standard i01 to i11: learning review resolution

18 November 2026. This is the design author's resolution of `m-s12-i01-i11-learning-review-summary.md` and the per-design files `m-s12-<id>-learning-review.md` for i01, i02a, i02b, i03, i04, i05, i06a, i06b, i07, i08, i09, i10 and i11. It applies root's five binding decisions for this round: (1) i08 uses 5.2% (savings) against 5.6% (5-year term deposit), $64,424.15 against $65,658.29, a gap of $1,234.14, each rate labelled "example rate, check current rates" with a dated source note for Codex, term deposits "often, not always" paying more, and dots that read one way; (2) one shared device for the tiny interest blocks in i01, i02a, i03 and i05 scene 2, a labelled "zoomed in" side column beside the stack; (3) i02b keeps the generic "x√" key with the chip "often SHIFT, then the power key"; (4) i08's hatching and i11's olive stay as designed, with a builder note to check each on a real still; (5) every other should-fix applied, cheap optional findings applied, every design under 570 s, every decision recorded. All thirteen designs now carry "Revision 2 (18 Nov 2026): learning review resolved" at the top, and their Status lines say "Revision 2 (18 Nov 2026): learning review resolved". Each Revision 2 section has the detail. This round changed documents only: no speech, build, render or commit. Changed values were rechecked with SymPy 1.14 (`work/brief-resolve-standard-i1/verify.py`, `python -I`, 55 checks, 0 failures). Narration was recounted by script (`work/brief-resolve-standard-i1/count.py`, which reproduces e08's 5,632). Codex's maths check remains the authority. i12 to i23 were not touched, and i11's description "Next" line is left for the i12 to i23 author.

**Totals:** 46 findings (0 blockers, 16 should fix, 30 optional), plus root's decision 2 applied to i05 scene 2, which the review named in its summary only. Should fix: all 16 applied. 9 use the reviewer's wording or fix as written; 5 follow root's decisions (i01 #2, i02a #2 and i03 #2 by decision 2; i08 #1 and #2 by decision 1); 2 are adapted (i07 #1 uses the source's $5 tier by decision 5, rather than "this broker's flat fee" of $19.95; i02b #1's check row uses the rounded 4.17%). Optional: 28 applied (i09 #2 and i11 #3 on screen only, without narration) and 2 kept as written on the review's advice (i06a #3, now a named pace trim, and i08 #3, with its named trim). None declined.

## The shared zoom column (root's decision 2)

One new `InterestStack` part, described in the same words in the kit section of i01, i02a, i03 and i05: a coded side column immediately to the right of the stack, bar or graph it magnifies, headed "zoomed in" (hand font, 36 px), joined to the band it shows by a thin grey bracket; about 340 px wide for up to three blocks, at most 760 px for more; the band redrawn on its own scale at most 520 px tall, with a zigzag base when it does not start at $0; blocks side by side in their colour roles, labelled at 30 to 36 px; a grey dashed reference line at a stated level; every interest block or sliver at least 40 px tall; the full stack keeps its honest $0 base. Uses:

| Design, scene | Band and scale | Dashed line | What it shows |
| --- | --- | --- | --- |
| i01, 2 | $4,800 to $5,400, 0.8 px a dollar | $5,000 (P) | each $200 block at 160 px, then lifting off to the jar |
| i01, 6 | $4,800 to $5,800, 0.4 px a dollar, beside the graph | $5,000 (P) | the four bars, 80 px stacks, the "+$200" step triangle |
| i02a, 1 | $180 to $212, 12 px a dollar | $200 | $200 and $208; olive "+$8" at 96 px |
| i02a, 2 | $90 to $112, 16 px a dollar | $100 (year 1's interest) | $100, $105, $110.25; olive "+$5" and "+$10.25" at 80 and 164 px |
| i03, 3 | $8.00 to $10.40, 150 px a dollar | $8.60 (4.3% of $200) | one grey add-on column, then five amber rises, parts above the line 0 to 237 px |
| i05, 2 | $280 to $330, 8 px a dollar | $300 (6% of $5,000) | simple $300 against compound $318; olive "+$18" at 144 px |

## Should fix

- i01 #1, scene 5 (why divide by 0.05): accepted, reviewer's wording ("If five per cent is a hundred and fifty, then one per cent is thirty, and a hundred per cent, the whole principal, is three thousand dollars. That's the same as a hundred and fifty divided by zero point zero five."), with rows "1% of P = 150 ÷ 5 = $30", "100% of P = 30 × 100 = $3000" (framed) and "150 ÷ 0.05 = 3000" (tag "same answer").
- i01 #2, scenes 2, 6, 7 (steps and slopes too small): accepted. Zoom columns in scenes 2 and 6 (decision 2); scene 2's stack labels sit beside the stacks; scene 7 runs to 10 years on $0 to $12,000 (ends $7,000, $8,000, $11,200; rises about 117, 175 and 187 px).
- i02a #1, scene 4 (1.05 never becomes 1 + r): accepted, reviewer's wording ("A period is the time between interest payments, a year here. And one plus r is our one point zero five: the one is the hundred per cent you keep, and r, zero point zero five, is the five per cent added."), with the bracket "1 + 0.05 = 1.05" under "(1 + r)".
- i02a #2, scenes 1 and 2 (olive slivers too thin): accepted, zoom columns (decision 2).
- i02b #1, scene 5 (the slip has a label, not a reason): accepted, reviewer's sentence with "about four thousand five hundred and twenty dollars". The grey check row uses the 4.17% a student types: "4000 × 1.0417³ ≈ $4522 > $4500 ✗" (4,521.56; the review's $4,521.12 is the unrounded 12.5% ÷ 3; the spoken "about four thousand five hundred and twenty" fits both). Feedback 2 keeps its short form.
- i03 #1, scene 4 (why not take 3% off): accepted, reviewer's wording, with the one-year check rows "200 × 0.97 = 194 → 194 × 1.03 = 199.82 ✗" and "200 ÷ 1.03 = 194.17 → 194.17 × 1.03 = 200 ✓" ("check forwards").
- i03 #2, scene 3 (growing blocks look equal): accepted, zoom column (decision 2). The band starts at $8.00, not $0 as the review sketched, so the growth shows as 55 to 237 px rather than 7 to 32 px.
- i04 #1, scene 6 (formula read, not explained): accepted, reviewer's sentence and the brackets "B2/B4: rate per period", "B3*B4: number of periods".
- i05 #1, scene 4 (cell formulas not tied to known formulas): accepted, reviewer's two sentences and tags ("5000: P", "0.06: r", "A2: n (the year)"; "1.06: 1 + r", "^A2: to the power n"; chips "i01: P + Prn", "i02a: PV(1 + r)ⁿ").
- i06b #1, scene 2 (axis break says $3, axis says $2.50): accepted, reviewer's wording; tag "break: axis starts at $2.50".
- i07 #1, scenes 1 and 3 (small-trade cost unfair to current fees): accepted and adapted by root's decision 5. Scene 3 uses the dated source's current tier ($5 up to $1,000): $5 is 1% of a $500 trade, three times the 0.32% that $19.95 is of $6,200; the sale receives $495; the price must rise 2% ($10) to cover two fees; "Any fixed fee is a bigger share of a small trade." A shared 0% to 2% "fee as a share" bar shows the comparison. Scene 1: "it can eat into your gains".
- i08 #1, scene 4 and the anchor (ruling 35; "locked away, so it pays more"): accepted (decision 1). 5.2% and 5.6%; $64,424.15, $65,658.29, $1,234.14; "because this term deposit's rate is higher and fixed. Term deposits often pay more for money that's locked away, but not always. Some savings accounts pay bonus rates that match them, so always compare the actual rates." Each rate has the chip "example rate, check current rates"; the "Money sources" note dates each rate and asks Codex to confirm a dated 5-year rate (the cited page's 5.5% to 5.7% is for 12 months).
- i08 #2, scene 3 (dots mean good and bad): accepted (decision 1). The dots read one way, more is better for you, on a 0-to-3 scale (risk now shows safety, cost to enter shows cheapness), with each column's direction written under its head and the legend "more dots = better for you".
- i10 #1, scene 3 ("V nought" without its meaning): accepted, reviewer's wording, and the tag "V₀: the starting value".
- i11 #1, attempt 2 and feedback 2 (graph cannot be read to the values asked): accepted. Minor gridlines every $2,000 (labels every $10,000); feedback 2 says "about fourteen thousand"; label "≈ $14,000 from the graph (calc: $14,362.46)".
- i11 #2, scene 5 (the cell that turns itself into 0): accepted. B9 stays "−2000", crossed in grey, tag "the formula keeps going; the model stops at $0".

## Optional

- i01 #3 (per-period tags): applied ("the rate per period, r, here per year, ... the number of periods, n, here years").
- i01 #4 (studio speakers): applied.
- i02a #3 (why one go): applied ("so no digits are lost along the way"; grey crossed "4000 × 1.34 = $5360.00", tag "38 cents lost").
- i02a #4 (feedback 1 slip): applied. The red slip is now "3000 × 1.55⁴ ≈ $17 316.02" (caption "5.5% is 0.055, so × 1.055"), said as "One point five five is the slip, a fifty-five per cent rise." (new cue "rise").
- i02b #2 ("times itself three times"): applied ("three of it multiplied together", scenes 4 and 5).
- i02b #3 (root key): applied by root's decision 3.
- i02b #4 (percentage step): applied ("0.04004 × 100 = 4.004% ≈ 4.00% p.a.").
- i03 #3 (vintage guitar): applied.
- i03 #4 (asset): applied, reviewer's wording.
- i04 #2 (k): applied, reviewer's wording, with the chip "k = periods in a year: here k = 4".
- i04 #3 (axis break at $10,000): applied in scenes 2 and 5.
- i05 #2 (select the year column): applied.
- i05 #3 (steeper at the start): applied, reviewer's wording; the reserve trim list names the new sentence.
- i05 #4 (key note 4): applied ("=5000+5000*0.06*A2 and =5000*1.06^A2 (your P and r)").
- i06a #1 (yield gloss): applied.
- i06a #2 (cents to dollars): applied, with the grey crossed "162 ÷ 44.60 × 100% = 363%".
- i06a #3 (six column names): kept as written; the "day before" sentence is named as the pace trim.
- i06b #2 (last minus first): applied.
- i06b #3 (month 2): applied ("from five forty to five ten").
- i07 #2 (why eight): applied in the new form ("two per cent, ten dollars").
- i07 #3 (feedback 2 length): applied (", the larger" cut).
- i07 #4 (scene 4 cues): applied ("work out both" on its own cue; bars on "That's more than").
- i08 #3 (long scene 5): kept, with its named trim.
- i08 #4 (feedback 2 length): applied, plus " at four fifty per hundred" cut (the row shows it) to bring it under 30 s.
- i09 #1 (seven drops): applied, reviewer's wording, with the grey row "7 × 7400 = 51 800 < 55 000".
- i09 #2 (exact division): applied to key note 4 on screen ("exactly a whole number: one more year").
- i10 #2 (reason for the slip): applied ("because after the first year, it's twenty-two per cent of a smaller value").
- i10 #3 (15% investment): applied, 8% ($5,832.00 and $4,232.00).
- i11 #3 (why year 4): applied as a gap readout on screen ($2,000, $2,400, $1,520, then higher by $384).
- i11 #4 (formula tags, chart selection): applied.

## Root's decisions and housekeeping

- Decision 1 (i08): applied as above. The values agree from rounded and full values.
- Decision 2 (zoom column): one part, specified once in the same words in i01, i02a, i03 and i05; i03 draws it beside `GrowthBars`.
- Decision 3 (i02b root key): applied; open decision 1 closed.
- Decision 4 (phone-size colours): i08's hatching and i11's olive are unchanged, each with a builder note in its Revision 2 section to check a real still before grade A. i08 open decision 2 and i11 open decision 2 are closed.
- Decision 5: every should-fix is applied, and 28 of 30 optional findings; the other 2 are kept as the review advised; nothing is declined.
- Ruling 37 (titles over 80 characters), applied as housekeeping: i04 "Rate, Term and Compounding Period | Year 12 Maths Standard" (58), i05 "Simple vs Compound Interest in a Spreadsheet | Year 12 Maths Standard" (68), i08 "Choosing an Investment Strategy | Year 12 Maths Standard" (56). i05's and i07's description "Next" lines and i09's "Builds on" line name i08 by its new title. i02b (79) and i06a, i06b (80) keep their titles.
- Open decisions closed by rulings 31, 34 to 38, the review or root's decisions are marked "Closed in Revision 2", with the Revision 1 text kept.
- New cues: i02a "rise" (feedback 1, replacing "nothing"); i08 "rates" (scene 4, replacing "away"); i10 "dollars" (feedback 2, replacing "fifty"). Hand tags are added to each design's list. Every bold cue is quoted in its scene's Visual in spoken order, and no em dash (U+2014) appears in any of the thirteen designs (both checked by script, `work/brief-resolve-standard-i1/cues.py`).

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Speech before notes | Feedback 1, 2 | Longest scene |
| --- | --- | --- | --- | --- | --- | --- |
| i01 | 5,977 | 6,132 | about 552 s | about 507 s | 28 s, 27 s | scene 5, 768 |
| i02a | 5,026 | 5,248 | about 486 s | about 441 s | 27 s, 29 s | scene 4, 824 |
| i02b | 5,030 | 5,214 | about 481 s | about 436 s | 28 s, 30 s | scene 5, 827 |
| i03 | 5,264 | 5,502 | about 505 s | about 460 s | 24 s, 27 s | scene 4, 760 |
| i04 | 5,137 | 5,370 | about 493 s | about 448 s | 29 s, 27 s | scene 4, 720 |
| i05 | 5,326 | 5,495 | about 504 s | about 459 s | 29 s, 28 s | scene 2, 772 |
| i06a | 5,030 | 5,135 | about 475 s | about 430 s | 27 s, 21 s | scene 4, 618 |
| i06b | 5,004 | 5,084 | about 471 s | about 426 s | 26 s, 26 s | scene 5, 600 |
| i07 | 5,005 | 5,108 | about 473 s | about 428 s | 28 s, 30 s | scene 4, 742 |
| i08 | 5,633 | 5,779 | about 524 s | about 479 s | 28 s, 28 s | scene 5, 881 |
| i09 | 5,168 | 5,228 | about 482 s | about 437 s | 30 s, 24 s | scene 5, 860 |
| i10 | 5,001 | 5,093 | about 472 s | about 427 s | 28 s, 29 s | scene 3, 755 |
| i11 | 5,566 | 5,580 | about 509 s | about 464 s | 30 s, 27 s | scene 3, 676 |

All thirteen are under 570 s with holds (margins 18 s for i01 to 99 s for i06b) and within 5,000 to 6,800 characters. With-holds totals are the speech plus Revision 1's 89 s of holds and settling, plus about 2 s of settling for the zoom columns in i01, i02a, i03 and i05. Feedbacks rounded to 30 s are 393 to 397 characters (29.6 to 29.8 s). No reserve trim was needed; i01's margin is the thinnest, with two named trims. The longest single scenes are i08 scene 5 (881, about 66 s; named trim), i09 scene 5 (860, about 65 s) and i02b scene 5 (827, about 62 s). These are speech-only estimates; measure them on the Google voice.

## Joins

All unchanged: a13 and a08 → i01; i01 → i02a → i02b → i03; i03 → i04 and i05; i04 → i05; i05 → i06a and i08; i06a → i06b → i07 → i08; i08 → i09 → i10 → i11; i11 → i12 (the e-bike, ruling 31). No final or opening frame changed. Description lines that name i08 now use its ruling 37 title.

## For root

- i07: the small-trade example now uses the source's $5 tier, so it no longer uses the site's $19.95 on $500. Confirm this reading of decision 5, or ask for the reviewer's "with this broker's flat fee" version with $19.95 (about 4%, then 8%).
- i08: Codex must find a dated 5-year term-deposit rate near 5.6% and a dated savings rate near 5.2%. If none fits, choose replacement rates; the method is unchanged, and four values and two sentences depend on them.
- i08 scene 3: the risk and cost columns now show safety and cheapness (0 to 3 dots, more is better for you). Confirm this over the alternative of keeping Revision 1's dots with direction labels only.
- Ruling 37 titles for i04, i05 and i08 are applied here. The i12 to i23 author and any a-strand "Next" line that names these videos may need the new titles.
- Still unruled: i01 decision 1 ("Builds on" titles), i05 decision 2 (two-route final frame), i06b decisions 1 and 2, i07 decision 2 and i10 decision 1 (each backed by the review), and i09 decision 2 (the title's subscript).
- `checks/root-decisions-maths-s12-i01-i11.md` has a Revision 1 length table that this round did not edit, and the parallel production board is root's to update.

Nothing recorded; human listening pending.
