# Brief 248: Year 11 Maths Advanced c01 to c18 and e01 to e08: maths check, plates, then voice

Read `00-standing-rules.md`, `maths-visual-standard.md`, brief 240 and brief 247. Use brief 247's method, file formats, plate method and voicing settings exactly. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Voicing runs alone. Do this after brief 247's steps 1 to 3 for w01 to w31, in gaps between voicing.

**Designs (26):** `docs/production/claude-pm/lessons/math-a11-c01.md` to `c18.md`, then `math-a11-e01.md` to `e08.md` (added 17 Nov; rulings at the end of `checks/root-rulings-maths-a11-c-e-packs.md`, designers' calls in `checks/root-decisions-maths-a11-e01-e08.md`). e02 says "Euler": respell it "Oiler" in the voice request. Root's rulings are in `checks/root-rulings-maths-a11-c-e-packs.md`, and the designers' calls are in `checks/root-decisions-maths-a11-c01-c09.md` and `-c10-c18.md`. Claude is running the independent learning review (`checks/m-a11-cNN-learning-review.md`), so this brief has **no learning review step**.

**Step 1: maths check, per design.** Write `checks/m-a11-<id>-maths-check.md` in the brief 195 format. Check:
- every number in "Numbers to verify", recalculated in `work/brief248/` (SymPy, exact values);
- that the cues are verbatim and in spoken order;
- that each character count is the sum of the scene strings, and each design is under 570 s;
- the joins w31 to c01, each c to the next, c18 to e01, each e to the next, and e08 to t01 (no t01 design yet: check that e08 states no exact value);
- no em dashes, and Australian spelling;
- the syllabus wording in each YouTube description against `programme/syllabus/maths-advanced-2024-y11-crosswalk.json`;
- that the strand delivers what the Year 12 d strand assumes: the chain rule as dy/du × du/dx (c10), the product and quotient rules (c11, c12), and `cie3d91a6e` in c13.

**Step 2: anchor check.** No c design shares an anchor context with another c design, any w design or any of the 67 Year 12 designs, except where the rulings allow it.

**Step 3: plates.** Paint every new `ma11-` plate named in the c designs' Codex asset briefs, in join order: a plate that first appears in an earlier lesson's final frame must be ready before that build. Note that c16's pump track has a profile file, and c15's roller door has a curtain plate. Report each plate in `assets/brief248-manifest.json`.

**Step 4: voice** after brief 247's voicing, in order c01 to c18, then e01 to e08, once Claude has resolved the learning review for that design (its Status line says "learning review resolved"). Use the Google voice and model in brief 247, and write `docs/production/claude-pm/lessons/math-a11-<id>/measured/lesson.json`.

**Hand-in** to `status.md`: one block per design.
