import {existsSync, readFileSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const auditPath = path.join('out/audits', 'production-audit.json');
const thresholdArg = process.argv.find((arg) => arg.startsWith('--threshold='));
const threshold = thresholdArg ? Number(thresholdArg.split('=')[1]) : 9;
const includeReference = process.argv.includes('--include-reference');

if (!existsSync(auditPath)) {
  console.error(`Missing ${auditPath}. Run npm run audit:production first.`);
  process.exit(1);
}

if (!Number.isFinite(threshold) || threshold < 1 || threshold > 10) {
  console.error('Threshold must be a number from 1 to 10.');
  process.exit(1);
}

const audit = JSON.parse(readFileSync(auditPath, 'utf8'));
const gatedLessons = includeReference
  ? audit.lessons
  : audit.lessons.filter((lesson) => lesson.productionRole !== 'reference');
const blocked = gatedLessons.filter((lesson) => {
  const belowThreshold = Object.values(lesson.scores).some((score) => score < threshold);
  return belowThreshold || lesson.nextActions.length > 0;
});

if (blocked.length === 0) {
  console.log(`Production gate passed at ${threshold}/10.`);
  console.log(includeReference ? 'Included reference lessons.' : 'Reference lessons excluded. Use --include-reference to gate them too.');
  process.exit(0);
}

console.error(`Production gate failed at ${threshold}/10.`);
console.error(includeReference ? 'Included reference lessons.' : 'Reference lessons excluded. Use --include-reference to gate them too.');

for (const lesson of blocked) {
  console.error(`\n${lesson.compositionId} (${lesson.productionRole ?? 'production'})`);
  for (const [key, score] of Object.entries(lesson.scores)) {
    if (score < threshold) {
      console.error(`  ${key}: ${score}/10`);
    }
  }

  for (const action of lesson.nextActions) {
    console.error(`  action: ${action}`);
  }
}

process.exit(1);
