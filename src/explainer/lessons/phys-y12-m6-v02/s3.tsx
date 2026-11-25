// Scenes 11 to 16: two attempts with answer-free pictures and brief feedback, the handoff (the main case's path with
// its speed in and out and two kinetic-energy bars; its last frame is exported as `M6V02FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, Cliff, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {FieldLines, Particle, PlatePair, plateRun} from '../../physics/electromagnetism/plates';
import {stateAt} from '../../sims/field-motion';
import {A1, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, MAIN, RUN_MAIN, cap, cue, hold} from './common';
import {AMBER, CardRect, KBar, NAVY, ORANGE, Shrunk, Stage, T, TEAL, VIOLET, VecArrow, Trail, fx, platesFor, sci, toPx} from './parts';
import type {Map} from './parts';
import {G1, M1} from './s1';

// ---------- attempts ----------
const Q1: React.FC = () => <>An electron enters midway between two horizontal parallel plates, travelling parallel to the plates at 2.5 × 10⁷ m s⁻¹. The plates are 6.0 cm long and 3.0 cm apart, with a potential difference of 150 V and the top plate positive. (a) Show that the electron leaves the plates without striking either plate. (b) Calculate the angle between the electron's velocity and the horizontal as it leaves. (m<Sub>e</Sub> = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C)</>;
const Q2: React.FC = () => <>A proton enters a uniform electric field at right angles to the field. A cricket ball is thrown horizontally near Earth's surface. Compare the trajectories of the proton and the ball, giving two similarities and two differences.</>;

const MA: Map = {x0: 90, y0: 280, k: 8000};
const GA = platesFor(MA, A1.L, A1.d);
const RUN_A1 = plateRun({vx: A1.vx, ay: A1.a, L: A1.L});
/** Attempt 1's picture: the exam-style plates with their lengths, the electron entering midway (no path). */
const PlatesPicture: React.FC<{path?: number; room?: number}> = ({path = 0, room = 0}) => {
	const [ex, ey] = toPx(MA, A1.L, A1.y);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<PlatePair g={GA} signSize={30} signStep={96} />
			<Bracket x1={GA.x1} y1={GA.yBot + 70} x2={GA.x2} y2={GA.yBot + 70} color={NAVY.stroke} label="6.0 cm" size={30} ly={GA.yBot + 100} />
			<Bracket x1={GA.x2 + 36} y1={GA.yTop} x2={GA.x2 + 36} y2={GA.yBot} color={NAVY.stroke} label="3.0 cm" size={30} lx={GA.x2 + 48} anchor="start" />
			<line x1={GA.x1 - 30} y1={MA.y0} x2={GA.x2} y2={MA.y0} stroke="#8a8378" strokeWidth={2} strokeDasharray="8 7" />
			<Particle cx={GA.x1 - 40} cy={MA.y0} sign="−" r={16} />
			<VecArrow x={GA.x1 - 20} y={MA.y0} dx={90} dy={0} color={TEAL.stroke} width={6} head={18} />
			{path > 0 ? <g opacity={path}><Trail m={MA} path={RUN_A1} t={A1.t} width={5} /><circle cx={ex} cy={ey} r={8} fill={TEAL.stroke} /></g> : null}
			{room > 0 ? <g opacity={room}><Bracket x1={GA.x2 - 30} y1={MA.y0} x2={GA.x2 - 30} y2={GA.yTop} color={NAVY.stroke} label="d/2 = 15 mm" size={28} lx={GA.x2 - 44} ly={MA.y0 - 70} anchor="end" /></g> : null}
		</svg>
	);
};
/** Attempt 2's picture: a proton between plates and a ball at a cliff edge, neither with a path. */
const PairPicture: React.FC<{paths?: number}> = ({paths = 0}) => {
	const pg = {x1: 30, x2: 300, yTop: 110, yBot: 290};
	const pPath = Array.from({length: 21}, (_, i) => { const x = pg.x1 + (i / 20) * 260; return `${i ? 'L' : 'M'}${x.toFixed(1)},${(200 + ((x - pg.x1) / 260) ** 2 * 70).toFixed(1)}`; }).join(' ');
	const bPath = Array.from({length: 21}, (_, i) => { const x = 470 + (i / 20) * 190; return `${i ? 'L' : 'M'}${x.toFixed(1)},${(150 + ((x - 470) / 190) ** 2 * 190).toFixed(1)}`; }).join(' ');
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<CardRect x={0} y={40} w={330} h={330} />
			<FieldLines g={pg} step={80} width={3} />
			<PlatePair g={pg} signSize={28} signStep={70} thick={14} />
			<Particle cx={pg.x1 + 4} cy={200} sign="+" r={15} />
			<T x={pg.x1 + 30} y={186} size={28}>proton</T>
			<CardRect x={348} y={40} w={330} h={330} />
			<Cliff left={364} edgeX={470} topY={164} baseY={350} right={662} />
			<circle cx={470} cy={150} r={13} fill="#cfc6b4" stroke={INK} strokeWidth={3} />
			<T x={492} y={130} size={28}>ball</T>
			{paths > 0 ? <g opacity={paths}>
				<path d={pPath} fill="none" stroke={TEAL.stroke} strokeWidth={5} />
				<path d={bPath} fill="none" stroke={TEAL.stroke} strokeWidth={5} />
			</g> : null}
		</svg>
	);
};
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={32} marks={4} picture={<PlatesPicture />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={4} picture={<PairPicture />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number}> = ({children, top = 320}) => <div style={{position: 'absolute', left: 1230, top, transform: 'scale(0.88)', transformOrigin: 'top left'}}>{children}</div>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const here = cue(id, 'Here a is eight'), inside = cue(id, 'and the electron is inside'), so = cue(id, 'So the deflection is'), vy = cue(id, 'v y is a t'), angle = cue(id, 'so the angle is about'), slip = cue(id, 'The classic slip');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={360} givens={<>v<Sub>x</Sub> = 2.5 × 10⁷ m s⁻¹ | L = 0.060 m | d = 0.030 m | V = 150 V | e, m<Sub>e</Sub></>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 8, width: 1110}}>
				<Row at={here} ageAt={so} size={38} oldSize={30}>E = 150/0.030 = {sci(A1.E, 1)} V m⁻¹; <span style={{color: VIOLET.ink}}>a = {sci(A1.a)} m s⁻²</span></Row>
				<Row at={inside} ageAt={so} size={38} oldSize={30}>t = 0.060/2.5 × 10⁷ = {sci(A1.t, 1)} s</Row>
				<Row at={so} size={44}>y = ½at² = <AnswerBox at={so + 30}><span style={{color: NAVY.ink}}>{fx(A1.y * 1000, 2)} mm &lt; d/2 = 15 mm</span></AnswerBox></Row>
				<Row at={vy} ageAt={angle} size={38} oldSize={32}><span style={{color: TEAL.ink}}>v<Sub>y</Sub> = at = {sci(A1.vy)} m s⁻¹</span></Row>
				<Row at={angle} size={44}>θ = tan⁻¹({sci(A1.vy)} / 2.5 × 10⁷) = <AnswerBox at={angle + 20}><span style={{color: TEAL.ink}}>{fx(A1.th, 1)}°</span></AnswerBox></Row>
			</div>
			<HandTag x={1000} y={846} text="vertical over horizontal speed" at={angle + 30} size={30} color={TEAL.ink} />
			<CrossedChip x={96} y={866} at={slip} crossAt={cap(id, slip + 24)} size={30} caption="tan θ = vy/vx = 2y/L, not y/L">tan⁻¹(y/L) = {fx(A1.slip, 1)}°</CrossedChip>
			<Picture><PlatesPicture path={prog(f, so, 16)} room={prog(f, so + 20, 16)} /></Picture>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const sim = cue(id, 'Similarities'), both = cue(id, 'so both paths are parabolas'), diff = cue(id, 'Differences'), dirn = cue(id, "And the proton's direction"), slip = cue(id, 'The classic slip');
	const cell = (at: number, a: React.ReactNode, b: React.ReactNode, framed = false, frameAt = 1e9) => (
		<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, opacity: prog(f, at, 12)}}>
			<div style={{background: '#fffdf8', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 12, padding: '6px 14px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: INK, whiteSpace: 'normal'}}>{framed ? <AnswerBox at={frameAt} tick={false}><span>{a}</span></AnswerBox> : a}</div>
			<div style={{background: '#fffdf8', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 12, padding: '6px 14px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: INK, whiteSpace: 'normal'}}>{framed ? <AnswerBox at={frameAt} tick={false}><span>{b}</span></AnswerBox> : b}</div>
		</div>
	);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={296} givens={<>proton: enters a uniform electric field at right angles | cricket ball: thrown horizontally near Earth's surface | two similarities, two differences</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, width: 1110, display: 'flex', flexDirection: 'column', gap: 10}}>
				<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, color: INK_SOFT_C}}><div>proton</div><div>ball</div></div>
				{cell(sim, 'constant v along the entry line; constant a across', 'same')}
				{cell(both, 'path: a parabola', 'same: a parabola', true, both + 14)}
				{cell(diff, 'a = qE/m: depends on q/m and E', 'a = g: same for every mass')}
				{cell(dirn, 'direction set by the sign of q', 'always down', true, dirn + 30)}
			</div>
			<CrossedChip x={96} y={866} at={slip} crossAt={cap(id, slip + 24)} size={30} caption="compare in every point">Proton: parabola. Ball: falls.</CrossedChip>
			<Picture top={400}><PairPicture paths={prog(f, both, 16)} /></Picture>
		</>
	);
};
const INK_SOFT_C = '#6b6358';

// ---------- 15. next: where did the extra speed come from? ----------
const K_IN = 300, K_OUT = K_IN * (MAIN.v / MAIN.vx) ** 2;
const T_SHOW = MAIN.t + 0.008 / MAIN.vx;
export const HandoffBoard: React.FC<{drawAt?: number; readAt?: number; barsAt?: number; tagAt?: number; tagOut?: number; chipAt?: number; headSwap?: number}> = ({drawAt = -60, readAt = -60, barsAt = -60, tagAt = 1e9, tagOut = 1e9, chipAt = -60, headSwap = -60}) => {
	const f = useCurrentFrame();
	const t = prog(f, drawAt, 60) * T_SHOW;
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage g={G1} />
				<Trail m={M1} path={RUN_MAIN} t={t} width={5} />
				{t > 0 ? <circle cx={toPx(M1, stateAt(RUN_MAIN, t).x, stateAt(RUN_MAIN, t).y)[0]} cy={toPx(M1, stateAt(RUN_MAIN, t).x, stateAt(RUN_MAIN, t).y)[1]} r={10} fill={TEAL.stroke} /> : null}
				<g opacity={prog(f, barsAt, 14)}>
					<KBar x={740} y={872} len={K_IN} />
					<KBar x={1300} y={872} len={K_OUT} />
				</g>
			</FrameSvg>
			<Readouts x={740} y={784} w={400} size={36} at={readAt} rows={[{label: 'in', value: `${sci(MAIN.vx)} m s⁻¹`, color: TEAL.ink}]} />
			<Readouts x={1300} y={784} w={400} size={36} at={readAt + 10} rows={[{label: 'out', value: `${sci(MAIN.v)} m s⁻¹`, color: TEAL.ink}]} />
			<T2 x={700} y={892} at={barsAt}>K</T2>
			<T2 x={1260} y={892} at={barsAt}>K</T2>
			<HandTag x={1300 + K_OUT + 20} y={884} text="more K out?" at={tagAt} out={tagOut} size={30} color={ORANGE.ink} />
			<Chip x={96} y={190} at={chipAt} size={30} w={560} color={INK} border={INK}>Next: how does a potential difference set a particle's speed?</Chip>
		</>
	);
};
const T2: React.FC<{x: number; y: number; at: number; children: React.ReactNode}> = ({x, y, at, children}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: x - 30, top: y - 24, width: 30, textAlign: 'right', opacity: prog(f, at, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: ORANGE.ink}}>{children}</div>;
};
/** v02's final frame (the path with speed in and out, the two K bars, the next question). */
export const M6V02FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const so = cue(id, 'So between the plates'), faster = cue(id, 'it left a little faster'), work = cue(id, 'The field did work'), next = cue(id, "That's our next question"), how = cue(id, 'How does a potential');
	return <HandoffBoard drawAt={so - 20} readAt={faster} barsAt={work} tagAt={work + 16} tagOut={cap(id, how + 20)} chipAt={how} headSwap={next} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <><span style={{color: TEAL.ink}}>v<Sub>x</Sub> constant</span>; <span style={{color: VIOLET.ink}}>a = qE/m</span> constant across.</>, at: 2},
		{content: <>Path: a parabola, like a horizontal projectile.</>, at: 6},
		{content: <>t = L/v<Sub>x</Sub>; y = ½at². Hits if y ≥ d/2.</>, at: 10},
		{content: <>Exit: v<Sub>y</Sub> = at, tan θ = v<Sub>y</Sub>/v<Sub>x</Sub>; then straight.</>, at: 14},
		{content: <>Unlike g: a depends on q/m and E; <span style={{color: AMBER.ink}}>sign sets direction</span>.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span>Swap g for <span style={{color: VIOLET.ink}}>qE/m</span>.</span>} sub="The sign chooses the direction."
					picture={<svg width={584} height={220} viewBox="0 0 584 220">
						{[[60, 180, 1, '−'], [330, 40, -1, '+']].map(([x0, y0, dir, sg], k) => (
							<g key={k}>
								<path d={Array.from({length: 21}, (_, i) => `${i ? 'L' : 'M'}${(x0 as number) + i * 10},${((y0 as number) - (dir as number) * ((i / 20) ** 2) * 130).toFixed(1)}`).join(' ')} fill="none" stroke={TEAL.stroke} strokeWidth={5} />
								<Particle cx={x0 as number} cy={y0 as number} sign={sg as '+' | '−'} r={16} />
							</g>
						))}
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
