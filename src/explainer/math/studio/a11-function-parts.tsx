// Year 11 Advanced kit, wave 1 (brief 245): function parts for w07, w08, w12, w13, w19, w27 and s01
// (maths-a11-kit-needs.md items 5, 6 and 8). MappingDiagram (arrows between two sets, verdict computed),
// FunctionMachine (rule with slots; the output is evaluated from the substituted text, so a missing bracket gives
// the classic wrong answer honestly) and ModelCard (highlighted amounts fly from a word problem into equation slots).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_BORDER, FrameSvg, PlateSpec, SvgPlate, smooth, vis} from './primitives';
import {MATH_ANSWER, MATH_EXCLUDED, MATH_MISTAKE, MATH_ROLES, RoleKey, roleInk} from './roles';
import {TXT} from './plot-core';

const MINUS = '−';
const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
const clamp01 = (u: number) => Math.max(0, Math.min(1, u));

// ---------- text measurement (Inter Tight through canvas once the kit's face is loaded; estimate otherwise) ----------
let CTX: CanvasRenderingContext2D | null = null;
const CACHE = new Map<string, number>();
const faceLoaded = (family: string) => {
	if (typeof document === 'undefined' || !document.fonts) return false;
	for (const f of document.fonts) if (f.family.replace(/["']/g, '') === family && f.status === 'loaded') return true;
	return false;
};
/** Width in px of display-font text (or the hand font). Deterministic for a given loaded font. */
export const measureText = (text: string, size: number, weight = 800, hand = false): number => {
	const est = [...text].length * (hand ? 0.42 : 0.56) * size;
	if (typeof document === 'undefined') return est;
	const key = `${hand ? 'h' : 'd'}${weight}|${text}`;
	const hit = CACHE.get(key);
	if (hit !== undefined) return hit * size;
	try {
		if (!faceLoaded(hand ? 'Caveat' : 'Inter Tight')) return est;
		if (!CTX) CTX = document.createElement('canvas').getContext('2d');
		if (!CTX) return est;
		CTX.font = `${weight} 100px ${hand ? FONT_HAND : FONT_DISPLAY}`;
		const w = CTX.measureText(text).width / 100;
		CACHE.set(key, w);
		return w * size;
	} catch {
		return est;
	}
};

// =====================================================================================================
// Expression evaluation for rule slots
// =====================================================================================================
/**
 * Evaluates a written expression the way a student's line reads: numbers, + − × ÷ / *, brackets, implied
 * multiplication (3(2), 1.8(15), 2√9), powers by ^ or ² ³, and √. A leading minus binds more loosely than a power,
 * so "−1²" is −(1²) = −1 while "(−1)²" is 1. Throws on anything it cannot read.
 */
export const evalExpr = (src: string): number => {
	const s = src.replace(/−/g, '-').replace(/×|\*/g, '*').replace(/÷/g, '/').replace(/\s+/g, '');
	let i = 0;
	const peek = () => s[i];
	const fail = (msg: string): never => {throw new Error(`evalExpr: ${msg} in "${src}" at ${i}`);};
	const number = (): number => {
		const m = /^\d+(\.\d+)?|^\.\d+/.exec(s.slice(i));
		if (!m) return fail('number expected');
		i += m[0].length;
		return parseFloat(m[0]);
	};
	const atom = (): number => {
		const c = peek();
		if (c === '(') {i++; const v = expr(); if (peek() !== ')') fail('missing )'); i++; return v;}
		if (c === '√') {i++; return Math.sqrt(power());}
		if (c !== undefined && /[\d.]/.test(c)) return number();
		return fail('value expected');
	};
	const power = (): number => {
		let v = atom();
		for (;;) {
			const c = peek();
			if (c === '²') {i++; v = v ** 2;}
			else if (c === '³') {i++; v = v ** 3;}
			else if (c === '^') {i++; v = v ** unary();}
			else return v;
		}
	};
	const unary = (): number => {
		if (peek() === '-') {i++; return -unary();}
		if (peek() === '+') {i++; return unary();}
		return power();
	};
	const term = (): number => {
		let v = unary();
		for (;;) {
			const c = peek();
			if (c === '*') {i++; v *= unary();}
			else if (c === '/') {i++; v /= unary();}
			else if (c === '(' || c === '√' || (c !== undefined && /[\d.]/.test(c))) v *= power();
			else return v;
		}
	};
	const expr = (): number => {
		let v = term();
		for (;;) {
			const c = peek();
			if (c === '+') {i++; v += term();}
			else if (c === '-') {i++; v -= term();}
			else return v;
		}
	};
	const v = expr();
	if (i !== s.length) fail('unexpected character');
	return v;
};
/**
 * What each slot "( )" shows for a card. With brackets every slot reads "(card)". Without (the classic slip) a slot
 * reads the bare card, except a slot right after a number or ")" (a product such as 3( )), whose bracket is the
 * multiplication sign and stays: "( )² − 3( ) + 5" with −1 reads "−1² − 3(−1) + 5".
 */
export const slotTexts = (rule: string, card: string, bracket = true): string[] => {
	const parts = rule.split('( )');
	return parts.slice(0, -1).map(p => (bracket || /[\d.)]\s*$/.test(p) ? `(${card})` : card));
};
/** The rule with every slot filled (see slotTexts). */
export const fillRule = (rule: string, card: string, bracket = true) => {
	const parts = rule.split('( )'), fills = slotTexts(rule, card, bracket);
	return parts.map((p, i) => p + (i < fills.length ? fills[i] : '')).join('');
};
const fmtOut = (v: number) => {
	if (!Number.isFinite(v)) return '?';
	const r = Math.round(v * 100) / 100;
	return r < 0 ? MINUS + String(-r) : String(r);
};

// =====================================================================================================
// FunctionMachine (w08; MachineChain in w27 builds on it)
// =====================================================================================================
export type MachineInput = {
	/** The card's text, as it is substituted: "15", "−1", "2". */
	card: string;
	at: number;
	/** Substitute with brackets (default) or as bare text (the classic slip). */
	bracket?: boolean;
	fillAt?: number; outputAt?: number;
	/** Output card colour (default teal output role); 'mistake' for the unbracketed run. */
	outputRole?: RoleKey;
	/** Symbolic cards only ("d + 1"): the output written by the author. Numeric cards are always computed. */
	symbolic?: {output: string};
};

/**
 * Input slot (left, a hopper), rule box (centre) and output tray (right). Each input card drops in at `at`; at
 * fillAt every slot in the rule lights blue and fills with the card ("(2)" or "2" without brackets); at outputAt the
 * computed output card slides into the tray in teal. `domain` refuses a value: the rule box flashes red, the
 * refusal label shows and the tray stays empty. `compact` draws it at about 76% (about 760 × 320 px).
 * Rule templates mark slots with "( )": "5 + 1.8( )", "( )² − 3( ) + 5", "√( )".
 */
export const FunctionMachine: React.FC<{
	x: number; y: number; rule: string; inputs: readonly MachineInput[]; at?: number; out?: number;
	name?: string; compact?: boolean; role?: RoleKey; inputRole?: RoleKey; outputRole?: RoleKey;
	format?: (v: number) => string;
	domain?: (v: number) => boolean; refuseLabel?: string;
	postAdd?: {label: string; at: number; role?: RoleKey};
}> = ({x, y, rule, inputs, at = 0, out, name, compact = false, role, inputRole = 'a', outputRole = 'b', format = fmtOut, domain, refuseLabel = 'not allowed', postAdd}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const IR = MATH_ROLES[inputRole];
	const body = role ? MATH_ROLES[role].stroke : INK;
	// The current input: the last one whose `at` has passed.
	let k = -1;
	inputs.forEach((inp, i) => {if (f >= inp.at - 20) k = i;});
	const cur = k >= 0 ? inputs[k] : undefined;
	const fillAt = cur ? cur.fillAt ?? cur.at + 22 : 0;
	const outAt = cur ? cur.outputAt ?? fillAt + 26 : 0;
	const drop = cur ? smooth(clamp01((f - cur.at) / 16)) : 0;
	const fill = cur ? prog(f, fillAt, 10) : 0;
	const glow = cur ? prog(f, fillAt, 8) * (1 - 0.6 * prog(f, fillAt + 30, 20)) : 0;
	const value = cur && !cur.symbolic ? evalExpr(cur.card) : NaN;
	const refused = cur && domain && !cur.symbolic ? !domain(value) : false;
	const result = cur && !cur.symbolic && !refused ? evalExpr(fillRule(rule, cur.card, cur.bracket ?? true)) : NaN;
	const outText = cur ? (cur.symbolic ? cur.symbolic.output : format(result)) : '';
	const slide = cur && !refused ? smooth(clamp01((f - outAt) / 20)) : 0;
	const flash = refused ? prog(f, outAt, 6) * (0.6 + 0.4 * Math.cos(((f - outAt) / 8) * Math.PI)) : 0;
	const OR = MATH_ROLES[cur?.outputRole ?? outputRole];
	const parts = rule.split('( )');
	const fills = cur ? slotTexts(rule, cur.card, cur.bracket ?? true) : [];
	const S = 52;
	const W = 1000, Hh = 400;
	const card = (text: string, R: {ink: string; stroke: string; soft: string}, extra?: React.CSSProperties) => (
		<div style={{display: 'inline-block', padding: '6px 26px 8px', background: R.soft, border: `4px solid ${R.stroke}`, borderRadius: 16, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: S, color: R.ink, whiteSpace: 'pre', boxShadow: '0 8px 18px rgba(60,45,20,0.12)', ...extra}}>{text}</div>
	);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: W, height: Hh, opacity: o, transform: compact ? 'scale(0.76)' : undefined, transformOrigin: 'top left'}}>
			<svg width={W} height={Hh} viewBox={`0 0 ${W} ${Hh}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				{/* hopper */}
				<path d={`M20,170 L220,170 L170,300 L70,300 Z`} fill={CARD} stroke={IR.stroke} strokeWidth={5} strokeLinejoin="round" />
				<path d={`M170,236 L262,236`} stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" />
				<path d={`M250,224 L264,236 L250,248`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
				{/* rule box */}
				<rect x={272} y={130} width={456} height={210} rx={22} fill={flash > 0 ? `rgba(184,50,42,${0.12 * flash})` : CARD} stroke={flash > 0 ? MATH_MISTAKE : body} strokeWidth={6} />
				<path d={`M728,236 L812,236`} stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" />
				<path d={`M800,224 L814,236 L800,248`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
				{/* tray */}
				<path d={`M822,214 L822,312 L992,312 L992,214`} fill="none" stroke={MATH_ROLES[outputRole].stroke} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" />
			</svg>
			{name ? <div style={{position: 'absolute', left: 272, top: 62, width: 456, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontStyle: 'italic', fontSize: 56, color: role ? roleInk(role) : INK}}>{name}</div> : null}
			<div style={{position: 'absolute', left: 272, top: 130, width: 456, height: 210, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: S, color: INK, whiteSpace: 'pre'}}>
				{parts.map((p, i) => (
					<React.Fragment key={i}>
						<span>{p}</span>
						{i < parts.length - 1 ? (
							fill > 0.5 && cur
								? <span style={{color: IR.ink, background: `rgba(220,234,247,${glow})`, borderRadius: 10, padding: '0 2px'}}>{fills[i]}</span>
								: <span style={{display: 'inline-block', minWidth: '1.1em', textAlign: 'center', border: `3px dashed ${IR.stroke}`, borderRadius: 10, color: IR.ink, lineHeight: 1.05, padding: '0 4px'}}>{' '}</span>
						) : null}
					</React.Fragment>
				))}
			</div>
			{cur && drop > 0 ? (
				<div style={{position: 'absolute', left: 120, top: lerp(-40, 150, drop), transform: 'translateX(-50%)', opacity: Math.min(1, drop * 3) * (1 - 0.35 * fill)}}>{card(cur.card, IR)}</div>
			) : null}
			{cur && slide > 0 ? (
				<div style={{position: 'absolute', left: lerp(500, 907, slide), top: lerp(200, 214, slide), transform: 'translateX(-50%)', opacity: Math.min(1, slide * 2.5)}}>{card(outText, OR)}</div>
			) : null}
			{refused && flash > 0 ? <div style={{position: 'absolute', left: 272, top: 356, width: 456, textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: MATH_MISTAKE, opacity: prog(f, outAt, 10)}}>{refuseLabel}</div> : null}
			{postAdd && f >= postAdd.at ? <div style={{position: 'absolute', left: 1010, top: 222, opacity: prog(f, postAdd.at, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: roleInk(postAdd.role ?? outputRole), whiteSpace: 'pre'}}>{postAdd.label}</div> : null}
		</div>
	);
};

// =====================================================================================================
// MappingDiagram (w07; s01 sets; w27)
// =====================================================================================================
export type MapItem = {id: string; label: string; icon?: PlateSpec};
export type MapSet = {title: string; items: readonly MapItem[]; role?: RoleKey};
export type MapArrow = {from: string; to: string; at: number};

/** Function verdict from the arrows visible at frame f (inputs are the right set once reversed). Never typed. */
export const mappingVerdict = (left: MapSet, right: MapSet, arrows: readonly MapArrow[], f: number, reversed: boolean): {ok: boolean; reason: string} => {
	const inputs = reversed ? right : left;
	const live = arrows.filter(a => a.at <= f);
	for (const it of inputs.items) {
		const n = live.filter(a => (reversed ? a.to : a.from) === it.id).length;
		if (n > 1) return {ok: false, reason: `${it.label} has ${n} outputs`};
		if (n === 0) return {ok: false, reason: `${it.label} has no output`};
	}
	return {ok: true, reason: 'each input, exactly one output'};
};

/**
 * Two set ovals with element labels (optional small plate icons) and arrows that draw on their cues. An arrow turns
 * the mistake colour when its input already has another arrow (flag 'later': only the later ones; 'all': every
 * arrow of that input). `reverseAt` turns every arrow round (the arrowheads swap ends) so the right set becomes the
 * inputs; colours and the verdict are recomputed. `verdict` shows "function" or "not a function: B2 has 2 outputs".
 */
export const MappingDiagram: React.FC<{
	x: number; y: number; width?: number; height?: number; left: MapSet; right: MapSet; arrows: readonly MapArrow[];
	at?: number; out?: number; reverseAt?: number; flag?: 'later' | 'all'; size?: number; ovalW?: number;
	verdict?: {at: number; x?: number; y?: number; size?: number};
}> = ({x, y, width = 1000, height = 460, left, right, arrows, at = 0, out, reverseAt, flag = 'later', size = 44, ovalW = 320, verdict}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const rev = reverseAt === undefined ? 0 : smooth(clamp01((f - reverseAt) / 18));
	const reversed = rev >= 0.5;
	const top = y + 60, H = height - 60;
	const lcx = x + ovalW / 2, rcx = x + width - ovalW / 2, cy = top + H / 2;
	const pos = (set: MapSet, cx: number) => new Map(set.items.map((it, i) => [it.id, {cx, cy: top + ((i + 0.5) * H) / set.items.length, it}]));
	const L = pos(left, lcx), R = pos(right, rcx);
	const LR = MATH_ROLES[left.role ?? 'a'], RR = MATH_ROLES[right.role ?? 'b'];
	const live = arrows.filter(a => f >= a.at);
	const srcOf = (a: MapArrow) => (reversed ? a.to : a.from);
	const isBad = (a: MapArrow) => {
		const same = live.filter(b => srcOf(b) === srcOf(a));
		if (same.length < 2) return false;
		return flag === 'all' || reversed ? true : same.indexOf(a) > 0;
	};
	const iconW = 70;
	const labelHalf = (it: MapItem) => (measureText(it.label, size, 800) + (it.icon ? iconW + 12 : 0)) / 2;
	const v = verdict ? mappingVerdict(left, right, arrows, f, reversed) : null;
	const vo = verdict ? prog(f, verdict.at, 12) : 0;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, pointerEvents: 'none'}}>
			<FrameSvg>
				<ellipse cx={lcx} cy={cy} rx={ovalW / 2} ry={H / 2} fill={LR.soft} fillOpacity={0.45} stroke={LR.stroke} strokeWidth={4} />
				<ellipse cx={rcx} cy={cy} rx={ovalW / 2} ry={H / 2} fill={RR.soft} fillOpacity={0.45} stroke={RR.stroke} strokeWidth={4} />
				<text x={lcx} y={y + 30} textAnchor="middle" style={{...TXT(30, LR.ink, 800), letterSpacing: 2, textTransform: 'uppercase'} as React.CSSProperties}>{left.title}</text>
				<text x={rcx} y={y + 30} textAnchor="middle" style={{...TXT(30, RR.ink, 800), letterSpacing: 2, textTransform: 'uppercase'} as React.CSSProperties}>{right.title}</text>
				{[...L.values()].map(({cx: ex, cy: ey, it}) => <g key={'l' + it.id}>
					{it.icon ? <SvgPlate plate={it.icon} x={ex - labelHalf(it)} y={ey - iconW / 2} w={iconW} /> : null}
					<text x={ex + (it.icon ? (iconW + 12) / 2 : 0)} y={ey + size * 0.35} textAnchor="middle" style={TXT(size, LR.ink, 800)}>{it.label}</text>
				</g>)}
				{[...R.values()].map(({cx: ex, cy: ey, it}) => <g key={'r' + it.id}>
					{it.icon ? <SvgPlate plate={it.icon} x={ex - labelHalf(it)} y={ey - iconW / 2} w={iconW} /> : null}
					<text x={ex + (it.icon ? (iconW + 12) / 2 : 0)} y={ey + size * 0.35} textAnchor="middle" style={TXT(size, RR.ink, 800)}>{it.label}</text>
				</g>)}
				{arrows.map((a, i) => {
					const s = L.get(a.from), t = R.get(a.to);
					if (!s || !t || f < a.at) return null;
					const p = prog(f, a.at, 16);
					const x1 = s.cx + labelHalf(s.it) + 16, y1 = s.cy, x2 = t.cx - labelHalf(t.it) - 16, y2 = t.cy;
					const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 - 30;
					const c = isBad(a) ? MATH_MISTAKE : INK;
					const head = (hx: number, hy: number, fx: number, fy: number, op: number) => {
						const ang = Math.atan2(hy - fy, hx - fx), hl = 22;
						return <path d={`M${hx - hl * Math.cos(ang - 0.45)},${hy - hl * Math.sin(ang - 0.45)} L${hx},${hy} L${hx - hl * Math.cos(ang + 0.45)},${hy - hl * Math.sin(ang + 0.45)}`} fill="none" stroke={c} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={op} />;
					};
					return (
						<g key={i}>
							<path d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`} fill="none" stroke={c} strokeWidth={5} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />
							{head(x2, y2, mx, my, (p >= 1 ? 1 : 0) * (1 - rev))}
							{rev > 0 ? head(x1, y1, mx, my, rev) : null}
						</g>
					);
				})}
			</FrameSvg>
			{v && vo > 0 ? (
				<div style={{position: 'absolute', left: verdict?.x ?? x + width / 2, top: verdict?.y ?? y + height + 24, transform: verdict?.x === undefined ? 'translateX(-50%)' : undefined, opacity: vo, background: CARD, border: `4px solid ${v.ok ? MATH_ANSWER : MATH_MISTAKE}`, borderRadius: 16, padding: '6px 24px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: verdict?.size ?? 44, color: v.ok ? MATH_ANSWER : MATH_MISTAKE, whiteSpace: 'pre'}}>
					{v.ok ? 'function ✓' : `not a function: ${v.reason}`}
				</div>
			) : null}
		</div>
	);
};

// =====================================================================================================
// ModelCard (w12, w13; w19)
// =====================================================================================================
/** A word-problem segment: plain text, or a marked amount with an id, the value it carries and a role. */
export type ModelSpan = string | {id: string; text: string; value?: string; role: RoleKey};
/** An equation segment: text, or a slot keyed by name. */
export type ModelSlot = string | {slot: string};
export type ModelFlight = {span: string; slot: string; at: number; tag?: {text: string; dx?: number; dy?: number}};

/** The equation text once every flight has landed: checks that the template filled from the spans reads right. */
export const modelEquationText = (segs: readonly ModelSlot[], flights: readonly ModelFlight[], lines: readonly (readonly ModelSpan[])[]) => {
	const spans = new Map<string, Exclude<ModelSpan, string>>();
	for (const l of lines) for (const s of l) if (typeof s !== 'string') spans.set(s.id, s);
	return segs.map(s => {
		if (typeof s === 'string') return s;
		const fl = flights.find(g => g.slot === s.slot);
		const sp = fl ? spans.get(fl.span) : undefined;
		if (!sp) throw new Error(`ModelCard: slot ${s.slot} has no flight`);
		return sp.value ?? sp.text;
	}).join('');
};

/**
 * A givens card written as the problem's words, with the amounts marked in role colours (fixed amount teal, rate
 * violet, and so on). On each flight's cue the amount's value lifts out of the card and flies into its slot in an
 * equation line (a placeholder underline until it lands), then a hand tag ("fixed: paid once") writes under it.
 * Lines are given already broken. Several equation lines can share one card (w13: C = 200 + 3n and R = 5n).
 */
export const ModelCard: React.FC<{
	x: number; y: number; w: number; title?: string; lines: readonly (readonly ModelSpan[])[]; size?: number;
	equations: readonly {x: number; y: number; segs: readonly ModelSlot[]; at: number; size?: number; color?: string}[];
	flights: readonly ModelFlight[]; at?: number; out?: number;
}> = ({x, y, w, title = 'Givens', lines, size = 44, equations, flights, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const pad = 26, lh = size * 1.35, titleH = title ? 44 : 0;
	const cardH = pad * 2 + titleH + lines.length * lh;
	// Span positions on the card.
	const spanPos = new Map<string, {x: number; y: number; w: number; s: Exclude<ModelSpan, string>}>();
	const lineEls = lines.map((line, li) => {
		let cx = x + pad;
		const by = y + pad + titleH + li * lh + size * 0.95;
		return line.map((seg, si) => {
			const text = typeof seg === 'string' ? seg : seg.text;
			const tw = measureText(text, size, typeof seg === 'string' ? 600 : 800);
			const sx = cx;
			cx += tw;
			if (typeof seg === 'string') return <text key={`${li}-${si}`} x={sx} y={by} style={TXT(size, INK, 600)} xmlSpace="preserve">{text}</text>;
			spanPos.set(seg.id, {x: sx, y: by, w: tw, s: seg});
			const R = MATH_ROLES[seg.role];
			const fl = flights.find(g => g.span === seg.id);
			const hl = fl ? prog(f, fl.at - 8, 10) : 0;
			return (
				<g key={`${li}-${si}`}>
					{hl > 0 ? <rect x={sx - 6} y={by - size * 0.92} width={tw + 12} height={size * 1.18} rx={10} fill={R.soft} opacity={hl} /> : null}
					<text x={sx} y={by} style={TXT(size, R.ink, 800)} xmlSpace="preserve">{text}</text>
				</g>
			);
		});
	});
	// Slot positions in the equations.
	const slotPos = new Map<string, {x: number; y: number; w: number; size: number}>();
	const eqEls = equations.map((eq, ei) => {
		const es = eq.size ?? 52;
		const eo = prog(f, eq.at, 14);
		let cx = eq.x;
		const parts = eq.segs.map((seg, si) => {
			if (typeof seg === 'string') {
				const tw = measureText(seg, es, 800);
				const el = <text key={si} x={cx} y={eq.y} style={TXT(es, eq.color ?? INK, 800)} xmlSpace="preserve">{seg}</text>;
				cx += tw;
				return el;
			}
			const fl = flights.find(g => g.slot === seg.slot);
			const sp = fl ? spanPos.get(fl.span) : undefined;
			const val = sp ? sp.s.value ?? sp.s.text : '?';
			const tw = Math.max(measureText(val, es, 800), es * 1.2);
			slotPos.set(seg.slot, {x: cx, y: eq.y, w: tw, size: es});
			const landed = fl ? f >= fl.at + 26 : false;
			const el = (
				<g key={si}>
					{!landed ? <line x1={cx + 4} x2={cx + tw - 4} y1={eq.y + 10} y2={eq.y + 10} stroke={MATH_EXCLUDED} strokeWidth={4} strokeLinecap="round" /> : null}
					{landed && sp ? <text x={cx} y={eq.y} style={TXT(es, MATH_ROLES[sp.s.role].ink, 800)}>{val}</text> : null}
				</g>
			);
			cx += tw + es * 0.08;
			return el;
		});
		return <g key={ei} opacity={eo}>{parts}</g>;
	});
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, pointerEvents: 'none'}}>
			<FrameSvg>
				<rect x={x} y={y} width={w} height={cardH} rx={20} fill={CARD} stroke={CARD_BORDER} strokeWidth={2.5} style={{filter: 'drop-shadow(0 14px 22px rgba(60,45,20,0.10))'}} />
				{title ? <text x={x + pad} y={y + pad + 26} style={{...TXT(28, INK_SOFT, 800), letterSpacing: 2, textTransform: 'uppercase'} as React.CSSProperties}>{title}</text> : null}
				{lineEls}
				{eqEls}
				{flights.map((fl, i) => {
					const sp = spanPos.get(fl.span), sl = slotPos.get(fl.slot);
					if (!sp || !sl) return null;
					const u = smooth(clamp01((f - fl.at) / 26));
					if (u <= 0 || u >= 1) return null;
					const val = sp.s.value ?? sp.s.text;
					const sx = sp.x + sp.w - measureText(val, size, 800), fs = lerp(size, sl.size, u);
					const px = lerp(sx, sl.x, u), py = lerp(sp.y, sl.y, u) - Math.sin(u * Math.PI) * 90;
					return <text key={'fl' + i} x={px} y={py} style={TXT(fs, MATH_ROLES[sp.s.role].ink, 800)}>{val}</text>;
				})}
				{flights.map((fl, i) => {
					const sl = slotPos.get(fl.slot), sp = spanPos.get(fl.span);
					if (!fl.tag || !sl || !sp) return null;
					const to = prog(f, fl.at + 30, 12);
					if (to <= 0) return null;
					return <text key={'tg' + i} x={sl.x + sl.w / 2 + (fl.tag.dx ?? 0)} y={sl.y + 62 + (fl.tag.dy ?? 0)} textAnchor="middle" opacity={to} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: MATH_ROLES[sp.s.role].ink} as React.CSSProperties}>{fl.tag.text}</text>;
				})}
			</FrameSvg>
		</div>
	);
};

// Module-load checks from the designs (w08 FunctionMachine, w12 ModelCard).
{
	const R = '( )² − 3( ) + 5';
	const checks: [number, number][] = [[evalExpr(fillRule(R, '2')), 3], [evalExpr(fillRule(R, '−1')), 9], [evalExpr(fillRule(R, '−1', false)), 7], [evalExpr(fillRule('5 + 1.8( )', '15')), 32]];
	for (const [got, want] of checks) if (Math.abs(got - want) > 1e-9) throw new Error(`FunctionMachine self check: got ${got}, expected ${want}`);
	const gym = modelEquationText(['C = ', {slot: 'fixed'}, ' + ', {slot: 'rate'}, 'm'], [{span: 'fee', slot: 'fixed', at: 0}, {span: 'month', slot: 'rate', at: 0}], [[{id: 'fee', text: '$60', value: '60', role: 'b'}, {id: 'month', text: '$25', value: '25', role: 'gradient'}]]);
	if (gym !== 'C = 60 + 25m') throw new Error(`ModelCard self check: ${gym}`);
}
