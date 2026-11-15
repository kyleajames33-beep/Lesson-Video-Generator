// Scenes 10 to 15: attempt 1 (which of four cash flows are annuities) and its brief feedback (B and D; crossed: A),
// attempt 2 ($400 a month at 6% p.a. monthly: the recurrence and A₃) and its brief feedback ($1,206.01; crossed: A₁ =
// $402), the handoff (a super account: 60 × $200 = $12,000, balance after 5 years "?": f13's opening frame, exported as
// F12FinalFrame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, MistakeCard, QuestionCard, SceneHeading} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AidCard} from './s2';
import {MiniFlow} from './s1';
import {ANSR, AnswerBox, BROWN, BoxCard, CARD, Calendar, Chip, FramedCard, GREY, Hand, IN, INTR, OUT, QStrip, Row, c2} from './parts';
import {SaveStrip, SuperSheet} from '../math-a12-f13/parts';

const TXT = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);

// ---------- 10. attempt 1 ----------
const Q1 = 'Which of the following are annuities? Give a reason for each. A: $8,000 invested once at 5% p.a., compounded annually, for 6 years. B: $150 deposited at the end of every fortnight into an account paying 3.9% p.a., compounded fortnightly. C: $100, $200 and $300 deposited at the end of years 1, 2 and 3. D: $80,000 invested at 4% p.a., compounded annually, with $5,000 withdrawn at the end of each year.';
const FOUR: {title: string; lump?: string; arrows?: {t: number; size: number; text?: string}[]; outs?: number[]; arcs?: boolean; ticks?: number}[] = [
	{title: 'A', lump: '$8,000', arcs: true, ticks: 6},
	{title: 'B', arrows: Array.from({length: 8}, (_, i) => ({t: i + 1, size: 44})), ticks: 8},
	{title: 'C', arrows: [{t: 1, size: 30, text: '$100'}, {t: 2, size: 50, text: '$200'}, {t: 3, size: 70, text: '$300'}], ticks: 3},
	{title: 'D', lump: '$80,000', outs: [1, 2, 3, 4], ticks: 4},
];
const Four: React.FC<{y: number; w?: number; h?: number}> = ({y, w = 400, h = 180}) => <>{FOUR.map((c, i) => <MiniFlow key={i} x={96 + i * (w + 34)} y={y} w={w} h={h} title={c.title} lump={c.lump} arrows={c.arrows} outs={c.outs} arcs={c.arcs} ticks={c.ticks} />)}</>;
export const S10: React.FC = () => {
	const k = K10;
	return (
		<>
			<Four y={630} />
			<QuestionCard at={0} size={36} w={1480} y={150} hold={{...hold('scene-10'), ringFrom: k.pause}} pauseAt={k.pause}><div>{Q1}</div></QuestionCard>
		</>
	);
};

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const k = K11;
	const fr = useCurrentFrame();
	const verdict = [{t: 'not an annuity', c: GREY, at: k.choosing}, {t: '✓ equal, every fortnight, interest each fortnight', c: ANSR.ink, at: k.b}, {t: 'not equal', c: GREY, at: k.c}, {t: '✓ one sum, equal withdrawals, interest each year', c: ANSR.ink, at: k.d}];
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip y={150} parts={['Which are annuities? A: $8,000 invested once at 5% p.a., compounded annually, for 6 years. B: ', {u: '$150 deposited at the end of every fortnight', at: k.b}, ', 3.9% p.a., compounded fortnightly. C: $100, $200 and $300 at the end of years 1, 2 and 3. D: $80,000 at 4% p.a., compounded annually, with ', {u: '$5,000 withdrawn at the end of each year', at: k.d}, '.']} />
			<GivensStrip x={96} y={350} size={34} items={[{content: 'same size', at: 2}, {content: 'same gap', at: 2}, {content: 'interest every period', role: 'interest', at: 2}]} title="check" />
			<Four y={420} />
			{verdict.map((v, i) => <div key={i} style={{position: 'absolute', left: 96 + i * 434, top: 612, width: 400, opacity: prog(fr, v.at, 10), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: v.c, lineHeight: 1.05}}>{v.t}</div>)}
			<AnswerBox x={1180} y={760} at={k.bd} size={52}>B and D</AnswerBox>
			<MistakeCard x={96} y={760} w={1000} at={k.choosing} size={46} wrong={<>A is an annuity</>} caption="no regular payments: compound interest only" />
		</>
	);
};

// ---------- 12. attempt 2 ----------
const ThreeCals: React.FC<{x: number; y: number; h: number; stamps: (m: number) => {text: string; tone: 'interest' | 'deposit'; at: number; dx?: number; dy?: number}[]; labels?: readonly {at: number; text: string}[]}> = ({x, y, h, stamps, labels}) => {
	const fr = useCurrentFrame();
	return <>{[1, 2, 3].map(m => {const cx = x + (m - 1) * (h * 0.78 + 24); const l = labels?.[m - 1]; return <React.Fragment key={m}><Calendar x={cx} y={y} h={h} month={`Month ${m}`} stamps={stamps(m)} stampSize={28} />
		{l ? <div style={{position: 'absolute', left: cx, top: y + h + 10, width: h * 0.78, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, color: fr >= l.at ? ANSR.ink : INK_SOFT}}>A{'₁₂₃'[m - 1]} = {fr >= l.at ? l.text : '?'}</div> : null}</React.Fragment>;})}</>;
};
export const S12: React.FC = () => (
	<>
		<BoxCard x={96} y={500} w={620} at={6} size={38} title="given">{['starts at $0', '$400 at the end of each month', '6% p.a., compounded monthly', '(a) recurrence for Aₙ', '(b) find A₃'].map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		<ThreeCals x={780} y={480} h={330} stamps={() => [{text: '+$400', tone: 'deposit', at: -30}]} />
		<Chip x={1330} y={840} at={-30} size={40} color={INK}>A₃ = ?</Chip>
		<QuestionCard at={0} size={40} w={1700} y={170} hold={{...hold('scene-12'), ringFrom: K12.pause}} pauseAt={K12.pause} heading="Last one">
			<div>An account starts at $0. $400 is deposited at the end of each month, and interest is 6% p.a., compounded monthly. (a) Write a recurrence for Aₙ, the balance straight after the nth deposit. (b) Find A₃.</div>
		</QuestionCard>
	</>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const fr = useCurrentFrame();
	const rowAt = [k.then - 30, k.then - 12, k.then + 6];
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['An account ', {u: 'starts at $0', at: k.zero}, '. ', {u: '$400 is deposited at the end of each month', at: k.so}, ', and interest is ', {u: '6% p.a., compounded monthly', at: k.six}, '. (a) Write a recurrence for Aₙ, the balance straight after the nth deposit. (b) Find A₃.']} />
			<GivensStrip x={96} y={300} size={40} items={[{content: 'A₀ = $0', at: k.zero}, {content: 'M = $400', role: 'deposit', at: k.so}, {content: 'r = 0.06 ÷ 12 = 0.005', role: 'interest', at: k.six}]} />
			<BoxCard x={96} y={380} w={900} at={-30} out={k.so - 8} size={40} title="plan"><div>Per month: r = 6% ÷ 12. Interest first, then the deposit; start at A<sub>0</sub> = 0.</div></BoxCard>
			<AnswerBox x={96} y={380} at={k.so} size={48}>A<sub>n+1</sub> = 1.005A<sub>n</sub> + 400,  A<sub>0</sub> = 0</AnswerBox>
			{['A₁ = 0 × 1.005 + 400 = 400', 'A₂ = 400 × 1.005 + 400 = 802', 'A₃ = 802 × 1.005 + 400 = 1206.01'].map((t, i) => <Row key={i} x={96} y={490 + i * 64} at={rowAt[i]} size={44} dim={i < 2 ? prog(fr, k.cent, 12) * 0.6 : 0} small={38}>{t}</Row>)}
			<AnswerBox x={96} y={700} at={k.cent} size={52}>A₃ = $1,206.01</AnswerBox>
			<MistakeCard x={96} y={810} w={900} at={k.a1} size={44} wrong={<>A₁ = $402</>} caption="deposit 1 earns no interest in month 1" />
			<ThreeCals x={1000} y={420} h={350} labels={rowAt.map((a, i) => ({at: a, text: ['$400', '$802', '$1,206.01'][i]}))} stamps={m => [{text: ['+$0.00', '+$2.00', '+$4.01'][m - 1], tone: 'interest', at: rowAt[m - 1], dx: -26, dy: -46}, {text: '+$400', tone: 'deposit', at: rowAt[m - 1] + 8, dx: 26, dy: 4}]} />
			<Hand x={1000} y={880} at={k.first} size={38} color={IN.ink} w={880}>month 1 interest is on $0: nothing</Hand>
		</>
	);
};

// ---------- 14. handoff: a super account (f13's opening frame, drawn with f13's own statement and strip) ----------
const SHT = {x: 60, y: 190, h: 760};
const CHOICES = ['exactly $12,000', 'a little more', 'a lot more'];
const lines = (at: readonly number[]) => [
	{text: <span style={{color: IN.ink}}>$200 at each month end</span>, at: at[0]},
	{text: '6% p.a., monthly', at: at[1]},
	{text: '60 × $200 = $12,000', at: at[2]},
	{text: 'Balance after 5 years: ?', color: INK_SOFT, at: at[3]},
];
const SuperBoard: React.FC<{sheet: number; lineAt: readonly number[]; strip: number; choice: number; next: number; q: number}> = ({sheet, lineAt, strip, choice, next, q}) => {
	const f = useCurrentFrame();
	return <>
		<SuperSheet x={SHT.x} y={SHT.y} h={SHT.h} header="Super statement" at={sheet} lines={lines(lineAt)} />
		<div style={{position: 'absolute', inset: 0, opacity: prog(f, strip, 14)}}><SaveStrip /></div>
		{CHOICES.map((c, i) => <Chip key={c} x={760 + i * 330} y={800} at={choice + i * 8} size={38} color={INK}>{c}</Chip>)}
		<Chip x={960} y={84} at={next} size={40} color={BROWN}>Next: add up the deposits and their interest</Chip>
		<Chip x={1770} y={76} at={q} size={80} color={BROWN}>?</Chip>
	</>;
};
/** f12's final frame, and f13's opening frame: the super statement, the month strip with "?" at 5 years and three choices. */
export const F12FinalFrame: React.FC = () => <SuperBoard sheet={-300} lineAt={[-300, -300, -300, -300]} strip={-300} choice={-300} next={-300} q={-300} />;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.super - 8, 16);
	const side = sw * (1 - prog(fr, k.more - 10, 14));
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><AidCard x={260} y={170} /></div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<SuperBoard sheet={k.super} lineAt={[k.picture + 30, k.picture + 110, k.twelve, k.twelve + 30]} strip={k.super} choice={k.will} next={k.more + 6} q={k.more + 16} />
			</div> : null}
			{sw > 0 ? <div style={{opacity: sw}}><SceneHeading text="A super account" at={k.super} size={52} /></div> : null}
			{side > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: side}}>
				<Hand x={760} y={200} at={k.picture + 40} size={40} color={IN.ink} w={1000}>the same deposits as the apartment savings: $200 at each month end</Hand>
			</div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Annuity: equal payments, regular times, interest every period.</>, at: 2},
		{content: <>Deposits in: A<sub>n+1</sub> = (1 + r)A<sub>n</sub> <span style={{color: IN.ink}}>+ M</span>, A<sub>0</sub> = 0.</>, at: 6},
		{content: <>Withdrawals out: A<sub>n+1</sub> = (1 + r)A<sub>n</sub> <span style={{color: OUT.ink}}>− M</span>, A<sub>0</sub> = the sum.</>, at: 10},
		{content: <>Deposit 1 earns nothing in period 1.</>, at: 14},
		{content: <>Course model: r and n per payment period, not per year.</>, at: 18},
	];
	const back = prog(fr, Math.max(1350, dur('scene-15')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1040} items={items} size={42} gap={56} />
				<FramedCard x={1180} y={196} w={700} h={680} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1220, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GREY}}>Memory aid</div>
					<Calendar x={1230} y={290} h={300} month="every month" />
					<div style={{position: 'absolute', left: 1490, top: 300, width: 360, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.1, color: INK}}>Same size, same gap, interest every gap.</div>
					<div style={{position: 'absolute', left: 1230, top: 640, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, lineHeight: 1.45}}><div style={{color: IN.ink}}>In: deposits</div><div style={{color: OUT.ink}}>Out: withdrawals from one sum</div></div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F12FinalFrame /></div> : null}
		</>
	);
};
export {c2};
