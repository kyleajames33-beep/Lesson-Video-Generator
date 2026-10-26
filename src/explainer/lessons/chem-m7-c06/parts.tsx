// M7 C06 board pieces on the C01 molecule kit and C04a's strip parts (CT, RxArrow, Mol2D are imported, not copied).
// README for Claude (C07 imports EqRow, eqLay, Tally, Plate, ptOn, Leader):
// - ptOn: the screen point of a plate pixel (u, v) for a plate drawn centred on cx, top at `top`, height h.
// - Plate: a plate that can cross-fade in place to its matched partner (same alpha box), uniform scale only.
// - Leader: a pen line from a label to a named part of a plate, with a dot on the part.
// - EqRow / eqLay: a condensed equation strip laid out from its terms (left terms, arrow with condition chips, right
//   terms); a term can carry a red ring on part of its text (the OH) and a thin grey second-product box.
// - Tally: the atom tally under a strip (element, left count, right count, tick); counts can change on cue.
// - Reflux (vapour return): wisps rise from the flask into the condenser and droplets fall back. Drips: droplets falling
//   into a collecting flask. Bubbles: small rising bubbles in a region, slowing to a stop.
// - ColFrame: a route board column. RCard: a judging card whose spoken line is bright. Fill: a vertical fill gauge.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, PicH, Sx, picW} from '../chem-m6-c01/parts';
import type {PDef} from '../chem-m6-c01/assets';
import {CARDC, NAVY} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, RxArrow, ctW, vis} from '../chem-m7-c04a/parts';
import type {Cond} from '../chem-m7-c04a/parts';

export const RED = '#c4432f', GREY = '#8a847a', BOXC = '#9a948a';

// ---------- plates ----------
export const ptOn = (p: PDef, cx: number, top: number, h: number, u: number, v: number): V2 => {
	const k = h / p.box[3];
	return [cx - picW(p, h) / 2 + (u - p.box[0]) * k, top + (v - p.box[1]) * k];
};
export const Plate: React.FC<{p: PDef; to?: PDef; swap?: number; cx: number; top: number; h: number; at?: number; out?: number; o?: number; swapDur?: number}> = ({p, to, swap, cx, top, h, at = -1000, out, o = 1, swapDur = 24}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const s = swap === undefined || !to ? 0 : prog(f, swap, swapDur);
	return (
		<g opacity={v}>
			{s < 1 ? <PicH p={p} x={cx - picW(p, h) / 2} y={top} h={h} o={1 - s} /> : null}
			{to && s > 0 ? <PicH p={to} x={cx - picW(to, h) / 2} y={top} h={h} o={s} /> : null}
		</g>
	);
};
/** Pen leader from a (label end) to b (the named part). */
export const Leader: React.FC<{a: V2; b: V2; at: number; out?: number; o?: number; color?: string}> = ({a, b, at, out, o = 1, color = INK_SOFT}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={12} color={color} width={3} />
			<circle cx={b[0]} cy={b[1]} r={7 * prog(f, at + 10, 6)} fill={color} />
		</g>
	);
};
/** A drawn ring (ellipse) round a point. */
export const RingAt: React.FC<{c: V2; rx: number; ry: number; at: number; out?: number; o?: number; color?: string; width?: number}> = ({c, rx, ry, at, out, o = 1, color = RED, width = 4}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	return <g opacity={v}><DrawPath d={`M${c[0]},${c[1] - ry} A${rx},${ry} 0 1 1 ${c[0] - 1},${c[1] - ry}`} at={at} dur={16} color={color} width={width} /></g>;
};

// ---------- condensed equation strip ----------
export type ET = {t: string; at: number; color?: string; box?: number; ring?: string; ringAt?: number; ringColor?: string; o?: number; out?: number; size?: number};
export const eqLay = (left: ET[], right: ET[], size: number, len: number, cx: number) => {
	const gap = size * 0.3, ag = size * 0.45;
	const wl = left.map(t => ctW(t.t, t.size ?? size)), wr = right.map(t => ctW(t.t, t.size ?? size));
	const L = wl.reduce((s, w) => s + w, 0) + gap * Math.max(0, left.length - 1);
	const R = wr.reduce((s, w) => s + w, 0) + gap * Math.max(0, right.length - 1);
	const total = L + 2 * ag + len + R;
	const x0 = cx - total / 2;
	const lx: number[] = [];
	let x = x0;
	wl.forEach(w => { lx.push(x); x += w + gap; });
	const a1 = x0 + L + ag, a2 = a1 + len;
	const rx: number[] = [];
	x = a2 + ag;
	wr.forEach(w => { rx.push(x); x += w + gap; });
	return {lx, rx, wl, wr, a1, a2, x0, x1: x0 + total, lc: lx.map((v, i) => v + wl[i] / 2), rc: rx.map((v, i) => v + wr[i] / 2)};
};
/** x span of a substring inside a term drawn at x. */
export const subSpan = (t: string, sub: string, x: number, size: number): [number, number] => {
	const i = t.lastIndexOf(sub);
	if (i < 0) throw new Error('subSpan: "' + sub + '" not in "' + t + '"');
	const x1 = x + ctW(t.slice(0, i), size);
	return [x1, x1 + ctW(sub, size)];
};
const Term: React.FC<{e: ET; x: number; y: number; size: number; o: number}> = ({e, x, y, size, o}) => {
	const f = useCurrentFrame();
	const s = e.size ?? size;
	const v = vis(f, e.at, e.out, 10) * (e.o ?? 1) * o;
	if (v <= 0.01) return null;
	const w = ctW(e.t, s);
	return (
		<g opacity={v}>
			{e.box !== undefined ? <g opacity={prog(f, e.box, 10)}><rect x={x - s * 0.3} y={y - s * 0.85} width={w + s * 0.6} height={s * 1.6} rx={14} fill="none" stroke={BOXC} strokeWidth={3} /></g> : null}
			<CT x={x} y={y + s * 0.35} text={e.t} size={s} color={e.color ?? INK} at={-1000} />
			{e.ring ? (() => { const [x1, x2] = subSpan(e.t, e.ring, x, s); return <RingAt c={[(x1 + x2) / 2 + 2, y]} rx={(x2 - x1) / 2 + 6} ry={s * 0.7} at={e.ringAt ?? e.at + 8} color={e.ringColor ?? RED} />; })() : null}
		</g>
	);
};
export type ArrowSpec = {at: number; eqAt?: number; above?: Cond[]; below?: Cond[]; out?: number; nudge?: number; o?: number};
export const EqRow: React.FC<{left: ET[]; right: ET[]; cx: number; y: number; size?: number; len?: number; arrow: ArrowSpec; o?: number}> = ({left, right, cx, y, size = 48, len = 200, arrow, o = 1}) => {
	const L = eqLay(left, right, size, len, cx);
	return (
		<g>
			{left.map((e, i) => <Term key={'l' + i} e={e} x={L.lx[i]} y={y} size={size} o={o} />)}
			<RxArrow x1={L.a1} x2={L.a2} y={y} at={arrow.at} out={arrow.out} o={(arrow.o ?? 1) * o} eqAt={arrow.eqAt} above={arrow.above} below={arrow.below} size={Math.round(size * 0.55)} nudge={arrow.nudge} />
			{right.map((e, i) => <Term key={'r' + i} e={e} x={L.rx[i]} y={y} size={size} o={o} />)}
		</g>
	);
};

// ---------- atom tally ----------
export type TKey = {t: string; at: number};
export type TRow = {el: string; at: number; l: TKey[]; r: TKey[]; tick?: number; o?: number};
export const KeyText: React.FC<{keys: TKey[]; x: number; y: number; size: number; color?: string}> = ({keys, x, y, size, color = INK}) => {
	const f = useCurrentFrame();
	return <>{keys.map((k, i) => {
		const nx = keys[i + 1];
		const v = prog(f, k.at, 8) * (nx ? 1 - prog(f, nx.at, 6) : 1);
		if (v <= 0.01) return null;
		return <g key={i} opacity={v}><Sx x={x} y={y} text={k.t} size={size} color={color} anchor="middle" weight={700} at={-1000} /></g>;
	})}</>;
};
/** Atom tally: one row per element under the strip (left count under the reactants, right under the products). */
export const Tally: React.FC<{rows: TRow[]; x: number; lx: number; rx: number; y: number; lh?: number; size?: number; o?: number; tickDx?: number}> = ({rows, x, lx, rx, y, lh = 62, size = 34, o = 1, tickDx = 150}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={o}>
			{rows.map((r, i) => {
				const yy = y + i * lh;
				const v = vis(f, r.at) * (r.o ?? 1);
				if (v <= 0.01) return null;
				return (
					<g key={i} opacity={v}>
						<Sx x={x} y={yy} text={r.el} size={size} color={NAVY} weight={800} at={-1000} />
						<KeyText keys={r.l} x={lx} y={yy} size={size} />
						<line x1={(lx + rx) / 2} y1={yy - size * 0.85} x2={(lx + rx) / 2} y2={yy + size * 0.25} stroke={INK_SOFT} strokeWidth={2.5} />
						<KeyText keys={r.r} x={rx} y={yy} size={size} />
						{r.tick !== undefined ? <g opacity={prog(f, r.tick, 8)}><DrawPath d={`M${rx + tickDx - 14},${yy - 10} l12,14 l24,-30`} at={r.tick} dur={10} color="#2f8a5b" width={6} /></g> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- vapour, drips and bubbles ----------
/** Vapour return: wisps rise from base to top, droplets fall from top back to base, from `at` until `until`. */
export const Reflux: React.FC<{base: V2; top: V2; at: number; until: number; s?: number; period?: number; o?: number}> = ({base, top, at, until, s = 1, period = 54, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || f > until + period) return null;
	const out: React.ReactNode[] = [];
	for (let k = 0; k < 3; k++) {
		const age = f - at - (k * period) / 3;
		if (age < 0) continue;
		const born = at + (k * period) / 3 + Math.floor(age / period) * period;
		if (born > until) continue;
		const t = (age % period) / period;
		const y = base[1] + (top[1] - base[1]) * t, x = base[0] + Math.sin(t * 7 + k) * 7 * s;
		out.push(<path key={'w' + k} d={`M${x},${y + 16 * s} c${10 * s},${-6 * s} ${-10 * s},${-14 * s} 0,${-22 * s} c${10 * s},${-6 * s} ${-10 * s},${-14 * s} 0,${-20 * s}`} fill="none" stroke="#a9a397" strokeWidth={4 * s} strokeLinecap="round" opacity={Math.sin(t * Math.PI) * 0.9} />);
		const t2 = ((age + period / 2) % period) / period;
		const y2 = top[1] + (base[1] - top[1]) * t2 * t2;
		out.push(<circle key={'d' + k} cx={top[0] + 3 * s} cy={y2} r={6 * s} fill="#7fb2d9" stroke="#4f86ad" strokeWidth={2} opacity={Math.sin(t2 * Math.PI)} />);
	}
	return <g opacity={o}>{out}</g>;
};
/** Droplets falling from a to b, one every `every` frames, from `at` until `until`. */
export const Drips: React.FC<{a: V2; b: V2; at: number; until: number; every?: number; color?: string; s?: number}> = ({a, b, at, until, every = 16, color = '#7fb2d9', s = 1}) => {
	const f = useCurrentFrame();
	const out: React.ReactNode[] = [];
	for (let t0 = at; t0 <= Math.min(until, f); t0 += every) {
		const t = (f - t0) / 18;
		if (t < 0 || t > 1) continue;
		out.push(<circle key={t0} cx={a[0]} cy={a[1] + (b[1] - a[1]) * t * t} r={6 * s} fill={color} stroke="#4f86ad" strokeWidth={2} opacity={1 - t * 0.3} />);
	}
	return <>{out}</>;
};
/** Small bubbles rising through a region (x, y, w, h); the gap between bubbles grows after `slow` so they stop at `stop`. */
export const Bubbles: React.FC<{x: number; y: number; w: number; h: number; at: number; slow?: number; stop?: number; every?: number; s?: number; o?: number}> = ({x, y, w, h, at, slow = 1e9, stop = 1e9, every = 9, s = 1, o = 1}) => {
	const f = useCurrentFrame();
	const out: React.ReactNode[] = [];
	let t0 = at, i = 0;
	while (t0 <= f && t0 < stop && i < 400) {
		const t = (f - t0) / 36;
		if (t >= 0 && t <= 1) {
			const u = ((i * 0.6180339) % 1);
			out.push(<circle key={i} cx={x + u * w + Math.sin(t * 6 + i) * 3} cy={y + h - t * h} r={(3.5 + (i % 3)) * s} fill="rgba(255,255,255,0.85)" stroke="#8fa6b5" strokeWidth={1.6} opacity={Math.sin(t * Math.PI)} />);
		}
		const g = t0 < slow ? every : every * (1 + (t0 - slow) / 18);
		t0 += g; i++;
	}
	return <g opacity={o}>{out}</g>;
};

// ---------- route board pieces ----------
export const ColFrame: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; o?: number; lit?: number}> = ({x, y, w, h, at, out, o = 1, lit = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	return <rect x={x} y={y} width={w} height={h} rx={22} fill={lit > 0.01 ? `rgba(255,253,248,${0.6 * lit})` : 'none'} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} strokeDasharray="10 8" opacity={v} />;
};
export type CLine = {t: string; at: number; until?: number; under?: number; color?: string};
/** Judging card: the title, then lines that write on their cue; the line being spoken is bright, the rest dim. The card
 *  itself is bright during its `lit` windows; from `even` every card returns to one level. */
export const RCard: React.FC<{x: number; y: number; w: number; h: number; title: string; at: number; lit: [number, number]; lines: CLine[]; even: number; size?: number; color?: string}> = ({x, y, w, h, title, at, lit, lines, even, size = 28, color = NAVY}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, undefined, 14);
	if (v <= 0.01) return null;
	const on = vis(f, lit[0], lit[1], 12);
	const ev = prog(f, even, 14);
	const cardO = (0.45 + 0.55 * on) * (1 - ev) + 0.8 * ev;
	return (
		<g opacity={v}>
			<rect x={x + 4} y={y + 6} width={w} height={h} rx={18} fill="rgba(60,45,20,0.06)" />
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARDC} stroke={color} strokeWidth={2 + 2 * on * (1 - ev)} opacity={0.6 + 0.4 * on} />
			<g opacity={cardO}>
				<Sx x={x + 26} y={y + 56} text={title} size={40} color={color} hand weight={700} at={-1000} />
				{lines.map((l, i) => {
					const nx = lines.slice(i + 1).find(q => q.at > l.at);
					const end = Math.min(nx ? nx.at : lit[1], lit[1]);
					const speaking = vis(f, l.at, end, 10);
					const lo = vis(f, l.at, l.until, 10) * ((0.55 + 0.45 * speaking) * (1 - ev) + ev);
					if (lo <= 0.01) return null;
					const yy = y + 116 + i * size * 1.75;
					return (
						<g key={i} opacity={lo}>
							<Sx x={x + 30} y={yy} text={l.t} size={size} color={l.color ?? INK} weight={600} at={-1000} />
							{l.under !== undefined ? <DrawPath d={`M${x + 30},${yy + 10} L${x + 30 + ctW(l.t, size, 600)},${yy + 10}`} at={l.under} dur={14} color="#c98a1b" width={4} /> : null}
						</g>
					);
				})}
			</g>
		</g>
	);
};
/** Vertical fill gauge (frac 0 to 1 of its height) that fills from `at`. */
export const Fill: React.FC<{x: number; y: number; w: number; h: number; frac: number; at: number; o?: number; color?: string}> = ({x, y, w, h, frac, at, o = 1, color = '#e2b04a'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at - 10) * o;
	if (v <= 0.01) return null;
	const fh = h * frac * prog(f, at, 30);
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={10} fill={CARDC} stroke={INK} strokeWidth={3} />
			<rect x={x + 4} y={y + h - 4 - fh} width={w - 8} height={fh} rx={6} fill={color} />
			{[0.25, 0.5, 0.75].map(k => <line key={k} x1={x + w - 12} x2={x + w} y1={y + h * (1 - k)} y2={y + h * (1 - k)} stroke={INK_SOFT} strokeWidth={2} />)}
		</g>
	);
};
/** Pen arrow from a to b, optionally bowed (bend: sideways offset of the midpoint); the head draws once the line lands. */
export const Arrow2: React.FC<{a: V2; b: V2; at: number; out?: number; o?: number; color?: string; width?: number; bend?: number; dur?: number; head?: number}> = ({a, b, at, out, o = 1, color = INK, width = 4, bend = 0, dur = 16, head = 16}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
	const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
	const c: V2 = [mx - ((b[1] - a[1]) / L) * bend, my + ((b[0] - a[0]) / L) * bend];
	const ang = Math.atan2(b[1] - c[1], b[0] - c[0]);
	const hp = (k: number): V2 => [b[0] - Math.cos(ang + k) * head, b[1] - Math.sin(ang + k) * head];
	const h1 = hp(0.5), h2 = hp(-0.5);
	return (
		<g opacity={v}>
			<DrawPath d={`M${a[0]},${a[1]} Q${c[0]},${c[1]} ${b[0]},${b[1]}`} at={at} dur={dur} color={color} width={width} />
			<g opacity={prog(f, at + dur - 4, 6)}><path d={`M${h1[0]},${h1[1]} L${b[0]},${b[1]} L${h2[0]},${h2[1]}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g>
		</g>
	);
};
export {INK, INK_SOFT, NAVY};
