# Brief 214: error check of the brief 180 repairs (Year 11 Chemistry m2-v01 to v07, ws-v04 to v06), then plates

Read `00-standing-rules.md`, `maths-visual-standard.md`, and briefs 173 and 186 (their method and file format). Error-only for the review part. Do not spawn sub-agents. No design edits, speech or commits. Light work; it may run alongside a render.

**Designs:** these ten files in `lessons/`:
- `chem-y11-m2-v01` to `v05` and `m2-v07`, at Revision 2;
- `chem-y11-m2-v06`, at Revision 3;
- `chem-y11-ws-v04` to `ws-v06`, at Revision 2.

Claude resolved your brief 180 findings and lifted each design to the visual standard. Each design's last section lists what changed. m2-v02, m2-v03 and ws-v04 were redesigned at scene level. Root decisions 25 to 28 in `checks/root-decisions-chem-y11-m2.md` apply. Note decision 25: there is no capped-bottle beat anywhere.

**Check each design:**
1. Every brief 180 finding is resolved as the Revision section claims. The m2-v01 blocker is replaced by the no-gas fallback.
2. No new science or arithmetic error. Recalculate every changed number in `work/brief214/`, in particular:
   - v04's 4.575 × 10⁻³ and 59.45;
   - v05's 4.99;
   - v06's 6.044;
   - v07's 6.582;
   - ws-v04's gradient of 1009 and run-3 values;
   - ws-v05's 3.13% and 33.3 to 35.5;
   - ws-v06's 4.966, x = 3.84 and 30.2%.
3. Cues are quoted verbatim and in spoken order.
4. Each opening equals the previous design's final frame.
5. Counts are the sum of scene strings, and seconds stay within the band and the 570 s cap.
6. Every new live simulation is physically right at each displayed value.
7. Every named plate exists and is not stretched.
8. No em dashes, Australian spelling, and no people, hands or faces.

Write `checks/<key>-rev2-error-check.md` (or `-rev3-` for m2-v06).

**Then plates:** for designs with no blocker, paint the new requests. That is only `y11c-beaker-white-precipitate-v1.png` (root decision 26), unless a report finds another missing plate. Reuse the existing brief 180 records for everything else, and update `assets/brief180-manifest.json`.

**Hand-in:** to `status.md`, one line per design, then the plates.
