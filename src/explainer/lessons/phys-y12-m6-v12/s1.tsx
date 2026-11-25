// Scenes 1 to 5: the hook (last time's two-coil bench: close, hold, open; the needle from the induction engine), the
// primary's field reaching the secondary (a cutaway of both coils with the primary's traced field lines, lit where they
// thread the secondary, and a live count), switching in slow motion (current gauge, field lines growing and collapsing,
// flux counter, needle), Lenz's law in the secondary (switch on and switch off side by side), and the two aligned graphs
// (primary current and secondary emf on one time axis, with a time cursor and the bench replaying in step).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Slider} from '../../physics/electromagnetism/plates';
import {Galvanometer} from '../../physics/electromagnetism/bench';
import {CoilTurns, MagnetField, crossesPlane, magnetLines} from '../../physics/electromagnetism/induction';
import {SeriesGraph} from '../../sims/series-views';
import {inductionAt, runInduction} from '../../sims/induction';
import {M6V11FinalFrame} from '../phys-y12-m6-v11/s3';
import {HEAD, HEAD_SIZE, cap, cue, dur, holdIf} from './common';
import {FIELD1, GapBracket, LITC, Lbl, NAVY, ORANGE, P, PIV, PrimaryField, ROSE, Ring, Strip, TC, TwoCoilBench, benchPt, benchT, gapX, linkedLines, phiLabel, primaryI, useSecNeedle} from './parts';
import type {Ev} from './parts';

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const touching = cue(id, 'not touching'), supply = cue(id, 'low-voltage supply and a switch'), galv = cue(id, 'connected only to the galvanometer'), close = cue(id, 'Close the switch'), flicks = cue(id, 'the needle flicks'), pred = cue(id, 'Make your prediction'), zero = cue(id, 'Zero.'), stays = cue(id, 'it stays there'), open = cue(id, 'Now open the switch'), other = cue(id, 'flicks the other way'), how = cap(id, cue(id, 'So how can one coil'));
	const h = holdIf(id);
	const ev: Ev[] = [[close + 30, true, 8], [open + 12, false, 4]];
	const needle = useSecNeedle(id, g => primaryI(g, ev), dur(id), 7);
	if (f < 1) return <M6V11FinalFrame />;
	const I = primaryI(f, ev);
	const blade = 1 - prog(f, close + 22, 8) + prog(f, open + 6, 6);
	const [g1, g2, gy] = gapX();
	const sw = benchPt(0, 0, 1, [TC.SW.x + TC.SW.w / 2, TC.SW.y + 40]);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 1, 16), clipPath: 'inset(150px 0 0 0)'}}><M6V11FinalFrame /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, 1, 16)}>
					<TwoCoilBench open={blade} needle={needle} flowP={I > 0.03 ? 1 : 0} phaseP={f * 3 * I} flowS={Math.abs(needle) > 3 ? 1 : 0} phaseS={f * 3 * Math.sign(needle)} />
					<GapBracket />
				</g>
				<Ring cx={(g1 + g2) / 2} cy={gy + 165} rx={110} ry={40} at={touching} color={NAVY.stroke} />
				<Ring cx={250} cy={TC.LVS.y + 40} rx={250} ry={110} at={supply} color={ORANGE.stroke} />
				<Ring cx={PIV[0]} cy={PIV[1] - 60} rx={170} ry={150} at={galv} color={INK} />
				<Ring cx={PIV[0]} cy={PIV[1] - 90} rx={80} ry={60} at={zero + 10} color={INK} seed={5} />
			</FrameSvg>
			<Lbl x={(g1 + g2) / 2} y={gy + 215} color={NAVY.ink} size={30} anchor="middle">no contact</Lbl>
			<Lbl x={sw[0]} y={TC.SW.y - 24} at={supply} color={INK} size={30} anchor="middle">switch</Lbl>
			<Lbl x={170} y={TC.LVS.y - 24} at={supply} color={INK} size={30} anchor="middle">low-voltage supply</Lbl>
			<HandTag x={PIV[0] - 180} y={PIV[1] - 230} text="flick" at={flicks} out={pred} size={40} color={ROSE.ink} />
			<HandTag x={PIV[0] - 220} y={PIV[1] - 230} text="held: zero" at={zero + 10} out={open} size={38} color={INK} />
			<HandTag x={PIV[0] - 230} y={PIV[1] - 230} text="other way" at={other} size={40} color={ROSE.ink} />
			{['steady deflection', 'zero'].map((c, i) => <Chip key={c} x={96} y={250 + i * 76} at={pred + i * 6} size={32} w={380}>{c}{i === 1 && f >= zero ? ' ✓' : ''}</Chip>)}
			<Chip x={560} y={250} at={stays} out={how} size={32} w={620}>steady current: needle at zero</Chip>
			<Lbl x={P.left[0] + 40} y={P.left[1] - 110} at={close + 30} out={open + 30} color={ORANGE.ink} size={30}>current flowing</Lbl>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1720} y={300} r={52} ringFrom={h.startFrame - pred < 150 ? pred : h.startFrame - 30} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. the primary's field reaches the secondary ----------
const CP = {x1: 220, x2: 600, cy: 600, r: 130, n: 10}, CS = {x1: 980, x2: 1240, cy: 600, r: 130, n: 8};
const CLINES = magnetLines(CP.x2 - CP.x1, 9, CP.r * 1.6, 2.4);
const CPX = (CP.x1 + CP.x2) / 2, CSX = (CS.x1 + CS.x2) / 2;
export const S02: React.FC = () => {
	const id = 'primary-field';
	const f = useCurrentFrame();
	const prim = cue(id, 'called the primary'), makes = cue(id, 'makes a magnetic field'), em = cue(id, "That's an electromagnet"), spreads = cue(id, 'Its field spreads out'), sec = cue(id, 'called the secondary'), link = cue(id, 'So the secondary has a flux linkage'), current = cue(id, "the primary's current"), nothing = cue(id, 'Nothing touches'), gap = cap(id, cue(id, 'The field reaches across'));
	const ev: Ev[] = [[makes, true, 14]];
	const I = primaryI(f, ev);
	const lit = CLINES.filter(l => crossesPlane(l, CPX, CSX, CS.r)).length;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v12-cut"><rect x={40} y={330} width={1300} height={590} /></clipPath></defs>
				<CoilTurns x1={CP.x1} x2={CP.x2} cy={CP.cy} r={CP.r} n={CP.n} half="back" />
				<CoilTurns x1={CS.x1} x2={CS.x2} cy={CS.cy} r={CS.r} n={CS.n} half="back" />
				<g clipPath="url(#v12-cut)" opacity={I}>
					<MagnetField lines={CLINES} x={CPX} y={CP.cy} color={FIELD1} lit={f >= sec ? {planeX: CSX, r: CS.r, color: LITC} : undefined} />
					{[-0.5, -0.25, 0, 0.25, 0.5].map(o => <line key={o} x1={CP.x1 + 4} y1={CP.cy + o * CP.r} x2={CP.x2 - 4} y2={CP.cy + o * CP.r} stroke={FIELD1} strokeWidth={3.5} />)}
				</g>
				<CoilTurns x1={CP.x1} x2={CP.x2} cy={CP.cy} r={CP.r} n={CP.n} half="front" color={ORANGE.stroke} />
				<CoilTurns x1={CS.x1} x2={CS.x2} cy={CS.cy} r={CS.r} n={CS.n} half="front" />
				<path d={`M${CP.x2 + 40},${CP.cy + CP.r + 70} V${CP.cy + CP.r + 90} H${CS.x1 - 40} V${CP.cy + CP.r + 70}`} fill="none" stroke={NAVY.stroke} strokeWidth={5} />
				<Ring cx={(CP.x2 + CS.x1) / 2} cy={CP.cy + CP.r + 85} rx={230} ry={40} at={nothing} color={NAVY.stroke} />
				<g transform={benchT(1380, 170, 0.24)}><TwoCoilBench open={1 - prog(f, makes, 10)} needle={0} flowP={I > 0.05 ? 1 : 0} phaseP={f * 3} /></g>
				<Ring cx={1600} cy={680} rx={230} ry={60} at={link + 10} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={CPX} y={CP.cy - CP.r - 40} at={prim} color={ORANGE.ink} size={36} anchor="middle">primary</Lbl>
			<Lbl x={CSX} y={CS.cy - CS.r - 40} at={sec} color={ROSE.ink} size={36} anchor="middle">secondary</Lbl>
			<Lbl x={CP.x1 - 16} y={CP.cy + 12} at={em} color={INK} size={34} anchor="end">S</Lbl>
			<Lbl x={CP.x2 + 50} y={CP.cy - CP.r - 10} at={em} color={INK} size={34} anchor="middle">N</Lbl>
			<Lbl x={(CP.x2 + CS.x1) / 2} y={CP.cy + CP.r + 135} at={nothing} color={NAVY.ink} size={30} anchor="middle">no contact</Lbl>
			<Chip x={1380} y={300} at={makes} size={30} w={440} color={ORANGE.ink} border={ORANGE.stroke}>a current in a coil makes a field, like a bar magnet's</Chip>
			<Readouts x={1380} y={620} w={440} size={48} at={sec} rows={[{label: 'lines through the secondary', value: String(Math.round(lit * I)), color: LITC}]} />
			<HandTag x={1400} y={780} text="secondary: linked flux" at={link + 14} size={34} color={NAVY.ink} />
			<HandTag x={(CP.x2 + CS.x1) / 2} y={CP.cy - CP.r - 120} text="field reaches across" at={gap} size={36} color={FIELD1} anchor="middle" marks={[{kind: 'arrow', from: [CP.x2 + 20, CP.cy - CP.r - 80], to: [CS.x1 - 10, CS.cy - CS.r + 10], bend: -0.3}]} markAt={gap + 4} />
			<Strip x={96} y={190} at={current} size={34} w={1200}>primary current → field → flux through the secondary</Strip>
			<Lbl x={96} y={330} at={spreads} out={current} color={INK_SOFT} size={30}>its field spreads out of the end</Lbl>
		</>
	);
};

// ---------- 3. why switching matters ----------
export const S03: React.FC = () => {
	const id = 'switching';
	const f = useCurrentFrame();
	const when = cue(id, 'When you close the switch'), rises = cue(id, 'It rises over a short time'), grows = cue(id, 'its field grows'), flicks = cue(id, 'so the needle flicks'), steady = cue(id, 'Once the current is steady'), fallsZero = cue(id, 'and the emf falls to zero'), open = cue(id, 'Open the switch'), opp = cue(id, 'in the opposite direction'), bigger = cue(id, "It's often bigger"), mutual = cap(id, cue(id, 'This is called mutual induction'));
	const ev: Ev[] = [[rises, true, 70], [open + 10, false, 24]];
	const flux = (g: number) => primaryI(g, ev);
	const needle = useSecNeedle(id, flux, dur(id), 40);
	const I = flux(f);
	const blade = 1 - prog(f, rises - 10, 10) + prog(f, open + 4, 6);
	const nLines = Math.round(linkedLines() * I);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<TwoCoilBench open={blade} needle={needle} flowP={I > 0.03 ? 1 : 0} phaseP={f * 3 * I} flowS={Math.abs(needle) > 3 ? 1 : 0} phaseS={f * 3 * Math.sign(needle)} under={<PrimaryField I={I} id="v12-s3" />} />
				<GapBracket />
				<Slider x={120} y={430} w={460} value={I} color={ORANGE.stroke} label="primary current" opacity={prog(f, when, 12)} />
			</FrameSvg>
			<Strip x={96} y={170} at={-30} size={32} w={1300}>primary current → field → flux through the secondary{f >= flicks ? ' → changing → emf' : ''}</Strip>
			<Readouts x={1400} y={250} w={430} size={44} at={when} rows={[{label: 'lines through the secondary', value: String(nLines), color: LITC}, {label: 'Φ per turn (Wb)', value: phiLabel(I), color: LITC}]} />
			<HandTag x={150} y={500} text="rising" at={rises + 10} out={steady} size={36} color={ORANGE.ink} />
			<HandTag x={1420} y={490} text="Φ changing" at={grows} out={steady} size={36} color={FIELD1} />
			<HandTag x={1420} y={490} text="Φ falling" at={open + 12} out={mutual} size={36} color={FIELD1} />
			<Lbl x={620} y={440} at={rises} out={steady} color={INK_SOFT} size={28}>slow motion</Lbl>
			<Chip x={600} y={260} at={steady + 20} out={open} size={32} w={720}>steady: no change, no emf</Chip>
			<CrossedChip x={600} y={330} at={fallsZero} crossAt={fallsZero + 30} out={opp} size={30} caption="the needle drops back to zero">steady current → steady emf</CrossedChip>
			<HandTag x={PIV[0] - 230} y={PIV[1] - 240} text="other way" at={opp} out={mutual} size={38} color={ROSE.ink} />
			<Chip x={600} y={260} at={bigger} out={mutual} size={32} w={720}>a faster fall: a bigger flick</Chip>
			<Row at={mutual} size={40} style={{position: 'absolute', left: 96, top: 870}}><AnswerBox at={mutual + 10}>mutual induction: an emf in one coil from a changing current in another</AnswerBox></Row>
		</>
	);
};

// ---------- 4. Lenz's law in the secondary ----------
const Pair: React.FC<{x: number; I: number; induced: number; opp?: number}> = ({x, I, induced, opp = 0}) => (
	<g>
		<CoilTurns x1={x + 40} x2={x + 300} cy={480} r={110} n={7} half="back" />
		<CoilTurns x1={x + 480} x2={x + 680} cy={480} r={110} n={6} half="back" />
		{I > 0.02 ? <Arrow2 from={[x + 40, 480]} to={[x + 40 + 380 * I, 480]} color={FIELD1} width={10} head={30} /> : null}
		{induced !== 0 ? <Arrow2 from={[x + 580 - induced * 110, 520]} to={[x + 580 + induced * 110, 520]} color={ROSE.stroke} width={10} head={30} opacity={opp} /> : null}
		<CoilTurns x1={x + 40} x2={x + 300} cy={480} r={110} n={7} half="front" color={ORANGE.stroke} />
		<CoilTurns x1={x + 480} x2={x + 680} cy={480} r={110} n={6} half="front" />
	</g>
);
export const S04: React.FC = () => {
	const id = 'lenz-secondary';
	const f = useCurrentFrame();
	const lenz = cue(id, "Lenz's law from last video"), on = cue(id, 'At switch on'), opposes = cue(id, 'that opposes the growing flux'), off = cue(id, 'At switch off'), props = cue(id, 'props up the flux'), why = cue(id, "That's why the two flicks"), energy = cap(id, cue(id, 'And the energy'));
	const Ion = Math.min(1, Math.max(0, (f - on) / 90)), Ioff = 1 - Math.min(1, Math.max(0, (f - off) / 40));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={40} y={240} width={900} height={520} rx={16} fill={CARD} stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<rect x={980} y={240} width={900} height={520} rx={16} fill={CARD} stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<Pair x={80} I={Ion} induced={-1} opp={prog(f, opposes, 12)} />
				<Pair x={1020} I={f >= off ? Ioff : 1} induced={1} opp={prog(f, props, 12)} />
				<Ring cx={660} cy={520} rx={150} ry={50} at={opposes + 10} color={ROSE.stroke} />
				<Ring cx={1600} cy={520} rx={150} ry={50} at={props + 10} color={ROSE.stroke} />
			</FrameSvg>
			<Lbl x={70} y={290} at={lenz} color={INK} size={38}>switch on</Lbl>
			<Lbl x={1010} y={290} at={lenz} color={INK} size={38}>switch off</Lbl>
			<Lbl x={120} y={650} at={on} color={FIELD1} size={30}>primary field growing</Lbl>
			<Lbl x={1060} y={650} at={off} color={FIELD1} size={30}>primary field falling</Lbl>
			<HandTag x={560} y={330} text="opposes the rise" at={opposes + 14} size={36} color={ROSE.ink} />
			<HandTag x={1480} y={330} text="props up the fall" at={props + 14} size={36} color={ROSE.ink} />
			<svg style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}} width={1920} height={1080}>
				<g opacity={prog(f, why, 12)}><Galvanometer p={{x: 640, y: 560, w: 200}} deg={30} /></g>
				<g opacity={prog(f, why, 12)}><Galvanometer p={{x: 1580, y: 560, w: 200}} deg={-40} /></g>
			</svg>
			<Row at={why} size={44} style={{position: 'absolute', left: 96, top: 790}}><AnswerBox at={why + 10}>opposite flicks</AnswerBox></Row>
			<Row at={energy} size={40} style={{position: 'absolute', left: 520, top: 800}}>
				<span style={{color: ORANGE.ink}}>supply</span> → <span style={{color: FIELD1}}>changing field</span> → <span style={{color: ROSE.ink}}>secondary circuit</span>
			</Row>
		</>
	);
};

// ---------- 5. two graphs tell the story ----------
const TG = (() => {
	const I = (t: number) => (t < 1 ? 0 : t < 4 ? 1 - Math.exp(-(t - 1) / 0.15) : (1 - Math.exp(-3 / 0.15)) * Math.exp(-(t - 4) / 0.06));
	const run = runInduction({source: {kind: 'custom', flux: I}, turns: 1, duration: 6, steps: 900});
	const t = Array.from(run.t), cur = t.map(I), eps = t.map(tt => -inductionAt(run, tt).emf);
	return {I, t, cur, eps};
})();
const GA = {x: 110, w: 1290};
export const S05: React.FC = () => {
	const id = 'two-graphs';
	const f = useCurrentFrame();
	const story = cue(id, 'the whole story'), top = cue(id, 'On top, the primary current'), below = cue(id, 'Below it, the emf'), only = cue(id, 'It only appears'), changing = cue(id, 'the top graph is changing'), steady = cue(id, 'Where the current is steady'), large = cue(id, "even if it's a large current"), nothing = cap(id, cue(id, 'the secondary gets nothing'));
	const now = Math.min(6, Math.max(0, ((f - top) / (only - top)) * 6));
	const I = TG.I(now);
	const eps = TG.eps[Math.min(TG.t.length - 1, Math.round(now * 150))];
	const blade = I > 0.01 && now < 4 ? 0 : 1;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={benchT(470, 160, 0.4)}><TwoCoilBench open={blade} needle={Math.max(-56, Math.min(56, 4 * eps))} flowP={I > 0.03 ? 1 : 0} phaseP={f * 3 * I} under={<PrimaryField I={I} id="v12-s5" />} /></g>
			</FrameSvg>
			<SeriesGraph lines={[{t: TG.t, v: TG.cur, tone: 'amber'}]} x={GA.x} y={330} w={GA.w} h={270} xRange={[0, 6]} yRange={[-0.1, 1.2]} now={now} yLabel="I" xTicks={[]} yTicks={[0]} nowLine
				spans={[{from: 1, to: 1.7, tone: 'amber', at: changing, label: 'changing'}, {from: 4, to: 4.35, tone: 'amber', at: changing}, {from: 1.7, to: 4, tone: 'grey', at: steady, label: 'steady'}]} />
			<SeriesGraph lines={[{t: TG.t, v: TG.eps, tone: 'red'}]} x={GA.x} y={610} w={GA.w} h={320} xRange={[0, 6]} yRange={[-17, 8]} now={now} xLabel="time" yLabel="ε" xTicks={[]} yTicks={[0]} nowLine
				spans={[{from: 1, to: 1.7, tone: 'red', at: changing, label: 'only here'}, {from: 4, to: 4.35, tone: 'red', at: changing}, {from: 1.7, to: 4, tone: 'grey', at: steady}]} />
			<Lbl x={GA.x + 150} y={360} at={top} color={ORANGE.ink} size={30}>primary current I<Sub>p</Sub></Lbl>
			<Lbl x={GA.x + 150} y={650} at={below} color={ROSE.ink} size={30}>secondary emf ε<Sub>s</Sub> (+: needle flicks right)</Lbl>
			<Chip x={1440} y={330} at={story} size={30} w={400}>one time axis for both graphs</Chip>
			<Readouts x={1440} y={440} w={400} size={40} at={top} rows={[{label: <>I<Sub>p</Sub></>, value: fx2(I), color: ORANGE.ink}, {label: <>ε<Sub>s</Sub></>, value: fx2(eps / 6.7), color: ROSE.ink}]} />
			<CrossedChip x={1440} y={640} at={large} crossAt={large + 26} size={30} caption="the change, not the size">big current → big emf</CrossedChip>
			<Row at={nothing} size={40} style={{position: 'absolute', left: 1440, top: 820, whiteSpace: 'normal', width: 420}}><AnswerBox at={nothing + 8}>steady I<Sub>p</Sub>: ε<Sub>s</Sub> = 0</AnswerBox></Row>
			<Lbl x={1640} y={600} at={top} color={INK_SOFT} size={28} anchor="middle">relative values</Lbl>
		</>
	);
};
const fx2 = (v: number) => (Math.abs(v) < 0.005 ? '0' : (v < 0 ? '−' : '') + Math.abs(v).toFixed(2));
