// Scenes 7 to 11: how big is the acceleration (the velocity circle), the car's acceleration (the live speed
// slider), the net force points inwards, the flung-outwards mistake (the cut string, a field-motion run), the
// memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, BallSvg, Chip, CrossedChip, DISPLAY, Readouts, Row, VecArrow} from '../../physics/projectile/board';
import {DashLine, PenRing} from '../../physics/projectile/turning';
import {runMotion, stateAt} from '../../sims/field-motion';
import {A_CAR, R_CAR, V_CAR, cue, fx, kfm} from './common';
import {ACC, Boxed, Card, CarOnTrack, CarSvg, FORCE, Lbl, Line, NAVY, Title, Track, VEL, polar, vec} from './parts';

// ---------- 7. how big is the acceleration? (the velocity circle) ----------
const C7 = {cx: 440, cy: 600, R: 290};
const VC = {cx: 1300, cy: 450, R: 170};
export const S07: React.FC = () => {
	const id = 'size-of-a';
	const f = useCurrentFrame();
	const back = cue(id, 'Back to the car'), start = cue(id, 'start them from one point'), once = cue(id, 'goes once round a circle'), twoPiV = cue(id, 'two pi v'), period = cue(id, 'period'), andT = cue(id, 'And the period'), subst = cue(id, 'Substitute'), cancel = cue(id, 'two pis cancel'), leaving = cue(id, 'leaving a equals'), using = cue(id, 'Using v equals');
	const t = f >= once ? (f - once) / 30 : 0;
	const lap = Math.min(1, t / 12);
	const ang0 = 90; // the run starts at angle 0 moving up: velocity direction 90°
	const vdir = ang0 + 360 * (t / 12);
	const [tx, ty] = polar(VC.cx, VC.cy, VC.R, vdir);
	const trail = Math.min(359.9, 360 * lap);
	const [sx, sy] = polar(VC.cx, VC.cy, VC.R, ang0);
	const strike = prog(f, cancel, 12) > 0.5;
	return (
		<>
			<SceneHeading text="How big is the acceleration?" at={-40} size={56} />
			<FrameSvg>
				<Track cx={C7.cx} cy={C7.cy} R={C7.R} />
				<CarOnTrack cx={C7.cx} cy={C7.cy} R={C7.R} t={t} len={150} vArrow={back} vk={4} />
				<circle cx={VC.cx} cy={VC.cy} r={VC.R} fill="#e7dfcd" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 8" opacity={prog(f, start, 14)} />
				{f >= start ? Array.from({length: 12}, (_, i) => { const [dx, dy] = vec(VC.R, i * 30); return <line key={i} x1={VC.cx} y1={VC.cy} x2={VC.cx + dx} y2={VC.cy + dy} stroke={VEL.stroke} strokeWidth={3} opacity={0.75 * prog(f, start + i * 2, 10)} />; }) : null}
				{trail >= 359 ? <circle cx={VC.cx} cy={VC.cy} r={VC.R} fill="none" stroke={ACC.stroke} strokeWidth={8} /> : trail > 0.5 ? <path d={`M${sx},${sy} A${VC.R},${VC.R} 0 ${trail > 180 ? 1 : 0},0 ${tx},${ty}`} fill="none" stroke={ACC.stroke} strokeWidth={8} strokeLinecap="round" /> : null}
				{f >= start ? <VecArrow x={VC.cx} y={VC.cy} dx={tx - VC.cx} dy={ty - VC.cy} color={VEL.stroke} width={8} at={start} head={24} /> : null}
				<circle cx={VC.cx} cy={VC.cy} r={7} fill={INK} opacity={prog(f, start, 10)} />
			</FrameSvg>
			<Lbl x={VC.cx + VC.R + 14} y={VC.cy - 10} at={start} color={INK_SOFT} size={30}>radius v</Lbl>
			<Lbl x={VC.cx} y={VC.cy + VC.R + 44} at={twoPiV} color={ACC.ink} anchor="middle" size={34}>tip travels 2πv per lap</Lbl>
			<HandTag x={VC.cx - 260} y={VC.cy - VC.R - 30} text="tip circles once per lap" at={once + 10} size={30} color={VEL.ink} />
			<Lbl x={C7.cx} y={C7.cy + C7.R + 70} color={INK_SOFT} anchor="middle" size={30}>the car: one lap every 12 s</Lbl>
			<Card x={96} y={190} w={560} out={start - 6} border={VEL.stroke}>
				<Title color={VEL.ink}>The idea</Title>
				<Line size={34}>draw every velocity arrow from one point</Line>
			</Card>
			<div style={{position: 'absolute', left: 1000, top: 700, display: 'flex', flexDirection: 'column', gap: 4}}>
				<Row at={period} ageAt={subst} size={40} oldSize={32}><span style={{color: ACC.ink}}>a = 2πv ÷ T</span></Row>
				<Row at={andT} ageAt={subst} size={40} oldSize={32}>T = 2πr ÷ v</Row>
				<Row at={subst} ageAt={leaving} size={40} oldSize={32}>a = <s style={{textDecoration: strike ? 'line-through' : 'none'}}>2π</s>v × v ÷ (<s style={{textDecoration: strike ? 'line-through' : 'none'}}>2π</s>r)</Row>
				<Row at={leaving} size={TYPE.current}><Boxed at={leaving + 8} size={52}>a = v²/r</Boxed> <span style={{opacity: prog(f, using, 12)}}>= (ωr)²/r = ω²r</span></Row>
			</div>
		</>
	);
};

// ---------- 8. the car's acceleration (live speed slider) ----------
const C8 = {cx: 440, cy: 600, R: 290};
export const S08: React.FC = () => {
	const id = 'car-acceleration';
	const f = useCurrentFrame();
	const fifty = cue(id, 'over fifty'), centre = cue(id, 'centre'), falling = cue(id, 'falling object'), notice = cue(id, 'notice the square'), four = cue(id, 'four times the acceleration'), half = cue(id, 'half the acceleration');
	const vAt = (k: number) => kfm(k, [[notice, V_CAR], [notice + 30, V_CAR / 2], [four, V_CAR * 2], [half - 6, V_CAR]]);
	let ang = 0;
	for (let k = 1; k <= f; k++) ang += (vAt(k) / R_CAR) * (180 / Math.PI) / 30;
	const v = vAt(f);
	const probe = stateAt(runMotion({field: {kind: 'central', gm: v * v * R_CAR}, start: {x: R_CAR, y: 0, vx: 0, vy: v}, duration: 0.01, steps: 1}), 0);
	const a = Math.hypot(probe.ax, probe.ay);
	const [px, py] = polar(C8.cx, C8.cy, C8.R, ang);
	const [ix, iy] = [(C8.cx - px) / C8.R, (C8.cy - py) / C8.R];
	const aLen = a * 3.6;
	return (
		<>
			<SceneHeading text="The car's acceleration" at={-40} size={56} />
			<FrameSvg>
				<Track cx={C8.cx} cy={C8.cy} R={C8.R} />
				<CarSvg x={px} y={py} len={150} deg={ang + 90} />
				{f >= centre - 10 ? <VecArrow x={px} y={py} dx={ix * aLen} dy={iy * aLen} color={ACC.stroke} width={8} at={centre - 10} head={24} /> : null}
			</FrameSvg>
			<div style={{position: 'absolute', left: 900, top: 186, ...DISPLAY(38, INK, 700)}}>Find the car's centripetal acceleration.</div>
			<Chip x={900} y={250} at={-30} size={32} border={VEL.stroke} color={VEL.ink}>v = 26.2 m s⁻¹ (just found)</Chip>
			<Chip x={1330} y={250} at={-30} size={32} border={NAVY.stroke} color={NAVY.ink}>r = 50 m</Chip>
			<Chip x={1560} y={250} at={-30} size={32} border={INK}>a = v²/r</Chip>
			<div style={{position: 'absolute', left: 900, top: 340, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={fifty - 20} ageAt={notice} size={TYPE.current} oldSize={34}>a = 26.18² ÷ 50</Row>
				<Row at={centre - 20} ageAt={notice} size={TYPE.current} oldSize={34}>&nbsp;&nbsp;= <AnswerBox at={centre}>{fx(A_CAR, 1)} m s⁻²</AnswerBox> <span style={{color: ACC.ink}}>towards the centre</span></Row>
			</div>
			<CrossedChip x={900} y={500} at={centre + 10} crossAt={centre + 30} size={30} out={notice} caption="square the speed">a = 26.2 ÷ 50 = 0.52</CrossedChip>
			<Chip x={1440} y={500} at={falling} size={30} border={NAVY.stroke} color={NAVY.ink}>g = 9.8 m s⁻²</Chip>
			<HandTag x={1440} y={600} text="more than g" at={falling + 10} size={30} color={ACC.ink} />
			<Readouts x={900} y={640} w={500} size={44} at={notice - 4} title="live: speed slider" rows={[
				{label: 'v', value: fx(v, 1), unit: 'm s⁻¹', color: VEL.ink},
				{label: 'r', value: '50', unit: 'm', color: NAVY.ink},
				{label: 'a = v²/r', value: fx(a, 1), unit: 'm s⁻²', color: ACC.ink},
			]} />
			<Chip x={1440} y={680} at={four} size={34} border={INK}>2v: a × 4</Chip>
			<HandTag x={1440} y={790} text="×2 speed, ×4 a" at={four + 10} size={TYPE.handSmall} color={ACC.ink} />
			<Chip x={1440} y={850} at={half} size={34} border={INK}>2r: a × ½</Chip>
		</>
	);
};

// ---------- 9. the net force points inwards ----------
const C9 = {cx: 200, cy: 600, R: 560};
export const S09: React.FC = () => {
	const id = 'net-force-inwards';
	const f = useCurrentFrame();
	const netF = cue(id, 'net force points'), mv2 = cue(id, 'm v squared'), called = cue(id, 'called the centripetal'), isnt = cue(id, "isn't a new kind"), job = cue(id, 'a name for a job'), tension = cue(id, 'Tension');
	const car = {x: C9.cx + C9.R, y: C9.cy};
	return (
		<>
			<SceneHeading text="The net force points inwards" at={-40} size={56} />
			<FrameSvg>
				<path d={`M${polar(C9.cx, C9.cy, C9.R, 34).join(',')} A${C9.R},${C9.R} 0 0,1 ${polar(C9.cx, C9.cy, C9.R, -34).join(',')}`} fill="none" stroke="#d9d3c6" strokeWidth={230} />
				<CarSvg x={car.x} y={car.y} len={400} deg={90} />
				<VecArrow x={car.x - 40} y={car.y - 70} dx={-280} dy={0} color={ACC.stroke} width={10} at={-30} head={30} />
				<VecArrow x={car.x - 40} y={car.y + 70} dx={-280} dy={0} color={FORCE.stroke} width={10} at={netF} head={30} />
				<VecArrow x={car.x + 110} y={car.y - 120} dx={0} dy={-150} color={VEL.stroke} width={8} at={-30} head={24} />
				<circle cx={C9.cx + 40} cy={C9.cy} r={9} fill={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={car.x - 330} y={car.y - 100} color={ACC.ink} size={36}>a</Lbl>
			<Lbl x={car.x - 330} y={car.y + 116} at={netF} color={FORCE.ink} size={36}>F_net</Lbl>
			<Lbl x={car.x + 130} y={car.y - 240} color={VEL.ink} size={34}>v</Lbl>
			<Lbl x={C9.cx + 60} y={C9.cy + 50} color={NAVY.ink} size={30}>centre</Lbl>
			<HandTag x={car.x - 430} y={car.y + 10} text="same way as a" at={netF + 14} size={30} color={FORCE.ink} />
			<div style={{position: 'absolute', left: 1100, top: 200}}><Row at={mv2 - 10} size={TYPE.working}><Boxed at={mv2 + 4} size={52} color={FORCE.stroke}>F_net = ma = mv²/r</Boxed></Row></div>
			<Lbl x={1100} y={330} at={mv2} color={INK_SOFT} size={30}>towards the centre</Lbl>
			<Chip x={1100} y={380} at={called} size={34} w={724} border={FORCE.stroke}>centripetal force = the inward net force</Chip>
			<Card x={1100} y={480} w={420} at={isnt} border={INK_SOFT}>
				<Title>Free-body sketch</Title>
				<div style={{marginTop: 8, position: 'relative', height: 110}}><CrossedChip x={0} y={0} at={isnt + 6} crossAt={isnt + 26} size={30} caption="not an extra arrow">+ "centripetal force"</CrossedChip></div>
			</Card>
			<HandTag x={1100} y={720} text="a job, not a force" at={job} size={TYPE.handSmall} color={FORCE.ink} />
			{['tension', 'friction', 'gravity', 'normal force'].map((t, i) => <Chip key={t} x={1100 + (i % 2) * 300} y={790 + Math.floor(i / 2) * 68} at={tension + i * 8} size={32}>{t}</Chip>)}
			<div style={{position: 'absolute', left: 96, top: 940, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30, color: INK_SOFT}}>top view: a car on a bend at a steady speed</div>
		</>
	);
};

// ---------- 10. the flung-outwards mistake (the cut string) ----------
const TB = {x: 120, y: 200, w: 940, h: 720, px: 590, py: 560, ppm: 460};
const R10 = 0.5, V10 = (2 * Math.PI * R10) / 6;
export const S10: React.FC = () => {
	const id = 'flung-outwards';
	const f = useCurrentFrame();
	const picture = cue(id, 'Picture a steel ball'), cut = cue(id, 'string', 2), tangent = cue(id, 'tangent'), fly = cue(id, 'fly straight out'), nothing = cue(id, 'Nothing was'), inC = cue(id, 'pulling it in');
	const tCut = cut / 30;
	const run = React.useMemo(() => runMotion({field: {kind: 'custom', accel: (x, y, _vx, _vy, t) => (t < tCut ? [(-x * V10 * V10) / (R10 * R10), (-y * V10 * V10) / (R10 * R10)] : [0, 0])}, start: {x: R10, y: 0, vx: 0, vy: V10}, duration: 40, steps: 8000}), [tCut]);
	const t = f / 30;
	const s = stateAt(run, Math.min(t, 40));
	const rel = stateAt(run, tCut);
	const P = (x: number, y: number): [number, number] => [TB.px + x * TB.ppm, TB.py - y * TB.ppm];
	const [bx, by] = P(s.x, s.y), [rx, ry] = P(rel.x, rel.y);
	const cutDone = f >= cut;
	const ul = Math.hypot(rel.vx, rel.vy) || 1, tdx = rel.vx / ul, tdy = -rel.vy / ul;
	const sp = Math.hypot(s.vx, s.vy) || 1;
	const off = Math.hypot(bx - TB.px, by - TB.py) > 900;
	return (
		<>
			<SceneHeading text="Flung outwards? No." at={-40} size={56} />
			<FrameSvg>
				<rect x={TB.x} y={TB.y} width={TB.w} height={TB.h} rx={14} fill="#efe6d4" stroke={INK_SOFT} strokeWidth={3} />
				<circle cx={TB.px} cy={TB.py} r={R10 * TB.ppm} fill="none" stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 8" />
				{!cutDone ? <line x1={TB.px} y1={TB.py} x2={bx} y2={by} stroke={INK} strokeWidth={3} /> : <line x1={TB.px} y1={TB.py} x2={TB.px + (rx - TB.px) * 0.12} y2={TB.py + (ry - TB.py) * 0.12} stroke={INK} strokeWidth={3} />}
				{!cutDone ? <VecArrow x={bx} y={by} dx={(TB.px - bx) * 0.42} dy={(TB.py - by) * 0.42} color={FORCE.stroke} width={7} at={picture} head={22} /> : null}
				<defs><clipPath id="v11-table"><rect x={TB.x} y={TB.y} width={TB.w} height={TB.h} rx={14} /></clipPath></defs>
				<g clipPath="url(#v11-table)">
				<DashLine x1={rx - tdx * 500} y1={ry - tdy * 500} x2={rx + tdx * 900} y2={ry + tdy * 900} color={VEL.stroke} at={tangent} width={3} dash="12 9" />
				{f >= fly ? <g><DashLine x1={TB.px} y1={TB.py} x2={TB.px + (rx - TB.px) * 2.2} y2={TB.py + (ry - TB.py) * 2.2} color={INK_SOFT} at={fly} width={4} dash="10 8" /></g> : null}
				{f >= inC ? <VecArrow x={rx} y={ry} dx={(TB.px - rx) * 0.42} dy={(TB.py - ry) * 0.42} color={FORCE.stroke} width={4} at={inC} head={18} /> : null}
				<circle cx={TB.px} cy={TB.py} r={12} fill={NAVY.stroke} />
				{off || !(bx > TB.x && bx < TB.x + TB.w && by > TB.y && by < TB.y + TB.h) ? null : <BallSvg cx={bx} cy={by} d={60} />}
				{off ? null : <VecArrow x={bx} y={by} dx={(s.vx / sp) * 120} dy={(-s.vy / sp) * 120} color={VEL.stroke} width={7} at={-30} head={22} />}
				{cutDone ? Array.from({length: 12}, (_, i) => { const tt = tCut + (i + 1) * 0.5; if (tt > t) return null; const q = stateAt(run, tt); const [qx, qy] = P(q.x, q.y); return qx > TB.x && qx < TB.x + TB.w && qy > TB.y && qy < TB.y + TB.h ? <circle key={i} cx={qx} cy={qy} r={26} fill="none" stroke={INK_SOFT} strokeWidth={3} /> : null; }) : null}
				{cutDone ? <line x1={rx} y1={ry} x2={bx} y2={by} stroke={VEL.stroke} strokeWidth={4} opacity={0.9} /> : null}
				{cutDone ? <PenRing cx={rx} cy={ry} rx={44} ry={44} at={tangent + 6} color={VEL.stroke} /> : null}
				</g>
			</FrameSvg>
			<Lbl x={TB.px + 20} y={TB.py + 40} color={NAVY.ink} size={30}>peg</Lbl>
			<Lbl x={TB.x + 20} y={TB.y + 40} color={INK_SOFT} size={30}>top view: a smooth table</Lbl>
			<HandTag x={rx + tdx * 380 + 20} y={ry + tdy * 380} text="keeps going straight" at={tangent + 20} size={30} color={VEL.ink} />
			<Lbl x={rx + 30} y={ry + 80} at={inC} color={FORCE.ink} size={30}>the string only pulled in</Lbl>
			<Card x={1120} y={200} w={704} border={INK}>
				<Title>A ball on a string, round a peg</Title>
				<Line size={34} color={FORCE.ink} at={picture}>tension: the only sideways force, pulling in</Line>
				<Line size={34} at={cut}>cut the string: no net force</Line>
				<Line size={34} color={VEL.ink} at={tangent}>it keeps its velocity: along the tangent</Line>
			</Card>
			<Chip x={1120} y={520} at={-30} size={32} border={VEL.stroke}>tangent: the line that just touches the circle</Chip>
			<CrossedChip x={1120} y={620} at={fly} crossAt={nothing} size={36} caption="nothing pushes it out">flung outwards</CrossedChip>
			<HandTag x={1120} y={820} text="pull in, never push out" at={inC + 10} size={TYPE.handSmall} color={FORCE.ink} />
		</>
	);
};

// ---------- 11. memory aid ----------
const C11 = {cx: 440, cy: 600, R: 290};
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const twice = cue(id, 'Twice as fast'), holds = cue(id, 'mass and the radius'), overR = cue(id, 'squared over r');
	const pz = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - twice) / 24)));
	return (
		<>
			<SceneHeading text="Why the square matters" at={-40} size={56} />
			<FrameSvg>
				<Track cx={C11.cx} cy={C11.cy} R={C11.R} />
				<CarOnTrack cx={C11.cx} cy={C11.cy} R={C11.R} t={f / 30} len={110} vArrow={-30} aArrow={-30} vk={4} ak={9} />
			</FrameSvg>
			<Card x={1000} y={200} w={824} pad="18px 36px 22px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, lineHeight: 1.05, transform: `scale(${1 + 0.05 * pz})`, transformOrigin: 'left center'}}><span style={{color: FORCE.ink}}>Twice as fast,</span><br /><span style={{color: VEL.ink}}>four times the pull.</span></div>
				<Line size={44} at={overR - 20} mt={14}><Boxed at={overR} size={44}>F = m<span style={{color: VEL.ink, border: `3px solid ${ACC.stroke}`, borderRadius: 999, padding: '0 6px'}}>v²</span>/r</Boxed></Line>
			</Card>
			<Chip x={1000} y={620} at={holds} size={34} border={NAVY.stroke} color={NAVY.ink}>only when: same mass, same radius</Chip>
			<Lbl x={C11.cx} y={C11.cy + C11.R + 70} color={INK_SOFT} anchor="middle" size={30}>2 × v means 2² = 4 × a, so 4 × F</Lbl>
		</>
	);
};

