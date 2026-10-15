// Drawing parts for the C9 lesson: the painted NO2/N2O4 tube (plates, process clip or coded fallback), hot and ice
// baths, the particle lens, a moving teal K marker for the wide log line, unlabelled rate bars and small icons.
import React from 'react';
import {Img, staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_HAND, INK, INK_SOFT, ProcessClip, prog} from '../../kit';
import {Arrow, Bracket, Chip, Cross, EqStrip, Fade, FracX, GivensCard, Overlay, Ring, Sx, SvgText, Tag, TEAL, Tick, eqLayout, tw} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {LogLine, QMarker, QKGap, lx} from '../chem-m5-c08/parts';
import type {Ln} from '../chem-m5-c08/parts';
import {SpeciesLens} from '../chem-m5-c03/parts';
import type {Species} from '../chem-m5-c03/parts';
import {Thermometer} from '../chem-m5-c03/parts';
import {CLIP_COOL, CLIP_HEAT, TUBE_BROWN, TUBE_PALE, haveClip, havePlates} from './assets';
import {HEAT, ICE, N2O4_DOT, N2O4_INK, NO2C, NO2_INK, hexMix} from './common';

export {Arrow, Bracket, Chip, Cross, EqStrip, Fade, FracX, GivensCard, Overlay, Ring, Sx, SvgText, Tag, TEAL, Tick, eqLayout, tw, LogLine, QMarker, QKGap, lx, Thermometer};
export type {EqItem, Term, Ln};
export {CLIP_COOL, CLIP_HEAT};

export const BLUE = '#1f6fb2';
const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
type NumFn = number | ((f: number) => number);
const val = (v: NumFn, f: number) => (typeof v === 'function' ? v(f) : v);

// ---------- board geometry (the same zones every time) ----------
/** Far-left tube column: x, y is the top-left of the plate's visible (alpha) box, h its height. */
export const TUBE9 = {x: 110, y: 330, h: 640};
export const EQ9 = {x: 96, y: 250, s: 46};
export const LENS9 = {cx: 540, cy: 640, r: 150};
/** Right-zone log line (scenes 1 to 3, 7a, 7b). */
export const LN9: Ln = {y: 330, x0: 1010, x1: 1790, lo: -3, hi: 3};
/** Wide log line (scenes 4a, 5a): 0.001 to 1000. */
export const LNW: Ln = {y: 380, x0: 260, x1: 1660, lo: -3, hi: 3};

// ---------- the painted tube ----------
const NAT: [number, number] = [1200, 1884];
const ABOX = {x: 310, y: 156, w: 580, h: 1576};
/** Plate geometry for a tube placed by its alpha box. All plate-space points map with `P`. */
export const tubeGeom = (x: number, y: number, h: number) => {
	const s = h / ABOX.h;
	const left = x - ABOX.x * s, top = y - ABOX.y * s;
	const P = (u: number, v: number): [number, number] => [left + u * s, top + v * s];
	const [gx0, gy0] = P(518, 330), [gx1, gy1] = P(682, 1604);
	const [bx0, by0] = P(324, 1045), [bx1, by1] = P(866, 1684);
	return {s, left, top, w: NAT[0] * s, h: NAT[1] * s, aw: ABOX.w * s, P, gas: {x0: gx0, y0: gy0, x1: gx1, y1: gy1, cx: (gx0 + gx1) / 2, cy: (gy0 + gy1) / 2}, beaker: {x0: bx0, y0: by0, x1: bx1, y1: by1}};
};
export type ClipSpec = {src: string; at: number; seconds?: number; rate?: number};
/** Brown amount (0..1) that a clip shows at frame f (for the coded fallback and for matching tints). */
export const clipBrown = (c: ClipSpec, f: number) => {
	const span = Math.round(((c.seconds ?? 5) * 30) / (c.rate ?? 1));
	const u = Math.max(0, Math.min(1, (f - c.at) / span));
	return c.src === CLIP_COOL ? 1 - smooth(u / 0.34) : smooth((u - 0.66) / 0.34);
};
/**
 * The sealed NO2/N2O4 tube in its beaker (HTML layer: place it after the Overlay that draws the bath).
 * `brown` 0..1 crossfades the aligned plates; `clip` plays a process clip (first frame before `at`, last frame after).
 * The clip box is the 16:9 canvas the plate was composited on, scaled so the tube lands exactly on the plate position.
 */
export const No2Tube: React.FC<{x: number; y: number; h: number; brown?: NumFn; clip?: ClipSpec; reveal?: number}> = ({x, y, h, brown = 0, clip, reveal = 1}) => {
	const f = useCurrentFrame();
	if (reveal <= 0.01) return null;
	const g = tubeGeom(x, y, h);
	if (clip && haveClip(clip.src)) {
		const k = g.h / 960; // the plate is 960 px tall on the 1920 x 1080 clip canvas
		return <ProcessClip src={clip.src} at={clip.at} seconds={clip.seconds} rate={clip.rate} x={g.left - 654.27 * k} y={g.top - 60 * k} width={1920 * k} height={1080 * k} crop={{x: g.left, y: g.top, w: g.w, h: g.h}} style={{opacity: reveal}} />;
	}
	const b = clip ? clipBrown(clip, f) : val(brown, f);
	if (havePlates()) {
		return (
			<div style={{position: 'absolute', left: g.left, top: g.top, width: g.w, height: g.h, opacity: reveal}}>
				<Img src={staticFile(TUBE_PALE)} style={{position: 'absolute', left: 0, top: 0, width: g.w, height: g.h}} />
				{b > 0.01 ? <Img src={staticFile(TUBE_BROWN)} style={{position: 'absolute', left: 0, top: 0, width: g.w, height: g.h, opacity: Math.min(1, b)}} /> : null}
			</div>
		);
	}
	// coded fallback: a sealed tube with a stopper in a short beaker, brown tint fading in
	const {gas, beaker} = g;
	const tw2 = gas.x1 - gas.x0 + 16;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, opacity: reveal, overflow: 'visible'}}>
			<rect x={gas.x0 - 8} y={gas.y0 - 10} width={tw2} height={gas.y1 - gas.y0 + 30} rx={tw2 / 2} fill="#eef5fa" stroke={INK} strokeWidth={4} />
			<rect x={gas.x0} y={gas.y0} width={gas.x1 - gas.x0} height={gas.y1 - gas.y0 + 12} rx={(gas.x1 - gas.x0) / 2} fill={hexMix('#efe3cf', '#a8471f', b)} />
			<rect x={gas.x0 - 6} y={gas.y0 - 50 * g.s * 2.2} width={tw2 - 4} height={50 * g.s * 2.2} rx={6} fill="#3a3a3a" />
			<path d={`M${beaker.x0},${beaker.y0} L${beaker.x0 + 8},${beaker.y1} L${beaker.x1 - 8},${beaker.y1} L${beaker.x1},${beaker.y0}`} fill="none" stroke={INK} strokeWidth={4} />
		</svg>
	);
};

/** Hot (terracotta) or ice (pale blue) water in the beaker. SVG: draw it after the tube (the clip box carries its own paper), as tinted water in front of the glass. */
export const Bath: React.FC<{x: number; y: number; h: number; kind: 'hot' | 'ice'; amount: number; label?: string; labelAmount?: number}> = ({x, y, h, kind, amount, label, labelAmount}) => {
	const f = useCurrentFrame();
	if (amount <= 0.01) return null;
	const g = tubeGeom(x, y, h);
	const [L, T] = g.P(336, 1150), [R, B] = g.P(854, 1668);
	const hot = kind === 'hot';
	const lo = labelAmount ?? amount;
	return (
		<g>
			<rect x={L} y={T + (B - T) * (1 - amount) * 0.4} width={R - L} height={(B - T) * (0.6 + 0.4 * amount)} rx={22 * g.s * 2} fill={hot ? 'rgba(232,108,52,0.40)' : 'rgba(90,163,208,0.40)'} opacity={amount} />
			{hot
				? [0.22, 0.5, 0.78].map((u, i) => <path key={i} d={`M${L + (R - L) * u},${T - 10} q-12,-22 0,-44 q12,-22 0,-44`} fill="none" stroke={HEAT} strokeWidth={5} strokeLinecap="round" opacity={amount * (0.45 + 0.45 * Math.sin(f * 0.16 + i * 2))} transform={`translate(0,${-((f * 1.1 + i * 30) % 36)})`} />)
				: [[0.12, 0.25], [0.86, 0.2], [0.14, 0.72], [0.86, 0.66]].map(([u, v], i) => <rect key={i} x={L + (R - L) * u - 20} y={T + (B - T) * v - 20 + Math.sin(f * 0.06 + i) * 3} width={40} height={40} rx={8} fill="#e9f6fc" stroke={ICE} strokeWidth={3} opacity={amount} transform={`rotate(${i * 12 - 18} ${L + (R - L) * u} ${T + (B - T) * v})`} />)}
			{label ? <text x={(L + R) / 2} y={B + 70} textAnchor="middle" fill={hot ? HEAT : '#2f7fb0'} opacity={lo} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}}>{label}</text> : null}
		</g>
	);
};

// ---------- particle lens next to the tube ----------
export const NO2_SP: Species[] = [{color: N2O4_DOT, r: 18}, {color: NO2C, r: 12}];
/** A magnifier on the gas column: dashed connector from the tube to a lens with N2O4 (pale) and NO2 (brown) dots. */
export const TubeLens: React.FC<{tube?: {x: number; y: number; h: number}; cx?: number; cy?: number; r?: number; counts: (f: number) => number[]; reveal?: number; brown?: number; key9?: boolean; keyAt?: number}> = ({tube = TUBE9, cx = LENS9.cx, cy = LENS9.cy, r = LENS9.r, counts, reveal = 1, brown = 0, key9 = true, keyAt = -100}) => {
	if (reveal <= 0.01) return null;
	const g = tubeGeom(tube.x, tube.y, tube.h);
	const py = cy - 40;
	return (
		<g opacity={reveal}>
			<circle cx={g.gas.cx} cy={py} r={22} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 5" />
			<path d={`M${g.gas.cx + 16},${py - 14} L${cx - r * 0.7},${cy - r * 0.72}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" />
			<path d={`M${g.gas.cx + 16},${py + 14} L${cx - r * 0.7},${cy + r * 0.72}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" />
			<SpeciesLens cx={cx} cy={cy} r={r} counts={counts} species={NO2_SP} rxn={[1, 1, 0]} seed={11} tint={hexMix('#fffdf8', '#efcfae', brown)} />
			{key9 ? (
				<Fade at={keyAt}>
					<circle cx={cx - r + 10} cy={cy + r + 44} r={14} fill={N2O4_DOT} stroke={INK} strokeWidth={2.5} />
					<Sx x={cx - r + 32} y={cy + r + 54} text="N_2O_4" size={30} color={N2O4_INK} weight={600} at={keyAt} />
					<circle cx={cx + 40} cy={cy + r + 44} r={10} fill={NO2C} stroke={INK} strokeWidth={2.5} />
					<Sx x={cx + 58} y={cy + r + 54} text="NO_2" size={30} color={NO2_INK} weight={600} at={keyAt} />
				</Fade>
			) : null}
		</g>
	);
};

// ---------- moving K marker ----------
/** Teal K pin above the line. `value` may move (log position); `flash` draws a quick burst when it lands. */
export const KMark: React.FC<{ln: Ln; value: NumFn; at: number; out?: number; label?: string | ((f: number) => string); size?: number; ghost?: boolean; ring?: number; ringOut?: number; flash?: number; labelDy?: number}> = ({ln, value, at, out, label = 'K', size = 44, ghost = false, ring, ringOut, flash, labelDy = 0}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const o = p * (out === undefined ? 1 : 1 - prog(f, out, 10)) * (ghost ? 0.38 : 1);
	if (o <= 0.01) return null;
	const x = lx(val(value, f), ln), y = ln.y;
	const dy = -(1 - p) * 60;
	const text = typeof label === 'function' ? label(f) : label;
	const pu = ring !== undefined && f >= ring ? 1 + 0.18 * Math.max(0, Math.sin(Math.min(1, (f - ring) / 30) * Math.PI)) : 1;
	const fl = flash !== undefined && f >= flash && f < flash + 18 ? (f - flash) / 18 : -1;
	return (
		<g opacity={o}>
			{fl >= 0 ? <circle cx={x} cy={y - 30} r={20 + 70 * fl} fill="none" stroke={TEAL} strokeWidth={6} opacity={1 - fl} /> : null}
			<g transform={`translate(${x},${y + dy}) scale(${pu})`}>
				<path d="M0,-6 L-18,-38 Q0,-54 18,-38 Z" fill={ghost ? '#fffdf8' : TEAL} stroke={ghost ? TEAL : INK} strokeWidth={3.5} strokeLinejoin="round" strokeDasharray={ghost ? '5 4' : undefined} />
			</g>
			{text ? <text x={x} y={y - 66 + dy + labelDy} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}}>{text}</text> : null}
			{ring !== undefined ? <Ring cx={x} cy={y - 50 + labelDy / 2} rx={Math.max(54, tw(text, size, true) / 2 + 26)} ry={52} at={ring} out={ringOut} color={AMBER} seed={11} width={5} /> : null}
		</g>
	);
};

// ---------- rate bars (heights only, no values) ----------
export type BarLabels = {fwd: [string, string?]; rev: [string, string?]};
/** Blue forward and amber reverse bars with labels under each; `eq` 0..1 shows the teal "equal" bracket. */
export const Bars9: React.FC<{x0?: number; base?: number; bw?: number; gx?: number; fwd: number; rev: number; at: number; out?: number; eq?: number; labels: BarLabels; labelSize?: number}> = ({x0 = 1060, base = 900, bw = 110, gx = 240, fwd, rev, at, out, eq = 0, labels, labelSize = 44}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	if (o <= 0.01) return null;
	const topF = base - fwd, topR = base - rev;
	const lab = (x: number, l: [string, string?], c: string) => (
		<g>
			<text x={x} y={base + 48} textAnchor="middle" fill={c} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: labelSize}}>{l[0]}</text>
			{l[1] ? <text x={x} y={base + 86} textAnchor="middle" fill={c} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: labelSize * 0.72}}>{l[1]}</text> : null}
		</g>
	);
	return (
		<g opacity={o}>
			<path d={`M${x0 - 36},${base} L${x0 + gx + bw + 36},${base}`} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			<rect x={x0} y={topF} width={bw} height={Math.max(0, fwd)} fill="#bcd6ee" stroke={BLUE} strokeWidth={5} rx={6} />
			<rect x={x0 + gx} y={topR} width={bw} height={Math.max(0, rev)} fill="#f6dfae" stroke={AMBER} strokeWidth={5} rx={6} />
			{lab(x0 + bw / 2, labels.fwd, BLUE)}
			{lab(x0 + gx + bw / 2, labels.rev, AMBER_INK)}
			{eq > 0.02 ? (
				<g opacity={eq}>
					<path d={`M${x0 - 18},${Math.min(topF, topR)} L${x0 + gx + bw + 18},${Math.min(topF, topR)}`} stroke={TEAL} strokeWidth={4} strokeDasharray="10 8" />
					<path d={`M${x0 + bw / 2},${Math.min(topF, topR) - 16} L${x0 + bw / 2},${Math.min(topF, topR) - 30} L${x0 + gx + bw / 2},${Math.min(topF, topR) - 30} L${x0 + gx + bw / 2},${Math.min(topF, topR) - 16}`} fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<text x={x0 + (gx + bw) / 2} y={Math.min(topF, topR) - 46} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}}>equal</text>
				</g>
			) : null}
		</g>
	);
};
/** Two empty dashed bars with a "?" over each. */
export const EmptyBars9: React.FC<{x0?: number; base?: number; bw?: number; gx?: number; at: number; out?: number; h?: number; labels: BarLabels}> = ({x0 = 1060, base = 900, bw = 110, gx = 240, at, out, h = 170, labels}) => (
	<Fade at={at} out={out}>
		<path d={`M${x0 - 36},${base} L${x0 + gx + bw + 36},${base}`} stroke={INK} strokeWidth={5} strokeLinecap="round" />
		<rect x={x0} y={base - h} width={bw} height={h} rx={6} fill="none" stroke={BLUE} strokeWidth={4} strokeDasharray="10 8" />
		<rect x={x0 + gx} y={base - h} width={bw} height={h} rx={6} fill="none" stroke={AMBER} strokeWidth={4} strokeDasharray="10 8" />
		<Sx x={x0 + bw / 2} y={base - h / 2 + 24} text="?" size={80} color={BLUE} anchor="middle" hand at={at + 4} />
		<Sx x={x0 + gx + bw / 2} y={base - h / 2 + 24} text="?" size={80} color={AMBER_INK} anchor="middle" hand at={at + 8} />
		<Sx x={x0 + bw / 2} y={base + 48} text={labels.fwd[0]} size={44} color={BLUE} anchor="middle" hand at={at + 4} />
		<Sx x={x0 + gx + bw / 2} y={base + 48} text={labels.rev[0]} size={44} color={AMBER_INK} anchor="middle" hand at={at + 8} />
	</Fade>
);

// ---------- small icons ----------
/** Coded flame (terracotta), flickering. */
export const Flame: React.FC<{x: number; y: number; s?: number; at: number; out?: number}> = ({x, y, s = 1, at, out}) => {
	const f = useCurrentFrame();
	const fl = 1 + 0.08 * Math.sin(f * 0.55);
	return (
		<Fade at={at} out={out}>
			<g transform={`translate(${x},${y}) scale(${s},${s * fl})`}>
				<path d="M0,0 Q-30,-22 -10,-58 Q-6,-30 10,-40 Q30,-18 0,0 Z" fill="#f0a24a" stroke={HEAT} strokeWidth={4} strokeLinejoin="round" />
				<path d="M0,-4 Q-12,-14 -2,-30 Q2,-16 8,-20 Q14,-10 0,-4 Z" fill="#fbe1a6" />
			</g>
		</Fade>
	);
};
/** Up or down arrow with a word, for "K up" style tags. */
export const UpDown: React.FC<{x: number; y: number; dir: 'up' | 'down' | 'both'; at: number; out?: number; color?: string; s?: number}> = ({x, y, dir, at, out, color = TEAL, s = 1}) => (
	<Fade at={at} out={out}>
		<g transform={`translate(${x},${y}) scale(${s})`} stroke={color} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" fill="none">
			{dir !== 'down' ? <path d="M0,0 L0,-46 M-14,-32 L0,-48 L14,-32" /> : null}
			{dir !== 'up' ? <path d={dir === 'both' ? 'M22,-48 L22,0 M8,-16 L22,0 L36,-16' : 'M0,-48 L0,0 M-14,-16 L0,0 L14,-16'} /> : null}
		</g>
	</Fade>
);
/** A teal "=" bracket between two marker positions sitting together (Q equal to K). */
export const EqualBrace: React.FC<{ln: Ln; v: number; at: number; out?: number}> = ({ln, v, at, out}) => {
	const x = lx(v, ln);
	return (
		<Fade at={at} out={out}>
			<path d={`M${x + 34},${ln.y - 54} Q${x + 64},${ln.y} ${x + 34},${ln.y + 70}`} fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" />
			<Sx x={x + 74} y={ln.y + 20} text="Q = K" size={40} color={TEAL} hand at={at} />
		</Fade>
	);
};
void DrawPath; void Chip; void Cross; void EqStrip; void FracX; void GivensCard; void Overlay; void SvgText; void Tag; void Tick; void eqLayout; void Bracket; void Arrow; void QMarker; void QKGap; void LogLine; void Thermometer; void CLIP_HEAT;
