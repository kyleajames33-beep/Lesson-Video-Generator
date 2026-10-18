// G03 (Biology) shared pieces: the measured lesson, plates, and new coded parts: the 100-dot array (filled count
// computed from a proportion, seeded fill order), a coded chromosome pair with a marked locus, the Hardy-Weinberg
// numbers (computed and checked at build time), a stage line that parks in the retained-results column, the population
// bar, and Wright-Fisher drift traces (seeded). B13's shared pieces (panels, badges, streams, tables) are reused.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/bg03/measured/lesson.json';
import {sceneOf} from '../bio-m5-b06b/shared';
import {AMBER, AMBER_INK, CARD, CPLUM, EDGE, FONT_DISPLAY, INK, INK_SOFT, P, Sx, TEALC, clamp01, lerp, prog, rng} from '../bio-m5-b13/shared';
import * as A from './assets';

export * from '../bio-m5-b13/shared';
export {ICELAND as ICELAND_PTS, World} from '../bio-m5-b13/world';
export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
export const hold = (id: string) => S(id).responseHold as {startFrame: number; endFrame: number};
export const PLG = {
	rack: P(A.RACK, [2000, 2000], [320, 424, 1723, 1566], A.HAVE),
	spot: P(A.SPOT, [2000, 2000], [289, 609, 1733, 1480], A.HAVE),
};

// ---------- dot arrays ----------
/** A seeded order of 100 cells; the first k are the filled ones. */
export const fillOrder = (seed: number, n = 100) => {
	const r = rng(seed);
	return Array.from({length: n}, (_, i) => ({i, k: r()})).sort((a, b) => a.k - b.k).map(x => x.i);
};
export const filledCount = (proportion: number, n = 100) => Math.round(proportion * n);
/**
 * A 10 x 10 dot array: `filled` dots fill in seeded order as fillP goes 0..1; grey 0..1 turns every dot grey;
 * `edge` marks some dots with an amber edge; `ring` circles one dot index.
 */
export const DotArray: React.FC<{x: number; y: number; pitch?: number; r?: number; filled: number; seed: number; fillP?: number; o?: number; grey?: number; edge?: number[]; draw?: number; cols?: number; n?: number; fillColor?: string}> = ({x, y, pitch = 50, r = 18, filled, seed, fillP = 1, o = 1, grey = 0, edge = [], draw = 1, cols = 10, n = 100, fillColor = INK}) => {
	if (o <= 0.01) return null;
	const order = fillOrder(seed, n);
	const rank = new Array(n);
	order.forEach((idx, k) => { rank[idx] = k; });
	const shownFill = Math.floor(clamp01(fillP) * filled + 1e-6);
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const c = i % cols, rr = Math.floor(i / cols);
				const appear = clamp01(draw * (n / 8) - (c + rr) * 0.5);
				if (appear <= 0.01) return null;
				const isF = rank[i] < shownFill;
				// grey: every dot looks the same (which ones are which is unknown)
				const fillC = grey > 0.5 ? '#b9bec3' : isF ? fillColor : CARD;
				const stroke = grey > 0.5 ? '#8d949b' : INK;
				const hot = edge.includes(i);
				return (
					<g key={i} opacity={appear}>
						<circle cx={x + c * pitch} cy={y + rr * pitch} r={r} fill={fillC} stroke={hot ? AMBER : stroke} strokeWidth={hot ? 6 : 2.5} />
					</g>
				);
			})}
		</g>
	);
};
export const dotXY = (x: number, y: number, i: number, pitch = 50, cols = 10): [number, number] => [x + (i % cols) * pitch, y + Math.floor(i / cols) * pitch];

// ---------- chromosomes ----------
/** A coded chromosome: a rounded bar pinched at the centromere, with a marked locus at fraction `at` along it. */
export const Chromo: React.FC<{x: number; y: number; len: number; w?: number; color: string; vertical?: boolean; locus?: number; locusState?: 'faulty' | 'working' | 'lost' | 'plain'; o?: number; glow?: number}> = ({x, y, len, w = 30, color, vertical = true, locus = 0.3, locusState = 'plain', o = 1, glow = 0}) => {
	if (o <= 0.01) return null;
	const L = len, c = L * 0.42;
	const d = vertical
		? `M${x - w / 2},${y + w / 2} L${x - w / 2},${y + c - 6} Q${x},${y + c + 4} ${x - w / 2},${y + c + 14} L${x - w / 2},${y + L - w / 2} A${w / 2},${w / 2} 0 0 0 ${x + w / 2},${y + L - w / 2} L${x + w / 2},${y + c + 14} Q${x},${y + c + 4} ${x + w / 2},${y + c - 6} L${x + w / 2},${y + w / 2} A${w / 2},${w / 2} 0 0 0 ${x - w / 2},${y + w / 2} Z`
		: `M${x + w / 2},${y - w / 2} L${x + c - 6},${y - w / 2} Q${x + c + 4},${y} ${x + c + 14},${y - w / 2} L${x + L - w / 2},${y - w / 2} A${w / 2},${w / 2} 0 0 1 ${x + L - w / 2},${y + w / 2} L${x + c + 14},${y + w / 2} Q${x + c + 4},${y} ${x + c - 6},${y + w / 2} L${x + w / 2},${y + w / 2} A${w / 2},${w / 2} 0 0 1 ${x + w / 2},${y - w / 2} Z`;
	const lp = vertical ? [x, y + L * locus] : [x + L * locus, y];
	const band = vertical ? {x: x - w / 2, y: lp[1] - 7, width: w, height: 14} : {x: lp[0] - 7, y: y - w / 2, width: 14, height: w};
	const bandFill = locusState === 'faulty' ? '#9aa0a6' : locusState === 'working' ? AMBER : locusState === 'lost' ? '#4a4540' : '#fffdf8';
	return (
		<g opacity={o}>
			{glow > 0.01 ? <circle cx={lp[0]} cy={lp[1]} r={w * 0.95} fill={AMBER} opacity={0.4 * glow} /> : null}
			<path d={d} fill={color} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
			<rect {...band} fill={bandFill} stroke={INK} strokeWidth={2} />
			{locusState === 'faulty' ? <g stroke={INK} strokeWidth={3}><line x1={lp[0] - w * 0.55} y1={lp[1] - w * 0.55} x2={lp[0] + w * 0.55} y2={lp[1] + w * 0.55} /><line x1={lp[0] + w * 0.55} y1={lp[1] - w * 0.55} x2={lp[0] - w * 0.55} y2={lp[1] + w * 0.55} /></g> : null}
		</g>
	);
};
export const PLUMC = CPLUM, TEALCH = TEALC;

// ---------- Hardy-Weinberg numbers (computed) ----------
export const hw = (affectedOneIn: number) => {
	const q2 = 1 / affectedOneIn;
	const q = Math.sqrt(q2);
	const p = 1 - q;
	const carriers = 2 * p * q;
	return {q2, q, p, carriers, oneIn: Math.floor(1 / carriers)};
};
export const CF = hw(2500);
export const ITEM_HW = hw(10000);
(() => {
	const near = (a: number, b: number) => Math.abs(a - b) < 1e-9;
	if (!near(CF.q2, 0.0004) || !near(CF.q, 0.02) || !near(CF.p, 0.98) || CF.carriers.toFixed(3) !== '0.039' || CF.oneIn !== 25) throw new Error('G03 check: CF stages');
	if (!near(ITEM_HW.q, 0.01) || !near(ITEM_HW.p, 0.99) || ITEM_HW.carriers.toFixed(4) !== '0.0198' || ITEM_HW.oneIn !== 50) throw new Error('G03 check: attempt two stages');
})();
export const fmtDec = (v: number, dp: number) => v.toFixed(dp);

// ---------- a stage line that parks ----------
/**
 * A calculation line: appears large at (bx, by) at `at`; from `park` it slides and shrinks to (sx, sy) in the
 * retained-results column.
 */
export const StageLine: React.FC<{text: string; at: number; park?: number; bx: number; by: number; sx: number; sy: number; big?: number; small?: number; color?: string; parkColor?: string}> = ({text, at, park, bx, by, sx, sy, big = 64, small = 30, color = INK, parkColor = INK_SOFT}) => {
	const f = useCurrentFrame();
	const t = park === undefined ? 0 : prog(f, park, 20);
	return <Sx x={lerp(bx, sx, t)} y={lerp(by, sy, t)} text={text} size={lerp(big, small, t)} color={t > 0.5 ? parkColor : color} weight={800} at={at} />;
};

// ---------- population bar ----------
export const PopBar: React.FC<{x: number; y: number; w: number; h?: number; affected: number; carriers: number; p?: number; o?: number; labels?: boolean; size?: number}> = ({x, y, w, h = 56, affected, carriers, p = 1, o = 1, labels = true, size = 26}) => {
	if (o <= 0.01) return null;
	const wa = Math.max(3, w * affected), wc = w * carriers;
	const k = clamp01(p);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w * k} height={h} rx={8} fill="#efe6d4" stroke={EDGE} strokeWidth={2} />
			<rect x={x} y={y} width={wa * clamp01(k * 3)} height={h} fill={INK} />
			<rect x={x + wa} y={y} width={wc * clamp01(k * 2 - 0.3)} height={h} fill={AMBER} />
			{labels ? (
				<g opacity={clamp01(k * 2 - 1)}>
					<line x1={x + wa / 2} y1={y} x2={x + wa / 2} y2={y - 34} stroke={INK} strokeWidth={2} />
					<text x={x} y={y - 42} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={INK}>affected</text>
					<text x={x + wa + wc / 2} y={y + h + size + 8} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={AMBER_INK}>carriers</text>
					<text x={x + w * 0.6} y={y + h * 0.66} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={INK_SOFT}>neither</text>
				</g>
			) : null}
		</g>
	);
};

// ---------- drift traces (Wright-Fisher, seeded) ----------
/** Allele frequency over generations for a population of n individuals (2n copies), starting at q0. */
export const wfTrace = (seed: number, n: number, q0: number, gens: number) => {
	const r = rng(seed);
	const copies = 2 * n;
	const out = [q0];
	let q = q0;
	for (let g = 0; g < gens; g++) {
		if (copies <= 400) {
			let k = 0;
			for (let i = 0; i < copies; i++) if (r() < q) k++;
			q = k / copies;
		} else {
			const u = Math.max(1e-9, r()), v = r();
			const z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
			q = Math.max(0, Math.min(1, q + z * Math.sqrt((q * (1 - q)) / copies)));
		}
		out.push(q);
	}
	return out;
};
/** Five small-population traces chosen deterministically so the set shows chance both ways (one lost, one risen). */
export const pickSmall = (n: number, q0: number, gens: number) => {
	const all = Array.from({length: 60}, (_, s) => wfTrace(100 + s, n, q0, gens));
	const end = (t: number[]) => t[t.length - 1];
	const lostAfterRise = all.filter(t => end(t) === 0 && Math.max(...t) >= 0.3);
	const lostEarly = all.filter(t => end(t) === 0 && Math.max(...t) <= 0.15);
	const risen = all.filter(t => end(t) >= 0.4 && end(t) < 1);
	const pick = [lostAfterRise[0], lostAfterRise[1], lostEarly[0], risen[0], risen[1]].filter(Boolean) as number[][];
	if (pick.length < 5) throw new Error('G03 check: drift traces');
	return pick;
};
export const Traces: React.FC<{x: number; y: number; w: number; h: number; traces: number[][]; at: number; o?: number; max?: number; color?: string; dur?: number}> = ({x, y, w, h, traces, at, o = 1, max = 0.5, color = '#3d7fb0', dur = 60}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const p = prog(f, at, dur);
	const gens = traces[0].length - 1;
	const X = (g: number) => x + (g / gens) * w;
	const Y = (q: number) => y + h - (q / max) * h;
	return (
		<g opacity={o}>
			<line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={INK} strokeWidth={3} />
			<line x1={x} y1={y} x2={x} y2={y + h} stroke={INK} strokeWidth={3} />
			{[0, 1, 2, 3, 4, 5].map(k => (k * max) / 5).map(v => (
				<g key={v}><line x1={x - 8} y1={Y(v)} x2={x} y2={Y(v)} stroke={INK} strokeWidth={2} /><text x={x - 14} y={Y(v) + 8} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 20}} fill={INK_SOFT}>{v.toFixed(1)}</text></g>
			))}
			<text x={x - 52} y={y + h / 2} textAnchor="middle" transform={`rotate(-90 ${x - 52} ${y + h / 2})`} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 20}} fill={INK_SOFT}>allele frequency</text>
			<text x={x + w / 2} y={y + h + 34} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>generations (0 to {gens})</text>
			<line x1={x} y1={Y(traces[0][0])} x2={x + w} y2={Y(traces[0][0])} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 6" />
			{traces.map((t, i) => {
				const upto = Math.max(1, Math.floor(p * gens));
				const d = t.slice(0, upto + 1).map((q, g) => `${g ? 'L' : 'M'}${X(g).toFixed(1)},${Y(q).toFixed(1)}`).join(' ');
				return <path key={i} d={d} fill="none" stroke={color} strokeWidth={3.5} strokeLinejoin="round" opacity={0.55 + 0.09 * i} />;
			})}
		</g>
	);
};
void lerp;
