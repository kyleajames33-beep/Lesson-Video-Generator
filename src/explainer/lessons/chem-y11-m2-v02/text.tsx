// Text parts for Y11 Chem M2 V02 onward: the same look as the M2 V06 parts (Sx, Rich, Write, Chip, Framed, Readout and
// the width helpers), with one addition to the chemistry markup: a single letter after "_" (N_A, A_r, M_r) and "_{..}"
// are subscripts, as well as "_2" digits. Superscripts stay "^{...}".
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {StrikeLine, TickMark, smooth, vis} from '../chem-y11-m2-v06/parts';
import {W_CHARS, W_D600, W_D700, W_D800, W_H700} from '../chem-y11-m2-v06/widths';

export type Tok = {s: string; k: 0 | 1 | 2};
export const toks2 = (text: string): Tok[] => {
	const out: Tok[] = [];
	const re = /(_\d+|_\{[^}]*\}|_[A-Za-z](?![A-Za-z])|\^\{[^}]*\})/g;
	let last = 0;
	let m: RegExpExecArray | null;
	while ((m = re.exec(text))) {
		if (m.index > last) out.push({s: text.slice(last, m.index), k: 0});
		const t = m[0];
		if (t[0] === '^') out.push({s: t.slice(2, -1), k: 2});
		else if (t[1] === '{') out.push({s: t.slice(2, -1), k: 1});
		else out.push({s: t.slice(1), k: 1});
		last = m.index + t.length;
	}
	if (last < text.length) out.push({s: text.slice(last), k: 0});
	return out;
};
const W_IDX = new Map([...W_CHARS].map((c, i) => [c, i]));
const cw = (ch: string, tab: number[]) => { const i = W_IDX.get(ch); return (i === undefined ? 560 : tab[i]) / 1000; };
export const tw = (text: string, size: number, hand = false, weight = 800) => {
	const tab = hand ? W_H700 : weight <= 650 ? W_D600 : weight <= 750 ? W_D700 : W_D800;
	return toks2(text).reduce((w, t) => w + [...t.s].reduce((a, ch) => a + cw(ch, tab), 0) * size * (t.k ? 0.64 : 1), 0);
};
const spans = (text: string, size: number) => {
	let shift = 0;
	return toks2(text).map((t, i) => {
		const want = t.k === 1 ? size * 0.2 : t.k === 2 ? -size * 0.42 : 0;
		const dy = want - shift;
		shift = want;
		return <tspan key={i} dy={dy || undefined} style={t.k ? {fontSize: size * 0.64} : undefined}>{t.s}</tspan>;
	});
};
export const Sx: React.FC<{x: number; y: number; text: string; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; at?: number; out?: number; hand?: boolean; weight?: number; opacity?: number}> = ({x, y, text, size = 44, color = INK, anchor = 'start', at = 0, out, hand = false, weight = 700, opacity = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10)) * opacity;
	if (o <= 0.001) return null;
	return <text x={x} y={y} textAnchor={anchor} fill={color} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size, whiteSpace: 'pre'}}>{spans(text, size)}</text>;
};
export type Seg = {t: string; c?: string; w?: number; at?: number};
export const Rich: React.FC<{x: number; y: number; segs: Seg[]; size?: number; anchor?: 'start' | 'middle' | 'end'; at?: number; out?: number; hand?: boolean; weight?: number; opacity?: number}> = ({x, y, segs, size = 44, anchor = 'start', at = -1000, out, hand = false, weight = 800, opacity = 1}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out) * opacity;
	if (o <= 0.005) return null;
	let shift = 0;
	const parts: React.ReactNode[] = [];
	segs.forEach((sg, i) => toks2(sg.t).forEach((t, j) => {
		const want = t.k === 1 ? size * 0.2 : t.k === 2 ? -size * 0.42 : 0;
		const dy = want - shift;
		shift = want;
		const so = sg.at === undefined ? 1 : prog(f, sg.at, 10);
		parts.push(<tspan key={i + '-' + j} dy={dy || undefined} fill={sg.c ?? INK} fillOpacity={so} style={{fontSize: t.k ? size * 0.64 : size, fontWeight: sg.w ?? weight}}>{t.s}</tspan>);
	}));
	return <text x={x} y={y} textAnchor={anchor} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size, whiteSpace: 'pre'}}>{parts}</text>;
};
export const richW = (segs: Seg[], size: number, hand = false, weight = 800) => segs.reduce((a, s) => a + tw(s.t, size, hand, s.w ?? weight), 0);
export const Write: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; cps?: number; weight?: number}> = ({x, y, text, at, out, size = 40, color = INK, anchor = 'start', cps = 30, weight = 700}) => {
	const f = useCurrentFrame();
	const n = Math.max(8, Math.round((text.length / cps) * 30));
	const p = prog(f, at, n);
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.005) return null;
	return (
		<g opacity={o} style={p >= 1 ? undefined : {clipPath: `inset(-40% ${100 - p * 100}% -40% -5%)`}}>
			<Sx x={x} y={y} text={text} size={size} color={color} anchor={anchor} hand weight={weight} at={-1000} />
		</g>
	);
};
export const chipW = (segs: Seg[], size: number, hand: boolean) => richW(segs, size, hand, 800) + size * 1.1;
export const Chip: React.FC<{x: number; y: number; segs: Seg[]; at: number; out?: number; size?: number; color?: string; fill?: string; anchor?: 'start' | 'middle' | 'end'; hand?: boolean; strike?: number; dashed?: boolean; o?: number; w?: number}> = ({x, y, segs, at, out, size = 40, color = INK, fill = '#fffdf8', anchor = 'start', hand = false, strike, dashed, o = 1, w}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.005) return null;
	const W = w ?? chipW(segs, size, hand);
	const H = size * 1.55;
	const x0 = anchor === 'middle' ? x - W / 2 : anchor === 'end' ? x - W : x;
	const pop = 0.92 + 0.08 * smooth(prog(f, at, 12));
	return (
		<g opacity={v} transform={`translate(${x0 + W / 2},${y + H / 2}) scale(${pop}) translate(${-(x0 + W / 2)},${-(y + H / 2)})`}>
			<rect x={x0} y={y} width={W} height={H} rx={H / 2} fill={fill} stroke={color} strokeWidth={4} strokeDasharray={dashed ? '12 8' : undefined} />
			<Rich x={x0 + W / 2} y={y + H / 2 + size * 0.36} segs={segs.map(s => ({...s, c: s.c ?? color}))} size={size} anchor="middle" hand={hand} />
			{strike !== undefined ? <StrikeLine x1={x0 + 14} y1={y + H / 2 + 4} x2={x0 + W - 14} y2={y + H / 2 - 4} at={strike} width={7} /> : null}
		</g>
	);
};
export const Framed: React.FC<{x: number; y: number; segs: Seg[]; at: number; out?: number; size?: number; anchor?: 'start' | 'middle'; tick?: boolean; o?: number; stroke?: string}> = ({x, y, segs, at, out, size = 56, anchor = 'start', tick = true, o = 1, stroke = INK}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.005) return null;
	const W = richW(segs, size) + size * 0.9;
	const x0 = anchor === 'middle' ? x - W / 2 : x;
	const s = 0.9 + 0.1 * smooth(prog(f, at, 14));
	const cy = y - size * 0.33;
	return (
		<g opacity={v} transform={`translate(${x0 + W / 2},${cy}) scale(${s}) translate(${-(x0 + W / 2)},${-cy})`}>
			<rect x={x0} y={y - size * 1.05} width={W} height={size * 1.45} rx={12} fill="#fffdf8" stroke={stroke} strokeWidth={5} />
			<Rich x={x0 + size * 0.45} y={y} segs={segs} size={size} weight={800} />
			{tick ? <TickMark x={x0 + W + size * 0.55} y={cy} at={at + 10} s={size / 44} /> : null}
		</g>
	);
};
export const Readout: React.FC<{x: number; y: number; w: number; text: string; color?: string; frame?: string; at?: number; out?: number; size?: number; label?: string; fill?: string; anchor?: 'start' | 'middle'; o?: number}> = ({x, y, w, text, color = INK, frame, at = -1000, out, size = 52, label, fill = '#fffdf8', anchor = 'start', o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.005) return null;
	const H = size * 1.5;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={H} rx={14} fill={fill} stroke={frame ?? color} strokeWidth={4} />
			<Sx x={anchor === 'middle' ? x + w / 2 : x + 22} y={y + H / 2 + size * 0.36} text={text} size={size} color={color} anchor={anchor} weight={800} at={-1000} />
			{label ? <Sx x={x + 4} y={y - 12} text={label} size={28} color={INK_SOFT} weight={700} at={-1000} /> : null}
		</g>
	);
};
/** Navy givens strip under the shrunken question card (as M1 V01's, with this markup). */
export const Givens: React.FC<{segs: Seg[]; y?: number}> = ({segs, y = 186}) => (
	<g>
		<rect x={96} y={y} width={1728} height={74} rx={14} fill="#eef2fa" stroke="#24407a" strokeWidth={3} />
		<Rich x={124} y={y + 50} segs={segs.map(s => ({...s, c: s.c ?? '#24407a'}))} size={36} weight={700} />
	</g>
);
/** Task strip (as M1 V06's, with this markup). */
export const TaskStrip: React.FC<{text: string; y?: number; at?: number}> = ({text, y = 184, at = -1000}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={96} y={y} width={1728} height={64} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			<Rich x={122} y={y + 44} segs={[{t: 'Task: ', c: '#a35c00'}, {t: text}]} size={36} weight={700} />
		</g>
	);
};
