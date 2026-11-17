# math-s12-i05: Why does compound interest pull ahead of simple interest, and how does a spreadsheet show it?

Maths Standard research pack (Year 12, Investment and loans), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans):

- `ci75558132` (Investment): Compare the growth of simple interest and compound interest investments numerically and graphically, with and without using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.
- `cie4f17f46` (Investment): Recognise that simple interest graphs are linear and compound interest graphs are exponential [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.
- `ci5c8c3f23` (Investment): Use a spreadsheet to numerically and graphically model investments using both simple and compound interest [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.

Standard 1 (Year 12, Investment):

- `ci617494ea`: Compare the growth of simple interest and compound interest investments either numerically or from a given graph [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6). Site coverage: covered.
- `ciebe69650`: Use a spreadsheet to model investments using both simple and compound interest [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6). Site coverage: covered.

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2. Standard 1 compares numerically or from a given graph (it does not need to draw the graphs or name them linear and exponential, though it may); Standard 2 compares numerically and graphically, with and without digital tools, and names the shapes.

**Entry knowledge:** math-s12-i01 (simple interest, straight-line graph). math-s12-i02 (compound interest, FV = PV(1 + r)^n). math-s12-a05 (linear tables add the same amount; exponential tables multiply by the same number; both courses). math-s12-a04b (a spreadsheet: cells, a formula, fill down; both courses).

**Prior video:** math-s12-i04 (Standard 2); math-s12-i03 (Standard 1). The opening must not depend on i04.

**Start:** Same principal, same rate, two accounts: one pays the interest out (i01), one leaves it in (i02). Put them side by side, year after year.

**Stop:** Build a year-by-year table for both (numerically); they start at the principal and are equal after one year (one year of interest cannot have compounded yet), then compound pulls ahead by a growing amount each year; the simple column goes up by the same amount (linear: a straight line), the compound column by a growing amount, multiplying by the same number (exponential: a curve bending upward); read a given graph to compare (which line is which, the gap at a given year); build the model in a spreadsheet: a year column filled down, =P+P*r*A2 for simple and =P*(1+r)^A2 for compound, then a line graph of both columns; the year-1 check catches a broken formula. Depreciation is i09 to i11 (Standard 1 next: i08).

**Next:** math-s12-i06 (Standard 2); math-s12-i08 (Standard 1).

## 2. Site order, sections and worked examples

Read-only source: [investment-and-loans/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `1940cca09f6a14b6bf7159efdce0cf1be5dc27545bd72bf6dcef668cb7635c6e`. Sections: `earn-interest-on-interest` (card 05's comparison) and `avoid-the-compounding-traps` (card 08, the spreadsheet; card 10, the revisit). The page's `data-lesson-dotpoints` names this spreadsheet point.

### Source lesson06, card 05 (comparison)

"Comparison with simple interest: Simple interest on $\$2000$ at 5% for 3 years $= 2000 \times 0.05 \times 3 = \$300$. Compound earns $\$15.25$ more after just 3 years. After 20 years the gap becomes thousands of dollars". MC 4: "The graph of compound interest amount $A$ against time $n$ is: an upward-curving exponential".

### Source lesson06, card 08 (Modelling both kinds of interest in a spreadsheet)

"Take $\$5000$ invested at $6\%$ p.a. for $5$ years." Cells: "A2 | the year number, $0$ | yes, =A2+1"; "B2 | simple interest value, =5000+5000*0.06*A2"; "C2 | compound value, =5000*1.06^A2". Table: years 1 to 5, simple $5300.00, $5600.00, $5900.00, $6200.00, $6500.00; compound $5300.00, $5618.00, $5955.08, $6312.38, $6691.13. "simple interest plots as a straight line, because the same $\$300$ is added every year, and compound plots as a curve that pulls away. They are equal at year $1$ and $\$191.13$ apart by year $5$." "The check that catches a broken model. Year $1$ must be identical in both columns."

### Source lesson06, card 10 and drill 2 (a)

"After 20 years: compound gives $5000 \times (1.06)^{20} = \$16\,035$ vs simple $5000(1 + 0.06 \times 20) = \$11\,000$, a $5,035 difference" (correct values $16 035.68 and $5035.68; MS-13). Drill 2 (a): "$\$5000$ at 6% simple interest vs 5.5% compounded annually over 10 years": $8000 against $8541.

## 3. Recalculation

- Card 05: $2315.25 against $2300 ($15.25).
- Card 08: every table value matches (5955.08, 6312.38, 6691.13); gap $191.13.
- Card 10: 5000 × 1.06^20 = $16 035.68; gap $5035.68 (site truncates to $16 035 and $5035).
- Drill 2 (a): $8000.00 against 5000 × 1.055^10 = $8540.72 (site $8541, correct to the dollar).

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-i1/recalc.py`). Use $16 035.68 for the 20-year value; keep the other site numbers.

## 4. Misconceptions and HSC-style traps

- Expecting compound to be ahead from year 1 (they are equal at year 1 with yearly compounding).
- Writing the spreadsheet compound formula as =5000*1.06*A2 (linear) or =5000*0.06^A2.
- Forgetting the $ or a fixed cell for the rate when filling down (only the year should change).
- Reading a given graph's straight line as compound because it "starts steeper": with the same principal and rate, the two start together.
- Thinking a lower compound rate can never beat a higher simple rate (drill 2 (a): 5.5% compound beats 6% simple over 10 years).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Two accounts side by side over the years: the "paid out" account (i01's jar beside a flat balance) and the "left in" account, as two columns of yearly interest blocks: equal blocks against growing blocks, the growth sliver ("interest on interest") marked each year.
- The same values in a spreadsheet, typed and filled down (site card 08 exactly), the year-1 equality ringed, then a line chart drawing both columns: a straight line and a curve pulling away.
- A difference column (compound − simple) growing: 0, 18, 55.08, 112.38, 191.13.
- A long zoom-out to 20 years ($11 000 against $16 035.68) to make "pulls ahead" visible.
- A "given graph" reading for Standard 1: two unlabelled lines, label them, read the gap at year 10.

Advanced reuse (visual parts only): `StudioPlot` with a line and an exponential curve; `GrowthBars` or `LoanBalanceBar` deposit mode for the yearly blocks; `TermPlot` (series-parts.tsx) for dot sequences; **SpreadsheetGrid** (new, already required by a04b and listed in `../../checks/maths-standard-kit-needs-a.md`). Kit needs in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

A spreadsheet models $5000 invested at 4% p.a. for 4 years.

| Year | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Column B | 5000.00 | 5200.00 | 5400.00 | 5600.00 | 5800.00 |
| Column C | 5000.00 | 5200.00 | 5408.00 | 5624.32 | ? |

(a) Which column models compound interest? Give a reason. (b) Find the missing value. (c) Write a spreadsheet formula for cell C2, given that the year is in cell A2.

**Worked answer:** (a) Column C: each value is 1.04 times the one before (the increase grows: 200, 208, 216.32); B adds $200 every year (simple). (b) 5000 × 1.04^4 = $5849.29. (c) =5000*1.04^A2.

### Question 2

$10 000 is invested for 15 years at 7% p.a. (a) Find the value with simple interest and with compound interest (compounded annually). (b) Sketch both graphs of value against time on one set of axes and label them. (c) Explain why the compound graph curves upward.

**Worked answer:** (a) Simple: 10 000 + 10 000 × 0.07 × 15 = $20 500; compound: 10 000 × 1.07^15 = $27 590.32. (b) Both start at $10 000; the simple graph is a straight line, the compound graph a curve above it after year 1. (c) Each year's interest is 7% of a larger balance, so the yearly increase keeps growing.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (c): "=5000*1.04*A2", crossed, "that adds the same amount each year; compound needs the power"). Answers were checked with SymPy.

## 7. Everyday anchors

- **Two accounts for the same savings:** $5000 from a casual job at 6% p.a. for 5 years, one paying the interest out, one leaving it in (site card 08's numbers; money; carries the spreadsheet). Continues i01's jar and i02's account, so the comparison is the two earlier videos side by side.
- **A small coffee cart's spare cash:** the owner sets aside $2000 at 5% p.a. for 3 years (site card 05: $2300 against $2315.25) (small business). The reused coffee cart plate `maths/ma11-coffee-cart-v1.png` may fit after an appearance check.
- **Leaving it for 20 years:** the same $5000 from age 18 to 38 (site card 10: $11 000 against $16 035.68) (long-term saving; the shape becomes obvious).

Varied everyday contexts (wages, a small business, long-term saving). None repeats an anchor in the Year 12 Advanced finance designs (grepped 18 November 2026: "coffee cart" no hit) or the Standard a-strand packs. Claude picks; none is required. Objects, never people.

**Money figures (root ruling 5):** 6% p.a. is in reach for a bonus savings account in November 2026 (see i02's sources); simple interest at 6% matches i01's "interest paid out" framing. Say once that rates change.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 5: MS-13 (card 10's truncated $16 035 and $5035).

Decisions for Claude:

- **Keep card 08's spreadsheet exactly**, including the year-1 check, which is a good diagnostic and an HSC-style "explain" point.
- **Standard 1 path:** Standard 1 viewers arrive from i03 and leave for i08; they need the table, a given graph and the spreadsheet, not the words "linear" and "exponential" (which they still met in a05). Say the shapes in plain words first ("a straight line", "a curve that bends upward"), then the names.
- **One visual system:** use the same SpreadsheetGrid look as a04b and i11.
- Pace: not at risk; fits 7 to 9 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
