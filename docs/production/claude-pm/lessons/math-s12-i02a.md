# Maths S12 I02a: How does compound interest earn interest on interest? Interest left in the account, the year-by-year ladder, multiplying by 100% + r%, FV = PV(1 + r)ⁿ, and interest earned = FV − PV (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 33; ruling 29 splits the outline's i02 into i02a, future value, and i02b, working backwards). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,026 characters by script (see "Narration length estimate"), 12 scene headings, about 467 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: second video of the Year 12 Investment and loans strand, outline playlist order 15 (first half, root ruling 29). Shared by Standard 1 and Standard 2 (identical content). Both halves keep the full syllabus point; this half covers the future value and the interest earned. Pre-design pack: `../pre-design/maths-standard/math-s12-i02.md` (the "i02a" half of its split). Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson06.sa.html` (SHA256 `1940cca09f6a14b6bf7159efdce0cf1be5dc27545bd72bf6dcef668cb7635c6e`; card 01's "5% is calculated on $1050 in year two"; card 05's step-by-step $2000 at 5% for 3 years, $2100, $2205, $2315.25 and "Or directly", interest $315.25; card 05's quick check, $4000 at 5% for 6 years; Trap 02, "gives the total amount, not the interest"). Route entry: `math-s12-i02` in `../../programme/maths-standard-route-inputs-2.json`. Visual system: maths studio kit; the reused coin jar and calculator, one new painted plate (a gift envelope); the account, ladder and boards coded.

Owner rules applied: as i01 (2024 syllabus; plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols; plain meanings before terms (compound interest, compounded annually, present value, future value); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a gap-year fund, birthday money, savings); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Investment and loans (Standard 2) and Investment (Standard 1)), quoted from `../../programme/maths-standard-route-inputs-2.json` (text form; the official MathML is in `sourceHtml`):

Standard 2:
- `ci64a24122`: "Calculate the future value, present value or interest rate of a compound interest investment using the formula FV = PV(1 + r)^n where FV = future value of the investment, PV = present value of the investment, r = interest rate per time period and n = number of time periods" (this video: the future value)

Standard 1:
- `cib6fe9f5b`: "Calculate the future value, present value or interest rate of a compound interest investment using the formula FV = PV(1 + r)^n where FV = future value of the investment, PV = present value of the investment, r = interest rate per time period and n = number of time periods" (the same)

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6 (Standard 1)

**Boundary:** starts from i01's final frame exactly (the coded account card "savings account" with its violet balance bar relabelled "$5,200?"; the coin jar `ma12-coin-jar-v1.png` tipping, a teal "$200" stack on a curved arrow back into the account; the amber chip "next year: 4% of $5,200 = ?"; chips "Next: compound interest" and "?"). Recalls i01 (simple interest: paid out, the same every year) and Year 11 (a 5% increase multiplies by 1.05; calculator powers) in a phrase or grey chip each; a05's "multiply by the same number each step" is a grey chip for both courses. Teaches: compound interest as interest added to the balance, so the next period's interest is worked out on a bigger balance (interest on interest); "compounded annually" as once a year; the ladder of × (100% + r%) steps; n steps as the power n; FV = PV(1 + r)ⁿ with PV, FV, r per period as a decimal and n periods; interest earned = FV − PV; typing the whole calculation in one go and rounding money to the cent at the end. Stops at the future value and the interest. Not taught: present value and the rate (i02b); monthly and quarterly compounding (i04); the graph against simple interest (i05).

## Decisions

- **Anchor: birthday money left alone (new painted plate, live).** $2,000 at 5% p.a. compounded annually for 3 years (site card 05's numbers): $2,100, $2,205, $2,315.25; yearly interest $100, $105, $110.25; interest $315.25 against $300 simple. The pack's anchor 2; an eighteenth birthday gift is real and near. Plate: `ms12-gift-envelope-v1.png` (new; a sealed gift envelope with a ribbon, no money or currency visible). The opening pays off i01's question with i01's own gap-year fund (4% of $5,200 = $208), so the first idea lands before the new anchor. No people.
- **Worked example: site card 05's quick check.** $4,000 at 5% for 6 years: FV = 4000 × 1.05⁶ = $5,360.38; interest $1,360.38; crossed "4000 × 1.05 × 6 = 25 200" (caption "× 6 is not to the power 6"). The site gives only the expression; the design computes it (pack section 3: $5360.38).
- **Notation.** FV = PV(1 + r)ⁿ on screen (both syllabuses); the narration says once "some books write A equals P times one plus r to the n" (pack decision). The multiplier is introduced in words first, "a hundred per cent plus five per cent", then "one point zero five" (a06's Revision 2 wording, so learner copy never writes a bare "1 + r" before the formula), and the formula's "(1 + r)" is then read as "one plus r, with r as a decimal".
- **Join.** Scene 1 opens on i01's final frame exactly and answers its chip in the second sentence ($208).
- **Simulations (standard item 3).**
  1. **Left-in interest stacks** (scenes 1, 2; `InterestStack` left-in mode): each year's teal block joins the balance bar instead of dropping into the jar; the next block is taller, its extra sliver (interest on interest) in olive with a hand tag; readouts "interest: $100, $105, $110.25".
  2. **Multiplier ladder** (scene 3; `StudioTermLadder`): "$2,000 → × 1.05 → $2,100 → × 1.05 → $2,205 → × 1.05 → $2,315.25", then the three amber arrows slide together into "× 1.05³", the power counting the arrows.
  3. **Typed in one go** (scene 5; the calculator plate with a coded display): the display shows "4000×1.05^6", then "5360.382563", then the rounded money.
- **Colour roles (fixed for i01 to i05).** Present value PV (and P) **violet**; the rate r and the multiplier 1.05 **amber**; interest earned **teal**; interest on interest (the extra sliver) **olive**; future value FV in ink, framed green when it is the answer; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As i01. Hand tags: "left in", "interest on interest", "worked out on a bigger balance", "100% + 5% = 105%", "× 1.05 each year", "3 years, 3 multiplications", "PV: start", "FV: end", "r as a decimal", "n: number of periods", "FV is the whole balance", "interest = FV − PV", "type it in one go", "to the cent". At most two live at once.
- **Stage changes (standard item 2).** i01's frame answered (1); the gift envelope and the left-in stacks (2); the ladder collapsing into a power (3); the formula strip with tagged parts (4); g01 board and calculator (5); framed card (6); question cards (7 to 10); the phone and its goal ladder for i02b (11); key notes (12).
- **Worked example (g01 layout).** 5: task strip "$4000 is invested at 5% p.a. compounded annually for 6 years. Find the future value and the interest earned."; formula strip "FV = PV(1 + r)ⁿ"; givens card "PV = $4000" (violet), "r = 5% = 0.05" (amber), "n = 6 years"; rows "FV = 4000 × 1.05⁶", "= 5360.3825…", "≈ $5360.38" (framed green), "interest = 5360.38 − 4000 = $1360.38" (framed green); crossed slip "4000 × 1.05 × 6 = 25 200" (caption "× 6 is not to the power 6").
- **Memory aid.** Framed card: "Left in, it multiplies: × (1 + r) every period." Key line: "FV = PV(1 + r)ⁿ. Interest = FV − PV. r as a decimal (5% → 1.05)."
- **Visual surprise.** The three ladder arrows slide together into one power, and the calculator gives the same $2,315.25 in one line (scene 3).
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` section 5).** No error in the parts used. The effective annual rate (card 07, `we-1` step 4, `we-2` step 3) is not used (root ruling 33; beyond the 2024 Standard points). `we-1` and `we-2` (quarterly and monthly) belong to i04 with the corrected values (MS-11, MS-12). The site's PV and rate gap is i02b's.
- **Plain meanings at first use.** Compound interest ("interest added to the balance, so it earns interest too"); compounded annually ("the interest is added once a year"); present value, PV ("the amount at the start, now"); future value, FV ("the amount at the end, interest included"); period ("one step of time between interest payments, a year here").
- **Attempts.** A1 (pack question 1): $3,000 at 5.5% p.a. compounded annually for 4 years: FV $3,716.47; interest $716.47; crossed "3000 × 0.055⁴" (caption "5.5% up: multiply by 1.055"). A2 (original, pack style): $1,200 at 4.5% p.a. compounded annually for 5 years: interest $295.42 (FV $1,495.42); simple interest $270; compound earns $25.42 more; crossed "interest = $1495.42" (caption "that's FV; interest = FV − PV"; site Trap 02).
- **Mistake scene:** none separate. × n instead of to the power n (5 crossed); r as the multiplier (A1 crossed); FV given as the interest (A2 crossed; site Trap 02); rounding the multiplier early (5, said: "type it in one go").
- **Cause chain taught, in order:** (1) interest left in the account becomes part of the balance, so next year's percentage is taken of a bigger amount, and the extra is interest on interest (1, 2); (2) adding r% of the balance gives 100% + r% of it, which is one multiplication by 1 + r as a decimal (3); (3) n years are n of those multiplications, which is the power n (3); (4) so FV = PV(1 + r)ⁿ, and the interest is what was added, FV − PV (4); (5) one calculation typed in one go keeps every digit until the money is rounded to the cent at the end (5).
- **Entry knowledge (route):** i01 (simple interest; P, r, n; paid out); Year 11 Standard m01 (a 5% increase multiplies by 1.05) and f01 (calculator powers); a05 (a constant multiplier in a table, both courses; grey chip). a06's k·aˣ is Standard 2 only and is not assumed.
- **Standard 1 path.** Identical content: the formula is used by substitution and the ladder gives the reason in arithmetic. Nothing is grey.
- **Money sources (root ruling 32).** Rates are examples (4%, 5%, 5.5%, 4.5%), said once to change (scene 2). For the design record: 5% to 6% p.a. is in reach for a bonus savings account in November 2026, usually with monthly conditions (Canstar, https://www.canstar.com.au/news/payday-for-savers-highest-ongoing-rate-hits-630/, and CommBank's savings rate announcement, https://www.commbank.com.au/news/savings-rate-announcement.html, both read 18 Nov 2026 by the pack); the RBA cash rate is 4.85% from 3 November 2026 (https://www.rba.gov.au/publications/smp/2026/nov/overview.html).
- **Handoff (to math-s12-i02b, "How do we work backwards to the starting amount or the rate?").** Scene 11, specified precisely in `../checks/root-decisions-maths-s12-i01-i11.md`: the phone plate `ma12-phone-v1.png` (500 px tall, a small object, not an app scene) at the right with a coded tag "new phone: $1,500"; at the left a two-rung ladder, 44 px, "? now → × 1.05 → ? → × 1.05 → $1,500 in 2 years" (the "?" violet, the arrows amber, "$1,500" ink); the amber chip "5% p.a., compounded annually"; chips "PV = ?", "Next: working backwards" and "?". No present value is shown. This is i02b's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Opening: 5000 × 1.04 = 5200; 0.04 × 5200 = 208; extra 8 = 0.04 × 200.
  (b) Birthday: 2000, 2100, 2205, 2315.25; interest 100, 105, 110.25; total 315.25; simple 300; extra 15.25.
  (c) `we` quick check: 1.05⁶ = 1.340095640625; 4000 × 1.05⁶ = 5360.3825625; interest 1360.3825625; slip 25 200.
  (d) A1: 3000 × 1.055⁴ = 3716.4739519 ≈ 3716.47; interest 716.47; slip 3000 × 0.055⁴ = 0.0274519.
  (e) A2: 1200 × 1.045⁵ = 1495.4183252 ≈ 1495.42; interest 295.42; simple 1200 × 0.045 × 5 = 270; difference 25.418 ≈ 25.42.
  (f) Pronunciations: "FV equals PV times one plus r, to the power of n"; "one point zero five to the power of six"; "two thousand three hundred and fifteen dollars and twenty-five cents"; "one point zero five five".

Main question: *$2,000 is left in an account at 5% a year. How does compound interest earn interest on interest, and what is it worth in the future?*
Entry knowledge (i01; Year 11 Standard m01, f01): simple interest; a 5% increase multiplies by 1.05; calculator powers.
Stops after: FV = PV(1 + r)ⁿ with yearly compounding, and interest = FV − PV. No present value, rate or other periods.
Handoff: math-s12-i02b: "$1,500 for a phone in 2 years at 5%: how much now?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): PV violet; r and multiplier amber; interest teal; interest on interest olive; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: leave it in
> Last time, the interest went into a jar, and the account stayed at five thousand dollars. Now leave it in. The two hundred dollars stays in the account, so next year, the bank works out four per cent of five thousand two hundred. That's two hundred and eight dollars, not two **hundred**. The extra eight dollars is interest, earned on last year's **interest**. That's compound interest. The interest is added to the balance, so it earns interest too. So how does compound interest grow, and what will your money be worth in the **future**?

Visual: opens on i01's final frame exactly (the account card with "$5,200?", the jar tipping, the chip "next year: 4% of $5,200 = ?", chips). On the first sentence the "Next" chip fades and the jar slides away to a 200 px badge. On "leave it in" the bar's label settles to "$5,200" (violet), hand tag "left in". On "hundred" (bold) the amber chip resolves, 44 px: "0.04 × 5200 = $208" and a teal block "$208" rises on the bar, with its top 8 dollars as an olive sliver. On "interest" (bold) the sliver rings, row "extra $8 = 4% of last year's $200" (olive), hand tag "interest on interest". On "future" heading "Compound interest: future value" writes on, and the question chip "What will it be worth?" moves to the top right.

### 2. birthday money, year by year
> Here's a clearer example. You get two thousand dollars for your eighteenth birthday, and leave it in an account paying five per cent a year, compounded annually. That means the interest is added to the balance once a year. Rates change, so five per cent is just an example. Year one, five per cent of two thousand is a hundred, so the balance is two thousand one hundred. Year two, five per cent of two thousand one hundred is a hundred and five, so it's two thousand two hundred and **five**. Year three, the interest is a hundred and ten dollars and twenty-five cents, and the balance is two thousand three hundred and fifteen dollars and twenty-five **cents**. Each year's interest is bigger, because it's worked out on a bigger **balance**.

Visual: stage change: the gift envelope `ms12-gift-envelope-v1.png` (500 px) at the top left with a coded tag "$2,000"; the account card (violet bar "$2,000") at the centre; a year counter (44 px). On "compounded annually" an amber chip "5% p.a., compounded annually = added once a year"; on "just an example" a grey chip "rates change". On "a hundred, so the balance" (simulation 1) "year 1": a teal block "$100" joins the bar, label "$2,100". On "five" (bold) "year 2": a teal block "$105" joins, its top "$5" olive, label "$2,205". On "cents" "year 3": "$110.25" joins, its top "$10.25" olive, label "$2,315.25". A small table at the right, 44 px: "year 1: 5% of 2000 = 100", "year 2: 5% of 2100 = 105", "year 3: 5% of 2205 = 110.25". On "balance" the three blocks ring side by side, rising, hand tag "worked out on a bigger balance".

### 3. multiply by one point zero five
> There's a quicker way. Adding five per cent of the balance gives a hundred per cent of it, plus five per cent, which is a hundred and five per cent. Per cent means out of a hundred, so that's one point zero **five**. So each year is just times one point zero five. Two thousand, times one point zero five, times one point zero five, times one point zero five. Three years, three multiplications, so the power is **three**. Two thousand times one point zero five to the power of three is two thousand three hundred and fifteen dollars and twenty-five cents, the same **answer**.

Visual: stage change: a bar at the top, 44 px: "100% + 5% = 105%"; on "five" (bold) "= 1.05" (amber), hand tag "100% + 5% = 105%"; grey chip "Year 11: a 5% increase is × 1.05". The ladder (simulation 2), 52 px, across the middle: "$2,000" (violet) "→ × 1.05 → $2,100 → × 1.05 → $2,205 → × 1.05 → $2,315.25", each arrow lighting as spoken, hand tag "× 1.05 each year". On "three" (bold) the three amber arrows slide together into one "× 1.05³", hand tag "3 years, 3 multiplications", grey chip "a05: multiply by the same number each step". On "answer" row "2000 × 1.05³ = $2,315.25" (framed green), the calculator badge `ma12-calculator-v1.png` (220 px) showing "2000×1.05^3 = 2315.25".

### 4. the formula
> That gives the compound interest formula. The amount at the start is the present value, PV. The amount at the end is the future value, FV. So FV equals PV times one plus r, to the power of n. Here, r is the rate per period as a decimal, and n is the number of **periods**. Some books write A equals P times one plus r to the n. It's the same formula. And FV is the whole balance. The interest earned is FV minus PV. For the birthday money, that's three hundred and fifteen dollars and twenty-five **cents**. Simple interest would give three hundred, so the extra fifteen dollars and twenty-five cents is all interest on **interest**.

Visual: stage change: the formula strip, 64 px: "FV = PV(1 + r)ⁿ" (PV violet, 1 + r amber, n ink), each part dropping a 36 px tag as spoken: "FV: future value (end)", "PV: present value (start)", "r: rate per period, as a decimal", "n: number of periods". On "periods" the birthday ladder from scene 3 shrinks under the strip with "PV = 2000" under its start, "FV = 2315.25" under its end, "n = 3" under the arrows. On "Some books" a grey chip "same as A = P(1 + r)ⁿ". On "whole balance" hand tag "FV is the whole balance". On "cents" row, 52 px: "interest = FV − PV = 2315.25 − 2000 = $315.25" (teal, framed green). On "interest" (last bold) a side row, 44 px: "simple: 2000 × 0.05 × 3 = $300", the $15.25 difference in olive, hand tag "interest on interest".

### 5. worked example
> Here's a full example. Four thousand dollars is invested at five per cent per year, compounded annually, for six years. Find the future value, and the interest earned. PV is four thousand, r is zero point zero five, and n is **six**. So FV equals four thousand times one point zero five to the power of six. Type the whole thing into your calculator in one go, and round to the cent at the end. You get five thousand three hundred and sixty dollars and thirty-eight **cents**. The interest is that minus four thousand, one thousand three hundred and sixty dollars and thirty-eight cents. Typing four thousand times one point zero five times six is the **slip**. That's twenty-five thousand two hundred dollars.

Visual: clear change to the g01 board. Task strip, 44 px: "$4000 is invested at 5% p.a. compounded annually for 6 years. Find the future value and the interest earned." (site card 05's quick check). Formula strip, 52 px: "FV = PV(1 + r)ⁿ". Givens card, 44 px: "PV = $4000" (violet), "r = 5% = 0.05" (amber), "n = 6 years". On "six" (bold) row, 52 px: "FV = 4000 × 1.05⁶". On "in one go" (simulation 3) the calculator plate `ma12-calculator-v1.png` (300 px) at the right, display "4000×1.05^6" then "5360.382563", hand tag "type it in one go"; on "round to the cent" hand tag "to the cent". On "cents" row "FV ≈ $5360.38" (framed green). Row "interest = 5360.38 − 4000 = $1360.38" (framed green). On "slip" a red slip "4000 × 1.05 × 6 = 25 200" writes and is crossed (caption "× 6 is not to the power 6").

### 6. memory aid
> Here's the summary. Interest that's left in becomes part of the balance, so it earns interest too. That's why the balance multiplies by one plus r every period, with r written as a decimal. So FV equals PV times one plus r to the n, and the interest earned is FV minus **PV**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the ladder "PV → × 1.05 → × 1.05 → × 1.05 → FV" with the olive slivers on rising blocks. Main line, hand font 56 px: "Left in, it multiplies: × (1 + r) every period." On "PV" the key line, 40 px: "FV = PV(1 + r)ⁿ. Interest = FV − PV. r as a decimal (5% → 1.05)." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Three thousand dollars is invested at five point five per cent per year, compounded annually, for four years. Find the future value of the investment. Then find how much interest is earned. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "$3000 is invested at 5.5% p.a. compounded annually for 4 years. (a) Find the future value. (b) How much interest is earned?" Picture slot: the coded account card "$3,000" and an empty four-rung ladder "→ × ? → × ? → × ? → × ?". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Five point five per cent up is a multiplier of one point zero five **five**. So FV is three thousand times one point zero five five to the four, about three thousand seven hundred and sixteen dollars and forty-seven **cents**. The interest is FV minus PV, seven hundred and sixteen dollars and forty-seven cents. Zero point zero five five is the slip. It shrinks the money to almost **nothing**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "100% + 5.5% = 105.5%"; on "five" "= 1.055" (amber). "FV = 3000 × 1.055⁴"; on "cents" "≈ $3716.47" (framed green); "interest = 3716.47 − 3000 = $716.47" (framed green). On "nothing" a red slip "3000 × 0.055⁴ ≈ $0.03" writes and is crossed (caption "5.5% up: multiply by 1.055"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. Twelve hundred dollars is left in an account paying four point five per cent per year, compounded annually, for five years. How much interest is earned? And how much more is that than simple interest at the same rate? Pause here to answer.

Visual: `QuestionCard`, 40 px: "$1200 is left in an account paying 4.5% p.a. compounded annually for 5 years. (a) How much interest is earned? (b) How much more is this than simple interest at the same rate for the same time?" Picture slot: the coded account card "$1,200". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> FV is twelve hundred times one point zero four five to the five, about one thousand four hundred and ninety-five dollars and forty-two cents. So the interest is two hundred and ninety-five dollars and forty-two **cents**. Simple interest would be two hundred and seventy **dollars**. So compound earns twenty-five dollars and forty-two cents **more**. Giving the whole FV as the interest is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "FV = 1200 × 1.045⁵ ≈ $1495.42"; on "cents" "interest = 1495.42 − 1200 = $295.42" (framed green). On "dollars" "simple: 1200 × 0.045 × 5 = $270". On "more" "295.42 − 270 = $25.42 more" (framed green). On "slip" a red slip "interest = $1495.42" writes and is crossed (caption "that's FV; interest = FV − PV"). Hold about 1 s.

### 11. handoff
> So far, we've started with the money, and found what it grows to. But often you know the goal first. Say you want fifteen hundred dollars for a new phone in two years, and an account pays five per cent a year. How much do you need to put in now? To find out, we'll work backwards. That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s12-i01-i11.md`): on "fifteen hundred dollars for a new phone" the phone plate `ma12-phone-v1.png` (500 px tall) at the right with a coded tag "new phone: $1,500"; on "two years" the two-rung ladder at the left, 44 px, "? now → × 1.05 → ? → × 1.05 → $1,500 in 2 years" ("?" violet, arrows amber); on "five per cent a year" the amber chip "5% p.a., compounded annually". On "next" chips "PV = ?", "Next: working backwards" and "?". Hold about 2 s. No present value is shown. This is i02b's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Compound interest: interest is added, then earns interest too.
- Each period: × (1 + r), e.g. 5% up is × 1.05.
- FV = PV(1 + r)ⁿ (r per period as a decimal; n periods).
- Interest earned = FV − PV.
- Type it in one go; round money to the cent at the end.

Memory aid (framed card, right side, as in scene 6): *Left in, it multiplies: × (1 + r) every period.* Key: *FV = PV(1 + r)ⁿ. Interest = FV − PV. r as a decimal (5% → 1.05).* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and i02b's opening frame.

## Teaching checks

- **Does it explain causes?** Why next year's interest is bigger: it is a percentage of a bigger balance (1, 2). Why × 1.05: 100% + 5% (3). Why the power is n: one multiplication per year (3). Why interest is FV − PV: FV includes the starting money (4). Why type it in one go: early rounding moves the cents (5).
- **Misconceptions addressed:** × n for to the power n (5 crossed); r as the multiplier (A1 crossed); FV as the interest (A2 crossed); expecting the same interest each year from i01 (1, 2).
- **Visual standard, item by item:** 1 the account and jar from the first frame, the gift envelope in 2; 2 a new stage every 40 to 60 s; 3 left-in blocks growing with olive slivers, the ladder collapsing into a power, the calculator display; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board with framed answers and a crossed slip; 8 framed card and five bullets; 9 three arrows becoming one power.
- **One idea at a time:** interest on interest (1, 2), the multiplier and the power (3), the formula and FV − PV (4), a full example (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 29 s and 29 s.
- **Avoided double teaching:** i01's simple interest is the contrast, recalled in a phrase; Year 11's 1.05 and a05's constant multiplier are grey chips.
- **Standard 1 path:** identical; substitution and arithmetic only.
- **Syllabus coverage:** `ci64a24122` and `cib6fe9f5b`, future value (2 to 5, A1, A2; key notes 1 to 5). Present value and the rate: i02b.
- **Out of scope by design:** PV and r (i02b); other compounding periods (i04); the graph comparison (i05); the effective annual rate (ruling 33).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** "$3000 is invested at 5.5% p.a. compounded annually for 4 years. (a) Find the future value. (b) How much interest is earned?"
Model answer: (a) FV = 3000 × 1.055⁴ = $3716.47. (b) 3716.47 − 3000 = $716.47. Classic mistake (crossed): "3000 × 0.055⁴".

**Attempt 2 (scene 9; original, 3 marks suggested).** "$1200 is left in an account paying 4.5% p.a. compounded annually for 5 years. (a) How much interest is earned? (b) How much more is this than simple interest at the same rate for the same time?"
Model answer: (a) FV = 1200 × 1.045⁵ = $1495.42, so the interest is 1495.42 − 1200 = $295.42. (b) Simple interest: 1200 × 0.045 × 5 = $270, so compound earns $25.42 more. Classic mistake (crossed): "interest = $1495.42".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening | 0.04 × 5200 = 208; extra 8 | 1 |
| Birthday | 2000, 2100, 2205, 2315.25; interest 100, 105, 110.25; 315.25; simple 300; extra 15.25 | 2, 3, 4 |
| Quick check | 4000 × 1.05⁶ = 5360.3826 ≈ 5360.38; interest 1360.38; slip 25 200 | 5 |
| A1 | 3000 × 1.055⁴ ≈ 3716.47; 716.47; slip ≈ 0.03 | 7, 8 |
| A2 | 1200 × 1.045⁵ ≈ 1495.42; 295.42; simple 270; 25.42 | 9, 10 |
| Handoff | $1,500 goal, 5%, 2 years; PV not shown | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); Codex to re-check.

- 5000 × 1.04 = 5200; 0.04 × 5200 = 208; 0.04 × 200 = 8.
- 2000 × 1.05ⁿ at n = 0 to 3: 2000, 2100, 2205, 2315.25; 0.05 × 2000, 0.05 × 2100, 0.05 × 2205: 100, 105, 110.25; 2000 × 0.05 × 3 = 300.
- 1.05⁶ = 1.340095640625; 4000 × 1.05⁶ = 5360.3825625; 4000 × 1.05 × 6 = 25 200.
- 3000 × 1.055⁴ = 3716.47395; 3000 × 0.055⁴ = 0.02745.
- 1200 × 1.045⁵ = 1495.41833; 1200 × 0.045 × 5 = 270; 295.41833 − 270 = 25.41833.

## Memory aid check

- **"Left in, it multiplies: × (1 + r) every period."** with key line **"FV = PV(1 + r)ⁿ. Interest = FV − PV. r as a decimal (5% → 1.05)."** Original (the site's card 05 shows the step-by-step multiplication). Meaning, as said in scene 6: when each period's interest is added to the balance, the new balance is (100% + r%) of the old, so each period multiplies by 1 + r with r as a decimal, and n periods give the power n. Assumptions checked: the rate per period is constant and the interest is added at the end of each period with no withdrawals or deposits; r and n use the same period (key note 3); "(1 + r)" is shown with its example "5% → 1.05" so it is never read as 1 + 5 (a06 Revision 2's concern). It helps a new case: $500 at 3% for 2 years: 500 × 1.03² = $530.45. Introduced after scenes 1 to 5.
- **Considered, not used:** "Interest on interest" alone (names the idea, not the method).

## Narration length estimate

Revision 1, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12i/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632).

**5,026 characters**, 12 scene headings. Characters per scene (1 to 12): 528, 732, 565, 621, 698, 272, 222, 383, 249, 388, 293, 75.

At 13.3 characters per second the speech is about 378 s. Total with the holds and settling below **about 467 s (7 min 47 s)**, 103 s under the 570 s cap; speech and holds before the notes about 422 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the left-in blocks (1, 2), the ladder collapsing (3), the formula tags (4) and the calculator display (5) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

No reserve trims are needed. Do not cut below 5,000 characters.

## Scene list and build ids

Lesson key `m-s12i02a` (route math-s12-i02, first half). Explainer folder `src/explainer/lessons/math-s12-i02a`; build inputs in `docs/production/claude-pm/lessons/math-s12-i02a/` (at voicing).

In order (12 scene headings): hook-leave-it-in, birthday-year-by-year, multiply-by-1-05, formula-fv, worked-4000-six-years, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | i01's frame answered: $208 |
| 40 to 105 s | 2 | The envelope and the left-in blocks |
| 105 to 150 s | 3 | The ladder collapses into a power |
| 150 to 205 s | 4 | The formula strip and FV − PV |
| 205 to 260 s | 5 | g01 board and calculator |
| 260 to 275 s | 6 | Framed memory card |
| 275 to 370 s | 7 to 10 | Question cards and countdowns, then feedback |
| 370 to 390 s | 11 | The phone's goal ladder, for i02b |
| 390 to 435 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i01's last frame continues into 1; 1 to 2 stage change; 2 to 3 stage change (the ladder); 3 to 4 stage change (formula strip); 4 to 5 clear change to the board; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i02a-learning-review.md`, `science_check` = `checks/m-s12-i02a-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, viewed): `ma12-coin-jar-v1.png` (reused from i01's frame, as a badge); `ma12-coin-jar-full-v1.png` (the jar filled to the shoulder; not used: a jar stands for paid-out interest in i01, so using it for left-in money would blur the contrast); `ma12-calculator-v1.png` (a scientific calculator; the display is coded; reused); `ma12-phone-v1.png` (a plain black-screened phone, 971 × 1657; reused small in the final frame, not as f14's app scene).

Need (painted, new; see the Codex asset brief): `ms12-gift-envelope-v1.png`. Reused: `ma12-coin-jar-v1.png`, `ma12-calculator-v1.png`, `ma12-phone-v1.png`.

Coded: the account card and bar, the interest blocks and slivers, the ladder, the formula strip and tags, the board, the calculator display, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `InterestStack` (left-in mode; new in i01), `StudioTermLadder` (`series-parts.tsx`), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i02): **StudioTermLadder: collapse to a power** (small): the n amber arrows slide together into one "× aⁿ" label. Check: three × 1.05 arrows become "× 1.05³" and the end value is unchanged ($2,315.25).

## Codex asset brief (Maths S12 I02a, a gift envelope)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-i02a.md`, route entry math-s12-i02. Paint after the learning review and maths check pass and root gives the go-ahead, and before the i02a build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-coin-jar-v1.png` and `maths/ma12-swing-tag-v1.png`; no text, writing, money, currency designs, logos, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-gift-envelope-v1.png` (about 1200 × 900 px): a sealed cream greeting-card envelope, lying slightly angled, tied with a thin teal ribbon in a small bow, with a small blank gift tag on the ribbon; no writing on the envelope or tag, nothing visible inside.

Report inspection on the paper background (`#f6f1e7`) at 500 px and 220 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-i02a-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct, and that this video claims only the future-value part of the point.
3. Confirm every money answer is rounded to the cent from the full value, never from a rounded multiplier.
4. Confirm no effective annual rate, logarithm or other compounding period appears (ruling 33).
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on i01's final frame and scene 11 matches the decisions file's i02a to i02b join with no PV shown.
7. Confirm "rates change" is said once, no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Compound Interest: Future Value FV = PV(1 + r)^n | Year 12 Maths Standard

(Title length: 73 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson06.sa.html

Leave the interest in the account, and next year's interest is worked out on a bigger balance: interest on interest. Follow $2,000 of birthday money at 5% a year as it grows to $2,100, $2,205 and $2,315.25, see why adding 5% is multiplying by 1.05, and why three years means the power 3. Learn FV = PV(1 + r)^n, find the interest earned as FV − PV, and type the whole calculation in one go. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates change; the rates here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans (Standard 2) and Investment (Standard 1). For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Calculate the future value, present value or interest rate of a compound interest investment using the formula FV = PV(1 + r)^n where FV = future value of the investment, PV = present value of the investment, r = interest rate per time period and n = number of time periods"
Syllabus content, Standard 1:
"Calculate the future value, present value or interest rate of a compound interest investment using the formula FV = PV(1 + r)^n where FV = future value of the investment, PV = present value of the investment, r = interest rate per time period and n = number of time periods"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6 (Standard 1)

Builds on: Simple Interest: I = Prn and Its Graph. Next: Compound Interest: Present Value and the Interest Rate.

#Year12Maths #MathsStandard #CompoundInterest #HSCScience

## Open decisions

- **1. Split (root ruling 29).** Applied as ruled: i02a (future value) and i02b (present value and the rate) share outline number 15 and both carry the full syllabus point in their descriptions.
- **2. The opening's $208 (learning review).** The first sentence pays off i01's chip with i01's own fund before the birthday money arrives. Check that two anchors in the first minute do not crowd; if they do, the $208 beat can shrink to one sentence over i01's frame.

## Review notes

- Revision 1. Next: student learning review (trace from i01; check that "left in" against "paid out" makes the bigger interest obvious, that 100% + 5% lands before 1.05, that the ladder collapsing explains the power, that FV − PV is clear, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
