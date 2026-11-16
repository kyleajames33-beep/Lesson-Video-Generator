# Maths A11 E07: Why does the change of base rule work? Proving logₐ x = (log_b x)/(log_b a), the fixed ratio between two bases, the ln form, and using it to evaluate and solve (design)

Status: Revision 2 (17 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-c06.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,889 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 530 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-e07-learning-review.md` (summary `../checks/m-a11-e01-e08-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md` and root's resolution brief of 17 Nov (every spoken "ln" is "the natural log of", introduced once in e03; review evidence paths). Resolution log: `../checks/m-a11-e01-e08-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, root ruling 4 not applied (early rounding still learner copy): **accepted**. Scene 4's three sentences ("One more habit ... keep the full values") and the 1.7707 against 1.7712 comparison are cut; scene 4 now ends "That's the log of seven thirds", with the bold cue moved to "thirds" (the crossed ghost "ln 7 − ln 3 = ln(7/3)" completes on it). The plain instruction "Keep the full calculator values, and divide" stays. The comparison is now author note (g). Key note 5 is root's text: "Check: raise a to your answer; you should get x back." The hand-tag list, mistake list, teaching checks, "Numbers used" `we-1` row, "Numbers to verify" and the boundary no longer present early rounding as taught. Open decision 2 is closed as ruled.
2. Optional, scene 6 (the skipped inequality step): **applied**, reviewer's wording ("So ten to the d can't be more than two to the thirty-two. Taking log base ten of both, d is at most ..."). The row splits into "10ᵈ ≤ 2³²" and "d ≤ log₁₀ 2³²" (chip "log₁₀ of both sides"), each on its spoken words. No further justification of the direction, as the reviewer advised.
3. Optional, A2 (rule picture): **kept as written** (the reviewer judged it fine; it names the method, not the answer).

Root's ln ruling: scenes 4, 5 and 7 and feedback 1 now say "the natural log of" for every ln. Feedback 1's slip is "Putting the natural log of seven on top is the slip" (shorter than reading both logs aloud; the screen still shows "ln 7 / ln 50" crossed). The memory aid check's scene reference is corrected (scene 7). Open decision 1 (bits) is closed: keep, as the reviewer advised. Joins unchanged: scene 1 opens on e06's final frame and scene 12 is still e08's opening frame.

Narration 5,889 characters by script (Revision 1: 5,694), about 530 s with holds; speech before the notes about 437 s, under the 570 s cap. Changed values were rechecked with SymPy 1.14 (scratchpad `e-rev2/verify.py`; see "Numbers to verify"); Codex's maths check remains the authority. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. The `learning_review` evidence path now reads `checks/m-a11-e07-learning-review.md`. Nothing recorded; human listening pending.

Scope: fifty-sixth video of Year 11 Mathematics Advanced (2024), outline order 56, Exponential and logarithmic functions. Pre-design pack: `../pre-design/maths-a11/math-a11-e07.md` (brief 243). Site lesson (read through the pack's quotations, read only): `exponential-and-logarithmic-functions/lesson08.sa.html` (the "Proving it" card, including why a ≠ 1; `we-1`, log₃ 7 = ln 7/ln 3 ≈ 1.771; both with their numbers). Route entry: `math-a11-e07` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted bike lock (e06's brief) and the painted rare card (e01's brief) for the handoff; every scale, row and graph coded.

Owner rules applied: as e01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (home and phones: a combination lock and the switches a computer stores it in), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Exponential and logarithmic functions, Logarithmic functions), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ciae7673fb`: "Prove the change of base rule log_a x = (log_b x)/(log_b a) and use it to solve problems"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce

**Boundary:** starts from e06's final frame exactly (the bike lock with coded wheels "0 0 0 0"; chips "4 dials: 10⁴ = 10 000 codes", "n switches give 2ⁿ codes", "2ⁿ = 10 000, n = log₂ 10 000 = ?"; "Next: changing the base", "?"). Recalls e03 (converting between log and index form), e04 (log₂ 7 is exact and the calculator's base key gives ≈ 2.807) and e05 (the power law) in a phrase or grey chip each. Teaches: the lock's digits are log₁₀ of the number of codes and its switches are log₂, and the two readings keep a fixed ratio of about 3.32; the proof of logₐ x = log_b x / log_b a in four reasoned rows, with why a ≠ 1 is needed; the fixed ratio is 1/log₁₀ 2; the ln form logₐ x = ln x / ln a (site `we-1`), with the slip of putting the base on top; using it: log₂ 7 again, solving 5ˣ = 30, and relating log₈ x to log₂ x; the reverse lock problem, the longest all-digit code 32 switches can store (`ciae7673fb`). Stops at the rule and its uses. Not taught: log graphs (e08); differentiating logₐ x (Year 12 d04).

## Decisions

- **Anchor: a combination bike lock, and the switches a computer stores its code in (painted plate, live).** Four dials give 10⁴ = 10 000 codes, so the digits are log₁₀ of the number of codes. A computer stores choices in yes-or-no switches (bits): n switches give 2ⁿ codes, so the switches needed are log₂ of the number of codes, log₂ 10 000 ≈ 13.29, so 14 switches. One dial (10 codes) needs log₂ 10 ≈ 3.32 switches' worth, and a 6-digit code needs log₂ 10⁶ ≈ 19.93, so 20. Every time, switches ÷ digits ≈ 3.32: one fixed ratio between a base-2 log and a base-10 log, which is the change of base rule's whole content (log₂ N = log₁₀ N / log₁₀ 2). Home, phones and tech; original. The pack's camera zoom buttons were considered: repeatedly pressing "2×" is not how phone zoom works, so the model would mislead; the elimination game is close to e03's tournament. No Year 12 or a11 design uses a combination lock, PIN, password or bits (grep 16 Nov: "padlock", "combination lock", "password", "bits" no hit; "PIN" hits are the verb "pin"). The word "bits" is given a plain meaning and used sparingly; "switches" carries the narration.
- **Simulations (standard item 3).**
  1. **Two log scales** (`LogRuler` pair, scenes 1, 3): a horizontal scale of codes from 1 to 1,000,000 (log spaced), with two readings above it: "digits (log₁₀)" (amber 10) and "switches (log₂)" (amber 2). A marker slides to 10, 100, 10 000 and 1,000,000; the readouts tick (1 | 3.32, 2 | 6.64, 4 | 13.29, 6 | 19.93) and a third readout "switches ÷ digits" (violet) holds at 3.32.
  2. **Proof board with reason chips** (`WorkingBoard`, scene 2): four rows, each arriving with its reason chip ("definition", "take log_b", "power law", "divide by log_b a ≠ 0").
  3. **The lock's wheels and switches** (scenes 1, 3): the four wheels spin through codes while a bank of 14 coded switches (grey and teal) flips through matching binary patterns; the 14th switch is shown needed because 13 give only 8192 codes.
- **Colour roles (fixed for the e strand, as e01).** The old base a and the new base b **amber** (a solid, b outlined); log values and the unknown **blue**; numbers inside logs **teal**; the fixed ratio **violet**; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As e01. Hand tags: "digits = log₁₀", "switches = log₂", "always × 3.32", "definition", "take log_b", "power law", "a ≠ 1, so log_b a ≠ 0", "the base goes to the basement", "same as the base key".
- **Stage changes (standard item 2).** The lock with wheels, switches and two scales (1); the proof board (2); the lock explained by the rule (3); g01 board with ln (4); g01 board, using the rule (5); board, the 32-switch problem (6); framed card (7); question cards (8 to 11); the rare card and its graph (12); key notes (13).
- **Worked examples (g01 layout).** 3: log₂ 10 000 = log₁₀ 10 000 / log₁₀ 2 = 4/0.30103 ≈ 13.29 (original). 4: site `we-1`, log₃ 7 = ln 7/ln 3 ≈ 1.771; crossed "ln 3/ln 7 ≈ 0.565" (base on top). 5: log₂ 7 = ln 7/ln 2 ≈ 2.807 (e04's value again); 5ˣ = 30 gives x = ln 30/ln 5 ≈ 2.113; log₈ x = log₂ x / log₂ 8 = ⅓ log₂ x (pack's two-scale idea).
- **Memory aid.** Framed card: "The base goes to the basement: logₐ x = (log x)/(log a), any one base for both." Second line: "With ln: logₐ x = ln x / ln a."
- **Visual surprise.** The "switches ÷ digits" readout stays frozen at 3.32 while the marker races from 10 codes to a million.
- **Site notes (pack section 8 and `../site-corrections-maths-a11.md` section 6).** lesson08's "Earlier you were asked how to compute log₅ 30" refers to an opening that never asked; here 5ˣ = 30 is posed and solved in scene 5. The currency-exchange hook is not used (it resembles the w27 pack's travel money). lesson08 `we-2` and `we-3` are e06's.
- **Plain meanings at first use.** Bit ("a yes-or-no switch a computer stores"); change of base ("rewriting a log in one base using logs in another"); the basement (the denominator, said as "the bottom of the fraction").
- **Attempts (pack questions).** A1: log₇ 50 to 3 decimal places, checked by raising 7 to that power (2.010; 7^2.010 ≈ 50); crossed "ln 7/ln 50". A2: show log₄ x = ½ log₂ x and solve log₂ x + log₄ x = 6 (x = 16); crossed "x = 4".
- **Mistake scene:** none separate. Base on top (4 crossed, A1 crossed); ln 7 − ln 3 for log₃ 7 (4 grey ghost crossed); solving for log₂ x and stopping (A2 crossed).
- **Cause chain taught, in order:** (1) the digits and switches of the same code are logs of the same number in two bases, and their ratio never changes (1); (2) writing y = logₐ x as aʸ = x and taking any other log turns the unknown power into a multiplier, so dividing by log_b a gives y; log_b a is not zero because a ≠ 1 (2); (3) so log₂ N is log₁₀ N times the fixed number 1/log₁₀ 2 ≈ 3.32, the lock's ratio (3); (4) choosing b = e gives the ln form (4); (5) the rule evaluates any log, solves aˣ = b with ln, rewrites one base in terms of another, and answers the lock's reverse question (5, 6).
- **Entry knowledge (route):** e05 (the power law log_b (aʸ) = y log_b a); e03 (log and index form); e04 (exact log answers such as log₂ 7).
- **What Year 12 relies on.** d04 shows "Year 11 change of base: logₐ x = (log_b x)/(log_b a), here with b = e" and writes log₂ x = ln x / ln 2 = (1/ln 2) ln x, a vertical scale by a fixed factor. Scene 4 finishes on logₐ x = ln x / ln a, and scenes 1 and 3 show the fixed-factor picture (one log is a constant multiple of the other) that d04 turns into a vertical stretch.
- **Handoff (to math-a11-e08, "How is the log graph a reflection of the exponential graph?").** Scene 11: the rare card plate (`ma11-trading-card-rare-v1.png`) returns from e01 with a coded tag "value V (hundreds of $) = 2ˣ", a graph of V = 2ˣ for x −1 to 3 (x "years", V "hundreds of $") with its table "x: −1, 0, 1, 2, 3" and "V: ½, 1, 2, 4, 8"; chips "worth $800 when? x = log₂ 8 = 3", "years as a function of value: x = log₂ V", "swap every pair (x, V) → (V, x)?"; "Next: the graph of a log" and "?". This is e08's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Lock: log₁₀ 10 000 = 4; log₂ 10 000 = 13.2877; 2¹³ = 8192 < 10 000 ≤ 16 384 = 2¹⁴, so 14 switches. log₂ 10 = 3.32193; log₂ 100 = 6.644; log₂ 10⁶ = 19.9316, so 20. Ratio 1/log₁₀ 2 = 3.32193.
  (b) Proof: y = logₐ x ⇔ aʸ = x; log_b (aʸ) = log_b x; y log_b a = log_b x; y = log_b x / log_b a, valid since a > 0, a ≠ 1 gives log_b a ≠ 0 (b > 0, b ≠ 1, x > 0).
  (c) `we-1`: ln 7 = 1.94591, ln 3 = 1.09861, ratio 1.77124 ≈ 1.771. Rounded first: 1.946/1.099 = 1.77070 (1.7707 against 1.7712 at 4 d.p.; both 1.771 at 3 d.p.). Base on top: ln 3/ln 7 = 0.5646.
  (d) log₂ 7 = 2.8074; ln 30/ln 5 = 3.401/1.609 = 2.1133; log₂ 8 = 3, so log₈ x = (1/3) log₂ x.
  (e) A1: ln 50/ln 7 = 3.912/1.946 = 2.01038 ≈ 2.010; 7^2.010 = 49.96 ≈ 50. Slip ln 7/ln 50 = 0.497. A2: log₄ x = log₂ x / log₂ 4 = ½ log₂ x; (3/2) log₂ x = 6; log₂ x = 4; x = 16. Check: log₂ 16 + log₄ 16 = 4 + 2 = 6.
  (f) Pronunciations: "log base a of x equals log base b of x, over log base b of a"; "three point three two"; "thirteen point two nine"; "the natural log of seven over the natural log of three". Every spoken ln is "the natural log of" (root ruling, 17 Nov; e03 introduces the reading).
  (g) Early rounding (moved from learner copy by root ruling 4, 17 Nov). Rounding ln 7 and ln 3 to 3 d.p. before dividing gives 1.946 ÷ 1.099 = 1.7707 against the full-value 1.7712; both round to 1.771 at 3 d.p. A difference in the 4th decimal place does not earn screen time. The scene keeps only the plain instruction "Keep the full calculator values, and divide."

Main question: *Why does the change of base rule work? Why is a code's switch count always about 3.32 times its digit count?*
Entry knowledge (e05, e03, e04): the power law; index form; log₂ 7 is exact but needs a value.
Stops after: the proof of logₐ x = log_b x / log_b a; the ln form; evaluating, solving and relating bases with it. No log graphs.
Handoff: math-a11-e08: "the rare card from e01: turn its graph around to read the years from the value. What does that log graph look like?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): bases a and b amber; log values blue; numbers inside logs teal; the fixed ratio violet; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · EXPONENTIAL AND LOGARITHMIC FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: digits and switches
> Here's last time's lock. Four dials, ten thousand codes. The four is log base ten of ten thousand, because ten to the four is ten thousand. Now the computer side. A bit is a yes or no switch, and n switches give two to the n codes. How many switches for ten thousand codes? It's log base two of ten thousand, about thirteen point two nine. Thirteen switches only give eight thousand one hundred and ninety-two codes, so you need **fourteen**. Now compare other locks. One dial is about three point three two switches. Two dials, six point six four. Six dials, nineteen point nine three. Divide switches by digits, and you get three point three two, every single **time**. A base two log and a base ten log of the same number always keep the same ratio. Why does that happen? Why does the change of base rule **work**?

Visual: opens on e06's final frame exactly (the bike lock with wheels "0 0 0 0", chips "4 dials: 10⁴ = 10 000 codes", "n switches give 2ⁿ codes", "2ⁿ = 10 000, n = log₂ 10 000 = ?", "Next: changing the base", "?"). On the first sentence the "Next" chips fade; the wheels spin through a few codes. Row, 52 px: "log₁₀ 10 000 = 4" (10 amber, 4 blue), hand tag "digits = log₁₀". On "bit" a bank of 14 coded switches lines up under the lock, chip "bit: a yes/no switch"; "log₂ 10 000 ≈ 13.29", hand tag "switches = log₂". On "fourteen" the 13-switch bank lights with "2¹³ = 8192 codes" (red outline, too few) and the 14th switch joins, "2¹⁴ = 16 384" (green), row "14 switches". On "compare other locks" the two log scales (`LogRuler` pair, 1,300 px wide) draw below: codes from 1 to 1,000,000; the marker slides to 10, 100 and 1,000,000, readouts "digits | switches" ticking 1 | 3.32, 2 | 6.64, 6 | 19.93; the violet readout "switches ÷ digits = 3.32" holds still; on "time" it rings, hand tag "always × 3.32". On "work" heading "The change of base rule", and the question chip "Why always 3.32?" moves to the top right.

### 2. the proof
> Here's the proof. We want log base a of x, written using some other base, b. Call the answer y. So y equals log base a of x. Step one, by the definition of a log, that means a to the y equals **x**. Step two, take log base b of both sides. That gives log base b of a to the y, equals log base b of x. Step three, the power law brings the y down to the front. So y times log base b of a, equals log base b of **x**. Step four, divide both sides by log base b of a. We can, because a isn't one, so log base b of a isn't zero. That's the same reason one is never allowed as a base. So y equals log base b of x, over log base b of a. And y was log base a of x. That's the change of base **rule**.

Visual: stage change to the full-width proof board (`WorkingBoard`); the lock shrinks to a 260 px badge with "÷ = 3.32". Task strip, 44 px: "Prove: logₐ x = (log_b x)/(log_b a)." Rows, current 52 px, earlier 32 px dimmed, each with its reason chip at the right: "let y = logₐ x"; on "x" (first) "aʸ = x" (chip "definition", grey "e03: index form"); "log_b (aʸ) = log_b x" (chip "take log_b"); on "x" (second) "y log_b a = log_b x" (y slides down to the front, chip "power law", grey "e05"); "y = log_b x / log_b a" (chip "divide by log_b a ≠ 0"), hand tag "a ≠ 1, so log_b a ≠ 0" with a small grey row "log_b 1 = 0". On "rule" the final row frames, 60 px: "logₐ x = (log_b x)/(log_b a)" (a solid amber, b outlined amber).

### 3. the lock, explained
> Now back to the lock. Take a equals two, and b equals ten. Then log base two of any number of codes is log base ten of it, divided by log base ten of two. Log base ten of two is about zero point three zero one, and dividing by that is the same as multiplying by about three point three two. That's the fixed **ratio**. So for ten thousand codes, it's four, divided by zero point three zero one zero three, which is about thirteen point two **nine**, exactly what we found. The rule says one log is always a fixed multiple of the other. Only the base sets the **multiple**.

Visual: clear change: the lock and the two log scales return at the right (900 px); rows at the left, 52 px: "log₂ N = log₁₀ N / log₁₀ 2" (2 solid amber, 10 outlined); "log₁₀ 2 ≈ 0.30103"; on "ratio" "1/0.30103 ≈ 3.32" (violet), and the scales' frozen readout pulses. On "nine" row "log₂ 10 000 = 4/0.30103 ≈ 13.29" (green frame), the marker at 10 000 rings. On "multiple" hand tag "base sets the multiple", and the scales' readouts relabel "log₂ N = 3.32 × log₁₀ N".

### 4. with the natural log
> On a calculator, the easiest base to use is e. So the rule becomes, log base a of x equals the natural log of x over the natural log of a. Let's evaluate log base three of seven. That's the natural log of seven over the natural log of three. Keep the full calculator values, and divide. It's about one point seven seven **one**. Putting the base on top, the natural log of three over the natural log of seven, is the slip. That gives about zero point five six five, and it can't be right, because three to the power of something less than one is less than three, not **seven**. And it isn't the natural log of seven minus the natural log of three, either. That's the log of seven **thirds**.

Visual: clear change to the g01 board. Rule strip, 60 px, framed: "logₐ x = ln x / ln a" (b = e). Task strip, 44 px: "Evaluate log₃ 7 to 3 decimal places." Rows, 52 px: "log₃ 7 = ln 7 / ln 3" (7 teal, 3 amber); calculator strip "1.945910… ÷ 1.098612…"; on "one" "≈ 1.771" (green frame). On "slip" a red slip "ln 3 / ln 7 ≈ 0.565" writes and is crossed, caption "the base goes to the basement"; a grey check "3^0.565 ≈ 1.86, not 7". On "seven" (last cue in the sentence) the check rings. A grey ghost "ln 7 − ln 3" writes; on "thirds" it completes as "= ln(7/3)" and is crossed, caption "that's log of 7/3".

### 5. using the rule
> Now let's use it. Back in the video on solving, log base two of seven came out at about two point eight zero seven, using the calculator's base key. The rule agrees. The natural log of seven over the natural log of two is two point eight zero **seven**. Next, solve five to the x equals thirty. The exact answer is log base five of thirty, so x is the natural log of thirty over the natural log of five, about two point one one **three**. And the rule relates two bases exactly. Log base eight of x is log base two of x, over log base two of eight. Log base two of eight is three, so log base eight of x is a third of log base two of **x**. Every base eight reading is a third of the base two **reading**.

Visual: the board clears row by row (stage continues). Three task strips stacked, 44 px: "(a) log₂ 7 (b) Solve 5ˣ = 30 (c) Write log₈ x in terms of log₂ x." Rows, 52 px: "(a) ln 7 / ln 2"; on "seven" "≈ 2.807" (green frame), grey chip "e04: same as the base key", hand tag "same as the base key". "(b) x = log₅ 30 = ln 30 / ln 5"; on "three" "≈ 2.113" (green frame). "(c) log₈ x = log₂ x / log₂ 8"; "log₂ 8 = 3"; on "x" "log₈ x = ⅓ log₂ x" (green frame). On "reading" a pair of small log scales (base 2 and base 8, x from 1 to 64) shows marks 8 and 64 reading 3 and 6 against 1 and 2.

### 6. a problem with the lock
> One more problem, the other way round. A small device stores a code in thirty-two switches. What's the longest code made only of digits that it can hold? Thirty-two switches give two to the thirty-two codes, and d digits need ten to the d codes. So ten to the d can't be more than two to the thirty-two. Taking log base ten of both, d is at most log base ten of two to the thirty-two. By the power law, that's thirty-two times log base ten of two, which is thirty-two times zero point three zero one, about nine point six **three**. Or with change of base, it's thirty-two divided by three point three two. Same thing. d has to be a whole number of digits, so the longest code is nine digits. Ten digits would need more than thirty-two **switches**.

Visual: clear change: the lock badge returns at the top right; the switch bank shows 32 switches. Task strip, 44 px: "32 switches: what is the longest all-digit code they can store?" Rows, 52 px: "codes available: 2³²"; "d digits need 10ᵈ codes"; on "can't be more" "10ᵈ ≤ 2³²" (d blue); on "Taking log base ten of both" "d ≤ log₁₀ 2³²" (chip "log₁₀ of both sides"); "= 32 log₁₀ 2 = 32 × 0.30103" (chip "power law"); on "three" "d ≤ 9.63" (grey "= 32 ÷ 3.32"); row "d = 9 digits" (green frame). On "switches" grey check rows "10⁹ = 1 000 000 000 ≤ 2³² ≈ 4 290 000 000 ✓" and "10¹⁰ > 2³² ✗".

### 7. memory aid
> Here's the summary. The base goes to the basement. Log base a of x is log x over log a, using any one base for both. With natural logs, it's the natural log of x over the natural log of **a**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the two scales small with "× 3.32". Main line, hand font 56 px: "The base goes to the basement: logₐ x = (log x)/(log a), any one base for both." On "a" the key line, 40 px: "With ln: logₐ x = ln x / ln a." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Use the change of base rule to evaluate log base seven of fifty, to three decimal places. Then check your answer by raising seven to that power. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Use the change of base rule to evaluate log₇ 50 to 3 decimal places, and check your answer by raising 7 to that power." The full question stays on screen. Picture slot: an empty calculator display. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Log base seven of fifty is the natural log of fifty over the natural log of seven, which is about two point zero one **zero**. Check it. Seven to the two point zero one zero is about fifty, so it **works**. That makes sense. It's just over two, because seven squared is forty-nine, just under fifty. Putting the natural log of seven on top is the slip.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "log₇ 50 = ln 50 / ln 7"; on "zero" "≈ 2.010" (green frame). On "works" "7^2.010 ≈ 49.96 ≈ 50 ✓" (green frame); grey "7² = 49". On "the slip" a red slip "ln 7 / ln 50" writes and is crossed, caption "base to the basement". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Show that log base four of x equals a half log base two of x. Hence solve log base two of x, plus log base four of x, equals six. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Show that log₄ x = ½ log₂ x, and hence solve log₂ x + log₄ x = 6." Picture slot: the rule strip "logₐ x = (log_b x)/(log_b a)" with empty boxes. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> By the rule, log base four of x is log base two of x, over log base two of four. That's over two, so it's a half log base two of **x**. Then the equation is one and a half log base two of x equals six. So log base two of x is four, and x is two to the four, which is **sixteen**. Stopping at four is the slip. Four is the log, not x.

Visual: the card shrinks to the top. Rows, 44 px: "log₄ x = log₂ x / log₂ 4"; on "x" "= ½ log₂ x" (green frame). "(3/2) log₂ x = 6"; "log₂ x = 4"; on "sixteen" "x = 2⁴ = 16" (green frame). On "the slip" a red slip "x = 4" writes and is crossed, caption "4 is log₂ x". Hold about 1 s.

### 12. handoff
> So any log can be written in any base you like. To finish the strand, let's draw a log. Remember the rare card from the start of the strand? Measure its value in hundreds of dollars, and it's two to the x after x years. Now turn the question around. When is it worth eight hundred dollars? After log base two of eight, which is three years. So the years are log base two of the value. If we swap every pair in the table, what does that graph look like? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the rare card plate `ma11-trading-card-rare-v1.png` (400 px tall) at the left with the coded tag "value V (hundreds of $) = 2ˣ". On "two to the x" a graph (760 × 560 px) at the right draws V = 2ˣ for x −1 to 3 ("x: years", "V: hundreds of $") with a table beneath, 40 px: "x: −1, 0, 1, 2, 3" (blue) and "V: ½, 1, 2, 4, 8" (teal). On "eight hundred dollars" the point (3, 8) rings, chip "worth $800 when? x = log₂ 8 = 3". On "the years are log base two" chip "years as a function of value: x = log₂ V". On "swap every pair" chip "swap every pair (x, V) → (V, x)?". On "next" chips "Next: the graph of a log" and "?". Hold about 2 s. This is e08's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Change of base: logₐ x = (log_b x)/(log_b a) (a, b > 0; a, b ≠ 1; x > 0).
- Proof: y = logₐ x ⇒ aʸ = x ⇒ y log_b a = log_b x ⇒ divide by log_b a (≠ 0 as a ≠ 1).
- With ln: logₐ x = ln x / ln a, e.g. log₃ 7 = ln 7/ln 3 ≈ 1.771.
- One log is a fixed multiple of another: log₂ N = log₁₀ N / log₁₀ 2 ≈ 3.32 log₁₀ N.
- Check: raise a to your answer; you should get x back.

Memory aid (framed card, right side, as in scene 7): *The base goes to the basement.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and e08's opening frame.

## Teaching checks

- **Does it explain causes?** Why the lock's ratio is fixed: logs in two bases of the same number differ by the factor 1/log_b a (1, 3). Why the proof works, row by row (2). Why a ≠ 1 is needed (2). Why the base-on-top answer is impossible (4, the check).
- **Misconceptions addressed:** base on top (4 crossed, A1 crossed); ln 7 − ln 3 (4 crossed); stopping at log₂ x (A2 crossed).
- **Visual standard, item by item:** 1 the lock from the first frame, wheels and switches live; 2 a new stage every 35 to 60 s; 3 the two scales with a frozen ratio, the switch bank, the reasoned proof; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 4 and 5; 8 framed card and five bullets; 9 the ratio readout frozen at 3.32 while codes go from 10 to a million.
- **One idea at a time:** the fixed ratio (1), the proof (2), the lock explained (3), the ln form (4), uses (5), a reverse problem (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 23 s and 24 s.
- **Avoided double teaching:** index form (e03), log₂ 7 (e04) and the power law (e05) are recalled in grey chips.
- **Syllabus coverage:** `ciae7673fb`: prove (2), use (3 to 6, A1, A2); key notes 1 to 5.
- **Out of scope by design:** log graphs (e08); the derivative of logₐ x (Year 12 d04).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Use the change of base rule to evaluate log₇ 50 to 3 decimal places, and check your answer by raising 7 to that power."
Model answer: log₇ 50 = ln 50/ln 7 ≈ 2.010. Check: 7^2.010 ≈ 49.96 ≈ 50. Classic mistake (crossed): "ln 7/ln 50".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "Show that log₄ x = ½ log₂ x, and hence solve log₂ x + log₄ x = 6."
Model answer: log₄ x = log₂ x / log₂ 4 = ½ log₂ x. Then (3/2) log₂ x = 6, log₂ x = 4, x = 16. Classic mistake (crossed): "x = 4".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Lock | 10⁴ = 10 000; log₂ 10 000 ≈ 13.29; 2¹³ = 8192, 2¹⁴ = 16 384; 14 switches | 1, 3 |
| Scales | 10: 1 and 3.32; 100: 2 and 6.64; 10⁶: 6 and 19.93; ratio 3.32 | 1, 3 |
| Fixed ratio | log₁₀ 2 ≈ 0.30103; 1/0.30103 ≈ 3.32; 4/0.30103 ≈ 13.29 | 3 |
| `we-1` | ln 7/ln 3 ≈ 1.771; slip 0.565 (3^0.565 ≈ 1.86) (1.7707 against 1.7712 is now an author note only, author note c) | 4 |
| Uses | ln 7/ln 2 ≈ 2.807; ln 30/ln 5 ≈ 2.113; log₈ x = ⅓ log₂ x | 5 |
| Lock problem | 2³² ≈ 4.29 × 10⁹; 32 × 0.30103 ≈ 9.63; 9 digits; 10⁹ ≤ 2³² < 10¹⁰ | 6 |
| A1 | ≈ 2.010; 7^2.010 ≈ 49.96; 7² = 49 | 7, 8 |
| A2 | ½ log₂ x; log₂ x = 4; x = 16 | 9, 10 |
| Handoff | V = 2ˣ; table ½, 1, 2, 4, 8; log₂ 8 = 3 | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 and 17 Nov 2026, scratchpad `e01e08/verify.py`); Codex to re-check.

- Revision 2 (17 Nov 2026, SymPy 1.14, scratchpad `e-rev2/verify.py`): 10⁹ ≤ 2³² = 4 294 967 296 < 10¹⁰ (scene 6's spoken inequality). Rechecked: ln 7/ln 3 = 1.77124; ln 50/ln 7 = 2.01038; 7^2.010 = 49.963. 1.946/1.099 = 1.77070 is author note (g) only.

- log₂ 10 000 = 13.2877; 2¹³ = 8192; 2¹⁴ = 16 384; log₂ 10 = 3.32193; log₂ 10⁶ = 19.9316; 1/log₁₀ 2 = 3.32193; log₁₀ 2 = 0.301030.
- ln 7 = 1.94591; ln 3 = 1.09861; ln 7/ln 3 = 1.77124; 1.946/1.099 = 1.77070 (author note c only, not learner copy); ln 3/ln 7 = 0.5646; 3^0.5646 ≈ 1.86.
- ln 7/ln 2 = 2.8074; ln 30/ln 5 = 2.1133; log₂ 8 = 3.
- 32 log₁₀ 2 = 9.6330; 32/log₂ 10 = 9.6330; 2³² = 4 294 967 296.
- A1: ln 50/ln 7 = 2.01038; 7^2.010 = 49.963. A2: x = 16.

## Memory aid check

- **"The base goes to the basement: logₐ x = (log x)/(log a), any one base for both."** A common mnemonic. Meaning, as said in scene 7: the base of the log you want goes in the denominator, under a log of any one base you can evaluate, with the number in the numerator. Assumptions checked: the same base must be used top and bottom (the card says "any one base for both"); a ≠ 1 so the basement is not zero (key note 2). It helps a new case: log₅ 0.2 = ln 0.2/ln 5 = −1, matching 5⁻¹ = 0.2. Introduced after scenes 1 to 5.
- **Considered, not used:** "top over bottom" (does not say which goes where).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; Revision 2 recount, 17 Nov, scratchpad `e-rev2/count.py`): 5,889 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the wheels, switch bank and scales, the proof rows) and the 45 s notes scene: about 530 s. Characters per scene (1 to 13): 805, 680, 560, 679, 689, 741, 188, 177, 344, 161, 325, 465, 75. Speech before the notes is about 437 s, under the 570 s cap. Feedback speech: about 26 s and 24 s.

Reserve trims if the voiced take runs long: scene 4's "And it isn't the natural log of seven minus the natural log of three" pair (keep the crossed ghost); scene 1's "Two dials" phrase (keep the readout).

## Scene list and build ids

Lesson key `m-a11e07` (route math-a11-e07). Explainer folder `src/explainer/lessons/math-a11-e07`; build inputs in `docs/production/claude-pm/lessons/math-a11-e07/` (at voicing).

In order (13 scene headings): hook-digits-switches, proof, lock-explained, natural-log-form, using-the-rule, lock-problem, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 65 s | 1 | The lock, the switch bank and two scales |
| 65 to 125 s | 2 | Proof board with reason chips |
| 125 to 165 s | 3 | The lock explained |
| 165 to 225 s | 4 | g01 board: the ln form and its slips |
| 225 to 275 s | 5 | g01 board: using the rule |
| 275 to 320 s | 6 | Board: the 32-switch problem |
| 320 to 335 s | 7 | Framed memory card |
| 335 to 425 s | 8 to 11 | Question cards and countdowns, then feedback |
| 425 to 460 s | 12 | The rare card and its graph |
| 460 to 505 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e06's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change; 3 to 4 clear change to the board; 4 to 5 board row clear; 5 to 6 clear change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-e07-learning-review.md`, `science_check` = `checks/m-a11-e07-maths-check.md`.

## Assets

Reused: `ma11-bike-lock-v1.png` (e06's brief; scenes 1, 2 badge, 3); `ma11-trading-card-rare-v1.png` (e01's brief; scene 11; e08). No new plate.

Coded: the wheels and switch bank, the two log scales and readouts, every row and chip, the calculator strips, the small scales in 5, the handoff graph and table, the countdown, the key notes.

### Studio kit use and additions

Uses: `PlateImg`, `LogRuler`, `WorkingBoard`, `TaskStrip`, `ScreenApp` (calculator strip), `StudioPlot`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Paired log scales with a ratio readout** (`LogRuler` pair, small): one horizontal log-spaced axis with readings in two bases above it and a live ratio readout. Check: the ratio readout is computed from the two readings (not typed) and reads 3.32 at every stop.
2. **Switch bank** (small): n coded two-state switches with a "codes = 2ⁿ" readout.

## Codex asset brief

No new plate. The lock is painted under e06's brief and the rare card under e01's; both must exist before the e07 build.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the proof has four reasoned rows and states why log_b a ≠ 0 (a ≠ 1).
4. Confirm the ln form logₐ x = ln x / ln a is on screen (Year 12 d04 uses b = e).
5. Confirm the "bits" and "switches" statements are correct (n switches give 2ⁿ codes; 14 switches for 10 000 codes).
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on e06's final frame.

## YouTube metadata (draft)

Title: The Change of Base Rule: Proof and Uses | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson08.sa.html

A 4-dial lock has 10 000 codes. A computer storing them in yes-or-no switches needs log₂ 10 000 ≈ 13.29, so 14 switches. For any lock, switches ÷ digits is always about 3.32. Why? Prove the change of base rule logₐ x = (log_b x)/(log_b a), see why a can't be 1, use the natural-log form logₐ x = ln x / ln a, avoid the base-on-top slip, and use the rule to evaluate logs, solve equations and relate two bases. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Exponential and logarithmic functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Prove the change of base rule log_a x = (log_b x)/(log_b a) and use it to solve problems"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce

Builds on: Using the log laws; the power law. Next: Graphs of logarithmic functions.

#Year11Maths #MathsAdvanced #ChangeOfBase #HSCScience

## Open decisions

- **1. Bits for Year 11 (learning review).** "A bit is a yes or no switch" is the only computing idea, and it is defined at first use. If the reviewer finds it a distraction, the same lock works with "how many coin tosses' worth of outcomes" (2ⁿ outcomes), but the switch picture is clearer. **Closed (Revision 2):** keep (learning review).
- **2. The early-rounding point (root).** At 3 decimal places the rounded and full values both give 1.771, so the narration says rounding "can shift the later decimal places" and shows the 4th place. If root prefers a case where 3 d.p. changes, use log₇ 50 (2.010 full against 3.912/1.946 = 2.0103, also unchanged) or drop the point to an author note; no Year 11 example at hand changes at 3 d.p. with 3 d.p. inputs. **Closed (Revision 2, root ruling 4):** the point is author note (g) only; key note 5 is now the raise-back check.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from e05, e03 and e04; check that the frozen 3.32 makes students want the reason, that each proof row's reason is heard, and that "base to the basement" is tied to a check rather than memorised blind), then the Codex maths check and error check, then voicing and a build to grade A.
- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" above and `../checks/m-a11-e01-e08-learning-review-resolution.md`). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A. The narration says "the natural log of" wherever ln is read, so the voicer needs no respelling for ln.
