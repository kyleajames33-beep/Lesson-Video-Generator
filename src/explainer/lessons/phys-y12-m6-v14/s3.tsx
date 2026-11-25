// Scenes 11 to 16: two attempts with answer-free painted pictures and brief feedback, the handoff (the grid
// landscape: power station, towers and a house on one line with a resistor zigzag, charges and a heat glow; its last
// frame is exported as `M6V14FinalFrame` for v15), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row, Sub} from '../../physics/projectile/board';
import {Plate} from '../../physics/electromagnetism/bench';
import {Lead} from '../../physics/electromagnetism/plates';
import {ANCHOR, HEAT, LAMINATIONS, SOFT_IRON_ROD, XFMR, anchorAt, byHeight} from '../../physics/electromagnetism/transformer';
import {A2, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {AMBER, CoreSlice, FLUX, GL, Ws, GridLandscape, IconCopper, IconCore, IconCoupling, Lbl, NAVY, ORANGE, PowerBars, ROSE, Shrunk, T, fx} from './parts';

// ---------- attempts ----------
const Q1: React.FC = () => <>Transformer cores are made from thin sheets of soft iron that are insulated from each other. Explain how this laminated construction improves the efficiency of a transformer.</>;
const Q2: React.FC = () => <>A transformer draws a current of 2.0 A from a 230 V AC supply. Its secondary delivers 19 A at 23 V to a load. (a) Calculate the efficiency of the transformer. (b) Identify ONE way in which energy is lost in the transformer, and a design feature that reduces it.</>;

const LAM = byHeight(LAMINATIONS, 60, 30, 280);
/** Attempt 1's picture: the painted sheets and a solid soft-iron rod, tagged (no current loops). */
const A1Pic: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<Plate spec={LAMINATIONS} p={LAM} />
		<T x={340} y={350} size={34} color={NAVY.ink} anchor="middle">laminated: thin insulated sheets</T>
		<Plate spec={SOFT_IRON_ROD} p={{x: 40, y: 420, w: 600}} />
		<T x={340} y={520} size={34} color={NAVY.ink} anchor="middle">solid iron</T>
	</svg>
);
const XP = byHeight(XFMR, 170, 90, 280);
/** Attempt 2's picture: the painted transformer with plain leads "in" and "out" (no values). */
const A2Pic: React.FC = () => {
	const l = anchorAt(XFMR, XP, ANCHOR.xfmr.l1), l2 = anchorAt(XFMR, XP, ANCHOR.xfmr.l2), r = anchorAt(XFMR, XP, ANCHOR.xfmr.r1), r2 = anchorAt(XFMR, XP, ANCHOR.xfmr.r2);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<Lead pts={[l, [60, l[1]]]} width={5} color={ORANGE.stroke} /><Lead pts={[l2, [60, l2[1]]]} width={5} />
			<Lead pts={[r, [620, r[1]]]} width={5} color={ROSE.stroke} /><Lead pts={[r2, [620, r2[1]]]} width={5} />
			<Plate spec={XFMR} p={XP} />
			<T x={60} y={l[1] - 40} size={36} color={ORANGE.ink}>in</T>
			<T x={620} y={r[1] - 40} size={36} color={ROSE.ink} anchor="end">out</T>
		</svg>
	);
};
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<A1Pic />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={34} marks={3} picture={<A2Pic />}><Q2 /></QuestionScene></Accent>;
const Picture: React.FC<{children: React.ReactNode; top?: number; scale?: number}> = ({children, top = 420, scale = 0.86}) => <div style={{position: 'absolute', left: 1280, top, transform: `scale(${scale})`, transformOrigin: 'top left'}}>{children}</div>;

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const induces = cue(id, 'The changing flux induces eddy currents'), heat = cue(id, 'waste energy as heat'), sheets = cue(id, 'Thin insulated sheets confine'), wasted = cue(id, 'and much less energy is wasted'), slip = cue(id, 'The classic slip'), cuts = cap(id, cue(id, 'It cuts the eddy currents'));
	const e = Math.cos((2 * Math.PI * f) / 110);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>thin sheets; <u>insulated from each other</u>; soft iron; improves <u>efficiency</u></>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 18, width: 1140}}>
				<Row at={induces} ageAt={sheets} size={44} oldSize={36} style={{whiteSpace: 'normal'}}>changing Φ in the core → eddy currents → I<sup>2</sup>R heating</Row>
				<Row at={sheets} size={44} style={{whiteSpace: 'normal'}}><AnswerBox at={wasted}><span style={{whiteSpace: 'normal'}}>insulated sheets → small loops, high R → small eddy currents → less heat</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={800} at={slip} crossAt={cuts} size={32} caption="laminations cut eddy currents">laminating increases flux linkage</CrossedChip>
			<Picture top={400}>
				<svg width={678} height={520} style={{overflow: 'visible'}}>
					<CoreSlice x={20} y={60} w={300} h={300} sheets={1} flux={0.7} eddy={e * prog(f, induces, 12)} heat={prog(f, heat, 16)} />
					<CoreSlice x={360} y={60} w={300} h={300} sheets={10} flux={0.7} eddy={e * prog(f, sheets, 12)} heat={0.01 + 0.15 * prog(f, heat, 16) * (1 - prog(f, wasted, 16))} />
					<T x={170} y={420} size={36} color={INK} anchor="middle">solid</T>
					<T x={510} y={420} size={36} color={INK} anchor="middle">laminated</T>
				</svg>
			</Picture>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const pin = cue(id, 'four hundred and sixty watts'), pout = cue(id, 'four hundred and thirty seven watts'), cent = cue(id, 'ninety five per cent'), lost = cue(id, 'Twenty three watts are lost'), wire = cue(id, 'reduced by thicker wire'), slip = cue(id, 'The slip is dividing'), mistake = cap(id, cue(id, 'is always a mistake'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={370} givens={<><span style={{color: ORANGE.ink}}>I<Sub>p</Sub> = 2.0 A, V<Sub>p</Sub> = 230 V</span>; <span style={{color: ROSE.ink}}>I<Sub>s</Sub> = 19 A, V<Sub>s</Sub> = 23 V</span></>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 450, display: 'flex', flexDirection: 'column', gap: 10, width: 1150}}>
				<Row at={Math.max(4, pin - 50)} ageAt={cent} size={44} oldSize={36}>(a) P<Sub>in</Sub> = 230 × 2.0 = {fx(A2.Pin, 0)} W</Row>
				<Row at={pout - 30} ageAt={cent} size={44} oldSize={36}>P<Sub>out</Sub> = 23 × 19 = {fx(A2.Pout, 0)} W</Row>
				<Row at={cent - 20} size={52}>η = {fx(A2.Pout, 0)}/{fx(A2.Pin, 0)} × 100% = <AnswerBox at={cent}><span style={{whiteSpace: 'nowrap'}}>{fx(A2.pct, 0)}%</span></AnswerBox></Row>
				<Row at={wire - 20} size={36} style={{whiteSpace: 'normal'}}>(b) e.g. copper (I<sup>2</sup>R) heating in the windings → <AnswerBox at={wire}><span style={{whiteSpace: 'nowrap'}}>thicker wire</span></AnswerBox>; or eddy currents → laminated core</Row>
			</div>
			<CrossedChip x={96} y={850} at={slip} crossAt={mistake} size={30} caption="η = power out ÷ power in, never over 100%">η = 460/437 = {fx(A2.slip, 0)}%</CrossedChip>
			<Picture top={250}>
				<svg width={678} height={760} style={{overflow: 'visible'}}>
					<Plate spec={XFMR} p={byHeight(XFMR, 190, 0, 240)} />
					<PowerBars x={120} base={720} h={380} w={180} gap={100} fin={prog(f, 4, 14)} fout={prog(f, 4, 14) * (A2.Pout / A2.Pin)} vin={`${fx(A2.Pin, 0)} W`} vout={`${fx(A2.Pout, 0)} W`} size={38} />
					{f >= lost ? <rect x={400} y={340} width={180} height={380 * (1 - A2.Pout / A2.Pin)} fill="none" stroke={AMBER.stroke} strokeWidth={4} strokeDasharray="10 7" opacity={prog(f, lost, 10)} /> : null}
				</svg>
			</Picture>
			<HandTag x={1660} y={500} text="23 W lost" at={lost} size={38} color={AMBER.ink} anchor="middle" />
		</>
	);
};

// ---------- 15. handoff ----------
const ZMID: [number, number] = [(GL.z1[0] + GL.z2[0]) / 2, (GL.z1[1] + GL.z2[1]) / 2];
export const HandoffBoard: React.FC<{tint?: number; dots?: number; phase?: number; zig?: number; tagAt?: number; rAt?: number; headSwap?: number; chipAt?: number; landO?: number}> = ({tint = 1, dots = 1, phase = 0, zig = 1, tagAt = -60, rAt = -60, headSwap = -60, chipAt = -60, landO = 1}) => (
	<>
		{headSwap > 0 ? <SceneHeading text={HEAD} at={-200} out={headSwap} size={HEAD_SIZE} /> : null}
		<SceneHeading text={HEAD_NEXT} at={headSwap > 0 ? headSwap + 8 : -200} size={HEAD_SIZE} />
		<FrameSvg><GridLandscape tint={tint} dots={dots} phase={phase} zig={zig} opacity={landO} /></FrameSvg>
		<Lbl x={ZMID[0]} y={ZMID[1] + 70} at={rAt} color={INK} size={36} anchor="middle">R<Ws>line</Ws></Lbl>
		<Lbl x={ZMID[0]} y={ZMID[1] + 130} at={tagAt} color={HEAT} size={40} anchor="middle">P<Ws>loss</Ws> = I<sup>2</sup>R ?</Lbl>
		<Chip x={96} y={890} at={chipAt} size={30} w={1728} color={INK} border={INK}>Next: why does stepping voltage up reduce transmission loss?</Chip>
	</>
);
/** v14's final frame for v15 (the grid landscape: one line with R_line, charges, a heat glow, "P_loss = I²R ?"). */
export const M6V14FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const heatC = cue(id, 'mostly as heat'), i2r = cue(id, 'is I squared R'), wires = cue(id, 'Now think about the wires'), km = cue(id, "They're hundreds of kilometres long"), adds = cue(id, 'their resistance adds up'), line = cue(id, 'all along the line'), why = cap(id, cue(id, 'So why does stepping the voltage up'));
	const land = prog(f, wires, 20);
	const chipT = prog(f, wires + 10, 24);
	const cx = 300 + (ZMID[0] - 130 - 300) * chipT, cy = 290 + (ZMID[1] + 100 - 290) * chipT;
	return (
		<>
			<HandoffBoard tint={prog(f, line, 24)} dots={prog(f, km, 14)} phase={(f - (dur(id) - 1)) * 2} zig={prog(f, adds, 14)} rAt={adds} tagAt={line + 10} headSwap={why} chipAt={why} landO={land} />
			{land < 0.999 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - land}}>
				<FrameSvg>
					<IconCopper x={420} y={520} k={1.7} glow={1} />
					<IconCore x={960} y={520} k={1.7} glow={1} />
					<IconCoupling x={1480} y={520} k={1.7} glow={0.4} />
				</FrameSvg>
				<Lbl x={420} y={720} at={-30} color={ORANGE.ink} size={40} anchor="middle">copper</Lbl>
				<Lbl x={960} y={720} at={-30} color={ROSE.ink} size={40} anchor="middle">core</Lbl>
				<Lbl x={1500} y={720} at={-30} color={FLUX} size={40} anchor="middle">coupling</Lbl>
				<Lbl x={960} y={820} at={heatC} color={HEAT} size={40} anchor="middle">a real transformer loses a little energy, mostly as heat</Lbl>
			</div> : null}
			<div style={{position: 'absolute', left: cx, top: cy, opacity: prog(f, i2r, 12) * (1 - prog(f, line + 10, 12))}}><Chip x={0} y={0} at={i2r} size={40} w={260} color={HEAT} border={HEAT}>P = I<sup>2</sup>R</Chip></div>
						<HandTag x={GL.t1l[0]} y={GL.t1l[1] - 260} text="hundreds of kilometres" at={km + 6} out={line} size={36} color={NAVY.ink} />
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <><span style={{color: AMBER.ink}}>η = P<Sub>out</Sub>/P<Sub>in</Sub> × 100%</span>; real transformers fall short.</>, at: 2},
		{content: <><span style={{color: ORANGE.ink}}>Copper:</span> I<sup>2</sup>R heats the windings. Fix: thicker wire.</>, at: 6},
		{content: <><span style={{color: ROSE.ink}}>Core:</span> eddy currents and hysteresis. Fix: thin insulated soft-iron sheets.</>, at: 10},
		{content: <><span style={{color: FLUX}}>Coupling:</span> leaked flux lowers V<Sub>s</Sub>. Fix: closed core, coils together.</>, at: 14},
		{content: <>Ideal model: a good approximation with known limits.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<>Copper, core, coupling.</>} sub={<>Each one breaks one ideal assumption.</>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
