// M8 G03 (Biology practice: feedback loops) drawing parts: the three question cards (full card for each attempt, a left
// column for each walkthrough), the blood pressure loop ring (b01's LoopRing with painted zooms in its slots), the blood
// pressure trace, the glucose and insulin graph (two y axes, segment highlights, peak markers and reading guides), the
// process strips (change, response, a return arrow taking a minus or a plus) and a small loop thumbnail. Board pieces
// come from bio-m8-g01's board and the Module 8 shared parts (both read-only). No people; the body is never outlined.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, BLUE, Box, CARD, DrawPath, EDGE, GREYT, GTag, INK, INK_SOFT, PlateB, QPart, Sx, TEAL, T, Zoom, marksCheck, mw, prog, pulse, smooth, vis,
} from '../bio-m8-g01/board';
import type {PB, QMark} from '../bio-m8-g01/board';
import {LoopRing, RingArc, ringPt, SignalPulse, Arteriole} from '../m8-shared/parts';
import type {RG} from '../m8-shared/parts';
import {ARCH, MEDULLA, PL} from './assets';
import {GLU, INS, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, Q3_DEM, Q3_P, Q3_Q, Q3_R} from './common';

export * from '../bio-m8-g01/board';
export {LoopRing, RingArc, ringPt, SignalPulse, Arteriole};
export type {RG};
export const RED_BP = '#c4432f';

// ---------- question cards ----------
export const Q1Full: React.FC = () => (
	<g>
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={214} w={1150} size={40} />
		<QPart blocks={Q1_DEM} x={126} y={700} w={1150} size={38} />
	</g>
);
export const Q1Col: React.FC<{marks?: QMark[]; plates?: boolean}> = ({marks = [], plates = true}) => (
	<g>
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q1_STEM} marks={marks} x={62} y={196} w={636} size={27} />
		<QPart blocks={Q1_DEM} marks={marks} x={62} y={572} w={636} size={27} />
		{plates ? <g>
			<PlateB p={PL.brain} cx={220} cy={930} w={250} />
			<PlateB p={PL.heart} cx={520} cy={930} w={150} />
		</g> : null}
	</g>
);
export const q1Marks = (m: QMark[]) => marksCheck([Q1_STEM, Q1_DEM], m);

export const Q2Full: React.FC<{g: GG}> = ({g}) => (
	<g>
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={212} w={1150} size={38} />
		<GlucGraph g={g} size={28} />
		<QPart blocks={Q2_DEM} x={126} y={790} w={1150} size={33} />
	</g>
);
export const Q2Col: React.FC<{marks?: QMark[]}> = ({marks = []}) => (
	<g>
		<Box x={40} y={150} w={680} h={600} />
		<QPart blocks={Q2_STEM} marks={marks} x={62} y={196} w={636} size={27} />
		<QPart blocks={Q2_DEM} marks={marks} x={62} y={370} w={636} size={27} />
	</g>
);
export const q2Marks = (m: QMark[]) => marksCheck([Q2_STEM, Q2_DEM], m);

export const Q3Col: React.FC<{marks?: QMark[]}> = ({marks = []}) => (
	<g>
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q3_P} marks={marks} x={62} y={196} w={636} size={27} />
		<QPart blocks={Q3_Q} marks={marks} x={62} y={350} w={636} size={27} />
		<QPart blocks={Q3_R} marks={marks} x={62} y={540} w={636} size={27} />
		<QPart blocks={Q3_DEM} marks={marks} x={62} y={700} w={636} size={27} />
	</g>
);
export const q3Marks = (m: QMark[]) => marksCheck([Q3_P, Q3_Q, Q3_R, Q3_DEM], m);

// ---------- the blood pressure loop ring ----------
export const RING: RG = {cx: 1040, cy: 610, R: 225, r: 84};
export const SLOT_NAMES = ['stimulus', 'receptors', 'control centre', 'effectors', 'response'];
/** BP with an arrow (down = falls, up = rises back). */
export const BPGlyph: React.FC<{cx: number; cy: number; up: boolean; at?: number; color?: string; s?: number}> = ({cx, cy, up, at = -1000, color, s = 1}) => {
	const f = useCurrentFrame();
	const k = smooth(prog(f, at, 20));
	const c = color ?? (up ? TEAL : RED_BP);
	const dy = (up ? -1 : 1) * 26 * k;
	return (
		<g transform={`translate(${cx},${cy}) scale(${s})`}>
			<Sx x={-22} y={14} text="BP" size={42} color={INK} anchor="middle" weight={900} at={-1000} />
			<g transform={`translate(0,${dy})`}>
				<path d={up ? 'M32,22 L32,-22 M18,-8 L32,-22 L46,-8' : 'M32,-22 L32,22 M18,8 L32,22 L46,8'} fill="none" stroke={c} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
			</g>
		</g>
	);
};
/** The five slots filled with painted zooms (receptor: the aortic arch; control centre: the medulla; effector: the
 *  heart) and BP glyphs. `lit` lights slots; `dim` greys slots (indices) from a frame; `beat` makes the heart pulse. */
export const BPRing: React.FC<{g?: RG; lit?: (number | undefined)[]; minus?: number; dim?: [number, number][]; beat?: number; o?: number; respAt?: number; stimAt?: number; labels?: boolean; cut?: number; respQ?: [number, number]}> = ({g = RING, lit = [], minus, dim = [], beat, o = 1, respAt = -1000, stimAt = -1000, labels = true, cut, respQ}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const pt = (i: number) => ringPt(g, i);
	const dimOf = (i: number) => dim.filter(d => d[0] === i).reduce((m, d) => Math.max(m, prog(f, d[1], 14)), 0);
	const bt = beat === undefined || f < beat ? 0 : Math.max(0, Math.sin(((f - beat) / 14) * Math.PI)) * (f < beat + 140 ? 1 : 0);
	const zr = g.r - 6;
	const [rx, ry] = pt(1), [cx2, cy2] = pt(2), [ex, ey] = pt(3);
	const cutP = ringPt(g, 1, g.R);
	const ang = ((-18 + 36) * Math.PI) / 180;
	const cp: [number, number] = [g.cx + g.R * Math.cos(ang), g.cy + g.R * Math.sin(ang)];
	void cutP;
	return (
		<g opacity={o}>
			<LoopRing g={g} at={-1000} lit={lit} arcsAt={[-1000, -1000, -1000, -1000]} />
			{minus !== undefined ? <RingArc g={g} i={4} at={minus} color={TEAL} width={5} sign="−" signAt={minus + 8} signSize={60} /> : null}
			<g opacity={1 - 0.6 * dimOf(1)}><Zoom p={PL.heart} cx={rx} cy={ry} r={zr} u={ARCH[0]} v={ARCH[1]} k={0.36} id="g03-arch" /></g>
			<g opacity={1 - 0.6 * dimOf(2)}><Zoom p={PL.brain} cx={cx2} cy={cy2} r={zr} u={MEDULLA[0] - 40} v={MEDULLA[1] - 120} k={0.3} id="g03-med" />
				<ellipse cx={cx2 + 12} cy={cy2 + 36} rx={18} ry={34} fill="none" stroke={AMBER} strokeWidth={4} /></g>
			<g opacity={1 - 0.6 * dimOf(3)} transform={`translate(${ex},${ey}) scale(${1 + 0.07 * bt}) translate(${-ex},${-ey})`}><PlateB p={PL.heart} cx={ex} cy={ey + 4} w={118} /></g>
			<g opacity={(f < stimAt ? 0.35 : 1) * (1 - 0.6 * dimOf(0))}><BPGlyph cx={pt(0)[0]} cy={pt(0)[1]} up={false} at={stimAt} /></g>
			{respQ && f >= respQ[0] && f < respQ[1]
				? <Sx x={pt(4)[0]} y={pt(4)[1] + 30} text="?" size={86} color={AMBER_INK} anchor="middle" weight={900} at={respQ[0]} />
				: <g opacity={(f < respAt ? 0.35 : 1) * (1 - 0.6 * dimOf(4))}><BPGlyph cx={pt(4)[0]} cy={pt(4)[1]} up={true} at={respAt} /></g>}
			{labels ? SLOT_NAMES.map((t, i) => {
				const [x, y] = pt(i);
				const below = i === 2 || i === 3;
				const yy = i === 0 ? y - g.r - 14 : below ? y + g.r + 38 : y + g.r + 36;
				return <Sx key={t} x={x} y={yy} text={t} size={32} color={(lit[i] !== undefined && f >= (lit[i] as number)) ? TEAL : INK} anchor="middle" hand weight={700} at={-1000} opacity={1 - 0.5 * dimOf(i)} />;
			}) : null}
			{cut !== undefined && f >= cut ? <g>
				<DrawPath d={`M${cp[0] - 30},${cp[1] - 30} L${cp[0] + 30},${cp[1] + 30}`} at={cut} dur={8} color={RED_BP} width={9} />
				<DrawPath d={`M${cp[0] + 30},${cp[1] - 30} L${cp[0] - 30},${cp[1] + 30}`} at={cut + 6} dur={8} color={RED_BP} width={9} />
			</g> : null}
			{void cy2}{void ey}{void ry}
		</g>
	);
};
export const slotPt = (i: number, g: RG = RING) => ringPt(g, i);
/** A point on the ring arc between slot a and slot a+1 (t 0..1). */
export const arcPt = (i: number, t: number, g: RG = RING): [number, number] => {
	const A = [-90, -18, 54, 126, 198, 270];
	const a = ((A[i] + (A[i + 1] - A[i]) * t) * Math.PI) / 180;
	return [g.cx + g.R * Math.cos(a), g.cy + g.R * Math.sin(a)];
};

// ---------- the glucose and insulin graph ----------
export type GG = {x: number; y: number; w: number; h: number};
export const X = (g: GG, t: number) => g.x + (t / 180) * g.w;
export const YG = (g: GG, v: number) => g.y + g.h * (1 - (v - 4) / 4);
export const YI = (g: GG, v: number) => g.y + g.h * (1 - v / 70);
export type Seg = {line: 'g' | 'i'; from: number; to: number; at: number; out?: number};
/** Both y axes (glucose left, teal; insulin right, amber), the two lines and the key. Segments brighten on cue. */
export const GlucGraph: React.FC<{g: GG; size?: number; o?: number; segs?: Seg[]; dim?: number; showKey?: boolean; draw?: number; keyBelow?: boolean}> = ({g, size = 28, o = 1, segs = [], dim, showKey = true, draw, keyBelow = false}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const d = dim === undefined ? 0 : prog(f, dim, 14);
	const path = (pts: [number, number][], Y: (g: GG, v: number) => number) => 'M' + pts.map(([t, v]) => `${X(g, t)},${Y(g, v)}`).join(' L');
	const lineO = 1 - 0.5 * d;
	const seg = (s: Seg, k: number) => {
		const v = vis(f, s.at, s.out, 12);
		if (v <= 0.01) return null;
		const pts = (s.line === 'g' ? GLU : INS).filter(p => p[0] >= s.from && p[0] <= s.to);
		return <path key={k} d={path(pts, s.line === 'g' ? YG : YI)} fill="none" stroke={s.line === 'g' ? TEAL : AMBER} strokeWidth={16} strokeLinecap="round" strokeLinejoin="round" opacity={0.35 * v} />;
	};
	return (
		<g opacity={o}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD} opacity={0.9} />
			{[0, 30, 60, 90, 120, 150, 180].map(t => <line key={'v' + t} x1={X(g, t)} x2={X(g, t)} y1={g.y} y2={g.y + g.h} stroke="#e4e9ee" strokeWidth={1.5} />)}
			{[4, 5, 6, 7, 8].map(v => <line key={'h' + v} x1={g.x} x2={g.x + g.w} y1={YG(g, v)} y2={YG(g, v)} stroke="#e4e9ee" strokeWidth={1.5} />)}
			<path d={`M${g.x},${g.y} L${g.x},${g.y + g.h} L${g.x + g.w},${g.y + g.h} L${g.x + g.w},${g.y}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{[4, 5, 6, 7, 8].map(v => <g key={'l' + v}><line x1={g.x - 10} x2={g.x} y1={YG(g, v)} y2={YG(g, v)} stroke={INK} strokeWidth={2.5} /><Sx x={g.x - 16} y={YG(g, v) + size * 0.35} text={v.toFixed(1)} size={size} color={TEAL} anchor="end" weight={700} at={-1000} /></g>)}
			{[0, 10, 20, 30, 40, 50, 60, 70].map(v => <g key={'r' + v}><line x1={g.x + g.w} x2={g.x + g.w + 10} y1={YI(g, v)} y2={YI(g, v)} stroke={INK} strokeWidth={2.5} /><Sx x={g.x + g.w + 16} y={YI(g, v) + size * 0.35} text={`${v}`} size={size} color={AMBER_INK} weight={700} at={-1000} /></g>)}
			{[0, 30, 60, 90, 120, 150, 180].map(t => <g key={'t' + t}><line x1={X(g, t)} x2={X(g, t)} y1={g.y + g.h} y2={g.y + g.h + 10} stroke={INK} strokeWidth={2.5} /><Sx x={X(g, t)} y={g.y + g.h + size * 1.3} text={`${t}`} size={size} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
			<Sx x={keyBelow ? g.x : g.x + g.w / 2} y={g.y + g.h + size * 2.55} text="time after meal (min)" size={size} color={INK} anchor={keyBelow ? 'start' : 'middle'} weight={800} at={-1000} />
			{keyBelow && showKey ? <g>
				<line x1={g.x + g.w - 300} x2={g.x + g.w - 260} y1={g.y + g.h + size * 2.2} y2={g.y + g.h + size * 2.2} stroke={TEAL} strokeWidth={5} /><Sx x={g.x + g.w - 250} y={g.y + g.h + size * 2.55} text="glucose" size={26} color={INK} weight={700} at={-1000} />
				<line x1={g.x + g.w - 140} x2={g.x + g.w - 100} y1={g.y + g.h + size * 2.2} y2={g.y + g.h + size * 2.2} stroke={AMBER_INK} strokeWidth={5} strokeDasharray="10 6" /><Sx x={g.x + g.w - 90} y={g.y + g.h + size * 2.55} text="insulin" size={26} color={INK} weight={700} at={-1000} />
			</g> : null}
			<g transform={`translate(${g.x - size * 2.6},${g.y + g.h / 2}) rotate(-90)`}><Sx x={0} y={0} text="blood glucose (mmol/L)" size={size} color={TEAL} anchor="middle" weight={800} at={-1000} /></g>
			<g transform={`translate(${g.x + g.w + size * 2.5},${g.y + g.h / 2}) rotate(90)`}><Sx x={0} y={0} text="blood insulin (mU/L)" size={size} color={AMBER_INK} anchor="middle" weight={800} at={-1000} /></g>
			{segs.map(seg)}
			<g opacity={lineO}>
				{draw === undefined ? <path d={path(GLU, YG)} fill="none" stroke={TEAL} strokeWidth={5} strokeLinejoin="round" /> : <DrawPath d={path(GLU, YG)} at={draw} dur={40} color={TEAL} width={5} />}
				{draw === undefined ? <path d={path(INS, YI)} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinejoin="round" strokeDasharray="14 8" /> : <DrawPath d={path(INS, YI)} at={draw + 20} dur={40} color={AMBER_INK} width={5} dash="14 8" />}
				{GLU.map(([t, v]) => <circle key={'g' + t} cx={X(g, t)} cy={YG(g, v)} r={5} fill={TEAL} />)}
				{INS.map(([t, v]) => <circle key={'i' + t} cx={X(g, t)} cy={YI(g, v)} r={5} fill={AMBER_INK} />)}
			</g>
			{showKey && !keyBelow ? <g>
				<rect x={g.x + g.w - 250} y={g.y + 12} width={238} height={92} rx={10} fill={CARD} stroke={EDGE} strokeWidth={2} />
				<line x1={g.x + g.w - 236} x2={g.x + g.w - 190} y1={g.y + 40} y2={g.y + 40} stroke={TEAL} strokeWidth={5} /><Sx x={g.x + g.w - 178} y={g.y + 49} text="glucose" size={26} color={INK} weight={700} at={-1000} />
				<line x1={g.x + g.w - 236} x2={g.x + g.w - 190} y1={g.y + 78} y2={g.y + 78} stroke={AMBER_INK} strokeWidth={5} strokeDasharray="10 6" /><Sx x={g.x + g.w - 178} y={g.y + 87} text="insulin" size={26} color={INK} weight={700} at={-1000} />
			</g> : null}
		</g>
	);
};
/** A peak marker: dot on the line, dropped guide to the time axis, a time label at the axis, a value label. */
export const PeakMarker: React.FC<{g: GG; t: number; y: number; at: number; dim?: number; color: string; label: string; lx: number; ly: number; tLabel?: string; pill?: boolean}> = ({g, t, y, at, dim, color, label, lx, ly, tLabel, pill = true}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const d = dim === undefined ? 0 : prog(f, dim, 14);
	const w = mw(label, 36, false, 800) + 30;
	return (
		<g opacity={v * (1 - 0.45 * d)}>
			<DrawPath d={`M${X(g, t)},${y} L${X(g, t)},${g.y + g.h}`} at={at} dur={14} color={color} width={3.5} dash="8 7" />
			<circle cx={X(g, t)} cy={y} r={11} fill={color} stroke={CARD} strokeWidth={3} />
			{tLabel ? <g><rect x={X(g, t) - 30} y={g.y + g.h - 44} width={60} height={38} rx={8} fill={CARD} stroke={color} strokeWidth={2.5} /><Sx x={X(g, t)} y={g.y + g.h - 14} text={tLabel} size={28} color={color} anchor="middle" weight={800} at={-1000} /></g> : null}
			{pill ? <g>
				<line x1={X(g, t)} y1={y} x2={Math.max(lx - 14, Math.min(lx - 14 + w, X(g, t)))} y2={ly + (ly < y ? 14 : -38)} stroke={color} strokeWidth={3} />
				<rect x={lx - 14} y={ly - 38} width={w} height={52} rx={12} fill={CARD} stroke={color} strokeWidth={3} />
				<Sx x={lx} y={ly} text={label} size={36} color={color} weight={800} at={at + 6} />
			</g> : null}
		</g>
	);
};
/** A dashed reading guide from a point to an axis with a value label in a pill. side 'l' = to the left axis. */
export const GGuide: React.FC<{g: GG; t: number; v: number; line: 'g' | 'i'; at: number; out?: number; label: string; lx: number; ly: number}> = ({g, t, v, line, at, out, label, lx, ly}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	const y = line === 'g' ? YG(g, v) : YI(g, v);
	const c = line === 'g' ? TEAL : AMBER_INK;
	const w = mw(label, 34, false, 800) + 28;
	return (
		<g opacity={o}>
			<DrawPath d={line === 'g' ? `M${X(g, t)},${y} L${g.x},${y}` : `M${X(g, t)},${y} L${g.x + g.w},${y}`} at={at} dur={14} color={c} width={3} dash="8 7" />
			<circle cx={X(g, t)} cy={y} r={10} fill={c} stroke={CARD} strokeWidth={3} />
			<rect x={lx - 14} y={ly - 36} width={w} height={48} rx={12} fill={CARD} stroke={c} strokeWidth={3} />
			<Sx x={lx} y={ly} text={label} size={34} color={c} weight={800} at={-1000} />
		</g>
	);
};

// ---------- process strips ----------
/** A short row: letter badge, plate, change and response lines, and a return arrow whose sign writes on cue. */
export const ProcessStrip: React.FC<{x: number; y: number; w: number; h: number; letter: string; plate: React.ReactNode; change: string; resp: string; textAt?: number; respAt?: number; sign?: '+' | '−'; signAt?: number; o?: number; lit?: number; cycle?: [number, number]; size?: number; signPulse?: number}> = ({x, y, w, h, letter, plate, change, resp, textAt = -1000, respAt, sign, signAt, o = 1, lit, cycle, size = 42, signPulse}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const L = lit === undefined ? 0 : prog(f, lit, 12);
	const sc = sign === '+' ? AMBER_INK : TEAL;
	const ax = x + w - 110, ay0 = y + 40, ay1 = y + h - 40;
	const so = signAt === undefined ? 0 : prog(f, signAt, 10);
	const sp = signPulse === undefined ? 0 : pulse(f, signPulse, 40);
	const cyc = cycle && f >= cycle[0] && f <= cycle[1] ? ((f - cycle[0]) % 50) / 50 : -1;
	const loopD = `M${ax - 30},${ay1} C${ax + 60},${ay1} ${ax + 60},${ay0} ${ax - 30},${ay0}`;
	const qp = (u: number): [number, number] => {
		const p0 = [ax - 30, ay1], p1 = [ax + 60, ay1], p2 = [ax + 60, ay0], p3 = [ax - 30, ay0];
		const m = 1 - u;
		return [m ** 3 * p0[0] + 3 * m * m * u * p1[0] + 3 * m * u * u * p2[0] + u ** 3 * p3[0], m ** 3 * p0[1] + 3 * m * m * u * p1[1] + 3 * m * u * u * p2[1] + u ** 3 * p3[1]];
	};
	const textW = w - 250 - 140;
	const ch = 'change: ' + change, rs = 'response: ' + resp;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={20} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 4 : 3} />
			<circle cx={x + 34} cy={y + 34} r={24} fill={BLUE} /><Sx x={x + 34} y={y + 46} text={letter} size={34} color={CARD} anchor="middle" weight={900} at={-1000} />
			{plate}
			<T x={x + 250} y={y + 62} w={textW} text={ch} size={size} color={INK} at={textAt} lh={size + 4} />
			<T x={x + 250} y={y + 62 + (mw(ch, size, true, 700) > textW ? 2 : 1) * (size + 4) + 10} w={textW} text={rs} size={size} color={TEAL} at={respAt ?? textAt + 12} lh={size + 4} />
			<path d={loopD} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="9 7" />
			<path d={`M${ax - 14},${ay0 - 12} L${ax - 32},${ay0} L${ax - 14},${ay0 + 12}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			{cyc >= 0 ? <circle cx={qp(cyc)[0]} cy={qp(cyc)[1]} r={11} fill={AMBER} stroke={CARD} strokeWidth={3} /> : null}
			{sign && so > 0.01 ? <g opacity={so} transform={`translate(${ax + 35},${(ay0 + ay1) / 2}) scale(${1 + 0.25 * sp})`}>
				<circle r={36} fill={CARD} stroke={sc} strokeWidth={5} />
				<Sx x={0} y={22} text={sign} size={64} color={sc} anchor="middle" weight={900} at={-1000} />
			</g> : null}
		</g>
	);
};
/** A small loop thumbnail (five dots on a ring) with a minus on the return arrow. */
export const MiniLoop: React.FC<{cx: number; cy: number; R?: number; at?: number; o?: number}> = ({cx, cy, R = 64, at = -1000, o = 1}) => {
	const g: RG = {cx, cy, R, r: 14};
	return (
		<g opacity={o}>
			<LoopRing g={g} at={at} arcColor={TEAL} />
			<RingArc g={g} i={4} at={at + 8} color={TEAL} sign="−" signAt={at + 14} signSize={40} />
		</g>
	);
};
