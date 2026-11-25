// Induction-motor kit for Module 6 (additive kit file, 25 November 2026; first used by phys-y12-m6-v19, offered to
// later induction-motor and generator videos). Course-neutral: every label, number and colour of meaning is passed
// in by the lesson. Everything here is a coded HSC-style schematic (no real object is drawn):
//   - a four-pole stator ring: twelve coils in three phase groups round a circular yoke, the coils' orange tint
//     following their group's alternating current, four pole markers (N, S, N, S) and a dashed field arrow to one N;
//     a "single group" mode (one group's poles grow, shrink and reverse in place) and a "chasing lights" ring;
//   - an end-on squirrel-cage rotor: a disc with bars round its rim, an index mark, slate field lines that turn with
//     the field (so they slide across the rotor at the slip rate and stand still on it at zero slip), induced bar
//     currents (dots out of the screen, crosses into it) placed by the field's poles, and tangential force arrows;
//   - a curved arrow (torque, load), a coded speed dial with no printed values, and phase graphs' maths.
//
// Field convention: `phi` is the screen angle (degrees, anticlockwise) of one N pole. In a four-pole winding the
// supply's phase angle is twice the mechanical angle: coil k (at 30k degrees, sequence A, -C, B, -A, C, -B, ...)
// carries cos(2 phi - 60k), so the coil under each pole peaks as the pole passes it. The phase currents are
// i_A = cos(2 phi), i_B = cos(2 phi - 120), i_C = cos(2 phi - 240). Relative to a rotor at `rho`, the field's poles
// sit at phi - rho; a bar under a pole carries the largest induced current (sign set by the pole), and every bar's
// force points forward (the field's direction of turning), as Lenz's law requires for a field that runs ahead.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {Arrow2} from './magnetic';

type Pt = [number, number];
const rad = (d: number) => (d * Math.PI) / 180;
const P = (cx: number, cy: number, r: number, deg: number): Pt => [cx + r * Math.cos(rad(deg)), cy - r * Math.sin(rad(deg))];
const txt = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);

// ---------------------------------------------------------------- phases
/** Phase group of coil k (0 = A, 1 = B, 2 = C) for the A, -C, B sequence. */
export const coilGroup = (k: number) => [0, 2, 1][((k % 3) + 3) % 3];
/** The three phase currents (normalised) at field angle phi (degrees). */
export const phaseI = (phi: number): [number, number, number] => [0, 120, 240].map(o => Math.cos(rad(2 * phi - o))) as [number, number, number];
/** Signed current in coil k at field angle phi. */
export const coilI = (k: number, phi: number) => Math.cos(rad(2 * phi - 60 * k));

// ---------------------------------------------------------------- the four-pole stator ring
export type RingMode = 'turn' | 'single' | 'lights';
/**
 * Twelve coils round (cx, cy) at radius r. `glow` scales the orange tint of each coil by its group's current squared
 * (so a group brightens at each peak of its graph). `groupO` dims groups (opacity per group). In mode 'single' only
 * group A's current flows: its poles sit at 0, 90, 180, 270 degrees and grow, shrink and reverse with i_A; `single`
 * is that current. `poles` and `arrow` fade the pole markers and the dashed arrow to the first N. `labels` numbers
 * the coils by group (1, 2, 3).
 */
export const FourPoleRing: React.FC<{cx: number; cy: number; r: number; phi: number; mode?: RingMode; single?: number; glow?: number; groupO?: readonly number[]; poles?: number; arrow?: number; poleColor: string; coilColor?: string; litColor?: string; labels?: number; opacity?: number; coilW?: number}> = ({cx, cy, r, phi, mode = 'turn', single = 1, glow = 0, groupO = [1, 1, 1], poles = 1, arrow = 1, poleColor, coilColor = '#8a8378', litColor = '#e07b12', labels = 0, opacity = 1, coilW = 1}) => {
	if (opacity <= 0.001) return null;
	const I = phaseI(phi);
	const cw = 50 * coilW * (r / 250), ch = 70 * (r / 250);
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r + cw * 0.55 + 12} fill="none" stroke="#c9c2b6" strokeWidth={22 * (r / 250)} />
			{Array.from({length: 12}, (_, k) => {
				const g = coilGroup(k);
				const t = 30 * k;
				const amp = mode === 'single' ? (g === 0 ? single : 0) : I[g];
				const lit = glow * amp * amp;
				return <g key={k} opacity={groupO[g]} transform={`rotate(${-t} ${cx} ${cy})`}>
					<rect x={cx + r - cw * 0.3} y={cy - ch / 2} width={cw} height={ch} rx={8} fill="#efe9de" stroke={coilColor} strokeWidth={3.5} />
					{lit > 0.01 ? <rect x={cx + r - cw * 0.3} y={cy - ch / 2} width={cw} height={ch} rx={8} fill={litColor} opacity={0.85 * lit} /> : null}
					{[0, 1, 2, 3].map(q => <line key={q} x1={cx + r - cw * 0.3 + cw * (0.16 + 0.22 * q)} y1={cy - ch / 2 + 4} x2={cx + r - cw * 0.3 + cw * (0.16 + 0.22 * q)} y2={cy + ch / 2 - 4} stroke={coilColor} strokeWidth={2.5} />)}
				</g>;
			})}
			{labels > 0.01 ? <g opacity={labels}>{Array.from({length: 12}, (_, k) => { const p = P(cx, cy, r + cw * 0.95 + 26, 30 * k); return <text key={k} x={p[0]} y={p[1] + 10} textAnchor="middle" opacity={groupO[coilGroup(k)]} style={txt(26, INK)}>{coilGroup(k) + 1}</text>; })}</g> : null}
			{poles > 0.001 ? <g opacity={poles}>{[0, 90, 180, 270].map((o, i) => {
				const s = mode === 'single' ? single : 1;
				const base = mode === 'single' ? 0 : phi;
				const north = (i % 2 === 0) === (s >= 0);
				const a = Math.abs(s);
				if (a < 0.06) return null;
				const p = P(cx, cy, r * 0.74, base + o);
				const rr = Math.max(23, 30 * (r / 250)) * (0.45 + 0.55 * a);
				return <g key={i}>
					<circle cx={p[0]} cy={p[1]} r={rr} fill={north ? '#e3e7ec' : CARD} stroke={poleColor} strokeWidth={4} />
					<text x={p[0]} y={p[1] + rr * 0.42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: rr * 1.2, fill: poleColor}}>{north ? 'N' : 'S'}</text>
				</g>;
			})}</g> : null}
			{arrow > 0.001 && mode !== 'single' ? <Arrow2 from={[cx, cy]} to={P(cx, cy, r * 0.74 - 34 * (r / 250), phi)} color={poleColor} width={7} head={26} dash="20 12" opacity={arrow} /> : null}
		</g>
	);
};

/** A ring of lights round (cx, cy): the bright spot sits at `phi`; each bulb only brightens and dims in place. */
export const ChasingLights: React.FC<{cx: number; cy: number; r: number; phi: number; n?: number; color?: string; opacity?: number}> = ({cx, cy, r, phi, n = 24, color = '#e0a21b', opacity = 1}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			{Array.from({length: n}, (_, j) => {
				const t = (360 / n) * j;
				const d = Math.cos(rad(t - phi));
				const b = Math.pow(Math.max(0, d), 8);
				const p = P(cx, cy, r, t);
				return <g key={j}>
					{b > 0.05 ? <circle cx={p[0]} cy={p[1]} r={30} fill={color} opacity={0.35 * b} /> : null}
					<circle cx={p[0]} cy={p[1]} r={14} fill={b > 0.05 ? color : '#ece6da'} fillOpacity={0.25 + 0.75 * b} stroke="#8a8378" strokeWidth={3} />
				</g>;
			})}
		</g>
	);
};

// ---------------------------------------------------------------- the end-on cage rotor
/**
 * An end-on squirrel-cage rotor at (cx, cy), radius r, turned to `rho`. `lines` draws slate field lines (N to the
 * neighbouring S) that turn with the field at `phi`; `currents` (0 to about 1.5) sizes the induced bar currents and
 * `forces` (0 to about 1.5) the amber tangential force arrows. `loop` highlights bars `loop[0]` and `loop[1]`.
 */
export const CageRotor: React.FC<{cx: number; cy: number; r: number; rho: number; phi: number; bars?: number; lines?: number; currents?: number; forces?: number; lineColor: string; currentColor: string; forceColor: string; markColor?: string; outline?: boolean; opacity?: number; loop?: readonly [number, number]; loopColor?: string; loopO?: number; mark?: number}> = ({cx, cy, r, rho, phi, bars = 12, lines = 0, currents = 0, forces = 0, lineColor, currentColor, forceColor, markColor = '#1f3a68', outline = false, opacity = 1, loop, loopColor = '#c04a7a', loopO = 0, mark = 1}) => {
	if (opacity <= 0.001) return null;
	const barR = r * 0.82;
	const bar = (k: number) => rho + (360 / bars) * k;
	const lineArcs: string[] = [];
	if (lines > 0.001) {
		for (const n of [phi, phi + 180]) for (const sgn of [1, -1]) for (const w of [0, 1, 2]) {
			const a1 = n + sgn * (8 + 12 * w), a2 = n + sgn * (90 - 8 - 12 * w);
			const p1 = P(cx, cy, r * 0.97, a1), p2 = P(cx, cy, r * 0.97, a2), c = P(cx, cy, r * (0.2 + 0.2 * w), (a1 + a2) / 2);
			lineArcs.push(`M${p1[0].toFixed(1)},${p1[1].toFixed(1)} Q${c[0].toFixed(1)},${c[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`);
		}
	}
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill={outline ? 'none' : '#e4e0d8'} stroke="#6f6a62" strokeWidth={outline ? 4 : 6} strokeDasharray={outline ? '14 10' : undefined} />
			{lines > 0.001 ? <g opacity={lines}>{lineArcs.map((d, i) => <path key={i} d={d} fill="none" stroke={lineColor} strokeWidth={3.5} strokeDasharray={i % 3 === 1 ? undefined : undefined} />)}</g> : null}
			{loop && loopO > 0.001 ? (() => { const a = P(cx, cy, barR, bar(loop[0])), b = P(cx, cy, barR, bar(loop[1])); return <g opacity={loopO}><line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={loopColor} strokeWidth={r * 0.16} strokeLinecap="round" opacity={0.28} /><circle cx={a[0]} cy={a[1]} r={r * 0.12} fill="none" stroke={loopColor} strokeWidth={5} /><circle cx={b[0]} cy={b[1]} r={r * 0.12} fill="none" stroke={loopColor} strokeWidth={5} /></g>; })() : null}
			{Array.from({length: bars}, (_, k) => {
				const b = bar(k);
				const p = P(cx, cy, barR, b);
				const I = Math.cos(rad(2 * (b - phi)));
				const ci = currents * Math.abs(I);
				const show = ci > 0.22;
				const sz = r * 0.075 * Math.min(1.6, 0.6 + 0.7 * ci);
				const fl = forces * I * I;
				const tang: Pt = [-Math.sin(rad(b)), -Math.cos(rad(b))];
				return <g key={k}>
					<circle cx={p[0]} cy={p[1]} r={r * 0.085} fill={outline ? 'none' : '#8a8378'} stroke="#6f6a62" strokeWidth={outline ? 3 : 0} />
					{show ? (I >= 0
						? <g opacity={Math.min(1, ci)}><circle cx={p[0]} cy={p[1]} r={sz + 6} fill={CARD} stroke={currentColor} strokeWidth={4} /><circle cx={p[0]} cy={p[1]} r={sz * 0.45} fill={currentColor} /></g>
						: <g opacity={Math.min(1, ci)}><circle cx={p[0]} cy={p[1]} r={sz + 6} fill={CARD} stroke={currentColor} strokeWidth={4} /><path d={`M${p[0] - sz * 0.6},${p[1] - sz * 0.6} L${p[0] + sz * 0.6},${p[1] + sz * 0.6} M${p[0] + sz * 0.6},${p[1] - sz * 0.6} L${p[0] - sz * 0.6},${p[1] + sz * 0.6}`} stroke={currentColor} strokeWidth={4} /></g>) : null}
					{fl > 0.12 ? <Arrow2 from={[p[0] + tang[0] * r * 0.12, p[1] + tang[1] * r * 0.12]} to={[p[0] + tang[0] * r * (0.12 + 0.42 * fl), p[1] + tang[1] * r * (0.12 + 0.42 * fl)]} color={forceColor} width={5} head={16} /> : null}
				</g>;
			})}
			<circle cx={cx} cy={cy} r={r * 0.16} fill={outline ? 'none' : '#bdb6aa'} stroke="#6f6a62" strokeWidth={3} />
			{mark > 0.001 ? <line x1={cx} y1={cy} x2={P(cx, cy, r * 0.95, rho)[0]} y2={P(cx, cy, r * 0.95, rho)[1]} stroke={markColor} strokeWidth={8} strokeLinecap="round" opacity={mark} /> : null}
		</g>
	);
};

// ---------------------------------------------------------------- curved arrows and dials
/** A curved arrow round (cx, cy) from angle `a0` to `a1` (degrees, anticlockwise positive); `outline` draws it hollow. */
export const ArcArrow: React.FC<{cx: number; cy: number; r: number; a0: number; a1: number; color: string; width?: number; outline?: boolean; opacity?: number; head?: number}> = ({cx, cy, r, a0, a1, color, width = 9, outline = false, opacity = 1, head = 26}) => {
	if (opacity <= 0.001 || Math.abs(a1 - a0) < 2) return null;
	const n = 40, pts: Pt[] = [];
	const dir = Math.sign(a1 - a0);
	const end = a1 - dir * (head / r) * (180 / Math.PI) * 0.7;
	for (let i = 0; i <= n; i++) pts.push(P(cx, cy, r, a0 + ((end - a0) * i) / n));
	const tip = P(cx, cy, r, a1);
	const tang: Pt = [-Math.sin(rad(a1)) * dir, -Math.cos(rad(a1)) * dir];
	const nrm: Pt = [tang[1], -tang[0]];
	const base: Pt = [tip[0] - tang[0] * head, tip[1] - tang[1] * head];
	const hw = head * 0.62;
	const tri = `M${tip[0]},${tip[1]} L${base[0] + nrm[0] * hw},${base[1] + nrm[1] * hw} L${base[0] - nrm[0] * hw},${base[1] - nrm[1] * hw} Z`;
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	return (
		<g opacity={opacity}>
			{outline ? <><path d={d} fill="none" stroke={color} strokeWidth={width + 6} strokeLinecap="round" /><path d={d} fill="none" stroke={CARD} strokeWidth={Math.max(2, width - 2)} strokeLinecap="round" /><path d={tri} fill={CARD} stroke={color} strokeWidth={4} strokeLinejoin="round" /></>
				: <><path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" /><path d={tri} fill={color} /></>}
		</g>
	);
};

/** A coded speed dial (no printed values): an arc scale and a needle at `value` (0 to 1 of the scale). */
export const SpeedDial: React.FC<{cx: number; cy: number; r: number; value: number; color?: string; needle?: string; ticks?: number; mark?: number; markColor?: string; opacity?: number}> = ({cx, cy, r, value, color = '#6f6a62', needle = INK, ticks = 10, mark, markColor = '#8a8378', opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const ang = (v: number) => 210 - 240 * Math.min(1, Math.max(0, v));
	const arc = Array.from({length: 49}, (_, i) => P(cx, cy, r, ang(i / 48)));
	const tip = P(cx, cy, r * 0.84, ang(value));
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r + 22} fill={CARD} stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			<path d={arc.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')} fill="none" stroke={color} strokeWidth={6} />
			{Array.from({length: ticks + 1}, (_, i) => { const a = P(cx, cy, r, ang(i / ticks)), b = P(cx, cy, r * 0.86, ang(i / ticks)); return <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth={4} />; })}
			{mark !== undefined ? <line x1={cx} y1={cy} x2={P(cx, cy, r * 0.84, ang(mark))[0]} y2={P(cx, cy, r * 0.84, ang(mark))[1]} stroke={markColor} strokeWidth={5} strokeDasharray="10 8" /> : null}
			<line x1={cx} y1={cy} x2={tip[0]} y2={tip[1]} stroke={needle} strokeWidth={9} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={12} fill={needle} />
		</g>
	);
};

/** Points on a circle (exported for lessons that place labels on the ring). */
export const ringPt = P;
