// M6 B18 drawing parts: the toolchain track (six stations, filled one per scene), the coded tools (restriction enzyme
// scissor-jaw blob, ligase clasp blob, polymerase bean, ribosome glyph), the base-glyph duplex (pieces with single
// stranded overhangs, pairing lines and backbone nicks), the recombinant plasmid ring (amber insert, marker band,
// promoter block), the splicing strip, protein bead chains, a caterpillar outline, a snowflake, a seed glyph and small
// strips. B01, B07, B09, B11, B13 and B16 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, rng} from '../../kit';
import {Sx, tw} from '../bio-m5-b13/shared';
import {Bact, CARD, EDGE, GREYT, GREY_INK, SlimStrand, clamp01, lerp, smooth, vis} from '../bio-m6-b01/parts';
import {platePt} from '../bio-m6-b07/parts';
import {Pl, plH} from '../bio-m6-b09/parts';
import {Arr, MarkText, Pill} from '../bio-m6-b11/parts';
import {Colonies, DivTree, GeneSeg, Patch, Thermo, Tube} from '../bio-m6-b16/parts';
import {PLATES} from './assets';

export {AMBER, AMBER_INK, INK, INK_SOFT, CARD, EDGE, GREYT, GREY_INK, Bact, SlimStrand, clamp01, lerp, smooth, vis, prog, rng, DrawPath, platePt, Pl, plH, Arr, MarkText, Pill, Colonies, DivTree, GeneSeg, Patch, Thermo, Tube, Sx, tw, PLATES};
export const TEAL = '#2f7f86', SLATE = '#5d6b78', OCHRE = '#c9962e', MARKER = '#7d9a6a', PROMO = '#9c8bb0', MRNA = '#c46a3a', RED_BROWN = '#a5523a', GREEN = '#2f8a5b';

// ---------- coded tools ----------
/** The restriction enzyme: a slate blob with two jaws on its left that open (`open` 0..1) and snap shut. */
export const REBlob: React.FC<{x: number; y: number; s?: number; open?: number; o?: number}> = ({x, y, s = 1, open = 0.3, o = 1}) => {
	if (o <= 0.01) return null;
	const a = 8 + 22 * clamp01(open);
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			<g transform={`rotate(${-a})`}><path d="M0,-4 L-56,-14 Q-62,-6 -54,0 L0,4 Z" fill="#8a98a6" stroke={SLATE} strokeWidth={3} strokeLinejoin="round" /></g>
			<g transform={`rotate(${a})`}><path d="M0,4 L-56,14 Q-62,6 -54,0 L0,-4 Z" fill="#8a98a6" stroke={SLATE} strokeWidth={3} strokeLinejoin="round" /></g>
			<ellipse cx={26} cy={0} rx={38} ry={30} fill="#c3ccd4" stroke={SLATE} strokeWidth={3.5} />
			<circle cx={4} cy={0} r={7} fill={SLATE} />
		</g>
	);
};
/** DNA ligase: an ochre clasp blob (a C that closes over a join). */
export const LigBlob: React.FC<{x: number; y: number; s?: number; o?: number; squeeze?: number}> = ({x, y, s = 1, o = 1, squeeze = 0}) => {
	if (o <= 0.01) return null;
	const g = 18 - 10 * clamp01(squeeze);
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			<path d={`M${g},-46 C-40,-60 -40,60 ${g},46 L${g},${30} C-14,34 -14,-34 ${g},-30 Z`} fill="#ecd29a" stroke={OCHRE} strokeWidth={3.5} strokeLinejoin="round" />
		</g>
	);
};
/** RNA polymerase bean (ochre, small). */
export const PolBean: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-40,0 C-40,-30 -10,-34 0,-22 C10,-34 40,-30 40,0 C40,26 -40,26 -40,0 Z" fill="#e7c47c" stroke="#9a7420" strokeWidth={3} />
	</g>
));
/** A coded ribosome glyph (two lobes). */
export const RiboG: React.FC<{x: number; y: number; s?: number; o?: number; tint?: string}> = ({x, y, s = 1, o = 1, tint = '#d9c6a8'}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<ellipse cx={0} cy={-22} rx={48} ry={30} fill={tint} stroke={INK_SOFT} strokeWidth={3} />
		<ellipse cx={0} cy={18} rx={36} ry={18} fill="#efe3cf" stroke={INK_SOFT} strokeWidth={3} />
	</g>
));
/** A bead chain (protein): `n` beads from (x, y) to the right; `wrong` indices drawn grey; `kink` bends the middle. */
export const Chain: React.FC<{x: number; y: number; n: number; r?: number; o?: number; wrong?: number[]; kink?: number; fill?: string; gap?: number}> = ({x, y, n, r = 11, o = 1, wrong = [], kink = 0, fill = '#e8b48a', gap}) => {
	if (o <= 0.01) return null;
	const d = gap ?? r * 2.1;
	const pts = Array.from({length: n}, (_, i) => [x + i * d, y + Math.sin((i / Math.max(1, n - 1)) * Math.PI) * kink * 30 * (i % 2 ? 1 : -0.3)] as [number, number]);
	return (
		<g opacity={o}>
			<path d={pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ')} fill="none" stroke={INK_SOFT} strokeWidth={2.5} />
			{pts.map(([px, py], i) => <circle key={i} cx={px} cy={py} r={r} fill={wrong.includes(i) ? '#cfd2d4' : fill} stroke={wrong.includes(i) ? GREYT : '#a8704a'} strokeWidth={2} />)}
		</g>
	);
};
/** A coded caterpillar outline; `curl` 0..1 curls it up. */
export const Caterpillar: React.FC<{x: number; y: number; s?: number; o?: number; curl?: number}> = ({x, y, s = 1, o = 1, curl = 0}) => {
	if (o <= 0.01) return null;
	const c = clamp01(curl);
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			{Array.from({length: 7}, (_, i) => {
				const a = -Math.PI * 0.1 + (i / 6) * lerp(Math.PI * 0.2, Math.PI * 1.5, c);
				const R = lerp(160, 34, c);
				const px = Math.sin(a) * R - (i === 0 ? 0 : 0), py = R - Math.cos(a) * R;
				return <circle key={i} cx={-px} cy={py * (c > 0 ? 1 : 0.3)} r={i === 6 ? 13 : 11} fill="#cfe3b8" stroke="#5e8a3a" strokeWidth={2.5} />;
			})}
		</g>
	);
};
/** A snowflake glyph. */
export const Snow: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`} stroke="#5b8fae" strokeWidth={4} strokeLinecap="round">
		{[0, 60, 120].map(a => <g key={a} transform={`rotate(${a})`}><line x1={0} y1={-26} x2={0} y2={26} /><path d="M-7,-18 L0,-11 L7,-18 M-7,18 L0,11 L7,18" fill="none" /></g>)}
	</g>
));
/** A seed glyph with an amber strip inside (`lit`). */
export const Seed: React.FC<{x: number; y: number; o?: number; lit?: number}> = ({x, y, o = 1, lit = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<ellipse cx={x} cy={y} rx={34} ry={22} fill="#e9dcc0" stroke="#8a6f43" strokeWidth={3} />
		<rect x={x - 18} y={y - 4} width={36} height={8} rx={4} fill={AMBER} opacity={lit} />
	</g>
));

// ---------- the toolchain track ----------
export const STATIONS = ['get the DNA', 'cut', 'paste', 'put in', 'pick', 'use'];
export const stX = (i: number) => 120 + i * 282;
export const ST_Y = 166, ST_W = 270, ST_H = 64;
/** A small station icon centred at (x, y). */
export const StationIcon: React.FC<{k: number; x: number; y: number; s?: number; o?: number; plant?: boolean}> = ({k, x, y, s = 1, o = 1, plant = false}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			{k === 0 ? (
				<g>
					<rect x={-26} y={-7} width={18} height={14} rx={4} fill={AMBER} />
					<rect x={-6} y={-5} width={10} height={10} rx={3} fill="#c8cbcf" />
					<rect x={6} y={-7} width={18} height={14} rx={4} fill={AMBER} />
				</g>
			) : null}
			{k === 1 ? <REBlob x={4} y={0} s={0.42} open={0.6} /> : null}
			{k === 2 ? <LigBlob x={4} y={0} s={0.42} /> : null}
			{k === 3 ? (plant ? <Leaf /> : (
				<g>
					<rect x={-26} y={-12} width={52} height={24} rx={12} fill="#dfe9d6" stroke={INK_SOFT} strokeWidth={2.5} />
					<circle cx={-30} cy={-16} r={7} fill="none" stroke={TEAL} strokeWidth={3} />
				</g>
			)) : null}
			{k === 4 ? (plant ? <Leaf /> : (
				<g>
					<circle cx={0} cy={0} r={22} fill="#e2dcb0" stroke={INK_SOFT} strokeWidth={2.5} />
					{[[-8, -6], [7, -9], [2, 8]].map(([dx, dy], i) => <circle key={i} cx={dx} cy={dy} r={3.5} fill="#f6efd8" stroke="#a89a6a" strokeWidth={1} />)}
				</g>
			)) : null}
			{k === 5 ? <Chain x={-24} y={0} n={4} r={7} gap={16} /> : null}
		</g>
	);
};
const Leaf: React.FC = () => <path d="M-22,10 C-20,-14 4,-22 24,-16 C20,6 0,18 -22,10 Z M-22,10 L14,-10" fill="#cfe3b8" stroke="#5e8a3a" strokeWidth={2.5} />;
/** The track: stations 0..n-1; `active` lit, earlier ones grey (done), later ones dashed (future). `sketch` draws only
 * outlines with per-station opacity (hook). `slide6` 0..1 slides the sixth station in. */
export const Track: React.FC<{n?: number; active?: number; o?: number; sketch?: number[]; slide6?: number; plant?: boolean; allLit?: number}> = ({n = 5, active = -1, o = 1, sketch, slide6 = 1, plant = false, allLit = 0}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{STATIONS.slice(0, n).map((t, i) => {
				const so = sketch ? sketch[i] ?? 0 : 1;
				if (so <= 0.01) return null;
				const x = stX(i) + (i === 5 ? (1 - smooth(slide6)) * 300 : 0);
				const oo = i === 5 ? smooth(slide6) * so : so;
				const state = sketch ? 'sketch' : allLit > 0.5 ? 'all' : i === active ? 'active' : i < active ? 'done' : 'future';
				const lit = state === 'active' || state === 'all';
				return (
					<g key={i} opacity={oo}>
						<rect x={x} y={ST_Y} width={ST_W} height={ST_H} rx={16} fill={state === 'sketch' || state === 'future' ? 'none' : lit ? '#fff3d9' : '#f1f1ef'} stroke={lit ? AMBER : state === 'sketch' ? INK_SOFT : EDGE} strokeWidth={lit ? 3.5 : 2.5} strokeDasharray={state === 'sketch' || state === 'future' ? '9 7' : undefined} />
						{state !== 'sketch' ? <StationIcon k={i} x={x + 40} y={ST_Y + ST_H / 2} o={lit ? 1 : 0.55} plant={plant && (i === 3 || i === 4)} /> : null}
						{state !== 'sketch' ? <Sx x={x + 76} y={ST_Y + 41} text={t} size={26} color={lit ? INK : GREY_INK} weight={700} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the base-glyph duplex ----------
export const DP = 34, DG = 56;
export const SEQ = 'TCAGAATTCGCATGGCTACGATCGGGATCCTAGC';
const COMP: Record<string, string> = {A: 'T', T: 'A', C: 'G', G: 'C'};
const BASEC: Record<string, string> = {A: '#e9b8a0', T: '#a8c8e0', C: '#c8dca0', G: '#e4d08a'};
export type DPiece = {top: [number, number]; bot: [number, number]; dx?: number; dy?: number; color: (i: number) => string; colorB?: (i: number) => string; o?: number};
/** A double strand drawn per base: backbones (per-base segments, so nicks can open between bases), base glyphs and
 * pairing lines. Index i sits at x + i * DP. */
export const Duplex: React.FC<{x: number; y: number; pieces: DPiece[]; pairO?: (i: number) => number; glow?: (i: number, s: 't' | 'b') => number; nicks?: {i: number; s: 't' | 'b'; o: number}[]; o?: number}> = ({x, y, pieces, pairO = () => 1, glow, nicks = [], o = 1}) => {
	if (o <= 0.01) return null;
	const nickAt = (i: number, s: 't' | 'b') => nicks.filter(n => n.i === i && n.s === s).reduce((a, n) => Math.max(a, n.o), 0);
	return (
		<g opacity={o}>
			{pieces.map((p, pi) => {
				if ((p.o ?? 1) <= 0.01) return null;
				const ox = x + (p.dx ?? 0), oy = y + (p.dy ?? 0);
				const both = (i: number) => i >= p.top[0] && i < p.top[1] && i >= p.bot[0] && i < p.bot[1];
				const seg = (i: number, s: 't' | 'b') => {
					const gL = 5 * nickAt(i, s), gR = 5 * nickAt(i + 1, s);
					const yy = s === 't' ? oy : oy + DG;
					return <line key={`${s}${i}`} x1={ox + i * DP + gL} y1={yy} x2={ox + (i + 1) * DP - gR} y2={yy} stroke={s === 'b' && p.colorB ? p.colorB(i) : p.color(i)} strokeWidth={5} strokeLinecap="round" />;
				};
				const out: React.ReactNode[] = [];
				for (let i = p.top[0]; i < p.top[1]; i++) {
					const b = SEQ[i % SEQ.length];
					const gl = glow ? glow(i, 't') : 0;
					if (both(i)) out.push(<line key={`p${i}`} x1={ox + i * DP + DP / 2} y1={oy + 23} x2={ox + i * DP + DP / 2} y2={oy + DG - 23} stroke={INK_SOFT} strokeWidth={1.6} strokeDasharray="3 3" opacity={pairO(i)} />);
					out.push(<rect key={`tb${i}`} x={ox + i * DP + DP / 2 - 8} y={oy + 3} width={16} height={20} rx={5} fill={BASEC[b]} stroke={gl > 0.01 ? AMBER_INK : 'rgba(60,45,20,0.35)'} strokeWidth={gl > 0.01 ? 2 + 2 * gl : 1.2} />);
					out.push(seg(i, 't'));
				}
				for (let i = p.bot[0]; i < p.bot[1]; i++) {
					const b = COMP[SEQ[i % SEQ.length]];
					const gl = glow ? glow(i, 'b') : 0;
					out.push(<rect key={`bb${i}`} x={ox + i * DP + DP / 2 - 8} y={oy + DG - 23} width={16} height={20} rx={5} fill={BASEC[b]} stroke={gl > 0.01 ? AMBER_INK : 'rgba(60,45,20,0.35)'} strokeWidth={gl > 0.01 ? 2 + 2 * gl : 1.2} />);
					out.push(seg(i, 'b'));
				}
				return <g key={pi} opacity={p.o ?? 1}>{out}</g>;
			})}
		</g>
	);
};
/** Small overhang glyph row (four bases) for a ring end; `up` puts glyphs above the backbone stub. */
export const Overhang: React.FC<{x: number; y: number; start: number; comp?: boolean; o?: number; glow?: number; s?: number}> = ({x, y, start, comp = false, o = 1, glow = 0, s = 0.8}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<line x1={0} y1={0} x2={4 * DP} y2={0} stroke={TEAL} strokeWidth={5} strokeLinecap="round" />
		{[0, 1, 2, 3].map(k => {
			const b = SEQ[(start + k) % SEQ.length];
			return <rect key={k} x={k * DP + DP / 2 - 8} y={comp ? -23 : 3} width={16} height={20} rx={5} fill={BASEC[comp ? COMP[b] : b]} stroke={glow > 0.01 ? AMBER_INK : 'rgba(60,45,20,0.35)'} strokeWidth={glow > 0.01 ? 3 : 1.2} />;
		})}
	</g>
));

// ---------- the recombinant plasmid ring ----------
const arcD = (cx: number, cy: number, r: number, a0: number, a1: number) => {
	const P = (a: number) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
	const [x0, y0] = P(a0), [x1, y1] = P(a1);
	return `M${x0},${y0} A${r},${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1},${y1}`;
};
const RAD = Math.PI / 180;
/** Teal ring; `gap` opens the top slot, `insert` fills it amber; `marker` lights a grey-green band; `promoter` adds a
 * plum block just before the insert; `rot` turns it. `empty` draws a grey ring (closed up without the insert). */
export const RecRing: React.FC<{cx: number; cy: number; r: number; gap?: number; insert?: number; marker?: number; markerLit?: number; promoter?: number; promLit?: number; rot?: number; o?: number; sw?: number; empty?: boolean}> = ({cx, cy, r, gap = 0, insert = 0, marker = 0, markerLit = 0, promoter = 0, promLit = 0, rot = 0, o = 1, sw = 9, empty = false}) => {
	if (o <= 0.01) return null;
	const half = 20 * RAD * clamp01(gap);
	const top = -90 * RAD;
	const col = empty ? '#9aa3ab' : TEAL;
	return (
		<g opacity={o} transform={`rotate(${rot} ${cx} ${cy})`}>
			{half > 0.001 ? <path d={arcD(cx, cy, r, top + half, top + 2 * Math.PI - half)} fill="none" stroke={col} strokeWidth={sw} strokeLinecap="round" /> : <circle cx={cx} cy={cy} r={r} fill="none" stroke={col} strokeWidth={sw} />}
			{insert > 0.01 ? <path d={arcD(cx, cy, r, top - 20 * RAD, top + 20 * RAD)} fill="none" stroke={AMBER} strokeWidth={sw + 4} strokeLinecap="round" opacity={insert} /> : null}
			{marker > 0.01 ? <path d={arcD(cx, cy, r, 140 * RAD, 190 * RAD)} fill="none" stroke={MARKER} strokeWidth={sw + (markerLit > 0.5 ? 8 : 4)} strokeLinecap="round" opacity={marker} /> : null}
			{markerLit > 0.01 ? <path d={arcD(cx, cy, r, 140 * RAD, 190 * RAD)} fill="none" stroke={AMBER} strokeWidth={sw + 16} strokeLinecap="round" opacity={0.25 * markerLit} /> : null}
			{promoter > 0.01 ? <path d={arcD(cx, cy, r, top - 38 * RAD, top - 24 * RAD)} fill="none" stroke={PROMO} strokeWidth={sw + (promLit > 0.5 ? 10 : 5)} opacity={promoter} /> : null}
		</g>
	);
};
/** Screen point at angle (degrees, 0 = right, clockwise) on a ring. */
export const ringPt = (cx: number, cy: number, r: number, deg: number, rot = 0): [number, number] => [cx + r * Math.cos((deg + rot) * RAD), cy + r * Math.sin((deg + rot) * RAD)];

// ---------- the splicing strip ----------
export const REG = [{k: 'e', a: 0, b: 4}, {k: 'i', a: 4, b: 7}, {k: 'e', a: 7, b: 11}, {k: 'i', a: 11, b: 14}, {k: 'e', a: 14, b: 18}];
/** A gene strip with amber exons and grey introns (DNA, slim strand). */
export const GeneIntrons: React.FC<{x: number; y: number; o?: number; draw?: number; pitch?: number; gap?: number}> = ({x, y, o = 1, draw = 1, pitch = 30, gap = 30}) => (
	<SlimStrand x={x} y={y} n={18} pitch={pitch} gap={gap} o={o} draw={draw} lineW={3.5}
		rung={i => (REG.find(r => i >= r.a && i < r.b)?.k === 'e' ? {color: AMBER, w: 6} : {color: '#b9bcc0', w: 5})} />
);
/** The mRNA copy: thick terracotta exon pieces and grey intron pieces; `cut` 0..1 lifts the introns out and closes the
 * exons up. */
export const SpliceStrip: React.FC<{x: number; y: number; draw: number; cut: number; o?: number; pitch?: number}> = ({x, y, draw, cut, o = 1, pitch = 30}) => {
	if (o <= 0.01 || draw <= 0.01) return null;
	const t = smooth(cut);
	const xEnd = x + 18 * pitch * clamp01(draw);
	let removed = 0;
	return (
		<g opacity={o}>
			{REG.map((r, i) => {
				const a = x + r.a * pitch, b = x + r.b * pitch;
				const shift = removed * pitch * t;
				if (r.k === 'i') removed += r.b - r.a;
				const vis1 = clamp01((xEnd - a) / (b - a));
				if (vis1 <= 0.01) return null;
				if (r.k === 'e') return <line key={i} x1={a - shift + 3} y1={y} x2={a - shift + (b - a) * vis1 - 3} y2={y} stroke={MRNA} strokeWidth={14} strokeLinecap="round" />;
				return <path key={i} d={`M${a + 2},${y - 60 * t} C${a + 8},${y - 40 - 60 * t} ${b - 8},${y - 40 - 60 * t} ${b - 2},${y - 60 * t}`} fill="none" stroke="#9a948a" strokeWidth={8} strokeLinecap="round" opacity={(1 - t) * vis1} />;
			})}
		</g>
	);
};
/** A tiny strip for feedback rows: amber with grey blocks (`introns`) or all amber. */
export const MiniStrip: React.FC<{x: number; y: number; introns: boolean; o?: number}> = ({x, y, introns, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{(introns ? [AMBER, '#b9bcc0', AMBER, '#b9bcc0', AMBER] : [AMBER, AMBER, AMBER]).map((c, i) => <rect key={i} x={x + i * 34} y={y} width={30} height={16} rx={6} fill={c} />)}
	</g>
));
/** Two parent strips sending a reshuffled strip to an offspring (b09 lane 2 style, grey). */
export const BreedIcon: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={90} height={14} rx={6} fill="#c8cbcf" />
		<rect x={x + 120} y={y} width={90} height={14} rx={6} fill="#a9adb2" />
		<path d={`M${x + 45},${y + 20} L${x + 105},${y + 56} M${x + 165},${y + 20} L${x + 105},${y + 56}`} stroke={GREYT} strokeWidth={2.5} />
		<rect x={x + 60} y={y + 62} width={45} height={14} rx={6} fill="#c8cbcf" />
		<rect x={x + 105} y={y + 62} width={45} height={14} rx={6} fill="#a9adb2" />
	</g>
));
export const useF = () => useCurrentFrame();
void rng; void plH; void Arr; void MarkText; void Pill; void Colonies; void DivTree; void GeneSeg; void Patch; void Thermo; void Tube; void tw; void vis; void prog; void DrawPath; void Bact; void Pl; void platePt; void PLATES; void CARD; void INK;
