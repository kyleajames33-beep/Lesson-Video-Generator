// M7 P06 board pieces on C12's soap parts (SoapSym, Ion, kpos), the M6 P02 practical kit and the P05 helpers.
// README for Claude:
// - AG / WC: line-up colours (agent: soap amber, detergent violet, water only grey; water: soft pale blue, hard teal).
// - Slot: one line-up slot: a tube plate (soft, hard, layers, emulsion) or a coded empty tube outline matching the
//   plates' tube, all at one scale (never stretched); optional cross-fade, rock-shake about the base, the two-line
//   chip ("soap | soft") above or below, and a thin coded line of control bubbles.
// - tp(S, u, v): a screen point on a slot from tube-plate pixels (TG in common.ts).
// - Ruler: the froth ruler beside a slot, zero at the liquid surface, 1 cm ticks, with a reading line at the froth top.
// - FrothBars: short vertical bars at given x positions, filling to the mean heights.
// - OilTimer: a small stopwatch ring whose hand sweeps from `start` and stops at `stop`, then shows its label.
// - CoatDrop: an oil droplet with n soap symbols over its surface (tails in, heads out), flown in between two frames.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, Sx, mw, picW, smooth} from '../chem-m6-p02/parts';
import type {PDef} from '../chem-m6-c01/assets';
import type {V2} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {Plate} from '../chem-m7-c06/parts';
import {OIL, OIL_SOFT, SoapSym} from '../chem-m7-c12/parts';
import {OW, ST, TG} from './common';

export const SOAPC = '#b07a12', DETC = '#7a5bb5', WATERC = '#8a847a', SOFTC = '#4f86ad', HARDC = '#2a9d8f';
export const GREENC = '#2f8a5b', TERRA = '#b5502b', NAVY = '#24407a';
export const AG = {soap: {t: 'soap', c: SOAPC, fill: '#fbeec4'}, det: {t: 'detergent', c: DETC, fill: '#e6ddf5'}, water: {t: 'water only', c: WATERC, fill: '#efece6'}};
export const WC = {soft: {t: 'soft', c: SOFTC}, hard: {t: 'hard', c: HARDC}};
export type Agent = keyof typeof AG;
export type Water = keyof typeof WC;

export type SlotP = {cx: number; top: number; h: number};
const PB = ST.soft.box;
export const tp = (S: SlotP, u: number, v: number): V2 => {
	const k = S.h / PB[3];
	return [S.cx - picW(ST.soft, S.h) / 2 + (u - PB[0]) * k, S.top + (v - PB[1]) * k];
};
export type Kind = 'soft' | 'hard' | 'layers' | 'emulsion' | 'empty';
const plateOf = (k: Kind): PDef | null => (k === 'soft' ? ST.soft : k === 'hard' ? ST.hard : k === 'layers' ? OW.layers : k === 'emulsion' ? OW.emulsion : null);

/** The coded empty tube (same outline as the plates' tube), stopper and block outline. */
export const EmptyTube: React.FC<{S: SlotP; o?: number; water?: boolean}> = ({S, o = 1, water = true}) => {
	if (o <= 0.01) return null;
	const [x0, y0] = tp(S, TG.x0, TG.stopBot), [x1, yb] = tp(S, TG.x1, TG.bottom);
	const [, ys] = tp(S, 0, TG.stopTop), [, ysurf] = tp(S, 0, TG.softSurf), [, yl] = tp(S, 0, TG.liqBot);
	const [bx0, by0] = tp(S, 701, TG.block), [bx1, by1] = tp(S, 1299, 1749);
	const r = (x1 - x0) / 2;
	return (
		<g opacity={o}>
			{water ? <path d={`M${x0 + 4},${ysurf} L${x1 - 4},${ysurf} L${x1 - 4},${yl} Q${(x0 + x1) / 2},${yl + r * 0.9} ${x0 + 4},${yl} Z`} fill="#dcebf6" opacity={0.7} /> : null}
			<path d={`M${x0},${y0} L${x0},${yb - r} Q${x0},${yb} ${(x0 + x1) / 2},${yb} Q${x1},${yb} ${x1},${yb - r} L${x1},${y0}`} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" />
			<rect x={x0 - 4} y={ys} width={x1 - x0 + 8} height={y0 - ys} rx={6} fill="#cfcac1" stroke={INK_SOFT} strokeWidth={2} />
			<rect x={bx0} y={by0} width={bx1 - bx0} height={by1 - by0} rx={6} fill="#e8d3b0" stroke="#b08d5e" strokeWidth={2} />
		</g>
	);
};

/** Two-line chip: agent over water, centred at cx with its top at y. */
export const Chip2: React.FC<{cx: number; y: number; agent: Agent; water: Water; at: number; size?: number; o?: number; glow?: number}> = ({cx, y, agent, water, at, size = 22, o = 1, glow}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, undefined, 10) * o;
	if (v <= 0.01) return null;
	const a = AG[agent], w = WC[water];
	const W = Math.max(mw(a.t, size, false, 800), mw(w.t + ' water', size, false, 700)) + 24, H = size * 2.7;
	const g = glow === undefined ? 0 : vis(f, glow, glow + 40);
	return (
		<g opacity={v} transform={`translate(0,${(1 - prog(f, at, 10)) * 10})`}>
			{g > 0.01 ? <rect x={cx - W / 2 - 6} y={y - 6} width={W + 12} height={H + 12} rx={14} fill="#f6d77a" opacity={0.6 * g} /> : null}
			<rect x={cx - W / 2} y={y} width={W} height={H} rx={10} fill={a.fill} stroke={a.c} strokeWidth={2.5} />
			<Sx x={cx} y={y + size * 1.15} text={a.t} size={size} color={a.c} anchor="middle" weight={800} at={-1000} />
			<Sx x={cx} y={y + size * 2.35} text={w.t + ' water'} size={size} color={w.c} anchor="middle" weight={700} at={-1000} />
		</g>
	);
};
export const chipH = (size = 22) => size * 2.7;

export type ChipSpec = {agent: Agent; water: Water; at: number; below?: boolean; glow?: number};
export const Slot: React.FC<{S: SlotP; at: number; out?: number; o?: number; kind: Kind; to?: Kind; swap?: number; swapDur?: number; shake?: number[]; chip?: ChipSpec; thin?: number; chipSize?: number}> = ({S, at, out, o = 1, kind, to, swap, swapDur = 30, shake = [], chip, thin, chipSize = 22}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const base = tp(S, 1000, 1749);
	const ang = shake.reduce((a, s) => a + (f >= s && f < s + 50 ? 8 * Math.sin(((f - s) / 5) * Math.PI) * Math.sin(((f - s) / 50) * Math.PI) : 0), 0);
	const p0 = plateOf(kind), p1 = to ? plateOf(to) : null;
	const s = swap === undefined || !to ? 0 : prog(f, swap, swapDur);
	const [x0] = tp(S, TG.x0, 0), [x1, ysurf] = tp(S, TG.x1, TG.softSurf);
	return (
		<g opacity={v}>
			<g transform={`rotate(${ang},${base[0]},${base[1]})`}>
				{s < 1 ? (p0 ? <Plate p={p0} cx={S.cx} top={S.top} h={S.h} o={1 - s} /> : <EmptyTube S={S} o={1 - s} />) : null}
				{to && s > 0 ? (p1 ? <Plate p={p1} cx={S.cx} top={S.top} h={S.h} o={s} /> : <EmptyTube S={S} o={s} />) : null}
				{thin !== undefined ? <g opacity={prog(f, thin, 12)}>{Array.from({length: 6}, (_, i) => <circle key={i} cx={x0 + 8 + ((x1 - x0 - 16) * i) / 5} cy={ysurf - 4} r={3.5} fill="#fff" stroke="#8fa6b5" strokeWidth={1.5} />)}</g> : null}
			</g>
			{chip ? <Chip2 cx={S.cx} y={chip.below ? S.top + S.h + 12 : S.top - chipH(chipSize) - 14} agent={chip.agent} water={chip.water} at={chip.at} size={chipSize} glow={chip.glow} /> : null}
		</g>
	);
};
/** Six slot centres in a row. */
export const row6 = (x0: number, gap: number, top: number, h: number): SlotP[] => Array.from({length: 6}, (_, i) => ({cx: x0 + i * gap, top, h}));
export const LINE: {agent: Agent; water: Water}[] = [{agent: 'soap', water: 'soft'}, {agent: 'soap', water: 'hard'}, {agent: 'det', water: 'soft'}, {agent: 'det', water: 'hard'}, {agent: 'water', water: 'soft'}, {agent: 'water', water: 'hard'}];

// ---------- froth ruler ----------
export const Ruler: React.FC<{S: SlotP; at: number; out?: number; hard?: boolean; read?: number; o?: number; side?: 1 | -1}> = ({S, at, out, hard = false, read, o = 1, side = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const surf = hard ? TG.hardSurf : TG.softSurf, topF = hard ? TG.hardTop : TG.softTop;
	const k = S.h / PB[3];
	const [xr, y0] = tp(S, side > 0 ? TG.x1 + 50 : TG.x0 - 50, surf);
	const cm = TG.cm * k, n = 7;
	const slide = (1 - smooth(prog(f, at, 16))) * 30 * side;
	const rw = Math.max(26, 30 * (S.h / 600));
	const xx = xr + slide + (side > 0 ? 0 : -rw);
	const [tx0, ytop] = tp(S, TG.x0, topF), [tx1] = tp(S, TG.x1, topF);
	const rd = read === undefined ? 0 : prog(f, read, 12);
	return (
		<g opacity={v}>
			<rect x={xx} y={y0 - n * cm - 6} width={rw} height={n * cm + 12} rx={3} fill="#f7f0d8" stroke="#9a8a5e" strokeWidth={2} />
			{Array.from({length: n * 5 + 1}, (_, i) => {
				const y = y0 - (i * cm) / 5, big = i % 5 === 0;
				const xe = side > 0 ? xx : xx + rw;
				return <line key={i} x1={xe} y1={y} x2={xe + side * (big ? rw * 0.7 : rw * 0.35)} y2={y} stroke="#6b5d36" strokeWidth={big ? 2 : 1} />;
			})}
			{Array.from({length: n + 1}, (_, i) => (i % 2 === 0 ? <Sx key={i} x={side > 0 ? xx + rw + 6 : xx - 6} y={y0 - i * cm + 6} text={String(i)} size={Math.max(16, rw * 0.7)} color="#6b5d36" anchor={side > 0 ? 'start' : 'end'} weight={700} at={-1000} /> : null))}
			<line x1={tx0 - 6} y1={y0} x2={xx + (side > 0 ? 0 : rw)} y2={y0} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="5 4" />
			{rd > 0.01 ? <line x1={tx0 - 6} y1={ytop} x2={xx + (side > 0 ? rw : 0)} y2={ytop} stroke={NAVY} strokeWidth={3.5} strokeDasharray="8 5" opacity={rd} /> : null}
			{void tx1}
		</g>
	);
};

// ---------- froth bars ----------
export const FrothBars: React.FC<{xs: number[]; base: number; vals: number[]; cols: string[]; at: number; k?: number; w?: number; o?: number; labels?: string[]; pulse?: {i: number[]; at: number}[]}> = ({xs, base, vals, cols, at, k = 30, w = 46, o = 1, labels, pulse = []}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<line x1={xs[0] - w} y1={base} x2={xs[xs.length - 1] + w} y2={base} stroke={INK_SOFT} strokeWidth={3} />
			{xs.map((x, i) => {
				const t = smooth(prog(f, at + 6 + i * 6, 20));
				const h = vals[i] * k * t;
				const pl = pulse.filter(p => p.i.includes(i)).reduce((a, p) => Math.max(a, vis(f, p.at, p.at + 40) * (0.5 + 0.5 * Math.sin((f - p.at) * 0.35))), 0);
				return (
					<g key={i}>
						{pl > 0.01 ? <rect x={x - w / 2 - 6} y={base - h - 6} width={w + 12} height={h + 6} rx={8} fill="#f6d77a" opacity={0.7 * pl} /> : null}
						<rect x={x - w / 2} y={base - h} width={w} height={Math.max(2, h)} rx={6} fill={cols[i]} opacity={0.85} />
						{labels ? <Sx x={x} y={base - h - 10} text={labels[i]} size={20} color={INK} anchor="middle" weight={700} at={-1000} opacity={t} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- oil timer ----------
export const OilTimer: React.FC<{x: number; y: number; r?: number; at: number; start: number; stop: number; label: string; o?: number; color?: string}> = ({x, y, r = 30, at, start, stop, label, o = 1, color = NAVY}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const run = Math.max(0, Math.min(f, stop) - start);
	const a = run * 0.25 - Math.PI / 2;
	const done = prog(f, stop, 10);
	const size = r * 0.62;
	return (
		<g opacity={v}>
			<rect x={x - 6} y={y - r - 14} width={12} height={10} rx={3} fill={INK_SOFT} />
			<circle cx={x} cy={y} r={r} fill="#fffdf8" stroke={done > 0.5 ? color : INK_SOFT} strokeWidth={3.5} />
			<line x1={x} y1={y} x2={x + Math.cos(a) * r * 0.75} y2={y + Math.sin(a) * r * 0.75} stroke={INK} strokeWidth={3} strokeLinecap="round" />
			<circle cx={x} cy={y} r={3} fill={INK} />
			{done > 0.01 ? <g opacity={done}><rect x={x - mw(label, size, false, 800) / 2 - 10} y={y + r + 6} width={mw(label, size, false, 800) + 20} height={size * 1.5} rx={size * 0.75} fill="#e7edf8" stroke={color} strokeWidth={2} /><Sx x={x} y={y + r + 6 + size * 1.08} text={label} size={size} color={color} anchor="middle" weight={800} at={-1000} /></g> : null}
		</g>
	);
};

// ---------- coated oil droplet ----------
export const CoatDrop: React.FC<{cx: number; cy: number; r: number; n: number; N?: number; at: number; build: [number, number]; o?: number; a0?: number; s?: number}> = ({cx, cy, r, n, N, at, build, o = 1, a0 = 0, s = 0.85}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const tot = N ?? n;
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill={OIL_SOFT} stroke={OIL} strokeWidth={3} />
			{Array.from({length: n}, (_, i) => {
				const a = a0 + (i / tot) * Math.PI * 2;
				const t = smooth(prog(f, build[0] + ((build[1] - build[0]) * i) / Math.max(1, n), 20));
				const rr = r + 20 + (1 - t) * 200;
				const a2 = a + (1 - t) * 0.7;
				return <SoapSym key={i} x={cx + Math.cos(a2) * rr} y={cy + Math.sin(a2) * rr} ang={a2 + Math.PI} s={s} len={(r * 0.8) / s} o={Math.min(1, t * 3)} />;
			})}
		</g>
	);
};

/** A drawn bracket over (dir -1) or under (dir 1) x1..x2 at y with a hand label. */
export const HBr: React.FC<{x1: number; x2: number; y: number; text: string; at: number; color?: string; size?: number; dir?: 1 | -1; o?: number}> = ({x1, x2, y, text, at, color = INK_SOFT, size = 24, dir = -1, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const d = 12 * dir;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x1},${y - d} L${x1},${y} L${x2},${y} L${x2},${y - d}`} at={at} dur={12} color={color} width={4} />
			<Sx x={(x1 + x2) / 2} y={y + (dir < 0 ? -14 : size + 10)} text={text} size={size} color={color} anchor="middle" hand weight={700} at={at + 6} />
		</g>
	);
};
export {INK, INK_SOFT, OIL, OIL_SOFT};
