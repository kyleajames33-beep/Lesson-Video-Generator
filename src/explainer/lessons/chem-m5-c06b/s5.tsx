import React from 'react';
import {useCurrentFrame} from 'remotion';
import {INK, prog} from '../../kit';
import {cues} from '../../cues';
import {Fade, FurnaceIcon, Overlay, Sx, TEAL, Tick} from '../chem-m5-c06/parts';
import {Heading, sc} from './common';
import {TYPE_SPECS, TypeCard} from '../chem-m5-c06a/types';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {ShortcutCard} from './parts';

// ---------- 13. Decision rule: type three, and the handoff ----------
const D = 'decision-rule';
const KD = cues(sc(D), {t3: 'for a type three', call: 'call the change x', write: 'write the change row', add: 'add to get', sub: 'substitute into K', look: 'look for a shortcut', ps: 'A perfect square', tiny: 'A tiny K', either: 'Either way', back: 'substitute back', next: 'Next'});
export const SceneDecisionB: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Type three" at={4} size={62} />
			<Overlay>
				<TypeCard spec={TYPE_SPECS[0]} x={96} y={180} s={0.55} at={2} tick={10} />
				<TypeCard spec={TYPE_SPECS[1]} x={96} y={306} s={0.55} at={4} tick={14} />
				<TypeCard spec={TYPE_SPECS[2]} x={96} y={440} s={0.78} at={6} lift={prog(f, KD.t3, 12)} line2="x from the coefficients, E = I + C, into K" line2At={KD.call} changeX={KD.call} />
				<ShortcutCard x={96} y={628} w={1092} h={250} at={KD.look - 4} leftAt={KD.ps} rightAt={KD.tiny} leftLit={[KD.ps, KD.tiny]} rightLit={[KD.tiny, KD.either]} thumbs={false} size={40} />
				<Fade at={KD.either}>
					<Sx x={96} y={940} text="Either way: substitute back to check" size={46} color={TEAL} hand at={KD.either} />
					<Tick x={760} y={922} at={KD.back + 10} s={42} />
				</Fade>
				{/* next */}
				<Fade at={KD.next - 6}>
					<rect x={1260} y={180} width={580} height={600} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
					<Sx x={1300} y={270} text="Next:" size={60} color={TEAL} hand at={KD.next} />
					<Sx x={1300} y={336} text="why factories do not" size={48} color={TEAL} hand at={KD.next + 8} />
					<Sx x={1300} y={392} text="wait for equilibrium" size={48} color={TEAL} hand at={KD.next + 16} />
				</Fade>
				<FurnaceIcon x={1330} y={520} at={KD.next + 14} />
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = [
	'Type 3 (K and the start given): let x be the change in one species; write the change row from the coefficients (for example −x, −x, +2x); Equilibrium = Initial + Change, in terms of x; substitute into K.',
	'Perfect square (the top and the bottom are both squares, for example H_2 and I_2 starting equal): take the square root of both sides and keep the positive root.',
	'Tiny K (K very small and the start not tiny): x is tiny next to the start, so start − x ≈ start. Keep the x where it is the answer. Then check that x is under about 5 per cent of the start.',
	'HSC questions are written so you should not need the quadratic formula (you can use it if you like): look for a perfect square or a tiny K.',
	'Always check: substitute back into K, and make sure no concentration comes out negative.',
];
export const SceneNotesB: React.FC = () => (
	<KeyNotesBoard notes={NOTES} aids={['Perfect square: square root. Tiny K: drop the x, then check it.', 'Only the change row follows the coefficients.']} tag="same temperature, equation as written; 5 per cent is a rule of thumb" aidTop={600} />
);
void INK;
