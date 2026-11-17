// Lesson parts for math-a12-t03 (Revision 4: building a periodic model of a tide, then a Ferris wheel), on the maths
// studio kit, t01's and t02's parts (imported read-only: the board parts, colour roles, the tide board with its
// water band, t02's final frame) and d05's Ferris wheel plates and ReadStrip (read-only). Lesson-local rigs:
// - TideRig: one time cursor drives the water band on the painted board, a dot on the graph, the graph pen and the
//   readout strip; the midline, amplitude bars and a level line are drawn on the board and the graph together;
//   `lay` morphs from t02's final-frame layout (0) to this lesson's board-graph-column layout (1);
// - Wheel: d05's rim on the kit's RotatingPlate with small upright cabins and a coded ground line (the stand is
//   clipped at the ground: root decision 60, never stretched), the marked cabin starting at the bottom;
// - SlotEq: "h(t) = k cos(at) + c" with role-coloured slots that fill one at a time.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CARD, CARD_SHADOW, FrameSvg, LiveReadoutBoard, StudioPlot, SvgPlate, fnPath, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';
import {FerrisWheel, GONDOLA, GONDOLA_MARKED, ReadStrip, STAND, seatAt} from '../math-a12-d05/parts';
import {AR, CR, FONT_DISPLAY, GREY, INK, KR, Lb, PI, TIDE, TIDE_WIN, tideRow} from '../math-a12-t02/parts';

export * from '../math-a12-t02/parts';
export {T02FinalFrame} from '../math-a12-t02/s3';
export {FerrisWheel, ReadStrip, seatAt};

// ---------- the tide model ----------
export const hM = (t: number) => 3 * Math.cos((PI * t) / 6) + 4.5;
export const dhM = (t: number) => -0.5 * PI * Math.sin((PI * t) / 6);
const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
/** Board and graph geometry at layout u (0: t02's final frame; 1: this lesson's board, graph and right column). */
export const tideLay = (u: number) => ({
	bx: lerp(80, 60, u), by: lerp(170, 180, u), bw: lerp(280, 200, u),
	gx: lerp(820, 290, u), gy: lerp(180, 190, u), gw: lerp(1040, 900, u), gh: lerp(600, 570, u),
});
export const TL1 = tideLay(1);
/** Frame y of a water level hm on the painted board (its own measured, slightly uneven scale). */
export const boardY = (by: number, bw: number, hm: number) => by + (tideRow(hm) - TIDE.box[1]) * (bw / (TIDE.box[2] - TIDE.box[0]));
export type TideRigProps = {
	t: number; lay?: number; h?: number; drawTo?: number; drawFrom?: number; trail?: {from: number; to: number; o: number}; cursor?: number;
	dots?: readonly {t: number; h: number; o: number; label?: string; hollow?: boolean}[];
	mid?: number; amp?: number; level?: {h: number; o: number; label?: string}; readout?: {old: number; strip: number};
	children?: (m: PlotMap) => React.ReactNode;
};
/** The tide stage on one clock: board with its water band, graph with cursor and pen, and the readouts. */
export const TideRig: React.FC<TideRigProps> = ({t, lay = 1, h, drawTo = 0, drawFrom = 0, trail, cursor = 0, dots = [], mid = 0, amp = 0, level, readout = {old: 0, strip: 1}, children}) => {
	const L = tideLay(lay);
	const hh = h ?? hM(t);
	const s = L.bw / (TIDE.box[2] - TIDE.box[0]);
	const bY = (v: number) => boardY(L.by, L.bw, v);
	const bR = L.bx + L.bw + 16;
	const tm = ((t % 12) + 12) % 12;
	const rising = Math.sin((PI * t) / 6) < -1e-6;
	return <>
		<TideBoardLocal x={L.bx} y={L.by} w={L.bw} h={hh} />
		<FrameSvg>
			{mid > 0.01 ? <g opacity={mid}><line x1={L.bx - 30} x2={bR + 10} y1={bY(4.5)} y2={bY(4.5)} stroke={CR.stroke} strokeWidth={5} strokeDasharray="14 9" /></g> : null}
			{amp > 0.01 ? <g opacity={amp}><line x1={bR} x2={bR} y1={bY(4.5)} y2={bY(7.5)} stroke={KR.stroke} strokeWidth={9} strokeLinecap="round" /><line x1={bR + 18} x2={bR + 18} y1={bY(4.5)} y2={bY(1.5)} stroke={KR.stroke} strokeWidth={9} strokeLinecap="round" />
				<text x={bR + 32} y={(bY(4.5) + bY(7.5)) / 2 + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: KR.ink}}>3</text><text x={bR + 32} y={(bY(4.5) + bY(1.5)) / 2 + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: KR.ink}}>3</text></g> : null}
			{level && level.o > 0.01 ? <line x1={L.bx - 30} x2={bR + 10} y1={bY(level.h)} y2={bY(level.h)} stroke={KR.stroke} strokeWidth={5} strokeDasharray="14 9" opacity={level.o} /> : null}
		</FrameSvg>
		<StudioPlot x={L.gx} y={L.gy} width={L.gw} height={L.gh} window={TIDE_WIN} xTicks={[2, 4, 6, 8, 10, 12]} yTicks={[2, 4, 6, 8]} xLabel="t (hours)" yLabel="h (m)" at={-300}>
			{m => <>
				{mid > 0.01 ? (() => {const [a, y] = m.p(TIDE_WIN.x[0], 4.5), [b] = m.p(TIDE_WIN.x[1], 4.5); return <g opacity={mid}><line x1={a} x2={b} y1={y} y2={y} stroke={CR.stroke} strokeWidth={5} strokeDasharray="16 10" /><Lb at={[b - 6, y + 40]} o={1} anchor="end" color={CR.ink} size={32}>midline 4.5</Lb></g>;})() : null}
				{amp > 0.01 ? <g opacity={amp}>{[[0, 7.5], [6, 1.5]].map(([T, H]) => <line key={T} x1={m.p(T, 0)[0] + (T ? 0 : 14)} x2={m.p(T, 0)[0] + (T ? 0 : 14)} y1={m.p(0, 4.5)[1]} y2={m.p(0, H)[1]} stroke={KR.stroke} strokeWidth={10} strokeLinecap="round" />)}<Lb at={[m.p(0, 0)[0] + 32, m.p(0, 6.2)[1]]} o={1} anchor="start" color={KR.ink} size={32}>3</Lb><Lb at={[m.p(6, 0)[0] + 20, m.p(0, 3)[1]]} o={1} anchor="start" color={KR.ink} size={32}>3</Lb></g> : null}
				{trail && trail.o > 0.01 && trail.to > trail.from ? <g clipPath={m.clip} opacity={trail.o}><path d={fnPath(m, hM, trail.from, trail.to, 300)} stroke={GREY} strokeWidth={6} strokeDasharray="2 12" strokeLinecap="round" fill="none" /></g> : null}
				{drawTo > drawFrom + 0.001 ? <g clipPath={m.clip}><path d={fnPath(m, hM, drawFrom, drawTo, 400)} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" /></g> : null}
				{level && level.o > 0.01 ? (() => {const [a, y] = m.p(TIDE_WIN.x[0], level.h), [b] = m.p(TIDE_WIN.x[1], level.h); return <g opacity={level.o}><line x1={a} x2={b} y1={y} y2={y} stroke={KR.stroke} strokeWidth={5} strokeDasharray="16 10" />{level.label ? <Lb at={[b - 6, y - 14]} o={1} anchor="end" color={KR.ink} size={34}>{level.label}</Lb> : null}</g>;})() : null}
				{dots.map((d, i) => d.o > 0.01 ? <g key={i} opacity={d.o}><circle cx={m.p(d.t, d.h)[0]} cy={m.p(d.t, d.h)[1]} r={14} fill={d.hollow ? CARD : INK} stroke={d.hollow ? INK : CARD} strokeWidth={5} />
					{d.label ? <Lb at={[m.p(d.t, d.h)[0] + (d.t > 9 ? -24 : 24), m.p(d.t, d.h)[1] + (d.h > 4 ? 44 : -22)]} o={1} anchor={d.t > 9 ? 'end' : 'start'} size={34}>{d.label}</Lb> : null}</g> : null)}
				{cursor > 0.01 ? (() => {const [px, py] = m.p(tm, hM(tm)), [, by] = m.p(tm, 0); return <g opacity={cursor}><line x1={px} x2={px} y1={py} y2={by} stroke={GREY} strokeWidth={3} strokeDasharray="8 7" /><circle cx={px} cy={py} r={13} fill="#2f6f88" stroke={CARD} strokeWidth={4} /></g>;})() : null}
				{children ? children(m) : null}
			</>}
		</StudioPlot>
		{readout.old > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: readout.old}}><LiveReadoutBoard x={410} y={200} width={390} at={-300} inline rows={[{label: 'time t', value: t, digits: 1, unit: 'h', role: 'a'}, {label: 'water level h', value: hh, digits: 1, unit: 'm', role: 'height'}]} /></div> : null}
		{readout.strip > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: readout.strip}}><ReadStrip x={TL1.gx} y={812} w={TL1.gw} cells={[{label: 'time t', text: t.toFixed(2), unit: 'h', color: AR.ink}, {label: 'water level h', text: hh.toFixed(2), unit: 'm'}, {label: 'the water is', text: Math.abs(Math.sin((PI * t) / 6)) < 0.02 ? (Math.cos((PI * t) / 6) > 0 ? 'high' : 'low') : rising ? 'rising' : 'falling'}]} /></div> : null}
	</>;
};
/** t02's board with its water band (the same drawing as t02's TideBoard, kept local so the board overlays can sit on it). */
const TideBoardLocal: React.FC<{x: number; y: number; w: number; h: number}> = ({x, y, w, h}) => {
	const s = w / (TIDE.box[2] - TIDE.box[0]);
	const wy = y + (tideRow(h) - TIDE.box[1]) * s, bot = y + (TIDE.box[3] - TIDE.box[1]) * s + 10;
	return <FrameSvg>
		<SvgPlate plate={TIDE} x={x} y={y} w={w} />
		<rect x={x - 60 * (w / 280)} y={wy} width={w + 120 * (w / 280)} height={Math.max(0, bot - wy)} fill="#5f9fb8" opacity={0.42} />
		<line x1={x - 60 * (w / 280)} x2={x + w + 60 * (w / 280)} y1={wy} y2={wy} stroke="#2f6f88" strokeWidth={5} />
	</FrameSvg>;
};

// ---------- the slot equation ----------
/** "h(t) = k cos(at) + c" with role-coloured slots: each shows its letter until its fill frame, then its value. */
export const SlotEq: React.FC<{x: number; y: number; k: {at: number; v: string}; a: {at: number; v: string}; c: {at: number; v: string}; at?: number; size?: number; frame?: number; lhs?: string}> = ({x, y, k, a, c, at = -30, size = 46, frame, lhs = 'h(t)'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, undefined, 12);
	if (o <= 0.001) return null;
	const slot = (s: {at: number; v: string}, letter: string, col: {ink: string; stroke: string; soft: string}) => {const filled = f >= s.at; return <span style={{display: 'inline-block', minWidth: size * 0.8, textAlign: 'center', padding: '0 8px', margin: '0 3px', borderRadius: 10, border: `3px ${filled ? 'solid' : 'dashed'} ${col.stroke}`, background: filled ? col.soft : 'transparent', color: col.ink}}>{filled ? s.v : letter}</span>;};
	const green = frame !== undefined && f >= frame;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, border: green ? '5px solid #2e7d4f' : '2.5px solid rgba(60,45,20,0.12)', padding: '6px 20px 10px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>
		{lhs} = {slot(k, 'k', KR)}cos({slot(a, 'a', AR)}t) + {slot(c, 'c', CR)}
	</div>;
};

// ---------- the Ferris wheel (d05's plates) ----------
const PIVOT: [number, number] = [543, 302];
/**
 * d05's rim turning on its hub, small upright cabins (marked cabin starting at the bottom, `turn` radians on), the
 * stand clipped at a coded ground line 1.2 R below the hub (centre 12 m, radius 10 m).
 */
export const Wheel: React.FC<{cx: number; cy: number; R: number; turn: number; o?: number}> = ({cx, cy, R, turn, o = 1}) => {
	if (o <= 0.01) return null;
	const ang = -PI / 2 + turn;
	const s = R / 500, gw = 0.17 * R, gs = gw / (GONDOLA.box[2] - GONDOLA.box[0]);
	const ground = cy + 1.2 * R;
	const sw = (STAND.box[2] - STAND.box[0]) * s;
	const cab = (k: number) => {const a = ang + (k * PI) / 4, [px, py] = seatAt(cx, cy, R, a); return <SvgPlate key={k} plate={k === 0 ? GONDOLA_MARKED : GONDOLA} x={px - (PIVOT[0] - GONDOLA.box[0]) * gs} y={py - (PIVOT[1] - GONDOLA.box[1]) * gs} w={gw} />;};
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg>
			<defs><clipPath id="t03-ground"><rect x={0} y={0} width={1920} height={ground} /></clipPath></defs>
			<g clipPath="url(#t03-ground)"><SvgPlate plate={STAND} x={cx - (439 - STAND.box[0]) * s} y={cy - (757 - STAND.box[1]) * s} w={sw} /></g>
		</FrameSvg>
		<FerrisWheel cx={cx} cy={cy} R={R} angle={ang} cabins={false} stand={false} at={-300} />
		<FrameSvg>
			{[1, 2, 3, 4, 5, 6, 7, 0].map(cab)}
			<rect x={cx - 1.45 * R} y={ground} width={2.9 * R} height={18} fill="#cfc4ae" />
			<line x1={cx - 1.45 * R} x2={cx + 1.45 * R} y1={ground} y2={ground} stroke="#7a6e5a" strokeWidth={5} />
		</FrameSvg>
	</div>;
};
/** Frame y of a height h (m) on the wheel stage (hub at 12 m, R px per 10 m). */
export const wheelY = (cy: number, R: number, h: number) => cy - ((h - 12) * R) / 10;
export const hF = (t: number) => 12 - 10 * Math.cos((PI * t) / 30);
export type {PlateSpec};
