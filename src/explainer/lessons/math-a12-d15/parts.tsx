// Lesson parts for math-a12-d15 (Revision 4: differentiability at a join; a skateboard on skate tracks), built on
// the maths studio kit. SkateRide is lesson-local (design, "Studio kit use and additions" item 3): every track is
// the graph itself, drawn as a coded plywood band under the ink curve, and the painted board sits with its wheels
// on the curve and its deck along the on-screen tangent at the contact point (the midpoint between its wheels).
// Equal units wherever the board or an angle is shown. The plate's wheel contacts (677, 601) and (1721.5, 601)
// were measured by Codex (brief 238 manifest); the board turns about their midpoint (1199.25, 601).
import React, {useId} from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FunctionSimulator, LiveReadoutBoard, MATHS_KIT2_PLATES, usePlatePreload, vis, MATH_AMBER, MATH_ANSWER, MATH_BLUE, MATH_EXCLUDED, MATH_GRADIENT, MATH_MISTAKE, MATH_TEAL, piecewiseFamily} from '../../math/studio';
import type {FunctionSimulatorProps, PiecewiseFamily, PlateSpec} from '../../math/studio';
import {gmap} from '../math-a12-d14/parts';
import type {GMap} from '../math-a12-d14/parts';

export {AnswerBox, Chip, CurveLabel, Line, Note, P, RecallChip, Ring, gmap, tl} from '../math-a12-d14/parts';
export type {GMap};

export const VIOLET = MATH_GRADIENT;
export const TEAL = MATH_TEAL;
export const BLUE = MATH_BLUE;
export const AMB = MATH_AMBER;
export const AMB_INK = '#7a4600';
export const GREEN = MATH_ANSWER;
export const RED = MATH_MISTAKE;
export const GREY = MATH_EXCLUDED;
export const GREY_INK = '#4f4840';
export const RAD = 180 / Math.PI;

export type Stage = {x: number; y: number; w: number; h: number};
export type Win = {x: [number, number]; y: [number, number]};
export const lerpStage = (a: Stage, b: Stage, t: number): Stage => ({x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, w: a.w + (b.w - a.w) * t, h: a.h + (b.h - a.h) * t});
export const mixHex = (a: string, b: string, t: number) => {
	const pa = [1, 3, 5].map(i => parseInt(a.slice(i, i + 2), 16)), pb = [1, 3, 5].map(i => parseInt(b.slice(i, i + 2), 16));
	const u = Math.max(0, Math.min(1, t));
	return '#' + pa.map((v, i) => Math.round(v + (pb[i] - v) * u).toString(16).padStart(2, '0')).join('');
};

// ---------- role spans ----------
const glowBg = (rgb: string, g: number) => (g > 0.001 ? `rgba(${rgb},${0.9 * g})` : undefined);
export const V: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: VIOLET, background: glowBg('231,224,242', g), borderRadius: 8}}>{children}</span>;
export const Tl: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: TEAL, background: glowBg('214,238,238', g), borderRadius: 8}}>{children}</span>;
export const Bl: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: BLUE, background: glowBg('220,234,247', g), borderRadius: 8}}>{children}</span>;
export const Am: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: AMB_INK, background: glowBg('248,232,200', g), borderRadius: 8}}>{children}</span>;
export const Gr: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: GREEN}}>{children}</span>;
/** Small grey "≈" readout beside an exact value. */
export const Approx: React.FC<{children: React.ReactNode; size?: number}> = ({children, size = 32}) => <span style={{fontSize: size, fontWeight: 700, color: INK_SOFT}}>{children}</span>;

// ---------- windows and stages ----------
/** Scenes 2 to 4 and 14: x −0.5 to 2.2, y −0.5 to 2.5, equal units (253 px per unit). */
export const WIN_J: Win = {x: [-0.5, 2.2], y: [-0.5, 2.5]};
export const G_J: Stage = {x: 30, y: 150, w: 810, h: 880};
/** Scene 1 panels (d14's frame): x −1 to 2.2, y −1 to 2.2. */
export const WIN_H: Win = {x: [-1, 2.2], y: [-1, 2.2]};

// ---------- functions (author notes c to e) ----------
const INF = Infinity;
export const sqrPiece = {from: -INF, to: 1, includeTo: true, f: (x: number) => x * x, df: (x: number) => 2 * x};
/** Smooth join: x² for x ≤ 1, then its tangent 2x − 1. */
export const SMOOTH = piecewiseFamily([sqrPiece, {from: 1, to: INF, f: x => 2 * x - 1, df: () => 2}]);
/** Corner: x² for x ≤ 1, then x. */
export const CORNER = piecewiseFamily([sqrPiece, {from: 1, to: INF, f: x => x, df: () => 1}]);
/** Jump: x² for x ≤ 1, then 2x (gradients match, values do not). */
export const JUMP = piecewiseFamily([sqrPiece, {from: 1, to: INF, f: x => 2 * x, df: () => 2}]);
/** Scene 4's swing: the right piece turns from 2x − 1 (s = 0) to x (s = 1) about (1, 1). */
export const swingFam = (s: number) => (s <= 0 ? SMOOTH : s >= 1 ? CORNER : piecewiseFamily([sqrPiece, {from: 1, to: INF, f: x => 1 + (2 - s) * (x - 1), df: () => 2 - s}]));
/** Worked example: x² for x ≤ 2, then ax + b. */
export const workedFam = (a: number, b: number) => piecewiseFamily([{from: -INF, to: 2, includeTo: true, f: x => x * x, df: x => 2 * x}, {from: 2, to: INF, f: x => a * x + b, df: () => a}]);
/** Sign-preserving cube root and its quotient (author note d). */
export const CBRT = piecewiseFamily([{from: -INF, to: INF, f: x => Math.cbrt(x), df: x => (x === 0 ? NaN : 1 / (3 * Math.cbrt(x) ** 2))}]);
export const CUSP = piecewiseFamily([{from: -INF, to: INF, f: x => Math.cbrt(x * x), df: x => (x === 0 ? NaN : (2 / 3) / Math.cbrt(x))}]);
/** Attempt families. */
export const A1FAM = piecewiseFamily([{from: -INF, to: 1, includeTo: true, f: x => 3 - x * x, df: x => -2 * x}, {from: 1, to: INF, f: x => x + 1, df: () => 1}]);
export const A2FAM = piecewiseFamily([{from: -INF, to: 0, includeTo: true, f: x => Math.exp(2 * x), df: x => 2 * Math.exp(2 * x)}, {from: 0, to: INF, f: x => 2 * x + 1, df: () => 2}]);

/** Readout format: three significant figures, trailing zeros dropped (1.5, 1.9, 1.99, 2, 4.64, 21.5, 100, 102). */
export const fmt3 = (v: number) => {
	if (!Number.isFinite(v)) return 'undefined';
	const s = Math.abs(v) >= 100 ? String(Math.round(Math.abs(v))) : String(Number(Math.abs(v).toPrecision(3)));
	return (v < 0 ? '−' : '') + s;
};
export const deg1 = (m: number) => `${(Math.atan(m) * RAD).toFixed(1)}°`;

/** Every on-screen number, checked once at load (author notes c, d, e; Revision 4 angles). */
{
	const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
	const q = (fam: PiecewiseFamily, a: number, h: number) => (fam.f(a + h, {}) - fam.f(a, {})) / h;
	const checks: [string, boolean][] = [
		['smooth left 1.5, 1.9, 1.99', fmt3(q(SMOOTH, 1, -0.5)) === '1.5' && fmt3(q(SMOOTH, 1, -0.1)) === '1.9' && fmt3(q(SMOOTH, 1, -0.01)) === '1.99'],
		['smooth right 2', near(q(SMOOTH, 1, 0.5), 2) && near(q(SMOOTH, 1, 0.01), 2)],
		['corner right 1', near(q(CORNER, 1, 0.1), 1)],
		['jump 4, 12, 102', fmt3(q(JUMP, 1, 0.5)) === '4' && fmt3(q(JUMP, 1, 0.1)) === '12' && fmt3(q(JUMP, 1, 0.01)) === '102'],
		['cube root 4.64, 21.5, 100', fmt3(q(CBRT, 0, 0.1)) === '4.64' && fmt3(q(CBRT, 0, -0.01)) === '21.5' && fmt3(q(CBRT, 0, 0.001)) === '100'],
		['cusp ±2.15', fmt3(q(CUSP, 0, 0.1)) === '2.15' && fmt3(q(CUSP, 0, -0.1)) === '−2.15'],
		['angles', deg1(2) === '63.4°' && deg1(1) === '45.0°' && deg1(4) === '76.0°' && (Math.atan(2) - Math.atan(1)) * RAD - 18.4 < 0.05],
		['worked', near(workedFam(4, -4).f(2, {}), 4) && near(4 * 2 - 4, 4)],
		['A1', near(A1FAM.f(1, {}), 2) && near(1 + 1, 2)],
		['A2', near(A2FAM.f(0, {}), 1) && near(A2FAM.pieces[0].df(0), 2)],
	];
	const bad = checks.filter(c => !c[1]).map(c => c[0]);
	if (bad.length) throw new Error('math-a12-d15 numbers: ' + bad.join(', '));
}

// ---------- the skateboard plate ----------
export const SKATE: PlateSpec = MATHS_KIT2_PLATES.skateboard;
const SK_C: [number, number] = [1199.25, 601];
const SK_W = SKATE.box[2] - SKATE.box[0]; // 1780: board length in file px
const SK_WHEELBASE = (1721.5 - 677) / SK_W; // wheel spacing as a share of the board length

/** The painted board with its contact midpoint at p, deck turned `deg` (screen, clockwise), `len` px long. */
export const BoardSprite: React.FC<{p: [number, number]; deg: number; len: number; o?: number; flip?: boolean}> = ({p, deg, len, o = 1, flip = false}) => {
	if (o <= 0.001) return null;
	const s = len / SK_W;
	return (
		<g transform={`translate(${p[0].toFixed(2)},${p[1].toFixed(2)}) rotate(${deg.toFixed(3)})${flip ? ' scale(-1,1)' : ''}`} opacity={o}>
			<image href={staticFile(SKATE.src)} x={-SK_C[0] * s} y={-SK_C[1] * s} width={SKATE.nat[0] * s} height={SKATE.nat[1] * s} preserveAspectRatio="none" />
		</g>
	);
};

/** A map from maths to frame coordinates (gmap, or a magnified copy). */
export type TMap = {pt: (X: number, Y: number) => [number, number]; sx: number; sy: number};
const pieceAt = (fam: PiecewiseFamily, X: number) => {
	const i = fam.owner(X);
	if (i >= 0) return fam.pieces[i];
	return X < fam.pieces[0].from ? fam.pieces[0] : fam.pieces[fam.pieces.length - 1];
};
/** Track gradient under the board (the owning piece's gradient; it snaps where the one-sided gradients differ). */
export const trackSlope = (fam: PiecewiseFamily, X: number) => pieceAt(fam, X).df(X);

/**
 * Board pose on a track: contact point on the curve, deck along the on-screen tangent, lifted so that neither
 * wheel sinks into a bend of its own piece. `upright` stands the board straight up (vertical tangent picture).
 */
export const boardPose = (M: TMap, fam: PiecewiseFamily, X: number, len: number, o: {upright?: boolean; shake?: number} = {}) => {
	const pc = pieceAt(fam, X);
	const m = pc.df(X);
	const C0 = M.pt(X, pc.f(X));
	let u: [number, number];
	if (o.upright || !Number.isFinite(m)) u = [0, -1];
	else {const vx = M.sx, vy = -m * M.sy, l = Math.hypot(vx, vy); u = [vx / l, vy / l];}
	const up: [number, number] = [u[1], -u[0]];
	const ws = (len * SK_WHEELBASE) / 2;
	let lift = 0;
	if (!o.upright && Number.isFinite(m)) {
		for (const sgn of [-1, 1]) {
			const wx = C0[0] + sgn * u[0] * ws, wy = C0[1] + sgn * u[1] * ws;
			const Xw = X + (wx - C0[0]) / M.sx;
			const cy = M.pt(Xw, pc.f(Xw))[1];
			lift = Math.max(lift, wy - cy);
		}
	}
	const sh = o.shake ?? 0;
	const C: [number, number] = [C0[0] + up[0] * lift, C0[1] + up[1] * lift + sh];
	return {C, deg: Math.atan2(u[1], u[0]) * RAD, m, contact: C0};
};

/** Shake offset (px) for 6 frames after a jolt at frame `at`. */
export const shakeAt = (f: number, at: number | undefined, amp = 6) => (at === undefined || f < at || f >= at + 6 ? 0 : (f - at) % 2 === 0 ? -amp : amp);

// ---------- the plywood track band ----------
const PLY_TOP = '#e6cc98';
const PLY_EDGE = '#a57a42';
const PLY_LINE = '#cfae72';
/** The band under one piece from x = a to b: a strip `depth` px deep below the curve (normal to it on screen). */
export const bandPath = (M: TMap, f: (x: number) => number, df: (x: number) => number, a: number, b: number, depth: number, frac = 1, n = 140) => {
	const top: [number, number][] = [], bot: [number, number][] = [], mid: [number, number][] = [];
	for (let i = 0; i <= n; i++) {
		const x = a + ((b - a) * i) / n;
		const y = f(x), m = df(x);
		if (!Number.isFinite(y)) continue;
		const P = M.pt(x, y);
		const mm = Number.isFinite(m) ? m : 0;
		const nx = mm * M.sy, ny = M.sx, l = Math.hypot(nx, ny);
		top.push(P);
		bot.push([P[0] + (nx / l) * depth, P[1] + (ny / l) * depth]);
		mid.push([P[0] + (nx / l) * depth * frac * 0.5, P[1] + (ny / l) * depth * frac * 0.5]);
	}
	const poly = [...top, ...bot.reverse()].map((q, i) => `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' ') + ' Z';
	const line = mid.map((q, i) => `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' ');
	return {poly, line};
};
export type BandSpec = {o: number; ranges: readonly [number, number][]; depth?: number; step?: {x: number; lo: number; hi: number}};
/** The band (SVG, frame coordinates) for every range of a piecewise track, plus an optional step face. */
export const Band: React.FC<{M: TMap; fam: PiecewiseFamily; spec: BandSpec; dim?: number}> = ({M, fam, spec, dim = 0}) => {
	if (spec.o <= 0.001) return null;
	const depth = spec.depth ?? 0.11 * M.sx;
	const parts: React.ReactNode[] = [];
	spec.ranges.forEach(([a, b], i) => {
		const pcs = fam.pieces.filter(p => p.to > a && p.from < b);
		pcs.forEach((pc, j) => {
			const lo = Math.max(a, pc.from), hi = Math.min(b, pc.to);
			if (!(hi > lo)) return;
			const {poly, line} = bandPath(M, pc.f, pc.df, lo, hi, depth);
			parts.push(<g key={`${i}-${j}`}><path d={poly} fill={mixHex(PLY_TOP, '#f6f1e7', dim)} stroke={mixHex(PLY_EDGE, '#f6f1e7', dim)} strokeWidth={2.5} strokeLinejoin="round" /><path d={line} stroke={mixHex(PLY_LINE, '#f6f1e7', dim)} strokeWidth={2} fill="none" /></g>);
		});
	});
	if (spec.step) {
		const A = M.pt(spec.step.x, spec.step.hi), B = M.pt(spec.step.x, spec.step.lo);
		parts.push(<rect key="step" x={A[0] - depth * 0.9} y={A[1]} width={depth * 0.9} height={B[1] - A[1] + depth} fill={mixHex(PLY_TOP, '#f6f1e7', dim)} stroke={mixHex(PLY_EDGE, '#f6f1e7', dim)} strokeWidth={2.5} />);
	}
	return <g opacity={spec.o}>{parts}</g>;
};

/** The ink curve of a piecewise track as SVG paths (for close-ups, which magnify with a transform). */
export const curvePaths = (M: TMap, fam: PiecewiseFamily, a: number, b: number, n = 220) => fam.pieces.map(pc => {
	const lo = Math.max(a, pc.from), hi = Math.min(b, pc.to);
	if (!(hi > lo)) return '';
	const q: string[] = [];
	for (let i = 0; i <= n; i++) {const x = lo + ((hi - lo) * i) / n; const y = pc.f(x); if (Number.isFinite(y)) {const P = M.pt(x, y); q.push(`${q.length ? 'L' : 'M'}${P[0].toFixed(1)},${P[1].toFixed(1)}`);}}
	return q.join(' ');
}).filter(Boolean);

export type BoardState = {X: number; o: number; len: number; flip?: boolean; shake?: number; upright?: boolean};

export type TrackViewProps = {
	S: Stage; win: Win; fam: PiecewiseFamily;
	color?: string; at?: number; out?: number; draw?: {at: number; dur?: number};
	band?: BandSpec; bandDim?: number;
	board?: BoardState;
	xTicks?: FunctionSimulatorProps['xTicks']; yTicks?: FunctionSimulatorProps['yTicks'];
	markers?: FunctionSimulatorProps['markers']; curves?: FunctionSimulatorProps['curves']; zoom?: FunctionSimulatorProps['zoom'];
	/** Join x for the simulator's point (zoom centre). */
	joinX?: number;
	/** Paper card behind the plot (d14's panels). */
	card?: number;
	/** SVG under the board (frame coordinates, clipped to the plot). */
	under?: (M: GMap) => React.ReactNode;
	/** SVG over everything (frame coordinates, not clipped). */
	over?: (M: GMap) => React.ReactNode;
	html?: (M: GMap) => React.ReactNode;
	hideMainCurve?: boolean;
};

/** SkateRide: the plywood band, the ink curve and the painted board riding it. */
export const TrackView: React.FC<TrackViewProps> = p => {
	usePlatePreload([SKATE.src]);
	const f = useCurrentFrame();
	const gid = `tv-${useId().replace(/:/g, '')}`;
	const {S: st, win, fam} = p;
	const M = gmap(st.x, st.y, st.w, st.h, win);
	const B = M.box;
	const o = vis(f, p.at ?? -60, p.out, 14);
	const pose = p.board && p.board.o > 0.001 ? boardPose(M, fam, p.board.X, p.board.len, {upright: p.board.upright, shake: p.board.shake}) : null;
	return (
		<>
			{(p.card ?? 0) > 0.001 ? <div style={{position: 'absolute', left: st.x + 16, top: st.y - 6, width: st.w - 10, height: st.h + 6, background: CARD, borderRadius: 22, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', opacity: p.card}} /> : null}
			{p.band && p.band.o > 0.001 ? (
				<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none', opacity: o}}>
					<defs><clipPath id={gid + 'b'}><rect x={B.left} y={B.top} width={B.width} height={B.height} /></clipPath></defs>
					<g clipPath={`url(#${gid}b)`}><Band M={M} fam={fam} spec={p.band} dim={p.bandDim} /></g>
				</svg>
			) : null}
			<FunctionSimulator x={st.x} y={st.y} width={st.w} height={st.h} window={win} family={fam} timeline={[{frame: 0, x: p.joinX ?? 1}]} color={p.color ?? INK} at={p.at ?? -60} out={p.out} draw={p.draw}
				xTicks={p.xTicks} yTicks={p.yTicks} xLabel="x" yLabel="y" markers={p.markers} curves={p.curves} zoom={p.zoom} hideMainCurve={p.hideMainCurve} />
			<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none', opacity: o}}>
				<defs><clipPath id={gid + 'c'}><rect x={B.left - 40} y={B.top - 40} width={B.width + 80} height={B.height + 80} /></clipPath></defs>
				<g clipPath={`url(#${gid}c)`}>
					{p.under ? p.under(M) : null}
					{pose ? <BoardSprite p={pose.C} deg={pose.deg} len={p.board!.len} o={p.board!.o} flip={p.board!.flip} /> : null}
				</g>
				{p.over ? p.over(M) : null}
			</svg>
			{p.html ? p.html(M) : null}
		</>
	);
};

/**
 * Close-up of the board (the same track magnified k times about the board's contact point), in a rounded panel.
 * The band, curve and board are re-drawn under one transform, so the picture is exactly the main one, larger.
 */
export const BoardCloseUp: React.FC<{x: number; y: number; w: number; h: number; M: TMap; fam: PiecewiseFamily; board: BoardState; k: number; band?: BandSpec; range: [number, number]; at?: number; out?: number; title?: string; children?: React.ReactNode; jolt?: number}> = ({x, y, w, h, M, fam, board, k, band, range, at = -30, out, title, children, jolt = 0}) => {
	usePlatePreload([SKATE.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const pose = boardPose(M, fam, board.X, board.len, {upright: board.upright});
	const P = pose.contact;
	const sh = board.shake ?? 0;
	const paths = curvePaths(M, fam, range[0], range[1]);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o, borderRadius: 22, overflow: 'hidden', boxShadow: CARD_SHADOW, border: '3px solid rgba(60,45,20,0.16)', background: '#f3efe4'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0}}>
				<g transform={`translate(${w / 2},${h / 2 + 30 + sh * k * 0.5}) scale(${k}) translate(${-P[0]},${-P[1]})`}>
					{band ? <Band M={M} fam={fam} spec={band} /> : null}
					{paths.map((d, i) => <path key={i} d={d} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />)}
					<BoardSprite p={pose.C} deg={pose.deg} len={board.len} flip={board.flip} />
				</g>
				{jolt > 0.001 ? <g opacity={jolt} stroke={VIOLET} strokeWidth={6} strokeLinecap="round">
					<line x1={w / 2 - 60} y1={h / 2 - 110} x2={w / 2 - 90} y2={h / 2 - 150} />
					<line x1={w / 2} y1={h / 2 - 125} x2={w / 2} y2={h / 2 - 170} />
					<line x1={w / 2 + 60} y1={h / 2 - 110} x2={w / 2 + 90} y2={h / 2 - 150} />
				</g> : null}
			</svg>
			{title ? <div style={{position: 'absolute', left: 18, top: 10, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT}}>{title}</div> : null}
			{children}
		</div>
	);
};

/** The ride readouts: the track gradient under the board and its angle (equal units), both violet. */
export const RideBoard: React.FC<{x: number; y: number; w?: number; m: number; at?: number; out?: number; title?: string; glow?: [number, number]; upright?: boolean}> = ({x, y, w = 560, m, at = -30, out, title, glow, upright = false}) => (
	<LiveReadoutBoard x={x} y={y} width={w} at={at} out={out} title={title} inline rows={[
		{label: 'track gradient', value: m, role: 'gradient', text: upright ? 'none' : undefined, glow},
		{label: 'track angle', value: m, role: 'gradient', text: upright ? '90°' : `≈ ${deg1(m)}`, glow},
	]} />
);

/** Short violet jolt marks around a frame point. */
export const JoltMarks: React.FC<{p: [number, number]; o: number; r?: number}> = ({p, o, r = 46}) => (o <= 0.001 ? null : (
	<g opacity={o} stroke={VIOLET} strokeWidth={5} strokeLinecap="round">
		<line x1={p[0] - r} y1={p[1] - r * 0.9} x2={p[0] - r * 1.5} y2={p[1] - r * 1.5} />
		<line x1={p[0]} y1={p[1] - r * 1.15} x2={p[0]} y2={p[1] - r * 1.85} />
		<line x1={p[0] + r} y1={p[1] - r * 0.9} x2={p[0] + r * 1.5} y2={p[1] - r * 1.5} />
	</g>
));

/** Colour legend along the top right (scenes 2 to 6). */
export const Legend: React.FC<{at?: number; out?: number}> = ({at = -30, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const items: [string, string][] = [[BLUE, 'from the left'], [TEAL, 'from the right'], [VIOLET, 'tangent']];
	return (
		<div style={{position: 'absolute', right: 96, top: 30, opacity: o, display: 'flex', gap: 28, alignItems: 'center'}}>
			{items.map(([c, t], i) => (
				<span key={i} style={{display: 'flex', alignItems: 'center', gap: 10}}>
					<svg width={40} height={12}><line x1={2} x2={38} y1={6} y2={6} stroke={c} strokeWidth={6} strokeLinecap="round" /></svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: c}}>{t}</span>
				</span>
			))}
		</div>
	);
};

/** A short stub of gradient m through (X, Y) on a map, from X towards one side (dir −1 left, +1 right) or both (0). */
export const stubLine = (M: TMap, X: number, Y: number, m: number, dir: -1 | 0 | 1, len: number) => {
	const P = M.pt(X, Y), vx = M.sx, vy = -m * M.sy, l = Math.hypot(vx, vy), ux = vx / l, uy = vy / l;
	const a = dir === 1 ? 0 : len, b = dir === -1 ? 0 : len;
	return {x1: P[0] - ux * a, y1: P[1] - uy * a, x2: P[0] + ux * b, y2: P[1] + uy * b};
};

/** A static thumbnail track (memory card, notes, scene 7): band, curve, open and filled ends, the board. */
export const MiniTrack: React.FC<{w: number; h: number; win: Win; fam: PiecewiseFamily; ranges: readonly [number, number][]; boardX?: number; boardLen?: number; step?: {x: number; lo: number; hi: number}; dots?: {X: number; Y: number; open?: boolean}[]; corner?: [number, number]; label?: React.ReactNode; glow?: number; flip?: boolean}> = ({w, h, win, fam, ranges, boardX, boardLen = 150, step, dots = [], corner, label, glow = 0, flip}) => {
	usePlatePreload([SKATE.src]);
	const gid = `mt-${useId().replace(/:/g, '')}`;
	const s = Math.min(w / (win.x[1] - win.x[0]), h / (win.y[1] - win.y[0]));
	const ox = (w - s * (win.x[1] - win.x[0])) / 2, oy = (h - s * (win.y[1] - win.y[0])) / 2;
	const M: TMap = {pt: (a, b) => [ox + (a - win.x[0]) * s, oy + (win.y[1] - b) * s], sx: s, sy: s};
	const paths = ranges.flatMap(([a, b]) => curvePaths(M, fam, a, b));
	const pose = boardX !== undefined ? boardPose(M, fam, boardX, boardLen) : null;
	return (
		<div style={{position: 'relative', width: w, height: h}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible'}}>
				<defs><clipPath id={gid}><rect x={0} y={0} width={w} height={h} rx={14} /></clipPath></defs>
				<rect x={0} y={0} width={w} height={h} rx={14} fill={glow > 0.001 ? mixHex('#fbf8f1', '#efe6d0', glow) : '#fbf8f1'} stroke={glow > 0.001 ? mixHex('#d8cfbf', '#c99a3a', glow) : 'rgba(60,45,20,0.14)'} strokeWidth={glow > 0.001 ? 3 + 2 * glow : 2} />
				<g clipPath={`url(#${gid})`}>
					<Band M={M} fam={fam} spec={{o: 1, ranges, depth: 0.12 * s, step}} />
					{paths.map((d, i) => <path key={i} d={d} stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" />)}
					{dots.map((d, i) => {const P = M.pt(d.X, d.Y); return <circle key={i} cx={P[0]} cy={P[1]} r={9} fill={d.open ? CARD : INK} stroke={d.open ? GREY : CARD} strokeWidth={d.open ? 4 : 3} />;})}
					{corner ? (() => {const P = M.pt(corner[0], corner[1]); return <circle cx={P[0]} cy={P[1]} r={22} fill="none" stroke={INK} strokeWidth={4} />;})() : null}
					{pose ? <BoardSprite p={pose.C} deg={pose.deg} len={boardLen} flip={flip} /> : null}
				</g>
			</svg>
			{label ? <div style={{position: 'absolute', left: 14, top: 8, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: INK, textShadow: '0 0 6px #fbf8f1, 0 0 10px #fbf8f1'}}>{label}</div> : null}
		</div>
	);
};

/** Green tick (svg) and red cross for panel verdicts. */
export const Tick: React.FC<{size?: number; o?: number}> = ({size = 44, o = 1}) => <svg width={size} height={size} viewBox="0 0 60 60" style={{opacity: o, verticalAlign: 'middle'}}><path d="M8,32 L24,48 L54,10" stroke={GREEN} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>;
export const Cross: React.FC<{size?: number; o?: number}> = ({size = 44, o = 1}) => <svg width={size} height={size} viewBox="0 0 60 60" style={{opacity: o, verticalAlign: 'middle'}}><path d="M10,10 L50,50 M50,10 L10,50" stroke={RED} strokeWidth={8} fill="none" strokeLinecap="round" /></svg>;

/** A card with a role-coloured border holding lines (definition cards, verdicts). */
export const BoxCard: React.FC<{x: number; y: number; w?: number; at: number; out?: number; border?: string; size?: number; title?: string; children: React.ReactNode; bw?: number}> = ({x, y, w, at, out, border = 'rgba(60,45,20,0.16)', size = 44, title, children, bw = 3}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: w ? 'block' : 'inline-block', background: CARD, borderRadius: 18, padding: '8px 24px 10px', boxShadow: CARD_SHADOW, border: `${bw}px solid ${border}`, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK, lineHeight: 1.3}}>
			{title ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT, textTransform: 'uppercase'}}>{title}</div> : null}
			{children}
		</div>
	</Enter>
);

/** Board position along a ride: keys [frame, X], linear (steady roll). */
export const ride = (f: number, keys: readonly (readonly [number, number])[]) => {
	if (f <= keys[0][0]) return keys[0][1];
	for (let i = 0; i + 1 < keys.length; i++) {
		const [a, va] = keys[i], [b, vb] = keys[i + 1];
		if (f < b) return va + ((vb - va) * (f - a)) / (b - a);
	}
	return keys[keys.length - 1][1];
};
/** Frame at which a ride crosses x = c (first crossing). */
export const crossFrame = (keys: readonly (readonly [number, number])[], c: number) => {
	for (let i = 0; i + 1 < keys.length; i++) {
		const [a, va] = keys[i], [b, vb] = keys[i + 1];
		if ((va - c) * (vb - c) <= 0 && va !== vb) return Math.round(a + ((c - va) / (vb - va)) * (b - a));
	}
	return undefined;
};

/** The plywood band alone (frame coordinates, clipped to the plot), drawn before a simulator so it sits under the curve. */
export const BandLayer: React.FC<{S: Stage; win: Win; fam: PiecewiseFamily; spec: BandSpec; dim?: number; o?: number}> = ({S: st, win, fam, spec, dim, o = 1}) => {
	const gid = `bl-${useId().replace(/:/g, '')}`;
	if (spec.o * o <= 0.001) return null;
	const M = gmap(st.x, st.y, st.w, st.h, win);
	const B = M.box;
	return (
		<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none', opacity: o}}>
			<defs><clipPath id={gid}><rect x={B.left} y={B.top} width={B.width} height={B.height} /></clipPath></defs>
			<g clipPath={`url(#${gid})`}><Band M={M} fam={fam} spec={spec} dim={dim} /></g>
		</svg>
	);
};
/** The board alone on a plot (frame coordinates), with optional SVG extras over it. */
export const BoardLayer: React.FC<{S: Stage; win: Win; fam: PiecewiseFamily; board?: BoardState; over?: (M: GMap) => React.ReactNode; clip?: boolean}> = ({S: st, win, fam, board, over, clip = true}) => {
	usePlatePreload([SKATE.src]);
	const gid = `bo-${useId().replace(/:/g, '')}`;
	const M = gmap(st.x, st.y, st.w, st.h, win);
	const B = M.box;
	const pose = board && board.o > 0.001 ? boardPose(M, fam, board.X, board.len, {upright: board.upright, shake: board.shake}) : null;
	return (
		<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none'}}>
			<defs><clipPath id={gid}><rect x={B.left - 30} y={B.top - 60} width={B.width + 60} height={B.height + 90} /></clipPath></defs>
			<g clipPath={clip ? `url(#${gid})` : undefined}>{pose ? <BoardSprite p={pose.C} deg={pose.deg} len={board!.len} o={board!.o} flip={board!.flip} /> : null}</g>
			{over ? over(M) : null}
		</svg>
	);
};
/** The secant step h at a frame (the kit's held-stop rule: hold, then move over `move` frames into each stop). */
export const hAt = (stops: readonly {frame: number; h: number}[], frame: number, move = 22) => {
	const pts: [number, number][] = [];
	stops.forEach((s, i) => {
		if (i === 0) pts.push([s.frame, s.h]);
		else {pts.push([Math.max(stops[i - 1].frame, s.frame - move), stops[i - 1].h]); pts.push([s.frame, s.h]);}
	});
	if (frame <= pts[0][0]) return pts[0][1];
	for (let i = 0; i + 1 < pts.length; i++) {
		const [a, va] = pts[i], [b, vb] = pts[i + 1];
		if (frame < b) {const u = (frame - a) / (b - a); return va + (vb - va) * (u * u * (3 - 2 * u));}
	}
	return pts[pts.length - 1][1];
};
export {piecewiseFamily} from '../../math/studio';
