# Projectile detail families

Four reusable local 1100 by 620 SVG groups. Parent code supplies progress from 0 to 1. No hooks, clocks, CSS animation, speech or full-lesson renderer. Frozen for root integration and independent review after the checks below. This is source/model validation, not playback or teaching approval.

## Exact learner entry and lesson support

Inspected site lessons 01 to 04 read-only in `C:/Users/kygs/hscscience/subjects/physics/year12/module5/`. Existing Module 5 README recorded these four gaps. The original projectile desktop-launch still and shared kit were inspected before implementation. Existing projectile components remain usable for ongoing flight and velocity graphs. This addition supplies missing reasoning stages rather than replacing their artwork.

| ID | Supported lessons and entry knowledge | Current visual and staged reasoning |
| --- | --- | --- |
| m5-vector-resolution | L1 component worked example, L4 revision. Students know adjacent/opposite/hypotenuse and sine/cosine ratios. | One 20 m/s vector at 30 degrees. Draw adjacent horizontal arrow, then opposite vertical arrow. Connect each actual side to its trig ratio, then hold the two directed components. |
| m5-range-derivation | L2 derivation, L4 condition retrieval. Students know components, vertical displacement and factorisation. | One valid level-ground flight returns to y = 0. Factor the vertical equation, discard the launch root, carry the later time into horizontal range, then use the double-angle identity. |
| m5-obstacle-clearance | Exact L3 wall example; L4 method reuse. Students can resolve launch speed and use signed vertical displacement. | A ball leaves a 15 m cliff at 18 m/s and 35 degrees. Wall stands 25 m away and 8 m above sea level. The ball travels to the wall as the horizontal distance arrow grows. Hold time, replace working with displacement plus reference height, then compare height with wall top. |
| m5-target-angles | L2 complementary angles, L3 unknown-angle extension, exact L4 Q13 (30 m/s, 72 m). Students know range formula, inverse sine and supplementary angles. | Derive sin(2 theta) = 0.784. Solve the shallow angle, draw its physical trajectory, then find the supplementary double-angle root and draw the high arc to the same target. |

## Scene plan and reuse decisions

Reuse shared course-kit Arrow, Dot, Label, Panel and palette. Reuse the parent's pure trajectory calculation through this directory's model. Adjust physical x/y scales together. Vector resolution uses 21 px per m/s on every side. Range uses 20 px/m, wall 13 px/m and target 7 px/m on both axes. No vector is labelled in displacement units. New diagrams fill the recorded gaps. No one-off lesson artwork is replaced.

Suggested parent durations: resolution 24 s (beats 0 to .32, .32 to .64, .64 to 1); derivation 32 s (four equal beats); obstacle 30 s (0 to .34, .34 to .67, .67 to 1); target 30 s (0 to .30, .30 to .65, .65 to 1). Each formula hold exceeds 4 s at those durations. Equation labels stay fixed during their holds. A parent must use these minimum durations or remap beats to preserve reading time. Each beat retains the current case and replaces the previous working, with only needed established results carried forward.

Trajectory drawing reveals actual model positions. Range flight time maps to progress .04 to .18. Obstacle motion maps physical time from launch to wall into progress .04 to .25. The two target launches are separate examples, not simultaneous projectiles: each uses its own physical flight time, mapped into .32 to .50 or .67 to .85. Their animation lengths cannot be used to compare real flight durations. The static completed path remains context while the next calculation is read. No unrelated ambient motion.

## Scientific assumptions and verification

All paths assume a point projectile in a ground frame, uniform downward g and negligible drag; up is positive. Angles are above horizontal. Range derivation and target solutions require equal launch and landing height. The wall example instead uses one sea-level datum and computes the time at the wall, which is not total flight time. It is valid to find time from a known horizontal position and known horizontal speed. Intermediate calculations use full precision, despite rounded component labels. Wall clearance is for a point projectile and a zero-width obstacle. Target solutions lie between 0 and 90 degrees and are both valid because 0 < Rg/u² < 1. At maximum range these two roots coincide; this family deliberately uses a shorter target distance.

Primary source checked: [OpenStax University Physics 4.3, Projectile Motion](https://openstax.org/books/university-physics-volume-1/pages/4-3-projectile-motion). It supports resolving velocity, independent perpendicular equations sharing time, equal-height range and different-height analysis. Target roots also follow directly from sin(alpha) = sin(180 degrees minus alpha).

Run `node src/explainer/physics/module5/projectile-details/verify.mjs`. It bundles the exact model imported by the visuals and checks component norm, both range forms, wall position/time/height/clearance, both target roots and equal-scale subject bounds. TypeScript must also pass root integration. Parent owns renders, phone/still checks, continuous playback and independent student learning review.

Remaining gaps: arbitrary unequal-height range optimisation; negative-horizontal or obtuse launch vectors; finite-size obstacle geometry; minimum wall-clearing speed; uncertainty and measured projectile data; fresh independent practice and brief feedback. These assets are support, not a full lesson or assessed syllabus coverage.
