// Scenes 11 to 16: two attempts with answer-free exam-style pictures and brief feedback, the handoff (the closed-core
// schematic: fewer primary turns on an AC source, more secondary turns on a lamp, "V_p ?", "V_s ?", "I_p ?", "I_s ?";
// its last frame is exported as `M6V12FinalFrame` for v13), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row, Sub} from '../../physics/projectile/board';
import {Galvanometer} from '../../physics/electromagnetism/bench';
import {ACSymbol, BatterySymbol, ClosedCore, CoilTurns, LampSymbol, MeterSymbol, SwitchSymbol, coreGeom} from '../../physics/electromagnetism/induction';
import {A2, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {Lbl, NAVY, ORANGE, ROSE, Shrunk, T, fx} from './parts';
import {sci} from '../phys-y12-m6-v09/parts';

// ---------- attempts ----------
const Q1: React.FC = () => <>A primary coil is connected in series with a switch and a 12 V battery. A secondary coil, placed beside the primary but not connected to it, is connected to a centre-zero galvanometer. Describe and explain the galvanometer reading (a) as the switch is closed, (b) while the switch remains closed for several seconds, (c) as the switch is opened.</>;
const Q2: React.FC = () => <>A primary coil of 100 turns is placed beside a secondary coil of 250 turns. When the current in the primary is switched off, the magnetic flux through each turn of the secondary falls uniformly from 6.0 × 10⁻⁴ Wb to zero in 0.030 s. Calculate the magnitude of the average emf induced in the secondary coil.</>;

const W: React.FC<{d: string}> = ({d}) => <path d={d} fill="none" stroke={INK} strokeWidth={4} strokeLinejoin="round" />;
/** Two coils side by side, exam style: the primary with a switch (and a battery), the secondary with a meter. */
const TwoCoils: React.FC<{battery?: boolean; turns?: [string, string]; ring?: number; children?: React.ReactNode}> = ({battery = true, turns, ring = -1, children}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<CoilTurns x1={90} x2={270} cy={210} r={90} n={turns ? 5 : 6} half="back" />
		<CoilTurns x1={400} x2={580} cy={210} r={90} n={turns ? 10 : 6} half="back" />
		<CoilTurns x1={90} x2={270} cy={210} r={90} n={turns ? 5 : 6} half="front" color={ORANGE.stroke} />
		<CoilTurns x1={400} x2={580} cy={210} r={90} n={turns ? 10 : 6} half="front" />
		<W d="M90,300 V410 H110" /><SwitchSymbol x1={110} x2={160} y={410} open={1} />
		{battery ? <><W d="M160,410 H166" /><BatterySymbol x={180} y={410} /><W d="M194,410 H270 V300" /><T x={180} y={480} size={30} anchor="middle">12 V</T></> : <W d="M160,410 H270 V300" />}
		<W d="M400,300 V410 H460" /><MeterSymbol x={490} y={410} r={30} /><W d="M520,410 H580 V300" />
		<T x={180} y={95} size={30} color={ORANGE.ink} anchor="middle">{turns ? turns[0] : 'primary'}</T>
		<T x={490} y={95} size={30} color={NAVY.ink} anchor="middle">{turns ? turns[1] : 'secondary'}</T>
		{ring >= 0 ? <ellipse cx={490} cy={210} rx={150} ry={130} fill="none" stroke={NAVY.stroke} strokeWidth={5} opacity={ring} /> : null}
		{children}
	</svg>
);
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={3} picture={<TwoCoils />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={34} marks={2} picture={<TwoCoils battery={false} turns={['100 turns', '250 turns']} />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 400, scale = 0.86}) => <div style={{position: 'absolute', left: 1260, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const briefly = cue(id, 'the needle flicks briefly'), zero = cue(id, 'the reading is zero'), way = cue(id, 'flicks the opposite way'), slip = cue(id, 'The classic slip'), steady = cap(id, cue(id, 'Steady current, no emf'));
	const dial = (x: number, deg: number, at: number, lab: string) => <g opacity={prog(f, at, 12)}><Galvanometer p={{x, y: 470, w: 180}} deg={deg} /><text x={x + 90} y={660} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 800, fill: INK}}>{lab}</text></g>;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={370} givens={<>12 V battery; switch; secondary on a centre-zero galvanometer</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 460, display: 'flex', flexDirection: 'column', gap: 12, width: 1130}}>
				<Row at={briefly} ageAt={zero} size={40} oldSize={34} style={{whiteSpace: 'normal'}}>(a) <AnswerBox at={briefly + 8}>brief deflection: growing I<Sub>p</Sub> → changing Φ → ε</AnswerBox></Row>
				<Row at={zero} ageAt={way} size={40} oldSize={34} style={{whiteSpace: 'normal'}}>(b) <AnswerBox at={zero + 8}>zero: steady I<Sub>p</Sub> → steady Φ → no ε</AnswerBox></Row>
				<Row at={way} size={40} style={{whiteSpace: 'normal'}}>(c) <AnswerBox at={way + 8}>brief deflection the opposite way: falling Φ (Lenz)</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={steady} size={30} caption="steady current, no emf">steady deflection while closed</CrossedChip>
			<Picture><TwoCoils>{dial(20, 32, briefly, '(a)')}{dial(240, 0, zero, '(b)')}{dial(460, -36, way, '(c)')}</TwoCoils></Picture>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const two = cue(id, 'Two hundred and fifty, times'), v = cue(id, 'five point zero volts'), slip = cue(id, 'The slip is using'), n = cap(id, cue(id, 'N is always the coil'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={370} givens={<>N<Sub>s</Sub> = 250, Φ: 6.0 × 10⁻⁴ Wb → 0, Δt = 0.030 s</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 14, width: 1130}}>
				<Row at={6} ageAt={two} size={40} oldSize={34}>N: the secondary's turns (the emf is induced there)</Row>
				<Row at={two} size={44} style={{whiteSpace: 'normal'}}>|ε| = N<Sub>s</Sub> ΔΦ / Δt = 250 × {sci(A2.dPhi, 1)} / 0.030 = <AnswerBox at={v}>{fx(A2.emf, 1)} V</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={760} at={slip} crossAt={n} size={30} caption="N: turns of the coil the emf is in">ε = 100 × {sci(A2.dPhi, 1)} / 0.030 = {fx(A2.slip, 1)} V</CrossedChip>
			<HandTag x={1300} y={900} text="secondary's N" at={slip + 20} size={34} color={NAVY.ink} />
			<Picture><TwoCoils battery={false} turns={['100 turns', '250 turns']} ring={prog(f, 10, 16)} /></Picture>
		</>
	);
};

// ---------- 15. handoff: different numbers of turns ----------
const C = {cx: 960, cy: 560, s: 460, t: 84};
const CG = coreGeom(C.cx, C.cy, C.s, C.t);
export const HandoffBoard: React.FC<{phase?: number; pulseP?: number; pulseS?: number; vAt?: number; iAt?: number; tagAt?: number; tagOut?: number; headSwap?: number}> = ({phase = 0, pulseP = 0, pulseS = 0, vAt = -60, iAt = -60, tagAt = 1e9, tagOut = 1e9, headSwap = -60}) => {
	const e = CG.ends, ax = 560, lx = 1360;
	return (
		<>
			{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
			<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
			<FrameSvg>
				<W d={`M${ax},${C.cy - 34} V${e.pTop[1]} H${e.pTop[0] + 40}`} />
				<W d={`M${ax},${C.cy + 34} V${e.pBot[1]} H${e.pBot[0] + 40}`} />
				<W d={`M${lx},${C.cy - 30} V${e.sTop[1]} H${e.sTop[0] - 40}`} />
				<W d={`M${lx},${C.cy + 30} V${e.sBot[1]} H${e.sBot[0] - 40}`} />
				<ClosedCore cx={C.cx} cy={C.cy} s={C.s} t={C.t} np={4} ns={8} phase={phase} pulseP={pulseP} pulseS={pulseS} />
				<ACSymbol x={ax} y={C.cy} r={34} />
				<LampSymbol x={lx} y={C.cy} r={30} />
			</FrameSvg>
			<Lbl x={C.cx - CG.m} y={C.cy - CG.o - 24} color={NAVY.ink} size={36} anchor="middle">N<Sub>p</Sub></Lbl>
			<Lbl x={C.cx + CG.m} y={C.cy - CG.o - 24} color={NAVY.ink} size={36} anchor="middle">N<Sub>s</Sub></Lbl>
			<Lbl x={ax - 60} y={C.cy + 12} at={vAt} color={ORANGE.ink} size={40} anchor="end">V<Sub>p</Sub> ?</Lbl>
			<Lbl x={lx + 60} y={C.cy + 12} at={vAt} color={ROSE.ink} size={40}>V<Sub>s</Sub> ?</Lbl>
			<Lbl x={ax + 50} y={e.pTop[1] - 20} at={iAt} color={ORANGE.ink} size={36}>I<Sub>p</Sub> ?</Lbl>
			<Lbl x={lx - 50} y={e.sTop[1] - 20} at={iAt} color={ROSE.ink} size={36} anchor="end">I<Sub>s</Sub> ?</Lbl>
			<HandTag x={C.cx} y={C.cy + CG.o + 60} text="fewer | more turns" at={tagAt} out={tagOut} size={36} color={NAVY.ink} anchor="middle" />
			<Chip x={96} y={890} at={iAt} size={30} w={1728} color={INK} border={INK}>Next: how does a transformer exchange voltage for current?</Chip>
		</>
	);
};
/** v12's final frame for v13 (the closed-core schematic with the four "?" labels). */
export const M6V12FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const what = cue(id, 'So what if the two coils'), turns = cue(id, 'different numbers of turns'), volt = cue(id, 'exchange voltage'), curr = cap(id, cue(id, 'for current'));
	const bump = (a: number) => Math.sin(Math.PI * Math.min(1, Math.max(0, (f - a) / 30)));
	return <HandoffBoard phase={(f - (dur(id) - 1)) * 3} pulseP={bump(turns)} pulseS={bump(turns + 30)} vAt={volt} iAt={curr} tagAt={turns + 10} tagOut={volt} headSwap={what} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <><span style={{color: ORANGE.ink}}>Changing primary current</span> → changing flux → <span style={{color: ROSE.ink}}>secondary emf</span>.</>, at: 2},
		{content: <>ε = −N<Sub>s</Sub> ΔΦ/Δt; no contact needed.</>, at: 6},
		{content: <>Switch on and off: brief, opposite emfs. Steady DC: 0.</>, at: 10},
		{content: <>AC: emf largest where I<Sub>p</Sub> changes fastest (ideal).</>, at: 14},
		{content: <>Iron core links more flux; closed core: a transformer.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Steady current, no emf.</>} sub={<>Changing current, induced emf.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
