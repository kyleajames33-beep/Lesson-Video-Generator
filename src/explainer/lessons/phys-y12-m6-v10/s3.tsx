// Scenes 9 to 14: two attempts with answer-free pictures and brief feedback, the handoff (the bench: the north pole
// pushed in, two possible current directions round the coil's near end; its last frame is exported as
// `M6V10FinalFrame` for v11), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {CrossRegion} from '../../physics/electromagnetism/plates';
import {Rod} from '../../physics/electromagnetism/bench';
import {CoilTurns, CurlArrow, Rails, ResistorSymbol} from '../../physics/electromagnetism/induction';
import {A1, A2, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {AMBER, AX, Bench, FIELD1, Lbl, NAVY, ROSE, Shrunk, T, U0, arrowTagAt, fx, sci} from './parts';

// ---------- attempts ----------
const Q1: React.FC = () => <>A coil of 50 turns is in a magnetic field. The magnetic flux through each turn increases uniformly from 2.0 × 10⁻³ Wb to 6.0 × 10⁻³ Wb in 0.10 s and then remains constant. (a) Calculate the magnitude of the average induced emf while the flux is increasing. (b) State the induced emf once the flux is constant, and explain your answer.</>;
const Q2: React.FC = () => <>A metal rod of length 0.25 m slides at a constant 4.0 m s⁻¹ along two parallel conducting rails that are joined at one end. A uniform magnetic field of 0.30 T acts perpendicular to the plane of the rails. (a) Calculate the magnitude of the induced emf. (b) The rod is brought to rest. State the induced emf and explain your answer.</>;

/** Attempt 1's picture: the 50-turn coil with field lines through it and a flux-time sketch from the question's values. */
const Sketch1: React.FC<{tri?: number}> = ({tri = 0}) => {
	const X = (t: number) => 140 + t * 3600, Y = (p: number) => 520 - p * 45000;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<CoilTurns x1={250} x2={430} cy={130} r={95} n={7} half="back" />
			{[60, 100, 140, 180, 220].map(y => <Arrow2 key={y} from={[120, y - 20]} to={[580, y - 20]} color={FIELD1} width={4} head={16} />)}
			<CoilTurns x1={250} x2={430} cy={130} r={95} n={7} half="front" />
			<T x={340} y={265} size={30} color={NAVY.ink} anchor="middle">N = 50</T>
			<line x1={140} y1={540} x2={640} y2={540} stroke={INK} strokeWidth={3} />
			<line x1={140} y1={540} x2={140} y2={290} stroke={INK} strokeWidth={3} />
			<polyline points={`${X(0)},${Y(2e-3)} ${X(0.1)},${Y(6e-3)} ${X(0.14)},${Y(6e-3)}`} fill="none" stroke="#2f3d4c" strokeWidth={6} />
			<line x1={X(0.1)} y1={Y(6e-3)} x2={X(0.1)} y2={540} stroke="#cfc6b4" strokeWidth={2} strokeDasharray="6 6" />
			{tri > 0 ? <path d={`M${X(0)},${Y(2e-3)} L${X(0.1)},${Y(2e-3)} L${X(0.1)},${Y(6e-3)}`} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="10 7" opacity={tri} /> : null}
			<T x={130} y={Y(2e-3) + 10} size={30} anchor="end">2.0 × 10⁻³</T>
			<T x={130} y={Y(6e-3) + 10} size={30} anchor="end">6.0 × 10⁻³</T>
			<T x={150} y={300} size={30} color="#2f3d4c">Φ (Wb)</T>
			<T x={X(0.1)} y={580} size={30} anchor="middle">0.10 s</T>
			<T x={650} y={530} size={30} anchor="end">t</T>
		</svg>
	);
};
/** Attempt 2's picture: the rails from above, crosses, the rod and its velocity. */
const RodPicture: React.FC<{strip?: number; stopped?: boolean}> = ({strip = 0, stopped = false}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<CrossRegion x={20} y={60} w={640} h={440} step={70} />
		<Rails x1={90} x2={640} y1={170} y2={390} rodX={380} shade={strip > 0 ? 0.6 : 0}>
			<ResistorSymbol x={90} y={280} vertical len={60} />
		</Rails>
		{strip > 0 ? <rect x={380} y={170} width={160} height={220} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="10 7" opacity={strip} /> : null}
		<Rod cx={380} cy={280} len={300} deg={90} />
		{!stopped ? <Arrow2 from={[400, 120]} to={[520, 120]} color={AMBER.stroke} width={8} head={24} /> : null}
		{!stopped ? <T x={460} y={100} size={32} color={AMBER.ink} anchor="middle">v</T> : null}
		<T x={30} y={545} size={32} color={FIELD1}>B into the page</T>
	</svg>
);
export const S09: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={32} marks={3} picture={<Sketch1 />}><Q1 /></QuestionScene></Accent>;
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={32} marks={3} picture={<RodPicture />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 400, scale = 0.92}) => <div style={{position: 'absolute', left: 1250, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const times = cue(id, 'Times fifty turns'), v = cue(id, 'two point zero volts'), once = cue(id, 'Once the flux is constant'), zero = cue(id, 'so the emf is zero'), slip = cue(id, 'The classic slip'), needs = cap(id, cue(id, "Faraday's law needs"));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={360} givens={<>N = 50, Φ: 2.0 × 10⁻³ → 6.0 × 10⁻³ Wb, Δt = 0.10 s</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 450, display: 'flex', flexDirection: 'column', gap: 12, width: 1140}}>
				<Row at={6} ageAt={times} size={44} oldSize={36}>ΔΦ = 6.0 × 10⁻³ − 2.0 × 10⁻³ = {sci(A1.d, 1)} Wb</Row>
				<Row at={times} ageAt={once} size={44} oldSize={36}>(a) |ε| = 50 × {sci(A1.d, 1)} / 0.10 = <AnswerBox at={v}>{fx(A1.emf, 1)} V</AnswerBox></Row>
				<Row at={once} size={44}>(b) ΔΦ = 0 → <AnswerBox at={zero}>ε = 0</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={770} at={slip} crossAt={needs} size={32} caption="use ΔΦ, not Φ">ε = 50 × 6.0 × 10⁻³ / 0.10 = {fx(A1.slip, 1)} V</CrossedChip>
			<HandTag x={1290} y={930} text="constant: no change" at={zero + 6} size={32} color={ROSE.ink} />
			<Picture><Sketch1 tri={prog(f, 10, 20)} /></Picture>
		</>
	);
};

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const so = cue(id, 'So the flux changes'), v = cue(id, 'zero point three zero volts'), once = cue(id, 'Once the rod stops'), zero = cue(id, 'so the emf is zero'), slip = cue(id, 'The slip is thinking'), alone = cap(id, cue(id, 'A field alone'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={360} givens={<>L = 0.25 m, v = 4.0 m s⁻¹, B = 0.30 T</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 450, display: 'flex', flexDirection: 'column', gap: 12, width: 1140}}>
				<Row at={6} ageAt={so} size={44} oldSize={36}>area per second = 0.25 × 4.0 = {fx(A2.rate, 1)} m² s⁻¹</Row>
				<Row at={so} ageAt={once} size={44} oldSize={36}>(a) ε = ΔΦ/Δt = 0.30 × 1.0 = <AnswerBox at={v}>{fx(A2.emf, 2)} V</AnswerBox></Row>
				<Row at={once} size={44}>(b) A constant → ΔΦ = 0 → <AnswerBox at={zero}>ε = 0</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={770} at={slip} crossAt={alone} size={32} caption="no change in flux, no emf">ε still 0.30 V (field still there)</CrossedChip>
			<Picture><RodPicture strip={prog(f, 10, 20) * (1 - prog(f, once, 12))} stopped={f >= once} /></Picture>
		</>
	);
};

// ---------- 13. handoff: which way does the current flow? ----------
const UF = -24;
const curlAt = (u: number) => AX.along(u);
export const HandoffBoard: React.FC<{uN?: number; needle?: number; arrow?: number; oneAt?: number; otherAt?: number; energyAt?: number; qAt?: number; tagAt?: number; tagOut?: number; headSwap?: number}> = ({uN = UF, needle = 20, arrow = 1, oneAt = -60, otherAt = -60, energyAt = -60, qAt = -60, tagAt = 1e9, tagOut = 1e9, headSwap = -60}) => {
	const f = useCurrentFrame();
	const c1 = curlAt(70), c2 = curlAt(170);
	const tag = arrowTagAt(uN);
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<Bench uN={uN} needle={needle} arrow={arrow} />
				<CurlArrow cx={c1[0]} cy={c1[1]} rx={26} ry={AX.r * 1.45} up={false} color={ROSE.stroke} deg={AX.deg} opacity={prog(f, oneAt, 12)} />
				<CurlArrow cx={c2[0]} cy={c2[1]} rx={26} ry={AX.r * 1.45} up color={ROSE.stroke} deg={AX.deg} opacity={prog(f, otherAt, 12)} />
			</FrameSvg>
			<Lbl x={c1[0] - 10} y={c1[1] - AX.r * 1.45 - 24} at={oneAt} color={ROSE.ink} size={44} anchor="middle">?</Lbl>
			<Lbl x={c2[0] - 10} y={c2[1] - AX.r * 1.45 - 24} at={otherAt} color={ROSE.ink} size={44} anchor="middle">?</Lbl>
			<Lbl x={(c1[0] + c2[0]) / 2} y={c1[1] - 170} at={qAt} color={INK} size={110} anchor="middle">?</Lbl>
			<HandTag x={tag[0]} y={tag[1]} text="N pushed in" at={tagAt} out={tagOut} size={38} color={AMBER.ink} />
			<Chip x={1180} y={250} at={energyAt} size={34} w={420}>energy is conserved</Chip>
			<Chip x={96} y={890} at={qAt} size={30} w={1728} color={INK} border={INK}>Next: why does the induced current oppose the flux change?</Chip>
		</>
	);
};
/** v10's final frame for v11 (the north pole pushed towards the coil, two possible current directions, "?"). */
export const M6V10FinalFrame: React.FC = () => <HandoffBoard />;
export const S13: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const which = cue(id, 'But which way'), push = cue(id, 'Push the north pole in'), one = cue(id, 'one way'), other = cue(id, 'the other way'), cons = cue(id, 'conservation of energy'), q = cap(id, cue(id, 'Which one'));
	const uN = f < push ? U0 : U0 + (UF - U0) * Math.min(1, (f - push) / (dur(id) - 1 - push));
	const needle = 20 * prog(f, push, 14);
	return <HandoffBoard uN={uN} needle={needle} arrow={prog(f, push, 10)} oneAt={one} otherAt={other} energyAt={cons} qAt={q} tagAt={push + 6} tagOut={cons} headSwap={which} />;
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const notes = [
		{content: <>emf: energy per coulomb (V); current needs a closed loop.</>, at: 2},
		{content: <>Flux linkage = <span style={{color: NAVY.ink}}>NΦ</span> (Φ through one turn).</>, at: 6},
		{content: <><span style={{color: ROSE.ink}}>ε = −N ΔΦ/Δt</span>; 1 Wb s⁻¹ = 1 V.</>, at: 10},
		{content: <>NΦ-t graph: emf from the gradient, not the height.</>, at: 14},
		{content: <>Change B, A or θ (magnet, current, rod, turning).</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>No change, no emf.</>} sub={<>Faster change, bigger emf.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
