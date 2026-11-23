# Year 12 Physics (2017 syllabus): coherence audit, 23 November 2026

Independent review of the 81 Year 12 Physics designs (Modules 5 to 8) at course, module and lesson level, against the 2017 syllabus and the site. Fixes are split into unbuilt designs (m5-v14 to m8-v22, 68 designs) and built videos (m5-v01 to v13, fix before render), followed by the 2025 Year 12 mapping. Companion table: `phys-y12-coverage-map-2026-11-23.md`. No existing file was edited; the site clone was only read.

**Inputs read.** `AGENTS.md`; `phys-y12-design-brief.md`; route `programme/phys-y12-route-inputs.json`; ledgers `programme/syllabus/phys-2017-y12.json` and `phys-new-y12-audit-crosswalk.json`; `phys-y12-2025-route-draft.md`; `checks/phys-y11-coherence-audit-2026-11-23.md` (S6, S7, structure); `checks/phys-y12-whole-course-coverage.md` (7 Nov); `site-corrections-phys-y12.md`; all 81 designs `lessons/phys-y12-m*.md`; the 13 build notes `builds/phys-y12-m5-v*-notes.md` and built sources `src/explainer/lessons/phys-y12-m5-v*`; the prepared-input folders `lessons/p-y12-m*`; the site clone `C:/Users/kygs/teaching-app-fix/subjects/physics/year12/`. Pre-design packs exist for m5-v01 to v10 only. The brief names `site-corrections-m6.md`, `-m7.md` and `-m8.md`: those are Chemistry and Biology logs with no Physics rows. The Physics log is `site-corrections-phys-y12.md`.

**Method.** A script extracted from each design the H1 question, status, route "Next", final-frame chip, opening frame, scene 1 narration, entry knowledge, memory aids, narration length and em dashes. It compared all 80 consecutive chips with the next H1 and every opening frame with the previous design, and scanned scripts for recalls of later designs. Ledger ownership was checked against the route, and each route source lesson and section id against the clone (with hashes). Built joins were checked in source (`*FinalFrame` imports). About 95 high-risk numbers in unbuilt designs were recomputed in Python. The 2025 draft order was replayed against the 2017 joins.

## Counts

| Split | Blocker | Should fix | Note |
| --- | ---: | ---: | ---: |
| Unbuilt designs | 0 | 6 | 8 |
| Built (m5-v01 to v13), fix before render | 2 | 1 | 3 |
| 2025 route draft | 0 | 3 | 2 |

## Overall verdict

The 2017 plan is sound at lesson and module level. All 69 content points are owned. The opening-frame chain is unbroken in all 80 design pairs: each scene 1 opens on the previous final frame with a spoken bridge, including across modules. 74 of 80 chips match the next question. Narration is 5,554 to 6,556 characters in every design, with no em dashes. The physics is accurate: none of about 95 recomputed values is wrong. Site errors found by the designs are logged (briefs 168 and 187 to 193), and 9 of 10 spot-checked logged errors are still live on the site.

The weaknesses are at course level. In Module 6 the motor effect and the DC motor are explained but never investigated. The Module 5 memory aids are introduced and then not reused where the same cos or sin trap returns. Nuclear notation is used from m7-v16 on but never explained, and no Year 11 Physics course teaches it. Two built joins in Module 5 do not match. The 2025 draft's ordering rule would break 54 of 75 spoken "last time" joins, and it leaves one 2025 point with no video.

## Unbuilt designs

### Should fix

**U-S1. The motor effect and the DC motor are never investigated.**
- Where: `phys-y12-m6-v07.md` (P6-IQ2-01 "investigate qualitatively and quantitatively ... F = lIB sin θ") has no investigation scene (its 14 scenes are a hook demonstration, derivation, palm rule, loudspeaker and practice). `phys-y12-m6-v16.md` and `v17` (P6-IQ4-01 "investigate the operation of a simple DC motor") have none either (root gap in the 7 November coverage check). The 2025 course has the gap point FA2-G2-04 "Conduct a laboratory experiment to demonstrate the motor effect".
- Fix: one new investigation design, `phys-y12-m6-v07a` (after v07 in 2017; before m5-v09 in 2025). A wire crosses the field of a magnet sitting on a top-pan balance; vary I (and θ by turning the magnet), plot the balance change against I, and read Bl/g from the gradient. Then build a simple DC motor and show what reversing the current and removing the split ring do. One design closes two 2017 points and one 2025 gap.

**U-S2. Recurring aids are introduced once and not reused where the same trap returns.**
- Where: "Cos is close" (built `m5-v02`, now also Year 11 `fa1-v03`) appears in no later design, although the cos or sin choice is the stated trap in `m5-v13` (tension components), `m5-v14` (N cos θ), `m6-v04` (qvB sin θ), `m6-v07` (lIB sin θ), `m6-v09` (BA cos θ, "measure theta from the normal"), `m6-v16` (nIAB sin θ) and `m7-v08` (field component cos θ before cos²). `m5-v17` uses "Double the distance, quarter the pull" for the idea Year 11 anchors as "twice as far, a quarter" (fa2-v16, fa3-v04).
- Fix (one clause each, at the angle step): m6-v09 "Cos is close: the part of B next to theta, along the normal, is B cos theta"; m6-v04, v07 and v16 "Cos is close, so the part across the field, opposite theta, takes sine"; a recall chip only in m5-v13, v14 and m7-v08. Change m5-v17's line to "Twice as far, a quarter of the pull". Recount each scene's length after the edit.

**U-S3. Nuclear notation is never explained, and "Year 11" is claimed for it.**
- Where: nuclear symbols first appear in `phys-y12-m7-v16.md` (4 on screen), then `m8-v01` (17) and `m8-v05` (78); no design says what A and Z mean. Entry lines claim "nuclear notation (Year 11)" (`m8-v05`, `v09`, `v14`), "beta decay (Year 11)" (`m8-v06`) and "atoms and nuclei (Year 11)" (`m8-v01`). The 2017 Year 11 Physics course (Modules 1 to 4) teaches none of these, so this is a 2017 gap as well as the 2025 gap the Year 11 audit (S7) found.
- Fix: one line in m7-v16 at the first symbol ("the top number is the mass number, protons plus neutrons; the bottom is the atomic number, the protons"). m7-v16 comes first in both the 2017 and 2025 orders, so this replaces the separate m8-v09 gloss in the 2025 draft. Relabel the five entry lines as "Stage 5 Science; m7-v16 gloss". m8-v06's scene 8 already explains the neutron-to-proton change in a plain sentence.

**U-S4. Practical and Working Scientifically gaps the root accepted on 7 November are still open.**
- Where: `checks/phys-y12-whole-course-coverage.md`: Balmer spectroscope practical (`m8-v11`), electron-diffraction tube (`m8-v12`), real count-rate data (`m8-v15`), banked-road friction limit (`m5-v14`), WS1-02, WS3-03 and WS7-03. No design supports the required Year 12 depth study.
- Fix: one investigation design "Seeing quantised atoms": a hydrogen tube viewed through a grating, measure three Balmer lines and compare them with Rydberg; then a diffraction-tube ring radius against 1/√V. Give m8-v15's secondary-data scene real school counts (protactinium generator data). Keep the m5-v14 extension for hard practice. Add a depth-study planning video to the exam-skills series (it serves 2025 FA0 too).

**U-S5. Route and designs point to the dead site path and stale hashes.**
- Where: every design "Scope" line, every route `sourceLessons.path` and every row of `site-corrections-phys-y12.md` name `C:/Users/kygs/hscscience`. All 98 route source hashes differ from the clone. Spot checks show the quoted worked examples are still present (10 of 10, for example M6 L07 0.060 N, M7 L03 632.8 nm, M8 L03 714 nm, M8 L14 11.996709 u) and every cited section id still exists.
- Fix: repoint to `C:/Users/kygs/teaching-app-fix`, re-hash, and have the Codex error check (already required before voicing for M6 to M8) re-read only the sections each design quotes.

**U-S6. Two chips do not match the next heading.**
- Where: `m5-v23` chip "how does voltage between parallel plates determine a charged particle's acceleration?" against m6-v01 "How does the voltage between parallel plates set a charged particle's acceleration?"; `m7-v10` chip "Planck's constant" against m7-v11 "Planck constant".
- Fix: set each chip to the next H1 verbatim (screen text only).

### Notes

- **U-N1.** Physics accuracy: about 95 values recomputed, including the 400 km orbit (7,688 m s⁻¹, 92.2 min), GEO height 3.593 × 10⁷ m, escape speed 11.2 km s⁻¹, plate deflection 4.885 mm and 43.97 mm, electron radius 1.137 mm, Fizeau 3.133 × 10⁸ m s⁻¹, grating 647 nm, Wien 9993 K, h = 6.608 × 10⁻³⁴ J s, γ and muon survival, solar mass loss 4.22 × 10⁹ kg s⁻¹, Hubble distance 379 Mpc, pp chain 26.73 MeV, triple alpha 7.27 MeV, C-12 binding 92.16 MeV, N-14(α,p) −1.19 MeV, fission 173.3 MeV, D-T 17.59 MeV, de Broglie 1.67 × 10⁻¹⁰ m, synchrotron 1.25 T and 8.09 T. None is wrong. The smallest slip: m7-v15's LHC radius computes to 2.81 km against "2.80 km" in its table (spoken "nearly three kilometres"), which is acceptable.
- **U-N2.** m7-v09's opening was written on an assumed v08 frame; v08's final frame was later written to match it, and does.
- **U-N3.** `lessons/p-y12-m5-v14/` (prepared inputs) does not exist because the P5 voicing wave deferred m5-v14 (`status.md`). It is 2017-only for 2025; decide whether it is voiced for the 2017 playlist.
- **U-N4.** m8-v03 re-explains continuous, emission and absorption spectra from m7-v03 "now explained with photons", and its entry line lists m7-v03 and v04. This is a deliberate deepening for P8-IQ1-04, not double teaching.
- **U-N5.** Other recurring aids are consistent and reused: "Magnetic force steers. It never speeds." (m6-v05) with "Electric fields push. Magnetic fields steer." (m8-v22); "Across the field, full force. Along the field, no force." (m6-v04, v07); "Proper time is the shortest" (m7-v13, v14); "Two columns, one clock" is recalled in m6-v02.
- **U-N6.** Design-order departures from the site are sound: orbital energy after GPE (m5-v21, v22; the site reverses them), induction before motors (syllabus order) and stellar spectra before the HR diagram.
- **U-N7.** Unmapped site lessons are consolidation or revision lessons (M5 L13, L18; M6 L21; M7 L20) and M7 L15 (simultaneity and paradoxes, excluded by the route). M7 L15's simultaneity section is a ready source for the 2025 gap FA3-G4-03.
- **U-N8.** Spoken "Year 11" recalls in m5-v14, m6-v08, v12 to v14, m7-v15, m8-v08 and v09 (ramps, grip rule, electromagnets, P = VI, I²R, momentum, Coulomb's law, elastic collisions) are all taught by Year 11 2025 designs too, so they serve both courses.

## Built videos (m5-v01 to v13): fix before render

### Blockers (render gate)

**B-B1. Two built joins do not match.**
- v11 to v12: v11's final frame (`src/explainer/lessons/phys-y12-m5-v11/s3.tsx`, `HandoffBoard`) has the heading "Which real force pulls it in?", ring centre (560, 600), radius 270 and the side card at x 1100. v12's scene 1 (`phys-y12-m5-v12/s1.tsx`, `RB` in `parts.tsx`) redraws it from the design, with heading `HEAD_V11` ("How can speed be constant while velocity keeps changing?"), centre (520, 580), radius 290 and the side chip at (1290, 186). The v12 build note asked for this re-match once v11 was exported; it has not been done.
- v03 to v04: v04 was built before v03 and does not import `V03FinalFrame`. Its scene 1 shows "Why do complementary angles give the same range?" from frame 0, while v03 ends on "What sets the height, the flight time and the landing velocity?" with the launcher at 40°.
- Fix: import `V03FinalFrame` and `V11FinalFrame` and cross-fade over frames 10 to 34, as v05 to v11 already do. Re-run the cue check and sheet for v04 and v12.

**B-B2. Two built videos are below the owner's grade-A render rule.**
- Where: the build notes give honest grades of B+ for v02 and v11 (thin coded stages, a small car plate, the delta-v tray). v01, v05, v09, v10, v12 and v13 are A− on provisional timing, and v10 to v13 still have `PROVISIONAL = true`.
- Fix: lift v02 and v11 to A on the 16-frame sheet, and switch v10 to v13 to measured timing, before render.

### Should fix

**B-S1. Two built openings tie the video to a predecessor that moves in 2025.**
- Where: m5-v09 scene 1 "Here's that spanner on a stuck nut" (v08's final frame previews it) and m5-v11 scene 1 "Here's that crane again" (from v10). In any 2025 order, torque (v09, v10) moves to the motor area (FA2), so both openings break.
- Fix now, so one take serves both courses: re-voice only the first sentence of each scene 1 in a neutral form ("Here's a spanner on a stuck nut." and "Here's a tower crane, seen from above, turning at a steady rate."). The visuals stay unchanged, so the 2017 joins still hold.

### Notes

- **B-N1.** Chips: v02 "Next: height, flight time and landing velocity" and v04 "Next: landing below the launch level" are topic labels; v01 and v03 paraphrase. Set each to the next built heading in the same edit as B-B1.
- **B-N2.** Built headings differ from the design H1s (v03, v04, and v11's final frame). Pick one wording per video and use it for the chip and the YouTube title.
- **B-N3.** No course label ("Module", "syllabus", "Year 11") is spoken in v01 to v13, so they serve 2025 apart from B-S1.

## 2025 route draft (`phys-y12-2025-route-draft.md`)

The Year 11 audit's S6 and S7 items (recall bridges in m6-v01, v03, m7-v05, v09, v10; one-line additions in m7-v09, v13, m8-v19; m6-v15 left out) are not repeated here. They appear in the table only as labels.

**D1 (should fix). The ordering rule breaks most spoken joins.** Ordering by "first 2025 point served" changes the predecessor for 54 of the 75 joins between existing designs, and each of those designs opens "Last time ..." on the previous final frame. Examples: m5-v04 and v05 swap, m5-v21 to v23 permute, m6-v02 and v03 swap, m7-v09 and v10 swap. Fix: keep the 2017 order inside each 2025 group and move whole blocks only (torque m5-v09, v10 to FA2 before m6-v16; m7-v03 into the FA4 atom block; m7-v04 into FA4 astrophysics; m7-v16 into the nuclear block; FA4 atom before stars). A tested block order keeps 49 joins and changes 14. The 13 gap videos then sit as bridges (a new design can open on the previous final frame and end on the next opening frame), so only about 14 new opening takes are needed.

**D2 (should fix). FA1-G2-02 is left with no video.** "Explain why a constant net force acting perpendicular to a body's velocity causes uniform circular motion" is matched only to m5-v15, which the draft drops as 2017-only. m5-v15 scene 5 teaches exactly this (the inward force turns the velocity without changing its size), and Year 11 2025 supplies W = Fs cos θ. Fix: keep m5-v15 in the 2025 playlist and reclassify it "serves-2025-minor-edit" (tag scene 8's vertical circle as an extension).

**D3 (should fix). Partial matches hide gaps beyond the 17.** No design derives q/m = E/(rB²) (FA4-G1-05: m6-v06 and m8-v07 are both partial). FA3-G1-05 asks for a school measurement of c, but m7-v02 is historical. FA4-G1-01 to 04 lack the plum-pudding evaluation, FA4-G1-24 lacks Goeppert Mayer (m8-v13), and FA4-G1-21 wants baryons and the strong force (m8-v20). Fix: add route slots for a "measuring c" investigation and an "e/m with crossed fields" scene or video, and plan new scenes in m8-v07, v13 and v20 when they are re-cut for 2025.

**D4 (note).** U-S1's new investigation design closes the FA2-G2-04 gap; U-S3's m7-v16 gloss replaces the separate m8-v09 gloss.

**D5 (note).** Not mapped to any 2025 point, so 2017-only: m5-v14, m6-v08, m6-v15, m8-v01. m5-v15 should stay (D2).

### 2025 mapping (each Year 12 design)

Verdicts: "as is" (one take serves both); "serves, minor edit" (crosswalk minor edit, no extra narration identified here); "recall bridge" or "one-line addition" (edit before voicing, still one take); "new opening take" (the scene 1 sentence changes because the predecessor changes); "partial" (needs a new scene or a new design for the 2025 point); "2017-only".

| Design | Crosswalk class (points) | 2025 verdict | Action |
| --- | --- | --- | --- |
| m5-v01 | serves-2025-as-is (2) | as is |  |
| m5-v02 | serves-2025-as-is (2) | as is |  |
| m5-v03 | serves-2025-as-is (2) | as is |  |
| m5-v04 | serves-2025-as-is (1) | as is |  |
| m5-v05 | serves-2025-as-is (2) | as is |  |
| m5-v06 | serves-2025-as-is (1) | as is |  |
| m5-v07 | serves-2025-as-is (1) | as is |  |
| m5-v08 | serves-2025-as-is (1) | as is |  |
| m5-v09 | serves-2025-minor-edit (1) | new opening take | Re-voice scene 1 first sentence neutral ("Here's a spanner on a stuck nut"); moves to FA2 (B-S1). |
| m5-v10 | partial-2025 (1) | partial | Rotational equilibrium beyond FA2-G2-06; keep after m5-v09 as an optional extension. |
| m5-v11 | serves-2025-as-is (5) | new opening take | Neutral scene 1 sentence ("Here's a tower crane, seen from above"), since v10 moves to FA2 (B-S1). |
| m5-v12 | serves-2025-as-is (3) | as is |  |
| m5-v13 | serves-2025-as-is (2) | as is |  |
| m5-v14 | none | 2017-only | No 2025 point (banked tracks dropped). |
| m5-v15 | 2017-only (1) | serves, minor edit | Draft marks it 2017-only, but scene 5 teaches FA1-G2-02; keep it (D2). |
| m5-v16 | serves-2025-as-is (1) | as is |  |
| m5-v17 | serves-2025-as-is (3) | as is | Optionally match the Year 11 aid wording "twice as far, a quarter" (U-S2). |
| m5-v18 | serves-2025-as-is (3) | as is |  |
| m5-v19 | serves-2025-as-is (3) | as is |  |
| m5-v20 | serves-2025-as-is (3) | as is |  |
| m5-v21 | serves-2025-as-is (3) | as is |  |
| m5-v22 | serves-2025-as-is (3) | as is |  |
| m5-v23 | serves-2025-as-is (3) | as is |  |
| m6-v01 | serves-2025-as-is (2) | recall bridge | Year 11 audit S6 (E = V/d recall). |
| m6-v02 | serves-2025-as-is (1) | as is |  |
| m6-v03 | serves-2025-as-is (1) | recall bridge | Year 11 audit S6 (W = qV recall). |
| m6-v04 | serves-2025-as-is (3) | as is |  |
| m6-v05 | serves-2025-minor-edit (3) | serves, minor edit |  |
| m6-v06 | serves-2025-minor-edit (3) | serves, minor edit | FA4-G1-05 q/m = E/(rB²) is not derived anywhere (D3). |
| m6-v07 | serves-2025-as-is (4) | as is | Plus the new investigation design (U-S1) for FA2-G2-04. |
| m6-v08 | none | 2017-only | No 2025 point (parallel wires). |
| m6-v09 | serves-2025-minor-edit (2) | serves, minor edit |  |
| m6-v10 | serves-2025-as-is (3) | as is |  |
| m6-v11 | serves-2025-as-is (2) | as is |  |
| m6-v12 | serves-2025-as-is (2) | as is |  |
| m6-v13 | serves-2025-as-is (3) | as is |  |
| m6-v14 | serves-2025-as-is (2) | as is |  |
| m6-v15 | 2017-only (1) | 2017-only | Year 11 audit S6. |
| m6-v16 | serves-2025-minor-edit (4) | new opening take | Opens "the simple motor from last time" on m6-v15 (2017-only); in 2025 it follows m5-v10. |
| m6-v17 | serves-2025-as-is (2) | as is |  |
| m6-v18 | serves-2025-as-is (3) | as is |  |
| m6-v19 | serves-2025-minor-edit (1) | serves, minor edit |  |
| m6-v20 | serves-2025-as-is (3) | as is |  |
| m7-v01 | serves-2025-as-is (4) | as is |  |
| m7-v02 | partial-2025 (1) | partial, new design needed | FA3-G1-05 asks for a school measurement of c; historical methods do not meet it (D3). |
| m7-v03 | partial-2025 (2) | partial, new opening take | Moves to FA4 atom group. |
| m7-v04 | serves-2025-minor-edit (2) | partial, new opening take | Moves to FA4 astrophysics; rotation and density beyond 2025. |
| m7-v05 | serves-2025-minor-edit (3) | recall bridge | Year 11 audit S6. |
| m7-v06 | serves-2025-as-is (5) | as is |  |
| m7-v07 | serves-2025-as-is (3) | as is |  |
| m7-v08 | serves-2025-as-is (4) | as is |  |
| m7-v09 | serves-2025-as-is (6) | recall bridge | Year 11 audit S6 and S7 (kelvin line not needed for 2017). |
| m7-v10 | serves-2025-as-is (6) | recall bridge | Year 11 audit S6. |
| m7-v11 | serves-2025-minor-edit (4) | serves, minor edit |  |
| m7-v12 | serves-2025-minor-edit (2) | serves, minor edit |  |
| m7-v13 | serves-2025-as-is (4) | one-line addition | Year 11 audit S7 (light-year). |
| m7-v14 | serves-2025-as-is (2) | as is |  |
| m7-v15 | serves-2025-as-is (3) | as is |  |
| m7-v16 | serves-2025-minor-edit (6) | one-line addition | Nuclear-notation gloss at first symbol; serves 2017 too (U-S3). |
| m8-v01 | none | 2017-only | No 2025 point. |
| m8-v02 | partial-2025 (1) | partial, re-cut | FA4-G4-03 only; Hubble law and CMB beyond 2025. |
| m8-v03 | serves-2025-as-is (3) | as is |  |
| m8-v04 | serves-2025-minor-edit (3) | serves, minor edit |  |
| m8-v05 | serves-2025-as-is (4) | as is | Entry line relabel only (U-S3); new opening take if FA4 reorders. |
| m8-v06 | serves-2025-as-is (4) | as is | Entry line relabel only. |
| m8-v07 | partial-2025 (5) | partial, new scene needed | Oil drop not 2025; plum-pudding evaluation and E/(rB²) missing (D3); opens FA4 in 2025 (new opening take). |
| m8-v08 | serves-2025-as-is (2) | as is |  |
| m8-v09 | serves-2025-as-is (2) | as is | Entry line relabel (U-S3). |
| m8-v10 | serves-2025-minor-edit (3) | serves, minor edit |  |
| m8-v11 | serves-2025-as-is (3) | as is |  |
| m8-v12 | serves-2025-as-is (4) | as is |  |
| m8-v13 | partial-2025 (1) | partial, new scene needed | Goeppert Mayer missing (FA4-G1-24). |
| m8-v14 | serves-2025-minor-edit (5) | serves, minor edit | Entry line relabel (U-S3). |
| m8-v15 | serves-2025-minor-edit (5) | serves, minor edit |  |
| m8-v16 | serves-2025-as-is (4) | as is |  |
| m8-v17 | serves-2025-as-is (3) | as is |  |
| m8-v18 | serves-2025-as-is (5) | as is |  |
| m8-v19 | serves-2025-as-is (5) | one-line addition | Year 11 audit S7 (temperature as particle energy). |
| m8-v20 | partial-2025 (1) | partial | FA4-G1-21 wants baryons and the strong force; re-cut or pair with m8-v21. |
| m8-v21 | serves-2025-as-is (2) | as is |  |
| m8-v22 | serves-2025-as-is (1) | as is |  |

Summary: 47 designs serve 2025 as they are (some need only an entry-line relabel), 11 need the crosswalk's minor edits, 8 need a recall bridge or one-line addition before voicing, 3 need a new opening take (m5-v09, m5-v11, m6-v16; up to 14 more depending on D1), 8 are partial (re-cut or a new scene) and 4 are 2017-only. New designs are needed for the draft's 17 gap points plus the D3 items.

## Top ten fixes (ranked)

1. B-B1: wire the v03 to v04 and v11 to v12 joins in source.
2. B-B2: lift m5-v02 and v11 to grade A; measured timing for v10 to v13.
3. B-S1: neutral first sentences in m5-v09 and v11 scene 1, before render.
4. U-S1: one motor-effect and DC-motor investigation design (2017 P6-IQ2-01 and P6-IQ4-01; 2025 FA2-G2-04).
5. D1: replace the draft's ordering rule with a block-preserving order (54 changed joins down to about 14).
6. U-S3: nuclear-notation gloss in m7-v16; relabel five entry lines.
7. D2: keep m5-v15 in the 2025 playlist for FA1-G2-02.
8. U-S2: reuse "Cos is close" at the angle step in seven designs; align m5-v17's inverse-square aid with Year 11.
9. U-S4: a "Seeing quantised atoms" investigation (Balmer lines and electron diffraction), real counts in m8-v15, and a depth-study video.
10. U-S5 and D3: repoint and re-hash the site sources; add the measuring-c and e/m slots to the 2025 route.
