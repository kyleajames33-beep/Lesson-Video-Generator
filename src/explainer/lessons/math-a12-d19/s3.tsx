// Scenes 8 to 14: the memory aid (equal times, equal factors: two factor ladders), attempt 1 (doubling, a value
// at 15 years) and its brief feedback, attempt 2 (half-life, a mass and a rate with units) and its brief
// feedback, the handoff (one curve from the family, then i01's empty axes; exported as D19FinalFrame) and the
// key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, FunctionSimulator, GivensStrip, HandTag, KeyNotesBullets, MATH_STRAND_ACCENT, MarkSpan, MistakeCard, QuestionCard, RolesOn, SceneHeading, StudioPlot, SvgPlate, TaskStrip, smooth, usePlatePreload} from '../../math/studio';
import {K10, K12, K13, K14, K8, K9, K11} from './cuemap';
import {dur, hold} from './common';
import {AMB, Aa, AnswerBox, Approx, Attempt, BLUE, BoxCard, CAR, Chip, DQ, Ex, FactorLadder, Frac, GREEN, GREY, Kb, Line, QPic, RED, Ring, T_TOWN, V, VIOLET, carH, mass2, pop1, sub, town} from './parts';

export const AID19 = 'Equal times, equal factors.';
const YEARS_T = [0, 5, 10, 15, 20].map(v => ({value: v, label: String(v), sub: String(2010 + v)}));

// ---------- 8. memory aid ----------
export const S08: React.FC = () => {
	const f = useCurrentFrame();
	const k = K8;
	const carW = 380;
	usePlatePreload([CAR.src]);
	return (
		<>
			<SceneHeading text="A pattern that checks answers" at={4} size={56} />
			<div style={{position: 'absolute', left: 60, top: 150, width: 1800, height: 840, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}} />
			<div style={{position: 'absolute', left: 110, top: 168, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
			<div style={{position: 'absolute', left: 380, top: 160, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 72, color: INK, opacity: prog(f, k.equal, 14)}}>{AID19}</div>
			<div style={{position: 'absolute', left: 110, top: 258, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK, opacity: prog(f, k.any, 14)}}>
				Over any gap h, Q multiplies by <Ex><Kb>k</Kb>h</Ex>.  <MarkSpan kind="underline" at={k.only} color={BLUE} width={5}><Kb>Constant k.</Kb></MarkSpan>
			</div>
			<FactorLadder x={100} y={340} w={840} h={450} tMax={22} yMax={23000} fn={town} factor="× 1.2" arcs="above" arcAt={[k.twelve, k.fourteen, k.soon, k.soon + 14]}
				pts={[{t: 0, label: '10,000'}, {t: 5, label: '12,000'}, {t: 10, label: '14,400'}, {t: 15, label: '17,280'}, {t: 20, label: '20,736'}]} ptLab={{dx: 14, dy: 46, anchor: 'start'}}
				level={{v: 20000, label: '20,000', at: k.passing, left: true}} cross={{t: T_TOWN, at: k.thirty, label: '', lab: {dx: 0, dy: 0}}}
				tTicks={YEARS_T} xLabel="t (years)" yLabel="town" />
			<FactorLadder x={980} y={340} w={840} h={450} tMax={42} yMax={220} fn={sub} factor="× ½" arcs="above" arcAt={[k.every + 10, k.halves - 6, k.halves + 12]}
				pts={[{t: 0, label: '200 g', lab: {dx: -18, dy: 10, anchor: 'end'}}, {t: 12, label: '100 g'}, {t: 24, label: '50 g'}, {t: 36, label: '25 g', lab: {dx: 14, dy: -22, anchor: 'start'}}]} ptLab={{dx: -14, dy: 46, anchor: 'end'}}
				extra={{t: 30, at: k.between, label: '', between: [50, 25], lab: {dx: 0, dy: 0}}}
				tTicks={[12, 24, 30, 36].map(v => ({value: v, label: String(v)}))} xLabel="t (years)" xLabelBelow yLabel="substance" />
			<HandTag x={200} y={690} text="every 5 years: × 1.2" at={k.because} size={40} color={BLUE} />
			<HandTag x={560} y={640} text="20,000 just before 2030" at={k.thirty} size={40} color="#287347" />
			<HandTag x={1400} y={430} text="30 years = 2½ half-lives" at={k.thirtyY} size={40} color={INK} />
			<HandTag x={1400} y={484} text="so between 50 g and 25 g" at={k.between} size={40} color="#287347" />
			<FrameSvg><SvgPlate plate={CAR} x={110} y={985 - carH(carW) - 8} w={carW} /></FrameSvg>
			<div style={{position: 'absolute', left: 520, top: 878, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, whiteSpace: 'pre'}}>the car: × <Ex><Kb>−0.15</Kb></Ex> <Approx size={40}>≈ 0.861</Approx> every year</div>
		</>
	);
};

// ---------- 9. attempt 1 ----------
const Q1: React.FC<{u?: {d: number; e: number}}> = ({u}) => (
	<div>A population P grows at a rate proportional to its size, so that dP/dt = kP. Initially P = 800, and the population {u ? <MarkSpan kind="underline" at={u.d}>doubles in 10 years</MarkSpan> : 'doubles in 10 years'}. (a) Find the {u ? <MarkSpan kind="underline" at={u.e}>exact value</MarkSpan> : 'exact value'} of k. (b) Find the population after 15 years, to the nearest whole number.</div>
);
export const S09: React.FC = () => (
	<Attempt hold={hold('scene-09')} pauseAt={K9.pause} top={500} given={['P(0) = 800', 'doubles in 10 years', 'dP/dt = kP']}
		picture={<QPic w={800} h={380} tMax={22} yMax={4000} tTicks={[5, 10, 15, 20]} start={{v: 800, label: '800'}} ask={{t: 15, tag: 't = 15?'}} xLabel="t (years)" yLabel="P" />}>
		<Q1 />
	</Attempt>
);

// ---------- 10. feedback 1 ----------
const WIN_F1 = {x: [-1, 23] as [number, number], y: [-150, 3700] as [number, number]};
const POP = {f: (t: number) => pop1(t), df: (t: number) => (Math.LN2 / 10) * pop1(t)};
export const S10: React.FC = () => {
	const f = useCurrentFrame();
	const k = K10;
	const G = {x: 1090, y: 400, w: 800, h: 540};
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1700} y={170} size={44}><Q1 u={{d: k.sixteen, e: k.k}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'P(0) = 800', role: 'k', at: 6}, {content: 'doubles in 10 years', at: 12}, {content: 'dP/dt = kP', at: 18}]} />
			<Line x={96} y={390} at={k.doubling} size={46}>P(10) = 1600, so</Line>
			<Line x={520} y={390} at={k.sixteen} size={46}>1600 = <Aa>800</Aa><Ex>10<Kb>k</Kb></Ex></Line>
			<Line x={96} y={456} at={k.so} size={46}><Ex>10<Kb>k</Kb></Ex> = 2</Line>
			<Line x={96} y={522} at={k.k} size={46}><Kb>k = <Frac n="ln 2" d="10" /></Kb>  <Approx>≈ 0.0693 per year</Approx></Line>
			<Line x={96} y={622} at={k.after} size={44}>P(15) = <Aa>800</Aa><Ex>15<Kb>k</Kb></Ex> = <Aa>800</Aa> × 2<Ex>3/2</Ex> = 1600√2</Line>
			<Line x={96} y={692} at={k.about} size={36} color="#4f4840" weight={700}>≈ 2262.7</Line>
			<AnswerBox x={300} y={680} at={k.sixty} size={44}>about 2263</AnswerBox>
			<BoxCard x={96} y={800} at={k.doubling} out={k.not - 10} size={44} border={BLUE}><span style={{whiteSpace: 'pre'}}><Aa>800</Aa>   <Kb>× 2</Kb>   1600   <Kb>× 2</Kb>   3200    <span style={{fontSize: 36, color: '#4f4840'}}>(every 10 years)</span></span></BoxCard>
			<MistakeCard x={96} y={790} w={960} at={k.not} size={44} wrong={<>P(15) = 2400</>} caption="a straight line from 1600 to 3200: growth bends" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={WIN_F1} family={POP} timeline={[{frame: 0, x: 15}]} color={INK} at={-30}
				xTicks={[5, 10, 15, 20]} yTicks={[800, 1600, 2400, 3200]} xLabel="t (years)" yLabel="P"
				overlay={g => {
					const a = g.toFrame(10, 1600), b = g.toFrame(20, 3200), m = g.toFrame(15, 2400), p = g.toFrame(15, pop1(15));
					const ch = prog(f, k.halfway, 14);
					return <FrameSvg>
						{[[0, 800], [10, 1600], [20, 3200]].map(([t, v]) => {const q = g.toFrame(t, v); return <circle key={t} cx={q[0]} cy={q[1]} r={12} fill={INK} stroke={CARD} strokeWidth={4} />;})}
						<g opacity={prog(f, k.sixty, 12)}><circle cx={p[0]} cy={p[1]} r={12} fill={GREEN} stroke={CARD} strokeWidth={4} /><Ring p={p} r={28} color={GREEN} /><text x={p[0] + 30} y={p[1] + 40} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: GREEN}} stroke={CARD} strokeWidth={8} paintOrder="stroke">2263</text></g>
						<g opacity={ch}>
							<line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={RED} strokeWidth={5} strokeDasharray="14 10" />
							<circle cx={m[0]} cy={m[1]} r={11} fill={RED} stroke={CARD} strokeWidth={4} />
							<text x={m[0] - 24} y={m[1] - 18} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: RED}} stroke={CARD} strokeWidth={8} paintOrder="stroke">2400</text>
						</g>
					</FrameSvg>;
				}} />
			<HandTag x={1300} y={470} text="growth bends" at={k.line} size={44} color={RED} />
		</>
	);
};

// ---------- 11. attempt 2 ----------
const Q2: React.FC<{u?: {t: number; w: number}}> = ({u}) => (
	<div>A sample of mass Q grams decays so that dQ/dt = kQ, where t is in years. Initially Q = 100, and the half-life is 5 years. (a) Find the mass remaining after {u ? <MarkSpan kind="underline" at={u.t}>10 years</MarkSpan> : '10 years'}. (b) Find the rate of change of the mass at t = 10, {u ? <MarkSpan kind="underline" at={u.w}>with units</MarkSpan> : 'with units'}.</div>
);
export const S11: React.FC = () => (
	<Attempt hold={hold('scene-11')} pauseAt={K11.pause} heading="Last one" top={500} given={['Q(0) = 100 g', 'half-life 5 years', 'dQ/dt = kQ']}
		picture={<QPic w={800} h={380} tMax={16} yMax={140} tTicks={[5, 10, 15]} start={{v: 100, label: '100'}} ask={{t: 10, tag: 't = 10?'}} xLabel="t (years)" yLabel="Q (g)" />}>
		<Q2 />
	</Attempt>
);

// ---------- 12. feedback 2 ----------
const WIN_F2 = {x: [-1, 17] as [number, number], y: [-6, 115] as [number, number]};
const MASS = {f: (t: number) => mass2(t), df: (t: number) => (-Math.LN2 / 5) * mass2(t)};
export const S12: React.FC = () => {
	const f = useCurrentFrame();
	const k = K12;
	const G = {x: 1090, y: 400, w: 800, h: 540};
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1700} y={170} size={44} heading="Last one"><Q2 u={{t: k.ten, w: k.year}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'Q(0) = 100 g', role: 'k', at: 6}, {content: 'half-life 5 years', at: 12}, {content: 't = 10', at: 18}]} />
			<Line x={96} y={390} at={k.ten} size={46}>two half-lives:  <Aa>100</Aa> <Kb>× ½</Kb> 50 <Kb>× ½</Kb> 25</Line>
			<AnswerBox x={96} y={456} at={k.grams} size={44}>(a) 25 g</AnswerBox>
			<Line x={96} y={548} at={k.with} size={46}><Kb>k = −<Frac n="ln 2" d="5" /></Kb>  <Approx>per year</Approx></Line>
			<Line x={96} y={640} at={k.so} size={44}><V><DQ /> = <Kb>k</Kb>Q = −<Frac n="ln 2" d="5" /> × 25 = −5 ln 2</V></Line>
			<AnswerBox x={96} y={730} at={k.year} size={40}>(b) −5 ln 2 ≈ −3.47 g per year (decreasing)</AnswerBox>
			<MistakeCard x={96} y={812} w={960} at={k.gives} size={40} wrong={<>−13.9 g per year</>} caption="k × 100: the rate at t = 0" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={WIN_F2} family={MASS} timeline={[{frame: 0, x: 10}]} color={INK} at={-30}
				xTicks={[5, 10, 15]} yTicks={[25, 50, 75, 100]} xLabel="t (years)" yLabel="Q (g)" tangent={{at: k.so, halfLength: 130}} point={{at: k.grams}}
				overlay={g => {
					const p = g.toFrame(10, 25), s0 = g.toFrame(0, 100), s1 = g.toFrame(1.6, 100 - 13.8629 * 1.6);
					return <FrameSvg>
						{[[0, 100], [5, 50]].map(([t, v]) => {const q = g.toFrame(t, v); return <circle key={t} cx={q[0]} cy={q[1]} r={12} fill={INK} stroke={CARD} strokeWidth={4} />;})}
						<Ring p={p} r={30} o={prog(f, k.grams, 12)} color={GREEN} />
						<text x={p[0] - 190} y={p[1] + 76} opacity={prog(f, k.about, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: VIOLET}} stroke={CARD} strokeWidth={8} paintOrder="stroke">gradient ≈ −3.47 g per year</text>
						<line x1={s0[0]} y1={s0[1]} x2={s1[0]} y2={s1[1]} stroke={RED} strokeWidth={6} strokeLinecap="round" strokeDasharray="12 8" opacity={0.85 * prog(f, k.using, 12)} />
					</FrameSvg>;
				}} />
			<HandTag x={1850} y={560} text="not the rate at t = 10" at={k.notAt} size={40} color={RED} anchor="end" />
		</>
	);
};

// ---------- 13. handoff ----------
const G13 = {x: 40, y: 150, w: 1100, h: 760};
const WIN_FAM = {x: [-1, 3] as [number, number], y: [-0.4, 10.4] as [number, number]};
const WIN_I01 = {x: [-2.5, 2.5] as [number, number], y: [-3, 10] as [number, number]};
const HEAD13 = 'Next: from a gradient back to a curve';
const RX13 = 1210;
const I01Board: React.FC<{gradAt: number; whichAt: number; howAt: number; backAt: number; headAt: number}> = ({gradAt, whichAt, howAt, backAt, headAt}) => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text={HEAD13} at={headAt} size={56} />
			<StudioPlot x={G13.x} y={G13.y} width={G13.w} height={G13.h} window={WIN_I01} xTicks={[-2, -1, 1, 2].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}))} yTicks={[-2, 2, 4, 6, 8, 10].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}))} xLabel="x" yLabel="y" at={-60} />
			<Chip x={RX13} y={230} at={gradAt} size={56} color={MATH_STRAND_ACCENT}>gradient: f′(x) = 2x</Chip>
			<Enter at={backAt} style={{position: 'absolute', left: RX13, top: 360, width: 660}}>
				<div style={{background: CARD, borderRadius: 20, padding: '14px 24px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}}>
					<div style={{display: 'flex', alignItems: 'center', gap: 16, opacity: 1}}>
						<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre', width: 170}}>f(x)</span>
						<svg width={200} height={70} viewBox="0 0 200 70"><path d="M14,40 H180 M162,22 L182,40 L162,58" stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" /><text x={100} y={24} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, fill: VIOLET}}>differentiate</text></svg>
						<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre'}}>f′(x)</span>
					</div>
					<div style={{display: 'flex', alignItems: 'center', gap: 16, opacity: 1}}>
						<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre', width: 170}}>f(x) = ?</span>
						<svg width={200} height={70} viewBox="0 0 200 70"><path d="M186,40 H20 M38,22 L18,40 L38,58" stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" /><text x={100} y={24} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, fill: VIOLET}}>backwards</text></svg>
						<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre'}}>2x</span>
					</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: RX13 + 10, top: 590, opacity: prog(f, whichAt, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 96, color: MATH_STRAND_ACCENT}}>which curve?</div>
			<div style={{position: 'absolute', left: RX13 + 10, top: 750, opacity: prog(f, howAt, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, lineHeight: 1.25}}>and which one condition<br />picks out just one?</div>
		</>
	);
};
/** d19's final frame (i01 opens on it): i01's empty axes (x −2.5 to 2.5, y −3 to 10) and the question chips. */
export const D19FinalFrame: React.FC = () => <I01Board gradAt={-60} whichAt={-60} howAt={-60} backAt={-60} headAt={-300} />;
export const S13: React.FC = () => {
	const f = useCurrentFrame();
	const k = K13;
	const swap = smooth(prog(f, k.next - 4, 26));
	const A = [0.5, 1, 2, 3];
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - swap}}>
				{swap < 1 ? <>
					<SceneHeading text="One rule, a family of curves" at={4} size={56} />
					<div style={{position: 'absolute', right: 40, top: 70, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK}}>{AID19}</div>
					<StudioPlot x={G13.x} y={G13.y} width={G13.w} height={G13.h} window={WIN_FAM} xTicks={[1, 2, 3]} yTicks={[2, 4, 6, 8, 10]} xLabel="t" yLabel="Q" at={-30}>
						{M => <>
							{A.map((a, i) => {
								const on = a === 2 ? prog(f, k.picks, 14) : 0;
								const d = Array.from({length: 121}, (_, j) => {const t = -1 + (4 * j) / 120; const p = M.p(t, Math.min(10.4, a * Math.exp(0.5 * t))); return `${j ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`;}).join(' ');
								return <path key={a} d={d} stroke={on > 0.5 ? INK : GREY} strokeWidth={4 + 3 * on} fill="none" strokeLinecap="round" opacity={prog(f, 10 + i * 10, 14) * (a === 2 ? 1 : 1 - 0.5 * prog(f, k.picks, 14))} />;
							})}
							{A.map(a => {const p = M.p(0, a); return <circle key={a} cx={p[0]} cy={p[1]} r={9} fill={a === 2 ? AMB : GREY} stroke={CARD} strokeWidth={3} />;})}
							<Ring p={M.p(0, 2)} r={28} o={prog(f, k.picks, 12)} color={AMB} />
						</>}
					</StudioPlot>
					<HandTag x={240} y={680} text="Q(0) = 2 picks one" at={k.picks} size={46} color={AMB} />
					<Line x={RX13} y={240} at={8} size={46}>Q = <Aa>A</Aa><Ex><Kb>0.5</Kb>t</Ex></Line>
					<Line x={RX13} y={320} at={14} size={38} color="#4f4840" weight={700}>one curve for each <Aa>A</Aa></Line>
					<BoxCard x={RX13} y={420} w={650} at={k.picks} size={42} border={AMB} bw={4}>a rate rule and a starting value give one curve</BoxCard>
				</> : null}
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: swap}}>
				{swap > 0.001 ? <I01Board gradAt={k.two - 10} whichAt={k.which} howAt={k.how} backAt={k.next + 20} headAt={k.next} /> : null}
			</div>
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const f = useCurrentFrame();
	const id = 'scene-14';
	const items = [
		{content: <>Rate proportional to amount: <DQ /> = <Kb>k</Kb>Q (<Kb>k</Kb> per unit of time).</>, at: 10},
		{content: <>Q &gt; 0: <Kb>k &gt; 0</Kb> growth; <Kb>k &lt; 0</Kb> decay.</>, at: 22},
		{content: <>Q = <Aa>A</Aa><Ex><Kb>k</Kb>t</Ex> obeys it, and <Aa>A</Aa> = Q(0).</>, at: 34},
		{content: <><Kb>k ≠ 0</Kb>: asymptote Q = 0 (<Kb>k = 0</Kb>: Q stays <Aa>A</Aa>).<br />Models use <Aa>A &gt; 0</Aa> and t ≥ 0.</>, at: 46},
		{content: <>Find <Kb>k</Kb> from a data point: ln both sides; keep <Kb>k</Kb> exact.</>, at: 58},
	];
	const back = prog(f, Math.max(1350, dur(id)) - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={K14.pause} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
				<KeyNotesBullets x={96} y={230} w={1050} items={items} size={40} gap={56} />
				<Enter at={16} style={{position: 'absolute', left: 1180, top: 196, width: 660}}>
					<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 30px 26px', height: 740, boxSizing: 'border-box'}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.08, color: INK, marginTop: 4}}>{AID19}</div>
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, lineHeight: 1.25, color: INK, marginTop: 10}}>Over any gap h, Q multiplies by <Ex><Kb>k</Kb>h</Ex>. Constant <Kb>k</Kb>.</div>
					</div>
				</Enter>
				{f >= 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, 16, 14)}}>
					<FactorLadder x={1180} y={540} w={330} h={360} tMax={12} yMax={16500} fn={town} factor="× 1.2" arcs="above" arcAt={[-30, -30]} arcSize={34} size={28}
						pts={[{t: 0, label: '10,000'}, {t: 5, label: ''}, {t: 10, label: '14,400'}]} ptLab={{dx: 10, dy: 44, anchor: 'start'}} tTicks={[5, 10].map(v => ({value: v, label: String(v)}))} xLabel="" yLabel="" />
					<FactorLadder x={1510} y={540} w={330} h={360} tMax={28} yMax={230} fn={sub} factor="× ½" arcs="above" arcAt={[-30, -30]} arcSize={34} size={28}
						pts={[{t: 0, label: '200', lab: {dx: -14, dy: 10, anchor: 'end'}}, {t: 12, label: ''}, {t: 24, label: '50'}]} ptLab={{dx: -10, dy: 44, anchor: 'end'}} tTicks={[12, 24].map(v => ({value: v, label: String(v)}))} xLabel="" yLabel="" />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><D19FinalFrame /></div> : null}
		</>
	);
};
