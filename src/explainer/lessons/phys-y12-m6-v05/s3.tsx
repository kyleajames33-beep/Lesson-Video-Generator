// Scenes 12 to 17: two attempts with answer-free pictures and brief feedback, the handoff (crossed fields between
// plates, an electron at the entrance with a dashed F_E up and a dashed F_B down, a slit barrier; its last frame is
// exported as `M6V05FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {CrossRegion, Particle} from '../../physics/electromagnetism/plates';
import type {PG} from '../../physics/electromagnetism/plates';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {CrossedStage} from '../../physics/electromagnetism/crossed';
import {A1, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, hold} from './common';
import {AMBER, GREY, Lbl, NAVY, ROSE, Shrunk, T, TEAL, VF, fx, sci} from './parts';

// ---------- attempts ----------
const Q1: React.FC = () => <>A proton travels at 3.0 × 10⁶ m s⁻¹ perpendicular to a uniform magnetic field of strength 0.25 T. (a) Calculate the radius of the proton's circular path. (b) Calculate the period of its motion. (m<Sub>p</Sub> = 1.673 × 10⁻²⁷ kg, e = 1.602 × 10⁻¹⁹ C)</>;
const Q2: React.FC = () => <>The proton's speed is doubled while it remains in the same magnetic field, moving perpendicular to it. Describe and explain the effect on (a) the radius of its path and (b) its period.</>;

/** Attempt 1's picture: a cross grid with the proton and its velocity (no circle, no force, no timer). */
const ProtonPicture: React.FC<{circle?: number}> = ({circle = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<CrossRegion x={20} y={60} w={620} h={440} step={80} />
		{circle > 0 ? <g opacity={circle}>
			<circle cx={330} cy={250} r={170} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
			<line x1={330} y1={250} x2={330} y2={420} stroke={NAVY.stroke} strokeWidth={5} />
			<T x={345} y={350} size={32} color={NAVY.ink}>r</T>
		</g> : null}
		<Arrow2 from={[358, 420]} to={[520, 420]} color={TEAL.stroke} width={7} head={24} />
		<Particle cx={330} cy={420} sign="+" r={24} />
		<T x={400} y={470} size={30} color={TEAL.ink}>3.0 × 10⁶ m s⁻¹</T>
		<T x={20} y={40} size={30} color={GREY.ink}>B = 0.25 T, into the page</T>
	</svg>
);
/** Attempt 2's picture: attempt 1's circle with its launch velocity marked v → 2v (no second circle). */
const DoublePicture: React.FC<{both?: number; t?: number}> = ({both = 0, t = 0}) => {
	const L = {x: 90, y: 280}, r1 = 120, r2 = 240;
	const ang = t * 2 * Math.PI;
	const at = (r: number): [number, number] => [L.x + r - r * Math.cos(ang), L.y + r * Math.sin(ang)];
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<CrossRegion x={20} y={20} w={640} h={520} step={80} />
			<circle cx={L.x + r1} cy={L.y} r={r1} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
			{both > 0 ? <g opacity={both}>
				<circle cx={L.x + r2} cy={L.y} r={r2} fill="none" stroke={TEAL.stroke} strokeWidth={4} strokeDasharray="12 8" />
				<Particle cx={at(r1)[0]} cy={at(r1)[1]} sign="+" r={18} />
				<Particle cx={at(r2)[0]} cy={at(r2)[1]} sign="+" r={18} />
			</g> : null}
			<Arrow2 from={[L.x, L.y + 26]} to={[L.x, L.y + 150]} color={TEAL.stroke} width={7} head={24} />
			{both > 0 ? null : <Particle cx={L.x} cy={L.y} sign="+" r={22} />}
			<T x={L.x + 18} y={L.y + 190} size={32} color={TEAL.ink}>v → 2v</T>
			<T x={660} y={530} size={32} color={GREY.ink} anchor="end">same B, into the page</T>
		</svg>
	);
};
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={3} picture={<ProtonPicture />}><Q1 /></QuestionScene></Accent>;
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={2} picture={<DoublePicture />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 400, scale = 0.86}) => <div style={{position: 'absolute', left: 1240, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const r = cue(id, 'r equals m v over q B'), cm = cue(id, 'about twelve and a half centimetres'), per = cue(id, 'The period is two pi m'), secs = cue(id, 'ten to the minus seven seconds'), slip = cue(id, 'The classic slip');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={320} givens={<>proton: m<Sub>p</Sub> = 1.673 × 10⁻²⁷ kg, q = 1.602 × 10⁻¹⁹ C; v = 3.0 × 10⁶ m s⁻¹; B = 0.25 T</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 10, width: 1120}}>
				<Row at={r} ageAt={per} size={36} oldSize={30}>(a) r = mv/(qB) = (1.673 × 10⁻²⁷ × 3.0 × 10⁶)/(1.602 × 10⁻¹⁹ × 0.25)</Row>
				<Row at={cm} size={52}>&nbsp;&nbsp;= <AnswerBox at={cm + 12}><span style={{color: NAVY.ink}}>{fx(A1.r, 3)} m</span></AnswerBox></Row>
				<Row at={per} size={36}>(b) T = 2πm/(qB) = 2π × 1.673 × 10⁻²⁷/(1.602 × 10⁻¹⁹ × 0.25)</Row>
				<Row at={secs} size={52}>&nbsp;&nbsp;= <AnswerBox at={secs + 12}>{sci(A1.T, 2)} s</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={850} at={slip} crossAt={cap(id, slip + 40)} size={30} caption="proton's mass">m<Sub>e</Sub>: r = {sci(A1.slip, 1)} m</CrossedChip>
			<Picture><ProtonPicture circle={prog(f, cm, 16)} /></Picture>
		</>
	);
};

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const doubles = cue(id, 'is proportional to v'), stays = cue(id, 'The period stays the same'), twice = cue(id, 'The proton goes twice as far'), slip = cue(id, 'The classic slip');
	const t = prog(f, twice, 90, x => x);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>same B; v → 2v</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 14, width: 1120}}>
				<Row at={doubles} size={44}>(a) r = mv/(qB) ∝ v → <AnswerBox at={doubles + 12}><span style={{color: NAVY.ink}}>r doubles ({fx(A1.r2, 2)} m)</span></AnswerBox></Row>
				<Row at={stays} size={40}>(b) T = 2πm/(qB): no v → <AnswerBox at={stays + 12}>T unchanged ({sci(A1.T2, 2)} s)</AnswerBox></Row>
			</div>
			<HandTag x={140} y={640} text="twice as far, twice as fast" at={twice} size={34} color={INK} />
			<CrossedChip x={96} y={780} at={slip} crossAt={cap(id, slip + 40)} size={32} caption="T has no v in it">T halves</CrossedChip>
			<Picture top={390}><DoublePicture both={prog(f, doubles, 14)} t={t} /></Picture>
			<Readouts x={1240} y={880} w={540} size={30} at={twice} rows={[{label: 'lap timers', value: `${fx(A1.T * 1e7 * t, 2)} × 10⁻⁷ s, both`, color: INK}]} />
		</>
	);
};

// ---------- 16. next: two fields at once ----------
export const G16: PG = {x1: 420, x2: 1500, yTop: 330, yBot: 750};
export const BARRIER_X = 1620;
export const E16 = {x: 450, y: 540};
export const HandoffBoard: React.FC<{stageAt?: number; arrowsAt?: number; chipAt?: number; tagAt?: number; tagOut?: number; headSwap?: number}> = ({stageAt = -60, arrowsAt = -60, chipAt = -60, tagAt = 1e9, tagOut = 1e9, headSwap = -60}) => {
	const f = useCurrentFrame();
	const o = prog(f, stageAt, 14), a = prog(f, arrowsAt, 14);
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={o}>
					<CrossedStage g={G16} barrierX={BARRIER_X} />
					<VF x={E16.x} y={E16.y} ux={1} uy={0} sign="−" showF={false} mark={false} r={24} vLen={190} />
				</g>
				<g opacity={a}>
					<Arrow2 from={[E16.x, E16.y - 30]} to={[E16.x, E16.y - 150]} color={AMBER.stroke} width={6} head={24} dash="12 8" />
					<Arrow2 from={[E16.x, E16.y + 30]} to={[E16.x, E16.y + 150]} color={ROSE.stroke} width={6} head={24} dash="12 8" />
				</g>
			</FrameSvg>
			<Lbl x={E16.x + 24} y={E16.y - 120} at={arrowsAt} color={AMBER.ink} size={34}>F<Sub>E</Sub> ?</Lbl>
			<Lbl x={E16.x + 24} y={E16.y + 140} at={arrowsAt} color={ROSE.ink} size={34}>F<Sub>B</Sub> ?</Lbl>
			<Lbl x={E16.x + 200} y={E16.y + 12} at={stageAt} color={TEAL.ink} size={34}>v</Lbl>
			<Lbl x={G16.x2} y={250} at={stageAt} color={INK} size={32} anchor="end">E down, B into page</Lbl>
			<Lbl x={BARRIER_X + 13} y={G16.yBot + 90} at={stageAt} color={INK} size={28} anchor="middle">slit</Lbl>
			<HandTag x={E16.x + 140} y={E16.y - 90} text="push up?" at={tagAt} out={tagOut} size={32} color={AMBER.ink} />
			<HandTag x={E16.x + 140} y={E16.y + 100} text="push down?" at={tagAt + 10} out={tagOut} size={32} color={ROSE.ink} />
			<Chip x={96} y={890} at={chipAt} size={30} w={1728} color={INK} border={INK}>Next: how can crossed fields select one particle speed?</Chip>
		</>
	);
};
/** v05's final frame (crossed fields, the electron at the entrance with both forces unknown, the next question). */
export const M6V05FinalFrame: React.FC = () => <HandoffBoard />;
export const S16: React.FC = () => {
	const id = 'handoff';
	const so = cue(id, 'So an electric field can push'), both = cue(id, 'What if we use both at once'), how = cue(id, 'How can crossed fields');
	return <HandoffBoard stageAt={so} arrowsAt={both} chipAt={cap(id, how)} tagAt={both + 20} tagOut={cap(id, how + 10)} headSwap={both} />;
};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>F ⊥ v: no work, so <span style={{color: TEAL.ink}}>speed is constant</span>.</>, at: 2},
		{content: <>Perpendicular entry: a circle; qvB = mv²/r.</>, at: 6},
		{content: <><span style={{color: NAVY.ink}}>r = mv/(qB)</span>; opposite charges turn opposite ways.</>, at: 10},
		{content: <>T = 2πm/(qB): no v in it (v ≪ c).</>, at: 14},
		{content: <>Every circle needs a real force = mv²/r.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span>Magnetic force steers. <span style={{color: TEAL.ink}}>It never speeds.</span></span>} sub="r = mv/qB." />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
