# HSC Chemistry Production Plan

This plan defines how the pipeline should scale from one reference video to a full HSC Chemistry library.

## Syllabus Version Policy

Do not generate the full library without recording the syllabus version for each lesson.

Current planning rule:

- Use the current NESA Chemistry Stage 6 syllabus for lessons intended for current students.
- Track the Chemistry 11-12 Syllabus (2025), which NESA states is to be implemented from 2028 and will replace the Chemistry Stage 6 Syllabus (2017).
- Add a `syllabusVersion` field before bulk production so lessons can be migrated deliberately instead of guessed later.

Sources:

- https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017
- https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/content/stage-6/fa8f70ce8a

## Library Goal

The system should produce a complete HSC Chemistry video library where every lesson has:

- lesson JSON
- rendered MP4
- poster image
- transcript JSON
- transcript VTT
- voiceover manifest
- site manifest entry
- production audit score
- improvement notes

## Lesson Factory Workflow

For each lesson:

1. Map the lesson to a syllabus dot point or skill.
2. Generate lesson JSON from `docs/ai-lesson-generation-prompt.md`.
3. Run validation and audit.
4. Fix timing, missing fields, and weak engagement.
5. Generate voiceover manifest.
6. Generate scene-level voiceover.
7. Sync voiceover assets.
8. Render full video and poster.
9. Export transcript and site manifest.
10. Watch the full video and update `docs/production-memory.md`.
11. Fill out `docs/lesson-retrospective-template.md` for anything that should change the pipeline.

Create the retrospective file with:

```bash
npm run retrospective:create -- src/data/your-lesson.json
```

## Bulk Production Rule

Do not produce 300 lessons in one pass.

Use batches:

- Batch 1: 5 lessons from one module.
- Batch 2: 10 lessons across calculation-heavy and theory-heavy topics.
- Batch 3: one full module.
- Batch 4: remaining modules.

After each batch, update:

- `docs/production-memory.md`
- validation rules
- benchmark rubric
- AI generation prompt

## Required Metadata For Future Lessons

Future lesson JSON should include these root fields once the schema is expanded:

```json
{
  "syllabusVersion": "Chemistry Stage 6 Syllabus (2017)",
  "syllabusModule": "Module 2: Introduction to Quantitative Chemistry",
  "syllabusDotPoints": [],
  "lessonIntent": "What the student should be able to do after watching.",
  "examSkill": "The HSC-style skill this lesson supports."
}
```

These fields are not required by the current renderer yet, but they should be added before large-scale production.

## Definition Of Done

A lesson is production-ready only when:

- `npm run prepare:lesson -- <lesson-json>` passes.
- `npm run audit:production` gives no category below 9.
- `npm run gate:production` passes.
- Tight voiceover warnings are resolved or deliberately accepted.
- Full video has been watched end to end.
- The lesson page can load without preloading the MP4.
- One new learning from the lesson has been added to `docs/production-memory.md`.

## Production Commands

Use these commands to manage the library:

```bash
npm run audit:production
npm run dashboard:production
npm run gate:production
npm run voiceover:timing
npm run voiceover:fix-timing -- src/data/your-lesson.json --mode=extend
```

Roles:

- `audit:production` scores every lesson and writes `out/audits/production-audit.md`.
- `dashboard:production` combines audit and site-manifest data into `out/production-dashboard/dashboard.md`.
- `gate:production` fails if any production lesson has a score below 9 or unresolved next actions.
- `voiceover:timing` writes exact word budgets and frame-extension options to `out/voiceover-timing/voiceover-timing.md`.
- `voiceover:fix-timing` can safely extend scenes that only need small timing fixes. Use the report first.

Reference lessons are excluded from the default gate. To gate reference material too, run:

```bash
npm run gate:production -- --include-reference
```

The gate is expected to fail while production lessons are still being improved. Passing the default gate is the signal that the production lesson set is ready to publish. Passing with `--include-reference` means even long reference assets meet the same release bar.

## Production Roles

Use `productionRole` in lesson JSON:

- `production`: normal scalable lesson intended for the HSCScience library.
- `reference`: long-form or experimental lesson used as a style benchmark.

Reference lessons can be excellent without being efficient enough for the normal 300-lesson production lane.

## What Makes This Better Than Atomi

The videos alone may not beat Atomi. The complete HSCScience loop can:

- syllabus-mapped lesson
- clear worked example
- quick check
- misconception
- transcript
- quiz
- revision link
- progress/mistake memory

That is the product. The video is the front door.
