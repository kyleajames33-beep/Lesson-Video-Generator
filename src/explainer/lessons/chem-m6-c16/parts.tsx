// Drawing parts for M6 C16 (choosing an acid-base analysis method). Reuses C15 (and through it C14 to C01: board,
// chips, crossed chips, question card, countdown, key notes, graph primitives, the conductivity meter, the moles bar,
// the tinted clip flask, the C07 full pH meter, the C12 burette). New here:
// - Fork: the question fork (teal "pH" branch up, navy "amount" branch down), with an optional three-way split of the
//   amount branch into method chips (MethodTree); MiniFork is its icon;
// - PhmTint: a multiply tint on the pH meter's own beaker; ProbeIcon: a small coded probe; WashBottle;
// - GlassWall: the glass-bulb close-up (hydronium gathering at the outer surface of a thin glass wall);
// - CalGraph helpers: true and drifted voltage lines; DosingTrace: a pH-time trace with dashed limits and a valve;
// - MotorBurette: an autotitrator's motor-driven burette over a beaker with a probe;
// - Cycle: observe, test, pass on, as an abstract cycle of three labelled nodes with a travelling dot;
// - ProtonHop: a generic acid token passing its proton to a generic base token.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {
	AChip, AMBER, AMBER_INK, An, BASE, BASE_INK, Fade, H3O, INK, INK_SOFT, MolesBar, NAVY, PROTON, PROTON_INK, RED_WINE, Sx, TEAL, clamp01, lerp, mw, picW, smooth, vis,
} from '../chem-m6-c15/parts';
import {PHMETER, PHM_LIQ} from './assets';

export * from '../chem-m6-c15/parts';

export const PH_C = TEAL;
export const AMT_C = NAVY;

// ---------- the question fork ----------
export type ForkG = {x0: number; y0: number; x1: number; yU: number; yL: number};
const curve = (x0: number, y0: number, x1: number, y1: number) => `M${x0},${y0} C${x0 + (x1 - x0) * 0.5},${y0} ${x0 + (x1 - x0) * 0.5},${y1} ${x1},${y1}`;
const head = (x: number, y: number, c: string, o: number) => <path d={`M${x - 16},${y - 11} L${x},${y} L${x - 16},${y + 11}`} fill="none" stroke={c} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={o} />;
/** The two-way fork. Labels sit above each branch end. dimU / dimL dim a branch; litU / litL pulse it. */
export const Fork: React.FC<{g: ForkG; at: number; atU: number; atL: number; labU?: string; labL?: string; size?: number; dimU?: number; dimL?: number; litU?: number; litL?: number; out?: number; o?: number; width?: number}> = ({g, at, atU, atL, labU = 'pH: how acidic now?', labL = 'amount: how much in total?', size = 34, dimU, dimL, litU, litL, out, o = 1, width = 6}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const dU = dimU === undefined ? 1 : 1 - 0.65 * prog(f, dimU, 14);
	const dL = dimL === undefined ? 1 : 1 - 0.65 * prog(f, dimL, 14);
	const pl = (t: number | undefined) => (t === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - t) / 50) * Math.PI)));
	const mid = g.x0 + 60;
	return (
		<g opacity={v}>
			<circle cx={g.x0} cy={g.y0} r={10} fill={INK} opacity={prog(f, at, 10)} />
			<DrawPath d={`M${g.x0},${g.y0} L${mid},${g.y0}`} at={at} dur={8} color={INK} width={width} />
			<g opacity={dU}>
				{pl(litU) > 0.01 ? <path d={curve(mid, g.y0, g.x1, g.yU)} fill="none" stroke="#f6d77a" strokeWidth={22} strokeLinecap="round" opacity={0.6 * pl(litU)} /> : null}
				<DrawPath d={curve(mid, g.y0, g.x1, g.yU)} at={atU} dur={18} color={PH_C} width={width} />
				{head(g.x1, g.yU, PH_C, prog(f, atU + 16, 6))}
				{labU ? <Sx x={g.x1 - 20} y={g.yU - 22} text={labU} size={size} color={PH_C} anchor="end" hand weight={700} at={atU + 6} /> : null}
			</g>
			<g opacity={dL}>
				{pl(litL) > 0.01 ? <path d={curve(mid, g.y0, g.x1, g.yL)} fill="none" stroke="#f6d77a" strokeWidth={22} strokeLinecap="round" opacity={0.6 * pl(litL)} /> : null}
				<DrawPath d={curve(mid, g.y0, g.x1, g.yL)} at={atL} dur={18} color={AMT_C} width={width} />
				{head(g.x1, g.yL, AMT_C, prog(f, atL + 16, 6))}
				{labL ? <Sx x={g.x1 - 20} y={g.yL + size + 14} text={labL} size={size} color={AMT_C} anchor="end" hand weight={700} at={atL + 6} /> : null}
			</g>
		</g>
	);
};
/** A small fork icon (no labels): teal up, navy down; lit pulses a branch. */
export const MiniFork: React.FC<{x: number; y: number; w?: number; h?: number; at: number; litU?: number; litL?: number; out?: number; labels?: [string, string]; size?: number}> = ({x, y, w = 220, h = 160, at, litU, litL, out, labels, size = 26}) => (
	<Fork g={{x0: x, y0: y + h / 2, x1: x + w, yU: y, yL: y + h}} at={at} atU={at + 4} atL={at + 8} labU={labels?.[0] ?? ''} labL={labels?.[1] ?? ''} size={size} litU={litU} litL={litL} out={out} width={5} />
);

/** The amount branch splitting three ways from (x0, y0) to chips at (x1, ys[i]); each branch lights at at[i]. */
export const Split3: React.FC<{x0: number; y0: number; x1: number; ys: [number, number, number]; at: [number, number, number]; labels: [string, string, string]; dim?: (number | undefined)[]; lit?: (number | undefined)[]; size?: number; o?: number}> = ({x0, y0, x1, ys, at, labels, dim = [], lit = [], size = 28, o = 1}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={o}>
			{ys.map((y, i) => {
				const d = dim[i] === undefined ? 1 : 1 - 0.65 * prog(f, dim[i]!, 14);
				const lt = lit[i] === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - lit[i]!) / 50) * Math.PI));
				return (
					<g key={i} opacity={d}>
						{lt > 0.01 ? <path d={curve(x0, y0, x1, y)} fill="none" stroke="#f6d77a" strokeWidth={20} strokeLinecap="round" opacity={0.6 * lt} /> : null}
						<DrawPath d={curve(x0, y0, x1, y)} at={at[i]} dur={16} color={AMT_C} width={5} />
						{head(x1, y, AMT_C, prog(f, at[i] + 14, 6))}
						<Sx x={x1 + 16} y={y - 34} text={labels[i]} size={size} color={AMT_C} hand weight={700} at={at[i] + 4} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- pH meter beaker tint; probe and wash bottle icons ----------
export const PhmTint: React.FC<{x: number; y: number; h: number; o: number; color?: string}> = ({x, y, h, o, color = RED_WINE}) => {
	if (o <= 0.01) return null;
	const w = picW(PHMETER, h);
	return <path d={'M' + PHM_LIQ.map(([u, v]) => `${(x + w * u).toFixed(1)},${(y + h * v).toFixed(1)}`).join(' L') + ' Z'} fill={color} opacity={0.86 * o} style={{mixBlendMode: 'multiply'}} />;
};
/** A coded pH probe (rod with a blue collar and a glass bulb) with its tip at (x, y). */
export const ProbeIcon: React.FC<{x: number; y: number; h?: number; o?: number; cable?: boolean}> = ({x, y, h = 170, o = 1, cable = true}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{cable ? <path d={`M${x},${y - h} C${x},${y - h - 40} ${x + 60},${y - h - 50} ${x + 70},${y - h - 90}`} fill="none" stroke="#2b2723" strokeWidth={5} /> : null}
		<rect x={x - 7} y={y - h} width={14} height={h - 14} rx={5} fill="#e8eef2" stroke={INK_SOFT} strokeWidth={2.5} />
		<rect x={x - 11} y={y - h} width={22} height={h * 0.28} rx={5} fill="#2f5d9e" stroke="#1f3f6e" strokeWidth={2} />
		<circle cx={x} cy={y - 10} r={10} fill="#dfeaf2" stroke={INK_SOFT} strokeWidth={2.5} />
	</g>
));
export const WashBottle: React.FC<{x: number; y: number; at: number; out?: number}> = ({x, y, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 8);
	if (v <= 0.01) return null;
	const sq = clamp01((f - at - 8) / 20);
	return (
		<g opacity={v}>
			<path d={`M${x - 26},${y} L${x - 30},${y + 70} Q${x},${y + 82} ${x + 30},${y + 70} L${x + 26},${y} Z`} fill="#f4f8fb" stroke={INK_SOFT} strokeWidth={3} />
			<path d={`M${x},${y} L${x},${y - 20} L${x + 40},${y - 40}`} fill="none" stroke={INK_SOFT} strokeWidth={4} />
			{sq > 0 && sq < 1 ? [0, 1, 2].map(i => <circle key={i} cx={x + 46 + (sq * 60 + i * 12)} cy={y - 40 + (sq * 60 + i * 12) ** 1.3 / 6} r={3.5} fill="#8fb9d8" />) : null}
		</g>
	);
};

// ---------- the glass-bulb close-up ----------
/** Inside a lens: sample solution (left), a thin glass wall (curved band), the inside of the bulb (right). Hydronium
 *  in the sample drifts and from `gather` settles at the outer surface. */
export const GlassWall: React.FC<{cx: number; cy: number; r: number; gather: number; dark?: (f: number) => number}> = ({cx, cy, r, gather, dark = () => 0}) => {
	const f = useCurrentFrame();
	const wx = (y: number) => cx + 60 - ((y - cy) ** 2) / (3.2 * r);
	const pts: string[] = [];
	for (let y = cy - r; y <= cy + r; y += 10) pts.push(`${wx(y).toFixed(1)},${y}`);
	const band = `M${pts.join(' L')} L${cx + r},${cy + r} L${cx + r},${cy - r} Z`;
	const inner: string[] = [];
	for (let y = cy - r; y <= cy + r; y += 10) inner.push(`${(wx(y) + 26).toFixed(1)},${y}`);
	const g = smooth(clamp01((f - gather) / 40));
	const H: [number, number][] = [[-0.75, -0.55], [-0.5, -0.1], [-0.82, 0.25], [-0.45, 0.55], [-0.2, -0.65], [-0.62, -0.32], [-0.3, 0.3], [-0.7, 0.62]];
	const dk = clamp01(dark(f));
	return (
		<g>
			<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill="#eef6fb" />
			{dk > 0.01 ? <rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill={RED_WINE} opacity={0.55 * dk} /> : null}
			<path d={band} fill="#f7fbfd" />
			<path d={`M${pts.join(' L')}`} fill="none" stroke="#9ab4c6" strokeWidth={4} />
			<path d={`M${inner.join(' L')}`} fill="none" stroke="#9ab4c6" strokeWidth={4} />
			<path d={`M${pts.join(' L')} L${inner.slice().reverse().join(' L')} Z`} fill="#cfe0ea" opacity={0.85} />
			{H.map(([u, v], i) => {
				const x0 = cx + u * r + Math.sin(f / 17 + i) * 8, y0 = cy + v * r + Math.cos(f / 21 + i * 2) * 8;
				const yt = cy + (-0.7 + i * 0.2) * r;
				const xt = wx(yt) - 22;
				return <H3O key={i} x={lerp(x0, xt, g)} y={lerp(y0, yt, g)} s={1.15} />;
			})}
			{g > 0.6 ? [0, 1, 2, 3, 4].map(i => { const yy = cy - r * 0.6 + i * r * 0.3; return <Sx key={i} x={wx(yy) + 50} y={yy + 8} text="−" size={26} color={INK_SOFT} anchor="middle" weight={800} at={-1000} opacity={(g - 0.6) * 2.5} />; }) : null}
		</g>
	);
};

// ---------- dosing trace ----------
export type DG = {x: number; y: number; w: number; h: number};
/** pH against time: a trace drawn from `at` over `dur` frames; tr(t) in 0..1 (t 0..1); limits at lo and hi. */
export const DosingTrace: React.FC<{g: DG; tr: (t: number) => number; at: number; dur: number; lo: number; hi: number; out?: number; o?: number}> = ({g, tr, at, dur, lo, hi, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at - 10, out, 12) * o;
	if (v <= 0.01) return null;
	const m = clamp01((f - at) / dur);
	const pts: string[] = [];
	for (let t = 0; t <= m + 1e-9; t += 0.01) pts.push(`${(g.x + t * g.w).toFixed(1)},${(g.y + g.h - tr(t) * g.h).toFixed(1)}`);
	const Y = (q: number) => g.y + g.h - q * g.h;
	return (
		<g opacity={v}>
			<line x1={g.x} y1={g.y + g.h} x2={g.x + g.w} y2={g.y + g.h} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<line x1={g.x} y1={g.y + g.h} x2={g.x} y2={g.y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<Sx x={g.x - 12} y={g.y - 18} text="pH" size={30} color={INK} weight={800} at={-1000} />
			<Sx x={g.x + g.w} y={g.y + g.h + 38} text="time" size={26} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
			<line x1={g.x} y1={Y(hi)} x2={g.x + g.w} y2={Y(hi)} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" />
			<line x1={g.x} y1={Y(lo)} x2={g.x + g.w} y2={Y(lo)} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" />
			{pts.length > 1 ? <path d={'M' + pts.join(' L')} fill="none" stroke={TEAL} strokeWidth={5} strokeLinejoin="round" /> : null}
		</g>
	);
};
export const Valve: React.FC<{x: number; y: number; at: number; open: number; close?: number; out?: number}> = ({x, y, at, open, close, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const op = prog(f, open, 10) * (close === undefined ? 1 : 1 - prog(f, close, 10));
	return (
		<g opacity={v}>
			<path d={`M${x - 26},${y - 18} L${x},${y} L${x - 26},${y + 18} Z M${x + 26},${y - 18} L${x},${y} L${x + 26},${y + 18} Z`} fill={op > 0.5 ? '#bfe3da' : '#fffdf8'} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
			<line x1={x} y1={y} x2={x} y2={y - 34} stroke={INK} strokeWidth={4} />
			<line x1={x - 18 * Math.cos(op * 1.4)} y1={y - 34 - 18 * Math.sin(op * 1.4)} x2={x + 18 * Math.cos(op * 1.4)} y2={y - 34 + 18 * Math.sin(op * 1.4)} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{op > 0.3 ? [0, 1, 2].map(i => { const q = ((f - open + i * 8) % 24) / 24; return <circle key={i} cx={x + 36 + q * 40} cy={y + q * 30} r={4} fill={TEAL} opacity={op * (1 - q)} />; }) : null}
		</g>
	);
};

// ---------- autotitrator ----------
export const MotorBurette: React.FC<{x: number; y: number; at: number; level: (f: number) => number; out?: number}> = ({x, y, at, level, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const L = clamp01(level(f));
	const tubeTop = y + 60, tubeBot = y + 300;
	return (
		<g opacity={v}>
			<rect x={x - 50} y={y} width={100} height={56} rx={10} fill="#e9eef2" stroke={INK_SOFT} strokeWidth={3} />
			<circle cx={x + 26} cy={y + 28} r={13} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} />
			<line x1={x + 26} y1={y + 28} x2={x + 26 + 10 * Math.cos(f / 6)} y2={y + 28 + 10 * Math.sin(f / 6)} stroke={INK} strokeWidth={2.5} />
			<Sx x={x - 18} y={y + 37} text="M" size={26} color={INK_SOFT} anchor="middle" weight={800} at={-1000} />
			<rect x={x - 9} y={tubeTop + (tubeBot - tubeTop) * L} width={18} height={(tubeBot - tubeTop) * (1 - L)} fill="#7f9cc8" opacity={0.8} />
			<rect x={x - 11} y={tubeTop} width={22} height={tubeBot - tubeTop} rx={4} fill="none" stroke={INK_SOFT} strokeWidth={3} />
			<path d={`M${x - 5},${tubeBot} L${x - 2},${tubeBot + 50} L${x + 2},${tubeBot + 50} L${x + 5},${tubeBot}`} fill="none" stroke={INK_SOFT} strokeWidth={3} />
			<path d={`M${x - 80},${tubeBot + 70} L${x - 80},${tubeBot + 180} Q${x - 80},${tubeBot + 190} ${x - 70},${tubeBot + 190} L${x + 70},${tubeBot + 190} Q${x + 80},${tubeBot + 190} ${x + 80},${tubeBot + 180} L${x + 80},${tubeBot + 70}`} fill="#eef6fb" stroke={INK_SOFT} strokeWidth={3.5} />
			<ProbeIcon x={x + 44} y={tubeBot + 170} h={150} />
		</g>
	);
};

// ---------- observe, test, pass on ----------
/** Three labelled nodes on a circle, joined by arrows; a dot travels round once the cycle is complete. */
export const Cycle: React.FC<{cx: number; cy: number; R: number; labels: [string, string, string]; at: [number, number, number]; o?: number; size?: number}> = ({cx, cy, R, labels, at, o = 1, size = 36}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const ang = [-Math.PI / 2, Math.PI / 6, (5 * Math.PI) / 6];
	const P = (a: number, rr = R): [number, number] => [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr];
	const arc = (a1: number, a2: number) => {
		const [x1, y1] = P(a1), [x2, y2] = P(a2);
		return `M${x1.toFixed(1)},${y1.toFixed(1)} A${R},${R} 0 0 1 ${x2.toFixed(1)},${y2.toFixed(1)}`;
	};
	const gap = 0.42;
	const full = at[2] + 30;
	const dotA = ang[0] + ((f - full) / 120) * 2 * Math.PI;
	return (
		<g opacity={o}>
			{[0, 1, 2].map(i => {
				const a1 = ang[i] + gap, a2 = ang[(i + 1) % 3] - gap + (i === 2 ? 2 * Math.PI : 0);
				const [hx, hy] = P(a2);
				const ta = a2 + Math.PI / 2;
				return (
					<g key={'a' + i}>
						<DrawPath d={arc(a1, a2)} at={at[i] + 10} dur={20} color={INK_SOFT} width={4} />
						<path d={`M${hx - Math.cos(ta - 0.5) * 16},${hy - Math.sin(ta - 0.5) * 16} L${hx},${hy} L${hx - Math.cos(ta + 0.5) * 16},${hy - Math.sin(ta + 0.5) * 16}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" opacity={prog(f, at[i] + 28, 6)} />
					</g>
				);
			})}
			{[0, 1, 2].map(i => {
				const [x, y] = P(ang[i]);
				const w = mw(labels[i], size, true, 700) + 50;
				const v = prog(f, at[i], 12);
				const s = 0.85 + 0.15 * smooth(v);
				return (
					<g key={i} opacity={v} transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}>
						<rect x={x - w / 2} y={y - size * 0.9} width={w} height={size * 1.8} rx={size * 0.9} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
						<Sx x={x} y={y + size * 0.32} text={labels[i]} size={size} color={TEAL} anchor="middle" hand weight={700} at={-1000} />
					</g>
				);
			})}
			{f > full ? <circle cx={P(dotA)[0]} cy={P(dotA)[1]} r={9} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} opacity={prog(f, full, 12)} /> : null}
		</g>
	);
};

// ---------- generic proton hop ----------
export const ProtonHop: React.FC<{x1: number; x2: number; y: number; at: number; hop: number; o?: number}> = ({x1, x2, y, at, hop, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, undefined, 12) * o;
	if (v <= 0.01) return null;
	const q = smooth(clamp01((f - hop) / 26));
	const px = lerp(x1 + 40, x2 - 40, q), py = y - 36 - Math.sin(q * Math.PI) * 60;
	return (
		<g opacity={v}>
			<circle cx={x1} cy={y} r={38} fill="#fff4dc" stroke={AMBER} strokeWidth={4} />
			<Sx x={x1} y={y + 10} text="acid" size={28} color={AMBER_INK} anchor="middle" hand weight={700} at={-1000} />
			<circle cx={x2} cy={y} r={38} fill="#ece9f4" stroke={BASE} strokeWidth={4} />
			<Sx x={x2} y={y + 10} text="base" size={28} color={BASE_INK} anchor="middle" hand weight={700} at={-1000} />
			<circle cx={px} cy={py} r={13} fill={PROTON} stroke={PROTON_INK} strokeWidth={2.5} />
			<Sx x={px} y={py + 6} text="+" size={18} color="#ffffff" anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

/** A method chip with a tiny icon at its left. */
export type IconK = 'probe' | 'burette' | 'bar' | 'cross';
export const MiniIcon: React.FC<{k: IconK; x: number; y: number; at: number}> = ({k, x, y, at}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	if (k === 'probe') return <g opacity={v}><ProbeIcon x={x} y={y + 22} h={46} cable={false} /></g>;
	if (k === 'burette') return (
		<g opacity={v}>
			<rect x={x - 6} y={y - 34} width={12} height={46} rx={3} fill="#c8d6ea" stroke={INK_SOFT} strokeWidth={2.5} />
			<path d={`M${x - 3},${y + 12} L${x},${y + 26} L${x + 3},${y + 12}`} fill="none" stroke={INK_SOFT} strokeWidth={2.5} />
		</g>
	);
	if (k === 'bar') return (
		<g opacity={v}>
			<rect x={x - 34} y={y - 12} width={44} height={24} rx={5} fill={AMBER} />
			<rect x={x + 10} y={y - 12} width={26} height={24} rx={5} fill={NAVY} opacity={0.85} />
			<rect x={x - 34} y={y - 12} width={70} height={24} rx={5} fill="none" stroke={TEAL} strokeWidth={2.5} />
		</g>
	);
	return (
		<g opacity={v}>
			<line x1={x - 34} y1={y + 18} x2={x + 6} y2={y - 2} stroke="#6aa3d8" strokeWidth={4} strokeLinecap="round" />
			<line x1={x - 10} y1={y + 18} x2={x + 34} y2={y - 26} stroke="#8a5cc2" strokeWidth={4} strokeLinecap="round" />
		</g>
	);
};
export const IconChip: React.FC<{x: number; y: number; text: string; k: IconK; at: number; out?: number; size?: number; color?: string}> = ({x, y, text, k, at, out, size = 30, color = INK}) => {
	const w = mw(text, size, false, 700) + size * 1.4 + 84;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={size * 1.9} rx={size * 0.95} fill="#fffdf8" stroke={color} strokeWidth={3} />
			<MiniIcon k={k} x={x + 46} y={y + size * 0.95} at={-1000} />
			<Sx x={x + 104} y={y + size * 1.28} text={text} size={size} color={color} weight={700} at={-1000} />
		</Fade>
	);
};
export const iconChipW = (text: string, size = 30) => mw(text, size, false, 700) + size * 1.4 + 84;
void AChip; void An; void MolesBar;
