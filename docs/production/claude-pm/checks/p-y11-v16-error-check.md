# p-y11-v16 Revision 2 error check

Checked 3 November 2026. Source SHA-256 `fdfff94ead4047b3b668ef8330786f0f732be5c1a273784e1a9c07984d5868f7`.

1. **Should fix:** The v15 final frame retains two simulated-data graphs at the left. The opening description and scene 1 omit them. Align the opening frame with v15 under rule 16.
2. **Should fix:** The timing table gives about 424 seconds of speech. The 5,663 separate-scene characters take about 426 seconds at 13.3 characters per second; adding the listed holds gives the stated total of about 526 seconds. Correct the intermediate speech figure.

The hook now specifies the applied push, and the bend distinguishes average velocity change at the midpoint from instantaneous acceleration at the car. Recalculation is in `work/brief159/v16-calculations.json`. The named `phys-y11-` plates exist and no `y11p-` name occurs. Scene 1 of v17 uses v16's actual lift-and-scale handoff, despite v17's stale assumption elsewhere. The parser counted 14 scenes, 5,663 separate and 5,676 joined characters. No em dash or checked American spelling appears in narration. No audio or animation was inspected.
