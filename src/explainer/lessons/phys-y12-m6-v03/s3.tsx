// Scenes 11 to 16: two attempts with answer-free pictures and brief feedback, the handoff (the beam from the gun into
// a region of magnetic field crosses, bending on a circular arc run on the field motion engine while its speed and
// its K bar stay the same; its last frame is exported as `M6V03FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {CrossRegion, Gun, Particle, gunPts} from '../../physics/electromagnetism/plates';
import type {SupplyAt} from '../../physics/electromagnetism/plates';
import {runMotion, stateAt, trailTo} from '../../sims/field-motion';
import {A1, A2, ACCENT, GUN, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, hold} from './common';
import {CardRect, GREY, GunRig, Lbl, ORANGE, Shrunk, T, TEAL, fx, sci} from './parts';

// ---------- attempts ----------
const Q1: React.FC = () => <>Electrons are accelerated from rest through a potential difference of 2.0 kV in an evacuated tube. (a) State the kinetic energy gained by each electron in electronvolts and in joules. (b) Calculate the final speed of the electrons. (m<Sub>e</Sub> = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C)</>;
const Q2: React.FC = () => <>A proton and an alpha particle are each accelerated from rest through the same potential difference. The alpha particle has charge +2e and mass 6.64 × 10⁻²⁷ kg; the proton has charge +e and mass 1.673 × 10⁻²⁷ kg. (a) Which particle gains more kinetic energy? Explain. (b) Which particle has the greater final speed? Justify your answer.</>;

const SUPA: SupplyAt = {x: 120, y: 320, w: 400};
/** Attempt 1's picture: the supply at 2.0 kV wired to a plain exam-style gun (no beam, no energy, no graph). */
const GunPicture: React.FC<{answer?: number; reading?: string}> = ({answer = 0, reading = '2.0 kV'}) => {
	const f = useCurrentFrame();
	const g = gunPts(380, 200, 140, 90);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<GunRig x={380} y={200} sup={SUPA} reading={reading} />
			<T x={g.cathode[0]} y={110} size={30} anchor="middle">cathode</T>
			<T x={g.anodeTop[0] + 10} y={110} size={30} anchor="middle">anode</T>
			{answer > 0 ? <g opacity={answer}>
				<line x1={g.exit[0] + 10} y1={200} x2={670} y2={200} stroke={TEAL.stroke} strokeWidth={4} />
				{[0, 1, 2].map(i => <circle key={i} cx={g.exit[0] + 30 + ((i * 50 + f * 6) % 150)} cy={200} r={7} fill={TEAL.stroke} />)}
				<rect x={g.exit[0] + 20} y={240} width={150} height={30} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} />
				<T x={g.exit[0] + 20} y={306} size={30} color={ORANGE.ink}>ΔK</T>
			</g> : null}
		</svg>
	);
};
/** Attempt 2's picture: two identical exam-style guns marked "same V", a +e disc and a larger +2e disc at their starts. */
const LanesPicture: React.FC<{bars?: number}> = ({bars = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		{[0, 1].map(i => {
			const y = 120 + i * 230, isA = i === 1;
			return (
				<g key={i}>
					<CardRect x={0} y={y - 90} w={678} h={200} />
					<Gun x={60} y={y} h={110} gap={80} />
					<Particle cx={40} cy={y} sign="+" r={isA ? 22 : 15} />
					<T x={30} y={y - 50} size={30} anchor="middle">{isA ? '+2e' : '+e'}</T>
					<T x={180} y={y + 84} size={28} color={GREY.ink}>same V</T>
					<T x={260} y={y - 50} size={30}>{isA ? 'alpha particle' : 'proton'}</T>
					{bars > 0 ? <g opacity={bars}>
						<rect x={330} y={y - 24} width={(isA ? 2 : 1) * 140} height={26} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} />
						<rect x={330} y={y + 14} width={(isA ? 1 : Math.SQRT2) * 140} height={26} fill="#d6eeee" stroke={TEAL.stroke} strokeWidth={3} />
						<T x={330 + (isA ? 2 : 1) * 140 + 10} y={y - 2} size={28} color={ORANGE.ink}>K</T>
						<T x={330 + (isA ? 1 : Math.SQRT2) * 140 + 10} y={y + 36} size={28} color={TEAL.ink}>v</T>
					</g> : null}
				</g>
			);
		})}
	</svg>
);
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<GunPicture />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={32} marks={3} picture={<LanesPicture />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number}> = ({children, top = 330}) => <div style={{position: 'absolute', left: 1230, top, transform: 'scale(0.88)', transformOrigin: 'top left'}}>{children}</div>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const ke = cue(id, 'The kinetic energy is two thousand'), then = cue(id, 'Then v is the square root'), slip = cue(id, 'The classic slip');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>from rest | |q| = e | V = 2.0 kV = 2000 V | m<Sub>e</Sub> = 9.109 × 10⁻³¹ kg</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 12, width: 1110}}>
				<Row at={ke} size={42} style={{whiteSpace: 'normal'}}>(a) gain ΔK = 2000 eV = 2000 × 1.602 × 10⁻¹⁹ = <AnswerBox at={ke + 50}><span style={{color: ORANGE.ink}}>{sci(A1.K)} J</span></AnswerBox></Row>
				<Row at={then} size={42} style={{whiteSpace: 'normal'}}>(b) v = √(2 × {sci(A1.K, 3)} / 9.109 × 10⁻³¹) = <AnswerBox at={then + 40}><span style={{color: TEAL.ink}}>{sci(A1.v)} m s⁻¹</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={820} at={slip} crossAt={cap(id, slip + 30)} size={32} caption="that's v²">v = {sci(A1.v2, 1)} m s⁻¹</CrossedChip>
			<Picture><GunPicture reading="2000 V" answer={prog(f, ke, 16)} /></Picture>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const ke = cue(id, 'The kinetic energy is q V'), four = cue(id, "But it's about four times"), faster = cue(id, 'The proton is faster'), slip = cue(id, 'The classic slip');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={356} givens={<>same V | α: +2e, 6.64 × 10⁻²⁷ kg | p: +e, 1.673 × 10⁻²⁷ kg</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 450, display: 'flex', flexDirection: 'column', gap: 12, width: 1110}}>
				<Row at={ke} size={44}>(a) K = |q|V: <AnswerBox at={ke + 30}><span style={{color: ORANGE.ink}}>K<Sub>α</Sub> = 2eV = 2K<Sub>p</Sub></span></AnswerBox></Row>
				<Row at={four} size={36} style={{whiteSpace: 'normal'}}>(b) v = √(2|q|V/m): v<Sub>α</Sub>/v<Sub>p</Sub> = √((2e/m<Sub>α</Sub>)/(e/m<Sub>p</Sub>)) = √(2 × 1.673/6.64) = <span style={{color: TEAL.ink}}>{fx(A2.ratio, 2)}</span></Row>
				<Row at={faster} size={44}><AnswerBox at={faster + 10}><span style={{color: TEAL.ink}}>proton faster (v<Sub>p</Sub> ≈ {fx(A2.inverse, 2)} v<Sub>α</Sub>)</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={cap(id, slip + 30)} size={32} caption="K = |q|V: charge counts">same V → same K</CrossedChip>
			<Picture top={400}><LanesPicture bars={prog(f, ke + 20, 16)} /></Picture>
		</>
	);
};

// ---------- 15. next: a field that only steers ----------
const GUNH = {x: 200, y: 400};
const REG = {x: 760, y: 300, w: 620, h: 580};
const ANODE_X = GUNH.x + 34 + 90 + 26;
const R_ARC = 380, V_PX = 6;
/** The arc inside the field region: a magnetic run (into the page) for a negative charge, in screen units. */
const ARC = runMotion({field: {kind: 'magnetic', qOverM: -1, b: -V_PX / R_ARC}, start: {x: 0, y: 0, vx: V_PX, vy: 0}, duration: ((Math.PI / 2) * R_ARC) / V_PX * 0.9, steps: 1200});
export const HandoffBoard: React.FC<{beamAt?: number; bendAt?: number; readAt?: number; chipAt?: number; tagAt?: number; tagOut?: number; headSwap?: number}> = ({beamAt = -60, bendAt = -60, readAt = -60, chipAt = -60, tagAt = 1e9, tagOut = 1e9, headSwap = -60}) => {
	const f = useCurrentFrame();
	const straight = prog(f, beamAt, 30);
	const tArc = prog(f, bendAt, 60) * ARC.duration;
	const pts = tArc > 0 ? trailTo(ARC, tArc, 200).map(([x, y]) => [REG.x + x, GUNH.y - y]) : [];
	const end = stateAt(ARC, tArc);
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<CrossRegion x={REG.x} y={REG.y} w={REG.w} h={REG.h} step={80} />
				<Gun x={GUNH.x} y={GUNH.y} h={140} gap={90} />
				<line x1={ANODE_X} y1={GUNH.y} x2={ANODE_X + (REG.x - ANODE_X) * straight} y2={GUNH.y} stroke={TEAL.stroke} strokeWidth={6} />
				{pts.length > 1 ? <path d={pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')} fill="none" stroke={TEAL.stroke} strokeWidth={6} /> : null}
				{pts.length > 1 ? <Particle cx={REG.x + end.x} cy={GUNH.y - end.y} sign="−" r={16} /> : straight > 0 ? <Particle cx={ANODE_X + (REG.x - ANODE_X) * straight} cy={GUNH.y} sign="−" r={16} /> : null}
				<rect x={ANODE_X + 40} y={GUNH.y + 120} width={260} height={30} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} opacity={prog(f, readAt, 12)} />
			</FrameSvg>
			<Lbl x={GUNH.x + 17} y={GUNH.y - 100} color={GREY.ink} size={30} anchor="middle">0 V</Lbl>
			<Lbl x={ANODE_X - 13} y={GUNH.y - 100} color={GREY.ink} size={30} anchor="middle">+5000 V</Lbl>
			<Lbl x={REG.x + REG.w / 2} y={REG.y - 24} color={GREY.ink} size={32} anchor="middle">B into page</Lbl>
			<Lbl x={ANODE_X + 40} y={GUNH.y + 196} at={readAt} color={ORANGE.ink} size={28}>K: unchanged</Lbl>
			<Readouts x={1420} y={300} w={404} size={34} at={readAt} rows={[
				{label: 'entering', value: `${sci(GUN.v)} m s⁻¹`, color: TEAL.ink},
				{label: 'inside', value: `${sci(GUN.v)} m s⁻¹`, color: TEAL.ink},
			]} />
			<HandTag x={1440} y={490} text="same speed" at={tagAt} out={tagOut} size={32} color={TEAL.ink} />
			<Chip x={96} y={890} at={chipAt} size={30} w={1728} color={INK} border={INK}>Next: when does a magnetic field exert a force on a moving charge?</Chip>
		</>
	);
};
/** v03's final frame (the beam bending in the magnetic field at constant speed, the next question). */
export const M6V03FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const so = cue(id, 'So an electric field speeds'), aim = cue(id, 'Now aim our electron beam'), bends = cue(id, 'The beam bends'), speed = cue(id, "but its speed doesn't change"), when = cue(id, 'So when does a magnetic');
	return <HandoffBoard beamAt={so} bendAt={bends - 30} readAt={aim} chipAt={when} tagAt={speed + 10} tagOut={cap(id, when + 30)} headSwap={aim} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <><span style={{color: ORANGE.ink}}>W = qEd</span> (d parallel to E) = qV: the gap cancels.</>, at: 2},
		{content: <>Signed: ΔU = qΔV; ΔK = −ΔU.</>, at: 6},
		{content: <>1 eV = 1.602 × 10⁻¹⁹ J.</>, at: 10},
		{content: <>From rest: ½mv² = |q|V, <span style={{color: TEAL.ink}}>v = √(2|q|V/m)</span>.</>, at: 14},
		{content: <>Sideways moves: no work. K<Sub>f</Sub> = K<Sub>i</Sub> ± |q|V.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span><span style={{color: ORANGE.ink}}>Energy goes with V.</span> <span style={{color: TEAL.ink}}>Speed goes with root V.</span></span>} sub="Not the gap, and not the path." />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
