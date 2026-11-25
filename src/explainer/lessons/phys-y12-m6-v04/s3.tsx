// Scenes 12 to 17: two attempts with answer-free pictures and brief feedback, the handoff (a proton moving right in
// a cross grid with its force up, a dashed "?" path curving up and to the left; its last frame is exported as
// `M6V04FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {CrossRegion, Particle} from '../../physics/electromagnetism/plates';
import {Arrow2, AxisTriad, DotRegion, FieldSymbol, RightAngle} from '../../physics/electromagnetism/magnetic';
import {A1, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, hold} from './common';
import {AMBER, FIELD, GREY, Lbl, Ring, Shrunk, T, TEAL, sci} from './parts';

const S = (n: number) => Math.sin((n * Math.PI) / 180), C = (n: number) => Math.cos((n * Math.PI) / 180);

// ---------- attempts ----------
const Q1: React.FC = () => <>A proton travels at 5.0 × 10⁵ m s⁻¹ at an angle of 30° to a uniform magnetic field of strength 0.40 T. Calculate the magnitude of the magnetic force on the proton. (e = 1.602 × 10⁻¹⁹ C)</>;
const Q2: React.FC = () => <>An electron moves towards the top of the page through a uniform magnetic field directed out of the page. (a) State the direction of the magnetic force on the electron. (b) The electron's velocity is changed so that it moves out of the page. State the magnetic force on it now. Justify your answers.</>;

/** Attempt 1's picture: field arrows to the right, a proton with its velocity at a marked 30° (no force arrow). */
const AnglePicture: React.FC<{split?: number}> = ({split = 0}) => {
	const P = {x: 200, y: 360}, L = 300;
	const tip: [number, number] = [P.x + L * C(30), P.y - L * S(30)];
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			{[120, 240, 360, 480].map(y => <Arrow2 key={y} from={[30, y]} to={[650, y]} color={FIELD} width={4} head={18} />)}
			<path d={`M${P.x + 100},${P.y} A100,100 0 0 0 ${P.x + 100 * C(30)},${P.y - 100 * S(30)}`} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
			<Arrow2 from={[P.x, P.y]} to={tip} color={TEAL.stroke} width={7} head={24} />
			{split > 0 ? <g opacity={split}>
				<Arrow2 from={[P.x, P.y]} to={[tip[0], P.y]} color={TEAL.stroke} width={4} head={16} dash="9 7" />
				<Arrow2 from={[tip[0], P.y]} to={tip} color={TEAL.stroke} width={6} head={20} dash="9 7" />
				<T x={tip[0] + 16} y={(P.y + tip[1]) / 2 + 10} size={30} color={TEAL.ink}>v⊥</T>
				<T x={(P.x + tip[0]) / 2} y={P.y + 44} size={30} color={TEAL.ink} anchor="middle">v∥</T>
			</g> : null}
			<Particle cx={P.x} cy={P.y} sign="+" r={22} />
			<T x={P.x + 110} y={P.y - 14} size={30} color={TEAL.ink}>30°</T>
			<T x={tip[0] - 80} y={tip[1] - 20} size={30} color={TEAL.ink}>5.0 × 10⁵ m s⁻¹</T>
			<T x={650} y={90} size={30} color={GREY.ink} anchor="end">B = 0.40 T</T>
		</svg>
	);
};
/** Attempt 2's picture: a grid of dots (field out of the page) and an electron moving up the page. */
const DotPicture: React.FC<{force?: number}> = ({force = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<DotRegion x={20} y={40} w={620} h={460} step={80} />
		<Arrow2 from={[330, 300]} to={[330, 130]} color={TEAL.stroke} width={7} head={24} />
		{force > 0 ? <Arrow2 from={[300, 330]} to={[140, 330]} color={AMBER.stroke} width={8} head={26} opacity={force} /> : null}
		<Particle cx={330} cy={330} sign="−" r={26} />
		<T x={350} y={150} size={30} color={TEAL.ink}>v</T>
		<T x={330} y={540} size={30} color={GREY.ink} anchor="middle">B out of the page</T>
		{force > 0 ? <T x={140} y={300} size={30} color={AMBER.ink} opacity={force}>F</T> : null}
	</svg>
);
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={2} picture={<AnglePicture />}><Q1 /></QuestionScene></Accent>;
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={34} marks={3} picture={<DotPicture />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 330, scale = 0.88}) => <div style={{position: 'absolute', left: 1230, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const eq = cue(id, 'F equals q v B sine theta'), newtons = cue(id, 'ten to the minus fourteen newtons'), slip = cue(id, 'The classic slip');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>q = 1.602 × 10⁻¹⁹ C, v = 5.0 × 10⁵ m s⁻¹, B = 0.40 T, θ = 30°</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 12, width: 1110}}>
				<Row at={eq} ageAt={newtons} size={44} oldSize={36}>F = qvB sin θ</Row>
				<Row at={eq + 30} ageAt={newtons} size={40} oldSize={34}>&nbsp;&nbsp;= 1.602 × 10⁻¹⁹ × 5.0 × 10⁵ × 0.40 × sin 30°</Row>
				<Row at={newtons} size={52}>&nbsp;&nbsp;= <AnswerBox at={newtons + 14}><span style={{color: AMBER.ink}}>{sci(A1.F, 1)} N</span></AnswerBox></Row>
			</div>
			<HandTag x={700} y={640} text="θ from the field" at={newtons + 24} size={32} color={TEAL.ink} />
			<CrossedChip x={96} y={800} at={slip} crossAt={cap(id, slip + 40)} size={32} caption="sin, not cos">× cos 30° = {sci(A1.cosSlip, 1)} N</CrossedChip>
			<Picture top={420}><AnglePicture split={prog(f, eq + 30, 16)} /></Picture>
			<FrameSvg><Ring cx={1230 + 0.88 * 490} cy={420 + 0.88 * 290} rx={60} ry={90} at={newtons} color={TEAL.stroke} /></FrameSvg>
		</>
	);
};

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const pos = cue(id, 'For a positive charge'), left = cue(id, 'the force on it points to the left'), moving = cue(id, 'Moving out of the page'), zero = cue(id, 'so the force is zero'), slip = cue(id, 'The classic slip');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>electron (−); v up the page; B out of the page</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 12, width: 1110}}>
				<Row at={pos} ageAt={left} size={40} oldSize={32}>+ charge: thumb up, fingers out → palm right</Row>
				<Row at={left} size={44}>(a) − charge: reverse → <AnswerBox at={left + 12}><span style={{color: AMBER.ink}}>to the left</span></AnswerBox></Row>
				<Row at={zero} size={44}>(b) v ∥ B: θ = 0 → <AnswerBox at={zero + 12}><span style={{color: AMBER.ink}}>F = 0</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<AxisTriad cx={260} cy={790} len={110} size={30} opacity={prog(f, pos, 14)} arms={[
					{d: [0, 1, 0], color: TEAL.stroke, label: 'v'},
					{d: [0, 0, 1], color: FIELD, label: 'B (out)'},
					{d: [1, 0, 0], color: AMBER.stroke, label: 'F (+)'},
				]} />
				{f >= moving ? <g opacity={prog(f, moving, 12)}>
					<rect x={560} y={700} width={300} height={200} rx={14} fill="#f6f1e7" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
					{[620, 700, 780].map(x => <FieldSymbol key={x} x={x} y={740} dir="out" size={14} />)}
					<Particle cx={710} cy={830} sign="−" r={24} />
					<FieldSymbol x={790} y={830} dir="out" size={14} color={TEAL.stroke} ring />
				</g> : null}
			</FrameSvg>
			<Lbl x={830} y={830} at={moving + 6} color={TEAL.ink} size={30}>v (out)</Lbl>
			<HandTag x={300} y={680} text="flip for −" at={left + 20} size={32} color={AMBER.ink} />
			<CrossedChip x={1230} y={860} at={slip} crossAt={cap(id, slip + 40)} size={32} caption="no flip for −">to the right</CrossedChip>
			<Picture top={420} scale={0.72}><DotPicture force={prog(f, left, 14)} /></Picture>
		</>
	);
};

// ---------- 16. next: does the sideways push speed it up? ----------
export const REG = {x: 520, y: 210, w: 840, h: 650};
export const ORB = {cx: 880, cy: 500, R: 220};
/** Point on the handoff circle at angle a (degrees, anticlockwise from +x, y up). */
export const orbAt = (a: number): [number, number] => [ORB.cx + ORB.R * C(a), ORB.cy - ORB.R * S(a)];
export const HandoffBoard: React.FC<{protonAt?: number; pathAt?: number; readAt?: number; chipAt?: number; tagAt?: number; tagOut?: number; headSwap?: number}> = ({protonAt = -60, pathAt = -60, readAt = -60, chipAt = -60, tagAt = 1e9, tagOut = 1e9, headSwap = -60}) => {
	const f = useCurrentFrame();
	const [px, py] = orbAt(-90);
	const grow = prog(f, pathAt, 40);
	const end = -90 + 210 * grow;
	const pts = Array.from({length: 41}, (_, i) => orbAt(-90 + ((end + 90) * i) / 40).join(',')).join(' ');
	const o = prog(f, protonAt, 12);
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<CrossRegion x={REG.x} y={REG.y} w={REG.w} h={REG.h} step={80} />
				{grow > 0 ? <polyline points={pts} fill="none" stroke={GREY.stroke} strokeWidth={5} strokeDasharray="14 10" /> : null}
				<g opacity={o}>
					<Arrow2 from={[px + 30, py]} to={[px + 200, py]} color={TEAL.stroke} width={7} head={24} />
					<Arrow2 from={[px, py - 30]} to={[px, py - 170]} color={AMBER.stroke} width={8} head={26} />
					<RightAngle x={px} y={py} u={[1, 0]} v={[0, -1]} size={44} />
					<Particle cx={px} cy={py} sign="+" r={26} />
				</g>
			</FrameSvg>
			{grow > 0.95 ? <Lbl x={orbAt(120)[0] - 30} y={orbAt(120)[1]} color={GREY.ink} size={48} anchor="end">?</Lbl> : null}
			<Lbl x={px + 210} y={py + 12} at={protonAt} color={TEAL.ink} size={36}>v</Lbl>
			<Lbl x={px + 20} y={py - 190} at={protonAt} color={AMBER.ink} size={36}>F</Lbl>
			<Lbl x={REG.x + REG.w / 2} y={REG.y - 22} color={GREY.ink} size={32} anchor="middle">B into page</Lbl>
			<Readouts x={1420} y={600} w={400} size={44} at={readAt} rows={[{label: 'speed', value: 'v = ?', color: TEAL.ink}]} />
			<HandTag x={px + 50} y={py + 90} text="always sideways" at={tagAt} out={tagOut} size={32} color={AMBER.ink} marks={[{kind: 'circle', cx: px + 20, cy: py - 20, rx: 60, ry: 56}]} markAt={tagAt + 4} />
			<Chip x={96} y={890} at={chipAt} size={30} w={1728} color={INK} border={INK}>Next: why does a perpendicular magnetic field bend a path without increasing speed?</Chip>
		</>
	);
};
/** v04's final frame (a proton with v right and F up, the "?" path, the next question). */
export const M6V04FinalFrame: React.FC = () => <HandoffBoard />;
export const S16: React.FC = () => {
	const id = 'handoff';
	const so = cue(id, 'So a magnetic field pushes only'), right = cue(id, 'at right angles to the motion'), turns = cue(id, 'As the particle turns'), speed = cue(id, 'So does the particle speed up'), why = cue(id, 'Why does a perpendicular');
	return <HandoffBoard protonAt={so} pathAt={turns} readAt={speed} chipAt={cap(id, why)} tagAt={right} tagOut={cap(id, why + 20)} headSwap={speed} />;
};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>At rest or moving along B: <span style={{color: AMBER.ink}}>F = 0</span>.</>, at: 2},
		{content: <><span style={{color: AMBER.ink}}>F = qv<Sub>⊥</Sub>B = qvB sin θ</span> (θ from v to B).</>, at: 6},
		{content: <>Maximum qvB at 90°.</>, at: 10},
		{content: <>F ⊥ v and B; palm rule for +, flip for −.</>, at: 14},
		{content: <><span style={{color: GREY.ink}}>× into the page; • out of the page.</span></>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span>Still or along: no force. <span style={{color: AMBER.ink}}>Across: qvB.</span></span>} sub="Positive first, then flip for negative." />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
