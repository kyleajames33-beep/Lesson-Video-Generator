// Text for the skills kit: chemistry markup (_2 subscripts, ^{3+} superscripts), real font metrics and a word layout
// that reports every word's position, so highlighter swipes, underlines, brackets and rings sit exactly on the words.
import React from 'react';
import {FONT_DISPLAY, FONT_HAND} from '../../kit';
import {INK} from './theme';

export const EMDASH = String.fromCharCode(0x2014);
type Seg = {s: string; k: 0 | 1 | 2};
const RE = /(_\d+|\^\{[^}]*\})/g;
export const segs = (text: string): Seg[] => {
	const out: Seg[] = [];
	let last = 0;
	let m: RegExpExecArray | null;
	RE.lastIndex = 0;
	while ((m = RE.exec(text))) {
		if (m.index > last) out.push({s: text.slice(last, m.index), k: 0});
		out.push(m[0][0] === '_' ? {s: m[0].slice(1), k: 1} : {s: m[0].slice(2, -1), k: 2});
		last = m.index + m[0].length;
	}
	if (last < text.length) out.push({s: text.slice(last), k: 0});
	return out;
};
/** Plain text of marked-up text. */
export const plain = (text: string) => segs(text).map(s => s.s).join('');

// ---------- measuring ----------
let CTX: CanvasRenderingContext2D | null = null;
const CACHE = new Map<string, number>();
const est = (text: string, size: number, hand: boolean) => segs(text).reduce((w, s) => w + [...s.s].length * (hand ? 0.42 : 0.52) * size * (s.k ? 0.64 : 1), 0);
// document.fonts.check() is true while no face of the family is registered yet, so a measure taken before kit.tsx
// adds the faces (e.g. a module-level layout) would cache fallback-font widths for the whole render. Require a loaded face.
const faceLoaded = (family: string) => {
	for (const f of document.fonts) if (f.family.replace(/["']/g, '') === family && f.status === 'loaded') return true;
	return false;
};
/** Width in px of marked-up text as T draws it. Uses canvas metrics once the face is loaded. */
export const measure = (text: string, size: number, hand = false, weight = 500): number => {
	if (typeof document === 'undefined') return est(text, size, hand);
	const key = `${hand ? 'h' : 'd'}${weight}|${text}`;
	const hit = CACHE.get(key);
	if (hit !== undefined) return hit * size;
	try {
		if (!faceLoaded(hand ? 'Caveat' : 'Inter Tight')) return est(text, size, hand);
		if (!CTX) CTX = document.createElement('canvas').getContext('2d');
		if (!CTX) return est(text, size, hand);
		let w = 0;
		for (const s of segs(text)) {
			CTX.font = `${weight} ${s.k ? 64 : 100}px ${hand ? FONT_HAND : FONT_DISPLAY}`;
			w += CTX.measureText(s.s).width;
		}
		CACHE.set(key, w / 100);
		return (w / 100) * size;
	} catch {
		return est(text, size, hand);
	}
};

// ---------- drawing ----------
/** SVG text with chemistry markup. No animation: wrap it in a fade. */
export const T: React.FC<{x: number; y: number; text: string; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; hand?: boolean; weight?: number; o?: number; italic?: boolean}> = ({x, y, text, size = 30, color = INK, anchor = 'start', hand = false, weight = 500, o = 1, italic}) => {
	if (o <= 0.001) return null;
	if (text.includes(EMDASH)) throw new Error('em dash in skills text: ' + text);
	let shift = 0;
	return (
		<text x={x} y={y} textAnchor={anchor} fill={color} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size, whiteSpace: 'pre', fontStyle: italic ? 'italic' : undefined}}>
			{segs(text).map((s, i) => {
				const want = s.k === 1 ? size * 0.22 : s.k === 2 ? -size * 0.4 : 0;
				const dy = want - shift;
				shift = want;
				return <tspan key={i} dx={hand && s.k === 2 ? size * 0.06 : undefined} dy={dy || undefined} style={s.k ? {fontSize: size * 0.64} : undefined}>{s.s}</tspan>;
			})}
		</text>
	);
};

// ---------- layout ----------
export type LWord = {t: string; x: number; line: number; w: number};
/** Greedy word wrap with measured widths. Returns words (x from 0, line index from 0), line count and line widths. */
export const wrap = (text: string, width: number, size: number, hand = false, weight = 500, firstIndent = 0) => {
	const words: LWord[] = [];
	const sp = measure(' ', size, hand, weight);
	let cx = firstIndent, line = 0;
	const widths: number[] = [];
	for (const t of text.split(/[ \t\n]+/).filter(Boolean)) {
		const w = measure(t, size, hand, weight);
		if (cx > 0 && cx + w > width) { widths[line] = cx - sp; line += 1; cx = 0; }
		words.push({t, x: cx, line, w});
		cx += w + sp;
	}
	widths[line] = Math.max(0, cx - sp);
	return {words, lines: line + 1, widths, sp};
};

// ---------- phrase lookup ----------
export const norm = (w: string) => plain(w).toLowerCase().replace(/[.,;:!?"“”'‘’()[\]]/g, '');
/** Index range [start, end] of the occ-th run of words matching phrase. Throws when missing (a script change cannot
 *  silently leave an annotation pointing at nothing). */
export const findRun = (words: {t: string}[], phrase: string, occ = 1, where = ''): [number, number] => {
	const tgt = phrase.split(/\s+/).map(norm).filter(Boolean);
	const ws = words.map(w => norm(w.t));
	let seen = 0;
	for (let i = 0; i + tgt.length <= ws.length; i++) {
		if (tgt.every((t, k) => ws[i + k] === t) && ++seen === occ) return [i, i + tgt.length - 1];
	}
	throw new Error(`Phrase "${phrase}" (#${occ}) not found ${where}`);
};
export type Span = {x1: number; x2: number; y: number; line: number};
/** Per-line spans (absolute baseline y) of words start..end. */
export const runSpans = <W extends {ax: number; ay: number; w: number; line: number}>(words: W[], start: number, end: number): Span[] => {
	const out: Span[] = [];
	for (let i = start; i <= end; i++) {
		const w = words[i];
		const last = out[out.length - 1];
		if (last && last.y === w.ay) last.x2 = w.ax + w.w;
		else out.push({x1: w.ax, x2: w.ax + w.w, y: w.ay, line: w.line});
	}
	return out;
};
