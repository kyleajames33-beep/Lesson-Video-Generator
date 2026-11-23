# Maths A11 C04: How do shrinking secants find the gradient of a curve? The secant through P(c, f(c)) and Q(c + h, f(c + h)), tables of gradients as h shrinks from both sides, a graphing app, and a corner where it fails (design)

Status: Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `w31.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,537 characters by script (see "Narration length estimate"), 13 scene headings, about 504 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-c04-learning-review.md` (summary `../checks/m-a11-c01-c18-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md`. Resolution log: `../checks/m-a11-c01-c18-learning-review-resolution.md`. Findings by the review's numbers:

1. Optional, open decision 2 (spreadsheet decimals): **kept as written** on the reviewer's advice (exact x³ values at 44 px); open decision closed.

Knock-on from c05 finding 1 (not a c04 finding): the Codex asset brief for `ma11-water-slide-v1.png` now asks for a smooth rounded join between the flat start platform and the steep drop, no sharp corner anywhere, and a drop that never reaches vertical, because c05 now says "This slide has neither". The plate is not yet painted. No narration, visual or number change; the c04 to c05 join is unchanged.

Narration unchanged at 5,537 characters by script, about 504 s with holds. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: thirty-fifth video of Year 11 Mathematics Advanced (2024), outline order 35, Introduction to differentiation. Pre-design pack: `../pre-design/maths-a11/math-a11-c04.md` (brief 243). Site lesson (read through the pack's quotations, read only): `introduction-to-differentiation/lesson13.sa.html` (SHA256 `bfaae610…5e33`; `we-1` table for x² at 2 and `we-2` x³ at 3 with h = 0.001 used with exact values; `we-3` |x| at 0 used). Route entry: `math-a11-c04` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the reused painted phone with a coded map and a coded graphing app (prefix `ma11-` for new plates; none new here except the handoff's water slide); every graph, secant, table and readout coded.

Owner rules applied: as c01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (phones and travel: a map app), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation; The derivative, and Graphical applications of the derivative), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci447b12b9`: "Examine the gradient of a curve at a point on the curve using graphing applications"
- `cif58445af`: "Approximate the gradient of a curve f(x) = x^n at a point P(c, f(c)) by considering the gradient of the secant through P and Q(c + h, f(c + h)) as the magnitude of h approaches zero, using graphing applications or a spreadsheet"
- `ci8fd626a1`: "Numerically estimate the value of the derivative at a point on the graph of a power of x, with and without the use of digital tools"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c03's final frame (the phone with a coded map, a winding road with a smooth bend and a sharp T-junction, a magnifier ring over the bend with "?"). Teaches: zooming in on a smooth curve makes it look like its tangent, so a curve has a gradient at a point (the reason tangents work); the secant through P(c, f(c)) and Q(c + h, f(c + h)) and its gradient (f(c + h) − f(c))/h (`cif58445af`); a spreadsheet-style table as h shrinks, positive and negative h, settling on one value (site `we-1`, x² at 2); by hand with h = 0.1 (`ci8fd626a1`, without digital tools) and with a spreadsheet and a graphing app's tangent tool (`ci447b12b9`, with digital tools); another power, x³ at 3 (site `we-2`), so "x^n" is not read as "x squared"; why h can't be 0 (0/0) and, in one sentence, why a calculator's h can't be too tiny; a corner, |x| at 0, where the two sides disagree (site `we-3`). Stops at numerical estimates. Not taught: the name f′ and notation (c05); the algebraic limit and first principles (c06); the pattern nx^(n − 1) (c07). The observation "each gradient is 4 + h" is stated from the table, not derived.

## Decisions

- **Anchor: zooming in on a map app (reused painted phone, coded map, live).** Zoom in on a bend and it straightens; zoom in on a junction corner and it stays a corner. That is exactly why a smooth curve has a gradient at a point (it looks like its tangent up close) and why |x| at 0 doesn't. Phones and travel; the pack's anchor 1. No Year 12 or w-strand design uses a map zoom (w11 uses a painted street map for coordinates, a different idea; Year 12 uses the phone plate for apps, so this is plate reuse, not a shared anchor; root ruling 6 of the w01 to w14 acceptance). The map is a diagram, so it is coded on the painted phone; no new plate.
- **Simulations (standard item 3).**
  1. **`MapZoom`** (scenes 1, 6; new part): a coded road map on the phone screen, the road a smooth curve with one bend and a separate T-junction corner; a continuous zoom about a chosen point (×1 to ×64, a scale bar shrinking from 200 m to 3 m), with a magnifier inset (`MagnifierLeader`). At the bend the road in the inset straightens visibly; at the junction the corner keeps its angle at every zoom.
  2. **`SecantPivot` with h** (scenes 2 to 5): P fixed at (2, 4) on y = x², Q at 2 + h driven by the table rows; the amber secant pivots and the readout matches the table row.
  3. **Spreadsheet table** (`StudioToolPanel`, table mode; scenes 3 to 5): columns "h", "f(2 + h)", "gradient", filling row by row, then a second block for negative h, then an x³ block.
  4. **`StudioOneSidedSecants`** (scene 6): on y = |x| at 0, right-hand secants (amber) stay at 1 and left-hand ones (amber, dashed) at −1 as h shrinks; the two readouts never meet.
  5. **`ScreenApp`** (scene 4): a coded graphing app on the reused phone; tapping the curve at x = 2 shows a violet tangent and "gradient 4".
- **Colour roles (fixed, as c01 to c03).** h and the run **blue**; the rise **teal**; secants **amber**; the tangent and the settled gradient **violet**; P ink; Q amber; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As c01. Hand tags: "looks straight", "h = step along", "rise ÷ h", "by hand", "4 + h", "from the right", "from the left", "both agree", "0 ÷ 0", "too tiny: rounding", "stays a corner", "never agree".
- **Stage changes (standard item 2).** The map zoom (1); P and Q on the curve (2); the table and pivoting secant (3); negative h and the app (4); the x³ table (5); the corner on the map and on |x| (6); framed card (7); question cards (8 to 11); the water slide (12); key notes (13).
- **Worked examples (g01 layout).** 3: site `we-1` (5, 4.5, 4.1, 4.01; site card adds 4.25 for h = 0.25, not used), h = 0.1 by hand. 4: negative h (3, 3.5, 3.9, 3.99), app check. 5: site `we-2`, x³ at 3 with h = ±0.001: 27.009001 and 26.991001, settling on 27 (the site's rounded "27.009" is written with its exact value; site correction logged). 6: site `we-3`, |x| at 0: 1 and −1, no gradient.
- **Memory aid.** Framed card: "Shrink h from both sides. Agree: that's the gradient. Disagree: there isn't one."
- **Visual surprise.** The road straightens under the zoom, and the secant swings onto the tangent in step with the table; at the junction, the zoom changes nothing.
- **Site notes (pack section 8).** lesson13's "at h = 10⁻¹⁴ a spreadsheet may return 0" is wrong (about 4.09; 0 only near 10⁻¹⁶): the narration says only "rounding errors take over" at about 10⁻¹⁴, and the screen tag shows "4.09…". `we-2`'s rounded values written with "=" are shown exactly (27.027009001, 27.009001). Both are in the decisions file for root to log.
- **Plain meanings at first use.** h ("the size of the step from P to Q"); spreadsheet (named, no brand); graphing application ("graphing software or a calculator app", recalled from w31); corner ("a sharp point where the graph changes direction suddenly").
- **Attempts (pack questions).** A1: x³ at P(1, 1) with h = 1, 0.1, 0.01, −0.01: 7, 3.31, 3.0301, 2.9701, about 3; crossed "f(0.1) instead of f(1.1)" ((0.001 − 1)/0.1 = −9.99). A2: x⁴ at 2, h = ±0.1: 34.481 and 29.679; the curve gets steeper, so the true gradient is between; crossed "−29.679" (sign of the negative run lost).
- **Mistake scene:** none separate. Setting h = 0 (5); only positive h (4, 6); too-tiny h on a calculator (5, one sentence); f(h) instead of f(c + h) (A1 crossed); a lost minus in the run (A2 crossed).
- **Cause chain taught, in order:** (1) zoomed in, a smooth curve looks straight, like its tangent, so it has a gradient at a point (1); (2) a secant from P to a nearby Q has a gradient we can calculate, rise over the step h (2); (3) as h shrinks, Q slides to P and the secant swings onto the tangent, so the gradients settle on the curve's gradient (3); (4) from the left as well as the right, and if both sides settle on the same number that is the gradient (4); (5) h can't be 0, because rise and run would both be 0 (5); (6) at a corner the two sides settle on different numbers, so there is no single tangent (6).
- **Entry knowledge (route):** c02 (shorter intervals give better speed estimates); w08 (evaluating f(c + h)); w30 (the corner of |x| at 0; corrected 23 Nov 2026 from "w29 and w30", coherence audit: only w30 has the corner).
- **Handoff (to math-a11-c05, "What is the derivative, and how do we write it?").** Scene 12: the water slide plate (`ma11-water-slide-v1.png`) side-on, with a coded dot riding its profile and a short violet tangent at the dot, readout "steepness here: ?"; chips "Next: a gradient for every x" and "?". This is c05's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) x² at 2: gradient = 4 + h exactly: h = 1, 0.5, 0.1, 0.01 give 5, 4.5, 4.1, 4.01; h = −1, −0.5, −0.1, −0.01 give 3, 3.5, 3.9, 3.99. By hand: 2.1² = 4.41; 0.41/0.1 = 4.1.
  (b) x³ at 3: 3.001³ = 27.027009001, gradient 27.009001; 2.999³ = 26.973008999, gradient 26.991001; exact 27.
  (c) Floating point (IEEE double): x² at 2 with h = 10⁻⁸: 3.99999998; 10⁻¹²: 4.00036; 10⁻¹⁴: 4.0856; 10⁻¹⁶: 0. The narration says "around ten to the minus fourteen, rounding errors take over".
  (d) |x| at 0: gradient |h|/h = 1 for h > 0, −1 for h < 0.
  (e) A1: 7, 3.31, 3.0301, 2.9701. Slip: (0.1³ − 1)/0.1 = −9.99. A2: 2.1⁴ = 19.4481, gradient 34.481; 1.9⁴ = 13.0321, (13.0321 − 16)/(−0.1) = 29.679; exact 32; slip −29.679.
  (f) Map: the road's bend is a smooth cubic spline; the junction is two straight roads meeting at 90°. Zoom about a point on the spline; the inset's straightness is computed (curvature × zoomed half-width shrinking), not faked.
  (g) Pronunciations: "f of c plus h"; "h equals minus zero point zero one"; "twenty-seven point zero zero nine" (said "about"); "ten to the minus fourteen"; "x to the fourth".
  (h) Windows: x² plot x 0 to 3.5, y 0 to 10; |x| plot x −2 to 2, y −0.5 to 2; A2 picture x 1 to 3, y 0 to 40.

Main question: *Zoom in on a bend on a map and it straightens. How do shrinking secants find the gradient of a curve, with numbers?*
Entry knowledge (c02, w08, w30): shorter intervals improve an estimate; f(c + h) by substitution; the corner of |x|.
Stops after: the secant through P(c, f(c)) and Q(c + h, f(c + h)); tables as h shrinks from both sides, by hand, with a spreadsheet and an app; x² and x³; h ≠ 0; a corner with no gradient. No f′, no algebraic limit, no rule.
Handoff: math-a11-c05: "the water slide: a steepness at every point: one new function?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): h and run blue; rise teal; secants amber; tangent violet; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: zoom in on the bend
> Here's that map. This road winds round a bend. Now zoom in on one point of the bend, and keep **zooming**. The more you zoom, the straighter the road looks, until it's almost a straight line. That's true of any smooth curve. Up close, it looks like its **tangent**. So the gradient of a curve at a point is the gradient of that tangent. A sharp corner is different, and we'll come back to that. But a hand-drawn tangent is only an estimate. How do shrinking secants find the gradient of a curve, with numbers?

Visual: opens on c03's final frame exactly (the phone `maths/ma12-phone-v1.png` with the coded map, the winding road, the T-junction, the magnifier ring over the bend with "?", chips "Next: the gradient of a curve, exactly" and "?"). On the first sentence the chips fade; heading "Gradient at a point, with numbers?". On "zooming" `MapZoom` zooms about a point on the bend, ×1 → ×64, the scale bar shrinking "200 m → 3 m"; the inset's road straightens, hand tag "looks straight". On "tangent" a violet line fades in along the zoomed road, matching it. The chip "Find the gradient, exactly?" moves to the top right.

### 2. P and Q
> Take the curve y equals x squared, and the point P where x is two, so P is two, **four**. Now take a second point Q, a small step further along. We'll call the size of that step h. It's usually small, but it can be any size. Q's x value is two plus h, and its y value is f of two plus **h**. The gradient of the secant PQ is the rise over the run. The rise is f of two plus h, minus f of two. The run is just **h**. Why a small step? Because the closer Q is to P, the more the secant looks like the tangent. In general, at a point P, c, f of c, the secant gradient is f of c plus h, minus f of c, all over h. It's the same idea as the car's averages, with h as the extra time.

Visual: clear change to a large plot (x 0 to 3.5, y 0 to 10; 1,100 × 760 px), the phone as a 240 px badge at the top left showing the straightened road. On "four" P (2, 4) rings in ink. A blue bracket "h" along the x axis from 2; on "h" (first bold) Q (2 + h, f(2 + h)) marks amber with the label "Q(2 + h, f(2 + h))", hand tag "h = step along". The amber secant draws. On "h" (second bold) legs: run "h" (blue), rise "f(2 + h) − f(2)" (teal). Row, 52 px: "gradient of PQ = (f(2 + h) − f(2))/h"; then the general strip, 44 px: "P(c, f(c)), Q(c + h, f(c + h)): (f(c + h) − f(c))/h", hand tag "rise ÷ h". A grey chip "c02: average from t to t + a little".

### 3. the table: h shrinks
> Let's fill a table, the way a spreadsheet would. It can do this instantly for any h you like. With h equals one, Q is at three, nine. The rise is nine minus four, which is five, over a run of one, so the gradient is **five**. With h equals a half, it's four point **five**. With h equals zero point one, you can do it by hand. Two point one squared is four point four one. Take away four to get zero point four one, then divide by zero point one, to get four point **one**. With h equals zero point zero one, it's four point zero **one**. As h shrinks, Q slides towards P, the secant swings onto the tangent, and the gradients close in on **four**. Notice something. Every gradient in the table is exactly four plus h. As h heads to zero, four plus h heads to four.

Visual: stage change: the plot at the left (900 × 700 px), the spreadsheet panel at the right (`StudioToolPanel`, rows 44 px, columns "h" blue, "f(2 + h)", "gradient" amber). On "five" row "1 | 9 | 5" and Q at (3, 9). On "five" (second) row "0.5 | 6.25 | 4.5", Q slides in. On "by hand" the h = 0.1 row writes as working beside the table, 52 px: "2.1² = 4.41", "4.41 − 4 = 0.41", "0.41 ÷ 0.1"; on "one" "= 4.1", hand tag "by hand". On "one" (second) row "0.01 | 4.0401 | 4.01". On "four" the secant lands on the violet tangent, the gradient column's arrow "→ 4" (violet). On "Notice something" each gradient gains a grey "= 4 + h" beside it, hand tag "4 + h".

### 4. negative h, and a graphing app
> h can be negative too. Then Q sits to the left of P, and the run is negative. With h equals minus one, the gradient is three. Then three point five, three point nine, and three point nine **nine**. These close in on four from below. Notice the right-hand values are all above four, and the left-hand values all below. When both sides close in on the same number, that number is the gradient of the curve at P. Checking both sides matters, as we'll see in a moment. A graphing app does the same job. Tap the curve at x equals two, and its tangent tool shows a gradient of **four**. The table, the picture and the app all agree.

Visual: the same stage; a second block in the table, "h < 0": rows "−1 | 1 | 3", "−0.5 | 2.25 | 3.5", "−0.1 | 3.61 | 3.9"; on "nine" "−0.01 | 3.9601 | 3.99". Q (amber) slides in from the left of P, hand tags "from the right" (upper block) and "from the left" (lower block), and on "same number" both arrows "→ 4" ring together, hand tag "both agree". On "A graphing app" the plot slides left and the reused phone (520 px) slides in with `ScreenApp`: y = x² drawn on its axes; a tap at x = 2 draws a violet tangent, and on "four" its readout "gradient 4" appears.

### 5. another power, and why h can't be zero
> This works for any power of x, not just squares. Take y equals x cubed, at x equals three. With h equals zero point zero zero one, a spreadsheet gives a secant gradient of about twenty-seven point zero zero **nine**. With h equals minus zero point zero zero one, it gives about twenty-six point nine nine **one**. Both sides close in on twenty-seven. So a spreadsheet, or a few lines on a calculator, gives a very good estimate. So why not just put h equal to zero? Then Q lands on P, the rise and run are both zero, and zero over zero isn't a **number**. h has to be small, but never zero. And don't make it too tiny on a calculator, either. Around ten to the minus fourteen, rounding errors take **over**.

Visual: clear change: the spreadsheet panel full width (1,500 px) with a small plot of y = x³ at the right (x 2.5 to 3.5). Task strip, 44 px: "Estimate the gradient of y = x³ at x = 3." Rows, 44 px: on "nine" "0.001 | 27.027009001 | 27.009001"; on "one" "−0.001 | 26.973008999 | 26.991001"; arrow "→ 27" (violet). On "number" a row "h = 0: (27 − 27)/0 = 0 ÷ 0" writes and is crossed in red, caption "h ≠ 0". On "over" a grey row "h = 10⁻¹⁴ (x² at 2): 4.09…, not 4" with hand tag "too tiny: rounding".

### 6. a corner: the two sides disagree
> Here's where it fails. Remember the junction on the map? Zoom in as far as you like, and the corner stays a **corner**. The graph y equals the absolute value of x has a corner at zero. Secants from the right all have gradient one, because the right arm is the line y equals x. Secants from the left all have gradient minus **one**. However small h gets, the two sides never agree. So there's no single tangent, and no gradient at **zero**. Compare that with x squared at two, where both sides gave four. A curve has to be smooth at the point, with no corner, for this to work. That's why we always check both sides.

Visual: stage change. Left: the phone badge (360 px) with `MapZoom` on the junction, ×1 → ×64; on "corner" the inset's right angle is unchanged, hand tag "stays a corner". Right: y = |x| (x −2 to 2; 900 × 640 px) with `StudioOneSidedSecants`: right-hand amber secants for h = 1, 0.1, 0.01 all lying on y = x, readout "from the right: 1"; on "one" left-hand dashed secants on y = −x, readout "from the left: −1". On "zero" the two readouts flash side by side with "≠", hand tag "never agree", and a row 52 px "no single tangent at x = 0: no gradient" (green frame). A grey chip "w30: y = |x|".

### 7. memory aid
> Here's the summary. Shrink h from both sides. If both sides settle on the same number, that's the gradient. If they don't, there **isn't** one. And never set h to zero.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the secant swinging onto the tangent from both sides, then the |x| corner with two amber secants. Main line, hand font 60 px: "Shrink h from both sides." On "isn't" the key line, 36 px: "agree: that's the gradient. disagree: there isn't one. never h = 0." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. For f of x equals x cubed, at P, one, one, find the gradient of the secant PQ for h equals one, zero point one, zero point zero one, and minus zero point zero one. Use your results to estimate the gradient of the curve at P. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "For f(x) = x³ at P(1, 1), find the gradient of the secant PQ for h = 1, 0.1, 0.01 and −0.01. Use your results to estimate the gradient of the curve at P." The full question stays on screen. Picture: an empty spreadsheet panel with column heads "h", "f(1 + h)", "gradient". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> With h equals one, Q is at two, eight, so the gradient is seven over one, **seven**. Then three point three one, three point zero three zero one, and two point nine seven zero **one**. They close in on three from both sides, so the gradient at P is about **three**. Using f of zero point one instead of f of one point one is the slip. Q is at c plus h, not at **h**.

Visual: the card shrinks to the top (30 px). The panel fills: on "seven" "1 | 8 | 7"; then "0.1 | 1.331 | 3.31", "0.01 | 1.030301 | 3.0301"; on "one" "−0.01 | 0.970299 | 2.9701". On "three" arrow "→ 3" and framed answer (green): "about 3". On "h" a red slip "(0.1³ − 1)/0.1 = −9.99" writes and is crossed, caption "use f(c + h) = f(1.1)". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Estimate the gradient of y equals x to the fourth at x equals two, using h equals zero point one and h equals minus zero point one. Explain why the true value lies between your two answers. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Estimate the gradient of y = x⁴ at x = 2 using h = 0.1 and h = −0.1. Explain why the true value lies between your two answers." Picture: y = x⁴ from x = 1 to 3 with P at (2, 16) marked, no secants. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> With h equals zero point one, the gradient is thirty-four point four eight **one**. With minus zero point one, it's twenty-nine point six seven **nine**. The curve gets steeper as x increases, so the right-hand secant is too steep, and the left-hand one is too shallow. The true gradient is in between. A minus sign on the second answer is the slip. Dividing by minus zero point one makes it **positive**.

Visual: the card shrinks to the top. Rows, 44 px: on "one" "(2.1⁴ − 16)/0.1 = (19.4481 − 16)/0.1 = 34.481" with the right-hand amber secant on the picture; on "nine" "(1.9⁴ − 16)/(−0.1) = (13.0321 − 16)/(−0.1) = 29.679" with the left-hand secant. On "steeper" the violet tangent at P draws between the two secants, hand tags "too steep" and "too shallow". Framed answer (green): "34.481 and 29.679; true value between (the curve steepens)". On "positive" a red slip "−29.679" writes and is crossed, caption "negative ÷ negative = positive". Hold about 1 s.

### 12. handoff
> So at each point of a smooth curve, the secants settle on one number. Here's a water slide. Every point along it has its own steepness. What if we collected all of those numbers into one new function, so each x gets its own gradient? Next, the **derivative**.

Visual: the memory line shows small at the top (30 px), then fades. The water slide plate `ma11-water-slide-v1.png` (1,300 px wide) side-on; a coded dot rides down its profile with a short violet tangent, readout "steepness here: ?". On "derivative" chips "Next: a gradient for every x" and "?". Hold about 2 s. This is c05's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Secant through P(c, f(c)) and Q(c + h, f(c + h)): gradient (f(c + h) − f(c))/h.
- As h → 0 (from both sides), the secant gradients approach the gradient at P.
- Use positive and negative h. Never h = 0 (0 ÷ 0).
- x² at 2: 5, 4.5, 4.1, 4.01 … → 4.
- A corner (|x| at 0): the sides disagree, so no gradient.

Memory aid (framed card, right side, as in scene 7): *Shrink h from both sides.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and c05's opening frame.

## Teaching checks

- **Does it explain causes?** Why a curve has a gradient at a point: it looks straight up close (1). Why the secant's gradient approaches it: Q slides to P and the secant swings onto the tangent (3). Why both sides: a corner fools one side (4, 6). Why not h = 0: 0 ÷ 0 (5). Why A2's true value lies between: the curve steepens (A2).
- **Misconceptions addressed:** h = 0 (5 crossed); only positive h (4, 6); tiniest h is best (5); f(h) for f(c + h) (A1 crossed); dividing by c (2: "the run is just h", strip "rise ÷ h"); sign slips with negative h (A2 crossed).
- **Visual standard, item by item:** 1 the painted phone with the live map zoom from the first frame; 2 a new stage every 30 to 55 s; 3 `MapZoom`, `SecantPivot` with the table, `StudioOneSidedSecants`, the app; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 3 and 5; 8 framed card and five bullets; 9 the road straightening and the junction refusing to.
- **One idea at a time:** P and Q (2), shrinking h (3), both sides and the app (4), another power and h ≠ 0 (5), the corner (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 30 s.
- **Avoided double teaching:** shorter intervals (c02) and |x| (w30) are recalled in one sentence each; "4 + h" is observed from the table, not proved (c06 proves it).
- **Syllabus coverage:** `cif58445af` (2, 3, 4, 5, A1, A2; key notes 1 to 4); `ci8fd626a1` (3 by hand, 5 with a spreadsheet, A1, A2); `ci447b12b9` (1, 4 app, 6).
- **Out of scope by design:** f′ and notation (c05); first principles (c06); nx^(n − 1) (c07).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "For f(x) = x³ at P(1, 1), find the gradient of the secant PQ for h = 1, 0.1, 0.01 and −0.01. Use your results to estimate the gradient of the curve at P."
Model answer: h = 1: (8 − 1)/1 = 7. h = 0.1: (1.331 − 1)/0.1 = 3.31. h = 0.01: (1.030301 − 1)/0.01 = 3.0301. h = −0.01: (0.970299 − 1)/(−0.01) = 2.9701. The values close in on 3 from both sides, so the gradient at P is about 3. Classic mistake (crossed): "(0.1³ − 1)/0.1 = −9.99".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "Estimate the gradient of y = x⁴ at x = 2 using h = 0.1 and h = −0.1. Explain why the true value lies between your two answers."
Model answer: h = 0.1: (2.1⁴ − 16)/0.1 = 34.481. h = −0.1: (1.9⁴ − 16)/(−0.1) = 29.679. The curve gets steeper as x increases, so the right-hand secant is steeper than the tangent and the left-hand secant is shallower; the gradient at x = 2 lies between them. Classic mistake (crossed): "−29.679".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| P | (2, 4) on y = x² | 2 to 4 |
| h > 0 | 1, 0.5, 0.1, 0.01: f = 9, 6.25, 4.41, 4.0401; gradients 5, 4.5, 4.1, 4.01 (= 4 + h) | 3 |
| h < 0 | −1, −0.5, −0.1, −0.01: f = 1, 2.25, 3.61, 3.9601; gradients 3, 3.5, 3.9, 3.99 | 4 |
| App | gradient 4 at x = 2 | 4 |
| x³ at 3 | ±0.001: 27.027009001, 26.973008999; 27.009001, 26.991001 → 27 | 5 |
| Rounding | x² at 2, h = 10⁻¹⁴: about 4.09 | 5 |
| \|x\| at 0 | right 1, left −1 | 6 |
| A1 | 7, 3.31, 3.0301, 2.9701 → 3; slip −9.99 | 8, 9 |
| A2 | 19.4481, 34.481; 13.0321, 29.679; slip −29.679; true 32 (author only) | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 and Python floats (16 Nov 2026, scratchpad `c01c09/verify.py`); Codex to re-check.

- ((2 + h)² − 4)/h = 4 + h: h = 1, 1/2, 1/10, 1/100, −1, −1/2, −1/10, −1/100 give 5, 9/2, 41/10, 401/100, 3, 7/2, 39/10, 399/100.
- 3.001³ = 27027009001/10⁹; (3.001³ − 27)/0.001 = 27.009001; (2.999³ − 27)/(−0.001) = 26.991001.
- Floats: h = 10⁻⁸: 3.99999998; 10⁻¹²: 4.000356; 10⁻¹⁴: 4.08562; 10⁻¹⁶: 0.0.
- |h|/h = ±1.
- A1: 7, 331/100, 30301/10000, 29701/10000; slip (1/1000 − 1)/(1/10) = −999/100.
- A2: 2.1⁴ = 19.4481; 34481/1000; 1.9⁴ = 13.0321; 29679/1000; d/dx x⁴ at 2 = 32.

## Memory aid check

- **"Shrink h from both sides."** Original. Meaning, as said in scene 7: take secants from P with smaller and smaller steps h, on the right (h > 0) and on the left (h < 0); if both sets of gradients settle on the same number, that number is the gradient at P; if they settle on different numbers, there is no gradient there. Assumptions checked: the function is defined near P on both sides; "settle" is the limit idea (named in c06); a numerical table suggests the value, it does not prove it. It helps a new case: |x − 3| at 3 gives 1 and −1, so no gradient. Introduced after scenes 3 to 6.
- **Considered, not used:** "Zoom until it's straight" (kept as the anchor's picture, not the card).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,537 characters (Revision 2, unchanged). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the zooms, the table filling, the app tap) and the 45 s notes scene: about 504 s. Characters per scene (1 to 13): 501, 664, 745, 618, 691, 603, 164, 257, 350, 221, 393, 255, 75. Speech before the notes is about 411 s, 66 s under the 570 s cap. Feedback speech: about 26 s and 30 s.

Reserve trims if the voiced take runs long: scene 2's last sentence (the car link); scene 5's calculator sentence (keep the grey row).

## Scene list and build ids

Lesson key `m-a11c04` (route math-a11-c04). Explainer folder `src/explainer/lessons/math-a11-c04`; build inputs in `docs/production/claude-pm/lessons/math-a11-c04/` (at voicing).

In order (13 scene headings): hook-map, p-and-q, table-positive, table-negative-app, cube-and-h-zero, corner, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | c03's frame; the map zoom |
| 35 to 80 s | 2 | P and Q on y = x² |
| 80 to 140 s | 3 | Table, h > 0, by hand, pivoting secant |
| 140 to 180 s | 4 | Table, h < 0; the app |
| 180 to 225 s | 5 | x³ at 3; h ≠ 0; rounding |
| 225 to 265 s | 6 | The junction and \|x\| |
| 265 to 280 s | 7 | Framed memory card |
| 280 to 395 s | 8 to 11 | Question cards and countdowns, then feedback |
| 395 to 415 s | 12 | The water slide |
| 415 to 460 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c03's last frame continues into 1; 1 to 2 clear change; 2 to 3 stage change; 3 to 4 continuous; 4 to 5 clear change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-c04-learning-review.md`, `science_check` = `checks/m-a11-c04-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): `maths/ma12-phone-v1.png` (plain phone, blank screen) is reused for the map and the app; `ma11` street map plate (w11's brief) is a top-down town grid, not a winding road, and is not reused. No water slide plate exists.

Need (painted, new; see the Codex asset brief): `ma11-water-slide-v1.png` (this video's handoff and c05). Reused: `maths/ma12-phone-v1.png`.

Coded: the map, the zoom and inset, every plot, secant, table and readout, the app screen, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `SecantPivot` (c01 addition), `StudioToolPanel` (table mode), `MagnifierLeader`, `StudioOneSidedSecants`, `ScreenApp`, `PlateImg`, `HandTag`, `WorkingBoard`, `TaskStrip`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`MapZoom`** (new): a coded road map clipped to the phone screen (a smooth spline road and a right-angled junction), zoomed continuously about a frame-driven centre (×1 to ×64) with a scale bar and an optional inset. Check: the spline's deviation from its tangent across the inset shrinks as the zoom grows (computed), and the junction's angle stays 90° at every zoom.

## Codex asset brief (Maths A11 C04, a water slide; also c05)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c04.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c04 build (its final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-water-slide-v1.png` (2400 × 1200 px): an open water-park slide seen exactly side-on, a single smooth chute: a short flat start platform at the top left whose join into the steep drop is a smooth rounded bend (no sharp corner anywhere along the chute: c05 tells students this slide has no kink), a steep drop that never reaches vertical, a long gentle middle that flattens, then a dip into a splash pool at the bottom right; supporting posts beneath; a little water running in the chute. Side-on so its top edge reads as a clean curve the code can trace (sidecar).

Sidecar JSON (`ma11-water-slide-v1.json`): 24 to 40 points along the chute's top edge in image pixels, left to right, for c05's rider and the coded profile. Report inspection on the paper background (`#f6f1e7`) at 600 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c04-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS (and floats for the rounding row), and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the route-inputs JSON exactly.
3. Confirm both positive and negative h are used, and h = 0 appears only as the crossed row.
4. Confirm the site's rounded `we-2` values and the "returns 0 at 10⁻¹⁴" claim are not copied (site findings).
5. Confirm "4 + h" is observed from the table only; no first-principles algebra and no f′ notation appear.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c03's final frame.

## YouTube metadata (draft)

Title: Shrinking Secants: The Gradient of a Curve at a Point | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson13.sa.html

Zoom in on a bend on a map and the road straightens out. That's why a curve has a gradient at a point. Find it with numbers: take the secant from P(c, f(c)) to Q(c + h, f(c + h)), shrink h from both sides in a table, by hand or with a spreadsheet, and check with a graphing app. See why h can never be zero, and why a corner like y = |x| at 0 has no gradient. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Examine the gradient of a curve at a point on the curve using graphing applications"
"Approximate the gradient of a curve f(x) = x^n at a point P(c, f(c)) by considering the gradient of the secant through P and Q(c + h, f(c + h)) as the magnitude of h approaches zero, using graphing applications or a spreadsheet"
"Numerically estimate the value of the derivative at a point on the graph of a power of x, with and without the use of digital tools"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: Instantaneous speed; rates from real-world graphs. Next: The derivative and its notation.

#Year11Maths #MathsAdvanced #Differentiation #HSCScience

## Open decisions

- **1. The corner here or in c05 (pack decision).** Kept here as the two-sided check, because the map's junction makes it visual; c05 recalls it in one sentence when the definition needs "if the tangent exists".
- **2. Spreadsheet decimals.** The x³ rows show exact values (27.027009001) to avoid the site's rounded equals; if the learning review finds them too long on screen, show "27.00900…" with an ellipsis, never a rounded equals. **Settled by the learning review (Revision 2):** keep the exact values at 44 px.

## Review notes

- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" at the top). Next: the Codex maths check and error check (brief 248), then voicing on the Google voice and a build on the studio kit to grade A, with a learning check on the exact voiced preview.
- Revision 1 has had no independent review. Next: student learning review (trace from c02 and w08; check that the zoom makes "a curve has a gradient at a point" convincing, that h is understood as a step, that both sides are seen to agree, and that the corner's disagreement is seen), then the Codex maths check and error check, then voicing and a build to grade A.
