// EnergyEquationDiagram (bio11m1bEnergy) — cellular respiration or
// photosynthesis as an organelle on a stone plinth, with the reactants going in
// on the left, the products coming out on the right, and the summary equation
// building itself underneath.
//
// mode 'respiration'     glucose + 6 O₂ enter a mitochondrion; 6 CO₂ + 6 H₂O
//                        leave and the energy released is captured as ATP.
// mode 'photosynthesis'  6 CO₂ + 6 H₂O enter a chloroplast, light energy
//                        absorbed by chlorophyll drives it; glucose + 6 O₂ leave.
//
// The molecules are drawn with the right geometry (CO₂ linear, H₂O bent) and the
// right number of each (the coefficients). The equation text is built from the
// same species list, and the optional atom tally is COUNTED from those
// formulas, so "6 C, 12 H, 18 O on each side" can never be typed wrong.
//
// Props: `mode`; `at` (frames after `delay`): organelle / reactants / energy /
// products / equation / words / tally / rule; `notes` (lines under the
// organelle at their own beats; one fits); `rule` (the amber line at the end).

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {
	fadeAt, popAt, ease, lerp, CORAL, AtomDefs, OrganelleDefs, SmallMolecule, Glucose, AtpToken, Mitochondrion, Chloroplast, Sun,
	atomCount, Verdict, textWidth,
} from './shared';

type Species = {formula: string; coef: number; name: string; draw: 'glucose' | 'O2' | 'CO2' | 'H2O'};
export type EnergyEquationProps = {
	mode?: 'respiration' | 'photosynthesis';
	at?: {organelle?: number; reactants?: number; energy?: number; products?: number; equation?: number; words?: number; tally?: number; rule?: number};
	notes?: {text: string; at: number}[];
	rule?: string;
	delay?: number;
};

const ID = 'b11m1bEn';
const W = 760, H = 530;
const OX = 380, OY = 150; // organelle centre

const RESP: {reactants: Species[]; products: Species[]} = {
	reactants: [
		{formula: 'C₆H₁₂O₆', coef: 1, name: 'glucose', draw: 'glucose'},
		{formula: 'O₂', coef: 6, name: 'oxygen', draw: 'O2'},
	],
	products: [
		{formula: 'CO₂', coef: 6, name: 'carbon dioxide', draw: 'CO2'},
		{formula: 'H₂O', coef: 6, name: 'water', draw: 'H2O'},
	],
};
const PHOTO: {reactants: Species[]; products: Species[]} = {
	reactants: [
		{formula: 'CO₂', coef: 6, name: 'carbon dioxide', draw: 'CO2'},
		{formula: 'H₂O', coef: 6, name: 'water', draw: 'H2O'},
	],
	products: [
		{formula: 'C₆H₁₂O₆', coef: 1, name: 'glucose', draw: 'glucose'},
		{formula: 'O₂', coef: 6, name: 'oxygen', draw: 'O2'},
	],
};

const term = (s: Species) => `${s.coef > 1 ? s.coef : ''}${s.formula}`;

/** A cluster of `n` copies of a species, laid out in a small grid around (x, y). */
const Cluster = ({s, x, y, frame, seed, opacity}: {s: Species; x: number; y: number; frame: number; seed: number; opacity: number}) => {
	if (s.draw === 'glucose') return <Glucose x={x} y={y + idleBob(frame, seed, 1.5)} s={1.4} opacity={opacity} />;
	const cols = 3;
	const dx = s.draw === 'CO2' ? 54 : 40, dy = 36;
	return (
		<g opacity={opacity}>
			{Array.from({length: s.coef}, (_, k) => {
				const c = k % cols, r = Math.floor(k / cols);
				return <SmallMolecule key={k} id={ID} kind={s.draw as 'O2' | 'CO2' | 'H2O'} x={x + (c - 1) * dx} y={y + (r - 0.5) * dy + idleBob(frame, seed + k, 1.4)} r={s.draw === 'CO2' ? 10 : 11} />;
			})}
			<text x={x} y={y + dy + 22} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{s.coef} × {s.name}</text>
		</g>
	);
};

export const EnergyEquationDiagram = ({mode = 'respiration', at = {}, notes = [], rule, delay = 62}: EnergyEquationProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const resp = mode === 'respiration';
	const sp = resp ? RESP : PHOTO;
	const tO = at.organelle ?? 10, tR = at.reactants ?? 80, tE = at.energy ?? 160, tP = at.products ?? 240;
	const tEq = at.equation ?? 320, tW = at.words ?? 400, tT = at.tally, tRule = at.rule ?? 520;

	// Flow: little ghosts travel along the in/out arrows once both sides are up (idle life).
	const flowing = frame > tP + 40;
	const flow = (k: number) => ((frame + k * 23) % 70) / 70;

	// Equation layout (one line, centred): reactant terms, arrow, product terms, energy.
	const EQ_Y = 374, SIZE = 26;
	const parts: {text: string; color: string; beat: number}[] = [];
	sp.reactants.forEach((s, i) => {
		if (i > 0) parts.push({text: ' + ', color: TOK.inkDim, beat: tEq});
		parts.push({text: term(s), color: theme.accent, beat: tEq});
	});
	parts.push({text: resp ? '  →  ' : '  →  ', color: TOK.ink, beat: tEq + 20});
	sp.products.forEach((s, i) => {
		if (i > 0) parts.push({text: ' + ', color: TOK.inkDim, beat: tEq + 40});
		parts.push({text: term(s), color: CORAL, beat: tEq + 40});
	});
	if (resp) parts.push({text: ' + energy (ATP)', color: TOK.amberInk, beat: tEq + 60});
	const widths = parts.map((p) => textWidth(p.text, SIZE));
	const total = widths.reduce((a, b) => a + b, 0);
	let cursor = W / 2 - total / 2;
	const placed = parts.map((p, i) => {
		const x = cursor;
		cursor += widths[i];
		return {...p, x};
	});
	const arrowIdx = parts.findIndex((p) => p.text.includes('→'));
	const arrowX = placed[arrowIdx].x + widths[arrowIdx] / 2;

	const words = resp
		? 'glucose + oxygen → carbon dioxide + water + energy'
		: 'carbon dioxide + water → glucose + oxygen';

	// Atom tally, counted from the formulas.
	const left = atomCount(sp.reactants.map(term));
	const right = atomCount(sp.products.map(term));
	const elements = ['C', 'H', 'O'];

	const orgPop = popAt(frame, fps, tO);
	const reactOp = fadeAt(frame, tR, 16);
	const prodOp = fadeAt(frame, tP, 16);
	const inT = ease(frame, tR + 10, tR + 50);
	const outT = ease(frame, tP, tP + 40);
	const pulse = idlePulse(frame, 50);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={resp ? 'Cellular respiration: glucose and oxygen in, carbon dioxide, water and ATP out' : 'Photosynthesis: carbon dioxide and water in, light energy absorbed, glucose and oxygen out'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<AtomDefs id={ID} />
			<OrganelleDefs id={ID} />

			{/* Plinth + organelle */}
			<g opacity={fadeAt(frame, tO - 10, 14)}>
				<DioramaPlinth id={ID} cx={OX} cy={OY + 60} rx={140} />
			</g>
			<g transform={`translate(${OX},${OY}) scale(${0.6 + 0.4 * orgPop}) translate(${-OX},${-OY})`} opacity={Math.min(1, orgPop * 1.4)}>
				{resp ? <Mitochondrion id={ID} x={OX} y={OY + idleBob(frame, 1, 1)} rx={118} ry={58} /> : <Chloroplast id={ID} x={OX} y={OY + idleBob(frame, 1, 1)} rx={118} ry={58} />}
			</g>
			<text x={OX} y={OY + 156} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tO + 10)}>
				{resp ? 'mitochondrion' : 'chloroplast (chlorophyll)'}
			</text>

			{/* Side headings */}
			<text x={112} y={34} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800} letterSpacing="0.06em" opacity={reactOp}>REACTANTS IN</text>
			<text x={648} y={34} textAnchor="middle" fill={CORAL} fontSize={17} fontWeight={800} letterSpacing="0.06em" opacity={prodOp}>PRODUCTS OUT</text>

			{/* Reactants: two clusters on the left */}
			{sp.reactants.map((s, i) => (
				<g key={s.formula} transform={`translate(${lerp(-30, 0, inT)},0)`}>
					<Cluster s={s} x={112} y={i === 0 ? 92 : 206} frame={frame} seed={i * 7} opacity={reactOp} />
				</g>
			))}
			{/* Products: two clusters on the right */}
			{sp.products.map((s, i) => (
				<g key={s.formula} transform={`translate(${lerp(-40, 0, outT)},0)`}>
					<Cluster s={s} x={648} y={i === 0 ? 92 : 206} frame={frame} seed={20 + i * 7} opacity={prodOp} />
				</g>
			))}

			{/* In / out arrows with travelling ghosts */}
			<g opacity={reactOp}>
				<path d={`M 196 150 L 252 150`} stroke={theme.accent} strokeWidth={5} strokeLinecap="round" />
				<path d="M 252 140 L 266 150 L 252 160 Z" fill={theme.accent} />
				{flowing && [0, 1].map((k) => <circle key={k} cx={lerp(196, 262, flow(k))} cy={150} r={5} fill={theme.accent} opacity={1 - flow(k)} />)}
			</g>
			<g opacity={prodOp}>
				<path d={`M 498 150 L 552 150`} stroke={CORAL} strokeWidth={5} strokeLinecap="round" />
				<path d="M 552 140 L 566 150 L 552 160 Z" fill={CORAL} />
				{flowing && [0, 1].map((k) => <circle key={k} cx={lerp(498, 562, flow(k))} cy={150} r={5} fill={CORAL} opacity={1 - flow(k)} />)}
			</g>

			{/* Energy */}
			{resp ? (
				<g opacity={fadeAt(frame, tE, 14)}>
					{[0, 1, 2].map((k) => {
						const p = popAt(frame, fps, tE + k * 10);
						return <AtpToken key={k} x={OX - 60 + k * 60} y={OY - 92 + idleBob(frame, 30 + k, 1.6)} s={0.6 + 0.4 * p} opacity={Math.min(1, p)} />;
					})}
					<text x={OX} y={OY - 118} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>energy released, captured as ATP</text>
				</g>
			) : (
				<g opacity={fadeAt(frame, tE, 14)}>
					<Sun x={OX - 136} y={OY - 108} r={22} t={ease(frame, tE, tE + 30)} frame={frame} />
					{[0, 1, 2].map((k) => (
						<line key={k} x1={OX - 112 + k * 8} y1={OY - 84 + k * 4} x2={lerp(OX - 112 + k * 8, OX - 60 + k * 30, ease(frame, tE + 10, tE + 40))} y2={lerp(OY - 84 + k * 4, OY - 40 + k * 4, ease(frame, tE + 10, tE + 40))} stroke="#e0b52a" strokeWidth={4} strokeDasharray="10 7" strokeDashoffset={-frame * 0.8} strokeLinecap="round" />
					))}
					<text x={OX + 50} y={OY - 104} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>light energy, absorbed by chlorophyll</text>
				</g>
			)}

			{/* Notes under the organelle */}
			{notes.map((n, i) => (
				<text key={i} x={OX} y={OY + 180 + i * 21} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700} opacity={fadeAt(frame, n.at)}>{n.text}</text>
			))}

			{/* Summary equation: one <text> of tspans, so the browser does the spacing */}
			<text x={W / 2} y={EQ_Y} textAnchor="middle" fontSize={SIZE} fontWeight={800} style={{whiteSpace: 'pre'}}>
				{parts.map((p, i) => (
					<tspan key={i} fill={p.color} fillOpacity={fadeAt(frame, p.beat)}>{p.text}</tspan>
				))}
			</text>
			{!resp && (
				<text x={arrowX} y={EQ_Y - 28} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tEq + 20)}>light, chlorophyll</text>
			)}
			<text x={W / 2} y={EQ_Y + 36} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700} opacity={fadeAt(frame, tW)}>{words}</text>

			{/* Atom tally (counted from the formulas) */}
			{tT !== undefined && (
				<g opacity={fadeAt(frame, tT)}>
					{elements.map((el, k) => {
						const x = W / 2 - 180 + k * 180;
						const ok = left[el] === right[el];
						const show = fadeAt(frame, tT + k * 14);
						return (
							<g key={el} opacity={show}>
								<rect x={x - 76} y={EQ_Y + 58} width={152} height={40} rx={12} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
								<text x={x - 10} y={EQ_Y + 85} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{el}: {left[el] ?? 0} | {right[el] ?? 0}</text>
								<Verdict x={x + 54} y={EQ_Y + 78} ok={ok} r={11} />
							</g>
						);
					})}
				</g>
			)}

			{/* Rule */}
			{rule && (
				<text x={W / 2} y={H - 12} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={fadeAt(frame, tRule) * (0.82 + 0.18 * pulse)}>{rule}</text>
			)}
		</svg>
	);
};
