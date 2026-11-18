# Root decisions: Year 12 Mathematics Standard i01 to i11 (first designs, Revision 1)

18 November 2026. Design author's record for root: the first-revision designs of the investment and depreciation half of the Year 12 Investment and loans strand, their joins, splits, departures from the packs and open questions. Text only: no speech, build, render or commit. Inputs: packs `../pre-design/maths-standard/math-s12-i01.md` to `i11.md`; route inputs `../../programme/maths-standard-route-inputs-2.json`; kit `maths-standard-kit-needs-i.md`; rulings `root-rulings-maths-standard-outline.md` (1 to 33); format from `../lessons/math-s12-a04a.md`, `a04b.md`, `a06.md` (Revision 2) and the faults in `m-s12-a01-a06-learning-review-resolution.md`; `../maths-visual-standard.md`; `AGENTS.md`. Numbers recalculated with SymPy 1.14 (scratchpad `s12i/verify.py`, `python -I`); narration counted with a copy of `work/brief-resolve-standard-a1/count.py` (reproduces e08's 5,632), which also checked every bold cue against its scene's Visual and found no em dash (U+2014).

## Designs written (13 files)

`../lessons/math-s12-i01.md`, `i02a.md`, `i02b.md`, `i03.md`, `i04.md`, `i05.md`, `i06a.md`, `i06b.md`, `i07.md`, `i08.md`, `i09.md`, `i10.md`, `i11.md`. i11 was written first, so its final frame is fixed for the i12 author.

## Lengths (by script, 13.3 characters per second; holds as in the a-strand: 20 s countdowns, 6 s short holds, about 24 s settling, 39 s of the 45 s notes hold beyond its line)

| Design | Course | Characters | Scenes | With holds | Feedback 1, 2 | Anchor |
| --- | --- | --- | --- | --- | --- | --- |
| i01 | S1, S2 | 5,977 | 14 | about 538 s | 28 s, 27 s | gap-year fund, interest paid into the coin jar ($5,000 at 4%) |
| i02a | S1, S2 | 5,026 | 12 | about 467 s | 29 s, 29 s | birthday money left in ($2,000 at 5%) |
| i02b | S1, S2 | 5,030 | 12 | about 467 s | 28 s, 30 s | saving for a phone ($1,500 in 2 years) |
| i03 | S1, S2 | 5,264 | 13 | about 485 s | 24 s, 27 s | the weekly grocery shop ($200, ABS CPI 4.3%) |
| i04 | S2 | 5,137 | 13 | about 475 s | 29 s, 27 s | a hair salon's $10,000 equipment fund |
| i05 | S1, S2 | 5,326 | 13 | about 489 s | 28 s, 28 s | a coffee cart business's $5,000, paid out against left in |
| i06a | S2 | 5,030 | 13 | about 467 s | 27 s, 21 s | an invented gym chain's share (30c on $6.00, then $7.50) |
| i06b | S2 | 5,004 | 13 | about 465 s | 24 s, 26 s | an invented phone network's six month-end prices |
| i07 | S2 | 5,005 | 12 | about 465 s | 28 s, 31 s | an order for 500 shares from savings |
| i08 | S1, S2 | 5,633 | 13 | about 513 s | 28 s, 31 s | four places for $50,000 |
| i09 | S1, S2 | 5,168 | 13 | about 478 s | 30 s, 24 s | an apprentice's $6,200 tool kit |
| i10 | S1, S2 | 5,001 | 12 | about 465 s | 28 s, 29 s | a new $38,500 ute at 22% |
| i11 | S1, S2 | 5,566 | 13 | about 507 s | 30 s, 28 s | a $40,000 delivery van, $6,000 a year against 20% |

All are under 570 s and inside 5,000 to 7,000 characters. Two feedbacks run about 31 s (i07 and i08 feedback 2); each names its cut if the voiced take is long. These are speech-only estimates; measure on the Google voice.

## Splits (ruling 29)

- **i02: split as ruled** into i02a (future value, interest earned) and i02b (present value and the rate). Both share outline number 15 and quote the full syllabus point.
- **i04: not split.** One anchor (the salon's $10,000) carries all three changes; the per-period conversion is one worked example; the spreadsheet repeats the changes. About 475 s. Fallback recorded in the design (i04a rate and term; i04b the period).
- **i06: split under the test.** One video needs about nine teaching scenes (share and risk, the table, the yield, dividend paid, the price-up-yield-down paradox, a hand graph, a spreadsheet chart, percentage change, two shares and risk), about 7,000 characters and 616 s with holds. Fitting it under 570 s would drop the site's own hook or the digital-tool demand. So **i06a** (share tables, dividends, yield: `cieba53790` tables, `ci8a691aa3`) and **i06b** (a share's value over time: `cie1731909`, `cieba53790` graphs), both outline number 19. Root to confirm.

## Joins (each final frame is the next video's opening frame)

| Join | Frame |
| --- | --- |
| a13 or a08 → i01 | a13's final frame (coin jar beside empty axes, "the same amount added each year: what shape?"), which matches a08's right panel. i01 answers it with paid-out stacks lining up into a straight line. |
| i01 → i02a | The account card "savings account" with its violet bar relabelled "$5,200?"; the coin jar tipping a teal "$200" stack back into the account; amber chip "next year: 4% of $5,200 = ?"; chips "Next: compound interest", "?". i02a answers $208 in its first sentences. |
| i02a → i02b | The phone `ma12-phone-v1.png` (500 px, a small object) with tag "new phone: $1,500"; ladder "? now → × 1.05 → ? → × 1.05 → $1,500 in 2 years"; amber chip "5% p.a., compounded annually"; chips "PV = ?", "Next: working backwards", "?". |
| i02b → i03 | The grocery basket `ms12-grocery-basket-v1.png` with tag "this week: $200"; empty five-rung ladder "$200 → × ? … → ? in 5 years"; grey chip "prices go up by a percentage each year"; chips "Next: inflation and appreciation", "?". No rate. |
| i03 → i04 (S2) and i05 (S1) | Two-route frame split by a grey rule. Left "Standard 2": the salon chair `ms12-salon-chair-v1.png` with "equipment fund: $10,000", amber chips "higher rate?", "longer?", "added more often?", chip "Standard 2 next: what changes the future value?". Right "Standard 1": the coffee cart `ma11-coffee-cart-v1.png` with account cards "paid out" (blue) and "left in" (teal), each "$5,000 at 6% p.a.", grey chip "side by side: how far apart?", chip "Standard 1 next: simple against compound". Chips "Next", "?". i04 fades the right panel. |
| i04 → i05 | i03's right panel, full-frame (coffee cart, the two accounts, the grey chip; chip "Next: simple against compound", "?"). So i05 opens on the same picture from either route. |
| i05 → i06a (S2) and i08 (S1) | Two-route frame. Left "Standard 2": the kettlebell `ma11-kettlebell-v1.png` beside a coded share row "Company / Last / Div / Yield" = "Larkspur Fitness Ltd (a gym chain) / $6.00 / 30c / ?", chip "Standard 2 next: shares, dividends and yield". Right "Standard 1": four labelled objects, the coin jar ("savings account"), `ms12-term-deposit-certificate-v1.png` ("term deposit"), a small share row with a grey "Standard 2" chip ("shares"), `ms12-investment-unit-v1.png` ("property"); chip "Standard 1 next: which investment suits which goal?". i06a fades the right panel. |
| i06a → i06b | The phone tower `ma11-phone-tower-v1.png` with "Ridgeline Mobile Ltd (a phone network)"; table "month 1 to 6 / closing price 3.20, 3.55, 3.40, 3.90, 4.15, 3.95"; empty axes; chips "up every month?", "Next: a share's value over time", "?". |
| i06b → i07 | The full coin jar `ma12-coin-jar-full-v1.png` tagged "savings"; a coded order ticket "BUY / shares: 500 / price per share: $12.40 / trade value: ? / brokerage: ? / total cost: ?"; chips "+ a fee?", "Next: brokerage and total cost", "?". |
| i07 → i08 | i05's right panel, full-frame (the four labelled objects; chips "Next: which investment suits which goal?", "?"). |
| i08 → i09 | The tool box `ms12-tool-box-v1.png` with tag "new tools: $6,200"; empty axes "value ($)", "years"; grey chip "worth less each year?"; chips "Next: depreciation", "?". |
| i09 → i10 | The ute `ms12-ute-v1.png` with tag "new: $38,500"; empty axes; grey chip "the same dollars every year, or a percentage of what it's worth now?"; chips "Next: declining-balance depreciation", "?". No rate. |
| i10 → i11 | The delivery van `ma12-delivery-van-v1.png` with tag "$40,000"; chips "straight-line: $6,000 a year" (blue) and "declining balance: 20% a year" (olive); grey chip "which loses value faster?"; chips "Next: comparing the two methods", "?". |
| **i11 → i12 (ruling 31)** | See the next section. |

## The i11 to i12 join (ruling 31): i11's final frame, precisely

For the i12 author to confirm in their decisions file. i11 scene 12 ends on this frame, and scene 13 (key notes) cross-fades back to it silently; it is i12's opening frame.

- Board clear (paper background), header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS".
- Centre-left: the new painted e-bike `ms12-ebike-v1.png`, about 1,100 px wide: a new, unbranded commuter e-bike in side view facing right, step-through frame in muted teal-grey, a battery on the down tube, rear hub motor, mudguards, rear rack, small front basket, front light; no dock or share-scheme hardware. Briefed in i11's Codex asset brief; painted before the i11 build (ruling 17).
- Hanging by its string from the handlebar: the reused swing tag `ma12-swing-tag-v1.png` (a blank cream card tag with a string loop and four ruled lines), about 300 px tall. Coded text on it: "$3,000" (48 px, ink) on the first ruled line; "buy now, pay later?" (hand font, 36 px, amber) across the next two lines.
- Top left: a small grey thumbnail (360 px wide) of i11's van chart (straight line and curve crossing) with the grey chip "What things are worth: done" (30 px). i12 may fade it on its first sentence.
- Right of the bike: chips "Next: the real cost of borrowing" (36 px) and "?" (44 px).
- Nothing else: no payment options, instalments, interest rates, fees, terms or totals. The narration's last lines: "Here's an e-bike for three thousand dollars. The tag says you could buy it now, and pay later. But what does paying later really cost? That's next."

The price ($3,000) follows the i12 pack's e-bike. If i12 wants a different price or chip wording, only i11 scene 12's tag text changes. The e-bike plate is i12's anchor too, so i12 needs no separate brief for it.

## Paint order (ruling 17: each new plate exists before the build that first shows it)

| Plate (new, `ms12-`) | Briefed in | First shown | Also used |
| --- | --- | --- | --- |
| `ms12-gift-envelope-v1.png` | i02a | i02a scene 2 | none |
| `ms12-grocery-basket-v1.png` | i02b | i02b final frame | i03 anchor |
| `ms12-investment-unit-v1.png` | i03 | i03 scene 6 | i05 and i07 final frames, i08 |
| `ms12-salon-chair-v1.png` | i03 | i03 final frame | i04 anchor |
| `ms12-term-deposit-certificate-v1.png` | i05 | i05 final frame | i07 final frame, i08 |
| `ms12-tool-box-v1.png` | i08 | i08 final frame | i09 anchor |
| `ms12-mini-excavator-v1.png` | i09 | i09 scene 5 | none |
| `ms12-ute-v1.png` | i09 | i09 final frame | i10 anchor |
| `ms12-ebike-v1.png` | i11 | i11 final frame | i12 anchor |

Reused plates (viewed 18 Nov 2026): `ma12-coin-jar-v1.png`, `ma12-coin-jar-full-v1.png`, `ma11-studio-speakers-v1.png`, `ma12-calculator-v1.png`, `ma12-phone-v1.png` (small object only, not f14's app look), `ma11-coffee-cart-v1.png`, `ma11-kettlebell-v1.png`, `ma11-phone-tower-v1.png`, `ma11-trade-van-v1.png`, `ma12-delivery-van-v1.png`, `ma12-swing-tag-v1.png`. Not reused, by the kit-needs list: `ma12-apartment-building-v1.png` (f12), `ma12-used-hatchback-v1.png` (a06, a07, a13 and f09).

## Kit (beyond the packs' list)

SpreadsheetGrid (a04b) is the strand's main dependency (i04, i05, i06b, i11), with the chart-from-columns option, lower-column shading, an input panel with a results log and a floor at zero. New parts as the kit-needs list: InterestStack (i01, i02a, i05; negative mode i09), ShareTable (i06a, i06b, i07, i08), OrderTicket (i06b, i07), ComparisonGrid (i08), FormulaTwin (i10), plus small options (reverse and collapse on `StudioTermLadder`, locked inputs and an inset magnifier, range bands, a max path with a rider). No simulation engine.

## Departures from the packs (decided, recorded in each design)

1. **i01:** pack question 2 part (c) (6.4 years) left out to keep the feedback under 30 s; `we-1` set on "speakers for a band" to match the reused plate.
2. **i02a:** the opening answers i01's chip ($208) before the birthday money; A2 original (interest against simple), as the pack's question 2 belongs to i02b.
3. **i02b:** the rate taught by "how many times bigger", trial, then the root key; "^(1 ÷ 3)" only as a grey alternative; no logarithms or finding n (ruling 33).
4. **i03:** A1 moved from groceries to a haircut ($45 at 3.5%) so the anchor is not repeated; the real-return subtraction rule left out (pack); the unit is i03's and i08's (a callback).
5. **i04:** one anchor for all three changes (the salon fund with the site's `we-1` numbers) instead of three anchors; A1's principal changed from $8,000 to $4,000 so rounded and full values give the same difference ($22.66; with $8,000 they give $45.31 and $45.32).
6. **i05:** the site's year-1 check widened to years 0 and 1, because the slip =5000*1.06*A2 also gives $5,300 at year 1 and fails only at year 0; pack question 2's "sketch" became "explain" so Standard 1 can answer.
7. **i06a:** Trap 01 (cents ÷ dollars) not used as the crossed slip, since 162 ÷ 44.60 = 3.63 gives the right digits; the inverted fraction (27.53) and High as the price now (A1) are crossed instead. A2 original (price paid against price now).
8. **i06b:** pack question 2 (a) (draw the graph) left out of the 10 s attempt; the feedback draws it. A second invented share (Kestrel Energy) added to show swings as risk.
9. **i07:** the site's people are not named; the round trip is one beat (pack).
10. **i08:** the site's 4.2% and 4.8% kept and labelled examples; A1 uses current-looking 5% and 5.5%.
11. **i09:** `we-1` set on a landscaper's mini excavator; the "first falls below" route is "divide the drop by D, round up, check both sides" for both courses, the inequality a grey Standard 2 row.
12. **i10:** `we-2` set on a ute; A1 (pack question 1's numbers) moved to a food truck; `we-4` (finding r) left out; the formula twin uses $10,000 at 20% for clean numbers.
13. **i11:** the site's $40,000 asset set on a delivery van; scene 6 edits D from $6,000 to $4,000 to show the crossing moving (between years 8 and 9) instead of using `we-3` or drill 5; the pack's A2 van became a minibus to avoid repeating the anchor.

## Colour roles across the strand

Starting value (P, PV, V₀) violet; rate and multiplier amber; interest teal; simple interest and straight-line depreciation blue; compound growth teal; interest on interest and declining balance olive (`MATH_CURVE_OLIVE`); fees amber (i07, i08); answer green; mistake red only for crossed slips; Standard 2 rows grey. i08 shows risk as hatched ink so red stays for mistakes.

## Sources cited (ruling 32; Codex re-verifies)

RBA cash rate 4.85% from 3 November 2026 (Statement on Monetary Policy, November 2026); money.com.au term deposits about 5.5% to 5.7% (updated 5 Nov 2026); Finder 12-month term deposits; Canstar and CommBank bonus savings rates (read 18 Nov 2026); ABS CPI 4.3% in the year to September 2026 (released 28 Oct 2026); Revenue NSW transfer duty 2026-27 ($11,602 + $4.50 per $100 over $387,000 to $1,290,000; read 18 Nov 2026); CommSec published brokerage tiers (read 18 Nov 2026; not named on screen); ATO prime cost and diminishing value methods (cited in the packs of 18 Nov 2026). Each video says once that rates (or fees, duty, rules) change.

## Open questions for root

1. **i06 split** (above): confirm i06a and i06b, or rule a single video with named cuts.
2. **Two-route final frames** in i03 and i05 (a08's precedent): confirm, or prefer Standard 1-only endings with i04 and i06a opening on their own frames.
3. **i11 to i12:** the i12 author confirms the frame above (price "$3,000", chip wording, the grey thumbnail).
4. **i05's two-row check** departs from the site's year-1 check; log as a teaching note for the website AI?
5. **i04 A1 principal** ($4,000 instead of $8,000): confirm.
6. **i08 rates:** keep the site's 4.2% and 4.8% (labelled examples) or update to November 2026 rates.
7. **i02b root key layout:** "x√" with a grey "^(1 ÷ 3)" chip; confirm or name one calculator layout.
8. **i03 ABS figure:** if publication follows the December 2026 quarter's CPI, update the chip and sentence.
9. **Invented company names** (Larkspur Fitness, Brindle, Coralpoint, Tallowood, Ridgeline Mobile, Kestrel Energy): Codex to confirm none is ASX-listed.
10. **Titles over 80 characters** (i04 82, i05 85, i08 86): shorter alternatives are in each design.
11. **"V nought"** as the spoken reading of V₀ (i09 to i11): confirm.
12. **Olive** for declining balance and **hatched ink** for risk: confirm both read at phone size.

## Next

Student learning reviews (`../../student-learning-review.md` method) for all 13 designs, then Codex maths and error checks (each design's brief), then root's resolution round. Plates in the paint order above. Nothing recorded; human listening pending.
