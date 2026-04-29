# Lesson Video Reference Style

Use `src/data/chemistry-y11-m2-l1-mole-concept.json` as the reference lesson for future generated videos. The goal is not just to present content; the video should feel like a clear teacher walking a student through a problem, with visible thinking, checks, and mistake prevention.

## Core Teaching Pattern

Every lesson should follow this sequence unless the topic strongly requires a different order:

1. Start with a concrete problem or tension.
2. Explain the key concept as the solution to that problem.
3. Define terms only after the learner has a reason to care.
4. Build formulas visually instead of dropping them on screen fully formed.
5. Work examples using a consistent setup: known, find, formula, substitute, answer.
6. Include one active-recall quick check before the summary.
7. End with a decision rule the learner can apply to the next question.

## Script Rules

- Open with the learner's problem, not a syllabus heading.
- Keep voiceover conversational and direct.
- Each scene should answer one question.
- Use captions as compact reinforcement, not a transcript.
- Avoid long lists of facts unless they are being chunked visually.
- Put common mistakes directly on screen when they matter.

## Engagement Fields

Use these optional JSON fields to make the video feel actively taught:

### `callout`

Use on `hook`, `concept`, `definition`, `formula`, and `misconception` scenes.

Good uses:

- Name the key insight: `"The mole is the shortcut."`
- Mark the purpose of a scene: `"This is the problem the mole solves."`
- Give a decision rule: `"Ask first: am I finding N or n?"`

Avoid generic praise or filler. The callout should teach.

### `coachNote`

Use on `workedExample` scenes. It should tell the learner what choice drives the method.

Examples:

- `"Target: N. So multiply by Nₐ."`
- `"Target: n. So divide by Nₐ."`
- `"Known mass first, so convert grams to moles."`

### `pausePrompt`

Use on `quickCheck` scenes before the answer appears. It should make the learner decide something, not just tell them to pause.

Examples:

- `"Pause: are you finding N or n?"`
- `"Pause: which formula rearrangement fits?"`
- `"Pause: what unit should the answer have?"`

### `unitCancel`

Use whenever unit cancellation is a key source of understanding or errors.

Shape:

```json
"unitCancel": {
  "left": "mol",
  "right": "mol⁻¹",
  "result": "answer is atoms, not mol"
}
```

Use it on formula and worked-example scenes where the units prove the setup is correct.

### `mistakeTag`

Use on misconception scenes. This is a short, high-emphasis label for a common trap.

Examples:

- `"Do not swap these"`
- `"Exam marks live here"`
- `"Wrong unit"`
- `"Common calculator slip"`

## Visual Style

- Prefer clean diagrams plus teacher-style annotations.
- Use doodles to focus attention: arrows, circles, unit cancellation, mistake tags.
- Do not use full cartoon characters by default. Use short student-thinking prompts instead.
- Keep the interface mature enough for Year 11 students.
- Each visual should either explain, compare, calculate, or prevent a mistake.

## Scene Timing

Lesson 1 is intentionally allowed to be longer because it is the reference template. Future lessons can be shorter while keeping the same pattern.

Recommended default timing:

- Title: 5-7 seconds.
- Hook: 20-30 seconds.
- Concept scenes: 25-40 seconds.
- Definition scenes: 20-30 seconds.
- Formula scenes: 25-35 seconds.
- Worked examples: 35-45 seconds.
- Quick check: 25-35 seconds.
- Summary: 20-30 seconds.

Longer scenes are acceptable when the animation keeps building and the voiceover is still purposeful.

## Required Quality Check

Before accepting a generated lesson:

1. Confirm the hook creates a real reason to learn the topic.
2. Confirm every worked example has a target decision before the calculation.
3. Confirm units are shown wherever units affect the method.
4. Confirm at least one common misconception is explicitly addressed.
5. Confirm the quick check asks the learner to make a decision before reveal.
6. Render stills from the hook, formula, worked example, misconception, quick check, and summary.
7. Run `npm run check:all`.
8. If checking only one file, run `node scripts/validate-lesson.mjs src/data/your-lesson.json`.

Use the still helper when checking a known composition:

```bash
npm run render:stills -- Chemistry-Y11-M2-L1 src/data/chemistry-y11-m2-l1-mole-concept.json
```

For the usual new-lesson workflow, use the one-command preparation script:

```bash
npm run prepare:lesson -- src/data/your-lesson.json
```

This also updates the production audit in `out/audits/production-audit.md`.

The Remotion composition `ReferenceStyleGallery` shows the reusable visual patterns in one place.

For HSCScience site integration and voiceover planning, see `docs/site-video-integration-plan.md`.
For the competitor benchmark and 10/10 target, see `docs/gold-standard-video-standard.md`.
For reusable production lessons, see `docs/production-memory.md`.
For scaling the system across HSC Chemistry, see `docs/hsc-chemistry-production-plan.md`.

Useful exports:

```bash
npm run audit:production
npm run dashboard:production
npm run gate:production
npm run voiceover:timing
npm run voiceover:manifest -- src/data/your-lesson.json
npm run export:site-manifest
```
