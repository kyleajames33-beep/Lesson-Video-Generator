// Scenes 11 to 14: attempt 2 (the painted radio mast) and its brief feedback (givens strip, the mast with oscillating
// electrons and fronts, the answer one stage at a time, one slate crossed slip), the handoff (the EM wave on a long
// distance bar, the predicted c, a 3 m room in about 10 ns, "d = ?", "t = ?", "speed = d / t"; its last frame is
// exported as `M7V01FinalFrame` for the next video) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {EMWave, FrontArcs, frontRadii} from '../../physics/light/em';
import {ACCENT, A2_L, A2_WRONG, C, HEAD, HEAD_NEXT, HEAD_SIZE, ROOM_T, cap, cue, dur, hold} from './common';
import {BLUE, FLUX, Lbl, MastRig, NAVY, ORANGE, ROSE, Shrunk, TimerBox, fx, mastPts, sci} from './parts';

// ---------- 11. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>A radio station transmits at a frequency of {u ? <u>98.5 MHz</u> : '98.5 MHz'}. (a) Describe how the transmitting antenna produces an electromagnetic wave. (b) Calculate the wavelength of the wave.</>;
const MastPic: React.FC<{f?: number; live?: boolean}> = ({f = 0, live = false}) => {
	const p = {x: 250, y: 50, w: 120};
	const m = mastPts(p);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={650} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<MastRig p={p} rod={live ? 1 : 0} dots={live ? 1 : 0} osc={Math.sin(f * 0.3)} />
			{live ? <FrontArcs cx={m.mid[0]} cy={m.mid[1]} fronts={frontRadii(Array.from({length: 60}, (_, i) => i * 21), f, 3, 330)} a0={-30} a1={30} colors={[BLUE.stroke, FLUX]} maxR={330} width={4} /> : null}
		</svg>
	);
};
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<MastPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const c = cue(id, 'outwards at c'), three = cue(id, 'three point zero five metres'), slip = cue(id, 'The slip is forgetting'), big = cap(id, cue(id, 'a million times too big'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<><span style={{color: ROSE.ink}}>f = 98.5 MHz = 98.5 × 10⁶ Hz</span>{'    '}<span style={{color: NAVY.ink}}>{`c = ${sci(C, 2)} m s⁻¹`}</span></>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 18, width: 1100}}>
				<Row at={10} size={38} style={{whiteSpace: 'normal'}}><span>(a) AC drives electrons to oscillate (accelerate) → changing E and B regenerate each other → wave travels out at c, f = 98.5 MHz</span></Row>
				<Row at={three - 10} size={44}><AnswerBox at={three}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`(b) λ = c / f = (${sci(C, 2)}) / (98.5 × 10⁶) = ${fx(A2_L, 2)} m`}</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1180, top: 330}}><svg width={680} height={560} style={{overflow: 'visible'}} viewBox="0 0 678 560"><MastPicInner f={f} /></svg></div>
			<Lbl x={1540} y={920} at={c} color={NAVY.ink} size={30} anchor="middle">fronts travel out at c</Lbl>
			<CrossedChip x={96} y={780} at={slip} crossAt={big} size={30} caption="MHz → × 10⁶ Hz">{`λ = (${sci(C, 2)}) / 98.5 = ${sci(A2_WRONG, 2)} m`}</CrossedChip>
		</>
	);
};
const MastPicInner: React.FC<{f: number}> = ({f}) => {
	const p = {x: 250, y: 50, w: 120};
	const m = mastPts(p);
	return (
		<g>
			<rect x={10} y={20} width={650} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<MastRig p={p} rod={1} dots={1} osc={Math.sin(f * 0.3)} />
			<FrontArcs cx={m.mid[0]} cy={m.mid[1]} fronts={frontRadii(Array.from({length: 60}, (_, i) => i * 21), f, 3, 330)} a0={-30} a1={30} colors={[BLUE.stroke, FLUX]} maxR={330} width={4} />
		</g>
	);
};

// ---------- 13. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, sustain: cue(id, 'self-sustaining wave of fields'), calc: cue(id, 'calculated its speed'), ns: cue(id, 'nanoseconds'), how: cue(id, 'So how could anyone measure'), next: cap(id, cue(id, 'How can a time-and-distance measurement')), end: dur(id) - 1};
})();
/** Layout of the handoff board (exported for the next video's opening). */
export const HB = {wave: {x0: 200, x1: 1480, y: 520, amp: 110, lambda: 320}, bar: {x0: 200, x1: 1700, y: 760}, room: {x0: 200, x1: 520}, timer: {x: 1280, y: 610, w: 330, h: 86}, cChip: {x: 1150, y: 190}, sChip: {x: 1280, y: 720}, next: {x: 96, y: 890}};
export const V01_PHASE_END = H.end * 0.06;
/** The handoff board at scene frame f (`final`: every label written, for the next video's first frame). */
export const HandoffBoard: React.FC<{f: number; final?: boolean; chip?: boolean; heading?: boolean; phase?: number}> = ({f, final = false, chip = true, heading = true, phase}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const ph = phase ?? f * 0.06;
	const W = HB.wave, B = HB.bar;
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<EMWave {...W} phase={ph} eColor={BLUE.stroke} bColor={FLUX} axisColor={NAVY.stroke} arrows={0.8} tilt={1} opacity={o(2, 16)} />
				<g>
					<line x1={B.x0} y1={B.y} x2={B.x1} y2={B.y} stroke={INK} strokeWidth={5} />
					<line x1={B.x0} y1={B.y - 18} x2={B.x0} y2={B.y + 18} stroke={INK} strokeWidth={5} />
					<line x1={B.x1} y1={B.y - 18} x2={B.x1} y2={B.y + 18} stroke={INK} strokeWidth={5} />
				</g>
				<g opacity={o(H.ns)}>
					<path d={`M${HB.room.x0},${B.y - 50} v-14 h${HB.room.x1 - HB.room.x0} v14`} fill="none" stroke={ORANGE.stroke} strokeWidth={4} />
					<TimerBox x={HB.room.x0 + 30} y={B.y + 40} w={260} h={70} text={`≈ ${fx(ROOM_T * 1e9, 0)} ns`} />
				</g>
				<TimerBox x={HB.timer.x} y={HB.timer.y} w={HB.timer.w} h={HB.timer.h} text="t = ?" opacity={o(H.next)} />
				{!final && f >= H.ns ? <ellipse cx={HB.room.x0 + 160} cy={B.y + 75} rx={170} ry={60} fill="none" stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, H.ns + 20, 12) * (1 - prog(f, H.next - 20, 12))} /> : null}
			</FrameSvg>
			<Lbl x={W.x0 + 40} y={W.y - W.amp - 50} at={at(H.sustain)} color={INK} size={32}>E ↔ B</Lbl>
			<Lbl x={W.x1 + 70} y={W.y + 70} at={at(4)} color={NAVY.ink} size={26}>direction of travel</Lbl>
			<Chip x={HB.cChip.x} y={HB.cChip.y} at={at(H.calc)} size={30} w={680} color={ORANGE.ink}>{`c = 1/√(μ₀ε₀) ≈ ${sci(C, 2)} m s⁻¹ (predicted)`}</Chip>
			<Lbl x={(HB.room.x0 + HB.room.x1) / 2} y={B.y - 80} at={at(H.ns)} color={ORANGE.ink} size={30} anchor="middle">3 m</Lbl>
			{final ? null : <HandTag x={600} y={B.y + 80} text="too fast for a stopwatch" at={H.ns + 20} out={H.next - 20} size={34} color={NAVY.ink} />}
			<Lbl x={1000} y={B.y + 60} at={at(H.next)} color={INK} size={32} anchor="middle">distance d = ?</Lbl>
			<Lbl x={HB.timer.x + HB.timer.w / 2} y={HB.timer.y - 20} at={at(H.next)} color={INK} size={28} anchor="middle">time</Lbl>
			<Chip x={HB.sChip.x} y={HB.sChip.y} at={at(H.next + 6)} size={34} w={420} color={INK}>speed = d / t</Chip>
			{chip ? <Chip x={HB.next.x} y={HB.next.y} at={at(H.next + 10)} size={30} w={1728} color={INK} border={INK}>Next: how can a time-and-distance measurement reveal the speed of light?</Chip> : null}
		</>
	);
};
/** v01's final frame for the next video. */
export const M7V01FinalFrame: React.FC = () => <HandoffBoard f={H.end} final />;
export const S13: React.FC = () => <HandoffBoard f={useCurrentFrame()} />;

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const notes = [
		{content: <>Changing <span style={{color: FLUX}}>B</span> makes <span style={{color: BLUE.ink}}>E</span>; changing <span style={{color: BLUE.ink}}>E</span> makes <span style={{color: FLUX}}>B</span> (Maxwell).</>, at: 2},
		{content: <>The fields regenerate each other: a wave, no medium.</>, at: 6},
		{content: <>Transverse: E ⟂ B ⟂ travel, in phase.</>, at: 10},
		{content: <><span style={{color: ROSE.ink}}>Accelerating charges</span> radiate; f (wave) = f (charges).</>, at: 14},
		{content: <><span style={{color: ORANGE.ink}}>c = 1/√(μ₀ε₀) = 3.00 × 10⁸ m s⁻¹</span>: light is EM.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<><span style={{color: BLUE.ink}}>Change E, make B.</span> <span style={{color: FLUX}}>Change B, make E.</span> <span style={{color: ROSE.ink}}>Shake a charge:</span> off at c.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
