# Maths A11 E05: How do the log laws follow from the index laws? Deriving the product, quotient and power laws, and justifying logₐ a = 1, logₐ 1 = 0 and logₐ (1/x) = −logₐ x (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-c06.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,579 characters by script (see "Narration length estimate"), 13 scene headings, about 507 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fifty-fourth video of Year 11 Mathematics Advanced (2024), outline order 54, Exponential and logarithmic functions. Pre-design pack: `../pre-design/maths-a11/math-a11-e05.md` (brief 243). Site lesson (read through the pack's quotations, read only): `exponential-and-logarithmic-functions/lesson07.sa.html` (the "Why do the log laws work?" card; `we-1`, log₂ 3 + log₂ 4 = log₂ 12; `we-2`, log₃ 54 − log₃ 2 = 3; all with their numbers; `we-3`, the three-law expansion, is used in e06). Route entry: `math-a11-e05` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted slide rule (e04's brief) and two painted phones for the handoff (prefix `ma11-`, one reused `ma12-`); every scale, column, row and test coded.

Owner rules applied: as e01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (an object at home: a slide rule), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Exponential and logarithmic functions, Logarithmic functions), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci348896a1`: "Derive the laws of logarithms from the laws of indices log_a m + log_a n = log_a (mn), log_a m - log_a n = log_a (m/n) and log_a (m^n) = nlog_a m"
- `ci55afa938`: "Justify the logarithmic results log_a a = 1, log_a 1 = 0 and log_a (1/x) = -log_a x"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce

**Boundary:** starts from e04's final frame exactly (the slide rule plates with coded log scales, the slide's 1 over the body's 2, the cursor at the slide's 3 meeting the body's 6; chips "2 × 3 = 6, by adding lengths?", "length to 2 + length to 3 = length to 6", "?"; "Next: the log laws", "?"). Recalls w01 (the index laws aᵖ × a^q = a^(p+q), aᵖ ÷ a^q = a^(p−q), (aᵖ)ⁿ = a^(pn), a⁰ = 1) and e03 (a log is an index; aˣ = y ⇔ logₐ y = x) in a phrase or grey chip each. Teaches: the slide rule's scales are log scales, so adding lengths adds logs (log 2 + log 3 = log 6); the product law derived from the first index law (`ci348896a1`); the quotient and power laws the same way; site `we-1` and `we-2` and a power example; logₐ a = 1, logₐ 1 = 0 and logₐ (1/x) = −logₐ x justified, with base e (ln 1 = 0, ln e = 1, ln(1/3) = −ln 3) (`ci55afa938`); three tempting non-laws tested with numbers and crossed. Stops at the laws and results themselves. Not taught: using them to simplify longer expressions and solve equations (e06); change of base (e07).

## Decisions

- **Anchor: a slide rule (painted plates, live).** A slide rule's scales put each number at a distance from the 1 that is proportional to its log (base 10). Sliding one scale along the other adds two distances, and the cursor lands on the product: 2 × 3 = 6, 1.5 × 4 = 6, 2.5 × 3 = 7.5. So the tool is a working picture of logₐ (mn) = logₐ m + logₐ n, and the video's question ("why does adding lengths multiply?") is answered by the derivation in scene 2. The object only; the narration says it was used "before calculators". The pack's anchor 1. No Year 12 or a11 design uses a slide rule as an anchor (grep 16 Nov: "slide rule" appears only in i05 as part of "squash and slide rules", d01's transformation names).
- **Simulations (standard item 3).**
  1. **Working slide rule** (scenes 1, 2, 4): the slide moves to set any first factor; the cursor finds the product; teal bars under the scales show the two lengths and their sum, with readouts "log 2 = 0.301", "log 3 = 0.477", "sum 0.778 = log 6". A second run: 1.5 × 4 = 6 (0.176 + 0.602 = 0.778).
  2. **Index-to-log columns** (`EquationStrip` pair, scenes 2, 3): the index law on the left, the log law on the right, joined by "let m = aᵖ, n = a^q"; tokens p and q (blue) travel across from the powers to the logs.
  3. **Number tests** (scene 6): each tempting non-law is evaluated on a coded calculator strip with real numbers; the two sides disagree on screen before it is crossed.
- **Colour roles (fixed for the e strand, as e01).** Indices and log values **blue** (p, q, the powers); the numbers m, n, x (the logs' arguments) **teal**; the base a **amber**; the power n in the power law **magenta** (a multiplier once it comes out the front, as k in e01); answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As e01. Hand tags: "lengths are logs", "a log is an index", "multiply ⇒ add indices", "divide ⇒ subtract", "power ⇒ multiply", "m, n > 0", "a¹ = a", "a⁰ = 1", "1/x = x⁻¹", "between 0 and 1: negative", "test it with numbers", "not a law".
- **Stage changes (standard item 2).** The slide rule (1); the product-law columns (2); the quotient and power columns (3); g01 board, site `we-1`, `we-2` and a power example (4); the three results card with base e (5); the number-test strip of non-laws (6); framed card (7); question cards (8 to 11); the two phones (12); key notes (13).
- **Worked examples (g01 layout).** 4: site `we-1`, log₂ 3 + log₂ 4 = log₂ 12; site `we-2`, log₃ 54 − log₃ 2 = log₃ 27 = 3; power, log₂ (4³) = 3 log₂ 4 = 6 (checked: 4³ = 64 = 2⁶). 5: ln(1/3) = −ln 3 ≈ −1.099. 6: crossed non-laws.
- **Memory aid.** Framed card: "Logs turn times into plus, divide into minus, and powers into multipliers." Second line: "Because a log is an index: these are the index laws in disguise."
- **Visual surprise.** The slide rule really multiplies on screen by adding two bars, and the bar lengths read as the logs, 0.301 + 0.477 = 0.778, which is log 6.
- **Site notes (pack section 8).** lesson07's star-magnitude hook (science) is not used. `ci55afa938` is partial on the site: logₐ (1/x) = −logₐ x is justified here (scene 5) and again by a second route in A2.
- **Plain meanings at first use.** Derive ("show it follows from something we already know"); justify ("give the reason it's true"); law ("a rule that works for every allowed number").
- **Attempts (pack questions).** A1: given log₂ 5 ≈ 2.32, find log₂ 20, log₂ (1/5) and log₂ 125 (≈ 4.32, −2.32, 6.96); crossed "log₂ 20 = 4 × 2.32". A2: prove logₐ (1/x) = −logₐ x using the index laws directly (let p = logₐ x); crossed "logₐ (1/x) = 1/logₐ x".
- **Mistake scene:** scene 6, because three specific non-laws ("log of a sum", "log squared", "log of a reciprocal") are the classic misreadings of the laws just derived, and testing each with numbers resolves them faster than a warning. The other slips are crossed where they arise (4, A1, A2).
- **Cause chain taught, in order:** (1) the slide rule places numbers by their logs, so adding lengths adds logs (1); (2) a log is an index, and multiplying powers of a adds their indices, so the log of a product is the sum of the logs (2); (3) dividing subtracts indices and raising to a power multiplies them, giving the other two laws (3); (4) a¹ = a and a⁰ = 1 give logₐ a = 1 and logₐ 1 = 0, and then the quotient law gives logₐ (1/x) = −logₐ x (5); (5) the laws are about products, quotients and powers only, so a sum, a squared log or a reciprocal of a log has no law (6).
- **Entry knowledge (route):** e03 (logs as indices; logₐ aˣ = x and a^(logₐ x) = x); w01 (index laws).
- **What Year 12 relies on.** d03 shows "Year 11 log law: ln(ab) = ln a + ln b (a, b > 0)"; d04 shows "Year 11 log law: ln(1/3) = −ln 3" and assumes logₐ 1 = 0 and "ln of a number between 0 and 1 is negative". Scenes 2 and 5 state the product law with its conditions and write ln(1/3) = −ln 3, ln 1 = 0 and ln e = 1 explicitly, with "a number between 0 and 1 has a negative log" as the spoken reason.
- **Handoff (to math-a11-e06, "How do the log laws simplify expressions and solve equations?").** Scene 12: two phones side by side (the reused `ma12-phone-v1.png`, larger, and `ma11-phone-budget-v1.png`), coded price tags "$1200, loses 30% a year" and "$800, loses 20% a year" (teal), chips "1200 × 0.7ᵗ" and "800 × 0.8ᵗ" (0.7, 0.8 amber, t blue), a small graph of both values for t 0 to 6 years crossing near 3, and chips "same value when? 1200 × 0.7ᵗ = 800 × 0.8ᵗ", "t = ?"; "Next: solving with the log laws" and "?". This is e06's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) log₁₀ 2 = 0.3010, log₁₀ 3 = 0.4771, sum 0.7782 = log₁₀ 6. log₁₀ 1.5 = 0.1761, log₁₀ 4 = 0.6021, sum 0.7782. 2.5 × 3 = 7.5 shown without values.
  (b) Product: m = aᵖ, n = a^q, mn = a^(p+q), logₐ (mn) = p + q. Quotient: a^(p−q). Power: mⁿ = (aᵖ)ⁿ = a^(pn), logₐ mⁿ = n logₐ m. Conditions: m, n > 0 (so the logs exist), a > 0, a ≠ 1; n any real in the power law.
  (c) `we-1`: log₂ 12. `we-2`: 54/2 = 27 = 3³, 3. Power: log₂ 4³ = log₂ 64 = 6 = 3 × 2.
  (d) logₐ a = 1; logₐ 1 = 0; logₐ (1/x) = 0 − logₐ x. ln 3 = 1.0986, ln(1/3) = −1.0986.
  (e) Non-law tests: log₂ (4 + 4) = log₂ 8 = 3, but log₂ 4 + log₂ 4 = 4. (log₂ 8)² = 9, but 2 log₂ 8 = 6. log₂ (1/8) = −3, but 1/log₂ 8 = 1/3.
  (f) A1: log₂ 5 = 2.32193. log₂ 20 = 2 + log₂ 5 = 4.32. log₂ (1/5) = −2.32. log₂ 125 = 3 log₂ 5 = 6.96 (6.97 from the unrounded value; the narration says "about six point nine six" because the question gives 2.32). Slip: 4 × 2.32 = 9.28.
  (g) Pronunciations: "log base a of m n"; "log base a of m over n"; "log base a of m to the n"; "n times log base a of m"; "the natural log of a third"; "minus the natural log of three".
  (h) Phones handoff: values meet at t ≈ 3.04 years (about $406); not stated here.

Main question: *How do the log laws follow from the index laws? Why does a slide rule multiply by adding lengths?*
Entry knowledge (e03, w01): a log is an index; the index laws.
Stops after: the product, quotient and power laws derived; logₐ a = 1, logₐ 1 = 0, logₐ (1/x) = −logₐ x justified, with base e. No equation solving, no change of base.
Handoff: math-a11-e06: "a $1200 phone loses 30% a year and an $800 phone loses 20% a year: when are they worth the same?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): indices and log values blue; numbers m, n, x teal; base amber; the power n magenta; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · EXPONENTIAL AND LOGARITHMIC FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: adding lengths to multiply
> Here's the slide rule from last time. Before calculators, this was how people multiplied. Slide the middle scale so its one sits over the two. Find three on the middle scale, and underneath it is **six**. Two times three is six, and all we did was add two lengths. Here's the secret. Each number sits at a distance from the one that's equal to its log, base ten. Log two is about zero point three zero one, and log three is about zero point four seven seven. Add them, and you get zero point seven seven eight, which is log **six**. It works for any pair. One and a half times four lands on six as well. So adding logs gives the log of the product. Why would that be true? How do the log laws follow from the index **laws**?

Visual: opens on e04's final frame exactly (the slide rule plates with coded scales, the slide offset so its 1 sits over the body's 2, the cursor at the slide's 3 meeting the body's 6, chips "2 × 3 = 6, by adding lengths?", "length to 2 + length to 3 = length to 6", "?", "Next: the log laws", "?"). On the first sentence the "Next" chips fade and the slide returns to zero, then moves again so its 1 sits over the 2; the cursor slides to the slide's 3; on "six" (first) the body's 6 rings green. On "secret" teal bars draw under the body: from 1 to 2 labelled "log 2 ≈ 0.301", from 2 to 6 (the slide's 1 to 3) labelled "log 3 ≈ 0.477", and a long bar from 1 to 6 "log 6 ≈ 0.778"; hand tag "lengths are logs". On "six" (second) the row "0.301 + 0.477 = 0.778 = log 6" writes (60 px). On "One and a half" the slide resets and runs 1.5 × 4 = 6, bars "0.176 + 0.602 = 0.778". On "laws" heading "The log laws", and the question chip "Why does log m + log n = log mn?" moves to the top right.

### 2. deriving the product law
> Remember, a log is an index. So let's write both numbers as powers of the same base, a. Say m is a to the p, and n is a to the q. Then p is log base a of m, and q is log base a of n. Now multiply. m times n is a to the p, times a to the q. By the index law, multiplying powers of the same base adds the indices, so m n is a to the p plus **q**. Now read that as a log. The power that turns a into m n is p plus q. So log base a of m n equals p plus q, which is log base a of m, plus log base a of **n**. That's the product law. The log of a product is the sum of the logs. It's the index law, written in log form. And m and n have to be positive, so that their logs exist. That's exactly what the slide rule was doing. It adds logs, to multiply **numbers**.

Visual: stage change: the slide rule shrinks to a 300 px badge at the top left (bars still showing). Two columns (`EquationStrip` pair), 52 px: left heading "index law", right heading "log law". Linking strip across the top: "let m = aᵖ, n = a^q" (a amber, p and q blue, m and n teal), under it grey "so p = logₐ m, q = logₐ n" with grey chip "e03: aˣ = y ⇔ logₐ y = x"; hand tag "a log is an index". Left: "mn = aᵖ × a^q"; on "q" "mn = a^(p+q)" with grey chip "w01: aᵖ × a^q = a^(p+q)", hand tag "multiply ⇒ add indices". The tokens p and q travel across to the right column: "logₐ (mn) = p + q"; on "n" "logₐ (mn) = logₐ m + logₐ n" (framed, 60 px). Grey chip "m, n > 0". On "numbers" the slide rule badge pulses with "log 2 + log 3 = log 6".

### 3. the quotient and power laws
> The other two laws come the same way. Divide instead. m over n is a to the p, over a to the q, which is a to the p minus q, because dividing powers subtracts the indices. So log base a of m over n is log base a of m, minus log base a of **n**. That's the quotient law. Now raise m to a power, n. m to the n is a to the p, all to the n, which is a to the p times n, because a power of a power multiplies the indices. So log base a of m to the n is n times log base a of m. The power comes down out the front, as a **multiplier**. That's the power law.

Visual: clear change: the columns clear; the linking strip stays at the top. Left rows, 52 px: "m/n = aᵖ ÷ a^q = a^(p−q)", grey chip "w01: aᵖ ÷ a^q = a^(p−q)", hand tag "divide ⇒ subtract"; right row on "n" "logₐ (m/n) = logₐ m − logₐ n" (framed). Then the left "mⁿ = (aᵖ)ⁿ = a^(pn)" (n magenta), grey chip "w01: (aᵖ)ⁿ = a^(pn)", tag "power ⇒ multiply"; on "multiplier" the right "logₐ (mⁿ) = n logₐ m" (framed; the n slides down from the exponent to the front, magenta). The three laws now stand as a framed set of three rows at the right.

### 4. worked example: using each law
> Let's use them. Log base two of three, plus log base two of four. The product law joins them into log base two of three times four, which is log base two of **twelve**. Next, log base three of fifty-four, minus log base three of two. The quotient law gives log base three of fifty-four over two, that's log base three of twenty-seven. And twenty-seven is three cubed, so the answer is **three**. Last, log base two of four cubed. The power law brings the three down, so it's three times log base two of four. Log base two of four is two, so the answer is **six**. Check it. Four cubed is sixty-four, which is two to the six. It **matches**.

Visual: clear change to the full-width g01 board. Three task strips stacked, 44 px: "Simplify: (a) log₂ 3 + log₂ 4 (b) log₃ 54 − log₃ 2 (c) log₂ (4³)". Rows, current 52 px, earlier 32 px dimmed: "(a) = log₂ (3 × 4)" with chip "product law"; on "twelve" "= log₂ 12" (green frame). "(b) = log₃ (54/2) = log₃ 27" with chip "quotient law"; "27 = 3³"; on "three" "= 3" (green frame). "(c) = 3 log₂ 4" (3 magenta) with chip "power law"; "log₂ 4 = 2"; on "six" "= 6" (green frame). On "matches" grey row "4³ = 64 = 2⁶ ✓". The slide rule badge shows the slide set for 3 × 4 = 12.

### 5. three results worth knowing
> Now three results that follow straight away. First, log base a of a is one, because a to the one is a. Second, log base a of one is zero, because a to the zero is one. Third, log base a of one over x. Use the quotient law. It's log base a of one, minus log base a of x, and log base a of one is zero. So log base a of one over x is minus log base a of **x**. With base e, these say the natural log of e is one, the natural log of one is zero, and the natural log of a third is minus the natural log of three. That's about minus one point zero nine **nine**. So any number between zero and one has a negative natural log. It's the reciprocal of a number bigger than **one**.

Visual: stage change: a card at the left (950 px), a small graph at the right (y = ln x for x 0.2 to 4, 560 × 420 px; e08 teaches this graph, so it is shown only as points, unlabelled curve faint). Rows, 52 px, each with its reason: "logₐ a = 1" with "a¹ = a" (tag "a¹ = a"); "logₐ 1 = 0" with "a⁰ = 1" (tag "a⁰ = 1"); "logₐ (1/x) = logₐ 1 − logₐ x" (chip "quotient law"); on "x" "= −logₐ x" (framed, 60 px). Base e rows, 52 px: "ln e = 1", "ln 1 = 0", "ln(1/3) = −ln 3"; on "nine" "≈ −1.099" (green frame); the points (3, 1.099) and (1/3, −1.099) mark on the small graph, mirror-paired about the x-axis. On "one" (last) hand tag "between 0 and 1: negative", with "1/3 = reciprocal of 3".

### 6. what the laws don't say
> The laws are about products, quotients and powers. They say nothing about sums. So test the tempting ones with numbers. Is log base two of four plus four, the same as log base two of four, plus log base two of four? The left side is log base two of eight, which is three. The right side is two plus two, which is four. Not **equal**. Is log base two of eight, all squared, the same as two log base two of eight? That's nine against six. **No**. And is log base two of an eighth the same as one over log base two of eight? That's minus three against a third. **No** again. When you're not sure about a law, test it with **numbers**.

Visual: stage change: the number-test strip, three rows, each with a coded calculator check, 48 px. Row 1: "log₂ (4 + 4) ≟ log₂ 4 + log₂ 4": left "log₂ 8 = 3", right "2 + 2 = 4"; on "equal" "3 ≠ 4" and the claim is crossed in red, caption "no law for sums". Row 2: "(log₂ 8)² ≟ 2 log₂ 8": "9" against "6"; on "No" crossed, caption "log squared ≠ power law". Row 3: "log₂ (1/8) ≟ 1/log₂ 8": "−3" against "⅓"; on "No" (second) crossed, caption "it's −log₂ 8". On "numbers" hand tag "test it with numbers".

### 7. memory aid
> Here's the summary. Logs turn times into plus, divide into minus, and powers into multipliers. That's because a log is an index. These are the index laws, in **disguise**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the slide rule small, set at 2 × 3 = 6. Main line, hand font 56 px: "Logs turn times into plus, divide into minus, and powers into multipliers." On "disguise" the key line, 40 px: "Because a log is an index: these are the index laws in disguise." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Given that log base two of five is about two point three two, find log base two of twenty, log base two of a fifth, and log base two of a hundred and twenty-five. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Given log₂ 5 ≈ 2.32, find (a) log₂ 20 (b) log₂ (1/5) (c) log₂ 125." The full question stays on screen. Picture slot: the three laws' card, blank right-hand sides. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Twenty is four times five, so log base two of twenty is two, plus two point three two, about four point three **two**. A fifth gives minus log base two of five, about minus two point three **two**. And a hundred and twenty-five is five cubed, so it's three times two point three two, about six point nine **six**. Multiplying two point three two by four is the slip.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "(a) log₂ (4 × 5) = log₂ 4 + log₂ 5 = 2 + 2.32"; on "two" (first) "≈ 4.32" (green frame). On "two" (second) "(b) −log₂ 5 ≈ −2.32" (green frame). "(c) log₂ 5³ = 3 log₂ 5"; on "six" "≈ 6.96" (green frame). On "the slip" a red slip "log₂ 20 = 4 × 2.32" writes and is crossed, caption "× inside becomes + outside". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Prove that log base a of one over x equals minus log base a of x, for x greater than zero, using the index laws directly. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Prove that logₐ (1/x) = −logₐ x for x > 0, using the index laws." Picture slot: an empty linking strip "let … = …". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Let p be log base a of x, so x is a to the **p**. Then one over x is one over a to the p, which is a to the minus p, by the index laws. So log base a of one over x is minus p, which is minus log base a of **x**. Writing one over log base a of x is the slip. The minus sign comes from the index, not a **reciprocal**.

Visual: the card shrinks to the top. Rows, 44 px: "let p = logₐ x"; on "p" "x = aᵖ"; "1/x = 1/aᵖ = a⁻ᵖ" with grey chip "w01: a⁻ⁿ = 1/aⁿ"; "logₐ (1/x) = −p"; on "x" "= −logₐ x" (green frame). On "reciprocal" a red slip "1/logₐ x" writes and is crossed, caption "minus, not reciprocal". Hold about 1 s.

### 12. handoff
> So the log laws are the index laws, read as logs. Next, we put them to work. Two phones. One cost twelve hundred dollars and loses thirty per cent of its value every year. The other cost eight hundred and loses twenty per cent a year. The dearer one is falling faster, so at some point they're worth the same. When? The unknown is up in the power, on both sides, with two different bases. The log laws will get it down. That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the two phones: `ma12-phone-v1.png` (480 px tall) and `ma11-phone-budget-v1.png` (400 px tall) side by side at the left, coded price tags beneath, "$1200, loses 30% a year" and "$800, loses 20% a year" (teal). Chips "value: 1200 × 0.7ᵗ" and "800 × 0.8ᵗ" (0.7, 0.8 amber, t blue). On "worth the same" a small graph (600 × 420 px, t 0 to 6 "years", value 0 to 1300 "$") draws both decay curves, meeting near t = 3, the meeting point marked "?". On "two different bases" chip "same value when? 1200 × 0.7ᵗ = 800 × 0.8ᵗ" and "t = ?". On "next" chips "Next: solving with the log laws" and "?". Hold about 2 s. This is e06's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- logₐ (mn) = logₐ m + logₐ n (from aᵖ × a^q = a^(p+q)); m, n > 0.
- logₐ (m/n) = logₐ m − logₐ n (from aᵖ ÷ a^q = a^(p−q)).
- logₐ (mⁿ) = n logₐ m (from (aᵖ)ⁿ = a^(pn)).
- logₐ a = 1, logₐ 1 = 0, logₐ (1/x) = −logₐ x; ln(1/3) = −ln 3.
- No law for logₐ (m + n), (logₐ m)² or 1/logₐ m.

Memory aid (framed card, right side, as in scene 7): *Logs turn times into plus, divide into minus, and powers into multipliers.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and e06's opening frame.

## Teaching checks

- **Does it explain causes?** Why the slide rule multiplies: its lengths are logs (1, 2). Why each law holds: it is an index law with the indices renamed as logs (2, 3). Why logₐ a = 1 and logₐ 1 = 0 (5). Why logₐ (1/x) = −logₐ x, by two routes (5, A2). Why numbers between 0 and 1 have negative logs (5). Why the non-laws fail (6, tested).
- **Misconceptions addressed:** the log of a sum (6); a squared log as the power law (6); logₐ (1/x) as 1/logₐ x (6, A2 crossed); multiplying a log by the factor (A1 crossed).
- **Visual standard, item by item:** 1 the slide rule from the first frame, working live; 2 a new stage every 30 to 55 s; 3 the slide rule with bars, the travelling index tokens, the number tests; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 4; 8 framed card and five bullets; 9 two bars adding to log 6, and each non-law failing on real numbers.
- **One idea at a time:** the slide rule (1), the product law (2), the other laws (3), using them (4), the three results (5), the non-laws (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 27 s and 23 s.
- **Avoided double teaching:** index laws (w01) and logs as indices (e03) are recalled in grey chips.
- **Syllabus coverage:** `ci348896a1` (1 to 4, A1; key notes 1 to 3); `ci55afa938` (5, A1 (b), A2; key note 4).
- **Out of scope by design:** expanding and condensing longer expressions and solving equations (e06); change of base (e07).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Given log₂ 5 ≈ 2.32, find (a) log₂ 20 (b) log₂ (1/5) (c) log₂ 125."
Model answer: (a) log₂ 4 + log₂ 5 ≈ 2 + 2.32 = 4.32. (b) −log₂ 5 ≈ −2.32. (c) 3 log₂ 5 ≈ 6.96 (6.97 from the unrounded value). Classic mistake (crossed): "4 × 2.32".

**Attempt 2 (scene 10; original proof, HSC style, 2 marks suggested).** "Prove that logₐ (1/x) = −logₐ x for x > 0, using the index laws."
Model answer: let p = logₐ x, so x = aᵖ. Then 1/x = a⁻ᵖ, so logₐ (1/x) = −p = −logₐ x. Classic mistake (crossed): "1/logₐ x".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Slide rule | log 2 ≈ 0.301, log 3 ≈ 0.477, sum 0.778 = log 6; 1.5 × 4: 0.176 + 0.602 | 1, 2 |
| `we-1` | log₂ 3 + log₂ 4 = log₂ 12 | 4 |
| `we-2` | log₃ 54 − log₃ 2 = log₃ 27 = 3 | 4 |
| Power | log₂ 4³ = 3 log₂ 4 = 6; 4³ = 64 = 2⁶ | 4 |
| Results | logₐ a = 1; logₐ 1 = 0; ln(1/3) = −ln 3 ≈ −1.099 | 5 |
| Non-laws | 3 against 4; 9 against 6; −3 against ⅓ | 6 |
| A1 | 4.32; −2.32; 6.96; slip 9.28 | 8, 9 |
| A2 | proof | 10, 11 |
| Handoff | $1200, 30%; $800, 20%; 1200 × 0.7ᵗ, 800 × 0.8ᵗ (no answer stated) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 and 17 Nov 2026, scratchpad `e01e08/verify.py`); Codex to re-check.

- log₁₀ 2 = 0.3010; log₁₀ 3 = 0.4771; log₁₀ 6 = 0.7782; log₁₀ 1.5 = 0.1761; log₁₀ 4 = 0.6021.
- log₂ 3 + log₂ 4 = log₂ 12; log₃ 54 − log₃ 2 = 3; log₂ 4³ = 6.
- ln(1/3) = −1.0986.
- log₂ 8 = 3, log₂ 4 + log₂ 4 = 4; (log₂ 8)² = 9, 2 log₂ 8 = 6; log₂ (1/8) = −3.
- A1: log₂ 5 = 2.32193; 2 + 2.32 = 4.32; 3 × 2.32 = 6.96 (3 log₂ 5 = 6.9658).

## Memory aid check

- **"Logs turn times into plus, divide into minus, and powers into multipliers."** A common mnemonic, phrased for this video. Meaning, as said in scene 7: logₐ (mn) = logₐ m + logₐ n; logₐ (m/n) = logₐ m − logₐ n; logₐ (mⁿ) = n logₐ m. Assumptions checked: m, n > 0 and a > 0, a ≠ 1 (key note 1); "times" means a product inside one log, not a product of two logs (scene 6 and key note 5 cover the misreadings). It helps a new case: log₃ (9 × 27) = 2 + 3 = 5, and 3⁵ = 243 = 9 × 27. Introduced after scenes 1 to 6.
- **Considered, not used:** "the log of a sum is the sum of the logs" (false; it is the trap).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,579 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the slide rule runs, the token moves, the number tests) and the 45 s notes scene: about 507 s. Characters per scene (1 to 13): 712, 745, 542, 624, 661, 615, 167, 195, 354, 153, 304, 432, 75. Speech before the notes is about 414 s, under the 570 s cap. Feedback speech: about 27 s and 23 s.

Reserve trims if the voiced take runs long: scene 1's "One and a half times four" pair (keep the second run silent); scene 4's "Check it" pair (keep the grey row).

## Scene list and build ids

Lesson key `m-a11e05` (route math-a11-e05). Explainer folder `src/explainer/lessons/math-a11-e05`; build inputs in `docs/production/claude-pm/lessons/math-a11-e05/` (at voicing).

In order (13 scene headings): hook-slide-rule, product-law, quotient-power-laws, using-the-laws, three-results, non-laws, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 60 s | 1 | The slide rule working, with log bars |
| 60 to 125 s | 2 | Columns: the product law |
| 125 to 170 s | 3 | Columns: quotient and power laws |
| 170 to 220 s | 4 | g01 board: three examples |
| 220 to 275 s | 5 | Results card with base e |
| 275 to 320 s | 6 | Number tests of the non-laws |
| 320 to 335 s | 7 | Framed memory card |
| 335 to 430 s | 8 to 11 | Question cards and countdowns, then feedback |
| 430 to 465 s | 12 | The two phones |
| 465 to 510 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e04's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11e05-learning-review.md`, `science_check` = `checks/m-a11e05-maths-check.md`.

## Assets

Inspected before choosing (16 and 17 Nov 2026, `public/assets`, actual appearance): `maths/ma12-phone-v1.png` (a front-on smartphone, pale metal frame, blank dark screen, true alpha): usable as the dearer phone. No second, visibly different phone exists (`ma12-phone-dock-v1.png` is a dock).

Reused: `ma11-slide-rule-body-v1.png`, `ma11-slide-rule-slide-v1.png` (e04's brief; scenes 1, 2 badge, 4 badge, 7); `maths/ma12-phone-v1.png` (scene 12; e06).

Need (painted, new; see the Codex asset brief): `ma11-phone-budget-v1.png` (this video's handoff and e06).

Coded: the log scales, bars and cursor, the columns and tokens, every row, the number tests, the small graphs, the price tags, the countdown, the key notes.

### Studio kit use and additions

Uses: `PlateImg`, `EquationStrip`, `WorkingBoard`, `TaskStrip`, `StudioPlot`, `ScreenApp` (calculator strip), `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Slide rule** (medium; reused by no other video yet): coded C and D log scales (marks 1 to 10 at log₁₀ spacing, sub-ticks at 0.1 from 1 to 2) drawn into the sidecar's bands; the slide plate translates horizontally; a hairline cursor; teal bars for lengths. Check: with the slide's 1 over the body's 2, the slide's 3 sits over the body's 6 within 2 px.
2. **Index token travel** (small): a coloured token moves from an exponent position in one column to a term in the other.

## Codex asset brief (Maths A11 E05, a budget phone; it pairs with the reused `ma12-phone-v1.png` and opens e06)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-e05.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the e05 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma12-phone-v1.png` (same front-on view, same lighting); no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-phone-budget-v1.png` (820 × 1500 px): a smaller, plainer smartphone than `ma12-phone-v1.png`: a matte dark-blue plastic frame with slightly thicker bezels and a small round front-camera dot instead of a notch, blank dark screen, front-on. It must read as a cheaper model next to the reused phone at the sizes in scene 12.

Report inspection beside `ma12-phone-v1.png` on the paper background (`#f6f1e7`) at 480 px and 400 px tall, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-e05-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quotes match the route-inputs JSON exactly.
3. Confirm each law is derived from the matching index law with "let m = aᵖ, n = a^q", and the conditions m, n > 0 appear.
4. Confirm ln(1/3) = −ln 3, ln 1 = 0 and ln e = 1 appear on screen (Year 12 d03, d04).
5. Confirm no equation is solved and no change of base is used.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on e04's final frame.

## YouTube metadata (draft)

Title: The Log Laws, Derived from the Index Laws | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson07.sa.html

Before calculators, a slide rule multiplied 2 × 3 by adding two lengths. Why does that work? Because a log is an index. Derive the product, quotient and power laws of logarithms from the index laws, use each one, justify logₐ a = 1, logₐ 1 = 0 and logₐ(1/x) = −logₐ x (with the natural log too), and test the tempting rules that aren't laws. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Exponential and logarithmic functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Derive the laws of logarithms from the laws of indices log_a m + log_a n = log_a (mn), log_a m - log_a n = log_a (m/n) and log_a (m^n) = nlog_a m"
"Justify the logarithmic results log_a a = 1, log_a 1 = 0 and log_a (1/x) = -log_a x"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce

Builds on: Solving aˣ = b; index laws. Next: Using the log laws.

#Year11Maths #MathsAdvanced #LogLaws #HSCScience

## Open decisions

- **1. The letter n (learning review).** The syllabus uses n both as a number (logₐ m + logₐ n) and as the power (logₐ mⁿ). The design follows the syllabus but colours the power n magenta and says "raise m to a power, n" to separate them. If the reviewer finds it confusing, scene 3 can use "m to the k" on screen with a grey note "the syllabus writes n".
- **2. The small ln graph in scene 5 (root).** It shows two points mirrored about the x-axis on a faint curve; the log graph itself is e08's. If root wants no forward glimpse, show the two values on a number line instead.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from e03 and w01; check that the slide rule makes the product law feel caused before the algebra, that the travelling tokens show "index law in log form", and that the number tests settle the non-laws), then the Codex maths check and error check, then voicing and a build to grade A.
