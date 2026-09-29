// CrossDiagram — a monohybrid cross as a stone tray (Punnett square) whose
// offspring tokens are coloured by phenotype, with the ratios computed from
// the grid and drawn beside it.
//
// Everything is derived from the two parents' alleles: each cell's genotype
// (alleles ordered by `order`), its phenotype (via `pheno`), the genotype
// ratio, the phenotype ratio, and, with `bySex`, the fraction of sons /
// daughters with each phenotype (a genotype carrying "Y" is a son).
// Tokens: 'flower' (petals), 'person' (square = male, circle = female, as in
// pedigrees) or plain glossy 'ball'.
//
// Optional `pre` strip (e.g. red × white → all pink) plays before the grid;
// `intro` chips land early; `emphasise` pulses chosen genotypes at a beat
// (e.g. red and white reappearing).

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {Arrow, CORAL, GlossDefs, Pill, ease, fadeAt, popAt} from './shared';

type Parent = {label: string; alleles: [string, string]};
type Key = {key: string; label: string; color: string};
export type CrossProps = {
	p1: Parent; // down the left
	p2: Parent; // across the top
	order: string[];
	pheno: Record<string, string>;
	keys: Key[];
	token?: 'flower' | 'person' | 'ball';
	bySex?: boolean;
	pre?: {left: string; right: string; result: string; leftKey: string; rightKey: string; resultKey: string; at: number};
	intro?: {text: string; at: number}[];
	emphasise?: {genotypes: string[]; text: string; at: number};
	at?: {parents?: number; gametes?: number; fill?: number; geno?: number; phen?: number; result?: number; yColumn?: number};
	result?: string;
	delay?: number;
};

const ID = 'b12m5cross';
const W = 760, H = 530;
const GX = 238, GY = 176, CELL = 104;

const COLORS: Record<string, string> = {red: '#c8323c', pink: '#ec8fae', white: '#f4f2ee', coral: CORAL, slate: '#8a93a0', purple: '#8e5bd6', tall: '#4f9d57', short: '#b7a36a', carrier: '#f2b8a8'};

const Token = ({kind, x, y, color, male, s = 1, frame, seed}: {kind: string; x: number; y: number; color: string; male?: boolean; s?: number; frame: number; seed: number}) => {
	const b = idleBob(frame, seed, 1);
	if (kind === 'flower') {
		return (
			<g transform={`translate(${x},${y + b}) scale(${s})`}>
				{Array.from({length: 5}, (_, k) => {
					const a = (k / 5) * Math.PI * 2 - Math.PI / 2;
					return <ellipse key={k} cx={Math.cos(a) * 11} cy={Math.sin(a) * 11} rx={10} ry={7} transform={`rotate(${(a * 180) / Math.PI} ${Math.cos(a) * 11} ${Math.sin(a) * 11})`} fill={`url(#${ID}-g-${color})`} stroke="rgba(0,0,0,0.25)" />;
				})}
				<circle r={6} fill="#f0c93a" />
			</g>
		);
	}
	if (kind === 'person') {
		return (
			<g transform={`translate(${x},${y + b}) scale(${s})`}>
				{male ? <rect x={-15} y={-15} width={30} height={30} rx={4} fill={`url(#${ID}-g-${color})`} stroke="rgba(0,0,0,0.35)" strokeWidth={1.5} /> : <circle r={16} fill={`url(#${ID}-g-${color})`} stroke="rgba(0,0,0,0.35)" strokeWidth={1.5} />}
			</g>
		);
	}
	return <circle cx={x} cy={y + b} r={16 * s} fill={`url(#${ID}-g-${color})`} stroke="rgba(0,0,0,0.25)" />;
};

export const CrossDiagram = ({p1, p2, order, pheno, keys, token = 'ball', bySex, pre, intro = [], emphasise, at = {}, result, delay = 62}: CrossProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tPar = at.parents ?? 20, tGam = at.gametes ?? 80, tFill = at.fill ?? 140, tGeno = at.geno ?? 260, tPhen = at.phen ?? 340, tRes = at.result ?? 420, tY = at.yColumn;
	const colorOf = (k: string) => keys.find((q) => q.key === k)?.color ?? 'slate';
	const gdefs: Record<string, string> = {accent: theme.accent};
	for (const k of keys) gdefs[k.color] = k.color === 'accent' ? theme.accent : COLORS[k.color] ?? k.color;
	if (pre) for (const k of [pre.leftKey, pre.rightKey, pre.resultKey]) gdefs[colorOf(k)] = COLORS[colorOf(k)] ?? theme.accent;

	const rank = (a: string) => order.indexOf(a);
	const cells = [0, 1].flatMap((r) => [0, 1].map((c) => {
		const pair = [p1.alleles[r], p2.alleles[c]].sort((x, y) => rank(x) - rank(y));
		const g = pair.join('');
		return {r, c, g, pair, ph: pheno[g], male: pair.includes('Y')};
	}));
	const genoOrder: string[] = [];
	for (const cl of [...cells].sort((a, b) => rank(a.pair[0]) - rank(b.pair[0]) || rank(a.pair[1]) - rank(b.pair[1]))) if (!genoOrder.includes(cl.g)) genoOrder.push(cl.g);
	const genoCounts = genoOrder.map((g) => cells.filter((cl) => cl.g === g).length);
	const phenCounts = keys.map((k) => cells.filter((cl) => cl.ph === k.key).length);
	const fillAt = (i: number) => tFill + i * 16;
	const emph = emphasise ? ease(frame, emphasise.at, emphasise.at + 20) : 0;
	const RX = 520;
	// "{p:key}" in the result line becomes the computed chance per child.
	const resultText = result?.replace(/\{p:([\w-]+)\}/g, (_, k: string) => `${Math.round((100 * cells.filter((cl) => cl.ph === k).length) / cells.length)}%`);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Cross: ${p1.alleles.join('')} × ${p2.alleles.join('')}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={gdefs} />

			{pre && (
				<g opacity={fadeAt(frame, pre.at) * (1 - 0.35 * fadeAt(frame, tPar + 40))}>
					<Token kind={token} x={70} y={40} color={colorOf(pre.leftKey)} frame={frame} seed={90} />
					<text x={96} y={46} fill={TOK.inkDim} fontSize={16} fontWeight={800}>{pre.left}</text>
					<text x={190} y={46} textAnchor="middle" fill={TOK.inkMute} fontSize={18} fontWeight={800}>×</text>
					<Token kind={token} x={222} y={40} color={colorOf(pre.rightKey)} frame={frame} seed={91} />
					<text x={248} y={46} fill={TOK.inkDim} fontSize={16} fontWeight={800}>{pre.right}</text>
					<Arrow x1={340} y1={40} x2={392} y2={40} color={TOK.inkMute} width={2.5} head={9} t={ease(frame, pre.at + 20, pre.at + 40)} />
					<g opacity={popAt(frame, fps, pre.at + 40)}>
						<Token kind={token} x={420} y={40} color={colorOf(pre.resultKey)} frame={frame} seed={92} />
						<text x={446} y={46} fill={TOK.ink} fontSize={16} fontWeight={800}>{pre.result}</text>
					</g>
				</g>
			)}
			{intro.map((c, k) => (
				<g key={k} opacity={popAt(frame, fps, c.at)}>
					<Pill x={380} y={22 + k * 29} text={c.text} color={theme.accent} fill={theme.soft} size={15} />
				</g>
			))}

			{/* Parents */}
			<g opacity={fadeAt(frame, tPar)}>
				<text x={GX + CELL} y={GY - 62} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{p2.label}: {p2.alleles.join('')}</text>
				<text x={GX - 78} y={GY + CELL - 6} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{p1.label}:</text>
				<text x={GX - 78} y={GY + CELL + 18} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{p1.alleles.join('')}</text>
			</g>
			{/* Gametes */}
			{[0, 1].map((k) => (
				<g key={k} opacity={popAt(frame, fps, tGam + k * 8)}>
					<circle cx={GX + CELL * (k + 0.5)} cy={GY - 26} r={19} fill="#ffffff" stroke={tY !== undefined && p2.alleles[k] === 'Y' && frame > tY ? TOK.amber : theme.accent} strokeWidth={2.5} />
					<text x={GX + CELL * (k + 0.5)} y={GY - 20} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{p2.alleles[k]}</text>
					<circle cx={GX - 26} cy={GY + CELL * (k + 0.5)} r={19} fill="#ffffff" stroke={CORAL} strokeWidth={2.5} />
					<text x={GX - 26} y={GY + CELL * (k + 0.5) + 6} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{p1.alleles[k]}</text>
				</g>
			))}
			<text x={GX + CELL} y={GY - 4 + 2 * CELL + 50} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tGam)}>gametes: one allele each</text>

			{/* Stone tray */}
			<g opacity={fadeAt(frame, tPar)}>
				<rect x={GX - 8} y={GY - 8 + 12} width={CELL * 2 + 16} height={CELL * 2 + 16} rx={14} fill="#8f8b83" />
				<rect x={GX - 8} y={GY - 8} width={CELL * 2 + 16} height={CELL * 2 + 16} rx={14} fill="#cfccc5" />
				{[0, 1].flatMap((r) => [0, 1].map((c) => <rect key={`${r}${c}`} x={GX + c * CELL + 3} y={GY + r * CELL + 3} width={CELL - 6} height={CELL - 6} rx={9} fill="#ece9e3" />))}
				{tY !== undefined && <rect x={GX + CELL * p2.alleles.indexOf('Y') + 1} y={GY + 1} width={CELL - 2} height={CELL * 2 - 2} rx={10} fill="none" stroke={TOK.amber} strokeWidth={3 + idlePulse(frame) * 1.2} opacity={fadeAt(frame, tY)} />}
			</g>
			{cells.map((cl, i) => {
				const p = popAt(frame, fps, fillAt(i));
				const x = GX + cl.c * CELL + CELL / 2, y = GY + cl.r * CELL + CELL / 2;
				const isEmph = emphasise?.genotypes.includes(cl.g);
				return (
					<g key={i} opacity={Math.min(1, p)}>
						{isEmph && emph > 0 && <circle cx={x} cy={y - 10} r={30 + idlePulse(frame) * 3} fill={TOK.amber} opacity={0.25 * emph} />}
						<Token kind={token} x={x} y={y - 12} color={colorOf(cl.ph)} male={cl.male} s={p} frame={frame} seed={i + 3} />
						<text x={x} y={y + 34} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{cl.g}</text>
					</g>
				);
			})}

			{/* Ratios */}
			<g opacity={bySex ? 0 : fadeAt(frame, tGeno)}>
				<text x={RX} y={GY - 6} fill={TOK.inkDim} fontSize={15} fontWeight={800}>genotypes</text>
				<text x={RX} y={GY + 20} fill={TOK.ink} fontSize={18} fontWeight={800}>{genoOrder.map((g, k) => `${genoCounts[k]} ${g}`).join(' : ')}</text>
			</g>
			<g opacity={fadeAt(frame, tPhen)}>
				<text x={RX} y={GY + 66} fill={TOK.inkDim} fontSize={15} fontWeight={800}>phenotypes</text>
				{keys.map((k, j) => (
					<g key={k.key}>
						<Token kind={token} x={RX + 16} y={GY + 94 + j * 40} color={k.color} male={k.key.includes('son')} s={0.8} frame={frame} seed={40 + j} />
						<text x={RX + 42} y={GY + 100 + j * 40} fill={TOK.ink} fontSize={17} fontWeight={800}>{phenCounts[j]} {k.label}</text>
					</g>
				))}
			</g>
			{bySex && (() => {
				const sons = cells.filter((c) => c.male), daughters = cells.filter((c) => !c.male);
				return (
					<g opacity={fadeAt(frame, tRes)}>
						{keys.filter((k) => sons.some((s) => s.ph === k.key)).map((k, j) => (
							<text key={k.key} x={RX} y={GY + 110 + keys.length * 40 + j * 24} fill={TOK.inkDim} fontSize={15} fontWeight={800}>
								{`sons: ${Math.round((100 * sons.filter((s) => s.ph === k.key).length) / sons.length)}% ${k.label.replace(/ (son|daughter)s?$/, '')}`}
							</text>
						))}
						{keys.filter((k) => daughters.some((s) => s.ph === k.key)).map((k, j) => (
							<text key={k.key} x={RX} y={GY + 158 + keys.length * 40 + j * 24} fill={TOK.inkDim} fontSize={15} fontWeight={800}>
								{`daughters: ${Math.round((100 * daughters.filter((s) => s.ph === k.key).length) / daughters.length)}% ${k.label.replace(/ (son|daughter)s?$/, '')}`}
							</text>
						))}
					</g>
				);
			})()}
			{resultText && (
				<g opacity={popAt(frame, fps, tRes)}>
					<rect x={380 - 250} y={H - 44} width={500} height={34} rx={17} fill="#fff8ea" stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.5} />
					<text x={380} y={H - 21} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>{resultText}</text>
				</g>
			)}
			{emphasise && <text x={GX + CELL} y={GY + 2 * CELL + 50 + 22} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800} opacity={emph}>{emphasise.text}</text>}
		</svg>
	);
};
