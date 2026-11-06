// Scenes 5 to 8: the dial for a (slider and mirror), the slide and the racing flasks, the stretch, the proof.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, Mark, PAPER_DEEP, prog} from '../../kit';
import {
	Card, CardTitle, CurveSimulator, FrameSvg, HandTag, InnerSlot, LiveReadoutBoard, MarkSpan, ParameterSlider, PlateImg, Pow, ResultCard, Role, SceneHeading,
	AnswerFrame, WorkingRows, GrowthField, kf, niceNum, simAt, simGradient, simHeight, vis, fmtNum, MATH_BLUE, MATH_TEAL, MATH_AMBER, MATH_ANSWER, MATH_GRADIENT, MATH_ROLES,
} from '../../math/studio';
import type {RoleKey, SimKey} from '../../math/studio';
import {cue} from './common';
import {CurveLabel, DISPLAY, E, FLASK, FLASK_CLOUDY, FlaskField, HBrace, KRule, Legend, RecallChip} from './parts';

// ---------- 5. a dial for a ----------
export const S05: React.FC = () => {
	const id = 'dial-a';
	const f = useCurrentFrame();
	const three = cue(id, 'three'), halves = cue(id, 'halves'), back = cue(id, 'back to two'), flip = cue(id, 'flip the sign'), minus = cue(id, 'minus two'), mirrors = cue(id, 'mirrors'), dis = cue(id, 'disinfectant'), uphill = cue(id, 'Every uphill'), pos = cue(id, 'positive'), neg = cue(id, 'negative'), whatever = cue(id, 'Whatever');
	const T: SimKey[] = [
		{frame: 0, a: 2, u: 1, flip: 1}, {frame: three - 6, a: 2}, {frame: three + 34, a: 3}, {frame: halves - 46, a: 3}, {frame: halves, a: 0.5},
		{frame: back + 4, a: 0.5}, {frame: back + 38, a: 2}, {frame: minus + 6, flip: 1}, {frame: minus + 40, flip: -1},
	];
	const p = simAt(T, f);
	const label = (a: number, fl: number) => <>y = e<Pow><Role r="a">{niceNum(fl < 0 ? -a : a, 1)}</Role>x</Pow></>;
	const fieldCount = (g: number) => kf(g, [[0, 9], [minus + 10, 9], [minus + 330, 0.3]]);
	return (
		<>
			<SceneHeading text="A dial for a: any growth per cell" at={2} />
			<Legend />
			<ParameterSlider x={96} y={168} width={540} symbol="a" role="a" value={p.a} min={0.25} max={3.25} at={-30}
				ticks={[{value: 0.5, label: '½'}, {value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}]}
				mirror={(1 - p.flip) / 2} mirrorAt={flip} badgeMark={{kind: 'circle', at: whatever + 10}} />
			<CurveSimulator x={40} y={296} width={1060} height={634} window={{x: [-2.5, 4.5], y: [0, 9]}} timeline={T}
				color={MATH_BLUE} ghost={{a: 1, at: -30}} point={{at: -30}} tangent={{at: -30}} triangle={{runU: 1, at: -30}}
				xLabel="x: hours" yLabel="y: cells (millions)"
				readout={{x: 1150, y: 300, width: 674, at: -30, inline: true, rows: [
					{kind: 'height', mark: {kind: 'circle', at: pos, role: 'height'}, glow: [pos, pos + 70]},
					{kind: 'gradient', mark: {kind: 'circle', at: neg, role: 'gradient'}},
					{kind: 'ratio', glow: [whatever, 99999]},
				]}} />
			<CurveLabel x={p.flip > 0 ? 170 : 640} y={420} size={52} color={MATH_BLUE}>{label(p.a, p.flip)}</CurveLabel>
			<ResultCard x={1150} y={584} at={three + 40} out={halves - 12} size={50}>d/dx(e<Pow><Role r="a">3</Role>x</Pow>) = <Role r="a">3</Role>e<Pow><Role r="a">3</Role>x</Pow></ResultCard>
			<HandTag x={1160} y={620} text="every slope halves" at={halves + 4} out={back} role="a" size={48} />
			<HandTag x={1160} y={630} text="mirror: uphill → downhill" at={mirrors} out={pos - 6} role="a" size={46} />
			<HandTag x={640} y={500} text="always above the x-axis: y > 0" at={pos + 4} size={44} color={INK} />
			<HandTag x={1160} y={636} text="= a, every time" at={whatever + 14} role="a" size={56} marks={[{kind: 'arrow', from: [1420, 560], to: [1000, 262], bend: 0.16}]} markAt={whatever + 4} />
			<Card x={1500} y={700} w={324} h={236} at={-30} pad="8px 16px">
				<div style={{...DISPLAY(28, INK_SOFT, 700), textAlign: 'center'}}>in the flask</div>
			</Card>
			<GrowthField cx={1662} cy={828} d={190} cellLength={34} countAt={fieldCount} falling maxStartCells={9} maxCells={9} seed={5} at={-30} />
			<HandTag x={1160} y={760} text="disinfectant:" at={dis} size={40} color={INK_SOFT} />
			<HandTag x={1160} y={812} text="count falls" at={dis + 10} size={40} color={INK_SOFT} />
			<HandTag x={1160} y={880} text="just as steep" at={uphill + 30} out={pos - 6} size={40} role="gradient" />
		</>
	);
};

// ---------- 6. the early flask: the slide adds no new factor ----------
const FlaskBoard: React.FC<{x: number; y: number; w: number; at: number; title: React.ReactNode; titleRole: RoleKey; cells: number; rate: number; perCell: number; cellsMark?: number; perMark?: number; rateBarColor: string; tickAt?: number}> = ({x, y, w, at, title, titleRole, cells, rate, perCell, cellsMark, perMark, rateBarColor, tickAt}) => {
	const f = useCurrentFrame();
	const row = (label: string, role: RoleKey, v: number, unit: string, mark?: number, markRole?: RoleKey) => (
		<div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '4px 0', borderTop: `2px solid ${PAPER_DEEP}`}}>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: MATH_ROLES[role].ink}}>{label}</span>
			<span style={{display: 'flex', alignItems: 'baseline', gap: 10}}>
				<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: MATH_ROLES[role].ink, fontVariantNumeric: 'tabular-nums'}}>{mark !== undefined ? <MarkSpan kind="circle" at={mark} role={markRole ?? role} width={5}>{fmtNum(v)}</MarkSpan> : fmtNum(v)}</span>
				<span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT, width: 236, whiteSpace: 'nowrap'}}>{unit}</span>
			</span>
		</div>
	);
	return (
		<Card x={x} y={y} w={w} at={at} pad="10px 26px 12px">
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
				<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, letterSpacing: 2, textTransform: 'uppercase', color: MATH_ROLES[titleRole].ink}}>{title}</span>
				<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, color: INK_SOFT}}>at x = 0</span>
			</div>
			{row('cells', 'height', cells, 'million', cellsMark)}
			{row('growth rate', 'gradient', rate, 'million per hour')}
			<div style={{position: 'relative', height: 26, margin: '0 0 8px'}}>
				<div style={{position: 'absolute', left: 0, right: 0, top: 6, height: 16, borderRadius: 8, background: PAPER_DEEP}} />
				<div style={{position: 'absolute', left: 0, top: 6, height: 16, borderRadius: 8, width: `${(Math.max(0, rate) / 3) * 100}%`, background: rateBarColor}} />
				{tickAt !== undefined ? <svg width={60} height={60} style={{position: 'absolute', left: `calc(${(rate / 3) * 100}% + 10px)`, top: -22, overflow: 'visible'}}><Mark x={30} y={26} at={tickAt} size={44} color={MATH_ANSWER} /></svg> : null}
			</div>
			{row('per cell', 'a', perCell, 'gradient ÷ height', perMark, 'a')}
		</Card>
	);
};

export const S06: React.FC = () => {
	const id = 'early-flask-slide';
	const f = useCurrentFrame();
	const left = cue(id, 'left'), keeps = cue(id, 'keeps its slope'), one2 = cue(id, 'one', 3), back = cue(id, 'Back to your guess'), early = cue(id, 'the early flask has'), hour1 = cue(id, 'hour', 3), hour2 = cue(id, 'hour', 4), fastHas = cue(id, 'The fast strain'), more = cue(id, 'more cells'), per = cue(id, 'Per cell'), measures = cue(id, "That's what");
	const T: SimKey[] = [{frame: 0, a: 1, b: 0, u: 0}, {frame: left - 10, b: 0}, {frame: left + 40, b: 1}];
	const p = simAt(T, f);
	const A = back; // part A ends, anchor comparison starts
	const label = (b: number) => (b < 0.02 ? <>y = e<Pow>x</Pow></> : <>y = e<Pow>x <Role r="b">+ {niceNum(b, 1)}</Role></Pow></>);
	// part B: cells settle first, then the growth-rate tickers race; the early flask's passes and stops higher
	const cellsUp = prog(f, A + 24, 40);
	const fastRate = kf(f, [[hour1, 0], [hour1 + 56, 2]], false);
	const u = Math.max(0, Math.min(1, (f - hour1) / 106));
	const earlyRate = 2.72 * u * u;
	const clk = (g: number) => Math.max(0, g - A) * 0.00028;
	const partB = vis(f, A + 2, undefined, 16);
	const partA = 1 - prog(f, A - 6, 12);
	return (
		<>
			<SceneHeading text="The early flask: the slide adds no new factor" at={2} size={56} />
			<Legend />
			{partA > 0.001 ? (
				<div style={{position: 'absolute', inset: 0, opacity: partA}}>
					<ParameterSlider x={96} y={168} width={500} symbol="b" role="b" value={p.b} min={-0.25} max={1.4} at={-30} ticks={[{value: 0, label: '0'}, {value: 1, label: '1'}]} />
					<CurveSimulator x={40} y={296} width={1060} height={634} window={{x: [-2, 2], y: [0, 8]}} timeline={T}
						color={q => (q.b > 0.02 ? MATH_TEAL : INK)} ghost={{a: 1, at: left}} point={{at: -30}} tangent={{at: -30}} triangle={{runU: 1, at: -30}}
						xLabel="x: hours" yLabel="y: cells (millions)"
						readout={{x: 1150, y: 300, width: 674, at: -30, inline: true, rows: [{kind: 'height'}, {kind: 'gradient'}, {kind: 'ratio'}]}}
						/>
					<CurveLabel x={210} y={420} size={52} color={p.b > 0.02 ? MATH_TEAL : INK}>{label(p.b)}</CurveLabel>
					<HandTag x={1160} y={604} text="slides 1 hour left" at={left + 20} size={46} role="b" />
					<HandTag x={1160} y={670} text="each tangent keeps its slope" at={keeps} size={44} role="b" />
					<ResultCard x={1150} y={720} at={one2} size={52}>d/dx(e<Pow>x <Role r="b">+ 1</Role></Pow>) = e<Pow>x <Role r="b">+ 1</Role></Pow></ResultCard>
					<HandTag x={1170} y={862} text="no new factor" at={one2 + 16} size={52} role="b" />
				</div>
			) : null}
			{partB > 0.001 ? (
				<div style={{position: 'absolute', inset: 0, opacity: partB}}>
					{[
						{x: 96, role: 'a' as RoleKey, name: 'fast strain', eq: <>y = <E p={<><Role r="a">2</Role>x</>} /></>, cells: 1 * cellsUp, rate: fastRate, per: 2, count: (g: number) => 8 * Math.exp(2 * clk(g)), seed: 21, cloudy: 0.25, bar: MATH_BLUE},
						{x: 1000, role: 'b' as RoleKey, name: 'early flask', eq: <>y = <E p={<>x <Role r="b">+ 1</Role></>} /></>, cells: 2.72 * cellsUp, rate: earlyRate, per: 1, count: (g: number) => 8 * Math.exp(clk(g) + 1), seed: 31, cloudy: 0.6, bar: MATH_TEAL},
					].map((c, i) => (
						<React.Fragment key={i}>
							<div style={{position: 'absolute', left: c.x + 300, top: 170}}>
								<span style={DISPLAY(44, MATH_ROLES[c.role].ink)}>{c.name}</span><span style={DISPLAY(44)}>{'   '}{c.eq}</span>
							</div>
							<FlaskField x={c.x + 20} y={168} w={220} cloudy={c.cloudy} leaderAt={A + 10}
								field={{cx: c.x + 560, cy: 372, d: 230, countAt: c.count, seed: c.seed, maxCells: 30, at: A}} />
							<FlaskBoard x={c.x} y={510} w={824} at={A + 6} title={c.name} titleRole={c.role} cells={c.cells} rate={c.rate} perCell={c.per} rateBarColor={c.bar}
								cellsMark={i === 1 ? more : undefined} perMark={per + i * 6} tickAt={i === 1 ? hour2 : undefined} />
						</React.Fragment>
					))}
					<HandTag x={1240} y={884} text="gains faster now" at={hour2 + 6} out={per} size={50} color={MATH_ANSWER} />
					<HandTag x={960} y={862} text="growth per cell = a" at={per + 16} out={measures - 4} size={50} role="a" anchor="middle" />
					<div style={{position: 'absolute', left: 0, right: 0, top: 830, textAlign: 'center', opacity: prog(f, measures, 12)}}>
						<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: MATH_BLUE}}>a sets gradient ÷ height</span>
					</div>
				</div>
			) : null}
		</>
	);
};

// ---------- 7. three flasks: the stretch scales everything ----------
export const S07: React.FC = () => {
	const id = 'three-flasks-stretch';
	const f = useCurrentFrame();
	const three = cue(id, 'three identical'), eq = cue(id, "That's y"), every = cue(id, 'Every count'), stretches = cue(id, 'stretches'), triples = cue(id, 'triples'), ride = cue(id, 'ride'), one = cue(id, 'one'), only = cue(id, 'Only a');
	const T: SimKey[] = [{frame: 0, a: 1, k: 1, u: 0}, {frame: stretches - 4, k: 1}, {frame: stretches + 46, k: 3}];
	const p = simAt(T, f);
	const n = 1 + prog(f, three + 12, 14) + prog(f, three + 24, 14);
	const label = (k: number) => (k < 1.02 ? <>y = e<Pow>x</Pow></> : <>y = <Role r="k">{niceNum(k, 1)}</Role>e<Pow>x</Pow></>);
	return (
		<>
			<SceneHeading text="Three flasks: the stretch scales everything" at={2} />
			<Legend />
			{[0, 1, 2].map(i => {
				const e = i === 0 ? 1 : prog(f, three + i * 12, 18);
				return <div key={i} style={{position: 'absolute', inset: 0, opacity: e, transform: `translateY(${(1 - e) * 30}px)`}}><PlateImg plate={FLASK_CLOUDY} x={112 + i * 212} y={184} w={190} /></div>;
			})}
			<HBrace x1={112} x2={724} y={424} at={eq} color={MATH_AMBER} />
			<Enter at={eq} style={{position: 'absolute', left: 96, width: 640, top: 476, textAlign: 'center'}}>
				<span style={DISPLAY(60)}>y = <Role r="k">3</Role>e<Pow>x</Pow></span>
			</Enter>
			<LiveReadoutBoard x={96} y={572} width={640} at={-30} title="Three flasks counted together" inline rows={[
				{label: 'cells', value: n, role: 'height', unit: 'million'},
				{label: 'growth rate', value: n, role: 'gradient', unit: 'million per hour', glow: [every, every + 60]},
			]} />
			<ResultCard x={96} y={796} at={ride} out={only - 4} size={52}>d/dx(<Role r="k">3</Role>e<Pow>x</Pow>) = <Role r="k">3</Role>e<Pow>x</Pow></ResultCard>
			<HandTag x={520} y={840} text="rides along" at={ride + 14} out={only - 4} size={48} role="k" />
			<Card x={96} y={790} w={640} at={only} pad="10px 22px">
				{[['a', 'a (growth per cell): slopes × a'], ['b', 'b (start time): no new factor'], ['k', 'k (how many flasks): heights and slopes × k']].map(([r, t]) => (
					<div key={r} style={{...DISPLAY(32, MATH_ROLES[r as RoleKey].ink, 700), lineHeight: 1.35}}>{t}</div>
				))}
			</Card>
			<ParameterSlider x={800} y={160} width={520} symbol="k" role="k" value={p.k} min={0.6} max={3.4} at={-30} ticks={[{value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}]} />
			<CurveSimulator x={790} y={272} width={1040} height={660} window={{x: [-2, 2], y: [0, 8]}} timeline={T}
				color={q => (q.k > 1.02 ? MATH_AMBER : INK)} label={q => label(q.k)} ghost={{k: 1, at: stretches}} point={{at: -30}} tangent={{at: -30}} triangle={{runU: 1, at: -30}}
				xLabel="x: hours" yLabel="y: cells (millions)"
				readout={{x: 900, y: 336, width: 450, at: -30, inline: true, rows: [{kind: 'height'}, {kind: 'gradient'}, {kind: 'ratio', mark: {kind: 'circle', at: one, role: 'a'}}]}}
				overlay={g => g.tri ? <HandTag x={(g.tri.start[0] + g.tri.corner[0]) / 2} y={g.tri.start[1] + 92} text="same run" at={triples - 20} size={44} color={MATH_GRADIENT} anchor="middle" /> : null} />
			<RecallChip x={900} y={604} at={ride} size={30}>Year 11: d/dx(k·f) = k·f′</RecallChip>
		</>
	);
};

// ---------- 8. the chain rule proof ----------
export const S08: React.FC = () => {
	const id = 'chain-proof';
	const f = useCurrentFrame();
	const take = cue(id, 'Take'), call = cue(id, 'Call the inside'), b2 = cue(id, 'b', 2), u3 = cue(id, 'u', 3), isA = cue(id, 'is just a'), because = cue(id, 'because b'), mult = cue(id, 'multiplies'), b4 = cue(id, 'b', 4), likeEarly = cue(id, 'just like the early'), kOut = cue(id, 'k out');
	const slot = <InnerSlot><Role r="a">a</Role>x + <Role r="b">b</Role></InnerSlot>;
	const Tmini: SimKey[] = [{frame: 0, a: 1, b: 1, u: 0.6}];
	return (
		<>
			<SceneHeading text="Prove it with the chain rule" at={2} />
			<Legend />
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 166}}>
				<span style={DISPLAY(62)}>Prove: d/dx(e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow>) = <Role r="a">a</Role>e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow></span>
			</Enter>
			<div style={{position: 'absolute', left: 1290, top: 140, opacity: 0.85}}>
				{[['a', 'a: slopes × a'], ['b', 'b: no new factor'], ['k', 'k: heights and slopes × k']].map(([r, t]) => <div key={r} style={{...DISPLAY(30, MATH_ROLES[r as RoleKey].ink, 700), lineHeight: 1.3}}>{t}</div>)}
			</div>
			<Card x={96} y={290} w={560} h={624} at={-30} pad="16px 28px">
				<CardTitle>Year 11 chain rule</CardTitle>
				<div style={DISPLAY(42)}>dy/dx = dy/du × du/dx</div>
				<div style={{height: 2, background: PAPER_DEEP, margin: '16px 0 12px'}} />
				<CardTitle>The inside part</CardTitle>
				<div style={{...DISPLAY(66), marginTop: 18}}>e<Pow>{slot}</Pow></div>
				<Enter at={call} style={{marginTop: 4}}><div style={DISPLAY(32, INK_SOFT, 600)}>outside: e to a power</div><div style={DISPLAY(32, INK_SOFT, 600)}>inside part: u = <Role r="a">a</Role>x + <Role r="b">b</Role></div></Enter>
				<div style={{marginTop: 10, opacity: prog(f, because, 10)}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: MATH_TEAL}}>b is a constant: its derivative is 0</span></div>
			</Card>
			<div style={{opacity: prog(f, likeEarly, 14)}}>
				<CurveSimulator x={96} y={704} width={560} height={250} window={{x: [-2, 2], y: [0, 8]}} timeline={Tmini} color={MATH_TEAL} ghost={{a: 1, at: -30}} xTicks={[-1, 0, 1]} yTicks={[]} xLabel="" yLabel="" at={-30} />
				<HandTag x={180} y={772} text="early flask: slid, no factor" at={likeEarly} size={36} role="b" />
			</div>
			<WorkingRows x={720} y={290} w={1100} size={66} oldSize={42} gap={14} rows={[
				{left: 'y', right: <E p={slot} />, at: take},
				{left: 'let u', right: <><Role r="a">a</Role>x + <Role r="b">b</Role></>, at: b2},
				{left: <>y = <E p="u" />, so dy/du</>, right: <E p="u" />, at: u3},
				{left: 'du/dx', right: <MarkSpan kind="box" at={isA + 10} role="a"><Role r="a">a</Role></MarkSpan>, at: isA},
				{left: 'dy/dx', right: <>dy/du × du/dx = <E p="u" /> × <Role r="a">a</Role></>, at: mult},
				{left: 'dy/dx', right: <><MarkSpan kind="box" at={b4 + 8} role="a"><Role r="a">a</Role></MarkSpan><E p={slot} /></>, at: b4, answer: true},
			]} />
			<HandTag x={1440} y={746} text="inside part kept" at={b4 + 24} out={kOut} size={44} color={MATH_ANSWER} />
			<Enter at={kOut} style={{position: 'absolute', left: 720, top: 790}}>
				<span style={DISPLAY(54)}><AnswerFrame at={kOut + 4}><KRule /></AnswerFrame></span>
			</Enter>
			<HandTag x={880} y={918} text="k rides along" at={kOut + 20} size={42} role="k" />
		</>
	);
};
