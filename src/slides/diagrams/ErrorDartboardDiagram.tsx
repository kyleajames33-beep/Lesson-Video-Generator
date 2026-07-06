// ErrorDartboardDiagram — the classic systematic-vs-random visualisation.
// Left board: darts clustered tightly but off-centre (systematic bias).
// Right board: darts scattered around the centre (random scatter).
// Teaches the core distinction of Working Scientifically. TOK palette.
//
// Beat plan (frames @ 30fps):
//   0    boards + labels in
//   18+  darts land one by one on each board

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// Systematic: tight cluster, offset up-left from centre.
const SYSTEMATIC = [
	{dx: -34, dy: -30}, {dx: -28, dy: -38}, {dx: -40, dy: -24}, {dx: -32, dy: -22}, {dx: -24, dy: -32},
];
// Random: scattered around the centre, both directions.
const RANDOM = [
	{dx: -6, dy: -34}, {dx: 30, dy: 10}, {dx: -28, dy: 18}, {dx: 14, dy: -20}, {dx: 4, dy: 28},
];

export const ErrorDartboardDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const boardOpacity = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const labelOpacity = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);

	const dartPop = (i: number) => {
		const p = spring({frame: frame - 18 - i * 6, fps, config: {damping: 12, stiffness: 260, mass: 0.5}});
		return Math.max(0, p);
	};

	const Board = ({cx, darts, accent, label, sub, labelDelay}: {cx: number; darts: {dx: number; dy: number}[]; accent: string; label: string; sub: string; labelDelay: number}) => {
		const cy = 240;
		return (
			<g>
				{/* rings */}
				{[84, 60, 36, 14].map((r, idx) => (
					<circle key={r} cx={cx} cy={cy} r={r} fill={idx % 2 === 0 ? `${TOK.inkMute}14` : TOK.bgLift}
						stroke={TOK.rule} strokeWidth={2} opacity={boardOpacity} />
				))}
				<circle cx={cx} cy={cy} r={5} fill={TOK.inkDim} opacity={boardOpacity} />
				{/* darts */}
				{darts.map((d, i) => {
					const s = dartPop(i);
					const x = cx + d.dx;
					const y = cy + d.dy;
					return (
						<circle key={i} cx={x} cy={y} r={9} fill={accent} stroke={TOK.bgLift} strokeWidth={2}
							transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}
							opacity={interpolate(s, [0, 0.25], [0, 1], {extrapolateRight: 'clamp'})} />
					);
				})}
				<text x={cx} y={120} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={labelOpacity(labelDelay)}>{label}</text>
				<text x={cx} y={372} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={600} opacity={labelOpacity(labelDelay + 6)}>{sub}</text>
			</g>
		);
	};

	return (
		<svg viewBox="0 0 720 420" role="img" aria-label="Systematic versus random error on dartboards" style={{width: '100%'}}>
			<Board cx={190} darts={SYSTEMATIC} accent={TOK.chem2} label="systematic" sub="tight, but off-centre" labelDelay={14} />
			<Board cx={530} darts={RANDOM} accent={TOK.amber} label="random" sub="scattered both ways" labelDelay={20} />
		</svg>
	);
};
