// Drawing parts for Y11 Chem M1 V04. Reuses the M1 V01 to V03 parts. New here: the ethanol glyph (two charcoal C and
// one red O in a chain with white H dots), geometry for the two painted rigs, the vapour path (particles that rise, run
// through the side arm and condenser and become drops), a uniform-scale crop of a plate, the enrichment staircase
// tiles, the 0 to 100% gauge and the coded chromatography strip (paper, pencil baseline, ink dot) for the handoff.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {staticFile} from 'remotion';
import {At, INK, P, Sx, plateMap, prog, smooth} from '../chem-y11-m1-v03/parts';
import {FRAC, SIMPLE} from './common';
import type {PDef} from './common';

export * from '../chem-y11-m1-v03/parts';

export const ETH_INK = '#9c5a00'; // amber text for ethanol and every "% ethanol"
export const ETH = '#d18f1f';
export const TERRA_INK = '#a8421c';

/** Ethanol: C, C, O chain with white H dots. */
export const Eth: React.FC<{x: number; y: number; u: number; rot?: number; o?: number}> = ({x, y, u, rot = 0, o = 1}) => (
	<g transform={`translate(${x},${y}) rotate(${rot})`} opacity={o}>
		{[[-1.5, -0.9], [-1.9, 0.6], [-0.2, -1.1], [1.9, 0.75], [0.1, 1.05]].map(([a, b], i) => <At key={i} x={a * u} y={b * u} r={0.45 * u} fill={P.H} />)}
		<At x={-1.15 * u} y={0} r={0.85 * u} fill={P.C} />
		<At x={0.3 * u} y={0.1 * u} r={0.85 * u} fill={P.C} />
		<At x={1.55 * u} y={-0.35 * u} r={0.8 * u} fill={P.O} />
	</g>
);

/** Screen geometry of the simple rig drawn at (x, y) with height h. */
export const simpleGeo = (x: number, y: number, h: number) => {
	const m = plateMap(SIMPLE, x, y, h);
	const pt = (u: number, v: number): [number, number] => [m.X(u), m.Y(v)];
	return {...m, h, flask: pt(345, 735), surf: pt(345, 745), neck: pt(347, 610), bulb: pt(350, 507), arm: pt(512, 512), cEnd: pt(1058, 631), tip: pt(1186, 716), mouth: pt(1186, 745), rBot: pt(1186, 975), light: pt(423, 892), wIn: pt(972, 682), wOut: pt(597, 460)};
};
/** Screen geometry of the fractional rig. */
export const fracGeo = (x: number, y: number, h: number) => {
	const m = plateMap(FRAC, x, y, h);
	const pt = (u: number, v: number): [number, number] => [m.X(u), m.Y(v)];
	return {...m, h, flask: pt(350, 735), surf: pt(350, 745), colTop: pt(341, 316), colBot: pt(341, 572), bulb: pt(338, 273), arm: pt(495, 256), cEnd: pt(1058, 375), tip: pt(1198, 418), mouth: pt(1198, 460), rMid: pt(1198, 560), light: pt(421, 892)};
};

/** Vapour particles flowing along a polyline from `from`; past fraction `cond` they are drawn as drops. */
export const VapourPath: React.FC<{pts: [number, number][]; from: number; until?: number; n?: number; speed?: number; cond?: number; eth?: number}> = ({pts, from, until = 1e9, n = 9, speed = 0.006, cond = 0.62, eth = 0}) => {
	const f = useCurrentFrame();
	if (f < from) return null;
	const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
	const tot = seg.reduce((a, b) => a + b, 0);
	const at = (s: number): [number, number] => {
		let d = s * tot;
		for (let i = 0; i < seg.length; i++) { if (d <= seg[i]) { const t = d / seg[i]; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * t, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * t]; } d -= seg[i]; }
		return pts[pts.length - 1];
	};
	const o = prog(f, from, 15) * (1 - prog(f, until, 15));
	const out: React.ReactNode[] = [];
	for (let k = 0; k < n; k++) {
		const s = ((f - from) * speed + k / n) % 1;
		const [x, y] = at(s);
		const isEth = (k * 7) % 10 < eth * 10;
		out.push(s < cond
			? (isEth ? <Eth key={k} x={x} y={y} u={5} rot={k * 40 + f * 2} /> : <g key={k} transform={`translate(${x},${y}) rotate(${k * 50 + f * 2})`}><At x={-5} y={4} r={3.6} fill={P.H} /><At x={5} y={4} r={3.6} fill={P.H} /><At x={0} y={-1} r={6} fill={P.O} /></g>)
			: <ellipse key={k} cx={x} cy={y} rx={6} ry={8} fill="rgba(110,160,210,0.9)" stroke="#4a7aa5" strokeWidth={1.5} />);
	}
	return <g opacity={o}>{out}</g>;
};

/** A uniform-scale crop of a plate: native point (u, v) is centred in the screen rect, scale k (screen px per native px). */
export const Crop: React.FC<{p: PDef; u: number; v: number; k: number; x: number; y: number; w: number; h: number; id: string; o?: number; children?: React.ReactNode}> = ({p, u, v, k, x, y, w, h, id, o = 1, children}) => {
	if (o <= 0.01) return null;
	const ix = x + w / 2 - u * k, iy = y + h / 2 - v * k;
	return (
		<g opacity={o}>
			<defs><clipPath id={id}><rect x={x} y={y} width={w} height={h} rx={18} /></clipPath></defs>
			<rect x={x} y={y} width={w} height={h} rx={18} fill="#fbf8f1" />
			<g clipPath={`url(#${id})`}>
				<image href={staticFile(p.src)} x={ix} y={iy} width={p.nat[0] * k} height={p.nat[1] * k} />
				{children}
			</g>
			<rect x={x} y={y} width={w} height={h} rx={18} fill="none" stroke={INK} strokeWidth={4} />
		</g>
	);
};
/** Screen point of a native point inside a Crop. */
export const cropPt = (c: {u: number; v: number; k: number; x: number; y: number; w: number; h: number}, uu: number, vv: number): [number, number] => [c.x + c.w / 2 + (uu - c.u) * c.k, c.y + c.h / 2 + (vv - c.v) * c.k];

/** One staircase tile: "a% → b%" (current = large). */
export const Tile: React.FC<{x: number; y: number; a: number; b: number; at: number; cur?: boolean; w?: number; out?: number}> = ({x, y, a, b, at, cur = false, w = 300, out}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.01) return null;
	const s = cur ? 52 : 36;
	const h = cur ? 96 : 76;
	const pop = 0.9 + 0.1 * smooth(prog(f, at, 14));
	return (
		<g opacity={o} transform={`translate(${x + w / 2},${y + h / 2}) scale(${pop}) translate(${-(x + w / 2)},${-(y + h / 2)})`}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill="#fffdf8" stroke={cur ? ETH : INK} strokeWidth={cur ? 6 : 4} />
			<Sx x={x + w / 2} y={y + h / 2 + s * 0.36} text={`${Math.round(a)}% → ${Math.round(b)}%`} size={s} color={cur ? ETH_INK : INK} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

/** A horizontal 0 to 100% gauge with a live fill. */
export const Gauge: React.FC<{x: number; y: number; w: number; v: number; at?: number; label?: string; stopAt?: number; stopV?: number}> = ({x, y, w, v, at = -1000, label, stopAt, stopV = 96}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const H = 56;
	return (
		<g opacity={o}>
			{label ? <Sx x={x} y={y - 16} text={label} size={30} color={INK} weight={800} at={-1000} /> : null}
			<rect x={x} y={y} width={w} height={H} rx={12} fill="#dbe6f5" stroke={INK} strokeWidth={4} />
			<rect x={x + 4} y={y + 4} width={Math.max(0, (w - 8) * Math.min(1, v / 100))} height={H - 8} rx={9} fill={ETH} />
			{[0, 25, 50, 75, 100].map(t => <g key={t}><line x1={x + (w * t) / 100} x2={x + (w * t) / 100} y1={y + H} y2={y + H + 12} stroke={INK} strokeWidth={3} /><Sx x={x + (w * t) / 100} y={y + H + 44} text={`${t}%`} size={30} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
			{stopAt !== undefined && f >= stopAt ? <rect x={x + (w * stopV) / 100 - 5} y={y - 22} width={10} height={H + 44} rx={4} fill={ETH_INK} opacity={prog(f, stopAt, 10)} /> : null}
		</g>
	);
};

/** Coded chromatography strip: paper, pencil baseline and a black ink dot. */
export const Strip: React.FC<{x: number; y: number; w: number; h: number; base?: number}> = ({x, y, w, h, base}) => {
	const by = base ?? y + h - h / 6;
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={4} fill="#ffffff" stroke="#8a8378" strokeWidth={3} />
			<line x1={x + 10} x2={x + w - 10} y1={by} y2={by} stroke="#4a4642" strokeWidth={3} />
			<circle cx={x + w / 2} cy={by} r={14} fill="#1d1b1a" />
		</g>
	);
};
