// Scenes 11 to 16: two attempts with brief feedback, the handoff (the three-curve graph with the zero line as a
// dashed band "E = 0: escape?" and the satellite on Earth's surface with a launch arrow; its last frame is
// exported as `V22FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Row, Sub} from '../../physics/projectile/board';
import {A1, ACCENT, E, GM, HEAD_SIZE, HEAD_V23, K, R1, RE, U, cue, hold} from './common';
import {Axes3, Earth, GREY, Lbl, NAVY, ORANGE, Satellite, T, TEAL, VIOLET, VecArrow, curve3, g3x, g3y, sci} from './parts';
import type {G3} from './parts';
import {MirrorBars} from './s2';

// ---------- attempts ----------
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{m1?: number}> = ({m1}) => <>An 800 kg satellite is in a circular orbit 500 km <M at={m1}>above Earth's surface</M>. Calculate the satellite's (a) kinetic energy, (b) gravitational potential energy and (c) total energy. (G = 6.67 × 10⁻¹¹ N m² kg⁻², M<Sub>E</Sub> = 6.0 × 10²⁴ kg, R<Sub>E</Sub> = 6.371 × 10⁶ m)</>;
const Q2: React.FC = () => <>A satellite in a low circular orbit loses energy slowly because of air drag and gradually moves to lower circular orbits. Explain why the satellite's speed increases even though drag removes energy from it.</>;
/** Attempt 1's picture: the satellite above an arc of the painted Earth, the 500 km gap bracketed (not to scale). */
const AltitudePicture: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'hidden'}}>
		<Earth cx={339} cy={1110} d={1320} />
		<Satellite cx={339} cy={210} w={200} />
		<line x1={480} y1={250} x2={480} y2={452} stroke={NAVY.stroke} strokeWidth={4} />
		<line x1={465} y1={250} x2={495} y2={250} stroke={NAVY.stroke} strokeWidth={4} />
		<line x1={465} y1={452} x2={495} y2={452} stroke={NAVY.stroke} strokeWidth={4} />
		<T x={506} y={362} size={32} color={NAVY.ink}>500 km</T>
		<T x={20} y={40} size={28} color={INK} weight={700}>not to scale</T>
	</svg>
);
/** Attempt 2's picture: the satellite, still, on one dashed circle close to an arc of the painted Earth. */
const LowOrbitPicture: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'hidden'}}>
		<circle cx={339} cy={1110} r={780} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
		<Earth cx={339} cy={1110} d={1320} />
		<Satellite cx={339} cy={330} w={130} />
		<T x={20} y={40} size={28} color={INK} weight={700}>not to scale</T>
	</svg>
);
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<AltitudePicture />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<LowOrbitPicture />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '8px 22px', ...DISPLAY(26, INK, 600), whiteSpace: 'normal', lineHeight: 1.24}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: NAVY.soft, borderRadius: 12, border: `3px solid ${NAVY.stroke}`, padding: '6px 20px', ...DISPLAY(28, NAVY.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);
const Picture: React.FC<{children: React.ReactNode}> = ({children}) => (
	<div style={{position: 'absolute', left: 1250, top: 300, transform: 'scale(0.85)', transformOrigin: 'top left'}}>{children}</div>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const first = cue(id, 'First, r equals'), metres = cue(id, 'metres'), gmm = cue(id, 'Big G M m is'), soU = cue(id, 'So U is'), kin = cue(id, 'the kinetic energy is half'), tot = cue(id, 'and the total is'), slip = cue(id, 'The classic slip'), as = cue(id, 'five hundred kilometres as');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={340} givens={<>m = 800 kg | circular orbit 500 km above the surface | G = 6.67 × 10⁻¹¹ N m² kg⁻² | M<Sub>E</Sub> = 6.0 × 10²⁴ kg | R<Sub>E</Sub> = 6.371 × 10⁶ m</>}><Q1 m1={metres} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 450, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={first} ageAt={tot} size={44} oldSize={34}>r = 6.371 × 10⁶ + 0.500 × 10⁶ = {sci(A1.r, 3)} m</Row>
				<Row at={gmm} ageAt={tot} size={44} oldSize={34}>GMm = {sci(GM, 3)} × 800 = {sci(A1.gmm, 3)}</Row>
				<Row at={soU} ageAt={tot} size={44} oldSize={34}><span style={{color: VIOLET.ink}}>U = −GMm/r = {sci(A1.U)} J</span></Row>
				<Row at={kin} ageAt={tot} size={44} oldSize={34}><span style={{color: ORANGE.ink}}>K = GMm/2r = {sci(A1.K)} J</span></Row>
				<Row at={tot} size={52}><span style={{color: NAVY.ink}}>E = K + U = </span><AnswerBox at={tot + 16}><span style={{color: NAVY.ink}}>{sci(A1.E)} J</span></AnswerBox></Row>
			</div>
			<HandTag x={1000} y={640} text="K is half the size of U" at={kin + 20} size={30} color={ORANGE.ink} />
			<CrossedChip x={96} y={860} at={slip} crossAt={as + 10} size={32} caption="r is from Earth's centre">r = {sci(A1.slip)} m</CrossedChip>
			<Picture><AltitudePicture /></Picture>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const drag = cue(id, 'Drag removes energy'), more = cue(id, 'more negative'), tot = cue(id, 'Total energy is minus'), smaller = cue(id, 'smaller radius'), higher = cue(id, 'the speed is higher'), because = cue(id, 'because v squared'), twice = cue(id, 'twice as much work'), slip = cue(id, 'The slip is thinking');
	// The picture: relative radius from 1.25 (outer) to 1.0 (inner); K = 1/2r and E = -1/2r in those units.
	const rr = 1.25 - 0.25 * prog(f, more, Math.max(40, smaller - more + 20));
	const C = {cx: 300, cy: 300, R: 160};
	const ang = -Math.PI / 2 + 0.002 * f / rr ** 1.5 * 30;
	const sx = C.cx + C.R * rr * Math.cos(ang), sy = C.cy + C.R * rr * Math.sin(ang);
	const hK = 130 / (2 * rr) * 2, BX = 600, BY = 300;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={330} givens={<>low circular orbit | air drag slowly removes energy | it moves to lower circular orbits</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 10, width: 1110}}>
				<Row at={drag} ageAt={higher} size={40} oldSize={32}>drag removes energy: <span style={{color: NAVY.ink}}>E more negative</span></Row>
				<Row at={tot} ageAt={higher} size={40} oldSize={32}><span style={{color: NAVY.ink}}>E = −GMm/2r</span> more negative → r smaller</Row>
				<Row at={higher} size={48}><AnswerBox at={because}><span><span style={{color: TEAL.ink}}>v = √(GM/r) larger</span> (K = −E rises)</span></AnswerBox></Row>
				<Row at={twice} size={36} style={{whiteSpace: 'normal'}}>gravity's work = −ΔU = 2 × energy lost to drag</Row>
			</div>
			<CrossedChip x={96} y={860} at={slip} crossAt={slip + 40} size={32} caption="it falls inwards and speeds up">drag slows it down</CrossedChip>
			<Picture>
				<svg width={820} height={620} style={{overflow: 'visible'}}>
					<circle cx={C.cx} cy={C.cy} r={C.R * 1.25} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
					<circle cx={C.cx} cy={C.cy} r={C.R} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
					<Earth cx={C.cx} cy={C.cy} d={2 * C.R * 0.82} />
					<Satellite cx={sx} cy={sy} w={60} rotate={(ang * 180) / Math.PI + 90} />
					<line x1={BX - 20} y1={BY} x2={BX + 180} y2={BY} stroke={INK} strokeWidth={4} />
					<rect x={BX} y={BY - hK} width={60} height={hK} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} />
					<rect x={BX + 80} y={BY} width={60} height={hK} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={5} />
					<T x={BX + 30} y={BY - hK - 10} size={30} anchor="middle" color={ORANGE.ink}>K</T>
					<T x={BX + 110} y={BY + hK + 34} size={30} anchor="middle" color={NAVY.ink}>E</T>
					<T x={C.cx} y={C.cy + C.R * 1.25 + 50} size={28} anchor="middle" color={GREY.ink}>falls to a lower circle</T>
				</svg>
			</Picture>
			<HandTag x={1300} y={900} text="lower: faster" at={smaller + 10} size={30} color={TEAL.ink} />
		</>
	);
};

// ---------- 15. handoff ----------
const HG: G3 = {ox: 1000, y0: 450, w: 760, xMax: 5 * R1, s: 300 / -U(R1), top: 230, bot: 790};
const EH = {cx: 400, cy: 830, d: 340};
export const HandoffBoard: React.FC<{boundAt?: number; zeroAt?: number; vAt?: number; nextAt?: number; helpAt?: number; launch?: number}> = ({boundAt = -60, zeroAt = -60, vAt = -60, nextAt = -60, helpAt = -60, launch = 1}) => {
	const f = useCurrentFrame();
	const band = prog(f, zeroAt, 16);
	const top = EH.cy - EH.d / 2;
	return (
		<>
			<SceneHeading text={HEAD_V23} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Axes3 g={HG} size={28} xTitle="r" />
				<path d={curve3(HG, K, RE, HG.xMax)} fill="none" stroke={ORANGE.stroke} strokeWidth={5} />
				<path d={curve3(HG, U, RE, HG.xMax)} fill="none" stroke={VIOLET.stroke} strokeWidth={5} />
				<path d={`${curve3(HG, E, RE, HG.xMax)} L${g3x(HG, HG.xMax)},${HG.y0} L${g3x(HG, RE)},${HG.y0} Z`} fill={NAVY.soft} opacity={0.9} />
				<path d={curve3(HG, E, RE, HG.xMax)} fill="none" stroke={NAVY.stroke} strokeWidth={6} />
				{band > 0 ? <rect x={HG.ox} y={HG.y0 - 9} width={(HG.w + 20) * band} height={18} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="12 8" /> : null}
				<line x1={EH.cx} y1={top - 30} x2={EH.cx} y2={190} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
				<Earth cx={EH.cx} cy={EH.cy} d={EH.d} />
				<Satellite cx={EH.cx} cy={top - 18} w={70} />
				{launch > 0 ? <VecArrow x={EH.cx + 50} y={top - 30} dx={0} dy={-230 * launch} color={TEAL.stroke} width={8} head={24} at={vAt} /> : null}
			</FrameSvg>
			<Lbl x={EH.cx + 24} y={190} at={-60} color={INK} size={48}>∞</Lbl>
			<Lbl x={EH.cx + 70} y={top - 200} at={vAt + 10} color={TEAL.ink} size={40}>v = ?</Lbl>
			<Lbl x={g3x(HG, 3 * R1)} y={g3y(HG, K(3 * R1)) - 20} at={-60} color={ORANGE.ink} size={28}>K</Lbl>
			<Lbl x={g3x(HG, 3 * R1)} y={g3y(HG, E(3 * R1)) + 40} at={-60} color={NAVY.ink} size={28}>E</Lbl>
			<Lbl x={g3x(HG, 1.9 * R1)} y={HG.y0 + 40} at={-60} color={NAVY.ink} size={28}>E &lt; 0</Lbl>
			<Lbl x={g3x(HG, 1.6 * R1)} y={g3y(HG, U(1.6 * R1)) + 40} at={-60} color={VIOLET.ink} size={28}>U</Lbl>
			<Lbl x={HG.ox + HG.w + 20} y={385} at={zeroAt} color={NAVY.ink} anchor="end" size={34}>E = 0: escape?</Lbl>
			<HandTag x={1150} y={810} text="every circular orbit: E < 0, bound" at={boundAt} size={30} color={NAVY.ink} />
			<Row at={helpAt} size={34} style={{position: 'absolute', left: 560, top: 300, width: 400, whiteSpace: 'normal'}}>one launch, then no engine</Row>
			<Chip x={1000} y={850} at={nextAt} size={32} w={824} color={INK} border={INK}>Next: what minimum launch speed allows escape without further propulsion?</Chip>
		</>
	);
};
/** v22's final frame, for the next lesson's opening. */
export const V22FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const bound = cue(id, "so it's bound"), zero = cue(id, 'at least zero'), slowest = cue(id, "So what's the slowest"), help = cue(id, 'no more help'), next = cue(id, "That's next");
	return <HandoffBoard boundAt={bound} zeroAt={zero} vAt={slowest} nextAt={next} helpAt={help} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>Circular orbit: v² = GM/r, so <span style={{color: ORANGE.ink}}>K = GMm/2r</span>.</>, at: 2},
		{content: <><span style={{color: VIOLET.ink}}>U = −GMm/r</span>, so |U| = 2K.</>, at: 6},
		{content: <><span style={{color: NAVY.ink}}>E = K + U = −GMm/2r = −K</span>: negative, so bound.</>, at: 10},
		{content: <>Higher circle: slower, but E is greater (less negative).</>, at: 14},
		{content: <>No thrust or drag: E is constant; on an ellipse K and U trade.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span><span style={{color: NAVY.ink}}>In a circle, E = −K. </span><span style={{color: ORANGE.ink}}>Higher is slower, but higher costs more.</span></span>} sub="circular orbits only"
					picture={<svg width={584} height={220} viewBox="0 0 584 220"><MirrorBars x={80} y0={108} s={75 / K(R1)} w={50} size={26} /></svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
