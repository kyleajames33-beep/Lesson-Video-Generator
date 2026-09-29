// ColumnDiagram (bio11m2Column) — the cohesion-tension theory, root to leaf.
//
// A leaf at the top loses water vapour through a stoma (transpiration). Below
// it a xylem vessel holds one continuous column of water molecules (CPK
// balls) joined by hydrogen bonds. At the bottom a root hair cell in a dish of
// soil takes in water by osmosis. Beats: `vapour` (evaporation starts at the
// leaf), `tension` (the pull: the whole column starts moving up together),
// `cohesion` (the hydrogen bonds light up amber: the column holds as one),
// `osmosis` (soil water enters the root hair and joins the column),
// `minerals` (dissolved ions ride up in the stream). Tags label the parts. All
// text from props. Hold: the column keeps rising, vapour keeps leaving.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, Molecule, idleBob, idlePulse} from '../../diorama';
import {Arrow, COL, GLOSS, GlossDefs, H, LeafShape, Notes, Tag, Title, W, clamp, fadeAt, popAt, type Note, type Tone} from './shared';

type Anchor = 'vapour' | 'stoma' | 'tension' | 'cohesion' | 'column' | 'osmosis' | 'roothair' | 'minerals';
export type ColumnProps = {
	title?: string;
	at?: number;
	vapour?: number;
	tension?: number;
	cohesion?: number;
	osmosis?: number;
	minerals?: number;
	tags?: {text: string; at: number; anchor: Anchor; tone?: Tone}[];
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2col';
const OFF = 1e9;

export const ColumnDiagram = ({title, at = 0, vapour = OFF, tension = OFF, cohesion = OFF, osmosis = OFF, minerals = OFF, tags = [], notes = [], delay = 62}: ColumnProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 48 : 6;
	const footH = notes.length * 25;
	const cx = 330;
	const leafY = top + 62;
	const colTop = top + 104;
	const colBot = H - 150 - footH;
	const rootY = colBot + 38;
	const gap = 30;
	const moving = frame >= tension;
	const speed = 0.55;
	const offset = moving ? ((frame - tension) * speed) % gap : 0;
	const bondOn = fadeAt(frame, cohesion, 16);
	const vOn = fadeAt(frame, vapour, 14);
	const oOn = fadeAt(frame, osmosis, 14);
	const mOn = fadeAt(frame, minerals, 14);
	const n = Math.floor((colBot - colTop) / gap) + 1;
	const pulse = idlePulse(frame);

	const anchors: Record<Anchor, {x: number; y: number}> = {
		vapour: {x: cx + 150, y: leafY + 6},
		stoma: {x: cx + 96, y: leafY + 22},
		tension: {x: cx + 20, y: colTop + 30},
		cohesion: {x: cx + 12, y: (colTop + colBot) / 2},
		column: {x: cx - 22, y: (colTop + colBot) / 2 + 30},
		osmosis: {x: cx - 120, y: rootY + 12},
		roothair: {x: cx - 90, y: rootY + 4},
		minerals: {x: cx - 14, y: colBot - 60},
	};
	const tagX = (a: Anchor) => (['osmosis', 'roothair', 'column', 'minerals'].includes(a) ? 130 : 590);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Cohesion-tension'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['O', 'H']} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={Math.min(1, popAt(frame, fps, at) * 1.3)}>
				{/* soil dish on a plinth */}
				<DioramaPlinth id={`${ID}p`} cx={cx - 40} cy={rootY + 44} rx={200} />
				<path d={`M ${cx - 220} ${rootY - 26} L ${cx + 140} ${rootY - 26} L ${cx + 130} ${rootY + 40} L ${cx - 210} ${rootY + 40} Z`} fill="#cfe6f5" opacity={0.5} stroke="#8fa9b6" strokeWidth={2} />
				{Array.from({length: 16}, (_, k) => (
					<ellipse key={k} cx={cx - 200 + (k % 8) * 42 + (k > 7 ? 18 : 0)} cy={rootY - 6 + (k > 7 ? 26 : 0)} rx={16} ry={10} fill="#b89a74" stroke="#8a6a48" strokeWidth={1} opacity={0.85} />
				))}
				{/* root with a root hair */}
				<rect x={cx - 30} y={rootY - 30} width={170} height={40} rx={20} fill="#efe3c6" stroke="#b8a070" strokeWidth={2} />
				<path d={`M ${cx - 20} ${rootY - 4} L ${cx - 150} ${rootY + 10}`} stroke="#efe3c6" strokeWidth={10} strokeLinecap="round" />
				<path d={`M ${cx - 20} ${rootY - 4} L ${cx - 150} ${rootY + 10}`} stroke="#b8a070" strokeWidth={12} strokeLinecap="round" opacity={0.35} />
				{/* xylem vessel */}
				<rect x={cx - 24} y={colTop} width={48} height={colBot - colTop + 20} fill="#eef6fb" />
				{[-1, 1].map((s) => (
					<g key={s}>
						<rect x={s < 0 ? cx - 30 : cx + 24} y={colTop} width={6} height={colBot - colTop + 20} fill={COL.xylem} />
						{Array.from({length: Math.floor((colBot - colTop) / 16)}, (_, k) => <rect key={k} x={s < 0 ? cx - 26 : cx + 20} y={colTop + 6 + k * 16} width={6} height={6} rx={2} fill={COL.lignin} />)}
					</g>
				))}
				{/* leaf */}
				<g transform={`translate(0, ${idleBob(frame, 3, 1)})`}>
					<LeafShape x={cx - 150} y={leafY} len={300} angle={0} fill={COL.leaf} />
					<ellipse cx={cx + 96} cy={leafY + 22} rx={9} ry={5} fill="#2f5a1e" />
				</g>
			</g>
			{/* water column */}
			{Array.from({length: n + 1}, (_, k) => {
				const y = colBot - k * gap - offset;
				if (y < colTop - 4 || y > colBot + 10) return null;
				const nextY = y - gap;
				return (
					<g key={k}>
						{nextY >= colTop - 4 && (
							<line x1={cx} y1={y - 8} x2={cx} y2={nextY + 10} stroke={bondOn > 0 ? TOK.amber : '#9ab8cc'} strokeWidth={bondOn > 0 ? 3 : 2} strokeDasharray="3 3" opacity={0.5 + 0.5 * bondOn * (0.6 + 0.4 * pulse)} />
						)}
						<Molecule id={ID} atoms={['O', 'H', 'H']} x={cx} y={y} r={8} />
					</g>
				);
			})}
			{/* minerals riding up */}
			{mOn > 0 && Array.from({length: 4}, (_, k) => {
				const y = colBot - (((frame - minerals) * speed + k * 70) % (colBot - colTop));
				return <circle key={k} cx={cx + 13} cy={y} r={5} fill={`url(#${ID}-ball-mineral)`} opacity={mOn} />;
			})}
			{/* pull arrows at the top */}
			{moving && (
				<g opacity={fadeAt(frame, tension, 14)}>
					<Arrow x1={cx - 42} y1={colTop + 70} x2={cx - 42} y2={colTop + 10} color={TOK.amber} width={4} head={12} />
					<Arrow x1={cx + 42} y1={colTop + 70} x2={cx + 42} y2={colTop + 10} color={TOK.amber} width={4} head={12} />
				</g>
			)}
			{/* vapour leaving through the stoma */}
			{vOn > 0 && Array.from({length: 5}, (_, k) => {
				const t = ((frame * 0.012 + k / 5) % 1);
				return <circle key={k} cx={cx + 96 + t * 120} cy={leafY + 26 + t * 20 - Math.sin(t * 5) * 6} r={5} fill={`url(#${ID}-ball-vapour)`} opacity={vOn * Math.sin(t * Math.PI)} />;
			})}
			{/* osmosis into the root hair */}
			{oOn > 0 && Array.from({length: 5}, (_, k) => {
				const t = ((frame * 0.01 + k / 5) % 1);
				const x = t < 0.35 ? cx - 200 + t / 0.35 * 50 : cx - 150 + (t - 0.35) / 0.65 * 150;
				const y = t < 0.35 ? rootY + 30 - t / 0.35 * 20 : rootY + 10 - (t - 0.35) / 0.65 * 14;
				return <circle key={k} cx={x} cy={y} r={5} fill={`url(#${ID}-ball-water)`} opacity={oOn * Math.min(1, Math.sin(t * Math.PI) * 3)} />;
			})}
			{tags.map((t, i) => {
				const a = anchors[t.anchor];
				const x = tagX(t.anchor);
				const y = t.anchor === 'vapour' ? top + 18 : t.anchor === 'stoma' ? leafY + 56 : t.anchor === 'tension' ? colTop + 96 : t.anchor === 'column' ? a.y - 80 : t.anchor === 'osmosis' || t.anchor === 'roothair' ? rootY + 64 : a.y;
				return <Tag key={i} frame={frame} fps={fps} at={t.at} x={x} y={y} text={t.text} tone={t.tone} accent={theme.accent} tx={a.x} ty={a.y} size={18} />;
			})}
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};
