// M7 G01 (Biology practice) scenes 3a to 3d: question 2, malaria in Province K (the card with its table through the
// 10 s countdown); two measures with two boxed denominators, the givens underlined in the table, each result line on
// its cue and the answer table filling cell by cell; b13's tank (nets thin the tap, the level falls; same-day treatment
// widens the drain; a loop back to the tap) with answer (c) line by line; the crossed whole-province chip.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {Badge, HscTag, QText, qCheck} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {S, hold} from './common';
import {
	AMBER, AMBER_INK, AnsLines, CARD, CTag, CardBox, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, PLATES, Pl, ProvTable, QStrip, Sx, TEAL, Tank, prog, pulse, smooth,
	tw, vis,
} from './parts';
import type {QBlock, QMark} from './parts';

type T2 = {s: number; a: number; b: number; c: number};
const Q2B = (t: T2): QBlock[] => [
	{text: 'Malaria in Province K, South East Asia. From 2019, every household received insecticide-treated bed nets, and village health workers began testing people with fever and treating confirmed malaria on the same day.', at: t.s},
];
const Q2D = (t: T2): QBlock[] => [
	{text: '(a) Calculate the incidence of malaria per 1000 people per year in 2018 and in 2023. (2 marks)', at: t.a, weight: 700, para: true},
	{text: '(b) Calculate the prevalence of infection in each survey, as a percentage. (2 marks)', at: t.b, weight: 700, para: true},
	{text: '(c) Explain how each of the two measures could have caused these changes. (3 marks)', at: t.c, weight: 700, para: true},
];
const ALL2: T2 = {s: -100, a: -100, b: -100, c: -100};
const Q2ALL = [...Q2B(ALL2), ...Q2D(ALL2)];
qCheck(Q2ALL, ['insecticide-treated bed nets', 'testing people with fever and treating confirmed malaria on the same day'].map(phrase => ({phrase, at: 0})));

// ---------- 3a. Question 2 ----------
const KQ = cues(S('q2-question'), {q: 'Question two', province: 'A province in', table: 'The table gives', calc: 'Calculate the incidence', explain: 'Then explain how', pause: 'Pause here to answer'});
export const SceneQ2Question: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('q2-question');
	const t: T2 = {s: KQ.province, a: KQ.calc, b: KQ.calc + 40, c: KQ.explain};
	return (
		<>
			<Heading text="Question 2" at={KQ.q} size={50} />
			<Overlay>
				<HscTag at={KQ.q} />
				<CardBox x={100} y={170} w={1720} h={850} at={KQ.q + 4} />
				<Pl p={PLATES.anoph} cx={220} cy={240} w={150} o={prog(f, KQ.province, 14)} />
				<Pl p={PLATES.net} cx={370} cy={238} w={70} o={prog(f, KQ.province + 10, 14)} />
				<QText q={qCheck(Q2B(t), [])} x={140} y={350} w={1640} size={28} card={false} />
				<ProvTable x={140} y={450} s={0.95} at={KQ.table} />
				<GTag x={1400} y={460} text="illustrative data" at={KQ.table + 10} size={20} />
				<QText q={qCheck(Q2D(t), [])} x={140} y={710} w={1440} size={27} card={false} />
				<AnsBox x={140} y={850} w={1340} h={160} at={KQ.explain + 40} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KQ.pause} />
			</Overlay>
		</>
	);
};

/** A formula line with one word boxed (the denominator). */
const BoxedFormula: React.FC<{x: number; y: number; pre: string; boxed: string; post: string; at: number; label: string; pulseAt?: number; size?: number}> = ({x, y, pre, boxed, post, at, label, pulseAt, size = 30}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const w1 = tw(pre, size), w2 = tw(boxed, size);
	const pu = pulseAt !== undefined ? pulse(f, pulseAt, 30) : 0;
	return (
		<g opacity={o}>
			<Sx x={x} y={y} text={pre} size={size} color={INK} weight={700} at={-100} />
			<rect x={x + w1 - 6} y={y - size - 4} width={w2 + 12} height={size + 16} rx={8} fill={pu > 0.01 ? '#fff3d9' : 'none'} stroke={AMBER} strokeWidth={3 + 3 * pu} />
			<Sx x={x + w1} y={y} text={boxed} size={size} color={INK} weight={800} at={-100} />
			<Sx x={x + w1 + w2 + 12} y={y} text={post} size={size} color={INK} weight={700} at={-100} />
			<Sx x={x + w1 + w2 / 2} y={y + 40} text={label} size={20} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} />
		</g>
	);
};

// ---------- 3b. Two measures, two denominators ----------
const KC = cues(S('q2-calc'), {inc: 'Incidence first', whole: 'whole population', twelve: 'is twelve per', two: 'is two', prev: 'Prevalence is the', tested: 'people tested', half: 'two and a half', zp: 'zero point three'});
export const SceneQ2Calc: React.FC = () => {
	const f = useCurrentFrame();
	const res = (t: string, y: number, at: number, end: number, color: string) => <Sx x={170} y={y} text={t} size={32} color={vis(f, at, end, 10) > 0.5 ? color : GREY_INK} weight={800} at={at} />;
	const cell = (t: string, x: number, y: number, at: number) => <Sx x={x} y={y} text={t} size={30} color={INK} hand weight={700} at={at} />;
	return (
		<>
			<Heading text="Two measures, two denominators" at={4} size={46} />
			<Overlay>
				<Badge text="Incidence and prevalence" at={4} />
				<QStrip blocks={Q2ALL} marks={[]} h={130} />
				<ProvTable x={130} y={310} s={0.86} mark={{'0,1': KC.whole, '1,2': KC.twelve - 30, '1,1': KC.twelve - 20, '2,2': KC.two - 30, '2,1': KC.two - 20, '0,3': KC.tested, '1,4': KC.half - 30, '1,3': KC.half - 20, '2,4': KC.zp - 20}} />
				<BoxedFormula x={170} y={600} pre="new cases ÷ " boxed="population" post=" × 1000" at={KC.whole} label="everyone at risk" />
				{res('4800 ÷ 400 000 × 1000 = 12 per 1000', 690, KC.twelve, KC.two, AMBER_INK)}
				{res('840 ÷ 420 000 × 1000 = 2 per 1000', 740, KC.two, KC.tested, TEAL)}
				<BoxedFormula x={170} y={840} pre="carrying parasite ÷ " boxed="people tested" post=" × 100" at={KC.tested} label="the sample" />
				{res('50 ÷ 2000 × 100 = 2.5%', 930, KC.half, KC.zp, AMBER_INK)}
				{res('6 ÷ 2000 × 100 = 0.3%', 980, KC.zp, 1e9, TEAL)}
				<g opacity={prog(f, KC.inc, 12)}>
					<rect x={1240} y={560} width={580} height={250} rx={16} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
					<Sx x={1260} y={594} text="(a), (b)" size={22} color={INK_SOFT} weight={700} at={-100} />
					<Sx x={1450} y={630} text="incidence" size={22} color={GREY_INK} weight={700} at={-100} />
					<Sx x={1640} y={630} text="prevalence" size={22} color={GREY_INK} weight={700} at={-100} />
					<Sx x={1260} y={700} text="2018" size={26} color={INK} weight={800} at={-100} />
					<Sx x={1260} y={770} text="2023" size={26} color={INK} weight={800} at={-100} />
					<line x1={1250} x2={1810} y1={646} y2={646} stroke={EDGE} strokeWidth={2} />
				</g>
				{cell('12 per 1000', 1440, 700, KC.twelve + 10)}
				{cell('2 per 1000', 1440, 770, KC.two + 10)}
				{cell('2.5%', 1650, 700, KC.half + 10)}
				{cell('0.3%', 1650, 770, KC.zp + 10)}
				{void KC.prev}{void DrawPath}{void GREYT}{void smooth}
			</Overlay>
		</>
	);
};

// ---------- 3c. The tap and the tank ----------
const KE = cues(S('q2-explain'), {link: 'link each measure', nets: 'Bed nets mean', tap: 'turns down the tap', too: 'the tank falls too', test: 'testing and treatment', drain: 'drains the tank', more: 'new cases fall even'});
const TK = {x: 330, y: 470, w: 300, h: 360};
export const SceneQ2Explain: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'insecticide-treated bed nets', at: KE.nets, color: AMBER},
		{phrase: 'testing people with fever and treating confirmed malaria on the same day', at: KE.test, color: AMBER},
	];
	const lvl = 0.62 - 0.12 * smooth(prog(f, KE.too, 30)) - 0.25 * smooth(prog(f, KE.drain, 40));
	const lines = [
		{t: 'Bed nets reduce bites by night-biting Anopheles, so fewer new infections: incidence falls.', at: KE.tap + 20},
		{t: 'Fewer new infections also means fewer people infected at any one time: prevalence falls.', at: KE.too + 24},
		{t: 'Same-day test and treat shortens each infection, so prevalence falls further.', at: KE.drain + 24},
		{t: 'Fewer infected people means fewer parasites passed to mosquitoes, which lowers incidence further.', at: KE.more + 24},
	];
	const tags: [string, number, number][] = [['nets: fewer bites, fewer new infections', KE.tap, KE.too], ['less in, so less in the tank', KE.too, KE.test], ['faster treatment: shorter infections', KE.drain, KE.more], ['fewer parasites for mosquitoes', KE.more, 1e9]];
	return (
		<>
			<Heading text="The tap and the tank" at={4} size={48} />
			<Overlay>
				<Badge text="Incidence and prevalence" at={-100} />
				<QStrip blocks={Q2ALL} marks={marks} h={130} />
				<GTag x={130} y={300} text="b13: incidence is the tap, prevalence is the tank" at={6} size={20} />
				<Tank {...TK} at={4} level={lvl} inO={1 - 0.6 * prog(f, KE.tap, 20)} outO={1} outW={1 + prog(f, KE.drain, 20)} />
				<Pl p={PLATES.net} cx={180} cy={470} w={70} o={prog(f, KE.nets, 14)} />
				<Pl p={PLATES.blister} cx={760} cy={900} w={130} o={prog(f, KE.test, 14)} />
				{f >= KE.more ? <DrawPath d={`M${TK.x + TK.w},${TK.y + 120} C${TK.x + TK.w + 160},${TK.y - 40} ${TK.x + 120},${TK.y - 180} ${TK.x - 40},${TK.y - 80}`} at={KE.more} dur={22} color={TEAL} width={4} dash="9 7" /> : null}
				<Pl p={PLATES.anoph} cx={TK.x + 260} cy={TK.y - 90} w={110} o={prog(f, KE.more + 10, 12)} />
				{tags.map(([t, a, b], i) => <CTag key={i} x={720} y={420 + i * 100} text={t} at={a + 6} color={i % 2 ? TEAL : AMBER_INK} size={26} maxW={380} dim={prog(f, b, 10)} />)}
				<Sx x={130} y={960} text="incidence: 12 → 2 per 1000" size={28} color={pulse(f, KE.tap + 10, 40) > 0.1 ? AMBER_INK : GREY_INK} weight={800} at={4} />
				<Sx x={130} y={1006} text="prevalence: 2.5% → 0.3%" size={28} color={pulse(f, KE.drain + 10, 40) > 0.1 ? AMBER_INK : GREY_INK} weight={800} at={4} />
				<AnsLines x={1140} y={300} w={680} h={720} label="(c)" at={6} lines={lines} size={27} />
				{void KE.link}
			</Overlay>
		</>
	);
};

// ---------- 3d. The classic mistake ----------
const KM = cues(S('q2-mistake'), {classic: 'The classic mistake', only: 'Only two thousand', two: 'two hundred times'});
export const SceneQ2Mistake: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="The survey is the sample" at={4} size={48} />
			<Overlay>
				<Badge text="Incidence and prevalence" at={-100} />
				<QStrip blocks={Q2ALL} marks={[]} h={130} />
				<MistakeChip x={130} y={330} text="50 ÷ 400 000 × 100 = 0.0125%" at={2} cross={KM.classic + 30} size={36} />
				<g opacity={prog(f, KM.only, 12)}>
					<rect x={130} y={460} width={900} height={480} rx={20} fill="#f3f2ee" stroke={GREYT} strokeWidth={3} />
					<Sx x={150} y={500} text="province: 400 000 people" size={26} color={GREY_INK} weight={700} at={-100} />
					<rect x={160} y={530} width={62} height={56} fill="#fffdf8" stroke={AMBER} strokeWidth={2} />
					{Array.from({length: 330}, (_, i) => <circle key={i} cx={164 + (i % 30) * 2} cy={534 + Math.floor(i / 30) * 5} r={0.9} fill={AMBER_INK} />)}
					<Sx x={240} y={570} text="2000 tested" size={24} color={AMBER_INK} hand weight={700} at={-100} />
				</g>
				<BoxedFormula x={1100} y={560} pre="carrying parasite ÷ " boxed="people tested" post=" × 100" at={KM.only - 10} label="the sample" pulseAt={KM.only + 4} size={28} />
				<CTag x={1100} y={680} text="the survey is the sample: 50 ÷ 2000 = 2.5%" at={KM.only + 20} color={TEAL} size={30} maxW={700} />
				<GTag x={1100} y={820} text="2.5% ÷ 0.0125% = 200" at={KM.two} size={28} />
				{void INK}
			</Overlay>
		</>
	);
};
