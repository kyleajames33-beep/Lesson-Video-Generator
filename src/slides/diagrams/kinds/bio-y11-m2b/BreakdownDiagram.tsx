// BreakdownDiagram (bio11m2Breakdown) — mechanical then chemical digestion as
// three stone plinths in a row.
//
// 1. A lump of food: long chains of glossy beads (a starch chain of glucose
//    units and a protein chain of amino acids) packed into one blob.
// 2. Mechanical digestion: the same chains in smaller pieces (nothing changed
//    chemically, only more surface; enzyme dots gather on the new surfaces).
// 3. Chemical digestion: enzymes have cut the chains into single units, the
//    small soluble molecules a cell can take up.
// Arrows between the plinths carry the scene's own labels; example chips
// (e.g. "starch → glucose: amylase") pop in under plinth 3 on their beats.
// Hold: pieces and molecules jostle; the single units drift.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Chip2, Foot, FootLine, GLOSS, GlossDefs, H, Lines, PAL, W, fadeAt, popAt, wrap} from './shared';

type Stage = {label: string; at: number};
export type BreakdownProps = {
	food: Stage;
	mechanical: Stage & {arrow: string};
	chemical: Stage & {arrow: string};
	examples?: {text: string; at: number}[];
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2brk';
const AMINO = ['amino', 'protein', 'salt'] as const;
const X = [118, 380, 642];
const PY = 350;

const spiral = (n: number, r: number) =>
	Array.from({length: n}, (_, i) => {
		const a = i * 2.39996;
		const rr = r * Math.sqrt((i + 0.5) / n);
		return {x: Math.cos(a) * rr, y: Math.sin(a) * rr * 0.8};
	});

const beadFill = (i: number, starch: boolean) => `url(#${ID}-g-${starch ? 'glucose' : AMINO[i % 3]})`;

export const BreakdownDiagram = ({food, mechanical, chemical, examples = [], footer = [], delay = 62}: BreakdownProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const stages = [food, mechanical, chemical];
	const top = 262;

	// 1: one lump, two chains of 14 beads each, along a spiral
	const lump = spiral(28, 70);
	// 2: four pieces of 7 beads
	const piece = spiral(7, 22);
	const pieceOff = [{x: -44, y: -30}, {x: 42, y: -34}, {x: -40, y: 28}, {x: 46, y: 24}];
	// 3: single units
	const mono = spiral(20, 78);

	const chainLine = (pts: {x: number; y: number}[], ox: number, oy: number) => pts.map((p, i) => `${i ? 'L' : 'M'} ${ox + p.x} ${oy + p.y}`).join(' ');

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={stages.map((s) => s.label).join(' → ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{stages.map((st, si) => {
				const p = popAt(frame, fps, st.at);
				const on = Math.min(1, p * 1.4);
				return (
					<g key={si} opacity={on} transform={`translate(0, ${(1 - Math.min(1, p)) * 24})`}>
						<DioramaPlinth id={`${ID}${si}`} cx={X[si]} cy={PY} rx={104} />
						<Lines x={X[si]} y={PY + 68} lines={wrap(st.label, 20)} size={19} color={si === 2 ? TOK.amberInk : theme.accent} />
					</g>
				);
			})}

			{/* 1. lump */}
			<g opacity={Math.min(1, popAt(frame, fps, food.at) * 1.4)} transform={`translate(0, ${idleBob(frame, 1, 1)})`}>
				<ellipse cx={X[0]} cy={top} rx={88} ry={66} fill="#e9d9b8" stroke="#c7b28a" strokeWidth={2} />
				{[0, 1].map((c) => {
					const pts = lump.filter((_, i) => i % 2 === c);
					return (
						<g key={c}>
							<path d={chainLine(pts, X[0], top)} stroke={c ? '#6f8f5a' : '#b8912c'} strokeWidth={3} fill="none" />
							{pts.map((q, i) => <circle key={i} cx={X[0] + q.x} cy={top + q.y} r={8} fill={beadFill(i, c === 0)} stroke="rgba(0,0,0,0.25)" strokeWidth={0.8} />)}
						</g>
					);
				})}
			</g>

			{/* 2. pieces */}
			<g opacity={Math.min(1, popAt(frame, fps, mechanical.at) * 1.4)}>
				{pieceOff.map((o, k) => {
					const bob = idleBob(frame, k + 3, 1.6);
					const starch = k % 2 === 0;
					return (
						<g key={k} transform={`translate(${X[1] + o.x}, ${top + o.y + bob})`}>
							<ellipse cx={0} cy={0} rx={32} ry={27} fill="#e9d9b8" stroke="#c7b28a" strokeWidth={1.5} />
							<path d={chainLine(piece, 0, 0)} stroke={starch ? '#b8912c' : '#6f8f5a'} strokeWidth={2.5} fill="none" />
							{piece.map((q, i) => <circle key={i} cx={q.x} cy={q.y} r={7} fill={beadFill(i, starch)} stroke="rgba(0,0,0,0.25)" strokeWidth={0.8} />)}
							{/* enzyme dots gathering on the new surface */}
							{[0, 1, 2].map((j) => {
								const a = j * 2.1 + k;
								return <circle key={j} cx={Math.cos(a) * 34} cy={Math.sin(a) * 29} r={4} fill={PAL.protein} opacity={fadeAt(frame, mechanical.at + 30 + j * 8, 12) * (0.6 + 0.4 * idlePulse(frame, 50))} />;
							})}
						</g>
					);
				})}
			</g>

			{/* 3. single units */}
			<g opacity={Math.min(1, popAt(frame, fps, chemical.at) * 1.4)}>
				{mono.map((q, i) => {
					const starch = i % 2 === 0;
					return (
						<circle
							key={i}
							cx={X[2] + q.x + idleBob(frame, i, 3)}
							cy={top + q.y * 0.9 + idleBob(frame, i + 7, 2.5)}
							r={8}
							fill={beadFill(i >> 1, starch)}
							stroke="rgba(0,0,0,0.25)"
							strokeWidth={0.8}
						/>
					);
				})}
			</g>

			{/* arrows */}
			{[mechanical, chemical].map((st, k) => {
				const t = fadeAt(frame, st.at - 14, 16);
				const x1 = X[k] + 88, x2 = X[k + 1] - 88;
				return (
					<g key={k} opacity={t}>
						<Arrow x1={x1} y1={top} x2={x1 + (x2 - x1) * t} y2={top} color={TOK.inkMute} width={4} head={12} />
						<Lines x={(x1 + x2) / 2} y={top - 96} lines={wrap(st.arrow, 12)} size={16} color={TOK.inkDim} />
					</g>
				);
			})}

			{examples.map((e, k) => (
				<Chip2 key={k} x={W / 2} y={PY + 112 + k * 36} text={e.text} color={theme.accent} t={popAt(frame, fps, e.at)} size={17} />
			))}
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};
