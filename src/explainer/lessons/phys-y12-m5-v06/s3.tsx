// Scenes 10 to 15: two attempts with brief feedback, the handoff (its last frame is exported for the next
// lesson), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TRACK, TYPE} from '../../shared/tokens';
import {AngleArc, AnswerBox, BallSvg, Bracket, Chip, CrossedChip, DISPLAY, FlightLane, GroundLine, Ledger, MS, Q, ROLE, Row, Sup, VecArrow} from '../../physics/projectile/board';
import {G, pos, uy} from '../../physics/projectile/flight';
import {StandingLauncher, launcherAt} from '../phys-y12-m5-v02/parts';
import {A1, A2, ACCENT, C35, DEG, HEAD, HEAD_SIZE, HO, T35, cue, hold} from './common';
import {BALL_D, Lbl, Target, W, WallStage, pathU, ptU, wallTop, wallX} from './parts';
import {StageBrackets, card} from './s1';

// ---------- attempt 1 picture (answer-free: the set-up and the givens only; not to scale) ----------
const KX = 23, KY = 60, G1 = 500;
const a1Geom = () => {
	const lw = 160, px = 50;
	const g0 = launcherAt(px, 0, lw, A1.deg);
	const lift = -g0.muzzle[1]; // muzzle height above the launcher's standing surface
	const launchY = G1 - A1.hp * KY;
	const platTop = launchY + lift;
	const g = launcherAt(px, platTop, lw, A1.deg);
	return {lw, px, platTop, g, mx: g.muzzle[0], my: g.muzzle[1], wallX: g.muzzle[0] + A1.x * KX, wallTop: G1 - A1.hw * KY};
};
const A1Picture: React.FC<{pathAt?: number; ballAt?: number; clearAt?: number}> = ({pathAt, ballAt, clearAt}) => {
	const f = useCurrentFrame();
	const {lw, px, platTop, mx, my, wallX: wx, wallTop: wt} = a1Geom();
	const a = (A1.deg * Math.PI) / 180;
	const pt = (t: number): [number, number] => { const [x, y] = pos(A1.u, A1.deg, t); return [mx + x * KX, my - y * KY]; };
	let d = '';
	const tEnd = A1.t * 1.07;
	for (let i = 0; i <= 80; i++) { const [x, y] = pt((tEnd * i) / 80); d += `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)} `; }
	const [bx, by] = pt(A1.t);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={0} y={platTop} width={px + 120} height={G1 - platTop} fill={TRACK} stroke={INK} strokeWidth={3} />
			<StandingLauncher px={px} groundY={platTop} lw={lw} deg={A1.deg} ground={false} />
			<GroundLine x1={0} x2={670} y={G1} />
			<rect x={wx - 11} y={wt} width={22} height={G1 - wt} fill={CARD} stroke={INK} strokeWidth={4} />
			<line x1={mx} x2={mx + 150} y1={my} y2={my} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 7" />
			<path d={`M${mx + 56},${my} A56,56 0 0,0 ${mx + 56 * Math.cos(a)},${my - 56 * Math.sin(a)}`} fill="none" stroke={INK} strokeWidth={3.5} />
			<text x={mx + 66} y={my - 8} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 32}} fill={INK}>30°</text>
			<VecArrow x={mx} y={my} dx={150 * Math.cos(a)} dy={-150 * Math.sin(a)} color={ROLE.v.stroke} width={7} label={<>20.0<MS /></>} lx={mx + 30} ly={my - 130} size={40} />
			<Bracket x1={mx + 34} y1={my} x2={mx + 34} y2={G1} color={ROLE.given.ink} label="2.0 m" lx={mx + 50} ly={(my + G1) / 2 + 4} anchor="start" size={32} />
			<Bracket x1={mx} y1={G1 - 26} x2={wx} y2={G1 - 26} color={ROLE.x.ink} label="20.0 m" lx={(mx + wx) / 2 + 40} ly={G1 - 54} size={32} />
			<Bracket x1={wx - 40} y1={wt} x2={wx - 40} y2={G1} color={ROLE.given.ink} label="3.0 m" lx={wx - 52} ly={(wt + G1) / 2 + 4} anchor="end" size={32} />
			{pathAt !== undefined && f >= pathAt ? <DrawPath d={d} at={pathAt} dur={36} color={ROLE.v.stroke} width={5} /> : null}
			{ballAt !== undefined && f >= ballAt ? <BallSvg cx={bx} cy={by} d={26} /> : null}
			{clearAt !== undefined ? <Bracket x1={wx + 30} y1={wt} x2={wx + 30} y2={by + 13} color={INK} at={clearAt} label="4.01 m" lx={wx + 42} ly={(wt + by) / 2} anchor="start" size={32} /> : null}
			<text x={670} y={G1 + 50} textAnchor="end" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 32, fontStyle: 'italic'}} fill={INK_SOFT}>not to scale</text>
		</svg>
	);
};
// ---------- attempt 2 picture (launch point, ground, wall; no ball position) ----------
const KY2 = 36, G2 = 520;
const A2Picture: React.FC<{datumAt?: number; ballAt?: number; clearAt?: number; dropAt?: number}> = ({datumAt, ballAt, clearAt, dropAt}) => {
	const f = useCurrentFrame();
	const top = G2 - A2.h * KY2, wx = 500, wt = G2 - A2.hw * KY2, by = G2 - A2.height * KY2;
	const glow = datumAt === undefined ? 0 : prog(f, datumAt, 14);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={40} y={top + 20} width={90} height={G2 - top - 20} fill={TRACK} stroke={INK} strokeWidth={3} />
			<BallSvg cx={85} cy={top} d={40} />
			<GroundLine x1={0} x2={670} y={G2} />
			{glow > 0 ? <line x1={0} x2={670} y1={G2} y2={G2} stroke={ROLE.given.stroke} strokeWidth={9} strokeDasharray="18 10" opacity={glow} /> : null}
			<rect x={wx - 11} y={wt} width={22} height={G2 - wt} fill={CARD} stroke={INK} strokeWidth={4} />
			<line x1={110} x2={640} y1={top} y2={top} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 7" />
			<Bracket x1={160} y1={top} x2={160} y2={G2} color={ROLE.given.ink} label="12.0 m" lx={176} ly={(top + G2) / 2} anchor="start" size={34} />
			<Bracket x1={wx + 50} y1={wt} x2={wx + 50} y2={G2} color={ROLE.given.ink} label="9.0 m" lx={wx + 66} ly={(wt + G2) / 2 + 30} anchor="start" size={34} />
			<text x={40} y={top - 34} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 34}} fill={INK}>launch point</text>
			{ballAt !== undefined && f >= ballAt ? <BallSvg cx={wx} cy={by} d={16} /> : null}
			{dropAt !== undefined ? <Bracket x1={wx - 50} y1={top} x2={wx - 50} y2={by} color={ROLE.y.ink} at={dropAt} label="−2.6 m" lx={wx - 62} ly={(top + by) / 2 - 10} anchor="end" size={32} /> : null}
			{ballAt !== undefined ? <Bracket x1={300} y1={G2} x2={300} y2={by} color={ROLE.given.ink} at={ballAt} label="9.4 m" lx={286} ly={(G2 + by) / 2 + 40} anchor="end" size={34} /> : null}
			{clearAt !== undefined ? <Bracket x1={wx + 22} y1={wt} x2={wx + 22} y2={by} color={INK} at={clearAt} /> : null}
		</svg>
	);
};
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{mark?: number}> = ({mark}) => <>A ball is launched at 20.0 m s<Sup>−1</Sup> at 30° above the horizontal from a <M at={mark}>platform 2.0 m above level ground</M>. A wall 3.0 m high stands <M at={mark === undefined ? undefined : mark + 8}>20.0 m away horizontally</M> from the launch point. Neglect air resistance and take g = 9.8 m s<Sup>−2</Sup>. Determine whether the ball clears the wall and, if so, by how much.</>;
const Q2: React.FC<{mark?: number}> = ({mark}) => <>A ball is launched from a point <M at={mark}>12.0 m above level ground</M>. When it reaches the horizontal position of a wall, its vertical displacement from the launch point is <M at={mark === undefined ? undefined : mark + 8}>−2.6 m</M> (up positive). The wall is 9.0 m tall. Determine whether the ball clears the wall and, if so, by how much.</>;
export const S10: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={40} marks={3} picture={<A1Picture />}><Q1 /></QuestionScene></Accent>;
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={40} marks={2} picture={<A2Picture />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '10px 24px', ...DISPLAY(30, INK, 600), whiteSpace: 'normal', lineHeight: 1.26}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 20px', ...DISPLAY(30, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const id = 'feedback-1';
	const uxIs = cue(id, 'u x is'), reaches = cue(id, 'reaches the wall'), secs = cue(id, 'seconds'), thenSy = cue(id, 'Then s y'), metres1 = cue(id, 'metres'), datum = cue(id, 'ground datum'), clearsC = cue(id, 'clears the three'), four01 = cue(id, 'four point zero one'), slip = cue(id, 'The classic slip'), forget = cue(id, 'forgetting');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={404} givens={<>20.0 m s<Sup>−1</Sup> at 30° | platform 2.0 m above the ground | wall 3.0 m high, 20.0 m away | g = 9.8 m s<Sup>−2</Sup></>}><Q1 mark={datum} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 500, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={uxIs} ageAt={thenSy} size={TYPE.current} oldSize={34}><span style={{color: ROLE.x.ink}}><Q s="u" ax="x" plain /> = 20.0 cos 30° = 17.321<MS /></span></Row>
				<Row at={reaches} ageAt={datum} size={TYPE.current} oldSize={34}><span style={{color: ROLE.x.ink}}>t = 20.0 ÷ 17.321 = </span><AnswerBox at={secs} tick={false}>1.1547 s</AnswerBox></Row>
				<Row at={thenSy} ageAt={clearsC} size={TYPE.current} oldSize={34}><span style={{color: ROLE.y.ink}}><Q s="s" ax="y" plain /> = 10.0t − 4.9t<Sup>2</Sup> = +5.0137 m</span></Row>
				<Row at={datum} size={TYPE.current}><span style={{color: ROLE.given.ink}}>height</span> = 2.0 + 5.0137 = 7.0137 m</Row>
				<Row at={clearsC} size={TYPE.current}>clearance = 7.0137 − 3.0 = <AnswerBox at={four01}>4.01 m</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={800} at={slip} crossAt={forget} size={34} caption="use one datum: the ground">5.01 − 3.0 = 2.01 m clearance</CrossedChip>
			<div style={{position: 'absolute', left: 1250, top: 430, width: 678, height: 560, transform: 'scale(0.84)', transformOrigin: 'left top'}}><A1Picture pathAt={thenSy} ballAt={metres1} clearAt={four01} /></div>
		</>
	);
};

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'feedback-2';
	const datum = cue(id, 'ground datum'), twelve = cue(id, 'twelve minus'), ground2 = cue(id, 'ground', 2), wallTopC = cue(id, 'wall top'), clearsBy = cue(id, 'clears it by'), forty = cue(id, 'forty centimetres'), slip = cue(id, 'The slip'), mustHit = cue(id, 'must hit');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={354} givens={<>launch 12.0 m above the ground | <Q s="s" ax="y" plain /> at the wall = −2.6 m (up positive) | wall 9.0 m tall</>}><Q2 mark={datum} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 466, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={twelve} size={TYPE.working}><span style={{color: ROLE.given.ink}}>height</span> = 12.0 + (−2.6) = 9.4 m</Row>
				<Row at={wallTopC} size={TYPE.working}>wall top = 9.0 m</Row>
				<Row at={clearsBy} size={TYPE.working}>clearance = 9.4 − 9.0 = <AnswerBox at={forty}>0.4 m</AnswerBox></Row>
			</div>
			<HandTag x={110} y={700} text="both on the ground datum" at={wallTopC + 10} size={TYPE.handSmall} color={ROLE.given.ink} />
			<CrossedChip x={96} y={780} at={slip} crossAt={mustHit} size={36} caption="negative means below launch, not below the wall"><Q s="s" ax="y" plain /> is negative, so it hits</CrossedChip>
			<div style={{position: 'absolute', left: 1220, top: 380, width: 678, height: 560, transform: 'scale(0.9)', transformOrigin: 'left top'}}><A2Picture datumAt={datum} ballAt={ground2} dropAt={twelve} clearAt={clearsBy} /></div>
			<Lbl x={1220 + 0.9 * 535} y={380 + 0.9 * (G2 - 9.2 * KY2) + 6} at={forty} color={INK} size={32}>0.4 m</Lbl>
		</>
	);
};

// ---------- 14. handoff (its last frame is the next lesson's first frame) ----------
const HX = 200, HG = 860, HPPM = 12, HLW = 170, HDEG = 45;
const TARGET_X = HX + HO.R * HPPM;
const hPath = (deg: number) => {
	const T = (2 * uy(HO.u, deg)) / G;
	let d = '';
	for (let i = 0; i <= 90; i++) { const t = (T * i) / 90; const [x, y] = pos(HO.u, deg, t); d += `${i ? 'L' : 'M'}${(HX + x * HPPM).toFixed(1)},${(HG - y * HPPM).toFixed(1)} `; }
	return d;
};
/** The handoff board. Phase 1 recaps the wall; on `takeAt` the cliff and wall slide away and level ground with a target appears. */
export const HandoffBoard: React.FC<{takeAt?: number; levelAt?: number; targetAt?: number; distAt?: number; uAt?: number; answersAt?: number; whyAt?: number; recapAt?: number}> = ({takeAt = -200, levelAt = -200, targetAt = -200, distAt = -200, uAt = -200, answersAt = -200, whyAt = -200, recapAt}) => {
	const f = useCurrentFrame();
	const gone = prog(f, takeAt, 30);
	const come = prog(f, takeAt + 16, 26);
	const [iwx, iwy] = ptU(W, DEG, C35.t);
	const wx = wallX(W), wt = wallTop(W);
	const a = (HDEG * Math.PI) / 180;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{gone < 1 ? (
				<div style={{position: 'absolute', inset: 0, opacity: 1 - gone, transform: `translateX(${-260 * gone}px)`}}>
					<FrameSvg>
						<WallStage w={W} deg={DEG} ball={false} />
						<path d={pathU(W, DEG, T35)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} />
						<BallSvg cx={iwx} cy={iwy} d={BALL_D + 4} />
						<Bracket x1={wx} y1={wt} x2={wx} y2={iwy + 18} color={INK} />
					</FrameSvg>
					<StageBrackets sub={false} />
					<Lbl x={wx + 16} y={(wt + iwy) / 2 + 20} color={INK} size={36}>10.4 m</Lbl>
				</div>
			) : null}
			{come > 0 ? (
				<div style={{position: 'absolute', inset: 0, opacity: come}}>
					<FrameSvg>
						<FlightLane mx={HX} gy={HG} ppm={HPPM} u={HO.u} deg={HDEG} lw={HLW} right={1250} />
						<Target x={TARGET_X} y={HG} p={prog(f, targetAt, 14)} />
						<Bracket x1={HX} y1={HG + 34} x2={TARGET_X} y2={HG + 34} color={ROLE.x.ink} at={distAt} />
						<VecArrow x={HX} y={HG} dx={150 * Math.cos(a)} dy={-150 * Math.sin(a)} color={ROLE.v.stroke} width={7} at={uAt} />
						{f >= uAt ? <g opacity={prog(f, uAt, 12)}><AngleArc px={HX} py={HG} r={60} deg={HDEG} label="θ = ?" refLen={110} size={32} /></g> : null}
						{f >= answersAt ? <DrawPath d={hPath(HO.low)} at={answersAt} dur={34} color={ROLE.v.stroke} width={5} dash="14 10" /> : null}
						{f >= answersAt + 10 ? <DrawPath d={hPath(HO.high)} at={answersAt + 10} dur={34} color={ROLE.v.stroke} width={5} dash="14 10" /> : null}
					</FrameSvg>
					<Lbl x={(HX + TARGET_X) / 2} y={HG + 72} at={distAt} color={ROLE.x.ink} anchor="middle" size={TYPE.current}>72 m</Lbl>
					<Lbl x={TARGET_X + 12} y={HG - 96} at={targetAt} color={INK} anchor="middle" size={30}>target</Lbl>
					<Lbl x={HX - 10} y={HG - 110} at={uAt} color={ROLE.v.ink} anchor="end" size={32}>u = 30<MS /></Lbl>
					<Lbl x={480} y={HG - 64} at={answersAt + 20} color={ROLE.v.ink} size={30}>θ = ?</Lbl>
					<Lbl x={330} y={HG - 262} at={answersAt + 30} color={ROLE.v.ink} anchor="end" size={30}>θ = ?</Lbl>
				</div>
			) : null}
			<Ledger x={1290} y={186} w={534} h={290} size={30} titleSize={28}
				clock={{value: 't', t: 0.4}}
				hor={{rows: gone < 0.5 ? [{content: <>t = <Q s="s" ax="x" plain /> ÷ <Q s="u" ax="x" plain /></>, at: -30}] : [{content: <><Q s="s" ax="x" plain /> = 72 m</>, at: distAt}]}}
				ver={{rows: gone < 0.5 ? [{content: <>height at that t</>, at: -30}] : [{content: <><Q s="s" ax="y" plain /> = 0 (level)</>, at: levelAt}]}} />
			{recapAt !== undefined ? (
				<Enter at={recapAt} out={takeAt} style={{position: 'absolute', left: 1290, top: 520, width: 534}}>
					<div style={{...card, border: `3px solid ${INK}`}}>
						<div style={{...DISPLAY(34, ROLE.x.ink, 800)}}>1. when: t from x</div>
						<div style={{...DISPLAY(34, ROLE.y.ink, 800)}}>2. how high: <Q s="s" ax="y" plain /> at that t</div>
						<div style={{...DISPLAY(34, ROLE.given.ink, 800)}}>3. compare on one datum</div>
					</div>
				</Enter>
			) : null}
			<Enter at={targetAt} style={{position: 'absolute', left: 1290, top: 520, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<div style={{...DISPLAY(34, INK, 800)}}>level ground</div>
					<div style={{...DISPLAY(34, ROLE.v.ink, 800)}}>u = 30<MS /></div>
					<div style={{...DISPLAY(34, ROLE.x.ink, 800)}}>target 72 m away</div>
					<div style={{...DISPLAY(TYPE.current, INK, 800), opacity: prog(f, uAt, 12)}}>aim at θ = ?</div>
				</div>
			</Enter>
			<Chip x={1290} y={790} at={whyAt} size={36} w={534} color={INK} border={INK}>Next: why can two launch angles reach the same target?</Chip>
		</>
	);
};
/** v06's final frame, for the next lesson's opening. */
export const V06FinalFrame: React.FC = () => <HandoffBoard />;
export const S14: React.FC = () => {
	const id = 'handoff';
	const findWhen = cue(id, 'find when'), take = cue(id, 'take the wall'), level = cue(id, 'level ground'), target = cue(id, 'target'), s72 = cue(id, 'seventy-two'), thirty = cue(id, 'thirty metres'), answers = cue(id, 'answers'), why = cue(id, 'why');
	return <HandoffBoard recapAt={findWhen} takeAt={take} levelAt={level} targetAt={target} distAt={s72} uAt={thirty} answersAt={answers} whyAt={why} />;
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const notes = [
		{content: <>An obstacle matters only when the ball reaches its x position.</>, at: 2},
		{content: <>When: t = <Q s="s" ax="x" /> ÷ <Q s="u" ax="x" /> (<Q s="u" ax="x" /> constant).</>, at: 6},
		{content: <>How high: <Q s="s" ax="y" /> = <Q s="u" ax="y" />t + ½<Q s="a" ax="y" />t<Sup>2</Sup> (up positive).</>, at: 10},
		{content: <>One datum: height = launch height + <Q s="s" ax="y" />; clearance = height − wall.</>, at: 14},
		{content: <>Carry unrounded values; round once at the end.</>, at: 18},
	];
	const w = {x0: 70, y0: 70, ppm: 4};
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={40} aid={
				<MemoryCard at={24} main={<><span style={{color: ROLE.x.ink}}>Where, when,</span> <span style={{color: ROLE.y.ink}}>how high,</span> <span style={{color: ROLE.given.ink}}>compare.</span></>} sub="(time from x, height from y, one datum)"
					picture={<svg width={584} height={220}>
						<rect x={10} y={w.y0} width={64} height={60} fill={TRACK} />
						<line x1={10} x2={74} y1={w.y0} y2={w.y0} stroke={INK} strokeWidth={3} />
						<line x1={74} x2={74} y1={w.y0} y2={130} stroke={INK} strokeWidth={3} />
						<line x1={74} x2={560} y1={130} y2={130} stroke={ROLE.y.stroke} strokeWidth={3} />
						<line x1={74} x2={560} y1={132} y2={132} stroke={ROLE.given.stroke} strokeWidth={4} strokeDasharray="12 8" />
						<rect x={w.x0 + 25 * w.ppm - 7} y={130 - 8 * w.ppm} width={14} height={8 * w.ppm} fill={CARD} stroke={INK} strokeWidth={3} />
						<path d={pathU(w, DEG, T35)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} />
						<line x1={w.x0 + 25 * w.ppm} x2={w.x0 + 25 * w.ppm} y1={10} y2={130 - 8 * w.ppm} stroke={INK} strokeWidth={2.5} strokeDasharray="6 6" />
						<circle cx={w.x0 + 25 * w.ppm} cy={w.y0 - C35.sy * w.ppm} r={7} fill={INK} />
						<text x={w.x0 + 25 * w.ppm + 16} y={w.y0 - 10} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={INK}>10.4 m clear</text>
						<text x={w.x0 + 4} y={190} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 26}} fill={ROLE.x.ink}>where: 25 m</text>
						<text x={w.x0 + 200} y={190} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 26}} fill={ROLE.x.ink}>when: 1.70 s</text>
						<text x={w.x0 + 4} y={216} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 26}} fill={ROLE.given.ink}>datum: the sea</text>
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};

