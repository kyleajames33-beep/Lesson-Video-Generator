// M2 chem-audit fix: L13 worked-example-2 leftover Cl₂ was 4.55 g; the
// correct value is 0.0646 mol × 70.90 = 4.58 g. Fix the step, caption, and
// VO. Scene is voiced → clear its audioFile + captions for a future regen.
import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m2-l13-limiting-reagents.json';
const d = JSON.parse(readFileSync(PATH, 'utf8'));
const s = d.scenes.find((x) => x.id === 'worked-example-2');

// Fix the leftover steps (carry one more decimal so the subtraction is exact).
s.steps = s.steps.map((st) => {
	if (st.startsWith('Cl₂ reacted')) return 'Cl₂ reacted = n(Na) ÷ 2 = 0.4350 ÷ 2 = 0.2175 mol';
	if (st.startsWith('Cl₂ left')) return 'Cl₂ left = 0.2821 − 0.2175 = 0.0646 mol = 4.58 g ✓';
	return st;
});

s.caption = 'Na limiting → 25.4 g NaCl; 4.58 g Cl₂ remains.';

s.voiceover.text = s.voiceover.text.replace(
	'so chlorine reacted is nought-point-four-three-five over two, nought-point-two-one-eight moles. Step five, chlorine left over is the initial nought-point-two-eight-two minus the nought-point-two-one-eight that reacted, which is nought-point-zero-six-four moles, or four-point-five-five grams.',
	'so chlorine reacted is nought-point-four-three-five over two, which is nought-point-two-one-seven-five moles. Step five, the chlorine left over is the initial nought-point-two-eight-two minus that nought-point-two-one-seven-five, which leaves about nought-point-zero-six-five moles of chlorine, and converting to mass gives four-point-five-eight grams.'
);

delete s.voiceover.audioFile;
delete s.captions;

writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
console.log('L13 WE2 fixed: 4.55 g → 4.58 g (step, caption, VO). Audio cleared for regen.');
