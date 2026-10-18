// G02 scenes 1 to 2d: the hook (three first moves, four question cards) and question 1 (Andalusian chickens:
// incomplete dominance, a 1 : 2 : 1 square, two separate chicks multiplied, and the cross that gives only blue).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {Overlay} from '../bio-m5-b06b/shared';
import {GenoTag, Pedigree, SERIF} from '../bio-m5-b09/genetics';
import {PunnettHSC} from '../bio-m5-b09/punnett-hsc';
import type {PLay} from '../bio-m5-b09/genetics';
import {Badge, CheckList, CheckStrip, Crossed, Fade, GreyTag, QText, qCheck, HscTag, ModelLine, Note, PauseHold, Sx, TaskLine, AidChip, smooth, vis} from './board';
import {CardFrame} from '../bio-m5-g01/s1';
import {BLACKxWHITE, BLUExBLUE, CB, CW, Demands, MOVES, MOVES_TITLE, PL2, PQ3, PQ4, PlateB, TWO_BLUE, chickOf, hold, sc} from './shared';

// ---------- 1. Hook ----------
const KH = cues(sc('hook'), {peas: 'rarely use peas', animal: "an animal you haven't met", family: 'or a family', cant: "can't tell you", every: 'Every one starts', model: 'choose the model', sure: "genotypes you're sure of", combine: 'combine the chances', four: 'four HSC-style questions', pause: 'Pause and try', classic: 'the classic mistake'});
const ModelIcon: React.FC = () => (
	<g>
		<circle cx={-22} cy={0} r={11} fill="#2a2a2a" stroke={INK} strokeWidth={2} />
		<circle cx={0} cy={0} r={11} fill="#7d8ca3" stroke={INK} strokeWidth={2} />
		<circle cx={22} cy={0} r={11} fill="#f2f0ea" stroke={INK} strokeWidth={2} />
	</g>
);
const MiniPedQ: React.FC<{x: number; y: number; ped: typeof PQ3; q: 'child' | 'legend'}> = ({x, y, ped, q}) => (
	<g>
		<Pedigree ped={ped} L={{x0: x, y0: y, gap: 62, row: 92, sz: 30}} nums={0} numerals={0} />
		<text x={q === 'child' ? x + 2.2 * 62 : x + 3.4 * 62} y={q === 'child' ? y + 92 + 64 : y - 40} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: 52}} fill={AMBER_INK}>?</text>
	</g>
);
export const SceneHookG2: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = 925;
	const th = (at: number) => prog(f, at, 16);
	return (
		<Overlay>
			<TaskLine text="Choose the model, then the chance" at={4} size={64} />
			<CheckList shrink={shrink} y={350} rows={[
				{text: '1 choose the model', at: KH.model, icon: <ModelIcon />},
				{text: "2 genotypes you're sure of", at: KH.sure, icon: <GenoTag x={0} y={0} text="Aa" size={26} />},
				{text: '3 combine the chances', at: KH.combine, icon: <text x={0} y={16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48}} fill={AMBER_INK}>×</text>},
			]} title="every one starts the same way" titleAt={KH.every} />
			<Fade at={KH.pause} out={shrink}>
				<Note x={96} y={760} text="pause, try, then check one step at a time" at={KH.pause} size={38} />
			</Fade>
			<Crossed x={96} y={800} text="the classic mistake" at={KH.classic} cross={KH.classic + 14} size={32} out={shrink} />
			<PlateB p={PL2.blue} cx={1190} cy={380} w={200} o={th(KH.animal)} />
			<PlateB p={PL2.tort} cx={1610} cy={385} w={270} o={th(KH.animal + 14)} />
			<g opacity={th(KH.family)}><MiniPedQ x={1100} y={640} ped={PQ3} q="child" /></g>
			<g opacity={th(KH.cant)}><MiniPedQ x={1520} y={630} ped={PQ4} q="legend" /></g>
			<CardFrame cx={1190} cy={390} label="Question 1" at={KH.four} />
			<CardFrame cx={1610} cy={390} label="Question 2" at={KH.four + 6} />
			<CardFrame cx={1190} cy={710} label="Question 3" at={KH.four + 12} />
			<CardFrame cx={1610} cy={710} label="Question 4" at={KH.four + 18} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} at={shrink + 8} />
		</Overlay>
	);
};

// ---------- Q1 board ----------
const TASK1 = 'Blue × blue: explain, give the ratio, then the chances.';
type Q1At = {and: number; black: number; white: number; all: number; farmer: number; explain: number; then: number; fin: number};
const NO1: Q1At = {and: -100, black: -100, white: -100, all: -100, farmer: -100, explain: -100, then: -100, fin: -100};
const M1 = ['a black bird crossed with a splashed white bird gives chicks that are all blue', 'two blue chickens', 'first two chicks are both blue', 'only blue chicks'];
const Q1Q = (t: Q1At) => qCheck([
	{text: 'In Andalusian chickens, a black bird crossed with a splashed white bird gives chicks that are all blue.', at: t.and},
	{text: 'A farmer crosses two blue chickens.', at: t.farmer},
	{text: '(a) Explain why some of their chicks are black and some are white, and give the ratio.', at: t.explain, para: true, weight: 650},
	{text: '(b) Find the probability that their first two chicks are both blue.', at: t.then, para: true, weight: 650},
	{text: '(c) Which cross would give only blue chicks?', at: t.fin, para: true, weight: 650},
], M1.map(phrase => ({phrase, at: 1e9})));
Q1Q(NO1);
const done1 = (n: number) => Object.fromEntries(M1.slice(0, n).map(p => [p, -100])) as Record<string, number>;
const Q1Head: React.FC<{a?: Q1At; m?: Record<string, number>}> = ({a, m = {}}) => {
	const f = useCurrentFrame();
	const t = a ?? NO1;
	return (
		<g>
			<TaskLine text={TASK1} at={a ? 6 : -100} size={48} />
			<HscTag at={a ? 10 : -100} />
			<PlateB p={PL2.black} cx={170} cy={265} w={150} o={prog(f, t.black, 14)} />
			<Sx x={170} y={372} text="black" size={26} color={INK_SOFT} hand anchor="middle" at={t.black + 6} />
			<Sx x={275} y={285} text="×" size={50} color={INK} weight={800} anchor="middle" at={t.white} />
			<PlateB p={PL2.splash} cx={380} cy={265} w={150} o={prog(f, t.white, 14)} />
			<Sx x={380} y={372} text="splashed white" size={26} color={INK_SOFT} hand anchor="middle" at={t.white + 6} />
			<g opacity={prog(f, t.all, 14)}>
				<path d="M470,268 L520,268 M506,256 L520,268 L506,280" fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
				{[590, 680, 770].map(x => <PlateB key={x} p={PL2.blue} cx={x} cy={268} w={84} />)}
			</g>
			<Note x={640} y={372} text="all blue" at={t.all + 6} size={32} />
			<QText q={Q1Q(t)} x={120} y={450} w={776} size={28} lh={36} at={t.and} markAt={m} />
		</g>
	);
};
const ANS1 = {a: '(a) blue = heterozygous; alleles separate: 1 : 2 : 1', b: `(b) 1/2 × 1/2 = ${TWO_BLUE}`, c: '(c) black × splashed white: all blue'};
const PG = {x: 1110, y: 660, cell: 130};

// ---------- 2a. Question 1 (pause) ----------
const KA = cues(sc('q1-question'), {q: 'Question one', and: 'In Andalusian chickens', black: 'a black bird', white: 'splashed white bird', all: 'all blue', farmer: 'A farmer crosses', explain: 'Explain why', then: 'Then find the probability', fin: 'Finally', pause: 'Pause here'});
export const SceneQ1QuestionG2: React.FC = () => {
	const h = hold('q1-question');
	return (
		<Overlay>
			<Q1Head a={{and: KA.and, black: KA.black, white: KA.white, all: KA.all, farmer: KA.farmer, explain: KA.explain, then: KA.then, fin: KA.fin}} />
			<Fade at={KA.explain + 10}>
				<rect x={1100} y={330} width={260} height={260} rx={10} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 7" />
				<line x1={1230} y1={330} x2={1230} y2={590} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
				<line x1={1100} y1={460} x2={1360} y2={460} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
			</Fade>
			<PauseHold h={h} at={KA.pause} x={1000} y={760} cx={1600} cy={470} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} hold={h} />
		</Overlay>
	);
};

// ---------- 2b. Choose the model, fill the square ----------
const KB = cues(sc('q1-model'), {model: 'choose the model', bw: 'Black crossed with white', third: 'a third colour', inc: 'incomplete dominance', het: 'heterozygous', oneB: 'one black allele', oneW: 'one white allele', two: 'Two blue parents', gives: 'the square gives', r1: '1 black', r2: '2 blue', r3: '1 white'});
const ROW = [{x: 1080, p: PL2.black, g: `${CB} ${CB}`}, {x: 1330, p: PL2.blue, g: `${CB} ${CW}`}, {x: 1580, p: PL2.splash, g: `${CW} ${CW}`}];
export const SceneQ1ModelG2: React.FC = () => {
	const f = useCurrentFrame();
	const plateAt = [KB.bw, KB.third, KB.bw + 14];
	const chipAt = [KB.oneB, KB.het, KB.oneW];
	const numAt = [KB.r1, KB.r2, KB.r3];
	const counts = ['black', 'blue', 'splashed white'].map(ph => BLUExBLUE.phen.find(q => q.ph === ph)?.n ?? 0);
	return (
		<Overlay>
			<Q1Head m={{[M1[0]]: KB.bw, [M1[1]]: KB.two}} />
						<Badge text="Incomplete dominance" at={KB.model + 6} />
			{ROW.map((r, i) => (
				<g key={i}>
					<PlateB p={r.p} cx={r.x} cy={380} w={140} o={prog(f, plateAt[i], 14)} />
					<GenoTag x={r.x} y={492} text={r.g} size={28} o={prog(f, chipAt[i], 12)} />
					<Sx x={r.x - 96} y={410} text={String(counts[i])} size={58} color={AMBER_INK} weight={800} anchor="middle" at={numAt[i]} />
				</g>
			))}
			<Note x={980} y={556} text="Incomplete is in-between." at={KB.inc} size={36} />
			<GreyTag x={1330} y={526} text="B10" at={KB.inc + 8} size={24} />
			<PunnettHSC x={PG.x} y={PG.y} cell={PG.cell} res={BLUExBLUE} top={[CB, CW]} side={[CB, CW]} gridAt={KB.two - 6} topAt={KB.two + 4} sideAt={KB.two + 14} fillAt={i => KB.two + 34 + i * 10} discR={34} chipR={21} phen />
			{BLUExBLUE.phen.map((q, i) => <Sx key={i} x={1420} y={740 + i * 46} text={`${q.n} ${q.ph}`} size={34} color={INK} weight={700} at={numAt[i] ?? KB.r3} />)}
			<ModelLine x={130} y={862} text={ANS1.a} at={KB.r3 + 6} size={30} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} ticks={{0: [KB.model]}} />
		</Overlay>
	);
};

// ---------- 2c. Two chicks, then only blue ----------
const KC = cues(sc('q1-chance'), {half: 'a one in two chance', sep: 'a separate chance', first: 'for the first chick', mult: 'multiply', quarter: 'one in four', only: 'for only blue chicks', bw: 'cross black with white', every: 'every chick gets one'});
const TREE = {root: [1010, 420] as [number, number], b1: [1180, 350] as [number, number], b2: [1180, 480] as [number, number], c1: [1390, 320] as [number, number]};
const Branch: React.FC<{a: [number, number]; b: [number, number]; at: number; label: string; lit?: number; lx?: number; ly?: number}> = ({a, b, at, label, lit = 0, lx = 10, ly = 10}) => {
	const f = useCurrentFrame();
	const p = smooth((f - at) / 16);
	if (p <= 0.01) return null;
	const x2 = a[0] + (b[0] - a[0]) * p, y2 = a[1] + (b[1] - a[1]) * p;
	return (
		<g>
			{lit > 0.01 ? <line x1={a[0]} y1={a[1]} x2={x2} y2={y2} stroke={AMBER} strokeWidth={14} strokeLinecap="round" opacity={0.6 * lit} /> : null}
			<line x1={a[0]} y1={a[1]} x2={x2} y2={y2} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<circle cx={b[0]} cy={b[1]} r={7} fill={INK} opacity={p} />
			<Sx x={b[0] + lx} y={b[1] + ly} text={label} size={30} color={INK} weight={700} at={at + 8} />
		</g>
	);
};
export const SceneQ1ChanceG2: React.FC = () => {
	const f = useCurrentFrame();
	const blueRing = (i: number) => (BLUExBLUE.cells[i].ph === 'blue' ? vis(f, KC.half, KC.only) : 0);
	const lit = prog(f, KC.quarter, 12);
	const treeO = 1 - 0.65 * prog(f, KC.only, 14);
	return (
		<Overlay>
			<Q1Head m={{...done1(2), [M1[2]]: KC.first, [M1[3]]: KC.only}} />
						<Badge text="Incomplete dominance" at={-100} />
			<PunnettHSC x={PG.x} y={PG.y} cell={PG.cell} res={BLUExBLUE} top={[CB, CW]} side={[CB, CW]} gridAt={-100} topAt={-100} sideAt={-100} fillAt={() => -100} discR={34} chipR={21} phen ring={blueRing} />
			<Sx x={PG.x} y={PG.y + 2 * PG.cell + 46} text={`blue: 2/4 = ${BLUExBLUE.frac(c => c.ph === 'blue')}`} size={36} color={AMBER_INK} weight={800} at={KC.half + 6} />
			<g opacity={treeO}>
				<circle cx={TREE.root[0]} cy={TREE.root[1]} r={8} fill={INK} opacity={prog(f, KC.sep, 10)} />
				<Sx x={1080} y={318} text="first chick" size={28} color={INK_SOFT} hand anchor="middle" at={KC.sep} />
				<Branch a={TREE.root} b={TREE.b1} at={KC.sep + 4} label="blue 1/2" lit={lit} />
				<Branch a={TREE.root} b={TREE.b2} at={KC.sep + 10} label="not blue 1/2" />
				<Sx x={1300} y={294} text="second chick" size={28} color={INK_SOFT} hand anchor="middle" at={KC.first} />
				<Branch a={TREE.b1} b={TREE.c1} at={KC.first + 6} label="blue 1/2" lit={lit} lx={12} ly={12} />
				<Sx x={1450} y={440} text={`1/2 × 1/2 = ${TWO_BLUE}`} size={40} color={AMBER_INK} weight={800} at={KC.quarter} />
			</g>
			<AidChip x={1316} y={500} text="Separate offspring, known parents: multiply." at={KC.mult} size={24} />
			<PunnettHSC x={1470} y={720} cell={86} res={BLACKxWHITE} top={[CB, CB]} side={[CW, CW]} gridAt={KC.bw - 8} topAt={KC.bw} sideAt={KC.bw + 8} fillAt={i => KC.every - 10 + i * 6} discR={20} phen />
			<ModelLine x={130} y={862} text={ANS1.a} at={-100} size={30} />
			<ModelLine x={130} y={908} text={ANS1.b} at={KC.quarter + 6} size={30} />
			<ModelLine x={130} y={954} text={ANS1.c} at={KC.every + 20} size={30} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} ticks={{0: [-100], 2: [KC.mult]}} />
		</Overlay>
	);
};

// ---------- 2d. The classic mistake ----------
const KD = cues(sc('q1-mistake'), {bb: 'crossing blue with blue', het: 'Blue birds are heterozygous', cant: "can't breed true", sep: 'The alleles separate again'});
export const SceneQ1MistakeG2: React.FC = () => (
	<Overlay>
		<Q1Head m={done1(4)} />
				<Badge text="Incomplete dominance" at={-100} />
		<PunnettHSC x={PG.x} y={PG.y} cell={PG.cell} res={BLUExBLUE} top={[CB, CW]} side={[CB, CW]} gridAt={-100} topAt={-100} sideAt={-100} fillAt={() => -100} discR={34} chipR={21} phen />
		<PunnettHSC x={1470} y={720} cell={86} res={BLACKxWHITE} top={[CB, CB]} side={[CW, CW]} gridAt={-100} topAt={-100} sideAt={-100} fillAt={() => -100} discR={20} phen />
		<Crossed x={1000} y={300} text="blue × blue gives only blue" at={KD.bb - 16} cross={KD.bb + 10} caption="heterozygotes don't breed true" size={34} />
		<Crossed x={1000} y={450} text="1/2 + 1/2 = 1 (added instead of multiplied)" at={KD.sep + 4} cross={KD.sep + 24} size={30} />
		<ModelLine x={130} y={862} text={ANS1.a} at={-100} size={30} />
		<ModelLine x={130} y={908} text={ANS1.b} at={-100} size={30} />
		<ModelLine x={130} y={954} text={ANS1.c} at={-100} size={30} />
		<CheckStrip labels={MOVES} title={MOVES_TITLE} ticks={{0: [-100], 2: [-100]}} />
	</Overlay>
);
void AMBER; void Demands;
