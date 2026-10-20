// Drawing parts for M6 C11 (buffers). Reuses C10 (and through it C08 to C01: the board, task line, givens card, step
// chip, working lines, Ka fraction, full meter with an amber readout, crossed chips, question card, countdown, key notes,
// the C05 particle glyphs and the C07 water token). New here:
// - GradPip: the painted graduated pipette stood upright about its tip (never stretched), with a coded drop;
// - BLens: the buffer lens. Whole ethanoic acid molecules (amber), ethanoate ions (grey), Na+ and Cl- spectators; a
//   site can flip when a hydronium arrives (its proton moves onto the ethanoate, which becomes acid, and a water is
//   left) or when a hydroxide arrives (it takes the acid's proton, the acid becomes ethanoate, and a water forms);
// - RatioBar: the two-column ratio bar (acid HA amber, base A- violet, heights in moles) with an optional moving slice;
// - PHGraph: the coded pH-against-volume line graph (lines draw up to a moving x value);
// - PKLine: a short pH line with a sliding pKa marker; BloodRuler: a pH 7.0 to 7.8 ruler with a band.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {
	ACID, ACID_INK, An, BASE, BASE_INK, ClTok, Fade, H3O, HA, INK, INK_SOFT, NaTok, OHg, PicH, PROTON, PROTON_INK, Sx, WATER_INK, WaterT, clamp01, hPos, lerp, mw,
	smooth, vis,
} from '../chem-m6-c10/parts';
import {hexMix} from './common';
import {GP_G, GRADPIP} from './assets';

export * from '../chem-m6-c10/parts';

export const BUF = '#1f8a7a';
export const WATERL = '#6fa8d6';
export const GREYC = '#c9c3b8';

// ---------- graduated pipette, upright about its tip ----------
const GP_LEN = Math.hypot(GP_G.top[0] - GP_G.tip[0], GP_G.top[1] - GP_G.tip[1]);
const GP_ROT = -(Math.atan2(GP_G.top[0] - GP_G.tip[0], GP_G.tip[1] - GP_G.top[1]) * 180) / Math.PI;
/** The pipette stands with its tip at (tipX, tipY) and its axis `len` px long. drop: frame a drop leaves the tip. */
export const GradPip: React.FC<{tipX: number; tipY: number; len: number; at: number; out?: number; o?: number; drop?: number; fall?: number; dropColor?: string}> = ({tipX, tipY, len, at, out, o = 1, drop, fall = 120, dropColor = '#9fc6e4'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const k = len / GP_LEN;
	const h = GRADPIP.box[3] * k;
	const x = tipX - (GP_G.tip[0] - GRADPIP.box[0]) * k, y = tipY - (GP_G.tip[1] - GRADPIP.box[1]) * k;
	const d = drop === undefined ? -1 : clamp01((f - drop) / 16);
	const dy = d * d * fall;
	return (
		<g opacity={v}>
			<g transform={`rotate(${GP_ROT} ${tipX} ${tipY})`}><PicH p={GRADPIP} x={x} y={y} h={h} /></g>
			{d > 0 && d < 1 ? <path d={`M${tipX},${tipY + 4 + dy} q7,12 0,18 q-7,-6 0,-18 Z`} fill={dropColor} stroke={WATER_INK} strokeWidth={1.5} /> : null}
		</g>
	);
};

// ---------- the buffer lens ----------
export type BSite = {u: number; v: number; a?: number; kind: 'HA' | 'An' | 'Na' | 'Cl' | 'H3O' | 'OH'; at?: number; out?: number; flip?: number; by?: 'H' | 'OH'; enter?: number; ph?: number; src?: [number, number]; srcAt?: number};
const T_ARR = 26, T_HOP = 12;
/** cx, cy, r: the lens (draw inside LensFrame). s: glyph scale. Flipping sites need `flip` and `by`. */
export const BLens: React.FC<{cx: number; cy: number; r: number; sites: BSite[]; s?: number; o?: number}> = ({cx, cy, r, sites, s = 1.5, o = 1}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={o}>
			{sites.map((st, i) => {
				const ph = st.ph ?? i * 1.7;
				const wx = Math.sin(f * 0.03 + ph) * 4, wy = Math.cos(f * 0.027 + ph * 1.3) * 4;
				let x = cx + st.u * r + wx, y = cy + st.v * r + wy;
				const a = st.a ?? -0.6;
				let ov = vis(f, st.at ?? -1000, st.out, 14);
				if (st.enter !== undefined) {
					const e = smooth(clamp01((f - st.enter) / 24));
					if (f < st.enter) return null;
					y = lerp(cy - r - 40, y, e);
					ov = Math.min(1, ov * 2);
				}
				if (ov <= 0.01) return null;
				const g = (node: React.ReactNode) => <g key={i} opacity={ov}>{node}</g>;
				if (st.kind === 'Na') return g(<NaTok x={x} y={y} s={0.75 * s / 1.5} grey={1} />);
				if (st.kind === 'Cl') return g(<ClTok x={x} y={y} s={0.75 * s / 1.5} grey={1} />);
				if (st.kind === 'H3O') return g(<H3O x={x} y={y} s={s * 0.9} />);
				if (st.kind === 'OH') return g(<OHg x={x} y={y} s={s * 0.9} />);
				const T: [number, number] = [x + 38 * s * 0.9, y - 22 * s * 0.9];
				const from: [number, number] = st.src ? [cx + st.src[0] * r, cy + st.src[1] * r] : [T[0] + 30, cy - r - 50];
				const sIn = st.src && st.srcAt !== undefined ? smooth(clamp01((f - st.srcAt) / 24)) : 1;
				const waitPos: [number, number] = [from[0] + wx, lerp(cy - r - 40, from[1], sIn) + wy];
				const waiting = st.src !== undefined && st.srcAt !== undefined && f >= st.srcAt && f < st.flip! - T_ARR;
				if (st.flip === undefined || st.by === undefined) return g(st.kind === 'HA' ? <HA x={x} y={y} s={s} a={a} /> : <An x={x} y={y} s={s} />);
				const t0 = st.flip;
				const e = smooth(clamp01((f - (t0 - T_ARR)) / T_ARR));
				const hp = smooth(clamp01((f - t0) / T_HOP));
				const wOut = 1 - prog(f, t0 + 46, 24);
				const inc: [number, number] = [lerp(from[0], T[0], e), lerp(from[1], T[1], e)];
				const [hx, hy] = hPos(x, y, s, a);
				if (st.by === 'H') {
					return g(
						<g>
							{f < t0 + T_HOP ? <An x={x} y={y} s={s} /> : <HA x={x} y={y} s={s} a={a} />}
							{waiting ? <H3O x={waitPos[0]} y={waitPos[1]} s={s * 0.9} /> : null}
							{f >= t0 - T_ARR && f < t0 ? <H3O x={inc[0]} y={inc[1]} s={s * 0.9} /> : null}
							{f >= t0 ? <WaterT x={T[0] - 4} y={T[1] + 4} s={s * 0.62} o={wOut} /> : null}
							{f >= t0 && f < t0 + T_HOP ? <circle cx={lerp(T[0] + 6, hx, hp)} cy={lerp(T[1] - 6, hy, hp)} r={9 * s * 0.9} fill={PROTON} stroke={PROTON_INK} strokeWidth={2} /> : null}
						</g>,
					);
				}
				return g(
					<g>
						{f < t0 ? <HA x={x} y={y} s={s} a={a} /> : <An x={x} y={y} s={s} />}
						{waiting ? <OHg x={waitPos[0]} y={waitPos[1]} s={s * 0.9} /> : null}
						{f >= t0 - T_ARR && f < t0 + T_HOP ? <OHg x={inc[0]} y={inc[1]} s={s * 0.9} /> : null}
						{f >= t0 && f < t0 + T_HOP ? <circle cx={lerp(hx, T[0] - 6, hp)} cy={lerp(hy, T[1] - 4, hp)} r={6.5 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={2} /> : null}
						{f >= t0 + T_HOP ? <WaterT x={T[0]} y={T[1]} s={s * 0.62} o={wOut} /> : null}
					</g>,
				);
			})}
		</g>
	);
};

// ---------- the ratio bar ----------
export type Slice = {at: number; n: number; dur?: number};
/** Two columns from baseline `base`: acid (amber) at x, base (violet) at x + bw + gap; heights n × k px. */
export const RatioBar: React.FC<{x: number; base: number; k: number; nA: (f: number) => number; nB: (f: number) => number; at: number; out?: number; o?: number; bw?: number; gap?: number;
	labA?: string; labB?: string; valA?: (f: number) => string; valB?: (f: number) => string; size?: number; slices?: Slice[]; greyB?: number; mid?: {t: string; at: number; out?: number; color?: string}; valAt?: number; valOut?: number}> = ({
	x, base, k, nA, nB, at, out, o = 1, bw = 90, gap = 46, labA = 'acid, HA', labB = 'base, A^{−}', valA, valB, size = 28, slices = [], greyB, mid, valAt, valOut}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const grow = smooth(prog(f, at, 22));
	const hA = nA(f) * k * grow, hB = nB(f) * k * grow;
	const xB = x + bw + gap;
	const gB = greyB === undefined ? 0 : prog(f, greyB, 16);
	const colB = hexMix(BASE, GREYC, gB), inkB = hexMix(BASE_INK, '#9a948a', gB);
	return (
		<g opacity={v}>
			<line x1={x - 18} y1={base} x2={xB + bw + 18} y2={base} stroke={INK_SOFT} strokeWidth={3} strokeLinecap="round" />
			<rect x={x} y={base - hA} width={bw} height={Math.max(0, hA)} rx={6} fill={ACID} stroke={ACID_INK} strokeWidth={2.5} opacity={0.9} />
			{hB > 0.5 ? <rect x={xB} y={base - hB} width={bw} height={hB} rx={6} fill={colB} stroke={inkB} strokeWidth={2.5} opacity={0.9} /> : null}
			{gB > 0.01 ? <rect x={xB} y={base - 8} width={bw} height={8} rx={3} fill="none" stroke={inkB} strokeWidth={2} strokeDasharray="5 4" opacity={gB} /> : null}
			{slices.map((sl, i) => {
				const d = sl.dur ?? 24;
				const p = clamp01((f - sl.at) / d);
				if (f < sl.at || p >= 1) return null;
				const e = smooth(p);
				const sh = sl.n * k;
				const y0 = base - nB(sl.at - 1) * k, y1 = base - nA(sl.at + d) * k;
				const lift = Math.sin(e * Math.PI) * 40;
				return <rect key={i} x={lerp(xB, x, e)} y={lerp(y0, y1, e) - lift} width={bw} height={sh} rx={4} fill={hexMix(BASE, ACID, e)} stroke={INK} strokeWidth={1.5} opacity={0.95} />;
			})}
			<Sx x={x + bw / 2} y={base + size * 1.25} text={labA} size={size} color={ACID_INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={xB + bw / 2} y={base + size * 1.25} text={labB} size={size} color={inkB} anchor="middle" weight={700} at={-1000} />
			{valA ? <Sx x={x + bw / 2} y={base - hA - 14} text={valA(f)} size={size * 0.9} color={ACID_INK} anchor="middle" weight={700} at={valAt ?? at + 10} out={valOut} /> : null}
			{valB ? <Sx x={xB + bw / 2} y={base - hB - 14} text={valB(f)} size={size * 0.9} color={inkB} anchor="middle" weight={700} at={valAt ?? at + 10} out={valOut} /> : null}
			{mid ? <Sx x={x + bw + gap / 2} y={base - Math.max(hA, hB) - 60} text={mid.t} size={size} color={mid.color ?? INK} anchor="middle" weight={800} at={mid.at} out={mid.out} /> : null}
		</g>
	);
};
export const ratioW = (bw = 90, gap = 46) => 2 * bw + gap;

// ---------- buffer and water curves (author note g; full equilibrium, Ka 1.8e-5) ----------
const KA = 1.8e-5;
const quad = (b: number, c: number) => (-b + Math.sqrt(b * b - 4 * c)) / 2;
/** pH of 10.0 mmol ethanoic acid + 10.0 mmol ethanoate in 100 mL after v mL of 1.0 mol/L HCl. */
export const bufPH = (v: number) => {
	const V = (100 + v) / 1000;
	if (v < 10) {
		const cHA = (10 + v) / 1000 / V, cA = (10 - v) / 1000 / V;
		return -Math.log10(quad(cA + KA, -KA * cHA));
	}
	const cHA = 0.02 / V, e = (v - 10) / 1000 / V;
	const x = quad(e + KA, -KA * cHA);
	return -Math.log10(e + x);
};
/** pH of 100 mL water after v mL of 1.0 mol/L HCl. */
export const waterPH = (v: number) => -Math.log10(v / (100 + v) + 1e-7);
export const BUF_X = [...Array.from({length: 96}, (_, i) => i * 0.1), 9.6, 9.7, 9.8, 9.85, 9.9, 9.95, 10, 10.1, 10.25, 10.5, 10.75, 11, 11.5, 12];
export const WAT_X = [0, 0.0001, 0.0003, 0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.35, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// ---------- line graph ----------
export type GLineSpec = {xs: number[]; fn: (x: number) => number; color: string; upto: (f: number) => number; width?: number; at: number};
export const PHGraph: React.FC<{x: number; y: number; w: number; h: number; xMax: number; yMax: number; at: number; out?: number; o?: number; xLabel: string; yLabel: string; xTicks: number[]; yTicks: number[]; lines: GLineSpec[]; size?: number}> = ({x, y, w, h, xMax, yMax, at, out, o = 1, xLabel, yLabel, xTicks, yTicks, lines, size = 26}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const X = (q: number) => x + (q / xMax) * w, Y = (p: number) => y + h - (Math.max(0, Math.min(yMax, p)) / yMax) * h;
	const ax = smooth(prog(f, at, 20));
	return (
		<g opacity={v}>
			{yTicks.map(t => <line key={'g' + t} x1={x} y1={Y(t)} x2={x + w} y2={Y(t)} stroke="#e4dccb" strokeWidth={2} />)}
			<line x1={x} y1={y + h} x2={x + w * ax} y2={y + h} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<line x1={x} y1={y + h} x2={x} y2={y + h - h * ax} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			{xTicks.map(t => <Sx key={'x' + t} x={X(t)} y={y + h + size * 1.3} text={String(t)} size={size} color={INK_SOFT} anchor="middle" weight={600} at={at + 10} />)}
			{yTicks.map(t => <Sx key={'y' + t} x={x - 16} y={Y(t) + size * 0.35} text={String(t)} size={size} color={INK_SOFT} anchor="end" weight={600} at={at + 10} />)}
			<Sx x={x + w / 2} y={y + h + size * 2.7} text={xLabel} size={size} color={INK} anchor="middle" weight={700} at={at + 10} />
			<Sx x={x - 70} y={y - 24} text={yLabel} size={size + 2} color={INK} anchor="start" weight={800} at={at + 10} />
			{lines.map((L, i) => {
				if (f < L.at) return null;
				const m = L.upto(f);
				if (m <= 0) return null;
				const pts = L.xs.filter(q => q <= m).map(q => [X(q), Y(L.fn(q))]);
				if (pts.length && L.xs[L.xs.length - 1] > m && m > (L.xs.filter(q => q <= m).pop() ?? 0)) pts.push([X(m), Y(L.fn(m))]);
				if (pts.length < 2) return null;
				return <path key={i} d={`M${pts.map(p => p.join(',')).join(' L')}`} fill="none" stroke={L.color} strokeWidth={L.width ?? 6} strokeLinecap="round" strokeLinejoin="round" />;
			})}
		</g>
	);
};
export const gX = (x: number, w: number, xMax: number, q: number) => x + (q / xMax) * w;
export const gY = (y: number, h: number, yMax: number, p: number) => y + h - (p / yMax) * h;

// ---------- short pH line with a sliding pKa marker ----------
export const PKLine: React.FC<{x: number; y: number; w: number; at: number; out?: number; o?: number; pos: (f: number) => number}> = ({x, y, w, at, out, o = 1, pos}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const d = smooth(prog(f, at, 20));
	const mx = x + w / 2, px = x + w / 2 + pos(f) * (w / 2) * 0.7;
	return (
		<g opacity={v}>
			<line x1={x} y1={y} x2={x + w * d} y2={y} stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" />
			<path d={`M${x + w * d - 4},${y - 12} L${x + w * d + 14},${y} L${x + w * d - 4},${y + 12}`} fill="none" stroke={INK_SOFT} strokeWidth={4} opacity={d} />
			<Sx x={x + w + 30} y={y + 12} text="pH" size={34} color={INK_SOFT} weight={800} at={at + 10} />
			<line x1={mx} y1={y - 22} x2={mx} y2={y + 22} stroke={INK} strokeWidth={4} />
			<Sx x={mx} y={y + 62} text="pKa" size={32} color="#2c4a7a" anchor="middle" weight={800} at={at + 10} />
			<path d={`M${px - 14},${y - 46} L${px + 14},${y - 46} L${px},${y - 18} Z`} fill={BUF} stroke={INK} strokeWidth={1.5} opacity={prog(f, at + 14, 12)} />
		</g>
	);
};

// ---------- blood pH ruler ----------
export const BloodRuler: React.FC<{x: number; y: number; w: number; at: number; bandAt: number; out?: number; o?: number}> = ({x, y, w, at, bandAt, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const X = (p: number) => x + ((p - 7.0) / 0.8) * w;
	const d = smooth(prog(f, at, 20));
	const b = smooth(prog(f, bandAt, 18));
	return (
		<g opacity={v}>
			<rect x={X(7.35)} y={y - 30} width={(X(7.45) - X(7.35)) * b} height={60} rx={8} fill={BUF} opacity={0.3} />
			<line x1={x} y1={y} x2={x + w * d} y2={y} stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" />
			{[7.0, 7.2, 7.4, 7.6, 7.8].map(p => (
				<g key={p} opacity={prog(f, at + 8, 10)}>
					<line x1={X(p)} y1={y - 12} x2={X(p)} y2={y + 12} stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={X(p)} y={y + 50} text={p.toFixed(1)} size={28} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
				</g>
			))}
			<Sx x={x - 24} y={y + 12} text="pH" size={32} color={INK_SOFT} anchor="end" weight={800} at={at + 8} />
			<Sx x={(X(7.35) + X(7.45)) / 2} y={y - 46} text="7.35 to 7.45" size={30} color={BUF} anchor="middle" weight={800} at={bandAt + 6} />
		</g>
	);
};
export const bloodX = (x: number, w: number, p: number) => x + ((p - 7.0) / 0.8) * w;

/** A small soft label line with a leading dot (for the lens captions). */
export const Dot: React.FC<{x: number; y: number; color: string; r?: number}> = ({x, y, color, r = 9}) => <circle cx={x} cy={y} r={r} fill={color} />;
void DrawPath; void Fade; void mw; void WATERL;
