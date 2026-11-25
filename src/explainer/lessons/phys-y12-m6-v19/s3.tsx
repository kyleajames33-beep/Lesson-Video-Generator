// Scenes 11 to 16: two attempts (the ring and rotor with a load arrow; a larger load arrow) and brief feedback
// (givens strip, the chain one stage at a time, one slate crossed slip), the handoff (the motor recap shrinks away;
// the painted copper pendulum on its painted stand swings into a field region; its last frame is exported as
// `M6V19FinalFrame` for v20) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {SpeedDial} from '../../physics/electromagnetism/induction-motor';
import {FieldRegion, Pendulum, PivotStand, Swirl, pendGeom} from '../../physics/electromagnetism/eddy';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {AMBER, FLUX, GREY, Lbl, MotorSketch, MoveArrow, Motor, NAVY, ROSE, Rotor, Shrunk, Stator, Torque, turned} from './parts';

// ---------- attempts ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => <>Explain why the rotor of an AC induction motor that is driving a load {u ? <u>cannot rotate at the same speed</u> : 'cannot rotate at the same speed'} as the rotating magnetic field produced by its stator.</>;
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>An AC induction motor is running at a steady speed. The {u ? <u>load on the motor is then increased</u> : 'load on the motor is then increased'}. Explain what happens to the rotor's speed, the slip and the current induced in the rotor.</>;
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<MotorSketch load={1} />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<MotorSketch load={1.6} phi={20} rho={0} />}><Q2 /></QuestionScene></Accent>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const torque = cue(id, "there'd be no torque"), returned = cue(id, 'and the torque, returned'), slip = cue(id, 'The classic slip'), all = cap(id, cue(id, 'no push at all'));
	const phi = 60 + 1.2 * f;
	const rho = phi - 30 * (1 - prog(f, torque, 30)) - 22 * prog(f, returned, 30);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={270} givens={<>driving a load; rotating stator field</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 360, display: 'flex', flexDirection: 'column', gap: 18, width: 1120}}>
				<Row at={torque - 20} size={38} style={{whiteSpace: 'normal'}}><AnswerBox at={torque}><span>same speed → no relative motion → Φ through rotor loops constant → ε = 0, I = 0 → no torque</span></AnswerBox></Row>
				<Row at={returned - 10} size={38} style={{whiteSpace: 'normal'}}><AnswerBox at={returned}><span>→ load and friction slow the rotor → slip → torque returns</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<g transform="translate(1300 360) scale(0.72)">
					<rect x={0} y={0} width={680} height={600} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<Motor cx={340} cy={290} r={200} phi={phi} rho={rho} lines={1} currents={1.2 * prog(f, returned, 20)} forces={1.2 * prog(f, returned, 20)} rotorR={130} />
				</g>
			</FrameSvg>
			<Lbl x={1545} y={830} at={torque} out={returned} color={FLUX} size={28} anchor="middle">same speed: no sliding</Lbl>
			<Lbl x={1545} y={830} at={returned + 6} color={AMBER.ink} size={28} anchor="middle">lagging: torque again</Lbl>
			<CrossedChip x={96} y={830} at={slip} crossAt={all} size={32} caption="friction needs a push; the lag makes the push">friction causes the lag</CrossedChip>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const incr = cue(id, 'so the slip increases'), current = cue(id, 'a bigger rotor current'), lower = cue(id, 'at a lower speed'), slip = cue(id, 'The slip here is saying'), old = cap(id, cue(id, 'to its old speed'));
	const v = 0.57 - 0.2 * prog(f, incr, 30);
	const phi = 40 + 1.4 * f;
	const rho = 10 + turned(f, g => 1.4 * (0.95 - 0.07 * prog(g, incr, 30)));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={270} givens={<>steady speed; load increased</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 360, display: 'flex', flexDirection: 'column', gap: 16, width: 1100}}>
				<Row at={incr - 10} size={40}>load ↑ → rotor speed ↓ → slip ↑</Row>
				<Row at={current - 10} size={40}>→ faster flux change → ε ↑ → I (rotor) ↑</Row>
				<Row at={lower - 10} size={40}><AnswerBox at={lower}><span style={{whiteSpace: 'nowrap'}}>→ torque ↑ → steady at a lower speed</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<rect x={1250} y={360} width={580} height={470} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<Stator cx={1400} cy={560} r={110} phi={phi} arrow={0} />
				<Rotor cx={1400} cy={560} r={72} rho={rho} phi={phi} currents={0.8 + 0.6 * prog(f, current, 20)} lines={0.8} />
				<SpeedDial cx={1690} cy={500} r={80} value={v} mark={0.91} />
			</FrameSvg>
			<Lbl x={1690} y={640} at={-30} color={GREY.ink} size={26} anchor="middle">rotor speed</Lbl>
			<Lbl x={1400} y={740} at={current} color={ROSE.ink} size={26} anchor="middle">bigger rotor currents</Lbl>
			<CrossedChip x={96} y={830} at={slip} crossAt={old} size={32} caption="more torque needs more slip">the rotor speeds back up to its old speed</CrossedChip>
		</>
	);
};

// ---------- 15. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, drags: cue(id, 'the field moves and drags the metal along'), flip: cue(id, 'Now flip it round'), still: cue(id, 'Hold the magnet still'), plate: cue(id, 'copper plate swinging'), same: cue(id, 'same kind of currents'), back: cue(id, 'drag the moving metal back'), brake: cue(id, 'A brake, with no contact at all'), work: cap(id, cue(id, 'How does it work')), end: dur(id) - 1};
})();
/** The pendulum rig shared with v20's opening: pivot, scale, stand and the field region. */
export const RIG = {px: 960, py: 240, s: 0.48, bossW: 190, baseY: 870, region: {x: 810, y: 560, w: 300, h: 230}, pose: -27};
const RECAP = {from: {cx: 560, cy: 560, r: 250}, to: {cx: 250, cy: 340, r: 92}};
/** The handoff board at scene frame f (`final`: every label already written, for the next video's first frame). */
export const HandoffBoard: React.FC<{f: number; final?: boolean; chip?: boolean; heading?: boolean}> = ({f, final = false, chip = true, heading = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const k = final ? 1 : prog(f, H.flip, 30);
	const cx = RECAP.from.cx + (RECAP.to.cx - RECAP.from.cx) * k, cy = RECAP.from.cy + (RECAP.to.cy - RECAP.from.cy) * k, r = RECAP.from.r + (RECAP.to.r - RECAP.from.r) * k;
	const phi = 30 + 1.6 * f, rho = 30 + 1.52 * f - 20;
	const rig = final ? 1 : prog(f, H.still, 16);
	const pend = final ? 1 : prog(f, H.plate, 14);
	const theta = final ? RIG.pose : kf(f, [[H.plate, -40], [H.plate + 60, RIG.pose]]);
	const pg = pendGeom(RIG.px, RIG.py, RIG.s, theta);
	const lead: [number, number] = [pg.c[0] + pg.hw * Math.cos((theta * Math.PI) / 180), pg.c[1] - pg.hw * Math.sin((theta * Math.PI) / 180)];
	const R = RIG.region;
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.brake} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.brake + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<Motor cx={cx} cy={cy} r={r} phi={phi} rho={rho} lines={1 - k} currents={1 - k} forces={1 - k} />
				<Torque cx={cx} cy={cy} r={r * 0.6 + 18} at={rho + 30} size={0.8} opacity={final ? 1 : prog(f, H.drags, 14)} />
				<PivotStand px={RIG.px} py={RIG.py} bossW={RIG.bossW} baseY={RIG.baseY} opacity={rig} />
				<FieldRegion x={R.x} y={R.y} w={R.w} h={R.h} color={FLUX} opacity={rig} />
				<Pendulum px={RIG.px} py={RIG.py} s={RIG.s} deg={theta} opacity={pend} />
				<Swirl cx={lead[0] - 26} cy={lead[1] + 8} rx={22} ry={48} sense={1} color={ROSE.stroke} phase={f * 0.08} width={5} opacity={final ? 1 : prog(f, H.same, 14)} />
				<MoveArrow from={[pg.c[0] - 150, R.y - 70]} to={[pg.c[0] + 40, R.y - 70]} opacity={pend} />
				{final || f >= H.back ? <Arrow2 from={[pg.c[0] - 20, pg.c[1] + 40]} to={[pg.c[0] - 190, pg.c[1] + 40]} color={AMBER.stroke} width={8} head={26} dash="16 10" opacity={final ? 1 : prog(f, H.back, 12)} /> : null}
				{final || f >= H.brake ? <path d={`M${R.x - 120},${R.y + R.h + 16} l0,14 l${R.w + 120},0 l0,-14`} fill="none" stroke={NAVY.stroke} strokeWidth={5} opacity={final ? 1 : prog(f, H.brake + 10, 12)} /> : null}
				{final || f >= H.work ? <text x={RIG.px - 360} y={R.y + 40} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 72, fill: NAVY.ink}}>?</text> : null}
			</FrameSvg>
			<Lbl x={cx} y={cy + r + 70} at={at(H.drags)} color={AMBER.ink} size={28} anchor="middle">dragged along</Lbl>
			{final ? null : <><Chip x={1000} y={360} at={10} out={H.flip} size={34} w={820} color={FLUX}>the rotor lags, so the field slides past it</Chip><Chip x={1000} y={450} at={50} out={H.flip} size={34} w={820} color={ROSE.ink}>→ induced currents in the bars</Chip><Chip x={1000} y={540} at={H.drags} out={H.flip} size={34} w={820} color={AMBER.ink}>→ forces drag the rotor along</Chip><HandTag x={1000} y={680} text="the field moves, the metal is dragged" at={H.drags + 10} out={H.flip} size={36} color={AMBER.ink} /></>}
			<Chip x={R.x + R.w + 50} y={R.y} at={at(H.still + 6)} size={28} w={560} color={FLUX} border={FLUX}>B into the screen: magnet poles in front of and behind the plate</Chip>
			<Lbl x={R.x - 30} y={R.y - 120} at={at(H.plate + 10)} color={AMBER.ink} size={28} anchor="end">swinging</Lbl>
			<Lbl x={RIG.px - 420} y={R.y + 150} at={at(H.back)} color={AMBER.ink} size={34}>F = ?</Lbl>
			<HandTag x={R.x + R.w + 50} y={R.y + R.h + 26} text="no contact" at={at(H.brake + 14)} size={36} color={NAVY.ink} />
			{chip ? <Chip x={96} y={890} at={at(H.work)} size={30} w={1728} color={INK} border={INK}>Next: how can a moving conductor be braked without contact?</Chip> : null}
		</>
	);
};
/** v19's final frame for v20. */
export const M6V19FinalFrame: React.FC = () => <HandoffBoard f={H.end} final />;
export const V19_END = H.end;
export const S15: React.FC = () => <HandoffBoard f={useCurrentFrame()} />;

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>Stator coils with AC out of step make a <span style={{color: FLUX}}>rotating field</span>.</>, at: 2},
		{content: <>Cage rotor: closed loops, no connection to the supply.</>, at: 6},
		{content: <>The field sliding past induces <span style={{color: ROSE.ink}}>rotor currents</span>; Lenz drags the rotor along.</>, at: 10},
		{content: <><span style={{color: AMBER.ink}}>No slip, no torque</span>: a working motor always lags.</>, at: 14},
		{content: <>More load: more slip, more current, more torque.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<><span style={{color: AMBER.ink}}>No slip,</span> <span style={{color: ROSE.ink}}>no grip.</span></>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
