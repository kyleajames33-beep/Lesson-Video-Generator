# Rotation detail visual families

Four deterministic 1100 × 620 SVG groups extend the existing Module 5 kit. The parent supplies progress from 0 to 1. These are visual assets, not completed lessons or approved recordings.

## Entry knowledge and boundaries

Lesson 6 support assumes force vectors, sine and the meaning of torque. The moment-arm family explains perpendicular distance; it stops before arbitrary three-dimensional torque. The beam family assumes the torque sign convention and introduces the separate force condition. It uses a light beam with two vertical loads, not a massive beam or a two-support structure.

Lesson 8 support assumes uniform circular motion and force resolution. The pendulum assumes an ideal taut string at a fixed 30° angle. The bank family compares steady circular states on a 30° bank, with no longitudinal acceleration and enough static friction for each displayed speed.

| Family | Progress beats and cue | Reuse decision | Limits / next handoff |
| --- | --- | --- | --- |
| m5-moment-arm | 0: identify pivot, fixed lever and force line. .12: construct the perpendicular and right angle. Through .55: rotate force from 30° to 75° and update shortest distance and torque. Rest: hold geometry and result. | Adjust existing torque lever with genuine foot-of-perpendicular construction; preserve editorial palette and arrow kit. | Parameter comparison, not a dynamically rotating beam. Next: solve an unfamiliar angled-force case. |
| m5-beam-equilibrium | 0: choose pivot and explain zero support torque. .25: replace current working with signed +60 and −60 N m ledger. .50: show upward support at the same force scale and solve vertical balance. .75: hold both zero sums. | Reuse force-arrow style; add extended-body locations and one current working stage. | Light beam, known loads. Next: beam weight or an unknown support. |
| m5-conical-pendulum | Throughout: two complete horizontal circles. .15: reveal tension's vertical and projected radial components. Compare constant height in side view with circular path in top view. | Preserve circular-motion visual language; add synchronized orthographic projection and actual moving bob. | Side view hides depth and projected radial/tension arrows shorten. Blue components replace tension in a calculation, never add to it. Next: derive speed from radius and angle. |
| m5-banked-friction | First third: 12 m/s, static friction acts up bank. Middle: 16.99 m/s design state, no friction needed. Final: 20 m/s, friction acts down bank. Replace force vectors and values at each state. | Extend the frictionless bank family rather than replacing it. | Distinct valid constant-speed states, not a car accelerating between them. Signed f is positive uphill. Next: derive speed limits from the limiting friction condition. |

No decorative motion, timers, speech, CSS animation or narration is embedded. Established apparatus and physics colours are preserved. Force arrows use a common scale within each diagram; projected pendulum arrows are projections of forces, not changing true magnitudes.

## Models and checks

Run `node src/explainer/physics/module5/rotation-details/verify.mjs`. The script transpiles and imports the actual model.ts, then checks perpendicular geometry, torque, beam force and moment sums, fixed pendulum length and radius, vertical balance and radial acceleration, bank vertical and radial balances, friction sign and capacity. g = 10 m/s² is explicit in the circular-force examples.

The site source pages lesson06.sa.html and lesson08.sa.html were inspected read-only. Their torque, force resolution, conical pendulum and banked-curve sequences supply the support map. The existing Module 5 source and README were inspected. Root owns rendering stills, playback review and integration. No render or listening approval is claimed here.

Root source review correction: the moment-arm foot now uses downward-positive SVG coordinates and lies on the actual force line. The shared drawing model supplies the foot and bounded line endpoints, and verification checks collinearity, perpendicularity and the right-angle construction. The top pendulum view is centred at y = 220 and the side bob is at y = 430, leaving space above the radius and explanatory captions. Side pivot height derives from L cos θ at the diagram scale.

Verified primary textbook references on 25 October 2026:

- [OpenStax, static equilibrium](https://openstax.org/books/university-physics-volume-1/pages/12-2-examples-of-static-equilibrium): both force and torque conditions, extended-body force locations and sign conventions.
- [OpenStax, centripetal force](https://openstax.org/books/university-physics-volume-1/pages/6-3-centripetal-force): radial net force, banked force resolution and static-friction bounds.

Remaining gaps: narrated explanations and precise cue timing, independent student learning review, phone-size layout checks, actual playback-speed review, arbitrary angled equilibrium examples, massive beams, two-support reactions, pendulum derivation, and banked-curve limiting-speed practice. These families do not establish reviewed syllabus coverage.
