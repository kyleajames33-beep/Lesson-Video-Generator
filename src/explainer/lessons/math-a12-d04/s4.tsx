// Scenes 13 to 16: attempt 2 and its feedback, the handoff to the sine curve, the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {
	AnswerFrame, CARD, CARD_SHADOW, Card, FunctionSimulator, GivensStrip, HandTag, KeyNotesBullets, LOG_BASE_FAMILY, MarkSpan, MistakeCard, PreloadPlates, QuestionCard,
	RolesOn, SceneHeading, TaskStrip, WorkingRows, MATH_STRAND_ACCENT, piTicks,
} from '../../math/studio';
import type {FnFamily, FnKey} from '../../math/studio';
import type {Range} from '../../math/graphs';
import {cue, hold} from './common';
import {
	AMB, AttemptStage, Chip, CurveLabel, DISPLAY, F, Frac, GUITAR, GuitarImg, Lg, METER, MeterImg, NAVY, OLIVE, QAxes, RecallChip, VIOLET, WIN, gmap, logCurve,
} from './parts';

// ---------- 13. attempt 2 ----------
const Third = () => <Lg b="⅓" />;
export const Q2: React.FC<{u?: {base: number; dom: number; inc: number}}> = ({u}) => (
	<>
		<div>Consider the function h(x) = {u ? <MarkSpan kind="underline" at={u.base} role="k"><Third /> x</MarkSpan> : <><Third /> x</>}, for {u ? <MarkSpan kind="underline" at={u.dom}>x &gt; 0</MarkSpan> : <>x &gt; 0</>}.</div>
		<div style={{marginTop: 14}}>(a) Find h′(x).</div>
		<div style={{marginTop: 8}}>(b) State whether h is {u ? <MarkSpan kind="underline" at={u.inc}>increasing or decreasing</MarkSpan> : 'increasing or decreasing'} for x &gt; 0, giving a reason.</div>
	</>
);
export const S13: React.FC = () => {
	const id = 'scene-13';
	const pause = cue(id, 'Pause here');
	return (
		<AttemptStage hold={hold(id)} pauseAt={pause} heading="Last one" size={46} given={[<>h(x) = <Third /> x</>, <>x &gt; 0</>, <>increasing or decreasing?</>]}
			picture={<QAxes w={720} h={380} shadeRight tag="rising or falling?" />}>
			<Q2 />
		</AttemptStage>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'scene-14';
	const f = useCurrentFrame();
	const r1 = cue(id, 'of a third'), law = cue(id, 'The natural log of a third', 2), neg = cue(id, 'which is negative'), pos = cue(id, 'And x is positive'), dec = cue(id, 'is decreasing'), used = cue(id, 'If you used');
	const G = {x: 1150, y: 330, w: 674, h: 590};
	const win = {x: [-0.3, 4.5] as Range, y: [-2, 2] as Range};
	const T: FnKey[] = [{frame: 0, x: 1}];
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= r1}>
				<QuestionCard at={-40} shrinkAt={-30} w={1460} y={200} heading="Last one">
					<Q2 u={{base: r1, dom: pos, inc: dec}} />
				</QuestionCard>
			</RolesOn>
			<GivensStrip x={1160} y={252} size={36} maxW={664} items={[
				{content: <>h(x) = <Third /> x</>, at: 6},
				{content: 'x > 0', at: r1 + 10},
				{content: 'increasing or decreasing?', at: r1 + 20},
			]} />
			<Card x={96} y={470} w={640} at={-30} out={r1 - 8} pad="14px 26px 16px">
				<div style={DISPLAY(30, INK_SOFT, 700)}>Match the pattern</div>
				<div style={{...DISPLAY(48), marginTop: 6}}><Lg b="a" /> x with a = <span style={{color: AMB}}>⅓</span></div>
				<div style={{...DISPLAY(48), marginTop: 10}}>d/dx(<Lg b="a" /> x) = <Frac n="1" d={<>x ln a</>} /></div>
			</Card>
			<WorkingRows x={96} y={470} w={1030} size={56} oldSize={42} gap={14} rows={[
				{left: 'h′(x)', right: <Frac n="1" d={<>x <span style={{color: AMB}}>ln ⅓</span></>} />, at: r1},
				{right: <>−<Frac n="1" d={<>x ln 3</>} /></>, at: neg},
			]} />
			<RecallChip x={600} y={480} at={law} size={30}>Year 11 log law: ln(1/3) = −ln 3</RecallChip>
			<Enter at={neg + 10} style={{position: 'absolute', left: 600, top: 584}}><span style={DISPLAY(34, INK_SOFT, 700)}>ln 3 ≈ 1.099</span></Enter>
			<HandTag x={850} y={614} text="factor < 0" at={neg + 20} size={44} role="k" />
			<Enter at={dec} style={{position: 'absolute', left: 96, top: 700}}>
				<span style={DISPLAY(40, INK, 800)}><AnswerFrame at={dec + 4}>x &gt; 0 and ln 3 &gt; 0, so h′(x) &lt; 0: h is decreasing</AnswerFrame></span>
			</Enter>
			<MistakeCard x={96} y={800} w={1030} at={used} size={42} wrong={<>h′(x) = <Frac n="1" d="x ln 3" />, so increasing</>} caption="a base below 1 has ln a < 0" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={win} family={LOG_BASE_FAMILY} baseParams={{c: 1 / 3}} timeline={T} color={INK}
				xTicks={[1, 2, 3, 4]} yTicks={[-1, 1]} xLabel="x" yLabel="y"
				regions={[{x: [0, 4.5], color: '#f8e8c8', opacity: 0.55, at: -30}]}
				point={{at: dec - 6}} tangent={{at: dec, halfLength: 170}}
				overlay={g => <HandTag x={g.pt[0] + 40} y={g.pt[1] + 70} text="downhill" at={dec + 10} size={44} color={VIOLET} />} />
			<CurveLabel x={gmap(G.x, G.y, G.w, G.h, win).pt(2.4, -0.9)[0]} y={gmap(G.x, G.y, G.w, G.h, win).pt(2.4, -0.9)[1] + 10} color={INK} size={42}>y = <Third /> x</CurveLabel>
		</>
	);
};

// ---------- 15. handoff: the sine curve ----------
/** The final frame (d05 opens on it): sin x on the radian window, a violet tangent at (0, 0), "gradient ?" and the Next chip. */
export const SINE_STAGE = {x: 330, y: 200, w: 1260, h: 660};
export const SINE_WIN = {x: [-Math.PI, 2 * Math.PI] as Range, y: [-1.5, 1.5] as Range};
const SIN: FnFamily = {f: u => Math.sin(u), df: u => Math.cos(u)};
export const S15: React.FC = () => {
	const id = 'scene-15';
	const f = useCurrentFrame();
	const next = cue(id, 'Next'), here = cue(id, "Here's the sine");
	const logsOut = next - 6;
	const lo = 1 - prog(f, logsOut, 14);
	const sineIn = prog(f, next + 4, 14);
	const M = gmap(140, 220, 1100, 680, WIN);
	return (
		<>
			<PreloadPlates plates={[GUITAR, METER]} />
			<div style={{position: 'absolute', left: 96, top: 100}}><HandText text="So far: divide the curve, divide the slope." at={2} size={40} color={INK_SOFT} cps={34} /></div>
			{lo > 0.001 ? (
				<div style={{position: 'absolute', inset: 0, opacity: lo}}>
					<FunctionSimulator x={140} y={220} width={1100} height={680} window={WIN} family={LOG_BASE_FAMILY} baseParams={{c: 2}} timeline={[{frame: 0, x: 1}]} color={NAVY}
						xTicks={[1, 2, 3, 4, 5]} yTicks={[-2, -1, 1, 2]} xLabel="x" yLabel="y" draw={{at: 4, dur: 30}}
						curves={[logCurve(Math.E, {color: INK, width: 6, at: 14}), logCurve(0.5, {color: INK_SOFT, width: 6, at: 24, dash: '4 0'})]} point={{at: 30, color: INK}} />
					<CurveLabel x={M.pt(3.6, 2.2)[0]} y={M.pt(3.6, 2.2)[1] - 30} color={NAVY} size={40}>y = <Lg b="2" /> x</CurveLabel>
					<CurveLabel x={M.pt(3.6, 1.3)[0]} y={M.pt(3.6, 1.3)[1] + 6} color={INK} size={40}>y = ln x</CurveLabel>
					<CurveLabel x={M.pt(3.4, -1.8)[0]} y={M.pt(3.4, -1.8)[1] + 10} color={INK_SOFT} size={40}>y = <Lg b="½" /> x</CurveLabel>
					<GuitarImg x={1300} y={240} w={520} />
					<CurveLabel x={1310} y={460} color={NAVY} size={36}>factor <F a="2" /> ≈ 1.44</CurveLabel>
					<MeterImg x={1380} y={580} w={330} />
					<CurveLabel x={1310} y={840} color={OLIVE} size={36}>factor <F a="10" /> ≈ 0.43</CurveLabel>
				</div>
			) : null}
			<div style={{position: 'absolute', inset: 0, opacity: sineIn}}>
				<FunctionSimulator x={SINE_STAGE.x} y={SINE_STAGE.y} width={SINE_STAGE.w} height={SINE_STAGE.h} window={SINE_WIN} family={SIN} timeline={[{frame: 0, x: 0}]} color={INK}
					draw={{at: next + 8, dur: 40}} xTicks={piTicks(-1, 2, 2)} yTicks={[-1, 1]} xLabel="x (radians)" yLabel="y"
					point={{at: here}} tangent={{at: here + 10, halfLength: 200}} />
				<CurveLabel x={SINE_STAGE.x + 980} y={SINE_STAGE.y + 70} at={next + 30} size={48}>y = sin x</CurveLabel>
			</div>
			<Chip x={SINE_STAGE.x + 470} y={SINE_STAGE.y + 70} at={here + 20} size={44} color={VIOLET}><span style={{color: VIOLET}}>gradient ?</span></Chip>
			<Enter at={next + 20} style={{position: 'absolute', left: 0, right: 0, top: 892, display: 'flex', justifyContent: 'center'}}>
				<div style={{background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 22px', ...DISPLAY(40, '#4f4840', 700)}}>Next: the derivatives of sin x and cos x</div>
			</Enter>
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const f = useCurrentFrame();
	const items = [
		{content: <>For x &gt; 0, a &gt; 0, a ≠ 1: d/dx(<Lg b="a" /> x) = <Frac n="1" d="x ln a" /></>, at: 10},
		{content: <>Why: <Lg b="a" /> x = <F a="a" /> × ln x, so every slope × <F a="a" /></>, at: 22},
		{content: <><span style={{color: AMB}}>ln a</span> goes underneath. a = e gives <Frac n="1" d="x" /></>, at: 34},
		{content: <>0 &lt; a &lt; 1: ln a &lt; 0, so the curve falls</>, at: 46},
		{content: <>a = 1 is not a base: ln 1 = 0</>, at: 58},
	];
	return (
		<>
			<SceneHeading text="Key notes: what to write in your book" at={2} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('scene-16', 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
			<PreloadPlates plates={[GUITAR, METER]} />
			<KeyNotesBullets x={110} y={200} w={1020} items={items} size={40} gap={58} />
			<Enter at={70} style={{position: 'absolute', left: 1170, top: 196, width: 654}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 30px 26px'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, lineHeight: 1.05, color: INK, marginTop: 4}}>Divide the curve,<br /><span style={{color: VIOLET}}>divide the slope.</span></div>
					<div style={{height: 2, background: 'rgba(60,45,20,0.14)', margin: '16px 0 8px'}} />
					{[
						{icon: <GuitarImg x={0} y={18} w={120} />, t: <><Lg b="2" />: octaves, <F a="2" /> ≈ 1.44</>, c: NAVY},
						{icon: <MeterImg x={22} y={0} w={86} />, t: <><Lg b="10" />: bels, <F a="10" /> ≈ 0.43</>, c: OLIVE},
					].map((k, i) => (
						<div key={i} style={{display: 'flex', alignItems: 'center', gap: 18, marginTop: 8, opacity: prog(f, 80 + i * 8, 12)}}>
							<div style={{position: 'relative', width: 124, height: 72, flex: 'none'}}>{k.icon}</div>
							<span style={DISPLAY(38, k.c)}>{k.t}</span>
						</div>
					))}
					<div style={{...DISPLAY(34), marginTop: 14, opacity: prog(f, 104, 12)}}><Lg b="a" /> x = ln x ÷ <span style={{color: AMB}}>ln a</span>,</div>
					<div style={{...DISPLAY(34), marginTop: 4, opacity: prog(f, 110, 12)}}>so slope = <Frac n="1" d="x" /> ÷ <span style={{color: AMB}}>ln a</span></div>
				</div>
			</Enter>
		</>
	);
};

