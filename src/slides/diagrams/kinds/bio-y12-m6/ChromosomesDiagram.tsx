// ChromosomesDiagram — chromosome-scale events, painted and counted.
//
// Modes:
//   scale      Point versus chromosomal mutation on the same chromosome: a
//              magnified strip shows one changed base inside one gene; below,
//              a whole segment (several genes) lifts out. The gene count is
//              computed from the segment.
//   number     Non-disjunction: a homologous pair fails to separate in
//              meiosis, so one gamete gets both copies and the other none;
//              fertilised by a normal gamete, the zygote has three copies.
//              Copy counts are computed from the rods drawn.
//   meiosis    Independent assortment (a parent with two pairs deals 2ⁿ gamete
//              combinations, computed) beside crossing over (inner chromatids
//              of a homologous pair swap their lower segments, making
//              recombinant chromatids).
//   fertilise  Every maternal gamete × every paternal gamete: the offspring
//              genotypes fill a grid, one random fusion highlighted. The number
//              of combinations and of distinct genotypes are computed.
// Maternal = blue, paternal = rose throughout. Frames relative to `delay`.

import type {ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AMBER, BLUE, BaseTile, Cell, ChromosomeRod, GREEN, ROSE, StoneLedge, clamp, ease, fadeAt, popAt, shade, textWidth} from './shared';

export type ChromosomesProps = {
	mode: 'scale' | 'number' | 'meiosis' | 'fertilise';
	/** scale: gene letters along the chromosome, and the segment [from, to] (inclusive gene indices). */
	genes?: string;
	segment?: [number, number];
	pointGene?: number;
	beats?: Record<string, number>;
	labels?: Record<string, string>;
	/** number: which chromosome. */
	chromosome?: string;
	/** meiosis / fertilise: parent genotype like "AaBb" (first of each pair maternal). */
	genotype?: string;
	footer?: {text: string; at: number; amber?: boolean};
	delay?: number;
};

const ID = 'b12m6chr';
const W = 760;
const H = 530;

/** A vertical chromosome capsule centred on (x, y). `lower` recolours the part below `split` (0..1 from top). */
const VRod = ({
	id, x, y, len, t, color, lower, split = 0.55, label, lowerLabel, opacity = 1,
}: {id: string; x: number; y: number; len: number; t: number; color: string; lower?: string; split?: number; label?: string; lowerLabel?: string; opacity?: number}) => (
	<g opacity={opacity}>
		<defs>
			<clipPath id={`${id}-c`}>
				<rect x={x - t / 2} y={y - len / 2} width={t} height={len} rx={t / 2} />
			</clipPath>
		</defs>
		<rect x={x - t / 2 + 3} y={y - len / 2 + 4} width={t} height={len} rx={t / 2} fill="rgba(40,36,30,0.2)" />
		<g clipPath={`url(#${id}-c)`}>
			<rect x={x - t / 2} y={y - len / 2} width={t} height={len} fill={color} />
			{lower && <rect x={x - t / 2} y={y - len / 2 + len * split} width={t} height={len * (1 - split)} fill={lower} />}
			<rect x={x - t / 2} y={y - len / 2} width={t * 0.38} height={len} fill="#fff" opacity={0.3} />
			<rect x={x + t * 0.18} y={y - len / 2} width={t * 0.32} height={len} fill="#000" opacity={0.12} />
		</g>
		<rect x={x - t / 2} y={y - len / 2} width={t} height={len} rx={t / 2} fill="none" stroke="rgba(0,0,0,0.25)" />
		{label && <text x={x} y={y - len / 2 + len * 0.25 + 6} textAnchor="middle" fill="#fff" fontSize={Math.min(17, t * 0.8)} fontWeight={800}>{label}</text>}
		{lowerLabel && <text x={x} y={y - len / 2 + len * 0.8 + 6} textAnchor="middle" fill="#fff" fontSize={Math.min(17, t * 0.8)} fontWeight={800}>{lowerLabel}</text>}
	</g>
);

const Tag = ({x, y, text, amber, o, scale = 1, frame, color}: {x: number; y: number; text: string; amber?: boolean; o: number; scale?: number; frame: number; color?: string}) => {
	const w = textWidth(text, 17) + 26;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${scale})`}>
			<rect x={-w / 2} y={-16} width={w} height={32} rx={16} fill={amber ? '#fff6e6' : '#fff'} stroke={amber ? AMBER : color ?? TOK.inkMute} strokeWidth={amber ? 2.5 + idlePulse(frame) : 2} />
			<text y={6} textAnchor="middle" fill={amber ? TOK.amberInk : TOK.ink} fontSize={17} fontWeight={800}>{text}</text>
		</g>
	);
};

const genesOf = (g: string) => {
	const out: string[][] = [];
	for (let i = 0; i + 1 < g.length; i += 2) out.push([g[i], g[i + 1]]);
	return out;
};

export const ChromosomesDiagram = (props: ChromosomesProps) => {
	const {mode, delay = 62} = props;
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = props.beats ?? {};
	const lab = props.labels ?? {};
	const pop = (at: number) => Math.min(1, popAt(frame, fps, at));
	const footer = props.footer && (
		<text x={W / 2} y={H - 12} textAnchor="middle" fill={props.footer.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, props.footer.at)}>{props.footer.text}</text>
	);
	const svg = (label: string, children: ReactNode) => (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{children}
			{footer}
		</svg>
	);

	// ── scale ────────────────────────────────────────────────────────────────
	if (mode === 'scale') {
		const genes = props.genes ?? 'ABCDEFGH';
		const [s0, s1] = props.segment ?? [3, 5];
		const pg = props.pointGene ?? 2;
		const n = genes.length;
		const LEN = 600;
		const X0 = (W - LEN) / 2;
		const gw = LEN / n;
		const shades = (i: number) => (i % 2 ? shade(BLUE, 0.12) : shade(BLUE, -0.04));
		const bands = genes.split('').map((_, i) => ({from: i / n, to: (i + 1) / n, color: shades(i)}));
		const rowY = [150, 372];
		const pointAt = b.point ?? 0;
		const chromAt = b.chrom ?? 100;
		const liftAt = b.lift ?? 311;
		const segN = s1 - s0 + 1;
		// segment lift-out (deletion) on row 2, then the gap closes
		const lift = ease(frame, liftAt, liftAt + 30);
		const close = ease(frame, liftAt + 40, liftAt + 70);
		const geneLabels = (y: number, row: number) =>
			genes.split('').map((g, i) => {
				const inSeg = row === 1 && i >= s0 && i <= s1;
				let x = X0 + (i + 0.5) * gw;
				if (row === 1 && i > s1) x -= close * segN * gw;
				return (
					<text key={i} x={x} y={y - 30} textAnchor="middle" fill={inSeg ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={800} opacity={inSeg ? 1 - lift : 1}>
						{g}
					</text>
				);
			});
		// row 2 rod: left part, (lifted) segment, right part
		const left = {from: 0, to: s0 / n};
		const right = {from: (s1 + 1) / n, to: 1};
		const part = (key: string, from: number, to: number, dx: number, dy: number, o: number, amber: boolean) => {
			const len = (to - from) * LEN;
			const cx = X0 + from * LEN + len / 2 + dx;
			const sub = genes.split('').map((_, i) => ({from: (i / n - from) / (to - from), to: ((i + 1) / n - from) / (to - from), color: shades(i)})).filter((bd) => bd.to > 0.001 && bd.from < 0.999);
			return (
				<g key={key} opacity={o}>
					<ChromosomeRod id={`${ID}${key}`} x={cx} y={rowY[1] + dy} len={len} t={40} color={BLUE} bands={sub} centromere={null} />
					{amber && <rect x={cx - len / 2 - 5} y={rowY[1] + dy - 25} width={len + 10} height={50} rx={25} fill="none" stroke={AMBER} strokeWidth={3 + idlePulse(frame)} />}
				</g>
			);
		};
		const baseX = X0 + (pg + 0.5) * gw;
		return svg('Point mutation versus chromosomal mutation', (
			<g>
				<g opacity={fadeAt(frame, pointAt)}>
					<text x={X0} y={44} fill={theme.accent} fontSize={22} fontWeight={800}>{lab.point ?? 'Point mutation'}</text>
					<Tag x={W - 20 - (textWidth(lab.pointTag ?? 'One base, inside one gene', 17) + 26) / 2} y={38} text={lab.pointTag ?? 'One base, inside one gene'} o={fadeAt(frame, pointAt + 30)} frame={frame} color={BLUE} />
					<StoneLedge id={`${ID}l0`} x={X0 - 10} y={rowY[0] + 16} w={LEN + 20} d={14} />
					<ChromosomeRod id={`${ID}r0`} x={W / 2} y={rowY[0] - 4} len={LEN} t={40} color={BLUE} bands={bands} centromere={null} />
					{geneLabels(rowY[0], 0)}
					{/* magnifier: one base inside gene pg */}
					<g opacity={fadeAt(frame, pointAt + 20)}>
						<path d={`M ${baseX - gw / 2} ${rowY[0] + 18} L ${baseX - 92} ${rowY[0] + 52} M ${baseX + gw / 2} ${rowY[0] + 18} L ${baseX + 92} ${rowY[0] + 52}`} stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="4 5" />
						{'GACTG'.split('').map((bb, k) => (
							<BaseTile key={k} x={baseX - 72 + k * 36} y={rowY[0] + 76} s={30} base={k === 2 ? 'A' : bb} ring={k === 2 ? 0.6 + idlePulse(frame) * 0.4 : 0} />
						))}
					</g>
				</g>
				<g opacity={fadeAt(frame, chromAt)}>
					<text x={X0} y={rowY[1] - 80} fill={theme.accent} fontSize={22} fontWeight={800}>{lab.chrom ?? 'Chromosomal mutation'}</text>
					<Tag x={W - 20 - (textWidth(`One segment: ${segN} genes at once`, 17) + 26) / 2} y={rowY[1] - 86} text={lab.chromTag ?? `One segment: ${segN} genes at once`} amber o={fadeAt(frame, chromAt + 40)} scale={pop(chromAt + 40)} frame={frame} />
					<StoneLedge id={`${ID}l1`} x={X0 - 10} y={rowY[1] + 20} w={LEN + 20} d={14} />
					{part('L', left.from, left.to, 0, 0, 1, false)}
					{part('S', s0 / n, (s1 + 1) / n, 0, -lift * 70, 1 - fadeAt(frame, liftAt + 30, 20), true)}
					{part('R', right.from, right.to, -close * segN * gw, 0, 1, false)}
					{geneLabels(rowY[1], 1)}
					<text x={W / 2} y={rowY[1] + 72} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={700} opacity={fadeAt(frame, liftAt + 50)}>
						{lab.lost ?? `Segment lost: genes ${genes.slice(s0, s1 + 1).split('').join(', ')} gone together`}
					</text>
				</g>
			</g>
		));
	}

	// ── number (non-disjunction) ────────────────────────────────────────────
	if (mode === 'number') {
		const chr = props.chromosome ?? '21';
		const sepAt = b.separate ?? 116;
		const fertAt = b.fertilise ?? 212;
		const tagAt = b.tag ?? 383;
		const PY = 206;
		const rodLen = 58;
		const t = ease(frame, sepAt, sepAt + 36);
		const f = ease(frame, fertAt, fertAt + 40);
		// parent cell at left; the pair moves together into gamete 1
		const px = 130;
		const g1 = {x: 330, y: 150};
		const g2 = {x: 330, y: 330};
		const sperm = {x0: 560, y0: 60};
		const zx = 590;
		const zy = PY + 30;
		const fused = f >= 0.98;
		const copies = fused ? 3 : 0;
		const g1o = 1 - 0.72 * fadeAt(frame, fertAt + 36, 12);
		return svg('Non-disjunction gives an extra chromosome', (
			<g>
				<g opacity={fadeAt(frame, 0)}>
					<text x={px} y={48} textAnchor="middle" fill={theme.accent} fontSize={20} fontWeight={800}>{lab.parent ?? 'Meiosis'}</text>
					<DioramaPlinth id={`${ID}p0`} cx={px} cy={PY + 66} rx={96} />
					<Cell id={`${ID}c0`} x={px} y={PY + idleBob(frame, 1, 1.2)} r={66} nucleus={false} color="#dcecf8" />
					<text x={px} y={PY + 128} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>chromosome {chr} pair</text>
				</g>
				{/* gametes */}
				<g opacity={fadeAt(frame, sepAt)}>
					<path d={`M ${px + 66} ${PY - 20} L ${g1.x - 58} ${g1.y + 6}`} stroke={TOK.inkMute} strokeWidth={2.5} strokeDasharray="5 6" />
					<path d={`M ${px + 66} ${PY + 20} L ${g2.x - 58} ${g2.y - 6}`} stroke={TOK.inkMute} strokeWidth={2.5} strokeDasharray="5 6" />
					<g opacity={g1o}>
						<Cell id={`${ID}g1`} x={g1.x} y={g1.y} r={52} nucleus={false} color="#dcecf8" scale={pop(sepAt + 8)} />
						<Tag x={g1.x} y={g1.y - 74} text={lab.extra ?? '2 copies'} amber o={fadeAt(frame, sepAt + 40)} frame={frame} />
					</g>
					<Cell id={`${ID}g2`} x={g2.x} y={g2.y} r={52} nucleus={false} color="#dcecf8" scale={pop(sepAt + 12)} />
					<Tag x={g2.x} y={g2.y + 74} text={lab.none ?? '0 copies'} o={fadeAt(frame, sepAt + 40)} frame={frame} />
					<text x={g1.x} y={g1.y - 106} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>{lab.nd ?? 'non-disjunction'}</text>
				</g>
				{/* the pair: fails to separate, both move into gamete 1 */}
				{!fused &&
					[0, 1].map((k) => {
						const x0 = px - 16 + k * 32;
						const x = x0 + (g1.x - 16 + k * 32 - x0) * t;
						const y = PY + (g1.y - PY) * t + idleBob(frame, k + 3, 1);
						return <VRod key={k} id={`${ID}h${k}`} x={x} y={y} len={rodLen} t={20} color={k ? ROSE : BLUE} label={chr} opacity={fadeAt(frame, 0)} />;
					})}
				{/* fertilisation: a normal gamete (one copy) meets gamete 1 */}
				{!fused && (
					<g opacity={fadeAt(frame, fertAt - 20)}>
						<Cell id={`${ID}s`} x={sperm.x0 + (g1.x + 40 - sperm.x0) * f} y={sperm.y0 + (g1.y - 10 - sperm.y0) * f} r={30} nucleus={false} color="#e8f3e8" />
						<VRod id={`${ID}s1`} x={sperm.x0 + (g1.x + 40 - sperm.x0) * f} y={sperm.y0 + (g1.y - 10 - sperm.y0) * f} len={rodLen * 0.7} t={16} color={GREEN} label={chr} />
						<text x={sperm.x0 + 40} y={sperm.y0 + 6} fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={1 - f}>{lab.normal ?? 'normal gamete'}</text>
					</g>
				)}
				{fused && (
					<g>
						<path d={`M ${g1.x + 56} ${g1.y} Q ${zx - 40} ${g1.y - 30} ${zx - 60} ${zy - 58}`} stroke={TOK.inkMute} strokeWidth={2.5} strokeDasharray="5 6" fill="none" opacity={fadeAt(frame, fertAt + 36)} />
						<DioramaPlinth id={`${ID}zp`} cx={zx} cy={zy + 76} rx={104} />
						<g transform={`translate(${zx},${zy + idleBob(frame, 7, 1.2)}) scale(${pop(fertAt + 40)})`}>
							<Cell id={`${ID}z`} x={0} y={0} r={76} nucleus={false} color="#dcecf8" />
							{[BLUE, ROSE, GREEN].map((c, k) => (
								<VRod key={k} id={`${ID}z${k}`} x={(k - 1) * 34} y={0} len={rodLen} t={20} color={c} label={chr} />
							))}
						</g>
						<text x={zx} y={zy - 96} textAnchor="middle" fill={theme.accent} fontSize={20} fontWeight={800}>{lab.zygote ?? 'Zygote'}</text>
						<Tag x={zx} y={zy + 150} text={lab.trisomy ?? `Trisomy ${chr}: ${copies} copies in every cell`} amber o={fadeAt(frame, tagAt)} scale={pop(tagAt)} frame={frame} />
					</g>
				)}
			</g>
		));
	}

	// ── meiosis ─────────────────────────────────────────────────────────────
	if (mode === 'meiosis') {
		const g = props.genotype ?? 'AaBb';
		const genes = genesOf(g);
		const asAt = b.assort ?? 100;
		const coAt = b.cross ?? 280;
		const L = 190;
		const R = 570;
		const PY = 150;
		const lens = [88, 56];
		// gametes: one of each pair; index bits choose maternal (0) or paternal (1)
		const combos = Array.from({length: 2 ** genes.length}, (_, c) => genes.map((_, j) => (c >> (genes.length - 1 - j)) & 1));
		const cross = ease(frame, coAt + 30, coAt + 70);
		return svg('Independent assortment and crossing over', (
			<g>
				<g opacity={fadeAt(frame, asAt - 20)}>
					<text x={L} y={40} textAnchor="middle" fill={theme.accent} fontSize={21} fontWeight={800}>{lab.assort ?? 'Independent assortment'}</text>
					<DioramaPlinth id={`${ID}ap`} cx={L} cy={PY + 44} rx={110} />
					<Cell id={`${ID}ac`} x={L} y={PY + idleBob(frame, 2, 1)} r={62} nucleus={false} color="#dcecf8" />
					{genes.map((pr, j) =>
						pr.map((a, m) => (
							<VRod key={`${j}${m}`} id={`${ID}a${j}${m}`} x={L - 42 + j * 48 + m * 22} y={PY + idleBob(frame, j * 2 + m, 1)} len={lens[j]} t={18} color={m ? ROSE : BLUE} label={a} />
						)),
					)}
					{combos.map((c, k) => {
						const col = k % 2;
						const row = Math.floor(k / 2);
						const x = L - 84 + col * 168;
						const y = 322 + row * 96;
						const p = pop(asAt + 30 + k * 12);
						return (
							<g key={k} opacity={Math.min(1, p * 1.4)} transform={`translate(${x},${y + idleBob(frame, k + 9, 1)}) scale(${p})`}>
								<circle r={40} fill="#dcecf8" stroke="rgba(60,90,120,0.45)" strokeWidth={1.5} />
								{c.map((bit, j) => (
									<VRod key={j} id={`${ID}ga${k}${j}`} x={-12 + j * 24} y={0} len={lens[j] * 0.62} t={15} color={bit ? ROSE : BLUE} label={genes[j][bit]} />
								))}
							</g>
						);
					})}
					<text x={L} y={H - 38} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800} opacity={fadeAt(frame, asAt + 30 + combos.length * 12)}>
						{`${combos.length} different gametes`}
					</text>
				</g>
				<line x1={W / 2 + 10} y1={60} x2={W / 2 + 10} y2={H - 60} stroke={TOK.inkMute} strokeOpacity={0.35} strokeWidth={2} strokeDasharray="4 8" opacity={fadeAt(frame, coAt)} />
				<g opacity={fadeAt(frame, coAt)}>
					<text x={R} y={40} textAnchor="middle" fill={theme.accent} fontSize={21} fontWeight={800}>{lab.cross ?? 'Crossing over'}</text>
					<DioramaPlinth id={`${ID}cp`} cx={R} cy={PY + 122} rx={120} />
					{/* two homologues, each two chromatids; inner chromatids swap lower segments */}
					{[0, 1, 2, 3].map((k) => {
						const hom = k < 2 ? 0 : 1;
						const inner = k === 1 || k === 2;
						const base = hom ? ROSE : BLUE;
						const other = hom ? BLUE : ROSE;
						const x = R - 60 + k * 36 + (hom ? 12 : 0);
						const lower = inner && cross > 0.5 ? other : undefined;
						return (
							<g key={k}>
								<VRod
									id={`${ID}x${k}`}
									x={x}
									y={PY + 34 + idleBob(frame, k, 0.8)}
									len={170}
									t={22}
									color={base}
									lower={lower}
									split={0.6}
									label={genes[0][hom]}
									lowerLabel={lower ? genes[1][1 - hom] : genes[1][hom]}
								/>
							</g>
						);
					})}
					{/* the crossing point */}
					<g opacity={interpolate(cross, [0, 0.3, 0.7, 1], [0, 1, 1, 0.9], clamp)}>
						<path d={`M ${R - 24} ${PY + 50} L ${R + 36} ${PY + 50}`} stroke={AMBER} strokeWidth={3} strokeDasharray="6 4" />
						<circle cx={R + 6} cy={PY + 50} r={8 + idlePulse(frame) * 2} fill="none" stroke={AMBER} strokeWidth={2.5} />
					</g>
					<text x={R} y={PY + 234} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800} opacity={fadeAt(frame, coAt + 80)}>
						{lab.recombinant ?? 'Recombinant chromatids'}
					</text>
					<text x={R} y={PY + 258} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={fadeAt(frame, coAt + 90)}>
						{`${genes[0][0]} with ${genes[1][1]}, and ${genes[0][1]} with ${genes[1][0]}`}
					</text>
				</g>
			</g>
		));
	}

	// ── fertilise ───────────────────────────────────────────────────────────
	const g = props.genotype ?? 'AaBb';
	const genes = genesOf(g);
	const gams = Array.from({length: 2 ** genes.length}, (_, c) => genes.map((pr, j) => pr[(c >> (genes.length - 1 - j)) & 1]).join(''));
	const meetAt = b.meet ?? 96;
	const fillAt = b.fill ?? 178;
	const n = gams.length;
	const cell = 74;
	const GX = 250;
	const GY = 118;
	// offspring genotype: per gene, maternal allele then paternal, written dominant-first
	const geno = (e: string, s: string) => e.split('').map((a, j) => [a, s[j]]);
	const key = (e: string, s: string) => geno(e, s).map(([x, y]) => [x, y].sort().join('')).join('');
	const distinct = new Set(gams.flatMap((e) => gams.map((s) => key(e, s)))).size;
	const pick = {r: 1, c: 2};
	const mt = ease(frame, meetAt, meetAt + 40);
	return svg('Random fertilisation makes new genotypes', (
		<g>
			<g opacity={fadeAt(frame, 0)}>
				<text x={GX - 70} y={GY - 66} textAnchor="middle" fill={BLUE} fontSize={18} fontWeight={800}>{lab.eggs ?? 'Eggs'}</text>
				<text x={GX + (n * cell) / 2} y={GY - 66} textAnchor="middle" fill={ROSE} fontSize={18} fontWeight={800}>{lab.sperm ?? 'Sperm'}</text>
				{gams.map((s, c) => (
					<g key={`s${c}`} transform={`translate(${GX + c * cell + cell / 2},${GY - 30})`}>
						<ellipse rx={30} ry={18} fill="#fbe6ea" stroke={ROSE} strokeWidth={2} />
						<text y={6} textAnchor="middle" fill={ROSE} fontSize={17} fontWeight={800}>{s}</text>
					</g>
				))}
				{gams.map((e, r) => (
					<g key={`e${r}`} transform={`translate(${GX - 70},${GY + r * cell + cell / 2})`}>
						<circle r={27} fill="#e3eefa" stroke={BLUE} strokeWidth={2} />
						<text y={6} textAnchor="middle" fill={BLUE} fontSize={17} fontWeight={800}>{e}</text>
					</g>
				))}
				<StoneLedge id={`${ID}fl`} x={GX - 16} y={GY + n * cell + 6} w={n * cell + 32} d={14} />
			</g>
			{gams.map((e, r) =>
				gams.map((s, c) => {
					const idx = r * n + c;
					const isPick = r === pick.r && c === pick.c;
					const at = isPick ? meetAt + 40 : fillAt + idx * 6;
					const p = pop(at);
					if (p <= 0.01) return null;
					const x = GX + c * cell;
					const y = GY + r * cell;
					return (
						<g key={idx} opacity={Math.min(1, p * 1.5)}>
							<rect x={x + 3} y={y + 3} width={cell - 6} height={cell - 6} rx={12} fill={isPick ? '#fff6e6' : '#ffffff'} stroke={isPick ? AMBER : 'rgba(0,0,0,0.12)'} strokeWidth={isPick ? 2.5 + idlePulse(frame) : 1.5} />
							<text x={x + cell / 2} y={y + cell / 2 + 6} textAnchor="middle" fontSize={17} fontWeight={800}>
								{geno(e, s).map(([m, pa], j) => {
									// dominant allele written first (the usual notation); colour still shows which parent it came from
									const pair = [{a: m, c: BLUE}, {a: pa, c: ROSE}].sort((u, v) => (u.a === v.a ? 0 : u.a === u.a.toUpperCase() ? -1 : 1));
									return (
										<tspan key={j}>
											<tspan fill={pair[0].c}>{pair[0].a}</tspan>
											<tspan fill={pair[1].c}>{pair[1].a}</tspan>
										</tspan>
									);
								})}
							</text>
						</g>
					);
				}),
			)}
			{/* one random fusion: the chosen sperm travels to the chosen egg's row */}
			{mt > 0 && mt < 1 && (
				<g>
					<circle cx={GX + pick.c * cell + cell / 2} cy={GY - 30 + (pick.r * cell + cell / 2 + 30) * mt} r={10} fill={ROSE} />
					<circle cx={GX - 70 + (pick.c * cell + cell / 2 + 70) * mt} cy={GY + pick.r * cell + cell / 2} r={10} fill={BLUE} />
				</g>
			)}
			<text x={W - 20} y={GY + n * cell + 56} textAnchor="end" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, fillAt + n * n * 6)}>
				{`${n} × ${n} = ${n * n} combinations · ${distinct} different genotypes`}
			</text>
			<text x={20} y={GY + n * cell + 56} fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={fadeAt(frame, meetAt + 40)}>
				<tspan fill={BLUE}>from mother</tspan> · <tspan fill={ROSE}>from father</tspan>
			</text>
		</g>
	));
};
