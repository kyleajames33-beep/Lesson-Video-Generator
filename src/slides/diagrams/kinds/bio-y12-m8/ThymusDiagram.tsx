// ThymusDiagram — self-tolerance by clonal deletion, on a stone plinth.
// Developing T cells stream through the thymus. Each carries a receptor; the
// ones whose receptor reacts strongly with a self-protein (marked by the red
// receptor) are destroyed at the checkpoint, and only the rest are released.
// Which cells are deleted is decided per cell from its receptor, so the
// released stream never contains a self-reactive cell. The ways tolerance can
// break then build as pills underneath.
//
// Beats are frames after `delay`. Hold: the stream keeps flowing through.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, Pill, fadeAt, hash01, textWidth} from './shared';

export type ThymusProps = {
	streamAt: number;
	deletionAt: number;
	routesTitle?: string;
	routes: {text: string; at: number}[];
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8thy';
const W = 760;
const H = 530;
const Y = 180;
const X0 = 30, XC = 380, X1 = 730;
const PERIOD = 300;
const N = 14;

export const ThymusDiagram = ({streamAt, deletionAt, routesTitle, routes, notes = [], delay = 62}: ThymusProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const on = fadeAt(frame, streamAt, 14);
	const deleting = frame >= deletionAt;

	const cells = Array.from({length: N}, (_, k) => {
		const selfReactive = hash01(k * 5.7) < 0.35;
		const u = ((((frame - streamAt) + (k * PERIOD) / N) % PERIOD) + PERIOD) % PERIOD / PERIOD;
		const x = X0 + (X1 - X0) * u;
		const y = Y + (hash01(k * 2.3) - 0.5) * 50 + idleBob(frame, k, 2);
		// deleted just past the checkpoint (only once deletion is being shown)
		const past = x - XC;
		const dying = selfReactive && deleting && past > 0 ? Math.min(1, past / 40) : 0;
		if (dying >= 1) return null;
		const edge = Math.min(1, (x - X0) / 30, (X1 - x) / 30);
		return (
			<g key={k} opacity={on * edge * (1 - dying)} transform={`translate(${x} ${y}) scale(${1 + dying * 0.4})`}>
				<circle r={15} fill={`url(#${ID}-g-t)`} stroke="rgba(0,0,0,0.25)" />
				<path d="M 0 -15 L 0 -23 M 0 -23 L -5 -28 M 0 -23 L 5 -28" stroke={selfReactive ? COL.red : theme.accent} strokeWidth={3} strokeLinecap="round" fill="none" />
				{dying > 0 && <path d="M -7 -7 L 7 7 M 7 -7 L -7 7" stroke={COL.red} strokeWidth={3} strokeLinecap="round" />}
			</g>
		);
	});

	const size = 15;
	const widths = routes.map((r) => textWidth(r.text, size) + 22);
	const rows: number[][] = [[]];
	let rowW = 0;
	widths.forEach((w, i) => {
		if (rowW + w + 16 > 720 && rows[rows.length - 1].length) {
			rows.push([]);
			rowW = 0;
		}
		rows[rows.length - 1].push(i);
		rowW += w + 16;
	});

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Clonal deletion in the thymus removes self-reactive T cells" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{t: '#9fc3e8', thy: '#f1d6c4'}} />
			<g opacity={on}>
				<DioramaPlinth id={`${ID}p`} cx={XC} cy={Y + 54} rx={170} />
				<ellipse cx={XC} cy={Y} rx={150} ry={70} fill={`url(#${ID}-g-thy)`} stroke="#d0a58c" strokeWidth={2} opacity={0.9} />
				<text x={XC} y={Y - 84} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>thymus</text>
				<line x1={XC} y1={Y - 66} x2={XC} y2={Y + 66} stroke={COL.red} strokeWidth={3} strokeDasharray="6 5" opacity={fadeAt(frame, deletionAt, 12)} />
				<text x={XC + 10} y={Y + 96} textAnchor="middle" fill={COL.red} fontSize={16} fontWeight={800} opacity={fadeAt(frame, deletionAt, 12)}>self-reactive T cells destroyed: clonal deletion</text>
				<text x={X0 + 10} y={Y - 50} fill={TOK.inkDim} fontSize={15} fontWeight={800}>developing T cells</text>
				<text x={X1 - 10} y={Y - 50} textAnchor="end" fill={theme.accent} fontSize={15} fontWeight={800} opacity={fadeAt(frame, deletionAt + 60, 12)}>released: tolerant</text>
			</g>
			{cells}
			<g opacity={on}>
				<g transform={`translate(${W / 2 - 150} 352)`}>
					<path d="M 0 -4 L 0 -10 M 0 -10 L -5 -15 M 0 -10 L 5 -15" stroke={theme.accent} strokeWidth={3} strokeLinecap="round" />
					<text x={12} y={-4} fill={TOK.inkDim} fontSize={14} fontWeight={700}>ignores self</text>
					<path d="M 140 -4 L 140 -10 M 140 -10 L 135 -15 M 140 -10 L 145 -15" stroke={COL.red} strokeWidth={3} strokeLinecap="round" />
					<text x={152} y={-4} fill={TOK.inkDim} fontSize={14} fontWeight={700}>reacts against self</text>
				</g>
			</g>

			{routesTitle && <text x={W / 2} y={390} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, routes[0]?.at ?? 0, 12)}>{routesTitle}</text>}
			{rows.map((row, r) => {
				const total = row.reduce((a, i) => a + widths[i], 0) + (row.length - 1) * 16;
				let x = W / 2 - total / 2;
				return row.map((i) => {
					const el = (
						<g key={i} opacity={fadeAt(frame, routes[i].at, 12)}>
							<Pill x={x} y={424 + r * 36} text={routes[i].text} color={COL.red} size={size} anchor="start" />
						</g>
					);
					x += widths[i] + 16;
					return el;
				});
			})}
			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 8 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
