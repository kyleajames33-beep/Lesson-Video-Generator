// Drawing parts for C15 (Qsp, precipitation prediction, the common ion effect). Everything shared with C14 (board,
// ions, swarm lens, ICE table, algebra lines, log line with K and Q markers, check ruler, countdown) comes from the
// C14 parts. New here, ported as ideas only from the legacy MixDiluteDiagram and CommonIonDiagram (logic, not code):
// two beakers tip into one and the same ions spread through twice the volume; crowded ions lock into a solid that
// sinks until Qsp falls back to Ksp. The legacy QGauge Q / (Q + K) mapping is not used: the C8 log line carries Q.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Fade, INK, INK_SOFT, LIon, LensFrame, PicH, Sx, drift, picW, platePt, smooth} from '../chem-m5-c14/parts';
import {prog, rng} from '../../kit';
import {UNSAT, BASO4, have} from './assets';
import type {PDef} from './assets';
import {CAT_INK, WHITE_INK} from './common';

export * from '../chem-m5-c14/parts';
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// ---------- a lens of free ions that drift but never lock (urine) ----------
export type FreeIon = {ion: string; u: number; v: number; ph: number; at: number; grey?: number};
export const FreeLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; ions: FreeIon[]; title?: string; titleAt?: number; scale?: number; amp?: number; tint?: string}> = ({cx, cy, r, at, out, ions, title, titleAt, scale = 0.85, amp = 14, tint = '#fbf6e6'}) => {
	const f = useCurrentFrame();
	return (
		<LensFrame cx={cx} cy={cy} r={r} at={at} out={out} title={title} titleAt={titleAt}>
			<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill={tint} />
			{ions.map((d, i) => {
				const o = prog(f, d.at, 14);
				if (o <= 0.01) return null;
				const [dx, dy] = drift(f, d.ph, amp);
				return <LIon key={i} x={cx + d.u * r + dx} y={cy + d.v * r + dy} ion={d.ion} o={o} grey={d.grey ?? 0} rot={d.ph} scale={scale} />;
			})}
		</LensFrame>
	);
};

// ---------- crowded ions lock into a solid (Qsp above Ksp) ----------
const PAIR_SLOTS = (() => {
	const rr = rng(41);
	const out: {u: number; v: number; ph: number}[] = [];
	const order = [6, 1, 11, 3, 8, 13, 0, 9, 4, 14, 2, 12, 7, 5, 10];
	for (const k of order) out.push({u: -0.62 + (k % 5) * 0.31 + (rr() - 0.5) * 0.1, v: -0.62 + Math.floor(k / 5) * 0.36 + (rr() - 0.5) * 0.08, ph: rr() * 6.28});
	return out;
})();
/** Pairs of free ions; `lock` pairs appear at lock.appear (crowding) and gather into a white solid at lock.at. */
export const QspLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; cat: string; an: string; n: (f: number) => number; lock?: {appear: number; at: number; n: number; clearAt?: number}; scale?: number; title?: string; titleAt?: number}> = ({cx, cy, r, at, out, cat, an, n, lock, scale = 0.7, title, titleAt}) => {
	const f = useCurrentFrame();
	const els: React.ReactNode[] = [];
	const nl = lock ? lock.n : 0;
	const nv = n(f);
	const cl = {x: cx, y: cy + r * 0.52};
	const solidP = lock ? prog(f, lock.at + 46, 20) * (lock.clearAt === undefined ? 1 : 1 - prog(f, lock.clearAt, 16)) : 0;
	const sink = lock ? smooth(clamp01((f - lock.at - 66) / 40)) * r * 0.16 : 0;
	PAIR_SLOTS.slice(0, 7).forEach((d, i) => {
		const isLock = i < nl;
		const o = isLock ? prog(f, (lock as {appear: number}).appear + i * 4, 12) * (1 - prog(f, (lock as {at: number}).at + 46, 20)) : clamp01(nv - (i - nl));
		if (o <= 0.01) return;
		const u = isLock ? smooth(clamp01((f - (lock as {at: number}).at - i * 4) / 36)) : 0;
		const [dx, dy] = drift(f, d.ph, 9 * (1 - u));
		const cxp = cx + d.u * r + dx, cyp = cy + d.v * r + dy;
		const tx = cl.x + ((i % 3) - 1) * 34 * scale, ty = cl.y - Math.floor(i / 3) * 30 * scale + sink;
		const ax = cxp + 66 * scale, ay = cyp + 30 * scale;
		els.push(<LIon key={'c' + i} x={cxp + (tx - 14 - cxp) * u} y={cyp + (ty - cyp) * u} ion={cat} shell={1 - u} scale={scale} o={o} rot={d.ph} />);
		els.push(<LIon key={'a' + i} x={ax + (tx + 14 - ax) * u} y={ay + (ty - ay) * u} ion={an} shell={1 - u} scale={scale} o={o} rot={d.ph + 1} />);
	});
	if (lock && solidP > 0.01) {
		const rr = rng(9);
		for (let k = 0; k < 14; k++) {
			const sx = cl.x + (rr() - 0.5) * 120 * scale, sy = cl.y + sink + (rr() - 0.5) * 40 * scale, sz = 12 + rr() * 10;
			els.push(<rect key={'s' + k} x={sx - sz / 2} y={sy - sz / 2} width={sz} height={sz} rx={3} fill="#ffffff" stroke="#9aa7b0" strokeWidth={1.8} opacity={solidP} transform={`rotate(${rr() * 90},${sx},${sy})`} />);
		}
	}
	return (
		<LensFrame cx={cx} cy={cy} r={r} at={at} out={out} title={title} titleAt={titleAt}>
			<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill="#f1f7fb" />
			{els}
		</LensFrame>
	);
};

// ---------- a coded beaker (the mixed beaker, thumbnails) ----------
export const CodeBeaker: React.FC<{x: number; y: number; w: number; h: number; level: number; at?: number; out?: number; ticks?: number[]; liquid?: string}> = ({x, y, w, h, level, at = -100, out, ticks = [], liquid = '#cfe6f5'}) => {
	const lt = y + h - 8 - (h - 22) * clamp01(level);
	return (
		<Fade at={at} out={out}>
			{level > 0.005 ? <path d={`M${x + 7},${lt} L${x + w - 7},${lt} L${x + w - 7},${y + h - 18} Q${x + w - 7},${y + h - 6} ${x + w - 19},${y + h - 6} L${x + 19},${y + h - 6} Q${x + 7},${y + h - 6} ${x + 7},${y + h - 18} Z`} fill={liquid} opacity={0.85} /> : null}
			<path d={`M${x - 10},${y} L${x},${y + 8} L${x},${y + h - 16} Q${x},${y + h} ${x + 16},${y + h} L${x + w - 16},${y + h} Q${x + w},${y + h} ${x + w},${y + h - 16} L${x + w},${y}`} fill="#eef5fa" fillOpacity={0.35} stroke={INK} strokeWidth={4.5} strokeLinejoin="round" />
			{ticks.map((t, i) => <path key={i} d={`M${x + w - 34},${y + h - 8 - (h - 22) * t} L${x + w},${y + h - 8 - (h - 22) * t}`} stroke={INK_SOFT} strokeWidth={3} />)}
		</Fade>
	);
};

// ---------- the PbSO4 precipitate: the painted tube once delivered, else white specks settling in the mixed beaker ----------
export const PptBeaker: React.FC<{x: number; y: number; h: number; at: number; label: string}> = ({x, y, h, at, label}) => {
	const f = useCurrentFrame();
	if (have(BASO4)) {
		return (
			<Fade at={at}>
				<PicH p={BASO4} x={x} y={y} h={h} />
				<Sx x={x + picW(BASO4, h) / 2} y={y + h + 40} text={label} size={30} color={WHITE_INK} anchor="middle" hand at={at} />
			</Fade>
		);
	}
	const p: PDef = UNSAT;
	const w = picW(p, h);
	const [x0] = platePt(p, x, y, h, 0.24, 0), [x1] = platePt(p, x, y, h, 0.76, 0);
	const surf = platePt(p, x, y, h, 0.5, 0.33)[1], floor = platePt(p, x, y, h, 0.5, 0.84)[1];
	const rr = rng(13);
	const specks = Array.from({length: 40}, () => ({x: x0 + rr() * (x1 - x0), y0: surf + rr() * (floor - surf) * 0.7, d: rr() * 40, sz: 4 + rr() * 5, fl: floor - rr() * 16}));
	const pile = prog(f, at + 40, 60);
	return (
		<Fade at={at}>
			<PicH p={p} x={x} y={y} h={h} />
			{specks.map((s, i) => {
				const t = clamp01((f - at - s.d) / 70);
				if (f < at + s.d) return null;
				const yy = s.y0 + (s.fl - s.y0) * smooth(t);
				return <rect key={i} x={s.x - s.sz / 2} y={yy - s.sz / 2} width={s.sz} height={s.sz} rx={1.5} fill="#ffffff" stroke="#9aa7b0" strokeWidth={1.2} opacity={prog(f, at + s.d, 10)} />;
			})}
			<ellipse cx={(x0 + x1) / 2} cy={floor - 4} rx={(x1 - x0) * 0.42 * pile} ry={10 * pile} fill="#ffffff" stroke="#9aa7b0" strokeWidth={1.6} opacity={pile} />
			<Sx x={x + w / 2} y={y + h + 40} text={label} size={30} color={WHITE_INK} anchor="middle" hand at={at + 6} />
		</Fade>
	);
};

// ---------- a box of ions that grows to twice the volume (mixing spreads every ion) ----------
export const IonBox: React.FC<{x: number; y: number; w: number; h: number; grow: number; at: number; ion: string; n?: number; scale?: number}> = ({x, y, w, h, grow, at, ion, n = 8, scale = 0.7}) => {
	const f = useCurrentFrame();
	const H = h * (1 + clamp01(grow));
	const cols = 4, rows = Math.ceil(n / cols);
	return (
		<Fade at={at}>
			<rect x={x} y={y} width={w} height={H} rx={14} fill="#eef6fb" stroke={INK} strokeWidth={4} />
			{Array.from({length: n}, (_, i) => {
				const c = i % cols, r = Math.floor(i / cols);
				const [dx, dy] = drift(f, i * 1.7, 6);
				return <LIon key={i} x={x + (c + 0.5) * (w / cols) + dx} y={y + (r + 0.5) * (H / rows) + dy} ion={ion} scale={scale} rot={i} />;
			})}
		</Fade>
	);
};

export {CAT_INK};
