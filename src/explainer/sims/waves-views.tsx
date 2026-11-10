// Drawing parts for the wave engine (waves.ts): a wave along a line (as a curve, as
// particles, or both) and circular wavefronts seen from above. Each part works out its
// picture from the wave formulas at the current time, so curves, particles, labels and
// readouts always agree. Sizes and colours come from src/explainer/shared/tokens.ts.
import React, {useId} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_HAND} from '../kit';
import {CARD, INK, INK_SOFT, TONES, TYPE, Tone, ToneName, tone} from '../shared/tokens';
import {Wavefront, wavefronts} from './waves';

const clamp01 = (u: number) => Math.min(1, Math.max(0, u));
const fade = (f: number, at?: number, out?: number, dur = 12) => (at === undefined ? 1 : clamp01((f - at) / dur)) * (out === undefined ? 1 : 1 - clamp01((f - out) / dur));

export type WaveClock = {
	/** Scene frame at which the wave starts moving (time is 0 before then). */
	at?: number;
	/** Wave seconds per scene second (default 1). Real waves are fast: for a 0.4 s period use 1; for sound or light use a tiny rate. */
	rate?: number;
};
/** Wave time (in the wave's own seconds) at the current scene frame. Use one clock for every part in the scene. */
export const useWaveTime = (clock: WaveClock = {}) => {
	const f = useCurrentFrame();
	const {fps} = useVideoConfig();
	return (Math.max(0, f - (clock.at ?? 0)) / fps) * (clock.rate ?? 1);
};

// ------------------------------------------------------------ wave along a line
/** Frame rectangle and the world it shows: x from x0 to x1, displacement from -yMax to +yMax. */
export type WaveStage = {x: number; y: number; w: number; h: number; x0: number; x1: number; yMax: number};
export const waveScale = (s: WaveStage) => ({
	sx: (wx: number) => s.x + ((wx - s.x0) / (s.x1 - s.x0)) * s.w,
	sy: (wy: number) => s.y + s.h / 2 - (wy / s.yMax) * (s.h / 2),
	kx: s.w / (s.x1 - s.x0),
});
export type WaveCurve = {
	fn: (x: number, t: number) => number;
	tone: ToneName | Tone; width?: number; dashed?: boolean; opacity?: number;
	/** Hand label, placed just above the curve at this world x. */
	label?: string; labelAt?: number;
	at?: number; out?: number;
};
export type WaveParticles = {
	fn: (x: number, t: number) => number;
	count: number;
	/** transverse: particles move up and down. longitudinal: they move back and forth, drawn as a band of `rows` rows. */
	mode: 'transverse' | 'longitudinal';
	tone?: ToneName | Tone; r?: number; rows?: number;
	/** Position (from 0) of one particle to pick out in amber, with a guide showing the line it moves along. */
	follow?: number;
	at?: number; out?: number;
};
/**
 * A wave along a line. `curves` are drawn as graphs of displacement against position
 * (several waves and their sum, for superposition). `particles` shows the medium itself.
 * `span` draws a labelled bracket between two positions (one wavelength); `nodes` and
 * `antinodes` mark a standing wave; `ends` draws a fixed post or an open end.
 */
export const WaveStringView: React.FC<{
	stage: WaveStage; t: number;
	curves?: readonly WaveCurve[];
	particles?: WaveParticles;
	/** Rest line (default true). */
	axis?: boolean;
	span?: {from: number; to: number; label: string; at?: number; out?: number};
	nodes?: readonly number[]; antinodes?: readonly number[];
	/** Label the first node and antinode (default true). */
	nodeLabels?: boolean;
	marksAt?: number;
	ends?: {left?: 'fixed' | 'open'; right?: 'fixed' | 'open'};
	opacity?: number;
}> = ({stage, t, curves = [], particles, axis = true, span, nodes = [], antinodes = [], nodeLabels = true, marksAt, ends, opacity = 1}) => {
	const f = useCurrentFrame();
	const S = waveScale(stage), mid = S.sy(0);
	const hand = (size: number): React.CSSProperties => ({fontFamily: FONT_HAND, fontWeight: 700, fontSize: size});
	const samples = Math.max(120, Math.round(stage.w / 5));
	const dots: React.ReactNode[] = [];
	let guide: React.ReactNode = null;
	if (particles) {
		const o = fade(f, particles.at, particles.out);
		const pt = tone(particles.tone ?? 'blue'), r = particles.r ?? 9;
		const rows = particles.mode === 'longitudinal' ? particles.rows ?? 5 : 1, band = Math.min(stage.h * 0.5, rows * r * 3.4);
		for (let i = 0; i < particles.count && o > 0.001; i++) {
			const x0 = stage.x0 + ((i + 0.5) / particles.count) * (stage.x1 - stage.x0), s = particles.fn(x0, t);
			const px = particles.mode === 'transverse' ? S.sx(x0) : S.sx(x0) + s * S.kx, followed = i === particles.follow;
			const c = followed ? TONES.amber : pt;
			for (let row = 0; row < rows; row++) {
				const py = particles.mode === 'transverse' ? S.sy(s) : mid + (rows === 1 ? 0 : (row / (rows - 1) - 0.5) * band);
				dots.push(<circle key={`${i}-${row}`} cx={px} cy={py} r={followed ? r * 1.25 : r} fill={c.stroke} stroke={c.ink} strokeWidth={followed ? 3 : 1.6} opacity={o} />);
			}
			if (followed) {
				const rest = S.sx(x0);
				guide = particles.mode === 'transverse'
					? <line x1={rest} x2={rest} y1={stage.y + 6} y2={stage.y + stage.h - 6} stroke={TONES.amber.stroke} strokeWidth={4} strokeDasharray="8 9" opacity={0.8 * o} />
					: <line x1={rest - stage.w * 0.05} x2={rest + stage.w * 0.05} y1={mid + band / 2 + 26} y2={mid + band / 2 + 26} stroke={TONES.amber.stroke} strokeWidth={5} strokeLinecap="round" opacity={0.9 * o} />;
			}
		}
	}
	const marks = fade(f, marksAt);
	const end = (side: 'left' | 'right', kind?: 'fixed' | 'open') => {
		if (!kind) return null;
		const ex = side === 'left' ? stage.x : stage.x + stage.w;
		return kind === 'fixed'
			? <rect key={side} x={ex - 9} y={mid - stage.h * 0.3} width={18} height={stage.h * 0.6} rx={6} fill={INK_SOFT} stroke={INK} strokeWidth={3} />
			: <path key={side} d={`M${ex},${mid - stage.h * 0.3} V${mid + stage.h * 0.3}`} stroke={INK_SOFT} strokeWidth={5} strokeDasharray="5 11" strokeLinecap="round" />;
	};
	return (
		<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', opacity}}>
			{axis ? <line x1={stage.x} x2={stage.x + stage.w} y1={mid} y2={mid} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="3 10" strokeLinecap="round" /> : null}
			{marks > 0.001 ? <g opacity={marks}>
				{antinodes.map((a, i) => <line key={`a${i}`} x1={S.sx(a)} x2={S.sx(a)} y1={stage.y + 8} y2={stage.y + stage.h - 8} stroke={TONES.amber.stroke} strokeWidth={4} strokeDasharray="8 9" />)}
			</g> : null}
			{guide}
			{curves.map((c, i) => {
				const o = fade(f, c.at, c.out) * (c.opacity ?? 1);
				if (o <= 0.001) return null;
				const ct = tone(c.tone);
				let d = '';
				for (let k = 0; k <= samples; k++) { const wx = stage.x0 + (k / samples) * (stage.x1 - stage.x0); d += `${k ? 'L' : 'M'}${S.sx(wx).toFixed(1)},${S.sy(c.fn(wx, t)).toFixed(1)} `; }
				const lx = c.labelAt ?? stage.x0 + (stage.x1 - stage.x0) * 0.12;
				return (
					<g key={i} opacity={o}>
						<path d={d} fill="none" stroke={ct.stroke} strokeWidth={c.width ?? 6} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={c.dashed ? '14 12' : undefined} />
						{c.label ? <text x={S.sx(lx)} y={Math.max(stage.y + 30, S.sy(c.fn(lx, t)) - 22)} textAnchor="middle" style={hand(TYPE.handSmall)} fill={ct.ink} stroke={CARD} strokeWidth={7} paintOrder="stroke">{c.label}</text> : null}
					</g>
				);
			})}
			{dots}
			{end('left', ends?.left)}{end('right', ends?.right)}
			{marks > 0.001 ? <g opacity={marks}>
				{nodes.map((n, i) => <circle key={`n${i}`} cx={S.sx(n)} cy={mid} r={11} fill={INK} stroke={CARD} strokeWidth={3} />)}
				{nodeLabels && nodes.length ? <text x={S.sx(nodes[Math.min(1, nodes.length - 1)])} y={stage.y + stage.h + 36} textAnchor="middle" style={hand(TYPE.handSmall)} fill={INK} stroke={CARD} strokeWidth={7} paintOrder="stroke">node: never moves</text> : null}
				{nodeLabels && antinodes.length ? <text x={S.sx(antinodes[0])} y={stage.y - 12} textAnchor="middle" style={hand(TYPE.handSmall)} fill={TONES.amber.ink}>antinode: moves most</text> : null}
			</g> : null}
			{span ? (() => {
				const o = fade(f, span.at, span.out), x1 = S.sx(span.from), x2 = S.sx(span.to), by = stage.y + stage.h + 34;
				return o <= 0.001 ? null : (
					<g opacity={o}>
						<path d={`M${x1},${by - 14} V${by + 14} M${x2},${by - 14} V${by + 14} M${x1},${by} H${x2}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />
						<path d={`M${x1},${by - 14} V${mid} M${x2},${by - 14} V${mid}`} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="5 8" />
						<text x={(x1 + x2) / 2} y={by + 50} textAnchor="middle" style={hand(TYPE.hand)} fill={INK}>{span.label}</text>
					</g>
				);
			})() : null}
		</svg>
	);
};

// ------------------------------------------------------- wavefronts from above
/** Frame rectangle and the world it shows. The scale is equal both ways, so circles stay circles; y points up. */
export type FrontStage = {x: number; y: number; w: number; h: number; world: {x0: number; x1: number; y0: number; y1: number}};
export const frontScale = (s: FrontStage) => {
	const b = s.world, k = Math.min(s.w / (b.x1 - b.x0), s.h / (b.y1 - b.y0));
	const ox = s.x + (s.w - (b.x1 - b.x0) * k) / 2, oy = s.y + (s.h + (b.y1 - b.y0) * k) / 2;
	return {k, sx: (wx: number) => ox + (wx - b.x0) * k, sy: (wy: number) => oy - (wy - b.y0) * k};
};
export type FrontRing = Wavefront & {tone?: ToneName | Tone; dashed?: boolean};
/**
 * Crests (solid) and troughs (dashed) spreading from one source that may be moving.
 * Pass the result to WavefrontView as `rings`.
 */
export const ringsFrom = (o: {source: (t: number) => readonly [number, number]; speed: number; period: number; t: number; maxRadius: number; tone?: ToneName | Tone; troughs?: boolean}): FrontRing[] => [
	...wavefronts(o).map(r => ({...r, tone: o.tone})),
	...(o.troughs === false ? [] : wavefronts({...o, offset: 0.5}).map(r => ({...r, tone: o.tone, dashed: true}))),
];
export type FrontPoint = {x: number; y: number; tone?: ToneName | Tone; label?: string; labelSide?: 'left' | 'right' | 'above' | 'below'; r?: number};
/**
 * Wavefronts seen from above, clipped to the stage. `points` are sources, listeners or a
 * test point; `paths` are straight lines between world points (the two paths to a point).
 * Rings fade as they spread, as real ripples do.
 */
export const WavefrontView: React.FC<{
	stage: FrontStage; rings: readonly FrontRing[];
	points?: readonly FrontPoint[];
	paths?: readonly {from: readonly [number, number]; to: readonly [number, number]; tone?: ToneName | Tone; dashed?: boolean}[];
	/** Rings fade to this share of full strength at `fadeRadius` (world units; default: half the stage width). */
	fadeRadius?: number;
	frame?: boolean; opacity?: number;
}> = ({stage, rings, points = [], paths = [], fadeRadius, frame = true, opacity = 1}) => {
	const S = frontScale(stage), id = `fronts-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
	const far = fadeRadius ?? (stage.world.x1 - stage.world.x0) / 2;
	return (
		<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', opacity}}>
			<defs><clipPath id={id}><rect x={stage.x} y={stage.y} width={stage.w} height={stage.h} rx={14} /></clipPath></defs>
			{frame ? <rect x={stage.x} y={stage.y} width={stage.w} height={stage.h} rx={14} fill={CARD} stroke={INK} strokeWidth={4} /> : null}
			<g clipPath={`url(#${id})`}>
				{rings.map((r, i) => r.r * S.k < 3 ? null : <circle key={i} cx={S.sx(r.x)} cy={S.sy(r.y)} r={r.r * S.k} fill="none" stroke={tone(r.tone ?? 'blue').stroke} strokeWidth={r.dashed ? 3 : 5} strokeDasharray={r.dashed ? '6 10' : undefined} opacity={(r.dashed ? 0.6 : 1) * (1 - 0.65 * clamp01(r.r / far))} />)}
				{paths.map((p, i) => <line key={i} x1={S.sx(p.from[0])} y1={S.sy(p.from[1])} x2={S.sx(p.to[0])} y2={S.sy(p.to[1])} stroke={tone(p.tone ?? 'ink').stroke} strokeWidth={5} strokeLinecap="round" strokeDasharray={p.dashed ? '10 9' : undefined} />)}
			</g>
			{points.map((p, i) => {
				const pt = tone(p.tone ?? 'ink'), px = S.sx(p.x), py = S.sy(p.y), r = p.r ?? 14, side = p.labelSide ?? 'above';
				const lx = side === 'left' ? px - r - 12 : side === 'right' ? px + r + 12 : px, ly = side === 'above' ? py - r - 14 : side === 'below' ? py + r + 40 : py + 13;
				return (
					<g key={i}>
						<circle cx={px} cy={py} r={r} fill={pt.stroke} stroke={CARD} strokeWidth={4} />
						{p.label ? <text x={lx} y={ly} textAnchor={side === 'left' ? 'end' : side === 'right' ? 'start' : 'middle'} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall}} fill={pt.ink} stroke={CARD} strokeWidth={8} paintOrder="stroke">{p.label}</text> : null}
					</g>
				);
			})}
		</svg>
	);
};
