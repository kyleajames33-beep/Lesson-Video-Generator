// Lesson parts for math-a12-d01, built on the maths studio kit (src/explainer/math/studio).
// Plates are drawn at their native aspect (PlateImg / SvgPlate); nothing here draws a coded organism.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {
	Card, CardTitle, FrameSvg, GrowthField, MA12_PLATES, MATH_ROLES, MagnifierLeader, PlateImg, Pow, Role, plateHeight, roleInk, fmtNum, vis,
	MATH_GRADIENT, MATH_ANSWER, CARD,
} from '../../math/studio';
import type {PlateSpec, RoleKey} from '../../math/studio';

export const FLASK = MA12_PLATES.flask;
export const FLASK_CLOUDY = MA12_PLATES.flaskCloudy;
export const flaskH = (w: number) => plateHeight(FLASK, w);
/** Point in the broth of a flask drawn at (x, y) with width w (alpha box coordinates). */
export const brothPoint = (x: number, y: number, w: number): [number, number] => [x + 0.5035 * w, y + 0.86 * w];

export const DISPLAY = (size: number, color: string = INK, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, color, whiteSpace: 'pre', lineHeight: 1.15});

/** e with a raised power, optional multiple k in front. */
export const E: React.FC<{k?: React.ReactNode; p: React.ReactNode}> = ({k, p}) => <>{k}e<Pow>{p}</Pow></>;
/** The general form k e^(ax+b) in role colours. */
export const General: React.FC<{k?: boolean}> = ({k = true}) => <>{k ? <Role r="k">k</Role> : null}e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow></>;
/** d/dx(k e^(ax+b)) = k·a·e^(ax+b) */
export const KRule: React.FC = () => <>d/dx(<Role r="k">k</Role>e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow>) = <Role r="k">k</Role>·<Role r="a">a</Role>·e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow></>;

/** Colour-role key along the top right (from the end of scene 2 to the handoff). */
export const Legend: React.FC<{at?: number}> = ({at = 0}) => {
	const f = useCurrentFrame();
	const o = at <= 0 ? 1 : prog(f, at, 14);
	const items: [RoleKey, string, string][] = [['k', 'k', 'how many flasks'], ['a', 'a', 'growth per cell'], ['b', 'b', 'start time']];
	return (
		<div style={{position: 'absolute', right: 96, top: 30, opacity: o, display: 'flex', gap: 30, alignItems: 'baseline'}}>
			{items.map(([r, s, t]) => (
				<span key={r} style={{display: 'flex', alignItems: 'baseline', gap: 8}}>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: MATH_ROLES[r].ink}}>{s}</span>
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, color: roleInk(r)}}>{t}</span>
				</span>
			))}
		</div>
	);
};

/** A flask plate with an optional cloudy cross-fade, a magnifier leader and a live microscope field (frame coordinates). */
export const FlaskField: React.FC<{
	x: number; y: number; w: number; cloudy?: number; plateOpacity?: number;
	field?: {cx: number; cy: number; d: number; countAt: (g: number) => number; seed?: number; maxCells?: number; at?: number; out?: number; falling?: boolean; maxStartCells?: number; cellLength?: number};
	leaderAt?: number; leaderOut?: number; cloudyPlate?: PlateSpec;
}> = ({x, y, w, cloudy = 0, plateOpacity = 1, field, leaderAt, leaderOut, cloudyPlate = FLASK_CLOUDY}) => (
	<>
		<PlateImg plate={FLASK} x={x} y={y} w={w} opacity={plateOpacity * (1 - 0.0 * cloudy)} />
		{cloudy > 0.01 ? <PlateImg plate={cloudyPlate} x={x} y={y} w={w} opacity={plateOpacity * Math.min(1, cloudy)} /> : null}
		{field && leaderAt !== undefined ? <MagnifierLeader from={brothPoint(x, y, w)} r={Math.max(12, w * 0.05)} to={[field.cx, field.cy]} R={field.d / 2} at={leaderAt} out={leaderOut} /> : null}
		{field ? <GrowthField cx={field.cx} cy={field.cy} d={field.d} countAt={field.countAt} seed={field.seed ?? 7} maxCells={field.maxCells ?? 30} at={field.at ?? 0} out={field.out} falling={field.falling} maxStartCells={field.maxStartCells} cellLength={field.cellLength} /> : null}
	</>
);

/** Small live ticker line: label above, number with unit. */
const Tick: React.FC<{label: string; value: number; unit: string; role: RoleKey; size?: number; glow?: number}> = ({label, value, unit, role, size = 44, glow = 0}) => (
	<div style={{padding: '2px 8px', margin: '0 -8px', borderRadius: 10, background: glow > 0 ? `rgba(231,224,242,${glow})` : undefined}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, color: roleInk(role), lineHeight: 1.1}}>{label}</div>
		<div style={{display: 'flex', alignItems: 'baseline', gap: 8}}>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: roleInk(role), fontVariantNumeric: 'tabular-nums'}}>{fmtNum(value)}</span>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, color: INK_SOFT}}>{unit}</span>
		</div>
	</div>
);

/**
 * Thumbnail of a flask with its live field and two tickers (count and growth rate), shown beside a graph so
 * the anchor keeps running while the maths is drawn. Card 310 x 440.
 */
export const FlaskThumb: React.FC<{x: number; y: number; at?: number; out?: number; label: string; labelRole?: RoleKey; cells: number; rate: number; countAt: (g: number) => number; seed?: number; cloudy?: number; glow?: [number, number]}> = ({x, y, at = 0, out, label, labelRole, cells, rate, countAt, seed = 3, cloudy = 0.2, glow}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const g = glow ? vis(f, glow[0], glow[1], 8) : 0;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<Card x={x} y={y} w={310} h={448} at={-30} pad="12px 20px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: roleInk(labelRole), lineHeight: 1}}>{label}</div>
				<div style={{position: 'absolute', left: 20, top: 222}}>
					<Tick label="cells" value={cells} unit="million" role="height" glow={g} />
					<div style={{height: 8}} />
					<Tick label="growth rate, per hour" value={rate} unit="million" role="gradient" glow={g} />
				</div>
			</Card>
			<FlaskField x={x + 14} y={y + 64} w={118} cloudy={cloudy} field={{cx: x + 222, cy: y + 140, d: 156, countAt, seed, maxCells: 30}} />
		</div>
	);
};

/** Bottom strip: the experiment clock, hours since it started. */
export const ClockStrip: React.FC<{x: number; y: number; w: number; hours: number; max: number; at?: number}> = ({x, y, w, hours, max, at = 0}) => {
	const f = useCurrentFrame();
	const T0 = 150, T1 = w - 330;
	const px = (h: number) => T0 + (Math.max(0, Math.min(max, h)) / max) * (T1 - T0);
	return (
		<Card x={x} y={y} w={w} h={96} at={at} pad="0">
			<div style={{position: 'relative', height: 96, opacity: prog(f, at, 12)}}>
				<div style={{position: 'absolute', left: 26, top: 22}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>clock</span></div>
				<svg width={w} height={96} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
					<line x1={T0} x2={T1} y1={40} y2={40} stroke={PAPER_DEEP} strokeWidth={12} strokeLinecap="round" />
					<line x1={T0} x2={px(hours)} y1={40} y2={40} stroke={INK_SOFT} strokeWidth={12} strokeLinecap="round" />
					{[0, 0.5, 1].map(v => <g key={v}><line x1={px(v)} x2={px(v)} y1={52} y2={62} stroke={INK_SOFT} strokeWidth={3} /><text x={px(v)} y={88} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: INK_SOFT}}>{v === 0.5 ? '½ h' : `${v} h`}</text></g>)}
					<circle cx={px(hours)} cy={40} r={17} fill={CARD} stroke={INK} strokeWidth={5} />
				</svg>
				<div style={{position: 'absolute', right: 30, top: 18, ...DISPLAY(44)}}>x = <span style={{fontVariantNumeric: 'tabular-nums'}}>{fmtNum(hours)}</span><span style={{fontSize: 30, fontWeight: 600, color: INK_SOFT}}> hours</span></div>
			</div>
		</Card>
	);
};

/** Grey "Year 11" recall chip (30 px). */
export const RecallChip: React.FC<{x: number; y: number; w?: number; at: number; out?: number; children: React.ReactNode; size?: number}> = ({x, y, w, at, out, children, size = 32}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 18px', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, color: '#4f4840', lineHeight: 1.3}}>{children}</div>
	</Enter>
);

/** Horizontal curly brace under a group (frame coordinates), drawn on at `at`. */
export const HBrace: React.FC<{x1: number; x2: number; y: number; at: number; color: string; depth?: number}> = ({x1, x2, y, at, color, depth = 22}) => {
	const m = (x1 + x2) / 2;
	const d = `M${x1},${y} Q${x1},${y + depth} ${x1 + 30},${y + depth} L${m - 22},${y + depth} Q${m},${y + depth} ${m},${y + 2 * depth} Q${m},${y + depth} ${m + 22},${y + depth} L${x2 - 30},${y + depth} Q${x2},${y + depth} ${x2},${y}`;
	return <FrameSvg><DrawPath d={d} at={at} dur={20} color={color} width={5} /></FrameSvg>;
};

/** A drawn ring with a hand question mark (frame coordinates). */
export const QuestionRing: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number; color?: string}> = ({cx, cy, rx, ry, at, out, color = INK}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0) return null;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<FrameSvg><DrawPath d={`M${cx - rx},${cy} a${rx},${ry} 0 1,0 ${2 * rx},0 a${rx},${ry} 0 1,0 ${-2 * rx},0`} at={at} dur={18} color={color} width={5} dash="14 10" /></FrameSvg>
		</div>
	);
};

/** Curve label at a chosen frame point (used instead of the simulator's edge label where that would clip). */
export const CurveLabel: React.FC<{x: number; y: number; at?: number; color?: string; children: React.ReactNode; size?: number; anchor?: 'start' | 'end'}> = ({x, y, at = -30, color = INK, children, size = 46, anchor = 'start'}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: x, top: y, transform: anchor === 'end' ? 'translateX(-100%)' : undefined, opacity: prog(f, at, 12), ...DISPLAY(size, color), textShadow: '0 0 6px #fffdf8, 0 0 12px #fffdf8'}}>{children}</div>;
};

/** Ruled, dashed response space under a question card (as in the Module 5 practice frames); nothing answer-bearing. */
export const WorkingSpace: React.FC<{x?: number; y?: number; w?: number; h?: number}> = ({x = 96, y = 650, w = 1460, h = 170}) => (
	<div style={{position: 'absolute', left: x, top: y, width: w, height: h, boxSizing: 'border-box', border: '3px dashed rgba(60,45,20,0.28)', borderRadius: 18, background: 'repeating-linear-gradient(to bottom, transparent 0 54px, rgba(60,45,20,0.10) 54px 56px)'}}>
		<span style={{position: 'absolute', left: 22, top: 8, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK_SOFT}}>your working</span>
	</div>
);

export {MATH_GRADIENT, MATH_ANSWER, CardTitle};
