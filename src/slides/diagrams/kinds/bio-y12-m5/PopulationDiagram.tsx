// PopulationDiagram — populations as crowds of glossy organisms on stone
// plinths; colour = genotype. A "change" (a pathogen or a shift in
// conditions) sweeps across as an amber haze and knocks over every organism
// that is susceptible. Which ones are susceptible is decided by genotype, so
// the outcome follows from the picture: identical clones all fall together;
// a varied brood loses some and keeps some.
//
// mode 'clone'       one parent → 2 → 4 → 8 → 16 identical clones, then a
//                    pathogen hits every one of them.
// mode 'varied'      two parents' gametes fuse → offspring in many genotype
//                    shades; conditions shift; the susceptible fall, some
//                    already suited survive (no guarantee).
// mode 'compare'     both side by side (stable vs changing conditions).
// mode 'bottleneck'  a diverse population crashes; the few survivors carry few
//                    genotypes, so the regrown population has low diversity;
//                    an insurance population is bred to keep every colour left.
// Counts shown are counted from the tokens drawn.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, plinthSlots} from '../../diorama';
import {CORAL, GREEN, GlossDefs, PURPLE, Pill, ease, fadeAt, hash01, lerp, popAt} from './shared';

export type PopulationProps = {
	mode?: 'clone' | 'varied' | 'compare' | 'bottleneck';
	labels?: Record<string, string>;
	at?: Record<string, number>;
	delay?: number;
};

const ID = 'b12m5pop';
const W = 760, H = 530;
const SHADES = ['s0', 's1', 's2', 's3', 's4', 's5'];

const Organism = ({x, y, shade, s = 1, fallen = 0, frame, seed}: {x: number; y: number; shade: string; s?: number; fallen?: number; frame: number; seed: number}) => {
	const b = fallen > 0 ? 0 : idleBob(frame, seed, 1.3);
	return (
		<g transform={`translate(${x},${y + b}) rotate(${fallen * 80}) scale(${s})`} opacity={1 - fallen * 0.55}>
			<ellipse cx={0} cy={13} rx={13} ry={4} fill="rgba(40,36,30,0.2)" />
			<ellipse cx={0} cy={0} rx={13} ry={14} fill={fallen > 0.5 ? `url(#${ID}-g-dead)` : `url(#${ID}-g-${shade})`} stroke="rgba(0,0,0,0.28)" />
			<circle cx={-4} cy={-3} r={2.2} fill="#1a1a1a" />
			<circle cx={4} cy={-3} r={2.2} fill="#1a1a1a" />
		</g>
	);
};

const Haze = ({t, x0, x1, y0, y1}: {t: number; x0: number; x1: number; y0: number; y1: number}) => {
	if (t <= 0 || t >= 1) return null;
	const x = lerp(x0 - 80, x1 + 80, t);
	return (
		<g opacity={Math.sin(t * Math.PI)}>
			<ellipse cx={x} cy={(y0 + y1) / 2} rx={90} ry={(y1 - y0) / 2 + 20} fill={TOK.amber} opacity={0.28} filter={`url(#${ID}-blur)`} />
		</g>
	);
};

export const PopulationDiagram = ({mode = 'clone', labels = {}, at = {}, delay = 62}: PopulationProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const shades: Record<string, string> = {dead: '#9d988f', mut: TOK.amber};
	SHADES.forEach((s, k) => (shades[s] = [theme.accent, '#4f8fd0', '#7a6fc4', PURPLE, '#c46a8a', CORAL][k]));
	shades.green = GREEN;

	/** A crowd on a plinth. genotypes: shade per organism; susceptible(i): falls in the change. */
	const crowd = (o: {cx: number; cy: number; rx: number; size?: number; shades: string[]; appear: (i: number) => number; change?: number; susceptible?: (i: number) => boolean; seed: number; id: string}) => {
		const slots = plinthSlots(o.cx, o.cy, o.rx, Math.max(1, o.shades.length));
		const t = o.change !== undefined ? ease(frame, o.change, o.change + 70) : 0;
		return (
			<DioramaPlinth id={o.id} cx={o.cx} cy={o.cy} rx={o.rx}>
				{o.shades.map((sh, i) => {
					const s = popAt(frame, fps, o.appear(i));
					if (s <= 0) return null;
					const reach = (slots[i].x - (o.cx - o.rx)) / (2 * o.rx);
					const fallen = o.susceptible?.(i) ? ease(frame, (o.change ?? 0) + reach * 60, (o.change ?? 0) + reach * 60 + 16) : 0;
					return <Organism key={i} x={slots[i].x} y={slots[i].y - 8} shade={sh} s={Math.min(1.1, s) * (o.size ?? 1.3)} fallen={fallen} frame={frame} seed={o.seed + i} />;
				})}
				<Haze t={t} x0={o.cx - o.rx} x1={o.cx + o.rx} y0={o.cy - 60} y1={o.cy + 20} />
			</DioramaPlinth>
		);
	};

	// Clone growth: generation k appears at tGrow0 + k·step, doubling.
	const cloneAppear = (t0: number, step: number) => (i: number) => t0 + Math.ceil(Math.log2(i + 1)) * step + (i % 4) * 2;
	const variedShades = (n: number, seed: number) => Array.from({length: n}, (_, i) => SHADES[Math.floor(hash01(i * 7 + seed) * SHADES.length)]);
	const tough = (sh: string) => sh === 's0' || sh === 's3' || sh === 's5';

	if (mode === 'clone') {
		const tOne = at.parent ?? 20, tClone = at.clones ?? 120, tGrow = at.grow ?? 200, tKeep = at.preserved ?? 300, tHit = at.pathogen ?? 400, tMut = at.mutation ?? 700;
		const n = 16;
		const shown = Array.from({length: n}, (_, i) => i).filter((i) => frame >= (i === 0 ? tOne : cloneAppear(tClone, (tGrow - tClone) / 2)(i))).length;
		const fallen = frame > tHit + 40;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Asexual reproduction: one parent makes identical clones; one pathogen can hit them all" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={shades} />
				<text x={380} y={40} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800} opacity={fadeAt(frame, tOne)}>{labels.title ?? 'one parent, no fertilisation'}</text>
				{crowd({cx: 380, cy: 280, rx: 230, size: 1.7, shades: Array(n).fill('s0'), appear: (i) => (i === 0 ? tOne : cloneAppear(tClone, (tGrow - tClone) / 2)(i)), change: tHit, susceptible: () => true, seed: 1, id: `${ID}a`})}
				<g opacity={fadeAt(frame, tClone)}>
					<Pill x={380} y={100} text={`${shown} identical clone${shown === 1 ? '' : 's'}`} color={theme.accent} fill={theme.soft} size={17} />
				</g>
				<text x={380} y={416} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tKeep) * (fallen ? 0 : 1)}>a successful genotype, preserved exactly</text>
				<g opacity={fadeAt(frame, tHit + 40)}>
					<text x={380} y={150} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>one pathogen: every clone is susceptible</text>
				</g>
				<text x={380} y={H - 14} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tMut)}>(mutation still adds rare variation)</text>
			</svg>
		);
	}

	if (mode === 'varied') {
		const tFuse = at.fuse ?? 30, tVar = at.varied ?? 200, tShift = at.shift ?? 350, tSome = at.some ?? 450, tNo = at.noguarantee ?? 600, tCost = at.cost ?? 800;
		const kids = variedShades(12, 3);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Sexual reproduction: varied offspring; when conditions change some survive" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={shades} />
				{/* parents + gametes fuse */}
				<g opacity={fadeAt(frame, 0)}>
					<Organism x={250} y={70} shade="s0" s={1.6} frame={frame} seed={40} />
					<Organism x={510} y={70} shade="s5" s={1.6} frame={frame} seed={41} />
					<text x={380} y={78} textAnchor="middle" fill={TOK.inkMute} fontSize={22} fontWeight={800}>×</text>
				</g>
				{[0, 1].map((k) => {
					const t = ease(frame, tFuse, tFuse + 40);
					return <circle key={k} cx={lerp(k ? 510 : 250, 380, t)} cy={lerp(100, 150, t)} r={7} fill={`url(#${ID}-g-${k ? 's5' : 's0'})`} opacity={1 - fadeAt(frame, tFuse + 40, 8)} />;
				})}
				<text x={380} y={126} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tFuse)}>gametes fuse</text>
				{crowd({cx: 380, cy: 300, rx: 230, size: 1.7, shades: kids, appear: (i) => tFuse + 50 + i * 6, change: tShift, susceptible: (i) => !tough(kids[i]), seed: 10, id: `${ID}b`})}
				<g opacity={fadeAt(frame, tVar)}>
					<Pill x={380} y={188} text="offspring genetically varied" color={theme.accent} fill={theme.soft} size={16} />
				</g>
				<g opacity={fadeAt(frame, tSome)}>
					<text x={380} y={436} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>conditions change: some are already suited</text>
				</g>
				<text x={380} y={466} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tNo)}>raises the odds, no guarantee</text>
				<text x={380} y={H - 12} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tCost)}>cost: slower, needs a mate, more energy</text>
			</svg>
		);
	}

	if (mode === 'compare') {
		const tStable = at.stable ?? 30, tChange = at.change ?? 300, tSome = at.some ?? 400, tEnough = at.enough ?? 600, tHedge = at.hedge ?? 700, tRule = at.rule ?? 900;
		const kids = variedShades(8, 5);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Asexual numbers suit stable conditions; sexual variation suits change" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={shades} />
				{[{x: 200, title: labels.left ?? 'asexual: fast numbers'}, {x: 560, title: labels.right ?? 'sexual: variation'}].map((p, k) => (
					<text key={k} x={p.x} y={52} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, k ? tStable + 20 : tStable)}>{p.title}</text>
				))}
				{crowd({cx: 200, cy: 250, rx: 160, shades: Array(16).fill('s0'), appear: (i) => (i === 0 ? tStable : cloneAppear(tStable + 20, 36)(i)), change: tChange, susceptible: () => true, seed: 1, id: `${ID}c`})}
				{crowd({cx: 560, cy: 250, rx: 160, shades: kids, appear: (i) => tStable + 40 + i * 12, change: tChange + 30, susceptible: (i) => !tough(kids[i]), seed: 30, id: `${ID}d`})}
				<g opacity={fadeAt(frame, tStable + 60) * (1 - fadeAt(frame, tChange - 10))}>
					<text x={380} y={390} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>stable, resource-rich: numbers build fast</text>
				</g>
				<g opacity={fadeAt(frame, tChange + 60)}>
					<text x={380} y={390} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>conditions change: some varied offspring cope</text>
				</g>
				<g opacity={fadeAt(frame, tEnough)}>
					<Pill x={380} y={432} text="success = enough offspring surviving" color={theme.accent} fill={theme.soft} size={16} />
				</g>
				<g opacity={fadeAt(frame, tHedge)}>
					<text x={380} y={476} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>many plants hedge their bets and use both</text>
				</g>
				<text x={380} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tRule)}>name the method, then justify it by the environment</text>
			</svg>
		);
	}

	// bottleneck
	const tDiv = at.diverse ?? 20, tCrash = at.crash ?? 150, tRegrow = at.regrow ?? 300, tImm = at.immune ?? 400, tIns = at.insurance ?? 600, tRule = at.rule ?? 800;
	const before = variedShades(16, 9);
	// Survivors: a few organisms that happen to share only two genotypes.
	const first = before[0];
	const other = before.findIndex((sh) => sh !== first);
	const again = before.findIndex((sh, i) => i > 0 && sh === first);
	const survive = new Set([0, other, again >= 0 ? again : other].filter((i) => i >= 0));
	const left = Array.from(new Set([...survive].map((i) => before[i])));
	const after = Array.from({length: 16}, (_, i) => left[i % left.length]);
	const regrow = ease(frame, tRegrow, tRegrow + 40);
	const div0 = new Set(before).size, div1 = left.length;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A population bottleneck leaves low genetic diversity; breeding is managed to keep what remains" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={shades} />
			{/* past: diverse, then crash */}
			<text x={200} y={46} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tDiv)}>past population</text>
			{crowd({cx: 200, cy: 230, rx: 160, shades: before, appear: (i) => tDiv + i * 3, change: tCrash, susceptible: (i) => !survive.has(i), seed: 50, id: `${ID}e`})}
			<g opacity={fadeAt(frame, tDiv + 30)}>
				<text x={200} y={330} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{div0} genotype colours</text>
			</g>
			<text x={200} y={356} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tCrash + 60)}>crash (bottleneck) + isolation</text>
			{/* today: regrown from the survivors */}
			<text x={560} y={46} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tRegrow)}>{labels.today ?? 'devils today'}</text>
			<g opacity={fadeAt(frame, tRegrow)}>
				{crowd({cx: 560, cy: 230, rx: 160, shades: after, appear: (i) => tRegrow + 10 + i * 4, seed: 70, id: `${ID}f`})}
			</g>
			<g opacity={regrow}>
				<text x={560} y={330} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>only {div1} genotype colour{div1 === 1 ? '' : 's'} left: low diversity</text>
			</g>
			<g opacity={fadeAt(frame, tImm)}>
				<text x={560} y={356} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>immune genes alike: tumour may not be rejected</text>
			</g>
			{/* insurance population: pairs chosen so every remaining colour is kept */}
			<g opacity={fadeAt(frame, tIns)}>
				<Pill x={380} y={402} text="insurance population: genetic data choose who breeds" color={theme.accent} fill={theme.soft} size={15} />
				{left.map((sh, k) => (
					<g key={k}>
						<Organism x={380 - (left.length - 1) * 50 + k * 100 - 16} y={448} shade={sh} frame={frame} seed={90 + k} />
						<Organism x={380 - (left.length - 1) * 50 + k * 100 + 16} y={448} shade={sh} frame={frame} seed={95 + k} />
					</g>
				))}
			</g>
			<text x={380} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tRule)}>diversity boosts adaptive capacity; it doesn't guarantee survival</text>
		</svg>
	);
};
