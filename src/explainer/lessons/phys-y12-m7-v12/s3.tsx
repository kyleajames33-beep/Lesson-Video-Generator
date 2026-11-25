// Scenes 13 to 18: attempt 1 (the painted spacecraft, the car on a roundabout and the lift) and its feedback (arrows on
// the car's path and the lift), attempt 2 (a small interferometer schematic) and its feedback (the fringe strip with
// the expected and observed shifts), the handoff (a light clock on the spacecraft: straight up and down on board, a
// longer slanted path from Earth, from the relativity engine's light clock; its last frame is exported as
// `M7V12FinalFrame` for the next video) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, EARTH, LPlate} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {CAR_TOP, FrameBadge, FringeStrip, Interferometer, LIFT_CAR, LightClock, Ship} from '../../physics/light/frames';
import {lightClockAt, lightClockTicks} from '../../sims/relativity';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, MM_EXPECTED, cap, cue, dur, hold} from './common';
import {AMBER, GREY, INK, Lbl, ORANGE, Shrunk, TEAL} from './parts';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Classify each of the following as an inertial or a non-inertial frame of reference. Justify each answer. (a) A spacecraft coasting at {U('constant velocity')} with its engines off. (b) A car travelling around a roundabout at {U('constant speed')}. (c) A lift {U('slowing down')} as it arrives at a floor.</>;
};
const FramesPic: React.FC<{w?: number; arrows?: {car?: number; lift?: number}}> = ({w = 678, arrows}) => {
	const car: Place = {x: 110, y: 230, w: 200};
	const lift: Place = {x: 470, y: 250, w: 150};
	const lh = (lift.w * (LIFT_CAR.box[3] - LIFT_CAR.box[1])) / (LIFT_CAR.box[2] - LIFT_CAR.box[0]);
	return (
		<svg width={w} height={560} style={{overflow: 'visible'}}>
			<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<Ship p={{x: 150, y: 40, w: 380}} />
			<circle cx={210} cy={380} r={130} fill="none" stroke="#9a958c" strokeWidth={26} />
			<circle cx={210} cy={380} r={130} fill="none" stroke="#fffdf8" strokeWidth={2} strokeDasharray="12 12" />
			<LPlate spec={CAR_TOP} p={car} />
			<line x1={lift.x - 16} y1={lift.y - 30} x2={lift.x - 16} y2={lift.y + lh + 20} stroke={INK} strokeWidth={4} />
			<line x1={lift.x + lift.w + 16} y1={lift.y - 30} x2={lift.x + lift.w + 16} y2={lift.y + lh + 20} stroke={INK} strokeWidth={4} />
			<LPlate spec={LIFT_CAR} p={lift} />
			{arrows?.car ? <g opacity={arrows.car}><line x1={210} y1={258} x2={210} y2={330} stroke={ORANGE.stroke} strokeWidth={7} /><path d="M210,350 l-12,-24 h24 z" fill={ORANGE.stroke} /></g> : null}
			{arrows?.lift ? <g opacity={arrows.lift}><line x1={lift.x + lift.w + 50} y1={lift.y + lh - 40} x2={lift.x + lift.w + 50} y2={lift.y + 40} stroke={ORANGE.stroke} strokeWidth={7} /><path d={`M${lift.x + lift.w + 50},${lift.y + 20} l-12,24 h24 z`} fill={ORANGE.stroke} /></g> : null}
			<text x={30} y={70} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>(a)</text>
			<text x={30} y={300} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>(b)</text>
			<text x={420} y={300} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>(c)</text>
		</svg>
	);
};
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<FramesPic />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const acc = cue(id, 'accelerates'), down = cue(id, 'down'), dir = cap(id, cue(id, 'includes direction'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>(a) spacecraft coasting at constant velocity, engines off | (b) car on a roundabout at constant speed | (c) lift slowing as it arrives at a floor</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 16, width: 1080}}>
				<Row at={acc - 20} size={38}><AnswerBox at={acc - 14}><span style={{whiteSpace: 'nowrap'}}>(a) inertial: constant velocity</span></AnswerBox></Row>
				<Row at={acc - 6} size={38} style={{whiteSpace: 'normal'}}><AnswerBox at={acc}><span>(b) non-inertial: direction changes → centripetal acceleration</span></AnswerBox></Row>
				<Row at={down - 6} size={38}><AnswerBox at={down}><span style={{whiteSpace: 'nowrap'}}>(c) non-inertial: decelerating</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1190, top: 300}}><FramesPic w={640} arrows={{car: prog(f, acc + 10, 12), lift: prog(f, down + 10, 12)}} /></div>
			<Lbl x={1250} y={880} at={acc + 10} color={ORANGE.ink} size={28}>acceleration</Lbl>
			<CrossedChip x={96} y={800} at={dir} crossAt={dir + 14} size={30} caption="constant speed ≠ constant velocity">car: inertial (constant speed)</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>{"Evaluate the statement: 'The Michelson-Morley experiment "}{u ? <u>proved</u> : 'proved'}{' that the aether '}{u ? <u>does not exist</u> : 'does not exist'}{".'"}</>;
const IfoPic: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Interferometer c={[330, 330]} L={190} out={1} back={1} beam={AMBER.stroke} />
		<text x={30} y={70} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>Michelson-Morley interferometer</text>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={48} marks={3} picture={<IfoPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const ae = cue(id, 'stationary aether'), wit = cue(id, 'without it'), pr = cap(id, cue(id, 'proved'));
	const FS = {x: 1260, y: 700, w: 560, h: 80};
	const fx0 = FS.x + (2.5 / 6) * FS.w, fxE = FS.x + ((2.5 + MM_EXPECTED) / 6) * FS.w;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={270} givens={<>statement: the Michelson-Morley experiment proved that the aether does not exist</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 380, display: 'flex', flexDirection: 'column', gap: 18, width: 1100}}>
				<Row at={ae - 6} size={34} style={{whiteSpace: 'normal'}}><AnswerBox at={ae}><span>expected ≈ 0.4 fringe, detectable ≈ 0.01, observed: no significant shift → strong evidence against a stationary aether</span></AnswerBox></Row>
				<Row at={wit - 6} size={34} style={{whiteSpace: 'normal'}}><AnswerBox at={wit}><span>cannot prove non-existence; the contraction fix was added to fit this result, not independent evidence; relativity explains the result with no aether</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<Interferometer c={[1500, 470]} L={150} out={1} back={1} beam={AMBER.stroke} />
				<FringeStrip x={FS.x} y={FS.y} w={FS.w} h={FS.h} fringes={6} />
				<line x1={fx0} y1={FS.y - 14} x2={fx0} y2={FS.y + FS.h + 14} stroke={INK} strokeWidth={4} />
				<line x1={fxE} y1={FS.y - 24} x2={fxE} y2={FS.y + FS.h + 24} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="8 6" />
				{f >= ae ? <ellipse cx={fx0} cy={FS.y + FS.h / 2} rx={40} ry={FS.h / 2 + 24} fill="none" stroke={INK} strokeWidth={5} opacity={prog(f, ae + 6, 12)} /> : null}
			</FrameSvg>
			<Lbl x={FS.x} y={FS.y + FS.h + 60} at={0} color={GREY.ink} size={28}>expected 0.4 (dashed); observed ≈ 0</Lbl>
			<CrossedChip x={96} y={800} at={pr} crossAt={pr + 14} size={30} caption="strong evidence, not proof">proved the aether does not exist</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, clock: cue(id, 'a pulse bouncing between two mirrors'), ud: cue(id, 'straight up and down'), side: cue(id, 'the ship moves sideways during each bounce'), same: cue(id, 'at the same speed'), next: cap(id, cue(id, 'So how can two observers')), end: dur(id) - 1};
})();
const CLK = {h: 200, base: 560, beta: 0.6};
const SHIP_X0 = 420, SHIP_Y = 520, SHIP_W = 800;
const HULL_C = (SHIP_W * (1070 - 285)) / (1768 - 285);
const EA17 = {cx: 150, cy: 760, d: 140};
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard12: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const tk = lightClockTicks({height: 1, beta: CLK.beta});
	const rest = lightClockAt({height: 1, beta: 0}, (final ? 0 : kf(f, [[HD.clock, 0], [HD.clock + 50, 1]], false)) * tk.rest);
	const mv = final ? 1 : kf(f, [[HD.side, 0], [HD.side + 80, 1]], false);
	const moving = lightClockAt({height: 1, beta: CLK.beta}, mv * tk.moving);
	const dx = moving.x * CLK.h;
	const shipX = SHIP_X0 + dx;
	const cx0 = SHIP_X0 + HULL_C, cx = cx0 + dx;
	const pulseU = mv > 0 ? moving.y : rest.y;
	const zig = moving.path.map(([x, y], i) => `${i ? 'L' : 'M'}${cx0 + x * CLK.h},${CLK.base - 8 - y * (CLK.h - 16)}`).join(' ');
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<Ship p={{x: shipX, y: SHIP_Y, w: SHIP_W}} />
				<Disc spec={EARTH} cx={EA17.cx} cy={EA17.cy} d={EA17.d} />
				<FrameBadge x={EA17.cx + 90} y={EA17.cy} color={INK} label="Earth frame" t={final ? 0 : f / 30} scale={0.85} size={32} />
				<FrameBadge x={shipX + 470} y={SHIP_Y + 290} color={TEAL.stroke} label="ship frame" t={final ? 0 : f / 30} scale={0.85} size={32} />
				<g opacity={o(HD.clock)}>
					<line x1={cx - 40} y1={CLK.base} x2={cx - 40} y2={SHIP_Y + 100} stroke={TEAL.stroke} strokeWidth={3} />
					<line x1={cx + 40} y1={CLK.base} x2={cx + 40} y2={SHIP_Y + 100} stroke={TEAL.stroke} strokeWidth={3} />
					<LightClock x={cx} y={CLK.base} h={CLK.h} u={pulseU} w={110} pulse={AMBER.stroke} />
				</g>
				{final || f >= HD.ud ? <line x1={cx} y1={CLK.base - 8} x2={cx} y2={CLK.base - 8 - (CLK.h - 16) * (final ? 1 : prog(f, HD.ud, 20))} stroke={TEAL.stroke} strokeWidth={5} /> : null}
				{final || f >= HD.side ? <path d={zig} fill="none" stroke={INK} strokeWidth={5} /> : null}
			</FrameSvg>
			<Lbl x={cx + 70} y={CLK.base - CLK.h / 2 + 40} at={at(HD.ud + 10)} color={TEAL.ink} size={30}>ship: up and down</Lbl>
			<Lbl x={cx0 - 20} y={CLK.base - CLK.h - 40} at={at(HD.side + 40)} color={INK} size={30} anchor="end">Earth: slanted, longer</Lbl>
			<Lbl x={cx + 14} y={CLK.base - CLK.h / 2 - 20} at={at(HD.same)} color={AMBER.ink} size={34}>c</Lbl>
			<Lbl x={cx0 + dx / 2 - 40} y={CLK.base - CLK.h / 2 - 40} at={at(HD.same + 6)} color={AMBER.ink} size={34}>c</Lbl>
			<Lbl x={EA17.cx + 90} y={EA17.cy + 64} at={at(HD.next)} color={INK} size={30}>time per tick?</Lbl>
			<Lbl x={shipX + 470} y={SHIP_Y + 354} at={at(HD.next + 4)} color={TEAL.ink} size={30}>time per tick?</Lbl>
			{chip ? <Chip x={96} y={890} at={at(HD.next)} size={30} w={1728} color={INK} border={INK}>Next: how can two observers measure different elapsed times?</Chip> : null}
		</>
	);
};
/** v12's final frame for the next video. */
export const M7V12FinalFrame: React.FC = () => <HandoffBoard12 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard12 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <>Inertial frame: not accelerating; first law holds.</>, at: 2},
		{content: <>No experiment inside detects uniform motion.</>, at: 6},
		{content: <>Michelson-Morley: no aether wind (strong evidence, not proof).</>, at: 10},
		{content: <><span style={{color: TEAL.ink}}>Postulate 1</span>: same laws in every inertial frame.</>, at: 14},
		{content: <><span style={{color: AMBER.ink}}>Postulate 2</span>: same c for every inertial observer.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<><span style={{color: TEAL.ink}}>Same laws,</span> <span style={{color: AMBER.ink}}>same light.</span></>} sub="Every inertial frame has the same laws (Maxwell's included), so every inertial observer measures the same c." picture={<svg width={580} height={220}><Ship p={{x: 300, y: 70, w: 260}} /><Disc spec={EARTH} cx={90} cy={130} d={120} /><circle cx={230} cy={130} r={10} fill={AMBER.stroke} /><text x={200} y={190} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: AMBER.ink}}>c</text></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
