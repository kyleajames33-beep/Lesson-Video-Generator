# math-s12-i07: What does it really cost to buy shares once brokerage is added?

Maths Standard research pack (Year 12, Investment and loans), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans):

- `ci143c3551` (Investment): Solve problems involving calculation of brokerage costs and total costs of purchasing shares [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.

Standard 1: no matching point.

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only.

**Entry knowledge:** math-s12-i06 (a share, its price, the share table). math-s11-m01: `cib256693a` (a percentage of an amount; 0.12% = 0.0012). Year 11 GST and buying costs (math-s11-m02, m05) for "the price is not the whole cost".

**Prior video:** math-s12-i06.

**Start:** i06 read the price on the screen. Buying at that price costs more, because a broker charges a fee on every trade.

**Stop:** Brokerage as the fee a broker charges to place a trade; trade value = number of shares × price per share (before any fee); brokerage quoted as a flat fee, a percentage of the trade value, or "the greater of" a flat fee and a percentage (work out both, take the larger); total cost of buying = trade value + brokerage; brokerage as a percentage of the trade value, to show why a fee matters more on a small parcel; the trade value where the two rules cost the same (flat fee ÷ percentage as a decimal); one round-trip beat (selling subtracts the fee, so the price must rise enough to cover two fees before there is any profit). Comparing investment types is i08.

**Next:** math-s12-i08.

## 2. Site order, sections and worked examples

Read-only source: [investment-and-loans/lesson15.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson15.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `8dbb9c452ae7fc68830e5346361d39507f955c0418e81037967c0a47b59faa29`. Title: Buying Shares: Brokerage, Total Cost and Choosing an Investment. Lesson id maths-std-y12-s2-02-l15. Sections: `orient-to-buying-shares`, `apply-the-greater-of-rule`, `work-the-brokerage-examples`, `avoid-the-brokerage-traps`, `drill-and-revisit-buying-shares` (drills and card 11). Card 10 (the four investments) and SA 3 belong to i08.

### Source lesson15, hook, card 01 and orientation

Hook: "A broker charges "the greater of $\$29.95$ or $0.10\%$ of the trade". On a small parcel you pay the $\$29.95$. On a large one you pay the percentage. There is exactly one trade value where the two cost the same". Think first: "You buy $\$3500$ worth of shares and pay $\$19.95$ brokerage. The share price does not move at all. You sell the next day and pay $\$19.95$ brokerage again." "total cost $=$ shares $\times$ price $+$ brokerage".

### Source lesson15, card "The greater of rule"

"brokerage $= \max\left(F,\; \dfrac{p}{100} \times V\right)$" "With $F = \$29.95$ and $p = 0.10$, that gives $V = 29.95 \div 0.001 = \$29\,950$." "A $\$19.95$ fee on a $\$500$ trade is $4\%$ of what you invested, and the share has to rise $8\%$ before a round trip breaks even."

### Source lesson15, `we-1`, `we-2`, `we-3`

PROBLEM 1 · A FLAT FEE: "Nadia buys $500$ shares at $\$12.40$ each. Her broker charges a flat fee of $\$19.95$." $V = \$6200.00$; total $\$6219.95$; $0.32\%$. PROBLEM 2 · THE GREATER OF TWO RULES: "Theo buys $1800$ shares at $\$23.50$ each. His broker charges the greater of $\$29.95$ or $0.11\%$ of the trade value." $V = \$42\,300.00$; $0.0011 \times 42\,300 = \$46.53$; total $\$42\,346.53$. PROBLEM 3 · THE ROUND TRIP: "Sam buys $400$ shares at $\$8.75$ and sells them later at $\$10.20$. Brokerage is a flat $\$19.95$ each way." Outlay $\$3519.95$; proceeds $\$4060.05$; profit $\$540.10$; return $15.34\%$ (price-only $16.57\%$).

### Source lesson15, traps

Trap 01 (adding brokerage on the sale), Trap 02 (taking the smaller of the two figures), Trap 03 (return on the trade value instead of the outlay).

## 3. Recalculation

- `we-1`: $6219.95; 19.95 ÷ 6200 = 0.3218%, so 0.32%. `we-2`: $46.53; $42 346.53. `we-3`: $3519.95, $4060.05, $540.10; 15.3440% and 16.5714%.
- Switch value: 29.95 ÷ 0.001 = $29 950. Round trip on $500: (500 + 39.90) ÷ 500 − 1 = 7.98%, the site's "8%". Revisit: 39.90 ÷ 3500 = 1.14%.
- SA 1 $8569.95 and 0.23%; SA 2 $6.24 and $7.49 (flat fee applies both ways), profit $1000.10, return 19.16%; drills $1719.95, $59.76 and $49 859.76, $22 029.95, $45 045.00, $29 950.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-i1/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Leaving brokerage out of the total cost.
- Taking the smaller of the two brokerage figures (Trap 02).
- Using 0.11 instead of 0.0011 for 0.11%.
- Applying the percentage to the price of one share instead of the trade value.
- Adding the fee on a sale (Trap 01).
- Believing a small fee "doesn't matter" on a small parcel (4% of a $500 trade).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- An unbranded order ticket (shares, price, trade value, brokerage, total) filling in line by line: the trade value first, the fee second, the total last.
- "The greater of": two bars side by side (flat fee and percentage of the trade), the larger one lit and carried down to the total.
- The switch graph: brokerage against trade value, a flat line at $29.95 and a rising line 0.1% × V, the "greater of" path drawn thick along the higher of the two, meeting at $29 950.
- Fee as a share of the trade: the same $19.95 shown against a $500 trade (a big slice) and a $20 000 trade (a sliver).
- The round trip as a short sequence: money out (trade + fee), money in (trade − fee), the gap equal to two fees.

Advanced reuse (visual parts only): `StudioPlot` for the switch graph; `SignedBar` (readouts.tsx) for money out and money in; `PlateFields` on a coded order ticket; `IntervalPicture` (extras.tsx) for "below the switch value / above it". Kit needs in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

Leila buys 1200 shares at $8.40 each. Her broker charges the greater of $29.95 or 0.12% of the trade value. (a) Find the trade value. (b) Find the brokerage. (c) Find the total cost.

**Worked answer:** (a) 1200 × 8.40 = $10 080.00. (b) 0.0012 × 10 080 = $12.10, which is less than $29.95, so the brokerage is $29.95. (c) 10 080 + 29.95 = $10 109.95.

### Question 2

A broker charges the greater of $19.95 or 0.11% of the trade value. (a) Find the total cost of buying 2000 shares at $15.60 each. (b) Find the trade value at which the two brokerage rules cost the same, to the nearest cent.

**Worked answer:** (a) V = $31 200.00; 0.0011 × 31 200 = $34.32 > $19.95, so brokerage $34.32; total $31 234.32. (b) 0.0011V = 19.95, V = $18 136.36.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "brokerage = $12.10", crossed, "take the greater: $29.95"). Answers were checked with SymPy.

## 7. Everyday anchors

- **A first parcel from gap-year earnings:** about $6000 of shares bought after a working gap year, with a flat $19.95 fee (site `we-1`, Nadia's numbers: 500 shares at $12.40) (work and money).
- **Topping up with a birthday gift:** a small $500 purchase, where the same $19.95 is 4% of the money and the share must rise about 8% before a round trip breaks even (the site's small-parcel point) (money; carries "fees bite small trades").
- **A tradie's bigger investment:** a qualified electrician puts $42 300 into shares (site `we-2`, Theo's numbers), where the percentage rule takes over (work; carries "the greater of").

Varied everyday contexts. None repeats an anchor in the Year 12 Advanced finance designs (grepped 18 November 2026: "brokerage" no hit) or the Standard a-strand packs. i01 also uses a gap-year fund; Claude may join them deliberately (the fund becomes the first parcel) or pick another. Claude picks; none is required. Objects, never people.

**Money figures (root ruling 5):** a major Australian online broker currently charges $5 up to $1000, $10 up to $3000, $19.95 up to $10 000, $29.95 up to $25 000 and 0.12% above $25 000 for online trades ([CommSec rates and fees](https://static.commsec.com.au/support/rates-and-fees.html), read 18 November 2026; do not name the broker on screen). Some brokers charge less, and some run $0 promotions. The site's $19.95, $29.95 and 0.10% to 0.12% sit inside this range. Say once that fees vary and change.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 5. No numerical error in lesson15.

Decisions for Claude:

- **Purchasing first.** The syllabus point is "total costs of purchasing shares". Keep selling to one round-trip beat (Sam's $39.90 in fees), not a full profit-and-return calculation; `we-3`'s return on outlay can be the second practice idea if time allows.
- **Tiered fees.** Real brokers often use tiers by trade value rather than "the greater of"; the site's "greater of" rule is the classic HSC form. Teach the site's form and mention tiers in one sentence.
- **Same visual system as i06:** the share table and the order ticket share a style.
- Pace: not at risk; fits 7 to 8 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
