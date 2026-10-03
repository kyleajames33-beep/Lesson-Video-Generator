import {readdir, readFile, mkdir, writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {validateQuantitativeDiagram} from '../src/slides/diagrams/quantitative-models.mjs';

const components = {
  bio11m1bEnzymeGraph: 'src/slides/diagrams/kinds/bio-y11-m1b/EnzymeGraphDiagram.tsx',
  bio12m5Fork: 'src/slides/diagrams/kinds/bio-y12-m5/ForkDiagram.tsx',
  bio12m5Dna: 'src/slides/diagrams/kinds/bio-y12-m5/DnaDiagram.tsx',
  hdDnaReplication: 'src/slides/diagrams/kinds/handdrawn/HdDnaReplication.tsx',
  circuit3d: 'src/slides/diagrams/Circuit3DDiagram.tsx',
  orbit: 'src/slides/diagrams/OrbitDiagram.tsx',
  chem11m4Calorimetry: 'src/slides/diagrams/kinds/chem-y11-m3m4/CalorimetryDiagram.tsx',
  chem11m4EnergyLadder: 'src/slides/diagrams/kinds/chem-y11-m3m4/EnergyLadderDiagram.tsx',
  chem12m6Conductometric: 'src/slides/diagrams/kinds/chem-y12-m6/ConductometricDiagram.tsx',
  chem12m6HeatLedger: 'src/slides/diagrams/kinds/chem-y12-m6/HeatLedgerDiagram.tsx',
};
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');
const output = path.resolve(process.argv[2] ?? 'out/review/scientific-models');
const report = {status: 'source checks only; visual and narrated review pending', components: {}, usages: []};
for (const [kind, file] of Object.entries(components)) report.components[kind] = {file, hash: digest(await readFile(file))};
report.modelStateHash = digest(await readFile('src/slides/diagrams/scientific-models.mjs'));
report.physicsStateHash = digest(await readFile('src/slides/diagrams/physics-models.mjs'));
report.quantitativeStateHash = digest(await readFile('src/slides/diagrams/quantitative-models.mjs'));
for (const folder of ['src/data', 'src/prototypes/data', 'out/review/science-corrections', 'out/review/quantitative-lessons', 'out/review/thermochemistry-lessons', 'out/review/biology-lessons']) {
  let entries;
  try { entries = await readdir(folder); } catch (error) { if (error.code === 'ENOENT') continue; throw error; }
  for (const file of entries.filter((item) => item.endsWith('.json')).sort()) {
    const source = `${folder}/${file}`;
    const bytes = await readFile(source);
    const lesson = JSON.parse(bytes);
    if (!Array.isArray(lesson.scenes)) continue;
    for (const scene of lesson.scenes) {
      const walk = (value, field) => {
        if (!value || typeof value !== 'object') return;
        const kind = value.kind ?? value.type;
        if (Object.hasOwn(components, kind)) {
          let missingCues = [], modelError = null;
          try {missingCues = validateQuantitativeDiagram(value, {requireCues: false});} catch (error) {modelError = error.message;}
          const legacyWaterShortcut = kind === 'chem11m4Calorimetry' && value.props?.cards?.some((card) => card.eq === 'c × V of limiting reactant') || false;
          const legacyLedgerLimit = kind === 'chem12m6HeatLedger' && /not possible|maximum|systematic error/iu.test(JSON.stringify(value.props ?? {}));
          report.usages.push({source, sourceHash: digest(bytes), scene: scene.id, field, kind,
          mode: value.props?.mode ?? null, scope: folder === 'src/data' ? 'catalogue' : 'isolated draft',
          narrationWired: Boolean(scene.voiceover?.audioFile), missingCues, modelError, legacyWaterShortcut, legacyLedgerLimit,
          review: 'requires selected visual, timing and narration review'});
        }
        for (const [key, child] of Object.entries(value)) walk(child, `${field}.${key}`);
      };
      walk(scene, `scenes.${scene.id}`);
    }
  }
}
report.catalogueLessons = new Set(report.usages.filter((usage) => usage.scope === 'catalogue').map((usage) => usage.source)).size;
report.quantitativeSummary = {
  catalogueLessons: new Set(report.usages.filter((usage) => usage.scope === 'catalogue' && usage.kind.startsWith('chem')).map((usage) => usage.source)).size,
  catalogueReferences: report.usages.filter((usage) => usage.scope === 'catalogue' && usage.kind.startsWith('chem')).length,
  legacyWaterShortcuts: report.usages.filter((usage) => usage.legacyWaterShortcut).length,
  legacyLedgerLimits: report.usages.filter((usage) => usage.legacyLedgerLimit).length,
  missingCueReferences: report.usages.filter((usage) => usage.missingCues.length).length,
  modelErrors: report.usages.filter((usage) => usage.modelError).length,
};
await mkdir(output, {recursive: true});
await writeFile(path.join(output, 'usage.json'), JSON.stringify(report, null, 2) + '\n');
await writeFile(path.join(output, 'queue.md'), ['# Scientific model usage', '', report.status, '',
  `${report.catalogueLessons} catalogue lessons reference the changed components. Non-replication DNA modes are listed because they share a source file, although only the replication-mode scope label changed.`, '',
  '| Source | Scene | Kind/mode | Source findings | Review |', '| --- | --- | --- | --- | --- |',
  ...report.usages.map((usage) => `| ${usage.source} | ${usage.scene} | ${usage.kind}${usage.mode ? ` (${usage.mode})` : ''} | ${[usage.modelError, usage.missingCues.length ? `${usage.missingCues.length} missing custom cues` : null, usage.legacyWaterShortcut ? 'legacy water shortcut' : null, usage.legacyLedgerLimit ? 'legacy universal-limit wording' : null].filter(Boolean).join('; ') || 'none from selected checks'} | ${usage.review} |`), '',
  'JSON includes component, model-state and lesson hashes. Refresh it if any selected input changes. It is an impact record, not visual approval.', ''].join('\n'));
console.log(JSON.stringify({output, catalogueLessons: report.catalogueLessons, referencedScenes: report.usages.length, quantitative: report.quantitativeSummary}));
