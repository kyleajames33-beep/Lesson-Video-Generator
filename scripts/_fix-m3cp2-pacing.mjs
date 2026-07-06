// Rewrite the m3-cp2 quick-check VO to gold-standard conversational
// pacing (it was the only M3/M4 FAIL: p/w 0.18, choppy fragment-stops).
// Chemistry is identical. Clears audioFile + captions so it's cleanly
// marked for a future regen pass — NO audio generated here.

import {readFileSync, writeFileSync} from 'node:fs';

const PATH = 'src/data/chemistry-y11-m3-cp2-metal-reactivity.json';
const d = JSON.parse(readFileSync(PATH, 'utf8'));
const s = d.scenes.find((x) => x.id === 'quick-check');

s.voiceover.text =
	"OK, boss fight. You've got four metals, magnesium, zinc, copper, and silver, each sitting in a one molar solution of its own ions, wired up with a salt bridge and a voltmeter. Your job is to rank their reactivity, find the pair that gives the highest cell voltage, and calculate it. The standard potentials are magnesium at minus two-point-three-seven, zinc at minus zero-point-seven-six, copper at plus zero-point-three-four, and silver at plus zero-point-eight-zero. Pause now and work it through. Right, let's check it. For reactivity, the more negative the standard potential, the more reactive the metal, so the order is magnesium, then zinc, then copper, then silver. For the highest voltage, you want the biggest gap between two potentials, which means magnesium as the anode and silver as the cathode. The cell potential is plus zero-point-eight-zero minus minus two-point-three-seven, which comes to plus three-point-one-seven volts. So the reactivity order is magnesium, zinc, copper, silver, and the magnesium to silver cell gives plus three-point-one-seven volts.";

delete s.voiceover.audioFile;
delete s.captions;

writeFileSync(PATH, JSON.stringify(d, null, 2) + '\n');
const w = s.voiceover.text.trim().split(/\s+/).length;
const p = (s.voiceover.text.match(/\./g) || []).length;
console.log(`m3-cp2 quick-check rewritten. p/w=${(p / w).toFixed(3)} (was 0.18). Audio cleared for regen.`);
