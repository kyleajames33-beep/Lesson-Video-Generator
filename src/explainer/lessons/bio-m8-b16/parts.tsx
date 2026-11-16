// B8-16 coded parts (lesson-local). Light rays and lens profiles are abstract optics; the eye, cornea and devices stay
// painted plates. Nothing here draws people, heads, hands or faces.
// - EyeG / eyePt: the eye plate's geometry (one union box for all five matched states) and natural-to-screen mapping.
// - EyeStack: the eye plate with its matched states cross-faded by frame functions.
// - Rays: three rays (parallel from a distant object, or diverging from a near dot) bending at the cornea and lens and
//   meeting at a focal point; in front of the retina they cross and spread, behind it they reach the retina unmet and a
//   dashed continuation shows the focus; a scatter mode sprays them at a cloudy lens. FocalMark marks the focus.
// - LensProfile: a concave, convex or toric cross-section in glass blue.
// - EyeStrip: the light pathway strip (light, cornea, lens, retina, optic nerve, brain) with chips for faults and fixes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, CARD, GREYT, INK, INK_SOFT, MECH, PlateB, SlotStrip, lerp, prog, vis} from '../bio-m8-b12/parts';
import type {PB, SItem} from '../bio-m8-b12/parts';
import {FP} from './assets';

export * from '../bio-m8-b12/parts';

export type EyeG = {cx: number; cy: number; w: number};
const EYE_BOX = [167, 145, 1877, 1854];
export const eyeK = (g: EyeG) => g.w / (EYE_BOX[2] - EYE_BOX[0]);
export const eyePt = (g: EyeG, u: number, v: number): [number, number] => {
	const k = eyeK(g);
	return [g.cx + (u - (EYE_BOX[0] + EYE_BOX[2]) / 2) * k, g.cy + (v - (EYE_BOX[1] + EYE_BOX[3]) / 2) * k];
};
export const EyeStack: React.FC<{g: EyeG; base: PB; layers?: {p: PB; o: number}[]; o?: number}> = ({g, base, layers = [], o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<PlateB p={base} cx={g.cx} cy={g.cy} w={g.w} />
		{layers.map((l, i) => l.o > 0.01 ? <PlateB key={i} p={l.p} cx={g.cx} cy={g.cy} w={g.w} o={l.o} /> : null)}
	</g>
));

export const GLASS = '#5b8fc7';
export const VIOLET_C = '#7d62b3';
export const TEAL_C = '#1f8a8f';
const RAYC = '#d18f1f';

/** Three rays. xF, xR are natural x on the axis (focus, retina). srcX is screen x where the rays start. */
export const Rays: React.FC<{g: EyeG; xF: number; xR: number; kind?: 'par' | 'div'; srcX?: number; spread?: number; at?: number; out?: number; scatter?: number; o?: number; color?: string; dimAfter?: number}> = ({g, xF, xR, kind = 'par', srcX = 110, spread = 150, at = -1000, out, scatter = 0, o = 1, color = RAYC}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const A = FP.axis;
	const P = (u: number, vv: number) => eyePt(g, u, vv);
	const offs = [-spread, 0, spread];
	const out2: React.ReactNode[] = [];
	offs.forEach((o0, i) => {
		const c = P(FP.cornea, A + o0 * (kind === 'div' ? 0.75 : 1));
		const s: [number, number] = kind === 'par' ? [srcX, c[1]] : [srcX, P(0, A)[1]];
		const lOff = o0 * (kind === 'div' ? 0.6 : 0.62);
		const l = P(FP.lens, A + lOff);
		const pts: [number, number][] = [s, c, l];
		let dash: [number, number][] | null = null;
		if (scatter < 0.5) {
			if (xF <= xR) {
				pts.push(P(xF, A));
				const t = (xR - xF) / Math.max(1, xF - FP.lens);
				pts.push(P(xR, A - lOff * t));
			} else {
				const t = (xF - xR) / Math.max(1, xF - FP.lens);
				const r = P(xR, A + lOff * t);
				pts.push(r);
				dash = [r, P(xF, A)];
			}
		}
		out2.push(<path key={'r' + i} d={'M' + pts.map(p => p.join(',')).join(' L')} fill="none" stroke={color} strokeWidth={4} strokeLinejoin="round" opacity={0.9} />);
		if (dash) out2.push(<path key={'d' + i} d={`M${dash[0][0]},${dash[0][1]} L${dash[1][0]},${dash[1][1]}`} fill="none" stroke={color} strokeWidth={3} strokeDasharray="8 7" opacity={0.75} />);
		if (scatter > 0.01) {
			[-0.9, -0.3, 0.4, 1.0].forEach((a, k) => {
				const L = 40 + 30 * ((i + k) % 3);
				const ang = a * 0.9 + (i - 1) * 0.35;
				out2.push(<line key={'s' + i + k} x1={l[0]} y1={l[1]} x2={l[0] + Math.cos(ang) * L} y2={l[1] + Math.sin(ang) * L} stroke={color} strokeWidth={3} opacity={0.55 * scatter} strokeLinecap="round" />);
			});
		}
	});
	return <g opacity={v}>{out2}</g>;
};
export const FocalMark: React.FC<{g: EyeG; x: number; at?: number; out?: number; o?: number}> = ({g, x, at = -1000, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const [px, py] = eyePt(g, x, FP.axis);
	return (
		<g opacity={v}>
			<circle cx={px} cy={py} r={10} fill={CARD} stroke={INK} strokeWidth={3} />
			<path d={`M${px - 8},${py - 26} L${px},${py - 18} L${px + 8},${py - 26}`} fill="none" stroke={INK} strokeWidth={3} />
		</g>
	);
};

/** A lens cross-section centred at (x, y), height h. */
export const LensProfile: React.FC<{x: number; y: number; h: number; kind: 'concave' | 'convex' | 'toric'; at?: number; out?: number; o?: number}> = ({x, y, h, kind, at = -1000, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const t = h / 2;
	const d = kind === 'concave'
		? `M${x - 26},${y - t} L${x + 26},${y - t} Q${x + 8},${y} ${x + 26},${y + t} L${x - 26},${y + t} Q${x - 8},${y} ${x - 26},${y - t} Z`
		: kind === 'convex'
			? `M${x},${y - t} Q${x + 40},${y} ${x},${y + t} Q${x - 40},${y} ${x},${y - t} Z`
			: `M${x},${y - t} Q${x + 52},${y} ${x},${y + t} Q${x - 22},${y} ${x},${y - t} Z`;
	return <g opacity={v}><path d={d} fill={GLASS} fillOpacity={0.3} stroke={GLASS} strokeWidth={4} /></g>;
};

// ---------- the light pathway strip ----------
export const PATH_HEADS = ['light', 'cornea', 'lens', 'retina', 'optic nerve', 'brain'];
export const PATH_WS = [250, 250, 250, 250, 250, 250];
export const PATH_GAP = 45;
export const pathX = (i: number) => MECH.x + i * (250 + PATH_GAP);
export type PathState = {lit?: (number | undefined)[]; items?: SItem[][]; fog?: number; fogOut?: number; tick?: number};
export const EyeStrip: React.FC<{s: PathState; o?: number; y?: number; h?: number}> = ({s, o = 1, y = MECH.y, h = MECH.h}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const fog = s.fog === undefined ? 0 : vis(f, s.fog, s.fogOut, 16);
	const tk = s.tick === undefined ? 0 : prog(f, s.tick, 12);
	return (
		<g opacity={o}>
			<SlotStrip x={MECH.x} y={y} ws={PATH_WS} h={h} gap={PATH_GAP} size={28} headSize={32} slots={PATH_HEADS.map((hd, i) => ({head: hd, lit: s.lit?.[i], items: s.items?.[i] ?? []}))} />
			{fog > 0.01 ? <rect x={pathX(2) + 4} y={y + 4} width={242} height={h - 8} rx={16} fill="#b9b3a8" opacity={0.4 * fog} /> : null}
			{tk > 0.01 ? <path opacity={tk} d={`M${pathX(3) + 190},${y + 40} l14,16 l30,-38`} fill="none" stroke="#2e7d4f" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" /> : null}
		</g>
	);
};
export const C_GL = GLASS, C_LASER = VIOLET_C, C_SWAP = TEAL_C, C_FAULT = AMBER_INK, C_FOG = '#8d857a';
export {AMBER, BLUE, GREYT, INK_SOFT, lerp};
