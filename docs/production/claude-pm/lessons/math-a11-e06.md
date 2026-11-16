# Maths A11 E06: How do the log laws simplify expressions and solve equations? Expanding and condensing, a "show that", log equations with a domain check, and exponential equations with different bases (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-c06.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,517 characters by script (see "Narration length estimate"), 13 scene headings, about 502 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fifty-fifth video of Year 11 Mathematics Advanced (2024), outline order 55, Exponential and logarithmic functions. Pre-design pack: `../pre-design/maths-a11/math-a11-e06.md` (brief 243). Site lessons (read through the pack's quotations, read only): `exponential-and-logarithmic-functions/lesson08.sa.html` (`we-2`, log₂ (x + 1) + log₂ (x − 1) = 3 gives x = 3; `we-3`, 3^(x+1) = 5^(2x) gives x ≈ 0.518; both with their numbers) and `lesson07.sa.html` (`we-3`, expanding logₐ (x²√y/z³); short-answer Q3, condensing 3 logₐ x − logₐ y + ½ logₐ z). Route entry: `math-a11-e06` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the two painted phones (e05's brief and a reused `ma12-` plate) and a painted combination bike lock for the handoff (prefix `ma11-`); every graph, domain strip and working row coded.

Owner rules applied: as e01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (money and phones: two phones losing value), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Exponential and logarithmic functions, Logarithmic functions), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `cia453eab7`: "Apply the logarithmic laws and results to simplify expressions, solve equations and prove results, using digital tools where necessary"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce

**Boundary:** starts from e05's final frame exactly (the two phones, price tags "$1200, loses 30% a year" and "$800, loses 20% a year", chips "1200 × 0.7ᵗ" and "800 × 0.8ᵗ", the small graph with the two curves meeting near t = 3 marked "?", chips "same value when? 1200 × 0.7ᵗ = 800 × 0.8ᵗ", "t = ?"; "Next: solving with the log laws", "?"). Recalls e05 (the three laws and logₐ a = 1, logₐ 1 = 0), e04 (aˣ = b by the definition; ln) and w04 (factorising quadratics) in a phrase or grey chip each. Teaches: expanding one log into several and condensing several into one (lesson07 `we-3`, Q3); a short "show that" (logₐ (a²/√a) = 3/2); solving a log equation by combining, converting to index form and checking every log's argument is positive (lesson08 `we-2`); solving an exponential equation with different bases by taking logs of both sides and bringing the powers down (the phones, then lesson08 `we-3`), with a graphing app as the digital check (`cia453eab7`). Stops at these four uses. Not taught: the change of base rule as a formula (e07); log graphs (e08).

## Decisions

- **Anchor: two phones losing value (painted plates, live).** A $1200 phone loses 30% of its value each year, and an $800 phone loses 20% a year: values 1200 × 0.7ᵗ and 800 × 0.8ᵗ. The dearer phone falls faster, so their values meet. The unknown is in the power on both sides, with different bases, so e04's single log will not do; taking logs of both sides and using the product and power laws does: t = ln(2/3) / ln(7/8) ≈ 3.04 years, when both are worth about $406. Money and phones; original (the pack offered camera stops and recipe doubling, which fit simplifying but not solving). Depreciation by a fixed percentage appears in w08, w22 and Year 12 d19, f08, f09 (cars), but none compares two items to find when they are equal, and no design uses a phone's value (grep 16 Nov: "resale" one hit, a sneaker in w26 and w27 as a price; "phone.*value" no anchor hit). The model is stated as "say each loses a fixed percentage a year".
- **Digital tools ("using digital tools where necessary").** A graphing app plots both sides of each solved equation and its meeting point; the readouts match the algebra (phones 3.04; site `we-3` 0.518). The calculator evaluates the ln quotients.
- **Simulations (standard item 3).**
  1. **Value race** (scenes 1, 5): coded price tags under the two phones tick down year by year (t from 0 to 6 in 0.1 steps) while the two curves draw; at the meeting point both tags read "$406".
  2. **Domain strip** (`StudioDomainStrip`, scene 4): a number line under the working shades x > 1 from the first line; the candidate roots 3 and −3 drop onto it, one inside, one outside.
  3. **Graphing-app check** (scenes 5, 6): `ScreenApp` plots y = 3^(x+1) and y = 5^(2x) and reads their meeting point, x = 0.518.
- **Colour roles (fixed for the e strand, as e01).** The unknown x or t **blue**; numbers inside logs, values and the domain **teal**; bases **amber**; multipliers that come down by the power law **magenta**; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As e01. Hand tags: "quotient first", "product", "powers come down", "condense: powers up first", "combine", "convert", "check", "x > 1", "outside: reject", "take ln of both sides", "powers come down", "expand the bracket", "collect x", "same as the app".
- **Stage changes (standard item 2).** The phones (1); g01 board, expand and condense (2); g01 board, the "show that" (3); g01 board with the domain strip (4); the phones' equation on the board beside the graph (5); g01 board, site `we-3`, with the app (6); framed card (7); question cards (8 to 11); the bike lock (12); key notes (13).
- **Worked examples (g01 layout).** 2: lesson07 `we-3` (expand) and Q3 (condense). 3: show logₐ (a²/√a) = 3/2 (pack suggestion). 4: lesson08 `we-2`, x = 3 (reject −3); crossed "x = ±3". 5: the phones, t ≈ 3.04 years (original). 6: lesson08 `we-3`, x ≈ 0.518; crossed "x ln 3 + 1".
- **Memory aid.** Framed card: "Logs in the equation: combine, convert, check. Unknown in the powers: take logs, bring the powers down."
- **Visual surprise.** The two phones' tags tick down and land on the same $406 at about 3 years, exactly where the algebra says; and on the domain strip, −3 visibly falls outside the shaded region.
- **Site notes.** lesson08 `we-1` (change of base) is e07's. lesson07 Q2 (expand 2 logₐ x + …) is not used; Q3 is the condense example.
- **Plain meanings at first use.** Expand ("split one log into several"); condense ("join several logs into one"); argument (not used as a word; "the number inside each log"); extraneous (not used; "a solution that the original equation can't accept").
- **Attempts (pack questions).** A1: log₆ x + log₆ (x − 5) = 2 (x = 9, reject −4); crossed "x = 9 or −4". A2: 2^(x+3) = 3ˣ, exact and to 2 decimal places (x = 3 ln 2 / (ln 3 − ln 2) ≈ 5.13); crossed "x ln 2 + 3".
- **Mistake scene:** none separate. Adding arguments (2, a grey ghost crossed); keeping an outside root (4 crossed, A1 crossed); "(x + 1) ln 3 = x ln 3 + 1" (6 crossed, A2 crossed).
- **Cause chain taught, in order:** (1) the laws turn one complicated log into simple ones and back, because each law is an equation that can be read either way (2); (2) a "show that" is the same simplifying with a target (3); (3) a log equation becomes an index equation once both logs are combined into one, and each original log needs a positive number inside, which can reject a root (4); (4) when the unknown is in two powers with different bases, taking logs of both sides lets the power law bring each power down into ordinary algebra (5, 6).
- **Entry knowledge (route):** e05 (the three laws; logₐ 1 = 0, logₐ a = 1); e04 (aˣ = b by the definition; ln); w04 (solving quadratics by factorising).
- **What Year 12 relies on.** d02 and d19 solve exponential equations by taking ln of both sides; d03 uses ln(ab) = ln a + ln b to simplify before differentiating. Scenes 2, 5 and 6 show exactly those moves with ln.
- **Handoff (to math-a11-e07, "Why does the change of base rule work?").** Scene 12: the bike lock plate (`ma11-bike-lock-v1.png`) with four coded digit wheels "0 0 0 0" (teal) on its blank dials; chips "4 dials: 10⁴ = 10 000 codes" (10 amber, 4 blue), "a computer stores yes/no switches: n switches give 2ⁿ codes", "switches for 10 000 codes: 2ⁿ = 10 000, n = log₂ 10 000 = ?"; "Next: changing the base" and "?". This is e07's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Expand: logₐ (x²√y / z³) = logₐ x² + logₐ y^½ − logₐ z³ = 2 logₐ x + ½ logₐ y − 3 logₐ z (x, y, z > 0). Condense: 3 logₐ x − logₐ y + ½ logₐ z = logₐ (x³√z / y).
  (b) Show that: logₐ (a²/√a) = logₐ a^(3/2) = 3/2; or 2 − ½ = 3/2 using logₐ a = 1.
  (c) `we-2`: (x + 1)(x − 1) = 8, x² = 9, x = ±3; need x > 1; x = 3. Check: log₂ 4 + log₂ 2 = 2 + 1 = 3.
  (d) Phones: ln 1200 + t ln 0.7 = ln 800 + t ln 0.8; t(ln 0.7 − ln 0.8) = ln 800 − ln 1200; t = (−0.4055)/(−0.1335) = ln(2/3)/ln(7/8) = 3.0365 years; value 406.28 dollars each. ln 0.7 = −0.3567, ln 0.8 = −0.2231.
  (e) `we-3`: (x + 1) ln 3 = 2x ln 5; x ln 3 + ln 3 = 2x ln 5; ln 3 = x(2 ln 5 − ln 3); x = ln 3/(2 ln 5 − ln 3) = 1.099/(3.219 − 1.099) = 0.51815; check 3^1.518 = 5^1.036 = 5.30.
  (f) A1: x(x − 5) = 36, x² − 5x − 36 = 0, (x − 9)(x + 4) = 0; need x > 5; x = 9. Check log₆ 9 + log₆ 4 = log₆ 36 = 2. A2: (x + 3) ln 2 = x ln 3; x(ln 3 − ln 2) = 3 ln 2; x = 3 ln 2/(ln 3 − ln 2) = ln 8/ln 1.5 = 5.1285 ≈ 5.13; check 2^8.1285 = 279.85 = 3^5.1285.
  (g) Pronunciations: "log base a of x squared root y over z cubed" is not read; the narration says "log base a of x squared, times root y, all over z cubed"; "the natural log of two thirds, over the natural log of seven eighths"; "zero point five one eight".

Main question: *How do the log laws simplify expressions and solve equations? When are a $1200 phone losing 30% a year and an $800 phone losing 20% a year worth the same?*
Entry knowledge (e05, e04, w04): the laws and results; aˣ = b and ln; factorising quadratics.
Stops after: expanding and condensing; a "show that"; log equations with the domain check; exponential equations with different bases by taking logs. No change of base formula, no graphs of logs.
Handoff: math-a11-e07: "a 4-dial lock has 10 000 codes: how many yes/no switches does a computer need to store one?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): the unknown blue; numbers inside logs, values and the domain teal; bases amber; powers brought down magenta; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · EXPONENTIAL AND LOGARITHMIC FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: when are the phones worth the same?
> Here are last time's two phones. Say the twelve-hundred-dollar phone loses thirty per cent of its value every year, so after t years it's worth twelve hundred times zero point seven to the t. The eight-hundred-dollar phone loses twenty per cent a year, so it's worth eight hundred times zero point eight to the t. Watch their values fall. The dearer phone drops faster, and somewhere around three years, they're worth the **same**. To find exactly when, we need to solve twelve hundred times zero point seven to the t, equals eight hundred times zero point eight to the t. The unknown is up in the power, on both sides, with different bases. Last time's method needs a single power on its own, so it won't work here. But the log laws will. So how do the log laws simplify expressions and solve **equations**?

Visual: opens on e05's final frame exactly (the two phones, tags "$1200, loses 30% a year" and "$800, loses 20% a year", chips "1200 × 0.7ᵗ", "800 × 0.8ᵗ", the small graph with "?" at the meeting point, chips "same value when? 1200 × 0.7ᵗ = 800 × 0.8ᵗ", "t = ?", "Next: solving with the log laws", "?"). On the first sentence the "Next" chips fade and the graph grows to 900 × 620 px at the right (t 0 to 6 "years", value 0 to 1300 "$"). On "Watch" a year counter (blue) runs from 0; both tags tick down (teal) as both curves draw; on "same" the counter pauses near 3 and the meeting point rings with "about 3 years?". Row, 56 px: "1200 × 0.7ᵗ = 800 × 0.8ᵗ" (0.7, 0.8 amber, t blue). On "different bases" the two bases ring, grey chip "e04: aˣ = b needs one power alone", crossed lightly. On "equations" heading "Using the log laws", and the question chip "1200 × 0.7ᵗ = 800 × 0.8ᵗ: t = ?" moves to the top right.

### 2. simplifying: expand and condense
> First, simplifying. The laws work in both directions. To expand log base a of x squared, times root y, all over z cubed, use the quotient law first, to split off the bottom. Then the product law splits the top. Then the power law brings each power down. Root y is y to the half, so the answer is two log x, plus a half log y, minus three log **z**. Now condense, the other way. Three log x, minus log y, plus a half log z. First, push each number back up as a power. That's log x cubed, minus log y, plus log root z. Then pluses multiply and minuses divide, so it's log base a of x cubed root z, all over **y**. One trap. A sum of logs joins into the log of a product, never the log of a **sum**.

Visual: clear change to the full-width g01 board; the phones shrink to a 280 px badge with the paused graph. Task strip, 44 px: "Expand logₐ (x²√y / z³)." Rows, current 52 px, earlier 32 px dimmed: "= logₐ (x²√y) − logₐ z³" (tag "quotient first"); "= logₐ x² + logₐ y^½ − logₐ z³" (tag "product", grey "√y = y^½"); on "z" "= 2 logₐ x + ½ logₐ y − 3 logₐ z" (2, ½, 3 magenta; green frame), tag "powers come down". Second task strip: "Condense 3 logₐ x − logₐ y + ½ logₐ z." Rows: "= logₐ x³ − logₐ y + logₐ √z" (tag "condense: powers up first"); on "y" "= logₐ (x³√z / y)" (green frame). On "sum" a grey ghost "logₐ x + logₐ y = logₐ (x + y)" writes and is crossed in red, caption "product, not sum".

### 3. proving: a show that
> The laws also prove results. Show that log base a of a squared over root a equals three halves. Inside the log, a squared over a to the half is a to the three halves, by the index laws. And log base a of a to the three halves is just three halves, because the log undoes the power. That's it. Or split it with the laws. It's log a of a squared, minus log a of root a, which is two, minus a half. Three halves again. Either way, every line follows from a law, and that's what a proof **needs**.

Visual: the board clears row by row (stage continues). Task strip, 44 px: "Show that logₐ (a²/√a) = 3/2." Rows, 52 px: "a²/√a = a² ÷ a^½ = a^(3/2)" with grey chip "w01: index laws"; "logₐ a^(3/2) = 3/2" with grey chip "e03: logₐ aˣ = x", ending "= RHS ✓". Second route in a narrower right column: "= logₐ a² − logₐ a^½ = 2 − ½ = 3/2" with chips "quotient law", "logₐ a = 1". On "needs" hand tag "every line has a reason".

### 4. solving a log equation
> Now solving. Solve log base two of x plus one, plus log base two of x minus one, equals three. Step one, combine. The product law joins them into log base two of x plus one, times x minus one, equals three. Step two, convert to index form. x plus one, times x minus one, equals two cubed, which is eight. So x squared minus one is eight, x squared is nine, and x is three or minus **three**. Step three, check. Each log needs a positive number inside, so x plus one and x minus one must both be positive. That means x has to be greater than **one**. Three works. Minus three makes x minus one equal minus four, and there's no log of a negative. So x equals three only. Keeping minus three is the **slip**.

Visual: clear change to the board with a domain strip (`StudioDomainStrip`, 1,300 px wide, −5 to 5) along the bottom. Task strip, 44 px: "Solve log₂ (x + 1) + log₂ (x − 1) = 3." Rows, 52 px: "log₂ [(x + 1)(x − 1)] = 3" (tag "combine"); "(x + 1)(x − 1) = 2³ = 8" (tag "convert", grey chip "e04: index form"); "x² − 1 = 8, x² = 9"; on "three" "x = 3 or x = −3". On "one" the domain strip shades x > 1 (teal), tag "x > 1", from both "x + 1 > 0" and "x − 1 > 0". The two roots drop as dots onto the strip: 3 lands inside (green), −3 outside (red), tag "outside: reject"; row "x = 3" (green frame); grey check "log₂ 4 + log₂ 2 = 2 + 1 = 3 ✓". On "slip" a red slip "x = ±3" writes and is crossed, caption "check every log's inside".

### 5. solving with different bases: the phones
> Back to the phones. Twelve hundred times zero point seven to the t equals eight hundred times zero point eight to the t. Take the natural log of both sides. The product law splits each side, and the power law brings each t down. So ln twelve hundred, plus t ln zero point seven, equals ln eight hundred, plus t ln zero point **eight**. Now it's ordinary algebra. Collect the t terms on one side, and the numbers on the other. t times ln zero point seven minus ln zero point eight, equals ln eight hundred minus ln twelve hundred. Divide, and t is about three point zero **four**. So after about three years, both phones are worth about four hundred and six dollars. The graph agrees. The curves cross at three point zero **four**.

Visual: clear change: the board at the left (1,100 px), the phones and the graph at the right (700 × 520 px). Rows, 52 px: "1200 × 0.7ᵗ = 800 × 0.8ᵗ"; "ln(1200 × 0.7ᵗ) = ln(800 × 0.8ᵗ)" (tag "take ln of both sides"); on "eight" "ln 1200 + t ln 0.7 = ln 800 + t ln 0.8" (t magenta where it has come down, tag "powers come down", chips "product law", "power law"); "t(ln 0.7 − ln 0.8) = ln 800 − ln 1200"; "t = (ln 800 − ln 1200)/(ln 0.7 − ln 0.8)" with grey "= ln(2/3)/ln(7/8)"; on "four" (first) "t ≈ 3.04 years" (green frame). On "four hundred and six" the year counter runs on from 3 to 3.04 and both phone tags land on "$406". On "four" (last) the `ScreenApp` readout over the graph shows "intersection: t = 3.0365", hand tag "same as the app".

### 6. different bases with a bracket
> One more, with a bracket in the power. Solve three to the x plus one equals five to the two x. Take logs of both sides, and bring the powers down. x plus one, times ln three, equals two x ln five. Now expand the bracket. That gives x ln three, plus ln three. Collect the x terms. ln three equals x times two ln five, minus ln three. So x is ln three over two ln five minus ln three, about zero point five one **eight**. Writing x ln three, plus one, is the slip. The ln three multiplies the whole **bracket**.

Visual: clear change to the g01 board; a small `ScreenApp` (600 × 420 px) at the right plots y = 3^(x+1) and y = 5^(2x) for x −0.5 to 1. Task strip, 44 px: "Solve 3^(x+1) = 5^(2x)." Rows, 52 px: "(x + 1) ln 3 = 2x ln 5" (tag "powers come down"); "x ln 3 + ln 3 = 2x ln 5" (tag "expand the bracket"); "ln 3 = x(2 ln 5 − ln 3)" (tag "collect x"); "x = ln 3 / (2 ln 5 − ln 3)" with grey "≈ 1.099/(3.219 − 1.099)"; on "eight" "x ≈ 0.518" (green frame), the app's intersection readout "0.518". On "bracket" a red slip "x ln 3 + 1" writes and is crossed, caption "ln 3 × the whole bracket".

### 7. memory aid
> Here's the summary. If the logs are in the equation, combine them, convert to index form, then check every log's inside is positive. If the unknown is in the powers, take logs of both sides, and bring the powers **down**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the domain strip small with 3 inside and −3 outside, and the phones' meeting point. Main line, hand font 56 px: "Logs in the equation: combine, convert, check." On "down" the second line, 56 px: "Unknown in the powers: take logs, bring the powers down." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Solve log base six of x, plus log base six of x minus five, equals two. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Solve log₆ x + log₆ (x − 5) = 2." The full question stays on screen. Picture slot: an empty domain strip from −6 to 12, unshaded. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Combine to get log base six of x times x minus five, equals two. In index form, x squared minus five x equals thirty-six. That factorises to x minus nine, times x plus four, so x is nine or minus **four**. Both logs need positive insides, so x must be greater than five. The answer is x equals **nine**. Keeping minus four is the slip.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "log₆ [x(x − 5)] = 2"; "x² − 5x = 6² = 36"; "(x − 9)(x + 4) = 0"; on "four" "x = 9 or −4". The strip shades x > 5; 9 lands inside, −4 outside; on "nine" "x = 9" (green frame). On "the slip" a red slip "x = 9 or −4" writes and is crossed, caption "−4: log of a negative". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Solve two to the x plus three equals three to the x. Give an exact answer, and its value to two decimal places. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Solve 2^(x+3) = 3ˣ, giving an exact answer and its value to 2 decimal places." Picture slot: an empty board with "ln( ) = ln( )". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Take logs, and bring the powers down. x plus three, times ln two, equals x ln three. Expand, so x ln two plus three ln two equals x ln three. Collect x, and x equals three ln two, over ln three minus ln two. That's about five point one **three**. Writing x ln two, plus three, is the slip. The ln two multiplies the whole **bracket**.

Visual: the card shrinks to the top. Rows, 44 px: "(x + 3) ln 2 = x ln 3"; "x ln 2 + 3 ln 2 = x ln 3"; "x(ln 3 − ln 2) = 3 ln 2"; "x = 3 ln 2 / (ln 3 − ln 2)" (exact, framed); on "three" "≈ 5.13" (green frame). On "bracket" a red slip "x ln 2 + 3" writes and is crossed, caption "ln 2 × the whole bracket". Hold about 1 s.

### 12. handoff
> So the log laws simplify, prove and solve. Next, a question about bases. A bike lock has four dials, each from zero to nine, so there are ten to the four, ten thousand codes. A computer stores choices as yes or no switches, and n switches give two to the n codes. So how many switches does it take to store any of ten thousand codes? We need log base two of ten thousand. And how does a base two log relate to the base ten one? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the bike lock plate `ma11-bike-lock-v1.png` (1,000 px) at the left, four coded digit wheels "0 0 0 0" (teal) on its blank dials; on "four dials" the wheels spin and settle; chip "4 dials: 10⁴ = 10 000 codes" (10 amber, 4 blue). On "yes or no switches" a row of coded switches (grey, on/off) at the right, chip "n switches give 2ⁿ codes". On "ten thousand codes" chip "2ⁿ = 10 000, n = log₂ 10 000 = ?" (2 amber, n blue). On "next" chips "Next: changing the base" and "?". Hold about 2 s. This is e07's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Expand: quotient, then product, then power law. Condense: powers up first, then join.
- Log equation: combine into one log, convert to index form, solve.
- Check: every log in the original needs a positive inside; reject other roots.
- Unknown in powers: take ln of both sides, bring powers down, collect x.
- (x + 1) ln 3 = x ln 3 + ln 3, not x ln 3 + 1.

Memory aid (framed card, right side, as in scene 7): *Logs in the equation: combine, convert, check. Unknown in the powers: take logs, bring the powers down.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and e07's opening frame.

## Teaching checks

- **Does it explain causes?** Why the laws expand and condense: each is an equation read both ways (2). Why a proof is valid: every line has a law (3). Why a root is rejected: a log needs a positive inside in the original equation (4). Why taking logs works: the power law turns powers into multipliers (5, 6).
- **Misconceptions addressed:** a sum joining into the log of a sum (2); keeping an outside root (4, A1 crossed); the bracket times ln (6, A2 crossed).
- **Visual standard, item by item:** 1 the phones from the first frame, their tags racing; 2 a new stage every 30 to 60 s; 3 the value race, the domain strip with dropping roots, the app checks; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 2 to 6; 8 framed card and five bullets; 9 both tags landing on $406, and −3 falling outside the shading.
- **One idea at a time:** simplify (2), prove (3), log equation (4), different bases (5), with a bracket (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 25 s and 25 s.
- **Avoided double teaching:** the laws (e05), index form (e04) and factorising (w04) are recalled in grey chips.
- **Syllabus coverage:** `cia453eab7`: simplify (2), prove (3), solve (4 to 6, A1, A2), digital tools (5, 6); key notes 1 to 5.
- **Out of scope by design:** the change of base rule (e07); log graphs (e08).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Solve log₆ x + log₆ (x − 5) = 2."
Model answer: log₆ [x(x − 5)] = 2, so x² − 5x = 36, (x − 9)(x + 4) = 0. Both logs need x > 5, so x = 9 (reject −4). Classic mistake (crossed): "x = 9 or −4".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "Solve 2^(x+3) = 3ˣ, giving an exact answer and its value to 2 decimal places."
Model answer: (x + 3) ln 2 = x ln 3, so x(ln 3 − ln 2) = 3 ln 2 and x = 3 ln 2/(ln 3 − ln 2) (= ln 8/ln 1.5) ≈ 5.13. Classic mistake (crossed): "x ln 2 + 3".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Phones | 1200 × 0.7ᵗ, 800 × 0.8ᵗ; t ≈ 3.04 years; both ≈ $406 | 1, 5 |
| Expand | 2 logₐ x + ½ logₐ y − 3 logₐ z | 2 |
| Condense | logₐ (x³√z / y) | 2 |
| Show that | logₐ (a²/√a) = 3/2 (2 − ½) | 3 |
| `we-2` | x² = 9, x = ±3; x > 1; x = 3; check 2 + 1 = 3 | 4 |
| `we-3` | x = ln 3/(2 ln 5 − ln 3) ≈ 1.099/(3.219 − 1.099) ≈ 0.518 | 6 |
| A1 | x² − 5x − 36 = 0; 9, −4; x > 5; x = 9 | 8, 9 |
| A2 | 3 ln 2/(ln 3 − ln 2) ≈ 5.13 | 10, 11 |
| Handoff | 10⁴ = 10 000 codes; 2ⁿ codes (no answer stated) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 and 17 Nov 2026, scratchpad `e01e08/verify.py`); Codex to re-check.

- Phones: t = ln(2/3)/ln(7/8) = 3.0365; 1200 × 0.7^t = 800 × 0.8^t = 406.28. ln 800 − ln 1200 = −0.4055; ln 0.7 − ln 0.8 = −0.1335.
- logₐ (a²/√a) = 3/2.
- `we-2`: roots ±3; x = 3; log₂ 4 + log₂ 2 = 3.
- `we-3`: x = 0.51815; ln 3 = 1.099; 2 ln 5 = 3.219; 3^1.518 = 5^1.036 = 5.3008.
- A1: x² − 5x − 36 = (x − 9)(x + 4); x = 9; log₆ 36 = 2. A2: x = 3 ln 2/(ln 3 − ln 2) = 5.12853 ≈ 5.13; 2^8.1285 ≈ 3^5.1285 ≈ 279.8.

## Memory aid check

- **"Logs in the equation: combine, convert, check. Unknown in the powers: take logs, bring the powers down."** Original. Meaning, as said in scene 7: a log equation is joined into one log with the laws, rewritten in index form and its roots tested against the original logs' domains; an exponential equation with different bases has ln (or any log) applied to both sides so the power law turns each power into a multiplier. Assumptions checked: both sides positive before taking logs (every exponential side here is positive); "check" means the original equation's logs, not the combined one (scene 4 says this; the combined log of (x + 1)(x − 1) accepts x = −3, the original does not). It helps a new case: log₃ (x + 6) − log₃ x = 1 combines to (x + 6)/x = 3, x = 3, and both logs are defined at 3. Introduced after scenes 1 to 6.
- **Considered, not used:** "cancel the logs" (cancelling log from a sum is a pack misconception).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,517 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the value race, the dropping roots, the app checks) and the 45 s notes scene: about 502 s. Characters per scene (1 to 13): 800, 684, 489, 693, 718, 501, 217, 104, 327, 143, 326, 440, 75. Speech before the notes is about 409 s, under the 570 s cap. Feedback speech: about 25 s and 25 s.

Reserve trims if the voiced take runs long: scene 3's second route ("Or split it with the laws" pair; keep the right column silent); scene 5's "The graph agrees" pair (keep the app readout).

## Scene list and build ids

Lesson key `m-a11e06` (route math-a11-e06). Explainer folder `src/explainer/lessons/math-a11-e06`; build inputs in `docs/production/claude-pm/lessons/math-a11-e06/` (at voicing).

In order (13 scene headings): hook-phones, expand-condense, show-that, log-equation, phones-solved, bracket-bases, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 60 s | 1 | The phones and their value race |
| 60 to 115 s | 2 | g01 board: expand and condense |
| 115 to 150 s | 3 | g01 board: show that |
| 150 to 210 s | 4 | Board with the domain strip |
| 210 to 265 s | 5 | Board beside the phones and the graph |
| 265 to 305 s | 6 | g01 board with the app |
| 305 to 320 s | 7 | Framed memory card |
| 320 to 415 s | 8 to 11 | Question cards and countdowns, then feedback |
| 415 to 450 s | 12 | The bike lock |
| 450 to 495 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e05's last frame continues into 1; 1 to 2 clear change to the board; 2 to 3 board row clear; 3 to 4 clear change (strip added); 4 to 5 clear change (phones return); 5 to 6 clear change to the board; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11e06-learning-review.md`, `science_check` = `checks/m-a11e06-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets`, file list): `biology/y11-lock-key-v1.png` (a lock and key for a biology enzyme analogy) and `chemistry/c4-icon-padlock-box-v1.png` (an icon) are not combination locks; no dial lock exists.

Reused: `maths/ma12-phone-v1.png`, `ma11-phone-budget-v1.png` (e05's brief; scenes 1, 2 badge, 5).

Need (painted, new; see the Codex asset brief): `ma11-bike-lock-v1.png` (this video's handoff and e07).

Coded: the price tags, graph, year counter, domain strip and dots, the app screen, every row, the digit wheels and switches, the countdown, the key notes.

### Studio kit use and additions

Uses: `PlateImg`, `StudioPlot`, `StudioDomainStrip`, `ScreenApp`, `WorkingBoard`, `TaskStrip`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Root drop onto the domain strip** (small): candidate roots fall as dots from a working row onto the strip, turning green inside the shading and red outside. Check: dots land within 2 px of their values.
2. **Digit wheels on a plate** (small): four coded wheels (0 to 9) drawn into the lock sidecar's dial windows, able to spin and settle.

## Codex asset brief (Maths A11 E06, a combination bike lock; it opens e07)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-e06.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the e06 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-bike-lock-v1.png` (2000 × 1200 px): a coiled steel-cable bike lock with a black combination head, the head seen face-on at the centre, the coiled cable looping behind it. The head has four rotating dials side by side, each with a **blank, flat window** where a digit would show (code draws the digits), all four windows the same size and level.

Sidecar JSON (`ma11-bike-lock-v1.json`): the pixel rectangle of each of the four dial windows. Report inspection on the paper background (`#f6f1e7`) at 1,000 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-e06-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm every log equation is checked against the original equation's logs, and the rejected roots are rejected for the stated reason.
4. Confirm the phones' answer (3.04 years, about $406) and the app readouts match the algebra.
5. Confirm the change of base rule is not stated as a formula (the quotients here come from collecting terms).
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on e05's final frame.

## YouTube metadata (draft)

Title: Using the Log Laws: Simplify, Prove and Solve | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson08.sa.html

A $1200 phone loses 30% of its value each year, and an $800 phone loses 20%. When are they worth the same? With the unknown in two powers, you need the log laws. Expand and condense logs, prove a short result, solve log equations (and check which roots the original equation can accept), and solve exponential equations with different bases by taking logs of both sides, checking with a graphing app. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Exponential and logarithmic functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply the logarithmic laws and results to simplify expressions, solve equations and prove results, using digital tools where necessary"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce

Builds on: The log laws; solving aˣ = b. Next: The change of base rule.

#Year11Maths #MathsAdvanced #Logarithms #HSCScience

## Open decisions

- **1. Pace (learning review).** Five worked tasks (expand and condense, show that, a log equation, the phones, site `we-3`) in about 4.5 minutes. The pack allows splitting simplifying from solving if the video runs long; it does not (speech about 409 s). If the reviewer finds scene 6 rushed after scene 5, cut scene 6 to its rows with the crossed slip (A2 practises the same move) rather than splitting the video.
- **2. Phone depreciation (root).** A fixed percentage a year is a model, stated as "say". Root may prefer rounder figures; the chosen ones give a clean graph crossing near 3 years.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from e05, e04 and w04; check that "combine, convert, check" is followed in order on screen, that the domain strip makes the rejection visible and caused, and that the phones' answer feels earned), then the Codex maths check and error check, then voicing and a build to grade A.
