// Scenes 11 to 16: attempt 1 (the painted bench with the lamp and two coded filters 35° apart) and its feedback (the
// rail bars 120, 60, 40), attempt 2 (the lamp and one filter) and its feedback (end-on: a transverse wave's field
// across the beam against a longitudinal wave's oscillation along it), the handoff (the polariser chain on the painted
// bench; its last frame is exported as `M7V08FinalFrame` for the next video) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {polarGeom} from '../../physics/light/polar';
import type {PolarAt} from '../../physics/light/polar';
import {A1_C2, A1_DEG, A1_I0, A1_I1, A1_I2, A1_SLIP, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cos2, cue, dur, hold} from './common';
import {Arc, BarLabels, EBLUE, EndOn, GREY, Lbl, NAVY, ORANGE, Readout, Shrunk, Stage, fx} from './parts';
import type {Bar} from './parts';
import {ST} from './s1';

// ---------- 11. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => <>{u ? <u>Unpolarised</u> : 'Unpolarised'} light of intensity 120 W m⁻² passes through two ideal polarising filters whose transmission axes are at {u ? <u>35°</u> : '35°'} to each other. Calculate the intensity of the light emerging from the second filter.</>;
const PB1: PolarAt = {x: 30, y: 420, w: 620, g: 0.6, src: 110, holders: [320, 500], sensor: 630, source: 'lamp'};
const TwoFilterPic: React.FC<{bars?: number; w?: number; h?: number}> = ({bars = 0, w = 678, h = 560}) => {
	const g = polarGeom(PB1);
	const B: Bar[] = [{x: 215, v: 1, o: bars}, {x: 410, v: 0.5, o: bars}, {x: 575, v: 0.5 * A1_C2, o: bars}];
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<Stage b={PB1} axes={[0, A1_DEG]} insetY={150} insetR={58} bars={B} barH={90} sensor={false} />
			{bars > 0.001 ? B.map((b, i) => <text key={i} x={b.x} y={g.railY - 16 - 90 * b.v} textAnchor="middle" opacity={bars} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: ORANGE.ink}}>{fx([A1_I0, A1_I1, A1_I2][i], 0)}</text>) : null}
			<text x={PB1.holders[1] + 70} y={110} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: NAVY.ink}}>35°</text>
			<text x={40} y={h - 40} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: GREY.ink}}>lamp, two filters (axes face on above)</text>
		</svg>
	);
};
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={2} picture={<TwoFilterPic />}><Q1 /></QuestionScene></Accent>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const sixty = cue(id, 'to sixty watts per square metre'), forty = cue(id, 'about forty watts per square metre'), slip = cue(id, 'The classic slip'), e81 = cap(id, cue(id, 'about eighty-one'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<><span style={{color: ORANGE.ink}}>I₀ = 120 W m⁻² (unpolarised)</span>{'   '}θ = 35° between axes{'   '}ideal filters</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 16, width: 1110}}>
				<Row at={sixty - 6} size={52}><span style={{whiteSpace: 'nowrap'}}>{`I₁ = ½ × ${fx(A1_I0, 0)} = ${fx(A1_I1, 0)} W m⁻²`}</span></Row>
				<Row at={forty - 30} size={44}><span style={{whiteSpace: 'nowrap'}}>{`I₂ = ${fx(A1_I1, 0)} cos²${A1_DEG}° = ${fx(A1_I1, 0)} × ${fx(A1_C2, 3)}`}</span></Row>
				<Row at={forty - 6} size={56}><AnswerBox at={forty}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`= ${fx(A1_I2, 0)} W m⁻²`}</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1220, top: 380, opacity: prog(f, 4, 12)}}><TwoFilterPic w={620} h={520} bars={prog(f, sixty, 12)} /></div>
			<CrossedChip x={96} y={760} at={slip} crossAt={Math.min(e81, slip + 60)} size={30} caption="unpolarised: halve first">{`I = ${fx(A1_I0, 0)} cos²${A1_DEG}° = ${fx(A1_SLIP, 0)} W m⁻²`}</CrossedChip>
		</>
	);
};

// ---------- 13. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>Light can be plane {u ? <u>polarised</u> : 'polarised'} by a polarising filter. Explain how this observation supports a {u ? <u>transverse</u> : 'transverse'} wave model of light and rules out a {u ? <u>longitudinal</u> : 'longitudinal'} wave model.</>;
const PB2: PolarAt = {x: 30, y: 420, w: 620, g: 0.7, src: 150, holders: [420], sensor: 630, source: 'lamp'};
const OneFilterPic: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<rect x={10} y={20} width={650} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Stage b={PB2} axes={[0]} insetY={150} insetR={64} sensor={false} />
		<text x={40} y={500} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: GREY.ink}}>lamp and one polarising filter</text>
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<OneFilterPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const rest = cue(id, 'absorb the rest'), pol = cue(id, "it can't be polarised"), slip = cue(id, 'The slip is saying'), sel = cap(id, cue(id, 'no oscillation for a filter to select'));
	const breathe = 40 + 30 * Math.sin(f / 6);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>observation: light can be plane polarised</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 16, width: 1080}}>
				<Row at={8} size={34} style={{whiteSpace: 'normal'}}><span>Polarisation restricts the oscillation to one direction across the travel.</span></Row>
				<Row at={rest - 6} size={36} style={{whiteSpace: 'normal'}}><AnswerBox at={rest}><span>transverse: oscillation ⟂ travel → a filter can select one direction → polarisation possible</span></AnswerBox></Row>
				<Row at={pol - 6} size={36} style={{whiteSpace: 'normal'}}><AnswerBox at={pol}><span>longitudinal: oscillation ∥ travel → nothing across the beam to select → cannot be polarised; light can be, so light is transverse</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<EndOn c={[1380, 520]} r={150} deg={30} len={110} filter={{axis: 0}} comps={{axis: 0, across: 0.3}} opacity={prog(f, 4, 12)} />
				<g opacity={prog(f, 4, 12)}>
					<circle cx={1700} cy={520} r={130} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					<circle cx={1700} cy={520} r={breathe} fill="none" stroke={GREY.stroke} strokeWidth={5} strokeDasharray="10 8" />
					<circle cx={1700} cy={520} r={10} fill={NAVY.stroke} />
				</g>
			</FrameSvg>
			<Lbl x={1380} y={720} at={4} color={EBLUE.ink} size={26} anchor="middle">transverse: E across the beam</Lbl>
			<Lbl x={1700} y={720} at={4} color={GREY.ink} size={26} anchor="middle">longitudinal: along it</Lbl>
			<Lbl x={1540} y={340} at={4} color={GREY.ink} size={26} anchor="middle">the beam end on</Lbl>
			<CrossedChip x={96} y={800} at={slip} crossAt={sel - 10} size={30} caption="particles have no oscillation direction">polarisation shows light is particles</CrossedChip>
		</>
	);
};

// ---------- 15. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, ecos: cue(id, 'That part is E cos theta'), tw: cue(id, 'transverse wave every time'), compl: cue(id, 'nearly complete'), how: cap(id, cue(id, 'How did thermal spectra')), end: dur(id) - 1};
})();
/** The handoff board at scene frame f (`final`: every label written, for the next video's first frame). */
export const HandoffBoard8: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const th = final ? 55 : kf(f, [[H.ecos, 40], [H.ecos + 30, 55]]);
	const g = polarGeom(ST);
	const bars: Bar[] = [{x: 610, v: 1, label: 'I₀'}, {x: 1010, v: 0.5, label: '½I₀'}, {x: 1390, v: 0.5 * cos2(th), label: '½I₀ cos²θ'}];
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.how} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.how + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<Stage b={ST} axes={[0, th]} bars={bars} />
				<Arc c={[ST.holders[1], 230]} r={80} a0={90} a1={90 - th} width={5} />
				<Readout x={1590} y={170} v={2 * 0.5 * cos2(th)} label="I" />
			</FrameSvg>
			<BarLabels b={ST} bars={bars} at={at(-60)} />
			<Lbl x={ST.src} y={g.railY + 160} at={at(-60)} color={INK} size={26} anchor="middle">unpolarised</Lbl>
			<Lbl x={ST.holders[0]} y={g.railY + 160} at={at(-60)} color={NAVY.ink} size={26} anchor="middle">polariser: axis 0°</Lbl>
			<Lbl x={ST.holders[1]} y={g.railY + 160} at={at(-60)} color={NAVY.ink} size={26} anchor="middle">analyser: axis θ</Lbl>
			<Lbl x={ST.holders[1] + 40} y={150} at={at(-60)} color={NAVY.ink} size={32}>θ</Lbl>
			{!final ? <HandTag x={1290} y={810} text="only the part along the axis" at={H.ecos + 10} out={H.how - 20} size={30} color={EBLUE.ink} /> : null}
			{!final ? <Chip x={96} y={815} at={H.tw} out={H.compl} size={28} color={GREY.ink} border={GREY.stroke}>interference, diffraction, polarisation: wave</Chip> : null}
			{chip ? <Chip x={96} y={890} at={at(H.how)} size={30} w={1728} color={INK} border={INK}>Next: how did thermal spectra challenge classical predictions?</Chip> : null}
		</>
	);
};
/** v08's final frame for the next video. */
export const M7V08FinalFrame: React.FC = () => <HandoffBoard8 f={H.end} final />;
export const S15: React.FC = () => <HandoffBoard8 f={useCurrentFrame()} />;

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>Plane-polarised: <span style={{color: EBLUE.ink}}>E in one direction</span> across the beam.</>, at: 2},
		{content: <>Only transverse waves polarise, so light is transverse.</>, at: 6},
		{content: <>Unpolarised, one ideal filter: <span style={{color: ORANGE.ink}}>I = ½I₀</span>.</>, at: 10},
		{content: <>Polarised into an analyser: <span style={{color: ORANGE.ink}}>I = I_max cos²θ</span>.</>, at: 14},
		{content: <>Chains: halve first, then cos² of each angle between axes.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Cos for the field, cos² for the light. First filter on unpolarised light: half.</>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
