// Lesson parts for math-a12-g02 (Revision 3: which integral model fits an unseen question?), on the maths studio
// kit and the board parts of t01 (Row, AnswerBox, Slip, Task, BoxCard, Chip, Hand, FramedCard, QStrip; imported
// read-only). Lesson-local rigs (g03 imports some of them read-only):
// - Tank: the painted rainwater tank with a coded water band inside its measured body, a dashed start line and a
//   gauge card, never stretched; the level always comes from the same model as the graph and the readouts;
// - RateGraph: r(t) = 2t e^(t²) on its window with an optional swept fill and a cursor;
// - ModelRows: the large decision tree of scene 2 (one row per demand, each with a small coded icon), lit amber;
// - TreeChip: the decision tree's lit branch, top right of every worked board;
// - InvestStage: the two investment strips beside two coin jars (scene 13, the final frame, and g03's opening).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CARD, CARD_SHADOW, FrameSvg, MATH_ROLES, SvgPlate, StudioPlot, fnPath, plateHeight, regionPath, smooth, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';
import {prog} from '../../kit';
import {CoinJar, D02_PLATES} from '../math-a12-d02/parts';
import {BROWN, FONT_DISPLAY, FONT_HAND, GREY, INK, KR} from '../math-a12-t01/parts';

export {AnswerBox, BoxCard, BROWN, Chip, FramedCard, GREEN, Hand, RED, Row, Slip, Task, QStrip, KR, AR, BR, CR, GOOD, GREY, Kc, Ac, Bc, Cc, Gc, Gy, Ring, Dot, Arw, Lb, HBracket, PI, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, CARD} from '../math-a12-t01/parts';
export {TOWN} from '../math-a12-f07/parts';
export {D02_PLATES};

// ---------- colour roles (g02) ----------
/** Area above the axis teal, below amber (fills); the inside's derivative blue; C violet; trapezia pale blue. */
export const UP = MATH_ROLES.b, DOWN = MATH_ROLES.k, DERIV = MATH_ROLES.a, CONST = MATH_ROLES.gradient;
export const TRAP_FILL = '#dceaf7', TRAP_STROKE = '#1f6fb2';
export const WATER = '#5f9fb8', WATER_LINE = '#2f6f88';
const span = (c: string) => {
	const S: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: c}}>{children}</span>;
	return S;
};
export const Dc = span(DERIV.ink), Vc = span(CONST.ink), Uc = span(UP.ink), Ac2 = span(DOWN.ink);
/** The inside expression in a grey dashed slot. */
export const Slot: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{display: 'inline-block', border: '3px dashed #8a8378', borderRadius: 10, padding: '0 6px', margin: '0 2px', lineHeight: 1.05}}>{children}</span>;

// ---------- plates (alpha > 20 boxes, measured 19 Nov) ----------
export const TANK: PlateSpec = {src: 'assets/biology/m7-village-water-tank-v1.png', nat: [2000, 2000], box: [487, 253, 1512, 1746]};
/** The tank body's water band in file pixels: x0, y at the floor, x1, y at the brim (inside the corrugated wall). */
const TANK_BAND = [585, 1282, 1432, 488] as const;
export const DESK: PlateSpec = {src: 'assets/maths/ma12-exam-desk-v1.png', nat: [1619, 972], box: [178, 160, 1441, 811]};
export const CALC: PlateSpec = {src: 'assets/maths/ma12-calculator-v1.png', nat: [946, 1663], box: [147, 239, 798, 1462]};
/** The calculator's display window in file pixels. */
export const CALC_DISPLAY = [203, 347, 741, 524] as const;
/** The motor boat from above, bow up (box 632 × 1640 file px); turned 90° to sail along the canal, never stretched. */
export const BOAT: PlateSpec = {src: 'assets/physics/phys-y11-boat-top-v1.png', nat: [1000, 2000], box: [184, 180, 816, 1820]};
export const G02_PLATES = [TANK, DESK, CALC, BOAT];
export const tankH = (w: number) => plateHeight(TANK, w);

// ---------- the tank ----------
export type TankProps = {x: number; y: number; w: number; level: number; max: number; start?: {v: number; o: number; label?: string}; gauge?: {text: string; o: number; color?: string}; label?: string; o?: number; water?: number};
/** The painted tank with its coded water band (scale 0 to max litres from floor to brim), a dashed start line and a gauge card. */
export const Tank: React.FC<TankProps> = ({x, y, w, level, max, start, gauge, label, o = 1, water = 1}) => {
	if (o <= 0.001) return null;
	const s = w / (TANK.box[2] - TANK.box[0]);
	const X = (fx: number) => x + (fx - TANK.box[0]) * s, Y = (fy: number) => y + (fy - TANK.box[1]) * s;
	const x0 = X(TANK_BAND[0]), x1 = X(TANK_BAND[2]), yb = Y(TANK_BAND[1]), yt = Y(TANK_BAND[3]);
	const ly = (v: number) => yb + (yt - yb) * Math.max(0, Math.min(1, v / max));
	const wy = ly(level);
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg>
			<SvgPlate plate={TANK} x={x} y={y} w={w} />
			{water > 0.01 ? <g opacity={water}>
				<rect x={x0} y={wy} width={x1 - x0} height={Math.max(0, yb - wy)} fill={WATER} opacity={0.55} />
				<line x1={x0} x2={x1} y1={wy} y2={wy} stroke={WATER_LINE} strokeWidth={5} />
			</g> : null}
			{start && start.o > 0.01 ? <g opacity={start.o}><line x1={x0 - 14} x2={x1 + 14} y1={ly(start.v)} y2={ly(start.v)} stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
				{start.label ? <text x={x1 + 20} y={ly(start.v) + 10} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{start.label}</text> : null}</g> : null}
		</FrameSvg>
		{label ? <div style={{position: 'absolute', left: x, top: y - 50, width: w, textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK}}>{label}</div> : null}
		{gauge && gauge.o > 0.01 ? <div style={{position: 'absolute', left: x0 - 10, top: Y(TANK_BAND[3]) - 40, width: x1 - x0 + 20, opacity: gauge.o, textAlign: 'center', background: CARD, border: `3px solid ${gauge.color ?? WATER_LINE}`, borderRadius: 14, padding: '2px 8px 4px', boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: gauge.color ?? WATER_LINE, whiteSpace: 'pre'}}>{gauge.text}</div> : null}
	</div>;
};

// ---------- the rate graph ----------
export const rate = (t: number) => 2 * t * Math.exp(t * t);
export const RATE_WIN = {x: [-0.1, 1.15] as [number, number], y: [-0.5, 6.5] as [number, number]};
export const RateGraph: React.FC<{x: number; y: number; w: number; h: number; win?: {x: [number, number]; y: [number, number]}; fillTo?: number; fillO?: number; cursor?: {t: number; o: number}; yLabel?: string; ends?: number; children?: (m: PlotMap) => React.ReactNode}> = ({x, y, w, h, win = RATE_WIN, fillTo = 0, fillO = 1, cursor, yLabel = 'rate (L/s)', ends = 1, children}) => (
	<StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={[0.5, 1]} yTicks={[2, 4, 6]} xLabel="t (s)" yLabel={yLabel} at={-300}>
		{m => <>
			{fillTo > 0.001 && fillO > 0.01 ? <g clipPath={m.clip} opacity={fillO}><path d={regionPath(m, rate, 0, fillTo)} fill={UP.soft} stroke={UP.stroke} strokeWidth={3} /></g> : null}
			<g clipPath={m.clip}><path d={fnPath(m, rate, 0, 1, 200)} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
			{ends > 0.01 ? <g opacity={ends}>{[0, 1].map(t => <circle key={t} cx={m.p(t, rate(t))[0]} cy={m.p(t, rate(t))[1]} r={11} fill={INK} stroke={CARD} strokeWidth={4} />)}</g> : null}
			{cursor && cursor.o > 0.01 ? (() => {const [px, py] = m.p(cursor.t, rate(cursor.t)), [, by] = m.p(cursor.t, 0); return <g opacity={cursor.o}><line x1={px} x2={px} y1={py} y2={by} stroke={GREY} strokeWidth={3} strokeDasharray="8 7" /><circle cx={px} cy={py} r={13} fill={UP.stroke} stroke={CARD} strokeWidth={4} /></g>;})() : null}
			{children ? children(m) : null}
		</>}
	</StudioPlot>
);

// ---------- the decision tree ----------
export type ModelRow = {text: React.ReactNode; sub?: React.ReactNode; subAt?: number; icon: React.ReactNode; at: number; litAt?: number; glow?: number};
/** The decision tree large: a question card, then one row per branch (icon, words, formula), lit amber at litAt. */
export const ModelRows: React.FC<{x: number; y: number; w: number; question: string; rows: readonly ModelRow[]; size?: number; rowH?: number; at?: number; out?: number}> = ({x, y, w, question, rows, size = 38, rowH = 150, at = -30, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o}}>
		<div style={{display: 'inline-block', background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, border: `3px solid ${rows.some(r => r.litAt !== undefined && f >= r.litAt) ? KR.stroke : 'rgba(60,45,20,0.15)'}`, padding: '8px 30px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK}}>{question}</div>
		<svg width={60} height={rows.length * rowH + 40} style={{position: 'absolute', left: 24, top: 70, overflow: 'visible'}}>
			{rows.map((r, j) => {const ro = prog(f, r.at, 12), lit = r.litAt !== undefined ? prog(f, r.litAt, 10) : 0; return <path key={j} d={`M6,0 V${30 + j * rowH + rowH / 2 - 10} H56`} fill="none" stroke={lit > 0.5 ? KR.stroke : '#c9bfae'} strokeWidth={lit > 0.5 ? 6 : 4} opacity={ro} />;})}
		</svg>
		{rows.map((r, j) => {
			const ro = prog(f, r.at, 12), lit = r.litAt !== undefined ? prog(f, r.litAt, 10) : 0, gl = r.glow ?? 0;
			if (ro <= 0.001) return null;
			return <div key={j} style={{position: 'absolute', left: 84, top: 100 + j * rowH, width: w - 84, height: rowH - 18, boxSizing: 'border-box', opacity: ro, transform: `translateX(${(1 - smooth(ro)) * -20}px)`, display: 'flex', alignItems: 'center', gap: 24, padding: '6px 22px', borderRadius: 22,
				background: lit > 0 ? `rgba(248,232,200,${0.35 + 0.65 * lit})` : gl > 0.01 ? `rgba(248,232,200,${0.35 * gl})` : CARD, border: `3px solid ${lit > 0.5 ? KR.stroke : gl > 0.01 ? 'rgba(209,143,31,0.55)' : 'rgba(60,45,20,0.16)'}`, boxShadow: CARD_SHADOW}}>
				<div style={{flex: 'none', width: 150, height: rowH - 40, position: 'relative'}}>{r.icon}</div>
				<div style={{fontFamily: FONT_DISPLAY, lineHeight: 1.22}}>
					<div style={{fontWeight: 800, fontSize: size, color: lit > 0.5 ? KR.ink : INK}}>{r.text}</div>
					{r.sub ? <div style={{fontWeight: 700, fontSize: size - 6, color: INK, opacity: r.subAt !== undefined ? prog(f, r.subAt, 12) : 1}}>{r.sub}</div> : null}
				</div>
			</div>;
		})}
	</div>;
};

/** The decision tree's lit branch as a small card at the top right: the question in grey, the branch amber from `at`. */
export const TreeChip: React.FC<{q?: string; label: string; at: number; x?: number; y?: number}> = ({q = 'asks for:', label, at, x = 1180, y = 88}) => {
	const f = useCurrentFrame();
	const lit = prog(f, at, 12);
	return <div style={{position: 'absolute', left: x, top: y, display: 'flex', alignItems: 'center', gap: 14, opacity: 0.5 + 0.5 * lit}}>
		<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, color: GREY}}>{q}</span>
		<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: lit > 0.5 ? KR.ink : GREY, background: lit > 0 ? `rgba(248,232,200,${0.3 + 0.7 * lit})` : CARD, border: `3px solid ${lit > 0.5 ? KR.stroke : 'rgba(60,45,20,0.2)'}`, borderRadius: 999, padding: '2px 22px 4px', whiteSpace: 'pre', transform: `scale(${1 + 0.06 * lit * (1 - lit) * 4})`}}>{label}</span>
	</div>;
};

/** Fade a group in at `at` and out at `out`. */
export const FadeG: React.FC<{at: number; out?: number; children: React.ReactNode; dur?: number}> = ({at, out, children, dur = 12}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, dur);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>{children}</div>;
};

// ---------- small coded icons (150 × ~110) ----------
const IW = 150, IH = 110;
export const IconFamily: React.FC = () => <svg width={IW} height={IH} style={{overflow: 'visible'}}>{[0, 1, 2, 3].map(c => <path key={c} d={`M10,${92 - c * 20} Q75,${84 - c * 20} 140,${30 - c * 20 + 40}`} fill="none" stroke={c === 2 ? CONST.stroke : '#a59d90'} strokeWidth={c === 2 ? 6 : 3} />)}<text x={96} y={104} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: CONST.ink}}>+ C</text></svg>;
export const IconChange: React.FC = () => <svg width={IW} height={IH} style={{overflow: 'visible'}}><path d="M30,96 L30,70 Q75,48 120,26 L120,96 Z" fill={UP.soft} stroke={UP.stroke} strokeWidth={3} /><path d="M6,80 Q75,48 144,14" fill="none" stroke={INK} strokeWidth={5} /><line x1={4} x2={146} y1={96} y2={96} stroke={INK} strokeWidth={3} /><text x={24} y={124} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26, fill: INK}}>a</text><text x={114} y={124} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26, fill: INK}}>b</text></svg>;
export const IconSplit: React.FC = () => <svg width={IW} height={IH} style={{overflow: 'visible'}}><path d="M10,60 Q40,104 75,60 Z" fill={DOWN.soft} stroke={DOWN.stroke} strokeWidth={3} /><path d="M10,60 Q40,16 75,60 Z" fill={UP.soft} stroke={UP.stroke} strokeWidth={3} strokeDasharray="8 6" /><path d="M75,60 Q110,10 140,40" fill="none" stroke={INK} strokeWidth={4} /><path d="M75,60 Q110,10 140,40 L140,60 Z" fill={UP.soft} opacity={0.8} /><path d="M10,60 Q40,104 75,60" fill="none" stroke={INK} strokeWidth={4} /><line x1={4} x2={146} y1={60} y2={60} stroke={INK} strokeWidth={3} /><line x1={75} x2={75} y1={10} y2={104} stroke={GREY} strokeWidth={3} strokeDasharray="6 6" /></svg>;
export const IconTrap: React.FC = () => {const pts = [[12, 70], [44, 40], [76, 30], [108, 50], [140, 76]]; return <svg width={IW} height={IH} style={{overflow: 'visible'}}>{pts.slice(0, -1).map(([x0, y0], i) => {const [x1, y1] = pts[i + 1]; return <path key={i} d={`M${x0},100 L${x0},${y0} L${x1},${y1} L${x1},100 Z`} fill={TRAP_FILL} stroke={TRAP_STROKE} strokeWidth={3} />;})}{pts.map(([px, py], i) => <circle key={i} cx={px} cy={py} r={7} fill={INK} />)}<line x1={4} x2={146} y1={100} y2={100} stroke={INK} strokeWidth={3} /></svg>;};

// ---------- the investment stage (scene 13; the final frame; g03's opening) ----------
export const STRIP_SIMPLE = '$10,000 is invested at 6% p.a. simple interest for 10 years.';
export const STRIP_COMPOUND = '$10,000 is invested at 6% p.a. compounded annually for 10 years.';
/** Jar width for a given height (the coin jar plate at native aspect). */
export const jarW = (h: number) => (h * (D02_PLATES.jar.box[2] - D02_PLATES.jar.box[0])) / (D02_PLATES.jar.box[3] - D02_PLATES.jar.box[1]);
/** Coin level (0 to 1 of the jar's interior) for a balance in dollars, on the shared $9,000 to $19,000 scale. */
export const jarFill = (b: number) => Math.max(0.02, Math.min(1, (b - 9000) / 10000));
export type InvestLayout = {jx: number; y1: number; y2: number; jh: number; sx: number; sw: number; size: number};
export const INVEST_FULL: InvestLayout = {jx: 120, y1: 210, y2: 500, jh: 250, sx: 340, sw: 1360, size: 44};
const underline = (f: number, at: number) => prog(f, at, 16);
/** One investment strip: the differing phrase underlined amber (drawn from `ulAt`). */
export const InvestStrip: React.FC<{x: number; y: number; w: number; size: number; text: string; phrase: string; ulAt: number; chip?: {text: string; at: number}}> = ({x, y, w, size, text, phrase, ulAt, chip}) => {
	const f = useCurrentFrame();
	const [a, b] = text.split(phrase);
	const u = underline(f, ulAt);
	return <div style={{position: 'absolute', left: x, top: y, width: w, boxSizing: 'border-box', background: CARD, borderRadius: 18, borderLeft: `10px solid ${BROWN}`, boxShadow: CARD_SHADOW, padding: '12px 28px 16px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, lineHeight: 1.35, color: INK}}>
		{a}<span style={{position: 'relative', fontWeight: 800}}>{phrase}<span style={{position: 'absolute', left: 0, bottom: -2, height: 6, borderRadius: 3, width: `${u * 100}%`, background: KR.stroke}} /></span>{b}
		{chip ? <div style={{marginTop: 8, opacity: prog(f, chip.at, 12), display: 'inline-block', fontWeight: 800, fontSize: Math.max(28, size * 0.8), color: KR.ink, background: KR.soft, border: `3px solid ${KR.stroke}`, borderRadius: 999, padding: '0 20px 2px'}}>{chip.text}</div> : null}
	</div>;
};
/** The two strips with a coin jar beside each; `levels` are the two balances (dollars). */
export const InvestStage: React.FC<{L?: InvestLayout; ul1?: number; ul2?: number; balances?: [number, number]; chip1?: {text: string; at: number}; chip2?: {text: string; at: number}}> = ({L = INVEST_FULL, ul1 = -300, ul2 = -300, balances = [10000, 10000], chip1, chip2}) => {
	const jw = jarW(L.jh);
	return <>
		{[L.y1, L.y2].map((yy, i) => <CoinJar key={i} x={L.jx} y={yy} w={jw} balanceAt={() => 2 ** (3 * jarFill(balances[i]))} at={-300} />)}
		<InvestStrip x={L.sx} y={L.y1 + L.jh * 0.18} w={L.sw} size={L.size} text={STRIP_SIMPLE} phrase="simple interest" ulAt={ul1} chip={chip1} />
		<InvestStrip x={L.sx} y={L.y2 + L.jh * 0.18} w={L.sw} size={L.size} text={STRIP_COMPOUND} phrase="compounded annually" ulAt={ul2} chip={chip2} />
	</>;
};
