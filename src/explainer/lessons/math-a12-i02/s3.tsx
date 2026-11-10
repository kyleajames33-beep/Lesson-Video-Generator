// Scenes 9 to 15: the memory aid (two solid gradient pictures: a missing number fixed, a missing x failing),
// attempt 1 (a reciprocal of a linear bracket, with its excluded value) and its brief feedback, attempt 2 (the
// matched pattern with a missing number) and its brief feedback, the exponential handoff (exported as
// I02FinalFrame, i03's opening) and the key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, GivensStrip, HandTag, InnerSlot, KeyNotesBullets, MarkSpan, MistakeCard, Pow, QuestionCard, RolesOn, SceneHeading, TaskStrip, usePlatePreload} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AMB, AnswerBox, Attempt, BLUE, Bl, BoxCard, Cc, Chip, FramedCard, Frac, GREEN, GREY, JAR, Line, MiniPlot, PLabel, RED, StarterRise, Tick, V, VIOLET, dV13, dW7, jarH} from './parts';

export const AID02 = 'Fix a missing number, never a missing x.';

// ---------- 9. memory aid ----------
export const S09: React.FC = () => {
	const f = useCurrentFrame();
	const k = K9;
	return (
		<>
			<SceneHeading text="A rule of thumb for the reverse chain rule" at={4} size={56} />
			<FramedCard x={60} y={150} w={1800} h={840} />
			<div style={{position: 'absolute', left: 110, top: 168, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: '#4f4840'}}>Memory aid</div>
			<div style={{position: 'absolute', left: 400, top: 160, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 76, color: INK, opacity: prog(f, k.fix, 14)}}>{AID02}</div>
			<Line x={120} y={270} at={k.ifout} size={48}>∫ <V><MarkSpan kind="circle" at={k.ifout + 10} color={BLUE}>x</MarkSpan>(x² + 1)³</V> dx  <Tick size={48} /></Line>
			<HandTag x={560} y={305} text="missing number: fix it" at={k.ifout + 16} size={44} color={GREEN} />
			<MiniPlot x={100} y={370} w={830} h={420} win={{x: [0.15, 1.28], y: [-4, 23]}} xTicks={[0.5, 1]} yTicks={[10, 20]}
				curves={[{fn: x => x * (x * x + 1) ** 3, from: 0.15, to: 1.28, color: VIOLET}, {fn: x => x * (x * x + 1) ** 3, from: 0.15, to: 1.28, color: INK, dash: '6 16'}]}>
				{m => <PLabel p={m.p(0.2, 18)} text="(x² + 1)⁴/8: gradient lands on it" size={34} />}
			</MiniPlot>
			<Line x={1000} y={270} at={k.ifneeds} size={48}>∫ <V>(x² + 1)³</V> dx  <svg width={46} height={46} viewBox="0 0 60 60" style={{verticalAlign: 'middle'}}><path d="M10,10 L50,50 M50,10 L10,50" stroke={RED} strokeWidth={8} strokeLinecap="round" /></svg></Line>
			<HandTag x={1360} y={305} text="missing x: use algebra" at={k.ifneeds + 16} size={44} color={RED} />
			<MiniPlot x={980} y={370} w={830} h={420} win={{x: [0.15, 1.28], y: [-4, 23]}} xTicks={[0.5, 1]} yTicks={[10, 20]}
				curves={[{fn: x => (x * x + 1) ** 3, from: 0.15, to: 1.28, color: VIOLET}, {fn: dW7, from: 0.15, to: 1.28, color: RED, dash: '14 10'}]}>
				{m => <PLabel p={m.p(0.2, 18)} text="÷ 2x: gradient peels away" color={RED} size={34} />}
			</MiniPlot>
			<Line x={120} y={820} at={k.rule} size={38}>Linear inside: divide by the new power and by <Bl>a</Bl> (a ≠ 0, n ≠ −1). Check by differentiating.</Line>
			<Chip x={120} y={890} at={k.rule + 10} size={38}>the starter: ÷ ½ and ÷ <Bl>4</Bl></Chip>
			<Chip x={1000} y={890} at={k.instead} size={38} color={RED}>no x outside? expand instead</Chip>
		</>
	);
};

// ---------- 10. attempt 1 ----------
const NumberLinePic: React.FC = () => {
	const w = 1060, h = 460, L = 70, R = w - 60, y0 = 330;
	const X = (v: number) => L + ((v + 2) / 3) * (R - L);
	const Y = (v: number) => y0 - Math.min(v, 12) * 23;
	const seg = (a: number, b: number) => Array.from({length: 121}, (_, i) => {const v = a + ((b - a) * i) / 120; return `${i ? 'L' : 'M'}${X(v).toFixed(1)},${Y(6 / (2 * v + 1) ** 4).toFixed(1)}`;}).join(' ');
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0}}>
				<path d={`M${L - 30},${y0} H${R + 30} M${R + 14},${y0 - 12} L${R + 30},${y0} L${R + 14},${y0 + 12}`} stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" />
				{[-2, -1, 0, 1].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y0 - 14} y2={y0 + 14} stroke={INK} strokeWidth={4} /><text x={X(v)} y={y0 + 56} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, fill: INK}}>{v < 0 ? `−${-v}` : v}</text></g>)}
				<line x1={X(-0.5)} x2={X(-0.5)} y1={y0} y2={30} stroke={GREY} strokeWidth={4} strokeDasharray="12 10" />
				<path d={seg(-2, -0.92)} stroke={VIOLET} strokeWidth={6} fill="none" />
				<path d={seg(-0.08, 1)} stroke={VIOLET} strokeWidth={6} fill="none" />
				<text x={X(0.15)} y={y0 - 120} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: VIOLET}}>the integrand</text>
				<circle cx={X(-0.5)} cy={y0} r={16} fill="#fbf8f1" stroke={GREY} strokeWidth={6} />
				<text x={X(-0.5)} y={y0 + 56} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}}>−½</text>
				<text x={X(-0.5) - 20} y={y0 + 110} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: INK}}>x = −½ is excluded</text>
				<text x={R + 30} y={y0 + 50} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>x</text>
			</svg>
		</div>
	);
};
const Q1: React.FC<{u?: number}> = ({u}) => <div>Find ∫ <Frac n="6" d="(2x + 1)⁴" /> dx, for {u !== undefined ? <MarkSpan kind="underline" at={u}>x ≠ −½</MarkSpan> : 'x ≠ −½'}.</div>;
export const S10: React.FC = () => (
	<Attempt hold={hold('scene-10')} pauseAt={K10.pause} top={440} size={52} given={[<>∫ <Frac n="6" d="(2x + 1)⁴" /> dx</>, 'x ≠ −½']} picture={<NumberLinePic />}>
		<Q1 />
	</Attempt>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const k = K11;
	const f = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><Q1 u={k.rewrite} /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: '6/(2x + 1)⁴', role: 'gradient', at: 6}, {content: 'inside 2x + 1', at: 12}, {content: 'x ≠ −½', at: 18}]} />
			<Line x={96} y={290} at={k.four} size={50}>∫ <V>6(<InnerSlot>2x + 1</InnerSlot>)⁻⁴</V> dx</Line>
			<Line x={96} y={390} at={k.two} size={50}>= <Frac n="6(2x + 1)⁻³" d={<>(−3)(<Bl>2</Bl>)</>} /> <Cc>+ C</Cc></Line>
			<HandTag x={620} y={430} text="÷ new power, ÷ inner rate" at={k.two + 10} size={40} color={BLUE} />
			<Line x={96} y={510} at={k.six} size={50}>= −(2x + 1)⁻³ <Cc>+ C</Cc></Line>
			<AnswerBox x={96} y={600} at={k.C} size={50}>−<Frac n="1" d="(2x + 1)³" /> <Cc>+ C</Cc></AnswerBox>
			<MistakeCard x={96} y={760} w={960} at={k.forget} size={44} wrong={<>−<Frac n="2" d="(2x + 1)³" /> + C</>} caption="its derivative is 12/(2x + 1)⁴: twice too big" />
			<MiniPlot x={1100} y={400} w={790} h={560} win={{x: [-0.1, 1.6], y: [-0.8, 13]}} xTicks={[0.5, 1, 1.5]} yTicks={[3, 6, 9, 12]}
				curves={[{fn: x => 6 / (2 * x + 1) ** 4, from: -0.1, to: 1.6, color: VIOLET}, {fn: x => 12 / (2 * x + 1) ** 4, from: -0.1, to: 1.6, color: RED, dash: '14 10', o: prog(f, k.forget, 14)}]}>
				{m => <>
					<PLabel p={m.p(0.25, 5.2)} text="integrand: 6 at x = 0" color={VIOLET} size={36} />
					<PLabel p={m.p(0.12, 11.6)} text="slip's gradient: 12" color={RED} size={36} o={prog(f, k.forget + 10, 12)} />
				</>}
			</MiniPlot>
		</>
	);
};

// ---------- 12. attempt 2 ----------
const CurvePic: React.FC = () => {
	const w = 800, h = 380, L = 80, R = w - 40, T = 30, B = h - 60;
	const xs = [-1.2, 1.05], ys = [-1, 17];
	const X = (v: number) => L + ((v - xs[0]) / (xs[1] - xs[0])) * (R - L), Y = (v: number) => B - ((v - ys[0]) / (ys[1] - ys[0])) * (B - T);
	const d = Array.from({length: 161}, (_, i) => {const v = xs[0] + ((xs[1] - xs[0]) * i) / 160; const y = Math.min(ys[1], v * v * (v ** 3 + 1) ** 4); return `${i ? 'L' : 'M'}${X(v).toFixed(1)},${Y(y).toFixed(1)}`;}).join(' ');
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0}}>
				<path d={`M${L},${Y(0)} H${R + 10} M${X(0)},${B + 10} V${T - 6}`} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />
				{[-1, 1].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={Y(0) - 10} y2={Y(0) + 10} stroke={INK} strokeWidth={4} /><text x={X(v)} y={Y(0) + 44} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{v < 0 ? '−1' : '1'}</text></g>)}
				{[8, 16].map(v => <g key={v}><line x1={X(0) - 10} x2={X(0) + 10} y1={Y(v)} y2={Y(v)} stroke={INK} strokeWidth={4} /><text x={X(0) - 18} y={Y(v) + 11} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{v}</text></g>)}
				<path d={d} stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" />
				<text x={X(-1.1)} y={Y(13)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: VIOLET}}>the integrand</text>
			</svg>
		</div>
	);
};
const Q2: React.FC = () => <div>Find ∫x²(x³ + 1)⁴ dx.</div>;
export const S12: React.FC = () => (
	<Attempt hold={hold('scene-12')} pauseAt={K12.pause} heading="Last one" top={480} size={52} given={[<>∫x²(x³ + 1)⁴ dx</>]} picture={<CurvePic />}>
		<Q2 />
	</Attempt>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const f = useCurrentFrame();
	const so = prog(f, k.integrating, 14);
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><Q2 /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'x²(x³ + 1)⁴', role: 'gradient', at: 6}, {content: 'inside x³ + 1', at: 12}]} />
			<Line x={96} y={280} at={k.inside} size={40}>inside <InnerSlot>x³ + 1</InnerSlot>:  <V>d/dx</V> = <Bl>3x²</Bl></Line>
			<Line x={96} y={370} at={10} size={50}>∫ <V><MarkSpan kind="circle" at={k.we} color={BLUE}>x²</MarkSpan>(x³ + 1)⁴</V> dx</Line>
			<Line x={96} y={470} at={k.we + 30} size={50}>= ⅓∫<V><Bl>3x²</Bl>(x³ + 1)⁴</V> dx</Line>
			<HandTag x={640} y={420} text="x² = ⅓ · 3x²: a missing number" at={k.number} size={40} color={BLUE} />
			<BoxCard x={96} y={620} w={900} at={14} out={k.so - 6} size={42} title="the test">is the outside factor a number times <Bl>3x²</Bl>?</BoxCard>
			<Line x={96} y={570} at={k.so} size={50}>= ⅓ · <Frac n="(x³ + 1)⁵" d="5" /> <Cc>+ C</Cc></Line>
			<AnswerBox x={560} y={570} at={k.thats} size={50}><Frac n="(x³ + 1)⁵" d="15" /> <Cc>+ C</Cc></AnswerBox>
			<MistakeCard x={96} y={740} w={960} at={k.integrating} size={42} wrong={<><Frac n="x³" d="3" /> · <Frac n="(x³ + 1)⁵" d="5" /> = <Frac n="x³(x³ + 1)⁵" d="15" /></>} caption="at x = 1 its derivative is 22.4, not 16" />
			<MiniPlot x={1060} y={320} w={830} h={660} win={{x: [-0.05, 1.08], y: [-1.5, 26]}} xTicks={[0.5, 1]} yTicks={[8, 16, 24]}
				curves={[{fn: x => x * x * (x ** 3 + 1) ** 4, from: -0.05, to: 1.08, color: VIOLET}, {fn: dV13, from: -0.05, to: 1.08, color: RED, dash: '14 10', o: so}]}>
				{m => {const a = m.p(1, 16), b = m.p(1, 22.4); return <>
					<circle cx={a[0]} cy={a[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} />
					<circle cx={b[0]} cy={b[1]} r={12} fill={RED} stroke={CARD} strokeWidth={4} opacity={so} />
					<PLabel p={a} dx={22} dy={34} text="16" color={VIOLET} size={40} />
					<PLabel p={b} dx={-22} dy={-10} anchor="end" text="22.4" color={RED} size={40} o={so} />
					<PLabel p={m.p(0.05, 12)} text="integrand x²(x³ + 1)⁴" color={VIOLET} size={36} />
				</>;}}
			</MiniPlot>
			<HandTag x={1180} y={480} text="factor by factor fails" at={k.factor} size={44} color={RED} />
		</>
	);
};

// ---------- 14. handoff ----------
const JW = 240;
const I02Board: React.FC<{headAt: number; eAt: number; chipAt: number; nextAt: number; recapAt: number}> = ({headAt, eAt, chipAt, nextAt, recapAt}) => {
	const f = useCurrentFrame();
	usePlatePreload([JAR.src]);
	return (
		<>
			<SceneHeading text="Next: exponential primitives" at={headAt} size={56} />
			<div style={{position: 'absolute', left: 96, top: 150, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK, opacity: prog(f, recapAt, 12)}}>{AID02}</div>
			<BoxCard x={96} y={250} w={760} at={recapAt} size={42} title="the reverse chain rule so far">
				<div style={{whiteSpace: 'pre'}}>(2x + 1)²:  ÷ 3 and ÷ <Bl>2</Bl></div>
				<div style={{whiteSpace: 'pre'}}>the starter:  ÷ ½ and ÷ <Bl>4</Bl></div>
			</BoxCard>
			<StarterRise x={140} y={1000 - jarH(JW) - 40} w={JW} t={6} at={recapAt} ruleSize={28} fedTag={false} />
			<HandTag x={500} y={700} text="÷ the inner rate" at={recapAt + 10} size={46} color={BLUE} />
			<div style={{position: 'absolute', left: 980, top: 200, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 120, color: INK, opacity: prog(f, eAt, 14), whiteSpace: 'pre'}}>∫<V>e<Pow><InnerSlot>3x</InnerSlot></Pow></V> dx</div>
			<HandTag x={1000} y={400} text="the inside: 3x" at={eAt + 20} size={42} color={GREY} />
			<BoxCard x={980} y={440} w={880} at={eAt + 10} size={42}>
				<div style={{whiteSpace: 'pre'}}>power:  inside 2x + 1,  ÷ <Bl>2</Bl></div>
				<div style={{whiteSpace: 'pre'}}>exponential:  inside 3x,  ÷ <Bl>3</Bl> too?</div>
			</BoxCard>
			<Chip x={980} y={660} at={chipAt} size={56} color={BLUE}>divide by <Bl>3</Bl> again?</Chip>
			<div style={{position: 'absolute', left: 1600, top: 600, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 130, color: AMB, opacity: prog(f, chipAt, 12)}}>?</div>
			<Chip x={980} y={830} at={nextAt} size={44}>Next: exponential primitives</Chip>
		</>
	);
};
/** i02's final frame (i03 opens on it). */
export const I02FinalFrame: React.FC = () => <I02Board headAt={-300} eAt={-60} chipAt={-60} nextAt={-60} recapAt={-60} />;
export const S14: React.FC = () => {
	const k = K14;
	return <I02Board headAt={k.next - 6} eAt={k.e} chipAt={k.appear} nextAt={k.next} recapAt={4} />;
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const f = useCurrentFrame();
	const id = 'scene-15';
	usePlatePreload([JAR.src]);
	const items = [
		{content: <>Rewrite as powers first: 1/xⁿ = x⁻ⁿ, √x = x<Pow>½</Pow>. Keep the domain.</>, at: 10},
		{content: <>∫(ax + b)ⁿ dx = <Frac n={<>(ax + b)ⁿ⁺¹</>} d={<><Bl>a</Bl>(n + 1)</>} /> <Cc>+ C</Cc>,  a ≠ 0, n ≠ −1</>, at: 22},
		{content: <>∫<Bl>f′(x)</Bl>[f(x)]ⁿ dx = <Frac n={<>[f(x)]ⁿ⁺¹</>} d="n + 1" /> <Cc>+ C</Cc>,  n ≠ −1</>, at: 34},
		{content: <>No inside derivative (a missing x)? Expand instead.</>, at: 46},
		{content: <>Answers a constant apart are both right. Check by differentiating.</>, at: 58},
	];
	const back = prog(f, Math.max(1350, dur(id)) - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={K15.pause} size={42} color="#8a5a12" anchor="end" />
				<KeyNotesBullets x={96} y={220} w={1040} items={items} size={38} gap={46} />
				<FramedCard x={1180} y={196} w={680} h={770} at={16} />
				<div style={{position: 'absolute', left: 1220, top: 214, opacity: prog(f, 16, 14), width: 610}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: '#4f4840'}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.05, color: INK, marginTop: 4}}>{AID02}</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, lineHeight: 1.25, color: INK, marginTop: 14}}>Linear inside: divide by the new power and by <Bl>a</Bl>.</div>
				</div>
				{f >= 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, 16, 14)}}>
					<StarterRise x={1230} y={940 - jarH(225)} w={225} t={6} ruleSize={28} fedTag={false} />
					<div style={{position: 'absolute', left: 1560, top: 640, width: 280, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, lineHeight: 1.15, color: INK}}>the starter:<br />÷ ½ and ÷ <span style={{color: BLUE}}>4</span></div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I02FinalFrame /></div> : null}
		</>
	);
};
