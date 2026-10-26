// M7 B07 drawing parts: the coded shape model (a receptor or antibody is a coded Y whose two tips carry one notch
// shape; an antigen is a coded patch of the matching shape on the bacterium's surface; both deliberately simplified and
// tagged as a model), the B cell with coded receptors placed exactly where the painted receptors were, the bacterium
// with its antigen patches and optional bound antibodies, the clone tree (1, 2, 4, 8, then a dense cluster), the gene
// shuffle bars, a short day axis, and the claim box. B06 (M7) parts and its response strip are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CARD, CTag, DrawPath, EDGE, GREYT, GREY_INK, GTag, Gloss, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, Ring, Sx, TEAL, TEAL_SOFT, TERRA,
	Travel, ZoomBox, clamp01, fitW, lerp, plH, prog, ptOf, pulse, rng, smooth, tw, vis, CardBox, Flow,
} from '../bio-m7-b06/parts';
import type {PB, Pt} from '../bio-m7-b06/parts';
import {FEAT, PLATES} from './assets';

export {
	AMBER, AMBER_INK, CARD, CTag, DrawPath, EDGE, GREYT, GREY_INK, GTag, Gloss, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, Ring, Sx, TEAL, TEAL_SOFT, TERRA,
	Travel, ZoomBox, clamp01, fitW, lerp, plH, prog, ptOf, pulse, rng, smooth, tw, vis, CardBox, Flow,
};
export type {PB, Pt};

// ---------- the shape model ----------
export type Kind = 'tri' | 'round' | 'square' | 'wave' | 'step' | 'twin';
export const KINDS: Kind[] = ['tri', 'round', 'square', 'wave', 'step', 'twin'];
/** Muted colour per antigen kind (patches), and the receptor ink. */
export const KCOL: Record<Kind, string> = {tri: '#c4632e', round: '#3d8f8a', square: '#8e6bb3', wave: '#b8913a', step: '#5e8f4a', twin: '#c0587a'};
export const Y_INK = '#4d4a9e';
const DEG = Math.PI / 180;

/** The antigen's protruding shape, local coords: base on y = 0, protruding to -y, half width s. */
const patchD = (k: Kind, s: number) => {
	switch (k) {
		case 'tri': return `M${-0.6 * s},0 L0,${-0.85 * s} L${0.6 * s},0 Z`;
		case 'round': return `M${-0.6 * s},0 A${0.6 * s},${0.6 * s} 0 0 1 ${0.6 * s},0 Z`;
		case 'square': return `M${-0.5 * s},0 L${-0.5 * s},${-0.68 * s} L${0.5 * s},${-0.68 * s} L${0.5 * s},0 Z`;
		case 'wave': return `M${-0.72 * s},0 L${-0.36 * s},${-0.62 * s} L0,0 L${0.36 * s},${-0.62 * s} L${0.72 * s},0 Z`;
		case 'step': return `M${-0.6 * s},0 L${-0.6 * s},${-0.75 * s} L0,${-0.75 * s} L0,${-0.38 * s} L${0.6 * s},${-0.38 * s} L${0.6 * s},0 Z`;
		case 'twin': return `M${-0.7 * s},0 A${0.3 * s},${0.3 * s} 0 0 1 ${-0.1 * s},0 Z M${0.1 * s},0 A${0.3 * s},${0.3 * s} 0 0 1 ${0.7 * s},0 Z`;
	}
};
/** The receptor tip cup (the negative of the patch), local coords: opening faces -y, base at y = 0, width 2s. */
const cupD = (k: Kind, s: number) => {
	const t = -0.9 * s;
	const top = (inner: string) => `M${-s},0 L${-s},${t} ${inner} L${s},${t} L${s},0 Z`;
	switch (k) {
		case 'tri': return top(`L${-0.62 * s},${t} L0,${t + 0.85 * s} L${0.62 * s},${t}`);
		case 'round': return top(`L${-0.62 * s},${t} A${0.62 * s},${0.62 * s} 0 0 0 ${0.62 * s},${t}`);
		case 'square': return top(`L${-0.52 * s},${t} L${-0.52 * s},${t + 0.68 * s} L${0.52 * s},${t + 0.68 * s} L${0.52 * s},${t}`);
		case 'wave': return top(`L${-0.74 * s},${t} L${-0.36 * s},${t + 0.62 * s} L0,${t} L${0.36 * s},${t + 0.62 * s} L${0.74 * s},${t}`);
		case 'step': return top(`L${-0.62 * s},${t} L${-0.62 * s},${t + 0.75 * s} L0,${t + 0.75 * s} L0,${t + 0.38 * s} L${0.62 * s},${t + 0.38 * s} L${0.62 * s},${t}`);
		case 'twin': return top(`L${-0.72 * s},${t} A${0.31 * s},${0.31 * s} 0 0 0 ${-0.1 * s},${t} L${0.1 * s},${t} A${0.31 * s},${0.31 * s} 0 0 0 ${0.72 * s},${t}`);
	}
};
/** An antigen patch at (x, y) protruding along angle `ang` (radians). */
export const Patch: React.FC<{x: number; y: number; ang: number; k: Kind; s: number; o?: number; glow?: number; outline?: number}> = ({x, y, ang, k, s, o = 1, glow = 0, outline = 0}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) rotate(${ang / DEG + 90})`}>
		{glow > 0.01 ? <circle cx={0} cy={-0.4 * s} r={s * 1.1} fill={KCOL[k]} opacity={0.3 * glow} /> : null}
		<path d={patchD(k, s)} fill={KCOL[k]} stroke="#3a2a1a" strokeWidth={Math.max(1, s * 0.08)} strokeLinejoin="round" />
		{outline > 0.01 ? <path d={patchD(k, s * 1.12)} fill="none" stroke={TEAL} strokeWidth={Math.max(2, s * 0.14)} opacity={outline} /> : null}
	</g>
));
/**
 * A coded Y (receptor or antibody): stem from (x, y) along `ang` (radians) for 0.5 L, then two arms at plus and minus
 * 32 degrees for 0.5 L, each ending in a cup of kind `k`, opening outward along its arm.
 */
export const Yg: React.FC<{x: number; y: number; ang: number; L: number; k: Kind; o?: number; color?: string; lit?: number; grey?: number}> = ({x, y, ang, L, k, o = 1, color = Y_INK, lit = 0, grey = 0}) => {
	if (o <= 0.01) return null;
	const sw = Math.max(1.6, L * 0.075);
	const s = Math.max(2, L * 0.24);
	const hx = x + Math.cos(ang) * L * 0.5, hy = y + Math.sin(ang) * L * 0.5;
	const arms = [-32, 32].map(d => {
		const a = ang + d * DEG;
		return {a, x: hx + Math.cos(a) * L * 0.46, y: hy + Math.sin(a) * L * 0.46};
	});
	const g = clamp01(grey);
	const col = g > 0.5 ? '#9a9aa8' : lit > 0.5 ? TEAL : color;
	return (
		<g opacity={o}>
			<path d={`M${x},${y} L${hx},${hy} M${hx},${hy} L${arms[0].x},${arms[0].y} M${hx},${hy} L${arms[1].x},${arms[1].y}`} fill="none" stroke={col} strokeWidth={sw} strokeLinecap="round" />
			{arms.map((m, i) => (
				<g key={i} transform={`translate(${m.x},${m.y}) rotate(${m.a / DEG + 90})`}>
					<path d={cupD(k, s)} fill={g > 0.5 ? '#c9c9d2' : lit > 0.5 ? TEAL_SOFT : '#cfd0f0'} stroke={col} strokeWidth={Math.max(1.2, sw * 0.6)} strokeLinejoin="round" />
				</g>
			))}
		</g>
	);
};
/** Screen point at which a Y's first tip cup sits (for seating a patch into it). */
export const yTip = (x: number, y: number, ang: number, L: number, arm: 0 | 1 = 0): {p: Pt; a: number} => {
	const hx = x + Math.cos(ang) * L * 0.5, hy = y + Math.sin(ang) * L * 0.5;
	const a = ang + (arm ? 32 : -32) * DEG;
	return {p: [hx + Math.cos(a) * L * 0.46, hy + Math.sin(a) * L * 0.46], a};
};

// ---------- the B cell ----------
/** Receptor bases (screen) and outward angles on a B cell drawn with its shared box at (cx, cy, w). */
export const recSites = (cx: number, cy: number, w: number) => FEAT.receptors.map(r => {
	const p = ptOf(PLATES.bare, cx, cy, w, r);
	const c = ptOf(PLATES.bare, cx, cy, w, FEAT.bcC);
	return {p, a: Math.atan2(p[1] - c[1], p[0] - c[0])};
});
/**
 * A B cell. `painted` 1 shows the painted cell with its receptors; 0 the bare cell with coded receptors of kind `k`
 * (crossfading in place). `divide` crossfades the bare cell to its dividing partner. `glow` lights it teal; `grey`
 * fades it back. Receptor length is in natural pixels (scaled with the cell).
 */
export const BCell: React.FC<{cx: number; cy: number; w: number; k?: Kind; painted?: number; recO?: number; divide?: number; glow?: number; grey?: number; o?: number; lit?: number; recL?: number; n?: number}> = ({cx, cy, w, k = 'tri', painted = 0, recO = 1, divide = 0, glow = 0, grey = 0, o = 1, lit = 0, recL = 300, n = 8}) => {
	if (o <= 0.01) return null;
	const pt = clamp01(painted), dv = clamp01(divide), g = clamp01(grey);
	const kk = w / (PLATES.bare.box[2] - PLATES.bare.box[0]);
	const sites = recSites(cx, cy, w).slice(0, n);
	const flt = g > 0.01 ? `grayscale(${g})` : undefined;
	return (
		<g opacity={o * (1 - 0.45 * g)}>
			{glow > 0.01 ? <circle cx={cx} cy={cy + 20 * kk} r={w * 0.48} fill={TEAL} opacity={0.22 * glow} /> : null}
			<PlateB p={PLATES.bare} cx={cx} cy={cy} w={w} o={(1 - dv) * (pt < 1 ? 1 : 0)} filter={flt} />
			<PlateB p={PLATES.dividing} cx={cx} cy={cy} w={w} o={dv} filter={flt} />
			<PlateB p={PLATES.bcell} cx={cx} cy={cy} w={w} o={pt} filter={flt} />
			{dv < 1 ? sites.map((st, i) => <Yg key={i} x={st.p[0]} y={st.p[1]} ang={st.a} L={recL * kk} k={k} o={recO * (1 - pt) * (1 - dv)} lit={lit} grey={g} />) : null}
		</g>
	);
};

// ---------- the bacterium with antigen patches ----------
export const PATCH_KINDS: Kind[] = ['tri', 'round', 'square', 'tri', 'round', 'square', 'tri', 'round', 'square', 'tri', 'round', 'square'];
/** Screen patch sites on the wound bacterium drawn at (cx, cy, w), rotated by `rot` degrees about its centre. */
export const patchSites = (cx: number, cy: number, w: number, rot = 0) => FEAT.patches.map(([u, v, a], i) => {
	const p = ptOf(PLATES.bact, cx, cy, w, [u, v]);
	const r = rot * DEG;
	const dx = p[0] - cx, dy = p[1] - cy;
	return {p: [cx + dx * Math.cos(r) - dy * Math.sin(r), cy + dx * Math.sin(r) + dy * Math.cos(r)] as Pt, a: a * DEG + r, k: PATCH_KINDS[i]};
});
/**
 * The wound bacterium with its coded antigen patches (kinds by `PATCH_KINDS`). `glowKind` pulses one kind; `coat`
 * attaches bound antibodies (stem outward, one tip cup seated on each patch of that kind).
 */
export const Bact: React.FC<{cx: number; cy: number; w: number; rot?: number; o?: number; patchO?: number; s?: number; glowKind?: Kind; glow?: number; coat?: Kind; coatO?: number; coatL?: number; grey?: number; id: string; only?: Kind[]}> = ({cx, cy, w, rot = 0, o = 1, patchO = 1, s, glowKind, glow = 0, coat, coatO = 1, coatL, grey = 0, id, only}) => {
	if (o <= 0.01) return null;
	const k = w / (PLATES.bact.box[2] - PLATES.bact.box[0]);
	const ps = s ?? 60 * k * 1.6;
	const sites = patchSites(cx, cy, w, rot);
	const g = clamp01(grey);
	return (
		<g opacity={o * (1 - 0.4 * g)}>
			<PlateB p={PLATES.bact} cx={cx} cy={cy} w={w} rot={rot} id={id} filter={g > 0.01 ? `grayscale(${g})` : undefined} />
			{sites.map((st, i) => (only && !only.includes(st.k) ? null : <Patch key={i} x={st.p[0]} y={st.p[1]} ang={st.a} k={st.k} s={ps} o={patchO} glow={glowKind === st.k ? glow : 0} />))}
			{coat ? sites.filter(st => st.k === coat).map((st, i) => {
				const L = coatL ?? ps * 5;
				const tipOff = L * 0.5 + L * 0.46 * Math.cos(32 * DEG);
				const lat = L * 0.46 * Math.sin(32 * DEG);
				const bx = st.p[0] + Math.cos(st.a) * (tipOff + ps * 0.55) - Math.cos(st.a + Math.PI / 2) * lat;
				const by = st.p[1] + Math.sin(st.a) * (tipOff + ps * 0.55) - Math.sin(st.a + Math.PI / 2) * lat;
				return <Yg key={'c' + i} x={bx} y={by} ang={st.a + Math.PI} L={L} k={coat} o={coatO} />;
			}) : null}
		</g>
	);
};

// ---------- the clone tree ----------
/** Branching lines 1, 2, 4, 8 from (x, y), then a dense cluster; every copy is a small bare B cell of kind `k`. */
export const cloneNodes = (x: number, y: number, dx: number, h: number) => {
	const lv: Pt[][] = [[[x, y]]];
	for (let l = 1; l <= 3; l++) {
		const n = 2 ** l;
		lv.push(Array.from({length: n}, (_, i) => [x + l * dx, y - h / 2 + (h * (i + 0.5)) / n] as Pt));
	}
	return lv;
};
/** The cluster of a clone tree drawn from (x, y) (same defaults as CloneTree). */
export const treeCluster = (x: number, y: number, dx = 150, h = 520) => ({cx: x + 4 * dx + 90, cy: y, rx: 120, ry: h * 0.42});
export const clusterPts = (cx: number, cy: number, rx: number, ry: number, n = 34, seed = 4): Pt[] => {
	const r = rng(seed);
	const out: Pt[] = [];
	let tries = 0;
	while (out.length < n && tries < 4000) {
		tries++;
		const a = r() * Math.PI * 2, d = Math.sqrt(r());
		const p: Pt = [cx + Math.cos(a) * rx * d, cy + Math.sin(a) * ry * d];
		if (out.every(q => Math.hypot(q[0] - p[0], q[1] - p[1]) > 46)) out.push(p);
	}
	return out;
};
export const CloneTree: React.FC<{x: number; y: number; at: number; dx?: number; h?: number; step?: number; cellW?: number; k?: Kind; o?: number; cluster?: {cx: number; cy: number; rx: number; ry: number}; grey?: number; showRoot?: boolean; clusterO?: number}> = ({x, y, at, dx = 150, h = 520, step = 16, cellW = 70, k = 'tri', o = 1, cluster, grey = 0, showRoot = false, clusterO = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const lv = cloneNodes(x, y, dx, h);
	const cl = cluster ?? treeCluster(x, y, dx, h);
	const cpts = clusterPts(cl.cx, cl.cy, cl.rx, cl.ry);
	const lineCol = grey > 0.5 ? GREYT : INK_SOFT;
	return (
		<g opacity={o}>
			{lv.slice(1).map((nodes, l) => nodes.map((p, i) => {
				const par = lv[l][Math.floor(i / 2)];
				const t = at + l * step;
				return f >= t ? <DrawPath key={`${l}-${i}`} d={`M${par[0] + cellW * 0.32},${par[1]} C${(par[0] + p[0]) / 2},${par[1]} ${(par[0] + p[0]) / 2},${p[1]} ${p[0] - cellW * 0.32},${p[1]}`} at={t} dur={step} color={lineCol} width={3} /> : null;
			}))}
			{lv.map((nodes, l) => (l === 0 && !showRoot ? null : nodes.map((p, i) => <BCell key={`n${l}-${i}`} cx={p[0]} cy={p[1]} w={cellW * (l === 3 ? 0.85 : 1)} k={k} o={prog(f, at + Math.max(0, l - 1) * step + step - 4, 8)} grey={grey} recL={340} />)))}
			{lv[3].map((p, i) => (f >= at + 3 * step ? <DrawPath key={'cl' + i} d={`M${p[0] + cellW * 0.3},${p[1]} L${cl.cx - cl.rx * 0.8},${lerp(p[1], cl.cy, 0.6)}`} at={at + 3 * step + 2} dur={step} color={lineCol} width={2} /> : null))}
			{clusterO > 0.01 ? cpts.map((p, i) => <BCell key={'c' + i} cx={p[0]} cy={p[1]} w={cellW * 0.68} k={k} o={clusterO * prog(f, at + 4 * step + i, 6)} grey={grey} recL={340} />) : null}
		</g>
	);
};

// ---------- the gene shuffle ----------
const GROUPS = [{n: 6, col: '#3d8f8a'}, {n: 5, col: '#b8913a'}, {n: 4, col: '#8e6bb3'}];
/**
 * Three groups of thin ink bars; on each run one bar from each group lifts out and joins into one short bar to the
 * right (the receptor gene this cell will use), then an arrow points to a cell. `runs`: {at, pick, to}.
 */
export const Shuffle: React.FC<{x: number; y: number; at: number; runs: {at: number; pick: [number, number, number]; to: Pt}[]; o?: number}> = ({x, y, at, runs, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	const bw = 14, bh = 70, gap = 10, ggap = 46;
	let gx = x;
	const bars: {x: number; g: number; i: number}[] = [];
	GROUPS.forEach((G, g) => { for (let i = 0; i < G.n; i++) bars.push({x: gx + i * (bw + gap), g, i}); gx += G.n * (bw + gap) + ggap; });
	const outX = gx + 40;
	return (
		<g opacity={p}>
			{bars.map((b, j) => {
				const run = runs.map((r, ri) => ({r, ri})).filter(({r}) => r.pick[b.g] === b.i).pop();
				const live = run && f >= run.r.at ? smooth(prog(f, run.r.at + b.g * 6, 20)) : 0;
				const lifted = run && f >= run.r.at;
				return <rect key={j} x={b.x} y={y - (lifted ? 26 * Math.min(1, live * 3) : 0)} width={bw} height={bh} rx={4} fill={GROUPS[b.g].col} opacity={lifted ? 0.35 : 0.85} />;
			})}
			{runs.map((r, ri) => {
				if (f < r.at) return null;
				const done = ri < runs.length - 1 && f >= runs[ri + 1].at;
				const ox = outX + ri * 110;
				return (
					<g key={ri} opacity={done ? 0.4 : 1}>
						{r.pick.map((pi, g) => {
							const src = bars.find(b => b.g === g && b.i === pi)!;
							const u = smooth(prog(f, r.at + 8 + g * 6, 22));
							return <rect key={g} x={lerp(src.x, ox + g * (bw + 2), u)} y={lerp(y - 26, y, u)} width={bw} height={bh} rx={4} fill={GROUPS[g].col} />;
						})}
						<PlainArrow x1={ox + 22} y1={y - 8} x2={r.to[0]} y2={r.to[1]} at={r.at + 36} color={done ? GREYT : TEAL} width={4} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- small pieces ----------
/** A short day axis from "day 0" to "several days". */
export const DayAxis: React.FC<{x0: number; x1: number; y: number; at: number; o?: number}> = ({x0, x1, y, at, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	return (
		<g opacity={o}>
			<DrawPath d={`M${x0},${y} L${x1},${y}`} at={at} dur={18} color={GREY_INK} width={4} />
			{[x0, x1].map((x, i) => <line key={i} x1={x} x2={x} y1={y - 12} y2={y + 12} stroke={GREY_INK} strokeWidth={4} opacity={prog(f, at + 6 + i * 10, 8)} />)}
			<Sx x={x0} y={y + 44} text="day 0" size={28} color={GREY_INK} weight={600} anchor="middle" at={at + 8} />
			<Sx x={x1} y={y + 44} text="several days" size={28} color={GREY_INK} weight={600} anchor="middle" at={at + 18} />
		</g>
	);
};
/** The b03-style host cell membrane edge (pale band and outer line). */
export const Membrane: React.FC<{x0: number; x1: number; y: number; at: number; o?: number; h?: number}> = ({x0, x1, y, at, o = 1, h = 120}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 18) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			<rect x={x0} y={y} width={x1 - x0} height={h} fill="#f6e3dc" opacity={0.75} />
			<DrawPath d={`M${x0},${y} L${x1},${y}`} at={at} dur={18} color="#b9786a" width={5} />
			<DrawPath d={`M${x0},${y + 14} L${x1},${y + 14}`} at={at} dur={18} color="#c99a92" width={2.5} />
		</g>
	);
};
export const useF = () => useCurrentFrame();
void AMBER; void AMBER_INK; void CARD; void CTag; void EDGE; void GTag; void Gloss; void INK; void MistakeChip; void Pl; void Ring; void TERRA; void Travel; void ZoomBox; void fitW; void plH; void pulse; void tw; void vis; void CardBox; void Flow;
