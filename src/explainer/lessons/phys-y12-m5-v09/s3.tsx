// Scenes 10 to 15: two attempts with brief feedback, the handoff to the tower crane (its last frame is exported
// for the next lesson), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, DISPLAY, GroundLine, ROLE, Row, VecArrow} from '../../physics/projectile/board';
import {ArcAngle, CraneSvg, DashLine, PivotDot, RightMark, SpannerNut, TurnArrow, craneGeom} from '../../physics/projectile/turning';
import {ACCENT, HEAD, cue, hold} from './common';
import {AMBER, Card, Lbl, Line, TURN, Title} from './parts';

const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{mark?: number}> = ({mark}) => <>A force of 40 N is applied to the end of a lever, 0.30 m from the pivot. Calculate the magnitude of the torque about the pivot when the force is (a) <M at={mark}>perpendicular</M> to the lever, (b) <M at={mark === undefined ? undefined : mark + 8}>at 30° to the lever</M>.</>;
const Q2: React.FC<{mark?: number}> = ({mark}) => <>A 40 N force acts on the end of a handle 0.30 m from a pivot. The force is directed along the handle <M at={mark}>towards the pivot</M>. (a) State the perpendicular distance from the pivot to the force's line of action. (b) Calculate the torque about the pivot. (c) State the angle θ between the force and the line from the pivot to the point of application.</>;

// ---------- the exam-style diagrams (answer-free) ----------
const Pivot: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<path d={`M${x},${y + 12} L${x - 34},${y + 70} L${x + 34},${y + 70} Z`} fill={CARD} stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
		<GroundLine x1={x - 70} x2={x + 70} y={y + 70} />
	</g>
);
const Bar: React.FC<{x1: number; x2: number; y: number}> = ({x1, x2, y}) => <rect x={x1} y={y - 11} width={x2 - x1} height={22} rx={6} fill="#e9e2d4" stroke={INK} strokeWidth={3.5} />;
/** Attempt 1 lever: pivot at the left end, 0.30 m, a 40 N force at a neutral slant with only "θ" marked. */
const LeverPicture: React.FC<{deg?: number; comp?: number; arc?: string; L?: number}> = ({deg = 58, comp = -1, arc = 'θ', L = 200}) => {
	const x1 = 90, x2 = 480, y = 330, a = (deg * Math.PI) / 180;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<Bar x1={x1 - 20} x2={x2 + 14} y={y} />
			<Pivot x={x1} y={y} />
			<circle cx={x1} cy={y} r={7} fill={INK} />
			<line x1={x2} y1={y} x2={x2 + 130} y2={y} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" />
			<VecArrow x={x2} y={y} dx={L * Math.cos(a)} dy={-L * Math.sin(a)} color={AMBER.stroke} width={8} head={26} />
			<ArcAngle px={x2} py={y} r={64} a1={0} a2={deg} label={arc} size={34} lr={100} />
			{comp >= 0 ? <g opacity={comp}><line x1={x2} y1={y} x2={x2} y2={y - L * Math.sin(a)} stroke={TURN.perp.stroke} strokeWidth={9} strokeLinecap="round" /><RightMark x={x2} y={y} a={0} size={20} /></g> : null}
			<Bracket x1={x1} y1={y + 110} x2={x2} y2={y + 110} color={ROLE.given.stroke} label="0.30 m" ly={y + 152} size={34} />
			<text x={x2 + L * Math.cos(a) + 14} y={y - L * Math.sin(a) + 10} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 36}} fill={AMBER.ink}>40 N</text>
		</svg>
	);
};
/** Attempt 2 handle: pivot dot, handle, a 40 N force at the end pointing along the handle towards the pivot. */
const HandlePicture: React.FC<{line?: number; tail?: number}> = ({line = -1, tail = -1}) => {
	const x1 = 50, x2 = 470, y = 200;
	const f = useCurrentFrame();
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			{line >= 0 ? <DashLine x1={x2 + 200} y1={y} x2={20} y2={y} color={AMBER.stroke} at={line} dur={20} width={4} /> : null}
			<Bar x1={x1} x2={x2} y={y} />
			<circle cx={x1} cy={y} r={14} fill={CARD} stroke={ROLE.given.stroke} strokeWidth={4} />
			<circle cx={x1} cy={y} r={6} fill={ROLE.given.stroke} />
			<VecArrow x={x2 + 170} y={y} dx={-156} dy={0} color={AMBER.stroke} width={10} head={30} />
			<text x={x2 + 100} y={y - 34} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 36}} fill={AMBER.ink}>40 N</text>
			<text x={x1} y={y - 34} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 32}} fill={ROLE.given.ink}>pivot</text>
			<Bracket x1={x1} y1={y + 70} x2={x2} y2={y + 70} color={ROLE.given.stroke} label="0.30 m" ly={y + 112} size={34} />
			{tail >= 0 ? <g opacity={prog(f, tail, 14)}>
				<VecArrow x={330} y={470} dx={180} dy={0} color={TURN.r.stroke} width={7} head={24} />
				<VecArrow x={330} y={470} dx={-180} dy={0} color={AMBER.stroke} width={7} head={24} />
				<circle cx={330} cy={470} r={6} fill={INK} />
				<ArcAngle px={330} py={470} r={56} a1={0} a2={180} label="θ = 180°" size={32} lr={92} />
				<text x={520} y={510} textAnchor="end" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 30}} fill={TURN.r.ink}>r</text>
				<text x={150} y={510} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 30}} fill={AMBER.ink}>F</text>
			</g> : null}
		</svg>
	);
};

export const S10: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={40} marks={2} picture={<LeverPicture />}><Q1 /></QuestionScene></Accent>;
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<HandlePicture />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '10px 24px', ...DISPLAY(30, INK, 600), whiteSpace: 'normal', lineHeight: 1.26}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 20px', ...DISPLAY(30, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const tauEq = cue(id, 'tau equals'), twelve = cue(id, 'twelve newton'), at30 = cue(id, 'At thirty'), six = cue(id, 'six point zero'), slip = cue(id, 'The classic slip'), angleIs = cue(id, 'The angle is');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={340} givens={<>F = 40 N at the end of the lever | 0.30 m from the pivot | (a) perpendicular (b) at 30° to the lever</>}><Q1 mark={4} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={tauEq} ageAt={at30} size={TYPE.current} oldSize={38}>(a) τ = rF = 0.30 × 40 = <AnswerBox at={twelve}>12 N m</AnswerBox></Row>
				<Row at={at30} size={TYPE.current}>(b) τ = rF sin 30° = 12 × 0.5 = <AnswerBox at={six}>6.0 N m</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={720} at={slip} crossAt={angleIs} size={36} caption="θ is between F and the lever: use sin θ">τ = 0.30 × 40 × cos 30° = 10.4 N m</CrossedChip>
			<div style={{position: 'absolute', left: 1150, top: 360}}><LeverPicture L={170} deg={f >= at30 ? 30 : 90} comp={f >= at30 ? prog(f, at30 + 10, 14) : -1} arc={f >= at30 ? '30°' : '90°'} /></div>
		</>
	);
};

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const loa = cue(id, 'line of action'), soArm = cue(id, 'so the moment arm'), andT = cue(id, 'and the torque'), zeroN = cue(id, 'zero newton'), soAngle = cue(id, 'so the angle'), oneH = cue(id, 'one hundred'), sin = cue(id, 'Sin one eighty'), slip = cue(id, 'The slip'), dist = cue(id, 'Distance alone');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={430} givens={<>F = 40 N at the end of the handle | 0.30 m from the pivot | directed along the handle, towards the pivot</>}><Q2 mark={4} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 540, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={soArm} size={TYPE.current}>(a) <AnswerBox at={soArm + 20}>r⊥ = 0</AnswerBox> (line of action through the pivot)</Row>
				<Row at={andT} size={TYPE.current}>(b) τ = F r⊥ = 40 × 0 = <AnswerBox at={zeroN}>0 N m</AnswerBox></Row>
				<Row at={soAngle} size={TYPE.current}>(c) <AnswerBox at={oneH}>θ = 180°</AnswerBox>&nbsp; sin 180° = 0 <span style={{opacity: prog(f, sin, 10)}}>✓ agrees</span></Row>
			</div>
			<CrossedChip x={96} y={800} at={slip} crossAt={dist} size={36} caption="line of action through the pivot: no torque">τ = rF = 0.30 × 40 = 12 N m</CrossedChip>
			<div style={{position: 'absolute', left: 1200, top: 420}}><HandlePicture line={loa} tail={oneH - 30} /></div>
		</>
	);
};

// ---------- 14. handoff: several forces at once (its last frame is the next lesson's first frame) ----------
/** Crane stage shared with the next lesson's opening: mast axis x 560, ground y 900, scale 0.78. */
export const CRANE_STAGE = {mastX: 560, groundY: 900, s: 0.78} as const;
export const HandoffBoard: React.FC<{soAt?: number; sizeAt?: number; distAt?: number; angAt?: number; sevAt?: number; cwAt?: number; acwAt?: number; balAt?: number}> = ({soAt = -200, sizeAt = -200, distAt = -200, angAt = -200, sevAt = -200, cwAt = -200, acwAt = -200, balAt = -200}) => {
	const f = useCurrentFrame();
	const g = craneGeom(CRANE_STAGE.mastX, CRANE_STAGE.groundY, CRANE_STAGE.s);
	const [px, py] = g.pivot;
	const fade = soAt === -200 ? 1 : prog(f, 0, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={48} />
			<div style={{position: 'absolute', inset: 0, opacity: fade}}>
				<FrameSvg>
					<GroundLine x1={180} x2={1300} y={CRANE_STAGE.groundY} />
					<CraneSvg mastX={CRANE_STAGE.mastX} groundY={CRANE_STAGE.groundY} s={CRANE_STAGE.s} />
					<VecArrow x={g.load.centre[0]} y={g.load.bottom + 4} dx={0} dy={110} color={AMBER.stroke} width={8} at={sevAt} head={24} />
					<VecArrow x={g.cw[0]} y={g.cw[1] + 34} dx={0} dy={150} color={AMBER.stroke} width={8} at={sevAt + 10} head={24} />
					<TurnArrow cx={px} cy={py} r={190} from={78} to={18} color={TURN.cw.stroke} at={cwAt} width={8} />
					<TurnArrow cx={px} cy={py} r={190} from={102} to={162} color={TURN.acw.stroke} at={acwAt} width={8} />
					<PivotDot x={px} y={py} at={balAt - 20} />
				</FrameSvg>
				<Lbl x={g.load.centre[0] + 16} y={g.load.bottom + 80} at={sevAt} color={AMBER.ink} size={32}>load's weight</Lbl>
				<Lbl x={g.cw[0] - 14} y={g.cw[1] + 150} at={sevAt + 10} color={AMBER.ink} anchor="end" size={32}>counterweight's weight</Lbl>
				<Lbl x={px + 150} y={py - 200} at={cwAt} color={TURN.cw.ink} size={34}>clockwise</Lbl>
				<Lbl x={px - 150} y={py - 200} at={acwAt} color={TURN.acw.ink} anchor="end" size={34}>anticlockwise</Lbl>
				<Lbl x={px + 24} y={py + 40} at={balAt - 20} color={ROLE.given.ink} size={30}>pivot</Lbl>
			</div>
			<Card x={1330} y={200} w={494} at={soAt}>
				<Title>Torque depends on</Title>
				<Line at={sizeAt} color={AMBER.ink}>its size, F</Line>
				<Line at={distAt} color={ROLE.given.ink}>its distance, r</Line>
				<Line at={angAt} color={INK}>its angle, θ</Line>
			</Card>
			<Chip x={1330} y={480} at={sevAt} size={34} w={494}>Real objects: several forces at once</Chip>
			<Chip x={1330} y={640} at={balAt} size={36} w={494} color={INK} border={INK}>Next: how do clockwise and anticlockwise torques balance?</Chip>
		</>
	);
};
/** v09's final frame, for the next lesson's opening. */
export const V09FinalFrame: React.FC = () => <HandoffBoard />;
export const S14: React.FC = () => {
	const id = 'handoff';
	return <HandoffBoard soAt={cue(id, 'So one')} sizeAt={cue(id, 'its size')} distAt={cue(id, 'its distance')} angAt={cue(id, 'its angle')} sevAt={cue(id, 'several forces')} cwAt={cue(id, 'clockwise')} acwAt={cue(id, 'anticlockwise')} balAt={cue(id, 'balance')} />;
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const notes = [
		{content: <>Torque τ: the turning effect of a force about a pivot. Unit N m, never J.</>, at: 2},
		{content: <>τ = <span style={{color: TURN.arm.ink}}>r⊥</span>F = rF sin θ, with θ between <span style={{color: TURN.r.ink}}>r</span> (out from the pivot) and <span style={{color: AMBER.ink}}>F</span>.</>, at: 6},
		{content: <><span style={{color: TURN.arm.ink}}>Moment arm r⊥</span>: shortest distance from the pivot to the line of action.</>, at: 10},
		{content: <>Largest at 90° (τ = rF); zero if the line of action passes through the pivot.</>, at: 14},
		{content: <>Torque has a sense: <span style={{color: TURN.cw.ink}}>clockwise</span> or <span style={{color: TURN.acw.ink}}>anticlockwise</span>.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={20} main={<><span style={{color: TURN.perp.ink}}>Push square,</span> <span style={{color: TURN.arm.ink}}>push far.</span></>} sub="τ = r⊥F = rF sin θ"
					picture={<svg width={584} height={220} style={{overflow: 'visible'}}>
						<SpannerNut cx={90} cy={150} armPx={330} />
						<line x1={420} y1={150} x2={420} y2={30} stroke={AMBER.stroke} strokeWidth={7} strokeLinecap="round" />
						<path d={`M420,14 L408,40 L432,40 Z`} fill={AMBER.stroke} />
						<RightMark x={420} y={150} a={90} size={20} color={TURN.perp.stroke} width={3.5} />
						<line x1={90} y1={205} x2={420} y2={205} stroke={TURN.arm.stroke} strokeWidth={5} />
						<line x1={90} y1={195} x2={90} y2={215} stroke={TURN.arm.stroke} strokeWidth={4} />
						<line x1={420} y1={195} x2={420} y2={215} stroke={TURN.arm.stroke} strokeWidth={4} />
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};

export {SpannerNut, INK_SOFT};
