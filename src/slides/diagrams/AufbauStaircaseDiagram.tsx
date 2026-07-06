// AufbauStaircaseDiagram — the subshell filling order. Rows of s/p/d/f
// blocks with diagonal arrows showing 1s → 2s → 2p → 3s → 3p → 4s → 3d …
// Teaches the Aufbau diagonal rule. TOK palette.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// grid: row = principal n (1..4 shown), columns = s,p,d,f
const SUBSHELLS: {n: number; l: number; name: string}[] = [
	{n: 1, l: 0, name: '1s'},
	{n: 2, l: 0, name: '2s'}, {n: 2, l: 1, name: '2p'},
	{n: 3, l: 0, name: '3s'}, {n: 3, l: 1, name: '3p'}, {n: 3, l: 2, name: '3d'},
	{n: 4, l: 0, name: '4s'}, {n: 4, l: 1, name: '4p'}, {n: 4, l: 2, name: '4d'},
];

// Aufbau fill order for reveal sequence
const ORDER = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '4d'];

const COL_X = [140, 280, 420, 560];
const rowY = (n: number) => 80 + (n - 1) * 80;

export const AufbauStaircaseDiagram = () => {
	const frame = useCurrentFrame();
	const fade = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const label = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);

	// reveal blocks in Aufbau order
	const orderIndex = (name: string) => ORDER.indexOf(name);

	return (
		<svg viewBox="0 0 720 420" role="img" aria-label="Aufbau subshell filling order" style={{width: '100%'}}>
			{/* column headers */}
			{['s', 'p', 'd', 'f'].map((c, i) => (
				<text key={c} x={COL_X[i] + 40} y={56} textAnchor="middle" fill={TOK.inkMute} fontSize={20} fontWeight={700} opacity={label(6)}>{c}</text>
			))}

			{/* blocks */}
			{SUBSHELLS.map((ss) => {
				const x = COL_X[ss.l], y = rowY(ss.n);
				const oi = orderIndex(ss.name);
				const reveal = interpolate(frame, [24 + oi * 8, 24 + oi * 8 + 12], [0, 1], clampOpts);
				return (
					<g key={ss.name} opacity={reveal}>
						<rect x={x} y={y} width={80} height={56} rx={8} fill={`${TOK.chem3}` } stroke={TOK.chem2} strokeWidth={2.5} />
						<text x={x + 40} y={y + 36} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{ss.name}</text>
					</g>
				);
			})}

			{/* diagonal fill arrows (s of each row down-left across) — illustrate the diagonal rule */}
			{[2, 3, 4].map((n, i) => {
				const x1 = COL_X[Math.min(n - 1, 2)] + 40, y1 = rowY(n) - 6;
				const x2 = COL_X[0] + 40, y2 = rowY(n) + 30;
				const draw = interpolate(frame, [40 + i * 10, 56 + i * 10], [0, 1], clampOpts);
				return <line key={n} x1={x1} y1={y1} x2={x1 + (x2 - x1) * draw} y2={y1 + (y2 - y1) * draw} stroke={TOK.amber} strokeWidth={3} opacity={fade * 0.6} strokeDasharray="6 5" />;
			})}

			<text x={360} y={404} textAnchor="middle" fill={TOK.chem1} fontSize={22} fontWeight={800} opacity={label(120)}>
				fill low-energy subshells first: 1s, 2s, 2p, 3s, 3p, 4s, 3d …
			</text>
		</svg>
	);
};
