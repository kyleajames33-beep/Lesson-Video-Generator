# Maths A11 T15b: How do we solve trig equations with a multiple angle, like sin 2θ = k? Widening the domain, solving, then halving; counting waves on the graph; a radian example with a calculator; and a half angle that shrinks the domain (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. This is the second of two videos split from the outline's t15 (see `../checks/root-decisions-maths-a11-t09-t16.md`, split 2). Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 4,723 characters by script (see "Narration length estimate"), 12 scene headings, about 446 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: seventy-second video of Year 11 Mathematics Advanced (2024), outline order 72 (second part), Trigonometric identities and equations. Pre-design pack: `../pre-design/maths-a11/math-a11-t15.md` (brief 243). Site lesson (read through the pack's quotations, read only): `trigonometric-identities-and-equations/lesson11.sa.html` (`we-3`, sin 2θ = 0.5 on 0° ≤ θ ≤ 360°, with its numbers; card 07, widening; short answer Q2, sin 2θ = −√3/2; Q3's reason why half the answers are lost) and `lesson08.sa.html` (drill 4's counting by cycles). Route entry: `math-a11-t15` in `../../programme/maths-a11-route-inputs-4.json`. Visual system: maths studio kit; the painted wall clock from t15a with coded hands; every graph, window strip, level line, calculator and row coded.

Owner rules applied: as e08 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (home: a wall clock's minute hand over two hours), Australian spelling, no em dashes, "zero point" decimals, conversational narration, angles always spoken with "degrees" or "radians", "sine", "cosine" and "tangent" spoken in full).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Trigonometric identities and equations), quoted from `../../programme/maths-a11-route-inputs-4.json`:

- `ci84d04f4e` (shared with t15a; here: multiple and half angles, degrees and radians): "Solve equations involving trigonometric ratios of angles, specified in degrees or radians, on a restricted domain"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c

**Boundary:** starts from t15a's final frame exactly (the clock with its level line at half the hand's length, the hand at twelve; chips "noon to 2 pm: 0 ≤ m ≤ 120", a blue arc winding twice with "6m: 0° to 720°", "two laps: how many times?"; the row "sin 2θ = 0.5, 0° ≤ θ ≤ 360°" with "2θ: two laps too?"; "Next: multiple angles", "?"). Recalls t15a (related angle from the positive value, quadrants from the sign, keep the domain, check the count, radian mode) and t10 (periods of the graphs) in a phrase or grey chip each. Teaches: the clock over two laps (four times); widening the domain for sin 2θ = 0.5 and halving (site `we-3`); why the count doubles (two waves) and when it doesn't (k = 1, a touch at each peak; correction of the site's card 07 claim); a radian example with a calculator in radian mode (cos 2x = 0.3, original); a half angle that shrinks the domain (cos(θ/2) = ½, original). Stops at multiple and half angles. Not taught: equations that reduce to quadratics (t16); the substitution u = 2x + c with a shift (Year 12 t02); general solutions.

## Decisions

- **Anchor: the wall clock over two hours (painted plate, live; carried from t15a).** From noon to 2 pm the minute hand turns through 6m° with m from 0 to 120, so its angle runs from 0° to 720°: two laps. The tip is half a hand-length above the centre at 6m = 60°, 300°, 420° and 660°: 10 past 12, 10 to 1, 10 past 1 and 10 to 2. The angle ran twice as far, so twice as many solutions: the picture of "widen the domain". Home; the pack's anchor 1, continued across two videos as the accepted RC car across c01 and c02 (root ruling 1 on c01 to c09).
- **Simulations (standard item 3).**
  1. **Two-lap sweep** (scene 1): the hand sweeps from noon to 2 pm; a lap counter "lap 1, lap 2"; four green dots stamp on the rim (two per lap, each lap's dots in a slightly darker green), with time chips "12:10", "12:50", "1:10", "1:50".
  2. **Window map** (`StudioWindowMap`; scenes 2, 4, 5): a θ strip (0° to 360°) and a 2θ strip above it stretched to 0° to 720°; solutions found on the 2θ strip slide down and halve onto the θ strip; for θ/2 the upper strip shrinks to 0° to 180° and the solution doubles back down.
  3. **Wave counter** (`StudioLevelLine` with `crossingsOf`; scene 3): y = sin 2θ on 0° to 360° with its two waves bracketed ("wave 1", "wave 2"); the level line slides from 0.5 up to 1 and the counter drops from 4 to 2 as the crossings merge into touches at the peaks.
- **Colour roles (fixed, as t15a).** θ and its solutions **blue**; the inside angle (2θ, 2x or θ/2) marked by a **teal outline box** wherever it appears, with its strip on the window map boxed the same way; related angle α **magenta**; level line dashed **amber**; sine curve teal, cosine curve violet, tan curve amber (as t10 and t15a); answer green; mistake red, crossed slips only. The teal box never shares a scene with a teal sine curve at the same size (open decision 1).
- **Large type, handwritten voice.** As e08 (current lines and readouts 52 px, strips 44 px, nothing below 26 px, all text above y = 950). Hand tags: "two laps", "widen first", "+ 360°", "halve every one", "half the answers vanish", "two waves", "touch: one each", "count the waves", "RAD mode", "+ 2π", "half a lap", "outside the window", "do it to the domain too".
- **Stage changes (standard item 2).** t15a's frame, the clock's two laps (1); the window map and board for sin 2θ = 0.5 (2); the wave counter (3); the radian board and calculator (4); the window shrinking for θ/2 (5); framed card (6); question cards (7 to 10); the quadratic-looking equation for t16 (11); key notes (12).
- **Worked examples (g01 layout).** 2: site lesson11 `we-3`: sin 2θ = 0.5, 0° ≤ θ ≤ 360°: θ = 15°, 75°, 195°, 255°. 3: sin 2θ = 1: θ = 45°, 225° (original, the count's exception). 4: cos 2x = 0.3, 0 ≤ x ≤ 2π, two decimal places: x ≈ 0.63, 2.51, 3.77, 5.65 (original). 5: cos(θ/2) = ½, 0° ≤ θ ≤ 360°: θ = 120° (original). Crossed slips: "θ = 15°, 75° only" (2), "θ = 120°, 150° only" (A1), "x = 3π/8, 7π/8 only" (A2).
- **Memory aid.** Framed card: "Do to the domain what the equation does to the angle: widen or shrink, solve, then undo." Second line: "Count the waves; a touch at a peak counts once."
- **Visual surprise.** The clock stamps four dots in two hours, not two; on the graph, raising the line to the peaks merges each pair of crossings into one touch and the counter drops from 4 to 2.
- **Site notes (pack section 8 and `../site-corrections-maths-a11.md` section 7).** lesson11 card 07's "the number of solutions multiplies by the same factor as the angle" (minor finding: fails at k = ±1 and at domain endpoints) is replaced by "count the waves, then check where the line sits" with the k = 1 case shown. General solutions with n are not used. TI03 card 08 (sin 2θ = cos θ) is optional extension in the pack and is not used.
- **Plain meanings at first use.** Multiple angle ("an angle like two theta, a number times the angle"); wave (recalled from t10: "one full repeat of the graph").
- **Attempts (site short answer and pack question 2).** A1 (site lesson11 Q2): sin 2θ = −√3/2, 0° ≤ θ ≤ 360°: 120°, 150°, 300°, 330°; crossed "θ = 120°, 150° only". A2 (pack question 2): tan 2x = −1, 0 ≤ x ≤ 2π: 3π/8, 7π/8, 11π/8, 15π/8; crossed "x = 3π/8, 7π/8 only".
- **Mistake scene:** none separate. Solving on the original domain and halving (2 crossed, A1 and A2 crossed); "the count always doubles" (3); degree mode in a radian domain (4 tag); forgetting to halve or double at the end (2, 5 tags).
- **Cause chain taught, in order:** (1) when the angle inside runs further, the ratio repeats more often, so there are more solutions (1); (2) so the inside angle's domain must be found first: 0 ≤ θ ≤ 360° makes 0 ≤ 2θ ≤ 720° (2); (3) solve for the inside angle on that domain with t15a's method, adding a full turn for each extra lap, then undo (2); (4) the graph of sin 2θ has two waves in 360°, so a line strictly between −1 and 1 crosses four times, but a line at a peak touches once per wave (3); (5) the same in radians with a calculator (4); (6) a half angle runs half as far, so the domain shrinks and solutions can drop out (5).
- **Entry knowledge (route):** t15a (solving sin θ = k, cos θ = k and tan θ = k on a domain, degrees and radians, calculator in radian mode); t10 (graphs and periods); t04 (related angles); t08 (radians).
- **What Year 12 relies on.** Year 12 t02 opens with the window idea ("call the inside u ... when x runs from 0 to 2π, u runs from ... that's the window we search") and solves 2 sin 2x = √3 by "u runs from zero to four pi. That's two full cycles, so expect four crossings ... Halve them all"; it also teaches "two per cycle unless the line touches". This video gives exactly that idea in Year 11 words ("widen the domain", "halve every one", "count the waves") with `StudioWindowMap`, so Year 12's u-window is a renaming. Year 12 t03 assumes inverse cos in radians (scene 4).
- **Handoff (to math-a11-t16, "How do trig equations that reduce to quadratics get solved?").** Scene 11, as the t16 pack's start: "2 sin² θ − sin θ − 1 = 0" (60 px) with each "sin θ" glowing amber in turn, a grey chip "w04: 2s² − s − 1 = 0?", and the chip "call it s?"; chips "Next: equations that reduce to quadratics" and "?". This is t16's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Clock: cos(6m°) = ½, 0 ≤ m ≤ 120: 6m = 60°, 300°, 420°, 660°; m = 10, 50, 70, 110.
  (b) `we-3`: 2θ = 30°, 150°, 390°, 510°; θ = 15°, 75°, 195°, 255°.
  (c) sin 2θ = 1, 0° ≤ θ ≤ 360°: 2θ = 90°, 450°; θ = 45°, 225°.
  (d) cos 2x = 0.3, 0 ≤ x ≤ 2π: α = acos 0.3 = 1.266104; 2x = 1.266104, 5.017081, 7.549289, 11.300266; x = 0.633052, 2.508541, 3.774645, 5.650133.
  (e) cos(θ/2) = ½, 0° ≤ θ ≤ 360°: θ/2 in [0°, 180°]: θ/2 = 60°; θ = 120°.
  (f) A1: 2θ = 240°, 300°, 600°, 660°; θ = 120°, 150°, 300°, 330°. A2: 2x = 3π/4, 7π/4, 11π/4, 15π/4; x = 3π/8, 7π/8, 11π/8, 15π/8 (tan 2x has period π/2, so four solutions in [0, 2π]; the asymptotes of tan 2x are not solutions).
  (g) Pronunciations: "sine two theta"; "cosine two x"; "cosine of theta over two"; "three pi over eight"; "one point two six six".

Main question: *How do we solve a trig equation with a multiple angle, like sine two theta equals a half? Why does a clock's hand give four answers in two hours?*
Entry knowledge (t04, t08, t10, t15a): related angles; radians; graphs and periods; solving single-angle equations.
Stops after: multiple and half angles by widening or shrinking the domain, solving and undoing, with the graph's count, in degrees and radians. No quadratics (t16), no shifted insides (Year 12 t02), no general solutions.
Handoff: math-a11-t16: "2 sin² θ − sin θ − 1 = 0 has sin θ twice. Call it s?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): θ and solutions blue; inside angle in teal outline boxes; related angle magenta; level line dashed amber; sine curve teal; cosine curve violet; tan curve amber; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · TRIGONOMETRIC IDENTITIES AND EQUATIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: two laps, four times
> Here's the clock again, running from noon to two o'clock. In those two hours, the minute hand makes two full laps, so its angle, six m degrees, runs from zero all the way to seven hundred and twenty degrees. In the first lap, the tip is half a hand-length up at sixty and three hundred degrees. In the second lap, the same heights come round again, a full turn later, at four hundred and twenty and six hundred and sixty **degrees**. So m is ten, fifty, seventy and a hundred and ten. That's four times, not **two**. The angle ran further, so there were more solutions. So how do we solve an equation like sine two theta equals a **half**?

Visual: opens on t15a's final frame exactly (the clock, its level line, the hand at twelve, chips "noon to 2 pm: 0 ≤ m ≤ 120", the double arc "6m: 0° to 720°", "two laps: how many times?", the row "sin 2θ = 0.5, 0° ≤ θ ≤ 360°" with "2θ: two laps too?", "Next: multiple angles", "?"). On the first sentence the "Next" chips fade; the hand sweeps from noon (two-lap sweep) with a lap counter "lap 1". At 6m = 60° and 300° green dots stamp ("12:10", "12:50"); the counter turns to "lap 2" with hand tag "two laps"; on "degrees" dots stamp at 420° and 660° ("1:10", "1:50"), hand tag "+ 360°". Row at the right, 52 px: "6m = 60°, 300°, 420°, 660° → m = 10, 50, 70, 110" (green frame); on "two" chip "4 times". On "half" heading "Multiple angles"; the row "sin 2θ = 0.5" enlarges; the question chip "How do we solve sin 2θ = 0.5?" moves to the top right.

### 2. widen, solve, halve
> Solve sine two theta equals a half, for theta from zero to three hundred and sixty degrees. The key is that the angle inside the sine is two theta, not theta. If theta runs from zero to three hundred and sixty degrees, then two theta runs from zero to seven hundred and twenty degrees. That's two laps, like the clock. So widen the domain **first**. Now solve on that wider domain. The related angle is thirty degrees, and sine is positive in the first and second quadrants, so two theta is thirty or a hundred and fifty degrees. Add a full turn for the second lap: three hundred and ninety, and five hundred and ten **degrees**. Finally, halve every one. Theta is fifteen, seventy-five, a hundred and ninety-five, and two hundred and fifty-five **degrees**. Solving on zero to three hundred and sixty, then halving, gives only fifteen and seventy-five. Half the answers vanish. That's the **slip**.

Visual: stage change: the window map (`StudioWindowMap`, 1,500 px wide) across the top: the θ strip "0° ≤ θ ≤ 360°" (blue) and above it the inside strip "0° ≤ 2θ ≤ 720°" (teal box round "2θ") stretching out from it; the clock shrinks to a 220 px badge at the top right. g01 rows below, 52 px. Task strip, 44 px: "Solve sin 2θ = 0.5 for 0° ≤ θ ≤ 360°." On "first" row "0° ≤ 2θ ≤ 720°" (teal box), hand tag "widen first". Rows: "α = 30°; sin > 0: quadrants I and II" (grey chip "t15a"); "2θ = 30°, 150°" (dots on the inside strip's first lap); on "degrees" "2θ = 390°, 510°" (dots on the second lap), hand tag "+ 360°". On "degrees" (last) the four dots slide down and halve onto the θ strip: "θ = 15°, 75°, 195°, 255°" (green frame), hand tag "halve every one". On "slip" a red slip "θ = 15°, 75° only" writes and is crossed, caption "half the answers vanish".

### 3. count the waves
> The graph shows why there are four. Y equals sine two theta squeezes two full waves into zero to three hundred and sixty degrees. A level line at a half crosses each wave twice, so that's four crossings in **all**. But the count doesn't always double. Raise the line to one, the very top. Each wave only touches it once, at its peak, so sine two theta equals one has just two solutions, forty-five and two hundred and twenty-five **degrees**. So count the waves, then check where the line **sits**.

Visual: clear change: the wave counter (`StudioLevelLine`): y = sin 2θ (teal, 0° to 360°, 1,500 × 520 px) with brackets "wave 1", "wave 2", hand tag "two waves"; the amber line y = 0.5 with its four crossings ringing at 15°, 75°, 195°, 255° and the counter "solutions: 4" on "all". On "Raise the line" the line slides up; the crossings in each wave close together and merge at the peaks; the counter drops to "solutions: 2" at y = 1 and, on "degrees", "45°" and "225°" ring (green), hand tag "touch: one each". On "sits" hand tag "count the waves".

### 4. in radians, with a calculator
> Here's one in radians, with a calculator. Solve cosine two x equals zero point three, for x from zero to two pi, to two decimal places. Widen first: two x runs from zero to four pi, which is two laps. In radian mode, inverse cosine of zero point three is about one point two six **six**. Cosine is positive in the first and fourth quadrants, so in the first lap, two x is that angle, or two pi minus it. Add two pi to each for the second lap. That's four values of two x. Halve them all, and x is about zero point six three, two point five one, three point seven seven and five point six **five**. Four solutions, two per wave, just as the graph **shows**.

Visual: stage change: g01 board at the left (1,050 px); the window map at the top right in radians ("0 ≤ x ≤ 2π" blue, "0 ≤ 2x ≤ 4π" teal box); a coded calculator badge "RAD". Task strip, 44 px: "Solve cos 2x = 0.3 for 0 ≤ x ≤ 2π, correct to two decimal places." Rows, 52 px: "0 ≤ 2x ≤ 4π" (teal box); on "six" "α = cos⁻¹(0.3) = 1.266…" (magenta), hand tag "RAD mode"; "cos > 0: quadrants I and IV"; "2x = α, 2π − α" → "1.266…, 5.017…"; "+ 2π: 7.549…, 11.300…", hand tag "+ 2π"; on "five" "x ≈ 0.63, 2.51, 3.77, 5.65" (green frame), the dots halving down the window map. On "shows" a small graph y = cos 2x (violet, 0 to 2π) with the amber line y = 0.3 and four crossings ringing, counter "solutions: 4".

### 5. a half angle shrinks the window
> The same rule works the other way. Solve cosine of theta over two equals a half, for theta from zero to three hundred and sixty degrees. This time the angle inside is theta over two, which only runs from zero to a hundred and eighty degrees. That's half a lap. Cosine is a half at sixty degrees, and three hundred degrees is outside this window. So theta over two is sixty degrees, and theta is a hundred and twenty degrees. Just one **solution**. Whatever the equation does to theta, do it to the domain as well.

Visual: clear change: the window map: the θ strip "0° ≤ θ ≤ 360°" with the inside strip above it shrinking to "0° ≤ θ/2 ≤ 180°" (teal box), hand tag "half a lap". g01 rows, 52 px: Task strip "Solve cos(θ/2) = ½ for 0° ≤ θ ≤ 360°."; "0° ≤ θ/2 ≤ 180°"; "cos = ½ at 60° (and 300°: outside)", the 300° dot appearing grey beyond the strip's end, hand tag "outside the window"; "θ/2 = 60°"; on "solution" "θ = 120°" (green frame), the dot doubling down onto the θ strip. On "do it to the domain as well" hand tag "do it to the domain too".

### 6. memory aid
> Here's the summary. Do to the domain what the equation does to the angle. Widen it or shrink it, solve on the new domain, then undo, by halving or doubling every answer. And check the count with the waves on the **graph**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the window map stretching and its dots halving back, and the two-wave graph. Main line, hand font 56 px: "Do to the domain what the equation does to the angle: widen or shrink, solve, then undo." On "graph" the key line, 40 px: "Count the waves; a touch at a peak counts once." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Solve sine two theta equals minus root three over two, for theta from zero to three hundred and sixty degrees. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Solve sin 2θ = −√3/2 for 0° ≤ θ ≤ 360°." The full question stays on screen. Picture slot: an empty window map (the θ strip 0° to 360° and an unlabelled strip above it). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Two theta runs to seven hundred and twenty degrees. The related angle is sixty degrees, and sine is negative in the third and fourth quadrants, so two theta is two hundred and forty, three hundred, six hundred and six hundred and sixty **degrees**. Halving, theta is a hundred and twenty, a hundred and fifty, three hundred and three hundred and thirty **degrees**. Stopping after one lap is the slip.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "0° ≤ 2θ ≤ 720°; α = 60°; quadrants III and IV"; on "degrees" "2θ = 240°, 300°, 600°, 660°"; on "degrees" (last) "θ = 120°, 150°, 300°, 330°" (green frame), the dots halving on the window map. On "Stopping" a red slip "θ = 120°, 150° only" writes and is crossed, caption "second lap missing". Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. Solve tangent two x equals minus one, for x from zero to two pi. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Solve tan 2x = −1 for 0 ≤ x ≤ 2π." Picture slot: an empty window map in radians. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Two x runs from zero to four pi. The related angle is pi over four, and tangent is negative in the second and fourth quadrants. So two x is three pi over four, seven pi over four, eleven pi over four and fifteen pi over **four**. Halve them: x is three pi over eight, seven pi over eight, eleven pi over eight and fifteen pi over eight **radians**. Keeping only the first two is the slip.

Visual: the card shrinks to the top. Rows, 44 px: "0 ≤ 2x ≤ 4π; α = π/4; quadrants II and IV"; on "four" "2x = 3π/4, 7π/4, 11π/4, 15π/4"; on "radians" "x = 3π/8, 7π/8, 11π/8, 15π/8" (green frame). On "Keeping only" a red slip "x = 3π/8, 7π/8 only" writes and is crossed, caption "2x runs to 4π". Hold about 1 s.

### 11. handoff
> So far, each equation has had one ratio, appearing once. But look at this one: two sine squared theta, minus sine theta, minus one, equals zero. Sine theta appears twice, and once it's squared. It looks a lot like a quadratic. What if we call sine theta s? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to "2 sin² θ − sin θ − 1 = 0" (60 px, centre); on "appears twice" each "sin θ" glows amber in turn; on "quadratic" a grey chip "w04: 2s² − s − 1 = 0?"; on "call sine theta s" chip "call it s?". On "next" chips "Next: equations that reduce to quadratics" and "?". Hold about 2 s. This is t16's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Multiple angle: change the domain first (0° ≤ θ ≤ 360° gives 0° ≤ 2θ ≤ 720°).
- Solve for the inside angle; add 360° (or 2π) for each extra lap.
- Undo at the end: halve for 2θ, double for θ/2.
- Check the count: two crossings per wave, one where the line touches a peak.
- sin 2θ = 0.5, 0° ≤ θ ≤ 360°: θ = 15°, 75°, 195°, 255°.

Memory aid (framed card, right side, as in scene 6): *Do to the domain what the equation does to the angle: widen or shrink, solve, then undo.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and t16's opening frame.

## Teaching checks

- **Does it explain causes?** Why more solutions: the inside angle runs further, so the ratio repeats more (1, 2). Why widen first: the method finds inside-angle values, so it needs the inside angle's domain (2). Why four: two waves, two crossings each (3). Why sometimes fewer: a line at a peak touches once per wave (3). Why the half angle has one: its window is half a lap (5).
- **Misconceptions addressed:** solving on the original domain (2 crossed, A1 and A2 crossed); "the count always doubles" (3, replacing the site's claim); degree mode for radians (4); not undoing at the end (2, 5).
- **Visual standard, item by item:** 1 the clock from the first frame (t15a's frame), stamping four dots; 2 a new stage every 35 to 65 s; 3 the two-lap sweep, the window map stretching and shrinking, the wave counter dropping from 4 to 2; 4 fixed roles (inside angle in teal boxes, α magenta); 5 large type; 6 hand tags; 7 g01 boards in 2, 4 and 5; 8 framed card and five bullets; 9 the counter dropping as crossings merge at the peaks.
- **One idea at a time:** the clock's two laps (1), widen, solve, halve (2), counting (3), radians (4), shrinking (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 30 s and 29 s.
- **Avoided double teaching:** t15a's method, t10's periods and t08's radians are recalled in a phrase or grey chip.
- **Syllabus coverage:** `ci84d04f4e` (1 to 5, A1, A2; key notes 1 to 5), with t15a.
- **Out of scope by design:** quadratics (t16); shifted insides (Year 12 t02); general solutions.

## Practice questions and model answers

**Attempt 1 (scene 7; site lesson11 short answer Q2, 4 marks on the site; not an official marking scheme).** "Solve sin 2θ = −√3/2 for 0° ≤ θ ≤ 360°."
Model answer: 0° ≤ 2θ ≤ 720°; related angle 60°; sine is negative in the third and fourth quadrants: 2θ = 240°, 300°, 600°, 660°; θ = 120°, 150°, 300°, 330°. Classic mistake (crossed): "θ = 120°, 150° only".

**Attempt 2 (scene 9; pack question 2, original, HSC style, 3 marks suggested).** "Solve tan 2x = −1 for 0 ≤ x ≤ 2π."
Model answer: 0 ≤ 2x ≤ 4π; related angle π/4; tan is negative in the second and fourth quadrants: 2x = 3π/4, 7π/4, 11π/4, 15π/4; x = 3π/8, 7π/8, 11π/8, 15π/8. Classic mistake (crossed): "x = 3π/8, 7π/8 only".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Clock | 6m = 60°, 300°, 420°, 660°; m = 10, 50, 70, 110 | 1 |
| `we-3` | 2θ = 30°, 150°, 390°, 510°; θ = 15°, 75°, 195°, 255° | 2 |
| Count | sin 2θ = 1: θ = 45°, 225° | 3 |
| Radians | cos 2x = 0.3: α = 1.266; 2x = 1.266, 5.017, 7.549, 11.300; x ≈ 0.63, 2.51, 3.77, 5.65 | 4 |
| Half angle | cos(θ/2) = ½: θ/2 = 60°; θ = 120° | 5 |
| A1 | 2θ = 240°, 300°, 600°, 660°; θ = 120°, 150°, 300°, 330° | 7, 8 |
| A2 | 2x = 3π/4, 7π/4, 11π/4, 15π/4; x = 3π/8, 7π/8, 11π/8, 15π/8 | 9, 10 |
| Handoff | 2 sin² θ − sin θ − 1 = 0 (not solved) | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 and a numerical root scan of each domain (17 Nov 2026, scratchpad `t/verify.py`); Codex to re-check.

- cos(6m°) = 1/2, 0 ≤ m ≤ 120: m = 10, 50, 70, 110.
- sin 2θ = 1/2 on [0°, 360°]: 15°, 75°, 195°, 255°.
- sin 2θ = 1 on [0°, 360°]: 45°, 225°.
- cos 2x = 0.3 on [0, 2π]: acos 0.3 = 1.266104; x = 0.633052, 2.508541, 3.774645, 5.650133.
- cos(θ/2) = 1/2 on [0°, 360°]: 120°.
- sin 2θ = −√3/2 on [0°, 360°]: 120°, 150°, 300°, 330°.
- tan 2x = −1 on [0, 2π]: 3π/8, 7π/8, 11π/8, 15π/8.

## Memory aid check

- **"Do to the domain what the equation does to the angle: widen or shrink, solve, then undo."** Original. Meaning, as said in scene 6: if the equation has a multiple angle such as 2θ (or θ/2), apply the same operation to the domain's ends, solve for the inside angle on that domain, then undo the operation on each solution. Assumptions checked: the inside is a positive multiple of θ (no shift; shifted insides are Year 12's u-window, which this rule extends unchanged); the domain is an interval. It helps a new case: cos 3θ = 0.4 on 0° to 360° gives 0° ≤ 3θ ≤ 1,080°, three laps, six solutions (the site's quick-fire item).
- **"Count the waves; a touch at a peak counts once."** Replaces the site's "the number multiplies"; shown in scene 3.
- **Considered, not used:** "widen, solve, halve" (fits 2θ only).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `t/count.py`): 4,723 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 20 s of settling (the two-lap sweep, the window map moves, the counter drop) and the 45 s notes scene: about 446 s. Characters per scene (1 to 12): 627, 883, 486, 644, 509, 218, 143, 393, 96, 380, 269, 75. Speech before the notes is about 349 s, under the 570 s cap. Feedback speech: about 30 s and 29 s, so both are named for measuring on the voiced take.

Reserve trims if the voiced take runs long: feedback 1's first sentence (keep the row "0° ≤ 2θ ≤ 720°"); feedback 2's "Halve them:" becomes "So"; scene 1's "In the first lap ... six hundred and sixty degrees" pair (keep the stamped dots and the row); scene 4's last sentence (keep the small graph).

## Scene list and build ids

Lesson key `m-a11t15b` (route math-a11-t15, part b). Explainer folder `src/explainer/lessons/math-a11-t15b`; build inputs in `docs/production/claude-pm/lessons/math-a11-t15b/` (at voicing).

In order (12 scene headings): hook-two-laps, widen-solve-halve, count-the-waves, radians-calculator, half-angle, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 50 s | 1 | The clock's two laps, four dots |
| 50 to 115 s | 2 | Window map and board: sin 2θ = 0.5 |
| 115 to 150 s | 3 | Wave counter |
| 150 to 210 s | 4 | Radian board and calculator |
| 210 to 250 s | 5 | Window shrinking for θ/2 |
| 250 to 268 s | 6 | Framed memory card |
| 268 to 355 s | 7 to 10 | Question cards and countdowns, then feedback |
| 355 to 378 s | 11 | The quadratic-looking equation (t16's frame) |
| 378 to 423 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t15a's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change; 3 to 4 stage change; 4 to 5 clear change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-t15b-learning-review.md`, `science_check` = `checks/m-a11-t15b-maths-check.md`.

## Assets

Reused: `ma11-wall-clock-v1.png` (t04's brief; scenes 1, 2 badge). No new plate.

Coded: the clock's hand, arcs and dots; the window maps; the graphs, level lines and counters; the calculator badge; board rows; countdown; key notes.

### Studio kit use and additions

Uses: `StudioWindowMap`, `StudioLevelLine` with `crossingsOf`, `FunctionSimulator` with `SIN_FAMILY`, `COS_FAMILY` and a tan family, `piTicks` and a degree-tick helper (kit needs), `ScreenApp` (calculator badge), `WorkingBoard`, `TaskStrip`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Two-lap clock sweep** (small, extends t15a's sweep): a lap counter and dots stamped per lap in two greens.
2. **Window map shrink** (small): `StudioWindowMap` with a factor below 1, so the inside strip is shorter than the θ strip and dots outside it show grey.
3. **Level line merge** (small): when the level line reaches a curve's maximum, each pair of crossings in a wave merges into one touch and the counter updates.

## Codex asset brief

No new plate. `ma11-wall-clock-v1.png` is painted under t04's brief and must exist before the t04 build.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS and a numerical root scan of each domain, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly, and that `ci84d04f4e` is marked as shared with t15a.
3. Confirm every multiple-angle example changes the domain before solving and undoes it after, and that the radian example uses radian mode and rounds only at the end.
4. Confirm the site's "the number of solutions multiplies" claim is not stated, and that the k = 1 case shows two solutions.
5. Confirm no general solution (with n) and no shifted inside angle appears.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on t15a's final frame.

## YouTube metadata (draft)

Title: Trig Equations with Multiple Angles: sin 2θ = k | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson11.sa.html

Over two hours a clock's minute hand makes two laps, so its tip reaches the same height four times, not two. That's the idea behind equations like sin 2θ = 0.5: widen the domain first, solve on it, then halve every answer. See why the graph's waves set the count (and when a line at a peak only touches), solve cos 2x = 0.3 in radians with a calculator, and watch a half angle shrink the domain. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Trigonometric identities and equations.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Solve equations involving trigonometric ratios of angles, specified in degrees or radians, on a restricted domain"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c

Builds on: Solving trig equations in a domain. Next: Trig equations that reduce to quadratics.

#Year11Maths #MathsAdvanced #TrigEquations #HSCScience

## Open decisions

- **1. The inside-angle colour (root).** Blue is the angle and teal the sine curve; the inside angle 2θ is marked by a teal outline box rather than a new colour. If the builder finds it too close to the sine curve at 400 px, use a dashed blue box instead. No narration change.
- **2. The half-angle scene (learning review).** Scene 5 is not in the site or the pack's stop line; it is included because the rule "do it to the domain" is clearer when it works both ways. If the voiced timing is long, it is the scene to cut (and key note 3's "double for θ/2" goes with it).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from t15a, t10 and t08; check that the clock's two laps make "widen first" feel caused, that the window map is followable at speed, that the k = 1 count case lands, and that the radian example is not rushed), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
