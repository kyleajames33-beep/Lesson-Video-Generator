// Lesson parts for math-a12-d02 (Revision 4), built on the maths studio kit (src/explainer/math/studio).
// The savings anchor is painted (brief 235 coin jar pair and coin sprite) and always drawn at native aspect.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {
	Card, CardTitle, ContainerFill, FrameSvg, FunctionSimulator, QuestionCard, RolesOn, LOG_BASE_FAMILY, MATH_ROLES, Pow, Role, fmtNum, vis,
	MATH_GRADIENT, MATH_ANSWER, MATH_BLUE, CARD, CARD_SHADOW, plateHeight,
} from '../../math/studio';
import type {FnRow, PlateSpec, RoleKey} from '../../math/studio';

const M = 'assets/maths/';
/** Brief 235 plates (manifest: native size and alpha box). The jar pair share one geometry, so they cross-fade in place. */
export const D02_PLATES = {
	jar: {src: M + 'ma12-coin-jar-v1.png', nat: [1049, 1500], box: [148, 157, 895, 1330]} as PlateSpec,
	jarFull: {src: M + 'ma12-coin-jar-full-v1.png', nat: [1049, 1500], box: [148, 157, 895, 1330]} as PlateSpec,
	coin: {src: M + 'ma12-coin-v1.png', nat: [1254, 1254], box: [241, 283, 981, 999]} as PlateSpec,
};
/**
 * Fillable interior of the jar in file pixels [x0, yTop, x1, yBottom], read from the plates: the part-full
 * plate's coins top out near y 880 and the full plate's near y 420, so the cross-fade level and the landing
 * surface of the dropping coins agree.
 */
export const JAR_INTERIOR: [number, number, number, number] = [205, 420, 845, 880];
/** Width of a coin in the plate, in file pixels (used to size the dropping sprite to match). */
const COIN_FILE_W = 185;
export const jarH = (w: number) => plateHeight(D02_PLATES.jar, w);

export const DISPLAY = (size: number, color: string = INK, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, color, whiteSpace: 'pre', lineHeight: 1.15});

/** Fill level of the jar for a balance in $ thousands: part-full at 1, full at 8 (three doublings). */
export const jarLevel = (balance: number) => Math.max(0, Math.min(1, Math.log2(Math.max(1, balance)) / 3));

/**
 * CoinJar: the painted jar whose coins rise with the balance (part-full to full cross-fade) while coin sprites
 * drop in at a rate set by the growth rate. Balance and rate come from the same timeline as the graph.
 */
export const CoinJar: React.FC<{x: number; y: number; w: number; balanceAt: (g: number) => number; rateAt?: (g: number) => number; from?: number; at?: number; out?: number; seed?: number}> = ({x, y, w, balanceAt, rateAt, from = 0, at = 0, out, seed = 5}) => {
	const f = useCurrentFrame();
	const s = w / (D02_PLATES.jar.box[2] - D02_PLATES.jar.box[0]);
	return (
		<ContainerFill x={x} y={y} w={w} container={D02_PLATES.jar} full={D02_PLATES.jarFull} interior={JAR_INTERIOR} level={jarLevel(balanceAt(f))} at={at} out={out}
			drops={rateAt ? {rate: g => (g < from ? 0 : rateAt(g)), from, sprite: D02_PLATES.coin, size: COIN_FILE_W * s, seed, fall: 20} : undefined} />
	);
};

/** Colour-role key along the top right (from scene 2 to the handoff). */
export const Legend: React.FC<{at?: number}> = ({at = 0}) => {
	const f = useCurrentFrame();
	const o = at <= 0 ? 1 : prog(f, at, 14);
	const items: [string, string, string][] = [[MATH_BLUE, 'ln a', 'growth per dollar'], [MATH_GRADIENT, 'gradient', 'growth rate'], [INK, 'height', 'balance']];
	return (
		<div style={{position: 'absolute', right: 96, top: 30, opacity: o, display: 'flex', gap: 30, alignItems: 'baseline'}}>
			{items.map(([c, s, t]) => (
				<span key={s} style={{display: 'flex', alignItems: 'baseline', gap: 8}}>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: c}}>{s}:</span>
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, color: c}}>{t}</span>
				</span>
			))}
		</div>
	);
};

/** Small live ticker: label above, number (or "?") with unit. */
export const Tick: React.FC<{label: string; value: number | null; unit?: string; role: RoleKey; size?: number; glow?: number; digits?: number}> = ({label, value, unit, role, size = 52, glow = 0, digits = 2}) => (
	<div style={{padding: '2px 8px', margin: '0 -8px', borderRadius: 10, background: glow > 0 ? `rgba(${role === 'a' ? '220,234,247' : '231,224,242'},${glow})` : undefined}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: MATH_ROLES[role].ink, lineHeight: 1.1, whiteSpace: 'pre'}}>{label}</div>
		<div style={{display: 'flex', alignItems: 'baseline', gap: 8}}>
			{value === null
				? <span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size * 1.1, lineHeight: 1, color: MATH_ROLES[role].ink}}>?</span>
				: <span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: MATH_ROLES[role].ink, fontVariantNumeric: 'tabular-nums'}}>{fmtNum(value, digits)}</span>}
			{unit ? <span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT, whiteSpace: 'pre'}}>{unit}</span> : null}
		</div>
	</div>
);

/**
 * Thumbnail of the account: the live coin jar with three tickers (balance, growth rate, growth per dollar),
 * kept beside the graph so the anchor keeps running while the maths is drawn. Card 340 x 560.
 */
export const JarThumb: React.FC<{x?: number; y?: number; at?: number; out?: number; balance: number; rate: number | null; perDollar?: number | null; balanceAt: (g: number) => number; rateAt?: (g: number) => number; from?: number; glow?: [number, number]; perGlow?: [number, number]; label?: string}> = ({x = 96, y = 176, at = -30, out, balance, rate, perDollar = null, balanceAt, rateAt, from = 0, glow, perGlow, label = 'the account'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const g = glow ? vis(f, glow[0], glow[1], 8) : 0;
	const pg = perGlow ? vis(f, perGlow[0], perGlow[1], 8) : 0;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<Card x={x} y={y} w={340} h={600} at={-30} pad="12px 22px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK, lineHeight: 1}}>{label}</div>
				<div style={{position: 'absolute', left: 22, top: 250, right: 18}}>
					<Tick label="balance" value={balance} unit="$k" role="height" glow={g} />
					<Tick label="growth rate" value={rate} unit="$k per decade" role="gradient" glow={g} />
					<Tick label="growth per dollar" value={perDollar} unit="per decade" role="a" digits={3} glow={pg} />
				</div>
			</Card>
			<CoinJar x={x + 111} y={y + 56} w={118} balanceAt={balanceAt} rateAt={rateAt} from={from} />
		</div>
	);
};

/** Bottom strip: the account clock in decades since the deposit. */
export const DecadeClock: React.FC<{x: number; y: number; w: number; decades: number; max: number; at?: number; ticks?: number[]}> = ({x, y, w, decades, max, at = 0, ticks = [0, 1, 2]}) => {
	const f = useCurrentFrame();
	const T0 = 160, T1 = w - 370;
	const px = (h: number) => T0 + (Math.max(0, Math.min(max, h)) / max) * (T1 - T0);
	return (
		<Card x={x} y={y} w={w} h={100} at={at} pad="0">
			<div style={{position: 'relative', height: 100, opacity: prog(f, at, 12)}}>
				<div style={{position: 'absolute', left: 26, top: 22}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>clock</span></div>
				<svg width={w} height={100} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
					<line x1={T0} x2={T1} y1={40} y2={40} stroke={PAPER_DEEP} strokeWidth={12} strokeLinecap="round" />
					<line x1={T0} x2={px(decades)} y1={40} y2={40} stroke={INK_SOFT} strokeWidth={12} strokeLinecap="round" />
					{ticks.map(v => <g key={v}><line x1={px(v)} x2={px(v)} y1={52} y2={62} stroke={INK_SOFT} strokeWidth={3} /><text x={px(v)} y={90} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>{`${v * 10} yr`}</text></g>)}
					<circle cx={px(decades)} cy={40} r={17} fill={CARD} stroke={INK} strokeWidth={5} />
				</svg>
				<div style={{position: 'absolute', right: 26, top: 20, ...DISPLAY(44)}}>x = <span style={{fontVariantNumeric: 'tabular-nums'}}>{fmtNum(decades)}</span><span style={{fontSize: 30, fontWeight: 600, color: INK_SOFT}}> decades</span></div>
			</div>
		</Card>
	);
};

/** Grey recall chip. */
export const RecallChip: React.FC<{x: number; y: number; w?: number; at: number; out?: number; children: React.ReactNode; size?: number}> = ({x, y, w, at, out, children, size = 32}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 18px', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, color: '#4f4840', lineHeight: 1.3}}>{children}</div>
	</Enter>
);

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

/** a with a raised power: base in ink, power as given. */
export const Ex: React.FC<{b: React.ReactNode; p: React.ReactNode}> = ({b, p}) => <>{b}<Pow>{p}</Pow></>;
/** ln a in the blue role (growth per dollar). */
export const Ln: React.FC<{a?: React.ReactNode}> = ({a = 'a'}) => <Role r="a">ln {a}</Role>;
/** The proved rule d/dx(aˣ) = (ln a)aˣ. */
export const Rule: React.FC<{a?: React.ReactNode}> = ({a = 'a'}) => <>d/dx({a}<Pow>x</Pow>) = (<Ln a={a} />){a}<Pow>x</Pow></>;

/** The handoff question slot from d01: 2ˣ = e^(? × x), the slot filled with ln 2 at `fillAt`. */
export const SlotChip: React.FC<{x: number; y: number; at?: number; fillAt?: number; size?: number}> = ({x, y, at = -30, fillAt, size = 62}) => {
	const f = useCurrentFrame();
	const filled = fillAt !== undefined && f >= fillAt;
	const fp = fillAt === undefined ? 0 : prog(f, fillAt, 14);
	return (
		<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
			<div style={{display: 'inline-flex', alignItems: 'center', gap: 18, background: CARD, borderRadius: 18, padding: '4px 30px 10px', boxShadow: CARD_SHADOW, border: `3px solid ${filled ? MATH_ANSWER : 'rgba(60,45,20,0.14)'}`, ...DISPLAY(size)}}>
				<span>2<Pow>x</Pow> = e<Pow><span style={{display: 'inline-block', border: `0.08em solid ${MATH_BLUE}`, borderRadius: '0.2em', padding: '0 0.18em', color: MATH_BLUE}}>{filled ? <span style={{opacity: fp}}>ln 2</span> : '?'}</span> × x</Pow></span>
				{filled ? <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 60 60" style={{overflow: 'visible'}}><DrawPath d="M8,32 L24,48 L54,10" at={fillAt! + 8} dur={12} color={MATH_ANSWER} width={8} /></svg> : null}
			</div>
		</Enter>
	);
};

/** Readout rows for FunctionSimulator (height, gradient, gradient ÷ height). */
export const simRows = (opts: {ratioDigits?: number; marks?: {h?: FnRow['mark']; g?: FnRow['mark']; r?: FnRow['mark']}; glowR?: [number, number]; at?: {g?: number; r?: number}; labels?: {h?: string; g?: string; r?: string}} = {}): FnRow[] => [
	{label: opts.labels?.h ?? 'height', role: 'height', value: s => s.Y, mark: opts.marks?.h},
	{label: opts.labels?.g ?? 'gradient', role: 'gradient', value: s => s.slope, mark: opts.marks?.g, at: opts.at?.g},
	{label: opts.labels?.r ?? 'gradient ÷ height', role: 'a', value: s => s.slope / s.Y, digits: opts.ratioDigits ?? 3, mark: opts.marks?.r, glow: opts.glowR, at: opts.at?.r},
];

export const E_TICK = {value: Math.E, label: 'e'};
/** Ratio markers: base and ln(base). */
export const RATIO_POINTS = [0.5, 1, 2, Math.E, 3, 4];

/**
 * The ratio-against-base panel: each base's gradient ÷ height plotted against the base. Markers drop on cues;
 * y = ln a draws through them on `curveAt`. `xLabel` and the curve colour may change (scene 15 handoff).
 */
export const RatioPanel: React.FC<{x: number; y: number; w: number; h: number; markers: {a: number; at: number; out?: number}[]; curveAt: number; curveDur?: number; at?: number; out?: number; xLabel?: string; yLabel?: string; color?: string; point?: {at: number; out?: number}; tangent?: {at: number; out?: number}; label?: {content: React.ReactNode; at: number; out?: number}; ticks?: (number | {value: number; label: string})[]; window?: {x: [number, number]; y: [number, number]}}> = ({x, y, w, h, markers, curveAt, curveDur = 40, at = -30, out, xLabel = 'base a', yLabel = 'gradient ÷ height', color = MATH_BLUE, point, tangent, label, ticks = [1, 2, E_TICK, 3, 4], window: win = {x: [0, 4.5], y: [-1, 1.6]}}) => (
	<FunctionSimulator x={x} y={y} width={w} height={h} window={win} family={LOG_BASE_FAMILY} timeline={[{frame: 0, x: 1, p: {c: Math.E}}]} at={at} out={out}
		draw={{at: curveAt, dur: curveDur}} color={color} curveWidth={6}
		xTicks={ticks} yTicks={[-1, 1]} xLabel={xLabel} yLabel={yLabel}
		markers={markers.map(m => ({X: m.a, Y: Math.log(m.a), at: m.at, out: m.out, color: MATH_BLUE}))}
		point={point} tangent={tangent ? {...tangent, halfLength: 190} : undefined}
		label={label ? {content: () => label.content, at: label.at, out: label.out, pos: () => [3.35, 1.42], size: 44} : undefined} />
);

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
