// AssortmentDiagram (bio11m1bAssortment) — how fast independent assortment
// multiplies gamete variety.
//
// Three stone-ledge panels: 1, 2 and 3 homologous pairs (one chromosome of each
// pair in the accent colour, one in coral). Under each, every possible gamete
// is drawn: each gamete gets ONE chromosome from each pair, so the gametes are
// generated as all 2ⁿ combinations and their number is counted from the list
// drawn (2, 4, 8). Then the human case is computed, 2²³, and shown with its
// digits grouped (8,388,608), followed by chips for what multiplies it further
// (crossing over, random fertilisation).
//
// Props: `at` (frames after `delay`): one / two / three / human / crossing /
// fertilisation / rule; `pairs` for the human case (default 23); `rule` text.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {fadeAt, popAt, CORAL, GlossDefs, Chromosome, Ledge, Pill} from './shared';

export type AssortmentProps = {
	at?: {one?: number; two?: number; three?: number; human?: number; crossing?: number; fertilisation?: number; rule?: number};
	pairs?: number;
	rule?: string;
	delay?: number;
};

const ID = 'b11m1bAss';
const W = 760, H = 530;
const LENS = [34, 26, 18];

const combos = (n: number) => Array.from({length: 2 ** n}, (_, i) => Array.from({length: n}, (_, k) => (i >> (n - 1 - k)) & 1));
const sup = (v: number) => v.toString().split('').map((d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+d]).join('');
const group = (v: number) => v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const AssortmentDiagram = ({at = {}, pairs = 23, rule, delay = 62}: AssortmentProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const t = [at.one ?? 10, at.two ?? 90, at.three ?? 170];
	const tH = at.human ?? 260, tC = at.crossing ?? 340, tF = at.fertilisation ?? 400, tR = at.rule ?? 480;
	const pulse = idlePulse(frame, 50);
	const cols = [{x: 110, n: 1}, {x: 300, n: 2}, {x: 560, n: 3}];
	const human = 2 ** pairs;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Independent assortment: 2 to the power of the number of pairs gamete combinations" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{pat: theme.accent, mat: CORAL}} />
			{cols.map((c, ci) => {
				const op = fadeAt(frame, t[ci], 12);
				const gam = combos(c.n);
				const perRow = c.n === 3 ? 4 : gam.length;
				return (
					<g key={ci} opacity={op}>
						<text x={c.x} y={30} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{c.n} pair{c.n > 1 ? 's' : ''}</text>
						{/* the homologous pairs */}
						{Array.from({length: c.n}, (_, k) => {
							const px = c.x + (k - (c.n - 1) / 2) * 44;
							return (
								<g key={k}>
									<Chromosome id={ID} x={px - 8} y={84 + idleBob(frame, ci * 5 + k, 0.8)} len={LENS[k] * 1.3} w={10} color="pat" chromatids={1} />
									<Chromosome id={ID} x={px + 8} y={84 + idleBob(frame, ci * 5 + k + 9, 0.8)} len={LENS[k] * 1.3} w={10} color="mat" chromatids={1} />
								</g>
							);
						})}
						<Ledge x={c.x - 86} y={122} w={172} />
						{/* every possible gamete */}
						{gam.map((bits, gi) => {
							const p = Math.min(1, popAt(frame, fps, t[ci] + 20 + gi * 6));
							const row = Math.floor(gi / perRow), col = gi % perRow;
							const gx = c.x + (col - (perRow - 1) / 2) * 50, gy = 188 + row * 58;
							return (
								<g key={gi} transform={`translate(${gx},${gy}) scale(${p})`}>
									<circle r={22} fill={`url(#${ID}-cyto)`} stroke="#b9ab93" strokeWidth={2.5} />
									{bits.map((b, k) => (
										<Chromosome key={k} id={ID} x={(k - (c.n - 1) / 2) * 11} y={0} len={LENS[k] * 0.9} w={7} color={b ? 'mat' : 'pat'} chromatids={1} />
									))}
								</g>
							);
						})}
						<text x={c.x} y={c.n === 3 ? 292 : 238} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800} opacity={fadeAt(frame, t[ci] + 30 + gam.length * 6)}>
							2{sup(c.n)} = {gam.length} gametes
						</text>
					</g>
				);
			})}
			{/* the human case */}
			<g opacity={fadeAt(frame, tH)}>
				<rect x={110} y={326} width={540} height={70} rx={16} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
				<text x={380} y={354} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>humans: {pairs} pairs</text>
				<text x={380} y={384} textAnchor="middle" fill={TOK.amberInk} fontSize={26} fontWeight={800} opacity={0.85 + 0.15 * pulse}>2{sup(pairs)} = {group(human)}</text>
			</g>
			<g opacity={fadeAt(frame, tC)}>
				<Pill x={250} y={428} text="× crossing over" color={theme.accent} size={16} />
			</g>
			<g opacity={fadeAt(frame, tF)}>
				<Pill x={510} y={428} text="× random fertilisation" color={CORAL} size={16} />
			</g>
			{rule && <text x={W / 2} y={H - 14} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, tR) * (0.82 + 0.18 * pulse)}>{rule}</text>}
		</svg>
	);
};
