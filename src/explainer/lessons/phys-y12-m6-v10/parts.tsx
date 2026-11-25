// Lesson parts for phys-y12-m6-v10: the magnet bench (kit gap 1: last time's painted bench, with the bar magnet lifted
// onto the coil's axis and pushed along it by a coded amber motion arrow; the needle layer of the galvanometer driven by
// the induction engine from the magnet's position), the cutaway coil with the magnet's traced field lines, and v09's
// parts re-exported.
// Colour roles (design, Revision 2): field and flux slate; motion arrows amber; induced emf and current rose; N and turn
// counters navy; time ink; areas navy; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Lead} from '../../physics/electromagnetism/plates';
import {BLOCK, Galvanometer, Plate, galvPts} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {COIL_SPREAD, CoilPlate, FlowDots, MagnetAt, coilAxis} from '../../physics/electromagnetism/induction';
import {inductionAt, runInduction} from '../../sims/induction';
import {ROSE} from '../phys-y12-m6-v07/parts';
import {AMBER, CardRect, FIELD1, GREY, Givens, LIT, Lbl, NAVY, ORANGE, Ring, Shrunk, Strip, T, fx, sci, V09_PLATES} from '../phys-y12-m6-v09/parts';

export {AMBER, CardRect, FIELD1, GREY, Givens, LIT, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, fx, sci};
export const V10_PLATES = [...V09_PLATES, COIL_SPREAD.src];

// ---------------------------------------------------------------- the bench (last time's layout, so the join is exact)
export const BENCH = 790;
export const CO: Place = {x: 600, y: 579, w: 520}, GA: Place = {x: 1290, y: 493, w: 330};
export const MAG_W = 380;
export const AX = coilAxis(CO);
/** The magnet's N face at axis distance uN from the coil's left mouth (negative: outside, to the left). Start: v09's place. */
export const U0 = -117;
export const magCentre = (uN: number) => AX.along(uN - MAG_W / 2);
const galv = galvPts({...GA, y: GA.y});
/** The bench's lead paths (coil terminals to the meter), as in last time's final frame. */
export const LEAD1: [number, number][] = [AX.a, [AX.a[0], BENCH + 50], [galv.red[0], BENCH + 50], galv.red];
export const LEAD2: [number, number][] = [AX.b, [AX.b[0] + 60, AX.b[1]], [AX.b[0] + 60, BENCH + 30], [galv.black[0], BENCH + 30], galv.black];
export const PIVOT = galv.pivot;

/**
 * The painted bench: bench line, (block), the bar magnet (north end facing the coil, drawn behind the coil so it
 * slides into the bore), the coil, the coded leads and the galvanometer with its needle at `needle` degrees.
 * `lift` 0 keeps the magnet where last time's frame left it (level, on the block); 1 puts it on the coil's axis.
 */
export const SPREAD_AT: Place = {x: 600, y: 579, w: 577};
const SP = coilAxis(SPREAD_AT, 'spread');
const mix = (a: [number, number], b: [number, number], t: number): [number, number] => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
export const Bench: React.FC<{uN?: number; needle?: number; lift?: number; block?: number; magnet?: number; arrow?: number; arrowDir?: 1 | -1; flow?: number; flowPhase?: number; gap?: number; swap?: number; letters?: boolean; children?: React.ReactNode}> = ({uN = U0, needle = 0, lift = 1, block = 0, magnet = 1, arrow = 0, arrowDir = 1, flow = 0, flowPhase = 0, gap = 0, swap = 1, letters = true, children}) => {
	const c = magCentre(uN);
	const flat: [number, number] = [310 + (uN - U0), 719.1];
	const cx = flat[0] + (c[0] - flat[0]) * lift, cy = flat[1] + (c[1] - flat[1]) * lift;
	const a1 = AX.along(uN - MAG_W / 2 - 110), a2 = AX.along(uN - MAG_W / 2 + 110);
	const up = 74;
	const sx = LEAD2[2][0] + (LEAD2[3][0] - LEAD2[2][0]) * 0.4, sy = LEAD2[2][1], ga = (34 * gap * Math.PI) / 180;
	const ta = mix(SP.a, AX.a, swap), tb = mix(SP.b, AX.b, swap);
	const L1: [number, number][] = [ta, [ta[0], LEAD1[1][1]], LEAD1[2], LEAD1[3]];
	const L2: [number, number][] = [tb, [tb[0] + 60, tb[1]], [tb[0] + 60, LEAD2[2][1]], LEAD2[3], LEAD2[4]];
	const l2 = gap > 0.001 ? L2.slice(0, 3).concat([[sx, sy] as [number, number]]) : L2;
	const l2b: [number, number][] = [[sx + 80 - 80 * Math.cos(ga), sy - 80 * Math.sin(ga)], [sx + 80, sy], LEAD2[3], LEAD2[4]];
	return (
		<g>
			<line x1={60} y1={BENCH} x2={1860} y2={BENCH} stroke={INK} strokeWidth={4} />
			{block > 0.001 ? <Plate spec={BLOCK} p={{x: 140, y: BENCH - 40, w: 340}} opacity={block} /> : null}
			<MagnetAt cx={cx} cy={cy} w={MAG_W} deg={AX.deg * lift} northRight opacity={magnet} letterSize={36} letters={letters} />
			{swap < 0.999 ? <CoilPlate p={SPREAD_AT} kind="spread" opacity={1 - swap} /> : null}
			<CoilPlate p={CO} opacity={swap} />
			<Lead pts={L1} width={3.5} />
			<Lead pts={l2} width={3.5} />
			{gap > 0.001 ? <Lead pts={l2b} width={3.5} /> : null}
			{flow > 0.001 ? <g opacity={flow}><FlowDots pts={LEAD1} phase={flowPhase} color={ROSE.stroke} r={8} /><FlowDots pts={[...LEAD2].reverse()} phase={flowPhase} color={ROSE.stroke} r={8} /></g> : null}
			<Galvanometer p={GA} deg={needle} />
			{arrow > 0.001 ? <Arrow2 from={arrowDir > 0 ? [a1[0], a1[1] - up] : [a2[0], a2[1] - up]} to={arrowDir > 0 ? [a2[0], a2[1] - up] : [a1[0], a1[1] - up]} color={AMBER.stroke} width={9} head={28} opacity={arrow} /> : null}
			{children}
		</g>
	);
};
/** Where the motion arrow sits for a magnet at uN (for its hand tag). */
export const arrowTagAt = (uN: number): [number, number] => { const p = AX.along(uN - MAG_W / 2); return [p[0] - 60, p[1] - 120]; };

// ---------------------------------------------------------------- the needle, from the induction engine
// Flux through the coil as the north face enters (a smooth step centred 110 px inside the mouth; illustrative,
// author note a): the engine takes Faraday's law of it, and the needle turns in proportion (centre zero, +/-58 deg).
const fluxOf = (uN: number) => 1 / (1 + Math.exp(-(uN - 110) / 45));
const runs = new Map<string, ReturnType<typeof runInduction>>();
/**
 * The needle angle at frame f for a magnet whose N face follows the keyframes `keys` ([frame, uN]); frames inside
 * `quiet` windows (a magnet put back by hand-free reset) read zero. `k` sets degrees per unit emf.
 */
export const needleFor = (id: string, keys: readonly (readonly [number, number])[], frames: number, f: number, k: number, quiet: readonly (readonly [number, number])[] = []) => {
	let run = runs.get(id);
	if (!run) {
		run = runInduction({source: {kind: 'custom', flux: t => fluxOf(kf(t * 30, keys))}, turns: 1, duration: frames / 30, steps: frames});
		runs.set(id, run);
	}
	if (quiet.some(([a, b]) => f >= a && f <= b)) return 0;
	return Math.max(-58, Math.min(58, -k * inductionAt(run, f / 30).emf));
};
/** A live needle hook for a scene. */
export const useNeedle = (id: string, keys: readonly (readonly [number, number])[], frames: number, k: number, quiet: readonly (readonly [number, number])[] = []) => needleFor(id, keys, frames, useCurrentFrame(), k, quiet);

/** A small copy of the bench (an inset), drawn at scale k with its top-left at (x, y). */
export const BenchInset: React.FC<{x: number; y: number; k: number; uN?: number; needle?: number; card?: boolean; opacity?: number; arrow?: number; flow?: number; flowPhase?: number; gap?: number}> = ({x, y, k, uN = U0, needle = 0, card = true, opacity = 1, arrow = 0, flow = 0, flowPhase = 0, gap = 0}) => (
	<g opacity={opacity}>
		{card ? <CardRect x={x} y={y} w={1700 * k + 40} h={420 * k + 40} /> : null}
		<g transform={`translate(${x + 20 - 120 * k} ${y + 20 - 470 * k}) scale(${k})`}>
			<Bench uN={uN} needle={needle} arrow={arrow} flow={flow} flowPhase={flowPhase} gap={gap} letters={k >= 0.6} />
		</g>
	</g>
);
export const fmtV = (v: number, d = 1) => `${fx(v, d)} V`;
