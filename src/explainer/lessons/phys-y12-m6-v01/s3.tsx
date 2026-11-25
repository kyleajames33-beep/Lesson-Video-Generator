// Scenes 11 to 16: two attempts with answer-free pictures and brief feedback (navy givens strips, one crossed slip
// each), the handoff (an electron at the entrance of the plates with its velocity across and the push up, beside a
// ball's horizontal-launch path off a cliff; its last frame is exported as `M6V01FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, Row, Sub, Cliff} from '../../physics/projectile/board';
import {FieldLines, OilDrop, Particle, PlatePair} from '../../physics/electromagnetism/plates';
import type {PG, SupplyAt} from '../../physics/electromagnetism/plates';
import {A1, A2, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cue, hold} from './common';
import {AMBER, BLUE, CardRect, Lbl, NAVY, Shrunk, Stage, T, TEAL, VIOLET, VecArrow, sci} from './parts';
import {cap} from './s1';

// ---------- attempts ----------
const Q1: React.FC = () => <>Two parallel plates are 2.5 cm apart and connected to a 150 V supply. A proton is released from rest next to the positive plate. (a) Calculate the electric field strength between the plates. (b) Calculate the magnitude of the proton's acceleration and state its direction. (m<Sub>p</Sub> = 1.673 × 10⁻²⁷ kg, e = 1.602 × 10⁻¹⁹ C)</>;
const Q2: React.FC = () => <>An oil drop of mass 1.6 × 10⁻¹⁴ kg carries a charge of −3.2 × 10⁻¹⁹ C. It is between two horizontal parallel plates 16 mm apart. (a) Calculate the potential difference needed to hold the drop stationary. (b) State which plate must be positive. Justify your answer. (g = 9.8 m s⁻²)</>;

const G11: PG = {x1: 420, x2: 650, yTop: 160, yBot: 340};
const S11sup: SupplyAt = {x: 20, y: 330, w: 300};
/** Attempt 1's picture: the supply at 150 V wired to two plain plates, the gap bracket, the proton by the top plate. */
const SupplyPicture: React.FC<{answer?: number}> = ({answer = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<Stage g={G11} sup={S11sup} reading="150 V" top={answer > 0 ? '+' : ''} bot={answer > 0 ? '−' : ''} linesOpacity={answer} signsOpacity={answer} step={80} />
		<Bracket x1={630} y1={G11.yTop} x2={630} y2={G11.yBot} color={NAVY.stroke} label="2.5 cm" size={32} lx={618} anchor="end" />
		<Particle cx={455} cy={G11.yTop + 20} sign="+" r={15} />
		<T x={478} y={G11.yTop + 32} size={30}>proton</T>
		<T x={535} y={G11.yTop - 34} size={30} anchor="middle" color={INK}>positive plate</T>
		{answer > 0 ? <g opacity={answer}><VecArrow x={455} y={G11.yTop + 40} dx={0} dy={110} color={VIOLET.stroke} width={7} head={20} /><T x={470} y={G11.yTop + 130} size={30} color={VIOLET.ink}>a</T></g> : null}
	</svg>
);
const G13: PG = {x1: 120, x2: 600, yTop: 170, yBot: 410};
/** Attempt 2's picture: the painted oil drop between two plain plates, the gap bracket only. */
const DropPicture: React.FC<{answer?: number; arrows?: number}> = ({answer = 0, arrows = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<FieldLines g={G13} step={110} opacity={answer} />
		<PlatePair g={G13} top={answer > 0 ? '+' : ''} bot={answer > 0 ? '−' : ''} signsOpacity={answer} />
		<OilDrop cx={330} cy={290} d={80} />
		<T x={330} y={364} size={32} anchor="middle">oil drop</T>
		<Bracket x1={580} y1={G13.yTop} x2={580} y2={G13.yBot} color={NAVY.stroke} label="16 mm" size={32} lx={566} anchor="end" />
		{arrows > 0 ? <g opacity={arrows}>
			<VecArrow x={330} y={246} dx={0} dy={-60} color={AMBER.stroke} width={7} head={20} label="|q|E" lx={250} ly={210} size={30} labelColor={AMBER.ink} anchor="end" />
			<VecArrow x={330} y={334} dx={0} dy={60} color={AMBER.stroke} width={7} head={20} label="mg" lx={250} ly={378} size={30} labelColor={AMBER.ink} anchor="end" />
		</g> : null}
	</svg>
);
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<SupplyPicture />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<DropPicture />}><Q2 /></QuestionScene></Accent>;

const Picture: React.FC<{children: React.ReactNode}> = ({children}) => <div style={{position: 'absolute', left: 1220, top: 320, transform: 'scale(0.9)', transformOrigin: 'top left'}}>{children}</div>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const start = cue(id, 'E equals V over d'), six = cue(id, 'is six point zero'), then = cue(id, 'Then q E over'), gives = cue(id, 'gives an acceleration of'), towards = cue(id, 'towards the negative plate'), slip = cue(id, 'The classic slip');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>V = 150 V | d = 2.5 cm = 0.025 m | e = 1.602 × 10⁻¹⁹ C | m<Sub>p</Sub> = 1.673 × 10⁻²⁷ kg</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 8, width: 1110}}>
				<Row at={start} ageAt={then} size={44} oldSize={34}>(a) E = V/d = 150 / 0.025</Row>
				<Row at={six} size={48}>&nbsp;&nbsp;&nbsp;= <AnswerBox at={six + 16}><span style={{color: BLUE.ink}}>{sci(A1.E, 1)} V m⁻¹</span></AnswerBox></Row>
				<Row at={then} ageAt={gives} size={44} oldSize={34}>(b) F = qE = {sci(A1.F)} N</Row>
				<Row at={gives} size={44} style={{whiteSpace: 'normal'}}>a = F/m = <AnswerBox at={towards}><span style={{color: VIOLET.ink}}>{sci(A1.a, 1)} m s⁻², towards the negative plate</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={850} at={slip} crossAt={cap(id, slip + 24)} size={32} caption="cm → m">E = 150/2.5 = {A1.slip} V m⁻¹</CrossedChip>
			<Picture><SupplyPicture answer={prog(f, gives, 16)} /></Picture>
			<HandTag x={1560} y={690} text="+ : with E" at={towards + 10} size={30} color={VIOLET.ink} />
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const holdStill = cue(id, 'To hold still'), mgq = cue(id, 'so E equals m g over'), then = cue(id, 'Then V equals E d'), neg = cue(id, 'The drop is negative'), top = cue(id, 'and the top plate must be'), slip = cue(id, 'The classic slip');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={320} givens={<>m = 1.6 × 10⁻¹⁴ kg | q = −3.2 × 10⁻¹⁹ C | d = 16 mm = 0.016 m | g = 9.8 m s⁻²</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 8, width: 1110}}>
				<Row at={holdStill} ageAt={then} size={44} oldSize={34}>(a) |q|E = mg → E = mg/|q|</Row>
				<Row at={mgq} ageAt={then} size={38} oldSize={32}>&nbsp;&nbsp;&nbsp;= (1.6 × 10⁻¹⁴ × 9.8)/(3.2 × 10⁻¹⁹) = <span style={{color: BLUE.ink}}>{sci(A2.E, 1)} V m⁻¹</span></Row>
				<Row at={then} size={46}>V = Ed = {sci(A2.E, 1)} × 0.016 = <AnswerBox at={then + 30}><span>{sci(A2.V, 1)} V</span></AnswerBox></Row>
				<Row at={neg} size={36} style={{whiteSpace: 'normal'}}>(b) − charge needs a push up, so E points down</Row>
				<Row at={top} size={46}><AnswerBox at={top + 10}><span>top plate +</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={866} at={slip} crossAt={cap(id, slip + 24)} size={30} caption="that's the push, not E">E up, bottom plate +</CrossedChip>
			<Picture><DropPicture answer={prog(f, neg, 16)} arrows={prog(f, neg + 20, 16)} /></Picture>
			<HandTag x={1240} y={760} text="− charge: force against E" at={neg + 30} size={30} color={AMBER.ink} />
		</>
	);
};

// ---------- 15. next: firing the electron in sideways ----------
export const G15: PG = {x1: 740, x2: 1640, yTop: 360, yBot: 720};
export const INSET = {x: 96, y: 560, w: 470, h: 300};
/** The exam-style cliff inset: a ball launched sideways from the edge and its dashed path. `flip` (0 to 1) turns
 * the path upside down about the launch point (the next lesson's hook). */
export const CliffInset: React.FC<{opacity?: number; flip?: number; label?: boolean}> = ({opacity = 1, flip = 0, label = true}) => {
	const bx = INSET.x + 160, by = INSET.y + 92;
	const path = Array.from({length: 31}, (_, i) => { const x = bx + (i / 30) * 270; return `${i ? 'L' : 'M'}${x.toFixed(1)},${(by + ((x - bx) / 270) ** 2 * 170).toFixed(1)}`; }).join(' ');
	return (
		<g opacity={opacity}>
			<CardRect x={INSET.x} y={INSET.y} w={INSET.w} h={INSET.h} />
			<Cliff left={INSET.x + 20} edgeX={bx} topY={by + 14} baseY={INSET.y + INSET.h - 24} right={INSET.x + INSET.w - 20} />
			<g transform={`translate(0 ${by}) scale(1 ${1 - 1.5 * flip}) translate(0 ${-by})`}><path d={path} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="10 8" /></g>
			<circle cx={bx} cy={by} r={12} fill="#cfc6b4" stroke={INK} strokeWidth={3} />
			{label ? <text opacity={1 - flip} x={INSET.x + INSET.w / 2} y={INSET.y + 48} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: INK} as React.CSSProperties}>ball thrown sideways off a cliff</text> : null}
		</g>
	);
};
export const HandoffBoard: React.FC<{recapAt?: number; recapOut?: number; fireAt?: number; acrossAt?: number; feelsAt?: number; cliffAt?: number; chipAt?: number; tagsOut?: number; headSwap?: number}> = ({recapAt = 1e9, recapOut = 1e9, fireAt = -60, acrossAt = -60, feelsAt = -60, cliffAt = -60, chipAt = -60, tagsOut = -30, headSwap = -60}) => {
	const f = useCurrentFrame();
	const mid = (G15.yTop + G15.yBot) / 2;
	const slide = prog(f, fireAt, 40);
	const ex = 520 + (G15.x1 - 520) * slide;
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<FieldLines g={G15} step={110} />
				<PlatePair g={G15} />
				{f >= fireAt ? <g opacity={prog(f, fireAt, 10)}>
					<Particle cx={ex} cy={mid} sign="−" r={26} />
					<VecArrow x={ex + 32} y={mid} dx={130} dy={0} color={TEAL.stroke} width={8} head={22} />
				</g> : null}
				{f >= acrossAt ? <VecArrow x={ex} y={mid - 32} dx={0} dy={-100} color={AMBER.stroke} width={7} head={20} at={acrossAt} /> : null}
				{f >= cliffAt ? <CliffInset opacity={prog(f, cliffAt, 14)} /> : null}
			</FrameSvg>
			<Lbl x={ex + 170} y={mid + 12} at={fireAt + 20} color={TEAL.ink} size={36}>v</Lbl>
			<Lbl x={ex + 20} y={mid - 110} at={acrossAt} color={AMBER.ink} size={36}>F</Lbl>
			<HandTag x={ex + 40} y={mid + 70} text="keeps going across" at={acrossAt + 10} out={tagsOut} size={30} color={TEAL.ink} />
			<HandTag x={ex + 40} y={mid - 150} text="steady push up" at={feelsAt + 10} out={tagsOut} size={30} color={AMBER.ink} />
			<div style={{position: 'absolute', left: 96, top: 200, display: 'flex', flexDirection: 'column', gap: 14, opacity: 1 - prog(f, recapOut, 16)}}>
				<Chip x={0} y={0} at={recapAt} size={34} w={600} border={BLUE.stroke} color={BLUE.ink}>V and d set the field: E = V/d</Chip>
				<Chip x={0} y={90} at={recapAt + 10} size={34} w={600} border={AMBER.stroke} color={AMBER.ink}>F = qE: the sign sets the direction</Chip>
				<Chip x={0} y={180} at={recapAt + 20} size={34} w={600} border={VIOLET.stroke} color={VIOLET.ink}>a = qE/m: constant</Chip>
			</div>
			<Chip x={96} y={890} at={chipAt} size={30} w={1728} color={INK} border={INK}>Next: why is a charged particle's path between plates like a projectile?</Chip>
		</>
	);
};
/** v01's final frame (the electron at the entrance, the cliff inset, the next question). */
export const M6V01FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const so = cue(id, 'So the voltage and the gap'), fire = cue(id, "Now let's fire"), feels = cue(id, 'It still feels'), across = cue(id, 'while it keeps moving'), why = cue(id, 'So why does its path');
	return <HandoffBoard recapAt={so} recapOut={fire} fireAt={fire} acrossAt={feels} feelsAt={feels} cliffAt={why} chipAt={why + 10} tagsOut={cap(id, Math.max(across + 40, why + 30))} headSwap={fire} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>Large plates, middle region: <span style={{color: BLUE.ink}}>uniform E = V/d</span>.</>, at: 2},
		{content: <>E points + to −; V m⁻¹ = N C⁻¹.</>, at: 6},
		{content: <><span style={{color: AMBER.ink}}>F = qE</span>: + along E, − against E.</>, at: 10},
		{content: <><span style={{color: VIOLET.ink}}>a = qE/m = qV/(md)</span>, constant.</>, at: 14},
		{content: <>Electrons and protons: a ≫ g. Oil drop: |q|E = mg.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span><span style={{color: BLUE.ink}}>V/d gives E; </span><span style={{color: AMBER.ink}}>× q gives F; </span><span style={{color: VIOLET.ink}}>÷ m gives a.</span></span>} sub="Field arrows show the push on a + charge."
					picture={<svg width={584} height={220} viewBox="0 0 584 220">
						<rect x={90} y={20} width={400} height={14} fill="#d9d2c4" stroke={INK} strokeWidth={3} />
						<rect x={90} y={186} width={400} height={14} fill="#d9d2c4" stroke={INK} strokeWidth={3} />
						<T x={76} y={36} size={28} anchor="end">+</T><T x={76} y={202} size={28} anchor="end">−</T>
						{[150, 430].map(x => <line key={x} x1={x} y1={40} x2={x} y2={180} stroke={BLUE.stroke} strokeWidth={4} />)}
						<Particle cx={240} cy={110} sign="+" r={18} /><VecArrow x={240} y={132} dx={0} dy={40} color={AMBER.stroke} width={5} head={14} />
						<Particle cx={340} cy={110} sign="−" r={18} /><VecArrow x={340} y={88} dx={0} dy={-40} color={AMBER.stroke} width={5} head={14} />
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
