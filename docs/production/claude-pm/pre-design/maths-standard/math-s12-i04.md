# math-s12-i04: How do the rate, the term and the compounding period change an investment?

Maths Standard research pack (Year 12, Investment and loans), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans):

- `ciaa253014` (Investment): Examine the effect of varying the interest rate, the term or the compounding period on the future value of an investment, with and without using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered (lesson06 compounding frequency; lesson07 rate comparisons). The digital-tool part is thin (logged).

Standard 1: no matching point (Standard 1 calculates FV, PV and r in i02 but does not examine the effect of each input).

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only.

**Entry knowledge:** math-s12-i02 (FV = PV(1 + r)^n, r and n per period). math-s12-i03 (the same formula in other contexts). math-s12-a04b (a spreadsheet with a formula filled down) for the digital tool.

**Prior video:** math-s12-i03.

**Start:** i02 and i03 compounded once a year. Banks also compound monthly or quarterly, and offer different rates and terms. Change one thing at a time and watch the future value.

**Stop:** Change one input with the others fixed. Rate: a higher rate gives a higher FV, and the gap widens with time. Term: a longer term gives a higher FV, and doubling the term more than doubles the interest (interest on interest has longer to work). Compounding period: the rate per period is the annual rate ÷ k and the number of periods is years × k (k = 1 yearly, 2 half-yearly, 4 quarterly, 12 monthly); for the same annual rate, more frequent compounding gives a slightly higher FV, and the effect is small compared with the rate and the term. Do this by hand and with a digital tool (a spreadsheet or calculator app where one input is changed and the FV recalculates). Not taught: effective annual rate, flat-rate loans and the Rule of 72 (site lesson07; beyond the 2024 Standard points). Simple against compound is i05.

**Next:** math-s12-i05.

## 2. Site order, sections and worked examples

Read-only sources:

- [investment-and-loans/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `1940cca09f6a14b6bf7159efdce0cf1be5dc27545bd72bf6dcef668cb7635c6e`. Sections: `compounding-frequency`, `work-examples-and-drill-compound` (`we-1`, `we-2`, drills), `avoid-the-compounding-traps` (Trap 03).
- [investment-and-loans/lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson07.sa.html), SHA256 `307eb5dd6a8211de8cfe476fbccd6313f2ca79328264c1da00389979b5646ce3`. Title: Comparing Interest Rates. Sections `effective-versus-nominal-rates` and `work-the-rate-comparisons`: context only; the page marks the Rule of 72 as beyond the syllabus and calls the effective annual rate "a supporting method". Not used as worked examples.

### Source lesson06, card 06 (`compounding-frequency`)

"When interest compounds more than once per year, the annual rate is divided by $k$ and the number of periods is multiplied by $k$". Table: annually 1, semi-annually 2, quarterly 4, monthly 12, daily 365. "Worked example: $8000 at 4.8% p.a. compounded semi-annually for 4 years. $k = 2$, rate per period $= 0.048/2 = 0.024$, periods $= 4 \times 2 = 8$ $A = 8000 \times (1.024)^8 = 8000 \times 1.2089 = \$9671.41$". True or false: "For a given annual rate, monthly compounding produces a higher final amount than annual compounding" (true).

### Source lesson06, `we-1` and `we-2`

PROBLEM 1 · QUARTERLY COMPOUNDING. "$10,000 invested at 8% p.a. compounded quarterly for 5 years." $A = 10\,000 \times (1.02)^{20}$; the site gives $\$14\,859$ (correct value $14 859.47; MS-12). PROBLEM 2 · MONTHLY COMPOUNDING. "$\$5000$ at 6% p.a. compounded monthly for 3 years." $A = 5000 \times (1.005)^{36}$; the site gives $\$5983.50$ (correct value $5983.40; MS-11). Both also find an effective annual rate: leave that step out.

### Source lesson06, drill 2 (b) and Trap 03

"$\$10,000$ at 6% compounded annually vs monthly for 20 years, how much more does monthly earn?" Answer: annual $32 071, monthly $33 102, $1031 more. Trap 03: "For quarterly compounding at 8% p.a., the period rate is $0.08 \div 4 = 0.02$. Using $0.08$ directly as the period rate is one of the most common exam errors."

The site has no worked example that varies the rate alone or the term alone, and no digital-tool demonstration of varying an input (gap logged). Build these from the site's own investments (for example, $10 000 at 6%, 7% and 8%; or 10 and 20 years).

## 3. Recalculation

- Card 06: 8000 × 1.024^8 = $9671.41 (matches; the shown intermediate 8000 × 1.2089 would give $9671.20).
- `we-1`: 10 000 × 1.02^20 = $14 859.47 (site $14 859). `we-2`: 5000 × 1.005^36 = $5983.40 (site $5983.50).
- Drill 1: (a) $5360.38, (b) $9671.41, (c) 6000 × 1.018^20 = $8572.49: match.
- Drill 2 (b): $32 071.35 and $33 102.04, $1030.69 apart: the site's $1031 matches.
- Original: 600 × 1.045^3 = $684.70; 600 × 1.055^3 = $704.54.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-i1/recalc.py`). Use the corrected values for `we-1` and `we-2`; keep all other site numbers.

## 4. Misconceptions and HSC-style traps

- Using the annual rate as the monthly rate (Trap 03), or dividing the rate but not multiplying the periods.
- Thinking monthly compounding at 6% p.a. "gives 72% a year" (6% × 12).
- Expecting doubling the term to double the interest (it more than doubles).
- Expecting a big jump from monthly compounding: the difference is small (drill 2 (b): about 3% more after 20 years), while one extra percentage point of rate matters far more.
- Changing two inputs at once and crediting the wrong one.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- An unbranded spreadsheet or calculator app with three inputs (rate, years, compounding: yearly, quarterly, monthly) and one FV readout; one input changes at a time, the other two greyed and locked.
- Three small "change one thing" panels, each with two growth curves on one set of axes: rate (two curves fanning apart), term (one curve run further, the second half adding more than the first), compounding period (two curves almost on top of each other, the gap magnified in an inset).
- The per-period conversion as a strip: "6% p.a. monthly → 6% ÷ 12 = 0.5% a month; 3 years → 36 months", then FV = 5000 × 1.005^36.
- A ranking card at the end: which change moved the FV most (rate and term large, compounding small).

Advanced reuse (visual parts only): `ScreenApp` (finance-parts.tsx) in explorer mode on the painted phone `maths/ma12-phone-v1.png` with sliders (math-a12-f14 uses the same set-up for annuities; reuse the parts, not the script or anchor); `ParameterSlider`, `LiveReadoutBoard`; `StudioPlot` for the fanning curves; `accountFV` in money.ts for the values. SpreadsheetGrid (new, from the a-strand list) if the tool is a spreadsheet. Kit needs in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

$8000 is invested for 3 years at 6% p.a. Find the future value if interest is compounded (a) annually (b) monthly. (c) How much more does monthly compounding earn?

**Worked answer:** (a) 8000 × 1.06^3 = $9528.13. (b) 8000 × 1.005^36 = $9573.44. (c) $45.32 (rounded values give $45.31; keep full values until the last line).

### Question 2

$5000 is invested at 5% p.a. compounded annually. (a) Find the interest earned after 10 years and after 20 years. (b) The term doubled. Explain why the interest more than doubled.

**Worked answer:** (a) 10 years: 5000 × 1.05^10 − 5000 = $3144.47; 20 years: 5000 × 1.05^20 − 5000 = $8266.49. (b) In the second 10 years, interest is earned on a balance that already includes the first 10 years' interest, so each year's interest is larger.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "8000 × 1.06^36", crossed, "monthly: 6% ÷ 12 = 0.5% a month"). Answers were checked with SymPy.

## 7. Everyday anchors

- **Phone plan savings:** switching to a cheaper phone plan frees up money, and $600 saved over a year is put away for 3 years; at 4.5% it grows to $684.70, at 5.5% to $704.54 (phones and money; carries "change the rate"). Note: math-s12-a08 uses a phone's data allowance, a different idea.
- **A small business's cash reserve:** a hairdressing salon keeps $10 000 aside for equipment, earning 8% p.a. compounded quarterly for 5 years (site `we-1` numbers, corrected value $14 859.47) or compared yearly against quarterly (small business; carries "change the compounding period").
- **A long horizon:** $10 000 left for 20 years at 6% p.a., yearly against monthly compounding (site drill 2 (b): $32 071.35 against $33 102.04), and 10 against 20 years for "change the term" (money; a school leaver's first savings left alone).

Varied everyday contexts (phones, a small business, long-term saving). None repeats an anchor in the Year 12 Advanced finance designs (grepped 18 November 2026: "phone plan", "salon" no hits; math-a12-f14's savings app on a phone is an annuity tool, so this video should picture a spreadsheet or a plain calculator app rather than repeat f14's phone-and-sliders look as its anchor) or the Standard a-strand packs. Claude picks; none is required. Objects, never people.

**Money figures (root ruling 5):** top 12-month term deposits about 5.5% to 5.7% p.a. in November 2026 ([money.com.au, 5 November 2026](https://www.money.com.au/term-deposit-rates); [Finder](https://www.finder.com.au/term-deposits/12-months)); most savings accounts compound monthly. The site's 4.8% to 8% span is realistic for comparison (8% is high for a deposit; present it as an example). Say once that rates change.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 5: MS-11 (`we-2`: $5983.40, not $5983.50) and MS-12 (`we-1`: $14 859.47, not $14 859); the effective-annual-rate structure note; the digital-tool gap.

Decisions for Claude:

- **Use the corrected values** for `we-1` and `we-2` on screen.
- **Leave out the effective annual rate.** lesson06 teaches it with no notice and lesson07 calls it supporting; the 2024 point asks only for the effect on the future value. Comparing FVs directly answers every question it would.
- **One change at a time** is the method the syllabus wording implies ("the effect of varying"); make the locked inputs visible.
- **Digital tool:** a spreadsheet keeps one visual system with i05 and i11; an app is also fine. Standard 2 HSC calculators do not graph, so the tool appears as a classroom tool.
- **Pace flag:** three variables plus the per-period conversion. Watch; if the design passes 570 s, split into **i04a** (rate and term) and **i04b** (the compounding period, with the r ÷ k and n × k conversion).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
