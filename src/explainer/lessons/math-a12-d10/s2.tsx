// Scenes 5 to 8: the g01 board for x + 4/x (candidates, then values), the exponential transfer, the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {EquationStrip, FrameSvg, FunctionSimulator, GivensCard, HandTag, MistakeCard, SceneHeading, TaskStrip, vis, CARD, CARD_SHADOW} from '../../math/studio';
import {cue} from './common';
import {
	AMB, AnswerBox, PlanCard, BAND, BLUE, CandTable, CoasterBadge, Frac, GREEN, HeightBars, Legend, Line, ROLE_KEY, RecallChip, RingAt, Struck, Stub, Sup, VIOLET, XEMX, XP4X, gmap,
} from './parts';

const G = {x: 1060, y: 150, w: 764, h: 560};
const W5 = {x: [0, 4.5] as [number, number], y: [0, 10] as [number, number]};
const fx4 = (x: number) => x + 4 / x;
const HALF = '½';
const EQ5 = <>f(x) = x + <Frac n="4" d="x" /></>;

const Givens: React.FC<{text: string; at?: number; glow?: [number, number]}> = ({text, at = -30, glow}) => (
	<GivensCard x={96} y={300} w={760} at={at} size={50} title="Given" lines={[{content: text, at, note: 'both ends included', role: 'height', glow}]} />
);

// ---------- 5. worked example: candidates ----------
export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const four = cue(id, 'to four'), first = cue(id, 'First'), setting = cue(id, 'Setting'), two = cue(id, 'or minus two'), reject = cue(id, 'reject'), andF = cue(id, "And f isn't"), cands = cue(id, 'The candidates');
	const M5 = gmap(G.x, G.y, G.w, G.h, W5);
	const T = [{frame: 0, x: 0.5}, {frame: first, x: 0.5}, {frame: setting, x: 4}, {frame: setting + 50, x: 4}, {frame: two, x: 2}];
	return (
		<>
			<TaskStrip text="Find the global maximum and minimum" at={2} />
			<Legend items={ROLE_KEY} />
			<EquationStrip at={-30} size={70}>{EQ5}</EquationStrip>
			<Givens text={`${HALF} ≤ x ≤ 4`} at={four - 20} glow={[reject, reject + 70]} />
			<Line at={first} x={96} y={520} dim={prog(f, setting, 14)}>f′(x) = 1 − <Frac n="4" d={<>x²</>} /></Line>
			<RecallChip x={560} y={540} at={first + 30} out={setting} size={30}>power rule: 4/x = 4x<Sup>−1</Sup></RecallChip>
			<Line at={setting} x={96} y={630} size={48} dim={prog(f, cands, 14)}>= 0 when x² = 4, so x = 2 or x = <Struck at={reject}>−2</Struck></Line>
			<HandTag x={96} y={738} text={`rejected: −2 is not in ${HALF} ≤ x ≤ 4`} at={reject + 6} size={40} color={INK} />
			<RecallChip x={96} y={780} at={andF + 10} size={30}>f is undefined at x = 0, but 0 is not in {HALF} ≤ x ≤ 4:<br />the curve is unbroken here, with no corners</RecallChip>
			<Enter at={cands} style={{position: 'absolute', left: 96, top: 930}}>
				<div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '6px 24px 10px', boxShadow: CARD_SHADOW, border: `3px solid ${INK}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: INK, whiteSpace: 'pre'}}>
					candidates: x = {HALF} (end), <span style={{color: VIOLET}}>2 (flat)</span>, 4 (end)
				</div>
			</Enter>
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W5} family={XP4X} timeline={T} color={BLUE} at={-30}
				xTicks={[{value: 0.5, label: HALF}, 1, 2, 3, 4]} yTicks={[2, 4, 6, 8]} xLabel="x" yLabel="y"
				regions={[{x: [0.5, 4], color: BAND, opacity: 0.75, at: -30}]}
				point={{at: first, out: cands}} tangent={{at: first, out: cands, halfLength: 120}}
				overlay={() => <FrameSvg>
					{[[0.5, fx4(0.5)], [4, 5]].map(([X, Y], i) => <circle key={i} cx={M5.pt(X, Y)[0]} cy={M5.pt(X, Y)[1]} r={12} fill={INK} stroke={CARD} strokeWidth={4} />)}
					<RingAt p={M5.pt(0.5, 8.5)} r={28} at={cands + 6} />
					<RingAt p={M5.pt(2, 4)} r={28} at={cands + 14} color={VIOLET} />
					<RingAt p={M5.pt(4, 5)} r={28} at={cands + 22} />
				</FrameSvg>}
				readout={{x: G.x, y: 740, width: G.w, inline: true, at: first, rows: [
					{label: 'x', value: s => s.u, digits: 2},
					{label: 'f(x)', value: s => s.fu, digits: 2, role: 'a'},
					{label: 'slope f′(x)', value: s => s.dfu, digits: 2, role: 'gradient'},
				]}} />
			<HandTag x={M5.pt(2, 0)[0]} y={M5.pt(0, 2.6)[1]} text="flat at x = 2" at={two + 10} out={cands} size={38} color={VIOLET} anchor="middle" />
		</>
	);
};

// ---------- 6. worked example: evaluate and compare ----------
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const half = cue(id, 'eight and a half'), four = cue(id, 'plus two four'), five = cue(id, 'five.'), compare = cue(id, 'Compare'), minIs = cue(id, 'minimum is'), maxIs = cue(id, 'maximum is'), endpoint = cue(id, 'endpoint'), solving = cue(id, 'Solving');
	const M5 = gmap(G.x, G.y, G.w, G.h, W5);
	const minTag = minIs + 20, maxTag = maxIs + 20;
	return (
		<>
			<TaskStrip text="Find the global maximum and minimum" at={-30} />
			<Legend items={ROLE_KEY} />
			<EquationStrip at={-30} size={70}>{EQ5}</EquationStrip>
			<Givens text={`${HALF} ≤ x ≤ 4`} />
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 506}}>
				<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK}}>candidates: x = {HALF} (end), <span style={{color: VIOLET}}>2 (flat)</span>, 4 (end)</span>
			</Enter>
			<CandTable x={96} y={572} w={900} at={-10} rows={[
				{x: `x = ${HALF}`, kind: 'end', value: <>{HALF} + 8 = <Frac n="17" d="2" /></>, approx: '8.5', at: half - 10, tag: {text: 'global max', at: maxTag}},
				{x: 'x = 2', kind: 'flat', value: '2 + 2 = 4', at: four - 6, tag: {text: 'global min', at: minTag}},
				{x: 'x = 4', kind: 'end', value: '4 + 1 = 5', at: five - 6},
			]} />
			<AnswerBox at={endpoint + 10} x={84} y={880} size={44}>global maximum <Frac n="17" d="2" /> at x = {HALF};<br />global minimum 4 at x = 2</AnswerBox>
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W5} family={XP4X} timeline={[{frame: 0, x: 0.5}, {frame: half - 30, x: 0.5}, {frame: half, x: 0.5}, {frame: four - 30, x: 0.5}, {frame: four - 6, x: 2}, {frame: five - 30, x: 2}, {frame: five - 6, x: 4}]} color={BLUE} at={-30}
				point={{at: 0, out: compare}} readout={{x: G.x, y: 740, width: G.w, inline: true, at: 0, out: solving - 14, rows: [{label: 'candidate x', value: s => s.u, digits: 2}, {label: 'value of f', value: s => s.fu, digits: 2, role: 'a'}]}}
				xTicks={[{value: 0.5, label: HALF}, 1, 2, 3, 4]} yTicks={[2, 4, 6, 8]} xLabel="x" yLabel="y"
				regions={[{x: [0.5, 4], color: BAND, opacity: 0.75, at: -30}]}
				overlay={() => <FrameSvg>
					{[[0.5, 8.5], [4, 5]].map(([X, Y], i) => <circle key={i} cx={M5.pt(X, Y)[0]} cy={M5.pt(X, Y)[1]} r={12} fill={INK} stroke={CARD} strokeWidth={4} />)}
					<HeightBars Mp={M5} bars={[
						{x: 0.5, y: 8.5, at: compare, label: '8.5', glow: prog(f, maxTag, 12)},
						{x: 2, y: 4, at: compare + 10, label: '4', glow: prog(f, minTag, 12)},
						{x: 4, y: 5, at: compare + 20, label: '5'},
					]} />
					<Stub Mp={M5} X={2} Y={4} m={0} half={80} opacity={prog(f, minTag, 12)} />
					<Stub Mp={M5} X={0.5} Y={8.5} m={-15} half={70} opacity={prog(f, maxTag, 12)} />
				</FrameSvg>} />
			<HandTag x={M5.pt(0.62, 0)[0]} y={M5.pt(0, 9.6)[1]} text="endpoint wins: not flat" at={endpoint + 4} size={40} color={GREEN} />
			<MistakeCard x={G.x} y={740} w={G.w} at={solving} size={42} wrong={<>only x = 2: maximum 4 at x = 2</>} caption={`f′(x) = 0 misses the endpoint ${HALF}`} />
		</>
	);
};

// ---------- 7. the same method on an exponential ----------
const W7 = {x: [-0.3, 3.3] as [number, number], y: [-0.1, 0.5] as [number, number]};
const EMX = <>e<Sup>−x</Sup></>;
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const three = cue(id, 'three.', 1), product = cue(id, 'By the product'), never = cue(id, 'e to the minus x is'), one = cue(id, 'equals one'), cands = cue(id, 'The candidates'), g0 = cue(id, 'g of zero'), eight = cue(id, 'eight'), nine = cue(id, 'nine'),
		greatest = cue(id, 'So the greatest'), least = cue(id, 'least is'), endZero = cue(id, 'endpoint');
	const M7 = gmap(G.x, G.y, G.w, G.h, W7);
	const T = [{frame: 0, x: 0}, {frame: product, x: 0}, {frame: one, x: 1}];
	const gTag = greatest + 16, lTag = least + 8;
	return (
		<>
			<TaskStrip text="Find the greatest and least values" at={2} />
			<Legend items={ROLE_KEY} />
			<EquationStrip at={-30} size={70}>g(x) = x{EMX}</EquationStrip>
			<Givens text="0 ≤ x ≤ 3" at={three - 20} />
			<Line at={product} x={96} y={500} size={46} dim={prog(f, never, 14)}>g′(x) = {EMX} − x{EMX} = {EMX}(1 − x)</Line>
			<RecallChip x={96} y={570} at={product + 20} out={never} size={30}>product rule (d07)</RecallChip>
			<Line at={never} x={96} y={576} size={46} dim={prog(f, cands, 14)}>{EMX} &gt; 0, so g′(x) = 0 only at x = 1</Line>
			<PlanCard x={96} y={666} w={900} out={cands - 12} fn="g" />
			<CandTable x={96} y={656} w={900} at={cands} rows={[
				{x: 'x = 0', kind: 'end', value: '0', at: g0, tag: {text: 'least', at: lTag}},
				{x: 'x = 1', kind: 'flat', value: <><Frac n="1" d="e" /></>, approx: '0.368', at: eight - 20, tag: {text: 'greatest', at: gTag}},
				{x: 'x = 3', kind: 'end', value: <><Frac n="3" d={<>e³</>} /></>, approx: '0.149', at: nine - 20},
			]} />
			<AnswerBox at={endZero} x={84} y={958} size={44}>greatest <Frac n="1" d="e" /> at x = 1;  least 0 at x = 0</AnswerBox>
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W7} family={XEMX} timeline={T} color={BLUE} at={-30}
				xTicks={[1, 2, 3]} yTicks={[0.1, 0.2, 0.3, 0.4]} xLabel="x" yLabel="y"
				regions={[{x: [0, 3], color: BAND, opacity: 0.75, at: -30}]}
				point={{at: product, out: cands}} tangent={{at: product, out: cands, halfLength: 120}}
				overlay={() => <FrameSvg>
					{[[0, 0], [3, 3 * Math.exp(-3)]].map(([X, Y], i) => <circle key={i} cx={M7.pt(X, Y)[0]} cy={M7.pt(X, Y)[1]} r={12} fill={INK} stroke={CARD} strokeWidth={4} />)}
					<HeightBars Mp={M7} bars={[
						{x: 1, y: 1 / Math.E, at: eight, label: '0.368', glow: prog(f, gTag, 12)},
						{x: 3, y: 3 * Math.exp(-3), at: nine, label: '0.149'},
					]} />
					<RingAt p={M7.pt(0, 0)} r={28} at={lTag} color={GREEN} width={6} />
					<Stub Mp={M7} X={1} Y={1 / Math.E} m={0} half={80} opacity={prog(f, cands, 12)} />
				</FrameSvg>}
				readout={{x: G.x, y: 740, width: G.w, inline: true, at: product, out: g0 - 10, rows: [
					{label: 'x', value: s => s.u, digits: 2},
					{label: 'slope g′(x)', value: s => s.dfu, digits: 3, role: 'gradient'},
				]}} />
			<HandTag x={M7.pt(1, 0)[0]} y={M7.pt(0, 0.45)[1]} text="flat at x = 1" at={one + 6} size={38} color={VIOLET} anchor="middle" />
			<HandTag x={M7.pt(0.15, 0)[0]} y={M7.pt(0, -0.05)[1] + 10} text="x = 0 is an end" at={lTag + 6} size={36} color={GREEN} />
			<MistakeCard x={G.x} y={760} w={G.w} at={endZero - 30} size={42} wrong={<>least <Frac n="3" d={<>e³</>} /> at x = 3</>} caption="x = 0 is an end too: g(0) = 0" />
		</>
	);
};

// ---------- 8. memory aid ----------
/** Small icons for the three candidate kinds (coded marks, no plates). */
export const FlatIcon: React.FC<{s?: number}> = ({s = 96}) => (
	<svg width={s} height={s} viewBox="0 0 96 96"><path d="M8,78 Q48,10 88,78" stroke={BLUE} strokeWidth={6} fill="none" /><line x1={22} x2={74} y1={44} y2={44} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" /><circle cx={48} cy={44} r={8} fill={VIOLET} /></svg>
);
export const EndIcon: React.FC<{s?: number}> = ({s = 96}) => (
	<svg width={s} height={s} viewBox="0 0 96 96"><rect x={8} y={8} width={60} height={80} fill={BAND} /><path d="M12,70 Q40,50 68,20" stroke={BLUE} strokeWidth={6} fill="none" /><line x1={68} x2={68} y1={8} y2={88} stroke={INK} strokeWidth={3} strokeDasharray="5 5" /><circle cx={68} cy={20} r={10} fill={INK} /></svg>
);
export const CornerIcon: React.FC<{s?: number}> = ({s = 96}) => (
	<svg width={s} height={s} viewBox="0 0 96 96"><path d="M10,20 L48,74 L86,20" stroke={BLUE} strokeWidth={6} fill="none" strokeLinejoin="miter" /><circle cx={48} cy={74} r={9} fill={AMB} /></svg>
);
export const AID_MAIN = 'Flats, ends and corners, then compare.';

/** The framed memory card (lesson part, so each key can light on its cue). */
export const AidCard: React.FC<{x: number; y: number; w: number; at?: number; k?: number; lights?: [number, number, number]; compareAt?: number; condAt?: number; glowCond?: number}> = ({x, y, w, at = -30, k = 1, lights, compareAt = -30, condAt = -30, glowCond = 0}) => {
	const f = useCurrentFrame();
	const keys: [React.ReactNode, React.ReactNode, string][] = [
		[<FlatIcon s={84 * k} />, <><b>flats:</b> stationary points inside</>, VIOLET],
		[<EndIcon s={84 * k} />, <><b>ends:</b> both endpoints</>, INK],
		[<CornerIcon s={84 * k} />, <><b>corners:</b> interior points where f′ doesn't exist</>, AMB],
	];
	return (
		<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{background: CARD, border: `${4 * k}px solid ${INK}`, borderRadius: 24 * k, boxShadow: `inset 0 0 0 ${8 * k}px ${CARD}, inset 0 0 0 ${10.5 * k}px ${INK}, ${CARD_SHADOW}`, padding: `${24 * k}px ${40 * k}px ${28 * k}px`}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44 * k, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64 * k, lineHeight: 1.05, color: INK, marginTop: 6 * k}}>{AID_MAIN}</div>
				<div style={{height: 2, background: 'rgba(60,45,20,0.14)', margin: `${14 * k}px 0 ${8 * k}px`}} />
				{keys.map(([icon, text, c], i) => {
					const lit = lights ? vis(f, lights[i], lights[i] + 90, 10) : 0;
					return <div key={i} style={{display: 'flex', alignItems: 'center', gap: 22 * k, marginTop: 6 * k, padding: `${2 * k}px ${10 * k}px`, borderRadius: 14, background: lit > 0 ? `rgba(231,224,242,${0.8 * lit})` : undefined}}>
						<div style={{flex: 'none', width: 84 * k, height: 84 * k}}>{icon}</div>
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 42 * k, lineHeight: 1.1, color: c}}>{text}</div>
					</div>;
				})}
				<div style={{display: 'inline-block', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44 * k, color: INK, marginTop: 14 * k, padding: `0 ${10 * k}px`, borderRadius: 12, background: `rgba(220,239,226,${vis(f, compareAt, compareAt + 90, 10)})`}}>then compare values of f, not f′</div>
				<div style={{display: 'block', width: 'fit-content', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36 * k, color: INK, marginTop: 10 * k, padding: `${2 * k}px ${12 * k}px`, borderRadius: 12, background: glowCond > 0 ? `rgba(220,239,226,${glowCond})` : '#f1ebdf', opacity: prog(f, condAt, 12)}}>closed interval, unbroken curve</div>
			</div>
		</Enter>
	);
};

export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const flats = cue(id, 'Flats are'), ends = cue(id, 'Ends are'), include = cue(id, 'Include'), compare = cue(id, 'Then compare the'), unbroken = cue(id, 'unbroken');
	return (
		<>
			<SceneHeading text="Memory aid" at={-24} size={54} />
			<AidCard x={96} y={170} w={1080} at={-20} lights={[flats, ends, include]} compareAt={compare} condAt={-20} glowCond={vis(f, unbroken, unbroken + 80, 10)} />
			<CandTable x={1230} y={170} w={594} at={-20} size={38} head={['candidate', 'value of f']} rows={[
				{x: 'x = −2', kind: 'end', value: '−2', at: -20, tag: {text: 'min', at: -20}, glow: [compare, compare + 90]},
				{x: 'x = −1', kind: 'flat', value: '2', at: -20, glow: [compare, compare + 90]},
				{x: 'x = 1', kind: 'flat', value: '−2', at: -20, tag: {text: 'min', at: -20}, glow: [compare, compare + 90]},
				{x: 'x = 3', kind: 'end', value: '18', at: -20, tag: {text: 'max', at: -20}, glow: [compare, compare + 90]},
			]} />
			<Enter at={-20} style={{position: 'absolute', left: 1230, top: 590}}>
				<CoasterBadge w={594} h={300} />
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK, marginTop: 10, width: 594}}>highest point: top of the climb, not the hump</div>
			</Enter>
		</>
	);
};
