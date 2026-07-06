// LimitingExcessDiagram — shows two reactants reacting: the limiting one is
// fully consumed (nothing left), the excess one has clear leftovers. The
// product forms in the middle. Teaches limiting vs excess at a glance.
//
// Beat plan (frames @ 30fps):
//   0    panels + labels in
//   16   reactant particles spring in
//   70   product forms; leftover excess particles highlighted

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const LimitingExcessDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const labelOpacity = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);
	const verdictOpacity = interpolate(frame, [86, 102], [0, 1], clampOpts);

	const pop = (i: number, start: number) => {
		const p = spring({frame: frame - start - i * 3, fps, config: {damping: 13, stiffness: 240, mass: 0.6}});
		return Math.max(0, p);
	};

	// Leftover excess particles fade-pulse to draw attention after the reaction.
	const leftoverGlow = interpolate(frame, [70, 90], [0, 1], clampOpts);

	const dot = (x: number, y: number, r: number, fill: string, s: number, extra?: {glow?: number}) => (
		<circle
			cx={x}
			cy={y}
			r={r}
			fill={fill}
			stroke={extra?.glow ? TOK.amber : TOK.bgLift}
			strokeWidth={extra?.glow ? 3 : 1.5}
			transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}
			opacity={interpolate(s, [0, 0.25], [0, 1], {extrapolateRight: 'clamp'})}
		/>
	);

	return (
		<svg viewBox="0 0 720 430" role="img" aria-label="Limiting reagent fully used, excess reagent left over" style={{width: '100%'}}>
			{/* LEFT: limiting reagent — 4 particles, all consumed (none left) */}
			<text x={150} y={90} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={labelOpacity(8)}>limiting</text>
			<text x={150} y={118} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={600} opacity={labelOpacity(14)}>all used up</text>
			{[0, 1, 2, 3].map((i) => {
				// these fade OUT as they react (consumed)
				const s = pop(i, 16);
				const consume = interpolate(frame, [70, 88], [1, 0.12], clampOpts);
				return (
					<g key={i} opacity={frame < 70 ? 1 : consume}>
						{dot(110 + (i % 2) * 60, 170 + Math.floor(i / 2) * 60, 14, TOK.chem2, s)}
					</g>
				);
			})}

			{/* MIDDLE: product forms */}
			<text x={360} y={90} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={labelOpacity(11)}>product</text>
			{[0, 1, 2, 3].map((i) => {
				const s = pop(i, 72);
				return <g key={i}>{dot(330 + (i % 2) * 60, 170 + Math.floor(i / 2) * 60, 15, '#b98a3a', s)}</g>;
			})}

			{/* RIGHT: excess reagent — 7 particles, 3 left over (glowing) */}
			<text x={570} y={90} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={labelOpacity(14)}>excess</text>
			<text x={570} y={118} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={600} opacity={labelOpacity(20)}>some left over</text>
			{[0, 1, 2, 3, 4, 5, 6].map((i) => {
				const s = pop(i, 16);
				const leftover = i >= 4; // last 3 remain after reaction
				const consumed = !leftover && frame >= 70 ? interpolate(frame, [70, 88], [1, 0.12], clampOpts) : 1;
				return (
					<g key={i} opacity={consumed}>
						{dot(520 + (i % 3) * 50, 165 + Math.floor(i / 3) * 55, 14, TOK.amber, s, leftover ? {glow: leftoverGlow} : undefined)}
					</g>
				);
			})}

			<line x1={250} y1={140} x2={250} y2={330} stroke={TOK.rule} strokeWidth={2} strokeDasharray="8 8" />
			<line x1={470} y1={140} x2={470} y2={330} stroke={TOK.rule} strokeWidth={2} strokeDasharray="8 8" />

			<text x={360} y={400} textAnchor="middle" fill={TOK.inkDim} fontSize={23} fontWeight={700} opacity={verdictOpacity}>
				the limiting reagent runs out first and caps the product
			</text>
		</svg>
	);
};
