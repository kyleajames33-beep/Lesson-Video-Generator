// Board pieces for the skills series: the routine strip (Do what? How much? About what? Using what?), the drill
// countdown, chips, grey source tags, the crossed habit, pen arrows, painted plates (placed by alpha box, never
// stretched), the heading and the key notes board.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, prog, scribbleEllipse} from '../../kit';
import {EMDASH, T, measure, wrap} from './text';
import {AMBER, AMBER_INK, CARD, GREEN, GREY, GREY_FILL, GREY_INK, HI, INK, INK_SOFT, PEN, RED, TEAL, ZONE, clamp01, lerp, smooth, vis} from './theme';

export const Overlay: React.FC<{children: React.ReactNode}> = ({children}) => (
	<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible'}}>{children}</svg>
);
export const Fade: React.FC<{at: number; out?: number; d?: number; children: React.ReactNode}> = ({at, out, d = 12, children}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, d);
	return o <= 0.01 ? null : <g opacity={o}>{children}</g>;
};
/** Handwritten heading (HTML layer), top-left. */
export const Heading: React.FC<{text: string; at?: number; size?: number; out?: number; x?: number; y?: number; color?: string}> = ({text, at = 4, size = 64, out, x = 96, y = 92, color = INK}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (text.includes(EMDASH)) throw new Error('em dash in heading');
	return <div style={{position: 'absolute', left: x, top: y, opacity: o}}><HandText text={text} at={at} size={size} cps={30} color={color} /></div>;
};
/** Handwritten SVG line that writes on left to right. */
export const HandLine: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; dur?: number; anchor?: 'start' | 'middle'}> = ({x, y, text, at, out, size = 40, color = INK, dur, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const d = dur ?? Math.max(10, text.length * 0.8);
	const p = clamp01((f - at) / d);
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (p <= 0 || o <= 0.01) return null;
	return <g opacity={o} style={p >= 1 ? undefined : {clipPath: `inset(-40% ${100 - p * 100}% -40% -3%)`}}><T x={x} y={y} text={text} size={size} color={color} hand weight={700} anchor={anchor} /></g>;
};

// ---------- chips and tags ----------
const lines = (text: string, maxW: number, size: number, hand: boolean, weight: number) => {
	const L = wrap(text, maxW, size, hand, weight);
	const out: string[] = Array.from({length: L.lines}, () => '');
	L.words.forEach(w => { out[w.line] = out[w.line] ? out[w.line] + ' ' + w.t : w.t; });
	return {out, w: Math.max(...L.widths)};
};
/** Rounded chip, auto width; wraps at maxW. `cross` draws a red cross on it; `tick` a green tick. */
export const Chip: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; fill?: string; hand?: boolean; anchor?: 'start' | 'middle' | 'end'; maxW?: number; cross?: number; tick?: number; o?: number; textColor?: string}> = ({x, y, text, at, out, size = 32, color = INK, fill = CARD, hand = true, anchor = 'start', maxW = 1600, cross, tick, o = 1, textColor}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const weight = hand ? 700 : 600;
	const L = lines(text, maxW, size, hand, weight);
	const extra = cross !== undefined || tick !== undefined ? size * 1.3 : 0;
	const w = L.w + size * 1.1 + extra, lh = size * 1.18, h = L.out.length * lh + size * 0.62;
	const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
	const lift = (1 - prog(f, at, 12)) * 12;
	return (
		<g opacity={v} transform={`translate(0,${lift})`}>
			<rect x={x0} y={y} width={w} height={h} rx={Math.min(h / 2, size * 0.9)} fill={fill} stroke={color} strokeWidth={3} />
			{L.out.map((t, i) => <T key={i} x={x0 + size * 0.55} y={y + size * 0.31 + size * 0.82 + i * lh} text={t} size={size} color={textColor ?? color} hand={hand} weight={weight} />)}
			{cross !== undefined ? (
				<g>
					<DrawPath d={`M${x0 + w - extra - 4},${y + h * 0.25} L${x0 + w - 18},${y + h * 0.75}`} at={cross} dur={7} color={RED} width={6} />
					<DrawPath d={`M${x0 + w - 18},${y + h * 0.25} L${x0 + w - extra - 4},${y + h * 0.75}`} at={cross + 5} dur={7} color={RED} width={6} />
				</g>
			) : null}
			{tick !== undefined ? <DrawPath d={`M${x0 + w - extra},${y + h * 0.5} L${x0 + w - extra + size * 0.32},${y + h * 0.78} L${x0 + w - 16},${y + h * 0.2}`} at={tick} dur={10} color={GREEN} width={6} /> : null}
		</g>
	);
};
export const chipW = (text: string, size = 32, hand = true) => measure(text, size, hand, hand ? 700 : 600) + size * 1.1;
/** Grey source or caveat tag (Inter, small). */
export const GreyTag: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; anchor?: 'start' | 'middle' | 'end'; maxW?: number; o?: number}> = ({x, y, text, at, out, size = 22, anchor = 'start', maxW = 1600, o = 1}) => (
	<Chip x={x} y={y} text={text} at={at} out={out} size={size} color={GREY} fill={GREY_FILL} hand={false} anchor={anchor} maxW={maxW} o={o} textColor={GREY_INK} />
);
/** The crossed habit: grey chip, red scribble cross, red caption under it. */
export const CrossedHabit: React.FC<{x: number; y: number; text: string; at: number; cross: number; caption?: string; size?: number; out?: number; maxW?: number}> = ({x, y, text, at, cross, caption, size = 30, out, maxW = 460}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const L = lines(text, maxW - size, size, true, 700);
	const lh = size * 1.18;
	const w = L.w + size * 1.1, h = L.out.length * lh + size * 0.62;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={Math.min(h / 2, 26)} fill={GREY_FILL} stroke={GREY} strokeWidth={2.5} />
			{L.out.map((t, i) => <T key={i} x={x + size * 0.55} y={y + size * 0.31 + size * 0.82 + i * lh} text={t} size={size} color={GREY_INK} hand weight={700} />)}
			<DrawPath d={scribbleEllipse(x + w / 2, y + h / 2, w / 2 + 12, h / 2 + 10, 7, 1.1)} at={cross} dur={14} color={RED} width={4.5} />
			<DrawPath d={`M${x + 14},${y + h - 8} L${x + w - 14},${y + 8}`} at={cross + 8} dur={9} color={RED} width={6} />
			{caption ? lines(caption, maxW, size, true, 700).out.map((c, i) => <HandLine key={i} x={x + 8} y={y + h + size + 14 + i * size * 1.15} text={c} at={cross + 14 + i * 12} size={size} color={RED} />) : null}
		</g>
	);
};

// ---------- arrows ----------
/** Curved pen arrow from a to b (bow: sideways offset of the midpoint). */
export const PenArrow: React.FC<{a: [number, number]; b: [number, number]; at: number; out?: number; bow?: number; color?: string; width?: number; dash?: boolean; head?: boolean}> = ({a, b, at, out, bow = 0, color = PEN, width = 3.5, dash = false, head = true}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 8);
	if (o <= 0.01 || f < at) return null;
	const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
	const mx = (a[0] + b[0]) / 2 - (dy / L) * bow, my = (a[1] + b[1]) / 2 + (dx / L) * bow;
	const ang = Math.atan2(b[1] - my, b[0] - mx), hl = 14;
	return (
		<g opacity={o}>
			<DrawPath d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} at={at} dur={16} color={color} width={width} dash={dash ? '9 8' : undefined} />
			{head ? <path d={`M${b[0] - Math.cos(ang - 0.5) * hl},${b[1] - Math.sin(ang - 0.5) * hl} L${b[0]},${b[1]} L${b[0] - Math.cos(ang + 0.5) * hl},${b[1] - Math.sin(ang + 0.5) * hl}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at + 12, 6)} /> : null}
		</g>
	);
};

// ---------- painted plates ----------
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
/** Plate definition from its natural size and alpha box [x0, y0, x1, y1] (PIL, alpha > 20). */
export const mkPlate = (src: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
export const plateW = (p: PDef, h: number) => (p.box[2] / p.box[3]) * h;
/** A plate placed by its visible box: top-left (x, y), height h, width from the aspect (never stretched). */
export const Plate: React.FC<{p: PDef; x: number; y: number; h: number; o?: number; flip?: boolean}> = ({p, x, y, h, o = 1, flip = false}) => {
	if (o <= 0.01) return null;
	const k = h / p.box[3];
	const img = <image href={staticFile(p.src)} x={x - p.box[0] * k} y={y - p.box[1] * k} width={p.nat[0] * k} height={p.nat[1] * k} opacity={o} />;
	if (!flip) return img;
	const cx = x + plateW(p, h) / 2;
	return <g transform={`translate(${cx},0) scale(-1,1) translate(${-cx},0)`}>{img}</g>;
};
/** Two aligned plates crossfading at `swap`. */
export const PlatePair: React.FC<{a: PDef; b: PDef; x: number; y: number; h: number; swap: number; dur?: number; o?: number}> = ({a, b, x, y, h, swap, dur = 30, o = 1}) => {
	const f = useCurrentFrame();
	const q = prog(f, swap, dur);
	return (
		<g opacity={o}>
			{q < 0.999 ? <Plate p={a} x={x} y={y} h={h} /> : null}
			{q > 0.001 ? <Plate p={b} x={x} y={y} h={h} o={q} /> : null}
		</g>
	);
};

// ---------- the routine strip ----------
export type IconKind = 'verb' | 'marks' | 'under' | 'bracket' | 'tick';
/** Annotation icon (s = size in px). */
export const Icon: React.FC<{kind: IconKind; x: number; y: number; s?: number; o?: number}> = ({kind, x, y, s = 36, o = 1}) => {
	if (o <= 0.01) return null;
	const k = s / 36;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${k})`}>
			{kind === 'verb' ? <><path d="M-18,-9 L18,-12 L18,8 L-18,11 Z" fill={HI} /><text x={0} y={7} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 14}} fill={INK}>verb</text></> : null}
			{kind === 'marks' ? <><circle r={16} fill="#fff8e6" stroke={AMBER} strokeWidth={4} /><text y={7} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 19}} fill={AMBER_INK}>3</text></> : null}
			{kind === 'under' ? <><text x={0} y={4} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 20}} fill={INK}>abc</text><path d="M-19,11 C-6,14 6,9 19,12" fill="none" stroke={PEN} strokeWidth={3.5} strokeLinecap="round" /></> : null}
			{kind === 'bracket' ? <><path d="M-10,-15 L-17,-15 L-17,15 L-10,15 M10,-15 L17,-15 L17,15 L10,15" fill="none" stroke={TEAL} strokeWidth={4} /><rect x={-9} y={-3} width={18} height={6} rx={3} fill={TEAL} opacity={0.4} /></> : null}
			{kind === 'tick' ? <path d="M-14,0 L-4,11 L15,-12" fill="none" stroke={GREEN} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /> : null}
		</g>
	);
};
export const ROUTINE = [
	{q: 'Do what?', sub: 'the verb', full: 'highlight the verb', icon: 'verb' as IconKind},
	{q: 'How much?', sub: 'the marks', full: 'circle the marks', icon: 'marks' as IconKind},
	{q: 'About what?', sub: 'content words, givens', full: 'underline content words and givens', icon: 'under' as IconKind},
	{q: 'Using what?', sub: 'the constraint', full: 'bracket the constraint', icon: 'bracket' as IconKind},
];
const AFTER = {q: 'After:', sub: 'tick each part', full: 'tick each part of the question', icon: 'tick' as IconKind};
/**
 * The routine strip. Mini: small, far left (ZONE.strip). Full: a card at the left half. `rows[i]` = frame row i
 * appears (undefined: not yet). `full` = function of frame giving 0 (mini) .. 1 (full). `dim` = frames [from, to]
 * during which it fades back (countdowns). `lit` rows glow while spoken. `after` adds the after-writing row.
 * `none` hangs a grey "none here" tag on a row.
 */
export const RoutineStrip: React.FC<{rows: (number | undefined)[]; full?: (f: number) => number; dim?: [number, number]; lit?: {row: number; from: number; to?: number}[]; after?: number; none?: {row: number; at: number}; o?: number; fullBox?: {x: number; y: number; w: number}; title?: string; miniY?: number}> = ({rows, full, dim, lit = [], after, none, o = 1, fullBox = {x: 96, y: 176, w: 980}, title = 'Before you write', miniY}) => {
	const f = useCurrentFrame();
	const k = full ? clamp01(full(f)) : 0;
	const dimK = dim ? vis(f, dim[0], dim[1], 14) : 0;
	const all = [...ROUTINE, AFTER];
	const appear = (i: number) => (i < 4 ? rows[i] : after);
	const glow = (i: number) => lit.filter(l => l.row === i).reduce((a, l) => Math.max(a, vis(f, l.from, l.to, 10)), 0);
	const op = o * (1 - 0.68 * dimK);
	if (op <= 0.01) return null;
	const S = {...ZONE.strip, y: miniY ?? ZONE.strip.y};
	const miniRowH = 82, fullRowH = 104;
	const n = after !== undefined && f >= after - 2 ? 5 : 4;
	return (
		<g opacity={op}>
			{/* full card frame */}
			{k > 0.01 ? (
				<g opacity={smooth(k)}>
					<rect x={fullBox.x} y={fullBox.y} width={fullBox.w} height={88 + n * fullRowH} rx={22} fill={CARD} stroke={TEAL} strokeWidth={3.5} />
					<T x={fullBox.x + 32} y={fullBox.y + 56} text={title} size={38} color={TEAL} hand weight={700} />
				</g>
			) : null}
			{all.map((r, i) => {
				const at = appear(i);
				if (at === undefined) return null;
				const ov = prog(f, at, 12);
				if (ov <= 0.01) return null;
				const my = S.y + i * miniRowH, fy = fullBox.y + 88 + i * fullRowH;
				const y = lerp(my, fy, smooth(k)), x = lerp(S.x, fullBox.x + 24, smooth(k));
				const g = glow(i);
				const w = lerp(S.w, fullBox.w - 48, smooth(k)), h = lerp(miniRowH - 10, fullRowH - 14, smooth(k));
				return (
					<g key={i} opacity={ov}>
						{g > 0.01 ? <rect x={x - 6} y={y - 4} width={w + 12} height={h + 8} rx={14} fill={HI} opacity={0.55 * g} /> : null}
						<rect x={x} y={y} width={w} height={h} rx={12} fill={CARD} stroke="rgba(60,45,20,0.18)" strokeWidth={2} opacity={1 - smooth(k) * 0.4} />
						<Icon kind={r.icon} x={x + lerp(30, 50, k)} y={y + h / 2} s={lerp(34, 50, k)} />
						{/* mini text */}
						<g opacity={1 - smooth(k)}>
							<T x={x + 60} y={y + 33} text={r.q} size={29} hand weight={700} />
							<T x={x + 60} y={y + 59} text={r.sub} size={18} color={GREY_INK} weight={600} o={none && none.row === i ? 1 - vis(f, none.at, undefined, 8) : 1} />
						</g>
						{/* full text */}
						<g opacity={smooth(k)}>
							<T x={x + 100} y={y + h / 2 + 15} text={i < 4 ? `${i + 1}  ${r.q}` : r.q} size={44} hand weight={700} />
							<T x={x + 100 + measure(i < 4 ? `${i + 1}  ${r.q}` : r.q, 44, true, 700) + 26} y={y + h / 2 + 11} text={r.full} size={30} color={INK_SOFT} weight={600} />
						</g>
						{none && none.row === i ? <GreyTag x={x + 56} y={y + 38} text="none here" at={none.at} size={18} /> : null}
					</g>
				);
			})}
		</g>
	);
};

/** "Pause here to answer." with the 10 s countdown ring (the owner's drill rule). */
export const DrillCountdown: React.FC<{hold: {startFrame: number; endFrame: number}; at: number; x: number; y: number; cx: number; cy: number; r?: number}> = ({hold, at, x, y, cx, cy, r = 58}) => (
	<>
		<HandLine x={x} y={y} text="Pause here to answer." at={at} size={50} color={AMBER_INK} />
		<Countdown start={hold.startFrame} end={hold.endFrame} x={cx} y={cy} r={r} />
	</>
);

/** Small red flag mark (used for "flagged by NESA feedback"; green ticks are kept for marks earned). */
export const Flag: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 1}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, 10));
	if (p <= 0.01) return null;
	return (
		<g transform={`translate(${x},${y}) scale(${s * (0.6 + 0.4 * p)})`} opacity={p}>
			<line x1={0} y1={18} x2={0} y2={-22} stroke={INK} strokeWidth={3} strokeLinecap="round" />
			<path d="M1,-22 L26,-14 L1,-6 Z" fill={RED} />
		</g>
	);
};
/** Small stopwatch doodle. */
export const Stopwatch: React.FC<{x: number; y: number; at: number; label: string; r?: number}> = ({x, y, at, label, r = 34}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, undefined, 12);
	if (o <= 0.01) return null;
	const a = -Math.PI / 2 + (f - at) * 0.08;
	return (
		<g opacity={o}>
			<circle cx={x} cy={y} r={r} fill={CARD} stroke={INK} strokeWidth={3.5} />
			<rect x={x - 7} y={y - r - 12} width={14} height={10} rx={3} fill={INK} />
			<line x1={x} y1={y} x2={x + Math.cos(a) * r * 0.75} y2={y + Math.sin(a) * r * 0.75} stroke={RED} strokeWidth={3.5} strokeLinecap="round" />
			<T x={x + r + 16} y={y + 12} text={label} size={36} hand weight={700} color={INK} />
		</g>
	);
};

/** Key notes board: heading, notes, copy prompt and one memory aid. */
export const KeyNotes: React.FC<{notes: string[]; aid: string; tag: string; size?: number; aidTop?: number}> = ({notes, aid, tag, size = 32, aidTop = 790}) => {
	for (const n of [...notes, aid, tag]) if (n.includes(EMDASH)) throw new Error('em dash in key notes');
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 84}}><HandText text="Key notes: what to write in your book" at={2} size={58} cps={40} /></div>
			<Enter at={110} style={{position: 'absolute', left: 1120, top: 100}}>
				<div style={{fontFamily: FONT_HAND, fontSize: 34, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
			</Enter>
			<div style={{position: 'absolute', left: 120, top: 180, width: 1690}}>
				{notes.map((n, i) => (
					<Enter key={i} at={30 + i * 12} style={{display: 'flex', gap: 20, marginBottom: 14}}>
						<div style={{flex: 'none', width: 14, height: 14, marginTop: size * 0.34, borderRadius: 999, background: AMBER}} />
						<div style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: 500, color: INK, lineHeight: 1.25}}>{n}</div>
					</Enter>
				))}
			</div>
			<Enter at={96} style={{position: 'absolute', left: 96, top: aidTop, width: 1730}}>
				<div style={{background: CARD, border: `4px solid ${TEAL}`, borderRadius: 22, padding: '8px 30px 12px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: TEAL, lineHeight: 1.08}}>{aid}</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 24, color: GREY_INK, marginTop: 6}}>{tag}</div>
				</div>
			</Enter>
		</>
	);
};

/** A wavy pen line standing for handwriting nobody needs to read (ghost answers, abstract facts). */
export const DrawSquiggle: React.FC<{x: number; y: number; w: number; at: number; seed?: number; color?: string; width?: number}> = ({x, y, w, at, seed = 1, color = GREY, width = 3}) => {
	let d = `M${x},${y}`;
	const n = Math.max(4, Math.round(w / 22));
	for (let i = 1; i <= n; i++) {
		const xx = x + (w * i) / n;
		const amp = 6 + ((seed * 7 + i * 13) % 5);
		d += ` Q${xx - w / n / 2},${y + (i % 2 ? -amp : amp)} ${xx},${y}`;
	}
	return <DrawPath d={d} at={at} dur={Math.min(30, 8 + w / 40)} color={color} width={width} />;
};
