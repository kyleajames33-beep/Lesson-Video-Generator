// Scenes 10 to 15: two attempts with answer-free pictures and brief feedback, the handoff (Faraday's reverse question:
// a square loop in a uniform field, the lines through it lit, then turned to about 50 degrees with its normal and "?";
// its last frame is exported as `M6V08FinalFrame` for v09), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row, Sub} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {EndOnWire} from '../../physics/electromagnetism/wires';
import {LoopInField} from '../../physics/electromagnetism/flux';
import type {FluxCam} from '../../physics/electromagnetism/flux';
import {A1, A2, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, hold} from './common';
import {AMBER, FIELD1, GREY, Lbl, NAVY, ORANGE, Shrunk, T, fl} from './parts';

// ---------- attempts ----------
const Q1: React.FC = () => <>Two long, straight, parallel wires are 4.0 cm apart in air. One carries a current of 20 A and the other a current of 5.0 A in the opposite direction. (a) Calculate the magnitude of the force per unit length on the 5.0 A wire. (b) State whether the wires attract or repel. (c) Compare the force per unit length on the 20 A wire with your answer to (a), and justify your comparison.</>;
const Q2: React.FC = () => <>Two long, straight, parallel wires carry currents in the same direction. Both currents are doubled and the separation of the wires is doubled. Determine the factor by which the magnetic force per unit length between the wires changes.</>;

/** Attempt 1's picture: two end-on wires 4.0 cm apart, a dot "20 A" and a cross "5.0 A" (no forces). */
const PairPicture: React.FC<{answer?: number}> = ({answer = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<rect x={30} y={90} width={610} height={380} rx={14} fill="#fbf8f1" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
		<EndOnWire cx={200} cy={280} r={56} dir="out" />
		<EndOnWire cx={480} cy={280} r={56} dir="in" />
		<line x1={200} y1={400} x2={480} y2={400} stroke={NAVY.stroke} strokeWidth={4} />
		<line x1={200} y1={388} x2={200} y2={412} stroke={NAVY.stroke} strokeWidth={4} /><line x1={480} y1={388} x2={480} y2={412} stroke={NAVY.stroke} strokeWidth={4} />
		<T x={340} y={450} size={34} color={NAVY.ink} anchor="middle">4.0 cm</T>
		<T x={200} y={190} size={36} color={ORANGE.ink} anchor="middle">20 A</T>
		<T x={480} y={190} size={36} color={ORANGE.ink} anchor="middle">5.0 A</T>
		{answer > 0 ? <g opacity={answer}>
			<Arrow2 from={[140, 280]} to={[40, 280]} color={AMBER.stroke} width={8} head={24} />
			<Arrow2 from={[540, 280]} to={[640, 280]} color={AMBER.stroke} width={8} head={24} />
		</g> : null}
	</svg>
);
/** Attempt 2's picture: two end-on currents (dots) with r between them and inward arrows (no values). */
const DoublePicture: React.FC<{answer?: number}> = ({answer = 0}) => {
	const L = 60 + 60 * answer;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={30} y={90} width={610} height={380} rx={14} fill="#fbf8f1" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			<EndOnWire cx={190} cy={280} r={50} dir="out" />
			<EndOnWire cx={490} cy={280} r={50} dir="out" />
			<Arrow2 from={[246, 280]} to={[246 + L * 0.8, 280]} color={AMBER.stroke} width={7} head={22} />
			<Arrow2 from={[434, 280]} to={[434 - L * 0.8, 280]} color={AMBER.stroke} width={7} head={22} />
			<line x1={190} y1={400} x2={490} y2={400} stroke={NAVY.stroke} strokeWidth={4} />
			<T x={340} y={450} size={34} color={NAVY.ink} anchor="middle">{answer > 0.5 ? '2r' : 'r'}</T>
			<T x={190} y={190} size={36} color={ORANGE.ink} anchor="middle">{answer > 0.5 ? '2I' : 'I'}</T>
			<T x={490} y={190} size={36} color={ORANGE.ink} anchor="middle">{answer > 0.5 ? '2I' : 'I'}</T>
		</svg>
	);
};
export const S10: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={32} marks={4} picture={<PairPicture />}><Q1 /></QuestionScene></Accent>;
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={34} marks={2} picture={<DoublePicture />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 420, scale = 0.86}) => <div style={{position: 'absolute', left: 1250, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const start = cue(id, 'F over l is two'), metre = cue(id, 'newtons per metre'), repel = cue(id, 'so they repel'), third = cue(id, "by Newton's third law"), slip = cue(id, 'The classic slip'), harder = cap(id, cue(id, 'pushes harder'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={370} givens={<>I₁ = 20 A, I₂ = 5.0 A (opposite), r = 4.0 cm = 0.040 m, μ₀/2π = 2 × 10⁻⁷ N A⁻²</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 10, width: 1120}}>
				<Row at={start} ageAt={repel} size={44} oldSize={36}>(a) F/l = 2 × 10⁻⁷ × (20 × 5.0) / 0.040</Row>
				<Row at={metre} ageAt={third} size={48} oldSize={38}>&nbsp;&nbsp;&nbsp;&nbsp;= <AnswerBox at={metre + 10}><span style={{color: AMBER.ink}}>{fl(A1.F)} N m⁻¹</span></AnswerBox></Row>
				<Row at={repel} ageAt={third} size={48} oldSize={38}>(b) <AnswerBox at={repel + 10}>repel</AnswerBox> (opposite currents)</Row>
				<Row at={third} size={40}>(c) <AnswerBox at={third + 10}>equal: {fl(A1.F)} N m⁻¹, opposite way</AnswerBox> (third law)</Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={harder} size={30} caption="F/l uses I₁ × I₂: the same for both">20 A wire feels 4 × more</CrossedChip>
			<Picture top={380} scale={0.98}><PairPicture answer={prog(f, repel, 14)} /></Picture>
		</>
	);
};

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const four = cue(id, 'four times bigger'), halves = cue(id, 'Doubling the distance halves it'), doubles = cue(id, 'force per unit length doubles'), slip = cue(id, 'The slip is using'), r = cap(id, cue(id, "it's one over r"));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>I₁ → 2I₁, I₂ → 2I₂, r → 2r</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 12, width: 1120}}>
				<Row at={four} ageAt={doubles} size={48} oldSize={40}>I₁I₂ → (2I₁)(2I₂) = 4I₁I₂</Row>
				<Row at={halves} ageAt={doubles} size={48} oldSize={40}>r → 2r: ÷ 2</Row>
				<Row at={doubles} size={48}>F/l × 4 ÷ 2 = <AnswerBox at={doubles + 10}><span style={{color: AMBER.ink}}>× {A2.factor} (doubles)</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={720} at={slip} crossAt={cap(id, slip + 40)} size={32} caption="F/l ∝ 1/r, not 1/r²">÷ (2)² = ÷ 4: × {A2.slip}, no change</CrossedChip>
			<HandTag x={760} y={880} text="1/r for wires" at={r} size={36} color={AMBER.ink} />
			<Picture top={380} scale={0.98}><DoublePicture answer={prog(f, four, 30)} /></Picture>
		</>
	);
};

// ---------- 14. next: flux through a loop ----------
const CAM14: FluxCam = {cx: 900, cy: 560, k: 1, yaw: -70, pitch: 22};
const A14 = 170;
export const HandoffBoard: React.FC<{fieldAt?: number; loopAt?: number; litAt?: number; turnAt?: number; qAt?: number; chipAt?: number; tagAt?: number; tagOut?: number; faradayAt?: number; headSwap?: number}> = ({fieldAt = -60, loopAt = -60, litAt = -60, turnAt = -60, qAt = -60, chipAt = -60, tagAt = 1e9, tagOut = 1e9, faradayAt = -60, headSwap = -60}) => {
	const f = useCurrentFrame();
	const phi = kf(f, [[turnAt, 0], [turnAt + 40, 50]]);
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<LoopInField clip={[0, 150, 1920, 790]} cam={CAM14} a={A14} phi={phi} L={4} lit={prog(f, litAt, 14)} normal={prog(f, turnAt + 20, 14)} lineColor={FIELD1} litColor="#2f3d4c" normalColor={NAVY.stroke} fieldOpacity={prog(f, fieldAt, 14)} loopOpacity={prog(f, loopAt, 14)} />
			</FrameSvg>
			<Lbl x={1420} y={770} at={fieldAt} color={GREY.ink} size={40}>B</Lbl>
			<Lbl x={96} y={250} at={faradayAt} color={INK} size={32}>Michael Faraday, 1831</Lbl>
			<Lbl x={1560} y={560} at={qAt} color={INK} size={110} anchor="middle">?</Lbl>
			<Lbl x={700} y={640} at={turnAt + 30} color={NAVY.ink} size={30} anchor="end">normal</Lbl>
			<HandTag x={260} y={800} text="fewer lines through?" at={tagAt} out={tagOut} size={34} color={GREY.ink} />
			<Chip x={96} y={890} at={chipAt} size={30} w={1728} color={INK} border={INK}>Next: why does changing loop orientation change magnetic flux?</Chip>
		</>
	);
};
/** v08's final frame for v09 (a square loop turned about 50 degrees in a uniform field, the lines through it lit, its normal, "?"). */
export const M6V08FinalFrame: React.FC = () => <HandoffBoard />;
export const S14: React.FC = () => {
	const id = 'handoff';
	const far = cue(id, 'Michael Faraday asked'), can = cue(id, 'Can a magnetic field make'), pass = cue(id, 'passes through a loop of wire'), facing = cap(id, cue(id, 'which way the loop is facing'));
	return <HandoffBoard fieldAt={0} loopAt={can} litAt={pass} turnAt={facing - 30} qAt={facing} chipAt={facing} tagAt={facing - 10} tagOut={cap(id, facing + 30)} faradayAt={far} headSwap={can} />;
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const notes = [
		{content: <>Each wire sits in the other's field: F = BIl.</>, at: 2},
		{content: <><span style={{color: AMBER.ink}}>F/l = (μ₀/2π)(I<Sub>1</Sub>I<Sub>2</Sub>/r)</span>; μ₀/2π = 2 × 10⁻⁷.</>, at: 6},
		{content: <>Same direction attract; opposite repel.</>, at: 10},
		{content: <>Equal forces: a Newton's third law pair.</>, at: 14},
		{content: <>Ampere: wire force until 2019; e fixed since.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Like currents attract,</>} sub={<>unlike currents repel. The forces are always equal.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
