// M7 G02 practice board, in the chem-m7-g01 layout (QStrip, QCardX, Badge and AnsBox imported from G01). README:
// - Checks4: the four-check strip along the bottom ("water in q?", "fuel in n?", "kJ, per mole, sign?", "makes sense?");
//   ticks the row a scene uses and dims to an outline during each countdown.
// - QTable: the question 3 table drawn inside the card (header and four trials), with cell underlines, an amber ring
//   and a cell that fills on cue. tableRows gives its row baselines.
// - SplitBar: the heat split bar (full outline = heat released; orange share = heat to the water).
// - NumLine: a short number line with labelled marks. TrialStrip: |ΔHc| bars for the four trials with a dashed band.
// - WL: a working line (one colour) that dims from `dim`.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, Sx, TEAL, mw, smooth} from '../chem-m6-c01/parts';
import {CARDC} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {GLOW} from '../chem-m7-g01/board';

export const ORANGE = '#b5561a', BLUE = '#2d6f9e', TEALD = '#0d6b52', AMBER_U = '#c98a1b', HEATC = '#e07b2e';

// ---------- check strip ----------
export const CHECKS4 = ['water in q?', 'fuel in n?', 'kJ, per mole, sign?', 'makes sense?'];
const STRIP_Y = 1004;
export const Checks4: React.FC<{ticks?: Record<number, number[]>; hold?: {startFrame: number; endFrame: number}; at?: number}> = ({ticks = {}, hold, at = -100}) => {
	const f = useCurrentFrame();
	const dim = hold ? prog(f, hold.startFrame - 12, 14) * (1 - prog(f, hold.endFrame, 14)) : 0;
	const o = prog(f, at, 16) * (1 - 0.72 * dim);
	if (o <= 0.01) return null;
	let x = 96 + mw('four checks:', 28, true, 700) + 18;
	return (
		<g opacity={o} transform={`translate(0,${(1 - prog(f, at, 20)) * 40})`}>
			<Sx x={96} y={STRIP_Y + 34} text="four checks:" size={28} color={INK_SOFT} hand at={-1000} />
			{CHECKS4.map((l, i) => {
				const px = x;
				const w = mw(l, 26, true, 700) + 62;
				x = px + w + 14;
				const on = (ticks[i] ?? []).some(t => t <= f);
				const flash = (ticks[i] ?? []).reduce((a, t) => Math.max(a, f >= t ? Math.max(0, 1 - (f - t) / 24) : 0), 0);
				return (
					<g key={i}>
						<rect x={px} y={STRIP_Y} width={w} height={48} rx={24} fill={flash > 0.01 ? GLOW : CARDC} fillOpacity={flash > 0.01 ? 0.4 + 0.6 * flash : dim > 0.5 ? 0 : 1} stroke={on ? TEAL : 'rgba(60,45,20,0.22)'} strokeWidth={on ? 3 : 2.5} />
						<rect x={px + 14} y={STRIP_Y + 12} width={24} height={24} rx={5} fill={CARDC} stroke={on ? TEAL : INK_SOFT} strokeWidth={2.5} />
						{(ticks[i] ?? []).slice(0, 1).map((t, k) => <DrawPath key={k} d={`M${px + 14},${STRIP_Y + 24} l7,8 l13,-17`} at={t} dur={10} color="#2f8a5b" width={4} />)}
						<Sx x={px + 48} y={STRIP_Y + 33} text={l} size={26} color={on ? TEAL : INK_SOFT} hand at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- question 3 table ----------
export const T3 = {head: ['Trial', 'Temperature rise (°C)', 'Mass lost by burner (g)', 'ΔHc (kJ mol⁻¹)'], rows: [['1', '18.0', '1.16', '−974'], ['2', '17.9', '1.15', '−977'], ['3', '18.2', '1.62', ''], ['4', '18.1', '1.17', '−971']]};
export const T3COLS = [0, 150, 560, 990];
export type Cell = {r: number; c: number; at: number};
export const QTable: React.FC<{x: number; y: number; size: number; rowH: number; under?: Cell[]; ring?: Cell; fill?: {r: number; c: number; text: string; at: number}; scale?: number}> = ({x, y, size, rowH, under = [], ring, fill, scale = 1}) => {
	const f = useCurrentFrame();
	const cx = (c: number) => x + T3COLS[c] * scale;
	const ry = (r: number) => y + (r + 1) * rowH;
	return (
		<g>
			<line x1={x - 10} x2={x + 1360 * scale} y1={y + rowH * 0.3} y2={y + rowH * 0.3} stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
			{T3.head.map((h, c) => <Sx key={c} x={cx(c)} y={y} text={h} size={size * 0.9} color={INK_SOFT} weight={800} at={-1000} />)}
			{T3.rows.map((row, r) => row.map((t, c) => (t ? <Sx key={r + '-' + c} x={cx(c)} y={ry(r)} text={t} size={size} color={INK} weight={600} at={-1000} /> : <rect key={r + '-' + c} x={cx(c)} y={ry(r) - size * 0.9} width={size * 3} height={size * 1.15} rx={6} fill="none" stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 5" />)))}
			{under.map((u, k) => { const t = T3.rows[u.r][u.c] || '−705'; const w = mw(t, size, false, 600); return <DrawPath key={k} d={`M${cx(u.c)},${ry(u.r) + 8} L${cx(u.c) + w},${ry(u.r) + 8}`} at={u.at} dur={10} color={AMBER_U} width={4} />; })}
			{ring ? (() => { const t = T3.rows[ring.r][ring.c]; const w = mw(t, size, false, 600); const c0 = cx(ring.c) + w / 2, c1 = ry(ring.r) - size * 0.35; return <DrawPath d={`M${c0},${c1 - size * 0.8} A${w / 2 + 16},${size * 0.8} 0 1 1 ${c0 - 1},${c1 - size * 0.8}`} at={ring.at} dur={14} color={AMBER_U} width={4} />; })() : null}
			{fill ? <g opacity={prog(f, fill.at, 10)}><Sx x={cx(fill.c)} y={ry(fill.r)} text={fill.text} size={size} color={TEALD} weight={800} at={-1000} /></g> : null}
		</g>
	);
};

// ---------- working line ----------
export const WL: React.FC<{x: number; y: number; t: string; at: number; color?: string; size?: number; dim?: number; dimTo?: number; out?: number}> = ({x, y, t, at, color = INK, size = 34, dim, dimTo = 0.4, out}) => {
	const f = useCurrentFrame();
	const d = dim === undefined ? 1 : 1 - (1 - dimTo) * prog(f, dim, 12);
	return <g opacity={d}><Sx x={x} y={y} text={t} size={size} color={color} weight={700} at={at} out={out} /></g>;
};

// ---------- heat split bar ----------
export const SplitBar: React.FC<{x: number; y: number; w: number; frac: number; at: number; fillAt: number; fullAt?: number; full: string; share: string; rest?: {t: string; at: number}; q?: number; o?: number}> = ({x, y, w, frac, at, fillAt, fullAt, full, share, rest, q, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const sh = w * frac * smooth(prog(f, fillAt, 24));
	const fullO = fullAt === undefined ? 1 : prog(f, fullAt, 12);
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={54} rx={10} fill={fullAt === undefined ? 'none' : `rgba(224,123,46,${0.12 * fullO})`} stroke={INK} strokeWidth={3} strokeDasharray={fullO < 0.5 ? '10 7' : undefined} />
			{sh > 1 ? <rect x={x + 3} y={y + 3} width={sh} height={48} rx={8} fill={HEATC} /> : null}
			<Sx x={x + w + 16} y={y + 38} text={full} size={28} color={INK} weight={800} at={fullAt ?? at} />
			<Sx x={x + 6} y={y + 90} text={share} size={26} color={ORANGE} weight={700} at={fillAt} />
			{rest ? <Sx x={x + w - 6} y={y + 90} text={rest.t} size={24} color={INK_SOFT} anchor="end" weight={700} at={rest.at} /> : null}
			{q !== undefined && f < (fullAt ?? 1e9) ? <Sx x={x + w * 0.75} y={y + 40} text="?" size={40} color={INK_SOFT} anchor="middle" weight={800} at={q} /> : null}
		</g>
	);
};

// ---------- number line ----------
export const NumLine: React.FC<{x: number; y: number; w: number; max: number; marks: {v: number; t: string; color?: string; at: number}[]; at: number; arrow?: {from: number; t: string; at: number}}> = ({x, y, w, max, marks, at, arrow}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	const X = (m: number) => x + (m / max) * w;
	return (
		<g opacity={v}>
			<line x1={x} x2={x + w} y1={y} y2={y} stroke={INK} strokeWidth={3} />
			{marks.map((m, i) => <g key={i} opacity={prog(f, m.at, 10)}><line x1={X(m.v)} x2={X(m.v)} y1={y - 14} y2={y + 14} stroke={m.color ?? INK} strokeWidth={4} /><Sx x={X(m.v)} y={y + (i % 2 ? -26 : 48)} text={m.t} size={24} color={m.color ?? INK} anchor="middle" weight={700} at={-1000} /></g>)}
			{arrow ? <g opacity={prog(f, arrow.at, 10)}><path d={`M${X(arrow.from)},${y - 60} L${X(arrow.from) + 280},${y - 60} m-14,-10 l14,10 l-14,10`} fill="none" stroke={HEATC} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /><Sx x={X(arrow.from) + 10} y={y - 76} text={arrow.t} size={24} color={ORANGE} weight={700} at={-1000} /></g> : null}
		</g>
	);
};

// ---------- trial strip ----------
export const TRIALV = [974, 977, 705, 971];
export const TrialStrip: React.FC<{x: number; y: number; at: number; tick?: {v: number; at: number}; o?: number}> = ({x, y, at, tick, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const k = 0.42, H = 36;
	return (
		<g opacity={v}>
			<rect x={x + 960 * k} y={y - 16} width={22 * k} height={4 * (H + 14) + 14} fill="#d9e8f2" opacity={prog(f, at + 30, 14)} />
			<line x1={x + 975 * k} x2={x + 975 * k} y1={y - 16} y2={y + 4 * (H + 14)} stroke={BLUE} strokeWidth={2.5} strokeDasharray="8 6" opacity={prog(f, at + 30, 14)} />
			{TRIALV.map((t, i) => {
				const g = smooth(prog(f, at + i * 6, 16));
				return <g key={i}><Sx x={x - 14} y={y + i * (H + 14) + H * 0.75} text={String(i + 1)} size={24} color={INK_SOFT} anchor="end" weight={800} at={-1000} /><rect x={x} y={y + i * (H + 14)} width={t * k * g} height={H} rx={6} fill={i === 2 ? '#c9c3b8' : TEAL} /></g>;
			})}
			<Sx x={x} y={y + 4 * (H + 14) + 26} text="|ΔHc| of each trial" size={22} color={INK_SOFT} weight={700} at={-1000} />
			{tick ? <g opacity={prog(f, tick.at, 10)}><line x1={x + tick.v * k} x2={x + tick.v * k} y1={y - 24} y2={y + 4 * (H + 14)} stroke="#c4432f" strokeWidth={4} /><Sx x={x + tick.v * k} y={y - 30} text="−907" size={24} color="#c4432f" anchor="middle" weight={800} at={-1000} /></g> : null}
		</g>
	);
};
export {INK, INK_SOFT, TEAL};
