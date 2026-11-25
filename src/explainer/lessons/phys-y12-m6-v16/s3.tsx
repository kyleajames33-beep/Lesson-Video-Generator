// Scenes 11 to 16: two attempts (an answer-free end-on sketch; the commutator end of the painted motor, cropped at
// uniform scale) and brief feedback (givens strip, one stage at a time, one slate crossed slip), the handoff (the lab
// power pack, a coded ammeter in the red lead and the three-quarter motor: the needle jumps high at switch-on and settles
// lower as the coil speeds up; its last frame is exported as `M6V16FinalFrame` for v17) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Plate} from '../../physics/electromagnetism/bench';
import {ArcBetween} from '../../physics/electromagnetism/flux';
import {DC_MOTOR} from '../../physics/electromagnetism/transformer';
import {RingCloseUp, endOnGeom, commSign} from '../../physics/electromagnetism/motor';
import {A1, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {AMBER, Coil, FLUX, HandoffLayout, Lbl, METER, NAVY, ORANGE, Shrunk, fx, sci} from './parts';

type Pt = [number, number];

// ---------- attempts ----------
const Q1: React.FC = () => <>A rectangular coil of 120 turns measures 4.0 cm × 2.5 cm. It carries a current of 1.5 A in a uniform magnetic field of 0.25 T. Calculate the magnitude of the torque on the coil when the plane of the coil makes an angle of 60° with the magnetic field.</>;
const Q2: React.FC = () => <>Explain the function of the split-ring commutator in a simple DC motor.</>;
/** Attempt 1's sketch: the coil end on with its plane at 60 degrees to the field; no normal (answer-free). */
const Sketch1: React.FC<{normal?: number; arc?: number}> = ({normal = 0, arc = 0}) => {
	const cx = 330, cy = 300, R = 170;
	const g = endOnGeom(cx, cy, R, A1.theta);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={650} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<Coil cx={cx} cy={cy} R={R} alpha={A1.theta} plusI={0} fieldW={290} rows={[-200, -100, 100, 200]} normal={normal} arc={arc} wireR={24} />
			<ArcBetween c={g.axle} a={[g.axle[0] - 1, g.axle[1]]} b={g.plus} r={90} color={INK} width={4} />
			<text x={cx - 150} y={cy - 70} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: INK}}>60°</text>
			<text x={cx + 250} y={cy - 210} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: FLUX}}>B</text>
			<text x={cx} y={cy + 250} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 32, fill: INK}}>coil seen end on</text>
		</svg>
	);
};
/** Attempt 2's picture: the commutator end of the painted motor, cropped at uniform scale, unlabelled. */
const Sketch2: React.FC = () => {
	const s = 600 / 415, ox = 40, oy = 120;
	const p = {x: ox - (560 - DC_MOTOR.box[0]) * s, y: oy - (610 - DC_MOTOR.box[1]) * s, w: (DC_MOTOR.box[2] - DC_MOTOR.box[0]) * s};
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<defs><clipPath id="v16-a2crop"><rect x={ox} y={oy} width={600} height={304} rx={18} /></clipPath></defs>
			<rect x={ox - 6} y={oy - 6} width={612} height={316} rx={22} fill="#1f1d1a" />
			<g clipPath="url(#v16-a2crop)"><Plate spec={DC_MOTOR} p={p} /></g>
		</svg>
	);
};
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<Sketch1 />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<Sketch2 />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 420, scale = 0.86}) => <div style={{position: 'absolute', left: 1280, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const area = cue(id, 'The area is one point zero'), deg = cue(id, 'so the normal is at thirty degrees'), times = cue(id, 'So the torque is n I A B'), metres = cue(id, 'newton metres'), slip = cue(id, 'The classic slip'), two = cap(id, cue(id, 'which gives three point nine'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>n = 120, 4.0 cm × 2.5 cm; <span style={{color: ORANGE.ink}}>I = 1.5 A</span>; <span style={{color: FLUX}}>B = 0.25 T</span>; <u>plane at 60°</u></>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 10, width: 1160}}>
				<Row at={area} ageAt={times} size={44} oldSize={36}>A = 0.040 × 0.025 = {sci(A1.A, 1)} m²</Row>
				<Row at={deg} ageAt={times} size={44} oldSize={36}><span style={{color: NAVY.ink}}>θ (normal to B) = 90° − 60° = 30°</span></Row>
				<Row at={times} size={44}>τ = 120 × 1.5 × {sci(A1.A, 1)} × 0.25 × sin 30°</Row>
				<Row at={metres - 30} size={48}>&nbsp;&nbsp;= {sci(A1.at, 2)} ≈ <AnswerBox at={metres}><span style={{whiteSpace: 'nowrap'}}>{sci(A1.at, 1)} N m</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={860} at={slip} crossAt={two} size={32} caption="θ is measured from the area normal">τ = {fx(A1.max, 3)} × sin 60° = {sci(A1.slip, 1)} N m</CrossedChip>
			<Picture top={420} scale={0.84}><Sketch1 normal={prog(f, deg, 14)} arc={prog(f, deg + 8, 12)} /></Picture>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const without = cue(id, 'Without it'), swaps = cue(id, 'it swaps which half touches each brush'), coil = cue(id, 'That reverses the current in the coil'), cont = cue(id, 'giving continuous rotation'), slip = cue(id, 'The classic slip is saying'), dc = cap(id, cue(id, 'The supply is already DC'));
	const alpha = 70 - Math.max(0, f - swaps) * 2.2;
	const pI = (Math.abs(Math.sin((alpha * Math.PI) / 180)) < 0.06 ? 0 : commSign(alpha)) as 1 | -1 | 0;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={250} givens={<>simple DC motor; split-ring commutator; <u>function</u></>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 360, display: 'flex', flexDirection: 'column', gap: 16, width: 1120}}>
				<Row at={without} ageAt={coil} size={44} oldSize={36} style={{whiteSpace: 'normal'}}>without it: τ reverses past the dead point → rocks</Row>
				<Row at={coil} ageAt={cont} size={44} oldSize={36} style={{whiteSpace: 'normal'}}>every half turn the connections swap → I in the coil reverses → the forces reverse</Row>
				<Row at={cont - 20} size={48} style={{whiteSpace: 'normal'}}><AnswerBox at={cont}><span>τ keeps the same sense → continuous rotation</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={860} at={slip} crossAt={dc} size={32} caption="it reverses the current in the coil">it changes AC into DC</CrossedChip>
			<FrameSvg>
				<rect x={1250} y={330} width={600} height={560} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<Coil cx={1420} cy={560} R={120} alpha={alpha} plusI={pI} fieldW={150} rows={[-150, -75, 75, 150]} forces={1} forceLen={70} wireR={22} />
				<RingCloseUp cx={1700} cy={560} r={70} alpha={alpha} current={pI === 0 ? 0 : 1} currentColor={ORANGE.stroke} ringColors={['#c8742c', '#6e4126']} leads={false} />
			</FrameSvg>
			<Lbl x={1550} y={830} at={swaps} color={INK} size={28} anchor="middle">the halves swap brushes each half turn</Lbl>
		</>
	);
};

// ---------- 15. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, amm: cue(id, 'put an ammeter in the supply lead'), on: cue(id, 'and switch on'), large: cue(id, 'At first the current is large'), falls: cue(id, 'the current falls'), why: cap(id, cue(id, 'So why does a spinning DC motor')), end: dur(id) - 1};
})();
/** Spin rate (degrees per frame) through the handoff: turning, slowed by switching off, then a restart. */
const rateAt = (f: number) => kf(f, [[0, 6], [H.amm, 6], [H.on - 4, 0], [H.on + 20, 0.6], [H.falls, 2.4], [H.falls + 70, 6]]);
const ANG: number[] = (() => { const out = [90]; for (let f = 1; f <= H.end + 1; f++) out.push(out[f - 1] - rateAt(f)); return out; })();
/** The handoff board at scene frame f (`final`: every label already written, for the next video's first frame). */
export const HandoffBoard: React.FC<{f: number; final?: boolean; chip?: boolean; heading?: boolean}> = ({f, final = false, chip = true, heading = true}) => {
	const T0 = final ? -60 : 0;
	const at = (x: number) => (final ? -60 : x);
	const w = rateAt(f);
	const on = f >= H.on;
	const meter = !on ? 0 : f < H.falls ? kf(f, [[H.on, 0], [H.on + 8, 0.86]]) : 0.86 - 0.64 * Math.min(1, w / 6);
	const swap = final ? -1 : H.why;
	return (
		<>
			{!final ? <SceneHeading text={HEAD} at={-200} out={swap} size={HEAD_SIZE} /> : null}
			{heading ? <SceneHeading text={HEAD_NEXT} at={final ? -200 : swap + 8} size={HEAD_SIZE} /> : null}
			<FrameSvg>
				<HandoffLayout alpha={f <= H.end ? ANG[Math.max(0, Math.round(f))] : ANG[H.end] - 6 * (f - H.end)} t={f} meter={meter} ghost={f >= H.on + 12 ? 0.86 : undefined} meterO={final ? 1 : prog(f, H.amm, 14)} dots={f < H.amm ? 1 : on ? 1 : 1 - prog(f, H.amm, 20)} gap={on ? 30 / Math.max(0.25, meter / 0.86) : 40} spinO={Math.min(1, w / 2)} />
			</FrameSvg>
			<Lbl x={METER.x + 70} y={METER.y - 120} at={at(H.on + 14)} color={INK} size={30}>at switch-on</Lbl>
			<Lbl x={METER.x - 70} y={METER.y - 120} at={at(H.falls + 50)} color={INK} size={30} anchor="end">spinning</Lbl>
			<Lbl x={METER.x} y={METER.y - 150} at={at(H.falls + 70)} color={NAVY.ink} size={72} anchor="middle">?</Lbl>
			<Lbl x={LVLBL[0]} y={LVLBL[1]} at={T0 - 30} color={NAVY.ink} size={30}>lab power pack</Lbl>
			{!final ? <>
				<Chip x={96} y={190} at={0} out={H.amm} size={32} w={760}>forces on the coil make a torque</Chip>
				<Chip x={96} y={260} at={10} out={H.amm} size={32} w={760}>the split ring flips the current every half turn</Chip>
				<HandTag x={110} y={330} text="so the torque never turns it back" at={30} out={H.amm} size={34} color={AMBER.ink} />
				<HandTag x={METER.x + 110} y={METER.y + 60} text="ammeter in the supply lead" at={H.amm + 6} out={H.on + 30} size={30} color={INK} />
			</> : null}
			{chip ? <Chip x={96} y={890} at={at(H.why)} size={30} w={1728} color={INK} border={INK}>Next: why does a spinning DC motor draw less current?</Chip> : null}
		</>
	);
};
const LVLBL: Pt = [130, 380];
/** The handoff's last frame and the coil angle there (v17 continues the spin from it). */
export const V16_END = {f: H.end, alpha: ANG[H.end]};
/** v16's final frame for v17. */
export const M6V16FinalFrame: React.FC = () => <HandoffBoard f={H.end} final />;
export const S15: React.FC = () => {
	const f = useCurrentFrame();
	return <HandoffBoard f={f} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>Split ring: two half rings turn with the coil; <span style={{color: '#7d7a74'}}>brushes stay still</span>.</>, at: 2},
		{content: <>Opposite currents in the long sides: <span style={{color: AMBER.ink}}>opposite forces, a turning pair</span>.</>, at: 6},
		{content: <><span style={{color: AMBER.ink}}>τ = nIAB sin θ</span>, θ from the <span style={{color: NAVY.ink}}>area normal</span> to B.</>, at: 10},
		{content: <>Edge on: maximum torque. Face on: zero (dead point).</>, at: 14},
		{content: <>Inertia carries the coil through the dead point.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Every half turn, <span style={{color: ORANGE.ink}}>flip the current</span>.</>} sub={<>Face on, no torque. Edge on, full torque.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
