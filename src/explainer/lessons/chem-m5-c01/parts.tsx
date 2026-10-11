// Shared drawing parts for the C1 equilibrium lesson (hand-drawn paper style).
import React, {useMemo} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, Mark, PAPER_DEEP, prog, rng} from '../../kit';

export const W = 1920, H = 1080;
export const TEAL = '#0d6b52';
export const ESC = '#1f6fb2';
export const RET = AMBER;
export const C_STATIC = '#7b5c3a';
export const C_DYNAMIC = TEAL;
export const C_NEITHER = '#b3472c';
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const Overlay: React.FC<{children: React.ReactNode}> = ({children}) => (
	<svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>{children}</svg>
);
export const Card: React.FC<{x: number; y: number; w: number; at: number; out?: number; children: React.ReactNode; tint?: string}> = ({x, y, w, at, out, children, tint = '#fffdf8'}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: tint, borderRadius: 22, padding: '24px 28px', boxShadow: '0 18px 40px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: '1.5px solid rgba(60,45,20,0.08)'}}>{children}</div>
	</Enter>
);
export const Body: React.FC<{children: React.ReactNode; size?: number; color?: string; weight?: number}> = ({children, size = 36, color = INK, weight = 500}) => (
	<div style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, color, lineHeight: 1.25}}>{children}</div>
);
/** Opacity group helper: visible between `at` and `out` (frames). */
export const Fade: React.FC<{at: number; out?: number; children: React.ReactNode; dur?: number}> = ({at, out, children, dur = 12}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, dur) * (out === undefined ? 1 : 1 - prog(f, out, dur));
	if (o <= 0.001) return null;
	return <g opacity={o}>{children}</g>;
};

/** Hand text inside SVG, with optional chemical subscripts written as _2 (digits after underscore). */
export const SvgText: React.FC<{x: number; y: number; text: string; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; at?: number; hand?: boolean; weight?: number; opacity?: number}> = ({x, y, text, size = 44, color = INK, anchor = 'start', at = 0, hand = true, weight = 700, opacity = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * opacity;
	if (o <= 0.001) return null;
	const parts = text.split(/(_\d)/);
	return (
		<text x={x} y={y} textAnchor={anchor} fill={color} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size}}>
			{parts.map((p, i) => p.startsWith('_') ? <tspan key={i} dy={size * 0.16} style={{fontSize: size * 0.68}}>{p.slice(1)}<tspan dy={-size * 0.16} /></tspan> : <tspan key={i}>{p}</tspan>)}
		</text>
	);
};

/** HTML formula with subscripts, e.g. "CO_2(aq)". */
export const Formula: React.FC<{text: string; size?: number; color?: string; weight?: number}> = ({text, size = 44, color = INK, weight = 600}) => (
	<span style={{fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, color, whiteSpace: 'pre'}}>
		{text.split(/(_\d)/).map((p, i) => p.startsWith('_') ? <sub key={i} style={{fontSize: size * 0.66, lineHeight: 0}}>{p.slice(1)}</sub> : <span key={i}>{p}</span>)}
	</span>
);
export const EqArrow: React.FC<{w?: number; color?: string; pulse?: number}> = ({w = 74, color = INK, pulse = 0}) => (
	<svg width={w} height={46} viewBox="0 0 74 46" style={{overflow: 'visible', transform: `scale(${1 + pulse * 0.28})`}}>
		<path d="M4,16 L66,16 M54,6 L66,16 L54,26" fill="none" stroke={color} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
		<path d="M70,32 L8,32 M20,22 L8,32 L20,42" fill="none" stroke={color} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
/** Equation chip: array of formula strings with 'ARROW' for the double arrow. */
export const EqChip: React.FC<{x: number; y: number; at: number; parts: string[]; size?: number; pulseAt?: number; color?: string}> = ({x, y, at, parts, size = 46, pulseAt, color = TEAL}) => {
	const f = useCurrentFrame();
	const pulse = pulseAt === undefined ? 0 : Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - pulseAt) / 40)) * Math.PI * 2)) * (f >= pulseAt ? 1 : 0);
	return (
		<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
			<div style={{display: 'inline-flex', alignItems: 'center', gap: 16, background: '#fffdf8', border: `3px solid ${color}`, borderRadius: 18, padding: '12px 24px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				{parts.map((p, i) => p === 'ARROW' ? <EqArrow key={i} color={color} pulse={pulse} w={size * 1.5} /> : <Formula key={i} text={p} size={size} />)}
			</div>
		</Enter>
	);
};

// ---------- CO2 molecule and lens ----------
export const Co2: React.FC<{x: number; y: number; rot?: number; s?: number; o?: number}> = ({x, y, rot = 0, s = 1, o = 1}) => (
	<g transform={`translate(${x.toFixed(1)},${y.toFixed(1)}) rotate(${rot.toFixed(1)}) scale(${s})`} opacity={o}>
		<path d="M-28,-4 L28,-4 M-28,4 L28,4" stroke="#4a443d" strokeWidth={3} strokeLinecap="round" />
		<circle cx={-29} r={14} fill="#d6523c" stroke="#8c2f20" strokeWidth={2} />
		<circle cx={29} r={14} fill="#d6523c" stroke="#8c2f20" strokeWidth={2} />
		<circle r={16} fill="#3a3733" stroke="#1d1b19" strokeWidth={2} />
	</g>
);

type Ev = {t0: number; dur: number; xa: number; ya: number; xb: number; yb: number; exit: boolean; spin: number; kind: 'esc' | 'ret'};
type Slot = {sx: number; sy: number; ax: number; ay: number; w1: number; w2: number; w3: number; p1: number; p2: number; p3: number; rot: number};
export type LensCfg = {
	id: string; cx: number; cy: number; r: number; size: number; seed: number;
	nGas: number; nWater: number; maxF: number;
	escRate: (f: number) => number; retRate: (f: number) => number;
	gas: (f: number) => number; water: (f: number) => number; exit?: (f: number) => number;
};
const genSlots = (seed: number, n: number, cfg: LensCfg, half: 'gas' | 'water'): Slot[] => {
	const rr = rng(seed);
	const {cx, cy, r, size} = cfg;
	const out: Slot[] = [];
	let guard = 0;
	const minD = 92 * size;
	const k = r / 320;
	while (out.length < n && guard++ < 8000) {
		const x = cx + (rr() * 2 - 1) * (r - 60 * k);
		const y = half === 'gas' ? cy - (r - 60 * k) + rr() * (r - 60 * k - 70 * k) : cy + 70 * k + rr() * (r - 60 * k - 70 * k);
		if (Math.hypot(x - cx, y - cy) > r - 62 * k) continue;
		if (out.some(o => Math.hypot(o.sx - x, o.sy - y) < minD)) continue;
		out.push({sx: x, sy: y, ax: (8 + rr() * 8) * k, ay: (6 + rr() * 6) * k, w1: 0.04 + rr() * 0.05, w2: 0.05 + rr() * 0.05, w3: 0.03 + rr() * 0.04, p1: rr() * 6.28, p2: rr() * 6.28, p3: rr() * 6.28, rot: rr() * 360});
	}
	return out;
};
const genEvents = (kind: 'esc' | 'ret', cfg: LensCfg): Ev[] => {
	const rr = rng(cfg.seed + (kind === 'esc' ? 11 : 97));
	const {cx, cy, r} = cfg;
	const k = r / 320;
	const lim = r * 0.58;
	const rate = kind === 'esc' ? cfg.escRate : cfg.retRate;
	const out: Ev[] = [];
	let acc = rr() * 0.6;
	for (let f = 0; f <= cfg.maxF; f++) {
		acc += rate(f);
		if (acc < 1) continue;
		acc -= 1;
		const xa = cx + (rr() * 2 - 1) * lim;
		let xb = Math.max(cx - lim, Math.min(cx + lim, xa + (rr() * 2 - 1) * r * 0.45));
		let ya: number, yb: number;
		const exit = kind === 'esc' && cfg.exit ? cfg.exit(f) > 0.5 : false;
		if (kind === 'esc') {
			ya = cy + (80 + rr() * 130) * k;
			yb = exit ? cy - r - 60 : cy - (95 + rr() * 110) * k;
			if (exit) xb = xa + (rr() - 0.5) * 80;
		} else {
			ya = cy - (110 + rr() * 100) * k;
			yb = cy + (80 + rr() * 130) * k;
		}
		out.push({t0: f, dur: kind === 'esc' ? (exit ? 70 : 54) : 58, xa, ya, xb, yb, exit, spin: rr() < 0.5 ? -1 : 1, kind});
	}
	return out;
};
export const slotPos = (cfg: LensCfg, s: Slot, f: number) => ({
	x: s.sx + s.ax * Math.sin(f * s.w1 + s.p1),
	y: s.sy + s.ay * Math.sin(f * s.w2 + s.p2),
	rot: s.rot + 40 * Math.sin(f * s.w3 + s.p3),
});
export const useLensSlots = (cfg: LensCfg) => useMemo(() => ({
	gas: genSlots(cfg.seed + 3, cfg.nGas, cfg, 'gas'),
	water: genSlots(cfg.seed + 5, cfg.nWater, cfg, 'water'),
}), [cfg]);

export const MoleculeLens: React.FC<{cfg: LensCfg; reveal?: number; ring?: string; ringW?: number}> = ({cfg, reveal = 1, ring = INK, ringW = 5}) => {
	const f = useCurrentFrame();
	const {cx, cy, r, size, id} = cfg;
	const {gas, water} = useLensSlots(cfg);
	const esc = useMemo(() => genEvents('esc', cfg), [cfg]);
	const ret = useMemo(() => genEvents('ret', cfg), [cfg]);
	const gN = cfg.gas(f), wN = cfg.water(f);
	const wave = (x: number) => cy + 5 * Math.sin(x * 0.028 + f * 0.07) * (r / 320);
	let top = '';
	for (let i = 0; i <= 48; i++) { const x = cx - r + (i / 48) * r * 2; top += `${i ? 'L' : 'M'}${x.toFixed(1)},${wave(x).toFixed(1)} `; }
	const live = [...esc, ...ret].filter(e => f >= e.t0 && f <= e.t0 + e.dur);
	return (
		<g>
			<defs><clipPath id={`lens-${id}`}><circle cx={cx} cy={cy} r={r * reveal} /></clipPath></defs>
			<g clipPath={`url(#lens-${id})`}>
				<rect x={cx - r} y={cy - r} width={r * 2} height={r * 2} fill="#fcf8ef" />
				<path d={`${top} L${cx + r},${cy + r} L${cx - r},${cy + r} Z`} fill="#cfe3f1" />
				<path d={top} fill="none" stroke="#4f8fba" strokeWidth={4} />
				{water.map((s, i) => { const o = Math.max(0, Math.min(1, wN - i)); if (o <= 0) return null; const p = slotPos(cfg, s, f); return <Co2 key={'w' + i} x={p.x} y={p.y} rot={p.rot} s={size} o={o} />; })}
				{gas.map((s, i) => { const o = Math.max(0, Math.min(1, gN - i)); if (o <= 0) return null; const p = slotPos(cfg, s, f); return <Co2 key={'g' + i} x={p.x} y={p.y} rot={p.rot} s={size} o={o} />; })}
				{live.map((e, i) => {
					const u = (f - e.t0) / e.dur;
					const cxp = e.kind === 'esc' ? e.xa : e.xb, cyp = e.kind === 'esc' ? e.yb : e.ya;
					// control point: escape rises then bends, return runs across then dives
					const px = cxp, py = cyp;
					const at = (s: number) => ({x: (1 - s) * (1 - s) * e.xa + 2 * (1 - s) * s * px + s * s * e.xb, y: (1 - s) * (1 - s) * e.ya + 2 * (1 - s) * s * py + s * s * e.yb});
					const p = at(u);
					const color = e.kind === 'esc' ? ESC : RET;
					const s0 = Math.max(0, u - 0.38);
					let d = '';
					for (let k = 0; k <= 10; k++) { const q = at(s0 + (u - s0) * (k / 10)); d += `${k ? 'L' : 'M'}${q.x.toFixed(1)},${q.y.toFixed(1)} `; }
					const hd = at(Math.min(1, u + 0.05)), tl = at(Math.max(0, u - 0.02));
					const ang = (Math.atan2(hd.y - tl.y, hd.x - tl.x) * 180) / Math.PI;
					const o = Math.min(1, u / 0.12, e.exit ? 1 : (1 - u) / 0.18);
					return (
						<g key={i}>
							<path d={d} fill="none" stroke={color} strokeWidth={5 * size + 2} strokeLinecap="round" opacity={0.6 * o} />
							<path d="M-12,-10 L10,0 L-12,10 Z" fill={color} opacity={o} transform={`translate(${hd.x.toFixed(1)},${hd.y.toFixed(1)}) rotate(${ang.toFixed(1)})`} />
							<Co2 x={p.x} y={p.y} rot={ang + e.spin * u * 160} s={size} o={o} />
						</g>
					);
				})}
			</g>
			<circle cx={cx} cy={cy} r={r * reveal} fill="none" stroke={ring} strokeWidth={ringW} />
		</g>
	);
};

// ---------- rate counters ----------
export const Counters: React.FC<{x: number; y: number; w?: number; escAt: number; retAt: number; esc: number; ret: number; equalAt?: number; unit?: string}> = ({x, y, w = 380, escAt, retAt, esc, ret, equalAt, unit = 'per second'}) => {
	const f = useCurrentFrame();
	const eq = equalAt === undefined ? 0 : prog(f, equalAt, 14);
	const Row: React.FC<{label: string; color: string; value: number; dir: 'up' | 'down'; at: number}> = ({label, color, value, dir, at}) => (
		<Enter at={at} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 0'}}>
			<div>
				<div style={{display: 'flex', alignItems: 'center', gap: 10}}>
					<svg width={34} height={44} viewBox="0 0 34 44"><path d={dir === 'up' ? 'M17,42 L17,6 M5,18 L17,5 L29,18' : 'M17,2 L17,38 M5,26 L17,39 L29,26'} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /></svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: dir === 'up' ? ESC : AMBER_INK, lineHeight: 1}}>{label}</span>
				</div>
				<div style={{fontFamily: FONT_DISPLAY, fontSize: 24, color: INK_SOFT, fontWeight: 600, marginLeft: 44}}>{unit}</div>
			</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 104, color: INK, lineHeight: 1, minWidth: 130, textAlign: 'right'}}>{Math.round(value)}</div>
		</Enter>
	);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{background: '#fffdf8', borderRadius: 22, padding: '18px 26px', boxShadow: '0 18px 40px rgba(60,45,20,0.10)', border: `2px solid ${eq > 0.5 ? TEAL : 'rgba(60,45,20,0.08)'}`, position: 'relative'}}>
				<Row label="escaping" color={ESC} value={esc} dir="up" at={escAt} />
				<div style={{height: 2, background: PAPER_DEEP, margin: '8px 0'}} />
				<Row label="returning" color={AMBER} value={ret} dir="down" at={retAt} />
				<div style={{position: 'absolute', right: -18, top: '50%', transform: `translateY(-50%) scale(${eq})`, background: TEAL, color: 'white', width: 50, height: 50, borderRadius: 999, display: eq > 0 ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38}}>=</div>
			</div>
		</div>
	);
};

// ---------- flowchart ----------
export type FlowT = {d1: number; stat: number; d2: number; d3: number; dyn: number; nei: number};
export const FLOW_DONE: FlowT = {d1: -100, stat: -100, d2: -100, d3: -100, dyn: -100, nei: -100};
const D = {y: 540, hw: 165, hh: 115};
export const DX = {d1: 250, d2: 690, d3: 1130};
export const VERDICT_Y = 785;
export const NEI = {cx: 910, cy: 310, w: 230, h: 80};
export const ROUTES = {
	static: [[250, 385], [250, 540], [250, VERDICT_Y - 40]] as [number, number][],
	dynamic: [[250, 385], [250, 540], [690, 540], [1130, 540], [1130, VERDICT_Y - 40]] as [number, number][],
	neither: [[250, 385], [250, 540], [690, 540], [690, 312], [800, 312]] as [number, number][],
};
const diamondPath = (cx: number, cy: number, seed: number) => {
	const r = rng(seed);
	const j = () => (r() - 0.5) * 7;
	return `M${cx - D.hw + j()},${cy + j()} L${cx + j()},${cy - D.hh + j()} L${cx + D.hw + j()},${cy + j()} L${cx + j()},${cy + D.hh + j()} L${cx - D.hw + 8},${cy - 5} `;
};
const boxPath = (cx: number, cy: number, w: number, h: number, seed: number) => {
	const r = rng(seed); const j = () => (r() - 0.5) * 5;
	const x0 = cx - w / 2, x1 = cx + w / 2, y0 = cy - h / 2, y1 = cy + h / 2;
	return `M${x0 + 14 + j()},${y0 + j()} L${x1 - 14 + j()},${y0 + j()} Q${x1 + 2},${y0 - 2} ${x1 + j()},${y0 + 14} L${x1 + j()},${y1 - 14} Q${x1 + 2},${y1 + 2} ${x1 - 14},${y1 + j()} L${x0 + 14},${y1 + j()} Q${x0 - 2},${y1 + 2} ${x0 + j()},${y1 - 14} L${x0 + j()},${y0 + 14} Q${x0 - 2},${y0 - 2} ${x0 + 16},${y0 + 1} `;
};
const arrowTo = (x0: number, y0: number, x1: number, y1: number) => {
	const a = Math.atan2(y1 - y0, x1 - x0);
	const hx = (da: number) => x1 - Math.cos(a + da) * 18, hy = (da: number) => y1 - Math.sin(a + da) * 18;
	return {line: `M${x0},${y0} L${x1},${y1}`, head: `M${hx(0.45).toFixed(1)},${hy(0.45).toFixed(1)} L${x1},${y1} L${hx(-0.45).toFixed(1)},${hy(-0.45).toFixed(1)}`};
};
const FArrow: React.FC<{p: number[]; at: number; color?: string; via?: [number, number]}> = ({p, at, color = INK, via}) => {
	if (via) {
		return (
			<g>
				<DrawPath d={`M${p[0]},${p[1]} L${via[0]},${via[1]} L${p[2]},${p[3]}`} at={at} dur={18} color={color} width={4} />
				<DrawPath d={arrowTo(via[0], via[1], p[2], p[3]).head} at={at + 14} dur={6} color={color} width={4} />
			</g>
		);
	}
	const a = arrowTo(p[0], p[1], p[2], p[3]);
	return (<g><DrawPath d={a.line} at={at} dur={14} color={color} width={4} /><DrawPath d={a.head} at={at + 10} dur={6} color={color} width={4} /></g>);
};
const Verdict: React.FC<{cx: number; cy: number; w: number; h: number; text: string; color: string; at: number; stamp?: [number, number]; seed: number; dim: number}> = ({cx, cy, w, h, text, color, at, stamp, seed, dim}) => {
	const f = useCurrentFrame();
	const st = stamp && f >= stamp[0] && f < stamp[1] ? prog(f, stamp[0], 12) : 0;
	const pop = st > 0 ? 1 + 0.22 * (1 - st) : 1;
	return (
		<g opacity={dim} transform={`translate(${cx},${cy}) scale(${pop}) rotate(${st > 0 ? -2.5 * st : 0}) translate(${-cx},${-cy})`}>
			<rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={16} fill={color} opacity={0.2 + 0.8 * st} style={{opacity: prog(f, at + 14, 10) * (0.14 + 0.86 * st)}} />
			<DrawPath d={boxPath(cx, cy, w, h, seed)} at={at} dur={22} color={color} width={st > 0 ? 7 : 5} />
			<text x={cx} y={cy + 14} textAnchor="middle" fill={st > 0.5 ? '#ffffff' : color} opacity={prog(f, at + 12, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, letterSpacing: 3}}>{text}</text>
		</g>
	);
};
export const Flowchart: React.FC<{t: FlowT; s?: number; ox?: number; oy?: number; dim23?: number; stamps?: Partial<Record<'static' | 'dynamic' | 'neither', [number, number]>>; pulse?: [number, number]; numbers?: boolean}> = ({t, s = 1, ox = 0, oy = 0, dim23 = 1, stamps = {}, pulse, numbers = true}) => {
	const f = useCurrentFrame();
	const pu = pulse && f >= pulse[0] && f < pulse[1] ? Math.sin(((f - pulse[0]) / (pulse[1] - pulse[0])) * Math.PI) : 0;
	const Dia: React.FC<{cx: number; lines: string[]; at: number; seed: number; n: string; dim?: number; extra?: number}> = ({cx, lines, at, seed, n, dim = 1, extra = 0}) => (
		<g opacity={dim}>
			<path d={diamondPath(cx, D.y, seed)} fill="#fffdf8" opacity={prog(f, at + 14, 12)} stroke="none" />
			<DrawPath d={diamondPath(cx, D.y, seed)} at={at} dur={26} color={INK} width={5} />
			{extra > 0 ? <path d={`M${cx - D.hw - 12},${D.y} L${cx},${D.y - D.hh - 14} L${cx + D.hw + 12},${D.y} L${cx},${D.y + D.hh + 14} Z`} fill="none" stroke={AMBER} strokeWidth={9} opacity={extra} strokeLinejoin="round" /> : null}
			{lines.map((l, i) => <text key={i} x={cx} y={D.y + 10 + (i - (lines.length - 1) / 2) * 40} textAnchor="middle" fill={INK} opacity={prog(f, at + 14, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}}>{l}</text>)}
			{numbers ? <g opacity={prog(f, at, 10)}><circle cx={cx - 148} cy={D.y - 96} r={21} fill={TEAL} /><text x={cx - 148} y={D.y - 87} textAnchor="middle" fill="white" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26}}>{n}</text></g> : null}
		</g>
	);
	const yes = (x: number, y: number, at: number) => <SvgText x={x} y={y} text="yes" size={40} color="#2f8a5b" at={at} />;
	const no = (x: number, y: number, at: number) => <SvgText x={x} y={y} text="no" size={40} color="#c4432f" at={at} />;
	return (
		<g transform={`translate(${ox},${oy}) scale(${s})`}>
			<Dia cx={DX.d1} lines={["Finished and", "can't reverse?"]} at={t.d1} seed={3} n="1" extra={pu} />
			<FArrow p={[250, 655, 250, VERDICT_Y - 42]} at={t.stat} />{yes(268, 725, t.stat + 6)}
			<Verdict cx={250} cy={VERDICT_Y} w={240} h={84} text="STATIC" color={C_STATIC} at={t.stat + 8} stamp={stamps.static} seed={21} dim={1} />
			<FArrow p={[415, 540, 525, 540]} at={t.d2 - 8} />{no(448, 516, t.d2 - 2)}
			<Dia cx={DX.d2} lines={['Closed?']} at={t.d2} seed={8} n="2" dim={dim23} />
			<FArrow p={[855, 540, 965, 540]} at={t.d3 - 8} />{yes(886, 516, t.d3 - 2)}
			<Dia cx={DX.d3} lines={['Staying', 'constant?']} at={t.d3} seed={13} n="3" dim={dim23} />
			<g opacity={dim23}>
				<FArrow p={[1130, 655, 1130, VERDICT_Y - 42]} at={t.dyn} />{yes(1148, 725, t.dyn + 6)}
			</g>
			<Verdict cx={1130} cy={VERDICT_Y} w={270} h={84} text="DYNAMIC" color={C_DYNAMIC} at={t.dyn + 8} stamp={stamps.dynamic} seed={31} dim={1} />
			<FArrow p={[690, 425, 800, 312]} via={[690, 312]} at={t.nei} color={INK} />{no(712, 400, t.nei + 4)}
			<FArrow p={[1130, 425, 1020, 312]} via={[1130, 312]} at={t.nei + 4} color={INK} />{no(1152, 400, t.nei + 8)}
			<Verdict cx={NEI.cx} cy={NEI.cy} w={NEI.w} h={NEI.h} text="NEITHER" color={C_NEITHER} at={t.nei + 6} stamp={stamps.neither} seed={41} dim={1} />
		</g>
	);
};

/** Pen trace along a route (chart coordinates), drawn with the pen head at the current point. */
export const Trace: React.FC<{pts: [number, number][]; times: number[]; s?: number; ox?: number; oy?: number; color?: string; dash?: boolean; out?: number}> = ({pts, times, s = 1, ox = 0, oy = 0, color = AMBER, dash = false, out}) => {
	const f = useCurrentFrame();
	if (f < times[0]) return null;
	let i = 0;
	while (i < pts.length - 2 && f > times[i + 1]) i++;
	const u = Math.max(0, Math.min(1, (f - times[i]) / Math.max(1, times[i + 1] - times[i])));
	const head: [number, number] = f >= times[times.length - 1] ? pts[pts.length - 1] : [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * u, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * u];
	let d = `M${pts[0][0]},${pts[0][1]}`;
	for (let k = 1; k <= i; k++) d += ` L${pts[k][0]},${pts[k][1]}`;
	d += ` L${head[0]},${head[1]}`;
	const fade = out === undefined ? 1 : 1 - prog(f, out, 14);
	const penOn = f < times[times.length - 1] + 10;
	return (
		<g transform={`translate(${ox},${oy}) scale(${s})`} opacity={fade}>
			<path d={d} fill="none" stroke={color} strokeWidth={dash ? 7 : 10} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash ? '4 16' : undefined} opacity={dash ? 0.9 : 0.62} />
			{penOn && !dash ? (
				<g transform={`translate(${head[0]},${head[1]})`} opacity={1 - prog(f, times[times.length - 1] + 2, 8)}>
					<path d="M0,0 L9,-30 L24,-24 L12,2 Z" fill="#3a3733" transform="rotate(8)" />
					<path d="M0,0 L-2,5 L6,3 Z" fill={color} />
					<circle r={7} fill={color} />
				</g>
			) : null}
		</g>
	);
};

/** Answer tick or cross beside a diamond in chart coordinates. */
export const Answer: React.FC<{cx: number; kind: 'tick' | 'cross'; at: number; s?: number; ox?: number; oy?: number}> = ({cx, kind, at, s = 1, ox = 0, oy = 0}) => (
	<g transform={`translate(${ox},${oy}) scale(${s})`}>
		<MarkSvg x={cx + 128} y={D.y + 92} kind={kind} at={at} />
	</g>
);
const MarkSvg = Mark;

// ---------- rate gauge ----------
export const Gauge: React.FC<{cx: number; cy: number; r: number; value: number; color: string; at: number; label?: string}> = ({cx, cy, r, value, color, at, label}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	const ang = Math.PI * (1 - Math.max(0, Math.min(1, value)));
	const nx = cx + Math.cos(ang) * (r - 24), ny = cy - Math.sin(ang) * (r - 24);
	const arc = (a0: number, a1: number, rr: number) => `M${cx + Math.cos(a0) * rr},${cy - Math.sin(a0) * rr} A${rr},${rr} 0 0 1 ${cx + Math.cos(a1) * rr},${cy - Math.sin(a1) * rr}`;
	return (
		<g opacity={o}>
			<path d={arc(Math.PI, 0, r)} fill="none" stroke={PAPER_DEEP} strokeWidth={26} strokeLinecap="round" />
			{value > 0.02 ? <path d={arc(Math.PI, Math.PI * (1 - value), r)} fill="none" stroke={color} strokeWidth={26} strokeLinecap="round" /> : null}
			{Array.from({length: 7}, (_, i) => { const a = Math.PI * (1 - i / 6); return <path key={i} d={`M${cx + Math.cos(a) * (r + 22)},${cy - Math.sin(a) * (r + 22)} L${cx + Math.cos(a) * (r + 34)},${cy - Math.sin(a) * (r + 34)}`} stroke={INK_SOFT} strokeWidth={3} />; })}
			<path d={`M${cx},${cy} L${nx},${ny}`} stroke={INK} strokeWidth={7} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={13} fill={INK} />
			<text x={cx - r - 2} y={cy + 40} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26}}>0</text>
			{label ? <text x={cx} y={cy + 100} textAnchor="middle" fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}}>{label}</text> : null}
		</g>
	);
};

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const easeIn = (f: number, from: number, dur: number) => interpolate(f, [from, from + dur], [0, 1], clamp);
export {AMBER, AMBER_INK, FONT_HAND, FONT_DISPLAY, INK, INK_SOFT, PAPER_DEEP};
