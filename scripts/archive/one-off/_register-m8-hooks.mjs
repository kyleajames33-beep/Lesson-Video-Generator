// The M8 L9–16 prompt file named 8 hook image keys but gave no save paths.
// Assign a consistent path, register them in index.ts, and backfill the
// "Save to:" line into the prompt file under each key's header.
import {readFileSync, writeFileSync} from 'node:fs';

const map = {
	eutrophicationLake:    'assets/hscscience/generated/m8-l9-eutrophication-lake.png',
	waterTreatmentPlant:   'assets/hscscience/generated/m8-l10-water-treatment-plant.png',
	aspirinMolecule:       'assets/hscscience/generated/m8-l11-aspirin-molecule.png',
	entericCoatedTablet:   'assets/hscscience/generated/m8-l12-enteric-coated-tablet.png',
	thalidomideStory:      'assets/hscscience/generated/m8-l13-thalidomide-story.png',
	transdermalPatch:      'assets/hscscience/generated/m8-l14-transdermal-patch.png',
	aspirinSynthesisFlask: 'assets/hscscience/generated/m8-l15-aspirin-synthesis-flask.png',
	kevlarVsPolyethylene:  'assets/hscscience/generated/m8-l16-kevlar-vs-polyethylene.png',
};

// 1. index.ts — insert into the Y12 block (before `} as const;`).
const idxPath = 'src/assets/index.ts';
let idx = readFileSync(idxPath, 'utf8');
const lines = Object.entries(map)
	.filter(([k]) => !new RegExp('\\b' + k + '\\s*:').test(idx))
	.map(([k, p]) => `\t${k}: staticFile('${p}'),`);
if (lines.length) {
	const block = `\t// ── M8 L9–16 hook images (paths assigned by maintainer) ────────────────\n${lines.join('\n')}\n`;
	idx = idx.replace(/\n\} as const;/, '\n' + block + '} as const;');
	writeFileSync(idxPath, idx);
}
console.log(`index.ts: +${lines.length} M8 hook entries`);

// 2. prompt file — backfill **Save to:** under each `### Lnn — \`key\`` header.
const pfPath = 'image-prompts-chem-y12-m8-l9-to-l16.md';
let pf = readFileSync(pfPath, 'utf8');
let added = 0;
for (const [k, p] of Object.entries(map)) {
	const header = new RegExp(`(### L\\d+ — \`${k}\`)\\n`);
	if (header.test(pf) && !pf.includes(`public/${p.replace(/^assets/, 'assets')}`)) {
		pf = pf.replace(header, `$1\n**Save to:** \`public/${p}\`\n`);
		added++;
	}
}
writeFileSync(pfPath, pf);
console.log(`prompt file: +${added} Save-to lines`);
