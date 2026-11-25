// Scenes 13 to 18: attempt 1 (pions in a coded beam pipe) and its feedback (a teal clock rides with a pion; an ink
// bracket for the lab distance), attempt 2 (the painted Earth, spacecraft and space station) and its feedback (ink clocks
// at each end, the teal clock on the ship), the handoff (the trip to the star from the ship's frame: Earth and the star
// slide past; 12 ly against 7.2 ly; its last frame is exported as `M7V13FinalFrame` for the next video) and the key
// notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, EARTH, LPlate} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {Ship} from '../../physics/light/frames';
import {STAR_WHITE} from '../../physics/light/stars';
import {BeamPipe, ClockDial, LINAC, SPACE_STATION} from '../../physics/light/relativity';
import {A1_B, A1_D, A1_G, A1_SLIP, A1_T, A1_T0, A2_B, A2_D, A2_G, A2_TE, A2_TS, ACCENT, B_TRIP, D_SHIP, G_TRIP, HEAD, HEAD_NEXT, HEAD_SIZE, TRIP_LY, T_EARTH, T_SHIP, cap, cue, dur, hold} from './common';
import {INK, Lbl, ORANGE, SLATE, Shrunk, TEAL, VArrow, fx} from './parts';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Charged pions have a mean lifetime of 26 ns when {U('measured at rest')}. In an accelerator, a beam of pions travels at {U('0.95c')}. (a) Calculate the mean lifetime of the pions in the {U('laboratory frame')}. (b) Calculate the distance the pions travel in the laboratory in this time.</>;
};
const PipePic: React.FC<{f: number; w?: number; rider?: number; bracket?: number}> = ({f, w = 678, rider = 0, bracket = 0}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<LPlate spec={LINAC} p={{x: 190, y: 96, w: 300}} />
		<text x={500} y={160} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>accelerator</text>
		<BeamPipe x={40} y={300} w={600} f={f} dot={SLATE.stroke} speed={5} />
		{rider > 0.001 ? <g opacity={rider}><ClockDial cx={60 + ((f * 2) % 520)} cy={236} r={28} t={f / 30 / A1_G} color={TEAL.stroke} /><line x1={60 + ((f * 2) % 520)} y1={264} x2={60 + ((f * 2) % 520)} y2={282} stroke={TEAL.stroke} strokeWidth={3} /></g> : null}
		<line x1={60} y1={390} x2={260} y2={390} stroke={ORANGE.stroke} strokeWidth={6} /><path d="M280,390 l-20,-11 v22 z" fill={ORANGE.stroke} />
		<text x={300} y={402} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, fill: ORANGE.ink}}>0.95c</text>
		<text x={30} y={70} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>pion beam (laboratory)</text>
		<text x={30} y={500} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, fill: INK}}>c = 3.00 × 10⁸ m s⁻¹</text>
		{bracket > 0.001 ? <g opacity={bracket}><line x1={60} y1={440} x2={620} y2={440} stroke={INK} strokeWidth={4} /><line x1={60} y1={428} x2={60} y2={452} stroke={INK} strokeWidth={4} /><line x1={620} y1={428} x2={620} y2={452} stroke={INK} strokeWidth={4} /><text x={340} y={478} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>{`≈ ${fx(A1_D)} m (lab)`}</text></g> : null}
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<PipePic f={useCurrentFrame()} />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const ns = cue(id, 'eighty three nanoseconds'), me = cue(id, 'twenty four metres'), lo = cap(id, cue(id, 'longer'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>{`t₀ = ${A1_T0} ns (proper) | v = ${A1_B}c | c = 3.00 × 10⁸ m s⁻¹`}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 14, width: 1080}}>
				<Row at={ns - 40} size={44}>{`(a) γ = 1 / √(1 − ${A1_B}²) = ${fx(A1_G, 2)}`}</Row>
				<Row at={ns - 6} size={48}><AnswerBox at={ns}>{`t = γt₀ = ${fx(A1_G, 2)} × ${A1_T0} = ${fx(A1_T)} ns`}</AnswerBox></Row>
				<Row at={me - 6} size={40}><AnswerBox at={me}>{`(b) d = vt = ${A1_B} × 3.00 × 10⁸ × ${fx(A1_T)} × 10⁻⁹ ≈ ${fx(A1_D)} m`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1190, top: 300}}><PipePic f={f} w={640} rider={prog(f, ns - 30, 12)} bracket={prog(f, me, 12)} /></div>
			<CrossedChip x={96} y={760} at={lo} crossAt={lo + 10} size={32} caption="dilated time is longer: t > t₀">{`t = ${A1_T0} / ${fx(A1_G, 2)} = ${fx(A1_SLIP, 1)} ns`}</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>A spacecraft travels at 0.60c from Earth to a space station {U('6.0 light-years')} away, as measured in {U("Earth's frame")}. (a) Calculate the time for the trip in Earth's frame. (b) Calculate the time for the trip measured by {U('a clock on the spacecraft')}. (c) State which of these is the proper time. Justify your answer.</>;
};
const TripPic: React.FC<{f: number; w?: number; clocks?: number; ring?: number}> = ({f, w = 678, clocks = 0, ring = 0}) => {
	const sp: Place = {x: 250, y: 250, w: 180};
	return (
		<svg width={w} height={560} style={{overflow: 'visible'}}>
			<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<Disc spec={EARTH} cx={120} cy={290} d={160} />
			<LPlate spec={SPACE_STATION} p={{x: 450, y: 280, w: 200}} />
			<Ship p={sp} />
			<line x1={300} y1={350} x2={400} y2={350} stroke={ORANGE.stroke} strokeWidth={6} /><path d="M420,350 l-20,-11 v22 z" fill={ORANGE.stroke} />
			<text x={300} y={400} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: ORANGE.ink}}>0.60c</text>
			<line x1={120} y1={450} x2={560} y2={450} stroke={INK} strokeWidth={4} /><line x1={120} y1={438} x2={120} y2={462} stroke={INK} strokeWidth={4} /><line x1={560} y1={438} x2={560} y2={462} stroke={INK} strokeWidth={4} />
			<text x={340} y={492} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>6.0 ly (Earth frame)</text>
			<text x={30} y={80} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>Earth, spacecraft, space station (not to scale)</text>
			{clocks > 0.001 ? <g opacity={clocks}>
				<ClockDial cx={120} cy={160} r={28} t={f / 30} color={INK} />
				<ClockDial cx={560} cy={180} r={28} t={f / 30} color={INK} />
				<ClockDial cx={340} cy={200} r={28} t={f / 30 / A2_G} color={TEAL.stroke} ring={ring} />
			</g> : null}
		</svg>
	);
};
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<TripPic f={useCurrentFrame()} />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const ty = cue(id, 'ten years'), ey = cue(id, 'eight point zero years'), co = cap(id, cue(id, 'correct'));
	const pr = cue(id, "The ship's clock measures proper time");
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>{`${fx(A2_D, 1)} ly (Earth frame) | v = 0.60c`}</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 14, width: 1080}}>
				<Row at={ty - 6} size={48}><AnswerBox at={ty}>{`(a) t = ${fx(A2_D, 1)} ly / ${fx(A2_B, 2)}c = ${fx(A2_TE)} years`}</AnswerBox></Row>
				<Row at={ey - 30} size={44}>{`(b) γ = 1 / √(1 − ${fx(A2_B, 2)}²) = ${fx(A2_G, 2)}`}</Row>
				<Row at={ey - 6} size={48}><AnswerBox at={ey}>{`t₀ = ${fx(A2_TE)} / ${fx(A2_G, 2)} = ${fx(A2_TS, 1)} years`}</AnswerBox></Row>
				<Row at={pr - 6} size={44}><AnswerBox at={pr}><span style={{color: TEAL.ink}}>{"(c) proper: the ship's clock"}</span></AnswerBox></Row>
				<Row at={pr + 10} size={30}><span style={{color: TEAL.ink}}>one clock, present at departure and arrival</span></Row>
			</div>
			<div style={{position: 'absolute', left: 1190, top: 300}}><TripPic f={f} w={640} clocks={prog(f, 0, 12)} ring={prog(f, pr + 10, 12)} /></div>
			<CrossedChip x={96} y={830} at={co} crossAt={co + 10} size={32} caption="proper = one clock at both events">{"Earth's time is proper"}</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, sw: cue(id, 'the star approach at zero point eight c'), sev: cue(id, 'seven point two light years'), tw: cue(id, 'Earth says twelve'), next: cap(id, cue(id, 'Why can a moving distance')), end: dur(id) - 1};
})();
const H = {earth: {cx: 270, cy: 430, d: 190}, star: {cx: 1700, cy: 430, d: 80}, by: 600, ty: 690, ship: {x: 800, y: 360, w: 380} as Place, slide: 110};
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard13: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const dx = -H.slide * o(HD.sw, 50);
	const L = H.star.cx - H.earth.cx, l = L * (D_SHIP / TRIP_LY);
	const pz = final ? 0 : Math.sin(Math.PI * Math.min(1, Math.max(0, (f - HD.tw) / 24)));
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<Disc spec={EARTH} cx={H.earth.cx + dx} cy={H.earth.cy} d={H.earth.d} />
				<Disc spec={STAR_WHITE} cx={H.star.cx + dx} cy={H.star.cy} d={H.star.d} />
				<Ship p={H.ship} />
				<line x1={H.earth.cx + dx} y1={H.by} x2={H.star.cx + dx} y2={H.by} stroke={INK} strokeWidth={4 + 3 * pz} />
				<line x1={H.earth.cx + dx} y1={H.by - 14} x2={H.earth.cx + dx} y2={H.by + 14} stroke={INK} strokeWidth={4} />
				<line x1={H.star.cx + dx} y1={H.by - 14} x2={H.star.cx + dx} y2={H.by + 14} stroke={INK} strokeWidth={4} />
				<g opacity={o(HD.sev)}>
					<line x1={H.earth.cx + dx} y1={H.ty} x2={H.earth.cx + dx + l} y2={H.ty} stroke={TEAL.stroke} strokeWidth={5} />
					<line x1={H.earth.cx + dx} y1={H.ty - 14} x2={H.earth.cx + dx} y2={H.ty + 14} stroke={TEAL.stroke} strokeWidth={5} />
					<line x1={H.earth.cx + dx + l} y1={H.ty - 14} x2={H.earth.cx + dx + l} y2={H.ty + 14} stroke={TEAL.stroke} strokeWidth={5} />
				</g>
				<VArrow a={[H.star.cx - 40 + dx, 330]} b={[H.star.cx - 240 + dx, 330]} opacity={o(HD.sw + 20)} />
				<VArrow a={[H.ship.x + H.ship.w + 20, 330]} b={[H.ship.x + H.ship.w + 140, 330]} opacity={final ? 0 : 1 - prog(f, HD.sw, 20)} />
				<ClockDial cx={H.earth.cx + dx + 150} cy={H.earth.cy - 120} r={28} t={final ? 0 : f / 30} color={INK} />
				<ClockDial cx={H.ship.x + H.ship.w / 2} cy={H.ship.y - 50} r={28} t={final ? 0 : f / 30} color={TEAL.stroke} />
			</FrameSvg>
			<Lbl x={H.earth.cx + dx + 190} y={H.earth.cy - 120} at={at(-60)} color={INK} size={30}>{`Earth frame: ${fx(T_EARTH)} yr`}</Lbl>
			<Lbl x={H.ship.x + H.ship.w / 2 + 40} y={H.ship.y - 50} at={at(-60)} color={TEAL.ink} size={30}>{`ship's clock: ${fx(T_SHIP)} yr`}</Lbl>
			<Lbl x={(H.earth.cx + H.star.cx) / 2 + dx} y={H.by - 30} at={at(-60)} color={INK} size={32} anchor="middle">{`${TRIP_LY} ly (Earth frame)`}</Lbl>
			<Lbl x={H.earth.cx + dx + l / 2} y={H.ty + 46} at={at(HD.sev)} color={TEAL.ink} size={32} anchor="middle">{`${B_TRIP} × ${fx(T_SHIP)} = ${fx(D_SHIP, 1)} ly (ship frame?)`}</Lbl>
			<Lbl x={H.star.cx - 140 + dx} y={290} at={at(HD.sw + 20)} color={ORANGE.ink} size={28} anchor="middle">{`star approaching at ${B_TRIP}c`}</Lbl>
			<Lbl x={H.ship.x + H.ship.w + 150} y={320} at={-60} out={final ? -100 : HD.sw} color={ORANGE.ink} size={30}>{`${B_TRIP}c`}</Lbl>
			<Lbl x={96} y={800} at={at(-60)} color={INK} size={26}>not to scale</Lbl>
			{chip ? <Chip x={96} y={860} at={at(HD.next)} size={30} w={1728} color={INK} border={INK}>Next: why can a moving distance be shorter without an object being crushed?</Chip> : null}
		</>
	);
};
/** v13's final frame for the next video. */
export const M7V13FinalFrame: React.FC = () => <HandoffBoard13 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard13 f={useCurrentFrame()} />;
export const HANDOFF13 = H;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <>Moving light clock: longer path, same c, slower ticks.</>, at: 2},
		{content: <>t = t₀ / √(1 − v²/c²) = <span style={{color: '#6b4fa0'}}>γ</span>t₀ (γ ≥ 1).</>, at: 6},
		{content: <><span style={{color: TEAL.ink}}>Proper time t₀</span>: one clock at both events.</>, at: 10},
		{content: <>All clocks slow together; it works both ways.</>, at: 14},
		{content: <>Evidence: muons, atomic clocks, accelerator muons.</>, at: 18},
	];
	const f = useCurrentFrame();
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<><span style={{color: INK}}>Moving clocks run slow.</span> <span style={{color: TEAL.ink}}>Proper time is the shortest, on the clock at both events.</span></>} picture={<svg width={580} height={220}><ClockDial cx={150} cy={110} r={70} t={f / 30 / G_TRIP} color={TEAL.stroke} /><ClockDial cx={420} cy={110} r={70} t={f / 30} color={INK} /><text x={150} y={214} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: TEAL.ink}}>moving clock</text><text x={420} y={214} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>your clock</text></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
