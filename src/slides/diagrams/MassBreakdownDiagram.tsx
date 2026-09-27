// MassBreakdownDiagram — the "assume 100 g" step of empirical-formula
// problems. A single 100 g block of compound stands on a plinth, then splits
// into one block per element, each as wide as its mass percentage, so a
// student SEES that 40 % C / 6.7 % H / 53.3 % O literally means 40 g / 6.7 g
// / 53.3 g.
//
// Config-driven (segments prop) so it can be reused for any %-composition
// problem. Diorama restyle: painted 3D blocks in CPK colours (C charcoal,
// H white, O red; the segment's own colour for anything else) on a plinth,
// gram tags that drop onto each block, and a gentle idle bob during the hold.
//
// Timing: only used on Chem Y11 M2 L3 "formula", where the card fades in at
// frame 183 (revealDelays.diagram). The narration reaches "forty percent
// carbon becomes forty grams" about 13 s in, so the split lands just before.
// Beat plan (frames after START = 186):
//   0     "100 g sample" block on its plinth
//   60    the block splits into element blocks, left to right
//   90+   each block gets its "x % → x g" tag as it lands
//   190   the rule line turns amber (the point of the scene) and breathes

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idleBob, idlePulse} from './diorama';
import {clamp, fadeAt, shade} from './kinds/restyle-chem-specials/props';

type Segment = {label: string; percent: number; color: string};

const DEFAULT_SEGMENTS: Segment[] = [
	{label: 'C', percent: 40.0, color: '#2d2d2d'},
	{label: 'H', percent: 6.7, color: '#c9a24a'},
	{label: 'O', percent: 53.3, color: TOK.chem2},
];

const ID = 'massbrk';
const START = 186;
const W = 760;
const TOTAL_W = 520;
const BLOCK_H = 118;
const DEPTH = 34; // isometric depth offset of the top face
const GAP = 26;
const BASE_Y = 372; // front-bottom edge of the blocks

const fmt = (v: number) => (Number.isInteger(v) ? String(v) : String(Number(v.toFixed(2))));

export const MassBreakdownDiagram = ({segments = DEFAULT_SEGMENTS}: {segments?: Segment[]}) => {
	const frame = useCurrentFrame() - START;
	const {fps} = useVideoConfig();

	const split = spring({frame: frame - 60, fps, config: {damping: 16, stiffness: 90, mass: 1}});
	const splitP = Math.max(0, Math.min(1.05, split));
	const total = segments.reduce((a, s) => a + s.percent, 0) || 100;
	const n = segments.length;
	const spread = TOTAL_W + GAP * (n - 1) * splitP;
	const x0 = (W - spread) / 2 - DEPTH / 2;
	const pulse = idlePulse(frame + START);

	let cursor = x0;
	const placed = segments.map((seg, i) => {
		const w = (seg.percent / total) * TOTAL_W;
		const x = cursor;
		cursor += w + GAP * splitP;
		const base = ELEMENT_COLORS[seg.label] ?? seg.color;
		return {...seg, x, w, base, tagIn: spring({frame: frame - 92 - i * 16, fps, config: {damping: 12, stiffness: 170, mass: 0.7}})};
	});

	const block = (x: number, w: number, base: string, key: string | number, dy: number) => {
		const light = base.toLowerCase() === ELEMENT_COLORS.H.toLowerCase();
		const top = BASE_Y - BLOCK_H + dy;
		const stroke = light ? '#b9b9b0' : shade(base, -0.3);
		return (
			<g key={key}>
				{/* right side face */}
				<path d={`M ${x + w} ${top} l ${DEPTH} ${-DEPTH * 0.55} l 0 ${BLOCK_H} l ${-DEPTH} ${DEPTH * 0.55} Z`} fill={shade(base, light ? -0.16 : -0.2)} stroke={stroke} strokeWidth={1} />
				{/* top face */}
				<path d={`M ${x} ${top} l ${DEPTH} ${-DEPTH * 0.55} l ${w} 0 l ${-DEPTH} ${DEPTH * 0.55} Z`} fill={shade(base, light ? 0.02 : 0.16)} stroke={stroke} strokeWidth={1} />
				{/* front face with a soft painted highlight */}
				<rect x={x} y={top} width={w} height={BLOCK_H} fill={base} stroke={stroke} strokeWidth={1} />
				<rect x={x + 6} y={top + 8} width={Math.max(0, Math.min(10, w - 12))} height={BLOCK_H - 16} rx={4} fill="#ffffff" opacity={light ? 0.5 : 0.18} />
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="A 100 gram sample split into element masses" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />

			<text x={W / 2} y={46} textAnchor="middle" fill={TOK.ink} fontSize={32} fontWeight={800} opacity={fadeAt(frame, -START, 14)}>
				Assume a 100 g sample
			</text>
			{/* the rule: plain at first, then amber (the point of the scene) once every tag has landed */}
			<g opacity={fadeAt(frame, 30)}>
				<rect x={W / 2 - 236} y={60} width={472} height={38} rx={19} fill="#ffffff" stroke={TOK.amber} strokeWidth={2.5 + pulse * 1.5} opacity={fadeAt(frame, 190, 14)} />
				<text x={W / 2} y={86} textAnchor="middle" fill={frame >= 190 ? TOK.amberInk : TOK.inkDim} fontSize={21} fontWeight={frame >= 190 ? 800 : 600}>
					each percentage becomes that many grams
				</text>
			</g>

			<g opacity={fadeAt(frame, -START, 16)}>
				<DioramaPlinth id={ID} cx={W / 2} cy={BASE_Y - 10} rx={290}>
					{/* the whole sample (fades as the element blocks separate) */}
					<g opacity={interpolate(splitP, [0, 0.15], [1, 0], clamp)}>
						{block(x0, TOTAL_W, '#8a8f86', 'whole', 0)}
						<text x={x0 + TOTAL_W / 2} y={BASE_Y - BLOCK_H / 2 + 12} textAnchor="middle" fill="#ffffff" fontSize={34} fontWeight={900}>100 g</text>
					</g>
					<g opacity={interpolate(splitP, [0, 0.15], [0, 1], clamp)}>
						{placed.map((seg, i) => block(seg.x, seg.w, seg.base, i, frame > 150 ? idleBob(frame, i, 1.2) : 0))}
						{placed.map((seg, i) => {
							const dark = seg.base.toLowerCase() !== ELEMENT_COLORS.H.toLowerCase();
							return seg.w >= 60 ? (
								<text key={i} x={seg.x + seg.w / 2} y={BASE_Y - BLOCK_H / 2 + 12 + (frame > 150 ? idleBob(frame, i, 1.2) : 0)} textAnchor="middle" fill={dark ? '#ffffff' : TOK.ink} fontSize={32} fontWeight={900}>
									{seg.label}
								</text>
							) : null;
						})}
					</g>
				</DioramaPlinth>
			</g>

			{/* gram tags: above each block; thin blocks get their element letter in the tag */}
			{placed.map((seg, i) => {
				const p = Math.max(0, seg.tagIn);
				const cx = seg.x + seg.w / 2 + DEPTH / 2;
				const narrow = seg.w < 60;
				const label = `${narrow ? `${seg.label}: ` : ''}${fmt(seg.percent)} % → ${fmt(seg.percent)} g`;
				const tw = narrow ? 212 : 196;
				const y = BASE_Y - BLOCK_H - DEPTH * 0.55 - 58 - (narrow ? 50 : 0);
				return (
					<g key={i} opacity={interpolate(p, [0, 0.3], [0, 1], clamp)} transform={`translate(0, ${(1 - p) * -24})`}>
						{narrow ? <line x1={cx} y1={y + 40} x2={cx} y2={BASE_Y - BLOCK_H - DEPTH * 0.3} stroke={TOK.inkMute} strokeWidth={2} /> : null}
						<rect x={cx - tw / 2} y={y} width={tw} height={40} rx={20} fill="#ffffff" stroke={TOK.inkMute} strokeWidth={2} />
						<text x={cx} y={y + 28} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>{label}</text>
					</g>
				);
			})}


		</svg>
	);
};
