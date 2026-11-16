# Brief 247: Year 11 Maths Advanced w01 to w14: review, plates, then voice

Read `00-standing-rules.md`, `maths-visual-standard.md` and brief 240. This brief uses brief 240's method, check formats, plate method and voicing settings exactly. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Voicing runs alone. Start this after the Year 12 Maths voicing in brief 240 step 4 is finished or waiting on the quota.

**Designs (14):** `docs/production/claude-pm/lessons/math-a11-w01.md` to `w14.md`. These are Year 11 Mathematics Advanced, 2024 syllabus; the course outline is `programme/maths-a11-course-outline.md`. Root's rulings are in `checks/root-acceptance-maths-a11-w01-w14.md`, and the designers' calls are in `checks/root-decisions-maths-a11-w01-w07.md` and `-w08-w14.md`. Site findings, which the designs already apply: `site-corrections-maths-a11.md`.

**Step 1: learning review and maths check, per design.** Use the brief 195 format. Write `checks/m-a11-<id>-learning-review.md` and `-maths-check.md`. Check:
- every number in "Numbers to verify", recalculated in `work/brief247/` (SymPy, exact fractions);
- that the cues are verbatim and in spoken order;
- that each character count is the sum of the scene strings, and each design is under 570 s;
- the joins w01 to w14, each final frame matching the next opening;
- no em dashes, Australian spelling, and no people, hands or faces;
- the syllabus wording quoted in each YouTube description against `programme/syllabus/maths-advanced-2024-y11-crosswalk.json`.

Flag pace concerns named in the rulings: w02 (six examples), w10 scene 5, and w07's feedback 1.

**Step 2: anchor check.** Confirm that no two of these 14 designs, and none of them against the 67 Year 12 Maths designs, share an anchor context, except where ruling 6 allows reuse.

**Step 3: plates.** Paint every new `ma11-` plate named in the 14 designs' Codex asset briefs. Use transparent PNG at native size, never stretched, with no people, and report each plate in `assets/brief247-manifest.json` as brief 240 does. Paint in join order: a plate that first appears in an earlier lesson's final frame must be ready before that build. The w01 blocks must stack within 3 px; the w11 map is painted to the street lines; the w14 hammocks are painted to the height table. Apply the fallbacks in the rulings if QA fails.

**Step 4: voice** each design without a blocker, in order w01 to w14, as in brief 240 step 4: Google voice `voice_shdbjsxcrr0a`, model `gemini-3.8-flash-tts`, writing `docs/production/claude-pm/lessons/math-a11-<id>/measured/lesson.json`. Ruling 8 applies to w08. Keep the ledger and stop cleanly at the quota.

**Hand-in** to `status.md`: one block per design, giving the review findings, the anchor check, the plates, the characters, the seconds and the measured path. Claude resolves the findings and builds.
