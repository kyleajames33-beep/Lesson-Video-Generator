// M7 C03 board pieces on top of the C01 molecule kit: general formulas with n subscripts (GF, GChip), the boiling point
// strip (vertical temperature scale with the dashed 25 °C line; marks drop to their values), the contact highlighter, the
// water lattice (water molecules with violet dotted hydrogen bonds), ethene's second-bond cloud, and the multiple-bond
// colouring helper for ball-and-stick models.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {DrawPath, INK, INK_SOFT, Sx, mw, smooth} from '../chem-m6-c01/parts';
import {CARDC, DISP, Dots, HGREY, MULTI, NAVY, OXY, V2, VIOLET, project3, rotate3} from '../chem-m7-c01/molecules';
import type {Mol3, Vec3} from '../chem-m7-c01/molecules';

export const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** Multiple bonds teal in a ball-and-stick. */
export const multiCol = (m: Mol3) => m.orders.map(o => (o > 1 ? MULTI : undefined));

// ---------- general formulas ----------
type GTok = {s: string; sub: boolean};
const gtoks = (t: string): GTok[] => {
	const out: GTok[] = [];
	const re = /_\{([^}]*)\}|_(\d+)/g;
	let last = 0, m: RegExpExecArray | null;
	while ((m = re.exec(t))) {
		if (m.index > last) out.push({s: t.slice(last, m.index), sub: false});
		out.push({s: m[1] ?? m[2], sub: true});
		last = m.index + m[0].length;
	}
	if (last < t.length) out.push({s: t.slice(last), sub: false});
	return out;
};
export const gfW = (t: string, size: number, hand = false, weight = 800) => gtoks(t).reduce((s, k) => s + (k.sub ? mw(k.s, size * 0.64, hand, weight) : mw(k.s, size, hand, weight)), 0);
/** Text with subscripts written _{...} (e.g. "C_{n}H_{2n+2}") or _digits. */
export const GF: React.FC<{x: number; y: number; text: string; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number; at?: number; out?: number; o?: number; hand?: boolean}> = ({x, y, text, size = 40, color = INK, anchor = 'start', weight = 800, at = -1000, out, o = 1, hand = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	let shift = 0;
	return (
		<text x={x} y={y} textAnchor={anchor} fill={color} opacity={v} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size, whiteSpace: 'pre'}}>
			{gtoks(text).map((k, i) => { const want = k.sub ? size * 0.22 : 0; const dy = want - shift; shift = want; return <tspan key={i} dy={dy || undefined} style={k.sub ? {fontSize: size * 0.64} : undefined}>{k.s}</tspan>; })}
		</text>
	);
};
/** A chip holding a general formula line. */
export const GChip: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; fill?: string; o?: number; anchor?: 'start' | 'middle'}> = ({x, y, text, at, out, size = 34, color = INK, fill = CARDC, o = 1, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const w = gfW(text, size, false, 700) + 40;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	return (
		<g opacity={v} transform={`translate(0,${(1 - prog(f, at, 10)) * 10})`}>
			<rect x={x0} y={y} width={w} height={size * 1.65} rx={size * 0.5} fill={fill} stroke={color} strokeWidth={2.5} />
			<GF x={x0 + 20} y={y + size * 1.13} text={text} size={size} color={color} weight={700} />
		</g>
	);
};

// ---------- boiling point strip ----------
export const STRIP = {x: 1500, top: 190, bot: 930, tmin: -180, tmax: 200};
export const ty = (T: number) => STRIP.bot - ((T - STRIP.tmin) / (STRIP.tmax - STRIP.tmin)) * (STRIP.bot - STRIP.top);
/** Vertical temperature scale with the dashed room temperature line and zone labels. */
export const Strip: React.FC<{at: number; out?: number; o?: number; x?: number}> = ({at, out, o = 1, x = STRIP.x}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const ticks = [-150, -100, -50, 0, 50, 100, 150];
	const ry = ty(25);
	return (
		<g opacity={v}>
			<Sx x={x} y={STRIP.top - 30} text="boiling point" size={28} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
			<line x1={x} y1={STRIP.top} x2={x} y2={STRIP.bot} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			{ticks.map(T => <g key={T}><line x1={x - 10} x2={x} y1={ty(T)} y2={ty(T)} stroke={INK} strokeWidth={2.5} /><Sx x={x - 16} y={ty(T) + 8} text={`${T}`} size={22} color={INK_SOFT} anchor="end" weight={600} at={-1000} /></g>)}
			<line x1={x - 52} x2={x + 14} y1={ry} y2={ry} stroke={NAVY} strokeWidth={3} strokeDasharray="10 8" />
			<Sx x={x - 64} y={ry + 8} text="room temperature, 25 °C" size={22} color={NAVY} anchor="end" weight={700} at={-1000} />
			<Sx x={x - 64} y={ry - 22} text="liquid above" size={24} color={INK_SOFT} anchor="end" hand at={-1000} />
			<Sx x={x - 64} y={ry + 40} text="gas below" size={24} color={INK_SOFT} anchor="end" hand at={-1000} />
		</g>
	);
};
/** A boiling point mark: the dot drops from the top of the strip to its temperature; label beside it. */
export const Mark: React.FC<{T: number; label: string; at: number; out?: number; o?: number; color?: string; x?: number; dy?: number; size?: number; ghost?: boolean; left?: boolean}> = ({T, label, at, out, o = 1, color = INK, x = STRIP.x, dy = 0, size = 26, ghost = false, left = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const y = lerp(STRIP.top, ty(T), smooth(prog(f, at, 20)));
	return (
		<g opacity={v}>
			<circle cx={x} cy={y} r={11} fill={ghost ? 'none' : color} stroke={color} strokeWidth={3} strokeDasharray={ghost ? '4 4' : undefined} />
			{label ? <Sx x={left ? x - 24 : x + 24} y={y + 9 + dy} text={label} size={size} color={color} weight={700} anchor={left ? 'end' : 'start'} at={-1000} /> : null}
		</g>
	);
};

// ---------- contact highlighter ----------
/** Pale-blue band between two neighbouring molecules: x1..x2 at y (height h); the band grows from the centre. */
export const Contact: React.FC<{x1: number; x2: number; y: number; h?: number; at: number; out?: number; o?: number}> = ({x1, x2, y, h = 40, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const p = smooth(prog(f, at, 20));
	const cx = (x1 + x2) / 2, w = (x2 - x1) * p;
	return <rect x={cx - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={DISP} opacity={0.45 * v} />;
};

// ---------- water lattice ----------
export type Water = {o: V2; a: number};
/** Water molecules on a loose grid (O red-brown, two grey H) with hydrogen-bond pairs between neighbours. */
export const waterGrid = (x0: number, y0: number, cols: number, rows: number, sp = 130): {w: Water[]; pairs: [number, number][]} => {
	const w: Water[] = [];
	for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) w.push({o: [x0 + c * sp + (r % 2) * sp * 0.5 + Math.sin(r * 3 + c) * 10, y0 + r * sp * 0.86 + Math.cos(c * 2 + r) * 8], a: (r * 1.7 + c * 2.3) % (2 * Math.PI)});
	const pairs: [number, number][] = [];
	w.forEach((p, i) => w.forEach((q, j) => { if (j > i && Math.hypot(p.o[0] - q.o[0], p.o[1] - q.o[1]) < sp * 1.12) pairs.push([i, j]); }));
	return {w, pairs};
};
export const WaterMol: React.FC<{p: Water; s?: number; o?: number; shift?: V2}> = ({p, s = 1, o = 1, shift = [0, 0]}) => {
	if (o <= 0.01) return null;
	const [x, y] = [p.o[0] + shift[0], p.o[1] + shift[1]];
	const hs = [p.a + 0.91, p.a - 0.91].map(a => [x + Math.cos(a) * 30 * s, y + Math.sin(a) * 30 * s] as V2);
	return (
		<g opacity={o}>
			{hs.map((h, i) => <line key={i} x1={x} y1={y} x2={h[0]} y2={h[1]} stroke={INK} strokeWidth={4} />)}
			{hs.map((h, i) => <circle key={'h' + i} cx={h[0]} cy={h[1]} r={10 * s} fill="#f3ede1" stroke={INK} strokeWidth={2.5} />)}
			<circle cx={x} cy={y} r={17 * s} fill={OXY} stroke={INK} strokeWidth={3} />
		</g>
	);
};
/** Hydrogen bond between two water molecules, drawn O to O but shortened (violet dotted); `flash` turns it red-brown. */
export const HBond: React.FC<{a: V2; b: V2; at: number; out?: number; o?: number; flash?: number; glow?: number}> = ({a, b, at, out, o = 1, flash, glow}) => {
	const f = useCurrentFrame();
	const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
	const ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L;
	const p: V2 = [a[0] + ux * 30, a[1] + uy * 30], q: V2 = [b[0] - ux * 24, b[1] - uy * 24];
	const fl = flash !== undefined ? Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - flash) / 40)) * Math.PI)) : 0;
	const gl = glow !== undefined ? 0.5 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - glow) / 30)) * Math.PI)) : 0;
	return <Dots a={p} b={q} at={at} out={out} o={o} color={fl > 0.3 ? OXY : VIOLET} width={4 + 3 * (fl + gl)} />;
};

// ---------- ethene's second bond ----------
/** Teal clouds above and below the C=C axis: pass the two carbon positions and the molecular-plane normal (3D). */
export const PiCloud: React.FC<{c1: Vec3; c2: Vec3; normal: Vec3; cx: number; cy: number; unitPx: number; yaw: number; pitch: number; o?: number; pulse?: number}> = ({c1, c2, normal, cx, cy, unitPx, yaw, pitch, o = 1, pulse = 0}) => {
	if (o <= 0.01) return null;
	const m: Vec3 = [(c1[0] + c2[0]) / 2, (c1[1] + c2[1]) / 2, (c1[2] + c2[2]) / 2];
	const P = (v: Vec3) => project3(rotate3(v, yaw, pitch), cx, cy, unitPx);
	const a = P(c1), b = P(c2);
	const ang = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
	const rx = (Math.hypot(b.x - a.x, b.y - a.y) / 2) * 1.05 * (1 + 0.06 * pulse);
	return (
		<g opacity={o}>
			{[1, -1].map(sg => {
				const q = P([m[0] + normal[0] * 0.42 * sg, m[1] + normal[1] * 0.42 * sg, m[2] + normal[2] * 0.42 * sg]);
				return <ellipse key={sg} cx={q.x} cy={q.y} rx={rx} ry={unitPx * 0.2 * (1 + 0.1 * pulse)} transform={`rotate(${ang},${q.x},${q.y})`} fill={MULTI} opacity={0.32} stroke={MULTI} strokeWidth={2.5} />;
			})}
		</g>
	);
};

/** Electron cloud around a 2D skeletal molecule: shift (−1..1) slides the cloud's dense end for a temporary dipole. */
export const Cloud: React.FC<{x: number; y: number; w: number; h: number; shift: number; o?: number; signs?: boolean}> = ({x, y, w, h, shift, o = 1, signs = true}) => {
	if (o <= 0.01) return null;
	const sx = x + shift * w * 0.16;
	return (
		<g opacity={o}>
			<ellipse cx={x} cy={y} rx={w / 2} ry={h / 2} fill="none" stroke={DISP} strokeWidth={2} strokeDasharray="6 6" />
			<ellipse cx={sx} cy={y} rx={w / 2 - Math.abs(shift) * w * 0.12} ry={h / 2 - 6} fill={DISP} opacity={0.28} />
			{signs && Math.abs(shift) > 0.4 ? (
				<g>
					<Sx x={x + Math.sign(shift) * w * 0.42} y={y - h / 2 - 10} text="δ−" size={30} color={NAVY} anchor="middle" weight={800} at={-1000} />
					<Sx x={x - Math.sign(shift) * w * 0.42} y={y - h / 2 - 10} text="δ+" size={30} color={HGREY} anchor="middle" weight={800} at={-1000} />
				</g>
			) : null}
		</g>
	);
};
export {DrawPath, INK, INK_SOFT};
