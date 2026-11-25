// Scenes 11 to 16: two attempts (an answer-free coded circuit; the painted load bench with an extra mass) and brief
// feedback (givens strip, one stage at a time, one slate crossed slip), the handoff (the supply, switch and ammeter slide
// away, the flywheel is turned by an outside drive and the motor's terminals go to the oscilloscope; its last frame is
// exported as `M6V17FinalFrame` for v18) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {BatterySymbol, MeterSymbol} from '../../physics/electromagnetism/induction';
import type {Place} from '../../physics/electromagnetism/bench';
import {Lead} from '../../physics/electromagnetism/plates';
import {HobbyMotor, SLOTTED, hobbyPts, scopeScreen} from '../../physics/electromagnetism/motor';
import {Plate} from '../../physics/electromagnetism/bench';
import {A1, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {AMBER, B1, Bench, HEAT, Lbl, LoadBench, ORANGE, PBar, ROSE, SCOPE_AT, ScopeFlat, ShareBar, Shrunk, TorqueArc, fx} from './parts';

type Pt = [number, number];

// ---------- attempts ----------
const Q1: React.FC = () => <>A small DC motor is connected to a 9.0 V supply. The resistance of its coil is 1.5 Ω. When running at full speed, the motor draws a current of 0.80 A. (a) Calculate the back emf at full speed. (b) Calculate the current in the motor if its shaft is jammed so that it cannot turn.</>;
const Q2: React.FC = () => <>A DC motor connected to a constant supply voltage is lifting a load at a steady speed. The load is suddenly increased. Explain the changes in the motor's speed, back emf and current, and explain how energy is conserved when the motor reaches its new steady speed.</>;
/** Attempt 1's picture: supply, ammeter and motor symbols in one loop, no values. */
const Circuit1: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<rect x={10} y={20} width={650} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<polyline points="140,150 540,150 540,420 140,420 140,150" fill="none" stroke={INK} strokeWidth={5} />
		<BatterySymbol x={340} y={150} />
		<MeterSymbol x={140} y={285} r={44} letter="A" />
		<MeterSymbol x={540} y={285} r={54} letter="M" />
		<text x={340} y={100} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, fill: INK}}>supply</text>
		<text x={340} y={480} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 30, fill: INK}}>DC motor circuit</text>
	</svg>
);
/** The painted load bench, scaled into a picture slot, with one extra mass beside the hanger (attempt 2, feedback 2). */
const LoadPic: React.FC<{k?: number; extra?: boolean}> = ({k = 0.5, extra = true}) => {
	const ss = 150 / (SLOTTED.box[3] - SLOTTED.box[1]);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={650} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<g transform={`translate(${-40} ${-40}) scale(${k})`}><LoadBench deg={30} /></g>
			{extra ? <Plate spec={SLOTTED} p={{x: 560, y: 330, w: (SLOTTED.box[2] - SLOTTED.box[0]) * ss}} /> : null}
			{extra ? <text x={590} y={510} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, fill: INK}}>extra mass</text> : null}
		</svg>
	);
};
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<Circuit1 />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={4} picture={<LoadPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const fs = cue(id, 'At full speed, the back emf is V minus I R'), v78 = cue(id, 'seven point eight volts'), jam = cue(id, "Jammed, there's no back emf"), a6 = cue(id, 'six point zero amps'), slip = cue(id, 'The classic slip'), emf = cap(id, cue(id, 'not the back emf'));
	const back = f < v78 ? 0 : f < jam ? A1.back : 0;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>V = 9.0 V; R = 1.5 Ω; <span style={{color: ORANGE.ink}}>I = 0.80 A (<u>full speed</u>)</span>; <u>jammed</u></>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 12, width: 1160}}>
				<Row at={fs} ageAt={jam} size={44} oldSize={36}><span style={{color: ROSE.ink}}>ε_back = V − IR</span></Row>
				<Row at={v78 - 30} ageAt={jam} size={46} oldSize={36}>(a) ε_back = 9.0 − 0.80 × 1.5 = <AnswerBox at={v78}><span style={{whiteSpace: 'nowrap'}}>{fx(A1.back, 1)} V</span></AnswerBox></Row>
				<Row at={jam} size={46}>(b) jammed: ε_back = 0, I = 9.0 / 1.5 = <AnswerBox at={a6}><span style={{whiteSpace: 'nowrap'}}>{fx(A1.jam, 1)} A</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={emf} size={32} caption="IR is the resistor's share">back emf = IR = {fx(A1.ir, 1)} V</CrossedChip>
			<FrameSvg>
				<rect x={1300} y={430} width={540} height={480} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<ShareBar x={1400} y={500} h={360} w={100} total={A1.v} back={back} size={30} values={f >= v78} />
			</FrameSvg>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const rises = cue(id, 'so the current rises'), lower = cue(id, 'so the motor settles at a lower speed'), grown = cue(id, 'has grown'), slip = cue(id, 'The slip is saying'), slower = cap(id, cue(id, 'because the motor is slower'));
	const base = 860, k = 300;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={360} givens={<>constant supply V; load <u>suddenly increased</u>; <u>energy is conserved</u></>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 450, display: 'flex', flexDirection: 'column', gap: 12, width: 1120}}>
				<Row at={rises - 30} ageAt={grown} size={44} oldSize={36}>speed ↓ → ε_back ↓ → I = (V − ε_back)/R ↑</Row>
				<Row at={lower} ageAt={grown} size={44} oldSize={36}>→ torque ↑ → new steady speed (lower)</Row>
				<Row at={grown - 20} size={48}><AnswerBox at={grown}><span style={{whiteSpace: 'nowrap'}}>VI = I²R + ε_back I</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={slower} size={32} caption="slower → less back emf → more current">current falls because the motor is slower</CrossedChip>
			<FrameSvg>
				<g opacity={prog(f, grown - 30, 14)}>
					<rect x={1300} y={470} width={540} height={460} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<PBar x={1340} base={base} w={90} h={0.5 * k} color={ORANGE.stroke} label="before" value="VI" size={28} />
					<PBar x={1450} base={base} w={70} h={0.09 * k} color={HEAT} size={28} />
					<PBar x={1600} base={base} w={90} h={1.0 * k} color={ORANGE.stroke} label="after" value="VI" size={28} />
					<PBar x={1710} base={base} w={70} h={0.55 * k} color={HEAT} value="I²R" size={28} />
				</g>
			</FrameSvg>
			<Lbl x={1400} y={500} at={grown} color={INK} size={28}>bigger input, bigger heat</Lbl>
		</>
	);
};

// ---------- 15. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, remove: cue(id, 'Now remove the supply'), turn: cue(id, 'Turn the shaft with something else'), osc: cue(id, 'connect the motor to an oscilloscope'), still: cue(id, 'The back emf is still there'), gen: cue(id, 'The motor has become a generator'), out: cap(id, cue(id, 'So what shape is its output')), end: dur(id) - 1};
})();
const FIN: Place = {x: 260, y: 440, w: 500};
const lerpP = (a: Place, b: Place, t: number): Place => ({x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, w: a.w + (b.w - a.w) * t});
/** The handoff board at scene frame f (`final`: every label already written, for the next video's first frame). */
export const HandoffBoard: React.FC<{f: number; final?: boolean; chip?: boolean; heading?: boolean}> = ({f, final = false, chip = true, heading = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const away = final ? 1 : prog(f, H.remove, 24);
	const move = final ? 1 : prog(f, H.remove + 10, 30);
	const mp = lerpP(B1.motor, FIN, move);
	const m = hobbyPts(mp);
	const scopeIn = final ? 1 : prog(f, H.osc, 24);
	const deg = 12 * f;
	const sc = scopeScreen(SCOPE_AT);
	const leadA: Pt[] = [m.tabHi, [m.tabHi[0] - 40, m.tabHi[1]], [m.tabHi[0] - 40, 840], [sc.in1[0], 840], sc.in1];
	const leadB: Pt[] = [m.tabLo, [m.tabLo[0] - 20, m.tabLo[1]], [m.tabLo[0] - 20, 880], [sc.in2[0], 880], sc.in2];
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.out} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.out + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				{away < 0.999 ? <g opacity={1 - away} transform={`translate(${-500 * away} 0)`}><Bench deg={deg} reading="1.0 A" I={1} dots={1} phase={f * 3} parts={[1, 1, 1, 0]} /></g> : null}
				<g opacity={scopeIn}>
					<Lead pts={leadA} width={5} color="#c0392b" />
					<Lead pts={leadB} width={5} color={INK} />
				</g>
				<HobbyMotor p={mp} deg={deg} />
				<TorqueArc c={m.fly} r={m.flyR + 34} len={-150} start={150} color={AMBER.stroke} width={10} dash="22 10" opacity={final ? 1 : prog(f, H.turn, 14)} />
				<g opacity={scopeIn} transform={`translate(${300 * (1 - scopeIn)} 0)`}><ScopeFlat q={final ? 1 : f >= H.out ? 0.6 + 0.4 * Math.abs(Math.sin((f - H.out) / 6)) : 1} /></g>
			</FrameSvg>
			<Lbl x={m.fly[0]} y={m.fly[1] - m.flyR - 60} at={at(H.turn + 8)} color={AMBER.ink} size={30} anchor="middle">turned by an outside drive</Lbl>
			<Lbl x={FIN.x + 20} y={FIN.y - 30} at={at(H.still)} color={ROSE.ink} size={34}>{final || f >= H.gen ? 'ε (output)' : 'ε_back'}</Lbl>
			<Chip x={1100} y={200} at={at(H.gen)} size={32} w={420} color={ROSE.ink} border={ROSE.stroke}>motor → generator</Chip>
			<Lbl x={1450} y={790} at={at(H.osc + 10)} color={INK} size={30} anchor="middle">oscilloscope</Lbl>
			{!final ? <Chip x={96} y={190} at={0} out={H.remove} size={32} w={900} color={ROSE.ink} border={ROSE.stroke}>spinning coil = generator: back emf pushes against the supply</Chip> : null}
			{chip ? <Chip x={96} y={940 - 50} at={at(H.out)} size={30} w={1728} color={INK} border={INK}>Next: how can we test the motor effect and a DC motor at the bench?</Chip> : null}
		</>
	);
};
/** v17's final frame for the next video. */
export const M6V17FinalFrame: React.FC = () => <HandoffBoard f={H.end} final />;
/** The handoff's last frame (the next video continues the flywheel from it). */
export const V17_END = {f: H.end};
export const S15: React.FC = () => <HandoffBoard f={useCurrentFrame()} />;

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <><span style={{color: ROSE.ink}}>Back emf</span>: induced in the spinning coil, opposing the supply.</>, at: 2},
		{content: <><span style={{color: ORANGE.ink}}>I = (V − ε_back)/R</span>: only the leftover voltage drives I.</>, at: 6},
		{content: <>ε_back grows with speed; start or jammed, I = V/R.</>, at: 10},
		{content: <>VI = <span style={{color: HEAT}}>I²R</span> + <span style={{color: AMBER.ink}}>ε_back I</span>: heat plus converted power.</>, at: 14},
		{content: <>A starting resistor limits the starting current.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span style={{color: ROSE.ink}}>No spin, no push back.</span>} sub={<>I = (V − ε_back) / R</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
