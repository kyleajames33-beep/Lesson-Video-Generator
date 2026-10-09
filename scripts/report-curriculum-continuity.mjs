import {readFileSync, readdirSync, writeFileSync, mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';

// Review priorities, not automatic syllabus equivalence or production approval.
const cache = 'out/research/continuity-2026-10-08';
const official = JSON.parse(readFileSync(`${cache}/official-content.json`, 'utf8'));
const hash = value => createHash('sha256').update(value).digest('hex');
const clean = value => String(value ?? '').replace(/\u2014/g, '.');
const points = new Map(official.points.map(p => [p.id, p]));
const old = Object.fromEntries(['biology', 'chemistry'].map(subject => [subject,
  JSON.parse(readFileSync(`${cache}/${subject}-2017-paragraphs.json`, 'utf8'))]));
const files = readdirSync('src/data').filter(f => /^(biology|chemistry)-y\d+-.*\.json$/.test(f)).sort();
const source = new Map(files.map(file => [file, JSON.parse(readFileSync(`src/data/${file}`, 'utf8'))]));
const historical = [];
for (const subject of ['biology', 'chemistry']) {
  for (const line of readFileSync(`docs/${subject}-syllabus-crossover.md`, 'utf8').split(/\r?\n/)) {
    if (!/^\| (?:y11-|y12-|m[5-8]-)/.test(line)) continue;
    const cells = line.split('|').slice(1, -1).map(v => v.trim().replace(/\*\*/g, '').replace(/`/g, ''));
    const index = cells.findIndex(v => ['X', 'P', String.fromCodePoint(0x2014)].includes(v));
    if (index < 0) continue;
    const key = `${subject}-${subject === 'biology' ? 'y12-' : ''}${cells[0]}`;
    const matches = files.filter(f => f === `${key}.json` || f.startsWith(`${key}-`));
    if (matches.length !== 1) throw new Error(`Ambiguous historical row: ${key}`);
    historical.push({file: matches[0], classification: cells[index], target: clean(cells[index + 1]), action: clean(cells[index + 2])});
  }
}
if (historical.length !== 233 || new Set(historical.map(r => r.file)).size !== 233) throw new Error('Historical crosswalk coverage changed. Review the parser.');
const history = new Map(historical.map(r => [r.file, r]));

// Direct 2025 content references for the 75 current Biology Year 11 drafts.
// Older paragraph ranges refer to the pinned official 2017 DOCX extraction.
const y11 = [
  ['ci4ad09edc','ci7043d3b2','ci220db32e','ci4a3ce413','cicdcb1a98 ci5c4a2e52','cidc951b94','ciba6b0335','ci6a05fe27 cic0b16beb','cia0fe163d','ci95d0116d','ci28265aa2','ci23700ccf','ci4e2083bf','cif16b05d7','ci39fc23e2','ciaeeb3210','ci75e851a5','cia9a328b1','cid921aa5b','cif2b03f19 cicf152a3d','cicea7c6cb','ci3db7cb59','ci1ea2ac1a ci19d61349','ci75c79be0 ciad3223a6','ci3a8f92d3'],
  ['ci2d1c3da7','ci702892d6 ci8d25c5d8','ci7247a15f','ci9070ea61','cidfdc6824','ci18102c1a','cifd011f18','ci77fda0d0','ci0912d488','cib1eba7b8','cic8678e16','ci59f11b84','cif602a70c','ci1f3d2aa9','cie11c7334','ci41365426','ci078b1b48','ci4d0470e5','ci830b1600 ci7acf52d9','ci62610a0a','cib9e9e7e2','ci49bf6515','cibaff4514','ci82a6662d ci62780c67 ci4e8bd96f','cicdd6afa2'],
  ['cie9cb67f5','ci10b9a6b7','ci74d74427','ci3f0162a6','cicd69335e','ci4674341c','ci1afd6a77 ci642b20df','cif4ce666c','ci01d00f2b','ci8c61cf19','ci7f5f140c ci300fa7c3','cie21d15e1','ci29294421','cia8381b9f','cid180d4f2','ci864cb412','ci26899384','ci86503f3b','ci0c173ffd','ci32a67ba4','ci0ecd0103','ci3def3e5a ci88d3395b','ci3c3a00e4','ci527b621c ci9ab02737','ci89958f1b ci993b871a']
];
const evidence = ids => ids.split(/\s+/).filter(Boolean).map(id => {
  const p = points.get(id); if (!p) throw new Error(`Unknown 2025 content reference: ${id}`);
  return {id, url: p.url, focusArea: clean(p.focusArea), group: clean(p.group), contentSha256: p.contentSha256};
});
const rows = files.map(file => {
  const lesson = source.get(file), prior = history.get(file);
  let category, basis, target, newEvidence = [], oldEvidence = [];
  if (prior) {
    category = prior.classification === 'X' ? 'shared-core candidate' : prior.classification === 'P' ? 'scope review' : 'legacy priority';
    if (prior.classification === 'X' && /\b(add|expand|amend|rewrite|trim|missing|cut|split|fold)\b/i.test(prior.action)) category = 'scope review';
    basis = 'September title/scope crosswalk carried forward as a provisional candidate. Current scene equivalence has not been approved.';
    target = prior.target;
  } else {
    const match = /^biology-y11-m([1-3])-l(\d+)/.exec(file);
    if (!match) throw new Error(`Unclassified source: ${file}`);
    const module = Number(match[1]), number = Number(match[2]);
    newEvidence = evidence(y11[module - 1][number - 1]);
    target = `Year 11 ${newEvidence[0].focusArea}`;
    category = 'shared-core candidate';
    const moved = module === 1 && number >= 19 || module === 2 && number >= 19 && number <= 24;
    const changed = module === 1 && [6, 16].includes(number) || module === 2 && [23, 24, 25].includes(number) || module === 3 && [5, 13, 14].includes(number);
    if (moved) category = 'moved core';
    else if (changed) category = 'scope review';
    const range = module === 1 ? (number >= 19 ? [1030,1057] : [701,723])
      : module === 2 ? (number >= 19 ? [1218,1266] : [743,781]) : (number >= 19 ? [858,887] : [800,839]);
    oldEvidence = [{subject: 'biology', paragraphRange: range, sourceSha256: old.biology.sourceSha256}];
    basis = moved ? 'Core concept moves from 2017 Year 12 into 2025 Year 11. Check the added named mechanisms and depth before reusing scenes.'
      : changed ? 'Shared science has more explicit scope or a changed required context. Review additions rather than rebuilding the whole lesson.'
        : 'Topic comparison against the old focus-area paragraph range and direct new content IDs. Full script and practical coverage still need approval.';
  }
  const flags = [];
  if (!lesson.nesaOutcomes?.length) flags.push('missing outcome metadata');
  if (!lesson.syllabusNeutral) flags.push('check visual course framing');
  if (JSON.stringify(lesson.scenes).includes(String.fromCodePoint(0x2014))) flags.push('copy punctuation review before speech');
  return {file: `src/data/${file}`, sourceSha256: hash(readFileSync(`src/data/${file}`)), title: clean(lesson.title), subject: lesson.subject,
    category, target, basis, newEvidence, oldEvidence, historicalClass: prior ? (['X','P'].includes(prior.classification) ? prior.classification : 'legacy') : null,
    historicalAction: prior?.action ?? null, sceneCount: lesson.scenes.length, flags,
    productionStatus: 'not approved by this curriculum analysis'};
});
if (rows.length !== 308) throw new Error('Catalogue size changed. Review the analysis scope.');

// Authored scene matches are discovery evidence, not proof of complete coverage.
const priorities = [
  {topic: 'Molar mass, amount and particle number', subject: 'chemistry', type: 'record shared core first', ids: 'ci18f59d1c cia5fb8ee9', paragraphs: [780,785], query: 'molar-mass|mole-concept|counting-particles', note: 'Use the corrected v3 pilot. Keep the SI mole definition separate from the carbon-12 atomic mass reference. Retain formula reading and significant figures.'},
  {topic: 'Empirical formula and limiting reactants', subject: 'chemistry', type: 'shared core', ids: 'cibccbf29b ci04298531', paragraphs: [786,787], query: 'empirical|limiting', note: 'Same calculation principles. Approve current worked answers and solver-backed diagrams before recording.'},
  {topic: 'Solution concentration and dilution', subject: 'chemistry', type: 'shared core with practical review', ids: 'cic640839c cia8281b8c cib35d8262', paragraphs: [792,796], query: 'concentration|dilution|standard-solution', note: 'Reuse equations and reasoning. Add any missing concentration units and practical evidence as separate scenes.'},
  {topic: 'Cell structures, transport and enzymes', subject: 'biology', type: 'shared core', ids: 'ci4ad09edc ciba6b0335 ci6a05fe27 ci39fc23e2', paragraphs: [701,723], query: 'prokaryotic|inside-eukaryotic|fluid-mosaic|passive-transport|enzyme', note: 'Existing Year 11 drafts are the starting point. Add the explicitly required enzyme model scope where needed.'},
  {topic: 'DNA, replication, mitosis and meiosis', subject: 'biology', type: 'moved and expanded', ids: 'cid921aa5b cif2b03f19 ci1ea2ac1a ci75c79be0', paragraphs: [1030,1057], query: 'dna-double|dna-replication|mitosis|meiosis', note: 'Build one course-neutral core. Map it to old Year 12 and new Year 11. Check replication enzymes and division phases before claiming complete new coverage.'},
  {topic: 'Homeostasis, nephron and dialysis', subject: 'biology', type: 'moved and expanded', ids: 'cib9e9e7e2 ci830b1600 ci7acf52d9 ci62610a0a', paragraphs: [1218,1266], query: 'homeostasis|negative-feedback|nephron|dialysis|kidney', note: 'Reuse the mechanism; explicitly review secretion, hormonal controls and data interpretation. Avoid paying for overlapping Year 11 and Year 12 versions.'},
  {topic: 'Natural selection, adaptation and ecological sampling', subject: 'biology', type: 'shared core with context review', ids: 'cie9cb67f5 ci01d00f2b ci3def3e5a ci3c3a00e4', paragraphs: [800,864], query: 'natural-selection|adaptation|quadrat|mark-recapture', note: 'Prioritise explanations, evidence and valid sampling. Keep cultural and fieldwork requirements attached to the course mapping.'},
  {topic: 'Gas laws and ideal gas calculations', subject: 'chemistry', type: 'catalogue gap, shared syllabus content', ids: 'ci421ca667 ci36ebe2fd ci440a58fc cibf9522ee', paragraphs: [801,805], sceneQuery: 'ideal gas|Boyle.s law|Charles.s law|PV.?=.?.?nRT', note: 'Already required in 2017, so this is not newly invented syllabus content. No dedicated current lesson found. New 2025 scope also needs interpretation and practical work.'},
  {topic: 'Radioactivity, VSEPR and emission spectroscopy', subject: 'chemistry', type: 'catalogue gap with explicit scope review', ids: 'ci114cf3d9 ciaa60a9f1 ci1bac6c58 cie001b6a8', paragraphs: [710,749], sceneQuery: 'VSEPR|radioactive decay|emission spectro|flame test', note: 'Older atomic, bonding and flame-test requirements already exist. New named applications and modelling depth need dedicated coverage; do not label the whole topic brand new.'},
  {topic: 'Mass spectrometry, IR and proton/carbon NMR', subject: 'chemistry', type: 'catalogue gap, shared syllabus content', ids: 'cia349a867 ci67effeb4 ciddcbbc4e ci088a2da5 ci9c8404e1', paragraphs: [1306,1309], sceneQuery: 'mass spectrometr|infrared spectro|nuclear magnetic|carbon.13 NMR|proton NMR', note: 'These techniques occur in both syllabuses. No dedicated current lesson found. Build reusable interpretation lessons, then check the 2025 specified evidence depth.'},
  {topic: 'Galvanic cells, batteries and polymers', subject: 'chemistry', type: 'moved with changed applications', ids: 'ci078f0829 cib12fd025 ci5e568137 ci80545867 ci3dcdf8d8', query: 'galvanic|polymer', note: 'Reuse core electrochemistry and polymer explanations. Map batteries and major polymers to Applying chemical ideas; keep polyester with ester chemistry.'},
  {topic: 'Regulatory RNA, epigenetics and protein structure', subject: 'biology', type: 'expanded required scope', ids: 'ci7582b948 ci011e0186 ci38a27a2d ci35362fd1', sceneQuery: 'regulatory RNA|epigenetic|tertiary|quaternary|splic', note: 'Some terms occur in existing scenes, often as caveats. Review and extend the relevant heredity lessons rather than assuming those mentions teach the new requirements.'},
  {topic: 'SNPs, sequencing and bioinformatics', subject: 'biology', type: 'expanded scope, drafts already exist', ids: 'ci40d92ef1 ci445449f1 ci8b5ffa5e ci0a00055f', sceneQuery: 'bioinformatic|SNP|sequencing', note: 'The catalogue now contains SNP analysis, sequencing, population data and biotechnology drafts. Old claims that all these lessons are unbuilt are stale. Audit named requirements and examples within those drafts.'},
  {topic: 'Keystone/indicator species, conservation and disease cases', subject: 'biology', type: 'new or more explicit required contexts', ids: 'cie2dea053 ci1d3b5e60 ci6337d57d ci7faad755 ci68b117de', sceneQuery: 'keystone|indicator species|Tasmanian devil|Panama|de.extinction', note: 'Panama disease already has authored scenes. Other required cases need a coverage check and focused additions. Not every optional example needs its own video.'},
  {topic: 'First Nations knowledge and cultural protocols', subject: 'biology', type: 'changed context and course-wide requirement', ids: 'cicd69335e ci29294421 cif4801686', query: 'first-nations|aboriginal|megafauna', note: 'Check respectful sourcing, attribution, permissions where relevant, and cultural protocols. Do not follow the older suggestion to cut protocols wholesale. Existing cultural material is not automatically sufficient for the new specified contexts.'},
  {topic: 'Petroleum refining and base-metal ore applications', subject: 'chemistry', type: 'new or expanded required contexts', ids: 'cie6b3a377 ci469d4d64 cif01fa7c5 cia119e8c1', sceneQuery: 'fractional distillation|petroleum refining|base.metal ore', note: 'Plan focused application lessons after core chemistry. Some separation science is reusable, but these required uses need direct checking.'}
].map(p => ({...p, evidence: evidence(p.ids), oldEvidence: p.paragraphs ? {paragraphRange: p.paragraphs, sourceSha256: old[p.subject].sourceSha256} : null,
  authoredMatches: files.filter(f => f.startsWith(p.subject)).flatMap(file => {
    const lesson = source.get(file);
    if (p.query && new RegExp(p.query, 'i').test(file)) return [{file: `src/data/${file}`, sceneIds: [], basis: 'lesson filename'}];
    const scenes = p.sceneQuery ? lesson.scenes.filter(s => new RegExp(p.sceneQuery, 'i').test(JSON.stringify(s))).map(s => s.id) : [];
    return scenes.length ? [{file: `src/data/${file}`, sceneIds: scenes, basis: 'authored scene term match, coverage unverified'}] : [];
  })}));
const counts = rows.reduce((a, row) => (a[row.category] = (a[row.category] ?? 0) + 1, a), {});
const report = {schemaVersion: 1, date: '2026-10-08', scope: {lessons: rows.length, biology: 159, chemistry: 149}, counts,
  limits: ['Syllabus topic continuity is distinct from scientific, listening, visual and release approval.',
    '233 historical rows are provisional scope candidates, not independently approved identical scripts.',
    '75 Biology Year 11 rows have direct new content IDs and old paragraph ranges; those references are topic evidence, not full lesson coverage.',
    'Optional examples are separate from mandatory points. Flattened mathematical notation requires checking against the raw source.',
    'Course relevance and future scientific accuracy cannot be guaranteed forever. Keep source hashes and review the mapping when NESA updates it.'],
  sources: official.sources.map(({file, ...rest}) => rest), priorities, lessons: rows};
mkdirSync('docs/production', {recursive: true});
writeFileSync('docs/production/curriculum-continuity-2026-10-08.json', JSON.stringify(report, null, 2) + '\n');
const quote = value => `"${clean(value).replace(/"/g, '""')}"`;
writeFileSync('docs/production/curriculum-continuity-2026-10-08.csv', ['File,Title,Category,2025 target,Evidence status,Review flags',
  ...rows.map(r => [r.file,r.title,r.category,r.target,r.basis,r.flags.join('; ')].map(quote).join(','))].join('\n')+'\n');
const lines = ['# Curriculum production priorities, 8 October 2026', '',
  'Produce reusable concept videos first, with course mappings outside the narration. Add changed requirements as focused scenes or companion lessons. Keep existing usable visuals and recordings where the exact script, science and media checks support reuse.', '',
  'This updates the September studies for the current 308-lesson catalogue: 159 Biology and 149 Chemistry. It is a production triage, not a claim that every script is identical across syllabuses or ready to publish.', '',
  '## Verified transition dates', '',
  '| Subject | New Year 11 | New Year 12 | First new HSC |', '|---|---|---|---|',
  '| Biology | Term 1, 2027 | Term 4, 2027 | 2028 |', '| Chemistry | Term 1, 2028 | Term 4, 2028 | 2029 |', '',
  'Sources: [Biology overview](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/overview), [Chemistry overview](https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/overview). The final 2017 HSC cohorts are therefore inferred to be Biology 2027 and Chemistry 2028. These lessons can still serve those cohorts.', '',
  '## Whole-catalogue triage', '', '| Candidate category | Files | Meaning |', '|---|---:|---|',
  ...Object.entries(counts).map(([category, count]) => `| ${category} | ${count} | ${category === 'legacy priority' ? 'Lower new-production priority; retain for current cohorts and reference.' : category === 'scope review' ? 'Review changed requirements, missing depth or course framing before recording.' : category === 'moved core' ? 'One reusable explanation can serve different years; approve added detail.' : 'Shared concept candidate; still needs current script and media approval.'} |`), '',
  'The 233 historical rows originally included 141 crossover, 60 partial and 32 legacy candidates. A crossover row with an explicit addition/cut/split warning is raised to scope review here. The other 75 files are current Biology Year 11 drafts, mapped directly to new content IDs. Counts describe triage categories, not numbers of approved evergreen videos.', '',
  'Use the [filterable review page](../../out/prototypes/continuity-review/index.html), [CSV list](curriculum-continuity-2026-10-08.csv) or [JSON evidence](curriculum-continuity-2026-10-08.json). JSON records the exact lesson source hash, new content IDs where directly mapped, old evidence ranges and every source URL/hash. Historical actions are retained as evidence, not instructions to voice as-is.', '',
  '## Recording order and changed/new work', '',
  ...priorities.flatMap(p => [`### ${p.topic}`, '', `**${p.type}.** ${p.note}`, '',
    `2025 evidence: ${p.evidence.map(e => `[${e.id}](${e.url})`).join(', ')}.${p.oldEvidence ? ` 2017 evidence: ${p.subject} official DOCX paragraphs ${p.oldEvidence.paragraphRange.join(' to ')}.` : ' Review against the old requirements before assigning exact continuity.'}`, '',
    `Current draft discovery: ${p.authoredMatches.length ? p.authoredMatches.map(m => '`'+m.file.replace('src/data/','')+'`').join(', ') : 'No matching authored lesson/scene found by the stated search. Confirm terminology before authoring.'}`, '']),
  '## Reuse and duplication controls', '',
  '- Finish the corrected molar-mass pilot and its full listening/render review before batch production.',
  '- Choose one source for each core concept. DNA replication, mitosis, meiosis, homeostasis and kidney/dialysis have Year 11 and Year 12 overlaps. Shared content should not receive two separate paid recordings solely because its syllabus location changes.',
  '- The combined Chemistry M2 L1 is superseded by L1A/L1B. Review polymer overlaps across M1, M7 and M8 before building another explanation.',
  '- Keep syllabus version, outcomes, sequence and required practical/case-study coverage in a mapping layer. Use course-neutral title cards and spoken introductions where appropriate. Preserve approved artwork and animation.',
  '- Record amended scenes separately. Do not edit narration under an existing recording, alignment or captions. Rebuild affected audio and dependent timing.',
  '- Core videos do not replace required practical investigations, depth studies, Biology fieldwork, Working scientifically or cultural protocols. Track these requirements even when they do not need a standalone video.',
  '- Leave legacy candidates available for the remaining 2017 cohorts. Deprioritise expensive new polish unless there is a concrete current-cohort need.', '',
  '## Review limitations and next production gate', '',
  ...report.limits.map(v => '- '+v), '',
  'Twelve Biology Year 11 M2 drafts (L01 to L12) currently lack outcome metadata. Repair and verify those mappings before course publication. The September Biology report also has stale counts and gap claims. Some SNP, sequencing and bioinformatics drafts are now present. Mentions of epigenetics or conservation in a misconception do not prove the required content is taught.', '',
  'For each selected concept, compare every narrated claim, worked answer and required action against both source versions; mark shared/changed/new at scene level. Approve science, choose a listened-to voice take, assemble measured audio/alignment/holds, rebuild captions, then review the full render and device/accessibility evidence. This report does not clear those existing production holds.', '',
  'Reproduce the evidence with `node scripts/research-curriculum-continuity.mjs`, then `node scripts/report-curriculum-continuity.mjs`. Official page copies and full extracted text remain in ignored `out/research/continuity-2026-10-08`. The tracked report stores references and hashes, not full syllabus text.', ''];
writeFileSync('docs/production/curriculum-continuity-2026-10-08.md', lines.join('\n'));
const escape = value => clean(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
mkdirSync('out/prototypes/continuity-review', {recursive: true});
writeFileSync('out/prototypes/continuity-review/index.html', `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Curriculum continuity review</title><style>body{font:16px/1.5 system-ui;margin:2rem;color:#18322f;background:#f8f6ef}h1{font-size:2rem}input,select{font:inherit;padding:.7rem;margin:.3rem}table{border-collapse:collapse;width:100%;background:white}td,th{padding:.8rem;text-align:left;border-bottom:1px solid #ddd;vertical-align:top}small{display:block;color:#53645f}thead{position:sticky;top:0;background:#e3eee6}a{color:#065e59}</style><h1>Curriculum continuity: 308 current lessons</h1><p>Biology starts in 2027. Chemistry starts in 2028. These are review priorities, not release approvals.</p><p><a href="../voice-v4-review/">Listen to the Simon v4 auditions</a></p><input id="search" aria-label="Search lessons" placeholder="Search topic, title or filename"><select id="subject" aria-label="Subject"><option value="">Both subjects</option><option>Biology</option><option>Chemistry</option></select><select id="category" aria-label="Review category"><option value="">All categories</option>${Object.keys(counts).map(c=>`<option>${escape(c)}</option>`).join('')}</select><p id="count" aria-live="polite"></p><table><thead><tr><th>Lesson</th><th>Category and target</th><th>Evidence and review</th></tr></thead><tbody>${rows.map(r=>`<tr data-subject="${escape(r.subject)}" data-category="${escape(r.category)}"><td>${escape(r.title)}<small>${escape(r.file)}</small></td><td>${escape(r.category)}<small>${escape(r.target)}</small></td><td>${escape(r.basis)}<small>${escape(r.flags.join('; '))}</small>${r.newEvidence.map(e=>`<a href="${escape(e.url)}">${escape(e.id)}</a> `).join('')}</td></tr>`).join('')}</tbody></table><script>const rows=[...document.querySelectorAll('tbody tr')];function filter(){let n=0;for(const row of rows){row.hidden=!(row.textContent.toLowerCase().includes(search.value.toLowerCase())&&(!subject.value||row.dataset.subject===subject.value)&&(!category.value||row.dataset.category===category.value));if(!row.hidden)n++}count.textContent=n+' matching lessons'}document.querySelectorAll('input,select').forEach(el=>el.addEventListener('input',filter));filter();</script></html>`);
console.log(JSON.stringify({lessons: rows.length, counts, priorities: priorities.length, officialSources: report.sources.length}, null, 2));
