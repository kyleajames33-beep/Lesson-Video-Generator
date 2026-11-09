// Lesson parts for math-a12-d03 (Revision 4), built on the maths studio kit (src/explainer/math/studio).
// The app anchor is painted (brief 235 phone and stopwatch plates), always drawn at native aspect; the phone's
// screen text and the stopwatch hand are coded on top of the plates.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, CardTitle, QuestionCard, RolesOn, FrameSvg, LOG_BASE_FAMILY, EXP_BASE_FAMILY, PlateImg, Pow, Role, StopwatchHand, SvgPlate, plateHeight, plateMap, usePlatePreload, vis,
	MATH_GRADIENT, MATH_BLUE, MATH_AMBER, MATH_TEAL, CARD, CARD_SHADOW,
} from '../../math/studio';
import type {FnFamily, FnRow, PlateSpec} from '../../math/studio';

const M = 'assets/maths/';
/** Brief 235 plates (manifest native size, alpha box and anchors). */
export const D03_PLATES = {
	phone: {src: M + 'ma12-phone-v1.png', nat: [971, 1657], box: [138, 148, 830, 1524]} as PlateSpec,
	stopwatch: {src: M + 'ma12-stopwatch-v1.png', nat: [1086, 1448], box: [155, 160, 930, 1236]} as PlateSpec,
};
/** Phone screen safe rectangle and stopwatch dial (file pixels, brief 235 manifest anchors). */
export const PHONE_SCREEN = [175, 239, 795, 1429] as const;
export const DIAL = {cx: 543, cy: 848, r: 328};

/** y = e^x curve colour (navy, distinct from the blue gradient × x role). */
export const NAVY = '#2b3f73';
export const LN = {...LOG_BASE_FAMILY} as FnFamily;
export const EXP = EXP_BASE_FAMILY;
/** Square main window with equal units (the reflection needs a true mirror). */
export const SQ = {x: [-3, 5] as [number, number], y: [-3, 5] as [number, number]};
export const SQ_TICKS = [-2, -1, 1, 2, 3, 4];

export const DISPLAY = (size: number, color: string = INK, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, color, whiteSpace: 'pre', lineHeight: 1.15});

export const fmtUsers = (thousands: number) => Math.round(thousands * 1000).toLocaleString('en-AU');

/** Colour-role key along the top right. */
export const Legend: React.FC<{at?: number}> = ({at = 0}) => {
	const f = useCurrentFrame();
	const o = at <= 0 ? 1 : prog(f, at, 14);
	const items: [string, string][] = [[MATH_GRADIENT, 'gradient'], [MATH_BLUE, 'gradient × x'], [MATH_AMBER, 'number in front'], [MATH_TEAL, 'number inside']];
	return (
		<div style={{position: 'absolute', right: 96, top: 30, opacity: o, display: 'flex', gap: 28, alignItems: 'baseline'}}>
			{items.map(([c, t]) => <span key={t} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: c}}>{t}</span>)}
		</div>
	);
};

/**
 * AppCounter: the painted phone with a live user count and weekly arrivals on its screen, and the painted
 * stopwatch with a coded hand (one turn per week). Users and weeks come from one supplied state.
 */
export const AppRig: React.FC<{phone: {x: number; y: number; h: number}; watch?: {x: number; y: number; h: number}; users: number; perWeek?: number | null; weeks: number; at?: number; out?: number; rows?: {label?: string; value: string; color?: string}[]; watchLabel?: string}> = ({phone, watch, users, perWeek, weeks, at = -30, out, rows, watchLabel}) => {
	usePlatePreload([D03_PLATES.phone.src, D03_PLATES.stopwatch.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const P = D03_PLATES.phone, S = D03_PLATES.stopwatch;
	const pw = (phone.h * (P.box[2] - P.box[0])) / (P.box[3] - P.box[1]);
	const sw = watch ? (watch.h * (S.box[2] - S.box[0])) / (S.box[3] - S.box[1]) : 0;
	const dial = watch ? plateMap(S, watch.x, watch.y, sw) : null;
	const [dcx, dcy] = dial ? dial.at(DIAL.cx, DIAL.cy) : [0, 0];
	const screenRows = rows ?? [
		{label: 'users', value: fmtUsers(users)},
		...(perWeek === undefined ? [] : [{label: 'new per week', value: perWeek === null ? '?' : fmtUsers(perWeek), color: '#d6c6ff'}]),
	];
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<FrameSvg><SvgPlate plate={P} x={phone.x} y={phone.y} w={pw} /></FrameSvg>
			{(() => {
				const pm = plateMap(P, phone.x, phone.y, pw);
				const [sx0, sy0] = pm.at(PHONE_SCREEN[0], PHONE_SCREEN[1]), [sx1, sy1] = pm.at(PHONE_SCREEN[2], PHONE_SCREEN[3]);
				const sw0 = sx1 - sx0;
				const big = Math.max(30, Math.min(56, sw0 / 4.2));
				return <div style={{position: 'absolute', left: sx0, top: sy0, width: sw0, height: sy1 - sy0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, textAlign: 'center'}}>
					{screenRows.map((r, i) => <div key={i}>
						{r.label ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, color: '#cfe3df', lineHeight: 1.1}}>{r.label}</div> : null}
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: big, color: r.color ?? '#ffffff', lineHeight: 1.1, fontVariantNumeric: 'tabular-nums', whiteSpace: 'pre'}}>{r.value}</div>
					</div>)}
				</div>;
			})()}
			{watch && dial ? <>
				<FrameSvg><SvgPlate plate={S} x={watch.x} y={watch.y} w={sw} /></FrameSvg>
				<StopwatchHand cx={dcx} cy={dcy} r={DIAL.r * dial.s * 0.86} seconds={weeks} period={1} color="#b8322a" />
				{watchLabel !== undefined ? <div style={{position: 'absolute', left: dcx - 150, width: 300, top: dcy + DIAL.r * dial.s * 0.28, textAlign: 'center', ...DISPLAY(Math.max(28, sw * 0.13), INK, 800), fontVariantNumeric: 'tabular-nums'}}>{watchLabel}</div> : null}
			</> : null}
		</div>
	);
};

/** Small static phone icon (memory card, key notes). */
export const PhoneIcon: React.FC<{x?: number; y?: number; h: number}> = ({x = 0, y = 0, h}) => {
	const P = D03_PLATES.phone;
	return <PlateImg plate={P} x={x} y={y} w={(h * (P.box[2] - P.box[0])) / (P.box[3] - P.box[1])} />;
};
export const WatchIcon: React.FC<{x?: number; y?: number; h: number}> = ({x = 0, y = 0, h}) => {
	const S = D03_PLATES.stopwatch;
	return <PlateImg plate={S} x={x} y={y} w={(h * (S.box[2] - S.box[0])) / (S.box[3] - S.box[1])} />;
};
export const phoneW = (h: number) => (h * 692) / 1376;
export const plateH = plateHeight;

/** Grey recall chip. */
export const RecallChip: React.FC<{x: number; y: number; w?: number; at: number; out?: number; children: React.ReactNode; size?: number}> = ({x, y, w, at, out, children, size = 32}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 18px', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, color: '#4f4840', lineHeight: 1.3}}>{children}</div>
	</Enter>
);

/** Paper chip in a role colour (summary strips, contrast chips). */
export const Chip: React.FC<{x: number; y: number; at: number; out?: number; children: React.ReactNode; size?: number; color?: string; border?: string; glow?: [number, number]}> = ({x, y, at, out, children, size = 40, color = INK, border = 'rgba(60,45,20,0.16)', glow}) => {
	const f = useCurrentFrame();
	const g = glow ? vis(f, glow[0], glow[1], 10) : 0;
	return (
		<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
			<div style={{display: 'inline-block', background: CARD, borderRadius: 16, padding: '4px 22px 8px', border: `3px solid ${border}`, boxShadow: g > 0 ? `0 0 0 ${8 * g}px rgba(31,111,178,0.25), ${CARD_SHADOW}` : '0 8px 18px rgba(60,45,20,0.08)', ...DISPLAY(size, color)}}>{children}</div>
		</Enter>
	);
};

/** Curve label at a chosen frame point. */
export const CurveLabel: React.FC<{x: number; y: number; at?: number; out?: number; color?: string; children: React.ReactNode; size?: number; anchor?: 'start' | 'end'}> = ({x, y, at = -30, out, color = INK, children, size = 46, anchor = 'start'}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: x, top: y, transform: anchor === 'end' ? 'translateX(-100%)' : undefined, opacity: vis(f, at, out, 12), ...DISPLAY(size, color), textShadow: '0 0 6px #fffdf8, 0 0 12px #fffdf8'}}>{children}</div>;
};

/** Ruled, dashed response space under a question card; nothing answer-bearing. */
export const WorkingSpace: React.FC<{x?: number; y?: number; w?: number; h?: number}> = ({x = 96, y = 650, w = 1460, h = 170}) => (
	<div style={{position: 'absolute', left: x, top: y, width: w, height: h, boxSizing: 'border-box', border: '3px dashed rgba(60,45,20,0.28)', borderRadius: 18, background: 'repeating-linear-gradient(to bottom, transparent 0 54px, rgba(60,45,20,0.10) 54px 56px)'}}>
		<span style={{position: 'absolute', left: 22, top: 8, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK_SOFT}}>your working</span>
	</div>
);

/** Built-up fraction 1/x (inline). */
export const Frac: React.FC<{n: React.ReactNode; d: React.ReactNode}> = ({n, d}) => (
	<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', fontSize: '0.78em', lineHeight: 1.02, margin: '0 0.08em'}}>
		<span style={{padding: '0 0.12em'}}>{n}</span>
		<span style={{alignSelf: 'stretch', height: '0.07em', background: 'currentColor', borderRadius: 2}} />
		<span style={{padding: '0 0.12em'}}>{d}</span>
	</span>
);
/** d/dx(ln x) = 1/x */
export const LnRule: React.FC<{dom?: boolean}> = ({dom = false}) => <>d/dx(ln x) = <Frac n="1" d="x" />{dom ? ', x > 0' : ''}</>;
export const EPow: React.FC<{p: React.ReactNode}> = ({p}) => <>e<Pow>{p}</Pow></>;
export {Role};

/** Readout rows for a FunctionSimulator on ln x (x, height, gradient, gradient × x). Uses the carried point and slope. */
export const lnRows = (opts: {only?: ('x' | 'h' | 'g' | 'gx')[]; markGx?: number; glowGx?: [number, number]} = {}): FnRow[] => {
	const all: Record<string, FnRow> = {
		x: {label: 'x', role: 'height', value: s => s.px},
		h: {label: 'height', role: 'height', value: s => s.py, digits: 3},
		g: {label: 'gradient', role: 'gradient', value: s => s.pslope, digits: 3},
		gx: {label: 'gradient × x', role: 'a', value: s => s.pslope * s.px, mark: opts.markGx !== undefined ? {kind: 'box', at: opts.markGx, role: 'a'} : undefined, glow: opts.glowGx},
	};
	return (opts.only ?? ['x', 'h', 'g', 'gx']).map(k => all[k]);
};

/** Small axes picture with only a violet tag (no point, no curve): answer-free question picture. */
export const BlankAxes: React.FC<{w?: number; h?: number; tag: string; tickX?: {at: number; label: string}}> = ({w = 360, h = 280, tag, tickX}) => {
	const ox = 60, oy = h - 70;
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)'}}>
			<path d={`M20,${oy} H${w - 20} M${ox},20 V${h - 20}`} stroke={INK} strokeWidth={3} fill="none" />
			<text x={w - 24} y={oy - 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: INK_SOFT}}>x</text>
			<text x={ox + 10} y={44} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: INK_SOFT}}>y</text>
			{tickX ? <g><line x1={ox + tickX.at} x2={ox + tickX.at} y1={oy - 8} y2={oy + 8} stroke={INK} strokeWidth={3} /><text x={ox + tickX.at} y={oy + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{tickX.label}</text></g> : null}
			<text x={w / 2 + 20} y={oy - 70} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: MATH_GRADIENT}}>{tag}</text>
		</svg>
	);
};

/** Full countdown ring from "Pause here to answer." until the kit's timed countdown takes over (start − 10). */
export const FullRing: React.FC<{from: number; until: number; x?: number; y?: number; r?: number}> = ({from, until, x = 1690, y = 560, r = 70}) => {
	const f = useCurrentFrame();
	if (f < from || f >= until) return null;
	const a = prog(f, from, 10);
	return (
		<FrameSvg>
			<g opacity={a} transform={`translate(${x},${y})`}>
				<circle r={r + 16} fill="#fffdf8" stroke="rgba(0,0,0,0.06)" strokeWidth={2} />
				<circle r={r} fill="none" stroke={AMBER} strokeWidth={14} strokeLinecap="round" />
				<text y={16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52}} fill={INK}>10</text>
				<text y={r + 62} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK}>think it through</text>
			</g>
		</FrameSvg>
	);
};

/**
 * Attempt stage: the full worded question card (no answer-bearing colour), a large answer-free picture and a
 * "Given" card, the full ring from "Pause here to answer." and the kit countdown in the hold.
 */
export const AttemptStage: React.FC<{hold: {startFrame: number; endFrame: number}; pauseAt: number; picture: React.ReactNode; given: React.ReactNode[]; children: React.ReactNode}> = ({hold, pauseAt, picture, given, children}) => (
	<RolesOn on={false}>
		<QuestionCard at={0} size={54} w={1460} y={214} hold={hold} pauseAt={pauseAt}>{children}</QuestionCard>
		<Card x={96} y={560} w={700} at={6} pad="14px 26px 16px">
			<CardTitle>Given</CardTitle>
			{given.map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, marginTop: 4, whiteSpace: 'pre'}}>{g}</div>)}
		</Card>
		<Enter at={6} style={{position: 'absolute', left: 860, top: 540}}>{picture}</Enter>
		<FullRing from={pauseAt} until={hold.startFrame - 10} />
	</RolesOn>
);
