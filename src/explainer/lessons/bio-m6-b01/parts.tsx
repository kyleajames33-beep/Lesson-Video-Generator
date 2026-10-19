// M6 Biology drawing parts (B01 builds them; B02 and later mutation videos import them). One visual system with the
// B12 v3 DNA look: slim strands (two thin lines with fine rungs), a soft gene band, single highlighted positions with
// small base callouts, never letter-tile strips. Allele rings never rely on colour alone: original allele = open ring,
// a second existing allele = ring with a centre dot, new allele = amber ring with a notch, an allele brought in by gene
// flow = blue ring with a square notch, slightly resistant = thin partial arc.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, BLUE_SOFT, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng} from '../../kit';
import {Fade, GREYT, GREY_INK, PlateB, SERIF, Sx, tw} from '../bio-m5-b13/shared';
import type {PB} from '../bio-m5-b07/shared';
import {PLATES} from './assets';

export const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
export const smooth = (t: number) => { const u = clamp01(t); return u * u * (3 - 2 * u); };
export const CARD = '#fffdf8';
export const EDGE = 'rgba(60,45,20,0.22)';
export const PLUM = '#7a4a8c', PLUM_SOFT = '#e7dcef';
export const RED = '#c4432f';
export const GREEN = '#2f8a5b';
export const BIO_INK = '#2f5f8f';

// ---------- allele rings ----------
export type Kind = 'a' | 'b' | 'new' | 'flow' | 'part';
/** Arc path from angle a0 to a1 (radians, 0 = right, clockwise in SVG). */
const arc = (x: number, y: number, r: number, a0: number, a1: number) => {
	const large = a1 - a0 > Math.PI ? 1 : 0;
	return `M${x + r * Math.cos(a0)},${y + r * Math.sin(a0)} A${r},${r} 0 ${large} 1 ${x + r * Math.cos(a1)},${y + r * Math.sin(a1)}`;
};
export const AlleleRing: React.FC<{x: number; y: number; r?: number; kind: Kind; o?: number; glow?: number}> = ({x, y, r = 11, kind, o = 1, glow = 0}) => {
	if (o <= 0.01) return null;
	const sw = Math.max(2.5, r * 0.32);
	const top = -Math.PI / 2;
	return (
		<g opacity={o}>
			{glow > 0.01 ? <circle cx={x} cy={y} r={r * 2.1} fill={kind === 'flow' ? BLUE : AMBER} opacity={0.28 * glow} /> : null}
			{kind === 'a' || kind === 'b' ? (
				<>
					<circle cx={x} cy={y} r={r} fill={CARD} stroke={INK_SOFT} strokeWidth={sw} />
					{kind === 'b' ? <circle cx={x} cy={y} r={r * 0.32} fill={INK_SOFT} /> : null}
				</>
			) : null}
			{kind === 'new' ? (
				<>
					<circle cx={x} cy={y} r={r} fill="#fff3d9" stroke="none" />
					<path d={arc(x, y, r, top + 0.42, top + Math.PI * 2 - 0.42)} fill="none" stroke={AMBER} strokeWidth={sw * 1.15} strokeLinecap="round" />
					<path d={`M${x - r * 0.38},${y - r * 1.12} L${x},${y - r * 0.55} L${x + r * 0.38},${y - r * 1.12}`} fill="none" stroke={AMBER_INK} strokeWidth={sw * 0.7} strokeLinecap="round" strokeLinejoin="round" />
				</>
			) : null}
			{kind === 'flow' ? (
				<>
					<circle cx={x} cy={y} r={r} fill="#e8f1fa" stroke="none" />
					<path d={arc(x, y, r, top + 0.48, top + Math.PI * 2 - 0.48)} fill="none" stroke={BLUE} strokeWidth={sw * 1.15} strokeLinecap="round" />
					<rect x={x - r * 0.3} y={y - r * 1.25} width={r * 0.6} height={r * 0.6} fill={BLUE} />
				</>
			) : null}
			{kind === 'part' ? (
				<>
					<circle cx={x} cy={y} r={r} fill={CARD} stroke={INK_SOFT} strokeWidth={sw * 0.5} strokeDasharray="3 4" />
					<path d={arc(x, y, r, top, top + Math.PI)} fill="none" stroke={AMBER} strokeWidth={sw * 0.8} strokeLinecap="round" />
				</>
			) : null}
		</g>
	);
};

// ---------- bacteria (painted plate, never stretched) ----------
const BB = PLATES.bact;
export const bactH = (w: number) => (w * (BB.box[3] - BB.box[1])) / (BB.box[2] - BB.box[0]);
/** The ring sits just left of the body (the flagellum runs to the right). */
export const ringAt = (cx: number, cy: number, w: number, r: number): [number, number] => [cx - w * 0.5 - r - 2, cy];
export const Bact: React.FC<{cx: number; cy: number; w: number; o?: number; grey?: number; ring?: Kind; ringO?: number; glow?: number; ringGlow?: number; r?: number; dy?: number}> = ({cx, cy, w, o = 1, grey = 0, ring, ringO = 1, glow = 0, ringGlow = 0, r, dy = 0}) => {
	if (o <= 0.01) return null;
	const h = bactH(w);
	const rr = r ?? Math.max(7, w * 0.11);
	const [rx, ry] = ringAt(cx, cy + dy, w, rr);
	const g = clamp01(grey);
	return (
		<g opacity={o}>
			{glow > 0.01 ? <ellipse cx={cx - w * 0.12} cy={cy + dy} rx={w * 0.5} ry={h * 0.95} fill={AMBER} opacity={0.25 * glow} /> : null}
			<g opacity={1 - 0.62 * g}>
				<PlateB p={BB} cx={cx} cy={cy + dy} w={w} filter={g > 0.01 ? `grayscale(${g})` : undefined} />
			</g>
			{ring ? <AlleleRing x={rx} y={ry} r={rr} kind={ring} o={ringO * (1 - 0.7 * g)} glow={ringGlow} /> : null}
		</g>
	);
};
/** Jittered grid of points (fixed seed). */
export const popGrid = (n: number, cols: number, x: number, y: number, dx: number, dy: number, seed = 3, jit = 0.22): [number, number][] => {
	const r = rng(seed);
	return Array.from({length: n}, (_, i) => {
		const c = i % cols, w = Math.floor(i / cols);
		return [x + c * dx + (w % 2 ? dx * 0.35 : 0) + (r() - 0.5) * dx * jit, y + w * dy + (r() - 0.5) * dy * jit];
	});
};

// ---------- the slim strand ----------
export type RungStyle = {color?: string; w?: number; o?: number};
export type StrandProps = {
	x: number; y: number; n: number; pitch?: number; gap?: number; o?: number; draw?: number; lineW?: number; color?: string;
	band?: {i0: number; i1: number; o?: number; color?: string; fill?: string};
	rung?: (i: number) => RungStyle | undefined;
	/** Two neighbouring rungs on the top strand pulled together, the top line bent (a thymine dimer). */
	kink?: {i: number; amt: number};
	/** A gap opening between rung i and i + 1. */
	breaks?: {i: number; line: 'top' | 'bot'; amt: number}[];
	/** A dashed inserted stretch (viral DNA) drawn over rungs i0..i1. */
	insert?: {i0: number; i1: number; o: number};
};
export const rungX = (x: number, i: number, pitch = 30) => x + i * pitch + pitch / 2;
export const SlimStrand: React.FC<StrandProps> = ({x, y, n, pitch = 30, gap = 44, o = 1, draw = 1, lineW = 4, color = '#9a8f80', band, rung, kink, breaks = [], insert}) => {
	if (o <= 0.01) return null;
	const L = n * pitch;
	const xEnd = x + L * clamp01(draw);
	const shift = (i: number) => (kink ? (i === kink.i ? kink.amt * pitch * 0.26 : i === kink.i + 1 ? -kink.amt * pitch * 0.26 : 0) : 0);
	const bend = (i: number) => (kink && (i === kink.i || i === kink.i + 1) ? -kink.amt * 18 : 0);
	const rx = (i: number) => rungX(x, i, pitch) + shift(i);
	// polyline nodes per line: start, each rung, end
	const nodes = (line: 'top' | 'bot'): [number, number][] => [[x, line === 'top' ? y : y + gap], ...Array.from({length: n}, (_, i) => [rx(i), line === 'top' ? y + bend(i) : y + gap] as [number, number]), [x + L, line === 'top' ? y : y + gap]];
	const segs = (line: 'top' | 'bot') => {
		const pts = nodes(line);
		const out: React.ReactNode[] = [];
		for (let k = 0; k + 1 < pts.length; k++) {
			const [x1, y1] = pts[k];
			const [x2, y2] = pts[k + 1];
			if (x1 >= xEnd) break;
			const brk = breaks.find(b => b.line === line && b.i + 1 === k && b.amt > 0.01);
			const cl = (xx: number) => Math.min(xx, xEnd);
			const ly = (xx: number) => y1 + ((y2 - y1) * (xx - x1)) / Math.max(1, x2 - x1);
			if (brk) {
				const mid = (x1 + x2) / 2, half = brk.amt * pitch * 0.42;
				const a = mid - half, b = mid + half;
				out.push(<line key={`${k}a`} x1={x1} y1={y1} x2={cl(a)} y2={ly(cl(a))} stroke={color} strokeWidth={lineW} strokeLinecap="round" />);
				if (xEnd > b) out.push(<line key={`${k}b`} x1={b} y1={ly(b)} x2={cl(x2)} y2={ly(cl(x2))} stroke={color} strokeWidth={lineW} strokeLinecap="round" />);
				// frayed ends
				[a, b].forEach((e, j) => {
					const s = j ? 1 : -1;
					out.push(<path key={`${k}f${j}`} d={`M${e},${ly(e)} l${s * -7},${-8} M${e},${ly(e)} l${s * -9},${7}`} stroke={RED} strokeWidth={2.5} strokeLinecap="round" opacity={brk.amt} fill="none" />);
				});
			} else {
				out.push(<line key={k} x1={x1} y1={y1} x2={cl(x2)} y2={ly(cl(x2))} stroke={color} strokeWidth={lineW} strokeLinecap="round" />);
			}
		}
		return out;
	};
	return (
		<g opacity={o}>
			{band ? (
				<rect x={rungX(x, band.i0, pitch) - pitch / 2} y={y - 18} width={(band.i1 - band.i0 + 1) * pitch} height={gap + 36} rx={14} fill={band.fill ?? BLUE_SOFT} stroke={band.color ?? '#9fc0de'} strokeWidth={2} opacity={band.o ?? 1} />
			) : null}
			{Array.from({length: n}, (_, i) => {
				const cx = rx(i);
				if (cx > xEnd) return null;
				const st = rung ? rung(i) : undefined;
				const ro = st?.o ?? 1;
				if (ro <= 0.01) return null;
				const top = y + bend(i);
				return <line key={i} x1={cx} y1={top + 3} x2={cx} y2={y + gap - 3} stroke={st?.color ?? '#c7bcab'} strokeWidth={st?.w ?? 3} strokeLinecap="round" opacity={ro} />;
			})}
			{segs('top')}
			{segs('bot')}
			{insert && insert.o > 0.01 ? (
				<g opacity={insert.o}>
					<rect x={rungX(x, insert.i0, pitch) - pitch / 2} y={y - 8} width={(insert.i1 - insert.i0 + 1) * pitch} height={gap + 16} rx={8} fill={PLUM_SOFT} />
					{[y, y + gap].map((yy, k) => <line key={k} x1={rungX(x, insert.i0, pitch) - pitch / 2} y1={yy} x2={rungX(x, insert.i1, pitch) + pitch / 2} y2={yy} stroke={PLUM} strokeWidth={lineW + 1} strokeDasharray="9 6" strokeLinecap="round" />)}
				</g>
			) : null}
			{kink && kink.amt > 0.05 ? (
				<path d={`M${rx(kink.i)},${y + bend(kink.i) - 10} Q${(rx(kink.i) + rx(kink.i + 1)) / 2},${y + bend(kink.i) - 26} ${rx(kink.i + 1)},${y + bend(kink.i) - 10}`} fill="none" stroke={AMBER_INK} strokeWidth={4} opacity={kink.amt} strokeLinecap="round" />
			) : null}
		</g>
	);
};
/** A small base callout box above (or below) a rung: a leader line and a serif letter (or short text). */
export const BaseTag: React.FC<{x: number; y: number; text: string; o?: number; color?: string; below?: boolean; len?: number; size?: number; fill?: string; ink?: string}> = ({x, y, text, o = 1, color = AMBER, below = false, len = 26, size = 28, fill = CARD, ink = INK}) => {
	if (o <= 0.01) return null;
	const s = below ? 1 : -1;
	const w = Math.max(size * 1.5, tw(text, size) + 22), h = size * 1.45;
	const by = y + s * len;
	const cy = by + s * h / 2;
	return (
		<g opacity={o}>
			<line x1={x} y1={y} x2={x} y2={by} stroke={color} strokeWidth={2.5} />
			<rect x={x - w / 2} y={cy - h / 2} width={w} height={h} rx={10} fill={fill} stroke={color} strokeWidth={2.5} />
			<text x={x} y={cy + size * 0.35} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: size}} fill={ink}>{text}</text>
		</g>
	);
};
/** A base callout that swaps from one letter to another at `at`, with a brief amber flash. */
export const BaseSwap: React.FC<{x: number; y: number; from: string; to: string; show: number; at: number; below?: boolean; size?: number; len?: number}> = ({x, y, from, to, show, at, below, size = 30, len}) => {
	const f = useCurrentFrame();
	const o = prog(f, show, 10);
	const k = prog(f, at, 10);
	const flash = Math.max(0, Math.sin(clamp01((f - at) / 24) * Math.PI));
	return (
		<g>
			{flash > 0.01 ? <circle cx={x} cy={below ? y + 30 : y - 50} r={36} fill={AMBER} opacity={0.35 * flash} /> : null}
			<BaseTag x={x} y={y} text={from} o={o * (1 - k)} color={INK_SOFT} below={below} size={size} len={len} />
			<BaseTag x={x} y={y} text={to} o={o * k} color={AMBER} below={below} size={size} len={len} fill="#fff3d9" />
		</g>
	);
};

// ---------- gene pool basin ----------
export const PoolBasin: React.FC<{x: number; y: number; w: number; h: number; o?: number; label?: string; labelO?: number; stroke?: string}> = ({x, y, w, h, o = 1, label, labelO = 1, stroke = '#8ba9c4'}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${x},${y} L${x + w},${y} L${x + w - 26},${y + h - 22} Q${x + w - 32},${y + h} ${x + w - 60},${y + h} L${x + 60},${y + h} Q${x + 32},${y + h} ${x + 26},${y + h - 22} Z`} fill="#eaf2f9" stroke={stroke} strokeWidth={4} strokeLinejoin="round" />
		<ellipse cx={x + w / 2} cy={y} rx={w / 2} ry={12} fill="#f5f9fc" stroke={stroke} strokeWidth={3} />
		{label ? <Sx x={x + w / 2} y={y + h + 44} text={label} size={32} color={BIO_INK} hand anchor="middle" opacity={labelO} /> : null}
	</g>
));
/** Ring slots inside a basin (rows, centred). */
export const basinSlots = (x: number, y: number, w: number, h: number, n: number, cols: number): [number, number][] => {
	const rows = Math.ceil(n / cols);
	const dx = (w - 120) / Math.max(1, cols - 1), dy = Math.min(46, (h - 40) / Math.max(1, rows));
	return Array.from({length: n}, (_, i) => {
		const c = i % cols, r = Math.floor(i / cols);
		return [x + 60 + c * dx + (r % 2 ? dx * 0.3 : 0), y + 34 + r * dy];
	});
};

// ---------- day strip ----------
export const DayStrip: React.FC<{x: number; y: number; w: number; labels: string[]; active: number; o?: number; size?: number}> = ({x, y, w, labels, active, o = 1, size = 28}) => {
	if (o <= 0.01) return null;
	const cw = w / labels.length;
	return (
		<g opacity={o}>
			{labels.map((l, i) => {
				const on = clamp01(1 - Math.abs(active - i));
				return (
					<g key={i}>
						<rect x={x + i * cw + 4} y={y} width={cw - 8} height={size + 26} rx={(size + 26) / 2} fill={on > 0.5 ? '#fff3d9' : CARD} stroke={on > 0.5 ? AMBER : EDGE} strokeWidth={on > 0.5 ? 4 : 2.5} />
						<text x={x + i * cw + cw / 2} y={y + size + 5} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}} fill={on > 0.5 ? AMBER_INK : INK_SOFT}>{l}</text>
					</g>
				);
			})}
		</g>
	);
};

// ---------- small coded icons ----------
/** Plain capped glass vial outline (no label). */
export const Vial: React.FC<{x: number; y: number; s?: number; o?: number; fill?: number}> = ({x, y, s = 1, o = 1, fill = 0.6}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={-30} y={-6} width={60} height={110} rx={12} fill="#eef5f8" stroke={INK} strokeWidth={4} />
		<rect x={-26} y={104 - 100 * fill} width={52} height={100 * fill - 2} rx={8} fill="#f3e3a6" />
		<rect x={-36} y={-34} width={72} height={30} rx={6} fill="#b7c3cc" stroke={INK} strokeWidth={4} />
		<line x1={-16} y1={14} x2={-16} y2={80} stroke="#ffffff" strokeWidth={5} strokeLinecap="round" opacity={0.8} />
	</g>
));
/** A horizontal bar that fills to `p` (0..1). */
export const FillBar: React.FC<{x: number; y: number; w: number; h?: number; p: number; o?: number; color?: string; label?: string; size?: number}> = ({x, y, w, h = 30, p, o = 1, color = AMBER, label, size = 28}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={w} height={h} rx={h / 2} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} />
		{p > 0.005 ? <rect x={x + 3} y={y + 3} width={Math.max(h - 6, (w - 6) * clamp01(p))} height={h - 6} rx={(h - 6) / 2} fill={color} /> : null}
		{label ? <text x={x} y={y - 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={INK}>{label}</text> : null}
	</g>
));
/** A coded animal body cell (nucleus inside), with an optional amber allele ring in the nucleus. */
export const CellIcon: React.FC<{x: number; y: number; r?: number; o?: number; ring?: number; fill?: string; stroke?: string}> = ({x, y, r = 44, o = 1, ring = 0, fill = '#f6e3dc', stroke = '#b9786a'}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${x - r},${y} C${x - r},${y - r * 0.9} ${x - r * 0.3},${y - r} ${x + r * 0.1},${y - r * 0.98} C${x + r * 0.8},${y - r * 0.92} ${x + r},${y - r * 0.4} ${x + r},${y + r * 0.05} C${x + r},${y + r * 0.7} ${x + r * 0.5},${y + r} ${x},${y + r} C${x - r * 0.6},${y + r} ${x - r},${y + r * 0.6} ${x - r},${y} Z`} fill={fill} stroke={stroke} strokeWidth={3} />
		<circle cx={x + r * 0.05} cy={y} r={r * 0.4} fill="#e9d2e8" stroke="#8d6a94" strokeWidth={2.5} />
		<AlleleRing x={x + r * 0.05} y={y} r={r * 0.22} kind="new" o={ring} />
	</g>
));
/** A rounded card. */
export const CardBox: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; stroke?: string; sw?: number; fill?: string; dash?: string}> = ({x, y, w, h, at, out, stroke = EDGE, sw = 3, fill = CARD, dash}) => (
	<Fade at={at} out={out}><rect x={x} y={y} width={w} height={h} rx={22} fill={fill} stroke={stroke} strokeWidth={sw} strokeDasharray={dash} /></Fade>
);
/** A plate drawn by its alpha box with fade in and out. */
export const PlateAt: React.FC<{p: PB; cx: number; cy: number; w: number; at: number; out?: number; o?: number; filter?: string}> = ({p, cx, cy, w, at, out, o = 1, filter}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	return v > 0.01 ? <PlateB p={p} cx={cx} cy={cy} w={w} o={v} filter={filter} /> : null;
};
/** Width of a plate box at a given height (keeps the aspect). */
export const wForH = (p: PB, h: number) => (h * (p.box[2] - p.box[0])) / (p.box[3] - p.box[1]);
/** Small hand label. */
export const Lbl: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; hand?: boolean; weight?: number}> = ({x, y, text, at, out, size = 30, color = INK, anchor = 'start', hand = true, weight}) => (
	<Sx x={x} y={y} text={text} size={size} color={color} anchor={anchor} hand={hand} weight={weight ?? (hand ? 700 : 600)} at={at} out={out} />
);
/** A grey reference tag that fades out. */
export const GTag: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, at, out, size = 24, anchor = 'start'}) => {
	const w = tw(text, size) + 32;
	const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
	return (
		<Fade at={at} out={out}>
			<rect x={x0} y={y} width={w} height={size + 20} rx={11} fill="#eceeef" stroke={GREYT} strokeWidth={2.2} />
			<Sx x={x0 + 16} y={y + size + 3} text={text} size={size} color={GREY_INK} weight={600} at={at} />
		</Fade>
	);
};
/** A curved arrow (quadratic) that draws on. */
export const CurveArrow: React.FC<{a: [number, number]; b: [number, number]; at: number; bow?: number; color?: string; width?: number; dash?: string; out?: number}> = ({a, b, at, bow = -60, color = INK_SOFT, width = 4, dash, out}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.01) return null;
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + bow;
	const ang = Math.atan2(b[1] - my, b[0] - mx), hl = 16;
	return (
		<g opacity={o}>
			<DrawPath d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} at={at} dur={18} color={color} width={width} dash={dash} />
			<path d={`M${b[0] - Math.cos(ang - 0.5) * hl},${b[1] - Math.sin(ang - 0.5) * hl} L${b[0]},${b[1]} L${b[0] - Math.cos(ang + 0.5) * hl},${b[1] - Math.sin(ang + 0.5) * hl}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at + 14, 6)} />
		</g>
	);
};
/** A point on a quadratic curve at t. */
export const qPt = (a: [number, number], b: [number, number], bow: number, t: number): [number, number] => {
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + bow;
	const u = clamp01(t);
	return [(1 - u) * (1 - u) * a[0] + 2 * (1 - u) * u * mx + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * (1 - u) * u * my + u * u * b[1]];
};
/** Answer table (header plus rows) for classification items; cells fill on their frames. */
export const AnsTable: React.FC<{x: number; y: number; cols: {w: number; head: string}[]; rows: string[][]; fillAt?: number[]; at: number; size?: number; rowH?: number; hot?: (r: number) => number}> = ({x, y, cols, rows, fillAt = [], at, size = 28, rowH = 58, hot}) => {
	const f = useCurrentFrame();
	const W = cols.reduce((a, c) => a + c.w, 0);
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const xs = cols.map((_, i) => x + cols.slice(0, i).reduce((a, c) => a + c.w, 0));
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={W} height={rowH * (rows.length + 1)} rx={14} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} />
			<rect x={x} y={y} width={W} height={rowH} rx={14} fill="#efe8da" />
			{cols.map((c, i) => <text key={i} x={xs[i] + 16} y={y + rowH * 0.66} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size * 0.9}} fill={INK}>{c.head}</text>)}
			{rows.map((_, r) => <line key={r} x1={x} y1={y + rowH * (r + 1)} x2={x + W} y2={y + rowH * (r + 1)} stroke={EDGE} strokeWidth={2} />)}
			{xs.slice(1).map((xx, i) => <line key={i} x1={xx} y1={y} x2={xx} y2={y + rowH * (rows.length + 1)} stroke={EDGE} strokeWidth={2} />)}
			{rows.map((row, r) => {
				const h = hot ? hot(r) : 0;
				return (
					<g key={r}>
						{h > 0.01 ? <rect x={x + 3} y={y + rowH * (r + 1) + 3} width={W - 6} height={rowH - 6} rx={10} fill="#f6d77a" opacity={0.35 * h} /> : null}
						{row.map((t, c) => {
							const fo = c === 0 ? 1 : fillAt[r] === undefined ? 0 : prog(f, fillAt[r] + (c - 1) * 8, 12);
							return fo > 0.01 ? <text key={c} x={xs[c] + 16} y={y + rowH * (r + 1) + rowH * 0.66} opacity={fo} style={{fontFamily: c === 0 ? FONT_DISPLAY : FONT_HAND, fontWeight: 700, fontSize: c === 0 ? size * 0.9 : size * 1.08}} fill={c === 0 ? INK : AMBER_INK}>{t}</text> : null;
						})}
					</g>
				);
			})}
		</g>
	);
};
export {AMBER, AMBER_INK, BLUE, BLUE_SOFT, INK, INK_SOFT, GREYT, GREY_INK};
