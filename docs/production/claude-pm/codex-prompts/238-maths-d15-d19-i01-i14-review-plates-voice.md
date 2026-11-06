# Brief 238: Maths d15 to d19 and i01 to i14 redesigns: review, plates, then voice

Read `00-standing-rules.md`, `maths-visual-standard.md` (especially "Maths anchors come from everyday life"), and briefs 195, 213 and 235 (method and file formats). Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit any key. Voicing runs alone. Run this after brief 235.

**Designs:** `math-a12-d15` to `d19` and `i01` to `i14` (19 designs), redesigned by Claude on 7 Nov to the visual standard with everyday anchors. None of them is voiced; d15's old `lesson.json` and `voice-manifest.json` are stale, so regenerate them. Root decisions 22 to 36 in `checks/root-decisions-maths-redesign.md` apply.

**Step 1: learning review and maths check, per design.** Use the brief 195 format and write `checks/m-a12-<id>-redesign-learning-review.md` and `-maths-check.md`. These are full reviews, because the narration is new.

Check:
- The anchor's maths is true. In particular:
  - d15: the 18.4° corner jump;
  - d16: the vase level rises slowest at the widest radius;
  - d17: the busiest day is the inflection;
  - d18: the pen optimum;
  - d19: the 15% depreciation and rate ÷ value = −0.15;
  - i01: C = 50 from 66 cm at 4 weeks;
  - i02: 6 cm after 6 h, and 24 cm if ÷4 is forgotten;
  - i03: C = 100, and "half of what's left";
  - i04: +$693 per doubling;
  - i05: 19.1 and 38.2 kWh;
  - i06 and i07: the rain and bath figures (36 in, 4 out, net 32 L);
  - i08: noon is fullest, and + C;
  - i09: 1 − (−2) = 3;
  - i10: net 0 against 4 floors;
  - i11: e − 1 m² against 1 m²;
  - i12: the path cut and fill, the 2 m² arch, and 10.5 m² against the crossed 6.25;
  - i13: 96/π ≈ 30.6 kWh against 48, and sand 36 kg against the crossed 54;
  - i14: the cm/s robot (decision 29).
- Every simulation and readout value is recalculated in `work/brief238/`.
- The site worked examples are confirmed against the live site lessons. Decision 35: the site repo is not on Claude's machine, so these are unverified until you check them.
- Cues are verbatim and in spoken order.
- Each count is the sum of the scene strings, and every design is under 570 s. d15, d17, i03 and i04 are close to the cap.
- Joins hold from d14 to d15 through to i14 and f01.
- No em dashes, Australian spelling, and no people, hands or faces.

**Step 2: anchor check.** Confirm that no science context is used where an everyday one would serve, and that no two designs across d01 to i14 share a context. Lifts belong to i10 only. Report any doubt.

If a design has a blocker, skip steps 3 and 4 for it, and report it.

**Step 3: plates.** Paint every new `ma12-` plate named in these 19 designs' Codex asset briefs. That is roughly 35 plates; list them from the files. Use transparent PNG at native size, never stretched, with no people.

For plates painted to a profile, paint to the stated table and report the measured positions in the manifest. If you miss the tolerance, report it: the builder fits the coded curve to the plate, and the plate is never warped (decision 30). These are:
- d16's vase;
- i11's pool cutaway;
- i12's cut and fill and its footbridge;
- i10's lift shaft landings;
- d10's coaster rail (if not already done in 235).

Write `assets/brief238-manifest.json`.

**Step 4: voice** every design without a blocker, as in brief 235. Use the Google voice `voice_shdbjsxcrr0a` with `gemini-3.8-flash-tts` and the "ay" respelling. Write `measured/lesson.json`, with the key-notes scene at 45 s. Run alignment, cue and caption checks, and machine listening.

If a voiced design runs over 570 s, apply its listed reserve trims in order only after writing to root in `status.md`. Continue with the others meanwhile.

**Hand-in** to `status.md`, one block per design: review findings, the anchor check, plates, characters, seconds, cost and the measured path.
