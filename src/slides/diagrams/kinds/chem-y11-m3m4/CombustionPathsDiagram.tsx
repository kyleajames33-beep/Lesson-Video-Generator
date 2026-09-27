// CombustionPathsDiagram — same fuel, different oxygen, different carbon product.
//
// Two burners on plinths burn methane. Left (enough O₂): a clean blue flame,
// and CO₂ + H₂O molecules drift up out of it. Right (limited O₂): a yellow,
// smoky flame giving CO, soot (C) and H₂O. At the end the carbon products are
// picked out (the only thing that changes) and water is tagged "either way".
// Equations are the lesson's own methane equations (Bunsen burner for complete,
// the gas-heater quick check for incomplete).
//
// Beats (frames after `delay`), timed to the concept voiceover:
//   complete 210 · incomplete 340 · blue tag 520 · yellow tag 750 · carbon 830

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, Molecule, idleBob, idlePulse} from '../../diorama';
import {Ball, clamp, ramp} from './shared';

export type CombustionPathsProps = {
	delay?: number;
	completeEquation?: string;
	incompleteEquation?: string;
	/** Frames after delay: [complete lights, incomplete lights, blue tag, yellow tag, carbon highlight]. */
	beats?: [number, number, number, number, number];
};

const ID = 'c11m3cmb';
const W = 760;
const PY = 350;
const RX = 162;
const L = 190;
const R = 570;

const Burner = ({x, y}: {x: number; y: number}) => (
	<g>
		<ellipse cx={x} cy={y + 2} rx={40} ry={12} fill="#5b6470" />
		<ellipse cx={x} cy={y - 2} rx={38} ry={11} fill="#8a939e" />
		<rect x={x - 11} y={y - 70} width={22} height={68} fill="#9aa3ad" />
		<rect x={x - 11} y={y - 70} width={7} height={68} fill="#c3cad1" />
		<rect x={x - 14} y={y - 40} width={28} height={10} rx={3} fill="#6d7680" />
		<ellipse cx={x} cy={y - 70} rx={11} ry={4} fill="#4a525b" />
	</g>
);

const Flame = ({x, y, kind, s, frame}: {x: number; y: number; kind: 'blue' | 'yellow'; s: number; frame: number}) => {
	if (s <= 0) return null;
	const flick = Math.sin(frame / 3.1) * 0.05 + Math.sin(frame / 5.3) * 0.04;
	const h = (kind === 'blue' ? 72 : 100) * s * (1 + flick);
	const w = (kind === 'blue' ? 18 : 26) * s;
	const sway = kind === 'yellow' ? Math.sin(frame / 7) * 6 * s : Math.sin(frame / 6) * 1.5;
	const outer = `M ${x - w} ${y} C ${x - w * 1.2} ${y - h * 0.4}, ${x + sway - w * 0.3} ${y - h * 0.8}, ${x + sway} ${y - h} C ${x + sway + w * 0.3} ${y - h * 0.8}, ${x + w * 1.2} ${y - h * 0.4}, ${x + w} ${y} Z`;
	const ih = h * 0.55, iw = w * 0.55;
	const inner = `M ${x - iw} ${y} C ${x - iw} ${y - ih * 0.5}, ${x - iw * 0.2} ${y - ih * 0.85}, ${x + sway * 0.4} ${y - ih} C ${x + iw * 0.2} ${y - ih * 0.85}, ${x + iw} ${y - ih * 0.5}, ${x + iw} ${y} Z`;
	return (
		<g>
			<ellipse cx={x} cy={y - h * 0.45} rx={w * 2.4} ry={h * 0.6} fill={kind === 'blue' ? '#7fb2ff' : '#ffc94a'} opacity={0.1} />
			<path d={outer} fill={kind === 'blue' ? '#4d8ef0' : '#f7a824'} opacity={0.92} />
			<path d={inner} fill={kind === 'blue' ? '#bfe0ff' : '#ffe98a'} opacity={0.95} />
		</g>
	);
};

/** Linear O=C=O. */
const CO2 = ({x, y, scale = 1}: {x: number; y: number; scale?: number}) => (
	<g transform={`translate(${x},${y}) scale(${scale})`}>
		<ellipse cx={0} cy={16} rx={36} ry={6} fill="rgba(40,60,20,0.2)" />
		<Ball id={ID} el="O" x={-24} y={0} r={14} />
		<Ball id={ID} el="O" x={24} y={0} r={14} />
		<Ball id={ID} el="C" x={0} y={0} r={15} />
	</g>
);

export const CombustionPathsDiagram = ({
	delay = 90,
	completeEquation = 'CH₄ + 2O₂ → CO₂ + 2H₂O',
	incompleteEquation = '2CH₄ + 3O₂ → 2CO + 4H₂O',
	beats = [210, 340, 520, 750, 830],
}: CombustionPathsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const [tA, tB, tBlue, tYel, tC] = beats;

	const light = (t: number) => Math.max(0, spring({frame: frame - t, fps, config: {damping: 14, stiffness: 120}}));
	const sA = light(tA), sB = light(tB);
	// Products rise out of the flame, then hover beside it.
	const rise = (t: number, i: number) => interpolate(frame, [t + 20 + i * 14, t + 70 + i * 14], [0, 1], clamp);
	const flameY = PY - 70;
	const carbonHi = ramp(frame, tC, 16);
	const amber = TOK.amberInk;

	const prodPos = (cx: number, side: -1 | 1, row: number) => ({x: cx + side * 92, y: 168 + row * 64});
	const drift = (cx: number, side: -1 | 1, row: number, t: number, i: number) => {
		const p = prodPos(cx, side, row);
		const r = rise(t, i);
		return {x: cx + (p.x - cx) * r, y: flameY - 60 + (p.y - (flameY - 60)) * r + idleBob(frame, i + (cx > W / 2 ? 10 : 0), 2.4), s: r};
	};

	// Soot specks from the yellow flame (cycle upward and fade).
	const soot = Array.from({length: 7}, (_, k) => {
		const period = 70;
		const ph = ((frame - tB + k * (period / 7)) % period) / period;
		return {x: R + Math.sin(k * 2.1 + frame / 20) * 16 + (ph * 26 * (k % 2 ? 1 : -1)), y: flameY - 96 - ph * 44, o: (1 - ph) * sB};
	});

	const cA = drift(L, -1, 0, tA, 0), wA = drift(L, 1, 0, tA, 1), wA2 = drift(L, 1, 1, tA, 2);
	const cB = drift(R, -1, 0, tB, 3), wB = drift(R, 1, 0, tB, 4), wB2 = drift(R, 1, 1, tB, 5);

	const tag = (x: number, text: string, color: string, o: number) => (
		<text x={x} y={PY + 112} textAnchor="middle" fill={color} fontSize={19} fontWeight={800} letterSpacing="0.03em" opacity={o}>{text}</text>
	);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Complete combustion with enough oxygen gives carbon dioxide and water with a blue flame; incomplete combustion with limited oxygen gives carbon monoxide, soot and water with a yellow smoky flame" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['C', 'O', 'H']} />

			{[
				{x: L, t: 'Enough O₂', e: completeEquation, d: 0},
				{x: R, t: 'Limited O₂', e: incompleteEquation, d: 6},
			].map((c) => (
				<g key={c.t} opacity={ramp(frame, c.d)}>
					<text x={c.x} y={38} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800}>{c.t}</text>
					<text x={c.x} y={70} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={800}>{c.e}</text>
				</g>
			))}

			<DioramaPlinth id={ID} cx={L} cy={PY} rx={RX}>
				<Burner x={L} y={PY + 4} />
				<Flame x={L} y={flameY + 4} kind="blue" s={sA} frame={frame} />
			</DioramaPlinth>
			<DioramaPlinth id={ID} cx={R} cy={PY} rx={RX}>
				<Burner x={R} y={PY + 4} />
				{soot.map((p, k) => <circle key={k} cx={p.x} cy={p.y} r={5 + (k % 3)} fill="#2b2b2b" opacity={p.o * 0.75} />)}
				<Flame x={R} y={flameY + 4} kind="yellow" s={sB} frame={frame} />
			</DioramaPlinth>

			{/* Products drifting out of each flame */}
			<g>
				<CO2 x={cA.x} y={cA.y} scale={cA.s} />
				<Molecule id={ID} atoms={['O', 'H', 'H']} x={wA.x} y={wA.y} r={15} scale={wA.s} />
				<Molecule id={ID} atoms={['O', 'H', 'H']} x={wA2.x} y={wA2.y} r={15} scale={wA2.s} />
				<Molecule id={ID} atoms={['C', 'O']} x={cB.x} y={cB.y} r={15} scale={cB.s} />
				<Molecule id={ID} atoms={['O', 'H', 'H']} x={wB.x} y={wB.y} r={15} scale={wB.s} />
				<Molecule id={ID} atoms={['O', 'H', 'H']} x={wB2.x} y={wB2.y} r={15} scale={wB2.s} />
			</g>
			{/* Product labels beside the molecules */}
			<g fontSize={19} fontWeight={800}>
				<text x={L - 92} y={130} textAnchor="middle" fill={carbonHi > 0 ? amber : TOK.ink} opacity={rise(tA, 0)}>CO₂</text>
				<text x={L + 92} y={130} textAnchor="middle" fill={TOK.ink} opacity={rise(tA, 1)}>H₂O</text>
				<text x={R - 92} y={130} textAnchor="middle" fill={carbonHi > 0 ? amber : TOK.ink} opacity={rise(tB, 3)}>CO</text>
				<text x={R + 92} y={130} textAnchor="middle" fill={TOK.ink} opacity={rise(tB, 4)}>H₂O</text>
				<text x={R} y={130} textAnchor="middle" fill={carbonHi > 0 ? amber : TOK.inkDim} opacity={sB}>soot (C)</text>
			</g>
			{/* Carbon products ringed once the point lands */}
			<g opacity={carbonHi} stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame) * 1.5} fill="none" strokeDasharray="7 6">
				<rect x={L - 142} y={106} width={100} height={96} rx={20} />
				<rect x={R - 142} y={106} width={100} height={96} rx={20} />
			</g>

			{tag(L, 'clean blue flame', '#2f6fd0', ramp(frame, tBlue, 14))}
			{tag(R, 'yellow, smoky flame', '#b3770a', ramp(frame, tYel, 14))}

			<g opacity={carbonHi}>
				<text x={W / 2} y={PY + 158} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>
					Water either way. <tspan fill={amber}>Only the carbon product changes.</tspan>
				</text>
			</g>
		</svg>
	);
};
