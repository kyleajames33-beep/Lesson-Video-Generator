// B6a shared pieces: the fixed split board (bacterium left, eukaryotic cell right), painted plates placed by a
// reference point, the plum DNA material (thread, ring, coiled ring, plasmid, rod), histone spools and winding,
// the camera, tags and the compare table. Organisms and objects are painted plates; DNA and spools are coded.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b6a/measured/lesson.json';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER, prog, scribbleEllipse} from '../../kit';
import type {CueScene} from '../../cues';
import {kf} from '../chem-m5-c03/common';
import {Fade, Sx, tw} from '../chem-m5-c06/parts';
import * as A from './assets';

export {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER, prog, kf, Fade, Sx, tw};
export const W = 1920, H = 1080;
export const PLUM = '#6e2a63';
export const PLUM_SOFT = '#b88aae';
export const SAND = '#e6cc98', SAND_INK = '#9a7a45';
export const NUC_LINE = '#5b4d70', NUC_FILL = 'rgba(226,214,238,0.45)';
export const GREYT = '#8d949b', GREY_INK = '#5d646b';
export const GREEN = '#2f8a5b', RED = '#c4432f';

export type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
export const S = (id: string): SceneL => {
	const s = (lesson.scenes as unknown as SceneL[]).find(x => x.id === id);
	if (!s) throw new Error(`scene ${id} missing`);
	return s;
};

export const Overlay: React.FC<{children: React.ReactNode}> = ({children}) => (
	<svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>{children}</svg>
);

// ---------- camera: a focus point placed at the screen centre at a scale ----------
export type CamKey = [number, number, number, number]; // frame, scale, focus x, focus y
export const camAt = (f: number, keys: CamKey[]) => ({s: kf(f, keys.map(k => [k[0], k[1]])), x: kf(f, keys.map(k => [k[0], k[2]])), y: kf(f, keys.map(k => [k[0], k[3]]))});
export const CX0 = 960, CY0 = 560;
export const camT = (c: {s: number; x: number; y: number}) => `translate(${CX0},${CY0}) scale(${c.s}) translate(${-c.x},${-c.y})`;
/** Stage point to screen point under a camera. */
export const toScreen = (c: {s: number; x: number; y: number}, p: [number, number]): [number, number] => [CX0 + (p[0] - c.x) * c.s, CY0 + (p[1] - c.y) * c.s];
export const Cam: React.FC<{keys: CamKey[]; children: React.ReactNode}> = ({keys, children}) => {
	const f = useCurrentFrame();
	return <g transform={camT(camAt(f, keys))}>{children}</g>;
};
export const IDENT: CamKey[] = [[0, 1, CX0, CY0]];

// ---------- painted plates, placed by a reference point in their natural pixels ----------
export type PDef = {src: string; nat: [number, number]; ref: [number, number]};
export const PL = {
	bact: {src: A.BACTERIUM, nat: [2044, 900], ref: [808, 448]} as PDef,
	animal: {src: A.ANIMAL, nat: [1986, 1992], ref: [996, 976]} as PDef,
	plant: {src: A.PLANT, nat: [1529, 1984], ref: [765, 990]} as PDef,
	mito: {src: A.MITO, nat: [1970, 900], ref: [985, 420]} as PDef,
	chloro: {src: A.CHLORO, nat: [1854, 1151], ref: [926, 572]} as PDef,
	spool: {src: A.SPOOL, nat: [1316, 1800], ref: [605, 775]} as PDef,
};
export const Pl: React.FC<{p: PDef; x: number; y: number; k: number; o?: number; rot?: number}> = ({p, x, y, k, o = 1, rot = 0}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o} transform={rot ? `rotate(${rot} ${x} ${y})` : undefined}>
			<image href={staticFile(p.src)} x={x - p.ref[0] * k} y={y - p.ref[1] * k} width={p.nat[0] * k} height={p.nat[1] * k} />
		</g>
	);
};
export const plPt = (p: PDef, x: number, y: number, k: number) => (u: number, v: number): [number, number] => [x + (u - p.ref[0]) * k, y + (v - p.ref[1]) * k];

// ---------- the fixed board ----------
/** Bacterium on the left: body centre and scale. Its clear central patch (nucleoid) is drawn around NUCL. */
export const BAC = {x: 430, y: 583, k: 0.48};
export const bacPt = plPt(PL.bact, BAC.x, BAC.y, BAC.k);
export const NUCL = {cx: bacPt(873, 434)[0], cy: bacPt(873, 434)[1], rx: 140, ry: 40};
/** Eukaryotic (animal) cell on the right. */
export const EUK = {x: 1420, y: 590, k: 0.361};
export const eukPt = plPt(PL.animal, EUK.x, EUK.y, EUK.k);
export const NUC = {cx: eukPt(1010, 1000)[0], cy: eukPt(1010, 1000)[1], r: 330 * EUK.k};
/** Mitochondria in the animal plate (natural pixels: centre, rotation, half-length, half-width). */
export const MITO_IN_ANIMAL: [number, number, number, number, number][] = [[1330, 505, 20, 190, 105], [505, 1340, 58, 180, 100], [1248, 1444, -18, 190, 100]];

// ---------- the plum DNA material ----------
const pathFrom = (pts: [number, number][], close = false) => pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + (close ? ' Z' : '');
/** A ring: base ellipse with optional supercoil loops (coil 0..1) and a phase for gentle motion. */
export const ringPts = (cx: number, cy: number, rx: number, ry: number, coil = 0, phase = 0, n = 15, steps = 260): [number, number][] => {
	const a = coil * Math.min(rx, ry) * 0.42;
	return Array.from({length: steps + 1}, (_, i) => {
		const t = (i / steps) * Math.PI * 2;
		const s = 1 - 0.2 * coil;
		return [cx + rx * s * Math.cos(t) + a * Math.cos(n * t + phase), cy + ry * s * Math.sin(t) + a * Math.sin(n * t + phase)];
	});
};
export const DnaRing: React.FC<{cx: number; cy: number; rx: number; ry: number; at?: number; coil?: number; o?: number; width?: number; dur?: number; color?: string}> = ({cx, cy, rx, ry, at = -100, coil = 0, o = 1, width = 5, dur = 24, color = PLUM}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, dur);
	if (p <= 0 || o <= 0.01) return null;
	return <path d={pathFrom(ringPts(cx, cy, rx, ry, coil, f * 0.03), true)} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" strokeLinecap="round" opacity={o} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />;
};
/** Sand protein blobs gripping a coiled ring at points. */
export const Grips: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; n?: number; r?: number; o?: number}> = ({cx, cy, rx, ry, at, n = 9, r = 7, o = 1}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const t = (i / n) * Math.PI * 2 + 0.3;
				const p = prog(f, at + i * 4, 10);
				return p > 0.01 ? <ellipse key={i} cx={cx + rx * 0.8 * Math.cos(t)} cy={cy + ry * 0.8 * Math.sin(t)} rx={r * 1.3 * p} ry={r * p} fill={SAND} stroke={SAND_INK} strokeWidth={2} /> : null;
			})}
		</g>
	);
};
/** A plasmid: a small plum ring, with an optional amber gene bead. */
export const Plasmid: React.FC<{cx: number; cy: number; r?: number; at?: number; o?: number; gene?: number; width?: number}> = ({cx, cy, r = 13, at = -100, o = 1, gene, width = 4}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	if (p <= 0.01 || o <= 0.01) return null;
	const g = gene === undefined ? 0 : prog(f, gene, 10);
	return (
		<g opacity={o * p}>
			<ellipse cx={cx} cy={cy} rx={r * (0.6 + 0.4 * p)} ry={r * 0.78 * (0.6 + 0.4 * p)} fill="none" stroke={PLUM} strokeWidth={width} />
			{g > 0.01 ? <circle cx={cx + r} cy={cy} r={r * 0.42 * g} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} /> : null}
		</g>
	);
};
/** A linear chromosome as a single plum thread with an amber dot at each end. */
export const Rod: React.FC<{x1: number; y1: number; x2: number; y2: number; at?: number; o?: number; width?: number; lit?: number; ends?: boolean}> = ({x1, y1, x2, y2, at = -100, o = 1, width = 4, lit = 0, ends = true}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	if (p <= 0.01 || o <= 0.01) return null;
	const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
	const nx = -(y2 - y1) * 0.08, ny = (x2 - x1) * 0.08;
	const d = `M${x1},${y1} Q${mx + nx},${my + ny} ${x2},${y2}`;
	return (
		<g opacity={o}>
			{lit > 0.01 ? <path d={d} fill="none" stroke={AMBER} strokeWidth={width * 3} strokeLinecap="round" opacity={0.45 * lit} /> : null}
			<path d={d} fill="none" stroke={PLUM} strokeWidth={width} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />
			{ends && p > 0.9 ? <><circle cx={x1} cy={y1} r={width * 0.9 + 2 * lit} fill={AMBER} /><circle cx={x2} cy={y2} r={width * 0.9 + 2 * lit} fill={AMBER} /></> : null}
		</g>
	);
};
/** Eight model rods inside a nucleus of radius r (positions in units of r). */
export const ROD8: [number, number, number, number][] = [
	[-0.62, -0.42, -0.12, -0.6], [0.05, -0.58, 0.58, -0.3], [-0.7, -0.05, -0.32, 0.36], [-0.18, -0.2, 0.36, 0.05],
	[0.48, 0.12, 0.62, 0.48], [-0.4, 0.55, 0.12, 0.62], [-0.05, 0.22, 0.28, 0.45], [-0.62, 0.2, -0.5, -0.22],
];
export const Rods8: React.FC<{cx: number; cy: number; r: number; at?: number; stagger?: number; o?: number; width?: number; litI?: number; lit?: number}> = ({cx, cy, r, at = -100, stagger = 4, o = 1, width = 4, litI = -1, lit = 0}) => (
	<g>{ROD8.map((q, i) => <Rod key={i} x1={cx + q[0] * r} y1={cy + q[1] * r} x2={cx + q[2] * r} y2={cy + q[3] * r} at={at + i * stagger} o={o} width={width} lit={i === litI ? lit : 0} />)}</g>
);
/** A dashed nuclear envelope. */
export const Envelope: React.FC<{cx: number; cy: number; r: number; o?: number; width?: number; fill?: boolean}> = ({cx, cy, r, o = 1, width = 4, fill = true}) => (
	<g opacity={o}>
		{fill ? <circle cx={cx} cy={cy} r={r} fill={NUC_FILL} /> : null}
		<circle cx={cx} cy={cy} r={r} fill="none" stroke={NUC_LINE} strokeWidth={width} strokeDasharray={`${width * 5} ${width * 2.4}`} strokeLinecap="round" />
	</g>
);

// ---------- histone spools and winding ----------
/** A row of histone discs along a thread; wind[i] 0..1 winds the thread round disc i; xs gives disc centres. */
export const Beads: React.FC<{xs: number[]; y: number | number[]; r?: number; wind: number[]; x0: number; x1: number; discO?: number; plus?: number[]; minus?: number; width?: number; gene?: {x: number; o: number}}> = ({xs, y, r = 30, wind, x0, x1, discO = 1, plus, minus = 0, width = 5, gene}) => {
	const ys = (i: number) => (Array.isArray(y) ? y[i] : y);
	const yAt = (x: number) => {
		if (!Array.isArray(y)) return y;
		if (x <= xs[0]) return y[0];
		for (let i = 0; i < xs.length - 1; i++) if (x <= xs[i + 1]) return y[i] + ((y[i + 1] - y[i]) * (x - xs[i])) / (xs[i + 1] - xs[i]);
		return y[y.length - 1];
	};
	// thread: straight between discs, passing behind each disc
	const d = `M${x0},${yAt(x0)} ` + xs.map((x, i) => `L${x - r},${ys(i) + r * 0.2} M${x + r},${ys(i) - r * 0.2}`).join(' ') + ` L${x1},${yAt(x1)}`;
	return (
		<g>
			<path d={d} fill="none" stroke={PLUM} strokeWidth={width} strokeLinecap="round" />
			{xs.map((x, i) => {
				const yy = ys(i);
				const w = wind[i] ?? 0;
				return (
					<g key={i} opacity={discO}>
						<ellipse cx={x} cy={yy} rx={r} ry={r * 0.92} fill={SAND} stroke={SAND_INK} strokeWidth={2.5} />
						{w > 0.01 ? <path d={`M${x - r},${yy + r * 0.25} C${x - r * 0.6},${yy + r * 0.85} ${x + r * 0.6},${yy + r * 0.85} ${x + r},${yy + r * 0.15} M${x - r},${yy - r * 0.2} C${x - r * 0.6},${yy + r * 0.42} ${x + r * 0.6},${yy + r * 0.42} ${x + r},${yy - r * 0.25}`} fill="none" stroke={PLUM} strokeWidth={width} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - w} /> : null}
						{w <= 0.01 ? <path d={`M${x - r},${yy + r * 0.2} L${x + r},${yy - r * 0.2}`} stroke={PLUM} strokeWidth={width} strokeLinecap="round" /> : null}
						{plus && plus[i] > 0.01 ? <text x={x} y={yy + 11} textAnchor="middle" fill="#1f6f4f" opacity={plus[i]} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 0.9}}>+</text> : null}
					</g>
				);
			})}
			{minus > 0.01 ? [0.5, 1.5, 2.5].map(k => xs.length > Math.ceil(k) ? <text key={k} x={(xs[Math.floor(k)] + xs[Math.ceil(k)]) / 2} y={yAt((xs[Math.floor(k)] + xs[Math.ceil(k)]) / 2) - 18} textAnchor="middle" fill={RED} opacity={minus} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40}}>−</text> : null) : null}
			{gene && gene.o > 0.01 ? <circle cx={gene.x} cy={yAt(gene.x)} r={11} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} opacity={gene.o} /> : null}
		</g>
	);
};

// ---------- tags and labels ----------
/** Amber hand label. */
export const Hand: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, at, out, size = 44, color = AMBER_INK, anchor = 'start'}) => (
	<Sx x={x} y={y} text={text} size={size} color={color} hand at={at} out={out} anchor={anchor} />
);
/** Grey screen tag (side information, not spoken). */
export const GreyTag: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; anchor?: 'start' | 'middle'}> = ({x, y, text, at, out, size = 28, anchor = 'start'}) => {
	const w = tw(text, size) + 36;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	return (
		<Fade at={at} out={out}>
			<rect x={x0} y={y} width={w} height={size + 22} rx={12} fill="#eceeef" stroke={GREYT} strokeWidth={2.5} />
			<Sx x={x0 + 18} y={y + size + 4} text={text} size={size} color={GREY_INK} weight={600} at={at} />
		</Fade>
	);
};
/** Dashed amber tag pill. */
export const TagP: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle'}> = ({x, y, text, at, out, size = 32, color = AMBER_INK, anchor = 'start'}) => {
	const w = tw(text, size, true) + 44;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	return (
		<Fade at={at} out={out}>
			<rect x={x0} y={y} width={w} height={size + 24} rx={(size + 24) / 2} fill="#fffdf8" stroke={color} strokeWidth={2.5} strokeDasharray="8 6" />
			<Sx x={x0 + 22} y={y + size + 6} text={text} size={size} color={color} hand at={at} />
		</Fade>
	);
};
export const Ring2: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number; color?: string; seed?: number; width?: number}> = ({cx, cy, rx, ry, at, out, color = AMBER, seed = 3, width = 5}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.01) return null;
	return <g opacity={o}><DrawPath d={scribbleEllipse(cx, cy, rx, ry, seed)} at={at} dur={20} color={color} width={width} /></g>;
};
export const GreyCross: React.FC<{x: number; y: number; at: number; s?: number; out?: number}> = ({x, y, at, s = 30, out}) => (
	<Fade at={at} out={out}>
		<DrawPath d={`M${x - s},${y - s} L${x + s},${y + s}`} at={at} dur={8} color={GREYT} width={6} />
		<DrawPath d={`M${x + s},${y - s} L${x - s},${y + s}`} at={at + 5} dur={8} color={GREYT} width={6} />
	</Fade>
);
export const TickM: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 34}) => (
	<DrawPath d={`M${x - s * 0.5},${y} L${x - s * 0.12},${y + s * 0.45} L${x + s * 0.55},${y - s * 0.5}`} at={at} dur={12} color={GREEN} width={7} />
);
/** Ghost dashed ring (a membrane that is not there). */
export const GhostRing: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number}> = ({cx, cy, rx, ry, at, out}) => (
	<Fade at={at} out={out}>
		<ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={GREYT} strokeWidth={4} strokeDasharray="12 9" />
	</Fade>
);
/** Count ticker. */
export const Ticker: React.FC<{x: number; y: number; from: number; to: number; at: number; dur: number; label?: string; size?: number; color?: string; o?: number}> = ({x, y, from, to, at, dur, label, size = 64, color = PLUM, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at - 6, 10);
	if (p <= 0.01) return null;
	const n = Math.round(from + (to - from) * Math.max(0, Math.min(1, (f - at) / dur)));
	return (
		<g opacity={p * o}>
			<text x={x} y={y} fill={color} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size}}>{n}</text>
			{label ? <text x={x + size * (String(to).length * 0.62 + 0.25)} y={y - 4} fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size * 0.55}}>{label}</text> : null}
		</g>
	);
};
/** Heading (handwritten, top left). */
export {Heading} from '../chem-m5-c03/common';

/** Tennis ball (coded): yellow-green with two seams. */
export const TennisBall: React.FC<{cx: number; cy: number; r: number; o?: number}> = ({cx, cy, r, o = 1}) => (
	<g opacity={o}>
		<circle cx={cx} cy={cy} r={r} fill="#d6df4c" stroke="#7d8a1c" strokeWidth={r * 0.04} />
		<path d={`M${cx - r * 0.95},${cy - r * 0.3} C${cx - r * 0.35},${cy - r * 0.1} ${cx - r * 0.35},${cy + r * 0.55} ${cx - r * 0.55},${cy + r * 0.85}`} fill="none" stroke="#fffde8" strokeWidth={r * 0.07} strokeLinecap="round" />
		<path d={`M${cx + r * 0.95},${cy + r * 0.3} C${cx + r * 0.35},${cy + r * 0.1} ${cx + r * 0.35},${cy - r * 0.55} ${cx + r * 0.55},${cy - r * 0.85}`} fill="none" stroke="#fffde8" strokeWidth={r * 0.07} strokeLinecap="round" />
	</g>
);
/** A magnifying glass (the reader icon). */
export const Magnifier: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<circle cx={0} cy={0} r={30} fill="rgba(255,253,248,0.5)" stroke={INK} strokeWidth={6} />
		<path d="M21,21 L52,52" stroke={INK} strokeWidth={10} strokeLinecap="round" />
	</g>
);
void PAPER;
