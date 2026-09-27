// FormulaTriangleDiagram (kind: chem11m2Triangle): the formula triangle as a
// carved stone block on a plinth.
//
// top = left × right (e.g. n = c × V, V = n × Vₘ, N = n × Nₐ). For each
// rearrangement the narration names, a wooden cap drops onto the quantity
// being found, and what is left visible IS the operation: side-by-side means
// multiply, one-over-the-other means divide. The matching rearranged formula
// is written beside the block. Optional unit-conversion chip and trap line.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Chip, LANE, TrapLine, clamp, shade} from './parts';

type Slot = 'top' | 'left' | 'right';
type Qty = {sym: string; name?: string; unit?: string};

export type FormulaTriangleProps = {
	top?: Qty;
	left?: Qty;
	right?: Qty;
	/** Rearrangements in narration order. */
	finds?: {find: Slot; beat: number}[];
	convert?: {text: string; beat: number};
	trap?: {text: string; beat: number};
	delay?: number;
};

const ID = 'c11m2tri';
const W = 760;
const VB_H = 520;
// Triangle geometry (the block's front face).
const TX = 214, BASE_Y = 352, TW = 336, TH = 272;
const APEX = {x: TX, y: BASE_Y - TH};
const MID_Y = BASE_Y - TH * 0.46;

export const FormulaTriangleDiagram = ({
	top = {sym: 'n', name: 'moles', unit: 'mol'},
	left = {sym: 'c', name: 'concentration', unit: 'mol L⁻¹'},
	right = {sym: 'V', name: 'volume', unit: 'L'},
	finds = [
		{find: 'left', beat: 60},
		{find: 'top', beat: 200},
		{find: 'right', beat: 340},
	],
	convert,
	trap,
	delay = 62,
}: FormulaTriangleProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const fade = (d: number, len = 12) => interpolate(frame, [d, d + len], [0, 1], clamp);
	const pulse = idlePulse(frame);
	const q: Record<Slot, Qty> = {top, left, right};

	const formulaFor = (s: Slot) =>
		s === 'top' ? `${top.sym} = ${left.sym} × ${right.sym}` : s === 'left' ? `${left.sym} = ${top.sym} ÷ ${right.sym}` : `${right.sym} = ${top.sym} ÷ ${left.sym}`;

	// Which rearrangement is live now (the latest beat passed).
	let active = -1;
	finds.forEach((f, i) => {
		if (frame >= f.beat) active = i;
	});
	// The cap lifts off shortly before the next beat, so each find reads alone.
	const capFor = (i: number) => {
		const f = finds[i];
		// The last cap lifts after ~4 s so the whole triangle is visible for the hold.
		const next = finds[i + 1]?.beat ?? f.beat + 136;
		const drop = spring({frame: frame - f.beat, fps, config: {damping: 14, stiffness: 160}});
		const lift = interpolate(frame, [next - 16, next - 2], [0, 1], clamp);
		return Math.max(0, Math.min(1, drop)) * (1 - lift);
	};

	const slotPos: Record<Slot, {x: number; y: number}> = {
		top: {x: TX, y: BASE_Y - TH * 0.64},
		left: {x: TX - TW * 0.22, y: BASE_Y - TH * 0.2},
		right: {x: TX + TW * 0.22, y: BASE_Y - TH * 0.2},
	};

	const depth = 26;
	const stone = '#d9d2c3';
	const face = `M ${APEX.x} ${APEX.y} L ${TX + TW / 2} ${BASE_Y} L ${TX - TW / 2} ${BASE_Y} Z`;
	const side = `M ${APEX.x} ${APEX.y} L ${APEX.x + depth} ${APEX.y - depth * 0.45} L ${TX + TW / 2 + depth} ${BASE_Y - depth * 0.45} L ${TX + TW / 2} ${BASE_Y} Z`;
	const midHalf = (TW / 2) * ((MID_Y - APEX.y) / TH);

	const listX = 568;
	const listY0 = 150;

	return (
		<svg viewBox={`0 0 ${W} ${VB_H}`} role="img" aria-label={`Formula triangle: ${formulaFor('top')}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<linearGradient id={`${ID}-stone`} x1="0" x2="0.4" y1="0" y2="1">
					<stop offset="0%" stopColor="#f1ece2" />
					<stop offset="100%" stopColor={stone} />
				</linearGradient>
			</defs>

			<g opacity={fade(0, 16)}>
				<DioramaPlinth id={ID} cx={TX + 10} cy={BASE_Y + 8} rx={196} />
				{/* the stone block */}
				<path d={side} fill={shade(stone, -0.16)} stroke="#8d8573" strokeWidth={2} strokeLinejoin="round" />
				<path d={face} fill={`url(#${ID}-stone)`} stroke="#8d8573" strokeWidth={2.5} strokeLinejoin="round" />
				<line x1={TX - midHalf} y1={MID_Y} x2={TX + midHalf} y2={MID_Y} stroke="#8d8573" strokeWidth={3} />
				<text x={TX} y={BASE_Y - (BASE_Y - MID_Y) * 0.55 + 12} textAnchor="middle" fill="#8d8573" fontSize={38} fontWeight={900}>×</text>
			</g>

			{/* carved symbols + units */}
			{(['top', 'left', 'right'] as Slot[]).map((s) => {
				const p = slotPos[s];
				const c = s === 'top' ? LANE.moles : LANE.given;
				return (
					<g key={s} opacity={fade(8)}>
						<text x={p.x} y={p.y + 10} textAnchor="middle" fill={c} fontSize={s === 'top' ? 64 : 56} fontWeight={900}>{q[s].sym}</text>
						{q[s].unit && <text x={p.x} y={p.y + 40} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>{q[s].unit}</text>}
					</g>
				);
			})}

			{/* caps */}
			{finds.map((f, i) => {
				const k = capFor(i);
				if (k <= 0.001) return null;
				const p = slotPos[f.find];
				const y = p.y - 150 * (1 - k) + idleBob(frame, i, 1.2);
				return (
					<g key={i} opacity={Math.min(1, k * 2)}>
						<ellipse cx={p.x} cy={p.y + 36} rx={40 * k} ry={8 * k} fill="rgba(40,30,10,0.25)" />
						<rect x={p.x - 42} y={y - 44} width={84} height={82} rx={14} fill={shade(LANE.wood, 0.1)} stroke={LANE.woodDark} strokeWidth={3} />
						<rect x={p.x - 34} y={y - 36} width={10} height={64} rx={5} fill="#ffffff" opacity={0.25} />
						<text x={p.x} y={y + 14} textAnchor="middle" fill="#ffffff" fontSize={40} fontWeight={900}>?</text>
					</g>
				);
			})}

			{/* rearranged formulas, one per find */}
			<text x={listX} y={listY0 - 58} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.08em" opacity={fade(finds[0]?.beat ?? 0)}>
				COVER WHAT YOU WANT
			</text>
			{finds.map((f, i) => {
				const y = listY0 + i * 76;
				const on = i === active;
				const glow = on ? 0.85 + 0.15 * pulse : 1;
				return (
					<g key={i} opacity={fade(f.beat + 8)}>
						<rect x={listX - 118} y={y - 34} width={236} height={60} rx={14} opacity={glow} fill={on ? LANE.moles : TOK.bgLift} stroke={on ? LANE.moles : TOK.rule} strokeWidth={2} />
						<text x={listX} y={y + 8} textAnchor="middle" fill={on ? '#ffffff' : TOK.ink} fontSize={30} fontWeight={900}>{formulaFor(f.find)}</text>
					</g>
				);
			})}

			{convert && <Chip x={listX} y={listY0 + finds.length * 76 + 6} text={convert.text} color={LANE.given} on={false} fontSize={21} opacity={fade(convert.beat)} />}
			{trap && <TrapLine x={W / 2} y={VB_H - 22} text={trap.text} opacity={fade(trap.beat, 14)} pulse={pulse} />}
		</svg>
	);
};
