# Maths S12 I01: How does simple interest grow, and what does its graph look like? Interest on the principal only, I = Prn, the total A = P + I, finding the principal, the straight-line graph, and comparing graphs by hand and in an app (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 33). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 6,132 characters by script (see "Narration length estimate"; Revision 2), 14 scene headings, about 552 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i01-learning-review.md` (summary `../checks/m-s12-i01-i11-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-standard-outline.md` (1 to 42) and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i01-i11-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 5 (why divide by 0.05): **accepted**, reviewer's wording. After "five per cent of the principal": "If five per cent is a hundred and fifty, then one per cent is thirty, and a hundred per cent, the whole principal, is three thousand **dollars**. That's the same as a hundred and fifty divided by zero point zero five." Rows: "5% of P = $150", "1% of P = 150 ÷ 5 = $30" (hand tag "1% first"), "100% of P = 30 × 100 = $3000" (framed green on the existing cue "dollars"), and beside it in ink "150 ÷ 0.05 = 3000" with the hand tag "same answer". The check row and the grey "Standard 2" row are unchanged.
2. Should fix, scenes 2, 6 and 7 (steps and slopes too small to see): **accepted**, using the shared zoom column (root's decision 2: one `InterestStack` part, a labelled "zoomed in" side column beside the stack, described in the same words in i01, i02a, i03 and i05; see "Studio kit use and additions"). Scene 2: the zoom column shows the band $4,800 to $5,400 at 0.8 px a dollar, with a dashed line at "P = $5,000"; each $200 block stands 160 px above it, labelled beside it at 36 px, then lifts off to the jar. The full bar's stacks also carry their "$200" labels beside them, as the reviewer asked. Scene 6: the same part beside the graph shows $4,800 to $5,800 for t = 0 to 3, the four bars, their 80 px stacks and the "+$200" step triangle; the full $0 axis stays behind it. Scene 7: the comparison window runs to 10 years, t 0 to 10 and $0 to $12,000, so the 4%, 6% and $8,000 lines rise about 117, 175 and 187 px and end at $7,000, $8,000 and $11,200 (labelled). The dot's run from t = 3 to t = 5 is unchanged.
3. Optional, scene 3 (the "per period" tags): **applied**. "times the rate per period, r, here per year, times the number of periods, n, here years". The on-screen tags already say "rate per period" and "number of periods".
4. Optional, scene 4 (open decision 2): **applied**. "new studio speakers" in the narration, and "studio speakers" in the task strip and the decisions.

Length: findings 1, 3 and 4 add about 12 s of speech, and the zoom columns about 2 s of settling. The margin is now about 18 s, so no reserve trim is taken; the named trims (scene 5's last sentence and scene 4's "That would make the interest three hundred thousand dollars.") stay in reserve.

Open decisions closed: 2 (studio speakers). Still open: 1 (the "Builds on" titles, root). Joins unchanged: scene 1 opens on a13's final frame (and matches a08's right panel); scene 13 is still i02a's opening frame.

Narration 6,132 characters by script (Revision 1: 5,977), about 552 s with holds; speech before the notes about 507 s, under the 570 s cap. Feedback speech about 28 s and 27 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Changed values are checked in `work/brief-resolve-standard-i1/verify.py` (SymPy 1.14, `python -I`). Nothing recorded; human listening pending.

Scope: first video of the Year 12 Investment and loans strand, outline playlist order 14. Shared by Standard 1 and Standard 2 (identical content; root ruling 30). Standard 2 viewers arrive from a13; Standard 1 viewers from a08 (root ruling 9); both final frames show the same coin jar, axes and grey chip. Pre-design pack: `../pre-design/maths-standard/math-s12-i01.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson05.sa.html` (SHA256 `15a2692f977fe80811f2a7f0f628cac8369b7990d2f5bccfcbd22d01ac1c63aa`; card 05's "$5000 invested at 4% p.a. simple interest for 3 years", $600 and $5600, "the same dollar amount is added every period", "a straight line with slope Pr and y-intercept P"; card 06's "find the missing one" table; `we-1` ($8000 at 7.5% for 5 years, $3000, $11 000) and `we-2` ($450 at 5% over 3 years, $3000) with the site's numbers; Trap 01, 0.06 not 6). Route entry: `math-s12-i01` in `../../programme/maths-standard-route-inputs-2.json`. Visual system: maths studio kit; reused painted plates (the coin jar from a13 and a08, a pair of speakers); the account card, interest stacks, graphs and boards coded.

Owner rules applied: 2024 syllabus; plates for real objects and code for diagrams; no people, hands or faces; one main question; one reasoning stage at a time; every step said in words before its symbols; plain meanings before terms (principal, interest, simple interest); a short "why this matters"; worked examples with a short task, the formula and grouped givens; a graphing app as a coded, unbranded window; two attempts with "Pause here to answer." and 10 s countdowns with the full worded question on screen; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a gap-year fund, speakers for a band, savings); money spoken naturally; Australian spelling; no em dashes; conversational narration.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Investment and loans (Standard 2) and Investment (Standard 1)), quoted from `../../programme/maths-standard-route-inputs-2.json` (text form; the official MathML is in `sourceHtml`):

Standard 2:
- `cif2fdb59a`: "Calculate simple interest for different rates and time periods using the formula I = Prn where I = simple interest, P = principal, r = interest rate per time period and n = number of time periods"
- `ciddd3a836`: "Solve problems involving simple interest in a variety of contexts"
- `ci04f3e92c`: "Compare simple interest graphs for different interest rates and time periods, with and without using digital tools"

Standard 1:
- `ci9ef22098`: "Calculate simple interest for different interest rates and time periods using the formula I = Prn where I = simple interest, P = principal, r = interest rate per time period and n = number of time periods"
- `ci74c61185`: "Solve problems involving simple interest in a variety of contexts"
- `ci32753eab`: "Compare simple interest graphs for different interest rates and time periods, with and without using digital tools"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6 (Standard 1)

**Boundary:** starts from a13's final frame exactly (the coin jar `maths/ma12-coin-jar-v1.png` as a 300 px badge beside small empty coded axes, "balance ($)" up in teal and "years" across in blue; a strip of four grey strand thumbnails across the top with "Algebraic relationships: done"; the grey chip "the same amount added each year: what shape?"; chips "Next: simple interest" and "?"). a08's right panel carries the same jar, axes and grey chip, so Standard 1 viewers recognise it; the strip fades on the first sentence. Recalls Year 11 (a percentage of an amount; 4% = 0.04; substituting into a formula; a linear model: the gradient is a rate of change, the intercept a starting value) in a phrase or grey chip. Teaches: simple interest as interest worked out on the principal only and paid out, so every year earns the same dollars; I = Prn with r a decimal per period and n in the same periods; the total A = P + I; finding the principal from I, r and n by working out one year's interest first (the same idea finds r or n); the graph of the total against time as a straight line starting at P and rising Pr a year; comparing graphs: a higher rate is steeper from the same start, a larger principal starts higher (and is steeper too), a longer time runs further along the same line; the same comparison in a graphing app with a rate slider. Stops at simple interest. Not taught: compound interest (i02a), the simple against compound comparison (i05).

## Decisions

- **Anchor: a gap-year fund with its interest paid into the jar (reused painted plate, live).** $5,000 at 4% p.a. simple interest for 3 years (the site's card 05 numbers): $200 a year drops into the jar while the account stays at $5,000; $600 in all; total $5,600. A gap year is a near goal for a Year 12 student, and "interest paid out" is the plain reason the interest never grows (pack decision; simple interest products are uncommon, so the paid-out framing makes it real). Plate reused (root ruling 7): `ma12-coin-jar-v1.png` (viewed 18 Nov 2026: a glass jar with a metal screw lid, a shallow layer of gold and silver coins, true alpha), the anchor of a08's and a13's final frames. The account is a coded card with a balance bar. No people.
- **Worked examples: the site's `we-1` and `we-2`.** `we-1` ($8,000 at 7.5% for 5 years) is set on studio speakers for a band (pack anchor 3, said as "new studio speakers" rather than "a PA system" so the plate matches; Revision 2, review finding 4): I = $3,000, total $11,000; it shows simple interest on a loan and carries Trap 01 (7.5 for 0.075). `we-2` ($450 over 3 years at 5%) carries "find the principal". Plate reused: `ma11-studio-speakers-v1.png` (viewed: a pair of black studio monitor speakers, front view, true alpha).
- **Notation.** I = Prn on screen as the syllabus writes it; the total is introduced in words ("principal plus interest") before "A = P + I" (the site's letter; the syllabus names only I, P, r and n; pack decision). "p.a." is said once as "per year".
- **Join.** Scene 1 opens on a13's final frame exactly; on the first sentence the thumbnail strip and the "Next" chip fade, and the jar moves to the right of a new coded account card.
- **Simulations (standard item 3).**
  1. **Paid-out interest stacks** (scenes 2, 6; new `InterestStack`, paid-out mode): a violet balance bar "$5,000" stays the same height while each year's teal stack "$200" drops from the bar into the jar; a year counter ticks 1, 2, 3; the jar's coded total climbs $200, $400, $600.
  2. **Stacks to points** (scene 6): each year's stack slides onto the empty axes from the opening frame, sitting on top of the $5,000 bar, and its top becomes a point; the four points line up and a blue line draws through them.
  3. **Three lines by hand** (scene 7; `StudioPlot`): from short tables, the 4% line, a 6% line from the same start and an $8,000 line at 4%, each drawn as its table fills; then a dot runs along the 4% line from t = 3 to t = 5.
  4. **Rate slider in an app** (scene 7; `ScreenApp` explorer mode in a coded, unbranded window, `ParameterSlider` on r): the line pivots about (0, 5 000) as r slides 2% → 8%; the readout "gradient = Pr = $… a year" updates (100, 200, 300, 400).
- **Colour roles (fixed for i01 to i05).** Principal P (and PV) **violet**; rate r (and the multiplier in i02a) **amber**; interest I **teal**; the simple-interest total line **blue**; n in ink; answer **green**; mistake **red**, crossed slips only; Standard 2 rows grey.
- **Large type, handwritten voice.** As a04b. Current working 52 px, rows 44 px, chips 30 to 40 px; nothing below 26 px; all text above y = 950. Hand tags: "paid out", "same $200 every year", "on the principal only", "r as a decimal", "r and n: same units", "one year first", "check", "starts at P", "rises Pr a year", "steeper: higher rate", "starts higher", "further along", "pivots on P", "4.2% = 0.042", "1% first", "same answer" (Revision 2). At most two live at once.
- **Stage changes (standard item 2).** a13's frame, the jar and the account (1); paid-out stacks (2); the formula strip with tagged letters (3); g01 board, the speakers (4); g01 board, find the principal (5); stacks to points to a line (6); three lines, then the app (7); framed card (8); question cards (9 to 12); the jar tipping back into the account for i02a (13); key notes (14).
- **Worked examples (g01 layout).** 4: task strip "A band borrows $8000 for studio speakers at 7.5% p.a. simple interest over 5 years. Find the total repaid."; formula strip "I = Prn"; givens card "P = $8000" (violet), "r = 7.5% = 0.075" (amber), "n = 5 years"; rows; framed answer "$11 000"; crossed slip "8000 × 7.5 × 5 = 300 000" (caption "7.5% is 0.075"). 5: task strip "An investment earns $450 interest over 3 years at 5% p.a. simple interest. Find the principal."; givens card "I = $450" (teal), "r = 5% = 0.05" (amber), "n = 3 years"; rows "one year: 450 ÷ 3 = $150", "5% of P = 150", "1% of P = 30", "100% of P = $3000" (framed; Revision 2), "P = 150 ÷ 0.05 = $3000" (framed); check row; grey "Standard 2" row "P = I ÷ (rn) = 450 ÷ 0.15 = 3000", unspoken.
- **Memory aid.** Framed card: "Same interest every year: I = Prn." Key line: "Total = P + I. Graph: a straight line from P, rising Pr a year. r as a decimal; r and n in the same time units."
- **Visual surprise.** The year stacks slide onto the axes and their tops line up into a straight line by themselves (scene 6); in the app, the line swings about the fixed point P as the rate slides (scene 7).
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` section 5).** No numerical error in lesson05. The graph comparison (`ci04f3e92c`, `ci32753eab`) is one sentence on the site (logged gap); scene 7 teaches it from the site's own $5,000 at 4%, with original comparison lines. The retired lesson01 is not used. Drill 2 (b)'s buy now pay later item belongs to i12.
- **Plain meanings at first use.** Interest ("what the bank pays you for keeping your money, or what a lender charges you for borrowing"); principal ("the amount you start with, or borrow"); simple interest ("interest worked out on the principal only, the same every year"); per annum, p.a. ("per year"); gradient ("how steeply the line rises: dollars a year here").
- **Attempts.** A1 (pack question 1): $4,500 at 4.2% p.a. simple interest for 3 years, interest paid out: $567; total $5,067; crossed "4500 × 4.2 × 3 = 56 700" (caption "4.2% is 0.042"). A2 (pack question 2, parts (a) and (b); part (c) left out to keep the feedback under 30 s): $2,000 at 5% (A) and 8% (B) for 4 years: $2,400 and $2,640; B is steeper; its gradient is $160 a year, the interest each year; crossed "B's line starts higher" (caption "both start at $2000; B is steeper").
- **Mistake scene:** none separate. 7.5 for 0.075 (4 crossed) and 4.2 for 0.042 (A1 crossed); a rate per year with n in months (3, said); the interest given as the total or the reverse (3, 4, said; key notes); drawing the line from the origin (6, said); the steeper line read as the larger principal (7, said; A2 crossed).
- **Cause chain taught, in order:** (1) the interest is paid out, so the balance stays at the principal, so every year's interest is the same percentage of the same amount (2); (2) n equal years of P × r dollars make I = Prn, with r written out of a hundred as a decimal (3); (3) the total is what you started with plus what it earned, A = P + I (3, 4); (4) one year's interest is I ÷ n, and that is r of the principal, so dividing by r finds P (5); (5) equal yearly steps from a starting value P make a straight line whose steepness is the yearly interest Pr (6); (6) so a higher rate or a larger principal makes Pr bigger (steeper), a larger principal also starts higher, and a longer time only moves further along the same line (7).
- **Entry knowledge (route):** Year 11 Standard m01 (a percentage of an amount; 6% = 0.06), f01 (substitution), l03 (gradient as a rate of change, intercept as a starting value); a13 (Standard 2) or a08 (Standard 1) for the opening frame. Recalled in a phrase or grey chip.
- **Standard 1 path.** Everything is spoken for both courses: the formula is used by substitution, and finding P goes "one year first", which is division, not rearranging. The rearranged formula is a grey row tagged "Standard 2", unspoken. The graph comparison is drawn from short tables; the app is a classroom tool.
- **Money sources (root ruling 32).** Rates in the video are examples (4%, 6%, 7.5%, 4.2%, 5%, 8%), said once to change (scene 1: "Rates change all the time"). For the design record: the RBA cash rate is 4.85% from 3 November 2026 (RBA, Statement on Monetary Policy, November 2026, https://www.rba.gov.au/publications/smp/2026/nov/overview.html, read 18 Nov 2026 by the pack); top 12-month term deposits are about 5.5% to 5.7% p.a. (money.com.au, https://www.money.com.au/term-deposit-rates, updated 5 Nov 2026). The site's 4% and 7.5% are realistic, if slightly low for a 2026 deposit; kept as the site's numbers.
- **Handoff (to math-s12-i02a, "How does compound interest earn interest on interest?").** Scene 13, specified precisely in `../checks/root-decisions-maths-s12-i01-i11.md`: left, the coded account card "savings account" with its violet balance bar "$5,000"; right, the coin jar `ma12-coin-jar-v1.png` (300 px) tipping, with a teal stack "$200" sliding along a curved teal arrow back into the account, the bar's label rewriting to "$5,200?"; under the bar the amber chip "next year: 4% of $5,200 = ?"; chips "Next: compound interest" and "?". No answer for the second year. This is i02a's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Gap fund: 5000 + 200n: 5000, 5200, 5400, 5600, 5800, 6000 (n = 0 to 5); I(3) = 600.
  (b) Comparison lines: 5000 at 6%: 5000, 5300, 5600, 5900, 6200, 6500; 8000 at 4%: 8000, 8320, 8640, 8960, 9280, 9600; gradients 200, 300, 320; at t = 10 (Revision 2 window): 7000, 8000, 11 200.
  (c) Slider (5 years): 2% 5500, 4% 6000, 6% 6500, 8% 7000; gradients 100, 200, 300, 400.
  (d) `we-1`: 8000 × 0.075 × 5 = 3000; total 11 000; slip 8000 × 7.5 × 5 = 300 000. `we-2`: 450 ÷ 3 = 150; 150 ÷ 0.05 = 3000; check 3000 × 0.05 × 3 = 450.
  (e) Pronunciations: "I equals P r n"; "zero point zero seven five"; "zero point zero four two"; "five thousand and sixty-seven dollars".
  (f) Windows: gap fund t 0 to 5 years, $0 to $7,000 (a broken vertical axis from $0 to $4,000 is not used; the axis starts at $0 so the intercept at $5,000 is honest); comparison t 0 to 10, $0 to $12,000 (Revision 2; Revision 1 used t 0 to 5, $0 to $10,000); zoom columns $4,800 to $5,400 (scene 2) and $4,800 to $5,800 (scene 6); A2 none (the card has no picture).

Main question: *$5,000 earns 4% simple interest, paid out each year. How does simple interest grow, and what does its graph look like?*
Entry knowledge (Year 11 Standard m01, f01, l03): percentages as decimals; substitution; a linear model.
Stops after: I = Prn, A = P + I, finding P, the straight-line graph and comparing graphs. No compounding.
Handoff: math-s12-i02a: "tip the $200 back in: is next year's interest 4% of $5,200?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): P violet; r amber; I teal; total line blue; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the coin jar's question
> Last time ended with a coin jar, and a question. If the same amount is added every year, what shape does the balance make? Here's a real version. You've saved five thousand dollars for a gap year, and you put it in an account paying four per cent per year, simple interest. Interest is what the bank pays you for keeping your money there. With simple interest, the bank pays it out to you, say into this jar, so the account stays at five **thousand**. Rates change all the time, so four per cent is just an example. So how does simple interest grow, and what does its graph look **like**?

Visual: opens on a13's final frame exactly (the coin jar, the small empty axes, the grey chip "the same amount added each year: what shape?", chips). On the first sentence the thumbnail strip and the "Next" chip fade. On "five thousand dollars for a gap year" a coded account card (760 × 300 px) slides in at the left: "savings account", a violet balance bar labelled "$5,000"; on "four per cent per year" an amber tag "4% p.a. = 4% per year". On "pays it out" a teal arrow curves from the card to the jar, hand tag "paid out". On "thousand" the bar pulses, hand tag "stays at $5,000". On "just an example" a grey chip "rates change: 4% is an example". On "like" heading "Simple interest" writes on, and the question chip "What shape?" moves to the top right.

### 2. the same interest every year
> Four per cent of five thousand is two hundred dollars. So at the end of year one, two hundred dollars drops into the jar, and the account is still five thousand. In year two, the interest is four per cent of five thousand **again**, another two hundred. And in year three, another two **hundred**. The amount you start with is called the principal. Simple interest is always worked out on the principal only. The interest never earns interest itself, because it's paid out. So after three years, you've earned three lots of two hundred, six hundred dollars, and you have five thousand six hundred dollars in **total**.

Visual: stage change: the account card at the left (violet bar "$5,000", 600 px tall), the jar at the right (500 px), a year counter "year 0" between them (44 px). Row at the top, 44 px: "4% of $5,000 = 0.04 × 5000 = $200" (0.04 amber, 5000 violet, 200 teal). On "drops into the jar" (simulation 1) the counter ticks "year 1", a teal stack "$200" lifts off the top of the bar and drops into the jar; the jar's coded total "$200". On "again" the counter "year 2", the same row rings, a second equal stack drops, jar "$400", hand tag "same $200 every year". On "hundred" (bold) "year 3", a third stack, jar "$600". Zoom column (Revision 2, root's decision 2; the shared part in "Studio kit use and additions"): from "drops into the jar", to the right of the bar, band $4,800 to $5,400 at 0.8 px a dollar (480 px), grey dashed line at $5,000 labelled "P = $5,000". Each year the $200 block appears above the dashed line at 160 px, labelled "$200" beside it at 36 px, then lifts off towards the jar, and the column's bar top returns to the dashed line. On the full bar each stack also carries its "$200" label beside it at 36 px, not inside it. On "principal" a violet label "P: principal" on the bar; on "principal only" hand tag "on the principal only". On "total" rows, 44 px: "interest: 3 × $200 = $600" (teal), "total: $5,000 + $600 = $5,600" (framed green).

### 3. the formula
> That pattern is a formula. The interest, I, is the principal, P, times the rate per period, r, here per year, times the number of periods, n, here years. I equals P r n. The rate goes in as a **decimal**. Per cent means out of a hundred, so four per cent is zero point zero four. So I equals five thousand, times zero point zero four, times three, which is six hundred **dollars**. The total is the principal plus the interest. Some books call it A, so A equals P plus **I**. One more thing. r and n must match. A rate per year needs n counted in **years**.

Visual: stage change: the formula strip, 64 px, centre: "I = P × r × n" then "I = Prn" (P violet, r amber, n ink, I teal), each letter dropping a 36 px tag below it as spoken: "interest", "principal", "rate per period", "number of periods". On "decimal" an amber chip "4% = 4 ÷ 100 = 0.04", hand tag "r as a decimal". Rows, 52 px: "I = 5000 × 0.04 × 3"; on "dollars" "= $600" (framed green), the jar badge (220 px) at the right showing "$600". On "I" (bold) row "A = P + I = 5000 + 600 = $5,600" (framed green), with a grey chip "A: the total (principal + interest)". On "years" a strip, 40 px: "4% per year → n in years" with a grey crossed example "4% per year, n = 36 months" (grey, crossed), hand tag "r and n: same units".

### 4. worked example: speakers on a loan
> Simple interest works for loans too. A band borrows eight thousand dollars for new studio speakers, at seven point five per cent per year simple interest, over five years. Find the total they repay. P is eight thousand. r is seven point five per cent, zero point zero seven **five**. And n is five years. So I equals eight thousand, times zero point zero seven five, times five, which is three thousand **dollars**. The total repaid is eight thousand plus three thousand, eleven thousand dollars. Putting in seven point five instead of zero point zero seven five is the **slip**. That would make the interest three hundred thousand dollars.

Visual: clear change to the g01 board, the speakers plate `ma11-studio-speakers-v1.png` (900 px wide) at the top right with a coded tag "$8,000 loan". Task strip, 44 px: "A band borrows $8000 for studio speakers at 7.5% p.a. simple interest over 5 years. Find the total repaid." (site `we-1`). Formula strip, 52 px: "I = Prn". Givens card, 44 px: "P = $8000" (violet), "r = 7.5% p.a." (amber), "n = 5 years". On "five" (first bold) the givens card's rate line extends "= 0.075". Rows, 52 px: "I = 8000 × 0.075 × 5"; on "dollars" "= $3000" (teal); "total = 8000 + 3000"; framed answer (green) "$11 000 repaid". On "slip" a red slip "8000 × 7.5 × 5 = 300 000" writes and is crossed (caption "7.5% is 0.075").

### 5. find the principal
> Sometimes you know the interest, and need the principal. An investment earns four hundred and fifty dollars over three years, at five per cent per year simple interest. What was the principal? Think about one year first. Four hundred and fifty dollars over three years is a hundred and fifty dollars a **year**. And that hundred and fifty is five per cent of the principal. If five per cent is a hundred and fifty, then one per cent is thirty, and a hundred per cent, the whole principal, is three thousand **dollars**. That's the same as a hundred and fifty divided by zero point zero five. Always check it. Three thousand, times zero point zero five, times three, is four hundred and fifty. The same idea finds the rate, or the number of years, when they're the missing **one**.

Visual: clear change to the g01 board. Task strip, 44 px: "An investment earns $450 interest over 3 years at 5% p.a. simple interest. Find the principal." (site `we-2`). Givens card, 44 px: "I = $450" (teal), "r = 5% = 0.05" (amber), "n = 3 years", "P = ?" (violet). On "one year first" hand tag "one year first"; three equal teal blocks "$150" split from a "$450" bar. On "year" (bold) row, 52 px: "one year: 450 ÷ 3 = $150". On "five per cent of the principal" row "5% of P = $150" (P violet). On "one per cent is thirty" row "1% of P = 150 ÷ 5 = $30", hand tag "1% first". On "dollars" row "100% of P = 30 × 100 = $3000" (framed green). On "the same as" a row beside it in ink "150 ÷ 0.05 = 3000", hand tag "same answer" (Revision 2, review finding 1). On "check" row "3000 × 0.05 × 3 = $450 ✓", hand tag "check". Beside the rows, a grey row tagged "Standard 2", 32 px, not spoken: "P = I ÷ (rn) = 450 ÷ 0.15 = 3000". On "one" a small grey card, 32 px: "missing r: one year's interest ÷ P · missing n: total interest ÷ one year's interest".

### 6. the graph: a straight line
> Back to the gap-year fund. Plot the total, principal plus interest, against the years. Year zero, five thousand. Then five thousand two hundred, five thousand four hundred, five thousand six hundred. Each year adds the same two hundred, so the points line up in a straight **line**. It starts at the principal, five thousand, not at zero. And it rises two hundred dollars a year, which is P times r, one year's interest. So the steepness of the line, its gradient, is the interest earned each **year**.

Visual: stage change: the opening frame's empty axes grow to 1,250 × 700 px (t 0 to 5 years, "total ($)" $0 to $7,000, gridlines every $1,000); the violet bar "$5,000" stands at t = 0. On "Year zero" (simulation 2) the point (0, 5 000) rings violet. On "five thousand two hundred" a teal $200 stack sits on a $5,000 bar at t = 1 and its top becomes a point; then t = 2 and t = 3 the same. On "line" a blue line draws through the four points and on to t = 5 (6 000), hand tag "starts at P". On "not at zero" a grey dashed line from the origin is drawn and crossed in grey; then the zoom column (the same part as scene 2) opens to the right of the graph: band $4,800 to $5,800 for t = 0 to 3 at 0.4 px a dollar (400 px), grey dashed line at $5,000 labelled "P = $5,000", the four bars with their teal $200 stacks (80 px each) and their tops as points, one above the next. On "P times r" a step triangle in the zoom column at t = 1 to 2: "+$200 = Pr = 5000 × 0.04" (teal), hand tag "rises Pr a year"; the same small triangle rings on the full graph. On "year" (bold) chip "gradient = $200 a year (the yearly interest)".

### 7. comparing graphs
> So how do the graphs compare? Keep five thousand dollars, but at six per cent instead of four. That's three hundred a year, so the line starts in the same place, but it's **steeper**. Now eight thousand dollars at four per cent. That's three hundred and twenty a year, so it starts higher, and it's steeper **too**. And a longer time just runs further along the same line. Three years reaches five thousand six hundred, and five years reaches six **thousand**. In a graphing app, slide the rate, and the line swings around its starting point, getting steeper as the rate **rises**.

Visual: camera continue (axes widen to t 0 to 10 years and $0 to $12,000, gridlines every $2,000; Revision 2, review finding 2, so the 4%, 6% and $8,000 lines rise about 117, 175 and 187 px). A small table at the left, 40 px, fills as each line is spoken. On "six per cent" a table "5000 at 6%: 5000, 5300, 5600, 5900" and a second blue line (darker) from (0, 5 000); on "steeper" its step triangle "+$300" rings, hand tag "steeper: higher rate". On "eight thousand dollars" a table "8000 at 4%: 8000, 8320, 8640, 8960" and a third line from (0, 8 000) ringed violet; on "too" hand tags "starts higher" and "+$320 a year". Each line carries its end value at t = 10 in a 32 px label: "$7,000" (4%), "$8,000" (6%), "$11,200" ($8,000 at 4%). On "further along" a dot runs along the 4% line from t = 3 to t = 5; on "thousand" points (3, 5 600) and (5, 6 000) ring green, hand tag "further along". On "graphing app" (simulation 4) the axes move into a coded, unbranded app window (1,300 × 720 px) with a slider "r" (amber) and a readout "gradient = Pr = $200 a year"; on "rises" the slider runs 2% → 8%, the line pivots about (0, 5 000), the readout 100 → 400, hand tag "pivots on P".

### 8. memory aid
> Here's the summary. With simple interest, every year earns the same amount, P times r, because it's always worked out on the principal. So I equals P r n. And the graph of the total is a straight line, starting at P, and rising P r each **year**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the jar receiving three equal teal stacks beside a straight blue line from a violet start. Main line, hand font 56 px: "Same interest every year: I = Prn." On "year" the key line, 40 px: "Total = P + I. Graph: a straight line from P, rising Pr a year. r as a decimal; r and n in the same time units." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Four thousand five hundred dollars goes into an account paying four point two per cent per year simple interest, and the interest is paid out each year. How much interest is earned over three years? And what's the total of the principal and interest after three years? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "$4500 is put into an account that pays 4.2% p.a. simple interest. The interest is paid out at the end of each year. (a) How much interest is earned over 3 years? (b) What is the total of the principal and interest after 3 years?" Picture slot: the coin jar plate (300 px) beside an empty coded account card "$4,500". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Four point two per cent is zero point zero four two. So I equals four thousand five hundred, times zero point zero four two, times three, which is five hundred and sixty-seven **dollars**. The total is four thousand five hundred plus five hundred and sixty-seven, five thousand and sixty-seven **dollars**. Using four point two is the slip. That gives fifty-six thousand seven **hundred**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "r = 4.2% = 0.042" (amber), hand tag "4.2% = 0.042"; "I = 4500 × 0.042 × 3"; on "dollars" (first) "= $567" (framed green). On "dollars" (second) "total = 4500 + 567 = $5067" (framed green). On "hundred" a red slip "4500 × 4.2 × 3 = 56 700" writes and is crossed (caption "4.2% is 0.042"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Two investments of two thousand dollars earn simple interest, A at five per cent per year, and B at eight per cent per year. Find the value of each after four years. Their values are graphed against time. Which line is steeper, and what does its gradient mean? Pause here to answer.

Visual: `QuestionCard`, 40 px: "Two investments of $2000 earn simple interest: A at 5% p.a. and B at 8% p.a. (a) Find the value of each after 4 years. (b) Their values are graphed against time. Which line is steeper, and what does its gradient mean?" Picture slot: empty coded axes (t 0 to 5 years, value $0 to $3,000). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> A earns a hundred dollars a year, so after four years it's worth two thousand four **hundred**. B earns a hundred and sixty a year, so it's worth two thousand six hundred and **forty**. B's line is steeper. Its gradient is a hundred and sixty dollars a year, the interest it earns each **year**. Saying B's line starts higher is the slip. Both start at two **thousand**.

Visual: the card shrinks to the top. Rows, 44 px: "A: 2000 × 0.05 = $100 a year"; on "hundred" "2000 + 4 × 100 = $2400" (framed green). "B: 2000 × 0.08 = $160 a year"; on "forty" "2000 + 4 × 160 = $2640" (framed green). The two blue lines draw from (0, 2 000), B darker; on "year" B's step triangle "+$160" rings, chip "B steeper: gradient $160 a year = yearly interest" (framed green). On "thousand" a red slip "B's line starts higher" writes and is crossed (caption "both start at $2000; B is steeper"). Hold about 1 s.

### 13. handoff
> With simple interest, the jar fills by the same amount every year. But what if you didn't take the interest out? Tip the two hundred dollars back into the account, so next year the bank works out four per cent of five thousand two **hundred**. Would next year's interest still be two hundred dollars? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s12-i01-i11.md`): on "the jar fills" the coded account card "savings account" (violet bar "$5,000") at the left and the coin jar `ma12-coin-jar-v1.png` (300 px) at the right. On "Tip the two hundred dollars back" the jar tilts and a teal stack "$200" slides along a curved teal arrow into the account; the bar grows and its label rewrites to "$5,200?". On "hundred" (bold) the amber chip under the bar "next year: 4% of $5,200 = ?". On "next" chips "Next: compound interest" and "?". Hold about 2 s. No answer for the second year. This is i02a's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Simple interest: on the principal only, the same each period.
- I = Prn (r as a decimal; r and n in the same time units).
- Total A = P + I.
- Missing P: one period's interest ÷ r (then check).
- Graph: a straight line from P; gradient Pr. Higher rate: steeper.

Memory aid (framed card, right side, as in scene 8): *Same interest every year: I = Prn.* Key: *Total = P + I. Graph: a straight line from P, rising Pr a year. r as a decimal; r and n in the same time units.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and i02a's opening frame.

## Teaching checks

- **Does it explain causes?** Why the interest is the same every year: it is paid out, so the balance stays at P (2). Why I = Prn: n equal amounts of P × r (3). Why r is a decimal: per cent means out of a hundred (3). Why dividing works for P: one year's interest is r of P (5). Why the graph is a straight line from P: equal steps of Pr from a start of P (6). Why a larger principal is also steeper: Pr grows with P (7).
- **Misconceptions addressed:** 7.5 for 7.5% and 4.2 for 4.2% (4, A1 crossed); r per year with n in months (3); interest against total (3, 4); the line from the origin (6); the steeper line read as the larger principal (7; A2 crossed).
- **Visual standard, item by item:** 1 the jar and the account from the first frame, the speakers in 4; 2 a new stage every 40 to 60 s; 3 paid-out stacks dropping while the balance holds, stacks becoming points on a line, three lines from tables, a rate slider pivoting the line; 4 fixed roles (P violet, r amber, I teal); 5 large type; 6 hand tags; 7 g01 boards in 4 and 5 with framed answers and a crossed slip; 8 framed card and five bullets; 9 the stacks lining up into a straight line.
- **One idea at a time:** the same interest (2), the formula (3), a loan (4), the principal (5), the graph (6), comparing graphs (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 27 s.
- **Avoided double teaching:** Year 11 percentages and linear models recalled in a chip; compound interest left to i02a.
- **Standard 1 path:** substitution only; "one year first" for the principal; the rearranged formula is grey and unspoken.
- **Syllabus coverage:** `cif2fdb59a` and `ci9ef22098` (2, 3, 4, A1; key notes 1 to 3); `ciddd3a836` and `ci74c61185` (4, 5, A1; key note 4); `ci04f3e92c` and `ci32753eab` (6, 7, A2; key note 5).
- **Out of scope by design:** compound interest (i02a); simple against compound (i05).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** "$4500 is put into an account that pays 4.2% p.a. simple interest. The interest is paid out at the end of each year. (a) How much interest is earned over 3 years? (b) What is the total of the principal and interest after 3 years?"
Model answer: (a) I = 4500 × 0.042 × 3 = $567. (b) 4500 + 567 = $5067. Classic mistake (crossed): "4500 × 4.2 × 3 = 56 700".

**Attempt 2 (scene 11; pack question 2 (a) and (b), 3 marks suggested).** "Two investments of $2000 earn simple interest: A at 5% p.a. and B at 8% p.a. (a) Find the value of each after 4 years. (b) Their values are graphed against time. Which line is steeper, and what does its gradient mean?"
Model answer: (a) A: 2000 + 2000 × 0.05 × 4 = $2400; B: 2000 + 2000 × 0.08 × 4 = $2640. (b) B's line; its gradient is $160 a year, the interest B earns each year (A's is $100 a year). Both lines start at $2000. Classic mistake (crossed): "B's line starts higher".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Gap fund | 0.04 × 5000 = 200 a year; 5000, 5200, 5400, 5600 (6000 at 5 years); I = 600; A = 5600 | 1, 2, 3, 6, 7, 13 |
| Comparison | 5000 at 6%: 5000, 5300, 5600, 5900 (+300); 8000 at 4%: 8000, 8320, 8640, 8960 (+320); at t = 10: 7000, 8000, 11 200 | 7 |
| Slider | gradients 100, 200, 300, 400 at 2%, 4%, 6%, 8% | 7 |
| `we-1` | 8000 × 0.075 × 5 = 3000; 11 000; slip 300 000 | 4 |
| `we-2` | 450 ÷ 3 = 150; 150 ÷ 5 = 30 (1%); 30 × 100 = 3000; 150 ÷ 0.05 = 3000; check 450; grey 450 ÷ 0.15 = 3000 | 5 |
| A1 | 4500 × 0.042 × 3 = 567; 5067; slip 56 700 | 9, 10 |
| A2 | 100 and 160 a year; 2400 and 2640 | 11, 12 |
| Handoff | 5000 + 200 = 5200; no second-year interest shown | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); Codex to re-check.

- 5000 × 0.04 = 200; 5000 + 200n at n = 0 to 5: 5000, 5200, 5400, 5600, 5800, 6000; 5000 × 0.04 × 3 = 600.
- 5000 + 300n: 5000, 5300, 5600, 5900; 8000 + 320n: 8000, 8320, 8640, 8960; at n = 10: 5000 + 200 × 10 = 7000, 5000 + 300 × 10 = 8000, 8000 + 320 × 10 = 11 200; 5000 × r at 2%, 4%, 6%, 8%: 100, 200, 300, 400.
- 8000 × 0.075 × 5 = 3000; 8000 × 7.5 × 5 = 300 000; 450/3 = 150; 150/5 = 30; 30 × 100 = 3000; 150/0.05 = 3000; 3000 × 0.05 × 3 = 450; 450/0.15 = 3000.
- 4500 × 0.042 × 3 = 567; 4500 + 567 = 5067; 4500 × 4.2 × 3 = 56 700.
- 2000 + 2000 × 0.05 × 4 = 2400; 2000 + 2000 × 0.08 × 4 = 2640; 2000 × 0.08 = 160.

## Memory aid check

- **"Same interest every year: I = Prn."** with key line **"Total = P + I. Graph: a straight line from P, rising Pr a year. r as a decimal; r and n in the same time units."** Original (the site's card 05 has "the same dollar amount is added every period" and "slope Pr and y-intercept P"). Meaning, as said in scene 8: simple interest is r of the principal for every period, so n periods earn Prn and the total grows by equal steps of Pr from P. Assumptions checked: "every year" stands for every period (the key line's "same time units"); r is the rate per period written as a decimal (scene 3); the principal is not changed during the term (interest paid out; scene 2); the graph is of the total A, not of I (I alone would start at 0, so the card says "Total"). It helps a new case: $1,000 at 3% for 4 years earns $30 a year, $120 in all, and its graph rises $30 a year from $1,000. Introduced after scenes 2 to 7.
- **Considered, not used:** "P, r, n: multiply all three" (drops the graph and the reason).

## Narration length estimate

Revision 2, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12i/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632). The count, per-scene figures and timing are given in the decisions file's length table and below.

**6,132 characters** (Revision 1: 5,977), 14 scene headings. Characters per scene (1 to 14): 580, 606, 541, 628, 768, 494, 565, 242, 301, 377, 292, 354, 309, 75.

At 13.3 characters per second the speech is about 461 s. Total with the holds and settling below **about 552 s (9 min 12 s)**, 18 s under the 570 s cap; speech and holds before the notes about 507 s (Revision 2 adds about 2 s of settling for the zoom columns).

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the stacks (2), the stacks to points (6), the three lines and the slider (7) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 1's "Interest is what the bank pays you for keeping your money there." must stay (plain meaning); scene 5's last sentence (the grey card carries it); scene 4's "That would make the interest three hundred thousand dollars." (the crossed slip carries it).

## Scene list and build ids

Lesson key `m-s12i01` (route math-s12-i01). Explainer folder `src/explainer/lessons/math-s12-i01`; build inputs in `docs/production/claude-pm/lessons/math-s12-i01/` (at voicing).

In order (14 scene headings): hook-coin-jar, same-interest-each-year, formula-iprn, worked-speakers-loan, find-the-principal, graph-straight-line, compare-graphs, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | a13's frame; the jar and the account |
| 45 to 95 s | 2 | Paid-out stacks |
| 95 to 145 s | 3 | The formula strip |
| 145 to 195 s | 4 | g01 board: the speakers loan |
| 195 to 250 s | 5 | g01 board: find the principal |
| 250 to 295 s | 6 | Stacks to points to a straight line |
| 295 to 350 s | 7 | Three lines, then the app slider |
| 350 to 370 s | 8 | Framed memory card |
| 370 to 465 s | 9 to 12 | Question cards and countdowns, then feedback |
| 465 to 490 s | 13 | The jar tipping back, for i02a |
| 490 to 535 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: a13's last frame continues into 1; 1 to 2 stage change; 2 to 3 stage change (formula strip); 3 to 4 clear change to the board; 4 to 5 clear change; 5 to 6 stage change (the axes grow); 6 to 7 camera continue; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i01-learning-review.md`, `science_check` = `checks/m-s12-i01-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, viewed): `ma12-coin-jar-v1.png` (a glass jar with a metal screw lid and a shallow layer of gold and silver coins, true alpha; reused, the anchor and a13's and a08's final frames); `ma12-coin-jar-full-v1.png` (the same jar filled to the shoulder; kept for i02a); `ma11-studio-speakers-v1.png` (a pair of black studio monitor speakers, front view, true alpha; reused for `we-1`); `ma12-calculator-v1.png` (not needed; every calculation here is short).

Need: none new. Reused: `ma12-coin-jar-v1.png`, `ma11-studio-speakers-v1.png`.

Coded: the account card and balance bar, the interest stacks, the year counter, the formula strip and tags, the boards, every graph, table and the app window with its slider, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot`, `ParameterSlider`, `LiveReadoutBoard`, `ScreenApp` (explorer mode in a coded window, not the phone), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i01):
1. **InterestStack** (new, shared with i02a, i02b and i05): a balance bar with yearly interest blocks; paid-out mode drops each block (P × r) into a jar plate and keeps the bar at P; left-in mode (i02a) adds each block to the bar. Check: three paid-out blocks of $200 leave the bar at $5,000 and the jar at $600.
2. **Stacks to points** (small, lesson folder): each block's top becomes a `StudioPlot` point at its year. Check: the points are (0, 5000), (1, 5200), (2, 5400), (3, 5600).
3. **Zoom column** (new `InterestStack` part, Revision 2, root's decision 2; one shared part, described in the same words in i01, i02a, i03 and i05): a coded side column standing immediately to the right of the stack, bar or graph it magnifies, headed "zoomed in" in the hand font at 36 px, with a thin grey bracket joining it to the band it shows. It is about 340 px wide for up to three blocks and widens to at most 760 px for more. Inside, the band from a stated lower value to a stated upper value is redrawn on its own scale, at most 520 px tall; when the band does not start at $0, each block's base carries the usual zigzag break. Blocks stand side by side in their colour roles, each labelled beside or above it at 30 to 36 px, and a grey dashed reference line marks a stated level, its value labelled at 30 px. Every interest block or sliver in the column is at least 40 px tall. The full stack keeps its honest $0 base beside the column, so the column adds detail without changing the true picture. Check: in i02a scene 2, the band $90 to $112 at 16 px a dollar shows the $5 and $10.25 olive parts at 80 px and 164 px above the dashed $100 line. Uses here: scene 2 (band $4,800 to $5,400) and scene 6 (band $4,800 to $5,800, beside the graph).

## Codex asset brief

No new plate. Both plates exist and were viewed. The account card, jar total and app window are coded (unbranded).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the six syllabus quotes match the route-inputs JSON exactly (Standard 1's "different interest rates"), with the Standard 1 and Standard 2 labels correct.
3. Confirm the site's `we-1` and `we-2` numbers are used unchanged, and that "rates change" is said once.
4. Confirm every rate is substituted as a decimal except in the crossed slips, and that r and n are in the same units.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on a13's final frame (and matches a08's right panel), and scene 13 matches the decisions file's i01 to i02a join with no second-year interest shown.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Simple Interest: I = Prn and Its Graph | Year 12 Maths Standard

(Title length: 63 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson05.sa.html

$5,000 saved for a gap year earns 4% a year simple interest, paid out into a jar. Why is the interest the same every year, and what shape does the balance make? Learn I = Prn with the rate as a decimal, the total A = P + I, how to find the principal by working out one year's interest first, and why the graph of the total is a straight line that starts at P and rises Pr a year. Compare graphs for different rates, principals and times, by hand and in a graphing app. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates change; the rates here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans (Standard 2) and Investment (Standard 1). For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Calculate simple interest for different rates and time periods using the formula I = Prn where I = simple interest, P = principal, r = interest rate per time period and n = number of time periods"
"Solve problems involving simple interest in a variety of contexts"
"Compare simple interest graphs for different interest rates and time periods, with and without using digital tools"
Syllabus content, Standard 1:
"Calculate simple interest for different interest rates and time periods using the formula I = Prn where I = simple interest, P = principal, r = interest rate per time period and n = number of time periods"
"Solve problems involving simple interest in a variety of contexts"
"Compare simple interest graphs for different interest rates and time periods, with and without using digital tools"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6 (Standard 1)

Builds on: Inverse Variation Models (Standard 2) or Linear Models in Context (Standard 1). Next: Compound Interest: Future Value.

#Year12Maths #MathsStandard #SimpleInterest #HSCScience

## Open decisions

- **1. "Builds on" titles (root).** The description's "Builds on" line names a13 and a08 by short titles; replace with their published titles when a13 and a08 are titled.
- **2. Speakers for `we-1` (learning review).** Closed in Revision 2: the review asked for "studio speakers", now said and shown. Revision 1 text: The site says only "a loan"; the pack proposed a PA system. The reused plate is a pair of studio speakers, so the narration says "new speakers". Confirm the plate reads as a band's gear, not home audio.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-i01-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A. Revision 1 note: Next: student learning review (trace from a13 and from a08; check that "paid out" makes the equal interest feel obvious before the formula, that the one-year route finds P without algebra for Standard 1, that the stacks becoming a line lands the shape, that "larger principal is also steeper" is not confusing beside "higher rate is steeper", that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs `InterestStack` before this video.
