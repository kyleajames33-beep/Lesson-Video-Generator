# Maths A12 F10: How do rate and repayment changes alter a loan term? Where an extra repayment goes, a digital tool and a given graph, the interest-only line, and why rate rises hurt more than equal falls help (design)

Status: Revision 2 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing. Previously Revision 1 (2 Nov). Not voiced (no `math-a12-f10/` folder and no `measured/lesson.json`), so narration is rewritten freely where the anchor needs it. Nothing recorded; human listening pending.

Narration 5,821 characters (sum of the 14 scene strings), 14 scene headings, about 521 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: second video of the Year 12 Mathematics Advanced financial mathematics strand (course outline playlist order 47), after f09 (the reducing-balance loan period by period) and before f11 (finding repayments, balances, term and total paid). Templates: `math-a12-i05.md` and `math-a12-d10.md` (via `math-a12-f04.md`): same section structure, voice, paper style and coded maths visuals; no painted plates, no people, no bank names or logos. No brief 151 pack and no route-inputs-3 entry exist for f10 (checked 2 Nov); pack work done here. Site lessons read (2 Nov, read-only): `financial-mathematics/lesson14.sa.html`, SHA256 `a22f05d9e4353b62c69482228823dc9bbd67c702574fa97accd089c6a71c35f0` (hook, card 01, card 04 table and "why early payments matter", Problem 1, Q1); `lesson12.sa.html` (SHA256 `3421ed0f7375f5753005a8531ddf98df46232122ee5381f7af4ae11bd48deffa`; card 05 and traps); `lesson13.sa.html` (SHA256 `827aaa5b52f4c4ea8ba4e775b82d6cc65c1527e46206f23721a396dbfca7a479`; odd-one-out B "if M ≤ Pr, the loan can never be repaid"; trap 02 doubling). Every number recalculated in Python with exact fractions for the money and a row-by-row recurrence for the terms. Course outline entry: `math-a12-f10` (one content point, site source lesson 14).

Owner rules applied: as f01 to f09 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; money exact to the cent, with every rounding stated; tool and graph readings marked as estimates; attempt cards give nothing away; opens on f09's handoff frame; f09's recurrence used, not re-taught).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Financial mathematics, Reducing balance loans; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci9cb798c5`: "Examine the effect of varying the interest rate and repayment amount on the time taken to repay a loan, with or without digital tools or by using a given graph"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

**Boundary:** starts from f09's last frame (scene 15 of `math-a12-f09.md`: a `LoanBalanceGraph` with the $400,000 curve at $2,147.29 a month from $400,000 to $0 at 30 years, labelled "$2,147.29 a month: 30 years", a dashed grey ghost "$2,500 a month?" that stops partway with "?" on the time axis, chips "Next: pay more, or pay a higher rate?" and "?"); shows where an extra repayment goes (all to the debt) and why it snowballs; runs the recurrence in an unbranded digital tool to find the term at $2,500 (265 repayments, the last $540.57); reads terms for four repayments from a given balance graph; explains the interest-only repayment M = Pr and the steep rise in term near it, on a given term-against-repayment graph; varies the rate at a fixed repayment (4%, 5%, 6%, 7%) and shows a rise costs more years than an equal fall saves; shows a rate rise that makes the old repayment smaller than the interest. Stops at the effect on the term, read from a tool or a graph. Not taught: the formula for n with logarithms, the repayment formula and the total paid (f11); offset and redraw accounts (site lesson 14 cards 04 Problem 2 and 05; not a 2024 Advanced point); interest saved as a calculation (f11's total paid makes it possible).

## Decisions

### Revision 2 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a home loan on a mortgage calculator (painted plates, live).** f09 hands over the site's $400,000 home loan, so the anchor is that loan as a buyer meets it: the painted house (`phys-y11-house-v1.png`, reused) and a painted laptop (`y11-laptop-blank-v1.png`, reused) whose blank screen holds a coded, unbranded mortgage calculator: loan, rate, a monthly repayment slider and a live "paid off in" readout. The calculator is the syllabus's "digital tool", so the anchor and the point are the same object. The extra-repayment slider moving the payoff date is the hook's answer (scene 3) and returns for the rate (scene 6) and the never-repaid case (scene 7). Distinct from every context in `checks/root-decisions-maths-redesign.md`; f08's town used the house plate as small sprites for population, a different meaning.
- **Idealising assumptions (author notes, not learner copy).** (i) Fixed rate for the life of the loan, unless a scene changes it from the start (scenes 6, 7: each rate is a separate loan from month 1, not a mid-loan change). (ii) No fees, offset or redraw. (iii) The calculator runs f09's recurrence row by row and reports whole repayments plus the smaller final one; its "paid off in" readout is years and months of repayments. (iv) Graph readings are estimates.
- **Simulations (standard item 3).**
  1. **The mortgage calculator** (scenes 1, 3, 6, 7; main simulation): `ScreenApp` (new) places a coded calculator on the laptop plate's measured screen rectangle. A repayment `ParameterSlider` drives the shared money engine; the readouts (52 px) "paid off in", "repayments" and "final repayment" update live, and a small balance curve on the screen redraws. In scene 3 the slider moves from $2,147.29 to $2,500 and the payoff date runs from "30 years 0 months" down to "22 years 1 month"; in scene 6 a rate slider steps 4%, 5%, 6%, 7% at $2,500; in scene 7 the rate slider reaches 6.5% at $2,147.29 and the readout turns to "never: interest > repayment".
  2. **Splits and curves** (scenes 2, 4, 5): `RepaymentSplit` compare (interest amber, debt paid off teal; the extra glows teal), four balance curves racing to $0, and the term-against-repayment curve climbing as it nears the interest-only line, each with readouts.
- **Visual surprise (standard item 9).** The slider moves only $352.71, and the payoff date drops by 7 years 11 months (scene 3); then equal $500 steps buy less and less time, and near the interest-only line the term curve shoots upward (scenes 4, 5).
- **Colour roles (fixed for f09 to f15).** Balance ink; interest amber (including the interest-only line, now dashed amber, not red); repayments teal; answer green; mistake red, crossed slips only; targets and reference lines dashed ink; time grey ink. The never-repaid overflow (scene 7) is amber hatching with a hand tag, not red.
- **Join with f09 (both designs edited together).** Scene 1 opens on f09 Revision 2's final frame exactly: the reused house at the left of the home-loan graph, the ink $2,147.29 curve to $0 at 30 years, the dashed "$2,500 a month?" ghost ending in "?", chips "Next: pay more, or pay a higher rate?" and "?". The laptop plate slides in during the first sentence.
- **Join with f11 (changed; both designs edited together).** The handoff moves to f11's new anchor: a used motorbike bought with site lesson 13 card 05's loan ($20,000 at 7.2% p.a. compounded monthly, $400 a month). Final frame: the painted motorbike `ma12-motorbike-v1.png` and swing tag `ma12-swing-tag-v1.png` (both briefed in f11), the tag's coded lines, a dashed ink balance curve from $20,000 ending in "?", chips "n = ?", "Next: find the term exactly" and "?". Revision 1's $250,000 handoff is dropped (f11 now uses it as A1).
- **Large type, hand tags, stage changes.** Type as listed under "Script and shots". `HandTag`: "+$352.71: all to the debt", "same interest", "8 years sooner", "each $500 buys less time", "interest-only: never falls", "only M above the interest pays it down", "rise: +4.9 years", "fall: −2.9 years", "never repaid", "estimate". At most two live. Stages, each change within 30 to 70 s: house, graph and calculator (1); split bars (2); the calculator's slider run (3); four racing curves (4); the term curve (5); the calculator's rate slider (6); the never-repaid graph (7); the framed memory card (8); question cards with pictures (9 to 12); the motorbike handoff (13); key notes (14).
- **Worked steps and feedback (g01 layout, standard item 7).** Scene 2's split is a short worked step (givens card "P = $400,000", "r = 1/240", "M = $2,147.29 or $2,500"); scene 7 frames "repays only if M > Pr" in green. Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip.
- **Question cards.** Full text at 40 px plus a picture: A1 shows a coded mini statement strip "Loan $200,000 · 6% p.a., monthly · $1,000 a month" over a flat dashed balance outline with "?" (no interest value); A2's given graph is its picture.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Only what's left after the interest pays the loan down." with a keyed mini bar (amber "interest", teal "what's left") and the laptop icon. Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Narration (not voiced).** Scene 1 adds the calculator sentence; scene 3 names the mortgage calculator as the tool and gives the payoff date; scene 13 is rewritten for the motorbike handoff. All other scenes keep their Revision 1 text.

### Revision 1 decisions (kept where not overridden above)

- **Learner question kept (outline).** "How do rate and repayment changes alter a loan term?" The answer, built in order: every dollar above the old repayment goes straight to the debt, because the interest charged this month is fixed by the balance (2); the lower balance then means less interest every later month, so the saving snowballs, and a tool running the recurrence shows $2,500 clears the loan in about 22 years (3); a given graph shows that each extra $500 saves fewer years (4); the cause is the interest-only repayment Pr: only the part of M above the interest pays the debt down, so near Pr the term is huge and far above it extra money buys little time (5); a higher rate raises the interest, leaving less of the same repayment for the debt, and the effect grows as Pr approaches M (6); if the rate rises far enough, the repayment no longer covers the interest and the loan is never repaid (7).
- **The hook (site lesson 14 hook and card 01, numbers unchanged).** $400,000 at 5% p.a. compounded monthly; 30-year repayment $2,147.29; pay $2,500 instead (an extra $352.71; site "$353"). The site's three-way prediction (less than 1 year, 2 to 5 years, more than 5 years) with a 3 s hold after "Make a guess."; answered in scene 3 (about 22 years, so about 8 years sooner; site "22.0 years", "saves 8 years", confirmed: 264.2 months by formula, 265 repayments with the last $540.57).
- **Digital tool (point: "with or without digital tools").** `ToolPanel` (i12; plain, unbranded) in table mode: one rule row "next balance = balance × (1 + 0.05/12) − 2500", filled down; the visible rows jump (1, 2, 3, ⋮, 263, 264, 265) and the 265th shows the balance due $540.57, less than $2,500, so it is the final, smaller repayment. Terms for the other repayments are tool readouts in grey: $3,000 gives 196 repayments (16.3 years), $3,500 gives 156 (13.0 years). The narration says "a spreadsheet or a calculator" (no product names).
- **Given graph (point: "by using a given graph").** Two given graphs: (a) `LoanBalanceGraph` with four curves ($2,147.29, $2,500, $3,000, $3,500), read where each meets $0 (about 30, 22, 16 and 13 years); (b) `LoanTermCurve` (new): term in years against monthly repayment, for 5% (and 6% in scene 6), with a vertical dashed line at the interest-only repayment $1,666.67. A2 asks the student to read graph (b).
- **Interest-only repayment (site lesson 13 odd-one-out B; cause made explicit).** At 5% the first month's interest on $400,000 is $1,666.67 (exact 1,666.666…, rounded to the cent): a repayment equal to it leaves the balance at $400,000 for ever; less makes it grow (one row: $1,500 gives $400,166.67 after a month). Terms near it: $1,700 about 79 years, $1,800 about 52 years, $2,000 about 36 years (grey readouts on the curve). "Only the part above the interest pays the debt down" is the memory aid.
- **Rate at a fixed repayment (original; site Q1 and Problem 1 are the same skill).** $400,000, M = $2,500: 4% about 19.1 years; 5% about 22.0; 6% about 26.9; 7% about 38.8. One point down saves about 2.9 years; one point up adds about 4.9 years, two points up add about 16.8 years. Cause: the interest-only line moves up ($1,333.33, $1,666.67, $2,000, $2,333.33) towards the $2,500 repayment, so less is left for the debt each month, and the term grows faster and faster.
- **Never repaid after a rate rise (original; necessary condition in learner copy).** Paying the 30-year repayment $2,147.29: at 6% the term stretches to about 44.8 years; at 6.5% the first month's interest is $2,166.67, more than the repayment, so the balance grows and the loan is never repaid. This states M > Pr as a condition, not a caveat (omitting it would teach that every repayment eventually clears a loan).
- **Attempts (original).** (A1) "A loan of $200,000 has interest at 6% p.a., compounded monthly. The borrower repays $1,000 per month. Explain why the loan is never repaid." Model: monthly interest 200 000 × 0.005 = $1,000 equals the repayment, so the balance stays at $200,000 every month. Crossed: "200 months" (200 000 ÷ 1000, interest ignored). (A2) "The graph shows the time taken to repay a $400,000 loan at 5% p.a., compounded monthly, for different monthly repayments. Use the graph to estimate the monthly repayment needed to repay the loan in 15 years." Graph given on the card (the 5% `LoanTermCurve` alone, gridlines every $100 and every year; no markers, no 15-year line). Model: read across from 15 years to the curve and down: about $3,160 (exact $3,163.17, grey). Crossed: "about $4,300" (double the 30-year repayment: halving the term does not double the repayment). A1's card shows only the givens and demand; A2's card shows the given graph and demand.
- **Mistake scene:** none separate. "A small extra repayment saves a little time" (hook, 3); "the extra repayment reduces this month's interest" (2; site quick-check option A); "each extra $500 saves the same time" (4); "any repayment eventually clears a loan" (5, 7; A1); "a rate rise and an equal fall change the term by the same amount" (6); "halving the term doubles the repayment" (A2 crossed; site lesson 13 trap 02); "ignore the interest: P ÷ M" (A1 crossed; site lesson 13 trap 01's simple average).
- **Memory aid (original).** "Only what's left after the interest pays the loan down." See "Memory aid check".
- **Handoff (to f11, "How do we find repayments, balances, term and total paid?").** Scene 13 sums up in one sentence, then shows a fresh `LoanBalanceGraph`: "$250,000; 6% p.a., compounded monthly", a dashed curve from $250,000 to "$0 after 20 years", a chip "M = ?" on the curve, chips "Next: find the repayment exactly" and "?". No formula, no repayment value. Scene 14 returns to this frame silently; it is f11's opening frame.
- **Site sources used:** lesson 14 hook, card 01, card 04 table (terms 22.0, 16.3, 13.0 years confirmed) and "why early payments matter" (the snowball cause); lesson 13 odd-one-out B (M ≤ Pr) and trap 02 (doubling); lesson 12 trap 02 (lower repayment, longer term). Not used: lesson 14's offset account and redraw cards (not a 2024 Advanced point), its interest-saved column (f11 can compute totals), Problem 1's $500,000 loan and SA Q1 (same skill as scene 3), the n formula (f11).
- **Site errors (new, lesson 14; for root to log).** (1) Card 04 Problem 1: "n = 1.1306/0.004324 ≈ 261.5 months". Recalculated n = 261.42 months (−ln(1 − 500 000 × 0.0043̅/3200)/ln(1.0043̅)); "≈ 21.8 years" is still right. Minor. (2) SA Q1 gives the minimum repayment for $300,000 at 5.4% over 30 years as "$1,687"; recalculated $1,684.59. Minor; the question's later parts do not depend on it. (3) Card 04's "Interest saved = M_old · n_old − M_new · n_new" uses a non-whole n_new and ignores the smaller final payment; it gives an estimate only. Correction: label it an estimate, or use the total actually paid (whole repayments plus the final part payment). (4) Card 04 and 05 present offset and redraw accounts as lesson content under this syllabus point; they are not in the 2024 Advanced content (route note, not an error in mathematics). Lesson 12 and 13 errors are logged in f09 and f11.
- **Cause chain taught, in order:** (1) this month's interest is fixed by this month's balance, so an extra repayment all goes to the debt (2); (2) a lower balance means less interest every later month, so the saving grows each month (2, 3); (3) only the part of M above the interest pays the debt down; at M = Pr the balance never falls (5); (4) near Pr a little extra makes a big change to the term; far above it, little (4, 5); (5) a higher rate raises the interest, leaving less of M for the debt, and the term grows faster as Pr approaches M (6); (6) if Pr passes M, the balance grows and the loan is never repaid (7).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f10`; playlist order 47; main learner question "How do rate and repayment changes alter a loan term?"; syllabus action `ci9cb798c5`.
  - Entry knowledge: f09 (Aₙ₊₁ = (1 + r)Aₙ − M, interest first, the balance table and curve, rate per period); Year 11 reading values from graphs.
  - Start boundary: "Open on f09's $400,000 balance curve at $2,147.29 (30 years) with the dashed '$2,500 a month?' ghost; predict how much sooner it is repaid."
  - Stop boundary: "Where an extra repayment goes; a digital tool running the recurrence to find a term (265 repayments, final $540.57); terms read from a given balance graph and a given term-against-repayment graph; the interest-only repayment Pr and M > Pr; rate changes at a fixed repayment and their unequal effects; a rate rise that makes a loan unrepayable. No n formula, repayment formula or total paid; no offset or redraw."
  - Next handoff: "math-a12-f11: a $250,000 loan at 6% p.a. compounded monthly, a dashed curve to $0 after 20 years with 'M = ?'; ask how to find the repayment exactly."
  - Prerequisite videos: math-a12-f09.
- **Learner-visible vocabulary (plain meaning at first use):** term (the time taken to repay a loan, 1); minimum repayment (named only as "the 30-year repayment", 1); interest-only repayment (a repayment that only covers the interest, so the balance never falls, 5); digital tool (a spreadsheet or calculator running the rule, 3).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **split compare** (`RepaymentSplit` `compareRepayments`: two bars with the same amber interest part and teal parts of different length; the extra piece glows); **tool fill** (`ToolPanel` table mode: the rule types once, then rows fill down quickly with a jump to the last rows); **curve race** (`LoanBalanceGraph` with four curves drawing together, each stopping at $0 with an end marker); **term curve** (`LoanTermCurve`, new: term against repayment with a vertical interest-only line, readout markers and a second rate curve); **interest line rising** (scene 6: the interest-only marker slides up the repayment axis as the rate rises); **never repaid** (`LoanBalanceGraph` `neverRepaid`: a curve that turns upward with an arrow off the edge); `Chip` with `cross`, `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).
- **Board layout (constant):** heading top-left; the graph, tool or bars on the left two-thirds; givens chip (with units) at the top of the right column, readouts below it, current line bright and earlier lines dim.
- **No human figures, no painted plates, no bank names or logos, no product names for tools.**
- **Author notes (not learner copy):**
  (a) $400,000 at 5% p.a. monthly: r = 1/240; Pr = 1 666.666… (shown $1,666.67). 30-year repayment 2 147.2865… shown $2,147.29.
  (b) Month 1 at $2,147.29: interest 1 666.67, debt paid off 480.62; at $2,500: interest 1 666.67, debt paid off 833.33 (833.333…); extra 352.71 all to the debt. Month 2: at $2,147.29 interest 1 664.66, debt paid off 482.63; at $2,500 interest 1 663.19, debt paid off 836.81.
  (c) Terms by row-by-row recurrence (repayments, final part payment): $2,147.29: 360 (final 2 144.37); $2,500: 265 (final 540.57); $3,000: 196 (final 85.48); $3,500: 156 (final 1 799.45). By formula n = ln(M/(M − Pr))/ln(1 + r): 360.0, 264.22, 195.03, 155.51 months = 30.0, 22.02, 16.25, 12.96 years. Years shown in grey to one decimal: 30, 22.0, 16.3, 13.0. Savings: 2 500 → 3 000 saves 5.8 years (22.0 − 16.3, formula 5.77); 3 000 → 3 500 saves 3.3 years (formula 3.29).
  (d) Interest-only and near it (5%): $1,500 gives 400 166.67 after one month; $1,700: 78.8 years; $1,800: 52.2 years; $2,000: 35.9 years.
  (e) Rates at M = 2 500: 4% (Pr 1 333.33) 229.02 months = 19.09 years; 5% 22.02; 6% (Pr 2 000) 322.69 months = 26.89 years; 7% (Pr 2 333.33) 465.59 months = 38.80 years. Down one point: −2.93 years; up one: +4.87; up two: +16.78.
  (f) M = 2 147.29: 6%: 537.3 months = 44.77 years; 6.25%: 56.4 years (not shown); 6.5%: Pr = 2 166.666… > 2 147.29, never repaid; balance after one month at 6.5%: 400 000 × (1 + 0.065/12) − 2 147.29 = 400 019.38 (grey).
  (g) A1: 200 000 × 0.06/12 = 1 000 exactly. A2: 15-year repayment 3 163.1745… shown $3,163.17; 30-year 2 147.29 × 2 = 4 294.58 ("about $4,300").
  (h) Graph windows. Scene 4: time 0 to 31 years, balance $0 to $420,000. Scenes 5 and A2: repayment $1,500 to $4,500 (ticks every $500, minor every $100), term 0 to 40 years (ticks every 5, minor every year); curve drawn from M = $1,700 (79 years, clipped with an arrow above 40) to $4,500 (about 9.3 years; formula 111.3 months, grey only if shown). Scene 6: second curve for 6% (interest-only line $2,000).
  (i) Pronunciations: "two thousand one hundred and forty-seven dollars twenty-nine"; "five hundred and forty dollars fifty-seven"; "one thousand six hundred and sixty-six dollars sixty-seven".

Main question: *If you pay more each month, or the interest rate changes, how much does the time to repay a loan change, and why isn't the change even?*
Entry knowledge (f09; Year 11 graph reading): the loan recurrence, interest first, rate per period.
Stops after: terms from a tool and from given graphs, the interest-only line, rate effects. No n or M formulas.
Handoff: math-a12-f11: $250,000 at 6% over 20 years, "M = ?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

Colour roles (Revision 2, fixed for f09 to f15): balance owed **ink**; interest **amber** (interest parts, the dashed interest-only line, "×(1 + r)"); repayments **teal** (repayment bars, the debt-paid-off part); targets and reference lines **dashed ink**; time grey ink; tool and graph readings marked "≈"; answer **green**; mistake **red**, crossed slips only. Type (standard item 5): current line and live readouts 52 px; task strip, equation strip and givens 44 px; earlier lines 30 to 32 px and dimmed; calculator screen text at least 36 px (the screen is shown at about 1,000 px wide); axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; key-note bullets 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (house and laptop, bars, graph or card) is solid from its first frame. Header strip "MATHEMATICS ADVANCED · FINANCIAL MATHEMATICS"; scene headings in the hand font, 44 px.

### 1. hook (how much sooner?)
> Here's a home loan of four hundred thousand dollars at five per cent a year, compounded monthly. Repaying two thousand one hundred and forty-seven dollars twenty-nine a month clears it in thirty years. That time is called the term. A mortgage calculator shows it straight away. Now suppose you pay two thousand five hundred dollars a month instead. That's about three hundred and fifty dollars more. How much sooner is the loan gone? Less than a year, two to five years, or more than five years? Make a **guess**.

Visual: opens on f09's last frame exactly (f09 Revision 2 scene 15: the reused house `phys-y11-house-v1.png` at the left, the `LoanBalanceGraph` with the ink $2,147.29 curve to $0 at 30 years labelled "$2,147.29 a month: 30 years", the dashed grey ghost "$2,500 a month?" ending in "?", chips "Next: pay more, or pay a higher rate?" and "?"). Heading writes on: "How do rate and repayment changes alter a loan term?" as the chips fade. Givens card in the right column (44 px): "$400,000; 5% p.a., compounded monthly". On "term" a bracket along the time axis from 0 to 30 years, "term: 30 years". On "mortgage calculator" the graph slides right to about 760 px and the painted laptop `y11-laptop-blank-v1.png` (reused; about 900 px wide, solid) slides in at the centre left, the house shrinking beside it; on its screen `ScreenApp` draws a plain, unbranded calculator (40 px): "Loan $400,000", "Rate 5% p.a., monthly", "Repayment $2,147.29" with a teal slider, and the readout (52 px) "Paid off in: 30 years 0 months". On "about three hundred and fifty dollars more" a grey chip "+$352.71 a month". On "guess" (bold) a three-way chip "< 1 year / 2 to 5 years / > 5 years" and a 3 s prediction ring (no number); the chip stays to scene 3.

### 2. where the extra goes
> Look at the first month. The interest is charged on the four hundred thousand you owe, so it's one thousand six hundred and sixty-six dollars sixty-seven either way, rounded to the cent. Paying more can't change this month's interest. So every extra dollar goes straight to the debt. At the thirty-year repayment, the debt falls by four hundred and eighty dollars sixty-two. At two thousand five hundred, it falls by eight hundred and thirty-three dollars thirty-three, nearly twice as much. And it doesn't stop there. The lower balance means less interest next month, and every month after, so even more of each repayment goes to the **debt**.

Visual: stage change to `RepaymentSplit` in `compareRepayments` mode (author note b), two bars about 1,100 px long: "$2,147.29" and "$2,500.00", each with the same amber interest part "$1,666.67" (hand tag "same interest"). The laptop stays as a 300 px thumbnail at the top left, its readout still "30 years 0 months". On "straight to the debt" the extra $352.71 piece of the second bar glows teal, hand tag "+$352.71: all to the debt". Teal labels (52 px) "$480.62" and, on "eight hundred and thirty-three", "$833.33". On "less interest next month" a second pair of bars slides in below (month 2: amber "$1,664.66" and teal "$482.63"; amber "$1,663.19" and teal "$836.81"), the second amber part visibly shorter. On "debt" (bold) a loop writes under the bars (40 px): "lower balance → less interest → more to the debt".

### 3. running it on the calculator
> To see the whole loan, let a digital tool do the months. A mortgage calculator, or a spreadsheet, runs the recurrence row after row: multiply by one plus r, then subtract the repayment. Slide the repayment up to two thousand five hundred, and the balance reaches zero at the two hundred and sixty-fifth repayment. That last one only needs five hundred and forty dollars fifty-seven. That's twenty-two years and one month, so the loan is gone about eight years **sooner**. So the answer to the guess is more than five years. That last repayment is smaller because, by then, what's owed plus its interest is less than a full repayment.

Visual: stage change: the laptop fills the centre (about 1,300 px wide, solid), its calculator screen live (simulation 1). A small rule row on the screen (36 px): "next balance = balance × (1 + 0.05/12) − repayment". On "Slide the repayment up" the teal slider runs from $2,147.29 to $2,500.00 over about 2 s; the "Paid off in" readout (52 px) counts down live from "30 years 0 months" to "22 years 1 month", the screen's small ink balance curve redraws shorter, and a dashed ghost of the 30-year curve stays behind it. Beside the laptop a `BalanceTable` panel (32 px) shows the run: rows 1, 2, 3 ($399,166.67; $398,329.86; $397,489.57), "⋮", rows 263, 264 ($3,025.72; $538.32), then row 265 glows: "due $540.57: final repayment" (author note c). On "sooner" (bold) the hook's chip returns and "> 5 years" is ringed green; hand tag "about 8 years sooner". On "That last repayment" row 264's "$538.32" links by an amber arc "× (1 + r)" to "$540.57", which sits below a dashed ink "$2,500" level (grey "less than a full repayment").

### 4. reading a given graph
> Here's a graph made the same way, for four different repayments. Each curve ends where its balance reaches zero, so you can read each term off the time axis. Thirty years, about twenty-two, about sixteen, and about thirteen. Each step up is another five hundred dollars a month. But the first five hundred saves almost six years, and the next saves only about three. Paying more always shortens the term, but each extra dollar buys less time than the one **before**.

Visual: stage change to a large `LoanBalanceGraph` (about 1,200 × 680 px; author notes c, h) with four curves drawing together from $400,000: $2,147.29 (ink), $2,500, $3,000 and $3,500 (ink at 80, 60 and 45 per cent strength, each labelled, all solid). Each stops at $0 with an end marker and a dashed drop line to the time axis; readouts (44 px) "30", "≈ 22.0", "≈ 16.3", "≈ 13.0" years arrive on the spoken numbers. On "Each step up" teal chips "+$500" link the $2,500, $3,000 and $3,500 curves. On "the first five hundred" a bracket on the time axis "≈ 5.8 years saved"; on "only about three" "≈ 3.3 years saved". On "before" (bold) the two brackets pulse side by side, hand tag "each $500 buys less time".

### 5. the interest-only line
> Why do the savings shrink? Only the part of a repayment above the interest pays the debt down. The first month's interest here is one thousand six hundred and sixty-six dollars sixty-seven. If that's all you pay, the balance stays at four hundred thousand for ever. That's called an interest-only repayment. Pay any less, and the balance grows. Now plot the term against the repayment. Just above the interest-only line, a small extra amount makes a huge difference, from about seventy-nine years at seventeen hundred dollars to about thirty-six at two thousand. Far above it, the curve flattens, and extra money buys only a little **time**.

Visual: stage change to `LoanTermCurve` (about 1,200 × 680 px; author notes d, h): x-axis "monthly repayment ($)", y-axis "term (years)", axes and gridlines solid from the first frame. On "interest" a dashed amber vertical line at $1,666.67 labelled "interest-only: $1,666.67". On "stays at four hundred thousand" a small inset `LoanBalanceGraph` (about 380 px) shows a flat ink line at $400,000, hand tag "interest-only: never falls"; on "grows" a second inset line at $1,500 rises (grey "after 1 month: $400,166.67"). The term curve then draws from the right edge leftwards, climbing steeply as it nears the amber line; a marker rides it with a live readout (52 px) "repayment" and "term"; markers on the cue words: "$1,700: ≈ 79 years" (arrow, clipped above 40), "$2,000: ≈ 36 years". On "flattens" the right part of the curve gains the four scene 4 points ($2,147.29, $2,500, $3,000, $3,500). On "time" (bold) hand tag "only M above the interest pays it down".

### 6. changing the rate
> Now keep the repayment at two thousand five hundred and change the interest rate. At five per cent, it takes about twenty-two years. At four per cent, about nineteen. At six per cent, about twenty-seven, and at seven per cent, nearly thirty-nine. So a rate rise of one point adds about five years, but a fall of one point saves only about three. Here's why. A higher rate raises the interest-only line, so less of the same repayment is left for the debt. And the closer that line gets to your repayment, the faster the term **grows**.

Visual: stage change back to the laptop calculator (simulation 1), now with an amber rate slider under the repayment slider (fixed at $2,500.00). Beside the laptop, a vertical repayment axis with a teal mark at $2,500 and the dashed amber interest-only mark. As each rate is spoken the rate slider steps (5%, 4%, 6%, 7%), the "Paid off in" readout updates (52 px): "22 years 1 month", "19 years 2 months", "26 years 11 months", "38 years 10 months" (grey "≈ 22.0", "≈ 19.1", "≈ 26.9", "≈ 38.8"; author note e), the amber mark slides up the axis ($1,666.67, $1,333.33, $2,000.00, $2,333.33) and a teal bracket "M − interest" between it and $2,500 shrinks ($833.33, $1,166.67, $500.00, $166.67). On "rise of one point" hand tag "rise: +4.9 years"; on "fall of one point" "fall: −2.9 years". On "grows" (bold) the four readouts plot as points on a small term-against-rate inset (about 420 px), curving upward.

### 7. when a rate rise stops the loan
> This matters most for someone paying the thirty-year repayment. If the rate rises to six per cent and they keep paying two thousand one hundred and forty-seven dollars twenty-nine, the term stretches to almost forty-five years. At six and a half per cent, the first month's interest is two thousand one hundred and sixty-six dollars sixty-seven. That's more than the repayment, so the balance grows, and the loan is never repaid. A loan only shrinks when the repayment is more than the interest on the **balance**.

Visual: camera continue on the calculator: the repayment slider returns to $2,147.29; the rate slider steps to 6% and the readout shows "44 years 10 months" (grey "≈ 44.8 years"), the screen's curve sagging far lower. On "six and a half" the rate slider steps to 6.5% and the readout turns to "Paid off in: never" (52 px), hand tag "never repaid". Beside the laptop a `RepaymentSplit` bar where the amber interest part "$2,166.67" runs past the end of the "$2,147.29" bar (the overrun hatched amber, tag "interest > repayment"), and a `LoanBalanceGraph` inset (about 520 px) shows the 6.5% balance line rising slowly from $400,000 with an arrow off the right edge (grey "after 1 month: $400,019.38"). On "balance" (bold) the rule writes in a green frame (52 px): "repays only if M > Pr (the interest on the balance)".

### 8. memory aid
> Here's the idea in one line. Only what's left after the interest pays the loan **down**. A bigger repayment leaves more. A higher rate leaves less. And if nothing's left, the loan never shrinks.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"), the laptop icon at its left edge. The main line writes large, 60 px: "Only what's left after the interest pays the loan down." Under it a keyed mini `RepaymentSplit` bar (about 800 px): amber "interest", teal "what's left". On "down" (bold) the teal part pulses. On "bigger repayment" the bar lengthens and the teal part with it; on "higher rate" the amber part lengthens and the teal shrinks; on "nothing's left" the teal part vanishes and the bar is all amber. Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A loan of two hundred thousand dollars has interest at six per cent a year, compounded monthly. The borrower repays one thousand dollars a month. Explain why the loan is never repaid. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A loan of $200,000 has interest at 6% p.a., compounded monthly. The borrower repays $1,000 per month. Explain why the loan is never repaid." The full question stays on screen. Picture slot (about 420 × 260 px): a coded mini statement strip "Loan $200,000 · 6% p.a., monthly · $1,000 a month" over an empty balance outline with "?" (no interest value, no line). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no monthly rate, no interest value, no graph line).

### 10. feedback 1 (brief)
> The monthly rate is half a per cent, so the first month's interest is half a per cent of two hundred thousand, which is one thousand dollars. That's the whole repayment. None of it reduces the debt, so the balance is still two hundred thousand next month, and the same thing happens every **month**. Two hundred months is wrong. Dividing the loan by the repayment ignores the **interest**.

Visual: the card shrinks to the top (30 px). `GivensStrip` (44 px): "P = $200,000", "r = 0.06 ÷ 12 = 0.005", "M = $1,000" ("6% p.a., compounded monthly", "$200,000" and "$1,000 per month" underlined as used). Row (52 px) "interest = 200 000 × 0.005 = $1,000 = M". A `RepaymentSplit` bar all amber, teal part "$0". On "month" (bold) the picture's outline fills with a flat ink line at $200,000 and the row "A₁ = A₂ = … = $200,000" in a green frame. On "interest" (bold) a red slip "200 000 ÷ 1000 = 200 months" writes and is crossed, red hand caption "interest ignored: P ÷ M". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. The graph shows the time taken to repay a four hundred thousand dollar loan at five per cent a year, compounded monthly, for different monthly repayments. Use the graph to estimate the monthly repayment needed to repay the loan in fifteen years. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The graph shows the time taken to repay a $400,000 loan at 5% p.a., compounded monthly, for different monthly repayments. Use the graph to estimate the monthly repayment needed to repay the loan in 15 years." The picture is the given graph (about 760 × 520 px, beside the text): the 5% `LoanTermCurve` alone (author note h), gridlines every $100 and every year, axis labels only; no markers, no interest-only label, no 15-year line. The full question and graph stay on screen. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> Find fifteen years on the term axis, go across to the curve, then down to the repayment axis. It's about three thousand one hundred and sixty dollars a month. Doubling the thirty-year repayment, to about four thousand three hundred, is wrong. Halving the term doesn't double the repayment, because the shorter loan pays much less **interest**.

Visual: the card shrinks to the top; the graph grows to about 1,000 px. `GivensStrip`: "$400,000", "5% p.a., monthly", "term 15 years" ("15 years" and "estimate the monthly repayment" underlined). On "fifteen years" a dashed ink line runs across from 15 years to the curve; on "down" a dashed drop to the repayment axis; readout "≈ $3,160 a month" in a green frame (52 px), with grey "(exact: $3,163.17)". On "interest" (bold) a red slip "2 × $2,147.29 ≈ $4,300" writes and is crossed, red hand caption "half the term ≠ double the repayment"; the curve's point at $4,300 shows "≈ 9.8 years" in grey. Hold about 1 s.

### 13. handoff
> So paying more shortens a loan, and a higher rate lengthens it, but never evenly, because only the part above the interest pays the debt down. Calculators and graphs find terms for you. But how do you find one exactly, by hand? Here's a used motorbike, bought with a loan of twenty thousand dollars at seven point two per cent a year, compounded monthly. The repayments are four hundred dollars a month. How many will it **take**?

Visual: the memory card shows small at the top, then fades on "Calculators and graphs". Board clears to the new anchor: the painted used motorbike `ma12-motorbike-v1.png` (about 700 px wide, solid) at the left, with the painted swing tag `ma12-swing-tag-v1.png` (about 360 px tall) hanging beside it, its coded lines (40 px) writing on with the spoken givens: "Loan $20,000", "7.2% p.a., monthly", "$400 a month". At the right, a `LoanBalanceGraph` frame (about 760 × 520 px, axes "months" and "balance owed") with a dashed ink curve falling from $20,000 and ending in "?" on the time axis. On "take" (bold) chips "n = ?", "Next: find the term exactly" and "?". No term, no formula and no logarithm. Hold about 2 s. This is f11's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- An extra repayment goes straight to the debt.
- Only M above this month's interest pays the loan down.
- If M ≤ Pr, the loan is never repaid.
- Paying more shortens the term, but by less each time.
- A rate rise adds more time than an equal fall saves.

Memory aid (framed card, right half of the notes screen, as in scene 8): *Only what's left after the interest pays the loan down.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (1 s) to scene 13's frame exactly (the motorbike, the swing tag with its three lines, the dashed curve from $20,000 ending in "?", the chips "n = ?", "Next: find the term exactly" and "?"). This is the final frame and f11's opening frame.

## Teaching checks

- **Does it explain causes?** Why the extra all goes to the debt: this month's interest is fixed by this month's balance (2). Why the saving snowballs: a lower balance lowers every later interest charge (2, 3). Why the savings shrink: only M above the interest pays the debt down, so near Pr extra money changes a lot, far above it little (4, 5). Why a rate rise hurts more than a fall helps: the interest-only line moves towards the repayment (6). Why a loan can become unrepayable: interest above the repayment makes the balance grow (7).
- **Misconceptions addressed:** a small extra saves little (hook, 3); extra reduces this month's interest (2); equal steps save equal time (4); any repayment clears a loan (5, 7; A1); rate changes act symmetrically (6); halving the term doubles the repayment (A2 crossed); P ÷ M ignores interest (A1 crossed).
- **One idea at a time:** one change per scene (repayment in 2 to 5, rate in 6 and 7); the hook's loan is used throughout except A1 and the handoff; the tool shows only the first and last rows.
- **Video makes it easier:** the student sees the same amber interest part in both bars with the extra all teal (2), watches the tool reach the last smaller repayment (3), watches four curves race to zero with shrinking gaps (4), sees the term curve climb as it nears the interest-only line (5), and watches that line slide towards the repayment as the rate rises (6, 7). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand and given (with units) visible, 10 seconds each with the invitation to pause, nothing answer-bearing (A2's graph is the given). One crossed mistake each; feedback about 29 s and 26 s (scenes 10 and 12).
- **Avoided double teaching:** f09's recurrence is named in one phrase (3) and used; the balance table and curve are reused parts, not re-explained.
- **Syllabus coverage:** `ci9cb798c5` ("varying the interest rate": 6, 7; "and repayment amount": 2 to 5; "with digital tools": 3; "by using a given graph": 4, 5, A2; "without digital tools": 2 and A1 by hand).
- **Out of scope by design:** the n and M formulas and the total paid (f11); offset and redraw.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A loan of $200,000 has interest at 6% p.a., compounded monthly. The borrower repays $1,000 per month. Explain why the loan is never repaid."
Model answer: r = 0.06 ÷ 12 = 0.005; the first month's interest is 200 000 × 0.005 = $1,000, equal to the repayment, so A₁ = 1.005 × 200 000 − 1000 = $200,000 = A₀. The balance never falls, so the loan is never repaid. Classic mistake (crossed): "200 months" (200 000 ÷ 1000; interest ignored).

**Attempt 2 (scene 11; original wording, HSC style, 1 mark suggested).** "The graph shows the time taken to repay a $400,000 loan at 5% p.a., compounded monthly, for different monthly repayments. Use the graph to estimate the monthly repayment needed to repay the loan in 15 years."
Model answer: reading across from 15 years to the curve and down gives about $3,160 per month (accept about $3,100 to $3,200; exact $3,163.17). Classic mistake (crossed): "about $4,300" (double the 30-year repayment; that repayment clears the loan in about 9.8 years).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook (site) | $400,000; 5% p.a. monthly; $2,147.29 (30 years); $2,500 (+$352.71) | 1, 2 |
| Month 1 and 2 splits | interest $1,666.67; debt paid off $480.62 against $833.33; month 2 $1,664.66 / $482.63 and $1,663.19 / $836.81 | 2 |
| Tool | 265 repayments, final $540.57; ≈ 22.0 years; ≈ 8 years sooner; rows $399,166.67, $398,329.86, $397,489.57; rows 263, 264 $3,025.72, $538.32 | 3 |
| Given balance graph | ≈ 30, 22.0, 16.3, 13.0 years; savings ≈ 5.8 and ≈ 3.3 years | 4 |
| Interest-only | $1,666.67; $1,500 → $400,166.67; $1,700 ≈ 79 years; $2,000 ≈ 36 years | 5 |
| Rates at $2,500 | 4% ≈ 19.1; 5% ≈ 22.0; 6% ≈ 26.9; 7% ≈ 38.8 years; interest-only $1,333.33, $1,666.67, $2,000, $2,333.33; +4.9, −2.9 years | 6 |
| Rate rise at $2,147.29 | 6%: ≈ 44.8 years; 6.5%: interest $2,166.67 > $2,147.29; $400,019.38 after 1 month | 7 |
| A1 | interest $1,000 = M; crossed 200 months | 9, 10 |
| A2 | ≈ $3,160 (exact $3,163.17); crossed about $4,300 (≈ 9.8 years) | 11, 12 |
| Handoff | $250,000; 6% p.a. monthly; 20 years; M = ? | 13 |

**Revision 2 additions (recalculated in Python with exact fractions, 7 Nov):**

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Calculator payoff readouts (years and months of repayments) | $2,147.29: 360 = 30 years 0 months (final $2,144.37); $2,500: 265 = 22 years 1 month (final $540.57); $3,000: 196 = 16 years 4 months; $3,500: 156 = 13 years 0 months | 1, 3, 4 |
| Rate slider at $2,500 | 4%: 230 repayments = 19 years 2 months (final $57.28); 5%: 265 = 22 years 1 month; 6%: 323 = 26 years 11 months (final $1,730.41); 7%: 466 = 38 years 10 months (final $1,476.48); formula 229.02, 264.22, 322.69, 465.59 months | 6 |
| 6% at $2,147.29 | 538 repayments = 44 years 10 months (formula 537.3 months; final $538.58) | 7 |
| Handoff (f11's loan, site lesson 13 card 05) | $20,000; 7.2% p.a. monthly; $400 a month; n = ? | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked in Python with exact fractions and a row-by-row recurrence (2 Nov, isolated run); Codex to re-check.

- 400 000/240 = 1 666.666…; 2 147.29 − 1 666.666… = 480.62; 2 500 − 1 666.666… = 833.33; 400 000 × 241/240 − 2 147.29 = 399 519.38 (interest 1 664.66, paid 482.63); 400 000 × 241/240 − 2 500 = 399 166.67 (interest 1 663.19, paid 836.81).
- Recurrence at M = 2 500: A₁ = 399 166.67, A₂ = 398 329.86, A₃ = 397 489.57; A₂₆₃ = 3 025.72, A₂₆₄ = 538.32; due at 265: 538.32 × 241/240 = 540.57. Formula n = ln(2500/833.33…)/ln(241/240) = 264.22.
- Terms: 3 000: 195.03 months (196 repayments, final 85.48); 3 500: 155.51 (156, final 1 799.45); 2 147.29: 360 (final 2 144.37).
- 1 500: 400 166.67 after one month. n at 1 700: 945.6 months (78.8 years); 1 800: 52.2 years; 2 000: 35.9 years.
- r = 0.04/12: n = 229.02 months; 0.06/12: 322.69; 0.07/12: 465.59. Pr: 1 333.33, 2 000, 2 333.33.
- 6% at 2 147.29: 537.3 months = 44.77 years. 6.5%: 400 000 × 0.065/12 = 2 166.666…; 400 000(1 + 0.065/12) − 2 147.29 = 400 019.38.
- 15-year repayment at 5%: 3 163.17; 2 × 2 147.29 = 4 294.58, term about 9.84 years at $4,294.58 (118.1 months).
- A1: 200 000 × 0.005 = 1000.

- Revision 2: payoff readouts are whole repayments, rounded up from the formula: ⌈264.22⌉ = 265 = 22 y 1 m; ⌈229.02⌉ = 230 = 19 y 2 m; ⌈322.69⌉ = 323 = 26 y 11 m; ⌈465.59⌉ = 466 = 38 y 10 m; ⌈537.3⌉ = 538 = 44 y 10 m. Codex to confirm each by the row-by-row recurrence (the final repayment is smaller, never zero).

## Memory aid check

- **"Only what's left after the interest pays the loan down."** Original. Meaning, as said in scene 8: in each period, subtract the period's interest from the repayment; only that remainder (M − interest) reduces the balance. Assumptions checked: interest is charged on the balance each period before the repayment (f09's order); the repayment is fixed; "the interest" means this period's interest on this period's balance, which falls over time (so the remainder grows; key note 1). It carries both effects: a bigger M leaves more; a higher rate leaves less; and M ≤ Pr leaves nothing (key note 2). It helps a new case: a borrower who adds $100 a month sees the whole $100 reduce the debt. Introduced after the causes (2 to 7).
- **Considered, not used:** "pay more early" (true but adds timing of extra payments, a site lesson 14 idea outside this point); the site's "the bank loves 30-year loans" (personifies the lender, gives no cause).

## Narration length estimate

Revision 2 (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " inside the scene, joined with a space, bold markers removed; the total is the sum of the scene strings): **5,821 characters**, 14 scenes. Characters per scene (1 to 14): 509, 640, 629, 462, 637, 530, 510, 190, 216, 381, 277, 339, 426, 75.

At 13.3 characters per second the speech outside the notes scene is about 432 s. Holds and settling: the hook's 3 s prediction; two 10 s countdowns (20 s); the memory-aid hold (2 s); two feedback holds (2 s); the handoff hold (2 s); settling for the slider run (3), the four curves (4), the term curve (5) and the rate slider (6), about 15 s in all; the key-notes scene fixed at 45 s. Total **about 521 s**, under the 570 s cap with about 49 s spare.

Reserve trim if the voiced take runs long: scene 4's "Each step up is another five hundred dollars a month." (keep the chips silent; about 4 s). Do not cut below 5,500 characters without replacing content.

## Scene list and build ids

Lesson key `m-a12f10` (route math-a12-f10). Suggested explainer folder `src/explainer/lessons/math-a12-f10` and build folder `docs/production/claude-pm/lessons/m-a12f10` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, extra-repayment, digital-tool, given-graph, interest-only, changing-rate, never-repaid, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f09's last frame continues into scene 1 (camera continue, same graph); 1 to 2 clear change (graph to bars); 2 to 3 clear change (tool); 3 to 4 clear change (graph); 4 to 5 clear change (term curve); 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 camera pull back to the aid; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: hook prediction (3 s); attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes hold, fixed at 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12f10-learning-review.md`, `science_check` = `checks/m-a12f10-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, actual appearance): `public/assets/biology/y11-laptop-blank-v1.png` (1800 × 1200, an open laptop, front view, a large blank dark screen with a clean rectangular edge: suits a coded calculator), `public/assets/physics/phys-y11-house-v1.png` (1774 × 887, a weatherboard house with a corrugated roof, side elevation), `ma12-phone-v1.png` (briefed for d03; f14 uses it, so f10 uses the laptop to keep the two tools distinct), `y11-banknote-v1.png` and `y11-coins-v1.png` (decorative; not used).

Have (reused): `phys-y11-house-v1.png` (scene 1, from f09's final frame), `y11-laptop-blank-v1.png` (scenes 1 to 3, 6 and 7; the coded calculator sits on its screen rectangle, which the builder measures once and records).

Need (painted, new): none for f10. The handoff uses f11's `ma12-motorbike-v1.png` and `ma12-swing-tag-v1.png` (briefed in `math-a12-f11.md`).

Coded (studio kit): `ScreenApp` (new) with `ParameterSlider`s and readouts on the laptop screen, `RepaymentSplit`, `BalanceTable`, `LoanBalanceGraph`, `LoanTermCurve`, `LiveReadoutBoard`, `HandTag`, `MemoryAidCard`, `QuestionCard` with `GivensStrip`, countdown, `KeyNotesScreen`. No product names, logos, fonts or icons of real software or lenders.

### Studio kit use and additions

From f09: `moneyEngine`, finance role tokens, `RepaymentSplit`, `BalanceTable`, `LoanBalanceGraph`, `PlateFields`.

New in f10:
1. **`ScreenApp`**: a coded app or calculator laid out inside a plate's measured screen rectangle (laptop here; phone in f14), with labelled fields, one or more `ParameterSlider`s, live readouts and an optional mini graph; all values from `moneyEngine`; a `payoffReadout` formatter ("22 years 1 month", "never").
2. **`LoanTermCurve`** at studio sizes (Revision 1 part below), with a riding marker and a dashed amber interest-only line.

## Codex asset brief (Maths A12 F10, a home loan on a mortgage calculator)

No new painted plate. Reused: `public/assets/physics/phys-y11-house-v1.png` and `public/assets/biology/y11-laptop-blank-v1.png` (inspected 7 Nov; both transparent, native aspect kept, never stretched). Codex task for the build: measure the laptop plate's screen rectangle (left, top, right, bottom, in pixels) and record it in `docs/production/claude-pm/assets/ma12-f10-provenance.json`, so `ScreenApp` places the coded calculator exactly; report whether the screen edge is straight enough for coded text (it appears so). The handoff's motorbike and swing tag are briefed in `math-a12-f11.md`.

### Revision 1 coded part specification (kept; colours now follow the Revision 2 roles, and every part is built as a studio kit part)

No painted plate is needed (programme decision 5; no people, no bank or software branding). Coded kit parts for the finance-parts kit brief (with f09's four), in `src/explainer/math/`, exported through `kit.tsx`, with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample. All terms come from f09's shared loan engine (row-by-row, full precision; the final part payment computed, never a fractional repayment count on screen except as a grey formula readout).

1. **`LoanTermCurve`** (scenes 5, 6, 11, 12). Term (years, or periods) against repayment for one or more rates ({P, rate, label, colour}). Props: `repaymentRange`, `termMax` (values above clip with an arrow), `interestOnlyLine` (per curve: a red dashed vertical at Pr with label), `markers` ({M, readout, at}), `readAcross` ({term, at}: dashed line from the term axis to the curve, then down to the repayment axis, with a readout of the crossing; the part computes it by bisection on the engine), `grid` ({major, minor}: for A2, every $100 and every year), `bare` (axes and curve only, for a question card), `rateSlider` (scene 6: collapses to a vertical at fixed M, slides the interest-only marker along the axis for listed rates and shows the term readout and the "M − interest" bracket), `insetPoints` (term against rate, small). Checks: at 5%, M = 2 500 gives 22.0 years, 3 163.17 gives 15.0, 1 700 gives 78.8 (clipped), interest-only at 1 666.67; at 6%, M = 2 500 gives 26.9, interest-only 2 000; at 4.5%, Pr = 1 500 (spare check). Fit check at 1920 and phone landscape with the question card beside the bare graph.
2. **`ToolPanel` table mode** (scene 3; f11 checks). An unbranded spreadsheet-style panel: a typed rule row, then rows filling down with a `jumpTo` ellipsis (show rows 1 to 3, "⋮", the last rows), a `finalRow` flag where the balance due falls below M ("due $540.57: final repayment"), and grey values. Uses the engine; no product names, fonts or icons of real software.
3. **`LoanBalanceGraph` additions** (f09 part): `endMarkers` with drop lines to the time axis and grey term readouts; `savingBrackets` between end markers; `insets` (small flat and rising lines); `overflowSplit` link to `RepaymentSplit` (interest part longer than M, overflow red).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table, to the cent for money and to one decimal for years.
2. Confirm the syllabus quote matches the official 2024 text, and that no site module label appears in learner copy or metadata.
3. Confirm the scope of learner-visible general claims: "every extra dollar goes straight to the debt" (2; true for the period it is paid, with interest charged on the opening balance); "paying more always shortens the term, but each extra dollar buys less time" (4, key note 3); "if M ≤ Pr the loan is never repaid" (5, 7, key note 2; for M = Pr the balance is constant); "a rise of one point costs more time than a fall of one point saves" (6, key note 3; true for this loan and in general because the term is convex in r near these values: the maths check confirms the general wording or narrows it to "here").
4. Confirm the tool rows and final repayment (265, $540.57) and that "about twenty-two years" and "about eight years sooner" match.
5. Confirm all graph readings are marked as estimates ("≈") with exact values in grey only where given.
6. Confirm both attempts carry every demand and unit, are original in wording, and that A2's graph has no markers, interest-only label or 15-year line.
7. Confirm the opening matches f09's scene 15 exactly and the handoff (scene 13) gives no formula and no repayment value; scene 14 returns to it.
8. Confirm no people, bank or software names or logos appear in any visual.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.

11. Revision 2: confirm every calculator readout (years and months, final repayments) by the row-by-row recurrence; confirm the slider runs show only values from the engine; confirm the calculator has no product, lender or software name or styling; confirm the colour roles (interest-only line dashed amber; mistake red only on crossed slips); confirm question cards carry pictures that give nothing away; confirm the five one-line key notes and the 1,350-frame notes scene; confirm the opening matches f09 Revision 2 scene 15 and the handoff frame matches f11 Revision 2 scene 1.

## YouTube metadata (draft)

Title: How Rate and Repayment Changes Alter a Loan Term | Year 12 Maths Advanced

(Title length: 75 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/financial-mathematics/lesson14.sa.html

A $400,000 loan at 5% takes 30 years at $2,147.29 a month. Pay $2,500 instead, about $350 more, and it is gone about 8 years sooner. See why every extra dollar goes straight to the debt and then snowballs, how a spreadsheet running the recurrence finds the term, how to read terms from a given graph, why each extra $500 saves less time than the last, what the interest-only repayment is and why a loan never shrinks below it, and why a rate rise of one point costs more years than a fall of one point saves. A memory aid: only what's left after the interest pays the loan down. Two exam-style questions at the end, including reading a given graph.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, financial mathematics.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Examine the effect of varying the interest rate and repayment amount on the time taken to repay a loan, with or without digital tools or by using a given graph"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

Builds on: Reducing-balance loans month by month (previous video). Next: Finding repayments, balances, term and total paid.

#Year12Maths #MathsAdvanced #FinancialMaths #HSCScience

## Open decisions

- **1. General wording of the rate asymmetry (maths check).** Scene 6 and key note 3 say a rise costs more time than an equal fall saves. True for this loan (+4.9 against −2.9 years) and for loans where M is well above Pr at both rates. The maths check confirms whether it holds in general for M > Pr at all three rates (the term is a convex, increasing function of r there), or the key note narrows to "usually".
- **2. Site lesson 14 off-syllabus content (root).** Offset and redraw (cards 04 Problem 2 and 05, SA Q2, Q3) are not in the 2024 Advanced points; the video leaves them out. Root to decide whether the site page is flagged in the site-corrections log as out-of-scope content.
- **3. "Interest-only repayment" term (learning review).** A common finance term with a plain meaning given; confirm it reads correctly, or use "a repayment that only covers the interest" each time.
- **4. Tool display (root).** `ToolPanel` shows a spreadsheet-style rule row "next balance = balance × (1 + 0.05/12) − 2500" rather than cell references (no product syntax). Confirm.
- **5. Site link form.** `.sa.html` form (root decision 15).

- **Revision 2 (root).** (a) The handoff now introduces f11's motorbike loan (site lesson 13 card 05) instead of the $250,000 loan; f11 is redesigned with it. (b) The laptop plate is reused from Biology (`y11-laptop-blank-v1`); d17 also uses it for video views, a different screen and meaning. (c) "Calculators and graphs find terms for you" replaces "Tables and graphs give estimates" in the handoff, because the calculator gives whole repayments exactly; graph readings stay marked as estimates.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f09's recurrence; check that the extra-repayment cause is said before the tool result; that the hook's prediction is answered with the tool's evidence; that "only the part above the interest" is shown, not just said; that the rate asymmetry has its cause; that M > Pr is a condition; that A2's bare graph is readable at 10 s with pause; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The equal amber parts, the tool fill, the racing curves, the climbing term curve and the sliding interest-only line carry the explanation; judge them at playback speed in the voiced preview. Every bar, curve and readout must come from the same loan engine.
- The opening frame is f09's scene 15 (same designer). Scene 13 must match f11's opening (same designer).

## Revision 2 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov).

- **Anchor:** the site's $400,000 home loan, as a buyer meets it: the reused house plate and a reused laptop whose screen holds a coded, unbranded mortgage calculator. The calculator is the syllabus's "digital tool", so the anchor carries the point; it answers the hook (scene 3) and returns for the rate changes (6, 7).
- **Simulations:** (1) the calculator: a repayment slider moves the payoff date live ("30 years 0 months" to "22 years 1 month"), a rate slider steps 4% to 7% at $2,500, and at 6.5% on the 30-year repayment the readout turns to "never"; (2) the split bars, the four racing balance curves and the term curve with a riding marker and the interest-only line.
- **Colour roles:** as f09 (balance ink, interest amber including the interest-only line, repayment teal, answer green, mistake red on crossed slips only).
- **Plates:** reused `phys-y11-house-v1`, `y11-laptop-blank-v1`; no new plates; the handoff uses f11's new `ma12-motorbike-v1` and `ma12-swing-tag-v1`.
- **Narration changes:** scene 1 adds "A mortgage calculator shows it straight away." (+46 characters); scene 3 names the calculator, the slide and the payoff date (+23 characters); scene 13 is rewritten for the motorbike handoff (+74). All other scenes keep their Revision 1 text.
- **Counts:** 5,678 (sum of Revision 1 scene strings; stated as 5,691 joined) → **5,821** characters; about 530 s (60 s notes hold) → **about 521 s** (45 s notes scene).
- **Kit additions:** `ScreenApp` (a coded app on a plate's screen, with sliders and readouts) and the studio `LoanTermCurve` with a riding marker.
- **Joins:** opens on f09 Revision 2's final frame (house and graph); ends on f11's motorbike frame.
