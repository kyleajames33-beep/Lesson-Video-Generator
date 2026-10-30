// Drawing parts for M8 C02 (gravimetric sulfate). Reuses M8 C01 (and through it M6 C12 to C01: chips, notes, crossed
// chips, working lines, givens card, task line, equation line, lens frame, question text, countdown, key notes, falling
// drops and bubbles). New here:
// - Beaker: the empty beaker with a coded clear fill that cross-fades in place to the settled BaSO4 plate;
// - MethodStrip: the nine method labels along the bottom, lit one stage at a time, earlier stages ticked;
// - Counter: a small coded beaker whose bar shows the sulfate left dissolved;
// - Crystals: the digestion zoom (small crystals dissolve, large ones grow; a dotted filter-paper line that small crystals
//   slip through; grey ions stuck mostly to small crystals);
// - WashDrops: drops that carry grey ions off the crystals and down through the paper (or leave them, unwashed);
// - ReqChip: one of the three requirement cards, with a brief glow;
// - BalRead: a coded balance display overlay.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog, rng} from '../../kit';
import {Fade, INK, INK_SOFT, NAVY, PicF, Sx, TEAL, clamp01, lerp, mw, natPt, smooth, vis} from '../chem-m8-c01/parts';
import {BEAKER, FEAT, SETTLED} from './common';
import type {PDef} from '../chem-m6-c01/assets';

export * from '../chem-m8-c01/parts';
export const GREY_DOT = '#9a948a';

// ---------- beaker ----------
/** Empty beaker plus a coded clear fill, cross-fading to the settled plate from `settle`. */
export const Beaker: React.FC<{x: number; y: number; h: number; settle?: number; dur?: number; o?: number; fill?: boolean}> = ({x, y, h, settle, dur = 30, o = 1, fill = true}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const s = settle === undefined ? 0 : smooth(prog(f, settle, dur));
	const [lx, ty] = natPt(BEAKER, x, y, h, FEAT.wallL, FEAT.surf), [rx, by] = natPt(BEAKER, x, y, h, FEAT.wallR, FEAT.floor);
	return (
		<g opacity={o}>
			{s < 0.999 ? <PicF p={BEAKER} x={x} y={y} h={h} o={1} /> : null}
			{fill && s < 0.999 ? <path d={`M${lx},${ty} L${rx},${ty} L${rx},${by - 40} Q${rx},${by} ${rx - 40},${by} L${lx + 40},${by} Q${lx},${by} ${lx},${by - 40} Z`} fill="#d6e9f4" opacity={0.42 * (1 - s)} /> : null}
			{s > 0.01 ? <PicF p={SETTLED} x={x} y={y} h={h} o={s} /> : null}
		</g>
	);
};
export const beakerPt = (x: number, y: number, h: number, nx: number, ny: number) => natPt(BEAKER, x, y, h, nx, ny);

// ---------- method strip ----------
export const METHOD = ['dissolve', 'acidify', 'precipitate', 'digest', 'filter', 'wash', 'dry', 'cool', 'weigh'];
/** `lit[i]` = frame label i lights; it stays lit until the next lit label (or `done`), then reads as done. */
export const MethodStrip: React.FC<{lit: Record<number, number>; at?: number; y?: number; o?: number}> = ({lit, at = -100, y = 1004, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const w = 196, x0 = 960 - (w * 9 + 12 * 8) / 2;
	const times = Object.entries(lit).map(([k, t]) => [Number(k), t] as [number, number]).sort((a, b) => a[1] - b[1]);
	const cur = times.filter(([, t]) => f >= t).map(([k]) => k);
	const latest = times.filter(([, t]) => f >= t).slice(-1)[0]?.[1] ?? -1;
	return (
		<g opacity={v}>
			{METHOD.map((m, i) => {
				const on = lit[i] !== undefined && f >= lit[i] && lit[i] >= latest - 40;
				const done = !on && cur.includes(i);
				const x = x0 + i * (w + 12);
				const g = on ? prog(f, lit[i], 10) : 0;
				return (
					<g key={m}>
						<rect x={x} y={y} width={w} height={52} rx={26} fill={on ? '#e2f1ec' : '#fffdf8'} stroke={on ? TEAL : 'rgba(60,45,20,0.2)'} strokeWidth={on ? 3 + 2 * g : 2} />
						<Sx x={x + w / 2} y={y + 36} text={m} size={26} color={on ? TEAL : done ? INK_SOFT : '#b4ad9f'} anchor="middle" hand weight={700} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- dissolved-ion counter ----------
export const Counter: React.FC<{x: number; y: number; w?: number; h?: number; frac: (f: number) => number; color: string; at: number; o?: number; label?: string}> = ({x, y, w = 180, h = 230, frac, color, at, o = 1, label}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const fr = clamp01(frac(f));
	const bh = (h - 20) * fr;
	return (
		<g opacity={v}>
			<path d={`M${x},${y} L${x},${y + h} L${x + w},${y + h} L${x + w},${y}`} fill="#f2f7fa" stroke={INK_SOFT} strokeWidth={4} strokeLinejoin="round" />
			<rect x={x + w * 0.3} y={y + h - 10 - bh} width={w * 0.4} height={Math.max(bh, fr > 0 ? 3 : 0)} rx={6} fill={color} />
			{label ? <Sx x={x + w / 2} y={y + h + 42} text={label} size={26} color={INK} anchor="middle" hand weight={700} at={-1000} /> : null}
		</g>
	);
};

// ---------- digestion zoom contents ----------
type Cr = {u: number; v: number; s: number; big: boolean; ions: number};
const CRYS: Cr[] = (() => {
	const r = rng(11);
	return Array.from({length: 26}, (_, i) => {
		const big = i % 3 === 0;
		return {u: -0.75 + r() * 1.5, v: -0.6 + r() * 0.75, s: big ? 15 + r() * 6 : 6 + r() * 3, big, ions: big ? (i % 2) : 2};
	});
})();
/** grow 0..1: small crystals dissolve, large grow; mesh 0..1: the dotted paper line appears and small crystals fall through; ions 0..1 shows stuck ions. */
export const Crystals: React.FC<{cx: number; cy: number; r: number; grow: number; mesh: number; ions: number}> = ({cx, cy, r, grow, mesh, ions}) => {
	const my = cy + r * 0.32;
	return (
		<g>
			<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill="#eef4f7" />
			{mesh > 0.01 ? <line x1={cx - r} x2={cx + r} y1={my} y2={my} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 14" opacity={mesh} /> : null}
			{mesh > 0.01 ? <Sx x={cx + r * 0.55} y={my + 34} text="filter paper" size={22} color={INK_SOFT} anchor="middle" weight={600} at={-1000} opacity={mesh} /> : null}
			{CRYS.map((c, i) => {
				const sz = c.big ? c.s * (1 + 0.45 * grow) : c.s * (1 - 0.55 * grow);
				if (sz < 1) return null;
				const x = cx + c.u * r;
				const restY = c.big ? my - sz : cy + r * 0.9;
				const y0 = cy + c.v * r;
				const y = lerp(y0, restY, smooth(clamp01(mesh * (c.big ? 1 : 1.1))));
				return (
					<g key={i}>
						<rect x={x - sz} y={y - sz} width={2 * sz} height={2 * sz} rx={2} transform={`rotate(${(i * 37) % 90},${x},${y})`} fill="#fbfbf8" stroke="#8a857a" strokeWidth={2} />
						{ions > 0.01 ? Array.from({length: c.ions}, (_, k) => <circle key={k} cx={x + (k ? -1 : 1) * (sz + 5)} cy={y - sz * 0.4} r={5} fill={GREY_DOT} opacity={ions} />) : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- wash drops ----------
/** Inside a lens: crystals on a paper line; drops fall from the top and carry grey ions down through the paper (washed), or the ions stay (unwashed). */
export const WashDrops: React.FC<{cx: number; cy: number; r: number; at: number; washed?: boolean; labelAt?: number}> = ({cx, cy, r, at, washed = true, labelAt}) => {
	const f = useCurrentFrame();
	const py = cy + r * 0.35;
	const xs = [-0.5, -0.2, 0.1, 0.4];
	const off = (k: number) => (washed ? smooth(clamp01((f - at - k * 22) / 40)) : 0);
	return (
		<g>
			<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill="#eef4f7" />
			<line x1={cx - r} x2={cx + r} y1={py} y2={py} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 12" />
			{xs.map((u, k) => {
				const x = cx + u * r;
				const d = off(k);
				const dropY = lerp(cy - r, py + r * 0.5, clamp01((f - at - k * 22) / 40));
				return (
					<g key={k}>
						<rect x={x - 16} y={py - 32} width={32} height={30} rx={3} fill="#fbfbf8" stroke="#8a857a" strokeWidth={2} />
						{washed && f >= at + k * 22 && f < at + k * 22 + 46 ? <path d={`M${x},${dropY - 16} q11,14 0,22 q-11,-8 0,-22`} fill="#bcdcf0" stroke="#6aa6c8" strokeWidth={2} /> : null}
						<circle cx={x + 22} cy={lerp(py - 22, py + r * 0.55, d)} r={8} fill={GREY_DOT} />
						<circle cx={x - 22} cy={lerp(py - 10, py + r * 0.5, d)} r={8} fill={GREY_DOT} />
						{labelAt !== undefined && (k === 0 || k === 3) ? <Sx x={x + (k === 0 ? 22 : -22)} y={lerp(py - 40, py + r * 0.55 - 18, d)} text={k === 0 ? 'Cl^{−}' : 'Ba^{2+}'} size={22} color={INK_SOFT} anchor="middle" weight={700} at={labelAt} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- requirement chip ----------
export const REQ = ['1. almost all the ion in the solid', '2. known formula', '3. only that solid: clean and dry'];
export const ReqChip: React.FC<{n: number; x: number; y: number; at: number; out?: number; glow?: number; size?: number; dim?: number}> = ({n, x, y, at, out, glow, size = 34, dim}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const g = glow === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - glow) / 50) * Math.PI));
	const d = dim === undefined ? 0 : prog(f, dim, 12);
	const w = mw(REQ[n], size, true, 700) * 1.04 + 44;
	return (
		<g opacity={v * (1 - 0.55 * d)}>
			{g > 0.01 ? <rect x={x - 10} y={y - 10} width={w + 20} height={size + 46} rx={26} fill="#f6d77a" opacity={0.45 * g} /> : null}
			<rect x={x} y={y} width={w} height={size + 26} rx={20} fill="#fffdf8" stroke={TEAL} strokeWidth={3 + 2 * g} />
			<Sx x={x + 20} y={y + size + 4} text={REQ[n]} size={size} color={TEAL} hand weight={700} at={-1000} />
		</g>
	);
};

// ---------- balance display overlay ----------
export const BalRead: React.FC<{p: PDef; x: number; y: number; h: number; text: (f: number) => string; at: number; out?: number}> = ({p, x, y, h, text, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const [dx, dy] = natPt(p, x, y, h, FEAT.display[0], FEAT.display[1]);
	const k = h / p.box[3];
	const w = 360 * k, hh = 120 * k;
	return (
		<g opacity={v}>
			<rect x={dx - w / 2} y={dy - hh / 2} width={w} height={hh} rx={6} fill="#24302c" />
			<Sx x={dx + w / 2 - 8} y={dy + hh * 0.3} text={text(f)} size={hh * 0.72} color="#9fe3b0" anchor="end" weight={700} at={-1000} />
		</g>
	);
};
export {DrawPath, Fade, INK, NAVY};
