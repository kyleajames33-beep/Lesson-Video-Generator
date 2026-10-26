# Independent review: secant to tangent first pack

25 October 2026. Reviewed the frozen `docs/production/claude-pm/drafts/maths-secant-tangent-pack.md`, SHA256 `452306fa4abb6233902fb10a381330859822556a46d4569b31f3fdff0eccc60b`. I did not author that pack. Only this review file was written.

**Decision:** no mathematical or learner-script blocker found in this draft. It is suitable to proceed to implementation and the already-required independent preview reviews. It is not ready for recording: the missing secant/local-view implementation and its checks remain pending. This review supplies no source implementation, motion, listening or release approval.

## Scope and learner trace

Read the complete exact narration, screen copy, visual contract, original practice and gate instructions. Applied AGENTS.md, the student-learning review and the previously read teaching/animation guidance. Inspected current `src/explainer/math/kit.tsx` and README, the existing independent Maths kit and Physics/Maths assessment reports, and the actual existing `desktop-f420.png` and `phone-landscape-f420.png` stills. These are the short familiarity pilot's stills, not implementations of this new pack. No rendering, playback or listening was performed.

| Exact draft location | Independent assessment |
| --- | --- |
| Entry knowledge, line 13; S02/S03, lines 59 to 73 | Starts with coordinates and arithmetic, then checks gradient and explains consistent subtraction order. Gradient, delta and the needed square expansion receive support rather than silently assuming previous calculus. Selecting prerequisite support links remains formal-brief work as stated. |
| S04/S05, lines 75 to 89 | Starts with concrete P = (2, 4), Q = (3, 9), slope 5, then gives h a visible meaning. The sentence “For a secant, h cannot be zero” supplies the reason before cancellation. Fixed P and coupled Q/line motion are useful video actions. |
| S06 to S10, lines 91 to 133 | Numerical right-side evidence motivates the algebra, rather than being treated as proof. Expansion, factoring and cancellation each have a stated reason. Left-side signed differences are explained. The exact identity `m_sec(h) = 4 + h`, for nonzero h, earns the two-sided limit. The original fraction remains undefined at zero. No coincident-point secant is proposed. |
| S11, lines 135 to 141 | Introduces the tangent separately after the limiting argument. R = (3, 8) is explicitly on the tangent, not the curve. Derivative notation is introduced after its meaning. The misleading contact-count definition and the claim that two points become one are absent. |
| S12/S13, lines 143 to 166 | Original supported transfer to P = (1, 1) asks for a finite secant slope, limiting slope and zero-denominator explanation. The complete original quotient, nonzero condition and all demands remain visible for the 25-second hold. The supplied `2 + h` is intentional scaffolding, not a premature worked answer. No substituted result or tangent is permitted before feedback. Feedback is correct and brief, with one crossed-out classic mistake. Its actual duration remains to be measured. |
| S14/S15, lines 168 to 188 | Memory line retains the existence condition. Notes state a finite two-sided limiting slope and separate quiet copying from the new explanation. The next handoff stops short of claiming general-rule mastery from this supported example. |

The main question is answered causally: two-point slopes change as the separation changes; their exact relationship approaches one finite value from either side; that limiting value defines the tangent's slope at the fixed point. The draft does not rely on a learner already knowing limits or the differentiation rule. This is a reviewer prediction of followability, not measured student learning.

## Independent mathematical checks

Recalculated all seven table cases using Python standard-library exact rational arithmetic, separately from the kit's model. All Q coordinates, signed vertical changes and slopes agree:

| h | Q | Vertical change | Slope |
| --- | --- | --- | --- |
| 1 | (3, 9) | 5 | 5 |
| 0.5 | (2.5, 6.25) | 2.25 | 4.5 |
| 0.1 | (2.1, 4.41) | 0.41 | 4.1 |
| 0.01 | (2.01, 4.0401) | 0.0401 | 4.01 |
| -0.5 | (1.5, 2.25) | -1.75 | 3.5 |
| -0.1 | (1.9, 3.61) | -0.39 | 3.9 |
| -0.01 | (1.99, 3.9601) | -0.0399 | 3.99 |

Expanding gives `4 + 4h + h²`; subtracting 4 and factoring gives `h(4 + h)`. Cancellation is valid only for nonzero h, leaving `4 + h`. Its difference from 4 is exactly h, so both signed approaches give limit 4 without evaluating the original fraction at zero. The internal secant line passes through both stated points. The tangent through (2, 4) with slope 4 passes through R = (3, 8); the curve value at x = 3 is 9. Practice gives 2.1 at h = 0.1 and limiting slope 2, with the original quotient undefined at zero. No mathematical repair is required.

## Required implementation check: distinct points at the smallest separation

This is an implementation acceptance condition, not a confirmed defect in an existing lesson. The pack explicitly identifies the missing capability and requires distinct points. Preserve that requirement rather than treating the proposed 10-times zoom alone as a fit pass.

- **Locations:** mathematical visual contract, line 45; S06, line 97; S09, line 125. Current `kit.tsx` graph mapping is 155 screen-coordinate pixels per x unit and 48 per y unit. Its existing main point uses radius 14 and stroke width 5.
- **Independent geometry:** at h = +0.01, a 10-times transform gives centre offsets `(15.5, -19.248)` and separation **24.7131** coordinate pixels. At h = -0.01, offsets are `(-15.5, 19.152)` and separation **24.6384**. If displayed with the existing 844/1920 whole-frame scale, those are only **10.86/10.83 output pixels**. A redesigned full-size stage can differ, so these are reference calculations, not a measurement of the unbuilt layout.
- **Risk and minimal action:** do not reuse the radius-14, stroke-5 point unchanged for both local points. Their visible footprints would overlap at these separations. Choose smaller point footprints, offset P/Q labels with unambiguous leaders, and inspect both signs on the actual output layout. Keep markers and text readable; do not multiply marker size along with the geometry zoom. If necessary, increase the truthful magnification and update its label/ticks, without inventing extra point separation.
- **Acceptance:** exact curve, points, secant and signed legs use one transform; P/Q have nonoverlapping visible footprints and identifiable labels at both smallest h values on caption-on desktop and phone views; ticks and whole-graph region show the actual magnification; the two sides reset without crossing h = 0; return to whole scale before the 1-by-4 tangent triangle. This check is pending until implemented. Do not infer it from the old pilot stills.

The existing unequal x/y screen scales are valid for a coordinate graph. Multiplying both by the same zoom factor preserves their ratio. The numerical slope must come from coordinate differences, not the line's apparent screen angle. The draft states this correctly and does not propose an artificially rotated secant or a fake minimum separation.

## Reuse and remaining gates

The actual pilot stills show the proposed paper/blue/amber system, correct final triangle and aligned working. They also show a tangent-equation legend and the general derivative calculation, which are outside this draft's current reasoning stages. The pack correctly requires the legend to be omitted through a real presentation change and the displayed algebra to be selected by scene. `SquareGraph` already draws the tangent and cannot serve unchanged as the earlier secant demonstration. Its `showRise` guard now rejects a ≠ 2. The new secant/local plot, adjusted ticks and staged scene source remain genuine work, openly recorded in the draft.

Remaining gates are implementation and geometry checks above, schema 4 formal brief and route placement, recording-stage checks, then exact voiced preview with independent learning review, caption/answer separation, device checks and human listening. No further author-script blocker was found. The supplied-formula practice supports a narrower inference than independent first-principles derivation, and the draft already says so.

The cohort wording was independently verified against the [official NESA overview](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview) and [course structure](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview/course) on 25 October 2026: Introduction to differentiation is Year 11; new Year 12 teaching begins Term 4, 2026 and the first new HSC is 2027. Exact outcome mapping remains pending as the pack states.

## Current source and still hashes

SHA256. Recheck the pack hash before relying on this review after any revision.

| File | SHA256 |
| --- | --- |
| `docs/production/claude-pm/drafts/maths-secant-tangent-pack.md` | `452306fa4abb6233902fb10a381330859822556a46d4569b31f3fdff0eccc60b` |
| `src/explainer/math/kit.tsx` | `b11368fe665b0842210fb6974531bfb5d7de53a0014a414050f245dab393ecf0` |
| `src/explainer/math/README.md` | `5b611625e8acbad6e82b2871ce4d6ff9240b9e0d8595960b1bdd086949c27958` |
| `out/explainer/maths-tangent-pilot/desktop-f420.png` | `4f2444949c040edd85403e0ea03bdbaf4f24cde2cde4f3617de04953b38df0f79` |
| `out/explainer/maths-tangent-pilot/phone-landscape-f420.png` | `d6db7a5ab299f02a44c14b7733a927ea9b75f43d902b859ee67bd50dc785a780` |
