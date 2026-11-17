# Maths A11 T14a: Where do the Pythagorean identities come from, and how do they give one ratio from another? cos² θ + sin² θ = 1 from the circle, 1 + tan² θ = sec² θ and 1 + cot² θ = cosec² θ by dividing, finding a ratio with the quadrant choosing the sign, and a first simplification (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. This is the first of two videos split from the outline's t14 (see `../checks/root-decisions-maths-a11-t09-t16.md`, split 1). Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,176 characters by script (see "Narration length estimate"), 13 scene headings, about 480 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: seventy-first video of Year 11 Mathematics Advanced (2024), outline order 71 (first part), Trigonometric identities and equations. Pre-design pack: `../pre-design/maths-a11/math-a11-t14.md` (brief 243). Site lesson (read through the pack's quotations, read only): `trigonometric-identities-and-equations/lesson02.sa.html` (card 05, deriving the identities; card 07, sec θ = 5/4 acute gives tan θ = 3/4; card 08, (sec² θ − 1)/tan θ = tan θ; drill 5, sin² θ(1 + cot² θ) = 1; short answer 2, tan θ = −4/3 in the fourth quadrant gives cos θ = 3/5 and sin θ = −4/5; all with their numbers). Route entry: `math-a11-t14` in `../../programme/maths-a11-route-inputs-4.json`. Visual system: maths studio kit; a painted mixing-desk channel and a pair of studio speakers for the anchor; every circle, triangle, meter, readout and row coded.

Owner rules applied: as e08 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (music: a mixing desk's pan knob), Australian spelling, no em dashes, "zero point" decimals, conversational narration, angles always spoken with "degrees" or "radians", the reciprocal ratios spoken "secant", "cosecant" and "cotangent").

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Trigonometric identities and equations), quoted from `../../programme/maths-a11-route-inputs-4.json`:

- `cif79ffa41`: "Prove the Pythagorean identity cos^2 x + sin^2 x = 1, and the identities 1 + tan^2 x = sec^2 x and 1 + cot^2 x = cosec^2 x"
- `ci1ff2042e` (shared with t14b; here: solve problems and simplify expressions by substitution): "Apply trigonometric identities to solve problems, simplify expressions and prove further trigonometric identities using substitution and/or reduction to sin x and cos x"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c

**Boundary:** starts from t13's final frame exactly (t03's circle with the point (x, y), its drop triangle with sides x, y and r; "x² + y² = r²" with a grey chip "Pythagoras"; chips "x/r = cos θ", "y/r = sin θ", "divide every term by r²?", "Next: the Pythagorean identities", "?"). Recalls t03 (x² + y² = r²; cos θ = x/r, sin θ = y/r), t04 (quadrant signs), t12 (tan = sin/cos, the reciprocal identities and their exclusions) and w02 (algebraic fractions) in a phrase or grey chip each. Teaches: cos² θ + sin² θ = 1 by dividing the circle's Pythagoras by r², for every θ (`cif79ffa41`); 1 + tan² θ = sec² θ by dividing by cos² θ (cos θ ≠ 0) and 1 + cot² θ = cosec² θ by dividing by sin² θ (sin θ ≠ 0), each also Pythagoras in a rescaled triangle; finding one ratio from another, acute (site card 07) and with the quadrant choosing the sign (site short answer 2); simplifying one expression by substitution (site card 08) (`ci1ff2042e`, first part). Stops at the three identities, finding ratios and one simplification. Not taught: proving further identities and the proof layout (t14b); solving equations with these identities (t16).

## Decisions

- **Anchor: a mixing desk's pan knob (painted plates, live).** A pan knob moves a sound between two speakers. In one common design (the sine-cosine pan law), turning the knob through θ from 0° to 90° sets the left level to cos θ and the right level to sin θ; the total power, which sets how loud it sounds, is the sum of the squared levels, cos² θ + sin² θ, which stays at 1 so the sound does not get louder or quieter as it moves across. Music; the pack's anchor 1. The narration says "one common design" (other pan laws exist; author note). No Year 12 or a11 design uses a mixing desk or a pan knob (grep 17 Nov: none; Year 12 has headphones as a plate only).
- **Simulations (standard item 3).**
  1. **Pan knob** (scene 1; `ParameterSlider` dressed as the knob): the knob turns from 0° to 90°; two coded level meters over the speakers rise and fall (left violet, cos θ; right amber, sin θ); `LiveReadoutBoard`, 52 px: "θ", "left = cos θ", "right = sin θ", "left² + right² = 1.000" (teal, never changing).
  2. **Divide through** (`AlignedAlgebra`; scenes 2, 3): every term of x² + y² = r² gains "÷ r²" and collapses to (x/r)² + (y/r)² = 1, then each fraction morphs into cos θ and sin θ; the same move dividing by cos² θ and by sin² θ.
  3. **Rescaled triangles** (`StudioTriangle` scale modes, new; scene 3): t03's triangle scaled so the hypotenuse is 1 (sides cos θ, sin θ, 1), the adjacent side is 1 (sides 1, tan θ, sec θ) and the opposite side is 1 (cot θ, 1, cosec θ); a Pythagoras square on each confirms the identity.
  4. **Quadrant chooser** (scene 5): a ± chip lands on t04's quadrant badge for the fourth quadrant, which keeps "+" for sec and cos and "−" for sin.
- **Colour roles (fixed for this video, as t11 to t13).** The angle θ **blue**; ratio values **teal**; x and cos (the left meter) **violet**; y and sin (the right meter) **amber**; r ink; the squares of each ratio keep its colour; "≠ 0" conditions grey; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As e08 (current lines and readouts 52 px, strips 44 px, nothing below 26 px, all text above y = 950). Hand tags: "never moves", "÷ r²", "cos² θ = (cos θ)²", "every θ", "÷ cos² θ: cos θ ≠ 0", "÷ sin² θ: sin θ ≠ 0", "tan with sec", "cot with cosec", "same identity", "acute: +", "IV: x > 0", "quadrant picks", "check: 16 + 9 = 25".
- **Stage changes (standard item 2).** t13's frame, the pan knob and speakers (1); the circle dividing through (2); the three rescaled triangles (3); g01 board, sec θ = 5/4 (4); g01 board with the quadrant badge, tan θ = −4/3 (5); g01 board, a simplification (6); framed card (7); question cards (8 to 11); the graphing app for t14b (12); key notes (13).
- **Worked examples (g01 layout).** 4: site card 07: sec θ = 5/4, θ acute: tan θ = 3/4. 5: site short answer 2: tan θ = −4/3, 3π/2 < θ < 2π: sec θ = 5/3, cos θ = 3/5, sin θ = −4/5. 6: site card 08: (sec² θ − 1)/tan θ = tan θ. Crossed slips: "1 + tan² θ = cosec² θ" (3), "sin θ = ±4/5" (5), "cot θ = 12/5" (A1), "sin² θ sec² θ" (A2).
- **Memory aid.** Framed card: "Divide the circle's Pythagoras by r²: cos² θ + sin² θ = 1. Divide again by cos² θ or sin² θ." Second line: "Tan with sec, cot with cosec. The quadrant picks the sign."
- **Visual surprise.** The pan readout "left² + right² = 1.000" sits completely still while both meters swing; then dividing the circle's equation by r² turns it into the same "= 1".
- **Site notes (pack section 8).** The site derives cos² θ + sin² θ = 1 from the unit circle; this design divides t03's x² + y² = r² by r² (pack decision), so the radius-r definitions are kept. Site we-1 (sin⁴ θ − cos⁴ θ) and lesson10's proofs are t14b's. "csc" is written "cosec".
- **Plain meanings at first use.** cos² θ ("cos θ, all squared"; hand tag); identity (recalled from t12: true for every angle where both sides exist); "power" in the anchor ("how loud the speakers sound together").
- **Attempts (pack question 2 and site drill 5).** A1 (pack question 2): cosec θ = −13/5, 270° < θ < 360°: cot θ = −12/5; crossed "cot θ = 12/5". A2 (site drill 5, lesson02): simplify sin² θ(1 + cot² θ) = 1 (sin θ ≠ 0); crossed "sin² θ sec² θ" (the wrong partner). The pack's question 1 (a proof) is t14b's attempt 1.
- **Mistake scene:** none separate. 1 + tan² θ = cosec² θ (3 crossed); dropping the 1 (3, tag on each identity); keeping ± after the root (5 crossed, A1 crossed); dividing by cos² θ without cos θ ≠ 0 (3 tags); the wrong partner (A2 crossed).
- **Cause chain taught, in order:** (1) the squared levels add to 1 in the pan knob (1); (2) because x² + y² = r² for every point on a circle, and dividing by r² gives (x/r)² + (y/r)² = 1, so cos² θ + sin² θ = 1 for every θ (2); (3) dividing that by cos² θ (where cos θ ≠ 0) or sin² θ (where sin θ ≠ 0) gives the other two, each also Pythagoras in a rescaled triangle (3); (4) an identity with two ratios in it turns one known ratio into the other's square (4); (5) the square root gives ±, and the quadrant's signs of x and y pick one (5); (6) a known identity can replace part of an expression (6).
- **Entry knowledge (route):** t03 (x² + y² = r²; cos θ = x/r, sin θ = y/r); t12 (reciprocal identities, tan = sin/cos, cot = cos/sin, and their excluded angles); t04 (quadrant signs); w02 (algebraic fractions).
- **What later videos rely on.** t14b proves further identities with these three and the five from t12. t16 uses sin² θ = 1 − cos² θ and cos² θ = 1 − sin² θ to reduce mixed equations. Year 12 uses sin² x + cos² x = 1 in calculus (recalled there).
- **Handoff (to math-a11-t14b, "How do we prove further trig identities?").** Scene 12: a coded graphing-app screen (`ScreenApp`, unbranded) plotting y = tan x + cot x (teal) and y = sec x cosec x (violet, dashed) for −π < x < π, the two graphs lying exactly on top of each other; chips "same graph?", "is that a proof?", "Next: proving identities" and "?". This is t14b's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Pan law: L = cos θ, R = sin θ, 0° ≤ θ ≤ 90°; power ∝ L² + R² = 1. At 30°: 0.866 and 0.5, squares 0.75 and 0.25; at 45°: 0.7071 each, squares 0.5. Other pan laws (linear, −4.5 dB) are not mentioned on screen; "one common design" covers it.
  (b) Card 07: 1 + tan² θ = 25/16; tan² θ = 9/16; tan θ = 3/4 (acute). Triangle 3, 4, 5.
  (c) Short answer 2: sec² θ = 25/9; sec θ = 5/3 (fourth quadrant); cos θ = 3/5; sin θ = tan θ cos θ = −4/5; check 16/25 + 9/25 = 1.
  (d) Card 08: (sec² θ − 1)/tan θ = tan θ (cos θ ≠ 0, tan θ ≠ 0).
  (e) A1: 1 + cot² θ = 169/25; cot² θ = 144/25; cot θ = −12/5 (x > 0, y < 0). A2: sin² θ cosec² θ = 1 (sin θ ≠ 0).
  (f) Pronunciations: "cosine squared theta" for cos² θ; "five on four"; "twenty-five on sixteen"; "three pi over two radians"; "one hundred and sixty-nine on twenty-five".
  (g) The app's window −π < x < π omits the excluded points (multiples of π/2); both graphs are drawn with gaps there.

Main question: *Where do the Pythagorean identities come from, and how do they give one ratio from another? Why does a pan knob's sound stay equally loud as it moves across?*
Entry knowledge (t03, t04, t12, w02): the circle definitions and x² + y² = r²; quadrant signs; the reciprocal and quotient identities; algebraic fractions.
Stops after: the three Pythagorean identities proved; finding a ratio from another with the quadrant choosing the sign; one simplification. No proofs of further identities (t14b), no equations (t16).
Handoff: math-a11-t14b: "tan x + cot x and sec x cosec x make the same graph in an app. Is that a proof?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): θ blue; ratio values teal; x and cos violet; y and sin amber; r ink; conditions grey; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · TRIGONOMETRIC IDENTITIES AND EQUATIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: a pan knob that keeps the volume
> Here's a mixing desk's pan knob. It moves a sound between the left and right speakers. In one common design, turning the knob through an angle theta, from zero to ninety degrees, sets the left speaker's level to cosine theta and the right speaker's level to sine theta. How loud they sound together depends on the two levels squared and added. Watch that total as the knob turns. At zero degrees, one squared plus zero squared is one. At thirty degrees, zero point seven five plus zero point two five is **one**. At forty-five degrees, a half plus a half. It never **moves**, so the sound stays just as loud as it travels across. Why is cosine squared plus sine squared always one, and what else follows from it?

Visual: opens on t13's final frame exactly (the circle with (x, y) and sides x, y, r; "x² + y² = r²", chips "x/r = cos θ", "y/r = sin θ", "divide every term by r²?", "Next: the Pythagorean identities", "?"). On the first sentence the chips fade and the circle shrinks to a 260 px badge at the top right; stage change: the mixing-desk plate `ma11-mixing-desk-channel-v1.png` (700 px) at the centre-left, the speakers plate `ma11-studio-speakers-v1.png` (900 px) across the top; a coded knob ring on the pan knob with a blue angle arc "θ" from "L" (0°) to "R" (90°). Coded level meters on each speaker: left violet, right amber. `LiveReadoutBoard` at the right, 52 px: "θ = …°" (blue), "left = cos θ = …" (violet), "right = sin θ = …" (amber), "left² + right² = …" (teal). The knob pauses at 0° ("1.000 + 0.000 = 1.000"), at 30° on "one" ("0.750 + 0.250 = 1.000"), at 45° ("0.500 + 0.500 = 1.000"); on "moves" the knob sweeps 0° to 90° and back while the teal readout stays at 1.000, hand tag "never moves". Heading "The Pythagorean identities"; the question chip "Why is cos² θ + sin² θ = 1?" moves to the top right.

### 2. dividing the circle by r squared
> Here's why. Take the point x, y on a circle of radius r. By Pythagoras, x squared plus y squared equals r squared. Divide every term by r squared. That gives x over r, squared, plus y over r, squared, equals **one**. And x over r is cosine theta, and y over r is sine theta. So cosine squared theta plus sine squared theta equals one. Cosine squared theta just means cosine theta, all squared. There's a point on the circle for every angle, so this is true for every angle, with nothing **excluded**. That's the Pythagorean identity. It's Pythagoras, on the circle.

Visual: stage change: the circle (radius r, 600 px) at the left with the point (x, y) and its drop triangle (x violet, y amber, r ink); the desk shrinks to a 240 px badge at the top right with its teal "= 1.000". Rows at the right (`AlignedAlgebra`), 52 px: "x² + y² = r²"; on "Divide" each term gains "÷ r²", hand tag "÷ r²"; on "one" "(x/r)² + (y/r)² = 1"; the fractions morph into "cos θ" (violet) and "sin θ" (amber): "cos² θ + sin² θ = 1" (green frame); hand tag "cos² θ = (cos θ)²". On "excluded" the point sweeps once round the circle, the identity staying lit, hand tag "every θ". The desk badge's "= 1.000" pulses once.

### 3. two more by dividing again
> Two more come from dividing again. Divide every term by cosine squared theta, which we can only do where cosine theta isn't zero. Cosine squared over cosine squared is one. Sine squared over cosine squared is tangent squared. And one over cosine squared is secant squared. So one plus tangent squared theta equals secant squared **theta**. Divide by sine squared theta instead, where sine theta isn't zero, and you get one plus cotangent squared theta equals cosecant squared **theta**. In pictures, each identity is Pythagoras in one triangle, scaled so a different side is one. Notice the pairs: tangent goes with secant, and cotangent goes with cosecant. Writing one plus tangent squared equals cosecant squared is the **slip**.

Visual: clear change: the identity "cos² θ + sin² θ = 1" at the top (44 px); two working columns below, 52 px. Left: "÷ cos² θ" with grey "cos θ ≠ 0", hand tag "÷ cos² θ: cos θ ≠ 0"; terms "cos² θ/cos² θ + sin² θ/cos² θ = 1/cos² θ" collapse to "1 + tan² θ = sec² θ" on "theta" (green frame), grey chip "t12: tan = sin/cos, sec = 1/cos". Right, on "Divide by sine squared": "÷ sin² θ" with "sin θ ≠ 0", collapsing to "cot² θ + 1 = cosec² θ", rewritten "1 + cot² θ = cosec² θ" on "theta" (green frame). On "In pictures" three rescaled triangles draw in a row (`StudioTriangle` scale modes), each with a small square on each side: hypotenuse 1: sides "cos θ, sin θ, 1"; adjacent 1: "1, tan θ, sec θ"; opposite 1: "cot θ, 1, cosec θ"; each lights beside its identity. On "pairs" the pairs ring: "tan with sec", "cot with cosec" (hand tags). On "slip" a red slip "1 + tan² θ = cosec² θ" writes and is crossed, caption "tan goes with sec".

### 4. worked example: one ratio from another
> Now use them to find one ratio from another. If secant theta is five on four, and theta is acute, find tangent theta. Secant and tangent sit in the same identity. So one plus tangent squared theta equals five on four, squared, which is twenty-five on **sixteen**. Take away one, and tangent squared theta is nine on sixteen. So tangent theta is plus or minus three on four. But theta is acute, so tangent is positive, and tangent theta is three on **four**. Check it in a triangle: hypotenuse five, adjacent four, so the opposite side is three.

Visual: clear change to the full-width g01 board (`WorkingBoard`). Task strip, 44 px: "If sec θ = 5/4 and θ is acute, find tan θ." Equation strip: "1 + tan² θ = sec² θ", hand tag "same identity". Givens card: "sec θ = 5/4" (violet), "θ acute" (blue). Rows, current 52 px, earlier 32 px dimmed: "1 + tan² θ = (5/4)²"; on "sixteen" "= 25/16"; "tan² θ = 25/16 − 1 = 9/16"; "tan θ = ±3/4"; on "four" "θ acute, so tan θ = 3/4" (green frame), hand tag "acute: +". On "Check it in a triangle" a small coded triangle at the right: hypotenuse 5, adjacent 4, opposite 3 (amber), "tan θ = 3/4 ✓".

### 5. worked example: the quadrant picks the sign
> When the angle isn't acute, the quadrant does the choosing. If tangent theta is minus four on three, and theta is between three pi over two and two pi radians, find sine theta and cosine theta. First, secant squared theta is one plus sixteen on nine, which is twenty-five on **nine**. So secant theta is plus or minus five on three. Theta is in the fourth quadrant, where x is positive, so cosine and secant are positive. Secant theta is five on three, and cosine theta is three on **five**. Then sine theta is tangent theta times cosine theta, minus four on three, times three on five, which is minus four on **five**. Check: sixteen on twenty-five plus nine on twenty-five is one. Leaving plus or minus in the answer is the **slip**. The quadrant has already picked.

Visual: the board clears row by row (stage continues); t04's quadrant badge (a small circle with I to IV and the signs of x and y) at the right. Task strip: "If tan θ = −4/3 and 3π/2 < θ < 2π, find sin θ and cos θ." Givens card: "tan θ = −4/3" (teal), "3π/2 < θ < 2π: quadrant IV" (blue), grey chip "t04". Rows, 52 px: "sec² θ = 1 + tan² θ = 1 + 16/9"; on "nine" "= 25/9"; "sec θ = ±5/3"; the badge's quadrant IV lights with "x > 0, y < 0", hand tag "IV: x > 0"; the ± chip lands on the badge and keeps "+" (quadrant chooser); "sec θ = 5/3", on "five" "cos θ = 3/5" (green frame); "sin θ = tan θ cos θ = (−4/3)(3/5)"; on "five" (last) "sin θ = −4/5" (green frame), hand tag "quadrant picks". Grey row "check: 16/25 + 9/25 = 1 ✓". On "slip" a red slip "sin θ = ±4/5" writes and is crossed, caption "IV: sin θ < 0".

### 6. a first simplification
> The identities also simplify expressions. Simplify secant squared theta minus one, all over tangent theta. From the second identity, secant squared theta minus one is tangent squared theta. So we have tangent squared theta over tangent theta, which is just tangent **theta**, wherever the original expression exists.

Visual: the board clears (stage continues). Task strip: "Simplify (sec² θ − 1)/tan θ." Rows, 52 px: "sec² θ − 1 = tan² θ" (from "1 + tan² θ = sec² θ", the 1 sliding across with a grey "− 1" tag); "(sec² θ − 1)/tan θ = tan² θ/tan θ"; on "theta" "= tan θ" (green frame), grey condition "where defined: cos θ ≠ 0, tan θ ≠ 0".

### 7. memory aid
> Here's the summary. Divide the circle's Pythagoras by r squared, and cosine squared plus sine squared is one. Divide that by cosine squared to pair tangent with secant, or by sine squared to pair cotangent with **cosecant**. And let the quadrant pick the sign.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the three rescaled triangles small, and the pan readout "= 1.000". Main line, hand font 56 px: "Divide the circle's Pythagoras by r²: cos² θ + sin² θ = 1. Divide again by cos² θ or sin² θ." On "cosecant" the key line, 40 px: "Tan with sec, cot with cosec. The quadrant picks the sign." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Given that cosecant theta is minus thirteen on five, and theta is between two hundred and seventy and three hundred and sixty degrees, find the exact value of cotangent theta. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Given cosec θ = −13/5 and 270° < θ < 360°, find the exact value of cot θ." The full question stays on screen. Picture slot: t04's quadrant badge, unlit. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> One plus cotangent squared theta equals one hundred and sixty-nine on twenty-five, so cotangent squared theta is one hundred and forty-four on twenty-**five**, and cotangent theta is plus or minus twelve on five. In the fourth quadrant, x is positive and y is negative, so cotangent, x over y, is negative. It's minus twelve on **five**. Keeping the plus sign is the slip.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "1 + cot² θ = cosec² θ = 169/25"; on "five" "cot² θ = 144/25, cot θ = ±12/5"; the badge's quadrant IV lights "x > 0, y < 0: x/y < 0"; on "five" (last) "cot θ = −12/5" (green frame). On "Keeping" a red slip "cot θ = 12/5" writes and is crossed, caption "IV: cot θ < 0". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Simplify sine squared theta, times one plus cotangent squared theta. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Simplify sin² θ(1 + cot² θ)." Picture slot: empty. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> One plus cotangent squared theta is cosecant squared theta, which is one over sine squared **theta**. So the expression is sine squared theta over sine squared theta, which is **one**, wherever sine theta isn't zero. Swapping in secant squared instead of cosecant squared is the slip.

Visual: the card shrinks to the top. Rows, 44 px: "1 + cot² θ = cosec² θ"; on "theta" "= 1/sin² θ"; on "one" "sin² θ × 1/sin² θ = 1" (green frame), grey "sin θ ≠ 0". On "Swapping" a red slip "sin² θ sec² θ" writes and is crossed, caption "cot goes with cosec". Hold about 1 s.

### 12. handoff
> These identities can do more than find values. They can prove that two expressions are equal for every angle. Here's a graphing app, plotting tangent x plus cotangent x, and secant x times cosecant x. The two graphs land exactly on top of each other. Is that a proof? And if it isn't, how do we prove it? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to a coded graphing-app screen (`ScreenApp`, 1,300 × 760 px, unbranded, an input bar showing the two entries): "y = tan x + cot x" (teal) draws first for −π < x < π, then "y = sec x cosec x" (violet, dashed) draws over it and lands exactly on it, gaps at the multiples of π/2. Chips "same graph?" and "is that a proof?". On "next" chips "Next: proving identities" and "?". Hold about 2 s. This is t14b's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- cos² θ + sin² θ = 1 for every θ (x² + y² = r², divided by r²).
- 1 + tan² θ = sec² θ (divide by cos² θ; cos θ ≠ 0).
- 1 + cot² θ = cosec² θ (divide by sin² θ; sin θ ≠ 0).
- One ratio from another: use the identity with both; the quadrant picks the sign.
- Rearranged: sec² θ − 1 = tan² θ, cosec² θ − 1 = cot² θ, sin² θ = 1 − cos² θ.

Memory aid (framed card, right side, as in scene 7): *Divide the circle's Pythagoras by r². Tan with sec, cot with cosec. The quadrant picks the sign.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and t14b's opening frame.

## Teaching checks

- **Does it explain causes?** Why the pan total stays at 1: it is cos² θ + sin² θ (1). Why that is 1: the circle's Pythagoras divided by r² (2). Why the other two hold and where: divide by cos² θ or sin² θ, which must not be 0 (3). Why an identity finds a ratio: it links two ratios (4). Why the quadrant decides: the square root gives ±, and x and y have known signs there (5).
- **Misconceptions addressed:** tan paired with cosec (3 crossed); a dropped 1 (3 tags); ± kept (5 crossed, A1 crossed); division without its condition (3); the wrong partner (A2 crossed).
- **Visual standard, item by item:** 1 the desk and speakers inside the first 15 s (t13's frame, then the plates), returning as a badge in 2; 2 a new stage every 30 to 60 s; 3 the pan knob with live meters and the still total, the divide-through morph, the rescaled triangles; 4 fixed roles (cos violet, sin amber, as t11 to t13); 5 large type; 6 hand tags; 7 g01 boards in 4 to 6; 8 framed card and five bullets; 9 the total that never moves.
- **One idea at a time:** the pan total (1), the first identity (2), the other two (3), a ratio from a ratio (4), the quadrant's sign (5), one simplification (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 27 s and 21 s.
- **Avoided double teaching:** t03's x² + y² = r², t04's signs and t12's identities are recalled in a phrase or grey chip.
- **Syllabus coverage:** `cif79ffa41` (2, 3; key notes 1 to 3); `ci1ff2042e` (4 to 6, A1, A2; key notes 4, 5), with proving further identities in t14b.
- **Out of scope by design:** proofs of further identities (t14b); equations (t16).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 2, original, HSC style, 2 marks suggested, not an official marking scheme).** "Given cosec θ = −13/5 and 270° < θ < 360°, find the exact value of cot θ."
Model answer: 1 + cot² θ = cosec² θ = 169/25, so cot² θ = 144/25 and cot θ = ±12/5. In the fourth quadrant x > 0 and y < 0, so cot θ = x/y < 0: cot θ = −12/5. Classic mistake (crossed): "cot θ = 12/5".

**Attempt 2 (scene 10; site lesson02 drill 5, 1 mark suggested).** "Simplify sin² θ(1 + cot² θ)."
Model answer: 1 + cot² θ = cosec² θ = 1/sin² θ, so sin² θ(1 + cot² θ) = 1 (sin θ ≠ 0). Classic mistake (crossed): "sin² θ sec² θ".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Pan knob | 0°: 1 + 0 = 1; 30°: 0.75 + 0.25 = 1; 45°: 0.5 + 0.5 = 1 | 1 |
| Identities | cos² θ + sin² θ = 1; 1 + tan² θ = sec² θ; 1 + cot² θ = cosec² θ | 2, 3 |
| Card 07 | sec θ = 5/4: tan² θ = 9/16, tan θ = 3/4; triangle 3, 4, 5 | 4 |
| Short answer 2 | tan θ = −4/3, IV: sec² θ = 25/9, sec θ = 5/3, cos θ = 3/5, sin θ = −4/5 | 5 |
| Card 08 | (sec² θ − 1)/tan θ = tan θ | 6 |
| A1 | cot² θ = 144/25; cot θ = −12/5 | 8, 9 |
| A2 | 1 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (17 Nov 2026, scratchpad `t/verify.py`); Codex to re-check.

- cos² 30° = 0.75, sin² 30° = 0.25; cos² 45° = sin² 45° = 0.5.
- 1 + tan² θ − sec² θ and 1 + cot² θ − cosec² θ simplify to 0.
- 1 + (3/4)² = 25/16; sec θ = 5/4 ⇒ tan θ = 3/4 (acute).
- tan θ = −4/3, 3π/2 < θ < 2π: sec θ = 5/3, cos θ = 3/5, sin θ = −4/5.
- (sec² θ − 1)/tan θ = tan θ.
- cosec θ = −13/5, 270° < θ < 360°: cot θ = −12/5 (numerical check with θ = 360° − 22.62° = 337.38°).
- sin² θ(1 + cot² θ) = 1.

## Memory aid check

- **"Divide the circle's Pythagoras by r²: cos² θ + sin² θ = 1. Divide again by cos² θ or sin² θ."** Original. Meaning, as said in scene 7: the three identities come from x² + y² = r² by dividing, first by r², then by cos² θ or sin² θ. Assumptions checked: r > 0, so dividing by r² is always allowed; dividing by cos² θ needs cos θ ≠ 0, by sin² θ needs sin θ ≠ 0 (said in scene 3). It helps a new case: a student who forgets 1 + cot² θ = cosec² θ can rebuild it in one line.
- **"Tan with sec, cot with cosec. The quadrant picks the sign."** The pairing rule and the sign rule; both shown before the card.
- **Considered, not used:** "co with co" for the third identity (it reads well, cot with cosec, but makes the second identity sound wrong, since tan pairs with sec, which has no "co" either).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `t/count.py`): 5,176 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 20 s of settling (the knob sweep, the divide-through morph, the triangles) and the 45 s notes scene: about 480 s. Characters per scene (1 to 13): 704, 557, 719, 536, 752, 312, 256, 208, 364, 100, 276, 317, 75. Speech before the notes is about 383 s, under the 570 s cap. Feedback speech: about 27 s and 21 s.

Reserve trims if the voiced take runs long: scene 4's triangle check sentence (keep the small triangle, silent); scene 5's "Check:" sentence (keep the grey row).

## Scene list and build ids

Lesson key `m-a11t14a` (route math-a11-t14, part a). Explainer folder `src/explainer/lessons/math-a11-t14a`; build inputs in `docs/production/claude-pm/lessons/math-a11-t14a/` (at voicing).

In order (13 scene headings): hook-pan-knob, divide-by-r-squared, two-more-identities, example-sec-to-tan, example-quadrant-sign, first-simplification, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 50 s | 1 | The pan knob and speakers, the still total |
| 50 to 100 s | 2 | The circle divided by r² |
| 100 to 160 s | 3 | Two more identities; rescaled triangles |
| 160 to 205 s | 4 | g01 board: sec θ = 5/4 |
| 205 to 265 s | 5 | g01 board with the quadrant badge |
| 265 to 285 s | 6 | g01 board: a simplification |
| 285 to 305 s | 7 | Framed memory card |
| 305 to 390 s | 8 to 11 | Question cards and countdowns, then feedback |
| 390 to 418 s | 12 | The graphing app (t14b's frame) |
| 418 to 463 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t13's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change; 3 to 4 clear change to the board; 4 to 5 and 5 to 6 board row clears; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-t14a-learning-review.md`, `science_check` = `checks/m-a11-t14a-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets`, file list): no mixing desk, pan knob or studio speaker plate exists (`ma12-headphones-v1.png` is headphones, not two speakers).

Need (painted, new; see the Codex asset brief): `ma11-mixing-desk-channel-v1.png`, `ma11-studio-speakers-v1.png`.

Coded: the knob ring, meters and readouts, the circle, algebra, rescaled triangles, quadrant badge, board rows, the app screen and graphs, countdown, key notes.

### Studio kit use and additions

Uses: `ParameterSlider`, `LiveReadoutBoard`, `AlignedAlgebra`, `StudioTriangle` (new, kit needs: scale modes), `StudioCirclePoint` (new, kit needs), `WorkingBoard`, `TaskStrip`, `GivensCard`, `ScreenApp` and `AppGraph`, surd formatter (kit needs), `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Level meters on a plate** (small): two coded vertical bar meters anchored to the speaker cones (sidecar), heights cos θ and sin θ, driven by the knob's θ.
2. **Quadrant badge with a ± chooser** (small): t04's badge; a "±" chip lands on a quadrant and resolves to "+" or "−" for the named ratio from the signs of x and y there.

## Codex asset brief (Maths A11 T14a, a mixing-desk channel with a pan knob, and a pair of studio speakers)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-t14a.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the t14a build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, scale markings, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-mixing-desk-channel-v1.png` (1200 × 1400 px): a small section of a dark grey audio mixing desk seen from directly above: one channel's large round pan knob near the top (unmarked, its pointer line visible), two smaller knobs and a vertical fader slot below it. The pan knob's face is clear for a coded ring.
2. `ma11-studio-speakers-v1.png` (1800 × 700 px): a matching pair of small black studio monitor speakers, front-on, side by side with a gap between them, each with one woofer cone and one small tweeter. No brand marks.

Sidecar JSON: desk (`ma11-mixing-desk-channel-v1.json`): the pan knob's centre and radius. Speakers: each woofer's centre and radius. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-t14a-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quotes match the route-inputs JSON exactly, and that `ci1ff2042e` is marked as shared with t14b.
3. Confirm cos² θ + sin² θ = 1 is derived from x² + y² = r² divided by r² (not from the unit circle alone), and that each division states its condition.
4. Confirm every final value after a square root has a single sign chosen by the quadrant.
5. Confirm no proof of a further identity and no equation is worked.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on t13's final frame.

## YouTube metadata (draft)

Title: The Pythagorean Identities: Where They Come From and How to Use Them | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson02.sa.html

A mixing desk's pan knob sends cos θ to the left speaker and sin θ to the right, and the total loudness never changes, because cos² θ + sin² θ = 1. Prove it by dividing the circle's x² + y² = r² by r², then divide again to get 1 + tan² θ = sec² θ and 1 + cot² θ = cosec² θ. Use them to find one ratio from another, letting the quadrant pick the sign, and simplify an expression. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Trigonometric identities and equations.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Prove the Pythagorean identity cos^2 x + sin^2 x = 1, and the identities 1 + tan^2 x = sec^2 x and 1 + cot^2 x = cosec^2 x"
"Apply trigonometric identities to solve problems, simplify expressions and prove further trigonometric identities using substitution and/or reduction to sin x and cos x"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c

Builds on: Complementary angle identities; sec, cosec and cot for any angle. Next: Proving trig identities.

#Year11Maths #MathsAdvanced #PythagoreanIdentities #HSCScience

## Open decisions

- **1. The split (root).** t14 is split into t14a (this video) and t14b (proving further identities); see the decisions file. Root may rename the ids (for example t14 and t14-2) to fit the course outline's numbering.
- **2. The pan law (root).** "One common design" is said aloud; the sine-cosine law is a real, widely used pan law, but not the only one. If root prefers no real-world claim, the anchor can be the pack's 1 km walk in any direction (east part and north part, squared and added), with a new plate.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from t03, t04, t12 and w02; check that the pan total makes "= 1" feel surprising before it is explained, that the division by r² is clearly the reason, that the rescaled triangles help rather than crowd scene 3, and that the quadrant step is caused, not a rule), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
