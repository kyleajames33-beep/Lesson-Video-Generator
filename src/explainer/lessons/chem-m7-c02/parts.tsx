// M7 C02 board pieces, on top of the C01 molecule kit (../chem-m7-c01/molecules): the atom tally card (the formula held
// constant, a tick for each member that matches), the what-changed card (skeleton, position, group; the changed row
// lights violet and names the isomer type), coded thermometers and gas wisps for the hook, and the skeletal molecules
// of this lesson in local coordinates (drawn with SkelAt at any place and scale; O labels in red-brown).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {DrawPath, INK, INK_SOFT, Sx, mw, smooth} from '../chem-m6-c01/parts';
import {BRANCH, CARDC, HGREY, MULTI, OXY_INK, Skel, TickMark, V2, VIOLET, VIOLET_SOFT, outward, ringBonds, ringPts, zig} from '../chem-m7-c01/molecules';
import type {Bond} from '../chem-m7-c01/molecules';

export const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- skeletal molecules (local coordinates, centred near the origin) ----------
export type Mol2 = {pts: V2[]; bonds: Bond[]; labels?: {i: number; text: string}[]};
const DX = 110, DY = 64;
const chain = (n: number, extra: Bond[] = []): Bond[] => [...Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1})), ...extra];
const zz = (n: number) => zig(n, (-(n - 1) * DX) / 2, 0, DX, DY);
const withBranch = (n: number, on: number[]): Mol2 => {
	const Z = zz(n);
	const pts = [...Z];
	const bonds = chain(n);
	on.forEach(i => { pts.push(outward(Z, i, DX)); bonds.push({a: i, b: pts.length - 1, color: BRANCH}); });
	return {pts, bonds};
};
const dbl = (n: number, at: number): Mol2 => ({pts: zz(n), bonds: chain(n).map((b, k) => (k === at ? {...b, order: 2 as const, color: MULTI} : b))});
export const M = {
	butane: {pts: zz(4), bonds: chain(4)} as Mol2,
	methylpropane: withBranch(3, [1]),
	but1ene: dbl(4, 0),
	but2ene: dbl(4, 1),
	propan1ol: {pts: zz(4), bonds: chain(4), labels: [{i: 3, text: 'OH'}]} as Mol2,
	propan2ol: (() => { const m = withBranch(3, [1]); return {...m, bonds: m.bonds.map(b => ({...b, color: undefined})), labels: [{i: 3, text: 'OH'}]}; })() as Mol2,
	cyclobutane: {pts: ringPts(4, 0, 0, 80, -Math.PI / 4), bonds: ringBonds(4)} as Mol2,
	pentane: {pts: zz(5), bonds: chain(5)} as Mol2,
	methylbutane: withBranch(4, [1]),
	dimethylpropane: {pts: [[-DX, 0], [0, 0], [DX, 0], [0, -DX], [0, DX]], bonds: [{a: 0, b: 1}, {a: 1, b: 2}, {a: 1, b: 3, color: BRANCH}, {a: 1, b: 4, color: BRANCH}]} as Mol2,
	pent1ene: dbl(5, 0),
	pent2ene: dbl(5, 1),
	cyclopentane: {pts: ringPts(5, 0, 6, 82), bonds: ringBonds(5)} as Mol2,
	ethanol: {pts: zig(3, -90, 0, 90, 52), bonds: chain(3), labels: [{i: 2, text: 'OH'}]} as Mol2,
	methoxymethane: {pts: zig(3, -90, 0, 90, 52), bonds: chain(3), labels: [{i: 1, text: 'O'}]} as Mol2,
};
/** Plain-ink copy of a molecule (questions: no colours). */
export const plain = (m: Mol2): Mol2 => ({...m, bonds: m.bonds.map(b => ({...b, color: undefined}))});
export const at2 = (m: Mol2, x: number, y: number, s = 1): V2[] => m.pts.map(p => [x + p[0] * s, y + p[1] * s]);
/** A Mol2 drawn at (x, y) and scale s; O labels sit on their points (OH reads with the O centred on the point). */
export const SkelAt: React.FC<{m: Mol2; x: number; y: number; s?: number; at: number; out?: number; o?: number; width?: number; stagger?: number; pts?: V2[]; color?: string}> = ({m, x, y, s = 1, at, out, o = 1, width = 6, stagger = 4, pts, color}) => {
	const f = useCurrentFrame();
	const P = pts ?? at2(m, x, y, s);
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const ls = 40 * Math.max(0.7, s);
	return (
		<g opacity={v}>
			<Skel pts={P} bonds={m.bonds} at={at} stagger={stagger} width={width} color={color} />
			{(m.labels ?? []).map((l, k) => {
				const p = P[l.i];
				const w0 = mw('O', ls, false, 800), w = mw(l.text, ls, false, 800);
				return (
					<g key={k} opacity={prog(f, at + m.bonds.length * stagger, 10)}>
						<rect x={p[0] - w0 / 2 - 6} y={p[1] - ls * 0.6} width={w + 12} height={ls * 1.2} rx={ls * 0.4} fill={CARDC} />
						<Sx x={p[0] - w0 / 2} y={p[1] + ls * 0.36} text={l.text} size={ls} color={OXY_INK} weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- atom tally card ----------
/** The formula held constant: a card centred at x with ticks landing left and right (one per matching member). */
export const Tally: React.FC<{x: number; y: number; text: string; at: number; out?: number; ticks?: number[]; o?: number; size?: number; caption?: string}> = ({x, y, text, at, out, ticks = [], o = 1, size = 40, caption = 'atom count'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const w = mw(text, size, false, 800) + 56, h = size * 1.7;
	const drop = (1 - smooth(prog(f, at, 16))) * -30;
	return (
		<g opacity={v} transform={`translate(0,${drop})`}>
			<rect x={x - w / 2} y={y} width={w} height={h} rx={16} fill={CARDC} stroke={INK} strokeWidth={3.5} />
			<Sx x={x} y={y + h / 2 + size * 0.36} text={text} size={size} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={x} y={y - 12} text={caption} size={22} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
			{ticks.map((t, i) => <TickMark key={i} x={i % 2 ? x + w / 2 + 34 : x - w / 2 - 44} y={y + h / 2 + 4} at={t} />)}
		</g>
	);
};

// ---------- what-changed card ----------
export type WRow = {v?: string; at?: number; lit?: number; grey?: boolean};
const ROWS = ['skeleton', 'position', 'group'];
export const WC = {x: 1430, y: 250, w: 410};
/** Three rows (skeleton, position, group) with same / different values; the changed row lights violet at `lit`.
 *  label: the isomer type written under the card. pulse: rows that pulse (scene 8). */
export const WhatChanged: React.FC<{at: number; out?: number; rows?: WRow[]; label?: {text: string; at: number}; pulse?: {row: number; at: number}[]; o?: number; x?: number; y?: number}> = ({at, out, rows = [], label, pulse = [], o = 1, x = WC.x, y = WC.y}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const w = WC.w, rh = 78, h = 74 + 3 * rh + 10;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARDC} stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
			<Sx x={x + 24} y={y + 50} text="what changed?" size={34} color={INK} hand at={-1000} />
			{ROWS.map((r, i) => {
				const row = rows[i] ?? {};
				const ry = y + 70 + i * rh;
				const lit = row.lit !== undefined ? prog(f, row.lit, 10) : 0;
				const pl = Math.max(0, ...pulse.filter(p => p.row === i).map(p => Math.sin(Math.min(1, Math.max(0, (f - p.at) / 24)) * Math.PI)));
				return (
					<g key={r}>
						{lit + pl > 0.01 ? <rect x={x + 10} y={ry + 4} width={w - 20} height={rh - 8} rx={12} fill={VIOLET_SOFT} stroke={VIOLET} strokeWidth={3} opacity={Math.min(1, lit + pl)} /> : null}
						<Sx x={x + 28} y={ry + rh / 2 + 11} text={r} size={30} color={lit > 0.5 ? VIOLET : INK} weight={700} at={-1000} />
						{row.v ? <Sx x={x + w - 28} y={ry + rh / 2 + 11} text={row.v} size={30} color={row.grey ? HGREY : lit > 0.5 ? VIOLET : INK} anchor="end" hand at={row.at ?? at} /> : <line x1={x + w - 90} x2={x + w - 40} y1={ry + rh / 2} y2={ry + rh / 2} stroke={HGREY} strokeWidth={3} />}
					</g>
				);
			})}
			{label ? (
				<g opacity={prog(f, label.at, 10)}>
					<rect x={x} y={y + h + 18} width={w} height={64} rx={32} fill={VIOLET} />
					<Sx x={x + w / 2} y={y + h + 61} text={label.text} size={Math.min(32, (w - 36) / mw(label.text, 1, false, 800))} color="#fffdf8" anchor="middle" weight={800} at={-1000} />
				</g>
			) : null}
		</g>
	);
};

// ---------- hook: thermometer and gas wisps ----------
/** A coded thermometer (tube + bulb): the red column moves from `from` to `to` (fractions of the tube) at `at`. */
export const Therm: React.FC<{x: number; y: number; h: number; from: number; to: number; at: number; dur?: number; o?: number; zero?: number}> = ({x, y, h, from, to, at, dur = 30, o = 1, zero}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const lv = lerp(from, to, smooth(prog(f, at, dur)));
	const tw = 24, br = 24;
	const top = y, bot = y + h;
	return (
		<g opacity={o}>
			<rect x={x - tw / 2} y={top} width={tw} height={h} rx={tw / 2} fill="#fbfaf6" stroke={INK} strokeWidth={3} />
			<rect x={x - 6} y={bot - h * lv} width={12} height={h * lv + 4} fill="#c4432f" />
			<circle cx={x} cy={bot + br - 6} r={br} fill="#c4432f" stroke={INK} strokeWidth={3} />
			{Array.from({length: 6}, (_, i) => <line key={i} x1={x + tw / 2} x2={x + tw / 2 + 10} y1={top + 20 + i * (h - 40) / 5} y2={top + 20 + i * (h - 40) / 5} stroke={INK_SOFT} strokeWidth={2} />)}
			{zero !== undefined ? <g><line x1={x - tw / 2 - 14} x2={x + tw / 2 + 14} y1={bot - h * zero} y2={bot - h * zero} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="5 4" /><Sx x={x - tw / 2 - 20} y={bot - h * zero + 8} text="0 °C" size={22} color={INK_SOFT} anchor="end" weight={600} at={-1000} /></g> : null}
		</g>
	);
};
/** Faint coded gas wisps rising from a point (a gas escaping the nozzle). */
export const Wisps: React.FC<{x: number; y: number; at: number; out?: number; o?: number}> = ({x, y, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 16) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{[0, 1, 2, 3].map(k => {
				const ph = (((f - at) * 0.9 + k * 24) % 96) / 96;
				const yy = y - 10 - ph * 150, xx = x + (k - 1.5) * 14 + Math.sin(ph * 6 + k) * 16;
				return <path key={k} d={`M${xx},${yy} c10,-12 -10,-24 0,-36 c10,-12 -10,-24 0,-36`} fill="none" stroke="#9fb3c4" strokeWidth={5} strokeLinecap="round" opacity={0.75 * Math.sin(ph * Math.PI)} />;
			})}
		</g>
	);
};
/** Small coded test tube outline (no plate; scene 7's "a test tells them apart: later"). */
export const TubeOutline: React.FC<{x: number; y: number; h?: number}> = ({x, y, h = 120}) => (
	<g>
		<path d={`M${x - 16},${y} L${x - 16},${y + h - 16} A16,16 0 0 0 ${x + 16},${y + h - 16} L${x + 16},${y}`} fill="none" stroke={INK_SOFT} strokeWidth={3} />
		<rect x={x - 13} y={y + h * 0.5} width={26} height={h * 0.5 - 16} fill="#e9e3d6" opacity={0.8} />
		<line x1={x - 22} x2={x + 22} y1={y} y2={y} stroke={INK_SOFT} strokeWidth={3} />
	</g>
);
export {DrawPath, INK};
