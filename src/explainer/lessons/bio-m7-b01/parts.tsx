// M7 B01 drawing parts: the pathogen sorter (a coded branching tree with painted leaf thumbnails), the size ruler
// (a true scale bar whose length and unit label change with each zoom step), host circles with a pathogen glyph
// jumping between them, the coded rod inset with its DNA loop, one TB rod clipped from the bacilli plate for
// true-scale pairings, the misfolding row (normal prion copies crossfading to the misfolded plate one at a time),
// and small chips. B01 (M6), B07, B09 and B13 parts are imported, never edited. B02 imports HostRow and HostCircle.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {Ring, Sx, tw} from '../bio-m5-b13/shared';
import {CARD, EDGE, GREYT, GREY_INK, GTag, clamp01, lerp, smooth, vis} from '../bio-m6-b01/parts';
import {GreyCross, Tg} from '../bio-m6-b07/parts';
import {Pl, plH} from '../bio-m6-b09/parts';
import type {PB} from '../bio-m5-b07/shared';
import {FEAT, PLATES} from './assets';

export {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, scribbleEllipse, Ring, Sx, tw, CARD, EDGE, GREYT, GREY_INK, GTag, clamp01, lerp, smooth, vis, GreyCross, Tg, Pl, plH, FEAT, PLATES};
export type {PB};
export const TEAL_G = '#5f8f8a';

/** 0..1..0 pulse over d frames from at. */
export const pulse = (f: number, at: number, d = 36) => Math.max(0, Math.sin(clamp01((f - at) / d) * Math.PI));
/** Width that fits a plate's alpha box inside maxW x maxH (never stretched). */
export const fitW = (p: PB, maxW: number, maxH: number) => Math.min(maxW, (maxH * (p.box[2] - p.box[0])) / (p.box[3] - p.box[1]));
/** Screen point of a natural-pixel point (u, v) on a plate drawn at (cx, cy, w). */
export const ptOf = (p: PB, cx: number, cy: number, w: number, uv: [number, number]): [number, number] => {
	const k = w / (p.box[2] - p.box[0]);
	return [cx + (uv[0] - (p.box[0] + p.box[2]) / 2) * k, cy + (uv[1] - (p.box[1] + p.box[3]) / 2) * k];
};
export const kOf = (p: PB, w: number) => w / (p.box[2] - p.box[0]);

// ---------- one TB rod, clipped from the bacilli plate ----------
const ROD = (() => {
	const {a, b} = FEAT.rod;
	return {mx: (a[0] + b[0]) / 2, my: (a[1] + b[1]) / 2, L: Math.hypot(b[0] - a[0], b[1] - a[1]), ang: (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI};
})();
/** One painted TB rod, horizontal, `len` px long end to end (the plate scaled uniformly, clipped to that rod). */
export const OneRod: React.FC<{id: string; cx: number; cy: number; len: number; o?: number; rot?: number}> = ({id, cx, cy, len, o = 1, rot = 0}) => {
	if (o <= 0.01 || len <= 0.5) return null;
	const k = len / ROD.L;
	const wide = FEAT.rod.wide + 12;
	return (
		<g opacity={o} transform={`translate(${cx},${cy}) rotate(${rot - ROD.ang}) scale(${k}) translate(${-ROD.mx},${-ROD.my})`}>
			<defs>
				<clipPath id={id} clipPathUnits="userSpaceOnUse">
					<rect x={ROD.mx - ROD.L / 2 - 6} y={ROD.my - wide / 2} width={ROD.L + 12} height={wide} rx={wide / 2} transform={`rotate(${ROD.ang} ${ROD.mx} ${ROD.my})`} />
				</clipPath>
			</defs>
			<image href={staticFile(PLATES.tb.src)} x={0} y={0} width={2000} height={2000} clipPath={`url(#${id})`} />
		</g>
	);
};

/** The centre red blood cell, clipped from the m5x plate, `d` px across. */
export const OneRbc: React.FC<{id: string; cx: number; cy: number; d: number; o?: number}> = ({id, cx, cy, d, o = 1}) => {
	if (o <= 0.01) return null;
	const {c, r} = FEAT.rbc;
	const k = d / (2 * r);
	return (
		<g opacity={o} transform={`translate(${cx},${cy}) scale(${k}) translate(${-c[0]},${-c[1]})`}>
			<defs><clipPath id={id} clipPathUnits="userSpaceOnUse"><circle cx={c[0]} cy={c[1]} r={r} /></clipPath></defs>
			<image href={staticFile(PLATES.rbcs.src)} x={0} y={0} width={2000} height={2000} clipPath={`url(#${id})`} />
		</g>
	);
};

// ---------- coded rod inset: outline, DNA loop in the cytoplasm, no nucleus ----------
export const RodInset: React.FC<{x: number; y: number; w: number; h: number; o?: number; wallPulse?: number; dna?: number}> = ({x, y, w, h, o = 1, wallPulse = 0, dna = 1}) => {
	if (o <= 0.01) return null;
	const cx = x + w / 2, cy = y + h / 2;
	const loop = Array.from({length: 73}, (_, i) => {
		const t = (i / 72) * Math.PI * 2;
		const r = 1 + 0.18 * Math.sin(t * 5) + 0.08 * Math.cos(t * 9);
		return `${i ? 'L' : 'M'}${(cx + Math.cos(t) * w * 0.2 * r).toFixed(1)},${(cy + Math.sin(t) * h * 0.24 * r).toFixed(1)}`;
	}).join(' ') + ' Z';
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={h / 2} fill="#f7e9e6" stroke={wallPulse > 0.02 ? AMBER : '#b07a72'} strokeWidth={5 + 8 * wallPulse} />
			<rect x={x + 12} y={y + 12} width={w - 24} height={h - 24} rx={(h - 24) / 2} fill="none" stroke="#c99a92" strokeWidth={2} />
			<path d={loop} fill="none" stroke="#6e2a63" strokeWidth={3.5} opacity={dna} />
		</g>
	);
};

// ---------- host circles ----------
export const HostCircle: React.FC<{x: number; y: number; r?: number; o?: number; ill?: number; inner?: number; label?: string; labelO?: number; grey?: number}> = ({x, y, r = 56, o = 1, ill = 0, inner = 0, label, labelO = 1, grey = 0}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o * (1 - 0.45 * grey)}>
			<circle cx={x} cy={y} r={r} fill="#f4efe4" stroke={INK_SOFT} strokeWidth={3.5} />
			{inner > 0.01 ? <g opacity={inner}>{[[-14, -8], [12, -12], [0, 12], [-18, 14], [18, 10]].map(([dx, dy], i) => <circle key={i} cx={x + dx * r / 56} cy={y + dy * r / 56} r={4.5} fill={GREYT} />)}</g> : null}
			{ill > 0.01 ? <circle cx={x} cy={y} r={r - 7} fill="none" stroke="#c4432f" strokeWidth={4} strokeDasharray="7 6" opacity={ill} /> : null}
			{label ? <Sx x={x} y={y + r + 34} text={label} size={24} color={GREY_INK} weight={600} anchor="middle" opacity={labelO} /> : null}
		</g>
	);
};
/** A row of host circles; from `jumpAt` the pathogen glyph hops circle to circle (arrows draw as it goes). */
export const HostRow: React.FC<{xs: number[]; y: number; r?: number; at: number; jumpAt?: number; step?: number; inner?: number; o?: number; glyph?: PB; glyphW?: number; grey?: number}> = ({xs, y, r = 56, at, jumpAt, step = 34, inner = 0, o = 1, glyph = PLATES.tb, glyphW = 54, grey = 0}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const n = xs.length;
	const t = jumpAt === undefined ? -1 : (f - jumpAt) / step;
	return (
		<g opacity={o * (1 - 0.45 * grey)}>
			{xs.map((x, i) => <HostCircle key={i} x={x} y={y} r={r} o={prog(f, at + i * 5, 12)} inner={inner} />)}
			{jumpAt !== undefined ? xs.slice(0, -1).map((x, i) => (f >= jumpAt + i * step ? (
				<g key={'a' + i}>
					<DrawPath d={`M${x + r * 0.7},${y - r * 0.7} Q${(x + xs[i + 1]) / 2},${y - r * 2} ${xs[i + 1] - r * 0.7},${y - r * 0.7}`} at={jumpAt + i * step} dur={step - 6} color={INK_SOFT} width={3.5} />
				</g>
			) : null)) : null}
			{jumpAt !== undefined ? xs.map((x, i) => (t >= i ? <Pl key={'g' + i} p={glyph} cx={x} cy={y} w={glyphW} o={i === 0 ? 1 : prog(f, jumpAt + i * step - 2, 6)} /> : null)) : null}
			{t > 0 && t < n - 1 ? (() => {
				const k = Math.floor(t), u = smooth(t - k);
				const x0 = xs[k], x1 = xs[k + 1];
				const gx = lerp(x0, x1, u), gy = y - Math.sin(u * Math.PI) * r * 1.4;
				return <Pl p={glyph} cx={gx} cy={gy} w={glyphW} />;
			})() : null}
		</g>
	);
};

// ---------- the pathogen sorter ----------
export const BR_X = [360, 960, 1560];
export const BR_NAME = ['microorganisms', 'macroorganisms', 'non-cellular'];
export type Leaf = {name: string; x: number; br: number; p: PB};
export const LEAVES: Leaf[] = [
	{name: 'bacteria', x: 170, br: 0, p: PLATES.tb},
	{name: 'fungi', x: 360, br: 0, p: PLATES.hyphae},
	{name: 'protozoa', x: 550, br: 0, p: PLATES.plasmo},
	{name: 'helminths', x: 850, br: 1, p: PLATES.tapeworm},
	{name: 'ectoparasites', x: 1070, br: 1, p: PLATES.tick},
	{name: 'viruses', x: 1370, br: 2, p: PLATES.virus},
	{name: 'viroids', x: 1560, br: 2, p: PLATES.viroid},
	{name: 'prions', x: 1750, br: 2, p: PLATES.prionM},
];
export const T_ROOT = 250, T_BAR = 350, T_NODE = 405, T_NAME = 450, T_DESC = 490, T_LBAR = 520, T_LEAF = 545, T_THUMB = 612, T_LNAME = 706;
/** Map a tree point to the screen for a tree drawn with root at (cx, cy) and scale s. */
export const treePt = (x: number, y: number, s = 1, cx = 960, cy = T_ROOT): [number, number] => [cx - 960 * s + x * s, cy - T_ROOT * s + y * s];
export type TreeProps = {
	o?: number; s?: number; cx?: number; cy?: number;
	rootAt?: number; forkAt?: number; brAt?: [number, number, number]; leafAt?: number[];
	grey?: number; brLit?: number[]; leafLit?: number[]; leafGrey?: number[]; qO?: number; nameO?: number; nameAt?: number[];
};
export const SorterTree: React.FC<TreeProps> = ({o = 1, s = 1, cx = 960, cy = T_ROOT, rootAt = -100, forkAt = -100, brAt = [-100, -100, -100], leafAt, grey = 0, brLit = [0, 0, 0], leafLit = [], leafGrey = [], qO = 1, nameO = 1, nameAt}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const la = leafAt ?? LEAVES.map(l => brAt[l.br]);
	const g = clamp01(grey);
	return (
		<g opacity={o} transform={`translate(${cx - 960 * s},${cy - T_ROOT * s}) scale(${s})`}>
			<g opacity={prog(f, rootAt, 14) * (1 - 0.4 * g)}>
				<rect x={860} y={T_ROOT - 32} width={200} height={62} rx={31} fill={CARD} stroke={INK_SOFT} strokeWidth={3} />
				<Sx x={960} y={T_ROOT + 11} text="pathogen" size={32} color={INK} weight={800} anchor="middle" />
			</g>
			{f >= forkAt ? <g opacity={1 - 0.5 * g}><DrawPath d={`M960,${T_ROOT + 30} L960,${T_BAR}`} at={forkAt} dur={10} color={INK_SOFT} width={4} /></g> : null}
			<Sx x={980} y={T_BAR - 22} text="made of cells?" size={36} color={AMBER_INK} hand at={forkAt} opacity={qO * (1 - 0.6 * g)} />
			{BR_X.map((bx, i) => {
				if (f < brAt[i]) return null;
				const lit = clamp01(brLit[i] ?? 0);
				const col = lit > 0.5 ? AMBER : INK_SOFT;
				const dimB = 1 - 0.5 * g * (1 - lit);
				const kids = LEAVES.map((l, k) => ({l, k})).filter(q => q.l.br === i);
				const x0 = Math.min(...kids.map(q => q.l.x)), x1 = Math.max(...kids.map(q => q.l.x));
				return (
					<g key={i} opacity={dimB}>
						<DrawPath d={i === 1 ? `M960,${T_BAR} L960,${T_NODE}` : `M960,${T_BAR} L${bx},${T_BAR} L${bx},${T_NODE}`} at={brAt[i]} dur={14} color={col} width={lit > 0.5 ? 6 : 4} />
						<circle cx={bx} cy={T_NODE} r={8} fill={col} opacity={prog(f, brAt[i] + 10, 6)} />
						<Sx x={bx} y={T_NAME} text={BR_NAME[i]} size={32} color={lit > 0.5 ? INK : GREY_INK} weight={800} anchor="middle" at={nameAt?.[i] ?? brAt[i] + 6} opacity={nameO} />
						<DrawPath d={`M${bx},${T_LBAR - 14} L${bx},${T_LBAR} M${x0},${T_LBAR} L${x1},${T_LBAR}`} at={brAt[i] + 8} dur={12} color={col} width={3} />
						{kids.map(({l, k}) => {
							const lo = prog(f, la[k], 12);
							if (lo <= 0.01) return null;
							const ll = clamp01(leafLit[k] ?? 0);
							const lg = clamp01(Math.max(g * (1 - ll), leafGrey[k] ?? 0));
							const dy = (1 - smooth(lo)) * -24;
							return (
								<g key={k} opacity={lo * (1 - 0.35 * lg)} transform={`translate(0,${dy})`}>
									<line x1={l.x} y1={T_LBAR} x2={l.x} y2={T_LEAF} stroke={col} strokeWidth={3} />
									<rect x={l.x - 88} y={T_LEAF} width={176} height={190} rx={16} fill={CARD} stroke={ll > 0.5 ? AMBER : EDGE} strokeWidth={ll > 0.5 ? 4 : 2.5} />
									<Pl p={l.p} cx={l.x} cy={T_THUMB} w={fitW(l.p, 150, 104)} dim={lg} />
									<Sx x={l.x} y={T_LNAME} text={l.name} size={l.name.length > 11 ? 24 : 27} color={ll > 0.5 ? INK : GREY_INK} weight={700} anchor="middle" />
								</g>
							);
						})}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the size ruler ----------
export type RulerState = {at: number; len: number; label: string};
/** A true scale bar: its length (px) and label change at each state's frame (crossfaded). */
export const SizeRuler: React.FC<{x: number; y: number; states: RulerState[]; o?: number; at?: number}> = ({x, y, states, o = 1, at}) => {
	const f = useCurrentFrame();
	const appear = at === undefined ? 1 : prog(f, at, 14);
	if (o * appear <= 0.01) return null;
	let i = 0;
	states.forEach((s, k) => { if (f >= s.at) i = k; });
	const cur = states[i], prev = states[Math.max(0, i - 1)];
	const t = i === 0 ? 1 : smooth(prog(f, cur.at, 18));
	const len = lerp(prev.len, cur.len, t);
	return (
		<g opacity={o * appear}>
			<line x1={x} x2={x + len} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			<line x1={x} x2={x} y1={y - 14} y2={y + 14} stroke={INK} strokeWidth={4} />
			<line x1={x + len} x2={x + len} y1={y - 14} y2={y + 14} stroke={INK} strokeWidth={4} />
			<line x1={x + len / 2} x2={x + len / 2} y1={y - 8} y2={y + 8} stroke={INK_SOFT} strokeWidth={3} />
			{i > 0 ? <Sx x={x} y={y + 44} text={prev.label} size={26} color={INK_SOFT} weight={700} opacity={1 - t} /> : null}
			<Sx x={x} y={y + 44} text={cur.label} size={26} color={INK_SOFT} weight={700} opacity={t} />
		</g>
	);
};

// ---------- chips ----------
export const chipW = (text: string, size = 32) => tw(text, size, true) * 1.02 + 44;
/** An amber-edged hand chip; `dim` greys it. */
export const HChip: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; anchor?: 'start' | 'middle'; dim?: number; amber?: boolean}> = ({x, y, text, at, out, size = 32, anchor = 'start', dim = 0, amber = true}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	const w = chipW(text, size), h = size + 26;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	const d = clamp01(dim);
	return (
		<g opacity={o * (1 - 0.4 * d)}>
			<rect x={x0} y={y} width={w} height={h} rx={h / 2} fill={d > 0.5 ? '#f3f2ee' : amber ? '#fff6e2' : CARD} stroke={d > 0.5 ? EDGE : amber ? AMBER : INK_SOFT} strokeWidth={3} />
			<Sx x={x0 + 22} y={y + size + 5} text={text} size={size} color={d > 0.5 ? GREY_INK : INK} hand weight={700} />
		</g>
	);
};

// ---------- the misfolding row ----------
/** Five normal-form copies; the misfolded glyph slides in to touch the first, then each copy crossfades in turn. */
export const MisfoldRow: React.FC<{x0: number; y: number; dx: number; w: number; at: number; step?: number; n?: number; o?: number}> = ({x0, y, dx, w, at, step = 22, n = 5, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const inT = smooth(prog(f, at - 24, 24));
	return (
		<g opacity={o}>
			<Pl p={PLATES.prionM} cx={lerp(x0 - dx * 1.6, x0 - dx * 0.85, inT)} cy={y} w={w} o={prog(f, at - 30, 10)} />
			{Array.from({length: n}, (_, i) => {
				const c = prog(f, at + i * step, 14);
				const fl = pulse(f, at + i * step - 4, 20);
				return (
					<g key={i} opacity={prog(f, at - 40 + i * 3, 12)}>
						{fl > 0.01 ? <circle cx={x0 + i * dx} cy={y} r={w * 0.6} fill={AMBER} opacity={0.25 * fl} /> : null}
						<Pl p={PLATES.prionN} cx={x0 + i * dx} cy={y} w={w} o={1 - c} />
						<Pl p={PLATES.prionM} cx={x0 + i * dx} cy={y} w={w} o={c} />
					</g>
				);
			})}
		</g>
	);
};

/** A small coded ribosome dot cluster (for the generic bacterium's targets). */
export const RiboDots: React.FC<{pts: [number, number][]; o?: number; glow?: number}> = ({pts, o = 1, glow = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>{pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={6 + 3 * glow} fill={glow > 0.3 ? AMBER : '#7d6a8c'} stroke={AMBER_INK} strokeWidth={glow > 0.3 ? 1.5 : 0} />)}</g>
));
export const useF = () => useCurrentFrame();
void scribbleEllipse; void Ring; void GTag; void GreyCross; void Tg; void plH;
