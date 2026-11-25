// Scenes 1 to 5: the hook (last time's two wires become two foil strips hanging from the painted stands and boss,
// wired through the painted knife switch to the painted car battery on the circuits engine; they bow together, then
// apart), the field of one wire (the painted wire-through-card stand, then the end-on card with painted compasses lining
// up in circles, the grip rule as a coded axis and curl, a live r probe and B readout), the second wire's push (palm-rule
// axes at wire 2), how big (full-width algebra beside the live slider panel), and opposite currents (side by side).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, Readouts, Row} from '../../physics/projectile/board';
import {Arrow2, AxisTriad} from '../../physics/electromagnetism/magnetic';
import type {TriadArm} from '../../physics/electromagnetism/magnetic';
import {Slider} from '../../physics/electromagnetism/plates';
import {BATTERY, Boss, Compass, KnifeSwitch, Plate, Stand, WIRECARD, batteryPts, switchPts, wireCardPts} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {EndOnWire} from '../../physics/electromagnetism/wires';
import {Lead} from '../../physics/electromagnetism/plates';
import {circuitAt} from '../../sims/circuits';
import {M6V07FinalFrame} from '../phys-y12-m6-v07/s3';
import {Bwire, Fpl, HEAD, HEAD_SIZE, PROBE_I, SL0, cap, cue, holdIf, hookRun, mono} from './common';
import {AMBER, BArrow, CardRect, FArrow, FIELD1, FIELD2, FIELD2_INK, GREY, Lbl, NAVY, ORANGE, Ring, Strip2, StripOutline, WireField, fl, fx, sci} from './parts';

const rad = (d: number) => (d * Math.PI) / 180;

// ---------- 1. hook ----------
const SX1 = 880, SX2 = 1040, SY1 = 252, SY2 = 800, BENCH = 870;
const SW: Place = {x: 1240, y: 767, w: 240}, BAT: Place = {x: 1560, y: 669, w: 240};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const hang = cue(id, 'Two long wires hang'), up = cue(id, 'both carry a current upwards'), pred = cue(id, 'Make your prediction'), together = cue(id, 'They pull together'), rev = cue(id, 'Now reverse one'), apart = cue(id, 'This time they push apart'), why = cue(id, 'So why do parallel'), repel = cap(id, cue(id, 'and opposite currents repel'));
	const h = holdIf(id);
	if (f < 1) return <M6V07FinalFrame />;
	const run = hookRun(together - 10);
	const on = (circuitAt(run, f).current.s1 ?? 0) > 0.1;
	const bow = on ? kf(f, mono([[together - 6, 0], [together + 24, 24], [rev, 24], [rev + 24, 0], [apart - 4, 0], [apart + 24, -24]])) : 0;
	const stage = prog(f, hang, 24);
	const sw = switchPts(SW), bat = batteryPts(BAT);
	const flipped = f >= rev;
	const fIn = f >= together && f < rev + 10 ? prog(f, together + 10, 12) * (1 - prog(f, rev, 10)) : 0;
	const fOut = f >= apart ? prog(f, apart + 10, 12) : 0;
	const mid = (SY1 + SY2) / 2;
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - stage, clipPath: 'inset(150px 0 0 0)'}}><M6V07FinalFrame /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{stage > 0 ? <div style={{position: 'absolute', inset: 0, opacity: stage}}>
				<FrameSvg>
					<line x1={60} y1={BENCH} x2={1860} y2={BENCH} stroke={INK} strokeWidth={4} />
					<Stand rodX={620} baseY={BENCH} height={680} />
					<Stand rodX={1300} baseY={BENCH} height={680} />
					<line x1={620} y1={SY1 - 12} x2={1300} y2={SY1 - 12} stroke="#8d8f93" strokeWidth={12} strokeLinecap="round" />
					<Boss x={620} y={SY1 - 12} w={110} />
					<Boss x={1300} y={SY1 - 12} w={110} />
					<Lead pts={[bat.b, [bat.b[0], 210], [SX1, 210], [SX1, SY1]]} width={3.5} />
					<line x1={SX2} y1={210} x2={SX2} y2={SY1} stroke={INK} strokeWidth={3.5} />
					<Lead pts={[[SX1, SY2], [SX1, 835], [sw.left[0], 835], sw.left]} width={3.5} />
					<line x1={SX2} y1={SY2} x2={SX2} y2={835} stroke={INK} strokeWidth={3.5} />
					<Lead pts={[sw.right, [sw.right[0], 850], [bat.a[0] - 30, 850], [bat.a[0] - 30, bat.a[1]], bat.a]} width={3.5} />
					<KnifeSwitch p={SW} open={1 - prog(f, together - 10, 10)} />
					<Plate spec={BATTERY} p={BAT} />
					<StripOutline x={SX1} y1={SY1} y2={SY2} bow={bow} />
					<Strip2 x={SX1} y1={SY1} y2={SY2} bow={bow} />
					<StripOutline x={SX2} y1={SY1} y2={SY2} bow={-bow} />
					<Strip2 x={SX2} y1={SY1} y2={SY2} bow={-bow} />
					{f >= up ? <g opacity={prog(f, up, 12)}>
						<Arrow2 from={[SX1 - 50, 600]} to={[SX1 - 50, 450]} color={ORANGE.stroke} width={7} head={24} />
						<Arrow2 from={flipped ? [SX2 + 50, 450] : [SX2 + 50, 600]} to={flipped ? [SX2 + 50, 600] : [SX2 + 50, 450]} color={ORANGE.stroke} width={7} head={24} />
					</g> : null}
					{fIn > 0 ? <g opacity={fIn}><Arrow2 from={[SX1 + bow - 110, mid]} to={[SX1 + bow - 20, mid]} color={AMBER.stroke} width={8} head={24} /><Arrow2 from={[SX2 - bow + 110, mid]} to={[SX2 - bow + 20, mid]} color={AMBER.stroke} width={8} head={24} /></g> : null}
					{fOut > 0 ? <g opacity={fOut}><Arrow2 from={[SX1 + bow - 14, mid]} to={[SX1 + bow - 110, mid]} color={AMBER.stroke} width={8} head={24} /><Arrow2 from={[SX2 - bow + 14, mid]} to={[SX2 - bow + 110, mid]} color={AMBER.stroke} width={8} head={24} /></g> : null}
					<Ring cx={SX2 + 50} cy={525} rx={40} ry={100} at={rev + 6} color={ORANGE.stroke} />
				</FrameSvg>
				<Lbl x={SX1 - 60} y={430} at={up} color={ORANGE.ink} size={34} anchor="end">I</Lbl>
				<Lbl x={SX2 + 60} y={430} at={up} color={ORANGE.ink} size={34}>I</Lbl>
				<HandTag x={SX1 - 300} y={640} text="both up" at={up + 10} out={rev} size={32} color={ORANGE.ink} />
				<HandTag x={SX1 - 300} y={720} text="pull in" at={together + 20} out={rev} size={32} color={AMBER.ink} />
				<HandTag x={SX1 - 300} y={720} text="push out" at={apart + 20} size={32} color={AMBER.ink} />
				<HandTag x={1560} y={640} text="short bursts only" at={hang + 20} size={30} color={INK} />
				<Lbl x={SX1 - 120} y={SY2 + 40} at={hang + 20} color={INK_SOFT} size={28} anchor="end">foil strips</Lbl>
				{['pull together', 'push apart', 'nothing'].map((c, i) => <Chip key={c} x={96} y={300 + i * 80} at={pred + i * 6} size={32} w={300}>{c}{i === 0 && f >= together ? ' ✓' : ''}</Chip>)}
				<Chip x={300} y={890} at={repel} size={30} w={900} color={INK}>same direction: attract; opposite: repel</Chip>
			</div> : null}
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1720} y={330} r={46} ringFrom={why} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. the field of one wire ----------
const CARD2 = {cx: 470, cy: 565, s: 640}, PX = 80; // 80 px per cm on the card
const COMPASS_R = 200;
const tangentDeg = (a: number) => (Math.atan2(-Math.cos(rad(a)), -Math.sin(rad(a))) * 180) / Math.PI;
export const S02: React.FC = () => {
	const id = 'one-wire-field';
	const f = useCurrentFrame();
	const start = cue(id, 'Start with one wire'), end = cue(id, 'Look at it end on'), dot = cue(id, "That's a dot"), circles = cue(id, 'makes circles around it'), grip = cue(id, 'right-hand grip rule'), here = cue(id, 'anticlockwise here'), weaker = cue(id, 'gets weaker further out'), wire = cue(id, 'the distance from the wire'), mu = cue(id, 'Mu nought is a constant'), dbl = cue(id, 'Double the distance'), halves = cap(id, cue(id, 'the field halves'));
	const top = prog(f, end, 30);
	const line = prog(f, circles, 40);
	const rcm = kf(f, mono([[weaker, 1], [weaker + 40, 2], [dbl, 2], [dbl + 40, 4]]));
	const B = Bwire(PROBE_I, rcm / 100);
	const probe = prog(f, weaker, 12);
	const px = CARD2.cx + rcm * PX;
	const wp: Place = {x: 260, y: 230, w: 420};
	const wc = wireCardPts(wp);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={1 - top}><Plate spec={WIRECARD} p={wp} /><Arrow2 from={[wc.hole[0] + 40, wc.hole[1] - 40]} to={[wc.hole[0] + 40, wc.hole[1] - 200]} color={ORANGE.stroke} width={7} head={24} /></g>
				{top > 0 ? <g opacity={top}>
					<rect x={CARD2.cx - CARD2.s / 2} y={CARD2.cy - CARD2.s / 2} width={CARD2.s} height={CARD2.s} rx={8} fill={CARD} stroke="rgba(60,45,20,0.35)" strokeWidth={3} />
					<WireField x={CARD2.cx} y={CARD2.cy} dir="out" radii={[110, COMPASS_R, 290]} grow={line} heads={f >= here} r={36} />
					{[90, 30, -30, -90, -150, 150].map(a => <Compass key={a} cx={CARD2.cx + COMPASS_R * Math.cos(rad(a))} cy={CARD2.cy - COMPASS_R * Math.sin(rad(a))} r={40} deg={-90 + (tangentDeg(a) + 90) * prog(f, circles, 30)} />)}
					{probe > 0 ? <g opacity={probe}>
						<line x1={CARD2.cx + 40} y1={CARD2.cy} x2={px} y2={CARD2.cy} stroke={NAVY.stroke} strokeWidth={4} />
						<circle cx={px} cy={CARD2.cy} r={9} fill={NAVY.stroke} />
						<Arrow2 from={[px, CARD2.cy]} to={[px, CARD2.cy - 120 * (B / 2e-4)]} color={FIELD1} width={7} head={22} />
					</g> : null}
				</g> : null}
				{/* the grip rule: the current axis out of the page and the curl of the field (no hand) */}
				{f >= grip ? <g opacity={prog(f, grip, 14)}>
					<CardRect x={1000} y={190} w={520} h={300} />
					<path d={`M${1180 + 70},${330} A70,70 0 1 0 ${1180 + 70 * Math.cos(rad(-60))},${330 - 70 * Math.sin(rad(-60))}`} fill="none" stroke={FIELD1} strokeWidth={6} />
					<path d={`M${1180 + 70 * Math.cos(rad(-60))},${330 - 70 * Math.sin(rad(-60))} l18,-14 l-2,22 Z`} fill={FIELD1} />
					<Arrow2 from={[1220, 280]} to={[1130, 400]} color={ORANGE.stroke} width={10} head={30} />
				</g> : null}
			</FrameSvg>
			<Lbl x={wc.hole[0] + 60} y={wc.hole[1] - 140} at={start} out={end + 20} color={ORANGE.ink} size={34}>I</Lbl>
			<Lbl x={CARD2.cx - 320} y={925} at={dot} color={ORANGE.ink} size={30}>I₁ (out of the screen)</Lbl>
			<HandTag x={CARD2.cx + 10} y={925} text="compasses line up in circles" at={circles + 30} size={30} color={GREY.ink} />
			<HandTag x={CARD2.cx + 150} y={CARD2.cy - 250} text="anticlockwise here" at={here + 10} size={30} color={GREY.ink} />
			<Lbl x={1040} y={240} at={grip} color={ORANGE.ink} size={30}>thumb: I</Lbl>
			<Lbl x={1290} y={420} at={grip} color={GREY.ink} size={30}>fingers curl: B</Lbl>
			{probe > 0 ? <Lbl x={px + 10} y={CARD2.cy + 44} color={NAVY.ink} size={30}>r</Lbl> : null}
			<Row at={wire} size={52} style={{position: 'absolute', left: 1000, top: 520}}><AnswerBox at={wire + 14}><span style={{color: FIELD2_INK}}>B = μ₀I / 2πr</span></AnswerBox></Row>
			<Chip x={1000} y={620} at={mu} size={32} w={820}>μ₀ ≈ 4π × 10⁻⁷ N A⁻² (data sheet)</Chip>
			<Readouts x={1000} y={710} w={480} size={44} at={weaker} rows={[
				{label: <>r (I = {PROBE_I} A)</>, value: `${fx(rcm, 1)} cm`, color: NAVY.ink},
				{label: 'B', value: sci(B, 1), unit: 'T', color: FIELD2_INK},
			]} />
			<HandTag x={1520} y={800} text="× 2 → ÷ 2" at={halves} size={36} color={NAVY.ink} />
		</>
	);
};

// ---------- 3. the second wire feels a push ----------
const P3 = {x1: 690, x2: 1210, y: 560};
const ARMS3: readonly TriadArm[] = [
	{d: [0, 0, 1], color: ORANGE.stroke, label: 'thumb: I₂'},
	{d: [0, 1, 0], color: FIELD1, label: 'fingers: B₁'},
	{d: [-1, 0, 0], color: AMBER.stroke, label: 'palm faces: F'},
];
export const S03: React.FC = () => {
	const id = 'second-wire';
	const f = useCurrentFrame();
	const put = cue(id, 'Now put a second wire'), pass = cue(id, "Wire one's field circles pass"), screen = cue(id, 'points straight up the screen'), motor = cue(id, 'motor effect'), one = cue(id, 'pushed towards wire one'), swap = cue(id, 'Now swap roles'), down = cue(id, 'points down at wire one'), right = cue(id, 'to the right, towards wire two'), attract = cap(id, cue(id, 'They attract'));
	const slide = prog(f, put, 30);
	const x2 = P3.x2 + (1 - slide) * 500;
	const lit = prog(f, pass, 14);
	const pulse = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - attract) / 24)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v08-s3"><rect x={96} y={180} width={1728} height={740} /></clipPath></defs>
				<g clipPath="url(#v08-s3)">
					<WireField x={P3.x1} y={P3.y} dir="out" radii={[260]} color={FIELD1} r={0.1} />
					<g opacity={0.4 + 0.6 * lit}><WireField x={P3.x1} y={P3.y} dir="out" radii={[P3.x2 - P3.x1]} color={FIELD1} r={0.1} /></g>
					{f >= swap ? <g opacity={prog(f, swap, 20)}><WireField x={P3.x2} y={P3.y} dir="out" radii={[260, P3.x2 - P3.x1]} color={FIELD2} r={0.1} /></g> : null}
				</g>
				<EndOnWire cx={P3.x1} cy={P3.y} r={55} dir="out" />
				<g opacity={slide}><EndOnWire cx={x2} cy={P3.y} r={55} dir="out" /></g>
				{f >= screen ? <BArrow x={P3.x2} y={P3.y} len={150} r={55} opacity={prog(f, screen, 12)} /> : null}
				{f >= down ? <BArrow x={P3.x1 + 2 * 81} y={P3.y} len={-150} color={FIELD2} r={55} opacity={prog(f, down, 12)} /> : null}
				{f >= one ? <FArrow x={P3.x2} y={P3.y} len={-(170 + 14 * pulse)} r={55} opacity={prog(f, one, 12)} /> : null}
				{f >= right ? <FArrow x={P3.x1} y={P3.y} len={170 + 14 * pulse} r={55} opacity={prog(f, right, 12)} /> : null}
				<AxisTriad cx={1560} cy={380} len={120} arms={ARMS3} size={30} opacity={prog(f, motor, 14)} />
				<line x1={P3.x1} y1={P3.y + 120} x2={P3.x2} y2={P3.y + 120} stroke={NAVY.stroke} strokeWidth={4} opacity={slide} />
				<Ring cx={P3.x2 - 81} cy={P3.y} rx={40} ry={100} at={screen + 10} color={GREY.stroke} />
			</FrameSvg>
			<Lbl x={P3.x1} y={P3.y - 80} color={ORANGE.ink} size={30} anchor="middle">I₁</Lbl>
			<Lbl x={P3.x2} y={P3.y - 80} at={put} color={ORANGE.ink} size={30} anchor="middle">I₂</Lbl>
			<Lbl x={(P3.x1 + P3.x2) / 2} y={P3.y + 160} at={put} color={NAVY.ink} size={34} anchor="middle">r</Lbl>
			<Lbl x={P3.x1 - 300} y={250} color={INK} size={28}>both out of the screen</Lbl>
			<Lbl x={P3.x2 - 130} y={P3.y - 100} at={screen} color={GREY.ink} size={32}>B₁</Lbl>
			<Lbl x={P3.x1 + 92} y={P3.y + 110} at={down} color={FIELD2_INK} size={32}>B₂</Lbl>
			<Lbl x={P3.x2 - 220} y={P3.y - 34} at={one} color={AMBER.ink} size={30} anchor="middle">F on 2</Lbl>
			<Lbl x={P3.x1 + 220} y={P3.y - 34} at={right} color={AMBER.ink} size={30} anchor="middle">F on 1</Lbl>
			<HandTag x={P3.x2 + 90} y={P3.y - 190} text="B₁ up at wire 2" at={screen + 16} size={30} color={GREY.ink} />
			<Lbl x={1460} y={560} at={motor} color={INK_SOFT} size={28}>at wire 2</Lbl>
			<HandTag x={(P3.x1 + P3.x2) / 2} y={P3.y + 230} text="towards each other" at={right + 20} size={32} color={AMBER.ink} anchor="middle" />
			<Row at={attract} size={48} style={{position: 'absolute', left: 1400, top: 760}}><AnswerBox at={attract + 6}><span style={{color: AMBER.ink}}>same direction: attract</span></AnswerBox></Row>
		</>
	);
};

// ---------- 4. how big is the force? ----------
const P4 = {x: 250, y: 480};
const RPX = 4000; // px per metre on the slider panel
export const S04: React.FC = () => {
	const id = 'force-size';
	const f = useCurrentFrame();
	const how = cue(id, 'How big is that force'), feels = cue(id, 'Wire two feels F equals'), swap = cue(id, 'Swap in B equals'), length = cue(id, 'and the force on a length'), divide = cue(id, 'Divide by l'), form = cue(id, 'F over l equals mu nought'), more = cue(id, 'More current gives more force'), less = cap(id, cue(id, 'more distance gives less'));
	const I1 = kf(f, mono([[more, SL0.I1], [more + 40, 20], [less - 4, 20], [less + 30, 10]]));
	const r = kf(f, mono([[less + 10, SL0.r], [less + 50, 0.1]]));
	const F = Fpl(I1, SL0.I2, r);
	const ar = 70 * (F / 4e-4);
	const x2 = P4.x + r * RPX;
	const B1 = Bwire(I1, r);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardRect x={96} y={250} w={760} h={660} />
				<defs><clipPath id="v08-s4"><rect x={100} y={254} width={752} height={370} /></clipPath></defs>
				<g clipPath="url(#v08-s4)"><WireField x={P4.x} y={P4.y} dir="out" radii={[x2 - P4.x]} color={FIELD1} r={0.1} /></g>
				<EndOnWire cx={P4.x} cy={P4.y} r={44} dir="out" />
				<EndOnWire cx={x2} cy={P4.y} r={44} dir="out" />
				<BArrow x={x2} y={P4.y} len={60 + 160 * (B1 / 8e-5)} r={44} />
				<FArrow x={P4.x} y={P4.y} len={ar} r={44} width={7} />
				<FArrow x={x2} y={P4.y} len={-ar} r={44} width={7} />
				<line x1={P4.x} y1={P4.y + 90} x2={x2} y2={P4.y + 90} stroke={NAVY.stroke} strokeWidth={4} />
				<Slider x={140} y={700} w={560} value={I1 / 25} color={ORANGE.stroke} label={`I₁ = ${fx(I1, 0)} A`} />
				<Slider x={140} y={780} w={560} value={SL0.I2 / 25} color={ORANGE.stroke} label={`I₂ = ${fx(SL0.I2, 0)} A`} />
				<Slider x={140} y={860} w={560} value={r / 0.125} color={NAVY.stroke} label={`r = ${fx(r * 100, 1)} cm`} />
			</FrameSvg>
			<Lbl x={P4.x} y={P4.y - 70} color={ORANGE.ink} size={30} anchor="middle">I₁</Lbl>
			<Lbl x={x2} y={P4.y - 70} color={ORANGE.ink} size={30} anchor="middle">I₂</Lbl>
			<Lbl x={x2 - 110} y={P4.y - 120} color={GREY.ink} size={30}>B₁</Lbl>
			<Lbl x={(P4.x + x2) / 2} y={P4.y + 130} color={NAVY.ink} size={30} anchor="middle">r</Lbl>
			<Readouts x={96} y={170} w={760} size={44} at={how} rows={[{label: 'F/l', value: fl(F), unit: 'N m⁻¹', color: AMBER.ink}]} />
			<HandTag x={(P4.x + x2) / 2} y={P4.y - 160} text="always equal" at={more + 20} size={30} color={AMBER.ink} anchor="middle" />
			<div style={{position: 'absolute', left: 920, top: 180, display: 'flex', flexDirection: 'column', gap: 10, width: 900}}>
				<Row at={feels} ageAt={swap} size={48} oldSize={36}>on wire 2: F = B₁I₂l</Row>
				<Row at={feels + 20} ageAt={swap} size={34} oldSize={30}>(B₁ ⟂ wire 2, so sin θ = 1)</Row>
				<Row at={swap} ageAt={length} size={44} oldSize={34}><span style={{color: FIELD2_INK}}>B₁ = μ₀I₁ / 2πr</span></Row>
				<Row at={length} ageAt={divide} size={44} oldSize={34}>F = μ₀I₁I₂l / 2πr</Row>
				<Row at={divide} ageAt={form} size={44} oldSize={34}>F/l = μ₀I₁I₂ / 2πr</Row>
				<Row at={form} size={60}><AnswerBox at={form + 12}><span style={{color: AMBER.ink}}>F/l = (μ₀/2π)(I₁I₂/r)</span></AnswerBox></Row>
			</div>
			<HandTag x={1560} y={560} text="one l cancels" at={divide + 10} size={30} color={INK} />
			<HandTag x={920} y={740} text="I₁ × I₂: a product" at={form + 30} size={32} color={ORANGE.ink} />
			<Chip x={920} y={800} at={more + 30} size={32} w={440}>I₁ × 2 → F/l × 2</Chip>
			<Chip x={1380} y={800} at={less + 30} size={32} w={440}>r × 2 → F/l ÷ 2</Chip>
		</>
	);
};

// ---------- 5. opposite currents repel ----------
const L5 = {x1: 260, x2: 640, y: 540}, R5 = {x1: 1150, x2: 1530, y: 540};
const ARMS5: readonly TriadArm[] = [
	{d: [0, 0, -1], color: ORANGE.stroke, label: 'thumb: I₂'},
	{d: [0, 1, 0], color: FIELD1, label: 'fingers: B₁'},
	{d: [1, 0, 0], color: AMBER.stroke, label: 'palm: F'},
];
export const S05: React.FC = () => {
	const id = 'opposite-repel';
	const f = useCurrentFrame();
	const rev = cue(id, 'reverse the current in wire two'), still = cue(id, 'still points up'), away = cue(id, 'wire two is pushed away'), left = cue(id, 'also flips, to the left'), repel = cue(id, 'now they repel'), both = cap(id, cue(id, 'Reverse both currents'));
	const crossed = f >= rev + 10;
	const w2Flip = f >= left;
	const pulse = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - still) / 24)));
	const f2 = f >= away ? 130 * prog(f, away, 14) : -130 * (1 - prog(f, rev, 10));
	const f1 = f >= left ? -130 * prog(f, left, 14) : 130 * (1 - prog(f, rev, 10));
	const inset = prog(f, both, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={910} y1={200} x2={910} y2={900} stroke={INK} strokeWidth={3} />
				{/* left: same direction, attract (frozen) */}
				<WireField x={L5.x1} y={L5.y} dir="out" r={42} />
				<WireField x={L5.x2} y={L5.y} dir="out" r={42} />
				<BArrow x={L5.x2} y={L5.y} len={120} r={42} />
				<BArrow x={L5.x1 + 2 * 68} y={L5.y} len={-120} color={FIELD2} r={42} />
				<FArrow x={L5.x2} y={L5.y} len={-110} r={42} width={7} />
				<FArrow x={L5.x1} y={L5.y} len={110} r={42} width={7} />
				{/* right: opposite currents */}
				<WireField x={R5.x1} y={R5.y} dir="out" r={42} />
				<WireField x={R5.x2} y={R5.y} dir={crossed ? 'in' : 'out'} radii={[110]} color={FIELD2} heads={f >= left || f < rev} r={42} />
				<BArrow x={R5.x2} y={R5.y} len={120 + 20 * pulse} r={42} />
				<BArrow x={R5.x1 + 2 * 68} y={R5.y} len={w2Flip ? 120 : -120} color={FIELD2} r={42} />
				<FArrow x={R5.x2} y={R5.y} len={f2} r={42} width={7} />
				<FArrow x={R5.x1} y={R5.y} len={f1} r={42} width={7} />
				<AxisTriad cx={1700} cy={300} len={90} arms={ARMS5} size={26} opacity={prog(f, away - 10, 12)} />
				{inset > 0 ? <g opacity={inset}>
					<CardRect x={1080} y={730} w={740} h={180} />
					<EndOnWire cx={1250} cy={820} r={32} dir="in" />
					<EndOnWire cx={1460} cy={820} r={32} dir="out" />
					<FArrow x={1250} y={820} len={-80} r={32} width={6} />
					<FArrow x={1460} y={820} len={80} r={32} width={6} />
				</g> : null}
			</FrameSvg>
			<Lbl x={(L5.x1 + L5.x2) / 2} y={260} color={INK} size={40} anchor="middle">same direction</Lbl>
			<Lbl x={(R5.x1 + R5.x2) / 2} y={260} color={INK} size={40} anchor="middle">opposite</Lbl>
			<Lbl x={(L5.x1 + L5.x2) / 2} y={L5.y + 120} color={AMBER.ink} size={34} anchor="middle">attract</Lbl>
			<Lbl x={R5.x2} y={R5.y + 100} at={rev} color={ORANGE.ink} size={28} anchor="middle">I₂ (into the screen)</Lbl>
			<Lbl x={R5.x2 - 100} y={R5.y - 90} at={still} color={GREY.ink} size={30}>B₁</Lbl>
			<Row at={repel} size={48} style={{position: 'absolute', left: 1080, top: 640}}><AnswerBox at={repel + 8}><span style={{color: AMBER.ink}}>opposite: repel</span></AnswerBox></Row>
			<HandTag x={700} y={760} text="flip one: forces flip" at={left + 20} size={32} color={AMBER.ink} marks={[{kind: 'arrow', from: [760, 790], to: [1100, 600], bend: -0.2}]} markAt={left + 26} />
			<HandTag x={1580} y={790} text="flip both: same" at={both + 10} size={30} color={ORANGE.ink} />
		</>
	);
};
