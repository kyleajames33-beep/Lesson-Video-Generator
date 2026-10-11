import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Callout, Mark, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {
	AL, AMBER, AMBER_INK, ART, Art, Arrow, Bead, BLUE, Chip, ChromSet, CORAL, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, GameteBeads, GREEN,
	HandText, Heading, Helix, INK, INK_SOFT, Label, Overlay, RED, S, Berry, prog,
} from './shared';

// ---------- 4. Gametes ----------
const GREY = '#a89c8a';
export const SceneGametes: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('gametes'), {sex: 'sexual', gam: ['gametes', 1], sperm: 'sperm cell', egg: 'egg cell', join: ['join', 1], inside: 'Inside each', dna: 'DNA', packed: 'packed', chrom: 'chromosomes', body: 'most body cells', two1: ['two sets', 1], one1: ['one set', 1], gam2: ['gametes', 2], plus: 'plus', one2: ['one set', 2], two2: ['two sets', 2], each: 'one from each'});
	const aOp = 1 - prog(f, c.inside - 8, 14);
	// phase A: two gametes meet
	const move = prog(f, c.join, 40);
	const sx = interpolate(move, [0, 1], [900, 1292]);
	const joined = move >= 1;
	const pop = (at: number) => prog(f, at, 14);
	// phase B
	const bIn = prog(f, c.inside, 16);
	const bodyY = 470;
	const helixOp = prog(f, c.dna, 10) * (1 - prog(f, c.packed, 16));
	const barsIn = prog(f, c.chrom - 6, 16);
	const setCol = (k: 0 | 1) => (f >= c.two1 ? (k === 0 ? BLUE : CORAL) : GREY);
	const slide = prog(f, c.two2, 36);
	return (
		<>
			<Heading items={[[6, 'The second way: sexual'], [c.inside, 'Inside each cell: chromosomes']]} />
			{/* context: the strawberry flower */}
			<Art a={ART.flower} x={96} y={270} w={380} style={{opacity: prog(f, c.sex, 20) * aOp, transform: `translateY(${(1 - prog(f, c.sex, 24)) * 20}px)`}} />
			<Overlay>
				<g opacity={aOp}>
					<Label x={286} y={690} at={c.sex + 14} text="strawberry flower" size={42} color={INK_SOFT} />
					{/* sperm-like gamete from parent 1 */}
					<g opacity={pop(c.gam)} transform={`translate(${sx},480)`}>
						<path d="M-38,0 C-80,-30 -110,30 -150,0 C-176,-16 -190,10 -214,0" fill="none" stroke={BLUE} strokeWidth={6} strokeLinecap="round" opacity={joined ? 0 : 1} />
						<circle r={40} fill="#cfe2f4" stroke={BLUE} strokeWidth={6} />
					</g>
					{/* egg-like gamete from parent 2 */}
					<g opacity={pop(c.gam + 6)}>
						<circle cx={1400} cy={480} r={96} fill="#f8d9cf" stroke={CORAL} strokeWidth={6} />
						<circle cx={1400} cy={480} r={34} fill="#efb5a5" opacity={0.7} />
						{joined ? <circle cx={1400} cy={480} r={34} fill="#cfe2f4" stroke={BLUE} strokeWidth={5} opacity={prog(f, c.join + 38, 12)} /> : null}
					</g>
					<Label x={1120} y={340} at={c.gam} text="two gametes" size={64} color={INK} out={c.join} />
					<Label x={1400} y={340} at={c.join + 30} text="joined: one new cell" size={58} color={INK} />
					<Callout from={[880, 530]} to={[700, 640]} at={c.sperm} text="sperm cell" sub="from one parent" color={BLUE} align="right" />
					<Callout from={[1400, 580]} to={[1470, 700]} at={c.egg} text="egg cell" sub="from the other parent" color={CORAL} />
					{!joined ? <Arrow x1={1000} y1={600} x2={1250} y2={600} at={c.join - 6} color={INK_SOFT} dur={20} /> : null}
				</g>
				{/* phase B: the cell and its chromosomes */}
				<g opacity={bIn}>
					<circle cx={330} cy={bodyY} r={150} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={6} />
					<g opacity={helixOp}><Helix x={230} y={bodyY - 30} w={200} h={60} at={c.dna} dur={22} turns={2} /></g>
					<g opacity={barsIn}>
						<ChromSet x={270} y={bodyY} color={setCol(0)} s={0.9} />
						<ChromSet x={390} y={bodyY} color={setCol(1)} s={0.9} />
					</g>
					<Label x={330} y={bodyY - 175} at={c.inside + 8} text="one cell" size={46} color={INK_SOFT} />
					<g opacity={prog(f, c.chrom, 10) * (1 - prog(f, c.body, 10))}>
						<Callout from={[262, bodyY - 30]} to={[330, bodyY - 260]} at={c.chrom} text="chromosomes" sub="packed DNA" color={AMBER_INK} />
					</g>
					<Label x={330} y={bodyY + 220} at={c.two1} text="two sets" size={64} color={INK} />
					<Label x={330} y={bodyY + 262} at={c.body} text="body cell" size={34} font="body" weight={600} color={INK_SOFT} />
					{f >= c.two1 ? <>
						<DrawPath d={`M${215},${bodyY + 100} Q${270},${bodyY + 128} ${325},${bodyY + 100}`} at={c.two1} dur={14} color={BLUE} width={6} />
						<DrawPath d={`M${335},${bodyY + 100} Q${390},${bodyY + 128} ${445},${bodyY + 100}`} at={c.two1 + 8} dur={14} color={CORAL} width={6} />
					</> : null}
					{/* gametes */}
					<g opacity={pop(c.one1 - 20)}>
						<circle cx={800} cy={bodyY} r={100} fill="#eaf2fa" stroke={BLUE} strokeWidth={6} />
						<ChromSet x={800} y={bodyY} color={BLUE} s={0.95} opacity={f >= c.one1 - 10 ? 1 : 0} />
					</g>
					<Label x={800} y={bodyY + 175} at={c.one1} text="one set" size={64} color={BLUE} />
					<Label x={800} y={bodyY + 217} at={c.one1 + 6} text="gamete" size={34} font="body" weight={600} color={INK_SOFT} />
					<g opacity={pop(c.gam2)}>
						<circle cx={1100} cy={bodyY} r={100} fill="#fbe6df" stroke={CORAL} strokeWidth={6} />
						<ChromSet x={1100} y={bodyY} color={CORAL} s={0.95} />
					</g>
					<Label x={1100} y={bodyY + 175} at={c.one2} text="one set" size={64} color={CORAL} />
					<Label x={1100} y={bodyY + 217} at={c.gam2 + 8} text="gamete" size={34} font="body" weight={600} color={INK_SOFT} />
					<Label x={950} y={bodyY + 22} at={c.plus} text="+" size={90} color={INK} />
					<Label x={1330} y={bodyY + 24} at={c.two2 - 12} text="=" size={90} color={INK} />
					{/* offspring */}
					<g opacity={prog(f, c.two2 - 4, 14)}>
						<circle cx={1570} cy={bodyY} r={150} fill="#fffdf8" stroke={INK} strokeWidth={6} />
					</g>
					<ChromSet x={interpolate(slide, [0, 1], [800, 1510])} y={bodyY} color={BLUE} s={interpolate(slide, [0, 1], [0.95, 0.9])} opacity={f >= c.two2 - 6 ? 1 : 0} />
					<ChromSet x={interpolate(slide, [0, 1], [1100, 1630])} y={bodyY} color={CORAL} s={interpolate(slide, [0, 1], [0.95, 0.9])} opacity={f >= c.two2 - 6 ? 1 : 0} />
					<Label x={1570} y={bodyY + 220} at={c.two2} text="two sets" size={64} color={INK} />
					<Label x={1570} y={bodyY + 262} at={c.two2 + 6} text="new offspring" size={34} font="body" weight={600} color={INK_SOFT} />
					<Label x={1510} y={bodyY + 330} at={c.each} text="from one parent" size={42} color={BLUE} />
					<Label x={1650} y={bodyY + 330} at={c.each + 12} text="from the other" size={42} color={CORAL} anchor="start" />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 4b. Variation ----------
type Pair = {l: number[]; r: number[]};
const L_GAMETES: number[][] = [[0, 1, 0], [1, 0, 1], [0, 0, 1], [1, 1, 0]];
const R_GAMETES: number[][] = [[1, 0, 0], [0, 1, 1], [1, 1, 0], [0, 0, 1]];
const SEEDS: Pair[] = [
	{l: [1, 0, 1], r: [1, 0, 0]},
	{l: [0, 1, 0], r: [0, 1, 1]},
	{l: [0, 0, 1], r: [1, 1, 0]},
	{l: [1, 1, 0], r: [0, 0, 1]},
	{l: [1, 0, 1], r: [0, 1, 1]},
];
const PairBeads: React.FC<{cx: number; cy: number; pair: Pair; r?: number; gap?: number}> = ({cx, cy, pair, r = 11, gap = 36}) => (
	<g>
		{[0, 1, 2].map(i => (
			<g key={i}>
				<Bead cx={cx + (i - 1) * gap} cy={cy - r - 2} r={r} slot={i} allele={pair.l[i]} />
				<Bead cx={cx + (i - 1) * gap} cy={cy + r + 2} r={r} slot={i} allele={pair.r[i]} />
			</g>
		))}
	</g>
);
const BEAD_SLOTS = [600, 960, 1320];

export const SceneVariation: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('variation'), {gene: 'A gene', section: 'section', instr: 'instructions', size: 'size of a strawberry', vers: 'different versions', allele: 'alleles', big: 'bigger fruit', small: 'smaller fruit', key: 'key part', gam: ['gametes', 1], ident: "aren't all identical", mix: ['mix', 1], which: 'which sperm', egg: 'egg', chance: 'chance', every: 'every seedling', own: 'own combination', diff: 'a bit different', diffs: 'Those differences', vari: 'variation', blend: 'a blend', copy: 'a copy', newmix: 'a new mix', cost: 'cost', slower: 'slower', energy: 'more energy', mate: 'a mate'});
	const s1 = 1 - prog(f, c.key - 8, 14);
	const s2 = prog(f, c.key + 4, 16) * (1 - prog(f, c.every - 14, 12));
	// ---- S1: gene slot and alleles
	const tBig = prog(f, c.big, 22), tBigOut = prog(f, c.small - 4, 16), tSm = prog(f, c.small, 22);
	const berryS = f < c.big ? 0 : f < c.small ? 1.9 * prog(f, c.big + 4, 16) : interpolate(prog(f, c.small + 4, 18), [0, 1], [1.9, 0.8]);
	const bigPos: [number, number] = [interpolate(tBig - tBigOut, [0, 1], [800, 600]), interpolate(tBig - tBigOut, [0, 1], [700, 475])];
	const smPos: [number, number] = [interpolate(tSm, [0, 1], [1000, 600]), interpolate(tSm, [0, 1], [700, 475])];
	// ---- S2: gametes and chance
	const lAt = (i: number) => c.ident + 4 + i * 12;
	const hopL = f >= c.which + 24 && f < c.chance ? [2, 0, 3, 1, 2, 3, 0, 1, 3, 2][Math.floor((f - c.which) / 5) % 10] : 1;
	const hopR = f >= c.which + 30 && f < c.chance ? [3, 1, 0, 2, 1, 3, 2, 0, 3, 1][Math.floor((f - c.which) / 5) % 10] : 0;
	const picked = f >= c.chance;
	const meet = prog(f, c.chance + 6, 30);
	const lY = [290, 440, 590, 740], rY = [290, 440, 590, 740];
	const lx = picked ? interpolate(meet, [0, 1], [640, 880]) : 640;
	const rx = picked ? interpolate(meet, [0, 1], [1280, 1040]) : 1280;
	const lpy = picked ? interpolate(meet, [0, 1], [lY[1], 470]) : lY[hopL];
	const rpy = picked ? interpolate(meet, [0, 1], [rY[0], 470]) : rY[hopR];
	const showRight = f >= c.which - 6;
	// ---- S4: the seedlings
	const AX = 310, AY = 280, AW = 1300;
	const reveal = prog(f, c.every + 6, 84);
	const cx = (i: number) => AX + [0.082, 0.276, 0.479, 0.672, 0.881][i] * AW;
	const s4 = prog(f, c.every - 4, 12);
	return (
		<>
			<Heading items={[[6, 'A gene and its alleles'], [c.key, 'Each gamete gets a different mix'], [c.which, 'Chance decides which gametes meet'], [c.every, 'Every seedling is a new mix']]} />
			{/* S1 */}
			<Overlay style={{opacity: s1}}>
				<DrawPath d="M360,475 L1560,475" at={c.gene} dur={30} color={INK_SOFT} width={64} opacity={0.35} cap="round" />
				<Label x={330} y={490} at={c.gene + 8} text="DNA" size={56} color={INK_SOFT} anchor="end" />
				{BEAD_SLOTS.map((x, i) => (
					<rect key={i} x={x - 70} y={425} width={140} height={100} rx={20} fill={i === 0 && f >= c.section ? 'rgba(240,168,48,0.22)' : 'rgba(255,253,248,0.6)'} stroke={i === 0 && f >= c.section ? AMBER : INK_SOFT} strokeWidth={i === 0 && f >= c.section ? 6 : 3.5} strokeDasharray={i === 0 && f >= c.section ? undefined : '10 9'} opacity={prog(f, c.gene + 14 + i * 8, 14)} />
				))}
				<Label x={600} y={405} at={c.section} text="a gene" size={62} color={AMBER_INK} />
				<Label x={1320} y={405} at={c.section + 24} text="other genes" size={42} color={INK_SOFT} />
				<Label x={960} y={405} at={c.section + 30} text="other genes" size={42} color={INK_SOFT} />
				<Label x={600} y={590} at={c.instr} text="instructions for one characteristic" size={46} color={INK} />
				<Berry cx={600} cy={300} s={berryS} />
				<Label x={600} y={225} at={c.size} text="fruit size" size={54} color={AMBER_INK} />
				{/* waiting beads */}
				<g opacity={prog(f, c.vers, 14)}>
					<Bead cx={800} cy={700} r={34} slot={0} allele={0} opacity={f >= c.big ? 0.3 : 1} />
					<Bead cx={1000} cy={700} r={34} slot={0} allele={1} opacity={f >= c.small ? 0.3 : 1} />
				</g>
				<Label x={800} y={780} at={c.big} text="bigger fruit" size={48} color={AL[0][0]} />
				<Label x={1000} y={780} at={c.small} text="smaller fruit" size={48} color={AL[0][1]} />
				<Label x={900} y={860} at={c.allele} text="alleles = versions of a gene" size={64} color={BLUE} />
				{f >= c.big && f < c.small ? <Bead cx={bigPos[0]} cy={bigPos[1]} r={34} slot={0} allele={0} /> : null}
				{f >= c.small ? <Bead cx={smPos[0]} cy={smPos[1]} r={34} slot={0} allele={1} /> : null}
			</Overlay>
			{/* S2 */}
			<Overlay style={{opacity: s2}}>
				{/* parent 1 */}
				<Label x={260} y={350} at={c.gam} text="one parent" size={56} color={INK} />
				{[0, 1].map(k => (
					<g key={k} opacity={prog(f, c.gam + 6 + k * 6, 14)}>
						<rect x={110} y={400 + k * 76} width={300} height={50} rx={25} fill="#e3ecf5" stroke={INK_SOFT} strokeWidth={3.5} />
						{[0, 1, 2].map(i => <Bead key={i} cx={165 + i * 95} cy={425 + k * 76} r={16} slot={i} allele={k} />)}
					</g>
				))}
				{L_GAMETES.map((p, i) => (
					<g key={i} opacity={prog(f, lAt(i), 12)}>
						<Arrow x1={425} y1={450} x2={575} y2={lY[i]} at={lAt(i) - 4} color={INK_SOFT} width={3.5} head={13} dur={12} />
						{!(picked && i === 1) ? <GameteBeads cx={640} cy={lY[i]} r={62} pattern={p} stroke={BLUE} scale={f >= c.mix + 6 && !showRight ? 1.05 : 1} /> : null}
					</g>
				))}
				<g opacity={prog(f, c.mix, 14) * (1 - prog(f, c.which - 8, 12))}>
					<Label x={960} y={420} at={c.mix} text="each gamete:" size={56} color={AMBER_INK} />
					<Label x={960} y={480} at={c.mix + 6} text="a different mix" size={56} color={AMBER_INK} />
					<Label x={960} y={540} at={c.mix + 12} text="of the parent's alleles" size={56} color={AMBER_INK} />
				</g>
				{/* parent 2 */}
				<g opacity={showRight ? 1 : 0}>
					<Label x={1660} y={350} at={c.which} text="the other parent" size={56} color={INK} />
					{[0, 1].map(k => (
						<g key={k} opacity={prog(f, c.which + k * 4, 12)}>
							<rect x={1510} y={400 + k * 76} width={300} height={50} rx={25} fill="#f6e6e0" stroke={INK_SOFT} strokeWidth={3.5} />
							{[0, 1, 2].map(i => <BeadAt key={i} x={1565 + i * 95} y={425 + k * 76} slot={i} allele={k === 0 ? [1, 0, 1][i] : [0, 1, 0][i]} />)}
						</g>
					))}
					{R_GAMETES.map((p, i) => (
						<g key={i} opacity={prog(f, c.which + 8 + i * 6, 12)}>
							<Arrow x1={1495} y1={450} x2={1345} y2={rY[i]} at={c.which + 6 + i * 6} color={INK_SOFT} width={3.5} head={13} dur={12} />
							{!(picked && i === 0) ? <GameteBeads cx={1280} cy={rY[i]} r={62} pattern={p} stroke={CORAL} /> : null}
						</g>
					))}
				</g>
				{/* chance rings */}
				{showRight && !picked ? (
					<>
						<circle cx={640} cy={lY[hopL]} r={78} fill="none" stroke={AMBER} strokeWidth={8} strokeDasharray="14 10" />
						<circle cx={1280} cy={rY[hopR]} r={78} fill="none" stroke={AMBER} strokeWidth={8} strokeDasharray="14 10" />
					</>
				) : null}
				{picked ? (
					<>
						<GameteBeads cx={lx} cy={lpy} r={62} pattern={L_GAMETES[1]} stroke={BLUE} />
						<GameteBeads cx={rx} cy={rpy} r={62} pattern={R_GAMETES[0]} stroke={CORAL} />
						<circle cx={lx} cy={lpy} r={78} fill="none" stroke={AMBER} strokeWidth={8} />
						<circle cx={rx} cy={rpy} r={78} fill="none" stroke={AMBER} strokeWidth={8} />
					</>
				) : null}
				<Label x={960} y={270} at={c.chance - 20} text="by chance" size={96} color={AMBER_INK} />
				<g opacity={prog(f, c.chance + 30, 10)}>
					<g transform="translate(960,590)">
						<circle r={70} fill="#fffdf8" stroke={INK} strokeWidth={5} />
						<PairBeads cx={0} cy={0} pair={SEEDS[0]} />
					</g>
					<Label x={960} y={700} at={c.chance + 34} text="a new mix" size={50} color={INK} />
				</g>
			</Overlay>
			{/* S4 */}
			<div style={{position: 'absolute', left: AX, top: AY, width: AW, height: 428, clipPath: `inset(0 ${100 - reveal * 100}% 0 0)`}}>
				<Art a={ART.seedlings} x={0} y={0} w={AW} />
			</div>
			<Overlay>
				{SEEDS.map((p, i) => {
					const at = c.own + i * 9;
					const o = prog(f, at, 12);
					return (
						<g key={i} opacity={o} transform={`translate(0,${(1 - o) * 14})`}>
							<rect x={cx(i) - 78} y={200} width={156} height={84} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={2.5} />
							<PairBeads cx={cx(i)} cy={242} pair={p} r={11} gap={44} />
						</g>
					);
				})}
				<g opacity={s4}>
					<Label x={960} y={766} at={c.diff} text="same two parents, five different seedlings" size={46} color={INK_SOFT} out={c.diffs - 4} />
				</g>
			</Overlay>
			<div style={{position: 'absolute', left: 0, right: 0, top: 772, display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'baseline', opacity: s4}}>
				<Enter at={c.vari - 2}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 80, color: BLUE}}>variation</span></Enter>
				<HandText text="= differences between individuals" at={c.diffs} size={80} cps={24} />
			</div>
			<Overlay>
				<g opacity={prog(f, c.blend - 4, 10) * (1 - prog(f, c.cost - 8, 10))}>
					<Label x={470} y={918} at={c.blend} text="not a blend" size={56} anchor="start" />
					<Mark x={400} y={896} at={c.blend + 8} kind="cross" size={44} />
					<Label x={960} y={918} at={c.copy} text="not a copy" size={56} anchor="start" />
					<Mark x={890} y={896} at={c.copy + 8} kind="cross" size={44} />
					<Label x={1380} y={918} at={c.newmix} text="a new mix" size={56} anchor="start" color={GREEN} />
					<Mark x={1310} y={896} at={c.newmix + 8} kind="tick" size={44} />
				</g>
			</Overlay>
			<Chip x={330} y={860} at={c.slower} text="slower" color={RED} out={undefined} size={44} />
			<Chip x={620} y={860} at={c.energy} text="takes more energy" color={RED} size={44} />
			<Chip x={1130} y={860} at={c.mate} text="usually needs a mate" color={RED} size={44} />
		</>
	);
};

const BeadAt: React.FC<{x: number; y: number; slot: number; allele: number}> = ({x, y, slot, allele}) => <Bead cx={x} cy={y} r={16} slot={slot} allele={allele} />;
