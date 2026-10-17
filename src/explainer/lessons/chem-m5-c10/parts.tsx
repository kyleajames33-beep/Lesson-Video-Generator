// Drawing parts for C10 (Ka and Kb): painted beakers with coded bubbles, particle lenses (acid split and rejoin,
// ammonia taking H+ from water, a crystal surface), the "left out" tray, the log size strip and K name tags.
// Text, fractions and chips are reused from C5 and C6; plates are placed with the P02 PicH helper.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, rng} from '../../kit';
import {Fade, Ring, Sx, TEAL, Tick, tw} from '../chem-m5-c06/parts';
import {PicH, picW} from '../chem-m5-p02/parts';
import {AGC, ANION, CLC, HPLUS, LEFT, MOL, OHC, WATERC, hexMix} from './common';
import type {PDef} from './assets';

export {Fade, Ring, Sx, TEAL, Tick, tw, PicH, picW};
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// ---------- coded bubbles rising from the painted magnesium ribbon ----------
/** Beaker plate placed at (x, y, h): bubbles start on the ribbon (fractions of the visible box) and rise to the surface. */
export const Bubbles: React.FC<{x: number; y: number; h: number; p: PDef; at: number; rate: number; seed?: number; out?: number}> = ({x, y, h, p, at, rate, seed = 2, out}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const w = picW(p, h);
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	const r = rng(seed);
	const N = 40;
	const surf = y + h * 0.37;
	const items = Array.from({length: N}, () => ({u: 0.4 + r() * 0.2, v: 0.5 + r() * 0.42, ph: r(), sz: 3 + r() * 4}));
	const period = 50;
	return (
		<g opacity={o * prog(f, at, 14)}>
			{items.slice(0, Math.round(N * rate)).map((b, i) => {
				const t = ((f - at) / period + b.ph) % 1;
				const y0 = y + h * b.v, yy = y0 - (y0 - surf) * t;
				const xx = x + w * b.u + Math.sin((f + i * 13) * 0.15) * 4;
				return <circle key={i} cx={xx} cy={yy} r={b.sz} fill="#ffffff" fillOpacity={0.55} stroke="#9fb6c4" strokeWidth={1.4} opacity={t > 0.92 ? (1 - t) / 0.08 : 1} />;
			})}
		</g>
	);
};

// ---------- particle lens frame ----------
export const LensFrame: React.FC<{cx: number; cy: number; r: number; children: React.ReactNode; at: number; out?: number; title?: string; titleAt?: number}> = ({cx, cy, r, children, at, out, title, titleAt}) => {
	const f = useCurrentFrame();
	const id = `lens-${Math.round(cx)}-${Math.round(cy)}`;
	return (
		<Fade at={at} out={out}>
			<g transform={`translate(${cx},${cy}) scale(${0.9 + 0.1 * prog(f, at, 16)}) translate(${-cx},${-cy})`}>
				<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={INK} strokeWidth={5} />
				<clipPath id={id}><circle cx={cx} cy={cy} r={r - 4} /></clipPath>
				<g clipPath={`url(#${id})`}>{children}</g>
				<path d={`M${cx - r * 0.74},${cy - r * 0.46} A${r * 0.88},${r * 0.88} 0 0 1 ${cx - r * 0.1},${cy - r * 0.86}`} fill="none" stroke="#ffffff" strokeOpacity={0.7} strokeWidth={8} strokeLinecap="round" />
			</g>
			{title ? <Sx x={cx} y={cy + r + 42} text={title} size={32} color={INK_SOFT} anchor="middle" hand at={titleAt ?? at} /> : null}
		</Fade>
	);
};
const slots = (cx: number, cy: number, r: number, n: number, seed: number) => {
	const rr = rng(seed);
	return Array.from({length: n}, (_, i) => {
		const t = (i + 0.5) / n, a = i * 2.39996 + rr() * 0.4;
		const d = Math.sqrt(t) * r * 0.74;
		return {x: cx + d * Math.cos(a), y: cy + d * Math.sin(a), ph: rr() * 6.28, ang: rr() * 6.28};
	});
};
const drift = (f: number, ph: number, amp = 6) => [Math.sin(f * 0.031 + ph) * amp, Math.cos(f * 0.027 + ph * 1.3) * amp];

/** Weak or strong acid lens. Each slot holds an HA molecule (navy, with its small amber H attached); split(f, i) 0..1
 *  pulls the H+ away (amber) and turns the rest into the anion (violet). */
export const AcidLens: React.FC<{cx: number; cy: number; r: number; n: number; split: (f: number, i: number) => number; at: number; out?: number; title?: string; titleAt?: number; seed?: number; mol?: string; anion?: string}> = ({cx, cy, r, n, split, at, out, title, titleAt, seed = 3, mol = MOL, anion = ANION}) => {
	const f = useCurrentFrame();
	const S = slots(cx, cy, r, n, seed);
	return (
		<LensFrame cx={cx} cy={cy} r={r} at={at} out={out} title={title} titleAt={titleAt}>
			{S.map((s, i) => {
				const k = clamp01(split(f, i));
				const [dx, dy] = drift(f, s.ph);
				const bx = s.x + dx, by = s.y + dy;
				const d = 15 + 40 * k;
				const hx = bx + d * Math.cos(s.ang), hy = by + d * Math.sin(s.ang);
				return (
					<g key={i}>
						<circle cx={bx} cy={by} r={14} fill={hexMix(mol, anion, k)} stroke={INK} strokeWidth={2.4} />
						<circle cx={hx} cy={hy} r={8.5} fill={HPLUS} stroke={INK} strokeWidth={2.2} />
						{k > 0.6 ? <><text x={bx} y={by + 5} textAnchor="middle" fontSize={15} fontWeight={800} fill="#fff" opacity={(k - 0.6) / 0.4}>−</text><text x={hx} y={hy + 4} textAnchor="middle" fontSize={12} fontWeight={800} fill={INK} opacity={(k - 0.6) / 0.4}>+</text></> : null}
					</g>
				);
			})}
		</LensFrame>
	);
};
/** Split amount for a slot that splits at `a` (over `d` frames) and rejoins at `b`. */
export const splitWin = (f: number, a: number, b: number, d = 16) => prog(f, a, d) * (1 - prog(f, b, d));
/** A dynamic weak acid: one or two slots are split at any moment, the split slot moving round (split, then rejoin). */
export const dynamicSplit = (from: number, period: number, slotsOn: number[]) => (f: number, i: number) => {
	if (f < from) return 0;
	let s = 0;
	const k = Math.floor((f - from) / period);
	for (let j = Math.max(0, k - 1); j <= k; j++) {
		const slot = slotsOn[j % slotsOn.length];
		if (slot === i) s = Math.max(s, splitWin(f, from + j * period, from + j * period + period * 1.5));
	}
	return s;
};

/** Ammonia lens: NH3 (navy) and water (pale blue, with its amber H). take(f, i) 0..1 moves water i's H onto NH3 i:
 *  the water becomes OH- (green), the NH3 becomes NH4+ (violet). */
export const AmmoniaLens: React.FC<{cx: number; cy: number; r: number; n: number; take: (f: number, i: number) => number; at: number; out?: number; title?: string; titleAt?: number}> = ({cx, cy, r, n, take, at, out, title, titleAt}) => {
	const f = useCurrentFrame();
	const S = slots(cx, cy, r, n, 7);
	return (
		<LensFrame cx={cx} cy={cy} r={r} at={at} out={out} title={title} titleAt={titleAt}>
			{S.map((s, i) => {
				const k = clamp01(take(f, i));
				const [dx, dy] = drift(f, s.ph, 4);
				const nx = s.x + dx - 18 * Math.cos(s.ang), ny = s.y + dy - 18 * Math.sin(s.ang);
				const wx = s.x + dx + 18 * Math.cos(s.ang), wy = s.y + dy + 18 * Math.sin(s.ang);
				const hx0 = wx + 13 * Math.cos(s.ang), hy0 = wy + 13 * Math.sin(s.ang);
				const hx1 = nx - 13 * Math.cos(s.ang), hy1 = ny - 13 * Math.sin(s.ang);
				const t = k;
				const hx = hx0 + (hx1 - hx0) * t, hy = hy0 + (hy1 - hy0) * t + Math.sin(t * Math.PI) * -18;
				const apart = 10 * k;
				return (
					<g key={i}>
						<circle cx={nx - apart * Math.cos(s.ang)} cy={ny - apart * Math.sin(s.ang)} r={13} fill={hexMix(MOL, ANION, k)} stroke={INK} strokeWidth={2.4} />
						<circle cx={wx + apart * Math.cos(s.ang)} cy={wy + apart * Math.sin(s.ang)} r={12} fill={hexMix(WATERC, OHC, k)} stroke={INK} strokeWidth={2.2} />
						<circle cx={hx - (k > 0.98 ? apart * Math.cos(s.ang) : 0)} cy={hy - (k > 0.98 ? apart * Math.sin(s.ang) : 0)} r={7} fill={HPLUS} stroke={INK} strokeWidth={2} />
					</g>
				);
			})}
		</LensFrame>
	);
};

/** Crystal surface lens (AgCl): a lattice of Ag+ and Cl- at the bottom; ion pairs leave and rejoin. */
export const CrystalLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; cycleFrom: number; title?: string}> = ({cx, cy, r, at, out, cycleFrom, title}) => {
	const f = useCurrentFrame();
	const top = cy + r * 0.25, s = 30;
	const cols = Math.ceil((2 * r) / s) + 1;
	const lattice: React.ReactNode[] = [];
	for (let row = 0; row < 4; row++) for (let c = 0; c < cols; c++) {
		const x = cx - r + c * s + (row % 2 ? s / 2 : 0), y = top + row * s;
		lattice.push(<circle key={`l${row}-${c}`} cx={x} cy={y} r={11} fill={(row + c) % 2 ? CLC : AGC} stroke={INK} strokeWidth={2} />);
	}
	// two dissolved pairs drift; one pair leaves the surface and one rejoins, alternating
	const per = 110;
	const ph = f < cycleFrom ? 0 : ((f - cycleFrom) % per) / per;
	const leave = Math.sin(Math.min(1, ph * 2) * Math.PI / 2);
	const free = [[-0.45, -0.45], [0.35, -0.55], [-0.1, -0.2], [0.5, -0.15]].map(([u, v], i) => {
		const [dx, dy] = drift(f, i * 1.7, 10);
		return {x: cx + u * r + dx, y: cy + v * r + dy, c: i % 2 ? CLC : AGC};
	});
	const gx = cx - 2 * s, gy = top - s;
	return (
		<LensFrame cx={cx} cy={cy} r={r} at={at} out={out} title={title}>
			{lattice}
			{free.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r={11} fill={d.c} stroke={INK} strokeWidth={2} />)}
			{/* a pair leaving the surface (up) */}
			<circle cx={gx} cy={gy + s - leave * r * 0.5} r={11} fill={AGC} stroke={INK} strokeWidth={2} />
			<circle cx={gx + s} cy={gy + s - leave * r * 0.42} r={11} fill={CLC} stroke={INK} strokeWidth={2} />
			{/* a pair landing back on it */}
			<circle cx={cx + 2 * s} cy={gy - (1 - leave) * r * 0.45} r={11} fill={AGC} stroke={INK} strokeWidth={2} />
			<circle cx={cx + 3 * s} cy={gy - (1 - leave) * r * 0.38} r={11} fill={CLC} stroke={INK} strokeWidth={2} />
		</LensFrame>
	);
};

// ---------- two-way arrows (dynamic balance) ----------
export const TwoWay: React.FC<{x: number; y: number; w: number; at: number; fwd?: string; rev?: string; color?: string}> = ({x, y, w, at, fwd, rev, color = INK}) => {
	const f = useCurrentFrame();
	const pulse = (k: number) => 4 + 3 * Math.max(0, Math.sin((f - at) * 0.12 + k * Math.PI));
	return (
		<Fade at={at}>
			<path d={`M${x},${y - 9} L${x + w},${y - 9} M${x + w - 14},${y - 20} L${x + w},${y - 9}`} fill="none" stroke={color} strokeWidth={pulse(0)} strokeLinecap="round" />
			<path d={`M${x + w},${y + 9} L${x},${y + 9} M${x + 14},${y + 20} L${x},${y + 9}`} fill="none" stroke={color} strokeWidth={pulse(1)} strokeLinecap="round" />
			{fwd ? <Sx x={x + w / 2} y={y - 24} text={fwd} size={28} color={INK_SOFT} anchor="middle" hand at={at} /> : null}
			{rev ? <Sx x={x + w / 2} y={y + 48} text={rev} size={28} color={INK_SOFT} anchor="middle" hand at={at} /> : null}
		</Fade>
	);
};

// ---------- the "left out" tray ----------
export type TrayItem = {t: string; at: number; from: [number, number]; color?: string};
export const TRAY_H = 110;
export const Tray: React.FC<{x: number; y: number; w: number; at: number; items: TrayItem[]; label?: string; size?: number}> = ({x, y, w, at, items, label = 'left out of K', size = 40}) => {
	const f = useCurrentFrame();
	const slotW = w / Math.max(1, items.length);
	return (
		<g>
			<Fade at={at}>
				<path d={`M${x},${y} L${x + 16},${y + TRAY_H} L${x + w - 16},${y + TRAY_H} L${x + w},${y}`} fill="#efe9de" stroke={LEFT} strokeWidth={3.5} strokeDasharray="10 7" strokeLinejoin="round" />
				<Sx x={x + 16} y={y + TRAY_H + 38} text={label} size={30} color={LEFT} hand at={at} />
			</Fade>
			{items.map((it, i) => {
				const e = prog(f, it.at, 30);
				if (f < it.at) return null;
				const tx = x + slotW * (i + 0.5), ty = y + TRAY_H * 0.62;
				const lift = Math.sin(Math.min(1, e) * Math.PI) * -60;
				const px = it.from[0] + (tx - it.from[0]) * e, py = it.from[1] + (ty - it.from[1]) * e + lift;
				return <Sx key={i} x={px} y={py + size * 0.32} text={it.t} size={size} color={e > 0.95 ? LEFT : (it.color ?? INK)} anchor="middle" at={-1000} />;
			})}
		</g>
	);
};

// ---------- log size strip ----------
export type Ruler = {x0: number; x1: number; y: number; lo: number; hi: number};
export const rx = (R: Ruler, v: number) => R.x0 + ((Math.log10(v) - R.lo) / (R.hi - R.lo)) * (R.x1 - R.x0);
export const LogRuler: React.FC<{R: Ruler; at: number; out?: number; every?: number; bands?: boolean; size?: number; tagAt?: number}> = ({R, at, out, every = 2, bands = true, size = 28, tagAt}) => {
	const f = useCurrentFrame();
	const es = Array.from({length: R.hi - R.lo + 1}, (_, i) => R.lo + i);
	return (
		<Fade at={at} out={out}>
			{bands ? (
				<g opacity={0.5 * prog(f, at + 10, 16)}>
					<rect x={R.x0} y={R.y - 16} width={rx(R, 1e-3) - R.x0} height={32} fill="#c9d8ea" />
					<rect x={rx(R, 1e-3)} y={R.y - 16} width={R.x1 - rx(R, 1e-3)} height={32} fill="#f6d77a" />
					<Sx x={(R.x0 + rx(R, 1e-3)) / 2} y={R.y + 92} text="below 0.001: mostly reactants" size={26} color={INK_SOFT} anchor="middle" hand at={at + 10} />
				</g>
			) : null}
			<DrawPath d={`M${R.x0 - 20},${R.y} L${R.x1 + 20},${R.y}`} at={at} dur={26} width={5} />
			{es.map((e, i) => {
				const x = rx(R, 10 ** e);
				const p = prog(f, at + 6 + i * 2, 8);
				return (
					<g key={e} opacity={p}>
						<path d={`M${x},${R.y - 12} L${x},${R.y + 12}`} stroke={INK} strokeWidth={4} strokeLinecap="round" />
						{(e - R.lo) % every === 0 ? <Sx x={x} y={R.y + 50} text={e === 0 ? '1' : `10^{${e}}`} size={size} color={INK_SOFT} anchor="middle" weight={600} at={-100} /> : null}
					</g>
				);
			})}
			{tagAt !== undefined ? <Sx x={R.x1} y={R.y - 40} text="each tick is ten times the last" size={30} color={INK_SOFT} anchor="end" hand at={tagAt} /> : null}
		</Fade>
	);
};
/** Marker pin on the ruler with a label above (or below). */
export const RMark: React.FC<{R: Ruler; v: number; at: number; label: string; color?: string; up?: number; out?: number; size?: number; anchor?: 'start' | 'middle' | 'end'}> = ({R, v, at, label, color = MOL, up = 70, out, size = 32, anchor = 'middle'}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const o = p * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.01) return null;
	const x = rx(R, v), dy = -(1 - p) * 50;
	return (
		<g opacity={o} transform={`translate(0,${dy})`}>
			<path d={`M${x},${R.y - 6} L${x - 15},${R.y - 34} Q${x},${R.y - 48} ${x + 15},${R.y - 34} Z`} fill={color} stroke={INK} strokeWidth={3} />
			<path d={`M${x},${R.y - 48} L${x},${R.y - up + 14}`} stroke={color} strokeWidth={2.5} strokeDasharray="5 5" />
			<Sx x={x} y={R.y - up} text={label} size={size} color={color} anchor={anchor} weight={700} at={at} />
		</g>
	);
};

// ---------- K with a name tag ----------
/** "K" with a subscript name (a, b, sp), drawn large. Returns its width via kNameW. */
export const kNameW = (name: string, size: number) => size * 0.62 + tw(name, size * 0.6) + 4;
export const KName: React.FC<{x: number; y: number; name: string; size: number; at: number; color?: string; nameAt?: number; anchor?: 'start' | 'end'}> = ({x, y, name, size, at, color = TEAL, nameAt, anchor = 'start'}) => {
	const x0 = anchor === 'end' ? x - kNameW(name, size) : x;
	return (
		<g>
			<Sx x={x0} y={y} text="K" size={size} color={color} at={at} />
			<Sx x={x0 + size * 0.64} y={y + size * 0.22} text={name} size={size * 0.6} color={color} at={nameAt ?? at} />
		</g>
	);
};
/** A teal paper name tag hanging from a point, swinging gently. */
export const NameTag: React.FC<{x: number; y: number; text: string; at: number}> = ({x, y, text, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	if (p <= 0.01) return null;
	const sw = Math.sin((f - at) * 0.09) * 8 * Math.max(0, 1 - (f - at) / 120) + (1 - p) * 30;
	const w = tw(text, 34, true) + 44;
	return (
		<g opacity={p} transform={`rotate(${sw},${x},${y})`}>
			<path d={`M${x},${y} L${x},${y + 34}`} stroke={INK_SOFT} strokeWidth={2.5} />
			<path d={`M${x - w / 2},${y + 34} L${x + w / 2},${y + 34} L${x + w / 2},${y + 88} L${x - w / 2},${y + 88} Z`} fill="#e5f2ec" stroke={TEAL} strokeWidth={3} />
			<circle cx={x} cy={y + 44} r={4} fill={TEAL} />
			<Sx x={x} y={y + 78} text={text} size={34} color={TEAL} anchor="middle" hand at={at} />
		</g>
	);
};
/** Small padded label with an optional pen ring. */
export const Note: React.FC<{x: number; y: number; text: string; at: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; out?: number}> = ({x, y, text, at, size = 34, color = INK, anchor = 'start', out}) => <Sx x={x} y={y} text={text} size={size} color={color} anchor={anchor} hand at={at} out={out} />;
export {AMBER, AMBER_INK, INK, INK_SOFT};
