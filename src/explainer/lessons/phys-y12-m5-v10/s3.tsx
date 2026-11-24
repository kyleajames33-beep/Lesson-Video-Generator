// Scenes 10 to 15: two attempts with brief feedback, the handoff (the crane, then a coded top view of the jib
// slewing at a steady rate; its last frame is exported for the next lesson), the key notes.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, DISPLAY, GroundLine, ROLE, Row, VecArrow} from '../../physics/projectile/board';
import {SeesawSvg, TailToTail, TopSlew} from '../../physics/projectile/balance';
import {CraneSvg, DashLine} from '../../physics/projectile/turning';
import {ACCENT, HEAD, cue, hold, kfm} from './common';
import {AMBER, CRANE_STAGE, Card, Lbl, Line, NAVY, SUPPORT, TURN, Title} from './parts';

const M: React.FC<{at?: number; d?: number; children: React.ReactNode}> = ({at, d = 0, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at + d} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{mark?: number}> = ({mark}) => <>A <M at={mark}>uniform</M> metre rule is pivoted at its <M at={mark} d={8}>50 cm mark</M>. A 200 g mass hangs from the 20 cm mark. <M at={mark} d={16}>At which mark</M> on the rule must a 150 g mass hang for the rule to balance horizontally? State the principle you use.</>;
const Q2: React.FC<{mark?: number}> = ({mark}) => <>A <M at={mark}>light beam</M> is <M at={mark} d={8}>pivoted at its centre</M> and is horizontal. A 20 N force acts vertically downwards 1.5 m to the left of the pivot, and a 30 N force acts vertically downwards 1.0 m to the right of the pivot. (a) Show that the beam is in rotational equilibrium. (b) Calculate the force exerted on the beam by the pivot.</>;

const txt = (size: number, color: string = INK) => ({fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: size, fill: color}) as const;
const Pivot: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<path d={`M${x},${y + 12} L${x - 30},${y + 64} L${x + 30},${y + 64} Z`} fill={CARD} stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
		<GroundLine x1={x - 64} x2={x + 64} y={y + 64} />
	</g>
);
/** Attempt 1: exam-style metre rule (marks every 10 cm), pivot at 50 cm, 200 g at 20 cm, 150 g floating with "?". */
const RulePicture: React.FC = () => {
	const X = (cm: number) => 40 + cm * 6, y = 240;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={X(0)} y={y - 14} width={600} height={28} rx={4} fill="#efe3c8" stroke={INK} strokeWidth={3} />
			{Array.from({length: 11}, (_, i) => <line key={i} x1={X(i * 10)} x2={X(i * 10)} y1={y - 14} y2={y + 2} stroke={INK} strokeWidth={2.5} />)}
			{[0, 20, 50, 100].map(cm => <text key={cm} x={X(cm)} y={y - 26} textAnchor="middle" style={txt(28)}>{cm}</text>)}
			<text x={X(100) + 4} y={y + 56} textAnchor="end" style={txt(26, INK_SOFT)}>cm</text>
			<Pivot x={X(50)} y={y} />
			<line x1={X(20)} y1={y + 14} x2={X(20)} y2={y + 110} stroke={INK} strokeWidth={2.5} />
			<rect x={X(20) - 44} y={y + 110} width={88} height={62} rx={6} fill="#d9dde3" stroke={INK} strokeWidth={3} />
			<text x={X(20)} y={y + 152} textAnchor="middle" style={txt(28)}>200 g</text>
			<rect x={X(76) - 44} y={60} width={88} height={56} rx={6} fill="#d9dde3" stroke={INK} strokeWidth={3} />
			<text x={X(76)} y={98} textAnchor="middle" style={txt(26)}>150 g</text>
			<text x={X(76) + 64} y={104} style={txt(44, AMBER.ink)}>?</text>
		</svg>
	);
};
/** Attempt 2: light beam, pivot at its centre, 20 N 1.5 m left, 30 N 1.0 m right. */
const BeamPicture: React.FC<{n?: number}> = ({n}) => {
	const f = useCurrentFrame();
	const P = 330, k = 160, y = 220;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={P - 1.6 * k} y={y - 10} width={3.2 * k} height={20} rx={5} fill="#e9e2d4" stroke={INK} strokeWidth={3} />
			<Pivot x={P} y={y} />
			<VecArrow x={P - 1.5 * k} y={y + 12} dx={0} dy={120} color={AMBER.stroke} width={7} head={22} />
			<VecArrow x={P + 1.0 * k} y={y + 12} dx={0} dy={120} color={AMBER.stroke} width={7} head={22} />
			<text x={P - 1.5 * k + 14} y={y + 130} style={txt(32, AMBER.ink)}>20 N</text>
			<text x={P + 1.0 * k + 14} y={y + 130} style={txt(32, AMBER.ink)}>30 N</text>
			<Bracket x1={P - 1.5 * k} y1={y - 50} x2={P} y2={y - 50} color={NAVY.stroke} label="1.5 m" ly={y - 86} size={30} />
			<Bracket x1={P} y1={y - 50} x2={P + 1.0 * k} y2={y - 50} color={NAVY.stroke} label="1.0 m" ly={y - 86} size={30} />
			{n !== undefined ? <g opacity={prog(f, n, 12)}><VecArrow x={P} y={y + 210} dx={0} dy={-180} color={SUPPORT.stroke} width={9} at={n} head={26} /><text x={P + 18} y={y + 190} style={txt(32, SUPPORT.ink)}>N = 50 N</text></g> : null}
		</svg>
	);
};

export const S10: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={40} marks={3} picture={<RulePicture />}><Q1 /></QuestionScene></Accent>;
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<BeamPicture />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '10px 24px', ...DISPLAY(30, INK, 600), whiteSpace: 'normal', lineHeight: 1.26}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 20px', ...DISPLAY(30, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);

// ---------- 11. feedback 1 (the lab version: the metre-rule plate with two mass hangers) ----------
const RULE_SRC = 'assets/physics/phys-y11-metre-rule-v1.png', HANGER_SRC = 'assets/physics/phys-y11-mass-hanger-v1.png';
const RULE_ZERO = 349, RULE_PPM = 1823 - 349, RULE_MID = 360;
const HANG_TOP: [number, number] = [300, 126];
const LabRule: React.FC<{x: number; y: number; w: number; at150: number; slideAt: number}> = ({x, y, w, at150, slideAt}) => {
	const f = useCurrentFrame();
	const s = w / RULE_PPM, X = (cm: number) => x + (cm / 100) * w;
	const hs = 0.15;
	const cm150 = kfm(f, [[slideAt, 70], [slideAt + 30, 90]]);
	const Hanger = ({cm, label, o = 1}: {cm: number; label: string; o?: number}) => (
		<g opacity={o}>
			<line x1={X(cm)} y1={y + 12} x2={X(cm)} y2={y + 60} stroke={INK} strokeWidth={2.5} />
			<image href={staticFile(HANGER_SRC)} x={X(cm) - HANG_TOP[0] * hs} y={y + 60 - HANG_TOP[1] * hs} width={600 * hs} height={1400 * hs} preserveAspectRatio="none" />
			<text x={X(cm)} y={y + 280} textAnchor="middle" style={txt(30, AMBER.ink)}>{label}</text>
		</g>
	);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
			<Pivot x={X(50)} y={y} />
			<image href={staticFile(RULE_SRC)} x={x - RULE_ZERO * s} y={y - RULE_MID * s} width={2172 * s} height={724 * s} preserveAspectRatio="none" />
			{Array.from({length: 11}, (_, i) => <line key={i} x1={X(i * 10)} x2={X(i * 10)} y1={y - 12} y2={y + 2} stroke={INK} strokeWidth={2.5} />)}
			{[20, 50, 90].map(cm => <text key={cm} x={X(cm)} y={y - 24} textAnchor="middle" style={txt(28)}>{cm}</text>)}
			<Hanger cm={20} label="200 g" />
			<Hanger cm={cm150} label="150 g" o={prog(f, at150, 12)} />
		</svg>
	);
};
export const S11: React.FC = () => {
	const id = 'feedback-1';
	const thirty = cue(id, 'thirty centimetres'), zeroEnd = cue(id, 'times zero point three'), forBal = cue(id, 'For balance'), rIs = cue(id, 'and r is'), soMass = cue(id, 'So the mass'), ninety = cue(id, 'ninety centimetre'), slip = cue(id, 'The classic slip'), when = cue(id, 'when the question');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={320} givens={<>uniform metre rule, pivot at the 50 cm mark | 200 g at the 20 cm mark | 150 g at which mark? | balances horizontally</>}><Q1 mark={4} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 4}}>
				<Row at={-30} size={30} style={{color: INK_SOFT}}>Principle: Σ clockwise τ = Σ anticlockwise τ (about the pivot)</Row>
				<Row at={thirty} ageAt={forBal} size={TYPE.current} oldSize={34}>r₁ = 50 − 20 = 30 cm = 0.30 m</Row>
				<Row at={zeroEnd} ageAt={forBal} size={TYPE.current} oldSize={34}><span style={{color: TURN.acw.ink}}>τ₁ = 0.200g × 0.30</span> <span style={{fontSize: '0.7em', color: INK_SOFT}}>(rule's weight: τ = 0)</span></Row>
				<Row at={forBal} ageAt={soMass} size={TYPE.current} oldSize={34}>0.200g × 0.30 = 0.150g × r</Row>
				<Row at={rIs} ageAt={soMass} size={TYPE.current} oldSize={34}>r = 0.060 ÷ 0.150 = 0.40 m</Row>
				<Row at={soMass} size={TYPE.current}>position = 50 + 40 = <AnswerBox at={ninety}>90 cm mark</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={when} size={34} caption="40 cm from the pivot = the 90 cm mark">the 40 cm mark</CrossedChip>
			<LabRule x={1290} y={560} w={500} at150={forBal} slideAt={ninety} />
		</>
	);
};

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'feedback-2';
	const acw = cue(id, 'twenty times'), cw = cue(id, 'Clockwise'), signed = cue(id, 'The signed sum'), forces = cue(id, 'For the forces'), fifty = cue(id, 'fifty newtons'), light = cue(id, 'light'), slip = cue(id, 'The slip'), cancel = cue(id, 'because the torques');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={390} givens={<>light beam, horizontal, pivot at its centre | 20 N down, 1.5 m left of the pivot | 30 N down, 1.0 m right of the pivot</>}><Q2 mark={4} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 500, display: 'flex', flexDirection: 'column', gap: 4}}>
				<Row at={acw} ageAt={forces} size={TYPE.current} oldSize={36}><span style={{color: TURN.acw.ink}}>anticlockwise: 20 × 1.5 = +30 N m</span></Row>
				<Row at={cw} ageAt={forces} size={TYPE.current} oldSize={36}><span style={{color: TURN.cw.ink}}>clockwise: 30 × 1.0 = −30 N m</span></Row>
				<Row at={signed} ageAt={forces} size={TYPE.current} oldSize={36}>(a) <AnswerBox at={signed + 10}>Στ = 0</AnswerBox> rotational equilibrium</Row>
				<Row at={forces} size={TYPE.current}>(b) ΣF = 0: N − 20 − 30 = 0, <AnswerBox at={fifty}>N = 50 N up</AnswerBox></Row>
				<Row at={light} size={30} style={{color: INK_SOFT}}>light beam: no beam weight to add</Row>
			</div>
			<CrossedChip x={96} y={840} at={slip} crossAt={cancel} size={34} caption="Στ = 0 and ΣF = 0 are separate conditions">torques cancel, so pivot force = 0</CrossedChip>
			<div style={{position: 'absolute', left: 1250, top: 480}}><BeamPicture n={fifty} /></div>
		</>
	);
};

// ---------- 14. handoff: the crane turning, seen from above (its last frame is the next lesson's first frame) ----------
const TV = {cx: 620, cy: 560, R: 290};
const W_DEG = 0.9; // degrees per frame: a steady slew
export const HandoffBoard: React.FC<{lookAt?: number; tipAt?: number; constAt?: number; circleAt?: number; changeAt?: number; soIsAt?: number}> = ({lookAt = -200, tipAt = -200, constAt = -200, circleAt = -200, changeAt = -200, soIsAt = -200}) => {
	const f = useCurrentFrame();
	const final = lookAt === -200;
	const top = final ? 1 : prog(f, lookAt, 30);
	const ang = final ? 45 : 45 + W_DEG * Math.max(0, f - lookAt);
	const trace = final ? 359.9 : Math.max(0, W_DEG * (f - tipAt));
	const arrows = [0, 90, 180, 270].map((deg, i) => ({deg, at: constAt + i * 8}));
	const [ux, uy] = [TV.cx + TV.R * Math.cos(Math.PI / 2), TV.cy - TV.R];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={50} />
			{top < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - top}}>
				<FrameSvg><GroundLine x1={180} x2={1360} y={CRANE_STAGE.groundY} /><CraneSvg mastX={CRANE_STAGE.mastX} groundY={CRANE_STAGE.groundY} s={CRANE_STAGE.s} /></FrameSvg>
				<Lbl x={1300} y={300} color={INK} size={36}>turning at a steady rate</Lbl>
			</div> : null}
			{top > 0 ? <div style={{position: 'absolute', inset: 0, opacity: top}}>
				<FrameSvg>
					<TopSlew cx={TV.cx} cy={TV.cy} R={TV.R} angle={ang} trace={trace} arrows={arrows} />
					<TailToTail x={1500} y={540} dirs={[90, 180, 270, 0]} len={130} at={circleAt} />
					<DashLine x1={1500} y1={410} x2={1370} y2={540} color={INK} at={changeAt} width={3} dash="8 6" />
				</FrameSvg>
				<Lbl x={TV.cx} y={TV.cy + TV.R + 60} color={INK_SOFT} anchor="middle" size={30}>top view: the jib turning at a steady rate</Lbl>
				<Lbl x={TV.cx + 40} y={TV.cy - 26} color={TURN.r.ink} size={30}>mast</Lbl>
				<Chip x={96} y={200} at={constAt} size={34} border={ROLE.x.stroke}>speed: constant</Chip>
				<Lbl x={ux + 20} y={uy - 40} at={constAt + 8} color={ROLE.x.ink} size={34}>v</Lbl>
				<Lbl x={1500} y={760} at={circleAt} color={INK} anchor="middle" size={32}>same length, four directions</Lbl>
				<Lbl x={1410} y={440} at={changeAt} color={INK} anchor="end" size={40}>Δv = ?</Lbl>
			</div> : null}
			<Chip x={1100} y={820} at={changeAt} size={36} w={724} color={INK} border={INK}>Next: how can speed be constant while velocity keeps changing?</Chip>
			<HandTag x={1220} y={250} text="is the velocity changing?" at={soIsAt} size={TYPE.handSmall} color={INK} />
		</>
	);
};
/** v10's final frame, for the next lesson's opening. */
export const V10FinalFrame: React.FC = () => <HandoffBoard />;
export const S14: React.FC = () => {
	const id = 'handoff';
	return <HandoffBoard lookAt={cue(id, 'Look down')} tipAt={cue(id, 'tip of its jib')} constAt={cue(id, 'constant speed')} circleAt={cue(id, 'circle')} changeAt={cue(id, 'change', 2)} soIsAt={cue(id, 'So is its velocity')} />;
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const notes = [
		{content: <>Rotational equilibrium: Στ = 0, so the rotation doesn't change.</>, at: 2},
		{content: <>Signs: <span style={{color: TURN.acw.ink}}>anticlockwise +</span>, <span style={{color: TURN.cw.ink}}>clockwise −</span>; Σ clockwise τ = Σ anticlockwise τ.</>, at: 6},
		{content: <>Take torques about the pivot: forces through it give zero torque.</>, at: 10},
		{content: <>Level beam, weights only: m₁r₁ = m₂r₂, with <span style={{color: NAVY.ink}}>r measured from the pivot</span>.</>, at: 14},
		{content: <>Full equilibrium needs ΣF = 0 and Στ = 0: two separate conditions.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={20} main={<><span style={{color: AMBER.ink}}>Heavy near,</span> <span style={{color: NAVY.ink}}>light far.</span></>} sub="m₁r₁ = m₂r₂ (weights on a level beam)"
					picture={<svg width={584} height={220} style={{overflow: 'visible'}}>
						<SeesawSvg hx={292} hy={110} w={520} />
						<line x1={292 - 1.2 * 173.3} y1={100} x2={292 - 1.2 * 173.3} y2={196} stroke={AMBER.stroke} strokeWidth={7} />
						<path d={`M${292 - 1.2 * 173.3 - 12},190 L${292 - 1.2 * 173.3},214 L${292 - 1.2 * 173.3 + 12},190 Z`} fill={AMBER.stroke} />
						<line x1={292 + 1.44 * 173.3} y1={100} x2={292 + 1.44 * 173.3} y2={170} stroke={AMBER.stroke} strokeWidth={7} />
						<path d={`M${292 + 1.44 * 173.3 - 12},164 L${292 + 1.44 * 173.3},188 L${292 + 1.44 * 173.3 + 12},164 Z`} fill={AMBER.stroke} />
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};

export {Card, Line, Title};
