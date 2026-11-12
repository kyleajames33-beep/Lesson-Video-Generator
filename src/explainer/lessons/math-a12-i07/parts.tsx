// Lesson parts for math-a12-i07 (Revision 4: the definite integral as a signed sum; a bath filling with the plug
// out), built on the maths studio kit. Lesson-local rigs:
// - BathRig: the painted bath (ma12-bathtub-v1, Codex's measured cut-away interior [331, 325, 1445, 605], spout
//   mouth (463, 281), plug hole (1305, 590)) with coded water to V litres on a coded litre scale (0 to 160 L over the
//   measured 280 px of inner depth), a stream from the spout whose width follows the tap rate, and a drain swirl;
// - FlowGraph: the net flow 12 − 2t on 0 ≤ t ≤ 8 with signed strips or signed area fills (kit RiemannLayer and
//   AreaFillLayer), drawn at one fixed geometry for scenes 1 to 6;
// - BathBoard: tap in, drain out, net flow and water in the bath from one clock.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, INK_SOFT} from '../../kit';
import {CARD, FrameSvg, LiveReadoutBoard, StudioPlot, SvgPlate, fnPath, plateMap, riemannSum, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';

export {AMB, AnswerBox, Attempt, BoxCard, Chip, FramedCard, GREEN, GREY, Line, MiniPlot, PLabel, RED, Tick, V, VIOLET} from '../math-a12-i06/parts';
export {Note, SegRow} from '../math-a12-i01/parts';
export const TEAL_SOFT = '#d6eeee';
export const AMB_SOFT = '#f8e8c8';
export const TEAL_INK = '#13767a';
export const AMB_INK = '#7a4600';
export const Tl: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: TEAL_INK}}>{children}</span>;
export const Am: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: AMB_INK}}>{children}</span>;

// ---------- the models (design: numbers used, Revision 3 anchor values) ----------
export const net = (t: number) => 12 - 2 * t;
export const tap = (t: number) => Math.max(0, 16 - 2 * t);
export const DRAIN = 4;
export const water = (t: number) => 40 + 12 * t - t * t;
{
	const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) < tol;
	const Lr = (n: number) => riemannSum(net, 0, 8, n, 'left'), Rr = (n: number) => riemannSum(net, 0, 8, n, 'right');
	const checks: [string, boolean][] = [
		['bath', [0, 2.5, 6, 7.9].every(t => near(tap(t) - DRAIN, net(t))) && near(water(6), 76) && near(water(8), 72) && near(water(8) - water(0), 32) && near(water(8) - water(7), -3)],
		['sums', near(Lr(16), 36) && near(Lr(64), 33) && near(Lr(256), 32.25) && near(Rr(16), 28) && near(Rr(64), 31) && near(Rr(256), 31.75)],
		['pieces', near(water(6) - water(0), 36) && near(water(8) - water(6), -4) && near(0.5 * 6 * 12, 36) && near(0.5 * 2 * 4, 4)],
		['shapes', near(((3 + 7) / 2) * 2, 10) && near(-4.5 + 4.5, 0) && near(-0.5 * Math.PI * 4, -2 * Math.PI)],
		['attempts', near(3 * (5 + 2) / 2, 10.5) && near(0.5 * 4 * 4 - 0.5 * 2 * 2, 6)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i07 numbers: ' + bad.join(', '));
}

// ---------- the bath (brief 238 plate, Codex's measured anchors) ----------
export const BATH: PlateSpec = {src: 'assets/maths/ma12-bathtub-v1.png', nat: [1774, 887], box: [157, 115, 1589, 800]};
const INNER = {x0: 331, x1: 1445, top: 325, floor: 605};
const SPOUT: [number, number] = [463, 281];
const PLUG: [number, number] = [1305, 590];
/** 160 L to the rim over the measured 280 px of inner depth (1.75 file px per litre). */
const CAP = 160;
export const bathH = (w: number) => (w * (BATH.box[3] - BATH.box[1])) / (BATH.box[2] - BATH.box[0]);

export const BathRig: React.FC<{x: number; y: number; w: number; V: number; tapRate: number; drain?: boolean; ghost?: {V: number; o: number; label?: string}; scale?: boolean; at?: number; out?: number; tag?: {text: string; o: number; color?: string}}> = ({x, y, w, V, tapRate, drain = true, ghost, scale = true, at = -30, out, tag}) => {
	usePlatePreload([BATH.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(BATH, x, y, w);
	const [X0, YT] = m.at(INNER.x0, INNER.top), [X1, YB] = m.at(INNER.x1, INNER.floor);
	const yOf = (L: number) => YB - (YB - YT) * Math.max(0, Math.min(1, L / CAP));
	const surf = yOf(V);
	const [sx, sy] = m.at(SPOUT[0], SPOUT[1]);
	const [px, py] = m.at(PLUG[0], PLUG[1]);
	const sw = tapRate * 1.7 * m.s;
	const ang = (f * 9) % 360;
	return (
		<FrameSvg style={{opacity: o}}>
			<SvgPlate plate={BATH} x={x} y={y} w={w} />
			<rect x={X0 + 2} y={surf} width={X1 - X0 - 4} height={Math.max(0, YB - surf)} fill="#bfe0ee" opacity={0.85} />
			<line x1={X0 + 2} x2={X1 - 2} y1={surf} y2={surf} stroke="#4a8fb0" strokeWidth={4} />
			{sw > 0.6 ? <rect x={sx - sw / 2} y={sy + 6} width={sw} height={Math.max(0, surf - sy - 6)} rx={sw / 2} fill="#9fd2e6" stroke="#4a8fb0" strokeWidth={1.5} opacity={0.95} /> : null}
			{drain ? <g transform={`rotate(${ang} ${px} ${py - 10})`} opacity={0.9}>
				<path d={`M${px - 26},${py - 10} A26,14 0 1,1 ${px + 26},${py - 10}`} fill="none" stroke="#2f6f8f" strokeWidth={4} />
				<path d={`M${px + 14},${py - 10} A14,7 0 1,1 ${px - 14},${py - 10}`} fill="none" stroke="#2f6f8f" strokeWidth={3.5} />
			</g> : null}
			{ghost && ghost.o > 0.001 ? <g opacity={ghost.o}>
				<line x1={X0} x2={X1} y1={yOf(ghost.V)} y2={yOf(ghost.V)} stroke="#b8322a" strokeWidth={5} strokeDasharray="14 10" />
				{ghost.label ? <text x={X0 + 16} y={yOf(ghost.V) + 40} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: '#b8322a'}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{ghost.label}</text> : null}
			</g> : null}
			{scale ? <g>
				{Array.from({length: 9}, (_, i) => i * 20).map(L => <g key={L}>
					<line x1={X1 - 4} x2={X1 - (L % 40 === 0 ? 30 : 18)} y1={yOf(L)} y2={yOf(L)} stroke={INK_SOFT} strokeWidth={3} />
					{L % 40 === 0 ? <text x={X1 - 38} y={yOf(L) + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK_SOFT}} stroke={CARD} strokeWidth={5} paintOrder="stroke">{L}</text> : null}
				</g>)}
				<text x={X1 - 8} y={YT - 12} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK_SOFT}}>litres</text>
			</g> : null}
			{tag && tag.o > 0.001 ? <text x={(X0 + X1) / 2} y={surf - 18} textAnchor="middle" opacity={tag.o} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: tag.color ?? INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{tag.text}</text> : null}
		</FrameSvg>
	);
};

/** tap in, drain out, net flow (violet), water in the bath: one board from the same t. */
export const BathBoard: React.FC<{x: number; y: number; width: number; t: number; at?: number; out?: number; size?: number; rows?: readonly ('tap' | 'drain' | 'net' | 'water' | 'time')[]}> = ({x, y, width, t, at = -30, out, size = 46, rows = ['time', 'tap', 'drain', 'net', 'water']}) => {
	const tt = Math.max(0, Math.min(8, t));
	const all = {
		time: {label: 'time', value: tt, digits: 1, unit: 'min', format: (v: number) => v.toFixed(1)},
		tap: {label: 'tap in', value: tap(tt), digits: 1, unit: 'L/min', format: (v: number) => v.toFixed(1)},
		drain: {label: 'drain out', value: DRAIN, digits: 1, unit: 'L/min', format: (v: number) => v.toFixed(1)},
		net: {label: 'net flow', value: net(tt), digits: 1, unit: 'L/min', role: 'gradient' as const, format: (v: number) => (Math.abs(v) < 0.05 ? '0.0' : v.toFixed(1).replace('-', '−'))},
		water: {label: 'water in the bath', value: water(tt), digits: 1, unit: 'L', format: (v: number) => v.toFixed(1)},
	};
	return <LiveReadoutBoard x={x} y={y} width={width} at={at} out={out} inline size={size} labelSize={30} rows={rows.map(r => all[r])} />;
};

// ---------- the net-flow graph (scenes 1 to 6) ----------
export const FG = {x: 30, y: 140, w: 1050, h: 690};
export const FWIN = {x: [-0.4, 8.6] as [number, number], y: [-5, 13.4] as [number, number]};
export const FlowGraph: React.FC<{at?: number; out?: number; children?: (m: PlotMap) => React.ReactNode; g?: {x: number; y: number; w: number; h: number}; curveOn?: number}> = ({at = -30, out, children, g = FG, curveOn = 1}) => (
	<StudioPlot x={g.x} y={g.y} width={g.w} height={g.h} window={FWIN} xTicks={[2, 4, 6, 8]} yTicks={[-4, 4, 8, 12].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}))} xLabel="time t (min)" yLabel="net flow (L/min)" at={at} out={out}>
		{m => <>
			{children ? children(m) : null}
			<g clipPath={m.clip} opacity={curveOn}><path d={fnPath(m, net, 0, 8)} stroke="#6b4fa0" strokeWidth={7} fill="none" strokeLinecap="round" /></g>
			{[0, 8].map(X => {const p = m.p(X, net(X)); return <circle key={X} cx={p[0]} cy={p[1]} r={11} fill="#6b4fa0" stroke={CARD} strokeWidth={4} opacity={curveOn} />;})}
		</>}
	</StudioPlot>
);

/** A dimension bracket between two frame points, with its label offset by (dx, dy). */
export const Bracket: React.FC<{a: [number, number]; b: [number, number]; text: string; o: number; dx?: number; dy?: number; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end'}> = ({a, b, text, o, dx = 0, dy = 0, color = INK, size = 36, anchor = 'middle'}) => {
	if (o <= 0.001) return null;
	const vert = Math.abs(a[0] - b[0]) < Math.abs(a[1] - b[1]);
	const cap = (p: [number, number]) => vert ? <line x1={p[0] - 12} x2={p[0] + 12} y1={p[1]} y2={p[1]} stroke={color} strokeWidth={4} /> : <line x1={p[0]} x2={p[0]} y1={p[1] - 12} y2={p[1] + 12} stroke={color} strokeWidth={4} />;
	return <g opacity={o}>
		<line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth={4} />{cap(a)}{cap(b)}
		<text x={(a[0] + b[0]) / 2 + dx} y={(a[1] + b[1]) / 2 + dy} textAnchor={anchor} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: color}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{text}</text>
	</g>;
};
export {INK};
