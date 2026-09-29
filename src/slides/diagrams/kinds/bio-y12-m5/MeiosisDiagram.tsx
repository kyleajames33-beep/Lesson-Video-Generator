// MeiosisDiagram — one diploid cell becomes four haploid cells, as a tree
// that grows left to right when the narration names each division.
//
// Model: 2n = 4 (a long and a short homologous pair; one of each pair in the
// accent colour, one in coral). The DNA has been copied once before meiosis,
// so every chromosome starts as two sister chromatids.
//   Meiosis I   homologous pairs line up together and SEPARATE: each daughter
//               gets one chromosome of each pair (still two chromatids each).
//               The number halves here: n = 2.
//   Meiosis II  SISTER CHROMATIDS separate, much like mitosis: four cells,
//               each with one chromatid of each chromosome. Still n = 2.
// Every count on screen is computed from the model's chromosome lists.
// Chromosomes that move leave a faint ghost where they were, so the whole
// tree stays readable at the end.
//
// Props: `at` = frames (after `delay`): pairing / m1 / m2 / result / once.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {Arrow, CORAL, CellBody, Chromosome, GlossDefs, Ledge, Pill, ease, fadeAt, lerp, popAt} from './shared';

export type MeiosisProps = {
	at?: {pairing?: number; m1?: number; m2?: number; result?: number; once?: number};
	delay?: number;
};

const ID = 'b12m5mei';
const W = 760, H = 530;
type C = {len: number; color: 'pat' | 'mat'};
const CHROMS: C[] = [
	{len: 46, color: 'pat'}, {len: 46, color: 'mat'}, // long pair
	{len: 30, color: 'pat'}, {len: 30, color: 'mat'}, // short pair
];
// Which chromosome goes to which meiosis-I daughter (one of each pair each).
const M1_DEST = [0, 1, 1, 0];

const P = {x: 112, y: 250, rx: 88, ry: 84};
const B = [{x: 372, y: 142}, {x: 372, y: 362}];
const Cc = [{x: 632, y: 82}, {x: 632, y: 192}, {x: 632, y: 312}, {x: 632, y: 422}];

export const MeiosisDiagram = ({at = {}, delay = 62}: MeiosisProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tPair = at.pairing ?? 40, t1 = at.m1 ?? 200, t2 = at.m2 ?? 400, tR = at.result ?? 520, tOnce = at.once ?? 640;
	const pair = ease(frame, tPair, tPair + 36);
	const go1 = ease(frame, t1, t1 + 54);
	const go2 = ease(frame, t2, t2 + 54);
	const cellsB = popAt(frame, fps, t1 + 6);
	const cellsC = popAt(frame, fps, t2 + 6);
	const settled = frame > t2 + 70;
	const bob = (i: number) => (settled ? idleBob(frame, i, 1.3) : 0);

	// Parent positions: scattered, then paired on the equator (homologues side by side).
	const parentPos = (i: number) => {
		const scatter = [{x: -34, y: -30, a: 30}, {x: 30, y: 26, a: -40}, {x: 26, y: -34, a: 70}, {x: -30, y: 30, a: -15}][i];
		const paired = {x: i % 2 === 0 ? -15 : 15, y: i < 2 ? -24 : 32, a: 0};
		return {x: P.x + lerp(scatter.x, paired.x, pair), y: P.y + lerp(scatter.y, paired.y, pair), a: lerp(scatter.a, paired.a, pair)};
	};
	// Slot inside a meiosis-I daughter: long chromosome left, short right.
	const bPos = (i: number) => {
		const b = B[M1_DEST[i]];
		return {x: b.x + (i < 2 ? -18 : 20), y: b.y, a: 0};
	};
	// Meiosis II: chromatid s (−1/+1) of chromosome i goes to cell 2·dest + (s>0).
	const cPos = (i: number, s: number) => {
		const c = Cc[M1_DEST[i] * 2 + (s > 0 ? 1 : 0)];
		return {x: c.x + (i < 2 ? -14 : 14), y: c.y, a: 0};
	};

	const nParent = CHROMS.length;
	const nB = CHROMS.filter((_, i) => M1_DEST[i] === 0).length;
	const nC = nB; // each chromatid pair splits one-to-each

	const colX = [P.x, B[0].x, Cc[0].x];

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Meiosis: meiosis I separates homologous pairs, meiosis II separates sister chromatids, giving four haploid cells" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{pat: theme.accent, mat: CORAL}} />

			{/* Stone ledge carrying the column labels */}
			<Ledge x={24} y={474} w={W - 48} opacity={fadeAt(frame, 0)} />
			{[
				{x: colX[0], t: -20, text: `diploid, 2n = ${nParent}`},
				{x: colX[1], t: t1 + 30, text: `after meiosis I: n = ${nB}`},
				{x: colX[2], t: t2 + 30, text: `after meiosis II: n = ${nC}`},
			].map((l, i) => (
				<text key={i} x={l.x} y={512} textAnchor="middle" fill={i === 0 ? TOK.inkDim : theme.accent} fontSize={17} fontWeight={800} opacity={fadeAt(frame, l.t)}>{l.text}</text>
			))}

			{/* Division arrows + what separates */}
			{[
				{x1: P.x + P.rx + 8, x2: B[0].x - 84, ys: [B[0].y + 40, B[1].y - 40], t: t1, l1: 'Meiosis I', l2: 'homologous pairs', l3: 'separate'},
				{x1: B[0].x + 84, x2: Cc[0].x - 68, ys: [], t: t2, l1: 'Meiosis II', l2: 'sister chromatids', l3: 'separate'},
			].map((a, k) => {
				const t = ease(frame, a.t - 4, a.t + 18);
				const mx = (a.x1 + a.x2) / 2;
				const targets = k === 0 ? [B[0], B[1]].map((b) => ({x0: a.x1, y0: P.y, x: a.x2, y: b.y + (b.y < P.y ? 34 : -34)})) : [0, 1].flatMap((bi) => [0, 1].map((ci) => ({x0: a.x1, y0: B[bi].y, x: a.x2, y: Cc[bi * 2 + ci].y + (ci === 0 ? 20 : -20)})));
				return (
					<g key={k}>
						{targets.map((tg, j) => <Arrow key={j} x1={tg.x0} y1={tg.y0} x2={tg.x} y2={tg.y} color={TOK.inkMute} width={2.5} head={9} t={t} />)}
						<g opacity={fadeAt(frame, a.t + 8)}>
							{/* Meiosis I's note sits in the gap between its two daughter cells */}
							<text x={k === 0 ? B[0].x : mx} y={252 - 8} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{a.l1}</text>
							<text x={k === 0 ? B[0].x : mx} y={252 + 14} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{a.l2}</text>
							<text x={k === 0 ? B[0].x : mx} y={252 + 32} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{a.l3}</text>
						</g>
					</g>
				);
			})}

			{/* Cells */}
			<g opacity={fadeAt(frame, 0, 14)}>
				<CellBody id={ID} cx={P.x} cy={P.y} rx={P.rx} ry={P.ry} opacity={1 - go1 * 0.45} />
			</g>
			{B.map((b, k) => (
				<g key={k} transform={`translate(${b.x},${b.y}) scale(${cellsB}) translate(${-b.x},${-b.y})`}>
					<CellBody id={ID} cx={b.x} cy={b.y} rx={70} ry={62} opacity={1 - go2 * 0.45} />
				</g>
			))}
			{Cc.map((c, k) => (
				<g key={k} transform={`translate(${c.x},${c.y}) scale(${cellsC}) translate(${-c.x},${-c.y})`}>
					<CellBody id={ID} cx={c.x} cy={c.y} rx={56} ry={46} />
				</g>
			))}

			{/* Ghosts left behind (the record of each stage) */}
			{CHROMS.map((c, i) => {
				const pp = parentPos(i);
				const bp = bPos(i);
				return (
					<g key={`g${i}`} opacity={0.3}>
						{go1 > 0 && <Chromosome id={ID} x={pp.x} y={pp.y} len={c.len} w={10} color={c.color} chromatids={2} splay={5} opacity={go1} />}
						{go2 > 0 && <Chromosome id={ID} x={bp.x} y={bp.y} len={c.len} w={10} color={c.color} chromatids={2} splay={5} opacity={go2} />}
					</g>
				);
			})}

			{/* The moving chromosomes */}
			{CHROMS.map((c, i) => {
				const pp = parentPos(i);
				const bp = bPos(i);
				if (go2 <= 0) {
					const arc = Math.sin(go1 * Math.PI) * -18;
					return <Chromosome key={i} id={ID} x={lerp(pp.x, bp.x, go1)} y={lerp(pp.y, bp.y, go1) + arc + bob(i)} len={c.len} w={10} color={c.color} chromatids={2} splay={5} angle={lerp(pp.a, 0, go1)} opacity={fadeAt(frame, 4 + i * 3)} />;
				}
				return [-1, 1].map((s) => {
					const cp = cPos(i, s);
					return <Chromosome key={`${i}${s}`} id={ID} x={lerp(bp.x + s * 5, cp.x, go2)} y={lerp(bp.y, cp.y, go2) + bob(i * 2 + (s > 0 ? 1 : 0))} len={c.len} w={10} color={c.color} chromatids={1} />;
				});
			})}

			{/* Result: four haploid cells; then the one-replication rule */}
			{Cc.map((c, k) => (
				<g key={k} opacity={popAt(frame, fps, tR + k * 4)}>
					<Pill x={c.x + 86} y={c.y} text={`n = ${nC}`} color={theme.accent} fill={theme.soft} size={15} strokeWidth={2 + (frame > tOnce ? idlePulse(frame) * 1.2 : 0)} />
				</g>
			))}
			<g opacity={fadeAt(frame, tOnce)}>
				<Pill x={P.x + 4} y={P.y - P.ry - 36} text="DNA copied once, first" color={TOK.amberInk} fill="#fff8ea" size={15} strokeWidth={2 + idlePulse(frame) * 1.5} />
				<text x={P.x + 4} y={P.y + P.ry + 44} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>1 replication · 2 divisions</text>
				<text x={P.x + 4} y={P.y + P.ry + 66} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>→ {Cc.length} haploid cells</text>
			</g>
		</svg>
	);
};
