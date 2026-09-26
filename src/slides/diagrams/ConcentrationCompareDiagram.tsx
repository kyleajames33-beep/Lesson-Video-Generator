// ConcentrationCompareDiagram — two identical beakers holding the SAME volume
// of solution, one dilute (5 solute particles) and one concentrated (16 of
// the same particles). Teaches that concentration is crowding (c = n ÷ V),
// not total volume.
//
// Diorama restyle: glass beakers on plinths, one solute drawn as the same
// glossy particle on both sides (it's the same substance), liquid tinted by
// how crowded it is, matching "same V" level marks, and particles that keep
// drifting through the solution during the hold.
//
// Timing: used on Chem Y11 M2 L6 and Y12 M6 L5 concept scenes; both reveal
// the card at the default frame 62, so START = 62.
// Beat plan (frames after START):
//   0    beakers, liquid, level marks, labels
//   24   solute particles drop in (5, then 16)
//   110  counts + "same V" chip
//   170  verdict; the concentrated beaker's tag turns amber and breathes

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from './diorama';
import {Ball, BallDefs, GLASS_EDGE, GlassDefs, clamp, fadeAt} from './kinds/restyle-chem-specials/props';

const ID = 'conc';
const START = 62;
const W = 760;
const SOLUTE = '#8e5bd6';

// Same beaker, same liquid level; only the particle COUNT differs.
const DILUTE = 5;
const CONCENTRATED = 16;

const TOP = 150, BOT = 372, HW = 104, LIQ = 196;

// Deterministic scatter inside the liquid: a jittered grid.
const positions = (n: number, cx: number) => {
	const cols = n <= 6 ? 3 : 4;
	const rows = Math.ceil(n / cols);
	return Array.from({length: n}, (_, i) => {
		const col = i % cols, row = Math.floor(i / cols);
		const jx = ((i * 37) % 13) - 6, jy = ((i * 53) % 11) - 5;
		const sx = (HW * 1.5) / cols;
		const sy = (BOT - LIQ - 40) / Math.max(1, rows);
		return {x: cx + (col - (cols - 1) / 2) * sx + jx, y: LIQ + 28 + row * sy + sy / 2 - (rows === 2 ? 0 : 6) + jy};
	});
};

export const ConcentrationCompareDiagram = () => {
	const frame = useCurrentFrame() - START;
	const {fps} = useVideoConfig();
	const pulse = idlePulse(frame + START);
	const verdict = fadeAt(frame, 170, 16);

	const beaker = (cx: number, n: number, label: string, key: number) => {
		const pts = positions(n, cx);
		const tint = interpolate(n, [0, CONCENTRATED], [0.06, 0.3]);
		return (
			<DioramaPlinth id={ID} cx={cx} cy={BOT + 8} rx={150}>
				{/* liquid */}
				<path d={`M ${cx - HW + 4} ${LIQ} L ${cx + HW - 4} ${LIQ} L ${cx + HW - 4} ${BOT - 10} Q ${cx + HW - 4} ${BOT - 3} ${cx + HW - 12} ${BOT - 3} L ${cx - HW + 12} ${BOT - 3} Q ${cx - HW + 4} ${BOT - 3} ${cx - HW + 4} ${BOT - 10} Z`} fill={SOLUTE} fillOpacity={tint} />
				<ellipse cx={cx} cy={LIQ} rx={HW - 4} ry={7} fill={SOLUTE} fillOpacity={tint + 0.08} />
				{pts.map((p, i) => {
					const s = Math.max(0, spring({frame: frame - 24 - i * 3 - key * 8, fps, config: {damping: 13, stiffness: 200, mass: 0.6}}));
					const fall = (1 - Math.min(1, s)) * -90;
					return (
						<Ball key={i} id={ID} fill="solute" edge={SOLUTE} x={p.x + idleBob(frame, i + key * 30, 3)} y={p.y + fall + idleBob(frame + 25, i + key * 30 + 7, 2.4)} r={10} scale={Math.min(1, s)} opacity={s > 0.02 ? 1 : 0} />
					);
				})}
				{/* beaker glass */}
				<path d={`M ${cx - HW} ${TOP} L ${cx - HW} ${BOT - 12} Q ${cx - HW} ${BOT} ${cx - HW + 12} ${BOT} L ${cx + HW - 12} ${BOT} Q ${cx + HW} ${BOT} ${cx + HW} ${BOT - 12} L ${cx + HW} ${TOP}`} fill={`url(#${ID}-glass)`} stroke={GLASS_EDGE} strokeWidth={3.5} strokeLinejoin="round" />
				<path d={`M ${cx - HW} ${TOP} l -12 -9`} stroke={GLASS_EDGE} strokeWidth={3.5} strokeLinecap="round" />
				<path d={`M ${cx - HW + 12} ${TOP + 16} L ${cx - HW + 12} ${BOT - 22}`} stroke="#ffffff" strokeOpacity={0.85} strokeWidth={6} strokeLinecap="round" />
				{/* graduation marks, the fill line matched on both */}
				{[0, 1, 2, 3].map((g) => (
					<line key={g} x1={cx + HW - 22} y1={LIQ + g * 44} x2={cx + HW - 6} y2={LIQ + g * 44} stroke={GLASS_EDGE} strokeWidth={2} />
				))}
				<text x={cx} y={TOP - 22} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800}>{label}</text>
			</DioramaPlinth>
		);
	};

	const countTag = (cx: number, n: number, key: number) => {
		const hot = key === 1;
		return (
			<g opacity={fadeAt(frame, 110 + key * 8)}>
				<rect x={cx - 70} y={446} width={140} height={40} rx={10} fill="#fffdf6" stroke={hot && verdict > 0 ? TOK.amber : TOK.inkMute} strokeWidth={hot ? 2.5 + pulse * 1.5 * verdict : 2} />
				<text x={cx} y={473} textAnchor="middle" fill={hot && verdict > 0 ? TOK.amberInk : TOK.ink} fontSize={22} fontWeight={800}>{n} particles</text>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Dilute versus concentrated solution: same volume, different number of solute particles" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<BallDefs id={ID} colors={{solute: SOLUTE}} />
			<GlassDefs id={ID} />

			<text x={W / 2} y={40} textAnchor="middle" fill={TOK.ink} fontSize={30} fontWeight={800} opacity={fadeAt(frame, -START, 14)}>c = n ÷ V</text>

			<g opacity={fadeAt(frame, -START, 16)}>
				{beaker(195, DILUTE, 'dilute', 0)}
				{beaker(565, CONCENTRATED, 'concentrated', 1)}
			</g>

			{/* matched fill level: same V */}
			<g opacity={fadeAt(frame, 110)}>
				<line x1={300} y1={LIQ} x2={460} y2={LIQ} stroke={TOK.inkMute} strokeWidth={2.5} strokeDasharray="7 7" />
				<rect x={340} y={LIQ - 20} width={80} height={36} rx={18} fill="#ffffff" stroke={TOK.inkMute} strokeWidth={2} />
				<text x={380} y={LIQ + 5} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>same V</text>
			</g>

			{countTag(195, DILUTE, 0)}
			{countTag(565, CONCENTRATED, 1)}

			<text x={W / 2} y={520} textAnchor="middle" fill={TOK.inkDim} fontSize={21} fontWeight={700} opacity={verdict}>
				same volume, more particles: higher concentration
			</text>
		</svg>
	);
};
