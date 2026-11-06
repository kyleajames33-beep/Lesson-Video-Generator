# Brief 224: error check of the brief 188 repairs (Year 12 Physics m5-v11 to v23), then plates

Read `00-standing-rules.md`, `maths-visual-standard.md`, and briefs 186 and 214 (their method and file format). This is error-only for the review part. Do not spawn sub-agents. No design edits, speech or commits. Light work; it may run alongside a render. Run it after 222.

**Designs:** `phys-y12-m5-v11` to `v23` in `lessons/`, all at Revision 2. Claude resolved your brief 188 findings and upgraded each design. v13 was redesigned at scene level. v16's investigation was corrected: the drooping string is treated as a conical pendulum, and the test holds string length and plots Mg against ω². The root decisions that apply are the m5 notes after brief 188, parts 1 and 2.

**Check each design:**
1. Every brief 188 finding is resolved as the Revision 2 section claims.
2. No new physics or arithmetic error. Recalculate every changed number and every slider and readout value in `work/brief224/`, with g = 9.8 m s⁻², G = 6.67 × 10⁻¹¹ N m² kg⁻², M_E = 6.0 × 10²⁴ kg and R_E = 6.371 × 10⁶ m. In particular:
   - v11's 3.43 to 54.83 m s⁻²;
   - v12's 7,056 N, 58,800 N and 13.3 m s⁻¹;
   - v13's 2.26 to 112.3 N and v = 0.8789;
   - v14's 12.909 and 11.34;
   - v15's E = 11.84 J;
   - v16's new data (gradient 0.0203 kg m, inferred mass 0.0254 kg);
   - v18's 30° landing (scene 1) and the slider landings;
   - v19's 88 and 127 min, and the drift values;
   - v20's 75.8 years and 0.209 AU² a month;
   - v21's work and strip-sum values;
   - v23's h = 1.58 × 10⁶ m and the energy-per-kilogram values.
3. Cues are verbatim and in spoken order.
4. Openings equal the previous final frames, including v10/v11, v17/v18 (teal) and v22/v23, and v23's handoff to m6-v01.
5. Counts are the sum of scene strings, and seconds stay within the band and the 570 s cap.
6. Plates exist and are not stretched.
7. v16's practical beat shows no method as school-approved.
8. No em dashes, Australian spelling, and no people, hands or faces.

Write `checks/p-y12-m5-vNN-rev2-error-check.md`.

**Then plates:** for designs with no blocker, do the following and update the brief 188 manifest:
- paint `y12p-paper-clip-v1.png` once (v15 and v16 share it);
- QA `y12p-space-station-v1.png` at 420 px, and repaint only if the truss flecks show.

**Hand-in:** to `status.md`, one line per design, then the plates.
