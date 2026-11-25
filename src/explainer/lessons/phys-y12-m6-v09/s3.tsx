// Scenes 10 to 15: two attempts with answer-free side views and brief feedback, the handoff (the painted bench: bar
// magnet, coil and galvanometer with its needle at zero, "changing Φ", "?"; its last frame is exported as
// `M6V09FinalFrame` for v10), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row, Sub} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Lead} from '../../physics/electromagnetism/plates';
import {BARMAG, BLOCK, COIL, Galvanometer, Plate, barMagnetPts, coilPts, galvPts} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {A1, A2, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, hold} from './common';
import {AMBER, GREY, LIT, Lbl, NAVY, Ring, Shrunk, SideView, T, fx, sci, sideNormalTip} from './parts';

// ---------- attempts ----------
const Q1: React.FC = () => <>A flat loop of area 0.020 m² is placed in a uniform magnetic field of 0.60 T, with the field perpendicular to the plane of the loop. (a) Calculate the magnetic flux through the loop. (b) The loop is rotated through 60° from this position about an axis perpendicular to the field. Calculate the new magnetic flux.</>;
const Q2: React.FC = () => <>A rectangular loop measuring 10 cm × 5.0 cm is in a uniform magnetic field of 0.40 T. The plane of the loop makes an angle of 30° with the magnetic field. Calculate the magnetic flux through the loop.</>;

/** Attempt 1's picture: the loop edge on, at right angles to the field (no values on it). Answer: turned through 60°. */
const LoopPicture1: React.FC<{answer?: number}> = ({answer = 0}) => {
	const pl = 90 - 60 * answer;
	const nt = sideNormalTip(330, 290, pl);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<SideView cx={330} cy={290} w={600} h={420} plane={pl} len={260} normal={answer > 0 ? 1 : 0} thetaArc={answer} />
			<T x={610} y={60} size={34} color={GREY.ink} anchor="end">B</T>
			{answer > 0 ? <g opacity={answer}><T x={nt[0] + 10} y={nt[1] + 30} size={32} color={NAVY.ink}>normal</T><T x={400} y={350} size={34} color={INK}>θ = 60°</T></g> : null}
		</svg>
	);
};
/** Attempt 2's picture: the loop edge on, its plane at 30° to the field, with the 30° arc. Answer: the normal at 60°. */
const LoopPicture2: React.FC<{answer?: number}> = ({answer = 0}) => {
	const nt = sideNormalTip(330, 290, 30);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<SideView cx={330} cy={290} w={600} h={420} plane={30} len={300} normal={answer} alphaArc={1} thetaArc={answer} />
			<T x={440} y={260} size={34} color={GREY.ink}>30°</T>
			<T x={610} y={60} size={34} color={GREY.ink} anchor="end">B</T>
			{answer > 0 ? <g opacity={answer}><T x={nt[0] + 10} y={nt[1] + 30} size={32} color={NAVY.ink}>normal</T><T x={380} y={370} size={34} color={INK}>θ = 60°</T></g> : null}
		</svg>
	);
};
export const S10: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={2} picture={<LoopPicture1 />}><Q1 /></QuestionScene></Accent>;
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={2} picture={<LoopPicture2 />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 400, scale = 0.95}) => <div style={{position: 'absolute', left: 1240, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const right = cue(id, 'Field at right angles'), a = cue(id, 'zero point zero one two webers'), turned = cue(id, 'Turned through sixty degrees'), b = cue(id, 'zero point zero zero six zero webers'), slip = cue(id, 'The slip is using'), cos = cap(id, cue(id, "so it's cos"));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>A = 0.020 m², B = 0.60 T, θ = 0° then 60°</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 16, width: 1120}}>
				<Row at={right} ageAt={turned} size={48} oldSize={40}>(a) Φ = BA cos 0° = 0.60 × 0.020 = <AnswerBox at={a}>{fx(A1.phi0, 3)} Wb</AnswerBox></Row>
				<Row at={turned} size={48}>(b) Φ = BA cos 60° = 0.012 × 0.5 = <AnswerBox at={b}>{fx(A1.phi60, 4)} Wb</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={720} at={slip} crossAt={cos} size={32} caption="θ is from the normal: cos θ">Φ = 0.012 × sin 60° = {fx(A1.slip, 3)} Wb</CrossedChip>
			<Picture><LoopPicture1 answer={prog(f, turned, 30)} /></Picture>
		</>
	);
};

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const area = cue(id, 'The area is'), m2 = cue(id, 'square metres'), normal = cue(id, 'the normal is at sixty'), wb = cue(id, 'one point zero times ten to the minus three webers'), slip = cue(id, 'The slip is putting'), plane = cap(id, cue(id, 'not the normal'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>10 cm × 5.0 cm = 0.10 m × 0.050 m, B = 0.40 T, plane at 30° to B</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 12, width: 1120}}>
				<Row at={area} ageAt={normal} size={44} oldSize={36}>A = 0.10 × 0.050 = {sci(A2.A, 1)} m²</Row>
				<Row at={normal} ageAt={wb} size={44} oldSize={36}>θ = 90° − 30° = 60°</Row>
				<Row at={wb - 40} size={44}>Φ = 0.40 × {sci(A2.A, 1)} × cos 60° = <AnswerBox at={wb}>{sci(A2.phi, 1)} Wb</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={760} at={slip} crossAt={plane} size={30} caption="30° is to the plane: θ = 60°">Φ = 0.40 × {sci(A2.A, 1)} × cos 30° = {sci(A2.slip, 1)} Wb</CrossedChip>
			<Lbl x={96} y={720} at={m2} out={normal} color={NAVY.ink} size={30}>area first</Lbl>
			<Picture><LoopPicture2 answer={prog(f, normal, 20)} /></Picture>
		</>
	);
};

// ---------- 14. next: what makes a current? ----------
const BENCH = 790;
const MAG: Place = {x: 120, y: 0, w: 380}, CO: Place = {x: 600, y: 0, w: 520}, GA: Place = {x: 1290, y: 0, w: 330};
const magP = {...MAG, y: BENCH - 40 - 62}, coP = {...CO, y: BENCH - 211}, gaP = {...GA, y: BENCH - 297};
export const HandoffBoard: React.FC<{benchAt?: number; changeAt?: number; arrowAt?: number; qAt?: number; chipAt?: number; tagAt?: number; tagOut?: number; headSwap?: number}> = ({benchAt = -60, changeAt = -60, arrowAt = -60, qAt = -60, chipAt = -60, tagAt = 1e9, tagOut = 1e9, headSwap = -60}) => {
	const f = useCurrentFrame();
	const m = barMagnetPts(magP, true), c = coilPts(coP), g = galvPts(gaP);
	const bo = prog(f, benchAt, 16);
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={bo}>
					<line x1={60} y1={BENCH} x2={1860} y2={BENCH} stroke={INK} strokeWidth={4} />
					<Plate spec={BLOCK} p={{x: 140, y: BENCH - 40, w: 340}} />
					<Plate spec={BARMAG} p={magP} flip />
					<Plate spec={COIL} p={coP} />
					<Lead pts={[c.a, [c.a[0], BENCH + 50], [g.red[0], BENCH + 50], g.red]} width={3.5} />
					<Lead pts={[c.b, [c.b[0] + 60, c.b[1]], [c.b[0] + 60, BENCH + 30], [g.black[0], BENCH + 30], g.black]} width={3.5} />
					<Galvanometer p={gaP} deg={0} />
				</g>
				{f >= arrowAt ? <Arrow2 from={[MAG.x - 10, m.red[1] - 70]} to={[MAG.x + 190, m.red[1] - 70]} color={AMBER.stroke} width={8} head={26} opacity={prog(f, arrowAt, 12)} /> : null}
				<Ring cx={g.pivot[0]} cy={g.pivot[1] - 120} rx={60} ry={50} at={tagAt} color={INK} />
			</FrameSvg>
			<Lbl x={m.red[0] - 46} y={m.red[1] + 12} at={benchAt} color={CARD} size={36} bg={false}>N</Lbl>
			<Lbl x={coP.x + coP.w / 2} y={coP.y - 30} at={benchAt} color={INK} size={30} anchor="middle">coil</Lbl>
			<Lbl x={gaP.x + gaP.w / 2} y={gaP.y - 30} at={benchAt} color={INK} size={30} anchor="middle">sensitive meter</Lbl>
			<Lbl x={gaP.x + gaP.w + 30} y={gaP.y + 120} at={qAt} color={INK} size={110}>?</Lbl>
			<HandTag x={gaP.x - 220} y={gaP.y - 10} text="needle: still" at={tagAt} out={tagOut} size={32} color={INK} />
			<Chip x={96} y={300} at={changeAt} size={34} w={330}>changing Φ ↕</Chip>
			<Chip x={96} y={890} at={chipAt} size={30} w={1728} color={INK} border={INK}>Next: what changes create an induced emf?</Chip>
		</>
	);
};
/** v09's final frame for v10 (bar magnet, coil and galvanometer on the bench, needle at zero, "?"). */
export const M6V09FinalFrame: React.FC = () => <HandoffBoard />;
export const S14: React.FC = () => {
	const id = 'handoff';
	const change = cue(id, 'changing flux'), connect = cue(id, 'Connect a coil'), bring = cue(id, 'bring a magnet near it'), move = cap(id, cue(id, 'When does the needle move'));
	return <HandoffBoard benchAt={0} changeAt={change} arrowAt={bring} qAt={move} chipAt={move} tagAt={connect + 30} tagOut={cap(id, move + 20)} headSwap={connect} />;
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const notes = [
		{content: <>Flux Φ: field through an area; 1 Wb = 1 T m².</>, at: 2},
		{content: <><span style={{color: LIT}}>Φ = B<Sub>∥</Sub>A = BA cos θ</span>, θ from the normal.</>, at: 6},
		{content: <>Face on: Φ = BA. Edge on: Φ = 0.</>, at: 10},
		{content: <>Angle α to the plane: <span style={{color: NAVY.ink}}>θ = 90° − α</span>.</>, at: 14},
		{content: <>Φ changes if B, A or θ changes.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Face on, full flux.</>} sub={<>Edge on, no flux. Measure θ from the normal.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
