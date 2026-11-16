// C8-09 scenes 1 to 6: the hook (an unknown liquid; a machine that weighs charged pieces), the five stages over the
// painted cutaway with coded ion flight, reading the chart (m/z and relative abundance), the molecular ion (72, the one
// O condition, M+1 at 73), same mass for four isomers, and a bond breaking (detected ion, undetected neutral piece).
// Layout: heading top left; the spectrum fills the left two thirds; the right third holds the current card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, AnsBox, EDGE, BalanceIcon, CandStrip, CARD, Chip, CrossOut, FRAG, FRAG_INK, GOLD, GOLD_INK, GREYT, GTag, GapBracket, INK, INK_SOFT, IonFlight, MolSplit, NAVY, NEUT, PeakLab, Pic, PicH, SPEC, SpecAxes, Spot, StickSpec, Svg, Sx, T, Title, pbPt, prog, sxm, syh, vis,
} from './parts';
import type {Cand, SG} from './parts';
import {PL} from './assets';
import {K} from './common';

const ON = -1000;
export const TITLE = 'What do the pieces weigh?';
export const Task: React.FC<{text: string; at?: number}> = ({text, at = 2}) => <Sx x={96} y={196} text={text} size={44} color={NAVY} hand at={at} />;
/** The reading-size spectrum (left two thirds) and the right card column. */
export const G1: SG = {x: 190, y: 300, w: 1000, h: 520, m0: 10, m1: 100};
export const RX = 1300, RW = 524;
/** The spectrum under the candidate strip (scenes 5 and 9). */
export const G2: SG = {x: 190, y: 470, w: 1000, h: 380, m0: 10, m1: 100};
export const C4: Cand[] = [
	{k: 'butanone', name: 'butanone', chip: '72'},
	{k: 'butanal', name: 'butanal', chip: '72'},
	{k: 'mepropanal', name: '2-methylpropanal', chip: '72'},
	{k: 'butenol', name: 'but-3-en-2-ol', chip: '72'},
];

// ---------- 1. hook ----------
const K1 = K('hook', {bottle: 'bottle of', know: 'All you', balance: 'balance', ms: 'mass spectrometer', charged: 'charged pieces', weighs: 'weighs every', spectrum: 'mass spectrum', out: 'structures out'});
const GH: SG = {x: 240, y: 770, w: 1300, h: 150, m0: 10, m1: 100};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text={TITLE} />
			<PicH p={PL.bottle} cx={250} cy={470} h={380} />
			<Sx x={250} y={540} text="?" size={90} color={NAVY} anchor="middle" weight={800} at={K1.bottle} />
			<Chip x={250} y={680} text="C, H and one O" size={34} color={NAVY} ink={INK} anchor="middle" at={K1.know} />
			<BalanceIcon x={560} y={500} at={K1.balance - 20} />
			<CrossOut x={460} y={450} w={200} h={160} at={K1.balance + 6} />
			<Sx x={560} y={650} text="one molecule: too light to weigh" size={30} color={GREYT} anchor="middle" hand at={K1.balance + 10} />
			<Pic p={PL.ms} cx={1380} cy={430} w={820} at={K1.ms} slide={120} />
			<MolSplit k="chain4" x={600} y={300} s={0.8} at={K1.charged - 20} snap={K1.charged + 6} keep={[0, 1]} cut={[1, 2]} to={[-40, 20]} away={[50, -30]} out={K1.spectrum + 40} />
			<Sx x={600} y={226} text="charged pieces, each weighed" size={30} color={FRAG_INK} anchor="middle" hand at={K1.weighs} out={K1.spectrum + 40} />
			<SpecAxes g={GH} at={K1.spectrum} yTicks={false} size={26} yTitle="" />
			{[0, 1, 2, 3].map(i => <g key={i} opacity={prog(f, K1.out + i * 6, 12)}>
				<rect x={1000 + i * 210} y={150 - 0} width={190} height={60} rx={14} fill={CARD} stroke={NEUT} strokeWidth={2.5} strokeDasharray="8 6" />
				<Sx x={1095 + i * 210} y={194} text="?" size={40} color={GREYT} anchor="middle" weight={800} at={ON} />
			</g>)}
			<Sx x={990} y={194} text="possible structures" size={30} color={GREYT} anchor="end" hand at={K1.out} />
		</Svg>
	);
};

// ---------- 2. five stages ----------
const K2 = K('five-stages', {how: "Here's how", gas: 'into a gas', beam: 'A beam', positive: 'positive ions', electric: 'An electric', magnetic: 'a magnetic', path: 'their path', light: 'Light ions', count: 'count each', only: 'Only charged', detected: 'never detected'});
const CW = 1460, CCX = 960, CCY = 610;
const cmap = pbPt(PL.cut, CCX, CCY, CW);
type Stage = {t: string; at: number; next?: number; u: number; v: number};
export const SceneStages: React.FC = () => {
	const f = useCurrentFrame();
	const stages: Stage[] = [
		{t: '1 vaporise', at: K2.gas - 20, next: K2.beam, u: 430, v: 620},
		{t: '2 ionise', at: K2.beam, next: K2.electric, u: 710, v: 540},
		{t: '3 accelerate', at: K2.electric, next: K2.magnetic, u: 1000, v: 560},
		{t: '4 deflect', at: K2.magnetic, next: K2.count, u: 1420, v: 1000},
		{t: '5 detect', at: K2.count, u: 1640, v: 210},
	];
	return (
		<Svg>
			<Title text="Inside a mass spectrometer" />
			<Pic p={PL.cut} cx={CCX} cy={CCY} w={CW} />
			<IonFlight map={cmap} at={K2.gas - 30} ionise={K2.beam + 10} accel={K2.electric} bend={K2.path - 10} count={K2.count} neutral={K2.detected - 30} />
			{stages.map((s, i) => {
				const [x, y] = cmap(s.u, s.v);
				const dim = s.next === undefined ? 0 : prog(f, s.next, 14);
				return <g key={i} opacity={1 - 0.3 * dim}><Chip x={x} y={y - 30} text={s.t} size={40} color={NAVY} ink={dim > 0.5 ? INK_SOFT : NAVY} fill={CARD} anchor="middle" at={s.at} sw={4} /></g>;
			})}
			<GTag x={cmap(710, 1020)[0]} y={cmap(710, 1020)[1]} text="M + e^{−} → M^{+} + 2e^{−}" size={30} anchor="middle" at={K2.positive} />
			<Sx x={cmap(1340, 660)[0]} y={cmap(1340, 660)[1]} text="light" size={32} color="#2f8a82" anchor="end" hand weight={800} at={K2.light} />
			<Sx x={cmap(1680, 560)[0]} y={cmap(1680, 560)[1]} text="heavy" size={32} color={FRAG_INK} hand weight={800} at={K2.light + 12} />
			<Chip x={1824} y={930} text="neutral: not steered, not detected" size={32} color={NEUT} fill="#f1eee7" ink={GREYT} anchor="end" at={K2.detected - 10} />
			<Sx x={96} y={196} text="only ions are steered and counted" size={36} color={NAVY} hand at={K2.only} />
		</Svg>
	);
};

// ---------- 3. reading the chart ----------
const K3 = K('reading-chart', {chart: 'bar chart', mz: 'm over z,', mass: "ion's mass", one: 'one plus', rel: 'relative abundance', many: 'how many', common: 'most common'});
export const SceneChart: React.FC = () => {
	const f = useCurrentFrame();
	const demo = vis(f, K3.rel + 10, K3.common + 40, 14);
	const dh = 100 * prog(f, K3.rel + 10, 24);
	return (
		<Svg>
			<Title text="Reading a mass spectrum" />
			<Task text="The detector's counts become a bar chart" at={K3.chart} />
			<Pic p={PL.cut} cx={1580} cy={190} w={420} o={0.9} />
			<SpecAxes g={G1} at={ON} xLabelAt={K3.mz} yLabelAt={K3.rel} />
			{demo > 0.01 ? <g opacity={demo}><rect x={sxm(G1, 60) - 5} y={syh(G1, dh)} width={10} height={G1.y + G1.h - syh(G1, dh)} fill={FRAG} /></g> : null}
			<Chip x={RX} y={420} text="m/z = mass ÷ charge" size={36} color={NAVY} ink={INK} at={K3.mz + 20} />
			<Chip x={RX} y={510} text="charge 1+ → m/z = mass" size={36} color={NAVY} ink={INK} at={K3.mass} />
			<T x={RX} y={640} w={RW} text="relative abundance: how many ions of that mass, compared with the most common one" size={36} color={INK} at={K3.many} />
			<GTag x={RX} y={830} text="the most common ion is set to 100%" size={28} at={K3.common} />
		</Svg>
	);
};

// ---------- 4. the molecular ion ----------
const K4 = K('molecular-ion', {here: "Here's the", start: 'Start at', cluster: 'ion cluster', s72: ['seventy-two', 1], whole: 'the whole', mass: ['molecular mass', 1], sixteen: 'sixteen', fits: 'four carbons', cf: 'C four H', bump: 'tiny bump', s73: 'seventy-three', c13: 'carbon thirteen'});
const BUT = SPEC.butanone;
export const SceneMolIon: React.FC = () => (
	<Svg>
		<Title text={TITLE} />
		<Task text="Start at the right: the molecular ion" at={2} />
		<SpecAxes g={G1} at={ON} />
		<Spot g={G1} a={72} b={73} at={K4.start} out={K4.s72} />
		<StickSpec g={G1} bars={BUT} at={2} stagger={4} paint={[{mz: 72, color: GOLD, at: K4.s72}]} />
		<PeakLab g={G1} mz={72} h={25} text="M^{+} cluster" at={K4.cluster} out={K4.s72} size={34} color={AMBER_INK} dy={-24} />
		<PeakLab g={G1} mz={72} h={25} text="72: M^{+}" at={K4.s72} size={38} color={GOLD_INK} dy={-64} weight={800} />
		<PeakLab g={G1} mz={72} h={25} text="(molecular ion)" at={K4.s72 + 8} size={30} color={GOLD_INK} dy={-24} />
		<PeakLab g={G1} mz={73} h={1} text="73: M+1, same structure," at={K4.s73} size={28} color={GREYT} dx={64} dy={-74} anchor="start" leader />
		<PeakLab g={G1} mz={73} h={1} text="one ¹³C atom" at={K4.c13} size={28} color={GREYT} dx={64} dy={-40} anchor="start" />
		<Pic p={PL.cut} cx={1560} cy={196} w={300} o={0.9} />
		<AnsBox x={RX} y={300} w={RW} h={470} label="what the molecular ion gives" size={42} sizeOld={32} hint="M^{+}: the whole molecule minus one electron. Its m/z is the molecular mass." lines={[
			{t: 'M^{+} = 72 → molecular mass 72', at: K4.mass},
			{t: '72 − 16 (one O) = 56', at: K4.sixteen},
			{t: '56 = 4 C (48) + 8 H (8)', at: K4.fits},
			{t: 'C_4H_8O', at: K4.cf},
		]} />
		<GTag x={RX} y={800} text="without the one O: 72 could also be C_5H_12" size={28} at={K4.cf + 30} />
		<GTag x={RX} y={870} text="the electron's mass is tiny" size={28} at={K4.whole + 20} />
	</Svg>
);

// ---------- 5. same mass, different molecules ----------
const K5 = K('same-mass', {but: 'But a', isomers: 'isomers lesson', fits: 'fits butanone', every: 'every one', cant: "can't tell", peaks: 'smaller peaks'});
export const SceneSameMass: React.FC = () => {
	const f = useCurrentFrame();
	const br = prog(f, K5.cant, 14);
	return (
		<Svg>
			<Title text={TITLE} />
			<CandStrip c={C4.map((c, i) => ({...c, at: K5.fits + i * 14}))} y={150} h={190} />
			{br > 0.01 ? <g opacity={br}>
				<path d={`M106,358 L106,376 L1814,376 L1814,358`} fill="none" stroke={NAVY} strokeWidth={4} />
				<Chip x={1500} y={388} text="all 72: one formula, C_4H_8O" size={32} color={NAVY} ink={NAVY} anchor="middle" />
			</g> : null}
			<SpecAxes g={G2} at={ON} />
			<StickSpec g={G2} bars={BUT} paint={[{mz: 72, color: GOLD, at: ON}]} pulses={[{mzs: [15, 27, 29, 43, 57], at: K5.peaks}]} />
			<GTag x={RX} y={500} text="c02: isomers share a formula" size={30} at={K5.isomers} />
			<T x={RX} y={640} w={RW} text="M^{+} can't tell isomers apart" size={44} color={INK} at={K5.cant} />
			<T x={RX} y={790} w={RW} text="the smaller peaks can" size={44} color={FRAG_INK} at={K5.peaks} />
			{void AMBER_INK}
		</Svg>
	);
};

// ---------- 6. a bond breaks ----------
const K6 = K('bond-breaks', {inside: 'Inside the', breaks: 'bond breaks', keeps: 'keeps the', neutral: 'neutral piece', detected: 'is detected', never: 'never seen', gap: 'the gap', lost: 'was lost'});
export const SceneBreaks: React.FC = () => {
	const f = useCurrentFrame();
	const bar = prog(f, K6.detected - 10, 14);
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="A bond breaks: the gap is the piece lost" at={K6.inside} />
			<SpecAxes g={G1} at={ON} />
			<StickSpec g={G1} bars={BUT} paint={[{mz: 72, color: GOLD, at: ON}]} />
			<PeakLab g={G1} mz={72} h={25} text="M^{+}" size={34} color={GOLD_INK} dy={-20} weight={800} />
			<rect x={RX - 10} y={240} width={RW + 10} height={600} rx={20} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
			<Sx x={RX + 14} y={284} text="inside the instrument" size={28} color={GREYT} weight={700} at={ON} />
			<Sx x={RX + 40} y={420} text="M^{+}" size={46} color={GOLD_INK} weight={800} at={K6.inside} out={K6.breaks + 20} />
			<MolSplit k="butanone" x={1560} y={470} s={1.15} at={K6.inside} snap={K6.breaks} keep={[0, 1, 4]} cut={[1, 2]} to={[-60, 190]} away={[40, -120]} />
			<Sx x={1700} y={300} text="neutral: not detected" size={30} color={GREYT} anchor="middle" hand at={K6.neutral} />
			{bar > 0.01 ? <g opacity={bar}>
				<line x1={RX + 30} x2={RX + RW - 30} y1={790} y2={790} stroke={INK} strokeWidth={3} />
				<rect x={1450} y={700} width={14} height={90} fill={FRAG} />
				<Sx x={1600} y={780} text="its own peak" size={28} color={FRAG_INK} hand at={ON} />
			</g> : null}
			<Chip x={RX} y={860} text="fragment ion (+): detected" size={34} color={FRAG_INK} ink={FRAG_INK} at={K6.detected} />
			<GTag x={RX} y={940} text="the neutral piece is never seen" size={30} at={K6.never} />
			<GapBracket g={G1} a={43} b={72} y={560} text="gap = mass lost" at={K6.lost - 20} size={34} />
			{void GREYT}{void INK_SOFT}
		</Svg>
	);
};
export {G1 as SPEC_G1};
