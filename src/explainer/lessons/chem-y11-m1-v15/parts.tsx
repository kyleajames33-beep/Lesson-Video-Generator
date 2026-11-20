// Drawing parts for Y11 Chem M1 V15 (Group 1 metals and water). Reuses the M1 V14 parts (and through them V13 back to
// V01: text, chips, framed answers, pen marks, plates, readouts, the radius atom, value bars). New here, all coded: the
// aligned trough states cross-fading through one alpha box, the falling piece (no hand, no tongs), hydrogen bubbles
// rising at a rate set per metal, the pink indicator spread in the water, sparks, the "illustrated clip" frame with its
// play bar, the small group 1 column, the electron hand-off panel (two atoms, two waters, two ions, two hydroxides,
// one hydrogen molecule) and the reaction box drawing for the particle-box runs.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {PicF} from '../chem-m8-c01/parts';
import {E_BLUE, E_INK, INK, P_RED, RAtom, Sx, clamp01, lerp, prog, ringsOf, smooth} from '../chem-y11-m1-v14/parts';
import type {PDef} from './common';
import {SURF, tk, tp} from './common';
import type {El, TL} from './common';

export * from '../chem-y11-m1-v14/parts';

// ---------- colour key (design Revision 4, fixed for the whole video) ----------
/** Li, Na, K rows: three teals, darkest for potassium. */
export const LI_T = '#1f8a8f';
export const NA_T = '#13676b';
export const K_T = '#0a4447';
export const TEALS = [LI_T, NA_T, K_T];
/** Hydroxide and the indicator. */
export const PINK_S = '#d6488f';
export const PINK_T = '#a8246a';
export const PINK_F = '#f6c6dd';
export const H2_FILL = '#ffffff';
export const METAL_F = '#a9aeb5';

// ---------- the trough states (one alpha box, cross-fading in place) ----------
export type TState = {p: PDef; at: number; d?: number};
/** Draws state 0 fully, then each later state fading in over the previous ones from its `at`. */
export const TroughStates: React.FC<{t: TL; states: TState[]; o?: number}> = ({t, states, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const q = states.map((s, i) => (i === 0 ? 1 : prog(f, s.at, s.d ?? 20)));
	const h = t.w / states[0].p.box[2] * states[0].p.box[3];
	return (
		<g opacity={o}>
			{states.map((s, i) => {
				const later = q.slice(i + 1).reduce((a, v) => Math.max(a, v), 0);
				const op = i === 0 ? 1 - later : q[i] * (later >= 0.999 ? 0 : 1);
				return op > 0.005 ? <PicF key={i} p={s.p} x={t.x} y={t.y} h={h} o={op} /> : null;
			})}
		</g>
	);
};

// ---------- hydrogen bubbles ----------
/** White bubbles with a dark-ink outline rising from (x, y): one every `every` frames from `at` until `until`. */
export const Bubbles: React.FC<{x: number; y: number; at: number; until?: number; every: number; spread?: number; rise?: number; size?: number; life?: number; o?: number}> = ({x, y, at, until = 99999, every, spread = 16, rise = 1.6, size = 4, life = 34, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.005) return null;
	const out: React.ReactNode[] = [];
	const first = Math.max(0, Math.floor((f - at - life) / every));
	const last = Math.floor((Math.min(f, until) - at) / every);
	for (let i = first; i <= last; i++) {
		const s = at + i * every;
		const age = f - s;
		if (age < 0 || age > life) continue;
		const j = Math.sin(i * 12.9898) * 43758.5453;
		const r1 = j - Math.floor(j);
		const j2 = Math.sin(i * 78.233) * 12543.123;
		const r2 = j2 - Math.floor(j2);
		const bx = x + (r1 - 0.5) * 2 * spread + Math.sin(age * 0.3 + i) * 2;
		const by = y - age * rise * (0.7 + 0.6 * r2);
		const op = (1 - age / life) * Math.min(1, age / 4);
		out.push(<circle key={i} cx={bx} cy={by} r={size * (0.7 + 0.6 * r2)} fill={H2_FILL} stroke={INK} strokeWidth={1.6} opacity={op} />);
	}
	return <g opacity={o}>{out}</g>;
};

// ---------- pink indicator spread ----------
/** Pink haze spreading from a native point on the surface through the water (clipped to the water). */
export const PinkSpread: React.FC<{t: TL; from: [number, number]; at: number; d: number; R: number; id: string; o?: number; strength?: number}> = ({t, from, at, d, R, id, o = 1, strength = 0.55}) => {
	const f = useCurrentFrame();
	const g = smooth(prog(f, at, d));
	if (g <= 0.005 || o <= 0.005) return null;
	const k = tk(t);
	const [cx, cy] = tp(t, from);
	const [sx, sy] = tp(t, [SURF.cx, SURF.cy]);
	const bottom = tp(t, [SURF.cx, SURF.bottom])[1];
	const rad = R * g;
	return (
		<g opacity={o}>
			<defs>
				<radialGradient id={id + 'g'}>
					<stop offset="0%" stopColor={PINK_S} stopOpacity={strength} />
					<stop offset="60%" stopColor={PINK_S} stopOpacity={strength * 0.55} />
					<stop offset="100%" stopColor={PINK_S} stopOpacity={0} />
				</radialGradient>
				<clipPath id={id + 'c'}>
					<ellipse cx={sx} cy={sy} rx={SURF.rx * k} ry={SURF.ry * k} />
					<rect x={sx - SURF.rx * k * 0.97} y={sy} width={SURF.rx * k * 1.94} height={bottom - sy} />
				</clipPath>
			</defs>
			<g clipPath={`url(#${id}c)`}>
				<ellipse cx={cx} cy={cy} rx={rad} ry={rad * 0.32} fill={`url(#${id}g)`} />
				<ellipse cx={cx} cy={cy + rad * 0.3} rx={rad * 0.85} ry={rad * 0.5} fill={`url(#${id}g)`} />
			</g>
		</g>
	);
};

// ---------- the falling piece (coded; no hand, no tongs) ----------
export const Piece: React.FC<{x: number; y: number; at: number; fall?: number; out: number; s?: number}> = ({x, y, at, fall = 14, out, s = 1}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const p = smooth(prog(f, at, fall));
	const o = Math.min(1, (f - at) / 4) * (1 - prog(f, out, 10));
	if (o <= 0.005) return null;
	const yy = lerp(y - 170, y - 6 * s, p);
	const splash = prog(f, at + fall, 8) * (1 - prog(f, at + fall + 12, 10));
	return (
		<g opacity={o}>
			{splash > 0.01 ? <ellipse cx={x} cy={y} rx={30 * s * (0.5 + splash)} ry={8 * s * (0.5 + splash)} fill="none" stroke={INK} strokeWidth={2} opacity={splash} /> : null}
			<rect x={x - 11 * s} y={yy - 7 * s} width={22 * s} height={14 * s} rx={3} fill={METAL_F} stroke={INK} strokeWidth={2.5} />
		</g>
	);
};

// ---------- sparks above the potassium ball ----------
export const Sparks: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 1}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const out: React.ReactNode[] = [];
	for (let i = 0; i < 7; i++) {
		const ph = (f - at + i * 5) % 18;
		const a = -Math.PI / 2 + (i - 3) * 0.42;
		const r0 = 10 * s + ph * 2.2 * s, r1 = r0 + 12 * s;
		const op = Math.max(0, 1 - ph / 18);
		out.push(<line key={i} x1={x + r0 * Math.cos(a)} y1={y + r0 * Math.sin(a)} x2={x + r1 * Math.cos(a)} y2={y + r1 * Math.sin(a)} stroke={i % 2 ? '#e8a21c' : '#c4582f'} strokeWidth={4} strokeLinecap="round" opacity={op} />);
	}
	return <g>{out}</g>;
};

// ---------- the "illustrated clip" frame ----------
/** Rounded frame with a play bar along its lower edge; the bar fills from `at` over `run` frames. */
export const ClipFrame: React.FC<{x: number; y: number; w: number; h: number; at?: number; run?: number; o?: number; draw?: number}> = ({x, y, w, h, at = 0, run = 600, o = 1, draw = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.005 || draw <= 0.005) return null;
	const by = y + h - 34;
	const p = clamp01((f - at) / run);
	const per = 2 * (w + h);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={22} fill="none" stroke={INK} strokeWidth={4} strokeDasharray={`${per * smooth(draw)} ${per}`} />
			{draw >= 0.999 ? (
				<g>
					<path d={`M${x + 28},${by - 13} L${x + 52},${by} L${x + 28},${by + 13} Z`} fill={INK} />
					<line x1={x + 72} y1={by} x2={x + w - 30} y2={by} stroke="#c9bfae" strokeWidth={8} strokeLinecap="round" />
					<line x1={x + 72} y1={by} x2={x + 72 + (w - 102) * p} y2={by} stroke={INK} strokeWidth={8} strokeLinecap="round" />
					<circle cx={x + 72 + (w - 102) * p} cy={by} r={11} fill="#fffdf8" stroke={INK} strokeWidth={4} />
				</g>
			) : null}
		</g>
	);
};

// ---------- small group 1 column ----------
export const G1Col: React.FC<{x: number; y: number; cw: number; ch: number; els: El[]; hi?: number[]; size?: number; o?: number; colors?: string[]}> = ({x, y, cw, ch, els, hi = [], size = 34, o = 1, colors = []}) => {
	if (o <= 0.005) return null;
	return (
		<g opacity={o}>
			{els.map((e, i) => {
				const h = hi[i] ?? 0;
				return (
					<g key={e.sym}>
						<rect x={x} y={y + i * ch} width={cw} height={ch} fill={h > 0.005 ? `rgba(31,138,143,${0.22 * h})` : '#fffdf8'} stroke={INK} strokeWidth={3} />
						{h > 0.005 ? <rect x={x + 3} y={y + i * ch + 3} width={cw - 6} height={ch - 6} fill="none" stroke={colors[i] ?? LI_T} strokeWidth={5} opacity={h} /> : null}
						<Sx x={x + cw / 2} y={y + i * ch + ch / 2 + size * 0.36} text={e.sym} size={size} color={INK} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- water molecule, hydroxide, hydrogen ----------
const Ball: React.FC<{x: number; y: number; r: number; fill: string; o?: number}> = ({x, y, r, fill, o = 1}) => <circle cx={x} cy={y} r={r} fill={fill} stroke={INK} strokeWidth={2.5} opacity={o} />;
/** Water (O red, two H white) splitting into OH⁻ (pink) and an H that travels to `hTo` (p: 0..1). */
export const WaterSplit: React.FC<{x: number; y: number; u: number; p: number; hTo: [number, number]; size?: number}> = ({x, y, u, p, hTo, size = 30}) => {
	const s = smooth(p);
	const hx = lerp(x + u * 0.95, hTo[0], s), hy = lerp(y + u * 0.75, hTo[1], s);
	return (
		<g>
			<Ball x={hx} y={hy} r={u * 0.62} fill={H2_FILL} />
			<Ball x={x - u * 0.95} y={y + u * 0.75} r={u * 0.62} fill={H2_FILL} />
			<Ball x={x} y={y} r={u} fill={s > 0.5 ? PINK_S : '#d6402e'} />
			{s > 0.5 ? <Sx x={x} y={y + size * 0.36} text="OH^{−}" size={size} color="#ffffff" anchor="middle" weight={800} at={-1000} opacity={clamp01((s - 0.5) * 3)} /> : null}
		</g>
	);
};

// ---------- the electron hand-off panel ----------
/** Two metal atoms (left), two waters (right). From `at` each outer electron moves to a water; the atoms become ions,
 *  the waters give two OH⁻ and one H₂ (from the two freed H atoms). `speed`: frames for the hand-off. */
export const HandOff: React.FC<{x: number; y: number; w: number; h: number; e: El; R: number; at: number; speed?: number; ion: string}> = ({x, y, w, h, e, R, at, speed = 30, ion}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, speed);
	const q = prog(f, at + speed * 0.7, 22);
	const ax = x + 22 + R, ys = [y + h * 0.27, y + h * 0.73];
	const wx = x + w - 180, u = 31;
	const h2: [number, number] = [x + w - 62, y + h / 2];
	const rot = 0;
	return (
		<g>
			{ys.map((cy, i) => {
				const e0: [number, number] = [ax + R, cy];
				const to: [number, number] = [wx - u - 6, cy];
				return (
					<g key={i}>
						<RAtom cx={ax} cy={cy} rings={ringsOf(e.shells.length, R)} counts={e.shells} label={`${e.z}+`} nr={Math.max(13, R * 0.24)} dot={6} labelSize={Math.max(18, Math.round(R * 0.24))} outerRot={rot} leave={{to, p: p > 0 ? 1 : 0}} ringStroke={2.5} />
						{p > 0 && p < 1 ? <circle cx={lerp(e0[0], to[0], smooth(p))} cy={lerp(e0[1], to[1], smooth(p))} r={7} fill={E_BLUE} stroke={E_INK} strokeWidth={2} /> : null}
						<WaterSplit x={wx} y={cy - 8} u={u} p={q} hTo={[h2[0] + (i ? 13 : -13), h2[1]]} size={29} />
						{q > 0.05 ? <Sx x={ax + R + 8} y={cy - R * 0.6} text={ion} size={34} color={INK} weight={800} at={-1000} opacity={clamp01(q * 2)} /> : null}
					</g>
				);
			})}
			{q > 0.9 ? <Sx x={h2[0]} y={h2[1] + 44} text="H_2" size={30} color={INK} anchor="middle" weight={800} at={-1000} opacity={clamp01((q - 0.9) * 10)} /> : null}
		</g>
	);
};

// ---------- the reaction box drawing (particle-box run) ----------
export const MetalBall: React.FC<{x: number; y: number; r: number; ion?: boolean}> = ({x, y, r, ion}) => (
	<g>
		<circle cx={x} cy={y} r={r} fill={ion ? '#dfe3e8' : METAL_F} stroke={INK} strokeWidth={2} />
		{ion ? <Sx x={x} y={y + 7} text="+" size={20} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
	</g>
);
export const SmallWater: React.FC<{x: number; y: number; r: number; rot: number}> = ({x, y, r, rot}) => (
	<g transform={`rotate(${rot},${x},${y})`}>
		<circle cx={x - r * 0.95} cy={y + r * 0.7} r={r * 0.6} fill={H2_FILL} stroke={INK} strokeWidth={1.5} />
		<circle cx={x + r * 0.95} cy={y + r * 0.7} r={r * 0.6} fill={H2_FILL} stroke={INK} strokeWidth={1.5} />
		<circle cx={x} cy={y} r={r} fill="#d6402e" stroke={INK} strokeWidth={1.5} />
	</g>
);
void P_RED;
