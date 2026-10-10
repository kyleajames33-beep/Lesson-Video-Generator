// Dump every worked-example and quick-check (question + steps/answerSteps)
// from M2 L6-L20 so the coordinator can re-derive and verify the arithmetic.
import {readFileSync, readdirSync} from 'node:fs';

const files = readdirSync('src/data')
	.filter((x) => /chemistry-y11-m2-l(6|7|8|9|1[0-9]|20)-/.test(x) && x.endsWith('.json'))
	.sort();

for (const file of files) {
	const d = JSON.parse(readFileSync('src/data/' + file, 'utf8'));
	for (const s of d.scenes) {
		if (s.type !== 'workedExample' && s.type !== 'quickCheck') continue;
		const steps = s.steps || s.answerSteps || [];
		console.log(`\n### ${file.replace('chemistry-y11-m2-', '').replace('.json', '')} :: ${s.id}`);
		console.log(`Q: ${s.question}`);
		steps.forEach((st) => console.log(`  - ${st}`));
	}
}
