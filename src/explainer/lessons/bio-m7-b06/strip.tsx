// The response strip: the immune-system model shared by b06, b07 and b08 (route change 6: the videos' visuals are the
// model). B06 fills four rungs top to bottom ("always there: barriers", "minutes: inflammation", "hours: phagocytes",
// "days: adaptive") with an "innate" bracket over the first three. B07 imports it, shrinks the first three rungs to
// grey thumbnails and expands the fourth rung into five B cell step chips (`steps`). B08 can add its T cell steps to
// the same rung (a second `steps` list, or `branch`), so by b09 students redraw one model.
//
// Backward compatibility: every prop is optional except `rungs`; new options must default to the b06 look. Rungs are
// laid out top to bottom from (x, y); a rung with `steps` grows to fit its chips. `stripRects` returns the rung boxes
// so a scene can attach words, ticks or arrows beside a rung without duplicating the layout.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, GREYT, GREY_INK, INK_SOFT, PlateB, Sx, TEAL, TEAL_SOFT, clamp01, fitW, prog, tw} from '../bio-m7-b05/parts';
import type {PB} from '../bio-m7-b05/parts';

export const AMBER_SOFT = '#fff1d6';
export type StripStep = {label: string; at: number; lit?: number; thumb?: PB; thumbAt?: number};
export type StripRung = {
	/** Rung label, written at `labelAt` (default `at`). */
	label?: string;
	/** Frame the empty rung draws (default: already there). */
	at?: number;
	labelAt?: number;
	/** 0..1: lit (pale fill, coloured outline and label). */
	lit?: number;
	color?: 'teal' | 'amber';
	/** Small plate thumbnails at the rung's left (scaled to fit, never stretched). */
	thumbs?: PB[];
	thumbAt?: number;
	/** 0..1..0 pulse on the thumbnails. `pulseIdx` limits it to one thumbnail. */
	pulse?: number;
	pulseIdx?: number;
	/** 0..1 greys the rung back (used when another rung is the focus). */
	dim?: number;
	/** Expanded rung (b07): step chips stacked inside, each lit on its cue. */
	steps?: StripStep[];
	/** Thin connectors and short arrows between chips (b07 scene 11). */
	stepArrows?: boolean;
	/**
	 * A second column of chips beside `steps` (b08: the T cell branch). When present, the two columns share the rung
	 * width, each under a small grey header (`stepsLabel`, default "B cells", and `branch.label`).
	 */
	branch?: {label: string; steps: StripStep[]; color?: 'teal' | 'amber'; headAt?: number};
	stepsLabel?: string;
};
export type StripBracket = {from: number; to: number; at: number; label: string; lit?: number; labelAt?: number; pulse?: number};
export type StripProps = {
	rungs: StripRung[];
	x?: number; y?: number; w?: number; rh?: number; gap?: number; stepH?: number; size?: number;
	o?: number;
	bracket?: StripBracket;
	/** Uniform scale about (x, y). */
	s?: number;
};
export const STRIP = {x: 1430, y: 210, w: 380, rh: 108, gap: 36, stepH: 62, size: 30};

export type Rect = {x: number; y: number; w: number; h: number};
const BR_HEAD = 34;
const rungHeight = (r: StripRung, rh: number, stepH: number) => (r.steps ? 58 + (r.branch ? BR_HEAD : 0) + Math.max(r.steps.length, r.branch?.steps.length ?? 0) * stepH + 10 : rh);
/** Screen boxes of each rung (before the optional scale `s`, which callers apply with `stripPt`). */
export const stripRects = (p: StripProps): Rect[] => {
	const {x = STRIP.x, y = STRIP.y, w = STRIP.w, rh = STRIP.rh, gap = STRIP.gap, stepH = STRIP.stepH} = p;
	let yy = y;
	return p.rungs.map(r => {
		const h = rungHeight(r, rh, stepH);
		const out = {x, y: yy, w, h};
		yy += h + gap;
		return out;
	});
};
/** A point in strip coordinates after the strip's scale. */
export const stripPt = (p: StripProps, pt: [number, number]): [number, number] => {
	const s = p.s ?? 1, x = p.x ?? STRIP.x, y = p.y ?? STRIP.y;
	return [x + (pt[0] - x) * s, y + (pt[1] - y) * s];
};
/** Box of step chip `k` inside rung `i` (`col` 1 is the branch column, when the rung has one). */
export const stepRect = (p: StripProps, i: number, k: number, col: 0 | 1 = 0): Rect => {
	const R = stripRects(p)[i];
	const stepH = p.stepH ?? STRIP.stepH;
	if (!p.rungs[i].branch) return {x: R.x + 16, y: R.y + 54 + k * stepH, w: R.w - 32, h: stepH - 12};
	const cw = (R.w - 48) / 2;
	return {x: R.x + 16 + col * (cw + 16), y: R.y + 54 + BR_HEAD + k * stepH, w: cw, h: stepH - 12};
};

const colOf = (c?: 'teal' | 'amber') => (c === 'amber' ? {ink: AMBER_INK, line: AMBER, soft: AMBER_SOFT} : {ink: TEAL, line: TEAL, soft: TEAL_SOFT});

/** One or two centred lines (wraps at a space when the label is wider than `maxW`). */
const Label: React.FC<{x: number; y: number; text: string; maxW: number; size: number; color: string; at: number; anchor?: 'middle' | 'start'}> = ({x, y, text, maxW, size, color, at, anchor = 'middle'}) => {
	const words = text.split(' ');
	const lines: string[] = [];
	let line = '';
	for (const w of words) {
		const t = line ? line + ' ' + w : w;
		if (tw(t, size, true) > maxW && line) { lines.push(line); line = w; } else line = t;
	}
	if (line) lines.push(line);
	const L = size * 1.12;
	return <g>{lines.map((t, i) => <Sx key={i} x={x} y={y + (i - (lines.length - 1) / 2) * L + size * 0.34} text={t} size={size} color={color} hand weight={700} anchor={anchor} at={at} />)}</g>;
};

export const ResponseStrip: React.FC<StripProps> = (props) => {
	const f = useCurrentFrame();
	const {rungs, o = 1, bracket, s = 1, size = STRIP.size} = props;
	const x = props.x ?? STRIP.x, y = props.y ?? STRIP.y;
	if (o <= 0.01) return null;
	const R = stripRects(props);
	const stepH = props.stepH ?? STRIP.stepH;
	return (
		<g opacity={o} transform={s !== 1 ? `translate(${x},${y}) scale(${s}) translate(${-x},${-y})` : undefined}>
			{R.slice(1).map((r, i) => {
				const p = Math.min(prog(f, rungs[i].at ?? -100, 12), prog(f, rungs[i + 1].at ?? -100, 12));
				return p > 0.01 ? <line key={'c' + i} x1={r.x + r.w / 2} x2={r.x + r.w / 2} y1={R[i].y + R[i].h + 4} y2={r.y - 4} stroke={GREYT} strokeWidth={4} opacity={p} /> : null;
			})}
			{rungs.map((r, i) => {
				const p = prog(f, r.at ?? -100, 12);
				if (p <= 0.01) return null;
				const B = R[i];
				const c = colOf(r.color);
				const lit = clamp01(r.lit ?? 0) * (1 - clamp01(r.dim ?? 0));
				const on = lit > 0.5;
				const thumbs = r.thumbs ?? [];
				const tp = r.thumbAt === undefined ? 1 : prog(f, r.thumbAt, 14);
				const th = Math.min(B.h, rh0(props)) - 26;
				let tx = B.x + 14;
				const maxTW = thumbs.length > 1 ? th * 0.9 : th * 1.3;
				const thumbEls = thumbs.map((t, k) => {
					const w = fitW(t, maxTW, th);
					const cx = tx + w / 2;
					tx += w + 8;
					const pu = (r.pulseIdx === undefined || r.pulseIdx === k) ? clamp01(r.pulse ?? 0) : 0;
					const cy = B.y + (r.steps ? 30 : B.h / 2);
					return (
						<g key={k} opacity={tp}>
							{pu > 0.01 ? <circle cx={cx} cy={cy} r={th * 0.62} fill={c.line} opacity={0.25 * pu} /> : null}
							<g transform={pu > 0.01 ? `translate(${cx},${cy}) scale(${1 + 0.18 * pu}) translate(${-cx},${-cy})` : undefined}>
								<PlateB p={t} cx={cx} cy={cy} w={w} id={`strip-${i}-${k}-${t.box.join('-')}`} filter={on || pu > 0.3 ? undefined : 'grayscale(0.7)'} />
							</g>
						</g>
					);
				});
				const lx0 = thumbs.length ? tx + 6 : B.x + 18;
				const labelW = B.x + B.w - 18 - lx0;
				const labelY = r.steps ? B.y + 32 : B.y + B.h / 2;
				return (
					<g key={i} opacity={p}>
						<rect x={B.x} y={B.y} width={B.w} height={B.h} rx={18} fill={on ? c.soft : '#f3f2ee'} stroke={on ? c.line : GREYT} strokeWidth={on ? 4 : 2.5} />
						{thumbEls}
						{r.label ? (
							thumbs.length
								? <Label x={lx0} y={labelY} text={r.label} maxW={labelW} size={size} color={on ? c.ink : GREY_INK} at={r.labelAt ?? r.at ?? -100} anchor="start" />
								: <Label x={B.x + B.w / 2} y={labelY} text={r.label} maxW={B.w - 36} size={size} color={on ? c.ink : GREY_INK} at={r.labelAt ?? r.at ?? -100} />
						) : null}
						{r.branch ? [r.stepsLabel ?? 'B cells', r.branch.label].map((h, col) => {
								const sr = stepRect(props, i, 0, col as 0 | 1);
								return <Sx key={'h' + col} x={sr.x + sr.w / 2} y={sr.y - 12} text={h} size={size * 0.78} color={GREY_INK} hand weight={700} anchor="middle" at={col ? r.branch!.headAt ?? -100 : -100} />;
							}) : null}
							{[...(r.steps ?? []).map((st, k) => ({st, k, col: 0 as 0 | 1, c})), ...(r.branch?.steps ?? []).map((st, k) => ({st, k, col: 1 as 0 | 1, c: r.branch!.color ? colOf(r.branch!.color) : c}))].map(({st, k, col, c}) => {
								const sp = prog(f, st.at, 12);
								const sr = stepRect(props, i, k, col);
							if (sp <= 0.01) return <rect key={'s' + col + k} x={sr.x} y={sr.y} width={sr.w} height={sr.h} rx={sr.h / 2} fill="none" stroke={GREYT} strokeWidth={2} strokeDasharray="8 8" opacity={0.6} />;
							const sl = clamp01(st.lit ?? 0);
							const son = sl > 0.5;
							const tpp = st.thumb ? (st.thumbAt === undefined ? 1 : prog(f, st.thumbAt, 12)) : 0;
							const tw0 = st.thumb ? fitW(st.thumb, sr.h * 1.4, sr.h - 8) : 0;
							const fs = r.branch ? size * 0.8 : size * 0.9;
								return (
									<g key={'s' + col + k} opacity={sp}>
									{k > 0 && r.stepArrows ? <path d={`M${sr.x + sr.w / 2},${sr.y - 12} L${sr.x + sr.w / 2},${sr.y - 2} M${sr.x + sr.w / 2 - 7},${sr.y - 8} L${sr.x + sr.w / 2},${sr.y - 1} L${sr.x + sr.w / 2 + 7},${sr.y - 8}`} fill="none" stroke={son ? c.line : GREYT} strokeWidth={3} strokeLinecap="round" /> : null}
									<rect x={sr.x} y={sr.y} width={sr.w} height={sr.h} rx={sr.h / 2} fill={son ? '#fffaf0' : '#f7f6f2'} stroke={son ? c.line : GREYT} strokeWidth={son ? 3.5 : 2} />
									{son ? <rect x={sr.x} y={sr.y} width={sr.w} height={sr.h} rx={sr.h / 2} fill={c.line} opacity={0.1 * sl} /> : null}
									<Sx x={sr.x + 22} y={sr.y + sr.h / 2 + size * 0.32} text={`${k + 1}  ${st.label}`} size={fs} color={son ? c.ink : GREY_INK} hand weight={700} at={-100} />
									{st.thumb && tpp > 0.01 ? <PlateB p={st.thumb} cx={sr.x + sr.w - 16 - tw0 / 2} cy={sr.y + sr.h / 2} w={tw0} o={tpp} id={`strip-st-${i}-${col}-${k}`} filter={son ? undefined : 'grayscale(0.7)'} /> : null}
								</g>
							);
						})}
					</g>
				);
			})}
			{bracket ? <Bracket b={bracket} R={R} size={size} /> : null}
			{void stepH}
		</g>
	);
};
const rh0 = (p: StripProps) => p.rh ?? STRIP.rh;

const Bracket: React.FC<{b: StripBracket; R: Rect[]; size: number}> = ({b, R, size}) => {
	const f = useCurrentFrame();
	if (f < b.at) return null;
	const top = R[b.from], bot = R[b.to];
	const x0 = top.x + top.w + 12, x1 = x0 + 18;
	const y0 = top.y + 6, y1 = bot.y + bot.h - 6;
	const lit = clamp01(b.lit ?? 1);
	const col = lit > 0.5 ? TEAL : GREYT;
	const pu = clamp01(b.pulse ?? 0);
	const ly = (y0 + y1) / 2;
	return (
		<g>
			{pu > 0.01 ? <rect x={x0 - 6} y={y0 - 6} width={60} height={y1 - y0 + 12} rx={20} fill={TEAL} opacity={0.15 * pu} /> : null}
			<DrawPath d={`M${x0},${y0} L${x1},${y0} L${x1},${y1} L${x0},${y1}`} at={b.at} dur={18} color={col} width={5 + 2 * pu} />
			<g transform={`translate(${x1 + 26},${ly}) rotate(90)`}>
				<Sx x={0} y={0} text={b.label} size={size} color={lit > 0.5 ? TEAL : GREY_INK} hand weight={700} anchor="middle" at={b.labelAt ?? b.at + 8} />
			</g>
		</g>
	);
};
void INK_SOFT;
