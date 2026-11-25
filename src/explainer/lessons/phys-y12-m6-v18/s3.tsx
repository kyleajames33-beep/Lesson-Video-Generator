// Scenes 11 to 16: two attempts (an answer-free coil edge on to the field; a coil whose ring end is hidden) and brief
// feedback (givens strip, one stage at a time, one slate crossed slip), the handoff (a ring of stator coils with a
// turning field, the painted cage rotor and a coded end-on rotor that lags; its last frame is exported as
// `M6V18FinalFrame` for v19) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Plate} from '../../physics/electromagnetism/bench';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {EndOnCage, EndOnCoil, FnGraph, RingCloseUp, StatorRing, endOnGeom} from '../../physics/electromagnetism/motor';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold, phiOf} from './common';
import {AMBER, CAGE_ROTOR, COPPER_INK, FLUX, GREY, Gen, Lbl, MiniTrace, NAVY, ORANGE, ROSE, Shrunk} from './parts';

// ---------- attempts ----------
const Q1: React.FC = () => <>A rectangular coil rotates at a constant rate in a uniform magnetic field. At one instant the plane of the coil is parallel to the magnetic field. (a) State whether the magnetic flux through the coil is a maximum or zero at this instant. (b) State whether the induced emf is a maximum or zero at this instant. Explain both answers.</>;
const Q2: React.FC = () => <>Compare the construction and the output of a simple AC generator and a simple DC generator. In your answer, describe the shape of each output when plotted against time.</>;
/** Attempt 1's picture: field arrows and the coil drawn edge on to them (no normal, no flux tag). */
const Sketch1: React.FC<{motion?: number}> = ({motion = 0}) => {
	const cx = 330, cy = 300, R = 170;
	const g = endOnGeom(cx, cy, R, 90);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={650} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<EndOnCoil cx={cx} cy={cy} R={R} alpha={90} plusI={0} fieldColor={FLUX} coilColor={ORANGE.stroke} forceColor={AMBER.stroke} normalColor={NAVY.stroke} fieldW={290} rows={[-200, -100, 100, 200]} wireR={24} />
			{motion > 0.01 ? <g opacity={motion}><Arrow2 from={[g.plus[0], g.plus[1] - 30]} to={[g.plus[0], g.plus[1] - 130]} color={AMBER.stroke} width={7} head={22} /><Arrow2 from={[g.minus[0], g.minus[1] + 30]} to={[g.minus[0], g.minus[1] + 130]} color={AMBER.stroke} width={7} head={22} /></g> : null}
			<text x={cx + 250} y={cy - 210} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: FLUX}}>B</text>
			<text x={cx} y={cy + 250} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 34, fill: INK}}>coil seen end on</text>
		</svg>
	);
};
/** Attempt 2's picture: the coil between two poles with its ring end hidden behind a grey "?" box. */
const Sketch2: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<rect x={10} y={20} width={650} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Gen c={{cx: 390, cy: 250, k: 100}} alpha={40} ring="none" />
		<rect x={210} y={250} width={180} height={170} rx={14} fill="#d9d4cb" stroke={GREY.stroke} strokeWidth={4} />
		<text x={300} y={362} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 80, fill: GREY.ink}}>?</text>
	</svg>
);
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={3} picture={<Sketch1 />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={4} picture={<Sketch2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const zero = cue(id, 'so the flux is zero'), fastest = cue(id, 'But here the flux is changing fastest'), max = cue(id, 'So the emf is a maximum'), slip = cue(id, 'The classic slip'), rate = cap(id, cue(id, "It's the rate of change that counts"));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={370} givens={<>constant rate; uniform B; <u>plane ∥ B</u></>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 460, display: 'flex', flexDirection: 'column', gap: 14, width: 1150}}>
				<Row at={zero - 20} size={48}><AnswerBox at={zero}><span style={{whiteSpace: 'nowrap', color: FLUX}}>(a) Φ = 0</span></AnswerBox>&nbsp; <span style={{fontSize: '0.7em'}}>edge on: the field skims along</span></Row>
				<Row at={max - 20} size={44}><AnswerBox at={max}><span style={{whiteSpace: 'nowrap', color: ROSE.ink}}>(b) ε maximum: Φ changing fastest</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={850} at={slip} crossAt={rate} size={32} caption="ε depends on the rate of change">zero flux means zero emf</CrossedChip>
			<div style={{position: 'absolute', left: 1280, top: 440, transform: 'scale(0.8)', transformOrigin: 'top left'}}><Sketch1 motion={prog(f, fastest, 12)} /></div>
			<FrameSvg>
				<FnGraph b={{x: 1340, y: 900 - 120, w: 420, h: 110, x0: 0, x1: 360, ymin: -1.2, ymax: 1.2}} fn={u => phiOf(u)} color={FLUX} cursor={f >= max ? 90 : undefined} opacity={prog(f, max, 12)} size={24} />
			</FrameSvg>
			<Lbl x={1560} y={760} at={max} color={FLUX} size={26} anchor="middle">steepest where Φ = 0</Lbl>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const both = cue(id, 'Both have a coil turning'), zero = cue(id, 'a sine wave above and below zero'), way = cue(id, 'all one way'), slip = cue(id, 'The slip is saying'), ac = cap(id, cue(id, 'Its coil still makes AC'));
	const alpha = 2 * f;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={270} givens={<><u>construction</u>; <u>output</u> against time</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 350, width: 1700}}><Row at={both} size={40}>both: coil turning in B; <span style={{color: ROSE.ink}}>ε in the coil alternates</span></Row></div>
			<FrameSvg>
				<RingCloseUp cx={420} cy={500} r={70} alpha={alpha} slip currentColor={ORANGE.stroke} leads={false} />
				<RingCloseUp cx={1290} cy={500} r={70} alpha={alpha} currentColor={ORANGE.stroke} ringColors={['#c8742c', '#6e4126']} leads={false} />
				<g opacity={prog(f, zero - 20, 12)}><MiniTrace x={130} y={585} w={580} h={110} kind="sine" /></g>
				<g opacity={prog(f, way - 20, 12)}><MiniTrace x={1000} y={585} w={580} h={110} kind="humps" ghost /></g>
			</FrameSvg>
			<div style={{position: 'absolute', left: 96, top: 720, width: 820}}><Row at={zero - 10} size={36} style={{whiteSpace: 'normal'}}><AnswerBox at={zero}><span>AC: slip rings → sine wave (above and below 0)</span></AnswerBox></Row></div>
			<div style={{position: 'absolute', left: 960, top: 720, width: 880}}><Row at={way - 10} size={36} style={{whiteSpace: 'normal'}}><AnswerBox at={way}><span>DC: split ring swaps every ½ turn when ε = 0 → humps, one direction</span></AnswerBox></Row></div>
			<CrossedChip x={96} y={850} at={slip} crossAt={ac} size={30} caption="the coil's emf alternates in both">the DC generator's coil makes direct current</CrossedChip>
			<Lbl x={420} y={420} at={both} color={GREY.ink} size={28} anchor="middle">slip rings</Lbl>
			<Lbl x={1290} y={420} at={both} color={COPPER_INK} size={28} anchor="middle">split ring</Lbl>
		</>
	);
};

// ---------- 15. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, what: cue(id, 'what if the field itself turns'), all: cue(id, 'connected to anything at all'), drags: cue(id, 'The turning field drags the rotor'), up: cap(id, cue(id, 'But the rotor never quite keeps up')), end: dur(id) - 1};
})();
const RC = {cx: 1180, cy: 560, r: 240};
/** The handoff board at scene frame f (`final`: every label already written, for the next video's first frame). */
export const HandoffBoard: React.FC<{f: number; final?: boolean; chip?: boolean; heading?: boolean}> = ({f, final = false, chip = true, heading = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const fieldDeg = 90 + 2.2 * Math.max(0, f - H.what);
	const L0 = 2.2 * Math.max(0, H.drags - H.what);
	const rotorDeg = f < H.drags ? 90 : fieldDeg - (L0 + (26 - L0) * Math.min(1, (f - H.drags) / 50));
	const ring = final ? 1 : prog(f, H.what, 16);
	const rotor = final ? 1 : prog(f, H.all, 16);
	const lagA = (fieldDeg * Math.PI) / 180, lagB = (rotorDeg * Math.PI) / 180;
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.up} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.up + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<StatorRing cx={RC.cx} cy={RC.cy} r={RC.r} n={6} fieldDeg={fieldDeg} fieldColor={FLUX} opacity={ring} />
				<EndOnCage cx={RC.cx} cy={RC.cy} r={120} deg={rotorDeg} mark={NAVY.stroke} opacity={rotor} />
				<g opacity={rotor}>
					<Plate spec={CAGE_ROTOR} p={{x: 130, y: 470, w: 420}} />
					<Arrow2 from={[560, 560]} to={[RC.cx - 128, RC.cy]} color={NAVY.stroke} width={6} head={22} />
				</g>
				{final || f >= H.up ? <text x={RC.cx + 150 * Math.cos((lagA + lagB) / 2)} y={RC.cy - 150 * Math.sin((lagA + lagB) / 2) + 20} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 64, fill: NAVY.ink}}>?</text> : null}
			</FrameSvg>
			<Chip x={96} y={180} at={at(H.what - 10)} size={30} w={560}>generator: turning → current</Chip>
			<Chip x={96} y={250} at={at(H.what)} size={30} w={560}>motor: current → turning</Chip>
			<Lbl x={340} y={420} at={at(H.all + 10)} color={NAVY.ink} size={30} anchor="middle">same rotor, end on</Lbl>
			<HandTag x={1480} y={880} text="no wires to the rotor" at={at(H.all + 20)} size={34} color={NAVY.ink} />
			<Lbl x={RC.cx + 330} y={RC.cy - 280} at={at(H.what + 20)} color={FLUX} size={30}>turning field</Lbl>
			{chip ? <Chip x={96} y={890} at={at(H.up)} size={30} w={1728} color={INK} border={INK}>Next: why must an induction-motor rotor lag the rotating field?</Chip> : null}
		</>
	);
};
/** v18's final frame for v19. */
export const M6V18FinalFrame: React.FC = () => <HandoffBoard f={H.end} final />;
export const S15: React.FC = () => <HandoffBoard f={useCurrentFrame()} />;

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <><span style={{color: FLUX}}>Φ = BA cos θ</span>: maximum face on, zero edge on.</>, at: 2},
		{content: <><span style={{color: ROSE.ink}}>ε is biggest when Φ = 0</span>, where Φ changes fastest.</>, at: 6},
		{content: <>Both generators make AC inside the coil.</>, at: 10},
		{content: <><span style={{color: GREY.ink}}>Slip rings: AC out.</span> <span style={{color: COPPER_INK}}>Split ring: one-way humps.</span></>, at: 14},
		{content: <>Under load the coil's force opposes the turning (Lenz).</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<><span style={{color: GREY.ink}}>Slip rings keep it.</span> <span style={{color: COPPER_INK}}>Split ring flips it.</span></>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
