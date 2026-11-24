// Scenes 11 to 16: two attempts with brief feedback, the handoff (its last frame is exported for v03),
// the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {
	AnswerBox, BallSvg, Bracket, Chip, CrossedChip, DISPLAY, FlightLane, Ledger, MS, MS2, Q, ROLE, Row, Sup, VecArrow, type World, sx, sy,
} from '../../physics/projectile/board';
import {clockAt, flightAt, fx, pos, range} from '../../physics/projectile/flight';
import {ACCENT, D1, D3, HEAD, HEAD_SIZE, PEAK_3, RUN_3, U1, U2, cue, hold} from './common';
import {Lbl, StandingLauncher, Tri, launcherAt, pathD, triPts} from './parts';

// ---------- attempt pictures (answer-free) ----------
const A1Picture: React.FC = () => {
	const g = launcherAt(120, 470, 260, 60);
	const [mx, my] = g.muzzle;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<StandingLauncher px={120} groundY={470} lw={260} deg={60} x1={0} x2={640} />
			<VecArrow x={mx} y={my} dx={10 * 18 * Math.cos(Math.PI / 3)} dy={-10 * 18 * Math.sin(Math.PI / 3)} color={ROLE.v.stroke} width={7} label={<>10.0<MS /></>} lx={mx + 110} ly={my - 120} />
			<line x1={mx} y1={my} x2={mx + 160} y2={my} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 7" />
			<path d={`M${mx + 60},${my} A60,60 0 0,0 ${mx + 30},${my - 52}`} fill="none" stroke={INK} strokeWidth={3.5} />
			<text x={mx + 70} y={my - 24} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 34}} fill={INK}>60°</text>
		</svg>
	);
};
const A2Picture: React.FC = () => {
	const g = launcherAt(120, 470, 260, 61);
	const [mx, my] = g.muzzle;
	const k = 16;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<StandingLauncher px={120} groundY={470} lw={260} deg={61} x1={0} x2={640} />
			<VecArrow x={mx} y={my} dx={8 * k} dy={0} color={ROLE.x.stroke} width={7} label={<>8.0<MS /></>} lx={mx + 20} ly={my + 34} />
			<VecArrow x={mx + 8 * k} y={my} dx={0} dy={-14.7 * k} color={ROLE.y.stroke} width={7} label={<>14.7<MS /></>} lx={mx + 8 * k + 14} ly={my - 120} />
		</svg>
	);
};
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{mark?: number}> = ({mark}) => <>A ball is launched at 10.0 m s<Sup>−1</Sup> at an angle of <M at={mark}>60° above the horizontal</M>. Calculate the horizontal and vertical components of the ball's initial velocity.</>;
const Q2: React.FC<{mark?: number}> = ({mark}) => (
	<>
		A projectile is launched from level ground with initial velocity components of 8.0 m s<Sup>−1</Sup> horizontally and 14.7 m s<Sup>−1</Sup> vertically upwards. Air resistance is negligible; take g = 9.8 m s<Sup>−2</Sup>.
		<div style={{marginTop: 8}}>(a) Calculate the time taken to reach <M at={mark}>maximum height</M>.</div>
		<div style={{marginTop: 4}}>(b) State the velocity and the acceleration of the projectile at maximum height.</div>
	</>
);
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={44} marks={2} picture={<A1Picture />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<A2Picture />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; w?: number}> = ({children, givens, w = 1100}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 170, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '12px 24px', ...DISPLAY(30, INK, 600), whiteSpace: 'normal', lineHeight: 1.28}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: 440, width: w, background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 20px', ...DISPLAY(32, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const hor = cue(id, 'horizontal'), sec = cue(id, 'second'), upw = cue(id, 'upwards'), steep = cue(id, 'steep'), swap = cue(id, 'Swapping'), avoid = cue(id, 'avoid');
	const X0 = 1330, Y0 = 860, K = 34;
	const t = triPts(X0, Y0, K, 10, 60);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk givens={<>u = 10.0 m s<Sup>−1</Sup> | 60° above the horizontal</>}><Q1 mark={hor} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 530, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={sec - 30} size={TYPE.current}><Q s="u" ax="x" /> = 10.0 cos 60° = <AnswerBox at={sec}><span style={{color: ROLE.x.ink}}>5.00<MS /></span></AnswerBox> <span style={{fontSize: 30, color: INK_SOFT}}>(horizontal)</span></Row>
				<Row at={upw - 30} size={TYPE.current}><Q s="u" ax="y" /> = 10.0 sin 60° = <AnswerBox at={upw}><span style={{color: ROLE.y.ink}}>8.66<MS /></span></AnswerBox> <span style={{fontSize: 30, color: INK_SOFT}}>(up)</span></Row>
			</div>
			<FrameSvg><Tri x0={X0} y0={Y0} k={K} u={10} deg={60} arcLabel="60°" glowX={hor} /></FrameSvg>
			<Lbl x={X0 + t.X / 2} y={Y0 + 48} color={ROLE.x.ink} anchor="middle" size={34}>5.00 (close: cos)</Lbl>
			<Lbl x={t.tip[0] + 16} y={Y0 - t.Y / 2} color={ROLE.y.ink} size={34}>8.66</Lbl>
			<HandTag x={96} y={700} text="steep launch: more goes up" at={steep} size={TYPE.handSmall} color={ROLE.y.ink} />
			<CrossedChip x={96} y={780} at={swap} crossAt={avoid} size={36} caption="cos is close: the horizontal side touches 60°"><Q s="u" ax="x" plain /> = 8.66<MS /></CrossedChip>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const zeq = cue(id, 'so zero equals'), secs = cue(id, 'seconds'), horiz = cue(id, 'horizontally'), down = cue(id, 'downwards'), saying = cue(id, 'Saying'), slip = cue(id, 'slip'), top = cue(id, 'At the top');
	const w: World = {x0: 1280, y0: 880, ppm: 22};
	const T = 14.7 / 9.8;
	const pk: [number, number] = [8 * T, 14.7 * T - 4.9 * T * T];
	let d = '';
	for (let i = 0; i <= 50; i++) {const t = (T * i) / 50; d += `${i ? 'L' : 'M'}${sx(w, 8 * t).toFixed(1)},${sy(w, 14.7 * t - 4.9 * t * t).toFixed(1)} `;}
	const bx = sx(w, pk[0]), by = sy(w, pk[1]);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk givens={<><Q s="u" ax="x" plain /> = 8.0 m s<Sup>−1</Sup> | <Q s="u" ax="y" plain /> = 14.7 m s<Sup>−1</Sup> up | g = 9.8 m s<Sup>−2</Sup> | air resistance negligible</>}><Q2 mark={top} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 540, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={zeq} ageAt={secs} size={TYPE.current} oldSize={38}>(a) 0 = 14.7 + (−9.8)t</Row>
				<Row at={secs - 20} size={TYPE.current}>t = 14.7 ÷ 9.8 = <AnswerBox at={secs}>1.50 s</AnswerBox></Row>
				<Row at={horiz - 20} size={TYPE.current}>(b) velocity: <AnswerBox at={horiz}><span style={{color: ROLE.x.ink}}>8.0<MS /> horizontally</span></AnswerBox></Row>
				<Row at={down - 20} size={TYPE.current}>acceleration: <AnswerBox at={down}><span style={{color: ROLE.a.ink}}>9.8<MS2 /> downwards</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<line x1={w.x0 - 40} x2={1824} y1={w.y0} y2={w.y0} stroke={INK} strokeWidth={4} />
				<DrawPath d={d} at={-20} dur={30} color={ROLE.v.stroke} width={5} />
				<BallSvg cx={bx} cy={by} d={34} />
				<VecArrow x={bx + 20} y={by} dx={8 * 16} dy={0} color={ROLE.x.stroke} width={6} at={horiz} label={<>8.0<MS /></>} lx={bx + 24} ly={by - 34} />
				<VecArrow x={bx} y={by + 22} dx={0} dy={110} color={ROLE.a.stroke} width={6} at={down} label={<>9.8<MS2 /> down</>} lx={bx + 14} ly={by + 120} labelColor={ROLE.a.ink} />
			</FrameSvg>
			<CrossedChip x={96} y={860} at={saying} crossAt={Math.min(slip, saying + 40)} size={34}>v = 0 and a = 0 at the top</CrossedChip>
			{f < 0 ? null : null}
		</>
	);
};

// ---------- 15. handoff (its last frame is v03's first frame) ----------
const WH: World = {x0: 170, y0: 830, ppm: 15};
/** The handoff board for the 25 m/s, 50 degree launch. rise: 0..1 of the rising half flown; marks from frames. */
export const HandoffBoard: React.FC<{t: number; fallAt?: number; hAt?: number; tAt?: number; vAt?: number; chipAt?: number}> = ({t, fallAt = -30, hAt = -30, tAt = -30, vAt = -30, chipAt = -30}) => {
	const s = flightAt(RUN_3, t);
	const bx = sx(WH, s.x), by = sy(WH, s.y);
	const R = range(U2, D3);
	const [pkx, pky] = pos(U2, D3, PEAK_3);
	const landX = sx(WH, R);
	const KV = 6;
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<FrameSvg>
				<FlightLane mx={WH.x0} gy={WH.y0} ppm={WH.ppm} u={U2} deg={D3} lw={150} right={1150} hideBall />
				<path d={pathD(WH, U2, D3, t)} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} />
				<DrawPath d={pathD(WH, U2, D3, 2 * PEAK_3, PEAK_3)} at={fallAt} dur={30} color={ROLE.v.stroke} width={4} dash="12 10" />
				<BallSvg cx={bx} cy={by} d={36} />
				<VecArrow x={bx + 20} y={by} dx={s.vx * KV} dy={0} color={ROLE.x.stroke} width={6} head={18} />
				{s.vy > 0.3 ? <VecArrow x={bx} y={by - 20} dx={0} dy={-s.vy * KV} color={ROLE.y.stroke} width={6} head={18} /> : null}
				<Bracket x1={sx(WH, pkx) + 70} y1={WH.y0} x2={sx(WH, pkx) + 70} y2={sy(WH, pky)} color={INK} at={hAt} label="?" lx={sx(WH, pkx) + 96} ly={(WH.y0 + sy(WH, pky)) / 2} anchor="start" size={TYPE.working} />
				<Bracket x1={WH.x0} y1={WH.y0 + 40} x2={landX} y2={WH.y0 + 40} color={INK} at={tAt} label="t = ?" ly={WH.y0 + 76} size={TYPE.current} />
				{prog(useCurrentFrame(), vAt, 10) > 0 ? <VecArrow x={landX} y={WH.y0} dx={s.vx * KV * 0.9} dy={19.2 * KV * 0.9} color={ROLE.v.stroke} width={4} dash="12 9" at={vAt} label="v = ?" lx={landX + 30} ly={WH.y0 - 30} size={TYPE.current} /> : null}
			</FrameSvg>
			<Lbl x={bx + 36} y={by - 40} color={ROLE.x.ink} size={34} at={-30}>{fx(s.vx, 1)}<MS /></Lbl>
			<Ledger x={1300} y={190} w={524} h={330} size={36} titleSize={28}
				clock={{value: 't', t: 0.25}}
				hor={{rows: [{content: <><Q s="u" ax="x" /> = 16.1</>, at: -30}]}}
				ver={{rows: [{content: <><Q s="u" ax="y" /> = 19.2</>, at: -30}]}} />
			<Chip x={1300} y={560} at={chipAt} size={36} w={524} color={INK} border={INK}>Next: height, flight time and landing velocity</Chip>
		</>
	);
};
/** v02's final frame, for v03's opening. */
export const V02FinalFrame: React.FC = () => <HandoffBoard t={PEAK_3} />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const vert = cue(id, 'The vertical part'), half = cue(id, "But that's only half"), high = cue(id, 'How high'), alt = cue(id, 'altogether'), lands = cue(id, 'lands'), next = cue(id, 'next');
	const t = f < vert ? 0 : clockAt(f, vert, PEAK_3, Math.max(1.5, (half - vert - 10) / 30 / PEAK_3));
	return <HandoffBoard t={t} fallAt={half} hAt={high} tAt={alt} vAt={lands} chipAt={next} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>θ above the horizontal: <Q s="u" ax="x" /> = u cos θ, <Q s="u" ax="y" /> = u sin θ.</>, at: 4},
		{content: <>Components combine by Pythagoras: <Q s="u" ax="x" plain /><Sup>2</Sup> + <Q s="u" ax="y" plain /><Sup>2</Sup> = u<Sup>2</Sup>. Never add them.</>, at: 9},
		{content: <>θ from the vertical: the side touching θ gets cos, so <Q s="u" ax="y" /> = u cos θ.</>, at: 14},
		{content: <>In flight: <Q s="v" ax="x" /> = <Q s="u" ax="x" />; <Q s="v" ax="y" /> = <Q s="u" ax="y" /> + <Q s="a" ax="y" />t, with <Q s="a" ax="y" /> = −9.8 m s<Sup>−2</Sup>.</>, at: 19},
		{content: <>At the top: <Q s="v" ax="y" /> = 0, v = <Q s="u" ax="x" /> (horizontal), a = 9.8 m s<Sup>−2</Sup> down; t = <Q s="u" ax="y" /> ÷ 9.8.</>, at: 24},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={40} aid={
				<MemoryCard at={20} main={<><span style={{color: ROLE.x.ink}}>Cos</span> is close.</>} sub="The side touching the angle gets cos."
					picture={<svg width={584} height={220}><Tri x0={40} y0={190} k={7} u={U1} deg={D1} arcLabel="30°" /><Tri x0={360} y0={200} k={6.5} u={U2} deg={D3} ref="v" arcLabel="40°" /></svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
export {Enter};
