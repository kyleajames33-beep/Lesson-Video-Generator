# p-y11-v21 Revision 2 error check

Checked 3 November 2026. Source SHA-256 `fa566613c4217bb05d50d81f4fa39590bfbd12fbb5936a0043ca6217958ea84f`.

1. **Should fix:** The kit request, author note (d) and embedded error-check instruction still call the scene 4 resultant the “closing arrow”. The corrected scene draws the resultant from first tail to final tip; the closing arrow points in the opposite direction. Correct the remaining production descriptions.
2. **Should fix:** Screen equations and readouts use `N` for the normal force throughout (for example scene 8), conflicting with root decision 2 requiring `F_N` on screen from v12 onward. Here `N` also denotes newtons. Reconcile the notation consistently.
3. **Should fix:** The boundary, opening-frame assumption and open decision still describe a level-ground handoff, while scene 1 correctly opens on v20's 25-degree ramp. Update the stale production descriptions.

The scene 4 resultant now points downhill from first tail to final tip; the angle in scene 6 uses the inward perpendicular, and the contact/no-other-across-force condition is shown. v22's scene 2 carries the corrected angle through. The numerical check is in `work/brief159/v21-calculations.json`. The actual scene 1 and v22 handoff match. Sixteen scenes total 6,214 separate and 6,229 joined characters, about 568 seconds. No em dash or checked American spelling appears in narration. No audio or animation was inspected.
