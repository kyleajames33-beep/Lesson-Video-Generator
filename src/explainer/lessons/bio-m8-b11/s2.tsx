// B8-11 scenes 6 to 10: the 1954 result (why doctors, the Table IV bar chart drawn in outline from the first frame, the
// dose-response arrow, exposure first on the timeline), judging the cohort (the frame strip refills; the cohort arrow
// grows to 2001), from association to cause (six lines of evidence with a picture each), the benefit chain (finding,
// decision, action reaches people, outcome checked, with Australia's tobacco control) and its limits (delay, unequal
// reach, participants' costs, the crossed "beneficial the moment it's published").
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, Arr, BLUE, Bars54, CARD, CASE, CTRL, ChainRow, Chip, DotField, DotRow10, DrawPath, EDGE, Framed, FrameStrip, GREYT, GREY_FILL, GTag, INK, INK_SOFT, MatchedPairs, Mistake, Pic, PicH, RED, RiskDial,
	StudyTimeline, Survival, Svg, Sx, T, TEAL, Title, bar54Top, bar54X, chainX, lerp, pairPts, pbPt, prog, pulse, scribbleEllipse, smooth, tlx2, vis,
} from './parts';
import type {BG, ChainLink} from './parts';
import {LUNG, SMOKE} from '../bio-m8-b07/common';
import {FP, PL} from './assets';
import {K} from './common';

const ON = -1000;

// ---------- 6. the 1954 result ----------
const K6 = K('dose-response', {easy: 'easy to trace', causes: 'causes of death', y1954: '1954', rose: 'rose steadily', lowest: 'lowest in', highest: 'highest in', climbing: 'climbing pattern', dr: 'dose-response', because: 'because smoking', recorded: 'recorded before', first: 'came first'});
const G6: BG = {x: 820, y: 280, w: 880, h: 450};
export const SceneDose: React.FC = () => {
	const f = useCurrentFrame();
	const fill = [K6.rose, K6.rose + 12, K6.rose + 24, K6.rose + 36];
	const tops = [0, 1, 2, 3].map(i => [bar54X(G6, i), bar54Top(G6, i) - 64] as [number, number]);
	return (
		<Svg>
			<Title text="1954: a dose-response" />
			<GTag x={1824} y={150} text="Doll and Hill 1954, Table IV" size={28} anchor="end" />
			<PicH p={PL.env} cx={190} cy={260} h={170} />
			<DotField x={330} y={190} cols={16} rows={9} d={17} r={6} at={ON} />
			<g opacity={0.4 + 0.6 * prog(f, K6.easy, 12)}><Chip x={110} y={372} text="easy to trace" size={36} color={TEAL} ink={INK} /></g>
			<g opacity={0.4 + 0.6 * prog(f, K6.causes, 12)}><Chip x={110} y={446} text="causes of death well recorded" size={36} color={TEAL} ink={INK} /></g>
			<Bars54 g={G6} fill={fill} pulses={[[0, K6.lowest], [3, K6.highest]]} size={28} vsize={34} />
			<g opacity={prog(f, K6.dr, 12)}>
				<DrawPath d={`M${tops[0][0]},${tops[0][1] + 40} Q${(tops[1][0] + tops[2][0]) / 2},${tops[1][1] - 10} ${tops[3][0] - 20},${tops[3][1]}`} at={K6.dr} dur={22} color={BLUE} width={7} />
				<path d={`M${tops[3][0] - 44},${tops[3][1] - 10} L${tops[3][0] - 20},${tops[3][1]} L${tops[3][0] - 40},${tops[3][1] + 18}`} fill="none" stroke={BLUE} strokeWidth={7} strokeLinecap="round" opacity={prog(f, K6.dr + 18, 6)} />
			</g>
			<T x={110} y={590} w={620} text="dose-response: more exposure, more disease" size={46} color={BLUE} at={K6.dr} />
			<Sx x={110} y={740} text="1951: smoking recorded" size={34} color={TEAL} hand at={K6.recorded} />
			<Arr a={[470, 728]} b={[560, 728]} at={K6.recorded + 8} color={TEAL} width={5} />
			<Sx x={576} y={740} text="later: deaths" size={34} color={INK} hand at={K6.recorded + 14} />
			<Framed x={110} y={830} text="exposure came first" at={K6.first} size={42} />
			<g opacity={prog(f, K6.y1954, 12)}>
				<line x1={tlx2(1954)} x2={tlx2(1954)} y1={862} y2={986} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="6 5" />
			</g>
			<Sx x={tlx2(1954) + 14} y={852} text="1954: first report, about 2.5 years in" size={30} color={AMBER_INK} hand at={K6.y1954} />
			<StudyTimeline ccAt={ON} ccDim={ON} cohAt={ON} y54={K6.y1954} cohHi={K6.recorded} />
		</Svg>
	);
};

// ---------- 7. judge the cohort ----------
const K7 = K('judge-cohort', {now: 'Now the', design: 'Design', cohort: 'cohort.', strengths: 'Strengths', recorded: 'smoking was recorded', tens: 'tens of thousands', fifty: 'fifty years', limitations: 'Limitations', typical: 'typical population', men: 'most were men', self: 'self-reported', still: 'still observational', unmeasured: 'unmeasured confounder', judgement: 'Judgement', strongest: 'the strongest'});
export const SceneJudgeCohort: React.FC = () => {
	const f = useCurrentFrame();
	const end = (fr: number) => lerp(1960, 2001, smooth(prog(fr, K7.fifty, 40)));
	const strength = f < K7.tens ? 'exposure recorded before the deaths' : 'exposure recorded before the deaths; large, long (1951 to 2001)';
	const lim = f < K7.self ? 'doctors, mostly men' : f < K7.still ? 'doctors, mostly men; self-reported' : 'doctors, mostly men; self-reported; still observational';
	const nodeV = prog(f, K7.unmeasured, 14);
	const packV = prog(f, K7.strongest, 12);
	return (
		<Svg>
			<Title text="Judge the cohort: four steps again" />
			<Sx x={120} y={206} text="the 1954 result" size={32} color={GREYT} hand at={ON} />
			<Bars54 g={{x: 220, y: 240, w: 520, h: 210}} fill={[ON, ON, ON, ON]} size={26} vsize={26} axisLabel={false} xTitle={false} o={0.6} />
			<DotField x={130} y={560} cols={18} rows={7} d={16} r={5.5} at={ON} />
			<g opacity={0.4 + 0.6 * prog(f, K7.typical, 12)}><GTag x={440} y={548} text="not a typical population" size={30} /></g>
			<g opacity={0.4 + 0.6 * prog(f, K7.self, 12)}><GTag x={440} y={612} text="smoking updated by later questionnaires" size={28} /></g>
			<g opacity={0.25 + 0.6 * nodeV}>
				<rect x={110} y={712} width={290} height={64} rx={32} fill={GREY_FILL} stroke={GREYT} strokeWidth={3} strokeDasharray="10 7" />
				<Sx x={255} y={756} text="inherited factor?" size={36} color={GREYT} anchor="middle" hand at={ON} />
			</g>
			<Sx x={420} y={756} text="can't be fully ruled out" size={36} color={INK} hand at={K7.unmeasured} />
			{packV > 0.01 ? <g opacity={packV}>
				<PicH p={PL.pack} cx={880} cy={700} h={140} />
				<DrawPath d={`M${820},${770} L${940},${630}`} at={K7.strongest + 6} dur={10} color={RED} width={7} />
				<Chip x={870} y={790} text="an RCT wasn't possible" size={30} color={RED} ink={INK} anchor="middle" />
			</g> : null}
			<FrameStrip x={1000} y={150} w={824} rowH={154} gap={12} lit={[K7.design, K7.strengths, K7.limitations, K7.judgement]} slots={[
				{t: 'cohort (goes forward)', at: K7.cohort},
				{t: strength, at: K7.recorded},
				{t: lim, at: K7.typical},
				{t: 'strongest ethical design', at: K7.strongest},
			]} />
			<Sx x={1310} y={936} text="50 years" size={34} color={AMBER_INK} hand anchor="middle" at={K7.fifty + 20} />
			<StudyTimeline ccAt={ON} ccDim={ON} cohAt={ON} cohEnd={end} />
		</Svg>
	);
};

// ---------- 8. from association to cause ----------
const K8 = K('cause', {how: 'So how', several: 'Several kinds', strong: 'was strong', dose: 'showed a', first: 'exposure came', countries: 'other countries', carcin: 'Carcinogens', dna: 'the DNA', mechanism: 'a mechanism', fifty: 'The fifty-year', quitting: 'quitting around', avoided: 'avoided almost', extra: 'extra risk', early: 'dying early'});
const ROWY = (i: number) => 168 + i * 106;
const G8: BG = {x: 1010, y: 300, w: 700, h: 380};
export const SceneCause: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K8.strong, K8.dose, K8.first, K8.countries, K8.carcin, K8.quitting];
	const rows = ['strong link', 'dose-response', 'exposure came first', 'other countries agreed', 'a mechanism', 'lower risk after quitting'];
	const pA = 1 - prog(f, K8.countries - 6, 12);
	const pB = vis(f, K8.countries - 2, K8.carcin - 6, 12);
	const pC = vis(f, K8.carcin - 2, K8.fifty - 18, 12);
	const pD = prog(f, K8.fifty - 16, 12);
	const mp = pbPt(PL.map, 1330, 470, 860);
	const uk = mp(FP.uk[0], FP.uk[1]), us = mp(FP.us[0], FP.us[1]);
	const lp = pbPt(PL.lungsS, 1080, 480, 380);
	const ap = pbPt(PL.airway, 1560, 470, 190);
	const nuc = ap(FP.nucleus[0], FP.nucleus[1]);
	const thumb = (i: number, x: number, y: number) => {
		if (i === 0) return <MatchedPairs pts={pairPts(x + 22, y + 22, 2, 2, 60, 40)} caseAt={ON} ctrlAt={ON} r={11} gap={26} />;
		if (i === 1) return <g>{[0.1, 0.42, 0.59, 1].map((v, k) => <rect key={k} x={x + 10 + k * 28} y={y + 76 - 62 * v} width={20} height={Math.max(3, 62 * v)} fill={k === 3 ? AMBER_INK : CASE} />)}<line x1={x + 4} x2={x + 124} y1={y + 76} y2={y + 76} stroke={INK} strokeWidth={2.5} /></g>;
		if (i === 2) return <g><rect x={x + 8} y={y + 32} width={22} height={18} rx={6} fill={TEAL} /><Arr a={[x + 30, y + 41]} b={[x + 122, y + 41]} color={TEAL} width={5} head={14} /></g>;
		if (i === 3) return <PicH p={PL.map} cx={x + 64} cy={y + 42} h={70} />;
		if (i === 4) return <PicH p={PL.airway} cx={x + 64} cy={y + 42} h={86} />;
		return <g><line x1={x + 6} x2={x + 122} y1={y + 78} y2={y + 78} stroke={INK} strokeWidth={2.5} /><path d={`M${x + 6},${y + 10} Q${x + 80},${y + 14} ${x + 120},${y + 64}`} fill="none" stroke={TEAL} strokeWidth={4} /><path d={`M${x + 6},${y + 10} Q${x + 50},${y + 30} ${x + 90},${y + 76}`} fill="none" stroke={AMBER_INK} strokeWidth={4} /></g>;
	};
	return (
		<Svg>
			<Title text="From association to cause" />
			<Sx x={96} y={150} text="several kinds of evidence, one direction" size={30} color={GREYT} hand at={K8.several} />
			{rows.map((t, i) => {
				const lit = prog(f, at[i], 12);
				const later = i < 5 ? prog(f, at[Math.min(5, i + 3)], 12) : 0;
				const o = 0.38 + 0.62 * lit - 0.3 * later;
				return (
					<g key={t} opacity={o}>
						<rect x={96} y={ROWY(i)} width={760} height={94} rx={16} fill={lit > 0.5 ? '#fffaf0' : CARD} stroke={lit > 0.5 ? BLUE : EDGE} strokeWidth={lit > 0.5 ? 4 : 3} />
						{thumb(i, 108, ROWY(i) + 5)}
						<Sx x={262} y={ROWY(i) + 62} text={t} size={42} color={INK} hand at={ON} />
						{lit > 0.5 ? <path d={`M${806},${ROWY(i) + 50} l12,14 l22,-28`} fill="none" stroke={TEAL} strokeWidth={6} strokeLinecap="round" opacity={lit} /> : null}
					</g>
				);
			})}
			{pA > 0.01 ? <g opacity={pA}>
				<Sx x={920} y={226} text="1950: 647 of 649 men with lung cancer smoked" size={34} color={INK} weight={700} at={ON} />
				<Bars54 g={G8} fill={[ON, ON, ON, ON]} pulses={[[3, K8.strong], [1, K8.dose], [2, K8.dose + 10], [3, K8.dose + 20]]} size={26} vsize={30} axisLabel={false} />
				<Sx x={G8.x - 40} y={G8.y - 20} text="1954 lung-cancer death rate" size={30} color={INK} weight={700} at={ON} />
				<Sx x={1360} y={792} text="exposure recorded first: see the timeline" size={34} color={TEAL} hand anchor="middle" at={K8.first} />
			</g> : null}
			{pB > 0.01 ? <g opacity={pB}>
				<Pic p={PL.map} cx={1330} cy={470} w={860} />
				{[uk, us].map((p, i) => <g key={i}><circle cx={p[0]} cy={p[1]} r={16 + 6 * pulse(f, K8.countries + i * 10, 30)} fill={AMBER_INK} stroke={CARD} strokeWidth={3} /></g>)}
				<Sx x={uk[0] + 26} y={uk[1] - 22} text="Britain" size={34} color={INK} hand at={K8.countries} />
				<Sx x={us[0]} y={us[1] - 30} text="United States" size={34} color={INK} hand anchor="middle" at={K8.countries + 8} />
				<GTag x={1330} y={760} text="consistency" size={32} anchor="middle" />
			</g> : null}
			{pC > 0.01 ? <g opacity={pC}>
				<Pic p={PL.lungsS} cx={1080} cy={480} w={380} />
				<circle cx={lp(1300, 1070)[0]} cy={lp(1300, 1070)[1]} r={22} fill="none" stroke={TEAL} strokeWidth={5} />
				<DrawPath d={`M${lp(1300, 1070)[0] + 22},${lp(1300, 1070)[1]} L${1460},${470}`} at={K8.carcin} dur={14} color={TEAL} width={4} dash="12 9" />
				<Pic p={PL.airway} cx={1560} cy={470} w={190} />
				{[[-14, -10], [10, 6], [-4, 14], [16, -12]].map(([dx, dy], i) => <circle key={i} cx={nuc[0] + dx} cy={nuc[1] + dy} r={6} fill="#2b2622" opacity={prog(f, K8.dna + i * 5, 8)} />)}
				<Sx x={1660} y={nuc[1] + 8} text="DNA damage" size={34} color={AMBER_INK} hand at={K8.dna} />
				<GTag x={1340} y={760} text="b07: carcinogens damage airway DNA" size={30} anchor="middle" />
			</g> : null}
			{pD > 0.01 ? <g opacity={pD}>
				<Survival g={{x: 1000, y: 250, w: 720, h: 400}} at={K8.fifty - 12} size={28} />
				<Sx x={1000} y={720} text="all-cause survival, 2004 follow-up" size={32} color={INK} weight={700} at={ON} />
				<GTag x={1824} y={160} text="Doll et al. 2004, shape only" size={28} anchor="end" />
				<Chip x={1000} y={760} text="remove the exposure, the extra risk falls" size={38} color={TEAL} ink={INK} at={K8.extra} />
			</g> : null}
			<g opacity={prog(f, K8.early, 14)}>
				<GTag x={96} y={806} text="correlation alone isn't causation; this is several lines of evidence" size={30} />
				<GTag x={1100} y={806} text="Bradford Hill, 1965" size={28} />
			</g>
			<StudyTimeline ccAt={ON} ccDim={ON} cohAt={ON} cohEnd={() => 2001} cohHi={K8.first} cohDim={K8.countries} />
			{void CTRL}{void scribbleEllipse}
		</Svg>
	);
};

// ---------- 9. the benefit chain ----------
const K9 = K('benefit-chain', {what: 'what did', benefit: 'A benefit', isnt: 'the finding itself', lets: 'lets people', picture: 'Picture a', identifies: 'identifies', someone: 'someone makes', reaches: 'decision reaches', data: 'new data', australia: 'In Australia', warning: 'warning labels', adv: 'advertising bans', taxes: 'taxes', quit: 'quit programs', plain: 'plain packaging', daily: 'Daily smoking', ten: 'one adult', mens: 'lung cancer rates', fallen: 'have fallen', early: 'early 1980s'});
export const WS0 = [420, 390, 390, 384];
export const CH_Y = 432, CH_H = 418;
const gxm = (x: number, w: number, yr: number) => x + ((yr - 1945) / 75) * w;
/** b07's attempt graph as a thumbnail: men's smoking (grey) and lung cancer (amber); the fall after about 1982 can light. */
export const MiniTrend: React.FC<{x: number; y: number; w: number; h: number; hi?: number; o?: number}> = ({x, y, w, h, hi, o = 1}) => {
	const f = useCurrentFrame();
	const hv = hi === undefined ? 0 : prog(f, hi, 14);
	const ln = (pts: [number, number][], max: number) => 'M' + pts.map(([a, b]) => `${gxm(x, w, a)},${y + h - (b / max) * h}`).join(' L');
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} fill={CARD} />
			<path d={`M${x},${y} L${x},${y + h} L${x + w},${y + h}`} fill="none" stroke={INK} strokeWidth={3} />
			<path d={ln(SMOKE, 80)} fill="none" stroke="#6f6a62" strokeWidth={4} />
			<path d={ln(LUNG, 100)} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="10 6" />
			{hv > 0.01 ? <path d={ln(LUNG.filter(p => p[0] >= 1982), 100)} fill="none" stroke={AMBER} strokeWidth={14} strokeLinecap="round" opacity={0.45 * hv} /> : null}
			<Sx x={x + 6} y={y + h + 30} text="1945" size={26} color={INK} weight={600} at={ON} />
			<Sx x={x + w} y={y + h + 30} text="2020" size={26} color={INK} weight={600} anchor="end" at={ON} />
		</g>
	);
};
export const benefitLinks = (t: {lit: (number | undefined)[]; dec: [string, number][]; packAt: number; dotsAt: number; trendHi?: number; trendO?: number; split?: number; f: number}): ChainLink[] => [
	{head: 'finding: a changeable risk factor', lit: t.lit[0], body: (x, y, w, h) => <g><PicH p={PL.lungsS} cx={x + w / 2} cy={y + h * 0.42} h={h * 0.62} /><Sx x={x + w / 2} y={y + h - 22} text="smoking" size={40} color={INK} anchor="middle" hand at={ON} /></g>},
	{head: 'decision', lit: t.lit[1], body: (x, y) => <g>{t.dec.map(([s, a], i) => {
		const lit = prog(t.f, a, 12);
		const later = i + 3 < t.dec.length ? prog(t.f, t.dec[i + 3][1], 12) : 0;
		return <g key={s} opacity={0.3 + 0.7 * lit - 0.35 * later}><Chip x={x + 18} y={y + 14 + i * 74} text={s} size={34} color={BLUE} ink={INK} glow={pulse(t.f, a, 26)} /></g>;
	})}</g>},
	{head: 'action reaches people', lit: t.lit[2], body: (x, y, w) => {
		const pk = prog(t.f, t.packAt, 14);
		const sp = t.split === undefined ? 0 : smooth(prog(t.f, t.split, 24));
		return <g>
			<g opacity={0.3 + 0.7 * pk} transform={`translate(0,${(1 - smooth(pk)) * -30})`}><PicH p={PL.pack} cx={x + 110} cy={y + 80} h={150} /></g>
			<Chip x={x + 190} y={y + 50} text="Australia, 2012" size={30} color={INK} at={t.packAt + 8} />
			<g opacity={1 - sp}><DotRow10 x={x + 30} y={y + 196} at={t.dotsAt} d={36} r={13} lit={[4]} /></g>
			{sp > 0.01 ? <g opacity={sp}>
				<DotRow10 x={x + 30} y={y + 180} at={ON} d={36} r={13} lit={[4]} color="#b89a62" o={1} />
				<DotRow10 x={x + 30} y={y + 222} at={ON} d={36} r={13} lit={[1, 4, 7]} color={AMBER_INK} o={1} />
			</g> : null}
			<T x={x + 20} y={y + 262} w={w - 30} text={sp > 0.5 ? 'reach is unequal' : 'daily smoking: about 1 in 10 adults aged 18+, ABS 2022'} size={28} color={sp > 0.5 ? AMBER_INK : INK} at={t.dotsAt} />
		</g>;
	}},
	{head: 'outcome checked', lit: t.lit[3], body: (x, y, w, h) => <g>
		<MiniTrend x={x + 22} y={y + 30} w={w - 50} h={h * 0.52} hi={t.trendHi} o={t.trendO ?? 1} />
		<Sx x={x + 22} y={y + h - 18} text="men's lung cancer fell" size={30} color={AMBER_INK} hand at={t.trendHi ?? ON} />
		<GTag x={x + w - 20} y={y - 4} text="b07" size={26} anchor="end" />
	</g>},
];
export const SceneBenefit: React.FC = () => {
	const f = useCurrentFrame();
	const tlOut = smooth(prog(f, 0, 26));
	const dec: [string, number][] = [['warning labels', K9.warning], ['advertising bans', K9.adv], ['taxes', K9.taxes], ['quit programs', K9.quit]];
	return (
		<Svg>
			<Title text="What did it achieve? The benefit chain" />
			<T x={96} y={222} w={1700} text="A benefit isn't the finding itself." size={46} at={K9.isnt} />
			<Chip x={96} y={270} text="the finding: smoking is a risk factor" size={38} color={GREYT} ink={INK} at={K9.isnt + 10} />
			<Arr a={[790, 300]} b={[880, 300]} at={K9.lets} color={BLUE} width={6} />
			<Chip x={900} y={266} text="benefit: what the finding lets people do" size={42} color={BLUE} ink={BLUE} at={K9.lets} />
			<GTag x={96} y={368} text="Australia: the chain for smoking" size={30} at={K9.australia} />
			<ChainRow x={96} y={CH_Y} ws={WS0} h={CH_H} links={benefitLinks({lit: [K9.identifies, K9.someone, K9.reaches, K9.data], dec, packAt: K9.plain, dotsAt: K9.ten, trendHi: K9.fallen, f})} />
			<StudyTimeline ccAt={ON} cohAt={ON} cohEnd={() => 2001} dy={tlOut * 220} o={1 - tlOut} />
		</Svg>
	);
};

// ---------- 10. how big, and its limits ----------
const K10 = K('benefit-limits', {large: 'was large', common: 'common and', changed: 'be changed', slow: 'was slow', mid: 'mid-1950s', decades: 'took decades', unequal: 'unequal', groups: 'some groups', asks: 'asks something', time: 'time and privacy', classic: 'classic mistake', moment: 'the moment', published: 'published'});
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	const g1 = lerp(48, 190, smooth(prog(f, K10.slow, 30)));
	const scale = (1728 - 96 - g1) / 1584;
	const ws = WS0.map(w => w * scale);
	const xa = chainX(96, ws, 0, 48, g1) + ws[0] + 6, xb = chainX(96, ws, 1, 48, g1);
	const dec: [string, number][] = [['warning labels', ON], ['advertising bans', ON], ['taxes', ON], ['quit programs', ON]];
	const dial = (fr: number) => 0.2 + 0.65 * smooth(prog(fr, K10.large, 30));
	return (
		<Svg>
			<Title text="How big was the benefit, and its limits" />
			<RiskDial cx={230} cy={330} r={100} val={dial} title="benefit" size={28} />
			<g opacity={0.4 + 0.6 * prog(f, K10.common, 12)}><Chip x={380} y={190} text="common exposure" size={36} color={TEAL} ink={INK} /></g>
			<g opacity={0.4 + 0.6 * prog(f, K10.changed, 12)}><Chip x={380} y={262} text="changeable" size={36} color={TEAL} ink={INK} /></g>
			<Sx x={380} y={378} text="large benefit" size={40} color={TEAL} hand at={K10.large} />
			<g opacity={prog(f, K10.slow, 14)}>
				<line x1={780} x2={1300} y1={300} y2={300} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				<circle cx={780} cy={300} r={12} fill={AMBER_INK} />
				<circle cx={1300} cy={300} r={12} fill={INK_SOFT} />
				<Sx x={780} y={262} text="mid-1950s: strong evidence" size={32} color={INK} hand at={K10.mid} />
				<Sx x={1300} y={350} text="decades of policy" size={32} color={INK} hand anchor="end" at={K10.decades} />
				<Sx x={1040} y={214} text="delay" size={44} color={AMBER_INK} hand anchor="middle" at={K10.slow} />
				<DrawPath d={`M${(xa + xb) / 2},${CH_Y - 6} L${(xa + xb) / 2},${318}`} at={K10.slow + 10} dur={12} color={AMBER_INK} width={3} dash="8 6" />
			</g>
			<g opacity={0.35 + 0.65 * prog(f, K10.time, 12)}><PicH p={PL.clip} cx={1600} cy={250} h={190} /></g>
			<T x={1440} y={388} w={400} text="participants' costs: time, privacy, health records" size={28} color={GREYT} at={K10.time + 10} />
			<ChainRow x={96} y={CH_Y} ws={ws} h={CH_H} gap={48} gap1={g1} links={benefitLinks({lit: [ON, ON, ON, ON], dec, packAt: ON, dotsAt: ON, trendHi: ON, split: K10.unequal, f})} />
			<Mistake x={96} y={880} text="beneficial the moment it's published" size={42} at={K10.classic} cross={K10.published} note="benefit needs action and a checked outcome" noteW={1500} />
			{void Bars54}{void CTRL}{void DotRow10}{void CARD}{void EDGE}{void FrameStrip}{void GREY_FILL}{void Framed}{void tlx2}{void AMBER}
		</Svg>
	);
};
