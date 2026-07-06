import {readFileSync, writeFileSync} from 'node:fs';
for (const f of ['chemistry-y11-m1-l7-ionic-bonding-properties.json', 'chemistry-y11-m1-l8-metallic-bonding-properties.json']) {
	const p = 'src/data/' + f;
	const d = JSON.parse(readFileSync(p, 'utf8'));
	const s = d.scenes.find((x) => x.id === 'concept');
	const had = s.image || '-';
	delete s.image;
	s.diagram = {type: 'latticeVsElectronSea'};
	writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
	console.log(`${f}: concept image ${had} -> diagram latticeVsElectronSea`);
}
