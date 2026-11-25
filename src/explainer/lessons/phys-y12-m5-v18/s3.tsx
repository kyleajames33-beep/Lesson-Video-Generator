// Scenes 11 to 17: the memory aid (the three-step strip), two attempts with brief feedback, the handoff (a
// fast low satellite, Earth's spin and an outer circle for T = 24 h; its last frame is exported as
// `V18FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Row, Sub} from '../../physics/projectile/board';
import {A1, ACCENT, GEO_R, GM, HEAD, HEAD_SIZE, ISS, RE, cue, dur, hold} from './common';
import {AMBER, DashCircle, Earth, GREY, Lbl, NAVY, Satellite, T, TEAL, VecArrow, fx, polar, rPx, sci} from './parts';
import type {Stage} from './parts';

// ---------- 11. memory aid ----------
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const pattern = cue(id, 'pattern to remember'), grav = cue(id, 'gravity is the centripetal'), write = cue(id, 'Write gravity'), cancel = cue(id, 'cancel the m'), periodC = cue(id, 'the period'), what = cue(id, 'remember what'), around = cue(id, 'falling around');
	const sk = prog(f, what, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Enter at={pattern} style={{position: 'absolute', left: 96, top: 176, width: 1728}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, 0 10px 26px rgba(60,45,20,0.12)`, padding: '18px 40px 22px', display: 'flex', alignItems: 'center', gap: 30}}>
					<div style={{flex: 1}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: INK_SOFT}}>Memory aid</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.1, opacity: prog(f, grav, 12)}}><span style={{color: AMBER.ink}}>Gravity is the centripetal force:</span> <span style={{color: NAVY.ink}}>set them equal, cancel m.</span></div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.1, color: TEAL.ink, opacity: prog(f, around, 12), marginTop: 6}}>Falling around, not falling down.</div>
					</div>
					<svg width={300} height={260} style={{overflow: 'visible', opacity: sk}}>
						<Earth cx={150} cy={140} d={110} />
						<circle cx={150} cy={140} r={105} fill="none" stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="10 8" />
						<path d={`M150,35 A105,105 0 0 1 ${150 + 105 * Math.sin(1.2)},${140 - 105 * Math.cos(1.2)}`} fill="none" stroke={TEAL.stroke} strokeWidth={7} strokeDasharray={`${180 * sk} 400`} />
						<VecArrow x={150} y={35} dx={90} dy={0} color={TEAL.stroke} width={5} head={14} at={what} />
						<circle cx={150} cy={35} r={9} fill={INK} />
					</svg>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 96, top: 560, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Row at={write} size={44}>1. <span style={{color: AMBER.ink}}>GMm/r²</span> = m<span style={{color: TEAL.ink}}>v</span>²/r</Row>
				<Row at={cancel} size={44}>2. cancel m → <span style={{color: TEAL.ink}}>v</span> = √(GM/r)</Row>
				<Row at={periodC} size={44}>3. <span style={{color: TEAL.ink}}>v</span> = 2πr/T → r³/T² = GM/4π²</Row>
			</div>
			<HandTag x={900} y={900} text="speed, period, constant ratio" at={periodC + 20} size={30} color={NAVY.ink} />
		</>
	);
};

// ---------- attempts ----------
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{m1?: number}> = ({m1}) => <>A space telescope orbits Earth at an <M at={m1}>altitude</M> of 547 km. Assume a circular orbit. (a) Calculate its orbital speed. (b) Calculate its orbital period in minutes. (G = 6.67 × 10⁻¹¹ N m² kg⁻², M<Sub>E</Sub> = 6.0 × 10²⁴ kg, R<Sub>E</Sub> = 6.371 × 10⁶ m)</>;
const Q2: React.FC = () => <>Satellites X and Y are in circular orbits around Earth. The orbital radius of Y is four times the orbital radius of X. Compare the orbital speed and the orbital period of Y with those of X. Justify your answers.</>;
/** Attempt 1's picture: the satellite plate above an arc of the painted Earth, the 547 km gap bracketed (a given). */
const TelescopePicture: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<clipPath id="v18a1"><rect x={0} y={0} width={678} height={560} /></clipPath>
		<g clipPath="url(#v18a1)"><Earth cx={339} cy={1180} d={1500} /></g>
		<Satellite cx={339} cy={170} w={200} />
		<line x1={560} y1={196} x2={560} y2={430} stroke={NAVY.stroke} strokeWidth={4} />
		<line x1={546} y1={196} x2={574} y2={196} stroke={NAVY.stroke} strokeWidth={4} />
		<line x1={546} y1={430} x2={574} y2={430} stroke={NAVY.stroke} strokeWidth={4} />
		<T x={584} y={320} size={34} color={NAVY.ink}>547 km</T>
		<T x={20} y={40} size={28} color={GREY.ink} weight={700}>not to scale</T>
	</svg>
);
/** Attempt 2's picture: two circles (r and 4r) round a small painted Earth, satellites X and Y, both still. */
const XYPicture: React.FC = () => {
	const c: [number, number] = [320, 280], r = 56;
	const [xx, xy] = polar(c[0], c[1], r, -50), [yx, yy] = polar(c[0], c[1], 4 * r, -30);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<Earth cx={c[0]} cy={c[1]} d={60} />
			<circle cx={c[0]} cy={c[1]} r={r} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
			<circle cx={c[0]} cy={c[1]} r={4 * r} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
			<Satellite cx={xx} cy={xy} w={64} rotate={40} />
			<Satellite cx={yx} cy={yy} w={64} rotate={60} />
			<T x={xx + 26} y={xy - 18} size={34}>X</T>
			<T x={yx + 30} y={yy - 18} size={34}>Y</T>
			<T x={c[0]} y={c[1] + r + 34} size={30} color={NAVY.ink} anchor="middle">r</T>
			<T x={c[0]} y={c[1] + 4 * r + 40} size={30} color={NAVY.ink} anchor="middle">4r</T>
		</svg>
	);
};
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<TelescopePicture />}><Q1 /></QuestionScene></Accent>;
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<XYPicture />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '8px 22px', ...DISPLAY(26, INK, 600), whiteSpace: 'normal', lineHeight: 1.24}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: NAVY.soft, borderRadius: 12, border: `3px solid ${NAVY.stroke}`, padding: '6px 20px', ...DISPLAY(30, NAVY.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);
const Picture: React.FC<{children: React.ReactNode}> = ({children}) => (
	<div style={{position: 'absolute', left: 1250, top: 300, transform: 'scale(0.85)', transformOrigin: 'top left'}}>{children}</div>
);

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const first = cue(id, 'First, r'), which = cue(id, 'which is'), thenV = cue(id, 'Then v'), about = cue(id, 'about seven'), second = cue(id, 'per second'), tIs = cue(id, 'T is'), minutes = cue(id, 'ninety-five minutes'), slip = cue(id, 'The classic slip'), as = cue(id, 'kilometres as');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={330} givens={<>altitude 547 km, circular orbit | G = 6.67 × 10⁻¹¹ N m² kg⁻² | M<Sub>E</Sub> = 6.0 × 10²⁴ kg | R<Sub>E</Sub> = 6.371 × 10⁶ m</>}><Q1 m1={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={first} ageAt={thenV} size={44} oldSize={34}>r = R + h = {sci(RE, 3)} + 0.547 × 10⁶</Row>
				<Row at={which} size={44}>&nbsp;&nbsp;= {sci(A1.r, 3)} m</Row>
				<Row at={thenV} size={44}>(a) v = √({sci(GM, 3)} / {sci(A1.r, 3)})</Row>
				<Row at={about} size={44}>&nbsp;&nbsp;= <AnswerBox at={second}><span>{sci(A1.v)} m s⁻¹</span></AnswerBox></Row>
				<Row at={tIs} size={44}>(b) T = 2πr / v = <AnswerBox at={minutes}><span>{sci(A1.T)} s = {fx(A1.min, 1)} min</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={800} at={slip} crossAt={as} size={32} caption="that's the altitude">r = {sci(A1.h)} m</CrossedChip>
			<Picture><TelescopePicture /></Picture>
		</>
	);
};

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const speedGoes = cue(id, 'Speed goes'), speed = cue(id, 'half the speed'), lap = cue(id, 'lap is four'), half = cue(id, 'moves at half'), eight = cue(id, 'eight times'), long = cue(id, 'as long'), slip = cue(id, 'The slip'), four = cue(id, 'four times as long');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={300} givens={<>X and Y: circular orbits round Earth | radius of Y = 4 × radius of X</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={speedGoes} size={44}>v = √(GM/r): <span style={{color: TEAL.ink}}>v<Sub>Y</Sub> = v<Sub>X</Sub> / √4 = </span><AnswerBox at={speed}><span style={{color: TEAL.ink}}>v<Sub>X</Sub> / 2</span></AnswerBox></Row>
				<Row at={lap} size={44}>lap: 2π(4r) = 4 × X's lap</Row>
				<Row at={half} size={44}>4 × the distance at ½ the speed:</Row>
				<Row at={eight - 10} size={48}>&nbsp;&nbsp;<AnswerBox at={long}><span>T<Sub>Y</Sub> = 8 T<Sub>X</Sub></span></AnswerBox></Row>
				<Row at={long + 10} size={34}>check: r³/T² constant, so T ∝ r<sup>1.5</sup>; 4<sup>1.5</sup> = 8</Row>
			</div>
			<CrossedChip x={96} y={820} at={slip} crossAt={four + 10} size={32} caption="the lap is longer and slower">T<Sub>Y</Sub> = 4 T<Sub>X</Sub></CrossedChip>
			<Picture><XYPicture /></Picture>
		</>
	);
};

// ---------- 16. handoff ----------
export const HS: Stage = {cx: 520, cy: 590, R: 330 / (GEO_R / RE)};
const GEO_DEG = -32;
export const HandoffBoard: React.FC<{phase?: number; fixAt?: number; chooseAt?: number; askAt?: number; spinAt?: number; geoAt?: number; nextAt?: number}> = ({phase = 0, fixAt = -200, chooseAt = -200, askAt = -200, spinAt = -200, geoAt = -200, nextAt = -60}) => {
	const f = useCurrentFrame();
	const rLow = rPx(HS, ISS.r), rGeo = rPx(HS, GEO_R);
	const [lx, ly] = polar(HS.cx, HS.cy, rLow, phase);
	const [gx, gy] = polar(HS.cx, HS.cy, rGeo, GEO_DEG);
	const sp = prog(f, spinAt, 24);
	const arcR = HS.R + 22;
	const a0 = 200, a1 = 200 + 120 * sp;
	const P = (a: number) => polar(HS.cx, HS.cy, arcR, a);
	const [ex, ey] = P(a1);
	const tan = [-Math.sin((a1 * Math.PI) / 180), Math.cos((a1 * Math.PI) / 180)];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<DashCircle cx={HS.cx} cy={HS.cy} r={rGeo} at={geoAt} color={INK} width={3} />
				<Earth cx={HS.cx} cy={HS.cy} d={2 * HS.R} />
				<circle cx={HS.cx} cy={HS.cy} r={rLow} fill="none" stroke={TEAL.stroke} strokeWidth={2.5} />
				{sp > 0 ? <g>
					<path d={`M${P(a0)[0]},${P(a0)[1]} A${arcR},${arcR} 0 0 1 ${ex},${ey}`} fill="none" stroke={GREY.ink} strokeWidth={5} />
					<path d={`M${ex + tan[0] * 14},${ey + tan[1] * 14} l${-tan[0] * 22 - tan[1] * 11},${-tan[1] * 22 + tan[0] * 11} l${tan[1] * 22},${-tan[0] * 22} Z`} fill={GREY.ink} />
				</g> : null}
				<Satellite cx={lx} cy={ly} w={48} rotate={phase + 90} />
				{f >= geoAt ? <g opacity={prog(f, geoAt, 14)}><Satellite cx={gx} cy={gy} w={64} rotate={GEO_DEG + 90} /></g> : null}
			</FrameSvg>
			<Lbl x={HS.cx} y={HS.cy + HS.R + 74} at={spinAt} color={GREY.ink} anchor="middle" size={30}>Earth turns once a day</Lbl>
			<Lbl x={HS.cx + 70} y={HS.cy - 90} at={fixAt} color={TEAL.ink} size={28}>400 km: 92 min a lap</Lbl>
			<Chip x={gx + 30} y={gy - 30} at={geoAt + 10} size={34} border={NAVY.stroke} color={NAVY.ink}>T = 24 h → r = ?</Chip>
			<div style={{position: 'absolute', left: 1180, top: 186, display: 'flex', flexDirection: 'column', gap: 12, width: 644}}>
				<Row at={fixAt} size={40}>r fixes both <span style={{color: TEAL.ink}}>v</span> and T</Row>
				<Row at={chooseAt} size={36}>choose T, and you've chosen r</Row>
				<Enter at={askAt}><div style={{...DISPLAY(38, INK, 800), whiteSpace: 'normal', marginTop: 10}}>Which period keeps pace with Earth's spin, over one spot?</div></Enter>
			</div>
			<Chip x={1180} y={600} at={nextAt} size={36} w={644} color={INK} border={INK}>Next: what makes an orbit geostationary rather than merely near Earth?</Chip>
		</>
	);
};
/** v18's final frame, for the next lesson's opening (the low satellite at 3 o'clock). */
export const V18FinalFrame: React.FC = () => <HandoffBoard phase={0} />;
export const S16: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const radius = cue(id, 'the radius fixes'), choose = cue(id, 'choose the period'), which = cue(id, 'Which period'), keep = cue(id, 'keep pace'), spin = cue(id, "Earth's spin"), next = cue(id, "That's next");
	const end = dur(id);
	// The low satellite laps fast (one lap in 90 frames), arriving at 3 o'clock on the last frame.
	const phase = -((end - 1 - f) * 360) / 90;
	return <HandoffBoard phase={phase} fixAt={radius} chooseAt={choose} askAt={which} spinAt={spin} geoAt={keep} nextAt={next} />;
};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>An orbit is falling around, not into: gravity is the only force.</>, at: 2},
		{content: <><span style={{color: AMBER.ink}}>Gravity plays the centripetal role</span>: GMm/r² = mv²/r.</>, at: 6},
		{content: <><span style={{color: TEAL.ink}}>v = √(GM/r)</span>: m cancels, higher is slower, r = R + h.</>, at: 10},
		{content: <>v = 2πr/T, so r³/T² = GM/4π² for every satellite of one body.</>, at: 14},
		{content: <>Floating in orbit is free fall together, not zero gravity.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span><span style={{color: AMBER.ink}}>Gravity is the centripetal force: </span><span style={{color: NAVY.ink}}>set them equal, cancel m.</span></span>} sub={<span style={{color: TEAL.ink}}>Falling around, not falling down.</span>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
