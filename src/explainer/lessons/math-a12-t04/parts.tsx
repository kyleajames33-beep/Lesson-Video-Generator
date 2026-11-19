// Lesson parts for math-a12-t04 (Revision 4: when a large range needs a logarithmic scale; a phone's storage on an
// ordinary ruler and a log ruler; decibels, earthquake magnitude, pH and star magnitudes), on the maths studio kit
// and t01's board parts (imported read-only through t03's parts). Lesson-local rigs:
// - StoreStage: t03's final frame (phone, linear storage ruler, piled pins) made live: the ruler rescales to 2 TB
//   (`ext`) and morphs to log10 positions (`p`) on one blended map, so points, ticks and labels move together;
// - MorphStrip: a data strip whose axis morphs between linear and log (scene 4: stars spread, heights squeeze);
// - DbStage: the log intensity axis over the teal decibel scale (0 dB under 10^-12, 120 dB under 10^0) with the
//   teal step span, the blue "x 10" tags that hop one per 10 dB, and the meter display following the span;
// - Seismo: a coded seismograph strip with a scale bar; the trace's wiggle scales by the live amplitude factor;
// - PhAxes: the vertical pH axis beside the [H+] log axis (pH 0 and 10^0 at the top);
// - T04Card: the framed memory card "ratio = 10^(step / number in front)", full or small;
// - T04Board: i05's rectangles frame (same geometry and timing props), the handoff and the final frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CARD, CARD_SHADOW, FrameSvg, HandTag, MATHS_SHARED_ANCHORS, MATHS_SHARED_PLATES, MATH_ROLES, PlateImg, PlateReadout, SceneHeading, StudioPlot, StripStepper, fnPath, smooth, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AnswerBox, BoxCard, BROWN, Chip, FramedCard, Hand, RED, Row, Slip, Task} from '../math-a12-t01/parts';
import {AMB, BoxCard as I05BoxCard, Chip as I05Chip, PLabel} from '../math-a12-i05/parts';

export {AnswerBox, BoxCard, BROWN, Chip, FramedCard, Hand, RED, Row, Slip, Task};
export {QStrip} from '../math-a12-t01/parts';
export {T03FinalFrame} from '../math-a12-t03/s3';
export {FONT_DISPLAY, FONT_HAND, INK};
export const PI = Math.PI;
export const GREY = '#6b6358';

// ---------- colour roles (fixed for t04) ----------
/** The number in front of the log (10, 1, −1, −2.5): amber. A step on a scale: teal. A ratio or factor: blue. */
export const NUM = MATH_ROLES.k, STEP = MATH_ROLES.b, RATIO = MATH_ROLES.a, GOODR = MATH_ROLES.answer;
const span = (c: string) => {
	const S: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: c}}>{children}</span>;
	return S;
};
export const Nc = span(NUM.ink), Sc = span(STEP.ink), Rc = span(RATIO.ink), Gc = span(GOODR.ink), Gy = span(GREY);
/** Subscript (log₁₀ is written with Unicode; this is for word subscripts such as I with "library"). */
export const Sb: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: 'max(0.66em, 28px)', verticalAlign: '-0.28em'}}>{children}</span>;
const SUP: Record<string, string> = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻', '.': '·'};
/** "10" with a Unicode superscript exponent. */
export const p10 = (e: number | string) => '10' + String(e).split('').map(c => SUP[c] ?? c).join('');

// ---------- plates (alpha > 20 boxes, measured 19 Nov from the files) ----------
export const PHONE: PlateSpec = {src: 'assets/maths/ma12-phone-v1.png', nat: [971, 1657], box: [138, 148, 830, 1524]};
export const METER: PlateSpec = MATHS_SHARED_PLATES.soundMeter;
export const METER_DISPLAY = MATHS_SHARED_ANCHORS.soundMeterDisplay;
export const PHM: PlateSpec = {src: 'assets/chemistry/m6-ph-meter-probe-beaker-v1.png', nat: [2048, 2048], box: [164, 239, 1883, 1809]};
/** pH meter screen: an axis-aligned rectangle inside the painted (slightly skewed) blank screen, measured 19 Nov from a gridded crop. */
export const PHM_SCREEN = [548, 1048, 985, 1222] as const;
export const STAR: PlateSpec = {src: 'assets/physics/y12p-star-white-v1.png', nat: [1254, 1254], box: [49, 63, 1175, 1193]};
export const TOWN: PlateSpec = {src: 'assets/maths/ma12-country-town-v1.png', nat: [1920, 819], box: [213, 175, 1723, 678]};
export const THERMO: PlateSpec = {src: 'assets/biology/m8-thermometer-v1.png', nat: [2000, 2000], box: [160, 468, 1840, 1532]};
export const T04_PLATES = [PHONE, METER, PHM, STAR, TOWN, THERMO];

const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
const TXT = (size: number, fill: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill});

// ---------- the storage stage (scenes 1 to 3; t03's final frame made live) ----------
export const RUL = {x: 520, y: 640, w: 1300};
/** Log end of the storage ruler (10²) and its right end (just past the 2 TB backup). */
export const LOG_LO = 2, LOG_HI = 12.7;
export type StorePt = {v: number; label: string; linLift: number; linLift2?: number; logLift: number; o?: number; glow?: number; pulse?: number};
export const STORE_PTS: StorePt[] = [
	{v: 1e3, label: 'text message ≈ 1 kB', linLift: 90, logLift: 90},
	{v: 3e6, label: 'photo ≈ 3 MB', linLift: 150, logLift: 150},
	{v: 4e9, label: 'film ≈ 4 GB', linLift: 210, logLift: 90},
	{v: 2.56e11, label: 'whole phone 256 GB', linLift: 90, linLift2: 270, logLift: 150},
	{v: 2e12, label: 'cloud backup 2 TB', linLift: 90, logLift: 210},
];
/** Blended map of the storage ruler: linear 0..linMax (bytes) at p = 0, log10 from 10² to 10^12.7 at p = 1. */
export const storeMap = (ext: number, p: number) => {
	const linMax = lerp(2.56e11, 2e12, smooth(ext)), e = smooth(p);
	const lin = (v: number) => RUL.x + (Math.max(0, v) / linMax) * RUL.w;
	const lg = (v: number) => RUL.x + ((Math.log10(Math.max(10 ** LOG_LO, v)) - LOG_LO) / (LOG_HI - LOG_LO)) * RUL.w;
	return {pos: (v: number) => lerp(lin(v), lg(v), e), e, lin, lg};
};
const SCREEN = [175, 239, 795, 1429] as const;
const PH = {x: 120, y: 220, w: 260};
/** The phone with its coded storage screen (t03's drawing); `rows` glows the messages, photos or films row. */
export const PhoneScreen: React.FC<{x?: number; y?: number; w?: number; rows?: readonly number[]; bare?: boolean}> = ({x = PH.x, y = PH.y, w = PH.w, rows = [0, 0, 0], bare = false}) => {
	if (bare) return <PlateImg plate={PHONE} x={x} y={y} w={w} />;
	const s = w / (PHONE.box[2] - PHONE.box[0]);
	const scr = {x: x + (SCREEN[0] - PHONE.box[0]) * s, y: y + (SCREEN[1] - PHONE.box[1]) * s, w: (SCREEN[2] - SCREEN[0]) * s};
	const k = w / 260;
	return <>
		<PlateImg plate={PHONE} x={x} y={y} w={w} />
		<div style={{position: 'absolute', left: scr.x + 14 * k, top: scr.y + 30 * k, width: scr.w - 28 * k, fontFamily: FONT_DISPLAY, color: '#f5f1e8', transform: k !== 1 ? `scale(${k})` : undefined, transformOrigin: '0 0'}}>
			<div style={{fontWeight: 800, fontSize: 30}}>Storage</div>
			<div style={{fontWeight: 800, fontSize: 40}}>256 GB</div>
			<div style={{height: 18, borderRadius: 9, background: '#5b5650', margin: '8px 0 14px', overflow: 'hidden'}}><div style={{width: '22%', height: '100%', background: '#f5f1e8'}} /></div>
			{['messages', 'photos', 'films'].map((r, i) => <div key={r} style={{fontWeight: 700, fontSize: 26, color: '#d9d2c4', borderTop: '2px solid #5b5650', padding: '6px 0', background: rows[i] > 0.01 ? `rgba(209,143,31,${0.75 * rows[i]})` : undefined, borderRadius: 6}}>
				<span style={{color: rows[i] > 0.5 ? '#fffdf8' : '#d9d2c4'}}>{r}</span></div>)}
		</div>
	</>;
};
export type StoreProps = {
	ext?: number; p?: number; backup?: number; pts?: readonly {o?: number; glow?: number; pulse?: number}[];
	zoom?: number; zoomGrow?: number; linLabels?: number; decLabels?: number; logRow?: number; title?: number;
	hopsFrom?: number; hopsOut?: number; kmgt?: number; steps?: number;
};
/** The storage ruler under the phone (t03's geometry at ext = 0, p = 0). */
export const StoreStage: React.FC<StoreProps> = ({ext = 0, p = 0, backup = 0, pts = [], zoom = 1, zoomGrow = 0, linLabels = 1, decLabels = 1, logRow = 0, title = 0, hopsFrom, hopsOut = 1e9, kmgt = 0, steps = 0}) => {
	const f = useCurrentFrame();
	const M = storeMap(ext, p), e = M.e, Y = RUL.y;
	const gbT = [0, 50, 100, 150, 200, 250], tbT = [0.5, 1, 1.5, 2];
	const gbO = (1 - smooth(Math.min(1, ext * 3))) * (1 - e), tbO = smooth(Math.max(0, ext * 1.5 - 0.5)) * (1 - e);
	const decs: number[] = [];
	for (let k = LOG_LO; k <= 12; k++) decs.push(k);
	const pin = (pt: StorePt, i: number) => {
		const st = pts[i] ?? {};
		const o = i === 4 ? backup : st.o ?? 1;
		if (o <= 0.01) return null;
		const px = M.pos(pt.v);
		const lift = lerp(lerp(pt.linLift, pt.linLift2 ?? pt.linLift, smooth(ext)), pt.logLift, e);
		const right = px > RUL.x + RUL.w * 0.62;
		const glow = st.glow ?? 0, pulse = st.pulse ?? 0;
		return <g key={i} opacity={o}>
			{glow > 0.01 ? <circle cx={px} cy={Y} r={30} fill={NUM.soft} stroke={NUM.stroke} strokeWidth={4} opacity={glow} /> : null}
			<line x1={px} x2={px} y1={Y} y2={Y - lift + 12} stroke={INK} strokeWidth={3} />
			<circle cx={px} cy={Y} r={12 + 6 * pulse} fill={INK} stroke={CARD} strokeWidth={4} />
			<text x={px + (right ? -10 : 10)} y={Y - lift} textAnchor={right ? 'end' : 'start'} style={TXT(32, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{pt.label}</text>
		</g>;
	};
	const xs = decs.map(k => M.pos(10 ** k));
	return <FrameSvg>
		<line x1={RUL.x} x2={RUL.x + RUL.w} y1={Y} y2={Y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
		{gbO > 0.01 ? gbT.map(v => <g key={'g' + v} opacity={gbO * linLabels}><line x1={M.pos(v * 1e9)} x2={M.pos(v * 1e9)} y1={Y - 12} y2={Y + 12} stroke={INK} strokeWidth={3} /><text x={M.pos(v * 1e9)} y={Y + 50} textAnchor="middle" style={TXT(30, INK, 700)}>{v ? `${v} GB` : '0'}</text></g>) : null}
		{tbO > 0.01 ? [0, ...tbT].map(v => <g key={'t' + v} opacity={tbO * linLabels}><line x1={M.pos(v * 1e12)} x2={M.pos(v * 1e12)} y1={Y - 12} y2={Y + 12} stroke={INK} strokeWidth={3} /><text x={M.pos(v * 1e12)} y={Y + 50} textAnchor="middle" style={TXT(30, INK, 700)}>{v ? `${v} TB` : '0'}</text></g>) : null}
		{e > 0.01 ? decs.map((k, i) => <g key={'d' + k} opacity={e * decLabels}><line x1={xs[i]} x2={xs[i]} y1={Y - 12} y2={Y + 12} stroke={INK} strokeWidth={3} /><text x={xs[i]} y={Y + 50} textAnchor="middle" style={TXT(30, INK, 700)}>{p10(k)}</text></g>) : null}
		{logRow > 0.01 ? <g opacity={logRow}><text x={RUL.x - 24} y={Y + 92} textAnchor="end" style={TXT(28, GREY, 700)}>log₁₀:</text>{decs.map((k, i) => <text key={k} x={xs[i]} y={Y + 92} textAnchor="middle" style={TXT(28, GREY, 700)}>{k}</text>)}</g> : null}
		{hopsFrom !== undefined ? decs.slice(0, -1).map((k, i) => {const o = prog(f, hopsFrom + i * 3, 6) * (1 - prog(f, hopsOut, 12)); return o > 0.01 ? <g key={'h' + k} opacity={o}><path d={`M${xs[i] + 10},${Y + 112} Q${(xs[i] + xs[i + 1]) / 2},${Y + 92} ${xs[i + 1] - 10},${Y + 112}`} fill="none" stroke={RATIO.stroke} strokeWidth={4} /><text x={(xs[i] + xs[i + 1]) / 2} y={Y + 150} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: RATIO.ink}}>× 10</text></g> : null;}) : null}
		{kmgt > 0.01 ? ['kB', 'MB', 'GB', 'TB'].map((n, i) => {const x = M.pos(10 ** (3 + 3 * i)); return <g key={n} opacity={kmgt}><circle cx={x} cy={Y} r={22} fill="none" stroke={STEP.stroke} strokeWidth={5} /><text x={x} y={Y + 136} textAnchor="middle" style={TXT(34, STEP.ink)}>{n}</text></g>;}) : null}
		{steps > 0.01 ? [0, 1, 2].map(i => {const a = M.pos(10 ** (3 + 3 * i)), b = M.pos(10 ** (6 + 3 * i)), yy = Y + 160; return <g key={'s' + i} opacity={steps}><path d={`M${a + 18},${yy} V${yy + 18} H${b - 18} V${yy}`} fill="none" stroke={STEP.stroke} strokeWidth={5} /><text x={(a + b) / 2} y={yy + 56} textAnchor="middle" style={TXT(32, STEP.ink)}>3 steps (× 1000)</text></g>;}) : null}
		<text x={RUL.x + RUL.w} y={Y + (steps > 0.01 ? 270 : e > 0.5 ? 200 : 100)} textAnchor="end" style={TXT(30, INK, 700)} opacity={1}>{title > 0.5 ? 'file size (bytes, log scale)' : 'file size (bytes)'}</text>
		{STORE_PTS.map(pin)}
		{zoom > 0.01 ? <circle cx={M.pos(0)} cy={Y} r={46 + 22 * zoomGrow} fill="none" stroke={NUM.stroke} strokeWidth={5} opacity={zoom} /> : null}
	</FrameSvg>;
};

// ---------- a morphing data strip (scene 4) ----------
export type StripProps = {
	x: number; y: number; w: number; lin: [number, number]; dec: [number, number]; p: number; values: readonly number[];
	linTicks: readonly {v: number; label: string}[]; decLabel?: (k: number) => string; title: string; o?: number; dotColor?: string;
};
export const stripMap = (s: Pick<StripProps, 'x' | 'w' | 'lin' | 'dec' | 'p'>) => {
	const e = smooth(s.p);
	const lin = (v: number) => s.x + ((v - s.lin[0]) / (s.lin[1] - s.lin[0])) * s.w;
	const lg = (v: number) => s.x + ((Math.log10(Math.max(1e-300, v)) - s.dec[0]) / (s.dec[1] - s.dec[0])) * s.w;
	return {e, pos: (v: number) => lerp(Math.max(s.x - 6, lin(v)), Math.max(s.x - 6, lg(v)), e)};
};
/** One data strip: axis, its linear ticks fading to decade ticks as p goes 0 to 1, and the data dots carried by the same map. */
export const MorphStrip: React.FC<StripProps> = props => {
	const {x, y, w, dec, values, linTicks, decLabel = p10, title, o = 1, dotColor = INK} = props;
	if (o <= 0.01) return null;
	const M = stripMap(props), e = M.e;
	const ks: number[] = [];
	for (let k = dec[0]; k <= dec[1]; k++) ks.push(k);
	// Root, 20 Nov: during the morph a tick can sit far outside the strip (10^-7 on the linear map); fade it out
	// instead of letting its label run off the frame.
	const inside = (px: number) => Math.max(0, Math.min(1, 1 - (Math.max(x - px, px - (x + w), 0)) / 40));
	return <FrameSvg style={{opacity: o}}>
		<text x={x} y={y - 92} style={TXT(36, INK)}>{title}<tspan style={TXT(30, GREY, 700)}>{e > 0.5 ? '   (log scale)' : '   (ordinary scale)'}</tspan></text>
		<line x1={x - 10} x2={x + w + 10} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
		{linTicks.map(t => <g key={'l' + t.label} opacity={(1 - e) * inside(M.pos(t.v))}><line x1={M.pos(t.v)} x2={M.pos(t.v)} y1={y - 12} y2={y + 12} stroke={INK} strokeWidth={3} /><text x={M.pos(t.v)} y={y + 48} textAnchor="middle" style={TXT(30, INK, 700)}>{t.label}</text></g>)}
		{ks.map(k => <g key={'d' + k} opacity={e * inside(M.pos(10 ** k))}><line x1={M.pos(10 ** k)} x2={M.pos(10 ** k)} y1={y - 12} y2={y + 12} stroke={INK} strokeWidth={3} /><text x={M.pos(10 ** k)} y={y + 48} textAnchor="middle" style={TXT(30, INK, 700)}>{decLabel(k)}</text></g>)}
		{values.map((v, i) => <circle key={i} cx={M.pos(v)} cy={y - 26} r={13} fill={dotColor} stroke={CARD} strokeWidth={4} />)}
	</FrameSvg>;
};

// ---------- the decibel stage (scenes 5, 6, 12) ----------
export type DbGeom = {x: number; w: number; iy: number; dy: number; iAxis?: boolean; labelEvery?: number; noTitle?: boolean};
export const DB5: DbGeom = {x: 720, w: 1100, iy: 300, dy: 470, iAxis: true, labelEvery: 10};
export const dbX = (g: DbGeom, L: number) => g.x + (L / 120) * g.w;
export type DbProps = {g: DbGeom; base: number; step: number; spanO?: number; hopsFrom?: number; hopsO?: number; marks?: readonly {L: number; o: number; label?: string; anchor?: 'start' | 'middle' | 'end'}[]; o?: number; bracket?: {a: number; b: number; o: number; label: string}};
/**
 * The log intensity axis (10⁻¹² to 10⁰ W/m²) over the teal decibel scale, aligned (0 dB under 10⁻¹², 120 dB under
 * 10⁰). The teal span runs from `base` to `base + step` dB; one blue "× 10" tag per whole 10 dB hops along the span
 * from `hopsFrom`.
 */
export const DbStage: React.FC<DbProps> = ({g, base, step, spanO = 1, hopsFrom, hopsO = 1, marks = [], o = 1, bracket}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const X = (L: number) => dbX(g, L);
	const tens = Array.from({length: 13}, (_, i) => i * 10);
	const whole = Math.floor(Math.abs(step) / 10 + 1e-6);
	return <FrameSvg style={{opacity: o}}>
		{g.iAxis ? <>
			<text x={g.x + g.w + 10} y={g.iy + 92} textAnchor="end" style={TXT(30, INK, 700)}>intensity I (W/m², log scale)</text>
			<line x1={g.x - 10} x2={g.x + g.w + 10} y1={g.iy} y2={g.iy} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{tens.map((L, i) => <g key={'i' + L}><line x1={X(L)} x2={X(L)} y1={g.iy - 12} y2={g.iy + 12} stroke={INK} strokeWidth={3} />{i % 2 === 0 ? <text x={X(L)} y={g.iy + 48} textAnchor="middle" style={TXT(30, INK, 700)}>{p10(L / 10 - 12)}</text> : null}</g>)}
		</> : null}
		<line x1={g.x - 10} x2={g.x + g.w + 10} y1={g.dy} y2={g.dy} stroke={STEP.stroke} strokeWidth={5} strokeLinecap="round" />
		{tens.map((L, i) => <g key={'d' + L}><line x1={X(L)} x2={X(L)} y1={g.dy - 12} y2={g.dy + 12} stroke={STEP.stroke} strokeWidth={3} />{i % ((g.labelEvery ?? 10) / 10) === 0 ? <text x={X(L)} y={g.dy + 48} textAnchor="middle" style={TXT(30, STEP.ink, 700)}>{L}</text> : null}</g>)}
		{g.noTitle ? null : <text x={g.x - 10} y={g.dy + 92} style={TXT(30, STEP.ink, 700)}>sound level L (dB)</text>}
		{spanO > 0.01 ? <g opacity={spanO}>
			{Math.abs(step) > 0.05 ? <line x1={X(base)} x2={X(base + step)} y1={g.dy} y2={g.dy} stroke={STEP.stroke} strokeWidth={14} strokeLinecap="round" opacity={0.85} /> : null}
			{Math.abs(step) > 0.05 ? <circle cx={X(base)} cy={g.dy} r={15} fill={CARD} stroke={STEP.stroke} strokeWidth={6} /> : null}
			<circle cx={X(base + step)} cy={g.dy} r={17} fill={STEP.stroke} stroke={CARD} strokeWidth={4} />
		</g> : null}
		{hopsFrom !== undefined && g.iAxis ? Array.from({length: whole}, (_, i) => {const a = X(base + i * 10), b = X(base + (i + 1) * 10), oo = prog(f, hopsFrom + i * 8, 8) * hopsO; return oo > 0.01 ? <g key={'h' + i} opacity={oo}><path d={`M${a + 6},${g.iy - 18} Q${(a + b) / 2},${g.iy - 58} ${b - 6},${g.iy - 18}`} fill="none" stroke={RATIO.stroke} strokeWidth={4} /><text x={(a + b) / 2} y={g.iy - 66} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: RATIO.ink}}>× 10</text></g> : null;}) : null}
		{hopsFrom !== undefined && !g.iAxis ? Array.from({length: whole}, (_, i) => {const a = X(base + i * 10), b = X(base + (i + 1) * 10), oo = prog(f, hopsFrom + i * 8, 8) * hopsO; return oo > 0.01 ? <g key={'h' + i} opacity={oo}><path d={`M${a + 6},${g.dy - 22} Q${(a + b) / 2},${g.dy - 62} ${b - 6},${g.dy - 22}`} fill="none" stroke={RATIO.stroke} strokeWidth={4} /><text x={(a + b) / 2} y={g.dy - 70} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: RATIO.ink}}>× 10</text></g> : null;}) : null}
		{marks.map((mk, i) => mk.o > 0.01 ? <g key={'m' + i} opacity={mk.o}>
			{g.iAxis ? <circle cx={X(mk.L)} cy={g.iy} r={13} fill={INK} stroke={CARD} strokeWidth={4} /> : null}
			<circle cx={X(mk.L)} cy={g.dy} r={13} fill={INK} stroke={CARD} strokeWidth={4} />
			{mk.label ? <text x={X(mk.L) + (mk.anchor === 'end' ? -8 : mk.anchor === 'start' ? 8 : 0)} y={g.dy + 92} textAnchor={mk.anchor ?? 'middle'} style={TXT(32, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{mk.label}</text> : null}
		</g> : null)}
		{bracket && bracket.o > 0.01 && g.iAxis ? <g opacity={bracket.o}><path d={`M${X(bracket.a)},${g.iy - 100} V${g.iy - 116} H${X(bracket.b)} V${g.iy - 100}`} fill="none" stroke={RATIO.stroke} strokeWidth={5} /><text x={X(bracket.b) + 4} y={g.iy - 128} textAnchor="end" style={TXT(32, RATIO.ink)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{bracket.label}</text></g> : null}
	</FrameSvg>;
};
/** The meter plate with its measured display showing a level (or blank). */
export const Meter: React.FC<{x: number; y: number; w: number; value?: string; at?: number}> = ({x, y, w, value, at = -300}) => (
	value === undefined ? <PlateImg plate={METER} x={x} y={y} w={w} /> : <PlateReadout plate={METER} x={x} y={y} w={w} region={METER_DISPLAY} value={value} at={at} />
);
/** The blue ratio readout (52 px): "ratio × 10" with a grey working line. */
export const RatioCard: React.FC<{x: number; y: number; text: string; sub?: string; at?: number; out?: number; label?: string}> = ({x, y, text, sub, at = -30, out, label = 'intensity ratio'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `4px solid ${RATIO.stroke}`, padding: '6px 24px 8px'}}>
		<div style={{display: 'flex', alignItems: 'baseline', gap: 18}}>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: RATIO.ink}}>{label}</span>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: RATIO.ink, fontVariantNumeric: 'tabular-nums'}}>{text}</span>
		</div>
		{sub ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: GREY}}>{sub}</div> : null}
	</div>;
};

// ---------- the seismograph strip (scene 7) ----------
const traceFn = (t: number) => {const u = t - 0.32; return u < 0 ? 0.04 * Math.sin(70 * t) : Math.exp(-5 * u) * Math.sin(48 * u) * (1 - Math.exp(-40 * u)) + 0.04 * Math.sin(70 * t);};
/** A ruled paper strip with a trace whose wiggle is scaled by `amp` (1 = magnitude 5.0's trace) and a scale bar at the left. Clipped at the strip. */
export const Seismo: React.FC<{x: number; y: number; w: number; h: number; amp: number; ghost?: number; clipLabel?: number}> = ({x, y, w, h, amp, ghost = 0, clipLabel = 0}) => {
	const cy = y + h / 2, unit = h * 0.042; // the base trace's peak height (amp 1)
	const n = 520;
	let d = '', dg = '';
	for (let i = 0; i <= n; i++) {const t = i / n, px = x + 90 + t * (w - 110), v = traceFn(t); d += `${i ? 'L' : 'M'}${px.toFixed(1)},${(cy - v * unit * amp * 1.35).toFixed(1)}`; dg += `${i ? 'L' : 'M'}${px.toFixed(1)},${(cy - v * unit * 1.35).toFixed(1)}`;}
	const cid = `seis${Math.round(x)}${Math.round(y)}`;
	return <FrameSvg>
		<defs><clipPath id={cid}><rect x={x} y={y} width={w} height={h} rx={10} /></clipPath></defs>
		<rect x={x} y={y} width={w} height={h} rx={10} fill="#fbf6ea" stroke="#cbbfa8" strokeWidth={3} />
		<g clipPath={`url(#${cid})`}>
			{Array.from({length: 13}, (_, i) => <line key={'h' + i} x1={x} x2={x + w} y1={y + (i * h) / 12} y2={y + (i * h) / 12} stroke="#e7dcc6" strokeWidth={2} />)}
			{Array.from({length: 29}, (_, i) => <line key={'v' + i} x1={x + (i * w) / 28} x2={x + (i * w) / 28} y1={y} y2={y + h} stroke="#efe6d4" strokeWidth={2} />)}
			<line x1={x} x2={x + w} y1={cy} y2={cy} stroke="#b7aa92" strokeWidth={2.5} />
			{ghost > 0.01 ? <path d={dg} fill="none" stroke={GREY} strokeWidth={3} opacity={ghost} strokeDasharray="6 6" /> : null}
			<path d={d} fill="none" stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
		</g>
		<g>
			<line x1={x + 46} x2={x + 46} y1={cy - unit} y2={cy + unit} stroke={RATIO.stroke} strokeWidth={8} strokeLinecap="round" />
			<text x={x + 22} y={y + 36} style={TXT(28, RATIO.ink)}>1 unit</text>
		</g>
		{clipLabel > 0.01 ? <g opacity={clipLabel}><rect x={x + w - 330} y={y + 14} width={310} height={56} rx={12} fill={CARD} stroke={RATIO.stroke} strokeWidth={4} /><text x={x + w - 175} y={y + 54} textAnchor="middle" style={TXT(32, RATIO.ink)}>× 50: off the strip</text></g> : null}
	</FrameSvg>;
};

// ---------- the pH and [H⁺] axes (scene 8) ----------
export const PHA = {x: 1530, xh: 1730, y0: 180, y1: 830};
export const phY = (pH: number) => PHA.y0 + (pH / 14) * (PHA.y1 - PHA.y0);
export const PhAxes: React.FC<{marks?: readonly {pH: number; o: number}[]; arrows?: number; hops?: number; hopsAt?: number}> = ({marks = [], arrows = 0, hopsAt}) => {
	const f = useCurrentFrame();
	return <FrameSvg>
		<text x={PHA.x} y={PHA.y0 - 36} textAnchor="middle" style={TXT(32, INK)}>pH</text>
		<text x={PHA.xh} y={PHA.y0 - 36} textAnchor="middle" style={TXT(30, INK)}>[H⁺] (mol/L)</text>
		<line x1={PHA.x} x2={PHA.x} y1={PHA.y0 - 6} y2={PHA.y1 + 6} stroke={INK} strokeWidth={5} strokeLinecap="round" />
		<line x1={PHA.xh} x2={PHA.xh} y1={PHA.y0 - 6} y2={PHA.y1 + 6} stroke={INK} strokeWidth={5} strokeLinecap="round" />
		{Array.from({length: 15}, (_, i) => <g key={i}>
			<line x1={PHA.x - 12} x2={PHA.x + 12} y1={phY(i)} y2={phY(i)} stroke={INK} strokeWidth={3} />
			{i % 2 === 0 ? <text x={PHA.x - 22} y={phY(i) + 10} textAnchor="end" style={TXT(30, INK, 700)}>{i}</text> : null}
			<line x1={PHA.xh - 12} x2={PHA.xh + 12} y1={phY(i)} y2={phY(i)} stroke={INK} strokeWidth={3} />
			{i % 2 === 0 ? <text x={PHA.xh + 22} y={phY(i) + 10} style={TXT(30, INK, 700)}>{p10(i === 0 ? 0 : -i)}</text> : null}
		</g>)}
		{marks.map((m, i) => m.o > 0.01 ? <g key={i} opacity={m.o}>
			<line x1={PHA.x} x2={PHA.xh} y1={phY(m.pH)} y2={phY(m.pH)} stroke={INK} strokeWidth={3} strokeDasharray="8 7" />
			<circle cx={PHA.x} cy={phY(m.pH)} r={13} fill={INK} stroke={CARD} strokeWidth={4} />
			<circle cx={PHA.xh} cy={phY(m.pH)} r={13} fill={INK} stroke={CARD} strokeWidth={4} />
			<text x={PHA.x - 22} y={phY(m.pH) + 10} textAnchor="end" style={TXT(32, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{m.pH}</text>
			<text x={PHA.xh + 22} y={phY(m.pH) + 10} style={TXT(32, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{p10(-m.pH)}</text>
		</g> : null)}
		{arrows > 0.01 ? <g opacity={arrows} stroke={STEP.stroke} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round">
			<line x1={PHA.xh - 40} x2={PHA.xh - 40} y1={phY(11)} y2={phY(3)} /><path d={`M${PHA.xh - 54},${phY(3) + 18} L${PHA.xh - 40},${phY(3)} L${PHA.xh - 26},${phY(3) + 18}`} />
			<line x1={PHA.x + 40} x2={PHA.x + 40} y1={phY(11)} y2={phY(3)} /><path d={`M${PHA.x + 26},${phY(3) + 18} L${PHA.x + 40},${phY(3)} L${PHA.x + 54},${phY(3) + 18}`} />
		</g> : null}
		{hopsAt !== undefined ? [0, 1, 2].map(i => {const o = prog(f, hopsAt + i * 10, 8); const a = phY(7 - i), b = phY(6 - i), xx = PHA.x - 64; return o > 0.01 ? <g key={i} opacity={o}><path d={`M${xx + 14},${a - 6} Q${xx - 24},${(a + b) / 2} ${xx + 14},${b + 6}`} fill="none" stroke={RATIO.stroke} strokeWidth={4} /><text x={xx - 30} y={(a + b) / 2 + 12} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: RATIO.ink}}>× 10</text></g> : null;}) : null}
	</FrameSvg>;
};

// ---------- the memory card (scene 10, small in 15, beside the notes in 16) ----------
export type CardCues = {main: number; glow?: number; keys: readonly number[]; cond: number};
export const AID_KEYS: React.ReactNode[] = [
	<><b>dB:</b> <Nc>10</Nc> log₁₀ · <Sc>+10 dB</Sc> → <Rc>× 10</Rc></>,
	<><b>earthquake:</b> <Nc>1</Nc> log₁₀ · <Sc>+1</Sc> → <Rc>× 10</Rc></>,
	<><b>pH:</b> <Nc>−1</Nc> log₁₀ · <Sc>−3</Sc> → <Rc>× 1000</Rc> [H⁺]</>,
	<><b>stars:</b> <Nc>−2.5</Nc> log₁₀ · <Sc>−5</Sc> → <Rc>× 100</Rc> brighter</>,
];
export const AidMain: React.FC = () => <><Rc>ratio</Rc> = 10^(<Sc>step</Sc> ÷ <Nc>number in front</Nc>)</>;
/** The framed card at (x, y) and scale s (1: about 1300 × 640 px). */
export const T04Card: React.FC<{x: number; y: number; s?: number; c: CardCues; keys?: boolean}> = ({x, y, s = 1, c, keys = true}) => {
	const f = useCurrentFrame();
	const gl = c.glow !== undefined ? prog(f, c.glow, 10) * (1 - prog(f, c.glow + 50, 16)) : 0;
	const W = 1300, H = keys ? 640 : 300;
	return <div style={{position: 'absolute', left: x, top: y, width: W, height: H, transform: `scale(${s})`, transformOrigin: '0 0'}}>
		<FramedCard x={0} y={0} w={W} h={H} at={-30} />
		<div style={{position: 'absolute', left: 48, top: 22, fontFamily: FONT_HAND, fontWeight: 700, fontSize: keys ? 46 : 54, color: '#6b6358'}}>Memory aid</div>
		{/* Root, 20 Nov: the bare phone screen read as an empty black box on the sheet; removed. */}
		<div style={{position: 'absolute', left: 48, top: 96, opacity: prog(f, c.main, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, color: INK, padding: '2px 12px', borderRadius: 14, background: gl > 0.01 ? `rgba(220,234,247,${gl})` : undefined}}><AidMain /></div>
		{keys ? AID_KEYS.map((k, i) => <div key={i} style={{position: 'absolute', left: 60, top: 210 + i * 76, opacity: prog(f, c.keys[i], 12), transform: `translateX(${(1 - smooth(prog(f, c.keys[i], 14))) * -16}px)`, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 42, color: INK, whiteSpace: 'pre'}}>{k}</div>) : null}
		<div style={{position: 'absolute', left: 60, top: keys ? 530 : 190, opacity: prog(f, c.cond, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: keys ? 48 : 58, color: NUM.ink}}>A minus sign flips the direction.</div>
	</div>;
};

// ---------- i05's rectangles frame (scene 15 and the final frame) ----------
const TEAL_FILL = '#cfe8e4', TEAL_INK = '#1f6f66';
/**
 * i05's handoff board (src/explainer/lessons/math-a12-i05/s3.tsx, I05Board) redrawn with the same geometry, ticks,
 * sizes and colours. i05's two grey lines "last video: trig primitives / one step back round the wheel" are left
 * out here, because the video before i06 is this one in production order (build notes).
 */
export const T04Board: React.FC<{headAt: number; curveAt: number; rectsAt: number; splitAt: number; chipAt: number}> = ({headAt, curveAt, rectsAt, splitAt, chipAt}) => {
	const f = useCurrentFrame();
	const n = f >= splitAt ? 8 : 4;
	const w = PI / 2 / n;
	return <>
		<SceneHeading text="Next: add up thin rectangles" at={headAt} size={56} />
		<StudioPlot x={40} y={150} width={1180} height={810} window={{x: [-0.12, PI / 2 + 0.15], y: [-0.1, 1.2]}} xTicks={[{value: PI / 4, label: 'π/4'}, {value: PI / 2, label: 'π/2'}]} yTicks={[{value: 0.5, label: '0.5'}, {value: 1, label: '1'}]} at={curveAt}>
			{m => <>
				{Array.from({length: n}, (_, i) => {const o = n === 4 ? prog(f, rectsAt + i * 10, 8) : 1; const a = m.p(i * w, Math.cos(i * w)), b = m.p((i + 1) * w, 0); return <rect key={n + '-' + i} x={a[0]} y={a[1]} width={b[0] - a[0]} height={b[1] - a[1]} fill={TEAL_FILL} stroke={TEAL_INK} strokeWidth={3} opacity={o} />;})}
				<path d={fnPath(m, Math.cos, 0, PI / 2)} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" />
				{[0, PI / 2].map(X => {const p = m.p(X, Math.cos(X)); return <circle key={X} cx={p[0]} cy={p[1]} r={12} fill={INK} stroke={CARD} strokeWidth={4} />;})}
				<PLabel p={m.p(0.75, 1.1)} text="y = cos x,  0 ≤ x ≤ π/2" size={42} />
			</>}
		</StudioPlot>
		<I05Chip x={1270} y={180} at={chipAt} size={46} color={AMB}>add them up?</I05Chip>
		<div style={{position: 'absolute', left: 1580, top: 150, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 96, color: '#7a4600', opacity: prog(f, chipAt, 12)}}>?</div>
		<StripStepper x={1270} y={330} values={[4, 8]} current={n} label="rectangles" at={rectsAt} />
		<HandTag x={1280} y={490} text="thinner and thinner" at={splitAt} size={48} color={TEAL_INK} />
		<I05BoxCard x={1270} y={560} w={600} at={rectsAt} size={38} border={TEAL_INK}>width π/8, then π/16;<br />each top-left corner on the curve</I05BoxCard>
	</>;
};
