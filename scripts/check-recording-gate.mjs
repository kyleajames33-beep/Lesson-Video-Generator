import {checkProductionBrief} from './lib/production-brief.mjs';
for (const key of process.argv.slice(2)) {
  const base = `docs/production/claude-pm/lessons/${key}/`;
  const r = checkProductionBrief(process.cwd(), base + 'lesson.production-brief.json', {stage: 'recording', expectedLessonPath: base + 'lesson.json'});
  console.log(key, 'ready:', r.ready, 'blockers:', JSON.stringify(r.blockers), 'pending:', JSON.stringify(r.pending));
}
