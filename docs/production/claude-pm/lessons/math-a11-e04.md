# Maths A11 E04: How do logarithms solve aˣ = b? y = aˣ is equivalent to x = logₐ y, exact answers, calculator values, and which values are rational or irrational (design)

Status: Revision 2 (17 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-c06.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,839 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 526 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-e04-learning-review.md` (summary `../checks/m-a11-e01-e08-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md` and root's resolution brief of 17 Nov (every spoken "ln" is "the natural log of", introduced once in e03; review evidence paths). Resolution log: `../checks/m-a11-e01-e08-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 6 and feedback 2 (the irrationality reason fails for fraction powers): **accepted, with root's ruling**. Scene 6 now says: "Suppose two to the power p over q made a hundred, with p and q whole numbers. Raise both sides to the power q. Then two to the p would equal a hundred to the q. But a hundred to the q has a factor of five, and two to the p never does, because it's only twos multiplied together. That's impossible." New bold cue "impossible". The reason card writes one line per step and strikes through "2ᵖ = 100^q" on that cue. Feedback 2 applies the same reason to 40 ("two to the p can never equal forty to the q, and no fraction power of two makes forty"), with the grey row "2ᵖ ≠ 40^q: 40^q has a factor 5". The model answer, the "Calculator and digital tools" decision, author note (e) and error-check item 3 match. Open decision 2 is closed.
2. Should fix, attempt 1 picture (answer-bearing): **accepted, with root's ruling**. The countdown picture is y = 3ˣ with no level line, no marked height and no y-axis scale, so the crossing with 20 cannot be read. Feedback 1 adds the scale, draws the level line at 20 and drops it to 2.727 on "seven".
3. Optional, scene 6 ("The same goes for e to the one point seven ..."): **applied**, reviewer's wording ("... are irrational too, though proving that is beyond this course"), with a grey note "proof beyond this course". Author note (e) records why (both follow from e being transcendental).

Also: scene 4's "That's the ln key" is now "That's the natural log key on your calculator" (root's ln ruling). The memory aid check's scene reference is corrected (scene 7). Scene 6 is now 972 characters (about 73 s); its stage band in the plan is a Revision 1 approximation. Joins unchanged: scene 1 opens on e03's final frame and scene 12 is still e05's opening frame.

Narration 5,839 characters by script (Revision 1: 5,519), about 526 s with holds; speech before the notes about 433 s, under the 570 s cap. Changed values were rechecked with SymPy 1.14 (scratchpad `e-rev2/verify.py`; see "Numbers to verify"); Codex's maths check remains the authority. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. The `learning_review` evidence path now reads `checks/m-a11-e04-learning-review.md`. Nothing recorded; human listening pending.

Scope: fifty-third video of Year 11 Mathematics Advanced (2024), outline order 53, Exponential and logarithmic functions. Pre-design pack: `../pre-design/maths-a11/math-a11-e04.md` (brief 243). Site lessons (read through the pack's quotations, read only): `exponential-and-logarithmic-functions/lesson08.sa.html` (the "2ˣ = 5" sentence; drill 2ˣ = 7 ≈ 2.807) and `lesson03.sa.html` ("Evaluating with technology": e^1.7 ≈ 5.4739, ln 12 ≈ 2.4849, ln 1 = 0 and log₂ 8 = 3 rational; "rounding is a decision you make and state"); lesson05's revisit (2ˣ = 100 ≈ 6.644). Route entry: `math-a11-e04` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted ribbon (e03's brief) and reused scissors, and a painted slide rule for the handoff (prefix `ma11-`); every graph, level line, calculator screen and working row coded.

Owner rules applied: as e01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (home: halving a ribbon), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Exponential and logarithmic functions, Logarithmic functions), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci740d04cc`: "Explain that y = a^x is equivalent to x = log_a y for a > 0 and a ≠ 1, and use the equivalence to solve equations of the form a^x = b, for a > 0"
- `ci03c5d345`: "Use digital tools to determine rational and irrational values of exponential and logarithmic expressions"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce

**Boundary:** starts from e03's final frame exactly (the ribbon `ma11-ribbon-length-v1.png` whole, the scissors `biology/m5x-scissors-v1.png`; chips "1 m = 100 cm", "each cut: half is left", "cuts to reach 1 cm? 2ⁿ = 100", grey "100 teams: also 2ˣ = 100"; "Next: solving aˣ = b", "?"). Recalls e03 (logₐ y is the index; converting forms), e01 (aˣ rises or falls through every positive height once, range y > 0) and e02 (e and the eˣ key) in a phrase or grey chip each. Teaches: why 2ˣ = 100 is not x = 50; the equivalence y = aˣ ⇔ x = logₐ y, explained on the graph (one meeting point with a level line, none for b ≤ 0) and used to write the exact answer x = logₐ b (`ci740d04cc`); evaluating with the calculator's log-with-a-base key, and checking by raising back; base e with the ln key; deciding with digital tools and a short reason which values are rational (exact) and which are irrational (round, and say so) (`ci03c5d345`). Stops at aˣ = b and k aˣ = b. Not taught: equations needing the log laws or logs of both sides (e06); the change of base rule ln b / ln a (e07).

## Decisions

- **Anchor: halving a 1 m ribbon (painted plate, live).** Cut a 1 m ribbon in half, keep one half, cut again: after n cuts the piece is 100 ÷ 2ⁿ cm, so "when is it 1 cm?" is 2ⁿ = 100, e03's unsolved equation (the 100-team tournament gives the same equation). The ribbon gets shorter on screen cut by cut (6 cuts: 1.56 cm; 7 cuts: 0.78 cm), so the exact answer log₂ 100 ≈ 6.64 has a visible meaning: the 7th cut is the one that takes it under 1 cm. Home; the pack's anchor 2. The pack's game upgrade costs (anchor 1) were not needed; games already anchor e02. No Year 12 or a11 design uses a ribbon being cut (grep 16 Nov: "ribbon" only in c12's parcel wrapping; "scissors" only w20's plate list). The cropped painted ribbon is the real object; it is never rescaled along one axis.
- **Calculator and digital tools.** The narration says "your calculator's log key with a space for the base", and the screen shows a coded, unbranded calculator display (`ScreenApp`, calculator mode) with the template "log□(□)". Base e uses the ln key. "Digital tools" for rational or irrational: the calculator or app shows a long decimal, and the narration gives the reason that settles it (if 2^(p/q) = 100 then 2ᵖ = 100^q, impossible because only the right side has a factor of 5), because a screen of digits alone cannot prove irrationality. The design says this plainly (scene 6).
- **Simulations (standard item 3).**
  1. **Ribbon cuts** (scenes 1, 3): the scissors close over the ribbon; the kept piece is cropped to its true length (100, 50, 25, 12.5, 6.25, 3.13, 1.56, 0.78 cm on a coded ruler scaled from the sidecar); a "cuts: n" counter (blue) and "length: … cm" (teal).
  2. **Level line on 2ˣ** (scene 2, `StudioLevelLine`): y = 2ˣ (x 0 to 8, y 0 to 140); a level line at height b (teal) slides from 10 to 140, its meeting point dropping a dashed line to the x-axis with the readout "x = log₂ b"; at b = 100 it settles; slid below the axis (b = −5) it meets nothing, tag "no solution".
  3. **Calculator screen** (scenes 3 to 5): the template filling "log₂(100) = 6.643856189774724…", then "2^6.644 = 100.01"; tags "exact", "irrational, rounded".
- **Colour roles (fixed for the e strand, as e01).** The unknown power x or n **blue**; the target b and lengths **teal**; the base a **amber**; the multiplier k **magenta**; answer green; mistake red, crossed slips only. "Exact" tags green outline; "irrational, rounded" tags grey with "≈".
- **Large type, handwritten voice.** As e01. Hand tags: "÷ is not the inverse of a power", "one meeting point", "no solution for b ≤ 0", "same fact", "exact answer", "check: raise it back", "7th cut", "ln = logₑ", "exact: 3", "never ends, never repeats", "write ≈ and the rounding".
- **Stage changes (standard item 2).** The ribbon and its cuts (1); the graph with the level line (2); the calculator and the ribbon's answer (3); g01 board, three equations (4); board, k aˣ = b with base ½ and two ladders (5); rational or irrational, the calculator with tags (6); framed card (7); question cards (8 to 11); the slide rule (12); key notes (13).
- **Worked examples (g01 layout).** 1 to 3: 2ⁿ = 100 → n = log₂ 100 ≈ 6.644 (site lesson05 revisit), crossed "n = 50". 4: site lesson08 drill 2ˣ = 7 → x = log₂ 7 ≈ 2.807; eˣ = 5 → x = ln 5 ≈ 1.609 (e03's ln 5); 5ˣ = 1/25 → x = −2 exactly (original); crossed "x = log₇ 2" (base and number swapped). 6: site lesson03 values e^1.7 ≈ 5.4739, ln 12 ≈ 2.4849 (irrational), ln 1 = 0 and log₂ 8 = 3 (rational).
- **k aˣ = b (scene 5, original).** The ribbon re-written as 100 × (½)ⁿ = 1 teaches "divide off the number in front first" (needed for A2 (a)) and a base below 1, landing on the same 6.644.
- **Memory aid.** Framed card: "a to the what is b? The what is logₐ b." Second line: "Write it exact first, then ≈ if it's irrational."
- **Visual surprise.** The tempting answer n = 50 is tested on the calculator: 2⁵⁰ is about 1.1 × 10¹⁵, a ribbon of about a thousand trillion centimetres; and the ribbon on screen really is still 1.56 cm after 6 cuts and 0.78 cm after 7.
- **Site notes (pack section 8 and `../site-corrections-maths-a11.md` section 6).** lesson05's "Earlier you bracketed x in 2ˣ = 100" is honoured: e03 did bracket it between 6 and 7, and this video recalls that. lesson08's "x = log₂ 5 = ln 5 / ln 2" is not used: the ln quotient waits for e07 (pack decision); the calculator's base key is used here.
- **Plain meanings at first use.** Equivalent ("the same fact, written two ways"); exact answer ("written with no rounding, like log₂ 100"); rational ("can be written as a fraction of whole numbers"); irrational ("can't, so its decimals never end and never repeat").
- **Attempts (pack questions).** A1: solve 3ˣ = 20 exactly and to 3 decimal places, and between which whole numbers (log₃ 20 ≈ 2.727, between 2 and 3); crossed "x = 20/3". A2: solve 5 × 2ˣ = 40 and 2ˣ = 40, and say which is rational (3, rational; log₂ 40 ≈ 5.322, irrational); crossed "2ˣ = 40, so x = 20".
- **Mistake scene:** none separate. Dividing (1 crossed, A1 crossed, A2 crossed); swapping base and number (4 crossed); rounding a rational answer (5); a decimal presented as exact (5 tag).
- **Cause chain taught, in order:** (1) a power is not undone by dividing, so 2ⁿ = 100 is not n = 50 (1); (2) aˣ passes through every positive height exactly once, so aˣ = b (b > 0) has exactly one solution, the index that turns a into b, which is logₐ b by e03's definition (2); (3) the calculator evaluates it, and raising back checks it (3); (4) the same move works for any base, including e and bases below 1, once a number in front is divided off (4, 5); (5) an answer is rational only when a fraction power of a gives b exactly; when none can, the decimal never ends, so it is rounded and marked ≈ (6).
- **Entry knowledge (route):** e03 (logₐ y as an index; converting between index and log form); e01 (exponential graphs pass every positive height once).
- **What Year 12 relies on.** Year 12 d03's "how long until?" questions and d19's doubling and half-life times solve eᵏᵗ = b by writing t = (ln b)/k. Scene 4 shows eˣ = 5 ⇒ x = ln 5, the exact form those designs build on. The ln b / ln a form is e07's.
- **Handoff (to math-a11-e05, "How do the log laws follow from the index laws?").** Scene 11: the slide rule (`ma11-slide-rule-body-v1.png` with `ma11-slide-rule-slide-v1.png` in its groove) with coded log scales on both strips (marks 1 to 10, spaced by log₁₀); the slide is offset so its 1 sits over the body's 2, and a hairline at the slide's 3 meets the body's 6; chips "2 × 3 = 6, by adding lengths?" (lengths teal), "length to 2 + length to 3 = length to 6", "?"; "Next: the log laws" and "?". This is e05's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Ribbon: 100/2ⁿ cm: n = 0 to 7: 100, 50, 25, 12.5, 6.25, 3.125, 1.5625, 0.78125. 2ⁿ = 100 → n = log₂ 100 = 6.643856…; 2^6.644 = 100.01. The 7th cut is the first under 1 cm.
  (b) 2⁵⁰ = 1.126 × 10¹⁵.
  (c) log₂ 7 = 2.80735; ln 5 = 1.60944; 5⁻² = 1/25. Slip: log₇ 2 = 0.356.
  (d) e^1.7 = 5.4739; ln 12 = 2.4849; ln 1 = 0; log₂ 8 = 3.
  (e) Irrationality of log₂ 100: if log₂ 100 = p/q with whole numbers p, q > 0, then 2ᵖ = 100^q = 2^(2q) 5^(2q), impossible since the left side has no factor 5. The narration gives this argument in plain words (scene 6), and feedback 2 applies it to 40. e^1.7 and ln 12 are irrational by results beyond this course (both follow from e being transcendental: e^1.7 = p/q would make e¹⁷ rational, and ln 12 = p/q would make eᵖ = 12^q); the narration says so rather than implying the factor-of-five reason covers them.
  (f) A1: log₃ 20 = 2.72683 (3⁹ … check 3^2.727 = 20.004); 3² = 9 < 20 < 27 = 3³. A2: 2ˣ = 8, x = 3; log₂ 40 = 5.32193, irrational (40 = 2³ × 5).
  (g) Pronunciations: "log base two of a hundred"; "six point six four four"; "two to the fifty"; "about a thousand trillion"; "log base three of twenty"; "five times two to the x".
  (h) Windows: scene 2 x 0 to 8, y 0 to 140 (and briefly −10 for the no-solution sweep).

Main question: *How do logarithms solve aˣ = b? After how many halvings is a 1 m ribbon 1 cm long?*
Entry knowledge (e03, e01): logₐ y as an index; converting forms; aˣ passes every positive height once.
Stops after: y = aˣ ⇔ x = logₐ y; solving aˣ = b exactly; evaluating with a calculator; rational or irrational values. No log laws, no ln b / ln a.
Handoff: math-a11-e05: "a slide rule multiplies 2 by 3 by adding two lengths: why does that work?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): the unknown power blue; the target and lengths teal; base amber; k magenta; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · EXPONENTIAL AND LOGARITHMIC FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: how many cuts?
> Here's last time's ribbon, one metre long. That's a hundred centimetres. Cut it in half and keep one piece. Fifty centimetres. Cut again, twenty-five. Then twelve and a half, six and a quarter, about three, about one and a half. After six cuts, it's still over one centimetre. After seven, it's under **one**. So the exact number of halvings that gives one centimetre is somewhere between six and seven, and it solves two to the n equals a hundred. Here's a tempting shortcut. A hundred divided by two is fifty. But n equals fifty means two to the fifty, and that's about a thousand trillion. Dividing doesn't undo a **power**. So how do logarithms solve an equation like a to the x equals **b**?

Visual: opens on e03's final frame exactly (the ribbon whole at 1,500 px, the scissors, chips "1 m = 100 cm", "each cut: half is left", "cuts to reach 1 cm? 2ⁿ = 100", grey "100 teams: also 2ˣ = 100", "Next: solving aˣ = b", "?"). On the first sentence the "Next" chips fade and a coded ruler (0 to 100 cm, scaled from the sidecar) draws under the ribbon. Each cut: the scissors close at the ribbon's midpoint and the kept piece is cropped to its true length; counters "cuts: 1, 2, …" (blue) and "length: 50, 25, 12.5, 6.25, 3.13, 1.56 cm" (teal); from 12.5 cm a zoom inset (×8 ruler) opens at the right so the short pieces stay visible. On "one" the 7th cut leaves "0.78 cm", the 1 cm mark on the inset ruler glows, and the counters ring "6 cuts: 1.56 cm, 7 cuts: 0.78 cm". Row, 60 px: "2ⁿ = 100" (2 amber, n blue, 100 teal), bracket "6 < n < 7". On "fifty" a row "100 ÷ 2 = 50" writes; a calculator strip shows "2⁵⁰ ≈ 1.13 × 10¹⁵"; on "power" the row is crossed in red, hand tag "÷ is not the inverse of a power". On "b" heading "Solving aˣ = b", and the question chip "2ⁿ = 100: n = ?" moves to the top right.

### 2. why the answer is a log
> Look at the graph of two to the x. It rises through every positive height, and it hits each one exactly once. So slide a level line up to height a hundred. It meets the curve at exactly one point, and the x there is the answer. That x is the power you raise two to, to get a hundred, and that's exactly what log base two of a hundred means. So y equals a to the x, and x equals log base a of y, are the same fact, written two **ways**. That means a to the x equals b has the solution x equals log base a of b. That's the exact answer. And if b is zero or negative, the level line misses the curve completely. There's no **solution**.

Visual: stage change: the ribbon shrinks to a 300 px badge with "2ⁿ = 100" at the top left. Large graph (`StudioLevelLine`, 1,150 × 700 px), x 0 to 8 "x", y 0 to 140, y = 2ˣ (teal curve). A teal level line slides up from y = 10; its meeting point drops a dashed blue line to the x-axis with a live readout "x = log₂ b"; hand tag "one meeting point" with grey chip "e01: 2ˣ takes every positive height once". At b = 100 the line settles; the drop lands between 6 and 7, label "x = log₂ 100". On "ways" the pair writes, 60 px, framed: "y = aˣ ⇔ x = logₐ y" (a amber, x blue, y teal), hand tag "same fact"; then "aˣ = b ⇒ x = logₐ b" (60 px), hand tag "exact answer". On "zero or negative" the level line drops below the axis (b = −5) and meets nothing; on "solution" tag "no solution for b ≤ 0".

### 3. finding its value
> To get a value, use your calculator's log key with a space for the base. Put in two as the base, and a hundred. Log base two of a hundred is six point six four three eight, and the digits keep going. So n is about six point six four **four**. Check it by raising it back. Two to the six point six four four is a hundred, near enough. For the ribbon, cuts come in whole numbers. Six cuts isn't quite enough, so it's the seventh cut that takes it under one **centimetre**.

Visual: clear change: the calculator display (`ScreenApp`, calculator mode, 760 × 520 px) at the left, the ribbon and inset ruler at the right. The template "log□(□)" fills: base "2" (amber), argument "100" (teal); on "four" the display reads "6.643856189…" (blue) and a row writes, 52 px: "n = log₂ 100 ≈ 6.644" (green frame). On "raising it back" the display shows "2^6.644 = 100.01", hand tag "check: raise it back". On "centimetre" the ribbon's 6th and 7th pieces ring with "1.56 cm" and "0.78 cm", hand tag "7th cut".

### 4. worked example: three equations
> Let's solve three more. First, two to the x equals seven. Two cubed is eight, so x is a little under three. Exactly, x is log base two of seven, which is about two point eight zero **seven**. Second, e to the x equals five. The base is e, so x is log base e of five, which is the natural log of five, about one point six zero **nine**. That's the natural log key on your calculator. Third, five to the x equals one over twenty-five. Twenty-five is five squared, so one over twenty-five is five to the minus two, and x is exactly minus **two**. Writing log base seven of two, for the first one, is the slip. The base stays the **base**.

Visual: clear change to the full-width g01 board. Three task strips stacked, 44 px: "Solve: (a) 2ˣ = 7 (b) eˣ = 5 (c) 5ˣ = 1/25". Rows, current 52 px, earlier 32 px dimmed: "(a) 2³ = 8, so x < 3"; "x = log₂ 7"; on "seven" "≈ 2.807" (green frame). "(b) x = logₑ 5 = ln 5"; on "nine" "≈ 1.609" (green frame), hand tag "ln = logₑ", a small ln key strip pressing. "(c) 1/25 = 1/5² = 5⁻²"; on "two" "x = −2" (green frame), tag "exact". On "base" a red slip "x = log₇ 2" writes and is crossed, caption "base and number swapped".

### 5. a number in front, and a base below one
> Here's the ribbon question written another way. Start with a hundred centimetres, and each cut multiplies the length by a half. So after n cuts, the length is a hundred times a half to the n. Set that equal to one centimetre. There's a number in front of the power, so deal with it first. Divide both sides by a hundred, and a half to the n equals one **hundredth**. Now the power stands alone, so n is log base a half of one hundredth. The base is less than one, but that's fine. The calculator gives six point six four four **again**. It has to. Halving down to a hundredth takes exactly as many steps as doubling up to a **hundred**. So, with a number in front, divide first. Then take the log.

Visual: clear change: the board clears; task strip, 44 px: "Solve 100 × (½)ⁿ = 1." The ribbon badge returns at the top right with "100 cm × ½ each cut". Rows, 52 px: "100 × (½)ⁿ = 1" (100 magenta, ½ amber, n blue); hand tag "number in front: divide first"; on "hundredth" "(½)ⁿ = 0.01"; "n = log_½ 0.01" (½ amber); on "again" the calculator strip shows "log_0.5(0.01) = 6.643856…" and "n ≈ 6.644" (green frame). On "hundred" two small ladders side by side: halving 1 → ½ → … → 0.01 and doubling 1 → 2 → … → 100, the same 6.644 steps marked on both, hand tag "same number of steps".

### 6. exact or rounded?
> Some answers came out exact, and some didn't. Use your calculator, or a graphing app, to look closer. Log base two of eight is exactly three, and the natural log of one is exactly zero. Those are rational, which means they can be written as a fraction of whole numbers. But log base two of a hundred shows six point six four three eight five six one eight nine seven, and it never settles. Here's why it can't be a fraction. Suppose two to the power p over q made a hundred, with p and q whole numbers. Raise both sides to the power q. Then two to the p would equal a hundred to the q. But a hundred to the q has a factor of five, and two to the p never does, because it's only twos multiplied together. That's **impossible**. So it's irrational. Its decimals never end and never repeat. e to the one point seven and the natural log of twelve are irrational too, though proving that is beyond this course. So write the exact form first, then round it, and say how you **rounded**.

Visual: stage change: the calculator display, now in a list mode, four lines with tags: "log₂ 8 = 3" (tag "exact", green outline), "ln 1 = 0" ("exact"); "log₂ 100 = 6.6438561897…" (tag "irrational, rounded", grey), digits scrolling; hand tag "never ends, never repeats". A reason card at the right, 44 px, one line per spoken step: on "Suppose" "if 2^(p/q) = 100 (p, q whole)"; on "Raise both sides" "then 2ᵖ = 100^q"; "100^q has a factor 5 (100 = 2² × 5²); 2ᵖ never does"; on "impossible" the line "2ᵖ = 100^q" is struck through in red, and "so log₂ 100 is not p/q" writes. Then "e^1.7 ≈ 5.4739" and "ln 12 ≈ 2.4849" add with "irrational, rounded" tags and a small grey note "proof beyond this course". On "rounded" a model line, 52 px: "n = log₂ 100 ≈ 6.644 (3 d.p.)", hand tag "write ≈ and the rounding".

### 7. memory aid
> Here's the summary. To solve a to the x equals b, ask, a to the what is b? The what is log base a of b. Write it exactly first. Then, if it's irrational, give a rounded value, with an approximately **sign**. And if there's a number in front of the power, divide it off first.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the level-line graph small with "x = log₂ 100". Main line, hand font 56 px: "a to the what is b? The what is logₐ b." On "sign" the key line, 40 px: "Write it exact first, then ≈ if it's irrational." A third small line, 32 px: "Number in front? Divide first." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Solve three to the x equals twenty. Give the exact answer, and its value to three decimal places. Between which two whole numbers must it lie? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Solve 3ˣ = 20, giving an exact answer and its value to 3 decimal places. Between which two whole numbers must it lie?" The full question stays on screen. Picture slot: y = 3ˣ (x 0 to 3.5), no level line, no marked height and no y-axis scale, so the meeting point with 20 cannot be read off. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The exact answer is x equals log base three of twenty. On a calculator, that's about two point seven two **seven**. Check it: three to the two point seven two seven is twenty, near enough. It must lie between two and three, because three squared is nine and three cubed is twenty-seven, and twenty is in **between**. Dividing twenty by three is the slip.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "x = log₃ 20" (exact); on "seven" "≈ 2.727 (3 d.p.)" (green frame); the picture's y-axis scale appears, a level line draws at 20 and its drop line lands at 2.727. On "between" "3² = 9 < 20 < 27 = 3³, so 2 < x < 3" (green frame). On "the slip" a red slip "x = 20/3" writes and is crossed, caption "÷ is not the inverse of a power". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Solve five times two to the x equals forty. Then solve two to the x equals forty. Which answer is rational? Pause here to answer.

Visual: `QuestionCard`, 40 px: "Solve (a) 5 × 2ˣ = 40 and (b) 2ˣ = 40. Which answer is rational?" Picture slot: an empty calculator display. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> For the first, divide by five, so two to the x is eight, and x is exactly **three**. That's rational. For the second, x is log base two of forty, about five point three two **two**. Forty has a factor of five. So, for the same reason, two to the p can never equal forty to the q, and no fraction power of two makes forty. That answer is irrational. Writing x equals twenty is the slip.

Visual: the card shrinks to the top. Rows, 44 px: "(a) 2ˣ = 40 ÷ 5 = 8"; on "three" "x = 3 (rational)" (green frame). "(b) x = log₂ 40"; on "two" "≈ 5.322 (irrational, rounded)" (green frame), grey rows "40 = 2³ × 5" and "2ᵖ ≠ 40^q: 40^q has a factor 5". On "the slip" a red slip "x = 40 ÷ 2 = 20" writes and is crossed, caption "2²⁰ is over a million". Hold about 1 s.

### 12. handoff
> So a log turns a power question into a number. Next, logs get even more useful. Before calculators, engineers multiplied with a slide rule. Slide one scale along the other, and two times three is found by adding two lengths, which lands on six. Adding lengths to multiply numbers? It sounds like a trick, but it works for any two numbers on the scales. Why? And what does it have to do with logs? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the slide rule plates (`ma11-slide-rule-body-v1.png` with `ma11-slide-rule-slide-v1.png` in its groove, 1,600 px wide) with coded log scales (marks 1 to 10, spaced by log₁₀, 30 px numerals) on the body and the slide. On "Slide one scale" the slide moves right until its 1 sits over the body's 2; a hairline cursor moves to the slide's 3 and meets the body's 6. Teal bars mark "length to 2" on the body and "length to 3" on the slide; on "adding two lengths" chips "2 × 3 = 6, by adding lengths?" and "length to 2 + length to 3 = length to 6". On "next" chips "Next: the log laws" and "?". Hold about 2 s. This is e05's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- y = aˣ ⇔ x = logₐ y (a > 0, a ≠ 1).
- aˣ = b (b > 0) has exactly one solution: x = logₐ b. No solution if b ≤ 0.
- eˣ = b gives x = ln b.
- Exact first (log₂ 100), then ≈ with the rounding stated (≈ 6.644).
- Rational if a fraction power of a gives b exactly (log₂ 8 = 3); otherwise irrational.

Memory aid (framed card, right side, as in scene 7): *a to the what is b? The what is logₐ b.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and e05's opening frame.

## Teaching checks

- **Does it explain causes?** Why dividing fails (1, 2⁵⁰ checked). Why the answer is a log and why there is exactly one (2, the level line). Why b ≤ 0 has no solution (2). Why the 7th cut (3). Why log_½ 0.01 equals log₂ 100 (5, halving down as many steps as doubling up). Why log₂ 100 is irrational (6, the factor 5).
- **Misconceptions addressed:** dividing (1, A1, A2 crossed); base and number swapped (4 crossed); rounding a rational answer (5); a decimal presented as exact (5).
- **Visual standard, item by item:** 1 the ribbon from the first frame, cut live; 2 a new stage every 30 to 60 s; 3 the cuts with a true-length crop, the level line, the calculator; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 4; 8 framed card and five bullets; 9 2⁵⁰ shown huge, and the real 1.56 and 0.78 cm pieces.
- **One idea at a time:** the question (1), why a log (2), its value (3), three equations (4), a number in front and a base below one (5), exact or rounded (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 22 s.
- **Avoided double teaching:** the definition and conversions (e03), the shape of aˣ (e01) and e (e02) are recalled in a phrase or grey chip.
- **Syllabus coverage:** `ci740d04cc` (2 to 5, A1, A2; key notes 1 to 3); `ci03c5d345` (3, 6, A2; key notes 4, 5).
- **Out of scope by design:** log laws and logs of both sides (e06); ln b / ln a (e07).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Solve 3ˣ = 20, giving an exact answer and its value to 3 decimal places. Between which two whole numbers must it lie?"
Model answer: x = log₃ 20 ≈ 2.727. Since 3² = 9 < 20 < 27 = 3³, 2 < x < 3. Classic mistake (crossed): "x = 20/3".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "Solve (a) 5 × 2ˣ = 40 and (b) 2ˣ = 40. Which answer is rational?"
Model answer: (a) 2ˣ = 8, x = 3, rational. (b) x = log₂ 40 ≈ 5.322, irrational (if 2^(p/q) = 40, then 2ᵖ = 40^q, impossible because 40^q has a factor 5 and 2ᵖ does not). Classic mistake (crossed): "x = 20".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Ribbon | 100, 50, 25, 12.5, 6.25, 3.13, 1.56, 0.78 cm; 2ⁿ = 100; 6 < n < 7; slip 50, 2⁵⁰ ≈ 1.13 × 10¹⁵ | 1 |
| Level line | b = 100 meets once; b = −5 none | 2 |
| Value | log₂ 100 = 6.643856…, ≈ 6.644; 2^6.644 = 100.01 | 3, 5 |
| Three equations | log₂ 7 ≈ 2.807; ln 5 ≈ 1.609; 5ˣ = 1/25, x = −2; slip log₇ 2 | 4 |
| k aˣ = b | 100 × (½)ⁿ = 1; (½)ⁿ = 0.01; log_½ 0.01 ≈ 6.644 | 5 |
| Rational or not | log₂ 8 = 3; ln 1 = 0; e^1.7 ≈ 5.4739; ln 12 ≈ 2.4849; 100 = 2² × 5² | 5 |
| A1 | log₃ 20 ≈ 2.727; 9 < 20 < 27 | 7, 8 |
| A2 | x = 3; log₂ 40 ≈ 5.322; 40 = 2³ × 5; slip 20 | 9, 10 |
| Handoff | 2 × 3 = 6 on the slide rule | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (17 Nov 2026, scratchpad `e01e08/verify.py`); Codex to re-check.

- Revision 2 (17 Nov 2026, SymPy 1.14, scratchpad `e-rev2/verify.py`): 100 = 2² × 5²; 40 = 2³ × 5. No 2ᵖ (p ≥ 1) is divisible by 5 (unique factorisation; checked to p = 60), so 2ᵖ = 100^q and 2ᵖ = 40^q have no whole-number solutions with q ≥ 1. Rechecked: log₂ 100 = 6.6438562; log₂ 40 = 5.32193; 3^2.727 = 20.004.

- 100/2ⁿ for n = 0 to 7: 100, 50, 25, 12.5, 6.25, 3.125, 1.5625, 0.78125.
- 2⁵⁰ = 1.13 × 10¹⁵. log₂ 100 = 6.64385618977472; 2^6.644 = 100.010.
- log₂ 7 = 2.80735; ln 5 = 1.60944; 5⁻² = 1/25; log₇ 2 = 0.3562 (slip).
- log_0.5 0.01 = 6.643856 (equals log₂ 100).
- e^1.7 = 5.4739; ln 12 = 2.4849; ln 1 = 0; log₂ 8 = 3.
- A1: log₃ 20 = 2.72683; 3^2.727 = 20.004 (said "twenty, near enough"). A2: 40/5 = 8 = 2³; log₂ 40 = 5.32193.

## Memory aid check

- **"a to the what is b? The what is logₐ b."** Original. Meaning, as said in scene 7: the solution of aˣ = b is the index that turns a into b, which is logₐ b by definition. Assumptions checked: a > 0, a ≠ 1, b > 0 (key notes 1 and 2); it applies once the power stands alone (A2 (a) divides by 5 first, shown in feedback). It helps a new case: 10ˣ = 0.001 gives x = log₁₀ 0.001 = −3, exact. Introduced after scenes 1 to 5.
- **Considered, not used:** "take the log of both sides" (needs the power law, e05 and e06).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; Revision 2 recount, 17 Nov, scratchpad `e-rev2/count.py`): 5,839 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the ribbon cuts, the level line, the calculator digits) and the 45 s notes scene: about 526 s. Characters per scene (1 to 13): 684, 625, 462, 619, 685, 972, 271, 175, 346, 139, 377, 409, 75. Speech before the notes is about 433 s, under the 570 s cap. Feedback speech: about 26 s and 28 s.

Reserve trims if the voiced take runs long: scene 5's "It has to" pair (keep the two ladders); scene 1's "Here's a tempting shortcut" lines (keep the crossed row); scene 6's "e to the one point seven and the natural log of twelve are irrational too" sentence (keep the tagged lines and the grey note).

## Scene list and build ids

Lesson key `m-a11e04` (route math-a11-e04). Explainer folder `src/explainer/lessons/math-a11-e04`; build inputs in `docs/production/claude-pm/lessons/math-a11-e04/` (at voicing).

In order (13 scene headings): hook-ribbon-cuts, why-a-log, finding-the-value, three-equations, number-in-front, exact-or-rounded, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 60 s | 1 | The ribbon cut by cut |
| 60 to 115 s | 2 | Graph and level line |
| 115 to 150 s | 3 | Calculator and the ribbon's answer |
| 150 to 205 s | 4 | g01 board: three equations |
| 205 to 255 s | 5 | Board: k aˣ = b and a base below one |
| 255 to 315 s | 6 | Exact or rounded: tagged calculator lines |
| 315 to 330 s | 7 | Framed memory card |
| 330 to 425 s | 8 to 11 | Question cards and countdowns, then feedback |
| 425 to 455 s | 12 | The slide rule |
| 455 to 500 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e03's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change; 3 to 4 clear change to the board; 4 to 5 board clear; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-e04-learning-review.md`, `science_check` = `checks/m-a11-e04-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets`, read only): no slide rule plate exists in any course.

Reused: `ma11-ribbon-length-v1.png` (e03's brief; scenes 1 to 3, cropped to each length); `biology/m5x-scissors-v1.png` (blue-handled scissors, true alpha; scene 1).

Need (painted, new; see the Codex asset brief): `ma11-slide-rule-body-v1.png`, `ma11-slide-rule-slide-v1.png` (this video's handoff and e05).

Coded: the ruler and inset, counters, the graph and level line, the calculator display, the reason card, the log scales and cursor on the slide rule, rows, the countdown, the key notes.

### Studio kit use and additions

Uses: `PlateImg`, `StudioLevelLine`, `StudioPlot`, `ScreenApp` (calculator mode), `WorkingBoard`, `TaskStrip`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Crop to length** (small): show the ribbon plate cropped from the right to a given length in centimetres from the sidecar's end pixels, with a zoom inset for pieces under 13 cm. Check: the 1.56 cm piece measures 1.56 cm on the inset ruler within 1 px.
2. **Calculator template "log□(□)"** on `ScreenApp`: fills base and argument, then a long result that keeps scrolling digits.

## Codex asset brief (Maths A11 E04, a slide rule in two layers; it opens e05)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-e04.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the e04 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-slide-rule-body-v1.png` (4000 × 600 px): the body (stock) of a classic straight slide rule, seen from directly above: pale bamboo or ivory-coloured faces with a long empty groove along the middle where the slide runs. The face strips above and below the groove are **blank** (no marks or numbers; code draws the scales).
2. `ma11-slide-rule-slide-v1.png` (4000 × 160 px): the matching slide (the strip that runs in the groove), same material, blank face, painted so it sits exactly in the body's groove when its top edge is aligned.

Sidecar JSON (`ma11-slide-rule-v1.json`): the groove's pixel rectangle on the body; the blank scale band on the body just above the groove and on the slide (pixel rectangles), and the x of the left and right index positions (where the 1 and the 10 go). Report inspection on the paper background (`#f6f1e7`) at 1,600 px and full width, the fit of the slide in the groove, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-e04-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quotes match the route-inputs JSON exactly.
3. Confirm the irrationality reason (2^(p/q) = 100 ⇒ 2ᵖ = 100^q, impossible because only the right side has a factor 5; the same for 40) is correct as stated, that e^1.7 and ln 12 are called irrational without a proof, and that no calculator display alone is claimed as proof.
4. Confirm ln b / ln a and "take logs of both sides" do not appear (e06, e07).
5. Confirm every rounded value carries "≈" and its rounding where a rounding is asked for.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on e03's final frame.

## YouTube metadata (draft)

Title: Solving aˣ = b with Logarithms (and When the Answer Is Exact) | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson05.sa.html

Cut a 1 m ribbon in half again and again: after how many cuts is it 1 cm long? That's 2ⁿ = 100, and the answer isn't 50. See on the graph why y = aˣ is equivalent to x = logₐ y, solve aˣ = b exactly with a logarithm, find its value on a calculator, and use digital tools to tell rational answers (like log₂ 8 = 3) from irrational ones (like log₂ 100 ≈ 6.644). Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Exponential and logarithmic functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Explain that y = a^x is equivalent to x = log_a y for a > 0 and a ≠ 1, and use the equivalence to solve equations of the form a^x = b, for a > 0"
"Use digital tools to determine rational and irrational values of exponential and logarithmic expressions"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce

Builds on: What is a logarithm? Next: The log laws.

#Year11Maths #MathsAdvanced #Logarithms #HSCScience

## Open decisions

- **1. The site link (root).** The full-lesson link is lesson05 (the outline lists lesson05 and lesson08). lesson08's solving card uses ln b / ln a, which this video defers to e07, so lesson05 is the better match; root may prefer lesson08.
- **2. The irrationality reason (learning review).** One sentence on the factor of 5 makes "irrational" caused, not just seen. If the reviewer finds it too fast for students starting Year 11, keep the tags and move the reason to an author note. **Closed (Revision 2):** keep the reason, corrected to the 2ᵖ = 100^q argument (learning review finding 1, root's ruling).
- **3. "Engineers" in the handoff (root).** People are named in narration only, never drawn (as c10's dog walker). If root prefers no people at all, say "Before calculators, a slide rule multiplied numbers".

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from e03 and e01; check that the cut-by-cut ribbon makes 6 < n < 7 visible, that the level line makes "exactly one solution" caused, and that the rational or irrational decision is a reason, not a vibe), then the Codex maths check and error check, then voicing and a build to grade A.
- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" above and `../checks/m-a11-e01-e08-learning-review-resolution.md`). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A. The narration says "the natural log of" wherever ln is read, so the voicer needs no respelling for ln.
