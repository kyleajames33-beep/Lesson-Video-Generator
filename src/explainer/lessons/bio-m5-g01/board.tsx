// Biology practice board (G01 and G02): the G03c practice layout in the Biology visual system. Top-left the task line,
// the HSC-style tag and the type badge top right, a checklist strip along the bottom that ticks the row each scene uses
// and dims during every countdown, question cards for the hook, a crossed classic-mistake chip with a red scribble, the
// decision board and the key-notes hold. Reuses G03c's task line, question cards and pause hold, C6's givens card and
// text, and B6b's model lines, rings and grey tags.
import React, {useEffect, useState} from 'react';
import {continueRender, delayRender, staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {Fade, GivensCard, Sx, tw} from '../chem-m5-c06/parts';
import type {CardLine} from '../chem-m5-c06/parts';
import {PauseHold, QCard, TaskLine} from '../chem-m5-g03c/board';
import {GREYT, GREY_INK, GreyTag, ModelLine, Ring} from '../bio-m5-b06b/shared';

export {Fade, GivensCard, Sx, tw, PauseHold, QCard, TaskLine, GREYT, GREY_INK, GreyTag, ModelLine, Ring};
export type {CardLine};
export const BIO = BLUE;
export const BIO_SOFT = '#e3eef8';
export const GLOW = '#f6d77a';
export const RED = '#c4432f';
export const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** Fade in at `at`, optionally out at `out`. */
export const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
export const smooth = (t: number) => { const u = clamp01(t); return u * u * (3 - 2 * u); };

// ---------- header pieces ----------
const HSC = 'HSC-style question, written for HSCScience';
/** Dashed tag, top right: every question card carries it. */
export const HscTag: React.FC<{at: number; out?: number}> = ({at, out}) => {
	const w = tw(HSC, 26, true) + 44;
	return (
		<Fade at={at} out={out}>
			<rect x={1824 - w} y={30} width={w} height={48} rx={24} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
			<Sx x={1824 - w / 2} y={63} text={HSC} size={26} color={INK_SOFT} anchor="middle" hand at={at} />
		</Fade>
	);
};
/** Blue type badge, right-aligned under the HSC tag. */
export const Badge: React.FC<{text: string; at: number; out?: number}> = ({text, at, out}) => {
	const w = tw(text, 30, true) + 48;
	return (
		<Fade at={at} out={out}>
			<rect x={1824 - w} y={92} width={w} height={50} rx={25} fill={BIO} />
			<Sx x={1824 - w / 2} y={127} text={text} size={30} color="#fffdf8" anchor="middle" hand at={at} />
		</Fade>
	);
};

// ---------- checklist strip (bottom) ----------
const STRIP_Y = 1004;
const pillW = (label: string) => tw(label, 26, true) + 62;
/** The checklist strip. `ticks[i]` lists frames at which row i gains a tick. Dims to an outline during a hold. */
export const CheckStrip: React.FC<{labels: string[]; title: string; ticks?: Record<number, number[]>; at?: number; out?: number; hold?: {startFrame: number; endFrame: number}}> = ({labels, title, ticks = {}, at = -100, out, hold}) => {
	const f = useCurrentFrame();
	const dim = hold ? prog(f, hold.startFrame - 12, 14) * (1 - prog(f, hold.endFrame, 14)) : 0;
	const o = prog(f, at, 16) * (out === undefined ? 1 : 1 - prog(f, out, 12)) * (1 - 0.75 * dim);
	if (o <= 0.01) return null;
	const rise = (1 - prog(f, at, 20)) * 40;
	const x0 = 96 + tw(title, 28, true) + 18;
	let x = x0;
	return (
		<g opacity={o} transform={`translate(0,${rise})`}>
			<Sx x={96} y={STRIP_Y + 34} text={title} size={28} color={INK_SOFT} hand at={-1000} />
			{labels.map((l, i) => {
				const px = x;
				const w = pillW(l);
				x = px + w + 14;
				const on = (ticks[i] ?? []).some(t => t <= f);
				const flash = (ticks[i] ?? []).reduce((a, t) => Math.max(a, f >= t ? Math.max(0, 1 - (f - t) / 24) : 0), 0);
				return (
					<g key={i}>
						<rect x={px} y={STRIP_Y} width={w} height={48} rx={24} fill={flash > 0.01 ? GLOW : '#fffdf8'} fillOpacity={flash > 0.01 ? 0.4 + 0.6 * flash : dim > 0.5 ? 0 : 1} stroke={on ? BIO : 'rgba(60,45,20,0.25)'} strokeWidth={on ? 3 : 2.5} />
						<rect x={px + 14} y={STRIP_Y + 12} width={24} height={24} rx={5} fill="#fffdf8" stroke={on ? BIO : INK_SOFT} strokeWidth={2.5} />
						{(ticks[i] ?? []).slice(0, 1).map((t, k) => <DrawPath key={k} d={`M${px + 14},${STRIP_Y + 24} l7,8 l13,-17`} at={t} dur={10} color="#2f8a5b" width={4} />)}
						<Sx x={px + 48} y={STRIP_Y + 33} text={l} size={26} color={on ? BIO : INK_SOFT} hand at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
/** The full checklist (hook): one row per check, each with an icon, written on its cue; it shrinks into the strip at `shrink`. */
export const CheckList: React.FC<{rows: {text: string; at: number; icon?: React.ReactNode}[]; x?: number; y?: number; lh?: number; size?: number; shrink: number; title?: string; titleAt?: number}> = ({rows, x = 96, y = 330, lh = 110, size = 50, shrink, title, titleAt}) => {
	const f = useCurrentFrame();
	const s = prog(f, shrink, 22);
	if (s >= 1) return null;
	const sc = 1 - 0.55 * s;
	return (
		<g opacity={1 - s} transform={`translate(${x},${y + s * 620}) scale(${sc}) translate(${-x},${-y})`}>
			{title && titleAt !== undefined ? <Sx x={x} y={y - 50} text={title} size={36} color={INK_SOFT} hand at={titleAt} /> : null}
			{rows.map((r, i) => (
				<Fade key={i} at={r.at}>
					<rect x={x} y={y + i * lh - 4} width={88} height={78} rx={14} fill="#fffdf8" stroke={BIO} strokeWidth={3} />
					<g transform={`translate(${x + 44},${y + i * lh + 35})`}>{r.icon}</g>
					<Sx x={x + 114} y={y + i * lh + 52} text={r.text} size={size} hand at={r.at} />
				</Fade>
			))}
		</g>
	);
};

// ---------- the crossed classic mistake ----------
/** Grey chip that takes a red scribble cross at `cross`; optional red caption under it. */
export const Crossed: React.FC<{x: number; y: number; text: string; at: number; cross: number; caption?: string; size?: number; out?: number; hand?: boolean}> = ({x, y, text, at, cross, caption, size = 32, out, hand = true}) => {
	const w = tw(text, size, hand) * (hand ? 1.08 : 1.02) + 52;
	const h = size + 30;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={h} rx={h / 2} fill="#eceeef" stroke={GREYT} strokeWidth={2.5} />
			<Sx x={x + 26} y={y + size + 6} text={text} size={size} color={GREY_INK} hand={hand} weight={hand ? 700 : 600} at={at} />
			<DrawPath d={scribbleEllipse(x + w / 2, y + h / 2, w / 2 + 10, h / 2 + 8, 7, 1.1)} at={cross} dur={16} color={RED} width={4.5} />
			<DrawPath d={`M${x + 12},${y + h - 8} L${x + w - 12},${y + 8}`} at={cross + 8} dur={10} color={RED} width={6} />
			{caption ? <Sx x={x + 26} y={y + h + size + 10} text={caption} size={size * 0.95} color={RED} hand at={cross + 14} /> : null}
		</Fade>
	);
};
export const crossedW = (text: string, size = 32, hand = true) => tw(text, size, hand) * (hand ? 1.08 : 1.02) + 52;

/** A memory-aid chip (blue). */
export const AidChip: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number}> = ({x, y, text, at, out, size = 36}) => {
	const w = tw(text, size, true) * 1.06 + 60;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={size + 30} rx={(size + 30) / 2} fill={BIO_SOFT} stroke={BIO} strokeWidth={3} />
			<Sx x={x + 30} y={y + size + 6} text={text} size={size} color={BIO} hand at={at} />
		</Fade>
	);
};
/** A plain amber hand note. */
export const Note: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, at, out, size = 34, color = AMBER_INK, anchor = 'start'}) => (
	<Sx x={x} y={y} text={text} size={size} color={color} hand at={at} out={out} anchor={anchor} />
);
/** Dims a group once a later stage starts. */
export const Dim: React.FC<{at: number; to?: number; children: React.ReactNode}> = ({at, to = 0.35, children}) => {
	const f = useCurrentFrame();
	return <g opacity={1 - (1 - to) * prog(f, at, 14)}>{children}</g>;
};
/** A wobbly amber ring round a rectangle region. */
export const BoxRing: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; color?: string; seed?: number}> = ({x, y, w, h, at, out, color = AMBER, seed = 3}) => (
	<Ring cx={x + w / 2} cy={y + h / 2} rx={w / 2 + 14} ry={h / 2 + 12} at={at} out={out} color={color} seed={seed} width={5} />
);

// ---------- decision board ----------
export type DRow = {see: string; doo: string[]; badge: string; at: number; lit?: [number, number]};
export const DecisionRows: React.FC<{rows: DRow[]; y0?: number; lh?: number; seeSize?: number; dooSize?: number; split?: number}> = ({rows, y0 = 290, lh = 128, seeSize = 40, dooSize = 33, split = 760}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<Sx x={126} y={y0 - 22} text="What you see" size={34} color={INK_SOFT} hand at={4} />
			<Sx x={split + 80} y={y0 - 22} text="What you do first" size={34} color={INK_SOFT} hand at={8} />
			{rows.map((r, i) => {
				const y = y0 + i * lh;
				const g = r.lit ? prog(f, r.lit[0], 10) * (1 - prog(f, r.lit[1], 12)) : 0;
				const bw = tw(r.badge, 28, true) + 34;
				const p = prog(f, r.at, 16);
				const mid = y + (lh - 16) / 2;
				return (
					<Fade key={i} at={r.at}>
						<g transform={`translate(${(1 - p) * -30},0)`}>
							<rect x={96} y={y} width={1728} height={lh - 16} rx={20} fill="#fffdf8" stroke={g > 0.05 ? BIO : 'rgba(60,45,20,0.18)'} strokeWidth={3 + 2 * g} />
							{g > 0.01 ? <rect x={102} y={y + 6} width={1716} height={lh - 28} rx={16} fill={GLOW} opacity={0.3 * g} /> : null}
							<Sx x={126} y={mid + 13} text={r.see} size={seeSize} hand at={r.at} />
							<path d={`M${split},${mid} L${split + 52},${mid} M${split + 38},${mid - 12} L${split + 52},${mid} L${split + 38},${mid + 12}`} fill="none" stroke={BIO} strokeWidth={4} strokeLinecap="round" />
							{r.doo.map((d, k) => <Sx key={k} x={split + 80} y={mid + 12 + (k - (r.doo.length - 1) / 2) * 40} text={d} size={r.doo.length > 1 ? dooSize - 3 : dooSize} color={BIO} weight={600} at={r.at + 6} />)}
							<rect x={1824 - 24 - bw} y={mid - 22} width={bw} height={44} rx={22} fill={BIO_SOFT} stroke={BIO} strokeWidth={2} />
							<Sx x={1824 - 24 - bw / 2} y={mid + 10} text={r.badge} size={28} color={BIO} anchor="middle" hand at={r.at + 10} />
						</g>
					</Fade>
				);
			})}
		</g>
	);
};
/** The "Next" chip with an icon slot. */
export const NextChip: React.FC<{x: number; y: number; w: number; text: string; at: number; children?: React.ReactNode}> = ({x, y, w, text, at, children}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={w} height={84} rx={42} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
		{children}
		<Sx x={x + 120} y={y + 56} text={text} size={40} color={INK} hand at={at} />
	</Fade>
);

// ---------- key notes ----------
const EMDASH = String.fromCharCode(0x2014);
export const notesCheck = (notes: string[]) => { for (const n of notes) if (n.includes(EMDASH)) throw new Error('em dash in notes'); return notes; };
export const NotesBoard: React.FC<{notes: string[]; aid: string; tag: string; size?: number; aidTop?: number}> = ({notes, aid, tag, size = 32, aidTop = 780}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 84}}><HandText text="Key notes: what to write in your book" at={2} size={58} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1120, top: 100}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 34, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 120, top: 180, width: 1690}}>
			{notesCheck(notes).map((n, i) => (
				<Enter key={i} at={30 + i * 12} style={{display: 'flex', gap: 20, marginBottom: 14}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: size * 0.34, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: 500, color: INK, lineHeight: 1.25}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={96} style={{position: 'absolute', left: 96, top: aidTop, width: 1730}}>
			<div style={{background: '#fffdf8', border: `4px solid ${BIO}`, borderRadius: 22, padding: '8px 30px 12px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: BIO, lineHeight: 1.08}}>{aid}</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, color: GREY_INK, marginTop: 6}}>{tag}</div>
			</div>
		</Enter>
	</>
);

// ---------- the worded question (owner, 18 Oct): stem and context as an exam words it, then the demands ----------
// Words are laid out with the real font metrics (canvas measureText on Inter Tight, loaded here and awaited with
// delayRender), so each underline sits exactly under its words. Givens are underlined on their narration cues.
let QFONT: Promise<void> | null = null;
const qFont = () => {
	if (typeof document === 'undefined') return Promise.resolve();
	if (!QFONT) {
		const face = new FontFace('Inter Tight', `url(${staticFile('fonts/inter-tight-latin-wght-normal.woff2')}) format('woff2')`, {weight: '100 900'});
		QFONT = face.load().then(f => { document.fonts.add(f); }).catch(() => undefined);
	}
	return QFONT;
};
const useQFont = () => {
	const [ready, setReady] = useState(false);
	const [handle] = useState(() => (typeof document === 'undefined' ? null : delayRender('Question text font', {timeoutInMilliseconds: 30000})));
	useEffect(() => {
		let live = true;
		qFont().then(() => { if (live) setReady(true); if (handle !== null) continueRender(handle); });
		return () => { live = false; };
	}, [handle]);
	return ready;
};
let QCTX: CanvasRenderingContext2D | null = null;
const qMeasure = (s: string, size: number, weight: number) => {
	if (typeof document === 'undefined') return tw(s, size);
	if (!QCTX) QCTX = document.createElement('canvas').getContext('2d');
	if (!QCTX) return tw(s, size);
	QCTX.font = `${weight} ${size}px "Inter Tight"`;
	return QCTX.measureText(s).width;
};
/** A block of question text: it continues the current paragraph unless `para` starts a new one (demands do). */
export type QBlock = {text: string; at: number; para?: boolean; weight?: number};
/** An underline under a phrase of the question (matched word for word), drawn on at `at`. */
export type QMark = {phrase: string; at: number; occ?: number; color?: string};
const qNorm = (w: string) => w.toLowerCase().replace(/[^a-z0-9']/g, '');
/** Throws (at module load) if a marked phrase is not in the question text. */
export const qCheck = (blocks: QBlock[], marks: QMark[]) => {
	const words = blocks.flatMap(b => b.text.split(/\s+/).filter(Boolean)).map(qNorm);
	for (const m of marks) {
		const t = m.phrase.split(/\s+/).map(qNorm).filter(Boolean);
		let seen = 0, ok = false;
		for (let i = 0; i + t.length <= words.length; i++) if (t.every((x, k) => words[i + k] === x) && ++seen === (m.occ ?? 1)) { ok = true; break; }
		if (!ok) throw new Error(`question mark "${m.phrase}" not found in the question text`);
	}
	return {blocks, marks};
};
export const QText: React.FC<{q: {blocks: QBlock[]; marks: QMark[]}; x: number; y: number; w: number; size?: number; lh?: number; at?: number; markAt?: Record<string, number>; card?: boolean; s?: number}> = ({q, x, y, w, size = 30, lh, at = -100, markAt = {}, card = true, s = 1}) => {
	const f = useCurrentFrame();
	const ready = useQFont();
	const L = lh ?? Math.round(size * 1.3);
	type W = {t: string; b: number; x: number; line: number; w: number; weight: number};
	const words: W[] = [];
	let cx = 0, line = 0;
	q.blocks.forEach((b, bi) => {
		const weight = b.weight ?? 500;
		if (b.para && words.length) { line += 1.35; cx = 0; }
		const sp = qMeasure(' ', size, weight);
		for (const t of b.text.split(/\s+/).filter(Boolean)) {
			const ww = qMeasure(t, size, weight);
			if (cx > 0 && cx + ww > w) { line += 1; cx = 0; }
			words.push({t, b: bi, x: cx, line, w: ww, weight});
			cx += ww + sp;
		}
	});
	const lines = Math.ceil(line + 1);
	const H = (line + 1) * L;
	const appear = prog(f, at, 14);
	// group words by block and line into text runs
	const runs: {x: number; line: number; b: number; text: string; weight: number}[] = [];
	for (const wd of words) {
		const last = runs[runs.length - 1];
		if (last && last.b === wd.b && last.line === wd.line) last.text += ' ' + wd.t;
		else runs.push({x: wd.x, line: wd.line, b: wd.b, text: wd.t, weight: wd.weight});
	}
	const norm = words.map(wd => qNorm(wd.t));
	const marks = q.marks.map((m, mi) => {
		const tt = m.phrase.split(/\s+/).map(qNorm).filter(Boolean);
		let seen = 0, start = -1;
		for (let i = 0; i + tt.length <= norm.length; i++) if (tt.every((v, k) => norm[i + k] === v) && ++seen === (m.occ ?? 1)) { start = i; break; }
		return {m, mi, start, end: start + tt.length - 1};
	});
	void lines;
	return (
		<g transform={s !== 1 ? `translate(${x},${y}) scale(${s}) translate(${-x},${-y})` : undefined} opacity={ready ? 1 : 0}>
			{card ? <rect x={x - 26} y={y - size - 18} width={w + 52} height={H + 40} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} opacity={appear} /> : null}
			{runs.map((r, i) => {
				const o = prog(f, q.blocks[r.b].at, 12);
				return o > 0.01 ? <text key={i} x={x + r.x} y={y + r.line * L} opacity={o} style={{fontFamily: '"Inter Tight"', fontWeight: r.weight, fontSize: size, whiteSpace: 'pre'}} fill={INK}>{r.text}</text> : null;
			})}
			{marks.map(({m, mi, start, end}) => {
				if (start < 0) return null;
				const t0 = markAt[m.phrase] ?? m.at;
				if (f < t0) return null;
				const segs: {x1: number; x2: number; line: number}[] = [];
				for (let i = start; i <= end; i++) {
					const wd = words[i];
					const sg = segs[segs.length - 1];
					if (sg && sg.line === wd.line) sg.x2 = wd.x + wd.w; else segs.push({x1: wd.x, x2: wd.x + wd.w, line: wd.line});
				}
				return (
					<g key={mi}>
						{segs.map((sg, k) => {
							const yy = y + sg.line * L + size * 0.22;
							const x1 = x + sg.x1 - 3, x2 = x + sg.x2 + 3;
							const d = `M${x1},${yy + 1} C${x1 + (x2 - x1) * 0.3},${yy + 4} ${x1 + (x2 - x1) * 0.7},${yy - 2} ${x2},${yy + 2}`;
							return <DrawPath key={k} d={d} at={t0 + k * 8} dur={Math.min(22, 8 + (x2 - x1) / 40)} color={m.color ?? AMBER} width={5} />;
						})}
					</g>
				);
			})}
		</g>
	);
};
