// DnaHelixDiagram — a labelled DNA double helix. Two antiparallel sugar-
// phosphate backbones sweep down the frame as gentle sine curves; base-pair
// rungs connect them, coloured by pair type (A–T one colour, C–G another).
// Rungs reveal top→bottom. Fixed example (not data-driven beyond {type}).
//
// Beat plan (frames @ 30fps):
//   0    backbones draw in (left→down)
//   18+  rungs fade in one by one, top to bottom
//   ~60  labels + legend settle

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// Fixed base sequence read down the left strand; the right strand is the
// Watson–Crick complement. AT pairs vs CG pairs get different colours.
const LEFT_BASES = ['A', 'T', 'G', 'C', 'A', 'C', 'G', 'T', 'A', 'G'] as const;
const COMPLEMENT: Record<string, string> = {A: 'T', T: 'A', G: 'C', C: 'G'};

export const DnaHelixDiagram = () => {
	const frame = useCurrentFrame();
	const theme = useAccent();

	const n = LEFT_BASES.length;
	const topY = 70, botY = 410;
	const cx = 360;          // helix centre line
	const amp = 120;         // horizontal sweep amplitude
	const turns = 1.6;       // how many half-twists across the height

	// Backbone x at a given vertical fraction t (0..1).
	const phase = (t: number) => t * turns * Math.PI * 2;
	const leftX = (t: number) => cx - amp * Math.cos(phase(t));
	const rightX = (t: number) => cx + amp * Math.cos(phase(t));
	const yAt = (t: number) => topY + t * (botY - topY);

	// Build smooth backbone paths.
	const SAMPLES = 60;
	const buildPath = (xfn: (t: number) => number) => {
		let d = '';
		for (let i = 0; i <= SAMPLES; i++) {
			const t = i / SAMPLES;
			d += `${i === 0 ? 'M' : 'L'} ${xfn(t).toFixed(1)} ${yAt(t).toFixed(1)} `;
		}
		return d;
	};
	const leftPath = buildPath(leftX);
	const rightPath = buildPath(rightX);

	// Backbone draw-in.
	const backboneLen = botY - topY + amp * 4;
	const draw = interpolate(frame, [0, 22], [0, 1], clampOpts);

	const atColor = theme.accent;
	const cgColor = theme.accent2;

	return (
		<svg viewBox="0 0 720 470" role="img" aria-label="DNA double helix with base pairs" style={{width: '100%'}}>
			{/* backbones */}
			<path d={leftPath} fill="none" stroke={TOK.inkDim} strokeWidth={7} strokeLinecap="round"
				strokeDasharray={backboneLen} strokeDashoffset={backboneLen * (1 - draw)} />
			<path d={rightPath} fill="none" stroke={TOK.inkDim} strokeWidth={7} strokeLinecap="round"
				strokeDasharray={backboneLen} strokeDashoffset={backboneLen * (1 - draw)} />

			{/* base-pair rungs */}
			{LEFT_BASES.map((b, i) => {
				const t = (i + 0.5) / n;
				const lx = leftX(t), rx = rightX(t), y = yAt(t);
				const comp = COMPLEMENT[b];
				const isAT = b === 'A' || b === 'T';
				const color = isAT ? atColor : cgColor;
				const start = 18 + i * 4;
				const op = interpolate(frame, [start, start + 12], [0, 1], clampOpts);
				const mid = (lx + rx) / 2;
				return (
					<g key={i} opacity={op}>
						<line x1={lx} y1={y} x2={mid} y2={y} stroke={color} strokeWidth={6} strokeLinecap="round" />
						<line x1={mid} y1={y} x2={rx} y2={y} stroke={color} strokeWidth={6} strokeLinecap="round" opacity={0.7} />
						<circle cx={lx} cy={y} r={13} fill={color} />
						<circle cx={rx} cy={y} r={13} fill={color} opacity={0.7} />
						<text x={lx} y={y + 5} textAnchor="middle" fill={TOK.bgLift} fontSize={15} fontWeight={800}>{b}</text>
						<text x={rx} y={y + 5} textAnchor="middle" fill={TOK.bgLift} fontSize={15} fontWeight={800}>{comp}</text>
					</g>
				);
			})}

			{/* strand labels */}
			<g opacity={interpolate(frame, [40, 54], [0, 1], clampOpts)} fontSize={18} fontWeight={700} fill={TOK.inkDim}>
				<text x={leftX(0) - 22} y={topY - 14} textAnchor="middle">5′</text>
				<text x={rightX(0) + 22} y={topY - 14} textAnchor="middle">3′</text>
			</g>
			<text x={cx} y={448} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}
				opacity={interpolate(frame, [46, 60], [0, 1], clampOpts)}>
				antiparallel sugar–phosphate backbones
			</text>

			{/* legend */}
			<g opacity={interpolate(frame, [54, 68], [0, 1], clampOpts)} fontSize={17} fontWeight={600} fill={TOK.inkDim}>
				<rect x={210} y={20} width={20} height={9} rx={4} fill={atColor} />
				<text x={238} y={29}>A–T pair</text>
				<rect x={380} y={20} width={20} height={9} rx={4} fill={cgColor} />
				<text x={408} y={29}>C–G pair</text>
			</g>
		</svg>
	);
};
