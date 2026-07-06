// MassBreakdownDiagram — teaches the "assume 100 g" step of empirical-
// formula problems. A single 100 g sample bar splits into three coloured
// segments sized to the mass percentages, so a student SEES that
// 40 % C / 6.7 % H / 53.3 % O literally means 40 g / 6.7 g / 53.3 g.
//
// Config-driven so it can be reused for any %-composition problem.
// Built with TOK tokens to match the light/chem-green palette.
//
// Beat plan (frames @ 30fps):
//   0    sample bar outline fades in
//   16   segments grow left-to-right, staggered
//   per-segment label + gram value reveal as each lands

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

type Segment = {label: string; percent: number; color: string};

const DEFAULT_SEGMENTS: Segment[] = [
	{label: 'C', percent: 40.0, color: '#2d2d2d'},
	{label: 'H', percent: 6.7, color: '#c9a24a'},
	{label: 'O', percent: 53.3, color: TOK.chem2},
];

export const MassBreakdownDiagram = ({segments = DEFAULT_SEGMENTS}: {segments?: Segment[]}) => {
	const frame = useCurrentFrame();

	const BAR_X = 80;
	const BAR_W = 560;
	const BAR_Y = 200;
	const BAR_H = 110;

	const outlineOpacity = interpolate(frame, [0, 14], [0, 1], clampOpts);
	const titleOpacity = interpolate(frame, [0, 14], [0, 1], clampOpts);

	// Compute cumulative x offsets for each segment.
	let cursor = BAR_X;
	const placed = segments.map((seg, i) => {
		const w = (seg.percent / 100) * BAR_W;
		const x = cursor;
		cursor += w;
		const startFrame = 16 + i * 14;
		const grow = interpolate(frame, [startFrame, startFrame + 16], [0, 1], clampOpts);
		const labelOpacity = interpolate(frame, [startFrame + 12, startFrame + 26], [0, 1], clampOpts);
		return {...seg, x, w, grow, labelOpacity, startFrame};
	});

	return (
		<svg viewBox="0 0 720 420" role="img" aria-label="100 gram sample split into element masses" style={{width: '100%'}}>
			{/* title */}
			<text x={360} y={120} textAnchor="middle" fill={TOK.ink} fontSize={32} fontWeight={800} opacity={titleOpacity}>
				Assume a 100 g sample
			</text>
			<text x={360} y={156} textAnchor="middle" fill={TOK.inkDim} fontSize={22} fontWeight={600} opacity={titleOpacity}>
				each percentage becomes that many grams
			</text>

			{/* sample bar outline */}
			<rect x={BAR_X} y={BAR_Y} width={BAR_W} height={BAR_H} rx={10}
				fill="none" stroke={TOK.inkDim} strokeWidth={3} opacity={outlineOpacity} />

			{/* segments grow left-to-right */}
			{placed.map((seg, i) => (
				<g key={i}>
					<rect
						x={seg.x}
						y={BAR_Y}
						width={Math.max(0, seg.w * seg.grow)}
						height={BAR_H}
						fill={seg.color}
						opacity={0.9}
						rx={seg.percent > 5 ? 0 : 0}
					/>
					{/* element letter centred in segment (only if wide enough) */}
					{seg.percent >= 10 ? (
						<text
							x={seg.x + seg.w / 2}
							y={BAR_Y + BAR_H / 2 + 10}
							textAnchor="middle"
							fill="#ffffff"
							fontSize={30}
							fontWeight={900}
							opacity={seg.labelOpacity}
						>
							{seg.label}
						</text>
					) : null}
					{/* gram value below the segment */}
					<text
						x={seg.x + seg.w / 2}
						y={BAR_Y + BAR_H + 44}
						textAnchor="middle"
						fill={seg.color === '#2d2d2d' ? TOK.ink : seg.color}
						fontSize={26}
						fontWeight={800}
						opacity={seg.labelOpacity}
					>
						{seg.percent} g
					</text>
					{/* element label below the gram value for the thin (H) segment */}
					{seg.percent < 10 ? (
						<text
							x={seg.x + seg.w / 2}
							y={BAR_Y - 16}
							textAnchor="middle"
							fill={TOK.ink}
							fontSize={22}
							fontWeight={800}
							opacity={seg.labelOpacity}
						>
							{seg.label}
						</text>
					) : null}
				</g>
			))}
		</svg>
	);
};
