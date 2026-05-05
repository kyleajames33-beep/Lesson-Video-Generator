# HSCScience Video Pipeline — Master Plan

The capstone document. This is what every other doc in `docs/` reports up to.

If you (Claude or human) only have time to read one thing before working on this project, read this. It's the strategic frame; specific rules and rubrics live in the docs cross-referenced below.

---

## 1. The vision

> **The best HSC Science explainer videos in Australia, produced consistently, by a pipeline that compounds in quality every lesson.**

"Best" is not vibes. It means:

- **Pedagogically:** every lesson opens with a real student problem, teaches one idea clearly, anchors to a NESA syllabus dot point, prevents the most common misconception, includes one active-recall check, and ends with a decision rule the student can apply on the next exam question. Defined in [gold-standard-video-standard.md](gold-standard-video-standard.md).
- **Visually:** every lesson uses the same dark cinematic palette, same type scale, same chrome, same doodle vocabulary, and the same six motion principles. A student watching three lessons in a row should feel they're watching one show, not three. Defined in [visual-design-handbook.md](visual-design-handbook.md).
- **Operationally:** every lesson passes the production gate before it ships. Voiceover timing is validated, captions and transcripts are exported, the site manifest is updated, and a retrospective captures what to keep/avoid for the next one.
- **Strategically:** the videos are not standalone — they sit inside the HSCScience platform alongside notes, quizzes, mistake-aware revision, and progress tracking. The MP4 is one part of a learning loop, not the whole product. Defined in [site-video-integration-plan.md](site-video-integration-plan.md).

## 2. The four pillars of consistency

What stops quality from drifting as we scale from 2 lessons to 200:

| Pillar | Discipline mechanism | Owning doc |
|---|---|---|
| **Content quality** | Reference style + teaching pattern + non-negotiables | [lesson-reference-style.md](lesson-reference-style.md), [gold-standard-video-standard.md](gold-standard-video-standard.md) |
| **Visual quality** | Tokens + 10-doodle vocab + 7 motion principles + small curated component catalog | [visual-design-handbook.md](visual-design-handbook.md), [feature-wishlist.md](feature-wishlist.md) |
| **Production discipline** | Validators, production gate, voiceover timing checks, render scripts, retrospectives | `scripts/`, [lesson-retrospective-template.md](lesson-retrospective-template.md) |
| **Continuous improvement** | Reference-video study loop, build-and-judge workflow, durable memory across sessions | [feature-wishlist.md](feature-wishlist.md), [production-memory.md](production-memory.md), `~/.claude/projects/c--lesson-video-generator/memory/` |

If any pillar weakens, lesson quality drifts. The job is to keep all four tight.

## 3. The architecture (technical, in plain terms)

```
┌─ LESSON CONTENT (src/data/*.json) ─────── what to teach
│  validated by: scripts/validate-lesson.mjs
│
├─ SCENE TYPES (src/lesson/types.ts) ────── menu of lesson moments
│  current: title · hook · concept · definition · formula
│           · workedExample · misconception · quickCheck · summary
│  planned: marginalia · labFootage
│
├─ SLIDE COMPONENTS (src/slides/*.tsx) ──── how each moment looks
│  built from:
│    src/styles/tokens.ts          ← TOK colors + fonts + type scale
│    src/animations/FadeUp.tsx     ← reveal primitive
│    src/animations/DoodlePrimitives.tsx  ← 10 scribbles + 3 legacy
│    src/animations/MotionPrimitives.tsx  ← TypewriterText, KenBurns, Reveal
│    src/animations/AttentionPrimitives.tsx  ← Spotlight, UnderlineDraw, Callout, Checkmark
│    src/slides/diagrams/          ← 10 diagram types
│
├─ RENDERER (src/LessonVideo.tsx) ───────── stitches scenes into one composition
│  TransitionSeries with cinematicTransitions / crashZoom
│  per-scene CaptionBar + SceneVoiceover
│
└─ OUTPUT
    out/*.mp4                         ← final video
    public/audio/<comp>/<scene>.mp3   ← scene-level voiceover
    site manifest                     ← consumed by hscscience.com.au
```

To add a new feature you touch: `types.ts` (new scene type) + new `Slide.tsx` (the look) + a `case` in `LessonVideo.tsx` (the routing).

## 4. The per-lesson production workflow

This is the canonical sequence for producing **one** lesson. It's a checklist — every lesson goes through every step.

### Stage 1 — Plan
- [ ] Confirm syllabus dot point(s) being covered
- [ ] Confirm the **one idea** the lesson teaches
- [ ] Identify the most common misconception for this idea
- [ ] Identify the decision rule the lesson ends with
- [ ] Decide reference vs production role (`productionRole` field)

### Stage 2 — Author the lesson JSON
- [ ] Open with a student problem, not a syllabus heading
- [ ] Each scene answers one question
- [ ] Worked examples follow Known → Find → Formula → Substitute → Answer → Unit check
- [ ] Misconception scene present
- [ ] Quick check present with `pausePrompt` and `answerSteps`
- [ ] Summary ends with a decision rule
- [ ] Voiceover text written for every scene
- [ ] Lesson saved at `src/data/<subject>-<year>-<module>-<lesson>-<slug>.json`
- [ ] `npm run validate:lessons` passes
- [ ] `npm run generate:registry` updates `src/data/lessonRegistry.ts`

### Stage 3 — Voiceover prep
- [ ] `npm run voiceover:manifest -- <lesson.json>` — generates expected audio paths
- [ ] `npm run voiceover:timing` — flags any scenes where speech doesn't fit duration
- [ ] Resolve timing warnings (extend duration, cut script, or accept explicitly)
- [ ] Generate ElevenLabs MP3s, place at expected paths
- [ ] `npm run voiceover:sync -- <lesson.json>` — wires audio into JSON
- [ ] Re-run timing check

### Stage 4 — Render & visual review
- [ ] `npm start` — open Remotion Studio, scrub each scene
- [ ] For small visual changes, render only the affected frame range first:
      `npx remotion render src/index.ts Chemistry-Y11-M2-L2 out/checks/phase1/<name>.mp4 --frames=240-390 --scale=0.5 --codec=h264 --crf=28`
- [ ] Render the full lesson only for milestone reviews, final review, or changes that affect many scenes
- [ ] Watch the full MP4 at full speed, then again at 0.5×
- [ ] **Score against** [gold-standard-video-standard.md](gold-standard-video-standard.md) — all 5 categories must hit 10/10
- [ ] Check the seven motion principles are obeyed (no dead frames, one accent per beat, etc.)
- [ ] Check doodle layer follows the rule: focus attention or prevent a mistake (never decoration)

### Stage 5 — Production gate
- [ ] `npm run gate:production` — must pass
- [ ] `npm run audit:production` — review report
- [ ] If gate fails: fix the underlying issue, do not bypass

### Stage 6 — Ship
- [ ] `npm run export:transcript -- <lesson.json>` — for the lesson page
- [ ] `npm run export:site-manifest` — for hscscience.com.au consumption
- [ ] Deploy MP4 + manifest

### Stage 7 — Retrospective (mandatory, not optional)
- [ ] Use [lesson-retrospective-template.md](lesson-retrospective-template.md)
- [ ] Capture: one pattern worth reusing, one mistake to avoid, one timing/engagement issue, whether any issue should become a validator rule
- [ ] Promote durable lessons to [production-memory.md](production-memory.md)
- [ ] If a slide animation didn't earn its keep — delete it, update [feature-wishlist.md](feature-wishlist.md)

**No retrospective = no shipped lesson.** This is what compounds quality over time.

## 5. The continuous improvement loop

Quality consistency requires a loop, not a checklist. Three loops run in parallel:

### Loop A — Reference video study (weekly)
```
1. Watch 1 reference video with notepad
2. Log 3-5 specific moves with timestamps + build specs
3. Add to feature-wishlist.md (P0 if appears in 2+ refs, P1 if only 1)
4. Pick the highest-priority candidate to build next
```

### Loop B — Per-feature build cycle
```
1. Build ONE missing primitive (≤200 lines, type-checked)
2. Use it in ONE real lesson (not a demo file)
3. Render and watch — does it actually feel better?
4. If yes: keep, document the rule in visual-design-handbook.md
5. If no:  delete completely, mark in wishlist
```

### Loop C — Per-lesson retrospective (every shipped lesson)
```
1. Score against the rubric (5 categories, 10/10 target)
2. Capture pattern + mistake + timing issue
3. Promote learnings to production-memory.md
4. If a recurring issue: add a validator or gate rule
```

The three loops feed each other: study (A) discovers candidates, build (B) creates new vocabulary, retros (C) reveal what's missing or broken.

## 6. The roadmap — phased

### Phase 0 — Foundation **(DONE 2026-04-30)**
- ✅ Visual design handbook codified
- ✅ Reference videos studied (round 1: Kurzgesagt/Atomi/Science Ready; round 2: Vox/listicle/Mountain Is You)
- ✅ Feature wishlist with P0/P1 priorities
- ✅ Tokens + Caveat/Inter Tight/JetBrains Mono fonts
- ✅ `<FadeUp>` + `<FadeUpStagger>` reveal primitives
- ✅ 10 doodle primitives ported to Remotion TypeScript
- ✅ Reference JSX files moved to `docs/design-canvas-reference/`

### Phase 1 — Validate the new aesthetic on one slide **(DONE 2026-04-30)**

- ✅ `src/slides/shared/SlideFrame.tsx` — dark cinematic stage
- ✅ `src/slides/shared/SlideChrome.tsx` — top + bottom chrome rows
- ✅ `src/slides/HookSlide.tsx` — re-skinned: chrome + mono caption + atom glyph + hero question with scribble underline + margin annotation + amber callout
- ✅ `src/styles.css` — `.video-shell` and `.caption-bar` re-themed to dark
- ✅ Render-validated via stills at frames 200, 260, 500 — beat plan and motion timing confirmed
- Stills archived at `out/checks/phase1/`

**Exit criteria met.** The hook scene reads as gold-standard dark cinematic with hand-drawn doodle layer.

### Phase 1.5 — Validate reusability of foundation on a second slide **(DONE 2026-05-01)**

- ✅ `src/slides/DefinitionSlide.tsx` — re-skinned: `One mole.` hero with chem1 period accent, scribble circle around the term, handwritten Caveat margin annotation, sub-heading `= 6.022 × 10²³ particles` in chem2, body with amber highlight wipe behind `6.022 × 10²³`, secondary text, amber italic callout
- ✅ Validated `SlideFrame` + `SlideChrome` truly reusable (second slide stacked cleanly)
- ✅ Exercised additional doodle vocab: `ScribbleCircle`, `ScribbleHighlight`, `FONT_HAND` Caveat
- ✅ Discovered + fixed bug: wrapping absolute-positioned children inside `FadeUp` resolves wrong (FadeUp's `transform` creates a containing block; `bottom: N` collapses incorrectly). Pattern: positioning wrapper outside, FadeUp inside.

**Lesson learnt → handbook update:** added "FadeUp positioning gotcha" rule.

### Phase 1.6 — Validate the core explanatory workhorse slide **(DONE 2026-05-01)**

- ✅ `src/slides/ConceptSlide.tsx` — re-skinned onto `SlideFrame` + `SlideChrome`: left-column eyebrow/heading/body/secondary/callout, right-column dark visual stage for asset images or existing diagrams
- ✅ `src/LessonVideo.tsx` now passes `lesson` into `ConceptSlide`
- ✅ Render-validated both Lesson 1 concept variants: `concept-problem` image scene and `concept-scale` bar-chart scene
- ✅ Confirmed migration rule: existing diagrams can remain temporarily if they are contained inside the dark visual stage and do not leak light-theme panels into the slide shell

### Phase 1.7 — Validate formula/equation treatment **(DONE 2026-05-01)**

- ✅ `src/slides/FormulaSlide.tsx` — re-skinned against the Claude canvas formula scene: staggered mono equation terms, labelled term leaders, amber Avogadro term, supporting note cards, and dark-system unit safety check
- ✅ `src/LessonVideo.tsx` now passes `lesson` into `FormulaSlide`
- ✅ Render-validated early build and hold frames for the Lesson 1 formula scene
- ✅ Replaced old light-theme `UnitCancel` usage in this slide with an inline dark safety-check panel to avoid leaking legacy cards into the formula sequence

### Phase 1.8 — Validate worked-example calculation board **(DONE 2026-05-01)**

- ✅ `src/slides/WorkedExampleSlide.tsx` — re-skinned against the Claude canvas worked-example pattern: problem prompt, coach note, line-by-line teacher board, final amber answer, drawn check mark, and inline unit-cancel verification
- ✅ `src/LessonVideo.tsx` now passes `lesson` into `WorkedExampleSlide`
- ✅ Render-validated Lesson 1 worked example 1 at mid-build and final proof frames
- ✅ Render-validated Lesson 1 worked example 2 with the longer problem text and alternate unit-cancel path

### Phase 1.9 — Validate misconception / exam-trap treatment **(DONE 2026-05-01)**

- ✅ `src/slides/MisconceptionSlide.tsx` — re-skinned as a mistake-vs-fix board with dark cards, handwritten mistake stamp, doodle cross/check, and amber underlined decision-rule callout
- ✅ `src/LessonVideo.tsx` now passes `lesson` into `MisconceptionSlide`
- ✅ Render-validated Lesson 1 `misconception-nvn` with before/after data
- ✅ Render-validated Lesson 1 `misconception-mistakes` fallback path without relying on legacy diagrams

### Phase 1.10 — Validate active-recall quick check **(DONE 2026-05-01)**

- ✅ `src/slides/QuickCheckSlide.tsx` — re-skinned as a restrained active-recall scene: question-first layout, handwritten pause prompt, delayed answer board, final amber answer, doodle underline, and drawn check mark
- ✅ `src/LessonVideo.tsx` now passes `lesson` into `QuickCheckSlide`
- ✅ Render-validated Lesson 1 quick-check pause frame, mid-answer frame, and final-answer frame
- ✅ Confirmed the HSC answer-board treatment works without turning the scene into a game-show/card UI

### Phase 1.11 — Validate recap / decision-rule ending **(DONE 2026-05-01)**

- ✅ `src/slides/SummarySlide.tsx` — re-skinned from the Claude canvas recap pattern into a compact HSC exam checklist: five takeaways, token-coloured formula terms, and a final decision-rule card
- ✅ `src/LessonVideo.tsx` now passes `lesson` into `SummarySlide`
- ✅ Render-validated Lesson 1 recap at early, mid, and final frames
- ✅ Fixed the fifth takeaway/caption collision by tightening recap row spacing instead of shrinking the decision-rule card

### Phase 1.12 — Validate title card / opening identity **(DONE 2026-05-01)**

- ✅ `src/slides/TitleSlide.tsx` — re-skinned from the Claude canvas title pattern: dark cinematic opening, persistent chrome, giant title split, amber drawn underline, module context, and subtle formula/atom backdrop
- ✅ Render-validated Lesson 1 title at build-up and full-hold frames
- ✅ Completed migration of all existing slide types away from the old light-theme slide shell

### Phase 2 — Build remaining P0 features **(DONE 2026-05-02)**
P0.2 (leader-line callout) · P0.3 (highlight wipe) · P0.4 (number ticker) · P0.5 (margin annotation pair) · P0.7 (chart/graph reveal). Built in focused commits, immediately used in real slides, `npm run check:all` passes.

- P0.2 `LeaderLineCallout` — ConceptSlide water-molecule atom labels
- P0.3 `HighlightWipe` — DefinitionSlide body-text recall emphasis
- P0.4 `NumberTicker` — DefinitionSlide sub-heading scientific notation
- P0.5 `MarginNote` — ConceptSlide bar-chart marginalia
- P0.7 `DataChart` — DiagramRenderer bar-chart replacement

**Exit criteria met:** every P0 feature is shipping in at least one slide.

### Phase 3 — Re-skin all existing slides **(DONE 2026-05-01)**
9 slides total. One per commit, in this order (highest leverage first):
1. HookSlide *(in Phase 1)*
2. DefinitionSlide
3. ConceptSlide *(in Phase 1.6)*
4. FormulaSlide *(in Phase 1.7)*
5. WorkedExampleSlide *(in Phase 1.8)*
6. MisconceptionSlide *(in Phase 1.9)*
7. QuickCheckSlide *(in Phase 1.10)*
8. SummarySlide *(in Phase 1.11)*
9. TitleSlide *(in Phase 1.12)*

Each commit: re-skin → render full lesson → retro pass.

**Exit criteria met:** Lesson 1 (mole-concept) has every existing slide type migrated and still-render validated. A half-scale full-lesson proxy render completed at `out/checks/phase1/lesson1-gold-standard-proxy.mp4`, proving the migrated stack renders end to end. `npm run check:all`, `npm run audit:production`, and `npm run gate:production` pass.

Lesson 2 (molar-mass) has also been spot-checked across every scene type and proxy-rendered at `out/checks/phase1/lesson2-gold-standard-proxy.mp4`. This proves the migrated components handle a second, shorter production lesson with different text lengths and a definition-side unit table.

**Remaining review:** watch both proxy MP4s manually for pacing, transition feel, caption rhythm, and whether any scene holds too long after its reveal. Lesson 1 still has known voiceover timing warnings because it is a long reference lesson; resolve those before final ElevenLabs generation.

### Phase 4 — Add new scene types
- ✅ `marginalia` — the Atomi signature scene (handwritten note + arrow + main concept). Built 2026-05-02: `MarginaliaSlide.tsx` with concept card, sequential handwritten margin notes, and `ScribbleArrow` connectors. Added to Lesson 2 (`marginalia-molar-mass` scene). Validated via still render.
- ✅ `labFootage` — frame for lab demo images with annotations. Built 2026-05-02: `LabFootageSlide.tsx` with visual stage, asset image, and corner annotations with `ScribbleArrow`. Added to Lesson 2 (`lab-footage` scene). Validated via still render.
- `workedExampleV2` *(if needed)* — line-by-line teacher reveal

Each adds: type to `types.ts` + `Slide.tsx` + case in `LessonVideo.tsx` + JSON schema update.

**Exit criteria:** at least one shipped lesson uses each new scene type.

### Phase 5 — Production hardening
- Resolve all current voiceover timing issues for Lesson 1 ([production-memory.md](production-memory.md) "Current Known Issues")
- Generate Lesson 1 ElevenLabs voiceover
- Lesson 2 to "production" status with full audio
- Audit + dashboard scripts return clean
- ✅ Render-stills script for thumbnails — `scripts/render-lesson-posters.mjs` built 2026-05-02. Renders one JPEG poster per lesson (hook scene at ~65%, full scale, 90% quality). Supports single-lesson and `--all` bulk mode. Outputs to `out/posters/<composition-id>.jpg`.

**Exit criteria:** two lessons end-to-end production-ready (audio + video + transcript + site manifest), both passing all gates.

### Phase 6 — P1 build-out + Round-3 reference study
P1.1–P1.9 in priority order (iris-wipe, stamp-in title, live-draw schematic, chapter ribbon, equation step-builder with delta highlight, stuttered 12fps, named pill, camera-blur transition, color-coded atom legend).

Round-3 reference study targets: 3Blue1Brown, Cleo Abram (*Huge If True*), Veritasium, Life Noggin. Promote any feature appearing in 2+ refs to P0.

### Phase 7 — Subject expansion
Re-skin tokens for Bio (`#3a8ad9`), Physics (`#e07a3a`), Maths (`#9b6dd9`) by composing a `subjectColor()` swap in slide chrome. Produce one reference lesson per subject. Verify visual coherence across subjects.

**Exit criteria:** a 4-lesson sample (one per subject) feels like one show.

### Phase 8 — Scale
Generate the remaining lesson catalog for Year 11/12 Chemistry, then expand to other subjects. The pipeline is now stable; the bottleneck shifts to content authoring + voiceover throughput.

**Long-term north star:** every NESA HSC Science syllabus dot point has a video, every video has notes + quiz + mistake-aware revision, the platform compounds (more lessons → more retros → better pipeline → better next lesson).

## 7. Definition of done

### Per scene component
- TypeScript compiles (`npm run check`)
- Visual matches the design canvas reference
- Used in at least one real lesson (not a demo file)
- Documented timing rules in `visual-design-handbook.md` if non-obvious

### Per lesson
- Validator passes
- Production gate passes
- Voiceover timing healthy or warnings explicitly accepted
- ElevenLabs audio generated and synced
- Rendered MP4 exists
- Retrospective filled in
- Captions + transcript exported
- Site manifest updated
- New learnings promoted to `production-memory.md`

### Per module (multiple lessons)
- All lessons in module pass per-lesson definition
- Visual coherence check across the module (do they feel like one show?)
- Pacing variation across lessons (no two lessons feel identical)
- Module-level retrospective in `production-memory.md`

### Per subject
- ≥1 reference lesson + ≥1 production lesson
- Subject-coloured token swap verified
- Cross-subject visual coherence check (does Chem feel like Bio feels like Phys?)

## 8. Risks and how we mitigate them

| Risk | Mitigation |
|---|---|
| **Quality drifts as catalog grows** | The four pillars + retrospective loop. New lessons must score against the rubric before shipping. |
| **Component sprawl ("feature soup")** | Curation rule: every component must earn its keep — delete after one render where it didn't help. Wishlist tracks priority; no out-of-band additions. |
| **Visual incoherence between lessons** | Single source of truth for tokens, fonts, motion. Slide components must consume `tokens.ts`, never inline colors. |
| **Voiceover timing issues** | `voiceover:timing` is a required gate, not optional. Resolve before generating audio (`production-memory.md`). |
| **Solo bottleneck** | Memory + handbook + plan compound across sessions. Future Claude sessions inherit context, reducing rediscovery cost. |
| **Reference video drift** | Loop A is durable, not one-off. Add new references quarterly. Promote 2+ ref features to P0. |

## 9. Cross-references

- **What "good" looks like (content):** [gold-standard-video-standard.md](gold-standard-video-standard.md)
- **What "good" looks like (visual):** [visual-design-handbook.md](visual-design-handbook.md)
- **Script and content rules:** [lesson-reference-style.md](lesson-reference-style.md)
- **What we've already learned:** [production-memory.md](production-memory.md)
- **What to build next:** [feature-wishlist.md](feature-wishlist.md)
- **How to retro a lesson:** [lesson-retrospective-template.md](lesson-retrospective-template.md)
- **Site delivery:** [site-video-integration-plan.md](site-video-integration-plan.md)
- **Chemistry-specific production:** [hsc-chemistry-production-plan.md](hsc-chemistry-production-plan.md)
- **AI lesson-generation prompt:** [ai-lesson-generation-prompt.md](ai-lesson-generation-prompt.md)
- **Visual reference (canvas):** [design-canvas-reference/](design-canvas-reference/) — open `HSC Video Template System.html` in a browser

## 10. Update rule

This plan is the strategic frame. Update it when:
- A phase exit criterion is met → mark the phase **DONE** with the date
- A new pillar emerges → add to section 2
- A new risk surfaces → add to section 8
- The vision changes materially → update section 1 with the new framing

Don't update for: tactical changes (those go in `production-memory.md`), per-feature decisions (those go in the wishlist or handbook), per-lesson learnings (those go in retrospectives).
