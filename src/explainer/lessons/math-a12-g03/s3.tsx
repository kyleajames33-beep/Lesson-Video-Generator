// Scenes 8 to 13: attempt 1 (an annuity) and its feedback (the deposit timeline, crossed lump sum), attempt 2 (the
// chip bags and the empirical rule) and its feedback (one tail, crossed 5%), the course-end frame (three habit cards
// on the exam desk, exported as G03FinalFrame) and the key notes, which return silently to it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, GivensStrip, HandTag, KeyNotesBullets, QuestionCard, SceneHeading, StudioPlot, SvgPlate, plateHeight, regionPath} from '../../math/studio';
import {K8, K9, K10, K11, K12, K13} from './cuemap';
import {dur, hold} from './common';
import {AnswerBox, BROWN, CARD, CHIP_BAG, Chip, D02_PLATES, DENS, DEP, DESK, FONT_DISPLAY, FONT_HAND, FramedCard, GOOD, GREY, Hand, INK, INT, KR, PAREA, QStrip, Row, SKATE, Slip, SuperSheet, TANK, normPdf, superW} from './parts';
import {G03Card} from './s2';

// ---------- 8. attempt 1 ----------
const Q1 = '$2,000 is deposited into a new account (starting at $0) at the end of each year. The account earns 5% p.a. interest, compounded annually. Find the value of the account immediately after the 10th deposit.';
const StatementPic: React.FC<{panel?: React.ReactNode}> = ({panel}) => <div style={{position: 'relative', width: superW(500) + 20, height: 520}}><SuperSheet x={10} y={0} h={500} at={-300} header="Account statement" panel={panel} /></div>;
export const S08: React.FC = () => (
	<QuestionCard at={0} size={48} w={1500} y={180} hold={{...hold('scene-08'), ringFrom: K8.pause}} pauseAt={K8.pause} picture={{node: <StatementPic />, w: superW(500) + 20}}><div>{Q1}</div></QuestionCard>
);

// ---------- 9. feedback 1 ----------
/** Ten end-of-year deposits (blue arrows) with amber growth caps: deposit n earns interest for 10 − n years. */
const Timeline: React.FC<{x: number; y: number; w: number; o: number; capO: number; last: number}> = ({x, y, w, o, capO, last}) => {
	if (o <= 0.01) return null;
	const step = w / 10;
	return <FrameSvg style={{opacity: o}}>
		<line x1={x} x2={x + w + 10} y1={y} y2={y} stroke={INK} strokeWidth={4} />
		{Array.from({length: 11}, (_, i) => <g key={i}><line x1={x + i * step} x2={x + i * step} y1={y} y2={y + 12} stroke={INK} strokeWidth={3} /><text x={x + i * step} y={y + 44} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{i}</text></g>)}
		{Array.from({length: 10}, (_, j) => {const n = j + 1, px = x + n * step, cap = (1.05 ** (10 - n) - 1) * 260; return <g key={n}>
			<line x1={px} x2={px} y1={y - 4} y2={y - 70} stroke={DEP.stroke} strokeWidth={6} />
			<path d={`M${px - 10},${y - 58} L${px},${y - 74} L${px + 10},${y - 58}`} fill="none" stroke={DEP.stroke} strokeWidth={5} />
			{cap > 0.5 ? <rect x={px - 11} y={y - 78 - cap * capO} width={22} height={cap * capO} fill={INT.soft} stroke={INT.stroke} strokeWidth={3} /> : null}
			{n === 10 ? <circle cx={px} cy={y - 96} r={26} fill="none" stroke={GREY} strokeWidth={4} opacity={last} /> : null}
		</g>;})}
		<text x={x + w + 20} y={y + 44} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>years</text>
	</FrameSvg>;
};
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={150} size={30} parts={['$2,000 is deposited into a ', {u: 'new account (starting at $0)', at: k.equal + 40}, ' at the ', {u: 'end of each year', at: k.equal}, '. The account earns 5% p.a. interest, ', {u: 'compounded annually', at: k.so - 20}, '. Find the value of the account immediately after the 10th deposit.']} />
			<GivensStrip x={96} y={330} size={36} items={[{content: 'M = $2,000 a year', role: 'deposit', at: k.equal + 10}, {content: 'r = 0.05', at: k.equal + 18}, {content: 'n = 10', at: k.equal + 26}]} />
			<Row x={96} y={430} at={k.so} size={48} small={34} dim={prog(fr, k.nine, 12)}>FV = <span style={{color: DEP.ink}}>M</span>[(1 + r)ⁿ − 1]/r</Row>
			<Row x={96} y={500} at={k.five - 20} size={48} small={34} dim={prog(fr, k.nine, 12)}>= 2000(1.05¹⁰ − 1)/0.05</Row>
			<AnswerBox x={96} y={580} at={k.nine} size={50}>FV ≈ $25,155.79</AnswerBox>
			<Hand x={640} y={600} at={k.nine + 20} size={30} color={GREY}>calculator: 25155.785</Hand>
			<div style={{position: 'absolute', left: 96, top: 700}}><Slip x={0} y={0} w={820} at={k.thirty} strikeAt={k.start} size={38} caption="as if every deposit earned 10 years">20,000 × 1.05¹⁰ ≈ $32,577.89</Slip></div>
			<Timeline x={1120} y={560} w={640} o={prog(fr, k.equal, 14)} capO={prog(fr, k.equal + 30, 30)} last={prog(fr, k.last, 12)} />
			<HandTag x={1560} y={350} text="the last one earns nothing yet" at={k.last} size={32} color={GREY} anchor="middle" />
			<div style={{position: 'absolute', inset: 0}}><SuperSheet x={1530} y={650} h={270} at={-300} header="Statement" panel={<div style={{fontSize: 30, color: GOOD.ink, opacity: prog(fr, k.nine, 12)}}>$25,155.79</div>} /></div>
		</>
	);
};

// ---------- 10. attempt 2 ----------
const Q2 = 'The masses of bags of chips filled by a machine are normally distributed with mean 500 g and standard deviation 5 g. Use the empirical rule to estimate the percentage of bags with mass less than 490 g.';
const BagPic: React.FC = () => {
	const w = 340, h = plateHeight(CHIP_BAG, w);
	return <div style={{position: 'relative', width: w + 20, height: h}}><svg width={w} height={h} style={{position: 'absolute', left: 10, top: 0, overflow: 'visible'}}><SvgPlate plate={CHIP_BAG} x={0} y={0} w={w} /></svg></div>;
};
export const S10: React.FC = () => (
	<QuestionCard at={0} size={48} w={1500} y={180} heading="Last one" hold={{...hold('scene-10'), ringFrom: K10.pause}} pauseAt={K10.pause} picture={{node: <BagPic />, w: 360}}><div>{Q2}</div></QuestionCard>
);

// ---------- 11. feedback 2 ----------
const bag = (x: number) => normPdf(x, 500, 5);
export const S11: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K11;
	const o = (a: number) => prog(fr, a, 12);
	const mid = o(k.about), lt = o(k.outside), rt = o(k.outside) * (1 - o(k.only));
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={150} size={30} parts={['The masses of bags of chips filled by a machine are ', {u: 'normally distributed', at: k.four}, ' with mean 500 g and standard deviation 5 g. Use the empirical rule to estimate the percentage of bags with ', {u: 'mass less than 490 g', at: k.only}, '.']} />
			<GivensStrip x={96} y={310} size={36} items={[{content: 'μ = 500 g', at: k.four + 6}, {content: 'σ = 5 g', at: k.four + 14}, {content: 'under 490 g', at: k.four + 22}]} />
			<Row x={96} y={410} at={k.dev} size={50} small={36} dim={prog(fr, k.cent, 12)}>z = (490 − 500)/5 = −2</Row>
			<Row x={96} y={485} at={k.about} size={44} small={34} dim={prog(fr, k.cent, 12)}>within 2σ: about 95%; outside: about 5%</Row>
			<AnswerBox x={96} y={570} at={k.cent} size={50}>about 2.5%</AnswerBox>
			<div style={{position: 'absolute', left: 96, top: 690}}><Slip x={0} y={0} w={560} at={k.five} strikeAt={k.well} size={44} caption="both tails">5%</Slip></div>
			<svg width={180} height={plateHeight(CHIP_BAG, 180)} style={{position: 'absolute', left: 740, top: 600, overflow: 'visible'}}><SvgPlate plate={CHIP_BAG} x={0} y={0} w={180} /></svg>
			<StudioPlot x={1000} y={300} width={880} height={560} window={{x: [481, 519], y: [0, 0.092]}} xTicks={[490, 500, 510]} yTicks={[]} xLabel="mass (g)" yLabel="" grid={false} at={k.four}>
				{m => <>
					<g clipPath={m.clip}>
						<path d={regionPath(m, bag, 490, 510)} fill="#e4dccd" opacity={mid * (1 - 0.5 * o(k.only))} />
						<path d={regionPath(m, bag, 481, 490)} fill={PAREA.soft} stroke={PAREA.stroke} strokeWidth={3} opacity={lt} />
						<path d={regionPath(m, bag, 510, 519)} fill={PAREA.soft} stroke={PAREA.stroke} strokeWidth={3} opacity={rt} />
						<path d={(() => {let d = ''; for (let i = 0; i <= 200; i++) {const x = 481 + (38 * i) / 200, [px, py] = m.p(x, bag(x)); d += `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`;} return d;})()} stroke={DENS.stroke} strokeWidth={7} fill="none" />
					</g>
					<text x={m.p(500, 0)[0]} y={m.p(0, 0.03)[1]} textAnchor="middle" opacity={mid} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">about 95%</text>
					<text x={m.p(486, 0)[0]} y={m.p(0, 0.022)[1]} textAnchor="middle" opacity={o(k.only)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: PAREA.ink}} stroke={CARD} strokeWidth={8} paintOrder="stroke">about 2.5%</text>
				</>}
			</StudioPlot>
			<HandTag x={1660} y={430} text="heavy bags: not asked" at={k.both} size={32} color={GREY} anchor="middle" />
		</>
	);
};

// ---------- 12. handoff (end of the course; the final frame) ----------
const HABITS: {text: string; pic: React.ReactNode}[] = [
	{text: 'Last step picks the rule. The domain picks the answers.', pic: <svg width={220} height={plateHeight(SKATE, 220)} style={{overflow: 'visible'}}><SvgPlate plate={SKATE} x={0} y={0} w={220} /></svg>},
	{text: 'Function? Plus C. Change? Limits. Area? Split. Table? Trapezia.', pic: <svg width={96} height={plateHeight(TANK, 96)} style={{overflow: 'visible'}}><SvgPlate plate={TANK} x={0} y={0} w={96} /></svg>},
	{text: 'The words pick the model.', pic: <svg width={150} height={plateHeight(D02_PLATES.jar, 62)} style={{overflow: 'visible'}}><SvgPlate plate={D02_PLATES.jar} x={0} y={0} w={62} /><SvgPlate plate={D02_PLATES.jar} x={80} y={0} w={62} /></svg>},
];
const CourseEnd: React.FC<{cards?: readonly number[]; lit?: readonly number[]; chip?: number}> = ({cards = [-300, -300, -300], lit = [], chip = -300}) => {
	const f = useCurrentFrame();
	return <>
		<FrameSvg><SvgPlate plate={DESK} x={250} y={170} w={1420} /></FrameSvg>
		{HABITS.map((h, i) => {
			const o = prog(f, cards[i], 14), l = lit[i] !== undefined ? prog(f, lit[i], 10) * (1 - prog(f, lit[i] + 40, 14)) : 0;
			return <div key={i} style={{position: 'absolute', left: 360, top: 225 + i * 200, width: 1200, height: 170, opacity: o, transform: `translateY(${(1 - o) * 20}px) scale(${1 + 0.02 * l})`}}>
				<FramedCard x={0} y={0} w={1200} h={170} />
				{l > 0.01 ? <div style={{position: 'absolute', inset: -6, borderRadius: 28, border: `6px solid ${KR.stroke}`, opacity: l}} /> : null}
				<div style={{position: 'absolute', left: 30, top: 0, height: 170, width: 230, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{h.pic}</div>
				<div style={{position: 'absolute', left: 280, top: 0, height: 170, width: 880, display: 'flex', alignItems: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, lineHeight: 1.08, color: INK}}>{h.text}</div>
			</div>;
		})}
		<Chip x={560} y={850} at={chip} size={40} color={BROWN}>End of Year 12 Mathematics Advanced</Chip>
	</>;
};
/** g03's final frame: the course-end desk with the three habit cards. */
export const G03FinalFrame: React.FC = () => <CourseEnd />;
export const S12: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K12;
	const sw = prog(fr, k.last - 4, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Read the words before the numbers" at={4} size={44} />
				<G03Card x={310} y={190} scale={0.92} />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<CourseEnd cards={[k.last + 10, k.last + 22, k.last + 34]} lit={[k.diff, k.integ, k.models]} chip={k.models} />
			</div> : null}
		</>
	);
};

// ---------- 13. key notes ----------
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Same amount: arithmetic. Same percentage: geometric.</>, at: 2},
		{content: <>Deposits: annuity FV = <span style={{color: DEP.ink}}>M</span>[(1 + r)ⁿ − 1]/r; r, n per period.</>, at: 6},
		{content: <>Maximum loan: set Aₙ = 0, solve for P, round down.</>, at: 10},
		{content: <>A list sums to 1; a density has area 1 (f(x) ≥ 0).</>, at: 14},
		{content: <>Uniform: f = 1/(b − a). Normal: 68, 95, 99.7%.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-13'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={52} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K13.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1090} items={items} size={38} gap={40} />
				<FramedCard x={1230} y={196} w={650} h={660} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1270, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<svg width={130} height={plateHeight(D02_PLATES.jar, 52)} style={{position: 'absolute', left: 1730, top: 214, overflow: 'visible'}}><SvgPlate plate={D02_PLATES.jar} x={0} y={0} w={52} /><SvgPlate plate={D02_PLATES.jar} x={62} y={0} w={52} /></svg>
					<div style={{position: 'absolute', left: 1270, top: 320, width: 580, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.12, color: INK}}>The words pick the model. The numbers just fill it in.</div>
					<div style={{position: 'absolute', left: 1270, top: 610, width: 580, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, lineHeight: 1.3, color: INK}}>Same amount: add. Same percentage: multiply. A list: sum to 1. A density: area 1.</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><G03FinalFrame /></div> : null}
		</>
	);
};
