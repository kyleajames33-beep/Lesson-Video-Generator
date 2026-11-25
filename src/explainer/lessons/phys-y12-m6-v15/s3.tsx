// Scenes 12 to 17: two attempts with answer-free exam-style line diagrams and brief feedback (ledger bars; the two
// voltage brackets), the handoff (a school lab: the power point, the lab power pack with a step-down cut-away, the
// painted DC motor model whose coil spins; its last frame is exported as `M6V15FinalFrame` for v16), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Plate} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {Lead} from '../../physics/electromagnetism/plates';
import {ANCHOR, DC_MOTOR, HEAT, LVS_PLATE, POWER_POINT, XCore, anchorAt} from '../../physics/electromagnetism/transformer';
import {A1, A2, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, MW, cap, cue, dur, hold} from './common';
import {AMBER, CardRect, GridLandscape, Lbl, Ledger, LineDiagram, NAVY, ORANGE, ROSE, Ring, Shrunk, T, VIOLET, fx, Ws} from './parts';

// ---------- attempts ----------
const Q1: React.FC = () => <>A wind farm transmits 132 MW of power through transmission lines with a total resistance of 3.0 Ω. (a) Calculate the current in the lines and the power lost in them if the power is transmitted at 132 kV. (b) Calculate the power lost if the same power is transmitted at 330 kV.</>;
const Q2: React.FC = () => <>For the 330 kV transmission in the previous question, a student calculates the power lost in the lines using P = V<sup>2</sup>/R, with V = 330 kV and R = 3.0 Ω. The student concludes that raising the transmission voltage increases the power lost. Explain the error in the student's reasoning.</>;
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={3} picture={<LineDiagram />}><Q1 /></QuestionScene></Accent>;
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={32} marks={3} picture={<LineDiagram vLabel="330 kV" rLabel="3.0 Ω" />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 420, scale = 0.86}) => <div style={{position: 'absolute', left: 1280, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const at132 = cue(id, 'At one hundred and thirty two kilovolts'), mw3 = cue(id, 'three point zero megawatts'), at330 = cue(id, 'At three hundred and thirty kilovolts'), mw48 = cue(id, 'zero point four eight megawatts'), slip = cue(id, 'The classic slip'), sq = cap(id, cue(id, 'so the loss drops two point five squared'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<><span style={{color: AMBER.ink}}>P = 132 MW</span>; R = 3.0 Ω; V = 132 kV or 330 kV</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 8, width: 1150}}>
				<Row at={at132} ageAt={at330} size={44} oldSize={36}>(a) I = 132 × 10<sup>6</sup> / 132 × 10<sup>3</sup> = {fx(A1.a.I, 0)} A</Row>
				<Row at={mw3 - 50} ageAt={at330} size={44} oldSize={36}>P<Ws>loss</Ws> = 1000<sup>2</sup> × 3.0 = <AnswerBox at={mw3}><span style={{whiteSpace: 'nowrap'}}>{fx(MW(A1.a.loss), 1)} MW</span></AnswerBox></Row>
				<Row at={at330} size={44}>(b) I = 132 × 10<sup>6</sup> / 330 × 10<sup>3</sup> = {fx(A1.b.I, 0)} A</Row>
				<Row at={mw48 - 60} size={44}>P<Ws>loss</Ws> = 400<sup>2</sup> × 3.0 = 4.8 × 10<sup>5</sup> W = <AnswerBox at={mw48}><span style={{whiteSpace: 'nowrap'}}>{fx(MW(A1.b.loss), 2)} MW</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={800} at={slip} crossAt={sq} size={30} caption={`3.0 / 2.5² = ${fx(MW(A1.a.loss) / (A1.factor * A1.factor), 2)} MW`}>3.0 / 2.5 = {fx(MW(A1.a.loss) / A1.factor, 1)} MW</CrossedChip>
			<Picture top={430}>
				<svg width={678} height={460} style={{overflow: 'visible'}}>
					<T x={0} y={40} size={34} color={NAVY.ink}>132 kV</T>
					<Ledger x={0} y={110} w={640} sent={132} lost={MW(A1.a.loss)} size={32} reveal={prog(f, mw3, 14)} />
					<T x={0} y={280} size={34} color={NAVY.ink}>330 kV</T>
					<Ledger x={0} y={340} w={640} sent={132} lost={MW(A1.b.loss)} size={32} reveal={prog(f, mw48, 14)} />
				</svg>
			</Picture>
		</>
	);
};

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const across = cue(id, 'V must be the voltage across the resistance'), volts = cue(id, 'just twelve hundred volts'), before = cue(id, 'the same answer as before'), slip = cue(id, 'The slip is using the transmission voltage'), mw = cap(id, cue(id, 'thirty six thousand megawatts'));
	const pulse = f >= volts && f < volts + 40 ? Math.sin((Math.PI * (f - volts)) / 40) : 0;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={370} givens={<><u>V = 330 kV</u>; R = 3.0 Ω; <span style={{color: ORANGE.ink}}>I = 400 A (from (b))</span>; <u>P = V<sup>2</sup>/R</u></>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 14, width: 1150}}>
				<Row at={across} size={40}>V in V<sup>2</sup>/R: the drop across the line's resistance</Row>
				<Row at={volts - 40} size={48}>V = IR = 400 × 3.0 = <AnswerBox at={volts}><span style={{whiteSpace: 'nowrap'}}>{fx(A2.drop, 0)} V</span></AnswerBox></Row>
				<Row at={before - 40} size={44}>P<Ws>loss</Ws> = 1200<sup>2</sup> / 3.0 = <AnswerBox at={before}><span style={{whiteSpace: 'nowrap'}}>{fx(MW(A2.viaDrop), 2)} MW, same as I<sup>2</sup>R</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={800} at={slip} crossAt={mw} size={30} caption="use the drop along the line, not the transmission voltage">330 000<sup>2</sup> / 3.0 = 3.6 × 10<sup>10</sup> W</CrossedChip>
			<Picture top={440}><LineDiagram vLabel="330 kV" rLabel="3.0 Ω" tall={1} short={prog(f, across, 12)} pulse={pulse} /></Picture>
			<HandTag x={1560} y={410} text="IR: this one" at={volts} size={32} color={VIOLET.ink} anchor="middle" />
		</>
	);
};

// ---------- 16. handoff ----------
const PP: Place = {x: 60, y: 430, w: 330};
const LV: Place = {x: 500, y: 470, w: 440};
const MO: Place = {x: 1140, y: 300, w: 660};
const MOTOR = {ring: anchorAt(DC_MOTOR, MO, ANCHOR.motor.ring), coil: anchorAt(DC_MOTOR, MO, ANCHOR.motor.coil), tL: anchorAt(DC_MOTOR, MO, ANCHOR.motor.termL), tR: anchorAt(DC_MOTOR, MO, ANCHOR.motor.termR)};
/** The spin arrow round the motor's axle: a flat ellipse about the coil centre with a moving dash and a head. */
const Spin: React.FC<{t: number; opacity?: number}> = ({t, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const [x, y] = MOTOR.coil, rx = 200, ry = 46;
	return (
		<g opacity={opacity}>
			<ellipse cx={x} cy={y} rx={rx} ry={ry} fill="none" stroke={AMBER.stroke} strokeWidth={7} strokeDasharray="70 30" strokeDashoffset={-t * 6} />
			<path d={`M${x + rx - 16},${y - 22} L${x + rx + 14},${y + 2} L${x + rx - 22},${y + 14} Z`} fill={AMBER.stroke} />
		</g>
	);
};
export const HandoffBoard: React.FC<{spin?: number; t?: number; q?: number; headSwap?: number; chipAt?: number; recap?: number; lab?: number; parts?: readonly number[]}> = ({spin = 1, t = 0, q = 1, headSwap = -60, chipAt = -60, recap = 0, lab = 1, parts = [1, 1, 1, 1]}) => {
	const cord = anchorAt(POWER_POINT, PP, ANCHOR.powerPointCord), inlet = anchorAt(LVS_PLATE, LV, ANCHOR.lvs.inlet), pos = anchorAt(LVS_PLATE, LV, ANCHOR.lvs.pos), neg = anchorAt(LVS_PLATE, LV, ANCHOR.lvs.neg);
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={lab}>
					<g opacity={parts[0]}><Plate spec={POWER_POINT} p={PP} /></g>
					<g opacity={parts[1]}>
						<Lead pts={[cord, [cord[0] + 30, cord[1]], [cord[0] + 30, inlet[1]], inlet]} width={5} />
						<Plate spec={LVS_PLATE} p={LV} />
						<CardRect x={600} y={280} w={240} h={150} />
						<g transform="translate(720 355) scale(0.42)"><XCore cx={0} cy={0} s={240} t={50} np={6} ns={2} pColor={ORANGE.stroke} sColor={ROSE.stroke} /></g>
						<path d="M720,430 L720,490" stroke={INK} strokeWidth={3} strokeDasharray="6 6" />
					</g>
					<g opacity={parts[2]}>
						<Lead pts={[pos, [pos[0], pos[1] + 150], [MOTOR.tL[0], pos[1] + 150], MOTOR.tL]} width={5} color="#c0392b" />
						<Lead pts={[neg, [neg[0], neg[1] + 120], [MOTOR.tR[0], neg[1] + 120], MOTOR.tR]} width={5} color={INK} />
						<Plate spec={DC_MOTOR} p={MO} />
					</g>
					<g opacity={parts[3]}><Spin t={t} opacity={spin} /></g>
					<Ring cx={MOTOR.ring[0]} cy={MOTOR.ring[1]} rx={120} ry={70} at={q > 0.5 ? -30 : 1e9} color={NAVY.stroke} />
				</g>
			</FrameSvg>
			<div style={{opacity: lab}}>
				<HandTag x={PP.x + 40} y={PP.y - 30} text="230 V" at={-30} size={40} color={ORANGE.ink} />
				<HandTag x={600} y={268} text="step-down, then DC out" at={-30} size={32} color={NAVY.ink} />
			</div>
			{q > 0.5 ? <div style={{position: 'absolute', left: MOTOR.ring[0] + 110, top: MOTOR.ring[1] - 120, fontFamily: FONT_DISPLAY, fontSize: 96, fontWeight: 800, color: NAVY.ink, opacity: lab}}>?</div> : null}
			{recap > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: recap}}>
				<FrameSvg><g transform="translate(540 190) scale(0.7)"><GridLandscape tint={0.3} dots={1} phase={t * 2} /></g></FrameSvg>
				<Lbl x={1190} y={820} at={-30} color={NAVY.ink} size={34} anchor="middle">high voltage, small current, little heating</Lbl>
				<Chip x={96} y={250} at={-30} size={34} w={900} color={ORANGE.ink} border={ORANGE.stroke}>step up: small current, I<sup>2</sup>R loss cut by the square</Chip>
				<Chip x={96} y={330} at={-30} size={34} w={900} color={NAVY.ink} border={NAVY.stroke}>step down in stages: 230 V for homes</Chip>
			</div> : null}
			<Chip x={96} y={890} at={chipAt} size={30} w={1728} color={INK} border={INK}>Next: how does a split-ring motor keep turning?</Chip>
		</>
	);
};
/** v15's final frame for v16 (the lab chain with the spinning coil and "?" over the split ring and brushes). */
export const M6V15FinalFrame: React.FC = () => <HandoffBoard />;
export const S16: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const small = cue(id, 'makes the current small'), down = cue(id, 'Then step-down transformers'), lab = cue(id, 'Follow that energy into a school lab'), pack = cue(id, 'A lab power pack steps it down again'), dc = cue(id, 'and turns it into DC'), motor = cue(id, 'Connect a simple motor'), spins = cue(id, 'and its coil spins'), why = cap(id, cue(id, 'So how does a split-ring motor'));
	const recapO = prog(f, small, 12) * (1 - prog(f, lab, 16));
	return (
		<>
			<HandoffBoard spin={prog(f, spins, 12)} t={f - (dur(id) - 1)} q={f >= why ? 1 : 0} headSwap={why} chipAt={why} recap={recapO} lab={prog(f, lab, 16)} parts={[prog(f, lab, 16), prog(f, pack, 14), prog(f, motor, 14), prog(f, spins, 12)]} />
			<Chip x={96} y={410} at={down} out={lab} size={30} w={560}>step-down transformers: back to 230 V</Chip>
			<HandTag x={560} y={720} text="DC out" at={dc} out={why} size={34} color={HEAT} />
		</>
	);
};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>Carried: <span style={{color: AMBER.ink}}>P = VI</span>. Wasted in the line: <span style={{color: HEAT}}>P<Ws>loss</Ws> = I<sup>2</sup>R</span>.</>, at: 2},
		{content: <>Same power sent: I = P/V, so P<Ws>loss</Ws> = P<sup>2</sup>R/V<sup>2</sup>.</>, at: 6},
		{content: <>Step up at the power station: V up, <span style={{color: ORANGE.ink}}>I down</span>.</>, at: 10},
		{content: <>Step down in stages to the nominal 230 V.</>, at: 14},
		{content: <>AC, because transformers need a changing current.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Double the voltage, half the current, a quarter of the loss.</>} sub={<>Same power sent, same line.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
