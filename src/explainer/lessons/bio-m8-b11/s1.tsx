// B8-11 scenes 1 to 5: the hook (a fifteenfold rise and its suspects), two kinds of design (observational dots sort by
// their own choice; intervention dots are allocated by chance; smoking can't be assigned), the 1950 case-control study
// (case files, matched pairs, lungs, the result rows), the four-step frame with recall bias, and the confounder
// triangle followed by the 1951 cohort (questionnaire, 400-dot field, ledger). The study timeline owns the bottom from
// scene 2.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, Arr, BLUE, CARD, CASE, CTRL, Chip, DotField, DrawPath, EDGE, FrameStrip, GREYT, GTag, INK, INK_SOFT, MatchedPairs, Mistake, Pic, PicH, PicPair, RED, RecordRows, StudyTimeline, Svg, Sx, T, TEAL,
	TINT, TallyCard, Title, Triangle, VIOLET, lerp, pairPts, prog, pulse, scribbleEllipse, smooth, vis,
} from './parts';
import {PL} from './assets';
import {K} from './common';

const ON = -1000;

// ---------- 1. hook ----------
const K1 = K('hook', {rose: 'rose about', fifteen: 'fifteen times', smoking: 'Smoking had', tarred: 'tarred roads', car: 'car exhaust', factory: 'factory smoke', y1950: 'In 1950', doll: 'Richard Doll', q: 'So how'});
const G1 = {x: 250, y: 230, w: 800, h: 500};
const gx1 = (yr: number) => G1.x + ((yr - 1920) / 30) * G1.w;
const gy1 = (v: number) => G1.y + G1.h - (v / 10000) * G1.h;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const chips: [string, number, string][] = [['smoking?', K1.smoking, AMBER_INK], ['tarred roads?', K1.tarred, GREYT], ['car exhaust?', K1.car, GREYT], ['factory smoke?', K1.factory, GREYT]];
	const a = [gx1(1922), gy1(612)] as [number, number], b = [gx1(1947), gy1(9287)] as [number, number];
	return (
		<Svg>
			<Title text="How do we judge an epidemiological study?" />
			<rect x={G1.x} y={G1.y} width={G1.w} height={G1.h} fill={CARD} opacity={0.9} />
			{[0, 2500, 5000, 7500, 10000].map(v => <g key={v}><line x1={G1.x} x2={G1.x + G1.w} y1={gy1(v)} y2={gy1(v)} stroke="#e6ddcc" strokeWidth={1.5} /><line x1={G1.x - 10} x2={G1.x} y1={gy1(v)} y2={gy1(v)} stroke={INK} strokeWidth={3} /><Sx x={G1.x - 16} y={gy1(v) + 10} text={v.toLocaleString('en-AU')} size={28} color={INK} anchor="end" weight={600} at={ON} /></g>)}
			{[1920, 1930, 1940, 1950].map(yr => <g key={yr}><line x1={gx1(yr)} x2={gx1(yr)} y1={G1.y + G1.h} y2={G1.y + G1.h + 10} stroke={INK} strokeWidth={3} /><Sx x={gx1(yr)} y={G1.y + G1.h + 40} text={`${yr}`} size={28} color={INK} anchor="middle" weight={700} at={ON} /></g>)}
			<path d={`M${G1.x},${G1.y} L${G1.x},${G1.y + G1.h} L${G1.x + G1.w},${G1.y + G1.h}`} fill="none" stroke={INK} strokeWidth={3.5} />
			<Sx x={G1.x - 60} y={G1.y - 26} text="lung cancer deaths per year, England and Wales" size={32} color={INK} weight={700} at={ON} />
			<Sx x={G1.x + G1.w / 2} y={G1.y + G1.h + 80} text="year" size={28} color={INK} anchor="middle" weight={700} at={ON} />
			<circle cx={a[0]} cy={a[1]} r={12} fill={prog(f, K1.rose, 8) > 0.5 ? AMBER_INK : CARD} stroke={AMBER_INK} strokeWidth={3} strokeDasharray={prog(f, K1.rose, 8) > 0.5 ? undefined : '5 4'} />
			<circle cx={b[0]} cy={b[1]} r={12} fill={prog(f, K1.rose + 30, 8) > 0.5 ? AMBER_INK : CARD} stroke={AMBER_INK} strokeWidth={3} strokeDasharray={prog(f, K1.rose + 30, 8) > 0.5 ? undefined : '5 4'} />
			<DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={K1.rose} dur={34} color={AMBER_INK} width={6} />
			<Sx x={a[0] + 18} y={a[1] - 18} text="612 (1922)" size={36} color={INK} weight={800} at={K1.rose + 4} />
			<Sx x={b[0] - 18} y={b[1] - 22} text="9,287 (1947)" size={36} color={INK} weight={800} anchor="end" at={K1.rose + 30} />
			<g opacity={prog(f, K1.fifteen, 12)}>
				<rect x={G1.x + 30} y={G1.y + 40} width={420} height={84} rx={16} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={G1.x + 240} y={G1.y + 98} text="about 15 times" size={52} color={AMBER_INK} anchor="middle" weight={800} at={ON} />
			</g>
			<GTag x={G1.x - 60} y={850} text="Doll and Hill 1950, from the Registrar-General" size={28} at={K1.rose + 40} />
			<Chip x={G1.x - 60} y={922} text="Doll and Hill, London, 1950" size={40} color={INK} at={K1.doll} />
			<PicH p={PL.pack} cx={1470} cy={380} h={330} />
			<Sx x={1470} y={170} text="the suspects: all had grown" size={36} color={INK} anchor="middle" hand at={ON} />
			{chips.map(([t, at, c], i) => {
				const lit = prog(f, at, 12);
				return <g key={t} opacity={0.35 + 0.65 * lit}><Chip x={i % 2 ? 1500 : 1170} y={600 + Math.floor(i / 2) * 96} text={t} size={38} color={c} ink={c === GREYT ? INK : c} glow={pulse(f, at, 30)} /></g>;
			})}
			<T x={1170} y={850} w={650} text="Which one caused the rise?" size={44} color={INK} at={K1.factory + 30} />
		</Svg>
	);
};

// ---------- 2. two kinds of design ----------
const K2 = K('two-designs', {earlier: 'Earlier', judge: 'judge the studies', obs: 'observational study', watches: 'watches what', compares: 'compares their', inter: 'intervention study', decide: 'researchers decide', rct: 'randomised controlled', chance: 'chance decides', balance: 'helps balance', nobody: 'nobody could', had: 'had to be'});
const SMOKERS = new Set([0, 3, 4, 8, 11, 13, 14, 18, 20, 23, 25, 28]);
const grid2 = (x0: number) => Array.from({length: 30}, (_, i) => [x0 + (i % 6) * 92, 410 + Math.floor(i / 6) * 70] as [number, number]);
const L0 = grid2(220), R0 = grid2(1084);
const sortTo = (() => { let s = 0, n = 0; return L0.map((_, i) => SMOKERS.has(i) ? [170 + (s % 3) * 82, 410 + Math.floor(s++ / 3) * 70] as [number, number] : [520 + (n % 4) * 82, 410 + Math.floor(n++ / 4) * 70] as [number, number]); })();
const GRP = Array.from({length: 30}, (_, i) => ((i * 7 + 3) % 30) % 2);
const allocTo = (() => { let a = 0, b = 0; return R0.map((_, i) => GRP[i] === 0 ? [1030 + (a % 3) * 80, 410 + Math.floor(a++ / 3) * 62] as [number, number] : [1440 + (b % 3) * 80, 410 + Math.floor(b++ / 3) * 62] as [number, number]); })();
const TAGC = [VIOLET, '#2f8a5b', RED];
const TAGGED: [number, number][] = [[1, 0], [6, 1], [9, 2], [12, 0], [17, 1], [22, 2], [2, 2], [15, 0], [27, 1], [10, 1], [19, 0], [26, 2]];
export const SceneDesigns: React.FC = () => {
	const f = useCurrentFrame();
	const sortK = (i: number) => smooth(prog(f, K2.watches + 10 + i, 26));
	const sweepX = lerp(1000, 1800, clampT(prog(f, K2.decide, 36)));
	const sweep = vis(f, K2.decide, K2.decide + 44, 8);
	const allocK = (i: number) => smooth(prog(f, K2.decide + 6 + ((R0[i][0] - 1000) / 800) * 36, 20));
	const ban = prog(f, K2.nobody, 14);
	const obsLit = prog(f, K2.had, 14);
	const dimR = 1 - 0.65 * ban;
	return (
		<Svg>
			<Title text="Two kinds of study design" />
			<GTag x={1824} y={44} text="earlier: b10, rates" size={28} anchor="end" />
			<rect x={96} y={160} width={830} height={680} rx={22} fill={obsLit > 0.5 ? '#fffaf0' : CARD} stroke={obsLit > 0.5 ? BLUE : EDGE} strokeWidth={obsLit > 0.5 ? 5 : 3} />
			<rect x={960} y={160} width={864} height={680} rx={22} fill={CARD} stroke={EDGE} strokeWidth={3} opacity={1 - 0.3 * ban} />
			<Sx x={126} y={222} text="observational study" size={46} color={prog(f, K2.obs, 12) > 0.5 ? BLUE : GREYT} hand at={ON} />
			<T x={126} y={290} w={780} text="watches what people already do" size={42} at={K2.watches} />
			<Sx x={990} y={222} text="intervention study" size={46} color={prog(f, K2.inter, 12) > 0.5 ? BLUE : GREYT} hand at={ON} />
			<g opacity={dimR}>
				<T x={990} y={290} w={800} text="researchers decide who gets an exposure" size={42} at={K2.decide} out={K2.rct} />
				<T x={990} y={290} w={800} text="RCT: chance decides the groups" size={44} color={AMBER_INK} at={K2.rct + 4} />
			</g>
			{L0.map((p, i) => {
				const k = sortK(i);
				const x = lerp(p[0], sortTo[i][0], k), y = lerp(p[1], sortTo[i][1], k);
				const sm = SMOKERS.has(i);
				return <g key={'l' + i}><circle cx={x} cy={y} r={22} fill={sm ? TINT[2] : '#e4e0d8'} stroke={sm ? '#6b5a3c' : '#a8a092'} strokeWidth={2.5} />{sm ? <path d={`M${x + 10},${y - 22} q8,-12 0,-22`} fill="none" stroke="#9a9284" strokeWidth={3} strokeLinecap="round" /> : null}</g>;
			})}
			<Sx x={252} y={758} text="smoke" size={36} color={INK} anchor="middle" hand at={K2.watches + 40} />
			<Sx x={643} y={758} text="don't smoke" size={36} color={INK} anchor="middle" hand at={K2.watches + 40} />
			<Sx x={126} y={814} text="people choose their own exposure" size={38} color={AMBER_INK} hand at={K2.compares} />
			<g opacity={dimR}>
				{sweep > 0.01 ? <g opacity={sweep}><line x1={sweepX} x2={sweepX} y1={360} y2={720} stroke={BLUE} strokeWidth={4} strokeDasharray="10 8" /><circle cx={sweepX} cy={350} r={18} fill={BLUE} /><Sx x={sweepX} y={360} text="?" size={26} color={CARD} anchor="middle" weight={800} at={ON} /></g> : null}
				{R0.map((p, i) => {
					const k = allocK(i);
					const x = lerp(p[0], allocTo[i][0], k), y = lerp(p[1], allocTo[i][1], k);
					const tg = TAGGED.find(t => t[0] === i);
					const tv = tg ? prog(f, K2.balance + (i % 5) * 4, 10) : 0;
					return <g key={'r' + i}><circle cx={x} cy={y} r={22} fill={k > 0.5 ? (GRP[i] ? '#d9e8f6' : '#f6e4c4') : '#ece8df'} stroke={k > 0.5 ? (GRP[i] ? BLUE : AMBER_INK) : '#a8a092'} strokeWidth={2.5} />{tv > 0.01 ? <rect x={x + 8} y={y - 26} width={16} height={16} rx={3} fill={TAGC[(tg as [number, number])[1]]} opacity={tv} /> : null}</g>;
				})}
				<Sx x={1110} y={386} text="group A" size={34} color={AMBER_INK} anchor="middle" hand at={K2.decide + 40} />
				<Sx x={1520} y={386} text="group B" size={34} color={BLUE} anchor="middle" hand at={K2.decide + 40} />
				{(['age', 'diet', 'genes'] as string[]).map((t, i) => <g key={t} opacity={prog(f, K2.balance + i * 6, 10)}><rect x={1720} y={430 + i * 56} width={20} height={20} rx={4} fill={TAGC[i]} /><Sx x={1748} y={448 + i * 56} text={t} size={30} color={INK} hand at={ON} /></g>)}
				<Sx x={990} y={814} text="chance helps balance them; no guarantee" size={38} color={AMBER_INK} hand at={K2.balance + 20} />
			</g>
			{ban > 0.01 ? <g opacity={ban}>
				<g transform={`translate(${(1 - smooth(prog(f, K2.nobody, 20))) * 160},0)`}><PicH p={PL.pack} cx={1392} cy={540} h={300} /></g>
				<DrawPath d={scribbleEllipse(1392, 540, 160, 170, 5, 1.1)} at={K2.nobody + 18} dur={16} color={RED} width={6} />
				<DrawPath d={`M${1270},${680} L${1514},${400}`} at={K2.nobody + 30} dur={10} color={RED} width={8} />
				<Chip x={1392} y={724} text="unethical: can't assign a harm" size={36} color={RED} ink={INK} anchor="middle" at={K2.nobody + 30} />
			</g> : null}
			<StudyTimeline />
		</Svg>
	);
};
const clampT = (v: number) => Math.max(0, Math.min(1, v));

// ---------- 3. the 1950 case-control study ----------
const K3 = K('case-control', {cc: 'case-control', looks: 'looks back', interviewed: 'interviewed', seven: 'seven hundred', twenty: 'twenty London', matched: 'matched with', control: 'a control', patient: 'a patient without', compared: 'compared smoking', nearly: 'Nearly every', heavy: 'heavy smokers', among: 'than among'});
const PAIRS3 = pairPts(520, 360, 5, 4, 112, 56);
export const SceneCaseControl: React.FC = () => {
	const f = useCurrentFrame();
	const dimRows = prog(f, K3.heavy + 20, 14);
	return (
		<Svg>
			<Title text="Study 1: the 1950 case-control study" />
			<T x={96} y={212} w={1360} text="case-control study: starts with the disease and looks back" size={44} at={K3.cc} />
			<GTag x={1824} y={182} text="Doll and Hill 1950" size={28} anchor="end" />
			<PicH p={PL.files} cx={260} cy={470} h={270} />
			<GTag x={260} y={624} text="20 London hospitals" size={30} anchor="middle" at={K3.twenty} />
			<Sx x={500} y={318} text="cases: lung cancer, about 700" size={36} color={AMBER_INK} hand at={K3.seven} />
			<MatchedPairs pts={PAIRS3} caseAt={K3.seven} ctrlAt={K3.matched} />
			<T x={500} y={640} w={760} text="control: a patient without lung cancer, same sex, similar age" size={38} color={TEAL} at={K3.patient} />
			<PicPair a={PL.lungs} b={PL.lungsS} cx={1520} cy={460} w={330} at={K3.compared} />
			<GTag x={1520} y={656} text="the question: smoking?" size={30} anchor="middle" at={K3.compared} />
			<g opacity={1 - 0.5 * dimRows}>
				<Sx x={120} y={736} text="men with lung cancer: 647 of 649 smoked" size={40} color={INK} weight={700} at={K3.nearly} />
				<Sx x={120} y={786} text="men without: 622 of 649 smoked" size={40} color={INK_SOFT} weight={700} at={K3.nearly + 20} />
			</g>
			<Sx x={120} y={842} text="heavy smoking: far more common among the cases" size={44} color={AMBER_INK} hand at={K3.heavy} />
			<GTag x={1180} y={724} text="both groups mostly smoked; the difference is in how much" size={28} at={K3.heavy + 24} />
			<StudyTimeline ccAt={K3.cc + 6} />
			{void CASE}{void CTRL}
		</Svg>
	);
};

// ---------- 4. four steps ----------
const K4 = K('four-steps', {four: 'four steps', design: 'design,', strength: 'strength,', limitation: 'limitation,', judgement: 'judgement.', isCC: 'is case-control', speed: 'speed', matching: 'matching made', remembered: 'remembered', bias: 'bias,', more: 'more data', cancel: "can't cancel", jud: 'The judgement', strong: 'strong association'});
const PAIRS4 = pairPts(430, 250, 4, 4, 112, 56);
export const SceneFourSteps: React.FC = () => {
	const f = useCurrentFrame();
	return (
	<Svg>
		<Title text="Judge the method: four steps" />
		<PicH p={PL.files} cx={210} cy={330} h={210} />
		<MatchedPairs pts={PAIRS4} caseAt={ON} ctrlAt={ON} pulseAt={K4.matching} />
		<Chip x={430} y={470} text="age and sex matched" size={34} color={BLUE} ink={INK} at={K4.matching} />
		<TallyCard x={120} y={460} at={K4.remembered} />
		<Sx x={340} y={548} text="recalled, not recorded" size={34} color={INK} hand at={K4.remembered + 10} />
		<g opacity={1 - prog(f, K4.bias - 8, 12)}>
			<Sx x={110} y={660} text="the data being judged (1950):" size={32} color={GREYT} hand at={ON} />
			<Sx x={110} y={716} text="cases: 647 of 649 men smoked" size={38} color={INK} weight={700} at={ON} />
			<Sx x={110} y={768} text="controls: 622 of 649 men smoked" size={38} color={INK_SOFT} weight={700} at={ON} />
			<Sx x={110} y={824} text="heavy smoking: far more common in cases" size={38} color={AMBER_INK} hand at={ON} />
		</g>
		<T x={96} y={660} w={860} text="bias: a flaw in the method that pushes results one way" size={44} at={K4.bias} />
		<Mistake x={96} y={740} text="more data fixes it" size={40} at={K4.more} cross={K4.cancel} />
		<GTag x={560} y={752} text="recall bias" size={32} at={K4.cancel + 16} />
		<FrameStrip x={1000} y={150} w={824} rowH={154} gap={12} lit={[K4.design, K4.strength, K4.limitation, K4.judgement]} slots={[
			{t: 'case-control (looks back)', at: K4.isCC},
			{t: 'quick; many cases of a less common disease', at: K4.speed},
			{t: 'smoking recalled from memory', at: K4.remembered},
			{t: 'strong association; cause not yet shown', at: K4.strong},
		]} />
		<StudyTimeline ccAt={ON} />
	</Svg>
	);
};

// ---------- 5. a third factor, and the cohort ----------
const K5 = K('cohort', {third: 'a third factor', inherited: 'something inherited', both: 'both more', linked: 'linked to both', confounder: 'confounder', next: 'next study', cohort: 'cohort study', follows: 'follows a', y1951: 'In 1951', posted: 'posted a', forty: 'About forty', year: 'year after year', recorded: 'recorded which'});
export const SceneCohort: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K5.cohort - 10, 30));
	const s = lerp(1, 0.62, sh), tx = lerp(0, 96 - 360 * 0.62, sh), ty = lerp(0, 140 - 150 * 0.62, sh);
	return (
		<Svg>
			<Title text="A third factor, then a cohort study" />
			<GTag x={1824} y={70} text="later critics included the statistician R. A. Fisher" size={28} anchor="end" at={K5.inherited} out={K5.cohort} />
			<g transform={`translate(${tx},${ty}) scale(${s})`}>
				<Triangle x={360} y={150} w={1200} h={520} thirdAt={K5.third} size={44}
					pack={<PicH p={PL.pack} cx={500} cy={455} h={230} />}
					lungs={<PicH p={PL.lungsS} cx={1420} cy={445} h={250} />} />
			</g>
			<g opacity={vis(f, K5.confounder, K5.cohort - 10, 12)}>
				<Sx x={960} y={756} text="confounder: linked to both the exposure and the disease" size={46} color={INK} anchor="middle" hand at={ON} />
				<GTag x={960} y={790} text="like coffee and smoking (site L12)" size={28} anchor="middle" />
			</g>
			<T x={820} y={214} w={1000} text="cohort study: follows a group forward in time" size={46} at={K5.follows} />
			<T x={820} y={300} w={1000} text="1951: a smoking questionnaire posted to British doctors" size={40} color={INK} at={K5.posted} />
			<Pic p={PL.env} cx={230} cy={650} w={260} at={K5.cohort} slide={-60} />
			<Sx x={440} y={490} text="about 40,000 doctors replied" size={38} color={INK} hand at={K5.forty} />
			<DotField x={450} y={530} cols={25} rows={16} d={17.5} r={6.5} at={K5.forty} o={prog(f, K5.cohort, 12)} />
			<GTag x={440} y={812} text="each dot about 100" size={28} at={K5.forty + 30} />
			<g opacity={prog(f, K5.forty + 20, 12)}>
				{['non-smoker', 'light', 'medium', 'heavy'].map((t, i) => <g key={t}><circle cx={926} cy={548 + i * 46} r={11} fill={TINT[i]} stroke="#6b5a3c" strokeWidth={1.5} /><Sx x={946} y={558 + i * 46} text={t} size={30} color={INK} hand at={ON} /></g>)}
			</g>
			<g><Pic p={PL.ledger} cx={1400} cy={530} w={330} at={K5.cohort} slide={60} /></g>
			<RecordRows x={1200} y={660} w={400} rows={4} at={K5.recorded + 10} every={5} o={prog(f, K5.cohort, 12)} />
			<T x={1620} y={680} w={200} text="deaths recorded, with cause" size={34} at={K5.recorded + 6} />
			<StudyTimeline ccAt={ON} ccDim={ON} cohAt={K5.cohort + 6} />
			{void Arr}{void FrameStrip}{void RecordRows}{void AMBER}{void INK_SOFT}{void PicPair}
		</Svg>
	);
};
