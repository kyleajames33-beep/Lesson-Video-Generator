// HeterozygoteDiagram — read the heterozygote first.
//
// mode 'compare'  three rows (simple dominance, incomplete dominance,
//                 co-dominance), each showing homozygote · heterozygote ·
//                 homozygote as flowers. The heterozygote looks like the
//                 dominant homozygote, or is in between (pink), or shows both
//                 products (red and white petals). The ratio from crossing two
//                 heterozygotes is COMPUTED from those looks: 1 : 2 : 1
//                 genotypes, merged wherever phenotypes match, giving 3 : 1 or
//                 1 : 2 : 1.
// mode 'blood'    co-dominance in ABO blood: red blood cells with A antigens
//                 (IᴬIᴬ), B antigens (IᴮIᴮ) and both (IᴬIᴮ, group AB), then
//                 the contrast: incomplete = in-between, co-dominance = both.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GlossDefs, Ledge, Pill, fadeAt, popAt} from './shared';

export type HeterozygoteProps = {
	mode?: 'compare' | 'blood';
	at?: Record<string, number>;
	delay?: number;
};

const ID = 'b12m5het';
const W = 760, H = 530;
const RED = '#c8323c', WHITE = '#f4f2ee', PINK = '#ec8fae';

const Flower = ({x, y, petals, frame, seed, s = 1}: {x: number; y: number; petals: string[]; frame: number; seed: number; s?: number}) => (
	<g transform={`translate(${x},${y + idleBob(frame, seed, 1)}) scale(${s})`}>
		{Array.from({length: 6}, (_, k) => {
			const a = (k / 6) * Math.PI * 2 - Math.PI / 2;
			const px = Math.cos(a) * 14, py = Math.sin(a) * 14;
			return <ellipse key={k} cx={px} cy={py} rx={12} ry={8} transform={`rotate(${(a * 180) / Math.PI} ${px} ${py})`} fill={`url(#${ID}-g-${petals[k % petals.length]})`} stroke="rgba(0,0,0,0.25)" />;
		})}
		<circle r={7} fill="#f0c93a" />
	</g>
);

export const HeterozygoteDiagram = ({mode = 'compare', at = {}, delay = 62}: HeterozygoteProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="How the heterozygote is expressed sets the ratio" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{red: RED, white: WHITE, pink: PINK, cell: '#d9534f', a: theme.accent, b: '#8e5bd6'}} />
			{mode === 'blood' ? <Blood frame={frame} fps={fps} at={at} accent={theme.accent} soft={theme.soft} /> : <Compare frame={frame} fps={fps} at={at} accent={theme.accent} soft={theme.soft} />}
		</svg>
	);
};

type Ctx = {frame: number; fps: number; at: Record<string, number>; accent: string; soft: string};

const Compare = ({frame, fps, at, accent, soft}: Ctx) => {
	const rows = [
		{name: 'simple dominance', het: ['red'], t: at.simple ?? 20, rt: at.simpleRatio ?? 120},
		{name: 'incomplete dominance', het: ['pink'], t: at.incomplete ?? 300, rt: at.incompleteRatio ?? 400},
		{name: 'co-dominance', het: ['red', 'white'], t: at.codominance ?? 500, rt: (at.codominance ?? 500) + 40},
	];
	const tSeg = at.segregate ?? 700, tRule = at.rule ?? 900, tHet = at.het ?? 250;
	// Phenotype ratio from the 1 : 2 : 1 genotypes, merging classes that look the same.
	const ratioOf = (het: string[]) => {
		const looks = [['red'], het, ['white']].map((p) => p.join('+'));
		const counts: number[] = [];
		const seen: string[] = [];
		[1, 2, 1].forEach((n, i) => {
			const j = seen.indexOf(looks[i]);
			if (j >= 0) counts[j] += n;
			else {
				seen.push(looks[i]);
				counts.push(n);
			}
		});
		return counts.join(' : ');
	};
	const COLX = [250, 370, 490];
	return (
		<g>
			<g opacity={fadeAt(frame, 0)}>
				{['homozygote', 'heterozygote', 'homozygote'].map((h, k) => (
					<text key={k} x={COLX[k]} y={40} textAnchor="middle" fill={k === 1 ? accent : TOK.inkDim} fontSize={16} fontWeight={800}>{h}</text>
				))}
				<text x={650} y={40} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>het × het gives</text>
			</g>
			{/* heterozygote column highlight */}
			<rect x={COLX[1] - 52} y={56} width={104} height={386} rx={16} fill={accent} opacity={0.07 + (frame > tHet ? idlePulse(frame) * 0.06 : 0)} stroke={frame > tRule ? TOK.amber : 'none'} strokeWidth={3} />
			{rows.map((r, i) => {
				const y = 110 + i * 128;
				return (
					<g key={i} opacity={fadeAt(frame, r.t)}>
						<Ledge x={180} y={y + 30} w={380} />
						<text x={20} y={y + 6} fill={TOK.ink} fontSize={17} fontWeight={800}>{r.name.split(' ')[0]}</text>
						<text x={20} y={y + 28} fill={TOK.ink} fontSize={17} fontWeight={800}>{r.name.split(' ').slice(1).join(' ')}</text>
						<Flower x={COLX[0]} y={y} petals={['red']} frame={frame} seed={i * 3} s={popAt(frame, fps, r.t)} />
						<Flower x={COLX[1]} y={y} petals={r.het} frame={frame} seed={i * 3 + 1} s={popAt(frame, fps, r.t + 8)} />
						<Flower x={COLX[2]} y={y} petals={['white']} frame={frame} seed={i * 3 + 2} s={popAt(frame, fps, r.t + 16)} />
						<g opacity={popAt(frame, fps, r.rt)}>
							<text x={650} y={y + 10} textAnchor="middle" fill={i === 0 ? TOK.ink : accent} fontSize={26} fontWeight={800}>{ratioOf(r.het)}</text>
						</g>
					</g>
				);
			})}
			<g opacity={fadeAt(frame, tSeg)}>
				<Pill x={380} y={470} text="alleles still segregate normally in meiosis" color={TOK.inkDim} size={15} />
			</g>
			<text x={380} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tRule)}>read the heterozygote first; the ratio follows</text>
		</g>
	);
};

const Antigen = ({x, y, kind}: {x: number; y: number; kind: 'A' | 'B'}) =>
	kind === 'A' ? (
		<path d={`M ${x} ${y - 8} L ${x + 7} ${y + 5} L ${x - 7} ${y + 5} Z`} fill={`url(#${ID}-g-a)`} stroke="rgba(0,0,0,0.3)" />
	) : (
		<circle cx={x} cy={y} r={6.5} fill={`url(#${ID}-g-b)`} stroke="rgba(0,0,0,0.3)" />
	);

const Rbc = ({x, y, kinds, frame, seed, s = 1}: {x: number; y: number; kinds: ('A' | 'B')[]; frame: number; seed: number; s?: number}) => {
	const N = 12;
	return (
		<g transform={`translate(${x},${y + idleBob(frame, seed, 1.2)}) scale(${s})`}>
			<ellipse cx={0} cy={0} rx={62} ry={40} fill={`url(#${ID}-g-cell)`} stroke="rgba(0,0,0,0.25)" />
			<ellipse cx={0} cy={2} rx={34} ry={18} fill="#b23a36" opacity={0.45} />
			{Array.from({length: N}, (_, k) => {
				const a = (k / N) * Math.PI * 2;
				const kind = kinds[k % kinds.length];
				return <Antigen key={k} x={Math.cos(a) * 68} y={Math.sin(a) * 45} kind={kind} />;
			})}
		</g>
	);
};

const Blood = ({frame, fps, at, accent, soft}: Ctx) => {
	const tAB1 = at.single ?? 20, tAB = at.ab ?? 300, tAnt = at.antigens ?? 450, tNot = at.notBlend ?? 600, tInc = at.incomplete ?? 700, tCo = at.codominance ?? 780, tRule = at.rule ?? 1000;
	const cells = [
		{x: 130, geno: 'IᴬIᴬ', group: 'group A', kinds: ['A'] as ('A' | 'B')[], t: tAB1},
		{x: 380, geno: 'IᴬIᴮ', group: 'group AB', kinds: ['A', 'B'] as ('A' | 'B')[], t: tAB},
		{x: 630, geno: 'IᴮIᴮ', group: 'group B', kinds: ['B'] as ('A' | 'B')[], t: tAB1 + 20},
	];
	return (
		<g>
			{cells.map((c, i) => (
				<g key={i} opacity={fadeAt(frame, c.t)}>
					<DioramaPlinth id={`${ID}${i}`} cx={c.x} cy={200} rx={104}>
						<Rbc x={c.x} y={150} kinds={c.kinds} frame={frame} seed={i} s={popAt(frame, fps, c.t)} />
					</DioramaPlinth>
					<text x={c.x} y={290} textAnchor="middle" fill={i === 1 ? accent : TOK.ink} fontSize={19} fontWeight={800}>{c.geno}</text>
					<text x={c.x} y={312} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{c.group}</text>
				</g>
			))}
			<g opacity={fadeAt(frame, tAnt)}>
				<rect x={380 - 104} y={70} width={208} height={160} rx={20} fill="none" stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame) * 1.5} />
				<Antigen x={300} y={344} kind="A" />
				<text x={312} y={350} fill={TOK.inkDim} fontSize={15} fontWeight={800}>A antigen</text>
				<Antigen x={410} y={344} kind="B" />
				<text x={422} y={350} fill={TOK.inkDim} fontSize={15} fontWeight={800}>B antigen</text>
				<text x={380} y={40} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>both antigens, side by side</text>
			</g>
			<g opacity={fadeAt(frame, tNot)}>
				<text x={380} y={382} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>no in-between "blended" antigen</text>
			</g>
			{/* contrast */}
			<g opacity={popAt(frame, fps, tInc)}>
				<Ledge x={40} y={446} w={300} />
				<Flower x={80} y={420} petals={['pink']} frame={frame} seed={20} />
				<text x={112} y={414} fill={TOK.ink} fontSize={16} fontWeight={800}>incomplete dominance</text>
				<text x={112} y={434} fill={TOK.inkDim} fontSize={15} fontWeight={700}>in-between (pink)</text>
			</g>
			<g opacity={popAt(frame, fps, tCo)}>
				<Ledge x={420} y={446} w={300} />
				<Antigen x={452} y={414} kind="A" />
				<Antigen x={470} y={426} kind="B" />
				<text x={492} y={414} fill={TOK.ink} fontSize={16} fontWeight={800}>co-dominance</text>
				<text x={492} y={434} fill={TOK.inkDim} fontSize={15} fontWeight={700}>both products (A and B)</text>
			</g>
			<text x={380} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tRule)}>co-dominance shows both; incomplete averages</text>
		</g>
	);
};
