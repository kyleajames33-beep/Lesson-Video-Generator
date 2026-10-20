// Drawing parts for M6 C09 (weak acid neutralisation heat: Hess's law with the ionisation step). Reuses C08 (and
// through it C07 to C01: the board, working lines, question card, countdown, key notes, the C03 calorimeter plate,
// readout chip, heat ripples and solution tokens, the C05 particle glyphs). New here:
// - VArrow: a vertical arrow that draws from y1 to y2 (solid or dashed);
// - Staircase: the enthalpy staircase. Top level, a step 1 arrow whose size and direction follow s1(f) (energy in
//   red and up, energy out blue and down, grey "?" before it is known), a fixed step 2 arrow of -57 kJ/mol (blue,
//   down) and a dashed net arrow on the left. Level labels sit so that they never meet when step 1 is near zero;
// - DHBars: the Delta H bar chart (bars grow down from zero, dashed -57 reference line);
// - Ledger: the M5 C11 energy ledger (red bar up for energy in, blue bar down for energy out) and a particle close-up;
// - IonLens helpers: hydroxide entering a lens of whole acid molecules, each molecule ionising to replace the
//   hydronium that hydroxide removed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {
	An, BASE, BASE_INK, Fade, H3O, HA, HEAT, INK, INK_SOFT, OHg, Ripples, Sx, TEAL, WATER_INK, WATER_SOFT, WaterT, clamp01, hPos, lerp, mw, smooth, vis,
} from '../chem-m6-c08/parts';

export * from '../chem-m6-c08/parts';

// ---------- colours: energy in warm red (up), energy out cool blue (down) ----------
export const EIN = '#c8463a', EIN_INK = '#9e3027', EIN_SOFT = '#f6d9d4';
export const EOUT = '#3a78c2', EOUT_INK = '#245a99', EOUT_SOFT = '#d9e6f6';
export const GREYA = '#a59d90';

// ---------- vertical arrow ----------
export const VArrow: React.FC<{x: number; y1: number; y2: number; at: number; dur?: number; color: string; width?: number; dash?: boolean; o?: number; head?: boolean}> = ({x, y1, y2, at, dur = 18, color, width = 7, dash = false, o = 1, head = true}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, dur));
	if (p <= 0.001 || o <= 0.01) return null;
	const ye = lerp(y1, y2, p);
	const dir = y2 >= y1 ? 1 : -1;
	const hl = Math.min(22, Math.abs(y2 - y1) * 0.45);
	return (
		<g opacity={o} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">
			<path d={`M${x},${y1} L${x},${ye}`} strokeDasharray={dash ? '14 10' : undefined} />
			{head && hl > 3 ? <path d={`M${x - hl * 0.75},${ye - dir * hl} L${x},${ye} L${x + hl * 0.75},${ye - dir * hl}`} /> : null}
		</g>
	);
};

// ---------- enthalpy staircase ----------
export type TL = {t: string; at: number; out?: number; color?: string};
const Labels: React.FC<{x: number; y: number; ls?: TL[]; size: number; color: string; anchor?: 'start' | 'middle' | 'end'; weight?: number}> = ({x, y, ls = [], size, color, anchor = 'start', weight = 700}) => (
	<>{ls.map((l, i) => <Sx key={i} x={x} y={y} text={l.t} size={size} color={l.color ?? color} anchor={anchor} weight={weight} at={l.at} out={l.out} />)}</>
);
export type StairProps = {
	x: number; y: number; k?: number; w?: number; at: number; out?: number; o?: number;
	/** step 1 in kJ/mol (positive = energy in, up); null = unknown (grey "?"). */
	s1: (f: number) => number | null;
	s1At: number; s2At: number; netAt?: number;
	lvA: TL[]; lvB: TL[]; lvC: TL[];
	s1L?: TL[]; s2L?: TL[]; netL?: TL[];
	size?: number;
	/** dims everything except step 1 and the net arrow (the "current change"). */
	focus?: number;
	pulse1?: number;
	refLine?: {at: number; out?: number};
};
/** Geometry: A [x, x+.44w], step 1 at x+.42w, B [x+.38w, x+.9w], step 2 at x+.86w, C [x, x+w]; net arrow at x+20. */
export const stairGeom = (x: number, y: number, k: number, w: number, s1: number) => {
	const yA = y, yB = y - s1 * k, yC = yB + 57 * k;
	return {yA, yB, yC, aR: x + 0.44 * w, x1: x + 0.42 * w, bL: x + 0.38 * w, bR: x + 0.9 * w, x2: x + 0.86 * w, xN: x + 20, cR: x + w};
};
export const Staircase: React.FC<StairProps> = ({x, y, k = 6.4, w = 1000, at, out, o = 1, s1, s1At, s2At, netAt, lvA, lvB, lvC, s1L, s2L, netL, size = 30, focus, pulse1, refLine}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const raw = s1(f);
	const known = raw !== null;
	const s = known ? (raw as number) : 0;
	const G = stairGeom(x, y, k, w, known ? s : -9);
	const fo = focus === undefined ? 1 : 1 - 0.62 * prog(f, focus, 14);
	const col1 = !known ? GREYA : s > 0.3 ? EIN : s < -0.3 ? EOUT : EIN;
	const ink1 = !known ? INK_SOFT : s > 0.3 ? EIN_INK : s < -0.3 ? EOUT_INK : EIN_INK;
	const pu = pulse1 === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - pulse1) / 40) * Math.PI));
	const lineA = prog(f, at, 16), lineB = prog(f, s1At, 16), lineC = prog(f, s2At, 16);
	const mid1 = (G.yA + G.yB) / 2;
	const bigUp = known && s > 0 && G.yA - G.yB > size * 3.5;
	const s1Below = bigUp ? (G.yA + G.yB) / 2 + size * 0.35 : Math.max(G.yA, G.yB) + size * 1.25;
	const stub = known && Math.abs(G.yB - G.yA) < 14;
	return (
		<g opacity={v}>
			<g opacity={fo}>
				{/* levels */}
				<line x1={x} y1={G.yA} x2={lerp(x, G.aR, lineA)} y2={G.yA} stroke={INK} strokeWidth={6} strokeLinecap="round" />
				<Labels x={x} y={G.yA - 16} ls={lvA} size={size} color={INK} />
				{lineB > 0.01 ? <line x1={G.bL} y1={G.yB} x2={lerp(G.bL, G.bR, lineB)} y2={G.yB} stroke={INK} strokeWidth={6} strokeLinecap="round" /> : null}
				<Labels x={G.bL + 0.08 * w} y={G.yB - 16} ls={lvB} size={size} color={INK} />
				{lineC > 0.01 ? <line x1={x} y1={G.yC} x2={lerp(x, G.cR, lineC)} y2={G.yC} stroke={WATER_INK} strokeWidth={6} strokeLinecap="round" /> : null}
				<Labels x={x + 0.1 * w} y={G.yC + size * 1.3} ls={lvC} size={size} color={WATER_INK} />
				{/* step 2: fixed, blue, down */}
				<VArrow x={G.x2} y1={G.yB + 8} y2={G.yC - 6} at={s2At} color={EOUT} />
				<Labels x={G.x2 + 26} y={(G.yB + G.yC) / 2 + size * 0.35} ls={s2L} size={size} color={EOUT_INK} />
				{refLine ? <Fade at={refLine.at} out={refLine.out}><line x1={x} y1={y + 57 * k} x2={G.cR} y2={y + 57 * k} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 8" /><Sx x={G.cR + 14} y={y + 57 * k + 10} text="−57" size={26} color={INK_SOFT} weight={700} at={-1000} /></Fade> : null}
			</g>
			{/* step 1 */}
			{lineB > 0.01 ? (
				<g>
					{pu > 0.01 ? <rect x={G.x1 - 22} y={Math.min(G.yA, G.yB) - 14} width={44} height={Math.abs(G.yB - G.yA) + 28} rx={20} fill={col1} opacity={0.22 * pu} /> : null}
					{!known ? (
						<g>
							<line x1={G.x1} y1={G.yA + 6} x2={G.x1} y2={G.yB - 6} stroke={GREYA} strokeWidth={7} strokeLinecap="round" strokeDasharray="4 10" opacity={lineB} />
							<Sx x={G.x1 - 18} y={mid1 + 14} text="?" size={44} color={INK_SOFT} anchor="end" weight={800} at={s1At} />
						</g>
					) : stub ? (
						<rect x={G.x1 - 10} y={Math.min(G.yA, G.yB) - 5} width={20} height={Math.abs(G.yB - G.yA) + 10} rx={6} fill={col1} opacity={lineB} />
					) : (
						<VArrow x={G.x1} y1={G.yA + (s > 0 ? -4 : 4)} y2={G.yB + (s > 0 ? 4 : -4)} at={s1At} dur={10} color={col1} />
					)}
					<Labels x={G.x1 + (bigUp ? 16 : 22)} y={s1Below} ls={s1L} size={size} color={ink1} />
				</g>
			) : null}
			{/* net arrow: dashed, from A to C */}
			{netAt !== undefined ? (
				<g>
					<VArrow x={G.xN} y1={G.yA + 8} y2={G.yC - 6} at={netAt} color={TEAL} width={6} dash />
					<Labels x={G.xN - 22} y={(G.yA + G.yC) / 2 + size * 0.4} ls={netL} size={size * 1.12} color={TEAL} anchor="end" weight={800} />
				</g>
			) : null}
		</g>
	);
};
/** A morph between step 1 values: segs [[frame, value], ...] eased. */
export const morph = (pts: [number, number][]) => (f: number) => {
	if (f <= pts[0][0]) return pts[0][1];
	for (let i = 0; i + 1 < pts.length; i++) {
		const [a, va] = pts[i], [b, vb] = pts[i + 1];
		if (f < b) return lerp(va, vb, smooth(clamp01((f - a) / Math.max(1, b - a))));
	}
	return pts[pts.length - 1][1];
};

// ---------- Delta H bar chart ----------
export type DBar = {name: string; v: number; at: number; label: string; color?: string; ink?: string; grey?: boolean; out?: number; o?: (f: number) => number; tag?: TL};
/** Zero axis at y; bars grow down by |v| × k; dashed reference line at -57. */
export const DHBars: React.FC<{x: number; y: number; k: number; bw?: number; gap?: number; bars: DBar[]; at: number; out?: number; o?: number; ref?: number; size?: number; axisLabel?: boolean}> = ({x, y, k, bw = 120, gap = 110, bars, at, out, o = 1, ref, size = 30, axisLabel = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const W = bars.length * bw + (bars.length + 1) * gap;
	const ry = y + 57 * k;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x},${y} L${x + W},${y}`} at={at} dur={14} color={INK_SOFT} width={4} />
			{axisLabel ? <Sx x={x - 14} y={y + 10} text="0" size={26} color={INK_SOFT} anchor="end" weight={700} at={at} /> : null}
			{axisLabel ? <Sx x={x - 14} y={y + 60} text="ΔH" size={28} color={INK_SOFT} anchor="end" weight={700} at={at} /> : null}
			{axisLabel ? <Sx x={x - 14} y={y + 92} text="kJ/mol" size={22} color={INK_SOFT} anchor="end" weight={600} at={at} /> : null}
			{ref !== undefined ? (
				<Fade at={ref}>
					<DrawPath d={`M${x},${ry} L${x + W},${ry}`} at={ref} dur={16} color={INK_SOFT} width={3} dash="12 9" />
					<Sx x={x + W + 12} y={ry + 9} text="−57" size={28} color={INK_SOFT} weight={700} at={ref + 6} />
				</Fade>
			) : null}
			{bars.map((b, i) => {
				const bx = x + gap + i * (bw + gap);
				const g = smooth(prog(f, b.at, 26));
				const bo = vis(f, b.at - 2, b.out, 10) * (b.o ? b.o(f) : 1);
				if (bo <= 0.01) return null;
				const h = Math.abs(b.v) * k * g;
				const col = b.grey ? '#cfc8bb' : b.color ?? TEAL;
				const ink = b.grey ? INK_SOFT : b.ink ?? INK;
				return (
					<g key={i} opacity={bo}>
						<Sx x={bx + bw / 2} y={y - 18} text={b.name} size={size} color={ink} anchor="middle" weight={700} at={b.at - 2} />
						<rect x={bx} y={y} width={bw} height={Math.max(2, h)} rx={10} fill={col} opacity={b.grey ? 0.7 : 0.88} strokeDasharray={b.grey ? '8 6' : undefined} stroke={b.grey ? INK_SOFT : 'none'} strokeWidth={2} />
						<Sx x={bx + bw / 2} y={y + h + size * 1.75} text={b.label} size={size} color={ink} anchor="middle" weight={800} at={b.at + 16} />
						{b.tag ? <Sx x={bx + bw / 2} y={y + h + size * 2.9} text={b.tag.t} size={size * 0.8} color={INK_SOFT} anchor="middle" weight={600} at={b.tag.at} out={b.tag.out} /> : null}
					</g>
				);
			})}
		</g>
	);
};
export const dhBarX = (x: number, i: number, bw = 120, gap = 110) => x + gap + i * (bw + gap);

// ---------- energy ledger ----------
/** A baseline with a red bar up (energy in) and a blue bar down (energy out); heights are px functions of frame. */
export const Ledger: React.FC<{x: number; y: number; bw?: number; up: (f: number) => number; down: (f: number) => number; at: number; out?: number; o?: number; inL?: TL; outL?: TL; size?: number}> = ({x, y, bw = 110, up, down, at, out, o = 1, inL, outL, size = 30}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const u = up(f), d = down(f);
	const xB = x + bw + 70;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x - 40},${y} L${xB + bw + 40},${y}`} at={at} dur={14} color={INK_SOFT} width={4} />
			{u > 0.5 ? <rect x={x} y={y - u} width={bw} height={u} rx={10} fill={EIN} opacity={0.88} /> : null}
			{d > 0.5 ? <rect x={xB} y={y} width={bw} height={d} rx={10} fill={EOUT} opacity={0.88} /> : null}
			{u > 0.5 ? <path d={`M${x + bw / 2 - 16},${y - u + 30} L${x + bw / 2},${y - u + 12} L${x + bw / 2 + 16},${y - u + 30}`} fill="none" stroke="#fff" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /> : null}
			{d > 0.5 ? <path d={`M${xB + bw / 2 - 16},${y + d - 30} L${xB + bw / 2},${y + d - 12} L${xB + bw / 2 + 16},${y + d - 30}`} fill="none" stroke="#fff" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /> : null}
			{inL ? <Sx x={x + bw / 2} y={y - u - 20} text={inL.t} size={size} color={EIN_INK} anchor="middle" weight={700} at={inL.at} out={inL.out} /> : null}
			{outL ? <Sx x={xB + bw / 2} y={y + d + size * 1.3} text={outL.t} size={size} color={EOUT_INK} anchor="middle" weight={700} at={outL.at} out={outL.out} /> : null}
		</g>
	);
};

// ---------- close-up: one molecule gives its proton; water closes round the ions ----------
/** brk: frame the proton lifts off; wrap: frame the water closes in. small: a small tight anion (fluoride). */
export const CloseUp: React.FC<{cx: number; cy: number; brk: number; wrap: number; at: number; out?: number; o?: number; s?: number; small?: boolean; label?: string}> = ({cx, cy, brk, wrap, at, out, o = 1, s = 2.6, small = false, label}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const b = smooth(prog(f, brk, 26));
	const w = smooth(prog(f, wrap, 36));
	const ang = -0.6;
	const [hx0, hy0] = hPos(cx, cy, s, ang);
	const hx = lerp(hx0, cx + 150, b), hy = lerp(hy0, cy - 110, b);
	const ar = small ? 22 : 34;
	const ringA = small ? 50 : 72;
	const nA = small ? 6 : 7;
	return (
		<g opacity={v}>
			{b < 0.05 ? <HA x={cx} y={cy} s={s} a={ang} /> : (
				<g>
					{b < 0.6 ? <DrawPath d={`M${lerp(cx, hx0, 0.55)},${lerp(cy, hy0, 0.55)} L${lerp(cx, hx0, 0.55) + 14},${lerp(cy, hy0, 0.55) - 18}`} at={brk} dur={6} color={EIN} width={5} /> : null}
					{small ? (
						<g>
							<circle cx={cx} cy={cy} r={ar} fill="#b9b3a8" stroke="#7a746a" strokeWidth={3} />
							<Sx x={cx} y={cy + 9} text="F^{−}" size={26} color="#fff" anchor="middle" weight={800} at={-1000} />
						</g>
					) : <An x={cx} y={cy} s={s} />}
					<circle cx={hx} cy={hy} r={6.5 * s} fill="#2a9d8f" stroke="#1d6f66" strokeWidth={2} />
				</g>
			)}
			{/* water closing in round the anion and the hydronium */}
			{w > 0.01 ? Array.from({length: nA}, (_, i) => {
				const a = (i / nA) * Math.PI * 2 + 0.3;
				const r = lerp(ringA + 70, ringA, w);
				return <WaterT key={'a' + i} x={cx + Math.cos(a) * r} y={cy + Math.sin(a) * r} s={small ? 1.05 : 1.15} o={w} />;
			}) : null}
			{w > 0.01 ? Array.from({length: 4}, (_, i) => {
				const a = (i / 4) * Math.PI * 2 + 0.8;
				const r = lerp(110, 44, w);
				return <WaterT key={'h' + i} x={hx + Math.cos(a) * r} y={hy + Math.sin(a) * r} s={1.0} o={w} />;
			}) : null}
			{label ? <Sx x={cx + 40} y={cy + ringA + 90} text={label} size={28} color={INK_SOFT} anchor="middle" hand at={at} /> : null}
		</g>
	);
};

// ---------- hydroxide meeting hydronium inside a lens ----------
/** An OH- token flies from `from` to the hydronium at `to` (arriving at `at` + 24); both become water with a ripple. */
export const OHMeet: React.FC<{from: [number, number]; to: [number, number]; at: number; s?: number; ripple?: boolean}> = ({from, to, at, s = 1.4, ripple = true}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const p = smooth(clamp01((f - at) / 26));
	if (p < 1) return <OHg x={lerp(from[0], to[0] + 14 * s, p)} y={lerp(from[1], to[1], p)} s={s} />;
	return (
		<g>
			<WaterT x={to[0]} y={to[1]} s={s * 1.1} />
			{ripple ? <Ripples x={to[0]} y={to[1]} at={at + 26} until={at + 70} r={60} n={2} color={HEAT} /> : null}
		</g>
	);
};
/** One acid molecule that ionises at `ion` (its proton hops to a neighbouring water, making hydronium), and whose
 *  hydronium is then removed by hydroxide at `meet` (null: no hydroxide). start 'H3O': already ionised at frame 0. */
export const IonSite: React.FC<{x: number; y: number; ion: number; meet: number | null; from: [number, number]; s?: number; ang?: number; o?: number}> = ({x, y, ion, meet, from, s = 1.5, ang = -0.6, o = 1}) => {
	const f = useCurrentFrame();
	const p = smooth(clamp01((f - ion) / 22));
	const [hx, hy] = hPos(x, y, s, ang);
	const wx = x + Math.cos(ang) * 46 * s, wy = y + Math.sin(ang) * 46 * s;
	const gone = meet !== null && f >= meet;
	return (
		<g opacity={o}>
			{p <= 0.001 ? (
				<g>
					<circle cx={wx} cy={wy} r={9.5 * s} fill={WATER_SOFT} stroke={WATER_INK} strokeWidth={1.6} opacity={0.85} />
					<HA x={x} y={y} s={s} a={ang} />
				</g>
			) : (
				<g>
					<An x={x} y={y} s={s} />
					{!gone ? (p < 1 ? (
						<g>
							<circle cx={wx} cy={wy} r={9.5 * s} fill={WATER_SOFT} stroke={WATER_INK} strokeWidth={1.6} opacity={0.85} />
							<circle cx={lerp(hx, wx + 7 * s, p)} cy={lerp(hy, wy - 6 * s, p)} r={7 * s} fill="#2a9d8f" stroke="#1d6f66" strokeWidth={2} />
						</g>
					) : <H3O x={wx} y={wy} s={s} />) : null}
					{meet !== null ? <OHMeet from={from} to={[wx, wy]} at={meet - 26} s={s} /> : null}
				</g>
			)}
		</g>
	);
};
void BASE; void BASE_INK; void mw;
