// ReshuffleDiagram — the two reshuffles inside meiosis, side by side.
//
// Left, CROSSING OVER: a homologous pair lies together as four chromatids
// (two accent sisters carrying alleles A and B, two coral sisters carrying a
// and b). The two inner (non-sister) chromatids swap matching end segments,
// so the four chromatids that come out are AB, Ab, aB, ab: two recombinants,
// and still only the alleles A, a, B, b. New combinations, no new alleles.
//
// Right, INDEPENDENT ASSORTMENT: two homologous pairs line up on the equator.
// Each pair's orientation is independent, so there are two arrangements, and
// they send different mixes of accent (one parent's) and coral (the other's)
// chromosomes into the gametes. The number of gamete mixes, 2^pairs, is
// computed from the pairs drawn.
//
// Props: `at` (frames after `delay`): cross / swap / assort / arrange2 /
// result; `rule` = the amber line at the end.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, CORAL, Chromosome, GlossDefs, Pill, ease, fadeAt, lerp, popAt} from './shared';

export type ReshuffleProps = {
	at?: {cross?: number; swap?: number; assort?: number; arrange2?: number; result?: number};
	rule?: string;
	delay?: number;
};

const ID = 'b12m5res';
const W = 760, H = 530;
const ROD_W = 22, TOP = 128, LEN = 214, CUT = 0.56; // crossover point (fraction down the chromatid)

/** A straight glossy chromatid with a coloured top part and bottom part. */
const Rod = ({x, top, len, c1, c2, cut, a1, a2, opacity = 1}: {x: number; top: number; len: number; c1: string; c2: string; cut: number; a1: string; a2: string; opacity?: number}) => {
	const r = ROD_W / 2;
	const y1 = top + len * cut;
	return (
		<g opacity={opacity}>
			<rect x={x - r} y={top} width={ROD_W} height={len * cut + 1} rx={r} fill={`url(#${ID}-r-${c1})`} stroke="rgba(0,0,0,0.25)" />
			<rect x={x - r} y={y1 - 1} width={ROD_W} height={len * (1 - cut) + 1} rx={r} fill={`url(#${ID}-r-${c2})`} stroke="rgba(0,0,0,0.25)" />
			<rect x={x - r + 1} y={y1 - 6} width={ROD_W - 2} height={12} fill={`url(#${ID}-r-${c1})`} />
			<rect x={x - r + 1} y={y1} width={ROD_W - 2} height={8} fill={`url(#${ID}-r-${c2})`} />
			<text x={x} y={top + len * 0.22 + 5} textAnchor="middle" fill="#ffffff" fontSize={16} fontWeight={800}>{a1}</text>
			<text x={x} y={top + len * 0.8 + 5} textAnchor="middle" fill="#ffffff" fontSize={16} fontWeight={800}>{a2}</text>
		</g>
	);
};

export const ReshuffleDiagram = ({at = {}, rule = 'new combinations, not new alleles', delay = 62}: ReshuffleProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tC = at.cross ?? 40, tS = at.swap ?? 140, tA = at.assort ?? 300, tA2 = at.arrange2 ?? 380, tR = at.result ?? 520;

	// ── Crossing over ──────────────────────────────────────────────────────
	const cross = ease(frame, tS - 30, tS + 10); // inner chromatids lean together
	const swap = ease(frame, tS + 10, tS + 40);
	const part = ease(frame, tS + 70, tS + 120); // chromatids separate to show results
	const LX = 180;
	const baseX = [LX - 66, LX - 22, LX + 22, LX + 66];
	const outX = [LX - 120, LX - 40, LX + 40, LX + 120];
	// [top colour, bottom colour, allele top, allele bottom] per chromatid, after the swap
	const before = [['pat', 'pat', 'A', 'B'], ['pat', 'pat', 'A', 'B'], ['mat', 'mat', 'a', 'b'], ['mat', 'mat', 'a', 'b']];
	const after = [['pat', 'pat', 'A', 'B'], ['pat', 'mat', 'A', 'b'], ['mat', 'pat', 'a', 'B'], ['mat', 'mat', 'a', 'b']];
	const settled = frame > tS + 130;

	// ── Independent assortment ─────────────────────────────────────────────
	const PAIRS = 2;
	const mixes = 2 ** PAIRS;
	const arrangements = [
		{y: 166, left: ['pat', 'pat'], right: ['mat', 'mat'], t: tA},
		{y: 356, left: ['pat', 'mat'], right: ['mat', 'pat'], t: tA2},
	];
	const RX = 470;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Crossing over swaps segments between homologous chromosomes; independent assortment sends different mixes of chromosomes to gametes" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{pat: theme.accent, mat: CORAL}} />

			{/* ── Left: crossing over ── */}
			<g opacity={fadeAt(frame, 0, 16)}>
				<text x={LX} y={34} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>Crossing over</text>
				<text x={LX} y={58} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700} opacity={fadeAt(frame, tC)}>homologous pair swaps segments</text>
				<DioramaPlinth id={ID} cx={LX} cy={386} rx={166} />
				{[0, 1, 2, 3].map((i) => {
					const inner = i === 1 || i === 2;
					const lean = inner ? cross * (1 - swap) * (i === 1 ? 10 : -10) : 0;
					const x = lerp(baseX[i], outX[i], part) + lean + (settled ? idleBob(frame, i, 1.2) : 0);
					const s = swap > 0.5 ? after[i] : before[i];
					return <Rod key={i} x={x} top={TOP + (settled ? idleBob(frame, i + 5, 1) : 0)} len={LEN} c1={s[0]} c2={s[1]} cut={CUT} a1={s[2]} a2={s[3]} opacity={fadeAt(frame, 4 + i * 3)} />;
				})}
				{/* centromeres join sisters until they part */}
				{[0, 2].map((i) => (
					<rect key={i} x={baseX[i] - 4} y={TOP + LEN * 0.42 - 6} width={baseX[i + 1] - baseX[i] + 8} height={12} rx={6} fill="rgba(40,36,30,0.55)" opacity={(1 - part) * fadeAt(frame, 8)} />
				))}
				{/* chiasma marker where the inner chromatids cross */}
				<g opacity={cross * (1 - part)}>
					<circle cx={LX} cy={TOP + LEN * CUT} r={20 + idlePulse(frame, 30) * 4} fill="none" stroke={TOK.amber} strokeWidth={3} />
				</g>
				<g opacity={fadeAt(frame, tS + 110)}>
					<path d={`M ${outX[1]} ${TOP + LEN + 10} L ${outX[1]} ${TOP + LEN + 18} L ${outX[2]} ${TOP + LEN + 18} L ${outX[2]} ${TOP + LEN + 10}`} fill="none" stroke={theme.accent} strokeWidth={2.5} />
					<text x={LX} y={TOP + LEN + 40} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>recombinant: Ab, aB</text>
				</g>
			</g>

			{/* divider */}
			<line x1={378} y1={30} x2={378} y2={470} stroke={TOK.rule} strokeWidth={2} opacity={fadeAt(frame, tA - 10)} />

			{/* ── Right: independent assortment ── */}
			<g opacity={fadeAt(frame, tA - 10)}>
				<text x={574} y={34} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>Independent assortment</text>
				<text x={574} y={58} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>each pair lines up at random</text>
			</g>
			{arrangements.map((ar, k) => {
				const show = popAt(frame, fps, ar.t);
				const go = ease(frame, ar.t + 30, ar.t + 70);
				return (
					<g key={k} opacity={Math.min(1, show)}>
						<text x={RX - 64} y={ar.y - 64} fill={TOK.inkDim} fontSize={15} fontWeight={800}>arrangement {k + 1}</text>
						<line x1={RX} y1={ar.y - 58} x2={RX} y2={ar.y + 58} stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="5 5" />
						{[0, 1].map((row) => {
							const len = row === 0 ? 40 : 28;
							const y = ar.y + (row === 0 ? -24 : 30);
							return (
								<g key={row}>
									<Chromosome id={ID} x={RX - 18} y={y} len={len} w={11} color={ar.left[row]} splay={5} />
									<Chromosome id={ID} x={RX + 18} y={y} len={len} w={11} color={ar.right[row]} splay={5} />
								</g>
							);
						})}
						{/* the two gametes this arrangement gives */}
						{[0, 1].map((g) => {
							const gx = 660;
							const gy = ar.y + (g === 0 ? -44 : 44);
							const cols = g === 0 ? ar.left : ar.right;
							return (
								<g key={g} opacity={go}>
									<Arrow x1={RX + 36} y1={ar.y + (g === 0 ? -10 : 10)} x2={gx - 42} y2={gy} color={TOK.inkMute} width={2} head={8} t={go} />
									<circle cx={gx} cy={gy} r={38} fill={`url(#${ID}-cyto)`} stroke="#b9ab93" strokeWidth={3} />
									<Chromosome id={ID} x={gx - 10} y={gy - 2 + idleBob(frame, k * 4 + g, 1)} len={34} w={9} color={cols[0]} splay={4} />
									<Chromosome id={ID} x={gx + 11} y={gy + 4 + idleBob(frame, k * 4 + g + 2, 1)} len={24} w={9} color={cols[1]} splay={4} />
								</g>
							);
						})}
					</g>
				);
			})}
			<g opacity={fadeAt(frame, tA2 + 80)}>
				<Pill x={574} y={462} text={`${PAIRS} pairs → ${mixes} gamete mixes`} color={theme.accent} fill={theme.soft} size={16} />
			</g>

			{/* Result line */}
			<g opacity={fadeAt(frame, tR)}>
				<text x={W / 2} y={510} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800}>{rule}</text>
			</g>
		</svg>
	);
};
