// Module 8 kit, part 8: radioactive decay and the nucleus (additive kit file, 26 November 2026; first used by
// phys-y12-m8-v13 to v16). Course-neutral: every label, number and colour of meaning comes from the lesson.
// - Painted plates (native aspect only), visible boxes measured from the alpha channel (threshold 20) on 26 November
//   2026 and anchors read from the native pixels the same day:
//     sealed source (1536 x 1024): brass window centre (1360, 397) facing right;
//     Geiger counter (1774 x 887): GM tube end window (101, 357) facing left; dark display (1130, 342) to (1600, 466);
//     paper and aluminium absorbers (1312 x 1199): sheet centre about (630, 520), block foot y 1118;
//     counter tray (1536 x 1024): inner floor about (240, 300) to (1290, 740);
//     red and yellow counters (1254 x 1254): disc centre (620, 642).
// - CountDisplay: a coded count in the Geiger counter's dark display.
// - NucleonCluster: red "p" and grey "n" discs packed on a hexagonal spiral (seeded mixing), with an optional tremble.
// - NZChart: a schematic neutrons-against-protons chart with a band of stable nuclei (N = Z + 0.0065 Z^2, which passes
//   N/Z = 1.54 at Z = 82), the N = Z guide and markers; the lesson labels it "schematic".
// - Clicks: `clickRun` is a chance-engine run (sims/chance.ts, a `coins` experiment with one coin a frame and a small
//   chance), so clicks come at random with a steady average; `ClickTrace` draws them as uneven ticks.
// - Decay grid: `decayRun` is a particle-box run (sims/particle-box.ts) with one species changing by itself at a fixed
//   rate, so every nucleus has the same chance each moment whatever its age; `decayFrames` gives each nucleus's decay
//   frame for a fixed grid (`NucleiGrid`) and `remainingAt` the count left.
// - Balance: a coded two-pan comparison beam (a labelled diagram, not a weighing method), tipped by a set angle.
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {runTrials} from '../../sims/chance';
import type {ChanceRun} from '../../sims/chance';
import {runBox} from '../../sims/particle-box';
import type {BoxRun} from '../../sims/particle-box';
import {LEAD} from './neutron';
import type {LightSpec} from '../light/plates';

const P = (name: string) => `assets/physics/${name}.png`;
export const SEALED: LightSpec = {src: P('y12p-sealed-source-v1'), W: 1536, H: 1024, box: [164, 271, 1372, 825]};
export const GEIGER: LightSpec = {src: P('y12p-geiger-counter-v1'), W: 1774, H: 887, box: [99, 231, 1673, 711]};
export const PAPER_ABS: LightSpec = {src: P('y12p-absorber-paper-v1'), W: 1312, H: 1199, box: [332, 114, 952, 1118]};
export const ALU_ABS: LightSpec = {src: P('y12p-absorber-aluminium-v1'), W: 1312, H: 1199, box: [328, 107, 951, 1119]};
export const TRAY: LightSpec = {src: P('y12p-counter-tray-v1'), W: 1536, H: 1024, box: [132, 215, 1404, 806]};
export const COUNTER_RED = P('y12p-counter-red-v1'), COUNTER_YELLOW = P('y12p-counter-yellow-v1');
export {LEAD};
export const DECAY_AT = {window: [1360, 397], tube: [101, 357], display: [1130, 342, 1600, 466], sheet: [630, 520], trayFloor: [240, 300, 1290, 740], counter: [620, 642], counterR: 378} as const;
export const DECAY_PLATES = [SEALED, GEIGER, PAPER_ABS, ALU_ABS, TRAY, LEAD].map(s => s.src).concat([COUNTER_RED, COUNTER_YELLOW]);

const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);

/** A coded count in the display rectangle (x0, y0) to (x1, y1) on screen. */
export const CountDisplay: React.FC<{r: readonly [number, number, number, number]; text: string; color?: string; unit?: string}> = ({r, text, color = '#9fe6b8', unit}) => {
	const h = r[3] - r[1], size = Math.min(h * 0.62, 60);
	return (
		<g>
			<text x={(r[0] + r[2]) / 2} y={r[1] + h * 0.5 + size * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: color}}>{text}</text>
			{unit ? <text x={r[2] - 8} y={r[3] - 8} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: Math.max(18, size * 0.36), fill: color}}>{unit}</text> : null}
		</g>
	);
};

// ---------------------------------------------------------------- nucleon clusters
const hsh = (n: number, k: number) => { const s = Math.sin(n * 12.9898 + k * 78.233) * 43758.5453; return s - Math.floor(s); };
const HEX: [number, number][] = (() => {
	const pts: [number, number][] = [];
	for (let q = -8; q <= 8; q++) for (let r = -8; r <= 8; r++) pts.push([q + r / 2, (r * Math.sqrt(3)) / 2]);
	return pts.sort((a, b) => Math.hypot(a[0], a[1]) - Math.hypot(b[0], b[1]) || Math.atan2(a[1], a[0]) - Math.atan2(b[1], b[0]));
})();
/** Disc positions (unit = one disc diameter) and kinds for nP protons and nN neutrons, mixed by `seed`. */
export const clusterLayout = (nP: number, nN: number, seed = 1) => {
	const n = nP + nN, kinds: ('p' | 'n')[] = [];
	const order = Array.from({length: n}, (_, i) => i).sort((a, b) => hsh(a, seed) - hsh(b, seed));
	order.forEach((slot, k) => { kinds[slot] = k < nP ? 'p' : 'n'; });
	return HEX.slice(0, n).map((pt, i) => ({x: pt[0], y: pt[1], kind: kinds[i]}));
};
export type ClusterDisc = {x: number; y: number; kind: 'p' | 'n'};
/** A packed nucleus: `override` changes a disc's kind or hides it (o 0); tremble shakes each disc a little. */
export const NucleonCluster: React.FC<{cx: number; cy: number; r: number; discs: readonly ClusterDisc[]; pFill: string; nFill: string; tremble?: number; f?: number; opacity?: number; letters?: boolean; hide?: readonly number[]; flip?: Readonly<Record<number, 'p' | 'n'>>; glow?: readonly number[]; glowColor?: string}> = ({cx, cy, r, discs, pFill, nFill, tremble = 0, f = 0, opacity = 1, letters = true, hide = [], flip = {}, glow = [], glowColor = '#f2c14e'}) => {
	if (opacity <= 0.001) return null;
	const order = discs.map((d, i) => ({d, i})).sort((a, b) => a.d.y - b.d.y);
	return (
		<g opacity={opacity}>
			{order.map(({d, i}) => {
				if (hide.includes(i)) return null;
				const kind = flip[i] ?? d.kind, x = cx + d.x * 2 * r + tremble * 2.2 * Math.sin(f * 0.9 + i * 1.7), y = cy + d.y * 2 * r + tremble * 2.2 * Math.cos(f * 1.1 + i * 2.3);
				return <g key={i}>
					{glow.includes(i) ? <circle cx={x} cy={y} r={r * 1.6} fill={glowColor} opacity={0.55} /> : null}
					<circle cx={x} cy={y} r={r} fill={kind === 'p' ? pFill : nFill} stroke={INK} strokeWidth={Math.max(1.5, r * 0.1)} />
					{letters && r >= 17 ? <text x={x} y={y + r * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(19, r * 0.95), fill: '#ffffff'}}>{kind}</text> : null}
				</g>;
			})}
		</g>
	);
};
/** Screen point of disc i in a cluster. */
export const discAt = (cx: number, cy: number, r: number, d: ClusterDisc): [number, number] => [cx + d.x * 2 * r, cy + d.y * 2 * r];

// ---------------------------------------------------------------- N against Z (schematic)
export type NZBoxG = {x: number; y: number; w: number; h: number; zMax: number; nMax: number};
export const nzX = (b: NZBoxG, Z: number) => b.x + (Z / b.zMax) * b.w;
export const nzY = (b: NZBoxG, N: number) => b.y + b.h - (N / b.nMax) * b.h;
/** Neutron number at the middle of the band of stable nuclei (schematic fit). */
export const bandN = (Z: number) => Z + 0.0065 * Z * Z;
export const NZChart: React.FC<{b: NZBoxG; color: string; ink: string; size?: number; opacity?: number; band?: number; guide?: string}> = ({b, color, ink, size = 30, opacity = 1, band = 1, guide = 'N = Z'}) => {
	if (opacity <= 0.001) return null;
	const zEnd = 84, half = 5;
	const up = Array.from({length: 43}, (_, i) => { const Z = (i * zEnd) / 42; return `${i ? 'L' : 'M'}${nzX(b, Z).toFixed(1)},${nzY(b, bandN(Z) + half * (0.4 + Z / zEnd)).toFixed(1)}`; }).join(' ');
	const dn = Array.from({length: 43}, (_, i) => { const Z = zEnd - (i * zEnd) / 42; return `L${nzX(b, Z).toFixed(1)},${nzY(b, bandN(Z) - half * (0.4 + Z / zEnd)).toFixed(1)}`; }).join(' ');
	const gz = Math.min(b.zMax, b.nMax);
	return (
		<g opacity={opacity}>
			<rect x={b.x} y={b.y} width={b.w} height={b.h} fill={CARD} stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
			<path d={`${up} ${dn} Z`} fill={color} opacity={0.55 * band} stroke={color} strokeWidth={2} />
			<line x1={nzX(b, 0)} y1={nzY(b, 0)} x2={nzX(b, gz)} y2={nzY(b, gz)} stroke={ink} strokeWidth={2.5} strokeDasharray="10 8" />
			<text x={nzX(b, gz * 0.86)} y={nzY(b, gz * 0.86) + size * 1.1} textAnchor="middle" style={T(Math.max(26, size * 0.85), ink)}>{guide}</text>
			<line x1={b.x} y1={b.y + b.h} x2={b.x + b.w} y2={b.y + b.h} stroke={INK} strokeWidth={4} />
			<line x1={b.x} y1={b.y + b.h} x2={b.x} y2={b.y} stroke={INK} strokeWidth={4} />
			<text x={b.x + b.w} y={b.y + b.h + size * 1.2} textAnchor="end" style={T(size, INK)}>protons, Z</text>
			<text x={b.x - 14} y={b.y - 14} textAnchor="start" style={T(size, INK)}>neutrons, N</text>
		</g>
	);
};

// ---------------------------------------------------------------- random clicks (chance engine)
/** One coin per frame with chance p: outcome 1 at frame k is a click. */
export const clickRun = (seed: number, frames: number, p: number): ChanceRun => runTrials({seed, trials: frames, experiment: {kind: 'coins', coins: 1, p}});
/** Clicks up to frame f (inclusive), as frame numbers. */
export const clicksTo = (run: ChanceRun, f: number) => { const out: number[] = []; for (let k = 0; k <= Math.min(run.trials - 1, Math.floor(f)); k++) if (run.outcome[k] === 1) out.push(k); return out; };
/** An uneven click trace: a tick at the x of each click frame (from `clicksTo` or a decay list) between frames f0 and f1. */
export const ClickTrace: React.FC<{ticks: readonly number[]; f: number; f0: number; f1: number; x0: number; x1: number; y: number; h: number; color: string; opacity?: number}> = ({ticks, f, f0, f1, x0, x1, y, h, color, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const shown = ticks.filter(k => k >= f0 && k <= Math.min(f, f1));
	return (
		<g opacity={opacity}>
			<line x1={x0} y1={y} x2={x1} y2={y} stroke={INK} strokeWidth={2.5} />
			{shown.map(k => { const x = x0 + ((k - f0) / (f1 - f0)) * (x1 - x0), fresh = Math.max(0, 1 - (f - k) / 12); return <line key={k} x1={x} y1={y} x2={x} y2={y - h * (1 + 0.25 * fresh)} stroke={color} strokeWidth={4 + 3 * fresh} strokeLinecap="round" />; })}
		</g>
	);
};

// ---------------------------------------------------------------- decay (particle box)
/** n nuclei, each changing by itself at `rate` per second (30 fps) from frame `from`, for `frames` frames. */
export const decayRun = (seed: number, n: number, frames: number, rate: number, from = 0): BoxRun => {
	const side = Math.ceil(Math.sqrt(n)) * 30 + 60;
	return runBox({seed, frames, w: side, h: side, speed: 0.6, thermostat: 0, species: [{id: 'X', r: 6}, {id: 'D', r: 6}], initial: [{species: 'X', count: n}], reactions: [{from: ['X'], to: ['D'], rate, activeFrom: from}]});
};
/** Frame at which each slot first shows the decayed species (-1 if never in the run). */
export const decayFrames = (run: BoxRun): Int32Array => {
	const out = new Int32Array(run.slots).fill(-1);
	for (let f = 0; f < run.frames; f++) for (let i = 0; i < run.slots; i++) if (out[i] < 0 && run.sp[f * run.slots + i] === 1) out[i] = f;
	return out;
};
/** Undecayed count at frame f. */
export const remainingAt = (run: BoxRun, f: number) => run.counts[0][Math.min(run.frames - 1, Math.max(0, Math.round(f)))];
/** A grid of identical nuclei; nucleus i turns into a dashed grey ring when it decays (flash colour for 20 frames). */
export const NucleiGrid: React.FC<{x: number; y: number; cols: number; rows: number; cell: number; decayAt: (i: number) => number; f: number; fill: string; stroke: string; ring: string; flash: string; opacity?: number; r?: number}> = ({x, y, cols, rows, cell, decayAt, f, fill, stroke, ring, flash, opacity = 1, r}) => {
	if (opacity <= 0.001) return null;
	const rr = r ?? cell * 0.36;
	return (
		<g opacity={opacity}>
			{Array.from({length: cols * rows}, (_, i) => {
				const cx = x + (i % cols) * cell + cell / 2, cy = y + Math.floor(i / cols) * cell + cell / 2, d = decayAt(i), gone = d >= 0 && f >= d, fl = gone ? Math.max(0, 1 - (f - d) / 20) : 0;
				return <g key={i}>
					{fl > 0 ? <circle cx={cx} cy={cy} r={rr * (1.2 + 0.8 * (1 - fl))} fill={flash} opacity={0.7 * fl} /> : null}
					{gone ? <circle cx={cx} cy={cy} r={rr} fill={CARD} stroke={ring} strokeWidth={3} strokeDasharray="6 5" /> : <g><circle cx={cx} cy={cy} r={rr} fill={fill} stroke={stroke} strokeWidth={2} /><circle cx={cx - rr * 0.3} cy={cy - rr * 0.25} r={rr * 0.42} fill="#9a958c" /></g>}
				</g>;
			})}
		</g>
	);
};

// ---------------------------------------------------------------- the comparison balance (a labelled diagram)
export type BalanceG = {cx: number; cy: number; arm: number; drop: number};
/** Pan centres (left, right) for a beam tipped by deg (positive: right side down). */
export const panAt = (g: BalanceG, deg: number): [[number, number], [number, number]] => {
	const a = (deg * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
	return [[g.cx - g.arm * c, g.cy - g.arm * s + g.drop], [g.cx + g.arm * c, g.cy + g.arm * s + g.drop]];
};
export const Balance: React.FC<{g: BalanceG; deg: number; panW?: number; label?: string; size?: number; opacity?: number; ink?: string}> = ({g, deg, panW = 300, label = 'mass comparison (diagram)', size = 28, opacity = 1, ink = INK}) => {
	if (opacity <= 0.001) return null;
	const a = (deg * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
	const L: [number, number] = [g.cx - g.arm * c, g.cy - g.arm * s], R: [number, number] = [g.cx + g.arm * c, g.cy + g.arm * s];
	const [pl, pr] = panAt(g, deg);
	const pan = (p: [number, number], top: [number, number], k: string) => <g key={k}>
		<line x1={top[0]} y1={top[1]} x2={p[0] - panW / 2 + 16} y2={p[1]} stroke={ink} strokeWidth={2.5} />
		<line x1={top[0]} y1={top[1]} x2={p[0] + panW / 2 - 16} y2={p[1]} stroke={ink} strokeWidth={2.5} />
		<path d={`M${p[0] - panW / 2},${p[1]} Q${p[0]},${p[1] + 34} ${p[0] + panW / 2},${p[1]} Z`} fill="#e9e2d4" stroke={ink} strokeWidth={3.5} />
	</g>;
	return (
		<g opacity={opacity}>
			<path d={`M${g.cx - 70},${g.cy + g.drop + 150} L${g.cx + 70},${g.cy + g.drop + 150} L${g.cx + 14},${g.cy + g.drop + 120} L${g.cx + 10},${g.cy + 10} L${g.cx - 10},${g.cy + 10} L${g.cx - 14},${g.cy + g.drop + 120} Z`} fill="#d9d1c2" stroke={ink} strokeWidth={3} />
			<line x1={L[0]} y1={L[1]} x2={R[0]} y2={R[1]} stroke={ink} strokeWidth={8} strokeLinecap="round" />
			<path d={`M${g.cx - 16},${g.cy + 18} L${g.cx},${g.cy - 6} L${g.cx + 16},${g.cy + 18} Z`} fill={ink} />
			{pan(pl, L, 'l')}{pan(pr, R, 'r')}
			{label ? <text x={g.cx} y={g.cy + g.drop + 150 + size * 1.25} textAnchor="middle" style={T(size, ink, 700)}>{label}</text> : null}
		</g>
	);
};
