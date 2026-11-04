# p-y11-v22 Revision 2 error check

Checked 3 November 2026. Source SHA-256 `caebd370f38f506d71f6defb65e15428f48e6c1ccdf8ab0d95d82e727a9b2d9a`.

1. **Should fix:** The scene 6 normal-force equation and diagram use `N` for normal force, although root decision 2 requires `F_N` on screen from v12 onward. Update the affected screen equations and labels consistently.
2. **Should fix:** Entry knowledge still describes the angle between weight and “the perpendicular axis” without specifying its inward direction. The revised scene correctly uses the inward direction; reconcile the summary with it.

Scene 2 carries the corrected inward angle, the final formula and scope chip specify downward sliding, contact, other-force conditions and kinetic friction, and the flat-floor case starts from rest. The scope chip appears in v23's actual opening. Numerical checks are in `work/brief159/v22-calculations.json`. The v21 and v23 frames match. Fifteen scenes total 5,741 separate and 5,755 joined characters, about 532 seconds. No em dash or checked American spelling appears in narration. No audio or animation was inspected.
