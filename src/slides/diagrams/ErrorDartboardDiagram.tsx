// ErrorDartboardDiagram — the classic systematic-vs-random visualisation.
// Left board: darts clustered tightly but off-centre (systematic bias).
// Right board: darts scattered around the centre (random scatter).
// Then each board's AVERAGE is marked: averaging the random darts lands near
// the bullseye, averaging the systematic darts is still off-centre. That is
// the exam point: repeats average out random error, never systematic.
//
// Diorama restyle: painted dartboards on wooden easels standing on plinths,
// darts with glossy heads and flights, averages computed from the dart
// positions (not placed by hand), and a breathing highlight on the average
// that stays wrong.
//
// Timing: Chem Y11 M2 L18 concept reveals at the default frame 62 (START).
// The narration reaches "repeating ... averaging reduces random error" at
// about two thirds of the scene, so the averages land there.
// Beat plan (frames after START):
//   0    boards + labels
//   24   darts land one by one, alternating boards
//   640  random board's average (near the centre)
//   700  systematic board's average (still off-centre, amber) + verdict
// Hold life: dart flights quiver and the board's sheen drifts; the wrong
// average breathes.

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from './diorama';
import {Ball, BallDefs, fadeAt} from './kinds/restyle-chem-specials/props';

const ID = 'darts';
const START = 62;
const W = 760;
const BOARD_Y = 214;
const BOARD_R = 100;
const PLINTH_Y = 420;

// Systematic: tight cluster, offset up-left from centre.
const SYSTEMATIC = [
	{dx: -34, dy: -30}, {dx: -28, dy: -38}, {dx: -40, dy: -24}, {dx: -32, dy: -22}, {dx: -24, dy: -32},
];
// Random: scattered around the centre, both directions.
const RANDOM = [
	{dx: -6, dy: -34}, {dx: 30, dy: 10}, {dx: -28, dy: 18}, {dx: 14, dy: -20}, {dx: 4, dy: 28},
];

const mean = (d: {dx: number; dy: number}[]) => ({dx: d.reduce((a, p) => a + p.dx, 0) / d.length, dy: d.reduce((a, p) => a + p.dy, 0) / d.length});
const RINGS = [
	{r: 1, fill: '#f4ecd8'}, {r: 0.8, fill: '#2f6f5e'}, {r: 0.62, fill: '#f4ecd8'}, {r: 0.44, fill: '#2f6f5e'}, {r: 0.26, fill: '#f4ecd8'}, {r: 0.1, fill: '#c8473c'},
];

export const ErrorDartboardDiagram = () => {
	const frame = useCurrentFrame() - START;
	const {fps} = useVideoConfig();
	const pulse = idlePulse(frame + START);

	const board = (cx: number, darts: {dx: number; dy: number}[], side: number, title: string, sub: string, avgAt: number, avgBad: boolean) => {
		const m = mean(darts);
		const avg = fadeAt(frame, avgAt, 14);
		const avgColor = avgBad ? TOK.amber : TOK.chem2;
		return (
			<g>
				<DioramaPlinth id={ID} cx={cx} cy={PLINTH_Y} rx={140}>
					{/* easel legs */}
					<path d={`M ${cx - 70} ${PLINTH_Y + 6} L ${cx - 30} ${BOARD_Y + 30} M ${cx + 70} ${PLINTH_Y + 6} L ${cx + 30} ${BOARD_Y + 30} M ${cx} ${PLINTH_Y - 8} L ${cx} ${BOARD_Y + 40}`} stroke="#8a5a32" strokeWidth={9} strokeLinecap="round" />
					<rect x={cx - 76} y={BOARD_Y + BOARD_R - 6} width={152} height={12} rx={4} fill="#9b6a3d" />
					{/* board */}
					<circle cx={cx + 5} cy={BOARD_Y + 7} r={BOARD_R + 6} fill="rgba(58,40,18,0.22)" filter={`url(#${ID}-blur)`} />
					<circle cx={cx} cy={BOARD_Y} r={BOARD_R + 8} fill="#3a2a1c" />
					{RINGS.map((ring, i) => <circle key={i} cx={cx} cy={BOARD_Y} r={BOARD_R * ring.r} fill={ring.fill} />)}
					<circle cx={cx - 30 + idleBob(frame, side, 8)} cy={BOARD_Y - 34 + idleBob(frame + 30, side + 3, 5)} r={BOARD_R * 0.7} fill="#ffffff" opacity={0.1} />
				</DioramaPlinth>

				{/* darts: shaft + flight trailing down-right, glossy head at the landing point */}
				{darts.map((d, i) => {
					const s = Math.max(0, spring({frame: frame - 24 - (i * 2 + side) * 7, fps, config: {damping: 12, stiffness: 260, mass: 0.5}}));
					if (s <= 0.01) return null;
					const x = cx + d.dx, y = BOARD_Y + d.dy;
					const back = 22 * Math.min(1, s);
					return (
						<g key={i} opacity={Math.min(1, s * 2)}>
							<line x1={x} y1={y} x2={x + back} y2={y + back * 0.7} stroke="#4a4a4a" strokeWidth={3} strokeLinecap="round" />
							<path d={`M ${x + back} ${y + back * 0.7} l 9 -8 l 3 12 Z`} fill={side ? '#3f6fd8' : '#8e5bd6'} transform={`rotate(${idleBob(frame, i + side * 7, 5)} ${x + back} ${y + back * 0.7})`} />
							<Ball id={ID} fill={side ? 'dartB' : 'dartA'} edge={side ? '#3f6fd8' : '#8e5bd6'} x={x} y={y} r={6.5} scale={Math.min(1.2, s)} />
						</g>
					);
				})}

				{/* the average of the darts */}
				<g opacity={avg}>
					<circle cx={cx + m.dx} cy={BOARD_Y + m.dy} r={13 + (avgBad ? pulse * 3 : 0)} fill="none" stroke={avgColor} strokeWidth={4} />
					<path d={`M ${cx + m.dx - 8} ${BOARD_Y + m.dy} h 16 M ${cx + m.dx} ${BOARD_Y + m.dy - 8} v 16`} stroke={avgColor} strokeWidth={3} />
				</g>

				<text x={cx} y={60} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800} opacity={fadeAt(frame, side * 6)}>{title}</text>
				<text x={cx} y={88} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={600} opacity={fadeAt(frame, 8 + side * 6) * (1 - avg)}>{sub}</text>
				<text x={cx} y={88} textAnchor="middle" fill={avgBad ? TOK.amberInk : TOK.chem1} fontSize={20} fontWeight={800} opacity={avg}>
					{avgBad ? 'average: still off-centre' : 'average: close to centre'}
				</text>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Systematic versus random error on dartboards, with the average of each set of darts" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<BallDefs id={ID} colors={{dartA: '#8e5bd6', dartB: '#3f6fd8'}} />
			<g opacity={fadeAt(frame, -START, 16)}>
				{board(195, SYSTEMATIC, 0, 'systematic', 'tight, but off-centre', 700, true)}
				{board(565, RANDOM, 1, 'random', 'scattered both ways', 640, false)}
			</g>
			<text x={W / 2} y={524} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={700} opacity={fadeAt(frame, 720, 16)}>
				repeats average out random error, not systematic
			</text>
		</svg>
	);
};
