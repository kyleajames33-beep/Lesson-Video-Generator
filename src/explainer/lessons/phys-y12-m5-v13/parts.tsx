// Lesson parts for phys-y12-m5-v13: the conical pendulum stage (kit road-cone.tsx: retort stand, boss and
// steel ball plates, coded string, dashed circle in perspective), a lap integrator so speed changes never
// jump the ball, the force close-up on the ball plate, the top-view inset, the digital timer plate used as the
// lap clock, and the answer-free exam picture for the attempt cards. One force scale and the v11 colour key:
// tension and weight amber, vertical part blue, inward (horizontal) part teal, acceleration violet, givens navy.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {CARD, CARD_SHADOW, INK, INK_SOFT} from '../../shared/tokens';
import {BallSvg, Bench, DISPLAY, ROLE, VecArrow} from '../../physics/projectile/board';
import {ConeRig, coneGeom} from '../../physics/circular/road-cone';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {Ring} from '../phys-y12-m5-v03/parts';

export {Lbl, Ring};
export const AMBER = ROLE.w;
export const TIMER_SRC = 'assets/physics/y11p-digital-timer-v1.png';
const rad = (d: number) => (d * Math.PI) / 180;

/** The pendulum stage of last time's final frame. */
export const PEND = {pivot: [760, 330] as [number, number], benchY: 900, L: 420, tiltK: 0.3};

/**
 * Ball phase (radians, 0 = right-hand extreme) at frame f, integrating the lap time so a speed change never
 * makes the ball jump. `laps` is a monotonic keyframe list of [frame, framesPerLap]; `stop` freezes the ball at
 * the right-hand extreme from that frame (the ball eases to the next extreme, never backwards).
 */
export const phaseAt = (f: number, laps: readonly (readonly [number, number])[], start = 0) => {
	if (f <= start) return 0;
	let p = 0;
	for (let k = start; k < f; k++) {
		let lap = laps[0][1];
		for (const [t, v] of laps) if (k >= t) lap = v;
		p += (2 * Math.PI) / lap;
	}
	return p;
};
/** Phase that runs freely, then eases to the next right-hand extreme and stays there from `stopAt`. */
export const stopPhase = (f: number, free: (k: number) => number, stopAt: number, ease = 24) => {
	if (f < stopAt) return free(f);
	const p0 = free(stopAt);
	const target = Math.ceil(p0 / (2 * Math.PI) + 0.25) * 2 * Math.PI;
	const t = Math.min(1, (f - stopAt) / ease);
	const e = 1 - (1 - t) * (1 - t);
	return p0 + (target - p0) * e;
};

/** The full pendulum on the bench: plates, string at `theta`, the dashed circle in perspective and the dashed vertical. */
export const PendStage: React.FC<{theta: number; phase: number; tiltK?: number; cone?: boolean; coneInk?: number; vertical?: boolean; bench?: boolean; pivot?: [number, number]; L?: number; benchY?: number; ballD?: number; solid?: number}> = ({theta, phase, tiltK = PEND.tiltK, cone = true, coneInk = 0, vertical = true, bench = true, pivot = PEND.pivot, L = PEND.L, benchY = PEND.benchY, ballD = 50, solid = 0}) => {
	const {r, c} = coneGeom(pivot, L, theta, tiltK, phase);
	return (
		<g>
			{bench ? <Bench edgeX={1250} topY={benchY} left={96} floorY={4000} legs={false} /> : null}
			{solid > 0 ? <path d={`M${pivot[0]},${pivot[1]} L${c[0] - r},${c[1]} A ${r} ${r * tiltK} 0 0 0 ${c[0] + r},${c[1]} Z`} fill={ROLE.given.soft} opacity={solid} /> : null}
			{vertical ? <line x1={pivot[0]} x2={pivot[0]} y1={pivot[1]} y2={c[1] + 24} stroke={INK} strokeWidth={2} strokeDasharray="8 7" /> : null}
			<ConeRig pivot={pivot} benchY={benchY} L={L} theta={theta} tiltK={tiltK} phase={phase} cone={cone} ballD={ballD} />
			{coneInk > 0 ? <path d={`M${c[0] - r},${c[1]} L${pivot[0]},${pivot[1]} L${c[0] + r},${c[1]}`} fill="none" stroke={INK} strokeWidth={4} opacity={coneInk} /> : null}
		</g>
	);
};

/** Unit vectors for the bob at the right-hand extreme: along the string (to the pivot), up, in (towards the centre). */
export const dirs = (theta: number) => ({str: [-Math.sin(rad(theta)), -Math.cos(rad(theta))] as [number, number]});

/**
 * The force close-up: the steel ball plate large at (x, y) at the right-hand extreme, the string running up to
 * the left at `theta`, a dashed line in to the centre (to the left), and the forces on one scale (`k` px per
 * newton). `split` (0 to 1) fades the tension arrow to an outline as its parts draw; `clipX` stops a long arrow
 * at that x with an open arrowhead marker.
 */
export const CloseUp: React.FC<{x: number; y: number; theta: number; mg: number; k: number; tensionAt?: number; weightAt?: number; splitAt?: number; aAt?: number; centreX?: number; d?: number; clipX?: number; showParts?: boolean; pulseUp?: number; pulseIn?: number; pulseW?: number; ghost?: number; keepT?: boolean}> = ({x, y, theta, mg, k, tensionAt = -30, weightAt = -30, splitAt, aAt, centreX = 220, d = 160, clipX = 110, showParts = true, pulseUp, pulseIn, pulseW, ghost = 0, keepT = false}) => {
	const f = useCurrentFrame();
	const t = rad(theta);
	const FT = mg / Math.cos(t);
	const pz = (at?: number) => (at === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - at) / 24))));
	const sp = splitAt === undefined || keepT ? 0 : prog(f, splitAt, 14);
	// tension vector (screen): up and to the left
	let tx = -FT * Math.sin(t) * k, ty = -FT * Math.cos(t) * k;
	let inx = -mg * Math.tan(t) * k;
	const clipped = x + tx < clipX;
	if (clipped) { const s = (clipX - x) / tx; tx *= s; ty *= s; }
	const inClipped = x + inx < clipX;
	if (inClipped) inx = clipX - x;
	const strLen = Math.cos(t) > 0.05 ? Math.min(1400, (y - 170) / Math.cos(t)) : 1400;
	return (
		<g>
			<line x1={x} y1={y} x2={centreX} y2={y} stroke={ROLE.given.stroke} strokeWidth={3} strokeDasharray="12 10" />
			<circle cx={centreX} cy={y} r={11} fill={ROLE.given.stroke} />
			<line x1={x} y1={y} x2={x - Math.sin(t) * strLen} y2={y - Math.cos(t) * strLen} stroke={INK} strokeWidth={5} />
			{ghost > 0 ? <line x1={x} y1={y} x2={clipX} y2={y} stroke={ROLE.slate.stroke} strokeWidth={5} strokeDasharray="16 12" opacity={ghost} /> : null}
			<BallSvg cx={x} cy={y} d={d} />
			<g opacity={1 - 0.75 * sp}>
				<VecArrow x={x} y={y} dx={tx} dy={ty} color={AMBER.stroke} width={10 + 4 * pz(pulseW)} at={tensionAt} head={30} dash={sp > 0.5 ? '14 10' : undefined} />
			</g>
			<VecArrow x={x} y={y} dx={0} dy={mg * k} color={AMBER.stroke} width={10 + 5 * pz(pulseUp)} at={weightAt} head={30} />
			{showParts && splitAt !== undefined ? <g>
				<VecArrow x={x} y={y} dx={0} dy={-mg * k} color={ROLE.y.stroke} width={9 + 5 * pz(pulseUp)} at={splitAt} head={28} dash="16 9" />
				<VecArrow x={x} y={y} dx={inx} dy={0} color={ROLE.x.stroke} width={9 + 5 * pz(pulseIn)} at={splitAt + 10} head={28} dash="16 9" />
			</g> : null}
			{aAt !== undefined ? <VecArrow x={x - 30} y={y + d / 2 + 34} dx={-170} dy={0} color={ROLE.a.stroke} width={8 + 4 * pz(pulseIn)} at={aAt} head={26} /> : null}
		</g>
	);
};
/** Tension (N) and its in part at angle theta for weight mg. */
export const tension = (mg: number, theta: number) => ({FT: mg / Math.cos(rad(theta)), side: mg * Math.tan(rad(theta))});

/** The top-view inset: the circle from above with the ball at `phase` and a violet arrow to the centre. */
export const TopInset: React.FC<{x: number; y: number; w: number; h: number; phase: number; at?: number; aAt?: number; vAt?: number; title?: string}> = ({x, y, w, h, phase, at = -30, aAt, vAt, title = 'from above'}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	const cx = w / 2, cy = h / 2 + 18, R = Math.min(w, h) * 0.33;
	const bx = cx + R * Math.cos(phase), by = cy - R * Math.sin(phase);
	const ux = (cx - bx) / R, uy = (cy - by) / R;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `3px solid ${INK}`, opacity: o}}>
			<div style={{position: 'absolute', left: 18, top: 10, ...DISPLAY(28, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{title}</div>
			<svg width={w} height={h} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
				<circle cx={cx} cy={cy} r={R} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" />
				<circle cx={cx} cy={cy} r={8} fill={ROLE.given.stroke} />
				{vAt !== undefined ? <VecArrow x={bx} y={by} dx={-uy * 70} dy={ux * 70} color={ROLE.x.stroke} width={6} head={18} at={vAt} /> : null}
				{aAt !== undefined ? <VecArrow x={bx + ux * 22} y={by + uy * 22} dx={ux * (R - 40)} dy={uy * (R - 40)} color={ROLE.a.stroke} width={7} head={20} at={aAt} /> : null}
				<BallSvg cx={bx} cy={by} d={34} />
			</svg>
		</div>
	);
};

/** The painted digital timer, `w` px wide, with a coded readout in its display window. */
export const Timer: React.FC<{x: number; y: number; w: number; text: string}> = ({x, y, w, text}) => {
	const s = w / 1600;
	return (
		<g>
			<image href={staticFile(TIMER_SRC)} x={x} y={y} width={1600 * s} height={1000 * s} preserveAspectRatio="none" />
			<text x={x + 797 * s} y={y + 410 * s + 18} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 48, fontVariantNumeric: 'tabular-nums'}} fill="#ffb347">{text}</text>
		</g>
	);
};

/** The answer-free exam picture: a support line, the string at theta to a dashed vertical, the ball plate and the dashed circle. */
export const SidePicture: React.FC<{L: string; theta: number; rAt?: number; rLabel?: string; hAt?: number; hLabel?: string}> = ({L, theta, rAt, rLabel, hAt, hLabel}) => {
	const f = useCurrentFrame();
	const P: [number, number] = [300, 110], len = 330, t = rad(theta), tk = 0.28;
	const r = len * Math.sin(t), h = len * Math.cos(t);
	const bob: [number, number] = [P[0] + r, P[1] + h];
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<line x1={140} x2={460} y1={P[1]} y2={P[1]} stroke={INK} strokeWidth={6} />
			{Array.from({length: 11}, (_, i) => <line key={i} x1={150 + i * 30} y1={P[1]} x2={135 + i * 30} y2={P[1] - 18} stroke={INK} strokeWidth={2.5} />)}
			<line x1={P[0]} x2={P[0]} y1={P[1]} y2={P[1] + h + 40} stroke={INK} strokeWidth={2.5} strokeDasharray="10 8" />
			<ellipse cx={P[0]} cy={P[1] + h} rx={r} ry={r * tk} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" />
			<line x1={P[0]} y1={P[1]} x2={bob[0]} y2={bob[1]} stroke={INK} strokeWidth={4} />
			<path d={`M${P[0]},${P[1] + 90} A 90 90 0 0 0 ${P[0] + 90 * Math.sin(t)},${P[1] + 90 * Math.cos(t)}`} fill="none" stroke={ROLE.given.stroke} strokeWidth={4} />
			<text x={P[0] + 22} y={P[1] + 182} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 36}} fill={ROLE.given.ink}>{theta}°</text>
			<text x={P[0] + r / 2 + 28} y={P[1] + h / 2 - 4} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 36}} fill={ROLE.given.ink}>{L}</text>
			{rAt !== undefined && f >= rAt ? <g opacity={prog(f, rAt, 12)}><line x1={P[0]} y1={bob[1]} x2={bob[0]} y2={bob[1]} stroke={ROLE.given.stroke} strokeWidth={4} strokeDasharray="10 7" /><text x={P[0] + r / 2} y={bob[1] + 44} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 34}} fill={ROLE.given.ink}>{rLabel}</text></g> : null}
			{hAt !== undefined && f >= hAt ? <g opacity={prog(f, hAt, 12)}><line x1={P[0] - 30} y1={P[1]} x2={P[0] - 30} y2={P[1] + h} stroke={ROLE.given.stroke} strokeWidth={4} /><text x={P[0] - 44} y={P[1] + h / 2} textAnchor="end" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 34}} fill={ROLE.given.ink}>{hLabel}</text></g> : null}
			<BallSvg cx={bob[0]} cy={bob[1]} d={44} />
			<text x={P[0]} y={P[1] + h + r * tk + 70} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 30}} fill={INK}>horizontal circle (side view)</text>
		</svg>
	);
};
