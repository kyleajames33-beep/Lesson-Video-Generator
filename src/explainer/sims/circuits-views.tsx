// Drawing part for the circuit engine (circuits.ts): a circuit diagram in standard symbols
// with charges moving along every wire. The charges are evenly spaced and move at a speed
// set by the current, so "current is charge passing each second" is what the eye sees.
// Lamps glow by their power and meters show their readings, all read from the same run.
// Sizes and colours come from src/explainer/shared/tokens.ts.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY} from '../kit';
import {CARD, INK, TONES, TYPE, Tone, ToneName, rgba, tone} from '../shared/tokens';
import {CircuitRun, Part, chargeMoved, circuitAt, partsAt} from './circuits';
import {simNum} from './views';

export type CircuitClock = {/** Scene frame at which the circuit's own frame count starts. */ at?: number};
/** Currents, voltages, powers and the parts as they are at the current scene frame. Use one clock for the drawing and the readouts. */
export const useCircuit = (run: CircuitRun, clock: CircuitClock = {}) => {
	const frame = Math.max(0, useCurrentFrame() - (clock.at ?? 0));
	return {frame, state: circuitAt(run, frame), parts: partsAt(run, frame)};
};

/** Where the grid sits in the frame: grid point (0, 0) is at (x, y) and each grid step is `cell` px. */
export type CircuitStage = {x: number; y: number; cell: number};
/**
 * The route of each part on the grid, as corner points from its `from` end to its `to` end.
 * The symbol is drawn in the middle of the longest straight stretch; the rest is wire.
 */
export type CircuitLayout = Record<string, readonly (readonly [number, number])[]>;
export type CircuitLabel = {text: string; tone?: ToneName | Tone; /** Which side of the part: 1 or -1 (default -1: above a part drawn left to right). */ side?: 1 | -1};

const HALF: Record<Part['kind'], number> = {battery: 14, resistor: 54, lamp: 32, switch: 42, ammeter: 34, voltmeter: 34, wire: 0};
type Route = {pts: [number, number][]; cum: number[]; length: number; mid: number; ux: number; uy: number; mx: number; my: number};
const routeOf = (corners: readonly (readonly [number, number])[], s: CircuitStage): Route => {
	const pts = corners.map(([gx, gy]) => [s.x + gx * s.cell, s.y + gy * s.cell] as [number, number]);
	const cum = [0];
	let best = 0, bestLen = -1;
	for (let i = 1; i < pts.length; i++) {
		const len = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
		cum.push(cum[i - 1] + len);
		if (len > bestLen + 1e-6) { bestLen = len; best = i; }
	}
	const [ax, ay] = pts[best - 1] ?? pts[0], [bx, by] = pts[best] ?? pts[0], len = Math.max(1e-9, bestLen);
	return {pts, cum, length: cum[cum.length - 1], mid: (cum[best - 1] ?? 0) + bestLen / 2, ux: (bx - ax) / len, uy: (by - ay) / len, mx: (ax + bx) / 2, my: (ay + by) / 2};
};
const pointAt = (r: Route, s: number): [number, number] => {
	const d = Math.min(r.length, Math.max(0, s));
	let i = 1;
	while (i < r.pts.length - 1 && r.cum[i] < d) i++;
	const span = Math.max(1e-9, r.cum[i] - r.cum[i - 1]), u = (d - r.cum[i - 1]) / span;
	return [r.pts[i - 1][0] + (r.pts[i][0] - r.pts[i - 1][0]) * u, r.pts[i - 1][1] + (r.pts[i][1] - r.pts[i - 1][1]) * u];
};
const slice = (r: Route, s0: number, s1: number) => {
	if (s1 - s0 < 0.5) return '';
	const out = [pointAt(r, s0)];
	for (let i = 1; i < r.pts.length - 1; i++) if (r.cum[i] > s0 && r.cum[i] < s1) out.push(r.pts[i]);
	out.push(pointAt(r, s1));
	return out.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(' ');
};
const mix = (a: string, b: string, u: number) => { const p = parseInt(a.slice(1), 16), q = parseInt(b.slice(1), 16); const ch = (sh: number) => Math.round(((p >> sh) & 255) + (((q >> sh) & 255) - ((p >> sh) & 255)) * u); return `rgb(${ch(16)},${ch(8)},${ch(0)})`; };

/**
 * The circuit diagram. Give every part in the run a route in `layout`.
 * Charges: evenly spaced dots on every wire, moving in the direction of conventional
 * current (or the opposite way with `carriers="electrons"`), at `speed` px per frame for
 * each ampere. Where the current is zero the charges are still there; they just do not move.
 */
export const CircuitView: React.FC<{
	run: CircuitRun; layout: CircuitLayout; stage: CircuitStage; clock?: CircuitClock;
	carriers?: 'conventional' | 'electrons' | 'none';
	speed?: number; gap?: number; chargeTone?: ToneName | Tone;
	/** Names, values or readings written beside parts. Meters show their own reading unless given a label here. */
	labels?: Record<string, CircuitLabel>;
	/** Colour each wire by its potential, from cool at 0 V to warm at `max` volts. */
	potential?: {max: number};
	/** Grid points where three or more wires meet, drawn as solid dots. */
	junctions?: readonly (readonly [number, number])[];
	/** Power in watts at which a lamp is drawn fully bright (default: the brightest lamp at any time in the run). */
	lampFull?: number;
	opacity?: number;
}> = ({run, layout, stage, clock, carriers = 'conventional', speed = 2.5, gap = 44, chargeTone, labels = {}, potential, junctions = [], lampFull, opacity = 1}) => {
	const {frame, state, parts} = useCircuit(run, clock);
	const full = lampFull ?? Math.max(1e-9, ...run.phases.flatMap(ph => ph.parts.filter(p => p.kind === 'lamp').map(p => ph.state.power[p.id])));
	const ct = tone(chargeTone ?? (carriers === 'electrons' ? 'blue' : 'amber'));
	const wireColour = (node: string) => (potential ? mix(TONES.cool.stroke, TONES.warm.stroke, Math.min(1, Math.max(0, state.voltage[node] / potential.max))) : INK);
	const wires: React.ReactNode[] = [], dots: React.ReactNode[] = [], symbols: React.ReactNode[] = [];
	const text: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.support, fontVariantNumeric: 'tabular-nums'};
	for (const p of parts) {
		const corners = layout[p.id];
		if (!corners || corners.length < 2) throw new Error(`CircuitView: the layout has no route for "${p.id}"`);
		const r = routeOf(corners, stage), half = HALF[p.kind];
		const a = slice(r, 0, r.mid - half), b = slice(r, r.mid + half, r.length);
		if (p.kind === 'wire') wires.push(<polyline key={p.id} points={slice(r, 0, r.length)} fill="none" stroke={wireColour(p.from)} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />);
		else wires.push(<g key={p.id} fill="none" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">{a ? <polyline points={a} stroke={wireColour(p.from)} /> : null}{b ? <polyline points={b} stroke={wireColour(p.to)} /> : null}</g>);
		if (carriers !== 'none' && p.kind !== 'voltmeter') {
			const n = Math.max(1, Math.round(r.length / gap)), g = r.length / n;
			const shift = chargeMoved(run, p.id, frame) * speed * (g / gap) * (carriers === 'electrons' ? -1 : 1);
			for (let k = 0; k < n; k++) {
				const s = (((k * g + shift) % r.length) + r.length) % r.length;
				if (half > 0 && Math.abs(s - r.mid) < half + 8) continue;
				const [px, py] = pointAt(r, s);
				dots.push(<circle key={`${p.id}-${k}`} cx={px} cy={py} r={7.5} fill={ct.stroke} stroke={CARD} strokeWidth={2} />);
			}
		}
		// Symbol, drawn in its own axes: `along` runs from the `from` end to the `to` end, `across` is at right angles.
		const P = (along: number, across: number): [number, number] => [r.mx + r.ux * along - r.uy * across, r.my + r.uy * along + r.ux * across];
		const line = (x0: number, y0: number, x1: number, y1: number, width = 5, key?: string) => { const [p0, p1] = [P(x0, y0), P(x1, y1)]; return <line key={key} x1={p0[0]} y1={p0[1]} x2={p1[0]} y2={p1[1]} stroke={INK} strokeWidth={width} strokeLinecap="round" />; };
		const given = labels[p.id], side = given?.side ?? -1;
		const letter = (s: string) => <text x={r.mx} y={r.my + 11} textAnchor="middle" style={{...text, fontSize: TYPE.support}} fill={INK}>{s}</text>;
		let reach = 34;
		if (p.kind === 'resistor') {
			symbols.push(<polygon key={p.id} points={[P(-52, -19), P(52, -19), P(52, 19), P(-52, 19)].map(q => q.join(',')).join(' ')} fill={CARD} stroke={INK} strokeWidth={5} strokeLinejoin="round" />);
		} else if (p.kind === 'lamp') {
			const bright = Math.min(1, Math.max(0, state.power[p.id] / full)), d = 30 * Math.SQRT1_2;
			symbols.push(<g key={p.id}>{bright > 0.01 ? <circle cx={r.mx} cy={r.my} r={34 + 30 * bright} fill={rgba(TONES.amber.stroke, 0.3 * bright)} /> : null}<circle cx={r.mx} cy={r.my} r={30} fill={CARD} stroke={INK} strokeWidth={5} /><circle cx={r.mx} cy={r.my} r={27} fill={rgba(TONES.amber.stroke, 0.85 * bright)} />{line(-d, -d, d, d, 4)}{line(-d, d, d, -d, 4)}</g>);
			reach = 52;
		} else if (p.kind === 'battery') {
			const plus = P(34, -side * 34), minus = P(-34, -side * 34);
			symbols.push(<g key={p.id}>{line(-9, -18, -9, 18, 10)}{line(9, -36, 9, 36, 5)}<text x={plus[0]} y={plus[1] + 10} textAnchor="middle" style={text} fill={INK}>+</text><text x={minus[0]} y={minus[1] + 10} textAnchor="middle" style={text} fill={INK}>−</text></g>);
			reach = 48;
		} else if (p.kind === 'switch') {
			const open = p.closed === false, e0 = P(-36, 0), e1 = P(36, 0);
			symbols.push(<g key={p.id}>{open ? line(-36, 0, 28, -side * 34) : line(-36, 0, 36, 0)}<circle cx={e0[0]} cy={e0[1]} r={8} fill={CARD} stroke={INK} strokeWidth={4} /><circle cx={e1[0]} cy={e1[1]} r={8} fill={CARD} stroke={INK} strokeWidth={4} /></g>);
			reach = 30;
		} else if (p.kind === 'ammeter' || p.kind === 'voltmeter') {
			symbols.push(<g key={p.id}><circle cx={r.mx} cy={r.my} r={32} fill={CARD} stroke={INK} strokeWidth={5} />{letter(p.kind === 'ammeter' ? 'A' : 'V')}</g>);
			reach = 46;
		}
		const label: CircuitLabel | undefined = given ?? (p.kind === 'ammeter' ? {text: `${simNum(Math.abs(state.current[p.id]), 2)} A`} : p.kind === 'voltmeter' ? {text: `${simNum(Math.abs(state.drop[p.id]), 1)} V`} : undefined);
		if (label && p.kind !== 'wire') {
			const [lx, ly] = P(0, side * (reach + 22)), nx = -r.uy * side, sideways = Math.abs(nx) > 0.5;
			symbols.push(<text key={`${p.id}-label`} x={lx + (sideways ? Math.sign(nx) * -10 : 0)} y={ly + 11} textAnchor={sideways ? (nx > 0 ? 'start' : 'end') : 'middle'} style={text} fill={label.tone ? tone(label.tone).ink : INK} stroke={CARD} strokeWidth={7} paintOrder="stroke">{label.text}</text>);
		}
	}
	return (
		<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', opacity}}>
			{wires}
			{dots}
			{junctions.map(([gx, gy], i) => <circle key={i} cx={stage.x + gx * stage.cell} cy={stage.y + gy * stage.cell} r={10} fill={INK} />)}
			{symbols}
		</svg>
	);
};
