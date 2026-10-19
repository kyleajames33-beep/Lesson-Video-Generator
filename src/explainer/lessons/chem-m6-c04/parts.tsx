// Drawing parts for M6 C04 (neutralisation applications). Reuses C03 (tokens, ripples, cups, working lines, bars)
// and through it C01 (proton token and hop, molecules, chips, question card, countdown); the C02 bubbles.
// New here: the pH strip bar (direction only, never a calculated value), the four-word choice card, plate crops,
// the 2 × 2 setting grid, the coded SO2 molecule, droplet, lake and limestone block outlines, rain lines, the
// rust-brown precipitate particle, a dial icon and a few lens helpers.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {Bubbles, CO2C, CO2_INK} from '../chem-m6-c02/parts';
import {CAT, CAT_INK} from '../chem-m5-c11/common';
import {AMBER_INK, Fade, INK, INK_SOFT, Ion, Sx, TEAL, clamp01, lerp, mw, smooth, vis} from '../chem-m6-c03/parts';
import type {PDef} from './assets';

export * from '../chem-m6-c03/parts';
export {Bubbles, CO2C, CO2_INK, CAT, CAT_INK};
export const RUST = '#9a4a22', RUST_INK = '#7a3514';
export const SULF = '#e2c13b';

// ---------- pH strip bar ----------
const PH_STOPS = ['#d6463c', '#ec8a3a', '#f2c94c', '#6cbf5a', '#3f9fd0', '#5b5fc7', '#7b4bb3'];
export type PHMark = {v: (f: number) => number; at: number; out?: number; label?: string; color?: string; below?: boolean};
/** 0 to 14 bar coloured acid red to neutral green to base purple; markers slide (values are positions only). */
export const PHBar: React.FC<{x: number; y: number; w: number; at: number; out?: number; marks: PHMark[]; ticks?: number[]; extra?: {v: number; label: string; at: number}[]; h?: number; o?: number}> = ({x, y, w, at, out, marks, ticks = [0, 7, 14], extra = [], h = 26, o = 1}) => {
	const f = useCurrentFrame();
	const v0 = vis(f, at, out, 14) * o;
	if (v0 <= 0.01) return null;
	const X = (v: number) => x + (clamp01(v / 14)) * w;
	const id = `ph-${Math.round(x)}-${Math.round(y)}`;
	return (
		<g opacity={v0}>
			<defs>
				<linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
					{PH_STOPS.map((c, i) => <stop key={i} offset={i / (PH_STOPS.length - 1)} stopColor={c} />)}
				</linearGradient>
			</defs>
			<rect x={x} y={y} width={w} height={h} rx={h / 2} fill={`url(#${id})`} stroke={INK} strokeWidth={2.5} />
			<Sx x={x - 20} y={y + h * 0.8} text="pH" size={30} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
			{ticks.map(t => <Sx key={t} x={X(t)} y={y + h + 34} text={String(t)} size={24} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />)}
			{extra.map((e, i) => (
				<Fade key={i} at={e.at}>
					<line x1={X(e.v)} y1={y - 6} x2={X(e.v)} y2={y + h + 6} stroke={INK} strokeWidth={3} strokeDasharray="5 4" />
					<Sx x={X(e.v)} y={y + h + 34} text={e.label} size={24} color={INK} anchor="middle" weight={700} at={-1000} />
				</Fade>
			))}
			{marks.map((m, i) => {
				const mo = vis(f, m.at, m.out, 10);
				if (mo <= 0.01) return null;
				const mx = X(m.v(f));
				return (
					<g key={i} opacity={mo}>
						<path d={`M${mx - 13},${y - 26} L${mx + 13},${y - 26} L${mx},${y - 4} Z`} fill="#ffffff" stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
						<line x1={mx} y1={y - 4} x2={mx} y2={y + h + 4} stroke="#ffffff" strokeWidth={4} />
						{m.label ? <Sx x={mx} y={m.below ? y + h + 66 : y - 36} text={m.label} size={28} color={m.color ?? INK} anchor="middle" hand at={-1000} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** Piecewise eased value over frames: keys [[frame, value], ...]. */
export const keys = (pts: [number, number][]) => (f: number) => {
	if (f <= pts[0][0]) return pts[0][1];
	for (let i = 1; i < pts.length; i++) {
		if (f <= pts[i][0]) return lerp(pts[i - 1][1], pts[i][1], smooth((f - pts[i - 1][0]) / Math.max(1, pts[i][0] - pts[i - 1][0])));
	}
	return pts[pts.length - 1][1];
};

// ---------- the choice card: safe, cheap, gentle, leaves behind ----------
export const CHOICE = ['safe', 'cheap', 'gentle', 'leaves behind'];
/** k = 0: large in the centre; k = 1: slim in the top-right corner. lit: [word index, from, to]. writes[i]: frame word i
 *  writes (big mode). */
export const ChoiceCard: React.FC<{at: number; k?: number; lit?: [number, number, number][]; writes?: number[]; out?: number; dial?: number}> = ({at, k = 1, lit = [], writes = [], out, dial}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.01) return null;
	const e = smooth(k);
	const sS = 30, bS = 76;
	const small = (() => {
		let cx = 0;
		return CHOICE.map(w => { const ww = mw(w, sS, true, 700) + 28; const r = {x: cx, w: ww}; cx += ww + 6; return r; });
	})();
	const sW = small[small.length - 1].x + small[small.length - 1].w;
	const sx0 = 1824 - sW, sy = 50;
	const bx = 1010, by = 340, blh = 130;
	return (
		<g opacity={o}>
			<rect x={lerp(bx - 50, sx0 - 14, e)} y={lerp(by - 110, sy - 6, e)} width={lerp(820, sW + 28, e)} height={lerp(4 * blh + 60, 56, e)} rx={lerp(26, 16, e)} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			{CHOICE.map((w, i) => {
				const g = lit.filter(l => l[0] === i).reduce((a, l) => Math.max(a, vis(f, l[1], l[2], 10)), 0);
				const wo = writes[i] === undefined ? 1 : prog(f, writes[i], 12);
				const x = lerp(bx, sx0 + small[i].x + 14, e), y = lerp(by + i * blh, sy + 32, e);
				const size = lerp(bS, sS, e);
				const ww = mw(w, size, true, 700);
				return (
					<g key={i} opacity={wo}>
						{g > 0.01 ? <rect x={x - lerp(14, 10, e)} y={y - size * 0.9} width={ww + 2 * lerp(14, 10, e)} height={size * 1.2} rx={lerp(14, 10, e)} fill={TEAL} opacity={0.9 * g} /> : null}
						<text x={x} y={y} fill={g > 0.5 ? '#ffffff' : INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}}>{w}</text>
						{e < 0.5 ? <text x={x - 70} y={y} fill={INK_SOFT} opacity={1 - e * 2} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size * 0.6}}>{i + 1}</text> : null}
					</g>
				);
			})}
			{dial !== undefined ? <Dial x={sx0 + small[2].x + small[2].w / 2} y={sy + 84} at={dial} /> : null}
		</g>
	);
};
/** A small dial icon whose needle turns (controlled dose). */
export const Dial: React.FC<{x: number; y: number; at: number; r?: number; out?: number}> = ({x, y, at, r = 24, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	const a = -2.4 + 1.6 * smooth(prog(f, at + 6, 30));
	return (
		<g opacity={o}>
			<circle cx={x} cy={y} r={r} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			{[-2.4, -1.6, -0.8, 0].map((t, i) => <line key={i} x1={x + Math.cos(t) * r * 0.72} y1={y + Math.sin(t) * r * 0.72} x2={x + Math.cos(t) * r * 0.95} y2={y + Math.sin(t) * r * 0.95} stroke={INK_SOFT} strokeWidth={2} />)}
			<line x1={x} y1={y} x2={x + Math.cos(a) * r * 0.8} y2={y + Math.sin(a) * r * 0.8} stroke={TEAL} strokeWidth={4} strokeLinecap="round" />
		</g>
	);
};

// ---------- plates: crop a natural region; fit into a cell ----------
let cropId = 0;
/** Shows natural region r = [x0, y0, x1, y1] of plate p at (x, y), width w (uniform scale; never stretched). */
export const PlateCrop: React.FC<{p: PDef; r: [number, number, number, number]; x: number; y: number; w: number; o?: number; fadeRight?: number}> = ({p, r, x, y, w, o = 1, fadeRight = 0}) => {
	const id = React.useMemo(() => `crop-${++cropId}`, []);
	if (o <= 0.01) return null;
	const k = w / (r[2] - r[0]);
	return (
		<g opacity={o}>
			<clipPath id={id}><rect x={x} y={y} width={w} height={(r[3] - r[1]) * k} /></clipPath>
			{fadeRight > 0 ? <><linearGradient id={id + 'g'} x1="0" x2="1" y1="0" y2="0"><stop offset={0} stopColor="#fff" /><stop offset={1 - fadeRight} stopColor="#fff" /><stop offset={1} stopColor="#000" /></linearGradient><mask id={id + 'm'} maskUnits="userSpaceOnUse" x={x} y={y} width={w} height={(r[3] - r[1]) * k}><rect x={x} y={y} width={w} height={(r[3] - r[1]) * k} fill={`url(#${id}g)`} /></mask></> : null}
			<g clipPath={`url(#${id})`} mask={fadeRight > 0 ? `url(#${id}m)` : undefined}><image href={staticFile(p.src)} x={x - r[0] * k} y={y - r[1] * k} width={p.nat[0] * k} height={p.nat[1] * k} /></g>
		</g>
	);
};
export const cropH = (r: [number, number, number, number], w: number) => ((r[3] - r[1]) * w) / (r[2] - r[0]);
/** Natural point inside a crop shown at (x, y, w). */
export const cropPt = (r: [number, number, number, number], x: number, y: number, w: number, nx: number, ny: number): [number, number] => {
	const k = w / (r[2] - r[0]);
	return [x + (nx - r[0]) * k, y + (ny - r[1]) * k];
};
/** Height for plate p to fit a cell (w, h) by its visible box. */
export const fitH = (p: PDef, w: number, h: number) => Math.min(h, (w * p.box[3]) / p.box[2]);
/** Natural point on a plate placed with PicH (x, y, h). */
export const natPt = (p: PDef, x: number, y: number, h: number, nx: number, ny: number): [number, number] => {
	const k = h / p.box[3];
	return [x + (nx - p.box[0]) * k, y + (ny - p.box[1]) * k];
};

// ---------- small coded objects ----------
export const SO2: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<line x1={x - 30 * s} y1={y + 16 * s} x2={x} y2={y} stroke={INK} strokeWidth={5 * s} strokeLinecap="round" />
		<line x1={x + 30 * s} y1={y + 16 * s} x2={x} y2={y} stroke={INK} strokeWidth={5 * s} strokeLinecap="round" />
		{[[-32, 17], [32, 17]].map(([dx, dy], i) => <g key={i}><circle cx={x + dx * s} cy={y + dy * s} r={17 * s} fill="#d9604f" stroke={INK} strokeWidth={2.2} /><Sx x={x + dx * s} y={y + dy * s + 6 * s} text="O" size={17 * s} color="#ffffff" anchor="middle" weight={800} at={-1000} /></g>)}
		<circle cx={x} cy={y} r={21 * s} fill={SULF} stroke={INK} strokeWidth={2.4} />
		<Sx x={x} y={y + 7 * s} text="S" size={21 * s} color={INK} anchor="middle" weight={800} at={-1000} />
	</g>
));
/** Water-droplet outline (point up). */
export const Droplet: React.FC<{x: number; y: number; r: number; at: number; out?: number; fill?: string}> = ({x, y, r, at, out, fill = '#e4f0f8'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	return <path opacity={o} d={`M${x},${y - r * 1.7} C${x + r * 0.5},${y - r * 0.9} ${x + r},${y - r * 0.4} ${x + r},${y + r * 0.1} A${r},${r} 0 0 1 ${x - r},${y + r * 0.1} C${x - r},${y - r * 0.4} ${x - r * 0.5},${y - r * 0.9} ${x},${y - r * 1.7} Z`} fill={fill} stroke="#4f86ad" strokeWidth={4} />;
};
/** Falling rain lines over a box, from `at` until `until`. */
export const Rain: React.FC<{x: number; y: number; w: number; h: number; at: number; until: number; n?: number; color?: string; drops?: boolean}> = ({x, y, w, h, at, until, n = 14, color = '#7fb2d6', drops = false}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, until, 14);
	if (o <= 0.01) return null;
	return (
		<g opacity={o} stroke={color} strokeWidth={3.5} strokeLinecap="round">
			{Array.from({length: n}, (_, i) => {
				const per = 34 + (i % 4) * 5;
				const t = (((f - at) + i * 13) % per) / per;
				const px = x + ((i * 0.618) % 1) * w;
				const py = y + t * h;
				return drops ? <path key={i} d={`M${px},${py - 10} C${px + 6},${py} ${px + 6},${py + 6} ${px},${py + 8} C${px - 6},${py + 6} ${px - 6},${py} ${px},${py - 10} Z`} fill={color} stroke="none" opacity={Math.sin(t * Math.PI)} /> : <line key={i} x1={px} y1={py} x2={px - 6} y2={py + 26} opacity={Math.sin(t * Math.PI)} />;
			})}
		</g>
	);
};
/** Rust-brown solid particle (Fe(OH)3). */
export const Rust: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${x - 16 * s},${y - 6 * s} L${x - 4 * s},${y - 16 * s} L${x + 14 * s},${y - 10 * s} L${x + 17 * s},${y + 7 * s} L${x + 2 * s},${y + 16 * s} L${x - 14 * s},${y + 10 * s} Z`} fill={RUST} stroke={RUST_INK} strokeWidth={2.4} strokeLinejoin="round" />
	</g>
));
/** A metal ion (amber) with its label. */
export const MetalTok: React.FC<{x: number; y: number; label: string; s?: number; o?: number}> = ({x, y, label, s = 1, o = 1}) => <Ion x={x} y={y} kind="+" r={25 * s} label={label} labelSize={15 * s} o={o} fill={CAT} />;
/** A grey mineral grain (soil). */
export const Grain: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : <path opacity={o} d={`M${x - 20 * s},${y} L${x - 8 * s},${y - 16 * s} L${x + 14 * s},${y - 13 * s} L${x + 22 * s},${y + 4 * s} L${x + 6 * s},${y + 16 * s} L${x - 14 * s},${y + 12 * s} Z`} fill="#b7b2a8" stroke={INK} strokeWidth={2.4} strokeLinejoin="round" />);
/** A setting label in a grid cell (small, quiet). */
export const CellTag: React.FC<{x: number; y: number; text: string; at: number; out?: number}> = ({x, y, text, at, out}) => <Sx x={x} y={y} text={text} size={32} color={INK_SOFT} anchor="middle" hand at={at} out={out} />;
/** A text tile (formula on a rounded tile, auto width). */
export const TTile: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle'}> = ({x, y, text, at, out, size = 40, color = INK, anchor = 'start'}) => {
	const w = mw(text, size, false, 800) + size * 0.9, h = size * 1.5;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	return (
		<Fade at={at} out={out}>
			<rect x={x0} y={y - h * 0.68} width={w} height={h} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.28)" strokeWidth={3} />
			<Sx x={x0 + size * 0.45} y={y} text={text} size={size} color={color} weight={800} at={-1000} />
		</Fade>
	);
};
export const ttileW = (text: string, size = 40) => mw(text, size, false, 800) + size * 0.9;
void AMBER_INK; void CAT_INK; void DrawPath;
