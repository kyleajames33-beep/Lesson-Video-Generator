// M7 B02 drawing parts: flasks placed by their bulb (all five share one box, so crossfades stay aligned), points on
// the swan neck, air arrows along the neck, dust specks that settle in the low bend or fall straight in, steam wisps,
// growth insets, a clock tag, the haze and heap for miasma, the two-question banner and the small grey bay cards, the
// Koch step bays (find it, grow it, give it, find it again, with their plates), the step strip with ticks and gaps
// (StepCheck), and a DNA strip. B01 (M7) host circles and M6 B01/B07/B09 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, rng, scribbleEllipse} from '../../kit';
import {Ring, Sx, tw} from '../bio-m5-b13/shared';
import {CARD, EDGE, GREYT, GREY_INK, GTag, clamp01, lerp, smooth, vis} from '../bio-m6-b01/parts';
import {GreyCross, Tg} from '../bio-m6-b07/parts';
import {Pl, plH} from '../bio-m6-b09/parts';
import {HChip, HostCircle, HostRow, fitW, kOf, ptOf, pulse} from '../bio-m7-b01/parts';
import type {PB} from '../bio-m5-b07/shared';
import {COLONIES, FLK, PLATES, RODS} from './assets';

export {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, rng, scribbleEllipse, Ring, Sx, tw, CARD, EDGE, GREYT, GREY_INK, GTag, clamp01, lerp, smooth, vis, GreyCross, Tg, Pl, plH, HChip, HostCircle, HostRow, fitW, kOf, ptOf, pulse, PLATES, FLK};
export type {PB};
export const AIR = '#7fb2d6';

// ---------- flasks ----------
const FB = PLATES.swan.box;
const FBW = FB[2] - FB[0];
/** Screen point of a natural flask point for a flask whose bulb centre is at (bx, by) at scale k. */
export const fpt = (bx: number, by: number, k: number, uv: [number, number]): [number, number] => [bx + (uv[0] - FLK.bulb[0]) * k, by + (uv[1] - FLK.bulb[1]) * k];
/** A flask plate placed by its bulb centre. */
export const Flask: React.FC<{p: PB; bx: number; by: number; k: number; o?: number; dim?: number}> = ({p, bx, by, k, o = 1, dim = 0}) => {
	const cx = bx - (FLK.bulb[0] - (FB[0] + FB[2]) / 2) * k;
	const cy = by - (FLK.bulb[1] - (FB[1] + FB[3]) / 2) * k;
	return <Pl p={p} cx={cx} cy={cy} w={FBW * k} o={o} dim={dim} />;
};
/** Bulb-to-broth: the broth surface y on screen. */
export const surfY = (by: number, k: number) => by + (FLK.surface - FLK.bulb[1]) * k;

// ---------- the neck as a path ----------
const segLens = (pts: [number, number][]) => pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
const NECK_L = segLens(FLK.neck);
const NECK_T = NECK_L.reduce((a, b) => a + b, 0);
/** Natural point (and direction) at arc fraction t along the neck (0 = bulb end, 1 = open tip). */
export const neckAt = (t: number): {p: [number, number]; a: number} => {
	let d = clamp01(t) * NECK_T;
	for (let i = 0; i < NECK_L.length; i++) {
		if (d <= NECK_L[i] || i === NECK_L.length - 1) {
			const u = NECK_L[i] ? Math.min(1, d / NECK_L[i]) : 0;
			const a = FLK.neck[i], b = FLK.neck[i + 1];
			return {p: [lerp(a[0], b[0], u), lerp(a[1], b[1], u)], a: Math.atan2(b[1] - a[1], b[0] - a[0])};
		}
		d -= NECK_L[i];
	}
	return {p: FLK.neck[FLK.neck.length - 1], a: 0};
};
/** Arc fraction of the low point of the bend. */
export const T_LOW = (() => {
	let best = 0, by = -1;
	for (let i = 0; i <= 400; i++) { const t = i / 400; const y = neckAt(t).p[1]; if (t > 0.5 && y > by) { by = y; best = t; } }
	return best;
})();
/** The neck centre line drawn on (amber trace), for a flask at (bx, by, k). */
export const NeckTrace: React.FC<{bx: number; by: number; k: number; at: number; out?: number}> = ({bx, by, k, at, out}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (f < at || o <= 0.01) return null;
	const d = FLK.neck.map((p, i) => { const [x, y] = fpt(bx, by, k, p); return `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`; }).join(' ');
	return <g opacity={o}><DrawPath d={d} at={at} dur={34} color={AMBER} width={6} /></g>;
};
/** Pale-blue air arrows moving in and out along the whole neck. */
export const AirFlow: React.FC<{bx: number; by: number; k: number; at: number; o?: number; n?: number}> = ({bx, by, k, at, o = 1, n = 8}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	return (
		<g opacity={o * prog(f, at, 12)}>
			{Array.from({length: n}, (_, i) => {
				const inward = i % 2 === 0;
				const ph = (((f - at) / 90 + i / n) % 1 + 1) % 1;
				const t = inward ? 1 - ph * 0.8 : 0.2 + ph * 0.8;
				const {p, a} = neckAt(t);
				const [x, y] = fpt(bx, by, k, p);
				const dir = inward ? a + Math.PI : a;
				const L = 16;
				const fade = Math.sin(ph * Math.PI);
				const hx = x + Math.cos(dir) * L, hy = y + Math.sin(dir) * L;
				return (
					<g key={i} opacity={fade}>
						<line x1={x - Math.cos(dir) * L} y1={y - Math.sin(dir) * L} x2={hx} y2={hy} stroke={AIR} strokeWidth={4} strokeLinecap="round" />
						<path d={`M${hx - Math.cos(dir - 0.6) * 10},${hy - Math.sin(dir - 0.6) * 10} L${hx},${hy} L${hx - Math.cos(dir + 0.6) * 10},${hy - Math.sin(dir + 0.6) * 10}`} fill="none" stroke={AIR} strokeWidth={4} strokeLinecap="round" />
					</g>
				);
			})}
		</g>
	);
};
const SPECK = ['#7c8389', '#4f8f8a', '#8e8a80', '#5f7f86'];
/** Dust and microbe specks drifting in at the tip, slowing in the curve and settling at the low point of the bend. */
export const DustPath: React.FC<{bx: number; by: number; k: number; at: number; n?: number; o?: number; step?: number}> = ({bx, by, k, at, n = 12, o = 1, step = 8}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const r = rng(13);
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const jx = (r() - 0.5) * 34, jy = r() * 10;
				const t0 = at + i * step;
				if (f < t0) return null;
				const u = 1 - Math.pow(1 - clamp01((f - t0) / 70), 2.4);
				const t = lerp(1.02, T_LOW, u);
				const {p} = neckAt(Math.min(1, t));
				const [x, y] = fpt(bx, by, k, p);
				const settle = u;
				return <circle key={i} cx={x + jx * settle * k * 2.2} cy={y + (jy - 4) * settle * k * 2.2 + 6 * k * 2.2 * settle} r={7.5} fill={SPECK[i % 4]} stroke="#3d4247" strokeWidth={1.2} opacity={prog(f, t0, 6)} />;
			})}
		</g>
	);
};
/** Specks falling straight down from y0 to y1 at x (continuous), e.g. into a straight or broken neck. */
export const DustFall: React.FC<{x: number; y0: number; y1: number; at: number; out?: number; n?: number; spread?: number}> = ({x, y0, y1, at, out, n = 8, spread = 16}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (f < at || o <= 0.01) return null;
	const r = rng(29);
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const jx = (r() - 0.5) * spread;
				const ph = (((f - at) / 46 + i / n) % 1 + 1) % 1;
				return <circle key={i} cx={x + jx + Math.sin(ph * 6 + i) * 3} cy={lerp(y0, y1, ph * ph)} r={7} fill={SPECK[i % 4]} stroke="#3d4247" strokeWidth={1.2} opacity={Math.min(1, ph * 6) * (1 - Math.max(0, ph - 0.9) * 10)} />;
			})}
		</g>
	);
};
/** Short rising steam wisps over (x, y) between at and out. */
export const SteamWisps: React.FC<{x: number; y: number; at: number; out: number; s?: number}> = ({x, y, at, out, s = 1}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{[0, 1, 2].map(i => {
				const ph = (((f - at) / 36 + i / 3) % 1 + 1) % 1;
				const yy = y - ph * 90 * s;
				const xx = x + (i - 1) * 16 * s;
				return <path key={i} d={`M${xx},${yy + 30 * s} q${10 * s},${-12 * s} 0,${-24 * s} q${-10 * s},${-12 * s} 0,${-24 * s}`} fill="none" stroke="#b9c2c8" strokeWidth={4} strokeLinecap="round" opacity={Math.sin(ph * Math.PI) * 0.9} />;
			})}
		</g>
	);
};
/** A small inset whose coded microbe glyphs multiply as `p` goes 0 to 1. */
export const GrowthCounter: React.FC<{x: number; y: number; w?: number; h?: number; p: number; o?: number; max?: number; label?: string}> = ({x, y, w = 200, h = 130, p, o = 1, max = 46, label = 'microbes'}) => {
	if (o <= 0.01) return null;
	const r = rng(7);
	const pts = Array.from({length: max}, () => [x + 14 + r() * (w - 28), y + 30 + r() * (h - 44), r() * 180] as [number, number, number]);
	const n = Math.round(max * clamp01(p) ** 1.6) + (p > 0.01 ? 1 : 0);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={14} fill={CARD} stroke={GREYT} strokeWidth={2.2} />
			<Sx x={x + 12} y={y + 22} text={label} size={18} color={GREY_INK} weight={600} />
			{pts.slice(0, Math.min(max, n)).map(([px, py, a], i) => <ellipse key={i} cx={px} cy={py} rx={7} ry={3.5} transform={`rotate(${a} ${px} ${py})`} fill="#c9a98a" stroke="#8a6a4a" strokeWidth={1.2} />)}
		</g>
	);
};
/** A small grey clock whose hand sweeps once from `at`, with a label. */
export const ClockTag: React.FC<{x: number; y: number; text: string; at: number; out?: number; dim?: number}> = ({x, y, text, at, out, dim = 0}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12) * (1 - 0.5 * dim);
	if (o <= 0.01) return null;
	const a = -Math.PI / 2 + smooth(prog(f, at, 50)) * Math.PI * 2;
	return (
		<g opacity={o}>
			<circle cx={x} cy={y} r={22} fill={CARD} stroke={GREYT} strokeWidth={3} />
			<line x1={x} y1={y} x2={x + Math.cos(a) * 15} y2={y + Math.sin(a) * 15} stroke={GREY_INK} strokeWidth={3} strokeLinecap="round" />
			<Sx x={x + 34} y={y + 10} text={text} size={28} color={GREY_INK} weight={600} />
		</g>
	);
};
/** Grey haze drifting across a band (miasma, "bad air"). */
export const Haze: React.FC<{x: number; y: number; w: number; h: number; o: number}> = ({x, y, w, h, o}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<defs><filter id={`haze-${x}-${y}`} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation={Math.max(14, h * 0.12)} /></filter></defs>
			<g filter={`url(#haze-${x}-${y})`}>
				{Array.from({length: 9}, (_, i) => {
					const cx = x + ((((f / 300) + i / 9) % 1) * (w + 400)) - 200;
					return <ellipse key={i} cx={cx} cy={y + h * (0.25 + 0.17 * (i % 4))} rx={Math.max(120, w * 0.14)} ry={h * 0.26} fill="#9d9a92" opacity={0.22} />;
				})}
			</g>
		</g>
	);
};
/** An abstract coded heap with wavy fumes (rotting matter). */
export const Heap: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-70,20 C-55,-20 -25,-34 0,-34 C25,-34 55,-20 70,20 Z" fill="#cfc4ad" stroke={GREYT} strokeWidth={3} />
		{[-26, 0, 26].map((dx, i) => <path key={i} d={`M${dx},-42 q8,-10 0,-20 q-8,-10 0,-20`} fill="none" stroke={GREYT} strokeWidth={3} strokeLinecap="round" />)}
	</g>
));

// ---------- the bench: banner and grey bay cards ----------
export const Q1 = '1. Where do microbes come from?';
export const Q2 = '2. Which microbe causes which disease?';
export const BANNER_Y = 112;
/** The two-question banner. `lit` 0..1 per question; `tick1` amber tick on Q1; `dash2` grey dash on Q2. */
export const Banner: React.FC<{at?: number; at2?: number; lit?: [number, number]; tick1?: number; dash2?: number; pulse2?: number; o?: number}> = ({at = -100, at2, lit = [0, 0], tick1, dash2, pulse2 = 0, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const items = [{t: Q1, x: 96, at}, {t: Q2, x: 990, at: at2 ?? at}];
	return (
		<g opacity={o}>
			{items.map((it, i) => {
				const v = prog(f, it.at, 14);
				if (v <= 0.01) return null;
				const l = clamp01(lit[i]);
				const w = 834;
				const pl = i === 1 ? pulse2 : 0;
				return (
					<g key={i} opacity={v}>
						<rect x={it.x} y={BANNER_Y} width={w} height={64} rx={32} fill={l > 0.5 ? '#fff6e2' : '#f6f4ef'} stroke={l > 0.5 ? AMBER : EDGE} strokeWidth={l > 0.5 ? 3.5 : 2.5 + 3 * pl} />
						<Sx x={it.x + 30} y={BANNER_Y + 44} text={it.t} size={38} color={l > 0.5 ? INK : GREY_INK} hand weight={700} />
					</g>
				);
			})}
			{tick1 !== undefined && f >= tick1 ? <DrawPath d={`M${96 + 770},${BANNER_Y + 32} l14,16 l26,-30`} at={tick1} dur={12} color={AMBER_INK} width={7} /> : null}
			{dash2 !== undefined && f >= dash2 ? <DrawPath d={`M${990 + 772},${BANNER_Y + 32} l36,0`} at={dash2} dur={10} color={GREYT} width={7} /> : null}
		</g>
	);
};
export const BAY_Y = 205;
/** The Koch bay shrunk to a grey card on the right while Pasteur is spoken about. */
export const KochCard: React.FC<{o?: number}> = ({o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={1590} y={BAY_Y} width={250} height={360} rx={20} fill="#f3f1ec" stroke={EDGE} strokeWidth={2.5} />
		<Sx x={1715} y={BAY_Y + 48} text="Koch" size={34} color={GREY_INK} hand anchor="middle" />
		{['find it', 'grow it', 'give it', 'find it again'].map((t, i) => (
			<g key={i}>
				<rect x={1612} y={BAY_Y + 72 + i * 68} width={206} height={52} rx={12} fill={CARD} stroke={EDGE} strokeWidth={2} />
				<Sx x={1715} y={BAY_Y + 106 + i * 68} text={t} size={26} color={GREY_INK} hand anchor="middle" />
			</g>
		))}
	</g>
));
/** The Pasteur bay shrunk to a grey card on the left while Koch is spoken about. */
export const PasteurCard: React.FC<{o?: number}> = ({o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={80} y={BAY_Y} width={250} height={360} rx={20} fill="#f3f1ec" stroke={EDGE} strokeWidth={2.5} />
		<Sx x={205} y={BAY_Y + 48} text="Pasteur" size={34} color={GREY_INK} hand anchor="middle" />
		<Flask p={PLATES.brokenCloudy} bx={180} by={BAY_Y + 260} k={0.14} dim={0.5} />
		<Flask p={PLATES.swan} bx={250} by={BAY_Y + 260} k={0.08} dim={0.5} />
	</g>
));

// ---------- Koch's four step bays ----------
export const STEPS = ['find it', 'grow it', 'give it', 'find it again'];
export const STEP_X = (i: number) => 380 + i * 365;
export const STEP_W = 345;
export type KochT = {bays: number; find: number; field: number; rods: number; cases: number; healthy: number; grow: number; loop: number; pure: number; give: number; gp: number; sick: number; again: number; eq: number};
export const KOCH_ALL: KochT = {bays: -100, find: -100, field: -100, rods: -100, cases: -100, healthy: -100, grow: -100, loop: -100, pure: -100, give: -100, gp: -100, sick: -100, again: -100, eq: -100};
const MAIN_F = {cx: 615, cy: 470, w: 200};
const AGAIN_F = {cx: 1655, cy: 470, w: 200};
const TUBE = {cx: 960, cy: 470, h: 300};
const GP_P = {cx: 1290, cy: 545, w: 320};
const TUBE2 = {cx: 1140, cy: 330, h: 110};
export const tubeW = (h: number) => (h * (PLATES.serum.box[2] - PLATES.serum.box[0])) / (PLATES.serum.box[3] - PLATES.serum.box[1]);
/**
 * The four bays in their natural layout (x 380 to 1820, y 205 to 700), placed by a uniform transform: `s` scale with
 * the bench centre at `cx` and top at `top`. `lit` lights a bay label; `showCases` shows the five small fields.
 */
export const KochBays: React.FC<{t: KochT; s?: number; cx?: number; top?: number; o?: number; lit?: number[]; dim?: number; showCases?: number; ringO?: number}> = ({t, s = 1, cx = 1100, top = BAY_Y, o = 1, lit = [], dim = 0, showCases = 1, ringO = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const fk = kOf(PLATES.tbField, MAIN_F.w);
	const d = clamp01(dim);
	const tw2 = tubeW(TUBE.h);
	const [colX, colY] = ptOf(PLATES.serum, TUBE.cx, TUBE.cy, tw2, COLONIES);
	const sk = kOf(PLATES.serum, tw2);
	const sick = prog(f, t.sick, 24);
	return (
		<g opacity={o} transform={`translate(${cx - 1100 * s},${top - BAY_Y * s}) scale(${s})`}>
			{STEPS.map((lab, i) => {
				const v = prog(f, t.bays + i * 5, 12);
				const l = clamp01(lit[i] ?? 0);
				return v > 0.01 ? (
					<g key={i} opacity={v * (1 - 0.35 * d * (1 - l))}>
						<rect x={STEP_X(i)} y={BAY_Y} width={STEP_W} height={495} rx={20} fill={CARD} stroke={l > 0.5 ? AMBER : EDGE} strokeWidth={l > 0.5 ? 4 : 2.5} />
						<Sx x={STEP_X(i) + STEP_W / 2} y={BAY_Y + 50} text={lab} size={40} color={l > 0.5 ? AMBER_INK : GREY_INK} hand weight={700} anchor="middle" />
					</g>
				) : null;
			})}
			{/* find it */}
			<Pl p={PLATES.microscope} cx={455} cy={470} w={fitW(PLATES.microscope, 120, 210)} o={prog(f, t.find, 14)} dim={d} />
			<Pl p={PLATES.tbField} cx={MAIN_F.cx} cy={MAIN_F.cy} w={MAIN_F.w} o={prog(f, t.field, 14)} dim={d} />
			<g opacity={ringO}>{RODS.map((rp, i) => { const [x, y] = ptOf(PLATES.tbField, MAIN_F.cx, MAIN_F.cy, MAIN_F.w, rp); return <Ring key={i} cx={x} cy={y} rx={120 * fk} ry={120 * fk} at={t.rods + i * 6} color={AMBER} seed={i + 2} width={4} />; })}</g>
			<g opacity={showCases}>
				{[0, 1, 2, 3].map(i => <Pl key={i} p={PLATES.tbField} cx={425 + i * 66} cy={640} w={58} o={prog(f, t.cases + i * 5, 10)} dim={d} />)}
				<Pl p={PLATES.healthyField} cx={425 + 4 * 66} cy={640} w={58} o={prog(f, t.healthy, 10)} dim={d} />
			</g>
			{/* grow it */}
			{f >= t.loop ? <DrawPath d={`M${MAIN_F.cx + 100},${MAIN_F.cy} L${TUBE.cx - 40},${TUBE.cy}`} at={t.loop} dur={14} color={INK_SOFT} width={4} /> : null}
			<Pl p={PLATES.loop} cx={820} cy={430} w={100} o={prog(f, t.loop + 4, 12)} dim={d} />
			<Pl p={PLATES.serum} cx={TUBE.cx} cy={TUBE.cy} w={tw2} o={prog(f, t.grow, 14)} dim={d} />
			<g opacity={ringO}><Ring cx={colX} cy={colY} rx={150 * sk} ry={250 * sk} at={t.pure} color={AMBER} seed={5} width={4} /></g>
			{/* give it */}
			<Pl p={PLATES.serum} cx={TUBE2.cx} cy={TUBE2.cy} w={tubeW(TUBE2.h)} o={prog(f, t.give, 12)} dim={d} />
			{f >= t.give + 6 ? <DrawPath d={`M${TUBE2.cx + 16},${TUBE2.cy + 40} Q${TUBE2.cx + 60},${GP_P.cy - 110} ${GP_P.cx - 30},${GP_P.cy - 90}`} at={t.give + 6} dur={14} color={INK_SOFT} width={4} /> : null}
			<Pl p={PLATES.gp} cx={GP_P.cx} cy={GP_P.cy} w={GP_P.w} o={prog(f, t.gp, 14) * (1 - sick)} dim={d} />
			<Pl p={PLATES.gpSick} cx={GP_P.cx} cy={GP_P.cy} w={GP_P.w} o={prog(f, t.gp, 14) * sick} dim={d} />
			{/* find it again */}
			<Pl p={PLATES.tbField} cx={AGAIN_F.cx} cy={AGAIN_F.cy} w={AGAIN_F.w} o={prog(f, t.again, 14)} dim={d} />
			<g opacity={ringO}>{RODS.map((rp, i) => { const [x, y] = ptOf(PLATES.tbField, AGAIN_F.cx, AGAIN_F.cy, AGAIN_F.w, rp); return <Ring key={i} cx={x} cy={y} rx={120 * fk} ry={120 * fk} at={t.again + 14 + i * 6} color={AMBER} seed={i + 7} width={4} />; })}</g>
			{f >= t.eq ? (
				<g opacity={prog(f, t.eq, 12)}>
					<DrawPath d={`M${AGAIN_F.cx},${AGAIN_F.cy + 110} Q${(AGAIN_F.cx + MAIN_F.cx) / 2},${AGAIN_F.cy + 250} ${MAIN_F.cx},${MAIN_F.cy + 110}`} at={t.eq} dur={22} color={AMBER} width={4} dash="12 9" />
					<rect x={(AGAIN_F.cx + MAIN_F.cx) / 2 - 30} y={AGAIN_F.cy + 150} width={60} height={50} rx={12} fill="#fff6e2" stroke={AMBER} strokeWidth={3} />
					<Sx x={(AGAIN_F.cx + MAIN_F.cx) / 2} y={AGAIN_F.cy + 188} text="=" size={44} color={AMBER_INK} weight={800} anchor="middle" />
				</g>
			) : null}
		</g>
	);
};
/** Screen x of a bay centre for a bench drawn at scale s centred at cx. */
export const bayCx = (i: number, s = 1, cx = 1100) => cx - 1100 * s + (STEP_X(i) + STEP_W / 2) * s;
export const bayBottom = (s = 1, top = BAY_Y) => top + 495 * s;

// ---------- the step strip with StepCheck ----------
export type Check = {k: 'tick' | 'gap'; at: number};
/** Four labelled step boxes in a row; each may take an amber tick or a grey gap (StepCheck) at a frame. */
export const StepStrip: React.FC<{x: number; y: number; w?: number; at: number; checks?: (Check | undefined)[]; dimTicks?: number; size?: number}> = ({x, y, w = 330, at, checks = [], dimTicks, size = 34}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const gap = 22;
	return (
		<g opacity={o}>
			{STEPS.map((lab, i) => {
				const c = checks[i];
				const bx = x + i * (w + gap);
				const isGap = c && c.k === 'gap' && f >= c.at;
				const tickDim = c && c.k === 'tick' && dimTicks !== undefined ? prog(f, dimTicks, 12) : 0;
				return (
					<g key={i}>
						<rect x={bx} y={y} width={w} height={72} rx={18} fill={isGap ? '#f3f2ee' : CARD} stroke={isGap ? GREYT : EDGE} strokeWidth={2.5} strokeDasharray={isGap ? '10 7' : undefined} />
						<Sx x={bx + 24} y={y + 48} text={lab} size={size} color={isGap ? GREY_INK : INK} hand weight={700} />
						{c && c.k === 'tick' && f >= c.at ? <g opacity={1 - 0.6 * tickDim}><DrawPath d={`M${bx + w - 70},${y + 36} l16,18 l30,-34`} at={c.at} dur={12} color={AMBER_INK} width={7} /></g> : null}
						{isGap ? <DrawPath d={`M${bx + w - 72},${y + 36} l40,0`} at={c.at} dur={10} color={GREYT} width={7} /> : null}
					</g>
				);
			})}
		</g>
	);
};
export const stripX = (i: number, x: number, w = 330) => x + i * (w + 22);

// ---------- a coded DNA strip ----------
export const DnaStrip: React.FC<{x: number; y: number; w?: number; o?: number; draw?: number}> = ({x, y, w = 160, o = 1, draw = 1}) => {
	if (o <= 0.01) return null;
	const n = 10;
	const cols = ['#c4632e', '#3d7fb0', '#e2b13b', '#5e9c5a'];
	const shown = Math.ceil(n * clamp01(draw));
	return (
		<g opacity={o}>
			<line x1={x} x2={x + (w * shown) / n} y1={y} y2={y} stroke="#6e2a63" strokeWidth={4} />
			<line x1={x} x2={x + (w * shown) / n} y1={y + 30} y2={y + 30} stroke="#6e2a63" strokeWidth={4} />
			{Array.from({length: shown}, (_, i) => <rect key={i} x={x + (i + 0.3) * (w / n)} y={y + 4} width={w / n * 0.4} height={22} fill={cols[(i * 7 + 3) % 4]} />)}
		</g>
	);
};
export const useF = () => useCurrentFrame();
void scribbleEllipse; void GTag; void GreyCross; void Tg; void plH; void HChip; void HostCircle; void HostRow; void pulse; void tw; void smooth;
