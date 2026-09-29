// TwoHitDiagram — gene copies as the two keepers of a gate on a stone plinth,
// with a crowd of cells waiting behind it. Mutations strike copies one at a
// time. The rule for losing control comes from the gene type, not from the
// timeline: an oncogene (gain of function, dominant) loses control after ONE
// hit, because that copy is jammed on; a tumour suppressor (loss of function,
// recessive) only after BOTH copies are hit, because one working copy still
// holds the gate. When control is lost the gate opens and the cells stream
// through and keep dividing.
//
// Beats are frames after `delay`. Hold: the crowd jostles, a lost gate's
// cells keep dividing (up to a cap), the keepers breathe.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, ease, fadeAt, hash01} from './shared';

type Hit = {copy: 0 | 1; at: number; label?: string};
export type TwoHitPanel = {
	title: string;
	type: 'oncogene' | 'suppressor';
	at: number;
	hits: Hit[];
	copyLabel?: string;
	heldLabel?: string;
	lostLabel: string;
};
export type TwoHitProps = {panels: TwoHitPanel[]; notes?: Note[]; delay?: number};

const ID = 'b12m8hit';
const W = 760;
const H = 530;

export const TwoHitDiagram = ({panels, notes = [], delay = 62}: TwoHitProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const single = panels.length === 1;
	const s = single ? 1.45 : 1;

	const panel = (p: TwoHitPanel, i: number) => {
		const o = fadeAt(frame, p.at, 14);
		if (o <= 0) return null;
		const ox = single ? W / 2 : 190 + i * 380;
		const oy = single ? 300 : 300;
		const X = (x: number) => ox + x * s;
		const Y = (y: number) => oy + y * s;
		const hitAt = (c: 0 | 1) => p.hits.find((h) => h.copy === c)?.at;
		const hitT = (c: 0 | 1) => {
			const a = hitAt(c);
			return a === undefined ? 0 : fadeAt(frame, a, 10);
		};
		const needed = p.type === 'oncogene' ? 1 : 2;
		const hitsSoFar = p.hits.filter((h) => frame >= h.at).map((h) => h.at).sort((a, b) => a - b);
		const lostAt = hitsSoFar.length >= needed ? hitsSoFar[needed - 1] + 16 : null;
		const lost = lostAt === null ? 0 : ease(frame, lostAt, lostAt + 30);

		// crowd: 9 cells behind the gate; once lost they stream through and divide
		const cells = Array.from({length: 9}, (_, k) => ({x: -118 + (k % 3) * 24 + hash01(k + i * 9) * 8, y: -20 + Math.floor(k / 3) * 16 + hash01(k * 3 + i) * 6}));
		const divided = lostAt === null ? 0 : Math.min(10, Math.floor(Math.max(0, frame - lostAt - 30) / 45));
		const extra = Array.from({length: divided}, (_, k) => ({x: 58 + (k % 4) * 22 + hash01(k * 7 + i) * 8, y: -26 + Math.floor(k / 4) * 17 + hash01(k * 5) * 6}));

		const keeper = (c: 0 | 1) => {
			const x = c === 0 ? -34 : 34;
			const h = hitT(c);
			const jammed = p.type === 'oncogene' && h > 0.5;
			const dead = p.type === 'suppressor' && h > 0.5;
			const fill = jammed ? 'red' : dead ? 'grey' : 'keep';
			const bob = idleBob(frame, c + i * 2, 1.2);
			const a = hitAt(c);
			const bolt = a !== undefined ? fadeAt(frame, a - 10, 6) * (1 - fadeAt(frame, a + 8, 10)) : 0;
			return (
				<g key={c}>
					<g transform={`translate(${X(x)} ${Y(-28) + bob}) scale(${s})`} opacity={dead ? 0.55 + 0.45 * (1 - h) : 1}>
						<ellipse cx={0} cy={30} rx={16} ry={5} fill="rgba(40,36,30,0.22)" />
						<rect x={-13} y={-24} width={26} height={52} rx={13} fill={`url(#${ID}-g-${fill})`} stroke="rgba(0,0,0,0.25)" />
						{jammed && <text x={0} y={6} textAnchor="middle" fill="#fff" fontSize={12} fontWeight={800}>ON</text>}
						{dead && <path d="M -8 -6 L 8 10 M 8 -6 L -8 10" stroke="#fff" strokeWidth={3} strokeLinecap="round" />}
					</g>
					{bolt > 0 && (
						<path
							d={`M ${X(x + 14)} ${Y(-120)} L ${X(x - 2)} ${Y(-80)} L ${X(x + 8)} ${Y(-80)} L ${X(x - 6)} ${Y(-48)}`}
							stroke={TOK.amber}
							strokeWidth={4}
							fill="none"
							strokeLinejoin="round"
							opacity={bolt}
						/>
					)}
					<text x={X(x)} y={Y(34)} textAnchor="middle" fill={TOK.inkDim} fontSize={14} fontWeight={800}>{p.copyLabel ?? 'copy'} {c + 1}</text>
				</g>
			);
		};

		const hitLabels = p.hits.map((h, k) => (h.label ? (
			<text key={k} x={X(h.copy === 0 ? -34 : 34)} y={Y(-96) - k * 0} textAnchor={h.copy === 0 ? 'end' : 'start'} dx={h.copy === 0 ? 6 : -6} fill={TOK.amberInk} fontSize={15} fontWeight={800} opacity={fadeAt(frame, h.at, 10)}>
				{h.label}
			</text>
		) : null));

		const gateLift = lost * 34;
		const status = lost > 0.5 ? p.lostLabel : p.heldLabel ?? 'gate held: division controlled';
		return (
			<g key={i} opacity={o}>
				<text x={X(0)} y={single ? 40 : 60} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>{p.title}</text>
				<DioramaPlinth id={`${ID}${i}`} cx={X(0)} cy={Y(0)} rx={160 * s} />
				{/* gate posts + bar */}
				<rect x={X(-6)} y={Y(-70)} width={12 * s} height={70 * s} rx={4} fill={`url(#${ID}-post)`} />
				<rect x={X(-60)} y={Y(-50) - gateLift * s} width={120 * s} height={8 * s} rx={4} fill={lost > 0.5 ? COL.red : theme.accent} opacity={0.85} />
				{/* crowd */}
				{cells.map((c, k) => {
					const go = lost > 0 ? ease(frame, (lostAt ?? 0) + k * 6, (lostAt ?? 0) + k * 6 + 40) : 0;
					const x = c.x + go * (176 + (k % 3) * 6);
					const y = c.y + idleBob(frame, k + i * 20, 1.8);
					return <circle key={k} cx={X(x)} cy={Y(y)} r={9 * s} fill={`url(#${ID}-g-cell)`} stroke="rgba(0,0,0,0.25)" />;
				})}
				{extra.map((c, k) => (
					<circle key={`e${k}`} cx={X(c.x)} cy={Y(c.y + idleBob(frame, k + 40, 1.6))} r={9 * s * Math.min(1, fadeAt(frame, (lostAt ?? 0) + 30 + k * 45, 10) * 1.1)} fill={`url(#${ID}-g-cellr)`} stroke="rgba(0,0,0,0.25)" />
				))}
				{keeper(0)}
				{keeper(1)}
				{hitLabels}
				<text x={X(0)} y={Y(0) + 160 * s * 0.54 + 30} textAnchor="middle" fill={lost > 0.5 ? COL.red : COL.green} fontSize={18} fontWeight={800} opacity={0.85 + 0.15 * idlePulse(frame, 60)}>
					{status}
				</text>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={panels.map((p) => p.title).join(' vs ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{keep: COL.green, red: COL.red, grey: '#a3a8ae', cell: '#e9b7c4', cellr: '#e58a9e'}} />
			<defs>
				<linearGradient id={`${ID}-post`} x1="0" x2="1">
					<stop offset="0%" stopColor="#d9d5ce" />
					<stop offset="100%" stopColor="#9d988f" />
				</linearGradient>
			</defs>
			{panels.map(panel)}
			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 12 - (notes.length - 1 - k) * 26} frame={frame} />
			))}
		</svg>
	);
};
