# Visual Design Handbook

The standing brief for Claude as designer-of-record on HSCScience video generation. Read this first when working on any visual, animation, or scene-design task.

## Role

The user has delegated visual/animation/UX design authority. Don't round-trip every decision — make the call, record the reasoning here, move on. Reserve user input for product direction, content correctness, and taste calls on finished output.

## The mental model

The pipeline is four layers:

```
1. LESSON CONTENT (src/data/*.json)       — what to teach
2. SCENE TYPES   (src/lesson/types.ts)     — the menu of lesson moments
3. SLIDE COMPONENTS (src/slides/*.tsx)     — how each moment looks/animates
4. RENDERER (src/LessonVideo.tsx)          — stitches them into one MP4
```

The JSON specifies which scenes appear in what order. `LessonVideo.tsx` switches on `scene.type` and renders the matching slide component. To add a feature: add a scene type, build the slide component, add a `case` to the switch. That's it.

**This four-layer model is also how to explain things to the user.** They think in product/strategy terms; ground every explanation in which layer is being touched before naming files.

## Visual direction (current standard)

Dark, cinematic, hand-drawn — Atomi/Antidote/Kurzgesagt school. Source-of-truth: the JSX reference files at project root (`system.jsx`, `doodles.jsx`, `scenes.jsx`, `scenes-v2.jsx`, `animated-scenes-v3.jsx`).

**Tokens** — see `system.jsx`:
- Background `#0a0f0d` (near-black, faint green tint)
- Surface `#0f1614`
- Chemistry primary `#1f8a6f` (emerald), light `#6fd9b8`, deep fill `#0d3a2f`
- Universal accent `#f0a830` (amber) — reserved for the single most important thing on screen
- Subjects: bio `#3a8ad9`, phys `#e07a3a`, math `#9b6dd9`
- Ink: `#e8efe9` / `#8a9590` / `#4a554f` (primary/secondary/tertiary)

**Type scale** (1080p frame):
- Hero — 220px, weight 800, letter-spacing -0.04em
- Title — 96px, weight 700, letter-spacing -0.03em
- Section — 56px, weight 700
- Body — 28px (never below 24)
- Mono — 22px, letter-spacing 0.15em — used for chrome, labels, units, timecodes

**Fonts**: `Inter Tight` for display, `JetBrains Mono` for mono, `Caveat` / `Kalam` for handwritten margin annotations.

## The six motion principles

Every motion decision must satisfy these. They are non-negotiable.

1. **Reveal, don't announce.** Type slides up 16px and fades in over 400ms with `cubic-bezier(.2,.7,.3,1)`. Stagger between siblings: 60ms for words, 120ms for blocks.
2. **Always anchor with a frame.** Top-row chrome (subject + module) and bottom-row chrome (syllabus dot + episode count) appear within the first 400ms and persist. Students never lose context.
3. **One accent per beat.** Amber is reserved for the single most important word, equation term, or callout. Never two ambers competing.
4. **Diagrams draw, they don't cut.** SVG strokes use `stroke-dashoffset` animation. Leader lines, arrows, brackets all draw from origin to target — never appear instantly.
5. **Hold long enough to read.** Minimum 2.5s on screen for any 28px body line. Equations get 4s minimum. Recap items get 3s each.
6. **Cuts are punctuation.** Hard cut on beat changes (hook → title, process step → next). Cross-dissolves only inside continuous explanations.
7. **No dead frames.** Vox-grade explainer journalism never holds a still frame for more than ~0.5s without something moving — a number ticking, a label sliding in, a chart bar building. If a scene has a 1-second flat moment, it reads as "the video stalled." Always have *something* on a sub-second cycle: a slow ambient float, a chart cursor, a doodle stroke completing. Apply only after primary reveals have landed; never compete with the main teaching moment.

Implementation rule: use [src/animations/AmbientMotion.tsx](../src/animations/AmbientMotion.tsx) for hold-state life. `AmbientGlow`, `AmbientBreathe`, and `AmbientBorderPulse` are deliberately low-contrast; if the student notices them before the teaching object, they are too strong. Use them on static hold-heavy regions only, not as decoration.

Readable text must not breathe, drift, vibrate, or scale during a hold. Text may move only while revealing or exiting. After it lands, it stays locked. Ambient motion belongs on glows, borders, halos, and non-text visual containers; if a container includes readable labels, keep drift under 2px and slower than 8s per cycle.

Large readable text should not reveal word-by-word. On big hook, concept, definition, quick-check, and summary copy, use one stable block/phrase reveal, then keep the glyphs fixed. Word-by-word motion at 1080p can produce shimmer/vibration in video playback, especially after compression. Save per-word reveals for tiny labels only, and only when the label is not the main reading task.

## The doodle layer (the "made, not generated" move)

This is the highest-leverage visual asset for HSC explainers. The seeded scribble primitives in `doodles.jsx` (10 of them) make videos feel hand-drawn rather than slideshow-y. Use sparingly:

> **Rule: doodles must focus attention or prevent a mistake.** Decorative scribbles dilute the technique. (See `production-memory.md` "Mistakes To Avoid".)

Vocabulary: `ScribbleCircle`, `ScribbleUnderline`, `ScribbleArrow`, `ScribbleBox`, `ScribbleMark` (✓/✗), `ScribbleBracket`, `ScribbleHatch`, `ScribbleHighlight`, `ScribbleStar`, `ScribbleAnnotation`. All seeded — same seed = same doodle every render (Remotion-stable).

When porting to Remotion: animate via `useCurrentFrame()` + `interpolate(frame, [start, end], [length, 0])` on `strokeDashoffset`.

## Curation philosophy — features are vocabulary, not weapons

**More features ≠ better videos.** Atomi/Kurzgesagt look polished because they have a *small* vocabulary used *consistently*. A bigger catalog means more decisions to make, more inconsistency, more "feature soup". Curation > accumulation.

Two rules to keep this honest:

- **Every component must earn its keep.** If a slide component or animation primitive hasn't made a real lesson better, delete it. No emotional attachment to code.
- **Write rules, not just code.** Every "use X for Y, never Z" decision goes in this doc or `gold-standard-video-standard.md`. The rules are a more durable asset than the components themselves.

## How to find features worth adding

In rough order of value:

1. **Reference videos — specifically.** Watch with a notepad. Log moves with timestamps and concrete specs ("Atomi 3:42 — three bullet points slide in left-to-right, each with a small scribble check 0.3s after text lands"). Channels worth mining: Atomi, Antidote, Kurzgesagt, 3Blue1Brown, Veritasium, MinutePhysics, Domain of Science, Up and Atom, AsapSCIENCE.
2. **Content-driven gaps.** When writing a lesson, note where existing slides can't carry the idea ("I need to show units cancelling", "I need a misconception getting crossed out"). These are real, grounded feature requests.
3. **Post-render review.** Watch finished videos for dead spots — places where attention drifts or visuals feel generic. Each is a feature gap.
4. **Prompted brainstorming with raw material.** Generic "give me ideas" produces slop. Give Claude a script + reference links + screenshot of a flat slide and ask for 3 specific moves.
5. **Online catalogues (lower value).** Remotion gallery, motion design twitter, awesome-remotion. Mostly for inspiration, not direct copying — most isn't tuned for educational content.

## The recommended feature workflow

```
For each candidate feature:

  1. Watch one reference video → log 3-5 moves you can't currently do
  2. Build ONE missing primitive
  3. Use it in ONE real lesson (not a demo file)
  4. Watch the finished render — does it feel better?
     → if yes: keep, document the rule for when to use it here
     → if no:  delete, no shame
  5. Repeat
```

Avoid building "for the catalog". Build for a real lesson, then promote.

## What lives where

- **Visual reference (specs, not runtime):** `docs/design-canvas-reference/` — `scenes.jsx`, `scenes-v2.jsx`, `animated-scenes*.jsx`, `system.jsx`, `doodles.jsx`, `animations.jsx`, `design-canvas.jsx`, `HSC Video Template System.html`. Open the HTML in a browser to pan/zoom the canvas.
- **Runtime code:** `src/` — Remotion components that actually render to MP4.
- **Tokens:** [src/styles/tokens.ts](../src/styles/tokens.ts) — exports `TOK`, `FONT_DISPLAY`, `FONT_MONO`, `FONT_HAND`, `TYPE`, `MOTION`, `subjectColor()`.
- **Doodle library:** [src/animations/DoodlePrimitives.tsx](../src/animations/DoodlePrimitives.tsx) — 10 scribble primitives (`ScribbleCircle`, `ScribbleUnderline`, `ScribbleArrow`, `ScribbleBox`, `ScribbleMark`, `ScribbleBracket`, `ScribbleHatch`, `ScribbleHighlight`, `ScribbleStar`, `ScribbleAnnotation`) plus `MarginNote` (P0.5) and the legacy `DoodleArrow` / `MistakeTag` / `UnitCancel`. All seeded; same seed = same path every render.
- **Reveal primitive:** [src/animations/FadeUp.tsx](../src/animations/FadeUp.tsx) — `<FadeUp>` (block reveal), `<FadeUpStagger>` (word-by-word), `useFrames()` (seconds→frames helper).
- **Attention primitives:** [src/animations/AttentionPrimitives.tsx](../src/animations/AttentionPrimitives.tsx) — `<LeaderLineCallout>` (P0.2), `<HighlightWipe>` (P0.3), `<Spotlight>`, `<UnderlineDraw>`, `<Callout>`, `<Checkmark>`.
- **Motion primitives:** [src/animations/MotionPrimitives.tsx](../src/animations/MotionPrimitives.tsx) — `<NumberTicker>` (P0.4), `OdometerText`, `TypewriterText`, `WordReveal`, `KenBurns`, `CameraFrame`, etc.
- **Diagram primitives:** [src/animations/DiagramPrimitives.tsx](../src/animations/DiagramPrimitives.tsx) — `<DataChart>` (P0.7), `DrawPath`, `SpringNumber`, `PulseBeacon`, `HighlightBox`, `PhaseReveal`, etc.
- **Ambient motion primitive:** [src/animations/AmbientMotion.tsx](../src/animations/AmbientMotion.tsx) — `AmbientGlow`, `AmbientBreathe`, `AmbientBorderPulse` for subtle hold-state motion after primary reveals.
- **Slide shell:** [src/slides/shared/SlideFrame.tsx](../src/slides/shared/SlideFrame.tsx) (dark stage with optional vignette) and [src/slides/shared/SlideChrome.tsx](../src/slides/shared/SlideChrome.tsx) (top/bottom chrome rows). New gold-standard slides use these instead of the legacy `SlideLayout`.
- **Slide components:** `src/slides/*.tsx` — all core lesson slides are now on the new dark system. Keep any future slide on `SlideFrame` / `SlideChrome`; do not reintroduce legacy `SlideLayout` unless deliberately building a compatibility view.
- **Slide shell:** [src/slides/shared/SlideFrame.tsx](../src/slides/shared/SlideFrame.tsx) (dark stage with optional vignette) and [src/slides/shared/SlideChrome.tsx](../src/slides/shared/SlideChrome.tsx) (top/bottom chrome rows). New gold-standard slides use these instead of the legacy `SlideLayout`.

## Companion docs

- `docs/gold-standard-video-standard.md` — the rubric for what "good" means at the lesson level (teaching quality, structure, score targets). Read alongside this handbook.
- `docs/lesson-reference-style.md` — script and content rules.
- `docs/production-memory.md` — accumulated learnings; update after every shipped lesson.
- `docs/feature-wishlist.md` — the prioritised feature backlog driven by reference-video study.

## Implementation gotchas (learnt during builds)

### `<FadeUp>` and absolute positioning

`FadeUp` applies `transform: translateY(...)` to its wrapper, which makes that wrapper a CSS containing block for absolutely-positioned descendants. Concrete consequence:

**Wrong** — `bottom: 150` resolves to "150px above a zero-height box" → renders off-screen above:
```tsx
<FadeUp delay={140}>
  <div style={{position: 'absolute', bottom: 150, left: 64}}>callout</div>
</FadeUp>
```

**Right** — keep absolute positioning on the outer wrapper, put `FadeUp` inside:
```tsx
<div style={{position: 'absolute', bottom: 150, left: 64}}>
  <FadeUp delay={140}>
    <div>callout</div>
  </FadeUp>
</div>
```

This pattern works for both `top` and `bottom` — the inner content flows normally, only the FadeUp wraps the children with animation. Same fix applies if using `position: fixed` children.

### Legacy diagrams during slide migration

Existing `DiagramRenderer` diagrams can be reused temporarily during Phase 3, but they must sit inside the new dark visual stage rather than controlling the slide shell. The acceptable migration pattern is:

- `SlideFrame` + `SlideChrome` own the page background and chrome.
- The old diagram renders inside a bounded dark panel with a subtle border/glow.
- If a diagram leaks a large white panel or old light-theme card, do not patch around it in the slide; re-skin that specific diagram component next.

This keeps the slide migration moving while preventing light-theme panels from breaking visual coherence.

### Hook / question scenes

Hook scenes should leave one clear thought in the student's head before the lesson begins. Use the Claude canvas hook pattern: a large question, one small symbolic visual, and one handwritten annotation if it clarifies the visual.

Rules:
- Long hook questions own the lower two-thirds of the frame. Move the visual into the upper-right, shrink it if needed, and never let it crowd or sit behind the question text.
- If the body text is longer than ~100 characters, reduce hero type before wrapping into four lines. A three-line hook at 70-76px usually reads better than a crowded 88px block.
- The atom/visual is secondary. It can pulse slowly for life, but it must not compete with the question.
- Use annotation only when it names the visual (`↑ one atom`, `↑ a counting word`). If the annotation line crosses major text, move the visual, not the text.

### Definition / key-term scenes

Definition scenes use the Claude canvas `SceneKeyTermDoodled` pattern: a giant term/phrase first, then the plain-English definition and exactly one recall/emphasis move.

Rules:
- Circle the smallest phrase the student should store as a unit. For single-word terms, circle the word; for set phrases like `One mole`, circle the whole phrase so the mark teaches the chunk, not just the noun.
- Scribble circles must sit outside the glyphs. Give the SVG generous vertical padding and move neighbouring formula/subheading rows down if needed; never let the circle stroke run through the word or cross the next line.
- Use handwritten annotation only when it names a real symbol or reading shortcut (`↑ symbol: mol`). If there is no useful annotation, leave it out.
- Body text sits below a single rule line. Highlight exactly one numeric definition or key phrase.
- Place callouts above the caption bar; don't wrap absolutely positioned callouts directly in `FadeUp` because the transform creates the wrong containing block.
- If a definition scene includes a table diagram, render it as a compact right-side dark translator table. Do not ignore structured diagram data just because the hero definition already reads well.

### Formula/equation scenes

Formula slides follow the Claude canvas `FormulaAnimated` pattern: the equation is the hero object, not a supporting diagram. Terms enter left-to-right with mono type, each important variable gets a thin vertical leader and a compact label underneath, and the support layer lands only after the equation is readable.

Rules:
- Use amber for the single active/safety term. In the mole lesson, `Nₐ` owns amber because Avogadro's number is the new constant.
- Put units and safety checks below the formula, not inside the formula line. The equation should stay visually clean.
- Do not reuse old light-theme `UnitCancel` panels inside new formula slides. If unit cancellation is needed before the shared component is re-themed, create an inline dark safety-check block for that slide.

### Worked-example scenes

Worked examples follow the Claude canvas `WorkedExampleAnimated` pattern: the working is the visual. Avoid decorative cards, particle effects, and celebration motion; Year 11 students need a board they can copy.

Rules:
- Top region: problem prompt + one coach note only.
- Middle region: line-by-line board. Keep labels in mono on the left (`KNOWN`, `TARGET`, `FORMULA`, `SUBSTITUTE`, `ANSWER`) and the mathematical working in larger mono on the right.
- Final answer owns amber; intermediate terms use emerald for the active variable and amber only for the new/safety-relevant term.
- Unit cancellation belongs inside the final answer row so it reads as proof, not as a separate unrelated panel. It must clear the caption bar.

### Misconception / exam-trap scenes

Misconception scenes are mistake-prevention moments, not generic explanation slides. Use a clear left/right board:

- Left card = mistake. Use warm warning colour (`TOK.phys`) and a drawn cross.
- Right card = fix. Use chemistry emerald and a drawn check.
- The mistake tag can be handwritten (`FONT_HAND`) but must name the risk, not decorate the frame.
- The final callout should be a decision rule the student can apply in the next question. Underline it if it is the one thing to remember.
- Do not use a legacy diagram when the data can be expressed as mistake-vs-fix cards; the board is clearer and more on-brand.

### Quick-check / active-recall scenes

Quick checks are retrieval moments, not mini-games. The scene should make the student stop, try the question, then compare against a clean answer board.

Rules:
- Keep the question large and visible during both the pause and answer phases. Students should never lose the problem while checking the working.
- Use handwriting only for the pause prompt (`pause!`, `take the pause`) so it feels human. Do not decorate the answer board with extra doodles.
- Delay the worked answer long enough that the pause is real. In Lesson 1 the answer board starts 360 frames into a 960-frame scene.
- The answer board should be copyable: mono labels on the left, mathematical working on the right, final answer in amber with one underline + one check mark.
- Caption bar and bottom chrome must stay clear of the final answer. If the answer has many steps, reduce vertical gaps before shrinking the mathematical text.

### Summary / recap scenes

Summary scenes are memory anchors. They should leave the student with a short exam checklist plus one decision rule, not a decorative end card.

Rules:
- Use the Claude canvas recap pattern: mono eyebrow, large lesson title, numbered takeaways, and a right-side final card.
- Keep takeaways compact. If the recap has five items, tighten row spacing before reducing the final card; the decision rule is the most valuable part of the scene.
- Highlight formula symbols consistently (`N`, `n`, `Nₐ`, `mol`) but do not add new doodles to each row. Doodle energy belongs on the final rule only.
- The final prompt owns amber. Give it one underline and one check mark, then stop.
- Underlines must sit below the text baseline, not through the glyphs. For large italic final prompts, start with ~40-50px of bottom offset and render-check the final hold frame.
- The caption bar must never cover the last takeaway. Re-render the final hold frame whenever recap row count changes.

### Title scenes

Title scenes establish identity, not decoration. Use the Claude canvas title-card pattern: one giant lesson title, one module/context line, one underline accent, and subtle subject-specific background math.

Rules:
- The first title line stays ink; the final title word/phrase can take the subject colour. This gives every lesson a branded opening without overusing amber.
- Amber appears only as the drawn underline, not in the title itself.
- Background formulas/atoms must stay low contrast. If the student reads the backdrop before the title, it is too bright.
- The title must clear the caption bar at full hold. Render both an early build frame and a final hold frame.

### P0 animation vocabulary — usage rules

These are the new primitives built in Phase 2. Each must earn its keep; use them only when the lesson content justifies the motion.

**`<LeaderLineCallout>` (P0.2)** — `src/animations/AttentionPrimitives.tsx`
- Use when labelling parts of a diagram simultaneously (atom shells, equation terms, anatomy).
- Line draws first (200ms), label fades up 150ms after line completes. Stagger multiple instances 120ms apart.
- Colour should match the thing being labelled (chem1 for oxygen, chem2 for hydrogen, etc.), not default to amber.
- Do not use for text that is already adjacent — leader lines are for distance.

**`<HighlightWipe>` (P0.3)** — `src/animations/AttentionPrimitives.tsx`
- Use for *recall* emphasis on a previously-introduced phrase (e.g. "remember **protons**?").
- Animates `clip-path` inset left-to-right over 400ms. The element underneath stays put.
- Default: amber at 22% opacity. Increase opacity only if the background is very dark.
- Do not use on first reveal — that is `FadeUp`'s job. Reserve `HighlightWipe` for re-focusing attention.

**`<NumberTicker>` (P0.4)** — `src/animations/MotionPrimitives.tsx`
- Use when a number needs to feel visceral — Avogadro's constant, atomic mass, reaction rate.
- Default duration: 800ms (`durationFrames={24}` at 30fps) with `easeOutCubic`.
- Scientific notation: pass the full string as `to` (e.g. `"6.022 × 10²³"`). The mantissa counts up, the exponent fades up at 75% progress.
- Always enable `tabularNums` (default true) to prevent width thrash during the count.
- Do not ticker-count numbers that are not the teaching focus — it draws attention whether you want it or not.

**`<MarginNote>` (P0.5)** — `src/animations/DoodlePrimitives.tsx`
- Use for handwritten marginalia on a main diagram (the Atomi signature move).
- Text: Caveat 48–56px, rotated -4° to -8°, fades up over 400ms.
- Arrow: `ScribbleArrow` draws 200ms after text starts, from the note's nearest edge to the diagram point.
- One note per diagram. Two notes only if they label completely separate regions.
- Do not use margin notes on body text or callouts — they belong on visual diagrams only.

**`<DataChart>` (P0.7)** — `src/animations/DiagramPrimitives.tsx`
- Use for any quantitative claim that benefits from visual comparison (atomic masses, scale comparisons, periodic trends).
- Axes draw first (300ms), then bars/lines build sequentially. Bar stagger: 120ms.
- Default size 520×320px; scale via `width`/`height` props if the visual stage is larger.
- Bar colour defaults to amber; override per-bar with `color` on individual data points.
- Line charts: path strokes left-to-right over 800ms, points fade up after path completes.
- Do not use for tables of symbols — charts are for *comparison*, not lookup.

## Update rule

When you (Claude) make a non-obvious design decision in any session — adding a new motion primitive, choosing a timing, picking a colour, killing a feature — append a short note to the relevant section here. The handbook is the project's design memory; if it's not written down, the next session won't know.
