// Scenes 10 to 16: the memory card, attempt 1 (symmetry on x² sin x + 3) and its brief feedback, attempt 2 (the
// brick arch: trapezoidal rule on half, then double) and its brief feedback, the handoff (exported as I12FinalFrame,
// i13's opening: the power graph P = 4 sin(πt/12); the air-conditioner plate is not delivered yet, so it is left out)
// and the key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, GivensStrip, HandTag, KeyNotesBullets, LiveReadoutBoard, MistakeCard, QuestionCard, RiemannLayer, RolesOn, SceneHeading, StudioCoefficientLedger, StudioPlot, TaskStrip, fnPath, smooth} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15, K16} from './cuemap';
import {dur, hold} from './common';
import {ABLUE, AnswerBox, Attempt, BPlot, BoxCard, Chip, FramedCard, GRAD, GardenRig, Hand, Int, PLabel, Row, SOFT, TEAL, g, recip} from './parts';

const PI = Math.PI;
const AidA = 'Odd cancels, even doubles (only from −a to a).';
const AidB = 'Trapezoidal rule: ends once, insides twice.';

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	return (
		<>
			<SceneHeading text="Two shortcuts to hold" at={4} size={56} />
			<FramedCard x={60} y={150} w={1800} h={820} />
			<div style={{position: 'absolute', left: 110, top: 170, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: SOFT}}>Memory aid</div>
			<div style={{position: 'absolute', left: 110, top: 225, opacity: prog(fr, k.odd, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, color: INK}}>{AidA}</div>
			<GardenRig x={110} y={330} w={760} soil={1} tags={0} at={k.odd} />
			<StudioPlot x={960} y={330} width={860} height={300} window={{x: [-1.8, 1.8], y: [-0.1, 1.15]}} xTicks={[]} yTicks={[]} xLabel="" yLabel="even: the two halves match" at={k.odd + 10}>
				{(m: PlotMap) => <><AreaFillLayer m={m} fn={Math.cos} a={-PI / 2} to={PI / 2} signed /><g clipPath={m.clip}><path d={fnPath(m, Math.cos, -1.8, 1.8)} stroke={ABLUE} strokeWidth={6} fill="none" /></g><line x1={m.p(0, 0)[0]} x2={m.p(0, 0)[0]} y1={m.box.top} y2={m.box.top + m.box.height} stroke={INK} strokeWidth={3} strokeDasharray="10 8" /></>}
			</StudioPlot>
			<div style={{position: 'absolute', left: 110, top: 770, opacity: prog(fr, k.and, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, color: INK}}>{AidB}</div>
			<StudioCoefficientLedger x={1080} y={680} labels={['y0', 'y1', 'y2', 'y3', 'y4']} addAt={[-40, -30, -20, -10]} colW={140} size={34} at={k.and} />
		</>
	);
};

// ---------- 11. attempt 1 ----------
const AxisPic: React.FC = () => (
	<div style={{position: 'relative', width: 820, height: 360}}>
		<StudioPlot x={0} y={0} width={820} height={360} window={{x: [-4, 4], y: [-1, 3]}} xTicks={[{value: -PI, label: '−π'}, {value: 0, label: '0'}, {value: PI, label: 'π'}]} yTicks={[]} xLabel="x" yLabel="" bare={false} at={-30}>
			{(m: PlotMap) => {const [a, ay] = m.p(-PI, 0), [b] = m.p(PI, 0), [c] = m.p(0, 0); return <>
				<path d={`M${a},${ay - 30} V${ay - 60} H${b} V${ay - 30}`} stroke="#9c5a00" strokeWidth={5} fill="none" />
				<text x={c} y={ay - 90} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: INK}}>x² sin x + 3</text>
			</>;}}
		</StudioPlot>
	</div>
);
export const S11: React.FC = () => (
	<Attempt hold={hold('scene-11')} pauseAt={K11.pause} top={430} size={52} given={[<>x² sin x + 3</>, <>from −π to π</>]} picture={<AxisPic />}>
		<div>Use symmetry to evaluate <Int lo="−π" hi="π">(x² sin x + 3)</Int>.</div>
	</Attempt>
);

// ---------- 12. feedback 1 ----------
const RP = {x: 1100, y: 330, w: 790, h: 630};
const a1 = (x: number) => x * x * Math.sin(x) + 3;
export const S12: React.FC = () => {
	const k = K12;
	const fr = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={fr >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><div>Use symmetry: the integral of x² sin x + 3 from −π to π.</div></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'x² sin x + 3', role: 'a', at: 6}, {content: 'from −π to π (symmetric)', at: 10}]} />
			<Row x={96} y={310} at={k.swap} size={44} color={GRAD}>(−x)² sin(−x) = −x² sin x: odd</Row>
			<Row x={96} y={395} at={k.odd + 30} size={44}><Int lo="−π" hi="π"><span style={{color: GRAD}}>x² sin x</span></Int> = 0</Row>
			<Row x={96} y={490} at={k.three} size={44}><Int lo="−π" hi="π"><span style={{color: TEAL}}>3</span></Int> = 2<Int lo="0" hi="π"><span style={{color: TEAL}}>3</span></Int> = 2 × 3π</Row>
			<AnswerBox x={96} y={600} at={k.answer} size={54}>= 6π</AnswerBox>
			<BoxCard x={96} y={730} w={960} at={-30} out={k.zero - 6} size={40} title="plan">split into odd and even parts; the interval is symmetric</BoxCard>
			<MistakeCard x={96} y={730} w={960} at={k.zero} size={48} wrong={<>0</>} caption="only the odd part cancels; the 3 stays" />
			<BPlot x={RP.x} y={RP.y} w={RP.w} h={RP.h} win={{x: [-3.6, 3.6], y: [-6, 12]}} fn={a1} xTicks={[{value: -PI, label: '−π'}, {value: PI, label: 'π'}]} yTicks={[3]} yLabel="y = x² sin x + 3"
				under={m => <AreaFillLayer m={m} fn={a1} a={-PI} to={PI} signed />}
				kids={m => <><g clipPath={m.clip}><path d={fnPath(m, () => 3, -3.6, 3.6)} stroke={TEAL} strokeWidth={4} strokeDasharray="12 9" fill="none" /></g><PLabel p={m.p(-3.4, 9)} text="the 3 lifts it: 2 × 3π" color={TEAL} size={36} hand o={prog(fr, k.three, 12)} /></>} />
		</>
	);
};

// ---------- 13. attempt 2 ----------
const DIST = [0, 0.5, 1, 1.5, 2], HTS = [4, 3.5, 3, 2, 0];
const archY = (x: number) => {const i = Math.min(3, Math.floor(x / 0.5)); const u = (x - i * 0.5) / 0.5; return HTS[i] + (HTS[i + 1] - HTS[i]) * u;};
const HalfArch: React.FC<{w?: number; h?: number; fill?: number; mirror?: number}> = ({w = 820, h = 400, fill = 0, mirror = 0}) => {
	const X = (v: number) => w / 2 + 10 + v * Math.min(170, (w - 60) / 4.8), Yp = (v: number) => h - 50 - v * Math.min(110, (h - 110) / 4.6);
	const pts = DIST.map((d, i) => [X(d), Yp(HTS[i])]);
	const path = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ');
	const mpath = pts.map((p, i) => `${i ? 'L' : 'M'}${2 * X(0) - p[0]},${p[1]}`).join(' ');
	return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible'}}>
		{fill > 0.01 ? <path d={`${path} L${X(2)},${Yp(0)} L${X(0)},${Yp(0)} Z`} fill="#d6eeee" opacity={fill} /> : null}
		{mirror > 0.01 ? <path d={`${mpath} L${2 * X(0) - X(2)},${Yp(0)} L${X(0)},${Yp(0)} Z`} fill="#d6eeee" stroke="#1f8a8f" strokeWidth={3} strokeDasharray="10 8" opacity={mirror} /> : null}
		<line x1={X(-2.3)} x2={X(2.3)} y1={Yp(0)} y2={Yp(0)} stroke={INK} strokeWidth={4} />
		<line x1={X(0)} x2={X(0)} y1={Yp(4.6)} y2={Yp(0)} stroke={INK} strokeWidth={3} strokeDasharray="12 9" />
		{DIST.map((d, i) => <line key={d} x1={X(d)} x2={X(d)} y1={Yp(0)} y2={Yp(HTS[i])} stroke="#8a8378" strokeWidth={3} strokeDasharray="8 7" />)}
		<path d={path} stroke={INK} strokeWidth={6} fill="none" />
		<text x={X(0) + 10} y={Yp(4.6) + 6} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: SOFT}}>centre line</text>
	</svg>;
};
export const S13: React.FC = () => (
	<Attempt hold={hold('scene-13')} pauseAt={K13.pause} heading="Last one" top={560} size={36} given={[<>distance (m): 0, 0.5, 1, 1.5, 2</>, <>height h (m): 4, 3.5, 3, 2, 0</>]} picture={<HalfArch w={820} h={330} />}>
		<div>A brick arch is symmetric about its centre line. Its height h metres is measured every 0.5 m from the centre line out to one edge (table). Use the trapezoidal rule with all five readings, and symmetry, to estimate the area of the whole opening.</div>
	</Attempt>
);

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const k = K14;
	const fr = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={fr >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><div>Brick arch: heights 4, 3.5, 3, 2, 0 every 0.5 m from the centre. The whole opening?</div></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: '5 readings, 0.5 m apart', at: 6}, {content: 'symmetric arch', at: 10}]} />
			<Row x={96} y={300} at={k.five} size={46}>5 readings, 4 strips: h = 0.5</Row>
			<StudioCoefficientLedger x={96} y={360} labels={['4', '3.5', '3', '2', '0']} addAt={[k.end, k.inside, k.inside + 10, k.inside + 20]} colW={150} size={40} at={k.end - 10} />
			<Row x={96} y={565} at={k.end} size={44}>ends once: <span style={{color: TEAL}}>4, 0</span></Row>
			<Row x={96} y={630} at={k.inside} size={44}>insides twice: <span style={{color: '#9c5a00'}}>3.5 + 3 + 2 = 8.5</span></Row>
			<Row x={96} y={700} at={k.so} size={44}>half ≈ (0.5/2)[4 + 2(8.5) + 0] = 5.25</Row>
			<AnswerBox x={96} y={780} at={k.about} size={46}>whole ≈ 2 × 5.25 = 10.5 m²</AnswerBox>
			<MistakeCard x={96} y={890} w={960} at={k.wrong} size={38} wrong={<>6.25 m²</>} caption="inside readings not doubled" />
			<div style={{position: 'absolute', left: 1080, top: 300}}><HalfArch w={810} h={600} fill={prog(fr, k.so, 12)} mirror={prog(fr, k.even, 14)} /></div>
			<Hand x={1120} y={910} at={k.even} size={40} color={TEAL}>even: double the half</Hand>
		</>
	);
};

// ---------- 15. handoff ----------
const P = (t: number) => 4 * Math.sin((PI * t) / 12);
const I12Board: React.FC<{headAt: number; tagAt: number; chipAt: number}> = ({headAt, tagAt, chipAt}) => {
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Next: how much energy?" at={headAt} size={56} />
			<StudioPlot x={40} y={150} width={1100} height={800} window={{x: [-0.6, 12.8], y: [-0.5, 4.8]}} xTicks={[6, 12]} yTicks={[2, 4]} xLabel="time after 8 am, t (h)" yLabel="power P (kW)" at={headAt}>
				{(m: PlotMap) => <>
					<g clipPath={m.clip}><path d={fnPath(m, P, 0, 12)} stroke={ABLUE} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
					{[0, 12].map(t => {const [px, py] = m.p(t, P(t)); return <circle key={t} cx={px} cy={py} r={12} fill={ABLUE} stroke={CARD} strokeWidth={4} />;})}
					<PLabel p={m.p(3.6, 4.45)} text="P = 4 sin(πt/12)" color={ABLUE} size={44} o={prog(fr, tagAt, 12)} />
				</>}
			</StudioPlot>
			<BoxCard x={1190} y={180} w={690} at={headAt} size={40} title="a hot day">a home's air conditioner: its power from 8 am to 8 pm</BoxCard>
			<LiveReadoutBoard x={1190} y={380} width={690} at={headAt} inline size={48} labelSize={30} rows={[{label: 'power at 8 am', value: 0, digits: 0, unit: 'kW', role: 'a'}, {label: 'peak at 2 pm', value: 4, digits: 0, unit: 'kW', role: 'a'}]} />
			<Chip x={1190} y={610} at={chipAt} size={50} color="#d18f1f">Next: how much energy?</Chip>
			<div style={{position: 'absolute', left: 1740, top: 700, opacity: prog(fr, chipAt, 14), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 120, color: '#7a4600'}}>?</div>
			<Hand x={1200} y={740} at={chipAt} size={42} color={SOFT}>energy builds up from power over time</Hand>
		</>
	);
};
/** i12's final frame (i13 opens on it). */
export const I12FinalFrame: React.FC = () => <I12Board headAt={-300} tagAt={-300} chipAt={-300} />;
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K15;
	const sw = prog(fr, k.next, 16);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Three ways to find or check an integral" at={-30} size={56} />
				{[{t: 'symmetry', d: 'odd cancels, even doubles'}, {t: 'trapezoidal rule', d: 'ends once, insides twice'}, {t: 'online tool', d: 'check, then rewrite in course form'}].map((c, i) => <BoxCard key={c.t} x={60 + i * 610} y={170} w={580} at={10 + i * 30} size={40} title={c.t}>{c.d}</BoxCard>)}
				<GardenRig x={60} y={400} w={900} tags={1} />
				<BPlot x={1000} y={380} w={880} h={560} win={{x: [0.75, 3.25], y: [-0.08, 1.12]}} fn={recip} xTicks={[1, 3]} yTicks={[1]} xLabel="x" yLabel="y = 1/x" under={m => <RiemannLayer m={m} fn={recip} a={1} b={3} n={4} rule="trapezium" />} />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><I12Board headAt={k.next} tagAt={k.heres} chipAt={k.how} /></div> : null}
		</>
	);
};

// ---------- 16. key notes (238-I12-NOTES-FIT: left 58% at 38 px, six short lines) ----------
export const S16: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Odd, f(−x) = −f(x): <Int lo="−a" hi="a">f(x)</Int> = 0.</>, at: 10},
		{content: <>Even, f(−x) = f(x): <Int lo="−a" hi="a">f</Int> = 2<Int lo="0" hi="a">f</Int>.</>, at: 20},
		{content: <>Only from −a to a; signed, not area.</>, at: 30},
		{content: <>Trapezoidal: (h/2)[ends + 2 × insides].</>, at: 40},
		{content: <>n strips need n + 1 values. Concave up: over.</>, at: 50},
		{content: <>Tools: read log as ln, write ln|x| + C.</>, at: 60},
	];
	const back = prog(fr, Math.max(1350, dur('scene-16')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={K16.pause} size={42} color="#8a5a12" anchor="end" />
				<KeyNotesBullets x={96} y={220} w={1060} items={items} size={38} gap={52} />
				<FramedCard x={1200} y={196} w={680} h={770} at={16} />
				<div style={{position: 'absolute', left: 1240, top: 214, opacity: prog(fr, 16, 14), width: 610}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, lineHeight: 1.08, color: INK, marginTop: 4}}>{AidA}</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, lineHeight: 1.08, color: INK, marginTop: 14}}>{AidB}</div>
				</div>
				{fr >= 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 16, 14)}}><StudioCoefficientLedger x={1250} y={680} labels={['y0', 'y1', 'y2', 'y3', 'y4']} addAt={[-40, -30, -20, -10]} colW={120} size={34} at={-30} /></div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I12FinalFrame /></div> : null}
		</>
	);
};
