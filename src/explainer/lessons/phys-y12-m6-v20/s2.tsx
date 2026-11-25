// Scenes 6 to 10: slots cut the paths (the solid and slotted pendulums side by side, one big swirl against small
// trapped swirls, the slotted plate swinging on; the slotted tube inset), no motion, no brake (an illustrative force
// against speed graph, the brake fading, a magnet resting on a still sheet), roller-coaster brakes (the painted car
// running through the painted brake rail with linked readouts and the energy working), motors and brakes (the
// equivalent circuit, the pendulum and the generator panels) and the memory card with three pendulum frames.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {MemoryCard} from '../../shared/scenes';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Plate, placeOf} from '../../physics/electromagnetism/bench';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {FnGraph, fnMap} from '../../physics/electromagnetism/motor';
import {CoasterBrake, CutTube, METAL_SHEET, Swirl, UprightMagnet, coasterGeom, magnetHalfH, pendGeom, tubeGeom} from '../../physics/electromagnetism/eddy';
import {EqCircuit, Givens} from '../phys-y12-m6-v17/parts';
import {Gen} from '../phys-y12-m6-v18/parts';
import {COAST, DK, DK_WRONG, HEAD, HEAD_SIZE, K0, KF, M_CAR, V_STEPS, cap, cue} from './common';
import {AMBER, CardRect, GREY, HEAT, Lbl, NAVY, ORANGE, ROSE, Rig, Strip, sci, swingAt} from './parts';

// ---------- 6. cut the paths ----------
const RA = {px: 470, py: 210, s: 0.42, baseY: 880, region: {x: 360, y: 520, w: 220, h: 190}};
const RB = {px: 980, py: 210, s: 0.42, baseY: 880, region: {x: 870, y: 520, w: 220, h: 190}};
export const S06: React.FC = () => {
	const id = 'cut-the-paths';
	const f = useCurrentFrame();
	const slots = cue(id, 'cut slots into the plate'), small = cue(id, 'big loops into small ones'), emf = cue(id, 'so it has a smaller emf'), res = cue(id, 'its narrow path has more resistance'), longer = cue(id, 'swings much longer'), faster = cue(id, 'the magnet falls much faster'), still = cue(id, 'Small eddy currents still flow'), lam = cap(id, cue(id, 'laminated transformer cores'));
	const sa = swingAt(f, longer, 24, 60, 0.6), sb = swingAt(f, longer, 24, 60, 0.97);
	const ta = f < longer ? -24 : sa.theta, tb = f < longer ? -24 : sb.theta;
	const ga = pendGeom(RA.px, RA.py, RA.s, ta), gb = pendGeom(RB.px, RB.py, RB.s, tb);
	const sw = prog(f, small, 14);
	const tg = tubeGeom({x: 1500, y: 300, w: 60}), ts = tubeGeom({x: 1680, y: 300, w: 60}, true);
	const ms = tg.s * 0.34, hh = magnetHalfH(ms);
	const tt = Math.max(0, f - faster);
	const yA = tg.top + hh + Math.min(tg.bot - tg.top - 2 * hh, 0.35 * tt), yB = tg.top + hh + Math.min(tg.bot - tg.top - 2 * hh, 0.0 + 4 * tt);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Rig px={RA.px} py={RA.py} s={RA.s} deg={ta} region={RA.region} baseY={RA.baseY} />
				<Rig px={RB.px} py={RB.py} s={RB.s} deg={tb} region={RB.region} baseY={RB.baseY} slotted />
				{sw > 0.001 ? <g opacity={sw}>
					<Swirl cx={ga.c[0]} cy={ga.c[1]} rx={ga.hw * 0.75} ry={ga.hh * 0.75} sense={1} color={ROSE.stroke} phase={f * 0.06} />
					{[-2, -1, 0, 1, 2].map(k => <Swirl key={k} cx={gb.c[0] + k * gb.hw * 0.36} cy={gb.c[1] + gb.hh * 0.25} rx={gb.hw * 0.1} ry={gb.hh * 0.45} sense={1} color={ROSE.stroke} phase={f * 0.06} width={3} dots={0} />)}
				</g> : null}
				<g>
					<CardRect x={1400} y={250} w={420} h={560} />
					<CutTube p={{x: 1500, y: 300, w: 60}} id="v20-s6a" my={yA} />
					<CutTube p={{x: 1680, y: 300, w: 60}} slotted id="v20-s6b" my={yB} />
				</g>
			</FrameSvg>
			<Lbl x={RA.px} y={935} at={-30} color={INK} size={30} anchor="middle">solid plate</Lbl>
			<Lbl x={RB.px} y={935} at={slots} color={INK} size={30} anchor="middle">slotted plate</Lbl>
			<HandTag x={RB.px - 60} y={790} text="small loops" at={small + 10} size={36} color={ROSE.ink} />
			<Lbl x={96} y={250} at={emf} color={ROSE.ink} size={30}>less area → less ΔΦ → smaller ε</Lbl>
			<Lbl x={96} y={300} at={res} color={INK} size={30}>narrow path → more R</Lbl>
			<HandTag x={RB.px + 100} y={400} text="swings on" at={longer + 30} size={34} color={AMBER.ink} />
			<HandTag x={RA.px - 200} y={400} text="stops fast" at={longer + 60} size={34} color={AMBER.ink} />
			<Lbl x={tg.cx} y={830} at={0} color={INK} size={26} anchor="middle">solid</Lbl>
			<Lbl x={ts.cx} y={830} at={0} color={INK} size={26} anchor="middle">slotted</Lbl>
			<Lbl x={1610} y={290} at={0} color={INK} size={26} anchor="middle">tubes, cut away</Lbl>
			<div style={{position: 'absolute', left: 1160, top: 840, width: 400}}><Row at={still} size={36}><AnswerBox at={still + 6}><span style={{whiteSpace: 'nowrap', color: ROSE.ink}}>reduced, not zero</span></AnswerBox></Row></div>
			<CrossedChip x={1160} y={170} at={still + 10} crossAt={still + 30} size={28}>slots stop all eddy currents</CrossedChip>
			<Chip x={1160} y={250} at={lam} size={26} w={240} color={GREY.ink} border={GREY.stroke}>laminated cores (earlier video): same idea</Chip>
		</>
	);
};

// ---------- 7. no motion, no brake ----------
const GB7 = {x: 200, y: 260, w: 640, h: 420, x0: 0, x1: 1, ymin: 0, ymax: 1};
const fv = (u: number) => u * (1.55 - 0.6 * u);
export const S07: React.FC = () => {
	const id = 'no-motion-no-brake';
	const f = useCurrentFrame();
	const motion = cue(id, 'Braking needs motion'), force = cue(id, 'the weaker the force'), train = cue(id, 'As a train slows down'), holdIt = cue(id, 'finish the stop, and hold it'), flt = cue(id, 'float at rest'), all = cue(id, "there's no force at all"), lev = cap(id, cue(id, "It can't make things levitate"));
	const u = kf(f, [[motion, 0.95], [force, 0]]);
	const m = fnMap(GB7);
	const sheet = {x: 1180, y: 600, w: 420};
	const sg = placeOf(METAL_SHEET, sheet);
	const land = sg.at(720, 560);
	const ms = 0.2, hh = magnetHalfH(ms);
	const td = Math.max(0, f - flt);
	const my = Math.min(land[1] - hh + 10, 330 + 0.5 * 1.6 * td * td);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<FnGraph b={GB7} fn={fv} color={AMBER.stroke} xLabel="speed" yLabel="braking force" size={30} />
				<circle cx={m.X(u)} cy={m.Y(fv(u))} r={16} fill={AMBER.stroke} stroke={INK} strokeWidth={3} />
				{f >= force ? <ellipse cx={m.X(0)} cy={m.Y(0)} rx={44} ry={36} fill="none" stroke={HEAT} strokeWidth={5} opacity={prog(f, force, 10)} /> : null}
				<g opacity={prog(f, 0, 12)}>
					<Plate spec={METAL_SHEET} p={sheet} />
					<UprightMagnet cx={land[0]} cy={my} s={ms} />
					<line x1={land[0] - 50 + 100 * prog(f, flt + 10, 10)} y1={333 + hh} x2={land[0] + 50 + 100 * prog(f, flt + 10, 10)} y2={333 + hh} stroke="#6f6a62" strokeWidth={7} strokeLinecap="round" opacity={1 - prog(f, flt + 16, 10)} />
				</g>
			</FrameSvg>
			<Lbl x={GB7.x + GB7.w - 10} y={GB7.y + 20} at={-30} color={GREY.ink} size={26} anchor="end">illustrative</Lbl>
			<HandTag x={GB7.x + 60} y={GB7.y + GB7.h + 90} text="no motion → no flux change → no force" at={force + 6} size={34} color={HEAT} />
			<Chip x={96} y={830} at={train} size={30} w={560} color={AMBER.ink}>magnetic brake: fades as v → 0</Chip>
			<Chip x={680} y={830} at={holdIt} size={30} w={560} color={INK}>friction brake: finishes the stop and holds</Chip>
			<Lbl x={sheet.x + sheet.w / 2} y={sheet.y + 300} at={0} color={INK} size={28} anchor="middle">copper sheet, still</Lbl>
			<Chip x={1100} y={330} at={motion} out={flt} size={30} w={420} color={INK}>force needs a changing flux</Chip>
			<HandTag x={1160} y={250} text="still: Φ steady, no eddy currents, no force" at={all + 6} size={30} color={GREY.ink} />
			<div style={{position: 'absolute', left: 1240, top: 190, width: 600}}><Row at={lev} size={36}><AnswerBox at={lev + 6}><span style={{whiteSpace: 'nowrap'}}>braking ≠ levitation at rest</span></AnswerBox></Row></div>
			<CrossedChip x={1260} y={930 - 60} at={lev + 6} crossAt={lev + 20} size={28}>a magnet floats over still copper</CrossedChip>
		</>
	);
};

// ---------- 8. roller-coaster brakes ----------
const WHEEL = 470, CARW = 440, RAILX = 220, RAILW = 900;
export const S08: React.FC = () => {
	const id = 'coaster-brakes';
	const f = useCurrentFrame();
	const fins = cue(id, 'Copper fins under the car'), twenty = cue(id, 'twenty metres per second'), five = cue(id, 'five metres per second'), dk = cue(id, 'five point six times ten to the five joules'), heat = cue(id, 'heat in the fins'), faster = cue(id, 'faster fins mean stronger braking'), wear = cap(id, cue(id, 'nothing wears out'));
	const run = prog(f, five, 120);
	const carX = kf(f, [[0, 60], [five, 150], [five + 120, 640]]);
	const step = Math.min(3, Math.floor(run * 4));
	const st = f < twenty ? null : COAST[Math.max(0, f < five ? 0 : step)];
	const g = coasterGeom(carX, WHEEL, CARW, RAILX, RAILW);
	const sw = prog(f, fins, 12);
	const tint = prog(f, heat, 20);
	const gg = {x: 1290, y: 640, w: 460, h: 200, x0: 0, x1: 1, ymin: 0, ymax: 1};
	const curve = (t: number) => 0.25 + 0.75 * Math.exp(-3 * t);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CoasterBrake carX={carX} wheelY={WHEEL} carW={CARW} railX={RAILX} railW={RAILW} finTint={tint} tintColor={HEAT} id="v20-s8" track={[96, 1200]}>
					{sw > 0.001 ? <g opacity={sw}>{[0.25, 0.55, 0.85].map(k => <Swirl key={k} cx={g.fin.x0 + (g.fin.x1 - g.fin.x0) * k} cy={(g.fin.y0 + g.fin.y1) / 2 - 8} rx={22} ry={14} sense={1} color={ROSE.stroke} width={4} dots={0} />)}</g> : null}
				</CoasterBrake>
				<FnGraph b={gg} fn={f >= faster ? curve : undefined} grow={prog(f, faster, 40)} color={AMBER.stroke} xLabel="time" yLabel="v" size={26} />
			</FrameSvg>
			<Strip x={96} y={166} at={0} size={34}>Find the kinetic energy turned into heat.</Strip>
			<Strip x={820} y={166} at={6} size={34}>K = ½mv²</Strip>
			<Givens x={1100} y={166} w={720} at={10} lines={[`m = ${sci(M_CAR, 1)} kg (car)`, `v: ${V_STEPS[0]} → ${V_STEPS[3].toFixed(1)} m s⁻¹`]} />
			<Lbl x={g.fin.x1 + 30} y={WHEEL + 110} at={fins} color={ORANGE.ink} size={28}>copper fin</Lbl>
			<Lbl x={RAILX + RAILW / 2} y={WHEEL + 150} at={fins} color={INK} size={28} anchor="middle">rows of strong magnets (the fin runs between them)</Lbl>
			{st ? null : <div style={{position: 'absolute', left: 1240, top: 330, width: 600}}><Row at={fins} size={36}>v = ?</Row><Row at={fins} size={36}><span style={{color: AMBER.ink}}>K = ?</span></Row><Row at={fins} size={36}><span style={{color: HEAT}}>heat in fins = ?</span></Row></div>}
			{st ? <div style={{position: 'absolute', left: 1240, top: 330, width: 600}}>
				<Row at={twenty} size={36}>{`v = ${st.v === 5 ? '5.0' : st.v} m s⁻¹`}</Row>
				<Row at={twenty} size={36}><span style={{color: AMBER.ink}}>{`K = ${st.K === KF ? sci(st.K, 2) : sci(st.K, 1)} J`}</span></Row>
				<Row at={twenty} size={36}><span style={{color: HEAT}}>{`heat in fins = ${st.heat === 0 ? '0' : sci(st.heat, 1)} J`}</span></Row>
			</div> : null}
			<div style={{position: 'absolute', left: 96, top: 640, width: 1150, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={twenty} size={36}>K<sub>i</sub> = ½ × {sci(M_CAR, 1)} × {V_STEPS[0]}² = {sci(K0, 1)} J</Row>
				<Row at={five} size={36}>K<sub>f</sub> = ½ × {sci(M_CAR, 1)} × 5.0² = {sci(KF, 2)} J</Row>
				<Row at={dk - 10} size={44}><AnswerBox at={dk}><span style={{whiteSpace: 'nowrap'}}>ΔK = {sci(K0, 1)} − {sci(KF, 2)} ≈ {sci(DK, 1)} J</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={860} at={dk + 30} crossAt={dk + 55} size={28} caption="square each speed first">{`ΔK = ½ × ${M_CAR} × (20 − 5)² = ${sci(DK_WRONG, 1)} J`}</CrossedChip>
			<HandTag x={g.fin.x0} y={WHEEL + 210} text="→ heat in the fins" at={heat + 6} size={34} color={HEAT} />
			<Lbl x={1290} y={620} at={0} color={GREY.ink} size={26}>speed against time (illustrative)</Lbl>
			<Chip x={1290} y={880} at={wear} size={28} w={540} color={INK}>no contact: no brake pads to wear</Chip>
		</>
	);
};

// ---------- 9. motors and brakes, the same law ----------
export const S09: React.FC = () => {
	const id = 'motors-and-brakes';
	const f = useCurrentFrame();
	const dc = cue(id, 'In a DC motor'), brake = cue(id, 'In a magnetic brake'), way = cue(id, 'running the other way'), gens = cue(id, 'running their motors as generators'), regen = cap(id, cue(id, "That's regenerative braking"));
	const sw = swingAt(f, 0, 22, 60, 1).theta;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardRect x={96} y={180} w={560} h={480} />
				<CardRect x={690} y={180} w={560} h={480} />
				<g opacity={prog(f, 0, 12)}><EqCircuit b={{x: 200, y: 320, w: 360, h: 260}} emf={1} I={2} phase={f * 2} size={32} /></g>
				<g opacity={prog(f, 0, 12)}><Rig px={960} py={290} s={0.34} deg={sw} region={{x: 880, y: 520, w: 160, h: 130}} baseY={640} /></g>
				<g>
					<CardRect x={1284} y={180} w={540} h={480} />
					<Gen c={{cx: 1550, cy: 400, k: 62}} alpha={3 * f} ring="slip" drive={1} t={f} />
				</g>
				{f >= way ? <Arrow2 from={[640, 720]} to={[700, 720]} color={NAVY.stroke} width={6} head={22} opacity={prog(f, way, 12)} /> : null}
			</FrameSvg>
			<Lbl x={376} y={215} at={0} color={INK} size={32} anchor="middle">DC motor</Lbl>
			<Lbl x={1120} y={215} at={0} color={INK} size={32} anchor="middle">magnetic brake</Lbl>
			<Chip x={96} y={680} at={dc + 30} size={28} w={560} color={ORANGE.ink}>supply does work against ε_back → mechanical energy</Chip>
			<Chip x={690} y={680} at={brake + 30} size={28} w={560} color={AMBER.ink}>motion does work against the eddy-current force → electrical → heat</Chip>
			<HandTag x={560} y={790} text="same law, reversed" at={way + 6} size={34} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 96, top: 850, width: 1200}}><Row at={way} size={40}><AnswerBox at={way + 6}><span style={{whiteSpace: 'nowrap'}}>Lenz's law + conservation of energy</span></AnswerBox></Row></div>
			<Lbl x={1554} y={215} at={gens} color={INK} size={30} anchor="middle">motors run as generators</Lbl>
			<Chip x={1284} y={680} at={gens + 20} size={28} w={540} color={ORANGE.ink}>kinetic → electrical → back to the supply</Chip>
			<Lbl x={1554} y={800} at={regen} color={INK} size={34} anchor="middle">regenerative braking</Lbl>
			<HandTag x={1430} y={860} text="energy returned" at={regen + 8} size={34} color={ORANGE.ink} />
		</>
	);
};

// ---------- 10. a way to remember ----------
const FR = [{x: 180, v: 0}, {x: 760, v: 0.5}, {x: 1340, v: 1}];
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const no = cue(id, 'No motion, no eddies, no brake'), brk = cap(id, cue(id, 'stronger brake'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{FR.map((fr, i) => {
					const deg = fr.v === 0 ? 0 : 14 * fr.v * Math.sin(f / 10);
					const g = pendGeom(fr.x + 200, 470, 0.26, deg);
					const lit = (i === 0 && f >= no && f < no + 40) || (i === 2 && f >= brk && f < brk + 40);
					return <g key={i}>
						<CardRect x={fr.x} y={440} w={400} h={460} />
						{lit ? <rect x={fr.x} y={440} width={400} height={460} rx={16} fill="none" stroke={INK} strokeWidth={6} /> : null}
						<Rig px={fr.x + 200} py={470} s={0.26} deg={deg} region={{x: fr.x + 130, y: 640, w: 140, h: 130}} baseY={880} />
						{fr.v > 0 ? <Swirl cx={g.c[0]} cy={g.c[1]} rx={g.hw * (0.4 + 0.4 * fr.v)} ry={g.hh * (0.4 + 0.4 * fr.v)} sense={1} color={ROSE.stroke} phase={f * 0.06} width={4} dots={0} /> : null}
						{fr.v > 0 ? <Arrow2 from={[g.c[0] - 10, g.c[1] + g.hh + 22]} to={[g.c[0] - 10 - 70 * fr.v - 20, g.c[1] + g.hh + 22]} color={AMBER.stroke} width={7} head={20} /> : null}
					</g>;
				})}
			</FrameSvg>
			<Lbl x={380} y={935} at={-30} color={INK} size={28} anchor="middle">at rest</Lbl>
			<Lbl x={960} y={935} at={-30} color={INK} size={28} anchor="middle">slow</Lbl>
			<Lbl x={1540} y={935} at={-30} color={INK} size={28} anchor="middle">fast</Lbl>
			<div style={{position: 'absolute', left: 360, top: 170, width: 1200}}>
				<MemoryCard at={no} main={<><span style={{color: AMBER.ink}}>No motion,</span> <span style={{color: ROSE.ink}}>no eddies,</span> <span style={{color: AMBER.ink}}>no brake.</span></>} />
			</div>
		</>
	);
};
