// Scenes 9 to 15: what scales and what compounds (the memory aid), attempt 1 (double the deposit: the effect on FV)
// and its brief feedback (FV doubles; crossed: more than doubles), attempt 2 ($400 for 20 years against $800 for 10
// years) and its brief feedback ($184,816.36 against $131,103.48; crossed: equal), the handoff (a $6,000 holiday goal
// in 2 years: f15's opening frame, exported as F14FinalFrame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, MistakeCard, Pow, QuestionCard, SceneHeading, SvgPlate, usePlatePreload} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {PH, lin} from './s1';
import {ANSR, AnswerBox, App, BASE, BROWN, BoxCard, Chip, DEP, FVGraph, FramedCard, GREY, Hand, INTR, QStrip, Row, VIO, ValueSplit, annuityFV, c0, fvOf} from './parts';
import {GoalPhone, Suitcase} from '../math-a12-f15/parts';

const TXT = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);

// ---------- 9. what scales, what compounds ----------
export const AidCard: React.FC<{x: number; y: number; lineAt?: number; g1?: number; g2?: number}> = ({x, y, lineAt = -30, g1 = -30, g2 = -30}) => {
	const fr = useCurrentFrame();
	return <>
		<FramedCard x={x} y={y} w={1440} h={760} at={-30} />
		<div style={{position: 'absolute', left: x + 60, top: y + 28, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: GREY}}>Memory aid</div>
		<App x={x + 60} y={y + 100} h={600} s={BASE} />
		<div style={{position: 'absolute', left: x + 470, top: y + 110, width: 900, display: 'flex', gap: 30}}>
			<div style={{flex: 1, opacity: prog(fr, g1, 12), background: '#f1effa', borderRadius: 16, padding: '10px 18px', border: `3px solid ${VIO}`}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: VIO}}>scale or add</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38}}><span style={{color: DEP.ink}}>deposit</span>, <span style={{color: VIO}}>start</span></div>
			</div>
			<div style={{flex: 1, opacity: prog(fr, g2, 12), background: '#fbf1e0', borderRadius: 16, padding: '10px 18px', border: `3px solid ${INTR.stroke}`}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INTR.ink}}>compound: (1 + r)<sup>n</sup></div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INTR.ink}}>rate, years</div>
			</div>
		</div>
		<FVGraph x={x + 470} y={y + 290} width={560} height={300} xMax={31} yMax={680000} xTicks={[10, 20, 30]} yTicks={[]} curves={[{s: {...BASE, years: 30}}, {s: {...BASE, years: 30, rate: 9.6}, dash: '12 8'}]} />
		<Hand x={x + 1050} y={y + 330} at={-30} size={32} color={GREY} w={330}>30 years: the rate's effect grows with time</Hand>
		<div style={{position: 'absolute', left: x + 470, top: y + 610, width: 920, opacity: prog(fr, lineAt, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 66, lineHeight: 1.05, color: INK}}>Money in adds up. Rate and time compound.</div>
	</>;
};
export const S09: React.FC = () => {
	const k = K9;
	return <AidCard x={240} y={170} g1={k.dep} g2={k.rate} />;
};

// ---------- 10. attempt 1 ----------
const Doubling: React.FC<{x: number; y: number}> = ({x, y}) => (
	<FrameSvg>
		<text x={x} y={y - 70} style={TXT(32, DEP.ink)}>monthly deposit</text>
		<line x1={x} x2={x + 480} y1={y + 30} y2={y + 30} stroke={DEP.soft} strokeWidth={14} strokeLinecap="round" />
		<circle cx={x + 140} cy={y + 30} r={18} fill="#fffdf8" stroke={DEP.stroke} strokeWidth={6} /><text x={x + 140} y={y + 90} textAnchor="middle" style={TXT(40, DEP.ink)}>M</text>
		<circle cx={x + 400} cy={y + 30} r={18} fill={DEP.stroke} /><text x={x + 400} y={y + 90} textAnchor="middle" style={TXT(40, DEP.ink)}>2M</text>
		<path d={`M${x + 170},${y - 6} Q${x + 270},${y - 50} ${x + 370},${y - 6}`} fill="none" stroke={DEP.stroke} strokeWidth={5} /><path d={`M${x + 352},${y - 18} L${x + 372},${y - 4} L${x + 350},${y + 4}`} fill="none" stroke={DEP.stroke} strokeWidth={5} />
		<text x={x} y={y + 160} style={TXT(32, GREY)}>everything else unchanged</text>
	</FrameSvg>
);
export const S10: React.FC = () => (
	<>
		<BoxCard x={96} y={540} w={640} at={6} size={38} title="given">{['starts at $0, end of each month', '10 years, 6% p.a., monthly', 'deposit doubled, nothing else changes', 'use FV = M[(1 + r)ⁿ − 1] ÷ r'].map((g, i) => <div key={i} style={{fontWeight: 800}}>{g}</div>)}</BoxCard>
		<Doubling x={920} y={620} />
		<QuestionCard at={0} size={40} w={1700} y={170} hold={{...hold('scene-10'), ringFrom: K10.pause}} pauseAt={K10.pause}>
			<div>An annuity starts at $0 and has equal deposits at the end of each month for 10 years at 6% p.a., compounded monthly. The monthly deposit is doubled and nothing else changes. Describe the effect on the future value, and explain it using the formula FV = M[(1 + r)<Pow>n</Pow> − 1] ÷ r.</div>
		</QuestionCard>
	</>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const k = K11;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['An annuity starts at $0 and has equal deposits at the end of each month for 10 years at 6% p.a., compounded monthly. The monthly deposit is ', {u: 'doubled', at: k.fv}, ' and ', {u: 'nothing else changes', at: k.in + 20}, '. Describe the effect on the future value, and explain it using the formula.']} />
			<GivensStrip x={96} y={310} size={40} items={[{content: 'M → 2M', role: 'deposit', at: k.fv}, {content: 'r = 0.005 (unchanged)', role: 'interest', at: k.in + 20}, {content: 'n = 120 (unchanged)', at: k.in + 30}]} />
			<Row x={96} y={400} at={k.in} size={52}>FV = <span style={{color: DEP.ink, border: `4px solid ${DEP.stroke}`, borderRadius: 10, padding: '0 8px'}}>M</span> × [(1 + r)<Pow>n</Pow> − 1] ÷ r</Row>
			<Hand x={560} y={500} at={k.in + 30} size={40} color={GREY}>unchanged: same r, same n</Hand>
			<AnswerBox x={96} y={500} at={k.fv} size={52}>FV doubles</AnswerBox>
			<Row x={96} y={610} at={k.for} size={40} color={GREY}>$200 a month: $32,775.87</Row>
			<Row x={96} y={670} at={k.four} size={40} color={GREY}>$400 a month: $65,551.74 = 2 × $32,775.87</Row>
			<MistakeCard x={96} y={760} w={1100} at={k.saying} size={44} wrong={<>more than doubles, because of compounding</>} caption="same time, same rate: × 2 exactly" />
			<FVGraph x={1240} y={380} width={640} height={420} xMax={10.5} yMax={70000} xTicks={[2, 4, 6, 8, 10]} yTicks={[{value: 30000, label: '$30k'}, {value: 60000, label: '$60k'}]} curves={[{s: {P: 0, M: 200, rate: 6, years: 10}, color: INK_SOFT, dash: '12 8', width: 4}, {s: {P: 0, M: 400, rate: 6, years: 10}, upTo: 10 * Math.min(1, Math.max(0, (fr - k.four) / 40))}]} />
		</>
	);
};

// ---------- 12. attempt 2 ----------
const TwoStrips: React.FC<{x: number; y: number; w: number}> = ({x, y, w}) => (
	<FrameSvg>
		<text x={x} y={y} style={TXT(32, INK)}>A: $400 a month, 20 years</text>
		<line x1={x} x2={x + w} y1={y + 90} y2={y + 90} stroke={INK} strokeWidth={3} />
		{Array.from({length: 240}, (_, i) => <line key={'a' + i} x1={x + (i + 1) * (w / 240)} x2={x + (i + 1) * (w / 240)} y1={y + 90} y2={y + 60} stroke={DEP.stroke} strokeWidth={1.6} />)}
		<text x={x} y={y + 160} style={TXT(32, INK)}>B: $800 a month, 10 years</text>
		<line x1={x} x2={x + w} y1={y + 250} y2={y + 250} stroke={INK} strokeWidth={3} />
		{Array.from({length: 120}, (_, i) => <line key={'b' + i} x1={x + (i + 1) * (w / 240)} x2={x + (i + 1) * (w / 240)} y1={y + 250} y2={y + 190} stroke={DEP.stroke} strokeWidth={1.6} />)}
	</FrameSvg>
);
export const S12: React.FC = () => (
	<>
		<BoxCard x={96} y={560} w={640} at={6} size={38} title="given">{['A: $400 a month for 20 years', 'B: $800 a month for 10 years', '6% p.a., compounded monthly', 'each deposits $96,000'].map((g, i) => <div key={i} style={{fontWeight: 800}}>{g}</div>)}</BoxCard>
		<TwoStrips x={820} y={620} w={720} />
		<QuestionCard at={0} size={40} w={1700} y={170} hold={{...hold('scene-12'), ringFrom: K12.pause}} pauseAt={K12.pause} heading="Last one">
			<div>Plan A: $400 is deposited at the end of each month for 20 years. Plan B: $800 is deposited at the end of each month for 10 years. Both earn 6% p.a., compounded monthly, and each plan deposits $96,000 in total. Find the future value of each plan and explain which is larger.</div>
		</QuestionCard>
	</>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const fr = useCurrentFrame();
	const A = annuityFV(400, 0.005, 240), B = annuityFV(800, 0.005, 120);
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['Plan A: $400 at the end of each month for 20 years. Plan B: $800 at the end of each month for 10 years. Both earn ', {u: '6% p.a., compounded monthly', at: k.at}, '; each deposits $96,000. Find each future value and explain which is larger.']} />
			<GivensStrip x={96} y={290} size={40} items={[{content: 'r = 0.06 ÷ 12 = 0.005', role: 'interest', at: k.at}, {content: 'A: n = 240, M = $400', at: k.a}, {content: 'B: n = 120, M = $800', at: k.b}]} />
			<BoxCard x={96} y={370} w={1000} at={-30} out={k.a - 8} size={40} title="plan"><div>Use r per month, find each FV with M[(1 + r)<Pow>n</Pow> − 1] ÷ r, then compare the interest.</div></BoxCard>
			<Row x={96} y={370} at={k.a} size={48} dim={prog(fr, k.b, 12) * 0.4}>A: FV = 400[(1.005)<Pow>240</Pow> − 1] ÷ 0.005</Row>
			<AnswerBox x={96} y={450} at={k.a + 70} size={50}>A: $184,816.36</AnswerBox>
			<Row x={96} y={560} at={k.b} size={48}>B: FV = 800[(1.005)<Pow>120</Pow> − 1] ÷ 0.005 = $131,103.48</Row>
			<ValueSplit x={260} y={660} k={0.0055} deposits={96000} interest={A - 96000} label="A" o={prog(fr, k.larger, 12)} />
			<ValueSplit x={260} y={760} k={0.0055} deposits={96000} interest={B - 96000} label="B" o={prog(fr, k.larger, 12)} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(fr, k.larger - 14, 12)}}><TwoStrips x={1180} y={660} w={680} /></div>
			<Hand x={1330} y={680} at={k.larger} size={40} color={INTR.ink} w={540}>A's deposits have longer to grow</Hand>
			<MistakeCard x={96} y={840} w={1100} at={k.saying} size={40} wrong={<>equal: both deposit $96,000</>} caption="same deposits, different time to grow" />
		</>
	);
};

// ---------- 14. handoff: a holiday goal (f15's opening frame, drawn with f15's own phone and suitcase) ----------
const GoalBoard: React.FC<{phone: number; suitcase: number; chip: number; q: number}> = ({phone, suitcase, chip, q}) => {
	const f = useCurrentFrame();
	return <>
		<div style={{position: 'absolute', inset: 0, opacity: prog(f, phone, 14)}}><GoalPhone x={640} y={150} h={810} /></div>
		<Suitcase x={1240} y={380} h={540} at={suitcase} />
		<Chip x={1200} y={200} at={chip} size={42} color={BROWN}>Next: work back from a goal</Chip>
		<Chip x={1760} y={76} at={q} size={80} color={BROWN}>?</Chip>
	</>;
};
/** f14's final frame, and f15's opening frame: the app in goal mode ($6,000 in 2 years, deposit "?") and the suitcase. */
export const F14FinalFrame: React.FC = () => <GoalBoard phone={-300} suitcase={-300} chip={-300} q={-300} />;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.now - 8, 16);
	const side = sw * (1 - prog(fr, k.there - 10, 14));
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><AidCard x={240} y={170} /></div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><GoalBoard phone={k.now} suitcase={k.holiday} chip={k.there} q={k.there + 12} /></div> : null}
			{sw > 0 ? <div style={{opacity: sw}}><SceneHeading text="Working back from a goal" at={k.now} size={52} /></div> : null}
			{side > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: side}}>
				<BoxCard x={96} y={330} w={500} at={k.now} size={40} title="a holiday">
					<div style={{fontWeight: 800}}>goal: $6,000</div>
					<div style={{fontWeight: 800}}>in 2 years</div>
					<div style={{fontWeight: 800, color: INTR.ink}}>6% p.a., monthly</div>
					<div style={{fontWeight: 800, color: DEP.ink}}>monthly deposit: ?</div>
				</BoxCard>
				<Hand x={96} y={680} at={k.what} size={42} color={GREY} w={500}>flip the question: the deposit is the unknown</Hand>
			</div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Fair test: change one input, keep the rest fixed.</>, at: 2},
		{content: <>With a start P: add <span style={{color: VIO}}>P(1 + r)<Pow>n</Pow></span> to M[(1 + r)<Pow>n</Pow> − 1] ÷ r.</>, at: 6},
		{content: <>Doubling M doubles FV: M is in every term.</>, at: 10},
		{content: <>Rate and time act through <span style={{color: INTR.ink}}>(1 + r)<Pow>n</Pow></span>.</>, at: 14},
		{content: <>Short time: small effect. Long time: huge effect.</>, at: 18},
	];
	const back = prog(fr, Math.max(1350, dur('scene-15')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1040} items={items} size={42} gap={58} />
				<FramedCard x={1180} y={196} w={700} h={680} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1220, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GREY}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1230, top: 290, width: 620, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 72, lineHeight: 1.1, color: INK}}>Money in adds up. Rate and time compound.</div>
					<FVGraph x={1220} y={500} width={620} height={230} xMax={31} yMax={680000} xTicks={[10, 20, 30]} yTicks={[]} curves={[{s: {...BASE, years: 30}}, {s: {...BASE, years: 30, rate: 9.6}, dash: '12 8'}]} />
					<div style={{position: 'absolute', left: 1230, top: 760, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, lineHeight: 1.4}}><span style={{color: DEP.ink}}>deposit, start: scale or add</span><br /><span style={{color: INTR.ink}}>rate, years: compound</span></div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F14FinalFrame /></div> : null}
		</>
	);
};
export {ANSR, c0, fvOf, lin};
