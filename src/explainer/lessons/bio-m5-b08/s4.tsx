// B8 scenes 11a to 13: two harder unseen questions with brief feedback (a fruit fly cell making eggs, with and without
// crossing over; strawberry runners against seedlings), the decision rule with the handoff, and the key notes. Each
// question card stays complete through its 10 s countdown and after it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	ABead8, AMBER, AMBER_INK, AnswerBox, Card, Chip, Chr, Countdown, DrawPath, Enter, FLY, FONT_DISPLAY, FONT_HAND, Fade, GREY_INK, GameteDot, GreyTag, HandText,
	Heading, INK, INK_SOFT, MistakeChip, ModelLine, Overlay, PCell, PL8, PlainArrow, PlateB, S, SRC, Shade, Soil, SpanBracket, Sun, Sx, chrBeadY, notesCheck, pbPt,
	chipW, prog, pulse, spaced, vis, wrap,
} from './shared';

// ---------- 11a. Attempt one (a fruit fly cell) ----------
const K11 = cues(S('attempt'), {two: 'Two harder questions now', cell: "a cell in a fruit fly's ovary", one: 'On one chromosome pair', DE: 'D and E on one chromosome', de: 'small d and small e', another: 'On another pair', F: 'it has F and small f', list: 'List the combinations', then: 'Then list the extra', explain: 'explain why those are less common', pause: 'Pause here to answer'});
const FC = {x: 520, y: 455, rx: 320, ry: 180};
const FlyCell: React.FC<{x: number; y: number; rx: number; ry: number; s: number; o?: [number, number, number, number]; beadO?: [number, number, number, number]; r?: number}> = ({x, y, rx, ry, s, o = [1, 1, 1, 1], beadO = [1, 1, 1, 1], r = 18}) => {
	const k = rx / 320;
	return (
		<g>
			<PCell cx={x} cy={y} rx={rx} ry={ry} />
			<Chr x={x - 120 * k} y={y} kind="L" col="P" s={s} top="D" bot="E" o={o[0]} beadO={beadO[0]} r={r} />
			<Chr x={x - 40 * k} y={y} kind="L" col="T" s={s} top="d" bot="e" o={o[1]} beadO={beadO[1]} r={r} />
			<Chr x={x + 120 * k} y={y + 10 * s} kind="S" col="P" s={s} top="F" o={o[2]} beadO={beadO[2]} r={r} />
			<Chr x={x + 200 * k} y={y + 10 * s} kind="S" col="T" s={s} top="f" o={o[3]} beadO={beadO[3]} r={r} />
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
				<PlateB p={PL8.flyRed} cx={1080} cy={128} w={130} o={prog(f, K11.cell, 12)} />
				<g opacity={prog(f, K11.cell, 14)}>
					<FlyCell x={FC.x} y={FC.y} rx={FC.rx} ry={FC.ry} s={1} o={[prog(f, K11.one, 12), prog(f, K11.one + 4, 12), prog(f, K11.another, 12), prog(f, K11.another + 4, 12)]} beadO={[prog(f, K11.DE, 10), prog(f, K11.de, 10), prog(f, K11.F, 10), prog(f, K11.F + 8, 10)]} />
				</g>
				<Fade at={K11.list - 10}>
					<rect x={960} y={290} width={860} height={140} rx={18} fill="#fffdf8" stroke={AMBER} strokeWidth={3} strokeDasharray="10 7" />
					<Sx x={990} y={346} text="assume: no mutation;" size={32} color={INK} weight={600} at={K11.list - 10} />
					<Sx x={990} y={396} text="the two pairs line up independently" size={32} color={INK} weight={600} at={K11.list - 6} />
				</Fade>
				<Sx x={96} y={720} text={DEM1A} size={30} color={INK} weight={700} at={K11.list} />
				<AnswerBox x={96} y={736} w={1440} h={62} at={K11.list + 8} lines={1} />
				{b.map((l, i) => <Sx key={i} x={96} y={850 + i * 38} text={l} size={30} color={INK} weight={700} at={K11.then + i * 4} />)}
				<AnswerBox x={96} y={850 + (b.length - 1) * 38 + 16} w={1440} h={58} at={K11.then + 10} lines={1} />
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
	const vp = pbPt(PL8.varied, 1020, 300, 420);
	const pots = [430, 720, 1000, 1270, 1560].map(u => vp(u, 700));
	return (
		<>
			<Heading text="Question two: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={182} text="(a) Source of variation in each group?   (b) Which group's differences can pass on through seeds?" size={26} color={INK_SOFT} weight={600} at={0} />
				<PlateB p={PL8.runner} cx={260} cy={300} w={220} />
				<Sun x={430} y={282} r={16} glow={pulse(f, K14.env, 40)} />
				<Shade x={530} y={282} s={0.5} glow={pulse(f, K14.env + 10, 40)} />
				<SpanBracket x1={160} x2={570} y={380} at={K14.genotype} label="= genotype (clones)" size={30} color={INK} />
				<PlateB p={PL8.varied} cx={1020} cy={300} w={420} />
				{pots.map(([x, y], i) => <Sx key={i} x={x} y={y + 50} text={TAGS[i]} size={22} color={INK} weight={800} anchor="middle" at={K14.gametes + i * 3} />)}
				<Sx x={1020} y={222} text="same bed, same conditions" size={28} color={AMBER_INK} hand anchor="middle" at={K14.bed} />
				{SRC.slice(0, 3).map((s, i) => <Chip key={s} x={1340} y={222 + i * 62} text={s} at={K14.reshuffled + i * 5} size={28} color={INK} stroke={AMBER} hot={pulse(f, K14.reshuffled + i * 5, 30)} />)}
				<ModelLine x={130} y={500} text="(a) A: clones, same genotype; differences from the environment (light)." at={K14.env} size={30} />
				<ModelLine x={130} y={556} text="B: same conditions; different genotypes from meiosis and fertilisation: genetic." at={K14.reshuffled} size={30} />
				<ModelLine x={130} y={612} text="(b) B: genetic differences are inherited; A's environmental differences are not." at={K14.only} size={30} />
				<MistakeChip x={96} y={690} text="shady plants pass on small fruit" at={K14.said} cross={K14.alleles - 10} size={30} />
				<GreyTag x={96} y={780} text="the environment does not change the alleles" at={K14.alleles} size={28} />
			</Overlay>
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const NEWA = 'new allele: a mutation; passed on only from the egg or sperm line';
const K15 = cues(S('decision-rule'), {asks: 'asks where variation comes from', sort: 'sort it first', newc: 'New combinations of existing alleles', newa: 'A new allele needs', same: 'if the genotypes are the same', env: 'look to the environment', next: "Next, you'll model", punnett: 'Punnett squares'});
export const SceneDecisionB8: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Where does the variation come from? Sort it" at={4} size={52} />
			<Overlay>
				<Chip x={150} y={260} text="new combinations: crossing over, assortment, fertilisation" at={K15.newc} size={42} color={INK} stroke={AMBER} />
				<Chip x={150} y={400} text={NEWA} at={K15.newa} size={38} color={AMBER_INK} stroke={AMBER} />
				<ABead8 x={Math.min(1860, 150 + chipW(NEWA, 38) + 44)} y={432} t="new" r={30} amber={1} o={prog(f, K15.newa + 8, 10)} />
				<Chip x={150} y={540} text="same genotype, different phenotype: environment" at={K15.same} size={42} color={INK} stroke="#a9825a" />
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
	'Four sources of genetic variation: crossing over and independent assortment (meiosis), random fertilisation, mutation.',
	'The first three make new combinations of existing alleles. Only mutation makes new alleles, and it is inherited only if it is in a cell that makes eggs or sperm.',
	'Two genes on different chromosomes (YyRr, no mutation): four gamete types, YR, Yr, yR, yr, each 1/4. Genes on the same chromosome are reshuffled only by crossing over, so those combinations are usually less common.',
	'Fertilisation multiplies: 4 × 4 = 16 pairings for two such genes; about 70 trillion whole-chromosome pairings for one human couple (2²³ × 2²³), before crossing over.',
	'Genetic variation (different genotypes) is inherited; environmental variation (same genotype, different conditions) is not.',
]);
export const SceneNotesB8: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 175, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 20}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 33, fontWeight: 500, color: INK, lineHeight: 1.28}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 110, top: 940}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 46, fontWeight: 700, color: AMBER_INK}}>Memory: Cross, Independently, Randomly; only Mutation makes new.</div>
		</Enter>
	</>
);
void GREY_INK; void PlainArrow; void vis;
