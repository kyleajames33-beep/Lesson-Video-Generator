# Independent Physics and Maths assessment readiness review

Reviewed 25 October 2026. Source review and independent numerical recalculation only. This is not a full course, 701-page, syllabus, practical, playback, narration or student-outcome review. No site, asset, design, recording or release input was changed.

## Decision and sample boundary

The assets are useful reusable explanation pieces. They are not ready to substitute for complete beginner lessons or independent assessment without the repairs below. Preserve their useful geometry and staged working. Do not record the source claims about speed scaling or the tangent definition unchanged.

Read AGENTS.md, REPO-GUIDE.md and student-learning-review.md. Inspected the Maths README, pilot.tsx and kit.tsx; Physics README, module5 README, projectile-details README and course-map.json. The Physics map explicitly identifies Module 5 lessons 1 to 4 at course-map.json:847, 863, 884 and 903. The Maths kit has no equivalent exact site support map: the existing close match is Year 11 Introduction to Differentiation lesson03, especially its square-function first-principles example and tangent at (2,4). This is a candidate match, not evidence of a recorded integration decision.

Site paths below are relative to `C:/Users/kygs/hscscience/subjects/`. P1 to P4 mean `physics/year12/module5/lesson01.sa.html` through `lesson04.sa.html`. M2 and M3 mean `maths-advanced/year11/introduction-to-differentiation/lesson02.sa.html` and `lesson03.sa.html`.

Exact checked assessment sample: P1 component example at lines 405 to 430, peak-time example at 496 to 521 and SA1 to SA3 at 1005 to 1033; P2 derivation/angle-comparison responses at 1066 to 1169 and cliff angle comparison at 728; P3 cliff response at 806 to 846, minimum-wall-speed response at 877 to 909 and SA1/SA2 at 960 to 1004; P4 mixed Q1 to Q10 and answer key at 698 to 788 and 1178 to 1187, timed Q11 to Q13 and answers at 831 to 875 and 1192 to 1194, landing-velocity response at 1005 to 1045 and SA assessment conditions at 1155 to 1206. Sampled P1 question-bank items qb-01 to qb-09 in `physics/year12/module5/question-bank-data.js`:3 to 179. Did not audit the complete randomised question banks or scoring engine.

For Maths, checked M3 first-principles and tangent worked examples at 477 to 560 and all five drill answers and SA1 to SA3 at 760 to 767 against their questions. Checked M2 SA1 to SA3 and answers at 756 to 792 as the immediately relevant limits prerequisite. Other Maths topics and practice banks are outside scope.

## Findings requiring repair before reuse

1. **P2 teaches an incorrect speed relationship.** Lines 1098 and 1106 say all three quantities grow with launch speed squared. Yet the same response gives flight time as `2u sin(theta)/g`. At fixed angle and equal launch/landing heights, doubling speed doubles flight time, while height and range quadruple. Replace those two sentences with that distinction. The existing correct equations can remain. A novice otherwise learns a rule that contradicts the worked derivation.

2. **M3 defines tangency by an unreliable contact-count rule.** Line 385 describes a tangent as touching a curve at exactly one point. A tangent can cross its curve or meet it elsewhere; a straight-line function is its own tangent. M3 itself uses that latter case in SA3 at 767. Define the tangent using its local direction/limiting secant gradient at the selected point. At 421, replace the claim about an exact moment when two points become one: the secant quotient is undefined at zero separation, while its limiting slope can exist. Retain the explicit `h != 0` cancellation in the worked example at 493 and in the pilot README:28. The present kit displays a moving tangent but does not demonstrate a secant approaching it. A beginner version needs that explanatory beat before the existing tangent sweep and algebra.

3. **P4 assessment exposes the reasoning before the response.** Lines 1156 to 1169 contain visible mark hints, including the verdict, formula and proposed numerical example. The SA3 placeholder explicitly supplies the verdict and flight-time equation. These are acceptable optional scaffolds, but are not independent questions. For a video, show only the prompt, givens, conditions and countdown until feedback; reveal the key reasons afterwards. Do not film the entire site card as the question frame. M3:572 similarly begins the answer to its cancellation prompt in the placeholder; omit it for an independent video question. This is a source-level leak risk, not a tested browser-visibility finding.

4. **Some projectile questions omit essential boundary conditions.** P4 Q9 at 778 asks for equal-range and flight-time comparisons without stating equal launch and landing heights, negligible air resistance or uniform gravity. Its answer at 1186 relies on those conditions. Q11 at 831 gives a long jumper's speed and angle without specifying equal take-off and landing heights, yet its key uses the level-ground flight time. SA3 at 1167 asks whether flight time depends only on initial vertical velocity, but its model answer at 1206 silently uses equal heights. Flight time also depends on landing height and gravity; independence from horizontal speed requires a specified landing level rather than an arbitrary obstacle boundary. Add the relevant shared conditions directly to each reused prompt. For SA3, compare two horizontal speeds with the same initial vertical speed, height difference and gravity; the existing 30/60-degree example changes both components and is a less clean demonstration. P1:472 likewise needs the specified vertical displacement qualification already expressed more carefully at 468.

5. **Small answer-key precision errors should not become authoritative worked values.** P4 Q7 key at 1184 says 26.0 m/s. With the supplied 15 m, 5 m, 25 degrees and g = 9.8, the threshold is 25.94084 m/s, conventionally 25.9 to three significant figures or 26 to two. P4 Q12 key at 1193 gives 3.92 s, 37.8 m and 28.6 m/s. Unrounded calculation gives 3.910627 s, 37.70554 m and 28.51315 m/s: use 3.91 s, 37.7 m and 28.5 m/s. P4 Q13:1194 gives 2.66 and 5.52 s; unrounded values give 2.666041 and 5.511498 s, hence 2.67 and 5.51 s. Retain guard digits and round the final result. These are minor relative to findings 1 to 4, but easy to repair before recording.

6. **The basketball conclusion needs a spatially explicit verb.** P3:997 finds the ball approximately 1.31 m above the basket at its horizontal position, then says it overshoots by 1.3 m. Say it passes approximately 1.3 m above the hoop at x = 4.0 m. This avoids confusing vertical clearance with horizontal overshoot. A reused video should identify the ball as a point in the ideal model and show the hoop and launch heights on the same ground reference. It should not claim that a point-height comparison alone models rim clearance for a finite ball.

## Independent calculation evidence and successful material

Python standard-library trigonometry and kinematics were used, separately from the asset model verifiers. No rendering was needed.

| Sample | Independent result | Assessment |
| --- | --- | --- |
| P1 20 m/s, 30-degree components | 17.3205 m/s horizontal, 10 m/s up | Agrees with worked answer |
| P1 25 m/s, 40-degree time to peak | 1.63976 s | Agrees with 1.64 s |
| P1 SA2 horizontal 12 m/s from 30 m | 2.47436 s, 29.6923 m | Agrees with 2.47 s, 29.7 m |
| P2 cliff comparison, 25 m/s, 20 m high | Approximately 81.4 m at 38 degrees, 79.8 m at 45, 79.3 m at 30 | Correct bounded comparison; not an arbitrary-height optimisation proof |
| P3 18 m/s, 35 degrees from 25 m cliff | 3.54588 s, 52.2831 m | Agrees with rounded response; keep full precision internally |
| P3 45-degree launch over 4 m wall at 30 m | sqrt(8820/26) = 18.4182 m/s threshold | Agrees with 18.4 m/s, subject to point-particle clearance model |
| P3 SA2 20 m/s, 40 degrees from 60 m | 5.04889 s, 77.3535 m, 39.6989 m/s impact speed | Agrees with key |
| P4 Q8 supplied flight time 1.5 s | ux = 13.3333 m/s, uy = 8.35 m/s; 15.7321 m/s at 32.0569 degrees | Agrees with 15.7 m/s at 32 degrees; time is supplied, not guessed |
| P4 Q10 spark changes horizontal speed at apex | Rise/fall each 2.25 s; launch ux = 15, uy = 22.05 m/s; 26.6684 m/s at 55.7736 degrees | Key is consistent with stated post-explosion ground-relative speed and zero vertical speed |
| Maths square tangent | f'(x) = 2x; f'(2) = 4; y - 4 = 4(x - 2) | Pilot and M3 working agree |
| Maths M3 SA1/SA2 | derivative 2x + 3; cubic tangent at x = 1 is y = 3x - 2 | Correct |
| Maths M2 limits SA1/SA2/SA3 | 6; both one-sided limits 3; redefine f(2) = 4 | Correct |

P4 Q1 to Q6, Q8 to Q11 and landing-velocity response are internally consistent to their intended precision, apart from the stated conditions/rounding caveats. M3 drill normal at (2,4), `y = -x/4 + 9/2`, is correct for that nonzero tangent gradient. It should remain outside the first tangent video. The P1 bank sample has appropriate misconceptions and correct selected answers; qb-09 should explicitly inherit the ideal no-drag model. The source-level choice indexes alone do not establish working random selection, hidden feedback or accessibility.

## First-lesson boundaries and prerequisite handoffs

**Physics first candidate: Why does a horizontally launched ball fall for the same time as a dropped ball?** Entry: distinguish position, velocity and acceleration; read metres, seconds and m/s; use signed directions; recognise that zero net horizontal force means constant horizontal velocity; understand the one-dimensional free-fall equation or teach it before calculating. Start with two balls at the same height and zero initial vertical velocity under the ideal model. Use equal-time positions to show equal vertical drops while one moves sideways. Then one short worked height-to-time-to-range example. Stop before angled launch, peak-time derivation, range optimisation, wall clearance and quadratic roots. Reuse the projectile kit and equal-time component motion; create a fresh matching prediction question with changed horizontal speed and the same drop. This is narrower and more causal than treating all of P1 as one video.

Next Physics candidate: **How do we split an angled launch into two usable velocities?** Entry: adjacent/opposite/hypotenuse, sine/cosine and degree-mode calculator. The existing 20 m/s at 30-degree resolution asset is a strong exact case. Show the projection and explain why each side uses its ratio. Then teach why upward velocity reaches zero while downward acceleration continues. Only after that hand off to equal-height time/range derivation. Cliff quadratics need quadratic-formula fluency, rejection of pre-launch roots and displacement sign conventions. Walls need substitution of time at a specified horizontal position and an inequality. P4 is consolidation after these prerequisites, not a first video.

**Maths first candidate: How can a curve have a slope at one point?** Entry: coordinate substitution, rise/run between two points, expansion of (x+h)^2, factorisation and cancellation with a nonzero divisor, and the idea of approaching a value without substituting at an undefined point. The closely linked prerequisite source is M2's factor-and-cancel limit at 465 and answers at 790 to 792. Use a secant approaching the tangent on y = x squared, derive 2x, then read slope 4 at (2,4). Stop before normals, cubic expansion, unrelated applications and a general catalogue of differentiation rules. Equation of the tangent can be a short later handoff requiring point-gradient form. The existing pilot is a useful familiar-learner recap and geometry component, not a 15-second first explanation. Its README:50 to 53 already acknowledges that limit/algebra familiarity and longer holds are needed.

For either subject, brief feedback should supply the answer and one or two reasons after an actual response hold. Preserve all question demands and supplied conditions during the hold. The exact selected teaching brief, fresh practice, source review and independent learning review are still required before paid narration. Exact voiced playback, caption fit, human listening and the full package gate remain pending. No current syllabus approval is inferred from a support map or from this mathematical audit.

## Source pins

Video repository HEAD observed: `add81eea0993a7997710a2bd79e150d773865231`. Site repository HEAD returned by `git -C ... rev-parse HEAD`: `1bdafa0b1bcf12f1e6f9abf1fb3d78120bb23c25`. Site status failed with "must be run in a work tree", so no clean-worktree claim is made. Maths and Physics asset directories are currently untracked in the video repository; commit SHA alone does not pin their contents. SHA-256 of actual reviewed files:

| File | SHA-256 |
| --- | --- |
| P1 | a739198c2342e395b4220c69a481c9d3e2086d5a788c8b83c7e35025b2e3b6d1 |
| P2 | c3b81856cdb5c671c54afdacf36d022201f5c8b5a241352609384e54bddbc362 |
| P3 | 8bd974fedf652636912d936d6c79b00b2642878ead6e43a2e89cd5f70038006a |
| P4 | 2cc8fc5463630f41a6c4d1c882ea403046539c1666b1b4253a67e1b6eec6afcc |
| M2 | b1869dd9ca919f833b8c005dbbfb634a7a2764adda880be91f04b5c047a83219 |
| M3 | dc60c46adfac4cdbe27e3093fd53ab325d6944f06200c0e714c27810756f9f72 |
| src/explainer/math/pilot.tsx | 42b6e6bd0bf8d8d7f006ed135c2cc1a1e3df50505988c0cdca6c77e5a233bdd5 |
| src/explainer/math/kit.tsx | 63c61ed4bf27b4cf0bc10289f5b8db0e050200e64a9e1dc5fa7cd9d475979685 |
| src/explainer/physics/artifacts/site/course-map.json | ccaf03e6d03bfd025d66bc4c0eb5799f7d4b6ecbaa6c1a612bc83b39b06bc67e |
