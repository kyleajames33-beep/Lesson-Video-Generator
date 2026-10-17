// Shared genetics kit (B9, B10 and the later G02 import this file).
// 1. The cross logic ported from the legacy CrossDiagram (logic only, legacy-engine-policy.md): every box's genotype
//    from the two parents' gametes, its phenotype from a dominance map, the genotype ratio, the phenotype ratio
//    (merging boxes whose phenotype matches) and, for sex linkage, sons against daughters (a genotype with Y is a son).
// 2. A data-driven pedigree drawer with standard symbols only (squares, circles, shading, an optional carrier dot,
//    couple and sibship lines, Roman numerals and individual numbers). No people are drawn.
// 3. fitsMode: a brute-force checker that tries every genotype assignment and reports whether autosomal dominant,
//    autosomal recessive or X-linked recessive fits a pedigree (one gene, full expression, no new mutation).
// 4. Explainer-style tokens: allele chips (serif letters so capital and lower case differ clearly), gamete discs (B5b's
//    painted cell with a plum or teal edge for the parent of origin), a 2 x 2 Punnett grid that fills box by box, and
//    small helpers. Allele markup: "T", "t", "X^{R}", "C^{W}", "I^{A}", "i" (superscripts in braces).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, CPLUM, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PCell, TEALC, clamp01, lerp, prog, scribbleEllipse} from '../bio-m5-b08/shared';

export const SERIF = 'Georgia, "Times New Roman", serif';
export const EDGE = {top: CPLUM, side: TEALC} as const;

// ---------- 1. cross logic ----------
export type Src = 'top' | 'side';
export type CrossCell = {i: number; r: number; c: number; pair: [string, string]; src: [Src, Src]; g: string; ph: string; male: boolean};
export type CrossResult = {
	cells: CrossCell[];
	geno: {g: string; n: number}[];
	phen: {ph: string; n: number}[];
	sons: CrossCell[];
	daughters: CrossCell[];
	/** "1 TT : 2 Tt : 1 tt" */
	genoText: string;
	/** "3 tall : 1 short" */
	phenText: string;
	/** fraction of all boxes (or of a subset) matching a test, as "1/4" */
	frac: (test: (c: CrossCell) => boolean, of?: CrossCell[]) => string;
	share: (test: (c: CrossCell) => boolean, of?: CrossCell[]) => number;
};
/** Genotype label: single-letter alleles join tight ("Tt"), marked-up alleles join with a space ("X^{R} Y"). */
export const genoLabel = (pair: string[]) => pair.join(pair.every(a => a.length === 1) ? '' : ' ');
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
export const fracStr = (n: number, d: number) => (n === 0 ? '0' : n === d ? '1' : `${n / gcd(n, d)}/${d / gcd(n, d)}`);
/**
 * A monohybrid cross. `top` gametes go across the top (plum), `side` gametes down the side (teal). `order` ranks the
 * alleles for writing a genotype (dominant first; Y last). `pheno` maps a genotype label to a phenotype.
 */
export const cross = (top: [string, string], side: [string, string], order: string[], pheno: (g: string) => string): CrossResult => {
	const rank = (a: string) => {
		const k = order.indexOf(a);
		if (k < 0) throw new Error(`allele ${a} missing from the order list`);
		return k;
	};
	const cells: CrossCell[] = [0, 1].flatMap(r => [0, 1].map(c => {
		const items = ([[top[c], 'top'], [side[r], 'side']] as [string, Src][]).sort((x, y) => rank(x[0]) - rank(y[0]));
		const pair: [string, string] = [items[0][0], items[1][0]];
		const g = genoLabel(pair);
		return {i: r * 2 + c, r, c, pair, src: [items[0][1], items[1][1]] as [Src, Src], g, ph: pheno(g), male: pair.includes('Y')};
	}));
	const sorted = [...cells].sort((a, b) => rank(a.pair[0]) - rank(b.pair[0]) || rank(a.pair[1]) - rank(b.pair[1]));
	const geno: {g: string; n: number}[] = [];
	for (const c of sorted) { const e = geno.find(q => q.g === c.g); if (e) e.n++; else geno.push({g: c.g, n: 1}); }
	const phen: {ph: string; n: number}[] = [];
	for (const c of sorted) { const e = phen.find(q => q.ph === c.ph); if (e) e.n++; else phen.push({ph: c.ph, n: 1}); }
	const share = (test: (c: CrossCell) => boolean, of = cells) => of.filter(test).length / of.length;
	const frac = (test: (c: CrossCell) => boolean, of = cells) => fracStr(of.filter(test).length, of.length);
	return {
		cells, geno, phen, sons: cells.filter(c => c.male), daughters: cells.filter(c => !c.male),
		genoText: geno.map(q => `${q.n} ${q.g}`).join(' : '), phenText: phen.map(q => `${q.n} ${q.ph}`).join(' : '), frac, share,
	};
};
/** Complete dominance: any genotype holding the dominant allele shows the dominant phenotype. */
export const completeDom = (dom: string, phDom: string, phRec: string) => (g: string) => (g.split(' ').join('').includes(dom) ? phDom : phRec);
/** Binomial chance of exactly k successes in n tries. */
export const binom = (n: number, k: number, p: number) => {
	let c = 1;
	for (let j = 0; j < k; j++) c = (c * (n - j)) / (j + 1);
	return c * p ** k * (1 - p) ** (n - k);
};

// ---------- 2. pedigree data and fitsMode ----------
export type Sex = 'M' | 'F';
/** id is "II-3" (generation numeral, individual number); col is the horizontal slot. */
export type PInd = {id: string; sex: Sex; aff: boolean; col: number; carrier?: boolean};
export type PFam = {a: string; b: string; kids: string[]};
export type Ped = {inds: PInd[]; fams: PFam[]};
export type Mode = 'AD' | 'AR' | 'XR';
export const ROMAN = ['I', 'II', 'III', 'IV'];
export const genOf = (id: string) => ROMAN.indexOf(id.split('-')[0]) + 1;
export const numOf = (id: string) => Number(id.split('-')[1]);
const indOf = (ped: Ped, id: string) => {
	const p = ped.inds.find(q => q.id === id);
	if (!p) throw new Error(`pedigree individual ${id} missing`);
	return p;
};
/**
 * Try every genotype assignment (one gene; full expression; no new mutation). Autosomal genotypes AA, Aa, aa;
 * X-linked recessive: females HH, Hh, hh, males H or h (one X). A carrier dot forces Hh in XR mode. Returns whether
 * the mode fits, how many assignments fit, and the set of genotypes each individual can have.
 */
export const fitsMode = (ped: Ped, mode: Mode) => {
	const opts = (p: PInd) => (mode === 'XR' ? (p.sex === 'M' ? ['H', 'h'] : ['HH', 'Hh', 'hh']) : ['AA', 'Aa', 'aa']);
	const affected = (p: PInd, g: string) => (mode === 'AD' ? g.includes('A') : mode === 'AR' ? g === 'aa' : p.sex === 'M' ? g === 'h' : g === 'hh');
	const childOk = (kid: PInd, kg: string, dadG: string, mumG: string) => {
		if (mode === 'XR') {
			if (kid.sex === 'M') return mumG.includes(kg);
			const [x, y] = kg.split('');
			return (x === dadG && mumG.includes(y)) || (y === dadG && mumG.includes(x));
		}
		const [x, y] = kg.split('');
		return (dadG.includes(x) && mumG.includes(y)) || (dadG.includes(y) && mumG.includes(x));
	};
	const possible: Record<string, Set<string>> = Object.fromEntries(ped.inds.map(p => [p.id, new Set<string>()]));
	const g: Record<string, string> = {};
	let count = 0;
	const check = () => ped.fams.every(f => {
		const A = indOf(ped, f.a), B = indOf(ped, f.b);
		const dad = A.sex === 'M' ? A : B, mum = A.sex === 'M' ? B : A;
		return f.kids.every(k => childOk(indOf(ped, k), g[k], g[dad.id], g[mum.id]));
	});
	const rec = (k: number) => {
		if (k === ped.inds.length) {
			if (check()) { count++; for (const p of ped.inds) possible[p.id].add(g[p.id]); }
			return;
		}
		const p = ped.inds[k];
		for (const o of opts(p)) {
			if (affected(p, o) !== p.aff) continue;
			if (mode === 'XR' && p.carrier && o !== 'Hh') continue;
			g[p.id] = o;
			rec(k + 1);
		}
	};
	rec(0);
	return {fits: count > 0, count, possible};
};
/** The only genotype an individual can have under a mode, or null when more than one fits. */
export const onlyGeno = (ped: Ped, mode: Mode, id: string) => {
	const s = fitsMode(ped, mode).possible[id];
	return s.size === 1 ? [...s][0] : null;
};

// ---------- 3. pedigree drawing ----------
export type PLay = {x0: number; y0: number; gap: number; row: number; sz: number};
export const pedXY = (ped: Ped, L: PLay) => (id: string): [number, number] => {
	const p = indOf(ped, id);
	return [L.x0 + p.col * L.gap, L.y0 + (genOf(id) - 1) * L.row];
};
/** One pedigree symbol: square (male) or circle (female), ink-filled when affected, optional centre carrier dot. */
export const PSym: React.FC<{x: number; y: number; sex: Sex; aff: boolean; sz: number; o?: number; dot?: number; fill?: number}> = ({x, y, sex, aff, sz, o = 1, dot = 0, fill}) => {
	if (o <= 0.01) return null;
	const fo = fill ?? (aff ? 1 : 0);
	const sw = Math.max(3, sz * 0.06);
	return (
		<g opacity={o}>
			{sex === 'M'
				? <rect x={x - sz / 2} y={y - sz / 2} width={sz} height={sz} rx={sz * 0.06} fill="#fffdf8" stroke={INK} strokeWidth={sw} />
				: <circle cx={x} cy={y} r={sz / 2} fill="#fffdf8" stroke={INK} strokeWidth={sw} />}
			{fo > 0.01 ? (sex === 'M'
				? <rect x={x - sz / 2} y={y - sz / 2} width={sz} height={sz} rx={sz * 0.06} fill={INK} opacity={fo} />
				: <circle cx={x} cy={y} r={sz / 2} fill={INK} opacity={fo} />) : null}
			{dot > 0.01 ? <circle cx={x} cy={y} r={sz * 0.14} fill={INK} opacity={dot} /> : null}
		</g>
	);
};
export type PedProps = {
	ped: Ped; L: PLay;
	/** appearance of each individual (0..1); lines follow the people they join */
	o?: (id: string) => number;
	/** draw-on rings: id to frame */
	rings?: Record<string, number>;
	/** genotype chips under symbols: id to [text, frame] */
	chips?: Record<string, [string, number]>;
	nums?: number; numerals?: number; dot?: number;
	numeralX?: number; ringColor?: string; chipSize?: number;
	/** opacity of individual numbers per person (defaults to nums) */
	dim?: (id: string) => number;
	/** extra multipliers for couple lines and for the lines down to children (to draw them on their own cue) */
	coupleO?: number; kidLineO?: number;
};
export const Pedigree: React.FC<PedProps> = ({ped, L, o = () => 1, rings = {}, chips = {}, nums = 1, numerals = 1, dot = 0, numeralX, ringColor = AMBER, chipSize, dim, coupleO = 1, kidLineO = 1}) => {
	const f = useCurrentFrame();
	const xy = pedXY(ped, L);
	const h = L.sz / 2;
	const sw = Math.max(3, L.sz * 0.055);
	const gens = [...new Set(ped.inds.map(p => genOf(p.id)))].sort();
	const minX = Math.min(...ped.inds.map(p => xy(p.id)[0]));
	const nx = numeralX ?? minX - L.sz * 1.15;
	const cs = chipSize ?? Math.max(22, L.sz * 0.36);
	return (
		<g>
			{/* couple lines, drops, sibship bars */}
			{ped.fams.map((fm, k) => {
				const [ax, ay] = xy(fm.a), [bx] = xy(fm.b);
				const co = Math.min(o(fm.a), o(fm.b)) * coupleO;
				const lx = Math.min(ax, bx) + h, rx = Math.max(ax, bx) - h, mx = (ax + bx) / 2;
				const kids = fm.kids.map(id => ({id, p: xy(id), o: o(id)}));
				const ko = Math.max(0, ...kids.map(q => q.o)) * Math.min(o(fm.a), o(fm.b)) * kidLineO;
				const barY = ay + L.row - h - Math.max(26, L.row * 0.13);
				const kxs = kids.map(q => q.p[0]);
				const bl = Math.min(mx, ...kxs), br = Math.max(mx, ...kxs);
				return (
					<g key={k}>
						{co > 0.01 ? <line x1={lx} y1={ay} x2={rx} y2={ay} stroke={INK} strokeWidth={sw} opacity={co} /> : null}
						{ko > 0.01 ? (
							<g opacity={ko} stroke={INK} strokeWidth={sw}>
								<line x1={mx} y1={ay} x2={mx} y2={barY} />
								<line x1={bl} y1={barY} x2={br} y2={barY} />
							</g>
						) : null}
						{kids.map(q => (q.o * ko > 0.01 ? <line key={q.id} x1={q.p[0]} y1={barY} x2={q.p[0]} y2={q.p[1] - h} stroke={INK} strokeWidth={sw} opacity={Math.min(q.o, ko)} /> : null))}
					</g>
				);
			})}
			{/* symbols */}
			{ped.inds.map(p => {
				const [x, y] = xy(p.id);
				const op = o(p.id);
				const dy = (1 - clamp01(op)) * -18;
				return <PSym key={p.id} x={x} y={y + dy} sex={p.sex} aff={p.aff} sz={L.sz} o={op} dot={p.carrier ? dot : 0} />;
			})}
			{/* individual numbers */}
			{ped.inds.map(p => {
				const [x, y] = xy(p.id);
				const no = Math.min(o(p.id), dim ? dim(p.id) : nums);
				return no > 0.01 ? <text key={'n' + p.id} x={x} y={y + h + L.sz * 0.42 + 4} textAnchor="middle" opacity={no} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: Math.max(20, L.sz * 0.34)}} fill={INK_SOFT}>{numOf(p.id)}</text> : null;
			})}
			{/* generation numerals */}
			{numerals > 0.01 ? gens.map(gn => {
				const ids = ped.inds.filter(p => genOf(p.id) === gn).map(p => p.id);
				const go = Math.max(...ids.map(id => o(id))) * numerals;
				return go > 0.01 ? <text key={'g' + gn} x={nx} y={L.y0 + (gn - 1) * L.row + L.sz * 0.16} textAnchor="end" opacity={go} style={{fontFamily: SERIF, fontWeight: 700, fontSize: Math.max(26, L.sz * 0.5)}} fill={INK}>{ROMAN[gn - 1]}</text> : null;
			}) : null}
			{/* genotype chips */}
			{Object.entries(chips).map(([id, [t, at]]) => {
				const [x, y] = xy(id);
				const co = prog(f, at, 12);
				return co > 0.01 ? <GenoTag key={'c' + id} x={x} y={y + h + L.sz * 0.42 + cs + 14} text={t} size={cs} o={co} /> : null;
			})}
			{/* rings */}
			{Object.entries(rings).map(([id, at], k) => {
				const [x, y] = xy(id);
				return f >= at ? <DrawPath key={'r' + id} d={scribbleEllipse(x, y, L.sz * 0.8, L.sz * 0.66, 11 + k)} at={at} dur={16} color={ringColor} width={Math.max(4, L.sz * 0.07)} /> : null;
			})}
		</g>
	);
};
/** A small trio icon (two parents and a child) for the giveaway lines. */
export const Trio: React.FC<{x: number; y: number; sz?: number; parentsAff: boolean; childAff: boolean; o?: number}> = ({x, y, sz = 34, parentsAff, childAff, o = 1}) => {
	if (o <= 0.01) return null;
	const gap = sz * 1.5;
	return (
		<g opacity={o}>
			<line x1={x - gap + sz / 2} y1={y} x2={x + gap - sz / 2} y2={y} stroke={INK} strokeWidth={3} />
			<line x1={x} y1={y} x2={x} y2={y + sz * 1.6 - sz / 2} stroke={INK} strokeWidth={3} />
			<PSym x={x - gap} y={y} sex="M" aff={parentsAff} sz={sz} />
			<PSym x={x + gap} y={y} sex="F" aff={parentsAff} sz={sz} />
			<PSym x={x} y={y + sz * 1.6} sex="F" aff={childAff} sz={sz} />
		</g>
	);
};

// ---------- 4. allele text, chips, discs, grid ----------
type ATok = {s: string; sup: boolean};
const atoks = (t: string): ATok[] => {
	const out: ATok[] = [];
	const re = /\^\{([^}]*)\}/g;
	let last = 0, m: RegExpExecArray | null;
	while ((m = re.exec(t))) {
		if (m.index > last) out.push({s: t.slice(last, m.index), sup: false});
		out.push({s: m[1], sup: true});
		last = m.index + m[0].length;
	}
	if (last < t.length) out.push({s: t.slice(last), sup: false});
	return out;
};
/** Width estimate of serif allele text. */
export const aw = (t: string, size: number) => atoks(t).reduce((w, k) => w + [...k.s].reduce((a, ch) => a + (ch === ' ' ? 0.3 : /[A-Z]/.test(ch) ? 0.7 : 0.5), 0) * size * (k.sup ? 0.62 : 1), 0);
/** Serif allele or genotype text with superscripts; y is the baseline. */
export const AText: React.FC<{x: number; y: number; t: string; size: number; color?: string; anchor?: 'start' | 'middle' | 'end'; o?: number; weight?: number}> = ({x, y, t, size, color = INK, anchor = 'middle', o = 1, weight = 700}) => {
	if (o <= 0.01) return null;
	let shift = 0;
	return (
		<text x={x} y={y} textAnchor={anchor} fill={color} opacity={o} style={{fontFamily: SERIF, fontWeight: weight, fontSize: size, whiteSpace: 'pre'}}>
			{atoks(t).map((k, i) => {
				const want = k.sup ? -size * 0.42 : 0;
				const dy = want - shift;
				shift = want;
				return <tspan key={i} dy={dy || undefined} style={k.sup ? {fontSize: size * 0.62} : undefined}>{k.s}</tspan>;
			})}
		</text>
	);
};
/** A genotype tag (cream pill, serif letters) for pinning under a symbol or plate. y is the pill centre. */
export const GenoTag: React.FC<{x: number; y: number; text: string; size?: number; o?: number; color?: string; stroke?: string}> = ({x, y, text, size = 30, o = 1, color = INK, stroke = INK_SOFT}) => {
	if (o <= 0.01) return null;
	const w = aw(text, size) + size * 0.9, hh = size * 1.25;
	return (
		<g opacity={o}>
			<rect x={x - w / 2} y={y - hh / 2} width={w} height={hh} rx={hh / 2} fill="#fffdf8" stroke={stroke} strokeWidth={2.5} />
			<AText x={x} y={y + size * 0.34} t={text} size={size} color={color} />
		</g>
	);
};
/** An allele chip: cream pill with an ink outline and a printed serif letter; `edge` adds the parent-of-origin colour. */
export const AlleleChip: React.FC<{x: number; y: number; t: string; r?: number; edge?: string; o?: number; ring?: number; s?: number}> = ({x, y, t, r = 26, edge, o = 1, ring = 0, s = 1}) => {
	if (o <= 0.01) return null;
	const size = r * (t.includes('^') ? 0.95 : 1.15);
	const w = Math.max(2 * r, aw(t, size) + r * 0.9);
	return (
		<g opacity={o} transform={s !== 1 ? `translate(${x},${y}) scale(${s}) translate(${-x},${-y})` : undefined}>
			{ring > 0.01 ? <rect x={x - w / 2 - 9} y={y - r - 9} width={w + 18} height={2 * r + 18} rx={r + 9} fill="none" stroke={AMBER} strokeWidth={5} opacity={ring} /> : null}
			{edge ? <rect x={x - w / 2 - 3} y={y - r - 3} width={w + 6} height={2 * r + 6} rx={r + 3} fill="none" stroke={edge} strokeWidth={5} /> : null}
			<rect x={x - w / 2} y={y - r} width={w} height={2 * r} rx={r} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />
			<AText x={x} y={y + size * 0.34} t={t} size={size} />
		</g>
	);
};
export const chipWidth = (t: string, r = 26) => Math.max(2 * r, aw(t, r * (t.includes('^') ? 0.95 : 1.15)) + r * 0.9);
/** A gamete disc: B5b's painted cell, small, with a plum or teal edge and one allele chip. */
export const GameteDisc: React.FC<{x: number; y: number; t: string; r?: number; edge?: string; o?: number; ring?: number; label?: string; labelO?: number}> = ({x, y, t, r = 38, edge, o = 1, ring = 0, label, labelO = 1}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<PCell cx={x} cy={y} rx={r * 1.1} ry={r * 0.95} />
			{edge ? <ellipse cx={x} cy={y} rx={r * 1.1 + 2} ry={r * 0.95 + 2} fill="none" stroke={edge} strokeWidth={4} /> : null}
			{ring > 0.01 ? <ellipse cx={x} cy={y} rx={r * 1.1 + 12} ry={r * 0.95 + 12} fill="none" stroke={AMBER} strokeWidth={5} opacity={ring} /> : null}
			<AlleleChip x={x} y={y} t={t} r={r * 0.5} />
			{label && labelO > 0.01 ? <text x={x} y={y + r + 36} textAnchor="middle" opacity={labelO} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: Math.max(26, r * 0.8)}} fill={AMBER_INK}>{label}</text> : null}
		</g>
	);
};

/** Geometry of a Punnett grid placed with its top-left box corner at (x, y). */
export const pgeom = (x: number, y: number, cell: number, discR: number) => ({
	box: (i: number): [number, number] => [x + ((i % 2) + 0.5) * cell, y + (Math.floor(i / 2) + 0.5) * cell],
	top: (c: number): [number, number] => [x + (c + 0.5) * cell, y - discR * 1.05 - 14],
	side: (r: number): [number, number] => [x - discR * 1.25 - 14, y + (r + 0.5) * cell],
	w: 2 * cell,
});
export type PunnettProps = {
	x: number; y: number; cell: number; res: CrossResult; top: [string, string]; side: [string, string];
	gridAt: number; topAt: number; sideAt: number; fillAt: (i: number) => number;
	discR?: number; o?: number; ring?: (i: number) => number; hi?: (i: number) => number;
	icon?: (i: number, x: number, y: number) => React.ReactNode;
	/** chips sit higher in the box when an icon shares it */
	chipDy?: number; chipR?: number; plain?: boolean;
	/** dim boxes (0..1 opacity of their contents) */
	dim?: (i: number) => number;
};
/**
 * A 2 x 2 Punnett grid: plum-edged gamete discs across the top, teal down the side; each box fills at fillAt(i) with
 * one chip flying in from its column disc and one from its row disc (genotype from the cross logic, never typed).
 */
export const Punnett: React.FC<PunnettProps> = ({x, y, cell, res, top, side, gridAt, topAt, sideAt, fillAt, discR, o = 1, ring, hi, icon, chipDy, chipR, plain = false, dim}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const dr = discR ?? cell * 0.2;
	const G = pgeom(x, y, cell, dr);
	const cr = chipR ?? cell * (cell < 130 ? 0.17 : 0.135);
	const gp = prog(f, gridAt, 18);
	const cdy = chipDy ?? (icon ? -cell * 0.2 : 0);
	return (
		<g opacity={o}>
			{gp > 0.01 ? (
				<g>
					<rect x={x} y={y} width={2 * cell} height={2 * cell} rx={10} fill="#fffdf8" opacity={gp} />
					<DrawPath d={`M${x},${y} L${x + 2 * cell},${y} L${x + 2 * cell},${y + 2 * cell} L${x},${y + 2 * cell} Z`} at={gridAt} dur={18} color={INK} width={4} />
					<DrawPath d={`M${x + cell},${y} L${x + cell},${y + 2 * cell}`} at={gridAt + 6} dur={12} color={INK} width={3} />
					<DrawPath d={`M${x},${y + cell} L${x + 2 * cell},${y + cell}`} at={gridAt + 6} dur={12} color={INK} width={3} />
				</g>
			) : null}
			{[0, 1].map(c => {
				const [tx, ty] = G.top(c);
				const p = prog(f, topAt + c * 6, 14);
				return plain
					? <AlleleChip key={'t' + c} x={tx} y={ty + dr * 0.4} t={top[c]} r={dr * 0.6} edge={EDGE.top} o={p} />
					: <GameteDisc key={'t' + c} x={tx} y={ty} t={top[c]} r={dr} edge={EDGE.top} o={p} />;
			})}
			{[0, 1].map(r => {
				const [sx, sy] = G.side(r);
				const p = prog(f, sideAt + r * 6, 14);
				return plain
					? <AlleleChip key={'s' + r} x={sx + dr * 0.3} y={sy} t={side[r]} r={dr * 0.6} edge={EDGE.side} o={p} />
					: <GameteDisc key={'s' + r} x={sx} y={sy} t={side[r]} r={dr} edge={EDGE.side} o={p} />;
			})}
			{res.cells.map(cl => {
				const [bx, by] = G.box(cl.i);
				const at = fillAt(cl.i);
				const t = prog(f, at, 16);
				if (f < at - 1) return null;
				const d = dim ? dim(cl.i) : 1;
				const h = hi ? hi(cl.i) : 0;
				const w0 = chipWidth(cl.pair[0], cr), w1 = chipWidth(cl.pair[1], cr);
				const gap = 6;
				const tot = w0 + w1 + gap;
				const dest: [number, number][] = [[bx - tot / 2 + w0 / 2, by + cdy], [bx + tot / 2 - w1 / 2, by + cdy]];
				return (
					<g key={cl.i} opacity={d}>
						{h > 0.01 ? <rect x={bx - cell / 2 + 6} y={by - cell / 2 + 6} width={cell - 12} height={cell - 12} rx={8} fill={AMBER} opacity={0.22 * h} /> : null}
						{icon && t > 0.98 ? icon(cl.i, bx, by + cell * 0.2) : null}
						{cl.pair.map((a, k) => {
							const from = cl.src[k] === 'top' ? G.top(cl.c) : G.side(cl.r);
							return <AlleleChip key={k} x={lerp(from[0], dest[k][0], t)} y={lerp(from[1], dest[k][1], t)} t={a} r={cr} edge={cl.src[k] === 'top' ? EDGE.top : EDGE.side} o={clamp01(t * 3)} />;
						})}
						{ring && ring(cl.i) > 0.01 ? <rect x={bx - cell / 2 + 4} y={by - cell / 2 + 4} width={cell - 8} height={cell - 8} rx={10} fill="none" stroke={AMBER} strokeWidth={6} opacity={ring(cl.i)} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** A tiny pea plant icon (coded, for boxes and fields): a stem with leaf pairs; tall or short. */
export const PlantIcon: React.FC<{x: number; y: number; tall: boolean; s?: number; o?: number; color?: string}> = ({x, y, tall, s = 1, o = 1, color = '#4f8a3c'}) => {
	if (o <= 0.01) return null;
	const h = (tall ? 54 : 22) * s;
	const pairs = tall ? 3 : 1;
	return (
		<g opacity={o}>
			<line x1={x} y1={y} x2={x} y2={y - h} stroke={color} strokeWidth={3.2 * s} strokeLinecap="round" />
			{Array.from({length: pairs}, (_, k) => {
				const yy = y - h * ((k + 0.6) / (pairs + 0.4));
				return (
					<g key={k}>
						<ellipse cx={x - 7 * s} cy={yy} rx={7 * s} ry={3.6 * s} fill={color} transform={`rotate(-25 ${x - 7 * s} ${yy})`} />
						<ellipse cx={x + 7 * s} cy={yy - 3 * s} rx={7 * s} ry={3.6 * s} fill={color} transform={`rotate(25 ${x + 7 * s} ${yy - 3 * s})`} />
					</g>
				);
			})}
		</g>
	);
};
