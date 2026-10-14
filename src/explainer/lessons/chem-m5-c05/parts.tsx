// Drawing parts for the C5 lesson: the expression builder (rows, fractions, equation strips), tubes and small icons.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, Plate, prog} from '../../kit';
import {Arrow, Bracket, GasTube, RateBars, Ring, smooth} from '../chem-m5-c04b/parts';
import {ESC, Fade, Overlay, SvgText, TEAL} from '../chem-m5-c01/parts';
import {CROSS, GLASS, GREEN} from './common';
import {CU_DEEP_PLATE, CU_PALE_PLATE, FLASK_PLATE, HAVE5, LUMP_PLATE} from './assets';

export {Arrow, Bracket, GasTube, RateBars, Ring, smooth, ESC, Fade, Overlay, SvgText, TEAL};
export const FWD = ESC;
export const REV = AMBER;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// ---------- text with _2 subscripts and ^{3+} superscripts ----------
type Tok = {s: string; k: 0 | 1 | 2};
export const toks = (text: string): Tok[] => {
	const out: Tok[] = [];
	const re = /(_\d+|\^\{[^}]*\})/g;
	let last = 0;
	let m: RegExpExecArray | null;
	while ((m = re.exec(text))) {
		if (m.index > last) out.push({s: text.slice(last, m.index), k: 0});
		out.push(m[0][0] === '_' ? {s: m[0].slice(1), k: 1} : {s: m[0].slice(2, -1), k: 2});
		last = m.index + m[0].length;
	}
	if (last < text.length) out.push({s: text.slice(last), k: 0});
	return out;
};
/** Estimated width of marked-up text. */
const cw1 = (ch: string, hand: boolean) => {
	if (hand) return 0.4;
	if (/[0-9.,]/.test(ch)) return 0.55;
	if (ch === ' ') return 0.28;
	if (/[\[\]()]/.test(ch)) return 0.32;
	if (/[×=+÷]/.test(ch)) return 0.6;
	if (ch === '/') return 0.4;
	if (/[A-Z]/.test(ch)) return 0.68;
	return 0.58;
};
export const tw = (text: string, size: number, hand = false) =>
	toks(text).reduce((w, t) => w + [...t.s].reduce((a2, ch) => a2 + cw1(ch, hand), 0) * size * (t.k ? 0.72 : 1), 0);

export const Sx: React.FC<{x: number; y: number; text: string; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; at?: number; out?: number; hand?: boolean; weight?: number; opacity?: number}> = ({x, y, text, size = 44, color = INK, anchor = 'start', at = 0, out, hand = false, weight = 700, opacity = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10)) * opacity;
	if (o <= 0.001) return null;
	let shift = 0;
	return (
		<text x={x} y={y} textAnchor={anchor} fill={color} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size, whiteSpace: 'pre'}}>
			{toks(text).map((t, i) => {
				const want = t.k === 1 ? size * 0.2 : t.k === 2 ? -size * 0.42 : 0;
				const dy = want - shift;
				shift = want;
				return <tspan key={i} dy={dy || undefined} style={t.k ? {fontSize: size * 0.64} : undefined}>{t.s}</tspan>;
			})}
		</text>
	);
};

// ---------- expression builder: terms in bracket rows and fractions ----------
export type Term = {
	t: string; p?: string; br?: boolean; hand?: boolean; at: number; out?: number; color?: string; bc?: string;
	from?: [number, number]; dur?: number; pAt?: number; pFrom?: [number, number]; faint1?: number; strike?: number; pColor?: string;
};
const PADB = 0.3;
export const termW = (m: Term, size: number) => {
	const pad = m.br === false ? 0 : size * PADB;
	return tw(m.t, size, m.hand) + 2 * pad + (m.p ? tw(m.p, size * 0.64) + size * 0.08 : 0);
};
export const rowGeom = (ts: Term[], size: number, gap = 0.3) => {
	const ws = ts.map(m => termW(m, size));
	const g = size * gap;
	return {ws, g, total: ws.reduce((a, b) => a + b, 0) + g * Math.max(0, ts.length - 1)};
};
/** Left x of every term of a row. */
export const rowXs = (ts: Term[], size: number, x: number, anchor: 'start' | 'middle' | 'end' = 'start', gap = 0.3) => {
	const {ws, g, total} = rowGeom(ts, size, gap);
	let cur = anchor === 'middle' ? x - total / 2 : anchor === 'end' ? x - total : x;
	return ws.map(w => { const r = {x: cur, w}; cur += w + g; return r; });
};

export const TermView: React.FC<{m: Term; x: number; y: number; size: number}> = ({m, x, y, size}) => {
	const f = useCurrentFrame();
	const fly = !!m.from;
	const e = prog(f, m.at, m.dur ?? 28);
	const o = prog(f, m.at, fly ? 6 : 14) * (m.out === undefined ? 1 : 1 - prog(f, m.out, 10));
	if (o <= 0.01) return null;
	const pad = m.br === false ? 0 : size * PADB;
	const iw = tw(m.t, size, m.hand);
	const tx = x + pad, ty = y;
	const px = m.from ? m.from[0] + (tx - m.from[0]) * e : tx;
	const py = m.from ? m.from[1] + (ty - m.from[1]) * e : ty;
	const bo = fly ? clamp01((e - 0.55) / 0.45) : 1;
	const top = y - size * 0.86, bot = y + size * 0.28, sw = size * 0.075;
	const lx = x + size * 0.06, rx = x + iw + 2 * pad - size * 0.06, hk = size * 0.14;
	const endX = x + iw + 2 * pad;
	const pFinal: [number, number] = [endX + size * 0.06, y - size * 0.5];
	const pAt = m.pAt ?? m.at + 12;
	const pe = prog(f, pAt, 30);
	const pPos: [number, number] = m.pFrom ? [m.pFrom[0] + (pFinal[0] - m.pFrom[0]) * pe, m.pFrom[1] + (pFinal[1] - m.pFrom[1]) * pe] : pFinal;
	const strikeY = y - size * 0.3;
	return (
		<g opacity={o}>
			{m.br === false ? null : (
				<g opacity={bo} stroke={m.bc ?? INK} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" fill="none">
					<path d={`M${lx + hk},${top} L${lx},${top} L${lx},${bot} L${lx + hk},${bot}`} />
					<path d={`M${rx - hk},${top} L${rx},${top} L${rx},${bot} L${rx - hk},${bot}`} />
				</g>
			)}
			<Sx x={px} y={py} text={m.t} size={size} color={m.color ?? INK} at={-1000} hand={m.hand} />
			{m.p ? <Sx x={pPos[0]} y={pPos[1]} text={m.p} size={size * 0.64} color={m.pColor ?? m.color ?? INK} at={pAt} /> : null}
			{m.faint1 !== undefined ? <Sx x={pFinal[0]} y={pFinal[1]} text="1" size={size * 0.64} color={INK_SOFT} at={m.at + 10} out={m.faint1} opacity={0.5} /> : null}
			{m.strike !== undefined ? <DrawPath d={`M${x - 4},${strikeY + 4} L${endX + 4},${strikeY - 4}`} at={m.strike} dur={12} color={CROSS} width={7} /> : null}
		</g>
	);
};

/** A left-to-right row of terms (brackets drawn round species). */
export const Line: React.FC<{x: number; y: number; size?: number; items: Term[]; anchor?: 'start' | 'middle' | 'end'; gap?: number}> = ({x, y, size = 56, items, anchor = 'start', gap = 0.3}) => {
	const xs = rowXs(items, size, x, anchor, gap);
	return <g>{items.map((m, i) => <TermView key={i} m={m} x={xs[i].x} y={y} size={size} />)}</g>;
};

export const fracGeom = (cx: number, cy: number, size: number, num: Term[], den: Term[]) => {
	const rn = rowGeom(num, size), rd = rowGeom(den, size);
	const W = Math.max(rn.total, rd.total) + size * 0.5;
	const yn = cy - size * 0.36, yd = cy + size * 1.1;
	return {W, x1: cx - W / 2, x2: cx + W / 2, ybar: cy, yn, yd, num: rowXs(num, size, cx, 'middle'), den: rowXs(den, size, cx, 'middle')};
};
export const Frac: React.FC<{cx: number; cy: number; size?: number; num: Term[]; den: Term[]; barAt: number; barColor?: string; prefix?: string; prefixAt?: number; prefixColor?: string; prefixSize?: number; barOut?: number}> = ({cx, cy, size = 64, num, den, barAt, barColor = INK, prefix, prefixAt, prefixColor = INK, prefixSize, barOut}) => {
	const f = useCurrentFrame();
	const g = fracGeom(cx, cy, size, num, den);
	const o = barOut === undefined ? 1 : 1 - prog(f, barOut, 10);
	return (
		<g opacity={o}>
			<DrawPath d={`M${g.x1},${cy} L${g.x2},${cy}`} at={barAt} dur={14} width={size * 0.075} color={barColor} />
			{prefix ? <Sx x={g.x1 - size * 0.3} y={cy + size * 0.3} anchor="end" text={prefix} size={prefixSize ?? size} color={prefixColor} at={prefixAt ?? barAt} /> : null}
			{num.map((m, i) => <TermView key={'n' + i} m={m} x={g.num[i].x} y={g.yn} size={size} />)}
			{den.map((m, i) => <TermView key={'d' + i} m={m} x={g.den[i].x} y={g.yd} size={size} />)}
		</g>
	);
};

// ---------- equation strip with known piece positions ----------
export type EqItem = {k: 'sp'; coef?: string; t: string; color?: string; at?: number} | {k: 'plus'; at?: number} | {k: 'arrow'; at?: number};
export type EqPos = {k: string; cx: number; sx: number; w: number; cw: number};
export const eqLayout = (items: EqItem[], size: number, x0: number): {pos: EqPos[]; end: number} => {
	let x = x0;
	const pos = items.map(it => {
		if (it.k === 'plus') { const r = {k: 'plus', cx: x + size * 0.45, sx: x + size * 0.45, w: size * 0.6, cw: 0}; x += size * 1.5; return r; }
		if (it.k === 'arrow') { const r = {k: 'arrow', cx: x + size * 0.45, sx: x + size * 0.45, w: size * 1.3, cw: 0}; x += size * 2.2; return r; }
		const cw = it.coef ? tw(it.coef, size) + size * 0.1 : 0;
		const w = tw(it.t, size);
		const r = {k: 'sp', cx: x, sx: x + cw, w, cw};
		x += cw + w;
		return r;
	});
	return {pos, end: x};
};
export const eqWidth = (items: EqItem[], size: number) => eqLayout(items, size, 0).end;
export const EqStrip: React.FC<{items: EqItem[]; x: number; y: number; size?: number; at?: number; anchor?: 'start' | 'middle'; out?: number}> = ({items, x, y, size = 54, at = 0, anchor = 'start', out}) => {
	const x0 = anchor === 'middle' ? x - eqWidth(items, size) / 2 : x;
	const {pos} = eqLayout(items, size, x0);
	return (
		<g>
			{items.map((it, i) => {
				const p = pos[i];
				const a = (it.at ?? at);
				if (it.k === 'plus') return <Sx key={i} x={p.cx} y={y} text="+" size={size} at={a} out={out} />;
				if (it.k === 'arrow') {
					return (
						<Fade key={i} at={a} out={out}>
							<path d={`M${p.cx},${y - size * 0.4} L${p.cx + p.w},${y - size * 0.4} M${p.cx + p.w - 14},${y - size * 0.4 - 11} L${p.cx + p.w},${y - size * 0.4} L${p.cx + p.w - 14},${y - size * 0.4 + 11}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
							<path d={`M${p.cx + p.w},${y - size * 0.12} L${p.cx},${y - size * 0.12} M${p.cx + 14},${y - size * 0.12 - 11} L${p.cx},${y - size * 0.12} L${p.cx + 14},${y - size * 0.12 + 11}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
						</Fade>
					);
				}
				return (
					<g key={i}>
						{it.coef ? <Sx x={p.cx} y={y} text={it.coef} size={size} color={it.color ?? INK} at={a} out={out} /> : null}
						<Sx x={p.sx} y={y} text={it.t} size={size} color={it.color ?? INK} at={a} out={out} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- small shared pieces ----------
/** Rounded chip with marked-up text and an optional cross. */
export const Chip: React.FC<{x: number; y: number; w: number; text: string; at: number; out?: number; color?: string; size?: number; h?: number; cross?: number; hand?: boolean}> = ({x, y, w, text, at, out, color = INK, size = 40, h = 62, cross, hand = true}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={h} rx={h / 2} fill="#fffdf8" stroke={color} strokeWidth={3} />
		<Sx x={x + w / 2 - (cross !== undefined ? 22 : 0)} y={y + h / 2 + size * 0.3} text={text} size={size} color={color} anchor="middle" hand={hand} at={at} />
		{cross !== undefined ? (
			<g>
				<DrawPath d={`M${x + w - 56},${y + 20} L${x + w - 22},${y + h - 20}`} at={cross} dur={8} color={CROSS} width={7} />
				<DrawPath d={`M${x + w - 22},${y + 20} L${x + w - 56},${y + h - 20}`} at={cross + 6} dur={8} color={CROSS} width={7} />
			</g>
		) : null}
	</Fade>
);
/** Hand-drawn cross at a point. */
export const Cross: React.FC<{x: number; y: number; at: number; s?: number; color?: string}> = ({x, y, at, s = 36, color = CROSS}) => (
	<g>
		<DrawPath d={`M${x - s},${y - s} L${x + s},${y + s}`} at={at} dur={8} color={color} width={8} />
		<DrawPath d={`M${x + s},${y - s} L${x - s},${y + s}`} at={at + 6} dur={8} color={color} width={8} />
	</g>
);
export const Tick: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 34}) => (
	<DrawPath d={`M${x - s * 0.5},${y} L${x - s * 0.12},${y + s * 0.45} L${x + s * 0.55},${y - s * 0.5}`} at={at} dur={12} color={GREEN} width={8} />
);

/** Painted copper tube (aligned pale and deep plates, alpha box 410,183,790,1617 of 1200 x 1800). Placed by its visible box; `deep` 0..1 crossfades pale to deep. */
const CU_NAT: [number, number] = [1200, 1800];
const CU_BOX: [number, number, number, number] = [410, 183, 380, 1434];
export const CuTube: React.FC<{x: number; y: number; h: number; deep?: number; at?: number; opacity?: number}> = ({x, y, h, deep = 0, at = 0, opacity = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 16) * opacity;
	if (o <= 0.01) return null;
	const w = (CU_BOX[2] / CU_BOX[3]) * h;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o}}>
			<Plate src={CU_PALE_PLATE} natural={CU_NAT} crop={CU_BOX} width={w} style={{left: 0, top: 0}} />
			{deep > 0 ? <Plate src={CU_DEEP_PLATE} natural={CU_NAT} crop={CU_BOX} width={w} style={{left: 0, top: 0, opacity: Math.min(1, deep)}} /> : null}
		</div>
	);
};
/** Coded flask for a clear solution. */
export const Flask: React.FC<{x: number; y: number; w: number; h: number; color: string; at?: number; opacity?: number}> = ({x, y, w, h, color, at = 0, opacity = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 16) * opacity;
	if (o <= 0.01) return null;
	if (HAVE5.has(FLASK_PLATE)) {
		// painted flask (1200 x 1600 plate, alpha box 217, 162, 764 x 1275), fitted into the old slot
		const k = Math.min(w / 764, h / 1275);
		return <image href={staticFile(FLASK_PLATE)} x={x + (w - 764 * k) / 2 - 217 * k} y={y + (h - 1275 * k) / 2 - 162 * k} width={1200 * k} height={1600 * k} opacity={o} />;
	}
	const nw = w * 0.34, nx = x + (w - nw) / 2, neck = y + h * 0.36;
	const body = `M${nx},${y} L${nx},${neck} L${x},${y + h - 14} Q${x},${y + h} ${x + 16},${y + h} L${x + w - 16},${y + h} Q${x + w},${y + h} ${x + w},${y + h - 14} L${nx + nw},${neck} L${nx + nw},${y}`;
	const liqTop = y + h * 0.62;
	return (
		<g opacity={o}>
			<path d={body} fill={GLASS} fillOpacity={0.55} stroke={INK} strokeWidth={4.5} strokeLinejoin="round" />
			<path d={`M${x + w * 0.1},${liqTop} L${x + 6},${y + h - 12} Q${x + 6},${y + h - 5} ${x + 20},${y + h - 5} L${x + w - 20},${y + h - 5} Q${x + w - 6},${y + h - 5} ${x + w - 6},${y + h - 12} L${x + w * 0.9},${liqTop} Z`} fill={color} fillOpacity={0.55} />
			<path d={`M${nx - 6},${y} L${nx + nw + 6},${y}`} stroke={INK} strokeWidth={4.5} strokeLinecap="round" />
		</g>
	);
};

/** A solid lump (painted plate, alpha box 160, 213, 1280 x 1172), or a grey block when the plate is absent. Centred on (cx, cy), `h` tall. */
export const SolidLump: React.FC<{cx: number; cy: number; h: number}> = ({cx, cy, h}) => {
	if (!HAVE5.has(LUMP_PLATE)) return <rect x={cx - h * 0.78} y={cy - h / 2} width={h * 1.55} height={h} rx={8} fill="#cfc7b8" stroke={INK_SOFT} strokeWidth={4} />;
	const k = h / 1172;
	return <image href={staticFile(LUMP_PLATE)} x={cx - (1280 * k) / 2 - 160 * k} y={cy - h / 2 - 213 * k} width={1600 * k} height={1600 * k} />;
};
/** Wobbling particle at a slot (deterministic, frame driven). */
export const wob = (f: number, seed: number, cx: number, cy: number, ax: number, ay: number) => ({
	x: cx + ax * (0.6 * Math.sin(f * 0.031 + seed * 1.7) + 0.4 * Math.sin(f * 0.057 + seed * 2.9)),
	y: cy + ay * (0.6 * Math.sin(f * 0.037 + seed * 2.3) + 0.4 * Math.sin(f * 0.049 + seed * 0.7)),
});
export const Dot: React.FC<{x: number; y: number; r: number; fill: string; stroke?: string; opacity?: number}> = ({x, y, r, fill, stroke = INK, opacity = 1}) => <circle cx={x} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth={2.4} opacity={opacity} />;
void AMBER_INK; void FONT_DISPLAY;
