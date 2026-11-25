// Scenes 11 to 16: two attempts with answer-free exam-style schematics and brief feedback, the handoff (the
// worked-example transformer with its power bars and the ideal card; warmth turns the ticks to "?"; its last frame is
// exported as `M6V13FinalFrame` for v14), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row, Sub} from '../../physics/projectile/board';
import {A1, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {AMBER, FB, FinalBoard, Frac, MiniXf, NAVY, ORANGE, PowerBars, ROSE, Shrunk, T, fx} from './parts';

// ---------- attempts ----------
const Q1: React.FC = () => <>An ideal transformer has 200 turns on its primary coil and 3000 turns on its secondary coil. The primary is connected to a 24 V AC supply. The secondary supplies a current of 0.40 A to a load. (a) Calculate the secondary voltage. (b) Calculate the current in the primary coil.</>;
const Q2: React.FC = () => <>A student states: 'A step-up transformer that increases the voltage by a factor of 10 also increases the power by a factor of 10.' Evaluate this statement for an ideal transformer.</>;

/** Attempt 1's picture: an exam-style schematic, 200 and 3000 turns, a 24 V AC source and a load (no answers). */
const A1Pic: React.FC<{vs?: number; ip?: number; ring?: number}> = ({vs = 0, ip = 0, ring = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<MiniXf x={339} y={250} k={1.15} np={3} ns={9} pColor={ORANGE.stroke} sColor={ROSE.stroke} />
		<T x={339 - 128} y={86} size={34} color={NAVY.ink} anchor="middle">200 turns</T>
		<T x={339 + 128} y={86} size={34} color={NAVY.ink} anchor="middle">3000 turns</T>
		<T x={339 - 230} y={340} size={34} color={ORANGE.ink} anchor="middle">24 V AC</T>
		<T x={339 + 230} y={340} size={34} color={INK} anchor="middle">load</T>
		<T x={339} y={430} size={32} color={INK} anchor="middle">not every turn drawn</T>
		<T x={339 + 230} y={160} size={40} color={ROSE.ink} anchor="middle" opacity={vs}>360 V</T>
		<T x={339 - 230} y={160} size={40} color={ORANGE.ink} anchor="middle" opacity={ip}>6.0 A</T>
		{ring > 0 ? <ellipse cx={339 - 230} cy={148} rx={90} ry={40} fill="none" stroke={ORANGE.stroke} strokeWidth={5} opacity={ring} /> : null}
	</svg>
);
/** Attempt 2's picture: a step-up schematic with "V × 10" at the secondary. */
const A2Pic: React.FC<{bars?: number; idown?: number}> = ({bars = 0, idown = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<MiniXf x={339} y={230} k={1.15} np={3} ns={8} pColor={ORANGE.stroke} sColor={ROSE.stroke} />
		<T x={339} y={70} size={34} color={INK} anchor="middle">step-up transformer</T>
		<T x={339 + 230} y={350} size={36} color={ROSE.ink} anchor="middle">V × 10</T>
		<T x={339 + 230} y={400} size={36} color={ROSE.ink} anchor="middle" opacity={idown}>I ÷ 10</T>
		<PowerBars x={150} base={500} h={70} w={150} gap={80} fin={0.9} fout={0.9} vin="P" vout="P" size={38} opacity={bars} />
	</svg>
);
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={3} picture={<A1Pic />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<A2Pic />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 420, scale = 0.86}) => <div style={{position: 'absolute', left: 1280, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const fifteen = cue(id, 'The turns ratio is fifteen'), volts = cue(id, 'three hundred and sixty volts'), amps = cue(id, 'six point zero amps'), slip = cue(id, 'The classic slip'), down = cap(id, cue(id, 'A step-up transformer steps the current down'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={370} givens={<>N<Sub>p</Sub> = 200, N<Sub>s</Sub> = 3000; <span style={{color: ORANGE.ink}}>V<Sub>p</Sub> = 24 V</span>; <span style={{color: ROSE.ink}}>I<Sub>s</Sub> = 0.40 A</span></>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 460, display: 'flex', flexDirection: 'column', gap: 14, width: 1150}}>
				<Row at={fifteen} ageAt={amps} size={52} oldSize={40}>(a) V<Sub>s</Sub> = 24 × <Frac n="3000" d="200" /> = <AnswerBox at={volts}><span style={{whiteSpace: 'nowrap'}}>{fx(A1.Vs, 0)} V</span></AnswerBox></Row>
				<Row at={amps - 40} size={52}>(b) I<Sub>p</Sub> = <Frac n={<>V<Sub>s</Sub>I<Sub>s</Sub></>} d={<>V<Sub>p</Sub></>} /> = <Frac n="360 × 0.40" d="24" /> = <AnswerBox at={amps}><span style={{whiteSpace: 'nowrap'}}>{fx(A1.Ip, 1)} A</span></AnswerBox></Row>
				<Row at={amps + 12} size={36}>check: I<Sub>p</Sub> = 0.40 × {fx(A1.ratio, 0)} = {fx(A1.Ip, 1)} A</Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={down} size={30} caption="voltage up, current down: primary current is bigger">I<Sub>p</Sub> = 0.40 / 15 = {fx(A1.slip, 3)} A</CrossedChip>
			<Picture><A1Pic vs={prog(f, volts, 12)} ip={prog(f, amps, 12)} ring={prog(f, amps + 8, 12)} /></Picture>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const wrong = cue(id, 'The claim is incorrect'), pe = cue(id, 'so power in equals power out'), times = cue(id, 'so the current goes down ten times'), slip = cue(id, 'The slip is thinking'), energy = cap(id, cue(id, "it can't make energy"));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>ideal transformer; <span style={{color: ROSE.ink}}>V<Sub>s</Sub> = 10 V<Sub>p</Sub></span></>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 16, width: 1150}}>
				<Row at={wrong} size={44}>The claim is incorrect.</Row>
				<Row at={pe} ageAt={times} size={44} oldSize={36}>P<Sub>in</Sub> = P<Sub>out</Sub> (energy conserved, no other source)</Row>
				<Row at={times} size={52}>V<Sub>s</Sub> = 10 V<Sub>p</Sub> → I<Sub>s</Sub> = I<Sub>p</Sub> / 10 → V<Sub>s</Sub>I<Sub>s</Sub> = V<Sub>p</Sub>I<Sub>p</Sub></Row>
				<Row at={times + 24} size={52}><AnswerBox at={times + 30}><span style={{whiteSpace: 'nowrap'}}>power unchanged</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={840} at={slip} crossAt={energy} size={30} caption="trades V for I; P unchanged">10 × the power</CrossedChip>
			<Picture top={400}><A2Pic bars={prog(f, pe, 14)} idown={prog(f, times, 12)} /></Picture>
		</>
	);
};

// ---------- 15. handoff ----------
export const HandoffBoard: React.FC<{phase?: number; warm?: number; outQ?: number; cardQ?: number; flicker?: number; pulse?: number; headSwap?: number; chipAt?: number; tags?: {v: number; i: number; out: number}}> = ({phase = 0, warm = 1, outQ = 1, cardQ = 1, flicker = 0, pulse = 0, headSwap = -60, chipAt = -60, tags}) => (
	<>
		{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
		<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
		<FrameSvg><FinalBoard phase={phase} warm={warm} outQ={outQ} cardQ={cardQ} flicker={flicker} pulse={pulse} /></FrameSvg>
		{tags ? <>
			<HandTag x={FB.lx + 60} y={FB.cy - 70} text="volts follow the turns" at={tags.v} out={tags.out} size={32} color={ROSE.ink} />
			<HandTag x={FB.lx + 60} y={FB.cy + 120} text="current the other way" at={tags.i} out={tags.out} size={32} color={ROSE.ink} />
		</> : null}
		<Chip x={96} y={890} at={chipAt} size={30} w={1728} color={INK} border={INK}>Next: why are real transformers less efficient than the ideal model?</Chip>
	</>
);
/** v13's final frame for v14 (the worked-example transformer, warm, the bars with "?" and the card's "?" marks). */
export const M6V13FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const shares = cue(id, 'every turn shares the same changing flux'), lost = cue(id, 'and no energy is lost'), volts = cue(id, 'Volts follow the turns'), curr = cue(id, 'the current goes the other way'), warmC = cue(id, 'do get warm'), lamp = cue(id, 'never reaches the lamp'), why = cap(id, cue(id, 'So why are real transformers'));
	const bump = (a: number) => (f >= a && f < a + 30 ? Math.sin((Math.PI * (f - a)) / 30) : 0);
	const warm = prog(f, warmC, 24);
	return <HandoffBoard phase={(f - (dur(id) - 1)) * 3} warm={warm} outQ={prog(f, warmC + 10, 12)} flicker={f >= warmC + 10 && f < lamp ? Math.sin(f * 0.9) : 0} cardQ={f >= lamp ? 1 : 0} pulse={bump(shares) + bump(lost)} headSwap={why} chipAt={why} tags={{v: volts, i: curr, out: warmC}} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>Same flux, same volts per turn: V<Sub>p</Sub>/V<Sub>s</Sub> = N<Sub>p</Sub>/N<Sub>s</Sub>.</>, at: 2},
		{content: <><span style={{color: ROSE.ink}}>Step-up:</span> more secondary turns, more volts. Same frequency.</>, at: 6},
		{content: <><span style={{color: AMBER.ink}}>Ideal: power in = power out</span>, V<Sub>p</Sub>I<Sub>p</Sub> = V<Sub>s</Sub>I<Sub>s</Sub>.</>, at: 10},
		{content: <>So <span style={{color: ORANGE.ink}}>I<Sub>p</Sub>/I<Sub>s</Sub> = N<Sub>s</Sub>/N<Sub>p</Sub></span>: current goes the other way.</>, at: 14},
		{content: <>The load sets I<Sub>s</Sub>; the primary follows.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<><span style={{color: ROSE.ink}}>Volts follow the turns.</span> <span style={{color: ORANGE.ink}}>Current goes the other way.</span></>} sub={<>Check: P<Sub>in</Sub> = P<Sub>out</Sub> (ideal)</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
