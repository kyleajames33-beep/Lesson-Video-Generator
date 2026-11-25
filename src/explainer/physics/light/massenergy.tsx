// Mass-energy accounting kit for Module 7 (additive kit file, 25 November 2026; first used by phys-y12-m7-v16, offered
// to Module 8 nuclear videos). Course-neutral: every label, number and colour of meaning comes from the lesson.
// Plates (visible boxes measured from the alpha channel, threshold 20, on 25 November 2026):
//   fuel can (1113 x 1413, brief 191); painted flame (chemistry g1, 1400 x 1800); lit Bunsen burner (chemistry p01,
//   2000 x 2000). The power station and the top-pan balance are in the electromagnetism kit (transformer, bench).
// - SystemBox: a dashed system boundary with a mass bar inside; the bar's top slice (the mass that leaves) can be shown.
// - Particle: a labelled particle disc (electron, positron, proton, neutron, neutrino).
// - Nucleus: a cluster of proton and neutron discs (regrouping as `mix` runs from 0 to 1).
// - Nuclide: standard notation with the mass number over the atomic number (HTML).
// - LogBars: horizontal bars on a log axis.
// - TempBar: a vertical temperature bar (thermometer style) at a level from 0 to 1.
// - PhotonField: a deterministic field of photon packets drifting outwards; `cool` (0 to 1) lengthens and reddens them.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {INK} from '../../shared/tokens';
import {Packet} from './photo';
import type {LightSpec} from './plates';

const P = (name: string) => `assets/${name}.png`;
export const FUEL_CAN: LightSpec = {src: P('physics/y12p-fuel-can-v1'), W: 1113, H: 1413, box: [150, 294, 959, 1207]};
export const FLAME: LightSpec = {src: P('chemistry/g1-flame-v1'), W: 1400, H: 1800, box: [406, 145, 992, 1655]};
export const BUNSEN: LightSpec = {src: P('chemistry/p01-bunsen-lit-v2'), W: 2000, H: 2000, box: [647, 202, 1353, 1724]};
export const MASS_ENERGY_PLATES = [FUEL_CAN, FLAME, BUNSEN].map(s => s.src);
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});

/** A dashed system boundary (x, y, w, h) with a mass bar of height `bar` px standing on its floor; `out` px of the top are the mass that has left (drawn as a dashed empty slice). */
export const SystemBox: React.FC<{x: number; y: number; w: number; h: number; bar?: number; out?: number; barW?: number; mass: {stroke: string; soft: string}; label?: string; size?: number; opacity?: number; children?: React.ReactNode; showBar?: boolean}> = ({x, y, w, h, bar = h * 0.5, out = 0, barW = 70, mass, label, size = 28, opacity = 1, children, showBar = true}) => {
	if (opacity <= 0.001) return null;
	const bx = x + w - barW - 24, floor = y + h - 20;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} rx={14} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="16 10" />
			{children}
			{showBar ? <g>
				<rect x={bx} y={floor - bar + out} width={barW} height={Math.max(0, bar - out)} rx={6} fill={mass.soft} stroke={mass.stroke} strokeWidth={3.5} />
				{out > 0.5 ? <rect x={bx} y={floor - bar} width={barW} height={out} rx={4} fill="none" stroke={mass.stroke} strokeWidth={2.5} strokeDasharray="6 5" /> : null}
			</g> : null}
			{label ? <text x={x + 14} y={y - 14} style={T(size, INK)}>{label}</text> : null}
		</g>
	);
};

/** A particle disc with a symbol (for example e⁻, e⁺, p, n, ν). */
export const Particle: React.FC<{x: number; y: number; r?: number; color: string; text?: string; textColor?: string; opacity?: number; size?: number}> = ({x, y, r = 26, color, text, textColor = '#fff', opacity = 1, size}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={color} stroke="#fff" strokeWidth={3} />
		{text ? <text x={x} y={y + (size ?? r * 0.8) * 0.36} textAnchor="middle" style={T(size ?? r * 0.8, textColor)}>{text}</text> : null}
	</g>
));

/** A nucleus of `p` protons and `n` neutrons packed around (cx, cy); `mix` (0 to 1) shuffles them (regrouping). */
export const Nucleus: React.FC<{cx: number; cy: number; p: number; n: number; r?: number; proton: string; neutron: string; mix?: number; opacity?: number}> = ({cx, cy, p, n, r = 18, proton, neutron, mix = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const N = p + n;
	const pts = Array.from({length: N}, (_, i) => {
		const a = i * 2.39996 + mix * 2.1, d = r * 1.1 * Math.sqrt(i + 0.3);
		return [cx + d * Math.cos(a), cy + d * Math.sin(a)];
	});
	return <g opacity={opacity}>{pts.map((q, i) => <circle key={i} cx={q[0]} cy={q[1]} r={r} fill={i < 2 * Math.min(p, n) ? (i % 2 ? neutron : proton) : p > n ? proton : neutron} stroke="#fff" strokeWidth={2.5} />)}</g>;
};

/** Standard nuclide notation (HTML): mass number A over atomic number Z, left of the symbol; (x, y) is the left of the symbol's middle line. */
export const Nuclide: React.FC<{x: number; y: number; A: number; Z: number; sym: string; size?: number; color?: string; opacity?: number}> = ({x, y, A, Z, sym, size = 44, color = INK, opacity = 1}) => (opacity <= 0.001 ? null : (
	<div style={{position: 'absolute', left: x, top: y - size * 0.75, opacity, display: 'flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, color}}>
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: size * 0.55, lineHeight: 1.05, marginRight: 2}}><span>{A}</span><span>{Z}</span></div>
		<span style={{fontSize: size}}>{sym}</span>
	</div>
));

/** Horizontal bars on a log axis from 10^lo to 10^hi (x0 to x1). */
export type LogBar = {value: number; label: string; color: string; grow?: number};
export const logX = (x0: number, x1: number, lo: number, hi: number, v: number) => x0 + ((Math.log10(v) - lo) / (hi - lo)) * (x1 - x0);
export const LogBars: React.FC<{x0: number; x1: number; y: number; gap: number; h: number; lo: number; hi: number; bars: readonly LogBar[]; ticks: readonly number[]; tickLabel: (e: number) => string; size?: number; title?: string}> = ({x0, x1, y, gap, h, lo, hi, bars, ticks, tickLabel, size = 30, title}) => {
	const base = y + bars.length * gap;
	return (
		<g>
			{title ? <text x={x0} y={y - 24} style={T(size, INK)}>{title}</text> : null}
			<line x1={x0} y1={base} x2={x1 + 20} y2={base} stroke={INK} strokeWidth={4} />
			{ticks.map(e => <g key={e}><line x1={logX(x0, x1, lo, hi, 10 ** e)} y1={y - 6} x2={logX(x0, x1, lo, hi, 10 ** e)} y2={base + 12} stroke="#c2b8a6" strokeWidth={2.5} /><text x={logX(x0, x1, lo, hi, 10 ** e)} y={base + 14 + size} textAnchor="middle" style={T(size, INK, 700)}>{tickLabel(e)}</text></g>)}
			{bars.map((b, i) => {
				const w = (logX(x0, x1, lo, hi, b.value) - x0) * (b.grow ?? 1);
				return w <= 0.5 ? null : <rect key={i} x={x0} y={y + i * gap} width={w} height={h} rx={8} fill={b.color} opacity={0.85} />;
			})}
		</g>
	);
};

/** A vertical thermometer-style bar at (x, y, w, h), filled to `level` (0 to 1). */
export const TempBar: React.FC<{x: number; y: number; w: number; h: number; level: number; color: string; label?: string; size?: number}> = ({x, y, w, h, level, color, label, size = 28}) => (
	<g>
		<rect x={x} y={y} width={w} height={h} rx={w / 2} fill="#fffdf8" stroke={INK} strokeWidth={4} />
		<rect x={x + 6} y={y + 6 + (h - 12) * (1 - level)} width={w - 12} height={(h - 12) * level} rx={(w - 12) / 2} fill={color} />
		<circle cx={x + w / 2} cy={y + h + w * 0.4} r={w * 0.75} fill={color} stroke={INK} strokeWidth={4} />
		{label ? <text x={x + w / 2} y={y - 18} textAnchor="middle" style={T(size, INK)}>{label}</text> : null}
	</g>
);

/** A deterministic field of photon packets in a box, drifting with time t; `cool` (0 to 1) reddens and lengthens them. */
export const PhotonField: React.FC<{x: number; y: number; w: number; h: number; t: number; n?: number; cool?: number; opacity?: number}> = ({x, y, w, h, t, n = 26, cool = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const col = cool < 0.5 ? '#d18f1f' : '#c4582f';
	return (
		<g opacity={opacity}>
			{Array.from({length: n}, (_, i) => {
				const u = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1, v = Math.abs(Math.sin(i * 78.233) * 12345.678) % 1;
				const deg = (i * 47) % 360, sp = 30;
				const px = x + ((((u * w + Math.cos((deg * Math.PI) / 180) * sp * t) % w) + w) % w), py = y + ((((v * h + Math.sin((deg * Math.PI) / 180) * sp * t) % h) + h) % h);
				return <Packet key={i} x={px} y={py} deg={deg} len={44 + 30 * cool} color={col} opacity={0.75} />;
			})}
		</g>
	);
};
