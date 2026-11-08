# Maths A12 F11: How do we find repayments, balances, term and total paid? Set the balance to zero, solve for the repayment, count the total, find what is still owing, and solve for the term with logarithms (design)

Status: Revision 2 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing. Previously Revision 1 (2 Nov). Not voiced (no `math-a12-f11/` folder and no `measured/lesson.json`), so narration is rewritten freely where the anchor needs it. Nothing recorded; human listening pending.

Narration 5,636 characters (sum of the 14 scene strings), 14 scene headings, about 506 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: third video of the Year 12 Mathematics Advanced financial mathematics strand (course outline playlist order 48), after f10 (rate and repayment effects on the term) and before f12 (what cash flows define an annuity). Templates: `math-a12-i05.md` and `math-a12-d10.md` (via `math-a12-f04.md`): same section structure, voice, paper style and coded maths visuals; no painted plates, no people, no bank names or logos. No brief 151 pack and no route-inputs-3 entry exist for f11 (checked 2 Nov); pack work done here. Site lessons read (2 Nov, read-only): `financial-mathematics/lesson13.sa.html`, SHA256 `827aaa5b52f4c4ea8ba4e775b82d6cc65c1527e46206f23721a396dbfca7a479` (hook, cards 04 and 05, Problems 1 to 3, traps 01 to 03, SA Q1 to Q3); `lesson12.sa.html`, SHA256 `3421ed0f7375f5753005a8531ddf98df46232122ee5381f7af4ae11bd48deffa` (the recurrence and its closed form, from f09). Every number recalculated in Python with exact fractions and a row-by-row recurrence. Course outline entry: `math-a12-f11` (one content point, site sources lessons 12 and 13).

Owner rules applied: as f01 to f10 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; exact values in the algebra (10/7, 50/41), decimals only in grey readouts except money; money to the cent with every rounding stated; attempt cards give nothing away; opens on f10's handoff frame; f09's closed form and f10's M > Pr condition recalled by use, not re-taught).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Financial mathematics, Reducing balance loans; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci1c82cea2`: "Solve problems that involve reducing balance loans by calculating the total amount paid, equal periodic repayments, the amount still owing and the time taken to repay the loan"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

**Boundary:** starts from f10's last frame (scene 13 of `math-a12-f10.md`: a `LoanBalanceGraph` with givens chip "$250,000; 6% p.a., compounded monthly; 20 years", a dashed curve from $250,000 to "$0 after 20 years", chips "M = ?", "Next: find the repayment exactly" and "?"); states "repaid" as Aₙ = 0; rearranges f09's closed form for M; finds the repayment for site Problem 3; finds the total amount paid and the interest; finds the amount still owing after 10 years; rearranges Aₙ = 0 for n with logarithms (site card 05 example) and explains rounding the term up, with the final smaller repayment and the exact total paid. Stops at the four calculations for a single loan. Not taught: present value of an annuity and the site's PV form of the formula (f12 to f15; shown once as a grey equivalent only); maximum borrowing from a budget (site Problem 2; same rearrangement, later practice video); affordability rules and offset accounts (not 2024 points); changes of rate during a loan (outside the point).

## Decisions

### Revision 2 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a personal loan for a used motorbike (painted plates, live).** Site lesson 13 card 05's loan ($20,000 at 7.2% p.a. compounded monthly, $400 a month) is the size of a personal loan for a used motorbike, so it becomes the anchor and the spine of the lesson: a painted motorbike and a painted swing tag with coded lines. One loan now carries all four calculations in the point: the time taken (scenes 2 to 4, the site's numbers unchanged), the total paid and the interest (4), the equal repayment for a 4-year term (5, 6; original), and the amount still owing after 2 years (7; original). The site's $250,000 example (Problem 3, numbers unchanged: $1,791.08, $429,859.20) moves to A1, with its trap (P ÷ n) as the crossed slip. Distinct from every context in `checks/root-decisions-maths-redesign.md` and from f09 (a car loan), f10 (a home loan), f12 (an apartment deposit).
- **Order changed: the term first.** The hook asks the question a buyer asks ("how many repayments until the bike is mine?"), and the site's own card 05 answers it. Setting Aₙ = 0 and collecting the powers gives (M − Pr)(1 + r)ⁿ = M before any logarithm, so the rearrangement is no harder than for M; the logarithm is one row. Solving for M follows as "turn it around" on the same loan.
- **Hook surprise, made visual (standard item 9).** 20,000 ÷ 400 = 50 is the natural guess. A `LoanBalanceBar` (f09 part) races two runs side by side: an interest-free ghost bar that empties at 50, and the real bar, whose amber interest caps keep it above zero until the 60th repayment, which is a short $249.87. Ten extra repayments come from the interest.
- **Idealising assumptions (author notes, not learner copy).** Fixed rate; no fees; repayments at each month's end; the 4-year repayment rounded to the nearest cent ($480.78, exact 480.7829…), so its 48th repayment would be $480.94 (author note only; "total = 48 × M" is the course convention and is stated as such).
- **Simulations (standard item 3).**
  1. **The bike's balance bar** (scenes 1 to 4; main simulation): `LoanBalanceBar` with the interest-free ghost, live readouts (52 px) "repayments", "interest so far" and "balance owing", run to 60; the swing tag's coded "Paid off after" line fills on the answer.
  2. **The repayment dial** (scenes 5, 6): a teal `ParameterSlider` for M on the swing tag sweeps from $400 upward while the balance curve's end point moves in from 60 months; it settles where the curve lands on $0 at 48 months ($480.78), with readouts "repayment", "paid off after" and "total paid".
  3. **The halfway marker** (scene 7): a marker rides the $400 balance curve to 24 months with readouts "balance owing" and "paid off so far".
- **Colour roles (fixed for f09 to f15).** Balance ink; interest amber; repayment teal; the unknown's slot outlined in grey ink with a "?" (not amber, which is interest); deposits blue (handoff only); targets dashed ink; answer green; mistake red, crossed slips only.
- **Join with f10 (both designs edited together).** Scene 1 opens on f10 Revision 2's final frame exactly (motorbike, swing tag with "Loan $20,000", "7.2% p.a., monthly", "$400 a month", the dashed curve from $20,000 ending in "?", chips "n = ?", "Next: find the term exactly" and "?").
- **Join with f12 (both designs edited together).** The handoff turns the money around into f12's anchor, saving towards a first apartment: the painted wall calendar `ma12-wall-calendar-v1.png` and apartment building `ma12-apartment-building-v1.png` (briefed in f12), with the deposit strip ("t = 0: $0 saved", blue "+$200" arrows at the ends of months 1 to 4, amber "×(1 + r)" arcs between, "?" tabs to "after 5 years: ?"), chips "Next: saving with regular deposits" and "?".
- **Large type, hand tags, stage changes.** Type as listed under "Script and shots". `HandTag`: "only $280 pays the bike", "interest-free: 50", "real: 60", "120 = Pr: first month's interest", "n comes down from the power", "needs M > Pr", "59 leaves $248.38", "round up", "less time, less interest", "40% of the time, 36% paid off". At most two live. Stages, each change within 30 to 75 s: the bike and the racing bars (1); the solve-for board (2, 3); the round-up strip and total (4); the repayment dial (5); the M board (6); the halfway marker (7); the framed memory card (8); question cards with pictures (9 to 12); the apartment handoff (13); key notes (14).
- **Worked examples and feedback (g01 layout).** Scenes 2 to 7: task strip, givens card ("P = $20,000", "r = 0.006 a month", "M = $400" or "n = 48"), `SolveForPanel` rows at 52 px with the unknown's slot, green framed answers ("60 repayments", "$23,849.87", "$480.78", "$12,795.26"). Scene 1 crosses the guess "50 repayments" in red; scene 4 crosses "59". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip.
- **Question cards.** Full text at 40 px plus a picture: A1 a coded sketch of a 20-year balance curve from $250,000 to $0 with "M = ?" (no rate per month); A2 the swing tag plate small with only the question's givens ("Loan $18,000", "6% p.a., monthly", "$500 a month", "Paid off after: ?").
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Paid off means Aₙ = 0. Set it to zero, then solve for what's missing." with four keyed slots (n, M, A_k, total) and the motorbike icon. Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Narration (not voiced).** Rewritten throughout for the new order and anchor; the site's card 05 sentences (log step, round up, last repayment) keep their Revision 1 wording; A2 and its feedback keep their Revision 1 text.

### Revision 1 decisions (kept where not overridden above)

- **Learner question kept (outline).** "How do we find repayments, balances, term and total paid?" The answer, built in order: a loan is repaid when the balance is zero, so every calculation starts from f09's Aₙ = P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r (2); setting Aₙ = 0 at the planned n and rearranging gives M (3, 4); the total paid is the number of repayments times M, and the interest is the total minus the principal (5); the amount still owing after k repayments is A_k with the actual M (6); setting Aₙ = 0 with n unknown gives (1 + r)ⁿ = M/(M − Pr), solved with logarithms, which needs M > Pr (f10) (7); the term rounds up, because the whole number below still leaves money owing, and the last repayment is smaller (8).
- **The hook (site lesson 13 Problem 3, numbers unchanged; the guess is original).** $250,000 at 6% p.a. compounded monthly over 20 years. The tempting guess "250,000 ÷ 240 = $1,041.67" (site trap 01 "simple average", in its plainest form) is stated and crossed in scene 1 by f10's rule: the first month's interest alone is $1,250, so $1,041.67 would not even cover it. The 3 s prediction is "more or less than $1,500?" (no answer given), answered in scene 4 ($1,791.08).
- **Rearranging for M (site card 04; derivation changed).** The site derives M from the present-value annuity formula, which the course has not reached (annuities are f12 to f15). Here M comes from f09's closed form: P(1 + r)ⁿ = M[(1 + r)ⁿ − 1]/r, so M = Pr(1 + r)ⁿ / [(1 + r)ⁿ − 1]. One grey line notes the equivalent form M = Pr / [1 − (1 + r)⁻ⁿ] that some books print (divide top and bottom by (1 + r)ⁿ). Each rearranging step is one row with its reason spoken.
- **Repayment and total (site Problem 3, numbers unchanged).** r = 0.005, n = 240; 1.005²⁴⁰ ≈ 3.3102 (grey); M = 1 250 × 1.005²⁴⁰/(1.005²⁴⁰ − 1) = 1 791.0776…, so $1,791.08 to the nearest cent (stated). Total paid = 240 × $1,791.08 = $429,859.20; interest = $179,859.20 (site "$429,859", "$179,859", rounded to the dollar without saying so). The interest is about 72% of the amount borrowed (grey).
- **Amount still owing (original question on the site loan).** After 10 years (120 repayments), with M = $1,791.08: A₁₂₀ = 250 000(1.005)¹²⁰ − 1 791.08(1.005¹²⁰ − 1)/0.005 = $161,328.16 (1.005¹²⁰ ≈ 1.8194, grey). Halfway through the term, about 65% (0.645) is still owed: f09's sagging curve, now calculated. The rounding is stated: the answer uses the rounded repayment, as a lender would.
- **Time taken (site card 05 example, numbers unchanged).** $20,000, r = 0.006 (7.2% p.a. monthly), M = $400: 20 000(1.006)ⁿ = 400(1.006ⁿ − 1)/0.006; multiply by 0.006: 120(1.006)ⁿ = 400(1.006)ⁿ − 400; so 280(1.006)ⁿ = 400 and (1.006)ⁿ = 10/7 (exact); n = log(10/7)/log(1.006) ≈ 59.62 (grey; site "59.7", error below). 120 = Pr is spoken as "the first month's interest", so the condition M > Pr (f10) reappears as the reason 10/7 is positive. General: (1 + r)ⁿ = M/(M − Pr), n = log(M/(M − Pr))/log(1 + r).
- **Rounding up and the last repayment (site trap 03 "round n up"; values original).** After 59 repayments A₅₉ = $248.38 is still owed, so 60 repayments are needed; the 60th is only $249.87 (248.38… × 1.006, rounded to the cent). Total actually paid: 59 × $400 + $249.87 = $23,849.87. The narration says the HSC usually asks for the number of repayments (60); the exact final repayment is shown as a worked extension, because "total amount paid" then has one true value. (Open decision 2.)
- **Attempts (original).** (A1) "A car loan of $24,000 has interest at 6% p.a., compounded monthly. It is repaid in equal monthly repayments over 5 years. Find the monthly repayment, to the nearest cent." M = 120 × 1.005⁶⁰/(1.005⁶⁰ − 1) = $463.99 (1.005⁶⁰ ≈ 1.3489, grey). Crossed: "$400" (24,000 ÷ 60, interest ignored; scene 1's mistake on a new loan). (A2) "A loan of $18,000 has interest at 6% p.a., compounded monthly. It is repaid at $500 per month. How many monthly repayments are needed to repay the loan?" Pr = 90; (1.005)ⁿ = 500/410 = 50/41; n = log(50/41)/log(1.005) ≈ 39.79 (grey), so 40 repayments. Crossed: "39" (rounded down; $392.91 is still owed after 39). Neither card shows a formula, a rate per month or n.
- **Mistake scene:** none separate. "P ÷ n" (hook; A1 crossed; site trap 01); "the repayment formula must be memorised from nowhere" (3: it comes from Aₙ = 0); "total interest is P × annual rate × years" (not used); "amount owing after half the term is half the loan" (6); "round n to the nearest whole number" (8; A2 crossed; site trap 03); "logs of a negative" when M ≤ Pr (7, by f10's condition).
- **Memory aid (original).** "Paid off means Aₙ = 0. Set it to zero, then solve for what's missing." See "Memory aid check".
- **Handoff (to f12, "What cash flows define an annuity?").** Scene 14 sums up in one sentence, then turns the cash flow around: a `PeriodTimeline` in deposit mode (new): "t = 0: $0 saved", "+$200" green deposit arcs at the end of months 1 to 4, amber "×(1 + r)" arcs growing the balance between them, then "?" tabs to "after 5 years: ?", chips "Next: saving with regular deposits" and "?". No formula, no "annuity" word. Scene 15 returns to this frame silently; it is f12's assumed opening frame (open decision 1).
- **Site sources used:** lesson 13 hook (term question not used), card 04 (the repayment formula, rederived), card 05 (find n; round up), Problems 1 and 3, traps 01 and 03; lesson 12 (the recurrence via f09). Not used: lesson 13 Problem 2 and SA Q2 (maximum borrowing; same algebra, later practice video), the affordability activity (not a 2024 point), the hook's 20-year comparison (f10 covered term effects).
- **Site errors (new, lesson 13; for root to log).** (1) Card 05 example: "ln(1.006) = 0.005978" and "n ≈ 59.7 months". Correct: ln(1.006) = 0.0059821, n = 0.356675/0.0059821 = 59.62 months; the conclusion "60 months" stands. (2) Problem 3 gives the total repaid and the interest rounded to the dollar ("$429,859", "$179,859") without saying so; to the cent they are $429,859.20 and $179,859.20. Correction: give cents or say "to the nearest dollar". Minor. (SA Q3's $869,652 and $419,652 are exact with M = $2,415.70.) (3) Card 04 derives the repayment formula from the present value of an annuity; in the site's own order and the course's video order, present value has not been reached at this point for students following the 2024 point's wording ("recognise ... as a compound interest loan"). Not an error in mathematics; route note: derive M from the loan's closed form, with the PV form as an equivalent. Lesson 12 errors are logged in f09.
- **Cause chain taught, in order:** (1) "repaid" means the balance is zero, so the closed form equals 0 at the end (2); (2) moving the repayment term across and dividing isolates M (3); (3) a repayment must cover each month's interest and more, which is why it is far above P ÷ n (1, 4); (4) the total is n equal repayments, and the interest is whatever is paid beyond the principal (5); (5) early repayments are mostly interest, so halfway through, most of the loan is still owed (6); (6) with n unknown, the same equation isolates (1 + r)ⁿ, and logarithms bring n down from the power; this needs M > Pr (7); (7) a fractional n means the whole number below leaves a balance, so round up, with a smaller last repayment (8).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f11`; playlist order 48; main learner question "How do we find repayments, balances, term and total paid?"; syllabus action `ci1c82cea2`.
  - Entry knowledge: f09 (Aₙ = P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r, rate per period); f10 (M > Pr, terms read from tools and graphs); Year 11 logarithms (log of a power, solving aˣ = b).
  - Start boundary: "Open on f10's $250,000 at 6% over 20 years with 'M = ?'; reject 250,000 ÷ 240 because the first month's interest is $1,250."
  - Stop boundary: "Aₙ = 0; M = Pr(1 + r)ⁿ/[(1 + r)ⁿ − 1] from the closed form; total paid and interest; the amount still owing after k repayments; n from (1 + r)ⁿ = M/(M − Pr) with logs, rounded up, with the final smaller repayment and exact total. No present value or annuities, maximum borrowing, affordability, offset or rate changes."
  - Next handoff: "math-a12-f12: a deposit timeline from $0, +$200 at the end of each month with ×(1 + r) between, 'after 5 years: ?'; ask what this savings plan is."
  - Prerequisite videos: math-a12-f09, math-a12-f10.
- **Learner-visible vocabulary (plain meaning at first use):** equal periodic repayments (the same amount every period, 2); total amount paid (all the repayments added together, 5); amount still owing (the balance after some repayments, 6); term (recalled from f10, 7).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **zero target** (`LoanBalanceGraph` end point pinned at $0 with a "A₂₄₀ = 0" tag); **solve-for panel** (`SolveForPanel`, new: the closed form with each quantity in its own slot, the unknown slot highlighted, then rearranging rows below with each move animated: a term sliding across the equals sign, a factor dividing out); **total stack** (240 equal red bars compress into one total bar with a principal part and an interest part); **owing marker** (`LoanBalanceGraph` marker at 10 years with a readout and a half line); **log step** (`AlignedAlgebra`: the power n slides down in front of log 1.006); **round-up strip** (`BalanceTable` with `ellipsisRows`: rows 1, ⋮, 58, 59, 60, the 60th marked "final: $249.87"); **deposit timeline** (`PeriodTimeline` `depositMode` for the handoff); `Chip` with `cross`, `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).
- **Board layout (constant):** heading top-left; the graph, table or slots on the left two-thirds; givens chip (with units) at the top of the right column, algebra below it, current line bright and earlier lines dim.
- **No human figures, no painted plates, no bank names or logos.**
- **Author notes (not learner copy):**
  (a) Problem 3: r = 0.06/12 = 0.005; n = 240; Pr = 1 250; 1.005²⁴⁰ = 3.3102044758…; M = 1 250 × 3.3102044758/2.3102044758 = 1 791.0776…; to the nearest cent 1 791.08 (rounding up by 0.0024, so the final balance with 240 repayments of 1 791.08 is −1.09: the last repayment would be $1.09 less; author note only).
  (b) Totals: 240 × 1 791.08 = 429 859.20; − 250 000 = 179 859.20; 179 859.20/250 000 = 0.7194.
  (c) Owing after 120: 1.005¹²⁰ = 1.8193967340…; 250 000 × 1.8193967340 = 454 849.18; 1 791.08 × 0.8193967340/0.005 = 293 521.02; difference 161 328.16 (with the unrounded M: 161 328.55). 161 328.16/250 000 = 0.6453.
  (d) Card 05: Pr = 20 000 × 0.006 = 120; M − Pr = 280; (1.006)ⁿ = 400/280 = 10/7; ln(10/7) = 0.3566749; ln(1.006) = 0.0059821; n = 59.624. A₅₉ = 248.38 (248.3838…); 60th repayment 248.3838 × 1.006 = 249.874 → $249.87; total 59 × 400 + 249.87 = 23 849.87. (1.006)⁵⁹ = 1.42325 < 10/7 = 1.42857 < 1.006⁶⁰ = 1.43179.
  (e) A1: Pr = 120; 1.005⁶⁰ = 1.3488501525; M = 120 × 1.3488501525/0.3488501525 = 463.9872 → $463.99.
  (f) A2: Pr = 90; 500/410 = 50/41 = 1.219512…; ln(50/41) = 0.1984509; ln(1.005) = 0.0049875; n = 39.789; A₃₉ = 392.91; A₄₀ < 0; final (40th) repayment 392.908 × 1.005 = 394.87 (not asked; grey only if shown).
  (g) Pronunciations: "one point zero zero five to the power two hundred and forty"; "one thousand seven hundred and ninety-one dollars eight cents"; "four hundred and twenty-nine thousand, eight hundred and fifty-nine dollars twenty"; "log of ten sevenths".
  (h) Logs: base-10 or natural logs both work (the ratio is the same); screen shows "log" in the rows and "ln" in a grey alternative; the voice says "log". Year 11 log laws: log(aⁿ) = n log a.

Main question: *How do we use the balance formula to find the repayment, the total paid, what is still owed, and how long a loan takes?*
Entry knowledge (f09, f10; Year 11 logarithms): the closed form for Aₙ; M > Pr; log of a power.
Stops after: the four calculations for one loan, with rounding rules. No present value or annuities.
Handoff: math-a12-f12: a savings timeline with regular deposits (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

Colour roles (Revision 2, fixed for f09 to f15): balance owed **ink**; interest **amber**; repayments **teal**; deposits **blue** (handoff only); the unknown's slot outlined grey ink with "?"; targets and reference lines **dashed ink**; time grey ink; answer **green**; mistake **red**, crossed slips only. Type (standard item 5): current line and live readouts 52 px; task strip, equation strip and givens 44 px; earlier lines 30 to 32 px and dimmed; table cells and axis numbers at least 30 px; hand tags at least 34 px; question cards 40 px; key-note bullets 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (bike and tag, bar, board, curve or card) is solid from its first frame. Header strip "MATHEMATICS ADVANCED · FINANCIAL MATHEMATICS"; scene headings in the hand font, 44 px.

### 1. hook (fifty repayments?)
> Last video ended here. A used motorbike is bought with a twenty thousand dollar loan, at seven point two per cent a year, compounded monthly, repaid at four hundred dollars a month. A quick guess is twenty thousand divided by four hundred, which is fifty repayments. But the first month's interest is a hundred and twenty dollars, so only two hundred and eighty dollars of that repayment pays off the bike. Is it fifty repayments, about sixty, or more than seventy? Make a **guess**. Here's the race. Without interest, the loan would be gone at fifty. With interest, it takes **sixty**.

Visual: opens on f10's last frame exactly (f10 Revision 2 scene 13: the painted motorbike `ma12-motorbike-v1.png` at the left, the swing tag `ma12-swing-tag-v1.png` with "Loan $20,000", "7.2% p.a., monthly", "$400 a month", the `LoanBalanceGraph` frame with the dashed curve from $20,000 ending in "?", chips "n = ?", "Next: find the term exactly" and "?"). Heading writes on: "How do we find the term, repayment, balance and total paid?" as the "Next" chips fade; "n = ?" stays. On "A quick guess" a grey chip "20 000 ÷ 400 = 50 repayments?". On "a hundred and twenty dollars" a `RepaymentSplit` bar for month 1: amber "$120.00" and teal "$280.00", hand tag "only $280 pays the bike". On "guess" (bold) a three-way chip "50 / about 60 / more than 70" and a 3 s prediction ring (no number). On "the race" the graph frame gives way to two `LoanBalanceBar`s side by side (about 640 px tall, solid): a dashed grey ghost bar "no interest" and the ink bar "with interest", with a shared counter (52 px) "repayments". Both run at speed: the ghost loses a teal $400 each month and empties at 50 (hand tag "interest-free: 50"); the ink bar gains an amber cap and loses the same teal bite each month and is still about $3,700 high at 50 (readout "$3,729.70"). On "sixty" (bold) the ink bar empties on a short final bite "$249.87" at 60 (hand tag "real: 60"); the guess chip "50 repayments?" is crossed in red, and "about 60" is ringed green. Readout under the bars: "interest so far: $3,849.87" (grey).

### 2. paid off means zero
> So how do we find that exactly? Start with what repaid means. After the last repayment, the balance is zero. And we already have a formula for the balance after n repayments. A sub n equals P times one plus r to the n, minus M times one plus r to the n, minus one, all over r. Here P is twenty thousand, r is zero point zero zero six, and M is four hundred. So we set A sub n equal to **zero**, and this time the unknown is n.

Visual: stage change to the g01 board; the bike and tag shrink to a 300 px thumbnail at the top left. Task strip (44 px): "How many monthly repayments are needed to repay the loan?" (site card 05). Givens card (44 px): "P = $20,000" (ink), "7.2% p.a., monthly: r = 0.006" (amber), "M = $400" (teal). `SolveForPanel` (52 px): "Aₙ = P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r" (grey tag "balance formula, two videos ago"); the P, r and M slots fill from the givens as each is said; the n slot is outlined grey ink with "?". On "zero" (bold) the left side becomes "0 = 20 000(1.006)ⁿ − 400(1.006ⁿ − 1)/0.006".

### 3. solving for the term
> Multiply both sides by r, and the first month's interest, one hundred and twenty dollars, appears. Gather the powers, and you get two hundred and eighty times one point zero zero six to the n equals four hundred. So one point zero zero six to the n is ten sevenths. Take logs of both sides, and n comes down from the power. n is log of ten sevenths over log one point zero zero six, about fifty-nine point six **two**. This only works because four hundred is more than the interest. Otherwise the right side would be negative, and no power could equal it.

Visual: camera continue (one row at a time, current row 52 px, earlier rows 32 px and dim). On "Multiply both sides by r" "120(1.006)ⁿ = 400(1.006)ⁿ − 400" with hand tag "120 = Pr: first month's interest" (amber). On "Gather the powers" "280(1.006)ⁿ = 400", the 280 tagged teal "the part of M that pays the debt in month 1"; "(1.006)ⁿ = 10/7". On "Take logs" "n log 1.006 = log(10/7)", the n sliding down from the power (hand tag "n comes down from the power"). On "two" (bold) "n = log(10/7) / log 1.006" with grey "≈ 59.62". On "more than the interest" a grey general row: "(1 + r)ⁿ = M / (M − Pr)", with hand tag "needs M > Pr" and f10's rule chip "repays only if M > Pr" pulsing once.

### 4. rounding up and the total
> Fifty-nine point six two repayments isn't possible, so which whole number? After fifty-nine repayments, there's still two hundred and forty-eight dollars thirty-eight owing. So the loan needs sixty repayments, and the last one is smaller, just two hundred and forty-nine dollars eighty-seven, once a month's interest is added. Always round the term up. The total actually paid is fifty-nine lots of four hundred, plus that last repayment, which is twenty-three thousand, eight hundred and forty-nine dollars eighty-seven **cents**. Take away the twenty thousand borrowed, and the bike cost three thousand, eight hundred and forty-nine dollars eighty-seven in **interest**.

Visual: stage change to the round-up strip: a number line (about 1,100 px) with 59, 59.62 (dashed marker) and 60; under it a `BalanceTable` (32 px) in `ellipsisRows` mode: row 1 ($20,000.00, interest $120.00, $400.00, $19,720.00), "⋮", row 59 closing "$248.38" (glows; hand tag "59 leaves $248.38"), row 60: "owed at start $248.38, interest $1.49, final repayment $249.87, owed at end $0.00" (author note d). On "round the term up" "60 repayments" in a green frame (52 px), hand tag "round up", and the bike thumbnail's tag gains "Paid off after: 60 repayments". On "total actually paid" row "59 × 400 + 249.87"; on "cents" (bold) "= $23,849.87" in a green frame. On "interest" (bold) a `RepaymentSplit`-style total bar splits into ink "borrowed $20,000.00" and amber "interest $3,849.87" (grey "if all 60 were $400: $24,000").

### 5. turning it around: the repayment
> Now turn it around. Say you want the bike paid off in exactly four years, which is forty-eight repayments. What should each repayment be? Set A forty-eight equal to zero, and now M is the unknown. Add the repayment term to both sides, so the loan's growth equals the repayments' growth. Then multiply both sides by r, and divide by the bracket. That gives M equals P r times one plus r to the n, all over one plus r to the n, minus **one**.

Visual: stage change to the repayment dial (simulation 2): the motorbike (about 560 px) and swing tag at the left, the tag's repayment line now a teal `ParameterSlider` "M"; at the right a `LoanBalanceGraph` (about 900 × 520 px, months 0 to 64) with the ink $400 curve ending at 60 and a dashed ink target mark "$0 at 48 months". On "What should each repayment be" the slider sweeps up from $400; the curve's end point slides in from 60 towards 48, with live readouts (52 px) "repayment", "paid off after" and "total paid"; the dial slows near the target and stops short with a "?" (the value waits for scene 6). Then the board writes in the right column, current row 52 px: "0 = P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r" with the M slot outlined "?"; on "Add the repayment term" the teal term slides across: "P(1 + r)ⁿ = M[(1 + r)ⁿ − 1]/r"; on "multiply both sides by r" "Pr(1 + r)ⁿ = M[(1 + r)ⁿ − 1]"; on "divide by the bracket" the bracket drops under; on "one" (bold) boxed "M = Pr(1 + r)ⁿ / [(1 + r)ⁿ − 1]". A grey line beneath: "same as M = Pr / [1 − (1 + r)⁻ⁿ]".

### 6. the repayment and the total
> Here P r is the same one hundred and twenty, and one point zero zero six to the forty-eight is about one point three three. So M is one hundred and twenty times that power, over the power minus one, which is four hundred and eighty dollars seventy-eight **cents**, to the nearest cent. That's about eighty dollars more each month. But forty-eight of them add to about twenty-three thousand and seventy-seven dollars, about seven hundred and seventy dollars less than before. The debt is gone sooner, so there's less interest **altogether**.

Visual: camera continue. Rows: "Pr = 20 000 × 0.006 = 120" (amber tag "first month's interest"); grey readout "1.006⁴⁸ ≈ 1.3326"; "M = 120 × 1.006⁴⁸ / (1.006⁴⁸ − 1)"; on "cents" (bold) "= $480.78 (to the nearest cent)" in a green frame, and the dial on the tag settles at "$480.78" with the curve landing on $0 at 48 months. On "eighty dollars more" a teal chip "+$80.78 a month". On "forty-eight of them" two total bars side by side (about 700 px each): "$400 a month: $23,849.87" (ink and amber $3,849.87) and "$480.78 a month: 48 × 480.78 = $23,077.44" (ink and amber $3,077.44); a bracket "≈ $772 less". On "altogether" (bold) the amber parts are circled, hand tag "less time, less interest".

### 7. the amount still owing
> One more question. At four hundred dollars a month, how much is still owed on the bike after two years? That's after twenty-four repayments, so use the same formula with n equal to twenty-four. Twenty thousand times one point zero zero six to the twenty-four, minus four hundred times the bracket, over zero point zero zero six, gives twelve thousand, seven hundred and ninety-five dollars twenty-six **cents**. That's forty per cent of the time, but only about thirty-six per cent of the loan is paid off, because the early repayments carried the most interest.

Visual: stage change to the halfway marker (simulation 3): the $400 balance curve (ink, about 1,100 × 600 px, months 0 to 60) with the bike thumbnail at the top left. Task strip: "How much is still owed after 2 years?" Givens card: "P = $20,000", "r = 0.006", "M = $400", "n = 24". A marker rides the curve from 0 to 24 months with live readouts (52 px) "balance owing" and "paid off so far". Rows: "A₂₄ = 20 000(1.006)²⁴ − 400(1.006²⁴ − 1)/0.006" with grey readouts "1.006²⁴ ≈ 1.1544", "23 087.75" and "10 292.49"; on "cents" (bold) "= $12,795.26" in a green frame, the marker readouts settling at "$12,795.26" and "$7,204.74". On "forty per cent of the time" two short bars under the graph: grey "time: 24 of 60 = 40%" and teal "paid off: 36%", hand tag "40% of the time, 36% paid off". On "most interest" the month-1 split bar (amber $120.00, teal $280.00) reappears beside the start of the curve.

### 8. memory aid
> Here's the one idea behind all four calculations. Paid off means A sub n equals zero. Set it to zero, then solve for what's **missing**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"), the motorbike icon at its left edge. The main line writes large, 56 px: "Paid off means Aₙ = 0. Set it to zero, then solve for what's missing." Four keyed slots under it (36 px): "n: logs, then round up", "M: solve Aₙ = 0 for M", "still owing: A_k with the real M", "total: add the repayments". On "missing" (bold) the four slots pulse in turn. Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A loan of two hundred and fifty thousand dollars has interest at six per cent a year, compounded monthly. It's repaid in equal monthly repayments over twenty years. Find the monthly repayment, to the nearest cent, and the total amount paid. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A loan of $250,000 has interest at 6% p.a., compounded monthly. It is repaid in equal monthly repayments over 20 years. (a) Find the monthly repayment, to the nearest cent. (b) Find the total amount paid." The full question stays on screen. Picture slot (about 420 × 260 px): a coded sketch of a balance curve from "$250,000" to "$0" at "20 years", with "M = ?" on it (no rate per month, no n). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Here r is half a per cent a month and n is two hundred and forty, so P r is one thousand two hundred and fifty. So M is one thousand two hundred and fifty, times one point zero zero five to the two hundred and forty, over that power minus one. That's one thousand seven hundred and ninety-one dollars eight **cents**, and the total paid is four hundred and twenty-nine thousand, eight hundred and fifty-nine dollars **twenty**. Two hundred and fifty thousand over two hundred and forty is wrong. It doesn't even cover the first month's **interest**.

Visual: the card shrinks to the top (30 px). `GivensStrip` (44 px): "P = $250,000", "r = 0.06 ÷ 12 = 0.005", "n = 20 × 12 = 240", "Pr = 1250" ("$250,000", "6% p.a., compounded monthly", "over 20 years", "to the nearest cent" underlined as used). Grey readout "1.005²⁴⁰ ≈ 3.3102". Row (52 px) "M = 1250 × 1.005²⁴⁰ / (1.005²⁴⁰ − 1)"; on "cents" (bold) "= $1,791.08" in a green frame. On "twenty" (bold) "(b) 240 × 1,791.08 = $429,859.20" in a green frame ("total amount paid" underlined). On "interest" (bold) a red slip "250 000 ÷ 240 ≈ $1,041.67" writes and is crossed, red hand caption "less than the first month's interest, $1,250". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A loan of eighteen thousand dollars has interest at six per cent a year, compounded monthly. It's repaid at five hundred dollars a month. How many monthly repayments are needed to repay the loan? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A loan of $18,000 has interest at 6% p.a., compounded monthly. It is repaid at $500 per month. How many monthly repayments are needed to repay the loan?" The full question stays on screen. Picture slot: the swing tag plate (about 320 px tall) with only the question's givens on it ("Loan $18,000", "6% p.a., monthly", "$500 a month", "Paid off after: ?"). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> The first month's interest is ninety dollars, so one point zero zero five to the n is five hundred over four hundred and ten, which is fifty over forty-one. Taking logs, n is about thirty-nine point seven **nine**. Round up, so it's forty repayments. Thirty-nine is wrong. After thirty-nine repayments, there's still about three hundred and ninety-three dollars **owing**.

Visual: the card shrinks to the top. `GivensStrip`: "P = $18,000", "r = 0.005", "M = $500" ("$18,000", "6% p.a., compounded monthly", "$500 per month" and "How many monthly repayments" underlined as used). Rows (52 px): "Pr = 18 000 × 0.005 = 90"; "(1.005)ⁿ = 500 / (500 − 90) = 50/41"; on "nine" (bold) "n = log(50/41) / log 1.005" with grey "≈ 39.79"; "40 repayments" in a green frame. On "owing" (bold) a red slip "39 repayments" writes and is crossed, red hand caption "A₃₉ ≈ $392.91 still owed". Hold about 1 s.

### 13. handoff
> So one formula answers all four questions, once you set the balance to zero. Now turn the money around. Instead of borrowing, you save towards your first apartment: two hundred dollars at the end of every month, in an account that earns interest. How much will you have after five **years**?

Visual: the memory card shows small at the top, then fades on "Now turn the money around". Board clears to f12's anchor: the painted wall calendar `ma12-wall-calendar-v1.png` (about 520 px tall, solid) at the left, the painted apartment building `ma12-apartment-building-v1.png` (about 480 px tall) at the right with a small dashed ink "goal" tag, and between them a `PeriodTimeline` in `depositMode`: "t = 0: $0 saved"; blue "+$200" arrows at the ends of months 1 to 4, with amber "×(1 + r)" arcs between them (bars grow a little faster than the deposits alone); "?" tabs to "after 5 years: ?". On "years" (bold) chips "Next: saving with regular deposits" and "?". No formula, no rate value and no "annuity" word. Hold about 2 s. This is f12's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Repaid means Aₙ = 0.
- Term: (1 + r)ⁿ = M ÷ (M − Pr); round n up.
- Repayment: M = Pr(1 + r)ⁿ ÷ [(1 + r)ⁿ − 1].
- Still owing after k repayments: A_k with the real M.
- Total paid = all repayments; interest = total − P.

Memory aid (framed card, right half of the notes screen, as in scene 8): *Paid off means Aₙ = 0. Set it to zero, then solve for what's missing.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (1 s) to scene 13's frame exactly (the calendar, the apartment building with its "goal" tag, the deposit strip from "t = 0: $0 saved" with blue "+$200" arrows and amber "×(1 + r)" arcs, "after 5 years: ?", the chips "Next: saving with regular deposits" and "?"). This is the final frame and f12's opening frame.

## Teaching checks

- **Does it explain causes?** Why P ÷ n fails: it does not cover the first month's interest (1). Why Aₙ = 0: "repaid" means nothing is owed (2). Why the rearranged M has that shape: the repayments with their interest exactly cancel the loan's growth (3). Why $1,791.08 is above $1,500: it covers interest and some debt (4). Why the interest is so large: the total of 240 repayments far exceeds the principal (5). Why two thirds is still owed halfway: early repayments are mostly interest (6). Why logs: n is in the power; why M > Pr: otherwise no power can equal a negative (7). Why round up: 59 repayments leave $248.38 (8).
- **Misconceptions addressed:** P ÷ n (hook; A1 crossed); the formula as a memorised black box (3); half the time, half the debt (6); logs of a negative when M ≤ Pr (7); rounding n to the nearest or down (8; A2 crossed); total paid = term × M when the last repayment is smaller (8).
- **One idea at a time:** one loan for scenes 1 to 6, a second for 7 and 8; each of the four quantities gets its own scene; the `SolveForPanel` keeps the closed form fixed while one slot is the unknown.
- **Video makes it easier:** the student sees the guess's bar overflowed by the first month's interest (1), sees the red repayment term slide across to balance the loan's growth (3), sees 240 bars compress into one total split into principal and interest (5), sees the marker halfway along a curve well above the half line (6), watches n drop out of the power (7), and sees the 60th row carry a smaller final repayment (8). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand and given (with units) visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 27 s and 28 s (scenes 11 and 13).
- **Avoided double teaching:** f09's closed form is recalled as one line and used; f10's M > Pr is recalled as a chip; Year 11 log of a power is used in one phrase.
- **Syllabus coverage:** `ci1c82cea2` ("equal periodic repayments": 2 to 4, A1; "the total amount paid": 5, 8; "the amount still owing": 6; "the time taken to repay the loan": 7, 8, A2; key notes 1 to 4).
- **Out of scope by design:** present value and annuities (f12 to f15); maximum borrowing (later practice video); affordability, offset accounts and rate changes during a loan.

## Practice questions and model answers

**Attempt 1 (scene 9; site lesson 13 Problem 3 numbers, original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A loan of $250,000 has interest at 6% p.a., compounded monthly. It is repaid in equal monthly repayments over 20 years. (a) Find the monthly repayment, to the nearest cent. (b) Find the total amount paid."
Model answer: r = 0.005, n = 240, Pr = 1250; setting A₂₄₀ = 0 gives M = Pr(1 + r)ⁿ/[(1 + r)ⁿ − 1] = 1250 × 1.005²⁴⁰/(1.005²⁴⁰ − 1) = 1,791.0776… = $1,791.08. Total paid = 240 × $1,791.08 = $429,859.20. Classic mistake (crossed): "$1,041.67" (250 000 ÷ 240; less than the first month's interest of $1,250).

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "A loan of $18,000 has interest at 6% p.a., compounded monthly. It is repaid at $500 per month. How many monthly repayments are needed to repay the loan?"
Model answer: Pr = 90; setting Aₙ = 0 gives (1.005)ⁿ = 500/410 = 50/41; n = log(50/41)/log 1.005 ≈ 39.79, so 40 repayments (after 39, $392.91 is still owed). Classic mistake (crossed): "39" (rounded down).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook (site Problem 3) | $250,000; 6% p.a. monthly; 20 years; n = 240; guess $1,041.67; first interest $1,250 | 1 |
| Repayment | Pr = 1250; 1.005²⁴⁰ ≈ 3.3102; M = $1,791.08 (nearest cent); month 1 split $1,250.00 / $541.08 | 2 to 4 |
| Totals | 240 × 1,791.08 = $429,859.20; interest $179,859.20 (≈ 0.72 of P) | 5 |
| Owing after 10 years | 1.005¹²⁰ ≈ 1.8194; 454 849.18 − 293 521.02 = $161,328.16 (≈ 0.65 of P) | 6 |
| Term (site card 05) | $20,000; r = 0.006; M = $400; Pr = 120; 280(1.006)ⁿ = 400; (1.006)ⁿ = 10/7; n ≈ 59.62 | 7 |
| Round up | A₅₉ = $248.38; interest $1.49; final $249.87; 60 repayments; total $23,849.87 (60 × 400 = $24,000 grey) | 8 |
| A1 | Pr = 120; 1.005⁶⁰ ≈ 1.3489; M = $463.99; crossed $400 | 10, 11 |
| A2 | Pr = 90; 50/41; n ≈ 39.79; 40 repayments; crossed 39 (A₃₉ ≈ $392.91) | 12, 13 |
| Handoff | +$200 at the end of each month; ×(1 + r); after 5 years: ? | 14 |

**Revision 2 additions (recalculated in Python with exact fractions, 7 Nov):**

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook race | no interest: 50 repayments; with interest: 60 (A₅₀ = $3,729.70 still owed after 50; final $249.87) | 1 |
| Card 05 totals | total $23,849.87; interest $3,849.87 | 1, 4 |
| 4-year repayment | Pr = 120; 1.006⁴⁸ = 1.3326100…; M = 480.7829… = $480.78; 48 × 480.78 = $23,077.44; interest $3,077.44; difference from $23,849.87: $772.43 ("about seven hundred and seventy dollars"); +$80.78 a month (author note: with $480.78 the 48th repayment is $480.94, total $23,077.60) | 5, 6 |
| Owing after 2 years at $400 | 1.006²⁴ = 1.1543873…; 20 000 × 1.006²⁴ = 23 087.75; 400(1.006²⁴ − 1)/0.006 = 10 292.49; A₂₄ = $12,795.26; paid off $7,204.74 = 36.0%; time 24/60 = 40% | 7 |
| A1 (site Problem 3) | M = $1,791.08; total $429,859.20; crossed $1,041.67 | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Checked in Python with exact fractions and a row-by-row recurrence (2 Nov, isolated run); Codex to re-check.

- 250 000 ÷ 240 = 1 041.666…; 250 000 × 0.005 = 1 250.
- 1.005²⁴⁰ = 3.310204…; M = 1 250 × 3.310204/2.310204 = 1 791.0776 → 1 791.08; 1 791.08 − 1 250 = 541.08.
- 240 × 1 791.08 = 429 859.20; 429 859.20 − 250 000 = 179 859.20.
- 1.005¹²⁰ = 1.819397; 250 000 × 1.819397 = 454 849.18; 1 791.08 × 0.819397/0.005 = 293 521.02; A₁₂₀ = 161 328.16.
- 20 000 × 0.006 = 120; 400 − 120 = 280; 400/280 = 10/7; ln(10/7)/ln(1.006) = 59.624; A₅₉ = 248.38; 248.3838 × 0.006 = 1.49; 248.3838 × 1.006 = 249.87; 59 × 400 + 249.87 = 23 849.87.
- A1: 1.005⁶⁰ = 1.348850; 120 × 1.348850/0.348850 = 463.99.
- A2: 18 000 × 0.005 = 90; 500/410 = 50/41; ln(50/41)/ln(1.005) = 39.79; A₃₉ = 392.91.

- Revision 2: A₅₀ for $20,000, r = 0.006, M = 400 (the hook race readout at 50): 3 729.70 (Codex to confirm).
- M for n = 48: 20 000 × 0.006 × 1.006⁴⁸/(1.006⁴⁸ − 1) = 480.7829 → 480.78; balance after 47 repayments of 480.78 is 478.07, so the 48th is 478.07 × 1.006 = 480.94.
- A₂₄ = 20 000(1.006)²⁴ − 400(1.006²⁴ − 1)/0.006 = 12 795.26; 7 204.74/20 000 = 0.3602.
- 48 × 480.78 = 23 077.44; 23 849.87 − 23 077.44 = 772.43.

## Memory aid check

- **"Paid off means Aₙ = 0. Set it to zero, then solve for what's missing."** Original. Meaning, as said in scene 9: every loan calculation in this video starts from the closed form with the end balance zero, then isolates the unknown. Assumptions checked: equal repayments at the end of each period, interest compounding once per period at r (f09's model); the "amount still owing" calculation does not set Aₙ = 0 but evaluates A_k at the actual M, which the aid's slots make explicit ("owing: A_k with the real M"; key note 3); solving for n needs M > Pr (key note 4). It helps a new case: the maximum amount borrowable for a fixed M and n is the same equation solved for P. Introduced after the four calculations (2 to 8).
- **Considered, not used:** a "formula triangle" for M, P and n (hides the cause); "round n up, always" alone (kept inside key note 4 with its reason).

- **Revision 2 note.** The aid is unchanged; the card now lists the four slots in the lesson's new order (n first, then M, still owing and total).

## Narration length estimate

Revision 2 (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " inside the scene, joined with a space, bold markers removed; the total is the sum of the scene strings): **5,636 characters**, 14 scenes. Characters per scene (1 to 14): 578, 422, 551, 664, 436, 532, 558, 132, 273, 537, 227, 364, 287, 75.

At 13.3 characters per second the speech outside the notes scene is about 418 s. Holds and settling: the hook's 3 s prediction; two 10 s countdowns (20 s); the memory-aid hold (2 s); two feedback holds (2 s); the handoff hold (2 s); settling for the hook race (about 6 s beyond its speech), the round-up strip (4), the dial (5) and the marker (7), about 14 s in all; the key-notes scene fixed at 45 s. Total **about 506 s**, under the 570 s cap with about 64 s spare.

Reserve trims if the voiced take runs long: scene 7's last sentence after "cents" (keep the bars silent; about 9 s); scene 6's "That's about eighty dollars more each month." (keep the chip; about 3 s). Do not cut below 5,500 characters without replacing content.

## Scene list and build ids

Lesson key `m-a12f11` (route math-a12-f11). Suggested explainer folder `src/explainer/lessons/math-a12-f11` and build folder `docs/production/claude-pm/lessons/m-a12f11` (root to confirm when adding the LESSONS entry).

In order (Revision 2; kebab-case; 14 scene headings, all `### N.`): hook-race, paid-off-zero, solve-term, round-up-total, turn-around-repayment, repayment-total, still-owing, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies five bullets and the card). Transitions (`pickTransition`): f10's last frame continues into scene 1 (camera continue; the graph frame gives way to the racing bars on "the race"); 1 to 2 clear change to the board (bike thumbnail kept); 2 to 3 camera continue; 3 to 4 clear change (round-up strip); 4 to 5 clear change (the dial on the tag); 5 to 6 camera continue; 6 to 7 clear change (marker on the curve); 7 to 8 clear change to the card; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: hook prediction (3 s); attempt-1, attempt-2 (10 s countdown after the speech, ring full from "Pause here to answer."). key-notes is the quiet notes hold, fixed at 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12f11-learning-review.md`, `science_check` = `checks/m-a12f11-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, actual appearance): `public/assets/biology/y11-banknote-v1.png` and `y11-coins-v1.png` (decorative money, no loan or vehicle), `y11-laptop-blank-v1.png` (f10's calculator), the Physics bike plates `y11c-bike-frame-v1.png` and `y11c-bike-wheel-v1.png` (a bicycle in d06; not a motorbike). No motorbike or price-tag plate exists.

Need (painted, new; see the Codex asset brief): `ma12-motorbike-v1.png`, `ma12-swing-tag-v1.png` (also f10's handoff frame).

Uses f12's plates in the handoff frame: `ma12-wall-calendar-v1.png`, `ma12-apartment-building-v1.png` (briefed in `math-a12-f12.md`).

Coded (studio kit): `LoanBalanceBar` (with an interest-free ghost), `SolveForPanel`, `BalanceTable`, `RepaymentSplit`, `LoanBalanceGraph` with a riding marker, `ParameterSlider` on the tag, `PlateFields` for the tag's lines, `WorkingBoard` parts, `LiveReadoutBoard`, `HandTag`, `MemoryAidCard`, `QuestionCard` with `GivensStrip`, countdown, `KeyNotesScreen`. No coded cartoon of a motorbike or tag.

### Studio kit use and additions

From f09 and f10: `moneyEngine`, `LoanBalanceBar`, `BalanceTable`, `RepaymentSplit`, `LoanBalanceGraph`, `PlateFields`, `ScreenApp`.

New in f11:
1. **`LoanBalanceBar` ghost mode**: a second, dashed bar that runs the same repayments with r = 0, on the same counter (the hook race).
2. **`SolveForPanel`** at studio sizes (Revision 1 part below): the unknown's slot outlined grey with "?"; terms slide across the equals sign; the power n slides down in front of the log.
3. **`TargetDial`**: a `ParameterSlider` bound to a target (here "$0 at 48 months") that sweeps, slows and settles on the engine's solution, with the curve's end point following it.

## Codex asset brief (Maths A12 F11, a used motorbike on a personal loan)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-f11.md`. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on black and on white); ink and watercolour in the house style of the Module 5 Biology plates and the f09 plates; at least 8 per cent clear margin; no text, labels, letters, numbers, logos, brand names, number plates, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-motorbike-v1.png` (2400 × 1500 px): one ordinary used road motorbike (a commuter or learner-approved size), side view facing right, on its side stand, muted dark green or grey paint with light wear, plain spoked or cast wheels, no rider, helmet or luggage. No badge or brand shapes on the tank; blank number plate.
2. `ma12-swing-tag-v1.png` (1000 × 1600 px): one plain card swing tag, the kind tied to a vehicle or product for sale, upright, with a punched hole and a short loop of string at the top, off-white card with a thin printed border. Its face is **blank** apart from four evenly spaced faint ruled lines for code to fill; report the face's rectangle and each line's position in pixels in the hand-in. No price, text, logo or barcode.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px wide, plus the alpha check and the tag's measured rectangles. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-f11-provenance.json`.

### Revision 1 coded part specification (kept; colours now follow the Revision 2 roles, and every part is built as a studio kit part)

No painted plate is needed (programme decision 5; no people, no bank branding). Coded kit parts for the finance-parts kit brief (with f09's four and f10's three), in `src/explainer/math/`, exported through `kit.tsx`, with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample. All values come from f09's shared loan engine; the repayment solver (M from P, r, n) and the term solver (n from P, r, M, plus whole repayments and final payment) are added to the engine and checked against the row-by-row recurrence.

1. **`SolveForPanel`** (scenes 2, 3, 7; later annuity videos). A fixed equation with labelled slots (P, r, n, M, Aₙ), each fillable from the givens chip with a slide-in; one slot outlined amber as the unknown. Below it, `moves` ({type: 'moveAcross' | 'multiplyBoth' | 'divideBoth' | 'takeLogs' | 'dropPower', term, at}) animate one row at a time: a term sliding across the equals sign with its sign changing, a factor appearing on both sides, a bracket dropping under, an exponent n sliding down in front of a log. Optional `balanceBeam` icon (level pans for "these two sides are equal"). Checks: the scene 3 general rearrangement ends at M = Pr(1 + r)ⁿ/[(1 + r)ⁿ − 1]; scene 7 ends at n = log(10/7)/log 1.006; every displayed row is algebraically equal to the one before (symbolic check in the pilot).
2. **`TotalStack`** (a `RepaymentSplit` behaviour, scene 5). n thin equal bars (grouped visually by year for n = 240) compress into one total bar whose height equals n × M, which then splits into a principal part (P) and an interest part (total − P), with cent labels. Checks: 240 × 1 791.08 = 429 859.20 and the split 250 000 / 179 859.20.
3. **`PeriodTimeline` `depositMode`** (scene 14; f12 to f15). From "t = 0: $0 saved", green "+D" deposit arcs at period ends and amber "×(1 + r)" arcs between them; `shownThrough` with "?" tabs; no values unless supplied. It is the mirror of `loanMode` (deposit adds instead of subtracting). Checks: the strip draws without numbers for the handoff; with D = 200 and r = 0.005 the pilot values (200, 401, 603.01) match the recurrence Aₙ₊₁ = (1 + r)Aₙ + D (author check only).
4. **Loan engine solvers.** `repaymentFor(P, r, n)` (exact, then rounded to the nearest cent on request) and `termFor(P, r, M)` returning {exactN, wholeRepayments, finalRepayment, totalPaid}; throw if M ≤ Pr. Checks: (250 000, 0.005, 240) → 1 791.08; (24 000, 0.005, 60) → 463.99; (20 000, 0.006, 400) → 59.62, 60, 249.87, 23 849.87; (18 000, 0.005, 500) → 39.79, 40.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table, to the cent.
2. Confirm the syllabus quote matches the official 2024 text, and that no site module label appears in learner copy or metadata.
3. Confirm each rearranging row (scenes 3 and 7) is equivalent to the one before, and the grey equivalent form M = Pr/[1 − (1 + r)⁻ⁿ].
4. Confirm the scope of learner-visible general claims: "repaid means Aₙ = 0" (2, key note 1); "the amount still owing uses the actual repayment" (6, key note 3); "the term formula needs M > Pr" (7, key note 4); "always round the term up; the last repayment is smaller" (8, key note 4; when n is not a whole number).
5. Confirm every rounding is stated (M to the nearest cent; A₁₂₀ with the rounded M; the final repayment to the cent), and that exact forms (10/7, 50/41) are kept in the algebra with decimals only in grey.
6. Confirm both attempts carry every demand and unit, are original in wording, and that neither card shows a formula, r per month or n.
7. Confirm the opening matches f10's scene 13 exactly and the handoff (scene 14) gives no formula, rate or "annuity" word; scene 15 returns to it.
8. Confirm no people, bank names or logos appear in any visual.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.

11. Revision 2: confirm the new order (term, total, repayment, still owing) keeps every site value from card 05 and Problem 3 unchanged; confirm the hook race values (50 without interest; A₅₀ = $3,729.70; 60 with interest) and every Revision 2 addition; confirm the "total = 48 × M" convention is stated as such and the 48th-repayment adjustment stays in the author notes; confirm the colour roles (the unknown's slot is grey, not amber; mistake red only on crossed slips); confirm question-card pictures give nothing away; confirm the five one-line key notes and the 1,350-frame notes scene; confirm the opening matches f10 Revision 2 scene 13 and the handoff frame matches f12 Revision 2 scene 1.

## YouTube metadata (draft)

Title: Loan Repayments, Amount Owing, Term and Total Paid | Year 12 Maths Advanced

(Title length: 76 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/financial-mathematics/lesson13.sa.html

Borrow $250,000 at 6% a year over 20 years. Is the repayment about $1,042 (250,000 ÷ 240)? No: the first month's interest alone is $1,250. See how setting the balance to zero turns the loan formula into the repayment, M = Pr(1 + r)ⁿ / [(1 + r)ⁿ − 1], giving $1,791.08 a month; how to find the total paid ($429,859.20) and the interest ($179,859.20); why about two thirds of the loan is still owed after 10 years; and how logarithms find the time to repay, why it needs the repayment to beat the interest, and why you always round the term up. A memory aid: paid off means Aₙ = 0. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, financial mathematics.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Solve problems that involve reducing balance loans by calculating the total amount paid, equal periodic repayments, the amount still owing and the time taken to repay the loan"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

Builds on: Reducing-balance loans month by month, and how rate and repayment changes alter the term (previous videos). Also on the site: https://hscscience.com.au/subjects/maths-advanced/year12/financial-mathematics/lesson12.sa.html. Next: What cash flows define an annuity?

#Year12Maths #MathsAdvanced #FinancialMaths #HSCScience

## Open decisions

- **1. f12's opening frame (root).** f12 has no design yet. Scene 14 assumes f12 opens on a savings timeline with $200 end-of-month deposits and interest between them ("after 5 years: ?"). If f12 opens on a different picture or numbers, change scene 14's third and fourth sentences and its strip.
- **2. Final repayment detail (learning review).** Scene 8 shows the exact final repayment ($249.87) and total ($23,849.87), with "60 × 400 = $24,000" in grey. HSC questions often accept n × M for the total; confirm that showing the exact final repayment helps rather than crowds, or keep only "round up" and the 59-repayment check (−about 190 characters).
- **3. "log" or "ln" (maths check, voice pilot).** Rows use "log" (base-agnostic), with "ln" as a grey alternative; the voice says "log". Confirm against the series convention from f05 and f08.
- **4. Present value form (root).** The grey equivalent M = Pr/[1 − (1 + r)⁻ⁿ] (the site's form) is shown once and not spoken. Confirm, or drop it until the annuity videos.
- **5. Site link form.** `.sa.html` form (root decision 15).

- **Revision 2 (root).** (a) Order changed to term first, on the site's own card 05 loan, so one anchor carries all four calculations; the site's Problem 3 moves to A1 with its numbers unchanged. (b) The original A1 ($24,000 "car loan", $463.99) is dropped, since f09's anchor is a car loan and the M skill is now in scenes 5 and 6. (c) f12's plates appear in this lesson's final frame, so they must be painted before the f11 build.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f09's closed form and f10's M > Pr; check that "repaid means zero" is said before any rearranging; that each rearranging move has its reason; that the hook's guess is crossed by the visible interest; that the amount owing uses the actual repayment; that the log step and the M > Pr condition are clear for a student starting Year 12; that rounding up is proven by the 59-repayment balance; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The overflowing guess bar, the sliding repayment term, the total stack, the halfway marker, the falling power and the final row carry the explanation; judge them at playback speed in the voiced preview. Every bar, row and readout must come from the same loan engine.
- The opening frame is f10's scene 13 (same designer). Scene 14 must match f12's opening when f12 is designed.

## Revision 2 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov).

- **Anchor:** a used motorbike bought with a personal loan (site lesson 13 card 05's $20,000 at 7.2% p.a. monthly, $400 a month), shown as a painted motorbike and a painted swing tag with coded lines. One loan carries the four calculations in the point: the term (60 repayments, the last $249.87), the total paid and interest ($23,849.87, $3,849.87), the repayment for 4 years ($480.78) and the amount owing after 2 years ($12,795.26).
- **Simulations:** (1) the hook race: an interest-free ghost bar empties at 50 while the real bar, gaining interest each month, lasts to 60; (2) the repayment dial on the tag sweeping until the balance curve lands on $0 at 48 months; (3) a marker riding the balance curve to 24 months with live readouts.
- **Colour roles:** as f09 (balance ink, interest amber, repayment teal, deposits blue in the handoff, answer green, mistake red on crossed slips only); the unknown's slot is grey ink with "?".
- **Plates:** new `ma12-motorbike-v1`, `ma12-swing-tag-v1`; f12's `ma12-wall-calendar-v1` and `ma12-apartment-building-v1` in the handoff.
- **Narration changes:** all scenes except attempt 2, feedback 2 and the notes are new or reordered (term first; the motorbike throughout; A1 now site Problem 3; the handoff names the apartment). The card 05 sentences keep their Revision 1 wording. Scene count 15 → 14 (the separate "rounding up" and "total" scenes merge into scene 4).
- **Counts:** 6,026 (sum of Revision 1 scene strings; stated as 6,040 joined) → **5,636** characters; about 555 s (60 s notes hold) → **about 506 s** (45 s notes scene).
- **Kit additions:** `LoanBalanceBar` ghost mode, studio `SolveForPanel`, `TargetDial`.
- **Joins:** opens on f10 Revision 2's motorbike frame; ends on f12's apartment-savings frame.
