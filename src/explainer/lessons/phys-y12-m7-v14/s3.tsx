// Scenes 12 to 17: attempt 1 (the painted spacecraft above the station deck, 150 m by 20 m) and its feedback (the ink
// outline at 65 m with the width bracket unchanged), attempt 2 (a coded atmosphere column, 10 km) and its feedback (the
// column contracts in the muon frame), the handoff (the thrusting spacecraft with a growing momentum arrow beside a small
// gamma graph whose marker creeps towards c; its last frame is exported as `M7V14FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {Ship} from '../../physics/light/frames';
import {AtmosColumn, ClockDial, CurvePlot, SPACE_STATION, ShipOutline, outlineExtent, plotX, plotY} from '../../physics/light/relativity';
import type {PlotBox} from '../../physics/light/relativity';
import {A1_B, A1_G, A1_L, A1_L0, A1_SLIP, A1_W, A2_B, A2_G, A2_KM, A2_L, A2_SLIP, A2_T_US, ACCENT, G_TRIP, HEAD, HEAD_NEXT, HEAD_SIZE, L0, L_SHIP, TAU0_US, cap, cue, dur, g, hold} from './common';
import {AMBER, INK, Lbl, ORANGE, Ruler, SLATE, Shrunk, TEAL, VArrow, VIOLET, fx} from './parts';

// ---------- 12. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>A spacecraft is 150 m long and 20 m wide when {U('measured at rest')}. It passes a space station at {U('0.90c')}, travelling in the {U('direction of its length')}. Calculate the length and the width of the spacecraft as measured by observers on the station. Justify any difference.</>;
};
const ShipPic: React.FC<{w?: number; k?: number; ans?: number}> = ({w = 678, k = 1, ans = 0}) => {
	const sp: Place = {x: 120, y: 190, w: 440};
	const ex = outlineExtent(sp, k), full = outlineExtent(sp, 1);
	return (
		<svg width={w} height={560} style={{overflow: 'visible'}}>
			<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<LPlate spec={SPACE_STATION} p={{x: 40, y: 400, w: 600}} />
			{ans > 0.001 ? <ShipOutline p={sp} k={k} color={INK} plateOpacity={0.35} /> : <Ship p={sp} />}
			<line x1={full.x0} y1={150} x2={full.x1} y2={150} stroke={TEAL.stroke} strokeWidth={4} /><line x1={full.x0} y1={138} x2={full.x0} y2={162} stroke={TEAL.stroke} strokeWidth={4} /><line x1={full.x1} y1={138} x2={full.x1} y2={162} stroke={TEAL.stroke} strokeWidth={4} />
			<text x={(full.x0 + full.x1) / 2} y={130} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: TEAL.ink}}>150 m (at rest)</text>
			<line x1={ex.x1 + 26} y1={ex.top} x2={ex.x1 + 26} y2={ex.bot} stroke={INK} strokeWidth={4} />
			<text x={ex.x1 + 40} y={(ex.top + ex.bot) / 2 + 10} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>20 m</text>
			<line x1={140} y1={515} x2={300} y2={515} stroke={ORANGE.stroke} strokeWidth={6} /><path d="M320,515 l-20,-11 v22 z" fill={ORANGE.stroke} />
			<text x={340} y={527} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: ORANGE.ink}}>0.90c</text>
			<text x={30} y={70} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>spacecraft passing a space station</text>
			{ans > 0.001 ? <text x={(ex.x0 + ex.x1) / 2} y={ex.bot + 40} textAnchor="middle" opacity={ans} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>{`${fx(A1_L)} m (station)`}</text> : null}
		</svg>
	);
};
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<ShipPic />}><Q1 /></QuestionScene></Accent>;

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const m1 = cue(id, 'sixty five metres'), m2 = cue(id, 'twenty metres'), sh = cap(id, cue(id, 'shorter'));
	const k = kf(f, [[m1, 1], [m1 + 30, 1 / A1_G]]);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>{`l₀ = ${A1_L0} m | width ${A1_W} m | v = ${fx(A1_B, 2)}c`}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 14, width: 1080}}>
				<Row at={m1 - 40} size={44}><span style={{color: VIOLET.ink}}>{`γ = 1 / √(1 − ${fx(A1_B, 2)}²) = ${fx(A1_G, 2)}`}</span></Row>
				<Row at={m1 - 6} size={52}><AnswerBox at={m1}>{`l = ${A1_L0} / ${fx(A1_G, 2)} = ${fx(A1_L)} m`}</AnswerBox></Row>
				<Row at={m2 - 6} size={40}><AnswerBox at={m2}>{`width: perpendicular to v → ${A1_W} m (unchanged)`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1190, top: 300}}><ShipPic w={640} k={k} ans={prog(f, m1, 12)} /></div>
			<CrossedChip x={96} y={760} at={sh} crossAt={sh + 10} size={32} caption="l ≤ l₀: divide by γ">{`l = ${A1_L0} × ${fx(A1_G, 2)} = ${fx(A1_SLIP)} m`}</CrossedChip>
		</>
	);
};

// ---------- 14. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Muons are produced 10 km above sea level and travel towards the ground at 0.998c (γ = 15.8). Their mean lifetime {U('at rest')} is 2.2 μs. {U('In the frame of the muons')}: (a) calculate the thickness of the atmosphere; (b) calculate the time taken for the atmosphere to pass, and compare it with the mean lifetime.</>;
};
const ColPic: React.FC<{f: number; w?: number; rise?: number; clock?: number}> = ({f, w = 678, rise = 0, clock = 0}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<AtmosColumn x={260} y={80} w={180} h={400} f={f} decayPx={1e6} hold dot={SLATE.stroke} n={3} rise={rise} />
		<line x1={210} y1={80} x2={210} y2={480 - 400 * rise} stroke={INK} strokeWidth={4} /><line x1={198} y1={80} x2={222} y2={80} stroke={INK} strokeWidth={4} /><line x1={198} y1={480 - 400 * rise} x2={222} y2={480 - 400 * rise} stroke={INK} strokeWidth={4} />
		<text x={190} y={rise > 0.5 ? 120 : 290} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: rise > 0.5 ? TEAL.ink : INK}}>{rise > 0.5 ? `≈ ${fx(Math.round(A2_L / 10) * 10)} m` : '10 km'}</text>
		{rise > 0.5 ? <text x={230} y={380} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: TEAL.ink}}>contracted (muon frame)</text> : null}
		<text x={460} y={110} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: SLATE.ink}}>muon</text>
		<text x={460} y={150} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: ORANGE.ink}}>0.998c</text>
		<text x={30} y={60} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>c = 3.00 × 10⁸ m s⁻¹</text>
		{clock > 0.001 ? <g opacity={clock}><ClockDial cx={560} cy={230} r={30} t={f / 30} color={TEAL.stroke} /><text x={560} y={300} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: TEAL.ink}}>2.2 μs (own)</text></g> : null}
	</svg>
);
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<ColPic f={useCurrentFrame()} />}><Q2 /></QuestionScene></Accent>;

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const m = cue(id, 'thirty metres'), sv = cue(id, 'survive'), mu = cap(id, cue(id, 'two point two microseconds'));
	const rise = kf(f, [[0, 0], [m, 0], [m + 40, 1 - 1 / g(A2_B)]]);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>{`l₀ = ${A2_KM} km (Earth frame) | v = ${A2_B}c | γ = ${fx(A2_G, 1)} | t₀ = ${fx(TAU0_US, 1)} μs`}</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 14, width: 1080}}>
				<Row at={m - 6} size={48}><AnswerBox at={m}>{`(a) l = 10 000 / ${fx(A2_G, 1)} ≈ ${fx(Math.round(A2_L / 10) * 10)} m`}</AnswerBox></Row>
				<Row at={sv - 30} size={40}>{`(b) t = ${fx(A2_L)} / (${A2_B} × 3.00 × 10⁸) = ${fx(A2_T_US, 1)} μs`}</Row>
				<Row at={sv - 6} size={40}><AnswerBox at={sv}>{`≈ 1 mean lifetime (${fx(TAU0_US, 1)} μs) → a large fraction survive`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1190, top: 300}}><ColPic f={f} w={640} rise={rise} clock={prog(f, 0, 12)} /></div>
			<CrossedChip x={96} y={760} at={mu} crossAt={mu + 10} size={30} caption="its own clock: 2.2 μs">{`muon's lifetime = ${fx(A2_G, 1)} × ${fx(TAU0_US, 1)} = ${fx(A2_SLIP)} μs (muon frame)`}</CrossedChip>
		</>
	);
};

// ---------- 16. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, gw: cue(id, 'gamma grows without limit'), fire: cue(id, "Fire the ship's engines"), th: cue(id, 'The thrust adds momentum every second'), next: cap(id, cue(id, 'So why does ever more momentum')), end: dur(id) - 1};
})();
const HS: Place = {x: 96, y: 430, w: 820};
const GB16: PlotBox = {x: 1290, y: 300, w: 460, h: 380, yMax: 12};
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard14: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const grow = final ? 1 : kf(f, [[HD.th, 0], [HD.th + 120, 1]], false);
	const beta = final ? 0.97 : 0.6 + 0.37 * grow;
	const nose = outlineExtent(HS, 1).x1 + 30;
	const ny = HS.y + (418 - 138) * (HS.w / 1483);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<Ship p={HS} thrust={o(HD.fire, 16)} />
				{final || f >= HD.th ? <VArrow a={[nose, ny]} b={[nose + 40 + 230 * grow, ny]} color={AMBER.stroke} width={10} /> : null}
				<CurvePlot b={GB16} f={g} color={VIOLET.stroke} asym={1} marker={beta} yTicks={[1, 6, 12]} xTicks={[0, 0.5, 1]} xLabel="v/c" yLabel="γ" size={28} opacity={o(HD.gw)} />
			</FrameSvg>
			<Lbl x={nose + 50 + 230 * grow} y={ny - 40} at={at(HD.th)} color={AMBER.ink} size={40}>p</Lbl>
			<Lbl x={nose + 20} y={ny + 70} at={at(HD.th + 20)} color={TEAL.ink} size={34}>v = ?</Lbl>
			<Lbl x={plotX(GB16, 1) + 10} y={plotY(GB16, 11)} at={at(HD.gw)} color={'#b8322a'} size={30}>c</Lbl>
			{chip ? <Chip x={96} y={860} at={at(HD.next)} size={30} w={1728} color={INK} border={INK}>Next: why does ever more momentum fail to push mass to light speed?</Chip> : null}
		</>
	);
};
/** v14's final frame for the next video. */
export const M7V14FinalFrame: React.FC = () => <HandoffBoard14 f={HD.end} final />;
export const S16: React.FC = () => <HandoffBoard14 f={useCurrentFrame()} />;
export const HANDOFF14 = {ship: HS, plot: GB16};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>l = l₀√(1 − v²/c²) = l₀/<span style={{color: VIOLET.ink}}>γ</span>, along the motion only.</>, at: 2},
		{content: <><span style={{color: TEAL.ink}}>Proper length l₀</span>: object's rest frame (longest).</>, at: 6},
		{content: <>Mark both ends at the same time in your frame.</>, at: 10},
		{content: <>No force, no squeeze; reciprocal, yet real.</>, at: 14},
		{content: <>Combine distance and time from one frame only.</>, at: 18},
	];
	const f = useCurrentFrame();
	const sp: Place = {x: 40, y: 60, w: 300};
	const full = outlineExtent(sp, 1);
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<span style={{color: TEAL.ink}}>Proper length is the longest. Proper time is the shortest.</span>} picture={<svg width={580} height={220}><ShipOutline p={sp} k={1 / 1.67} color={INK} plateOpacity={0.35} /><Ruler x0={full.x0} x1={full.x1} y={50} color={TEAL.stroke} up /><ClockDial cx={440} cy={60} r={44} t={f / 30 / G_TRIP} color={TEAL.stroke} /><ClockDial cx={440} cy={170} r={44} t={f / 30} color={INK} /><text x={170} y={210} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: INK}}>{`${L0} m at rest, ${fx(L_SHIP)} m moving`}</text></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
