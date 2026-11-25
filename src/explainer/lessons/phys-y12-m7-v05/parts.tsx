// Lesson parts for phys-y12-m7-v05: the bench layout (painted optical bench, laser lifted on a coded block, slide holder
// with a coded slit, screen carrier) with its slit close-up and face-on screen view, the model duel table (Newton and
// Huygens, one row at a time) and its mini diagrams, and v04's parts re-exported.
// Colour key (design, Revision 2): teal wavefronts and wavelets are the wave-model role colour, never a light colour;
// laser light in its true colour (650 nm red, 532 nm green); particle predictions grey dots and straight arrows; sound
// fronts grey; answers in dark-ink frames; ticks ink; mistakes slate (root rule R1).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {CARD, INK, TONES} from '../../shared/tokens';
import {wlColor} from '../../physics/light/spectrum';
import {LPlate, MIRROR} from '../../physics/light/plates';
import {BENCH_PLATES, OpticsBench, ScreenView, benchGeom} from '../../physics/light/bench';
import type {BenchAt, SlideKind} from '../../physics/light/bench';
import {ApertureWaves, Barrier} from '../../physics/light/wavefronts';
import {GREY, LIGHT, Lbl, NAVY, ORANGE, ROSE, Shrunk, Strip, V04_PLATES, fx, sci} from '../phys-y12-m7-v04/parts';
import {L_SCREEN, bandMm, slitBright} from './common';

export {GREY, Lbl, NAVY, ORANGE, ROSE, Shrunk, Strip, fx, sci};
/** Pale amber for the spectroscope's light and the doorway beam (as last time). */
export const LIGHT_AMBER = LIGHT;
export const V05_PLATES = [...new Set([...V04_PLATES, ...BENCH_PLATES, MIRROR.src])];
export const TEAL = TONES.teal;
export const RED_L = wlColor(650), GREEN_L = wlColor(532);
export const RED_INK = '#b8322a';

// ---------------------------------------------------------------- the bench (scenes 1, 9, 11)
export const B1: BenchAt = {x: 96, y: 470, w: 1300, g: 1.6, ap: 330, slit: 760, scr: 1250};
export const SLIT_ZOOM = {x: 420, y: 660, w: 300, h: 140};
export const SCREEN_ZOOM = {x: 800, y: 660, w: 1020, h: 140};
/** Screen window (mm either side of centre) shown in the face-on view. */
export const SCREEN_MM = 60;
/** The bench with the slit (width a mm) and its two close-ups: the slit and the face-on screen. */
export const BenchRig: React.FC<{b?: BenchAt; a: number; lambda: number; color: string; beam?: number; kind?: SlideKind; zoom?: number; hair?: boolean; bracket?: number; opacity?: number}> = ({b = B1, a, lambda, color, beam = 1, kind = 'single', zoom = 1, hair = false, bracket = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const g = benchGeom(b);
	const W = bandMm(a, lambda);
	const fan = Math.min(70, 4 + W * 0.9);
	const bright = (u: number) => (hair ? hairBright(u * SCREEN_MM, lambda) : slitBright(u * SCREEN_MM, a, lambda));
	const SZ = SLIT_ZOOM, CZ = SCREEN_ZOOM;
	const gapPx = hair ? 6 : Math.max(6, a * 400);
	const halfPx = ((W / 2) / SCREEN_MM) * (CZ.w / 2);
	return (
		<g opacity={opacity}>
			<OpticsBench b={b} beam={beam} color={color} spread={fan} slide={kind} gap={hair ? 1.5 : Math.max(1.5, a * 22)} />
			{zoom > 0.001 ? <g opacity={zoom}>
				<line x1={g.window.x} y1={g.window.y + g.window.h} x2={SZ.x} y2={SZ.y} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
				<line x1={g.window.x + g.window.w} y1={g.window.y + g.window.h} x2={SZ.x + SZ.w} y2={SZ.y} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
				<rect x={SZ.x} y={SZ.y} width={SZ.w} height={SZ.h} rx={8} fill={hair ? '#eef3f5' : '#34322f'} stroke={INK} strokeWidth={3} />
				{hair ? <line x1={SZ.x + SZ.w / 2} y1={SZ.y} x2={SZ.x + SZ.w / 2} y2={SZ.y + SZ.h} stroke="#3a2a1a" strokeWidth={gapPx} /> : <rect x={SZ.x + SZ.w / 2 - gapPx / 2} y={SZ.y + 8} width={gapPx} height={SZ.h - 16} fill={color} opacity={0.85} />}
				<line x1={g.card.x} y1={g.card.y + g.card.h} x2={CZ.x} y2={CZ.y} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
				<line x1={g.card.x + g.card.w} y1={g.card.y + g.card.h} x2={CZ.x + CZ.w} y2={CZ.y} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
				<ScreenView x={CZ.x} y={CZ.y} w={CZ.w} h={CZ.h} bright={bright} color={color} n={220} />
				{bracket > 0.001 ? <path d={`M${CZ.x + CZ.w / 2 - halfPx},${CZ.y - 10} v-14 M${CZ.x + CZ.w / 2 - halfPx},${CZ.y - 17} H${CZ.x + CZ.w / 2 + halfPx} M${CZ.x + CZ.w / 2 + halfPx},${CZ.y - 10} v-14`} stroke={RED_INK} strokeWidth={5} fill="none" opacity={bracket} /> : null}
			</g> : null}
		</g>
	);
};
/** A thin hair diffracts like a slit of the same width (Babinet): a spread pattern with a bright centre (schematic). */
const hairBright = (xMm: number, lambda: number) => Math.min(1, slitBright(xMm, 0.08, lambda) * 0.9 + (Math.abs(xMm) < 2 ? 0.4 : 0));
/** Readout of the simulated central band width (mm, rounded as the design shows them). */
export const bandText = (a: number, lambda: number) => `${fx(bandMm(a, lambda), 0)} mm`;
export {L_SCREEN};

// ---------------------------------------------------------------- the model duel (scenes 7, 8, 13, 14)
export const DUEL = {label: 96, newton: 470, huygens: 1150, observed: 1500, w: 660};
export type DuelRow = {key: string; label: string; newton: string; huygens: string; observed?: string};
export const DUEL_ROWS: DuelRow[] = [
	{key: 'refl', label: 'reflection', newton: '✓ explains it', huygens: '✓ explains it', observed: 'both fit'},
	{key: 'gap', label: 'gap or edge', newton: 'sharp shadow, no spreading', huygens: 'spreads into the shadow', observed: 'spreads into shadows'},
	{key: 'water', label: 'speed in water', newton: 'faster', huygens: 'slower', observed: `slower (Foucault, 1850)`},
];
/** Grey dots on straight arrows (the particle model) in a box. */
export const ParticleIcon: React.FC<{x: number; y: number; w: number; h: number; f: number; gap?: boolean; water?: boolean}> = ({x, y, w, h, f, gap = false, water = false}) => {
	const rows = gap ? [0.42, 0.5, 0.58] : [0.3, 0.5, 0.7];
	const bx = x + w * 0.45;
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={10} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
			{gap ? <><rect x={bx - 5} y={y + 6} width={10} height={h * 0.38 - 6} fill="#4a4643" /><rect x={bx - 5} y={y + h * 0.62} width={10} height={h * 0.38 - 6} fill="#4a4643" /><rect x={bx + 6} y={y + 6} width={x + w - bx - 12} height={h * 0.38 - 6} fill="#d9d3c7" /><rect x={bx + 6} y={y + h * 0.62} width={x + w - bx - 12} height={h * 0.38 - 6} fill="#d9d3c7" /></> : null}
			{water ? <rect x={bx} y={y + 4} width={x + w - bx - 4} height={h - 8} fill="#d6eaf2" /> : null}
			{rows.map((r, i) => {
				const yy = y + h * r;
				const dots = Array.from({length: 6}, (_, k) => {
					let u = ((f * 0.008 + k / 6 + i * 0.05) % 1);
					if (water) u = u < 0.45 ? u : 0.45 + (u - 0.45) * 1.25;
					return u > 0.98 ? null : <circle key={k} cx={x + 12 + u * (w - 24)} cy={yy} r={6} fill={GREY.stroke} />;
				});
				return <g key={i}><line x1={x + 10} y1={yy} x2={x + w - 14} y2={yy} stroke={GREY.stroke} strokeWidth={2} strokeDasharray="4 6" /><path d={`M${x + w - 24},${yy - 7} l12,7 l-12,7`} fill="none" stroke={GREY.stroke} strokeWidth={3} />{dots}</g>;
			})}
		</g>
	);
};
/** Teal wavefronts (the wave model) in a box: open fronts, fronts through a gap, or fronts slowing in water. */
export const WaveIcon: React.FC<{x: number; y: number; w: number; h: number; f: number; gap?: boolean; water?: boolean; id: string}> = ({x, y, w, h, f, gap = false, water = false, id}) => {
	const bx = x + w * 0.45;
	const box = {x: x + 3, y: y + 3, w: w - 6, h: h - 6};
	if (gap) return <g><rect x={x} y={y} width={w} height={h} rx={10} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2} /><ApertureWaves box={box} bx={bx} gap={[y + h * 0.42, y + h * 0.58]} lambda={28} phase={f / 22} color={TEAL.stroke} width={3} id={id} n={6} /><Barrier box={box} bx={bx} gaps={[[y + h * 0.42, y + h * 0.58]]} t={10} /></g>;
	const lines: React.ReactNode[] = [];
	const ph = (f / 22) % 1;
	for (let k = -1; k < 20; k++) {
		const xa = x + 10 + (k + ph) * 34;
		const xx = water && xa > bx ? bx + (xa - bx) * 0.6 : xa;
		if (xx < x + 6 || xx > x + w - 6) continue;
		lines.push(<line key={k} x1={xx} y1={y + 10} x2={xx} y2={y + h - 10} stroke={TEAL.stroke} strokeWidth={3} />);
	}
	return <g><rect x={x} y={y} width={w} height={h} rx={10} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2} />{water ? <rect x={bx} y={y + 4} width={x + w - bx - 4} height={h - 8} fill="#d6eaf2" /> : null}{lines}</g>;
};
/** A finished duel row as a compact summary strip (HTML), with optional ticks and crosses landing. */
export const DuelSummary: React.FC<{x: number; y: number; row: DuelRow; at: number; size?: number; observed?: number; ticks?: {n?: number; h?: number}; w?: number}> = ({x, y, row, at, size = 30, observed, ticks = {}, w = 1730}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.001) return null;
	const cell = (t: string, cw: number, color = INK) => <span style={{width: cw, display: 'inline-block', color, whiteSpace: 'normal'}}>{t}</span>;
	const mark = (k?: number, ok?: boolean) => (k !== undefined && f >= k ? <span style={{color: ok ? INK : GREY.ink, fontWeight: 900}}>{ok ? ' ✓' : ' ✗'}</span> : null);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, display: 'flex', alignItems: 'center', gap: 10, background: CARD, border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 12, padding: '4px 14px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size}}>
			{cell(row.label, 300)}
			<span style={{width: 440, display: 'inline-block', color: GREY.ink}}>{row.newton}{mark(ticks.n, row.key === 'refl')}</span>
			<span style={{width: 440, display: 'inline-block', color: TEAL.ink}}>{row.huygens}{mark(ticks.h, true)}</span>
			{observed !== undefined && f >= observed ? <span style={{width: 420, display: 'inline-block', color: INK, opacity: prog(f, observed, 12)}}>{row.observed}</span> : null}
		</div>
	);
};
export const MirrorThumb: React.FC<{x: number; y: number; w: number; opacity?: number}> = ({x, y, w, opacity = 1}) => <LPlate spec={MIRROR} p={{x, y, w}} opacity={opacity} />;
