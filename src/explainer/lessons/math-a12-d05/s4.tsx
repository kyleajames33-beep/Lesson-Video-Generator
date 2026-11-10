// Scenes 13 to 16: attempt 2 and its feedback, the handoff to sin 2x (d06 opens on its final frame), key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {
	CARD, CARD_SHADOW, FrameSvg, FunctionSimulator, GivensStrip, HandTag, KeyNotesBullets, MarkSpan, MistakeCard, PreloadPlates, QuestionCard, RolesOn, SceneHeading, TaskStrip,
	MATH_AMBER, MATH_STRAND_ACCENT, piTicks, vis,
} from '../../math/studio';
import type {FnFamily} from '../../math/studio';
import type {Range} from '../../math/graphs';
import {cue, hold, PI} from './common';
import {
	AttemptWide, WholeRows, Chip, CurveLabel, DISPLAY, Dot, FerrisWheel, Frac, GONDOLA, GONDOLA_MARKED, GreenRule, NAVY, QRad, RAD_TICKS, RIM, SIN, SINE_STAGE, STAND, TRIG_WIN, TanLine, VIOLET, gmap,
} from './parts';
import {COS_RULE, SIN_RULE} from './s2';

const PLATES = [RIM, STAND, GONDOLA, GONDOLA_MARKED];
const A = (c: React.ReactNode) => <span style={{color: MATH_AMBER}}>{c}</span>;

// ---------- 13. attempt 2 ----------
export const Q2: React.FC<{u?: {c: number; s: number; x: number}}> = ({u}) => (
	<>
		<div>Let g(x) = {u ? <MarkSpan kind="underline" at={u.c} role="k">{A('2')} cos x</MarkSpan> : '2 cos x'} {u ? <MarkSpan kind="underline" at={u.s}>+ sin x</MarkSpan> : '+ sin x'}.</div>
		<div style={{marginTop: 12}}>(a) Find g′(x).</div>
		<div style={{marginTop: 8}}>(b) Find the gradient of the tangent to y = g(x) at {u ? <MarkSpan kind="underline" at={u.x}>x = π/2</MarkSpan> : 'x = π/2'}.</div>
	</>
);
const QPIC2 = <QRad marks={[{x: PI / 2, label: 'π/2'}]} w={900} h={380} />;
export const S13: React.FC = () => {
	const id = 'scene-13';
	const pause = cue(id, 'Pause here');
	return (
		<AttemptWide hold={hold(id)} pauseAt={pause} heading="Last one" size={54} given={[<>g(x) = 2 cos x + sin x</>, <>find g′(x)</>, <>gradient at x = π/2</>]} picture={QPIC2}>
			<Q2 />
		</AttemptWide>
	);
};

// ---------- 14. feedback 2 ----------
const TWO_COS: FnFamily = {f: u => 2 * Math.cos(u), df: u => -2 * Math.sin(u)};
export const S14: React.FC = () => {
	const id = 'scene-14';
	const f = useCurrentFrame();
	const r1 = cue(id, 'minus two sine x'), r1b = cue(id, 'gives cos x'), atX = cue(id, 'At pi over two'), r2 = cue(id, 'the gradient is minus two'), lost = cue(id, 'If you lost'), but = cue(id, 'But two cos x');
	const G = {x: 1150, y: 330, w: 674, h: 560};
	const W = {x: [0, 2 * PI] as Range, y: [-2.6, 2.6] as Range};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= r1 - 30}>
				<QuestionCard at={-40} shrinkAt={-30} w={1460} y={200} heading="Last one"><Q2 u={{c: r1 - 30, s: r1b - 20, x: atX}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1160} y={252} size={34} maxW={664} items={[{content: <>g(x) = {A('2')} cos x + sin x</>, at: 6}, {content: 'x = π/2', at: atX}]} />
			<WholeRows x={96} y={420} w={1030} size={54} oldSize={44} gap={16} rows={[
				{left: 'g′(x)', right: <>−{A('2')} sin x</>, at: r1, out: r1b - 6},
				{left: 'g′(x)', right: <>−{A('2')} sin x + cos x</>, at: r1b, answer: true},
				{left: <>g′(<Frac n="π" d="2" />)</>, right: <>−2(1) + 0 = −2</>, at: r2, answer: true},
			]} />
			<MistakeCard x={96} y={760} w={1030} at={lost} size={42} wrong={<>g′(π/2) = +2</>} caption="d/dx(cos x) = −sin x" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={TWO_COS} timeline={[{frame: 0, x: PI / 2}]} color={INK}
				xTicks={piTicks(0, 2, 2)} yTicks={[-2, -1, 1, 2]} xLabel="x" yLabel="y"
				point={{at: atX}} tangent={{at: but, halfLength: 120}} />
			<CurveLabel x={M.pt(3.6, 1.9)[0]} y={M.pt(3.6, 1.9)[1] - 30} size={40}>y = {A('2')} cos x</CurveLabel>
			<HandTag x={M.pt(PI / 2, 0)[0] + 30} y={M.pt(0, 1.2)[1]} text="falling" at={but + 10} size={44} color={VIOLET} />
		</>
	);
};

// ---------- 15. handoff: sin x and sin 2x ----------
export const S15: React.FC = () => {
	const id = 'scene-15';
	const f = useCurrentFrame();
	const next = cue(id, 'Next'), s2 = cue(id, 'sine two x'), leaves = cue(id, 'Sine two x leaves'), why = cue(id, 'why');
	const S = SINE_STAGE;
	const M = gmap(S.x, S.y, S.w, S.h, TRIG_WIN);
	const first = 1 - prog(f, next - 6, 14);
	const dots = Array.from({length: 25}, (_, k) => (k * PI) / 12);
	const glow = vis(f, why, why + 60);
	return (
		<>
			<PreloadPlates plates={PLATES} />
			<div style={{position: 'absolute', left: 96, top: 100}}><HandText text="sin → cos → −sin → −cos → sin" at={2} size={40} color={INK_SOFT} cps={34} /></div>
			<div style={{position: 'absolute', inset: 0, opacity: first}}>
				<FerrisWheel cx={190} cy={420} R={88} angle={0.5} />
			</div>
			<FunctionSimulator x={S.x} y={S.y} width={S.w} height={S.h} window={TRIG_WIN} family={SIN} timeline={[{frame: 0, x: 0}]} color={INK}
				xTicks={RAD_TICKS} yTicks={[-1, 1]} xLabel="x (radians)" yLabel="y"
				curves={[{fn: x => Math.sin(2 * x), at: s2, color: NAVY, width: 7}]}
				point={{at: next + 10}} tangent={{at: next + 10, halfLength: 200}}
				overlay={() => (
					<FrameSvg>
						<g opacity={first}>{dots.map((x, k) => <Dot key={k} p={M.pt(x, Math.cos(x))} r={9} />)}</g>
						<TanLine M={M} X={0} Y={0} m={2} half={200} opacity={prog(f, s2 + 20, 12)} width={6 + 3 * glow} />
						<TanLine M={M} X={0} Y={0} m={1} half={200} opacity={glow} width={9} />
					</FrameSvg>
				)} />
			<div style={{opacity: first}}>
				<GreenRule x={S.x + 900} y={S.y + 70} size={34}>{SIN_RULE}</GreenRule>
				<GreenRule x={S.x + 900} y={S.y + 200} size={34}>{COS_RULE}</GreenRule>
			</div>
			<CurveLabel x={M.pt(3.7, -1)[0]} y={M.pt(3.7, -1)[1] + 18} size={44}>y = sin x</CurveLabel>
			<CurveLabel x={M.pt(1.0, 1.05)[0]} y={M.pt(1.0, 1.05)[1] - 54} at={s2 + 10} color={NAVY} size={44}>y = sin 2x</CurveLabel>
			<Chip x={M.pt(-2.9, 0)[0]} y={M.pt(0, 1.4)[1]} at={leaves} size={44} color={VIOLET}><span style={{color: VIOLET}}>gradient ?</span></Chip>
			<Enter at={next + 20} style={{position: 'absolute', left: 0, right: 0, top: 892, display: 'flex', justifyContent: 'center'}}>
				<div style={{background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 22px', ...DISPLAY(40, '#4f4840', 700)}}>Next: the chain rule with e, ln, sin and cos</div>
			</Enter>
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const f = useCurrentFrame();
	const items = [
		{content: <>With x in radians: d/dx(sin x) = cos x</>, at: 10},
		{content: <>With x in radians: d/dx(cos x) = −sin x</>, at: 22},
		{content: <>Peaks and troughs: gradient 0. Crossings: steepest</>, at: 34},
		{content: <>Gradient is not height: at π/2, sin x = 1 but the gradient is 0</>, at: 46},
		{content: <>In degrees the slope of sin x at 0 would be π/180, not 1</>, at: 58},
	];
	return (
		<>
			<SceneHeading text="Key notes: what to write in your book" at={2} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('scene-16', 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
			<PreloadPlates plates={PLATES} />
			<KeyNotesBullets x={110} y={200} w={1020} items={items} size={40} gap={58} />
			<Enter at={70} style={{position: 'absolute', left: 1170, top: 196, width: 654}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 30px 26px', height: 690, boxSizing: 'border-box', position: 'relative'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, lineHeight: 1.1, color: INK, marginTop: 4}}>sin → cos → −sin<br />→ −cos → sin</div>
					<div style={{...DISPLAY(36, INK, 700), whiteSpace: 'normal', marginTop: 12, opacity: prog(f, 84, 12)}}>Each derivative is the wave moved a quarter period (<span style={{color: '#13767a'}}>π/2</span>) left.</div>
					<div style={{height: 2, background: 'rgba(60,45,20,0.14)', margin: '18px 0 8px'}} />
					<div style={{position: 'absolute', left: 30, top: 470, width: 150, height: 170}} />
					<div style={{position: 'absolute', left: 200, top: 500, right: 26, opacity: prog(f, 96, 12), ...DISPLAY(40, INK, 700), whiteSpace: 'normal'}}>seat: height sin x,<br />climbing rate <span style={{color: VIOLET}}>cos x</span></div>
				</div>
			</Enter>
			<FerrisWheel cx={1170 + 112} cy={196 + 520} R={80} angle={0.6} stand at={80} />
		</>
	);
};
