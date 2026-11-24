// Scenes 1 to 6: the hook (opening on last time's final frame, the jib slewing in top view), speed versus
// velocity, which way the velocity changes (the Δv tray), describing the motion (the car on its track), the
// worked example, further out is faster (the jib again).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, GroundLine, Readouts, Row, VecArrow} from '../../physics/projectile/board';
import {TailToTail, TopSlew} from '../../physics/projectile/balance';
import {CraneSvg, DashLine, PenRing, RightMark} from '../../physics/projectile/turning';
import {V10FinalFrame} from '../phys-y12-m5-v10/s3';
import {HEAD, T_CAR, cue, fx, hold, kfm} from './common';
import {ACC, Boxed, Card, CarOnTrack, Lbl, Line, NAVY, Title, Track, VEL, polar, vec} from './parts';

const TV = {cx: 620, cy: 560, R: 290};
const W_DEG = 0.9;
const SLEW_ARROWS = [0, 90, 180, 270].map(deg => ({deg, at: -30}));
const DIRS = [90, 180, 270, 0];

// ---------- 1. hook: is the tip accelerating? ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const turning = cue(id, 'turning at a steady rate'), length = cue(id, 'length'), accel = cue(id, 'accelerating'), pred = cue(id, 'prediction');
	const hd = hold(id);
	const fade = prog(f, 10, 24);
	const pz = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - length) / 30)));
	return (
		<>
			{fade < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - fade}}><V10FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: fade}}>
				<SceneHeading text="Constant speed: is it accelerating?" at={14} size={52} />
				<FrameSvg>
					<TopSlew cx={TV.cx} cy={TV.cy} R={TV.R} angle={45 + W_DEG * f} trace={359.9} arrows={SLEW_ARROWS} vLen={130 + 12 * pz} />
					<TailToTail x={1500} y={540} dirs={DIRS} len={130} at={-30} />
					{f >= turning ? <g opacity={prog(f, turning, 20)} transform={`translate(${-200 * (1 - prog(f, turning, 20))} 0)`}>
						<GroundLine x1={96} x2={330} y={930} />
						<CraneSvg mastX={150} groundY={930} s={0.2} />
					</g> : null}
				</FrameSvg>
				<HandTag x={100} y={700} text="same crane, from above" at={turning + 10} size={30} color={NAVY.ink} />
				<Lbl x={TV.cx} y={TV.cy + TV.R + 60} color={INK_SOFT} anchor="middle" size={30}>top view: the jib turning at a steady rate</Lbl>
				<Chip x={96} y={200} at={-30} size={34} border={VEL.stroke}>speed: constant</Chip>
				{f >= length ? <FrameSvg><PenRing cx={232} cy={232} rx={150} ry={42} at={length} /></FrameSvg> : null}
				<HandTag x={1380} y={700} text="same length" at={length + 6} size={TYPE.handSmall} color={VEL.ink} />
				<Card x={1150} y={760} w={420} at={accel - 4}>
					<Line size={34}>Is the tip accelerating?</Line>
				</Card>
				<Chip x={1150} y={850} at={pred} size={32}>No: its speed is constant</Chip>
				<Chip x={1150} y={920} at={pred + 6} size={32}>Yes</Chip>
				<FrameSvg><Countdown start={hd.startFrame} end={hd.endFrame} x={1740} y={760} ringFrom={pred} /></FrameSvg>
			</div>
		</>
	);
};

// ---------- 2. speed versus velocity ----------
export const S02: React.FC = () => {
	const id = 'speed-velocity';
	const f = useCurrentFrame();
	const speedOnly = cue(id, 'Speed only'), velT = cue(id, 'Velocity tells'), copied = cue(id, 'copied side by side'), diff = cue(id, 'different', 2), rate = cue(id, 'rate of change'), yes = cue(id, 'So yes'), motion = cue(id, 'motion');
	const big = 130 + 50 * prog(f, copied, 20);
	const T2 = {x: 1460, y: 560};
	return (
		<>
			<SceneHeading text="Speed or velocity?" at={-40} size={56} out={motion - 6} />
			<SceneHeading text={HEAD} at={motion} size={50} />
			<FrameSvg>
				<TopSlew cx={TV.cx} cy={TV.cy} R={TV.R} angle={45 + W_DEG * (f + 760)} trace={359.9} arrows={SLEW_ARROWS} />
				<TailToTail x={T2.x} y={T2.y} dirs={DIRS} len={big} at={-30} />
				{f >= copied ? <PenRing cx={T2.x} cy={T2.y} rx={big + 30} ry={big + 30} at={copied + 24} color={VEL.stroke} /> : null}
			</FrameSvg>
			{DIRS.map((d, i) => { const [dx, dy] = vec(big + 36, d); return <Lbl key={d} x={T2.x + dx} y={T2.y + dy + 12} at={diff} color={VEL.ink} anchor="middle" size={32}>v{['₁', '₂', '₃', '₄'][i]}</Lbl>; })}
			<Chip x={1100} y={190} at={speedOnly} size={32} w={724} border={NAVY.stroke}>speed: how fast (a scalar)</Chip>
			<Chip x={1100} y={256} at={velT} size={32} w={724} border={VEL.stroke}>velocity: how fast and which way (a vector)</Chip>
			<Lbl x={T2.x} y={T2.y + 260} at={diff} color={INK} anchor="middle" size={TYPE.current}>v₁ ≠ v₂ ≠ v₃ ≠ v₄</Lbl>
			<HandTag x={1100} y={930} text="same length, new direction" at={diff + 10} size={30} color={VEL.ink} />
			<div style={{position: 'absolute', left: 96, top: 190, display: 'flex', flexDirection: 'column', gap: 10}}>
				<CrossedChip x={0} y={0} at={-30} crossAt={yes} size={30}>No: its speed is constant</CrossedChip>
			</div>
			<Chip x={96} y={262} at={-30} size={30} border={yes <= f ? INK : undefined}>Yes {f >= yes ? '✓' : ''}</Chip>
			<div style={{position: 'absolute', left: 96, top: 880}}><Row at={rate} size={TYPE.current}><span style={{color: ACC.ink}}>a = Δv ÷ Δt</span> <span style={{fontSize: 30, color: INK_SOFT}}>(change of velocity, not speed)</span></Row></div>
			<Chip x={1100} y={800} at={motion} size={32} w={724} border={INK}>uniform circular motion: constant speed, changing direction</Chip>
		</>
	);
};

// ---------- 3. which way does the velocity change? (the Δv tray) ----------
const C3 = {cx: 450, cy: 650, R: 260};
export const S03: React.FC = () => {
	const id = 'delta-v';
	const f = useCurrentFrame();
	const take = cue(id, 'Take two moments'), copy = cue(id, 'Copy their'), second = cue(id, 'second'), closer = cue(id, 'closer and closer'), circle = cue(id, 'circle'), centre = cue(id, 'towards the centre too'), called = cue(id, "It's called"), velocity = cue(id, 'velocity', 4);
	const dth = kfm(f, [[closer, 40], [closer + 50, 20], [closer + 120, 5]]);
	const mid = 60, p1 = mid - dth / 2, p2 = mid + dth / 2, L = 300;
	const [x1, y1] = polar(C3.cx, C3.cy, C3.R, p1), [x2, y2] = polar(C3.cx, C3.cy, C3.R, p2), [xm, ym] = polar(C3.cx, C3.cy, C3.R, mid);
	const [v1x, v1y] = vec(L, p1 + 90), [v2x, v2y] = vec(L, p2 + 90);
	const T = {x: 1600, y: 640};
	const dvx = v2x - v1x, dvy = v2y - v1y, dl = Math.hypot(dvx, dvy) || 1;
	const off = dth / 2;
	return (
		<>
			<SceneHeading text="Which way does the velocity change?" at={-40} size={56} />
			<FrameSvg>
				<circle cx={C3.cx} cy={C3.cy} r={C3.R} fill="#ddd3bd" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 8" />
				<circle cx={C3.cx} cy={C3.cy} r={9} fill={NAVY.stroke} />
				<VecArrow x={x1} y={y1} dx={v1x * 0.7} dy={v1y * 0.7} color={VEL.stroke} width={7} at={take} head={22} />
				<VecArrow x={x2} y={y2} dx={v2x * 0.7} dy={v2y * 0.7} color={VEL.stroke} width={7} at={take + 8} head={22} />
				<circle cx={x1} cy={y1} r={10} fill={VEL.stroke} opacity={prog(f, take, 10)} /><circle cx={x2} cy={y2} r={10} fill={VEL.stroke} opacity={prog(f, take, 10)} />
				<rect x={1100} y={190} width={724} height={560} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
				<VecArrow x={T.x} y={T.y} dx={v1x} dy={v1y} color={VEL.stroke} width={8} at={Math.min(copy, take + 20)} head={26} />
				<VecArrow x={T.x} y={T.y} dx={v2x} dy={v2y} color={VEL.stroke} width={8} at={Math.min(copy, take + 20) + 10} head={26} />
				<circle cx={T.x} cy={T.y} r={7} fill={INK} opacity={prog(f, copy, 10)} />
				{f >= second ? <VecArrow x={T.x + v1x} y={T.y + v1y} dx={dvx} dy={dvy} color={ACC.stroke} width={8} at={second} head={Math.min(24, dl * 0.5)} /> : null}
				{f >= second + 10 ? <g opacity={prog(f, second + 10, 12)}><DashLine x1={xm} y1={ym} x2={xm + (dvx / dl) * 120} y2={ym + (dvy / dl) * 120} color={ACC.stroke} width={5} dash="10 7" /><circle cx={xm + (dvx / dl) * 120} cy={ym + (dvy / dl) * 120} r={6} fill={ACC.stroke} /></g> : null}
				{f >= centre ? <VecArrow x={xm} y={ym} dx={(C3.cx - xm) * 0.55} dy={(C3.cy - ym) * 0.55} color={ACC.stroke} width={9} at={centre} head={26} /> : null}
				<RightMark x={xm} y={ym} a={mid + 180} size={24} at={velocity} color={INK} width={3.5} turn={-1} />
			</FrameSvg>
			<Lbl x={x1 + 18} y={y1 + 30} at={take} color={VEL.ink} size={32}>v₁</Lbl>
			<Lbl x={x2 - 18} y={y2 - 26} at={take + 8} color={VEL.ink} anchor="end" size={32}>v₂</Lbl>
			<Lbl x={1130} y={232} color={INK} size={30}>copied tail to tail</Lbl>
			{dth >= 15 ? <Lbl x={T.x + v1x - 14} y={T.y + v1y + 34} at={copy} color={VEL.ink} anchor="end" size={32}>v₁</Lbl> : null}
			{dth >= 15 ? <Lbl x={T.x + v2x - 20} y={T.y + v2y - 10} at={copy + 10} color={VEL.ink} anchor="end" size={32}>v₂</Lbl> : null}
			<Lbl x={T.x + v1x + dvx / 2 + 50} y={T.y + v1y + dvy / 2 + 40} at={second} color={ACC.ink} size={TYPE.current}>Δv</Lbl>
			<HandTag x={xm - 30} y={ym + 150} text="points in" at={circle} size={30} color={ACC.ink} anchor="end" />
			<Lbl x={xm - 40} y={(ym + C3.cy) / 2 + 40} at={centre} color={ACC.ink} anchor="end" size={TYPE.current}>a</Lbl>
			<HandTag x={xm + 40} y={ym - 60} text="a ⟂ v" at={velocity + 6} size={TYPE.handSmall} color={ACC.ink} />
			<Readouts x={1100} y={780} w={724} size={44} at={-30} rows={[
				{label: 'Δθ (time between the moments)', value: fx(dth, 0) + '°', color: NAVY.ink},
				{label: 'Δv off the centre line', value: fx(off, 1) + '°', color: ACC.ink},
			]} />
			<Card x={96} y={180} w={520} out={called - 6} border={ACC.stroke} pad="8px 20px 10px">
				<Line size={32} color={ACC.ink}>Δv = v₂ − v₁</Line>
				<Line size={30}>the arrow from v₁'s tip to v₂'s tip</Line>
			</Card>
			<Chip x={96} y={190} at={called} size={34} border={ACC.stroke}>centripetal: centre-seeking</Chip>
		</>
	);
};

// ---------- 4. describing the motion (the car on its 50 m track) ----------
const C4 = {cx: 480, cy: 620, R: 290};
const DASH_SRC = 'assets/physics/phys-y11-dashboard-cluster-v1.png';
export const S04: React.FC = () => {
	const id = 'describing-motion';
	const f = useCurrentFrame();
	const radius = cue(id, 'radius fifty'), twelve = cue(id, 'twelve seconds'), rev = cue(id, 'revolution'), fOne = cue(id, 'f equals one'), arc = cue(id, 'arc length'), radians = cue(id, 'radians', 2), angleT = cue(id, 'angle turned'), forOne = cue(id, 'For one lap');
	const t = f / 30;
	const ds = 300 / 1967;
	const [ax1, ay1] = polar(C4.cx, C4.cy, C4.R, -20), [ax2, ay2] = polar(C4.cx, C4.cy, C4.R, 40);
	return (
		<>
			<SceneHeading text="Describing circular motion" at={-40} size={56} />
			<FrameSvg>
				<Track cx={C4.cx} cy={C4.cy} R={C4.R} glow={prog(f, radians, 14) * (1 - prog(f, angleT, 14))} />
				<line x1={C4.cx} y1={C4.cy} x2={polar(C4.cx, C4.cy, C4.R, -20)[0]} y2={polar(C4.cx, C4.cy, C4.R, -20)[1]} stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, radius, 12)} />
				{f >= arc ? <path d={`M${ax1},${ay1} A${C4.R},${C4.R} 0 0,0 ${ax2},${ay2}`} fill="none" stroke={NAVY.stroke} strokeWidth={12} opacity={prog(f, arc, 12) * (1 - prog(f, radians, 12))} /> : null}
				<CarOnTrack cx={C4.cx} cy={C4.cy} R={C4.R} t={t} len={150} />
				<image href={staticFile(DASH_SRC)} x={1524 - 216 * ds} y={196 - 133 * ds} width={2400 * ds} height={1000 * ds} preserveAspectRatio="none" />
			</FrameSvg>
			<Lbl x={(C4.cx + ax1) / 2 + 10} y={(C4.cy + ay1) / 2 + 40} at={radius} color={NAVY.ink} size={34}>r = 50 m</Lbl>
			<Readouts x={96} y={190} w={330} size={46} title="lap clock" rows={[{label: 't', value: fx(t % T_CAR, 1), unit: 's', color: NAVY.ink}]} />
			<HandTag x={96} y={340} text="one lap = 12 s" at={twelve} size={30} color={NAVY.ink} />
			<HandTag x={1524} y={330} text="steady speed" at={twelve + 20} size={30} color={INK} />
			<div style={{position: 'absolute', left: 1000, top: 370, width: 820, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={rev} size={36}><span style={{color: NAVY.ink}}>period T: time for one revolution</span></Row>
				<Row at={rev + 10} ageAt={fOne} size={TYPE.current} oldSize={36}>T = 12 s</Row>
				<Row at={fOne} ageAt={arc} size={TYPE.current} oldSize={36}>frequency: f = 1/T (Hz)</Row>
				<Row at={arc} ageAt={angleT} size={TYPE.current} oldSize={36}>θ = arc ÷ r (rad)</Row>
				<Row at={radians} ageAt={angleT} size={TYPE.current} oldSize={36}>one lap = 2πr ÷ r = 2π rad</Row>
				<Row at={angleT} size={TYPE.current}>ω = Δθ ÷ t (rad s⁻¹)</Row>
				<Row at={forOne} size={TYPE.working}><Boxed at={forOne + 10} size={TYPE.working}>one lap: ω = 2π/T</Boxed></Row>
			</div>
			<HandTag x={C4.cx - 120} y={C4.cy + C4.R + 70} text="full turn = 2π" at={radians} size={30} color={NAVY.ink} />
		</>
	);
};

// ---------- 5. worked example: speed, omega and frequency ----------
export const S05: React.FC = () => {
	const id = 'worked-v-omega-f';
	const f = useCurrentFrame();
	const circ = cue(id, 'one circumference'), v262 = cue(id, 'twenty-six point two'), omega = cue(id, 'Omega is'), rps = cue(id, 'radians per second'), freq = cue(id, 'And the frequency'), check = cue(id, 'As a check'), does = cue(id, 'does');
	return (
		<>
			<SceneHeading text="Worked example: v, ω and f" at={-40} size={56} />
			<div style={{position: 'absolute', left: 96, top: 186, width: 1728, fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 38, color: INK}}>A car laps a circular track of radius 50 m every 12 s. Find v, ω and f.</div>
			<Chip x={96} y={250} at={-30} size={36} border={NAVY.stroke} color={NAVY.ink}>r = 50 m</Chip>
			<Chip x={330} y={250} at={-30} size={36} border={NAVY.stroke} color={NAVY.ink}>T = 12 s</Chip>
			<Chip x={560} y={250} at={-30} size={36} border={INK}>v = 2πr/T &nbsp; ω = 2π/T &nbsp; f = 1/T</Chip>
			<FrameSvg>
				<Track cx={320} cy={630} R={230} w={60} glow={prog(f, circ, 12) * (1 - prog(f, v262, 12))} />
				<CarOnTrack cx={320} cy={630} R={230} t={f / 30} len={120} />
			</FrameSvg>
			<HandTag x={110} y={890} text="one lap = one circumference" at={circ + 6} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 640, top: 380, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={circ} ageAt={v262} size={TYPE.current} oldSize={36}>distance per lap = 2πr</Row>
				<Row at={v262 - 30} ageAt={omega} size={TYPE.working} oldSize={38}><span style={{color: VEL.ink}}>v</span> = 2π(50) ÷ 12 = <span style={{color: VEL.ink}}>26.2 m s⁻¹</span></Row>
				<Row at={omega} ageAt={freq} size={TYPE.working} oldSize={38}>ω = 2π ÷ 12 = 0.524 rad s⁻¹</Row>
				<Row at={freq} ageAt={check} size={TYPE.working} oldSize={38}>f = 1 ÷ 12 = 0.0833 Hz</Row>
				<Row at={check} size={TYPE.current}>check: fT = 0.0833 × 12 = 1.00 <span style={{opacity: prog(f, does, 10)}}>✓</span></Row>
			</div>
			<HandTag x={1420} y={470} text="keep 26.18 for later" at={v262 + 20} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 640, top: 790, opacity: prog(f, does + 6, 14)}}><Boxed at={does + 10} size={40}>v = 26.2 m s⁻¹, ω = 0.524 rad s⁻¹, f = 0.0833 Hz</Boxed></div>
			<CrossedChip x={1460} y={600} at={rps} crossAt={rps + 20} size={34} caption="upside down: 2π over T">ω = 12 ÷ 2π</CrossedChip>
		</>
	);
};

// ---------- 6. further out, faster (the jib from above) ----------
const C6 = {cx: 560, cy: 620, R: 300};
export const S06: React.FC = () => {
	const id = 'further-out-faster';
	const f = useCurrentFrame();
	const vwr = cue(id, 'v equals omega'), crane = cue(id, 'the crane'), sameA = cue(id, 'same angle'), fast = cue(id, 'fast'), radius = cue(id, 'radius');
	const a0 = 20, sweep = kfm(f, [[sameA, 0], [sameA + 90, 60]]);
	const ang = a0 + sweep;
	const ppm = C6.R / 30;
	const [i1x, i1y] = polar(C6.cx, C6.cy, 15 * ppm, ang), [o1x, o1y] = polar(C6.cx, C6.cy, 30 * ppm, ang);
	const arc = (r: number) => { const [sx, sy] = polar(C6.cx, C6.cy, r, a0), [ex, ey] = polar(C6.cx, C6.cy, r, ang); return `M${sx},${sy} A${r},${r} 0 0,0 ${ex},${ey}`; };
	return (
		<>
			<SceneHeading text="Further out, faster" at={-40} size={56} />
			<div style={{position: 'absolute', left: 1100, top: 250}}><Row at={vwr} size={TYPE.working}><Boxed at={vwr + 20} size={TYPE.working}>v = 2πr/T = (2π/T) r = ωr</Boxed></Row></div>
			<FrameSvg>
				<TopSlew cx={C6.cx} cy={C6.cy} R={C6.R} angle={ang} fill="#ddd3bd" />
				{sweep > 0.5 ? <g><path d={`M${C6.cx},${C6.cy} L${polar(C6.cx, C6.cy, C6.R, a0).join(',')} A${C6.R},${C6.R} 0 0,0 ${polar(C6.cx, C6.cy, C6.R, ang).join(',')} Z`} fill={NAVY.soft} opacity={0.6} /><path d={arc(15 * ppm)} fill="none" stroke={NAVY.stroke} strokeWidth={6} /><path d={arc(30 * ppm)} fill="none" stroke={NAVY.stroke} strokeWidth={6} /></g> : null}
				<circle cx={i1x} cy={i1y} r={12} fill={NAVY.stroke} stroke="#fff" strokeWidth={3} opacity={prog(f, crane, 10)} />
				<circle cx={o1x} cy={o1y} r={12} fill={NAVY.stroke} stroke="#fff" strokeWidth={3} opacity={prog(f, crane, 10)} />
				{f >= fast ? <VecArrow x={i1x} y={i1y} dx={vec(90, ang + 90)[0]} dy={vec(90, ang + 90)[1]} color={VEL.stroke} width={8} at={fast} head={24} /> : null}
				{f >= fast ? <VecArrow x={o1x} y={o1y} dx={vec(180, ang + 90)[0]} dy={vec(180, ang + 90)[1]} color={VEL.stroke} width={8} at={fast + 6} head={24} /> : null}
				<Bracket x1={C6.cx} y1={C6.cy + 60} x2={C6.cx + 15 * ppm} y2={C6.cy + 60} color={NAVY.stroke} at={crane} label="15 m" ly={C6.cy + 96} size={30} />
				<Bracket x1={C6.cx} y1={C6.cy + 130} x2={C6.cx + 30 * ppm} y2={C6.cy + 130} color={NAVY.stroke} at={crane + 8} label="30 m" ly={C6.cy + 166} size={30} />
			</FrameSvg>
			<HandTag x={C6.cx - 330} y={C6.cy - 330} text="same angle, same time" at={sameA + 20} size={30} color={NAVY.ink} />
			<HandTag x={o1x + 40} y={o1y - 40} text="2× out, 2× fast" at={fast + 20} size={TYPE.handSmall} color={VEL.ink} />
			<Card x={1100} y={340} w={724} at={crane}>
				<Title>Every point on the jib</Title>
				<Line size={34} at={sameA}>turns through the same angle in the same time</Line>
				<Line size={34} at={sameA + 30}>so has the same ω</Line>
				<Line size={34} at={fast} color={VEL.ink}>twice as far out: a circle twice as big, so twice as fast</Line>
			</Card>
			<Readouts x={1100} y={650} w={724} size={36} title="live: the two points on the jib" rows={[
				{label: 'angle swept (both)', value: fx(sweep, 0) + '°', color: NAVY.ink},
				{label: 'arc at 15 m', value: fx((sweep * Math.PI / 180) * 15, 1), unit: 'm', color: VEL.ink},
				{label: 'arc at 30 m', value: fx((sweep * Math.PI / 180) * 30, 1), unit: 'm', color: VEL.ink},
			]} />
			<Chip x={1460} y={180} at={radius} size={40} border={INK}>same ω: v ∝ r</Chip>
		</>
	);
};
