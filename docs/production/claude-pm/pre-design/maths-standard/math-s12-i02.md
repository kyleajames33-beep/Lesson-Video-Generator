# math-s12-i02: How does compound interest earn interest on interest?

Maths Standard research pack (Year 12, Investment and loans), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans):

- `ci64a24122` (Investment): Calculate the future value, present value or interest rate of a compound interest investment using the formula FV = PV(1 + r)^n where FV = future value of the investment, PV = present value of the investment, r = interest rate per time period and n = number of time periods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered in the crosswalk; in fact the future value only (no present value or rate example; logged). MathML in `sourceHtml`.

Standard 1 (Year 12, Investment):

- `cib6fe9f5b`: Calculate the future value, present value or interest rate of a compound interest investment using the formula FV = PV(1 + r)^n where FV = future value of the investment, PV = present value of the investment, r = interest rate per time period and n = number of time periods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6). Same wording as Standard 2. MathML in `sourceHtml`.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs.

**Course:** Standard 1 and Standard 2, identical content.

**Entry knowledge:** math-s12-i01 (simple interest: interest on the principal only, paid out; a straight-line graph). math-s11-m01: `cib256693a` (a 5% increase multiplies by 1.05). math-s12-a06 (Standard 2: y = k a^x with a = 1 + r) and a05 (Standard 1 and 2: a constant ratio in a table). A calculator power key (math-s11-f01, `ci7f303375`).

**Prior video:** math-s12-i01.

**Start:** i01's interest was paid out, so the balance stayed at the principal. Leave the interest in the account instead, and next year's interest is worked out on a bigger balance.

**Stop:** Compound interest: each period's interest is added to the balance and then earns interest itself; multiply by (1 + r) each period (site card 05, year by year) and see why n multiplications give FV = PV(1 + r)^n, with r the rate per period as a decimal and n the number of periods; interest earned = FV − PV; present value as "how much to put in now", PV = FV ÷ (1 + r)^n; the interest rate per period from PV, FV and n, r = (FV ÷ PV)^(1/n) − 1, with a calculator root (or the x-root key), checked by substituting back. This video compounds once a year. Monthly and quarterly compounding (r ÷ 12, n × 12) and the effect of each input are i04; inflation and appreciation are i03; the graph against simple interest is i05.

**Next:** math-s12-i03.

## 2. Site order, sections and worked examples

Read-only source: [investment-and-loans/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `1940cca09f6a14b6bf7159efdce0cf1be5dc27545bd72bf6dcef668cb7635c6e`. Title: Compound Interest. Lesson id maths-std-y12-m7-l02. Sections used here (`data-step-id`): `orient-to-compound-interest`, `earn-interest-on-interest`, and Trap 02 of `avoid-the-compounding-traps`. `compounding-frequency`, `we-1` and `we-2` belong to i04; card 08 (the spreadsheet) to i05; `effective-annual-rate` is beyond the 2024 Standard syllabus and is not used. Retired `lesson02.sa.html` duplicates this lesson and is not used.

### Source lesson06, intro and card 01

"$\$1000$ at 5% compounded annually becomes $\$1050$ after year one, and then 5% is calculated on $\$1050$ in year two, earning $\$52.50$, not just $50." Hook: "$5000 is invested at 6% p.a. compounded annually. How much after 2 years? Compare this to simple interest at the same rate." Revisit: "Compound $A = 5000 \times (1.06)^2 = \$5618$. Simple $A = 5000(1 + 0.06 \times 2) = \$5600$."

### Source lesson06, card 05 (`earn-interest-on-interest`)

"Compound interest is calculated on the principal AND on the accumulated interest from all previous periods. Each period the balance grows, so the next period's interest is larger. $$A = P(1 + r)^n$$" "Worked example, step by step: $2000 at 5% p.a. compounded annually for 3 years. Year 1: $2000 \times 1.05 = \$2100$ Year 2: $2100 \times 1.05 = \$2205$ Year 3: $2205 \times 1.05 = \$2315.25$ Or directly: $A = 2000 \times (1.05)^3 = \$2315.25$ Interest $= 2315.25 - 2000 = \$315.25$". Quick check: "$4000 is invested at 5% p.a. compounded annually for 6 years" (answer $4000 \times (1.05)^6$).

### Source lesson06, Trap 02

"$A = P(1+r)^n$ gives the total amount, not the interest. To find interest: $I = A - P$."

No present value or interest-rate example exists on the page (site gap, logged).

## 3. Recalculation

- Intro: 1000 × 1.05 = $1050; year-2 interest $52.50.
- Card 05: $2100.00, $2205.00, $2315.25; interest $315.25; simple interest $300.00.
- Hook: 5000 × 1.06^2 = $5618.00 against $5600.00.
- Quick check: 4000 × 1.05^6 = $5360.38 (drill 1 (a), matches the site).
- Original PV and rate examples for this pack: PV = 1500 ÷ 1.05^2 = $1360.54; (4500 ÷ 4000)^(1/3) − 1 = 4.00% (4.0042%).

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-i1/recalc.py`). All site answers used here match. Keep the site's numbers. (lesson06's quarterly and monthly answers have rounding errors, MS-11 and MS-12; they belong to i04.)

## 4. Misconceptions and HSC-style traps

- Using 1 + r as r, or r as the multiplier (2000 × 0.05^3).
- Multiplying by 1.05 × 3 instead of 1.05^3 (site quick check option C).
- Giving FV when the interest is asked (Trap 02).
- For PV, multiplying by (1 + r)^n instead of dividing ("the money you need now is less than the goal").
- For the rate, dividing the total growth by n (12.5% ÷ 3 = 4.17%, a simple-interest answer) instead of taking the root (4.00%).
- Rounding (1 + r)^n before multiplying.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- i01's jar beside the account: now the year's coins go back into the account instead, and next year's interest stack is visibly taller (interest on interest as a small extra sliver, coloured differently, on top of each year's stack).
- A multiplier ladder: $2000 → ×1.05 → $2100 → ×1.05 → $2205 → ×1.05 → $2315.25, then the three arrows collapse into "× 1.05^3".
- FV = PV(1 + r)^n with each symbol tagged (PV at the start of the ladder, FV at the end, n counting the arrows).
- Working backwards: the same ladder read right to left with ÷ 1.05 arrows for PV; for the rate, "what one multiplier, used 3 times, turns 4000 into 4500?" with a trial-and-check strip (1.03, 1.04, 1.05) before the root key.
- A calculator key strip (power key, root key) on the coded calculator.

Advanced reuse (visual parts only): `StudioTermLadder` (series-parts.tsx) for the ×1.05 ladder (math-a12-f08 uses it for geometric growth); `GrowthBars` for stacked yearly interest; `TargetDial` (finance-parts.tsx) for the rate search, if it reads well; the coded calculator plate `maths/ma12-calculator-v1.png` with coded keys. Kit needs in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

Sam invests $3000 at 5.5% p.a. compounded annually for 4 years. (a) Find the future value. (b) How much interest is earned?

**Worked answer:** (a) FV = 3000 × 1.055^4 = $3716.47. (b) 3716.47 − 3000 = $716.47.

### Question 2

(a) How much must be invested now at 4.8% p.a. compounded annually to have $6000 in 3 years? (b) An investment of $2500 grows to $2900 in 3 years with interest compounded annually. Find the annual interest rate, correct to two decimal places.

**Worked answer:** (a) PV = 6000 ÷ 1.048^3 = $5212.76. (b) 2900 = 2500(1 + r)^3, (1 + r)^3 = 1.16, 1 + r = 1.16^(1/3) = 1.050718, so r = 5.07% p.a. Check: 2500 × 1.0507^3 ≈ $2900.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2 (b): "400 ÷ 2500 ÷ 3 = 5.33%", crossed, "that is the simple-interest rate; compound needs the cube root"). Answers were checked with SymPy.

## 7. Everyday anchors

- **A first-car fund:** $5000 from part-time work, left in a savings account at 6% p.a. compounded annually for 2 years (the site's hook numbers): $5618 against $5600 if the interest had been paid out (cars and money; carries the opening contrast with i01). A saving goal, not a car loan (math-a12-f09 is the car loan).
- **Birthday money left alone:** $2000 at 5% p.a. for 3 years (site card 05's numbers): $2100, $2205, $2315.25, the extra $15.25 being interest earned on interest (money; carries the ladder and the formula).
- **A phone upgrade in two years (present value):** how much to put away now at 5% p.a. to have $1500 for a new phone in 2 years: $1360.54 (phones; carries PV). The rate example: $4000 that grew to $4500 in 3 years earned 4.00% p.a.

Varied everyday contexts (cars, gifts, phones). None repeats an anchor in the Year 12 Advanced finance designs (grepped 18 November 2026: "car fund", "birthday" no hits; f09's anchor is a first car loan, a different idea from saving for one) or the Standard a-strand packs. Claude picks; none is required. Objects, never people.

**Money figures (root ruling 5):** 6% p.a. is in reach for a bonus savings account in November 2026 (highest ongoing bonus rates about 5.5% to 6.5% p.a.; [Canstar](https://www.canstar.com.au/news/payday-for-savers-highest-ongoing-rate-hits-630/) and [CommBank savings rate announcement](https://www.commbank.com.au/news/savings-rate-announcement.html), both read 18 November 2026), usually with monthly conditions. The cash rate is 4.85% ([RBA, November 2026](https://www.rba.gov.au/publications/smp/2026/nov/overview.html)). Say once that rates change.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 5 (teaching gaps: present value and rate).

Decisions for Claude:

- **Notation.** Use FV = PV(1 + r)^n on screen (both syllabuses); the site writes A = P(1 + r)^n. Say once that some books write A and P.
- **Present value and rate are original teaching.** The syllabus asks for both and the site teaches neither. Build them as "the same formula, read backwards", using the multiplier ladder in reverse.
- **Per-period rates.** The syllabus defines r and n "per time period". Keep this video annual so the idea of a period is plain; i04 converts to months and quarters.
- **Leave out** the effective annual rate (card 07, `we-1` step 4, `we-2` step 3): it is not in the 2024 Standard points.
- **Pace flag: likely split.** Interest on interest, the formula, FV, PV and the rate in one video will rush a Standard student. Suggested split: **i02a** "How does compound interest earn interest on interest?" (the ladder, FV, interest earned; site card 05 and hook) and **i02b** "How do we work backwards to the starting amount or the rate?" (PV and r; original). If kept whole, keep one example each for PV and the rate.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
