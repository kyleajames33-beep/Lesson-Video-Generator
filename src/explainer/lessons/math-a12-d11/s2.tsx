// Scenes 4 to 7: the proof, radians and branches, the squash-and-slide picture, the chain rule worked example.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, INK, prog} from '../../kit';
import {EquationStrip, FrameSvg, FunctionSimulator, GivensCard, HandTag, MarkSpan, MistakeCard, SceneHeading, TaskStrip, kf, vis, CARD} from '../../math/studio';
import {cue} from './common';
import {AMB, AnswerBox, BLUE, BeamMap, Chip, Frac, GREEN, GREY, Line, PI, RED, RecallChip, RingAt, Stub, TAN, TEAL, TitledCard, VIOLET, WIN_T, WindowT, gmap, tl} from './parts';

const THUMB = {x: 1380, y: 150, w: 444, h: 340};
const PG = {x: 1120, y: 130, w: 704, h: 450};
const Am: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: AMB}}>{children}</span>;
const Te: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: TEAL}}>{children}</span>;
const Bl: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: BLUE}}>{children}</span>;
const Slot: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{display: 'inline-block', border: '0.06em dashed #8a8378', borderRadius: '0.2em', padding: '0 0.12em', lineHeight: 1.05}}>{children}</span>;
const AmberStrip: React.FC<{x: number; y: number; at: number; out?: number; size?: number; children: React.ReactNode}> = ({x, y, at, out, size = 44, children}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', background: CARD, borderRadius: 16, padding: '4px 22px 6px', border: `4px solid ${AMB}`, boxShadow: '0 10px 22px rgba(60,45,20,0.10)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: '#7a4600', whiteSpace: 'pre'}}>{children}</div>
	</Enter>
);

// ---------- 4. the proof ----------
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const tanIs = cue(id, 'Tan x is'), zero = cue(id, 'zero'), qr = cue(id, 'The quotient rule'), twoMinus = cue(id, 'The two minus'), top1 = cue(id, 'that top is'), soDeriv = cue(id, 'So the derivative is'), name = cue(id, 'own name'), soTan = cue(id, 'So the derivative of'), andCos = cue(id, 'And cos squared'), why = cue(id, "That's why");
	const MT = gmap(PG.x, PG.y, PG.w, PG.h, WIN_T);
	return (
		<>
			<TaskStrip text="Show that d/dx(tan x) = sec²x" at={2} />
			<WindowT x={PG.x} y={PG.y} width={PG.w} height={PG.h} timeline={tl([[0, PI / 3], [andCos, PI / 3], [andCos + 40, 0]])} at={-30} point={{at: -30}} tangent={{at: -30, halfLength: 90}}
				xTicks={[{value: -PI / 2, label: '−π/2'}, {value: PI / 2, label: 'π/2'}, {value: 3 * PI / 2, label: '3π/2'}]} yTicks={[-4, 4]} xLabel="" yLabel="" />
			<HandTag x={MT.pt(0.2, 0)[0]} y={MT.pt(0, -1.6)[1]} text="slope 1" at={why} size={36} color={VIOLET} />
			<TitledCard x={1120} y={600} w={704} title="Quotient rule (d08)" at={tanIs}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, marginTop: 6}}>(f/g)′ = (<Te>f′g</Te> <Bl>− fg′</Bl>) / g²</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: INK, marginTop: 6}}>f = sin x, f′ = cos x;  g = cos x, g′ = −sin x</div>
			</TitledCard>
			<AmberStrip x={96} y={168} at={zero} size={36}>cos x ≠ 0  (x ≠ π/2 + kπ)</AmberStrip>
			{/* opener (until the first row): the tools in the working area */}
			<TitledCard x={96} y={290} w={980} title="Quotient rule (d08)" at={-20} out={tanIs}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK, marginTop: 6}}>(f/g)′ = (<Te>f′g</Te> <Bl>− fg′</Bl>) / g²</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 44, color: INK, marginTop: 8}}>f = sin x, f′ = cos x</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 44, color: INK, marginTop: 4}}>g = cos x, g′ = −sin x</div>
			</TitledCard>
			<Enter at={-20} out={tanIs} style={{position: 'absolute', left: 96, top: 600}}><div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '10px 28px', border: '2.5px solid rgba(60,45,20,0.14)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 56, color: INK}}>tan x = <Frac n={<Te>sin x</Te>} d={<Bl>cos x</Bl>} /></div></Enter>
			<Enter at={-20} out={tanIs} style={{position: 'absolute', left: 96, top: 800}}><div style={{display: 'inline-block', background: CARD, border: `5px dashed ${GREEN}`, borderRadius: 18, padding: '8px 28px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 56, color: INK}}>goal: d/dx(tan x) = sec²x</div></Enter>
			<TitledCard x={1120} y={600} w={704} title="Plan" at={-20} out={tanIs}>
				{['1. Write tan x as sin x / cos x.', '2. Use the quotient rule.', '3. Use sin²x + cos²x = 1.'].map((t, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK, marginTop: 6}}>{t}</div>)}
			</TitledCard>
			<Line at={tanIs} x={96} y={270} size={50} dim={prog(f, qr, 14)}><span>d/dx(tan x) = d/dx<Frac n="sin x" d="cos x" /></span></Line>
			<Line at={qr} x={96} y={410} size={50} dim={prog(f, twoMinus, 14)}>= <Frac n={<><Te>cos x × cos x</Te> <Bl>− sin x × (<MarkSpan kind="circle" at={twoMinus} color={RED}>−</MarkSpan>sin x)</Bl></>} d="cos²x" /></Line>
			<Line at={twoMinus + 20} x={96} y={560} size={50} dim={prog(f, top1, 14)}>= <Frac n={<MarkSpan kind="underline" at={top1} color={GREEN}>cos²x + sin²x</MarkSpan>} d="cos²x" /></Line>
			<RecallChip x={640} y={590} at={top1} size={34}>sin²x + cos²x = 1</RecallChip>
			<Line at={soDeriv} x={96} y={710} size={52}>= <Frac n="1" d="cos²x" /></Line>
			<Chip x={1120} y={790} at={name} size={46}>sec x = <Frac n="1" d="cos x" /></Chip>
			<AnswerBox at={soTan + 20} x={96} y={860} size={52}>d/dx(tan x) = sec²x,  <Am>cos x ≠ 0</Am></AnswerBox>
			<Line at={andCos} x={1120} y={930} size={42}>0 &lt; cos²x ≤ 1, so sec²x ≥ 1</Line>
			<HandTag x={1580} y={840} text="never below 1" at={why} size={42} color={VIOLET} />
		</>
	);
};

// ---------- 5. radians and branches ----------
const G5 = {x: 96, y: 150, w: 1260, h: 720};
export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const radians = cue(id, 'radians'), pis = cue(id, 'pis'), branches = cue(id, 'branches'), branch = cue(id, 'branch.', 1), tanOf = cue(id, 'Tan of'), later = cue(id, 'later'), soTan = cue(id, 'So tan x');
	const M = gmap(G5.x, G5.y, G5.w, G5.h, WIN_T);
	const ang = kf(f, [[0, 0], [tanOf, 0], [tanOf + 30, PI / 4], [later - 20, PI / 4], [later + 20, 3 * PI / 4]]);
	const tints: [number, number][] = [[-2, -PI / 2], [-PI / 2, PI / 2], [PI / 2, 3 * PI / 2], [3 * PI / 2, 5]];
	const [p1x, p1y] = M.pt(PI / 4, 1), [p2x, p2y] = M.pt(3 * PI / 4, -1);
	return (
		<>
			<SceneHeading text="Radians, and one branch at a time" at={-24} size={56} />
			<WindowT x={G5.x} y={G5.y} width={G5.w} height={G5.h} timeline={tl([[0, PI / 4]])} at={-30}
				regions={tints.map((r, i) => ({x: r, color: i % 2 ? '#e7e0f2' : '#dceaf7', opacity: 0.55, at: branches + i * 10}))}
				overlay={() => <FrameSvg>
					{[-PI / 2, PI / 2, 3 * PI / 2].map((a, i) => {const [cx, cy] = M.pt(a, 0); const o = prog(f, pis + i * 8, 10); return <g key={i} opacity={o}><line x1={cx} x2={cx} y1={M.pt(0, 5)[1]} y2={M.pt(0, -5)[1]} stroke={AMB} strokeWidth={6} strokeDasharray="12 10" opacity={0.7} /><circle cx={cx} cy={cy} r={12} fill={CARD} stroke={AMB} strokeWidth={5} /></g>;})}
					{[[-1.1, 1.1], [PI / 2 + 0.47, PI - 0.47 + PI / 2 - 0.0], [-1.95, -1.65]].slice(0, 2).map(([a, b], i) => {const A = M.pt(a, Math.tan(a)), B = M.pt(b, Math.tan(b)); return <line key={i} x1={A[0] + 40} y1={A[1]} x2={B[0] + 40} y2={B[1]} stroke={VIOLET} strokeWidth={5} opacity={prog(f, branch, 12) * 0.9} markerEnd="" />;})}
					{f >= tanOf ? <><circle cx={p1x} cy={p1y} r={13} fill={VIOLET} stroke={CARD} strokeWidth={4} /><Stub Mp={M} X={PI / 4} Y={1} m={2} half={70} /></> : null}
					{f >= later ? <><circle cx={p2x} cy={p2y} r={13} fill={VIOLET} stroke={CARD} strokeWidth={4} /><Stub Mp={M} X={3 * PI / 4} Y={-1} m={2} half={70} /><line x1={p1x} y1={p1y} x2={p2x} y2={p2y} stroke={GREY} strokeWidth={5} strokeDasharray="12 9" /></> : null}
				</FrameSvg>} />
			<BeamMap {...THUMB} angle={ang} kmPx={120} below={170} back labels={false} />
			<HandTag x={THUMB.x + 10} y={THUMB.y + 380} text="back beam lands at −1" at={later + 20} size={38} color={INK} />
			<Chip x={1390} y={560} at={radians} size={44}>x in radians</Chip>
			<AmberStrip x={1390} y={650} at={pis} size={36}>x ≠ π/2 + kπ,{'\n'}k an integer</AmberStrip>
			<HandTag x={M.pt(-0.9, 0)[0]} y={M.pt(0, 4.4)[1]} text="increasing on each branch" at={branch} size={40} color={VIOLET} />
			<HandTag x={p1x + 30} y={p1y - 50} text="π/4: 1" at={tanOf + 20} size={40} color={INK} />
			<HandTag x={p2x + 30} y={p2y + 60} text="3π/4: −1" at={later + 6} size={40} color={INK} />
			<Chip x={1390} y={790} at={later + 30} size={36} color={RED}><span style={{textDecoration: 'line-through', textDecorationColor: RED, textDecorationThickness: 4}}>increasing on its whole domain</span></Chip>
			<Chip x={1390} y={900} at={soTan} size={40} color={GREEN} glow={vis(f, soTan, soTan + 120, 10)}>increasing on each branch</Chip>
		</>
	);
};

// ---------- 6. squash and slide ----------
const GW = {x: 1060, y: 150, w: 764, h: 600};
const WW = {x: [-1.2, 2.2] as [number, number], y: [-6, 6] as [number, number]};
const W_TICKS = [{value: -PI / 12, label: '−π/12'}, {value: PI / 6, label: 'π/6'}, {value: 5 * PI / 12, label: '5π/12'}, {value: 2 * PI / 3, label: '2π/3'}];
const EQ6 = <>y = tan(<Slot>2x − π/3</Slot>)</>;
const ghost = [{fn: (X: number) => Math.tan(X), at: -30, color: '#b9b0a3', dash: '10 9', width: 4, domain: [-1.2, PI / 2 - 0.08] as [number, number]}, {fn: (X: number) => Math.tan(X), at: -30, color: '#b9b0a3', dash: '10 9', width: 4, domain: [PI / 2 + 0.08, 2.2] as [number, number]}];
/** Window W carrying tan x by a squash (xScale) and a slide (xShift); asymptotes drawn from the same state. */
const WindowW: React.FC<{sq: [number, number]; sl: [number, number]; ghostOut?: number; wallsAt?: number; ringAt?: number; readOut?: number}> = ({sq, sl, ghostOut, wallsAt, ringAt, readOut}) => {
	const f = useCurrentFrame();
	const M = gmap(GW.x, GW.y, GW.w, GW.h, WW);
	return (
		<FunctionSimulator x={GW.x} y={GW.y} width={GW.w} height={GW.h} window={WW} family={TAN} color={INK} at={-30} branchSafe={{gap: 0.05}}
			timeline={[{frame: 0, x: -PI / 3, xScale: 1, xShift: 0}, {frame: sq[0], xScale: 1}, {frame: sq[1], xScale: 0.5}, {frame: sl[0], xShift: 0}, {frame: sl[1], xShift: PI / 6}]}
			xTicks={W_TICKS} yTicks={[-4, -2, 2, 4]} xLabel="x (radians)" yLabel="y"
			curves={ghostOut === undefined ? ghost : ghost.map(g => ({...g, out: ghostOut}))}
			point={{at: -30}} tangent={{at: -30, halfLength: 110}}
			readout={{x: GW.x, y: 770, width: GW.w, inline: true, at: -30, out: readOut, rows: [{label: 'x', value: s => s.X, digits: 3}, {label: 'gradient', value: s => s.slope, digits: 3, role: 'gradient'}]}}
			overlay={g => <FrameSvg>
				{[-PI / 2, PI / 2, 3 * PI / 2].map((a, i) => {const X = g.s.xScale * a + g.s.xShift; if (X < WW.x[0] || X > WW.x[1]) return null; const [cx] = M.pt(X, 0); const w = wallsAt !== undefined ? prog(f, wallsAt, 12) : 0; return <line key={i} x1={cx} x2={cx} y1={M.pt(0, 6)[1]} y2={M.pt(0, -6)[1]} stroke={w > 0.5 ? AMB : GREY} strokeWidth={4 + 3 * w} strokeDasharray="10 9" />;})}
				{ringAt !== undefined ? <RingAt p={g.pt} r={30} at={ringAt} color={VIOLET} /> : null}
			</FrameSvg>} />
	);
};
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const zero = cue(id, 'zero'), two = cue(id, 'Two x minus pi over three is'), six = cue(id, 'six.', 2), seen = cue(id, "You've seen"), squash = cue(id, 'A sideways'), points = cue(id, 'points'), slide = cue(id, 'and a slide'), walls = cue(id, 'The walls'), twelve = cue(id, 'twelve.', 2);
	const M = gmap(GW.x, GW.y, GW.w, GW.h, WW);
	return (
		<>
			<TaskStrip text="Differentiate, then find the gradient at x = 0" at={2} />
			<EquationStrip at={-30} size={66}>{EQ6}</EquationStrip>
			<GivensCard x={96} y={290} w={880} at={zero - 20} size={46} title="Given" lines={[{content: 'x = 0', at: zero}, {content: 'x in radians', at: zero + 10}]} />
			<Line at={two} x={96} y={520} size={52}>2x − π/3 = 2(x − π/6)</Line>
			<TitledCard x={96} y={640} w={880} title="Plan" at={-20} out={squash - 6}>
				{['1. Read the picture: squash, then slide.', '2. Chain rule: outside, then inside.', '3. Substitute x = 0.'].map((t, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK, marginTop: 4}}>{t}</div>)}
			</TitledCard>
			<RecallChip x={96} y={630} at={seen} size={32}>d01: a squash by ½ doubles slopes</RecallChip>
			<Chip x={96} y={720} at={squash} size={42} color={BLUE}>squash by ½: every slope × 2</Chip>
			<Chip x={96} y={810} at={slide} size={42}>slide right π/6: slopes unchanged</Chip>
			<Chip x={96} y={900} at={twelve} size={42} color={AMB}>walls: x = −π/12 and x = 5π/12</Chip>
			<WindowW sq={[six, six + 36]} sl={[six + 60, six + 96]} ghostOut={twelve} wallsAt={walls} />
			<HandTag x={GW.x + 100} y={GW.y + 60} text="squash by ½" at={six} out={six + 60} size={40} color={BLUE} />
			<HandTag x={GW.x + 100} y={GW.y + 60} text="slide right π/6" at={six + 60} out={walls} size={40} color={INK} />
			<HandTag x={GW.x + 100} y={GW.y + 60} text="walls move" at={walls} size={40} color={AMB} />
			<HandTag x={GW.x + GW.w - 40} y={790} text="× 2" at={points} size={48} color={BLUE} anchor="end" />
			{f >= twelve ? <>
				<div style={{position: 'absolute', left: M.pt(-PI / 12, 0)[0] - 50, top: GW.y + 8, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: AMB, opacity: prog(f, twelve, 10)}}>−π/12</div>
				<div style={{position: 'absolute', left: M.pt(5 * PI / 12, 0)[0] + 8, top: GW.y + 8, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: AMB, opacity: prog(f, twelve, 10)}}>5π/12</div>
			</> : null}
		</>
	);
};

// ---------- 7. the chain rule, exclusions, gradient ----------
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const outside = cue(id, 'The outside is'), constant = cue(id, 'constant'), soOut = cue(id, 'So the outside'), two = cue(id, 'times two'), dy = cue(id, 'd y by'), where = cue(id, 'Wherever'), solving = cue(id, 'Solving'), kpi2 = cue(id, 'over two.', 2), four = cue(id, 'four,'), eight = cue(id, 'eight'), tangent = cue(id, 'The tangent'), agrees = cue(id, 'three agrees');
	const M = gmap(GW.x, GW.y, GW.w, GW.h, WW);
	return (
		<>
			<TaskStrip text="Differentiate, then find the gradient at x = 0" at={-30} />
			<EquationStrip at={-30} size={66}>{EQ6}</EquationStrip>
			<GivensCard x={96} y={290} w={880} at={-30} size={44} title="Given" lines={[{content: 'x = 0;  x in radians', at: -30}]} />
			<Line at={outside} x={96} y={450} size={50} dim={prog(f, soOut, 14)}>u = 2x − π/3,  <Bl>u′ = 2</Bl></Line>
			<RecallChip x={700} y={462} at={constant} out={soOut} size={30}>π/3 is a constant</RecallChip>
			<TitledCard x={96} y={600} w={880} title="Plan" at={-20} out={soOut - 6}>
				{['1. Outside tan, inside u = 2x − π/3.', '2. dy/dx = sec²u × u′.', '3. Exclusions, then x = 0.'].map((t, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK, marginTop: 4}}>{t}</div>)}
			</TitledCard>
			<Line at={soOut + 20} x={96} y={530} size={50} dim={prog(f, dy, 14)}>dy/dx = <Te>sec²(2x − π/3)</Te> × <Bl>{f >= two ? '2' : ' '}</Bl></Line>
			<Line at={dy} x={96} y={610} size={52} dim={prog(f, four, 14)}>= 2sec²(2x − π/3)</Line>
			<RecallChip x={720} y={624} at={dy + 20} out={four} size={30}>d06 chain rule</RecallChip>
			<AmberStrip x={96} y={700} at={where} size={40}>{f < kpi2 ? '2x − π/3 ≠ π/2 + kπ' : 'x ≠ 5π/12 + kπ/2'}</AmberStrip>
			<Line at={four - 30} x={96} y={790} size={44}>x = 0: cos(−π/3) = ½, so sec²(−π/3) = 4</Line>
			<AnswerBox at={eight} x={96} y={870} size={52}>dy/dx = 2 × 4 = 8</AnswerBox>
			<WindowW sq={[-60, -50]} sl={[-40, -30]} ghostOut={-30} wallsAt={-30} ringAt={agrees} readOut={tangent - 10} />
			{f >= solving ? <FrameSvg>{[-PI / 12, 5 * PI / 12].map((a, i) => {const [cx] = M.pt(a, 0); return <line key={i} x1={cx} x2={cx} y1={M.pt(0, 6)[1]} y2={M.pt(0, -6)[1]} stroke={AMB} strokeWidth={10} strokeDasharray="10 9" opacity={0.6 * vis(f, solving, kpi2 + 60, 10)} />;})}</FrameSvg> : null}
			<HandTag x={M.pt(0.1, 0)[0]} y={M.pt(0, -3.2)[1]} text="(0, −√3), slope 8" at={agrees} size={38} color={VIOLET} />
			<MistakeCard x={GW.x} y={770} w={GW.w} at={tangent} size={40} wrong={<>dy/dx = sec²(2x − π/3)</>} caption="the inside's 2 is missing: 4, not 8" />
		</>
	);
};

