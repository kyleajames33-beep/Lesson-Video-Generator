// M7 G03 scenes 3a to 3d: question 2 (a two-dose vaccine; antibody level on a log axis with a dashed protective
// line). The attempt keeps the whole card, graph included, on screen through the countdown. The walkthrough shrinks
// the card to a strip, enlarges the coded graph, underlines "log scale" in the printed y label, reads the lags and
// peaks with dotted guides and divides; then explains the difference with b09's cell field and clone (primary from
// few cells, secondary from memory cells), and crosses the gridline-counting mistake.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {Badge, HscTag, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {CloneTree} from '../bio-m7-b07/parts';
import {S, hold} from './common';
import {PLATES} from './assets';
import {
	AMBER, AMBER_INK, AnsFill, CTag, CardBox, DayBr, DoseArrow, DrawPath, GREYT, GREY_INK, GTag, Gloss, INK_SOFT, LCurve, LogAxes, MiniField, MistakeChip, Pl, ProtLine, ReadGuide, Ring,
	Sx, TEAL, clamp01, lgLerp, lx, ly, prog, pulse, smooth, vis,
} from './parts';
import type {LG, Pts} from './parts';

export const PTS2: Pts = [[0, 1], [6, 1], [14, 40], [28, 10], [30, 10], [35, 2000], [56, 1000]];
const GA: LG = {x0: 1200, y0: 240, w: 560, h: 360, xMax: 56, dec: 4};
export const GW: LG = {x0: 250, y0: 360, w: 960, h: 500, xMax: 56, dec: 4};
const TICKS = [0, 7, 14, 21, 28, 35, 42, 49, 56];

// ---------- the Q2 card ----------
type TQ = {a: number; b: number; c: number; da: number; db: number};
const STEM2 = (t: TQ): QBlock[] => [
	{text: 'A volunteer in a vaccine trial was given two doses of the same vaccine, on day 0 and on day 28.', at: t.a},
	{text: "The graph shows the concentration of antibodies against the vaccine antigen in the volunteer's blood.", at: t.b},
	{text: 'The dashed line shows the antibody level that protects against the disease.', at: t.c},
];
const DEM2 = (t: TQ, para = true): QBlock[] => [
	{text: '(a) Compare the antibody responses to dose 1 and dose 2. Use data from the graph. (3 marks)', at: t.da, para, weight: 700},
	{text: '(b) Explain the difference between the two responses. (3 marks)', at: t.db, para, weight: 700},
];
const ALL: TQ = {a: -100, b: -100, c: -100, da: -100, db: -100};
qCheck([...STEM2(ALL), ...DEM2(ALL)], [{phrase: 'two doses of the same vaccine', at: 0}, {phrase: 'dashed line', at: 0}]);
/** The graph with curve, protective line and dose arrows. */
export const Q2Graph: React.FC<{g: LG; at: number; size?: number; pulseAt?: number; logMark?: number; protFlash?: number; dose2Lit?: number; c1?: {color?: string; glow?: number}; c2?: {color?: string; glow?: number}}> = ({g, at, size = 22, pulseAt, logMark, protFlash = 0, dose2Lit = 0, c1 = {}, c2 = {}}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<LogAxes g={g} at={at} size={size} xTicks={TICKS} pulseAt={pulseAt} logMark={logMark} />
			<ProtLine g={g} L={100} at={at} flash={protFlash} size={size} />
			<LCurve g={g} pts={PTS2} t0={0} t1={28.5} color={c1.color ?? INK_SOFT} glow={c1.glow ?? 0} width={5} />
			<LCurve g={g} pts={PTS2} t0={28.5} t1={56} color={c2.color ?? INK_SOFT} glow={c2.glow ?? 0} width={5} />
			<DoseArrow g={g} t={0} label="dose 1" at={at} size={size} />
			<DoseArrow g={g} t={28} label="dose 2" at={at} size={size} lit={dose2Lit} />
		</g>
	);
};
/** The question strip (walkthrough). */
const Strip2: React.FC<{marks?: QMark[]; o?: number}> = ({marks = [], o = 1}) => (
	<g opacity={o}>
		<CardBox x={100} y={150} w={1720} h={156} at={-100} />
		<QText q={qCheck([...STEM2(ALL), ...DEM2(ALL, false)], marks)} x={130} y={192} w={2560} size={30} card={false} s={0.64} />
	</g>
);
/** The attempt card body (stem and demands) and its answer boxes. */
const Card2: React.FC<{t: TQ; o?: number; boxesAt?: number}> = ({t, o = 1, boxesAt = -100}) => (
	<g opacity={o}>
		<QText q={qCheck(STEM2(t), [])} x={130} y={215} w={900} size={26} card={false} />
		<QText q={qCheck(DEM2(t), [])} x={130} y={440} w={900} size={26} card={false} />
		<AnsBox x={130} y={582} w={900} h={200} at={boxesAt} />
		<AnsBox x={130} y={800} w={900} h={200} at={boxesAt + 8} />
	</g>
);

// ---------- 3a. Question 2 ----------
const KQ = cues(S('q2-question'), {q: 'Question two', vol: 'A volunteer in', graph: 'The graph shows', dashed: 'with a dashed', compare: 'Compare the responses', explain: 'Then explain the', pause: 'Pause here to answer'});
export const SceneQ2Question: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('q2-question');
	const t: TQ = {a: KQ.vol, b: KQ.graph, c: KQ.dashed, da: KQ.compare, db: KQ.explain};
	return (
		<>
			<Heading text="Question 2" at={KQ.q} size={50} />
			<Overlay>
				<HscTag at={KQ.q} />
				<CardBox x={90} y={160} w={1740} h={860} at={KQ.q + 4} />
				<Card2 t={t} boxesAt={KQ.explain + 24} />
				<Q2Graph g={GA} at={KQ.graph + 4} />
				<GTag x={1480} y={176} text="illustrative values" at={KQ.graph + 14} size={20} anchor="middle" />
				<Pl p={PLATES.vial} cx={1290} cy={840} w={210} o={prog(f, KQ.vol, 14)} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KQ.pause} />
			</Overlay>
		</>
	);
};

// ---------- 3b. Read the graph ----------
const KR = cues(S('q2-read'), {check: 'check the scale', each: 'Each gridline', lag: 'find the lag', flat: 'the flat start', six: 'stays flat for', forty: 'forty units', below: 'below the protective', two: 'two days', thousand: 'two thousand', fifty: 'fifty times higher', stays: 'stays above the'});
const ANS_A = 'dose 1: lag about 6 days, peak about 40 units (day 14), below protective level; dose 2: lag about 2 days, peak about 2000 units (day 35), about 50 times higher, above protective level to day 56';
const RC = 1330;
export const SceneQ2Read: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 0, 26));
	const g = lgLerp(GA, GW, m);
	const bx = lx(GW, 45);
	const fl = vis(f, KR.below, KR.below + 40, 8);
	return (
		<>
			<Heading text="Read the scale, then the numbers" at={6} size={46} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Antibody graph" at={10} />
				<g opacity={1 - prog(f, 0, 14)}><CardBox x={90} y={160} w={1740} h={860} at={-100} /><Card2 t={ALL} /></g>
				<g opacity={prog(f, 8, 14)}><Strip2 marks={[{phrase: 'dashed line', at: KR.below + 4, color: AMBER}]} /></g>
				<Q2Graph g={g} at={-100} pulseAt={KR.check + 4} logMark={KR.check + 10} protFlash={fl} c2={{color: prog(f, KR.stays, 10) > 0.5 ? AMBER : INK_SOFT, glow: vis(f, KR.stays, KR.stays + 60, 12)}} />
				<Gloss x={RC} y={420} text="each step: ten times more" at={KR.each} size={28} color={vis(f, 0, KR.flat, 10) > 0.5 ? AMBER_INK : GREY_INK} out={KR.six} />
				{f >= KR.flat ? <LCurve g={GW} pts={PTS2} t0={0} t1={6} color={GREYT} width={10} glow={vis(f, KR.flat, KR.six + 30, 10)} o={vis(f, KR.flat, KR.forty, 10)} /> : null}
				<CTag x={RC} y={470} text="lag: flat start before the rise" at={KR.flat + 6} color={INK_SOFT} size={26} dim={prog(f, KR.six, 10)} out={KR.forty} />
				<DayBr g={GW} t0={0} t1={6} y={ly(GW, 1) - 34} label="lag about 6 days" labelDx={44} at={KR.six + 6} dim={prog(f, KR.two, 10)} />
				<ReadGuide g={GW} t={14} L={40} at={KR.forty} label="about 40 (day 14)" dy={-18} dim={prog(f, KR.two, 10)} />
				<DayBr g={GW} t0={28} t1={30.3} y={ly(GW, 10) - 34} label="lag about 2 days" at={KR.two + 4} dim={prog(f, KR.thousand, 10)} />
				<ReadGuide g={GW} t={35} L={2000} at={KR.thousand} label="about 2000 (day 35)" dy={-18} />
				{f >= KR.fifty ? <DrawPath d={`M${bx - 12},${ly(GW, 40)} L${bx},${ly(GW, 40)} L${bx},${ly(GW, 2000)} L${bx - 12},${ly(GW, 2000)}`} at={KR.fifty} dur={14} color={AMBER_INK} width={4} /> : null}
				<Sx x={RC} y={590} text="2000 ÷ 40 = 50" size={44} color={AMBER_INK} hand weight={700} at={KR.fifty + 4} />
				<CTag x={RC} y={620} text="about 50 times higher" at={KR.fifty + 14} color={AMBER_INK} size={28} dim={prog(f, KR.stays, 10)} />
				<CTag x={RC} y={700} text="dose 2: above the protective line to day 56" at={KR.stays + 10} color={AMBER_INK} size={24} maxW={520} />
				<AnsFill x={RC} y={812} w={560} h={232} label="(a)" text={ANS_A} at={KR.stays + 30} boxAt={30} size={21} />
				{void KR.lag}{void TEAL}
			</Overlay>
		</>
	);
};

// ---------- the walkthrough base (3c, 3d) ----------
const Base2: React.FC<{marks?: QMark[]; protFlash?: number; dose2Lit?: number; c1?: {color?: string; glow?: number}; c2?: {color?: string; glow?: number}; guidePulse?: number; brPulse?: number}> = ({marks, protFlash, dose2Lit, c1, c2, guidePulse, brPulse}) => {
	const bx = lx(GW, 45);
	return (
		<>
			<Strip2 marks={marks} />
			<Q2Graph g={GW} at={-100} protFlash={protFlash} dose2Lit={dose2Lit} c1={c1} c2={c2} />
			<DayBr g={GW} t0={0} t1={6} y={ly(GW, 1) - 34} label="lag about 6 days" labelDx={44} at={-100} dim={1} pulseAt={brPulse} />
			<DayBr g={GW} t0={28} t1={30.3} y={ly(GW, 10) - 34} label="lag about 2 days" at={-100} dim={1} pulseAt={brPulse} />
			<ReadGuide g={GW} t={14} L={40} at={-100} label="about 40 (day 14)" dy={-18} dim={guidePulse === undefined ? 1 : 0} pulseAt={guidePulse} />
			<ReadGuide g={GW} t={35} L={2000} at={-100} label="about 2000 (day 35)" dy={-18} dim={guidePulse === undefined ? 1 : 0} pulseAt={guidePulse} />
			<path d={`M${bx - 12},${ly(GW, 40)} L${bx},${ly(GW, 40)} L${bx},${ly(GW, 2000)} L${bx - 12},${ly(GW, 2000)}`} fill="none" stroke={GREYT} strokeWidth={4} />
		</>
	);
};

// ---------- 3c. Explain: primary, then secondary ----------
const KE = cues(S('q2-explain'), {primary: 'primary response', few: 'Only a few', memory: 'memory cells', same: 'same antigen', secondary: 'secondary response', waiting: 'already waiting', fewer: 'fewer divisions', sooner: 'sooner and much', never: 'never reached the', more: 'more than one'});
const ANS_B2 = 'dose 1: primary response; few fitting B cells selected and cloned, slow, low; memory cells formed. Dose 2: same antigen meets many memory cells, which quickly become plasma cells with fewer divisions, so antibody rises sooner and higher (secondary response)';
const MEM12 = [0, 2, 5, 7, 9, 10, 12, 14, 17, 19, 21, 23];
export const SceneQ2Explain: React.FC = () => {
	const f = useCurrentFrame();
	const c1On = prog(f, KE.primary, 10);
	const c2On = prog(f, KE.secondary, 10);
	const fieldO = vis(f, KE.few - 10, KE.never, 14);
	return (
		<>
			<Heading text="Explain: primary, then secondary" at={4} size={46} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Antibody graph" at={-100} />
				<Base2 marks={[{phrase: 'two doses of the same vaccine', at: KE.same + 4, color: AMBER}, {phrase: 'dashed line', at: KE.never + 4, color: AMBER}]}
					protFlash={vis(f, KE.never, KE.never + 50, 8)} dose2Lit={vis(f, KE.more, KE.more + 70, 10)} brPulse={KE.sooner}
					c1={{color: c1On > 0.5 ? TEAL : INK_SOFT, glow: vis(f, KE.primary, KE.secondary, 10)}} c2={{color: c2On > 0.5 ? AMBER : INK_SOFT, glow: vis(f, KE.secondary, KE.never, 10)}} />
				<CTag x={lx(GW, 15)} y={ly(GW, 40) - 110} text="primary" at={KE.primary + 6} color={TEAL} size={28} dim={prog(f, KE.secondary, 10)} />
				<CTag x={lx(GW, 44)} y={ly(GW, 1000) + 24} text="secondary" at={KE.secondary + 6} color={AMBER_INK} size={28} />
				<MiniField x={RC + 30} y={420} cols={8} rows={3} dx={60} dy={44} cw={32} o={fieldO} lit={prog(f, KE.memory, 10) > 0.5 ? MEM12 : [5, 17]} litO={prog(f, KE.few + 10, 12)} mem={MEM12} memO={prog(f, KE.memory + 6, 14)} pulseAmt={pulse(f, KE.waiting + 4, 30)} />
				<CTag x={RC} y={530} text="memory cells from dose 1" at={KE.memory + 12} color={TEAL} size={24} dim={prog(f, KE.secondary, 10)} out={KE.never} />
				<CloneTree x={RC + 40} y={650} at={KE.fewer + 2} dx={70} h={110} step={12} cellW={26} o={vis(f, KE.fewer, KE.never, 12)} cluster={{cx: RC + 40 + 4 * 70 + 30, cy: 650, rx: 34, ry: 44}} />
				<CTag x={RC} y={420} text="dose 1 alone: below protective level" at={KE.never + 10} color={AMBER_INK} size={24} maxW={520} />
				<Sx x={RC} y={770} text="Second exposure: faster, bigger, longer." size={28} color={AMBER_INK} hand weight={700} at={KE.sooner + 30} />
				<AnsFill x={RC} y={828} w={560} h={232} label="(b)" text={ANS_B2} at={KE.sooner + 20} boxAt={KE.primary} size={20} />
				{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 3d. The classic mistake ----------
const KX = cues(S('q2-mistake'), {classic: 'classic mistake', counting: 'counting gridlines', log: 'On a log', less: 'less than two', twice: 'about twice as', read: 'Read the values', divide: 'then divide'});
export const SceneQ2Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const rx = lx(GW, 40);
	const ys = [ly(GW, 40), ly(GW, 100), ly(GW, 1000), ly(GW, 2000)];
	const ghost = vis(f, KX.counting, KX.read, 12);
	return (
		<>
			<Heading text="Read the values, then divide" at={4} size={46} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Antibody graph" at={-100} />
				<Base2 guidePulse={KX.read + 2} />
				{ghost > 0.01 ? (
					<g opacity={ghost}>
						<line x1={rx} x2={rx} y1={ys[0]} y2={ys[3]} stroke={GREY_INK} strokeWidth={3} strokeDasharray="6 6" />
						{ys.map((y, i) => <line key={i} x1={rx - 14} x2={rx + 14} y1={y} y2={y} stroke={GREY_INK} strokeWidth={3} />)}
						{[1, 2].map(i => <Sx key={i} x={rx + 22} y={ys[i] + 8} text={`${i}`} size={26} color={GREY_INK} weight={800} at={KX.less + i * 8} />)}
						<Sx x={rx + 22} y={(ys[0] + ys[1]) / 2 + 8} text="less than 2 gridlines apart" size={22} color={GREY_INK} hand weight={700} at={KX.less + 24} />
					</g>
				) : null}
				<MistakeChip x={RC} y={430} text="the second peak is about twice as high" at={2} cross={KX.twice + 30} size={24} />
				<Sx x={RC} y={590} text="2000 ÷ 40 = 50" size={44} color={AMBER_INK} hand weight={700} at={-100} />
				<Ring cx={RC + 150} cy={576} rx={180} ry={40} at={KX.read + 8} color={AMBER} />
				<MistakeChip x={RC} y={700} text="protected after dose 1" at={KX.divide + 24} cross={KX.divide + 38} size={24} />
				<GTag x={RC} y={776} text="peak below the dashed line" at={KX.divide + 44} size={20} />
				{void KX.classic}{void KX.log}{void AMBER}{void INK_SOFT}
			</Overlay>
		</>
	);
};
