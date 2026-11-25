// Scenes 1 to 5: the hook (last time's six-coil sketch redrawn as a four-pole ring; the field and rotor speed
// readouts; the rotor's mark slipping behind), the rotating field (twelve coils in three groups, their currents
// peaking in turn on three graphs, one group alone pulsing in place, the chasing-lights picture), the painted cage
// rotor (bars, end rings, a closed loop), the field sweeping past the rotor at rest (sliding field lines, induced bar
// currents) and the force that drags the rotor along (a close-up of two bars under the moving poles, the whole rotor
// as an inset, last time's magnet leaving a coil).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {Chip, CrossedChip} from '../../physics/projectile/board';
import {BARMAG, COIL, Plate, placeOf} from '../../physics/electromagnetism/bench';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {EndOnCage, FnGraph, StatorRing, fnMap} from '../../physics/electromagnetism/motor';
import {ArcArrow, ChasingLights, phaseI} from '../../physics/electromagnetism/induction-motor';
import {DeskFan} from '../../physics/electromagnetism/eddy';
import {cue as cue18, dur as dur18} from '../phys-y12-m6-v18/common';
import {M6V18FinalFrame} from '../phys-y12-m6-v18/s3';
import {FIELD_RATE, HEAD, HEAD_SIZE, NS, NS_V18, POLES, POLES_V18, HZ, ROTOR, cap, cue, dur, holdIf, rotorRate} from './common';
import {AMBER, CAGE_ROTOR, CardRect, FLUX, FieldArrow, GREY, Lbl, NAVY, ORANGE, ROSE, Readout, Rotor, Stator, Torque, turned} from './parts';

type Pt = [number, number];
const rad = (d: number) => (d * Math.PI) / 180;
const ring = (cx: number, cy: number, r: number, a: number): Pt => [cx + r * Math.cos(rad(a)), cy - r * Math.sin(rad(a))];

// ---------- continuity with last time's final frame ----------
const V18_END = dur18('handoff') - 1;
/** Last time's field arrow and rotor mark at its final frame (v18 handoff: 90 + 2.2 per frame, rotor 26 degrees behind). */
const FIELD0 = 90 + 2.2 * (V18_END - cue18('handoff', 'what if the field itself turns'));
const ROT0 = FIELD0 - 26;
const RC = {cx: 1180, cy: 560, r: 240};
/** Field and rotor angles through the hook (the rotor turns at 1425 against the field's 1500). */
const phi1 = (f: number) => FIELD0 + FIELD_RATE * f;
const rho1 = (f: number) => ROT0 + rotorRate(ROTOR) * f;
export const PHI1_END = phi1(dur('hook'));
export const RHO1_END = rho1(dur('hook'));

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const arr = cue(id, "Here's that arrangement"), conn = cue(id, 'nothing is connected'), fans = cue(id, 'desk fans'), watch = cue(id, 'Now watch the speeds'), fifteen = cue(id, 'fifteen hundred revolutions per minute'), fourteen = cue(id, 'fourteen twenty five'), up = cue(id, 'It never catches up') + 18, pred = cue(id, 'Make your prediction'), lag = cue(id, 'It needs the lag'), push = cap(id, cue(id, 'always needs some push'));
	const h = holdIf(id);
	if (f < 1) return <M6V18FinalFrame />;
	const redraw = prog(f, arr + 4, 26);
	const phi = phi1(f), rho = rho1(f);
	const pulse = f >= conn && f < conn + 70 ? Math.sin((Math.PI * (f - conn)) / 35) ** 2 : 0;
	const fanIn = prog(f, fans, 22), fanOut = prog(f, watch, 18);
	const lagO = prog(f, up, 16);
	const d = ((phi - rho) % 360 + 360) % 360;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<StatorRing cx={RC.cx} cy={RC.cy} r={RC.r} n={6} fieldDeg={phi} fieldColor={FLUX} opacity={1 - redraw} />
				<EndOnCage cx={RC.cx} cy={RC.cy} r={120} deg={rho} mark={NAVY.stroke} opacity={1 - redraw} />
				<Stator cx={RC.cx} cy={RC.cy} r={RC.r} phi={phi} arrow={0} opacity={redraw} />
				<Rotor cx={RC.cx} cy={RC.cy} r={120} rho={rho} phi={phi} opacity={redraw} />
				<FieldArrow cx={RC.cx} cy={RC.cy} r={RC.r} phi={phi} opacity={redraw} />
				{pulse > 0 ? <circle cx={RC.cx} cy={RC.cy} r={142} fill="none" stroke={NAVY.stroke} strokeWidth={8} opacity={pulse} /> : null}
				{lagO > 0.001 ? <ArcArrow cx={RC.cx} cy={RC.cy} r={150} a0={rho} a1={rho + Math.max(4, d)} color={AMBER.stroke} width={6} head={18} opacity={lagO} /> : null}
				<Plate spec={CAGE_ROTOR} p={{x: 130, y: 470, w: 420}} />
				<Arrow2 from={[560, 560]} to={[RC.cx - 128, RC.cy]} color={NAVY.stroke} width={6} head={22} />
				{redraw < 0.999 ? <text x={RC.cx + 150} y={RC.cy - 140} textAnchor="middle" opacity={1 - redraw} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 64, fill: NAVY.ink}}>?</text> : null}
				<g transform={`translate(${420 * (1 - fanIn) + 420 * fanOut} 0)`}><DeskFan p={{x: 1500, y: 250, w: 300}} deg={f * 18} opacity={fanIn * (1 - fanOut)} /></g>
				{f >= lag ? <Mark x={620} y={762} at={lag + 4} kind="tick" color={INK} size={34} /> : null}
				{h ? <Countdown start={h.startFrame} end={h.endFrame} x={830} y={770} r={50} ringFrom={h.startFrame - 30} /> : null}
			</FrameSvg>
			<Chip x={96} y={180} at={-60} out={arr + 10} size={30} w={560}>generator: turning → current</Chip>
			<Chip x={96} y={250} at={-60} out={arr + 10} size={30} w={560}>motor: current → turning</Chip>
			<Chip x={96} y={890} at={-60} out={arr + 16} size={30} w={1728} color={INK} border={INK}>Next: why must an induction-motor rotor lag the rotating field?</Chip>
			<Lbl x={RC.cx + 330} y={RC.cy - 280} at={-60} out={arr} color={FLUX} size={30}>turning field</Lbl>
			<Lbl x={340} y={420} at={-60} color={NAVY.ink} size={30} anchor="middle">same rotor, end on</Lbl>
			<HandTag x={1480} y={880} text="no wires to the rotor" at={-60} size={34} color={NAVY.ink} />
			<Lbl x={96} y={196} at={arr + 26} color={GREY.ink} size={30}>{`${POLES} poles: field turns at ${NS} rev/min (${HZ} Hz)`}</Lbl>
			<Lbl x={96} y={244} at={arr + 40} color={GREY.ink} size={30}>{`last time's sketch: ${POLES_V18} poles, ${NS_V18} rev/min`}</Lbl>
			<HandTag x={1480} y={800} text="many desk fans: small induction motors" at={fans + 10} out={watch} size={30} color={GREY.ink} />
			<Readout x={1484} y={340} label="field" value={`${NS} rev/min`} at={fifteen} size={44} />
			<Readout x={1484} y={520} label="rotor" value={`≈ ${ROTOR} rev/min`} at={fourteen} size={44} />
			<HandTag x={1010} y={870} text="always behind" at={up + 6} size={36} color={AMBER.ink} />
			<Chip x={96} y={740} at={pred + 8} size={30} w={520}>it must lag to be pushed at all</Chip>
			<CrossedChip x={96} y={810} at={pred} crossAt={push} size={30} caption="friction needs a push; the lag makes the push">friction just slows it</CrossedChip>
		</>
	);
};

// ---------- 2. a field that turns ----------
const R2 = {cx: 600, cy: 560, r: 260};
const GB = (g: number) => ({x: 1100, y: 290 + 165 * g, w: 680, h: 120, x0: 0, x1: 720, ymin: -1.25, ymax: 1.25});
export const S02: React.FC = () => {
	const id = 'rotating-field';
	const f = useCurrentFrame();
	const stator = cue(id, 'is called the stator'), coils = cue(id, 'coils spaced round the rotor'), step = cue(id, 'out of step'), alone = cue(id, 'One coil alone'), turn = cue(id, 'peaking in turn'), chase = cue(id, 'chase round'), travels = cue(id, 'but the bright spot travels'), freq = cap(id, cue(id, 'set by the supply frequency'));
	const mv = prog(f, 0, 30);
	const cx = RC.cx + (R2.cx - RC.cx) * mv, cy = RC.cy + (R2.cy - RC.cy) * mv, r = RC.r + (R2.r - RC.r) * mv;
	const phi = PHI1_END + 1.2 * f;
	const rho = RHO1_END + 1.14 * f;
	const single = prog(f, alone, 12) * (1 - prog(f, turn, 12));
	const singleMode = f >= alone && f < turn + 6;
	const lights = prog(f, chase, 14) * (1 - prog(f, travels + 40, 16));
	const glow = prog(f, step, 16);
	const I = phaseI(phi);
	const e = (((2 * phi) % 720) + 720) % 720;
	const arcFrom = phi - 1.2 * Math.max(0, f - turn);
	const arcPts: string[] = [];
	if (f >= turn) for (let i = 0; i <= 40; i++) { const p = ring(R2.cx, R2.cy, R2.r * 0.74, arcFrom + ((Math.min(phi, arcFrom + 330) - arcFrom) * i) / 40); arcPts.push(`${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`); }
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Rotor cx={cx} cy={cy} r={120 + 40 * mv} rho={rho} phi={phi} outline opacity={1 - 0.4 * mv} mark={1 - mv} />
				<Stator cx={cx} cy={cy} r={r} phi={phi} mode={singleMode ? 'single' : 'turn'} single={I[0]} glow={glow} groupO={[1, 1 - 0.85 * single, 1 - 0.85 * single]} labels={glow} poles={1 - lights} arrow={(1 - single) * (1 - lights)} opacity={1 - 0.8 * lights} />
				{f >= coils ? <circle cx={R2.cx} cy={R2.cy} r={R2.r + 8} fill="none" stroke={NAVY.stroke} strokeWidth={6} strokeDasharray="18 12" opacity={prog(f, coils, 12) * (1 - prog(f, step, 12))} /> : null}
				<ChasingLights cx={R2.cx} cy={R2.cy} r={R2.r * 0.8} phi={phi} opacity={lights} />
				{arcPts.length ? <path d={arcPts.join(' ')} fill="none" stroke={FLUX} strokeWidth={5} strokeDasharray="4 8" opacity={1 - lights} /> : null}
				{[0, 1, 2].map(g => {
					const b = GB(g), m = fnMap(b);
					const o = glow * (g === 0 ? 1 : 1 - 0.8 * single);
					return <g key={g} opacity={o}>
						<FnGraph b={b} fn={u => Math.cos(rad(u - 120 * g))} color={ORANGE.stroke} width={5} size={26} cursor={e} />
						<circle cx={m.X(e)} cy={m.Y(Math.cos(rad(e - 120 * g)))} r={11} fill={ORANGE.stroke} />
						<text x={b.x - 40} y={b.y + b.h / 2 + 12} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: INK}}>{g + 1}</text>
					</g>;
				})}
			</FrameSvg>
			<Lbl x={96} y={196} at={-60} color={GREY.ink} size={30}>{`${POLES} poles: field turns at ${NS} rev/min (${HZ} Hz)`}</Lbl>
			<Chip x={1100} y={380} at={8} out={step} size={40} w={700} color={INK}>How can a field turn when nothing moves?</Chip>
			<HandTag x={1100} y={560} text="coils spaced round the rotor" at={coils + 6} out={step} size={38} color={NAVY.ink} />
			<Lbl x={R2.cx} y={925} at={stator} color={INK} size={34} anchor="middle">stator: the fixed outer part, with coils</Lbl>
			<Lbl x={1100} y={262} at={step} color={ORANGE.ink} size={30}>current in each group of coils</Lbl>
			<HandTag x={1100} y={850} text="peak in turn" at={step + 20} out={alone} size={36} color={ORANGE.ink} />
			<HandTag x={1100} y={850} text="one coil: pulses in place" at={alone + 8} out={turn} size={36} color={FLUX} />
			<HandTag x={1100} y={850} text="each bulb blinks in place; the bright spot travels" at={chase + 10} out={travels + 40} size={30} color={AMBER.ink} />
			<Chip x={1100} y={830} at={freq} size={30} w={720} color={INK}>rotating field: speed set by the supply frequency</Chip>
		</>
	);
};

// ---------- 3. a rotor connected to nothing ----------
const BARS_Y = [205, 255, 342, 468, 595, 703, 775, 815];
const LOOPS: [number, number][] = [[205, 255], [595, 703], [775, 815]];
export const S03: React.FC = () => {
	const id = 'cage-rotor';
	const f = useCurrentFrame();
	const cage = cue(id, 'often a squirrel cage'), bars = cue(id, 'metal bars'), rings = cue(id, 'metal rings'), nowire = cue(id, 'No wires'), loop = cue(id, 'makes a closed loop'), needs = cap(id, cue(id, 'exactly what induction needs'));
	const k = f / dur(id);
	const p = {x: 560 - 15 * k, y: 330 - 8 * k, w: 1000 + 30 * k};
	const g = placeOf(CAGE_ROTOR, p);
	const barsO = prog(f, bars, 10) * (1 - prog(f, nowire, 14));
	const ringsO = prog(f, rings, 12) * (1 - prog(f, nowire, 14));
	const loopPath = (y0: number, y1: number) => { const a = g.at(420, y0), b = g.at(1060, y0), c = g.at(1066, y1), d = g.at(424, y1); return `M${a[0]},${a[1]} L${b[0]},${b[1]} Q${b[0] + 18},${(b[1] + c[1]) / 2} ${c[0]},${c[1]} L${d[0]},${d[1]} Q${d[0] - 18},${(a[1] + d[1]) / 2} ${a[0]},${a[1]} Z`; };
	const main = (() => { const a = g.at(410, 469), b = g.at(1070, 469), c = g.at(1078, 521), d = g.at(413, 521); return `M${a[0]},${a[1]} L${b[0]},${b[1]} L${c[0]},${c[1]} L${d[0]},${d[1]} Z`; })();
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Plate spec={CAGE_ROTOR} p={p} />
				<g opacity={barsO}>{BARS_Y.map((y, i) => { const a = g.at(470, y), b = g.at(1010, y); return f >= bars + 5 * i ? <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={NAVY.stroke} strokeWidth={10} strokeLinecap="round" opacity={0.55} /> : null; })}</g>
				<g opacity={ringsO}>{[[470, 125], [1102, 120]].map(([x, rx], i) => { const c = g.at(x, 510); return <ellipse key={i} cx={c[0]} cy={c[1]} rx={rx * g.s} ry={318 * g.s} fill="none" stroke={NAVY.stroke} strokeWidth={9} opacity={0.6} />; })}</g>
				{f >= loop ? <DrawPath d={main} at={loop} dur={22} color={ROSE.stroke} width={7} /> : null}
				{f >= needs ? LOOPS.map(([a, b], i) => <DrawPath key={i} d={loopPath(a, b)} at={needs + 4 * i} dur={18} color={ROSE.stroke} width={6} />) : null}
				{f >= needs ? <g opacity={prog(f, needs + 6, 14)}>
					<Arrow2 from={g.at(1250, 760)} to={[1655, 790]} color={NAVY.stroke} width={6} head={22} />
					<Rotor cx={1740} cy={790} r={70} rho={90} phi={60} />
				</g> : null}
			</FrameSvg>
			<Chip x={96} y={166} at={cage} size={28} w={1730} color={GREY.ink} border={GREY.stroke}>Squirrel cage rotor: “A rotor made of conducting bars connected at both ends by rings, resembling a squirrel cage, no external electrical connection required.”</Chip>
			<Lbl x={g.at(740, 160)[0]} y={g.at(740, 160)[1] - 6} at={bars} out={nowire} color={NAVY.ink} size={32} anchor="middle">metal bars</Lbl>
			<Lbl x={g.at(470, 870)[0]} y={g.at(470, 870)[1] + 20} at={rings} out={nowire} color={NAVY.ink} size={32} anchor="middle">end rings</Lbl>
			<CrossedChip x={96} y={400} at={nowire} crossAt={nowire + 8} size={34}>wires</CrossedChip>
			<CrossedChip x={96} y={490} at={nowire + 8} crossAt={nowire + 16} size={34}>brushes</CrossedChip>
			<CrossedChip x={96} y={580} at={nowire + 16} crossAt={nowire + 24} size={34}>split ring</CrossedChip>
			<HandTag x={g.at(1100, 495)[0] + 10} y={g.at(1100, 495)[1] - 70} text="a closed loop" at={loop + 12} size={36} color={ROSE.ink} />
			<Chip x={96} y={880} at={needs + 8} size={30} w={1400} color={ROSE.ink}>closed loops: induction can drive currents round them</Chip>
			<Lbl x={1740} y={900} at={needs + 10} color={NAVY.ink} size={30} anchor="middle">end on</Lbl>
		</>
	);
};

// ---------- 4. the field sweeps past the bars ----------
const R4 = {cx: 620, cy: 560, r: 250, rr: 172};
const RHO4 = 90;
const LOOP4: [number, number] = [0, 3];
export const S04: React.FC = () => {
	const id = 'induced-currents';
	const f = useCurrentFrame();
	const changing = cue(id, 'keeps changing'), emf = cue(id, 'induces an emf'), flow = cue(id, 'so large currents flow'), rot = cap(id, cue(id, 'moving past the rotor'));
	const phi = 20 + 1.3 * f;
	const loopO = prog(f, changing, 12);
	const a = ring(R4.cx, R4.cy, R4.rr * 0.82, RHO4 + 30 * LOOP4[0]), b = ring(R4.cx, R4.cy, R4.rr * 0.82, RHO4 + 30 * LOOP4[1]);
	const mid: Pt = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
	const flux = Math.cos(rad(2 * (phi - (RHO4 + 45))));
	const cur = prog(f, flow, 24) * 1.25;
	const near = Math.round((((phi - RHO4) % 30) + 30) % 30) < 15 ? Math.floor((phi - RHO4) / 30) : Math.ceil((phi - RHO4) / 30);
	const nb = ring(R4.cx, R4.cy, R4.rr * 0.82, RHO4 + 30 * near);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stator cx={R4.cx} cy={R4.cy} r={R4.r} phi={phi} arrow={0} />
				<Rotor cx={R4.cx} cy={R4.cy} r={R4.rr} rho={RHO4} phi={phi} lines={prog(f, 0, 20)} currents={cur} loop={LOOP4} loopO={loopO} />
				<FieldArrow cx={R4.cx} cy={R4.cy} r={R4.r} phi={phi} />
				{loopO > 0.01 ? <text x={mid[0] - 40} y={mid[1] + 14} textAnchor="middle" opacity={loopO} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40 + 14 * Math.abs(flux), fill: FLUX, paintOrder: 'stroke', stroke: '#fffdf8', strokeWidth: 6} as React.CSSProperties}>Φ</text> : null}
				{f >= emf ? <text x={mid[0] + 40} y={mid[1] + 50} textAnchor="middle" opacity={prog(f, emf, 12)} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 48, fill: ROSE.ink, paintOrder: 'stroke', stroke: '#fffdf8', strokeWidth: 6} as React.CSSProperties}>ε</text> : null}
				{f >= flow + 20 ? <circle cx={nb[0]} cy={nb[1]} r={34} fill="none" stroke={ROSE.stroke} strokeWidth={5} strokeDasharray="10 6" /> : null}
			</FrameSvg>
			<Readout x={1100} y={250} label="field" value={`${NS} rev/min`} at={-30} />
			<Readout x={1100} y={410} label="rotor" value="0 rev/min" at={-30} />
			<HandTag x={1100} y={590} text="field slides past" at={changing + 6} size={38} color={FLUX} />
			<Chip x={1100} y={650} at={emf} size={30} w={720} color={ROSE.ink}>Faraday's law: changing Φ through a loop → ε</Chip>
			<Chip x={1100} y={760} at={rot} size={30} w={720} color={ROSE.ink}>induced: made by the field moving past the rotor (Faraday)</Chip>
		</>
	);
};

// ---------- 5. the force drags the rotor along ----------
const CU = {x: 96, y: 200, w: 1200, h: 560};
const PP = 380;
const BARX = [560, 940];
const IN5 = {cx: 1600, cy: 420, r: 150, rr: 100};
export const S05: React.FC = () => {
	const id = 'drag-along';
	const f = useCurrentFrame();
	const motor = cue(id, 'the motor effect'), lenz = cue(id, "Lenz's law tells you"), slide = cue(id, 'sliding past the rotor'), field = cue(id, 'along with the field'), it = cue(id, 'chasing it'), back = cue(id, 'it pulls back'), after = cap(id, cue(id, 'pulled after them'));
	// rotor speed in the inset: at rest, then dragged up towards its working speed (illustrative)
	const spin = (g: number) => rotorRate(ROTOR) * 0.75 * prog(g, field, 40) + rotorRate(ROTOR) * 0.25 * prog(g, it, 60);
	const phi = 60 + 1.6 * f;
	const rho = 30 + turned(f, g => spin(g) * (1.6 / FIELD_RATE));
	const slip = 1 - (spin(f) * (1.6 / FIELD_RATE)) / 1.6;
	// close-up: the camera rides on the rotor; the poles slide past at the slip rate
	const vRel = (g: number) => 0.18 * Math.max(0.4, 1 - (spin(g) * (1.6 / FIELD_RATE)) / 1.6);
	const off = BARX[0] - 60 + (f >= motor ? turned(f - motor, g => vRel(g + motor)) : -0.18 * (motor - f));
	const Bat = (x: number) => Math.cos((Math.PI * (x - off)) / PP);
	const forceO = prog(f, motor, 14);
	const inset = prog(f, back, 14) * (1 - prog(f, after, 14));
	const magX = 210 - 110 * prog(f, back + 6, 40);
	const gap5 = (((phi - rho) % 360) + 360) % 360;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v19-s5clip"><rect x={CU.x} y={CU.y} width={CU.w} height={CU.h} rx={16} /></clipPath></defs>
				<CardRect x={CU.x} y={CU.y} w={CU.w} h={CU.h} />
				<g clipPath="url(#v19-s5clip)">
					{Array.from({length: 9}, (_, i) => {
						const k = i - 3;
						const xc = off + k * PP;
						const north = ((k % 2) + 2) % 2 === 0;
						const inside = xc > CU.x + 30 && xc < CU.x + CU.w - 30;
						return <g key={i}>
							<rect x={xc - PP / 2 + 6} y={CU.y + 20} width={PP - 12} height={80} rx={10} fill={north ? '#e3e7ec' : '#f6f2ea'} stroke={FLUX} strokeWidth={4} />
							{inside ? <text x={xc} y={CU.y + 76} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, fill: FLUX}}>{north ? 'N' : 'S'}</text> : null}
							{[-110, 0, 110].map(dx => <Arrow2 key={dx} from={[xc + dx, north ? CU.y + 120 : CU.y + 340]} to={[xc + dx, north ? CU.y + 340 : CU.y + 120]} color={FLUX} width={4} head={18} />)}
						</g>;
					})}
					<rect x={CU.x} y={CU.y + 360} width={CU.w} height={170} fill="#e4e0d8" stroke="#6f6a62" strokeWidth={5} />
				</g>
				{BARX.map((x, i) => {
					const B = Bat(x);
					const y = CU.y + 445;
					const s = Math.min(1, Math.abs(B) * 1.6);
					return <g key={i}>
						<circle cx={x} cy={y} r={46} fill="#8a8378" stroke="#6f6a62" strokeWidth={4} />
						{s > 0.15 ? <g opacity={s}>{B >= 0 ? <><circle cx={x} cy={y} r={30} fill="#fffdf8" stroke={ROSE.stroke} strokeWidth={5} /><circle cx={x} cy={y} r={11} fill={ROSE.stroke} /></> : <><circle cx={x} cy={y} r={30} fill="#fffdf8" stroke={ROSE.stroke} strokeWidth={5} /><path d={`M${x - 16},${y - 16} L${x + 16},${y + 16} M${x + 16},${y - 16} L${x - 16},${y + 16}`} stroke={ROSE.stroke} strokeWidth={5} /></>}</g> : null}
						{forceO > 0.01 && B * B > 0.1 ? <Arrow2 from={[x + 52, y]} to={[x + 92 + 130 * B * B, y]} color={AMBER.stroke} width={10} head={30} opacity={forceO} /> : null}
					</g>;
				})}
				<Stator cx={IN5.cx} cy={IN5.cy} r={IN5.r} phi={phi} arrow={0} />
				<Rotor cx={IN5.cx} cy={IN5.cy} r={IN5.rr} rho={rho} phi={phi} lines={0.8} currents={0.7 + 0.5 * slip} forces={forceO * (0.7 + 0.5 * slip)} />
				<FieldArrow cx={IN5.cx} cy={IN5.cy} r={IN5.r} phi={phi} />
				{f >= field ? <Torque cx={IN5.cx} cy={IN5.cy} r={IN5.rr + 22} at={rho + 20} size={0.9} opacity={prog(f, field, 14)} /> : null}
				{f >= slide ? <g opacity={prog(f, slide, 12) * (1 - prog(f, field + 30, 12))}>
					{gap5 > 24 ? <ArcArrow cx={IN5.cx} cy={IN5.cy} r={IN5.rr * 0.55} a0={rho + 6} a1={rho + gap5 - 6} color={FLUX} width={6} head={18} /> : null}
				</g> : null}
				{inset > 0.001 ? <g opacity={inset}>
					<CardRect x={96} y={790} w={640} h={150} />
					<Plate spec={COIL} p={{x: 400, y: 808, w: 300}} />
					<Plate spec={BARMAG} p={{x: magX, y: 852, w: 170}} />
					<Arrow2 from={[magX + 40, 840]} to={[magX + 150, 840]} color={AMBER.stroke} width={7} head={22} />
					<Arrow2 from={[magX + 60, 920]} to={[magX - 30, 920]} color={INK} width={4} head={16} dash="8 6" />
				</g> : null}
			</FrameSvg>
			<Lbl x={CU.x + CU.w - 30} y={CU.y + 600} at={-30} color={FLUX} size={28} anchor="end">the poles slide this way →</Lbl>
			<Lbl x={IN5.cx} y={IN5.cy + IN5.r + 80} at={-30} color={INK} size={28} anchor="middle">the whole rotor</Lbl>
			<Lbl x={CU.x + 30} y={CU.y + 600} at={-30} color={INK} size={28}>two bars of the rotor, close up</Lbl>
			<Lbl x={750} y={CU.y + 510} at={motor} color={AMBER.ink} size={30} anchor="middle">force: the motor effect</Lbl>
			<Chip x={1340} y={670} at={lenz} size={30} w={520} color={INK}>Lenz: opposes the change</Chip>
			<Lbl x={IN5.cx} y={IN5.cy - IN5.r - 70} at={slide} out={field + 30} color={FLUX} size={28} anchor="middle">relative motion</Lbl>
			<HandTag x={1340} y={760} text="reduce the sliding" at={slide + 10} size={36} color={AMBER.ink} />
			<HandTag x={1360} y={190} text="dragged along" at={field + 10} size={34} color={AMBER.ink} />
			<Chip x={760} y={830} at={back} out={after} size={32} w={560} color={INK}>going away, it pulls back</Chip>
		</>
	);
};
