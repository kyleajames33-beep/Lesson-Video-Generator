# Brief 249: Year 11 Maths Advanced t, g and s strands: maths check, plates, then voice

Read `00-standing-rules.md`, `maths-visual-standard.md`, and briefs 240, 247 and 248. Use brief 248's method, file formats, plate method and voicing settings exactly. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Voicing runs alone. Do this after briefs 247 and 248 steps 1 to 3, in gaps between voicing.

**Designs (36), all "Revision 2 (or 3): learning review resolved" on 17 Nov:**
- Trigonometry (19): `docs/production/claude-pm/lessons/math-a11-t01.md`, `t02a.md`, `t02b.md`, `t03.md` to `t13.md`, `t14a.md`, `t14b.md`, `t15a.md`, `t15b.md`, `t16.md`. (`t02.md` is a stub after the split; skip it.)
- Graph transformations (6): `math-a11-g01.md` to `g06.md`.
- Probability and data (11): `math-a11-s01.md` to `s11.md`.

Root's rulings: `checks/root-rulings-maths-a11-t-g-s-packs.md` (rulings 1 to 45). Designers' calls: `checks/root-decisions-maths-a11-t01-t08.md`, `-t09-t16.md`, `-g01-g06.md`, `-s01-s11.md`. Learning reviews and resolutions are done by Claude (`checks/m-a11-<id>-learning-review.md` and the `-resolution.md` logs), so this brief has **no learning review step**. Route inputs: `programme/maths-a11-route-inputs-4.json` (t) and `-5.json` (g, s); the course outline table records the splits.

**Step 1: maths check, per design.** Write `checks/m-a11-<id>-maths-check.md` (for example `m-a11-t02a-maths-check.md`) in the brief 195 format. Check:
- every number in "Numbers to verify", recalculated in `work/brief249/` (SymPy, exact values; for trig equations also a numerical root scan over the stated domain, endpoints included; bearings by coordinates);
- that the cues are verbatim and in spoken order;
- that each character count is the sum of the scene strings, and each design is under 570 s;
- the joins: e08 to t01, each t to the next (t01, t02a, t02b, t03 ... t13, t14a, t14b, t15a, t15b, t16), t16 to g01, each g to the next, g06 to s01, each s to the next; s11 closes the course;
- no em dashes, Australian spelling, no people, hands or faces; no gambling (ruling 8);
- the syllabus wording in each YouTube description against `programme/syllabus/maths-advanced-2024-y11-crosswalk.json`;
- Year 12 needs: t08 delivers `ciccaa78be`, t10 delivers `cid79268a8`, t15a and t15b leave students solving trig equations in degrees and radians; g01 to g04 deliver what Year 12 t01, d02, d06 and d13 assume; s04 and s09 to s11 deliver what Year 12 s01 to s06 assume.

**Step 2: anchor check.** No design in these strands shares an anchor context with another Year 11 design (w, c, e, t, g, s) or any of the 67 Year 12 designs, except where the rulings allow it (rulings 19, 23, 24, 39).

**Step 3: plates.** Paint every new `ma11-` plate named in these designs' Codex asset briefs, in join order: a plate that first appears in an earlier lesson's final frame must be ready before that build (for example the tuning fork before t09, the photocopier before g02, the counter bag before s06). Report each plate in `assets/brief249-manifest.json`.

**Step 4: voice** after briefs 247 and 248 voicing, in playlist order t01, t02a, t02b, t03 ... t16, then g01 to g06, then s01 to s11, using the Google voice and model in brief 247. Write `docs/production/claude-pm/lessons/math-a11-<id>/measured/lesson.json`. Speak "Euler" as "Oiler" if it appears.

**Hand-in** to `status.md`: one block per design.
