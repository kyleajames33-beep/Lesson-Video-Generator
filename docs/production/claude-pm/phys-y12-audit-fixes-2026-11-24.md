# Year 12 Physics coherence audit fixes, 24 November 2026

Build-and-design fix agent (Claude) for root. Source: `checks/phys-y12-coherence-audit-2026-11-23.md`. No commit, no branch change, no full render, no voiced narration changed.

## Part A: built joins (src)

Audit B-B1. Every `src/` edit was made while holding `work/brief245/root/stills.lock` (taken twice, released after each typecheck). Stills were rendered under `out/explainer/.stills-lock`, one Remotion process at a time, in the foreground. No MP4 was rendered.

### phys-y12-m5-v04 opens on v03's final frame

- `src/explainer/lessons/phys-y12-m5-v04/s1.tsx` (scene 1, hook): imports `V03FinalFrame` from `../phys-y12-m5-v03/s3` and shows it under `<Freeze frame={v03Dur('handoff') - 1}>`, cross-fading out over frames 10 to 34 while v04's own hook fades in (the v05 to v11 pattern). The Freeze is needed: without it, v03's heading types on by v04's local frame and frame 0 showed it only partly written ("...the landing veloci"). Timing unchanged: the measured `p-y12-m5-v04/measured/lesson.json` is untouched, and no cue moved. The countdown and every scene element sit inside the fading wrapper.
- `assets.ts`: adds v03's plates (the same launcher and ball plates) for the opening.
- Stills (half scale) at frames 0, 15, 22, 45 and 90: frame 0 is v03's final frame with its full heading; 15 and 22 show the dissolve; 45 and 90 show v04's hook as before.
- v04's narration opens "Last time, a ball launched at twenty-five metres per second, at fifty degrees, landed sixty-two point eight metres away. At forty degrees, it landed in exactly the same spot.", which matches v03's frame.

### phys-y12-m5-v12 opens on v11's final frame

- `s1.tsx` (scene 1): imports `V11FinalFrame` from `../phys-y12-m5-v11/s3` and cross-fades over frames 10 to 34. Positions aligned to v11's frame:
  - roundabout `RB` (in `parts.tsx`) moved from centre (520, 580), radius 290, road 96 to v11's (560, 600), radius 270, road 110;
  - the car starts at v11's position (60 degrees anticlockwise from 3 o'clock, t = 2 s of the 12 s lap; `PHI_V11`), holds still until frame 34, then laps as before (300 frames a lap). Car length 130 to 120 px, as in v11;
  - the violet "a" arrow now starts at the car centre and is 170 px long, width 9 (v11's); the amber dashed F_net arrow is offset 50 px along the motion and is 170 px long (v11's);
  - side-view card from (1290, 186), 534 wide to v11's card position (1100, 200), 724 wide; "Next" chip from (1290, 460), 534 wide, 32 px to v11's (1100, 720), 724 wide, 36 px; the question and choice chips moved to x 1100; the countdown ring moved from (1100, 330), where it would sit on the card, to (1720, 640).
- `common.ts`: `HEAD_V11` was "How can speed be constant while velocity keeps changing?" (v11's opening question, not its final heading). It is now v11's final heading, "Which real force pulls it in?", at v11's size (`HEAD_V11_SIZE = 56`), in scenes 1 to 3 until "answer is friction", where the v12 heading takes over as before.
- Scene 9 (past the limit) uses the same `RB`; at the new geometry its drifting car stays clear of the right-hand bars and chips (outer road edge at x 955 at the widest drift).
- `assets.ts`: adds v11's car plates.
- `V12FinalFrame` is unchanged, so v13's opening is unaffected.
- Stills at frames 0, 15, 22, 45 and 90: frame 0 is v11's final frame exactly; the dissolve keeps the ring, car, arrows, card and chip in place; the heading does not change.
- Timing is still provisional (`PROVISIONAL = true`): v12 is not voiced yet.

### Typecheck and grade

- Scoped typecheck (v04, v12 and their imports, noUnusedLocals): no errors in either lesson (only pre-existing unused-import warnings in `kit.tsx`, v11 `s3.tsx` and two maths files).
- `npm run grade:explainer -- Explainer-phys-y12-m5-v04`: **PASS WITH WARNINGS, 0 failures, 3 warnings** (attempt 1 and attempt 2 cards 58% bare; key-notes text 491 characters). None of them is in the changed scene.
- `npm run grade:explainer -- Explainer-phys-y12-m5-v12`: **PASS WITH WARNINGS, 0 failures, 10 warnings**, all sparse frames of 52% to 58% (the same nine as the 23 November build plus `friction-job` at 52%, probably because the shorter v11 heading leaves more paper). Reports under `out/explainer/<id>/grade/`.
- Not done here: a dense 3 s sweep and playback-speed review of the two openings (root's playback pass).

## Part B: unbuilt design fixes (docs only)

Scope: `lessons/phys-y12-m5-v14.md` to `phys-y12-m8-v22.md` and the route. The built designs m5-v01 to v13 were not edited. Every edited design has a "Coherence audit fix (24 Nov 2026)" section at its end.

### Fix 6 (audit U-S3): nuclear notation

- **m7-v16 scene 5** (first nuclear symbol). New sentence after "four hydrogen nuclei become one helium nucleus.": "In these symbols, the top number is the mass number, the protons plus neutrons, and the bottom number is the atomic number, the protons." The scene 5 symbols are now written in full notation (¹₁H, ⁴₂He), with a navy ring and tag "mass number A: protons + neutrons (2 + 2)" and a rose ring and tag "atomic number Z: protons" on ⁴₂He; both tags fade before the mass bars. Scene 5: 467 to 604 characters.
- **Module 8 entry lines relabelled** (no narration change; none of them was spoken):
  - m8-v01: "atoms and nuclei (Year 11)" becomes "Stage 5 Science; nuclear symbols glossed in m7-v16" (both entry lines).
  - m8-v05: "nuclear notation (Year 11)" becomes the m7-v16 gloss (both entry lines and the double-teaching note). Coulomb repulsion stays Year 11.
  - m8-v06: "beta decay (Year 11)" becomes Stage 5 Science, with this design's scene 8 plain sentence and m8-v14 for the full treatment; nuclear notation points to the m7-v16 gloss.
  - m8-v09: "nuclear notation (Year 11)" becomes the m7-v16 gloss (entry lines, completed-nucleus note, double-teaching note). Elastic collisions stay Year 11.
  - m8-v14: "Year 11 nuclear notation" becomes the m7-v16 gloss (entry lines and the review note).

### Fix 8 (audit U-S2): "Cos is close" and the inverse-square aid

| Design | Where | Change | Narration |
| --- | --- | --- | --- |
| m6-v09 | scene 4, flux sentence | "Cos is close. The part that goes through sits next to theta, along the normal, so it's B cos theta, and the flux is B A cos theta." Recall chip on screen. | changed (+58) |
| m6-v04 | scene 4, after v perpendicular | "Cos is close, so the part across the field, opposite theta, takes sine. It's v sine theta." Recall chip. | changed (+68) |
| m6-v07 | scene 5, before the force formula | "Cos is close, so the part across the field, opposite theta, takes sine." Recall chip. | changed (+72) |
| m6-v16 | scene 4, before the torque result | "Cos is close, so the turning part of each force, opposite theta, takes sine." The force on the enlarged side resolves into F cos θ (along the face, through the axle) and F sin θ (turning part), with a recall chip. Physics: the angle between each force and its lever arm equals θ (B to area normal), the design's author note a. The audit's "part across the field" wording was not used here because each force is always across the field. | changed (+77) |
| m5-v14 | scene 2, N cos θ / N sin θ split | screen-only recall chip "Cos is close: N cos θ is next to θ (up); N sin θ is opposite (inwards)" | unchanged |
| m7-v08 | scene 4, E cos θ split | screen-only recall chip "Cos is close: the part next to θ, along the axis, is E cos θ" | unchanged |
| m5-v13 | built | not edited (see open questions) | n/a |
| m5-v17 | memory aid | "Double the distance, quarter the pull." becomes "Twice as far, a quarter of the pull." (Year 11 "Twice as far, a quarter of the light"). Scene 12 now reads "To keep it straight: measure r from the middle. Twice as far, a quarter of the pull."; the memory card, notes card and memory-aid check use the same wording. | changed (-6) |

### Chip wordings (audit U-S6; 6 mismatches = 74 of 80)

A script compared every final-frame chip with the next design's H1 question. Six mismatches, as the audit found:
- **m5-v23 to m6-v01 (fixed):** chip now "Next: how does the voltage between parallel plates set a charged particle's acceleration?" (m5-v23 scene 14 visual and final frame; m6-v01's opening-frame quote).
- **m7-v10 to m7-v11 (fixed the other way):** v10's chip already matched v11's own on-screen heading ("Planck's constant"), which the chip turns into, so m7-v11's H1 and learner-question line now read "Planck's constant" and the route entry was changed to match (question, title, mainLearnerQuestion). Changing the chip to "Planck constant" would have broken the on-screen join.
- **m5-v01 to v04 (built, not changed):** v01 "how does the launch angle set u_x and u_y?", v02 "height, flight time and landing velocity", v03 "why do 40° and 50° land together?", v04 "landing below the launch level". These are on-screen text in built, rendered videos (v02 v2 was rendering during this work; v05 v2, which opens on v04's frame, is rendered). See open questions.

After the fix, the script finds no unbuilt mismatch.

### Site paths (audit U-S5)

- **Route** `docs/production/programme/phys-y12-route-inputs.json`: all 102 `sourceLessons.path` values now point to `C:/Users/kygs/teaching-app-fix/subjects/physics/year12/...` (all 65 distinct files exist in the clone). Hashes not changed: each entry has `"sha256Stale"` and a top-level `"sourceRepoint"` note. Valid JSON.
- **Designs** m5-v14 to m8-v22 (68 files, 75 paths): `C:/Users/kygs/hscscience/` became `C:/Users/kygs/teaching-app-fix/`; each SHA256 is kept and followed by "(stale: hashed against the old C:/Users/kygs/hscscience copy; not re-hashed against teaching-app-fix, 24 Nov 2026)". Public `hscscience.com.au` URLs unchanged. The built designs m5-v01 to v13 still name the old path (out of scope).

### Narration changed (recounted by script, build parser rules)

| Design | Was | Now | Estimate |
| --- | ---: | ---: | --- |
| m5-v17 | 6,320 | 6,314 | about 549 s |
| m6-v04 | 5,641 | 5,709 | about 506 s |
| m6-v07 | 5,996 | 6,068 | about 531 s |
| m6-v09 | 5,594 | 5,652 | about 500 s |
| m6-v16 | 6,450 | 6,527 | about 556 s |
| m7-v16 | 5,750 | 5,887 | about 513 s |

All stay inside 5,500 to 6,800. No em dashes in any edited file. Headers and "Narration length estimate" sections updated.

**Prepared inputs are now stale.** The `p-y12-*` folders for these six still hold the old scene text, and `work/brief262/resume-plan.json` lists **m5-v17 in the P5 voicing plan**. Re-prepare m5-v17 scene 12 (and the five others before their waves) before voicing, or the old line will be voiced. Because every unbuilt design file changed (site paths), every `sourceDesignSha256` in `p-y12-m5-v15` to `p-y12-m8-v22` now differs from its design; `scripts/prepare-brief259-physics.mjs` asserts "Archive changed prepared source before replacement" on a re-run, so archive the old prep first. For the 62 designs whose narration did not change, the prepared voiceover text is still correct.

## Open questions for root

1. **v03 to v04 colour roles swap at the join.** v03 ends with 50° solid orange and 40° dashed blue-grey; v04 (voiced, rendered 7 Nov) draws 50° dashed blue-grey and 40° solid orange throughout, as its build note says. The join is now a dissolve between two different layouts, so the colours swap during frames 10 to 34. A fully matched join would mean restyling v04's flights (all scenes) or v03's final frame; not done. Decide at the v04 playback pass.
2. **Built chips (B-N1):** v01, v02, v03 and v04 chips are topic labels or paraphrases. v03's chip ("Next: why do 40° and 50° land together?") is now the frame v04 opens on, so changing it means re-rendering v03 v2. Changing v04's chip would break v05's rendered opening, which freezes v04's handoff. Left for root.
3. **m5-v13** (built) is in the audit's "Cos is close" list (a recall chip at the tension components). Not edited, because it is a built lesson outside this scope; it is a screen-only chip if root wants it.
4. **m5-v17 voicing:** it is in the P5 plan (`work/brief262/resume-plan.json`). Its prepared `p-y12-m5-v17/lesson.json` still has the old scene 12 line. Re-prepare before it is voiced.
5. **Prepared-input hashes:** every unbuilt design changed (site paths), so a re-run of `prepare-brief259-physics.mjs` will need the old prep archived first.
6. **Other "Year 11" labels that may be wrong in 2017 terms** (not in the audit's five, not changed): m8-v01 "half-life (Year 11)" in its double-teaching note, and m8-v06 "alpha particle named for helium-4 (Year 11)". 2017 Year 11 Physics teaches neither.
7. **On-screen syllabus tags in designs:** m6-v07 and m6-v09 still ask for a grey "Physics Stage 6 (2017)" tag on screen, which the 21 November build rule forbids. The builder must drop them.
8. The v12 design's opening section still describes the old heading. The build now uses v11's final heading; update the design text if root wants them to agree.
