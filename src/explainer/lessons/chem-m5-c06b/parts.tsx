// C6b drawing parts: the check ruler, the hot iodine tube (I2 molecules and a few I atoms), the engine cylinder
// vignette and the two-shortcut card. Coded; painted plates (assets.ts HAVE6B) replace the glass and the cylinder.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {slotXY} from '../chem-m5-c04b/parts';
import {Fade, FracX, Radical, Ring, Sx, TEAL, Tick} from '../chem-m5-c06/parts';
import {ENGINE_PLATE, HAVE6B, IODINE_PLATE} from './assets';
import {H2K, HIK, I2FILL, IAT, IAT_INK, N2K, O2K} from './common';

const GLASS = '#eef5fa';

// ---------- check ruler: the start as a long bar, x as a sliver ----------
export type RulerProps = {
	x: number; y: number; w: number; h?: number; frac: number; at: number; out?: number;
	sliverAt: number; side?: 'start' | 'end'; color?: string; startLabel?: string; sliverLabel?: string;
	fiveAt?: number; fiveLabel?: string; overlayAt?: number; overlayLabel?: string; pctLabel?: string; pctAt?: number; labelSize?: number;
};
export const CheckRuler: React.FC<RulerProps> = ({x, y, w, h = 34, frac, at, out, sliverAt, side = 'end', color = I2FILL, startLabel, sliverLabel, fiveAt, fiveLabel, overlayAt, overlayLabel, pctLabel, pctAt, labelSize = 40}) => {
	const f = useCurrentFrame();
	const grow = prog(f, at, 26);
	const sw = Math.max(4, frac * w);
	const sx = side === 'end' ? x + w - sw : x;
	const sp = prog(f, sliverAt, 12);
	const ov = overlayAt === undefined ? 0 : prog(f, overlayAt, 20);
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w * grow} height={h} rx={h / 2} fill={color} opacity={0.82} stroke={INK} strokeWidth={3} />
			{startLabel ? <Sx x={x} y={y - 16} text={startLabel} size={labelSize} color={INK} hand at={at + 10} /> : null}
			{/* the sliver for x */}
			<rect x={sx} y={y - 6} width={sw} height={h + 12} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} opacity={sp} />
			{sliverLabel ? <Sx x={side === 'end' ? x + w + 14 : x} y={side === 'end' ? y + h * 0.8 : y + h + 52} text={sliverLabel} size={labelSize} color={AMBER_INK} hand at={sliverAt + 4} /> : null}
			{/* the start minus x, laid under the full bar: the same length to the eye */}
			{overlayAt !== undefined ? (
				<g opacity={ov}>
					<rect x={side === 'end' ? x : x + sw} y={y + h + 22} width={(w - sw) * ov} height={h} rx={h / 2} fill={color} opacity={0.55} stroke={INK} strokeWidth={3} strokeDasharray="10 6" />
					{overlayLabel ? <Sx x={x + w + 14} y={y + h + 22 + h * 0.8} text={overlayLabel} size={labelSize} color={TEAL} hand at={overlayAt + 10} /> : null}
				</g>
			) : null}
			{/* the dashed 5 per cent line, measured from the start of the bar */}
			{fiveAt !== undefined ? (
				<Fade at={fiveAt}>
					<DrawPath d={`M${x + 0.05 * w},${y - 34} L${x + 0.05 * w},${y + h + 8}`} at={fiveAt} dur={14} color={TEAL} width={4} dash="9 7" />
					{fiveLabel ? <Sx x={x + 0.05 * w + 14} y={y - 30} text={fiveLabel} size={labelSize * 0.85} color={TEAL} hand at={fiveAt + 8} /> : null}
				</Fade>
			) : null}
			{pctLabel && pctAt !== undefined ? <Sx x={x + 0.05 * w + 30} y={y + h + 52} text={pctLabel} size={labelSize} color={AMBER_INK} at={pctAt} /> : null}
		</Fade>
	);
};

// ---------- hot iodine tube: I2 molecules (paired dots) and a few single I atoms ----------
export const ITUBE = {w: 160, h: 360, seed: 11};
// Painted tube (c6b-hot-iodine-tube-v1, 1600x2400): glass body at plate y 456 to 1806, inner glass x 690 to 925,
// centre x 800. It is drawn at scale IP.s with the glass top at y + IP.top, so the gas column is narrower and taller
// than the coded stand-in; the particles use the inner glass.
const IP = {s: 0.33, cx: 800, gTop: 456, gBot: 1806, half: (925 - 690) / 2, top: 0, flameY: 1840};
const paintedTube = () => HAVE6B.has(IODINE_PLATE);
const gasBox = (x: number, y: number) => {
	const {w, h} = ITUBE;
	if (!paintedTube()) return {cx: x + w / 2, cy: y + h / 2, rx: w / 2 - 34, ry: h / 2 - 40};
	const top = y + IP.top, bot = top + (IP.gBot - IP.gTop) * IP.s;
	return {cx: x + w / 2, cy: (top + bot) / 2, rx: IP.half * IP.s - 19, ry: (bot - top) / 2 - 34};
};
const molAt = (x: number, y: number, i: number, f: number) => {
	const g = gasBox(x, y);
	return slotXY(ITUBE.seed, 1, i, f, g.cx, g.cy, g.rx, g.ry);
};
/** Where the "very hot" label goes: beside the flame on the painted tube, above the coded tube. */
export const iodineHotLabel = (x: number, y: number): {x: number; y: number; anchor: 'start' | 'middle'} =>
	paintedTube() ? {x: x + ITUBE.w / 2 + 28, y: y + IP.top + (IP.flameY - IP.gTop) * IP.s + 20, anchor: 'start'} : {x: x + ITUBE.w / 2, y: y - 18, anchor: 'middle'};
/** True when the painted tube is in use (callers move the key clear of its burner). */
export const iodinePainted = paintedTube;
export const IodineTube: React.FC<{x: number; y: number; nMol?: number; splitAt?: number; extraAtoms?: number; reveal?: number}> = ({x, y, nMol = 12, splitAt, extraAtoms = 0, reveal = 1}) => {
	const f = useCurrentFrame();
	if (reveal <= 0.01) return null;
	const {w, h, seed} = ITUBE;
	const painted = paintedTube();
	const u = splitAt === undefined ? 0 : prog(f, splitAt, 34);
	const pair = (cx: number, cy: number, a: number, key: string) => (
		<g key={key}>
			<circle cx={cx - Math.cos(a) * 8} cy={cy - Math.sin(a) * 8} r={10} fill={I2FILL} stroke={INK} strokeWidth={2.2} />
			<circle cx={cx + Math.cos(a) * 8} cy={cy + Math.sin(a) * 8} r={10} fill={I2FILL} stroke={INK} strokeWidth={2.2} />
		</g>
	);
	const atom = (cx: number, cy: number, key: string, r = 8) => <circle key={key} cx={cx} cy={cy} r={r} fill={IAT} stroke={IAT_INK} strokeWidth={2.2} />;
	const sp = molAt(x, y, 0, f);
	return (
		<g opacity={reveal}>
			{painted ? (
				<image href={staticFile(IODINE_PLATE)} x={x + w / 2 - IP.cx * IP.s} y={y + IP.top - IP.gTop * IP.s} width={1600 * IP.s} height={2400 * IP.s} />
			) : (
				<>
					<rect x={x} y={y} width={w} height={h} rx={w / 2} fill={GLASS} fillOpacity={0.6} />
					<rect x={x + 6} y={y + 6} width={w - 12} height={h - 12} rx={w / 2 - 6} fill="#e9dcf3" fillOpacity={0.75} />
					<rect x={x} y={y} width={w} height={h} rx={w / 2} fill="none" stroke={INK} strokeWidth={4.5} />
					<path d={`M${x + 16},${y + w * 0.5} L${x + 16},${y + h - w * 0.5}`} stroke="#fff" strokeOpacity={0.7} strokeWidth={6} strokeLinecap="round" />
					<path d={`M${x - 14},${y + h + 8} L${x + w + 14},${y + h + 8}`} stroke="#6c7279" strokeWidth={6} strokeLinecap="round" />
				</>
			)}
			{Array.from({length: nMol}, (_, i) => {
				if (i === 0 && splitAt !== undefined && f >= splitAt) return null;
				const p = molAt(x, y, i, f);
				return pair(p.x, p.y, i * 1.3 + f * 0.012, 'm' + i);
			})}
			{splitAt !== undefined && f >= splitAt ? (
				<g>
					{/* painted glass is narrow: the atoms part along the tube, not across it */}
					{painted ? atom(sp.x - 6 - 4 * u, sp.y - 8 - 40 * u, 'a0', 9) : atom(sp.x - 10 - 34 * u, sp.y - 6 - 20 * u, 'a0', 9)}
					{painted ? atom(sp.x + 6 + 4 * u, sp.y + 8 + 40 * u, 'a1', 9) : atom(sp.x + 10 + 34 * u, sp.y + 6 + 20 * u, 'a1', 9)}
					<circle cx={sp.x} cy={sp.y} r={26 + 30 * u} fill="none" stroke={AMBER} strokeWidth={5} opacity={1 - u} />
				</g>
			) : null}
			{Array.from({length: extraAtoms}, (_, i) => { const g = gasBox(x, y); const p = slotXY(seed, 2, i, f, g.cx, g.cy, g.rx + 4, g.ry + 4); return atom(p.x, p.y, 'e' + i); })}
		</g>
	);
};
/** Ring that follows the splitting molecule. */
export const splitPos = (x: number, y: number, f: number) => molAt(x, y, 0, f);
export const IodineKey: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => (
	<Fade at={at}>
		<circle cx={x - 8} cy={y} r={10} fill={I2FILL} stroke={INK} strokeWidth={2.2} />
		<circle cx={x + 8} cy={y} r={10} fill={I2FILL} stroke={INK} strokeWidth={2.2} />
		<Sx x={x + 28} y={y + 11} text="I_2 molecule" size={30} at={at} />
		<circle cx={x} cy={y + 52} r={9} fill={IAT} stroke={IAT_INK} strokeWidth={2.2} />
		<Sx x={x + 28} y={y + 63} text="I atom" size={30} at={at} color={IAT_INK} />
	</Fade>
);

// ---------- engine cylinder vignette (attempt) ----------
const EP = 0.267;
export const EngineCylinder: React.FC<{x: number; y: number; at: number; w?: number; h?: number}> = ({x, y, at, w = 250, h = 430}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 16);
	if (o <= 0.01) return null;
	const painted = HAVE6B.has(ENGINE_PLATE);
	const piston = y + h * 0.62 + 16 * Math.sin(f * 0.09);
	const spark = (Math.floor(f / 7) % 5 === 0 ? 1 : 0.25) * o;
	const gx = x + 26, gw = w - 52, gTop = y + 60;
	const dots: [number, number, string][] = [[0.2, 0.25, N2K], [0.55, 0.18, O2K], [0.8, 0.4, N2K], [0.3, 0.55, O2K], [0.65, 0.66, N2K], [0.15, 0.8, N2K], [0.45, 0.85, O2K], [0.82, 0.86, N2K]];
	return (
		<g opacity={o}>
			{painted ? (
				// Painted cutaway (c6b-engine-cylinder-v1, 1600x2400): object at plate y 284 to 2046, centre x 800,
				// combustion space about x 564 to 1038, y 642 to 894. N2 and O2 pairs jostle inside the hot gas.
				<g>
					<image href={staticFile(ENGINE_PLATE)} x={x + w / 2 - 800 * EP} y={y - 284 * EP} width={1600 * EP} height={2400 * EP} />
					{dots.slice(0, 6).map(([u, v, c], i) => {
						const bx = x + w / 2 + (590 - 800) * EP, by = y + (668 - 284) * EP, bw = (1012 - 590) * EP, bh = (870 - 668) * EP;
						const px = bx + 10 + u * (bw - 20) + 5 * Math.sin(f * 0.07 + i), py = by + 8 + v * (bh - 16) + 4 * Math.cos(f * 0.08 + i * 2);
						return <g key={i}><circle cx={px - 5} cy={py} r={6} fill={c} stroke={INK} strokeWidth={1.6} /><circle cx={px + 5} cy={py} r={6} fill={c} stroke={INK} strokeWidth={1.6} /></g>;
					})}
				</g>
			) : (
				<>
					{/* gas space above the piston */}
					<rect x={gx} y={gTop} width={gw} height={piston - gTop} fill="#f7efe2" />
					{dots.map(([u, v, c], i) => {
						const px = gx + u * gw + 6 * Math.sin(f * 0.05 + i), py = gTop + 10 + v * (piston - gTop - 20) + 5 * Math.cos(f * 0.06 + i * 2);
						return <g key={i}><circle cx={px - 6} cy={py} r={7} fill={c} stroke={INK} strokeWidth={1.8} /><circle cx={px + 6} cy={py} r={7} fill={c} stroke={INK} strokeWidth={1.8} /></g>;
					})}
					{/* cylinder walls and head */}
					<path d={`M${x + 20},${y + 50} L${x + 20},${y + h} M${x + w - 20},${y + 50} L${x + w - 20},${y + h}`} stroke={INK} strokeWidth={9} strokeLinecap="round" />
					<rect x={x} y={y + 30} width={w} height={30} rx={8} fill="#9aa0a6" stroke={INK} strokeWidth={4} />
					{/* spark plug and spark */}
					<rect x={x + w / 2 - 12} y={y - 18} width={24} height={50} rx={6} fill="#d8d2c6" stroke={INK} strokeWidth={3.5} />
					<path d={`M${x + w / 2 - 14},${y + 74} L${x + w / 2 + 4},${y + 88} L${x + w / 2 - 6},${y + 96} L${x + w / 2 + 14},${y + 112}`} fill="none" stroke={AMBER} strokeWidth={5} strokeLinecap="round" opacity={spark} />
					{/* piston and rod */}
					<rect x={x + 26} y={piston} width={w - 52} height={56} rx={6} fill="#b9bec4" stroke={INK} strokeWidth={4} />
					{[0.3, 0.55].map(k => <path key={k} d={`M${x + 26},${piston + 56 * k} L${x + w - 26},${piston + 56 * k}`} stroke="#6c7279" strokeWidth={2.5} />)}
					<path d={`M${x + w / 2},${piston + 56} L${x + w / 2 + 20},${y + h + 40}`} stroke="#6c7279" strokeWidth={14} strokeLinecap="round" />
				</>
			)}
			<Sx x={x + w / 2} y={y - 40} text="very hot engine" size={36} color="#c4582f" anchor="middle" hand at={at + 8} />
		</g>
	);
};

// ---------- the two-shortcut card ----------
export const ShortcutCard: React.FC<{x: number; y: number; w: number; h: number; at: number; leftAt: number; rightAt: number; leftLit?: [number, number]; rightLit?: [number, number]; thumbs?: boolean; size?: number}> = ({x, y, w, h, at, leftAt, rightAt, leftLit, rightLit, thumbs = true, size = 46}) => {
	const f = useCurrentFrame();
	const hw = (w - 24) / 2;
	const lit = (l?: [number, number]) => (l ? prog(f, l[0], 10) * (1 - prog(f, l[1], 12)) : 0);
	const half = (hx: number, a: number, l: number, title: string, l2: string, l3: string, thumb: React.ReactNode) => (
		<Fade at={a}>
			<rect x={hx} y={y} width={hw} height={h} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={3 + 2 * l} />
			{l > 0.01 ? <rect x={hx + 6} y={y + 6} width={hw - 12} height={h - 12} rx={18} fill="#f6d77a" opacity={0.22 * l} /> : null}
			<Sx x={hx + 30} y={y + size + 22} text={title} size={size} color={TEAL} hand at={a} />
			<Sx x={hx + 30} y={y + size * 2 + 32} text={l2} size={size * 0.86} color={INK} hand at={a + 8} />
			<Sx x={hx + 30} y={y + size * 2.8 + 40} text={l3} size={size * 0.66} color={INK_SOFT} weight={600} at={a + 14} />
			{thumbs ? thumb : null}
		</Fade>
	);
	const ty = y + h - 74;
	return (
		<Fade at={at}>
			{half(x, leftAt, lit(leftLit), 'Perfect square', '→ take the square root', 'keep the positive root', (
				<g>
					<FracX cx={x + 170} cy={ty} size={34} num={[[{t: '2x', br: false, at: leftAt + 16, color: HIK}]]} den={[[{t: '0.45 − x', br: false, at: leftAt + 16, color: H2K}]]} barAt={leftAt + 16} />
					<Sx x={x + 260} y={ty + 12} text="= 7" size={34} at={leftAt + 20} />
					<Radical x={x + 90} y={ty - 66} w={180} h={34} at={leftAt + 24} />
				</g>
			))}
			{half(x + hw + 24, rightAt, lit(rightLit), 'Tiny K, start not tiny', '→ drop the x, then check it', 'x under about 5% of the start', (
				<g>
					<rect x={x + hw + 54} y={ty - 10} width={hw - 80} height={24} rx={12} fill={I2FILL} opacity={0.8} stroke={INK} strokeWidth={2.5} />
					<rect x={x + hw + 54} y={ty - 16} width={5} height={36} fill={AMBER} stroke={AMBER_INK} strokeWidth={1.5} />
					<path d={`M${x + hw + 54 + 0.05 * (hw - 80)},${ty - 26} L${x + hw + 54 + 0.05 * (hw - 80)},${ty + 30}`} stroke={TEAL} strokeWidth={3} strokeDasharray="7 5" />
					<Sx x={x + hw + 54 + 0.05 * (hw - 80) + 12} y={ty + 50} text="5%" size={28} color={TEAL} hand at={rightAt + 18} />
				</g>
			))}
		</Fade>
	);
};
void Ring; void Tick;
