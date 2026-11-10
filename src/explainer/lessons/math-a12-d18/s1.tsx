// Scenes 1 to 4: the hook (d17's painted pen, then the live plan view: four tries, the square loses), variables
// and the constraint (one variable), the physical domain (both collapses, the ends are limits) and optimise and
// conclude (the candidate table with limit rows, the ride over the top, why the square loses).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {Card, CardTitle, FrameSvg, FunctionSimulator, HandTag, ParameterSlider, SceneHeading, StudioCandidateTable, WorkingRows, kf, makePlot, smooth, vis, MATH_STRAND_ACCENT} from '../../math/studio';
import {D17FinalFrame} from '../math-a12-d17/s5';
import {PenPlate} from '../math-a12-d17/parts';
import {K1, K2, K3, K4} from './cuemap';
import {AMB, Am, AnswerBox, BLUE, BoxCard, Chip, GREEN, GREY_INK, Line, PenStrip, PlanPen, Ring, TEAL, V, Xb, Yt, area, area1} from './parts';

const SLIDER_TICKS = [0, 5, 10, 15, 20].map(v => ({value: v, label: String(v)}));
const Slider: React.FC<{x: number; y: number; v: number; width?: number}> = ({x, y, v, width = 560}) => (
	<ParameterSlider x={x} y={y} width={width} symbol="x" role="a" value={v} min={0} max={20} ticks={SLIDER_TICKS} at={-30} digits={1} />
);

// ---------- 1. hook: the square isn't best ----------
export const S01: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	const swap = smooth(prog(f, k.above - 4, 30));
	const x = kf(f, [[0, 5], [k.fifteen, 5], [k.again - 12, 15], [k.square, 15], [k.eight - 12, 40 / 3], [k.but, 40 / 3], [k.hundred - 12, 10]]);
	const rows: [string, React.ReactNode, number, boolean][] = [
		['x = 5 m', <>150 m²</>, k.five, false],
		['x = 15 m', <>150 m²</>, k.fifteen, false],
		['square, 40/3 m', <>1600/9 ≈ 177.8 m²</>, k.square, false],
		['x = 10 m', <>200 m²</>, k.but, true],
	];
	return (
		<>
			{swap < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - swap, transform: `scale(${1 + 0.1 * swap})`, transformOrigin: '700px 520px'}}><D17FinalFrame /></div> : null}
			<SceneHeading text="Optimisation: from a situation to a function" at={k.above + 10} size={56} />
			<div style={{position: 'absolute', inset: 0, opacity: swap}}>
				{swap > 0.001 ? <>
					<PlanPen cx={520} top={150} scale={25} x={x} wallLength={960} />
					<Slider x={60} y={630} v={x} />
					<PenStrip x={60} y={790} w={940} xv={x} glow={vis(f, k.hundred, 5000, 12)} />
					<PenPlate x={1070} y={150} w={810} at={-60} out={k.how - 10} tagsAt={-60} wallAt={-60} sheepW={130} />
					<Card x={1060} y={530} w={820} at={k.above + 20} pad="12px 30px 16px">
						<CardTitle>Four tries, 40 m of fence each</CardTitle>
						{rows.map(([a, b, t, best], i) => (
							<div key={i} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 10, opacity: prog(f, t, 12), fontFamily: FONT_DISPLAY, fontWeight: best ? 800 : 700, fontSize: 44, color: best ? GREEN : INK, borderRadius: 12, padding: '0 10px', margin: '10px -10px 0', background: i === 2 && f >= k.so ? 'rgba(248,232,200,0.9)' : undefined}}>
								<span><Xb>{a}</Xb></span><span>{b}</span>
							</div>
						))}
					</Card>
					<HandTag x={1500} y={512} text="square: not best" at={k.so} size={46} color="#b8322a" />
				</> : null}
			</div>
			<Chip x={1060} y={200} w={820} at={k.how} size={50} color={MATH_STRAND_ACCENT}>How do we find the best shape, and be sure nothing beats it?</Chip>
		</>
	);
};

// ---------- 2. variables, constraint and one variable ----------
const RX2 = 980;
export const S02: React.FC = () => {
	const f = useCurrentFrame();
	const k = K2;
	const x = kf(f, [[0, 10], [k.but + 10, 10], [k.but + 40, 12], [k.cant + 24, 12], [k.cant + 54, 10]]);
	const pulse: 'x' | 'y' | undefined = f >= k.xs && f < k.ys ? 'x' : f >= k.ys && f < k.ys + 14 ? 'y' : f >= k.ys + 14 && f < k.forty ? 'x' : undefined;
	return (
		<>
			<SceneHeading text="Variables, a constraint, one variable" at={4} size={56} />
			<PlanPen cx={480} top={150} scale={30} x={x} wallLength={920} labels={f >= k.naming ? 'symbols' : 'values'} pulse={pulse} />
			<Slider x={40} y={600} v={x} />
			<PenStrip x={40} y={770} w={900} xv={x} />
			<HandTag x={560} y={150} text="y depends on x" at={k.but + 20} out={k.use} size={44} color={TEAL} />
			<Card x={RX2} y={150} w={900} at={-30} pad="10px 28px 12px">
				<div style={{display: 'flex', alignItems: 'baseline', gap: 26}}><CardTitle>Given</CardTitle><span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44}}><Am>40 m of fencing, three sides</Am></span></div>
			</Card>
			<Line x={RX2} y={262} at={k.let} size={40}><Xb>x m</Xb> out from the wall, <Yt>y m</Yt> along it</Line>
			<WorkingRows x={RX2 - 36} y={340} w={940} size={52} oldSize={38} gap={12} rows={[
				{relation: '', right: <><Xb>2x</Xb> + <Yt>y</Yt> = <Am>40</Am></>, at: k.forty, keep: true},
				{relation: '', right: <>A = <Xb>x</Xb><Yt>y</Yt></>, at: k.area},
				{relation: '', right: <><Yt>y</Yt> = <Am>40</Am> − <Xb>2x</Xb></>, at: k.yeq},
				{relation: '', right: <>A = <Xb>x</Xb>(<Yt>40 − 2x</Yt>)</>, at: k.aeq},
				{relation: '', right: <>A = 40<Xb>x</Xb> − 2<Xb>x</Xb>²</>, at: k.which, answer: true},
			]} />
			<HandTag x={RX2 + 470} y={378} text="the constraint" at={k.constraint} size={42} color={AMB} />
			<HandTag x={RX2} y={720} text="can't differentiate yet: y changes too" at={k.cant} out={k.use} size={40} color="#b8322a" />
			<Chip x={RX2} y={840} at={k.now} size={48} color={BLUE}>one variable: <Xb>x</Xb></Chip>
		</>
	);
};

// ---------- 3. the physical domain ----------
const G3 = {x: 990, y: 140, w: 900, h: 470};
const WIN_A = {x: [0, 21] as [number, number], y: [0, 220] as [number, number]};
const AREA_FAM = {f: (x: number) => area(x), df: (x: number) => area1(x), domain: [{from: 0, to: 20}]};
const AreaGraph: React.FC<{G: typeof G3; x: number; bandAt: number; circlesAt: number; pulse?: number; extra?: Partial<React.ComponentProps<typeof FunctionSimulator>>}> = ({G, x, bandAt, circlesAt, pulse = 0, extra = {}}) => (
	<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={WIN_A} family={AREA_FAM} timeline={[{frame: 0, x}]} color={INK} at={-30}
		xTicks={[5, 10, 15, 20]} yTicks={[50, 100, 150, 200]} xLabel="x (m)" yLabel="A (m²)" point={{at: -30}}
		regions={[{x: [0, 20], y: [0, 9], color: '#f8e8c8', opacity: 1, at: bandAt}]}
		markers={[{X: 0, Y: 0, at: circlesAt, open: true, color: AMB}, {X: 20, Y: 0, at: circlesAt, open: true, color: AMB}]}
		overlay={g => pulse > 0.001 ? <FrameSvg>{[0, 20].map(X => {const p = g.toFrame(X, 0); return <circle key={X} cx={p[0]} cy={p[1]} r={22 + 10 * pulse} fill="none" stroke={AMB} strokeWidth={5} opacity={pulse} />;})}</FrameSvg> : null}
		{...extra} />
);
export const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3;
	const x = kf(f, [[0, 10], [k.collapses, 10], [k.nearZero - 4, 0.3], [k.nearTwenty - 6, 0.3], [k.nearTwenty + 40, 19.7], [k.stating, 19.7], [k.stating + 40, 10]]);
	const pulse = vis(f, k.reaches, k.stating, 10) * (0.6 + 0.4 * Math.sin(f * 0.25));
	return (
		<>
			<SceneHeading text="The physical domain" at={4} size={56} />
			<PlanPen cx={500} top={150} scale={15} x={x} wallLength={640} />
			<Slider x={30} y={600} v={x} />
			<PenStrip x={30} y={760} w={920} xv={x} glow={vis(f, k.area, k.stating, 12)} />
			<HandTag x={140} y={290} text="a thin strip along the wall" at={k.nearZero + 10} out={k.nearTwenty} size={42} color={INK} />
			<HandTag x={560} y={420} text="y → 0: the two x sides close up" at={k.nearTwenty + 30} out={k.stating} size={42} color={INK} />
			<AreaGraph G={G3} x={x} bandAt={k.twenty} circlesAt={k.twenty} pulse={pulse} />
			<HandTag x={G3.x + 120} y={G3.y + 400} text="limit: A → 0, not reached" at={k.reaches} out={k.stating} size={40} color={AMB} />
			<Line x={1010} y={640} at={k.xpos} size={42}><Xb>x</Xb> &gt; 0 (a width)</Line>
			<Line x={1010} y={700} at={k.ypos} size={42}><Yt>y</Yt> &gt; 0: 40 − 2<Xb>x</Xb> &gt; 0<span style={{opacity: prog(f, k.twenty, 10)}}>, so <Xb>x</Xb> &lt; 20</span></Line>
			<BoxCard x={1010} y={776} at={k.twenty + 6} size={52} border={AMB} bw={5}><Am>domain: 0 &lt; x &lt; 20</Am></BoxCard>
			<HandTag x={1010} y={866} text="ends not included" at={k.neither} out={k.count - 12} size={38} color={AMB} />
			<HandTag x={1010} y={900} text="decides which stationary points count" at={k.count - 10} out={k.compare} size={40} color={INK} />
			<HandTag x={1010} y={900} text="and what we compare at the ends" at={k.compare} size={40} color={INK} />
		</>
	);
};

// ---------- 4. optimise and conclude ----------
const G4 = {x: 30, y: 170, w: 940, h: 430};
export const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4;
	const x = kf(f, [[0, 10], [k.only, 10], [k.only + 34, 0.3], [k.rises + 20, 10], [k.falls + 12, 19.7], [k.makes + 40, 10]]);
	const M = makePlot(G4.x, G4.y, G4.w, G4.h, WIN_A);
	const P = M.pf(10, 200);
	const sq = 40 / 3, S = 15;
	const sqO = vis(f, k.so, 5000, 14);
	const penTop = 612, penCx = 480;
	return (
		<>
			<SceneHeading text="Optimise and conclude" at={4} size={56} />
			<AreaGraph G={G4} x={x} bandAt={-30} circlesAt={-30} extra={{tangent: {at: k.aprime, halfLength: 120}}} />
			<FrameSvg><Ring p={P} r={34} o={prog(f, k.maximum, 12)} color={GREEN} /></FrameSvg>
			<PlanPen cx={penCx} top={penTop} scale={S} x={x} wallLength={640} wallH={40} />
			<FrameSvg>
				{sqO > 0.001 ? <rect x={penCx - (sq * S) / 2} y={penTop + 40} width={sq * S} height={sq * S} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="12 8" opacity={sqO} /> : null}
			</FrameSvg>
			<HandTag x={penCx + 150} y={penTop + 240} text="each metre: 1 m of fence" at={k.along} size={40} color={TEAL} />
			<HandTag x={penCx - 470} y={penTop + 120} text="each metre: 2 m of fence" at={k.out} size={40} color={BLUE} />
			<HandTag x={penCx + 150} y={penTop + 120} text="dashed: the square" at={k.so} size={38} color={GREY_INK} />
			{/* right column */}
			<Line x={1010} y={150} at={k.aprime} size={52}><V>A′(x) = 40 − 4x</V></Line>
			<Line x={1010} y={220} at={k.ten - 10} size={52}><V>= 0</V> at <Xb>x = 10</Xb></Line>
			<HandTag x={1450} y={252} text="in 0 < x < 20" at={k.inside} size={42} color={AMB} />
			<Line x={1010} y={300} at={k.here} size={38} color={GREY_INK}>ends not in the domain: compare limits</Line>
			<BoxCard x={1000} y={380} w={880} at={-30} out={k.compare - 8} size={48} title="From the model"><div>A = 40<Xb>x</Xb> − 2<Xb>x</Xb>²</div><div><Am>domain: 0 &lt; x &lt; 20</Am></div><div style={{fontSize: 40, color: GREY_INK}}>the ends are limits, not pens</div></BoxCard>
			<StudioCandidateTable x={1000} y={360} w={880} at={k.compare} size={42} headings={['candidate', 'A (m²)']} winnerAt={k.maximum}
				rows={[
					{x: <>x → 0⁺</>, exact: <>A → 0</>, at: k.compare + 10, limit: true},
					{x: <>x = 10</>, exact: <>200</>, at: k.aOf10, winner: true},
					{x: <>x → 20⁻</>, exact: <>A → 0</>, at: k.compare + 24, limit: true},
				]} />
			<Line x={1010} y={690} at={k.maximum} size={40}>A(x) ≤ 200 for every x in 0 &lt; x &lt; 20</Line>
			<AnswerBox x={1000} y={756} at={k.metres} size={42}>10 m out, 20 m along: area 200 m²</AnswerBox>
			<Line x={1010} y={850} at={k.so} size={40} color={GREY_INK}>best: <Yt>y</Yt> = 2<Xb>x</Xb> (20 = 2 × 10)</Line>
		</>
	);
};
