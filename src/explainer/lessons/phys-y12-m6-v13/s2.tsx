// Scenes 6 to 10: the current goes the other way (full-width algebra, then a live turns slider on the engine's ideal
// transformer with a 10 W load), the load decides the current (an open secondary, a flux trace frozen at one
// rising-flux instant, the secondary's opposing field and the primary's answering current, a second lamp), the worked
// example in the calculation layout (the voltage, then current and power), and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Slider} from '../../physics/electromagnetism/plates';
import {ACTrace} from '../../physics/electromagnetism/transformer';
import {MemoryCard} from '../../shared/scenes';
import {HEAD, HEAD_SIZE, HOOK, SLIDER, TWO, WE, cap, cue, mono} from './common';
import {AMBER, FLUX, Frac, Givens, Lbl, MiniXf, NAVY, ORANGE, PowerBars, ROSE, Ring, Strip, XCircuit, fx, swing, xcGeom} from './parts';

const Rule1: React.FC = () => <><Frac n={<>V<Sub>p</Sub></>} d={<>V<Sub>s</Sub></>} /> = <Frac n={<>N<Sub>p</Sub></>} d={<>N<Sub>s</Sub></>} /></>;
const Rule2: React.FC = () => <>V<Sub>p</Sub>I<Sub>p</Sub> = V<Sub>s</Sub>I<Sub>s</Sub></>;

// ---------- 6. so current goes the other way ----------
const SL = {cx: 600, cy: 560, s: 400, t: 76, ax: 290, lx: 910};
const SLG = xcGeom(SL.cx, SL.cy, SL.s, SL.t, SL.ax, SL.lx);
export const S06: React.FC = () => {
	const id = 'current-ratio';
	const f = useCurrentFrame();
	const together = cue(id, 'Now put the two rules together'), turnsR = cue(id, 'The voltage goes up by the turns ratio'), stays = cue(id, 'and the power stays the same'), ratio = cue(id, 'So the current has to go down by the same ratio'), flipped = cue(id, 'The turns are flipped'), live = cue(id, 'Try it live'), give = cue(id, 'Give the secondary fifty'), n100 = cue(id, 'one hundred, two hundred'), n200 = cue(id, 'two hundred, then four hundred'), n400 = cue(id, 'then four hundred turns'), climbs = cue(id, 'The voltage climbs'), stepsDown = cue(id, 'A step-up transformer steps the current down'), both = cue(id, "It can't raise both"), exch = cap(id, cue(id, 'voltage for current'));
	const idx = f >= n400 + 12 ? 3 : f >= n200 + 12 ? 2 : f >= n100 + 8 ? 1 : 0;
	const sv = kf(f, mono([[give, 0], [n100 + 8, 0], [n100 + 20, 1 / 3], [n200 + 12, 1 / 3], [n200 + 24, 2 / 3], [n400 + 12, 2 / 3], [n400 + 24, 1]]));
	const r = SLIDER[idx];
	const stage = prog(f, live, 20);
	const algO = 1 - stage;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{algO > 0.01 ? <div style={{opacity: algO}}>
				<Row at={together} size={44} style={{position: 'absolute', left: 96, top: 190}}><AnswerBox at={together + 6} tick={false}><span style={{whiteSpace: 'nowrap'}}><Rule1 /></span></AnswerBox></Row>
				<Row at={together + 10} size={44} style={{position: 'absolute', left: 620, top: 205}}><AnswerBox at={together + 16} tick={false}><span style={{whiteSpace: 'nowrap'}}><Rule2 /></span></AnswerBox></Row>
				<HandTag x={120} y={330} text="voltage follows the turns ratio" at={turnsR} size={34} color={ROSE.ink} />
				<HandTag x={640} y={330} text="power stays the same" at={stays} size={34} color={AMBER.ink} />
				<Row at={ratio} size={60} style={{position: 'absolute', left: 96, top: 420}}><AnswerBox at={ratio + 10}><span style={{whiteSpace: 'nowrap'}}><Frac n={<span style={{color: ORANGE.ink}}>I<Sub>p</Sub></span>} d={<span style={{color: ROSE.ink}}>I<Sub>s</Sub></span>} /> = <Frac n={<>V<Sub>s</Sub></>} d={<>V<Sub>p</Sub></>} /> = <Frac n={<>N<Sub>s</Sub></>} d={<>N<Sub>p</Sub></>} /></span></AnswerBox></Row>
				<FrameSvg><g opacity={prog(f, 0, 12)}>
					<XCircuit cx={1460} cy={560} s={420} t={78} ax={1110} lx={1810} np={4} ns={8} phase={f * 3} lit={1} flowS={1} phaseS={swing(f, HOOK.secondaryCurrent)} flowP={1} phaseP={swing(f, HOOK.primaryCurrent)} lampR={28} srcR={32} />
					<PowerBars x={1150} base={900} h={110} w={150} gap={120} fin={0.9} fout={0.9} vin="10 W" vout="10 W" size={30} opacity={prog(f, stays, 14)} />
				</g></FrameSvg>
				<Lbl x={1460} y={300} color={INK} size={32} anchor="middle">the hook: N<Sub>p</Sub> = 100, N<Sub>s</Sub> = 200</Lbl>
				<Lbl x={1110} y={640} color={ORANGE.ink} size={34} anchor="middle">10 V</Lbl>
				<Lbl x={1110} y={690} color={ORANGE.ink} size={34} anchor="middle">1.0 A</Lbl>
				<Lbl x={1810} y={640} color={ROSE.ink} size={34} anchor="middle">20 V</Lbl>
				<Lbl x={1810} y={690} color={ROSE.ink} size={34} anchor="middle">0.50 A</Lbl>
				<HandTag x={1810} y={740} text="V × 2" at={turnsR} size={34} color={ROSE.ink} anchor="middle" />
				<HandTag x={1770} y={810} text="I ÷ 2" at={ratio} size={34} color={ROSE.ink} anchor="middle" />
				<Row at={flipped} size={48} style={{position: 'absolute', left: 96, top: 610}}><span style={{color: NAVY.ink}}>voltage: <Frac n={<>N<Sub>p</Sub></>} d={<>N<Sub>s</Sub></>} />   →   current: <Frac n={<>N<Sub>s</Sub></>} d={<>N<Sub>p</Sub></>} /></span></Row>
				<HandTag x={900} y={690} text="flipped" at={flipped + 10} size={40} color={NAVY.ink} />
			</div> : null}
			{stage > 0.01 ? <div style={{opacity: stage}}>
				<Strip x={96} y={164} at={live} size={40}><Frac n={<>I<Sub>p</Sub></>} d={<>I<Sub>s</Sub></>} /> = <Frac n={<>N<Sub>s</Sub></>} d={<>N<Sub>p</Sub></>} />   and   <Rule2 /></Strip>
				<FrameSvg>
					<XCircuit {...SL} np={4} ns={Math.max(2, r.ns / 25)} phase={f * 3} lit={1} flowP={1} phaseP={swing(f, r.primaryCurrent)} flowS={1} phaseS={swing(f, r.secondaryCurrent)} />
					<Slider x={360} y={880} w={480} value={sv} color={NAVY.stroke} label="secondary turns" ticks={[[0, '50'], [1 / 3, '100'], [2 / 3, '200'], [1, '400']]} size={28} />
					<PowerBars x={1690} base={700} h={240} w={70} gap={40} fin={0.5} fout={0.5 * (r.secondaryVoltage * r.secondaryCurrent) / 10} vin="10 W" vout={`${fx(r.secondaryVoltage * r.secondaryCurrent, 0)} W`} size={30} opacity={prog(f, climbs, 12)} />
				</FrameSvg>
				<Lbl x={SL.cx - SLG.m} y={SL.cy - SLG.o - 22} color={NAVY.ink} size={32} anchor="middle">N<Sub>p</Sub> = 100</Lbl>
				<Lbl x={SL.cx + SLG.m} y={SL.cy - SLG.o - 22} color={NAVY.ink} size={32} anchor="middle">N<Sub>s</Sub> = {r.ns}</Lbl>
				<Lbl x={SL.ax - 44} y={SL.cy + 12} color={ORANGE.ink} size={34} anchor="end">10 V</Lbl>
				<Lbl x={SL.lx} y={SL.cy + 76} color={INK} size={28} anchor="middle">load takes 10 W</Lbl>
				<Lbl x={SL.cx} y={SL.cy + SLG.o + 46} color={INK} size={26} anchor="middle">not every turn drawn</Lbl>
				<Readouts x={1110} y={190} w={540} size={48} at={live + 10} rows={[
					{label: <>V<Sub>s</Sub></>, value: fx(r.secondaryVoltage, r.secondaryVoltage < 10 ? 1 : 0), unit: 'V', color: ROSE.ink},
					{label: <>I<Sub>s</Sub></>, value: fx(r.secondaryCurrent, r.secondaryCurrent < 1 ? 2 : 1), unit: 'A', color: ROSE.ink},
					{label: <>V<Sub>s</Sub> × I<Sub>s</Sub></>, value: fx(r.secondaryVoltage * r.secondaryCurrent, 0), unit: 'W', color: AMBER.ink},
					{label: <>I<Sub>p</Sub> (10 W ÷ 10 V)</>, value: fx(r.primaryCurrent, 1), unit: 'A', color: ORANGE.ink},
				]} />
				<HandTag x={1780} y={800} text="product fixed" at={climbs + 20} size={34} color={AMBER.ink} anchor="middle" />
				<Row at={stepsDown} size={36} style={{position: 'absolute', left: 1110, top: 600}}>step-up: V up, I down</Row>
				<Row at={stepsDown + 30} size={36} style={{position: 'absolute', left: 1110, top: 652}}>step-down: V down, I up</Row>
				<Chip x={1110} y={740} at={both} size={32} w={280} color={ROSE.ink} border={ROSE.stroke}>V ↑</Chip>
				<Chip x={1410} y={740} at={both + 6} size={32} w={240} color={ORANGE.ink} border={ORANGE.stroke}>I ↓</Chip>
				<Chip x={1260} y={814} at={both + 12} size={30} w={250} color={AMBER.ink} border={AMBER.stroke}>P fixed</Chip>
				<HandTag x={1110} y={910} text="voltage for current" at={exch} size={36} color={AMBER.ink} />
			</div> : null}
		</>
	);
};

// ---------- 7. the load decides the current ----------
const LD = {cx: 760, cy: 500, s: 440, t: 86, ax: 390, lx: 1150};
const LDG = xcGeom(LD.cx, LD.cy, LD.s, LD.t, LD.ax, LD.lx);
export const S07: React.FC = () => {
	const id = 'load-sets-current';
	const f = useCurrentFrame();
	const who = cue(id, 'So who decides how big the currents are'), nothing = cue(id, 'With nothing connected'), bal = cue(id, 'balances the supply'), connect = cue(id, 'Now connect the lamp'), opposes = cue(id, 'its field opposes the changing flux'), keep = cue(id, 'To keep the flux changing'), extra = cue(id, 'the primary draws extra current'), bigger = cue(id, 'A bigger load draws more current'), more = cap(id, cue(id, 'so the primary draws more'));
	const closed = f >= connect + 10;
	const two = f >= bigger + 10;
	const Is = !closed ? 0 : two ? TWO.secondaryCurrent : HOOK.secondaryCurrent;
	const Ip = !closed ? 0.06 : two ? TWO.primaryCurrent : HOOK.primaryCurrent;
	const frozen = f >= opposes && f < bigger;
	const tnow = frozen ? 0.36 : ((f / 120) % 1);
	const e = LDG.ends;
	const topY = LD.cy - LDG.m;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<XCircuit {...LD} np={4} ns={8} phase={frozen ? opposes * 3 : f * 3} sw={1 - prog(f, connect, 12)} lit={prog(f, connect + 10, 10)} lamp2={prog(f, bigger, 14)} flowP={1} phaseP={swing(f, Ip)} flowS={closed ? 1 : 0} phaseS={swing(f, Is)} pulseP={f >= bal && f < bal + 40 ? Math.sin(Math.PI * (f - bal) / 40) : 0} />
				<ACTrace x={480} y={815} w={900} h={110} cycles={3} now={tnow} color={FLUX} />
				{f >= opposes && f < bigger ? <Arrow2 from={[LD.cx + 120, topY]} to={[LD.cx - 120, topY]} color={ROSE.stroke} width={10} head={28} opacity={prog(f, opposes + 8, 10)} /> : null}
				{f >= extra && f < bigger ? <Arrow2 from={[LD.cx - 120, topY + 28]} to={[LD.cx + 120, topY + 28]} color={ORANGE.stroke} width={10} head={28} opacity={prog(f, extra, 10)} /> : null}
				{f >= more ? <path d={`M${LD.lx + 60},${e.sBot[1] + 60} C${LD.lx - 200},${e.sBot[1] + 150} ${LD.ax + 200},${e.pBot[1] + 150} ${LD.ax + 30},${e.pBot[1] + 50}`} fill="none" stroke={ORANGE.stroke} strokeWidth={5} opacity={prog(f, more, 14)} /> : null}
			</FrameSvg>
			<Lbl x={LD.cx - LDG.m} y={LD.cy + LDG.o + 40} color={NAVY.ink} size={30} anchor="middle">N<Sub>p</Sub> = 100</Lbl>
			<Lbl x={LD.cx + LDG.m} y={LD.cy + LDG.o + 40} color={NAVY.ink} size={30} anchor="middle">N<Sub>s</Sub> = 200</Lbl>
			<Lbl x={LD.ax - 44} y={LD.cy + 12} color={ORANGE.ink} size={36} anchor="end">V<Sub>p</Sub> = 10 V</Lbl>
			<Lbl x={466} y={880} color={FLUX} size={28} anchor="end">flux in the core</Lbl>
			<Chip x={96} y={170} at={who} size={30} w={560}>who sets the current? the load</Chip>
			<HandTag x={LD.ax - 330} y={LD.cy + 110} text="no load: primary current ≈ 0 (ideal)" at={nothing + 10} out={connect} size={32} color={ORANGE.ink} />
			<Lbl x={LD.cx} y={LD.cy + 8} at={bal - 10} out={connect + 20} color={ORANGE.ink} size={30} anchor="middle">N<Sub>p</Sub> ΔΦ/Δt</Lbl>
			<HandTag x={LD.ax - 330} y={LD.cy + 160} text="balanced" at={bal + 6} out={connect + 20} size={36} color={ORANGE.ink} />
			<HandTag x={480 + 0.36 * 900 - 40} y={800} text="flux rising" at={opposes} out={bigger} size={32} color={FLUX} anchor="end" />
			<HandTag x={LD.cx + 140} y={250} text="secondary's field: opposes the change (Lenz)" at={opposes + 10} out={bigger} size={32} color={ROSE.ink} anchor="middle" />
			<HandTag x={LD.cx} y={topY + 90} text="primary's extra field" at={extra + 8} out={bigger} size={32} color={ORANGE.ink} anchor="middle" />
			<Chip x={1420} y={560} at={extra + 16} out={bigger} size={26} w={440} color={INK_SOFT}>drawn at one rising-flux instant; both arrows reverse each half-cycle</Chip>
			<HandTag x={1420} y={440} text="flux change kept:" at={keep} size={32} color={FLUX} />
			<HandTag x={1420} y={485} text="set by the supply voltage" at={keep + 6} size={32} color={FLUX} />
			<Readouts x={1420} y={200} w={420} size={48} at={nothing} rows={[
				{label: <>I<Sub>s</Sub></>, value: fx(Is, Is ? (Is < 1 ? 2 : 1) : 0), unit: 'A', color: ROSE.ink},
				{label: <>I<Sub>p</Sub></>, value: closed ? fx(Ip, 1) : '≈ 0', unit: 'A', color: ORANGE.ink},
			]} />
			<HandTag x={760} y={720} text="load draws current → primary supplies it" at={more + 6} size={32} color={ORANGE.ink} anchor="middle" />
		</>
	);
};

// ---------- 8 and 9. worked example ----------
const WX = {cx: 1500, cy: 400, s: 300, t: 58, ax: 1270, lx: 1730};
const WXG = xcGeom(WX.cx, WX.cy, WX.s, WX.t, WX.ax, WX.lx);
const WorkedHead: React.FC<{f: number; taskRing?: number}> = ({f, taskRing = 1e9}) => (
	<>
		<Strip x={96} y={166} at={-30} size={36}>Find V<Sub>s</Sub>, I<Sub>s</Sub> and the power delivered.</Strip>
		<Strip x={96} y={232} at={-30} size={40} border={INK}><Rule1 />;   <Rule2 /></Strip>
		<Givens x={96} y={340} w={880} at={-30} size={32} lines={[<>turns: N<Sub>p</Sub> = 1200, N<Sub>s</Sub> = 60</>, <span key="p" style={{color: ORANGE.ink}}>primary: V<Sub>p</Sub> = 230 V AC, I<Sub>p</Sub> = 0.50 A</span>]} />
		<Chip x={1000} y={356} at={-30} size={30} w={140}>ideal</Chip>
		<FrameSvg>
			<XCircuit {...WX} np={10} ns={3} phase={f * 3} lit={1} lampR={22} srcR={26} />
			<Ring cx={500} cy={192} rx={440} ry={36} at={taskRing} color={NAVY.stroke} />
		</FrameSvg>
		<Lbl x={WX.cx - WXG.m} y={WX.cy - WXG.o - 18} color={NAVY.ink} size={28} anchor="middle">1200 turns</Lbl>
		<Lbl x={WX.cx + WXG.m} y={WX.cy - WXG.o - 18} color={NAVY.ink} size={28} anchor="middle">60 turns</Lbl>
		<Lbl x={WX.ax - 34} y={WX.cy + 10} color={ORANGE.ink} size={28} anchor="end">230 V</Lbl>
		<Lbl x={WX.cx} y={WX.cy + WXG.o + 40} color={INK} size={26} anchor="middle">not every turn drawn</Lbl>
	</>
);
export const S08: React.FC = () => {
	const id = 'worked-voltage';
	const f = useCurrentFrame();
	const full = cue(id, "Let's do a full example"), find = cue(id, 'Find the secondary voltage'), start = cue(id, 'Start with the voltage'), rearr = cue(id, 'rearrange for V s'), volts = cue(id, 'eleven point five volts'), twenty = cap(id, cue(id, "That's a twenty to one step-down"));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{opacity: prog(f, full, 16)}}><WorkedHead f={f} taskRing={find} /></div>
			<Chip x={96} y={480} at={start} size={30} w={300} color={ROSE.ink} border={ROSE.stroke}>stage 1: V<Sub>s</Sub></Chip>
			<Row at={rearr} size={52} style={{position: 'absolute', left: 96, top: 560}}>V<Sub>s</Sub> = V<Sub>p</Sub> × <Frac n={<>N<Sub>s</Sub></>} d={<>N<Sub>p</Sub></>} /></Row>
			<Row at={volts - 20} size={52} style={{position: 'absolute', left: 96, top: 680}}>V<Sub>s</Sub> = 230 × <Frac n="60" d="1200" /> = <AnswerBox at={volts}><span style={{whiteSpace: 'nowrap'}}>{fx(WE.Vs, 1)} V</span></AnswerBox></Row>
			<HandTag x={1000} y={700} text="20 : 1 step-down" at={twenty} size={38} color={ROSE.ink} />
			<CrossedChip x={96} y={830} at={twenty + 6} crossAt={twenty + 26} size={32} caption="step-down: must be less than 230 V">V<Sub>s</Sub> = 230 × 1200/60 = {fx(WE.slip, 0)} V</CrossedChip>
		</>
	);
};
export const S09: React.FC = () => {
	const id = 'worked-current-power';
	const f = useCurrentFrame();
	const now = cue(id, 'Now the current'), eq = cue(id, 'so I s equals V p I p over V s'), amps = cue(id, 'which is ten amps'), check = cue(id, 'Check it with the turns ratio'), went = cue(id, 'The voltage went down twenty times'), again = cue(id, 'ten amps again'), pow = cue(id, 'And the power is eleven point five times ten'), same = cap(id, cue(id, 'the same as two hundred and thirty'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<WorkedHead f={f} />
			<Row at={-30} size={36} style={{position: 'absolute', left: 1000, top: 600}}>stage 1: <AnswerBox at={-30}><span style={{whiteSpace: 'nowrap'}}>V<Sub>s</Sub> = {fx(WE.Vs, 1)} V</span></AnswerBox></Row>
			<Chip x={96} y={470} at={now} size={30} w={330} color={ROSE.ink} border={ROSE.stroke}>stage 2: I<Sub>s</Sub>, then P</Chip>
			<Row at={eq} ageAt={pow} size={52} oldSize={38} style={{position: 'absolute', left: 96, top: 540}}>I<Sub>s</Sub> = <Frac n={<>V<Sub>p</Sub>I<Sub>p</Sub></>} d={<>V<Sub>s</Sub></>} /> = <Frac n="230 × 0.50" d="11.5" /> = <AnswerBox at={amps}><span style={{whiteSpace: 'nowrap'}}>{fx(WE.Is, 0)} A</span></AnswerBox></Row>
			<Row at={check} ageAt={pow} size={40} oldSize={34} style={{position: 'absolute', left: 96, top: 680}}>check: I<Sub>s</Sub> = I<Sub>p</Sub> × N<Sub>p</Sub>/N<Sub>s</Sub> = 0.50 × {fx(WE.ratio, 0)} = {fx(WE.IsCheck, 0)} A {f >= again ? '✓' : ''}</Row>
			<HandTag x={1000} y={740} text="volts ÷ 20, amps × 20" at={went} size={36} color={ROSE.ink} />
			<Row at={pow} size={40} style={{position: 'absolute', left: 96, top: 800}}><span style={{color: ROSE.ink}}>P<Sub>out</Sub></span> = V<Sub>s</Sub>I<Sub>s</Sub> = 11.5 × 10 = <AnswerBox at={same}><span style={{whiteSpace: 'nowrap'}}>{fx(WE.Pout, 0)} W</span></AnswerBox></Row>
			<Row at={same} size={40} style={{position: 'absolute', left: 96, top: 870}}><span style={{color: ORANGE.ink}}>P<Sub>in</Sub></span> = V<Sub>p</Sub>I<Sub>p</Sub> = 230 × 0.50 = <AnswerBox at={same + 8}><span style={{whiteSpace: 'nowrap'}}>{fx(WE.Pin, 0)} W</span></AnswerBox></Row>
			<FrameSvg><PowerBars x={1560} base={880} h={180} w={100} gap={60} fin={0.9} fout={0.9} vin="115 W" vout="115 W" size={30} opacity={prog(f, pow, 14)} /></FrameSvg>
			<HandTag x={1690} y={630} text="ideal: 115 W in, 115 W out" at={same + 10} size={32} color={AMBER.ink} anchor="middle" />
		</>
	);
};

// ---------- 10. a way to remember ----------
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const here = cue(id, "Here's a way to remember it"), volts = cue(id, 'Volts follow the turns'), curr = cue(id, 'Current goes the other way'), out = cap(id, cue(id, 'matches the power out'));
	const pulse = (a: number) => (f >= a && f < a + 30 ? Math.sin((Math.PI * (f - a)) / 30) : 0);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, here - 10, 14)}>
					<MiniXf x={560} y={300} k={1.05} np={3} ns={6} phase={f * 3} pColor={ORANGE.stroke} sColor={ROSE.stroke} />
					<MiniXf x={1360} y={300} k={1.05} np={6} ns={3} phase={f * 3} pColor={ORANGE.stroke} sColor={ROSE.stroke} />
				</g>
			</FrameSvg>
			<Lbl x={560} y={468} at={here} color={INK} size={32} anchor="middle">step-up</Lbl>
			<Lbl x={1360} y={468} at={here} color={INK} size={32} anchor="middle">step-down</Lbl>
			<Chip x={380} y={500} at={volts} size={32 + 4 * pulse(volts)} w={380} color={ROSE.ink} border={ROSE.stroke}>more turns → more V</Chip>
			<Chip x={1180} y={500} at={volts + 6} size={32 + 4 * pulse(volts + 6)} w={380} color={ROSE.ink} border={ROSE.stroke}>fewer turns → less V</Chip>
			<Chip x={380} y={566} at={curr} size={32 + 4 * pulse(curr)} w={380} color={ORANGE.ink} border={ORANGE.stroke}>more turns → less I</Chip>
			<Chip x={1180} y={566} at={curr + 6} size={32 + 4 * pulse(curr + 6)} w={380} color={ORANGE.ink} border={ORANGE.stroke}>fewer turns → more I</Chip>
			<div style={{position: 'absolute', left: 460, top: 640, width: 1000}}>
				<MemoryCard at={out} main={<><span style={{color: ROSE.ink}}>Volts follow the turns.</span> <span style={{color: ORANGE.ink}}>Current goes the other way.</span></>} sub={<>Check: P<Sub>in</Sub> = P<Sub>out</Sub> (ideal)</>} />
			</div>
		</>
	);
};
