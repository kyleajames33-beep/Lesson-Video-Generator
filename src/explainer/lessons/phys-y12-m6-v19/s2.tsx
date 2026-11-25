// Scenes 6 to 10: why the rotor cannot catch up (the what-if panel: a rotor-speed slider pushes the rotor to the
// field's speed, the field lines stand still on the rotor, the currents and the grip bar vanish; then friction and
// the load slow it until the force returns), a heavier load (two speed dials, the slip arc widening, bigger currents
// and forces, torque matching load), typical numbers (beyond the syllabus: task strip, equation strip, givens,
// working), the sailing picture (the painted dinghy with relative wind) and the comparison with the DC motor.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Slider} from '../../physics/electromagnetism/plates';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {SpeedDial} from '../../physics/electromagnetism/induction-motor';
import {Dinghy, dinghyGeom} from '../../physics/electromagnetism/eddy';
import {Givens} from '../phys-y12-m6-v17/parts';
import {HEAD, HEAD_SIZE, HZ, NS, NS_V18, POLES, POLES_V18, ROTOR, SLIDER, SLIP, SLIP_PCT, SLIP_PCT_WRONG, cap, cue, pctText} from './common';
import {AMBER, CardRect, FLUX, FieldArrow, GREY, Gen, Lbl, Load, NAVY, ORANGE, ROSE, Rotor, Stator, Strip, Torque, fx, turned} from './parts';

const rad = (d: number) => (d * Math.PI) / 180;
const nearestStep = (n: number) => SLIDER.reduce((a, s) => (Math.abs(s.n - n) < Math.abs(a.n - n) ? s : a));

// ---------- 6. why it can't catch up ----------
const M6 = {cx: 470, cy: 560, r: 230, rr: 158};
export const S06: React.FC = () => {
	const id = 'why-lag';
	const f = useCurrentFrame();
	const imagine = cue(id, 'Imagine it did'), exact = cue(id, "exactly the field's speed"), still = cue(id, 'standing still'), force = cue(id, 'and no force'), slow = cue(id, 'slow the rotor down'), again = cue(id, 'is sliding past again'), returns = cue(id, 'the force returns'), match = cue(id, 'match the load'), slipC = cue(id, 'This lag is called slip'), work = cap(id, cue(id, "It's what makes the motor work"));
	const N = (g: number) => kf(g, [[0, SLIDER[0].n], [exact, SLIDER[0].n], [exact + 24, SLIDER[1].n], [exact + 48, SLIDER[2].n], [exact + 72, SLIDER[3].n], [slow, SLIDER[3].n], [returns, SLIDER[2].n + 10], [match, SLIDER[1].n]]);
	const n = N(f);
	const step = nearestStep(n);
	const grip = Math.max(0, (NS - n) / (NS - SLIDER[0].n));
	const phi = 40 + 1.6 * f;
	const rho = 10 + turned(f, g => (1.6 * N(g)) / NS);
	const whatIf = prog(f, imagine, 14) * (1 - prog(f, slow, 16));
	const chainO = prog(f, force, 12) * (1 - prog(f, returns, 12));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={60} y={150} width={1800} height={800} rx={24} fill="#e2ded6" opacity={0.8 * whatIf} />
				<Stator cx={M6.cx} cy={M6.cy} r={M6.r} phi={phi} arrow={0} />
				<Rotor cx={M6.cx} cy={M6.cy} r={M6.rr} rho={rho} phi={phi} lines={1} currents={1.3 * grip} forces={1.3 * grip} />
				<FieldArrow cx={M6.cx} cy={M6.cy} r={M6.r} phi={phi} />
				{f >= slow ? <Load cx={M6.cx} cy={M6.cy} r={58} at={rho + 120} size={1} opacity={prog(f, slow, 14)} /> : null}
				<Slider x={980} y={300} w={760} value={(n - SLIDER[0].n) / (NS - SLIDER[0].n)} color={NAVY.stroke} label="rotor speed (rev/min)" ticks={SLIDER.map(s => [(s.n - SLIDER[0].n) / (NS - SLIDER[0].n), String(s.n)] as [number, string])} size={26} />
				<rect x={980} y={650} width={600} height={46} rx={8} fill="#fffdf8" stroke={AMBER.stroke} strokeWidth={3} />
				<rect x={980} y={650} width={600 * grip} height={46} rx={8} fill={AMBER.stroke} />
				{f >= slipC ? <path d={`M1560,418 l24,0 l0,128 l-24,0`} fill="none" stroke={AMBER.stroke} strokeWidth={6} opacity={prog(f, slipC, 12)} /> : null}
			</FrameSvg>
			<Chip x={980} y={170} at={imagine} out={slow} size={30} w={760} color={INK} border={GREY.stroke}>what if: rotor at the field's speed</Chip>
			<Lbl x={980} y={440} at={-30} color={GREY.ink} size={40}>{`field: ${NS} rev/min`}</Lbl>
			<Lbl x={980} y={500} at={-30} color={GREY.ink} size={40}>{`rotor: ${step.n} rev/min`}</Lbl>
			<Lbl x={980} y={570} at={-30} color={AMBER.ink} size={44}>{`slip: ${pctText(step.pct)}`}</Lbl>
			<Lbl x={980} y={630} at={-30} color={AMBER.ink} size={28}>grip (torque)</Lbl>
			<Lbl x={1600} y={676} at={-30} color={GREY.ink} size={26}>illustrative</Lbl>
			<HandTag x={1610} y={480} text="slip" at={slipC + 6} size={36} color={AMBER.ink} />
			<HandTag x={96} y={205} text="same speed: lines stand still on the rotor" at={still + 6} out={again} size={32} color={FLUX} />
			<HandTag x={96} y={205} text="behind again: the field slides past" at={again + 6} size={32} color={FLUX} />
			<div style={{position: 'absolute', left: 960, top: 730, width: 860, opacity: chainO}}><Chip x={0} y={0} at={force} size={30} w={860} color={INK}>same speed → no relative motion → Φ steady → ε = 0 → I = 0 → no torque</Chip></div>
			<Chip x={960} y={730} at={slipC} size={26} w={860} color={AMBER.ink} border={AMBER.stroke}>Slip speed: “The difference between the stator field speed and the actual rotor speed, essential for torque production.”</Chip>
			<Lbl x={M6.cx} y={M6.cy + M6.r + 90} at={slow} color={AMBER.ink} size={30} anchor="middle">friction + load</Lbl>
			<div style={{position: 'absolute', left: 960, top: 850, width: 900}}><Row at={work} size={44}><AnswerBox at={work + 8}><span style={{whiteSpace: 'nowrap'}}>slip is necessary for torque</span></AnswerBox></Row></div>
		</>
	);
};

// ---------- 7. a heavier load ----------
const M7 = {cx: 470, cy: 560, r: 230, rr: 158};
const dialV = (n: number) => (n - 1300) / 220;
/** Illustrative heavier-load rotor speed (no value is shown, design "Numbers used": load scene). */
const N_HEAVY = 1380;
export const S07: React.FC = () => {
	const id = 'heavier-load';
	const f = useCurrentFrame();
	const grows = cue(id, 'so the slip grows'), faster = cue(id, 'sweeps past the bars faster'), bigger = cue(id, 'the rotor current is bigger'), fgrow = cue(id, 'So the force grows'), speed = cue(id, 'at a slightly lower speed'), torque = cap(id, cue(id, 'to keep the extra torque'));
	const n = kf(f, [[0, ROTOR], [grows - 30, ROTOR], [grows + 30, N_HEAVY]]);
	const load = 0.7 + 0.6 * prog(f, 10, 40);
	const visSlip = (g: number) => 0.05 + 0.08 * prog(g, faster, 30);
	const phi = 50 + 1.6 * f;
	const rho = 20 + turned(f, g => 1.6 * (1 - visSlip(g)));
	const cur = 0.8 + 0.5 * prog(f, bigger, 20);
	const frc = 0.8 + 0.5 * prog(f, fgrow, 20);
	const torqueSize = 0.7 + 0.6 * prog(f, fgrow, 30);
	const A = (v: number) => 210 - 240 * v;
	const arcPts: string[] = [];
	const v0 = dialV(n), v1 = dialV(NS);
	for (let i = 0; i <= 24; i++) { const a = rad(A(v0 + ((v1 - v0) * i) / 24)); arcPts.push(`${i ? 'L' : 'M'}${(1530 + 118 * Math.cos(a)).toFixed(1)},${(420 - 118 * Math.sin(a)).toFixed(1)}`); }
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stator cx={M7.cx} cy={M7.cy} r={M7.r} phi={phi} arrow={0} />
				<Rotor cx={M7.cx} cy={M7.cy} r={M7.rr} rho={rho} phi={phi} lines={1} currents={cur} forces={frc} />
				<FieldArrow cx={M7.cx} cy={M7.cy} r={M7.r} phi={phi} />
				<Load cx={M7.cx} cy={M7.cy} r={58} at={rho + 120} size={load} />
				{f >= fgrow ? <Torque cx={M7.cx} cy={M7.cy} r={M7.rr + 28} at={rho + 30} size={torqueSize} opacity={prog(f, fgrow, 14)} /> : null}
				<SpeedDial cx={1130} cy={420} r={140} value={dialV(NS)} />
				<SpeedDial cx={1530} cy={420} r={140} value={v0} mark={v1} />
				<path d={arcPts.join(' ')} fill="none" stroke={AMBER.stroke} strokeWidth={12} strokeLinecap="round" opacity={0.85} />
			</FrameSvg>
			<Lbl x={1130} y={620} at={-30} color={GREY.ink} size={34} anchor="middle">field</Lbl>
			<Lbl x={1530} y={620} at={-30} color={GREY.ink} size={34} anchor="middle">rotor</Lbl>
			<Lbl x={1330} y={680} at={-30} color={GREY.ink} size={26} anchor="middle">illustrative (no values)</Lbl>
			<Lbl x={M7.cx} y={205} at={0} color={AMBER.ink} size={32} anchor="middle">heavier load on the shaft</Lbl>
			<HandTag x={1430} y={250} text="more slip" at={grows + 10} size={36} color={AMBER.ink} />
			<HandTag x={1000} y={760} text="field sweeps past faster" at={faster + 6} out={speed} size={32} color={FLUX} />
			<HandTag x={1000} y={800} text="bigger current" at={bigger + 6} out={speed} size={32} color={ROSE.ink} />
			<HandTag x={1360} y={800} text="bigger force" at={fgrow + 6} out={speed} size={32} color={AMBER.ink} />
			<HandTag x={1000} y={780} text="torque = load: steady, at a lower speed" at={speed + 6} size={34} color={AMBER.ink} />
			<Chip x={96} y={880} at={torque} size={30} w={1730} color={INK}>load ↑ → speed ↓ → slip ↑ → faster flux change → I ↑ → torque ↑ (at a lower speed)</Chip>
		</>
	);
};

// ---------- 8. typical numbers (beyond the syllabus) ----------
export const S08: React.FC = () => {
	const id = 'typical-numbers';
	const f = useCurrentFrame();
	const four = cue(id, 'Our motor has four poles'), fifteen = cue(id, 'fifteen hundred revolutions per minute'), sync = cue(id, 'called the synchronous speed'), minute = cue(id, 'seventy five revolutions per minute'), five = cue(id, 'five percent'), motor = cap(id, cue(id, 'typical for a loaded motor'));
	const phi = 30 + 1.2 * f;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, four, 14)}>
					<Stator cx={330} cy={620} r={120} phi={phi} arrow={1} />
				</g>
			</FrameSvg>
			<Chip x={1440} y={108} at={0} size={28} w={400} color={GREY.ink} border={GREY.stroke}>beyond the syllabus</Chip>
			<Strip x={96} y={176} at={0} size={36}>Find the slip.</Strip>
			<Strip x={560} y={176} at={6} size={32}>slip = n<sub>s</sub> − n<sub>rotor</sub>;&nbsp; % slip = slip / n<sub>s</sub> × 100</Strip>
			<Givens x={96} y={270} w={440} at={10} lines={[`${POLES}-pole motor`, `f = ${HZ} Hz`, `rotor: ${ROTOR} rev/min`]} />
			<HandTag x={260} y={470} text={`${POLES} poles`} at={four + 8} size={34} color={NAVY.ink} />
			<Lbl x={330} y={810} at={four + 10} color={GREY.ink} size={28} anchor="middle">{`${NS} rev/min at ${HZ} Hz`}</Lbl>
			<Chip x={96} y={860} at={four + 20} size={28} w={460} color={GREY.ink} border={GREY.stroke}>{`${POLES_V18} poles (last time): ${NS_V18} rev/min`}</Chip>
			<div style={{position: 'absolute', left: 600, top: 300, width: 1230, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={fifteen} size={32} style={{color: GREY.ink}}><span style={{color: GREY.ink}}>n<sub>s</sub> = 120f / p = 120 × {HZ} / {POLES} = {NS} rev/min (field)</span></Row>
			</div>
			<Chip x={600} y={370} at={sync} size={26} w={1230} color={GREY.ink} border={GREY.stroke}>Synchronous speed: “The speed of the rotating magnetic field: n<sub>s</sub> = 120f/p where f is frequency and p is number of poles.”</Chip>
			<div style={{position: 'absolute', left: 600, top: 500, width: 1230, display: 'flex', flexDirection: 'column', gap: 22}}>
				<Row at={minute - 10} size={52}><AnswerBox at={minute}><span style={{whiteSpace: 'nowrap'}}>slip = {NS} − {ROTOR} = {SLIP} rev/min</span></AnswerBox></Row>
				<Row at={five - 10} size={52}><AnswerBox at={five}><span style={{whiteSpace: 'nowrap', color: AMBER.ink}}>{SLIP} / {NS} × 100 = {fx(SLIP_PCT, 1)}%</span></AnswerBox></Row>
			</div>
			<CrossedChip x={600} y={720} at={five + 30} crossAt={five + 55} size={34} caption="divide by the field's speed">{`${SLIP} / ${ROTOR} = ${fx(SLIP_PCT_WRONG, 1)}%`}</CrossedChip>
			<HandTag x={1260} y={760} text="typical: a few percent" at={motor} size={38} color={AMBER.ink} />
		</>
	);
};

// ---------- 9. a way to picture slip ----------
const W9 = 5;
const BOAT = {x: 400, waterY: 760, h: 380};
const INSET = {x: 1160, y: 230, w: 640, h: 460};
export const S09: React.FC = () => {
	const id = 'sailing-picture';
	const f = useCurrentFrame();
	const think = cue(id, 'Think of a sailing boat'), slower = cue(id, 'slower than the wind'), matched = cue(id, "matched the wind's speed"), little = cue(id, 'a little slower than the wind'), wind = cap(id, cue(id, 'the turning field is the wind'));
	const b = (g: number) => kf(g, [[0, 1.2], [little, 1.2], [little + 40, 4.2]]);
	const rel = W9 - b(f);
	const windOff = turned(f, g => W9 - b(g));
	const water = turned(f, b);
	const g = dinghyGeom(BOAT.x, BOAT.waterY, BOAT.h);
	const ins = prog(f, matched, 16);
	const gi = dinghyGeom(INSET.x + 230, INSET.y + 380, 260);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v19-s9clip"><rect x={96} y={200} width={1020} height={640} rx={16} /></clipPath></defs>
				<CardRect x={96} y={200} w={1020} h={640} />
				<g clipPath="url(#v19-s9clip)">
					{[280, 400, 520, 640].map((y, i) => Array.from({length: 5}, (_, k) => { const span = 1250; const x = 40 + ((((k * 280 + i * 90 + windOff) % span) + span) % span); return <Arrow2 key={`${i}-${k}`} from={[x, y]} to={[x + 150, y]} color={GREY.stroke} width={6} head={20} />; }))}
					<line x1={96} y1={BOAT.waterY} x2={1116} y2={BOAT.waterY} stroke="#7b9bb5" strokeWidth={4} />
					{Array.from({length: 9}, (_, k) => { const span = 1170; const x = 60 + ((((k * 130 - water) % span) + span) % span); return <path key={k} d={`M${x},${BOAT.waterY + 26} q20,-12 40,0 q20,12 40,0`} fill="none" stroke="#7b9bb5" strokeWidth={4} />; })}
				</g>
				<Dinghy x={BOAT.x} waterY={BOAT.waterY} h={BOAT.h} />
				{rel > 0.15 ? <Arrow2 from={[g.sail[0] - 70 - 32 * rel, g.sail[1] + 40]} to={[g.sail[0] - 70, g.sail[1] + 40]} color={INK} width={8} head={26} /> : null}
				{ins > 0.001 ? <g opacity={ins}>
					<rect x={INSET.x} y={INSET.y} width={INSET.w} height={INSET.h} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={4} strokeDasharray="16 10" />
					{[300, 400, 500].map((y, i) => <Arrow2 key={i} from={[INSET.x + 40 + i * 60, y]} to={[INSET.x + 170 + i * 60, y]} color={GREY.stroke} width={6} head={20} />)}
					<line x1={INSET.x + 20} y1={INSET.y + 380} x2={INSET.x + INSET.w - 20} y2={INSET.y + 380} stroke="#7b9bb5" strokeWidth={4} />
					<Dinghy x={INSET.x + 230} waterY={INSET.y + 380} h={260} />
					<circle cx={gi.sail[0] - 50} cy={gi.sail[1] + 30} r={10} fill={INK} />
				</g> : null}
			</FrameSvg>
			<HandTag x={120} y={240} text="going straight downwind" at={think + 10} size={32} color={GREY.ink} />
			<Lbl x={g.sail[0] - 90} y={g.sail[1] - 10} at={slower} color={INK} size={28} anchor="end">relative wind</Lbl>
			<HandTag x={640} y={880} text="push from relative wind" at={slower + 8} out={wind} size={34} color={GREY.ink} />
			<Lbl x={INSET.x + 30} y={INSET.y + 40} at={matched} color={INK} size={28}>if the boat matched the wind</Lbl>
			<Lbl x={gi.sail[0] - 70} y={gi.sail[1] - 10} at={matched + 10} color={INK} size={26} anchor="end">relative wind = 0</Lbl>
			<HandTag x={INSET.x} y={INSET.y + INSET.h + 50} text="no relative wind, no push" at={matched + 16} size={34} color={GREY.ink} />
			<HandTag x={120} y={300} text="settles a little slower than the wind" at={little + 20} out={wind} size={30} color={GREY.ink} />
			<div style={{position: 'absolute', left: 96, top: 866, width: 1700}}><Row at={wind} size={36}><AnswerBox at={wind + 6}><span style={{whiteSpace: 'nowrap'}}>boat = rotor · wind = rotating field · relative wind = slip</span></AnswerBox></Row></div>
		</>
	);
};

// ---------- 10. versus the DC motor ----------
export const S10: React.FC = () => {
	const id = 'versus-dc';
	const f = useCurrentFrame();
	const compare = cue(id, 'Compare this with the DC motor'), forces = cue(id, 'currents in a field feel forces'), fed = cue(id, 'fed into the coil through brushes'), induced = cue(id, 'the current is induced'), sparks = cue(id, 'no sparks'), maint = cue(id, 'with little maintenance'), price = cue(id, 'The price is slip'), anything = cap(id, cue(id, 'lag behind anything'));
	const phi = 20 + 1.6 * f;
	const rho = turned(f, () => 1.6 * 0.95);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, compare, 14)}><Gen c={{cx: 520, cy: 360, k: 68}} alpha={2 * f} ring="split" drive={1} t={f} /></g>
				<Stator cx={1410} cy={340} r={118} phi={phi} arrow={0} />
				<Rotor cx={1410} cy={340} r={74} rho={rho} phi={phi} />
				<FieldArrow cx={1410} cy={340} r={118} phi={phi} />
				<line x1={960} y1={180} x2={960} y2={940} stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
				{f >= price ? <ellipse cx={1110} cy={866} rx={140} ry={42} fill="none" stroke={AMBER.stroke} strokeWidth={5} opacity={prog(f, price + 8, 10)} /> : null}
			</FrameSvg>
			<Lbl x={500} y={190} at={compare} color={INK} size={36} anchor="middle">DC motor</Lbl>
			<Lbl x={1410} y={170} at={0} color={INK} size={36} anchor="middle">induction motor</Lbl>
			<Chip x={330} y={520} at={forces} size={34} w={1300} color={AMBER.ink} border={AMBER.stroke}>both: torque from motor-effect forces on currents in B</Chip>
			<Chip x={96} y={620} at={fed} size={32} w={820} color={ORANGE.ink}>current supplied: brushes + split ring</Chip>
			<Chip x={1000} y={620} at={induced} size={32} w={824} color={ROSE.ink}>current induced: rotating field, no contact</Chip>
			<Chip x={1000} y={700} at={sparks} size={32} w={824} color={INK}>no brushes or split ring to wear</Chip>
			<HandTag x={1560} y={800} text="low maintenance" at={sparks + 20} size={32} color={GREY.ink} />
			<Chip x={1000} y={770} at={maint} size={28} color={GREY.ink} border={GREY.stroke}>fans</Chip>
			<Chip x={1110} y={770} at={maint + 6} size={28} color={GREY.ink} border={GREY.stroke}>pumps</Chip>
			<Chip x={1250} y={770} at={maint + 12} size={28} color={GREY.ink} border={GREY.stroke}>washing machines</Chip>
			<Chip x={1000} y={840} at={price} size={32} w={824} color={AMBER.ink}>needs slip</Chip>
			<Chip x={96} y={840} at={anything} size={32} w={820} color={INK}>no slip needed</Chip>
			<Lbl x={1410} y={480} at={0} color={FLUX} size={26} anchor="middle">field turns; rotor lags</Lbl>
		</>
	);
};
