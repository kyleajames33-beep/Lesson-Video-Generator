// Lesson parts for phys-y12-m6-v12: the two-coil bench (kit gap 1: last time's final frame, both coils level on one
// axis; the primary current is a lesson-coded curve that rises over a short time and falls fast, its field lines drawn
// from the magnetic-field sim and lit where they thread the secondary, the secondary's needle driven by the induction
// engine from the flux that current makes), the soft-iron rod plate, and v11's parts re-exported.
// Colour roles (design, Revision 2): primary current orange; its field slate; the secondary's emf, current and field
// rose; the iron core grey; motion arrows amber; turns navy; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {MagnetField, crossesPlane, magnetLines} from '../../physics/electromagnetism/induction';
import {inductionAt, runInduction} from '../../sims/induction';
import {AMBER, BENCH, CardRect, FIELD1, Givens, Lbl, NAVY, ORANGE, PoleBadge, ROSE, Ring, Shrunk, Strip, T, TC, TwoCoilBench, V11_PLATES, fx, levelCoil, tcLeads} from '../phys-y12-m6-v11/parts';

export {AMBER, BENCH, CardRect, FIELD1, Givens, Lbl, NAVY, ORANGE, PoleBadge, ROSE, Ring, Shrunk, Strip, T, TC, TwoCoilBench, fx, levelCoil, tcLeads};
export const IRON_SRC = 'assets/physics/phys-y11-rod-soft-iron-v1.png';
export const XFMR_SRC = 'assets/physics/y12p-transformer-v1.png';
export const V12_PLATES = [...V11_PLATES, IRON_SRC, XFMR_SRC];
export const LITC = '#2f3d4c';

// ---------------------------------------------------------------- geometry of the final-frame bench
export const P = levelCoil(TC.PRI), S = levelCoil(TC.SEC);
export const AXY = P.left[1];
export const L0 = tcLeads(TC.PRI, TC.SEC, TC.GAL);
export const PIV = L0.g.pivot;
/** The "no contact" bracket under the gap and its label (as last time's final frame). */
export const gapX = (pri = TC.PRI) => { const l = tcLeads(pri, TC.SEC, TC.GAL); return [l.P.right[0] + 30, l.S.left[0] - 30, (l.P.right[1] + l.S.left[1]) / 2] as const; };
export const GapBracket: React.FC<{opacity?: number}> = ({opacity = 1}) => {
	const [g1, g2, gy] = gapX();
	return <path d={`M${g1},${gy + 150} V${gy + 170} H${g2} V${gy + 150}`} fill="none" stroke={NAVY.stroke} strokeWidth={5} opacity={opacity} />;
};

// ---------------------------------------------------------------- the primary current (lesson-coded, author note a)
/** Switch events: [frame, closed, time constant in frames]. The current rises as 1 - e^(-t/τ) and falls as e^(-t/τ). */
export type Ev = readonly [number, boolean, number];
export const primaryI = (f: number, ev: readonly Ev[]) => {
	let I = 0;
	for (let i = 0; i < ev.length; i++) {
		const [at, closed, tau] = ev[i];
		if (f < at) break;
		const end = i + 1 < ev.length ? Math.min(f, ev[i + 1][0]) : f;
		I = closed ? 1 - (1 - I) * Math.exp(-(end - at) / tau) : I * Math.exp(-(end - at) / tau);
	}
	return I;
};
const runs = new Map<string, ReturnType<typeof runInduction>>();
/** The secondary's needle at frame f (+: right), from the induction engine's emf for flux ∝ the primary current. */
export const secNeedle = (id: string, flux: (f: number) => number, frames: number, f: number, k: number) => {
	let run = runs.get(id);
	if (!run) { run = runInduction({source: {kind: 'custom', flux: t => flux(t * 30)}, turns: 1, duration: frames / 30, steps: frames}); runs.set(id, run); }
	return Math.max(-56, Math.min(56, -k * inductionAt(run, f / 30).emf));
};
export const useSecNeedle = (id: string, flux: (f: number) => number, frames: number, k: number) => secNeedle(id, flux, frames, useCurrentFrame(), k);

// ---------------------------------------------------------------- the primary's field (bar-like, traced once)
export const PLEN = Math.round(P.right[0] - P.left[0]);
export const PLINES = magnetLines(PLEN, 9, P.r * 1.6, 2.2);
/** The primary's field lines on the bench (north end towards the secondary), lit where they thread the secondary. */
export const PrimaryField: React.FC<{I: number; dx?: number; opacity?: number; clipTop?: number; id?: string}> = ({I, dx = 0, opacity = 1, clipTop = 160, id = 'v12-pf'}) => {
	const cx = (P.left[0] + P.right[0]) / 2 + dx;
	const a = Math.abs(I) * opacity;
	if (a < 0.01) return null;
	return (
		<g opacity={Math.min(1, a)}>
			<defs><clipPath id={id}><rect x={0} y={clipTop} width={1920} height={BENCH - clipTop} /></clipPath></defs>
			<g clipPath={`url(#${id})`}>
				<MagnetField lines={PLINES} x={cx} y={AXY} color={FIELD1} lit={{planeX: (S.left[0] + S.right[0]) / 2, r: S.r, color: LITC}} width={3} />
				{[-0.5, 0, 0.5].map(o => <line key={o} x1={P.left[0] + dx + 6} y1={AXY + o * P.r} x2={P.right[0] + dx - 6} y2={AXY + o * P.r} stroke={FIELD1} strokeWidth={3} />)}
			</g>
		</g>
	);
};
/** How many of the primary's lines thread the secondary (for the counter), with the primary shifted by dx. */
export const linkedLines = (dx = 0) => PLINES.filter(l => crossesPlane(l, (P.left[0] + P.right[0]) / 2 + dx, (S.left[0] + S.right[0]) / 2, S.r)).length;

// ---------------------------------------------------------------- the soft-iron rod plate
/** The soft-iron rod by its centre and visible length, turned `deg` (uniform scale; visible box 1768 x 130 native). */
export const IronRod: React.FC<{cx: number; cy: number; len: number; deg?: number; opacity?: number}> = ({cx, cy, len, deg = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const s = len / 1768;
	return <g opacity={opacity} transform={deg ? `rotate(${deg} ${cx} ${cy})` : undefined}><image href={staticFile(IRON_SRC)} x={cx - 1086 * s} y={cy - 361 * s} width={2172 * s} height={724 * s} /></g>;
};
/** The painted transformer plate by its visible box (left, top, width; 749 x 634 native visible). */
export const Transformer: React.FC<{x: number; y: number; w: number; opacity?: number}> = ({x, y, w, opacity = 1}) => {
	const s = w / (1098 - 349);
	return <image href={staticFile(XFMR_SRC)} x={x - 349 * s} y={y - 233 * s} width={1448 * s} height={1086 * s} opacity={opacity} />;
};
/** The bench drawn at scale k with its top-left (x 30, y 480 in bench coordinates) at (x, y). */
export const benchT = (x: number, y: number, k: number) => `translate(${x - 30 * k} ${y - 480 * k}) scale(${k})`;
export const benchPt = (x: number, y: number, k: number, p: readonly [number, number]): [number, number] => [x - 30 * k + p[0] * k, y - 480 * k + p[1] * k];
export const phiLabel = (I: number) => `${fx(4.0 * I, 1)} × 10⁻⁵`;
