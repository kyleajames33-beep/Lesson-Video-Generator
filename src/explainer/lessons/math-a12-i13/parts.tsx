// Lesson parts for math-a12-i13 (Revision 3: integrals as models; a home's air conditioner on a hot day, a dam gate,
// a drainage channel and a sand trailer), built on the maths studio kit. Lesson-local rigs:
// - ACRig: the painted indoor unit (ma12-air-conditioner-v1) with its coded power and energy readout drawn in the
//   plate's measured clear wall rectangle [1230, 345, 1560, 505];
// - ChannelRig: the painted channel (ma12-drainage-channel-v1) with its centre line along Codex's measured near and
//   far centre points (721, 804) and (1370, 126), and a "30 m" length arrow;
// - TrailerPic: the reused box trailer with a coded sand stream (attempt 1).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK} from '../../kit';
import {CARD, FrameSvg, SvgPlate, plateMap, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';

export {AnswerBox, Attempt, BoxCard, Chip, FramedCard, GREEN, GREY, Line, MiniPlot, PLabel, RED, Tick} from '../math-a12-i06/parts';
export {Note, SegRow} from '../math-a12-i01/parts';
export {Int} from '../math-a12-i08/parts';
export const BLUE = '#1f6fb2';
export const AMB = '#9c5a00';
export const AMB_INK = '#7a4600';
export const TEAL = '#13767a';
export const VIO = '#6b4fa0';
export const TEAL_SOFT = '#d6eeee';
export const RED_SOFT = '#f6d3c4';
export const RED_INK = '#b8322a';
export const Bl: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: BLUE}}>{children}</span>;
export const Am: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: AMB_INK}}>{children}</span>;
export const Tl: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: TEAL}}>{children}</span>;

// ---------- the models (design: numbers used) ----------
export const P = (t: number) => 4 * Math.sin((Math.PI * t) / 12);
export const E = (t: number) => (48 / Math.PI) * (1 - Math.cos((Math.PI * t) / 12));
export const cost = (x: number) => 50 - 0.2 * x;
export const costSoFar = (x: number) => 50 * x - 0.1 * x * x - (5000 - 1000);
export const dam = (t: number) => 8 - 2 * t;
export const damNet = (t: number) => 8 * t - t * t;
export const damTotal = (t: number) => (t <= 4 ? damNet(t) : 16 + (damNet(4) - damNet(t)));
export const leftSum = (fn: (x: number) => number, a: number, b: number, n: number) => {const h = (b - a) / n; let s = 0; for (let i = 0; i < n; i++) s += fn(a + i * h) * h; return s;};
export const chanArea = (h: number) => (4 / 3) * h ** 1.5;
{
	const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
	const checks: [string, boolean][] = [
		['energy', near(E(12), 96 / Math.PI) && near(96 / Math.PI, 30.5577, 1e-4) && near(leftSum(P, 0, 12, 12), 30.383, 1e-3) && near(leftSum(P, 0, 12, 48), 30.547, 1e-3)],
		['cost', near(costSoFar(200), 2000) && near(costSoFar(100), 0)],
		['dam', near(damNet(6), 12) && near(damTotal(6), 20) && near(damNet(4), 16)],
		['channel', near(chanArea(1), 4 / 3) && near((4 / 3) * 30, 40) && near(2 - 2 / 3, 4 / 3) && near(chanArea(2), (8 * Math.SQRT2) / 3) && near(chanArea(2) / chanArea(1), 2 * Math.SQRT2)],
		['A1', near(3 * 36 - 216 / 3, 36) && near(9 * 6, 54)],
		['A2', near(0.75 * 8 ** (4 / 3), 12) && near(16 / 4, 4)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i13 numbers: ' + bad.join(', '));
}

// ---------- the plates (brief 238; Codex's measured anchors) ----------
export const AC: PlateSpec = {src: 'assets/maths/ma12-air-conditioner-v1.png', nat: [1754, 897], box: [155, 176, 1597, 744]};
export const CHANNEL: PlateSpec = {src: 'assets/maths/ma12-drainage-channel-v1.png', nat: [1619, 971], box: [124, 116, 1507, 871]};
export const TRAILER: PlateSpec = {src: 'assets/physics/phys-y11-box-trailer-v1.png', nat: [2000, 1000], box: [180, 312, 1819, 688]};
export const plateH = (p: PlateSpec, w: number) => (w * (p.box[3] - p.box[1])) / (p.box[2] - p.box[0]);

export const ACRig: React.FC<{x: number; y: number; w: number; t: number; at?: number; out?: number; energy?: boolean}> = ({x, y, w, t, at = -30, out, energy = true}) => {
	usePlatePreload([AC.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(AC, x, y, w);
	const [rx0, ry0] = m.at(1230, 345), [rx1, ry1] = m.at(1560, 505);
	const tt = Math.max(0, Math.min(12, t));
	const fs = Math.max(30, (ry1 - ry0) * 0.3);
	const cx = (rx0 + rx1) / 2, bw = Math.max(rx1 - rx0, fs * 5.4), bh = Math.max(ry1 - ry0, fs * (energy ? 2.75 : 1.6)), by = (ry0 + ry1) / 2 - bh / 2;
	return <FrameSvg style={{opacity: o}}>
		<SvgPlate plate={AC} x={x} y={y} w={w} />
		<rect x={cx - bw / 2} y={by} width={bw} height={bh} rx={10} fill={CARD} stroke={INK} strokeWidth={3} />
		<text x={cx} y={by + fs * 1.15} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs, fill: BLUE}}>{P(tt).toFixed(1)} kW</text>
		{energy ? <text x={cx} y={by + fs * 2.4} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs, fill: INK}}>{E(tt).toFixed(1)} kWh</text> : null}
	</FrameSvg>;
};

export const ChannelRig: React.FC<{x: number; y: number; w: number; centre?: number; length?: number; at?: number; out?: number}> = ({x, y, w, centre = 0, length = 0, at = -30, out}) => {
	usePlatePreload([CHANNEL.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(CHANNEL, x, y, w);
	const a = m.at(721, 804), b = m.at(1370, 126);
	const l0 = m.at(1180, 560), l1 = m.at(1500, 230);
	return <FrameSvg style={{opacity: o}}>
		<SvgPlate plate={CHANNEL} x={x} y={y} w={w} />
		{centre > 0.001 ? <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={INK} strokeWidth={4} strokeDasharray="14 10" opacity={centre} /> : null}
		{length > 0.001 ? <g opacity={length}>
			<line x1={l0[0]} y1={l0[1]} x2={l1[0]} y2={l1[1]} stroke={AMB} strokeWidth={5} />
			<text x={(l0[0] + l1[0]) / 2 + 20} y={(l0[1] + l1[1]) / 2 + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AMB_INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">30 m</text>
		</g> : null}
	</FrameSvg>;
};

/** Attempt 1's picture: the box trailer with a coded stream of sand falling into it (no numbers, no graph). */
export const TrailerPic: React.FC = () => {
	const f = useCurrentFrame();
	usePlatePreload([TRAILER.src]);
	const w = 800, h = 460, tw = 720;
	const th = plateH(TRAILER, tw);
	const tx = 40, ty = h - th - 20;
	const sx = tx + tw * 0.42, top = 30, bottom = ty + th * 0.22;
	return <div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0}}>
			<path d={`M${sx - 60},${top} L${sx + 60},${top} L${sx + 18},${top + 50} L${sx - 18},${top + 50} Z`} fill="#c8bfae" stroke={INK} strokeWidth={3} />
			<rect x={sx - 10} y={top + 50} width={20} height={bottom - top - 50} fill="#d9b77a" opacity={0.95} />
			{Array.from({length: 14}, (_, i) => {const yy = top + 50 + ((f * 6 + i * 23) % (bottom - top - 50)); return <circle key={i} cx={sx + ((i * 7) % 13) - 6} cy={yy} r={3} fill="#a07a3a" />;})}
			<SvgPlate plate={TRAILER} x={tx} y={ty} w={tw} />
		</svg>
	</div>;
};
