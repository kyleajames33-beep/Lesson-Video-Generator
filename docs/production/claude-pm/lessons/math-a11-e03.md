# Maths A11 E03: What is a logarithm, and how does it undo an exponential? logₐ y as an index, converting between index and log form, the natural log ln, and logₐ aˣ = x and a^(logₐ x) = x (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-c06.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,573 characters by script (see "Narration length estimate"), 13 scene headings, about 506 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fifty-second video of Year 11 Mathematics Advanced (2024), outline order 52, Exponential and logarithmic functions. Pre-design pack: `../pre-design/maths-a11/math-a11-e03.md` (brief 243). Site lesson (read through the pack's quotations, read only): `exponential-and-logarithmic-functions/lesson05.sa.html` (`we-1`, log₂ 8 = 3 and log₃ (1/9) = −2; `we-2`, log₅ x = 3 gives 125; the "What is a logarithm?" card on why the argument must be positive; all with their numbers). Route entry: `math-a11-e03` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted tournament noticeboard and trophy (e02's brief) and a painted ribbon with reused scissors for the handoff (prefix `ma11-`); every draw bracket, converter, ladder and working row coded.

Owner rules applied: as e01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (sport: a knockout tournament), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Exponential and logarithmic functions, Logarithmic functions), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci604946ac`: "Define the logarithm of a number y, where y > 0, to any positive base a as the index to which a is raised to give y"
- `ci5994ec54`: "Use the notation log_a y for the logarithm of y to the base a"
- `ci7cd97f8c`: "Define the natural logarithm ln a = log_e a"
- `cic84a1659`: "Recognise and use the logarithmic properties: log_a a^x = x for all real x, a^(log_a x) = x where x > 0"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce

**Boundary:** starts from e02's final frame exactly (the noticeboard `ma11-tournament-board-v1.png` with a coded 8-team draw on its sheet, the trophy `ma11-trophy-v1.png`; chips "8 teams → 3 rounds", "64 teams → ? rounds", "2^? = 64"; "Next: running 2ˣ backwards", "?"). Recalls e01 (the table of 2ˣ, and aˣ > 0 for every x), e02 (e ≈ 2.718 and the point on eˣ at height 5) and w01 (index laws) in a phrase or grey chip each. Teaches: running the table of 2ˣ backwards (8 → 3, 64 → 6, 100 → between 6 and 7); the logarithm logₐ y as the index to which a is raised to give y, for a > 0, a ≠ 1 and y > 0, with the reason y must be positive (`ci604946ac`); the notation and its reading, and converting both ways (`ci5994ec54`; site `we-1`, `we-2`); ln a = logₑ a with ln 1 = 0, ln e = 1 and the ln key (`ci7cd97f8c`); the undo pair logₐ aˣ = x for all real x and a^(logₐ x) = x for x > 0, with base 2 and base e (`cic84a1659`). Stops at evaluating logs by converting to index form. Not taught: solving aˣ = b with a calculator (e04); the log laws (e05); log graphs (e08).

## Decisions

- **Anchor: a knockout tournament (painted plates, live).** Each round knocks out half the teams, so after r rounds 2ʳ teams have become one winner. Rounds are the power, teams are the result: the question "how many rounds for 64 teams?" is "2 to what power is 64?", the table of 2ˣ run backwards, which is exactly what a logarithm answers. 100 teams sits between 2⁶ and 2⁷, so the round count is between 6 and 7 (a real draw needs 7 rounds, with byes); that unsolved 2ˣ = 100 is e04's start. Sport; the pack's anchor 2. The guessing game (anchor 1) is close to w31's jelly-bean guess and to Year 12 d09's "higher or lower" hits, so it was not used. No Year 12 or a11 design uses a tournament, knockout draw or trophy (grep 16 Nov: "tournament", "knockout", "trophy", "noticeboard" no hit). Music, sound and phone storage were avoided (pack: Year 12 d04 and an f design use them for logs).
- **Simulations (standard item 3).**
  1. **Knockout draw** (scene 1): on the board's sheet the 8-team draw plays out round by round (8 → 4 → 2 → 1, a "round" counter in blue), then the draw redraws for 64 teams (a compact bracket fan) and plays out 6 rounds; the trophy rings at the end.
  2. **Doubling ladder** (scenes 1, 2): rungs 1, 2, 4, 8, 16, 32, 64, 128 (teal) with rung numbers 0 to 7 (blue); a marker climbs to a given number and reads the rung count; 100 lands between rungs 6 and 7.
  3. **Two-way converter** (scenes 2 to 4): "2³ = 8" and "log₂ 8 = 3" with the base (amber), index (blue) and result (teal) sliding between the two forms on each cue.
- **Colour roles (fixed for the e strand, as e01).** The index, which is the value of the log, **blue**; the result, which is the log's argument, **teal**; the base **amber**; answer green; mistake red, crossed slips only. In "logₐ y = x" the a is amber, the y teal and the x blue, exactly as in "aˣ = y".
- **Large type, handwritten voice.** As e01. Hand tags: "rounds = power", "run 2ˣ backwards", "a log is a power", "base", "the power", "the result", "y > 0 only", "between 0 and 1: negative log", "index form", "log base e", "undo", "x > 0 here".
- **Stage changes (standard item 2).** The tournament board (1); the ladder and the converter (2); g01 board, site `we-1` (3); g01 board, site `we-2` (4); the ln card with e02's eˣ graph (5); the undo machine (6); framed card (7); question cards (8 to 11); the ribbon plate (12); key notes (13).
- **Worked examples (g01 layout).** 3: site `we-1`, log₂ 8 = 3 and log₃ (1/9) = −2; crossed "log₂ 8 = 4" (8 ÷ 2). 4: site `we-2`, log₅ x = 3 gives x = 125; crossed "x = 15" (5 × 3); then log₂ x = −3 gives 1/8 (original). 5: ln e = 1, ln 1 = 0, ln e⁴ = 4 (site drill "ln e⁷ = 7" pattern), and the ln key: ln 5 ≈ 1.609 (e02's height-5 point). 6: log₂ 2⁵ = 5, 2^(log₂ 6) = 6, ln e⁷ = 7 and e^(ln 4) = 4 (site drills).
- **Memory aid.** Framed card: "A log is a power. logₐ y asks: a to what power gives y?" Second line: "Same three numbers: aˣ = y ⇔ logₐ y = x."
- **Visual surprise.** The converter: the same three numbers, the same colours, just rearranged, so "2³ = 8" literally slides into "log₂ 8 = 3". And e02's height-5 point on eˣ, at x ≈ 1.61, turns out to be ln 5.
- **Site notes (pack section 8 and `../site-corrections-maths-a11.md` section 6).** The lesson05 drill's "revisit" ("Earlier you bracketed x in 2ˣ = 100") refers to an opening the site never had; here 2ˣ = 100 is genuinely bracketed in scene 1 (between 6 and 7), so e04 can recall it honestly. Site `we-3` (a domain question) is e08's.
- **Plain meanings at first use.** Logarithm ("a power: the index you need"); argument (not used as a word; "the number you take the log of"); natural log ("log base e, written ln"); index form and log form ("two ways to write the same fact").
- **Attempts (pack questions).** A1: log₅ 125, log₂ (1/16), log₉ 3 and ln(e⁻²) (3, −4, ½, −2); crossed "log₉ 3 = 3" (9 ÷ 3). A2: solve log₃ x = −2 (x = 1/9) and simplify 10^(log₁₀ 7) + log₄ 4³ (10); crossed "x = −6".
- **Mistake scene:** none separate. log₂ 8 read as 8 ÷ 2 (3 crossed); negative logs thought impossible (3 tag); log form solved by multiplying (4 crossed); logs of zero or negatives (2, 6 tag "x > 0 here"); ln as a different operation (5).
- **Cause chain taught, in order:** (1) the tournament's rounds are the power and its teams the result, so "how many rounds?" runs 2ˣ backwards (1); (2) a log names that missing power, and since aˣ is always positive, only positive numbers have logs (2); (3) a number below 1 needs a negative power, so its log is negative (3); (4) log form converts to index form, which solves for the result (4); (5) e is just another base, so ln is log base e, and ln 1 = 0, ln e = 1 because e⁰ = 1, e¹ = e (5); (6) raising a to a power and taking logₐ undo each other, because each asks for the other's missing number (6).
- **Entry knowledge (route):** e01 (values of aˣ for integer and negative x); e02 (Euler's number e); w01 (index laws).
- **What Year 12 relies on.** d02 uses `cic84a1659` with base e (grey chip "Year 11: e^(ln a) = a"); d03 uses "Year 11: e^(ln x) = x for x > 0" and `ci7cd97f8c`; d02 says the ratio points "sit on a curve you met in Year 11, the natural log curve" (e08). Scene 6 shows e^(ln 4) = 4 and ln e⁷ = 7 and states e^(ln x) = x for x > 0 in exactly that form; scene 5 defines ln a = logₑ a.
- **Handoff (to math-a11-e04, "How do logarithms solve aˣ = b?").** Scene 12: the ribbon plate (`ma11-ribbon-length-v1.png`, shown whole) and the reused scissors (`biology/m5x-scissors-v1.png`, 300 px); chips "1 m = 100 cm" (teal), "each cut: half is left" (amber ½), "cuts to reach 1 cm? 2ⁿ = 100" (2 amber, n blue, 100 teal); a small grey chip "100 teams: also 2ˣ = 100"; "Next: solving aˣ = b" and "?". This is e04's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 2³ = 8, 2⁶ = 64, 2⁷ = 128; log₂ 100 = 6.6439 (value not stated here; e04 evaluates it).
  (b) `we-1`: log₂ 8 = 3; 1/9 = 3⁻², log₃ (1/9) = −2. `we-2`: x = 5³ = 125.
  (c) ln 1 = 0, ln e = 1, ln e⁴ = 4; ln 5 = 1.6094 (e02 showed the point (1.61, 5) on eˣ).
  (d) log₂ 2⁵ = 5; 2^(log₂ 6) = 6; ln e⁷ = 7; e^(ln 4) = 4.
  (e) A1: 5³ = 125; 2⁻⁴ = 1/16; 9^(1/2) = 3; ln e⁻² = −2. A2: 3⁻² = 1/9; 10^(log₁₀ 7) = 7, log₄ 4³ = 3, sum 10.
  (f) Pronunciations: "log base two of eight"; "log base three of one ninth"; "ell en" for ln (the site's "natural log of" is also fine; the narration says "the natural log of", then "ell en" once on screen read); "e to the ell en four" avoided, said "e to the power, natural log of four".
  (g) A real 100-team knockout has 7 rounds with 28 first-round byes (128 − 100); only "some teams get a free pass" is said.

Main question: *What is a logarithm, and how does it undo an exponential? If 2 to some power is 64, how do we name that power?*
Entry knowledge (e01, e02, w01): values of aˣ for integer and negative x; e ≈ 2.718; index laws.
Stops after: logₐ y as the index to which a is raised to give y; the notation; ln = logₑ; converting forms; logₐ aˣ = x and a^(logₐ x) = x. No calculator solving of aˣ = b, no laws, no graphs.
Handoff: math-a11-e04: "a 1 m ribbon is cut in half again and again: after how many cuts is it 1 cm?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): index and log value blue; result and argument teal; base amber; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · EXPONENTIAL AND LOGARITHMIC FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: how many rounds?
> Here's a knockout tournament. Each round, every match knocks one team out, so half the teams go home. Start with eight teams. After one round there are four, then two, then one winner. That's three rounds, because two cubed is **eight**. So the rounds are the power, and the teams are the result. With sixty-four teams, we need the power of two that gives sixty-four. Two to the sixth is sixty-four, so it's six **rounds**. We've just run the table of two to the x backwards. We knew the result, and found the power. Now try a hundred teams. Two to the six is sixty-four, and two to the seven is a hundred and twenty-eight, so the power is somewhere between six and **seven**. In a real draw you'd play seven rounds, with some teams getting a free pass. But what is that exact power, and what do we call it? That's the question. What is a logarithm, and how does it undo an **exponential**?

Visual: opens on e02's final frame exactly (the noticeboard with the 8-team draw, the trophy, chips "8 teams → 3 rounds", "64 teams → ? rounds", "2^? = 64", "Next: running 2ˣ backwards", "?"). On the first sentence the "Next" chips fade and the 8-team draw plays out: teams' slots dim round by round, a counter "round 1, 2, 3" (blue) and "teams 8, 4, 2, 1" (teal); on "eight" row "2³ = 8", hand tag "rounds = power". On "sixty-four" the sheet redraws a compact 64-team fan; at the right the doubling ladder (rungs 1 to 128 teal, rung numbers 0 to 7 blue, 900 px tall) appears and a marker climbs to 64; on "rounds" the rung number "6" rings, row "2⁶ = 64", the trophy rings. On "backwards" hand tag "run 2ˣ backwards" with an arrow down the ladder. On "a hundred teams" the marker climbs to a mark "100" between rungs 64 and 128; on "seven" the gap between rung numbers 6 and 7 brackets in blue, chip "2ˣ = 100: x between 6 and 7". On "exponential" heading "Logarithms", and the question chip "2 to what power gives 100?" moves to the top right.

### 2. the definition
> That power has a name. It's a logarithm. The logarithm of eight to the base two is the power you raise two to, to get eight. We write it log, with a small two underneath, of eight, and we say log base two of eight. It equals **three**, because two cubed is eight. So two cubed equals eight, and log base two of eight equals three, are the same fact, written two ways. Same base, same power, same result. In general, log base a of y is the index you raise a to, to get **y**. The base a has to be positive and not one, like an exponential's base. And y has to be positive, because a positive base raised to any power always gives a positive number. So there's no log of zero, or of a negative **number**. One more thing. If you see log with no base written, as on a calculator's log key, it means base **ten**.

Visual: stage change: the board shrinks to a 280 px badge at the top left (the ladder small beside it). The converter at the centre, 72 px: "2³ = 8" with 2 amber, 3 blue, 8 teal, hand tags "base", "the power", "the result". On "three" the three numbers slide into "log₂ 8 = 3" (same colours; the 2 drops to a subscript), hand tag "a log is a power". A grey chip "w01: index form" under the first form, "log form" under the second. On "y" the general pair writes, 60 px: "aˣ = y ⇔ logₐ y = x" (a amber, x blue, y teal). On "positive, and not one" grey chip "a > 0, a ≠ 1 (as in e01)". On "always gives a positive number" a small graph of 2ˣ (520 × 380 px) with "range y > 0" shaded, chip "e01: aˣ > 0"; on "number" the rows "log₂ 0" and "log₂ (−4)" write in grey and are crossed, hand tag "y > 0 only". On "ten" grey chip "log y means log₁₀ y (calculator key)".

### 3. worked example: evaluating logs
> Let's evaluate some. Log base two of eight. Ask, two to what power is eight? Two cubed is eight, so the answer is **three**. Dividing eight by two gives four, and that's the slip. A log isn't a division. Now log base three of a ninth. Three to what power is a ninth? A ninth is one over three squared, which is three to the minus two. So the log is minus **two**. A log can be negative. That happens whenever the number is between zero and **one**.

Visual: clear change to the full-width g01 board. Task strip, 44 px: "Evaluate log₂ 8 and log₃ (1/9)." Rows, current 52 px, earlier 32 px and dimmed: "log₂ 8: 2^? = 8"; "2³ = 8"; on "three" "log₂ 8 = 3" (green frame). On "Dividing" a red slip "8 ÷ 2 = 4" writes and is crossed, caption "a log is not a division". Second task: "log₃ (1/9): 3^? = 1/9"; "1/9 = 1/3² = 3⁻²" with grey chip "e01: a⁻ⁿ = 1/aⁿ"; on "two" "log₃ (1/9) = −2" (green frame). On "one" hand tag "between 0 and 1: negative log", and the ladder badge extends downward with rungs ½, ¼ at rung numbers −1, −2.

### 4. worked example: from log form to index form
> Converting works the other way too. Solve log base five of x equals three. In index form, that says five cubed is **x**. So x is a hundred and twenty-**five**. Check it. Five cubed is a hundred and twenty-five, so log base five of a hundred and twenty-five is three. Multiplying five by three, to get fifteen, is the slip. The three is a power, not a **multiplier**. One more. Log base two of x equals minus three means x is two to the minus three, which is an **eighth**. A negative log gives a number between zero and one, just as we saw.

Visual: the board clears row by row (stage continues). Task strip: "Solve log₅ x = 3." The converter arrow from scene 2 slides in small: "logₐ y = x ⇔ aˣ = y". Rows, 52 px: "log₅ x = 3" (5 amber, x teal, 3 blue); on "x" "5³ = x" (index form), hand tag "index form"; on "five" "x = 125" (green frame). Grey row "check: log₅ 125 = 3 since 5³ = 125 ✓". On "multiplier" a red slip "x = 5 × 3 = 15" writes and is crossed, caption "3 is a power". Second task strip: "Solve log₂ x = −3." Rows: "x = 2⁻³"; on "eighth" "x = 1/8" (green frame), hand tag "between 0 and 1".

### 5. the natural log
> Now the base that matters most. Remember e, about two point seven one eight. Log base e has its own name, the natural log, and its own short label, ln. So ln of a means log base e of **a**. It works exactly like any other log. ln of e is one, because e to the one is e. ln of one is zero, because e to the zero is one. And ln of e to the four is just **four**. Your calculator has an ln key. Try ln of five. It's about one point six zero nine. Remember the point on e to the x where the height was five? It was at x equals about one point six one. That x was ln of **five**.

Visual: stage change: a card at the left (900 px), the e02 graph of y = eˣ at the right (700 × 520 px). Card, 60 px framed: on "a" "ln a = logₑ a" (e amber, a teal), hand tag "log base e". Rows, 52 px: "ln e = 1 (e¹ = e)"; "ln 1 = 0 (e⁰ = 1)"; on "four" "ln e⁴ = 4" (green frame). On "ln key" a coded calculator strip with the key "ln" presses: "ln 5 ≈ 1.609" (blue). On "height was five" the point (1.61, 5) on eˣ rings (from e02), a dashed drop to the x-axis lands at "1.609…"; on "five" label "x = ln 5", hand tag "the power that gives 5".

### 6. undoing each other
> So raising to a power, and taking a log, undo each other. Start with five. Raise two to that power, to get thirty-two. Now take log base two of thirty-two. Two to what power is thirty-two? Five. You're back where you started. The two steps are a pair, like locking a door and unlocking it again. So log base a, of a to the x, is just x, for every real **x**. It works in the other order too. Start with six. Log base two of six is some power, and raising two to that power gives six again. So a to the log base a of x is x. This time x must be positive, because only positive numbers have logs. With base e, these say ln of e to the seven is seven, and e to the natural log of four is **four**. In general, e to the ln x is x, for any positive **x**.

Visual: stage change to the undo machine: two coded boxes joined by arrows, "raise a to the power" (left, amber) and "take logₐ" (right, amber), a token travelling through them. Token "5" (blue) enters the left box, leaves as "2⁵ = 32" (teal), enters the right box, leaves as "5" (blue) again; on "x" (first) the identity writes, 60 px framed: "logₐ aˣ = x, for all real x", hand tag "undo". Reverse: token "6" (teal) enters the log box, leaves as "log₂ 6" (blue, "≈ 2.585" small grey), enters the power box, leaves as "6"; identity "a^(logₐ x) = x, for x > 0", hand tag "x > 0 here". Base e rows, 52 px: "ln e⁷ = 7"; on "four" "e^(ln 4) = 4" (green frame); on "x" (last) "e^(ln x) = x, x > 0" (framed, 56 px).

### 7. memory aid
> Here's the summary. A log is a power. Log base a of y asks, a to what power gives y? And the power, and the log, undo each **other**. So whenever you meet a log, turn it into a question about a power, and answer that.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the ladder small with the 64 rung ringed. Main line, hand font 56 px: "A log is a power. logₐ y asks: a to what power gives y?" On "other" the key line, 40 px: "Same three numbers: aˣ = y ⇔ logₐ y = x." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Evaluate log base five of a hundred and twenty-five, log base two of a sixteenth, log base nine of three, and the natural log of e to the minus two. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Evaluate: (a) log₅ 125 (b) log₂ (1/16) (c) log₉ 3 (d) ln(e⁻²)". The full question stays on screen. Picture slot: an empty converter "□^? = □". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Five cubed is a hundred and twenty-five, so the first is **three**. A sixteenth is two to the minus four, so the second is minus **four**. Nine to the power of a half is three, because a half power is a square root, so the third is a **half**. And ln of e to the minus two is minus **two**. Writing three for log base nine of three, by dividing, is the slip.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "three" "(a) 5³ = 125: 3" (green frame); on "four" "(b) 2⁻⁴ = 1/16: −4" (green frame); on "half" "(c) 9^½ = √9 = 3: ½" (green frame); on "two" "(d) −2" (green frame). On "the slip" a red slip "log₉ 3 = 9 ÷ 3 = 3" writes and is crossed, caption "9 to what power is 3?". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Solve log base three of x equals minus two. Then simplify ten to the power log base ten of seven, plus log base four of four cubed. Pause here to answer.

Visual: `QuestionCard`, 40 px: "(a) Solve log₃ x = −2. (b) Simplify 10^(log₁₀ 7) + log₄ 4³." Picture slot: the undo machine's two boxes, empty. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> In index form, x equals three to the minus two, which is a **ninth**. For the second part, ten to the log base ten of seven is just seven, and log base four of four cubed is just three. They undo each other. So the total is **ten**. Multiplying three by minus two, to get minus six, is the slip.

Visual: the card shrinks to the top. Rows, 44 px: "(a) x = 3⁻²"; on "ninth" "x = 1/9" (green frame). "(b) 10^(log₁₀ 7) = 7", "log₄ 4³ = 3", tokens passing through the machine's boxes; on "ten" "7 + 3 = 10" (green frame). On "the slip" a red slip "x = 3 × (−2) = −6" writes and is crossed, caption "−2 is a power". Hold about 1 s.

### 12. handoff
> So now we can name the power for a hundred teams. It's log base two of a hundred. But what's its value? Here's the same equation at home. Take a one-metre ribbon and cut it in half. Keep one half and cut that in half, again and again. After how many cuts is the piece one centimetre long? Each cut halves it, so we need two to the n equals a hundred. How do we solve that? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. On "a hundred teams" the board badge returns with chip "log₂ 100 = ?" (blue). Board clear to the ribbon plate `ma11-ribbon-length-v1.png` (whole, 1,500 px wide) with the scissors (`biology/m5x-scissors-v1.png`, 300 px) beside it. On "one-metre ribbon" chip "1 m = 100 cm" (teal); on "cut it in half" chip "each cut: half is left" (½ amber); on "two to the n" chip "cuts to reach 1 cm? 2ⁿ = 100" (2 amber, n blue, 100 teal); small grey chip "100 teams: also 2ˣ = 100". On "next" chips "Next: solving aˣ = b" and "?". Hold about 2 s. This is e04's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- logₐ y = the index (power) to which a is raised to give y.
- aˣ = y ⇔ logₐ y = x (a > 0, a ≠ 1, y > 0).
- No log of 0 or a negative; a number between 0 and 1 has a negative log.
- ln a = logₑ a; ln 1 = 0, ln e = 1.
- logₐ aˣ = x for all real x; a^(logₐ x) = x for x > 0 (e^(ln x) = x).

Memory aid (framed card, right side, as in scene 7): *A log is a power. logₐ y asks: a to what power gives y?* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and e04's opening frame.

## Teaching checks

- **Does it explain causes?** Why a log is needed: the tournament asks for a missing power (1). Why only positive numbers have logs: aˣ > 0 (2). Why some logs are negative: numbers below 1 need negative powers (3). Why ln 1 = 0 and ln e = 1 (5). Why the undo identities hold, and why the second needs x > 0 (6).
- **Misconceptions addressed:** a log as a division (3 crossed, A1 crossed); "logs can't be negative" (3); multiplying instead of raising (4 crossed, A2 crossed); logs of zero or negatives (2, 6); ln as a different operation (5).
- **Visual standard, item by item:** 1 the tournament board from the first frame; 2 a new stage every 30 to 60 s; 3 the draw playing out, the ladder marker, the converter, the undo machine; 4 fixed roles carried between index and log forms; 5 large type; 6 hand tags; 7 g01 boards in 3 and 4; 8 framed card and five bullets; 9 "2³ = 8" sliding into "log₂ 8 = 3", and e02's point turning out to be ln 5.
- **One idea at a time:** the backwards question (1), the definition (2), evaluating (3), converting (4), ln (5), the undo pair (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 22 s.
- **Avoided double teaching:** the table of 2ˣ and aˣ > 0 (e01), e (e02) and negative indices (w01) are recalled in a phrase or grey chip.
- **Syllabus coverage:** `ci604946ac` (1 to 3; key notes 1 to 3); `ci5994ec54` (2 to 4, A1, A2; key note 2); `ci7cd97f8c` (5; key note 4); `cic84a1659` (6, A2; key note 5).
- **Out of scope by design:** solving aˣ = b with a calculator (e04); the laws (e05); graphs (e08).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Evaluate: (a) log₅ 125 (b) log₂ (1/16) (c) log₉ 3 (d) ln(e⁻²)"
Model answer: (a) 3, since 5³ = 125. (b) −4, since 2⁻⁴ = 1/16. (c) ½, since 9^½ = 3. (d) −2. Classic mistake (crossed): "log₉ 3 = 3".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "(a) Solve log₃ x = −2. (b) Simplify 10^(log₁₀ 7) + log₄ 4³."
Model answer: (a) x = 3⁻² = 1/9. (b) 7 + 3 = 10. Classic mistake (crossed): "x = −6".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Tournament | 8 → 3 rounds (2³); 64 → 6 (2⁶); 100 between 2⁶ = 64 and 2⁷ = 128 | 1 |
| Definition | 2³ = 8 ⇔ log₂ 8 = 3 | 2 |
| `we-1` | log₂ 8 = 3; 1/9 = 3⁻², log₃ (1/9) = −2; slip 4 | 3 |
| `we-2` | log₅ x = 3, x = 125; slip 15; log₂ x = −3, x = 1/8 | 4 |
| ln | ln e = 1; ln 1 = 0; ln e⁴ = 4; ln 5 ≈ 1.609; e02 point (1.61, 5) | 5 |
| Undo | 2⁵ = 32, log₂ 32 = 5; log₂ 6 ≈ 2.585; ln e⁷ = 7; e^(ln 4) = 4 | 6 |
| A1 | 3; −4; ½; −2 | 8, 9 |
| A2 | 1/9; 7 + 3 = 10; slip −6 | 10, 11 |
| Handoff | 1 m = 100 cm; 2ⁿ = 100 (no answer stated) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `e01e08/verify.py`); Codex to re-check.

- 2³ = 8; 2⁶ = 64; 2⁷ = 128; log₂ 100 = 6.6439 (not shown).
- log₂ 8 = 3; log₃ (1/9) = −2; 5³ = 125; 2⁻³ = 1/8.
- ln 1 = 0; ln e = 1; ln e⁴ = 4; ln 5 = 1.6094.
- 2⁵ = 32; log₂ 6 = 2.585; ln e⁷ = 7; e^(ln 4) = 4.
- A1: log₅ 125 = 3; log₂ (1/16) = −4; log₉ 3 = 1/2; ln e⁻² = −2. A2: 3⁻² = 1/9; 10^(log₁₀ 7) + log₄ 4³ = 10.

## Memory aid check

- **"A log is a power. logₐ y asks: a to what power gives y?"** Original wording of the definition (`ci604946ac`). Meaning, as said in scene 7: logₐ y is the index x with aˣ = y. Assumptions checked: a > 0, a ≠ 1, y > 0 (key note 2 keeps them); "power" means any real index, including negative and fractional ones (scenes 3 and A1 (c) show both). It helps a new case: log₈ 2 asks "8 to what power gives 2?", and 8^(1/3) = 2, so it is ⅓. Introduced after scenes 1 to 6.
- **Considered, not used:** "the log is the exponent's address" (vaguer than the definition).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,573 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the draw playing out, the ladder, the converter slides, the undo tokens) and the 45 s notes scene: about 506 s. Characters per scene (1 to 13): 874, 793, 436, 524, 562, 738, 213, 181, 342, 163, 287, 385, 75. Speech before the notes is about 413 s, under the 570 s cap. Feedback speech: about 26 s and 22 s.

Reserve trims if the voiced take runs long: scene 1's "In a real draw you'd play seven rounds" sentence; scene 5's ln 5 callback pair (keep the calculator row).

## Scene list and build ids

Lesson key `m-a11e03` (route math-a11-e03). Explainer folder `src/explainer/lessons/math-a11-e03`; build inputs in `docs/production/claude-pm/lessons/math-a11-e03/` (at voicing).

In order (13 scene headings): hook-rounds, definition, evaluate-logs, log-to-index, natural-log, undo-pair, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 65 s | 1 | The tournament board and the ladder |
| 65 to 120 s | 2 | The converter |
| 120 to 155 s | 3 | g01 board: evaluating logs |
| 155 to 180 s | 4 | g01 board: log form to index form |
| 180 to 230 s | 5 | ln card and e02's eˣ graph |
| 230 to 290 s | 6 | The undo machine |
| 290 to 305 s | 7 | Framed memory card |
| 305 to 400 s | 8 to 11 | Question cards and countdowns, then feedback |
| 400 to 430 s | 12 | The ribbon plate |
| 430 to 475 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e02's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change to the board; 3 to 4 board row clear; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11e03-learning-review.md`, `science_check` = `checks/m-a11e03-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets`, actual appearance): `biology/m5x-scissors-v1.png` (one pair of blue-handled scissors, blades closed, at 45°, true alpha, no backdrop): usable as is for the ribbon cuts. No ribbon plate fits (`chemistry/...magnesium-ribbon` plates are metal strips for a chemistry practical).

Reused: `ma11-tournament-board-v1.png`, `ma11-trophy-v1.png` (e02's brief; scenes 1, 2 badge, 12); `biology/m5x-scissors-v1.png` (scene 12; e04).

Need (painted, new; see the Codex asset brief): `ma11-ribbon-length-v1.png` (this video's handoff and e04).

Coded: the draw brackets, ladder, converter, undo machine, calculator strip, graphs, rows, the countdown, the key notes.

### Studio kit use and additions

Uses: `PlateImg`, `StudioPlot`, `ExponentialDemo`, `WorkingBoard`, `TaskStrip`, `EquationStrip`, `ScreenApp` (calculator strip), `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Knockout draw on a sheet** (small): a bracket for 2ʳ teams drawn inside the board sidecar's sheet rectangle, with slots dimming round by round. Check: the 64-team fan stays inside the rectangle with slots at least 6 px apart.
2. **Index-to-log converter** (small): three coloured tokens animate between "aˣ = y" and "logₐ y = x" layouts (base to subscript). Check: colours carry; the subscript sits at 60 per cent of the line's size and stays above 30 px.
3. **Undo machine** (small): two labelled boxes with a token passing through each, its label changing on exit.

## Codex asset brief (Maths A11 E03, a 1 m ribbon; it opens e04 and is cut there)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-e03.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the e03 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-ribbon-length-v1.png` (4000 × 300 px): one length of red satin ribbon about 25 mm wide, lying perfectly straight and flat, seen from directly above, with both ends cut square. Even width and even colour along its whole length, so that code can crop it from the right to show any shorter piece (the builder crops; it never rescales one axis).

Sidecar JSON (`ma11-ribbon-length-v1.json`): the pixel x of each square end. Report inspection on the paper background (`#f6f1e7`) at 1,500 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-e03-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quotes match the route-inputs JSON exactly.
3. Confirm the conditions a > 0, a ≠ 1, y > 0 appear wherever the definition is stated, and that a^(logₐ x) = x carries x > 0.
4. Confirm both identities are shown with base e (e^(ln x) = x and ln eˣ = x form) as Year 12 d02 and d03 need.
5. Confirm no solving of aˣ = b by calculator, no log law and no log graph is taught.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on e02's final frame.

## YouTube metadata (draft)

Title: What Is a Logarithm? Logs as Powers, ln, and Undoing Exponentials | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson05.sa.html

A knockout tournament with 64 teams needs 6 rounds, because 2⁶ = 64. Running an exponential backwards like this is exactly what a logarithm does. Learn the definition of logₐ y as a power, read and write log notation, convert between index and log form, evaluate logs (including negative ones), meet the natural log ln = logₑ, and see why logₐ aˣ = x and a^(logₐ x) = x. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Exponential and logarithmic functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define the logarithm of a number y, where y > 0, to any positive base a as the index to which a is raised to give y"
"Use the notation log_a y for the logarithm of y to the base a"
"Define the natural logarithm ln a = log_e a"
"Recognise and use the logarithmic properties: log_a a^x = x for all real x, a^(log_a x) = x where x > 0"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce

Builds on: Exponential graphs; the number e. Next: Solving aˣ = b with logarithms.

#Year11Maths #MathsAdvanced #Logarithms #HSCScience

## Open decisions

- **1. Reading "ln" aloud (voicer).** The narration says "the natural log of" throughout, which the Google voice reads cleanly; on screen it is "ln". If root prefers students to hear "ell en" as well, scene 5 can add "written ln, and often read ell en".
- **2. The 100-team draw (learning review).** "Some teams get a free pass" (byes) is one sentence. If it distracts, cut it (reserve trim) and keep "between six and seven".

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from e01, e02 and w01; check that the converter makes "a log is a power" stick, that negative logs feel caused, and that both identities are heard with base e), then the Codex maths check and error check, then voicing and a build to grade A.
