# Brief 235: Maths d02 to d14 redesigns: review, plates, then re-voice the changed scenes

Read `00-standing-rules.md`, `maths-visual-standard.md` (especially "Maths anchors come from everyday life"), and briefs 195 and 213 (method and file formats). Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit any key. One heavy process at a time.

**Background.** The owner approved the d01 pilot (7 Nov), so Maths now builds in bulk. Claude redesigned `math-a12-d02` to `d14` to the visual standard on the d01 Revision 6 pattern, each with an everyday anchor (no science by default). Every design's last Revision section lists:
- the anchor;
- the simulation;
- the colour roles;
- the plates;
- the re-voice list;
- the counts.
Root decisions are in `checks/root-decisions-maths-redesign.md` (1 to 21). The old takes for unchanged scenes are kept, so only the changed scenes are re-voiced.

**Order of work.** Do steps 1 and 2 for all 13 designs first, then step 3 (plates), then step 4 (voice). If step 1 finds a blocker in a design, skip steps 3 and 4 for that design and report it. Root repairs it, and the rest go ahead.

**Step 1: learning review and maths check, per design.** Use the brief 195 format and write:
- `checks/m-a12-dNN-redesign-learning-review.md`;
- `checks/m-a12-dNN-redesign-maths-check.md`.

The review is full only for what is new; unchanged scenes were reviewed before. Check:
- **The anchor's maths.** Does it teach the idea truly, with no hidden error?
  - d02: ln 2 ≈ 0.693 per decade, about 6.9% a year.
  - d03: users eˣ thousand, and the time to x thousand is ln x weeks.
  - d04: octaves as log base 2, bels as log base 10.
  - d05: the Ferris wheel height sin x, rate cos x.
  - d06: the bike crank and sin(x²).
  - d07: the deck growing at 4 m²/day against 0.5.
  - d08: the trip average with no average over zero time.
  - d09: the ledge and the creek.
  - d10: the coaster global maximum of 18, the tied minimum, and whether the rail guide fits the curve.
  - d11: the beam spot speed 1 + distance² per radian.
  - d12: shadow tan x, sunbeam sec x, and the co-partner minus.
  - d13: spot speed sec²(tilt) × tilt rate.
  - d14: the headlight beam as the tangent and the line straight across the road as the normal.
- **Simulations and readouts.** Recalculate every simulation and readout value in `work/brief235/`.
- **New narration.** The changed scenes on the re-voice lists, including the new `scene-01a` in d07 and d08.
- **Cue order.** Cues are verbatim and in spoken order.
- **Counts.** Each count is the sum of the scene strings, and every design is under 570 s.
- **Joins.** d01/d02 to d14/d15.
- **Text rules.** No em dashes, Australian spelling, and no people, hands or faces.

**Step 2: anchor check against the owner's rule.** Confirm that no design uses a science context where an everyday one would serve, and that no two designs share a context. Report any doubt; do not edit.

**Step 3: plates.** Paint them as each design's Codex asset brief specifies: transparent PNG, native size (no 2400 px minimum), never stretched, and no people, hands or faces.
- **d02:** `ma12-coin-jar-v1`, `ma12-coin-jar-full-v1`, `ma12-coin-v1`.
- **d03:** `ma12-phone-v1`, `ma12-stopwatch-v1`.
- **d05:** `ma12-ferris-wheel-rim-v1`, `-stand-v1`, `-gondola-v1`, `-gondola-marked-v1`.
- **d06:** `ma12-bike-crankset-v1`, `ma12-bike-pedal-v1`.
- **d07:** `ma12-timber-deck-v1`, `ma12-timber-deck-top-v1` (exactly 2:1).
- **d08:** `ma12-country-road-v1` (tileable).
- **d09:** `ma12-hiking-valley-v1`.
- **d10:** `ma12-coaster-track-v1` (painted to the 11-point rail guide), `ma12-coaster-car-v1`.
- **d11:** `ma12-lighthouse-v1`, `ma12-lighthouse-islet-top-v1`, `ma12-beach-strip-top-v1`.
- **d12:** `ma12-tower-block-v1`.

That is 22 plates. Check each composite on cream. Write `assets/brief235-manifest.json` with native sizes, hashes and anchors (pivots, rail guide points, the deck ratio, the road tile seam).

**Step 4: re-voice only the changed scenes**, with `scripts/generate-google-audio.mjs`: voice `voice_shdbjsxcrr0a`, model `gemini-3.8-flash-tts`, and the "ay" respelling as in brief 213. Before writing anything, back up each lesson's `measured/` and `public/audio/math-a12-dNN/` to `work/brief235/backup/`.

The scenes to voice:
- d02: 1 and 9;
- d03: 1 and 6;
- d04: 1 and 9;
- d05: 1 and 3;
- d06: 1 and 3;
- d07: 1 and 1a;
- d08: 1 and 1a;
- d09: 1;
- d10: 1 and 4;
- d11: 1 and 2;
- d12: 1 and 8;
- d13: 1 and 3;
- d14: 1 and 5.

Reuse every other take whose text hash is unchanged. If any other scene's hash differs, voice it too and report it.

Rewrite each `measured/lesson.json`:
- scene ids follow the design's scene list;
- durations include the design's holds;
- every key-notes scene is fixed at 45 s (root decision 13).

Validate:
- alignment, recording the worst gap;
- that every bold cue has a timing;
- the caption export.

Run machine listening only, with human listening marked pending. If d07 scene 1a runs over about 62 s, apply the design's trim reserve only after asking root (write it in `status.md` and continue with the others).

**Do not** build scenes, render, or touch d01 or d15 onwards.

**Hand-in** to `status.md`, one block per design:
- review findings (blocker, should fix, optional);
- the anchor check;
- plates delivered;
- characters voiced, takes reused, total seconds and cost;
- the measured path;
- the alignment and cue results.
