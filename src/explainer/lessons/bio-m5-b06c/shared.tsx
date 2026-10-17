// B6c shared pieces: the standard genetic code (ported logic from the legacy codon table, checked at build time
// against an independently written codon list), directed anticodons, the coded tRNA (L silhouette, anticodon tiles
// with 3' and 5' ends, amino acid bead), amino acid beads and peptide links, the flipped ribosome plate split into its
// two subunits, the translation board geometry, slot outlines and the coded 4 by 4 codon chart.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b6c/measured/lesson.json';
import {
	AMBER, AMBER_INK, BaseTile, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, INK, INK_SOFT, MRNA, MRNA_INK, Strand, Sx, prog, sceneOf,
} from '../bio-m5-b06b/shared';
import type {TileTone} from '../bio-m5-b06b/shared';
import * as A from './assets';

export const S = sceneOf(lesson as unknown as {scenes: unknown[]});

// ---------- the standard genetic code (ported logic, legacy shared.tsx) ----------
const AA1 = 'FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG';
const ORDER = 'TCAG';
const THREE: Record<string, string> = {F: 'Phe', L: 'Leu', S: 'Ser', Y: 'Tyr', '*': 'stop', C: 'Cys', W: 'Trp', P: 'Pro', H: 'His', Q: 'Gln', R: 'Arg', I: 'Ile', M: 'Met', T: 'Thr', N: 'Asn', K: 'Lys', V: 'Val', A: 'Ala', D: 'Asp', E: 'Glu', G: 'Gly'};
/** Amino acid (three-letter name, or 'stop') for an mRNA codon (U) or a coding-strand codon (T). */
export const codonToAA = (codon: string): string => {
	const c = codon.toUpperCase().replace(/U/g, 'T');
	if (c.length !== 3) return '?';
	const idx = ORDER.indexOf(c[0]) * 16 + ORDER.indexOf(c[1]) * 4 + ORDER.indexOf(c[2]);
	if (idx < 0 || /[^TCAG]/.test(c)) return '?';
	return THREE[AA1[idx]] ?? '?';
};
export const translate = (mrna: string): string[] => {
	const out: string[] = [];
	for (let i = 0; i + 3 <= mrna.length; i += 3) {
		const a = codonToAA(mrna.slice(i, i + 3));
		if (a === 'stop') break;
		out.push(a);
	}
	return out;
};
// Build check: every one of the 64 codons against an independently written standard code (mRNA letters).
(() => {
	const N = ['U', 'C', 'A', 'G'];
	const four = (p: string) => N.map(n => p + n);
	const want: Record<string, string> = {};
	const put = (aa: string, cs: string[]) => cs.forEach(c => { want[c] = aa; });
	put('Phe', ['UUU', 'UUC']); put('Leu', ['UUA', 'UUG', ...four('CU')]); put('Ile', ['AUU', 'AUC', 'AUA']); put('Met', ['AUG']); put('Val', four('GU'));
	put('Ser', [...four('UC'), 'AGU', 'AGC']); put('Pro', four('CC')); put('Thr', four('AC')); put('Ala', four('GC')); put('Tyr', ['UAU', 'UAC']);
	put('stop', ['UAA', 'UAG', 'UGA']); put('His', ['CAU', 'CAC']); put('Gln', ['CAA', 'CAG']); put('Asn', ['AAU', 'AAC']); put('Lys', ['AAA', 'AAG']);
	put('Asp', ['GAU', 'GAC']); put('Glu', ['GAA', 'GAG']); put('Cys', ['UGU', 'UGC']); put('Trp', ['UGG']); put('Arg', [...four('CG'), 'AGA', 'AGG']); put('Gly', four('GG'));
	let n = 0;
	for (const a of N) for (const b of N) for (const c of N) {
		const cod = a + b + c;
		n++;
		if (codonToAA(cod) !== want[cod]) throw new Error(`codon table mismatch at ${cod}: ${codonToAA(cod)} vs ${want[cod]}`);
	}
	if (n !== 64 || Object.keys(want).length !== 64) throw new Error('codon check incomplete');
	const ws = translate('AUGGAAGCUUAA').join(',');
	if (ws !== 'Met,Glu,Ala') throw new Error('worked message check failed: ' + ws);
	if (translate('AUGAAGCCUUGA').join(',') !== 'Met,Lys,Pro') throw new Error('attempt one check failed');
	if (['UAC', 'UUC', 'GGA', 'ACU'].map(codonToAA).join(',') !== 'Tyr,Phe,Gly,Thr') throw new Error('attempt one wrong-route check failed');
})();
/** RNA base pairing (codon to anticodon), written in the same left-to-right order (so the anticodon reads 3' to 5'). */
const PAIR: Record<string, string> = {A: 'U', U: 'A', C: 'G', G: 'C'};
export const anticodonOf = (codon: string) => codon.split('').map(c => PAIR[c] ?? '?').join('');
export const reverse = (s: string) => s.split('').reverse().join('');
if (anticodonOf('GAA') !== 'CUU' || reverse(anticodonOf('GAA')) !== 'UUC' || anticodonOf('AUG') !== 'UAC' || anticodonOf('GCU') !== 'CGA' || anticodonOf('GCA') !== 'CGU' || anticodonOf('AAG') !== 'UUC') throw new Error('anticodon check failed');
export const TWENTY = ['Ala', 'Arg', 'Asn', 'Asp', 'Cys', 'Gln', 'Glu', 'Gly', 'His', 'Ile', 'Leu', 'Lys', 'Met', 'Phe', 'Pro', 'Ser', 'Thr', 'Trp', 'Tyr', 'Val'];
if ([...new Set(AA1.split('').filter(c => c !== '*').map(c => THREE[c]))].sort().join(',') !== TWENTY.join(',')) throw new Error('twenty amino acids check failed');

// ---------- tokens ----------
export const TRNA = '#9a8bb3';
export const TRNA_INK = '#5f527a';
const AA_FILL: Record<string, string> = {Met: '#e7b98f', Glu: '#dba6a0', Ala: '#cfc58e', Lys: '#b7c79f', Pro: '#cbb3d8', Gly: '#a8c6d0', Tyr: '#e2c27c', Phe: '#c9b39b', Thr: '#b9cfb9', Val: '#d6b0c4', Asp: '#e0ae86'};
export const aaFill = (aa: string) => AA_FILL[aa] ?? '#d9cbb3';

// ---------- the translation board ----------
/** Base pitch, tile size and stalk on the translation board. */
export const PB = 70, TWC = 60, THC = 46, SOC = 18;
export const YG = 600; // mRNA backbone (the groove)
export const MX = 520; // first base of the worked message
export const CODON_W = 3 * PB;
export const codonC = (k: number, mx = MX) => mx + (3 * k + 1) * PB;
/** Anticodon tile attach line when a tRNA is docked on a codon whose backbone is at y. */
export const anchorY = (y = YG) => y - SOC - THC - 10 - THC;
/** Ribosome groove centre for a step (step 0: codon 0 in the first slot). */
export const ribX = (step: number, mx = MX) => codonC(0, mx) + 1.5 * PB + step * CODON_W;
export const WORKED = 'AUGGAAGCUUAA';

/** An mRNA strand on the board (tiles face up, 5' on the left). */
export const MrnaC: React.FC<{x?: number; y?: number; letters?: string; o?: number; unit?: (i: number) => number; glow?: (i: number) => number; tone?: (i: number) => TileTone; bbGlow?: number; letterOf?: (i: number) => string; tileO?: (i: number) => number}> = ({x = MX, y = YG, letters = WORKED, o = 1, unit, glow, tone, bbGlow, letterOf, tileO}) => (
	<Strand x={x} y={y} letters={letters} pitch={PB} face="up" color={MRNA} tw={TWC} th={THC} so={SOC} thick={7} o={o} unit={unit} glow={glow} tone={tone} bbGlow={bbGlow} letterOf={letterOf} tileO={tileO} />
);
export const MrnaEnds: React.FC<{x?: number; y?: number; n?: number; o?: number; at?: number}> = ({x = MX, y = YG, n = WORKED.length, o = 1, at = -100}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	const st = {fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40} as const;
	return (
		<g opacity={p}>
			<text x={x - 48} y={y + 14} textAnchor="middle" style={st} fill={MRNA_INK}>5'</text>
			<text x={x + (n - 1) * PB + 48} y={y + 14} textAnchor="middle" style={st} fill={MRNA_INK}>3'</text>
		</g>
	);
};

// ---------- amino acid beads ----------
export const AABead: React.FC<{x: number; y: number; aa: string; r?: number; o?: number; ring?: number; grey?: boolean}> = ({x, y, aa, r = 30, o = 1, ring = 0, grey = false}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{ring > 0.01 ? <circle cx={x} cy={y} r={r + 12} fill="none" stroke={AMBER} strokeWidth={6} opacity={ring} /> : null}
		<circle cx={x} cy={y} r={r} fill={grey ? '#d3d6da' : aaFill(aa)} stroke={grey ? GREYT : INK_SOFT} strokeWidth={3} />
		<text x={x} y={y + r * 0.3} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 0.72}} fill={grey ? GREY_INK : INK}>{aa}</text>
	</g>
));
/** A peptide link between two beads; flash 0..1 shows it amber. */
export const PepLink: React.FC<{a: [number, number]; b: [number, number]; o?: number; flash?: number; r?: number}> = ({a, b, o = 1, flash = 0, r = 30}) => {
	if (o <= 0.01) return null;
	const d = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
	const ux = (b[0] - a[0]) / d, uy = (b[1] - a[1]) / d;
	const p1 = [a[0] + ux * r, a[1] + uy * r], p2 = [b[0] - ux * r, b[1] - uy * r];
	return (
		<g opacity={o}>
			{flash > 0.01 ? <line x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} stroke={AMBER} strokeWidth={18} strokeLinecap="round" opacity={0.7 * flash} /> : null}
			<line x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} stroke={INK} strokeWidth={6} strokeLinecap="round" />
		</g>
	);
};

// ---------- tRNA ----------
/** Where the amino acid bead sits on a tRNA anchored at (x, ya) with scale s. */
export const beadPos = (x: number, ya: number, s = 1): [number, number] => [x + 58 * s, ya - 262 * s];
/**
 * A coded tRNA: a compact lilac-grey L silhouette with three anticodon tiles at the bottom (facing down, in screen
 * order) and its 3' and 5' ends tagged, and the amino acid bead at the top end. (x, ya) is the tile attach line.
 */
export const TRna: React.FC<{x: number; ya: number; anti?: string; aa?: string | null; o?: number; s?: number; tileGlow?: (i: number) => number; ends?: boolean; leftEnd?: string; rightEnd?: string; beadO?: number; clash?: number; draw?: number; hi?: number; tileTone?: (i: number) => TileTone; beadRing?: number}> = ({x, ya, anti, aa, o = 1, s = 1, tileGlow, ends = true, leftEnd = "3'", rightEnd = "5'", beadO = 1, clash = -1, draw = 1, hi = 0, tileTone, beadRing = 0}) => {
	if (o <= 0.01) return null;
	const body = 'M0,-14 L0,-120 C0,-160 20,-176 58,-182 L58,-232';
	const bp = beadPos(0, 0, 1);
	return (
		<g opacity={o} transform={`translate(${x},${ya}) scale(${s})`}>
			{hi > 0.01 ? <path d={body} fill="none" stroke={AMBER} strokeWidth={74} strokeLinecap="round" strokeLinejoin="round" opacity={0.35 * hi} /> : null}
			<path d={body} fill="none" stroke={TRNA_INK} strokeWidth={50} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - draw} />
			<path d={body} fill="none" stroke={TRNA} strokeWidth={42} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - draw} />
			{draw > 0.6 ? [-80, -100, -152].map((yy, i) => <line key={i} x1={-12} y1={yy} x2={12} y2={yy} stroke="#e6def2" strokeWidth={4} opacity={(draw - 0.6) / 0.4} />) : null}
			<rect x={-1.5 * PB + 5} y={-18} width={3 * PB - 10} height={20} rx={10} fill={TRNA} stroke={TRNA_INK} strokeWidth={3} opacity={draw} />
			{anti ? anti.split('').map((l, i) => (
				<BaseTile key={i} x={(i - 1) * PB} y={0} face="down" l={l} w={TWC} h={THC} glow={tileGlow ? tileGlow(i) : 0} tone={i === clash ? 'grey' : tileTone ? tileTone(i) : undefined} o={draw} />
			)) : null}
			{anti && ends ? (
				<g opacity={draw}>
					<text x={-78} y={-30} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32}} fill={TRNA_INK}>{leftEnd}</text>
					<text x={86} y={-30} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32}} fill={TRNA_INK}>{rightEnd}</text>
				</g>
			) : null}
			{aa ? <AABead x={bp[0]} y={bp[1]} aa={aa} o={beadO * draw} ring={beadRing} /> : null}
		</g>
	);
};

// ---------- the ribosome (painted plate, flipped, split into subunits) ----------
/** Boundary between the subunits in the flipped plate (x, y') read off the plate's colours. */
const BOUND: [number, number][] = [[440, 1154], [460, 1122], [480, 1114], [500, 1112], [520, 1112], [540, 1117], [560, 1121], [580, 1126], [600, 1103], [620, 1103], [640, 1081], [660, 1088], [680, 1100], [700, 1092], [720, 1123], [740, 1142], [760, 1162], [780, 1149], [800, 1127], [820, 1126], [840, 1143], [860, 1143], [880, 1143], [900, 1149], [920, 1115], [940, 1096], [960, 1091], [980, 1071], [1000, 1059], [1020, 1059], [1040, 1058], [1060, 1060], [1080, 1069], [1100, 1057], [1120, 1069], [1140, 1072], [1160, 1078], [1180, 1056], [1200, 1039], [1220, 1065], [1240, 1077], [1260, 1091], [1280, 1094], [1300, 1098], [1320, 1113], [1340, 1121], [1360, 1119], [1380, 1118], [1400, 1111], [1420, 1108], [1440, 1125], [1460, 1163], [1480, 1188], [1500, 1216], [1520, 1244]];
const bnd = BOUND.map(p => `L${p[0]},${p[1]}`).join(' ');
const bndRev = [...BOUND].reverse().map(p => `L${p[0]},${p[1]}`).join(' ');
const LARGE_CLIP = `M200,200 L1800,200 L1800,1300 L1530,1300 ${bndRev} L430,1300 L200,1300 Z`;
const SMALL_CLIP = `M200,1300 L430,1300 ${bnd} L1530,1300 L1800,1300 L1800,1800 L200,1800 Z`;
/** Groove centre in flipped plate pixels. */
export const RIB_G: [number, number] = [1000, 1090];
/**
 * The flipped ribosome with its groove centre at (x, y), scale k. largeDy/smallDy move each subunit, largeO/smallO
 * fade them. `id` must be unique on screen (clip paths).
 */
export const Ribosome: React.FC<{id: string; x: number; y: number; k?: number; largeDy?: number; smallDy?: number; largeO?: number; smallO?: number; o?: number; largeDx?: number; smallDx?: number; tint?: number}> = ({id, x, y, k = 0.5, largeDy = 0, smallDy = 0, largeO = 1, smallO = 1, o = 0.88, largeDx = 0, smallDx = 0, tint = 0}) => {
	if (o <= 0.01) return null;
	const tf = (dx: number, dy: number) => `translate(${x - RIB_G[0] * k + dx},${y - RIB_G[1] * k + dy}) scale(${k})`;
	const img = <g transform="translate(0,2000) scale(1,-1)"><image href={staticFile(A.RIBO)} x={0} y={0} width={2000} height={2000} /></g>;
	return (
		<g opacity={o}>
			<defs>
				<clipPath id={`${id}-L`} clipPathUnits="userSpaceOnUse"><path d={LARGE_CLIP} /></clipPath>
				<clipPath id={`${id}-S`} clipPathUnits="userSpaceOnUse"><path d={SMALL_CLIP} /></clipPath>
			</defs>
			{smallO > 0.01 ? <g transform={tf(smallDx, smallDy)} clipPath={`url(#${id}-S)`} opacity={smallO}>{img}</g> : null}
			{largeO > 0.01 ? <g transform={tf(largeDx, largeDy)} clipPath={`url(#${id}-L)`} opacity={largeO}>{img}</g> : null}
			{tint > 0.01 ? <ellipse cx={x} cy={y} rx={360 * k * 2} ry={330 * k * 2} fill="#9aa0a6" opacity={0.25 * tint} /> : null}
		</g>
	);
};
/** Faint slot outlines for the two working positions. */
export const Slots: React.FC<{rx: number; o?: number; labels?: boolean; y?: number; hot?: [number, number]}> = ({rx, o = 1, labels = true, y = YG, hot = [0, 0]}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{[0, 1].map(s => {
				const x0 = rx - CODON_W + s * CODON_W + 6;
				return (
					<g key={s}>
						{hot[s] > 0.01 ? <rect x={x0} y={y - SOC - THC - 14} width={CODON_W - 12} height={THC + SOC + 24} rx={14} fill={AMBER} opacity={0.25 * hot[s]} /> : null}
						<rect x={x0} y={y - SOC - THC - 14} width={CODON_W - 12} height={THC + SOC + 24} rx={14} fill="none" stroke="#5a4636" strokeWidth={3} strokeDasharray="9 7" opacity={0.65} />
						{labels ? <text x={x0 + (CODON_W - 12) / 2} y={y + 58} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32}} fill="#4a3426">{s === 0 ? 'first slot' : 'second slot'}</text> : null}
					</g>
				);
			})}
		</g>
	);
};
/** A plain coded blob: the release protein or a loading enzyme. */
export const ProteinBlob: React.FC<{x: number; y: number; r?: number; o?: number; fill?: string; stroke?: string; label?: string; seed?: number}> = ({x, y, r = 40, o = 1, fill = '#b8c9b0', stroke = '#5c7353', label, seed = 2}) => {
	if (o <= 0.01) return null;
	const d = Array.from({length: 41}, (_, i) => {
		const t = (i / 40) * Math.PI * 2;
		const w = 1 + 0.1 * Math.sin(3 * t + seed) + 0.07 * Math.cos(5 * t + seed);
		return `${i ? 'L' : 'M'}${(x + r * w * Math.cos(t)).toFixed(1)},${(y + r * 0.8 * w * Math.sin(t)).toFixed(1)}`;
	}).join(' ') + ' Z';
	return (
		<g opacity={o}>
			<path d={d} fill={fill} stroke={stroke} strokeWidth={3.5} />
			{label ? <text x={x} y={y + r + 36} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32}} fill={stroke}>{label}</text> : null}
		</g>
	);
};

// ---------- the codon chart ----------
export const NB = ['U', 'C', 'A', 'G'];
export type ChartGeom = {x0: number; y0: number; cw: number; ch: number};
export const CHART: ChartGeom = {x0: 230, y0: 250, cw: 290, ch: 168};
export const chartLine = (g: ChartGeom, codon: string) => {
	const r = NB.indexOf(codon[0]), c = NB.indexOf(codon[1]), t = NB.indexOf(codon[2]);
	return {x: g.x0 + c * g.cw, y: g.y0 + r * g.ch + 30 + t * 36, r, c, t};
};
/** The full 4 by 4 codon chart (first base down the left, second across the top, third down the right of each box). */
export const CodonChart: React.FC<{g?: ChartGeom; at: number; rowHi?: number; colHi?: number; row?: number; col?: number; lineHi?: Record<string, number>; o?: number}> = ({g = CHART, at, rowHi = 0, colHi = 0, row = -1, col = -1, lineHi = {}, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 20) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			<text x={g.x0 + 2 * g.cw} y={g.y0 - 56} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>second base</text>
			<text x={g.x0 - 92} y={g.y0 + 2 * g.ch} textAnchor="middle" transform={`rotate(-90 ${g.x0 - 92} ${g.y0 + 2 * g.ch})`} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>first base</text>
			<text x={g.x0 + 4 * g.cw + 46} y={g.y0 - 20} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill={INK_SOFT}>third</text>
			{row >= 0 && rowHi > 0.01 ? <rect x={g.x0} y={g.y0 + row * g.ch} width={4 * g.cw} height={g.ch} fill={AMBER} opacity={0.16 * rowHi} /> : null}
			{col >= 0 && colHi > 0.01 ? <rect x={g.x0 + col * g.cw} y={g.y0} width={g.cw} height={4 * g.ch} fill={AMBER} opacity={0.16 * colHi} /> : null}
			{row >= 0 && col >= 0 && rowHi * colHi > 0.01 ? <rect x={g.x0 + col * g.cw} y={g.y0 + row * g.ch} width={g.cw} height={g.ch} fill="none" stroke={AMBER} strokeWidth={6} opacity={rowHi * colHi} /> : null}
			{NB.map((b, i) => (
				<g key={b}>
					<text x={g.x0 + i * g.cw + g.cw / 2} y={g.y0 - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38}} fill={INK}>{b}</text>
					<text x={g.x0 - 34} y={g.y0 + i * g.ch + g.ch / 2 + 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38}} fill={INK}>{b}</text>
				</g>
			))}
			{NB.map((a, r) => NB.map((b, c) => (
				<g key={a + b}>
					<rect x={g.x0 + c * g.cw} y={g.y0 + r * g.ch} width={g.cw} height={g.ch} fill="#fffdf8" fillOpacity={0.6} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
					{NB.map((t, k) => {
						const cod = a + b + t;
						const aa = codonToAA(cod);
						const hi = lineHi[cod] ?? 0;
						const y = g.y0 + r * g.ch + 30 + k * 36;
						const stop = aa === 'stop';
						return (
							<g key={t}>
								{stop ? <rect x={g.x0 + c * g.cw + 8} y={y - 25} width={g.cw - 16} height={32} rx={8} fill="#dfe2e5" /> : null}
								{hi > 0.01 ? <rect x={g.x0 + c * g.cw + 6} y={y - 26} width={g.cw - 12} height={34} rx={8} fill={AMBER} opacity={0.45 * hi} /> : null}
								<text x={g.x0 + c * g.cw + 18} y={y} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 25}} fill={stop ? GREY_INK : INK}>{cod}</text>
								<text x={g.x0 + c * g.cw + 100} y={y} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 25}} fill={stop ? GREY_INK : INK}>{aa}</text>
								{cod === 'AUG' ? <text x={g.x0 + c * g.cw + 168} y={y} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill={AMBER_INK}>start</text> : null}
								{c === 3 ? <text x={g.x0 + 4 * g.cw + 46} y={y} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 24}} fill={INK_SOFT}>{t}</text> : null}
							</g>
						);
					})}
				</g>
			)))}
		</g>
	);
};
export {Fade, Sx, DrawPath};
