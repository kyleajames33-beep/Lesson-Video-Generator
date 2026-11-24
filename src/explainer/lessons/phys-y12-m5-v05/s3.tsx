// Scenes 12 to 17: two attempts with brief feedback, the handoff (its last frame is exported for the next
// lesson), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TRACK, TYPE} from '../../shared/tokens';
import {AnswerBox, BallSvg, Bracket, Chip, CrossedChip, DISPLAY, GroundLine, Ledger, MS, Q, ROLE, Row, Sup, VecArrow, type World, sx} from '../../physics/projectile/board';
import {fx, uy} from '../../physics/projectile/flight';
import {landRoots, rangeFrom} from '../../physics/projectile/height';
import {Lbl, StandingLauncher, launcherAt} from '../phys-y12-m5-v02/parts';
import {A1, A2, ACCENT, CASE, HC, HEAD, HEAD_SIZE, PATH, U, cue, hold} from './common';
import {AnglePath, CliffStage, pathT, ptT} from './parts';
import {GY, LW, MX, SEA, W} from './s1';

// ---------- attempt pictures (answer-free: the set-up and the givens only) ----------
const LedgePicture: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<rect x={0} y={200} width={250} height={270} fill={TRACK} />
		<line x1={0} x2={250} y1={200} y2={200} stroke={INK} strokeWidth={4} />
		<line x1={250} x2={250} y1={200} y2={470} stroke={INK} strokeWidth={4} />
		<GroundLine x1={250} x2={660} y={470} />
		<BallSvg cx={230} cy={180} d={40} />
		<VecArrow x={256} y={180} dx={130} dy={0} color={ROLE.x.stroke} width={7} label={<>6.0<MS /></>} lx={270} ly={136} />
		<Bracket x1={300} y1={200} x2={300} y2={470} color={ROLE.given.ink} label="5.0 m" lx={320} ly={335} anchor="start" size={TYPE.current} />
	</svg>
);
const PlatformPicture: React.FC<{withPath?: boolean; k?: number; lw?: number}> = ({withPath = false, k = 42, lw = 220}) => {
	const deg = 30;
	const g = launcherAt(100, 250, lw, deg);
	const [mx, my] = g.muzzle;
	const groundY = my + 5 * k;
	const a = (deg * Math.PI) / 180;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={0} y={250} width={mx + 30} height={groundY - 250} fill={TRACK} />
			<StandingLauncher px={100} groundY={250} lw={lw} deg={deg} x1={0} x2={mx + 30} />
			<line x1={mx + 30} x2={mx + 30} y1={250} y2={groundY} stroke={INK} strokeWidth={4} />
			<GroundLine x1={mx + 30} x2={660} y={groundY} />
			<line x1={mx} x2={mx + 160} y1={my} y2={my} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 7" />
			<path d={`M${mx + 60},${my} A60,60 0 0,0 ${mx + 60 * Math.cos(a)},${my - 60 * Math.sin(a)}`} fill="none" stroke={INK} strokeWidth={3.5} />
			<text x={mx + 72} y={my - 10} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 34}} fill={INK}>30°</text>
			<VecArrow x={mx} y={my} dx={150 * Math.cos(a)} dy={-150 * Math.sin(a)} color={ROLE.v.stroke} width={7} label={<>10.0<MS /></>} lx={mx + 20} ly={my - 120} />
			<Bracket x1={mx + 70} y1={my} x2={mx + 70} y2={groundY} color={ROLE.given.ink} label="5.0 m" lx={mx + 90} ly={(my + groundY) / 2 + 20} anchor="start" size={TYPE.current} />
			{withPath ? <path d={pathT({x0: mx, y0: my, ppm: k}, A2.u, A2.deg, landRoots(A2.u, A2.deg, A2.drop)[0])} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} /> : null}
		</svg>
	);
};
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{mark?: number}> = ({mark}) => <>A ball is launched <M at={mark}>horizontally</M> at 6.0 m s<Sup>−1</Sup> from a point <M at={mark === undefined ? undefined : mark + 8}>5.0 m above</M> a level floor. Air resistance is negligible; take g = 9.8 m s<Sup>−2</Sup>. Calculate (a) the time of flight and (b) the horizontal distance travelled before the ball lands.</>;
const Q2: React.FC<{mark?: number}> = ({mark}) => <>A ball is launched at 10.0 m s<Sup>−1</Sup> at 30° above the horizontal from a point <M at={mark}>5.0 m above level ground</M>, and lands on that ground. Air resistance is negligible; take g = 9.8 m s<Sup>−2</Sup>. Calculate the time of flight.</>;
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={42} marks={3} picture={<LedgePicture />}><Q1 /></QuestionScene></Accent>;
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={42} marks={3} picture={<PlatformPicture />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '10px 24px', ...DISPLAY(29, INK, 600), whiteSpace: 'normal', lineHeight: 1.28}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 20px', ...DISPLAY(32, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);
const Slate: React.FC<{on: number; children: React.ReactNode}> = ({on, children}) => {
	const p = prog(useCurrentFrame(), on, 12);
	return (
		<span style={{position: 'relative', color: p > 0 ? ROLE.slate.ink : undefined}}>
			{children}
			{p > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -4, top: 0, width: 'calc(100% + 8px)', height: '100%', overflow: 'visible'}}><path d="M0,64 Q50,52 100,40" stroke={INK} strokeWidth={5} vectorEffect="non-scaling-stroke" fill="none" style={{clipPath: `inset(-50% ${100 - p * 100}% -50% 0)`}} /></svg> : null}
		</span>
	);
};

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const uy0 = cue(id, 'u y is zero'), shrinks = cue(id, 'shrinks'), soT = cue(id, 'So t is'), secs = cue(id, 'seconds'), hd = cue(id, 'The horizontal distance'), metres = cue(id, 'metres'), using = cue(id, 'Using plus five'), wrong = cue(id, 'wrong');
	const t = landRoots(A1.u, A1.deg, A1.drop)[0], R = rangeFrom(A1.u, A1.deg, A1.drop);
	const w: World = {x0: 1400, y0: 520, ppm: 56};
	const landX = sx(w, R);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={330} givens={<>6.0 m s<Sup>−1</Sup> horizontally | 5.0 m above a level floor | g = 9.8 m s<Sup>−2</Sup></>}><Q1 mark={14} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={uy0} size={TYPE.current}><span style={{color: ROLE.y.ink}}><Q s="u" ax="y" plain /> = 0, <Q s="s" ax="y" plain /> = −5.0 m</span> (down is negative)</Row>
				<Row at={shrinks} size={TYPE.current}>−5.0 = −4.9t<Sup>2</Sup></Row>
				<Row at={soT} size={TYPE.current}>t = √(5.0 ÷ 4.9) = <AnswerBox at={secs}>{fx(t, 2)} s</AnswerBox></Row>
				<Row at={hd} size={TYPE.current}><Q s="s" ax="x" /> = 6.0 × {fx(t, 3)} = {fx(R, 2)} m ≈ <AnswerBox at={metres}><span style={{color: ROLE.x.ink}}>{fx(R, 1)} m</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={790} at={using} crossAt={wrong} size={36} caption="down is negative">+5.0 = −4.9t<Sup>2</Sup>, t<Sup>2</Sup> = {fx(-5 / 4.9, 2)}</CrossedChip>
			<FrameSvg>
				<rect x={1260} y={520} width={140} height={280} fill={TRACK} />
				<line x1={1260} x2={1400} y1={520} y2={520} stroke={INK} strokeWidth={4} />
				<line x1={1400} x2={1400} y1={520} y2={800} stroke={INK} strokeWidth={4} />
				<GroundLine x1={1400} x2={1824} y={800} />
				<Bracket x1={1290} y1={520} x2={1290} y2={800} color={ROLE.given.ink} />
				{f >= soT ? <DrawPath d={pathT(w, A1.u, 0, t)} at={soT} dur={30} color={ROLE.v.stroke} width={5} /> : null}
				<BallSvg cx={f >= soT + 30 ? landX : 1400} cy={f >= soT + 30 ? 786 : 506} d={28} />
				<Bracket x1={1400} y1={830} x2={landX} y2={830} color={ROLE.x.ink} at={metres} />
			</FrameSvg>
			<Lbl x={1300} y={660} color={ROLE.given.ink} size={34}>5.0 m</Lbl>
			<Lbl x={(1400 + landX) / 2} y={872} color={ROLE.x.ink} size={34} anchor="middle" at={metres}>{fx(R, 1)} m</Lbl>
			<Lbl x={landX - 75} y={740} color={INK} size={34} anchor="end" at={secs}>t = {fx(t, 2)} s</Lbl>
		</>
	);
};

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const uyIs = cue(id, 'u y is'), soFour = cue(id, 'so four point nine'), formula = cue(id, 'The quadratic formula'), secs = cue(id, 'seconds'), before = cue(id, 'before the launch'), doubling = cue(id, 'Doubling'), avoid = cue(id, 'avoid');
	const [tp, tn] = landRoots(A2.u, A2.deg, A2.drop);
	const uyv = uy(A2.u, A2.deg);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={300} givens={<>10.0 m s<Sup>−1</Sup> at 30° above the horizontal | 5.0 m above level ground | g = 9.8 m s<Sup>−2</Sup></>}><Q2 mark={14} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={uyIs} size={TYPE.current}><span style={{color: ROLE.y.ink}}><Q s="u" ax="y" plain /> = 10.0 sin 30° = {fx(uyv, 2)}<MS />; <Q s="s" ax="y" plain /> = −5.0 m</span></Row>
				<Row at={soFour} size={TYPE.current}>4.9t<Sup>2</Sup> − 5.00t − 5.0 = 0</Row>
				<Row at={formula} size={TYPE.current}>t = (5.00 ± √(25.0 + 98.0)) ÷ 9.8</Row>
				<Row at={formula + 30} size={TYPE.current}>&nbsp;&nbsp;= (5.00 ± √123) ÷ 9.8</Row>
				<Row at={secs - 10} size={TYPE.current}>t = <AnswerBox at={secs}>{fx(tp, 2)} s</AnswerBox>  or  <Slate on={before}>{fx(tn, 3)} s</Slate></Row>
			</div>
			<HandTag x={560} y={725} text="before launch" at={before + 10} size={TYPE.handSmall} color={ROLE.slate.ink} />
			<CrossedChip x={96} y={830} at={doubling} crossAt={avoid} size={36} caption="the ground is not level with the launch">T = 2 × 5.00 ÷ 9.8 = {fx(2 * uyv / 9.8, 2)} s</CrossedChip>
			<div style={{position: 'absolute', left: 1270, top: 470, width: 554, height: 460}}><PlatformPicture withPath k={28} lw={120} /></div>
		</>
	);
};

// ---------- 16. handoff (its last frame is the next lesson's first frame) ----------
const WALL_X = MX + 40 * 12, WALL_TOP = SEA - 20 * 12;
/** The handoff board: the 30 degree flight from the cliff, then a wall partway out. Marks from frames. */
export const HandoffBoard: React.FC<{pulseAt?: number; carryAt?: number; wallAt?: number; clearAt?: number; chipAt?: number; recap?: {at: number; out: number}}> = ({pulseAt, carryAt = -30, wallAt = -30, clearAt = -30, chipAt = -30, recap}) => {
	const f = useCurrentFrame();
	const c = CASE[30];
	const landX = sx(W, c.R);
	const glow = pulseAt === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulseAt) / 30)));
	const wp = prog(f, wallAt, 30);
	const tWall = (WALL_X - MX) / 12 / c.ux;
	const [, pyWall] = ptT(W, U, 30, tWall);
	const reversed = f >= clearAt;
	const hatch: React.ReactNode[] = [];
	const top = SEA - (SEA - WALL_TOP) * wp;
	for (let y = top + 12; y < SEA - 4; y += 18) hatch.push(<line key={y} x1={WALL_X - 12} y1={y} x2={WALL_X + 12} y2={y + 10} stroke={INK_SOFT} strokeWidth={2} />);
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<FrameSvg>
				<CliffStage mx={MX} gy={GY} seaY={SEA} lw={LW} deg={30} />
				<AnglePath w={W} u={U} deg={30} t1={c.t} />
				<line x1={landX} x2={landX} y1={SEA - 18} y2={SEA + 18} stroke={PATH[30].stroke} strokeWidth={6} />
				<line x1={210} x2={210} y1={GY} y2={SEA} stroke={ROLE.given.stroke} strokeWidth={4 + 8 * glow} />
				<line x1={198} x2={222} y1={GY} y2={GY} stroke={ROLE.given.stroke} strokeWidth={4} />
				<line x1={198} x2={222} y1={SEA} y2={SEA} stroke={ROLE.given.stroke} strokeWidth={4} />
				<Bracket x1={MX} y1={SEA + 32} x2={landX} y2={SEA + 32} color={ROLE.x.ink} />
				{wp > 0 ? <g><rect x={WALL_X - 13} y={top} width={26} height={SEA - top} fill={CARD} stroke={INK} strokeWidth={4} />{hatch}</g> : null}
				{wp >= 1 ? <Bracket x1={MX} y1={SEA - 40} x2={WALL_X} y2={SEA - 40} color={ROLE.x.ink} at={wallAt + 20} /> : null}
				{f >= clearAt ? <DrawPath d={`M${WALL_X},${WALL_TOP} L${WALL_X},${pyWall}`} at={clearAt} dur={16} color={INK} width={4} dash="10 8" /> : null}
			</FrameSvg>
			<Lbl x={196} y={(GY + SEA) / 2} color={ROLE.given.ink} anchor="end" size={TYPE.current}>−30 m</Lbl>
			<Lbl x={(MX + landX) / 2 + 160} y={SEA + 70} color={ROLE.x.ink} anchor="middle" size={TYPE.current}>64.0 m</Lbl>
			{wp >= 1 ? <Lbl x={(MX + WALL_X) / 2 + 40} y={SEA - 76} at={wallAt + 20} color={ROLE.x.ink} anchor="middle" size={TYPE.current}>x (known)</Lbl> : null}
			{f >= clearAt ? <div style={{position: 'absolute', left: WALL_X + 18, top: pyWall - 130, opacity: prog(f, clearAt + 10, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 90, color: INK}}>?</div> : null}
			<div style={{position: 'absolute', left: 120, top: 250, ...DISPLAY(36, ROLE.v.ink, 800)}}>u = 20<MS />, θ = 30°</div>
			<Ledger x={1290} y={186} w={534} h={300} size={32} titleSize={28}
				clock={{value: 't', t: 0.25}}
				carry={reversed ? {at: clearAt, into: 'y'} : {at: carryAt, into: 'x'}}
				hor={{rows: [{content: <><Q s="u" ax="x" /> = 17.32</>, at: -30}]}}
				ver={{rows: [{content: <><Q s="u" ax="y" /> = 10.0</>, at: -30}]}} />
			{recap ? (
				<Enter at={recap.at} out={recap.out} style={{position: 'absolute', left: 1290, top: 520, width: 534}}>
					<div style={{background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 22px 14px', border: `3px solid ${INK}`}}>
						<div style={{...DISPLAY(34, ROLE.y.ink, 800)}}>1. vertical: <Q s="s" ax="y" plain /> = −30 m → t</div>
						<div style={{...DISPLAY(34, INK, 800)}}>2. keep t = 3.70 s</div>
						<div style={{...DISPLAY(34, ROLE.x.ink, 800)}}>3. across: R = <Q s="u" ax="x" plain />t = 64.0 m</div>
					</div>
				</Enter>
			) : null}
			<Enter at={clearAt + 20} style={{position: 'absolute', left: 1290, top: 520, width: 534}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall, color: INK, whiteSpace: 'normal'}}>this time: x known, so find t first</div>
			</Enter>
			<Chip x={1290} y={640} at={chipAt} size={36} w={534} color={INK} border={INK}>Next: will a projectile clear a wall at a known horizontal position?</Chip>
		</>
	);
};
/** v05's final frame, for the next lesson's opening. */
export const V05FinalFrame: React.FC = () => <HandoffBoard />;
export const S16: React.FC = () => {
	const id = 'handoff';
	const knew = cue(id, 'knew the vertical'), solveC = cue(id, 'solve the vertical'), nextT = cue(id, 'Next time'), hd = cue(id, 'horizontal distance'), wall = cue(id, 'a wall'), clear = cue(id, 'clear it');
	return <HandoffBoard pulseAt={knew} carryAt={knew + 10} wallAt={wall} clearAt={clear} chipAt={hd} recap={{at: solveC, out: nextT}} />;
};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>Landing h below launch: <Q s="s" ax="y" /> = −h (up positive). Level-ground shortcuts fail.</>, at: 4},
		{content: <>Solve 4.9t<Sup>2</Sup> − <Q s="u" ax="y" />t − h = 0 with the quadratic formula.</>, at: 9},
		{content: <>Keep the positive root; the negative one is before launch.</>, at: 14},
		{content: <>Then R = <Q s="u" ax="x" />t.</>, at: 19},
		{content: <>From a height, the best angle is below 45°; complements don't tie.</>, at: 24},
	];
	const tx = (t: number) => 70 + (t + 2) * 80, sy_ = (s: number) => 40 - s * 4.6;
	let d = '';
	for (let i = 0; i <= 60; i++) { const t = -2 + (6 * i) / 60; d += `${i ? 'L' : 'M'}${tx(t).toFixed(1)},${sy_(10 * t - 4.9 * t * t).toFixed(1)} `; }
	const c = CASE[30];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={40} aid={
				<MemoryCard at={20} main={<><span style={{color: ROLE.given.ink}}>Down is negative,</span> time is positive.</>} sub="(up positive; launch above the landing)"
					picture={<svg width={584} height={220}>
						<line x1={60} x2={570} y1={sy_(0)} y2={sy_(0)} stroke={INK_SOFT} strokeWidth={2.5} />
						<line x1={tx(0)} x2={tx(0)} y1={10} y2={210} stroke={INK_SOFT} strokeWidth={2.5} />
						<line x1={60} x2={570} y1={sy_(-HC)} y2={sy_(-HC)} stroke={ROLE.given.stroke} strokeWidth={4} strokeDasharray="10 8" />
						<path d={d} fill="none" stroke={ROLE.y.stroke} strokeWidth={5} />
						<circle cx={tx(c.t)} cy={sy_(-HC)} r={12} fill="none" stroke={INK} strokeWidth={4} />
						<path d={`M${tx(c.tNeg) - 12},${sy_(-HC) - 12} l24,24 M${tx(c.tNeg) + 12},${sy_(-HC) - 12} l-24,24`} stroke={ROLE.slate.stroke} strokeWidth={4} />
						<text x={tx(c.t) - 20} y={sy_(-HC) - 22} textAnchor="end" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={INK}>3.70 s ✓</text>
						<text x={tx(c.tNeg) + 20} y={sy_(-HC) - 22} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={ROLE.slate.ink}>−1.66 s</text>
						<text x={70} y={sy_(-HC) + 30} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 26}} fill={ROLE.given.ink}>−30 m</text>
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};

