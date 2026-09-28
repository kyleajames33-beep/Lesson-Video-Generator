// AllelePoolDiagram — new combinations vs new alleles.
//
// mode 'two'        left plinth: a pool of existing alleles (A, a, B, b);
//                   crossing over, independent assortment and random
//                   fertilisation deal them into new COMBINATIONS (AB, Ab, aB,
//                   ab) but nothing new appears. Right plinth: a base in the
//                   DNA changes (mutation) and a genuinely NEW allele (amber)
//                   joins the pool.
// mode 'mutation'   the base change close up, the new allele popping into the
//                   pool, and meiosis/fertilisation shown only swapping tokens
//                   that already exist.
// mode 'fertilise'  each parent's varied gametes (4 kinds drawn from each, a
//                   schematic subset) combine at random: every sperm × egg
//                   pairing gives a different zygote (grid count computed);
//                   siblings share alleles but differ.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse, plinthSlots} from '../../diorama';
import {Arrow, Ball, CORAL, GlossDefs, Pill, ease, fadeAt, lerp, mix, popAt} from './shared';

export type AllelePoolProps = {
	mode?: 'two' | 'mutation' | 'fertilise';
	at?: Record<string, number>;
	delay?: number;
};

const ID = 'b12m5pool';
const W = 760, H = 530;

const DnaStrip = ({x, y, seq, changeAt, changed, frame}: {x: number; y: number; seq: string; changeAt: number; changed: number; frame: number}) => (
	<g>
		{seq.split('').map((b, k) => {
			const isC = k === changeAt;
			const letter = isC && changed > 0.5 ? (b === 'C' ? 'T' : 'C') : b;
			return (
				<g key={k}>
					<rect x={x + k * 30 - 13} y={y - 13} width={26} height={26} rx={6} fill={isC && changed > 0.5 ? TOK.amber : '#ffffff'} stroke={isC ? TOK.amberInk : 'rgba(0,0,0,0.18)'} strokeWidth={isC ? 2 + (changed > 0.5 ? idlePulse(frame) : 0) : 1.2} />
					<text x={x + k * 30} y={y + 6} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>{letter}</text>
				</g>
			);
		})}
	</g>
);

export const AllelePoolDiagram = ({mode = 'two', at = {}, delay = 62}: AllelePoolProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const colors = {A: theme.accent, a: mix(theme.accent, '#ffffff', 0.5), B: CORAL, b: mix(CORAL, '#ffffff', 0.5), N: TOK.amber};
	const defs = <GlossDefs id={ID} colors={colors} />;
	const token = (al: string, x: number, y: number, s = 1, k = 0) => <Ball key={`${al}${k}`} id={ID} name={al === 'A*' ? 'N' : al} x={x} y={y + idleBob(frame, k, 1.2)} r={15} scale={s} label={al === 'A*' ? 'new' : al} labelColor={al === 'a' || al === 'b' ? TOK.ink : '#ffffff'} labelSize={al === 'A*' ? 10 : 15} />;

	if (mode === 'two') {
		const tRes = at.reshuffle ?? 20, tCo = at.crossing ?? 150, tIa = at.assortment ?? 170, tRf = at.fertilisation ?? 190, tNone = at.none ?? 220, tMut = at.mutation ?? 400, tOnly = at.only ?? 500, tRule = at.rule ?? 800;
		const pool = ['A', 'a', 'B', 'b', 'A', 'b', 'a', 'B'];
		const deal = ease(frame, tNone - 10, tNone + 40);
		const combos = [['A', 'B'], ['A', 'b'], ['a', 'B'], ['a', 'b']];
		const changed = ease(frame, tMut + 30, tMut + 40);
		const born = popAt(frame, fps, tOnly);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Three mechanisms reshuffle existing alleles; only mutation creates a new allele" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				{defs}
				<g opacity={fadeAt(frame, tRes)}>
					<text x={200} y={40} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>reshuffle</text>
					<text x={200} y={62} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>existing alleles, new combinations</text>
					<DioramaPlinth id={`${ID}l`} cx={200} cy={250} rx={150}>
						{plinthSlots(200, 250, 150, pool.length).map((p, k) => token(pool[k], p.x, p.y - 12, 1.25, k))}
					</DioramaPlinth>
					{combos.map((c, k) => (
						<g key={k} opacity={fadeAt(frame, tNone + k * 8)}>
							<rect x={62 + k * 72} y={332} width={60} height={40} rx={10} fill="#ffffff" stroke={TOK.rule} />
							{token(c[0], 80 + k * 72, 352, 0.72, k + 20)}
							{token(c[1], 104 + k * 72, 352, 0.72, k + 30)}
						</g>
					))}
				</g>
				{[['crossing over', tCo], ['independent assortment', tIa], ['random fertilisation', tRf]].map(([t, at0], k) => (
					<g key={k} opacity={popAt(frame, fps, at0 as number)}>
						<Pill x={200} y={404 + k * 34} text={t as string} color={theme.accent} fill={theme.soft} size={15} />
					</g>
				))}
				{/* mutation */}
				<g opacity={fadeAt(frame, tMut)}>
					<text x={570} y={40} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>mutation</text>
					<text x={570} y={62} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>the DNA sequence itself changes</text>
					<DnaStrip x={480} y={104} seq="GACCTA" changeAt={3} changed={changed} frame={frame} />
					<DioramaPlinth id={`${ID}r`} cx={570} cy={250} rx={150}>
						{plinthSlots(570, 250, 150, 5).map((p, k) => (k < 4 ? token(['A', 'a', 'A', 'a'][k], p.x, p.y - 12, 1, k + 40) : born > 0 ? token('A*', p.x, p.y - 12, born, 50) : null))}
					</DioramaPlinth>
					<Arrow x1={570} y1={124} x2={570} y2={200} color={TOK.amberInk} width={2.5} head={9} t={ease(frame, tOnly - 20, tOnly)} />
				</g>
				<g opacity={fadeAt(frame, tOnly + 20)}>
					<Pill x={570} y={350} text="a genuinely new allele" color={TOK.amberInk} fill="#fff8ea" size={16} strokeWidth={2 + idlePulse(frame) * 1.5} />
				</g>
				<text x={570} y={452} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tRule)}>three remix · one writes new</text>
			</svg>
		);
	}

	if (mode === 'mutation') {
		const tOnly = at.only ?? 20, tChange = at.change ?? 90, tNew = at.newallele ?? 250, tRes = at.reshuffle ?? 450, tStart = at.start ?? 700, tRule = at.rule ?? 900;
		const changed = ease(frame, tChange + 20, tChange + 30);
		const born = popAt(frame, fps, tNew);
		const swap = ease(frame, tRes + 20, tRes + 60);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Mutation changes the DNA sequence and creates a new allele; meiosis and fertilisation only reshuffle" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				{defs}
				<text x={380} y={40} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800} opacity={fadeAt(frame, tOnly)}>a change in the DNA sequence</text>
				<g opacity={fadeAt(frame, tOnly)}>
					<DnaStrip x={290} y={92} seq="TGACCTAG" changeAt={4} changed={changed} frame={frame} />
				</g>
				<Arrow x1={380} y1={114} x2={380} y2={176} color={TOK.amberInk} width={3} head={10} t={ease(frame, tNew - 20, tNew)} />
				<DioramaPlinth id={`${ID}m`} cx={380} cy={280} rx={200}>
					{plinthSlots(380, 280, 200, 7).map((p, k) => {
						if (k === 6) return born > 0 ? token('A*', p.x, p.y - 14, born, 60) : null;
						const pool = ['A', 'a', 'A', 'a', 'A', 'a'];
						const partner = k % 2 === 0 ? k + 1 : k - 1;
						const q = plinthSlots(380, 280, 200, 7)[partner];
						return token(pool[k], lerp(p.x, q.x, swap), lerp(p.y, q.y, swap) - 14, 1, k);
					})}
				</DioramaPlinth>
				<g opacity={fadeAt(frame, tNew + 20)}>
					<Pill x={380} y={396} text="new allele: the population never had it" color={TOK.amberInk} fill="#fff8ea" size={16} strokeWidth={2 + idlePulse(frame) * 1.5} />
				</g>
				<g opacity={fadeAt(frame, tRes)}>
					<text x={380} y={442} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>meiosis and fertilisation only move existing alleles around</text>
				</g>
				<g opacity={fadeAt(frame, tRule)}>
					<text x={380} y={H - 14} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800}>new allele: mutation · new combination: the other three</text>
				</g>
				<text x={380} y={H - 14} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tStart) * (1 - fadeAt(frame, tRule))}>every new allele started as a mutation</text>
			</svg>
		);
	}

	// fertilise: gamete grid
	const tVar = at.varied ?? 20, tAny = at.any ?? 150, tChance = at.chance ?? 300, tSib = at.siblings ?? 500, tTwin = at.twins ?? 700;
	const sperm = [['A', 'B'], ['A', 'b'], ['a', 'B'], ['a', 'b']];
	const eggs = [['A', 'B'], ['A', 'b'], ['a', 'B'], ['a', 'b']];
	const GX = 280, GY = 128, C = 72;
	const n = sperm.length * eggs.length;
	const zyg = (i: number, j: number) => [sperm[i][0], eggs[j][0]].sort().join('') + ' ' + [sperm[i][1], eggs[j][1]].sort().join('');
	const cellAt = (k: number) => tAny + k * 8;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Random fertilisation: any sperm with any egg gives many different zygotes" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{defs}
			<g opacity={fadeAt(frame, tVar)}>
				<text x={GX + C * 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>sperm types (father, after meiosis)</text>
				<text x={110} y={GY + C * 2 - 10} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>egg types</text>
				<text x={110} y={GY + C * 2 + 12} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>(mother)</text>
				{sperm.map((g, i) => (
					<g key={i}>
						{token(g[0], GX + C * i + C / 2 - 13, GY - 44, 0.8, i)}
						{token(g[1], GX + C * i + C / 2 + 13, GY - 44, 0.8, i + 10)}
					</g>
				))}
				{eggs.map((g, j) => (
					<g key={j}>
						{token(g[0], GX - 58, GY + C * j + C / 2, 0.8, j + 20)}
						{token(g[1], GX - 32, GY + C * j + C / 2, 0.8, j + 30)}
					</g>
				))}
				<rect x={GX - 6} y={GY - 6} width={C * 4 + 12} height={C * 4 + 12} rx={12} fill="#cfccc5" />
			</g>
			{sperm.flatMap((_, i) => eggs.map((__, j) => {
				const k = j * 4 + i;
				const p = popAt(frame, fps, cellAt(k));
				// two siblings with different genotypes (AB×Ab → AA Bb, ab×AB → Aa Bb)
				const isSib = (i === 0 && j === 1) || (i === 3 && j === 0);
				return (
					<g key={k} opacity={Math.min(1, p)}>
						<rect x={GX + C * i + 3} y={GY + C * j + 3} width={C - 6} height={C - 6} rx={9} fill={isSib && frame > tSib ? '#fff8ea' : '#ece9e3'} stroke={isSib && frame > tSib ? TOK.amber : 'none'} strokeWidth={2 + (isSib ? idlePulse(frame) : 0)} />
						<text x={GX + C * i + C / 2} y={GY + C * j + C / 2 + 6} textAnchor="middle" fill={TOK.ink} fontSize={15} fontWeight={800}>{zyg(i, j)}</text>
					</g>
				);
			}))}
			<g opacity={fadeAt(frame, tChance)}>
				<text x={GX + C * 2} y={GY + C * 4 + 32} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>any sperm × any egg, at random: {sperm.length} × {eggs.length} = {n} pairings from just these</text>
			</g>
			<g opacity={fadeAt(frame, tSib)}>
				<text x={GX + C * 2} y={GY + C * 4 + 58} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>siblings: same parents, different combinations</text>
			</g>
			<g opacity={popAt(frame, fps, tTwin)}>
				<Pill x={GX + C * 2} y={GY + C * 4 + 90} text="identical twins: a separate developmental event" color={TOK.inkDim} size={15} />
			</g>
		</svg>
	);
};
