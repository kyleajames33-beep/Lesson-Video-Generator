# Feature Wishlist

Prioritised backlog of visual/animation features for the slide vocabulary, grounded in three reference videos. Use this in order — P0 first, then P1. Skip the "Skipped" list unless the brand direction changes.

This is a living doc. Update it whenever a feature ships (mark **DONE**) or a new reference video is logged.

## Reference Videos Studied

### Round 1 (2026-04-30)

| Channel | Video | URL | Why it's a reference |
|---|---|---|---|
| **Kurzgesagt** | What Happens If You Destroy A Black Hole? (2023) | https://www.youtube.com/watch?v=cFslUSyfZPc | Gold standard for typography + iconography on abstract physics |
| **Atomi** | The Atom & Isotopes — Preliminary HSC Chemistry | https://www.youtube.com/watch?v=01HHXRp7_qg | Canonical HSC whiteboard-doodle lesson template |
| **Science Ready** *(substitute)* | HSC Chemistry playlist | https://www.youtube.com/playlist?list=PL6LvpsVXtfekvLhOqjAZqah0bu5WoEjoB | High-production NSW-syllabus HSC science channel; presenter + animation hybrid |

### Round 2 (2026-04-30)

| Channel | Video | URL | Why it's a reference | Signal value |
|---|---|---|---|---|
| **Vox** | The credit card crisis | https://www.youtube.com/watch?v=zVDW0RScEHc | The defining "explanatory journalism" house style — kinetic typography, chart animation, infographic overlays | **High** (translation needed — live action) |
| **Listicle** | "10 Top Animated Explainer Videos in Education (2025)" | https://www.youtube.com/watch?v=goCbnBN-qVo | Surveys ed-explainer landscape (Google for Education, Microsoft, MasterClass, Codio, IQarena, ChatClass etc.) | **Low** (most listed are corporate marketing explainers, not pedagogical content) |
| **How to Restart Your Life** | The Mountain Is You (Animated Book Summary) | https://www.youtube.com/watch?v=fL6Y1hXxz1c | Generic 2D vector book-summary genre — useful as a "what NOT to look like" reference | **Low** (style is interchangeable, no signature moves) |

### Caveats

- **"Antidote" substitution.** A current YouTube channel called "Antidote" focused on HSC science could not be located. Science Ready is used as the closest equivalent. If a specific Antidote channel is intended, send the URL to swap that section.
- **Timestamps are representative**, not frame-perfect. Verify by scrubbing the actual video before locking final timing values.
- **Vox is live-action + overlay.** We can only learn structural / typographic / chart-animation moves — not camera or B-roll moves. The Vox aesthetic is also bright/news-channel; translating it to our dark cinematic palette is non-trivial.
- **The listicle was a weak source.** Most of the 10 entries are 30-second corporate product explainers. The genuine high-value channels surfaced *adjacent* to the search are listed under "Candidates for next round" below — these (Cleo Abram's *Huge If True*, Life Noggin) are stronger references than what the listicle directly named.
- **Skipped features.** A few moves observed in references are deliberately *not* in this wishlist because they conflict with `gold-standard-video-standard.md` (no mascot characters, no childish framing) — see "Skipped" section.

## P0 — Build first (cross-cutting, highest leverage)

These features appear in **2 or more** reference videos AND the current `src/animations/` doesn't have a clean equivalent. They're the foundation of the new visual vocabulary.

### P0.1 — Scribble underline / squiggly draw-on **— DONE 2026-04-30**

Shipped in [src/animations/DoodlePrimitives.tsx](../src/animations/DoodlePrimitives.tsx) as `<ScribbleUnderline>`. Awaits first slide use.

**Original status**: existing `UnderlineDraw` is a clean glowing bar (light theme), not a hand-drawn squiggle. Need a doodle-style version.
**Spec**: SVG path with seeded perlin jitter (already implemented in `doodles.jsx` `ScribbleUnderline`). Animate `stroke-dashoffset` from `length → 0` over 500ms with `easeInOutCubic`. 2 overlapping strokes for a "marker pen" feel. Color: amber `#f0a830` (accent rule — one per beat).
**Use when**: a key term or vocabulary word is spoken in voiceover. Not for emphasis-on-everything — applies the "one accent per beat" motion principle.
**Source**: Atomi #3 (squiggle under "isotope"), Kurzgesagt #1 (underline under title).
**Build target**: port `ScribbleUnderline` from `doodles.jsx` to `src/animations/DoodlePrimitives.tsx` as `<DrawScribbleUnderline>` taking `delay`, `width`, `seed`.

### P0.2 — Leader-line callout (line draws first, then label) **— DONE 2026-05-02**

Shipped in [src/animations/AttentionPrimitives.tsx](../src/animations/AttentionPrimitives.tsx) as `<LeaderLineCallout>`. First use: ConceptSlide water-molecule atom labels.

**Original status**: existing `Callout` is a speech bubble that pops in. The reference move is different: a thin line draws from a diagram point out to a label position, then the text fades up.
**Spec**: SVG path stroke-dashoffset 200ms → label fades up (16px translate) 150ms after line completes. Multiple instances stagger 120ms apart.
**Use when**: labelling parts of a diagram simultaneously (atom shells, equation terms, anatomy).
**Source**: Kurzgesagt #4, Atomi #4 (margin note), Science Ready #1.
**Build target**: new `<LeaderLineCallout x1 y1 x2 y2 label delay>` in `src/animations/AttentionPrimitives.tsx`. Pair with the new `ScribbleAnnotation` doodle as the doodled variant.

### P0.3 — Highlight wipe on existing element **— DONE 2026-05-02**

Shipped in [src/animations/AttentionPrimitives.tsx](../src/animations/AttentionPrimitives.tsx) as `<HighlightWipe>`. First use: DefinitionSlide body-text recall emphasis (replaces `ScribbleHighlight` in `BodyWithHighlight`).

**Original status**: missing.
**Spec**: translucent rectangle (amber, 25% opacity) draws behind a previously-rendered text/element by animating its `clip-path` `inset(0 100% 0 0)` → `inset(0 0 0 0)` over 400ms. Element underneath stays put.
**Use when**: re-focusing on a previously-introduced item (e.g. "remember **protons**?"). Different from initial reveal — this is *recall* emphasis.
**Source**: Kurzgesagt #6, Atomi #5, Science Ready #4.
**Build target**: new `<HighlightWipe color delay>` wrapper in `src/animations/AttentionPrimitives.tsx`. Doodle variant uses `ScribbleHighlight` from `doodles.jsx`.

### P0.4 — Number / value ticker count-up **— DONE 2026-05-02**

Shipped in [src/animations/MotionPrimitives.tsx](../src/animations/MotionPrimitives.tsx) as `<NumberTicker>`. First use: DefinitionSlide sub-heading scientific notation (`6.022 × 10²³`).

**Original status**: missing.
**Spec**: Number animates from `0` to target over 800ms, `easeOutCubic`. Optional ‍tabular-nums to prevent width thrash. For very large values (Avogadro's `6.022 × 10²³`), animate the mantissa first (0 → 6.022 over 600ms) then the exponent fades up at 600ms.
**Use when**: making scale viscerally felt — masses, counts, speeds, particle numbers. Mole-concept lessons especially.
**Source**: Kurzgesagt #3.
**Build target**: new `<NumberTicker from to delay duration format>` in `src/animations/MotionPrimitives.tsx`.

### P0.5 — Margin annotation (handwritten note + drawn arrow) **— DONE 2026-05-02**

Shipped in [src/animations/DoodlePrimitives.tsx](../src/animations/DoodlePrimitives.tsx) as `<MarginNote>`. First use: ConceptSlide bar-chart marginalia ("huge!" note pointing to Avogadro's Nₐ bar).

**Original status**: missing the integrated pair. Doodle primitives exist (`ScribbleArrow`, `FONT_HAND` Caveat), but no glued component.
**Spec**: handwritten text in Caveat 48–56px, rotated -4° to -8°, fades up. Then `ScribbleArrow` draws on 200ms later from the note's edge to the diagram point being annotated. Total ~700ms.
**Use when**: adding marginalia/elaboration to a main diagram (the Atomi/Antidote core move). Powers the new `marginalia` scene type when we add it.
**Source**: Atomi #4, animated-scenes-v3.jsx HookAnimated `← rust!` example.
**Build target**: new `<MarginNote text x y angle pointToX pointToY delay>` in `src/animations/DoodlePrimitives.tsx`.

### P0.6 — Stagger reveal helper (`<FadeUp>`) **— DONE 2026-04-30**

Shipped in [src/animations/FadeUp.tsx](../src/animations/FadeUp.tsx) as `<FadeUp>` (single block) and `<FadeUpStagger>` (word-by-word). Helper `useFrames()` exported for sec→frame conversion. Awaits first slide use.

**Original status**: ad-hoc per-component. There's `Reveal`, `ScaleReveal`, `TypewriterText` — but no single Remotion-native version of the `FadeUp` from `animated-scenes.jsx` that's the workhorse of the new design system.
**Spec**: `opacity 0 → 1`, `translateY 16px → 0`, over 400ms with `cubic-bezier(.2,.7,.3,1)`. Children pass through.
**Use when**: every word reveal, every block reveal, every chrome appearance. This is the most-used primitive in the new system.
**Source**: All 3 references; codified in motion principle #1.
**Build target**: new `<FadeUp delay dur dy>` in `src/animations/MotionPrimitives.tsx`. Used by every other P0 feature.

### P0.7 — Chart / graph data reveal *(added Round 2)* **— DONE 2026-05-02**

Shipped in [src/animations/DiagramPrimitives.tsx](../src/animations/DiagramPrimitives.tsx) as `<DataChart>`. First use: ConceptSlide bar charts (replaces `BarChartDiagram` in `DiagramRenderer` switch). Supports `kind="bar"` and `kind="line"`.

**Original status**: missing. No animated chart primitive in `src/animations/`.
**Spec**: axes draw on first (`stroke-dashoffset`, 300ms), then bars/lines build sequentially. Bar charts: each bar grows from height 0 to target with `easeOutCubic` over 400ms, staggered 120ms. Line charts: path strokes left-to-right over 800ms. Y-axis tick labels fade up after axes settle. Data values can ticker-count using P0.4.
**Use when**: any quantitative claim — atomic masses, reaction rates, concentration changes, periodic-table trends, exam mark distributions. Vox-grade chart animation is the single biggest "this looks like real journalism" signal.
**Source**: Vox (chart and graph animation = core house move), cousin to Kurzgesagt #3 number ticker.
**Build target**: new `<DataChart kind="bar"|"line" data axes>` primitive in `src/animations/DiagramPrimitives.tsx`. Should integrate with the existing `DiagramRenderer` switch.

## P1 — Build second (high-impact, channel-specific)

These appear in **only one** reference but are strong moves that fit the dark/cinematic + doodled brand direction.

### P1.1 — Iris-wipe scene transition

**Status**: existing `cinematicTransitions.tsx` and `crashZoom.tsx` cover other transition styles. No iris.
**Spec**: circular SVG mask centred on a focal point, expands from `r=0` to `r=screen-diagonal` over 600ms, `easeInOutCubic`. Next scene revealed inside.
**Use when**: zooming "into" a concept (the black hole, an atom, a single droplet). Strong for hook → concept transitions.
**Source**: Kurzgesagt #2.
**Build target**: new `<IrisWipe>` presentation in `src/transitions/`.

### P1.2 — Stamp-in title with stroking underline

**Status**: missing the integrated effect. `TitleSlide.tsx` exists but uses generic motion.
**Spec**: title scales `1.05 → 1.0` over 250ms with overshoot `cubic-bezier(.34,1.56,.64,1)`, while a thin underline (mono-aesthetic, 2px) strokes left-to-right behind it 100ms later.
**Use when**: episode titles, chapter cards, cold-open question.
**Source**: Kurzgesagt #1.
**Build target**: new `<StampInTitle>` in `src/animations/MotionPrimitives.tsx`. Re-skin existing `TitleSlide.tsx` to use it.

### P1.3 — Live-draw schematic builder

**Status**: missing as a primitive. `DiagramRenderer` renders diagrams instantly.
**Spec**: a higher-order component that takes any SVG-based diagram and animates `stroke-dashoffset` on each child path, sequentially with 80–200ms stagger and slight perlin-jitter on the path itself for hand-drawn feel.
**Use when**: building any schematic in the order students should encode it (atom shells inside-out, electron flow step-by-step, anatomy of a single droplet).
**Source**: Atomi #2.
**Build target**: new `<DrawOnSchematic stagger jitter>` wrapper in `src/animations/DiagramPrimitives.tsx`. Apply across existing diagram types.

### P1.4 — Chapter ribbon / progress bar

**Status**: missing. `Chrome` (top + bottom row) exists in the new design system but doesn't yet show progress through chapters.
**Spec**: thin bar across bottom (above the `Chrome` syllabus row), segmented into the 4–5 named phases of the lesson (Hook → Concept → Worked → Quick check → Summary). Active segment pulses opacity 0.7 ↔ 1.0 over 1.5s.
**Use when**: every scene. Persistent. Gives orientation in a 5-min lesson.
**Source**: Science Ready #7.
**Build target**: new `<ChapterRibbon current total labels>` baked into `Chrome` component.

### P1.5 — Equation step-builder with active-term highlight

**Status**: existing `FormulaBuild.tsx` token-by-token reveal. Doesn't yet highlight the *changed* term per step.
**Spec**: when a new step appears below the previous, the changed term renders in amber for 600ms then fades to ink color. Terms that didn't change render at neutral color immediately.
**Use when**: worked examples — makes "what changed" visible.
**Source**: Science Ready #4, Atomi #8.
**Build target**: extend `FormulaBuild.tsx` with `highlightDelta` prop. Update `WorkedExampleSlide.tsx` to use it.

### P1.6 — Stuttered low-fps motion (the Vox 12fps look) *(added Round 2)*

**Status**: missing. Remotion renders at the composition fps (currently 30); this primitive forces certain elements to render at 12fps for an intentionally hand-rendered feel.
**Spec**: a wrapper component `<StutterFrame fps={12}>` that quantises `useCurrentFrame()` for its children — `Math.floor(frame / (compositionFps / fps)) * (compositionFps / fps)`. Children's animations only update on the stuttered frames.
**Use when**: chart fills, doodle redraws, kinetic-typography flourishes. Sparingly — never on full scenes (would hurt readability of body text). It's a flavor accent, like vinyl crackle.
**Source**: Vox house style (composition built at 12fps, rendered at 24).
**Build target**: new `<StutterFrame>` HOC in `src/animations/MotionPrimitives.tsx`. Document explicitly that body text and voiceover-synced reveals must NOT use it.

### P1.7 — Stuttered staggered lower-third (named pill) *(added Round 2)*

**Status**: existing `Chrome` component shows top/bottom rows but no per-segment pill. P1.4 chapter ribbon is full-width; this is a different element — a transient pill that names *who/what* is on screen.
**Spec**: rounded-rect pill (corner-radius 6, padding 8/16) slides up from below screen edge with text appearing character-by-character at ~60ms/char (Vox stutter). Background `bgLift` `#0f1614`, 1px stroke `rule`, mono-font label `#e8efe9`. Persists 3-5s, then slides back down.
**Use when**: introducing a named entity that appears multiple times across the lesson (a specific atom, equation name, constant). Different from the persistent `Chrome` (which names the *lesson context*).
**Source**: Vox (lower-third "as if being eaten"), Science Ready #1 (lower-third syllabus tag).
**Build target**: new `<NamedPill text durationFrames>` primitive in `src/slides/shared/`.

### P1.8 — Camera-blur cinematic transition *(added Round 2)*

**Status**: existing `cinematicTransitions.tsx` and `crashZoom.tsx` cover other styles. No camera-blur transition.
**Spec**: outgoing scene scales `1 → 1.06` with simultaneous `filter: blur(0 → 8px)` over 350ms; incoming scene starts at `scale 1.06, blur 8px` and lands on `scale 1, blur 0` over the next 350ms. Total 700ms cross-fade. Subtle backward camera-track feel.
**Use when**: continuous-explanation transitions (within a single concept). Pair with P1.1 iris-wipe for hard-cut moments — these two cover different transition jobs.
**Source**: Vox (3D camera track + blur, "as if camera is moving in and out of focus").
**Build target**: new `<CameraBlur>` presentation in `src/transitions/`.

### P1.9 — Color-coded atom legend system

**Status**: missing. Diagrams currently colour atoms ad-hoc.
**Spec**: enforce `C=ink`, `H=light-grey-stroke`, `O=red-orange #e07a3a`, `N=#3a8ad9` (matches subject-token bio), `Cl=chem2 emerald` etc., as a single `ATOM_COLORS` map. Bond lines stroke-on as `stroke-dashoffset` animations.
**Use when**: any chemistry molecular diagram.
**Source**: Science Ready #5.
**Build target**: new `src/styles/atomColors.ts` constant + `<MoleculeDiagram atoms bonds>` primitive in `src/animations/DiagramPrimitives.tsx`.

## Candidates for next research round

These channels surfaced *adjacent* to the Round 2 search and look stronger than the listicle's nominal entries. Worth dedicated study before Round 3.

| Channel | URL | Why interesting |
|---|---|---|
| **Cleo Abram — *Huge If True*** | https://www.youtube.com/@cleoabram | Optimistic tech/science explainer. Animator Justin Poore builds set-piece animations (e.g. quantum computers visualised as a video-game world). Hybrid presenter + bespoke animated explainers. |
| **Life Noggin** | https://www.youtube.com/@LifeNoggin | Long-running educational explainer channel, character-driven. Known for friendly typography + simple shape-based illustration. |
| **Veritasium** | https://www.youtube.com/@veritasium | Physics presenter + on-screen graphics overlay. Strong for equations + real-world demonstrations. |
| **3Blue1Brown** | https://www.youtube.com/@3blue1brown | Manim-built mathematical animation. Gold standard for showing *how* abstract math/physics works visually. |

When studying these, log signature moves the same way Round 1/2 entries are logged. If a feature appears in 2+ refs total across all rounds, promote it to P0.

## Skipped — observed in references, deliberately not building

| Feature | Where observed | Why skipped |
|---|---|---|
| Mascot duck reaction shots | Kurzgesagt #6 | Conflicts with `gold-standard-video-standard.md`: "do not add full cartoon characters by default… can make Year 11 content feel younger than it should." |
| Picture-in-picture presenter cam | Science Ready #2 | We're explainer-only, no live presenter footage in this pipeline. |
| Term-definition card flip (3D) | Science Ready #3 | 3D card flips read as gimmicky / consumer-app — clashes with the cinematic dark direction. The `DefinitionSlide` doodled variant (scribble circle around the term) achieves the same goal more on-brand. |
| End-card "Subscribe / Next lesson" CTA | Science Ready #8 | The lesson page on hscscience.com.au handles next-step routing; in-video CTAs would feel YouTube-y. |
| Equation term physically migrating across `=` sign | Atomi #8 | Cool but expensive to build and seldom needed at HSC level. Defer until a lesson actually demands it. |
| Live-action B-roll + presenter | Vox | Out of pipeline scope — Remotion-only, no live capture. Adopting Vox's *typography* and *chart* moves is the right translation. |
| Generic 2D vector book-summary aesthetic | The Mountain Is You | Genre is interchangeable / unbranded. Direct opposite of the cinematic dark direction we're committing to. |
| 30-second corporate-marketing explainer style | Listicle entries (Codio, Oxbridge, MasterClass etc.) | Sales-funnel pacing + smiling-stock-character art conflicts with the "respects the student" tone in `gold-standard-video-standard.md`. |

## Update rule

When a feature ships:
- Mark **DONE** in this doc with the slide(s) where it's first used and the date
- Add the durable design rule (when to use, when not to) to `docs/visual-design-handbook.md`
- If it was used in a real lesson and *didn't* feel better — delete the code AND remove from this doc

When a new reference video is studied:
- Add a row to the Reference Videos Studied table
- Add new candidate features to whichever priority tier they belong in
- If a feature now appears in 2+ references, promote it from P1 to P0
