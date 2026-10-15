import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, Fade, Overlay, Sx, TEAL} from '../chem-m5-c06/parts';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {Heading, sc} from './common';
import {FiveCard, cardY} from '../chem-m5-g03a/board';

const T3 = 'Start + K: how much of each? (x)';
const T5 = 'Old equilibrium + added + new value: how much?';

// ---------- 1. Hook: the two types that find amounts ----------
const H = 'hook-board';
const KH = cues(sc(H), {part: 'part two', amounts: 'find amounts', start: 'K and a start', added: 'something added', newv: 'a new value', hardest: 'the hardest two', step: 'one step at a time'});
export const SceneHookB3: React.FC = () => {
	const f = useCurrentFrame();
	const P = (a: number) => prog(f, a, 12);
	const W = 1100;
	const c3 = cardY(2), c4 = cardY(3);
	const steps = ['convert', 'table', 'K', 'test'];
	return (
		<>
			<Heading text="Part two: the types that find amounts" at={4} size={58} />
			<Overlay>
				{[1, 2, 3, 4, 5].map((n, i) => {
					const two = n === 3 || n === 5;
					return (
						<FiveCard key={n} n={n} x={96} y={cardY(i)} w={W} at={6 + i * 6} dim={two ? 0 : 0.45 * P(KH.amounts)} lit={two ? P(KH.amounts) : 0}
							tick={two ? undefined : 20 + i * 6} tag={two ? undefined : {text: 'part one', at: KH.part}}
							title={n === 3 ? T3 : n === 5 ? T5 : undefined} titleAt={n === 3 ? KH.start : n === 5 ? KH.added : undefined}
							flame={n === 5 ? KH.hardest : undefined} />
					);
				})}
				<Sx x={96 + W + 24} y={cardY(4) + 78} text="the hard one" size={30} color="#c4582f" hand at={KH.hardest + 6} />
				{/* type 3 has the same givens as type 4, but a different demand */}
				<DrawPath d={`M${96 + W + 14},${c3 + 40} Q${96 + W + 44},${c3 + 40} ${96 + W + 44},${c3 + 80} L${96 + W + 44},${c4 + 50} Q${96 + W + 44},${c4 + 90} ${96 + W + 14},${c4 + 90}`} at={KH.start + 20} dur={18} color={AMBER_INK} width={4} />
				<Sx x={96 + W + 66} y={c4 + 4} text="same givens as type 4," size={34} color={AMBER_INK} hand at={KH.start + 30} />
				<Sx x={96 + W + 66} y={c4 + 44} text="different demand" size={34} color={AMBER_INK} hand at={KH.start + 36} />
				{/* one step at a time */}
				{steps.map((s, i) => (
					<Fade key={s} at={KH.step + i * 8}>
						<rect x={96 + i * 250} y={900} width={200} height={62} rx={31} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
						<text x={196 + i * 250} y={942} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}}>{s}</text>
						{i < 3 ? <path d={`M${304 + i * 250},${931} L${338 + i * 250},${931} M${328 + i * 250},${921} L${338 + i * 250},${931} L${328 + i * 250},${941}`} fill="none" stroke={TEAL} strokeWidth={4} strokeLinecap="round" /> : null}
					</Fade>
				))}
			</Overlay>
		</>
	);
};

// ---------- 5. Decision board: types 3 and 5 ----------
const D = 'decision-board';
const KD = cues(sc(D), {given: 'what you are given', start: 'A start and a K', x: 'x then a perfect', test: 'test any shortcut', amount: 'An amount added', yin: 'y in the initial', kun: 'K unchanged', moles: 'answer in moles', next: 'Next', trap: 'a trap'});
/** Small coded checklist icon. */
const Checklist: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={70} height={86} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={3} />
		{[0, 1, 2].map(k => (
			<g key={k}>
				<DrawPath d={`M${x + 12},${y + 22 + k * 24} l6,7 l10,-12`} at={at + 8 + k * 8} dur={8} color="#2f8a5b" width={4} />
				<path d={`M${x + 34},${y + 22 + k * 24} L${x + 60},${y + 22 + k * 24}`} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			</g>
		))}
	</Fade>
);
export const SceneDecisionB3: React.FC = () => {
	const f = useCurrentFrame();
	const P = (a: number) => prog(f, a, 12);
	const M: Record<number, {m: string; s: string; a: number; sa: number}> = {
		3: {m: 'x; perfect square, tiny K or huge K, then test the shortcut', s: 'untested shortcut; (2x)^{2} written as 2x^{2}', a: KD.x, sa: KD.test},
		5: {m: 'y in the initial row; new value into E first; K stays; moles at the end', s: 'forgot the added substance is used up; forgot the volume', a: KD.yin, sa: KD.moles},
	};
	const lit: Record<number, number> = {3: P(KD.start) * (1 - P(KD.amount)), 5: P(KD.amount) * (1 - P(KD.next))};
	return (
		<>
			<Heading text="What you are given and asked decides the method" at={-100} size={56} />
			<Overlay>
				{[1, 2, 3, 4, 5].map((n, i) => {
					const m = M[n];
					return (
						<FiveCard key={n} n={n} x={96} y={cardY(i)} w={1728} at={-100} lit={lit[n] ?? 0} dim={m ? 0 : 0.45}
							title={n === 3 ? T3 : n === 5 ? T5 : undefined}
							tick={m ? undefined : -100} tag={m ? undefined : {text: 'part one', at: -100}}
							method={m ? {text: m.m, at: m.a} : undefined} slip={m ? {text: m.s, at: m.sa} : undefined} flame={n === 5 ? -100 : undefined} />
					);
				})}
				<Chip x={96} y={896} w={1000} text="Next: practice questions, each with a trap" size={42} at={KD.next + 4} color={TEAL} />
				<Checklist x={1130} y={884} at={KD.trap} />
			</Overlay>
		</>
	);
};

// ---------- 6. Key notes ----------
const NOTES = [
	'A start and a K, asked for concentrations: find x. An old equilibrium, an addition and a new value: find the amount added.',
	'K and a start: HSC questions are written so you shouldn\'t need the quadratic formula (you can use it). Perfect square: take the square root. Tiny K: drop the x from "start minus x". Huge K: most of the start ends as products (reactants in the equation\'s ratio; an excess stays), so find the small amount left over. Test any shortcut: the amount taken off the start must be under about 5 per cent of the start (a school rule of thumb).',
	'Amount added: convert to concentrations first. The new value goes in the Equilibrium row first. The added substance goes in the initial row as the old equilibrium plus y, and it is also used up in the change row.',
	'K is unchanged at the same temperature. Solve for y in mol/L, then multiply by the volume to give moles.',
];
export const SceneNotesG3b: React.FC = () => (
	<KeyNotesBoard notes={NOTES} aids={['Test it or don\'t use it.', 'Adding changes Q, not K.']} tag="same temperature, equation as written; 5 per cent is a rule of thumb" aidTop={720} />
);
void INK;
