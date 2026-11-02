# Maths A12 F11: How do we find repayments, balances, term and total paid? Set the balance to zero, solve for the repayment, count the total, find what is still owing, and solve for the term with logarithms (design)

Status: Revision 1 (2 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the maths kit (briefs 129, 131, 133, 135 and 143), the sequence parts from f01 to f08, the finance parts specified in `math-a12-f09.md` (`BalanceTable`, `LoanBalanceGraph`, `RepaymentSplit`, `PeriodTimeline` `loanMode`) and `math-a12-f10.md` (`LoanTermCurve`, `ToolPanel` table mode), plus one new part specified below (`SolveForPanel`) and a deposit mode for `PeriodTimeline`. Nothing recorded; human listening pending.

Narration 6,040 characters, 15 scenes, about 555 s (9.3 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: third video of the Year 12 Mathematics Advanced financial mathematics strand (course outline playlist order 48), after f10 (rate and repayment effects on the term) and before f12 (what cash flows define an annuity). Templates: `math-a12-i05.md` and `math-a12-d10.md` (via `math-a12-f04.md`): same section structure, voice, paper style and coded maths visuals; no painted plates, no people, no bank names or logos. No brief 151 pack and no route-inputs-3 entry exist for f11 (checked 2 Nov); pack work done here. Site lessons read (2 Nov, read-only): `financial-mathematics/lesson13.sa.html`, SHA256 `827aaa5b52f4c4ea8ba4e775b82d6cc65c1527e46206f23721a396dbfca7a479` (hook, cards 04 and 05, Problems 1 to 3, traps 01 to 03, SA Q1 to Q3); `lesson12.sa.html`, SHA256 `3421ed0f7375f5753005a8531ddf98df46232122ee5381f7af4ae11bd48deffa` (the recurrence and its closed form, from f09). Every number recalculated in Python with exact fractions and a row-by-row recurrence. Course outline entry: `math-a12-f11` (one content point, site sources lessons 12 and 13).

Owner rules applied: as f01 to f10 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens with units separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; exact values in the algebra (10/7, 50/41), decimals only in grey readouts except money; money to the cent with every rounding stated; attempt cards give nothing away; opens on f10's handoff frame; f09's closed form and f10's M > Pr condition recalled by use, not re-taught).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Financial mathematics, Reducing balance loans; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci1c82cea2`: "Solve problems that involve reducing balance loans by calculating the total amount paid, equal periodic repayments, the amount still owing and the time taken to repay the loan"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048

**Boundary:** starts from f10's last frame (scene 13 of `math-a12-f10.md`: a `LoanBalanceGraph` with givens chip "$250,000; 6% p.a., compounded monthly; 20 years", a dashed curve from $250,000 to "$0 after 20 years", chips "M = ?", "Next: find the repayment exactly" and "?"); states "repaid" as Aₙ = 0; rearranges f09's closed form for M; finds the repayment for site Problem 3; finds the total amount paid and the interest; finds the amount still owing after 10 years; rearranges Aₙ = 0 for n with logarithms (site card 05 example) and explains rounding the term up, with the final smaller repayment and the exact total paid. Stops at the four calculations for a single loan. Not taught: present value of an annuity and the site's PV form of the formula (f12 to f15; shown once as a grey equivalent only); maximum borrowing from a budget (site Problem 2; same rearrangement, later practice video); affordability rules and offset accounts (not 2024 points); changes of rate during a loan (outside the point).

## Decisions

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

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as f09, f10): balances blue; interest amber; repayments red; debt paid off teal; the unknown slot outlined in amber; reference lines red dashed; crossed chips red; current algebra line bright, earlier lines dim; deposits (handoff only) green.

### 1. hook (more or less than $1,500?)
> Here's a loan of two hundred and fifty thousand dollars at six per cent a year, compounded monthly, to be repaid in equal monthly repayments over twenty years. That's two hundred and forty repayments. A quick guess is two hundred and fifty thousand divided by two hundred and forty, about one thousand and forty-two dollars. But the first month's interest alone is one thousand two hundred and fifty dollars. So that guess wouldn't even cover the interest. Is the real repayment more or less than fifteen hundred dollars? Make a **guess**.

Visual: opens on f10's last frame exactly (f10 scene 13: the `LoanBalanceGraph`, givens chip "$250,000; 6% p.a., compounded monthly; 20 years", the dashed curve from $250,000 to "$0 after 20 years", chips "M = ?", "Next: find the repayment exactly" and "?"). Heading writes on: "How do we find repayments, balances, term and total paid?" as the "Next" chips fade; "M = ?" stays. On "two hundred and forty repayments" a grey tag "n = 20 × 12 = 240". On "A quick guess" a grey chip "250 000 ÷ 240 ≈ $1,041.67". On "interest alone" a `RepaymentSplit` bar: the amber interest "$1,250" overflows a "$1,041.67" bar, the overflow red; on "wouldn't even cover" the guess chip is crossed (caption "less than the first month's interest"). On "guess" (bold) a chip "more or less than $1,500?" and a 3 s prediction ring (no number); the chip stays to scene 4.

### 2. paid off means zero
> So how do we find it exactly? Start with what repaid means. After the last repayment, the balance is zero. And we already have a formula for the balance after n repayments. A sub n equals P times one plus r to the n, minus M times one plus r to the n, minus one, all over r. Here P is two hundred and fifty thousand, r is half a per cent a month, and n is two hundred and forty. So we set A two hundred and forty equal to **zero**, and the only unknown left is M.

Visual: camera continue. The dashed curve's end point pins to the time axis with a tag "A₂₄₀ = 0". A `SolveForPanel` writes in the right column: "Aₙ = P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r" (grey tag "from reducing-balance loans"). Givens chip above it: "P = $250,000; r = 0.06 ÷ 12 = 0.005; n = 240". On each given the matching slot fills (P, r, n in blue); M's slot outlines in amber. On "zero" (bold) the left side becomes "0 = 250 000(1.005)²⁴⁰ − M(1.005²⁴⁰ − 1)/0.005".

### 3. rearranging for the repayment
> Now get M on its own, one move at a time. Add the repayment term to both sides, so the loan's growth equals the repayments' growth. That says the repayments, with their interest, exactly cancel what the loan would have grown to. Then multiply both sides by r, and divide by the bracket. That gives M equals P r times one plus r to the n, all over one plus r to the n, minus **one**.

Visual: camera continue (general form, in the `SolveForPanel`). Rows, each move animated: "0 = P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r"; on "Add the repayment term" the red term slides across the equals sign: "P(1 + r)ⁿ = M[(1 + r)ⁿ − 1]/r"; on "exactly cancel" a small balance-beam icon (blue left pan, red right pan, level); on "multiply both sides by r" "Pr(1 + r)ⁿ = M[(1 + r)ⁿ − 1]"; on "divide by the bracket" the bracket drops under; on "one" (bold) boxed "M = Pr(1 + r)ⁿ / [(1 + r)ⁿ − 1]". A grey line beneath: "same as M = Pr / [1 − (1 + r)⁻ⁿ] (divide top and bottom by (1 + r)ⁿ)".

### 4. the repayment
> For our loan, P r is two hundred and fifty thousand times zero point zero zero five, which is one thousand two hundred and fifty, the first month's interest. One point zero zero five to the power two hundred and forty is about three point three one. So M is one thousand two hundred and fifty, times that power, over the power minus one. That's one thousand seven hundred and ninety-one dollars eight **cents**, to the nearest cent. It's more than fifteen hundred, because each repayment covers that month's interest and pays down some of the debt as well.

Visual: camera continue. Rows: "Pr = 250 000 × 0.005 = 1250" (tag "first month's interest"); grey readout "1.005²⁴⁰ ≈ 3.3102"; "M = 1250 × 1.005²⁴⁰ / (1.005²⁴⁰ − 1)"; on "cents" (bold) "= $1,791.08 (to the nearest cent)" boxed; the "M = ?" chip on the graph becomes "M = $1,791.08". On "more than fifteen hundred" the hook's chip returns with "more" ringed; a `RepaymentSplit` bar for month 1: amber "$1,250.00", teal "$541.08".

### 5. the total paid
> How much is paid altogether? There are two hundred and forty equal repayments, so the total is two hundred and forty times one thousand seven hundred and ninety-one dollars eight. That's four hundred and twenty-nine thousand, eight hundred and fifty-nine dollars twenty. The interest is the total minus the two hundred and fifty thousand borrowed, so one hundred and seventy-nine thousand, eight hundred and fifty-nine dollars twenty **cents**. That's more than seventy per cent of the amount you borrowed, on top of paying it back.

Visual: clear change (graph shrinks to a small chip). A row of 240 thin red repayment bars (compact, grouped in years) compresses into one tall total bar; rows: "total = 240 × $1,791.08"; "= $429,859.20". On "total minus" the tall bar splits: a blue "principal $250,000" part and an amber "interest" part; row "interest = 429 859.20 − 250 000"; on "cents" (bold) "= $179,859.20" boxed. Grey readout "179 859.20 ÷ 250 000 ≈ 0.72" with tag "more than 70% of the loan".

### 6. the amount still owing
> Now, how much is still owed after ten years? That's after one hundred and twenty repayments, so use the same formula with n equal to one hundred and twenty, and the actual repayment. Two hundred and fifty thousand times one point zero zero five to the one hundred and twenty, minus one thousand seven hundred and ninety-one dollars eight times the bracket, over zero point zero zero five, gives one hundred and sixty-one thousand, three hundred and twenty-eight dollars sixteen **cents**. Halfway through the time, about two thirds of the loan is still owed. That's because the early repayments were mostly interest.

Visual: clear change back to the `LoanBalanceGraph` (now solid, M = $1,791.08). Task strip: "How much is still owed after 10 years?" Givens chip: "P = $250,000; r = 0.005; M = $1,791.08; n = 120". Rows: "A₁₂₀ = 250 000(1.005)¹²⁰ − 1791.08(1.005¹²⁰ − 1)/0.005" with grey readouts "1.005¹²⁰ ≈ 1.8194", "454 849.18" and "293 521.02"; on "cents" (bold) "= $161,328.16" boxed (tag "using the rounded repayment"). A marker runs to 10 years with the readout; a red dashed half line at $125,000 sits below it. On "about two thirds" grey "161 328.16 ÷ 250 000 ≈ 0.65". On "mostly interest" the month-1 split bar from scene 4 reappears beside the start of the curve.

### 7. solving for the term
> The last unknown is the term. Here's a different loan: twenty thousand dollars at seven point two per cent, compounded monthly, repaid at four hundred dollars a month. Set A sub n equal to zero again, but now n is the unknown. Multiply by r, and the first month's interest, one hundred and twenty dollars, appears. Gather the powers, and you get two hundred and eighty times one point zero zero six to the n equals four hundred. So one point zero zero six to the n is ten sevenths. Take logs of both sides, and n comes down from the power. n is log of ten sevenths over log one point zero zero six, about fifty-nine point six **two**. This only works because four hundred is more than the interest. Otherwise the right side would be negative, and no power could equal it.

Visual: clear change (new case). Task strip: "How many monthly repayments are needed to repay the loan?" (site card 05). Givens chip: "P = $20,000; 7.2% p.a., compounded monthly: r = 0.006; M = $400". `SolveForPanel` with n's slot outlined in amber. Rows: "0 = 20 000(1.006)ⁿ − 400(1.006ⁿ − 1)/0.006"; on "Multiply by r" "120(1.006)ⁿ = 400(1.006)ⁿ − 400" (tag "120 = Pr: first month's interest"); on "Gather the powers" "280(1.006)ⁿ = 400"; "(1.006)ⁿ = 10/7"; on "Take logs" "n log 1.006 = log(10/7)" with the n sliding down from the power; on "two" (bold) "n = log(10/7) / log 1.006" with grey "≈ 59.62". On "more than the interest" a general row in grey: "(1 + r)ⁿ = M / (M − Pr): needs M > Pr", and the f10 rule chip "repays only if M > Pr" pulses.

### 8. rounding the term up
> Fifty-nine point six two repayments isn't possible, so which whole number? Check fifty-nine. After fifty-nine repayments, there's still two hundred and forty-eight dollars thirty-eight owing. So the loan needs sixty repayments, and the last one is smaller, just two hundred and forty-nine dollars eighty-seven, once a month's interest is added. Always round the term up. The total actually paid is fifty-nine lots of four hundred, plus that last repayment, which is twenty-three thousand, eight hundred and forty-nine dollars eighty-seven **cents**.

Visual: camera continue (the n row stays bright). A number line with 59, 59.62 (dashed marker), 60. A `BalanceTable` in `ellipsisRows` mode: row 1 ($20,000.00 → $19,720.00), "⋮", row 59 closing "$248.38" (glows), row 60: "owed at start $248.38, interest $1.49, final repayment $249.87, owed at end $0.00" (author note d). On "round the term up" "60 repayments" boxed, with a tag "59 leaves $248.38 owing". On "total actually paid" rows "59 × 400 + 249.87"; on "cents" (bold) "= $23,849.87" boxed, with a grey tag "if every repayment were $400: 60 × 400 = $24,000".

### 9. memory aid
> Here's the one idea behind all four calculations. Paid off means A sub n equals zero. Set it to zero, then solve for what's **missing**.

Visual: the handwritten line writes large: "Paid off means Aₙ = 0. Set it to zero, then solve for what's missing." Under it, four small slots, "M", "n", "A_k", "total", each with a tiny tag: "M: solve Aₙ = 0", "n: logs, round up", "owing: A_k with the real M", "total: repayments added". On "missing" (bold) the four slots pulse in turn. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A car loan of twenty-four thousand dollars has interest at six per cent a year, compounded monthly. It's repaid in equal monthly repayments over five years. Find the monthly repayment, to the nearest cent. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A car loan of $24,000 has interest at 6% p.a., compounded monthly. It is repaid in equal monthly repayments over 5 years. Find the monthly repayment, to the nearest cent." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no formula, no r, no n).

### 11. feedback 1 (brief)
> Here r is half a per cent a month and n is sixty, so P r is one hundred and twenty. One point zero zero five to the sixty is about one point three four nine. So M is one hundred and twenty times that, over that minus one, which is four hundred and sixty-three dollars ninety-nine **cents**. Four hundred dollars is wrong. Dividing by sixty ignores the **interest**.

Visual: card shrinks to the top; "$24,000", "6% p.a., compounded monthly", "over 5 years" and "to the nearest cent" underlined as used. Givens chip "P = 24 000, r = 0.005, n = 60; Pr = 120". Grey readout "1.005⁶⁰ ≈ 1.3489". Row "M = 120 × 1.005⁶⁰ / (1.005⁶⁰ − 1)"; on "cents" (bold) "= $463.99" boxed. On "interest" (bold) a chip "$400" fades in and is crossed (caption "24 000 ÷ 60: interest ignored"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A loan of eighteen thousand dollars has interest at six per cent a year, compounded monthly. It's repaid at five hundred dollars a month. How many monthly repayments are needed to repay the loan? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A loan of $18,000 has interest at 6% p.a., compounded monthly. It is repaid at $500 per month. How many monthly repayments are needed to repay the loan?" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> The first month's interest is ninety dollars, so one point zero zero five to the n is five hundred over four hundred and ten, which is fifty over forty-one. Taking logs, n is about thirty-nine point seven **nine**. Round up, so it's forty repayments. Thirty-nine is wrong. After thirty-nine repayments, there's still about three hundred and ninety-three dollars **owing**.

Visual: card shrinks to the top; "$18,000", "6% p.a., compounded monthly", "$500 per month" and "How many monthly repayments" underlined as used. Rows: "Pr = 18 000 × 0.005 = 90"; "(1.005)ⁿ = 500 / (500 − 90) = 50/41"; on "nine" (bold) "n = log(50/41) / log 1.005" with grey "≈ 39.79"; "40 repayments" boxed. On "owing" (bold) a chip "39" fades in and is crossed (caption "A₃₉ ≈ $392.91 still owed"). Hold about 1 second.

### 14. handoff
> So one formula answers all four questions, once you set the balance to zero. Now turn the money around. Instead of borrowing, you save two hundred dollars at the end of every month, in an account that earns interest. How much will you have after five **years**?

Visual: the memory-aid line shows small at the top, then fades on "Now turn the money around". Board clears to a `PeriodTimeline` in `depositMode`: "t = 0: $0 saved"; green "+$200" arcs at the ends of months 1 to 4, with amber "×(1 + r)" arcs growing the balance between them (bars grow a little faster than the deposits alone); then "?" tabs to "after 5 years: ?". On "years" (bold) chips "Next: saving with regular deposits" and "?". No formula, no rate value and no "annuity" word. Hold about 2 seconds. This is f12's assumed opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Balance after n repayments: Aₙ = P(1 + r)ⁿ − M[(1 + r)ⁿ − 1]/r. Repaid means Aₙ = 0.
2. Repayment: M = Pr(1 + r)ⁿ / [(1 + r)ⁿ − 1] (round to the nearest cent). Total paid = number of repayments × M; interest = total paid − P.
3. Amount still owing after k repayments: A_k, using the actual repayment.
4. Term: (1 + r)ⁿ = M / (M − Pr), so n = log(M / (M − Pr)) / log(1 + r), which needs M > Pr. Round n up; the last repayment is smaller.

Memory aid (large, on the notes screen): *Paid off means Aₙ = 0. Set it to zero, then solve for what's missing.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 14's frame exactly (the deposit timeline from "t = 0: $0 saved" with "+$200" and "×(1 + r)" arcs, "after 5 years: ?", the chips "Next: saving with regular deposits" and "?"). This is the final frame and f12's assumed opening frame.

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

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A car loan of $24,000 has interest at 6% p.a., compounded monthly. It is repaid in equal monthly repayments over 5 years. Find the monthly repayment, to the nearest cent."
Model answer: r = 0.005, n = 60; A₆₀ = 0 gives 24 000(1.005)⁶⁰ = M(1.005⁶⁰ − 1)/0.005, so M = 24 000 × 0.005 × 1.005⁶⁰/(1.005⁶⁰ − 1) = 120 × 1.348850…/0.348850… = $463.99. Classic mistake (crossed): "$400" (24 000 ÷ 60).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "A loan of $18,000 has interest at 6% p.a., compounded monthly. It is repaid at $500 per month. How many monthly repayments are needed to repay the loan?"
Model answer: r = 0.005, Pr = 90; Aₙ = 0 gives (1.005)ⁿ(500 − 90) = 500, so (1.005)ⁿ = 50/41 and n = log(50/41)/log 1.005 ≈ 39.79; round up: 40 repayments (after 39, about $392.91 is still owed). Classic mistake (crossed): "39".

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

## Numbers to verify (all values, repeated for Codex)

Checked in Python with exact fractions and a row-by-row recurrence (2 Nov, isolated run); Codex to re-check.

- 250 000 ÷ 240 = 1 041.666…; 250 000 × 0.005 = 1 250.
- 1.005²⁴⁰ = 3.310204…; M = 1 250 × 3.310204/2.310204 = 1 791.0776 → 1 791.08; 1 791.08 − 1 250 = 541.08.
- 240 × 1 791.08 = 429 859.20; 429 859.20 − 250 000 = 179 859.20.
- 1.005¹²⁰ = 1.819397; 250 000 × 1.819397 = 454 849.18; 1 791.08 × 0.819397/0.005 = 293 521.02; A₁₂₀ = 161 328.16.
- 20 000 × 0.006 = 120; 400 − 120 = 280; 400/280 = 10/7; ln(10/7)/ln(1.006) = 59.624; A₅₉ = 248.38; 248.3838 × 0.006 = 1.49; 248.3838 × 1.006 = 249.87; 59 × 400 + 249.87 = 23 849.87.
- A1: 1.005⁶⁰ = 1.348850; 120 × 1.348850/0.348850 = 463.99.
- A2: 18 000 × 0.005 = 90; 500/410 = 50/41; ln(50/41)/ln(1.005) = 39.79; A₃₉ = 392.91.

## Memory aid check

- **"Paid off means Aₙ = 0. Set it to zero, then solve for what's missing."** Original. Meaning, as said in scene 9: every loan calculation in this video starts from the closed form with the end balance zero, then isolates the unknown. Assumptions checked: equal repayments at the end of each period, interest compounding once per period at r (f09's model); the "amount still owing" calculation does not set Aₙ = 0 but evaluates A_k at the actual M, which the aid's slots make explicit ("owing: A_k with the real M"; key note 3); solving for n needs M > Pr (key note 4). It helps a new case: the maximum amount borrowable for a fixed M and n is the same equation solved for P. Introduced after the four calculations (2 to 8).
- **Considered, not used:** a "formula triangle" for M, P and n (hides the cause); "round n up, always" alone (kept inside key note 4 with its reason).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,040 characters**, 15 scenes. Characters per scene (1 to 15): 535, 459, 378, 552, 528, 612, 767, 545, 132, 238, 357, 227, 364, 257, 75 (the total includes the 14 joining spaces). At 13.3 characters per second the speech is about 454 s; add 3 s for the hook's prediction, about 12 s of settling time for the rearranging moves (3, 7), the total stack (5) and the final-row table (8), 20 s for two countdowns, 5 s of short holds (scenes 9, 11, 13, 14) and about 60 s more of the quiet notes hold (about 100 s of holds): **about 555 s**, inside the band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 5's last sentence (keep the grey tag); scene 7's "Otherwise the right side would be negative, and no power could equal it." (keep the grey row; the condition stays spoken). More than about 540 characters of trims would drop below the 5,500 floor.

## Scene list and build ids

Lesson key `m-a12f11` (route math-a12-f11). Suggested explainer folder `src/explainer/lessons/math-a12-f11` and build folder `docs/production/claude-pm/lessons/m-a12f11` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, paid-off-zero, rearrange-repayment, the-repayment, total-paid, still-owing, solve-term, round-up, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f10's last frame continues into scene 1 (camera continue, same graph); 1 to 2 to 3 to 4 camera continue; 4 to 5 clear change (bars); 5 to 6 clear change (graph); 6 to 7 clear change (new case); 7 to 8 camera continue; 8 to 9 camera pull back to the aid; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: hook prediction (3 s); attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/m-a12f11-learning-review.md`, `science_check` = `checks/m-a12f11-maths-check.md`.

## Assets

Have: no plates. Existing kit used: `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading`. Finance parts from f09 and f10: `LoanBalanceGraph` (end pin, marker, half line), `RepaymentSplit` (overflow), `BalanceTable` (`ellipsisRows`, `finalRow`), `PeriodTimeline` (`loanMode` base).

New parts: `SolveForPanel` and `PeriodTimeline` `depositMode` (below); a `TotalStack` behaviour for scene 5 (below).

## Codex asset brief

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

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f09's closed form and f10's M > Pr; check that "repaid means zero" is said before any rearranging; that each rearranging move has its reason; that the hook's guess is crossed by the visible interest; that the amount owing uses the actual repayment; that the log step and the M > Pr condition are clear for a student starting Year 12; that rounding up is proven by the 59-repayment balance; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The overflowing guess bar, the sliding repayment term, the total stack, the halfway marker, the falling power and the final row carry the explanation; judge them at playback speed in the voiced preview. Every bar, row and readout must come from the same loan engine.
- The opening frame is f10's scene 13 (same designer). Scene 14 must match f12's opening when f12 is designed.
