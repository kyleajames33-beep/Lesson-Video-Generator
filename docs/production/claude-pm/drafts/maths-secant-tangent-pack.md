# How can a curve have a slope at one point?

Unrecorded preproduction pack, author draft 1, 25 October 2026. Candidate identity: `maths-bridge-secant-tangent`. This is a Year 11 calculus bridge for HSC readiness, with a complete explanation and supplied-formula transfer practice. It is not a designated first lesson of Year 12 or the existing 15-second familiarity demo.

Status: ready for independent mathematics and student-learning review. Formal schema 4 production brief, registered lesson source and route placement remain pending. No narration, implementation, site work, paid media or render is included. This pack does not pass a recording or release gate.

## Teaching brief

**One learner question:** How can a curve have a slope at one point?

**Useful outcome:** explain how slopes through two distinct nearby curve points can approach one limiting slope, then use a supplied secant-slope expression to identify a tangent slope without dividing by zero.

**Entry knowledge:** ordered coordinates, substitution into `y = x²`, signed subtraction, division and common factors. The needed binomial expansion is shown. Limits, secants, tangent slope and derivative notation are introduced here. No differentiation rule or point-gradient equation is assumed. S02/S03 provide a straight-line gradient check and reminder. The learner can pause and replay that reminder; exact links to any further algebra support remain to be selected.

**Start:** a line's gradient uses two distinct points; a curve changes direction. **Stop:** at P = (2, 4) on `f(x) = x²`, the nonzero-separation secant slope `4 + h` tends to 4 from both sides. This is the tangent slope and `f′(2)`. Transfer uses a supplied expression at a new point.

**Scope:** omit the general `f′(x) = 2x` derivation, tangent equations, normals and applications. Next lesson: *How can one calculation give the slope at every point?* Tangent equations need a later point-gradient-form handoff.

**Cohort checked 25 October:** NESA places *Introduction to differentiation* in Year 11. Its 2024 syllabus overview specifies Year 12 teaching from Term 4, 2026, and first HSC examination in 2027. Therefore this is a Year 11 foundation/bridge, not a promised Year 12 course opener. Sources: [NESA implementation and overview](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview), [NESA course structure](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview/course). Exact outcome/content-point mapping and school sequence remain formal-brief work. No official assessment or marking scheme is claimed.

## Visual system and real capability gap

Applied AGENTS.md, the teaching/visual brief template, teaching templates, student-learning review, animation planning, production research and implementation plan, motion standard and preview-first workflow. The independent Physics/Maths assessment review identifies the site's contact-count definition and coincident-point wording as unsuitable. This script uses a limiting local direction instead.

Inspected the actual Maths kit and README, pilot source, six desktop/phone stills and independent Maths kit review. The fixed rise/run overlay now guards `a = 2`. This is source/still inspection, not a new playback pass.

Render through `src/explainer` using the existing paper, fonts, ink, blue curve and dark amber emphasis. The top AGENTS.md frozen-legacy rule supersedes older documents' legacy renderer references. Preserve the existing kit's visual system.

| Element | Decision and teaching fit |
| --- | --- |
| `square`, `graphPoint`, exact quadratic Bezier | Reuse the correct square-function geometry and whole-graph reference, x from 0 to 4 and y from 0 to 10. |
| `CoordinateAxes` | Reuse at whole-graph scale. Magnification needs an adjusted transform and recalculated tick labels. |
| `SquareGraph` moving tangent | Reference only before the conclusion: it draws a tangent already. It cannot demonstrate a secant approaching a limiting direction. |
| Fixed final rise/run triangle | Reuse geometry only at `a = 2`, after the explanation. Its extra point is R = (3, 8) on the tangent. The component's tangent-equation legend needs an explicit omit option, or the same geometry must be composed in the new plot. No opaque masking is approved. |
| `AlignedAlgebra` | Reuse stable equals columns with only the current two or three rows supplied per scene. Enlarge the algebra stage rather than shrinking text. |
| New exact secant and local view | Missing: fixed P, distinct curve point Q, exact joining line, signed coordinate-change legs, current h/slope and clearly labelled magnification. This is a required implementation gap, not an existing approved asset. |
| Shared `Countdown` and stable question card | Reuse for the 10-second entry check and 25-second practice hold. |

### Mathematical visual contract

During teaching keep P = (2, 4) fixed. For every nonzero h, Q = (2 + h, (2 + h)²). The secant slope is `[(2 + h)² - 4]/h = 4 + h`; its line is internally `y = 4 + (4 + h)(x - 2)`. The line formula is not learner copy. Curve, points, line and triangles share one exact coordinate transform. The screen angle is not the numerical slope; this pure coordinate example has no physical units.

Use h = 1, 0.5, 0.1, 0.01 on the right and h = -0.5, -0.1, -0.01 on the left. Stop at nonzero values. Never interpolate a secant through h = 0 or render a coincident-point secant. Reset between sides by retiring Q and introducing the new left-side case.

For h = 0.01 and -0.01, use a labelled local view magnified 10 times about P: multiply both screen scales by 10 and recalculate the ticks. Retain a whole-graph thumbnail marking the viewed region. Suppress any whole-graph Q marker that would visually merge with P; show the distinct pair in the local view. Do not invent a minimum point separation and present it as exact. Introduce the tangent separately after the limit argument.

## Exact narration and scene plans

Only blockquotes are narration. Cue phrases are alignment anchors, not approved frame timings. Allow roughly 8 to 10 minutes including holds, then measure the selected delivery. The complete source below must be reviewed before recording.

### S01. A slope with only one point

> The line joining two points has a slope. But a curve keeps changing direction. So what could its slope at just one point mean? We'll work it out on y equals x squared, at the point two, four. We'll call this squaring rule f.

**Board:** opening question, `y = f(x) = x²`, exact curve, P = (2, 4). No second point, tangent or slope answer.

**Plan:** new plot in its curve-only state, reusing exact geometry. `motionRole: explain`. On “curve keeps changing direction”, draw the curve; on “two, four”, mark and label P. Tools: exact path draw-on, coordinate callout, explainer shell. Hold one second. Transition: bring the entry card forward while the curve dims.

### S02. Entry check

> Here are two points on a straight line. A is zero, one, and B is two, five. Its gradient means its slope. Work out the vertical change divided by the horizontal change. Pause here to answer.

**Exact card:** “A straight line passes through A = (0, 1) and B = (2, 5). Find its gradient. Use vertical change divided by horizontal change.” Reference: `m = (yB - yA)/(xB - xA)`. Show the points and line, without substituted values, labelled numerical legs or solution.

**Plan:** reuse axes plus simple line/point overlay. `motionRole: hold` for response. Labels arrive with their names. After speech, hold the entire stable card and line for a quiet **10-second shared countdown**. Keep every condition visible; hide all answer text, captions and thumbnails. Tools: point labels, question card, `Countdown`. Transition: preserve the same card for feedback.

### S03. Entry feedback

> The vertical change is five minus one, which is four. The horizontal change is two minus zero, which is two. So the gradient is four divided by two, or two. Keep the order the same in both differences, so they describe the same move from A to B. We'll use that calculation on the curve.

**Board:** cue-led `Δy = 5 - 1 = 4`, `Δx = 2 - 0 = 2`, `m = 4/2 = 2`. Plain labels explain delta as “change”. Offer “Pause or replay this reminder” after the result.

**Plan:** reuse aligned working and coded legs. `motionRole: explain`. Point at each leg when its coordinate difference is spoken. Tools: `AlignedAlgebra`, leg draw-on, current highlight. Hold two seconds. Retire this entire example and its answer before restoring the curve and P.

### S04. A secant measures between points

> Put a second point on our curve, at three, nine. Join it to P with a straight line. This is a secant: a line through two distinct points on the curve. From P to Q, the height changes by nine minus four, five. The horizontal change is three minus two, one. So this secant has slope five. It measures the change between the points. We haven't yet found the curve's slope at P alone.

**Board:** short task “Slope at P = (2, 4)?” Separate givens `y = x²`, Q = (3, 9). Reveal `m_sec = (9 - 4)/(3 - 2) = 5` in its own working region. Gloss “secant: through two distinct curve points”. No tangent.

**Plan:** new exact secant on reused curve/axes. `motionRole: explain`. Mark Q on “three, nine”, draw the joining line on “join”, then construct each change leg only when named. Tools: curve points, exact secant, coordinate-change labels, aligned substitution. Hold two seconds with slope 5 and the interval visible. Keep P and Q into S05.

### S05. Let h name the separation

> Let h stand for the horizontal change from P to Q. When h is one, Q's x coordinate is two plus one. When h is a half, it's two plus a half. P stays fixed. For a secant, h cannot be zero: the two curve points must stay distinct, and its slope calculation divides by h.

**Board:** P = (2, 4) stays fixed. Introduce Q = (2 + h, (2 + h)²) one coordinate at a time. Label the horizontal change h, and keep `h ≠ 0` with “two distinct points”. Show only the current numerical case.

**Plan:** new secant controls, reusable coordinate maths. `motionRole: explain`. Move Q and its line together from h = 1 to 0.5; anchor P and lead the h label to the horizontal change. Tools: exact point/line updates, labelled leg, point pulse. Hold two seconds on the meaning of h. Continue the same case.

### S06. Nearby slopes from the right

> As Q moves closer from the right, the slopes fall from five, to four point five, to four point one. A magnified view lets us keep both points visible. When h is a hundredth, the slope is four point zero one. The points are still different. These numbers suggest four. Let's use algebra to find out exactly why.

**Board:** build the small h/slope table on cue: `(1, 5)`, `(0.5, 4.5)`, `(0.1, 4.1)`, `(0.01, 4.01)`. Keep the current row bright and earlier rows quiet; do not show “limit = 4” yet. Numerically worked Q coordinates can be retired before the last small separation rather than shrunk.

**Plan:** new exact secant and labelled 10-times local view. `motionRole: explain`. Animate within the positive-h range, stop at 0.1, then establish the local view before showing 0.01. Both point markers remain distinct under the stated transform. Tools: coupled point/line update, current-row reveal, region box, anchored zoom. Hold two seconds at 0.01. Transition: move the current quotient to a larger algebra stage; retain only a small P/Q reference.

### S07. Explain the numerator

> The second point's height is two plus h, all squared. Subtract the first height, four, and divide by the horizontal change, h. To expand that square, multiply two plus h by two plus h. That gives four plus four h plus h squared. Subtracting the first height removes four. The numerator is now four h plus h squared.

**Board, one stage at a time:**

1. `m_sec(h) = [(2 + h)² - 4]/h`, with h nonzero beside the formula. Link the numerator's two heights to Q and P.
2. Small expansion support: `(2 + h)(2 + h) = 4 + 2h + 2h + h² = 4 + 4h + h²`. Use two cue-led rows if needed; do not squeeze this beside the whole lesson table.
3. `m_sec(h) = [4 + 4h + h² - 4]/h = (4h + h²)/h`. Mark the two constant 4 terms cancelling on “removes four”.

**Plan:** adjust `AlignedAlgebra` by supplying these current rows, not all old working. `motionRole: explain`. The large algebra stage replaces the numerical slope table. Retain `y = x²`, P and symbolic Q as the only reference facts. Tools: aligned rows, matching height/point callouts, expansion highlights, constant cancellation. Hold two seconds on the simplified numerator. Transition: keep that fraction for factoring.

### S08. Cancel only a nonzero h

> Both numerator terms contain h, so factor out h. The fraction is h times four plus h, divided by h. Because the second point is distinct, h is nonzero, and that common factor can be cancelled. Every one of these secant slopes equals four plus h. As h gets closer to zero, the slope gets closer to four.

**Board:** `(4h + h²)/h = h(4 + h)/h`, then `m_sec(h) = 4 + h, h ≠ 0`. Circle the common factor h, not the h inside the bracket. Keep the nonzero condition attached through cancellation. Retain the original quotient as a small reference, not a competing worked paragraph.

**Plan:** reuse aligned board and exact secant reference. `motionRole: explain`. Factor first, then cancel matching common factors at the spoken reason. Tools: factor highlight, coded cancellation marks, result reveal. Hold two seconds. The new result replaces the earlier expansion history. Transition: restore the whole-graph reference for a left-side approach.

### S09. Approach from the left as well

> A negative h places Q to the left of P. Moving from P back to Q makes both coordinate changes negative, so their ratio is positive. At h equals minus a half, the slope is three point five. At minus a tenth, it's three point nine. At minus a hundredth, it's three point nine nine. These slopes approach four from below.

**Board:** keep `m_sec(h) = 4 + h, h ≠ 0`. At h = -0.5, show Q = (1.5, 2.25), `Δy = -1.75`, `Δx = -0.5`, and their ratio 3.5. Retire those numerical differences before displaying the next cases. Build left-side rows `(-0.5, 3.5)`, `(-0.1, 3.9)`, `(-0.01, 3.99)`.

**Plan:** new secant overlay, whole plot then labelled local view for -0.01. `motionRole: explain`. Retire positive Q before introducing negative Q: do not animate across zero. During each negative-h move, keep P anchored and update the exact joining line. Tools: semantic case reset, signed legs, current-row table, magnified view. Hold two seconds. Transition: compare the two approach directions on a compact limit board.

### S10. A limit is an approach, not division by zero

> Four plus h differs from four by exactly h. So we can make the slope as close to four as we want by taking smaller nonzero steps, from either side. That is a limit: the value the slopes approach. We write the limit as h approaches zero is four. The expression four plus h is defined at zero, but the original fraction still gives zero over zero there. We use the simpler expression to find the limit, not to make division by zero valid.

**Board:** one small right-side trail `4.5, 4.1, 4.01` and one left-side trail `3.5, 3.9, 3.99`, labelled by their direction. Keep `m_sec(h) = 4 + h, h ≠ 0`. Reveal `lim_(h→0) m_sec(h) = 4` only with “the limit”. On the final explanation, show the original quotient at h = 0 as `0/0: undefined`, then retire that warning into a small note.

**Plan:** adjust aligned board; new paired approach cues tied to the already explained values. `motionRole: explain`. Each finite case stays labelled nonzero. The limit result is a separate destination label, never a rendered h = 0 secant. Tools: opposing value trails, formula highlight, limit/result reveal. Hold three seconds on the distinction. Transition: keep P while the final tangent is introduced separately.

### S11. The tangent and the derivative at P

> The line through P with this limiting slope is the tangent. It shows the curve's direction right at P. Its slope is four: one unit across on this straight line goes four units up. The upper point on that triangle belongs to the tangent, not the curve. We call this slope the derivative at the point, and write f prime of two equals four.

**Board:** tangent through P, labelled “tangent: limiting slope 4”; P = (2, 4), R = (3, 8) on the tangent, run 1 and rise 4. Final notation `f′(2) = 4` with the short gloss “slope at x = 2”. Do not display the tangent equation or a general derivative rule.

**Plan:** reuse final tangent/triangle geometry only at a = 2, with the documented presentation adjustment. `motionRole: explain`. Retain a finite near-secant briefly as a grey reference, draw the limiting tangent separately, then retire Q without moving it onto P. Restore the whole-graph scale with its tick labels before drawing the 1-by-4 triangle. Label the extra point R, not the old curve point Q. Tools: separate line reveal, coordinate callouts, rise/run construction. Hold three seconds. The tangent's local direction defines it; the number of other curve intersections is not a definition. Transition: clear the teaching example before practice.

### S12. Original transfer practice

> Here's a new point on the same curve. P is one, one. The supplied calculation gives the secant slope as two plus h, for nonzero h. Find the secant slope when h is zero point one. Then give the limiting tangent slope as h approaches zero from both sides, and explain why using zero in the original fraction is not a valid secant calculation. Pause here to answer.

**Exact practice card:**

“For `f(x) = x²`, P = (1, 1) and Q = (1 + h, (1 + h)²). For h ≠ 0, you are given

`m_sec(h) = [(1 + h)² - 1]/h = 2 + h`.

1. Find the secant slope when h = 0.1.
2. Give the limiting tangent slope as h approaches 0 from both sides. Explain why h = 0 cannot be used in the original secant fraction.”

Tag: “Original practice, written for this lesson.” This is supported transfer using a supplied quotient, not evidence that the learner can derive a new differentiation rule independently.

**Plan:** stable complete question card; a plain curve and P may remain, but no tangent, numerical change triangle, solution value or substituted result. `motionRole: hold` during response. Tools: stable task/givens layout, shared `Countdown`. After the complete prompt, keep every formula, condition and demand visible for a quiet **25-second countdown**, with an invitation to pause for longer. Hide all model answers, feedback captions, answer-bearing diagrams and screen-reader answer content until the hold ends. Transition: keep the card available for the short feedback.

### S13. Brief practice feedback

> The secant slope is two point one when h is zero point one. Its limiting value is two, so the tangent slope is two. Setting h to zero in the original fraction gives zero over zero. That does not calculate a secant slope: a secant still needs two distinct points.

**Board:** keep the question strip and supplied formula. On the first sentence reveal `2 + 0.1 = 2.1`; on the second reveal `2 + h → 2`, so tangent slope 2. Then cross out the classic mistake “Set h = 0 in the original fraction” with the reason “0/0 is undefined”. No further teaching walkthrough.

**Plan:** reuse aligned feedback board. `motionRole: explain`. Reveal one answer per spoken cue; dim the earlier answer when the misconception is crossed out. Tools: aligned result rows, source-condition underline, crossed-out mistake. Target **about 22 to 28 seconds**, to be measured in the voiced preview and kept within 15 to 30 seconds. Hold the completed feedback for one second. Transition: retire the answer history and return to one memory line.

### S14. Memory and handoff

> Two points give a secant slope. When its limit exists, that limit gives the slope at one point. Keep the two points distinct while approaching. Next, we'll turn a one-point calculation into a rule for finding slopes across a curve.

**Board:** “Two distinct points to measure. A limit for one point.” Under it, `h ≠ 0` during the secant calculation. A compact P/tangent reference can return, without the full algebra or practice answer history.

**Plan:** reuse summary treatment in the same visual system. `motionRole: explain`. Link the two-point phrase to the earlier P/Q thumbnail, then reveal the separate one-point tangent reference with “limit”. Tools: linked thumbnails, one handwritten emphasis. Hold two seconds. Memory aid assumption: a finite two-sided limiting slope exists at the selected point; the worked `4 + h` relationship establishes it here. Next lesson does not appear as a completed coverage claim.

### S15. Optional key notes

> Here are the key notes: what to write in your book. Pause the video if you need more time to copy them.

**Exact notes:**

- A secant uses two distinct curve points, so the horizontal change h is nonzero.
- If nearby secant slopes approach the same finite value from both sides, that limit is the tangent slope at the point. The tangent describes the curve's local direction there.
- Here, at P = (2, 4) on `f(x) = x²`: `m_sec(h) = [(2 + h)² - 4]/h = 4 + h`, h ≠ 0. As h approaches 0, this slope approaches 4, so `f′(2) = 4`.

**Plan:** reuse the summary board, clear the practice and earlier expansion, and offer **35 seconds of quiet copying/pause time** after the short lead-in. `motionRole: hold`. Tools: stable coded notes, no new diagram or new reasoning. Keep the notes and any final caption clear of native player controls. No simultaneous copying demand during S04 to S11.

## Exact mathematics and assessment reference

The following are author/reviewer references, not extra learner paragraphs to retain during new reasoning.

| h | Q on y = x² | Change in y from P | Secant slope |
| ---: | --- | ---: | ---: |
| 1 | (3, 9) | 5 | 5 |
| 0.5 | (2.5, 6.25) | 2.25 | 4.5 |
| 0.1 | (2.1, 4.41) | 0.41 | 4.1 |
| 0.01 | (2.01, 4.0401) | 0.0401 | 4.01 |
| -0.5 | (1.5, 2.25) | -1.75 | 3.5 |
| -0.1 | (1.9, 3.61) | -0.39 | 3.9 |
| -0.01 | (1.99, 3.9601) | -0.0399 | 3.99 |

For h ≠ 0, the exact calculation is

`[(2 + h)² - 4]/h = (4 + 4h + h² - 4)/h = h(4 + h)/h = 4 + h`.

The secant slope differs from 4 by exactly h, so it approaches 4 from either side as h approaches zero through nonzero values. This exact relationship, not just a finite numerical table, earns the limiting value. At h = 0, the original quotient is undefined. Defining a new extended expression at zero does not turn it into a two-point secant.

**Practice model:** at h = 0.1, `2 + h = 2.1`. For positive or negative h approaching zero, `2 + h → 2`, so the tangent slope is 2. The original quotient at zero is `[(1 + 0)² - 1]/0 = 0/0`, undefined. Author scoring is diagnostic: correct finite secant value, correct limiting slope, and explanation that a zero denominator/coincident points do not produce a secant slope. These are reasoning checks, not claimed NESA marks. Do not infer general first-principles mastery from this supported question.

## Alignment, access and production gates

Use plain words before symbols: gradient means slope, secant joins two distinct curve points, h is signed horizontal change, limit is the value the slopes approach, and derivative means slope at the selected point. Narration identifies the essential point locations and changes. Mathematical captions retain conventional symbols while matching the actual spoken meaning. Supply a descriptive transcript; SVG accessibility metadata alone does not survive MP4 export.

The existing pilot's phone stills only establish that its short layout can fit. This longer lesson requires its own full-size algebra stage, actual caption-on desktop and phone-landscape checks, and a usable small-player alternative. Keep plot scales and ticks readable. Do not shrink algebra to preserve a permanent two-card split. Use a larger active stage with a compact reference when symbolic load rises.

Use cumulative explainer scene timing for all audio, reveals, captions and holds. Do not use the legacy overlapping caption exporter. Final cues come from selected audio/alignment, not these estimates. For S02 and S12 the response begins only after the full prompt and stable card; the first visible, spoken or captioned answer must occur after the measured 10/25-second interval. Check the exact exported external tracks as well as the renderer.

**Formal schema 4 brief remains pending:** it must bind selected lesson source/hash, research references, entry/start/stop/next boundaries, renderer, visual system and meaningful transitions. Transfer the specific scene motion roles, on-screen changes, tools and purposes above into its scene rows. Do not paste one generic motion sentence across scenes. A registered source and formal brief have not been created by this Markdown pack.

**Before recording:** independent mathematical and student-learning review of this exact draft; resolve findings; implement and verify the missing secant/local-view capability; inspect exact geometry at right/left cases and transition boundaries; prepare a representative 60 to 90 second explanation pilot before repeating the treatment. A useful interval is S05 to S06 with the local-view transition; choose its measured extent after implementation. Check scene copy and faithful caption forms for prohibited punctuation. Recording-stage brief check remains pending.

**Before full export:** review the exact voiced lesson at playback speed, including the algebra reasons, left-side reset, separate tangent introduction, both protected countdowns and short practice feedback. Repeat independent learning review on that exact version; check caption fit and both device layouts. Freeze inputs only after findings are resolved. Human listening, complete source/media/release reviews and explicit public release approval remain pending. A polished still, a component test or this authored pack does not establish learning or a motion pass.
