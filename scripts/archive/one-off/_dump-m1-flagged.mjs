import {readFileSync} from 'node:fs';
const targets = {
	'm1-l7-periodic-trends': ['worked-example-1', 'quick-check'],
	'm1-l8-ionic-bonding': ['definition', 'worked-example-1', 'worked-example-2'],
	'm1-l10-metallic-bonding': ['worked-example-1', 'worked-example-2', 'quick-check'],
	'm1-l11-intermolecular-forces': ['worked-example-1', 'worked-example-2', 'quick-check'],
	'm1-l12-module-summary': ['concept', 'definition', 'worked-example-1', 'quick-check'],
};
for (const [lesson, ids] of Object.entries(targets)) {
	const d = JSON.parse(readFileSync(`src/data/chemistry-y11-${lesson}.json`, 'utf8'));
	for (const id of ids) {
		const s = d.scenes.find((x) => x.id === id);
		if (!s?.voiceover?.text) continue;
		console.log(`\n@@@ ${lesson} :: ${id}`);
		console.log(s.voiceover.text);
	}
}
