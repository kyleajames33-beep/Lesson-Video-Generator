// Scenes 12 to 17: two attempts with brief feedback, the handoff to banked roads (its last frame is exported
// for the next lesson), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, MS, ROLE, Row, VecArrow, BallSvg} from '../../physics/projectile/board';
import {fx} from '../../physics/projectile/flight';
import {IntoScreen, RearCar, RoadSection, coneGeom, rearCarGeom} from '../../physics/circular/road-cone';
import {A1, A2, ACCENT, HEAD, HEAD_SIZE, cue, hold, mono} from './common';
import {AMBER, Lbl, SidePicture} from './parts';
import {FT, Title, card} from './s1';

const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{mark?: number}> = ({mark}) => <>A conical pendulum has a bob of mass 0.50 kg on a light string of length <M at={mark}>0.80 m</M>. The bob moves at constant speed in a <M at={mark === undefined ? undefined : mark + 12}>horizontal circle</M> with the string at <M at={mark === undefined ? undefined : mark + 6}>35° to the vertical</M>. Calculate: (a) the radius of the circle; (b) the tension in the string; (c) the speed of the bob.</>;
const Q2: React.FC<{mark?: number}> = ({mark}) => <>The string of a conical pendulum is <M at={mark}>0.40 m</M> long and makes an angle of <M at={mark === undefined ? undefined : mark + 6}>25° with the vertical</M> as the bob moves in a horizontal circle at constant speed. Calculate the period of the motion.</>;
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<SidePicture L="0.80 m" theta={35} />}><Q1 /></QuestionScene></Accent>;
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={2} picture={<SidePicture L="0.40 m" theta={25} />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '10px 24px', ...DISPLAY(30, INK, 600), whiteSpace: 'normal', lineHeight: 1.26}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 20px', ...DISPLAY(30, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);
const Picture: React.FC<{children: React.ReactNode}> = ({children}) => (
	<div style={{position: 'absolute', left: 1250, top: 380, transform: 'scale(0.85)', transformOrigin: 'top left'}}>{children}</div>
);

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const r = cue(id, 'zero point four five nine'), over = cue(id, 'm g over cosine'), ft = cue(id, 'five point nine eight'), root = cue(id, 'square root'), v = cue(id, 'one point seven seven'), slip = cue(id, 'The slip');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={378} givens={<>m = 0.50 kg | string 0.80 m | 35° to the vertical | constant speed, horizontal circle</>}><Q1 mark={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={r - 30} ageAt={over} size={TYPE.working} oldSize={38}>(a) r = 0.80 sin 35° = <AnswerBox at={r}><span>{fx(A1.r, 3)} m</span></AnswerBox></Row>
				<Row at={over} ageAt={root} size={TYPE.current} oldSize={36}>(b) <FT /> = (0.50 × 9.8) ÷ cos 35° = 4.90 ÷ 0.819</Row>
				<Row at={ft - 10} ageAt={root} size={TYPE.working} oldSize={38}>&nbsp;&nbsp;&nbsp;&nbsp;= <AnswerBox at={ft}><span><FT /> = {fx(A1.FT, 2)} N</span></AnswerBox></Row>
				<Row at={root} size={TYPE.working}>(c) v = √(0.459 × 9.8 × tan 35°) = <AnswerBox at={v}><span>{fx(A1.v, 2)}<MS /></span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={slip + 20} size={34} caption="r = L sin θ">r = 0.80 m</CrossedChip>
			<Picture><SidePicture L="0.80 m" theta={35} rAt={r} rLabel="r = 0.459 m" /></Picture>
		</>
	);
};

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const lcos = cue(id, 'L cosine theta'), h = cue(id, 'zero point three six three'), then = cue(id, 'Then T equals'), t121 = cue(id, 'one point two one'), slip = cue(id, 'The slip'), t127 = cue(id, 'one point two seven');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={330} givens={<>string 0.40 m | 25° to the vertical | constant speed, horizontal circle</>}><Q2 mark={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={lcos} size={36}>the circle sits h = L cos θ below the support</Row>
				<Row at={h - 30} size={TYPE.working}>h = 0.40 cos 25° = <AnswerBox at={h} tick={false}><span>{fx(A2.h, 3)} m</span></AnswerBox></Row>
				<Row at={then} size={TYPE.working}>T = 2π√(0.363 ÷ 9.8) = <AnswerBox at={t121}><span>{fx(A2.T, 2)} s</span></AnswerBox></Row>
				<Row at={t121 + 20} size={30}><span style={{color: ROLE.given.ink}}>(or r = {fx(A2.r, 3)} m, v = {fx(A2.v, 3)}<MS />, T = 2πr/v = 1.21 s)</span></Row>
			</div>
			<CrossedChip x={96} y={800} at={slip} crossAt={t127 + 10} size={34} caption="use h, not L">T = 2π√(0.40 ÷ 9.8) = {fx(A2.wrongT, 2)} s</CrossedChip>
			<Picture><SidePicture L="0.40 m" theta={25} hAt={lcos} hLabel="h" /></Picture>
		</>
	);
};

// ---------- 16. handoff: tilt the road ----------
const RD = {cx: 640, cy: 800, half: 520, w: 440, tilt: 12, N: 260, W: 254};
export const HandoffBoard: React.FC<{slantAt?: number; roadAt?: number; tiltAt?: number; tooAt?: number; inAt?: number; askAt?: number}> = ({slantAt = -300, roadAt = -300, tiltAt = -300, tooAt = -200, inAt = -100, askAt = -60}) => {
	const f = useCurrentFrame();
	const t = kf(f, mono([[tiltAt, 0], [tiltAt + 40, RD.tilt]], 10));
	const nt = kf(f, mono([[tooAt - 20, 0], [tooAt + 10, 1]], 10)) * t; // N follows the road from "too"
	const g = rearCarGeom(RD.cx, RD.cy, RD.w, t);
	const [x, y] = g.com;
	const a = (nt * Math.PI) / 180;
	const nx = -Math.sin(a) * RD.N, ny = -Math.cos(a) * RD.N;
	const ra = (t * Math.PI) / 180;
	const ux = Math.cos(ra), uy = -Math.sin(ra), px = -Math.sin(ra), py = -Math.cos(ra); // along the road (to the right) and its normal
	const sq = 26;
	const showSq = nt > 0.5 && Math.abs(nt - t) < 0.5;
	return (
		<>
			<SceneHeading text="How does a banked road reduce reliance on friction?" at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<RoadSection cx={RD.cx} cy={RD.cy} half={RD.half} tilt={t} />
				<RearCar cx={RD.cx} cy={RD.cy} w={RD.w} tilt={t} />
				<IntoScreen x={RD.cx + 300} y={RD.cy - 320} />
				<line x1={RD.cx - RD.half + 150} x2={RD.cx - RD.half + 10} y1={RD.cy - 400} y2={RD.cy - 400} stroke={ROLE.given.stroke} strokeWidth={5} />
				<path d={`M${RD.cx - RD.half + 10},${RD.cy - 400} l22,-14 l0,28 Z`} fill={ROLE.given.stroke} />
				{showSq ? <g opacity={prog(f, tooAt + 10, 12)}>
					<line x1={RD.cx} y1={RD.cy} x2={x} y2={y} stroke={AMBER.stroke} strokeWidth={3} strokeDasharray="8 7" />
					<path d={`M${RD.cx + ux * sq},${RD.cy + uy * sq} L${RD.cx + ux * sq + px * sq},${RD.cy + uy * sq + py * sq} L${RD.cx + px * sq},${RD.cy + py * sq}`} fill="none" stroke={INK} strokeWidth={3} />
				</g> : null}
				<VecArrow x={x} y={y} dx={nx} dy={ny} color={AMBER.stroke} width={8} head={26} />
				<VecArrow x={x} y={y} dx={0} dy={RD.W} color={AMBER.stroke} width={8} head={26} />
				{f >= inAt ? <g opacity={prog(f, inAt, 12)}>
					<VecArrow x={x} y={y + ny} dx={nx} dy={0} color={ROLE.x.stroke} width={7} head={20} dash="10 7" at={inAt} />
					<line x1={x} y1={y} x2={x} y2={y + ny} stroke={ROLE.x.stroke} strokeWidth={2.5} strokeDasharray="6 6" />
				</g> : null}
			</FrameSvg>
			<Lbl x={RD.cx - RD.half + 10} y={RD.cy - 446} color={ROLE.given.ink} size={30}>centre of the bend</Lbl>
			<Lbl x={RD.cx + 330} y={RD.cy - 320} color={ROLE.x.ink} size={30}>moving into the screen</Lbl>
			<Lbl x={x + nx + 24} y={y + ny - 10} color={AMBER.ink} size={TYPE.current}>N</Lbl>
			<Lbl x={x + 24} y={y + RD.W - 16} color={AMBER.ink} size={TYPE.current}>mg</Lbl>
			{f >= inAt ? <div style={{position: 'absolute', left: x + nx - 90, top: y + ny - 90, opacity: prog(f, inAt + 10, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 80, color: ROLE.x.ink}}>?</div> : null}
			<Enter at={slantAt} style={{position: 'absolute', left: 1290, top: 200, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>The same trick</Title>
					<div style={{...DISPLAY(32, ROLE.x.ink, 800), whiteSpace: 'normal', marginTop: 4}}>slanted string: part of the tension points in</div>
					<div style={{...DISPLAY(32, AMBER.ink, 800), whiteSpace: 'normal', marginTop: 6, opacity: prog(f, roadAt, 12)}}>tilted road: N stays at right angles to the road</div>
				</div>
			</Enter>
			<svg width={260} height={190} style={{position: 'absolute', left: 1290, top: 480, overflow: 'visible', opacity: prog(f, slantAt, 14)}}>
				<PendSmall />
			</svg>
			<Chip x={1290} y={700} at={askAt} size={36} w={534} color={INK} border={INK}>Next: how does a banked road reduce reliance on friction?</Chip>
		</>
	);
};
const PendSmall: React.FC = () => {
	const {bob} = coneGeom([80, 20], 150, 30, 0.3, 0);
	return (
		<g>
			<line x1={30} x2={130} y1={20} y2={20} stroke={INK} strokeWidth={5} />
			<line x1={80} y1={20} x2={bob[0]} y2={bob[1]} stroke={INK} strokeWidth={3} />
			<VecArrow x={bob[0]} y={bob[1]} dx={-60} dy={0} color={ROLE.x.stroke} width={6} head={18} dash="8 6" />
			<VecArrow x={bob[0]} y={bob[1]} dx={-40} dy={-70} color={AMBER.stroke} width={6} head={18} />
			<BallSvg cx={bob[0]} cy={bob[1]} d={30} />
			<text x={bob[0] + 26} y={bob[1] + 10} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={ROLE.x.ink}>in part</text>
		</g>
	);
};
/** v13's final frame, for the next lesson's opening. */
export const V13FinalFrame: React.FC = () => <HandoffBoard />;
export const S16: React.FC = () => {
	const id = 'handoff';
	const slant = cue(id, 'slant of the string'), road = cue(id, 'A road can'), tilt = cue(id, 'Tilt the road'), too = cue(id, 'tilts too'), inw = cue(id, 'inwards', 2), ask = cue(id, 'banked road');
	return <HandoffBoard slantAt={slant} roadAt={road} tiltAt={tilt} tooAt={too} inAt={inw} askAt={ask} />;
};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>Two forces: tension <FT /> and weight mg. Centre level with the bob.</>, at: 2},
		{content: <>r = L sin θ; h = L cos θ.</>, at: 6},
		{content: <><span style={{color: ROLE.y.ink}}><FT /> cos θ = mg</span>; <span style={{color: ROLE.x.ink}}><FT /> sin θ = mv²/r</span>.</>, at: 10},
		{content: <>tan θ = v²/(rg): faster, wider. <FT /> &gt; mg, never horizontal.</>, at: 14},
		{content: <>T = 2πr/v = 2π√(h/g): no mass.</>, at: 18},
	];
	const {bob} = coneGeom([150, 30], 170, 30, 0.3, 0);
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={38} aid={
				<MemoryCard at={24} main={<span><span style={{color: INK}}>One string, two jobs: </span><span style={{color: ROLE.y.ink}}>the up part holds, </span><span style={{color: ROLE.x.ink}}>the in part turns.</span></span>} sub="Light string, horizontal circle, steady speed."
					picture={<svg width={584} height={220}>
						<line x1={90} x2={210} y1={30} y2={30} stroke={INK} strokeWidth={5} />
						<line x1={150} x2={150} y1={30} y2={bob[1] + 20} stroke={INK} strokeWidth={2} strokeDasharray="7 6" />
						<line x1={150} y1={30} x2={bob[0]} y2={bob[1]} stroke={INK} strokeWidth={3} />
						<BallSvg cx={bob[0]} cy={bob[1]} d={34} />
						<VecArrow x={bob[0]} y={bob[1]} dx={0} dy={-90} color={ROLE.y.stroke} width={6} head={18} dash="10 6" />
						<VecArrow x={bob[0]} y={bob[1]} dx={-52} dy={0} color={ROLE.x.stroke} width={6} head={18} dash="10 6" />
						<text x={bob[0] + 20} y={bob[1] - 60} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={ROLE.y.ink}>holds</text>
						<text x={bob[0] - 64} y={bob[1] + 40} textAnchor="end" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={ROLE.x.ink}>turns</text>
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
