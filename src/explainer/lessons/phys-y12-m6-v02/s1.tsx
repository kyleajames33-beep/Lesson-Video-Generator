// Scenes 1 to 5: the hook on last time's frame (the electron fired in sideways curves up between the plates at
// true scale, the cliff path flips), two motions and one clock (strobe images at equal time steps, equal v_x
// arrows, equal a arrows, growing v_y, the projectile overlay), the three differences (comparison table, two balls
// on one path, the proton bending the other way), the time between the plates and the deflection (calculation
// layout with the plate stage beside it).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, Cliff, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {Particle} from '../../physics/electromagnetism/plates';
import type {SupplyAt} from '../../physics/electromagnetism/plates';
import {stateAt} from '../../sims/field-motion';
import {CliffInset, M6V01FinalFrame} from '../phys-y12-m6-v01/s3';
import {HEAD, HEAD_SIZE, MAIN, RATIO, RUN_IN, cap, cue, holdIf, mono} from './common';
import {AMBER, CardRect, GREY, Givens, Lbl, NAVY, Ring, Stage, Strip, TEAL, VIOLET, VecArrow, Strobes, Trail, RunDot, platesFor, sci, toPx} from './parts';
import type {Map} from './parts';

export const M1: Map = {x0: 740, y0: 540, k: 18000};
export const G1 = platesFor(M1, MAIN.L, MAIN.d);
export const SUP1: SupplyAt = {x: 96, y: 190, w: 380};
const T_IN = MAIN.t;
/** Exit point of the main case on a map. */
export const exitPx = (m: Map) => toPx(m, MAIN.L, MAIN.y);

// ---------- 1. hook: an upside-down projectile ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const here = cue(id, "Here's our electron again"), fired = cue(id, "This time it's fired in sideways"), pushed = cue(id, "it's pushed steadily upwards"), curves = cue(id, 'Its path curves'), upside = cue(id, 'only upside down'), coinc = cue(id, 'Is that a coincidence'), shape = cue(id, 'Straight line, parabola or circle');
	const h = holdIf(id);
	if (f < 1) return <M6V01FinalFrame />;
	const t = kf(f, mono([[pushed - 10, 0], [curves + 50, T_IN]]), false);
	const flip = prog(f, upside, 30);
	const moving = t > 0;
	const s = stateAt(RUN_IN, t);
	const [ex, ey] = toPx(M1, s.x, s.y);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 1, 20), clipPath: 'inset(150px 0 0 0)'}}><M6V01FinalFrame /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage g={G1} sup={SUP1} reading="400 V" supplyOpacity={prog(f, here + 4, 20)} />
				<CliffInset flip={flip} />
				<Trail m={M1} path={RUN_IN} t={t} />
				{moving ? <RunDot m={M1} path={RUN_IN} t={t} r={24} /> : <Particle cx={M1.x0} cy={M1.y0} sign="−" r={26} />}
				<VecArrow x={ex + 32} y={ey} dx={130} dy={0} color={TEAL.stroke} width={8} head={22} />
				<VecArrow x={ex} y={ey - 32} dx={0} dy={-90} color={AMBER.stroke} width={7} head={20} />
				<Bracket x1={G1.x1} y1={G1.yBot + 70} x2={G1.x2} y2={G1.yBot + 70} color={NAVY.stroke} at={fired} label="L = 5.0 cm" size={32} ly={G1.yBot + 104} />
				<Bracket x1={G1.x2 + 40} y1={G1.yTop} x2={G1.x2 + 40} y2={G1.yBot} color={NAVY.stroke} at={fired + 10} label="d = 2.0 cm" size={30} lx={G1.x2 + 54} anchor="start" />
			</FrameSvg>
			<Lbl x={ex + 170} y={ey + 12} color={TEAL.ink} size={36}>v</Lbl>
			<Lbl x={ex + 20} y={ey - 104} color={AMBER.ink} size={36}>F</Lbl>
			<Lbl x={SUP1.x + 190} y={SUP1.y - 22} at={here + 20} color={NAVY.ink} size={28} anchor="middle">high-voltage supply</Lbl>
			<Strip x={96} y={440} at={fired + 20} size={30} w={560} border={TEAL.stroke} color={TEAL.ink}>v = 3.0 × 10⁷ m s⁻¹, parallel to the plates</Strip>
			<HandTag x={M1.x0 + 30} y={M1.y0 + 70} text="steady across" at={fired + 30} out={curves} size={30} color={TEAL.ink} />
			<HandTag x={M1.x0 + 60} y={M1.y0 - 150} text="steady push up" at={pushed + 10} out={curves} size={30} color={AMBER.ink} />
			<HandTag x={420} y={790} text="upside-down cliff?" at={upside + 20} size={32} color={GREY.ink} anchor="middle" />
			{['straight line', 'parabola', 'circle'].map((c, i) => <Chip key={c} x={760 + i * 260} y={850} at={shape + i * 8} size={34}>{c}</Chip>)}
			<Chip x={96} y={880} at={coinc} size={30} border={GREY.stroke} color={GREY.ink}>same shape: a coincidence?</Chip>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1700} y={880} r={46} ringFrom={shape} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. two motions, one clock ----------
export const S02: React.FC = () => {
	const id = 'two-motions';
	const f = useCurrentFrame();
	const split = cue(id, 'Split the motion in two'), along = cue(id, 'Along the plates'), constant = cue(id, 'the horizontal velocity stays'), across = cue(id, 'Across the plates'), zero = cue(id, 'starting from zero vertical'), clock = cue(id, 'One clock runs both'), exactly = cue(id, "That's exactly a projectile"), parabola = cue(id, 'in place of g') + 16;
	const t = kf(f, mono([[split + 10, 0], [split + 130, T_IN]]), false);
	const n = 4;
	const xs = Array.from({length: n + 1}, (_, k) => toPx(M1, stateAt(RUN_IN, (k * T_IN) / n).x, 0)[0]);
	const pts = Array.from({length: n + 1}, (_, k) => toPx(M1, stateAt(RUN_IN, (k * T_IN) / n).x, stateAt(RUN_IN, (k * T_IN) / n).y));
	const ghostO = prog(f, exactly, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage g={G1} sup={SUP1} reading="400 V" />
				<g opacity={1 - prog(f, 0, 16)}><CliffInset /></g>
				<Trail m={M1} path={RUN_IN} t={t} width={f >= parabola ? 6 : 4} color={f >= parabola ? TEAL.stroke : TEAL.stroke} dash={f >= parabola ? undefined : '8 8'} />
				<Strobes m={M1} path={RUN_IN} T={T_IN} n={n} t={t} vx={f >= constant ? 100 : 0} a={f >= zero ? 46 : 0} vy={f >= zero + 20 ? (500 * MAIN.vy) / MAIN.vx : 0} vyScale={1} />
				<RunDot m={M1} path={RUN_IN} t={t} r={22} />
				{/* equal horizontal steps along the bottom plate */}
				{f >= constant ? xs.map((x, k) => <line key={k} x1={x} y1={G1.yBot + 30} x2={x} y2={G1.yBot + 58} stroke={TEAL.stroke} strokeWidth={5} opacity={prog(f, constant + k * 4, 8)} />) : null}
				{/* the growing vertical gaps, read off at the right */}
				{f >= zero + 30 ? pts.map(([, y], k) => <line key={k} x1={G1.x2 - 6} y1={y} x2={G1.x2 + 28} y2={y} stroke={VIOLET.stroke} strokeWidth={3} opacity={prog(f, zero + 30 + k * 4, 8)} />) : null}
				{ghostO > 0 ? <path d={pts.length ? Array.from({length: 41}, (_, i) => { const x = (i / 40) * MAIN.L; const [px, py] = toPx(M1, x, MAIN.y * (x / MAIN.L) ** 2); return `${i ? 'L' : 'M'}${px.toFixed(1)},${(py - 0).toFixed(1)}`; }).join(' ') : ''} fill="none" stroke={GREY.stroke} strokeWidth={14} opacity={0.55 * ghostO} strokeLinecap="round" /> : null}
				<Ring cx={256} cy={700} rx={180} ry={70} at={clock + 6} color={INK} />
			</FrameSvg>
			<Readouts x={96} y={650} w={320} size={44} at={split} rows={[{label: 'clock', value: `${(t * 1e9).toFixed(2)} ns`}]} />
			<HandTag x={450} y={760} text="one clock" at={clock + 16} size={34} color={INK} />
			<HandTag x={G1.x1 + 200} y={G1.yBot + 100} text="equal steps across" at={constant + 20} size={30} color={TEAL.ink} />
			<HandTag x={G1.x2 + 40} y={G1.yTop - 40} text="gaps grow 1, 3, 5, 7" at={zero + 40} size={30} color={VIOLET.ink} anchor="middle" />
			<Lbl x={G1.x2 - 10} y={G1.yBot - 30} at={zero + 30} color={TEAL.ink} size={26} anchor="end">dashed v<Sub>y</Sub> drawn 5 × longer than v<Sub>x</Sub></Lbl>
			<div style={{position: 'absolute', left: 96, top: 420, width: 560, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={along} ageAt={exactly} size={34} oldSize={30} style={{whiteSpace: 'normal'}}><span style={{color: TEAL.ink}}>along: no force, v<Sub>x</Sub> constant</span></Row>
				<Row at={across} ageAt={exactly} size={34} oldSize={30} style={{whiteSpace: 'normal'}}><span style={{color: VIOLET.ink}}>across: a = qE/m, from zero</span></Row>
			</div>
			<Strip x={96} y={540} at={exactly} size={32} border={GREY.stroke} color={INK}>projectile, with qE/m for g</Strip>
			<HandTag x={G1.x1 + 300} y={G1.yTop + 70} text="y ∝ x²" at={parabola} size={36} color={TEAL.ink} />
			<Lbl x={G1.x1 + 20} y={G1.yTop + 40} at={exactly + 10} color={GREY.ink} size={28}>grey: projectile with g (different scale)</Lbl>
		</>
	);
};

// ---------- 3. same shape, different acceleration ----------
const M3: Map = {x0: 150, y0: 470, k: 10800};
export const S03: React.FC = () => {
	const id = 'comparison';
	const f = useCurrentFrame();
	const three = cue(id, 'But there are three differences'), size = cue(id, 'The size'), here = cue(id, 'Here, a is about'), ignore = cue(id, 'which is why we ignore gravity'), mass = cue(id, 'The mass'), every = cue(id, 'Every ball falls'), depends = cue(id, 'depends on charge and mass'), dirn = cue(id, 'And the direction'), flips = cue(id, 'the electric force flips'), proton = cue(id, 'so a proton fired in');
	const pull = prog(f, 0, 30);
	const k = 18000 + (M3.k - 18000) * pull;
	const m: Map = {x0: M1.x0 + (M3.x0 - M1.x0) * pull, y0: M1.y0 + (M3.y0 - M1.y0) * pull, k};
	const g = platesFor(m, MAIN.L, MAIN.d);
	const protonPath = Array.from({length: 41}, (_, i) => { const x = (i / 40) * MAIN.L; const [px, py] = toPx(m, x, -0.35 * MAIN.y * (x / MAIN.L) ** 2); return `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`; }).join(' ');
	const pPro = prog(f, proton + 10, 40);
	const row = (at: number, title: string, body: React.ReactNode, y: number, c: string) => (
		<div style={{position: 'absolute', left: 760, top: y, width: 1064, opacity: prog(f, at, 12)}}>
			<div style={{background: '#fffdf8', border: `3px solid ${c}`, borderRadius: 14, padding: '8px 22px 12px'}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: c}}>{title}</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK, whiteSpace: 'normal'}}>{body}</div>
			</div>
		</div>
	);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage g={g} />
				<Trail m={m} path={RUN_IN} t={T_IN} width={5} />
				<RunDot m={m} path={RUN_IN} t={T_IN} r={18} />
				{f >= here ? <VecArrow x={toPx(m, MAIN.L, MAIN.y)[0] + 40} y={toPx(m, MAIN.L, MAIN.y)[1]} dx={0} dy={-80} color={VIOLET.stroke} width={7} head={20} at={here} /> : null}
				{pPro > 0 ? <g>
					<path d={protonPath} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="10 8" opacity={pPro} />
					<Particle cx={toPx(m, MAIN.L * pPro, 0)[0]} cy={toPx(m, MAIN.L * pPro, -0.35 * MAIN.y * pPro * pPro)[1]} sign="+" r={18} />
				</g> : null}
				{/* two balls of different sizes on one path */}
				<g opacity={prog(f, every, 14)}>
					<CardRect x={96} y={690} w={600} h={250} />
					<Cliff left={116} edgeX={300} topY={770} baseY={920} right={676} />
					<path d={Array.from({length: 31}, (_, i) => { const x = 300 + (i / 30) * 340; return `${i ? 'L' : 'M'}${x.toFixed(1)},${(756 + ((x - 300) / 340) ** 2 * 150).toFixed(1)}`; }).join(' ')} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="10 8" />
					<circle cx={300} cy={756} r={10} fill="#cfc6b4" stroke={INK} strokeWidth={3} />
					<circle cx={470} cy={756 + 0.25 * 150} r={20} fill="#cfc6b4" stroke={INK} strokeWidth={3} />
				</g>
			</FrameSvg>
			<Lbl x={g.x1} y={g.yTop - 70} at={0} color={INK} size={28}>electron (−): curves up</Lbl>
			<HandTag x={440} y={726} text="same g, every ball" at={every + 20} size={30} color={INK} />
			<Lbl x={g.x1} y={g.yBot + 70} at={proton + 20} color={INK} size={28}>proton: 1837 times less, drawn enlarged</Lbl>
			<HandTag x={g.x2 - 40} y={g.yBot - 30} text="sign flips it" at={proton + 30} size={30} color={AMBER.ink} anchor="end" />
			{row(size, '1. size', <>a = qE/m ≈ <span style={{color: VIOLET.ink}}>{sci(MAIN.a, 1)} m s⁻²</span> ≫ g</>, 186, VIOLET.ink)}
			{row(mass, '2. mass', <>g is the same for every ball; <span style={{color: VIOLET.ink}}>qE/m depends on the particle</span></>, 370, NAVY.ink)}
			{row(dirn, '3. direction', <>gravity always down; the electric force <span style={{color: AMBER.ink}}>flips with the sign of q</span></>, 590, AMBER.ink)}
			<HandTag x={1500} y={338} text="≫ g in this field" at={ignore} size={30} color={VIOLET.ink} marks={[{kind: 'circle', cx: 1300, cy: 258, rx: 190, ry: 34}]} markAt={ignore - 6} />
			<Chip x={760} y={760} at={three} size={32} border={GREY.stroke} color={GREY.ink}>same shape, three differences</Chip>
			<Lbl x={760} y={870} at={depends} out={dirn} color={INK_SOFT} size={28}>a/g ≈ {sci(MAIN.ag, 1)} here</Lbl>
			<Lbl x={760} y={870} at={flips} color={INK_SOFT} size={28}>mass ratio {Math.round(RATIO)}</Lbl>
		</>
	);
};

// ---------- 4 and 5: the calculation layout ----------
export const M4: Map = {x0: 1100, y0: 520, k: 12000};
export const G4 = platesFor(M4, MAIN.L, MAIN.d);
/** The small true-scale stage beside the working, with L and d brackets. */
export const SideStage: React.FC<{t?: number; ticks?: number; yAt?: number; roomAt?: number}> = ({t = T_IN, ticks = 0, yAt = 1e9, roomAt = 1e9}) => {
	const f = useCurrentFrame();
	const [ex, ey] = toPx(M4, MAIN.L, MAIN.y);
	return (
		<FrameSvg>
			<Stage g={G4} />
			<Trail m={M4} path={RUN_IN} t={t} width={5} />
			<Strobes m={M4} path={RUN_IN} T={T_IN} n={4} t={t} />
			<RunDot m={M4} path={RUN_IN} t={t} r={18} />
			{ticks > 0 ? Array.from({length: 5}, (_, k) => { const x = toPx(M4, (k * MAIN.L) / 4, 0)[0]; return <line key={k} x1={x} y1={G4.yBot + 30} x2={x} y2={G4.yBot + 56} stroke={TEAL.stroke} strokeWidth={6} opacity={ticks} />; }) : null}
			<Bracket x1={G4.x1} y1={G4.yBot + 80} x2={G4.x2} y2={G4.yBot + 80} color={NAVY.stroke} label="L = 5.0 cm" size={30} ly={G4.yBot + 112} />
			<Bracket x1={G4.x2 + 30} y1={G4.yTop} x2={G4.x2 + 30} y2={G4.yBot} color={NAVY.stroke} out={Math.min(yAt, roomAt)} label="d" size={30} lx={G4.x2 + 44} anchor="start" />
			<Bracket x1={ex + 70} y1={M4.y0} x2={ex + 70} y2={ey} color={NAVY.stroke} at={yAt} label="y" size={28} lx={ex + 82} ly={(M4.y0 + ey) / 2 + 4} anchor="start" />
			<Bracket x1={ex + 110} y1={M4.y0} x2={ex + 110} y2={G4.yTop} color={NAVY.stroke} at={roomAt} label="d/2" size={28} lx={ex + 122} ly={(M4.y0 + G4.yTop) / 2} anchor="start" />
			<line x1={G4.x1 - 10} y1={M4.y0} x2={ex + 120} y2={M4.y0} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 7" opacity={prog(f, Math.min(yAt, roomAt), 12)} />
		</FrameSvg>
	);
};
export const S04: React.FC = () => {
	const id = 'time-inside';
	const f = useCurrentFrame();
	const measure = cue(id, "Let's measure it"), plates = cue(id, 'The plates are five'), centre = cue(id, 'The electron enters on the centre line'), how = cue(id, 'How long is it'), only = cue(id, 'Only the horizontal motion'), tel = cue(id, 'Time equals length over'), which = cue(id, 'which is one point six seven'), push = cue(id, "The sideways push doesn't");
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={measure} size={30} w={980}>Electron enters on the centre line: find the time between the plates.</Strip>
			<Strip x={1100} y={176} at={measure + 8} size={36} border={TEAL.stroke} color={INK}>t = L/v<Sub>x</Sub></Strip>
			<Givens x={96} y={290} w={960} at={plates} size={30} lines={[<>v<Sub>x</Sub> = 3.0 × 10⁷ m s⁻¹</>, 'L = 5.0 cm = 0.050 m', <>d = 2.0 cm, V = 400 V → E = {sci(MAIN.E, 1)} V m⁻¹</>]} />
			<HandTag x={560} y={440} text="cm → m" at={tel - 10} size={30} color={NAVY.ink} marks={[{kind: 'circle', cx: 400, cy: 359, rx: 90, ry: 24}]} markAt={tel - 16} />
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={only} ageAt={tel} size={36} oldSize={30}><span style={{color: TEAL.ink}}>only the horizontal motion sets t</span></Row>
				<Row at={tel} ageAt={which} size={48} oldSize={38}>t = 0.050 / 3.0 × 10⁷</Row>
				<Row at={which} size={52}>&nbsp;&nbsp;= <AnswerBox at={which + 20}><span>{sci(MAIN.t)} s</span></AnswerBox></Row>
			</div>
			<SideStage ticks={prog(f, push, 14)} />
			<Lbl x={G4.x1 - 16} y={M4.y0 + 8} at={centre} color={INK} size={28} anchor="end">enters on the centre line</Lbl>
			<HandTag x={G4.x1 + 40} y={G4.yBot + 170} text="t from the horizontal motion only" at={push + 10} size={30} color={TEAL.ink} />
			<CrossedChip x={96} y={780} at={push} crossAt={cap(id, push + 30)} size={32} caption="only v_x and L set t">bigger push → longer inside</CrossedChip>
			<Lbl x={G4.x1} y={G4.yTop - 110} at={how} color={INK_SOFT} size={28}>true scale: 12 px per mm</Lbl>
		</>
	);
};
export const S05: React.FC = () => {
	const id = 'deflection';
	const across = cue(id, 'Across the plates'), accel = cue(id, 'The acceleration, q E over m'), put = cue(id, 'Put in the time'), yIs = cue(id, 'and y is four point eight nine'), will = cue(id, 'Will it hit a plate'), room = cue(id, 'so it has one centimetre'), less = cue(id, 'Five millimetres is less');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={-30} size={30} w={980}>Electron enters on the centre line: find the time between the plates.</Strip>
			<Strip x={1100} y={176} at={-30} size={36} border={TEAL.stroke} color={INK}>t = L/v<Sub>x</Sub></Strip>
			<Strip x={1100} y={244} at={across} size={36} border={VIOLET.stroke} color={INK}>y = ½at², a = qE/m</Strip>
			<Givens x={96} y={290} w={960} at={-30} size={30} lines={[<>v<Sub>x</Sub> = 3.0 × 10⁷ m s⁻¹ | t = {sci(MAIN.t)} s</>, <>E = {sci(MAIN.E, 1)} V m⁻¹ | e = 1.602 × 10⁻¹⁹ C | m<Sub>e</Sub> = 9.109 × 10⁻³¹ kg</>]} />
			<div style={{position: 'absolute', left: 96, top: 410, display: 'flex', flexDirection: 'column', gap: 10, width: 980}}>
				<Row at={accel} ageAt={put} size={40} oldSize={32}>a = (1.602 × 10⁻¹⁹ × 2.0 × 10⁴)/(9.109 × 10⁻³¹)</Row>
				<Row at={accel + 40} ageAt={put} size={44} oldSize={34}>&nbsp;&nbsp;= <span style={{color: VIOLET.ink}}>{sci(MAIN.a)} m s⁻²</span></Row>
				<Row at={put} ageAt={will} size={44} oldSize={34}>y = ½ × {sci(MAIN.a)} × ({sci(MAIN.t)})²</Row>
				<Row at={yIs} size={52}>&nbsp;&nbsp;= <AnswerBox at={yIs + 20}><span style={{color: NAVY.ink}}>{sci(MAIN.y)} m (4.9 mm), up</span></AnswerBox></Row>
			</div>
			<HandTag x={760} y={280} text="starts from zero up" at={across + 16} size={30} color={VIOLET.ink} marks={[{kind: 'arrow', from: [990, 270], to: [1120, 262], bend: -0.2}]} markAt={across + 20} />
			<SideStage yAt={will} roomAt={room} />
			<HandTag x={G4.x2 - 10} y={G4.yTop - 66} text="room = half the gap" at={room + 16} size={30} color={NAVY.ink} anchor="end" />
			<Row at={less} size={44} style={{position: 'absolute', left: 1100, top: 780}}><AnswerBox at={less + 12}><span style={{color: NAVY.ink}}>4.9 mm &lt; 10 mm: exits</span></AnswerBox></Row>
			<Lbl x={1100} y={890} at={less + 20} color={INK_SOFT} size={28}>y = 4.9 mm, d/2 = 10 mm</Lbl>
		</>
	);
};
