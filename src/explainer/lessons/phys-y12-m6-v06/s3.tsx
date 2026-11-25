// Scenes 10 to 16: two attempts with answer-free pictures and brief feedback, back to the start (the beam again: only
// E/B gets through, then a proton and a heavier ion), the handoff (a straight wire across a field of crosses with the
// conventional current to the right and drifting electrons each pushed up; its last frame is exported as
// `M6V06FinalFrame` for v07), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, Row, Sub} from '../../physics/projectile/board';
import {CrossRegion, Particle} from '../../physics/electromagnetism/plates';
import type {PG} from '../../physics/electromagnetism/plates';
import {Arrow2, Wire} from '../../physics/electromagnetism/magnetic';
import {CrossedStage} from '../../physics/electromagnetism/crossed';
import {BARRIER_X, E16, G16} from '../phys-y12-m6-v05/s3';
import {A1, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, hold, selRun} from './common';
import {AMBER, ForcePair, GREY, Lbl, NAVY, ORANGE, ROSE, Ring, RunOn, Shrunk, SupplyRig, T, TEAL, sci} from './parts';
import {BeamShots, MagnetInset, SUP} from './s1';

// ---------- attempts ----------
const Q1: React.FC = () => <>In a velocity selector, two parallel plates 2.0 cm apart have a potential difference of 600 V across them. A uniform magnetic field of 0.050 T acts at right angles to the electric field and to the particles' velocity. Calculate the speed of the charged particles that pass through undeflected.</>;
const Q2: React.FC = () => <>Positive ions move to the right into a velocity selector in which the electric field points down the page and the magnetic field points into the page. The selected speed is v<Sub>s</Sub> = E/B. An ion enters at 2v<Sub>s</Sub>. Predict the direction of its initial deflection. Justify your answer by comparing the forces on it.</>;

const PG1: PG = {x1: 60, x2: 520, yTop: 200, yBot: 400};
/** Attempt 1's picture: plates 2.0 cm apart at 600 V with crosses, a beam entering and a slit barrier (no path through). */
const SelectorPicture: React.FC<{answer?: number}> = ({answer = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<CrossedStage g={PG1} barrierX={570} crossStep={60} linesStep={90} />
		<Bracket x1={30} y1={PG1.yTop} x2={30} y2={PG1.yBot} color={NAVY.stroke} label="2.0 cm" size={30} lx={20} ly={470} anchor="start" />
		<T x={290} y={120} size={32} color={NAVY.ink} anchor="middle">600 V</T>
		<T x={290} y={520} size={30} color={GREY.ink} anchor="middle">B = 0.050 T, into the page</T>
		<Arrow2 from={[-20, 300]} to={[70, 300]} color={TEAL.stroke} width={6} head={20} />
		{answer > 0 ? <g opacity={answer}>
			<line x1={70} y1={300} x2={660} y2={300} stroke={TEAL.stroke} strokeWidth={4} strokeDasharray="9 6" />
			<Particle cx={330} cy={300} sign="+" r={18} />
			<ForcePair x={330} y={300} fe={-70} fb={70} r={18} dx={10} />
		</g> : null}
	</svg>
);
const PG2: PG = {x1: 60, x2: 620, yTop: 160, yBot: 440};
/** Attempt 2's picture: plates (top +), crosses, a positive ion moving right (no forces). */
const IonPicture: React.FC<{answer?: number}> = ({answer = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<CrossedStage g={PG2} crossStep={70} linesStep={110} />
		<Arrow2 from={[200, 300]} to={[330, 300]} color={TEAL.stroke} width={7} head={24} />
		<Particle cx={170} cy={300} sign="+" r={26} />
		{answer > 0 ? <g opacity={answer}>
			<Arrow2 from={[150, 330]} to={[150, 410]} color={AMBER.stroke} width={7} head={22} />
			<Arrow2 from={[190, 270]} to={[190, 110]} color={ROSE.stroke} width={7} head={22} />
			<T x={95} y={430} size={30} color={AMBER.ink} anchor="end">qE</T>
			<T x={210} y={120} size={30} color={ROSE.ink}>2qE</T>
		</g> : null}
		<T x={340} y={510} size={30} color={GREY.ink} anchor="middle">E down, B into the page</T>
	</svg>
);
export const S10: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={2} picture={<SelectorPicture />}><Q1 /></QuestionScene></Accent>;
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={32} marks={3} picture={<IonPicture />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 420, scale = 0.86}) => <div style={{position: 'absolute', left: 1250, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const first = cue(id, 'First the electric field'), metre = cue(id, 'volts per metre'), then = cue(id, 'Then v equals E over B'), second = cue(id, 'metres per second'), slip = cue(id, 'The classic slip');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>V = 600 V, d = 2.0 cm = 0.020 m, B = 0.050 T</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 16, width: 1120}}>
				<Row at={first} ageAt={then} size={48} oldSize={40}>E = V/d = 600/0.020 = <AnswerBox at={metre}><span style={{color: '#1f6fb2'}}>{sci(A1.E, 1)} V m⁻¹</span></AnswerBox></Row>
				<Row at={then} size={48}>v = E/B = {sci(A1.E, 1)}/0.050 = <AnswerBox at={second}><span style={{color: TEAL.ink}}>{sci(A1.v, 1)} m s⁻¹</span></AnswerBox></Row>
			</div>
			<HandTag x={140} y={650} text="E first, then ÷ B" at={second + 10} size={34} color={TEAL.ink} />
			<CrossedChip x={96} y={740} at={slip} crossAt={cap(id, slip + 40)} size={32} caption="divide E, not V">V/B = {sci(A1.slip, 1)}</CrossedChip>
			<Picture><SelectorPicture answer={prog(f, second, 16)} /></Picture>
		</>
	);
};

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const on = cue(id, 'On a positive ion'), twice = cue(id, 'At twice the selected speed'), up = cue(id, 'and the ion is deflected up'), slip = cue(id, 'The classic slip'), only = cap(id, cue(id, 'That only works at'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={360} givens={<>+ ions; E down; B into page; v = 2v<Sub>s</Sub></>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 460, display: 'flex', flexDirection: 'column', gap: 12, width: 1120}}>
				<Row at={on} ageAt={up} size={40} oldSize={34}><span style={{color: AMBER.ink}}>F<Sub>E</Sub> = qE, down</span>; <span style={{color: ROSE.ink}}>F<Sub>B</Sub> up</span></Row>
				<Row at={twice} ageAt={up} size={40} oldSize={34}><span style={{color: ROSE.ink}}>F<Sub>B</Sub> = q(2v<Sub>s</Sub>)B = 2qE</span></Row>
				<Row at={up} size={48}>net = qE, up: <AnswerBox at={up + 10}>deflected up</AnswerBox></Row>
			</div>
			<HandTag x={140} y={700} text="fast follows the magnetic push" at={up + 20} size={34} color={ROSE.ink} />
			<CrossedChip x={96} y={770} at={slip} crossAt={only} size={30} caption="only at v = E/B">q cancels, so it goes straight</CrossedChip>
			<Picture top={400} scale={0.8}><IonPicture answer={prog(f, on, 14)} /></Picture>
		</>
	);
};

// ---------- 14. back to the start ----------
const RUN_P = selRun(1, BARRIER_X - E16.x + 220, 1, 1), RUN_ION = selRun(1, BARRIER_X - E16.x + 220, 1, 0.25);
export const S14: React.FC = () => {
	const id = 'hook-answer';
	const f = useCurrentFrame();
	const so = cue(id, 'So the selector works'), straight = cue(id, 'goes straight'), mass = cap(id, cue(id, 'whatever the charge'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SupplyRig g={G16} sup={SUP} reading="80 V" />
				<CrossedStage g={G16} barrierX={BARRIER_X} />
				<MagnetInset at={-30} />
				<BeamShots fire={so - 30} />
				{f >= mass ? <RunOn run={RUN_P} t={(f - mass) * 2.4} x0={E16.x} y0={E16.y} sign="+" r={20} /> : null}
				{f >= mass + 10 ? <RunOn run={RUN_ION} t={(f - mass - 10) * 2.4} x0={E16.x} y0={E16.y} sign="+" r={30} /> : null}
				<Ring cx={BARRIER_X + 13} cy={E16.y} rx={50} ry={60} at={straight} color={TEAL.stroke} />
			</FrameSvg>
			<Lbl x={G16.x2} y={250} color={INK} size={32} anchor="end">E down, B into page</Lbl>
			<Lbl x={BARRIER_X + 110} y={E16.y - 40} at={straight} color={TEAL.ink} size={34}>v = E/B</Lbl>
			<HandTag x={BARRIER_X - 200} y={G16.yBot + 80} text="only E/B" at={straight + 10} size={34} color={TEAL.ink} />
			<Lbl x={E16.x + 40} y={G16.yBot + 80} at={mass} color={INK} size={30}>proton and heavier ion, same speed</Lbl>
			<Lbl x={96} y={740} color={NAVY.ink} size={28}>80 V across 2.0 cm</Lbl>
		</>
	);
};

// ---------- 15. next: charges inside a wire ----------
export const REG15 = {x: 560, y: 200, w: 800, h: 660};
export const WIRE_Y = 560;
export const HandoffBoard: React.FC<{gridAt?: number; wireAt?: number; pushAt?: number; forceAt?: number; chipAt?: number; tagAt?: number; tagOut?: number; headSwap?: number}> = ({gridAt = -60, wireAt = -60, pushAt = -60, forceAt = -60, chipAt = -60, tagAt = 1e9, tagOut = 1e9, headSwap = -60}) => {
	const f = useCurrentFrame();
	const push = prog(f, pushAt, 12);
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<CrossRegion x={REG15.x} y={REG15.y} w={REG15.w} h={REG15.h} step={80} opacity={prog(f, gridAt, 14)} />
				<g opacity={prog(f, wireAt, 14)}>
					<Wire x1={REG15.x - 40} x2={REG15.x + REG15.w + 40} y={WIRE_Y} phase={-f * 0.8} step={110}>
						{x => (push > 0 ? <Arrow2 from={[x, WIRE_Y - 26]} to={[x, WIRE_Y - 76]} color={AMBER.stroke} width={4} head={14} opacity={push} /> : null)}
					</Wire>
					<Arrow2 from={[REG15.x + 20, WIRE_Y - 130]} to={[REG15.x + 240, WIRE_Y - 130]} color={ORANGE.stroke} width={7} head={24} />
				</g>
				{f >= forceAt ? <Arrow2 from={[REG15.x + REG15.w / 2 + 60, WIRE_Y - 40]} to={[REG15.x + REG15.w / 2 + 60, WIRE_Y - 300]} color={AMBER.stroke} width={10} head={36} dash="14 9" opacity={prog(f, forceAt, 12)} /> : null}
			</FrameSvg>
			<Lbl x={REG15.x + 10} y={REG15.y - 22} at={gridAt} color={GREY.ink} size={32}>B into page</Lbl>
			<Lbl x={REG15.x + 260} y={WIRE_Y - 120} at={wireAt} color={ORANGE.ink} size={40}>I</Lbl>
			<Lbl x={REG15.x - 40} y={WIRE_Y - 190} at={wireAt} color={ORANGE.ink} size={30}>conventional current</Lbl>
			<Lbl x={REG15.x - 40} y={WIRE_Y + 80} at={wireAt} color={INK} size={28}>electrons drift left</Lbl>
			<Lbl x={REG15.x + REG15.w / 2 + 90} y={WIRE_Y - 260} at={forceAt} color={AMBER.ink} size={40}>F = ?</Lbl>
			<HandTag x={REG15.x + REG15.w / 2 - 120} y={WIRE_Y + 130} text="every charge pushed up" at={tagAt} out={tagOut} size={34} color={AMBER.ink} marks={[{kind: 'underline', x1: REG15.x, x2: REG15.x + REG15.w, y: WIRE_Y + 40}]} markAt={tagAt} />
			<Chip x={96} y={890} at={chipAt} size={30} w={1728} color={INK} border={INK}>Next: why does a current-carrying wire feel a magnetic force?</Chip>
		</>
	);
};
/** v06's final frame for v07 (the wire in a field into the page, drifting electrons pushed up, F = ?). */
export const M6V06FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const moving = cue(id, 'Moving charges in a magnetic field'), wire = cue(id, 'Now put the moving charges'), current = cue(id, 'A current is just charges'), push = cue(id, 'every one of them feels'), why = cue(id, 'So why does a current-carrying');
	return <HandoffBoard gridAt={moving} wireAt={wire} pushAt={push} forceAt={cap(id, why)} chipAt={cap(id, why)} tagAt={push + 20} tagOut={cap(id, why + 10)} headSwap={current} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <><span style={{color: AMBER.ink}}>F<Sub>E</Sub> = qE</span>: any charge, any speed; can do work.</>, at: 2},
		{content: <><span style={{color: ROSE.ink}}>F<Sub>B</Sub> = qvB sin θ</span>: moving charges only; no work.</>, at: 6},
		{content: <>Opposed forces balance when qE = qvB: <span style={{color: TEAL.ink}}>v = E/B</span>.</>, at: 10},
		{content: <>Faster: F<Sub>B</Sub> wins. Slower: F<Sub>E</Sub> wins.</>, at: 14},
		{content: <>E/B is the same for any charge or mass.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span style={{color: TEAL.ink}}>v = E/B.</span>} sub={<>Fast follows F<Sub>B</Sub>; slow follows F<Sub>E</Sub>.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
