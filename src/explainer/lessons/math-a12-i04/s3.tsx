// Scenes 10 to 16: the memory aid (three solid pictures: ln|x|, ½ ln|2x − 3| and x² + 4), attempt 1 and its brief
// feedback, attempt 2 and its brief feedback, the sine handoff (exported as I04FinalFrame, i05's opening) and the
// key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, GivensStrip, HandTag, KeyNotesBullets, MATH_EXCLUDED, MistakeCard, QuestionCard, RolesOn, SceneHeading, StudioPlot, TaskStrip, fnPath, usePlatePreload} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15, K16} from './cuemap';
import {dur, hold} from './common';
import {AMB, AnswerBox, Attempt, BOARD, BLUE, Bl, BoxCard, Cc, Chip, FramedCard, Frac, FundRig, GREY, GapLine, Line, LnAbsPic, MiniPlot, PLabel, QAxes, RED, Tick, V, VIOLET, total} from './parts';

const lnA = (x: number) => Math.log(Math.abs(x));
export const AID04 = "Top is the bottom's derivative? Then it's ln|bottom|.";
const Aid: React.FC = () => <>Top is the bottom&apos;s derivative? Then it&apos;s ln|bottom|.</>;

// ---------- 10. memory aid ----------
const Cap: React.FC<{x: number; y: number; w: number; children: React.ReactNode; g?: number}> = ({x, y, w, children, g = 0}) => (
	<div style={{position: 'absolute', left: x, top: y, width: w, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, background: g > 0.01 ? `rgba(248,232,200,${0.85 * g})` : undefined, borderRadius: 12}}>{children}</div>
);
export const S10: React.FC = () => {
	const f = useCurrentFrame();
	const k = K10;
	const g1 = prog(f, k.when, 12) * (1 - prog(f, k.multiple, 12));
	const g2 = prog(f, k.multiple, 12) * (1 - prog(f, k.keep, 12));
	const g3 = prog(f, k.keep, 12);
	return (
		<>
			<SceneHeading text="The pattern to remember" at={4} size={56} />
			<FramedCard x={60} y={150} w={1800} h={810} />
			<div style={{position: 'absolute', left: 110, top: 172, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: '#4f4840'}}>Memory aid</div>
			<div style={{position: 'absolute', left: 380, top: 160, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: INK}}><Aid /></div>
			<LnAbsPic x={100} y={260} w={540} h={400}>
				{m => <PLabel p={m.p(-4.3, 1.6)} text="y = ln|x|" size={36} />}
			</LnAbsPic>
			<StudioPlot x={690} y={260} width={540} height={400} window={{x: [-1, 4], y: [-2.5, 1.5]}} xTicks={[1, {value: 1.5, label: '3/2'}, 3]} yTicks={[-2, -1, 1]} at={-30}>
				{m => {const a = m.p(1.5, -2.5), b = m.p(1.5, 1.5); return <>
					<line x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke={MATH_EXCLUDED} strokeWidth={4} strokeDasharray="12 10" />
					<g clipPath={m.clip}>
						<path d={fnPath(m, x => 0.5 * lnA(2 * x - 3), -1, 1.497)} stroke={INK} strokeWidth={6} fill="none" />
						<path d={fnPath(m, x => 0.5 * lnA(2 * x - 3), 1.503, 4)} stroke={INK} strokeWidth={6} fill="none" />
					</g>
					<PLabel p={m.p(1.7, 1.15)} text="gap at 3/2" size={32} color="#4f4840" />
				</>;}}
			</StudioPlot>
			<MiniPlot x={1280} y={260} w={540} h={400} win={{x: [-3, 3], y: [-5, 14]}} xTicks={[-2, 2]} yTicks={[4, 8, 12]}
				curves={[{fn: x => x * x + 4, from: -3, to: 3, color: INK}, {fn: x => x * x - 4, from: -3, to: 3, color: '#9b9387', dash: '12 10', width: 4}]}>
				{m => <>
					{[-2, 2].map(X => {const p = m.p(X, 0); return <circle key={X} cx={p[0]} cy={p[1]} r={12} fill={CARD} stroke={MATH_EXCLUDED} strokeWidth={4} />;})}
					<PLabel p={m.p(-2.9, 12.4)} text="x² + 4 > 0" size={34} color="#287347" />
					<PLabel p={m.p(0.25, -3.4)} text="x² − 4: keep | |" size={30} color="#4f4840" />
				</>}
			</MiniPlot>
			<Cap x={100} y={680} w={540} g={g1}><V><Frac n="1" d="x" /></V>: ln|x|</Cap>
			<Cap x={690} y={680} w={540} g={g2}><V><Frac n="1" d="2x − 3" /></V>: <Bl>½</Bl> in front</Cap>
			<Cap x={1280} y={680} w={540} g={g3}><V><Frac n={<Bl>2x</Bl>} d="x² + 4" /></V>: ln(x² + 4)</Cap>
			<div style={{position: 'absolute', left: 110, top: 800, width: 1100, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 38, lineHeight: 1.3, color: INK}}>
				Fix any constant in front. Keep | | unless the bottom is always positive. Never cross a zero of the bottom.
			</div>
			<Chip x={1250} y={820} at={-30} size={36} color={AMB}>donations <V>1000/t</V>: total 1000 ln t <Cc>+ C</Cc></Chip>
		</>
	);
};

// ---------- 11. attempt 1 ----------
const Q1: React.FC = () => <div>Find ∫<Frac n="6" d="3x + 1" /> dx, and state the values of x for which your answer is valid.</div>;
const Q1L: React.FC = () => <div>Find ∫ 6/(3x + 1) dx, and state the values of x for which your answer is valid.</div>;
export const S11: React.FC = () => (
	<Attempt hold={hold('scene-11')} pauseAt={K11.pause} top={440} size={48} given={[<>∫<Frac n="6" d="3x + 1" /> dx</>, <>state where valid</>]}
		picture={<QAxes w={820} h={460} x0={-2} x1={2} y0={-3} y1={3} ticks={[-2, -1, 1, 2]} tags={['primitive?', 'valid where?']} />}>
		<Q1 />
	</Attempt>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const k = K12;
	const f = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><Q1L /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: '6/(3x + 1)', role: 'gradient', at: 6}, {content: 'state where valid', at: 12}]} />
			<Line x={96} y={290} at={k.three} size={48}><V>d/dx</V> (3x + 1) = <Bl>3</Bl>;   6 = 2 × <Bl>3</Bl></Line>
			<AnswerBox x={96} y={400} at={k.C} size={52}>2 ln|3x + 1| <Cc>+ C</Cc><span style={{opacity: prog(f, k.third, 12)}}>,  x ≠ −⅓</span></AnswerBox>
			<Line x={96} y={520} at={k.diff} size={44}><V>d/dx</V>: 2 · <Frac n={<Bl>3</Bl>} d="3x + 1" /> = <V><Frac n="6" d="3x + 1" /></V> <Tick size={44} o={prog(f, k.diff + 40, 10)} /></Line>
			<GapLine x={96} y={630} w={960} range={[-2, 2]} excluded={[-1 / 3]} ticks={[{value: -2, label: '−2'}, {value: -1, label: '−1'}, {value: -1 / 3, label: '−⅓'}, {value: 1, label: '1'}, {value: 2, label: '2'}]} label="valid either side of −⅓, not across" at={k.valid} />
			<MistakeCard x={96} y={800} w={960} at={k.wrong} size={44} wrong={<>6 ln|3x + 1| + C</>} caption="its derivative is 18/(3x + 1)" />
			<MiniPlot x={1100} y={380} w={790} h={580} win={{x: [-2, 2], y: [-12, 12]}} xTicks={[-2, -1, 1, 2]} yTicks={[-10, -5, 5, 10]}
				curves={[{fn: x => 6 / (3 * x + 1), from: -2, to: -0.34, color: VIOLET}, {fn: x => 6 / (3 * x + 1), from: -0.326, to: 2, color: VIOLET},
					{fn: x => 18 / (3 * x + 1), from: -2, to: -0.34, color: RED, dash: '14 10', o: prog(f, k.wrong, 14)}, {fn: x => 18 / (3 * x + 1), from: -0.326, to: 2, color: RED, dash: '14 10', o: prog(f, k.wrong, 14)}]}>
				{m => {const a = m.p(-1 / 3, -12), b = m.p(-1 / 3, 12), o = m.p(-1 / 3, 0); const v = prog(f, k.valid, 12); return <>
					<line x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke={MATH_EXCLUDED} strokeWidth={4} strokeDasharray="12 10" opacity={v} />
					<circle cx={o[0]} cy={o[1]} r={16} fill={CARD} stroke={MATH_EXCLUDED} strokeWidth={5} opacity={v} />
					<PLabel p={m.p(0.05, 10.2)} text="integrand 6/(3x + 1)" color={VIOLET} size={36} />
					<PLabel p={m.p(-1.95, 7.2)} text="slip's gradient: 3 times" color={RED} size={36} o={prog(f, k.wrong + 10, 12)} />
				</>;}}
			</MiniPlot>
		</>
	);
};

// ---------- 13. attempt 2 ----------
const Q2: React.FC = () => <div>Find ∫<Frac n="x²" d="x³ − 8" /> dx, and state the values of x for which your answer is valid.</div>;
const Q2L: React.FC = () => <div>Find ∫ x²/(x³ − 8) dx, and state the values of x for which your answer is valid.</div>;
export const S13: React.FC = () => (
	<Attempt hold={hold('scene-13')} pauseAt={K13.pause} heading="Last one" top={440} size={48} given={[<>∫<Frac n="x²" d="x³ − 8" /> dx</>, <>state where valid</>]}
		picture={<QAxes w={820} h={460} x0={-1} x1={4} y0={-3} y1={3} ticks={[-1, 1, 2, 3, 4]} tags={['primitive?', 'valid where?']} />}>
		<Q2 />
	</Attempt>
);

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const k = K14;
	const f = useCurrentFrame();
	const neg = prog(f, k.for, 12);
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><Q2L /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'x²/(x³ − 8)', role: 'gradient', at: 6}, {content: 'state where valid', at: 12}]} />
			<Line x={96} y={290} at={k.deriv} size={46}><V>d/dx</V> (x³ − 8) = <Bl>3x²</Bl>;   x² = ⅓ × <Bl>3x²</Bl></Line>
			<AnswerBox x={96} y={400} at={k.C} size={52}>⅓ ln|x³ − 8| <Cc>+ C</Cc><span style={{opacity: prog(f, k.zero, 12)}}>,  x ≠ 2</span></AnswerBox>
			<Line x={96} y={520} at={k.zero} size={44}>x³ − 8 = 0 when x = 2</Line>
			<GapLine x={96} y={630} w={960} range={[-1, 4]} excluded={[2]} ticks={[{value: -1, label: '−1'}, {value: 0, label: '0'}, {value: 1, label: '1'}, {value: 3, label: '3'}, {value: 4, label: '4'}]} label="x < 2 or x > 2" at={k.zero + 20} />
			<MistakeCard x={96} y={800} w={960} at={k.drop} size={44} wrong={<>⅓ ln(x³ − 8) + C</>} caption="x³ − 8 < 0 for x < 2: x = 0 gives −8" />
			<MiniPlot x={1100} y={380} w={790} h={580} win={{x: [-1, 3.2], y: [-12, 14]}} xTicks={[-1, 1, 2, 3]} yTicks={[-8, -4, 4, 8, 12]} yLabel="bottom"
				curves={[{fn: x => x ** 3 - 8, from: -1, to: 3.2, color: INK}]}>
				{m => {const a = m.p(-1, 0), b = m.p(2, -12), o = m.p(2, 0); return <>
					<rect x={a[0]} y={a[1]} width={b[0] - a[0]} height={b[1] - a[1]} fill={RED} opacity={0.12 * neg} />
					<circle cx={o[0]} cy={o[1]} r={16} fill={CARD} stroke={MATH_EXCLUDED} strokeWidth={5} opacity={prog(f, k.zero, 12)} />
					<PLabel p={m.p(-0.9, 12)} text="y = x³ − 8" size={38} />
					<PLabel p={m.p(-0.9, -10.6)} text="negative: ln undefined" color={RED} size={36} o={neg} />
				</>;}}
			</MiniPlot>
		</>
	);
};

// ---------- 15. handoff ----------
const PI = Math.PI;
const RAD = [{value: PI / 2, label: 'π/2'}, {value: PI, label: 'π'}, {value: (3 * PI) / 2, label: '3π/2'}, {value: 2 * PI, label: '2π'}];
const I04Board: React.FC<{headAt: number; sineAt: number; whichAt: number; cosAt: number; elseAt: number}> = ({headAt, sineAt, whichAt, cosAt, elseAt}) => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Next: trig primitives" at={headAt} size={56} />
			<div style={{position: 'absolute', left: 96, top: 160, width: 760, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, lineHeight: 1.15, color: '#4f4840'}}><Aid /></div>
			<div style={{position: 'absolute', left: 96, top: 280, opacity: prog(f, sineAt, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 100, color: INK, whiteSpace: 'pre'}}>∫ sin x dx = ?</div>
			<Chip x={96} y={470} at={whichAt} size={48} color={VIOLET}>which curve has gradient sin x?</Chip>
			<Chip x={96} y={590} at={cosAt} size={52} color={GREY}>cos x?</Chip>
			<Chip x={340} y={590} at={elseAt} size={52} color={AMB}>or something else?</Chip>
			<Chip x={96} y={730} at={sineAt} size={40} color={GREY}>last video: ∫<Frac n="1" d="x" /> dx = ln|x| <Cc>+ C</Cc>, x ≠ 0</Chip>
			<HandTag x={110} y={900} text="x in radians" at={sineAt} size={44} color={INK} />
			<StudioPlot x={900} y={150} width={990} height={810} window={{x: [-0.3, 2 * PI + 0.3], y: [-1.6, 1.6]}} xTicks={RAD} yTicks={[-1, 1]} at={sineAt}>
				{m => <>
					<g clipPath={m.clip}>
						<path d={fnPath(m, Math.cos, -0.3, 2 * PI + 0.3)} stroke="#9b9387" strokeWidth={5} strokeDasharray="14 10" fill="none" opacity={prog(f, cosAt, 14)} />
						<path d={fnPath(m, Math.sin, -0.3, 2 * PI + 0.3)} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" />
					</g>
					<PLabel p={m.p(0.3, 1.35)} text="y = sin x  (x in radians)" size={40} />
					<PLabel p={m.p(3.5, 1.2)} text="cos x?" size={42} color="#6f675b" hand o={prog(f, cosAt, 14)} />
					<PLabel p={m.p(4.9, 1.2)} text="?" size={60} color="#7a4600" o={prog(f, elseAt, 12)} />
				</>}
			</StudioPlot>
		</>
	);
};
/** i04's final frame (i05 opens on it). */
export const I04FinalFrame: React.FC = () => <I04Board headAt={-300} sineAt={-60} whichAt={-60} cosAt={-60} elseAt={-60} />;
export const S15: React.FC = () => {
	const f = useCurrentFrame();
	const k = K15;
	const sw = prog(f, k.next, 16);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="The reciprocal primitive" at={-30} size={56} />
				<BoxCard x={96} y={190} at={-30} size={64} border={INK} bw={5}>∫<V><Frac n="1" d="x" /></V> dx = ln|x| <Cc>+ C</Cc>,  x ≠ 0</BoxCard>
				<div style={{position: 'absolute', left: 100, top: 400, width: 760, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, lineHeight: 1.2, color: INK}}><Aid /></div>
				<HandTag x={110} y={660} text="the mirrored log covers x < 0" at={k.mirrored} size={46} color={BLUE} />
				<GapLine x={96} y={740} w={760} range={[-4.5, 4.5]} excluded={[0]} ticks={[-4, -2, 0, 2, 4].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}))} label="each piece on its own side of 0" at={-30} />
				<LnAbsPic x={900} y={150} w={990} h={810}>
					{m => <>
						<PLabel p={m.p(-4.3, 1.75)} text="ln(−x): the mirror" size={40} color={BLUE} />
						<PLabel p={m.p(2.2, 0.35)} text="ln x" size={40} />
						<PLabel p={m.p(0.15, -2.1)} text="gap at 0" size={34} color="#4f4840" />
					</>}
				</LnAbsPic>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><I04Board headAt={k.next} sineAt={k.here} whichAt={k.which} cosAt={k.cos} elseAt={k.else} /></div> : null}
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const f = useCurrentFrame();
	usePlatePreload([BOARD.src]);
	const items = [
		{content: <>∫<V><Frac n="1" d="x" /></V> dx = ln|x| <Cc>+ C</Cc>, for x ≠ 0.</>, at: 10},
		{content: <>Why: for x &lt; 0, <V>d/dx</V> ln(−x) = <Frac n="1" d="−x" /> × <Bl>(−1)</Bl> = <V><Frac n="1" d="x" /></V>.</>, at: 22},
		{content: <>Two pieces, a <Cc>constant</Cc> each. Never cross x = 0.</>, at: 34},
		{content: <>∫<V><Frac n="1" d="ax + b" /></V> dx = <Frac n="1" d={<Bl>a</Bl>} /> ln|ax + b| <Cc>+ C</Cc>, a ≠ 0.</>, at: 46},
		{content: <>∫<V><Frac n="f′(x)" d="f(x)" /></V> dx = ln|f(x)| <Cc>+ C</Cc>. Drop | | only if f(x) &gt; 0.</>, at: 58},
	];
	const back = prog(f, Math.max(1350, dur('scene-16')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={K16.pause} size={42} color="#8a5a12" anchor="end" />
				<KeyNotesBullets x={96} y={220} w={1040} items={items} size={38} gap={44} />
				<FramedCard x={1180} y={196} w={680} h={770} at={16} />
				<div style={{position: 'absolute', left: 1220, top: 214, opacity: prog(f, 16, 14), width: 610}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: '#4f4840'}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.08, color: INK, marginTop: 4}}><Aid /></div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, lineHeight: 1.25, color: INK, marginTop: 12}}>Fix any constant in front. Keep | | unless the bottom is always positive.</div>
				</div>
				{f >= 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, 16, 14)}}>
					<FundRig x={1230} y={548} h={400} value={total(32)} scaleSize={28} />
					<div style={{position: 'absolute', left: 1470, top: 620, width: 370, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, lineHeight: 1.15, color: INK}}>donations <span style={{color: VIOLET}}>1000/t</span>:<br />total 1000 ln t <span style={{color: '#7a4600'}}>+ C</span></div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I04FinalFrame /></div> : null}
		</>
	);
};
