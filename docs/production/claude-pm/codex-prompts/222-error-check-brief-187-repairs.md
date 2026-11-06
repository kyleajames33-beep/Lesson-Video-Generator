# Brief 222: error check of the brief 187 repairs (Year 12 Physics m5-v01 to v10, not v04), then plates

Read `00-standing-rules.md`, `maths-visual-standard.md`, and briefs 186 and 214 (their method and file format). This is error-only for the review part. Do not spawn sub-agents. No design edits, speech or commits. Light work; it may run alongside a render. Run it after 221.

**Designs:** `phys-y12-m5-v01`, `v02`, `v03`, `v05` to `v10` in `lessons/`, all at Revision 2. (v04, the pilot, is checked in brief 217.) Claude resolved your brief 187 findings and upgraded each design to the visual standard. v05 was redesigned at scene level. The root decisions that apply are the m5 notes after brief 187.

**Check each design:**
1. Every brief 187 finding is resolved as the Revision 2 section claims.
2. No new physics or arithmetic error. Recalculate with g = 9.8 m s⁻² every changed number and every slider and readout value in `work/brief222/`, in particular:
   - v01's t = 0.49 s at every launch speed;
   - v02's u_x² + u_y² = 400;
   - v05's 35.35 + 28.68 against 35.35 + 12.73 m, and the 64.1 m peak near 32.5°;
   - v06's 3.3 m and 0.1187 m;
   - v08's R ÷ √h = 1.01;
   - v09's 20, 10 and 0 N m;
   - v10's balance at 1.44 m.
3. Cues are verbatim and in spoken order.
4. Openings equal the previous final frames, including the v03/v04 and v04/v05 joins with the pilot.
5. Counts are the sum of scene strings, and seconds stay within the band and the 570 s cap.
6. Plates exist and are not stretched.
7. No em dashes, Australian spelling, and no people, hands or faces.

Write `checks/p-y12-m5-vNN-rev2-error-check.md`.

**Then plates:** for designs with no blocker, do the following and update the brief 187 manifest:
- paint `y12p-drop-launch-base-v1` and `y12p-drop-launch-slider-v1`;
- clean the edge fringe on `y12p-plumb-bob-v1` and `y12p-spirit-level-v1`;
- split the seesaw into `y12p-seesaw-plank-v1` and `y12p-seesaw-stand-v1`.

**Hand-in:** to `status.md`, one line per design, then the plates.
