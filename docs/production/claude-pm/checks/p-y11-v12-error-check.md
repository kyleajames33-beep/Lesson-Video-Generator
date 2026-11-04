# p-y11-v12 Revision 2 error check

Checked 3 November 2026. Source SHA-256 `7e6df3a7d929097e67c779c0e1c1f4a297c938404ef0e4a5a8079cdd4b22616d`.

1. **Should fix:** Root decision 2 for v13-v24 requires the normal force to appear as F_N from v12 onward. This design still specifies N in learner-visible labels and equations, including scene 7's `N + 51.3 − 196 = 0` and `N = 145 N`, and scene 10's `N = 29.4 N`. Use F_N consistently on screen, retaining N as the unit of force.

The brief 145 repair is applied: scene 5 says the upward pull reduces the normal force, rather than claiming the sledge lifts. `work/brief154/v12-calculations.json` confirms the sledge components and vertical balance, the boat resultant, and both attempts. The v11 sledge and rope are the stated opening; the equal push and friction arrows and `F_net = 0 ?` handoff match v13's revised scene 1. The shared notes rule restores the handoff after notes. Root's course-wide amber force treatment is a build normalisation; the separate velocity-colour conflict is recorded in `p-y11-v01-error-check.md`.

The parser counted 14 scenes and 5,336 joined characters; the stated 5,323 is the separate-scene sum, and the design estimates about 494 s. No em dash or checked American spelling appears in narration. No audio or rendered frame was inspected.
