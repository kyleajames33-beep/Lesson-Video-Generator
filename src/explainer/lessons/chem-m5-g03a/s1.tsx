import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, Fade, Overlay, Ring, Sx, Tag, TEAL} from '../chem-m5-c06/parts';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {Heading, sc} from './common';
import {FiveCard, cardY} from './board';

const CW = 1000;

// ---------- 1. Hook: what you are given and asked decides the method ----------
const H = 'hook-board';
const KH = cues(sc(H), {five: 'one of five types', given: 'you are given', asked: 'you are asked', three: 'takes the three', settled: 'Settled amounts', start: 'A start plus one', mixture: 'A mixture and a K', other: 'The other two', amounts: 'find amounts', part: 'part two'});
export const SceneHookBoard: React.FC = () => {
	const f = useCurrentFrame();
	const P = (a: number) => prog(f, a, 12);
	const lit = [P(KH.settled) * (1 - 0.5 * P(KH.start)), P(KH.start) * (1 - 0.5 * P(KH.mixture)), 0, P(KH.mixture) * (1 - 0.5 * P(KH.other)), 0];
	const dim = P(KH.amounts);
	const G = {x: 1160, y: 196, w: 664, h: 330};
	return (
		<>
			<Heading text="What you are given and asked decides the method" at={4} size={56} />
			<Overlay>
				{[1, 2, 3, 4, 5].map((n, i) => (
					<FiveCard key={n} n={n} x={96} y={cardY(i)} w={CW} at={KH.five + i * 8} lit={lit[i]} dim={n === 3 || n === 5 ? dim : 0}
						tag={n === 3 || n === 5 ? {text: 'part two', at: KH.part - 6} : undefined} />
				))}
				{/* a ghost question card: what it gives, what it asks */}
				<Fade at={KH.given - 14}>
					<rect x={G.x} y={G.y} width={G.w} height={G.h} rx={24} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 7" />
					<Sx x={G.x + 30} y={G.y + 50} text="any calculation question" size={32} color={INK_SOFT} hand at={KH.given - 14} />
					<Sx x={G.x + 40} y={G.y + 140} text="Given:" size={56} hand at={KH.given - 8} />
					{[0, 1].map(k => <rect key={k} x={G.x + 220 + k * 200} y={G.y + 110} width={170} height={20} rx={10} fill="#e9e1d0" />)}
					<Sx x={G.x + 40} y={G.y + 256} text="Asked:" size={56} hand at={KH.asked - 8} />
					<rect x={G.x + 220} y={G.y + 226} width={300} height={20} rx={10} fill="#e9e1d0" />
				</Fade>
				<Ring cx={G.x + 110} cy={G.y + 122} rx={110} ry={46} at={KH.given} color={AMBER} seed={3} width={6} />
				<Ring cx={G.x + 110} cy={G.y + 238} rx={114} ry={46} at={KH.asked} color={AMBER} seed={5} width={6} />
				{/* this video's three */}
				<Fade at={KH.three}>
					<Sx x={G.x} y={620} text="This video:" size={44} color={INK} hand at={KH.three} />
					<Sx x={G.x} y={680} text="types 1, 2 and 4" size={52} color={TEAL} hand at={KH.three + 8} />
					<Sx x={G.x} y={736} text="find K, or compare with it" size={36} color={INK_SOFT} hand at={KH.three + 16} />
				</Fade>
				<Fade at={KH.amounts}>
					<Sx x={G.x} y={812} text="types 3 and 5 find amounts:" size={36} color={INK_SOFT} hand at={KH.amounts} />
					<Sx x={G.x} y={856} text="part two" size={36} color={INK_SOFT} hand at={KH.part} />
				</Fade>
				<Tag x={96} y={900} w={720} text="HSC-style questions, written for HSCScience" at={KH.three} size={30} />
			</Overlay>
		</>
	);
};

// ---------- 7. Decision board: types 1, 2 and 4 ----------
const D = 'decision-board';
const KD = cues(sc(D), {given: 'what you are given', asked: 'what you are asked', settled: 'Settled amounts', divide: 'divide by the volume', start: 'A start and one value', ice: 'ICE table', meas: 'measured value', mixture: 'A mixture and a K', workq: 'work out Q', next: 'Next'});
export const SceneDecisionBoard: React.FC = () => {
	const f = useCurrentFrame();
	const P = (a: number) => prog(f, a, 12);
	const lit = [P(KD.settled) * (1 - P(KD.start)), P(KD.start) * (1 - P(KD.mixture)), 0, P(KD.mixture) * (1 - P(KD.next)), 0];
	const nextLit = P(KD.next) * (1 - prog(f, KD.next + 70, 16));
	const M: Record<number, {m: string; s: string; a: number}> = {
		1: {m: 'divide by V; coefficients are powers, not multipliers', s: 'moles in K', a: KD.divide},
		2: {m: 'ICE table; measured value into E first; only the change row follows the coefficients', s: 'start values in K, measured value used as the change', a: KD.ice},
		4: {m: 'Q, the same form as K; compare Q with K', s: 'solid in Q, rule flipped, Q called K', a: KD.workq},
	};
	return (
		<>
			<Heading text="What you are given and asked decides the method" at={-100} size={56} />
			<Overlay>
				{[1, 2, 3, 4, 5].map((n, i) => {
					const m = M[n];
					const part2 = n === 3 || n === 5;
					return (
						<FiveCard key={n} n={n} x={96} y={cardY(i)} w={1728} at={-100} lit={part2 ? nextLit : lit[i]} dim={part2 ? 1 - P(KD.next) : 0}
							method={m ? {text: m.m, at: m.a} : undefined} slip={m ? {text: m.s, at: m.a + 30} : undefined}
							tag={part2 ? {text: 'part two', at: -100, out: KD.next} : undefined} />
					);
				})}
				<Ring cx={1380} cy={150} rx={150} ry={40} at={KD.given} out={KD.settled} color={AMBER} seed={4} />
				<Sx x={1250} y={164} text="given + asked" size={40} color={INK} hand at={KD.given} out={KD.settled + 10} />
				<Chip x={96} y={896} w={1060} text="Next: K and a start, and an amount added" size={42} at={KD.next + 4} color={TEAL} />
			</Overlay>
		</>
	);
};

// ---------- 8. Key notes ----------
const NOTES = [
	'What you are given and what you are asked decide the method. Settled amounts: find K. A start plus one settled value: ICE table, then K. A mixture and a K, asked which way: work out Q and compare.',
	'K and Q use concentrations, never moles: divide each amount by the vessel volume. Coefficients are powers, not multipliers. Pure solids, pure liquids and water as the solvent stay out of K and Q; dissolved species stay in.',
	'ICE table: the measured value goes in the Equilibrium row first; its change is equilibrium minus initial; only the change row follows the coefficients. Put only equilibrium values into K.',
	'Q has the same form as K, using the concentrations right now. Q below K: too little product, so the forward reaction wins. Q above K: the reverse reaction wins. Only a mixture at equilibrium gives K.',
];
export const SceneNotesG3a: React.FC = () => (
	<KeyNotesBoard notes={NOTES} aids={['What you are given and what you are asked decide the method.', 'Concentrations, not moles. Q chases K.']} tag="same temperature, equation as written" aidTop={700} />
);
void INK;
