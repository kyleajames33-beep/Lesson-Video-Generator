# Physics and Maths assessment correction drafts

25 October 2026. Root-authored replacements for the six areas in [the independent assessment audit](../checks/codex-interim-physics-maths-assessment-review.md). These are reviewable copy drafts, not applied site patches, recorded narration or approved video inputs. Site files remain read only. Line numbers identify the inspected version; verify source fingerprints and exact anchors before applying anything. No scoring or reveal behaviour has been tested in the browser.

Paths below are relative to `C:/Users/kygs/hscscience/subjects/`. P1 to P4 are `physics/year12/module5/lesson01.sa.html` through `lesson04.sa.html`. M3 is `maths-advanced/year11/introduction-to-differentiation/lesson03.sa.html`.

## 1. Distinguish flight-time and distance scaling

P2:1098, replace the complete paragraph beginning `All three grow`:

> At a fixed launch angle and fixed gravity, flight time is proportional to launch speed, while maximum height and range are proportional to launch speed squared. Doubling the launch speed therefore doubles flight time and quadruples maximum height and range. For a fixed speed, range is greatest at 45 degrees, while maximum height increases as the angle approaches 90 degrees. These comparisons assume negligible air resistance, uniform gravity and landing at the launch height.

P2:1106, preserve the derivation. Replace the sentence beginning `All three quantities grow` with:

> At a fixed angle and fixed gravity, flight time grows in proportion to launch speed, while height and range grow in proportion to launch speed squared. For a fixed speed, range is greatest at 45 degrees, where sin(2 theta) is 1, while maximum height increases as the angle approaches 90 degrees.

Retain the final equal-height condition and add negligible air resistance and uniform gravity to that condition. Acceptance: the prose agrees with T = 2u sin(theta)/g, H = u squared sin squared(theta)/(2g), and R = u squared sin(2 theta)/g. Do not change speed and angle together in the doubling comparison.

## 2. Define tangent slope through a limit

M3:385, replace the `Gradient of Tangent` definition:

> At a point where the derivative exists, the tangent has the limiting slope of secant lines through that point and a nearby point on the curve. Its gradient is f'(a).

M3:421, replace the complete paragraph:

> Keep one point fixed and move the second point along the curve towards it. While the points are distinct, the secant slope is defined. If those slopes approach one value from both sides, that value is the derivative at the fixed point and gives the tangent's slope there. We take a limit; we do not set the separation to zero in the original quotient.

Retain the existing nonzero-h cancellation in the worked example. A tangent is not defined by how many times it meets the whole curve. This replacement addresses a finite derivative; it does not introduce vertical tangents or nondifferentiable cases into the first lesson.

## 3. Keep question frames free of answer hints

For P4:1155 to 1169, the following are exact student-facing prompt drafts. SA1 and SA2 retain their existing task demands. SA3 is a deliberately revised item: it reverses the claim being evaluated and supplies a controlled numerical comparison instead of asking students to invent one. Keep the stated marks and all demands of each revised prompt. Remove visible marking hints from the attempt state and use the neutral placeholder `Write your reasoning here.` Separate feedback is given below. This specifies desired behaviour; applying copy alone does not implement or verify hidden feedback.

**SA1 prompt:**

> In an ideal projectile model, neglect air resistance and use uniform gravity. Launch and landing are at the same height, and launch speed stays fixed. A student says, "Increasing the launch angle always increases the range." Assess the claim using the range formula and a specific pair of angles. (3 marks)

**SA2 prompt:**

> A ball is launched at 16 m/s, 40 degrees above horizontal. Neglect air resistance and use g = 9.8 m/s squared. Calculate its initial horizontal and vertical velocity components, its time to reach maximum height, and its maximum height above the launch point. (3 marks)

**SA3 prompt:**

> Two projectiles start at the same height with the same upward velocity component of 10.0 m/s. Their horizontal velocity components are 8.0 m/s and 16.0 m/s. Both land back at the launch height. Neglect air resistance and use uniform gravity, g = 9.8 m/s squared. Evaluate the claim that changing only horizontal velocity changes the flight time. Use an equation and calculate the flight times to justify your answer. (4 marks)

**Teacher-only SA3 feedback replacement for P4:1206:**

> Both flight times are 2.04 s. The vertical displacement equation is 0 = 10.0t - 4.9t squared. After excluding the launch instant t = 0, it gives t = 20.0/9.8 = 2.040816... s for both projectiles. Their vertical starting conditions, landing height and gravity are the same. Horizontal speed changes how far each travels sideways, but does not enter this vertical equation.

Marking draft: verdict (1), suitable vertical equation (1), the two equal flight times with launch root excluded (1), causal explanation tied to equal vertical conditions (1). Do not expose that rubric during the response opportunity. This replaces the old 30-degree/60-degree example, which changes both velocity components.

For M3:570 to 572, keep the cancellation question unchanged and replace only the answer-bearing textarea placeholder with `Write your reasoning here.` For a video, use a plain question frame, retain the relevant expression and h != 0 condition, and show the explanation only after the countdown.

For each reused video question, budget the response hold for the actual demand. Keep the exact givens, model conditions and every subpart available throughout. Feedback should give the answer and its key reasons in approximately 15 to 30 seconds; it should not replay the entire explanation.

## 4. Put necessary projectile conditions in the question

P4:778, replace the complete Q9 prompt:

> Two projectiles A and B are launched at the same speed. A is launched at 30 degrees and B at 60 degrees above horizontal. Both land at their launch height. Neglect air resistance and assume the same uniform gravity for both. Compare their maximum heights above launch, flight times and horizontal ranges. Explain your answers using physics principles.

Retain the existing Q9 answer relationships: H_B/H_A = 3, T_B/T_A = square root of 3, R_B/R_A = 1.

P4:831, replace the introductory sentence for Q11, retaining all four existing subparts:

> Model a long jumper as a particle launched at 9.2 m/s, 22 degrees above horizontal, landing at the same height as take-off. Neglect air resistance and use uniform gravity, g = 9.8 m/s squared.

The particle/equal-height model is an explicit calculation assumption, not a claim about a real jumper's changing posture or centre of mass.

Use the revised SA1 and SA3 prompts in section 3 so those conditions are present before students respond. Do not restore the old universal SA3 verdict.

P1:472, replace the complete key-insight copy:

> For an upward launch in this ideal model, the time to the highest point is u_y/g. To find total flight time, also specify the landing height. The vertical equation determines the time, and horizontal motion uses that same elapsed time. With gravity and the vertical starting and landing conditions fixed, changing horizontal speed does not change the flight time.

## 5. Use full precision internally and round final answers

P4:1184, Q7 replacement working and answer:

> At x = 15 m, t = 15/(u cos 25 degrees). Requiring height y = 5 m gives 5 = 15 tan 25 degrees - (9.8 times 15 squared)/(2u squared cos squared 25 degrees). Therefore u = sqrt[9.8 times 15 squared / {2 cos squared 25 degrees times (15 tan 25 degrees - 5)}] = 25.94084156... m/s. This is the ideal point-projectile threshold, approximately 25.9 m/s to three significant figures. For strictly positive clearance, u must exceed the unrounded threshold; 26.0 m/s is a slightly larger speed that clears it.

Author note: the old 26.0 m/s is not an unsafe or physically impossible speed. The correction distinguishes ordinary rounding of a threshold from choosing a speed above it. Do not animate a 25.9 m/s trajectory clearing the wall or treat equality at the wall top as finite-ball clearance. Keep this distinction in the worked answer only where the word "clear" requires it.

P4:1193, Q12 replacement answer, retaining its four subparts:

> Resolve the launch velocity: u_x = 15 cos 50 degrees = 9.641814... m/s and u_y = 15 sin 50 degrees = 11.490666... m/s. (a) Time to the highest point is u_y/g = 1.172517... s, or 1.17 s. (b) At landing, -30 = u_y t - 4.9t squared. Its positive root is 3.910626... s, or 3.91 s. (c) Horizontal displacement is u_x t = 37.705536... m, or 37.7 m. (d) The vertical velocity is u_y - 9.8t = -26.833475... m/s. Combining this with u_x gives speed 28.513154... m/s, or 28.5 m/s, at 70.2 degrees below horizontal.

P4:1194, Q13 replacement answer:

> sin(2 theta) = 72 times 9.8 / 30 squared = 0.784. In the interval 0 < theta < 90 degrees, the two launch angles are 25.814142... degrees and 64.185857... degrees, reported as 25.8 degrees and 64.2 degrees. Using the unrounded angles in T = 2u sin(theta)/g gives 2.666040... s and 5.511497... s, reported as 2.67 s and 5.51 s. Complementary launch angles have equal sin(2 theta), so they give the same level-ground range at the same speed. The larger angle gives more upward velocity and longer flight, with less horizontal speed.

Use approximation signs for displayed intermediate rounded values. Do not feed a rounded time or angle back into later steps and then present the result as full precision. Retain the intended marking weights separately from these copy drafts.

## 6. Describe basketball clearance vertically

P3:997, retain the height calculation and replace only the final bold sentence:

> At x = 4.0 m, the modelled ball passes approximately 1.3 m above the hoop.

Keep the shared ground reference, launch height and hoop height visible. This is the height of an ideal point projectile at the hoop's horizontal position; it is not a horizontal overshoot distance or a model of ball/rim contact.

## Application and review boundary

Apply coordinated changes to prompts, worked steps, model answers and marking hints. Check that the assessment system actually withholds the hints and keys until feedback. Recheck line anchors and hashes before application, then inspect the exact page and question states. Video adoption needs a selected schema 4 teaching brief, independent script and student-learning review, new narration/alignment for any changed recorded words, exact voiced preview, human listening and release checks. No draft here approves recording, changes a site page or establishes syllabus coverage.

The [independent correction review](../checks/codex-interim-assessment-corrections-review.md) records calculation checks and the SA3/Q7 qualifications. Source fingerprints are recorded in the assessment audit linked above; a root source check accompanies the draft handoff. This is source-copy review only; application, browser behaviour, recording and release remain pending.
