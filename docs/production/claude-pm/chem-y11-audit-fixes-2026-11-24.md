# Year 11 Chemistry audit fixes: record (24 November 2026)

This is the design-fix agent's record of the fixes asked for after the coherence audit (`checks/chem-y11-coherence-audit-2026-11-23.md`, `checks/chem-y11-coverage-map-2026-11-23.md`).

- Nothing was committed, rendered, voiced or published.
- Nothing under `src/` or `lessons/c-y11-*` was edited. The built openings were only read.
- The site clone `C:/Users/kygs/teaching-app-fix` was only read.

Line numbers refer to the working copy after the edits. Narration counts use the build parser rule: `### N.` headings, only lines starting "> ", `**` removed, total = sum of the scene strings. Each count was recomputed by script, and every edited design was checked for em dashes (none). Each edited design also has a new "Revision" section at its end, a refreshed Status line (line 3) and, where narration changed, a refreshed count line (line 5) and a count line under "Narration length estimate".

## Fix 1 (UB1): m3-v06 designed in general terms

**New file:** `lessons/chem-y11-m3-v06.md` (295 lines).

- **Question:** "What chemistry removes toxins when Aboriginal and Torres Strait Islander Peoples prepare poisonous plant foods?"
- **Dot point:** `C3-IQ1-04`, quoted verbatim (line 13).
- **Length:** 19 scenes, 5,709 characters, about 502 s.
- **Chemistry, in order:**
  - toxins of two kinds: small polar molecules that dissolve in water, and enzymes;
  - the new-substance test (m3-v01);
  - leaching, a physical change; the toxin leaves unchanged and the water becomes toxic (m1-v27 polar dissolving);
  - grinding: more surface and a shorter path out, a physical change; the cause is given in plain words, with no forward reference to m3-v15;
  - fresh or running water keeps the outside concentration low, so diffusion continues (m2-v10), shown by a two-tank simulation;
  - heat decomposes some toxins (decomposition, AB → A + B, m3-v02) and denatures enzymes; both are treated as chemical changes, and "some" is said each time;
  - the crossed slip "heating burns off the toxin" (m3-v04 combustion);
  - the sort board;
  - the knowledge-holder principle, stated in scene 2 and developed once in scene 13.
- **Memory aid:** "Grind to open, wash to carry, heat to break."
- **Attempts:**
  - A1: classify a soaking step and explain why running water works better (site WE1 and drill Q1, in general wording).
  - A2: Fe₂O₃(s) + 6HCl(aq) → 2FeCl₃(aq) + 3H₂O(l) (site WE2(a), the balancing consolidation).
- **Cultural content check section:**
  - no named community, nation, person, place, Country, organisation or plant species, and no specific case or toxin name;
  - no recipe detail;
  - no people, artefacts, tools or containers drawn.
- **Plates:**
  - existing cabbage plates `p01-red-cabbage-chopped-v1.png` and `p01-cabbage-steeping-beaker-v1.png`, inspected, used as a harmless leaching picture;
  - one new plate requested: `y11c-plant-kernels-whole-ground-v1.png`, generic kernels with no species features.
- **Opening frame:** m3-v05's toolkit final frame.
- **Final frame:** m3-v07's self-contained opening frame exactly, plus the chip "Next: How can observations order metals by reactivity?".

**Route entry** (`programme/chem-y11-route-inputs.json`):
- lines 4474 to 4477 onward: title and `mainLearnerQuestion` set to the new question; `type` "core"; new `start`; `stop` rewritten to the audit wording; `teachingStatus` "designed 24 Nov 2026 ...";
- line 4461: m3-v05's `nextHandoff` set to the new question;
- lines 6214 to 6215: `coverageAudit.culturalHold` emptied, with a new `culturalHoldLifted` note.

**Design brief** (`chem-y11-design-brief.md`):
- line 32: the cultural hold is replaced by the 18 November general-terms rule, with the m3-v06 note;
- line 10: the site path now points to `C:/Users/kygs/teaching-app-fix` (part of Fix 8).

**`lessons/chem-y11-m3-v05.md`** (Revision 5). The chip and the last two sentences only, as its open decision 1 allows. Other edits in this file:
- line 7: Scope and route handoff;
- line 41: Decisions handoff;
- line 70: "Handoff:";
- line 75: final-frame line;
- line 190: scene 18 Visual chip and cue;
- line 316: metadata "Next";
- line 322: open decision 1, resolved;
- lines 381 onward: Revision 5;
- lines 3, 5 and 250: status and counts.

| m3-v05 | Text |
| --- | --- |
| Line | 188 (scene 18 narration) |
| Was | "Next, a different question about chemistry and food. How do particular Aboriginal and Torres Strait Islander food-processing practices remove **toxins**?" |
| Now | "Next, the same chemistry in a different setting, food. What chemistry removes toxins when Aboriginal and Torres Strait Islander Peoples prepare poisonous plant **foods**?" |
| Count | Scene 18: 383 to 400. Total: 5,621 to 5,638. |

**`lessons/chem-y11-m3-v07.md`** (seam only; Fix 5 changes are listed below). The opening frame is unchanged, and it is now recorded as m3-v06's final frame:
- line 7: Scope;
- line 27: opening-frame decision;
- line 72: opening-frame line;
- line 336: open decision 1, resolved.

## Fix 4 (US1): m1-v20 and m1-v27 end on the built frames

**`lessons/chem-y11-m1-v20.md`** (Revision 4, visuals only):
- line 161: scene 17 Visual rewritten to end exactly on `V20Final` (`src/explainer/lessons/chem-y11-m1-v21/opening.tsx`, positions in `V20`). The builder imports the component. The frame:
  - heading at top left;
  - navy chip under the heading;
  - "NaCl / sodium chloride" and "CO₂ / carbon dioxide" cards with the "ions" and "shared pair" hand tags;
  - "?";
  - solid rope tagged "pull on electrons: electronegativity".
- "(v14)" is dropped, and nothing is faint or dimmed.
- line 177: "Final frame" section to match;
- line 3: Status;
- lines 354 onward: Revision 4.

**`lessons/chem-y11-m1-v27.md`** (Revision 4):
- line 35: Decisions "Close and handoff"; the final frame is exactly `V27Final` (`src/explainer/lessons/chem-y11-m2-v01/opening.tsx`). The frame:
  - heading "Why some things dissolve";
  - navy chip;
  - balance at `balGeo(96, 440, 460)` reading "110.0 g";
  - "beaker tared";
  - rows "water 100.0 g + salt 10.0 g" and "100.0 + 10.0 = 110.0 g";
  - lens tagged "every particle still there".
- line 158: scene 15 Visual to match.
- "Module 1 complete" is removed in all four places: lines 35, 158, 298 (open decision 1) and 324 (Revision 2 note).
- line 64: "the Module 1 close" becomes "the close" (author line).
- Lines 3, 5 and 221 (status and counts) and Revision 4 (lines 347 onward) are updated.
- Narration change (US4): see Fix 6/7.

## Fix 5 (US2): m2-v05 final frame equals the rendered m2-v06 opening

**`lessons/chem-y11-m2-v05.md`** (Revision 4):
- line 34: Decisions handoff;
- line 70: "Final frame" line;
- line 167: scene 15 Visual.

All three now describe `HookBoard` at frame 0 of `src/explainer/lessons/chem-y11-m2-v06/s1.tsx`:
- `FePanel` at (96, 420), scale 1.18, with "2 Fe : 3 O by count" and "by mass: Fe 69.9%, O 30.1%";
- `Eq` "2H₂ + O₂ → 2H₂O", 84 px, centred on x 1000, y 300, with the coefficients amber at frame 0;
- chips "2 : 1 : 2" (teal) and "mass ratio?" (amber, hand);
- bottom-right navy chip "Next: why coefficients give mole ratios" (34 px, right edge at x 1824, y 880);
- no heading.

The memory card leaves on "iron oxide", so it is not in the final frame. v06's "last video" tag is not drawn. The tags "2 : 3 by atoms" and "not 2 : 3 by mass" are gone. Narration change (US4): see Fix 6/7.

## Fixes 6 and 7 (US4 spoken, US3 on-screen): course labels

### Spoken course labels (narration changed)

| Design | Line | Was | Now | Count |
| --- | --- | --- | --- | --- |
| m1-v27 | 156 (scene 15) | "That's the end of Module one. Here's one more thing about dissolving." | "Here's one more thing about dissolving." | 464 to 434; total 5,516 to 5,486 (14 under the band floor; kept, not padded) |
| m2-v05 | 87 (scene 1) | "Back in Module one, we started from a formula" | "Earlier, in the percentage composition video, we started from a formula" | 417 to 443; total 5,754 to 5,780 |
| m3-v08 | 112 (scene 6) | "The syllabus names one more property, electronegativity." | "One more property matters, electronegativity." | 495 to 484; total 6,319 to 6,308 |
| m4-v04 | 184 (scene 17) | "In Module Three, a catalyst gave hydrogen peroxide a different route." | "In the rates videos, a catalyst gave hydrogen peroxide a different route." | 358 to 362; total 6,081 to 6,085 |
| m4-v05 | 90 (scene 1) | "Here's the flask from Module Three" | "Here's the flask from the rates videos" | 384 to 388; total 5,613 to 5,617 |
| m4-v14 (optional, done) | 148 (scene 12) | "That finishes Module 4. It asked what drives reactions." | "That answers our big question, what drives reactions." | See Fix 10 for the total |

Related screen edits for these designs:
- **m2-v05, line 89:** cue and chip changed to "earlier: formula → % (36.1%)".
- **m4-v14, line 150:** Visual cue changed to match the new narration.

### On-screen course labels (screen text only; narration unchanged)

| Design | Lines | Edit |
| --- | --- | --- |
| m1-v27 | 35, 158, 298, 324 | "Module 1 complete" removed (under Fix 4) |
| m2-v20 | 77, 170 | "Module 2 complete" removed. The stale cue "end of Module 2" goes with it; that phrase was not in the narration. |
| m2-v20 | 117 | "rates: Module 3" becomes "rates: a later video" |
| m2-v20 | 39 | "Module 2 ends" dropped from the handoff bullet |
| m3-v01 | 25, 93 | The "Module 2 complete" to "Module 3: Reactive Chemistry" tag is replaced by a small heading "Reactive chemistry" |
| m3-v01 | 108 | The stale cue "as you saw in Module 2" becomes "as you saw earlier", the narration's own words |
| m3-v15 | 74, 189 | "Module 3 complete" removed. The stale cue "end of Module 3" goes with it. |
| m3-v15 | 40 | "Module 3 ends" dropped |
| m4-v01 | 25 | "Module 3 complete" removed from the opening frame |
| m4-v01 | 98 | "why does dissolving cool? later in Module 4" becomes "... later" |
| m4-v04 | 63, 322 | The optional tag "... later in Module 4" becomes "... later"; author note (e) now says "a later question in this course" |
| m4-v14 | 68 | Course-end tiles now carry topic titles without module numbers. "Year 11 Chemistry: complete" stays. |

**Revision sections added:**
- Revision 4: m2-v20 (lines 372 onward), m3-v01 (361 onward), m3-v15 (386 onward), m4-v04 (373 onward);
- Revision 5: m4-v01 (375 onward);
- Revision 4 for each spoken-label design.

**Still in the files:** YouTube metadata lines that name the module (for example "Year 11 Chemistry (2017 syllabus), Module 3: Reactive Chemistry."). These are descriptions, not screen or speech, so they were left as they are.

## Fix 9 (US5, US6)

**`lessons/chem-y11-m4-v08.md`**, line 134, scene 9 narration:

| | Text |
| --- | --- |
| Was | "It's far more reliable than a school calorimeter" |
| Now | "It's far more accurate than a school calorimeter" |
| Count | Same length; total 6,426, unchanged |

Revision 4 is at lines 373 onward.

**`lessons/chem-y11-m3-v07.md`** (Revision 5), line 110, scene 5 narration:

| | Text |
| --- | --- |
| Was | "Potassium and sodium react so violently with cold water that your teacher shows them behind a safety screen, or on video, like in the alkali metals video." |
| Now | "Potassium and sodium react so violently with cold water that we watch them on video, like in the alkali metals video." |
| Count | Scene 5: 415 to 378. Total: 5,760 to 5,723. |

Other edits in m3-v07:
- line 112: the K and Na troughs now sit inside m1-v15's coded clip frame tagged "illustrated clip"; `y11c-safety-screen-v1.png` is dropped; the tag reads "K and Na: video only. Ca: teacher demonstration or checked footage; follow your school's approved method";
- line 30: Decisions;
- line 57: author note (b);
- line 271: Assets;
- lines 3, 5 and 246: status and counts;
- lines 400 onward: Revision 5.

## Fix 10 (US8, US9)

**`lessons/chem-y11-m4-v14.md`** (Revision 4):
- The final chip is now "Year 12: A sealed bottle of soda water looks completely still. Has everything stopped?". This is the learner question of `chem-m5-c01`, verbatim (its line 12).
- A small slate tag above the chip reads "now: your depth study, with your teacher".
- Lines changed: 33 (Decisions), 63 ("Handoff:"), 68 (final frame), 155 (scene 13 Visual) and 287 (open decision 1).
- Line 153, scene 13 narration: the depth-study line is kept, and one sentence is added before it: "Next year, these same three ideas help explain why some reactions seem to stop part-way. For now, plan and finish your depth study with your teacher."
- Scene 13: 281 to 373. Scene 12: 454 to 452 (Fix 6/7).
- Total: 5,558 to 5,648.
- Route line 6183: `nextHandoff` set to the Year 12 opener.

**`lessons/chem-y11-m1-v18.md`** (Revision 4), line 121, scene 9 narration. Three sentences are added after the cobalt-60 example: "A neutron can also split a heavy nucleus into two smaller ones, which is called fission. When uranium-two-thirty-five absorbs a neutron, it splits into barium-one-forty-one and krypton-ninety-two, and three neutrons fly out. The tops add to two thirty-six on both sides, and the bottoms to ninety-two, so the same two rules hold."

- Scene 9: 356 to 709.
- Total: 5,944 to 6,274, about 554 s.

Other edits in m1-v18:
- line 123: scene 9 Visual stage change with the coded split, the equation ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n, the check rows and a gloss;
- line 128: scene 10 strip;
- line 52: author note (b);
- line 61: Stops after;
- line 190: Out of scope;
- line 208: Numbers used row;
- line 214: element row;
- line 218: Numbers to verify;
- lines 3, 5 and 229: status and counts;
- lines 351 onward: Revision 4.

Arithmetic checked: 235 + 1 = 236 = 141 + 92 + 3, and 92 = 56 + 36 + 0.

## Fix 3 (UB3): unlogged site errors

**New file:** `site-corrections-chem-y11-additions-2026-11-24.md`, with nine blocks copied verbatim from each design's site-notes block. The M2 L15 error figure comes first: m2-v17 note 4, "24.8 ÷ 22.71 = 1.107, a 10.7% error"; the correct value is 1.092, about 9.2%.

Every quoted phrase was re-found live in the clone today, apart from "absence" rows, which text search cannot confirm (for example a missing limitation or a missing practical).

Rows that are already logged are listed and not repeated:
- m2-v16 notes 2 and 5 (Brief 181);
- m4-v02 notes 1 and 2 (Brief 183);
- ws-v01 notes 1 to 6.

A note on M3 L06 records an approach difference, not an error. The existing log was not edited.

## Fix 8 (US7): route paths, hashes and statuses

**`docs/production/programme/chem-y11-route-inputs.json`.** The file was rewritten with the same JSON style (indent 2, UTF-8, CRLF, matching the working copy). Changes:

- **Top-level fields:** new `updated` (line 4) and `updateNote` (line 5).
- **Paths:** all 104 `sourceLessons[].path` values (59 distinct files) now point to `C:/Users/kygs/teaching-app-fix/subjects/chemistry/year11/`.
- **Hashes:** every recorded `sha256` is kept. Each gains a `sha256Status` saying it is stale, recorded on 5 November against the dead path, and a `sha256Current2026-11-24` holding the raw-bytes hash of the clone file. All 104 references differ from their recorded hash, and none is missing. This follows the Year 11 Physics route pattern.
- **Statuses:** every `teachingStatus` was refreshed:
  - 22 published (release log);
  - 4 rendered, not published (m1-v16, v17, v21, m2-v06);
  - m3-v06 designed today;
  - the rest designed, unrendered and unvoiced;
  - the 10 narration-changed designs are flagged for re-preparation.
- **Entries:** m3-v06, m3-v05 `nextHandoff` and m4-v14 `nextHandoff` were updated as above.
- **Not changed:** the `purpose` field.

## Designs whose narration changed (re-prepare voicing inputs before voicing)

| Design | Scenes changed | New total | Prepared inputs present (`lessons/c-y11-*`, not edited) |
| --- | --- | --- | --- |
| chem-y11-m1-v18 | 9 | 6,274 | none (held block) |
| chem-y11-m1-v27 | 15 | 5,486 | none (held block) |
| chem-y11-m2-v05 | 1 | 5,780 | `c-y11-m2-v05` (stale) |
| chem-y11-m3-v05 | 18 | 5,638 | `c-y11-m3-v05` (stale) |
| chem-y11-m3-v07 | 5 | 5,723 | `c-y11-m3-v07` (stale) |
| chem-y11-m3-v08 | 6 | 6,308 | `c-y11-m3-v08` (stale) |
| chem-y11-m4-v04 | 17 | 6,085 | `c-y11-m4-v04` (stale) |
| chem-y11-m4-v05 | 1 | 5,617 | `c-y11-m4-v05` (stale) |
| chem-y11-m4-v08 | 9 | 6,426 (same length) | `c-y11-m4-v08` (stale) |
| chem-y11-m4-v14 | 12, 13 | 5,648 | `c-y11-m4-v14` (stale) |
| chem-y11-m3-v06 (new) | all | 5,709 | none; needs learning review, science check and Codex error check first |

**Screen text changed, narration unchanged:** m1-v20, m2-v20, m3-v01, m3-v15, m4-v01. The prepared `lesson.production-brief.json` files for m2-v20, m3-v01, m3-v15, m4-v01, m3-v07, m4-v04 and m4-v14 still contain the old course-label screen text, found by text search. They should be refreshed when they are next prepared. Their takes are not affected.

## Open questions for root

1. **Depth study.** The 2017 syllabus requires a Year 11 depth study, and no video supports it (audit UN9). Whether to make a planning video in the skills series is an owner decision. m4-v14 keeps the spoken depth-study line.
2. **m3-v06 reviews.**
   - It needs the student learning review, the science check and the Codex error check, including the cultural content check.
   - The science check should confirm the denaturation wording, "treated as a chemical change" (author note c, which follows the site).
   - The new plate `y11c-plant-kernels-whole-ground-v1.png` is needed before the build.
3. **2025 reuse of m3-v06.** The 2025 point `C25-FA3-G1-03` names nardoo. Naming it would need an owner call under the 18 November rule. The video is partial coverage as written.
4. **m1-v27 length.** It is now 5,486 characters, 14 under the band floor. It was kept, not padded.
5. **m1-v18 fission beat.** Scene 9 is now about 53 s of speech. The learning review should confirm it is not too dense. A fallback is to move the fission sentences into their own scene; that changes the build ids.
6. **Route hashes.** Adopt `sha256Current2026-11-24` or rehash with the original method. Before voicing each unrendered design, re-read the site sections it quotes.
7. **Not done (outside this brief):**
   - RN5 (m2-v01 design text still describes the "Module 1 complete" tag);
   - UN2 (HCO₃⁻ on m1-v19's card);
   - UN3 (warm drinks go flat, m3-v01);
   - the parallel production board entry.
