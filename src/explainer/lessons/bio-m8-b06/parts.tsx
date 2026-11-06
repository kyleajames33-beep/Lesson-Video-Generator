// Drawing parts for M8 B06 (what causes a non-infectious disease?). Reuses the Module 8 explainer kit read-only through
// chem-m8-c08's parts (plates, text, chips, crossed chips, framed answer, question text, countdown, key notes) and
// chem-m8-p03's write-on text and glow. New here, lesson-local:
// - Card and Pill; GroupTab: the four groups of cause, one lit (a second chip can light as the "trigger");
// - Chain: the cause chain strip (cause → what changes in the cells → effect on the body), refilled per example, with an
//   optional thumbnail per slot; BigChain: the same chain lifted and enlarged (scene 6);
// - IonFlow: labelled dots that pass out through the membrane channels (chloride green, water blue), or stay inside;
// - DustFlow: fine grey particles drifting down the trachea and settling in both lungs;
// - O2Dots: small "O₂" dots on the red cells, some fading; DivRing: dots multiplying outward from one point;
// - Punnett: a letters-only 2 x 2 square (HSC style); LDLFlow: amber dots entering the liver, then gathering and drifting
//   to the coronary arteries; Bars: two live bars with labelled levels; Callout: a leader line with a label.
// Nothing here draws people, hands or faces.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog, rng} from '../../kit';
import {INK, INK_SOFT, NAVY, PicF, Sx, Thumb, clamp01, lerp, mw, natPt, smooth, vis} from '../chem-m8-c08/parts';
import {Glow, Wr} from '../chem-m8-p03/parts';
import type {PDef} from './common';

export * from '../chem-m8-c08/parts';
export {Glow, Wr};

export const CARDF = '#fffdf8', EDGE = 'rgba(60,45,20,0.24)';
export const GEN = '#6a4fb0', ENV = '#2f7f86', NUT = '#b5502b', CAN = '#a0620c', PATH = '#3d6fb0', GREYC = '#5f584c', OKG = '#2f8a5b', CROSSR = '#c4432f';
export const GROUPS: [string, string][] = [['genetic', GEN], ['environmental', ENV], ['nutritional', NUT], ['cancer', CAN]];

export const Card: React.FC<{x: number; y: number; w: number; h: number; title?: string; at?: number; out?: number; color?: string; o?: number; titleSize?: number; fill?: string; titleColor?: string}> = ({x, y, w, h, title, at = -1000, out, color, o = 1, titleSize = 40, fill = CARDF, titleColor}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={22} fill={fill} stroke={color ?? EDGE} strokeWidth={color ? 4 : 3} />
			{title ? <Sx x={x + 28} y={y + titleSize + 14} text={title} size={titleSize} color={titleColor ?? color ?? NAVY} hand weight={700} at={-1000} /> : null}
		</g>
	);
};
export const pillW = (text: string, size = 30) => mw(text, size, false, 800) + size * 1.2;
export const Pill: React.FC<{x: number; y: number; text: string; at: number; out?: number; color?: string; size?: number; anchor?: 'start' | 'middle'; fill?: string; o?: number; solid?: boolean}> = ({x, y, text, at, out, color = NAVY, size = 30, anchor = 'start', fill = CARDF, o = 1, solid = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const w = pillW(text, size), h = size * 1.6;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	return (
		<g opacity={v}>
			<rect x={x0} y={y} width={w} height={h} rx={h / 2} fill={solid ? color : fill} stroke={color} strokeWidth={3.5} />
			<Sx x={x0 + w / 2} y={y + h / 2 + size * 0.35} text={text} size={size} color={solid ? '#ffffff' : color} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

// ---------- the group tab ----------
/** Four chips at the upper right; `lit` lights one group (solid) from `at`; `second` lights another as an outline with a
 *  small label under it (the trigger). */
export const GroupTab: React.FC<{lit?: number; litAt?: number; second?: {i: number; at: number; label: string}; at?: number; x?: number; y?: number; size?: number; all?: number; o?: number}> = ({lit, litAt = -1000, second, at = -1000, x = 1010, y = 104, size = 26, all, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	let cx = x;
	return (
		<g opacity={v}>
			{GROUPS.map(([t, c], i) => {
				const w = pillW(t, size), h = size * 1.6;
				const x0 = cx; cx += w + 12;
				const on = (lit === i ? prog(f, litAt, 12) : 0) || (all !== undefined ? prog(f, all + i * 6, 12) : 0);
				const sec = second && second.i === i ? prog(f, second.at, 12) : 0;
				return (
					<g key={t}>
						<rect x={x0} y={y} width={w} height={h} rx={h / 2} fill={on > 0.5 ? c : CARDF} stroke={c} strokeWidth={sec > 0.01 ? 5 : 3} strokeDasharray={sec > 0.01 && on < 0.5 ? '8 5' : undefined} />
						<Sx x={x0 + w / 2} y={y + h / 2 + size * 0.35} text={t} size={size} color={on > 0.5 ? '#ffffff' : c} anchor="middle" weight={800} at={-1000} />
						{sec > 0.01 && second ? <Sx x={x0 + w / 2} y={y + h + size + 6} text={second.label} size={size + 2} color={c} anchor="middle" hand weight={700} at={-1000} opacity={sec} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the cause chain strip ----------
export type Slot = {lines: string[]; at: number; thumb?: PDef; pulse?: number};
export const CHAIN_HEADS = ['cause', 'what changes in the cells', 'effect on the body'];
export const CH = {x: 96, y: 878, w: 1728, h: 170, gap: 58};
/** Three linked slots along the bottom. Headings always show; each slot's text writes at its cue. `o` dims the whole
 *  strip; `headPulse` pulses all three headings. */
export const Chain: React.FC<{slots?: (Slot | null)[]; at?: number; o?: number; headPulse?: number; y?: number; size?: number}> = ({slots = [null, null, null], at = -1000, o = 1, headPulse, y = CH.y, size = 31}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 16) * o;
	if (v <= 0.01) return null;
	const sw = (CH.w - 2 * CH.gap) / 3;
	const hp = headPulse === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - headPulse) / 40) * Math.PI));
	return (
		<g opacity={v}>
			{[0, 1, 2].map(i => {
				const sx = CH.x + i * (sw + CH.gap);
				const s = slots[i];
				const fill = s ? prog(f, s.at, 12) : 0;
				const pl = s?.pulse === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - (s.pulse as number)) / 40) * Math.PI));
				const tw = s?.thumb ? 140 : 0;
				return (
					<g key={i}>
						{pl > 0.01 ? <rect x={sx - 8} y={y - 8} width={sw + 16} height={CH.h + 16} rx={24} fill="#f6d77a" opacity={0.55 * pl} /> : null}
						<rect x={sx} y={y} width={sw} height={CH.h} rx={18} fill={fill > 0.5 ? '#fff6e2' : CARDF} stroke={fill > 0.01 ? NAVY : EDGE} strokeWidth={fill > 0.01 ? 3.5 : 3} strokeDasharray={fill > 0.01 ? undefined : '10 8'} />
						<Sx x={sx + 22} y={y + 40} text={CHAIN_HEADS[i]} size={30 + 4 * hp} color={NAVY} hand weight={700} at={-1000} />
						{s ? s.lines.map((ln, k) => {
							const fs = Math.min(size, ((sw - 44 - tw) / Math.max(1, mw(ln, size, false, 700))) * size);
							return <Wr key={k} x={sx + 22} y={y + 86 + k * 40} text={ln} at={s.at + k * 10} size={fs} color={INK} weight={700} />;
						}) : null}
						{s?.thumb ? <Thumb p={s.thumb} x={sx + sw - tw - 6} y={y + 14} h={CH.h - 28} at={s.at} /> : null}
						{i < 2 ? <path d={`M${sx + sw + 8},${y + CH.h / 2} L${sx + sw + CH.gap - 10},${y + CH.h / 2} M${sx + sw + CH.gap - 24},${y + CH.h / 2 - 12} L${sx + sw + CH.gap - 10},${y + CH.h / 2} L${sx + sw + CH.gap - 24},${y + CH.h / 2 + 12}`} stroke={NAVY} strokeWidth={5} fill="none" strokeLinecap="round" /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- moving dots ----------
/** Dots that rise from inside a cell, through channel points, onto the surface (`out`), or jiggle inside (`inside`). */
export const IonFlow: React.FC<{chans: [number, number][]; at: number; until?: number; color: string; label: string; inside?: boolean; depth?: number; rise?: number; n?: number; seed?: number; o?: number}> = ({chans, at, until = 1e9, color, label, inside = false, depth = 160, rise = 120, n = 10, seed = 3, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, until, 12) * o;
	if (v <= 0.01) return null;
	const r = rng(seed);
	const ds = Array.from({length: n}, () => ({c: Math.floor(r() * chans.length), ph: r(), dx: (r() - 0.5) * 30}));
	return (
		<g opacity={v}>
			{ds.map((d, i) => {
				const [cx, cy] = chans[d.c];
				let x: number, y: number, op = 1;
				if (inside) {
					x = cx + d.dx + Math.sin((f + i * 17) * 0.08) * 8;
					y = cy + 40 + d.ph * depth + Math.cos((f + i * 11) * 0.07) * 8;
				} else {
					const t = (((f - at) / 70) + d.ph) % 1;
					x = cx + d.dx * (1 - t) * 0.6;
					y = cy + depth * (1 - t) * 0.8 - rise * t;
					op = Math.sin(t * Math.PI);
				}
				return (
					<g key={i} opacity={op}>
						<circle cx={x} cy={y} r={13} fill={color} stroke="#ffffff" strokeWidth={2} />
						<text x={x} y={y + 5} textAnchor="middle" style={{fontFamily: '"Inter Tight"', fontWeight: 800, fontSize: 13}} fill="#ffffff">{label}</text>
					</g>
				);
			})}
		</g>
	);
};
/** Fine grey particles: down the trachea from (tx, ty0) to (tx, ty1), then out to their resting points `pts`. */
export const DustFlow: React.FC<{tx: number; ty0: number; ty1: number; pts: [number, number][]; at: number; every?: number; o?: number}> = ({tx, ty0, ty1, pts, at, every = 3, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	return (
		<g opacity={o}>
			{pts.map(([px, py], i) => {
				const t = clamp01((f - at - i * every) / 54);
				if (t <= 0) return null;
				const a = clamp01(t * 2), b = clamp01(t * 2 - 1);
				const x = b > 0 ? lerp(tx, px, smooth(b)) : tx + Math.sin(i) * 6;
				const y = b > 0 ? lerp(ty1, py, smooth(b)) : lerp(ty0, ty1, a);
				return <circle key={i} cx={x} cy={y} r={4 + (i % 3)} fill="#8f8b84" stroke="#5f5a52" strokeWidth={1} />;
			})}
		</g>
	);
};
export const dustPts = (seed: number, n: number, boxes: [number, number, number, number][]): [number, number][] => {
	const r = rng(seed);
	return Array.from({length: n}, (_, i) => { const b = boxes[i % boxes.length]; return [b[0] + r() * (b[2] - b[0]), b[1] + r() * (b[3] - b[1])] as [number, number]; });
};
/** "O₂" dots on given points; dots with index in `fadeIdx` fade from `fadeAt`. */
export const O2Dots: React.FC<{pts: [number, number][]; at: number; fadeIdx?: number[]; fadeAt?: number; r?: number}> = ({pts, at, fadeIdx = [], fadeAt = 1e9, r = 20}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{pts.map(([x, y], i) => {
				const v = prog(f, at + i * 3, 10) * (fadeIdx.includes(i) ? 1 - prog(f, fadeAt + i * 2, 14) : 1);
				if (v <= 0.01) return null;
				return (
					<g key={i} opacity={v}>
						<circle cx={x} cy={y} r={r} fill="#ffffff" stroke="#c4432f" strokeWidth={3} />
						<text x={x} y={y + 6} textAnchor="middle" style={{fontFamily: '"Inter Tight"', fontWeight: 800, fontSize: 17}} fill="#a3271a">O₂</text>
					</g>
				);
			})}
		</g>
	);
};
/** Dots multiplying outward from (x, y): generation k appears at at + k * every. */
export const DivRing: React.FC<{x: number; y: number; at: number; out?: number; every?: number; gens?: number; color?: string}> = ({x, y, at, out, every = 14, gens = 4, color = '#3a2a22'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const dots: React.ReactNode[] = [];
	for (let k = 0; k < gens; k++) {
		const p = prog(f, at + k * every, 10);
		if (p <= 0.01) continue;
		const n = Math.pow(2, k);
		for (let j = 0; j < n; j++) {
			const a = (j / n) * Math.PI * 2 + k * 0.4;
			const rr = k * 13 * p;
			dots.push(<circle key={k + '-' + j} cx={x + Math.cos(a) * rr * 1.5} cy={y + Math.sin(a) * rr * 0.8} r={6.5} fill={color} stroke="#ffffff" strokeWidth={1.5} opacity={p} />);
		}
	}
	return <g opacity={v}>{dots}</g>;
};
/** A leader line from a plate point to a label (x, y is the label baseline start). */
export const Callout: React.FC<{from: [number, number]; x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; text2?: string; anchor?: 'start' | 'end'}> = ({from, x, y, text, at, out, size = 36, color = INK, text2, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const ex = anchor === 'start' ? x - 12 : x + 12;
	return (
		<g opacity={v}>
			<circle cx={from[0]} cy={from[1]} r={8} fill="none" stroke={color} strokeWidth={4} />
			<DrawPath d={`M${from[0]},${from[1]} L${ex},${y - size * 0.35}`} at={at} dur={12} color={color} width={3.5} />
			<Sx x={x} y={y} text={text} size={size} color={color} anchor={anchor} weight={800} at={at + 6} />
			{text2 ? <Sx x={x} y={y + size * 1.2} text={text2} size={size} color={color} anchor={anchor} weight={800} at={at + 12} /> : null}
		</g>
	);
};
/** A letters-only Punnett square (HSC style). */
export const Punnett: React.FC<{x: number; y: number; cell?: number; at: number; hi?: number}> = ({x, y, cell = 104, at, hi}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14);
	if (v <= 0.01) return null;
	const g = [['FF', 'Ff'], ['Ff', 'ff']];
	const h = hi === undefined ? 0 : prog(f, hi, 12);
	return (
		<g opacity={v}>
			<Sx x={x + cell * 0.5} y={y - 22} text="F" size={38} color={NAVY} anchor="middle" weight={800} at={-1000} />
			<Sx x={x + cell * 1.5} y={y - 22} text="f" size={38} color={NAVY} anchor="middle" weight={800} at={-1000} />
			<Sx x={x - 30} y={y + cell * 0.5 + 13} text="F" size={38} color={NAVY} anchor="middle" weight={800} at={-1000} />
			<Sx x={x - 30} y={y + cell * 1.5 + 13} text="f" size={38} color={NAVY} anchor="middle" weight={800} at={-1000} />
			{g.map((row, r) => row.map((t, c) => (
				<g key={r + '-' + c}>
					<rect x={x + c * cell} y={y + r * cell} width={cell} height={cell} fill={CARDF} stroke={INK} strokeWidth={3} />
					<Sx x={x + c * cell + cell / 2} y={y + r * cell + cell / 2 + 14} text={t} size={40} color={INK} anchor="middle" weight={800} at={at + (r * 2 + c) * 6} />
				</g>
			)))}
			{h > 0.01 ? <rect x={x + cell + 4} y={y + cell + 4} width={cell - 8} height={cell - 8} fill="none" stroke="#d9861c" strokeWidth={7} opacity={h} rx={6} /> : null}
		</g>
	);
};
/** Two live bars: each falls from 100% to `low` between its from/to frames; labels "normal" to "low". */
export const Bars: React.FC<{x: number; y: number; w: number; rows: {label: string; from: number; to: number; low: number; color: string}[]}> = ({x, y, w, rows}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{rows.map((r, i) => {
				const t = smooth(clamp01((f - r.from) / Math.max(1, r.to - r.from)));
				const val = lerp(1, r.low, t);
				const yy = y + i * 120;
				return (
					<g key={i}>
						<Sx x={x} y={yy} text={r.label} size={34} color={INK} weight={800} at={-1000} />
						<rect x={x} y={yy + 18} width={w} height={44} rx={10} fill="#efe9dd" stroke={EDGE} strokeWidth={2} />
						<rect x={x} y={yy + 18} width={w * val} height={44} rx={10} fill={r.color} opacity={0.85} />
						<line x1={x + w} x2={x + w} y1={yy + 10} y2={yy + 70} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="5 5" />
						<Sx x={x + w * val - 12} y={yy + 52} text={t > 0.5 ? 'low' : 'normal'} size={28} color="#ffffff" anchor="end" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
/** Amber LDL dots: flowing into the liver (until `stop`), then gathering beside it; from `drift` they move to `targets`. */
export const LDLFlow: React.FC<{src: [number, number]; liver: [number, number]; gather: [number, number]; targets: [number, number][]; at: number; stop: number; drift: number; n?: number}> = ({src, liver, gather, targets, at, stop, drift, n = 14}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const r = rng(7);
	const ds = Array.from({length: n}, () => ({ph: r(), gx: (r() - 0.5) * 120, gy: (r() - 0.5) * 120}));
	return (
		<g>
			{ds.map((d, i) => {
				let x: number, y: number, op = 1;
				const g: [number, number] = [gather[0] + d.gx, gather[1] + d.gy];
				if (f < stop) {
					const t = (((f - at) / 60) + d.ph) % 1;
					x = lerp(src[0], liver[0], t); y = lerp(src[1], liver[1], t) + Math.sin(t * 6 + i) * 10;
					op = Math.min(1, (1 - t) * 3);
				} else if (f < drift) {
					const t = smooth(clamp01((f - stop - i * 2) / 40));
					x = lerp(src[0] + (liver[0] - src[0]) * d.ph * 0.4, g[0], t); y = lerp(src[1], g[1], t);
				} else {
					const tg = targets[i % targets.length];
					const t = smooth(clamp01((f - drift - i * 3) / 50));
					x = lerp(g[0], tg[0] + (d.gx * 0.15), t); y = lerp(g[1], tg[1] + (d.gy * 0.15), t);
				}
				return <circle key={i} cx={x} cy={y} r={10} fill="#e0a12a" stroke="#8a5a0c" strokeWidth={2} opacity={op} />;
			})}
		</g>
	);
};
export const plPt = (p: PDef, x: number, y: number, h: number, n: [number, number]) => natPt(p, x, y, h, n[0], n[1]);
export const plW = (p: PDef, h: number) => (p.box[2] / p.box[3]) * h;
export {PicF, Sx, INK, INK_SOFT, NAVY};
