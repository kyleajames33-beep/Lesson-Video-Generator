// M6 B05 drawing parts: the cell lineage tree (one zygote dividing downward into a fan of about 60 small cells, thin
// ink edges like a family tree; an amber mutation dot whose descendants tint pale amber as they form; a plum germ-line
// side branch), the gene map (one long slim strand with soft region bands: far control stretch and promoter in teal,
// three warm coding bands, introns as thin grey loops; the B6b polymerase, an mRNA ribbon, a protein blob with an
// amount bar), small gamete circles and a stop bar. Chromosomes are b04's clean bars, never over a painted cell.
// B01's strand parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng} from '../../kit';
import {GREYT, GREY_INK, Sx} from '../bio-m5-b13/shared';
import {MRNA, MRNA_INK, RnaPol} from '../bio-m5-b06b/shared';
import {ProteinBlob} from '../bio-m5-b06c/shared';
import {BIO_INK, CARD, EDGE, FillBar, PLUM, PLUM_SOFT, SlimStrand, clamp01, lerp, rungX, smooth, vis} from '../bio-m6-b01/parts';
import {TEALC} from '../bio-m6-b04/parts';

export {clamp01, lerp, smooth, vis, PLUM, PLUM_SOFT, BIO_INK, CARD, EDGE, TEALC, MRNA, MRNA_INK, GREYT, GREY_INK};
export const TEAL_FILL = '#d4ede9';
export const WARM = '#c98a4b', WARM_FILL = '#f6dfc0';
export const CREAM = '#fbf3df', GOLD = '#f3e2b0', TINT = '#f9d98f';

// ---------- the cell lineage tree ----------
export type TreeNode = {g: number; j: number};
export type TreeProps = {
	x: number; y: number; R?: number; span?: number; G?: number; cs?: number; o?: number;
	/** Generations shown (0..G, fractional while dividing). */
	grow?: number;
	/** The mutated cell; `t` spreads the tint down its descendants, one generation per unit (1 = the cell itself). */
	mut?: TreeNode & {t: number};
	/** The germ-line side branch, tinted plum. */
	germ?: TreeNode & {o: number};
	/** Body cells tinted cream-gold. */
	soma?: number;
	/** Extra amber dots (more mutations). */
	extra?: (TreeNode & {o: number})[];
	/** Cells crowding out of the mutated patch (a cancer). */
	crowd?: number;
	/** Body cells (not the mutation's descendants) dimmed. */
	dimRest?: number;
	/** Germ branch ring pulse. */
	pulse?: number;
	edgeColor?: string;
};
const isDesc = (n: TreeNode, a: TreeNode) => n.g >= a.g && n.j >> (n.g - a.g) === a.j;
/** Position and radius of a tree cell (screen units). */
export const treePt = (p: TreeProps, g: number, j: number): [number, number, number] => {
	const R = p.R ?? 300, span = p.span ?? 2.6, G = p.G ?? 6, cs = p.cs ?? 1;
	const a = -span / 2 + (span * (j + 0.5)) / Math.pow(2, g);
	const r = g === 0 ? 0 : R * Math.pow(g / G, 0.8);
	const rad = lerp(17, 5.6, g / G) * cs * (R / 300);
	return [p.x + r * Math.sin(a), p.y + r * Math.cos(a), rad];
};
export const CellTree: React.FC<TreeProps> = (p) => {
	const {G = 6, grow = G, mut, germ, soma = 0, extra = [], crowd = 0, dimRest = 0, o = 1, pulse = 0, edgeColor = '#cdbfa8'} = p;
	if (o <= 0.01) return null;
	const nodes: React.ReactNode[] = [];
	const edges: React.ReactNode[] = [];
	for (let g = 0; g <= G; g++) {
		const t = g === 0 ? clamp01(grow + 1) : clamp01(grow - (g - 1));
		if (t <= 0.01) continue;
		const st = smooth(t);
		for (let j = 0; j < Math.pow(2, g); j++) {
			const [ox, oy, rad] = treePt(p, g, j);
			const [px, py] = g === 0 ? [ox, oy] : treePt(p, g - 1, j >> 1);
			const x = lerp(px, ox, st), y = lerp(py, oy, st);
			const n = {g, j};
			const inGerm = germ && germ.o > 0.01 && isDesc(n, germ) ? germ.o : 0;
			const m = mut && isDesc(n, mut) ? clamp01(mut.t - (g - mut.g)) : 0;
			const dim = m > 0.5 ? 0 : dimRest;
			if (g > 0) edges.push(<line key={`e${g}-${j}`} x1={px} y1={py} x2={x} y2={y} stroke={edgeColor} strokeWidth={Math.max(1.2, 2.6 - g * 0.25) * (p.cs ?? 1)} opacity={t * (1 - 0.6 * dim)} />);
			const fill = inGerm > 0.5 ? PLUM_SOFT : m > 0.5 ? TINT : soma > 0.5 ? GOLD : CREAM;
			const stroke = inGerm > 0.5 ? PLUM : m > 0.5 ? AMBER_INK : INK_SOFT;
			const ex = extra.find(e => e.g === g && e.j === j);
			nodes.push(
				<g key={`n${g}-${j}`} opacity={t * (1 - 0.65 * dim)}>
					<circle cx={x} cy={y} r={rad} fill={fill} stroke={stroke} strokeWidth={rad > 8 ? 2.2 : 1.4} />
					{m > 0.01 ? <circle cx={x} cy={y} r={rad > 8 ? rad * 0.42 : rad * 0.55} fill={AMBER} opacity={m} /> : null}
					{ex && ex.o > 0.01 ? <circle cx={x + rad * 0.9} cy={y - rad * 0.9} r={Math.max(3.5, rad * 0.5)} fill={AMBER_INK} opacity={ex.o} /> : null}
				</g>,
			);
		}
	}
	// germ branch ring
	let ring: React.ReactNode = null;
	if (germ && pulse > 0.01) {
		const [gx, gy, gr] = treePt(p, germ.g, germ.j);
		ring = <circle cx={gx} cy={gy} r={gr + 8 + 6 * Math.sin(pulse * Math.PI)} fill="none" stroke={PLUM} strokeWidth={4} opacity={Math.sin(pulse * Math.PI)} />;
	}
	// crowding cells (a cancer): extra amber cells past the patch's leaves
	const crowdN: React.ReactNode[] = [];
	if (mut && crowd > 0.01) {
		const r = rng(mut.j * 13 + mut.g * 7 + 5);
		const leaves = Math.pow(2, G - mut.g);
		const total = 46;
		for (let k = 0; k < total; k++) {
			const leaf = Math.floor(r() * leaves);
			const [lx, ly, lr] = treePt(p, G, (mut.j << (G - mut.g)) + leaf);
			const dx = (r() - 0.5) * 2, dy = r();
			const show = clamp01(crowd * total - k);
			const out = 10 + 34 * crowd * (0.4 + r());
			const ang = Math.atan2(ly - p.y, lx - p.x);
			if (show <= 0.01) continue;
			crowdN.push(<circle key={`c${k}`} cx={lx + Math.cos(ang) * out + dx * 10} cy={ly + Math.sin(ang) * out + dy * 8} r={lr * 1.05} fill={TINT} stroke={AMBER_INK} strokeWidth={1.3} opacity={show} />);
		}
	}
	return <g opacity={o}>{edges}{crowdN}{nodes}{ring}</g>;
};

// ---------- small gamete and zygote circles ----------
export const Dot: React.FC<{x: number; y: number; r?: number; o?: number; mut?: number; plum?: boolean; fill?: string}> = ({x, y, r = 22, o = 1, mut = 0, plum = false, fill}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={fill ?? (plum ? PLUM_SOFT : CREAM)} stroke={plum ? PLUM : INK_SOFT} strokeWidth={2.5} />
		{mut > 0.01 ? <circle cx={x} cy={y} r={r * 0.42} fill={AMBER} opacity={mut} /> : null}
	</g>
));
/** A short grey stop bar across a path. */
export const StopMark: React.FC<{x: number; y: number; o?: number; w?: number}> = ({x, y, o = 1, w = 44}) => (o <= 0.01 ? null : (
	<line x1={x - w / 2} y1={y} x2={x + w / 2} y2={y} stroke={GREYT} strokeWidth={8} strokeLinecap="round" opacity={o} />
));

// ---------- the gene map ----------
export const GX0 = 110, GP = 28, GN = 61, GY = 700, GG = 34;
export const gr = (i: number) => rungX(GX0, i, GP);
export const REG = {ctrl: [5, 7], promo: [20, 23], e1: [24, 29], e2: [32, 37], e3: [40, 45]} as const;
export type RegKey = keyof typeof REG;
export const regX = (k: RegKey): [number, number] => [gr(REG[k][0]) - GP / 2, gr(REG[k][1]) + GP / 2];
export const regC = (k: RegKey) => (regX(k)[0] + regX(k)[1]) / 2;
export const GENE_X: [number, number] = [regX('e1')[0], regX('e3')[1]];
/** A soft region band behind the strand. */
export const Band: React.FC<{x1: number; x2: number; o?: number; kind: 'teal' | 'warm' | 'grey'; bright?: number; y?: number; gap?: number; dy?: number}> = ({x1, x2, o = 1, kind, bright = 0, y = GY, gap = GG, dy = 0}) => (o <= 0.01 ? null : (
	<rect x={x1} y={y - 14 + dy} width={x2 - x1} height={gap + 28} rx={12}
		fill={kind === 'teal' ? TEAL_FILL : kind === 'warm' ? WARM_FILL : '#eceae4'} stroke={kind === 'teal' ? TEALC : kind === 'warm' ? WARM : '#c9c3b8'}
		strokeWidth={2 + 2.5 * bright} opacity={o * (0.75 + 0.25 * bright)} />
));
/** Grey intron loop lifted above the strand, between two exon bands. */
export const IntronLoop: React.FC<{x1: number; x2: number; o?: number; y?: number; lift?: number; hot?: number}> = ({x1, x2, o = 1, y = GY - 14, lift = 1, hot = 0}) => (o <= 0.01 ? null : (
	<path d={`M${x1},${y} C${x1 + 4},${y - 70 * lift} ${x2 - 4},${y - 70 * lift} ${x2},${y}`} fill="none" stroke={hot > 0.5 ? AMBER_INK : '#9a948a'} strokeWidth={4} strokeLinecap="round" opacity={o} />
));
export type GeneMapProps = {
	o?: number; ctrl?: number; promo?: number; exons?: number; brightCoding?: number; brightNC?: number; introns?: number;
	rungs?: {i: number; o: number}[]; draw?: number; dy?: number; s?: number; cx?: number; cy?: number;
};
/** The long strand with its region bands. `s`, `cx`, `cy` shrink it about a point. */
export const GeneMap: React.FC<GeneMapProps> = ({o = 1, ctrl = 0, promo = 0, exons = 1, brightCoding = 0, brightNC = 0, introns = 0, rungs = [], draw = 1, dy = 0, s = 1, cx = 960, cy = GY}) => {
	if (o <= 0.01) return null;
	const pull = 8 * introns;
	return (
		<g opacity={o} transform={s !== 1 || dy ? `translate(${cx},${cy + dy}) scale(${s}) translate(${-cx},${-cy})` : undefined}>
			{brightNC > 0.01 ? (
				<>
					<Band x1={GX0} x2={GENE_X[0] - 4} kind="grey" o={brightNC} />
					<Band x1={GENE_X[1] + 4} x2={GX0 + GN * GP} kind="grey" o={brightNC} />
				</>
			) : null}
			<Band x1={regX('ctrl')[0]} x2={regX('ctrl')[1]} kind="teal" o={ctrl} />
			<Band x1={regX('promo')[0]} x2={regX('promo')[1]} kind="teal" o={promo} />
			{(['e1', 'e2', 'e3'] as RegKey[]).map((k, n) => <Band key={k} x1={regX(k)[0] + (n - 1) * -pull * 0} x2={regX(k)[1]} kind="warm" o={exons} bright={brightCoding} />)}
			{introns > 0.01 ? (
				<>
					<IntronLoop x1={regX('e1')[1] + 3} x2={regX('e2')[0] - 3} lift={introns} o={introns} />
					<IntronLoop x1={regX('e2')[1] + 3} x2={regX('e3')[0] - 3} lift={introns} o={introns} />
				</>
			) : null}
			<SlimStrand x={GX0} y={GY} n={GN} pitch={GP} gap={GG} draw={draw} rung={i => { const r = rungs.find(q => q.i === i); return r && r.o > 0.01 ? {color: AMBER, w: 7, o: 1} : undefined; }} />
		</g>
	);
};
/** The B6b polymerase, small, sitting on the promoter (it can wobble off and on). */
export const Pol: React.FC<{x?: number; y?: number; o?: number; dx?: number; dy?: number; w?: number}> = ({x = regC('promo'), y = GY - 62, o = 1, dx = 0, dy = 0, w = 170}) => (
	<RnaPol x={x + dx} y={y + dy} w={w} h={w * 0.72} o={o} label={false} />
);
/** An mRNA ribbon above the gene, growing from left to right; `th` sets its thickness. */
export const MrnaRibbon: React.FC<{x1?: number; x2?: number; y?: number; grow?: number; th?: number; o?: number}> = ({x1 = GENE_X[0], x2 = GENE_X[1], y = GY - 150, grow = 1, th = 12, o = 1}) => (o <= 0.01 || grow <= 0.01 ? null : (
	<g opacity={o}>
		<line x1={x1} y1={y} x2={lerp(x1, x2, clamp01(grow))} y2={y} stroke={MRNA} strokeWidth={Math.max(2, th)} strokeLinecap="round" />
		{th >= 6 ? Array.from({length: Math.floor((x2 - x1) * clamp01(grow) / 22)}, (_, k) => <line key={k} x1={x1 + 11 + k * 22} y1={y + th / 2} x2={x1 + 11 + k * 22} y2={y + th / 2 + 9} stroke={MRNA_INK} strokeWidth={2.5} opacity={0.7} />) : null}
	</g>
));
/** Protein blob with an amount bar beneath it. */
export const Protein: React.FC<{x: number; y: number; p?: number; o?: number; r?: number; bar?: boolean; ring?: number; short?: number; barW?: number}> = ({x, y, p = 1, o = 1, r = 46, bar = true, ring = 0, short = 0, barW = 150}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<ProteinBlob x={x - short * r * 0.3} y={y} r={r * (1 - 0.35 * short)} fill="#b8c9b0" stroke="#5c7353" />
		{short > 0.01 ? <ellipse cx={x + r * 0.55} cy={y} rx={r * 0.45} ry={r * 0.5} fill="none" stroke={GREYT} strokeWidth={2.5} strokeDasharray="6 5" opacity={short} /> : null}
		{ring > 0.01 ? <circle cx={x} cy={y} r={r * 1.25} fill="none" stroke={AMBER} strokeWidth={5} opacity={ring} /> : null}
		{bar ? <FillBar x={x - barW / 2} y={y + r + 22} w={barW} h={24} p={p} color="#7fa173" /> : null}
	</g>
));

// ---------- labels and chips ----------
/** A tag line: amber hand text that fades in and out. */
export const Tag: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, at, out, size = 36, color = AMBER_INK, anchor = 'start'}) => (
	<Sx x={x} y={y} text={text} size={size} color={color} hand anchor={anchor} at={at} out={out} />
);
/** Small grey region label. */
export const RLab: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string}> = ({x, y, text, at, out, size = 26, anchor = 'middle', color = INK_SOFT}) => (
	<Sx x={x} y={y} text={text} size={size} color={color} hand anchor={anchor} at={at} out={out} />
);
/** A small rounded chip with display text. */
export const MiniChip: React.FC<{x: number; y: number; text: string; o?: number; amber?: boolean; size?: number; anchor?: 'start' | 'middle'}> = ({x, y, text, o = 1, amber = false, size = 28, anchor = 'middle'}) => {
	if (o <= 0.01) return null;
	const w = text.length * size * 0.56 + 30;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	return (
		<g opacity={o}>
			<rect x={x0} y={y - size * 0.95} width={w} height={size * 1.45} rx={size * 0.72} fill={amber ? '#fff3d9' : CARD} stroke={amber ? AMBER : EDGE} strokeWidth={amber ? 3.5 : 2.5} />
			<text x={x0 + w / 2} y={y} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}} fill={amber ? AMBER_INK : INK}>{text}</text>
		</g>
	);
};
/** Typeset codon text (terracotta), one codon per slot. */
export const CodonText: React.FC<{x: number; y: number; codons: string[]; o?: number; size?: number; hot?: number; gap?: number; hotColor?: string}> = ({x, y, codons, o = 1, size = 40, hot = -1, gap = 26, hotColor = AMBER_INK}) => {
	if (o <= 0.01) return null;
	const cw = size * 0.68 * 3 + gap;
	return (
		<g opacity={o}>
			{codons.map((c, k) => (
				<text key={k} x={x + k * cw} y={y} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, letterSpacing: 2}} fill={k === hot ? hotColor : MRNA_INK}>{c}</text>
			))}
		</g>
	);
};
export const fadeOut = (f: number, at: number, out?: number, d = 12) => vis(f, at, out, d);
export {AMBER, AMBER_INK, INK, INK_SOFT, FONT_DISPLAY, FONT_HAND, prog};
