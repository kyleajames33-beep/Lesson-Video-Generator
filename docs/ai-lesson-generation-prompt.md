# AI Lesson Generation Prompt

Use this prompt when asking an AI to generate a new lesson JSON for this Remotion project.

## Prompt

Generate a lesson JSON for `lesson-video-generator` using `src/data/chemistry-y11-m2-l1-mole-concept.json` as the reference style.

Follow these rules:

- Use the lesson structure and teaching style from `docs/lesson-reference-style.md`.
- Use the 10/10 target from `docs/gold-standard-video-standard.md`.
- **Hit every rhetorical piece in `docs/gold-standard-script.md` §1, score ≥85 on the rubric in §5, and pass the pre-flight checklist in §6.** Do not output a lesson that fails any pre-flight item.
- Reuse the patterns and avoid the known mistakes in `docs/production-memory.md`.
- Stay aligned to the syllabus policy in `docs/hsc-chemistry-production-plan.md`.
- Start with a concrete problem or question, not a definition.
- Keep the lesson clear, visual, and curriculum-specific.
- Use mature Year 11 language: conversational, precise, not childish.
- Use `callout` fields for student-thinking moments.
- Use `coachNote` on every worked example.
- Use `pausePrompt` on every quick check.
- Use `unitCancel` whenever units prove the calculation setup.
- Use `mistakeTag` on misconception scenes.
- Keep captions short and useful.
- Make each voiceover scene explain exactly what appears on screen.
- Prefer diagrams already supported by `src/lesson/types.ts`.
- Do not invent unsupported scene types or diagram types.
- Output valid JSON only.

## Supported Scene Types

- `title`
- `hook`
- `concept`
- `definition`
- `formula`
- `workedExample`
- `misconception`
- `quickCheck`
- `summary`

## Supported Diagram Types

- `bridge`
- `dozenMole`
- `massComparison`
- `balance`
- `barChart`
- `venn`
- `flow`
- `orbit`
- `table`
- `beforeAfter`
- `explode`

## Reference Scene Skeleton

```json
{
  "id": "hook",
  "type": "hook",
  "heading": "A clear concept heading",
  "body": "Start with the learner's problem or the surprising idea.",
  "callout": "The key insight in one short sentence.",
  "diagram": {"type": "bridge"},
  "durationInFrames": 780,
  "caption": "A compact reinforcement sentence.",
  "voiceover": {
    "text": "Conversational explanation that matches the on-screen build."
  }
}
```

## Worked Example Skeleton

```json
{
  "id": "worked-example-1",
  "type": "workedExample",
  "heading": "Finding the target quantity",
  "question": "A calculation question with enough context.",
  "coachNote": "Target: the required quantity. So choose the method.",
  "unitCancel": {
    "left": "unit 1",
    "right": "unit 2",
    "result": "expected answer unit"
  },
  "steps": [
    "Known: ...",
    "Find: ...",
    "Formula: ...",
    "Substitute: ...",
    "Answer: ..."
  ],
  "durationInFrames": 1200,
  "caption": "The main calculation result.",
  "voiceover": {
    "text": "Explain the target, formula choice, substitution, answer, and unit check."
  }
}
```

## Quick Check Skeleton

```json
{
  "id": "quick-check",
  "type": "quickCheck",
  "heading": "Quick check",
  "question": "A short transfer question.",
  "pausePrompt": "Pause: what decision should the learner make?",
  "answerSteps": [
    "Known: ...",
    "Formula/setup: ...",
    "Answer: ..."
  ],
  "durationInFrames": 900,
  "caption": "The final answer and unit.",
  "voiceover": {
    "text": "Ask the learner to pause, then reveal the working."
  }
}
```

## Final Check

After generating the JSON, check:

- It parses as JSON.
- It uses only supported scene and diagram types.
- Every non-title scene has a caption and voiceover.
- Worked examples include `coachNote`.
- Quick checks include `pausePrompt`.
- Misconceptions include `mistakeTag` when there is a common trap.
- The summary includes a `finalPrompt` decision rule.

Then run:

```bash
npm run prepare:lesson -- path/to/generated-lesson.json
npm run check:all
node scripts/validate-lesson.mjs path/to/generated-lesson.json
npm run score:lesson -- path/to/generated-lesson.json
```

`score:lesson` must report ≥85 before the lesson is rendered. Below that, fix
the findings the scorer prints (or document an unfixable item in
`productionNotes`) and re-run.
