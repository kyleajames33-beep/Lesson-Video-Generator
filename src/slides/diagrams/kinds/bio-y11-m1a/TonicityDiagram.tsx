// TonicityDiagram (bio11m1Tonicity) — the same cell dropped into three
// solutions, each beaker on its own stone plinth.
//
// Each column's `kind` (hypo / iso / hyper) sets how many solute particles sit
// outside compared with the fixed number inside, and from that the direction
// of net water movement is derived (water moves toward the higher solute
// concentration): hypo → in, iso → no net movement (arrows both ways), hyper →
// out. The cell then responds on the column's beat, depending on `cell`:
//   generic  swells a little / stays / shrinks a little (direction only)
//   animal   a red blood cell: swells and bursts (lysis) / normal /
//            shrivels with a crinkled edge (crenation). No wall.
//   plant    the wall holds its shape: membrane pressed firmly on the wall,
//            big vacuole (turgid) / membrane just touching, softer (flaccid) /
//            membrane and vacuole pulled away from the wall (plasmolysed).
// Names, subtitles and result lines come from props. Hold: solutes and water
// jostle, the arrows keep flowing, the swollen cell's fragments drift.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {ReactNode} from 'react';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, CELLPAL, Footer, GlossDefs, H, Lines, W, clamp, fadeAt, hash, wrap} from './shared';

type Col = {kind: 'hypo' | 'iso' | 'hyper'; name: string; sub?: string; result?: string; at: number; amber?: boolean};
export type TonicityProps = {
	cell?: 'generic' | 'animal' | 'plant';
	columns: Col[];
	footer?: {text: string; at: number; amber?: boolean}[];
	delay?: number;
};

const ID = 'b11ton';
const ease = Easing.inOut(Easing.cubic);
// Outside counts are set so the dot DENSITY outside is lower / equal / higher
// than inside the cell (3 dots in the round cell, 6 in the larger plant cell).
const OUT = {hypo: 6, iso: 20, hyper: 52};

export const TonicityDiagram = ({cell = 'generic', columns, footer = [], delay = 62}: TonicityProps) => {
	const frame = useCurrentFrame() - delay;
	useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const n = columns.length;
	const colW = W / n;
	const bTop = 92;
	const bBot = 340;
	const cy = (bTop + bBot) / 2 + 10;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A cell in hypotonic, isotonic and hypertonic solutions" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{rbc: CELLPAL.rbc, solute: CELLPAL.solute, water: CELLPAL.water, wall: CELLPAL.wall}} />
			{columns.map((c, i) => {
				const cx = colW * (i + 0.5);
				const o = fadeAt(frame, i === 0 ? 0 : Math.min(c.at - 40, 30 * i), 16);
				const t = interpolate(frame, [c.at + 10, c.at + 90], [0, 1], {...clamp, easing: ease});
				const flow = c.kind === 'hypo' ? 1 : c.kind === 'hyper' ? -1 : 0;
				const bw = Math.min(96, colW / 2 - 16);
				const col = c.amber ? TOK.amberInk : theme.accent;
				// solutes outside (inside the beaker, outside the cell), placed on a hash grid avoiding the cell
				const outsAt: {x: number; y: number}[] = [];
				const outs = Array.from({length: OUT[c.kind]}, (_, k) => {
					let x = 0;
					let y = 0;
					for (let tries = 0; tries < 40; tries++) {
						x = cx - bw + 12 + hash(i * 97 + k * 13 + tries) * (bw * 2 - 24);
						y = bTop + 30 + hash(i * 31 + k * 7 + tries * 5) * (bBot - bTop - 50);
						if (Math.hypot(x - cx, y - cy) > 74 && outsAt.every((q) => Math.hypot(q.x - x, q.y - y) > 11)) break;
					}
					outsAt.push({x, y});
					return {x, y};
				});
				// the cell
				let cellEl: ReactNode;
				const ins = (cell === 'plant' ? [[-18, -14], [16, -18], [-6, 14], [20, 12], [-24, 6], [4, -2]] : [[-16, -12], [14, -6], [-2, 16]]);
				const inDots = (sc: number) => ins.map(([dx, dy], k) => <circle key={k} cx={cx + dx * sc + idleBob(frame, k + i * 9, 1)} cy={cy + dy * sc} r={4.2} fill={`url(#${ID}-ball-solute)`} />);
				if (cell === 'plant') {
					const inset = c.kind === 'hyper' ? 4 + 20 * t : 4;
					const soft = c.kind === 'iso' ? 3 * t : 0;
					const vac = c.kind === 'hyper' ? 1 - 0.55 * t : c.kind === 'hypo' ? 1 + 0.08 * t : 1 - 0.08 * t;
					const hw = 58;
					const hh = 50;
					cellEl = (
						<g>
							<path
								d={`M ${cx - hw} ${cy - hh} Q ${cx} ${cy - hh + soft * 2} ${cx + hw} ${cy - hh} Q ${cx + hw - soft * 2} ${cy} ${cx + hw} ${cy + hh} Q ${cx} ${cy + hh - soft * 2} ${cx - hw} ${cy + hh} Q ${cx - hw + soft * 2} ${cy} ${cx - hw} ${cy - hh} Z`}
								fill="none"
								stroke={CELLPAL.wall}
								strokeWidth={8}
								strokeLinejoin="round"
							/>
							<rect x={cx - hw + inset} y={cy - hh + inset} width={(hw - inset) * 2} height={(hh - inset) * 2} rx={6 + inset * 1.2} fill={CELLPAL.cytoPlant} stroke={CELLPAL.membrane} strokeWidth={c.kind === 'hypo' ? 3.5 : 2.5} />
							<rect x={cx - (hw - 18) * vac} y={cy - (hh - 16) * vac} width={(hw - 18) * 2 * vac} height={(hh - 16) * 2 * vac} rx={14} fill={CELLPAL.vacuole} stroke="#7fb8d0" strokeWidth={1.5} />
							{inDots(0.7 * vac + 0.2)}
						</g>
					);
				} else if (cell === 'animal') {
					const burst = c.kind === 'hypo' ? interpolate(frame, [c.at + 70, c.at + 100], [0, 1], clamp) : 0;
					const r = c.kind === 'hypo' ? 42 + 16 * t : c.kind === 'hyper' ? 42 - 8 * t : 42;
					const spikes = c.kind === 'hyper' ? 4 * t : 0;
					if (burst > 0) {
						cellEl = (
							<g>
								{Array.from({length: 8}, (_, k) => {
									const a = (k / 8) * Math.PI * 2;
									const d = r + 20 * burst + idleBob(frame, k, 2);
									return <path key={k} d={`M ${cx + Math.cos(a - 0.3) * d} ${cy + Math.sin(a - 0.3) * d} A ${d} ${d} 0 0 1 ${cx + Math.cos(a + 0.3) * d} ${cy + Math.sin(a + 0.3) * d}`} fill="none" stroke={CELLPAL.rbc} strokeWidth={5} strokeLinecap="round" opacity={1 - 0.3 * burst} />;
								})}
								{inDots(1.4 + burst)}
							</g>
						);
					} else {
						const pts = Array.from({length: 73}, (_, k) => {
							const a = (k / 72) * Math.PI * 2;
							const rr = r + spikes * Math.sin(a * 14) + 0.8 * Math.sin(a * 3 + frame / 20);
							return `${k === 0 ? 'M' : 'L'} ${cx + Math.cos(a) * rr} ${cy + Math.sin(a) * rr}`;
						}).join(' ');
						cellEl = (
							<g>
								<path d={pts + ' Z'} fill={`url(#${ID}-ball-rbc)`} stroke="#8e2a22" strokeWidth={2} />
								<circle cx={cx} cy={cy} r={r * 0.42} fill="#a8322a" opacity={0.35} />
								{inDots(r / 42)}
							</g>
						);
					}
				} else {
					const r = c.kind === 'hypo' ? 42 + 8 * t : c.kind === 'hyper' ? 42 - 8 * t : 42;
					cellEl = (
						<g>
							<circle cx={cx} cy={cy} r={r} fill={CELLPAL.cyto} stroke={CELLPAL.membrane} strokeWidth={3} />
							{inDots(r / 42)}
						</g>
					);
				}
				// water arrows
				const arrows = [0, 1, 2, 3].map((k) => {
					const a = (k / 4) * Math.PI * 2 + Math.PI / 4;
					const r0 = cell === 'plant' ? 90 : 88;
					const r1 = cell === 'plant' ? 66 : 54;
					const inward = flow >= 0;
					const [ra, rb] = inward ? [r0, r1] : [r1 + 4, r0];
					const ao = fadeAt(frame, c.at, 12);
					const x1 = cx + Math.cos(a) * ra;
					const y1 = cy + Math.sin(a) * ra;
					const x2 = cx + Math.cos(a) * rb;
					const y2 = cy + Math.sin(a) * rb;
					if (flow === 0) {
						const b1 = cx + Math.cos(a) * r0;
						const b2 = cy + Math.sin(a) * r0;
						const c1 = cx + Math.cos(a) * r1;
						const c2 = cy + Math.sin(a) * r1;
						const off = 7;
						const px = -Math.sin(a) * off;
						const py = Math.cos(a) * off;
						return (
							<g key={k} opacity={ao}>
								<Arrow x1={b1 + px} y1={b2 + py} x2={c1 + px} y2={c2 + py} color={CELLPAL.water} width={3} head={8} />
								<Arrow x1={c1 - px} y1={c2 - py} x2={b1 - px} y2={b2 - py} color={CELLPAL.water} width={3} head={8} />
							</g>
						);
					}
					const ph = ((frame + k * 11) % 40) / 40;
					return (
						<g key={k} opacity={ao}>
							<Arrow x1={x1} y1={y1} x2={x2} y2={y2} color={CELLPAL.water} width={4.5} head={11} />
							<circle cx={x1 + (x2 - x1) * ph} cy={y1 + (y2 - y1) * ph} r={3.5} fill={`url(#${ID}-ball-water)`} opacity={1} />
						</g>
					);
				});
				const resLines = c.result ? wrap(c.result, Math.floor(colW / 9.5)) : [];
				return (
					<g key={i} opacity={o}>
						<text x={cx} y={30} textAnchor="middle" fill={col} fontSize={21} fontWeight={800}>{c.name}</text>
						{c.sub && <Lines x={cx} y={54} lines={wrap(c.sub, Math.floor(colW / 9))} size={15} color={TOK.inkDim} />}
						<DioramaPlinth id={`${ID}-p${i}`} cx={cx} cy={bBot + 16} rx={bw + 22} />
						<path d={`M ${cx - bw} ${bTop} L ${cx - bw} ${bBot - 10} Q ${cx - bw} ${bBot} ${cx - bw + 10} ${bBot} L ${cx + bw - 10} ${bBot} Q ${cx + bw} ${bBot} ${cx + bw} ${bBot - 10} L ${cx + bw} ${bTop}`} fill="rgba(216,238,247,0.55)" stroke="#8fb5c6" strokeWidth={3} />
						<rect x={cx - bw + 3} y={bTop + 16} width={bw * 2 - 6} height={bBot - bTop - 19} fill={CELLPAL.water} opacity={0.12} />
						{outs.map((p, k) => (
							<circle key={k} cx={p.x + idleBob(frame, k + i * 5, 1.5)} cy={p.y + idleBob(frame, k + 3, 1.5)} r={4.2} fill={`url(#${ID}-ball-solute)`} />
						))}
						{cellEl}
						{arrows}
						{resLines.length > 0 && (
							<g opacity={fadeAt(frame, c.at + 70, 14)}>
								<Lines x={cx} y={bBot + 122} lines={resLines} size={18} color={c.amber ? TOK.amberInk : TOK.ink} />
							</g>
						)}
						{c.amber && t >= 1 && <rect x={cx - bw - 4} y={bTop - 4} width={bw * 2 + 8} height={bBot - bTop + 8} rx={14} fill="none" stroke={TOK.amber} strokeWidth={2 + pulse} opacity={0.6} />}
					</g>
				);
			})}
			<g opacity={fadeAt(frame, 20)}>
				<circle cx={W / 2 - 150} cy={H - 16} r={5} fill={`url(#${ID}-ball-solute)`} />
				<text x={W / 2 - 140} y={H - 11} fill={TOK.inkDim} fontSize={15} fontWeight={800}>solute</text>
				<line x1={W / 2 - 60} y1={H - 16} x2={W / 2 - 30} y2={H - 16} stroke={CELLPAL.water} strokeWidth={4} />
				<text x={W / 2 - 24} y={H - 11} fill={TOK.inkDim} fontSize={15} fontWeight={800}>net water movement</text>
			</g>
			<Footer lines={footer} frame={frame} y0={H - 10} amberInk={TOK.amberInk} dim={TOK.inkDim} />
		</svg>
	);
};
