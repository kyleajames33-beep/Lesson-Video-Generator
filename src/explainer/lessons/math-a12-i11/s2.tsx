// Scenes 6 to 13: the memory aid, any base (log base two against the y-axis), attempt 1 and its brief feedback,
// attempt 2 and its brief feedback, the handoff (i12's opening frame, built on i12's own stand-in so the join is
// exact) and the key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, Card, CardTitle, EquationStrip, GivensStrip, HandTag, KeyNotesBullets, MarkSpan, MistakeCard, QuestionCard, RolesOn, SceneHeading, StudioPlot, TaskStrip, fnPath, kf, smooth, usePlatePreload, vis} from '../../math/studio';
import {I11FinalFrameStandIn} from '../math-a12-i12/s1';
import {ABLUE, Chip as Chip12, Hand, Int as Int12, Row, SOFT} from '../math-a12-i12/parts';
import {K6, K7, K8, K9, K10, K11, K12, K13} from './cuemap';
import {dur, hold} from './common';
import {AMB, AMB_INK, Attempt, BLUE, BoxCard, CUTAWAY, Chip, FramedCard, GREY, Int, MiniPlot, Note, PLabel, PoolCut, RED_INK, RED_SOFT, SegRow, Sideways, TEAL, TEAL_SOFT, Tl, VIO} from './parts';

export const AID11a = 'Sideways strips: right is +, left is −.';
export const AID11b = 'Reflect in y = x: swap x and y, keep the area.';
const log2 = (x: number) => Math.log(Math.max(1e-6, x)) / Math.LN2;

// ---------- 6. memory aid ----------
const Icon1: React.FC = () => <svg width={170} height={140} viewBox="0 0 170 140"><line x1={85} y1={10} x2={85} y2={130} stroke={INK} strokeWidth={4} /><rect x={85} y={30} width={70} height={30} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={3} /><rect x={25} y={80} width={60} height={30} fill={RED_SOFT} stroke={RED_INK} strokeWidth={3} /><text x={120} y={24} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: TEAL}}>+</text><text x={55} y={130} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: RED_INK}}>−</text></svg>;
const Icon2: React.FC = () => <svg width={170} height={140} viewBox="0 0 170 140"><line x1={15} y1={130} x2={155} y2={10} stroke={VIO} strokeWidth={4} strokeDasharray="10 8" /><rect x={30} y={70} width={40} height={50} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={3} /><rect x={90} y={20} width={50} height={40} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={3} opacity={0.7} /></svg>;
export const S06: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6;
	return (
		<>
			<SceneHeading text="The pair to remember" at={4} size={52} />
			<FramedCard x={60} y={150} w={1800} h={830} />
			<div style={{position: 'absolute', left: 110, top: 168, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: SOFT}}>Memory aid</div>
			<div style={{position: 'absolute', left: 110, top: 250, display: 'flex', gap: 30, alignItems: 'center', opacity: prog(f, k.sideways - 6, 14)}}><Icon1 /><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: INK}}>{AID11a}</div></div>
			<div style={{position: 'absolute', left: 110, top: 430, display: 'flex', gap: 30, alignItems: 'center', opacity: prog(f, k.reflecting - 6, 14)}}><Icon2 /><div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: INK}}>{AID11b}</div></div>
			<PoolCut x={110} y={620} w={760} layers={5} />
			<div style={{position: 'absolute', left: 920, top: 660, width: 880, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>∫ x dy: write x in terms of y,<br />use y-limits (heights).<br /><span style={{color: '#2f6f8f'}}>the pool's water: e − 1 m²; the ramp: 1 m²</span></div>
		</>
	);
};

// ---------- 7. any base: log base two ----------
const RX7 = 1080;
const W7 = {x: [-0.5, 8.5] as [number, number], y: [-0.5, 3.5] as [number, number]};
const Log2Plot: React.FC<{x: number; y: number; w: number; h: number; region?: number; strips?: number; rect?: number; under?: number; at?: number; children?: React.ReactNode}> = ({x, y, w, h, region = 1, strips = 0, rect = 0, under = 0, at = -30}) => (
	<StudioPlot x={x} y={y} width={w} height={h} window={W7} xTicks={[1, 2, 4, 8]} yTicks={[1, 2, 3]} at={at}>
		{m => {const N = 60; let d = ''; for (let i = 0; i <= N; i++) {const yy = (3 * i) / N; const [px, py] = m.p(2 ** yy, yy); d += `${i ? 'L' : 'M'}${px},${py} `;} const [o3x, o3y] = m.p(0, 3), [o0x, o0y] = m.p(0, 0); const [r1x, r1y] = m.p(8, 0); return <>
			<path d={`${d} L${o3x},${o3y} L${o0x},${o0y} Z`} fill={TEAL_SOFT} opacity={region} />
			{strips > 0.001 ? <g opacity={strips}><Sideways m={m} g={yy => 2 ** yy} c={0} d={3} n={6} fill={TEAL_SOFT} /></g> : null}
			{under > 0.001 ? <g clipPath={m.clip}><path d={`${fnPath(m, log2, 1, 8)} L${r1x},${r1y} Z`} fill="#f3d9a6" stroke={AMB} strokeWidth={5} opacity={under} /></g> : null}
			{rect > 0.001 ? <rect x={o3x} y={o3y} width={r1x - o3x} height={r1y - o3y} fill="none" stroke={INK} strokeWidth={5} strokeDasharray="14 9" opacity={rect} /> : null}
			{[0, 3].map(Y => <path key={Y} d={`M${m.p(-0.5, Y).join(',')} L${m.p(8.5, Y).join(',')}`} stroke={AMB} strokeWidth={3} strokeDasharray="10 9" opacity={0.8} />)}
			<g clipPath={m.clip}><path d={fnPath(m, log2, 0.13, 8.5)} stroke={BLUE} strokeWidth={6.5} fill="none" /></g>
			<PLabel p={m.p(4.6, 1.6)} text="y = log₂ x" color={BLUE} size={40} />
		</>;}}
	</StudioPlot>
);
export const S07: React.FC = () => {
	const f = useCurrentFrame();
	const k = K7;
	return (
		<>
			<TaskStrip text="Any base: log base two" at={4} size={52} />
			<EquationStrip at={k.find - 10} y={160} size={40}>Find the area bounded by y = log₂ x, the y-axis and the lines y = 0 and y = 3.</EquationStrip>
			<Log2Plot x={30} y={260} w={1020} h={690} strips={vis(f, k.find + 40, k.area, 14)} />
			<Card x={RX7} y={270} w={800} at={20} out={k.so - 8} pad="12px 26px 14px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK, lineHeight: 1.35}}>1. write x in terms of y<br />2. integrate with y-limits</div>
			</Card>
			<Card x={RX7} y={430} w={800} at={k.log - 10} out={k.from - 10} pad="14px 26px 16px">
				<CardTitle>log₂ x: the power of 2 that gives x</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, lineHeight: 1.4}}>log₂ 8 = 3, because 2³ = 8<br /><span style={{opacity: prog(f, k.so, 12)}}>so y = log₂ x means x = 2ʸ</span></div>
			</Card>
			<SegRow x={RX7} y={280} size={48} segs={[{c: <>y = log₂ x  ⟺  <Tl>x = 2ʸ</Tl></>, at: k.so}]} />
			<SegRow x={RX7} y={370} size={48} segs={[{c: <>Area = <Int lo="0" hi="3" v="y" color={TEAL}>2ʸ</Int> = [2ʸ/ln 2]₀³</>, at: k.from + 30}]} />
			<Note x={RX7} y={458} at={k.from} size={32}>earlier video: ∫ aˣ dx = aˣ/ln a + C<br />check: d/dy (2ʸ/ln 2) = 2ʸ</Note>
			<SegRow x={RX7} y={572} size={48} segs={[{c: <>= 8/ln 2 − 1/ln 2</>, at: k.area + 20}]} />
			<SegRow x={RX7} y={660} size={52} segs={[{c: <>= 7/ln 2</>, at: k.seven}, {c: <span style={{fontSize: 34, color: '#4f4840'}}>≈ 10.1</span>, at: k.about}]} answerAt={k.seven + 6} />
			<MiniPlot x={RX7} y={750} w={800} h={270} win={{x: [-0.3, 3.3], y: [-0.5, 9]}} xTicks={[1, 2, 3]} yTicks={[4, 8]} at={k.so + 20} curves={[{fn: x => 2 ** x, from: -0.3, to: 3.2, color: BLUE, width: 5}]}>
				{m => <><AreaFillLayer m={m} fn={x => 2 ** x} a={0} to={3} color={TEAL_SOFT} /><PLabel p={m.p(0.1, 7.6)} text="reflected in y = x: under y = 2ˣ, same area" size={32} /></>}
			</MiniPlot>
		</>
	);
};

// ---------- question pictures ----------
const QAx: React.FC<{lines: {y?: number; x?: number; label: string}[]; win: {x: [number, number]; y: [number, number]}; thickY?: boolean}> = ({lines, win, thickY = false}) => {
	const w = 820, h = 540, L = 70, R = w - 40, T = 30, B = h - 60;
	const X = (v: number) => L + ((v - win.x[0]) / (win.x[1] - win.x[0])) * (R - L), Y = (v: number) => B - ((v - win.y[0]) / (win.y[1] - win.y[0])) * (B - T);
	return <div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0}}>
			<line x1={L} x2={R + 10} y1={Y(0)} y2={Y(0)} stroke={INK} strokeWidth={thickY ? 4 : 9} />
			<line x1={X(0)} x2={X(0)} y1={B + 6} y2={T - 6} stroke={INK} strokeWidth={thickY ? 9 : 4} />
			{lines.map((l, i) => l.y !== undefined ? <g key={i}><line x1={L} x2={R} y1={Y(l.y)} y2={Y(l.y)} stroke={AMB} strokeWidth={4} strokeDasharray="12 9" /><text x={R - 4} y={Y(l.y) - 12} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: AMB_INK}}>{l.label}</text></g>
				: <g key={i}><line x1={X(l.x!)} x2={X(l.x!)} y1={T} y2={B} stroke={AMB} strokeWidth={4} strokeDasharray="12 9" /><text x={X(l.x!) - 12} y={T + 30} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: AMB_INK}}>{l.label}</text></g>)}
			<text x={R + 6} y={Y(0) + 36} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>x</text>
			<text x={X(0) + 14} y={T + 22} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>y</text>
			<text x={thickY ? R - 10 : (L + R) / 2} y={(T + B) / 2 + 16} textAnchor={thickY ? 'end' : 'middle'} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, fill: SOFT}}>sketch first</text>
		</svg>
	</div>;
};

// ---------- 8. attempt 1 ----------
const Q1: React.FC<{u?: number}> = ({u}) => <div>Find the area of the region bounded by the curve {u !== undefined ? <MarkSpan kind="underline" at={u}>x = 3y − y²</MarkSpan> : 'x = 3y − y²'}, the y-axis and the lines y = 0 and y = 4.</div>;
export const S08: React.FC = () => (
	<Attempt hold={hold('scene-08')} pauseAt={K8.pause} top={470} size={46} given={['x = 3y − y²', 'the y-axis', 'y = 0 to y = 4']}
		picture={<QAx win={{x: [-3, 3.5], y: [-0.6, 4.6]}} lines={[{y: 0, label: 'y = 0'}, {y: 4, label: 'y = 4'}]} thickY />}>
		<Q1 />
	</Attempt>
);

// ---------- 9. feedback 1 ----------
const g9 = (y: number) => 3 * y - y * y;
export const S09: React.FC = () => {
	const k = K9;
	const f = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><Q1 u={k.meets} /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'x = 3y − y²', role: 'b', at: 6}, {content: 'y = 0 to y = 4', role: 'k', at: 12}]} />
			<SegRow x={96} y={320} size={44} segs={[{c: <>x = y(3 − y) = 0 at y = 0, y = 3</>, at: k.three}]} />
			<SegRow x={96} y={410} size={52} segs={[{c: <><Int lo="0" hi="3" v="y">(3y − y²)</Int> = 9/2</>, at: k.from1 + 40}]} />
			<SegRow x={96} y={510} size={52} segs={[{c: <><Int lo="3" hi="4" v="y">(3y − y²)</Int> = −11/6</>, at: k.from2 + 50}]} />
			<SegRow x={96} y={620} size={48} segs={[{c: <>area = 9/2 + 11/6 = 19/3</>, at: k.nineteen - 20}]} answerAt={k.nineteen} />
			<Card x={96} y={720} w={900} at={20} out={k.eight - 10} pad="12px 26px 14px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK, lineHeight: 1.35}}>1. where does x = 0?  2. each piece's sign<br />3. make each piece positive, then add</div>
			</Card>
			<MistakeCard x={96} y={730} w={900} at={k.eight} size={48} wrong={<>8/3</>} caption="signed: 9/2 − 11/6 lets the left piece subtract" />
			<StudioPlot x={1080} y={290} width={810} height={660} window={{x: [-2.5, 3], y: [-0.4, 4.4]}} xTicks={[-2, -1, 1, 2]} yTicks={[1, 2, 3, 4]} at={-30}>
				{m => {const curve = Array.from({length: 101}, (_, i) => {const y = (4 * i) / 100; const q = m.p(g9(y), y); return `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`;}).join(' '); return <>
					<g opacity={prog(f, k.from1, 14)}><Sideways m={m} g={g9} c={0} d={3} n={12} signed /></g>
					<g opacity={prog(f, k.from2, 14)}><Sideways m={m} g={g9} c={3} d={4} n={4} signed /></g>
					{[0, 4].map(Y => <path key={Y} d={`M${m.p(-2.5, Y).join(',')} L${m.p(3, Y).join(',')}`} stroke={AMB} strokeWidth={3} strokeDasharray="10 9" />)}
					<path d={curve} stroke={BLUE} strokeWidth={6} fill="none" />
					{(() => {const q = m.p(0, 3); return <circle cx={q[0]} cy={q[1]} r={20} fill="none" stroke={INK} strokeWidth={5} opacity={prog(f, k.three, 12)} />;})()}
					<PLabel p={m.p(0.5, 1.2)} text="+" color={TEAL} size={56} o={prog(f, k.from1 + 20, 12)} />
					<PLabel p={m.p(-1.6, 3.7)} text="−" color={RED_INK} size={56} o={prog(f, k.from2 + 20, 12)} />
				</>;}}
			</StudioPlot>
		</>
	);
};

// ---------- 10. attempt 2 ----------
const Q2: React.FC<{u?: number}> = ({u}) => <div>Find the exact area of the region bounded by y = log₂ x, the {u !== undefined ? <MarkSpan kind="underline" at={u}>x-axis</MarkSpan> : 'x-axis'} and the line x = 8.</div>;
export const S10: React.FC = () => (
	<Attempt hold={hold('scene-10')} pauseAt={K10.pause} heading="Last one" top={470} size={46} given={['y = log₂ x', 'the x-axis', 'x = 8']}
		picture={<QAx win={{x: [-0.6, 9], y: [-1, 4]}} lines={[{x: 8, label: 'x = 8'}]} />}>
		<Q2 />
	</Attempt>
);

// ---------- 11. feedback 2 ----------
export const S11: React.FC = () => {
	const k = K11;
	const f = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><Q2 u={k.meets} /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'y = log₂ x', role: 'b', at: 6}, {content: 'x-axis', at: 12}, {content: 'x = 8', at: 18}]} />
			<Card x={96} y={400 + 310 * smooth(prog(f, k.rect + 4, 20))} w={900} at={20} out={k.seven - 8} pad="14px 28px 16px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>1. where does the curve meet the x-axis?<br />2. the rectangle 0 to 8, 0 to 3<br />3. subtract the piece against the y-axis</div>
			</Card>
			<SegRow x={96} y={320} size={44} segs={[{c: <>log₂ 1 = 0,   log₂ 8 = 3</>, at: k.three}]} />
			<SegRow x={96} y={410} size={46} segs={[{c: <>rectangle:  8 × 3 = 24</>, at: k.rect + 40}]} />
			<SegRow x={96} y={500} size={46} segs={[{c: <>against the y-axis:  7/ln 2</>, at: k.piece + 30}]} />
			<SegRow x={96} y={600} size={50} segs={[{c: <>area = 24 − 7/ln 2</>, at: k.so + 20}, {c: <span style={{fontSize: 34, color: '#4f4840'}}>≈ 13.90</span>, at: k.about}]} answerAt={k.so + 26} />
			<MistakeCard x={96} y={720} w={900} at={k.seven} size={48} wrong={<>7/ln 2</>} caption="that's the region against the y-axis" />
			<Log2Plot x={1060} y={280} w={840} h={700} region={0.3 + 0.7 * vis(f, k.piece, k.so, 10)} rect={prog(f, k.rect, 12)} under={prog(f, k.so, 12)} />
		</>
	);
};

// ---------- 12. handoff (i12's opening frame) ----------
const cube = (x: number) => x * x * x;
export const S12: React.FC = () => {
	const f = useCurrentFrame();
	const k = K12;
	const recap = 1 - prog(f, k.next - 6, 14);
	if (f >= dur('scene-12') - 2) return <I11FinalFrameStandIn />;
	return (
		<>
			{recap > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: recap}}>
				<SceneHeading text="Area using y" at={4} size={52} />
				<div style={{position: 'absolute', left: 96, top: 160, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: INK, lineHeight: 1.3}}>{AID11a}<br />{AID11b}</div>
				<PoolCut x={96} y={340} w={1100} layers={5} />
				<BoxCard x={1250} y={400} w={620} at={10} size={44} title="the pool">water: e − 1 m²<br />ramp: 1 m²</BoxCard>
				<BoxCard x={96} y={790} w={1100} at={20} size={42} title="sideways strips">area = <Int lo="c" hi="d" v="y" color={TEAL}>x</Int>: write x in terms of y, use y-limits</BoxCard>
				<BoxCard x={1250} y={640} w={620} at={30} size={40} title="y = log₂ x">against the y-axis: 7/ln 2<br />under it, 1 to 8: 24 − 7/ln 2</BoxCard>
			</div> : null}
			{f >= k.next - 6 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, k.next - 6, 14)}}>
				<SceneHeading text="Next: symmetry" at={k.next} size={56} />
				<StudioPlot x={40} y={150} width={1060} height={800} window={{x: [-2.5, 2.5], y: [-9, 9]}} xTicks={[-2, -1, 1, 2]} yTicks={[-8, 8]} xLabel="x" yLabel="y = x³" at={k.heres - 10}>
					{m => {const pulse = vis(f, k.the + 20, k.the + 80, 10); return <>
						<AreaFillLayer m={m} fn={cube} a={-2} to={2} signed />
						{pulse > 0.001 ? <path d={`M${m.p(-2, 0).join(',')} ${Array.from({length: 41}, (_, i) => {const x = -2 + i / 20; return 'L' + m.p(x, cube(x)).join(',');}).join(' ')} Z`} fill="none" stroke={INK} strokeWidth={5} opacity={pulse} /> : null}
						<g clipPath={m.clip}><path d={fnPath(m, cube, -2.5, 2.5)} stroke={ABLUE} strokeWidth={6.5} fill="none" /></g>
					</>;}}
				</StudioPlot>
				<Row x={1160} y={200} at={k.heres + 20} size={60}><Int12 lo="−2" hi="2">x³</Int12> = ?</Row>
				<Chip12 x={1160} y={380} at={k.next + 10} size={50} color="#d18f1f">Next: symmetry</Chip12>
				<div style={{position: 'absolute', left: 1700, top: 340, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 120, color: '#7a4600', opacity: prog(f, k.out - 10, 12)}}>?</div>
				<Hand x={1170} y={540} at={k.the} size={42} color={SOFT}>the two pieces look exactly alike</Hand>
			</div> : null}
		</>
	);
};

// ---------- 13. key notes ----------
export const I11FinalFrame = I11FinalFrameStandIn;
export const S13: React.FC = () => {
	const f = useCurrentFrame();
	const id = 'scene-13';
	usePlatePreload([CUTAWAY.src]);
	const items = [
		{content: <>Against the y-axis: write x in terms of y.</>, at: 10},
		{content: <>Area = <Int lo="c" hi="d" v="y">x</Int> when x ≥ 0 (y-limits, c &lt; d).</>, at: 22},
		{content: <>Signed ∫ x dy: right adds, left subtracts. Area adds sizes.</>, at: 34},
		{content: <>y = aˣ and y = log<sub>a</sub> x reflect in y = x.</>, at: 46},
		{content: <>Area under ln x, 1 to e: e − (e − 1) = 1.</>, at: 58},
	];
	const back = prog(f, Math.max(1350, dur(id)) - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} />
				<HandTag x={1824} y={116} text="pause to copy" at={K13.pause} size={42} color="#8a5a12" anchor="end" />
				<KeyNotesBullets x={96} y={230} w={1050} items={items} size={38} gap={66} />
				<FramedCard x={1180} y={196} w={690} h={780} at={16} />
				<div style={{position: 'absolute', left: 1220, top: 212, opacity: prog(f, 16, 14), width: 620}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.08, color: INK, marginTop: 4}}>{AID11a}</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.08, color: INK, marginTop: 16}}>{AID11b}</div>
				</div>
				{f >= 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, 16, 14)}}>
					<div style={{position: 'absolute', left: 1240, top: 440, display: 'flex', gap: 60}}><Icon1 /><Icon2 /></div>
					<PoolCut x={1210} y={640} w={630} layers={5} />
					<div style={{position: 'absolute', left: 1230, top: 885, width: 640, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: '#2f6f8f'}}>the pool: water e − 1 m², ramp 1 m²</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I11FinalFrameStandIn /></div> : null}
		</>
	);
};
export {Chip, GREY, kf, smooth};
