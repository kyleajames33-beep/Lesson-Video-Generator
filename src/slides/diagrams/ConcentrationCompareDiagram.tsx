// ConcentrationCompareDiagram — two identical beakers at the same liquid
// level, one dilute (few solute particles) and one concentrated (many of
// the same particles). Teaches that concentration is about crowding, not
// total volume. Built with TOK tokens to match the light/chem palette.
//
// Beat plan (frames @ 30fps):
//   0    beakers + liquid fade in
//   14   labels reveal
//   20   particles spring in, staggered (more on the concentrated side)
//   90   verdict reveals

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// Same beaker, same liquid level; only particle COUNT differs.
const DILUTE = 5;
const CONCENTRATED = 16;

export const ConcentrationCompareDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const beakerOpacity = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const labelOpacity = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);
	const verdictOpacity = interpolate(frame, [90, 106], [0, 1], clampOpts);

	const pScale = (i: number) => {
		const p = spring({frame: frame - 20 - i * 2, fps, config: {damping: 13, stiffness: 240, mass: 0.6}});
		return Math.max(0, p);
	};

	// scatter particle positions inside a beaker's liquid region
	const positions = (n: number, baseX: number) => {
		const out: {x: number; y: number}[] = [];
		const cols = Math.ceil(Math.sqrt(n));
		for (let i = 0; i < n; i++) {
			const col = i % cols;
			const row = Math.floor(i / cols);
			// pseudo-random jitter from index so it reads as a liquid, not a grid
			const jx = ((i * 37) % 13) - 6;
			const jy = ((i * 53) % 13) - 6;
			out.push({x: baseX + 34 + col * 30 + jx, y: 250 + row * 30 + jy});
		}
		return out;
	};

	const Beaker = ({baseX, n, accent, label, labelDelay}: {baseX: number; n: number; accent: string; label: string; labelDelay: number}) => {
		const left = baseX;
		const right = baseX + 200;
		const top = 180;
		const bottom = 360;
		const liquidTop = 222;
		return (
			<g>
				{/* liquid */}
				<rect x={left + 6} y={liquidTop} width={(right - left) - 12} height={bottom - liquidTop - 4}
					fill={`${accent}1c`} opacity={beakerOpacity} />
				{/* same fill-level guide on both beakers */}
				<line x1={left + 6} y1={liquidTop} x2={right - 6} y2={liquidTop}
					stroke={accent} strokeWidth={2} strokeDasharray="6 6" opacity={beakerOpacity * 0.6} />
				{/* beaker outline */}
				<path d={`M ${left} ${top} L ${left} ${bottom} L ${right} ${bottom} L ${right} ${top}`}
					fill="none" stroke={TOK.inkDim} strokeWidth={3.5} strokeLinejoin="round" strokeLinecap="round" opacity={beakerOpacity} />
				{/* spout */}
				<path d={`M ${left} ${top} l -12 -8`} fill="none" stroke={TOK.inkDim} strokeWidth={3.5} strokeLinecap="round" opacity={beakerOpacity} />
				{/* particles */}
				{positions(n, baseX).map((p, i) => {
					const s = pScale(i);
					return (
						<circle key={i} cx={p.x} cy={p.y} r={8}
							fill={accent} stroke={TOK.bgLift} strokeWidth={1.5}
							transform={`translate(${p.x},${p.y}) scale(${s}) translate(${-p.x},${-p.y})`}
							opacity={interpolate(s, [0, 0.25], [0, 1], {extrapolateRight: 'clamp'})} />
					);
				})}
				<text x={(left + right) / 2} y={150} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800} opacity={labelOpacity(labelDelay)}>
					{label}
				</text>
			</g>
		);
	};

	return (
		<svg viewBox="0 0 720 440" role="img" aria-label="Dilute versus concentrated solution" style={{width: '100%'}}>
			<Beaker baseX={70} n={DILUTE} accent={TOK.chem2} label="dilute" labelDelay={14} />
			<Beaker baseX={450} n={CONCENTRATED} accent={TOK.amber} label="concentrated" labelDelay={18} />
			<line x1={360} y1={150} x2={360} y2={368} stroke={TOK.rule} strokeWidth={2} strokeDasharray="10 10" opacity={beakerOpacity} />
			<text x={360} y={418} textAnchor="middle" fill={TOK.inkDim} fontSize={24} fontWeight={700} opacity={verdictOpacity}>
				same volume — more particles means higher concentration
			</text>
		</svg>
	);
};
