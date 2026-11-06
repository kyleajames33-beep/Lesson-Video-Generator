// B8-11 coded parts (lesson-local). Abstract diagrams only; organs and objects stay painted plates. Nothing here draws
// people: doctors and patients are coded dots, and researchers are named in narration only.
// - StudyTimeline: a dated axis (1946 to 2002) owning the bottom of the frame in scenes 2 to 8. Row 1: the 1950
//   case-control span with its arrow pointing back to "past smoking". Row 2: the 1951 cohort span with its arrow running
//   forward (the end year is a frame function, so it can grow to 2001). A 1954 marker can light.
// - MatchedPairs: rows of paired dots (amber case, teal control); outlines from the first frame, filling on cue.
// - DotField: a grid of small dots (doctors) tinted by smoking answer; RecordRows: ledger lines that fill with marks.
// - FrameStrip: the four-step frame (design, strength, limitation, judgement) as a stacked card; heads show from the first
//   frame, each slot writes on its cue. ChainRow: the four-link benefit chain with a content slot per link.
// - Bars54: the 1954 bar chart (all bar outlines from the first frame); Survival: shape-only survival lines; Triangle: the
//   confounder diagram; TallyCard: a faded tally on a blank card (recall).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, CARD, DrawPath, EDGE, GREYT, GREY_FILL, INK, INK_SOFT, RED, Sx, TEAL, clamp01, lerp, mw, prog, pulse, smooth, vis, wrapM} from '../bio-m8-b07/parts';
import {T54} from './common';

export * from '../bio-m8-b07/parts';
export type P2 = [number, number];
export const CASE = '#d08a2c';
export const CTRL = TEAL;
export const SMOKE1 = '#c9c2b4', SMOKE2 = '#9a9284', SMOKE3 = '#6b6358';

// ---------- arrow helper ----------
/** A straight arrow that draws from a to b with a head (no bow). */
export const Arr: React.FC<{a: P2; b: P2; at?: number; out?: number; color?: string; width?: number; head?: number; dash?: string; o?: number; dur?: number}> = ({a, b, at = -1000, out, color = INK_SOFT, width = 5, head = 16, dash, o = 1, dur = 14}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
	const hp = at < -100 ? 1 : prog(f, at + dur - 4, 6);
	return (
		<g opacity={v}>
			{at < -100 ? <path d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} stroke={color} strokeWidth={width} strokeDasharray={dash} strokeLinecap="round" fill="none" /> : <DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={dur} color={color} width={width} dash={dash} />}
			<path opacity={hp} d={`M${b[0] - head * Math.cos(ang - 0.5)},${b[1] - head * Math.sin(ang - 0.5)} L${b[0]},${b[1]} L${b[0] - head * Math.cos(ang + 0.5)},${b[1] - head * Math.sin(ang + 0.5)}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
		</g>
	);
};

// ---------- study timeline ----------
export const TLB = {x0: 400, x1: 1790, y: 1000, yr0: 1946, yr1: 2002, top: 866};
export const tlx2 = (yr: number) => TLB.x0 + ((yr - TLB.yr0) / (TLB.yr1 - TLB.yr0)) * (TLB.x1 - TLB.x0);
export const ROW1 = 906, ROW2 = 958;
export type TLState = {ccAt?: number; ccDim?: number; ccHi?: number; cohAt?: number; cohEnd?: (f: number) => number; cohDim?: number; cohHi?: number; y54?: number; o?: number; dy?: number};
export const StudyTimeline: React.FC<TLState> = ({ccAt, ccDim, ccHi, cohAt, cohEnd, cohDim, cohHi, y54, o = 1, dy = 0}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const cc = ccAt === undefined ? 0 : prog(f, ccAt, 12);
	const ccd = 1 - 0.5 * (ccDim === undefined ? 0 : prog(f, ccDim, 14)) * (1 - (ccHi === undefined ? 0 : prog(f, ccHi, 12)));
	const co = cohAt === undefined ? 0 : prog(f, cohAt, 12);
	const cod = 1 - 0.5 * (cohDim === undefined ? 0 : prog(f, cohDim, 14)) * (1 - (cohHi === undefined ? 0 : prog(f, cohHi, 12)));
	const hiC = cohHi === undefined ? 0 : prog(f, cohHi, 12);
	const ccDraw = ccAt === undefined ? 0 : smooth(prog(f, ccAt, 24));
	const endYr = cohEnd ? cohEnd(f) : 1960;
	const coDraw = cohAt === undefined ? 0 : smooth(prog(f, cohAt, 26));
	const xEnd = lerp(tlx2(1951), tlx2(endYr), coDraw);
	const m54 = y54 === undefined ? 0 : prog(f, y54, 12);
	return (
		<g opacity={o} transform={dy ? `translate(0,${dy})` : undefined}>
			<rect x={96} y={TLB.top} width={1728} height={180} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<Sx x={116} y={1034} text="study timeline" size={28} color={GREYT} hand weight={700} at={-1000} />
			<line x1={TLB.x0} x2={TLB.x1} y1={TLB.y} y2={TLB.y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			{[1950, 1960, 1970, 1980, 1990, 2000].map(yr => <g key={yr}><line x1={tlx2(yr)} x2={tlx2(yr)} y1={TLB.y - 9} y2={TLB.y + 9} stroke={INK} strokeWidth={3} /><Sx x={tlx2(yr)} y={1034} text={`${yr}`} size={28} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
			{m54 > 0.01 ? <g opacity={m54}>
				<path d={`M${tlx2(1954)},${TLB.y - 14} l12,14 l-12,14 l-12,-14 Z`} fill={AMBER} stroke={AMBER_INK} strokeWidth={2.5} />
			</g> : null}
			{cc > 0.01 ? <g opacity={cc * ccd}>
				<rect x={tlx2(1948)} y={ROW1 - 11} width={tlx2(1950) - tlx2(1948)} height={22} rx={8} fill={CASE} />
				<g opacity={ccDraw}>
					<line x1={tlx2(1948)} x2={lerp(tlx2(1948), 262, ccDraw)} y1={ROW1} y2={ROW1} stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
					<path d={`M${lerp(tlx2(1948), 262, ccDraw) + 16},${ROW1 - 13} L${lerp(tlx2(1948), 262, ccDraw)},${ROW1} L${lerp(tlx2(1948), 262, ccDraw) + 16},${ROW1 + 13}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
				</g>
				<Sx x={112} y={ROW1 + 10} text="past smoking" size={30} color={AMBER_INK} hand weight={700} at={(ccAt ?? 0) + 14} />
				<Sx x={tlx2(1950) + 20} y={ROW1 + 10} text="case-control: starts with the disease, looks back" size={30} color={INK} hand weight={700} at={(ccAt ?? 0) + 8} />
			</g> : null}
			{co > 0.01 ? <g opacity={co * cod}>
				{hiC > 0.01 ? <rect x={tlx2(1951) - 8} y={ROW2 - 18} width={xEnd - tlx2(1951) + 30} height={36} rx={18} fill={AMBER} opacity={0.3 * hiC} /> : null}
				<rect x={tlx2(1951)} y={ROW2 - 11} width={Math.max(24, tlx2(1953) - tlx2(1951))} height={22} rx={8} fill={TEAL} />
				<line x1={tlx2(1951)} x2={xEnd} y1={ROW2} y2={ROW2} stroke={TEAL} strokeWidth={5} strokeLinecap="round" />
				<path d={`M${xEnd - 16},${ROW2 - 13} L${xEnd},${ROW2} L${xEnd - 16},${ROW2 + 13}`} fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" />
				<Sx x={112} y={ROW2 + 10} text="cohort goes forward" size={30} color={TEAL} hand weight={700} at={(cohAt ?? 0) + 8} />
				<Sx x={xEnd + 14} y={ROW2 + 10} text={endYr > 1990 ? '' : 'deaths recorded, year after year'} size={30} color={INK} hand weight={700} at={(cohAt ?? 0) + 14} />
				{endYr > 1990 ? <Sx x={xEnd} y={ROW2 - 22} text="deaths recorded to 2001" size={30} color={INK} hand weight={700} anchor="end" at={-1000} /> : null}
			</g> : null}
		</g>
	);
};

// ---------- matched pairs ----------
export const pairPts = (x: number, y: number, rows: number, cols: number, dx = 92, dy = 52): P2[] => Array.from({length: rows * cols}, (_, i) => [x + (i % cols) * dx, y + Math.floor(i / cols) * dy]);
export const MatchedPairs: React.FC<{pts: P2[]; caseAt: number; ctrlAt?: number; pulseAt?: number; r?: number; gap?: number; o?: number; step?: number; heavy?: number}> = ({pts, caseAt, ctrlAt, pulseAt, r = 15, gap = 36, o = 1, step = 2, heavy}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const pu = pulseAt === undefined ? 0 : pulse(f, pulseAt, 40);
	const hv = heavy === undefined ? 0 : prog(f, heavy, 14);
	return (
		<g opacity={o}>
			{pts.map(([x, y], i) => {
				const c = prog(f, caseAt + i * step, 10);
				const t = ctrlAt === undefined ? 0 : smooth(prog(f, ctrlAt + i * step, 14));
				const hvy = hv > 0.01 && i % 3 !== 2;
				return (
					<g key={i}>
						{pu > 0.01 ? <rect x={x - r - 8} y={y - r - 8} width={gap + 2 * r + 16} height={2 * r + 16} rx={r + 8} fill="none" stroke={BLUE} strokeWidth={3} opacity={pu} /> : null}
						<circle cx={x} cy={y} r={r} fill={c > 0.5 ? CASE : CARD} stroke={AMBER_INK} strokeWidth={2.5} opacity={0.45 + 0.55 * c} />
						{hvy ? <circle cx={x} cy={y} r={r * 0.45} fill={SMOKE3} opacity={hv} /> : null}
						{t > 0.01 ? <circle cx={x + gap * t + 120 * (1 - t)} cy={y} r={r} fill={CTRL} stroke="#1f5c61" strokeWidth={2.5} opacity={t} /> : <circle cx={x + gap} cy={y} r={r} fill="none" stroke="#9fc4c7" strokeWidth={2} strokeDasharray="4 4" />}
						{hv > 0.01 && i % 3 === 0 ? <circle cx={x + gap} cy={y} r={r * 0.45} fill={SMOKE3} opacity={hv} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- dot field ----------
/** A cols x rows grid of small dots. `tint(i)` returns 0 non-smoker (grey), 1 light, 2 medium, 3 heavy smoker. */
export const fieldTint = (i: number) => { const h = (i * 37 + 11) % 100; return h < 16 ? 0 : h < 46 ? 1 : h < 76 ? 2 : 3; };
export const TINT = ['#e4e0d8', '#d9c9a6', '#b89a62', '#7d6640'];
export const DotField: React.FC<{x: number; y: number; cols: number; rows: number; d?: number; r?: number; at: number; o?: number; tintAt?: number; tinted?: boolean}> = ({x, y, cols, rows, d = 20, r = 6.5, at, o = 1, tintAt, tinted = true}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const n = cols * rows;
	const tv = tintAt === undefined ? 1 : prog(f, tintAt, 14);
	const out: React.ReactNode[] = [];
	for (let i = 0; i < n; i++) {
		const cx = x + (i % cols) * d, cy = y + Math.floor(i / cols) * d;
		const k = at < -100 ? 1 : prog(f, at + Math.floor(((i % cols) + Math.floor(i / cols)) * 0.9), 6);
		if (k <= 0.01) { out.push(<circle key={i} cx={cx} cy={cy} r={r} fill={CARD} stroke="#9a9284" strokeWidth={2} />); continue; }
		const t = tinted ? fieldTint(i) : 0;
		out.push(<circle key={i} cx={cx} cy={cy} r={r} fill={tv > 0.5 ? TINT[t] : '#e4e0d8'} stroke={t === 0 || tv <= 0.5 ? '#a8a092' : '#6b5a3c'} strokeWidth={1.4} opacity={k} />);
	}
	return <g opacity={o}>{out}</g>;
};
export const TintKey: React.FC<{x: number; y: number; size?: number}> = ({x, y, size = 28}) => (
	<g>
		{['non-smoker', 'light', 'medium', 'heavy'].map((t, i) => {
			const xx = x + [0, 190, 300, 450][i];
			return <g key={t}><circle cx={xx + 10} cy={y - size * 0.32} r={9} fill={TINT[i]} stroke="#6b5a3c" strokeWidth={1.5} /><Sx x={xx + 26} y={y} text={t} size={size} color={INK} hand weight={700} at={-1000} /></g>;
		})}
	</g>
);

// ---------- record rows ----------
/** A ruled card whose lines fill with short coded marks (one death recorded per mark). */
export const RecordRows: React.FC<{x: number; y: number; w: number; rows?: number; at: number; every?: number; o?: number}> = ({x, y, w, rows = 6, at, every = 7, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const rh = 34;
	const per = 7;
	const n = f < at ? 0 : Math.min(rows * per, Math.floor((f - at) / every) + 1);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={rows * rh + 24} rx={10} fill="#fbf6ea" stroke={EDGE} strokeWidth={2.5} />
			{Array.from({length: rows}, (_, r) => <line key={'l' + r} x1={x + 14} x2={x + w - 14} y1={y + 12 + (r + 1) * rh} y2={y + 12 + (r + 1) * rh} stroke="#b9c9d6" strokeWidth={2} />)}
			<line x1={x + w * 0.62} x2={x + w * 0.62} y1={y + 10} y2={y + rows * rh + 14} stroke="#d9a7a0" strokeWidth={2} />
			{Array.from({length: n}, (_, i) => {
				const r = Math.floor(i / per), c = i % per;
				const yy = y + 12 + (r + 1) * rh - 9;
				const xx = x + 22 + c * ((w * 0.62 - 40) / per);
				return <g key={i}><path d={`M${xx},${yy} q8,-12 16,-2 t16,-4`} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeLinecap="round" />{c === per - 1 ? <path d={`M${x + w * 0.62 + 14},${yy} l${w * 0.2},-3`} stroke={INK_SOFT} strokeWidth={2.5} strokeLinecap="round" /> : null}</g>;
			})}
		</g>
	);
};

// ---------- the four-step frame ----------
export const FRAME_HEADS = ['design', 'strength', 'limitation', 'judgement'];
export type FSlot = {t: string; at: number; out?: number};
/** A stacked four-row card. Heads show from the first frame (grey), light on `lit[i]`; slot text writes on its cue. */
export const FrameStrip: React.FC<{x: number; y: number; w: number; rowH?: number; heads?: string[]; lit?: (number | undefined)[]; slots: (FSlot | undefined)[]; size?: number; headW?: number; title?: string; o?: number; hot?: number; titleSize?: number; gap?: number}> = ({x, y, w, rowH = 150, heads = FRAME_HEADS, lit = [], slots, size = 40, headW = 230, title, o = 1, hot, titleSize = 34, gap = 14}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const top = title ? y + 52 : y;
	const live = slots.map(s => (s ? f >= s.at && (s.out === undefined || f < s.out) : false));
	const newest = live.lastIndexOf(true);
	return (
		<g opacity={o}>
			{title ? <Sx x={x} y={y + 34} text={title} size={titleSize} color={BLUE} hand weight={700} at={-1000} /> : null}
			{heads.map((h, i) => {
				const yy = top + i * (rowH + gap);
				const L = lit[i] === undefined ? 0 : prog(f, lit[i] as number, 12);
				const s = slots[i];
				const sv = s ? vis(f, s.at, s.out, 12) : 0;
				const on = Math.max(L, sv);
				const isNew = i === newest && (hot === undefined || f >= hot);
				const lines = s ? wrapM(s.t, size, w - headW - 40, true, 700).slice(0, 3) : [];
				const LH = Math.round(size * 1.1);
				const y0 = yy + rowH / 2 - ((lines.length - 1) * LH) / 2 + size * 0.34;
				return (
					<g key={i}>
						<rect x={x} y={yy} width={w} height={rowH} rx={16} fill={isNew ? '#fffaf0' : CARD} stroke={on > 0.5 ? BLUE : EDGE} strokeWidth={on > 0.5 ? 4 : 3} strokeDasharray={on > 0.5 ? undefined : '10 8'} />
						{isNew ? <rect x={x + 6} y={yy + 10} width={7} height={rowH - 20} rx={3} fill={AMBER} /> : null}
						<Sx x={x + 26} y={yy + rowH / 2 + 12} text={`${i + 1}. ${h}`} size={36} color={on > 0.5 ? BLUE : GREYT} hand weight={700} at={-1000} />
						<line x1={x + headW} x2={x + headW} y1={yy + 16} y2={yy + rowH - 16} stroke={EDGE} strokeWidth={2} />
						{sv > 0.01 ? <g opacity={sv}>{lines.map((ln, k) => <Sx key={k} x={x + headW + 22} y={y0 + k * LH} text={ln} size={size} color={INK} hand weight={700} at={-1000} />)}</g> : <Sx x={x + headW + 22} y={yy + rowH / 2 + 12} text="?" size={36} color={GREYT} weight={800} at={-1000} />}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the benefit chain ----------
export const CHAIN_HEADS = ['finding: a changeable risk factor', 'decision', 'action reaches people', 'outcome checked'];
export type ChainLink = {head: string; lit?: number; body?: (x: number, y: number, w: number, h: number) => React.ReactNode};
/** Four linked boxes in a row; `gap1` widens the first gap (the delay). Heads show from the first frame. */
export const ChainRow: React.FC<{x: number; y: number; ws: number[]; h: number; links: ChainLink[]; gap?: number; gap1?: number; headSize?: number; o?: number}> = ({x, y, ws, h, links, gap = 48, gap1, headSize = 32, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	let bx = x;
	const out: React.ReactNode[] = [];
	links.forEach((l, i) => {
		const L = l.lit === undefined ? 0 : prog(f, l.lit, 12);
		const w = ws[i];
		const lines = wrapM(l.head, headSize, w - 30, true, 700);
		out.push(
			<g key={'b' + i}>
				<rect x={bx} y={y} width={w} height={h} rx={18} fill={CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 4 : 3} strokeDasharray={L > 0.5 ? undefined : '10 8'} />
				{lines.map((ln, k) => <Sx key={k} x={bx + 16} y={y + 38 + k * headSize * 1.08} text={ln} size={headSize} color={L > 0.5 ? BLUE : GREYT} hand weight={700} at={-1000} />)}
				{l.body ? l.body(bx, y + 30 + lines.length * headSize * 1.08, w, h - 36 - lines.length * headSize * 1.08) : null}
			</g>,
		);
		const g = i === 0 && gap1 !== undefined ? gap1 : gap;
		if (i < links.length - 1) {
			const ax = bx + w + 6, ay = y + h / 2;
			out.push(<path key={'a' + i} d={`M${ax},${ay} L${ax + g - 14},${ay} M${ax + g - 28},${ay - 12} L${ax + g - 14},${ay} L${ax + g - 28},${ay + 12}`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />);
		}
		bx += w + g;
	});
	return <g opacity={o}>{out}</g>;
};
export const chainX = (x: number, ws: number[], i: number, gap = 48, gap1?: number) => { let bx = x; for (let k = 0; k < i; k++) bx += ws[k] + (k === 0 && gap1 !== undefined ? gap1 : gap); return bx; };

// ---------- the 1954 bar chart ----------
export type BG = {x: number; y: number; w: number; h: number};
const Y54 = (g: BG, v: number) => g.y + g.h - (v / 1.2) * g.h;
export const bar54X = (g: BG, i: number) => { const slot = g.w / 4; return g.x + slot * i + slot / 2; };
export const bar54Top = (g: BG, i: number) => Y54(g, T54[i].v);
/** Bars drawn as dashed outlines from the first frame; each fills on `fill[i]`; `pulses` brighten a bar. */
export const Bars54: React.FC<{g: BG; fill: number[]; pulses?: [number, number][]; size?: number; vsize?: number; o?: number; axisLabel?: boolean; xTitle?: boolean; dim?: number}> = ({g, fill, pulses = [], size = 28, vsize = 32, o = 1, axisLabel = true, xTitle = true, dim}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const slot = g.w / 4, bw = slot * 0.56;
	const dm = dim === undefined ? 0 : prog(f, dim, 14);
	return (
		<g opacity={o * (1 - 0.45 * dm)}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD} opacity={0.9} />
			{[0, 0.4, 0.8, 1.2].map(v => <g key={v}><line x1={g.x} x2={g.x + g.w} y1={Y54(g, v)} y2={Y54(g, v)} stroke="#e6ddcc" strokeWidth={1.5} /><line x1={g.x - 10} x2={g.x} y1={Y54(g, v)} y2={Y54(g, v)} stroke={INK} strokeWidth={3} /><Sx x={g.x - 16} y={Y54(g, v) + size * 0.35} text={v.toFixed(1)} size={size} color={INK} anchor="end" weight={600} at={-1000} /></g>)}
			<path d={`M${g.x},${g.y} L${g.x},${g.y + g.h} L${g.x + g.w},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{T54.map((b, i) => {
				const bx = g.x + slot * i + (slot - bw) / 2;
				const top = Y54(g, b.v);
				const k = smooth(prog(f, fill[i], 18));
				const pu = pulses.filter(p => p[0] === i).reduce((m, p) => Math.max(m, pulse(f, p[1], 44)), 0);
				const hgt = Math.max(4, g.y + g.h - top);
				return (
					<g key={i}>
						{pu > 0.01 ? <rect x={bx - 10} y={top - 10} width={bw + 20} height={hgt + 10} rx={10} fill={AMBER} opacity={0.4 * pu} /> : null}
						<rect x={bx} y={top} width={bw} height={hgt} fill="none" stroke={AMBER_INK} strokeWidth={3} strokeDasharray="10 7" />
						<rect x={bx} y={g.y + g.h - hgt * k} width={bw} height={hgt * k} fill={i === 3 ? AMBER_INK : CASE} opacity={0.9} />
						<Sx x={bx + bw / 2} y={top - 12} text={b.v.toFixed(2)} size={vsize} color={INK} anchor="middle" weight={800} at={fill[i] + 10} />
						<Sx x={bx + bw / 2} y={g.y + g.h + size * 1.3} text={b.lab} size={size} color={INK} anchor="middle" weight={700} at={-1000} />
					</g>
				);
			})}
			{xTitle ? <Sx x={g.x + g.w / 2} y={g.y + g.h + size * 2.6} text="tobacco smoked (grams per day)" size={size} color={INK} anchor="middle" weight={700} at={-1000} /> : null}
			{axisLabel ? wrapM('age-standardised lung-cancer deaths per 1,000 men aged 35+ per year', size, g.w + 40, false, 700).reverse().map((ln, k) => <Sx key={k} x={g.x - 50} y={g.y - size * 0.9 - k * size * 1.15} text={ln} size={size} color={INK} weight={700} at={-1000} />) : null}
		</g>
	);
};

// ---------- survival lines (shape only) ----------
export type SG = {x: number; y: number; w: number; h: number};
const sx = (g: SG, age: number) => g.x + ((age - 30) / 60) * g.w;
const sy = (g: SG, v: number) => g.y + g.h - (v / 100) * g.h;
const NEVER: P2[] = [[30, 100], [50, 97], [60, 92], [70, 81], [80, 58], [90, 26]];
const STOP30: P2[] = [[30, 100], [50, 96], [60, 90], [70, 78], [80, 54], [90, 22]];
const KEPT: P2[] = [[30, 100], [50, 92], [60, 80], [70, 58], [80, 26], [90, 6]];
export const Survival: React.FC<{g: SG; at: number; size?: number; o?: number}> = ({g, at, size = 28, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const path = (pts: P2[]) => 'M' + pts.map(([a, b]) => `${sx(g, a)},${sy(g, b)}`).join(' L');
	return (
		<g opacity={o}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD} opacity={0.9} />
			<path d={`M${g.x},${g.y} L${g.x},${g.y + g.h} L${g.x + g.w},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{[30, 50, 70, 90].map(a => <g key={a}><line x1={sx(g, a)} x2={sx(g, a)} y1={g.y + g.h} y2={g.y + g.h + 10} stroke={INK} strokeWidth={3} /><Sx x={sx(g, a)} y={g.y + g.h + size * 1.3} text={`${a}`} size={size} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
			<Sx x={g.x + g.w} y={g.y + g.h + size * 2.5} text="age (years)" size={size} color={INK} anchor="end" weight={700} at={-1000} />
			<Sx x={g.x} y={g.y - 14} text="still alive (shape only)" size={size} color={INK} weight={700} at={-1000} />
			<DrawPath d={path(NEVER)} at={at} dur={24} color={INK_SOFT} width={4} dash="10 8" />
			<DrawPath d={path(STOP30)} at={at} dur={24} color={TEAL} width={6} />
			<DrawPath d={path(KEPT)} at={at} dur={24} color={AMBER_INK} width={6} />
			<Sx x={sx(g, 90) - 4} y={sy(g, 26) - 30} text="never smoked" size={size} color={INK_SOFT} anchor="end" hand weight={700} at={at + 20} />
			<Sx x={sx(g, 63)} y={sy(g, 70) - 34} text="stopped at about 30" size={size + 2} color={TEAL} anchor="start" hand weight={700} at={at + 22} />
			<Sx x={sx(g, 72)} y={sy(g, 40) + 14} text="kept smoking" size={size + 2} color={AMBER_INK} anchor="end" hand weight={700} at={at + 24} />
		</g>
	);
};

// ---------- confounder triangle ----------
export const Triangle: React.FC<{x: number; y: number; w: number; h: number; thirdAt: number; thirdOut?: number; size?: number; o?: number; pack?: React.ReactNode; lungs?: React.ReactNode}> = ({x, y, w, h, thirdAt, size = 40, o = 1, pack, lungs}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const t = prog(f, thirdAt, 14);
	const L: P2 = [x + 150, y + h - 60], R: P2 = [x + w - 150, y + h - 60], Tp: P2 = [x + w / 2, y + 40];
	const node = (p: P2, text: string, color: string, fill: string, dash?: string) => {
		const nw = mw(text, size, true, 700) + 44;
		return <g><rect x={p[0] - nw / 2} y={p[1] - size * 0.95} width={nw} height={size * 1.6} rx={size * 0.8} fill={fill} stroke={color} strokeWidth={4} strokeDasharray={dash} /><Sx x={p[0]} y={p[1] + size * 0.15} text={text} size={size} color={color} anchor="middle" hand weight={700} at={-1000} /></g>;
	};
	return (
		<g opacity={o}>
			{pack}{lungs}
			<Arr a={[L[0] + 110, L[1] - size * 0.15]} b={[R[0] - 130, R[1] - size * 0.15]} color={INK} width={6} head={20} />
			{node(L, 'smoking', INK, CARD)}
			{node(R, 'lung cancer', INK, CARD)}
			{t > 0.01 ? <g opacity={t}>
				<Arr a={[Tp[0] - 90, Tp[1] + 34]} b={[L[0] + 40, L[1] - size - 10]} at={thirdAt + 6} color={GREYT} width={4} dash="12 9" />
				<Arr a={[Tp[0] + 90, Tp[1] + 34]} b={[R[0] - 40, R[1] - size - 10]} at={thirdAt + 10} color={GREYT} width={4} dash="12 9" />
				{node(Tp, 'inherited factor?', GREYT, GREY_FILL, '10 7')}
			</g> : null}
		</g>
	);
};

// ---------- a tally card (recall) ----------
export const TallyCard: React.FC<{x: number; y: number; at: number; o?: number}> = ({x, y, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 16) * o;
	if (v <= 0.01) return null;
	const rise = (1 - smooth(prog(f, at, 24))) * 30;
	return (
		<g opacity={v * 0.85} transform={`translate(0,${rise})`}>
			<rect x={x} y={y} width={200} height={130} rx={12} fill="#fbf6ea" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 5" />
			{[0, 1, 2, 3].map(i => <line key={i} x1={x + 34 + i * 22 + (i % 2) * 3} y1={y + 34 + (i % 3) * 4} x2={x + 30 + i * 22} y2={y + 92 - (i % 2) * 6} stroke={GREYT} strokeWidth={5} strokeLinecap="round" opacity={0.75} />)}
			<line x1={x + 22} y1={y + 82} x2={x + 118} y2={y + 44} stroke={GREYT} strokeWidth={4} strokeLinecap="round" opacity={0.6} />
			<Sx x={x + 150} y={y + 80} text="?" size={52} color={GREYT} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

// ---------- 10-dot row ----------
export const DotRow10: React.FC<{x: number; y: number; at: number; d?: number; r?: number; lit?: number[]; o?: number; color?: string}> = ({x, y, at, d = 40, r = 14, lit = [3], o = 1, color = AMBER_INK}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: 10}, (_, i) => {
				const k = at < -100 ? 1 : prog(f, at + i * 3, 8);
				const on = lit.includes(i);
				return <circle key={i} cx={x + i * d} cy={y} r={r} fill={on && k > 0.5 ? color : k > 0.5 ? '#e4e0d8' : CARD} stroke={on ? color : '#a8a092'} strokeWidth={2.5} opacity={0.4 + 0.6 * k} />;
			})}
		</g>
	);
};
export {clamp01, RED};
