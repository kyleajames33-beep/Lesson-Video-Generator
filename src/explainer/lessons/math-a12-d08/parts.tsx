// Lesson parts for math-a12-d08 (the quotient rule and its domain; road-trip anchor): the dashboard rig
// (painted cluster with a coded needle, dial numbers and screen text), the quotient family, amber asymptote
// marks, the attempt layout and the handoff frame that d09 opens on. Generic helpers are imported read-only
// from math-a12-d04 and math-a12-d05 (same house style).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import type {Range} from '../../math/graphs';
import {
	CARD, CARD_SHADOW, Card, CardTitle, FrameSvg, GivensCard, QuestionCard, Role, RolesOn, SvgPlate, MATHS_SHARED_PLATES, MATH_AMBER, MATH_ANSWER, MATH_BLUE, MATH_EXCLUDED, MATH_GRADIENT, MATH_MISTAKE, MATH_ROLES, MATH_TEAL,
	plateMap, usePlatePreload, vis,
} from '../../math/studio';
import type {FnFamily, PlateSpec} from '../../math/studio';
import type {GMap} from '../math-a12-d04/parts';
import {PreRing} from '../math-a12-d04/parts';

export {Chip, CurveLabel, DISPLAY, Dot, Frac, HandNote, PreRing, RecallChip, TanLine, gmap} from '../math-a12-d04/parts';
export type {GMap} from '../math-a12-d04/parts';
export {WholeRows} from '../math-a12-d05/parts';

export const TEAL = MATH_TEAL;
export const BLUE = MATH_BLUE;
export const AMB = MATH_AMBER;
export const AMB_STROKE = MATH_ROLES.k.stroke;
export const VIOLET = MATH_GRADIENT;
export const GREEN = MATH_ANSWER;
export const RED = MATH_MISTAKE;
/** Light screen tints of the top and bottom roles (readable on the dark dashboard screens). */
export const SCREEN_TEAL = '#8fe0dc';
export const SCREEN_BLUE = '#9fcbf5';
export const SCREEN_INK = '#ffffff';

/** Role spans (switch off inside <RolesOn on={false}> on question cards). */
export const Tp: React.FC<{children: React.ReactNode}> = ({children}) => <Role r="b">{children}</Role>;
export const Bt: React.FC<{children: React.ReactNode}> = ({children}) => <Role r="a">{children}</Role>;
export const Am: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: AMB}}>{children}</span>;
export const Vi: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: VIOLET}}>{children}</span>;
/** Raised power that keeps the line height stable. */
export const Sup: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.62em', position: 'relative', top: '-0.78em', marginLeft: '0.03em', whiteSpace: 'pre'}}>{children}</span>;
export const EX = <>e<Sup>x</Sup></>;

// ---------- the hook quotient y = eˣ/(x + 1) ----------
export const QUOT: FnFamily = {
	f: u => Math.exp(u) / (u + 1),
	df: u => (u * Math.exp(u)) / ((u + 1) * (u + 1)),
	domain: [{from: -Infinity, to: -1}, {from: -1, to: Infinity}],
	excluded: [-1],
};
/** The top's turn f′/g and the bottom's turn −fg′/g² for eˣ/(x + 1). */
export const topTurn = (u: number) => Math.exp(u) / (u + 1);
export const bottomTurn = (u: number) => -Math.exp(u) / ((u + 1) * (u + 1));
export const WIN_A = {x: [-3, 2.5] as Range, y: [-4, 5] as Range};
export const A_YTICKS = [-4, -2, 2, 4];
/** d07's final frame (window A, 1300 x 640): d08 opens on it. */
export const JOIN = {x: 520, y: 250, w: 1300, h: 640};

// ---------- plates ----------
export const CAR = MATHS_SHARED_PLATES.car;
export const DASH = MATHS_SHARED_PLATES.dashboard;
/** Brief 235 tileable road (manifest: native 2172 x 724, alpha box full width, road top row 384, grey band 384 to 466). */
export const ROAD: PlateSpec = {src: 'assets/maths/ma12-country-road-v1.png', nat: [2172, 724], box: [0, 179, 2172, 514]};
export const TRIP_FILES = [ROAD.src, CAR.src, DASH.src];
const DIAL = {cx: 729, cy: 527, r: 283, startDeg: 216, endDeg: -35};
const SCREEN_MAIN = [1062, 428, 1572, 634] as const;
const SCREEN_SMALL = [1638, 472, 1938, 622] as const;
export const dashH = (w: number) => (w * (DASH.box[3] - DASH.box[1])) / (DASH.box[2] - DASH.box[0]);

/**
 * The painted dashboard with a coded needle (0 to 160 km/h over the painted tick arc), coded dial numbers
 * and coded text on its two blank screens. Drawn at native aspect.
 */
export const Dashboard: React.FC<{x: number; y: number; w: number; speed?: number; numbers?: boolean; main?: React.ReactNode; small?: React.ReactNode; at?: number; out?: number; needle?: boolean; ring?: number}> = ({x, y, w, speed = 0, numbers = true, main, small, at = -30, out, needle = true, ring = 0}) => {
	usePlatePreload([DASH.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(DASH, x, y, w);
	const [cx, cy] = m.at(DIAL.cx, DIAL.cy);
	const R = DIAL.r * m.s;
	const ang = (v: number) => ((DIAL.startDeg + (DIAL.endDeg - DIAL.startDeg) * Math.max(0, Math.min(1, v / 160))) * Math.PI) / 180;
	const a = ang(speed), L = R * 0.74;
	const nfs = Math.max(26, R * 0.2);
	const [s0x, s0y] = m.at(SCREEN_MAIN[0], SCREEN_MAIN[1]), [s1x, s1y] = m.at(SCREEN_MAIN[2], SCREEN_MAIN[3]);
	const [t0x, t0y] = m.at(SCREEN_SMALL[0], SCREEN_SMALL[1]), [t1x, t1y] = m.at(SCREEN_SMALL[2], SCREEN_SMALL[3]);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, pointerEvents: 'none'}}>
			<FrameSvg>
				<SvgPlate plate={DASH} x={x} y={y} w={w} />
				{numbers ? [0, 40, 80, 120, 160].map(v => <text key={v} x={cx + Math.cos(ang(v)) * R * 0.56} y={cy - Math.sin(ang(v)) * R * 0.56 + nfs * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: nfs, fill: '#f4f1ea'}}>{v}</text>) : null}
				{numbers ? <text x={cx} y={cy + R * 0.5} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: Math.max(26, nfs * 0.8), fill: '#cfd3d8'}}>km/h</text> : null}
				{needle ? <line x1={cx - Math.cos(a) * L * 0.16} y1={cy + Math.sin(a) * L * 0.16} x2={cx + Math.cos(a) * L} y2={cy - Math.sin(a) * L} stroke="#f0622f" strokeWidth={Math.max(5, R * 0.05)} strokeLinecap="round" /> : null}
				{needle ? <circle cx={cx} cy={cy} r={Math.max(9, R * 0.1)} fill="#2b2b2e" stroke="#9a9aa0" strokeWidth={3} /> : null}
				{ring > 0.001 ? <circle cx={cx} cy={cy} r={R * 1.08} fill="none" stroke={INK} strokeWidth={6} opacity={ring} strokeDasharray="10 8" /> : null}
			</FrameSvg>
			{main ? <div style={{position: 'absolute', left: s0x, top: s0y, width: s1x - s0x, height: s1y - s0y, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: SCREEN_INK, fontFamily: FONT_DISPLAY, fontWeight: 800, lineHeight: 1.05, whiteSpace: 'pre'}}>{main}</div> : null}
			{small ? <div style={{position: 'absolute', left: t0x, top: t0y, width: t1x - t0x, height: t1y - t0y, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: SCREEN_INK, fontFamily: FONT_DISPLAY, fontWeight: 800, lineHeight: 1.05, whiteSpace: 'pre'}}>{small}</div> : null}
		</div>
	);
};
/** Frame-space centre of the dashboard's dial and of its main screen (for rings and leaders). */
export const dashPoints = (x: number, y: number, w: number) => {
	const m = plateMap(DASH, x, y, w);
	const [cx, cy] = m.at(DIAL.cx, DIAL.cy);
	const [s0x, s0y] = m.at(SCREEN_MAIN[0], SCREEN_MAIN[1]), [s1x, s1y] = m.at(SCREEN_MAIN[2], SCREEN_MAIN[3]);
	return {dial: [cx, cy] as [number, number], R: DIAL.r * m.s, screen: [(s0x + s1x) / 2, (s0y + s1y) / 2] as [number, number], screenBox: [s0x, s0y, s1x, s1y] as const};
};

/** Small dashboard badge with hand tags under it (scenes 2, 3, 8, 12, 13). */
export const DashBadge: React.FC<{x: number; y: number; w?: number; at?: number; out?: number; tags?: {text: string; color: string; at?: number; glow?: number}[]; tagSize?: number}> = ({x, y, w = 300, at = -30, out, tags = [], tagSize = 36}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const h = dashH(w);
	return (
		<>
			<Dashboard x={x} y={y} w={w} speed={100} numbers={false} at={at} out={out} />
			<div style={{position: 'absolute', left: x, top: y + h + 6, width: w + 40, opacity: o}}>
				{tags.map((t, i) => (
					<div key={i}><div style={{opacity: prog(f, t.at ?? at, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: tagSize, color: t.color, lineHeight: 1.12, whiteSpace: 'pre', display: 'inline-block', borderRadius: 10, padding: '0 8px', margin: '0 -8px', background: t.glow ? `rgba(220,234,247,${t.glow})` : undefined}}>{t.text}</div></div>
				))}
			</div>
		</>
	);
};

// ---------- graph marks ----------
/** Amber dashed asymptote across a plot box, with an optional label at its top. */
export const Asym: React.FC<{M: GMap; X: number; o?: number; label?: string; glow?: number; color?: string}> = ({M, X, o = 1, label, glow = 0, color = AMB_STROKE}) => {
	if (o <= 0.001) return null;
	const [px] = M.pt(X, 0);
	return (
		<g opacity={o}>
			{glow > 0.001 ? <line x1={px} x2={px} y1={M.box.top} y2={M.box.top + M.box.height} stroke="#f8e8c8" strokeWidth={22} opacity={glow} /> : null}
			<line x1={px} x2={px} y1={M.box.top} y2={M.box.top + M.box.height} stroke={color} strokeWidth={4} strokeDasharray="12 9" />
			{label ? <text x={px + 12} y={M.box.top + 34} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: color === AMB_STROKE ? AMB : color}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{label}</text> : null}
		</g>
	);
};
/** Open circle on the x-axis at an excluded x (amber by default). */
export const OpenMark: React.FC<{M: GMap; X: number; o?: number; color?: string; r?: number}> = ({M, X, o = 1, color = AMB_STROKE, r = 14}) => {
	if (o <= 0.001) return null;
	const [px, py] = M.pt(X, 0);
	return <circle cx={px} cy={py} r={r} fill={CARD} stroke={color} strokeWidth={5} opacity={o} />;
};
/** Hand-drawn ring at a frame point. */
export const Ring: React.FC<{p: [number, number]; r?: number; o?: number; color?: string}> = ({p, r = 30, o = 1, color = INK}) => (o <= 0.001 ? null : <circle cx={p[0]} cy={p[1]} r={r} fill="none" stroke={color} strokeWidth={5} opacity={o} />);

// ---------- attempt pictures and layout ----------
/**
 * Question picture: the quotient's structure (top box over bottom box, tagged "top" and "bottom") beside a
 * plain x number line or bare axes with an optional marked x. Nothing answer-bearing. About 900 x 380.
 */
export const QuotPicture: React.FC<{top: React.ReactNode; bottom: React.ReactNode; w?: number; h?: number; axis: {range: [number, number]; ticks: number[]; mark?: {x: number; label: string; tag: string}; tag?: string}; boxNote?: React.ReactNode}> = ({top, bottom, w = 900, h = 380, axis, boxNote}) => {
	const fw = 330;
	const aw = w - fw - 30;
	const pad = {l: 34, r: 40};
	const X = (v: number) => pad.l + ((v - axis.range[0]) / (axis.range[1] - axis.range[0])) * (aw - pad.l - pad.r);
	const oy = h * 0.6;
	const box: React.CSSProperties = {border: `4px solid ${INK}`, borderRadius: 14, padding: '6px 22px', background: CARD, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK, whiteSpace: 'pre', textAlign: 'center', minWidth: 150};
	return (
		<div style={{width: w, height: h, display: 'flex', gap: 30, background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<div style={{width: fw, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 14}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK, width: 90, textAlign: 'right'}}>top</span><div style={box}>{top}</div></div>
				<div style={{height: 6, width: 200, background: INK, borderRadius: 3, margin: '14px 0 14px 104px'}} />
				<div style={{display: 'flex', alignItems: 'center', gap: 14}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK, width: 90, textAlign: 'right'}}>bottom</span><div style={box}>{bottom}</div></div>
				{boxNote}
			</div>
			<svg width={aw} height={h} viewBox={`0 0 ${aw} ${h}`} style={{display: 'block', overflow: 'visible'}}>
				<path d={`M${pad.l - 10},${oy} H${aw - pad.r + 16}`} stroke={INK} strokeWidth={4} fill="none" />
				<path d={`M${aw - pad.r + 4},${oy - 10} L${aw - pad.r + 18},${oy} L${aw - pad.r + 4},${oy + 10}`} stroke={INK} strokeWidth={4} fill="none" />
				<text x={aw - pad.r + 14} y={oy - 20} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>x</text>
				{axis.ticks.map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={oy - 10} y2={oy + 10} stroke={INK} strokeWidth={3} /><text x={X(t)} y={oy + 50} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{t < 0 ? '−' + Math.abs(t) : t}</text></g>)}
				{axis.mark ? <g>
					<line x1={X(axis.mark.x)} x2={X(axis.mark.x)} y1={oy} y2={oy - 150} stroke={VIOLET} strokeWidth={4} strokeDasharray="9 8" />
					<circle cx={X(axis.mark.x)} cy={oy} r={11} fill={VIOLET} stroke={CARD} strokeWidth={4} />
					<text x={X(axis.mark.x)} y={oy + 90} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: VIOLET}}>{axis.mark.label}</text>
					<text x={X(axis.mark.x)} y={oy - 166} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: VIOLET}}>{axis.mark.tag}</text>
				</g> : null}
				{axis.tag ? <text x={aw / 2} y={oy - 110} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: INK}}>{axis.tag}</text> : null}
			</svg>
		</div>
	);
};

/** The d02 to d05 attempt layout: question card, a 44 px Given card, the answer-free picture, full ring from "Pause here". */
export const Attempt: React.FC<{hold: {startFrame: number; endFrame: number}; pauseAt: number; picture: React.ReactNode; given: React.ReactNode[]; heading?: string; size?: number; children: React.ReactNode}> = ({hold, pauseAt, picture, given, heading, size = 54, children}) => (
	<RolesOn on={false}>
		<Card x={96} y={560} w={640} at={6} pad="14px 26px 16px">
			<CardTitle>Given</CardTitle>
			{given.map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, marginTop: 4, whiteSpace: 'pre'}}>{g}</div>)}
		</Card>
		<Enter at={6} style={{position: 'absolute', left: 770, top: 556}}>{picture}</Enter>
		<QuestionCard at={0} size={size} w={1460} y={214} hold={hold} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
		<PreRing from={pauseAt} start={hold.startFrame} />
	</RolesOn>
);

// ---------- the handoff frame (scene 13's final frame; d09 opens on it) ----------
/** Number line of the handoff: x from −3 to 2.5 over 1500 px (window A's x scale when its plot box is 1500 wide). */
export const HANDOFF = {lineX: 210, lineW: 1500, lineY: 640, range: [-3, 2.5] as [number, number]};
export const handoffX = (v: number) => HANDOFF.lineX + ((v - HANDOFF.range[0]) / (HANDOFF.range[1] - HANDOFF.range[0])) * HANDOFF.lineW;
export const HandoffBoard: React.FC<{boxAt?: number; lineAt?: number; qAt?: number; chipAt?: number; greyAt?: number; chip?: boolean}> = ({boxAt = -30, lineAt = -30, qAt = -30, chipAt = -30, greyAt, chip = true}) => {
	const f = useCurrentFrame();
	const lo = prog(f, lineAt, 14);
	const g = greyAt === undefined ? 0 : prog(f, greyAt, 16);
	const exCol = g > 0.5 ? MATH_EXCLUDED : AMB_STROKE;
	const exInk = g > 0.5 ? MATH_EXCLUDED : AMB;
	const {lineY} = HANDOFF;
	const mids = [(-3 + -1) / 2, (-1 + 0) / 2, (0 + 2.5) / 2];
	return (
		<>
			<Enter at={boxAt} style={{position: 'absolute', left: 0, right: 0, top: 250, display: 'flex', justifyContent: 'center'}}>
				<div style={{display: 'inline-flex', alignItems: 'center', gap: 26, background: CARD, borderRadius: 20, padding: '14px 40px', boxShadow: CARD_SHADOW, border: `5px solid ${GREEN}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: INK, whiteSpace: 'pre'}}>
					<span>dy/dx = </span>
					<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.86em', lineHeight: 1.1}}>
						<span>x{EX}</span>
						<span style={{alignSelf: 'stretch', height: 5, background: INK, borderRadius: 2}} />
						<span>(x + 1)<Sup>2</Sup></span>
					</span>
					<span style={{color: exInk, fontSize: '0.8em'}}>,  x ≠ −1</span>
				</div>
			</Enter>
			<FrameSvg style={{opacity: lo}}>
				<line x1={HANDOFF.lineX - 30} x2={HANDOFF.lineX + HANDOFF.lineW + 30} y1={lineY} y2={lineY} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				<path d={`M${HANDOFF.lineX + HANDOFF.lineW + 20},${lineY - 14} L${HANDOFF.lineX + HANDOFF.lineW + 40},${lineY} L${HANDOFF.lineX + HANDOFF.lineW + 20},${lineY + 14}`} stroke={INK} strokeWidth={5} fill="none" />
				<text x={HANDOFF.lineX + HANDOFF.lineW + 40} y={lineY - 26} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, fill: INK_SOFT}}>x</text>
				{[-3, -2, -1, 0, 1, 2].map(v => <g key={v}><line x1={handoffX(v)} x2={handoffX(v)} y1={lineY - 12} y2={lineY + 12} stroke={INK} strokeWidth={4} /><text x={handoffX(v)} y={lineY + 58} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, fill: INK}}>{v < 0 ? '−' + Math.abs(v) : v}</text></g>)}
				<line x1={handoffX(-1)} x2={handoffX(-1)} y1={lineY - 90} y2={lineY + 90} stroke={exCol} strokeWidth={4} strokeDasharray="10 9" />
				<circle cx={handoffX(-1)} cy={lineY} r={17} fill={CARD} stroke={exCol} strokeWidth={6} />
				<text x={handoffX(-1)} y={lineY + 122} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: exInk}}>excluded</text>
				<circle cx={handoffX(0)} cy={lineY} r={14} fill={INK} stroke={CARD} strokeWidth={4} />
				<text x={handoffX(0)} y={lineY + 122} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: INK}}>dy/dx = 0</text>
				{mids.map((v, i) => <text key={i} x={handoffX(v)} y={lineY - 44} textAnchor="middle" opacity={prog(f, qAt + i * 8, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, fill: VIOLET}}>?</text>)}
			</FrameSvg>
			{chip ? <Enter at={chipAt} style={{position: 'absolute', left: 0, right: 0, top: 870, display: 'flex', justifyContent: 'center'}}>
				<div style={{background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 22px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: '#4f4840', whiteSpace: 'pre'}}>Next: derivative signs and turning points</div>
			</Enter> : null}
		</>
	);
};
/** The memory line and dashboard badge that sit small at the top of the handoff frame. */
export const HandoffTop: React.FC<{at?: number}> = ({at = -30}) => (
	<>
		<Enter at={at} style={{position: 'absolute', left: 96, top: 104}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK, whiteSpace: 'pre'}}>lo d(hi) − hi d(lo), over lo²</span></Enter>
		<Dashboard x={1610} y={96} w={210} numbers={false} speed={100} at={at} />
	</>
);

/** The kit GivensCard, appearing with its first line and growing as each line arrives (no empty card). */
export const Givens: React.FC<Omit<React.ComponentProps<typeof GivensCard>, 'at'> & {at?: number}> = ({lines, at, ...rest}) => {
	const f = useCurrentFrame();
	const first = Math.min(...lines.map(l => l.at));
	return <GivensCard {...rest} at={at ?? first - 4} lines={lines.filter(l => f >= l.at - 2)} />;
};
