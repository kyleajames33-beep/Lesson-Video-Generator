// B8 scenes 11a to 13: two harder unseen questions with brief feedback (a fruit fly cell making eggs, with and without
// crossing over; strawberry runners against seedlings), the decision rule with the handoff, and the key notes. Each
// question card stays complete through its 10 s countdown and after it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	ABead8, AMBER, AMBER_INK, AnswerBox, Card, Chip, Chr, Countdown, DrawPath, Enter, FLY, FONT_DISPLAY, FONT_HAND, Fade, GREY_INK, GameteDot, GreyTag, HandText,
	Heading, INK, INK_SOFT, MistakeChip, ModelLine, Overlay, Cell8, PL8, PlainArrow, PlateB, S, SRC, Shade, Soil, SpanBracket, Sun, Sx, chrBeadY, notesCheck, pbPt,
	chipW, prog, pulse, spaced, vis, wrap, lerp,
} from './shared';

// ---------- 11a. Attempt one (a fruit fly cell) ----------
const K11 = cues(S('attempt'), {two: 'Two harder questions now', cell: "a cell in a fruit fly's ovary", one: 'On one chromosome pair', DE: 'D and E on one chromosome', de: 'small d and small e', another: 'On another pair', F: 'it has F and small f', list: 'List the combinations', then: 'Then list the extra', explain: 'explain why those are less common', pause: 'Pause here to answer'});
const FC = {x: 520, y: 470, rx: 400, ry: 225};
const FlyCell: React.FC<{x: number; y: number; rx: number; ry: number; s: number; o?: [number, number, number, number]; beadO?: [number, number, number, number]; r?: number; hi?: [number, number]}> = ({x, y, rx, ry, s, o = [1, 1, 1, 1], beadO = [1, 1, 1, 1], r = 18, hi = [0, 0]}) => {
	const k = rx / 320;
	return (
		<g>
			<Cell8 cx={x} cy={y} rx={rx} ry={ry} />
			<Chr x={x - 120 * k} y={y} kind="L" col="P" s={s} top="D" bot="E" o={o[0]} beadO={beadO[0]} r={r} hi={hi[0]} />
			<Chr x={x - 40 * k} y={y} kind="L" col="T" s={s} top="d" bot="e" o={o[1]} beadO={beadO[1]} r={r} hi={hi[0]} />
			<Chr x={x + 120 * k} y={y + 10 * s} kind="S" col="P" s={s} top="F" o={o[2]} beadO={beadO[2]} r={r} hi={hi[1]} />
			<Chr x={x + 200 * k} y={y + 10 * s} kind="S" col="T" s={s} top="f" o={o[3]} beadO={beadO[3]} r={r} hi={hi[1]} />
		</g>
	);
};
const DEM1A = '(a) List the combinations of alleles the eggs can carry with no crossing over.';
const DEM1B = '(b) List the extra combinations if crossing over happens between the D and E genes. Explain why these are less common.';
export const SceneAttemptB8: React.FC = () => {
	const h = S('attempt').responseHold as {startFrame: number; endFrame: number};
	const f = useCurrentFrame();
	const b = wrap(DEM1B, 30, 1420);
	return (
		<>
			<Heading text="A cell in a fruit fly's ovary, making eggs" at={4} size={50} />
			<Overlay>
				<PlateB p={PL8.flyRed} cx={1180} cy={505} w={290} o={prog(f, 8, 14)} />
				<Sx x={1350} y={470} text="fruit fly (female)" size={38} color={INK} hand at={K11.cell} />
				<Sx x={1350} y={516} text="a cell in her ovary" size={34} color={INK_SOFT} hand at={K11.cell + 8} />
				<Sx x={1350} y={556} text="is making eggs" size={34} color={INK_SOFT} hand at={K11.cell + 14} />
				<Fade at={K11.cell - 6}>
					<path d={`M1110,560 C1030,600 980,560 ${FC.x + FC.rx - 10},${FC.y + 40}`} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 8" />
				</Fade>
				<g opacity={prog(f, K11.two + 36, 14)}>
					<FlyCell x={FC.x} y={FC.y} rx={FC.rx} ry={FC.ry} s={1.25} r={22} o={[prog(f, K11.cell - 30, 12), prog(f, K11.cell - 26, 12), prog(f, K11.cell - 22, 12), prog(f, K11.cell - 18, 12)]} beadO={[prog(f, K11.DE, 10), prog(f, K11.de, 10), prog(f, K11.F, 10), prog(f, K11.F + 8, 10)]} hi={[vis(f, K11.one, K11.another), vis(f, K11.another, K11.list)]} />
				</g>
				<Fade at={K11.list - 10}>
					<rect x={1000} y={196} width={820} height={124} rx={18} fill="#fffdf8" stroke={AMBER} strokeWidth={3} strokeDasharray="10 7" />
					<Sx x={1028} y={246} text="assume: no mutation;" size={32} color={INK} weight={600} at={K11.list - 10} />
					<Sx x={1028} y={292} text="the two pairs line up independently" size={32} color={INK} weight={600} at={K11.list - 6} />
				</Fade>
				<Sx x={96} y={746} text={DEM1A} size={30} color={INK} weight={700} at={K11.list} />
				<AnswerBox x={96} y={762} w={1440} h={58} at={K11.list + 8} lines={1} />
				{b.map((l, i) => <Sx key={i} x={96} y={868 + i * 38} text={l} size={30} color={INK} weight={700} at={K11.then + i * 4} />)}
				<AnswerBox x={96} y={868 + (b.length - 1) * 38 + 16} w={1440} h={56} at={K11.then + 10} lines={1} />
				<Sx x={96} y={1056} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K11.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1720} y={840} r={54} />
			</Overlay>
		</>
	);
};

// ---------- 11b. Feedback one ----------
const K12 = cues(S('feedback-one'), {stays: 'capital D stays with capital E', de: 'small d with small e', either: 'either F allele', four: "that's four combinations", co: 'Crossing over between the genes', De: 'capital D with small e', dE: 'small d with capital E', more: 'four more', less: "They're less common", some: 'only some cells', listed: 'If you listed all eight', treated: 'you treated D and E', diff: 'on different chromosomes'});
const GXS = [720, 920, 1120, 1320];
export const SceneFeedbackOneB8: React.FC = () => {
	const f = useCurrentFrame();
	const mini = {x: 300, y: 330, rx: 190, ry: 110, s: 0.6};
	const k = mini.rx / 320;
	const lx1 = mini.x - 120 * k, lx2 = mini.x - 40 * k;
	const midY = (chrBeadY(mini.y, 'L', mini.s, 'top') + chrBeadY(mini.y, 'L', mini.s, 'bot')) / 2;
	return (
		<>
			<Heading text="Question one: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={182} text="(a) eggs with no crossing over?   (b) extra ones with a crossover between D and E, and why less common?" size={26} color={INK_SOFT} weight={600} at={0} />
				<FlyCell x={mini.x} y={mini.y} rx={mini.rx} ry={mini.ry} s={mini.s} r={13} />
				<Fade at={K12.stays}>
					<rect x={lx1 - 22} y={mini.y - 100} width={44} height={200} rx={20} fill="none" stroke={AMBER_INK} strokeWidth={3} strokeDasharray="6 6" />
					<rect x={lx2 - 22} y={mini.y - 100} width={44} height={200} rx={20} fill="none" stroke={AMBER_INK} strokeWidth={3} strokeDasharray="6 6" opacity={prog(f, K12.de, 10)} />
				</Fade>
				<Sx x={mini.x - 40} y={488} text="travel together" size={30} color={AMBER_INK} hand anchor="middle" at={K12.stays + 10} />
				<Fade at={K12.co}>
					<path d={`M${lx1 - 14},${midY - 10} L${lx2 + 14},${midY + 10} M${lx2 + 14},${midY - 10} L${lx1 - 14},${midY + 10}`} stroke={AMBER} strokeWidth={5} strokeLinecap="round" />
				</Fade>
				<Sx x={mini.x + 120} y={530} text="swap between D and E" size={26} color={AMBER_INK} hand anchor="middle" at={K12.co + 6} />
				{FLY.parental.map((g, i) => <GameteDot key={g} x={GXS[i]} y={300} text={spaced(g)} r={62} o={prog(f, K12.either + i * 5, 10)} />)}
				{FLY.recombinant.map((g, i) => <GameteDot key={g} x={GXS[i]} y={470} text={spaced(g)} r={50} size={30} o={prog(f, K12.De + i * 6, 10)} ring={prog(f, K12.more, 12)} />)}
				<Sx x={1460} y={312} text="4" size={56} color={INK} weight={800} at={K12.four} />
				<Sx x={1460} y={482} text="4 more, less common" size={34} color={AMBER_INK} hand at={K12.more} />
				<ModelLine x={130} y={620} text={`(a) ${FLY.parental.join(', ')}`} at={K12.four} size={34} />
				<ModelLine x={130} y={676} text={`(b) ${FLY.recombinant.join(', ')}`} at={K12.more} size={34} color={AMBER_INK} />
				<ModelLine x={130} y={732} text="Less common: a crossover between D and E happens in only some cells." at={K12.some} size={30} />
				<MistakeChip x={96} y={800} text="all eight equally common" at={K12.listed} cross={K12.treated} size={30} />
				<GreyTag x={96} y={890} text="D and E are on the same chromosome" at={K12.diff} size={28} />
			</Overlay>
		</>
	);
};

// ---------- 11c. Attempt two (strawberries) ----------
const K13 = cues(S('attempt-two'), {second: 'Second', grower: 'A grower has one', A: 'Group A is twenty', sunny: 'ten in a sunny bed', shady: 'ten in a shady bed', differs: 'differs between the beds', B: 'Group B is twenty', pollinated: 'pollinated by another strawberry', all: 'all in the sunny bed', vary: 'shape and colour vary', explain: 'Explain the source', then: 'Then say which', pause: 'Pause here to answer'});
const DEM2A = '(a) Explain the source of the variation in each group.';
const DEM2B = "(b) Which group's differences could be passed on through seeds? Justify.";
const Bed: React.FC<{x: number; at: number; f: number; n?: number; w?: number}> = ({x, at, f, n = 3, w = 300}) => (
	<g opacity={prog(f, at, 12)}>
		<Soil x={x} y={560} w={w} />
		{Array.from({length: n}, (_, i) => <PlateB key={i} p={PL8.seedling} cx={x - w / 2 + 60 + i * ((w - 120) / Math.max(1, n - 1))} cy={520} w={46} />)}
	</g>
);
export const SceneAttemptTwoB8: React.FC = () => {
	const h = S('attempt-two').responseHold as {startFrame: number; endFrame: number};
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Strawberries: runners and seedlings" at={4} size={52} />
			<Overlay>
				<PlateB p={PL8.prize} cx={980} cy={132} w={120} o={prog(f, K13.grower, 12)} />
				<Sx x={1060} y={150} text="the grower's plant" size={32} color={INK_SOFT} hand at={K13.grower} />
				<Fade at={K13.A - 4}>
					<rect x={96} y={220} width={840} height={500} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<Sx x={120} y={270} text="Group A: from runners" size={40} color={INK} hand at={K13.A - 4} />
				</Fade>
				<PlateB p={PL8.runner} cx={300} cy={378} w={340} o={prog(f, K13.A, 12)} />
				<Bed x={300} at={K13.sunny} f={f} />
				<Bed x={700} at={K13.shady} f={f} />
				<Fade at={K13.shady}><DrawPath d="M470,420 C560,420 590,470 620,505" at={K13.shady} dur={20} color="#5c7f3a" width={4} dash="6 8" /></Fade>
				<Sun x={160} y={640} r={16} o={prog(f, K13.sunny, 10)} />
				<Sx x={200} y={652} text="sunny bed (10)" size={30} color={INK} hand at={K13.sunny} />
				<Shade x={585} y={640} s={0.55} o={prog(f, K13.shady, 10)} />
				<Sx x={625} y={652} text="shady bed (10)" size={30} color={INK} hand at={K13.shady} />
				<Sx x={516} y={702} text="fruit size differs between beds" size={30} color={AMBER_INK} weight={700} anchor="middle" at={K13.differs} />
				<Fade at={K13.B - 4}>
					<rect x={984} y={220} width={840} height={500} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<Sx x={1008} y={270} text="Group B: from seeds" size={40} color={INK} hand at={K13.B - 4} />
				</Fade>
				<PlateB p={PL8.varied} cx={1404} cy={410} w={560} o={prog(f, K13.B, 12)} />
				<Chip x={1404} y={526} anchor="middle" text="pollinated by another plant" at={K13.pollinated} size={30} color={INK} stroke={AMBER} />
				<Sun x={1150} y={640} r={16} o={prog(f, K13.all, 10)} />
				<Sx x={1190} y={652} text="sunny bed (20)" size={30} color={INK} hand at={K13.all} />
				<Sx x={1404} y={702} text="fruit size, shape and colour vary" size={30} color={AMBER_INK} weight={700} anchor="middle" at={K13.vary} />
				<Sx x={96} y={784} text={DEM2A} size={30} color={INK} weight={700} at={K13.explain} />
				<AnswerBox x={96} y={800} w={1440} h={62} at={K13.explain + 8} lines={1} />
				<Sx x={96} y={912} text={DEM2B} size={30} color={INK} weight={700} at={K13.then} />
				<AnswerBox x={96} y={928} w={1440} h={58} at={K13.then + 8} lines={1} />
				<Sx x={96} y={1056} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K13.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1720} y={860} r={54} />
			</Overlay>
		</>
	);
};

// ---------- 11d. Feedback two ----------
const K14 = cues(S('feedback-two'), {clones: 'Group A are clones', genotype: 'the same genotype', env: 'come from the environment', B: 'Group B grew', bed: 'in the same bed', genetic: 'mostly genetic', gametes: 'from different gametes', reshuffled: 'reshuffled by crossing over', only: "Only Group B's differences", said: 'If you said the shady', alleles: "didn't change their alleles"});
const TAGS = ['AaBb', 'aaBb', 'AAbb', 'Aabb', 'aaBB'];
export const SceneFeedbackTwoB8: React.FC = () => {
	const f = useCurrentFrame();
	const vp = pbPt(PL8.varied, 1150, 380, 620);
	const pots = [430, 720, 1000, 1270, 1560].map(u => vp(u, 700));
	return (
		<>
			<Heading text="Question two: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={182} text="(a) Source of variation in each group?   (b) Which group's differences can pass on through seeds?" size={28} color={INK_SOFT} weight={600} at={0} />
				<Sx x={110} y={258} text="Group A: runners" size={40} color={INK} hand at={0} />
				<PlateB p={PL8.runner} cx={330} cy={400} w={440} />
				<Sun x={620} y={330} r={24} glow={pulse(f, K14.env, 40)} />
				<Shade x={640} y={430} s={0.8} glow={pulse(f, K14.env + 10, 40)} />
				<SpanBracket x1={110} x2={560} y={540} at={K14.genotype} label="= genotype (clones)" size={34} color={INK} />
				<Sx x={850} y={258} text="Group B: seeds" size={40} color={INK} hand at={0} />
				<PlateB p={PL8.varied} cx={1150} cy={380} w={620} />
				{pots.map(([x, y], i) => <Sx key={i} x={x} y={y + 64} text={TAGS[i]} size={30} color={INK} weight={800} anchor="middle" at={K14.gametes + i * 3} />)}
				<Sx x={1250} y={258} text="same bed, same conditions" size={34} color={AMBER_INK} hand at={K14.bed} />
				{SRC.slice(0, 3).map((s, i) => <Chip key={s} x={[760, 1030, 1440][i]} y={560} text={s} at={K14.reshuffled + i * 5} size={28} color={INK} stroke={AMBER} hot={pulse(f, K14.reshuffled + i * 5, 30)} />)}
				<ModelLine x={130} y={680} text="(a) A: clones, same genotype; differences from the environment (light)." at={K14.env} size={32} />
				<ModelLine x={130} y={738} text="B: same conditions; different genotypes from meiosis and fertilisation: genetic." at={K14.reshuffled} size={32} />
				<ModelLine x={130} y={796} text="(b) B: genetic differences are inherited; A's environmental differences are not." at={K14.only} size={32} />
				<MistakeChip x={96} y={850} text="shady plants pass on small fruit" at={K14.said} cross={K14.alleles - 10} size={32} />
				<GreyTag x={96} y={944} text="the environment does not change the alleles" at={K14.alleles} size={30} />
			</Overlay>
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const K15 = cues(S('decision-rule'), {asks: 'asks where variation comes from', sort: 'sort it first', newc: 'New combinations of existing alleles', co: 'crossing over', ass: 'assortment and', fert: 'fertilisation', newa: 'A new allele needs', passed: 'to be passed on', egg: 'in the egg or sperm line', same: 'if the genotypes are the same', env: 'look to the environment', next: "Next, you'll model", punnett: 'Punnett squares'});
const BIN = {y: 196, h: 520, w: 560};
const binX = (i: number) => 96 + i * (BIN.w + 24);
/** One sort bin: a framed column with a title that lands on "sort it first". */
const SortBin: React.FC<{i: number; at: number; title: string[]; stroke: string; hot: number}> = ({i, at, title, stroke, hot}) => (
	<Fade at={at}>
		<rect x={binX(i)} y={BIN.y} width={BIN.w} height={BIN.h} rx={24} fill="#fffdf8" stroke={hot > 0.01 ? AMBER : stroke} strokeWidth={hot > 0.01 ? 5 : 3} />
		{title.map((t, k) => <Sx key={k} x={binX(i) + BIN.w / 2} y={BIN.y + 56 + k * 46} text={t} size={42} color={INK} hand anchor="middle" at={at} />)}
	</Fade>
);
export const SceneDecisionB8: React.FC = () => {
	const f = useCurrentFrame();
	const c0 = binX(0) + BIN.w / 2, c1 = binX(1) + BIN.w / 2, c2 = binX(2) + BIN.w / 2;
	const shuffle = prog(f, K15.newc + 10, 30);
	return (
		<>
			<Heading text="Where does the variation come from? Sort it" at={4} size={52} />
			<Overlay>
				<SortBin i={0} at={K15.sort} title={['new combinations', 'of existing alleles']} stroke="rgba(60,45,20,0.25)" hot={vis(f, K15.newc, K15.newa)} />
				<SortBin i={1} at={K15.sort + 6} title={['a new allele']} stroke="rgba(60,45,20,0.25)" hot={vis(f, K15.newa, K15.same)} />
				<SortBin i={2} at={K15.sort + 12} title={['same genotype,', 'different phenotype']} stroke="rgba(60,45,20,0.25)" hot={vis(f, K15.same, K15.next)} />
				{/* bin 1: the same cards, reshuffled into new hands */}
				{['A', 'B', 'D', 'a', 'b', 'd'].map((t, k) => {
					const sx = c0 - 170 + k * 68;
					const [hand, pos] = ([[0, 0], [1, 1], [0, 2], [1, 0], [0, 1], [1, 2]] as [number, number][])[k];
					const tx = (hand ? c0 + 50 : c0 - 214) + pos * 56;
					return <Card key={k} x={lerp(sx, tx, shuffle)} y={362 - Math.sin(Math.PI * shuffle) * 40} t={t} rot={(pos - 1) * 7 * shuffle} s={0.8} o={prog(f, K15.sort + 10 + k * 2, 8)} />;
				})}
				<Sx x={c0} y={450} text="same cards, new hands" size={30} color={INK_SOFT} hand anchor="middle" at={K15.newc + 20} />
				{SRC.slice(0, 3).map((s, k) => <Chip key={s} x={c0} y={480 + k * 70} anchor="middle" text={s} at={[K15.co, K15.ass, K15.fert][k]} size={32} color={INK} stroke={AMBER} />)}
				{/* bin 2: a mutation makes a new allele; inherited only from the egg or sperm line */}
				<g opacity={prog(f, K15.sort + 16, 12)}>
					<ABead8 x={c1 - 70} y={330} t="A" r={34} />
					<PlainArrow x1={c1 - 24} y1={330} x2={c1 + 30} y2={330} at={K15.newa} color={INK_SOFT} />
				</g>
				<ABead8 x={c1 + 76} y={330} t="new" r={34} amber={1} o={prog(f, K15.newa + 8, 10)} />
				<Sx x={c1} y={420} text="mutation" size={38} color={AMBER_INK} hand anchor="middle" at={K15.newa + 10} />
				<PlateB p={PL8.sperm} cx={c1 - 110} cy={540} w={230} o={prog(f, K15.egg, 12)} />
				<PlateB p={PL8.egg} cx={c1 + 150} cy={545} w={150} o={prog(f, K15.egg + 6, 12)} />
				<Sx x={c1} y={660} text="passed on only from" size={32} color={INK} hand anchor="middle" at={K15.passed} />
				<Sx x={c1} y={698} text="the egg or sperm line" size={32} color={INK} hand anchor="middle" at={K15.egg} />
				{/* bin 3: same genes, the environment differs */}
				<PlateB p={PL8.hydBlue} cx={c2 - 120} cy={420} w={210} o={prog(f, K15.sort + 22, 12)} />
				<PlateB p={PL8.hydPink} cx={c2 + 120} cy={420} w={210} o={prog(f, K15.sort + 26, 12)} />
				<Soil x={c2 - 120} y={530} w={220} h={36} o={prog(f, K15.sort + 22, 12)} />
				<Soil x={c2 + 120} y={530} w={220} h={36} o={prog(f, K15.sort + 26, 12)} />
				<Chip x={c2} y={600} anchor="middle" text="look to the environment" at={K15.env} size={34} color={INK} stroke="#a9825a" />
				<Fade at={K15.next}>
					<rect x={1000} y={760} width={824} height={120} rx={26} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
					<ABead8 x={1062} y={820} t="A" r={20} />
					<Card x={1112} y={820} t="a" s={0.6} />
				</Fade>
				<Sx x={1160} y={836} text="Next: model it yourself" size={42} color={INK} hand at={K15.next} />
				<Fade at={K15.punnett - 10}>
					<rect x={1000} y={900} width={824} height={120} rx={26} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
				</Fade>
				<PlateB p={PL8.peaYR} cx={1072} cy={960} w={80} o={prog(f, K15.punnett - 10, 12)} />
				<Sx x={1140} y={976} text="Then: Punnett squares and pedigrees" size={40} color={INK} hand at={K15.punnett - 10} />
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = notesCheck([
	'Four sources: crossing over, independent assortment, random fertilisation, mutation.',
	'The first three make new combinations of existing alleles.',
	'Only mutation makes new alleles; inherited only if in the egg or sperm line.',
	'YyRr (genes on different chromosomes): gametes YR, Yr, yR, yr, each 1/4.',
	'Genes on one chromosome stay together unless crossing over separates them.',
	'Fertilisation multiplies: 4 × 4 = 16 pairings for two genes.',
	'Genetic variation is inherited; environmental variation is not.',
]);
export const SceneNotesB8: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={60} cps={40} /></div>
		<div style={{position: 'absolute', left: 110, top: 180, width: 1140}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 8} style={{display: 'flex', gap: 20, marginBottom: 22}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 16, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 36, fontWeight: 500, color: INK, lineHeight: 1.22}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={80} style={{position: 'absolute', left: 1320, top: 200, width: 500, boxSizing: 'border-box', padding: '26px 30px', borderRadius: 24, border: `4px solid ${AMBER}`, background: '#fffdf8', boxShadow: '0 14px 34px rgba(60,45,20,0.10)'}}>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: AMBER_INK, lineHeight: 1}}>Remember the four</div>
			{[['C', 'ross', 'crossing over'], ['I', 'ndependently', 'independent assortment'], ['R', 'andomly', 'random fertilisation']].map(([c, w, src]) => (
				<div key={c} style={{marginTop: 14}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: INK, lineHeight: 1}}><span style={{color: AMBER_INK, textDecoration: 'underline'}}>{c}</span>{w}</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 26, color: INK_SOFT}}>{src}</div>
				</div>
			))}
			<div style={{height: 3, background: '#eadfc8', margin: '20px 0 16px'}} />
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: INK, lineHeight: 1.1}}>only <span style={{color: AMBER_INK, textDecoration: 'underline'}}>M</span>utation makes new</div>
		</Enter>
		<Enter at={150} style={{position: 'absolute', left: 110, top: 960}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 40, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
void GREY_INK; void PlainArrow; void vis;
