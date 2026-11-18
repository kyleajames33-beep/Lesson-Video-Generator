# Maths S12 I02b: How do we work backwards to the starting amount or the rate? Present value by dividing, PV = FV ÷ (1 + r)ⁿ, the rate from the growth factor by trial and by the root key, and checking by substituting back (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 33; ruling 29 splits i02; ruling 33 keeps logarithms out). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,030 characters by script (see "Narration length estimate"), 12 scene headings, about 467 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: third video of the Year 12 Investment and loans strand, outline playlist order 15 (second half, root ruling 29). Shared by Standard 1 and Standard 2 (identical content). This half covers the present value and the interest rate of the same syllabus point. Pre-design pack: `../pre-design/maths-standard/math-s12-i02.md` (the "i02b" half). Site lesson: `maths-standard/year12/investment-and-loans/lesson06.sa.html` (SHA256 `1940cca09f6a14b6bf7159efdce0cf1be5dc27545bd72bf6dcef668cb7635c6e`) has no present value or rate example (a logged gap, `../site-corrections-maths-standard.md` section 5); this video's teaching is original under root ruling 3 (missing content), using the pack's recalculated original examples and the site's formula. Route entry: `math-s12-i02` in `../../programme/maths-standard-route-inputs-2.json`. Visual system: maths studio kit; the reused phone and calculator, one new painted plate (a grocery basket) for the final frame; the ladders, trial strip and boards coded.

Owner rules applied: as i01 (2024 syllabus; plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols; plain meanings (present value, growth factor, cube root); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a phone upgrade, savings); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Investment and loans (Standard 2) and Investment (Standard 1)), quoted from `../../programme/maths-standard-route-inputs-2.json` (text form):

Standard 2:
- `ci64a24122`: "Calculate the future value, present value or interest rate of a compound interest investment using the formula FV = PV(1 + r)^n where FV = future value of the investment, PV = present value of the investment, r = interest rate per time period and n = number of time periods" (this video: the present value and the interest rate)

Standard 1:
- `cib6fe9f5b`: "Calculate the future value, present value or interest rate of a compound interest investment using the formula FV = PV(1 + r)^n where FV = future value of the investment, PV = present value of the investment, r = interest rate per time period and n = number of time periods" (the same)

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6 (Standard 1)

**Boundary:** starts from i02a's final frame exactly (the phone `ma12-phone-v1.png` with the coded tag "new phone: $1,500"; the two-rung ladder "? now → × 1.05 → ? → × 1.05 → $1,500 in 2 years"; the amber chip "5% p.a., compounded annually"; chips "PV = ?", "Next: working backwards", "?"). Recalls i02a (FV = PV(1 + r)ⁿ; × (1 + r) each period) in a phrase or grey chip. Teaches: present value as the amount to invest now to reach a future amount; working backwards by dividing by 1 + r once for each period, which is PV = FV ÷ (1 + r)ⁿ; why PV is less than FV (the interest makes up the difference); the rate from PV, FV and n: the growth factor FV ÷ PV is n multiplications by the same multiplier, so the multiplier is the number that multiplied by itself n times gives the growth factor; trial and check (1.03, 1.04), then the calculator's root key; r = multiplier − 1, as a percentage; checking by substituting back. Stops at PV and r with yearly compounding. Not taught: finding n (left to tables and spreadsheets later; root ruling 33 rules out logarithms); other compounding periods (i04); inflation (i03).

## Decisions

- **Anchor: saving for a phone (reused painted plate, live).** $1,500 in 2 years at 5% p.a. compounded annually: PV = 1500 ÷ 1.05² = $1,360.54 (the pack's original example); one year before the goal $1,428.57. A phone upgrade is a real, near goal. Plate reused: `ma12-phone-v1.png` (viewed 18 Nov 2026: a plain black-screened phone, true alpha) as a small object with a coded price tag, not f14's app scene. No people.
- **Rate example: the pack's original.** $4,000 grew to $4,500 in 3 years: growth factor 1.125; 1.03³ = 1.0927, 1.04³ = 1.1249, 1.05³ = 1.1576; ∛1.125 = 1.040042, r ≈ 4.00%; check 4000 × 1.040042³ = $4,500. The crossed slip 12.5% ÷ 3 = 4.17% (a simple-interest answer; pack section 4).
- **Method for the rate (Standard 1 and Standard 2; ruling 33).** Words first: "how many times bigger", then "one multiplier used three times", then trial and check, then the root key as the exact version. The root key is shown as the calculator's "x√" (n-th root) key, with "³√" for n = 3; the power "^(1 ÷ 3)" appears once as a grey alternative chip, unspoken. No logarithms, no rearranged general formula for r on screen beyond the key line "r = ⁿ√(FV ÷ PV) − 1", which is read in words.
- **Join.** Scene 1 opens on i02a's final frame exactly; the ladder's "?" rungs are the first thing filled.
- **Simulations (standard item 3).**
  1. **Ladder backwards** (scenes 2, 3; `StudioTermLadder` with the reverse option): the amber "× 1.05" arrows flip to point left and relabel "÷ 1.05"; the rungs fill right to left ($1,500, $1,428.57, $1,360.54); then the two arrows merge into "÷ 1.05²".
  2. **Forward check** (scene 2): the arrows flip back to "× 1.05" and the value climbs from $1,360.54 to $1,500.00, ringing green.
  3. **Multiplier trial strip** (scene 4; `TargetDial` or a coded strip): a dial for the multiplier with a target band at 1.125; trial 1.03 → cube 1.0927 (short, grey); 1.04 → 1.1249 (in the band, amber); 1.05 → 1.1576 (over, grey). A three-step mini ladder under the dial shows the trial multiplier used three times.
  4. **Root key** (scene 5): the calculator plate with a coded key strip "x√" and a display "³√1.125 = 1.040041912".
- **Colour roles (fixed for i01 to i05).** PV **violet**; r and the multiplier **amber**; FV in ink (framed green as an answer); interest teal; answer **green**; mistake **red**, crossed slips only; trials that miss grey.
- **Large type, handwritten voice.** As i01. Hand tags: "÷ 1.05 to go back a year", "back two years", "check forwards", "less than the goal", "interest makes up the rest", "how many times bigger?", "3 years together", "one multiplier, used 3 times", "too small", "very close", "too big", "root key", "r = multiplier − 1", "check". At most two live at once.
- **Stage changes (standard item 2).** i02a's frame and the phone (1); the ladder backwards and the forward check (2); the PV formula and the board (3); the rate's growth factor and trial dial (4); the root key and the check (5); framed card (6); question cards (7 to 10); the grocery basket for i03 (11); key notes (12).
- **Worked examples (g01 layout).** 3: task strip "How much must be invested now at 5% p.a. compounded annually to have $1500 in 2 years?"; formula strip "PV = FV ÷ (1 + r)ⁿ"; givens card "FV = $1500", "r = 5% = 0.05" (amber), "n = 2 years", "PV = ?" (violet); rows; framed answer "$1360.54"; crossed slip "1500 × 1.05² = 1653.75" (caption "more than the goal: divide to go back"). 4 and 5: task strip "$4000 grew to $4500 in 3 years, compounded annually. Find the annual interest rate."; givens card "PV = $4000" (violet), "FV = $4500", "n = 3 years", "r = ?" (amber); rows "4500 ÷ 4000 = 1.125", "multiplier³ = 1.125", "multiplier = ³√1.125 = 1.04004…", "r = 0.04004… ≈ 4.00% p.a." (framed); check row; crossed slip "12.5% ÷ 3 = 4.17%" (caption "that's simple interest; compound needs the root").
- **Memory aid.** Framed card: "Back in time: divide by (1 + r) for each period." Key line: "PV = FV ÷ (1 + r)ⁿ. Rate: FV ÷ PV, take the n-th root, subtract 1. Then check."
- **Visual surprise.** The ladder's arrows flip direction and the money walks backwards, then forwards again to exactly $1,500.00 (scene 2); the trial dial lands in the target band at 1.04 (scene 4).
- **Site notes (pack section 8).** The site teaches neither PV nor the rate (logged gap); this video's examples are the pack's originals. The site's effective annual rate is not used (ruling 33).
- **Plain meanings at first use.** Present value, PV ("the amount you put in now"); growth factor ("how many times bigger the money got: FV ÷ PV"); cube root ("the number that, multiplied by itself three times, gives the number you started with"); n-th root (the same, n times); to two decimal places ("two digits after the point").
- **Attempts (the pack's question 2, split into two attempts).** A1: PV of $6,000 in 3 years at 4.8%: 6000 ÷ 1.048³ = $5,212.76; crossed "6000 × 1.048³ ≈ $6906" (caption "more than the goal: divide to go back"). A2: $2,500 grows to $2,900 in 3 years: 2900 ÷ 2500 = 1.16; ∛1.16 = 1.050718; r ≈ 5.07%; check 2500 × 1.0507³ ≈ $2,900; crossed "16% ÷ 3 = 5.33%" (caption "that's simple interest; compound needs the root").
- **Mistake scene:** none separate. Multiplying for PV (3 crossed, A1 crossed); dividing the growth by n (5 crossed, A2 crossed); forgetting to subtract 1 (5, said: "r is the multiplier minus one"); rounding the multiplier before checking (5, said).
- **Cause chain taught, in order:** (1) one year forwards multiplies by 1 + r, so one year backwards divides by 1 + r (2); (2) n years back is n divisions, which is dividing by (1 + r)ⁿ (3); (3) PV is less than FV because the interest supplies the difference (3); (4) FV ÷ PV is the growth over all n years together, made of n equal multiplications (4); (5) so the yearly multiplier is the number that gives the growth factor when multiplied by itself n times, which trial narrows and the root key finds exactly (4, 5); (6) the multiplier is 100% + r%, so r is the multiplier minus 1, and substituting back checks it (5).
- **Entry knowledge (route):** i02a (FV = PV(1 + r)ⁿ; the multiplier 1 + r); Year 11 Standard f01 (calculator powers). The root key is taught here as a calculator key.
- **Standard 1 path.** Identical content; division for PV and trial then the root key for r are arithmetic and calculator steps, not algebra. Nothing is grey except the alternative "^(1 ÷ 3)" key chip, which both courses may ignore.
- **Money sources (root ruling 32).** Rates are examples (5%, 4.8%), said once to change (scene 1); sources as i02a's (Canstar and CommBank, read 18 Nov 2026 by the pack; RBA cash rate 4.85% from 3 November 2026).
- **Handoff (to math-s12-i03, "How do inflation and appreciation use the compound interest formula?").** Scene 11, specified precisely in `../checks/root-decisions-maths-s12-i01-i11.md`: the new grocery basket plate `ms12-grocery-basket-v1.png` (700 px wide) at the centre-left with a coded price tag "this week: $200" (44 px); at the right an empty five-rung ladder, 40 px, "$200 → × ? → × ? → × ? → × ? → × ? → ? in 5 years" (arrows amber, "?" ink); the grey chip "prices go up by a percentage each year"; chips "Next: inflation and appreciation" and "?". No inflation rate is shown. This is i03's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Phone: 1500 ÷ 1.05 = 1428.5714 ≈ 1428.57; 1500 ÷ 1.05² = 1360.5442 ≈ 1360.54; check 1360.54 × 1.1025 = 1499.995 ≈ 1500.00. Slip 1500 × 1.05² = 1653.75.
  (b) Rate: 4500 ÷ 4000 = 1.125; 1.03³ = 1.092727; 1.04³ = 1.124864; 1.05³ = 1.157625; ∛1.125 = 1.0400419; r = 4.00419% ≈ 4.00%; 4000 × 1.04³ = 4499.46; 4000 × 1.0400419³ = 4500. Slip 12.5 ÷ 3 = 4.1667 ≈ 4.17.
  (c) A1: 6000 ÷ 1.048³ = 5212.7561 ≈ 5212.76; slip 6000 × 1.048³ = 6906.14.
  (d) A2: 2900 ÷ 2500 = 1.16; ∛1.16 = 1.0507176; r ≈ 5.07%; 2500 × 1.0507³ = 2899.85 ≈ 2900; slip 400 ÷ 2500 ÷ 3 = 5.333%.
  (e) Pronunciations: "one thousand three hundred and sixty dollars and fifty-four cents"; "one point one two five"; "the cube root of one point one two five"; "four point zero zero per cent".

Main question: *You want $1,500 in 2 years at 5%. How do we work backwards to the amount to put in now, or to the rate an investment earned?*
Entry knowledge (i02a; Year 11 Standard f01): FV = PV(1 + r)ⁿ; calculator powers.
Stops after: PV by dividing, the rate by growth factor and root, checked. No n, no other periods.
Handoff: math-s12-i03: "a $200 grocery shop: will prices grow like money in the bank?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): PV violet; r and multiplier amber; FV ink; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the goal comes first
> Here's the phone. You want fifteen hundred dollars for it in two years, and an account pays five per cent a year, compounded annually. Rates change, so that's just an example. Last time, we started with the money and found the future value. This time we know the future value, fifteen hundred dollars. What we need is the present value, the amount to put in **now**. And sometimes we know both amounts, and need the rate the money earned. That's how you'd plan a savings goal, or judge how well an investment really did. So how do we work backwards, to the starting amount, or to the **rate**?

Visual: opens on i02a's final frame exactly (the phone with "new phone: $1,500", the ladder with "?" rungs, the amber chip, chips). On the first sentence the "Next" chip fades; the phone stays at the right (500 px). On "just an example" a grey chip "rates change". On "future value, fifteen hundred dollars" the ladder's right end "$1,500" rings, tag "FV". On "now" the left "?" rings violet, tag "PV: the amount to put in now". On "need the rate" a second small strip below, 40 px: "$4,000 → ? → $4,500 in 3 years: rate = ?" (amber "?"). On "rate" (bold) heading "Working backwards: PV and the rate" writes on, and the question chip "Go back how?" moves to the top right.

### 2. backwards on the ladder
> Going forwards, each year multiplies by one point zero five. So to go back a year, do the opposite. Divide by one point zero five, once for each **year**. Fifteen hundred dollars, divided by one point zero five, is about fourteen hundred and twenty-eight dollars and fifty-seven cents. That's what you'd need with one year to go. Divide by one point zero five again, and you get one thousand three hundred and sixty dollars and fifty-four **cents**. That's the present value. Now check it going forwards. One thousand three hundred and sixty dollars and fifty-four cents, times one point zero five, twice, comes back to fifteen hundred **dollars**.

Visual: stage change: the ladder grows to 1,500 px across the middle, 52 px. On "do the opposite" (simulation 1) the two amber arrows flip to point left and relabel "÷ 1.05", hand tag "÷ 1.05 to go back a year". On "year" (bold) the right arrow lights. On "fourteen hundred and twenty-eight" the middle rung fills "$1,428.57". On "cents" the left rung fills "$1,360.54" (violet), tag "PV". On "check it going forwards" (simulation 2) the arrows flip back to "× 1.05" and a dot carries the value rightwards: "$1,428.57", then "$1,500.00"; on "dollars" the end rings green, hand tag "check forwards".

### 3. present value, in one go
> Two divisions by one point zero five is the same as dividing by one point zero five squared. So PV equals FV, divided by one plus r to the power of n. It's the same formula as last time, just worked backwards. In one go, fifteen hundred divided by one point zero five squared is one thousand three hundred and sixty dollars and fifty-four **cents**. Notice it's less than the goal. That makes sense, because two years of interest make up the **rest**. Multiplying by one point zero five squared is the slip. That gives sixteen hundred and fifty-three dollars and seventy-five cents, more than the goal **itself**.

Visual: clear change to the g01 board, the phone (300 px) at the top right. Task strip, 44 px: "How much must be invested now at 5% p.a. compounded annually to have $1500 in 2 years?" Formula strip, 52 px: grey "FV = PV(1 + r)ⁿ" above, then "PV = FV ÷ (1 + r)ⁿ" (PV violet, 1 + r amber), with the two "÷ 1.05" arrows merging into "÷ 1.05²". Givens card, 44 px: "FV = $1500", "r = 5% = 0.05" (amber), "n = 2 years", "PV = ?" (violet). Rows, 52 px: "PV = 1500 ÷ 1.05²"; on "cents" "= 1360.544… ≈ $1360.54" (framed green), calculator badge "1500÷1.05^2". On "rest" a bar under the rows: violet "$1,360.54" plus teal "interest $139.46" making "$1,500", hand tags "less than the goal" and "interest makes up the rest". On "itself" a red slip "1500 × 1.05² = 1653.75" writes and is crossed (caption "more than the goal: divide to go back").

### 4. the rate: how many times bigger?
> Now the rate. Four thousand dollars grew to four thousand five hundred in three years, with interest compounded annually. What rate did it earn? Start with how many times bigger it got. Four thousand five hundred divided by four thousand is one point one two **five**. That's all three years of growth together. So we need one multiplier that, used three times, gives one point one two five. Try one point zero three. Times itself three times, that's about one point zero nine three. Too **small**. Try one point zero four. That gives about one point one two five. Very **close**. So the rate is about four per cent a year. Trying numbers like this shows what the rate means, but it's slow, and it's only close.

Visual: stage change: the board's left half keeps a task strip, 44 px: "$4000 grew to $4500 in 3 years, compounded annually. Find the annual interest rate."; givens card "PV = $4000" (violet), "FV = $4500", "n = 3 years", "r = ?" (amber). On "how many times bigger" hand tag "how many times bigger?"; on "five" (first bold) row, 52 px: "4500 ÷ 4000 = 1.125", hand tag "3 years together". On "one multiplier" a three-rung ladder "$4,000 → × m → × m → × m → $4,500" with "m³ = 1.125", hand tag "one multiplier, used 3 times". At the right (simulation 3) the trial dial with a target band at 1.125. On "small" the dial shows "1.03³ = 1.0927" (grey), hand tag "too small". On "close" "1.04³ = 1.1249" (amber, in the band), hand tag "very close"; a faint grey "1.05³ = 1.1576: too big" appears below for comparison.

### 5. the root key, and a check
> Your calculator can find that multiplier exactly. The number that, multiplied by itself three times, gives one point one two five, is called the cube root of one point one two five. Use the root key, with three as the **root**. It gives one point zero four zero zero four. The multiplier is a hundred per cent plus r, so r is zero point zero four zero zero four, which is four point zero zero per cent, to two decimal **places**. Check by substituting back. Four thousand times one point zero four zero zero four, cubed, is four thousand five **hundred**. Dividing the twelve and a half per cent growth by three is the slip. That's a simple interest **answer**.

Visual: camera continue. On "cube root" (simulation 4) the calculator plate `ma12-calculator-v1.png` (300 px) with a coded key strip, 40 px: "x√" (ringed), and a grey alternative chip "or ^(1 ÷ 3)". On "root" (bold) the display "³√1.125" then "1.040041912", hand tag "root key". Rows under the givens, 52 px: "m = ³√1.125 = 1.04004…"; on "places" "r = 1.04004… − 1 = 0.04004… ≈ 4.00% p.a." (framed green), hand tag "r = multiplier − 1". On "hundred" (bold) check row "4000 × 1.04004…³ = 4500 ✓", hand tag "check". On "answer" a red slip "12.5% ÷ 3 = 4.17%" writes and is crossed (caption "that's simple interest; compound needs the root").

### 6. memory aid
> Here's the summary. To find the present value, go back in time, dividing by one plus r for each period. So PV equals FV divided by one plus r to the n. To find the rate, divide FV by PV to see how many times bigger it got, take the n-th root, and subtract one. Then check by substituting **back**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the phone ladder with "÷ 1.05" arrows pointing left, and the trial dial in its band. Main line, hand font 56 px: "Back in time: divide by (1 + r) for each period." On "back" the key line, 40 px: "PV = FV ÷ (1 + r)ⁿ. Rate: FV ÷ PV, take the n-th root, subtract 1. Then check." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. How much must be invested now, at four point eight per cent per year, compounded annually, to have six thousand dollars in three years? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "How much must be invested now at 4.8% p.a. compounded annually to have $6000 in 3 years?" Picture slot: an empty three-rung ladder "? now → → → $6000 in 3 years". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Go backwards. PV equals six thousand, divided by one point zero four eight to the power three, which is five thousand two hundred and twelve dollars and seventy-six **cents**. It's less than six thousand, because three years of interest make up the **rest**. Multiplying by one point zero four eight cubed is the slip. That's about six thousand nine hundred, more than the goal **itself**.

Visual: the card shrinks to the top (30 px). The ladder's arrows fill "÷ 1.048" (amber). Rows, 44 px: "PV = 6000 ÷ 1.048³"; on "cents" "≈ $5212.76" (framed green). On "rest" a bar "violet $5212.76 + teal interest = $6000". On "itself" a red slip "6000 × 1.048³ ≈ $6906" writes and is crossed (caption "more than the goal: divide to go back"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. An investment of two thousand five hundred dollars grows to two thousand nine hundred in three years, with interest compounded annually. Find the annual interest rate, correct to two decimal places. Pause here to answer.

Visual: `QuestionCard`, 40 px: "An investment of $2500 grows to $2900 in 3 years with interest compounded annually. Find the annual interest rate, correct to two decimal places." Picture slot: "$2500 → × ? → × ? → × ? → $2900". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Two thousand nine hundred divided by two thousand five hundred is one point one **six**. The cube root of one point one six is about one point zero five zero seven, so the rate is about five point zero seven per **cent**. Check. Two thousand five hundred times one point zero five zero seven cubed is about two thousand nine **hundred**. Dividing sixteen per cent by three is the slip. That's simple **interest**.

Visual: the card shrinks to the top. Rows, 44 px: on "six" "2900 ÷ 2500 = 1.16"; "m = ³√1.16 = 1.05071…"; on "cent" "r ≈ 5.07% p.a." (framed green). On "hundred" check row "2500 × 1.0507³ ≈ 2900 ✓". On "interest" a red slip "16% ÷ 3 = 5.33%" writes and is crossed (caption "that's simple interest; compound needs the root"). Hold about 1 s.

### 11. handoff
> So one formula works forwards, to the future value, and backwards, to the present value or the rate. But it isn't only for bank accounts. Here's a week's groceries, two hundred dollars. Prices go up over time too, by a percentage each year. Could the same formula tell us what this shop will cost in five years? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s12-i01-i11.md`): on "a week's groceries" the grocery basket `ms12-grocery-basket-v1.png` (700 px wide) at the centre-left with the coded price tag "this week: $200" (44 px). On "by a percentage each year" the grey chip "prices go up by a percentage each year". On "in five years" the empty five-rung ladder at the right, 40 px: "$200 → × ? → × ? → × ? → × ? → × ? → ? in 5 years". On "next" chips "Next: inflation and appreciation" and "?". Hold about 2 s. No inflation rate is shown. This is i03's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Present value PV: the amount to invest now.
- Go back a period: ÷ (1 + r). PV = FV ÷ (1 + r)ⁿ.
- PV is less than FV: the interest makes up the rest.
- Rate: FV ÷ PV, then the n-th root (root key), then − 1.
- Check by substituting back. Not growth ÷ n (that's simple).

Memory aid (framed card, right side, as in scene 6): *Back in time: divide by (1 + r) for each period.* Key: *PV = FV ÷ (1 + r)ⁿ. Rate: FV ÷ PV, take the n-th root, subtract 1. Then check.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and i03's opening frame.

## Teaching checks

- **Does it explain causes?** Why divide: going back undoes the yearly multiplication (2). Why the power n: n divisions (3). Why PV < FV: interest makes up the rest (3). Why FV ÷ PV: it is the growth over all the years together (4). Why a root: one multiplier used n times (4, 5). Why subtract 1: the multiplier is 100% + r% (5).
- **Misconceptions addressed:** multiplying for PV (3, A1 crossed); dividing the growth by n (5, A2 crossed); forgetting to subtract 1 (5); trusting a rate without checking (5, A2).
- **Visual standard, item by item:** 1 the phone from the first frame; 2 a new stage every 40 to 60 s; 3 a ladder whose arrows flip and walk the money back and forth, a trial dial landing in its band, the root key; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards with framed answers and crossed slips; 8 framed card and five bullets; 9 the money walking backwards and returning to exactly $1,500.00.
- **One idea at a time:** going back a step (2), the PV formula (3), the growth factor and trial (4), the root and the check (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 30 s.
- **Avoided double teaching:** i02a's formula is recalled in a grey strip; no future-value example is redone.
- **Standard 1 path:** identical; division, trial and a calculator key.
- **Syllabus coverage:** `ci64a24122` and `cib6fe9f5b`, present value (1 to 3, A1; key notes 1 to 3) and interest rate (4, 5, A2; key notes 4, 5).
- **Out of scope by design:** finding n; logarithms (ruling 33); other periods (i04).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 2 (a), original HSC style, 2 marks suggested, not an official marking scheme).** "How much must be invested now at 4.8% p.a. compounded annually to have $6000 in 3 years?"
Model answer: PV = 6000 ÷ 1.048³ = $5212.76. Classic mistake (crossed): "6000 × 1.048³ ≈ $6906".

**Attempt 2 (scene 9; pack question 2 (b), 3 marks suggested).** "An investment of $2500 grows to $2900 in 3 years with interest compounded annually. Find the annual interest rate, correct to two decimal places."
Model answer: 2900 ÷ 2500 = 1.16, so (1 + r)³ = 1.16 and 1 + r = ³√1.16 = 1.050718, r ≈ 5.07% p.a. Check: 2500 × 1.0507³ ≈ $2900. Classic mistake (crossed): "16% ÷ 3 = 5.33%".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Phone | 1500 ÷ 1.05 ≈ 1428.57; 1500 ÷ 1.05² ≈ 1360.54; interest 139.46; check ≈ 1500.00; slip 1653.75 | 1, 2, 3 |
| Rate | 1.125; 1.03³ ≈ 1.0927; 1.04³ ≈ 1.1249; 1.05³ ≈ 1.1576; ∛1.125 = 1.04004; 4.00%; check 4500; slip 4.17% | 4, 5 |
| A1 | 6000 ÷ 1.048³ ≈ 5212.76; slip ≈ 6906 | 7, 8 |
| A2 | 1.16; ∛1.16 ≈ 1.0507; 5.07%; check ≈ 2900; slip 5.33% | 9, 10 |
| Handoff | $200, 5 years; no rate shown | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); Codex to re-check.

- 1500/1.05 = 1428.5714; 1500/1.05² = 1360.5442; 1360.54 × 1.05² = 1499.9954; 1500 − 1360.54 = 139.46; 1500 × 1.05² = 1653.75.
- 4500/4000 = 1.125; 1.03³ = 1.092727; 1.04³ = 1.124864; 1.05³ = 1.157625; 1.125^(1/3) = 1.0400419; 4000 × 1.04³ = 4499.456; 12.5/3 = 4.1667.
- 6000/1.048³ = 5212.7561; 6000 × 1.048³ = 6906.1356.
- 2900/2500 = 1.16; 1.16^(1/3) = 1.0507176; 2500 × 1.0507³ = 2899.8545; 16/3 = 5.3333.

## Memory aid check

- **"Back in time: divide by (1 + r) for each period."** with key line **"PV = FV ÷ (1 + r)ⁿ. Rate: FV ÷ PV, take the n-th root, subtract 1. Then check."** Original. Meaning, as said in scene 6: each period forwards multiplies by 1 + r, so each period backwards divides by it; and since FV ÷ PV is n equal multiplications, the yearly multiplier is its n-th root. Assumptions checked: a constant rate per period with interest added each period and no deposits or withdrawals; r and n in the same period; FV > PV for growth (so the root is above 1 and r positive); "(1 + r)" appears with r as a decimal, as in i02a's key line. It helps a new case: $800 grew to $900 in 2 years: 900 ÷ 800 = 1.125, √1.125 = 1.0607, so about 6.07% p.a. Introduced after scenes 2 to 5.
- **Considered, not used:** "Forwards multiply, backwards divide" (true for PV but silent on the rate's root).

## Narration length estimate

Revision 1, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12i/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632).

**5,030 characters**, 12 scene headings. Characters per scene (1 to 12): 585, 636, 601, 699, 645, 293, 168, 377, 230, 397, 324, 75.

At 13.3 characters per second the speech is about 378 s. Total with the holds and settling below **about 467 s (7 min 47 s)**, 103 s under the 570 s cap; speech and holds before the notes about 422 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the ladder flipping and the forward check (2), the board (3), the trial dial (4) and the root key display (5) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

No reserve trims are needed.

## Scene list and build ids

Lesson key `m-s12i02b` (route math-s12-i02, second half). Explainer folder `src/explainer/lessons/math-s12-i02b`; build inputs in `docs/production/claude-pm/lessons/math-s12-i02b/` (at voicing).

In order (12 scene headings): hook-goal-first, ladder-backwards, present-value, rate-growth-factor, root-key-check, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | i02a's frame; the phone's goal |
| 40 to 90 s | 2 | The ladder backwards and forwards |
| 90 to 145 s | 3 | g01 board: PV |
| 145 to 200 s | 4 | Growth factor and the trial dial |
| 200 to 255 s | 5 | Root key and check |
| 255 to 275 s | 6 | Framed memory card |
| 275 to 365 s | 7 to 10 | Question cards and countdowns, then feedback |
| 365 to 385 s | 11 | The grocery basket, for i03 |
| 385 to 430 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i02a's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change to the board; 3 to 4 stage change; 4 to 5 camera continue; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i02b-learning-review.md`, `science_check` = `checks/m-s12-i02b-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, viewed): `ma12-phone-v1.png` (a plain black-screened phone; reused small with a coded tag); `ma12-calculator-v1.png` (reused; keys and display coded).

Need (painted, new; see the Codex asset brief): `ms12-grocery-basket-v1.png` (final frame; i03's anchor; painted one video early, ruling 17). Reused: `ma12-phone-v1.png`, `ma12-calculator-v1.png`.

Coded: the price tags, ladders, trial dial, boards, key strip and display, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioTermLadder` (reverse option), `TargetDial` (`finance-parts.tsx`), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i02): **StudioTermLadder reverse option** (small): arrows flip to "÷ a" and rungs fill right to left, then flip back for a forward check. Check: $1,500 → $1,428.57 → $1,360.54 and back to $1,500.00 (displayed to the cent).

## Codex asset brief (Maths S12 I02b, a grocery basket; also i03's anchor)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-i02b.md`, route entry math-s12-i02. Paint after the learning review and maths check pass and root gives the go-ahead, and before the i02b build (its final frame uses it). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma11-coffee-cart-v1.png` and `maths/ma12-coin-jar-v1.png`; no text, prices, brand names or logos on any packet, no people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-grocery-basket-v1.png` (about 1400 × 1100 px): a red plastic supermarket hand basket, three-quarter view, full of a week's everyday groceries (a loaf of bread, a carton of milk, eggs, bananas, apples, pasta, a tin, a block of cheese), with plain unlabelled packaging in soft colours; a little space at the top right where a coded price tag can sit.

Report inspection on the paper background (`#f6f1e7`) at 700 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-i02b-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, and that this video claims the present-value and rate parts only.
3. Confirm no logarithm, no finding of n, and no effective annual rate (ruling 33); the root key is the only method beyond trial.
4. Confirm every rate is checked by substituting back, and each PV is less than its FV.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on i02a's final frame and scene 11 matches the decisions file's i02b to i03 join with no inflation rate shown.
7. Confirm "rates change" is said once, no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Compound Interest: Present Value and the Interest Rate | Year 12 Maths Standard

(Title length: 79 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson06.sa.html

You want $1,500 for a phone in 2 years, and an account pays 5% a year. How much should you put in now? Work backwards: each year forwards multiplies by 1.05, so each year back divides by 1.05, which gives PV = FV ÷ (1 + r)^n. Then find the rate an investment earned: divide FV by PV to see how many times bigger it got, find the one multiplier that does that over three years (by trial, then with the calculator's root key), subtract 1, and check by substituting back. See why dividing the growth by the number of years gives a simple-interest answer, not a compound one. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates change; the rates here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans (Standard 2) and Investment (Standard 1). For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Calculate the future value, present value or interest rate of a compound interest investment using the formula FV = PV(1 + r)^n where FV = future value of the investment, PV = present value of the investment, r = interest rate per time period and n = number of time periods"
Syllabus content, Standard 1:
"Calculate the future value, present value or interest rate of a compound interest investment using the formula FV = PV(1 + r)^n where FV = future value of the investment, PV = present value of the investment, r = interest rate per time period and n = number of time periods"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6 (Standard 1)

Builds on: Compound Interest: Future Value FV = PV(1 + r)^n. Next: Inflation and Appreciation.

#Year12Maths #MathsStandard #CompoundInterest #HSCScience

## Open decisions

- **1. The root key's look (root).** Calculators differ ("x√", "ⁿ√", or SHIFT with "^"). The key strip shows "x√" with a grey "or ^(1 ÷ 3)" chip and no brand. Confirm, or name one calculator layout for the Standard course to standardise on.
- **2. Title length.** 79 characters; a shorter alternative is "Present Value and Interest Rate | Year 12 Maths Standard" (57).

## Review notes

- Revision 1. Next: student learning review (trace from i02a; check that dividing to go back lands as the reverse of i02a's ladder, that "how many times bigger" makes FV ÷ PV feel natural, that trial before the root key gives Standard 1 a way in, that subtracting 1 is not lost, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The grocery basket plate must be painted before this build.
