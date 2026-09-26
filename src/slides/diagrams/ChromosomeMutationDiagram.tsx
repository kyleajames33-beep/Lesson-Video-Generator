// ChromosomeMutationDiagram — a reference chromosome (segment bands A B C D E)
// shown four ways: deletion, duplication, inversion, translocation. In the
// diorama family: each chromosome is a painted, rounded rod with glossy bands
// casting a soft shadow.
//
// Each variant starts as a copy of the normal chromosome and changes in front
// of the viewer when the narration names it, so the change itself is the
// picture:
//   deletion       C shrinks away, D E close the gap          → A B D E
//   duplication    a second C slides out of the first         → A B C C D E
//   inversion      B and D swap ends over C (B–D reversed)    → A D C B E
//   translocation  D E slide away, M N from another chromosome slide in → A B C M N
// In the hold, the changed segment on each variant breathes gently.

import {interpolate, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {DioramaDefs, idlePulse} from './diorama';
import {clamp, shade} from './kinds/restyle-generic/paint';
import {buildStart, mentionOf, sceneTimingFor} from './kinds/restyle-generic/sceneSync';

const ID = 'chrommut';
const SEG = 50;
const H = 42;
const GAP = 4;

// A band's journey: slot position and opacity/height from before → after.
type Band = {label: string; key: string; s0: number; s1: number; o0: number; o1: number; h0?: number; h1?: number; arc?: number; changed?: boolean};

const VARIANTS: {name: string; note: string; word: string; bands: Band[]}[] = [
	{
		name: 'deletion',
		note: 'segment C lost',
		word: 'deletion',
		bands: [
			{label: 'A', key: 'A', s0: 0, s1: 0, o0: 1, o1: 1},
			{label: 'B', key: 'B', s0: 1, s1: 1, o0: 1, o1: 1},
			{label: 'C', key: 'C', s0: 2, s1: 2, o0: 1, o1: 0, h0: 1, h1: 0, changed: true},
			{label: 'D', key: 'D', s0: 3, s1: 2, o0: 1, o1: 1},
			{label: 'E', key: 'E', s0: 4, s1: 3, o0: 1, o1: 1},
		],
	},
	{
		name: 'duplication',
		note: 'segment C copied',
		word: 'duplication',
		bands: [
			{label: 'A', key: 'A', s0: 0, s1: 0, o0: 1, o1: 1},
			{label: 'B', key: 'B', s0: 1, s1: 1, o0: 1, o1: 1},
			{label: 'C', key: 'C', s0: 2, s1: 2, o0: 1, o1: 1},
			{label: 'C', key: 'C2', s0: 2, s1: 3, o0: 0, o1: 1, changed: true},
			{label: 'D', key: 'D', s0: 3, s1: 4, o0: 1, o1: 1},
			{label: 'E', key: 'E', s0: 4, s1: 5, o0: 1, o1: 1},
		],
	},
	{
		name: 'inversion',
		note: 'B–D order flipped',
		word: 'inversion',
		bands: [
			{label: 'A', key: 'A', s0: 0, s1: 0, o0: 1, o1: 1},
			{label: 'B', key: 'B', s0: 1, s1: 3, o0: 1, o1: 1, arc: -1, changed: true},
			{label: 'C', key: 'C', s0: 2, s1: 2, o0: 1, o1: 1, changed: true},
			{label: 'D', key: 'D', s0: 3, s1: 1, o0: 1, o1: 1, arc: 1, changed: true},
			{label: 'E', key: 'E', s0: 4, s1: 4, o0: 1, o1: 1},
		],
	},
	{
		name: 'translocation',
		note: 'D–E replaced by M–N from another chromosome',
		word: 'translocation',
		bands: [
			{label: 'A', key: 'A', s0: 0, s1: 0, o0: 1, o1: 1},
			{label: 'B', key: 'B', s0: 1, s1: 1, o0: 1, o1: 1},
			{label: 'C', key: 'C', s0: 2, s1: 2, o0: 1, o1: 1},
			{label: 'D', key: 'D', s0: 3, s1: 5.4, o0: 1, o1: 0, arc: 1},
			{label: 'E', key: 'E', s0: 4, s1: 6.4, o0: 1, o1: 0, arc: 1},
			{label: 'M', key: 'M', s0: 5.4, s1: 3, o0: 0, o1: 1, arc: -1, changed: true},
			{label: 'N', key: 'N', s0: 6.4, s1: 4, o0: 0, o1: 1, arc: -1, changed: true},
		],
	},
];

const REF = ['A', 'B', 'C', 'D', 'E'];

export const ChromosomeMutationDiagram = ({delay}: {delay?: number}) => {
	const frame = useCurrentFrame();
	const theme = useAccent();
	const timing = sceneTimingFor('chromosomeMutation', 'chromosomeMutation');
	const start = buildStart(delay, timing);
	const f = frame - start;

	// Palette: accent hues for the home chromosome, grey for a segment from
	// a different chromosome (M, N).
	const bandColor = (label: string) => (label === 'M' || label === 'N' ? '#8b929a' : 'ACE'.includes(label) ? theme.accent : theme.accent2);

	// Beats: each variant changes when the narration names it (else a stagger).
	let from = 0;
	const beat = VARIANTS.map((v, k) => {
		const m = timing ? mentionOf(timing, v.word, from) : undefined;
		if (m) from = m.word + 1;
		const fallback = 40 + k * 60;
		const latest = timing ? Math.round(timing.durationInFrames * 0.7) - start : fallback;
		return m ? Math.min(latest, Math.max(24 + k * 12, m.frame - start - 6)) : fallback;
	});
	for (let k = 1; k < beat.length; k++) beat[k] = Math.max(beat[k], beat[k - 1] + 20);
	const hold = interpolate(f, [beat[3] + 60, beat[3] + 90], [0, 1], clamp);

	const refOp = interpolate(f, [0, 16], [0, 1], clamp);
	const refX = (720 - REF.length * SEG) / 2;
	const colL = 48, colR = 388, row1 = 214, row2 = 362;
	const pos = [
		{x: colL, y: row1},
		{x: colR, y: row1},
		{x: colL, y: row2},
		{x: colR, y: row2},
	];

	const bandRect = (label: string, x: number, y: number, w: number, h: number, key: string, o = 1, glow = 0) => {
		const c = bandColor(label);
		return (
			<g key={key} opacity={o}>
				<rect x={x} y={y + (H - h) / 2} width={w} height={h} rx={8} fill={`url(#${ID}-band-${label === 'M' || label === 'N' ? 'x' : 'ACE'.includes(label) ? 'a' : 'b'})`} stroke={shade(c, -0.25)} strokeWidth={1} />
				<rect x={x + 5} y={y + (H - h) / 2 + 5} width={Math.max(0, w - 10)} height={Math.max(0, h * 0.22)} rx={4} fill="#ffffff" opacity={0.35} />
				{glow > 0 ? <rect x={x - 3} y={y - 3} width={w + 6} height={H + 6} rx={10} fill="none" stroke="#ffffff" strokeWidth={3} opacity={glow} /> : null}
				{h > H * 0.5 ? (
					<text x={x + w / 2} y={y + H / 2 + 8} textAnchor="middle" fill="#ffffff" fontSize={22} fontWeight={800} style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
						{label}
					</text>
				) : null}
			</g>
		);
	};

	// A rounded rod behind the bands, sized to the bands currently present.
	const rod = (x: number, y: number, slots: number, o: number) => (
		<g opacity={o}>
			<rect x={x - 8 + 4} y={y - 7 + 8} width={slots * SEG + 12} height={H + 14} rx={(H + 14) / 2} fill="rgba(40,36,30,0.14)" filter={`url(#${ID}-blur)`} />
			<rect x={x - 8} y={y - 7} width={slots * SEG + 12} height={H + 14} rx={(H + 14) / 2} fill="#f3f2ee" stroke={shade(theme.accent, 0.2)} strokeOpacity={0.45} strokeWidth={2} />
		</g>
	);

	return (
		<svg viewBox="0 0 720 470" role="img" aria-label="Chromosomal mutations: deletion, duplication, inversion, translocation" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				{[
					['a', theme.accent],
					['b', theme.accent2],
					['x', '#8b929a'],
				].map(([k, c]) => (
					<linearGradient key={k} id={`${ID}-band-${k}`} x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor={shade(c, 0.14)} />
						<stop offset="55%" stopColor={c} />
						<stop offset="100%" stopColor={shade(c, -0.14)} />
					</linearGradient>
				))}
			</defs>

			{/* reference chromosome */}
			<text x={360} y={36} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800} opacity={refOp}>
				normal chromosome
			</text>
			{rod(refX, 56, REF.length, refOp)}
			<g opacity={refOp}>{REF.map((b, i) => bandRect(b, refX + i * SEG, 56, SEG - GAP, H, `ref${i}`))}</g>
			<line x1={60} y1={140} x2={660} y2={140} stroke={TOK.rule} strokeWidth={2} opacity={refOp} />

			{VARIANTS.map((v, k) => {
				const {x, y} = pos[k];
				const appear = interpolate(f, [beat[k] - 14, beat[k]], [0, 1], clamp);
				const p = interpolate(f, [beat[k] + 10, beat[k] + 40], [0, 1], {...clamp, easing: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)});
				const noteO = interpolate(f, [beat[k] + 34, beat[k] + 46], [0, 1], clamp);
				const glow = hold * 0.55 * idlePulse(frame + k * 17, 66);
				// Rod length follows the bands actually present.
				const present = v.bands.reduce((acc, b) => acc + (b.o0 + (b.o1 - b.o0) * p) * (b.h0 === undefined ? 1 : b.h0 + ((b.h1 ?? 1) - b.h0) * p), 0);
				return (
					<g key={v.name} opacity={appear}>
						<text x={x} y={y - 22} fill={TOK.inkDim} fontSize={20} fontWeight={800}>{v.name}</text>
						{rod(x, y, Math.max(1, present), 1)}
						{v.bands.map((b) => {
							const s = b.s0 + (b.s1 - b.s0) * p;
							const o = b.o0 + (b.o1 - b.o0) * p;
							const hf = b.h0 === undefined ? 1 : b.h0 + ((b.h1 ?? 1) - b.h0) * p;
							const lift = b.arc ? b.arc * Math.sin(p * Math.PI) * 30 : 0;
							return bandRect(b.label, x + s * SEG, y + lift, SEG - GAP, H * hf, b.key, o, b.changed ? glow : 0);
						})}
						<text x={x} y={y + H + 34} fill={TOK.inkDim} fontSize={16} fontWeight={650} opacity={noteO}>{v.note}</text>
					</g>
				);
			})}
		</svg>
	);
};
