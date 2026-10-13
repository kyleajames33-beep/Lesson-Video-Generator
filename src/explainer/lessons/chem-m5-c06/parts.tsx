// Drawing parts for the C6 lesson: givens card, expression builder with swappable rows, hot tube helpers,
// the one-molecule demo, coded vessel, dial and small icons. The ICE table itself is in ice.tsx.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_HAND, INK, INK_SOFT, Plate, prog} from '../../kit';
import {Arrow, Bracket, GasTube, Ring, smooth} from '../chem-m5-c04b/parts';
import {slotXY as tubeSlot} from '../chem-m5-c04b/parts';
import {H2C, H2_INK, HIC, HI_INK, I2C, I2_INK} from '../chem-m5-c04b/common';
import {ESC, Fade, Overlay, SvgText, TEAL} from '../chem-m5-c01/parts';
import {Chip, Cross, EqStrip, Sx, Tick, eqLayout, rowGeom, rowXs, TermView, tw} from '../chem-m5-c05/parts';
import type {EqItem, Term} from '../chem-m5-c05/parts';
import {CROSS, GLASS, GREEN, MINUS, PLUS} from './common';
import {NO2_BROWN, NO2_COLOURLESS} from './assets';

export {Arrow, Bracket, GasTube, Ring, smooth, ESC, Fade, Overlay, SvgText, TEAL, Chip, Cross, EqStrip, Sx, Tick, eqLayout, tw};
export type {EqItem, Term};
export {H2C, H2_INK, HIC, HI_INK, I2C, I2_INK};

// ---------- givens card ----------
export type CardLine = {text: string; at: number; color?: string; size?: number; ring?: number};
export const cardLineY = (y: number, i: number, lh = 60) => y + 108 + i * lh;
export const GivensCard: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; title?: string; lines: CardLine[]; lh?: number}> = ({x, y, w, h, at, out, title = 'givens', lines, lh = 60}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
		<Sx x={x + 28} y={y + 56} text={title} size={40} color={INK_SOFT} hand at={at} />
		{lines.map((l, i) => {
			const ly = cardLineY(y, i, lh);
			const size = l.size ?? 38;
			const wd = tw(l.text, size);
			return (
				<g key={i}>
					<Sx x={x + 28} y={ly} text={l.text} size={size} color={l.color ?? INK} weight={600} at={l.at} />
					{l.ring !== undefined ? <Ring cx={x + 28 + wd / 2} cy={ly - 12} rx={wd / 2 + 20} ry={28} at={l.ring} color={AMBER} seed={i + 2} width={5} /> : null}
				</g>
			);
		})}
	</Fade>
);

// ---------- expression builder with swappable rows ----------
/** Fraction with several numerator and denominator variants drawn at the same place; each term carries its own at/out. */
export const fracXW = (num: Term[][], den: Term[][], size: number) => Math.max(...num.map(v => rowGeom(v, size).total), ...den.map(v => rowGeom(v, size).total)) + size * 0.5;
export const FracX: React.FC<{cx: number; cy: number; size?: number; num: Term[][]; den: Term[][]; barAt: number; barOut?: number; barColor?: string; prefix?: string; prefixAt?: number; prefixColor?: string; prefixSize?: number; hold?: number}> = ({cx, cy, size = 60, num, den, barAt, barOut, barColor = INK, prefix, prefixAt, prefixColor = INK, prefixSize, hold}) => {
	const f = useCurrentFrame();
	const W = hold ?? fracXW(num, den, size);
	const o = barOut === undefined ? 1 : 1 - prog(f, barOut, 10);
	const yn = cy - size * 0.36, yd = cy + size * 1.1;
	return (
		<g opacity={o}>
			<DrawPath d={`M${cx - W / 2},${cy} L${cx + W / 2},${cy}`} at={barAt} dur={14} width={size * 0.075} color={barColor} />
			{prefix ? <Sx x={cx - W / 2 - size * 0.3} y={cy + size * 0.3} anchor="end" text={prefix} size={prefixSize ?? size} color={prefixColor} at={prefixAt ?? barAt} /> : null}
			{num.map((v, k) => { const xs = rowXs(v, size, cx, 'middle'); return v.map((m, i) => <TermView key={`n${k}-${i}`} m={m} x={xs[i].x} y={yn} size={size} />); })}
			{den.map((v, k) => { const xs = rowXs(v, size, cx, 'middle'); return v.map((m, i) => <TermView key={`d${k}-${i}`} m={m} x={xs[i].x} y={yd} size={size} />); })}
		</g>
	);
};

/** Hand-drawn square root sign over a span. */
export const Radical: React.FC<{x: number; y: number; w: number; h: number; at: number; color?: string}> = ({x, y, w, h, at, color = AMBER_INK}) => (
	<DrawPath d={`M${x},${y + h * 0.58} L${x + h * 0.16},${y + h * 0.5} L${x + h * 0.36},${y + h} L${x + h * 0.66},${y} L${x + w},${y}`} at={at} dur={22} color={color} width={6} />
);

// ---------- hot tube with changing counts ----------
export const TUBE = {w: 140, h: 330, seed: 7};
export const HotTube: React.FC<{x: number; y: number; counts: {h: number; i: number; hi: number}; reveal?: number}> = ({x, y, counts, reveal = 1}) => (
	<GasTube x={x} y={y} w={TUBE.w} h={TUBE.h} counts={counts} seed={TUBE.seed} reveal={reveal} clamps={false} />
);
/** Absolute position of dot k of the given type (0 H2, 1 I2, 2 HI) in the tube at frame f. */
export const tubeDot = (x: number, y: number, type: number, k: number, f: number): [number, number] => {
	const {w, h, seed} = TUBE;
	const rx = Math.min(w, h) * 0.45;
	const ax = ((w - 2 * rx * 0.55) / 2) * 0.95 - 14, ay = ((h - 2 * rx * 0.55) / 2) * 0.95 - 14;
	const p = tubeSlot(seed, type, k, f, x + w / 2, y + h / 2, ax, ay);
	return [p.x, p.y];
};
export const TubeScale: React.FC<{x: number; y: number; at: number; text?: string}> = ({x, y, at, text = '1 dot = 0.05 mol/L'}) => (
	<Fade at={at}>
		<circle cx={x} cy={y} r={9} fill={H2C} stroke={H2_INK} strokeWidth={2.5} />
		<SvgText x={x + 16} y={y + 10} text="H_2" size={30} hand={false} weight={600} at={at} />
		<circle cx={x + 86} cy={y} r={11} fill={I2C} stroke={INK} strokeWidth={2.5} />
		<SvgText x={x + 104} y={y + 10} text="I_2" size={30} hand={false} weight={600} at={at} color={I2_INK} />
		<circle cx={x + 170} cy={y} r={9} fill={HIC} stroke={HI_INK} strokeWidth={2.5} />
		<SvgText x={x + 186} y={y + 10} text="HI" size={30} hand={false} weight={600} at={at} color={HI_INK} />
		<Sx x={x - 10} y={y + 52} text={text} size={38} color={INK_SOFT} hand at={at + 4} />
	</Fade>
);

/** One H2 and one I2 meet and become two HI (played once, slowly). */
export const MeetDemo: React.FC<{x: number; y: number; at: number; out?: number}> = ({x, y, at, out}) => {
	const f = useCurrentFrame();
	const u = Math.max(0, Math.min(1, (f - at) / 120));
	if (f < at) return null;
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	const a = smooth(Math.min(1, u / 0.45));
	const b = smooth(Math.max(0, (u - 0.55) / 0.45));
	const mx = x + 110;
	const hx = x + (mx - x) * a, ix = x + 220 + (mx - x - 220) * a;
	return (
		<g opacity={o * prog(f, at, 10)}>
			{u < 0.5 ? (
				<>
					<circle cx={hx} cy={y} r={14} fill={H2C} stroke={H2_INK} strokeWidth={3} />
					<circle cx={ix} cy={y} r={18} fill={I2C} stroke={INK} strokeWidth={3} />
				</>
			) : null}
			{u >= 0.45 && u < 0.58 ? <circle cx={mx} cy={y} r={20 + (u - 0.45) * 220} fill="none" stroke={AMBER} strokeWidth={6} opacity={1 - (u - 0.45) / 0.13} /> : null}
			{u >= 0.5 ? (
				<>
					<circle cx={mx - 34 * b} cy={y - 40 * b} r={15} fill={HIC} stroke={HI_INK} strokeWidth={3} />
					<circle cx={mx + 34 * b} cy={y + 40 * b} r={15} fill={HIC} stroke={HI_INK} strokeWidth={3} />
				</>
			) : null}
			<Sx x={x - 4} y={y + 86} text="one H_2 meets one I_2" size={34} color={INK_SOFT} hand at={at + 4} out={at + 66} />
			<Sx x={x - 4} y={y + 86} text="1 H_2 + 1 I_2 make 2 HI" size={34} color={TEAL} hand at={at + 70} />
		</g>
	);
};

// ---------- vessel for the N2O4 question (painted pair, HTML: place it after the Overlay) ----------
const V_NAT: [number, number] = [1280, 1920];
const V_BOX: [number, number, number, number] = [305, 331, 669, 1332];
export const NO2Vessel: React.FC<{x: number; y: number; h: number; tint: number; at: number}> = ({x, y, h, tint, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 16);
	if (o <= 0.01) return null;
	const w = (V_BOX[2] / V_BOX[3]) * h;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o}}>
			<Plate src={NO2_COLOURLESS} natural={V_NAT} crop={V_BOX} width={w} style={{left: 0, top: 0}} />
			{tint > 0 ? <Plate src={NO2_BROWN} natural={V_NAT} crop={V_BOX} width={w} style={{left: 0, top: 0, opacity: Math.min(1, tint)}} /> : null}
		</div>
	);
};

// ---------- colour dial ----------
export const Dial: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; settle: number; label: string; labelAt: number}> = ({cx, cy, r, at, out, settle, label, labelAt}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	if (o <= 0.01) return null;
	const wob = Math.exp(-Math.max(0, f - settle) / 14) * Math.sin((f - settle) * 0.6) * (f >= settle ? 6 : 0);
	const u = prog(f, at + 6, Math.max(8, settle - at));
	const ang = (-150 + 120 * 0.62 * u + wob) * (Math.PI / 180);
	const arc = (a0: number, a1: number) => {
		const p = (a: number) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)];
		const [x0, y0] = p(a0), [x1, y1] = p(a1);
		return `M${x0},${y0} A${r},${r} 0 0 1 ${x1},${y1}`;
	};
	return (
		<g opacity={o}>
			<circle cx={cx} cy={cy} r={r + 34} fill="#fffdf8" stroke={INK} strokeWidth={5} />
			<path d={arc(-150, -30)} stroke="#f2e6a0" strokeWidth={22} fill="none" strokeLinecap="round" />
			<path d={arc(-150, -150 + 120 * 0.62)} stroke="#9fc43a" strokeWidth={22} fill="none" strokeLinecap="round" opacity={prog(f, at + 10, 40)} />
			<path d={`M${cx},${cy} L${cx + (r - 6) * Math.cos(ang)},${cy + (r - 6) * Math.sin(ang)}`} stroke={AMBER_INK} strokeWidth={7} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={10} fill={INK} />
			<Sx x={cx} y={cy + r + 80} text="colour sensor" size={34} color={INK_SOFT} anchor="middle" hand at={at + 4} />
			<Sx x={cx} y={cy + r + 130} text={label} size={46} color={GREEN} anchor="middle" hand at={labelAt} />
		</g>
	);
};

// ---------- small icons ----------
export const FurnaceIcon: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const flick = 1 + 0.08 * Math.sin(f * 0.5);
	return (
		<Fade at={at}>
			<rect x={x} y={y} width={150} height={120} rx={10} fill="#d9a07a" stroke={INK} strokeWidth={5} />
			<path d={`M${x + 38},${y + 120} L${x + 38},${y + 62} Q${x + 75},${y + 22} ${x + 112},${y + 62} L${x + 112},${y + 120} Z`} fill="#3b2a22" stroke={INK} strokeWidth={4} />
			<g transform={`translate(${x + 75},${y + 114}) scale(1,${flick})`}>
				<path d="M0,0 Q-24,-18 -8,-44 Q-4,-24 8,-30 Q22,-14 0,0 Z" fill={AMBER} stroke={AMBER_INK} strokeWidth={3} />
			</g>
			<rect x={x + 170} y={y + 44} width={170} height={30} rx={15} fill={GLASS} stroke={INK} strokeWidth={4.5} />
			<rect x={x + 176} y={y + 50} width={158} height={18} rx={9} fill="#c9ccd2" opacity={0.6} />
			<path d={`M${x + 150},${y + 59} L${x + 172},${y + 59}`} stroke={INK} strokeWidth={5} />
		</Fade>
	);
};

export const MiniIce: React.FC<{x: number; y: number; w?: number; at: number; litRows?: [number, number][]}> = ({x, y, w = 190, at, litRows = []}) => {
	const f = useCurrentFrame();
	const rh = 34;
	return (
		<Fade at={at}>
			{litRows.map(([row, litAt], i) => <rect key={i} x={x + 2} y={y + row * rh + 2} width={w - 4} height={rh - 4} rx={6} fill="#f6d77a" opacity={0.7 * prog(f, litAt, 10)} />)}
			<rect x={x} y={y} width={w} height={rh * 3} rx={8} fill="none" stroke={INK} strokeWidth={4} />
			{[1, 2].map(k => <path key={k} d={`M${x},${y + k * rh} L${x + w},${y + k * rh}`} stroke={INK} strokeWidth={3} />)}
			<path d={`M${x + w * 0.32},${y} L${x + w * 0.32},${y + 3 * rh}`} stroke={INK} strokeWidth={3} />
			{['I', 'C', 'E'].map((t, k) => <text key={t} x={x + w * 0.16} y={y + k * rh + 26} textAnchor="middle" fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}}>{t}</text>)}
		</Fade>
	);
};

/** Dots that reveal one by one in a row. */
export const DotRow: React.FC<{x: number; y: number; n: number; gap: number; r: number; fill: string; stroke?: string; at: number; every?: number; opacity?: number}> = ({x, y, n, gap, r, fill, stroke = INK, at, every = 4, opacity = 1}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={opacity}>
			{Array.from({length: n}, (_, i) => {
				const p = prog(f, at + i * every, 8);
				return p > 0.01 ? <circle key={i} cx={x + i * gap} cy={y} r={r * p} fill={fill} stroke={stroke} strokeWidth={2.5} /> : null;
			})}
		</g>
	);
};

/** Dashed tag pill, e.g. "illustrative values". */
export const Tag: React.FC<{x: number; y: number; w: number; text: string; at: number; out?: number; color?: string; size?: number}> = ({x, y, w, text, at, out, color = INK_SOFT, size = 32}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={size + 24} rx={(size + 24) / 2} fill="#fffdf8" stroke={color} strokeWidth={2.5} strokeDasharray="8 6" />
		<Sx x={x + w / 2} y={y + size + 6} text={text} size={size} color={color} anchor="middle" hand at={at} />
	</Fade>
);

/** Slide a group in from the right (camera push) and/or out to the left. */
export const Push: React.FC<{inAt?: number; outAt?: number; children: React.ReactNode}> = ({inAt, outAt, children}) => {
	const f = useCurrentFrame();
	const pin = inAt === undefined ? 1 : smooth(Math.max(0, Math.min(1, (f - inAt) / 26)));
	const pout = outAt === undefined ? 0 : smooth(Math.max(0, Math.min(1, (f - outAt) / 26)));
	return <g transform={`translate(${(1 - pin) * 420 - pout * 420},0)`} opacity={pin * (1 - pout)}>{children}</g>;
};
void ESC; void MINUS; void PLUS; void CROSS; void Arrow; void Bracket; void DrawPath;
