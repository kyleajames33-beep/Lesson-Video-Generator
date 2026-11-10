# Brief 240: Maths f01 to f15, s01 to s12, t01 to t04 and g01 to g03: review, plates, then voice

Read `00-standing-rules.md`, `maths-visual-standard.md` (especially "Maths anchors come from everyday life"), and briefs 195, 235 and 238 (method and file formats). Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit any key. Voicing runs alone. Run this after brief 238's voicing.

**Designs (34):** `math-a12-f01` to `f15`, `s01` to `s12`, `t01` to `t04` and `g01` to `g03`. Claude redesigned all of them from 7 to 11 Nov to the visual standard with everyday anchors. None is voiced. The root decisions that apply are 37 to 63 in `checks/root-decisions-maths-redesign.md`. The site repo is not on Claude's machine, so every site worked example was kept as recorded; confirm each one against the live site.

**Order.** Run step 1 and step 2 for all 34 designs, then step 3, then step 4 in playlist order: f, then s, then t, then g. If step 1 finds a blocker, skip that design's plates and voice, and report it.

**Step 1: full learning review and maths check, per design.** Use the brief 195 format and write `checks/m-a12-<id>-redesign-learning-review.md` and `-maths-check.md`. Check:
- the anchor's maths, and every simulation and readout value, recalculated in `work/brief240/`. Use exact fractions for finance (to the cent) and SciPy for normal-distribution values (4 decimal places);
- f06's rice claim against a current FAO figure (decision 41);
- the re-contexted site examples (decisions 38, 48, 52 and 60): the same numbers and the same answers;
- that cues are verbatim and in spoken order;
- that each count is the sum of the scene strings, and each design is under 570 s;
- the joins i14/f01 through to g03, including f15/s01, s06/s07, s12/g01 and the t strand's joins with i05;
- no em dashes, Australian spelling, and no people, hands or faces;
- no financial advice (maths models with stated rates only);
- for g01 to g03, also an error check (they had none before).

**Step 2: anchor check.** Across all 67 Maths designs, confirm that no two share an anchor context, except the accepted callbacks: d05's wheel in t03, s06's cookie in s08 and g03, and the shared exam desk in g01 to g03. Confirm too that no science context is used where an everyday one would serve.

**Step 3: plates.** Paint every new `ma12-` plate named in these 34 designs' Codex asset briefs, as transparent PNG at native size, never stretched, with no people. List them from the files; there are roughly 45.
- **Paint order matters** (decisions 49 and 61). A plate that first appears in an earlier lesson's final frame must be ready before that build:
  - f12's plates and f13's statement appear in f11's and f12's final frames;
  - f15's suitcase appears in f14's;
  - the skyline appears in t01's;
  - the tide board appears in t02's.
- Report each plate's anchors, screen rectangles and profile points in `assets/brief240-manifest.json`. For plates painted to a profile, report measured positions; the builder fits the code to the plate, and the plate is never warped.

**Step 4: voice** every design without a blocker, as in briefs 235 and 238:
- Google voice `voice_shdbjsxcrr0a`, model `gemini-3.8-flash-tts`, with the "ay" respelling;
- write `measured/lesson.json`, with the notes scene at 45 s;
- run alignment, cue and caption checks, and machine listening.

The provider allows about 100 requests a day. Keep a ledger and stop cleanly at the quota; never retry past it. If a design runs over 570 s, apply its reserve trims in order only after writing to root in `status.md`.

**Hand-in** to `status.md`, one block per design: review findings, the anchor check, plates, characters, seconds, cost and the measured path.
