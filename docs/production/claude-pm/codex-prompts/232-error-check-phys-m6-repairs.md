# Brief 232: error check of the brief 189 and 190 repairs (Year 12 Physics m6-v01 to v20), then plates

Read `00-standing-rules.md`, `maths-visual-standard.md`, and briefs 186 and 214 (their method and file format). This is error-only for the review part. Do not spawn sub-agents. No design edits, speech or commits. Light work; it may run alongside a render. Run it after 224.

**Designs:** `phys-y12-m6-v01` to `v20` in `lessons/`, all at Revision 2. Claude resolved your brief 189 and 190 findings and upgraded each design to the visual standard. v08, v11, v13, v14, v15 and v18 were redesigned at scene level. The root decisions that apply are the m6 notes "After brief 189 and 190 repairs" in `checks/root-decisions-phys-y12-m6.md`. Note in particular:
- v17's corrected energy argument;
- v19 keeps the site's 1500 / 1425 rev/min with a 4-pole ring;
- the CRT plate retry or fallback.

**Check each design:**
1. Every brief 189 and 190 finding is resolved as its Revision 2 section claims.
2. No new physics or arithmetic error. Recalculate every changed number and every slider and readout value in `work/brief232/`, in particular:
   - v01's dial and gap readouts;
   - v02's hit flag and the 19.5 mm ghost path;
   - v03's 4.163 × 10⁷ m s⁻¹;
   - v05's r and T;
   - v10's ε;
   - v13's V_s and I_s;
   - v14's MEPS range;
   - v15's 78.125 MW and 312.5 MW;
   - v16's sin θ;
   - v17's 11 A, 132 W, 242 W and the speed slider;
   - v19's slips of 10, 5.0, 2.0 and 0 per cent;
   - v20's energy bars.
3. Cues are verbatim and in spoken order (v03's "pushed" and v10's "emf" cues changed).
4. Openings equal the previous final frames, including m5-v23/m6-v01, v08/v09, v12/v13, v18/v19 and v20/m7-v01.
5. Counts are the sum of scene strings, and seconds stay within the band and the 570 s cap.
6. Plates exist and are not stretched.
7. Practical beats present no method as school-approved.
8. No em dashes, Australian spelling, and no people, hands or faces.

Write `checks/p-y12-m6-vNN-rev2-error-check.md`.

**Then plates:** retry the painted CRT once at native resolution and exact geometry. If that fails, record the coded-outline fallback as accepted (root decision). The repairs request no other new plates. Update the brief 189 and 190 manifests.

**Hand-in:** to `status.md`, one line per design, then the plates.
