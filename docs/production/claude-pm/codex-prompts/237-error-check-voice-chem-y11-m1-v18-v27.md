# Brief 237: error check of the chem-y11-m1-v18 to v27 repairs, plates, then voice them (wave 7)

Read `00-standing-rules.md`, then briefs 214 and 236 (error-check format and Google voicing method). Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit any key. Voicing runs alone. Run this after brief 236's wave 2, because these lessons sit in the playlist between m1-v17 and m2-v01.

**Designs:** chem-y11-m1-v18, v19, v20, v22, v23, v24, v25, v26 and v27, all at Revision 2. Claude resolved your brief 179 findings (2 blockers, 21 should fix) and upgraded each design to the visual standard. Root decisions 37 and 38 in `checks/root-decisions-chem-y11-m1.md` apply.

**Step 1: error check.** Use the brief 214 format and write `checks/c-y11-m1-vNN-rev2-error-check.md`. Check:
1. Every brief 179 finding is resolved as each Revision 2 section claims.
2. No new chemistry or arithmetic error. Recalculate the changed numbers and every live readout in `work/brief237/`, in particular:
   - v18's decay chain nucleon and charge totals;
   - v19's ion-counter ratios;
   - v20's charge dial formulas and names;
   - v22's like-charge pairs;
   - v23's dipole adder (0.00 at 180°, 1.22 at 104.5°);
   - v25's sheet tester;
   - v26's boiling points from F₂ to I₂ and ethane;
   - v27's alcohol solubilities (butanol about 70 g/L, pentanol about 22 g/L). Source each value.
3. Cues are verbatim and in spoken order. Counts are the sum of the scene strings, and every design is under 570 s.
4. Each opening equals the previous final frame (m1-v17 to v18, through to v27 and m2-v01, with v21 between v20 and v22).
5. Practical framing: v22's conductivity comparison is a teacher demonstration or approved video, and no method is presented as school-approved.
6. No em dashes, Australian spelling, and no people, hands or faces.

**Step 2: plates.** Paint `y11c-lead-dioxide-v1`, `y11c-copper-chloride-crystals-v1`, `y11c-calcium-chloride-v1`, `y11c-sterling-silver-spoon-v1` and `y11c-sic-cutting-disc-v1`, as each design's asset brief specifies: transparent PNG at native size. Check v24's coins plate halo on the paper board, and report it; do not repaint unless it shows. Write `assets/brief237-manifest.json`.

**Step 3: voice (wave 7).** Voice every design with no blocker, as in brief 236:
- run the recording gate;
- use the Google voice `voice_shdbjsxcrr0a` with `gemini-3.8-flash-tts`;
- write `measured/lesson.json`, with the notes scene at 45 s;
- run alignment, cue and caption checks, and machine listening.

**Hand-in** to `status.md`, one line per design: findings, plates, characters, seconds and the measured path.
