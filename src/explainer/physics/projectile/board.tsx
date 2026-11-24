// Shared drawing kit for the Module 5 projectile lessons (v01 to v05 and later): one visual system.
// Course-neutral: every label, number and colour choice of meaning is passed in by the lesson; this file
// holds only the look (colour roles, plates, stage outlines, arrows, brackets, cards, the two-column
// ledger with one clock). Generalised from the phys-y12-m5-v04 pilot (whose own files stay unchanged)
// and from the v01 design (kit gaps 1 and 2). Added 21 November 2026.
//
// Colour roles (v01 design, kept for the whole run): horizontal teal, vertical blue, resultant velocity and
// trajectory orange, acceleration violet, weight amber, givens navy, clock and answers ink, mistakes slate.
// Text sizes come from src/explainer/shared/tokens.ts (TYPE).
import React from 'react';
import {interpolate, staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, prog} from '../../kit';
import {CARD, CARD_BORDER, CARD_SHADOW, INK, INK_SOFT, TONES, TRACK, TYPE, type Tone, rgba} from '../../shared/tokens';
import {G, type World, clockAt, flightT, fx, landT, pos, range, sx, sy, ux, uy} from './flight';
export {sx, sy};
export type {World};

// ---------------------------------------------------------------- colour roles
export const ROLE = {
	/** horizontal quantities: u_x, v_x, s_x, floor shadow, equal spacing */
	x: TONES.teal,
	/** vertical quantities: u_y, v_y, s_y, edge shadow, growing gaps */
	y: TONES.blue,
	/** resultant velocity and the trajectory (the v04 pilot's orange) */
	v: {ink: '#9c5a00', stroke: '#d0761c', soft: '#f8e8c8'} as Tone,
	/** g and a_y */
	a: TONES.violet,
	/** weight force */
	w: {ink: '#9c5a00', stroke: '#b87918', soft: '#f8e8c8'} as Tone,
	/** givens */
	given: {ink: '#1f3a68', stroke: '#1f3a68', soft: '#dbe6f5'} as Tone,
	/** mistakes: slate scribble, slate tag (root rule R1) */
	slate: TONES.grey,
	ink: TONES.ink,
} as const;
export type RoleName = keyof typeof ROLE;
export const roleTone = (r: RoleName | Tone): Tone => (typeof r === 'string' ? ROLE[r] : r);

// ---------------------------------------------------------------- text helpers
export const DISPLAY = (size: number, color: string = INK, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, color, whiteSpace: 'pre', lineHeight: 1.15});
export const Sub: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.62em', position: 'relative', top: '0.28em'}}>{children}</span>;
export const Sup: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.62em', position: 'relative', top: '-0.72em'}}>{children}</span>;
/** A symbol with an x or y subscript in its axis colour (u_x, v_y, s_x, a_y...). `plain` keeps the parent colour. */
export const Q: React.FC<{s: string; ax: 'x' | 'y'; plain?: boolean}> = ({s, ax, plain = false}) => <span style={{color: plain ? undefined : ROLE[ax].ink}}>{s}<Sub>{ax}</Sub></span>;
/** Units in index notation. */
export const MS: React.FC = () => <span style={{fontWeight: 600}}> m s<Sup>−1</Sup></span>;
export const MS2: React.FC = () => <span style={{fontWeight: 600}}> m s<Sup>−2</Sup></span>;

// ---------------------------------------------------------------- painted plates
const BALL_SRC = 'assets/physics/phys-y11-steel-ball-v1.png';
const BALL_BOX: [number, number, number, number] = [81, 72, 719, 728];
const BASE_SRC = 'assets/physics/y12p-launcher-base-v1.png';
const BARREL_SRC = 'assets/physics/y12p-launcher-barrel-v1.png';
const L_CANVAS: [number, number] = [1448, 1086];
const L_PIVOT: [number, number] = [410, 644];
const L_MUZZLE = 835;
const L_BOX: [number, number, number, number] = [132, 592, 1306, 907];
const L_GROUND = 905;
export const BALL_PLATE = BALL_SRC;
export const LAUNCHER_PLATES = [BASE_SRC, BARREL_SRC];

/** The painted steel ball, centred at (cx, cy), diameter d (uniform scale). */
export const BallSvg: React.FC<{cx: number; cy: number; d: number; opacity?: number}> = ({cx, cy, d, opacity = 1}) => {
	const s = d / (BALL_BOX[2] - BALL_BOX[0]);
	const h = (BALL_BOX[3] - BALL_BOX[1]) * s;
	return <image href={staticFile(BALL_SRC)} x={cx - d / 2 - BALL_BOX[0] * s} y={cy - h / 2 - BALL_BOX[1] * s} width={800 * s} height={800 * s} opacity={opacity} preserveAspectRatio="none" />;
};
/** A strobe image: the ball plate lighter, with a solid ink rim so it never reads as washed out. */
export const StrobeBall: React.FC<{cx: number; cy: number; d: number; o?: number}> = ({cx, cy, d, o = 1}) => (
	<g opacity={o}>
		<BallSvg cx={cx} cy={cy} d={d} opacity={0.6} />
		<circle cx={cx} cy={cy} r={d / 2} fill="none" stroke={INK_SOFT} strokeWidth={2} />
	</g>
);

/** Geometry of the painted launcher whose base alpha box is `w` wide, pivot at (px, py), barrel at `deg`. */
export const launcherGeom = (px: number, py: number, w: number, deg: number) => {
	const s = w / (L_BOX[2] - L_BOX[0]);
	const a = (deg * Math.PI) / 180;
	const L = L_MUZZLE * s;
	return {s, L, muzzle: [px + L * Math.cos(a), py - L * Math.sin(a)] as [number, number], floorY: py + (L_GROUND - L_PIVOT[1]) * s, left: px - (L_PIVOT[0] - L_BOX[0]) * s, right: px + (L_BOX[2] - L_PIVOT[0]) * s, ballD: Math.max(168 * s, 34)};
};
/** Pivot that puts the muzzle at (mx, my) for a barrel at `deg`. */
export const pivotForMuzzle = (mx: number, my: number, w: number, deg: number): [number, number] => {
	const s = w / (L_BOX[2] - L_BOX[0]);
	const a = (deg * Math.PI) / 180;
	return [mx - L_MUZZLE * s * Math.cos(a), my + L_MUZZLE * s * Math.sin(a)];
};
/** The painted launcher (SVG): base, then the barrel turned about the shared pivot. */
export const LauncherSvg: React.FC<{px: number; py: number; w: number; deg: number; opacity?: number}> = ({px, py, w, deg, opacity = 1}) => {
	const s = w / (L_BOX[2] - L_BOX[0]);
	const x = px - L_PIVOT[0] * s, y = py - L_PIVOT[1] * s;
	return (
		<g opacity={opacity}>
			<image href={staticFile(BASE_SRC)} x={x} y={y} width={L_CANVAS[0] * s} height={L_CANVAS[1] * s} preserveAspectRatio="none" />
			<g transform={`rotate(${-deg} ${px} ${py})`}><image href={staticFile(BARREL_SRC)} x={x} y={y} width={L_CANVAS[0] * s} height={L_CANVAS[1] * s} preserveAspectRatio="none" /></g>
		</g>
	);
};

// ---------------------------------------------------------------- world to frame
/** SVG path of a launch (u, θ) from t0 to t1 seconds. */
export const flightD = (w: World, u: number, deg: number, t1: number, t0 = 0, n = 90, g = G) => {
	let d = '';
	for (let i = 0; i <= n; i++) {
		const t = t0 + ((t1 - t0) * i) / n;
		const [X, Y] = pos(u, deg, t, g);
		d += `${i ? 'L' : 'M'}${sx(w, X).toFixed(1)},${sy(w, Y).toFixed(1)} `;
	}
	return d;
};

// ---------------------------------------------------------------- stage outlines (coded, exam style)
/** Hatched HSC-style ground line from x1 to x2 at y (hatching below). */
export const GroundLine: React.FC<{x1: number; x2: number; y: number; opacity?: number; hatch?: boolean}> = ({x1, x2, y, opacity = 1, hatch = true}) => {
	const ticks: React.ReactNode[] = [];
	if (hatch) for (let x = x1 + 10; x < x2 - 4; x += 24) ticks.push(<line key={x} x1={x} y1={y + 2} x2={x - 14} y2={y + 16} stroke={INK_SOFT} strokeWidth={2} />);
	return <g opacity={opacity}><line x1={x1} x2={x2} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />{ticks}</g>;
};
/**
 * A bench top seen from the side (pale wood band, dark edge line) ending at `edgeX`, with the floor below.
 * The bench top surface is at `topY`; the band is drawn below it. Legs are a plain outline.
 */
export const Bench: React.FC<{edgeX: number; topY: number; left?: number; floorY: number; floorL?: number; floorR?: number; band?: number; legs?: boolean}> = ({edgeX, topY, left = 0, floorY, floorL = 0, floorR = 1920, band = 30, legs = true}) => (
	<g>
		<rect x={left} y={topY} width={edgeX - left} height={band} fill="#e6d3b0" />
		<line x1={left} x2={edgeX} y1={topY} y2={topY} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		<line x1={left} x2={edgeX} y1={topY + band} y2={topY + band} stroke={INK} strokeWidth={2.5} />
		<line x1={edgeX} x2={edgeX} y1={topY} y2={topY + band} stroke={INK} strokeWidth={5} strokeLinecap="round" />
		{legs ? <line x1={edgeX - 60} x2={edgeX - 60} y1={topY + band} y2={floorY} stroke={INK_SOFT} strokeWidth={6} /> : null}
		<GroundLine x1={floorL} x2={floorR} y={floorY} />
	</g>
);
/** HSC-style cliff outline: flat top to `edgeX`, hatched face down to the ground at `baseY`, ground on to `right`. */
export const Cliff: React.FC<{left: number; edgeX: number; topY: number; baseY: number; right: number}> = ({left, edgeX, topY, baseY, right}) => {
	const hatch: React.ReactNode[] = [];
	for (let y = topY + 14; y < baseY - 6; y += 22) hatch.push(<line key={y} x1={edgeX} y1={y} x2={edgeX - 14} y2={y + 12} stroke={INK_SOFT} strokeWidth={2} />);
	return (
		<g>
			<rect x={left} y={topY} width={edgeX - left} height={baseY - topY} fill={TRACK} />
			<line x1={left} x2={edgeX} y1={topY} y2={topY} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<line x1={edgeX} x2={edgeX} y1={topY} y2={baseY} stroke={INK} strokeWidth={4} />
			{hatch}
			<GroundLine x1={edgeX} x2={right} y={baseY} />
		</g>
	);
};
/** A vertical height scale (ruler) from yTop to yBot at x, ticks every `step` metres, label beside it. */
export const HeightScale: React.FC<{x: number; yTop: number; yBot: number; ppm: number; step?: number; at?: number; label?: React.ReactNode; color?: string; side?: 'left' | 'right'}> = ({x, yTop, yBot, ppm, step = 0.1, at = -30, label, color = INK, side = 'left'}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 24);
	if (p <= 0) return null;
	const y2 = yTop + (yBot - yTop) * p;
	const ticks: React.ReactNode[] = [];
	const n = Math.round((yBot - yTop) / (step * ppm));
	for (let i = 0; i <= n; i++) {
		const y = yTop + i * step * ppm;
		if (y > y2 + 0.5) break;
		const big = i % 5 === 0;
		ticks.push(<line key={i} x1={x} x2={x + (side === 'left' ? -1 : 1) * (big ? 22 : 12)} y1={y} y2={y} stroke={color} strokeWidth={big ? 3.5 : 2.5} />);
	}
	return (
		<g>
			<line x1={x} x2={x} y1={yTop} y2={y2} stroke={color} strokeWidth={4} strokeLinecap="round" />
			{ticks}
			{label && p >= 1 ? <text x={x + (side === 'left' ? -32 : 32)} y={(yTop + yBot) / 2 + 14} textAnchor={side === 'left' ? 'end' : 'start'} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.current}} fill={color} stroke={CARD} strokeWidth={8} paintOrder="stroke">{label}</text> : null}
		</g>
	);
};

// ---------------------------------------------------------------- arrows and brackets
/**
 * A straight vector arrow from (x, y) by (dx, dy) in frame pixels that grows from `at` over `dur` frames.
 * `label` sits beyond the tip unless `lx`/`ly` place it. Dashed outlines (`dash`) are for "unknown" arrows.
 */
export const VecArrow: React.FC<{x: number; y: number; dx: number; dy: number; color: string; width?: number; at?: number; dur?: number; out?: number; dash?: string; label?: React.ReactNode; lx?: number; ly?: number; labelColor?: string; size?: number; anchor?: 'start' | 'middle' | 'end'; head?: number}> = ({x, y, dx, dy, color, width = 6, at = -30, dur = 14, out, dash, label, lx, ly, labelColor, size = TYPE.support + 4, anchor = 'start', head = 20}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, dur) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	const len = Math.hypot(dx, dy);
	if (p <= 0.001 || len < 2) return null;
	const grow = Math.min(1, prog(f, at, dur));
	const ex = x + dx * grow, ey = y + dy * grow, L = len * grow;
	const ux_ = dx / len, uy_ = dy / len, h = Math.min(head, L * 0.5);
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	return (
		<g opacity={o}>
			<line x1={x} y1={y} x2={ex - ux_ * h * 0.6} y2={ey - uy_ * h * 0.6} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} />
			<path d={`M${ex},${ey} L${ex - ux_ * h - uy_ * h * 0.5},${ey - uy_ * h + ux_ * h * 0.5} L${ex - ux_ * h + uy_ * h * 0.5},${ey - uy_ * h - ux_ * h * 0.5} Z`} fill={dash ? 'none' : color} stroke={color} strokeWidth={dash ? 3 : 0} strokeLinejoin="round" />
			{label !== undefined && grow >= 1 ? (
				<foreignObject x={(lx ?? ex + ux_ * 14) - (anchor === 'end' ? 600 : anchor === 'middle' ? 300 : 0)} y={(ly ?? ey + uy_ * 14) - size * 0.75} width={600} height={size * 1.6} style={{overflow: 'visible'}}>
					<div style={{...DISPLAY(size, labelColor ?? color, 800), textAlign: anchor === 'end' ? 'right' : anchor === 'middle' ? 'center' : 'left', textShadow: `0 0 6px ${CARD}, 0 0 3px ${CARD}`}}>{label}</div>
				</foreignObject>
			) : null}
		</g>
	);
};
/** Dimension bracket from (x1, y1) to (x2, y2) with end ticks and a readout, drawn on from `at`. */
export const Bracket: React.FC<{x1: number; y1: number; x2: number; y2: number; color: string; at?: number; out?: number; label?: React.ReactNode; size?: number; off?: number; lx?: number; ly?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x1, y1, x2, y2, color, at = -30, out, label, size = TYPE.support, off = 0, lx, ly, anchor = 'middle'}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.001) return null;
	const len = Math.hypot(x2 - x1, y2 - y1) || 1;
	const nx = -(y2 - y1) / len, ny = (x2 - x1) / len;
	const t = 10;
	const mx = (x1 + x2) / 2 + nx * off, my = (y1 + y2) / 2 + ny * off;
	return (
		<g opacity={o}>
			<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={3.5} />
			<line x1={x1 - nx * t} y1={y1 - ny * t} x2={x1 + nx * t} y2={y1 + ny * t} stroke={color} strokeWidth={3.5} />
			<line x1={x2 - nx * t} y1={y2 - ny * t} x2={x2 + nx * t} y2={y2 + ny * t} stroke={color} strokeWidth={3.5} />
			{label !== undefined ? (
				<foreignObject x={(lx ?? mx) - (anchor === 'end' ? 500 : anchor === 'middle' ? 250 : 0)} y={(ly ?? my) - size * 0.7} width={500} height={size * 1.5} style={{overflow: 'visible'}}>
					<div style={{...DISPLAY(size, color, 800), textAlign: anchor === 'end' ? 'right' : anchor === 'middle' ? 'center' : 'left', textShadow: `0 0 6px ${CARD}, 0 0 3px ${CARD}`}}>{label}</div>
				</foreignObject>
			) : null}
		</g>
	);
};
/** A curved carry arrow (quadratic) from a to b, bulging by `bend`, drawn on from `at`. */
export const CarryArrow: React.FC<{from: [number, number]; to: [number, number]; at: number; color?: string; width?: number; bend?: number; dur?: number}> = ({from, to, at, color = INK, width = 5, bend = 0.25, dur = 22}) => {
	const [x1, y1] = from, [x2, y2] = to;
	const mx = (x1 + x2) / 2 - (y2 - y1) * bend, my = (y1 + y2) / 2 + (x2 - x1) * bend;
	const ang = Math.atan2(y2 - my, x2 - mx), hl = 22;
	const h1 = [x2 - hl * Math.cos(ang - 0.45), y2 - hl * Math.sin(ang - 0.45)], h2 = [x2 - hl * Math.cos(ang + 0.45), y2 - hl * Math.sin(ang + 0.45)];
	return <g><DrawPath d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`} at={at} dur={dur} color={color} width={width} /><DrawPath d={`M${h1[0]},${h1[1]} L${x2},${y2} L${h2[0]},${h2[1]}`} at={at + dur - 4} dur={8} color={color} width={width} /></g>;
};

// ---------------------------------------------------------------- cards and chips
/** Clock / readout card: label, big tabular value (52 px) with unit. */
export const ReadCard: React.FC<{x: number; y: number; w?: number; label: React.ReactNode; value: string; unit?: React.ReactNode; color?: string; at?: number; out?: number; pulse?: number; size?: number; border?: string}> = ({x, y, w = 360, label, value, unit, color = INK, at = -30, out, pulse, size = TYPE.working, border}) => {
	const f = useCurrentFrame();
	const pz = pulse === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulse) / 18)));
	return (
		<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{background: CARD, borderRadius: 18, padding: '6px 22px 10px', boxShadow: CARD_SHADOW, border: `3px solid ${border ?? CARD_BORDER}`, transform: `scale(${1 + 0.08 * pz})`, transformOrigin: 'left center'}}>
				<div style={DISPLAY(TYPE.support, INK_SOFT, 700)}>{label}</div>
				<div style={{display: 'flex', alignItems: 'baseline', gap: 10}}>
					<span style={{...DISPLAY(size, color), fontVariantNumeric: 'tabular-nums'}}>{value}</span>
					{unit ? <span style={DISPLAY(TYPE.support, INK_SOFT, 600)}>{unit}</span> : null}
				</div>
			</div>
		</Enter>
	);
};
/** Small coded clock face (abstract icon) whose hand turns with the physical time t (one turn per `turn` s). */
export const ClockFace: React.FC<{cx: number; cy: number; r?: number; t: number; turn?: number}> = ({cx, cy, r = 24, t, turn = 1}) => {
	const a = (2 * Math.PI * t) / turn - Math.PI / 2;
	return (
		<g>
			<circle cx={cx} cy={cy} r={r} fill={CARD} stroke={INK} strokeWidth={3.5} />
			{[0, 1, 2, 3].map(k => <line key={k} x1={cx + (r - 6) * Math.cos((k * Math.PI) / 2)} y1={cy + (r - 6) * Math.sin((k * Math.PI) / 2)} x2={cx + r * Math.cos((k * Math.PI) / 2)} y2={cy + r * Math.sin((k * Math.PI) / 2)} stroke={INK} strokeWidth={2.5} />)}
			<line x1={cx} y1={cy} x2={cx + (r - 7) * Math.cos(a)} y2={cy + (r - 7) * Math.sin(a)} stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={3.5} fill={INK} />
		</g>
	);
};
/** Grey chip (30 to 44 px). */
export const Chip: React.FC<{x: number; y: number; at: number; out?: number; children: React.ReactNode; size?: number; color?: string; border?: string; w?: number; bg?: string}> = ({x, y, at, out, children, size = 36, color = INK, border = 'rgba(60,45,20,0.16)', w, bg = '#f1ebdf'}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: bg, border: `2.5px solid ${border}`, borderRadius: 14, padding: '6px 18px 8px', ...DISPLAY(size, color, 700), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);
/** Dark-ink answer frame (inline, inherits size) with an ink tick (root rule R1). */
export const AnswerBox: React.FC<{children: React.ReactNode; at: number; tick?: boolean}> = ({children, at, tick = true}) => {
	const p = prog(useCurrentFrame(), at, 12);
	return (
		<span style={{display: 'inline-flex', alignItems: 'center', gap: '0.25em', padding: '0 0.3em', margin: '0 0.05em', background: CARD, border: `4.5px solid ${p > 0 ? INK : 'transparent'}`, borderRadius: 12, boxShadow: p > 0 ? `0 10px 22px rgba(60,45,20,${0.14 * p})` : undefined}}>
			{children}
			{tick ? <svg width="0.8em" height="0.8em" viewBox="0 0 40 40" style={{overflow: 'visible', opacity: p}}><path d="M6,22 L16,32 L35,8" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} /></svg> : null}
		</span>
	);
};
/** Text that writes on left to right from `at` (clip reveal), for working rows. */
export const Reveal: React.FC<{at: number; children: React.ReactNode; dur?: number; style?: React.CSSProperties; out?: number}> = ({at, children, dur = 18, style, out}) => {
	const f = useCurrentFrame();
	if (f < at - 1) return null;
	const r = Math.max(0, Math.min(1, (f - at) / dur));
	const e = r * r * (3 - 2 * r);
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (o <= 0.001) return null;
	return <div style={{clipPath: e >= 1 ? undefined : `inset(-30% ${100 - e * 100}% -30% -4%)`, opacity: o, ...style}}>{children}</div>;
};
/** A working row that writes on, then shrinks (solid ink, never faint) when `ageAt` arrives. */
export const Row: React.FC<{at: number; ageAt?: number; size?: number; oldSize?: number; children: React.ReactNode; style?: React.CSSProperties; out?: number}> = ({at, ageAt, size = TYPE.working, oldSize = TYPE.support + 6, children, style, out}) => {
	const f = useCurrentFrame();
	const a = ageAt === undefined ? 0 : prog(f, ageAt, 16);
	return <Reveal at={at} out={out} style={{...DISPLAY(interpolate(a, [0, 1], [size, oldSize]), INK, a > 0.5 ? 700 : 800), ...style}}>{children}</Reveal>;
};
/** The classic slip: chip with a strike and a cross in slate (root rule R1), optional slate hand caption. */
export const CrossedChip: React.FC<{x: number; y: number; at: number; crossAt?: number; children: React.ReactNode; caption?: string; size?: number; w?: number; out?: number}> = ({x, y, at, crossAt, children, caption, size = 38, w, out}) => {
	const f = useCurrentFrame();
	const c = crossAt ?? at + 16;
	const strike = prog(f, c, 12);
	const S = ROLE.slate;
	return (
		<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{display: 'inline-flex', alignItems: 'center', gap: 18, background: CARD, border: `3px solid ${S.stroke}`, borderRadius: 16, padding: '6px 20px 8px', boxShadow: CARD_SHADOW}}>
				<span style={{position: 'relative', ...DISPLAY(size, S.ink, 700)}}>
					{children}
					<svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -6, top: 0, width: 'calc(100% + 12px)', height: '100%', overflow: 'visible'}}>
						{strike > 0 ? <path d="M0,64 Q50,52 100,40" stroke={INK} strokeWidth={5} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" style={{clipPath: `inset(-50% ${100 - strike * 100}% -50% 0)`}} /> : null}
					</svg>
				</span>
				<svg width={44} height={44} viewBox="-22 -22 44 44" style={{flex: 'none', overflow: 'visible'}}>
					<DrawPath d="M-16,-16 L16,16" at={c + 8} dur={8} color={INK} width={7} />
					<DrawPath d="M16,-16 L-16,16" at={c + 14} dur={8} color={INK} width={7} />
				</svg>
			</div>
			{caption ? <div style={{marginTop: 4, marginLeft: 6}}><HandText text={caption} at={c + 20} size={TYPE.handSmall + 4} color={S.ink} cps={28} /></div> : null}
		</Enter>
	);
};
/** Hand-font note with JSX content (for subscripts), revealed left to right. (x, y) is the text's left middle. */
export const HandNote: React.FC<{x: number; y: number; at: number; out?: number; size?: number; color?: string; children: React.ReactNode; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, at, out, size = TYPE.hand, color = INK, children, anchor = 'start'}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const r = Math.max(0, Math.min(1, (f - at) / 22));
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (o <= 0.001) return null;
	const tx = anchor === 'start' ? '0' : anchor === 'middle' ? '-50%' : '-100%';
	return <div style={{position: 'absolute', left: x, top: y - size * 0.62, transform: `translateX(${tx})`, opacity: o, clipPath: r >= 1 ? undefined : `inset(-30% ${100 - r * 100}% -30% -8%)`, fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, whiteSpace: 'pre', lineHeight: 1.05}}>{children}</div>;
};
/** Framed memory aid card in the house double rule. */
export const AidCard: React.FC<{x: number; y: number; w: number; at: number; out?: number; title?: string; children: React.ReactNode}> = ({x, y, w, at, out, title = 'Memory aid', children}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`, padding: '18px 36px 22px'}}>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: INK_SOFT}}>{title}</div>
			{children}
		</div>
	</Enter>
);

// ---------------------------------------------------------------- the two-column ledger with one clock
export type LedgerRow = {content: React.ReactNode; at: number; out?: number; box?: number; size?: number};
export type LedgerCol = {title?: React.ReactNode; rows: readonly LedgerRow[]; glow?: number; tick?: number};
/**
 * The two-column ledger (horizontal teal on the left, vertical blue on the right) with one clock centred
 * above and between them. `links` draws thin ink links from the clock to the "t" tab of each column;
 * `carry` sweeps a curved arrow from one column through the clock into the other ("x" = into horizontal).
 * `divider` draws the separator between the columns. Frame-absolute position; all text solid ink.
 */
export const Ledger: React.FC<{
	x: number; y: number; w: number; h: number; at?: number; out?: number;
	hor: LedgerCol; ver: LedgerCol;
	clock?: {value: string; label?: string; at?: number; pulse?: number; t?: number};
	links?: number; carry?: {at: number; into: 'x' | 'y'}; divider?: {at: number; label?: string};
	size?: number; titleSize?: number;
}> = ({x, y, w, h, at = -30, out, hor, ver, clock, links, carry, divider, size = 34, titleSize = TYPE.support}) => {
	const f = useCurrentFrame();
	const gap = 26;
	const clockH = clock ? 112 : 0;
	const top = clock ? clockH + 30 : 0;
	const cw = (w - gap) / 2;
	const ch = h - top;
	const clockW = Math.min(330, w * 0.56);
	const col = (c: LedgerCol, ax: 'x' | 'y', left: number) => {
		const T = ROLE[ax];
		const gs = c.glow === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - c.glow) / 30)));
		const glow = gs > 0.02 ? gs : 0;
		return (
			<div style={{position: 'absolute', left, top, width: cw, height: ch, boxSizing: 'border-box', background: glow > 0 ? rgba(T.soft.length === 7 ? T.soft : '#ffffff', 0.4 + 0.6 * glow) : CARD, border: `3px solid ${rgba(T.stroke, 0.55)}`, borderTop: `9px solid ${T.stroke}`, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '10px 18px 12px'}}>
				<div style={{...DISPLAY(titleSize, T.ink, 800), whiteSpace: 'normal'}}>{c.title ?? (ax === 'x' ? 'horizontal (x)' : 'vertical (y)')}</div>
				<div style={{marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
					{c.rows.map((r, i) => {
						const b = r.box === undefined ? 0 : prog(f, r.box, 12);
						return (
							<Reveal key={i} at={r.at} out={r.out}>
								<div style={{display: 'inline-block', ...DISPLAY(r.size ?? size, INK, 750), whiteSpace: 'normal', padding: '0 8px', marginLeft: -8, borderRadius: 10, border: `3.5px solid ${b > 0 ? rgba(T.stroke, b) : 'transparent'}`, background: b > 0 ? rgba(CARD, 1) : undefined}}>{r.content}</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		);
	};
	const cx = w / 2, cb = clockH; // clock centre x and bottom y (local)
	const tabY = top - 4;
	const tL: [number, number] = [cw - 30, tabY], tR: [number, number] = [cw + gap + 30, tabY];
	const pz = clock?.pulse === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - clock.pulse) / 24)));
	return (
		<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w, height: h}}>
			{col(hor, 'x', 0)}
			{col(ver, 'y', cw + gap)}
			{clock ? (
				<div style={{position: 'absolute', left: cx - clockW / 2, top: 0, width: clockW, height: clockH, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 18, boxShadow: CARD_SHADOW, display: 'flex', alignItems: 'center', gap: 14, padding: '0 20px', transform: `scale(${1 + 0.07 * pz})`, opacity: clock.at === undefined ? 1 : prog(f, clock.at, 12)}}>
					<svg width={56} height={56} style={{flex: 'none'}}><ClockFace cx={28} cy={28} r={24} t={clock.t ?? 0} /></svg>
					<div>
						<div style={DISPLAY(TYPE.label, INK_SOFT, 700)}>{clock.label ?? 'one clock'}</div>
						<div style={{...DISPLAY(TYPE.working, INK), fontVariantNumeric: 'tabular-nums'}}>{clock.value}</div>
					</div>
				</div>
			) : null}
			<svg width={w} height={h} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible', pointerEvents: 'none'}}>
				{clock && links !== undefined ? (
					<g>
						<DrawPath d={`M${cx - 70},${cb} L${tL[0]},${tL[1] - 16}`} at={links} dur={14} color={INK} width={3.5} />
						<DrawPath d={`M${cx + 70},${cb} L${tR[0]},${tR[1] - 16}`} at={links + 6} dur={14} color={INK} width={3.5} />
						{[tL, tR].map(([tx, ty], i) => (
							<g key={i} opacity={prog(f, links + 12 + i * 6, 10)}>
								<circle cx={tx} cy={ty} r={22} fill={CARD} stroke={INK} strokeWidth={3.5} />
								<text x={tx} y={ty + 11} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.support}} fill={INK}>t</text>
							</g>
						))}
					</g>
				) : null}
				{divider ? <DrawPath d={`M${cw + gap / 2},${top + 10} L${cw + gap / 2},${top + ch - 10}`} at={divider.at} dur={16} color={INK_SOFT} width={3} dash="10 8" /> : null}
				{carry ? (
					carry.into === 'x'
						? <CarryArrow from={[cw + gap + 40, top + ch * 0.88]} to={[cw - 40, top + ch * 0.88]} at={carry.at} bend={-0.45} width={5.5} />
						: <CarryArrow from={[cw - 40, top + ch * 0.88]} to={[cw + gap + 40, top + ch * 0.88]} at={carry.at} bend={0.45} width={5.5} />
				) : null}
			</svg>
			{divider?.label ? <div style={{position: 'absolute', left: 0, width: w, top: h + 8, textAlign: 'center', opacity: prog(f, divider.at + 10, 12), ...DISPLAY(TYPE.label + 2, INK_SOFT, 700)}}>{divider.label}</div> : null}
		</Enter>
	);
};

// ---------------------------------------------------------------- launches (v02 onward)
/** Launch triangle: tail at (x0, y0), k px per m s^-1; teal u_x, blue u_y, orange u with its angle arc. */
export const LaunchTriangle: React.FC<{x0: number; y0: number; k: number; u: number; deg: number; at?: number; labels?: [React.ReactNode, React.ReactNode]; labelsAt?: [number, number]; showSides?: boolean; dashedSides?: boolean; angleLabel?: string}> = ({x0, y0, k, u, deg, at = -30, labels, labelsAt = [-30, -30], showSides = true, dashedSides = false, angleLabel}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	const X = ux(u, deg) * k, Y = uy(u, deg) * k;
	const ang = Math.atan2(Y, X), ah = 22, hx = x0 + X, hy = y0 - Y;
	const h1 = [hx - ah * Math.cos(ang - 0.42), hy + ah * Math.sin(ang - 0.42)], h2 = [hx - ah * Math.cos(ang + 0.42), hy + ah * Math.sin(ang + 0.42)];
	const arcR = Math.min(70, Math.max(30, X * 0.42));
	return (
		<g opacity={o}>
			{showSides ? (
				<g>
					<line x1={x0} y1={y0} x2={x0 + X} y2={y0} stroke={ROLE.x.stroke} strokeWidth={dashedSides ? 5 : 9} strokeDasharray={dashedSides ? '14 10' : undefined} strokeLinecap="round" />
					<line x1={x0 + X} y1={y0} x2={x0 + X} y2={y0 - Y} stroke={ROLE.y.stroke} strokeWidth={dashedSides ? 5 : 9} strokeDasharray={dashedSides ? '14 10' : undefined} strokeLinecap="round" />
					<path d={`M${x0 + X - 22},${y0} V${y0 - 22} H${x0 + X}`} fill="none" stroke={INK_SOFT} strokeWidth={2.5} />
				</g>
			) : null}
			<line x1={x0} y1={y0} x2={hx} y2={hy} stroke={ROLE.v.stroke} strokeWidth={7} strokeLinecap="round" />
			<path d={`M${h1[0]},${h1[1]} L${hx},${hy} L${h2[0]},${h2[1]}`} fill="none" stroke={ROLE.v.stroke} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
			<line x1={x0} y1={y0} x2={x0 + Math.max(X, arcR) + 40} y2={y0} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" opacity={showSides ? 0 : 1} />
			<path d={`M${x0 + arcR},${y0} A${arcR},${arcR} 0 0,0 ${x0 + arcR * Math.cos(ang)},${y0 - arcR * Math.sin(ang)}`} fill="none" stroke={INK} strokeWidth={3} />
			<text x={x0 + (arcR + 12) * Math.cos(ang / 2)} y={y0 - (arcR + 12) * Math.sin(ang / 2) + 14} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.support + 6, fill: INK}}>{angleLabel ?? `${deg}°`}</text>
			{showSides && labels ? (
				<g>
					<foreignObject x={x0 + X / 2 - 250} y={y0 + 12} width={500} height={70} opacity={prog(f, labelsAt[0], 12)}><div style={{...DISPLAY(TYPE.current, ROLE.x.ink), textAlign: 'center'}}>{labels[0]}</div></foreignObject>
					<foreignObject x={x0 + X + 16} y={y0 - Y / 2 - 30} width={500} height={70} opacity={prog(f, labelsAt[1], 12)}><div style={DISPLAY(TYPE.current, ROLE.y.ink)}>{labels[1]}</div></foreignObject>
				</g>
			) : null}
		</g>
	);
};
/** Angle arc with a label at a launch point, measured from a dashed horizontal reference line. */
export const AngleArc: React.FC<{px: number; py: number; r: number; deg: number; label?: string; size?: number; refLen?: number}> = ({px, py, r, deg, label, size = TYPE.support + 6, refLen}) => {
	const a = (deg * Math.PI) / 180;
	return (
		<g>
			<line x1={px} y1={py} x2={px + (refLen ?? r + 40)} y2={py} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" />
			<path d={`M${px + r},${py} A${r},${r} 0 0,0 ${px + r * Math.cos(a)},${py - r * Math.sin(a)}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{label ? <text x={px + (r + 14) * Math.cos(a / 2)} y={py - (r + 14) * Math.sin(a / 2) + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{label}</text> : null}
		</g>
	);
};
/**
 * One flight lane with the painted launcher in a pit (muzzle at the launch level gy). Paths come from the
 * projectile equations; `launchAt` plays the flight at `slow` times slower than real time.
 */
export const FlightLane: React.FC<{
	mx: number; gy: number; ppm: number; u: number; deg: number; lw: number; right: number;
	launchAt?: number; slow?: number; ghost?: number; color?: string; dash?: string; full?: boolean; shadow?: boolean; floorLeft?: number; hideBall?: boolean;
}> = ({mx, gy, ppm, u, deg, lw, right, launchAt, slow = 1, ghost = 0, color = ROLE.v.stroke, dash, full = false, shadow = false, floorLeft, hideBall = false}) => {
	const f = useCurrentFrame();
	const [px, py] = pivotForMuzzle(mx, gy, lw, deg);
	const g = launcherGeom(px, py, lw, deg);
	const T = flightT(u, deg);
	const t = full ? T : launchAt === undefined ? 0 : clockAt(f, launchAt, T, slow);
	const [bx, by] = pos(u, deg, t);
	const wall = g.right + 6, fl = floorLeft ?? g.left - 34;
	const w: World = {x0: mx, y0: gy, ppm};
	return (
		<g>
			<rect x={fl} y={gy} width={wall - fl} height={g.floorY - gy} fill={TRACK} opacity={0.6} />
			<GroundLine x1={fl} x2={wall} y={g.floorY} />
			<line x1={wall} x2={wall} y1={gy} y2={g.floorY} stroke={INK} strokeWidth={3.5} />
			<GroundLine x1={wall} x2={right} y={gy} />
			<LauncherSvg px={px} py={py} w={lw} deg={deg} />
			{ghost > 0 ? <path d={flightD(w, u, deg, T)} fill="none" stroke={color} strokeWidth={4} strokeDasharray="4 10" strokeLinecap="round" opacity={ghost} /> : null}
			{t > 0.001 ? <path d={flightD(w, u, deg, t)} fill="none" stroke={color} strokeWidth={7} strokeDasharray={dash} strokeLinecap="round" strokeLinejoin="round" /> : null}
			{shadow && t > 0.001 && t < T ? <circle cx={mx + bx * ppm} cy={gy} r={9} fill={ROLE.x.stroke} /> : null}
			{hideBall ? null : <BallSvg cx={mx + bx * ppm} cy={gy - by * ppm - (t >= T - 0.001 ? g.ballD * 0.42 : 0)} d={g.ballD} />}
		</g>
	);
};
/** Range check helper for lessons: level-ground range and the time to land `drop` metres below. */
export const flightNumbers = (u: number, deg: number, drop = 0) => ({T: landT(u, deg, drop), R: drop === 0 ? range(u, deg) : ux(u, deg) * landT(u, deg, drop)});
export {fx};

/** Live readout card: rows of label, big tabular value (52 px) and unit, each in its role colour. */
export type ReadRow = {label: React.ReactNode; value: string; unit?: React.ReactNode; color?: string; at?: number; ring?: number};
export const Readouts: React.FC<{x: number; y: number; w: number; rows: readonly ReadRow[]; title?: React.ReactNode; at?: number; out?: number; size?: number}> = ({x, y, w, rows, title, at = -30, out, size = TYPE.working}) => {
	const f = useCurrentFrame();
	return (
		<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{background: CARD, borderRadius: 18, padding: '10px 24px 10px', boxShadow: CARD_SHADOW, border: `2.5px solid ${CARD_BORDER}`}}>
				{title ? <div style={{...DISPLAY(TYPE.label, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 2}}>{title}</div> : null}
				{rows.map((r, i) => {
					const o = r.at === undefined ? 1 : prog(f, r.at, 12);
					const ring = r.ring === undefined ? 0 : prog(f, r.ring, 18);
					return (
						<div key={i} style={{opacity: o, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 14, borderTop: i ? `2px solid ${TRACK}` : undefined, padding: '4px 0'}}>
							<span style={DISPLAY(TYPE.support + 2, r.color ?? INK, 700)}>{r.label}</span>
							<span style={{display: 'flex', alignItems: 'baseline', gap: 8}}>
								<span style={{...DISPLAY(size, r.color ?? INK), fontVariantNumeric: 'tabular-nums', padding: '0 6px', borderRadius: 999, outline: ring > 0 ? `4px solid ${rgba(INK, ring)}` : undefined, outlineOffset: 2}}>{r.value}</span>
								{r.unit ? <span style={DISPLAY(TYPE.support, INK_SOFT, 600)}>{r.unit}</span> : null}
							</span>
						</div>
					);
				})}
			</div>
		</Enter>
	);
};
