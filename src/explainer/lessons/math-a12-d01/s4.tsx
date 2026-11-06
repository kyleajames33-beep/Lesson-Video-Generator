// Scenes 14 to 17: attempt 2 and its feedback, the handoff, the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, CardTitle, CurveSimulator, HandTag, InnerSlot, KeyNotesBullets, LiveReadoutBoard, MarkSpan, MistakeCard, PlateImg, Pow, QuestionCard, Role, RolesOn,
	SceneHeading, TaskStrip, WorkingRows, MATH_BLUE, MATH_ROLES, MATH_STRAND_ACCENT, CARD, CARD_SHADOW,
} from '../../math/studio';
import type {RoleKey, SimKey} from '../../math/studio';
import {cue, hold, LN2} from './common';
import {CurveLabel, WorkingSpace, DISPLAY, FLASK, FLASK_CLOUDY, FlaskField, KRule, Legend, RecallChip} from './parts';

// ---------- 14. attempt 2 ----------
export const S14: React.FC = () => {
	const id = 'attempt-2';
	return (
		<RolesOn on={false}>
			<WorkingSpace y={676} h={148} />
			<QuestionCard at={0} size={54} w={1460} y={214} hold={hold(id)} pauseAt={cue(id, 'Pause here')}>
				<div>A curve has equation y = 3e<Pow>−2x</Pow>.</div>
				<div style={{marginTop: 18}}>(a) Find the gradient of the curve at x = 0.</div>
				<div style={{marginTop: 10}}>(b) Explain why the curve is decreasing for all real values of x.</div>
			</QuestionCard>
		</RolesOn>
	);
};

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const start = cue(id, 'three times minus two'), minus6 = cue(id, 'which is minus six'), atZero = cue(id, 'At zero'), six2 = cue(id, 'six', 2), pos = cue(id, 'positive'), times6 = cue(id, 'Times minus six'), dec = cue(id, 'decreasing'), isnt = cue(id, "It isn't"), does = cue(id, 'does');
	const T: SimKey[] = [{frame: 0, a: 2, flip: -1, k: 3, u: 0}, {frame: dec, u: 0}, {frame: dec + 120, u: -3.6}];
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= start}>
				<QuestionCard at={-40} shrinkAt={-30}>
					<div>A curve has equation y = <Role r="k">3</Role>e<Pow><MarkSpan kind="underline" at={start + 6} role="a"><Role r="a">−2</Role>x</MarkSpan></Pow>.</div>
					<div style={{marginTop: 18}}>(a) Find the gradient of the curve at <MarkSpan kind="underline" at={atZero}>x = 0</MarkSpan>.</div>
					<div style={{marginTop: 10}}>(b) Explain why the curve is decreasing <MarkSpan kind="underline" at={pos}>for all real values of x</MarkSpan>.</div>
				</QuestionCard>
			</RolesOn>
			<Card x={1130} y={150} w={694} at={start} pad="14px 26px 16px">
				<CardTitle>Match the pattern</CardTitle>
				<div style={{display: 'flex', gap: 46}}><span style={DISPLAY(52, MATH_ROLES.k.ink)}>k = 3</span><span style={DISPLAY(52, MATH_ROLES.a.ink)}>a = −2</span></div>
			</Card>
			<WorkingRows x={96} y={396} w={1040} size={56} oldSize={40} gap={14} rows={[
				{left: 'dy/dx', right: <><Role r="k">3</Role> × (<Role r="a">−2</Role>) × e<Pow><InnerSlot><Role r="a">−2</Role>x</InnerSlot></Pow></>, at: start + 4},
				{right: <>−6e<Pow><InnerSlot><Role r="a">−2</Role>x</InnerSlot></Pow></>, at: minus6, answer: true},
				{left: 'at x = 0', right: <>−6e⁰ = −6</>, at: six2 - 6, answer: true},
			]} />
			<Card x={96} y={650} w={1040} at={pos} pad="10px 24px 12px">
				<div style={DISPLAY(44)}>e<Pow><Role r="a">−2</Role>x</Pow> &gt; 0 for every x</div>
				<div style={{...DISPLAY(44), opacity: prog(f, times6, 12)}}>(−6) × (positive) &lt; 0, so dy/dx &lt; 0</div>
			</Card>
			<CurveLabel x={1500} y={440} size={46}>y = <Role r="k">3</Role>e<Pow><Role r="a">−2</Role>x</Pow></CurveLabel>
			<MistakeCard x={96} y={796} w={1040} at={isnt} wrong={<>decreasing because y &lt; 0</>} caption="y > 0; the minus comes from a = −2" size={46} />
			<CurveSimulator x={1170} y={384} width={660} height={548} window={{x: [-0.5, 2.5], y: [0, 4]}} timeline={T} color={INK}
				point={{at: atZero}} tangent={{at: six2}}
				xTicks={[0, 1, 2]} yTicks={[0, 1, 2, 3, 4]} xLabel="x" yLabel="y" at={-30}
				overlay={g => (
					<>
						<HandTag x={g.pt[0] + 40} y={g.pt[1] - 70} text="downhill" at={six2 + 10} size={42} role="gradient" />
						<HandTag x={1470} y={560} text="never below the x-axis" at={does - 20} size={40} color={INK} />
					</>
				)} />
		</>
	);
};

// ---------- 16. handoff ----------
export const S16: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const next = cue(id, 'Next'), twoX = cue(id, 'two to the x'), times = cue(id, 'times x'), find = cue(id, 'Find that number');
	const T: SimKey[] = [{frame: 0, a: LN2, u: LN2}];
	const clk = (g: number) => Math.max(0, g) * 0.0018;
	return (
		<>
			<SceneHeading text="Next: a strain that doubles every hour" at={2} />
			<Legend />
			<div style={{position: 'absolute', left: 96, top: 162, opacity: 0.9}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>So far: copy the exponential, then multiply by k and a.</span></div>
			<FlaskField x={116} y={250} w={320} cloudy={0.35} leaderAt={next + 6} field={{cx: 660, cy: 452, d: 360, countAt: g => 8 * Math.pow(2, clk(g)), seed: 41, maxCells: 30}} />
			<Enter at={next} style={{position: 'absolute', left: 96, width: 380, top: 650, textAlign: 'center'}}><span style={DISPLAY(42, INK, 800)}>doubles every hour</span></Enter>
			<LiveReadoutBoard x={96} y={724} width={760} at={next + 10} inline rows={[{label: 'cells at x = 1 hour', value: 2, role: 'height', unit: 'million'}]} />
			<RecallChip x={96} y={850} at={find} size={34}>Next: exponentials with other bases</RecallChip>
			<CurveSimulator x={900} y={168} width={930} height={640} window={{x: [-2, 2], y: [0, 8]}} timeline={T} color={INK} draw={{at: next + 4, dur: 40}}
				ghost={{a: 1, at: next}} point={{at: next + 40}} dropLine={{at: next + 40}}
				xLabel="x: hours" yLabel="y: cells (millions)"
				overlay={g => <HandTag x={g.pt[0] + 26} y={g.pt[1] + 40} text="2 million at 1 hour" at={next + 50} size={38} color={INK} />} />
			<CurveLabel x={1100} y={300} at={twoX} size={52}>y = 2<Pow>x</Pow></CurveLabel>
			<HandTag x={1560} y={300} text="eˣ (dashed)" at={next + 20} size={38} color={INK_SOFT} />
			<Enter at={times} style={{position: 'absolute', left: 980, top: 838}}>
				<div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '4px 30px 10px', boxShadow: CARD_SHADOW, border: '3px solid rgba(60,45,20,0.14)', ...DISPLAY(62)}}>
					2<Pow>x</Pow> = e<Pow><span style={{display: 'inline-block', border: `0.08em solid ${MATH_BLUE}`, borderRadius: '0.2em', padding: '0 0.18em', color: MATH_BLUE}}>?</span> × x</Pow>
				</div>
			</Enter>
			<HandTag x={1450} y={884} text="growth per cell?" at={times + 18} size={48} role="a" />
		</>
	);
};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const g = (k = true) => <>{k ? <Role r="k">k</Role> : null}e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow></>;
	const items = [
		{content: <>d/dx(e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow>) = <Role r="a">a</Role>e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow> and d/dx({g()}) = <Role r="k">k</Role>·<Role r="a">a</Role>·e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow>.</>, at: 10},
		{content: <>For y = {g()}: gradient = <Role r="a">a</Role> × height. <Role r="a">a</Role> sets the gradient compared with the height; <Role r="b">b</Role> slides the curve (no new factor); <Role r="k">k</Role> scales heights and slopes together.</>, at: 22},
		{content: <>Proof: u = <Role r="a">a</Role>x + <Role r="b">b</Role>, du/dx = <Role r="a">a</Role>, so dy/dx = e<Pow>u</Pow> × <Role r="a">a</Role> = <Role r="a">a</Role>e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow>.</>, at: 34},
		{content: <>For e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow> with negative <Role r="a">a</Role>: gradient negative, but y stays positive (e to any power is positive).</>, at: 46},
		{content: <>Trap: not 3x·e<Pow>3x − 1</Pow>. The power rule needs x in the base.</>, at: 58},
	];
	const keys: {r: RoleKey; t: string; icon: React.ReactNode}[] = [
		{r: 'a', t: 'a: growth per cell', icon: <PlateImg plate={FLASK_CLOUDY} x={8} y={0} w={64} />},
		{r: 'b', t: 'b: start time', icon: <PlateImg plate={FLASK} x={8} y={0} w={64} />},
		{r: 'k', t: 'k: how many flasks', icon: <>{[0, 1, 2].map(i => <PlateImg key={i} plate={FLASK_CLOUDY} x={i * 30} y={20} w={42} />)}</>},
	];
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Key notes: what to write in your book" at={2} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
			<KeyNotesBullets x={110} y={196} w={1010} items={items} size={40} gap={30} />
			<Enter at={70} style={{position: 'absolute', left: 1170, top: 196, width: 654}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 34px 26px'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.05, color: INK, marginTop: 6}}>Copy the exponential, then multiply by <Role r="k">k</Role> and <Role r="a">a</Role>.</div>
					<div style={{height: 2, background: 'rgba(60,45,20,0.14)', margin: '18px 0 10px'}} />
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: '#8a5a12'}}>the flask key</div>
					{keys.map((k, i) => (
						<div key={k.r} style={{display: 'flex', alignItems: 'center', gap: 22, marginTop: 10, opacity: prog(f, 80 + i * 8, 12)}}>
							<div style={{position: 'relative', width: 112, height: 84, flex: 'none'}}>{k.icon}</div>
							<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: MATH_ROLES[k.r].ink}}>{k.t}</span>
						</div>
					))}
					<div style={{...DISPLAY(36), marginTop: 18, opacity: prog(f, 104, 12)}}><KRule /></div>
				</div>
			</Enter>
		</>
	);
};

