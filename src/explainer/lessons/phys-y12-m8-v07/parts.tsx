// Lesson parts for phys-y12-m8-v07: the colour roles (design "Colour key (Revision 2)" with root rule R1), the
// Maltese-cross tube with its coded glow, the paddle-wheel cell, the beam runs on the field motion engine, the oil drop
// in a magnified gap, number formats and v06's parts re-exported.
// Colour key: electric field blue (from + to −); magnetic field slate crosses (B into the page); electric force amber;
// magnetic force rose; velocity teal; electrons navy; weight mg purple; charge q and e navy; voltage V and the slider
// red; deflection y and lengths L, d ink brackets; tube glow pale green (fluorescing glass); answers in dark-ink frames;
// mistakes slate (R1).
import React from 'react';
import {staticFile} from 'remotion';
import {LPlate, placeOf} from '../../physics/light/plates';
import {MALTESE, MALTESE_AT, PADDLE_TUBE, PADDLE_TUBE_AT, PADDLE_WHEEL, ELECTRON_PLATES} from '../../physics/atom/electron';
import {BALANCE} from '../../physics/electromagnetism/bench';
import {runMotion} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';
import {AMBER, BLUE, GREEN, GREY, Givens, INK, Lbl, NAVY, NEUTRON, PURPLE, RED, ROSE, Shrunk, Strip, TEAL, V06_PLATES, VIOLET, fx, sci} from '../phys-y12-m8-v06/parts';

export {AMBER, BLUE, GREEN, GREY, Givens, INK, Lbl, NAVY, NEUTRON, PURPLE, RED, ROSE, Shrunk, Strip, TEAL, VIOLET, fx, sci};
export const V07_PLATES = [...new Set([...V06_PLATES, ...ELECTRON_PLATES, BALANCE.src])];
export const GLOW = '#9fe59a', GLOW_EDGE = '#5fbf63';
export const SLATE = GREY;

// ---------------------------------------------------------------- the Maltese-cross tube
type Place = {x: number; y: number; w: number};
/** Screen point of a tube-plate pixel for a placement. */
export const tubeAt = (p: Place, nx: number, ny: number) => placeOf(MALTESE, p).at(nx, ny);
/** The painted Maltese-cross tube with an optional coded glow on its wide end and a dashed axis beam. */
export const MalteseTube: React.FC<{p: Place; glow?: number; beam?: number; opacity?: number}> = ({p, glow = 0, beam = 0, opacity = 1}) => {
	const g = placeOf(MALTESE, p), [gx, gy] = g.at(MALTESE_AT.glow[0], MALTESE_AT.glow[1]), [cx, cy] = g.at(MALTESE_AT.cathode[0], MALTESE_AT.cathode[1]);
	return (
		<g opacity={opacity}>
			<LPlate spec={MALTESE} p={p} />
			{beam > 0.001 ? <g opacity={beam}><line x1={cx + 6} y1={cy} x2={gx - 6} y2={gy} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="10 9" /></g> : null}
			{glow > 0.001 ? <ellipse cx={gx} cy={gy} rx={MALTESE_AT.glowR[0] * g.s} ry={MALTESE_AT.glowR[1] * g.s} fill={GLOW} opacity={0.75 * glow} stroke={GLOW_EDGE} strokeWidth={2} /> : null}
		</g>
	);
};
/** An end-view inset of the glowing end with the cross's sharp shadow (circle at cx, cy, radius r). */
export const EndView: React.FC<{cx: number; cy: number; r: number; shadow?: number; opacity?: number}> = ({cx, cy, r, shadow = 1, opacity = 1}) => {
	const a = r * 0.55, w = r * 0.2;
	const cross = `M${cx - w},${cy - a} L${cx + w},${cy - a} L${cx + w * 0.55},${cy - w * 0.55} L${cx + a},${cy - w} L${cx + a},${cy + w} L${cx + w * 0.55},${cy + w * 0.55} L${cx + w},${cy + a} L${cx - w},${cy + a} L${cx - w * 0.55},${cy + w * 0.55} L${cx - a},${cy + w} L${cx - a},${cy - w} L${cx - w * 0.55},${cy - w * 0.55} Z`;
	return opacity <= 0.001 ? null : (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill={GLOW} stroke={INK} strokeWidth={3} />
			<path d={cross} fill="#5d6b5a" opacity={shadow} />
		</g>
	);
};

// ---------------------------------------------------------------- the paddle-wheel cell
/** The painted paddle-wheel tube with its wheel layer rolling along the upper rail (u from 0 to 1 along the rail). */
export const PaddleCell: React.FC<{p: Place; u: number; wheelR?: number; opacity?: number}> = ({p, u, wheelR = 95, opacity = 1}) => {
	const g = placeOf(PADDLE_TUBE, p);
	const x0 = PADDLE_TUBE_AT.railX0 + wheelR, x1 = PADDLE_TUBE_AT.railX1 - wheelR, hx = x0 + (x1 - x0) * u;
	const [sx, sy] = g.at(hx, PADDLE_TUBE_AT.railY), r = wheelR * g.s;
	const k = r / PADDLE_WHEEL.tip, deg = ((x1 - x0) * u * g.s / r) * (180 / Math.PI);
	return opacity <= 0.001 ? null : (
		<g opacity={opacity}>
			<LPlate spec={PADDLE_TUBE} p={p} />
			<g transform={`translate(${sx} ${sy}) rotate(${deg}) scale(${k}) translate(${-PADDLE_WHEEL.hub[0]} ${-PADDLE_WHEEL.hub[1]})`}>
				<image href={staticFile(PADDLE_WHEEL.src)} x={0} y={0} width={PADDLE_WHEEL.W} height={PADDLE_WHEEL.H} />
			</g>
		</g>
	);
};

// ---------------------------------------------------------------- beams on the field motion engine
/** Electron e/m (C kg⁻¹, design value) and the run of a beam between plates: E down (V m⁻¹), B into the page (T). */
export const QM = 1.76e11;
/** Full Lorentz force on an electron (q = −e), x along the beam, y up: a = (e/m)(B vy, E − B vx); plates 0 ≤ x ≤ L. */
export const beamRun = (o: {v: number; E: number; B: number; L: number; beyond?: number}): MotionPath => runMotion({
	field: {kind: 'custom', accel: (x, _y, vx, vy) => (x >= 0 && x <= o.L ? [QM * o.B * vy, QM * (o.E - o.B * vx)] : [0, 0])},
	start: {x: 0, y: 0, vx: o.v, vy: 0},
	duration: (o.L + (o.beyond ?? 0)) / o.v,
	steps: 900,
});
/** SVG path of a run scaled by k px per metre from (x0, y0), y up on screen. */
export const beamPath = (run: MotionPath, x0: number, y0: number, k: number, upToX = Infinity) => {
	const pts: string[] = [];
	for (let i = 0; i <= run.n; i += 3) { if (run.x[i] > upToX) break; pts.push(`${pts.length ? 'L' : 'M'}${(x0 + run.x[i] * k).toFixed(1)},${(y0 - run.y[i] * k).toFixed(1)}`); }
	return pts.join(' ');
};
/** The vertical position (m) of a run where it crosses x. */
export const yAtX = (run: MotionPath, x: number) => { for (let i = 1; i <= run.n; i++) if (run.x[i] >= x) return run.y[i - 1] + ((run.y[i] - run.y[i - 1]) * (x - run.x[i - 1])) / (run.x[i] - run.x[i - 1] || 1); return run.y[run.n]; };

// ---------------------------------------------------------------- the balance
export const balanceAt = (p: Place) => placeOf(BALANCE, p);
export const BalancePlate: React.FC<{p: Place; text: string; size?: number; opacity?: number}> = ({p, text, size = 30, opacity = 1}) => {
	const g = balanceAt(p), [x0, y0] = g.at(398, 432), [x1, y1] = g.at(862, 524);
	return opacity <= 0.001 ? null : (
		<g opacity={opacity}>
			<LPlate spec={BALANCE} p={p} />
			<rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} rx={5} fill="#e7f0e2" />
			<text x={(x0 + x1) / 2} y={(y0 + y1) / 2 + size * 0.36} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: size, fill: '#1f3a68'}}>{text}</text>
		</g>
	);
};
