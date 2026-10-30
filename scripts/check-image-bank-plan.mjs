// Validate planning coverage/dependencies and emit an exact, reviewable queue.
// This does not generate images, approve science or change lesson assets.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const base = 'docs/production/claude-pm/assets/physics-maths-image-bank';
const read = f => JSON.parse(fs.readFileSync(f, 'utf8').replace(/^\uFEFF/, ''));
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const must = (ok, message) => {if (!ok) throw new Error(message);};
const nonempty = v => typeof v === 'string' && v.trim().length > 0;
const array = (v, label) => {must(Array.isArray(v), `${label} must be an array`); return v;};
const source = read(`${base}/source-inventory.json`), art = read(`${base}/existing-raster-inventory.json`);
const sourceByKey = new Map(source.lessons.map(l => [l.lessonKey, l]));
const artByPath = new Map(art.assets.map(a => [a.path, a]));
const plans = ['physics-plan.json', 'maths-plan.json'].map(name => ({name, value: read(`${base}/${name}`)}));
const families = [], lessons = [], seenLessons = new Set(), seenFamilies = new Set();
for (const {name, value: plan} of plans) {
  must(nonempty(plan.subject) && nonempty(plan.scope), `${name}: subject/scope missing`);
  const expectedSubject = name === 'physics-plan.json' ? 'physics' : 'maths-advanced';
  for (const row of array(plan.lessons, `${name} lessons`)) {
    const original = sourceByKey.get(row.lessonKey);
    must(original && !seenLessons.has(row.lessonKey), `Unknown/duplicate lesson ${row.lessonKey}`);
    must(original.subject === expectedSubject, `Wrong subject file for ${row.lessonKey}`);
    must(row.sourceSha256 === original.sourceSha256, `Source hash changed ${row.lessonKey}`);
    must(sha(fs.readFileSync(original.sourcePath)) === original.sourceSha256, `Current page changed ${row.lessonKey}`);
    must(['coded-only', 'raster-support', 'reuse-candidate'].includes(row.decision), `Invalid decision ${row.lessonKey}`);
    must(nonempty(row.teachingReason) && nonempty(row.sourceEvidence), `Missing teaching/source evidence ${row.lessonKey}`);
    array(row.codedVisualIds, `${row.lessonKey} codedVisualIds`);
    array(row.familyIds, `${row.lessonKey} familyIds`);
    must(new Set(row.familyIds).size === row.familyIds.length, `Duplicate family in ${row.lessonKey}`);
    must(row.decision !== 'coded-only' || row.familyIds.length === 0, `Coded-only row has raster families ${row.lessonKey}`);
    must(row.decision === 'coded-only' || row.familyIds.length > 0, `Raster/reuse row has no family ${row.lessonKey}`);
    seenLessons.add(row.lessonKey); lessons.push({...original, ...row, subject: expectedSubject, inventoryExistingCodedVisualIds: original.codedVisualIds});
  }
  for (const f of array(plan.families, `${name} families`)) {
    must(nonempty(f.id) && !seenFamilies.has(f.id), `Missing/duplicate family ${f.id}`);
    for (const key of ['title', 'purpose', 'treatment']) must(nonempty(f[key]), `${f.id}: missing ${key}`);
    must(['P0', 'P1', 'P2'].includes(f.priority), `${f.id}: priority invalid`);
    must(['prompt-ready-candidate', 'needs-reference', 'needs-selected-scene', 'reuse-review'].includes(f.readiness), `${f.id}: readiness invalid`);
    for (const key of ['lessonKeys', 'reuseCandidates', 'states', 'codedOverlays', 'acceptanceChecks', 'dependencies', 'referenceNeeds']) array(f[key], `${f.id} ${key}`);
    must(nonempty(f.alignment) || Array.isArray(f.alignment), `${f.id}: alignment must be text or an array`);
    must(f.lessonKeys.length && f.states.length && f.acceptanceChecks.length, `${f.id}: empty usage/state/checks`);
    must(new Set(f.lessonKeys).size === f.lessonKeys.length, `${f.id}: duplicate lesson links`);
    const ids = new Set();
    for (const state of f.states) {
      must(nonempty(state.id) && !ids.has(state.id), `${f.id}: state ID invalid`); ids.add(state.id);
      must(nonempty(state.description) && nonempty(state.prompt), `${f.id}/${state.id}: missing description/prompt`);
      must(state.derivedFromStateId === null || nonempty(state.derivedFromStateId), `${f.id}/${state.id}: invalid parent`);
    }
    for (const state of f.states) {
      const chain = new Set([state.id]); let p = state.derivedFromStateId;
      while (p !== null) {must(ids.has(p) && !chain.has(p), `${f.id}/${state.id}: unknown/cyclic edit parent`); chain.add(p); p = f.states.find(s => s.id === p).derivedFromStateId;}
    }
    for (const reuse of f.reuseCandidates) {
      must(artByPath.has(reuse.path) && typeof reuse.inspected === 'boolean' && nonempty(reuse.fit ?? reuse.note), `${f.id}: invalid reuse candidate`);
      must(sha(fs.readFileSync(reuse.path)) === artByPath.get(reuse.path).sha256, `${f.id}: reuse candidate changed`);
    }
    if (f.readiness === 'needs-reference') must(f.referenceNeeds.length, `${f.id}: reference hold has no reference requirement`);
    seenFamilies.add(f.id); families.push({...f, subject: expectedSubject, alignment: Array.isArray(f.alignment) ? f.alignment : [f.alignment], reuseCandidates: f.reuseCandidates.map(r => ({...r, fit: r.fit ?? r.note}))});
  }
}
must(seenLessons.size === sourceByKey.size, `Coverage incomplete: ${seenLessons.size}/${sourceByKey.size}`);
for (const row of lessons) for (const id of row.familyIds) must(seenFamilies.has(id), `Unknown family ${id} at ${row.lessonKey}`);
for (const f of families) {
  const actual = lessons.filter(l => l.familyIds.includes(f.id)).map(l => l.lessonKey).sort();
  must(JSON.stringify(actual) === JSON.stringify([...f.lessonKeys].sort()), `${f.id}: family/lesson links differ`);
}
const allCopy = JSON.stringify({lessons, families}); must(!allCopy.includes('\u2014'), 'Prohibited em dash in planning copy');
const inputs = ['source-inventory.json', 'existing-raster-inventory.json', 'physics-plan.json', 'maths-plan.json'].map(name => ({path: `${base}/${name}`, sha256: sha(fs.readFileSync(`${base}/${name}`))}));
const queuedStates = families.flatMap(f => f.states.map(s => ({familyId: f.id, familyTitle: f.title, subject: f.subject, priority: f.priority, readiness: f.readiness, stateId: s.id,
  derivedFromStateId: s.derivedFromStateId, prompt: s.prompt, dependencies: f.dependencies, referenceNeeds: f.referenceNeeds, acceptanceChecks: f.acceptanceChecks, codedOverlays: f.codedOverlays, alignment: f.alignment})));
const counts = {lessonRows: lessons.length, physicsLessons: lessons.filter(l => l.subject === 'physics').length, mathsLessons: lessons.filter(l => l.subject === 'maths-advanced').length,
  codedOnlyLessons: lessons.filter(l => l.decision === 'coded-only').length, rasterSupportedLessons: lessons.filter(l => l.decision !== 'coded-only').length,
  assetFamilies: families.length, plannedStateOutputs: queuedStates.length, editStates: queuedStates.filter(s => s.derivedFromStateId !== null).length,
  rawExistingRasterFiles: art.assets.length, generationCallsMade: 0};
const mdCell = s => String(s).replaceAll('|', '/').replaceAll('\n', ' ');
let mapping = '# Lesson-by-lesson image decisions\n\nPlanning only. Coded decisions describe the required teaching layer, not a claim that every component exists. Source sections are selection evidence, not a full script/science review.\n\n';
for (const subject of ['physics', 'maths-advanced']) {
  mapping += `## ${subject}\n\n| Lesson | Decision | Families | Teaching purpose and source case |\n| --- | --- | --- | --- |\n`;
  for (const l of lessons.filter(l => l.subject === subject)) mapping += `| ${mdCell(l.title)} (${l.topic}) | ${l.decision} | ${l.familyIds.join(', ') || 'None'} | ${mdCell(l.teachingReason)} Source: ${mdCell(l.sourceEvidence)}. Key: \`${l.lessonKey}\` |\n`;
  mapping += '\n';
}
fs.writeFileSync(`${base}/lesson-image-map.md`, mapping);
let prompts = '# Image generation briefs\n\nProposed prompts only. Check each readiness state, reference and selected-scene dependency before generation. For an aligned variant, inspect the base and edit that exact base; independent generations do not establish alignment. Keep scientific labels, numerical values, geometry and connections in code. Use the built-in image tool unless the owner explicitly selects another mode.\n\n';
for (const f of [...families].sort((a, b) => a.priority.localeCompare(b.priority) || a.id.localeCompare(b.id))) {
  prompts += `## ${f.id}: ${f.title}\n\n${f.priority}; ${f.readiness}. ${f.purpose}\n\nTreatment: ${f.treatment}\n\nLessons: ${f.lessonKeys.map(k => '`' + k + '`').join(', ')}\n\nDependencies: ${f.dependencies.join('; ') || 'No additional dependencies specified.'}\n\nReference needs: ${f.referenceNeeds.join('; ') || 'No additional reference needs specified.'}\n\nAlignment: ${f.alignment.join('; ') || 'Independent composition, no aligned transition claimed.'}\n\nCoded overlays: ${f.codedOverlays.join('; ')}\n\nAcceptance: ${f.acceptanceChecks.join('; ')}\n\n`;
  for (const s of f.states) prompts += `### ${f.id} / ${s.id}\n\n${s.description}\n\nParent state: ${s.derivedFromStateId ?? 'base generation or reference selection'}\n\n\`\`\`text\n${s.prompt}\n\`\`\`\n\n`;
}
fs.writeFileSync(`${base}/generation-prompts.md`, prompts);
fs.writeFileSync(`${base}/generation-queue.json`, JSON.stringify({date: '2026-10-25', status: 'planning-only-independent-review-and-selection-required', scope: source.scope, inputs, counts,
  lessons, families, queue: queuedStates.sort((a, b) => a.priority.localeCompare(b.priority) || a.familyId.localeCompare(b.familyId) || a.stateId.localeCompare(b.stateId)),
  limits: ['State-output count is a planning upper bound before reuse/scene selection, not an order or cost estimate.', 'Readiness describes prompt preparation only; reference and selected-scene dependencies remain binding.', 'No artwork has been generated, reused in a new scene or approved by this structural validation.']}, null, 2) + '\n');
console.log(JSON.stringify(counts));
