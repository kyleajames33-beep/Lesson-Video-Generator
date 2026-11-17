# math-s12-i06: How do we read share prices and calculate dividends and dividend yield?

Maths Standard research pack (Year 12, Investment and loans), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans):

- `cieba53790` (Investment): Interpret and analyse tables and graphs about the value of share [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered. (The official text reads "the value of share", as quoted.)
- `cie1731909` (Investment): Graph and interpret the value of a share over time, with and without using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered by hand only (no digital tool; logged).
- `ci8a691aa3` (Investment): Calculate the dividend paid and the dividend yield on shares (excluding franked dividends) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.

Standard 1: no matching point (Standard 1 compares savings accounts, term deposits and property only; shares are Standard 2).

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only.

**Entry knowledge:** math-s12-i05 (comparing two investments by their growth). math-s11-m01: `cib256693a` (percentage change from a starting value; a percentage of an amount). Reading and drawing a graph over time (math-s11-l01, l02). A spreadsheet chart (a04b, i05).

**Prior video:** math-s12-i05.

**Start:** Bank accounts grow at a rate agreed in advance. A share is different: it is a small part-ownership of a company, and its price moves every trading day.

**Stop:** A share is one unit of ownership in a company listed on a stock exchange; it can pay in two separate ways: the price rising (capital growth, only banked when sold) and dividends (cash per share, quoted in cents, paid out of profits when the company declares one); risk named plainly: the price can fall below what was paid, a dividend can be cut or stopped, and money invested can be lost; nothing is guaranteed. Read a share table row (Last, Change, High, Low, Div, Yield; the Last is the current price); dividend paid = number of shares × dividend per share; dividend yield = dividend per share ÷ current market price × 100% (convert cents to dollars first; the number of shares never appears; no franking); a rising price with the same dividend lowers the yield; graph a share's price over time by hand and in a spreadsheet chart, describe the trend, the highest and lowest values and any falls inside a rise, and find the percentage change from the first price. Brokerage and total cost are i07.

**Next:** math-s12-i07.

## 2. Site order, sections and worked examples

Read-only source: [investment-and-loans/lesson14.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson14.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `83d9524b6a12192ae23697c958efe92e39456423e8ef6b35a4288b20e5aeab9a`. Title: Shares: Value, Dividends and Dividend Yield. Lesson id maths-std-y12-s2-02-l14 (its declared dotpoints quote the three official points). Sections: `orient-to-shares-and-dividends`, `read-a-share-table`, `work-the-share-examples`, `avoid-the-yield-traps`, `drill-and-revisit-shares`.

### Source lesson14, hook and card "Two returns"

"A company keeps paying exactly the same dividend, cent for cent, two years running. Over the same two years its share price climbs by a quarter. The dividend yield printed in the paper falls. Nothing has gone wrong, and every holder is better off. Why does the number go down?" "Owning shares pays you in two ways that have almost nothing to do with each other. Capital growth is the price going up, and you only receive it if you sell. Dividends are cash the company pays you for holding the share, whatever the price is doing." "$\text{yield} = \dfrac{\text{dividend per share}}{\text{market price per share}} \times 100\%$". Revisit: "$\dfrac{0.30}{6.00} \times 100\% = 5.00\%$ ... $\dfrac{0.30}{7.50} \times 100\% = 4.00\%$."

### Source lesson14, `we-1` (PROBLEM 1 · READING THE TABLE)

Row "Brindle Ltd | $\$44.60$ | +0.35 | $\$48.20$ | $\$37.15$ | 162c | 3.63%". "$d = 162\text{c} = \$1.62, \qquad P = \$44.60$" ... "$y = 0.036323 \times 100\% = \mathbf{3.63\%}$". "The High and Low columns are the year's range and take no part in this calculation."

### Source lesson14, `we-2` (PROBLEM 2 · DIVIDEND PAID AND DIVIDEND YIELD)

"Kalina holds $850$ shares in a company that declares a dividend of $24$ cents per share. The shares currently trade at $\$6.40$." $D = 850 \times \$0.24 = \$204.00$; $y = 0.24 \div 6.40 = 3.75\%$.

### Source lesson14, `we-3` (PROBLEM 3 · THE VALUE OF A SHARE OVER TIME)

"A share's closing price is recorded at the end of each month for six months: $\$3.20$, $\$3.55$, $\$3.40$, $\$3.90$, $\$4.15$, $\$3.95$." Peak $4.15 at month 5; falls at months 3 and 6; "$\dfrac{3.95 - 3.20}{3.20} \times 100\% = \mathbf{23.44\%}$". "Saying "it went up" describes the endpoints and misses the two falls".

### Source lesson14, traps

Trap 01 (cents divided by dollars), Trap 02 (number of shares in the yield), Trap 03 (price paid instead of price now).

## 3. Recalculation

- `we-1`: 1.62 ÷ 44.60 = 3.6323%, so 3.63% (the inverted 44.60 ÷ 1.62 gives 27.53, MC 1's distractor).
- `we-2`: $204.00 and 3.75%. `we-3`: 0.75 ÷ 3.20 = 23.4375%, so 23.44%.
- Hook and revisit: 5.00% and 4.00%. SA 1 4.02%; SA 2 $504.00, 3.75%, 3.00%, $3360 capital gain; SA 3 15.00%, 5.00%, 3.48%, 4.76%; drills $216.00, 4.00%, 3.60%, $5.00, $288.00 and 3.52%; MC 5 20.00%.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-i1/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Dividing cents by dollars (162 ÷ 44.60) (Trap 01).
- Multiplying the yield by the number of shares (Trap 02).
- Using the price paid in the yield (Trap 03).
- Reading the High or Low column as the current price.
- Thinking a falling yield means the investment did badly (the hook).
- Treating shares like a savings account with a guaranteed return, or the reverse, like a bet. Shares are part-ownership of a business: the value follows how the business does, and it can go down.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A coded, unbranded share table (newspaper or app style) with an invented company row; columns light in turn; the Yield column is rebuilt from Div and Last as the narration explains, and High and Low are greyed as "not used here".
- A two-returns split: a price tag that can move up or down (capital growth or loss), and a dividend arriving as cash per share.
- Dividend paid as a stack: 850 shares × $0.24 = $204; then the yield as a single share's dividend over its price, with the 850 crossed out of the yield line.
- The hook as a slider: the price moves from $6.00 to $7.50 with the dividend fixed at 30c, the yield readout falling from 5% to 4%.
- `we-3`'s prices plotted month by month by hand, then the same data in a spreadsheet chart; the peak ringed, the two falls marked, the percentage change from the first price.
- A plain risk card: "prices can fall; dividends can be cut; you can lose money".

Advanced reuse (visual parts only): `StudioPlot` for the price line; `ParameterSlider` and `LiveReadoutBoard` for the yield slider; `ScreenApp` or SpreadsheetGrid for the digital tool; `PlateFields` for a coded dividend statement on a plate. **New:** a ShareTable part (see the kit needs). Kit needs in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

A row of a share table reads:

| Company | Last | Change | High | Low | Div | Yield |
| --- | --- | --- | --- | --- | --- | --- |
| Tallowood Ltd | $12.50 | −0.20 | $14.10 | $10.85 | 45c | ? |

(a) Calculate the dividend yield. (b) Noah owns 600 Tallowood shares. Find the dividend he receives. (c) If the price rises and the dividend stays at 45c, what happens to the yield? Explain.

**Worked answer:** (a) 0.45 ÷ 12.50 × 100% = 3.60%. (b) 600 × $0.45 = $270.00. (c) It falls: the dividend is the same but it is divided by a larger price.

### Question 2

The closing price of a share at the end of each month for six months was $5.40, $5.10, $5.65, $6.05, $5.80, $6.30. (a) Draw a line graph of the price. (b) In which months did the price fall? (c) Find the percentage change over the six months. (d) Name one risk of owning this share.

**Worked answer:** (a) Months 1 to 6 across, price up; join the points. (b) Months 2 and 5 (falls of $0.30 and $0.25). (c) (6.30 − 5.40) ÷ 5.40 × 100% = 16.67%. (d) The price can fall below what was paid (it fell twice in six months), or the company can cut its dividend.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "45 ÷ 12.50 = 3.6", crossed, "45c = $0.45, and a yield is a percentage"). Answers were checked with SymPy.

## 7. Everyday anchors

All companies are invented and unbranded. No gambling framing: shares are investments in real businesses, with real risk named plainly, never a bet or a game.

- **Owning a small slice of a company you use:** an invented listed company that runs a chain of gyms or a phone network; a first parcel bought with savings from a casual job (work and money; carries the "part-ownership" idea and the two returns).
- **A dividend statement arriving:** 850 shares at 24c a share pays $204.00 (site `we-2`, Kalina's numbers), shown as a coded, unbranded statement plate (money; carries the dividend).
- **Income or growth:** a grandparent who lives on dividends cares about the yield; a school leaver building savings over decades cares about the price growing (site SA 3's investor-goal judgement; no people drawn, use two coded goal cards).

Varied everyday contexts (work, money, goals). None repeats an anchor in the Year 12 Advanced finance designs (grepped 18 November 2026: "dividend" no hit) or the Standard a-strand packs. Claude picks; none is required. Objects, never people.

**Money figures (root ruling 5):** share prices and dividends are invented. Real dividend yields on large Australian companies are commonly a few per cent, so the site's 3% to 5% is realistic. Say once that prices and dividends change.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 5. No numerical error in lesson14. Gap logged: the share price graph is drawn by hand only; the syllabus point asks for digital tools as well.

Decisions for Claude:

- **Risk wording.** Say plainly once and show once: the price can fall, dividends can be cut, money can be lost. Avoid "win", "bet", "jackpot" and casino or race imagery (root ruling 6).
- **Capital growth** is not named in the 2024 syllabus but is needed to explain why the yield falls when the price rises; keep it as a plain phrase ("the price going up") with one short calculation at most.
- **Digital tool:** chart `we-3`'s six prices in the same SpreadsheetGrid as i05, after drawing them by hand.
- **Pace flag:** three points (tables, graphs, dividends and yield). If the design passes 570 s, split into **i06a** "How do we calculate dividends and dividend yield from a share table?" (`cieba53790` tables, `ci8a691aa3`) and **i06b** "How do we graph and interpret a share's price over time?" (`cie1731909`, `cieba53790` graphs).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
