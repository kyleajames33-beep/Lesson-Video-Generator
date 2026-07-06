# HSCScience video catalogue — build status

Whole-catalogue snapshot after the parallel-agent build push. Companion to
docs/module-2-build-status.md (M2 specifics) and docs/lesson-build-checklist.md.

> **Biology Year 12 (Modules 5–8, 80 lessons) added 2026-06-15** — see the
> "Biology Year 12" section. Catalogue is now **229 lessons** (Chemistry 149 +
> Biology 80), all compiling/validating clean. Subject theming added (Biology
> renders blue; see [[subject-theming-system]] memory).

## Overall state
- **229 lessons** in the registry (Chem 149 + Bio 80); `npx tsc --noEmit` passes clean.
- Pacing: **8 FAIL / 22 WARN** catalogue-wide. The 8 FAIL are ONLY M2 L2/L3/L5
  (deliberately left — their period density is intentional stutter-fixes).
  Everything else is 0 FAIL.
- Structure sweep: **defn-hero=0, defn-head=0** (no hero-definition bugs anywhere).
  title-vo=3 = the shipped L1A/L1B/L2 (intentional). vo-dash=162 = em-dashes in
  already-voiced M3/M4 VO (left to avoid desyncing existing audio).

## Per module
| Module | State | Audio |
|---|---|---|
| **M1 (20 lessons)** | **Rebuilt from scratch, site-accurate.** Legacy misaligned files deleted. All gold-standard, 0 FAIL/0 WARN, chem-verified. | NOT generated (new) |
| **M2 (L1A–L20)** | Built this session; chem-audited (1 fix: L13 Cl₂ 4.58 g). L1A/L1B/L2/L3/L4 voiced; L5–L20 script-ready. | L1A/B,L2,L3,L4 done; rest pending |
| **M3 (12 + 3 cp)** | Polished to gold standard. 4 chem/content fixes. 34 scenes' audio cleared for regen. | mostly voiced; 34 scenes need regen |
| **M4 (13 + 3 cp)** | Polished to gold standard. 1 chem fix (L3 diprotic) + 3 site-alignments. 5 scenes' audio cleared. | mostly voiced; 5 scenes need regen + see imagery note |

## Year 12 (Modules 5–8) — built 2026-06-15

**76 lessons built from the live site** (Teaching-APP `year12/moduleN/lessonNN.sa.html`
+ `.review.json`) by 8 parallel agents on disjoint file sets. Nothing existed in
the repo for Y12 beforehand, so these are 100% site-sourced (titles, inquiry
questions, NESA dot points, worked-example numbers, band-6 traps).

| Module | Lessons | State |
|---|---|---|
| **M5 Equilibrium & Acid Reactions** | 18 (L1–L18) | gold-standard, 0 FAIL/0 WARN |
| **M6 Acid/Base Reactions** | 19 (L1–L19) | gold-standard, 0 FAIL/0 WARN |
| **M7 Organic Chemistry** | 23 (L1–L23) | gold-standard, 0 FAIL/0 WARN |
| **M8 Applied Chemistry** | 16 (L1–L16) | gold-standard, 0 FAIL/0 WARN |

- **Pacing** (`lint-pacing --all`): Y12 contributed **0 FAIL / 0 WARN** — the
  catalogue totals (8 FAIL / 22 WARN) are unchanged from Y11-only, i.e. every Y12
  lesson is pacing-clean and conversational.
- **Sweep**: 0 new defn-hero / defn-head / title-vo / vo-dash. Agents followed the
  multi-term-definition-bullets rule and avoided em-dashes in VO.
- **Validate**: 76/76 clean (only the two intentional gold-standard "errors":
  silent title scene + bullets-only definition). Fixed a stale validator allowlist
  (`endCard` was rendered but not whitelisted — false positive on L1A).
- **Chemistry spot-audit** (2026-06-15): verified every calculation in 7 calc-heavy
  lessons — M5 L9 (Keq expr/reverse/scale), M6 L9 (ICE/Ka/Kb), M6 L11 (pH mastery +
  mixing), M6 L12 (pKa/Kb), M6 L13 (buffers/H-H), M7 L20 (organic pathways),
  M8 L2 (gravimetric). **All correct.** Notably M6 L12 uses the correct pKa 4.49
  (the site has a 3.49 typo — see site-issues below).
- **Visuals (lean)**: 74 generated images (≈1 hook/concept per lesson) + reused
  coded diagrams (table 28×, flow 13×, barChart 8×, beforeAfter 5×, plus
  gibbsSpontaneity/energyProfile/titrationSetup/calorimeter/concentrationCompare).
  **0 unsupported diagram types.** All 74 image keys registered in src/assets/index.ts
  with paths matching the prompt files; **0 missing refs catalogue-wide** (235 total).
- **New coded diagram — `lineGraph`** (built 2026-06-15): flexible curve graph
  (normalized control points, Catmull-Rom smoothing, draw-in animation, wrapped
  legend, vertical markers + horizontal reference lines). Wired into 4 scenes,
  replacing 2 AI images + 2 weak visuals:
  - M5 L1 `concept-conditions` → concentration-vs-time (was no visual)
  - M5 L3 `concept-approach` → rate-vs-time, forward/reverse meet & plateau (was a table)
  - M6 L16 `concept-four-types` → 4 titration curves (was AI image `titrationCurvesFourTypes`)
  - M6 L18 `concept-conductometric` → conductometric V-curve (was AI image `conductometricVCurve`)

### Year 12 — still deferred (need explicit go-ahead)
- **Images NOT generated.** Prompts ready in `image-prompts-chem-y12-m5..m8-*.md`
  (one hook + one concept per lesson; M5/M6/M7-A use slug paths, M7-B uses
  `chem-y12-m7/lNN/…`, M8 L9–16 hook paths were backfilled by the maintainer).
- **Audio NOT generated** (all 76 lessons are unvoiced).
- **Visual QA render of `lineGraph` pending** — the 4 curve scenes have not been
  rendered to stills yet (held for the no-render constraint).

### Year 12 — site issues to fix on Teaching-APP (not blocking video build)
- **M6 lesson12.review.json**: pKa given as **3.49**, correct value is **4.49**
  (for Ka = 3.2×10⁻⁵). Video uses the correct 4.49.
- **M7 L20**: site model answer mentions "hydroboration" for but-1-ene→butanone;
  that's out of HSC scope. Video correctly uses acid-catalysed hydration
  (Markovnikov → butan-2-ol → oxidise to butanone).
- Several Y12 pages had **truncated NESA dot points**; agents used the full
  syllabus phrasing where the page text was clearly cut off.
- **M8 module attribution**: confirm M8 L11–16 (drugs/polymers) are intended under
  Module 8 on the site (built as M8 per the file paths).

## Biology Year 12 (Modules 5–8) — built 2026-06-15

**80 lessons built from the live site** by 8 parallel agents (M5 Heredity ×19,
M6 Genetic Change ×19, M7 Infectious Disease ×21, M8 Non-infectious Disease ×21).
Nothing existed in the repo for Biology beforehand — 100% site-sourced.

- **tsc**: clean (229-lesson catalogue compiles).
- **Pacing** (`lint-pacing --all`): Bio contributed **0 FAIL / 0 WARN** (catalogue
  totals unchanged at 8 FAIL / 22 WARN — all the FAILs are the old M2 stutter-fixes).
- **Sweep**: 0 new defn-hero / defn-head / title-vo / vo-dash (no em-dashes in Bio VO).
- **Validate**: 80/80 clean (only the two intentional patterns: silent title +
  bullets-only definition). **0 unsupported scene or diagram types.**
- **Assets**: 80 hook images registered in src/assets/index.ts at the prompt-file
  paths; **0 missing refs catalogue-wide** (315 total). Images NOT generated yet
  (prompts in `image-prompts-bio-y12-m{5,6,7,8}-*.md`).
- **Biology/quant spot-audit** (2026-06-15): verified correct — Hardy-Weinberg
  (q=0.4, p=0.6, 480 het), Punnett 1:2:1 / 3:1, X-linked (50% of sons, no
  father→son), herd immunity 1−1/R₀ (80%; measles 94%), epidemiology RR/ARR/RRR/NNT
  (incl. the NNT=500 relative-vs-absolute trap), CFU 1.56×10⁶. All sound.
- **Visuals (lean)**: 1 hook image/lesson + reused coded diagrams only
  (table 66×, flow 32×, lineGraph 6×, beforeAfter 4×, barChart 3×, venn 2×).
  `barChart` confirmed **linear** (not log) — earlier agent caution was unfounded.

### Biology — open items
- **M8 over-length (NEEDS A DECISION)**: M8 is the lone length outlier. Whole
  catalogue sits at median 7–9 min, max ~11 (@145 wpm); **Bio M8 median 10.6, max
  14.7**. 9 lessons exceed 11 min: L12 (12.1), L13 (13.1), L14 (12.2), L16 (12.6),
  L17 (14.7), L18 (13.1), L19 (12.9), L20 (12.6), L21 (11.1) — all agent H's
  (L12–21). Root cause: agents G/H over-wrote VO vs every other agent. This is a
  real tension between "mirror the site / don't compress" and the 5–10 min target.
  Options: (a) trim VO to ≤10.5 keeping all scenes; (b) split the worst (L17) into
  two; (c) accept density for advanced-disorder topics. **Awaiting user steer.**
- **Bio-specific coded diagrams to build** (currently served by table/flow/images;
  build in the render-verified pass): genetics core — `punnettSquare`, `pedigreeChart`,
  `dnaHelix`, `transcriptionStrand`, `chromosomeDivision` (mitosis/meiosis); plus
  M6 `chromosomeMutation`/`pointMutationTypes`, M7 `kochPostulates`/`transmissionCycle`/
  `immuneResponseCascade`/`antibodyStructure`. M7/M8 otherwise fully served by flow/table/lineGraph.
- **Definition layout consistency**: agent H (M8 L12–21) added a short intro `body`
  above the bullets on definition scenes; the other 70 lessons are bullets-only.
  Both valid; verify H's bodies are intros (not stuffed definitions) and normalize.
- **Audio NOT generated** (all 80 unvoiced). **lineGraph/theming visual QA pending a render.**

### Biology — site issues to fix on Teaching-APP (not blocking)
- **M7 + M8 `review.json` are mostly empty placeholder stubs** (blank stems,
  `correct:0`) — agents sourced band-6 traps from the lesson bodies' misconception
  cards instead. M5/M6 review banks are populated.
- **M6 `lesson19.sa.html` mis-tagged**: badge "Lesson 10 of 18", body class
  `bio-m3-bg`, marked IQ1, but content is "Variation & Allele Frequency"; its
  review.json is a 404. Built from actual content as L19.
- All M6 pages badge "of 18" despite 19 `.sa.html` files; `moduleLessonCount:19` used.
- Some review.json MC option strings have the letter prefix fused into the text
  (e.g. `"AIt guarantees…"`) — question-bank formatting quirk, no video impact.
- A few review banks carry off-topic shared-pool MC items (M8 L1 plant transpiration,
  L3 thermoregulation; M6 L13/L15) — agents used only on-topic content.

## Errors caught & fixed in this push (chemistry/content)
1. M2 L13 — leftover Cl₂ 4.55 → **4.58 g**.
2. M3 L3 — halide solubility exceptions aligned to site (Ag⁺/Pb²⁺; CaSO₄ insoluble).
3. M3 L8 — quick-check question (Zn+Cu²⁺) didn't match its answer (dichromate); reconciled.
4. M3 L12 — stray "Wait—" editorial note removed from a coachNote.
5. M3 cp1 — caption "Seven takeaways" → "Six".
6. M4 L3 — quick-check wrongly called a limiting reactant; H₂SO₄ diprotic → equimolar. Fixed.
7. M4 L6/L7 + cp2 — bond energies & ΔHf aligned to site values.

## Visual verification (2026-06-14) — diagrams confirmed rendering
Ran `export-review-frames.mjs` (still PNGs, not full MP4) on representative
lessons and viewed the output:
- `gasVolumeComparison` (L4) and `hessCycle` (M4 L8) render correctly and teach clearly.
- Lean image-less worked-example slides read clean; "SATP (RTP)" labeling shows.
- Polish applied + re-verified: coded diagrams were sitting small in the
  ConceptSlide card → bumped FULL_SIZE_DIAGRAMS to maxWidth 840 / scale 1
  (fills the stage, no clipping). Darkened the CO₂ "44 g" for contrast.
- **Coded diagram count: 16** (gasVolumeComparison, massBreakdown,
  concentrationCompare, titrationSetup, limitingExcess, errorDartboard,
  calorimeter, bondEnergy, hessCycle, entropyDisorder, gibbsSpontaneity,
  reductionPotentialLadder, isotopeAtoms, aufbauStaircase, latticeVsElectronSea,
  lineGraph). lineGraph (added 2026-06-15) is the flexible curve graph used for
  rate/concentration-vs-time and titration/conductometric curves.
- latticeVsElectronSea wired into M1 L7 + L8 (dropped 2 phantom images).
- Remaining images to GENERATE: M1 10 + M2 14 + M4 16 = 40 (M3 already has 108 real).
- Constants audit: Avogadro + molar volumes (22.71 STP / 24.8 RTP) uniform catalogue-wide.
- Deliberately NOT built (quality-over-quantity): classificationTree, heatingCurve,
  solubilityMatrix, netIonicReduction — they'd replace already-working coded
  diagrams or M3's real images (regression risk, no real gain).
- Next visual gap: only ConceptSlide renders coded diagrams; a full visual-QA
  render pass (when convenient) should spot-check the other ~13 diagrams.

## RESOLVED — M4 imagery + coded-diagram library (2026-06-14, lean direction chosen)
- **M4 lean-reworked**: ~104 phantom per-scene images → **16 hook images + 1 coded diagram per lesson + clean text**. 88 image fields removed. All 16 hook images registered.
- **8 new coded diagrams built** (all registered in types/DiagramRenderer/validate, tsc clean):
  M4 — calorimeter, bondEnergy, hessCycle, entropyDisorder, gibbsSpontaneity;
  M1/M3 — isotopeAtoms (L14), aufbauStaircase (L16), reductionPotentialLadder (M3 L9 formula scene).
- **FormulaSlide hardcoded-text bug fixed**: 7 lessons (m2-l2, m3-l9, m4-l1/l2/l7/l12/l13) had `type:"formula"` scenes that rendered L1's hardcoded "THE COUNTING EQUATION / Connect particles…" text regardless of topic. Converted those to `type:"concept"` (generic ConceptSlide, also renders diagrams). m2-l1 and m2-l1a keep `formula` (they genuinely ARE the counting-equation lessons → correct).
- **Missing asset refs: 118 → 0.** Every image reference across all 73 lessons now resolves.
- Note: only `ConceptSlide` calls `DiagramRenderer`; `DefinitionSlide`(table-only)/`MisconceptionSlide`(beforeAfter-only)/`FormulaSlide`(none) don't. So all coded diagrams are placed on concept-type scenes. To host diagrams elsewhere later, extend those slides.
- Images still to GENERATE (ChatGPT, didactic prompts ready): 16 M4 hooks (image-prompts-chem-y11-m4-lean.md) + 14 M1 (image-prompts-chem-y11-m1-*.md). M4's old 104-image prompt files are historical.
- Available-to-build diagrams (lessons have working images; build when convenient): solubilityMatrix, netIonicReduction, classificationTree, heatingCurve, latticeVsElectronSea.

## (historical) OPEN DECISION — M4 imagery (RESOLVED above, lean rework done)
The legacy M4 lessons reference **~104 per-scene images** (`m4l1HookPacks`,
`m4l1ConceptEnthalpy`, … roughly 7 per lesson) that were **never registered and
never generated** — M4 currently renders image-less on those scenes. This is the
old "every scene gets a hero image" style.

By contrast the gold-standard (M1 rebuild, M2) is LEAN: ~1 image per lesson plus
coded diagrams + clean text slides. M1's 20 rebuilt lessons reference only 14 images.

Two paths:
- **(A) Lean rework of M4** (recommended): keep a concept/hook image where it
  genuinely teaches, use the `energyProfile` coded diagram where it fits, drop the
  rest. Cuts M4 from ~104 images to ~20, matches the gold standard, and slashes the
  ChatGPT image-gen burden. ~1 agent pass.
- **(B) Keep heavy imagery**: register all 104 and generate 104 PNGs via ChatGPT.

Until decided, M4's 104 image refs are intentionally NOT registered (registering
without PNGs would cause render failures later).

## Coded-diagram requests from agents (not built — would touch shared files)
Build these to drop more image dependencies when convenient:
- aufbauStaircase, isotopeAtoms (M1)
- classificationTree, heatingCurve, latticeVsElectronSea (M1)
- netIonicReduction, solubilityMatrix, reductionPotentialLadder (M3)
Also: `workedExample`/`quickCheck` scene types can't host a `diagram` field —
extending WorkedExampleSlide + those types would let energyProfile etc. appear in
worked examples (M4 especially would benefit).

## Regen debt (when ready to spend ElevenLabs credits — deferred per instruction)
Scenes with cleared audio that need regeneration, per lesson, are the ones whose
VO was rewritten this push: M2 L13(1); M3 ~34 scenes across most lessons; M4 5
scenes (L3 qc, L6 we, L7 we, cp2 wt1/wt2); plus all of M1 (new, never voiced) and
M2 L5–L20. When regenerating any M3/M4 scene, strip em-dashes from its VO first.

## Site metadata flags (worth reconciling on the site, not blocking)
- M1 site pages carry `data-module="2"` despite Module-1 titles/breadcrumbs; built as Module 1.
- M1 shows "of 21" lesson count in places; built with moduleLessonCount 20 (20 .sa.html files exist).
- Site STP molar volume inconsistent (22.4 vs 22.71); videos use 22.71 STP / 24.8 RTP (NESA-current).
- M1 KNO₃ solubility figures internally inconsistent on site; used the self-consistent set (49 g).
