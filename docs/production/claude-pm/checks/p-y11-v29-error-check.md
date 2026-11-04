# p-y11-v29 Revision 2 error check

Checked 3 November 2026. Source SHA-256 `a371dbdfc86992e25f83dc1d6c6dbe5ff545c6edd403dbb46eb40f8afac7a0bf`.

1. **Should fix:** Scene 1 still contains the historical `y11p-surface-floor-v1.png` name even though the delivered `phys-y11-` file is used. Brief 159 requires no `y11p-` names to remain; remove or replace the stale reference and check the other named files.

The opening uses v28's actual chip, the cushion and crumple comparison uses average force and equal-area rectangles, the ball graph identifies magnitudes, and attempt 2 specifies negligible other impulses. Calculations are in `work/brief159/v29-calculations.json`. The v30 handoff matches. Fifteen scenes total 6,183 separate and 6,197 joined characters, about 566 seconds. No em dash or checked American spelling appears in narration. No audio or animation was inspected.
