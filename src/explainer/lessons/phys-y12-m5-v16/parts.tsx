// Lesson parts for phys-y12-m5-v16: the whirling-bung stage (kit `physics/circular/bung.tsx`, the same layout as
// v15's final frame) with the bung's laps integrated frame by frame from the model's omega, the bench instruments
// (stopwatch with its painted hand masked for a coded hand and readout, top-pan balance with a coded readout,
// metre rule, safety glasses), the Mg against omega-squared graph (points, error bars, prediction and best lines),
// the method banner, and the Earth and Moon for the handoff. Colour key: forces amber, inward part teal, vertical
// part blue, velocity teal, omega, T, L, r, alpha and givens navy, data points navy with dark grey error bars,
// prediction line orange dashed, best line navy, mistakes slate.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Enter, prog} from '../../kit';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {DISPLAY, ROLE} from '../../physics/projectile/board';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {Ring} from '../phys-y12-m5-v03/parts';
import {model} from './common';

export {Lbl, Ring};
export const AMBER = ROLE.w, VEL = ROLE.x, UP = ROLE.y, NAVY = ROLE.given, ORANGE = ROLE.v;
export const ERR = '#4d4a45';
export const STOPWATCH_SRC = 'assets/chemistry/c8-stopwatch-v1.png';
export const BALANCE_SRC = 'assets/physics/phys-y11-top-pan-balance-v1.png';
export const RULE_SRC = 'assets/physics/phys-y11-metre-rule-v1.png';
export const GLASSES_SRC = 'assets/chemistry/m5x-safety-glasses-v1.png';
export const EARTH_SRC = 'assets/physics/phys-y11-earth-v1.png';
export const MOON_SRC = 'assets/physics/y12p-moon-v1.png';
export const V16_PLATES = [STOPWATCH_SRC, BALANCE_SRC, RULE_SRC, GLASSES_SRC, EARTH_SRC, MOON_SRC];

export const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
export const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;
export const fx = (v: number, d = 0) => (Math.abs(v) < 0.5 * 10 ** -d ? 0 : v).toFixed(d).replace('-', '−');
export const txt = (size: number, color: string = INK, weight = 800): React.CSSProperties => ({fontFamily: 'Inter Tight, sans-serif', fontWeight: weight, fontSize: size, fill: color} as React.CSSProperties);

/** Display slow-down for the bung's laps (the real 50 g lap takes 1.27 s). */
export const BUNG_SLOW = 2;
/**
 * The bung's phase at frame f, integrating omega from the hanging mass M(k) frame by frame (so a change of mass
 * changes the turning rate without a jump). Starts at 0 (right-hand edge) at frame `start`.
 */
export const bungPhaseAt = (f: number, M: (k: number) => number, start = 0) => {
	let p = 0;
	for (let k = Math.max(0, start); k < f; k++) p += model(M(k)).w / BUNG_SLOW / 30;
	return p;
};
/** Phase that runs freely, then eases forward to the next right-hand edge and stays there from `stopAt`. */
export const stopAtEdge = (f: number, free: (k: number) => number, stopAt: number, ease = 30) => {
	if (f < stopAt) return free(f);
	const p0 = free(stopAt);
	const target = Math.ceil(p0 / (2 * Math.PI) + 0.25) * 2 * Math.PI;
	const t = Math.min(1, (f - stopAt) / ease);
	return p0 + (target - p0) * (1 - (1 - t) * (1 - t));
};

/** The method banner (top right, navy, solid). */
export const Banner: React.FC<{at?: number; out?: number; pulse?: number; x?: number; y?: number; w?: number}> = ({at = -30, out, pulse, x = 1290, y = 186, w = 534}) => {
	const f = useCurrentFrame();
	const pz = pulse === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulse) / 24)));
	return (
		<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{background: NAVY.soft, border: `${3 + 3 * pz}px solid ${NAVY.stroke}`, borderRadius: 12, padding: '4px 16px 6px', ...DISPLAY(30, NAVY.ink, 700), whiteSpace: 'normal', lineHeight: 1.2}}>Illustration of one common set-up. Follow your school's approved method.</div>
		</Enter>
	);
};

// ---------------------------------------------------------------- bench instruments
/** The stopwatch plate `w` px wide (alpha box) with its top-left alpha corner at (x, y); the painted hand is masked by a dial-coloured disc and replaced by a coded hand and a digital readout. */
export const Stopwatch: React.FC<{x: number; y: number; w: number; t: number; text?: string}> = ({x, y, w, t, text}) => {
	const s = w / (1229 - 137);
	const ox = x - 137 * s, oy = y - 180 * s;
	const px = ox + 687 * s, py = oy + 1059 * s;
	const a = (2 * Math.PI * t) / 60 - Math.PI / 2;
	const R = 380 * s;
	return (
		<g>
			<image href={staticFile(STOPWATCH_SRC)} x={ox} y={oy} width={1367 * s} height={1800 * s} />
			<circle cx={px} cy={py} r={410 * s} fill="rgb(243,238,229)" />
			{Array.from({length: 12}, (_, i) => { const b = (i * Math.PI) / 6; return <line key={i} x1={px + Math.cos(b) * R * 0.88} y1={py + Math.sin(b) * R * 0.88} x2={px + Math.cos(b) * R} y2={py + Math.sin(b) * R} stroke={INK} strokeWidth={3} />; })}
			<line x1={px} y1={py} x2={px + Math.cos(a) * R * 0.85} y2={py + Math.sin(a) * R * 0.85} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<circle cx={px} cy={py} r={7} fill={INK} />
			<text x={px} y={py + R * 0.55} textAnchor="middle" style={{...txt(52, INK), fontVariantNumeric: 'tabular-nums'} as React.CSSProperties}>{text ?? `${fx(t, 1)} s`}</text>
		</g>
	);
};
/** The top-pan balance `w` px wide (alpha box), standing on y = base, left alpha edge at x; coded readout in its window. Returns pan-top y via balancePan. */
export const balanceGeom = (x: number, base: number, w: number) => {
	const s = w / (1274 - 126);
	const ox = x - 126 * s, oy = base - 613 * s;
	return {s, ox, oy, pan: oy + 290 * s, panX: ox + 700 * s, win: [ox + 630 * s, oy + 477 * s] as [number, number]};
};
export const Balance: React.FC<{x: number; base: number; w: number; text: string}> = ({x, base, w, text}) => {
	const g = balanceGeom(x, base, w);
	return (
		<g>
			<image href={staticFile(BALANCE_SRC)} x={g.ox} y={g.oy} width={1400 * g.s} height={900 * g.s} />
			<text x={g.win[0]} y={g.win[1] + 8} textAnchor="middle" style={txt(Math.max(18, 60 * g.s), '#9be08f')}>{text}</text>
		</g>
	);
};
/** The metre rule with its zero end at (x, y), rotated `deg` clockwise, drawn `ppm` px per metre (1 m = 1474 plate px). */
export const MetreRule: React.FC<{x: number; y: number; ppm: number; deg: number}> = ({x, y, ppm, deg}) => {
	const s = ppm / 1474;
	return <g transform={`rotate(${deg} ${x} ${y})`}><image href={staticFile(RULE_SRC)} x={x - 349 * s} y={y - 319 * s} width={2172 * s} height={724 * s} /></g>;
};
export const Glasses: React.FC<{x: number; base: number; w: number; opacity?: number}> = ({x, base, w, opacity = 1}) => {
	const s = w / (1786 - 216);
	return <image href={staticFile(GLASSES_SRC)} x={x - 216 * s} y={base - 1407 * s} width={2000 * s} height={2000 * s} opacity={opacity} />;
};
/** Earth (centre (623, 635), radius 475 in its plate) and Moon (centre (625, 628), radius 473) by centre and diameter. */
export const Earth: React.FC<{cx: number; cy: number; d: number}> = ({cx, cy, d}) => { const s = d / 950; return <image href={staticFile(EARTH_SRC)} x={cx - 623 * s} y={cy - 635 * s} width={1254 * s} height={1254 * s} />; };
export const Moon: React.FC<{cx: number; cy: number; d: number}> = ({cx, cy, d}) => { const s = d / 946; return <image href={staticFile(MOON_SRC)} x={cx - 625 * s} y={cy - 628 * s} width={1254 * s} height={1254 * s} />; };

// ---------------------------------------------------------------- the graph
export type GraphG = {ox: number; oy: number; w: number; h: number; xMax: number; yMax: number};
export const gmap = (g: GraphG, xv: number, yv: number): [number, number] => [g.ox + (xv / g.xMax) * g.w, g.oy - (yv / g.yMax) * g.h];
/** Axes with ticks and titles (coded). */
export const Axes: React.FC<{g: GraphG; xTitle: string; yTitle: string; xStep: number; yStep: number; yDec?: number; size?: number}> = ({g, xTitle, yTitle, xStep, yStep, yDec = 1, size = 30}) => (
	<g>
		<line x1={g.ox} y1={g.oy} x2={g.ox + g.w + 20} y2={g.oy} stroke={INK} strokeWidth={4} />
		<line x1={g.ox} y1={g.oy} x2={g.ox} y2={g.oy - g.h - 20} stroke={INK} strokeWidth={4} />
		{Array.from({length: Math.floor(g.xMax / xStep) + 1}, (_, i) => { const [x] = gmap(g, i * xStep, 0); return <g key={i}><line x1={x} y1={g.oy} x2={x} y2={g.oy + 10} stroke={INK} strokeWidth={3} /><text x={x} y={g.oy + 38} textAnchor="middle" style={txt(Math.max(24, size - 4), INK_SOFT, 700)}>{i * xStep}</text></g>; })}
		{Array.from({length: Math.floor(g.yMax / yStep + 1e-9) + 1}, (_, i) => { const [, y] = gmap(g, 0, i * yStep); return <g key={i}><line x1={g.ox - 10} y1={y} x2={g.ox} y2={y} stroke={INK} strokeWidth={3} /><text x={g.ox - 16} y={y + 9} textAnchor="end" style={txt(Math.max(24, size - 4), INK_SOFT, 700)}>{(i * yStep).toFixed(yDec)}</text></g>; })}
		<text x={g.ox + g.w} y={g.oy + 80} textAnchor="end" style={txt(size, INK)}>{xTitle}</text>
		<text x={g.ox + 14} y={g.oy - g.h - 26} style={txt(size, INK)}>{yTitle}</text>
	</g>
);
/** A straight line through the origin of gradient k, drawn on from `at` (dashed orange prediction or solid navy best line). */
export const OriginLine: React.FC<{g: GraphG; k: number; at?: number; color: string; dash?: string; width?: number; pulse?: number}> = ({g, k, at = -30, color, dash, width = 5, pulse}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 24);
	if (p <= 0) return null;
	const pz = pulse === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulse) / 24)));
	const xEnd = Math.min(g.xMax, g.yMax / k);
	const [x1, y1] = gmap(g, 0, 0), [x2, y2] = gmap(g, xEnd * p, k * xEnd * p);
	return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={width + 4 * pz} strokeDasharray={dash} strokeLinecap="round" />;
};
/** A data point (navy, 14 px) with an optional horizontal error bar of half-width `ex` (graph units), grown by `bar` (0 to 1). */
export const Point: React.FC<{g: GraphG; xv: number; yv: number; at?: number; ex?: number; bar?: number; r?: number}> = ({g, xv, yv, at = -30, ex = 0, bar = 0, r = 7}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	if (p <= 0) return null;
	const [x, y] = gmap(g, xv, yv);
	const drop = (1 - p) * -80;
	const hw = ((ex * bar) / g.xMax) * g.w;
	return (
		<g opacity={p}>
			{bar > 0.01 ? <g><line x1={x - hw} x2={x + hw} y1={y} y2={y} stroke={ERR} strokeWidth={3} /><line x1={x - hw} x2={x - hw} y1={y - 9} y2={y + 9} stroke={ERR} strokeWidth={3} /><line x1={x + hw} x2={x + hw} y1={y - 9} y2={y + 9} stroke={ERR} strokeWidth={3} /></g> : null}
			<circle cx={x} cy={y + drop} r={r} fill={NAVY.stroke} />
		</g>
	);
};
