// Drawing parts for M8 C03a (cation tests). Reuses M8 C01 (and through it M6 C12 to C01: chips, notes, crossed chips,
// the lens frame, labelled ion dots, falling drops, plate cross-fades, question text, countdown, key notes) and the
// M7 C13 flow chart arrow (FArrow). New here, for C03b and P03 to import:
// - Suspects: the eight cation pills along the top (write on, glow as candidates, strike when ruled out);
// - Dropper: a coded dropper tip over a tube (no hands); drops fall with FallDrop;
// - LockLens: the ion lock inset (the added anion meets the cation; the insoluble pair locks into a tile of the
//   precipitate's real colour and settles; with no lockAt the ions just drift: no precipitate);
// - WrapLens: the complex wrap inset (ligand tokens cluster round a metal ion; a solid tile can break up first);
// - WireLoop: a coded wire loop on a rod that moves along keyframes (dip, then into the flame);
// - EnergyInset: an electron jumps up an energy ladder and drops, giving out a coloured wave;
// - Chart: the cation flowchart (nodes, polyline edges ending in FArrow heads, grey tags), each element timed by a
//   T map {at, dim, glow, out}; Token: a labelled dot travelling through the chart.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {kf} from '../chem-m5-c03/common';
import {FArrow} from '../chem-m7-c13/parts';
import {Dot, INK, INK_SOFT, Overlay, Sx, clamp01, lerp, mw, natPt, smooth, vis} from '../chem-m8-c01/parts';
import {RACK, TUBE_A} from './common';

export * from '../chem-m8-c01/parts';
export {kf};

// step colours (design colour key)
export const C_CL = '#2f7d4a', C_SO = '#b07a12', C_OH = '#2f6f9e', C_FL = '#cc6a1e', C_CX = '#6d4fa0', GREYX = '#9a948a';
// precipitate and ion colours
export const PPT = {white: '#f7f6f2', whiteInk: '#6b6358', blue: '#8fc3e8', blueInk: '#2f6f9e', rust: '#8a4a24', rustInk: '#5e2f14', green: '#8fa67a', greenInk: '#4f6340', yellow: '#f2cf3a', yellowInk: '#9a7d08', ag2o: '#5b4630'};
export const CAT = {fill: '#d4d4d0', ink: '#55554f'};
export const GLOWC = '#f6d77a';

// ---------- suspect strip ----------
export const IONS8 = ['Ba^{2+}', 'Ca^{2+}', 'Mg^{2+}', 'Pb^{2+}', 'Ag^{+}', 'Cu^{2+}', 'Fe^{2+}', 'Fe^{3+}'];
export const SUS = {x0: 712, y: 22, w: 130, h: 50, step: 146};
export const susX = (i: number) => SUS.x0 + i * SUS.step + SUS.w / 2;
export type SusSt = {g?: [number, number][]; x?: number; ux?: number; faint?: number};
/** The eight cation pills. `write[i]` writes pill i (default: all shown). `st[ion]`: glow windows, strike frame, unstrike. */
export const Suspects: React.FC<{st?: Record<string, SusSt>; write?: number[]; at?: number; o?: number; ions?: string[]; fs?: number}> = ({st = {}, write, at = -1000, o = 1, ions = IONS8, fs = 30}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	return (
		<Overlay><g opacity={v}>
			{ions.map((ion, i) => {
				const w0 = write ? write[i] : -1000;
				const a = prog(f, w0, 10);
				if (a <= 0.01) return null;
				const s = st[ion] ?? {};
				const g = (s.g ?? []).reduce((m, [p, q]) => Math.max(m, vis(f, p, q, 10)), 0);
				const xs = s.x === undefined ? 0 : prog(f, s.x, 10) * (s.ux === undefined ? 1 : 1 - prog(f, s.ux, 10));
				const fade = s.faint !== undefined ? 1 - 0.45 * prog(f, s.faint, 10) : 1;
				const x = SUS.x0 + i * SUS.step, y = SUS.y + (1 - a) * -12;
				return (
					<g key={ion} opacity={a * (1 - 0.6 * xs) * fade}>
						{g > 0.01 ? <rect x={x - 8} y={y - 8} width={SUS.w + 16} height={SUS.h + 16} rx={(SUS.h + 16) / 2} fill={GLOWC} opacity={0.75 * g} /> : null}
						<rect x={x} y={y} width={SUS.w} height={SUS.h} rx={SUS.h / 2} fill="#fffdf8" stroke={g > 0.5 ? '#b07a12' : 'rgba(60,45,20,0.35)'} strokeWidth={g > 0.5 ? 3.5 : 2.5} />
						<Sx x={x + SUS.w / 2} y={y + SUS.h / 2 + fs * 0.36} text={ion} size={fs} color={INK} anchor="middle" weight={800} at={-1000} />
						{xs > 0.01 ? <line x1={x + 10} y1={y + SUS.h - 8} x2={x + 10 + (SUS.w - 20) * xs} y2={y + 8} stroke="#c4432f" strokeWidth={5} strokeLinecap="round" /> : null}
					</g>
				);
			})}
		</g></Overlay>
	);
};

// ---------- tubes, dropper and drops ----------
export const tubePt = (x: number, y: number, h: number, nx: number, ny: number) => natPt(RACK.clear, x, y, h, nx, ny);
/** A coded dropper (glass tip and a rubber bulb) whose tip sits at (x, y). */
export const Dropper: React.FC<{x: number; y: number; s?: number; at: number; out?: number; color?: string; label?: string; labelColor?: string}> = ({x, y, s = 1, at, out, color = '#dfe6ee', label, labelColor = INK}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const dy = (1 - smooth(prog(f, at, 16))) * -40;
	return (
		<g opacity={v} transform={`translate(0,${dy})`}>
			<path d={`M${x - 4 * s},${y} L${x - 9 * s},${y - 60 * s} L${x - 9 * s},${y - 120 * s} L${x + 9 * s},${y - 120 * s} L${x + 9 * s},${y - 60 * s} L${x + 4 * s},${y} Z`} fill="#eef4f8" stroke="#7d8a96" strokeWidth={2.5} />
			<path d={`M${x - 7 * s},${y - 64 * s} L${x - 7 * s},${y - 116 * s} L${x + 7 * s},${y - 116 * s} L${x + 7 * s},${y - 64 * s} Z`} fill={color} opacity={0.75} />
			<rect x={x - 15 * s} y={y - 178 * s} width={30 * s} height={64 * s} rx={14 * s} fill="#5b5b66" stroke="#3b3b44" strokeWidth={2.5} />
			{label ? <Sx x={x + 26 * s} y={y - 132 * s} text={label} size={28} color={labelColor} weight={800} at={-1000} /> : null}
		</g>
	);
};

// ---------- ion lock inset ----------
export type IonSpec = {label: string; fill: string; ink: string; r?: number; size?: number};
const wob = (f: number, ph: number, a = 6): [number, number] => [Math.sin(f * 0.05 + ph) * a, Math.cos(f * 0.043 + ph * 1.3) * a];
const SITES: [number, number][] = [[-0.45, -0.32], [0.18, -0.48], [0.5, -0.05], [-0.15, 0.08], [-0.55, 0.28], [0.3, 0.3]];
/**
 * Lens of centre (cx, cy), radius r. `n` cations drift; anions arrive from the top from `arrive`. With `lockAt`, pair k
 * locks at lockAt + k * every into a tile (`tile` colours) that settles along the bottom.
 */
export const LockLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; cat: IonSpec; an: IonSpec; n?: number; arrive: number; lockAt?: number; every?: number; tile?: {fill: string; ink: string}; title?: string; titleAt?: number; s?: number; extraAn?: number; bg?: string}> = ({cx, cy, r, at, out, cat, an, n = 4, arrive, lockAt, every = 14, tile = {fill: PPT.white, ink: PPT.whiteInk}, title, titleAt, s = 1, extraAn = 0, bg = '#f3f6f2'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const id = `lk-${Math.round(cx)}-${Math.round(cy)}`;
	const cr = (cat.r ?? 20) * s, ar = (an.r ?? 20) * s;
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill={bg} stroke={INK} strokeWidth={5} />
			<clipPath id={id}><circle cx={cx} cy={cy} r={r - 4} /></clipPath>
			<g clipPath={`url(#${id})`}>
				{Array.from({length: n + extraAn}, (_, k) => {
					const site = SITES[k % SITES.length];
					const sx = cx + site[0] * r, sy = cy + site[1] * r;
					const [wx, wy] = wob(f, k * 1.9);
					const isPair = k < n;
					const L = isPair && lockAt !== undefined ? lockAt + k * every : Infinity;
					const a = smooth(clamp01((f - (arrive + k * 7)) / 26));
					const ax = lerp(sx + 30 * s, sx + cr + ar - 4, a), ay = lerp(cy - r - 30, sy + wy * 0.5, a);
					const lockP = Number.isFinite(L) ? smooth(clamp01((f - L) / 10)) : 0;
					const settle = Number.isFinite(L) ? smooth(clamp01((f - L - 10) / 22)) : 0;
					const slotX = cx - r * 0.5 + (k % 5) * 36 * s, slotY = cy + r * 0.62;
					return (
						<g key={k}>
							{isPair && lockP < 1 ? <Dot x={sx + wx * (1 - lockP) + (cr * 0.4) * lockP} y={sy + wy * (1 - lockP)} r={cr} fill={cat.fill} ink={cat.ink} label={cat.label} size={(cat.size ?? 13) * s} o={1 - lockP} /> : null}
							{f >= arrive + k * 7 && lockP < 1 ? <Dot x={ax + (isPair ? 0 : wx) - (cr * 0.4) * lockP} y={ay + (isPair ? 0 : wy)} r={ar} fill={an.fill} ink={an.ink} label={an.label} size={(an.size ?? 13) * s} o={(isPair ? 1 : 0.9) * (1 - lockP)} /> : null}
							{lockP > 0 ? <rect x={lerp(sx, slotX, settle) - 15 * s} y={lerp(sy, slotY, settle) - 10 * s} width={30 * s} height={20 * s} rx={3} fill={tile.fill} stroke={tile.ink} strokeWidth={2} opacity={lockP} /> : null}
						</g>
					);
				})}
			</g>
			{title ? <Sx x={cx} y={cy + r + 40} text={title} size={28} color={INK_SOFT} anchor="middle" hand at={titleAt ?? at + 6} /> : null}
		</g>
	);
};

// ---------- complex wrap inset ----------
/** A metal ion at the centre; `n` ligand tokens move in to surround it from `wrapAt`. `breakAt`: a solid tile at the
 *  centre breaks up first (the solid dissolving). `tint`: the liquid takes a colour from a frame. */
export const WrapLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; metal: IonSpec; lig: IonSpec; n?: number; wrapAt: number; breakAt?: number; tile?: {fill: string; ink: string}; tint?: {color: string; at: number}; title?: string; titleAt?: number}> = ({cx, cy, r, at, out, metal, lig, n = 4, wrapAt, breakAt, tile = {fill: PPT.white, ink: PPT.whiteInk}, tint, title, titleAt}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const id = `wr-${Math.round(cx)}-${Math.round(cy)}`;
	const br = breakAt === undefined ? 1 : smooth(clamp01((f - breakAt) / 24));
	const tn = tint ? prog(f, tint.at, 30) : 0;
	const mr = metal.r ?? 22, lr = lig.r ?? 17;
	const [wx, wy] = wob(f, 0.7, 4);
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill="#f4f3f8" stroke={INK} strokeWidth={5} />
			<clipPath id={id}><circle cx={cx} cy={cy} r={r - 4} /></clipPath>
			<g clipPath={`url(#${id})`}>
				{tn > 0.01 ? <rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill={tint?.color} opacity={0.32 * tn} /> : null}
				{breakAt !== undefined && br < 1 ? [[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([u, w], k) => (
					<rect key={'t' + k} x={cx + u * (16 + 40 * br) - 16} y={cy + w * (12 + 34 * br) - 12} width={32} height={24} rx={3} fill={tile.fill} stroke={tile.ink} strokeWidth={2} opacity={1 - br} />
				)) : null}
				<Dot x={cx + wx} y={cy + wy} r={mr} fill={metal.fill} ink={metal.ink} label={metal.label} size={metal.size ?? 14} o={breakAt === undefined ? 1 : 0.25 + 0.75 * br} />
				{Array.from({length: n}, (_, k) => {
					const ang = -Math.PI / 2 + (k / n) * Math.PI * 2 + (n === 2 ? Math.PI / 2 : Math.PI / 4);
					const a = smooth(clamp01((f - (wrapAt + k * 7)) / 24));
					const d0 = r * 0.95, d1 = mr + lr + 2;
					const d = lerp(d0, d1, a);
					return <Dot key={k} x={cx + wx + Math.cos(ang) * d} y={cy + wy + Math.sin(ang) * d} r={lr} fill={lig.fill} ink={lig.ink} label={lig.label} size={lig.size ?? 11} o={prog(f, wrapAt - 16 + k * 7, 10)} />;
				})}
			</g>
			{title ? <Sx x={cx} y={cy + r + 40} text={title} size={28} color={INK_SOFT} anchor="middle" hand at={titleAt ?? at + 6} /> : null}
		</g>
	);
};
export const NH3 = {label: 'NH_3', fill: '#d9cdee', ink: C_CX, r: 18, size: 12};
export const SCN = {label: 'SCN^{−}', fill: '#e8d7c2', ink: '#7a4a1a', r: 20, size: 10};

// ---------- wire loop ----------
/** A coded wire loop on a rod. `pts`: [frame, x, y] keyframes for the loop centre. `hot`: frame it glows (in the flame). */
export const WireLoop: React.FC<{pts: [number, number, number][]; at: number; out?: number; hot?: number; s?: number}> = ({pts, at, out, hot, s = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const x = kf(f, pts.map(p => [p[0], p[1]] as [number, number])), y = kf(f, pts.map(p => [p[0], p[2]] as [number, number]));
	const g = hot === undefined ? 0 : prog(f, hot, 12);
	return (
		<g opacity={v}>
			<line x1={x + 8 * s} y1={y - 8 * s} x2={x + 150 * s} y2={y - 150 * s} stroke="#8c8f96" strokeWidth={4 * s} strokeLinecap="round" />
			<line x1={x + 120 * s} y1={y - 120 * s} x2={x + 200 * s} y2={y - 200 * s} stroke="#6b5136" strokeWidth={12 * s} strokeLinecap="round" />
			{g > 0.01 ? <circle cx={x} cy={y} r={20 * s} fill="#ffcf7a" opacity={0.5 * g} /> : null}
			<circle cx={x} cy={y} r={10 * s} fill="none" stroke={g > 0.5 ? '#d9772b' : '#8c8f96'} strokeWidth={4 * s} />
		</g>
	);
};

// ---------- energy ladder ----------
/** An electron jumps up two levels and drops back, giving out a wave of `color`, once per `period` from `from`. */
export const EnergyInset: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; color: string; from: number; period?: number; title?: string}> = ({x, y, w, h, at, out, color, from, period = 70, title}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const lv = [y + h - 26, y + h * 0.56, y + 34];
	const lx0 = x + 30, lx1 = x + w * 0.42;
	const t = f < from ? -1 : (f - from) % period;
	const up = t < 0 ? 0 : smooth(clamp01(t / 14));
	const down = t < 0 ? 0 : smooth(clamp01((t - 34) / 10));
	const ey = lerp(lerp(lv[0], lv[2], up), lv[0], down);
	const wave = t < 0 ? 0 : clamp01((t - 34) / 30);
	const wx0 = lx1 + 10, wlen = (w - (lx1 - x) - 40) * wave;
	let d = '';
	for (let i = 0; i <= 40; i++) {
		const xx = wx0 + (wlen * i) / 40;
		d += `${i ? 'L' : 'M'}${xx.toFixed(1)},${(lv[1] + Math.sin(i * 0.9) * 12).toFixed(1)} `;
	}
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			{lv.map((ly, i) => <line key={i} x1={lx0} x2={lx1} y1={ly} y2={ly} stroke={INK_SOFT} strokeWidth={3} />)}
			<circle cx={(lx0 + lx1) / 2} cy={ey} r={9} fill="#2c4a7a" />
			{t >= 0 && up > 0.05 && down < 0.95 ? <path d={`M${(lx0 + lx1) / 2 + 20},${lv[0] - 6} L${(lx0 + lx1) / 2 + 20},${lv[2] + 6}`} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="5 5" opacity={0.6} /> : null}
			{wave > 0.01 && wave < 1 ? <path d={d} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" opacity={1 - Math.max(0, wave - 0.8) * 5} /> : null}
			{title ? <Sx x={x + w / 2} y={y + h + 34} text={title} size={24} color={GREYX} anchor="middle" weight={700} at={at + 6} /> : null}
		</g>
	);
};

// ---------- flowchart ----------
export type V2 = [number, number];
export type CNode = {id: string; x: number; y: number; w: number; name: string; sub?: string; color: string; size?: number} | {id: string; x: number; y: number; tag: true; lines: string[]; anchor?: 'start' | 'middle' | 'end'; size?: number; color?: string};
export type CEdge = {id: string; pts: V2[]; color: string; head?: boolean; dashed?: boolean; label?: string; lx?: number; ly?: number; anchor?: 'start' | 'middle' | 'end'; lsize?: number};
export type CTime = {at: number; dim?: number; glow?: number; out?: number; undim?: number; subAt?: number; to?: number};
export type CT = Record<string, CTime>;
export const nodeH = (n: CNode) => ('tag' in n ? 0 : n.sub ? 74 : 52);
const dimOf = (f: number, t: CTime) => (t.dim === undefined ? 1 : 1 - (1 - (t.to ?? 0.32)) * prog(f, t.dim, 14) * (t.undim === undefined ? 1 : 1 - prog(f, t.undim, 14)));
export const Chart: React.FC<{nodes: CNode[]; edges: CEdge[]; T: CT; o?: number}> = ({nodes, edges, T, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{edges.map(e => {
				const t = T[e.id];
				if (!t) return null;
				const v = vis(f, t.at, t.out, 10) * dimOf(f, t);
				if (v <= 0.01) return null;
				const n = e.pts.length;
				const head = e.head ?? true;
				const segs = e.pts.slice(0, head ? n - 1 : n);
				const d = segs.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ');
				const g = t.glow === undefined ? 0 : vis(f, t.glow, t.glow + 60, 10);
				const lw = e.label ? mw(e.label, e.lsize ?? 24, false, 700) : 0;
				const lx = e.lx ?? 0, ly = e.ly ?? 0;
				const bx = e.anchor === 'end' ? lx - lw : e.anchor === 'middle' ? lx - lw / 2 : lx;
				return (
					<g key={e.id} opacity={v}>
						{g > 0.01 ? <path d={e.pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ')} fill="none" stroke={GLOWC} strokeWidth={16} strokeLinecap="round" strokeLinejoin="round" opacity={0.8 * g} /> : null}
						{segs.length > 1 ? (e.dashed ? <path d={d} fill="none" stroke={e.color} strokeWidth={4} strokeDasharray="10 8" strokeLinecap="round" opacity={prog(f, t.at, 10)} /> : <DrawPath d={d} at={t.at} dur={10} color={e.color} width={4} />) : null}
						{head ? <FArrow a={e.pts[n - 2]} b={e.pts[n - 1]} at={segs.length > 1 ? t.at + 8 : t.at} color={e.color} dashed={e.dashed} /> : null}
						{e.label ? (
							<g opacity={prog(f, t.at + 6, 10)}>
								<rect x={bx - 10} y={ly - (e.lsize ?? 24) * 0.92} width={lw + 20} height={(e.lsize ?? 24) * 1.3} rx={10} fill="#fbf8f1" opacity={0.92} />
								<Sx x={lx} y={ly} text={e.label} size={e.lsize ?? 24} color={e.color} anchor={e.anchor ?? 'start'} weight={800} at={-1000} />
							</g>
						) : null}
					</g>
				);
			})}
			{nodes.map(nd => {
				const t = T[nd.id];
				if (!t) return null;
				const v = vis(f, t.at, t.out, 10) * dimOf(f, t);
				if (v <= 0.01) return null;
				const g = t.glow === undefined ? 0 : vis(f, t.glow, t.glow + 60, 10);
				if ('tag' in nd) {
					const sz = nd.size ?? 22;
					return (
						<g key={nd.id} opacity={v}>
							{nd.lines.map((l, i) => <Sx key={i} x={nd.x} y={nd.y + i * sz * 1.2} text={l} size={sz} color={nd.color ?? GREYX} anchor={nd.anchor ?? 'start'} weight={700} at={-1000} />)}
						</g>
					);
				}
				const h = nodeH(nd), sz = nd.size ?? 24;
				const so = nd.sub ? (t.subAt === undefined ? 1 : prog(f, t.subAt, 10)) : 0;
				const pop = 1 + 0.06 * Math.max(0, Math.sin(clamp01((f - t.at) / 14) * Math.PI));
				const cx = nd.x + nd.w / 2, cy = nd.y + h / 2;
				return (
					<g key={nd.id} opacity={v} transform={`translate(${cx},${cy}) scale(${pop}) translate(${-cx},${-cy})`}>
						{g > 0.01 ? <rect x={nd.x - 10} y={nd.y - 10} width={nd.w + 20} height={h + 20} rx={20} fill={GLOWC} opacity={0.7 * g} /> : null}
						<rect x={nd.x} y={nd.y} width={nd.w} height={h} rx={14} fill="#fffdf8" stroke={nd.color} strokeWidth={3.5} />
						<Sx x={cx} y={nd.y + (nd.sub ? sz * 1.22 : h / 2 + sz * 0.36)} text={nd.name} size={sz} color={INK} anchor="middle" weight={800} at={-1000} />
						{nd.sub && so > 0.01 ? <Sx x={cx} y={nd.y + sz * 1.22 + 30} text={nd.sub} size={sz * 0.8} color={INK_SOFT} anchor="middle" weight={700} at={-1000} opacity={so} /> : null}
					</g>
				);
			})}
		</g>
	);
};
export const nodeOf = (nodes: CNode[], id: string) => nodes.find(n => n.id === id) as Extract<CNode, {w: number}>;
/** Centre of a node box. */
export const nodeC = (nodes: CNode[], id: string): V2 => { const n = nodeOf(nodes, id); return [n.x + n.w / 2, n.y + nodeH(n) / 2]; };

/** A labelled dot moving through keyframes [frame, x, y]. */
export const Token: React.FC<{pts: [number, number, number][]; at: number; out?: number; label?: string; labelOut?: number; color?: string}> = ({pts, at, out, label, labelOut, color = '#c4432f'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const x = kf(f, pts.map(p => [p[0], p[1]] as [number, number])), y = kf(f, pts.map(p => [p[0], p[2]] as [number, number]));
	return (
		<g opacity={v}>
			<circle cx={x} cy={y} r={20} fill={color} opacity={0.25} />
			<circle cx={x} cy={y} r={11} fill={color} stroke="#fffdf8" strokeWidth={3} />
			{label ? <Sx x={x + 26} y={y - 16} text={label} size={32} color={color} hand weight={700} at={-1000} out={labelOut} /> : null}
		</g>
	);
};

// ---------- the C03a cation chart (layout: right two thirds, x 660..1880, y 180..980) ----------
export const SPX = 1600;
export const CHART_N: CNode[] = [
	{id: 'S', x: 1320, y: 180, w: 560, name: 'unknown cation (fresh portion each test)', color: INK, size: 23},
	{id: 'n1w', x: 660, y: 336, w: 460, name: 'white ppt: Ag^{+} or Pb^{2+}', color: C_CL},
	{id: 'n1n', x: 1510, y: 336, w: 180, name: 'no ppt', color: C_CL},
	{id: 'tag1', x: 1704, y: 356, tag: true, lines: ['dilute Pb^{2+}', 'may pass']},
	{id: 'n4ag', x: 660, y: 424, w: 230, name: 'dissolves in NH_3', sub: 'Ag^{+}: [Ag(NH_3)_2]^{+}', color: C_CX, size: 22},
	{id: 'n4pb', x: 905, y: 424, w: 215, name: 'stays: Pb^{2+}', sub: 'KI: yellow PbI_2', color: C_CL, size: 22},
	{id: 'n2w', x: 960, y: 512, w: 440, name: 'white ppt: Ba^{2+}, Ca^{2+} or Pb^{2+}', sub: 'Ca^{2+} depends on concentration', color: C_SO, size: 22},
	{id: 'n2n', x: 1510, y: 512, w: 180, name: 'no ppt', color: C_SO},
	{id: 'q2', x: 1166, y: 622, tag: true, lines: ['?'], size: 40, color: C_SO, anchor: 'middle'},
	{id: 'n6ba', x: 960, y: 632, w: 215, name: 'pale green: Ba^{2+}', color: C_FL, size: 22},
	{id: 'n6ca', x: 1185, y: 632, w: 215, name: 'brick red: Ca^{2+}', color: C_FL, size: 22},
	{id: 'tagKI', x: 662, y: 556, tag: true, lines: ['no colour + white sulfate:', 'try KI for Pb^{2+}'], size: 20},
	{id: 'n8cu', x: 660, y: 766, w: 290, name: 'pale blue: Cu^{2+}', sub: 'Cu(OH)_2', color: C_OH},
	{id: 'n8fe3', x: 970, y: 766, w: 290, name: 'red-brown: Fe^{3+}', sub: 'Fe(OH)_3', color: C_OH},
	{id: 'n8fe2', x: 1280, y: 766, w: 290, name: 'green: Fe^{2+}', sub: 'Fe(OH)_2', color: C_OH},
	{id: 'n8mg', x: 1590, y: 766, w: 290, name: 'white: Mg^{2+}', sub: 'stays in excess', color: C_OH},
	{id: 'tagMg', x: 1880, y: 870, tag: true, lines: ['or Ca^{2+} if concentrated:', 'flame decides (Mg^{2+} none, Ca^{2+} brick red)'], size: 20, anchor: 'end'},
	{id: 'n11cu', x: 660, y: 904, w: 290, name: 'deep blue', sub: '[Cu(NH_3)_4]^{2+}', color: C_CX},
	{id: 'n11fe', x: 970, y: 904, w: 290, name: 'blood red', sub: 'FeSCN^{2+}', color: C_CX},
];
export const CHART_E: CEdge[] = [
	{id: 'e1s', pts: [[SPX, 232], [SPX, 300]], color: C_CL, head: false, label: 'dilute HCl (Cl^{−})', lx: SPX - 18, ly: 280, anchor: 'end'},
	{id: 'e1w', pts: [[SPX, 300], [890, 300], [890, 336]], color: C_CL},
	{id: 'e1n', pts: [[SPX, 300], [SPX, 336]], color: C_CL},
	{id: 'e4a', pts: [[775, 388], [775, 424]], color: C_CX},
	{id: 'e4b', pts: [[1012, 388], [1012, 424]], color: C_CL},
	{id: 'e2s', pts: [[SPX, 388], [SPX, 480]], color: C_SO, head: false, label: 'dilute H_2SO_4 (SO_4^{2−})', lx: SPX - 18, ly: 432, anchor: 'end'},
	{id: 'e2w', pts: [[SPX, 480], [1180, 480], [1180, 512]], color: C_SO},
	{id: 'e2n', pts: [[SPX, 480], [SPX, 512]], color: C_SO},
	{id: 'eP', pts: [[1704, 390], [1704, 410], [1400, 540]], color: GREYX, dashed: true},
	{id: 'e6s', pts: [[1180, 586], [1180, 606]], color: C_FL, head: false, label: 'flame test', lx: 940, ly: 616, anchor: 'end'},
	{id: 'e6a', pts: [[1180, 606], [1067, 606], [1067, 632]], color: C_FL},
	{id: 'e6b', pts: [[1180, 606], [1292, 606], [1292, 632]], color: C_FL},
	{id: 'eKI', pts: [[1400, 658], [1440, 658], [1440, 500], [1120, 470]], color: GREYX, dashed: true},
	{id: 'e3s', pts: [[SPX, 564], [SPX, 736]], color: C_OH, head: false, label: 'NaOH (OH^{−})', lx: SPX + 18, ly: 660, anchor: 'start'},
	{id: 'e3b', pts: [[805, 736], [1735, 736]], color: C_OH, head: false},
	{id: 'e8cu', pts: [[805, 736], [805, 766]], color: C_OH},
	{id: 'e8fe3', pts: [[1115, 736], [1115, 766]], color: C_OH},
	{id: 'e8fe2', pts: [[1425, 736], [1425, 766]], color: C_OH},
	{id: 'e8mg', pts: [[1735, 736], [1735, 766]], color: C_OH},
	{id: 'e11cu', pts: [[805, 840], [805, 904]], color: C_CX, label: 'excess NH_3', lx: 820, ly: 880, anchor: 'start', lsize: 22},
	{id: 'e11fe', pts: [[1115, 840], [1115, 904]], color: C_CX, label: 'SCN^{−}', lx: 1130, ly: 880, anchor: 'start', lsize: 22},
];
/** Every chart element shown from `at` (static), optionally dimmed from `dim`. */
export const allT = (ids: string[], at = -1000, dim?: number, to?: number): CT => Object.fromEntries(ids.map(id => [id, {at, dim, to}]));
export const CHART_IDS = [...CHART_N.map(n => n.id), ...CHART_E.map(e => e.id)];
export const FAM = {
	cl: ['S', 'e1s', 'e1w', 'e1n', 'n1w', 'n1n', 'tag1', 'e4a', 'e4b', 'n4ag', 'n4pb'],
	so: ['e2s', 'e2w', 'e2n', 'n2w', 'n2n', 'eP'],
	fl: ['e6s', 'e6a', 'e6b', 'n6ba', 'n6ca', 'eKI', 'tagKI'],
	oh: ['e3s', 'e3b', 'e8cu', 'e8fe3', 'e8fe2', 'e8mg', 'n8cu', 'n8fe3', 'n8fe2', 'n8mg', 'tagMg'],
	cx: ['e11cu', 'e11fe', 'n11cu', 'n11fe'],
};
