// Scenes 1 to 6: the hook (last time's grid landscape gets the site's numbers and the prediction), two powers and two
// voltages (the one-circuit model: outgoing and return wires, the tall transmission-voltage bracket and the short
// drop along the line), same power, smaller current (twin lines whose charges thin out), the square does the work
// (a voltage slider on the circuits engine: the load is reset each step so 500 MW is always sent; a point rides the
// 1/V^2 curve), and the worked example at 250 kV then 500 kV with the sending and receiving ledger.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Readouts, Row} from '../../physics/projectile/board';
import {Slider} from '../../physics/electromagnetism/plates';
import {HEAT} from '../../physics/electromagnetism/transformer';
import {M6V14FinalFrame} from '../phys-y12-m6-v14/s3';
import {HEAD, HEAD_SIZE, MW, P_SENT, R_LINE, SITE, SLIDE, W250, W500, cap, cue, frac, holdIf, mono} from './common';
import type {GraphBox} from './parts';
import {AMBER, Bracket2, EndBox, GL, GridLandscape, Givens, Lbl, Ledger, LossGraph, MC, ModelCircuit, ModelLine, NAVY, ORANGE, Ring, Strip, VIOLET, fx, gMap, gapFor, Ws} from './parts';

const ZMID: [number, number] = [(GL.z1[0] + GL.z2[0]) / 2, (GL.z1[1] + GL.z2[1]) / 2];
const lossAt = (kv: number) => MW(P_SENT * P_SENT * R_LINE / (kv * 1e3) ** 2);

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const mw = cue(id, 'five hundred megawatts'), ohm = cue(id, 'two point zero ohms'), v250 = cue(id, 'two hundred and fifty thousand volts'), v500 = cue(id, 'five hundred thousand volts'), what = cue(id, 'If we double the voltage'), quarter = cue(id, 'drop to a quarter'), guess = cue(id, 'A lot of people guess it doubles'), see = cap(id, cue(id, 'reduces transmission loss'));
	const h = holdIf(id);
	if (f < 1) return <M6V14FinalFrame />;
	const pulse = f >= guess && f < guess + 40 ? Math.sin((Math.PI * (f - guess)) / 40) : 0;
	const small = prog(f, see, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<GridLandscape tint={1} dots={1} phase={f * 2} zig={1} />
				<Ring cx={ZMID[0]} cy={ZMID[1]} rx={190} ry={60} at={see + 6} color={HEAT} />
			</FrameSvg>
			<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: why does stepping voltage up reduce transmission loss?</Chip>
			<Lbl x={ZMID[0]} y={ZMID[1] + 70} color={INK} size={36} anchor="middle">R<Ws>line</Ws>{f >= ohm ? ' = 2.0 Ω (total)' : ''}</Lbl>
			<Lbl x={ZMID[0]} y={ZMID[1] + 130} color={HEAT} size={40} anchor="middle">P<Ws>loss</Ws> = I<sup>2</sup>R ?</Lbl>
			<Lbl x={GL.st.x + 10} y={GL.st.y - 40} at={mw} color={AMBER.ink} size={44}>P sent = 500 MW</Lbl>
			<Lbl x={GL.st.x + 10} y={GL.st.y - 110} at={v250} color={NAVY.ink} size={40}>250 kV</Lbl>
			<Lbl x={GL.st.x + 190} y={GL.st.y - 110} at={v500} color={NAVY.ink} size={40}>or 500 kV</Lbl>
			<HandTag x={GL.st.x + 400} y={GL.st.y - 150} text="× 2" at={v500 + 8} size={40} color={NAVY.ink} />
			<Chip x={GL.st.x + 10} y={200} at={what} size={32} w={560}>double V: what happens to the loss?</Chip>
			{['doubles', 'halves', 'a quarter'].map((c, i) => <Chip key={c} x={1460 + 160 * small} y={180 + i * 66 - 20 * small * i} at={quarter + i * 6} size={(i === 0 ? 32 + 6 * pulse : 32) - 4 * small} w={300 - 60 * small}>{c}</Chip>)}
			<HandTag x={1060} y={250} text="more volts, more loss?" at={guess + 6} size={34} color={'#8a8378'} />
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1760} y={480} r={52} ringFrom={h.startFrame - quarter < 150 ? quarter : h.startFrame - 30} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. two powers, two voltages ----------
export const S02: React.FC = () => {
	const id = 'two-powers';
	const f = useCurrentFrame();
	const first = cue(id, 'First, keep two powers apart'), pvi = cue(id, 'P equals V I'), wasted = cue(id, 'But the power wasted in the line'), i2r = cue(id, 'I squared R'), two = cue(id, 'And there are two voltages too'), model = cue(id, 'In our simple model'), wires = cue(id, 'outgoing wire and the return wire'), heats = cue(id, 'The voltage that actually heats the wires'), drop = cue(id, 'small drop along their length'), dep = cue(id, 'So the loss depends on the current'), high = cap(id, cue(id, 'not on how high the voltage is'));
	const zm = (MC.x1 + MC.x2) / 2;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<ModelCircuit phase={f * (f >= dep && f < dep + 50 ? 5 : 2.5)} gap={gapFor(W250.I)} tint={prog(f, i2r, 16) * 0.7} />
				<Bracket2 x1={560} y1={MC.top + 8} x2={560} y2={MC.bot - 8} color={NAVY.stroke} opacity={prog(f, wires, 12)} />
				<Bracket2 x1={zm - 20} y1={MC.top - 36} x2={zm + 20} y2={MC.top - 36} color={VIOLET.stroke} opacity={prog(f, drop, 12)} />
				<Ring cx={1172} cy={276} rx={34} ry={34} at={high + 6} color={ORANGE.stroke} />
			</FrameSvg>
			<Lbl x={600} y={MC.top + 120} at={wires + 6} color={NAVY.ink} size={40}>V = 250 kV</Lbl>
			<Lbl x={600} y={MC.top + 164} at={wires + 10} color={NAVY.ink} size={28}>(transmission voltage, model)</Lbl>
			<Lbl x={zm} y={MC.top - 64} at={drop + 6} color={VIOLET.ink} size={32} anchor="middle">drop along the line = IR</Lbl>
			<HandTag x={610} y={MC.top - 40} text="not to scale" at={drop + 14} size={28} color={INK} />
			<HandTag x={zm + 220} y={MC.top + 70} text="this one heats the wire" at={heats + 4} size={32} color={VIOLET.ink} />
			<Chip x={96} y={170} at={first} size={30} w={420}>two powers, two voltages</Chip>
			<Chip x={560} y={250} at={pvi} size={32} w={380} color={AMBER.ink} border={AMBER.stroke}>P = VI (power carried)</Chip>
			<Chip x={990} y={250} at={i2r} size={32} w={660} color={HEAT} border={HEAT}>P<Ws>loss</Ws> = I<sup>2</sup>R (power wasted in the line)</Chip>
			<HandTag x={1000} y={190} text="something different" at={wasted} out={i2r} size={32} color={HEAT} />
			<Chip x={96} y={240} at={two} size={30} w={420}>two voltages: V and IR</Chip>
			<Lbl x={480} y={MC.bot + 70} at={model} color={INK} size={30}>simple model: one circuit, R = total of both wires</Lbl>
			<HandTag x={1060} y={MC.bot + 130} text="loss depends on I, not on V" at={high} size={36} color={ORANGE.ink} />
		</>
	);
};

// ---------- 3. same power, smaller current ----------
const TL = [{y: 430, v: '250 kV', I: W250.I}, {y: 730, v: '500 kV', I: W500.I}];
export const S03: React.FC = () => {
	const id = 'current-falls';
	const f = useCurrentFrame();
	const fixed = cue(id, 'for a fixed power'), pv = cue(id, 'the current is P over V'), big = cue(id, 'as a big current at a low voltage'), small = cue(id, 'or a small current at a high voltage'), dbl = cue(id, 'Double the voltage'), halves = cap(id, cue(id, 'the current halves'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{TL.map((l, i) => <g key={i}>
					<EndBox x={96} y={l.y - 60} w={280} h={120} label="500 MW sent" color={AMBER.ink} />
					<ModelLine x1={376} x2={1400} y={l.y} gap={f >= small + (i ? 0 : -200) && f >= big ? gapFor(l.I) : gapFor(W250.I)} phase={f * 3} tint={0} />
					<EndBox x={1400} y={l.y - 60} w={200} h={120} label="city" />
				</g>)}
			</FrameSvg>
			{TL.map((l, i) => <Lbl key={i} x={888} y={l.y - 40} at={fixed} color={INK} size={30} anchor="middle">R = 2.0 Ω</Lbl>)}
			<Row at={pv} size={52} style={{position: 'absolute', left: 1000, top: 166}}><AnswerBox at={pv + 8}><span style={{whiteSpace: 'nowrap'}}>I = P / V</span></AnswerBox></Row>
			<Lbl x={110} y={TL[0].y + 104} at={big} color={NAVY.ink} size={34}>low V ({TL[0].v}): big I</Lbl>
			<Lbl x={110} y={TL[1].y + 104} at={small} color={NAVY.ink} size={34}>high V ({TL[1].v}): small I</Lbl>
			<HandTag x={600} y={TL[0].y + 90} text="lots of current" at={big + 10} size={34} color={ORANGE.ink} />
			<HandTag x={600} y={TL[1].y + 90} text="little current" at={small + 10} size={34} color={ORANGE.ink} />
			<HandTag x={1630} y={TL[1].y - 40} text="V × 2" at={dbl} size={40} color={NAVY.ink} />
			<Lbl x={1640} y={TL[1].y + 30} at={halves} color={ORANGE.ink} size={52}>I ÷ {fx(W250.I / W500.I, 0)}</Lbl>
		</>
	);
};

// ---------- 4. the square does the work ----------
const G4: GraphBox = {x: 880, y: 250, w: 900, h: 480, vmax: 2600, lmax: 10};
export const S04: React.FC = () => {
	const id = 'square';
	const f = useCurrentFrame();
	const key = cue(id, "And here's the key"), i2r = cue(id, 'The loss is I squared R'), put = cue(id, 'Put I equals P over V into it'), sq = cue(id, 'P squared R over V squared'), half = cue(id, 'Half the current gives a quarter of the loss'), tenth = cue(id, 'A tenth of the current'), hund = cue(id, 'one hundredth of the loss'), worth = cap(id, cue(id, 'high voltage is worth it'));
	const idx = f >= worth ? 0 : f >= tenth + 10 ? 3 : f >= half + 50 ? 2 : f >= half + 25 ? 1 : 0;
	const r = SLIDE[idx], r0 = SLIDE[0];
	const kc = kf(f, mono([[0, 1], [half, 1], [half + 25, 2], [half + 50, 4], [tenth + 10, 10], [worth, 10], [worth + 20, 1]]));
	const m = gMap(G4);
	const vk = 250 * kc;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<ModelLine x1={110} x2={700} y={470} gap={gapFor(r.I)} phase={f * 3} tint={Math.min(1, r.loss / r0.loss)} />
				<Slider x={140} y={570} w={520} value={[0, 1 / 3, 2 / 3, 1][[1, 2, 4, 10].indexOf(r.k)]} color={NAVY.stroke} label="voltage" ticks={[[0, '× 1'], [1 / 3, '× 2'], [2 / 3, '× 4'], [1, '× 10']]} size={28} />
				<LossGraph g={G4} loss={lossAt} xTicks={[500, 1000, 1500, 2000, 2500]} yTicks={[0, 2, 4, 6, 8, 10]} grow={prog(f, key, 30)} />
				{f >= half ? <circle cx={m.X(vk)} cy={m.Y(lossAt(vk))} r={14} fill={HEAT} stroke="#fffdf8" strokeWidth={4} /> : null}
			</FrameSvg>
			<Lbl x={G4.x} y={G4.y - 34} at={key} color={HEAT} size={30}>P<Ws>loss</Ws> (MW): same power, same line</Lbl>
			<Lbl x={G4.x + G4.w + 20} y={G4.y + G4.h + 10} at={key} color={NAVY.ink} size={30} anchor="end">V (kV)</Lbl>
			<Strip x={96} y={166} at={i2r} size={44} border={INK}>P<Ws>loss</Ws> = I<sup>2</sup>R</Strip>
			<Row at={sq - 20} size={48} style={{position: 'absolute', left: 96, top: 250}}><AnswerBox at={sq}><span style={{whiteSpace: 'nowrap'}}>P<Ws>loss</Ws> = (P/V)<sup>2</sup>R = P<sup>2</sup>R / V<sup>2</sup></span></AnswerBox></Row>
			<HandTag x={96} y={360} text="I = P/V put in" at={put} size={32} color={NAVY.ink} />
			<HandTag x={560} y={360} text="÷ V squared" at={sq + 10} size={34} color={NAVY.ink} />
			<Readouts x={96} y={640} w={620} size={44} at={half} rows={[
				{label: 'V', value: `× ${r.k}`, color: NAVY.ink},
				{label: 'I', value: `× ${frac(r.I / r0.I)}`, color: ORANGE.ink},
				{label: <>P<Ws>loss</Ws></>, value: `× ${frac(r.loss / r0.loss)}`, color: HEAT},
			]} />
			<HandTag x={G4.x + 380} y={G4.y + 150} text="the square does the work" at={hund} size={36} color={HEAT} />
			<HandTag x={G4.x + 380} y={G4.y + 210} text="same power, same line" at={worth} size={34} color={INK} />
		</>
	);
};

// ---------- 5 and 6. worked example ----------
const WorkedHead: React.FC<{v: 250 | 500; at?: number}> = ({v, at = -30}) => (
	<>
		<Strip x={96} y={166} at={at} size={36}>Find the line current, the power loss and the percentage lost.</Strip>
		<Strip x={96} y={236} at={at} size={36} border={INK}>I = P / V;   P<Ws>loss</Ws> = I<sup>2</sup>R;   % loss = P<Ws>loss</Ws> / P × 100</Strip>
		<Givens x={96} y={306} w={900} at={at} size={32} lines={[<span key="p" style={{color: AMBER.ink}}>P sent = 500 MW = 500 × 10<sup>6</sup> W</span>, <span key="r" style={{color: INK}}>R = 2.0 Ω (total line)</span>, <>V = {v} kV = {v} × 10<sup>3</sup> V</>]} />
		<FrameSvg><ModelLine x1={1100} x2={1800} y={230} gap={gapFor(v === 250 ? W250.I : W500.I)} phase={0} dots={1} /></FrameSvg>
		<Lbl x={1450} y={300} at={at} color={INK} size={30} anchor="middle">500 MW, 2.0 Ω, {v} kV</Lbl>
	</>
);
export const S05: React.FC = () => {
	const id = 'worked-250kv';
	const f = useCurrentFrame();
	const nums = cue(id, "Let's put numbers on our line"), cur = cue(id, 'The current is five hundred million watts'), amps = cue(id, 'which is two thousand amps'), loss = cue(id, 'The loss is two thousand squared'), mw = cue(id, 'eight point zero megawatts'), sent = cap(id, cue(id, 'of the power sent'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{opacity: prog(f, nums - 10, 14)}}><WorkedHead v={250} /></div>
			<Row at={cur} size={48} style={{position: 'absolute', left: 96, top: 470}}>I = 500 × 10<sup>6</sup> / 250 × 10<sup>3</sup> = <AnswerBox at={amps}><span style={{whiteSpace: 'nowrap'}}>{fx(W250.I, 0)} A</span></AnswerBox></Row>
			<Row at={loss} size={48} style={{position: 'absolute', left: 96, top: 560}}>P<Ws>loss</Ws> = 2000<sup>2</sup> × 2.0 = 8.0 × 10<sup>6</sup> W = <AnswerBox at={mw}><span style={{whiteSpace: 'nowrap'}}>{fx(MW(W250.loss), 1)} MW</span></AnswerBox></Row>
			<CrossedChip x={96} y={660} at={mw + 10} crossAt={mw + 34} size={30} caption="that's the power carried, not lost">P<Ws>loss</Ws> = VI = 250 kV × 2000 A = {fx(MW(250e3 * W250.I), 0)} MW</CrossedChip>
			<Row at={sent} size={48} style={{position: 'absolute', left: 96, top: 800}}>8.0 / 500 × 100 = <AnswerBox at={sent + 6}><span style={{whiteSpace: 'nowrap'}}>{fx(W250.pct, 1)}%</span></AnswerBox></Row>
			<FrameSvg><Ledger x={1100} y={520} w={700} sent={MW(W250.sent)} lost={MW(W250.loss)} opacity={prog(f, sent, 14)} /></FrameSvg>
		</>
	);
};
export const S06: React.FC = () => {
	const id = 'worked-500kv';
	const f = useCurrentFrame();
	const dbl = cue(id, 'Now double the voltage'), amps = cue(id, 'to one thousand amps'), mw = cue(id, 'two point zero megawatts'), pct = cue(id, 'Just zero point four per cent'), qtr = cue(id, 'cut the loss to a quarter'), guessed = cue(id, 'So if you guessed a quarter'), right = cap(id, cue(id, 'you were right'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<WorkedHead v={500} at={dbl - 6} />
			<Row at={-30} size={34} style={{position: 'absolute', left: 1100, top: 360}}>250 kV: {fx(W250.I, 0)} A, {fx(MW(W250.loss), 1)} MW, {fx(W250.pct, 1)}%</Row>
			<Row at={amps - 30} size={48} style={{position: 'absolute', left: 96, top: 470}}>I = 500 × 10<sup>6</sup> / 500 × 10<sup>3</sup> = <AnswerBox at={amps}><span style={{whiteSpace: 'nowrap'}}>{fx(W500.I, 0)} A</span></AnswerBox></Row>
			<Row at={mw - 40} size={48} style={{position: 'absolute', left: 96, top: 560}}>P<Ws>loss</Ws> = 1000<sup>2</sup> × 2.0 = 2.0 × 10<sup>6</sup> W = <AnswerBox at={mw}><span style={{whiteSpace: 'nowrap'}}>{fx(MW(W500.loss), 1)} MW</span></AnswerBox></Row>
			<Row at={pct} size={44} style={{position: 'absolute', left: 96, top: 650}}>2.0 / 500 × 100 = {fx(W500.pct, 1)}%</Row>
			<Row at={qtr} size={44} style={{position: 'absolute', left: 96, top: 730}}>8.0 MW → 2.0 MW: <AnswerBox at={qtr + 8}><span style={{whiteSpace: 'nowrap'}}>× ¼</span></AnswerBox></Row>
			<FrameSvg>
				<Ledger x={1100} y={480} w={700} sent={MW(W250.sent)} lost={MW(W250.loss)} />
				<Ledger x={1100} y={680} w={700} sent={MW(W500.sent)} lost={MW(W500.loss)} opacity={prog(f, pct, 14)} />
			</FrameSvg>
			<Lbl x={1080} y={520} color={NAVY.ink} size={30} anchor="end">250 kV</Lbl>
			<Lbl x={1080} y={720} at={pct} color={NAVY.ink} size={30} anchor="end">500 kV</Lbl>
			<Chip x={96} y={830} at={guessed} size={32} w={260}>a quarter ✓</Chip>
			<CrossedChip x={380} y={830} at={guessed + 8} crossAt={right} size={32} caption="more volts, less loss">doubles</CrossedChip>
			<Row at={right} size={30} style={{position: 'absolute', left: 1100, top: 870, width: 760, whiteSpace: 'normal'}}>Check: 100 MW through 5.0 Ω: 100 kV → {fx(MW(SITE.a.loss), 0)} MW ({fx(SITE.a.pct, 0)}%); 500 kV → {fx(MW(SITE.b.loss), 1)} MW ({fx(SITE.b.pct, 1)}%); × 1/{fx(SITE.a.loss / SITE.b.loss, 0)}</Row>
		</>
	);
};
