// CoefSubscriptDiagram (kind: chem11m2CoefSub): coefficients, not subscripts.
//
// A balanced equation written large, token by token, so each coefficient can
// be boxed (green: counts moles) and each subscript circled (purple: counts
// atoms inside one formula). Below, the molecules stand on plinths in the
// coefficient numbers (2 H₂, 1 O₂, 2 H₂O), the implicit 1 is written in, and
// the mole ratio between two chosen species is read off the coefficients and
// simplified (2 : 2 = 1 : 1). Finally the subscripts dim: they never enter the
// ratio. Everything is computed from `species`.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, Molecule, idleBob, idlePulse} from '../../diorama';
import {LANE, clamp, textW} from './parts';

/** A formula as [symbol, subscript] parts, e.g. H₂O = [["H","₂"],["O",""]]. */
type Species = {parts: [string, string][]; coef: number; atoms: string[]; side: 'left' | 'right'};

export type CoefSubscriptProps = {
	species?: Species[];
	/** Indices of the two species whose ratio is read off. */
	ratio?: [number, number];
	beats?: {coef?: number; sub?: number; coefLabel?: number; subLabel?: number; molecules?: number; counts?: number; ratio?: number; dim?: number};
	delay?: number;
};

const ID = 'c11m2cs';
const W = 760;
const VB_H = 520;
const FS = 62;
const EQ_Y = 96;
const PL_Y = 344;

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

export const CoefSubscriptDiagram = ({
	species = [
		{parts: [['H', '₂']], coef: 2, atoms: ['H', 'H'], side: 'left'},
		{parts: [['O', '₂']], coef: 1, atoms: ['O', 'O'], side: 'left'},
		{parts: [['H', '₂'], ['O', '']], coef: 2, atoms: ['O', 'H', 'H'], side: 'right'},
	],
	ratio = [0, 2],
	beats = {},
	delay = 62,
}: CoefSubscriptProps) => {
	const frame = useCurrentFrame() - delay;
	const fade = (d: number | undefined, len = 12) => (d === undefined ? 0 : interpolate(frame, [d, d + len], [0, 1], clamp));
	const pulse = idlePulse(frame);
	const dim = fade(beats.dim, 20);

	// Lay out the equation tokens left to right.
	type Tok = {text: string; role: 'coef' | 'ghost' | 'sym' | 'sub' | 'op'; x: number; w: number; si?: number};
	const toks: Tok[] = [];
	let x = 0;
	// Heavy display weight: measured glyph widths are wider than textW's body-text estimate.
	const glyphW = (text: string, size: number) => [...text].reduce((a, ch) => a + (/[0-9₀-₉]/.test(ch) ? 0.66 : /[A-Z]/.test(ch) ? 0.8 : 0.62) * size, 0) + 3;
	const push = (text: string, role: Tok['role'], size: number, si?: number, gap = 0) => {
		const w = role === 'op' ? gap : glyphW(text, size);
		toks.push({text, role, x, w, si});
		x += w;
	};
	species.forEach((s, i) => {
		if (i > 0) push(species[i - 1].side === 'left' && s.side === 'right' ? '→' : '+', 'op', FS, undefined, s.side !== species[i - 1].side ? 96 : 66);
		if (s.coef > 1) push(String(s.coef), 'coef', FS, i);
		else push('1', 'ghost', FS, i);
		s.parts.forEach(([sym, sub]) => {
			push(sym, 'sym', FS, i);
			if (sub) push(sub, 'sub', FS * 0.62, i);
		});
	});
	const x0 = (W - x) / 2;

	const plinthXs = species.length === 3 ? [130, 380, 630] : species.map((_, i) => 110 + (i * 540) / Math.max(1, species.length - 1));
	const elements = Array.from(new Set(species.flatMap((s) => s.atoms)));
	const [ra, rb] = ratio;
	const ca = species[ra].coef, cb = species[rb].coef;
	const g = gcd(ca, cb);
	const nameOf = (s: Species) => s.parts.map(([a, b]) => a + b).join('');
	const ratioText = `${nameOf(species[ra])} : ${nameOf(species[rb])} = ${ca} : ${cb}${g > 1 ? ` = ${ca / g} : ${cb / g}` : ''}`;
	const ratioW = textW(ratioText, 24) + 48;

	return (
		<svg viewBox={`0 0 ${W} ${VB_H}`} role="img" aria-label={`Mole ratio from coefficients: ${ratioText}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={elements} />

			{/* Equation */}
			<g opacity={fade(0, 14)}>
				{toks.map((t, i) => {
					const tx = x0 + t.x;
					if (t.role === 'op') {
						return <text key={i} x={tx + t.w / 2} y={EQ_Y} textAnchor="middle" fill={TOK.inkDim} fontSize={FS * 0.85} fontWeight={700}>{t.text}</text>;
					}
					if (t.role === 'ghost') {
						return <text key={i} x={tx} y={EQ_Y} fill={LANE.given} fontSize={FS} fontWeight={900} opacity={fade(beats.counts) * 0.55}>1</text>;
					}
					const isCoef = t.role === 'coef';
					const isSub = t.role === 'sub';
					const color = isCoef && frame >= (beats.coef ?? Infinity) ? LANE.given : isSub && frame >= (beats.sub ?? Infinity) ? (dim > 0 ? TOK.inkMute : LANE.wanted) : TOK.ink;
					return (
						<text key={i} x={tx} y={isSub ? EQ_Y + 10 : EQ_Y} fill={color} fontSize={isSub ? FS * 0.62 : FS} fontWeight={900}>{isSub ? t.text.replace('₂', '2').replace('₃', '3').replace('₄', '4') : t.text}</text>
					);
				})}
				{/* coefficient boxes */}
				{toks.filter((t) => t.role === 'coef' || t.role === 'ghost').map((t, i) => (
					<rect key={`c${i}`} x={x0 + t.x - 6} y={EQ_Y - FS * 0.78} width={t.w + 12} height={FS * 0.98} rx={10} fill="none" stroke={LANE.given} strokeWidth={3} opacity={fade(t.role === 'ghost' ? beats.counts : beats.coef)} />
				))}
				{/* subscript rings */}
				{toks.filter((t) => t.role === 'sub').map((t, i) => (
					<circle key={`s${i}`} cx={x0 + t.x + t.w / 2 - 1} cy={EQ_Y + 12 - FS * 0.2} r={18} fill="none" stroke={dim > 0 ? TOK.inkMute : LANE.wanted} strokeWidth={3} opacity={fade(beats.sub)} strokeDasharray={dim > 0 ? '5 5' : undefined} />
				))}
			</g>

			{/* What each number means */}
			<text x={x0 - 4} y={EQ_Y + 62} fill={LANE.given} fontSize={22} fontWeight={800} opacity={fade(beats.coefLabel)}>big number in front: moles</text>
			<text x={x0 + x + 4} y={EQ_Y + 94} textAnchor="end" fill={dim > 0 ? TOK.inkMute : LANE.wanted} fontSize={22} fontWeight={800} opacity={fade(beats.subLabel)}>
				{dim > 0 ? 'subscripts: not in the ratio' : 'small number inside: atoms'}
			</text>

			{/* Molecules in coefficient numbers */}
			{species.map((s, i) => {
				const cx = plinthXs[i];
				const on = fade((beats.molecules ?? 200) + i * 10, 14);
				const n = s.coef;
				return (
					<g key={i} opacity={on}>
						<DioramaPlinth id={ID} cx={cx} cy={PL_Y} rx={112}>
							{Array.from({length: n}, (_, k) => (
								<Molecule key={k} id={ID} atoms={s.atoms} x={cx + (k - (n - 1) / 2) * 92} y={PL_Y - 22 + idleBob(frame, k + i * 5, 1.6)} r={27} />
							))}
						</DioramaPlinth>
						<text x={cx} y={PL_Y + 98} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={900} opacity={fade(beats.counts)}>
							<tspan fill={LANE.given}>{s.coef}</tspan> {nameOf(s)}
						</text>
					</g>
				);
			})}

			{/* The ratio */}
			<g opacity={fade(beats.ratio)}>
				<rect x={W / 2 - ratioW / 2} y={VB_H - 58} width={ratioW} height={46} rx={23} fill="#fff6e3" stroke={TOK.amber} strokeWidth={2.5 + pulse * 1.5} />
				<text x={W / 2} y={VB_H - 27} textAnchor="middle" fill={TOK.amberInk} fontSize={24} fontWeight={900}>{ratioText}</text>
			</g>
		</svg>
	);
};
