// Scenes 9 to 14: attempt 1 (the smallest quarterly deposit reaching $30,000 in 6 years at 4.4% p.a.) and its brief
// feedback ($1,099.08; crossed: $1,250), attempt 2 ($2,000 a year for 10 years, then 5 more years: the final
// balance) and its brief feedback ($29,214.53; crossed: a 15-year annuity), the handoff (a die chart: s01's opening
// frame, exported as F15FinalFrame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, MistakeCard, Pow, QuestionCard, SceneHeading, SvgPlate, usePlatePreload} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14} from './cuemap';
import {dur, hold} from './common';
import {AnswerBox, BROWN, BoxCard, CARD, Chip, DEP, Frac, FramedCard, FrequencyBars, Hand, INT, POS, QStrip, Row, Suitcase} from './parts';

const T = (s: number, c: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: s, fill: c} as React.CSSProperties);

// ---------- the quarterly strip (attempt 1's picture) ----------
const QuarterStrip: React.FC<{x: number; y: number; w: number; m?: string}> = ({x, y, w, m = 'M = ?'}) => {
	const X = (q: number) => x + (q / 24) * w;
	return <FrameSvg>
		<line x1={x} x2={x + w} y1={y} y2={y} stroke={INK} strokeWidth={4} />
		{Array.from({length: 24}, (_, i) => <line key={i} x1={X(i + 1)} x2={X(i + 1)} y1={y - 40} y2={y} stroke={DEP.stroke} strokeWidth={5} />)}
		{[0, 2, 4, 6].map(yr => <text key={yr} x={X(yr * 4)} y={y + 40} textAnchor="middle" style={T(30, INK)}>{yr === 0 ? '0' : `${yr} yr`}</text>)}
		<line x1={x} x2={x + w + 20} y1={y - 150} y2={y - 150} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
		<text x={x + w + 20} y={y - 164} textAnchor="end" style={T(34, INK)}>$30,000</text>
		<text x={x} y={y - 70} style={T(38, DEP.ink)}>{m}</text>
	</FrameSvg>;
};
// ---------- the 15-year timeline (attempt 2's picture), two stages in feedback ----------
const TwoStage15: React.FC<{x: number; y: number; w: number; arcs?: number; label?: string}> = ({x, y, w, arcs = 0, label = 'final balance: ?'}) => {
	const X = (yr: number) => x + (yr / 15) * w;
	return <FrameSvg>
		<line x1={x} x2={x + w} y1={y} y2={y} stroke={INK} strokeWidth={4} />
		{Array.from({length: 16}, (_, i) => <line key={i} x1={X(i)} x2={X(i)} y1={y - 8} y2={y + 8} stroke={INK} strokeWidth={3} />)}
		{[0, 5, 10, 15].map(yr => <text key={yr} x={X(yr)} y={y + 44} textAnchor="middle" style={T(30, INK)}>{yr}</text>)}
		{Array.from({length: 10}, (_, i) => <path key={i} d={`M${X(i + 1)},${y - 70} V${y - 12} M${X(i + 1) - 10},${y - 24} L${X(i + 1)},${y - 10} L${X(i + 1) + 10},${y - 24}`} fill="none" stroke={DEP.stroke} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />)}
		<text x={X(5.5)} y={y - 84} textAnchor="middle" style={T(30, DEP.ink)}>$2,000 at years 1 to 10</text>
		{arcs > 0.01 ? Array.from({length: 5}, (_, i) => <path key={i} d={`M${X(10 + i) + 6},${y - 24} Q${X(10.5 + i)},${y - 66} ${X(11 + i) - 6},${y - 24}`} fill="none" stroke={INT.stroke} strokeWidth={4} opacity={arcs} />) : null}
		<text x={X(15)} y={y - 90} textAnchor="end" style={T(32, INK)}>{label}</text>
	</FrameSvg>;
};
const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={520} w={660} at={6} size={40} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={42} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);
export const S09: React.FC = () => (
	<Attempt id="scene-09" pauseAt={K9.pause} given={['end of each quarter, 6 years', '4.4% p.a., compounded quarterly', 'balance at least $30,000', 'smallest deposit, whole cents']} picture={<QuarterStrip x={840} y={820} w={620} />}>
		<div>Deposits are made at the end of each quarter for 6 years into an account earning 4.4% p.a., compounded quarterly. Find the smallest quarterly deposit, in whole cents, that gives a balance of at least $30,000 after the last deposit.</div>
	</Attempt>
);

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const k = K10;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['Deposits are made at the end of ', {u: 'each quarter', at: k.q}, ' for ', {u: '6 years', at: k.n}, ' into an account earning ', {u: '4.4% p.a., compounded quarterly', at: k.q + 10}, '. Find the ', {u: 'smallest', at: k.round}, ' quarterly deposit, in whole cents, that gives a balance of ', {u: 'at least $30,000', at: k.round + 10}, ' after the last deposit.']} />
			<GivensStrip x={96} y={330} size={38} maxW={1500} items={[{content: 'r = 0.044 ÷ 4 = 0.011', role: 'interest', at: k.q + 20}, {content: 'n = 6 × 4 = 24', at: k.n}, {content: 'FV ≥ $30,000', role: 'balance', at: k.n + 10}]} />
			<BoxCard x={96} y={410} w={1100} at={8} out={k.n + 12} size={44} title="plan">
				<div>Quarterly: r and n per quarter.</div>
				<div style={{marginTop: 12}}>Put FV = $30,000 in, solve for M, then round up.</div>
			</BoxCard>
			<Row x={96} y={410} at={k.n + 20} size={48} dim={prog(fr, k.dividing, 12) * 0.5} small={40}>30 000 = <span style={{color: DEP.ink}}>M</span> × <Frac n={<>1.011<Pow>24</Pow> − 1</>} d="0.011" /></Row>
			<Row x={96} y={550} at={k.dividing} size={46} color={POS}>M = 30 000 ÷ 27.2957… = 1099.0745…</Row>
			<AnswerBox x={96} y={640} at={k.cents} size={52}>M = $1,099.08</AnswerBox>
			<Hand x={520} y={660} at={k.round} size={36} color={POS} w={560}>$1,099.07 gives only $29,999.88: round up</Hand>
			<MistakeCard x={96} y={770} w={900} at={k.twelve} size={44} wrong={<>30 000 ÷ 24 = $1,250</>} caption="ignores the interest" />
			<QuarterStrip x={1200} y={880} w={620} m={fr >= k.cents ? 'M = $1,099.08' : 'M = ?'} />
		</>
	);
};

// ---------- 11. attempt 2 ----------
export const S11: React.FC = () => (
	<Attempt id="scene-11" pauseAt={K11.pause} heading="Last one" given={['$2,000 at the end of each year', '10 years of deposits, 4% p.a.', 'then 5 more years, no deposits', 'the final balance']} picture={<TwoStage15 x={850} y={820} w={760} />}>
		<div>$2,000 is deposited at the end of each year for 10 years into an account earning 4% p.a., compounded annually. No more deposits are made, and the balance is left in the account for a further 5 years at the same rate. Find the final balance.</div>
	</Attempt>
);

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const k = K12;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['$2,000 is deposited at the end of each year ', {u: 'for 10 years', at: k.ten}, ' into an account earning 4% p.a., compounded annually. No more deposits are made, and the balance is left in the account for ', {u: 'a further 5 years', at: k.then}, ' at the same rate. Find the final balance.']} />
			<Row x={96} y={380} at={k.ten} size={46} dim={prog(fr, k.times, 12) * 0.4}>stage 1:  2000 × <Frac n={<>1.04<Pow>10</Pow> − 1</>} d="0.04" /><span style={{opacity: prog(fr, k.one, 10)}}> = $24,012.21</span></Row>
			<Row x={96} y={530} at={k.times} size={48}>stage 2:  24 012.21 × 1.04<Pow>5</Pow></Row>
			<AnswerBox x={96} y={630} at={k.three} size={52}>final balance: $29,214.53</AnswerBox>
			<MistakeCard x={96} y={760} w={980} at={k.forty} size={42} wrong={<>15-year annuity: $40,047.18</>} caption="counts 5 deposits never made" />
			<TwoStage15 x={1180} y={560} w={680} arcs={prog(fr, k.then, 14)} label={fr >= k.three ? '$29,214.53' : 'final balance: ?'} />
			<Hand x={1180} y={620} at={k.ten} size={36} color={DEP.ink}>stage 1: deposits</Hand>
			<Hand x={1560} y={620} at={k.then} size={36} color={INT.ink}>stage 2: interest only</Hand>
		</>
	);
};

// ---------- 13. handoff: a die chart (s01's opening frame) ----------
const DIE: PlateSpec = {src: 'assets/maths/ma12-die-red-v1.png', nat: [1254, 1254], box: [264, 252, 1021, 1058]};
const Die: React.FC<{at: number}> = ({at}) => {
	usePlatePreload([DIE.src]);
	const f = useCurrentFrame();
	return <FrameSvg style={{opacity: prog(f, at, 14)}}><SvgPlate plate={DIE} x={1480} y={620} w={280} /></FrameSvg>;
};
const DieBoard: React.FC<{head: number; bar: number; q: number; chips: number; tag: number; die?: number}> = ({head, bar, q, chips, tag, die = -300}) => {
	return <>
		<SceneHeading text="A die, rolled 200 times" at={head} size={52} />
		<FrequencyBars x={300} y={250} w={1100} h={560} bar={bar} q={q} />
		<Hand x={1430} y={520} at={tag} size={42} color={POS} w={420}>the four came up 38 times</Hand>
		<Die at={die} />
		<Chip x={1430} y={250} at={chips} size={42} color={BROWN}>Next: is the die fair?</Chip>
		<Chip x={1430} y={360} at={chips + 14} size={80} color={BROWN}>?</Chip>
	</>;
};
/** f15's final frame, and s01's opening frame: the die chart with one bar (face 4: 38) and five "?" outlines. */
export const F15FinalFrame: React.FC = () => <DieBoard head={-300} bar={1} q={1} chips={-300} tag={-300} />;
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	const sw = prog(fr, k.next - 6, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Match, model, finish" at={4} size={52} />
				<FramedCard x={96} y={200} w={1100} h={560} at={-30} />
				<div style={{position: 'absolute', left: 150, top: 230, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
				<div style={{position: 'absolute', left: 150, top: 300, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 96, color: INK}}>Match, model, finish.</div>
				<div style={{position: 'absolute', left: 150, top: 470, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK, whiteSpace: 'pre'}}>FV = <span style={{color: DEP.ink}}>M</span> × <Frac n={<><span style={{color: INT.ink}}>(1 + r)</span><Pow>n</Pow> − 1</>} d="r" /></div>
				<Suitcase x={1300} y={260} h={600} />
				<Hand x={150} y={800} at={k.end} size={44} color={POS}>the end of the finance videos</Hand>
			</div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: sw}}><DieBoard head={k.next} bar={prog(fr, k.thirty, 20)} q={prog(fr, k.die, 14)} chips={k.like} tag={k.thirty + 20} die={k.next} /></div>
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Match r and n to the payment period; keep r exact.</>, at: 2},
		{content: <>Unknown M: goal ÷ [(1 + r)<Pow>n</Pow> − 1]/r; round up to reach it.</>, at: 6},
		{content: <>Unknown n: get (1 + r)<Pow>n</Pow> alone, then take logs.</>, at: 10},
		{content: <>Round n up to whole payments (r &gt; 0, goal not yet met).</>, at: 14},
		{content: <>Payments stop: FV, then × (1 + r)<Pow>k</Pow>.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-14'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K14.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={40} gap={62} />
				<FramedCard x={1220} y={196} w={660} h={700} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 70, lineHeight: 1.1, color: INK}}>Match, model, finish.</div>
					<div style={{position: 'absolute', left: 1260, top: 380, width: 360, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, lineHeight: 1.2, color: POS}}>match r and n; write the model; finish as asked</div>
					<Suitcase x={1660} y={560} h={300} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F15FinalFrame /></div> : null}
		</>
	);
};
export {CARD, DrawPath, INK_SOFT};
