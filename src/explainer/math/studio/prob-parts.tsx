// Kit pass 2B, probability set 1 (root decision 45; s01 to s03): bars, the roll simulator, tables, the tipped
// total bar, outcome drops and sorts, spinner sectors, the calendar flip, the year strip, the outcome grid.
// Every random order is stored from a seed (stat-math.ts); every count on screen is read from the same store
// as the picture, so they cannot disagree. Type: values 44 to 52 px, labels 28 to 32 px, nothing below 26 px.
import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, PlateSpec, SvgPlate, vis} from './primitives';
import {MATH_ROLES, RoleKey} from './roles';
import {LiveReadoutBoard, ReadoutRow} from './readouts';
import {TXT} from './plot-core';
import {usePlatePreload} from './rig';
import {tallyOf} from './stat-math';

// ---------- pace: a few slow trials, then faster (the same curve as sims/chance.ts trialsShown) ----------
export type StudioPace = {at: number; slow?: number; every?: number; until: number};
/** Items shown at frame f out of `total` (never decreases). Same formula as the sims engine's trialsShown. */
export const paceCount = (total: number, f: number, pace: StudioPace) => {
	const slow = Math.min(total, pace.slow ?? 6), every = pace.every ?? 24, local = f - pace.at;
	if (local < 0) return 0;
	const slowEnd = slow * every;
	if (local < slowEnd) return Math.min(slow, Math.floor(local / every) + 1);
	const span = Math.max(1, pace.until - pace.at - slowEnd), u = Math.min(1, (local - slowEnd) / span);
	return Math.min(total, slow + Math.round((total - slow) * u ** 2.4));
};
/** Frame at which item i (from 0) arrives under the pace: the inverse of paceCount. */
export const paceArrival = (i: number, total: number, pace: StudioPace) => {
	const slow = Math.min(total, pace.slow ?? 6), every = pace.every ?? 24;
	if (i < slow) return pace.at + i * every;
	const slowEnd = slow * every, span = Math.max(1, pace.until - pace.at - slowEnd);
	const need = (i + 1 - slow - 0.5) / Math.max(1, total - slow);
	return pace.at + slowEnd + span * Math.max(0, need) ** (1 / 2.4);
};

const roleCol = (r: RoleKey | undefined, fb: RoleKey) => MATH_ROLES[r ?? fb];

// ---------- ProbabilityBars ----------
export type BarTick = {value: number; label: string};
/**
 * Labelled bars on a value axis (data counts in blue, model probabilities in teal). `values` are the heights now
 * (drive them from the same store as any readout). Negative values hang below the axis (the invalid red bar).
 * `ghosts` draw dashed outlines (the "?" bars), `refLine` a dashed reference (the 1/6 line), `highlight` an
 * amber ring on one bar.
 */
export const ProbabilityBars: React.FC<{
	x: number; y: number; width?: number; height?: number; labels: readonly string[]; values: readonly number[]; max: number; min?: number;
	role?: RoleKey; roles?: readonly (RoleKey | undefined)[]; valueText?: (v: number, i: number) => string | null;
	yTicks?: readonly BarTick[]; xLabel?: string; yLabel?: string; ghosts?: readonly (number | null)[];
	refLine?: {value: number; label?: string; at?: number; out?: number; role?: RoleKey};
	highlight?: {index: number; at: number; out?: number; role?: RoleKey};
	grow?: {at: number; dur?: number; stagger?: number}; barFraction?: number; at?: number; out?: number; labelSize?: number; valueSize?: number;
}> = ({x, y, width = 1100, height = 640, labels, values, max, min = 0, role = 'b', roles, valueText, yTicks = [], xLabel, yLabel, ghosts, refLine, highlight, grow, barFraction = 0.66, at = 0, out, labelSize = 32, valueSize = 34}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const L = yTicks.length ? 92 : 30, T = 56, B = xLabel ? 96 : 60, pw = width - L - 20, ph = height - T - B;
	const n = labels.length, slot = pw / n, bw = slot * barFraction;
	const Y = (v: number) => T + ph - ((v - min) / (max - min)) * ph;
	const y0 = Y(Math.max(min, 0));
	return (
		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity: o}}>
			{yTicks.map(t => <g key={t.label}><line x1={L} x2={L + pw} y1={Y(t.value)} y2={Y(t.value)} stroke="#e4dccd" strokeWidth={2} /><text x={L - 14} y={Y(t.value) + 10} textAnchor="end" style={TXT(30)}>{t.label}</text></g>)}
			{yLabel ? <text x={L} y={T - 22} style={TXT(30, INK, 700)}>{yLabel}</text> : null}
			{labels.map((lab, i) => {
				const g = grow ? prog(f, grow.at + i * (grow.stagger ?? 4), grow.dur ?? 24) : 1;
				const v = values[i] * g, R = roleCol(roles?.[i], role);
				const bx = L + i * slot + (slot - bw) / 2, top = Math.min(Y(v), y0), h = Math.abs(Y(v) - y0);
				const gv = ghosts?.[i];
				const txt = valueText ? valueText(values[i], i) : null;
				const hl = highlight && highlight.index === i ? vis(f, highlight.at, highlight.out) : 0;
				return <g key={i}>
					{gv !== undefined && gv !== null ? <rect x={bx} y={Math.min(Y(gv), y0)} width={bw} height={Math.abs(Y(gv) - y0)} rx={6} fill="none" stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="10 8" /> : null}
					{h > 0.5 ? <rect x={bx} y={top} width={bw} height={h} rx={Math.min(8, bw * 0.1)} fill={R.stroke} stroke={R.ink} strokeWidth={2} /> : null}
					{hl > 0 ? <rect x={bx - 8} y={top - 8} width={bw + 16} height={h + 16} rx={10} fill="none" stroke={MATH_ROLES[highlight!.role ?? 'k'].stroke} strokeWidth={6} opacity={hl} /> : null}
					{txt && g > 0.6 ? <text x={bx + bw / 2} y={v >= 0 ? top - 14 : top + h + valueSize + 4} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: valueSize, fill: R.ink, fontVariantNumeric: 'tabular-nums'}}>{txt}</text> : null}
					<text x={bx + bw / 2} y={T + ph + (min < 0 ? 0 : 0) + 44} textAnchor="middle" style={TXT(labelSize, INK, 700)}>{lab}</text>
				</g>;
			})}
			{refLine ? (() => {const ro = vis(f, refLine.at ?? at, refLine.out); const R = MATH_ROLES[refLine.role ?? 'k']; return <g opacity={ro}>
				<line x1={L} x2={L + pw} y1={Y(refLine.value)} y2={Y(refLine.value)} stroke={R.stroke} strokeWidth={5} strokeDasharray="16 10" />
				{refLine.label ? <text x={L + 12} y={Y(refLine.value) - 14} textAnchor="start" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: R.ink}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{refLine.label}</text> : null}
			</g>;})() : null}
			<line x1={L} x2={L + pw} y1={y0} y2={y0} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			{yTicks.length ? <line x1={L} x2={L} y1={T} y2={T + ph} stroke={INK} strokeWidth={3.5} /> : null}
			{xLabel ? <text x={L + pw / 2} y={height - 10} textAnchor="middle" style={TXT(30, INK, 700)}>{xLabel}</text> : null}
		</svg>
	);
};

// ---------- RollSimulator ----------
export type RollState = {shown: number; tally: number[]; latest: number; relative: number[]};
/**
 * A stored roll order (use shuffledOutcomes(counts, seed) so the bars end exactly on given data, or a sims
 * ChanceRun's `outcome` array) played at a pace: the die tumbles on each roll, a token flies from the die to its
 * face's column, the bars grow and a readout reads the same tally. Before the first roll the bars are empty.
 */
export const RollSimulator: React.FC<{
	sequence: readonly number[]; faces?: readonly string[]; pace: StudioPace;
	bars: {x: number; y: number; width?: number; height?: number; max: number; yTicks?: readonly BarTick[]; xLabel?: string; yLabel?: string; showCounts?: boolean; highlight?: {index: number; at: number; role?: RoleKey}; refLine?: {value: number; label?: string; at?: number}};
	die?: {x: number; y: number; w: number; plate?: PlateSpec};
	readout?: {x: number; y: number; width?: number; title?: string; rows: (s: RollState) => ReadoutRow[]};
	role?: RoleKey; at?: number; out?: number;
}> = ({sequence, faces = ['1', '2', '3', '4', '5', '6'], pace, bars, die, readout, role = 'a', at = 0, out}) => {
	usePlatePreload(die?.plate ? [die.plate.src] : []);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	const N = sequence.length, k = paceCount(N, f, pace), nb = faces.length;
	const tally = tallyOf(sequence, k, nb);
	const st: RollState = {shown: k, tally, latest: k ? sequence[k - 1] : -1, relative: tally.map(c => (k ? c / k : 0))};
	if (o <= 0.001) return null;
	const bw = bars.width ?? 1100, bh = bars.height ?? 640;
	const L = bars.yTicks?.length ? 92 : 30, T = 56, B = bars.xLabel ? 96 : 60, pw = bw - L - 20, ph = bh - T - B, slot = pw / nb;
	const colX = (i: number) => bars.x + L + i * slot + slot / 2;
	const colTop = (c: number) => bars.y + T + ph - (c / bars.max) * ph;
	// The die: a short tumble (turn and squash) on each new roll.
	const lastArr = k ? paceArrival(k - 1, N, pace) : -999;
	const age = f - lastArr;
	const tumble = k && age < 14 ? 1 - age / 14 : 0;
	// Tokens in flight: the most recent rolls, at most 10.
	const flying: {i: number; age: number}[] = [];
	for (let i = k - 1; i >= Math.max(0, k - 10); i--) {const a = f - paceArrival(i, N, pace); if (a < 16) flying.push({i, age: a}); else break;}
	const R = MATH_ROLES[role];
	const dieC = die ? [die.x + die.w / 2, die.y + die.w / 2] : [bars.x + bw / 2, bars.y - 60];
	return (
		<>
			<ProbabilityBars x={bars.x} y={bars.y} width={bw} height={bh} labels={faces} values={tally} max={bars.max} role={role} yTicks={bars.yTicks} xLabel={bars.xLabel} yLabel={bars.yLabel}
				valueText={bars.showCounts === false ? undefined : v => (v > 0 ? String(v) : null)} highlight={bars.highlight} refLine={bars.refLine} at={at} out={out} />
			<FrameSvg style={{opacity: o}}>
				{flying.map(({i, age: a}) => {
					const u = Math.max(0, Math.min(1, a / 16)), col = sequence[i];
					const tx = colX(col), ty = colTop(tallyOf(sequence, i, nb)[col] + 0.5);
					const px = dieC[0] + (tx - dieC[0]) * u, py = dieC[1] + (ty - dieC[1]) * u - Math.sin(Math.PI * u) * 120;
					return <circle key={i} cx={px} cy={py} r={14} fill={R.stroke} stroke={CARD} strokeWidth={4} opacity={1 - Math.max(0, u - 0.85) / 0.15} />;
				})}
			</FrameSvg>
			{die ? (
				<div style={{position: 'absolute', left: die.x, top: die.y, width: die.w, height: die.w, opacity: o, transform: `rotate(${tumble * 38 * (k % 2 ? 1 : -1)}deg) scale(${1 + 0.08 * tumble}, ${1 - 0.12 * tumble})`}}>
					{die.plate ? <svg width={die.w} height={die.w} style={{overflow: 'visible'}}><SvgPlate plate={die.plate} x={0} y={0} w={die.w} /></svg>
						: <svg width={die.w} height={die.w}><rect x={4} y={4} width={die.w - 8} height={die.w - 8} rx={die.w * 0.18} fill={CARD} stroke={INK} strokeWidth={6} /></svg>}
				</div>
			) : null}
			{die && k ? (
				<div style={{position: 'absolute', left: die.x + die.w + 18, top: die.y + die.w / 2 - 50, opacity: o, padding: '4px 22px', borderRadius: 16, background: R.soft, border: `4px solid ${R.stroke}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: R.ink, lineHeight: 1.2}}>{faces[st.latest]}</div>
			) : null}
			{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 520} title={readout.title} at={at} out={out} rows={readout.rows(st)} /> : null}
		</>
	);
};

// ---------- DistributionTable ----------
/** A horizontal probability table (x row and P(X = x) row) at 44 px, columns revealed on cues, one column highlighted. */
export const DistributionTable: React.FC<{
	x: number; y: number; values: readonly React.ReactNode[]; probs: readonly React.ReactNode[]; headers?: [React.ReactNode, React.ReactNode];
	colW?: number; headW?: number; size?: number; at?: number; out?: number; revealAt?: readonly number[];
	highlight?: {index: number; at: number; out?: number; role?: RoleKey}; probRole?: RoleKey; invalid?: {index: number; at: number};
}> = ({x, y, values, probs, headers = ['x', 'P(X = x)'], colW = 150, headW = 250, size = 44, at = 0, out, revealAt, highlight, probRole = 'b', invalid}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const rowH = size * 1.7;
	const cell = (content: React.ReactNode, i: number, row: 0 | 1) => {
		const ro = revealAt?.[i] !== undefined ? prog(f, revealAt[i], 12) : 1;
		const hl = highlight?.index === i ? vis(f, highlight.at, highlight.out) : 0;
		const bad = invalid?.index === i ? prog(f, invalid.at, 12) : 0;
		const R = MATH_ROLES[highlight?.role ?? 'k'];
		return <div key={`${row}-${i}`} style={{width: colW, height: rowH, display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: `2px solid ${PAPER_DEEP}`, opacity: ro, background: hl > 0 ? `rgba(248,232,200,${hl})` : bad > 0 ? `rgba(247,220,216,${bad})` : undefined, boxShadow: hl > 0 ? `inset 0 0 0 4px ${R.stroke}` : undefined,
			fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: bad > 0.5 ? MATH_ROLES.mistake.ink : row ? MATH_ROLES[probRole].ink : INK, fontVariantNumeric: 'tabular-nums', whiteSpace: 'pre'}}>{content}</div>;
	};
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, borderRadius: 20, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', overflow: 'hidden'}}>
			{[values, probs].map((row, r) => (
				<div key={r} style={{display: 'flex', borderTop: r ? `2.5px solid ${INK}` : undefined}}>
					<div style={{width: headW, height: rowH, display: 'flex', alignItems: 'center', paddingLeft: 22, boxSizing: 'border-box', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size * 0.82, color: r ? MATH_ROLES[probRole].ink : INK, whiteSpace: 'pre'}}>{headers[r]}</div>
					{row.map((c, i) => cell(c, i, r as 0 | 1))}
				</div>
			))}
		</div>
	);
};

// ---------- StackedTotalBar ----------
/**
 * The s01 surprise: standing count bars tip over and lie end to end as one bar of the total, which can then
 * relabel (200 to 1). Bars start at their standing positions (baseline y, slot spacing) and end on a horizontal
 * bar from (x, y) of `width`. `tip` is 0..1 (drive from frames); a relabel writes over the finished bar.
 */
export const StackedTotalBar: React.FC<{
	x: number; y: number; width: number; thickness?: number; parts: readonly {value: number; label?: string; role?: RoleKey}[]; total: number;
	from: {x: number; baseY: number; slot: number; barW: number; max: number; height: number};
	tip: number; stagger?: number; totalLabel?: {text: string; at: number}; relabel?: {text: string; at: number}; role?: RoleKey; at?: number; out?: number;
}> = ({x, y, width, thickness = 72, parts, total, from, tip, stagger = 0.08, totalLabel, relabel, role = 'a', at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	let cum = 0;
	const els = parts.map((p, i) => {
		const len1 = (p.value / total) * width, x1 = x + (cum / total) * width;
		cum += p.value;
		const n = parts.length, u0 = Math.max(0, Math.min(1, (tip - i * stagger) / Math.max(0.05, 1 - (n - 1) * stagger)));
		const u = u0 * u0 * (3 - 2 * u0);
		const len0 = (p.value / from.max) * from.height, w0 = from.barW;
		// Standing: bottom-left at (bx, baseY), growing up. Lying: left end at (x1, y + thickness), growing right.
		const bx = from.x + i * from.slot + (from.slot - w0) / 2;
		const ax = bx + (x1 - bx) * u, ay = from.baseY + (y + thickness - from.baseY) * u;
		const len = len0 + (len1 - len0) * u, th = w0 + (thickness - w0) * u, ang = -90 * (1 - u);
		const R = MATH_ROLES[p.role ?? role];
		return <g key={i} transform={`translate(${ax},${ay}) rotate(${ang})`}>
			<rect x={0} y={-th} width={len} height={th} fill={R.stroke} stroke={CARD} strokeWidth={3} />
			{p.label && u > 0.9 ? <text x={len / 2} y={-th / 2 + 12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: '#ffffff'}}>{p.label}</text> : null}
		</g>;
	});
	const lo = totalLabel ? prog(f, totalLabel.at, 12) * (relabel ? 1 - prog(f, relabel.at, 10) : 1) : 0, ro = relabel ? prog(f, relabel.at + 6, 12) : 0;
	return <FrameSvg style={{opacity: o}}>
		{els}
		{tip >= 1 ? <rect x={x} y={y} width={width} height={thickness} fill="none" stroke={INK} strokeWidth={4} /> : null}
		{lo > 0 ? <text x={x + width + 24} y={y + thickness / 2 + 18} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, fill: INK}} opacity={lo}>{totalLabel!.text}</text> : null}
		{ro > 0 ? <text x={x + width + 24} y={y + thickness / 2 + 18} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, fill: MATH_ROLES.answer.ink}} opacity={ro}>{relabel!.text}</text> : null}
	</FrameSvg>;
};

// ---------- OutcomeDrop ----------
/**
 * Tokens fall one at a time from a source point into columns and stack (one trial, one token, one column).
 * `columns` are frame x positions with labels under the base line; item i drops into column items[i] at
 * paceArrival(i). Tokens are counters (circles) in a role colour, or a letter chip when `text` is given.
 */
export const OutcomeDrop: React.FC<{
	columns: readonly {x: number; label?: string}[]; baseY: number; items: readonly number[]; pace: StudioPace; from: [number, number];
	token?: number; gap?: number; role?: RoleKey; text?: (i: number) => string; fall?: number; at?: number; out?: number; baseWidth?: number;
}> = ({columns, baseY, items, pace, from, token = 36, gap = 6, role = 'a', text, fall = 18, at = 0, out, baseWidth}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const R = MATH_ROLES[role], N = items.length, k = paceCount(N, f, pace);
	const stack = new Array(columns.length).fill(0);
	const x0 = Math.min(...columns.map(c => c.x)) - token, x1 = Math.max(...columns.map(c => c.x)) + token;
	return <FrameSvg style={{opacity: o}}>
		<line x1={x0 - 20} x2={baseWidth ? x0 - 20 + baseWidth : x1 + 20} y1={baseY} y2={baseY} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{columns.map((c, i) => c.label ? <text key={i} x={c.x} y={baseY + 44} textAnchor="middle" style={TXT(32, INK, 700)}>{c.label}</text> : null)}
		{items.slice(0, k).map((col, i) => {
			const level = stack[col]++;
			const u = Math.max(0, Math.min(1, (f - paceArrival(i, N, pace)) / fall)), e = u * u;
			const tx = columns[col].x, ty = baseY - token / 2 - level * (token + gap);
			const px = from[0] + (tx - from[0]) * Math.min(1, u * 1.6), py = from[1] + (ty - from[1]) * e;
			return text ? <g key={i}><rect x={px - token * 0.9} y={py - token / 2} width={token * 1.8} height={token} rx={8} fill={R.soft} stroke={R.stroke} strokeWidth={3} /><text x={px} y={py + token * 0.3} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(26, token * 0.75), fill: R.ink}}>{text(i)}</text></g>
				: <circle key={i} cx={px} cy={py} r={token / 2} fill={R.stroke} stroke={CARD} strokeWidth={3} />;
		})}
	</FrameSvg>;
};

// ---------- OutcomeSort ----------
/**
 * Outcome chips (sequences such as "HTH") laid out in a grid slide into columns by their value, stack, then
 * (optionally) melt into bars whose heights are the column counts. Chips are 44 px text by default.
 */
export const OutcomeSort: React.FC<{
	x: number; y: number; items: readonly {label: string; value: number}[]; gridCols?: number; chipW?: number; chipH?: number; gapX?: number; gapY?: number;
	columns: readonly {value: number; x: number; label?: string}[]; baseY: number; sortAt: number; dur?: number; stagger?: number;
	toBars?: {at: number; barW?: number; role?: RoleKey; countText?: boolean}; role?: RoleKey; size?: number; at?: number; out?: number;
}> = ({x, y, items, gridCols = 4, chipW = 150, chipH = 64, gapX = 18, gapY = 16, columns, baseY, sortAt, dur = 30, stagger = 5, toBars, role = 'a', size = 40, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const R = MATH_ROLES[role], counts = new Map<number, number>();
	const melt = toBars ? prog(f, toBars.at, 24) : 0;
	const chips = items.map((it, i) => {
		const lvl = counts.get(it.value) ?? 0; counts.set(it.value, lvl + 1);
		const col = columns.find(c => c.value === it.value);
		const sx = x + (i % gridCols) * (chipW + gapX), sy = y + Math.floor(i / gridCols) * (chipH + gapY);
		const tx = col ? col.x - chipW / 2 : sx, ty = baseY - (lvl + 1) * (chipH + 6);
		const u0 = prog(f, sortAt + i * stagger, dur), px = sx + (tx - sx) * u0, py = sy + (ty - sy) * u0 - Math.sin(Math.PI * u0) * 40;
		return <div key={i} style={{position: 'absolute', left: px, top: py, width: chipW, height: chipH, boxSizing: 'border-box', borderRadius: 12, background: CARD, border: `3px solid ${R.stroke}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, opacity: 1 - melt, letterSpacing: 2}}>{it.label}</div>;
	});
	const BR = MATH_ROLES[toBars?.role ?? 'b'];
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<FrameSvg>
			<line x1={Math.min(...columns.map(c => c.x)) - chipW * 0.7} x2={Math.max(...columns.map(c => c.x)) + chipW * 0.7} y1={baseY} y2={baseY} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			{columns.map(c => <text key={c.value} x={c.x} y={baseY + 46} textAnchor="middle" style={TXT(34, INK, 800)}>{c.label ?? String(c.value)}</text>)}
			{toBars ? columns.map(c => {
				const n = counts.get(c.value) ?? 0, h = n * (chipH + 6) * melt, bw = toBars.barW ?? chipW * 0.8;
				return <g key={'b' + c.value}><rect x={c.x - bw / 2} y={baseY - h} width={bw} height={h} fill={BR.stroke} stroke={BR.ink} strokeWidth={2} />
					{toBars.countText !== false && melt > 0.8 ? <text x={c.x} y={baseY - h - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: BR.ink}}>{n}</text> : null}</g>;
			}) : null}
		</FrameSvg>
		{chips}
	</div>;
};

// ---------- SpinnerSectors ----------
/**
 * Coded spinner sectors (centre cx, cy, radius r) in proportion to weights, clockwise from 12 o'clock. `scale`
 * multiplies every weight (the s01 / g03 k dial: the sectors grow until they fill the circle at scale × Σw = 1);
 * by default the weights are normalised. The unfilled remainder is a dashed empty arc. An optional pointer.
 */
export const SpinnerSectors: React.FC<{
	cx: number; cy: number; r: number; sectors: readonly {weight: number; label?: string; role?: RoleKey; color?: string}[]; scale?: number;
	pointer?: number; at?: number; out?: number; labelSize?: number; rim?: boolean;
}> = ({cx, cy, r, sectors, scale, pointer, at = 0, out, labelSize = 44, rim = true}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const sum = sectors.reduce((s, q) => s + q.weight, 0), k = scale ?? 1 / sum;
	const fills = ['#d6eeee', '#dceaf7', '#f8e8c8', '#e7e0f2', '#dcefe2', '#ebe4d6', '#f7dcd8', '#e9ecd3'];
	let a0 = 0;
	const pt = (a: number, rr: number) => [cx + rr * Math.sin(a * 2 * Math.PI), cy - rr * Math.cos(a * 2 * Math.PI)];
	const wedges = sectors.map((s, i) => {
		const span = Math.min(1 - a0, Math.max(0, s.weight * k)), a1 = a0 + span;
		const [x0, y0] = pt(a0, r), [x1, y1] = pt(a1, r), [lx, ly] = pt(a0 + span / 2, r * 0.62);
		const d = span >= 0.9999 ? `M${cx},${cy - r} A${r},${r} 0 1 1 ${cx - 0.01},${cy - r} Z` : `M${cx},${cy} L${x0},${y0} A${r},${r} 0 ${span > 0.5 ? 1 : 0} 1 ${x1},${y1} Z`;
		const fill = s.color ?? (s.role ? MATH_ROLES[s.role].soft : fills[i % fills.length]);
		a0 = a1;
		return <g key={i}>{span > 0.001 ? <path d={d} fill={fill} stroke={INK} strokeWidth={4} strokeLinejoin="round" /> : null}
			{s.label && span > 0.04 ? <text x={lx} y={ly + labelSize * 0.35} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: labelSize, fill: s.role ? MATH_ROLES[s.role].ink : INK}}>{s.label}</text> : null}</g>;
	});
	const rest = 1 - a0;
	return <FrameSvg style={{opacity: o}}>
		{rim ? <circle cx={cx} cy={cy} r={r} fill={CARD} stroke={INK_SOFT} strokeWidth={4} strokeDasharray={rest > 0.001 ? '10 10' : undefined} /> : null}
		{wedges}
		{pointer !== undefined ? (() => {const [px, py] = pt(pointer / 360, r * 0.85); return <g><line x1={cx} y1={cy} x2={px} y2={py} stroke={INK} strokeWidth={9} strokeLinecap="round" /><circle cx={cx} cy={cy} r={14} fill={INK} /></g>;})() : <circle cx={cx} cy={cy} r={9} fill={INK} />}
	</FrameSvg>;
};

// ---------- CalendarFlip ----------
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const MONTH_LENGTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] as const;
/** Every date of a non-leap year in order: {month (0 to 11), day, top (month name), big (day)}. */
export const yearDates = () => MONTH_LENGTHS.flatMap((len, m) => Array.from({length: len}, (_, d) => ({month: m, day: d + 1, top: MONTHS[m], big: String(d + 1)})));
/**
 * A tear-off pad: pages fly off one by one at a pace, each showing its coded text on the pad's page area. With a
 * plate, `page` is the blank top page in the plate's file pixels; without one, a coded pad is drawn. The page
 * now showing is page `shown − 1`; up to three torn pages are in flight. Read the count with paceCount.
 */
export const CalendarFlip: React.FC<{
	x: number; y: number; w: number; h?: number; pages: readonly {top: string; big: string}[]; pace: StudioPace;
	plate?: PlateSpec; page?: readonly [number, number, number, number]; flight?: number; at?: number; out?: number; accent?: string;
}> = ({x, y, w, h, pages, pace, plate, page, flight = 16, at = 0, out, accent = '#b8322a'}) => {
	usePlatePreload(plate ? [plate.src] : []);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const N = pages.length, k = paceCount(N, f, pace);
	const s = plate ? w / (plate.box[2] - plate.box[0]) : 1;
	const rect = plate && page ? [x + (page[0] - plate.box[0]) * s, y + (page[1] - plate.box[1]) * s, (page[2] - page[0]) * s, (page[3] - page[1]) * s] : [x, y + 50, w, (h ?? w * 1.1) - 50];
	const [px, py, pw, ph] = rect;
	const face = (p: {top: string; big: string} | undefined, key: string, style: React.CSSProperties = {}) => (
		<div key={key} style={{position: 'absolute', left: px, top: py, width: pw, height: ph, background: '#fffdf8', borderRadius: 10, boxShadow: '0 4px 10px rgba(60,45,20,0.12)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', ...style}}>
			<div style={{width: '100%', background: accent, color: '#ffffff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(28, ph * 0.13), textAlign: 'center', padding: '4px 0', textTransform: 'uppercase', letterSpacing: 2}}>{p?.top ?? ''}</div>
			<div style={{flex: 1, display: 'flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(44, ph * 0.5), color: INK, fontVariantNumeric: 'tabular-nums'}}>{p?.big ?? ''}</div>
		</div>
	);
	const torn: React.ReactNode[] = [];
	for (let i = k - 1; i >= Math.max(0, k - 4); i--) {
		const a = f - paceArrival(i + 1, N, pace);
		if (a < 0 || a > flight || i + 1 >= N) continue;
		const u = a / flight;
		torn.push(face(pages[i], 't' + i, {transform: `translate(${-u * pw * 0.6}px, ${u * ph * 0.5}px) rotate(${-u * 30}deg)`, opacity: 1 - u, transformOrigin: 'bottom left'}));
	}
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		{plate ? <FrameSvg><SvgPlate plate={plate} x={x} y={y} w={w} /></FrameSvg> : (
			<div style={{position: 'absolute', left: x, top: y, width: w, height: h ?? w * 1.1, background: '#d8cdb8', borderRadius: 18, boxShadow: CARD_SHADOW}}>
				<div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 50, background: '#5a4a3a', borderRadius: '18px 18px 0 0'}} />
			</div>
		)}
		{face(k > 0 ? pages[Math.min(N - 1, k - 1)] : pages[0], 'cur')}
		{torn}
	</div>;
};

// ---------- YearStrip ----------
/**
 * A year as 12 month rows of day cells (1 to 31; missing days blank). Days light in calendar order up to `lit`;
 * one date column can be highlighted (the 31st appears in only 7 months). Cell text is the day number at 26 px+.
 */
export const YearStrip: React.FC<{x: number; y: number; cell?: number; lit?: number; highlightDay?: {day: number; at: number; role?: RoleKey}; role?: RoleKey; at?: number; out?: number; dayLabels?: readonly number[]}> = ({x, y, cell = 44, lit = 365, highlightDay, role = 'b', at = 0, out, dayLabels = [1, 5, 10, 15, 20, 25, 31]}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const R = MATH_ROLES[role], H = highlightDay ? MATH_ROLES[highlightDay.role ?? 'k'] : null, ho = highlightDay ? prog(f, highlightDay.at, 14) : 0;
	const left = 96, cw = cell * 0.86, chh = cell * 0.8;
	let idx = 0;
	return <svg width={left + 31 * cell + 10} height={46 + 12 * cell} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity: o}}>
		{dayLabels.map(d => <text key={d} x={left + (d - 1) * cell + cw / 2} y={30} textAnchor="middle" style={TXT(28, INK, 700)}>{d}</text>)}
		{MONTH_LENGTHS.map((len, m) => <g key={m}>
			<text x={left - 14} y={46 + m * cell + chh * 0.78} textAnchor="end" style={TXT(28, INK, 700)}>{MONTHS[m].slice(0, 3)}</text>
			{Array.from({length: 31}, (_, d) => {
				const exists = d < len, on = exists && idx++ < lit;
				const hl = H && highlightDay!.day === d + 1 ? ho : 0;
				return <rect key={d} x={left + d * cell} y={46 + m * cell} width={cw} height={chh} rx={5} fill={!exists ? 'none' : hl > 0 && on ? H!.stroke : on ? R.soft : CARD} stroke={!exists ? INK_SOFT : hl > 0 ? H!.ink : R.stroke} strokeWidth={!exists ? 2 : 2.5} strokeDasharray={!exists ? '4 5' : undefined} opacity={!exists ? 0.5 : 1} />;
			})}
		</g>)}
	</svg>;
};
/** How many months of a non-leap year contain this date (1 to 28: 12; 29 and 30: 11; 31: 7). */
export const monthsWithDay = (day: number) => MONTH_LENGTHS.filter(l => l >= day).length;

// ---------- OutcomeGrid ----------
/**
 * The two-dice grid: rows × cols cells labelled by value(r, c). Cells with one value light amber at a cue; at
 * `slide` every cell slides into the column for its value and stacks, so the grid becomes the bar chart.
 */
export const OutcomeGrid: React.FC<{
	x: number; y: number; cell?: number; rows?: number; cols?: number; value: (r: number, c: number) => number; rowLabels?: readonly string[]; colLabels?: readonly string[];
	light?: {value: number; at: number; out?: number; role?: RoleKey}; slide?: {at: number; dur?: number; x: number; baseY: number; slot: number; size?: number; labels?: boolean};
	role?: RoleKey; size?: number; at?: number; out?: number;
}> = ({x, y, cell = 96, rows = 6, cols = 6, value, rowLabels, colLabels, light, slide, role = 'b', size = 40, at = 0, out}) => {
	const f = useCurrentFrame();
	const {fps} = useVideoConfig();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const R = MATH_ROLES[role], LR = MATH_ROLES[light?.role ?? 'k'];
	const vals: number[] = [];
	for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) vals.push(value(r, c));
	const distinct = [...new Set(vals)].sort((a, b) => a - b), level = new Map<number, number>();
	const lo = light ? vis(f, light.at, light.out) : 0;
	const s2 = slide?.size ?? cell * 0.5;
	const cells = vals.map((v, i) => {
		const r = Math.floor(i / cols), c = i % cols, gx = x + c * cell, gy = y + r * cell;
		let px = gx, py = gy, sz = cell;
		if (slide) {
			const lv = level.get(v) ?? 0; level.set(v, lv + 1);
			const u = spring({frame: f - slide.at - (r + c) * 2, fps, config: {damping: 16, stiffness: 90}});
			const tx = slide.x + distinct.indexOf(v) * slide.slot + (slide.slot - s2) / 2, ty = slide.baseY - (lv + 1) * s2;
			px = gx + (tx - gx) * u; py = gy + (ty - gy) * u; sz = cell + (s2 - cell) * u;
		}
		const on = light && v === light.value ? lo : 0;
		return <g key={i}>
			<rect x={px + 3} y={py + 3} width={sz - 6} height={sz - 6} rx={8} fill={on > 0 ? LR.soft : CARD} stroke={on > 0 ? LR.stroke : R.stroke} strokeWidth={on > 0 ? 5 : 3} />
			<text x={px + sz / 2} y={py + sz / 2 + Math.max(26, sz * (size / cell)) * 0.35} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(26, sz * (size / cell)), fill: on > 0.5 ? LR.ink : INK}}>{v}</text>
		</g>;
	});
	const lab = slide ? prog(f, slide.at, 20) : 0;
	return <FrameSvg style={{opacity: o}}>
		{rowLabels ? rowLabels.map((l, r) => <text key={'r' + r} x={x - 18} y={y + r * cell + cell / 2 + 12} textAnchor="end" style={TXT(34, INK, 800)} opacity={1 - lab}>{l}</text>) : null}
		{colLabels ? colLabels.map((l, c) => <text key={'c' + c} x={x + c * cell + cell / 2} y={y - 18} textAnchor="middle" style={TXT(34, INK, 800)} opacity={1 - lab}>{l}</text>) : null}
		{cells}
		{slide && slide.labels !== false ? <g opacity={lab}>
			<line x1={slide.x} x2={slide.x + distinct.length * slide.slot} y1={slide.baseY} y2={slide.baseY} stroke={INK} strokeWidth={4} />
			{distinct.map((v, i) => <text key={v} x={slide.x + i * slide.slot + slide.slot / 2} y={slide.baseY + 40} textAnchor="middle" style={TXT(30, INK, 700)}>{v}</text>)}
		</g> : null}
	</FrameSvg>;
};
