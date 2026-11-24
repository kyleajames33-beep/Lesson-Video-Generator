// Scenes 10 to 15: two attempts with brief feedback, the handoff to the lab bench (its last frame is exported
// for the next lesson), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, TYPE} from '../../shared/tokens';
import {AnswerBox, BallSvg, Bench, Bracket, Chip, CrossedChip, DISPLAY, MS, Q, ROLE, Row, Sup, VecArrow, type World} from '../../physics/projectile/board';
import {clockAt} from '../../physics/projectile/flight';
import {HStrobes, PlumbMark, RampRig, Sheet, hFallT, hLaunchAt, rampGeom} from '../../physics/projectile/ramp';
import {A1, A2, ACCENT, HEAD, HEAD_SIZE, UX_LOW, UY_LOW, cue, flightT, hold} from './common';
import {Lbl, MiniSine, SetupPicture, SideTri, Target, pathA} from './parts';

// ---------- attempts ----------
const QA1: React.FC<{mark?: number}> = ({mark}) => <>A projectile is launched at 14.0 m s<Sup>−1</Sup> from level ground and lands at <M at={mark}>the same height</M>. Neglect air resistance and take g = 9.8 m s<Sup>−2</Sup>. Find the <M at={mark === undefined ? undefined : mark + 8}>two launch angles</M> that give a horizontal range of 10.0 m.</>;
const QA2: React.FC<{mark?: number}> = ({mark}) => <>A target is 20.0 m away horizontally, at <M at={mark}>the same height</M> as the launch point. Neglect air resistance and take g = 9.8 m s<Sup>−2</Sup>. Calculate the <M at={mark === undefined ? undefined : mark + 8}>minimum</M> launch speed that can reach the target, and state the launch angle required. Justify your answer.</>;
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
export const S10: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={40} marks={2} picture={<SetupPicture R="10.0 m" speed={<>14.0<MS /></>} />}><QA1 /></QuestionScene></Accent>;
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={40} marks={3} picture={<SetupPicture R="20.0 m" />}><QA2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '10px 24px', ...DISPLAY(29, INK, 600), whiteSpace: 'normal', lineHeight: 1.28}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 20px', ...DISPLAY(30, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);

// ---------- 11. feedback 1 ----------
const WF1: World = {x0: 1320, y0: 900, ppm: 32};
export const S11: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const eq = cue(id, 'equals'), five = cue(id, 'zero point five'), two = cue(id, 'So two theta'), s75 = cue(id, 'seventy-five'), add = cue(id, 'add to ninety'), slip = cue(id, 'The classic slip'), gives = cue(id, 'gives');
	const [a, b] = A1.ang;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={300} givens={<>u = 14.0<MS /> | level ground, same height | R = 10.0 m | g = 9.8 m s<Sup>−2</Sup></>}><QA1 mark={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 390, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={eq} ageAt={two} size={TYPE.current} oldSize={36}>sin 2θ = 10.0 × 9.8 ÷ 14.0<Sup>2</Sup> = 98 ÷ 196 = {f >= five ? <b>0.500</b> : '?'}</Row>
				<Row at={two} size={TYPE.current}>2θ = 30° or 180° − 30° = 150°</Row>
				<Row at={s75 - 30} size={TYPE.working}>θ = <AnswerBox at={s75}>15° or 75°</AnswerBox></Row>
			</div>
			<Chip x={96} y={640} at={add} size={36} border={INK}>15° + 75° = 90° ✓</Chip>
			<CrossedChip x={96} y={760} at={slip} crossAt={gives} size={36} caption="sine takes 0.5 twice">θ = 15° only</CrossedChip>
			<FrameSvg>
				<MiniSine x={1250} y={290} w={574} h={280} level={0.5} dots={[30, 150]} dotLabels={['30°', '150°']} at={two} />
				<line x1={1250} x2={1800} y1={WF1.y0} y2={WF1.y0} stroke={INK} strokeWidth={4} />
				<BallSvg cx={WF1.x0} cy={WF1.y0 - 14} d={26} />
				<Target x={WF1.x0 + A1.R * WF1.ppm} y={WF1.y0} />
				<Bracket x1={WF1.x0} y1={WF1.y0 + 30} x2={WF1.x0 + A1.R * WF1.ppm} y2={WF1.y0 + 30} color={ROLE.x.ink} />
				{f >= s75 ? <DrawPath d={pathA(WF1, a, flightT(a, A1.u), 0, 60, A1.u)} at={s75} dur={26} color={ROLE.v.stroke} width={5} /> : null}
				{f >= s75 + 10 ? <DrawPath d={pathA(WF1, b, flightT(b, A1.u), 0, 60, A1.u)} at={s75 + 10} dur={26} color={ROLE.v.stroke} width={5} dash="12 9" /> : null}
			</FrameSvg>
			<Lbl x={WF1.x0 + A1.R * WF1.ppm / 2} y={WF1.y0 + 66} color={ROLE.x.ink} anchor="middle" size={34}>10.0 m</Lbl>
			<Lbl x={WF1.x0 + 170} y={WF1.y0 - 60} at={s75 + 20} color={ROLE.v.ink} size={32}>15°</Lbl>
			<Lbl x={WF1.x0 + 40} y={WF1.y0 - 290} at={s75 + 30} color={ROLE.v.ink} size={32}>75°</Lbl>
		</>
	);
};

// ---------- 13. feedback 2 ----------
const WF2: World = {x0: 1290, y0: 900, ppm: 26};
export const S13: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const one = cue(id, 'sin two theta is one'), deg = cue(id, 'degrees'), minimum = cue(id, 'So the minimum'), root20 = cue(id, 'root of twenty'), fourteen = cue(id, 'fourteen'), slower = cue(id, 'Any slower'), slip = cue(id, 'The slip'), straight = cue(id, 'Straight up');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={340} givens={<>target 20.0 m away, same height | g = 9.8 m s<Sup>−2</Sup> | find the minimum speed and its angle</>}><QA2 mark={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={one} ageAt={minimum} size={TYPE.current} oldSize={36}>sin 2θ = 1 when 2θ = 90°, so {f >= deg ? <b>θ = 45°</b> : 'θ = ?'}</Row>
				<Row at={minimum} ageAt={fourteen} size={TYPE.current} oldSize={36}>R = u<Sup>2</Sup> ÷ g, so u = √(Rg)</Row>
				<Row at={root20} ageAt={fourteen} size={TYPE.current} oldSize={36}>&nbsp;&nbsp;= √(20.0 × 9.8) = √196</Row>
				<Row at={fourteen - 10} size={TYPE.working}>&nbsp;&nbsp;= <AnswerBox at={fourteen}>14.0<MS /> at 45°</AnswerBox></Row>
				<Row at={slower} size={34}>any slower: sin 2θ &gt; 1, impossible</Row>
			</div>
			<CrossedChip x={96} y={820} at={slip} crossAt={straight} size={34} caption="θ = 90° gives sin 2θ = 0: no range">θ = 90° makes sin θ = 1</CrossedChip>
			<FrameSvg>
				<MiniSine x={1250} y={300} w={574} h={330} level={1} dots={[90]} dotLabels={['90°: the biggest']} at={-30} />
				<line x1={1230} x2={1810} y1={WF2.y0} y2={WF2.y0} stroke={INK} strokeWidth={4} />
				<BallSvg cx={WF2.x0} cy={WF2.y0 - 14} d={26} />
				<Target x={WF2.x0 + A2.R * WF2.ppm} y={WF2.y0} />
				<Bracket x1={WF2.x0} y1={WF2.y0 + 30} x2={WF2.x0 + A2.R * WF2.ppm} y2={WF2.y0 + 30} color={ROLE.x.ink} />
				{f >= fourteen ? <DrawPath d={pathA(WF2, 45, flightT(45, A2.u), 0, 60, A2.u)} at={fourteen} dur={28} color={ROLE.v.stroke} width={5} /> : null}
				<VecArrow x={WF2.x0} y={WF2.y0 - 14} dx={0} dy={-180} color={ROLE.slate.stroke} width={6} at={straight} />
			</FrameSvg>
			<Lbl x={WF2.x0 + A2.R * WF2.ppm / 2} y={WF2.y0 + 66} color={ROLE.x.ink} anchor="middle" size={34}>20.0 m</Lbl>
			<Lbl x={WF2.x0 + 100} y={WF2.y0 - 60} at={fourteen + 20} color={ROLE.v.ink} size={32}>45°</Lbl>
			<HandTag x={WF2.x0 + 24} y={WF2.y0 - 160} text="straight up: R = 0" at={straight + 10} size={30} color={ROLE.slate.ink} />
		</>
	);
};

// ---------- 14. handoff: the lab bench (its last frame is the next lesson's first frame) ----------
/** Bench stage shared with the next lesson: 850 px per metre, bench top at y 880, exit 0.40 m up at x 580. */
export const LAB = {benchY: 880, exitX: 580, ppm: 850, h: 0.4, ux: 2.24, rw: 540};
const g0 = rampGeom(LAB.exitX, LAB.benchY - LAB.h * LAB.ppm, LAB.rw);
const TF = hFallT(LAB.h);
const LAND_X = LAB.exitX + LAB.ux * TF * LAB.ppm;
export const HandoffBoard: React.FC<{rollAt?: number; modelAt?: number; chipAt?: number}> = ({rollAt = -400, modelAt = -200, chipAt = -200}) => {
	const f = useCurrentFrame();
	const rollDur = 36;
	const u = prog(f, rollAt, rollDur);
	const tf = clockAt(f, rollAt + rollDur, TF, 4);
	const onRamp = f < rollAt + rollDur;
	const [bx, by] = onRamp ? g0.at(u) : hLaunchAt(g0.exitCentre, LAB.ux, tf, LAB.ppm);
	const landed = tf >= TF - 1e-6;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Bench edgeX={1260} topY={LAB.benchY} left={96} floorY={2000} legs={false} />
				<Sheet x={900} y={LAB.benchY - 4} w={640} />
				<RampRig exitX={LAB.exitX} benchY={LAB.benchY} hPx={LAB.h * LAB.ppm} rw={LAB.rw} ball={false} />
				{!onRamp ? <HStrobes exitCentre={g0.exitCentre} ux={LAB.ux} upTo={tf} ppm={LAB.ppm} d={2 * g0.r} /> : null}
				<BallSvg cx={landed ? LAND_X + 70 : bx} cy={landed ? LAB.benchY - g0.r : by} d={2 * g0.r} />
				<PlumbMark x={LAB.exitX} y={LAB.benchY - 4} />
				{f >= modelAt ? <g opacity={prog(f, modelAt, 12)}>
					<line x1={LAND_X} x2={LAND_X} y1={LAB.benchY - 30} y2={LAB.benchY + 8} stroke={ROLE.v.stroke} strokeWidth={5} strokeDasharray="7 5" />
					<line x1={LAND_X + 70} x2={LAND_X + 70} y1={LAB.benchY - 30} y2={LAB.benchY + 8} stroke={INK} strokeWidth={4} />
				</g> : null}
				<Bracket x1={LAB.exitX} y1={LAB.benchY + 52} x2={LAND_X} y2={LAB.benchY + 52} color={ROLE.x.ink} at={modelAt + 8} />
			</FrameSvg>
			<Lbl x={LAND_X} y={LAB.benchY - 56} at={modelAt} color={ROLE.v.ink} anchor="middle" size={30}>predicted</Lbl>
			<Lbl x={LAND_X + 76} y={LAB.benchY - 100} at={modelAt + 6} color={INK} size={30}>measured: ?</Lbl>
			<Lbl x={(LAB.exitX + LAND_X) / 2} y={LAB.benchY + 92} at={modelAt + 8} color={ROLE.x.ink} anchor="middle" size={TYPE.current}>R</Lbl>
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 200, width: 534}}>
				<div style={{background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 22px 14px', border: `3px solid ${INK}`}}>
					<div style={{...DISPLAY(TYPE.label, '#6b6358', 800), textTransform: 'uppercase', letterSpacing: 1.5}}>The model</div>
					<div style={{...DISPLAY(34, INK, 800), marginTop: 4}}>no air resistance</div>
					<div style={{...DISPLAY(34, INK, 800)}}>constant g</div>
					<div style={{...DISPLAY(34, ROLE.v.ink, 800)}}>predicts where it lands</div>
				</div>
			</Enter>
			<Chip x={1290} y={470} at={chipAt} size={36} w={534} color={INK} border={INK}>Next: how can primary measurements test the horizontal-launch model?</Chip>
		</>
	);
};
/** v07's final frame, for the next lesson's opening. */
export const V07FinalFrame: React.FC = () => <HandoffBoard />;
export const S14: React.FC = () => {
	const id = 'handoff';
	const rolls = cue(id, 'rolls down'), model = cue(id, 'model', 3);
	return <HandoffBoard rollAt={rolls} modelAt={model - 20} chipAt={model + 6} />;
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const notes = [
		{content: <>Level ground only: R = u<Sup>2</Sup> sin 2θ ÷ g, so sin 2θ = Rg ÷ u<Sup>2</Sup>.</>, at: 2},
		{content: <>Two answers: 2θ and 180° − 2θ, then halve.</>, at: 6},
		{content: <>The two angles are complementary: <Q s="u" ax="x" /> and <Q s="u" ax="y" /> swap.</>, at: 10},
		{content: <>R = 2<Q s="u" ax="x" /><Q s="u" ax="y" /> ÷ g, so the ranges match; the higher flight lasts longer.</>, at: 14},
		{content: <>R<sub style={{fontSize: '0.6em'}}>max</sub> = u<Sup>2</Sup> ÷ g at 45°. Rg ÷ u<Sup>2</Sup> &gt; 1: no angle works.</>, at: 18},
	];
	const k = 5;
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={38} aid={
				<MemoryCard at={24} main={<><span style={{color: ROLE.x.ink}}>Swap the parts,</span> <span style={{color: ROLE.y.ink}}>keep the product.</span></>} sub="(level ground only)"
					picture={<svg width={584} height={220}>
						<line x1={60} y1={200} x2={250} y2={10} stroke="#6b6358" strokeWidth={2.5} strokeDasharray="8 6" />
						<SideTri x0={60} y0={200} X={UX_LOW * k} Y={UY_LOW * k} />
						<SideTri x0={60} y0={200} X={UY_LOW * k} Y={UX_LOW * k} />
						<text x={340} y={90} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 30}} fill={INK}>27.0 × 13.1</text>
						<text x={340} y={130} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 30}} fill={INK}>13.1 × 27.0</text>
						<text x={340} y={176} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 28}} fill={ROLE.given.ink}>same product</text>
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
