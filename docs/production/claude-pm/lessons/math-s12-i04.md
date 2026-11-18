# Maths S12 I04: How do the rate, the term and the compounding period change an investment? One input changed at a time, the widening rate gap, interest that more than doubles with the term, rate ÷ k and years × k, and a spreadsheet experiment (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 33; ruling 29: i04 splits only if a design cannot be taught well under 570 s; it can, see Decisions). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,370 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 493 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i04-learning-review.md` (summary `../checks/m-s12-i01-i11-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-standard-outline.md` (1 to 42) and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i01-i11-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 6 (the spreadsheet formula is read, not explained): **accepted**, reviewer's wording. After the formula: "B two divided by B four is the rate for each period, and B three times B four is the number of periods, just like the quarterly example." Visual: amber brackets under the formula bar with 32 px tags "B2/B4: rate per period" and "B3*B4: number of periods"; B2 and B4, then B3 and B4, ring as each part is said; hand tag "same as ÷ k and × k".
2. Optional, scene 4 ("k" first heard in the memory aid): **applied**, reviewer's wording, after "five times four, **twenty**": "If interest is added k times a year, k is just the number of periods in a year. Here k is four." Grey chip "k = periods in a year: here k = 4".
3. Optional, scenes 2 and 5 (the value axis starts at $10,000): **applied**. Both graphs carry the usual zigzag break on the value axis and a 30 px grey tag "axis starts at $10,000". Scene 3's graph already starts at $0.

Housekeeping (ruling 37): the 82-character title becomes the design's shorter alternative, "Rate, Term and Compounding Period | Year 12 Maths Standard" (58 characters).

Length: finding 1 adds about 10 s and finding 2 about 7 s. No trim is needed.

Open decisions closed: 1 and 2 (ruling 34) and 3 (ruling 37). Joins unchanged: scene 1 opens on i03's two-route frame; scene 12 still repeats i03's right panel full-frame for i05 (ruling 38).

Narration 5,370 characters by script (Revision 1: 5,137), about 493 s with holds; speech before the notes about 448 s, under the 570 s cap. Feedback speech about 29 s and 27 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Changed values are checked in `work/brief-resolve-standard-i1/verify.py` (SymPy 1.14, `python -I`). Nothing recorded; human listening pending.

Scope: fifth video of the Year 12 Investment and loans strand, outline playlist order 17. **Standard 2 only** (root ruling 30; Standard 1 goes from i03 to i05). Pre-design pack: `../pre-design/maths-standard/math-s12-i04.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson06.sa.html` (SHA256 `1940cca09f6a14b6bf7159efdce0cf1be5dc27545bd72bf6dcef668cb7635c6e`; card 06's "the annual rate is divided by k and the number of periods is multiplied by k" and its k table; `we-1`, $10,000 at 8% compounded quarterly for 5 years, with the corrected value $14,859.47 (MS-12); Trap 03, "Using 0.08 directly as the period rate"; the true-or-false "monthly compounding produces a higher final amount"). `lesson07.sa.html` is context only (its effective annual rate and Rule of 72 are left out, ruling 33). Route entry: `math-s12-i04` in `../../programme/maths-standard-route-inputs-2.json`. Visual system: maths studio kit; one painted plate as the anchor (a salon chair, painted for i03's final frame) and the reused coffee cart in the final frame; graphs, the spreadsheet and boards coded.

Owner rules applied: as i01 (2024 syllabus; plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols; plain meanings (term, compounding period, quarterly); g01 worked examples; the spreadsheet as a coded, unbranded grid with a formula bar; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchor (a small business's equipment fund); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12, Investment and loans; Standard 2), quoted from `../../programme/maths-standard-route-inputs-2.json` (text form):

- `ciaa253014`: "Examine the effect of varying the interest rate, the term or the compounding period on the future value of an investment, with and without using digital tools"

Standard 1: no matching point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35

**Boundary:** starts from i03's two-route final frame (left panel: the salon chair `ms12-salon-chair-v1.png` with "equipment fund: $10,000", amber chips "higher rate?", "longer?", "added more often?", chip "Standard 2 next: what changes the future value?"; right panel: the coffee cart with "paid out" and "left in" accounts; chips "Next" and "?"); the right panel and the "Next" chip fade on the first sentence. Recalls i02a (FV = PV(1 + r)ⁿ with r and n per period) and a04b and i05's spreadsheet look (cells, "=", "*", "^") in a phrase or grey chip. Teaches: varying one input with the others locked; rate: a higher rate gives a higher FV and the gap widens each year; term: a longer term gives a higher FV and doubling the term more than doubles the interest; compounding period: with k periods a year the rate per period is the annual rate ÷ k and the number of periods is years × k (k = 1, 2, 4, 12); more frequent compounding gives a slightly higher FV; the effect of the period is small beside the rate and the term; the same experiments in a spreadsheet with four input cells. Stops at the effect on the future value. Not taught: the effective annual rate, the Rule of 72, flat-rate loans (ruling 33); simple against compound (i05).

## Decisions

- **Anchor: a hair salon's equipment fund (new plate from i03's final frame, live).** $10,000 set aside for 5 years at 8% p.a. compounded annually: $14,693.28 (pack anchor 2, with the site's `we-1` principal, rate and term). One fund carries all three changes, so "change one thing" always means the same $10,000: rate 6% against 8% ($13,382.26 against $14,693.28; gap $200 after year 1, $1,311.02 after year 5); term 5 against 10 years at 8% (interest $4,693.28 against $11,589.25, 2.47 times); period yearly, quarterly ($14,859.47, site `we-1` corrected, MS-12) and monthly ($14,898.46). The pack's phone-plan savings and long-horizon numbers are not used, so the anchor stays single and the comparisons share a base. Plate: `ms12-salon-chair-v1.png` (briefed in i03, painted one video early). No people.
- **Split test (root ruling 29).** Not split. The three changes share one anchor and one graph style, the per-period conversion is one worked example (scene 4), and the spreadsheet scene repeats the three changes rather than teaching new ones. The narration is about 5,100 characters and the video about 475 s with holds (see "Narration length estimate"), with feedback under 30 s. The pack's suggested i04a and i04b would each repeat the anchor and the "one change at a time" idea.
- **Notation.** FV = PV(1 + r)ⁿ with r and n per period; for k periods a year the strip shows "r per period = annual rate ÷ k" and "n = years × k" in words first, then numbers. No new letters beyond k, which is said as "the number of periods in a year".
- **Join.** Scene 1 opens on i03's final frame; the left panel grows to fill the frame.
- **Simulations (standard item 3).**
  1. **Locked inputs** (scenes 2 to 5; `ScreenApp` locked-input style on a coded panel): three input chips "rate", "years", "times a year"; the one being changed glows amber, the other two grey with a lock icon, and an FV readout updates.
  2. **Rate fan** (scene 2; `StudioPlot`): two growth curves from (0, 10 000), 6% and 8%, drawing year by year; a vertical gap bracket at each year grows from $200 to $1,311.02 with its readout.
  3. **Term run** (scene 3): the 8% curve runs from t = 5 to t = 10; the interest for years 0 to 5 and years 5 to 10 is shown as two teal brackets on the value axis ($4,693.28 and $6,895.97).
  4. **Period zoom** (scene 5; `StudioPlot` with an inset magnifier): yearly, quarterly and monthly curves at 8% lie almost on top of each other; a magnifier at t = 5 shows $14,693.28, $14,859.47 and $14,898.46; beside it the rate fan's $1,311.02 gap at the same scale.
  5. **Spreadsheet experiment** (scene 6; `SpreadsheetGrid` input panel with a results log): four input cells, the FV formula, and a log row added for each experiment.
- **Colour roles (fixed for i01 to i05).** PV **violet**; the annual rate, the rate per period and the multiplier **amber**; the term and periods in ink; the changed input glows amber, locked inputs grey; interest earned **teal**; FV framed **green** as an answer; mistake **red**, crossed slips only; the second curve in a comparison is a darker teal.
- **Large type, handwritten voice.** As i01. Hand tags: "one change, others locked", "gap grows every year", "extra interest earns interest", "more than double", "interest on earlier interest", "per year ÷ 4 = per quarter", "years × 4 = quarters", "small", "big", "only FV changes", "one input at a time", "same as ÷ k and × k" (Revision 2). At most two live at once.
- **Stage changes (standard item 2).** i03's frame, the chair and the base FV (1); the input panel and rate fan (2); the term run (3); g01 board, quarterly (4); the period zoom and the ranking (5); the spreadsheet and log (6); framed card (7); question cards (8 to 11); the coffee cart's two accounts for i05 (12); key notes (13).
- **Worked example (g01 layout).** 4: task strip "$10 000 is invested at 8% p.a. compounded quarterly for 5 years. Find the future value." (site `we-1`); formula strip "FV = PV(1 + r)ⁿ"; givens card "PV = $10 000" (violet), "8% p.a. ÷ 4 = 2% a quarter = 0.02" (amber), "5 years × 4 = 20 quarters"; rows "FV = 10 000 × 1.02²⁰", "≈ $14 859.47" (framed green); crossed slip "10 000 × 1.08²⁰ ≈ $46 610" (caption "8% is per year: use 2% a quarter").
- **Memory aid.** Framed card: "Rate and term: big. How often: small." Key line: "k periods a year: rate per period = annual rate ÷ k; periods = years × k."
- **Visual surprise.** The yearly, quarterly and monthly curves look like one curve until the magnifier opens, while the 6% and 8% curves visibly fan apart (scene 5).
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` MS-11, MS-12).** `we-1` uses the corrected $14,859.47 (MS-12, not $14,859 from a rounded factor). `we-2` (MS-11, $5,983.40) is not used. The effective annual rate in lesson06 and lesson07 is not used (ruling 33). The site has no worked example varying the rate alone or the term alone, and no digital-tool demonstration (logged gap); scenes 2, 3 and 6 are original, built on the site's own $10,000 at 8%.
- **Plain meanings at first use.** Term ("how long the money is invested"); compounding period ("how often interest is added"); quarterly ("four times a year, every three months"); input ("a number you choose, like the rate").
- **Attempts.** A1 (pack question 1, with the principal changed from $8,000 to $4,000 so that the difference of the rounded values and the difference of the full values agree to the cent, $22.66): annually $4,764.06; monthly $4,786.72; $22.66 more; crossed "4000 × 1.06³⁶" (caption "monthly: 6% ÷ 12 = 0.5% a month"). A2 (pack question 2): $5,000 at 5% annually: interest $3,144.47 after 10 years and $8,266.49 after 20; the reason; crossed "2 × 3144.47 = $6288.94" (caption "the second 10 years earn interest on interest").
- **Mistake scene:** none separate. The annual rate used per quarter (4 crossed; site Trap 03) and the annual rate per month (A1 crossed); dividing the rate but not multiplying the years (4, said); doubling the term to double the interest (3, said; A2 crossed); expecting a big jump from monthly compounding (5); changing two inputs at once (2, 6, said).
- **Cause chain taught, in order:** (1) changing one input with the others locked means any change in FV comes from that input (2); (2) a higher rate adds more interest each year, and that extra interest then earns interest, so the gap widens (2); (3) a longer term gives interest more periods to earn on earlier interest, so the second five years earn more than the first and the interest more than doubles (3); (4) a rate quoted per year is shared across k periods, so each period uses rate ÷ k, and there are years × k periods (4); (5) more frequent compounding adds interest sooner, so it starts earning sooner, but each addition is small, so the effect is small beside the rate and the term (5); (6) a spreadsheet keeps the inputs in their own cells, so one edit changes one input and the formula recalculates only the FV (6).
- **Entry knowledge (route):** i02a and i02b (FV = PV(1 + r)ⁿ; r and n per period), i03 (the formula in other contexts), a04b (spreadsheet formulas). Recalled in a phrase or grey chip.
- **Standard 1 path:** not applicable (Standard 2 only). The final frame is the same picture i05 opens on from i03, so both routes meet at i05.
- **Money sources (root ruling 32).** 8% is high for a deposit in November 2026 and is said to be an example; 6% is in reach for a bonus savings account. Top 12-month term deposits about 5.5% to 5.7% p.a. (money.com.au, https://www.money.com.au/term-deposit-rates, updated 5 Nov 2026; Finder, https://www.finder.com.au/term-deposits/12-months, read 18 Nov 2026 by the pack); most savings accounts compound monthly (pack). Narration says once that "rates change".
- **Handoff (to math-s12-i05, "Why does compound interest pull ahead of simple interest, and how does a spreadsheet show it?").** Scene 12, specified precisely in `../checks/root-decisions-maths-s12-i01-i11.md`: i03's right panel, full-frame: the coffee cart `ma11-coffee-cart-v1.png` (900 px wide) at the left; two coded account cards at the right, "paid out" (blue bar) and "left in" (teal bar), each "$5,000 at 6% p.a."; the grey chip "side by side: how far apart?"; chips "Next: simple against compound" and "?". No yearly values are shown. This is i05's opening frame for Standard 2 (Standard 1 arrives from i03's right panel, the same picture).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 10 000 × 1.06ⁿ (n = 0 to 5): 10 000, 10 600, 11 236, 11 910.16, 12 624.77, 13 382.26. 10 000 × 1.08ⁿ: 10 000, 10 800, 11 664, 12 597.12, 13 604.89, 14 693.28. Gaps: 0, 200, 428, 686.96, 980.12, 1311.02.
  (b) Term: 10 000 × 1.08¹⁰ = 21 589.25; interest 11 589.25; 11 589.25 ÷ 4693.28 = 2.469; second five years 6895.97.
  (c) Periods at 8% for 5 years: yearly 14 693.28; half-yearly 10 000 × 1.04¹⁰ = 14 802.44; quarterly 10 000 × 1.02²⁰ = 14 859.47 (+166.19); monthly 10 000 × (1 + 0.08/12)⁶⁰ = 14 898.46 (+205.18). Slip 10 000 × 1.08²⁰ = 46 609.57.
  (d) Spreadsheet formula =B1*(1+B2/B4)^(B3*B4) with B1 10000, B2 0.08, B3 5, B4 1; log rows: (0.06, 5, 1) 13 382.26; (0.08, 5, 1) 14 693.28; (0.08, 10, 1) 21 589.25; (0.08, 5, 4) 14 859.47; (0.08, 5, 12) 14 898.46.
  (e) A1: 4000 × 1.06³ = 4764.064; 4000 × 1.005³⁶ = 4786.7221; difference 22.658 ≈ 22.66 (rounded values also give 22.66). Slip 4000 × 1.06³⁶ = 32 589.01.
  (f) A2: 5000 × 1.05¹⁰ − 5000 = 3144.47; 5000 × 1.05²⁰ − 5000 = 8266.49; ratio 2.63; slip 2 × 3144.47 = 6288.94.
  (g) Pronunciations: "ten thousand times one point zero two to the power twenty"; "fourteen thousand eight hundred and fifty-nine dollars and forty-seven cents"; "half a per cent a month"; "B one, times one plus B two divided by B four, to the power of B three times B four".

Main question: *A salon's $10,000 fund earns 8% a year for 5 years. How do the rate, the term and the compounding period change what it grows to?*
Entry knowledge (i02a, i02b, i03, a04b): FV = PV(1 + r)ⁿ with r and n per period; spreadsheet formulas.
Stops after: the effect of each input, rate ÷ k and years × k, the spreadsheet experiment. No effective annual rate.
Handoff: math-s12-i05: "$5,000 at 6%, paid out against left in: side by side, how far apart?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): PV violet; rate amber; interest teal; answer green; mistake red; locked inputs grey. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: one fund, three questions
> Here's a hair salon's equipment fund, ten thousand dollars, set aside for five years. The bank offers eight per cent a year, compounded annually. That's high, so treat it as an example, and remember that rates change. It grows to fourteen thousand six hundred and ninety-three dollars and twenty-eight **cents**. But what if the rate were different, or the term were longer, or the interest were added more often? Which change matters most? So how do the rate, the term and the compounding period change an **investment**?

Visual: opens on i03's final frame; on the first sentence the right panel, the rule and the "Next" chip fade, and the salon chair `ms12-salon-chair-v1.png` grows to 700 px tall at the left with "equipment fund: $10,000" (violet). On "eight per cent a year" an amber chip "8% p.a., compounded annually"; on "rates change" a grey chip "an example; rates change". On "cents" a row, 44 px: "10 000 × 1.08⁵ ≈ $14 693.28" (framed green), calculator badge. On "rate were different" the chip "higher rate?" pulses; on "term were longer" "longer?"; on "added more often" "added more often?". On "investment" heading "Rate, term and compounding period" writes on, and the question chip "Which matters most?" moves to the top right.

### 2. change the rate
> To see what each one does, change one thing at a time, and keep the others **locked**. Start with the rate. At six per cent for five years, the fund grows to thirteen thousand three hundred and eighty-two dollars and twenty-six cents. At eight per cent, it's fourteen thousand six hundred and ninety-three dollars and twenty-eight **cents**. The higher rate wins, and the gap gets wider every year. After one year, it's two hundred dollars. After five, it's about thirteen hundred and eleven **dollars**. That's because the extra interest earns interest **too**.

Visual: stage change: the chair shrinks to a 260 px badge at the top left. An input panel (simulation 1) across the top, 44 px: "rate", "years: 5", "times a year: 1"; on "locked" "years" and "times a year" grey with lock icons, "rate" glowing amber, hand tag "one change, others locked". Below, the graph (simulation 2; t 0 to 5 years, $10,000 to $15,000, with the usual zigzag break on the value axis and a 30 px grey tag "axis starts at $10,000"; Revision 2, review finding 3): on "six per cent" the 6% curve (teal) draws, end label "$13,382.26"; on "cents" the 8% curve (darker teal) draws, end label "$14,693.28". On "gap gets wider" vertical amber brackets at each year with readouts "$200", "$428", "$686.96", "$980.12"; on "dollars" "$1,311.02" at t = 5 rings, hand tag "gap grows every year". On "too" hand tag "extra interest earns interest".

### 3. change the term
> Now lock the rate at eight per cent, and change the term, which is how long the money stays in. Over five years, the fund earns about four thousand six hundred and ninety-three dollars of interest. Double the term to ten years, and it grows to twenty-one thousand five hundred and eighty-nine dollars and twenty-five **cents**. That's eleven thousand five hundred and eighty-nine dollars of interest, about two and a half times as much, not just **twice**. In the second five years, interest is earned on a balance that already includes the first five years' **interest**.

Visual: camera continue: the input panel now glows "years" (amber) with "rate: 8%" and "times a year: 1" locked. The graph's t-axis extends to 10 years and $0 to $25,000 (simulation 3); the 8% curve runs on from t = 5. On "four thousand six hundred and ninety-three" a teal bracket on the value axis "years 0 to 5: $4,693.28". On "cents" the end point (10, 21 589.25) rings green. On "twice" a second teal bracket "years 5 to 10: $6,895.97" beside the first, and a row, 44 px: "interest: $11,589.25 = 2.47 × $4,693.28", hand tag "more than double". On "interest" (last bold) hand tag "interest on earlier interest".

### 4. compounding quarterly
> Now the compounding period, which is how often interest is added. Many accounts add it four times a year, called quarterly, or every month. The rate is still quoted per year, so share it out. Quarterly, the rate for each quarter is eight per cent divided by four, two per **cent**. And the number of quarters in five years is five times four, **twenty**. If interest is added k times a year, k is just the number of periods in a year. Here k is four. So FV equals ten thousand times one point zero two to the power twenty, which is fourteen thousand eight hundred and fifty-nine dollars and forty-seven **cents**. Using eight per cent for every quarter is the slip. That would make it about forty-six thousand dollars, far too **much**.

Visual: clear change to the g01 board, the chair (300 px) at the top right. Task strip, 44 px: "$10 000 is invested at 8% p.a. compounded quarterly for 5 years. Find the future value." (site `we-1`). Formula strip, 52 px: "FV = PV(1 + r)ⁿ", with a grey chip under it "r and n per period". Givens card, 44 px: "PV = $10 000" (violet); on "cent" "8% p.a. ÷ 4 = 2% a quarter = 0.02" (amber), hand tag "per year ÷ 4 = per quarter"; on "twenty" "5 years × 4 = 20 quarters", hand tag "years × 4 = quarters"; on "k is four" a grey chip, 32 px, "k = periods in a year: here k = 4" (Revision 2, review finding 2). Rows, 52 px: "FV = 10 000 × 1.02²⁰"; on "cents" "≈ $14 859.47" (framed green). On "much" a red slip "10 000 × 1.08²⁰ ≈ $46 610" writes and is crossed (caption "8% is per year: use 2% a quarter").

### 5. how much does the period matter?
> So quarterly beats yearly, by a hundred and sixty-six dollars and nineteen cents. Monthly is a little more again, fourteen thousand eight hundred and ninety-eight dollars and forty-six cents. Each interest payment lands a bit earlier, so it starts earning a bit **sooner**. But compare the changes. Raising the rate from six to eight per cent added about thirteen hundred dollars. Changing yearly to monthly added only about two hundred and five. The rate and the term matter far more than how often interest is **added**.

Visual: stage change: the graph (t 0 to 5, $10,000 to $15,000, zigzag break and grey tag "axis starts at $10,000" as in scene 2) with the 8% yearly, quarterly and monthly curves (simulation 4), which look like one line; on "a hundred and sixty-six" a magnifier inset opens at t = 5: "yearly $14,693.28", "quarterly $14,859.47 (+$166.19)", "monthly $14,898.46 (+$205.18)", with a grey chip "monthly: 8% ÷ 12 a month, 60 months". On "sooner" hand tag "added sooner, earns sooner". On "compare the changes" a ranking card at the right, 44 px: bars "rate 6% → 8%: +$1,311.02" (long), "term 5 → 10 years: +$6,895.97" (longest), "yearly → monthly: +$205.18" (short); hand tags "big" and "small". On "added" the card's heading "biggest effects: rate and term" (framed green).

### 6. the same experiments in a spreadsheet
> A spreadsheet makes these experiments quick. Put the principal, the yearly rate, the number of years, and the number of periods each year in four cells. Then one cell works out the future value. Equals B one, times one plus B two divided by B four, to the power of B three times B **four**. B two divided by B four is the rate for each period, and B three times B four is the number of periods, just like the quarterly example. Now change one input, and only the future value **changes**. Six per cent to eight. Five years to ten. Yearly to monthly. Each time, you can see the effect of that one change on its **own**.

Visual: stage change: `SpreadsheetGrid` (simulation 5), 1,400 × 640 px, column A labels, column B inputs (40 px): A1 "principal" B1 "10000" (violet); A2 "yearly rate" B2 "0.06" (amber); A3 "years" B3 "5"; A4 "periods a year" B4 "1"; A6 "future value" B6. On "four" (bold) the formula bar (44 px) "=B1*(1+B2/B4)^(B3*B4)", B6 "13382.26"; grey chip "a04b: = means calculate; ^ means to the power of". On "rate for each period" an amber bracket under "B2/B4" in the formula bar with a 32 px tag "B2/B4: rate per period", and cells B2 and B4 ring; on "number of periods" a bracket under "B3*B4", tag "B3*B4: number of periods", and B3 and B4 ring; hand tag "same as ÷ k and × k" (Revision 2, review finding 1). On "changes" a results log at the right fills a row per edit, each edit glowing one input amber with the others grey, hand tag "only FV changes": "6%, 5 yrs, 1: 13 382.26"; on "eight" "8%, 5, 1: 14 693.28"; on "ten" "8%, 10, 1: 21 589.25"; on "monthly" "8%, 5, 12: 14 898.46". On "own" hand tag "one input at a time".

### 7. memory aid
> Here's the summary. Change one thing at a time. A higher rate or a longer term makes a big difference, and the gap keeps growing. Adding interest more often helps, but only a little. For k periods a year, divide the rate by k, and multiply the years by **k**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the ranking card's three bars (two long, one short). Main line, hand font 56 px: "Rate and term: big. How often: small." On "k" the key line, 40 px: "k periods a year: rate per period = annual rate ÷ k; periods = years × k." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Four thousand dollars is invested for three years at six per cent per year. Find the future value if interest is compounded annually, and if it's compounded monthly. How much more does monthly compounding earn? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "$4000 is invested for 3 years at 6% p.a. Find the future value if interest is compounded (a) annually (b) monthly. (c) How much more does monthly compounding earn?" Picture slot: the input panel with "rate: 6%", "years: 3", "times a year: ?". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Annually, it's four thousand times one point zero six cubed, four thousand seven hundred and sixty-four dollars and six **cents**. Monthly, the rate is half a per cent a month, for thirty-six months. That gives four thousand seven hundred and eighty-six dollars and seventy-two **cents**. So monthly earns twenty-two dollars and sixty-six cents **more**. One point zero six to the thirty-six is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "4000 × 1.06³"; on "cents" (first) "≈ $4764.06" (framed green). "6% ÷ 12 = 0.5% = 0.005; 3 × 12 = 36 months" (amber); "4000 × 1.005³⁶"; on "cents" (second) "≈ $4786.72" (framed green). On "more" "4786.72 − 4764.06 = $22.66" (framed green). On "slip" a red slip "4000 × 1.06³⁶" writes and is crossed (caption "monthly: 6% ÷ 12 = 0.5% a month"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Five thousand dollars is invested at five per cent per year, compounded annually. Find the interest earned after ten years, and after twenty years. The term doubled. Explain why the interest more than doubled. Pause here to answer.

Visual: `QuestionCard`, 40 px: "$5000 is invested at 5% p.a. compounded annually. (a) Find the interest earned after 10 years and after 20 years. (b) The term doubled. Explain why the interest more than doubled." Picture slot: empty axes, t 0 to 20 years. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> After ten years, the interest is FV minus PV, three thousand one hundred and forty-four dollars and forty-seven **cents**. After twenty years, it's eight thousand two hundred and sixty-six dollars and forty-nine **cents**. In the second ten years, interest is earned on a balance that already holds the first ten years' **interest**. Just doubling the first answer is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "5000 × 1.05¹⁰ − 5000"; on "cents" (first) "≈ $3144.47" (framed green). "5000 × 1.05²⁰ − 5000"; on "cents" (second) "≈ $8266.49" (framed green). On "interest" the curve on the axes with two teal brackets "years 0 to 10" and "years 10 to 20" (the second taller), framed reason "interest on interest". On "slip" a red slip "2 × 3144.47 = $6288.94" writes and is crossed (caption "the second 10 years earn interest on interest"). Hold about 1 s.

### 12. handoff
> So far, every comparison has been compound against compound. But how far does compound interest pull ahead of simple interest? Here's a coffee cart business with five thousand dollars to put away at six per cent. One account pays the interest out. The other leaves it in. Side by side, year by year, how far apart do they get? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s12-i01-i11.md`): on "coffee cart" the coffee cart `ma11-coffee-cart-v1.png` (900 px wide) at the left; on "pays the interest out" a coded account card "paid out" (blue bar, "$5,000 at 6% p.a."); on "leaves it in" a card "left in" (teal bar, "$5,000 at 6% p.a."). On "how far apart" the grey chip "side by side: how far apart?". On "next" chips "Next: simple against compound" and "?". Hold about 2 s. No yearly values. This is i05's opening frame (the same picture as i03's right panel); scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Change one input at a time; lock the others.
- Higher rate: higher FV, and the gap widens each year.
- Longer term: interest more than doubles when the term doubles.
- k periods a year: rate ÷ k per period; years × k periods.
- More often: slightly more. Rate and term matter far more.

Memory aid (framed card, right side, as in scene 7): *Rate and term: big. How often: small.* Key: *k periods a year: rate per period = annual rate ÷ k; periods = years × k.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and i05's opening frame.

## Teaching checks

- **Does it explain causes?** Why lock inputs: so the change in FV has one cause (2). Why the rate gap widens: extra interest earns interest (2). Why doubling the term more than doubles the interest: the second half earns on earlier interest (3). Why rate ÷ k and years × k: a yearly rate shared over k periods, k periods each year (4). Why frequency helps only a little: each payment arrives a little sooner (5).
- **Misconceptions addressed:** the annual rate per quarter or per month (4 crossed, A1 crossed); dividing the rate without multiplying the periods (4); doubling the interest with the term (3, A2 crossed); expecting a big effect from monthly compounding (5); changing two inputs at once (2, 6).
- **Visual standard, item by item:** 1 the salon chair from the first frame; 2 a new stage every 40 to 60 s; 3 locked inputs with a live FV readout, curves fanning apart with a growing gap readout, a magnifier opening on three near-identical curves, a spreadsheet log filling per experiment; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board with a framed answer and a crossed slip; 8 framed card and five bullets; 9 three curves that look like one until the magnifier opens.
- **One idea at a time:** rate (2), term (3), the conversion (4), the period's effect and the ranking (5), the spreadsheet (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 29 s and 27 s.
- **Avoided double teaching:** the formula is i02a's; the spreadsheet basics are a04b's (grey chip).
- **Syllabus coverage:** `ciaa253014`: rate (2, 5, 6; key notes 1, 2), term (3, 6, A2; key note 3), compounding period (4, 5, 6, A1; key notes 4, 5); "without digital tools" (2 to 5, A1, A2) and "with digital tools" (6).
- **Out of scope by design:** effective annual rate, Rule of 72 (ruling 33); simple against compound (i05).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1 with the principal changed to $4000, original HSC style, 3 marks suggested, not an official marking scheme).** "$4000 is invested for 3 years at 6% p.a. Find the future value if interest is compounded (a) annually (b) monthly. (c) How much more does monthly compounding earn?"
Model answer: (a) 4000 × 1.06³ = $4764.06. (b) 6% ÷ 12 = 0.5% a month for 36 months: 4000 × 1.005³⁶ = $4786.72. (c) $22.66. Classic mistake (crossed): "4000 × 1.06³⁶".

**Attempt 2 (scene 10; pack question 2, 3 marks suggested).** "$5000 is invested at 5% p.a. compounded annually. (a) Find the interest earned after 10 years and after 20 years. (b) The term doubled. Explain why the interest more than doubled."
Model answer: (a) 10 years: 5000 × 1.05¹⁰ − 5000 = $3144.47; 20 years: 5000 × 1.05²⁰ − 5000 = $8266.49. (b) In the second 10 years, interest is earned on a balance that already includes the first 10 years' interest, so each year's interest is larger. Classic mistake (crossed): "2 × 3144.47 = $6288.94".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Base | 10 000 × 1.08⁵ ≈ 14 693.28 | 1, 2, 5, 6 |
| Rate | 6%: 13 382.26; gaps 200, 428, 686.96, 980.12, 1311.02 | 2, 5, 6 |
| Term | 10 years: 21 589.25; interest 4693.28 and 11 589.25 (2.47 times); second five years 6895.97 | 3, 5, 6 |
| Quarterly | 2% × 20: 14 859.47 (+166.19); slip ≈ 46 610 | 4, 5, 6 |
| Monthly | 14 898.46 (+205.18) | 5, 6 |
| A1 | 4764.06; 4786.72; 22.66 | 8, 9 |
| A2 | 3144.47; 8266.49; slip 6288.94 | 10, 11 |
| Handoff | $5,000 at 6% (labels only) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); Codex to re-check.

- 10 000 × 1.06ⁿ and 10 000 × 1.08ⁿ at n = 0 to 5 (author note (a)); 14 693.2808 − 13 382.2558 = 1311.0250.
- 10 000 × 1.08¹⁰ = 21 589.2500; 11 589.2500 ÷ 4693.2808 = 2.4693; 21 589.2500 − 14 693.2808 = 6895.9692.
- 10 000 × 1.02²⁰ = 14 859.4740; 10 000 × (1 + 0.08/12)⁶⁰ = 14 898.4571; 10 000 × 1.04¹⁰ = 14 802.4428; 10 000 × 1.08²⁰ = 46 609.5714; differences from 14 693.2808: 166.1932, 205.1763.
- 4000 × 1.06³ = 4764.064; 4000 × 1.005³⁶ = 4786.7221; difference 22.6581; 4786.72 − 4764.06 = 22.66.
- 5000 × 1.05¹⁰ − 5000 = 3144.4731; 5000 × 1.05²⁰ − 5000 = 8266.4885; 2 × 3144.4731 = 6288.9463.

## Memory aid check

- **"Rate and term: big. How often: small."** with key line **"k periods a year: rate per period = annual rate ÷ k; periods = years × k."** Original (the site's card 06 gives the conversion; the ranking is the pack's "the effect is small compared with the rate and the term"). Meaning, as said in scene 7: for typical rates and terms, changing the rate or the term moves the FV far more than changing the compounding frequency. Assumptions checked: "big" and "small" compare realistic changes (a couple of percentage points of rate, years of term) against changing yearly to monthly at the same annual rate, as in scene 5; at very high rates the frequency effect grows, which no Standard question uses; the key line's rate is the quoted annual (nominal) rate, which is what Standard questions give. It helps a new case: 5% for 4 years, yearly against quarterly: 1.05⁴ = 1.2155 against 1.0125¹⁶ = 1.2199, a small gain. Introduced after scenes 2 to 6.
- **Considered, not used:** "Divide the rate, multiply the time" alone (drops the ranking, the main idea).

## Narration length estimate

Revision 2, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12i/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632).

**5,370 characters** (Revision 1: 5,137), 13 scene headings. Characters per scene (1 to 13): 514, 546, 560, 720, 514, 606, 255, 243, 392, 241, 365, 339, 75.

At 13.3 characters per second the speech is about 404 s. Total with the holds and settling below **about 493 s (8 min 13 s)**, 77 s under the 570 s cap; speech and holds before the notes about 448 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the rate fan (2), the term run (3), the magnifier and ranking (5) and the spreadsheet log (6) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 1's "That's high, so treat it as an example," keeping "remember that rates change" (ruling 5); scene 4's "That would make it about forty-six thousand dollars, far too much." shortened to "far too much."

## Scene list and build ids

Lesson key `m-s12i04` (route math-s12-i04). Explainer folder `src/explainer/lessons/math-s12-i04`; build inputs in `docs/production/claude-pm/lessons/math-s12-i04/` (at voicing).

In order (13 scene headings): hook-one-fund, change-the-rate, change-the-term, compounding-quarterly, how-much-period-matters, spreadsheet-experiment, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | i03's frame; the chair and the base FV |
| 40 to 90 s | 2 | Locked inputs; the rate fan |
| 90 to 140 s | 3 | The term run |
| 140 to 200 s | 4 | g01 board: quarterly |
| 200 to 245 s | 5 | Period zoom and ranking |
| 245 to 295 s | 6 | Spreadsheet experiment |
| 295 to 315 s | 7 | Framed memory card |
| 315 to 410 s | 8 to 11 | Question cards and countdowns, then feedback |
| 410 to 435 s | 12 | The coffee cart's two accounts, for i05 |
| 435 to 480 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i03's last frame continues into 1 (the right panel fades); 1 to 2 stage change; 2 to 3 camera continue; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i04-learning-review.md`, `science_check` = `checks/m-s12-i04-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, viewed): `ma11-coffee-cart-v1.png` (reused in the final frame); `ma12-calculator-v1.png` (badge); `ma12-phone-v1.png` (listed; not used: f14 built a savings app on it, and the pack asks this video not to repeat that look).

Need: none new for this video. From i03's brief: `ms12-salon-chair-v1.png` (the anchor). Reused: `ma11-coffee-cart-v1.png`, `ma12-calculator-v1.png`.

Coded: the input panel and locks, every graph, bracket, magnifier and ranking bar, the board, the spreadsheet and results log, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot`, `ScreenApp` controls, `SpreadsheetGrid`, `accountFV` (`money.ts`), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i04):
1. **Locked-input style** (small): an input chip greyed with a lock while another glows. Check: exactly one input glows in scenes 2, 3, 5 and in each spreadsheet edit.
2. **Inset magnifier on `StudioPlot`** (small): a circular inset at a chosen t showing labelled values. Check: the inset's three values match "Numbers used" to the cent.
3. **SpreadsheetGrid input panel with a results log** (shared with i22). Check: the five log rows match author note (d).

## Codex asset brief

No new plate for this video. The salon chair is briefed in i03 (`ms12-salon-chair-v1.png`, painted before the i03 build). The coffee cart exists and was viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, spreadsheet cells, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly and that no Standard 1 code is claimed.
3. Confirm `we-1`'s value is $14,859.47 (MS-12), and that no effective annual rate, Rule of 72 or flat rate appears (ruling 33).
4. Confirm that every comparison changes exactly one input, and that A1's rounded and full differences agree ($22.66).
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on i03's final frame and scene 12 matches the decisions file's i04 to i05 join (the same picture as i03's right panel).
7. Confirm "rates change" is said once, no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Rate, Term and Compounding Period | Year 12 Maths Standard

(Title length: 58 characters; Revision 2, ruling 37. Revision 1: "Rate, Term and Compounding Period: Effect on Future Value | Year 12 Maths Standard", 82.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson06.sa.html

A hair salon puts $10,000 aside for five years at 8% a year. What happens if the rate is higher, the term is longer, or the interest is added more often? Change one thing at a time and watch the future value: a higher rate opens a gap that widens every year, doubling the term more than doubles the interest, and compounding quarterly or monthly (divide the rate by the number of periods a year, multiply the years by it) helps only a little. Then run the same experiments in a spreadsheet. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates change; the rates here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Examine the effect of varying the interest rate, the term or the compounding period on the future value of an investment, with and without using digital tools"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35

Builds on: Inflation and Appreciation with Compound Interest. Next: Simple vs Compound Interest in a Spreadsheet.

#Year12Maths #MathsStandard #CompoundInterest #HSCScience

## Open decisions

- **1. No split (root ruling 29).** Closed in Revision 2: ruling 34 (i04 stays one video; the review found scenes 4 and 5 not rushed). Revision 1 text: Recorded under Decisions: one anchor carries the three changes, and the design runs about 475 s. If the learning review finds scene 4 or 5 rushed, the fallback is i04a (rate and term, scenes 2, 3, 6) and i04b (the compounding period, scenes 4, 5), each with its own attempt pair.
- **2. A1's principal (root).** Closed in Revision 2: ruling 34 accepts $4,000. Revision 1 text: Changed from the pack's $8,000 to $4,000 so the answer from rounded values ($22.66) equals the answer from full values; with $8,000 they differ by a cent ($45.31 against $45.32), which a Standard student could be marked against. Confirm.
- **3. Title length.** Closed in Revision 2: ruling 37 (the shorter alternative is now the title). Revision 1 text: 82 characters; a shorter alternative is "Rate, Term and Compounding Period | Year 12 Maths Standard" (58).

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-i04-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A. Revision 1 note: Next: student learning review (trace from i03; check that "one change, others locked" is clear before the first graph, that the term's "more than double" lands with the two brackets, that rate ÷ 4 and years × 4 are both said before the formula, that the ranking answers the opening question, that the spreadsheet formula is readable at speed, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
