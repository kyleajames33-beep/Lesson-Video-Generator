import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {getCompositionId} from './lesson-utils.mjs';

const usage = () => {
  console.error('Usage: node scripts/create-lesson-retrospective.mjs <lesson-json>');
  console.error('Example: node scripts/create-lesson-retrospective.mjs src/data/chemistry-y11-m2-l1-mole-concept.json');
};

const [lessonPath] = process.argv.slice(2);

if (!lessonPath) {
  usage();
  process.exit(1);
}

const lesson = JSON.parse(readFileSync(lessonPath, 'utf8'));
const compositionId = getCompositionId(lesson);
const auditPath = path.join('out/audits', 'production-audit.json');
const audit = JSON.parse(readFileSync(auditPath, 'utf8'));
const lessonAudit = audit.lessons.find((item) => item.compositionId === compositionId);

if (!lessonAudit) {
  console.error(`No audit found for ${compositionId}. Run npm run audit:production first.`);
  process.exit(1);
}

const outputDir = path.join('out/retrospectives');
mkdirSync(outputDir, {recursive: true});

const today = new Date().toISOString().slice(0, 10);
const outputPath = path.join(outputDir, `${compositionId}.md`);
const scoreLines = Object.entries(lessonAudit.scores)
  .map(([key, value]) => `- ${key}: ${value}/10`)
  .join('\n');
const actionLines = lessonAudit.nextActions.length > 0
  ? lessonAudit.nextActions.map((action) => `- ${action}`).join('\n')
  : '- No automated action flagged.';

const content = `# Lesson Retrospective

## Lesson

- Composition ID: ${compositionId}
- Lesson JSON: ${path.relative(process.cwd(), path.resolve(lessonPath)).replace(/\\/g, '/')}
- Reviewer:
- Date: ${today}

## Scores

${scoreLines}

## Automated Findings

- Duration: ${lessonAudit.evidence.durationSeconds}s (${lessonAudit.evidence.durationStatus})
- Dense scenes: ${lessonAudit.evidence.sceneDensityIssues.length}
- Tight voiceover scenes: ${lessonAudit.evidence.voiceoverWarnings.length}

## Next Actions

${actionLines}

## What Worked

- 

## What Did Not Work

- 

## Student Confusion Risk

- 

## Best Reusable Idea

- 

## Mistake To Avoid Next Time

- 

## Should This Become A Validator Rule?

- Yes/No:
- Rule:

## Should This Update The AI Prompt?

- Yes/No:
- Prompt change:

## Should This Update Visual Components?

- Yes/No:
- Component change:
`;

writeFileSync(outputPath, content);
console.log(`Wrote ${outputPath}`);
