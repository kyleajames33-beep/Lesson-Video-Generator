// Drawing part for the circuit engine (circuits.ts): a circuit diagram in standard symbols
// with charges moving along every wire. The charges are evenly spaced and move at a speed
// set by the current, so "current is charge passing each second" is what the eye sees.
// Lamps glow by their power and meters show their readings, all read from the same run.
// Sizes and colours come from src/explainer/shared/tokens.ts.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY} from '../kit';
import {CARD, INK, TONES, TYPE, Tone, ToneName, rgba, tone} from '../shared/tokens';
import {CircuitRun, CircuitState, Part, chargeMoved, circuitAt, partsAt, secondary} from './circuits';
import {SeriesGraph, SeriesLine, SeriesMark} from './series-views';
import {simNum} from './views';

/** Frames a switch lever takes to swing open or shut after its change. */
export const SWITCH_SWING = 8;
/**
 * How closed a switch is drawn at circuit frame `frame`: 0 open, 1 closed, in between while
 * the lever swings for SWITCH_SWING frames after the frame at which it changed. (The current
 * itself changes at that frame; the swing is only the drawing.)
 */
export const switchClosure = (run: CircuitRun, id: string, frame: number) => {
	let closed = true, flip = -Infinity, before = true;
	for (const ph of run.phases) {
		if (ph.from > frame) break;
		const part = ph.parts.find(q => q.id === id), now = part?.closed !== false;
		if (ph.from === 0) { closed = before = now; continue; }
		if (now !== closed) { before = closed; closed = now; flip = ph.from; }
	}
	const u = Math.min(1, Math.max(0, (frame - flip) / SWITCH_SWING)), eased = u * u * (3 - 2 * u);
	if (!Number.isFinite(flip)) return closed ? 1 : 0;
	return closed ? (before ? 1 : eased) : (before ? 1 - eased : 0);
};

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
 * A transformer called "t" needs two routes: "t" for its primary winding and "t:2" for its
 * secondary (from `from2` to `to2`). Draw them as two parallel stretches side by side.
 */
export type CircuitLayout = Record<string, readonly (readonly [number, number])[]>;
export type CircuitLabel = {text: string; tone?: ToneName | Tone; /** Which side of the part: 1 or -1 (default -1: above a part drawn left to right). */ side?: 1 | -1};

const HALF: Record<Part['kind'], number> = {battery: 14, resistor: 54, lamp: 32, switch: 42, ammeter: 34, voltmeter: 34, wire: 0, motor: 34, rheostat: 54, coil: 58, ac: 34, transformer: 60};
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
	/** Names, values or readings written beside parts (wires too). Meters show their own reading unless given a label here. */
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
		if (p.present === false) continue;
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
		// A transformer's labels always sit on the outer side of each winding, away from the core.
		let outer: 1 | -1 | undefined;
		if (p.kind === 'transformer') {
			const corners2 = layout[secondary(p.id)];
			if (!corners2 || corners2.length < 2) throw new Error(`CircuitView: the layout has no route for "${secondary(p.id)}" (the transformer's secondary winding)`);
			const r2 = routeOf(corners2, stage), a2 = slice(r2, 0, r2.mid - half), b2 = slice(r2, r2.mid + half, r2.length);
			wires.push(<g key={`${p.id}-2`} fill="none" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">{a2 ? <polyline points={a2} stroke={wireColour(p.from2!)} /> : null}{b2 ? <polyline points={b2} stroke={wireColour(p.to2!)} /> : null}</g>);
			if (carriers !== 'none') {
				const n2 = Math.max(1, Math.round(r2.length / gap)), g2 = r2.length / n2, shift2 = chargeMoved(run, secondary(p.id), frame) * speed * (g2 / gap) * (carriers === 'electrons' ? -1 : 1);
				for (let k = 0; k < n2; k++) {
					const s = (((k * g2 + shift2) % r2.length) + r2.length) % r2.length;
					if (Math.abs(s - r2.mid) < half + 8) continue;
					const [px, py] = pointAt(r2, s);
					dots.push(<circle key={`${p.id}-2-${k}`} cx={px} cy={py} r={7.5} fill={ct.stroke} stroke={CARD} strokeWidth={2} />);
				}
			}
			// Each winding is a row of loops bulging towards the other; two lines between them stand for the iron core.
			const winding = (r0: Route, tx: number, ty: number, loops: number) => {
				const towards = Math.sign(-r0.uy * (tx - r0.mx) + r0.ux * (ty - r0.my)) || 1, w = 116 / loops;
				let d = '';
				for (let k = 0; k < loops; k++) for (let i = 0; i <= 12; i++) {
					const th = Math.PI - (Math.PI * i) / 12, along = -58 + w * (k + 0.5) + (w / 2) * Math.cos(th), across = towards * 20 * Math.sin(th);
					d += `${d ? 'L' : 'M'}${(r0.mx + r0.ux * along - r0.uy * across).toFixed(1)},${(r0.my + r0.uy * along + r0.ux * across).toFixed(1)} `;
				}
				return <path d={d} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />;
			};
			const [n1, n2t] = p.turns ?? [1, 1], many = n1 >= n2t ? [5, 3] : [3, 5], even = n1 === n2t ? [4, 4] : many;
			const cx = (r.mx + r2.mx) / 2, cy = (r.my + r2.my) / 2, ox = (r2.mx - r.mx) * 0.07, oy = (r2.my - r.my) * 0.07;
			outer = (-r.uy * (r2.mx - r.mx) + r.ux * (r2.my - r.my)) > 0 ? -1 : 1;
			const second = labels[secondary(p.id)];
			if (second) {
				const away = (-r2.uy * (r.mx - r2.mx) + r2.ux * (r.my - r2.my)) > 0 ? -1 : 1, lx = r2.mx - r2.uy * away * 52, ly = r2.my + r2.ux * away * 52, nx = -r2.uy * away, sideways = Math.abs(nx) > 0.5;
				symbols.push(<text key={`${p.id}-label2`} x={lx + (sideways ? Math.sign(nx) * -10 : 0)} y={ly + 11} textAnchor={sideways ? (nx > 0 ? 'start' : 'end') : 'middle'} style={text} fill={second.tone ? tone(second.tone).ink : INK} stroke={CARD} strokeWidth={7} paintOrder="stroke">{second.text}</text>);
			}
			symbols.push(<g key={p.id}>
				{winding(r, r2.mx, r2.my, even[0])}{winding(r2, r.mx, r.my, even[1])}
				{[-1, 1].map(sgn => <line key={sgn} x1={cx + sgn * ox - r.ux * 64} y1={cy + sgn * oy - r.uy * 64} x2={cx + sgn * ox + r.ux * 64} y2={cy + sgn * oy + r.uy * 64} stroke={INK} strokeWidth={5} strokeLinecap="round" />)}
			</g>);
		}
		// Symbol, drawn in its own axes: `along` runs from the `from` end to the `to` end, `across` is at right angles.
		const P = (along: number, across: number): [number, number] => [r.mx + r.ux * along - r.uy * across, r.my + r.uy * along + r.ux * across];
		const line = (x0: number, y0: number, x1: number, y1: number, width = 5, key?: string) => { const [p0, p1] = [P(x0, y0), P(x1, y1)]; return <line key={key} x1={p0[0]} y1={p0[1]} x2={p1[0]} y2={p1[1]} stroke={INK} strokeWidth={width} strokeLinecap="round" />; };
		const given = labels[p.id], side = outer ?? given?.side ?? -1;
		const letter = (s: string) => <text x={r.mx} y={r.my + 11} textAnchor="middle" style={{...text, fontSize: TYPE.support}} fill={INK}>{s}</text>;
		let reach = 34;
		if (p.kind === 'resistor' || p.kind === 'rheostat') {
			const box = <polygon key={p.id} points={[P(-52, -19), P(52, -19), P(52, 19), P(-52, 19)].map(q => q.join(',')).join(' ')} fill={CARD} stroke={INK} strokeWidth={5} strokeLinejoin="round" />;
			if (p.kind === 'resistor') symbols.push(box);
			else {
				// Variable resistor: the rectangle with an arrow drawn diagonally through it.
				const tip = P(46, side * 40), back = P(-46, -side * 40), ang = Math.atan2(tip[1] - back[1], tip[0] - back[0]);
				const wing = (da: number) => [tip[0] - 22 * Math.cos(ang + da), tip[1] - 22 * Math.sin(ang + da)].join(',');
				symbols.push(<g key={p.id}>{box}<line x1={back[0]} y1={back[1]} x2={tip[0]} y2={tip[1]} stroke={INK} strokeWidth={5} strokeLinecap="round" /><polygon points={`${tip.join(',')} ${wing(0.42)} ${wing(-0.42)}`} fill={INK} stroke={INK} strokeWidth={2} strokeLinejoin="round" /></g>);
				reach = 50;
			}
		} else if (p.kind === 'motor') {
			symbols.push(<g key={p.id}><circle cx={r.mx} cy={r.my} r={32} fill={CARD} stroke={INK} strokeWidth={5} />{letter('M')}</g>);
			reach = 46;
		} else if (p.kind === 'coil') {
			// Coil: four loops along the wire, on the side away from its label.
			let d = '';
			for (let k = 0; k < 4; k++) for (let i = 0; i <= 12; i++) {
				const th = Math.PI - (Math.PI * i) / 12, [qx, qy] = P(-43.5 + 29 * k + 14.5 * Math.cos(th), -side * 22 * Math.sin(th));
				d += `${d ? 'L' : 'M'}${qx.toFixed(1)},${qy.toFixed(1)} `;
			}
			const [s0x, s0y] = P(-58, 0), [e0x, e0y] = P(58, 0);
			symbols.push(<path key={p.id} d={`M${s0x},${s0y} ${d.replace(/^M/, 'L')} L${e0x},${e0y}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />);
			reach = 30;
		} else if (p.kind === 'lamp') {
			const bright = Math.min(1, Math.max(0, state.power[p.id] / full)), d = 30 * Math.SQRT1_2;
			symbols.push(<g key={p.id}>{bright > 0.01 ? <circle cx={r.mx} cy={r.my} r={34 + 30 * bright} fill={rgba(TONES.amber.stroke, 0.3 * bright)} /> : null}<circle cx={r.mx} cy={r.my} r={30} fill={CARD} stroke={INK} strokeWidth={5} /><circle cx={r.mx} cy={r.my} r={27} fill={rgba(TONES.amber.stroke, 0.85 * bright)} />{line(-d, -d, d, d, 4)}{line(-d, d, d, -d, 4)}</g>);
			reach = 52;
		} else if (p.kind === 'ac') {
			// Alternating source: a circle with one wave inside it (always level, whichever way the wire runs).
			let d = '';
			for (let i = 0; i <= 24; i++) { const qx = r.mx - 20 + (40 * i) / 24, qy = r.my - 11 * Math.sin((2 * Math.PI * i) / 24); d += `${i ? 'L' : 'M'}${qx.toFixed(1)},${qy.toFixed(1)} `; }
			symbols.push(<g key={p.id}><circle cx={r.mx} cy={r.my} r={32} fill={CARD} stroke={INK} strokeWidth={5} /><path d={d} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /></g>);
			reach = 46;
		} else if (p.kind === 'battery') {
			const plus = P(34, -side * 34), minus = P(-34, -side * 34);
			symbols.push(<g key={p.id}>{line(-9, -18, -9, 18, 10)}{line(9, -36, 9, 36, 5)}<text x={plus[0]} y={plus[1] + 10} textAnchor="middle" style={text} fill={INK}>+</text><text x={minus[0]} y={minus[1] + 10} textAnchor="middle" style={text} fill={INK}>−</text></g>);
			reach = 48;
		} else if (p.kind === 'switch') {
			// The lever is hinged at the first terminal. Open, it is angled up away from the second
			// terminal; closed, it lies flat across both. It swings between the two over SWITCH_SWING frames.
			const shut = switchClosure(run, p.id, frame), angle = (1 - shut) * 0.56;
			const e0 = P(-36, 0), e1 = P(36, 0), tip = P(-36 + 80 * Math.cos(angle), -side * 80 * Math.sin(angle));
			symbols.push(<g key={p.id}>
				<line x1={e0[0]} y1={e0[1]} x2={tip[0]} y2={tip[1]} stroke={INK} strokeWidth={6} strokeLinecap="round" />
				<circle cx={e0[0]} cy={e0[1]} r={9} fill={CARD} stroke={INK} strokeWidth={4} />
				<circle cx={e1[0]} cy={e1[1]} r={9} fill={CARD} stroke={INK} strokeWidth={4} />
			</g>);
			reach = 34 + 30 * (1 - shut);
		} else if (p.kind === 'ammeter' || p.kind === 'voltmeter') {
			symbols.push(<g key={p.id}><circle cx={r.mx} cy={r.my} r={32} fill={CARD} stroke={INK} strokeWidth={5} />{letter(p.kind === 'ammeter' ? 'A' : 'V')}</g>);
			reach = 46;
		}
		const label: CircuitLabel | undefined = given ?? (p.kind === 'ammeter' ? {text: `${simNum(Math.abs(state.current[p.id]), 2)} A`} : p.kind === 'voltmeter' ? {text: `${simNum(Math.abs(state.drop[p.id]), 1)} V`} : undefined);
		if (p.kind === 'wire') reach = 8;
		if (p.kind === 'transformer') reach = 30;
		if (label) {
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

export type CircuitTrace = {
	/** The part to follow. */
	id: string;
	/** What to plot (default 'current'). `drop` is the voltage across the part; `terminal` a battery's terminal voltage. */
	quantity?: 'current' | 'drop' | 'power' | 'terminal' | 'speed';
	label?: string; tone?: ToneName | Tone;
	/** Plot the value with its sign (an alternating current swings above and below zero). Default: its size. */
	signed?: boolean;
};
const traceValue = (state: CircuitState, t: CircuitTrace) => {
	const q = t.quantity ?? 'current';
	const v = q === 'current' ? state.current[t.id] : q === 'drop' ? state.drop[t.id] : q === 'power' ? state.power[t.id] : q === 'speed' ? state.speed?.[t.id] : state.terminal[t.id];
	return t.signed ? v ?? 0 : Math.abs(v ?? 0);
};
/**
 * A strip chart of current (or voltage or power) against time for chosen parts, drawing
 * itself as the circuit's clock runs. A switch closing shows as a sudden step, a rheostat
 * being turned as a smooth slope. `span` is the stretch of circuit frames the time axis
 * covers; the axis is labelled in seconds at `fps`.
 */
export const CircuitTimeGraph: React.FC<{
	run: CircuitRun; traces: readonly CircuitTrace[]; clock?: CircuitClock;
	x: number; y: number; w: number; h: number;
	span: number; fps?: number;
	yMax?: number; xLabel?: string; yLabel?: string;
	/** Dashed guides at chosen values, such as the current before a change. */
	marks?: readonly SeriesMark[];
	format?: (v: number) => string;
	opacity?: number;
}> = ({run, traces, clock, x, y, w, h, span, fps = 30, yMax, xLabel = 'time (s)', yLabel = 'current (A)', marks, format, opacity}) => {
	const frame = Math.max(0, useCurrentFrame() - (clock?.at ?? 0));
	const step = Math.max(1, Math.floor(span / 300)), samples = new Set<number>();
	for (let f = 0; f <= span; f += step) samples.add(f);
	samples.add(span);
	// Changes are sudden: sample just before each one so the step is drawn upright. (A circuit solved every frame has no steps to mark.)
	if (run.phases.length < span) for (const ph of run.phases) if (ph.from > 0 && ph.from <= span) { samples.add(ph.from); samples.add(ph.from - 1e-3); }
	const frames = [...samples].sort((a, b) => a - b);
	const lines: SeriesLine[] = traces.map((tr, i) => ({
		t: Float64Array.from(frames, f => f / fps),
		v: Float64Array.from(frames, f => traceValue(circuitAt(run, Math.floor(f + 1e-9)), tr)),
		tone: tr.tone ?? (['amber', 'blue', 'green', 'violet'] as const)[i % 4], label: tr.label,
	}));
	const top = yMax ?? Math.max(1e-9, ...lines.flatMap(l => Array.from(l.v, Math.abs))) * 1.2, low = traces.some(tr => tr.signed) ? -top : 0;
	return <SeriesGraph lines={lines} x={x} y={y} w={w} h={h} xRange={[0, span / fps]} yRange={[low, top]} now={Math.min(span, frame) / fps} marks={marks} xLabel={xLabel} yLabel={yLabel} format={format} opacity={opacity} />;
};
