# HSCScience video programme: master plan

Prepared 16 October 2026 by Claude (programme planner). Text only: nothing was rendered, voiced or committed. Re-measure the counts before acting on them; the site and the channel change daily.

Sources read: `claude-pm/owner-queue.md`, `claude-pm/status.md`, `module5-video-route-2026-10-10.json`, `course-progression-plan-2026-10-09.md`, `claude-pm/youtube/wave1-4-uploads.json`, `claude-pm/legacy-engine-policy.md`, `claude-pm/coverage-ledger.md`, `claude-pm/research/old-engine-ideas-audit.md`, AGENTS.md, the site's `subjects/*/curriculum-map.json` files and lesson folders, the site's `docs/PROGRAMME-GOALS.md` and its 2026-09-05 master plan (syllabus calendar).

---

## 0. The short version

- **Scope of the owner's goal** (Chemistry and Biology Year 12 Modules 5 to 8, plus Year 11 on the new syllabus): **306 site lessons, about 430 to 470 videos.** 19 are published (4%).
- **Sustainable pace:** about 25 to 40 videos a month across both subjects, not the launch burst of 3 a day. The hard cap is voice credits, then owner review time.
- **Year 12 (2017) remaining:** about 200 videos, so **6 to 8 months** at a steady pace (finished around April to June 2027).
- **Biggest planning fact:** the 2017 Biology Year 12 course is last examined at the **2027 HSC**, and the new Biology Year 11 course starts **Term 1 2027**. The 2017 Chemistry Year 12 course runs to the **2028 HSC**. The two subjects are on different clocks, and the plan below treats them that way.

---

## 1. Scope inventory

### 1.1 Syllabus calendar (drives everything else)

| Course | Current syllabus on the site | New course starts | Last 2017 HSC | First new HSC | Evidence |
| --- | --- | --- | --- | --- | --- |
| Biology Year 11 | **2025, live since 25 Sep 2026** (`biology/year11/fa1-3`) | Term 1 2027 | n/a | 2028 | site `docs/PROGRAMME-GOALS.md`; NESA overview checked 9 Oct (`course-progression-plan`) |
| Biology Year 12 | 2017 (`biology/year12/module5-8`) | Term 4 2027 | **2027** | 2028 | same |
| Chemistry Year 11 | 2017 live (`chemistry/year11/module1-4`); 2025 built but not promoted (`_new-syllabus-2027/chemistry-2025/year11`) | **Term 1 2028** | n/a | 2029 | owner ruling 11 Sep; NESA overview checked 9 Oct |
| Chemistry Year 12 | 2017 (`chemistry/year12/module5-8`) | Term 4 2028 | **2028** | 2029 | same |
| Physics Year 11 | 2025, live since 25 Sep 2026 | Term 1 2027 | n/a | 2028 | site audit notes (search summaries, not primary pages) |
| Physics Year 12 | 2017 | Term 4 2027 | 2027 | 2028 | same |
| Maths Advanced and Standard | 2024 syllabus codes (MAV-11, MST-12-S2) | already changing | to confirm | to confirm | site maths audits; **Codex research item** |

Chemistry Year 11 uses "Modules 1 to 4" on the live site because that is still the 2017 course. Its 2025 version uses focus areas (fa1 to fa3), like Biology, and lives in `_new-syllabus-2027/chemistry-2025/`, which is `noindex`, never gated and outside `subjects/`.

### 1.2 Site lessons and likely videos

Lesson counts are the `lessonNN.sa.html` files listed in each `curriculum-map.json`, all confirmed present on disk (checkpoints, quizzes and hubs excluded).

**Video multiplier.** The Module 5 route plans 52 uploads from 37 site lessons (1.41). The current production plan, after the C4, C6, G03 (four parts) and B3a splits, is about 57 (1.54). The tables use **1.4 as the baseline** and 1.55 as the high case. Maths is estimated at 1.0 to 1.2 because its lessons are narrower and worked-example led.

#### In the owner's stated goal

| Subject, year, area | Site lessons | Videos (1.4 to 1.55) | Published | Designed or in pipeline | Site extracts | Pre-design packs |
| --- | --- | --- | --- | --- | --- | --- |
| Chem Y12 M5 Equilibrium and Acid Reactions | 18 | **27** (current plan) | 11 (C1, C2, G01, C3, C4a, C4b, C5, C6a, C6b, C8, C9) | 6 (C7, G02, G03a to G03d) | all 18 | 6 (C10 to C15) |
| Chem Y12 M6 Acid/Base Reactions | 19 | 27 to 29 | 0 | 0 | all 19 + site corrections list | 0 |
| Chem Y12 M7 Organic Chemistry | 23 | 32 to 36 | 0 | 0 | 0 | 0 |
| Chem Y12 M8 Applying Chemical Ideas | 16 | 22 to 25 | 0 | 0 | 0 | 0 |
| **Chem Y12 subtotal** | **76** | **108 to 117** | 11 | 6 | 37 | 6 |
| Bio Y12 M5 Heredity | 19 (+ lesson14b) | **30** (current plan) | 8 (B1, mould, B2a, B2b, B2c, B3a, B3a2, B4) | 4 (B3b, B5a, B5b, B6a) | all 19 + 14b | 6 (b7 to b12 packs) |
| Bio Y12 M6 Genetic Change | 19 | 27 to 29 | 0 | 0 | all 19 + site corrections list | 0 |
| Bio Y12 M7 Infectious Disease | 21 | 29 to 33 | 0 | 0 | 0 | 0 |
| Bio Y12 M8 Non-infectious Disease | 21 | 29 to 33 | 0 | 0 | 0 | 0 |
| **Bio Y12 subtotal** | **80** | **115 to 125** | 8 | 4 | 39 | 6 |
| Bio Y11 2025 fa1 Cells as the basis of life | 25 | 35 to 39 | 0 | 0 | 0 | 0 |
| Bio Y11 2025 fa2 Cells to systems | 25 | 35 to 39 | 0 | 0 | 0 | 0 |
| Bio Y11 2025 fa3 Evolution and ecosystems | 25 | 35 to 39 | 0 | 0 | 0 | 0 |
| **Bio Y11 (2025) subtotal** | **75** | **105 to 116** | 0 | 0 | 0 | 0 |
| Chem Y11 2025 fa1 Properties and structure of matter | 27 | 38 to 42 | 0 | 0 | 0 | 0 |
| Chem Y11 2025 fa2 Quantitative chemistry | 24 | 34 to 37 | 0 (older legacy-engine Y11 2017 videos exist, see below) | 0 | 0 | 0 |
| Chem Y11 2025 fa3 Chemical reactions | 24 | 34 to 37 | 0 | 0 | 0 | 0 |
| **Chem Y11 (2025) subtotal** | **75** | **105 to 116** | 0 | 0 | 0 | 0 |
| **Goal total** | **306** | **433 to 474** | **19** | **10** | **76** | **12** |

Notes:
- Six older Year 11 videos (empirical formulas, molar mass, limiting reactants and an enzyme lesson among them) are on the legacy slide engine. They are 2017-era and not counted as explainer videos.
- Painted plates: about 90 Chemistry and 190 Biology files already sit in `public/assets/`, most of them Module 5. The M5 extras (`m5x-*`, briefs 38 and 39) already cover much of C10 to C15 and B7 to B12.
- Memory-aid banks exist for Modules 5 to 8 (`docs/production/module{5..8}-memory-aids-2026-10-11.md`). They are drafts.
- The legacy engine holds idea banks for `chem-y12-m5` to `m8`, `bio-y12-m5` to `m8` and every Year 11 2017 module. Port logic only (policy, 16 Oct).

#### Outside the goal (for later decisions)

| Subject, year | Site lessons | Videos (estimate) | Comment |
| --- | --- | --- | --- |
| Chem Y11 2017 (M1 21, M2 20, M3 12, M4 13) | 66 | about 92 | Live until the 2027 Year 11 cohort finishes. Not recommended: short life, and the 2025 course replaces it from Term 1 2028. |
| Physics Y11 2025 (fa1 28, fa2 25, fa3 26) | 79 | 110 to 122 | Live, long life. Best Physics entry point. |
| Physics Y12 2017 (M5 18, M6 21, M7 14, M8 17) | 70 | about 98 | Last HSC 2027. Not recommended. |
| Physics Y12 2025 (4 FAs, not promoted) | 99 | 139 to 153 | Starts Term 4 2027. |
| Biology Y12 2025 (heredity 25, diseases 26, biodiversity 25, biotechnology 24; not promoted) | 100 | reuse plus gaps | Starts Term 4 2027. Large overlap with 2017 M5 to M8 (see 3.6). |
| Chemistry Y12 2025 (equilibrium 25, acid-base 26, organic 27, applying 25; not promoted) | 103 | reuse plus gaps | Starts Term 4 2028. |
| Maths Advanced (Y11 92 in 7 FAs, Y12 59 in 7 FAs) | 151 | 150 to 180 | Site audit says Y11 Advanced is "not yet a reliable implementation of the 2024 syllabus". |
| Maths Standard (Y11 56 in 8 FAs, Y12 63 in 10 FAs) | 119 | 120 to 145 | |

---

## 2. Throughput reality

### 2.1 What actually happened (11 to 16 October)

| Date | Published that day | Notes |
| --- | --- | --- |
| 11 Oct | Mould, C1, B1 | first explainer-engine videos |
| 12 Oct | C2, B2a | |
| 13 Oct | C3, B2c | owner switched to "consolidation" mode (no new designs) |
| 14 Oct | G01, C4a, B4, B2b, B3a | |
| 15 Oct | B3a2, C5, C4b, C8, C6a, C9 | |
| 16 Oct | C6b | 3 more cleared for render (G03c, B6a, G03d); 6 previews waiting for the owner |

- **19 videos in 6 days (about 3 a day).** This was a launch burst. It drew on scripts written during the owner's away period, a pre-approved voice budget and very heavy owner review.
- **Lead time from voiced script to upload:** 2 to 4 days (C3: voiced 12 Oct, live 13 Oct; C5: voiced 13 Oct, live 15 Oct).
- **Rework is real:** C5's opening was rebuilt, C8 went to revision 6 (four scenes re-recorded), B6a re-recorded harder questions, and owner preview notes produced at least one fix pass on most videos.

### 2.2 Bottlenecks, in order of how hard they bind

| Bottleneck | Measured or estimated load per video | Monthly capacity | What it means |
| --- | --- | --- | --- |
| **Voice credits** | about 6,300 to 6,900 characters per 8 to 10 minute video (50.7k for 8 videos; 41.3k for 6), plus about 10% for re-takes: **about 7,000 characters** | depends on plan. The July note records a plan of about 160K credits a month. The rate per character for the current voice (Simon, `eleven_v4`) is not recorded: at 1 credit per character that is **about 22 videos a month**; at 0.5 it is about 45 | **This is the hard cap.** At least 120k characters were used in 11 to 13 October alone. |
| **Owner review** | 9 minutes of playback, notes, then a second look at fixes: about 20 to 40 minutes per video | 40 videos is about 15 to 25 hours a month | Fine if the owner budgets 4 to 6 hours a week. Each extra fix pass costs another 10 to 20 minutes. |
| **Single render slot (8 GB RAM)** | final render 15 to 45 minutes; stills checks, voiced-review stills and preview builds also need the same slot | about 1 to 2 hours of machine slot per video; 40 videos is 40 to 80 hours | Workable only with overnight renders. A crash costs a session (13 Oct). Scene builds and stills cannot overlap a render. |
| **Codex art turnaround** | about one day per brief; brief 27 delivered 69 icons in one pass | effectively unlimited if asked a module ahead | Not a bottleneck when plates are requested before design, a bottleneck when requested after review notes. |
| **Claude design and review sessions** | design + two learning reviews + science check per video; sub-agents hit session limits overnight once | not measured | Design batches of 6 to 8 per subject keep this smooth. |

### 2.3 Realistic pace

| Scenario | Videos per month (both subjects) | Months per module (both subjects together, about 55 videos) | Months for one subject's module (about 27 to 30) |
| --- | --- | --- | --- |
| Voice-capped (22 a month) | 22 | 2.5 | 1.3 |
| **Steady (recommended planning number)** | **30** | **about 1.8** | **about 1** |
| Strong (bigger voice plan, pre-built packs, more RAM) | 40 | 1.4 | 0.7 |

At the steady pace the goal scope (about 430 videos) takes **about 14 months**, finishing near the end of 2027.

---

## 3. Phased roadmap (not rushed)

The term dates matter because the current Year 12 cohort (HSC 2027) is studying Module 5 now. A typical school order is M5 in Term 4, M6 in Term 1, M7 in Term 2 and M8 in Terms 2 to 3, then trials in August. The targets below aim to have each module out before most schools teach it.

| Phase | Content | Videos | Target window (steady pace) | Why this order |
| --- | --- | --- | --- | --- |
| 0 | Finish Module 5, both subjects | about 38 left (Chem 16, Bio 22) | now to late November 2026 | current cohort is studying it now |
| 1 | Module 6, both subjects | about 54 | December 2026 to February 2027 | schools teach M6 in Term 1 |
| 2 | Module 7, both subjects | about 61 | February to April 2027 | Term 2 |
| 3 | Module 8, both subjects | about 51 | April to June 2027 | must land before trials |
| 4a | Biology Year 11 (2025) | about 105 | July to October 2027 | late for part of the 2027 Year 11 cohort, fully ready for 2028; see decision D1 |
| 4b | Chemistry Year 11 (2025) | about 105 | August 2027 to January 2028 | course starts Term 1 2028 |
| 5 | 2025 Year 12 transition: Biology (Term 4 2027), then Chemistry (Term 4 2028) | reuse plus gap videos | from late 2027 | reuse 2017 videos where the teaching matches; add focused new ones |
| 6 | Physics and Maths | decision only | decide around mid-2027 after a pilot | see 3.7 |

Chemistry and Biology stay concurrent tracks in every phase. A blocker in one never holds the other (AGENTS.md).

### 3.1 Phase 0: finish Module 5

- **Entry:** already in progress.
- **Work left:**
  - Chemistry: C7, G02, G03a to G03d (in the pipeline), P01, P02, C10 to C15, P03 (G04 is optional cross-module).
  - Biology: B3b, B5a, B5b, B6a (in the pipeline), runner, B6b, B6c, P01, G01, B7 to B13, P02, P03, G02, G03.
- **Definition of done:**
  - Every route entry is either published or deferred with the owner's written OK.
  - The coverage ledger shows every M5 dotpoint as taught, or with a named home, including practical support.
  - Both playlists are in learning order, with dotpoints quoted in each description.
  - The site corrections (31 of 33 applied on a local branch, not pushed) are decided by the owner.
  - The Module 5 lessons learned are written into the review checklist (upgrade 3).

### 3.2 Phase 1: Module 6 (Acid/Base Reactions; Genetic Change)

- **Entry criteria, per subject:**
  - The M5 core videos for that subject are published. Companions may trail.
  - A Module 6 route JSON exists with entry knowledge, start and stop boundaries and handoffs.
  - Codex has delivered:
    - pre-design packs for every planned video;
    - a plate library;
    - a question-type bank;
    - an action-level syllabus ledger.
  - The owner has decided the M6 site corrections.
  - A monthly voice budget is agreed.
- **Definition of done:** the same as Phase 0, plus the reusable components ported for the module (for example the pH scale, the titration curve, the codon mutation table) are recorded in the explainer kit with a science check.

### 3.3 Phase 2: Module 7 (Organic Chemistry; Infectious Disease)

- **Entry criteria:**
  - Phase 1 core videos are published for that subject.
  - Site extracts and pre-design packs exist for M7.
  - The Chemistry M7 molecule tooling is chosen: ported engine3d molecule logic or painted structural plates. Organic chemistry needs many accurate structures, so this choice comes first.
- **Definition of done:** as Phase 1. Chemistry M7 also has a checked naming and structure library (IUPAC names and skeletal and structural formulas, verified once and reused).

### 3.4 Phase 3: Module 8 (Applying Chemical Ideas; Non-infectious Disease)

- **Entry:** as Phase 2.
- **Note:** Biology M8 was flagged in July as possibly over-length; settle its splits in the route before voicing.
- **Definition of done:**
  - Year 12 2017 is complete for both subjects.
  - Each module has an end-of-module question-type video set.
  - Every Year 12 video is linked from its site lesson (upgrade 9).

### 3.5 Phase 4: Year 11 on the new syllabus

- **Entry criteria:**
  - The site course is the source of truth and must be reviewed first.
    - Biology Y11 2025 is live, so it qualifies.
    - Chemistry Y11 2025 is unpromoted and "never gated", so it needs a site review pass before any video design.
  - Codex has delivered:
    - an action-level ledger from the official 2025 syllabus;
    - extracts and pre-design packs for the first focus area.
  - The owner confirms the channel plan for 2025 content (decision D4).
- **Definition of done:**
  - Each focus area is complete with dotpoint coverage.
  - The videos sit in separate "2025 syllabus" playlists.
  - Spoken openings avoid year and module labels, so the videos survive relabelling.

### 3.6 Phase 5: the 2025 Year 12 transition

- **Entry:** a Codex crosswalk that maps each 2017 Year 12 video to the 2025 focus-area dotpoints, rated reuse as is, reuse with a new title or description, or gap.
- **Likely overlap:**
  - 2017 Bio M5 Heredity overlaps the 2025 fa1 Heredity.
  - M7 and M8 overlap fa2 Diseases.
  - Parts of M6 overlap fa4 Biotechnology.
  - Chemistry M5 to M8 maps closely to the 2025 fa1 to fa4.
- **Definition of done:** the 2025 Year 12 playlists are complete from reused videos plus focused gap videos, and the old cohorts keep their playlists.

### 3.7 Phase 6: Physics and Maths (decision, not commitment)

| Question | Physics | Maths |
| --- | --- | --- |
| Engine fit | Good. Mechanics, waves and fields suit coded diagrams and kit motion; apparatus suits painted plates; vectors and graphs are coded. | Partial. The explainer kit (about 500 lines: HandText, DrawPath, Callout, Plate, Countdown) has **no equation typesetting** (no KaTeX or MathJax in the project) and no general graph plotter in the new engine. |
| Teaching style | Same as Chemistry: causes, a worked example, practice with the 10 s countdown. | Worked-example led: one step at a time, aligned working, fewer painted plates, more graphs and algebra. The calculation rules already in AGENTS.md (grouped givens, one reasoning stage at a time, aligned result lines) are a good base. |
| Engineering needed first | Small: port vector and graph logic from the legacy idea bank. | Medium: a math-typesetting component, an aligned-working layout, a function plotter (port the legacy `lineGraph` logic) and a geometry construction helper. |
| Site readiness | Y11 2025 live (79 lessons). Y12 2017 ends 2027; wait for Y12 2025. | The site audit says Advanced Y11 needs remediation against the 2024 syllabus. Fix the site before scripting from it. |
| Recommended next step | One pilot video from Physics Y11 fa1 after Phase 3. | Codex scoping, then Claude builds the typesetting component and **two pilots** (one Advanced calculus, one Standard financial maths) before any commitment. |

---

## 4. Process upgrades (ranked by impact for effort)

| Rank | Upgrade | Impact | Effort | What it changes |
| --- | --- | --- | --- | --- |
| 1 | **Module-ahead Codex pre-production**: extracts, action ledger, pre-design packs with recomputed numbers, site corrections, all one module ahead | High | Low for Claude (Codex does it) | Design starts from checked numbers. The M5 and M6 corrections found 33 and 17 site errors; finding them before scripting avoids re-records. |
| 2 | **Owner pre-flight checklist** run by Claude or Haiku before every owner preview (built from all past owner notes: label overlaps, loop-arrow clashes, "Pause here to answer." wording, 10 s countdown, practice difficulty, no rate algebra outside its home, em dashes, caption fit, loudness -14 LUFS, painted art not coded icons) | High | Low | Cuts owner fix passes from about 1.5 to about 1.1 per video. That saves owner time and voice credits. |
| 3 | **Batch design, voicing and review**: design 6 to 8 videos per subject per wave; voice the wave only after all checks; the owner reviews one batch in one sitting | High | Low | Fewer context switches; voice is spent once on locked scripts; renders queue overnight. |
| 4 | **Painted plate library per module, in advance** (organisms, apparatus, process pairs) | High | Low (Codex) | Removes the "coded stand-in, then swap" step and the art follow-up briefs (13, 27, 33, 36). |
| 5 | **Reusable topic components** in `src/explainer/` ported from the legacy logic (ExpressionBuilder, Q gauge, Punnett and pedigree generator, pH scale, titration curve, codon table, mix and dilute) | High | Medium | Each component serves 3 to 8 videos. The audit has the ranked list. |
| 6 | **More RAM (16 to 32 GB) or a second render machine** | Medium-high | Low effort, some cost | Lets stills and previews run while a render runs. Removes crash risk. A second machine also allows overnight renders while day work continues. |
| 7 | **Question-type bank per module** (like `research/hsc-equilibrium-question-types.md`), with original HSC-style questions | Medium-high | Low (Codex) | Feeds the G-series practice videos and harder in-video questions. Owner comments on B6a showed this matters. |
| 8 | **Website embeds**: a manifest of video, site lesson and dotpoint, then embeds on each lesson page | High (business) | Medium (site repo work, owner approval) | No site lesson embeds a video today. This is where videos earn students and subscriptions. |
| 9 | **YouTube chapters, end screens and SEO** for every upload (brief 42 started this) | Medium | Low (Codex) | Better watch time and next-video flow. |
| 10 | **Video-type templates** (concept, calculation, practical support, question-type) as shared scene skeletons | Medium | Medium | Shortens design. Must not become a rigid template (AGENTS.md forbids feature quotas). |
| 11 | **Thumbnail system** from plates and lettering (owner scrapped AI concepts; Claude designing) | Medium | Low-medium | Click-through on search results. |

---

## 5. Codex capacity plan

These tasks need no design decisions from Claude, so Codex can run them in parallel, months ahead. Each goes through a numbered brief in `claude-pm/codex-prompts/` under the standing rules (no narration, no scene code, no renders, no commits).

| Work type | Output | Volume per module (about 20 site lessons) | Can start for |
| --- | --- | --- | --- |
| Site extracts | `site-extracts/<subj>-m<n>-lNN.md` | 1 per site lesson: about 20 | Chem M7, M8; Bio M7, M8; Bio Y11 fa1 to fa3 |
| Action-level syllabus ledger | dotpoints quoted verbatim, paragraph IDs, candidate owning lesson, practical or data actions split out | 1 ledger, 25 to 40 rows | all of the above, plus Chem Y11 2025 |
| Site corrections | ranked error list for the owner, in the `site-corrections.md` style | 1 list; M5 had 33 errors, M6 had 17 | M7, M8, Y11 2025 (Chem 2025 is unreviewed, so expect more) |
| Pre-design packs | per planned video: dotpoints, site order, worked examples with numbers recomputed, traps, needed objects and plates | 25 to 30 packs | M6 now; M7 and M8 next |
| Painted plate libraries | transparent plates with provenance and QA sheets | 60 to 100 plates (M5 used several hundred files across both subjects) | M6 immediately; M7 after its packs |
| Fact and constant banks | checked tables (Ka, pKa, Ksp, indicator ranges, bond energies; pathogen facts, disease statistics with dates and sources) | 1 bank, 30 to 80 entries | all modules |
| Question-type research | HSC question types and frequency (2019 to 2025 papers, described, not copied) and original HSC-style questions with worked answers | 1 report and 15 to 30 questions | all modules |
| Memory-aid checks | verify the scientific assumptions of each aid in the M5 to M8 banks | 10 to 20 aids | M6 to M8 |
| Legacy-engine logic inventory | which old `kinds/*` exist per module, what their logic computes, science errors (read-only) | 1 audit | M6 to M8, Y11 |
| YouTube housekeeping | chapters, end screens, playlist order, dotpoint quotes, caption QA, monthly channel audit | about 1 hour per upload, plus 1 monthly audit | ongoing |
| Website video-embed manifest | JSON mapping video ID to site lesson, dotpoint and timestamp, plus a draft site change for owner approval | 1 manifest, updated per wave | now (19 videos) |
| 2017 to 2025 crosswalk | each 2017 Y12 video mapped to 2025 dotpoints: reuse, retitle or gap | 1 per subject | Biology now (2027 deadline), Chemistry later |
| Syllabus timeline verification | primary-source NESA dates for Bio, Chem, Physics and Maths (current notes rest partly on search summaries) | 1 short report | now |
| Physics and Maths scoping | lesson inventory, video-type analysis, maths typesetting needs, site readiness | 1 report per subject | from early 2027 |

**Rough Codex load per module:** about 8 to 10 briefs (extracts, ledger, corrections, packs in two halves, plates in two or three batches, constants, question types). Running two modules ahead, that is about 20 briefs in flight. This fits a large token budget, but the owner still pastes each brief, so batch them as "send these five" lists.

---

## 6. Risks and decisions for the owner

### 6.1 Risks

| Risk | Likelihood | Effect | Mitigation |
| --- | --- | --- | --- |
| 2017 Biology Year 12 videos have one cohort of life (HSC 2027) | Certain | M7 and M8 Biology videos made in mid-2027 serve only a few months unless reused | Phase 5 crosswalk now; keep spoken openings label-free; prioritise videos that map to 2025 dotpoints |
| Voice credits run out mid-wave | High | Stalls a whole batch | Monthly character budget per wave; voice only locked scripts; reuse hash-matched takes |
| Owner review time drops | Medium | Pipeline backs up behind previews | Pre-flight checklist; batch review sittings; agree a weekly review budget |
| 8 GB RAM crash during render or stills | Medium | Lost session, orphan processes, rework | One render job at a time (current rule); upgrade RAM |
| Site content errors carried into narration | High (33 found in M5) | Re-records, or wrong teaching | Site corrections before design; owner pushes fixes |
| Chemistry Y11 2025 site content not gated | High | Videos built on unreviewed content | Site review pass before Phase 4b |
| Physics and Maths dilute focus | Medium | Slows Year 12 delivery | Decision gate after Phase 3 only |
| Exact NESA dates partly from search summaries | Low-medium | Mis-timed phases | Codex primary-source check (section 5) |
| Real HSC past questions need NESA permission | Certain | Cannot quote papers | Original HSC-style questions; owner decides whether to ask copyright@nesa.nsw.edu.au |

### 6.2 Decisions for the owner

| # | Decision | Options | Claude's recommendation |
| --- | --- | --- | --- |
| D1 | **Biology sequencing.** The 2017 Year 12 course ends with the 2027 HSC; the 2025 Year 11 course starts in Term 1 2027. | (a) Y12 M6 to M8 first, then Y11 (current order); (b) start Bio Y11 fa1 in January 2027 alongside M7; (c) skip some 2017 Bio M7 and M8 videos that do not map to 2025 | (a), with every Bio Y12 video checked against the 2025 crosswalk so most get a second life. Revisit at the end of Phase 1 (February 2027). |
| D2 | **Monthly voice budget.** Credits are the hard cap. | stay on the current plan (about 22 videos a month if 1 credit per character); upgrade the tier (about 40 a month) | Confirm the real credit rate for `eleven_v4` first. Then pick the tier that matches the pace you can review. A bigger plan without review time just piles up previews. |
| D3 | **Pace versus quality.** | steady (about 30 a month, about 5 hours of review a week); strong (about 40 a month, about 7 hours a week) | Steady. Keep the current bar (motion standard, two learning reviews, science check). |
| D4 | **Channel strategy.** | one channel with playlists per subject and syllabus version (current); separate channels per subject; a separate maths channel later | Keep one HSCScience channel and add "2025 syllabus" playlists. Reconsider only if maths starts, because its audience differs. |
| D5 | **Hardware.** | stay on 8 GB; upgrade RAM to 16 to 32 GB; a second machine for renders | Upgrade the RAM if the board allows it. It is the cheapest throughput gain on the list. |
| D6 | Push the Module 5 site corrections (local branch `fix/site-science-corrections-2026-10-12`) and decide the M6 list | push, edit, hold | Push after reading the five rewritten sentences; the site is the source of truth for videos. |
| D7 | Re-upload the first seven videos at -14 LUFS | re-upload, leave | Leave them for now; batch re-uploads once Module 5 is finished. |
| D8 | Physics and Maths | decide now; decide after Phase 3 | After Phase 3, with one Physics pilot and two Maths pilots. |

---

## 7. Next actions (two weeks)

1. Owner: watch the six waiting previews; send briefs 28h to 42 that are still queued.
2. Claude: finish Phase 0 in batches (Chemistry C10 to C15 and Biology B6b to B9, from the existing pre-design packs).
3. Codex (new briefs to write):
   - Module 7 and 8 site extracts for both subjects;
   - the M6 pre-design packs and plate library;
   - the Biology 2017 to 2025 crosswalk;
   - the NESA date verification;
   - the website embed manifest.
4. Claude: write the owner pre-flight checklist from past notes (upgrade 2).
5. Owner: decide D1 to D5.
