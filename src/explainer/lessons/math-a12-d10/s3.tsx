// Scenes 9 to 14: attempt 1 and its feedback, attempt 2 and its feedback, the strand close and fencing
// handoff (d11 opens on its final frame), the key notes (which cross-fade back to that frame).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, FunctionSimulator, GivensStrip, HandTag, KeyNotesBullets, MarkSpan, MistakeCard, QuestionCard, RolesOn, SceneHeading, TaskStrip, vis, CARD, CARD_SHADOW, MATH_STRAND_ACCENT} from '../../math/studio';
import {StrandMotifs} from '../../math/strand-parts';
import {cue, hold} from './common';
import {
	A1F, A2F, AnswerBox, PlanCard, AttemptStage, BAND, BLUE, CandTable, Chip, CoasterBadge, GREEN, HeightBars, IntervalAxes, Legend, Line, ROLE_KEY, RecallChip, RingAt, Struck, Stub, Sup, VIOLET, gmap,
} from './parts';
import {AID_MAIN, AidCard} from './s2';

const EX = <>e<Sup>x</Sup></>;

// ---------- 9. attempt 1 ----------
const Q1: React.FC<{u?: {a: number; b: number}}> = ({u}) => (
	<div>Find the global maximum and global minimum values of <span style={{whiteSpace: 'nowrap'}}>f(x) = x³ − 12x</span> for {u ? <MarkSpan kind="underline" at={u.a}>0 ≤ x ≤ 3</MarkSpan> : '0 ≤ x ≤ 3'}, and the {u ? <MarkSpan kind="underline" at={u.b}>values of x</MarkSpan> : 'values of x'} at which they occur.</div>
);
export const S09: React.FC = () => {
	const id = 'scene-09';
	return (
		<AttemptStage hold={hold(id)} pauseAt={cue(id, 'Pause here')} size={48} given={[<>f(x) = x³ − 12x</>, <>0 ≤ x ≤ 3</>, <>global max and min, and where</>]}
			picture={<IntervalAxes w={720} h={380} range={[-0.8, 3.6]} from={0} to={3} ticks={[{value: 0, label: '0'}, {value: 3, label: '3'}]} note="both ends included" />}>
			<Q1 />
		</AttemptStage>
	);
};

/** Feedback graph with candidate bars (right side). */
const FG = {x: 1100, y: 280, w: 724, h: 520};

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const id = 'scene-10';
	const f = useCurrentFrame();
	const which = cue(id, 'which is zero'), reject = cue(id, 'reject'), cands = cue(id, 'The candidates'), giving = cue(id, 'giving'), sixteen = cue(id, 'sixteen', 1), nine = cue(id, 'nine'), maxZero = cue(id, 'maximum is zero'), minIs = cue(id, 'minimum is'), two = cue(id, 'equals two'), mist = cue(id, 'Sixteen from');
	const W = {x: [-0.5, 3.5] as [number, number], y: [-18, 3] as [number, number]};
	const M = gmap(FG.x, FG.y, FG.w, FG.h, W);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<Legend items={ROLE_KEY} />
			<RolesOn on={f >= 0}>
				<QuestionCard at={-40} shrinkAt={-30} w={1460}><Q1 u={{a: reject + 4, b: two}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1160} y={176} maxW={664} size={34} items={[{content: <>f(x) = x³ − 12x</>, at: 4}, {content: <>0 ≤ x ≤ 3</>, at: 10}]} />
			<Line at={4} x={96} y={300} size={50} dim={prog(f, which, 14)}>f′(x) = 3x² − 12 = 3(x − 2)(x + 2)</Line>
			<Line at={which} x={96} y={380} size={50} dim={prog(f, cands, 14)}>= 0: x = 2 or x = <Struck at={reject}>−2</Struck></Line>
			<HandTag x={700} y={420} text="not in 0 ≤ x ≤ 3" at={reject + 6} size={38} color={INK} />
			<CandTable x={96} y={470} w={960} at={cands} rows={[
				{x: 'x = 0', kind: 'end', value: '0', at: giving, tag: {text: 'global max', at: maxZero}},
				{x: 'x = 2', kind: 'flat', value: '8 − 24 = −16', at: sixteen - 6, tag: {text: 'global min', at: minIs + 10}},
				{x: 'x = 3', kind: 'end', value: '27 − 36 = −9', at: nine - 8},
			]} />
			<AnswerBox at={two} x={84} y={800} size={44}>global maximum 0 at x = 0;<br />global minimum −16 at x = 2</AnswerBox>
			<FunctionSimulator x={FG.x} y={FG.y} width={FG.w} height={FG.h} window={W} family={A1F} timeline={[{frame: 0, x: 2}]} color={BLUE} draw={{at: cands, dur: 30}} at={-30}
				xTicks={[1, 2, 3]} yTicks={[-15, -10, -5]} xLabel="x" yLabel="y" regions={[{x: [0, 3], color: BAND, opacity: 0.75, at: -30}]}
				overlay={() => <FrameSvg>
					<HeightBars Mp={M} bars={[
						{x: 2, y: -16, at: sixteen, label: '−16', glow: prog(f, minIs + 10, 12)},
						{x: 3, y: -9, at: nine, label: '−9'},
					]} />
					<circle cx={M.pt(0, 0)[0]} cy={M.pt(0, 0)[1]} r={12} fill={INK} stroke={CARD} strokeWidth={4} opacity={prog(f, cands + 20, 10)} />
					<RingAt p={M.pt(0, 0)} r={28} at={maxZero} color={GREEN} width={6} />
					<Stub Mp={M} X={2} Y={-16} m={0} half={70} opacity={prog(f, sixteen, 12)} />
				</FrameSvg>} />
			<PlanCard x={96} y={690} w={960} out={two - 16} />
			<MistakeCard x={FG.x} y={820} w={FG.w} at={mist - 10} size={42} wrong={<>maximum 16 at x = −2</>} caption="−2 is not in 0 ≤ x ≤ 3" />
		</>
	);
};

// ---------- 11. attempt 2 ----------
const Q2: React.FC<{u?: {a: number; b: number}}> = ({u}) => (
	<div>Consider h(x) = e<Sup>x</Sup> − 2x for {u ? <MarkSpan kind="underline" at={u.a}>0 ≤ x ≤ 2</MarkSpan> : '0 ≤ x ≤ 2'}. Find the {u ? <MarkSpan kind="underline" at={u.b}>exact</MarkSpan> : 'exact'} global maximum and global minimum values of h, and the values of x at which they occur.</div>
);
export const S11: React.FC = () => {
	const id = 'scene-11';
	return (
		<AttemptStage hold={hold(id)} pauseAt={cue(id, 'Pause here')} heading="Last one" size={46} given={[<>h(x) = e<Sup>x</Sup> − 2x</>, <>0 ≤ x ≤ 2</>, <>exact values, and where</>]}
			picture={<IntervalAxes w={720} h={380} range={[-0.6, 2.5]} from={0} to={2} ticks={[{value: 0, label: '0'}, {value: 2, label: '2'}]} note="both ends included" />}>
			<Q2 />
		</AttemptStage>
	);
};

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const id = 'scene-12';
	const f = useCurrentFrame();
	const zeroWhen = cue(id, 'zero when'), inside = cue(id, 'inside'), h0 = cue(id, 'h of zero'), hln = cue(id, 'h of the natural'), six = cue(id, 'six one'), h2 = cue(id, 'h of two'), nine = cue(id, 'nine'), so = cue(id, 'So the maximum'), minIs = cue(id, 'minimum is'), mist = cue(id, 'Zero is h');
	const W = {x: [-0.25, 2.3] as [number, number], y: [-0.4, 4] as [number, number]};
	const M = gmap(FG.x, FG.y, FG.w, FG.h, W);
	const L2 = Math.log(2);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<Legend items={ROLE_KEY} />
			<QuestionCard at={-40} shrinkAt={-30} w={1460} heading="Last one"><Q2 u={{a: inside, b: so}} /></QuestionCard>
			<GivensStrip x={1160} y={176} maxW={664} size={30} items={[{content: <>h(x) = {EX} − 2x</>, at: 4}, {content: <>0 ≤ x ≤ 2</>, at: 10}, {content: 'exact', at: 16}]} />
			<Line at={4} x={96} y={300} size={50} dim={prog(f, h0, 14)}>h′(x) = {EX} − 2 = 0: {EX} = 2, x = ln 2</Line>
			<RecallChip x={96} y={384} at={inside} size={32}>ln 2 ≈ 0.693, inside 0 ≤ x ≤ 2</RecallChip>
			<CandTable x={96} y={460} w={960} at={h0 - 10} rows={[
				{x: 'x = 0', kind: 'end', value: <>e⁰ − 0 = 1</>, at: h0},
				{x: 'x = ln 2', kind: 'flat', value: <>2 − 2 ln 2</>, approx: '0.614', at: hln, tag: {text: 'global min', at: minIs + 10}},
				{x: 'x = 2', kind: 'end', value: <>e² − 4</>, approx: '3.389', at: h2, tag: {text: 'global max', at: so + 14}},
			]} />
			<RecallChip x={700} y={376} at={six - 20} size={42}>e<Sup>ln 2</Sup> = 2</RecallChip>
			<AnswerBox at={minIs} x={84} y={790} size={44}>global maximum e² − 4 at x = 2;<br />global minimum 2 − 2 ln 2 at x = ln 2</AnswerBox>
			<FunctionSimulator x={FG.x} y={FG.y} width={FG.w} height={FG.h} window={W} family={A2F} timeline={[{frame: 0, x: L2}]} color={BLUE} draw={{at: h0, dur: 30}} at={-30}
				xTicks={[{value: L2, label: 'ln 2'}, 1, 2]} yTicks={[1, 2, 3]} xLabel="x" yLabel="y" regions={[{x: [0, 2], color: BAND, opacity: 0.75, at: -30}]}
				overlay={() => <FrameSvg>
					<HeightBars Mp={M} bars={[
						{x: 0, y: 1, at: h0 + 10, label: '1'},
						{x: L2, y: 2 - 2 * L2, at: six, label: '0.61', glow: prog(f, minIs + 10, 12)},
						{x: 2, y: Math.exp(2) - 4, at: nine, label: '3.39', glow: prog(f, so + 14, 12)},
					]} />
					<Stub Mp={M} X={L2} Y={2 - 2 * L2} m={0} half={70} opacity={prog(f, zeroWhen, 12)} />
				</FrameSvg>} />
			<PlanCard x={96} y={690} w={960} out={minIs - 14} fn="h" />
			<MistakeCard x={FG.x} y={820} w={FG.w} at={mist - 10} size={42} wrong={<>global minimum 0 at x = ln 2</>} caption="0 is h′(ln 2): compare values of h" />
		</>
	);
};

// ---------- 13. strand close and the fencing handoff ----------
/** The coded fencing plan view (wall, three ink fence sides x, y, x) with its chips. d11 opens on this frame. */
export const PlanView: React.FC<{at?: number; fortyAt?: number; areaAt?: number}> = ({at = -60, fortyAt = -60, areaAt = -60}) => {
	const f = useCurrentFrame();
	const L = 260, R = 1180, T = 330, B = 900;
	const draw = (s: number, d = 30) => Math.max(0, Math.min(1, (f - s) / d));
	const p1 = draw(at + 10), p2 = draw(at + 40), p3 = draw(at + 70);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, at, 14)}}>
				<FrameSvg>
					<rect x={L - 60} y={T - 46} width={R - L + 120} height={40} fill="#9b948a" rx={6} />
					{Array.from({length: 18}, (_, i) => <line key={i} x1={L - 50 + i * 56} x2={L - 20 + i * 56} y1={T - 8} y2={T - 44} stroke="#7d766c" strokeWidth={3} />)}
					<rect x={L} y={T} width={R - L} height={B - T} fill="#efe7d8" opacity={0.6} />
					<line x1={L} y1={T} x2={L} y2={T + (B - T) * p1} stroke={INK} strokeWidth={10} strokeLinecap="round" />
					<line x1={L} y1={B} x2={L + (R - L) * p2} y2={B} stroke={INK} strokeWidth={10} strokeLinecap="round" />
					<line x1={R} y1={B} x2={R} y2={B - (B - T) * p3} stroke={INK} strokeWidth={10} strokeLinecap="round" />
				</FrameSvg>
				<div style={{position: 'absolute', left: (L + R) / 2 - 60, top: T - 112, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: INK_SOFT}}>wall</div>
				<div style={{position: 'absolute', left: L - 70, top: (T + B) / 2 - 36, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, color: INK, opacity: prog(f, at + 30, 10)}}>x</div>
				<div style={{position: 'absolute', left: (L + R) / 2 - 20, top: B + 16, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, color: INK, opacity: prog(f, at + 60, 10)}}>y</div>
				<div style={{position: 'absolute', left: R + 26, top: (T + B) / 2 - 36, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, color: INK, opacity: prog(f, at + 90, 10)}}>x</div>
			</div>
			<Chip x={1300} y={330} at={fortyAt} size={48}>40 m of fencing</Chip>
			<Chip x={1300} y={450} at={areaAt} size={48}>largest area?</Chip>
			<Chip x={1300} y={600} at={areaAt + 12} size={36} color={MATH_STRAND_ACCENT}>Later: optimisation<br />problems (d18)</Chip>
			<Chip x={1300} y={760} at={areaAt + 22} size={32} color={MATH_STRAND_ACCENT}>Next: why tan x has<br />gradient sec²x</Chip>
		</>
	);
};
/** The memory line, small, at the top of the strand close (with the coaster badge until the motifs leave). */
const MemoryLine: React.FC<{at?: number}> = ({at = -60}) => (
	<Enter at={at} style={{position: 'absolute', left: 96, top: 168}}>
		<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK}}>{AID_MAIN}</span>
	</Enter>
);
/** d10's final frame (scene 13 at rest): the plan view with its four chips and the small memory line. */
export const D10FinalFrame: React.FC = () => (
	<>
		<SceneHeading text="Next: a function from a real situation" at={-300} size={54} />
		<MemoryLine />
		<PlanView />
	</>
);

export const S13: React.FC = () => {
	const id = 'scene-13';
	const f = useCurrentFrame();
	const completes = cue(id, 'That completes'), later = cue(id, 'Later'), forty = cue(id, 'Forty'), area = cue(id, 'area');
	return (
		<>
			<SceneHeading text={f < later ? 'Compare the values of f' : 'Next: a function from a real situation'} at={f < later ? -24 : later} size={54} />
			<MemoryLine at={-20} />
			<div style={{position: 'absolute', left: 1180, top: 120, opacity: 1 - prog(f, later - 20, 16)}}><CoasterBadge w={560} h={240} /></div>
			{/* scene opener: the method card, then the strand motifs */}
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, completes, 14)}}>
				<AidCard x={96} y={280} w={1080} at={-30} />
				<CandTable x={1230} y={420} w={594} at={-30} size={38} head={['candidate', 'value of f']} rows={[
					{x: 'x = −2', kind: 'end', value: '−2', at: -30, tag: {text: 'min', at: -30}},
					{x: 'x = −1', kind: 'flat', value: '2', at: -30},
					{x: 'x = 1', kind: 'flat', value: '−2', at: -30, tag: {text: 'min', at: -30}},
					{x: 'x = 3', kind: 'end', value: '18', at: -30, tag: {text: 'max', at: -30}},
				]} />
			</div>
			{f >= completes && f < later + 20 ? <div style={{position: 'absolute', left: 110, top: 380, opacity: vis(f, completes + 4, later - 16, 14), transform: 'scale(1.0)', transformOrigin: '0 0', width: 1700}}>
				<StrandMotifs />
			</div> : null}
			{f >= completes ? <HandTag x={110} y={350} text="the strand: from (eˣ)′ = eˣ to global maxima and minima" at={completes + 10} out={later - 16} size={40} color={INK} /> : null}
			{f >= later ? <PlanView at={later} fortyAt={forty} areaAt={area} /> : null}
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const id = 'scene-14';
	const f = useCurrentFrame();
	const items = [
		{content: <>Global maximum at a: f(x) ≤ f(a) for every x in the domain</>, at: 10},
		{content: <>Candidates: <span style={{color: VIOLET}}>flats inside</span>, both ends, <span style={{color: '#9c5a00'}}>corners (f′ undefined)</span></>, at: 22},
		{content: <>Reject stationary points outside the interval</>, at: 34},
		{content: <>Compare values of f, not f′. No classifying needed.</>, at: 46},
		{content: <>Needs a closed interval and an unbroken curve</>, at: 58},
	];
	const end = 1350;
	const back = prog(f, end - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={cue(id, 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
				<KeyNotesBullets x={110} y={230} w={1040} items={items} size={42} gap={74} />
				<AidCard x={1190} y={180} w={634} at={70} k={0.74} />
				<Enter at={84} style={{position: 'absolute', left: 1190, top: 800}}>
					<div style={{display: 'flex', gap: 20, alignItems: 'center', background: CARD, borderRadius: 18, padding: '10px 16px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', width: 634, boxSizing: 'border-box'}}>
						<CoasterBadge w={250} h={150} />
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, lineHeight: 1.1, color: INK}}>highest point: top of the climb, not the hump</div>
					</div>
				</Enter>
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><D10FinalFrame /></div> : null}
		</>
	);
};
