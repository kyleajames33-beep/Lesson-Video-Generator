// Scenes 11 to 16: two attempts with brief feedback, the handoff (two circular orbits at r and 2r on the field
// motion engine, a violet U bar under each, an orange K bar and a total bar still unknown; its last frame is
// exported as `V21FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Row, Sub} from '../../physics/projectile/board';
import {stateAt} from '../../sims/field-motion';
import {A1, A2, ACCENT, HEAD_SIZE, HEAD_V22, RE, RUN_IN, RUN_OUT, R_IN, R_OUT, U, cue, dur, hold} from './common';
import {Earth, GREY, Lbl, NAVY, ORANGE, Satellite, Spacecraft, T, VIOLET, WellSection, sci, wellWall} from './parts';

// ---------- attempts ----------
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{m1?: number}> = ({m1}) => <>A 500 kg satellite moves from a circular orbit of radius 7.0 × 10⁶ m to a circular orbit of radius 9.0 × 10⁶ m around Earth. Calculate the <M at={m1}>change</M> in its gravitational potential energy. (G = 6.67 × 10⁻¹¹ N m² kg⁻², M<Sub>E</Sub> = 6.0 × 10²⁴ kg)</>;
const Q2: React.FC = () => <>The gravitational potential energy of a space probe changes from −6.0 × 10¹⁰ J to −4.0 × 10¹⁰ J. (a) Did the probe move closer to the planet or further from it? (b) Calculate the change in gravitational potential energy. (c) Explain why both values are negative.</>;
/** Attempt 1's picture: the painted Earth, two dashed circles (no radii written), the satellite on the inner one. */
const OrbitsPicture: React.FC = () => {
	const c = 300, cy = 280, k = 100 / RE;
	const r1 = 7.0e6 * k, r2 = 9.0e6 * k * 1.25;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<circle cx={c} cy={cy} r={r2} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
			<circle cx={c} cy={cy} r={r1 * 1.25} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
			<Earth cx={c} cy={cy} d={200} />
			<Satellite cx={c + r1 * 1.25 * Math.cos(-0.8)} cy={cy + r1 * 1.25 * Math.sin(-0.8)} w={44} rotate={-0.8 * 57.3 + 90} />
			<T x={20} y={540} size={28} color={GREY.ink} weight={700}>not to scale</T>
		</svg>
	);
};
const CraftPicture: React.FC = () => <svg width={678} height={560} style={{overflow: 'visible'}}><Spacecraft cx={339} cy={260} w={300} /></svg>;
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={2} picture={<OrbitsPicture />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<CraftPicture />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '8px 22px', ...DISPLAY(26, INK, 600), whiteSpace: 'normal', lineHeight: 1.24}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: NAVY.soft, borderRadius: 12, border: `3px solid ${NAVY.stroke}`, padding: '6px 20px', ...DISPLAY(30, NAVY.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);
const Picture: React.FC<{children: React.ReactNode}> = ({children}) => (
	<div style={{position: 'absolute', left: 1250, top: 300, transform: 'scale(0.85)', transformOrigin: 'top left'}}>{children}</div>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const use = cue(id, 'Use big G'), gmm = cue(id, 'Big G M m is'), bracket = cue(id, 'the bracket is'), so = cue(id, 'So the change'), plus = cue(id, 'plus six point three'), inc = cue(id, 'an increase'), slip = cue(id, 'The classic slip'), wrong = cue(id, 'subtracting the wrong');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={330} givens={<>m = 500 kg | r₁ = 7.0 × 10⁶ m, r₂ = 9.0 × 10⁶ m | G = 6.67 × 10⁻¹¹ N m² kg⁻² | M<Sub>E</Sub> = 6.0 × 10²⁴ kg</>}><Q1 m1={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={use} ageAt={so} size={44} oldSize={34}>ΔU = GMm (1/r₁ − 1/r₂)</Row>
				<Row at={gmm} ageAt={so} size={40} oldSize={32}>GMm = 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ × 500 = {sci(A1.gmm, 3)}</Row>
				<Row at={bracket} ageAt={so} size={40} oldSize={32}>1/r₁ − 1/r₂ = {sci(A1.i1, 4)} − {sci(A1.i2, 4)}</Row>
				<Row at={bracket + 20} ageAt={so} size={40} oldSize={32}>&nbsp;&nbsp;&nbsp;= {sci(A1.br, 3)} m⁻¹</Row>
				<Row at={so} size={52}>ΔU = <AnswerBox at={plus}><span>+{sci(A1.dU)} J</span></AnswerBox></Row>
				<Row at={inc} size={34}>an increase: it moved outwards</Row>
			</div>
			<CrossedChip x={96} y={870} at={slip} crossAt={wrong + 10} size={30} caption="outwards: U increases">ΔU = −{sci(A1.dU)} J</CrossedChip>
			<Picture><OrbitsPicture /></Picture>
		</>
	);
};

// ---------- 14. feedback 2 ----------
const MW = {cx: 300, y0: 110, halfW: 250, depth: 300, rMax: 12 * RE};
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const change = cue(id, 'The change is'), plus = cue(id, 'plus two point'), went = cue(id, 'U went up'), further = cue(id, 'further away'), both = cue(id, 'Both values'), zero = cue(id, 'zero is at'), slip = cue(id, 'The slip'), reading = cue(id, 'reading minus four');
	// The marker sits where U = -6.0e10 J on a scaled well (one unit of depth = 7.5e10 J) and climbs to -4.0e10 J.
	const depthJ = 7.5e10;
	const uNow = A2.u1 + (A2.u2 - A2.u1) * prog(f, went, 30);
	const rNow = (RE * depthJ) / -uNow;
	const Uw = (r: number) => (U(r) / U(RE)) * -depthJ;
	const [px, py] = wellWall(MW.cx, MW.y0, MW.halfW, MW.depth, Uw, MW.rMax, Math.max(RE, Math.min(MW.rMax, rNow)));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={340} givens={<>U changes from −6.0 × 10¹⁰ J to −4.0 × 10¹⁰ J</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 10, width: 1110}}>
				<Row at={change} size={44}>(b) ΔU = (−4.0 × 10¹⁰) − (−6.0 × 10¹⁰)</Row>
				<Row at={plus - 8} size={52}>&nbsp;&nbsp;&nbsp;= <AnswerBox at={plus}><span>+{sci(A2.dU, 1)} J</span></AnswerBox></Row>
				<Row at={went} size={40}>(a) U increased (towards 0): <span style={{opacity: prog(f, further, 10)}}>further away</span></Row>
				<Row at={both} size={40} style={{whiteSpace: 'normal'}}>(c) U = 0 at infinity; any finite r gives U &lt; 0</Row>
			</div>
			<HandTag x={1000} y={830} text="zero is at infinity" at={zero} size={30} color={VIOLET.ink} />
			<CrossedChip x={96} y={830} at={slip} crossAt={reading + 20} size={32} caption="−4 is greater than −6">−4 &lt; −6, so it moved closer</CrossedChip>
			<Picture>
				<svg width={620} height={520} style={{overflow: 'visible'}}>
					<WellSection cx={MW.cx} y0={MW.y0} halfW={MW.halfW} depth={MW.depth} U={Uw} rMax={MW.rMax} earthD={60} />
					<circle cx={px} cy={py} r={12} fill={INK} stroke={CARD} strokeWidth={3} />
					<T x={MW.cx} y={MW.y0 - 20} size={30} anchor="middle" color={INK}>U = 0 at infinity</T>
					<T x={px + 24} y={py + 10} size={32} color={VIOLET.ink}>{sci(uNow, 1)} J</T>
				</svg>
			</Picture>
		</>
	);
};

// ---------- 15. handoff ----------
const HO = {cx: 440, cy: 590, k: 170 / R_IN};
const LAP_IN = 200;
const ZERO_Y = 520;
const Bars: React.FC<{x: number; uDepth: number; label: string; uAt: number; kAt: number; totAt: number}> = ({x, uDepth, label, uAt, kAt, totAt}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<T x={x + 130} y={ZERO_Y - 180} size={34} anchor="middle" color={NAVY.ink}>{label}</T>
			<g opacity={prog(f, uAt, 12)}>
				<rect x={x} y={ZERO_Y} width={70} height={uDepth} fill={VIOLET.soft} stroke={VIOLET.stroke} strokeWidth={3} />
				<T x={x + 35} y={ZERO_Y + uDepth + 40} size={32} anchor="middle" color={VIOLET.ink}>U</T>
			</g>
			<g opacity={prog(f, kAt, 12)}>
				<rect x={x + 95} y={ZERO_Y - 110} width={70} height={110} fill="none" stroke={ORANGE.stroke} strokeWidth={4} strokeDasharray="10 7" />
				<T x={x + 130} y={ZERO_Y - 40} size={44} anchor="middle" color={ORANGE.ink}>?</T>
				<T x={x + 130} y={ZERO_Y - 124} size={30} anchor="middle" color={ORANGE.ink}>K</T>
			</g>
			<g opacity={prog(f, totAt, 12)}>
				<rect x={x + 190} y={ZERO_Y - 60} width={70} height={120} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="6 6" />
				<T x={x + 225} y={ZERO_Y + 14} size={40} anchor="middle" color={INK}>?</T>
				<T x={x + 225} y={ZERO_Y + 100} size={28} anchor="middle" color={INK}>total</T>
			</g>
		</g>
	);
};
export const HandoffBoard: React.FC<{phase?: number; uAt?: number; kAt?: number; higherAt?: number; totAt?: number; nextAt?: number}> = ({phase = 0, uAt = -60, kAt = -60, higherAt = -60, totAt = -60, nextAt = -60}) => {
	const f = useCurrentFrame();
	const sIn = stateAt(RUN_IN, (((phase / LAP_IN) % 1) + 1) % 1 * RUN_IN.duration);
	const lapOut = LAP_IN * 2 ** 1.5;
	const sOut = stateAt(RUN_OUT, ((((phase + 70) / lapOut) % 1) + 1) % 1 * RUN_OUT.duration);
	const P = (x: number, y: number): [number, number] => [HO.cx + x * HO.k, HO.cy - y * HO.k];
	const [ix, iy] = P(sIn.x, sIn.y), [ox, oy] = P(sOut.x, sOut.y);
	const deg = (x: number, y: number) => (Math.atan2(y - HO.cy, x - HO.cx) * 180) / Math.PI + 90;
	const pulse = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - higherAt) / 30)));
	return (
		<>
			<SceneHeading text={HEAD_V22} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={HO.cx} cy={HO.cy} r={R_IN * HO.k} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
				<circle cx={HO.cx} cy={HO.cy} r={R_OUT * HO.k} fill="none" stroke={INK} strokeWidth={3 + 3 * pulse} strokeDasharray="10 8" />
				<Earth cx={HO.cx} cy={HO.cy} d={2 * RE * HO.k} />
				<Satellite cx={ix} cy={iy} w={66} rotate={deg(ix, iy)} />
				<Satellite cx={ox} cy={oy} w={66} rotate={deg(ox, oy)} />
				<line x1={1000} y1={ZERO_Y} x2={1824} y2={ZERO_Y} stroke={INK} strokeWidth={4} opacity={prog(f, uAt, 12)} />
				<Bars x={1020} uDepth={240} label="orbit r" uAt={uAt} kAt={kAt} totAt={totAt} />
				<Bars x={1440} uDepth={120} label="orbit 2r" uAt={uAt} kAt={kAt} totAt={totAt} />
			</FrameSvg>
			<Lbl x={1004} y={ZERO_Y - 14} at={uAt} color={INK} size={28}>0</Lbl>
			<Lbl x={HO.cx + R_IN * HO.k * 0.72} y={HO.cy + R_IN * HO.k * 0.72 + 40} at={-60} color={INK} size={30}>r</Lbl>
			<Lbl x={HO.cx + R_OUT * HO.k * 0.72} y={HO.cy + R_OUT * HO.k * 0.72 + 30} at={-60} color={INK} size={30}>2r</Lbl>
			<Lbl x={1440} y={ZERO_Y + 200} at={higherAt} color={VIOLET.ink} size={28}>half as deep: U greater</Lbl>
			<Chip x={1000} y={820} at={nextAt} size={32} w={824} color={INK} border={INK}>Next: why does a higher circular orbit have lower speed but greater total energy?</Chip>
		</>
	);
};
/** v21's final frame, for the next lesson's opening (both satellites at their phase-0 places). */
export const V21FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const pe = cue(id, 'potential energy'), ke = cue(id, 'kinetic energy'), higher = cue(id, 'In a higher'), total = cue(id, 'total energy'), next = cue(id, "That's next");
	const end = dur(id);
	return <HandoffBoard phase={f - (end - 1)} uAt={pe} kAt={ke} higherAt={higher} totAt={total} nextAt={next} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>Gravity weakens, so work outwards = area under F against r.</>, at: 2},
		{content: <>That area from r out to infinity is finite: GMm/r.</>, at: 6},
		{content: <><span style={{color: VIOLET.ink}}>U = 0 at infinity, so U = −GMm/r</span> (r from the centre).</>, at: 10},
		{content: <>ΔU = GMm(1/r₁ − 1/r₂): moving outwards, U increases.</>, at: 14},
		{content: <>Near the surface ΔU ≈ mgh, with an error of about h/R.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span><span style={{color: INK}}>Zero at infinity. </span><span style={{color: VIOLET.ink}}>Negative below. </span><span style={{color: NAVY.ink}}>Climbing out is an increase.</span></span>} sub="the gravity well: an energy picture, not a hole"
					picture={<svg width={584} height={220} viewBox="0 0 584 220"><WellSection cx={292} y0={30} halfW={240} depth={150} U={U} rMax={12 * RE} earthD={44} /></svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
