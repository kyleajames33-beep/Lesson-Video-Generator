// M7 P05 (Biology practical: antimicrobial discs) drawing parts: the constant board (question and the seven-step rail,
// as p02), disc-plate geometry (disc centres on a plate drawn at any size, uniform rotation and mirror, never
// stretched), letter chips that follow their discs, the diffusion halo (amber dots dense at the disc, thinning out),
// dashed rings, the amber diameter line, the ruler readout (the painted clear ruler placed at the plate's mm scale,
// coded numerals and end ticks), a clip box for camera moves, a padlock glyph and a tap arrow. p02, M6 P01 and
// B-series parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, BaseLabel, Bench, CARD, CTag, CrossChip, DrawPath, Dish, EDGE, FONT_DISPLAY, GREEN, GREEN_SOFT, GREYT, GREY_INK, GTag, INK, INK_SOFT, MovingDrop, PenLink,
	Pl, PlateB, RowBox, SpreaderArc, Sx, TEAL, TEAL_SOFT, TERRA, TERRA_SOFT, TempBand, VIOLET, VIOLET_SOFT, WText, clamp01, crossChipW, ctagH, fitW, lerp, prog, ptOf, pulse,
	rng, smooth, tw, vis, wrapT, dishGeo,
} from '../bio-m7-p02/parts';
import type {PB} from '../bio-m7-p02/parts';
import {FEAT, PLATES} from './assets';

export {
	AMBER, AMBER_INK, BaseLabel, Bench, CARD, CTag, CrossChip, DrawPath, Dish, EDGE, FONT_DISPLAY, GREEN, GREEN_SOFT, GREYT, GREY_INK, GTag, INK, INK_SOFT, MovingDrop, PenLink,
	Pl, PlateB, RowBox, SpreaderArc, Sx, TEAL, TEAL_SOFT, TERRA, TERRA_SOFT, TempBand, VIOLET, VIOLET_SOFT, WText, clamp01, crossChipW, ctagH, fitW, lerp, prog, ptOf, pulse,
	rng, smooth, tw, vis, wrapT, dishGeo, FEAT, PLATES,
};
export type {PB};

// ---------- board ----------
export const QUESTION = 'What can a zone tell you?';
export const STEPS = ['1 what a zone is', '2 plan', '3 set up', '4 incubate safely', '5 measure', '6 what it shows', '7 stay safe'];
/** The method step rail under the question; `lit` lights at `at`, earlier steps read as done. */
export const Rail: React.FC<{lit: number; at?: number; o?: number}> = ({lit, at = 0, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	let x = 96;
	return (
		<g opacity={o * prog(f, Math.min(at, 0), 10)}>
			{STEPS.map((s, i) => {
				const w = tw(s, 22) + 36;
				const x0 = x;
				x += w + 10;
				const on = i === lit ? prog(f, at, 12) : 0;
				const done = i < lit;
				return (
					<g key={s}>
						<rect x={x0} y={180} width={w} height={42} rx={21} fill={on > 0.5 ? AMBER : CARD} stroke={on > 0.5 ? AMBER_INK : done ? INK_SOFT : EDGE} strokeWidth={on > 0.5 ? 3 : 2} />
						<text x={x0 + w / 2} y={208} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 22}} fill={on > 0.5 ? INK : done ? INK_SOFT : GREYT}>{s}</text>
					</g>
				);
			})}
		</g>
	);
};
export const RZ = {x: 1290, w: 570};

// ---------- disc-plate geometry ----------
export type DiscKey = 'A' | 'B' | 'C' | 'blank';
export const DISCS: DiscKey[] = ['A', 'B', 'C', 'blank'];
/** Screen scale of a disc plate drawn at width w. */
export const kOf = (w: number) => w / (PLATES.zones.box[2] - PLATES.zones.box[0]);
/** Screen point of a natural point on a disc plate at (cx, cy, w), mirrored (base view) then rotated, as PlateB draws. */
export const dpt = (cx: number, cy: number, w: number, uv: [number, number], rot = 0, mirror = false): [number, number] => {
	const k = kOf(w);
	let dx = (uv[0] - FEAT.c[0]) * k;
	const dy = (uv[1] - FEAT.c[1]) * k;
	if (mirror) dx = -dx;
	const a = (rot * Math.PI) / 180;
	return [cx + dx * Math.cos(a) - dy * Math.sin(a), cy + dx * Math.sin(a) + dy * Math.cos(a)];
};
export const discAt = (cx: number, cy: number, w: number, d: DiscKey, rot = 0, mirror = false) => dpt(cx, cy, w, FEAT.disc[d], rot, mirror);
/** Screen px per mm on a disc plate at width w. */
export const mmOf = (w: number) => FEAT.mm * kOf(w);
/** A disc plate (fresh or zones), mirrored for the base view if asked; uniform scale and rotation only. */
export const DPlate: React.FC<{p: PB; cx: number; cy: number; w: number; o?: number; rot?: number; mirror?: boolean; dim?: number}> = ({p, cx, cy, w, o = 1, rot = 0, mirror = false, dim = 0}) => {
	if (o <= 0.01) return null;
	const d = clamp01(dim);
	return <g opacity={1 - 0.5 * d}><PlateB p={p} cx={cx} cy={cy} w={w} o={o} rot={rot} flipX={mirror} filter={d > 0.01 ? `grayscale(${d})` : undefined} /></g>;
};
/** A small letter chip (violet by default). */
export const LetterChip: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; fill?: string; o?: number}> = ({x, y, text, at, out, size = 26, color = VIOLET, fill = VIOLET_SOFT, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const w = tw(text, size, true) + 26, h = size + 14;
	return (
		<g opacity={v}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={2.5} />
			<Sx x={x} y={y + size * 0.36} text={text} size={size} color={color} hand weight={700} anchor="middle" at={-100} />
		</g>
	);
};
/** Letter chips for the four discs of a plate drawn at (cx, cy, w, rot, mirror), pushed outward from the dish centre. */
export const DiscChips: React.FC<{cx: number; cy: number; w: number; at: number; rot?: number; mirror?: boolean; size?: number; away?: number; o?: number; blankAt?: number; blankGreen?: number; only?: DiscKey[]}> = ({cx, cy, w, at, rot = 0, mirror = false, size = 26, away, o = 1, blankAt, blankGreen = 0, only}) => (
	<g>
		{DISCS.filter(d => !only || only.includes(d)).map((d, i) => {
			const [x, y] = discAt(cx, cy, w, d, rot, mirror);
			const ux = x - cx, uy = y - cy, L = Math.hypot(ux, uy) || 1;
			const off = away ?? w * 0.13;
			const g = d === 'blank' ? blankGreen : 0;
			return <LetterChip key={d} x={x + (ux / L) * off} y={y + (uy / L) * off} text={d} at={d === 'blank' && blankAt !== undefined ? blankAt : at + i * 4} size={size} o={o} color={g > 0.5 ? GREEN : d === 'blank' ? GREY_INK : VIOLET} fill={g > 0.5 ? GREEN_SOFT : d === 'blank' ? '#eceeef' : VIOLET_SOFT} />;
		})}
	</g>
);

// ---------- halo and lines ----------
/** Diffusion halo: amber dots streaming out from a disc (screen centre x, y; disc radius r0; reach R), dense near the
 *  disc and thinning outward. `edge` is the zone radius; after `dilute` the dots beyond it fade to a few. */
export const Halo: React.FC<{x: number; y: number; r0: number; R: number; edge: number; at: number; dilute?: number; n?: number; o?: number; seed?: number; dot?: number; spread?: number}> = ({x, y, r0, R, edge, at, dilute, n = 170, o = 1, seed = 11, dot = 4, spread = 45}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const r = rng(seed);
	const thin = dilute === undefined ? 0 : prog(f, dilute, 20);
	return (
		<g opacity={o * prog(f, at, 10)}>
			{Array.from({length: n}, (_, i) => {
				const a = r() * Math.PI * 2, u = Math.pow(r(), 1.7), delay = r() * 50, keep = r();
				const target = r0 + (R - r0) * u;
				const p = smooth(clamp01((f - at - delay) / spread));
				if (p <= 0.01) return null;
				const rr = r0 + (target - r0) * p;
				const beyond = target > edge;
				const op = (beyond ? 1 - thin * (keep < 0.15 ? 0.35 : 1) : 1) * (0.5 + 0.5 * (1 - u));
				return op > 0.02 ? <circle key={i} cx={x + Math.cos(a) * rr} cy={y + Math.sin(a) * rr} r={dot} fill={AMBER} opacity={op} /> : null;
			})}
		</g>
	);
};
/** A dashed ring that fades in at `at`. */
export const DashRing: React.FC<{x: number; y: number; r: number; at: number; out?: number; color?: string; width?: number; o?: number}> = ({x, y, r, at, out, color = AMBER_INK, width = 4, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (f < at || v <= 0.01) return null;
	const sc = 0.9 + 0.1 * smooth(prog(f, at, 14));
	return <circle cx={x} cy={y} r={r * sc} fill="none" stroke={color} strokeWidth={width} strokeDasharray="12 9" opacity={v} />;
};
/** An amber diameter line across a zone (centre x, y, radius r, angle deg) with end ticks and an optional label. */
export const DiamLine: React.FC<{x: number; y: number; r: number; at: number; out?: number; label?: string; angle?: number; color?: string; size?: number; dim?: number; labelDy?: number}> = ({x, y, r, at, out, label, angle = 0, color = AMBER_INK, size = 30, dim = 0, labelDy = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (f < at || v <= 0.01) return null;
	const a = (angle * Math.PI) / 180, cx = Math.cos(a), sy = Math.sin(a);
	const p = smooth(prog(f, at, 14));
	const x1 = x - cx * r, y1 = y - sy * r, x2 = x1 + 2 * cx * r * p, y2 = y1 + 2 * sy * r * p;
	const col = dim > 0.5 ? GREYT : color;
	return (
		<g opacity={v}>
			<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={col} strokeWidth={4} strokeLinecap="round" />
			{[[x1, y1], [x2, y2]].map(([px, py], i) => <line key={i} x1={px + sy * 10} y1={py - cx * 10} x2={px - sy * 10} y2={py + cx * 10} stroke={col} strokeWidth={4} strokeLinecap="round" opacity={i ? prog(f, at + 12, 4) : 1} />)}
			{label ? <Sx x={x} y={y - r - 16 + labelDy} text={label} size={size} color={dim > 0.5 ? GREY_INK : color} hand weight={700} anchor="middle" at={at + 10} /> : null}
		</g>
	);
};
/** A drawn-on ring (grey by default). */
export const Circle: React.FC<{x: number; y: number; r: number; at: number; out?: number; color?: string; width?: number}> = ({x, y, r, at, out, color = GREYT, width = 4}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (f < at || v <= 0.01) return null;
	const d = `M${x + r},${y} A${r},${r} 0 1 1 ${x - r},${y} A${r},${r} 0 1 1 ${x + r},${y}`;
	return <g opacity={v}><DrawPath d={d} at={at} dur={16} color={color} width={width} /></g>;
};

// ---------- the ruler readout ----------
/** The painted clear ruler at the plate's scale `mm` (screen px per mm), its tick edge on the line through the pivot
 *  (px, py) at `angle` degrees, the zero tick `start` mm before the pivot. Coded numerals every 10 mm, amber end ticks
 *  at `ticks` (mm from zero) and a readout chip. */
export const Ruler: React.FC<{px: number; py: number; mm: number; angle?: number; start: number; o?: number; ticks?: [number, number]; ticksAt?: number; read?: string; readAt?: number; readColor?: string; nums?: number; readDy?: number}> = ({px, py, mm, angle = 0, start, o = 1, ticks, ticksAt = 1e9, read, readAt = 1e9, readColor = AMBER_INK, nums = 40, readDy = -40}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const rk = mm / FEAT.rulerMm;
	const P = PLATES.ruler;
	const bw = (P.box[2] - P.box[0]) * rk;
	const bcx = (P.box[0] + P.box[2]) / 2, bcy = (P.box[1] + P.box[3]) / 2;
	const lx = -start * mm + (bcx - FEAT.rulerZero) * rk, ly = (bcy - FEAT.rulerEdge) * rk;
	const zx = -start * mm;
	const mid = ticks ? zx + ((ticks[0] + ticks[1]) / 2) * mm : 0;
	return (
		<g opacity={o} transform={`translate(${px},${py}) rotate(${angle})`}>
			<PlateB p={P} cx={lx} cy={ly} w={bw} />
			{Array.from({length: Math.floor(nums / 10) + 1}, (_, i) => <text key={i} x={zx + i * 10 * mm} y={Math.max(30, 50 * rk)} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: Math.max(15, 24 * rk)}} fill={INK_SOFT}>{i * 10}</text>)}
			{ticks ? ticks.map((t, i) => {
				const q = prog(f, ticksAt + i * 8, 8);
				return q > 0.01 ? <line key={i} x1={zx + t * mm} x2={zx + t * mm} y1={-24} y2={14} stroke={AMBER} strokeWidth={5} strokeLinecap="round" opacity={q} /> : null;
			}) : null}
			{read && f >= readAt ? (
				<g opacity={prog(f, readAt, 10)} transform={`rotate(${-angle},${mid},${-50}) translate(0,${readDy})`}>
					<rect x={mid - 70} y={-74} width={140} height={44} rx={22} fill="#fffdf8" stroke={readColor} strokeWidth={3} />
					<text x={mid} y={-43} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 27}} fill={readColor}>{read}</text>
				</g>
			) : null}
		</g>
	);
};

// ---------- small glyphs ----------
/** A clip rectangle for camera moves (unique id). */
export const Clip: React.FC<{id: string; x: number; y: number; w: number; h: number; children: React.ReactNode}> = ({id, x, y, w, h, children}) => (
	<g>
		<defs><clipPath id={id}><rect x={x} y={y} width={w} height={h} rx={26} /></clipPath></defs>
		<g clipPath={`url(#${id})`}>{children}</g>
	</g>
);
/** A padlock glyph whose shackle drops shut at `at`. */
export const Padlock: React.FC<{x: number; y: number; at: number; s?: number; color?: string}> = ({x, y, at, s = 1, color = TERRA}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10);
	if (o <= 0.01) return null;
	const drop = 12 * (1 - smooth(prog(f, at + 8, 10)));
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			<path d={`M-18,${-4 - drop} L-18,${-26 - drop} A18,18 0 0 1 18,${-26 - drop} L18,${-4 - drop}`} fill="none" stroke={color} strokeWidth={7} strokeLinecap="round" />
			<rect x={-28} y={-6} width={56} height={44} rx={8} fill={TERRA_SOFT} stroke={color} strokeWidth={5} />
			<circle cx={0} cy={14} r={5} fill={color} />
		</g>
	);
};
/** A small down arrow tapping at (x, y), once, from `at`. */
export const Tap: React.FC<{x: number; y: number; at: number; color?: string}> = ({x, y, at, color = INK_SOFT}) => {
	const f = useCurrentFrame();
	if (f < at || f > at + 30) return null;
	const u = clamp01((f - at) / 30);
	const dy = -22 + 14 * Math.sin(u * Math.PI);
	return <g opacity={Math.sin(u * Math.PI)}><path d={`M${x},${y + dy - 30} L${x},${y + dy} M${x - 9},${y + dy - 10} L${x},${y + dy} L${x + 9},${y + dy - 10}`} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" /></g>;
};
/** A dish crossfade: a to b at `swap`, same box, same place. */
export const DSwap: React.FC<{a: PB; b: PB; cx: number; cy: number; w: number; swap: number; dur?: number; o?: number; rot?: number; mirror?: boolean; dim?: number}> = ({a, b, cx, cy, w, swap, dur = 18, o = 1, rot = 0, mirror = false, dim = 0}) => {
	const f = useCurrentFrame();
	const q = prog(f, swap, dur);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{q < 0.999 ? <DPlate p={a} cx={cx} cy={cy} w={w} rot={rot} mirror={mirror} dim={dim} /> : null}
			{q > 0.001 ? <DPlate p={b} cx={cx} cy={cy} w={w} o={q} rot={rot} mirror={mirror} dim={dim} /> : null}
		</g>
	);
};
/** Grey caption text helper (one line). */
export const Cap: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; anchor?: 'start' | 'middle' | 'end'; color?: string}> = ({x, y, text, at, out, size = 24, anchor = 'start', color = GREY_INK}) => (
	<Sx x={x} y={y} text={text} size={size} color={color} weight={600} anchor={anchor} at={at} out={out} />
);
void Dish; void ptOf; void fitW; void pulse; void lerp; void wrapT; void ctagH; void crossChipW; void TEAL; void TEAL_SOFT; void GTag; void CTag; void Bench; void Pl; void PenLink;
void MovingDrop; void SpreaderArc; void TempBand; void BaseLabel; void RowBox; void CrossChip; void WText; void dishGeo;
