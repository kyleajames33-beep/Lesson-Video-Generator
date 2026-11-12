// Drawing parts for the beam, collision and chain engines (beam.ts, collisions.ts,
// chain.ts): a beam on a pivot with its forces and distances, two bodies on a track with
// their velocity arrows, before-and-after bars, and a branching chain as a tree and as
// bars. Labels come from the lesson. Sizes and colours come from tokens.ts.
import React from 'react';
import {FONT_DISPLAY, FONT_HAND} from '../kit';
import {CARD, INK, INK_SOFT, TRACK, TYPE, Tone, ToneName, tone} from '../shared/tokens';
import {Beam, solveBeam} from './beam';
import {ChainRun} from './chain';
import {CollisionRun, collisionAt} from './collisions';
import {niceTicks} from './series-views';
import {simNum} from './views';

const text: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.support, fontVariantNumeric: 'tabular-nums'};
const hand: React.CSSProperties = {fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall};
const arrowHead = (x: number, y: number, ux: number, uy: number, size: number) => `${x},${y} ${x - ux * size - uy * size * 0.5},${y - uy * size + ux * size * 0.5} ${x - ux * size + uy * size * 0.5},${y - uy * size - ux * size * 0.5}`;

// -------------------------------------------------------------------------- beam
/**
 * A beam on its pivot, seen from the side. Each force is an arrow at its place on the
 * beam, with its distance from the pivot bracketed underneath. `angle` tilts the beam
 * (radians, anticlockwise positive), for example from `beamAngleAt`.
 */
export const BeamView: React.FC<{
	beam: Beam; x: number; y: number; w: number; h: number;
	/** Metres the beam extends each side of the pivot (default: just past the furthest force). */
	reach?: number;
	angle?: number;
	/** Text beside each force, by its id (for example "30 kg" or "294 N"), and under its distance bracket. */
	labels?: Record<string, {force?: string; distance?: string}>;
	clockwiseTone?: ToneName | Tone; anticlockwiseTone?: ToneName | Tone;
	/** Newtons that draw as the tallest arrow (default: the largest force). */
	forceFull?: number;
	/** Draw a curved arrow over each force showing which way it turns the beam. */
	turning?: boolean;
	opacity?: number;
}> = ({beam, x, y, w, h, reach, angle = 0, labels = {}, clockwiseTone = 'amber', anticlockwiseTone = 'blue', forceFull, turning, opacity = 1}) => {
	const state = solveBeam(beam), far = reach ?? Math.max(0.1, ...beam.forces.map(f => Math.abs(f.at))) * 1.15, k = (w / 2 - 30) / far;
	const cx = w / 2, cy = h * 0.52, full = forceFull ?? Math.max(1e-9, ...beam.forces.map(f => f.force)), arrowMax = h * 0.3;
	const deg = (-angle * 180) / Math.PI;
	return (
		<svg width={w} height={h} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<polygon points={`${cx},${cy + 9} ${cx - 44},${cy + 86} ${cx + 44},${cy + 86}`} fill={CARD} stroke={INK} strokeWidth={5} strokeLinejoin="round" />
			<line x1={cx - 120} x2={cx + 120} y1={cy + 88} y2={cy + 88} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			<g transform={`rotate(${deg} ${cx} ${cy})`}>
				<rect x={cx - far * k} y={cy - 9} width={2 * far * k} height={18} rx={5} fill={TRACK} stroke={INK} strokeWidth={4} />
				{beam.forces.map((f, i) => {
					const tq = state.torques[i], c = tone(tq.sense === 'clockwise' ? clockwiseTone : anticlockwiseTone), fx = cx + f.at * k, up = f.direction === 'up';
					const len = Math.max(46, (f.force / full) * arrowMax), y0 = up ? cy + 12 + len : cy - 12 - len, y1 = up ? cy + 12 : cy - 12, dir = up ? -1 : 1;
					const lab = f.id ? labels[f.id] : undefined, side = f.at >= 0 ? 1 : -1;
					return (
						<g key={i}>
							<line x1={fx} y1={y0} x2={fx} y2={y1 - dir * 14} stroke={c.stroke} strokeWidth={8} strokeLinecap="round" />
							<polygon points={arrowHead(fx, y1, 0, dir, 26)} fill={c.stroke} />
							{lab?.force ? <text x={fx} y={up ? y0 + 40 : y0 - 16} textAnchor="middle" style={text} fill={c.ink}>{lab.force}</text> : null}
							{f.at !== 0 ? <g>
								<path d={`M${cx + side * 4},${cy + 30} V${cy + 44} H${fx} V${cy + 30}`} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeLinejoin="round" />
								{lab?.distance ? <text x={(cx + fx) / 2 + side * 26} y={cy + 80} textAnchor="middle" style={text} fill={INK} stroke={CARD} strokeWidth={7} paintOrder="stroke">{lab.distance}</text> : null}
							</g> : null}
							{turning && tq.sense !== 'none' ? (() => {
								// A quarter-circle arrow above the beam, curling the way this force turns it.
								const r = 46, ay = cy - 30 - len - 64, cw = tq.sense === 'clockwise', a0 = cw ? Math.PI * 1.15 : Math.PI * 1.85, a1 = cw ? Math.PI * 1.85 : Math.PI * 1.15;
								const p0 = [fx + r * Math.cos(a0), ay + r * Math.sin(a0) + r], p1 = [fx + r * Math.cos(a1), ay + r * Math.sin(a1) + r], tx = cw ? -Math.sin(a1) : Math.sin(a1), ty = cw ? Math.cos(a1) : -Math.cos(a1);
								return <g><path d={`M${p0[0]},${p0[1]} A${r},${r} 0 0 ${cw ? 1 : 0} ${p1[0]},${p1[1]}`} fill="none" stroke={c.stroke} strokeWidth={5} strokeLinecap="round" /><polygon points={arrowHead(p1[0] + tx * 8, p1[1] + ty * 8, tx, ty, 20)} fill={c.stroke} /></g>;
							})() : null}
						</g>
					);
				})}
			</g>
			<circle cx={cx} cy={cy} r={9} fill={INK} />
		</svg>
	);
};

// -------------------------------------------------------------------- collisions
/**
 * Two bodies on a straight track at time `t`, with a velocity arrow and its value on each.
 * `world` is the stretch of track shown, in metres.
 */
export const CollisionTrack: React.FC<{
	run: CollisionRun; t: number; x: number; y: number; w: number; h?: number;
	world: readonly [number, number];
	labels?: readonly [string, string];
	tones?: readonly [ToneName | Tone, ToneName | Tone];
	/** Pixels of arrow for each metre per second (default 40). */
	arrowScale?: number;
	unit?: string; opacity?: number;
}> = ({run, t, x, y, w, h = 300, world, labels, tones = ['blue', 'warm'], arrowScale = 40, unit = 'm/s', opacity = 1}) => {
	const s = collisionAt(run, t), c = run.config, k = w / (world[1] - world[0]), X = (wx: number) => (wx - world[0]) * k, floor = h - 70;
	const together = s.hit && Math.abs(s.v1 - s.v2) < 1e-9;
	const body = (cx: number, half: number, v: number, tn: ToneName | Tone, label?: string, arrow = true, shift = 0) => {
		const col = tone(tn === 'ink' ? tones[0] : tn), arrowCol = tone(tn), bw = Math.max(60, 2 * half * k), bh = Math.min(floor - 70, Math.max(70, bw * 0.62)), px = X(cx), top = floor - bh, len = v * arrowScale, dir = Math.sign(v) || 1, ay = top - 44;
		return (
			<g>
				<rect x={px - bw / 2} y={top} width={bw} height={bh} rx={10} fill={col.soft} stroke={col.stroke} strokeWidth={5} />
				{label ? <text x={px} y={top + bh / 2 + 11} textAnchor="middle" style={text} fill={col.ink}>{label}</text> : null}
				{arrow && Math.abs(len) > 6 ? <g><line x1={px + shift} y1={ay} x2={px + shift + len - dir * 12} y2={ay} stroke={arrowCol.stroke} strokeWidth={7} strokeLinecap="round" /><polygon points={arrowHead(px + shift + len, ay, dir, 0, 24)} fill={arrowCol.stroke} /></g> : null}
				{arrow ? <text x={px + shift + (Math.abs(len) > 6 ? len / 2 : 0)} y={ay - 22} textAnchor="middle" style={text} fill={arrowCol.ink} stroke={CARD} strokeWidth={7} paintOrder="stroke">{`${simNum(v, 1)} ${unit}`}</text> : null}
			</g>
		);
	};
	return (
		<svg width={w} height={h} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<line x1={0} x2={w} y1={floor + 3} y2={floor + 3} stroke={INK} strokeWidth={6} strokeLinecap="round" />
			{body(s.x1, c.size1 ?? 0.2, s.v1, together ? 'ink' : tones[0], labels?.[0], true, together ? ((s.x2 - s.x1) * k) / 2 : 0)}
			{body(s.x2, c.size2 ?? 0.2, s.v2, tones[1], labels?.[1], !together)}
		</svg>
	);
};
export type BarRow = {label: string; before: number; after: number; tone?: ToneName | Tone};
/**
 * Before-and-after bars for any signed quantities (the momentum of each body and their
 * total; kinetic energies). Each row has two bars from a shared zero line, so "the total is
 * the same before and after" is seen at a glance.
 */
export const BeforeAfterBars: React.FC<{
	rows: readonly BarRow[]; x: number; y: number; w: number; h: number;
	/** Show the "after" bars this much (0 to 1), so they can grow in at the moment of the collision. */
	after?: number;
	headings?: readonly [string, string]; unit?: string; digits?: number;
	/** Value that fills half the width (default: the largest size in the rows). */
	full?: number; opacity?: number;
}> = ({rows, x, y, w, h, after = 1, headings = ['before', 'after'], unit = '', digits = 1, full, opacity = 1}) => {
	const L = 190, colW = (w - L) / 2, top = Math.max(1e-9, full ?? Math.max(...rows.flatMap(r => [Math.abs(r.before), Math.abs(r.after)]))), rowH = (h - 50) / rows.length, signed = rows.some(r => r.before < 0 || r.after < 0);
	const bar = (col: number, v: number, c: Tone, key: string, show: number) => {
		const x0 = L + col * colW + (signed ? colW / 2 : 16), span = (signed ? colW / 2 : colW - 32) - 96, len = (v / top) * span * show, by = 10;
		return (
			<g key={key} opacity={show > 0 ? 1 : 0}>
				<rect x={Math.min(x0, x0 + len)} y={by} width={Math.abs(len)} height={rowH - 30} rx={6} fill={c.stroke} />
				<line x1={x0} x2={x0} y1={2} y2={rowH - 12} stroke={INK} strokeWidth={3} />
				<text x={x0 + len + (v >= 0 ? 12 : -12)} y={by + (rowH - 30) / 2 + 10} textAnchor={v >= 0 ? 'start' : 'end'} style={text} fill={c.ink}>{`${simNum(v, digits)}${unit ? ' ' + unit : ''}`}</text>
			</g>
		);
	};
	return (
		<svg width={w} height={h} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			{headings.map((hd, i) => <text key={i} x={L + i * colW + colW / 2} y={30} textAnchor="middle" style={{...text, fontWeight: 700}} fill={INK_SOFT}>{hd}</text>)}
			{rows.map((r, i) => {
				const c = tone(r.tone ?? 'teal');
				return (
					<g key={i} transform={`translate(0,${50 + i * rowH})`}>
						<line x1={0} x2={w} y1={-4} y2={-4} stroke={TRACK} strokeWidth={2} />
						<text x={0} y={rowH / 2 + 4} style={text} fill={c.ink}>{r.label}</text>
						{bar(0, r.before, c, 'b', 1)}{bar(1, r.after, c, 'a', after)}
					</g>
				);
			})}
		</svg>
	);
};

// ------------------------------------------------------------------------- chain
/**
 * The early generations of a chain as a tree: one row of dots per generation, each joined
 * to the event that caused it. `now` is how many generations to show (it may be a
 * fraction: the newest row fades in).
 */
export const ChainTreeView: React.FC<{
	run: ChainRun; x: number; y: number; w: number; h: number; now?: number;
	/** Show at most this many generations (default: all that were followed event by event). */
	generations?: number;
	tone?: ToneName | Tone; rowLabel?: (generation: number, events: number) => string; opacity?: number;
}> = ({run, x, y, w, h, now, generations, tone: dotTone = 'warm', rowLabel, opacity = 1}) => {
	const rows = Math.min(generations ?? run.treeGenerations, run.treeGenerations), shown = Math.min(rows, now ?? rows), c = tone(dotTone), labelW = rowLabel ? 250 : 0;
	const rowH = rows > 1 ? (h - 40) / (rows - 1) : 0, widest = Math.max(1, ...run.events.slice(0, rows)), r = Math.max(5, Math.min(16, ((w - labelW) / widest) * 0.36));
	const px = (g: number, i: number) => labelW + ((i + 0.5) / run.events[g]) * (w - labelW), py = (g: number) => 20 + g * rowH;
	const fade = (g: number) => Math.min(1, Math.max(0, shown - g));
	return (
		<svg width={w} height={h} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			{run.tree.filter(n => n.generation > 0 && n.generation < rows && fade(n.generation) > 0).map((n, i) => <line key={`l${i}`} x1={px(n.generation - 1, n.parent)} y1={py(n.generation - 1)} x2={px(n.generation, n.index)} y2={py(n.generation)} stroke={c.stroke} strokeWidth={2.5} opacity={0.55 * fade(n.generation)} />)}
			{run.tree.filter(n => n.generation < rows && fade(n.generation) > 0).map((n, i) => <circle key={`n${i}`} cx={px(n.generation, n.index)} cy={py(n.generation)} r={r} fill={c.stroke} stroke={CARD} strokeWidth={2} opacity={fade(n.generation)} />)}
			{rowLabel ? Array.from({length: rows}, (_, g) => <text key={g} x={0} y={py(g) + 11} style={text} fill={INK} opacity={fade(g)}>{rowLabel(g + 1, run.events[g])}</text>) : null}
		</svg>
	);
};
/** Events in each generation as bars, with the average rule's prediction as a tick on each bar. `now` is how many generations to show. */
export const ChainBars: React.FC<{
	run: ChainRun; x: number; y: number; w: number; h: number; now?: number;
	tone?: ToneName | Tone; xLabel?: string; yMax?: number;
	/** Mark the prediction start x k x k ... on each bar (default true). */
	expected?: boolean; expectedLabel?: string; opacity?: number;
}> = ({run, x, y, w, h, now, tone: barTone = 'warm', xLabel, yMax, expected = true, expectedLabel, opacity = 1}) => {
	const n = run.events.length, shown = Math.min(n, now ?? n), c = tone(barTone), L = 120, B = xLabel ? 96 : 56, T = 50, pw = w - L - 20, ph = h - B - T;
	const top = yMax ?? Math.max(1, ...run.events, ...(expected ? run.expected.slice(0, n) : [])) * 1.1, slot = pw / n, bw = slot * 0.68, every = Math.ceil(n / 12);
	const tall = (v: number) => (Math.min(v, top) / top) * ph;
	return (
		<svg width={w} height={h} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<rect x={L} y={T} width={pw} height={ph} fill={CARD} opacity={0.75} />
			{run.events.map((v, i) => {
				const o = Math.min(1, Math.max(0, shown - i)), bx = L + i * slot + (slot - bw) / 2;
				if (o <= 0) return null;
				return (
					<g key={i} opacity={o}>
						<rect x={bx} y={T + ph - tall(v)} width={bw} height={tall(v)} rx={4} fill={c.stroke} />
						{expected ? <line x1={bx - 5} x2={bx + bw + 5} y1={T + ph - tall(run.expected[i])} y2={T + ph - tall(run.expected[i])} stroke={INK} strokeWidth={4} strokeLinecap="round" /> : null}
						{n <= 12 ? <text x={bx + bw / 2} y={T + ph - tall(Math.max(v, expected ? run.expected[i] : 0)) - 12} textAnchor="middle" style={text} fill={c.ink}>{v}</text> : null}
					</g>
				);
			})}
			<path d={`M${L},${T} V${T + ph} H${L + pw}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			{niceTicks(0, top, 4).map(v => <g key={v}><line x1={L - 10} x2={L} y1={T + ph - tall(v)} y2={T + ph - tall(v)} stroke={INK} strokeWidth={3} /><text x={L - 18} y={T + ph - tall(v) + 10} textAnchor="end" style={text} fill={INK}>{v}</text></g>)}
			{run.events.map((_, i) => (i % every === 0 ? <text key={i} x={L + i * slot + slot / 2} y={T + ph + 40} textAnchor="middle" style={text} fill={INK}>{i + 1}</text> : null))}
			{xLabel ? <text x={L + pw / 2} y={h - 6} textAnchor="middle" style={{...text, fontWeight: 700}} fill={INK_SOFT}>{xLabel}</text> : null}
			{expected && expectedLabel ? <g><line x1={L + 12} x2={L + 52} y1={22} y2={22} stroke={INK} strokeWidth={4} strokeLinecap="round" /><text x={L + 64} y={33} style={hand} fill={INK}>{expectedLabel}</text></g> : null}
		</svg>
	);
};
