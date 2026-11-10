// Scenes 8 to 14: memory aid, attempt 1 and feedback, attempt 2 and feedback, the sec x handoff (d12 opens on its
// final frame), the key notes (which cross-fade back to that frame).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, FunctionSimulator, GivensStrip, HandTag, KeyNotesBullets, MarkSpan, MistakeCard, QuestionCard, SceneHeading, TaskStrip, vis, CARD, CARD_SHADOW, MATH_STRAND_ACCENT} from '../../math/studio';
import {cue, hold} from './common';
import {AttemptWide} from '../math-a12-d05/parts';
import {AMB, AnswerBox, AttemptStage, BLUE, BeamMap, Chip, Frac, GREY, Line, PI, RingAt, SEC, TAN3, TitledCard, VIOLET, WIN_T, WindowT, gmap, sec2, tl} from './parts';

const Am: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: AMB}}>{children}</span>;
const Bl: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: BLUE}}>{children}</span>;
const AmberStrip: React.FC<{x: number; y: number; at: number; size?: number; children: React.ReactNode}> = ({x, y, at, size = 44, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', background: CARD, borderRadius: 16, padding: '4px 22px 6px', border: `4px solid ${AMB}`, boxShadow: '0 10px 22px rgba(60,45,20,0.10)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: '#7a4600', whiteSpace: 'pre'}}>{children}</div>
	</Enter>
);
export const AID_MAIN = 'The slope of tan is 1 + (height)².';

/** The framed memory card (k scales it for the key notes). */
const TanAidCard: React.FC<{x: number; y: number; w: number; k?: number; at?: number; radAt?: number; wellAt?: number; fourAt?: number; compact?: boolean}> = ({x, y, w, k = 1, at = -20, radAt = -20, wellAt = -20, fourAt = -20, compact = false}) => {
	const f = useCurrentFrame();
	return (
		<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{background: CARD, border: `${4 * k}px solid ${INK}`, borderRadius: 24 * k, boxShadow: `inset 0 0 0 ${8 * k}px ${CARD}, inset 0 0 0 ${10.5 * k}px ${INK}, ${CARD_SHADOW}`, padding: `${24 * k}px ${40 * k}px ${28 * k}px`}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44 * k, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 66 * k, lineHeight: 1.05, color: INK, marginTop: 6 * k}}>{AID_MAIN}</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48 * k, color: INK, marginTop: 14 * k}}>sec²x = 1 + tan²x</div>
				{compact ? null : <div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40 * k, color: INK, marginTop: 10 * k, opacity: prog(f, fourAt, 12)}}>at π/3: height √3, slope 1 + 3 = 4</div>}
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40 * k, color: '#7a4600', marginTop: 10 * k, opacity: prog(f, radAt, 12)}}>cos x ≠ 0, x in radians</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40 * k, color: INK, marginTop: 10 * k, opacity: prog(f, wellAt, 12)}}>tan(u): slope (1 + tan²u) × <Bl>u′</Bl></div>
				{compact ? null : <div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36 * k, color: INK, marginTop: 6 * k, opacity: prog(f, wellAt + 20, 12)}}><Bl>2</Bl>(1 + tan²(−π/3)) = <Bl>2</Bl> × 4 = 8</div>}
			</div>
		</Enter>
	);
};

// ---------- 8. memory aid ----------
export const S08: React.FC = () => {
	// scene-08: the card's lines are on screen, solid, from the first frame (root fix).
	return (
		<>
			<SceneHeading text="Memory aid" at={-24} size={56} />
			<TanAidCard x={96} y={170} w={1000} />
			<WindowT x={1130} y={160} width={694} height={440} timeline={tl([[0, PI / 3]])} at={-20} point={{at: -20}} tangent={{at: -20, halfLength: 90}} yTicks={[-4, 4]} xTicks={[{value: PI / 3, label: 'π/3'}]}
				readout={{x: 1130, y: 610, width: 694, inline: true, at: -20, rows: [{label: 'height', value: s => s.fu, digits: 3}, {label: 'slope', value: s => s.dfu, digits: 3, role: 'gradient'}]}} />
			<BeamMap x={1130} y={800} w={420} h={240} angle={PI / 3} kmPx={110} below={40} labels={false} />
			<div style={{position: 'absolute', left: 1570, top: 820, width: 254, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: VIOLET, lineHeight: 1.1}}>spot speed = 1 + (spot distance)²</div>
		</>
	);
};

// ---------- 9. attempt 1 ----------
const RadianAxisPic: React.FC<{mark?: boolean; tag: string; w?: number; h?: number}> = ({mark = false, tag, w = 720, h = 380}) => {
	const L = 60, R = w - 50, oy = h * 0.62;
	const lo = PI / 2, hi = 3 * PI / 2, X = (v: number) => L + ((v - lo) / (hi - lo)) * (R - L);
	const ticks = [{v: PI / 2, l: 'π/2'}, {v: 5 * PI / 6, l: '5π/6'}, {v: PI, l: 'π'}, {v: 3 * PI / 2, l: '3π/2'}].filter(t => mark || t.l !== '5π/6');
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)'}}>
			<line x1={L - 30} x2={R + 24} y1={oy} y2={oy} stroke={INK} strokeWidth={4} />
			<path d={`M${R + 24},${oy} l-18,-11 M${R + 24},${oy} l-18,11`} stroke={INK} strokeWidth={4} fill="none" />
			<text x={R + 14} y={oy - 18} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>x</text>
			{ticks.map(t => <g key={t.l}><line x1={X(t.v)} x2={X(t.v)} y1={oy - 12} y2={oy + 12} stroke={INK} strokeWidth={4} /><text x={X(t.v)} y={oy + 56} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: INK}}>{t.l}</text></g>)}
			{mark ? <><circle cx={X(5 * PI / 6)} cy={oy} r={14} fill={VIOLET} stroke={CARD} strokeWidth={4} /><text x={X(5 * PI / 6)} y={oy - 70} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, fill: VIOLET}}>{tag}</text></>
				: <text x={w / 2} y={oy - 90} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, fill: INK}}>{tag}</text>}
		</svg>
	);
};
const Q1: React.FC<{u?: {a: number; b: number}}> = ({u}) => (
	<div>Find the {u ? <MarkSpan kind="underline" at={u.b}>exact</MarkSpan> : 'exact'} gradient of the curve y = tan x at the point where {u ? <MarkSpan kind="underline" at={u.a}>x = 5π/6</MarkSpan> : 'x = 5π/6'}.</div>
);
export const S09: React.FC = () => {
	const id = 'scene-09';
	return (
		<AttemptStage hold={hold(id)} pauseAt={cue(id, 'Pause here')} size={52} given={[<>y = tan x</>, <>x = 5π/6</>, <>exact gradient</>]}
			picture={<RadianAxisPic mark tag="gradient here?" />}>
			<Q1 />
		</AttemptStage>
	);
};

const FG = {x: 1100, y: 280, w: 724, h: 500};
const PlanTan: React.FC<{out: number; lines: string[]}> = ({out, lines}) => (
	<TitledCard x={96} y={660} w={960} title="Plan" at={-20} out={out}>
		{lines.map((t, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK, marginTop: 4}}>{t}</div>)}
	</TitledCard>
);

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const id = 'scene-10';
	const f = useCurrentFrame();
	const at56 = cue(id, 'At five'), thirds = cue(id, 'thirds.', 1), check = cue(id, 'Check'), rising = cue(id, 'rising'), minus = cue(id, 'Minus two');
	const W = {x: [1.3, 4.9] as [number, number], y: [-4, 4] as [number, number]};
	const X = 5 * PI / 6;
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<QuestionCard at={-40} shrinkAt={-30} w={1460} size={44}><Q1 u={{a: at56, b: thirds}} /></QuestionCard>
			<GivensStrip x={1160} y={176} maxW={664} size={34} items={[{content: 'y = tan x', at: 4}, {content: 'x = 5π/6', at: 10}, {content: 'exact', at: 16}]} />
			<Line at={4} x={96} y={290} size={50} dim={prog(f, at56, 14)}>dy/dx = sec²x = <Frac n="1" d="cos²x" /></Line>
			<Line at={at56} x={96} y={410} size={48} dim={prog(f, thirds, 14)}>x = 5π/6: cos x = −√3/2, cos²x = 3/4</Line>
			<PlanTan out={thirds - 10} lines={['1. dy/dx = sec²x = 1/cos²x.', '2. Find cos(5π/6), then square it.', '3. Check: 1 + tan²x.']} />
			<AnswerBox at={thirds} x={96} y={500} size={52}>dy/dx = <Frac n="1" d="3/4" /> = <Frac n="4" d="3" /></AnswerBox>
			<Line at={check} x={96} y={660} size={44}>check: tan(5π/6) = −1/√3, 1 + 1/3 = 4/3</Line>
			<FunctionSimulator x={FG.x} y={FG.y} width={FG.w} height={FG.h} window={W} family={{...SEC, f: u => Math.tan(u), df: u => sec2(u)}} color={INK} at={-30} branchSafe={{gap: 0.05}}
				timeline={[{frame: 0, x: X}]} asymptotes={[PI / 2, 3 * PI / 2]} xTicks={[{value: PI / 2, label: 'π/2'}, {value: X, label: '5π/6'}, {value: PI, label: 'π'}, {value: 3 * PI / 2, label: '3π/2'}]} yTicks={[-2, 2]} xLabel="x" yLabel="y"
				point={{at: check}} tangent={{at: rising, halfLength: 120}} />
			<HandTag x={FG.x + 330} y={FG.y + 330} text="below the axis, still rising" at={rising} size={38} color={VIOLET} />
			<MistakeCard x={FG.x} y={800} w={FG.w} at={minus} size={42} wrong={<>gradient −2/√3</>} caption="that's sec x; sec²x ≥ 1" />
		</>
	);
};

// ---------- 11. attempt 2 ----------
/** Answer-free attempt 2 picture: a few branches of y = tan 3x with dashed, unlabelled asymptotes; no x values. */
const BranchesPic: React.FC = () => {
	const w = 900, h = 380, L = 30, R = w - 30, T = 20, B = h - 20;
	const xr: [number, number] = [-1.15, 1.95], yr: [number, number] = [-4, 4];
	const X = (v: number) => L + ((v - xr[0]) / (xr[1] - xr[0])) * (R - L), Y = (v: number) => T + ((yr[1] - v) / (yr[1] - yr[0])) * (B - T);
	const asym = [-5 * PI / 6, -PI / 2, -PI / 6, PI / 6, PI / 2, 5 * PI / 6].filter(a => a > xr[0] && a < xr[1]);
	const edges = [xr[0], ...asym, xr[1]];
	const paths = edges.slice(1).map((b, i) => {
		const a = edges[i];
		let d = '';
		for (let k = 0; k <= 160; k++) {const x = a + 0.012 + ((b - a - 0.024) * k) / 160; const y = Math.max(yr[0] - 1, Math.min(yr[1] + 1, Math.tan(3 * x))); d += `${k ? 'L' : 'M'}${X(x).toFixed(1)},${Y(y).toFixed(1)} `;}
		return d;
	});
	const id = React.useId().replace(/:/g, '');
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)'}}>
			<defs><clipPath id={`bp${id}`}><rect x={L} y={T} width={R - L} height={B - T} /></clipPath></defs>
			<line x1={L} x2={R} y1={Y(0)} y2={Y(0)} stroke={INK} strokeWidth={4} />
			<line x1={X(0)} x2={X(0)} y1={T} y2={B} stroke={INK} strokeWidth={4} />
			<text x={R - 6} y={Y(0) - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>x</text>
			<text x={X(0) + 12} y={T + 30} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>y</text>
			{asym.map((a, i) => <line key={i} x1={X(a)} x2={X(a)} y1={T} y2={B} stroke={GREY} strokeWidth={3} strokeDasharray="10 9" />)}
			<g clipPath={`url(#bp${id})`}>{paths.map((d, i) => <path key={i} d={d} stroke={INK} strokeWidth={5} fill="none" />)}</g>
			<text x={L + 20} y={B - 22} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, fill: VIOLET}} stroke="#fbf8f1" strokeWidth={8} paintOrder="stroke">where does dy/dx exist?</text>
		</svg>
	);
};
const Q2: React.FC<{u?: {a: number; b: number}}> = ({u}) => (
	<div>{u ? <MarkSpan kind="underline" at={u.a}>Differentiate</MarkSpan> : 'Differentiate'} y = tan 3x. State the {u ? <MarkSpan kind="underline" at={u.b}>values of x</MarkSpan> : 'values of x'} for which dy/dx exists.</div>
);
export const S11: React.FC = () => {
	const id = 'scene-11';
	return (
		<AttemptWide hold={hold(id)} pauseAt={cue(id, 'Pause here')} heading="Last one" size={52} given={[<>y = tan 3x</>, <>values of x where dy/dx exists</>]}
			picture={<BranchesPic />}>
			<Q2 />
		</AttemptWide>
	);
};

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const id = 'scene-12';
	const f = useCurrentFrame();
	const x1 = cue(id, 'squared three x'), exists = cue(id, 'It exists'), three = cue(id, 'over three for'), copying = cue(id, 'Copying'), six = cue(id, 'six.', 2);
	const W = {x: [-0.75, 1.9] as [number, number], y: [-5, 5] as [number, number]};
	const FG = {x: 1100, y: 250, w: 724, h: 720};
	const M = gmap(FG.x, FG.y, FG.w, FG.h, W);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<QuestionCard at={-40} shrinkAt={-30} w={1460} heading="Last one" size={44}><Q2 u={{a: x1, b: three}} /></QuestionCard>
			<GivensStrip x={1160} y={176} maxW={664} size={34} items={[{content: 'y = tan 3x', at: 4}, {content: 'where dy/dx exists', at: 10}]} />
			<Line at={4} x={96} y={290} size={50} dim={prog(f, x1, 14)}>u = 3x,  <Bl>u′ = 3</Bl></Line>
			<Line at={x1} x={96} y={380} size={52}>dy/dx = <Bl>3</Bl>sec²(3x)</Line>
			<AmberStrip x={96} y={480} at={exists}>3x ≠ π/2 + kπ</AmberStrip>
			<PlanTan out={three - 10} lines={['1. Inside 3x: multiply by 3.', '2. Exclude where cos 3x = 0.', '3. Divide by 3.']} />
			<AnswerBox at={three} x={96} y={580} size={46}>dy/dx = 3sec²(3x),<br /><Am>x ≠ π/6 + kπ/3, k an integer</Am></AnswerBox>
			<FunctionSimulator x={FG.x} y={FG.y} width={FG.w} height={FG.h} window={W} family={TAN3} color={INK} at={-30} draw={{at: x1, dur: 30}}
				timeline={[{frame: 0, x: 0}]} xTicks={[{value: -PI / 6, label: '−π/6'}, {value: PI / 6, label: 'π/6'}, {value: PI / 2, label: 'π/2'}]} yTicks={[-4, 4]} xLabel="x" yLabel="y"
				overlay={() => <FrameSvg>{[-PI / 6, PI / 6, PI / 2].map((a, i) => {const [cx] = M.pt(a, 0); const g = a === PI / 6 ? vis(f, six - 10, six + 60, 8) : 0; return <line key={i} x1={cx} x2={cx} y1={M.pt(0, 5)[1]} y2={M.pt(0, -5)[1]} stroke={AMB} strokeWidth={5 + 6 * g} strokeDasharray="12 9" opacity={prog(f, exists, 12) * 0.8 + 0.2} />;})}</FrameSvg>} />
			<MistakeCard x={96} y={720} w={960} at={copying} size={42} wrong={<>x ≠ π/2 + kπ</>} caption="at x = π/6, 3x = π/2: undefined" />
		</>
	);
};

// ---------- 13. handoff: sec x ----------
const G13 = {x: 96, y: 210, w: 1150, h: 740};
const MemoryLine: React.FC<{at?: number}> = ({at = -60}) => (
	<Enter at={at} style={{position: 'absolute', left: 96, top: 160}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK}}>{AID_MAIN}</span></Enter>
);
/** The sec x stage and chips (d12 opens on this at rest). */
const SecStage: React.FC<{tanOut?: number; secAt?: number; ringAt?: number; chipsAt?: number; existAt?: number; resultOut?: number}> = ({tanOut = -60, secAt = -60, ringAt = -60, chipsAt = -60, existAt = -60, resultOut = -60}) => {
	const f = useCurrentFrame();
	const M = gmap(G13.x, G13.y, G13.w, G13.h, WIN_T);
	const [rx, ry] = M.pt(0, 1);
	return (
		<>
			{f < tanOut + 20 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, tanOut, 16)}}><WindowT x={G13.x} y={G13.y} width={G13.w} height={G13.h} timeline={tl([[0, 0]])} at={-60} /></div> : null}
			{f >= secAt ? <WindowT family={SEC} x={G13.x} y={G13.y} width={G13.w} height={G13.h} timeline={tl([[0, 0]])} at={secAt} draw={{at: secAt, dur: 40}}
				overlay={() => <FrameSvg><RingAt p={[rx, ry]} r={30} at={ringAt} /></FrameSvg>} /> : null}
			{f < resultOut + 20 ? <AnswerBox at={-60} x={G13.x + 170} y={G13.y + 60} size={48}>d/dx(tan x) = sec²x, <Am>cos x ≠ 0</Am></AnswerBox> : null}
			<Chip x={rx + 40} y={ry - 110} at={existAt} size={44} color={VIOLET}><span style={{color: VIOLET}}>gradient ?</span></Chip>
			<Chip x={1300} y={230} at={chipsAt} size={46}>sec x = <Frac n="1" d="cos x" /></Chip>
			<Chip x={1300} y={400} at={chipsAt + 14} size={46}>cosec x = <Frac n="1" d="sin x" /></Chip>
			<Chip x={1300} y={570} at={chipsAt + 28} size={46}>cot x = <Frac n="cos x" d="sin x" /></Chip>
			<Chip x={1300} y={760} at={existAt + 10} size={36} color={MATH_STRAND_ACCENT}>Next: derivatives of<br />sec x, cosec x and cot x</Chip>
		</>
	);
};
/** d11's final frame (scene 13 at rest). */
export const D11FinalFrame: React.FC = () => (
	<>
		<SceneHeading text="Next: y = sec x" at={-300} size={56} />
		<MemoryLine />
		<SecStage />
	</>
);
export const S13: React.FC = () => {
	const id = 'scene-13';
	const f = useCurrentFrame();
	const next = cue(id, 'Next'), here = cue(id, "Here's y"), one = cue(id, 'sits at one'), exist = cue(id, 'exist');
	return (
		<>
			<SceneHeading text={f < next ? 'tan x: sec²x on each branch' : 'Next: y = sec x'} at={f < next ? -24 : next} size={56} />
			<MemoryLine at={-20} />
			<div style={{position: 'absolute', left: 1400, top: 90, opacity: 1 - prog(f, exist - 30, 16)}}><BeamMap x={0} y={0} w={420} h={110} angle={0.6} kmPx={60} below={30} labels={false} /></div>
			<SecStage tanOut={here - 10} secAt={here} ringAt={one} chipsAt={next} existAt={exist} resultOut={here - 10} />
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const id = 'scene-14';
	const f = useCurrentFrame();
	const items = [
		{content: <>tan x = sin x / cos x, so <Am>x ≠ π/2 + kπ</Am></>, at: 10},
		{content: <>d/dx(tan x) = sec²x, with x in radians</>, at: 22},
		{content: <>sec x = 1/cos x, so sec²x ≥ 1</>, at: 34},
		{content: <>tan x increases on each branch, not its whole domain</>, at: 46},
		{content: <>d/dx tan(2x − π/3) = <Bl>2</Bl>sec²(2x − π/3)</>, at: 58},
	];
	const back = prog(f, 1350 - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={cue(id, 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
				<KeyNotesBullets x={110} y={230} w={1040} items={items} size={42} gap={74} />
				<TanAidCard x={1190} y={180} w={634} k={0.74} at={70} compact />
				<Enter at={84} style={{position: 'absolute', left: 1190, top: 560, width: 634}}>
					<div style={{position: 'relative', height: 280}}><BeamMap x={0} y={0} w={634} h={280} angle={PI / 3} kmPx={120} below={40} labels={false} /></div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, lineHeight: 1.1, color: VIOLET, marginTop: 12}}>spot speed = 1 + (spot distance)²</div>
				</Enter>
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><D11FinalFrame /></div> : null}
		</>
	);
};

