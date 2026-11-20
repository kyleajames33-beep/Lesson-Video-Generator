// Drawing parts for Y11 Chem M1 V16 (flame tests). Reuses the M1 V13 parts (and through them V10's spectrum strip,
// photons, tallies and V01's text, chips, framed answers, pen marks, brackets, plates and the pause hold) and the
// coded wire loop from M8 C03a (read-only import). New here:
// - Burner: the aligned painted flame set drawn as states that cross-fade in place (only the flame changes), with a
//   partial level for the sodium-masking picture; flamePt gives screen points on the flame;
// - Bottle: the painted solution bottle with its formula written on the cream label (34 px or more);
// - OText: text in a flame colour with a dark-ink outline (ion labels);
// - Ladder: a small four-level energy ladder (uneven gaps, a model, not to scale);
// - WordCard: a framed word card that takes a slate cross; Burst: the red radiation burst for the handoff.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, Plate, Sx, clamp01, prog, smooth, vis} from '../chem-y11-m1-v13/parts';
import type {PDef} from './common';
import {BOTTLE, FL, FLAME_N, LABEL_N} from './common';
import type {FKey} from './common';

export * from '../chem-y11-m1-v13/parts';
export {WireLoop} from '../chem-m8-c03a/parts';

// ---------- colour key (design Revision 4, fixed for the whole video) ----------
export const TERRA_S = '#c4582f';
export const TERRA_T = '#a8431f';
export const GREEN_S = '#2f8a5b';
export const NAVY_S = '#24407a';
export const PAPER = '#fffdf8';
export const DARK_BAND = '#141218';

// ---------- the burner and its flame states ----------
export type BurnerG = {cx: number; bottom: number; h: number};
const kOf = (g: BurnerG) => g.h / (FLAME_N.box[3] - FLAME_N.box[1]);
/** Screen point of a native (2000 px canvas) point on the burner drawn at g. */
export const flamePt = (g: BurnerG, u: number, v: number): [number, number] => {
	const k = kOf(g), b = FLAME_N.box;
	const x0 = g.cx - ((b[2] - b[0]) * k) / 2, y0 = g.bottom - g.h;
	return [x0 + (u - b[0]) * k, y0 + (v - b[1]) * k];
};
/** Flame centre at native height v. */
export const flameAt = (g: BurnerG, v: number) => flamePt(g, FLAME_N.cx, v);
/** Width of the burner drawn at g. */
export const burnerW = (g: BurnerG) => (FLAME_N.box[2] - FLAME_N.box[0]) * kOf(g);
/** One flame state: plate key, the frame it starts to fade in, fade length and the level it reaches (1 = full). */
export type FS = [FKey, number, number?, number?];
/** The burner: the first state is solid from the first frame; each later state fades in over the earlier ones. */
export const Burner: React.FC<{g: BurnerG; states: FS[]; o?: number; dy?: number; at?: number}> = ({g, states, o = 1, dy = 0, at = -1000}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.005) return null;
	const q = states.map(([, t, d = 18, lv = 1], i) => (i === 0 ? 1 : prog(f, t, d) * lv));
	const top = g.bottom - g.h + dy;
	return (
		<g opacity={v}>
			{states.map(([key], i) => {
				// a state is hidden once a later state is fully on
				const covered = q.slice(i + 1).some(x => x >= 0.999);
				return q[i] > 0.005 && !covered ? <Plate key={i} p={FL[key]} x={g.cx - burnerW(g) / 2} y={top} h={g.h} o={q[i]} /> : null;
			})}
		</g>
	);
};
/** The flame state on screen at frame f (the last state that has fully arrived). */
export const flameKeyAt = (f: number, states: FS[]): FKey => { let k = states[0][0]; for (const [key, t, d = 18, lv = 1] of states) if (f >= t + d && lv >= 0.999) k = key; return k; };

// ---------- the solution bottle ----------
export type BottleG = {cx: number; bottom: number; h: number};
const bk = (g: BottleG) => g.h / BOTTLE.box[3];
/** Screen point of a native point on the bottle. */
export const bottlePt = (g: BottleG, u: number, v: number): [number, number] => {
	const k = bk(g);
	return [g.cx + (u - (BOTTLE.box[0] + BOTTLE.box[2] / 2)) * k, g.bottom - g.h + (v - BOTTLE.box[1]) * k];
};
/** Where a loop dips into the bottle (just inside the mouth). */
export const dipPt = (g: BottleG): [number, number] => bottlePt(g, 1000, 300);
export const labelW = (g: BottleG) => (LABEL_N.r - LABEL_N.l) * bk(g);
export const Bottle: React.FC<{g: BottleG; lines: string[]; size?: number; at?: number; out?: number; o?: number; color?: string; colors?: string[]}> = ({g, lines, size = 34, at = -1000, out, o = 1, color = INK, colors}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.005) return null;
	const [lx, ly] = bottlePt(g, LABEL_N.cx, LABEL_N.cy);
	const lh = size * 1.12;
	const y0 = ly - ((lines.length - 1) * lh) / 2 + size * 0.36;
	return (
		<g opacity={v}>
			<Plate p={BOTTLE} x={g.cx - (BOTTLE.box[2] * bk(g)) / 2} y={g.bottom - g.h} h={g.h} />
			{lines.map((t, i) => <Sx key={i} x={lx} y={y0 + i * lh} text={t} size={size} color={colors?.[i] ?? color} anchor="middle" weight={800} at={-1000} />)}
		</g>
	);
};

// ---------- outlined colour text ----------
/** Text in a light flame colour with a dark-ink outline (chemistry markup as Sx). */
export const OText: React.FC<{x: number; y: number; text: string; size?: number; fill: string; anchor?: 'start' | 'middle' | 'end'; at?: number; out?: number; o?: number; stroke?: number}> = ({x, y, text, size = 38, fill, anchor = 'start', at = -1000, out, o = 1, stroke}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.005) return null;
	const sw = stroke ?? Math.max(2, size * 0.07);
	let shift = 0;
	const parts = toksLite(text).map((t, i) => {
		const want = t.k === 1 ? size * 0.2 : t.k === 2 ? -size * 0.42 : 0;
		const dy = want - shift;
		shift = want;
		return <tspan key={i} dy={dy || undefined} style={t.k ? {fontSize: size * 0.64} : undefined}>{t.s}</tspan>;
	});
	return (
		<text x={x} y={y} textAnchor={anchor} opacity={v} fill={fill} stroke={INK} strokeWidth={sw} strokeLinejoin="round" paintOrder="stroke" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, whiteSpace: 'pre'}}>
			{parts}
		</text>
	);
};
/** Minimal markup: _2 subscript digits and ^{...} superscripts (as the shared Sx). */
const toksLite = (s: string): {s: string; k: 0 | 1 | 2}[] => {
	const out: {s: string; k: 0 | 1 | 2}[] = [];
	let i = 0, buf = '';
	const push = (k: 0 | 1 | 2, t: string) => { if (t) out.push({s: t, k}); };
	while (i < s.length) {
		if (s[i] === '^' && s[i + 1] === '{') { push(0, buf); buf = ''; const j = s.indexOf('}', i); push(2, s.slice(i + 2, j)); i = j + 1; continue; }
		if (s[i] === '_' && /[0-9]/.test(s[i + 1] ?? '')) { push(0, buf); buf = ''; let j = i + 1; while (/[0-9]/.test(s[j] ?? '')) j++; push(1, s.slice(i + 1, j)); i = j; continue; }
		buf += s[i]; i++;
	}
	push(0, buf);
	return out;
};

// ---------- a small four-level energy ladder ----------
export type LadderG = {x0: number; x1: number; ys: number[]};
export const Ladder: React.FC<{g: LadderG; o?: number; color?: string; width?: number}> = ({g, o = 1, color = INK, width = 5}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		{g.ys.map((y, i) => <line key={i} x1={g.x0} x2={g.x1} y1={y} y2={y} stroke={color} strokeWidth={width} strokeLinecap="round" />)}
	</g>
));

// ---------- the swatch ----------
export const Swatch: React.FC<{x: number; y: number; w: number; h: number; fill: string; o?: number; r?: number}> = ({x, y, w, h, fill, o = 1, r = 16}) => (o <= 0.005 ? null : <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={INK} strokeWidth={4} opacity={o} />);

// ---------- word card with a slate cross ----------
export const WordCard: React.FC<{x: number; y: number; w: number; lines: string[]; size?: number; at: number; cross?: number; color?: string}> = ({x, y, w, lines, size = 38, at, cross, color = INK}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.005) return null;
	const h = lines.length * size * 1.3 + size * 0.9;
	const c = cross === undefined ? 0 : smooth(prog(f, cross, 12));
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill={PAPER} stroke={INK} strokeWidth={4} />
			{lines.map((t, i) => <Sx key={i} x={x + 24} y={y + size * 1.25 + i * size * 1.3} text={t} size={size} color={color} weight={800} at={-1000} />)}
			{c > 0.005 ? (
				<g stroke="#5a6470" strokeWidth={9} strokeLinecap="round">
					<line x1={x + 14} y1={y + 14} x2={x + 14 + (w - 28) * c} y2={y + 14 + (h - 28) * c} />
					<line x1={x + w - 14} y1={y + 14} x2={x + w - 14 - (w - 28) * c} y2={y + 14 + (h - 28) * c} />
				</g>
			) : null}
		</g>
	);
};

// ---------- the radiation burst ----------
export const Burst: React.FC<{cx: number; cy: number; r: number; at: number; color?: string}> = ({cx, cy, r, at, color = '#d24a3c'}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 10);
	if (v <= 0.005) return null;
	const flick = 1 + 0.06 * Math.sin(f * 0.5);
	const n = 12, pts: string[] = [];
	for (let i = 0; i < n * 2; i++) {
		const a = (i / (n * 2)) * Math.PI * 2, rr = (i % 2 ? r * 0.55 : r) * smooth(v) * flick;
		pts.push(`${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`);
	}
	return <polygon points={pts.join(' ')} fill="#f6b3a8" stroke={color} strokeWidth={5} strokeLinejoin="round" opacity={v} />;
};

/** Ease helper: 0..1 between two frames. */
export const span = (f: number, a: number, b: number) => smooth(clamp01((f - a) / Math.max(1, b - a)));
export type {PDef};
