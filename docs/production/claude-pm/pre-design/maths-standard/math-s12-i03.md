# math-s12-i03: How do inflation and appreciation use the compound interest formula?

Maths Standard research pack (Year 12, Investment and loans), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans):

- `ci1256741b` (Investment): Solve problems involving compound interest in a variety of contexts, including inflation and appreciation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: partial. Crosswalk note: "Compound interest and inflation are taught; appreciation is not."

Standard 1 (Year 12, Investment):

- `cicf066fd6`: Solve problems involving compound interest in a variety of contexts, including inflation and appreciation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6). Site coverage: partial (same note). Same wording as Standard 2.

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2, identical content.

**Entry knowledge:** math-s12-i02 (FV = PV(1 + r)^n; PV by working backwards). math-s11-m01: `cib256693a` (percentage increase). Year 11 budgeting (math-s11-m08) for the idea of a regular cost.

**Prior video:** math-s12-i02.

**Start:** i02's formula grew money in a bank account. The same "multiply by the same number every year" pattern also grows prices (inflation) and the value of some things people own (appreciation).

**Stop:** Inflation as the general rise in prices, measured as a yearly percentage (the CPI); a future price is FV = PV(1 + r)^n with r the inflation rate; a past price by working backwards (PV); what a fixed amount of money buys falls when prices rise, so savings earning less than inflation lose buying power (one short comparison, no "real return" formula); appreciation as a rise in an asset's value by a percentage each year (property, a collectable instrument), worked with the same formula; the context changes the words, not the formula. Assumption to name once: a model with one steady rate is an estimate; real inflation and real values change from year to year. Depreciation (values falling) is i09 to i11.

**Next:** math-s12-i04 (Standard 2); math-s12-i05 (Standard 1 skips i04).

## 2. Site order, sections and worked examples

Read-only sources:

- [investment-and-loans/lesson11.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson11.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `3b17ea73c3ff3b8f2da6488fb83be639d528b8811a78e96019617f53e56962b4`. Title: Investment Strategies. Sections: `orient-to-investment-strategies`, `compare-investments-beyond-the-rate`, `avoid-the-inflation-traps`; `we-1` (part).
- [investment-and-loans/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson06.sa.html), SHA256 `1940cca09f6a14b6bf7159efdce0cf1be5dc27545bd72bf6dcef668cb7635c6e`, section `earn-interest-on-interest` (the formula only).

### Source lesson11, card 02 and card 05

"Real return: $\text{Real return} = \text{Nominal return} - \text{Inflation rate}$. This is what your money's purchasing power actually grows by". Examples: "6% nominal return with 3% inflation $\Rightarrow$ 3% real return"; "4.5% term deposit with 2.5% inflation $\Rightarrow$ 2% real return"; quick check "A term deposit earns 5.5% p.a. When inflation is 2.8%, the real return is" 2.7%.

### Source lesson11, `we-1` (steps 1 to 3)

"$20,000 to invest. Option A: 4.5% term deposit ... Inflation = 2.5%. ... Option A: $FV = 20\,000 \times (1.045)^8 = \$28\,442$ nominal. Real purchasing power: $20\,000 \times (1.02)^8 = \$23\,433$." Step 4 (a share loss) belongs to i08.

### Source lesson11, Trap 01

"A 5% savings account with 4% inflation gives only 1% real return, barely preserving wealth."

The site never grows a price with the compound interest formula and never mentions appreciation (grepped: "apprec" has no hit in the folder). Both are original teaching here (root ruling 3 limits syllabus-only teaching to missing content, which this is).

## 3. Recalculation

- lesson11 `we-1`: 20 000 × 1.045^8 = $28 442.01; 20 000 × 1.02^8 = $23 433.19 (the site's "real purchasing power" uses the subtraction rule; dividing growth factors, 20 000 × (1.045 ÷ 1.025)^8 = $23 343.68, is the exact version; the difference is why the video does not teach the subtraction rule as exact).
- Real-return examples: 3%, 2%, 2.7%, 1%: arithmetic matches.
- Original anchor values: $200 of groceries at 4.3% for 5 years: 200 × 1.043^5 = $246.86. A $650 000 unit appreciating 5% p.a. for 3 years: $752 456.25.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-i1/recalc.py`). Site values match.

## 4. Misconceptions and HSC-style traps

- Thinking inflation needs a new formula; it is FV = PV(1 + r)^n with prices in place of savings.
- Adding the inflation rate once for each year (simple growth: 200 + 200 × 0.043 × 5 = $243) instead of compounding ($246.86).
- Working backwards by subtracting the rate (a price "5 years ago" is FV ÷ (1 + r)^n, not FV × (1 − r)^n).
- Believing money in the bank is always "safe" from inflation: if the rate earned is below inflation, the balance buys less each year.
- Treating appreciation as guaranteed: values can fall (property and collectables carry risk).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A price tag on a shopping basket that rewrites itself year by year (× 1.043 per year), with the same ladder as i02 underneath: the formula is unchanged, only the label "price" replaces "balance".
- A side-by-side "two ladders" card: savings growing at 4% and prices growing at 4.3%, so the basket the savings buy shrinks slightly each year (a simple bar of "baskets you can buy").
- Appreciation: an asset plate (an electric guitar, a unit) with a value tag climbing by the same multiplier, then a "can fall too" note.
- Working backwards (a past price): the ladder read right to left, as in i02.
- A source chip "ABS CPI, year to September 2026: 4.3%" and "rates change" once.

Advanced reuse (visual parts only): `StudioTermLadder` (series-parts.tsx) for the price ladder; `GrowthBars` for the two ladders; `PlateFields` (finance-parts.tsx) for coded price and value tags on a plate; `StudioPlot` for two exponential curves. Kit needs in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

A family's weekly grocery bill is $180. Assume inflation stays at 3.5% p.a. (a) Use the compound interest formula to estimate the weekly bill in 4 years. (b) By how much has the bill increased?

**Worked answer:** (a) FV = 180 × 1.035^4 = $206.55. (b) 206.55 − 180 = $26.55.

### Question 2

Ava buys a second-hand electric guitar for $2400. Its value is expected to appreciate at 6% p.a. (a) Find its expected value after 5 years. (b) Over the same 5 years, inflation is 3% p.a. What would $2400 of goods cost after 5 years? (c) Has the guitar kept up with prices? Give a reason.

**Worked answer:** (a) 2400 × 1.06^5 = $3211.74. (b) 2400 × 1.03^5 = $2782.26. (c) Yes: its expected value ($3211.74) grows faster than prices ($2782.26), because 6% > 3%. (It is an estimate: second-hand prices can fall.)

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "180 + 180 × 0.035 × 4 = $205.20", crossed, "inflation compounds: prices rise on last year's prices"). Answers were checked with SymPy.

## 7. Everyday anchors

- **The weekly grocery shop and inflation:** $200 a week at the latest annual CPI rate, 4.3% (ABS, year to September 2026), becomes about $246.86 a week in 5 years if that rate held (food and money; carries inflation). Note: math-a12-f03 uses a supermarket pyramid of tins as a sequence display, a different idea; avoid the tin-pyramid picture.
- **A vintage electric guitar appreciating** (music gear): some well-kept instruments rise in value; carries appreciation and its risk (Question 2).
- **A rental unit's value (property):** a $650 000 unit in a NSW regional city appreciating 5% p.a. for 3 years is modelled at $752 456.25 (renting and property; prepares i08). Say plainly that property values can also fall.

Varied everyday contexts (food, music, property). None repeats an anchor in the Year 12 Advanced finance designs (grepped 18 November 2026: "guitar" no hit; "grocer" only in f03's tins) or the Standard a-strand packs (a06 uses rent rising by a percentage; this video uses the value of the unit, not its rent). Claude picks; none is required. Objects, never people.

**Money figures (root ruling 5):** CPI rose 4.3% in the 12 months to September 2026 ([ABS media release, 28 October 2026](https://www.abs.gov.au/media-centre/media-releases/cpi-rose-43-year-september-2026)); the RBA expects inflation above 3% until late 2027 (November 2026 Statement on Monetary Policy, [RBA](https://www.rba.gov.au/publications/smp/2026/nov/overview.html)). The site's 2.5% and 3% are older, calmer figures; either works if labelled as an assumption. The property growth rate (5%) is an illustrative assumption, not a forecast; say so on screen. Say once that rates change.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 5 (teaching gaps: inflation as compound growth; appreciation). Appreciation was already listed in section 2.

Decisions for Claude:

- **Original teaching is required** for both named contexts. The site's only inflation idea is the subtraction rule for real return, which is an approximation the site does not label. Use it at most as a one-line contrast ("savings at 4.5% with inflation at 2.5% grow buying power by roughly 2%"), never as an exact formula.
- **Keep the formula fixed and change the words.** The teaching point is that inflation and appreciation are compound interest with a different label; the visuals should keep the same ladder and formula strip from i02.
- **Current figures:** use the ABS 4.3% once as the real hook ("prices rose 4.3% in a year"), then a round assumed rate for working. Label assumed rates.
- Pace: not at risk; fits 7 to 8 minutes. Standard 1 viewers go next to i05, so the final frame must not rely on i04.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
