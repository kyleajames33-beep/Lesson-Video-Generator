// CFTRDiagram — airway lining cells on two stone plinths, healthy beside
// cystic fibrosis. In the healthy cell the CFTR channel lets chloride out and
// water follows by osmosis, keeping the mucus thin. In the CF cell the channel
// is misfolded and broken down before it reaches the surface, so chloride
// stays in, no water follows and the mucus thickens and traps bacteria. The
// cause-and-effect chain builds as pills along the bottom, in the scene's
// order, so the thick mucus is shown as the consequence, never the cause.
//
// Beats are frames after `delay`. Hold: ions and water keep cycling on the
// healthy side; the CF side's trapped ions and bacteria jostle.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, Pill, ease, fadeAt, mix, textWidth} from './shared';

export type CFTRProps = {
	mutationAt: number;
	misfoldAt: number;
	chain: {text: string; at: number}[];
	thickAt: number;
	bacteriaAt: number;
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8cf';
const W = 760;
const H = 530;
const TOP = 236; // apical membrane
const BOT = 356;

export const CFTRDiagram = ({mutationAt, misfoldAt, chain, thickAt, bacteriaAt, notes = [], delay = 62}: CFTRProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();

	const panel = (cf: boolean) => {
		const cx = cf ? 568 : 192;
		const mucusH = cf ? 26 + 70 * ease(frame, thickAt, thickAt + 80) : 26;
		const thickT = cf ? ease(frame, thickAt, thickAt + 80) : 0;
		const mucusCol = mix('#d9ecf5', '#c9c77a', thickT);
		const cells = [-94, 0, 94];
		const flow = !cf;
		return (
			<g key={cf ? 'cf' : 'ok'}>
				<text x={cx} y={34} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>{cf ? 'Cystic fibrosis' : 'Working CFTR'}</text>
				{cf && <text x={cx} y={56} textAnchor="middle" fill={COL.red} fontSize={15} fontWeight={800} opacity={fadeAt(frame, mutationAt, 12)}>CFTR gene mutation</text>}
				<DioramaPlinth id={`${ID}${cf ? 1 : 0}`} cx={cx} cy={BOT + 8} rx={166} />
				{/* mucus */}
				<rect x={cx - 142} y={TOP - mucusH} width={284} height={mucusH + 4} rx={10} fill={mucusCol} opacity={0.9} stroke={mix('#b5d3e3', '#a9a55a', thickT)} />
				<text x={cx + 136} y={TOP - mucusH + 18} textAnchor="end" fill={thickT > 0.5 ? '#6f6b2a' : '#4d7f99'} fontSize={15} fontWeight={800}>{cf && mucusH > 60 ? 'thick, sticky mucus' : 'thin mucus'}</text>
				{/* cells */}
				{cells.map((dx, k) => (
					<g key={k}>
						<rect x={cx + dx - 44} y={TOP} width={88} height={BOT - TOP} rx={16} fill={`url(#${ID}-cell)`} stroke="#d2a9b6" strokeWidth={2} />
						<circle cx={cx + dx} cy={TOP + 78} r={14} fill="#c98aa0" opacity={0.7} />
					</g>
				))}
				{/* channel */}
				{!cf ? (
					<g>
						<rect x={cx - 12} y={TOP - 8} width={9} height={22} rx={3} fill={theme.accent} />
						<rect x={cx + 3} y={TOP - 8} width={9} height={22} rx={3} fill={theme.accent} />
						<line x1={cx - 14} y1={TOP + 4} x2={cx - 60} y2={TOP + 40} stroke={theme.accent} strokeWidth={1.5} />
						<text x={cx - 64} y={TOP + 56} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800}>CFTR channel</text>
					</g>
				) : (
					<g>
						{/* misfolded protein, broken down inside the cell */}
						<g opacity={fadeAt(frame, misfoldAt, 12) * (1 - fadeAt(frame, misfoldAt + 110, 30))}>
							<path d={`M ${cx - 16} ${TOP + 40} q 8 -14 16 -2 q 10 -12 14 4 q 6 12 -8 14 q -12 10 -18 -4 q -12 -2 -4 -12 Z`} fill={COL.red} opacity={0.85} />
							<text x={cx} y={TOP + 76} textAnchor="middle" fill={COL.red} fontSize={14} fontWeight={800}>misfolded</text>
						</g>
						<g opacity={fadeAt(frame, misfoldAt + 110, 20)}>
							<rect x={cx - 12} y={TOP - 4} width={24} height={8} rx={3} fill="none" stroke={COL.red} strokeDasharray="4 3" strokeWidth={2} />
							<text x={cx} y={TOP + 32} textAnchor="middle" fill={COL.red} fontSize={14} fontWeight={800}>no channel</text>
						</g>
					</g>
				)}
				{/* chloride and water */}
				{Array.from({length: 5}, (_, k) => {
					const period = 110;
					if (flow) {
						const u = (((frame + k * 22) % period) + period) % period / period;
						const x = cx + (u > 0.35 ? (k - 2) * 50 * (u - 0.35) : 0);
						const y = u < 0.35 ? TOP + 60 - (u / 0.35) * 64 : TOP - 4 - (u - 0.35) * 30;
						const o = Math.min(1, u / 0.1, (1 - u) / 0.15);
						return (
							<g key={k} opacity={o}>
								<circle cx={x} cy={y} r={11} fill={`url(#${ID}-g-cl)`} stroke="rgba(0,0,0,0.25)" />
								<text x={x} y={y + 3.5} textAnchor="middle" fill="#fff" fontSize={11} fontWeight={800}>Cl⁻</text>
								<path d={`M ${x + 20} ${y + 4} q 6 8 0 13 q -6 -5 0 -13 Z`} fill={`url(#${ID}-g-w)`} opacity={u > 0.25 ? 1 : 0} />
							</g>
						);
					}
					const x = cx + (k - 2) * 30 + idleBob(frame, k, 3);
					const y = TOP + 108 + idleBob(frame, k + 9, 3);
					return (
						<g key={k} opacity={fadeAt(frame, chain[0]?.at ?? 0, 12)}>
							<circle cx={x} cy={y} r={11} fill={`url(#${ID}-g-cl)`} stroke="rgba(0,0,0,0.25)" />
							<text x={x} y={y + 3.5} textAnchor="middle" fill="#fff" fontSize={11} fontWeight={800}>Cl⁻</text>
						</g>
					);
				})}
				{/* bacteria trapped in thick mucus */}
				{cf && Array.from({length: 6}, (_, k) => (
					<rect
						key={k}
						x={cx - 120 + k * 44 + idleBob(frame, k + 3, 3)}
						y={TOP - 60 + (k % 2) * 22 + idleBob(frame, k + 12, 2)}
						width={18}
						height={8}
						rx={4}
						fill={COL.violet}
						opacity={fadeAt(frame, bacteriaAt + k * 6, 10)}
					/>
				))}
			</g>
		);
	};

	// Chain of consequences, as pills with arrows, wrapped onto two rows if needed.
	const size = 15;
	const widths = chain.map((c) => textWidth(c.text, size) + 22);
	const rows: number[][] = [[]];
	let rowW = 0;
	widths.forEach((w, i) => {
		if (rowW + w + 30 > 720 && rows[rows.length - 1].length) {
			rows.push([]);
			rowW = 0;
		}
		rows[rows.length - 1].push(i);
		rowW += w + 30;
	});

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Cystic fibrosis: no CFTR channel, no chloride out, no water out, thick mucus" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{cl: COL.green, w: '#5aa7e0'}} />
			<defs>
				<linearGradient id={`${ID}-cell`} x1="0" x2="1" y1="0" y2="1">
					<stop offset="0%" stopColor="#fff5f8" />
					<stop offset="100%" stopColor="#f3d3dd" />
				</linearGradient>
			</defs>
			<g opacity={fadeAt(frame, 0, 16)}>
				{panel(false)}
				{panel(true)}
			</g>
			{rows.map((row, r) => {
				const total = row.reduce((a, i) => a + widths[i], 0) + (row.length - 1) * 30;
				let x = W / 2 - total / 2;
				return row.map((i) => {
					const el = (
						<g key={i} opacity={fadeAt(frame, chain[i].at, 12)}>
							<Pill x={x} y={474 + r * 36} text={chain[i].text} color={i === chain.length - 1 ? COL.red : TOK.inkDim} size={size} anchor="start" />
							{i < chain.length - 1 && <text x={x + widths[i] + 15} y={480 + r * 36} textAnchor="middle" fill={TOK.inkMute} fontSize={18} fontWeight={800}>→</text>}
						</g>
					);
					x += widths[i] + 30;
					return el;
				});
			})}
			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 8 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
