// Drawing parts for M6 C05 (strength against concentration). Reuses C04 (and through it C03 and C01: proton token and
// hop, molecules, chips, question card, countdown, plate crops). New here:
// - Field: a schematic particle lens (Codex check 86). The field runs past the lens rim and fades into it, so no
//   fraction can be counted; split molecules are either all of them (strong) or a few picked-out examples (weak), and
//   a counter chip carries the number. Glyphs follow the colour key: whole acid amber outline, hydronium a teal token on
//   a pale blue water, anions grey, hydroxide violet, water pale blue.
// - HopPair: one foreground acid/water pair that hops a proton forward (amber trail) and back (violet trail).
// - PHChip (amber digits on a dark chip, like the meter screen), the cropped pH meter with a coded probe and cable,
//   labelled dials, a 0 to 14 pH scale with brackets, an arrow glow behind an equation operator, a crossed chip with
//   its own cross time, a beaker plate with coded liquid.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, prog, rng} from '../../kit';
import {
	ACID, ACID_INK, BASE, BASE_INK, CROSS, Fade, GREYT, GREY_INK, INK, INK_SOFT, Note, PROTON, PROTON_INK, PicH, Proton, READ_BG, READ_TXT, Ring, Sx, TEAL, WATER_INK, WATER_SOFT,
	clamp01, eSpan, lerp, mw, pulseAt, smooth, vis,
} from '../chem-m6-c04/parts';
import type {EItem} from '../chem-m6-c04/parts';
import {BEAKER, BEAKER_LIQ, METER_CROP, METER_G, PHMETER} from './assets';
import type {PDef} from './assets';

export * from '../chem-m6-c04/parts';

export const LENS_BG = '#eef6fb';
export const ANION = '#b9b3a8', ANION_INK = '#7a746a';
export const NH3C = '#5b7fd1', NH3_SOFT = '#e3eaf8';

// ---------- small glyphs ----------
const Wd: React.FC<{x: number; y: number; s: number; o?: number}> = ({x, y, s, o = 1}) => <circle cx={x} cy={y} r={9.5 * s} fill={WATER_SOFT} stroke={WATER_INK} strokeWidth={1.6} opacity={0.85 * o} />;
/** Hydronium: a teal proton on a pale blue water. */
export const H3O: React.FC<{x: number; y: number; s?: number; o?: number; pop?: number}> = ({x, y, s = 1, o = 1, pop = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={pop !== 1 ? `translate(${x},${y}) scale(${pop}) translate(${-x},${-y})` : undefined}>
		<circle cx={x - 4 * s} cy={y + 4 * s} r={15 * s} fill={WATER_SOFT} stroke={WATER_INK} strokeWidth={2} />
		<circle cx={x + 7 * s} cy={y - 6 * s} r={10 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={2} />
	</g>
));
/** Whole acid molecule: amber outline with its H (white) attached at angle a. */
export const HA: React.FC<{x: number; y: number; s?: number; a?: number; o?: number; noH?: boolean}> = ({x, y, s = 1, a = -0.6, o = 1, noH = false}) => {
	if (o <= 0.01) return null;
	const hx = x + Math.cos(a) * 17 * s, hy = y + Math.sin(a) * 17 * s;
	return (
		<g opacity={o}>
			{!noH ? <line x1={x} y1={y} x2={hx} y2={hy} stroke={INK} strokeWidth={2.5 * s} /> : null}
			<circle cx={x} cy={y} r={13 * s} fill="#fff4dc" stroke={ACID} strokeWidth={3.2 * s} />
			{!noH ? <circle cx={hx} cy={hy} r={6.5 * s} fill="#ffffff" stroke={INK} strokeWidth={1.8} /> : null}
		</g>
	);
};
export const hPos = (x: number, y: number, s: number, a: number): [number, number] => [x + Math.cos(a) * 17 * s, y + Math.sin(a) * 17 * s];
/** Anion (grey, minus). */
export const An: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={12.5 * s} fill={ANION} stroke={ANION_INK} strokeWidth={2} />
		<line x1={x - 5 * s} y1={y} x2={x + 5 * s} y2={y} stroke="#ffffff" strokeWidth={2.6 * s} strokeLinecap="round" />
	</g>
));
/** Hydroxide (violet). */
export const OHg: React.FC<{x: number; y: number; s?: number; o?: number; pop?: number}> = ({x, y, s = 1, o = 1, pop = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={pop !== 1 ? `translate(${x},${y}) scale(${pop}) translate(${-x},${-y})` : undefined}>
		<circle cx={x} cy={y} r={13 * s} fill={BASE} stroke={BASE_INK} strokeWidth={2} />
		<line x1={x - 5 * s} y1={y} x2={x + 5 * s} y2={y} stroke="#ffffff" strokeWidth={2.6 * s} strokeLinecap="round" />
	</g>
));
/** Ammonia (blue, three small H). */
export const NH3g: React.FC<{x: number; y: number; s?: number; o?: number; a?: number}> = ({x, y, s = 1, o = 1, a = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{[a + 1.6, a + 3.7, a + 5.8].map((t, i) => <circle key={i} cx={x + Math.cos(t) * 14 * s} cy={y + Math.sin(t) * 14 * s} r={5.5 * s} fill="#ffffff" stroke={INK} strokeWidth={1.5} />)}
		<circle cx={x} cy={y} r={12 * s} fill={NH3_SOFT} stroke={NH3C} strokeWidth={3 * s} />
	</g>
));
/** Ammonium: ammonia carrying a teal proton. */
export const NH4g: React.FC<{x: number; y: number; s?: number; o?: number; a?: number}> = ({x, y, s = 1, o = 1, a = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<NH3g x={x} y={y} s={s} a={a} />
		<circle cx={x + Math.cos(a - 0.5) * 15 * s} cy={y + Math.sin(a - 0.5) * 15 * s} r={8 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={1.8} />
	</g>
));

// ---------- the schematic field ----------
export type Slot = {x: number; y: number; acid: boolean; rank: number; ph: number; ang: number; to: [number, number]};
export const fieldSlots = (cx: number, cy: number, r: number, sp: number, acidFrac: number, seed: number): Slot[] => {
	const rr = rng(seed);
	const out: Slot[] = [];
	const R = r + sp * 0.8;
	let row = 0;
	for (let gy = -R; gy <= R; gy += sp * 0.87, row++) {
		for (let gx = -R; gx <= R; gx += sp) {
			const x = cx + gx + (row % 2) * sp * 0.5 + (rr() - 0.5) * sp * 0.38, y = cy + gy + (rr() - 0.5) * sp * 0.38;
			const acid = rr() < acidFrac;
			const rank = rr(), ph = rr() * 6.28, ang = rr() * 6.28;
			if (Math.hypot(x - cx, y - cy) > R) continue;
			out.push({x, y, acid, rank, ph, ang, to: [x + Math.cos(ang) * sp * 0.55, y + Math.sin(ang) * sp * 0.55]});
		}
	}
	return out;
};
export type Example = {u: number; v: number; at: number; ring?: [number, number]};
export type FieldProps = {
	cx: number; cy: number; r: number; sp?: number; acidFrac?: number; seed?: number; s?: number; at: number; out?: number; o?: number;
	kind?: 'acid' | 'base';
	/** every acid splits: at + rank × spread (strong acid; for a base, dissociation). -1000 = already split. */
	splitAll?: {at: number; spread?: number};
	examples?: Example[];
	/** fraction of acid slots kept (dilution): rank above it fades to water. */
	keep?: (f: number) => number;
	pulse?: number; amp?: number; bg?: string; children?: React.ReactNode; rim?: number;
};
const hop = (f: number, at: number, d = 24) => smooth(clamp01((f - at) / d));
/** Schematic particle field, drawn inside a LensFrame (it does not draw its own frame). */
export const Field: React.FC<FieldProps> = ({cx, cy, r, sp = 46, acidFrac = 0.42, seed = 5, s: s0 = 0.8, at, out, o = 1, kind = 'acid', splitAll, examples = [], keep, pulse, amp = 4, bg = LENS_BG, children, rim = 0.74}) => {
	const f = useCurrentFrame();
	const slots = React.useMemo(() => fieldSlots(cx, cy, r, sp, acidFrac, seed), [cx, cy, r, sp, acidFrac, seed]);
	const ex = React.useMemo(() => examples.map(e => {
		let best = 0, bd = 1e9;
		slots.forEach((sl, i) => { const d = Math.hypot(sl.x - (cx + e.u * r), sl.y - (cy + e.v * r)); if (d < bd) { bd = d; best = i; } });
		return {...e, i: best};
	}), [slots, examples.map(e => `${e.u},${e.v},${e.at}`).join('|')]); // eslint-disable-line react-hooks/exhaustive-deps
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const kv = keep ? keep(f) : 1;
	const pop = pulse === undefined ? 1 : pulseAt(f, pulse, 0.45, 34);
	const gid = `fade-${Math.round(cx)}-${Math.round(cy)}-${Math.round(r)}`;
	const exIdx = new Map(ex.map(e => [e.i, e]));
	const back: React.ReactNode[] = [], front: React.ReactNode[] = [];
	slots.forEach((sl, i) => {
		const [dx, dy] = [Math.sin(f * 0.031 + sl.ph) * amp, Math.cos(f * 0.027 + sl.ph * 1.3) * amp];
		const x = sl.x + dx, y = sl.y + dy;
		const e = exIdx.get(i);
		const s = e ? s0 * 1.6 : s0;
		const isAcid = sl.acid || !!e;
		const show = !isAcid ? 0 : e ? 1 : keep ? clamp01((kv - sl.rank) / 0.06) : 1;
		if (show < 0.999) back.push(<Wd key={'w' + i} x={x} y={y} s={s} o={1 - show} />);
		if (show <= 0.01) return;
		const p = e ? hop(f, e.at) : splitAll ? hop(f, splitAll.at + sl.rank * (splitAll.spread ?? 40)) : 0;
		const tx = sl.to[0] + dx, ty = sl.to[1] + dy;
		const layer = e ? front : back;
		if (e) front.push(<circle key={'h' + i} cx={(x + tx) / 2} cy={(y + ty) / 2} r={sp * 0.95} fill={bg} opacity={0.85} />);
		if (kind === 'acid') {
			if (p <= 0.001) {
				layer.push(<g key={'a' + i} opacity={show}><Wd x={tx} y={ty} s={s} /><HA x={x} y={y} s={s} a={sl.ang} /></g>);
			} else {
				const [hx, hy] = hPos(x, y, s, sl.ang);
				const mx = (hx + tx) / 2, my = (hy + ty) / 2 - 26 * s;
				const px = (1 - p) * (1 - p) * hx + 2 * (1 - p) * p * mx + p * p * tx, py = (1 - p) * (1 - p) * hy + 2 * (1 - p) * p * my + p * p * ty;
				layer.push(
					<g key={'a' + i} opacity={show}>
						<An x={x} y={y} s={s} />
						{p < 1 ? <><Wd x={tx} y={ty} s={s * 1.3} /><circle cx={px} cy={py} r={10 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={1.8} /></> : <H3O x={tx} y={ty} s={s} pop={pop} />}
					</g>,
				);
			}
		} else {
			// base: whole NH3 next to a water; split: NH4+ and OH- (example); splitAll: lattice-free Na+ and OH- (ions only)
			if (splitAll) {
				layer.push(<g key={'b' + i} opacity={show}><circle cx={x} cy={y} r={11 * s} fill={ANION} stroke={ANION_INK} strokeWidth={1.6} /><OHg x={tx} y={ty} s={s} pop={pop} /></g>);
			} else if (p <= 0.001) {
				layer.push(<g key={'b' + i} opacity={show}><Wd x={tx} y={ty} s={s} /><NH3g x={x} y={y} s={s} a={sl.ang} /></g>);
			} else {
				const fx = tx, fy = ty, gx = x + Math.cos(sl.ang - 0.5) * 15 * s, gy = y + Math.sin(sl.ang - 0.5) * 15 * s;
				const px = lerp(fx, gx, p), py = lerp(fy, gy, p) - Math.sin(p * Math.PI) * 22 * s;
				layer.push(
					<g key={'b' + i} opacity={show}>
						<NH3g x={x} y={y} s={s} a={sl.ang} />
						{p < 1 ? <circle cx={px} cy={py} r={8 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={1.8} /> : <circle cx={gx} cy={gy} r={8 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={1.8} />}
						{p >= 1 ? <OHg x={tx} y={ty} s={s} pop={pop} /> : <Wd x={tx} y={ty} s={s * 1.2} />}
					</g>,
				);
			}
		}
	});
	return (
		<g opacity={v}>
			<rect x={cx - r - 10} y={cy - r - 10} width={2 * r + 20} height={2 * r + 20} fill={bg} />
			{back}
			{front}
			<defs>
				<radialGradient id={gid} cx={cx} cy={cy} r={r} gradientUnits="userSpaceOnUse">
					<stop offset={rim} stopColor={bg} stopOpacity={0} />
					<stop offset={0.93} stopColor={bg} stopOpacity={0.78} />
					<stop offset={1} stopColor={bg} stopOpacity={0.92} />
				</radialGradient>
			</defs>
			<circle cx={cx} cy={cy} r={r + 2} fill={`url(#${gid})`} />
			{ex.map((e, k) => {
				if (!e.ring) return null;
				const sl = slots[e.i];
				return <Ring key={'r' + k} cx={sl.x + (sl.to[0] - sl.x) * 0.5} cy={sl.y + (sl.to[1] - sl.y) * 0.5} rx={sp * 1.15} ry={sp * 1.0} at={e.ring[0]} out={e.ring[1]} color={TEAL} seed={3 + k} width={4} />;
			})}
			{children}
		</g>
	);
};
/** Lens frame with a pale background and no title, for the fields. */
export const FieldLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; o?: number; children: React.ReactNode}> = ({cx, cy, r, at, out, o = 1, children}) => {
	const f = useCurrentFrame();
	const id = `fl-${Math.round(cx)}-${Math.round(cy)}-${Math.round(r)}`;
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const k = 0.9 + 0.1 * prog(f, at, 16);
	return (
		<g opacity={v} transform={`translate(${cx},${cy}) scale(${k}) translate(${-cx},${-cy})`}>
			<circle cx={cx} cy={cy} r={r} fill={LENS_BG} />
			<clipPath id={id}><circle cx={cx} cy={cy} r={r - 3} /></clipPath>
			<g clipPath={`url(#${id})`}>{children}</g>
			<circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth={5} />
			<path d={`M${cx - r * 0.74},${cy - r * 0.46} A${r * 0.88},${r * 0.88} 0 0 1 ${cx - r * 0.1},${cy - r * 0.86}`} fill="none" stroke="#ffffff" strokeOpacity={0.7} strokeWidth={8} strokeLinecap="round" />
		</g>
	);
};

// ---------- one foreground hop pair (forward amber, back violet) ----------
/** Acid at a, water at b. events: frames at which the proton moves; even events forward (a to b), odd back. */
export const HopPair: React.FC<{a: [number, number]; b: [number, number]; events: number[]; s?: number; o?: number; ang?: number; trail?: boolean; startSplit?: boolean}> = ({a, b, events, s = 1, o = 1, ang = -0.4, trail = true, startSplit = false}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	let n = 0;
	let cur = -1;
	events.forEach((t, i) => { if (f >= t + 24) n = i + 1; else if (f >= t) cur = i; });
	const split = (n % 2 === 1) !== startSplit;
	const [hx, hy] = hPos(a[0], a[1], s, ang);
	const fly = cur >= 0 && f < events[cur] + 24;
	const fwd = (cur % 2 === 0) !== startSplit;
	const p = fly ? smooth((f - events[cur]) / 24) : 0;
	const from: [number, number] = fwd ? [hx, hy] : [b[0] + 7 * s, b[1] - 6 * s], to: [number, number] = fwd ? [b[0] + 7 * s, b[1] - 6 * s] : [hx, hy];
	const mx = (from[0] + to[0]) / 2, my = Math.min(from[1], to[1]) - 46 * s;
	const px = (1 - p) * (1 - p) * from[0] + 2 * (1 - p) * p * mx + p * p * to[0], py = (1 - p) * (1 - p) * from[1] + 2 * (1 - p) * p * my + p * p * to[1];
	const col = fwd ? ACID : BASE;
	const trailO = cur >= 0 ? 1 - prog(f, events[cur] + 24, 30) : 0;
	const showSplit = fly ? fwd : split;
	return (
		<g opacity={o}>
			<ellipse cx={(a[0] + b[0]) / 2} cy={(a[1] + b[1]) / 2} rx={Math.abs(b[0] - a[0]) / 2 + 34 * s} ry={34 * s + Math.abs(b[1] - a[1]) / 2} fill={LENS_BG} opacity={0.9} />
			{trail && cur >= 0 && trailO > 0.01 ? (
				<g opacity={trailO}>
					<DrawPath d={`M${from[0]},${from[1]} Q${mx},${my} ${to[0]},${to[1]}`} at={events[cur]} dur={20} color={col} width={4.5} />
				</g>
			) : null}
			{fly ? (
				<>
					{fwd ? <An x={a[0]} y={a[1]} s={s} /> : <HA x={a[0]} y={a[1]} s={s} a={ang} noH />}
					<circle cx={b[0] - 4 * s} cy={b[1] + 4 * s} r={15 * s} fill={WATER_SOFT} stroke={WATER_INK} strokeWidth={2} />
					<circle cx={px} cy={py} r={10 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={2} />
				</>
			) : showSplit ? (
				<><An x={a[0]} y={a[1]} s={s} /><H3O x={b[0]} y={b[1]} s={s} /></>
			) : (
				<><HA x={a[0]} y={a[1]} s={s} a={ang} /><circle cx={b[0] - 4 * s} cy={b[1] + 4 * s} r={15 * s} fill={WATER_SOFT} stroke={WATER_INK} strokeWidth={2} /></>
			)}
		</g>
	);
};

// ---------- pH chip: amber digits on a dark chip ----------
export const phW = (text: string, size: number) => mw(text, size, false, 800) + size * 1.1;
export const PHChip: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; o?: number; anchor?: 'start' | 'middle'; drop?: boolean}> = ({x, y, text, at, out, size = 34, o = 1, anchor = 'start', drop = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const w = phW(text, size), h = size * 1.5;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	const dy = drop ? -30 * (1 - smooth(prog(f, at, 14))) : 0;
	return (
		<g opacity={v} transform={`translate(0,${dy})`}>
			<rect x={x0} y={y} width={w} height={h} rx={12} fill={READ_BG} stroke={INK} strokeWidth={2} />
			<text x={x0 + w / 2} y={y + h / 2 + size * 0.35} textAnchor="middle" fill={READ_TXT} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fontVariantNumeric: 'tabular-nums'}}>{text}</text>
		</g>
	);
};

// ---------- beaker plate with coded liquid and a coded label ----------
export const natP = (p: PDef, x: number, y: number, h: number, nx: number, ny: number): [number, number] => {
	const k = h / p.box[3];
	return [x + (nx - p.box[0]) * k, y + (ny - p.box[1]) * k];
};
export const LiquidBeaker: React.FC<{x: number; y: number; h: number; o?: number; tint?: string}> = ({x, y, h, o = 1, tint = '#bcd9ee'}) => {
	if (o <= 0.01) return null;
	const pts = BEAKER_LIQ.map(([nx, ny]) => natP(BEAKER, x, y, h, nx, ny));
	return (
		<g opacity={o}>
			<PicH p={BEAKER} x={x} y={y} h={h} />
			<path d={`M${pts.map(p => p.join(',')).join(' L')} Z`} fill={tint} opacity={0.42} />
			<path d={`M${pts[0][0]},${pts[0][1]} L${pts[1][0]},${pts[1][1]}`} stroke="#8fb9d8" strokeWidth={3} opacity={0.7} />
		</g>
	);
};

// ---------- the pH meter body (cropped plate) with a coded probe on a coded cable ----------
export const meterH = (w: number) => ((METER_CROP[3] - METER_CROP[1]) * w) / (METER_CROP[2] - METER_CROP[0]);
const mPt = (x: number, y: number, w: number, nx: number, ny: number): [number, number] => {
	const k = w / (METER_CROP[2] - METER_CROP[0]);
	return [x + (nx - METER_CROP[0]) * k, y + (ny - METER_CROP[1]) * k];
};
let meterId = 0;
/** The meter at (x, y), width w. probe(f): the probe tip position. read(f): screen text ('' for blank). */
export const Meter: React.FC<{x: number; y: number; w: number; at: number; out?: number; probe: (f: number) => [number, number]; read: (f: number) => string}> = ({x, y, w, at, out, probe, read}) => {
	const f = useCurrentFrame();
	const id = React.useMemo(() => `meter-${++meterId}`, []);
	const v = vis(f, at, out, 16);
	if (v <= 0.01) return null;
	const slide = (1 - smooth(prog(f, at, 24))) * 140 + smooth(out === undefined ? 0 : prog(f, out, 24)) * 140;
	const k = w / (METER_CROP[2] - METER_CROP[0]);
	const h = meterH(w);
	const p = PHMETER;
	const sc = METER_G.screen.map(([nx, ny]) => mPt(x, y, w, nx, ny));
	const [cbx, cby] = mPt(x, y, w, METER_G.cable[0], METER_G.cable[1]);
	const [tx, ty] = probe(f);
	const rodH = 190, capH = 58;
	const topY = ty - rodH - capH;
	const txt = read(f);
	const scx = (sc[0][0] + sc[1][0] + sc[2][0] + sc[3][0]) / 4, scy = (sc[0][1] + sc[1][1] + sc[2][1] + sc[3][1]) / 4;
	const sh = sc[3][1] - sc[0][1];
	return (
		<g opacity={v} transform={`translate(${slide},0)`}>
			<path d={`M${cbx},${cby} C${cbx + 40},${cby - 160} ${tx},${topY - 200} ${tx},${topY}`} fill="none" stroke="#2f2f33" strokeWidth={9} strokeLinecap="round" />
			<clipPath id={id}><rect x={x} y={y} width={w} height={h} /></clipPath>
			<g clipPath={`url(#${id})`}><image href={staticFile(p.src)} x={x - METER_CROP[0] * k} y={y - METER_CROP[1] * k} width={p.nat[0] * k} height={p.nat[1] * k} /></g>
			<path d={`M${sc.map(q => q.join(',')).join(' L')} Z`} fill={READ_BG} opacity={0.94} />
			{txt ? <text x={scx} y={scy + sh * 0.2} textAnchor="middle" fill={READ_TXT} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: sh * 0.52, fontVariantNumeric: 'tabular-nums'}}>{txt}</text> : null}
			{/* probe */}
			<rect x={tx - 13} y={topY} width={26} height={capH} rx={7} fill="#3c5f93" stroke={INK} strokeWidth={2.5} />
			<rect x={tx - 8} y={topY + capH} width={16} height={rodH - 14} fill="#eef5fa" stroke={INK_SOFT} strokeWidth={2.5} />
			<circle cx={tx} cy={ty - 10} r={11} fill="#dfeef8" stroke={INK_SOFT} strokeWidth={2.5} />
		</g>
	);
};

// ---------- dials ----------
/** A labelled dial. val(f) 0..1 sets the needle (0 low, 1 high). */
export const Dial2: React.FC<{x: number; y: number; r?: number; label: string; val: (f: number) => number; at: number; out?: number; o?: number; size?: number}> = ({x, y, r = 44, label, val, at, out, o = 1, size = 32}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const t = clamp01(val(f));
	const na = Math.PI * (1 + t); // pi (left) .. 2pi (right)
	return (
		<g opacity={v}>
			<path d={`M${x - r},${y} A${r},${r} 0 0 1 ${x + r},${y}`} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<line x1={x - r} y1={y} x2={x + r} y2={y} stroke={INK} strokeWidth={4} />
			{[0, 0.25, 0.5, 0.75, 1].map((q, i) => { const qa = Math.PI * (1 + q); return <line key={i} x1={x + Math.cos(qa) * r * 0.72} y1={y + Math.sin(qa) * r * 0.72} x2={x + Math.cos(qa) * r * 0.94} y2={y + Math.sin(qa) * r * 0.94} stroke={INK_SOFT} strokeWidth={3} />; })}
			<line x1={x} y1={y} x2={x + Math.cos(na) * r * 0.82} y2={y + Math.sin(na) * r * 0.82} stroke={TEAL} strokeWidth={6} strokeLinecap="round" />
			<circle cx={x} cy={y} r={6} fill={TEAL} />
			{label ? <Sx x={x} y={y + size + 8} text={label} size={size} color={INK} anchor="middle" hand at={-1000} /> : null}
		</g>
	);
};

// ---------- pH scale 0 to 14 ----------
export const PHScale: React.FC<{x: number; y: number; w: number; at: number; out?: number; o?: number}> = ({x, y, w, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const X = (q: number) => x + (q / 14) * w;
	const d = prog(f, at, 20);
	return (
		<g opacity={v}>
			<rect x={x} y={y - 10} width={(X(7) - x) * d} height={20} rx={10} fill="#f6d2c8" opacity={0.85} />
			<line x1={x} y1={y} x2={x + w * d} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			{Array.from({length: 15}, (_, i) => i).map(i => (
				<g key={i} opacity={prog(f, at + i * 1.2, 8)}>
					<line x1={X(i)} y1={y - 12} x2={X(i)} y2={y + 12} stroke={i === 7 ? INK : INK_SOFT} strokeWidth={i === 7 ? 4 : 2.5} />
					<Sx x={X(i)} y={y + 44} text={String(i)} size={26} color={i === 7 ? INK : INK_SOFT} anchor="middle" weight={i === 7 ? 800 : 600} at={-1000} />
				</g>
			))}
			<Sx x={X(7)} y={y + 78} text="neutral" size={26} color={INK_SOFT} anchor="middle" hand at={at + 14} />
			<Sx x={x - 18} y={y + 9} text="pH" size={30} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
		</g>
	);
};
export const phX = (x: number, w: number, q: number) => x + (q / 14) * w;
/** A bracket under (or over) a span with a label. */
export const SpanBracket: React.FC<{x1: number; x2: number; y: number; text: string; at: number; out?: number; o?: number; color?: string; up?: boolean; size?: number; hand?: boolean}> = ({x1, x2, y, text, at, out, o = 1, color = TEAL, up = false, size = 32, hand = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const d = up ? -14 : 14;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x1},${y - d} L${x1},${y} L${x2},${y} L${x2},${y - d}`} at={at} dur={14} color={color} width={4} />
			<Sx x={(x1 + x2) / 2} y={up ? y - 18 : y + size + 10} text={text} size={size} color={color} anchor="middle" hand={hand} weight={hand ? 700 : 700} at={at + 6} />
		</g>
	);
};

// ---------- glow behind an equation operator or token ----------
export const OpGlow: React.FC<{items: EItem[]; i: number; size: number; x: number; y: number; at: number; anchor?: 'start' | 'middle'; color?: string; len?: number}> = ({items, i, size, x, y, at, anchor = 'start', color = PROTON, len = 40}) => {
	const f = useCurrentFrame();
	const g = Math.max(0, Math.sin(clamp01((f - at) / len) * Math.PI));
	if (g <= 0.01) return null;
	const sp = eSpan(items, i, size, x, anchor);
	return <rect x={sp.x1 - 4} y={y - size * 0.82} width={sp.x2 - sp.x1 + 8} height={size * 1.0} rx={size * 0.3} fill={color} opacity={0.35 * g} />;
};

// ---------- crossed chip with its own cross time ----------
export const MistakeX: React.FC<{x: number; y: number; text: string; at: number; cross: number; out?: number; note?: string; size?: number; anchor?: 'start' | 'middle'}> = ({x, y, text, at, cross, out, note, size = 32, anchor = 'start'}) => {
	const charged = /\^\{/.test(text);
	const ts = charged ? size * 0.86 : size;
	const W = mw(text, ts, !charged, 700) + 110;
	const H = size + 30;
	const x0 = anchor === 'middle' ? x - W / 2 : x;
	return (
		<Fade at={at} out={out}>
			<rect x={x0} y={y} width={W} height={H} rx={H / 2} fill="#fffdf8" stroke={CROSS} strokeWidth={3} />
			<Sx x={x0 + 26} y={y + H / 2 + ts * 0.34} text={text} size={ts} color={INK_SOFT} hand={!charged} weight={charged ? 600 : 700} at={at} />
			<DrawPath d={`M${x0 + W - 56},${y + 12} L${x0 + W - 22},${y + H - 12}`} at={cross} dur={8} color={CROSS} width={7} />
			<DrawPath d={`M${x0 + W - 22},${y + 12} L${x0 + W - 56},${y + H - 12}`} at={cross + 6} dur={8} color={CROSS} width={7} />
			{note ? <Note x={anchor === 'middle' ? x : x0 + 26} y={y + H + 40} text={note} size={size * 0.98} color={TEAL} anchor={anchor} at={cross + 8} /> : null}
		</Fade>
	);
};
export const mistakeW = (text: string, size = 32) => { const c = /\^\{/.test(text); return mw(text, c ? size * 0.86 : size, !c, 700) + 110; };

/** Dim wrapper: opacity falls to `to` from `at` (and back from `undim`). */
export const Dim: React.FC<{at: number; to?: number; undim?: number; children: React.ReactNode}> = ({at, to = 0.3, undim, children}) => {
	const f = useCurrentFrame();
	const d = prog(f, at, 14) * (undim === undefined ? 1 : 1 - prog(f, undim, 14));
	return <g opacity={1 - (1 - to) * d}>{children}</g>;
};
/** Counter chip under a lens (Inter, no hand). */
export const Counter: React.FC<{x: number; y: number; text: string; at: number; out?: number; color?: string; size?: number}> = ({x, y, text, at, out, color = TEAL, size = 32}) => {
	const w = mw(text, size, false, 700) + size * 1.3;
	return (
		<Fade at={at} out={out}>
			<rect x={x - w / 2} y={y} width={w} height={size * 1.6} rx={size * 0.8} fill="#fffdf8" stroke={color} strokeWidth={3} />
			<Sx x={x} y={y + size * 1.12} text={text} size={size} color={color} anchor="middle" weight={700} at={-1000} />
		</Fade>
	);
};
void ACID_INK; void GREYT; void GREY_INK; void Proton;
