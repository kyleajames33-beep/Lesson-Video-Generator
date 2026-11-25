// Lesson parts for phys-y12-m6-v11: the Lenz bench (kit gap 1: last time's magnet bench with the coil's induced poles
// as rose letters, the rose induced-field arrow along the axis, rose current arrows on the near side of the turns and
// amber force arrows on the magnet), the two-coil bench of the handoff (primary with knife switch and low-voltage
// supply, secondary on the galvanometer; v12 opens on it), and v10's parts re-exported.
// Colour roles (design, Revision 2): external field slate; induced field, current and poles rose; motion arrows and
// forces amber; energy bars: work amber, electrical orange, heat red; step numbers navy; answers in dark-ink frames;
// mistakes slate (root rule R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Lead} from '../../physics/electromagnetism/plates';
import {Galvanometer, KnifeSwitch, LVS, Plate, galvPts, lvsPts, switchPts} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {CoilPlate, FlowDots, coilAxis} from '../../physics/electromagnetism/induction';
import {AMBER, AX, BENCH, Bench, BenchInset, CO, CardRect, FIELD1, GA, GREY, Givens, LIT, Lbl, MAG_W, NAVY, ORANGE, PIVOT, ROSE, Ring, Shrunk, Strip, T, U0, V10_PLATES, arrowTagAt, fx, magCentre, needleFor, useNeedle} from '../phys-y12-m6-v10/parts';

export {AMBER, AX, BENCH, Bench, BenchInset, CO, CardRect, FIELD1, GA, GREY, Givens, LIT, Lbl, MAG_W, NAVY, ORANGE, PIVOT, ROSE, Ring, Shrunk, Strip, T, U0, arrowTagAt, fx, magCentre, needleFor, useNeedle};
export const V11_PLATES = [...V10_PLATES];
export const HEAT = '#c0392b';

/** A rose pole letter in a ring (an induced pole). */
export const PoleBadge: React.FC<{x: number; y: number; pole: 'N' | 'S'; color?: string; r?: number; opacity?: number}> = ({x, y, pole, color = ROSE.stroke, r = 30, opacity = 1}) => opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={CARD} stroke={color} strokeWidth={5} />
		<text x={x} y={y + r * 0.42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 1.25, fill: color}}>{pole}</text>
	</g>
);

/**
 * Lenz overlays on the bench (bench coordinates): the coil's near-end pole (left), far-end pole, the external field
 * through the coil (slate, along the axis), the induced field (rose), the near-side current arrows on the turns, and
 * the force from the coil on the magnet (amber; + towards the coil, − away) for a magnet whose N face is at uN.
 */
export const LenzMarks: React.FC<{uN?: number; near?: 'N' | 'S' | null; ext?: 1 | -1 | 0; induced?: 1 | -1 | 0; current?: 'up' | 'down' | null; force?: number; applied?: number; badgeR?: number; o?: {near?: number; ext?: number; induced?: number; current?: number; force?: number; applied?: number}}> = ({uN = U0, near = null, ext = 0, induced = 0, current = null, force = 0, applied = 0, badgeR = 30, o = {}}) => {
	const L = AX.along(28), R = AX.along(AX.len - 28);
	const up = -AX.r - 52;
	const a = (u: number, dy = 0): [number, number] => { const p = AX.along(u); return [p[0], p[1] + dy]; };
	const mc = magCentre(uN);
	return (
		<g>
			{near ? <><PoleBadge x={L[0]} y={L[1] + up - (badgeR - 30)} pole={near} r={badgeR} opacity={o.near ?? 1} /><PoleBadge x={R[0]} y={R[1] + up - (badgeR - 30)} pole={near === 'N' ? 'S' : 'N'} r={badgeR} opacity={(o.near ?? 1) * 0.999} /></> : null}
			{ext ? <Arrow2 from={a(ext > 0 ? 40 : AX.len - 40, -16)} to={a(ext > 0 ? AX.len - 40 : 40, -16)} color={FIELD1} width={8} head={26} opacity={o.ext ?? 1} /> : null}
			{induced ? <Arrow2 from={a(induced > 0 ? 80 : AX.len - 80, 18)} to={a(induced > 0 ? AX.len - 80 : 80, 18)} color={ROSE.stroke} width={9} head={28} opacity={o.induced ?? 1} /> : null}
			{current ? [90, 190, 290, 390].map(u => { const p = AX.along(u), d = current === 'up' ? -1 : 1; return <Arrow2 key={u} from={[p[0] - 6, p[1] - d * AX.r * 0.75]} to={[p[0] + 6, p[1] + d * AX.r * 0.75]} color={ROSE.stroke} width={6} head={18} opacity={o.current ?? 1} />; }) : null}
			{Math.abs(force) > 0.01 ? <Arrow2 from={[mc[0], mc[1] - 64]} to={[mc[0] + 170 * force, mc[1] - 64 - 19 * force]} color={AMBER.stroke} width={10} head={30} opacity={o.force ?? 1} /> : null}
			{Math.abs(applied) > 0.01 ? <Arrow2 from={[mc[0] - MAG_W / 2 - 170 * applied, mc[1] + 19 * applied]} to={[mc[0] - MAG_W / 2 - 10, mc[1]]} color={AMBER.stroke} width={10} head={30} dash="16 10" opacity={o.applied ?? 1} /> : null}
		</g>
	);
};
export const nearPoleAt = (): [number, number] => { const p = AX.along(28); return [p[0], p[1] - AX.r - 52]; };

// ---------------------------------------------------------------- the two-coil bench (v11's final frame, v12's stage)
export const TC = {
	LVS: {x: 40, y: BENCH - 108.5, w: 270} as Place,
	SW: {x: 330, y: BENCH - 94.5, w: 220} as Place,
	PRI: {x: 570, y: BENCH - 179, w: 440} as Place,
	SEC: {x: 1070, y: BENCH - 179, w: 440} as Place,
	GAL: {x: 1560, y: BENCH - 261, w: 290} as Place,
};
/**
 * A coil plate turned about its left mouth by `level` x 6.4 degrees, so its painted axis lies level: two level coils
 * on the same bench line share one axis (the soft-iron rod passes through both). Returns the turned geometry.
 */
export const levelCoil = (p: Place, level = 1) => {
	const c = coilAxis(p), rot = -AX.deg * level, a = (rot * Math.PI) / 180;
	const turn = (q: readonly [number, number]): [number, number] => { const dx = q[0] - c.left[0], dy = q[1] - c.left[1]; return [c.left[0] + dx * Math.cos(a) - dy * Math.sin(a), c.left[1] + dx * Math.sin(a) + dy * Math.cos(a)]; };
	const right = turn(c.right);
	return {...c, rot, right, a: turn(c.a), b: turn(c.b), along: (u: number): [number, number] => turn(c.along(u)), mid: turn(c.along(c.len / 2))};
};
export const LevelCoil: React.FC<{p: Place; level?: number; opacity?: number}> = ({p, level = 1, opacity = 1}) => {
	const c = coilAxis(p);
	return <g transform={`rotate(${-AX.deg * level} ${c.left[0]} ${c.left[1]})`}><CoilPlate p={p} opacity={opacity} /></g>;
};
/** Lead paths for the two circuits at the given places (primary: supply, switch, coil; secondary: coil, meter). */
export const tcLeads = (pri: Place, sec: Place, gal: Place, level = 1) => {
	const sp = lvsPts(TC.LVS), sw = switchPts(TC.SW), P = levelCoil(pri, level), S = levelCoil(sec, level), g = galvPts(gal);
	return {
		p1: [sp.neg, [sp.neg[0], BENCH + 25], [sw.left[0], BENCH + 25], sw.left] as [number, number][],
		p2: [sw.right, [sw.right[0], BENCH + 25], [P.a[0], BENCH + 25], P.a] as [number, number][],
		p3: [P.b, [P.b[0] + 30, P.b[1]], [P.b[0] + 30, BENCH + 60], [sp.pos[0], BENCH + 60], sp.pos] as [number, number][],
		s1: [S.b, [S.b[0] + 30, S.b[1]], [S.b[0] + 30, BENCH + 25], [g.red[0], BENCH + 25], g.red] as [number, number][],
		s2: [S.a, [S.a[0], BENCH + 50], [g.black[0], BENCH + 50], g.black] as [number, number][],
		P, S, g,
	};
};
/**
 * The two-coil bench: the low-voltage supply and knife switch (blade `open` 0 closed to 1 open) driving the primary
 * coil; the secondary coil on the galvanometer (`needle` degrees). `pri`, `sec`, `gal` default to the final places;
 * `priOpacity` fades the primary circuit; `level` turns both coils level (1) or leaves them as painted (0).
 * Orange charges in the primary and rose in the secondary flow when asked. `under` is drawn behind the coils.
 */
export const TwoCoilBench: React.FC<{pri?: Place; sec?: Place; gal?: Place; priOpacity?: number; open?: number; needle?: number; flowP?: number; phaseP?: number; flowS?: number; phaseS?: number; galvOpacity?: number; level?: number; under?: React.ReactNode; children?: React.ReactNode}> = ({pri = TC.PRI, sec = TC.SEC, gal = TC.GAL, priOpacity = 1, open = 1, needle = 0, flowP = 0, phaseP = 0, flowS = 0, phaseS = 0, galvOpacity = 1, level = 1, under, children}) => {
	const l = tcLeads(pri, sec, gal, level);
	return (
		<g>
			<line x1={30} y1={BENCH} x2={1890} y2={BENCH} stroke={INK} strokeWidth={4} />
			{under}
			<g opacity={priOpacity}>
				<Plate spec={LVS} p={TC.LVS} />
				<Lead pts={l.p1} width={3.5} /><Lead pts={l.p2} width={3.5} /><Lead pts={l.p3} width={3.5} />
				<KnifeSwitch p={TC.SW} open={open} />
				<LevelCoil p={pri} level={level} />
				{flowP > 0.001 ? <g opacity={flowP}>{[l.p3.slice().reverse(), l.p1, l.p2].map((pts, i) => <FlowDots key={i} pts={pts} phase={phaseP} color={ORANGE.stroke} r={7} gap={40} />)}</g> : null}
			</g>
			<LevelCoil p={sec} level={level} />
			<Lead pts={l.s1} width={3.5} /><Lead pts={l.s2} width={3.5} />
			{flowS > 0.001 ? <g opacity={flowS}><FlowDots pts={l.s1} phase={phaseS} color={ROSE.stroke} r={7} gap={40} /><FlowDots pts={l.s2.slice().reverse()} phase={phaseS} color={ROSE.stroke} r={7} gap={40} /></g> : null}
			<Galvanometer p={gal} deg={needle} opacity={galvOpacity} />
			{children}
		</g>
	);
};
export const lerpPlace = (a: Place, b: Place, t: number): Place => ({x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, w: a.w + (b.w - a.w) * t});
/** An energy bar with its label (work amber, electrical orange, heat red; "supplied" ink). */
export const EBar: React.FC<{x: number; base: number; h: number; frac: number; color: string; label: string; w?: number; opacity?: number}> = ({x, base, h, frac, color, label, w = 120, opacity = 1}) => (
	<g opacity={opacity}>
		<rect x={x} y={base - h} width={w} height={h} fill="#f3ece0" stroke="rgba(60,45,20,0.3)" strokeWidth={3} rx={8} />
		<rect x={x} y={base - h * Math.max(0, Math.min(1, frac))} width={w} height={h * Math.max(0, Math.min(1, frac))} fill={color} rx={6} />
		<text x={x + w / 2} y={base + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6} as React.CSSProperties}>{label}</text>
	</g>
);
/** The transform that draws the bench at scale k with its top-left (bench line start, coil top) at (x, y) + 20 px. */
export const insetT = (x: number, y: number, k: number) => `translate(${x + 20 - 120 * k} ${y + 20 - 470 * k}) scale(${k})`;
export const insetPt = (x: number, y: number, k: number, p: readonly [number, number]): [number, number] => [x + 20 - 120 * k + p[0] * k, y + 20 - 470 * k + p[1] * k];
