// Scenes 6 to 10: a heavier load (the motor lifting a hanger over a pulley; the heavier stack drops on, the flywheel
// slows to half speed, the back emf falls, the current and the motor's torque rise until they match the load), where
// the energy goes (the working layout and the power bars), jam the shaft (the painted block against the flywheel; 6.0 A,
// 72 W, all heat), starting big motors (the painted rheostat in series, stepped out as the back emf grows) and the
// memory card over two small benches.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {MemoryCard} from '../../shared/scenes';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {DMM, Display, Plate, dmmPts} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {HobbyMotor, hobbyPts} from '../../physics/electromagnetism/motor';
import {BACK_FULL, FULL, HALF, HEAD, HEAD_SIZE, JAM, LEDGER, R, R_START, STARTR, V, cap, cue, iAt, loopCurrent} from './common';
import {AMBER, Bench, CardRect, EqCircuit, GREY, HEAT, IGraph, ITicks, JamBlock, Lbl, LoadBench, NAVY, ORANGE, PBar, ROSE, Ring, ShareBar, Strip, TorqueArc, flyGlow, fx, loadGeom, turned} from './parts';

const Meter: React.FC<{p: Place; text: string; opacity?: number}> = ({p, text, opacity = 1}) => { const d = dmmPts(p); return <g opacity={opacity}><Plate spec={DMM} p={p} /><Display box={d.display} text={text} /></g>; };

// ---------- 6. a heavier load ----------
const G6 = {x: 1440, y: 230, w: 360, h: 220, x0: 0, x1: 1, ymin: 0, ymax: 7};
export const S06: React.FC = () => {
	const id = 'heavier-load';
	const f = useCurrentFrame();
	const put = cue(id, 'Now put a heavier load on the shaft'), slows = cue(id, 'so the motor slows down'), half = cue(id, 'Suppose it drops to half speed'), five = cue(id, 'The back emf is now only five volts'), a35 = cue(id, 'three point five amps'), more = cue(id, 'More current means more turning force'), settles = cue(id, 'So the motor settles at a new'), load = cue(id, 'matches the load'), exact = cap(id, cue(id, 'exactly when it needs more torque'));
	const kAt = (g: number) => kf(g, [[0, 1], [slows, 1], [half + 20, 0.5]]);
	const k = kAt(f);
	const I = iAt(k);
	const deg = turned(f, g => 14 * kAt(g));
	const lg = loadGeom();
	const loadLen = kf(f, [[0, 30], [put, 30], [put + 20, 105]]);
	const motorLen = 30 * I;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LoadBench deg={deg} heavy={prog(f, put, 18)} drop={prog(f, put, 18)} />
				<TorqueArc c={lg.m.fly} r={lg.m.flyR + 26} len={loadLen} start={120} color={AMBER.stroke} dash="16 8" />
				<TorqueArc c={lg.m.fly} r={lg.m.flyR + 58} len={-motorLen} start={240} color={AMBER.stroke} opacity={prog(f, more - 20, 12)} />
				<IGraph b={G6} k={k} size={26} xLabel="ω" />
				<ITicks b={G6} ticks={[0, 2, 4, 6]} size={26} />
				<ShareBar x={1440} y={560} h={260} w={80} total={V} back={BACK_FULL * k} size={28} />
				<Meter p={{x: 700, y: 560, w: 140}} text={`${fx(I, 1)} A`} />
			</FrameSvg>
			<HandTag x={lg.m.fly[0] - 100} y={lg.m.fly[1] - lg.m.flyR - 70} text="load torque" at={put + 10} out={more} size={32} color={AMBER.ink} />
			<HandTag x={900} y={760} text="heavier" at={put + 10} out={slows + 30} size={34} color={INK} />
			<HandTag x={lg.m.fly[0] - 140} y={lg.m.fly[1] + lg.m.flyR + 100} text="torque ∝ I" at={more + 10} out={load} size={34} color={AMBER.ink} />
			<HandTag x={lg.m.fly[0] - 140} y={lg.m.fly[1] + lg.m.flyR + 100} text="equal: new steady speed" at={load + 6} size={34} color={AMBER.ink} />
			<div style={{position: 'absolute', left: 96, top: 840, width: 1300}}>
				<Row at={a35 - 30} size={48}>I = (12 − 5) / 2.0 = <AnswerBox at={a35}><span style={{whiteSpace: 'nowrap'}}>{fx(HALF.I, 1)} A</span></AnswerBox></Row>
			</div>
			<HandTag x={96} y={790} text="half speed: ε_back = 5 V, IR = 7 V" at={five} size={34} color={ROSE.ink} />
			<Chip x={96} y={176} at={exact} size={30} w={1300}>load ↑ → speed ↓ → ε_back ↓ → I ↑ → torque ↑</Chip>
			<Lbl x={96} y={210} at={settles} out={exact} color={INK} size={30}>slower, so less back emf, so more current</Lbl>
		</>
	);
};

// ---------- 7. where the energy goes ----------
const BAR = {base: 860, k: 520 / 12};
export const S07: React.FC = () => {
	const id = 'power-ledger';
	const f = useCurrentFrame();
	const mult = cue(id, 'multiply every term by the current'), splits = cue(id, 'splits into two parts'), heatC = cue(id, 'I squared R is heat in the coil'), work = cue(id, 'converted into mechanical work'), twelve = cue(id, 'twelve watts'), two = cue(id, 'two watts'), ten = cue(id, 'ten watts'), pct = cue(id, 'eighty three percent'), too = cap(id, cue(id, 'takes some too'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={166} at={-30} size={34} w={1000}>Where does the supplied power go (full speed)?</Strip>
			<Strip x={96} y={246} at={-30} size={40} w={1000}>{f < mult ? <>V = ε_back + IR</> : <>× I:&nbsp; VI = <span style={{color: HEAT}}>I²R</span> + <span style={{color: AMBER.ink}}>ε_back I</span></>}</Strip>
			<div style={{position: 'absolute', left: 96, top: 350, width: 980, background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 22px 8px'}}>
				<Row at={-30} size={34}><span style={{color: NAVY.ink}}>V = 12 V</span>;&nbsp; <span style={{color: ORANGE.ink}}>I = 1.0 A</span>;&nbsp; R = 2.0 Ω;&nbsp; <span style={{color: ROSE.ink}}>ε_back = 10 V</span></Row>
			</div>
			<Lbl x={310} y={330} at={heatC} color={HEAT} size={28}>I²R: heat in the coil</Lbl>
			<Lbl x={620} y={330} at={work} color={AMBER.ink} size={28}>ε_back I: converted to work</Lbl>
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 12, width: 1000}}>
				<Row at={twelve - 20} size={46}><span style={{color: ORANGE.ink}}>VI = 12 × 1.0 = {fx(LEDGER.pin, 0)} W</span></Row>
				<Row at={two - 20} size={46}><span style={{color: HEAT}}>I²R = 1.0² × 2.0 = {fx(LEDGER.heat, 1)} W</span></Row>
				<Row at={ten - 20} size={48}><span style={{color: AMBER.ink}}>ε_back I = 10 × 1.0 = </span><AnswerBox at={ten}><span style={{whiteSpace: 'nowrap'}}>{fx(LEDGER.conv, 0)} W</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<line x1={1120} y1={BAR.base} x2={1800} y2={BAR.base} stroke={INK} strokeWidth={4} />
				<PBar x={1150} base={BAR.base} w={150} h={LEDGER.pin * BAR.k * prog(f, splits - 10, 20)} color={ORANGE.stroke} label="in: VI" value={f >= twelve ? `${fx(LEDGER.pin, 0)} W` : 'VI'} opacity={prog(f, splits - 10, 12)} />
				<PBar x={1360} base={BAR.base} w={150} h={LEDGER.heat * BAR.k * prog(f, heatC, 16)} color={HEAT} label="heat" value={f >= two ? `${fx(LEDGER.heat, 1)} W` : 'I²R'} opacity={prog(f, heatC, 10)} />
				<PBar x={1570} base={BAR.base} w={150} h={LEDGER.conv * BAR.k * prog(f, work, 16)} color={AMBER.stroke} label="converted" value={f >= ten ? `${fx(LEDGER.conv, 0)} W` : 'ε_back I'} opacity={prog(f, work, 10)} />
				<g opacity={prog(f, too, 12)}><rect x={1736} y={BAR.base - LEDGER.conv * BAR.k} width={26} height={60} fill={GREY.stroke} rx={4} /><Arrow2 from={[1722, BAR.base - LEDGER.conv * BAR.k + 20]} to={[1736, BAR.base - LEDGER.conv * BAR.k + 20]} color={GREY.stroke} width={4} head={12} /></g>
				<Arrow2 from={[1300, BAR.base - 300]} to={[1360, BAR.base - 80]} color={INK} width={4} head={16} opacity={prog(f, two, 12)} />
				<Arrow2 from={[1300, BAR.base - 400]} to={[1570, BAR.base - 460]} color={INK} width={4} head={16} opacity={prog(f, ten, 12)} />
			</FrameSvg>
			<HandTag x={1360} y={300} text="10 / 12 ≈ 83% converted" at={pct} size={36} color={AMBER.ink} />
			<CrossedChip x={96} y={760} at={pct + 10} crossAt={pct + 40} size={32} caption="2.0 W heats the coil">all 12 W becomes work</CrossedChip>
			<Lbl x={1750} y={BAR.base - LEDGER.conv * BAR.k - 70} at={too} color={GREY.ink} size={28} anchor="end">friction</Lbl>
			<HandTag x={1560} y={240} text="shaft output < 10 W" at={too + 6} size={32} color={GREY.ink} />
			<Lbl x={96} y={905} at={too} color={INK} size={36}>12 W = 2.0 W + 10 W ✓</Lbl>
		</>
	);
};

// ---------- 8. jam the shaft ----------
const B8 = {lvs: {x: 80, y: 660, w: 320} as Place, sw: {x: 440, y: 700, w: 230} as Place, dmm: {x: 720, y: 480, w: 190} as Place, motor: {x: 980, y: 520, w: 380} as Place};
export const S08: React.FC = () => {
	const id = 'jammed';
	const f = useCurrentFrame();
	const jam = cue(id, 'Now jam the shaft'), nospin = cue(id, 'No spin, no back emf'), six = cue(id, 'six point zero amps'), w72 = cue(id, 'seventy two watts'), x36 = cue(id, 'thirty six times'), heat = cue(id, 'becomes heat'), secs = cap(id, cue(id, 'within seconds'));
	const kAt = (g: number) => kf(g, [[0, 1], [jam + 10, 1], [jam + 24, 0]]);
	const k = kAt(f);
	const I = iAt(k);
	const deg = turned(f, g => 14 * kAt(g));
	const m = hobbyPts(B8.motor);
	const glow = flyGlow(B8.motor);
	const H = {base: 900, k: 420 / 72};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Bench b={B8} deg={deg} reading={`${fx(I, 1)} A`} I={I} dots={1} phase={f * 3} />
				<JamBlock c={m.fly} r={m.flyR} slide={prog(f, jam, 16)} w={200} />
				{f >= secs ? <ellipse cx={glow.cx} cy={glow.cy} rx={glow.rx} ry={glow.ry} fill={HEAT} opacity={0.35 * prog(f, secs, 14)} /> : null}
				<Ring cx={glow.cx} cy={glow.cy} rx={glow.rx + 30} ry={glow.ry + 26} at={secs + 8} color={HEAT} />
				<ShareBar x={1060} y={200} h={220} w={80} total={V} back={BACK_FULL * k} size={28} />
				<PBar x={1480} base={H.base} w={110} h={LEDGER.heat * H.k} color={HEAT} label="running" value="2.0 W" opacity={prog(f, w72, 10)} />
				<PBar x={1640} base={H.base} w={110} h={JAM.heat * H.k * prog(f, w72, 20)} color={HEAT} label="jammed" value="72 W" opacity={prog(f, w72, 10)} />
			</FrameSvg>
			<HandTag x={m.fly[0] - 60} y={m.fly[1] + m.flyR + 60} text="stalled: ω = 0" at={jam + 20} size={34} color={INK} />
			<div style={{position: 'absolute', left: 96, top: 200, display: 'flex', flexDirection: 'column', gap: 10, width: 1300}}>
				<Row at={nospin} size={40}><span style={{color: ROSE.ink}}>no spin: ε_back = 0</span></Row>
				<Row at={six - 30} ageAt={w72} size={48} oldSize={38}>I = 12 / 2.0 = <AnswerBox at={six}><span style={{whiteSpace: 'nowrap'}}>{fx(JAM.I, 1)} A</span></AnswerBox></Row>
				<Row at={w72 - 30} size={48}><span style={{color: HEAT}}>I²R = 6.0² × 2.0 = </span><AnswerBox at={w72}><span style={{whiteSpace: 'nowrap'}}>{fx(JAM.heat, 0)} W</span></AnswerBox></Row>
			</div>
			<HandTag x={1230} y={440} text={`72 / 2.0 = ${fx(JAM.ratio, 0)} ×`} at={x36} size={40} color={HEAT} />
			<Chip x={96} y={460} at={heat} size={32} w={700} color={HEAT} border={HEAT}>shaft does no work: all input → heat</Chip>
			<HandTag x={glow.cx - 120} y={glow.cy + glow.ry + 70} text="windings overheat" at={secs + 10} size={36} color={HEAT} />
		</>
	);
};

// ---------- 9. starting big motors safely ----------
const B9 = {x: 200, y: 300, w: 520, h: 300};
export const S09: React.FC = () => {
	const id = 'starting-resistor';
	const f = useCurrentFrame();
	const big = cue(id, 'Big motors have the same problem'), added = cue(id, 'So a starting resistor is added in series'), adding = cue(id, 'adding four ohms'), two = cue(id, 'two point zero amps'), step = cue(id, 'step by step'), supply = cap(id, cue(id, 'runs on the full supply'));
	const slide = kf(f, [[0, 1], [step, 1], [step + 6, 0.67], [step + 30, 0.67], [step + 36, 0.33], [step + 60, 0.33], [step + 66, 0]], false);
	const k = kf(f, [[0, 0], [step, 0], [step + 66, 0.9], [supply, 1]]);
	const I = loopCurrent({V, R, back: BACK_FULL * k, start: R_START * slide});
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<EqCircuit b={B9} emf={1} I={I} phase={f * 3} rheo={prog(f, added, 14)} slide={slide} bypass={prog(f, supply, 20)} vLabel="12 V" rLabel="2.0 Ω" eLabel={`ε_back = ${fx(BACK_FULL * k, 0)} V`} size={32} />
			</FrameSvg>
			<Chip x={96} y={170} at={big} size={30} w={900}>big motors: tiny winding resistance, huge starting current</Chip>
			<Chip x={96} y={840} at={added} size={28} w={940} color={NAVY.ink} border={NAVY.stroke}>Starting resistor: “A resistor placed in series with a motor at startup to limit the initial surge current.”</Chip>
			<Lbl x={B9.x + B9.w * 0.45} y={B9.y + B9.h + 230} at={added + 10} color={NAVY.ink} size={32} anchor="middle">R_start</Lbl>
			<div style={{position: 'absolute', left: 1060, top: 300, display: 'flex', flexDirection: 'column', gap: 16, width: 820}}>
				<Row at={adding - 20} size={44}>I_start = V / (R + R_start)</Row>
				<Row at={two - 30} size={44}>I_start = 12 / (2.0 + 4.0) = <AnswerBox at={two}><span style={{whiteSpace: 'nowrap'}}>{fx(STARTR.I, 1)} A</span></AnswerBox></Row>
				<Row at={two + 10} size={40}>without it: {fx(loopCurrent({V, R, back: 0}), 1)} A</Row>
			</div>
			<HandTag x={1680} y={480} text="÷ 3" at={two + 20} size={48} color={ORANGE.ink} />
			<Lbl x={1080} y={620} at={step} color={ORANGE.ink} size={44}>I = {fx(I, 1)} A</Lbl>
			<HandTag x={1080} y={700} text="switched out step by step" at={step + 6} out={supply} size={34} color={NAVY.ink} />
			<HandTag x={1080} y={700} text="bypassed at full speed" at={supply + 6} size={34} color={GREY.ink} />
			<Chip x={1080} y={760} at={supply + 10} size={28} w={760} color={GREY.ink} border={GREY.stroke}>modern controllers: ramp V up from 0 electronically</Chip>
		</>
	);
};

// ---------- 10. a way to remember ----------
const MB = {l: {x: 150, y: 600, w: 360} as Place, ld: {x: 640, y: 560, w: 150} as Place, r: {x: 1020, y: 600, w: 360} as Place, rd: {x: 1510, y: 560, w: 150} as Place};
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const nospin = cue(id, 'No spin, no push back'), start = cue(id, 'Starting or stalled'), back = cap(id, cue(id, 'holds the current back'));
	const ml = hobbyPts(MB.l), mr = hobbyPts(MB.r);
	const pulseL = f >= nospin && f < nospin + 30 ? 1 : 0, pulseR = f >= nospin + 30 && f < nospin + 60 ? 1 : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardRect x={110} y={500} w={760} h={380} opacity={1} />
				<CardRect x={980} y={500} w={760} h={380} opacity={1} />
				{pulseL ? <rect x={110} y={500} width={760} height={380} rx={16} fill="none" stroke={ROSE.stroke} strokeWidth={6} /> : null}
				{pulseR ? <rect x={980} y={500} width={760} height={380} rx={16} fill="none" stroke={ORANGE.stroke} strokeWidth={6} /> : null}
				<HobbyMotor p={MB.l} deg={f * 14} />
				<Meter p={MB.ld} text={`${fx(FULL.I, 1)} A`} />
				<Arrow2 from={[ml.fly[0] - 30, ml.fly[1] + ml.flyR + 30]} to={[ml.tabLo[0], ml.fly[1] + ml.flyR + 30]} color={ROSE.stroke} width={8} head={24} />
				<HobbyMotor p={MB.r} deg={0} />
				<JamBlock c={mr.fly} r={mr.flyR} w={170} />
				<Meter p={MB.rd} text={`${fx(JAM.I, 1)} A`} />
				<Ring cx={MB.rd.x + 75} cy={MB.rd.y + 60} rx={90} ry={50} at={back + 4} color={ORANGE.stroke} />
			</FrameSvg>
			<Lbl x={ml.tabLo[0] + 10} y={ml.fly[1] + ml.flyR + 76} at={0} color={ROSE.ink} size={30}>ε_back</Lbl>
			<Lbl x={490} y={905} at={0} color={INK} size={30} anchor="middle">spinning</Lbl>
			<Lbl x={1360} y={905} at={0} color={INK} size={30} anchor="middle">starting or stalled</Lbl>
			<div style={{position: 'absolute', left: 460, top: 168, width: 1000}}>
				<MemoryCard at={start} main={<><span style={{color: ROSE.ink}}>No spin, no push back.</span></>} sub={<>I = (V − ε_back) / R</>} />
			</div>
			<HandTag x={1420} y={465} text="only R holds I back" at={back} size={34} color={ORANGE.ink} />
		</>
	);
};
