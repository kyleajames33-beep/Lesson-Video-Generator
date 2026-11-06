// P8-02 Biology coded parts (lesson-local). Real objects stay painted plates; code adds only what the plates leave out:
// the bubble and its mm numerals, the water flow arrows, seal rings, air lines and blade blur, a water tint, count marks,
// the method step rail, cards and tables. Nothing here draws people, hands or faces.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, CARD, DrawPath, EDGE, GREYT, INK, INK_SOFT, PlateB, Sx, TEAL, VIOLET, mw, pbPt, prog, pulse, smooth, vis, wrapM} from '../bio-m8-b07/parts';
import {FAN_HUB, PL, POT, WATCH_HUB} from './assets';
import {STEPS} from './common';

export * from '../bio-m8-b07/parts';
export type P2 = [number, number];
export const WATER = '#3c85b6';
export const TERRA = '#b5502b';
export const GREENC = '#2f8a5b';

// ---------- potometer geometry ----------
export const potK = (w: number) => w / (PL.pot.box[2] - PL.pot.box[0]);
export const potPt = (cx: number, cy: number, w: number) => pbPt(PL.pot, cx, cy, w);
/** Natural x of a scale reading (mm from the beaker end). Below 0 it runs on towards the bend. */
export const mmNat = (mm: number) => {
	const t = POT.ticks;
	if (mm <= 0) return t[0] + -mm * 7;
	if (mm >= 70) return t[7] - (mm - 70) * 7.3;
	const i = Math.floor(mm / 10), u = mm / 10 - i;
	return t[i] + (t[i + 1] - t[i]) * u;
};
/** A frame function for the bubble: piecewise-linear keys [frame, mm]. */
export const mmKeys = (keys: [number, number][]) => (f: number) => {
	if (f <= keys[0][0]) return keys[0][1];
	for (let i = 1; i < keys.length; i++) if (f <= keys[i][0]) { const [a, va] = keys[i - 1], [b, vb] = keys[i]; return va + ((vb - va) * (f - a)) / Math.max(1, b - a); }
	return keys[keys.length - 1][1];
};
export type PotProps = {cx: number; cy: number; w: number; o?: number; mm?: (f: number) => number; bubbleAt?: number; bubbleOut?: number; nums?: number; flow?: {at: number; out?: number; speed?: number}; ends?: {a: number; b: number; at: number; out?: number; label?: string}; seals?: number; sealsOut?: number; bubbleGlow?: number; plate?: boolean; numSize?: number};
/** The painted potometer with its coded overlays. */
export const Pot: React.FC<PotProps> = ({cx, cy, w, o = 1, mm, bubbleAt = -1000, bubbleOut, nums, flow, ends, seals, sealsOut, bubbleGlow, plate = true, numSize = 26}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const k = potK(w);
	const P = potPt(cx, cy, w);
	const [, capY] = P(0, POT.capY);
	const nv = nums === undefined ? 0 : prog(f, nums, 14);
	const bv = vis(f, bubbleAt, bubbleOut, 10);
	const m = mm ? mm(f) : 0;
	const [bx] = P(mmNat(m), 0);
	const rx = Math.max(10, 15 * k), ry = Math.max(5, 7.2 * k);
	const glow = bubbleGlow === undefined ? 0 : pulse(f, bubbleGlow, 40);
	const fv = flow ? vis(f, flow.at, flow.out, 12) : 0;
	const sv = seals === undefined ? 0 : vis(f, seals, sealsOut, 12);
	const ev = ends ? vis(f, ends.at, ends.out, 12) : 0;
	// flow chevrons along the water path
	const chev: React.ReactNode[] = [];
	if (fv > 0.01 && flow) {
		const pts = POT.flow.map(p => P(p[0], p[1]));
		const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
		const total = seg.reduce((a, b) => a + b, 0);
		const step = 70;
		const off = ((f - flow.at) * (flow.speed ?? 1.2)) % step;
		for (let d = off; d < total; d += step) {
			let r = d, i = 0;
			while (i < seg.length - 1 && r > seg[i]) { r -= seg[i]; i++; }
			const a = pts[i], b = pts[i + 1];
			const u = r / seg[i];
			const x = a[0] + (b[0] - a[0]) * u, y = a[1] + (b[1] - a[1]) * u;
			const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
			const h = 11;
			chev.push(<path key={d} d={`M${x - h * Math.cos(ang - 0.7)},${y - h * Math.sin(ang - 0.7)} L${x},${y} L${x - h * Math.cos(ang + 0.7)},${y - h * Math.sin(ang + 0.7)}`} fill="none" stroke={WATER} strokeWidth={4} strokeLinecap="round" opacity={0.9} />);
		}
	}
	return (
		<g opacity={o}>
			{plate ? <PlateB p={PL.pot} cx={cx} cy={cy} w={w} /> : null}
			{nv > 0.01 ? <g opacity={nv}>{POT.ticks.map((t, i) => { const [x] = P(t, 0); return <Sx key={i} x={x} y={capY + 14 * k + numSize + 2} text={`${i * 10}`} size={numSize} color={INK} anchor="middle" weight={700} at={-1000} />; })}</g> : null}
			{chev}
			{sv > 0.01 ? <g opacity={sv}>
				{[POT.bung, POT.arm, POT.resJoint].map((p, i) => { const [x, y] = P(p[0], p[1]); return <ellipse key={i} cx={x} cy={y} rx={i === 0 ? 46 * k + 8 : 18 * k + 8} ry={i === 0 ? 14 * k + 6 : 18 * k + 8} fill="none" stroke={AMBER} strokeWidth={5} />; })}
			</g> : null}
			{ev > 0.01 && ends ? <g opacity={ev}>
				{[ends.a, ends.b].map((v, i) => { const [x] = P(mmNat(v), 0); return <line key={i} x1={x} x2={x} y1={capY - 18 * k - 14} y2={capY + 16} stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />; })}
				{ends.label ? (() => { const [xa] = P(mmNat(ends.a), 0), [xb] = P(mmNat(ends.b), 0); return <g><path d={`M${xa},${capY - 18 * k - 24} L${xa},${capY - 18 * k - 40} L${xb},${capY - 18 * k - 40} L${xb},${capY - 18 * k - 24}`} fill="none" stroke={AMBER_INK} strokeWidth={4} /><Sx x={(xa + xb) / 2} y={capY - 18 * k - 52} text={ends.label} size={36} color={AMBER_INK} anchor="middle" hand at={-1000} /></g>; })() : null}
			</g> : null}
			{bv > 0.01 ? <g opacity={bv}>
				{glow > 0.01 ? <ellipse cx={bx} cy={capY} rx={rx + 16} ry={ry + 14} fill={AMBER} opacity={0.4 * glow} /> : null}
				<ellipse cx={bx} cy={capY} rx={rx} ry={ry} fill="#f7fcff" stroke="#2f3d48" strokeWidth={2.2} />
				<ellipse cx={bx - rx * 0.35} cy={capY - ry * 0.35} rx={rx * 0.3} ry={ry * 0.28} fill="#ffffff" />
				<path d={`M${bx - 9},${capY - ry - 26} L${bx + 9},${capY - ry - 26} L${bx},${capY - ry - 10} Z`} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} />
			</g> : null}
		</g>
	);
};
export const bubbleX = (cx: number, cy: number, w: number, mm: number) => potPt(cx, cy, w)(mmNat(mm), POT.capY);

// ---------- crops of the potometer plate (uniform scale, crop by position) ----------
/** The shoot (leaves, bung and tube) from the potometer plate; (x, y) is the screen point of natural (420, 450). */
export const ShootCrop: React.FC<{x: number; y: number; k: number; id: string; o?: number; tube?: boolean}> = ({x, y, k, id, o = 1, tube = true}) => {
	if (o <= 0.01) return null;
	const nat = PL.pot.nat;
	const X = (u: number) => x + (u - 420) * k, Y = (v: number) => y + (v - 450) * k;
	const r = (b: [number, number, number, number]) => <rect x={X(b[0])} y={Y(b[1])} width={(b[2] - b[0]) * k} height={(b[3] - b[1]) * k} />;
	return (
		<g opacity={o}>
			<defs><clipPath id={id}>{r(POT.shootA)}{tube ? r(POT.shootB) : null}</clipPath></defs>
			<image href={staticFile(PL.pot.src)} x={X(0)} y={Y(0)} width={nat[0] * k} height={nat[1] * k} clipPath={`url(#${id})`} />
		</g>
	);
};
export const shootPt = (x: number, y: number, k: number) => (u: number, v: number): P2 => [x + (u - 420) * k, y + (v - 450) * k];
/** One leaf of the shoot (natural box POT.leafCrop), centred at (cx, cy) with width w. */
export const LeafCrop: React.FC<{cx: number; cy: number; w: number; id: string; o?: number}> = ({cx, cy, w, id, o = 1}) => {
	if (o <= 0.01) return null;
	const b = POT.leafCrop, k = w / (b[2] - b[0]);
	const x0 = cx - w / 2 - b[0] * k, y0 = cy - ((b[3] - b[1]) * k) / 2 - b[1] * k;
	return (
		<g opacity={o}>
			<defs><clipPath id={id}><rect x={cx - w / 2} y={cy - ((b[3] - b[1]) * k) / 2} width={w} height={(b[3] - b[1]) * k} /></clipPath></defs>
			<image href={staticFile(PL.pot.src)} x={x0} y={y0} width={PL.pot.nat[0] * k} height={PL.pot.nat[1] * k} clipPath={`url(#${id})`} />
		</g>
	);
};

// ---------- fan ----------
export const fanK = (h: number) => h / (PL.fan.box[3] - PL.fan.box[1]);
/** The painted fan; `on` starts a faint coded blade blur and air lines towards `to`. */
export const Fan: React.FC<{cx: number; cy: number; h: number; on?: number; off?: number; to?: P2; o?: number; grey?: number; lines?: number}> = ({cx, cy, h, on, off, to, o = 1, grey, lines = 3}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const k = fanK(h);
	const w = (PL.fan.box[2] - PL.fan.box[0]) * k;
	const [hx, hy] = pbPt(PL.fan, cx, cy, w)(FAN_HUB[0], FAN_HUB[1]);
	const run = on === undefined ? 0 : vis(f, on, off, 12);
	const gr = grey === undefined ? 0 : prog(f, grey, 14);
	const R = 300 * k;
	return (
		<g opacity={o * (1 - 0.55 * gr)}>
			<PlateB p={PL.fan} cx={cx} cy={cy} w={w} />
			{run > 0.01 ? <g opacity={run}>
				{[0, 1, 2].map(i => { const a = f * 0.55 + (i * Math.PI * 2) / 3; return <path key={i} d={`M${hx},${hy} L${hx + R * Math.cos(a)},${hy + R * 1.15 * Math.sin(a)} A${R},${R * 1.15} 0 0 1 ${hx + R * Math.cos(a + 0.7)},${hy + R * 1.15 * Math.sin(a + 0.7)} Z`} fill="#cfd8e0" opacity={0.35} />; })}
				{to ? Array.from({length: lines}, (_, i) => {
					const y0 = hy + (i - (lines - 1) / 2) * 60 * Math.max(0.6, k * 2.2);
					const x0 = hx + R * 0.9, x1 = to[0], y1 = to[1] + (i - (lines - 1) / 2) * 50;
					const pts = Array.from({length: 11}, (_, j) => { const t = j / 10; return [x0 + (x1 - x0) * t, y0 + (y1 - y0) * t + Math.sin(t * 9 + f / 6 + i) * 10]; });
					return <path key={'a' + i} d={'M' + pts.map(p => p.join(',')).join(' L')} fill="none" stroke={VIOLET} strokeWidth={4} strokeDasharray="20 14" strokeDashoffset={-f * 2.4} strokeLinecap="round" opacity={0.75} />;
				}) : null}
			</g> : null}
		</g>
	);
};

// ---------- stopwatch arc ----------
/** The painted stopwatch with a coded amber arc sweeping the dial from `at` over `dur` frames (sped-up time). */
export const Watch: React.FC<{cx: number; cy: number; h: number; at?: number; dur?: number; o?: number; label?: string}> = ({cx, cy, h, at, dur = 60, o = 1, label}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const w = (h * (PL.watch.box[2] - PL.watch.box[0])) / (PL.watch.box[3] - PL.watch.box[1]);
	const [hx, hy] = pbPt(PL.watch, cx, cy, w)(WATCH_HUB[0], WATCH_HUB[1]);
	const R = (360 * w) / (PL.watch.box[2] - PL.watch.box[0]);
	const t = at === undefined ? 0 : smooth(prog(f, at, dur));
	const a1 = -Math.PI / 2 + t * Math.PI * 2 * 0.999;
	return (
		<g opacity={o}>
			<PlateB p={PL.watch} cx={cx} cy={cy} w={w} />
			{t > 0.005 ? <path d={`M${hx},${hy - R} A${R},${R} 0 ${t > 0.5 ? 1 : 0} 1 ${hx + R * Math.cos(a1)},${hy + R * Math.sin(a1)}`} fill="none" stroke={AMBER} strokeWidth={Math.max(6, R * 0.12)} strokeLinecap="round" opacity={0.85} /> : null}
			{label ? <Sx x={cx} y={cy + h / 2 + 36} text={label} size={30} color={INK} anchor="middle" hand at={at ?? -1000} /> : null}
		</g>
	);
};

// ---------- step rail ----------
export const StepRail: React.FC<{cur: number; y?: number}> = ({cur, y = 1004}) => {
	let x = 96;
	const size = 28;
	return (
		<g>
			{STEPS.map((s, i) => {
				const w = mw(s, size, true, 700) + 34;
				const on = i === cur;
				const node = (
					<g key={s}>
						<rect x={x} y={y} width={w} height={46} rx={23} fill={on ? BLUE : CARD} stroke={on ? BLUE : EDGE} strokeWidth={2.5} />
						<Sx x={x + w / 2} y={y + 32} text={s} size={size} color={on ? CARD : GREYT} anchor="middle" hand weight={700} at={-1000} />
					</g>
				);
				x += w + 14;
				return node;
			})}
		</g>
	);
};

// ---------- small cards ----------
export type Item = {t: string; at: number; color?: string; size?: number; sub?: string};
/** A card listing items: each shows faint from the first frame and lights on its cue (the newest gets an amber marker). */
export const ItemCard: React.FC<{x: number; y: number; w: number; title?: string; items: Item[]; gap?: number; size?: number; o?: number; faint?: number; titleColor?: string; h?: number}> = ({x, y, w, title, items, gap = 18, size = 38, o = 1, faint = 0.4, titleColor = BLUE, h}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	let yy = y + (title ? 70 : 30);
	const live = items.filter(it => f >= it.at);
	const newest = live.length ? live[live.length - 1] : undefined;
	const rows = items.map((it, i) => {
		const sz = it.size ?? size;
		const lines = wrapM(it.t, sz, w - 64, true, 700);
		const sub = it.sub ? wrapM(it.sub, 30, w - 64, true, 700) : [];
		const L = Math.round(sz * 1.1);
		const y0 = yy + sz * 0.8;
		const hh = lines.length * L + sub.length * 34;
		yy += hh + gap;
		const lit = prog(f, it.at, 12);
		return (
			<g key={i} opacity={faint + (1 - faint) * lit}>
				{it === newest ? <rect x={x + 16} y={y0 - sz * 0.8} width={7} height={hh - 6} rx={3} fill={AMBER} /> : null}
				{lines.map((ln, k) => <Sx key={k} x={x + 36} y={y0 + k * L} text={ln} size={sz} color={it.color ?? INK} hand weight={700} at={-1000} />)}
				{sub.map((ln, k) => <Sx key={'s' + k} x={x + 36} y={y0 + lines.length * L + k * 34} text={ln} size={30} color={INK_SOFT} hand weight={700} at={-1000} />)}
			</g>
		);
	});
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h ?? yy - y + 10} rx={20} fill={CARD} stroke={titleColor} strokeWidth={3.5} />
			{title ? <Sx x={x + 24} y={y + 48} text={title} size={40} color={titleColor} hand weight={700} at={-1000} /> : null}
			{rows}
		</g>
	);
};
/** A coded water tint (a shallow basin, abstract). */
export const WaterTint: React.FC<{x: number; y: number; w: number; h: number; o?: number}> = ({x, y, w, h, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${x},${y} L${x + w},${y} L${x + w - 20},${y + h} L${x + 20},${y + h} Z`} fill="#cfe5f2" stroke="#7fb2cf" strokeWidth={3} opacity={0.85} />
		<path d={`M${x + 10},${y + 14} q${w / 8},-8 ${w / 4},0 t${w / 4},0 t${w / 4},0 t${w / 4 - 20},0`} fill="none" stroke="#9cc9e2" strokeWidth={3} />
	</g>
));
/** Count marks: numbered dots placed on given screen points, one by one from `at` every `step` frames. */
export const CountMarks: React.FC<{pts: P2[]; at: number; step?: number; r?: number; out?: number; color?: string}> = ({pts, at, step = 2, r = 16, out, color = AMBER_INK}) => {
	const f = useCurrentFrame();
	const v = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{pts.map(([x, y], i) => {
				const p = prog(f, at + i * step, 6);
				if (p <= 0.01) return null;
				return <g key={i} opacity={p}><circle cx={x} cy={y} r={r} fill={color} stroke={CARD} strokeWidth={3} /><Sx x={x} y={y + 9} text={`${i + 1}`} size={26} color={CARD} anchor="middle" weight={800} at={-1000} /></g>;
			})}
		</g>
	);
};
export {TEAL, GREYT, INK_SOFT, DrawPath};
