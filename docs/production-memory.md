# Production Memory

This file records what the system learns while producing HSCScience videos. Update it when a lesson reveals a repeatable improvement, common failure, or reusable pattern.

## Best Ideas To Keep

- Use scene-level voiceover files with text hashes so changed scenes can be regenerated without redoing the full narration.
- Keep captions short; use voiceover for the full explanation.
- Use `callout` for the key student insight in concept scenes.
- Use `coachNote` to make worked examples feel taught, not just displayed.
- Use `pausePrompt` before quick-check answers so students actively decide before reveal.
- Use `unitCancel` whenever the unit proves the method.
- Use `mistakeTag` to make common traps visible and memorable.
- Export transcripts from the same timeline used by the video.
- Treat the website lesson page as part of the video product, not a separate afterthought.

## Mistakes To Avoid

- Do not generate ElevenLabs audio until voiceover timing warnings are resolved or deliberately accepted.
- Do not use one long narration file for a lesson that is still visually changing.
- Do not put videos into the website JavaScript bundle.
- Do not preload videos on course, module, or search pages.
- Do not add decorative doodles unless they focus attention or prevent a mistake.
- Do not make chemistry videos feel childish with unnecessary mascot characters.
- Do not let formulas appear fully formed without a visual build.
- Do not end lessons with generic encouragement instead of a usable decision rule.

## Reusable Patterns

### Hook Pattern

Open with a concrete learner problem:

```text
How can a tiny mass represent billions of particles?
```

Then reveal the concept as the shortcut.

### Worked Example Pattern

```text
Known -> Find -> Formula -> Substitute -> Answer -> Unit check
```

### Misconception Pattern

```text
Wrong instinct -> why it fails -> corrected rule
```

### Summary Pattern

```text
When you see X, ask Y, then choose Z.
```

## Current Known Issues

- Lesson 1 has several tight voiceover scenes. Fix timing or script before final ElevenLabs generation.
- Lesson 2 has tight voiceover scenes in `definition`, `misconception`, and `summary`.
- The production gate currently fails because unresolved voiceover timing prevents production-ready status.
- Use `npm run voiceover:timing` before ElevenLabs work to get exact word-cut and duration-extension options.
- Lesson 1 should remain a long reference lesson unless a shorter production variant is created.
- Lesson 1 is marked `productionRole: reference`; it should not block the normal production gate.
- Lesson 2 is marked `productionRole: production` and currently passes the production gate.
- Full end-to-end video review should happen after final voiceover and render.

## Update Rule

After each completed lesson, add:

- one pattern worth reusing
- one mistake to avoid
- one timing or engagement issue found
- whether the issue should become a validator rule

Use `docs/lesson-retrospective-template.md` for the review, then copy durable lessons into this memory file.
