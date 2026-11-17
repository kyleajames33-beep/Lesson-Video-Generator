# Maths A11 T16: How do trig equations that reduce to quadratics get solved? Call it s, solve the quadratic, reject a root outside −1 to 1 with a reason, solve each survivor, reduce mixed equations with sin² θ = 1 − cos² θ, and factorise rather than divide (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,346 characters by script (see "Narration length estimate"), 13 scene headings, about 493 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: seventy-third video of Year 11 Mathematics Advanced (2024), outline order 73, Trigonometric identities and equations; the last video of the trigonometry strand. Pre-design pack: `../pre-design/maths-a11/math-a11-t16.md` (brief 243). Site lessons (read through the pack's quotations, read only): `trigonometric-identities-and-equations/lesson12.sa.html` (`we-1`, 2 sin² θ − sin θ − 1 = 0; `we-2`, cos² θ − cos θ − 2 = 0 with a rejected root; `we-3`, 2 sin² θ + 3 cos θ = 3 with 0° and 360°; card 02; quick-fire item 1, s² − s = 0; all with their numbers) and `lesson10.sa.html` (short answer, 2 cos² x + sin x = 1 on [0, 2π]). Route entry: `math-a11-t16` in `../../programme/maths-a11-route-inputs-4.json`. Visual system: maths studio kit; a reused painted phone with a coded battery reading for the anchor; every chip, number line, graph and row coded; the final frame is coded for g01.

Owner rules applied: as e08 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (phones: an impossible battery reading), Australian spelling, no em dashes, "zero point" decimals, conversational narration, angles always spoken with "degrees" or "radians", "sine", "cosine" and "tangent" spoken in full).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Trigonometric identities and equations), quoted from `../../programme/maths-a11-route-inputs-4.json`:

- `ci24474f01`: "Solve problems involving trigonometric equations, including those that reduce to quadratic equations, on a restricted domain"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c

**Boundary:** starts from t15b's final frame exactly ("2 sin² θ − sin θ − 1 = 0" at 60 px with each "sin θ" glowing amber in turn, the grey chip "w04: 2s² − s − 1 = 0?", the chip "call it s?", "Next: equations that reduce to quadratics", "?"). Recalls w04 (solving quadratics by factorising), t10 (the ranges −1 ≤ y ≤ 1 for sin and cos; tan takes every real value), t14a (sin² θ + cos² θ = 1 and its rearrangements), t15a (solving sin θ = k, cos θ = k, tan θ = k on a domain) and t15a's warning about dividing (sin x = cos x) in a phrase or grey chip each. Teaches: substituting s for one ratio; solving the quadratic; rejecting a root outside −1 ≤ s ≤ 1 for sin or cos with a stated reason, keeping every root for tan; solving each surviving root as in t15a (site `we-1`, `we-2`); reducing a mixed equation to one ratio, converting towards the ratio that appears unsquared (site `we-3`; lesson10's radian short answer); factorising rather than dividing (sin² θ = sin θ). Degrees and radians. Stops at quadratics in one ratio. Not taught: graph transformations (g01 onward); equations needing double-angle results (not Advanced).

## Decisions

- **Anchor: an impossible phone battery reading (painted plate, live).** A phone whose battery icon reads 140 %: nobody believes it, because a battery reading must lie between 0 and 100 %. A root s = 2 for cos θ is the same kind of impossible reading: cos θ must lie between −1 and 1, so the root is rejected with that reason. Phones; the pack's anchor 1 (an expired voucher) re-set on a phone, because a range is the reason for rejection here, and a battery has a visible range; the pack's anchor 2 (calling sin θ by a nickname) is used in the narration's "call sine theta s". The phone returns in scene 3 when c = 2 is rejected. No Year 12 or a11 design uses a battery reading as an anchor (grep 17 Nov: "battery" appears only in chemistry and physics designs).
- **Simulations (standard item 3).**
  1. **s chips** (`ExpressionSlot`; scenes 2 to 6): each sin θ (or cos θ) in the equation is replaced by an amber "s" chip (or "c") that slides in over it; the quadratic factorises on the board; at the end the chips turn back into sin θ, one root at a time.
  2. **Range band** (`IntervalPicture`; scenes 2, 3, 5): a number line from −3 to 3 with the band −1 ≤ s ≤ 1 shaded; each root drops onto the line as a dot; a root inside the band turns green ("survives"), a root outside turns red and is crossed with its reason "cos θ ≤ 1"; for tan the band disappears ("tan: every real value").
  3. **Root to level line** (`StudioLevelLine`; scenes 2 to 5): each surviving root becomes a dashed amber level line on the sine or cosine graph over the domain, its crossings ringing and counted; the final list of angles is read from the picture too.
- **Colour roles (fixed for this video, as t15a and t15b).** Angles and solutions **blue**; the substituted letter (s or c) and its roots **amber** (as each level line y = k); the range band pale **teal** (outputs of sin and cos); the sine curve teal, cosine curve violet, tan curve amber; rejected roots red, crossed; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As e08 (current lines and readouts 52 px, strips 44 px, nothing below 26 px, all text above y = 950). Hand tags: "impossible reading", "call it s", "a quadratic you know", "both in −1 to 1", "values of sin, not angles", "each root: a full equation", "reject, with a reason", "cos θ ≤ 1", "one ratio only", "go towards the unsquared one", "both ends count", "same quadratic", "don't divide: factorise", "lost: sin θ = 0", "tan: every value".
- **Stage changes (standard item 2).** t15b's frame, then the phone (1); the board with chips, band and graph for `we-1` (2); the rejection, with the phone returning (3); the mixed equation (4); the radian example (5); factorise, don't divide (6); framed card (7); question cards (8 to 11); the parabola frame for g01 (12); key notes (13).
- **Worked examples (g01 layout).** 2: lesson12 `we-1`: 2 sin² θ − sin θ − 1 = 0, 0° ≤ θ ≤ 360°: 90°, 210°, 330°. 3: lesson12 `we-2`: cos² θ − cos θ − 2 = 0: c = 2 rejected; θ = 180°. 4: lesson12 `we-3`: 2 sin² θ + 3 cos θ = 3: θ = 0°, 60°, 300°, 360°. 5: lesson10 short answer: 2 cos² x + sin x = 1, 0 ≤ x ≤ 2π: π/2, 7π/6, 11π/6. 6: sin² θ = sin θ, 0° ≤ θ ≤ 360°: 0°, 90°, 180°, 360° (lesson12 quick-fire 1's factorising, solved in full; original domain). Crossed slips: "s = −½, 1" as the final answer (2), dropping c = 2 without a reason (3, shown as a bare cross with no reason, crossed), "θ = 60°, 300° only" (4, the ends missed), "sin θ = 1 only" (6, from dividing), "s = ½, −1" (A1), "tan x = √3 rejected" (A2).
- **Memory aid.** Framed card: "Call it s, solve the quadratic, keep roots between −1 and 1 (tan keeps all), then solve each one for θ." Second line: "Reject with a reason. Factorise, don't divide."
- **Visual surprise.** The phone's 140 % and the root c = 2 land on the same kind of picture: a reading outside its band, crossed with a reason; and in scene 6 dividing by sin θ makes three of the four green dots on the graph vanish at once.
- **Site notes (pack section 8 and `../site-corrections-maths-a11.md` section 7).** lesson12's marking claims ("stopping at the roots earns none of those marks", "usually worth a mark") are not used; the narration says why stopping at s is incomplete (s is a value of sine, not an angle). The "Module 5 · L13 of 15" header is metadata only. Every solution set was checked by a numerical scan (the pack notes that SymPy's solveset missed some degree-scaled roots).
- **Plain meanings at first use.** Substitute ("call sine theta s for a while: it's still sine theta, just a shorter name"); root (recalled from w04: "a solution of the quadratic"); reject ("throw out, with the reason").
- **Attempts (pack questions).** A1: 2 cos² θ − sin θ − 1 = 0, 0° ≤ θ ≤ 360°: 30°, 150°, 270°; crossed "s = ½, −1" (stopping at the roots). A2: tan² x − (1 + √3) tan x + √3 = 0, 0 ≤ x ≤ 2π: π/4, π/3, 5π/4, 4π/3; crossed "tan x = √3 rejected (√3 > 1)".
- **Mistake scene:** none separate. Stopping at the values of s (2 crossed, A1 crossed); keeping cos θ = 2 or dropping it without a reason (3 crossed); substituting before reducing a mixed equation to one ratio (4, "one ratio only"); missing 0° and 360° in a closed domain (4 crossed); dividing and losing sin θ = 0 (6 crossed); rejecting a tan root (A2 crossed).
- **Cause chain taught, in order:** (1) a ratio that appears squared and plain makes a quadratic in that ratio, so naming it s turns a new problem into a known one (1, 2); (2) a root is a value of the ratio, not an angle, so each root is a whole t15a equation (2); (3) sin and cos only take values from −1 to 1, so a root outside that range gives no angles and is rejected with that reason; tan takes every value, so its roots all survive (3, A2); (4) a quadratic needs one ratio, so a mixed equation is converted with sin² θ = 1 − cos² θ towards the ratio that appears unsquared (it cannot be converted without a square root) (4, 5); (5) dividing by sin θ assumes sin θ ≠ 0 and loses those angles; factorising keeps them (6).
- **Entry knowledge (route):** t15a and t15b (solving sin θ = k, cos θ = k and tan θ = k on a restricted domain); t14a (sin² θ + cos² θ = 1 and its rearrangements); w04 (solving quadratics by factorising and by the formula); t10 (the ranges of sin and cos are −1 ≤ y ≤ 1; tan takes every real value).
- **What Year 12 relies on.** With t15a and t15b, this completes `ci24474f01` and the "trig equations" entry knowledge that Year 12's trigonometric and calculus videos assume (Year 12 t02, t03 and d05 solve single-ratio equations; reduced quadratics recur in Year 12 calculus stationary-point work, recalled there).
- **Handoff (to math-a11-g01, "Which way does replacing x by x − a move a graph?"; the next video in the course outline, order 74).** Scene 12: a coded frame, no plate (no g01 design exists, so g01 stays free to choose its anchor, as e08 left t01). At the left, the graph of y = x² (ink) on square axes, x from −4 to 6, with its vertex ringed at (0, 0). At the right, "y = x²" and below it "y = (x − 3)²" (52 px), the "x" in the first and the "x − 3" in the second in matching blue boxes, hand tag "replace x by x − 3". A grey ghost arrow pointing left with "minus means left?" and a chip "x → x − 3: left or right?"; chips "Next: graph transformations" and "?". The new graph is not drawn and no direction is stated. This is g01's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) `we-1`: (2s + 1)(s − 1) = 0; sin θ = −½: 210°, 330°; sin θ = 1: 90°.
  (b) `we-2`: (c − 2)(c + 1) = 0; c = 2 rejected; cos θ = −1: 180°.
  (c) `we-3`: 2(1 − cos² θ) + 3 cos θ = 3 → 2 cos² θ − 3 cos θ + 1 = 0 → (2c − 1)(c − 1) = 0; cos θ = ½: 60°, 300°; cos θ = 1: 0°, 360°.
  (d) lesson10: 2(1 − sin² x) + sin x = 1 → 2 sin² x − sin x − 1 = 0; sin x = 1: π/2; sin x = −½: 7π/6, 11π/6.
  (e) sin² θ = sin θ: sin θ(sin θ − 1) = 0: sin θ = 0: 0°, 180°, 360°; sin θ = 1: 90°.
  (f) A1: 2(1 − sin² θ) − sin θ − 1 = 0 → 2 sin² θ + sin θ − 1 = 0 → (2s − 1)(s + 1) = 0: 30°, 150°, 270°. A2: (t − 1)(t − √3) = 0: π/4, 5π/4, π/3, 4π/3.
  (g) Why towards the unsquared ratio: replacing cos θ (unsquared) with ±√(1 − sin² θ) would bring in a square root and a ± sign; replacing sin² θ with 1 − cos² θ does not.
  (h) Battery: the reading 140 % is a made-up glitch for the picture; no claim about phones is made.
  (i) Pronunciations: "two sine squared theta"; "tangent squared x, minus, in brackets, one plus root three, times tangent x, plus root three"; "seven pi over six radians"; "a hundred and forty per cent".

Main question: *How do trig equations that reduce to quadratics get solved? What do we do with a root like cos θ = 2?*
Entry knowledge (t10, t14a, t15a, t15b, w04): the ranges of sin, cos and tan; the Pythagorean identity; solving single-ratio equations on a domain; solving quadratics.
Stops after: quadratics in one ratio, with rejection and reasons, mixed equations reduced to one ratio, and factorising instead of dividing, in degrees and radians. No graph transformations.
Handoff: math-a11-g01: "y = x² becomes y = (x − 3)². The minus sign suggests left. Which way does replacing x by x − a really move a graph?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): angles and solutions blue; s, c and their roots amber; range band pale teal; sine curve teal; cosine curve violet; tan curve amber; rejected roots red; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · TRIGONOMETRIC IDENTITIES AND EQUATIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: a quadratic in disguise
> Here's an equation with sine theta in it twice: two sine squared theta, minus sine theta, minus one, equals zero. Call sine theta s for a while. It's still sine theta, just a shorter name. Then it's two s squared, minus s, minus one, equals zero, a quadratic you already know how to solve. But there's a catch. Imagine a phone that says its battery is at a hundred and forty per **cent**. You'd reject that reading straight away, because a battery reading has to be between zero and a hundred. Sine and cosine have a range too, from minus one to one. So how do trig equations that reduce to quadratics get **solved**?

Visual: opens on t15b's final frame exactly ("2 sin² θ − sin θ − 1 = 0" with each "sin θ" glowing amber in turn, the grey chip "w04: 2s² − s − 1 = 0?", "call it s?", "Next: equations that reduce to quadratics", "?"). On the first sentence the "Next" chips fade. On "Call sine theta s" each "sin θ" is covered by an amber "s" chip sliding in (`ExpressionSlot`), the equation re-reading "2s² − s − 1 = 0", hand tags "call it s" and "a quadratic you know". On "cent" stage change: the phone plate `ma12-phone-v1.png` (600 px) at the left with a coded battery icon reading "140 %" on its screen; a coded number line under it from 0 % to 100 % (shaded band) with the 140 % dot outside, red, crossed, hand tag "impossible reading". On "minus one to one" a second line at the right, "−1 ≤ sin θ ≤ 1" with its teal band. On "solved" heading "Trig equations that reduce to quadratics"; the question chip "What about a root like cos θ = 2?" moves to the top right.

### 2. worked example: call it s
> Solve two sine squared theta minus sine theta minus one equals zero, for theta from zero to three hundred and sixty degrees. Let s equal sine theta, so two s squared minus s minus one equals zero. It factorises as two s plus one, times s minus one, so s is minus a half, or **one**. Both are between minus one and one, so both survive. Now each one is a whole equation, like last time. Sine theta equals minus a half: the related angle is thirty degrees, and sine is negative in the third and fourth quadrants, so theta is two hundred and ten or three hundred and thirty **degrees**. Sine theta equals one at the top of the circle, ninety degrees, just once. That's three solutions **altogether**. Stopping at s equals minus a half and one is the slip. Those are values of sine, not angles.

Visual: stage change: g01 board at the left (1,000 px); at the right, the range band number line at the top (`IntervalPicture`, −3 to 3, band −1 to 1) and y = sin θ (teal, 0° to 360°) below it; the phone shrinks to a 200 px badge at the top right with its crossed 140 %. Task strip, 44 px: "Solve 2 sin² θ − sin θ − 1 = 0 for 0° ≤ θ ≤ 360°." Rows, current 52 px, earlier 32 px dimmed: "s = sin θ: 2s² − s − 1 = 0" (s amber); "(2s + 1)(s − 1) = 0"; on "one" "s = −½ or s = 1"; the two roots drop onto the number line inside the band and turn green, hand tag "both in −1 to 1". On "a whole equation" hand tag "each root: a full equation", grey chip "t15a". Rows: "sin θ = −½: α = 30°, quadrants III and IV"; on "degrees" "θ = 210°, 330°", the level line y = −½ ringing two crossings; "sin θ = 1: θ = 90°", the level line y = 1 touching once at the peak. On "altogether" "θ = 90°, 210°, 330°" (green frame), counter "solutions: 3". On "Stopping" a red slip "answer: s = −½, 1" writes and is crossed, caption "values of sin, not angles", hand tag "values of sin, not angles".

### 3. a root to reject
> Now one that needs a rejection. Solve cosine squared theta minus cosine theta minus two equals zero, from zero to three hundred and sixty degrees. Let c equal cosine theta. c squared minus c minus two factorises as c minus two, times c plus one, so c is two, or minus **one**. But cosine can never be bigger than one, so cosine theta equals two has no solutions. Reject it, and say **why**. That's the hundred and forty per cent battery. Cosine theta equals minus one at a hundred and eighty degrees only, so there's just one **solution**.

Visual: the board clears row by row (stage continues); the graph switches to y = cos θ (violet). Task strip: "Solve cos² θ − cos θ − 2 = 0 for 0° ≤ θ ≤ 360°." Rows, 52 px: "c = cos θ: c² − c − 2 = 0"; "(c − 2)(c + 1) = 0"; on "one" "c = 2 or c = −1"; the roots drop onto the number line: −1 at the band's edge (green), 2 outside (red). On "why" the 2 is crossed with its reason "cos θ ≤ 1: no solutions" (row "c = 2: rejected, since −1 ≤ cos θ ≤ 1"), hand tags "reject, with a reason" and "cos θ ≤ 1"; a red slip beside it "c = 2 ✗" (a cross with no reason) is itself crossed, caption "say why". On "battery" the phone badge pulses, its 140 % beside the rejected 2. On "solution" "cos θ = −1: θ = 180°" (green frame), the level line y = −1 touching the cosine curve once at its trough.

### 4. a mixed equation
> What if the equation mixes sine and cosine? Solve two sine squared theta plus three cosine theta equals three, from zero to three hundred and sixty degrees. A quadratic needs just one ratio, so swap one out. Cosine appears unsquared, so turn everything into cosine, using sine squared theta equals one minus cosine squared **theta**. That gives two minus two cosine squared theta, plus three cosine theta, equals three. Tidy it up: two cosine squared theta minus three cosine theta plus one equals zero, which factorises as two c minus one, times c minus **one**. Cosine theta equals a half at sixty and three hundred degrees. Cosine theta equals one at zero degrees, and at three hundred and sixty degrees too, because this domain includes both **ends**. That's four solutions.

Visual: clear change: the g01 board full width at the left; the number line and y = cos θ at the right. Task strip: "Solve 2 sin² θ + 3 cos θ = 3 for 0° ≤ θ ≤ 360°." On "just one ratio" hand tag "one ratio only"; "sin² θ" glows amber and "cos θ" glows violet, the unsquared "cos θ" ringing, hand tag "go towards the unsquared one". Rows, 52 px: on "theta" "sin² θ = 1 − cos² θ" (grey chip "t14a"); "2 − 2cos² θ + 3 cos θ = 3"; "2cos² θ − 3 cos θ + 1 = 0"; on "one" "(2c − 1)(c − 1) = 0: c = ½ or c = 1" (both green on the band). "cos θ = ½: θ = 60°, 300°"; "cos θ = 1: θ = 0°, 360°", the level line y = 1 touching the cosine curve at both closed ends, hand tag "both ends count"; on "ends" "θ = 0°, 60°, 300°, 360°" (green frame), counter "solutions: 4". A red slip "θ = 60°, 300° only" writes and is crossed, caption "0° and 360° are in the domain".

### 5. in radians
> Here's one in radians. Solve two cosine squared x plus sine x equals one, for x from zero to two pi. This time sine is the unsquared one, so replace cosine squared x with one minus sine squared x. That gives two minus two sine squared x, plus sine x, equals one, which rearranges to two sine squared x minus sine x minus one equals zero. It's the same quadratic as the first **example**. So sine x is one, at pi over two, or minus a half, at seven pi over six and eleven pi over six **radians**.

Visual: the board clears (stage continues); the graph switches to y = sin x on 0 to 2π (radian ticks). Task strip: "Solve 2 cos² x + sin x = 1 for 0 ≤ x ≤ 2π, giving exact values." Rows, 52 px: "cos² x = 1 − sin² x" (the unsquared "sin x" ringing); "2 − 2sin² x + sin x = 1"; "2 sin² x − sin x − 1 = 0"; on "example" "(2s + 1)(s − 1) = 0" with hand tag "same quadratic" and a dim echo of scene 2's row; on "radians" "x = π/2, 7π/6, 11π/6" (green frame), the level lines y = 1 and y = −½ ringing their crossings.

### 6. factorise, don't divide
> One last trap. Solve sine squared theta equals sine theta, from zero to three hundred and sixty degrees. It's tempting to divide both sides by sine theta. But that throws away every angle where sine theta is zero. Instead, bring everything to one side, and factorise: sine theta, times sine theta minus one, equals **zero**. So sine theta is zero, at zero, a hundred and eighty and three hundred and sixty degrees, or sine theta is one, at ninety degrees. Dividing would have lost three of the four **answers**.

Visual: clear change: two columns. Left (crossed later): "sin² θ = sin θ"; "÷ sin θ: sin θ = 1"; "θ = 90°". Right: "sin² θ − sin θ = 0"; on "zero" "sin θ(sin θ − 1) = 0", hand tag "don't divide: factorise"; "sin θ = 0: θ = 0°, 180°, 360°"; "sin θ = 1: θ = 90°"; green frame "θ = 0°, 90°, 180°, 360°". A small y = sin θ graph beneath shows four green dots (at y = 0 three, at y = 1 one). On "answers" the left column's result is crossed as a red slip "sin θ = 1 only", caption "lost: sin θ = 0", and on the graph the three dots at y = 0 flash red and vanish for 1 s, then return green; hand tag "lost: sin θ = 0".

### 7. memory aid
> Here's the summary. Call it s, solve the quadratic, and check each root is between minus one and one. Reject any that isn't, with a reason. Then solve each survivor as a full trig equation. Tangent has no such limit, so all its roots **survive**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the s chips, the band with one green and one crossed root, and the phone's 140 % small. Main line, hand font 56 px: "Call it s, solve the quadratic, keep roots between −1 and 1 (tan keeps all), then solve each one for θ." On "survive" the key line, 40 px: "Reject with a reason. Factorise, don't divide." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Solve two cosine squared theta, minus sine theta, minus one, equals zero, for theta from zero to three hundred and sixty degrees. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Solve 2 cos² θ − sin θ − 1 = 0 for 0° ≤ θ ≤ 360°." The full question stays on screen. Picture slot: empty axes 0° to 360° with y = sin θ drawn, no level lines. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Replace cosine squared theta with one minus sine squared theta. That gives two sine squared theta plus sine theta minus one equals zero, which factorises as two s minus one, times s plus **one**. So sine theta is a half, at thirty and a hundred and fifty degrees, or minus one, at two hundred and seventy **degrees**. Stopping at s equals a half and minus one is the slip.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "2(1 − sin² θ) − sin θ − 1 = 0"; "2 sin² θ + sin θ − 1 = 0"; on "one" "(2s − 1)(s + 1) = 0"; on "degrees" "θ = 30°, 150°, 270°" (green frame), the level lines y = ½ and y = −1 ringing on the picture. On "Stopping" a red slip "answer: s = ½, −1" writes and is crossed, caption "solve each for θ". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Solve tangent squared x, minus, in brackets, one plus root three, times tangent x, plus root three, equals zero, for x from zero to two pi. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Solve tan² x − (1 + √3) tan x + √3 = 0 for 0 ≤ x ≤ 2π." Picture slot: empty axes 0 to 2π with y = tan x drawn (asymptotes dashed), no level lines. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> It factorises as tangent x minus one, times tangent x minus root **three**. Tangent takes every real value, so neither root is rejected. Tangent x equals one at pi over four and five pi over four, and tangent x equals root three at pi over three and four pi over three **radians**. Rejecting root three because it's bigger than one is the slip.

Visual: the card shrinks to the top. Rows, 44 px: on "three" "(tan x − 1)(tan x − √3) = 0"; "tan: every real value, no rejection", hand tag "tan: every value"; on "radians" "x = π/4, π/3, 5π/4, 4π/3" (green frame), the level lines y = 1 and y = √3 ringing two crossings each on the tan picture. On "Rejecting" a red slip "tan x = √3 rejected" writes and is crossed, caption "only sin and cos are limited". Hold about 1 s.

### 12. handoff
> That completes trigonometry for Year 11. Next, graph transformations. Here's y equals x squared. Replace x with x minus three, so the equation becomes y equals x minus three, all squared. The minus sign makes it look as if the graph should move left. Does it? Which way does replacing x by x minus a move a graph? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the coded handoff frame (no plate): at the left, y = x² (ink) on square axes, x from −4 to 6, its vertex (0, 0) ringed. On "Replace x" at the right, "y = x²" and below it "y = (x − 3)²" (52 px), the "x" and the "x − 3" in matching blue boxes, hand tag "replace x by x − 3". On "move left" a grey ghost arrow pointing left from the vertex with "minus means left?". On "Which way" chip "x → x − 3: left or right?". On "next" chips "Next: graph transformations" and "?". Hold about 2 s. The new graph is not drawn and no direction is stated. This is g01's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Let s = sin θ (or c = cos θ) and solve the quadratic in s.
- Reject a root outside −1 ≤ s ≤ 1 for sin or cos, with a reason; tan keeps every root.
- Solve each surviving root as a trig equation on the domain.
- Mixed: use sin² θ = 1 − cos² θ, converting towards the unsquared ratio.
- Factorise, don't divide: sin² θ = sin θ gives sin θ(sin θ − 1) = 0.

Memory aid (framed card, right side, as in scene 7): *Call it s, solve the quadratic, keep roots between −1 and 1 (tan keeps all), then solve each one for θ.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and g01's opening frame.

## Teaching checks

- **Does it explain causes?** Why a quadratic: one ratio appears squared and plain (1, 2). Why solve each root again: a root is a value of sine, not an angle (2). Why reject 2: cos θ never exceeds 1 (3). Why keep tan's roots: tan takes every value (A2). Why convert towards the unsquared ratio: the other way needs a square root (4, author note g). Why factorise: dividing assumes sin θ ≠ 0 (6).
- **Misconceptions addressed:** stopping at s (2 crossed, A1 crossed); keeping or silently dropping cos θ = 2 (3 crossed); two ratios in one quadratic (4); the closed ends (4 crossed); dividing (6 crossed); rejecting a tan root (A2 crossed).
- **Visual standard, item by item:** 1 the phone inside the first 30 s (the opening frame is t15b's coded equation, as c10), returning in 2 (badge) and 3; 2 a new stage every 35 to 60 s; 3 the s chips, the range band sorting roots, the level lines from each root; 4 fixed roles (s amber, band teal); 5 large type; 6 hand tags; 7 g01 boards in 2 to 6; 8 framed card and five bullets; 9 the 140 % and c = 2 crossed alike, and the vanishing dots in 6.
- **One idea at a time:** substitute and solve (2), reject (3), mixed (4), radians (5), factorise, don't divide (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 27 s and 25 s.
- **Avoided double teaching:** w04's factorising, t10's ranges, t14a's identity and t15a's method are recalled in a phrase or grey chip.
- **Syllabus coverage:** `ci24474f01` (2 to 6, A1, A2; key notes 1 to 5): degrees (2 to 4, 6, A1) and radians (5, A2), with rejection and no rejection.
- **Out of scope by design:** graph transformations (g01 onward); double-angle equations.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Solve 2 cos² θ − sin θ − 1 = 0 for 0° ≤ θ ≤ 360°."
Model answer: cos² θ = 1 − sin² θ, so 2 − 2 sin² θ − sin θ − 1 = 0, giving 2 sin² θ + sin θ − 1 = 0, (2 sin θ − 1)(sin θ + 1) = 0. sin θ = ½ gives 30°, 150°; sin θ = −1 gives 270°. Classic mistake (crossed): "s = ½, −1" as the answer.

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "Solve tan² x − (1 + √3) tan x + √3 = 0 for 0 ≤ x ≤ 2π."
Model answer: (tan x − 1)(tan x − √3) = 0. tan x = 1 gives π/4, 5π/4; tan x = √3 gives π/3, 4π/3. No root is rejected, because tan takes every real value. Classic mistake (crossed): "tan x = √3 rejected".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Battery | 140 % outside 0 % to 100 % (picture only) | 1, 3 |
| `we-1` | (2s + 1)(s − 1) = 0; 90°, 210°, 330° | 2 |
| `we-2` | (c − 2)(c + 1) = 0; c = 2 rejected; 180° | 3 |
| `we-3` | (2c − 1)(c − 1) = 0; 0°, 60°, 300°, 360° | 4 |
| lesson10 | 2 sin² x − sin x − 1 = 0; π/2, 7π/6, 11π/6 | 5 |
| Factorise | sin θ(sin θ − 1) = 0; 0°, 90°, 180°, 360° | 6 |
| A1 | (2s − 1)(s + 1) = 0; 30°, 150°, 270° | 8, 9 |
| A2 | (t − 1)(t − √3) = 0; π/4, π/3, 5π/4, 4π/3 | 10, 11 |
| Handoff | y = x², y = (x − 3)² (no direction stated) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 and a numerical root scan of each closed domain (17 Nov 2026, scratchpad `t/verify.py`); Codex to re-check.

- 2s² − s − 1 = (2s + 1)(s − 1). 2 sin² θ − sin θ − 1 = 0 on [0°, 360°]: 90°, 210°, 330°.
- c² − c − 2 = (c − 2)(c + 1). cos² θ − cos θ − 2 = 0 on [0°, 360°]: 180°.
- 2 sin² θ + 3 cos θ = 3 on [0°, 360°]: 0°, 60°, 300°, 360°.
- 2 cos² x + sin x = 1 on [0, 2π]: π/2, 7π/6, 11π/6.
- sin² θ = sin θ on [0°, 360°]: 0°, 90°, 180°, 360°.
- 2 cos² θ − sin θ − 1 = 0 on [0°, 360°]: 30°, 150°, 270°.
- tan² x − (1 + √3) tan x + √3 = 0 on [0, 2π]: π/4, π/3, 5π/4, 4π/3.

## Memory aid check

- **"Call it s, solve the quadratic, keep roots between −1 and 1 (tan keeps all), then solve each one for θ."** Original wording of the site's card 02 ("substitute, solve, then unwind"). Meaning, as said in scene 7: replace the repeated ratio by a letter, solve for the letter, discard roots that sin or cos cannot take, then solve each surviving value as a t15a equation on the domain. Assumptions checked: the equation must first be in one ratio (scene 4); "between −1 and 1" includes the ends (cos θ = −1 and sin θ = 1 survive, scenes 2 and 3); the tan exception is stated on the card. It helps a new case: 2 cos² θ + cos θ − 1 = 0 (the site's short answer Q1) gives c = ½ or −1, both kept: 60°, 300°, 180°.
- **"Reject with a reason. Factorise, don't divide."** The two habits the slips in 3 and 6 break.
- **Considered, not used:** "nickname, solve, unwind" (the site's phrase; "nickname" is the pack's anchor 2, used in the narration instead).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `t/count.py`): 5,346 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 20 s of settling (the chips, the band sorting, the level lines) and the 45 s notes scene: about 493 s. Characters per scene (1 to 13): 609, 778, 527, 766, 487, 503, 242, 162, 364, 171, 336, 326, 75. Speech before the notes is about 396 s, under the 570 s cap. Feedback speech: about 27 s and 25 s.

Reserve trims if the voiced take runs long: scene 1's "It's still sine theta, just a shorter name" (keep the chip slide); scene 5's last sentence's angles (keep the green frame).

## Scene list and build ids

Lesson key `m-a11t16` (route math-a11-t16). Explainer folder `src/explainer/lessons/math-a11-t16`; build inputs in `docs/production/claude-pm/lessons/math-a11-t16/` (at voicing).

In order (13 scene headings): hook-quadratic-disguise, example-call-it-s, reject-a-root, mixed-equation, radians, factorise-dont-divide, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | t15b's equation, the s chips, the phone's 140 % |
| 45 to 110 s | 2 | Board, band and sine graph: `we-1` |
| 110 to 150 s | 3 | The rejection; the phone returns |
| 150 to 210 s | 4 | The mixed equation; both ends |
| 210 to 245 s | 5 | Radians |
| 245 to 285 s | 6 | Factorise, don't divide |
| 285 to 303 s | 7 | Framed memory card |
| 303 to 390 s | 8 to 11 | Question cards and countdowns, then feedback |
| 390 to 415 s | 12 | The parabola frame (g01's opening) |
| 415 to 460 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t15b's last frame continues into 1; 1 to 2 stage change; 2 to 3 board row clear; 3 to 4 clear change; 4 to 5 board row clear; 5 to 6 clear change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-t16-learning-review.md`, `science_check` = `checks/m-a11-t16-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets`, file list and a look at `maths/ma12-phone-v1.png`): the phone plate is portrait with a blank dark screen, so a coded battery icon and reading fit on it.

Reused: `ma12-phone-v1.png` (scenes 1 to 3; also t09's handoff and t10). No new plate. The final frame is coded only.

Coded: the s chips, number lines and bands, the battery icon and reading, graphs and level lines, board rows, the parabola frame, countdown, key notes.

### Studio kit use and additions

Uses: `ExpressionSlot`, `IntervalPicture`, `StudioLevelLine` with `crossingsOf`, `FunctionSimulator` with `SIN_FAMILY`, `COS_FAMILY` and a tan family, `WorkingBoard`, `TaskStrip`, `StudioPlot`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Root sorter** (small): roots drop onto an `IntervalPicture` band and turn green inside, red and crossed outside, with a reason label; a "tan" mode removes the band.
2. **Battery reading on the phone plate** (small): a coded battery icon and percentage placed on the phone's screen (sidecar screen rectangle).

## Codex asset brief

No new plate. `ma12-phone-v1.png` exists.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every solution set under "Numbers to verify" with a CAS and a numerical root scan of each closed domain, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm every rejected root has its reason stated aloud and on screen, and that no tan root is rejected.
4. Confirm the mixed equations convert towards the unsquared ratio, and that 0° and 360° are both included where the domain is closed.
5. Confirm the final frame states no direction for y = (x − 3)² and draws no shifted graph.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer; attempt 2's spoken brackets match the printed equation.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on t15b's final frame.

## YouTube metadata (draft)

Title: Trig Equations That Reduce to Quadratics | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson12.sa.html

A phone that says 140 % battery gets ignored, and so should cos θ = 2. Solve trig equations that hide a quadratic: call sin θ "s", solve the quadratic, reject any root outside −1 to 1 with a reason (tan keeps them all), then solve each surviving root for θ. Reduce mixed equations with sin² θ = 1 − cos² θ, work in degrees and radians, and see why you factorise sin² θ = sin θ instead of dividing. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Trigonometric identities and equations.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Solve problems involving trigonometric equations, including those that reduce to quadratic equations, on a restricted domain"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c

Builds on: Trig equations with multiple angles; the Pythagorean identities. Next: Graph transformations.

#Year11Maths #MathsAdvanced #TrigEquations #HSCScience

## Open decisions

- **1. The g01 join (root and the g01 designer).** No g01 pack or design exists yet. The final frame is coded (y = x² and the question about y = (x − 3)²) and states no direction, as e08 left t01 free. If the g01 designer picks a painted anchor, only scene 12 changes.
- **2. The anchor (root).** The pack's expired voucher is re-set as a phone's impossible battery reading, because the reason for rejection here is a range and a battery has a visible one. Root may prefer the voucher; only scenes 1 and 3's anchor beats change.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from t10, t14a, t15a, t15b and w04; check that "s is a value of sine, not an angle" is heard before the slip, that the rejection reason is caused, that "towards the unsquared ratio" is explained, and that attempt 2's spoken brackets are clear), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
