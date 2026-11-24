// Scenes 6 to 10: total energy on the level circle (the rear-view car on the bank with a height bracket and the
// energy bars), the energy mistake, the vertical circle (field motion engine with a string; the weight split at a
// side point; live v, K, U, E), using energy between two points (calculation beside the circle), and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, TYPE} from '../../shared/tokens';
import {AidCard, AnswerBox, BallSvg, Bracket, CrossedChip, DISPLAY, ROLE, Readouts, Row, Sub, Sup, VecArrow} from '../../physics/projectile/board';
import {IntoScreen, RearCar, RoadSection, rearCarGeom} from '../../physics/circular/road-cone';
import {CAR, G, HEAD, HEAD_SIZE, LAP_FRAMES, VC, VC_RUN, cue, mono} from './common';
import {AMBER, BendCar, BendRing, CarTop, EC, EnergyBars, KC, LAP0, Lbl, NAVY, RightMark, Ring, SvgCard, UC, VEL, VERT, VertStage, carOn, fx, sci, stateAtAngle, vcState, vertAt} from './parts';

const MSu: React.FC = () => <> m s<Sup>−1</Sup></>;
const Boxed: React.FC<{children: React.ReactNode; size?: number; color?: string}> = ({children, size = TYPE.current, color = INK}) => (
	<div style={{display: 'inline-block', background: CARD, border: `5px solid ${color}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(size, INK)}}>{children}</div>
);

// ---------- 6. total energy on the level circle ----------
const RD6 = {cx: 560, cy: 760, half: 420, tilt: 12, w: 380};
export const S06: React.FC = () => {
	const id = 'total-energy';
	const f = useCurrentFrame();
	const total = cue(id, 'What about the total'), height = cue(id, "height doesn't change"), gpe = cue(id, 'gravitational potential energy'), kin = cue(id, 'kinetic energy stays'), mech = cue(id, 'total mechanical energy'), engine = cue(id, "A real car's engine"), air = cue(id, 'air resistance'), still = cue(id, 'still zero');
	const g = rearCarGeom(RD6.cx, RD6.cy, RD6.w, RD6.tilt);
	const [cx, cy] = g.com;
	const bx = 330;
	const KJ = 220 / CAR.K; // px per joule: K bar 220 px
	const Uj = 140 / KJ; // the U bar's size (no value is given: the height is constant)
	const laps = LAP0 + Math.floor(f / LAP_FRAMES);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<RoadSection cx={RD6.cx} cy={RD6.cy} half={RD6.half} tilt={RD6.tilt} />
				<RearCar cx={RD6.cx} cy={RD6.cy} w={RD6.w} tilt={RD6.tilt} />
				<IntoScreen x={RD6.cx + 260} y={RD6.cy - 360} />
				<line x1={96} x2={RD6.cx} y1={RD6.cy} y2={RD6.cy} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="12 9" opacity={prog(f, height, 12)} />
				<line x1={bx} x2={cx} y1={cy} y2={cy} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="8 7" opacity={prog(f, height, 12)} />
				<circle cx={cx} cy={cy} r={8} fill={NAVY.stroke} opacity={prog(f, height, 12)} />
				<Bracket x1={bx} y1={RD6.cy} x2={bx} y2={cy} color={NAVY.stroke} at={height} />
				<EnergyBars x={1250} base={760} k={KJ} K={CAR.K} U={Uj} at={total} pulseE={mech} />
			</FrameSvg>
			<Lbl x={RD6.cx + 290} y={RD6.cy - 360} color={VEL.ink} size={30}>moving into the screen: laps {laps}</Lbl>
			<Lbl x={bx - 16} y={(RD6.cy + cy) / 2 + 10} at={height} color={NAVY.ink} anchor="end" size={34}>h</Lbl>
			<Lbl x={110} y={RD6.cy + 40} at={height} color={NAVY.ink} size={28}>reference level</Lbl>
			<HandTag x={100} y={480} text="h: constant" at={height + 16} size={TYPE.handSmall} color={NAVY.ink} />
			<Lbl x={1305} y={760 - CAR.K * KJ - 18} at={kin} color={KC.ink} anchor="middle" size={28}>{sci(CAR.K)} J</Lbl>
			<Lbl x={1475} y={760 - 140 - 18} at={gpe} color={UC.ink} anchor="middle" size={28}>U = mgh</Lbl>
			<Lbl x={1645} y={760 - 360 - 22} at={mech} color={EC.ink} anchor="middle" size={30}>E = K + U</Lbl>
			<div style={{position: 'absolute', left: 1180, top: 186, display: 'flex', flexDirection: 'column', gap: 4}}>
				<Row at={gpe} size={34}><span style={{color: UC.ink}}>h constant, so U constant</span></Row>
				<Row at={kin} size={34}><span style={{color: KC.ink}}>v constant, so K constant</span></Row>
			</div>
			<Row at={mech} size={40} style={{position: 'absolute', left: 1180, top: 820}}><AnswerBox at={mech + 8}><span>{'speed and height constant,\nso E constant'}</span></AnswerBox></Row>
			<HandTag x={1645} y={335} text="level circle only" at={mech + 30} size={30} color={NAVY.ink} anchor="middle" />
			<SvgCard x={96} y={186} w={600} h={200} title="from above: a real car" at={engine}>
				<CarTop x={300} y={120} len={150} deg={0} />
				<VecArrow x={380} y={110} dx={130} dy={0} color={AMBER.stroke} width={7} head={22} at={engine + 6} />
				<VecArrow x={220} y={130} dx={-130} dy={0} color={AMBER.stroke} width={7} head={22} at={air} />
				<text x={520} y={100} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={AMBER.ink}>drive</text>
				{f >= air ? <text x={84} y={180} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={AMBER.ink}>air and rolling resistance</text> : null}
			</SvgCard>
			<FrameSvg><Ring cx={396} cy={306} rx={290} ry={60} at={still + 6} color={AMBER.stroke} /></FrameSvg>
			<Row at={still - 10} size={34} style={{position: 'absolute', left: 96, top: 400}}>W<Sub>drive</Sub> + W<Sub>resistance</Sub> = 0</Row>
		</>
	);
};

// ---------- 7. the energy mistake ----------
const B7 = {cx: 480, cy: 600, R: 250, w: 100, car: 130};
export const S07: React.FC = () => {
	const id = 'energy-mistake';
	const f = useCurrentFrame();
	const always = cue(id, 'always changes the velocity'), only = cue(id, 'only changes the speed'), none = cue(id, 'none of it does');
	const k = f * 1.2;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BendRing g={B7} />
				<BendCar g={B7} k={k} vAt={-60} fAt={-60} vLen={150} right={1} />
				<Ring cx={1265} cy={236} rx={400} ry={62} at={none + 24} color={ROLE.slate.stroke} />
			</FrameSvg>
			<HandTag x={B7.cx} y={B7.cy - 40} text="direction changes" at={always + 10} size={TYPE.handSmall} color={VEL.ink} anchor="middle" />
			<HandTag x={B7.cx} y={B7.cy + 40} text="speed stays" at={none} size={TYPE.handSmall} color={KC.ink} anchor="middle" />
			<CrossedChip x={900} y={200} at={0} crossAt={none + 6} size={36} caption="UCM: F at 90° to v, so K constant">net force, so it must gain energy</CrossedChip>
			<div style={{position: 'absolute', left: 900, top: 420, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={always} size={TYPE.current}><span style={{color: VEL.ink}}>velocity: yes, always (it turns)</span></Row>
				<Row at={only} size={TYPE.current}>speed: only if F has a part</Row>
				<Row at={only + 20} size={TYPE.current}>&nbsp;&nbsp;along the path</Row>
				<Row at={none - 10} size={36}><span style={{color: AMBER.ink}}>here F is across the path everywhere</span></Row>
			</div>
		</>
	);
};

// ---------- 8. a vertical circle: beyond uniform circular motion ----------
const SLOW = 5;
const TARGET = (-60 * Math.PI) / 180; // pause point: 60 degrees from the bottom on the left side
/** Run time (s) of the first pass through the pause point (going down the left side) at or after time t0. */
const passAfter = (t0: number) => {
	const dt = 0.002;
	for (let t = t0; t < VC_RUN.duration - dt; t += dt) {
		const a = vcState(t * 30 * SLOW), b = vcState((t + dt) * 30 * SLOW);
		const ya = a.y + VC.r * Math.cos(TARGET), yb = b.y + VC.r * Math.cos(TARGET);
		if (a.x < 0 && ya >= 0 && yb < 0) return t;
	}
	return t0;
};
export const S08: React.FC = () => {
	const id = 'vertical-contrast';
	const f = useCurrentFrame();
	const beyond = cue(id, 'beyond uniform circular'), ball = cue(id, 'A ball on a string'), tension = cue(id, 'The tension still points'), rightA = cue(id, 'right angles to the motion'), noWork = cue(id, 'still does no work'), weight = cue(id, 'the weight always points'), except = cue(id, 'Except at the very top'), part = cue(id, 'part of the weight points along'), gravity = cue(id, 'So gravity does work'), speeds = cue(id, 'speeds up'), wayUp = cue(id, 'slows on the way up'), nonU = cue(id, 'non-uniform');
	const tStar = passAfter(part / 30 / SLOW);
	const off = tStar * 30 * SLOW - part; // run frames ahead of the scene clock, so the pass lands on the cue
	const resume = Math.max(part + 40, gravity + 10);
	const runK = f < part ? f + off : f < resume ? part + off : f - (resume - part) + off;
	const st = vcState(runK);
	const b = vertAt(st);
	const split = prog(f, part, 14) * (1 - prog(f, resume + 30, 14));
	const vk = 22;
	const mgL = 140;
	const phi = Math.atan2(st.x, -st.y); // angle from the bottom
	const alongLen = mgL * Math.abs(Math.sin(phi)), acrossLen = mgL * Math.abs(Math.cos(phi));
	const tdir: [number, number] = [b.v[0], b.v[1]];
	const sgn = Math.sign(tdir[1] * 1) || 1; // along part points the way gravity pulls along the path (down the path)
	const along: [number, number] = sgn > 0 ? tdir : [-tdir[0], -tdir[1]];
	const E = VC.E, h = st.y + VC.r, sp = Math.hypot(st.vx, st.vy);
	const K = 0.5 * VC.m * sp * sp, U = VC.m * G * h;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<VertStage st={st} />
				<VecArrow x={b.x} y={b.y} dx={b.v[0] * sp * vk} dy={b.v[1] * sp * vk} color={VEL.stroke} width={7} head={22} at={ball} />
				<VecArrow x={b.x} y={b.y} dx={b.toP[0] * 110} dy={b.toP[1] * 110} color={AMBER.stroke} width={8} head={24} at={tension} />
				{f >= rightA ? <RightMark x={b.x} y={b.y} a={b.v} b={b.toP} s={22} opacity={prog(f, rightA, 10)} /> : null}
				<VecArrow x={b.x} y={b.y} dx={0} dy={mgL} color={AMBER.stroke} width={8} head={24} at={weight} />
				{split > 0.01 ? <g opacity={split}>
					<VecArrow x={b.x} y={b.y} dx={along[0] * alongLen} dy={along[1] * alongLen} color={AMBER.stroke} width={6} head={20} dash="12 8" />
					<VecArrow x={b.x} y={b.y} dx={-b.toP[0] * acrossLen} dy={-b.toP[1] * acrossLen} color={ROLE.y.stroke} width={6} head={20} dash="12 8" />
					<line x1={b.x + along[0] * alongLen} y1={b.y + along[1] * alongLen} x2={b.x} y2={b.y + mgL} stroke={INK} strokeWidth={2} strokeDasharray="5 6" />
				</g> : null}
				<g opacity={split}><Ring cx={VERT.px - VERT.R * Math.sin(Math.PI / 3) + 0.5 * 60} cy={VERT.py + VERT.R * Math.cos(Math.PI / 3) + 0.866 * 60} rx={70} ry={50} at={gravity} color={KC.stroke} /></g>
				<EnergyBars x={1290} base={880} k={25} K={K} U={U} w={100} gap={60} at={speeds} pulseE={nonU} />
			</FrameSvg>
			<Enter at={beyond} style={{position: 'absolute', left: 96, top: 186}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: `3px solid ${INK}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(32, INK, 800)}}>non-uniform circular motion (extension)</div>
			</Enter>
			<Lbl x={b.x + b.toP[0] * 120 + 14} y={b.y + b.toP[1] * 120 - 8} at={tension} color={AMBER.ink} size={30}>F<Sub>T</Sub></Lbl>
			<Lbl x={b.x + 18} y={b.y + mgL - 8} at={weight} color={AMBER.ink} size={30}>mg</Lbl>
			{split > 0.5 ? <Lbl x={b.x + along[0] * alongLen * 0.5 + 44} y={b.y + along[1] * alongLen * 0.5 - 6} color={KC.ink} size={30}>does work</Lbl> : null}
			<HandTag x={820} y={880} text="tension: across, no work" at={noWork} size={30} color={AMBER.ink} />
			<HandTag x={96} y={890} text="weight's along part: does work" at={gravity} size={30} color={KC.ink} />
			<Enter at={-30} out={except - 10} style={{position: 'absolute', left: 860, top: 270, width: 340}}>
				<div style={{background: CARD, borderRadius: 18, border: `3px solid ${INK}`, padding: '10px 20px 14px'}}>
					<div style={{...DISPLAY(26, INK, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>Forces on the ball</div>
					<div style={{...DISPLAY(32, AMBER.ink, 800), whiteSpace: 'normal', opacity: prog(f, tension, 12)}}>tension: along the string, to the centre</div>
					<div style={{...DISPLAY(32, AMBER.ink, 800), whiteSpace: 'normal', marginTop: 6, opacity: prog(f, weight, 12)}}>weight: straight down</div>
					<div style={{...DISPLAY(30, VEL.ink, 700), whiteSpace: 'normal', marginTop: 6, opacity: prog(f, ball, 12)}}>velocity: along the path</div>
				</div>
			</Enter>
			<SvgCard x={880} y={270} w={300} h={210} title="at the top" at={except} out={speeds}>
				<circle cx={150} cy={150} r={70} fill="none" stroke={INK} strokeWidth={2} strokeDasharray="7 6" />
				<BallSvg cx={150} cy={80} d={26} />
				<VecArrow x={150} y={80} dx={0} dy={60} color={AMBER.stroke} width={5} head={14} />
				<VecArrow x={150} y={80} dx={-70} dy={0} color={VEL.stroke} width={5} head={14} />
				<text x={182} y={62} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 26}} fill={KC.ink}>along: 0</text>
			</SvgCard>
			<SvgCard x={880} y={500} w={300} h={210} title="at the bottom" at={except + 20} out={speeds}>
				<circle cx={150} cy={100} r={70} fill="none" stroke={INK} strokeWidth={2} strokeDasharray="7 6" />
				<BallSvg cx={150} cy={170} d={26} />
				<VecArrow x={150} y={170} dx={0} dy={34} color={AMBER.stroke} width={5} head={12} />
				<VecArrow x={150} y={170} dx={70} dy={0} color={VEL.stroke} width={5} head={14} />
				<text x={30} y={186} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 26}} fill={KC.ink}>along: 0</text>
			</SvgCard>
			<Readouts x={1240} y={186} w={584} size={44} at={ball} title="live: the ball (U = 0 at bottom)" rows={[
				{label: 'v', value: fx(sp, 2), unit: <MSu />, color: VEL.ink},
				{label: 'K', value: fx(K, 2), unit: 'J', color: KC.ink},
				{label: 'U', value: fx(U, 2), unit: 'J', color: UC.ink},
				{label: 'E = K + U', value: fx(E, 2), unit: 'J', color: EC.ink, ring: nonU},
			]} />
			<Lbl x={1290} y={545} at={wayUp} color={INK} size={28}>K and U trade; E stays {fx(E, 2)} J</Lbl>
			<Lbl x={96} y={250 + 46} at={ball} color={ROLE.slate.ink} size={26}>arrows not to scale</Lbl>
		</>
	);
};

// ---------- 9. using energy between two points ----------
const V9 = {px: 330, py: 600, R: 200, ball: 44};
export const S09: React.FC = () => {
	const id = 'energy-two-points';
	const f = useCurrentFrame();
	const say = cue(id, 'Say a zero'), down = cue(id, 'way down to the bottom'), radii = cue(id, 'falls two radii'), gDoes = cue(id, 'Gravity does'), j784 = cue(id, 'seven point eight four'), extra = cue(id, 'extra kinetic energy'), vsq = cue(id, 'v squared is'), sixteen = cue(id, 'sixteen plus'), v688 = cue(id, 'six point eight eight');
	const a = kf(f, mono([[down, Math.PI], [down + 60, 0]], 10)); // angle from the bottom: top to bottom down the left side
	const phi = -a; // left side
	const at = VC.at(Math.abs(phi));
	const st = stateAtAngle(phi, at.v);
	const tr = prog(f, extra, 40);
	const K = 0.5 * VC.m * VC.vTop ** 2 + VC.Wg * tr, U = VC.Wg * (1 - tr);
	const b = vertAt(st, V9);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<VertStage st={st} g={V9} />
				<VecArrow x={b.x} y={b.y} dx={b.v[0] * at.v * 18} dy={b.v[1] * at.v * 18} color={VEL.stroke} width={6} head={20} />
				<Bracket x1={560} y1={V9.py - V9.R} x2={560} y2={V9.py + V9.R} color={NAVY.stroke} at={radii} label={<>h = 2r = {fx(2 * VC.r, 1)} m</>} lx={V9.px} ly={V9.py + V9.R + 70} size={34} />
				<EnergyBars x={700} base={800} k={25} K={K} U={U} showE={false} w={100} gap={40} at={say} />
			</FrameSvg>
			<HandTag x={575} y={V9.py - 20} text="falls 2r" at={radii + 10} size={30} color={NAVY.ink} />
			<HandTag x={690} y={470} text={`+${fx(VC.Wg, 2)} J of K`} at={extra + 30} size={30} color={KC.ink} />
			<Enter at={-30} style={{position: 'absolute', left: 1000, top: 176}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: `3px solid ${INK}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(32, INK, 800)}}>Find the ball's speed at the bottom (no losses).</div>
			</Enter>
			<Enter at={say} style={{position: 'absolute', left: 1000, top: 244, width: 824}}>
				<div style={{display: 'inline-block', background: NAVY.soft, borderRadius: 12, border: `3px solid ${NAVY.stroke}`, padding: '4px 18px 6px', ...DISPLAY(30, NAVY.ink, 700), whiteSpace: 'normal'}}>m = 0.50 kg | r = 0.80 m | v<Sub>top</Sub> = 4.0<MSu /> | g = 9.8 m s<Sup>−2</Sup></div>
			</Enter>
			<Enter at={say + 20} style={{position: 'absolute', left: 1000, top: 340}}><Boxed size={44}>½mv<Sub>top</Sub>² + mg(2r) = ½mv<Sub>bottom</Sub>²</Boxed></Enter>
			<Enter at={say + 30} out={radii - 10} style={{position: 'absolute', left: 1000, top: 440, width: 760}}>
				<div style={{background: CARD, borderRadius: 18, border: `3px solid ${INK}`, padding: '10px 22px 14px'}}>
					<div style={{...DISPLAY(26, INK, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>At the top (U = 0 at the bottom)</div>
					<div style={{...DISPLAY(38, VEL.ink, 800)}}>v = 4.0<MSu /></div>
					<div style={{...DISPLAY(38, KC.ink, 800)}}>K = ½ × 0.50 × 4.0² = {fx(VC.at(Math.PI).K, 2)} J</div>
					<div style={{...DISPLAY(38, UC.ink, 800)}}>U = mg(2r) = {fx(VC.at(Math.PI).U, 2)} J</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 1000, top: 440, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={radii} ageAt={vsq} size={TYPE.current} oldSize={32}>h = 2r = 2 × 0.80 = 1.6 m</Row>
				<Row at={gDoes} ageAt={vsq} size={38} oldSize={32}>W<Sub>gravity</Sub> = mgh = 0.50 × 9.8 × 1.6<span style={{opacity: prog(f, j784, 10)}}> = {fx(VC.Wg, 2)} J</span></Row>
				<Row at={vsq} size={TYPE.current}>v<Sub>bottom</Sub>² = v<Sub>top</Sub>² + 4gr</Row>
				<Row at={sixteen} size={TYPE.current}>&nbsp;&nbsp;= 16 + {fx(4 * G * VC.r, 2)} = {fx(VC.vb2, 2)}</Row>
				<Row at={v688 - 10} size={52}><AnswerBox at={v688}><span>v<Sub>bottom</Sub> = {fx(VC.vBottom, 2)}<MSu /></span></AnswerBox></Row>
			</div>
			<CrossedChip x={1000} y={790} at={extra} crossAt={extra + 30} size={32} caption={`gravity did ${fx(VC.Wg, 2)} J`}>v<Sub>bottom</Sub> = 4.0<MSu /></CrossedChip>
		</>
	);
};

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const steers = cue(id, 'Across steers'), across = cue(id, 'part of a force across'), only = cue(id, 'Only the part along'), down = cue(id, 'slows it down');
	const mini = {cx: 280, cy: 330, R: 190, w: 64, car: 96};
	const c = carOn(mini, LAP_FRAMES / 4); // the car at 12 o'clock, moving left
	const arcPath = `M${mini.cx + mini.R * Math.cos(Math.PI / 6)},${mini.cy - mini.R * Math.sin(Math.PI / 6)} A ${mini.R} ${mini.R} 0 0 0 ${mini.cx - mini.R * Math.cos(Math.PI / 6)},${mini.cy - mini.R * Math.sin(Math.PI / 6)}`;
	const st = stateAtAngle(-Math.PI / 3, VC.at(Math.PI / 3).v);
	const pv = {px: 280, py: 150, R: 110, ball: 34};
	const bb = vertAt(st, pv);
	const alongL = 90 * Math.sin(Math.PI / 3);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<SvgCard x={96} y={186} w={560} h={330} title="level car: force across">
				<path d={arcPath} fill="none" stroke="#c3c6c9" strokeWidth={mini.w} />
				<path d={arcPath} fill="none" stroke="#f4f1ea" strokeWidth={3} strokeDasharray="14 12" />
				<CarTop x={c.x} y={c.y} len={96} deg={c.deg} />
				<VecArrow x={c.x} y={c.y} dx={c.toC[0] * 120} dy={c.toC[1] * 120} color={AMBER.stroke} width={7} head={22} />
				<VecArrow x={c.x} y={c.y} dx={c.v[0] * 90} dy={c.v[1] * 90} color={VEL.stroke} width={6} head={18} />
			</SvgCard>
			<SvgCard x={96} y={550} w={560} h={360} title="vertical circle: weight split">
				<g transform="translate(0, 60)">
					<VertStage st={st} g={pv} />
					<VecArrow x={bb.x} y={bb.y} dx={0} dy={90} color={AMBER.stroke} width={6} head={18} />
					<VecArrow x={bb.x} y={bb.y} dx={bb.v[0] * alongL} dy={bb.v[1] * alongL} color={AMBER.stroke} width={5} head={16} dash="10 7" />
				</g>
			</SvgCard>
			<Lbl x={96 + c.x + 24} y={186 + c.y + 100} at={down} color={AMBER.ink} size={30}>across: steers</Lbl>
			<Lbl x={96 + bb.x + bb.v[0] * alongL + 20} y={550 + 60 + bb.y + bb.v[1] * alongL - 14} at={down + 10} color={KC.ink} size={30}>along: speeds</Lbl>
			<AidCard x={740} y={240} w={1084} at={-30}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, lineHeight: 1.1, color: INK}}><span style={{color: AMBER.ink, opacity: prog(f, steers - 6, 12)}}>Across steers,</span> <span style={{color: KC.ink, opacity: prog(f, steers + 20, 12)}}>along speeds.</span></div>
			</AidCard>
			<div style={{position: 'absolute', left: 740, top: 520, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={across} size={38}><span style={{color: AMBER.ink}}>across the path: turns the velocity</span></Row>
				<Row at={only} size={38}><span style={{color: KC.ink}}>along the path: speeds up or slows down</span></Row>
				<Row at={only + 30} size={34}>(only the along part does work)</Row>
			</div>
		</>
	);
};
