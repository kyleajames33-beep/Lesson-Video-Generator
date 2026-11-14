// Scenes 10 to 15: attempt 1 ($900 at the end of each year for 5 years at 5% p.a.: the sum and its value) and its
// brief feedback ($4,973.07; crossed: $5,221.72), attempt 2 ($250 a month for 2 years at 3.6% p.a. monthly) and its
// brief feedback ($6,211.63, interest $211.63; crossed: $509.00), the handoff (a savings app on a phone: f14's
// opening frame, exported as F13FinalFrame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, MistakeCard, Pow, QuestionCard, SceneHeading, annuityFV} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AnswerBox, BROWN, BoxCard, CARD, Chip, DEP, Frac, FramedCard, Hand, INT, POS, PhoneApp, QStrip, Row, SuperSheet, m2, phoneRowY, phoneWidth} from './parts';

// ---------- five yearly deposits (the attempt 1 picture), growing their interest layers in feedback ----------
const YearTower: React.FC<{x: number; base: number; grow?: number; glow?: number; pitch?: number; bw?: number; u?: number; size?: number}> = ({x, base, grow = 0, glow = 0, pitch = 130, bw = 100, u = 0.2, size = 30}) => {
	const T = (s: number, c: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill: c} as React.CSSProperties);
	return <FrameSvg>
		<line x1={x - 20} x2={x + 4 * pitch + bw + 20} y1={base} y2={base} stroke={INK} strokeWidth={4} />
		{[1, 2, 3, 4, 5].map(y => {
			const v = 900 * 1.05 ** ((5 - y) * grow), bx = x + (y - 1) * pitch, h = 900 * u, hi = (v - 900) * u;
			const gl = (y === 1 || y === 5) && glow > 0.01;
			return <g key={y}>
				<rect x={bx} y={base - h} width={bw} height={h} fill={DEP.soft} stroke={DEP.stroke} strokeWidth={4} />
				{hi > 0.5 ? <rect x={bx} y={base - h - hi} width={bw} height={hi} fill={INT.stroke} /> : null}
				{gl ? <rect x={bx - 8} y={base - h - hi - 8} width={bw + 16} height={h + hi + 16} rx={10} fill="none" stroke={INT.stroke} strokeWidth={5} opacity={glow} /> : null}
				<text x={bx + bw / 2} y={base - h / 2 + 10} textAnchor="middle" style={T(size, DEP.ink)}>$900</text>
				<text x={bx + bw / 2} y={base + 40} textAnchor="middle" style={T(Math.max(28, size - 2), INK)}>{`year ${y}`}</text>
				{grow > 0.99 ? <text x={bx + bw / 2} y={base - h - hi - 14} textAnchor="middle" style={T(Math.max(28, size), INT.ink)}>{`${5 - y} yr`}</text> : null}
			</g>;
		})}
	</FrameSvg>;
};
const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={520} w={660} at={6} size={40} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={44} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);
export const S10: React.FC = () => (
	<Attempt id="scene-10" pauseAt={K10.pause} given={['$900 at the end of each year', '5 years, 5% p.a., yearly', '(a) future value as a sum', '(b) find the future value']} picture={<YearTower x={850} base={880} />}>
		<div>$900 is deposited at the end of each year for 5 years, into an account earning 5% p.a., compounded annually. (a) Write the future value as a sum of five terms. (b) Find the future value.</div>
	</Attempt>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const k = K11;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['$900 is deposited ', {u: 'at the end of each year', at: k.interest}, ' for 5 years, into an account earning 5% p.a., compounded annually. (a) Write the future value as a sum of five terms. (b) Find the future value.']} />
			<GivensStrip x={96} y={300} size={38} maxW={900} items={[{content: 'M = $900 a year', role: 'deposit', at: k.last}, {content: 'r = 0.05', role: 'interest', at: k.last + 10}, {content: 'n = 5', at: k.last + 20}]} />
			<BoxCard x={96} y={400} w={880} at={8} out={k.so - 8} size={42} title="plan">
				<div>Each $900 earns interest for the years left after it is paid.</div>
				<div style={{marginTop: 10}}>The last one earns nothing; the first earns 4 years.</div>
			</BoxCard>
			<Row x={96} y={390} at={k.so} size={44} dim={prog(fr, k.thats, 12) * 0.4} small={38}>(a) FV = 900 + 900(1.05)</Row>
			<Row x={96} y={450} at={k.up} size={44} dim={prog(fr, k.thats, 12) * 0.4} small={38}>{'           '}+ 900(1.05)<Pow>2</Pow> + 900(1.05)<Pow>3</Pow></Row>
			<Row x={96} y={510} at={k.up + 60} size={44} dim={prog(fr, k.thats, 12) * 0.4} small={38}>{'           '}+ 900(1.05)<Pow>4</Pow></Row>
			<Row x={96} y={580} at={k.thats} size={48}>(b) FV = 900 × <Frac n={<>1.05<Pow>5</Pow> − 1</>} d="0.05" /></Row>
			<AnswerBox x={96} y={700} at={k.cents} size={52}>FV = $4,973.07</AnswerBox>
			<MistakeCard x={96} y={800} w={880} at={k.five} size={42} wrong={<>$5,221.72</>} caption="as if paid at the start: one extra year each" />
			<YearTower x={1040} base={880} pitch={165} bw={135} u={0.42} size={34} grow={prog(fr, k.last, 30)} glow={prog(fr, k.first, 12)} />
		</>
	);
};

// ---------- 12. attempt 2 ----------
export const S12: React.FC = () => (
	<Attempt id="scene-12" pauseAt={K12.pause} heading="Last one" given={['$250 at the end of each month', '2 years', '3.6% p.a., compounded monthly', 'future value and interest earned']}
		picture={<SuperSheet x={900} y={400} h={600} size={26} header="Statement" lines={[{text: '$250 a month, 2 years'}, {text: '3.6% p.a., monthly'}, null, {text: 'Balance: ?', color: INK_SOFT}]} />}>
		<div>$250 is deposited at the end of each month for 2 years, into an account earning 3.6% p.a., compounded monthly. Find the future value and the interest earned.</div>
	</Attempt>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['$250 is deposited at the end of ', {u: 'each month', at: k.monthly}, ' for ', {u: '2 years', at: k.n}, ', into an account earning ', {u: '3.6% p.a., compounded monthly', at: k.zero}, '. Find the future value and the interest earned.']} />
			<GivensStrip x={96} y={300} size={36} maxW={1400} items={[{content: 'M = $250 a month', role: 'deposit', at: k.monthly}, {content: 'r = 0.036 ÷ 12 = 0.003', role: 'interest', at: k.zero}, {content: 'n = 2 × 12 = 24', at: k.n}]} />
			<Row x={96} y={390} at={k.so} size={50} dim={prog(fr, k.three, 12) * 0.4}>FV = 250 × <Frac n={<>1.003<Pow>24</Pow> − 1</>} d="0.003" /></Row>
			<AnswerBox x={96} y={540} at={k.three} size={52}>FV = $6,211.63</AnswerBox>
			<Row x={96} y={650} at={k.interest} size={44} color={INT.ink}>interest = $6,211.63 − $6,000 = $211.63</Row>
			<MistakeCard x={96} y={760} w={980} at={k.five} size={44} wrong={<>$509.00</>} caption="r = 0.036, n = 2: less than the $6,000 put in" />
			<SuperSheet x={1240} y={360} h={600} size={26} header="Statement" lines={[{text: '$250 a month, 2 years'}, {text: '3.6% p.a., monthly'}, {text: 'Put in: $6,000.00', color: DEP.ink, at: k.interest}, {text: fr >= k.three ? 'Balance: $6,211.63' : 'Balance: ?', color: fr >= k.three ? INK : INK_SOFT}]} />
		</>
	);
};

// ---------- 14. handoff: a savings app (f14's opening frame) ----------
const PHONE = {x: 700, y: 150, h: 810};
const phoneW = phoneWidth(PHONE.h);
const growth = (t: number) => annuityFV(300, 0.004, t * 12);
const AppBoard: React.FC<{head: number; q: readonly number[]; chips: number; list?: number}> = ({head, q, chips, list = -300}) => {
	const f = useCurrentFrame();
	const qs = ['a bigger deposit?', 'a higher rate?', 'more years?', 'money to start?'];
	const qy = [1, 2, 3, 0].map(r => phoneRowY(PHONE.y, PHONE.h, r) - 44);
	return <>
		<SceneHeading text="A savings app" at={head} size={52} />
		<PhoneApp x={PHONE.x} y={PHONE.y} h={PHONE.h} title="Savings" rows={[{label: 'Start', value: '$0', role: 'start'}, {label: 'Deposit', value: '$300 a month', role: 'deposit'}, {label: 'Rate (monthly)', value: '4.8% p.a.', role: 'interest'}, {label: 'Years', value: '5'}]}
			balance={{label: 'Balance', value: '$20,298.05'}} graph={{fn: growth, xMax: 5, yMax: 22000}} />
		{qs.map((s, i) => <div key={i} style={{opacity: prog(f, q[i], 12)}}>
			<div style={{position: 'absolute', left: PHONE.x + phoneW + 20, top: qy[i], fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: BROWN}}>?</div>
			<div style={{position: 'absolute', left: 120, top: 330 + i * 120, opacity: prog(f, list, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: [DEP.ink, INT.ink, INK, '#6b4fa0'][i]}}>{s}</div>
		</div>)}
		<Chip x={1190} y={300} at={chips} size={40} color={BROWN}>Next: which change matters most?</Chip>
		<Chip x={1190} y={410} at={chips + 14} size={80} color={BROWN}>?</Chip>
	</>;
};
/** f13's final frame, and f14's opening frame: the savings app at $300 a month for 5 years, with a "?" by each control. */
export const F13FinalFrame: React.FC = () => <AppBoard head={-300} q={[-300, -300, -300, -300]} chips={-300} list={-300} />;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.back - 6, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="A geometric sum" at={4} size={52} />
				<FramedCard x={96} y={200} w={1300} h={420} at={-30} />
				<div style={{position: 'absolute', left: 150, top: 240, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: INK, whiteSpace: 'pre'}}>FV = <span style={{color: DEP.ink}}>M</span> × <Frac n={<><span style={{color: INT.ink}}>(1 + r)</span><Pow>n</Pow> − 1</>} d="r" /></div>
				<Hand x={150} y={480} at={k.one} size={46} color={POS}>one term for each payment, ratio 1 + r</Hand>
				<SuperSheet x={1440} y={170} h={560} size={26} header="Super" lines={[{text: '$200 a month end'}, {text: '6% p.a., monthly'}, {text: 'Put in: $12,000'}, {text: 'Bal: $13,954.01'}]} />
				<StairIcon x={150} base={860} n={14} w={60} />
			</div> : null}
			<div style={{opacity: sw}}><AppBoard head={k.back} q={[k.deposit, k.rate, k.years, k.start]} chips={k.start + 10} list={k.what} /></div>
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>FV = all payments plus the interest they earn.</>, at: 2},
		{content: <>Payment k of n earns n − k periods of interest.</>, at: 6},
		{content: <>Newest first: first term <span style={{color: DEP.ink}}>M</span>, ratio <span style={{color: INT.ink}}>1 + r</span>, n terms.</>, at: 10},
		{content: <>FV = M[(1 + r)<Pow>n</Pow> − 1] ÷ r: start at 0, end-of-period payments.</>, at: 14},
		{content: <>Interest earned = FV − nM.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-15'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={40} gap={62} />
				<FramedCard x={1220} y={196} w={660} h={700} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.1, color: INK}}>Last in earns nothing. First in earns the most (r &gt; 0).</div>
					<div style={{position: 'absolute', left: 1260, top: 500, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, lineHeight: 1.15, color: INT.ink}}>Newest first: n terms, first term M, ratio 1 + r.</div>
					<StairIcon x={1290} base={860} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F13FinalFrame /></div> : null}
		</>
	);
};
/** A small staircase of deposits (each blue, older ones with taller amber layers). */
export const StairIcon: React.FC<{x: number; base: number; n?: number; w?: number}> = ({x, base, n = 8, w = 60}) => (
	<FrameSvg>
		{Array.from({length: n}, (_, i) => {const hi = (n - 1 - i) * 12, bx = x + i * (w + 8); return <g key={i}><rect x={bx} y={base - 90} width={w} height={90} fill={DEP.soft} stroke={DEP.stroke} strokeWidth={3} />{hi > 0 ? <rect x={bx} y={base - 90 - hi} width={w} height={hi} fill={INT.stroke} /> : null}</g>;})}
		<line x1={x - 10} x2={x + n * (w + 8)} y1={base} y2={base} stroke={INK} strokeWidth={3} />
	</FrameSvg>
);
export {CARD, m2};
