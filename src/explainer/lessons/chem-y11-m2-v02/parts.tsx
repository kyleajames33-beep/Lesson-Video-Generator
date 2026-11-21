// Drawing parts for Y11 Chem M2 V02 (the mole). Text, chips, framed answers, readouts, pen marks, plates, brackets
// and atoms reuse the Y11 Chem M1 V01 parts (and through them M2 V06's); the painted balance, task strip, givens card
// and the pause hold reuse M1 V06's; the question tag and givens strip reuse M1 V01's scene 3 (all read-only).
// New here, all coded (abstract diagrams): counting boxes of dots, the mole tile (a box standing for 6.022 x 10^23
// particles, with a half tile), the N to n bridge (two boxes joined by "x N_A" and "/ N_A" arrows), the n slider
// with its handle and ticks, the counting dial, the power-of-ten strip, the beam balance outline, ball models
// (CO2, NaCl lattice fragment, CaCl2 formula unit) in HSC colours, and the framed memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMB, AMB_INK, At, Bracket, Card, Countdown, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, INK, INK_SOFT, Move, PenArrow, PenRing, Plate,
	StrikeLine, TickMark, ViewFrame, clamp01, kf, lerp, plateMap, prog, smooth, vis,
} from '../chem-y11-m1-v01/parts';
import {Balance, GivensCard, PauseHoldR, balGeo, placeAt} from '../chem-y11-m1-v06/parts';
import {QTag} from '../chem-y11-m1-v01/s3';
import {RedX} from '../chem-y11-m2-v06/parts';
import {Chip, Framed, Givens, Readout, Rich, Sx, TaskStrip, Write, chipW, richW, tw} from './text';
import type {Seg} from './text';

export {
	AMB, AMB_INK, At, Bracket, Card, Countdown, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, INK, INK_SOFT, Move, PenArrow, PenRing, Plate,
	StrikeLine, TickMark, ViewFrame, clamp01, kf, lerp, plateMap, prog, smooth, vis,
	Balance, GivensCard, PauseHoldR, TaskStrip, balGeo, placeAt, Givens, QTag, RedX,
	Chip, Framed, Readout, Rich, Sx, Write, chipW, richW, tw,
};
export type {Seg};

// ---------- colour roles (design Revision 2, fixed for the whole video) ----------
/** particle counts N */
export const NAVY_T = '#24407a';
export const NAVY_SOFT = '#e7ecf6';
/** chemical amounts n, mol: strokes AMB_S, text AMB_T */
export const AMB_S = '#d18f1f';
export const AMB_T = '#9c5a00';
export const AMB_SOFT = '#fbefd9';
/** the Avogadro constant N_A */
export const VIO_S = '#7a4fb0';
export const VIO_T = '#5b2aa8';
export const VIO_SOFT = '#efe8f8';
export const GREEN_S = '#2f8a5b';
export const GREEN_T = '#23704a';
export const RED_T = '#c4362f';
export const PAPER = '#fffdf8';
/** atoms in element colours (design colour key) */
export const EL: Record<string, string> = {Mg: '#a9d39a', C: '#3b3a38', O: '#d8483b', H: '#ffffff', Na: '#8a5bb5', Cl: '#4f9a5a', Ca: '#efb27a', He: '#f3e48a'};

export const SVG: React.FC<{children: React.ReactNode}> = ({children}) => <svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>{children}</svg>;
export const Heading: React.FC<{text: string; at?: number; out?: number}> = ({text, at = 0, out}) => <Write x={96} y={150} text={text} at={at} out={out} size={60} color={INK} cps={40} />;
/** Writes its children on left to right (display type: equations, numbers) from `at` over `dur` frames. */
export const Reveal: React.FC<{at: number; dur?: number; out?: number; children: React.ReactNode}> = ({at, dur = 20, out, children}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const p = prog(f, at, dur);
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (o <= 0.005) return null;
	return <g opacity={o} style={p >= 1 ? undefined : {clipPath: `inset(-40% ${100 - p * 100}% -40% -5%)`}}>{children}</g>;
};
/** Ease 0..1 between two frames. */
export const span = (f: number, a: number, b: number) => smooth(clamp01((f - a) / Math.max(1, b - a)));

// ---------- atoms and small models ----------
export const Ball: React.FC<{el: string; x: number; y: number; r: number; sign?: '+' | '−' | '2+' | '2−'; o?: number}> = ({el, x, y, r, sign, o = 1}) => <At x={x} y={y} r={r} fill={EL[el]} sign={sign} o={o} />;
/** Diatomic molecule (two touching balls). */
export const Di: React.FC<{el: string; x: number; y: number; r: number; rot?: number; o?: number}> = ({el, x, y, r, rot = 0, o = 1}) => (
	<g transform={`rotate(${rot},${x},${y})`} opacity={o}>
		<Ball el={el} x={x - r * 0.74} y={y} r={r} />
		<Ball el={el} x={x + r * 0.74} y={y} r={r} />
	</g>
);
/** Linear CO2 (O, C, O); `open` 0..1 lifts the two O atoms apart and up. */
export const CO2: React.FC<{x: number; y: number; r: number; open?: number; o?: number}> = ({x, y, r, open = 0, o = 1}) => {
	const dx = r * 1.5 + open * r * 1.6, dy = -open * r * 1.4;
	return (
		<g opacity={o}>
			<Ball el="O" x={x - dx} y={y + dy} r={r * 0.92} />
			<Ball el="O" x={x + dx} y={y + dy} r={r * 0.92} />
			<Ball el="C" x={x} y={y} r={r} />
		</g>
	);
};

// ---------- deterministic dot fields ----------
const hash = (k: number, s: number) => { const v = Math.sin(k * 127.1 + s * 311.7) * 43758.5453; return v - Math.floor(v); };
/** n dots scattered in a rectangle (seeded, no overlap check: a blur of tiny particles). */
export const DotField: React.FC<{x: number; y: number; w: number; h: number; n: number; r: number; color: string; seed?: number; o?: number; jitter?: number}> = ({x, y, w, h, n, r, color, seed = 1, o = 1, jitter = 0}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const px = x + r + hash(i, seed) * (w - 2 * r) + Math.sin(f * 0.3 + i) * jitter;
				const py = y + r + hash(i, seed + 7) * (h - 2 * r) + Math.cos(f * 0.27 + i * 1.3) * jitter;
				return <circle key={i} cx={px} cy={py} r={r} fill={color} stroke="rgba(35,28,20,0.55)" strokeWidth={Math.max(0.8, r * 0.18)} />;
			})}
		</g>
	);
};
/** Grid positions for k items in a box (cols x rows), centred. */
export const gridPts = (x: number, y: number, w: number, h: number, cols: number, rows: number): [number, number][] => {
	const out: [number, number][] = [];
	for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) out.push([x + ((i + 0.5) / cols) * w, y + ((j + 0.5) / rows) * h]);
	return out;
};

// ---------- counting box ----------
/** Rounded box with a label tab on top; children drawn inside. */
export const CountBox: React.FC<{x: number; y: number; w: number; h: number; label?: string; color?: string; size?: number; fill?: string; children?: React.ReactNode; o?: number}> = ({x, y, w, h, label, color = NAVY_T, size = 34, fill = PAPER, children, o = 1}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={w} height={h} rx={18} fill={fill} stroke={color} strokeWidth={5} />
		{children}
		{label ? <Sx x={x + 18} y={y - 14} text={label} size={size} color={color} weight={800} at={-1000} /> : null}
	</g>
));

// ---------- the mole tile ----------
/** One mole drawn as an amber tile with a fine field of particles; frac < 1 draws a part tile (cut at the right). */
export const MoleTile: React.FC<{x: number; y: number; w?: number; h?: number; frac?: number; dot?: string; label?: string; o?: number; seed?: number; size?: number}> = ({x, y, w = 150, h = 110, frac = 1, dot = '#3b3a38', label, o = 1, seed = 3, size = 30}) => {
	if (o <= 0.005) return null;
	const ww = w * frac;
	const lab = label ?? (frac >= 1 ? '1 mol' : `${frac} mol`);
	const id = `mt${Math.round(x)}-${Math.round(y)}-${seed}`;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={ww} height={h} rx={14} fill={AMB_SOFT} stroke={AMB_S} strokeWidth={4} />
			<defs><clipPath id={id}><rect x={x + 6} y={y + 40} width={ww - 12} height={h - 46} /></clipPath></defs>
			<g clipPath={`url(#${id})`}><DotField x={x + 6} y={y + 40} w={w - 12} h={h - 46} n={Math.round(70 * frac) + 10} r={3.2} color={dot} seed={seed} /></g>
			<Sx x={x + ww / 2} y={y + 32} text={lab} size={Math.max(26, Math.min(size, (ww - 10) / (lab.length * 0.56)))} color={AMB_T} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

// ---------- the N to n bridge ----------
export type BridgeG = {x: number; y: number; wN: number; wn: number; h: number; gap: number; size: number};
/** Two boxes, N (navy) at the left and n (amber) at the right, joined by "× N_A" (n to N, top) and "÷ N_A" (N to n,
 *  bottom) violet arrows. Each part appears from its frame; hiMul / hiDiv put a violet pen ring on an arrow. */
export const Bridge: React.FC<{g: BridgeG; NLines: string[]; nLines: string[]; NAt?: number; nAt?: number; mulAt?: number; divAt?: number; hiMul?: number; hiDiv?: number; o?: number; arrowSize?: number}> = ({g, NLines, nLines, NAt = -1000, nAt = -1000, mulAt = -1000, divAt = -1000, hiMul, hiDiv, o = 1, arrowSize}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const {x, y, wN, wn, h, gap, size} = g;
	const as = arrowSize ?? Math.max(30, Math.round(size * 0.95));
	const xl = x + wN, xr = x + wN + gap;
	const yT = y + h * 0.3, yB = y + h * 0.72;
	const box = (bx: number, w: number, lines: string[], color: string, soft: string, at: number) => {
		const v = prog(f, at, 12);
		if (v <= 0.005) return null;
		const lh = size * 1.2, y0 = y + h / 2 - ((lines.length - 1) * lh) / 2 + size * 0.36;
		return (
			<g opacity={v}>
				<rect x={bx} y={y} width={w} height={h} rx={16} fill={soft} stroke={color} strokeWidth={4} />
				{lines.map((t, i) => <Sx key={i} x={bx + w / 2} y={y0 + i * lh} text={t} size={i === 0 ? size : Math.round(size * 0.86)} color={color} anchor="middle" weight={i === 0 ? 800 : 700} at={-1000} />)}
			</g>
		);
	};
	const arrow = (a: [number, number], b: [number, number], at: number) => {
		if (f < at) return null;
		const dir = Math.sign(b[0] - a[0]);
		const hp = prog(f, at + 12, 6), hd = Math.max(12, size * 0.4);
		return (
			<g>
				<DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={14} color={VIO_S} width={Math.max(4, size * 0.13)} />
				<path d={`M${b[0] - dir * hd},${b[1] - hd * 0.6} L${b[0]},${b[1]} L${b[0] - dir * hd},${b[1] + hd * 0.6}`} fill="none" stroke={VIO_S} strokeWidth={Math.max(4, size * 0.13)} strokeLinecap="round" strokeLinejoin="round" opacity={hp} />
			</g>
		);
	};
	const mx = (xl + xr) / 2;
	return (
		<g opacity={o}>
			{box(x, wN, NLines, NAVY_T, NAVY_SOFT, NAt)}
			{box(xr, wn, nLines, AMB_T, AMB_SOFT, nAt)}
			{arrow([xr - 8, yT], [xl + 8, yT], mulAt)}
			<Sx x={mx} y={yT - 14} text="× N_A" size={as} color={VIO_T} anchor="middle" weight={800} at={mulAt + 6} />
			{arrow([xl + 8, yB], [xr - 8, yB], divAt)}
			<Sx x={mx} y={yB + as * 0.95} text="÷ N_A" size={as} color={VIO_T} anchor="middle" weight={800} at={divAt + 6} />
			{hiMul !== undefined ? <PenRing cx={mx} cy={yT - as * 0.3} rx={gap * 0.42} ry={as * 0.85} at={hiMul} color={VIO_S} seed={4} /> : null}
			{hiDiv !== undefined ? <PenRing cx={mx} cy={yB + as * 0.5} rx={gap * 0.42} ry={as * 0.85} at={hiDiv} color={VIO_S} seed={7} /> : null}
		</g>
	);
};
/** The small bridge kept at the top right from scene 6 onward. */
export const SMALL_BRIDGE: BridgeG = {x: 1010, y: 22, wN: 340, wn: 304, h: 82, gap: 170, size: 30};
export const SmallBridge: React.FC<{hiMul?: number; hiDiv?: number; o?: number; at?: number}> = ({hiMul, hiDiv, o = 1, at = -1000}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	return <Bridge g={SMALL_BRIDGE} NLines={['N: number of particles']} nLines={['n: amount (mol)']} hiMul={hiMul} hiDiv={hiDiv} o={v} arrowSize={30} />;
};

// ---------- the n slider ----------
export const nX = (x0: number, x1: number, n: number, max = 3) => x0 + (n / max) * (x1 - x0);
export const NSlider: React.FC<{x0: number; x1: number; y: number; n: number; max?: number; o?: number}> = ({x0, x1, y, n, max = 3, o = 1}) => {
	if (o <= 0.005) return null;
	const hx = nX(x0, x1, n, max);
	const ticks = Array.from({length: max * 2 + 1}, (_, i) => i / 2);
	return (
		<g opacity={o}>
			<rect x={x0 - 12} y={y - 10} width={x1 - x0 + 24} height={20} rx={10} fill="#ede4d3" stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
			<rect x={x0 - 12} y={y - 10} width={hx - x0 + 12} height={20} rx={10} fill={AMB_S} />
			{ticks.map(t => (
				<g key={t}>
					<line x1={nX(x0, x1, t, max)} x2={nX(x0, x1, t, max)} y1={y + 18} y2={y + (t % 1 ? 30 : 38)} stroke={INK} strokeWidth={3} />
					{t % 1 === 0 ? <Sx x={nX(x0, x1, t, max)} y={y + 76} text={`${t}`} size={34} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
				</g>
			))}
			<Sx x={x1 + 40} y={y + 76} text="mol" size={34} color={AMB_T} weight={800} at={-1000} />
			<circle cx={hx} cy={y} r={26} fill={PAPER} stroke={AMB_T} strokeWidth={6} />
			<circle cx={hx} cy={y} r={9} fill={AMB_T} />
		</g>
	);
};

// ---------- the counting dial ----------
export const Dial: React.FC<{cx: number; cy: number; r: number; turns: number; o?: number}> = ({cx, cy, r, turns, o = 1}) => {
	if (o <= 0.005) return null;
	const a = turns * Math.PI * 2 - Math.PI / 2;
	return (
		<g opacity={o}>
			<circle cx={cx} cy={cy} r={r} fill={PAPER} stroke={INK} strokeWidth={6} />
			{Array.from({length: 60}, (_, i) => {
				const t = (i / 60) * Math.PI * 2, big = i % 5 === 0;
				return <line key={i} x1={cx + Math.cos(t) * r * (big ? 0.82 : 0.89)} y1={cy + Math.sin(t) * r * (big ? 0.82 : 0.89)} x2={cx + Math.cos(t) * r * 0.95} y2={cy + Math.sin(t) * r * 0.95} stroke={INK} strokeWidth={big ? 5 : 2.5} />;
			})}
			<line x1={cx} y1={cy} x2={cx + Math.cos(a) * r * 0.78} y2={cy + Math.sin(a) * r * 0.78} stroke={NAVY_T} strokeWidth={8} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={12} fill={NAVY_T} />
		</g>
	);
};

// ---------- power-of-ten strip ----------
/** A strip with ticks 10^0 .. 10^max; marker at 10^m (from markAt). */
export const PowStrip: React.FC<{x: number; y: number; w: number; max?: number; m: number; markAt: number; label?: string; at?: number; out?: number; o?: number}> = ({x, y, w, max = 24, m, markAt, label, at = -1000, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.005) return null;
	const X = (e: number) => x + (e / max) * w;
	const mp = smooth(prog(f, markAt, 24));
	const mx = X(m * mp);
	return (
		<g opacity={v}>
			<line x1={x} x2={x + w} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{Array.from({length: max + 1}, (_, e) => (
				<g key={e}>
					<line x1={X(e)} x2={X(e)} y1={y - (e % 4 ? 10 : 18)} y2={y + (e % 4 ? 10 : 18)} stroke={INK} strokeWidth={e % 4 ? 2.5 : 4} />
					{e % 4 === 0 ? <Sx x={X(e)} y={y + 58} text={`10^{${e}}`} size={32} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
				</g>
			))}
			{f >= markAt ? (
				<g>
					<path d={`M${mx},${y - 16} l-16,-28 l32,0 Z`} fill={AMB_S} stroke={AMB_T} strokeWidth={3} />
					{label ? <Sx x={mx} y={y - 58} text={label} size={34} color={AMB_T} anchor="middle" weight={800} at={markAt + 18} /> : null}
				</g>
			) : null}
		</g>
	);
};

// ---------- beam balance outline ----------
/** A coded beam balance: pivot at (cx, cy), half-length L, tilt in degrees (positive: right side down). Returns the
 *  pan tops through the render prop. */
export const beamEnds = (cx: number, cy: number, L: number, tilt: number): [[number, number], [number, number]] => {
	const a = (tilt * Math.PI) / 180;
	return [[cx - L * Math.cos(a), cy - L * Math.sin(a)], [cx + L * Math.cos(a), cy + L * Math.sin(a)]];
};
export const Beam: React.FC<{cx: number; cy: number; L: number; tilt: number; o?: number; panW?: number}> = ({cx, cy, L, tilt, o = 1, panW = 300}) => {
	if (o <= 0.005) return null;
	const [l, r] = beamEnds(cx, cy, L, tilt);
	const pan = (p: [number, number]) => (
		<g>
			<line x1={p[0]} y1={p[1]} x2={p[0] - panW * 0.42} y2={p[1] + 70} stroke={INK} strokeWidth={3} />
			<line x1={p[0]} y1={p[1]} x2={p[0] + panW * 0.42} y2={p[1] + 70} stroke={INK} strokeWidth={3} />
			<path d={`M${p[0] - panW / 2},${p[1] + 70} Q${p[0]},${p[1] + 110} ${p[0] + panW / 2},${p[1] + 70} Z`} fill="#ede4d3" stroke={INK} strokeWidth={5} />
		</g>
	);
	return (
		<g opacity={o}>
			<path d={`M${cx - 70},${cy + 230} L${cx + 70},${cy + 230} L${cx + 16},${cy + 6} L${cx - 16},${cy + 6} Z`} fill="#d9d2c4" stroke={INK} strokeWidth={5} strokeLinejoin="round" />
			<line x1={l[0]} y1={l[1]} x2={r[0]} y2={r[1]} stroke={INK} strokeWidth={9} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={12} fill={INK} />
			{pan(l)}{pan(r)}
		</g>
	);
};

// ---------- framed memory card ----------
export const MemoryLine: React.FC<{x: number; y: number; w: number; h: number; size: number; atA?: number; atB?: number; title?: string}> = ({x, y, w, h, size, atA = -1000, atB = -1000, title = 'memory aid'}) => {
	const A = 'A mole is a count,', B = 'so always say a mole of what.';
	const ya = y + h / 2 + 6, yb = ya + size * 1.15;
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={24} fill={PAPER} stroke={INK} strokeWidth={4} />
			<rect x={x + 10} y={y + 10} width={w - 20} height={h - 20} rx={18} fill="none" stroke={INK} strokeWidth={2} />
			<Sx x={x + 34} y={y + 56} text={title} size={34} color={INK} hand weight={700} at={-1000} />
			{atA < -100 ? <Sx x={x + 40} y={ya} text={A} size={size} color={AMB_T} hand weight={700} at={-1000} /> : <Write x={x + 40} y={ya} text={A} at={atA} size={size} color={AMB_T} />}
			{atB < -100 ? <Sx x={x + 40} y={yb} text={B} size={size} color={NAVY_T} hand weight={700} at={-1000} /> : <Write x={x + 40} y={yb} text={B} at={atB} size={size} color={NAVY_T} />}
		</g>
	);
};
