# Gold Standard Lesson Reference

This doc is the concrete pattern to follow when generating new HSCScience lessons. It is based on **Lesson 2: Molar Mass** (`Chemistry-Y11-M2-L2`), the first fully production-ready lesson in the pipeline.

For the general quality standard, see [gold-standard-video-standard.md](gold-standard-video-standard.md). For visual tokens and motion rules, see [visual-design-handbook.md](visual-design-handbook.md). This doc exists so future Claude sessions can pattern-match to a specific, working example instead of reverse-engineering the codebase.

---

## 1. The Lesson JSON structure

Root fields every lesson must have:

```json
{
  "title": "Molar Mass",
  "subtitle": "Connecting moles to mass",
  "subject": "Chemistry",
  "yearLevel": "Year 11",
  "module": "Module 2",
  "lesson": "Lesson 2",
  "syllabusVersion": "Chemistry Stage 6 Syllabus (2017)",
  "syllabusModule": "Module 2: Introduction to Quantitative Chemistry",
  "syllabusDotPoints": [
    "Calculate molar mass from chemical formulae",
    "Use molar mass to connect mass and amount of substance"
  ],
  "lessonIntent": "Students can calculate molar mass and use it to move between grams and moles.",
  "examSkill": "Identify molar mass as the bridge between mass and moles in quantitative chemistry questions.",
  "productionRole": "production",
  "fps": 30,
  "width": 1920,
  "height": 1080,
  "scenes": []
}
```

**Rules:**
- `productionRole` is either `"production"` (normal library lesson) or `"reference"` (long-form benchmark).
- `fps`, `width`, `height` are always `30`, `1920`, `1080`.
- `syllabusDotPoints` must map to actual NESA dot points.
- `lessonIntent` is a student-can-do statement, not a topic description.

---

## 2. Scene sequence and durations

Lesson 2 has **11 scenes** in this exact order. Every production lesson should follow this sequence unless there is a strong pedagogical reason to deviate.

| # | Scene type | ID | Duration (frames) | Duration (seconds) | Purpose |
|---|---|---|---|---|---|
| 1 | `title` | `title` | 180 | 6.0 | Anchor the student: subject, module, topic |
| 2 | `hook` | `hook` | 284 | 9.5 | Open with a concrete problem, not a heading |
| 3 | `marginalia` | `marginalia-molar-mass` | 210 | 7.0 | Side-note annotation on the core concept |
| 4 | `concept` | `concept` | 240 | 8.0 | Explain the one idea with a diagram |
| 5 | `definition` | `definition` | 270 | 9.0 | Lock in the key term and notation |
| 6 | `labFootage` | `lab-footage` | 240 | 8.0 | Connect theory to lab apparatus |
| 7 | `formula` | `formula` | 240 | 8.0 | Present the equation with unit safety |
| 8 | `workedExample` | `worked-example` | 420 | 14.0 | Step-by-step calculation board |
| 9 | `misconception` | `misconception` | 324 | 10.8 | Prevent the most common exam trap |
| 10 | `quickCheck` | `quick-check` | 390 | 13.0 | Active recall with pause + reveal |
| 11 | `summary` | `summary` | 351 | 11.7 | Decision rule + recap checklist |

**Total: ~105.6 seconds (1m 46s) of content** after accounting for 24-frame transitions between scenes.

### Duration rules that work

- `title`: always 180 frames (6s). Short anchor.
- `hook`: 240–300 frames (8–10s). Enough time for problem + diagram + callout.
- `concept` / `definition` / `formula`: 240–300 frames (8–10s).
- `workedExample`: minimum 360 frames (12s), often 420–480 (14–16s). Steps need time to breathe.
- `misconception`: 300–360 frames (10–12s). Wrong instinct → why it fails → corrected rule.
- `quickCheck`: 360–420 frames (12–14s). Question → pause prompt → answer reveal.
- `summary`: 300–360 frames (10–12s). Four takeaways + decision-rule card.

**Never go below these minimums:**
- Body text hold: 75 frames (2.5s)
- Equation hold: 120 frames (4s)
- Recap item hold: 90 frames (3s)

---

## 3. What each scene type looks like

### `title`
- Dark cinematic opening.
- Giant title split with amber drawn underline.
- Module context line.
- No diagram, no body text.
- Caption states the lesson in one sentence.

### `hook`
- **Left:** eyebrow (mono amber) → heading (large, bold) → horizontal rule → body (32px, one paragraph) → callout (amber italic arrow).
- **Right:** visual stage with diagram.
- In Lesson 2: `balance` diagram showing 1 mole ↔ 44 g.
- Callout is the student insight: *"Counting is useful when we can weigh it."*

### `marginalia`
- Central concept card with subtle border and glow.
- Heading + body inside the card.
- **Handwritten margin notes** on the right with `ScribbleArrow` pointing to the card.
- Notes appear sequentially (delay 60, 90, 120 frames).
- Optional callout below the card.

### `concept`
- **Left:** eyebrow → heading → rule → body → optional secondary → callout.
- **Right:** visual stage with diagram or image.
- In Lesson 2: `barChart` with He/C/CO₂ masses + `MarginNote` ("huge!") pointing to CO₂.

### `definition`
- **Hero word** at top (e.g. "One mole." at ~200px).
- `ScribbleCircle` draws around the key term.
- Handwritten annotation beside hero (e.g. "↑ symbol: mol").
- Sub-heading in chem2 color (e.g. "= 6.022 × 10²³ particles").
- Body with `HighlightWipe` behind key phrase.
- Optional unit table on right.
- Callout at bottom.

### `labFootage`
- **Left:** heading + body text.
- **Right:** large visual stage with lab image (`beaker`, `flask`, `scale`, etc.).
- **Corner annotations** with arrows pointing to the image (top-left, top-right, bottom-left, bottom-right).

### `formula`
- Heading + equation (mono, staggered reveal).
- Labelled term leaders.
- Supporting note cards.
- `unitCancel` panel showing unit safety.
- Amber highlight on the key term.

### `workedExample`
- Problem prompt at top.
- `coachNote` in amber italic (e.g. "Target: mass. So use m = n × M.").
- Line-by-line teacher board with steps.
- Final amber answer.
- Drawn check mark.
- Inline `unitCancel` verification.

### `misconception`
- Mistake-vs-fix board with two dark cards.
- Handwritten mistake stamp.
- `mistakeTag` label (e.g. "Different quantities").
- Doodle cross on wrong, check on right.
- Amber underlined decision-rule callout.

### `quickCheck`
- Question-first layout.
- Handwritten `pausePrompt` (e.g. "Pause: find M first, then m.").
- Delayed answer board (appears after ~180 frames).
- Final amber answer.
- Drawn check mark.

### `summary`
- Compact HSC exam checklist.
- 4–5 takeaways in a vertical list.
- Token-coloured formula terms.
- **Decision-rule card** at bottom (e.g. "Before calculating: do I need M or m?").

---

## 4. Voiceover rules that keep timing clean

Lesson 2 validates with **0 tight scenes**. Here's how:

1. **Write voiceover text before setting duration.** Count words. Target: ≤145 wpm with 92% scene budget.
2. **Rule of thumb:** scene seconds × 2.2 ≈ safe word count.
   - 6s scene → ~13 words max
   - 10s scene → ~22 words max
   - 14s scene → ~31 words max
3. **Title scene:** always keep voiceover under 2s (6s scene, 2s speech, 4s hold).
4. **Worked examples:** voiceover should state the method, not read every step aloud. The steps are visual.
5. **Quick check:** voiceover asks the question + gives the setup. The answer steps are silent/visual.
6. **After writing JSON:** run `npm run voiceover:timing -- src/data/your-lesson.json`.
   - If tight: cut words first, extend duration second.
   - If still tight after cutting: extend with `npm run voiceover:fix-timing -- src/data/your-lesson.json --mode=extend`.

---

## 5. Common mistakes when generating new lesson JSON

**Mistake 1: Starting with a syllabus heading instead of a student problem.**
- ❌ `"heading": "Molar Mass"`
- ✅ `"heading": "Particles have mass"`

**Mistake 2: Worked example with no coach note.**
- Every `workedExample` needs `coachNote` so it feels taught, not displayed.

**Mistake 3: Missing `unitCancel` in calculation lessons.**
- If units prove the method, include `unitCancel`.

**Mistake 4: Quick check with no `pausePrompt`.**
- The pause prompt is what makes it active recall. Without it, it's just another worked example.

**Mistake 5: Summary ending with encouragement instead of a decision rule.**
- ❌ `"finalPrompt": "You can do this!"`
- ✅ `"finalPrompt": "Before calculating: do I need M or m?"`

**Mistake 6: Voiceover that reads every visual element aloud.**
- Voiceover explains the concept. Captions label the scene. Visuals show the steps. Don't make all three say the same thing.

**Mistake 7: Scenes that teach more than one idea.**
- One scene = one idea. If you find yourself writing "and also..." in the body, split it into two scenes.

**Mistake 8: Decorative diagrams.**
- Every diagram must earn its keep. If removing it doesn't hurt understanding, remove it.

---

## 6. The generation workflow (for Claude)

When generating a new lesson, follow this exact sequence:

1. **Confirm the syllabus dot point** and the one idea the lesson teaches.
2. **Write the lesson JSON** following the scene sequence above.
3. **Run validation:** `npm run validate:lessons`
4. **Fix timing:** `npm run voiceover:timing -- src/data/your-lesson.json`
5. **Export manifest:** `npm run voiceover:manifest -- src/data/your-lesson.json`
6. **Generate ElevenLabs audio** using the manifest.
7. **Sync audio:** `npm run voiceover:sync -- src/data/your-lesson.json`
8. **Render poster:** `npm run render:poster -- src/data/your-lesson.json`
9. **Run full checks:** `npm run check:all && npm run gate:production`
10. **Render full video:** `npx remotion render src/index.ts <composition-id> out/<composition-id>.mp4`

---

## 7. Where to find the code

- Scene types: `src/lesson/types.ts`
- Slide components: `src/slides/*.tsx`
- Tokens/colours: `src/styles/tokens.ts`
- Lesson 2 JSON: `src/data/chemistry-y11-m2-l2-molar-mass.json`
- Validators: `scripts/validate-lesson.mjs`
- Voiceover timing: `scripts/report-voiceover-timing.mjs`
