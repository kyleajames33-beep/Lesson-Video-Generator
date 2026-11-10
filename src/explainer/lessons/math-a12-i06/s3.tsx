// Scenes 9 to 15: the memory aid (strips splitting, a trapezium as two averaged rectangles), attempt 1 and its brief
// feedback, attempt 2 and its brief feedback, the bath handoff (exported as I06FinalFrame, i07's opening) and the
// key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, GivensStrip, HandTag, KeyNotesBullets, MistakeCard, QuestionCard, RolesOn, SceneHeading, StudioPlot, StudioRiemannStrips, TaskStrip, fnPath} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AMB, AnswerBox, Attempt, BLUE, BoxCard, Chip, FramedCard, GREY, Line, MiniPlot, PI, PLabel, QAxes, RED, V, VIOLET, rate} from './parts';

const AidMain: React.FC = () => <>Strip = rate × width. Add the strips, then thin them.</>;
const WIN = {x: [-0.1, 1.75] as [number, number], y: [-0.08, 1.15] as [number, number]};

// ---------- 9. memory aid ----------
export const S09: React.FC = () => {
	const f = useCurrentFrame();
	const k = K9;
	return (
		<>
			<SceneHeading text="One line to keep" at={4} size={56} />
			<FramedCard x={60} y={150} w={1800} h={810} />
			<div style={{position: 'absolute', left: 110, top: 172, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: '#4f4840'}}>Memory aid</div>
			<div style={{position: 'absolute', left: 360, top: 160, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: INK}}><AidMain /></div>
			<StudioRiemannStrips x={100} y={270} width={840} height={480} window={WIN} fn={rate} a={0} b={PI / 2} nKeys={[{frame: -1000, value: 4}, {frame: k.thinner, value: 8}]} curveColor={VIOLET} xTicks={[{value: PI / 2, label: 'π/2'}]} yTicks={[1]} xLabel="x" yLabel="rate" at={-30} />
			<StudioRiemannStrips x={980} y={270} width={840} height={480} window={WIN} fn={rate} a={0} b={PI / 2} n={2} rule="trapezium" curveColor={VIOLET} xTicks={[{value: PI / 2, label: 'π/2'}]} yTicks={[1]} xLabel="x" yLabel="rate" at={-30}>
				{m => {const w = PI / 4, a = m.p(w, Math.cos(w)), b = m.p(2 * w, Math.cos(w)), z = m.p(2 * w, 0), d = m.p(w, 0), c = m.p(2 * w, 0); return <>
					<path d={`M${d[0]},${d[1]} V${a[1]} H${b[0]} V${z[1]}`} stroke="#c47a00" strokeWidth={4} fill="none" />
					<path d={`M${d[0]},${d[1]} H${c[0]}`} stroke="#6f675b" strokeWidth={4} fill="none" strokeDasharray="10 8" />
				</>;}}
			</StudioRiemannStrips>
			<div style={{position: 'absolute', left: 110, top: 770, width: 820, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, background: prog(f, k.each, 10) * (1 - prog(f, k.thinner, 10)) > 0.01 ? 'rgba(207,232,228,0.9)' : undefined, borderRadius: 12}}>one strip ≈ the change in that stretch</div>
			<div style={{position: 'absolute', left: 990, top: 770, width: 820, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}>trapezium = average of left and right</div>
			<Chip x={110} y={860} at={-30} size={36} color={AMB}>the storm: the sums settle on 1 cm</Chip>
			<HandTag x={1000} y={900} text="thinner strips: a better estimate" at={k.thinner} size={42} color="#1f6f66" />
		</>
	);
};

// ---------- 10. attempt 1 ----------
const Q1: React.FC = () => <div>Water flows into a tank at r(x) = 8 − x² litres per minute, where x is the time in minutes, 0 ≤ x ≤ 2. (a) Use four rectangles of equal width, with heights at their left endpoints, to estimate the volume. (b) Is your estimate an overestimate or an underestimate? Give a reason.</div>;
export const S10: React.FC = () => (
	<Attempt hold={hold('scene-10')} pauseAt={K10.pause} top={540} size={40} given={[<>r(x) = <V>8 − x²</V> L/min</>, <>0 ≤ x ≤ 2, 4 left rectangles</>]}
		picture={<QAxes w={820} h={400} x0={0} x1={2} y0={-0.5} y1={8} ticks={[1, 2]} tags={['rate (L/min)', 'over or under?']} />}>
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
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><div>Tank: r(x) = 8 − x² L/min, 0 ≤ x ≤ 2. Four left rectangles: the volume? Over or under?</div></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'r(x) = 8 − x²', role: 'gradient', at: 6}, {content: '0 ≤ x ≤ 2', at: 10}, {content: '4 left rectangles', at: 14}]} />
			<Line x={96} y={330} at={k.dx} size={46}>Δx = (2 − 0)/4 = 0.5</Line>
			<Line x={96} y={420} at={k.heights} size={42}>left heights: <V>8, 7.75, 7, 5.75</V><span style={{opacity: prog(f, k.add, 10)}}>; sum 28.5</span></Line>
			<AnswerBox x={96} y={510} at={k.times} size={50}>0.5 × 28.5 = 14.25 L</AnswerBox>
			<Line x={96} y={630} at={k.falls} size={40}>rate falls: each left height is the biggest<span style={{opacity: prog(f, k.over, 10)}}>, so over</span></Line>
			<MistakeCard x={96} y={730} w={960} at={k.wrong} size={44} wrong={<>28.5 L</>} caption="heights only: no width" />
			<StudioRiemannStrips x={1100} y={330} width={790} height={630} window={{x: [-0.1, 2.15], y: [-0.4, 8.6]}} fn={x => 8 - x * x} a={0} b={2} n={4} rule="left" slivers={{at: k.falls}} curveColor={VIOLET} xTicks={[0.5, 1, 1.5, 2]} yTicks={[2, 4, 6, 8]} xLabel="x (min)" yLabel="r (L/min)" at={-30}>
				{m => <PLabel p={m.p(0.05, 2.2)} text="rate falls: over" color="#7a4600" size={40} hand o={prog(f, k.falls, 12)} />}
			</StudioRiemannStrips>
		</>
	);
};

// ---------- 12. attempt 2 ----------
const PTS: [number, number][] = [[0, 0], [2, 6], [4, 10]];
const DotsPic: React.FC = () => (
	<div style={{position: 'relative', width: 820, height: 400}}>
		<MiniPlot x={0} y={0} w={820} h={400} win={{x: [-0.3, 4.4], y: [-1, 11.5]}} xTicks={[2, 4]} yTicks={[5, 10]} xLabel="t (s)" yLabel="v (m/s)" curves={[]}>
			{m => <>{PTS.map(([t, v]) => {const p = m.p(t, v); return <circle key={t} cx={p[0]} cy={p[1]} r={13} fill={VIOLET} stroke={CARD} strokeWidth={4} />;})}</>}
		</MiniPlot>
	</div>
);
const Q2: React.FC = () => <div>A cyclist&apos;s speed is recorded every 2 seconds. t (s): 0, 2, 4.  v (m/s): 0, 6, 10. Use two trapezia to estimate the distance travelled in the first 4 seconds.</div>;
export const S12: React.FC = () => (
	<Attempt hold={hold('scene-12')} pauseAt={K12.pause} heading="Last one" top={500} size={42} given={[<>t (s): 0, 2, 4</>, <>v (m/s): <V>0, 6, 10</V></>]} picture={<DotsPic />}>
		<Q2 />
	</Attempt>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const f = useCurrentFrame();
	const pulse = 1 + 0.4 * Math.max(0, Math.sin(Math.max(0, f - k.uses) * 0.3)) * (f >= k.uses && f < k.uses + 60 ? 1 : 0);
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><div>Cyclist: v = 0, 6, 10 m/s at t = 0, 2, 4 s. Two trapezia: the distance?</div></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'every 2 s', at: 6}, {content: 'v: 0, 6, 10', role: 'gradient', at: 12}]} />
			<Line x={96} y={330} at={k.each} size={46}>width 2 s</Line>
			<Line x={96} y={420} at={k.first} size={46}>2 × (0 + 6)/2 = 6 m</Line>
			<Line x={96} y={510} at={k.second} size={46}>2 × (6 + 10)/2 = 16 m</Line>
			<AnswerBox x={96} y={610} at={k.so} size={52}>6 + 16 = 22 m</AnswerBox>
			<MistakeCard x={96} y={720} w={960} at={k.so + 10} size={44} wrong={<>4 × (0 + 10)/2 = 20 m</>} caption="one wide trapezium skips the 6 m/s reading" />
			<MiniPlot x={1100} y={330} w={790} h={630} win={{x: [-0.3, 4.4], y: [-1, 11.5]}} xTicks={[2, 4]} yTicks={[5, 10]} xLabel="t (s)" yLabel="v (m/s)" curves={[]}>
				{m => {const P = PTS.map(([t, v]) => m.p(t, v)), Z = PTS.map(([t]) => m.p(t, 0)); const o1 = prog(f, k.first, 12), o2 = prog(f, k.second, 12), ow = prog(f, k.wrong, 12); return <>
					<path d={`M${Z[0][0]},${Z[0][1]} L${P[0][0]},${P[0][1]} L${P[1][0]},${P[1][1]} L${Z[1][0]},${Z[1][1]} Z`} fill="#dceaf7" stroke={BLUE} strokeWidth={4} opacity={o1} />
					<path d={`M${Z[1][0]},${Z[1][1]} L${P[1][0]},${P[1][1]} L${P[2][0]},${P[2][1]} L${Z[2][0]},${Z[2][1]} Z`} fill="#dceaf7" stroke={BLUE} strokeWidth={4} opacity={o2} />
					<line x1={P[0][0]} y1={P[0][1]} x2={P[2][0]} y2={P[2][1]} stroke={RED} strokeWidth={5} strokeDasharray="14 10" opacity={ow} />
					{P.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={13 * (i === 1 ? pulse : 1)} fill={VIOLET} stroke={CARD} strokeWidth={4} />)}
					<PLabel p={m.p(0.5, 2)} text="6 m" size={40} o={o1} />
					<PLabel p={m.p(2.6, 4)} text="16 m" size={40} o={o2} />
					<PLabel p={m.p(0.1, 10.6)} text="slip: one wide trapezium" color={RED} size={36} o={ow} />
				</>;}}
			</MiniPlot>
		</>
	);
};

// ---------- 14. handoff ----------
const net = (t: number) => 12 - 2 * t;
const I06Board: React.FC<{headAt: number; plotAt: number; rectsAt: number; afterAt: number; ringAt: number}> = ({headAt, plotAt, rectsAt, afterAt, ringAt}) => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Next: a rate below zero" at={headAt} size={56} />
			<StudioPlot x={40} y={150} width={1250} height={810} window={{x: [-0.4, 8.6], y: [-4.6, 13.4]}} xTicks={[2, 4, 6, 8]} yTicks={[-4, 4, 8, 12]} xLabel="time t (min)" yLabel="net flow (L/min)" at={plotAt}>
				{m => <>
					{Array.from({length: 8}, (_, i) => {const h = net(i); const o = prog(f, rectsAt + i * 8, 8); const a = m.p(i, Math.max(0, h)), b = m.p(i + 1, Math.min(0, h)); return <rect key={i} x={a[0]} y={a[1]} width={b[0] - a[0]} height={Math.max(3, b[1] - a[1])} fill="#cfe8e4" stroke="#1f6f66" strokeWidth={3} opacity={o} />;})}
					<g clipPath={m.clip}><path d={fnPath(m, net, 0, 8)} stroke={VIOLET} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
					{[0, 8].map(X => {const p = m.p(X, net(X)); return <circle key={X} cx={p[0]} cy={p[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} />;})}
					{(() => {const c = m.p(7.5, -1); return <g opacity={prog(f, ringAt, 12)}><ellipse cx={c[0]} cy={c[1]} rx={86} ry={70} fill="none" stroke={AMB} strokeWidth={6} /><text x={c[0] + 96} y={c[1] + 22} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 72, fill: '#7a4600'}}>?</text></g>;})()}
					<PLabel p={m.p(3.2, 11.6)} text="net flow = 12 − 2t" color={VIOLET} size={44} />
					<PLabel p={m.p(5.2, -3.2)} text="negative after 6 min" color={RED} size={40} hand o={prog(f, afterAt, 12)} />
				</>}
			</StudioPlot>
			<Chip x={1340} y={180} at={plotAt} size={46} color={AMB}>Next: a rate below zero</Chip>
			<BoxCard x={1340} y={300} w={540} at={plotAt} size={38} title="a bath, plug out">net flow = tap in − drain out, in L/min, over 8 minutes</BoxCard>
			<BoxCard x={1340} y={520} w={540} at={ringAt} size={38} border={AMB}>What does a strip below the axis mean?</BoxCard>
			<HandTag x={1350} y={760} text="last video: rectangles and trapezia" at={headAt} size={38} color={GREY} />
			<div style={{position: 'absolute', left: 1350, top: 800, width: 520, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, lineHeight: 1.2, color: '#4f4840', opacity: prog(f, headAt, 12)}}>strip = rate × width; add the strips, then thin them</div>
		</>
	);
};
/** i06's final frame (i07 opens on it). */
export const I06FinalFrame: React.FC = () => <I06Board headAt={-300} plotAt={-300} rectsAt={-300} afterAt={-300} ringAt={-300} />;
export const S14: React.FC = () => {
	const f = useCurrentFrame();
	const k = K14;
	const sw = prog(f, k.bath, 16);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Thin strips turn a rate into a total" at={-30} size={56} />
				<StudioRiemannStrips x={40} y={150} width={1250} height={810} window={WIN} fn={rate} a={0} b={PI / 2} n={32} curveColor={VIOLET} xTicks={[{value: PI / 4, label: 'π/4'}, {value: PI / 2, label: 'π/2'}]} yTicks={[0.5, 1]} xLabel="time x (hours)" yLabel="rain rate (cm per hour)" at={-30} />
				<BoxCard x={1340} y={180} w={540} at={-30} size={40} border="#1f6f66">strip = rate × width; the sum estimates the total change</BoxCard>
				<BoxCard x={1340} y={420} w={540} at={k.but} size={40} border={RED}>but every rate so far stayed positive</BoxCard>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><I06Board headAt={k.bath} plotAt={k.bath} rectsAt={k.net} afterAt={k.after} ringAt={k.what} /></div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const f = useCurrentFrame();
	const items = [
		{content: <>One strip: rate × width ≈ the change over that strip.</>, at: 10},
		{content: <>Σ <V>f(x)</V>Δx estimates the total change; Δx = (b − a)/n.</>, at: 22},
		{content: <>Falling rate: left heights over, right heights under.</>, at: 34},
		{content: <>Trapezium = average of left and right. Thinner is better.</>, at: 46},
		{content: <>Continuous f ≥ 0: the sums approximate the area.</>, at: 58},
	];
	const back = prog(f, Math.max(1350, dur('scene-15')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={K15.pause} size={42} color="#8a5a12" anchor="end" />
				<KeyNotesBullets x={96} y={230} w={1040} items={items} size={38} gap={50} />
				<FramedCard x={1180} y={196} w={680} h={770} at={16} />
				<div style={{position: 'absolute', left: 1220, top: 214, opacity: prog(f, 16, 14), width: 610}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: '#4f4840'}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.08, color: INK, marginTop: 4}}><AidMain /></div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, lineHeight: 1.25, color: INK, marginTop: 10}}>Trapezium = average of the left and right rectangles.</div>
				</div>
				{f >= 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, 16, 14)}}>
					<StudioRiemannStrips x={1210} y={580} width={620} height={360} window={WIN} fn={rate} a={0} b={PI / 2} n={8} curveColor={VIOLET} xTicks={[{value: PI / 2, label: 'π/2'}]} yTicks={[1]} xLabel="x" yLabel="rain rate" at={-30} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I06FinalFrame /></div> : null}
		</>
	);
};
