// Scenes 1 to 6: the hook (last time's light clock shrinks away; the painted Earth, a coded atmosphere column and the
// painted cloud chamber at sea level; muons that should die near the top reach the ground), the light clock at rest on
// the painted spacecraft, the same clock moving (the relativity engine's zigzag, longer path at the same c, counters
// drifting apart), Pythagoras on half a tick (the slant lifts off into a large triangle), the time-dilation equation and
// proper time (event markers: one clock at both events in the ship frame, two clocks in Earth's frame).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Bracket, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, EARTH, LPlate, plateH} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {LightClock, Ship} from '../../physics/light/frames';
import {AtmosColumn, CLOUD_CHAMBER, ClockDial, LightClockPanel, REL_ANCHOR} from '../../physics/light/relativity';
import {nat} from '../../physics/light/thermal';
import {lightClockAt, lightClockTicks} from '../../sims/relativity';
import {HandoffBoard12, M7V12FinalFrame} from '../phys-y12-m7-v12/s3';
import {ATM_M, B_CLOCK, B_MU, HEAD, HEAD_SIZE, RANGE_CLASS_M, TAU0_US, cap, cue, g} from './common';
import {AMBER, Counter, GREY, INK, Lbl, ORANGE, Panel, SLATE, Strip, TEAL, VIOLET, fx} from './parts';

type Pt = [number, number];
const G6 = g(B_CLOCK);

// ---------- 1. hook ----------
export const COL1 = {x: 470, y: 230, w: 300, h: 630};
const CH_W = 170;
export const chamberPlace = (cx: number, ground: number, w: number): Place => ({x: cx - w / 2, y: ground - plateH(CLOUD_CHAMBER, w), w});
/** Short coded tracks flashing over the chamber's glass top (one per detection). */
export const Tracks: React.FC<{p: Place; f: number; from: number; every?: number}> = ({p, f, from, every = 12}) => {
	if (f < from) return null;
	const A = REL_ANCHOR.chamberGlass;
	const a = nat(CLOUD_CHAMBER, p, A[0], A[1]), b = nat(CLOUD_CHAMBER, p, A[2], A[3]);
	const k = Math.floor((f - from) / every), age = (f - from) % every;
	return (
		<g>
			{[0, 1, 2].map(j => {
				const i = k - j;
				if (i < 0) return null;
				const u = (Math.sin(i * 91.7) * 0.5 + 0.5), x = a[0] + 10 + u * (b[0] - a[0] - 20);
				const o = Math.max(0, 1 - (age + j * every) / (3 * every));
				return <line key={j} x1={x - 8} y1={a[1] + 4} x2={x + 6} y2={b[1] - 4} stroke={SLATE.stroke} strokeWidth={3} opacity={o} />;
			})}
		</g>
	);
};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const cos = cue(id, 'Cosmic rays hitting the top of the atmosphere'), mu = cue(id, 'particles called muons'), tw = cue(id, 'two point two microseconds'), six = cue(id, 'six hundred and sixty metres'), pred = cue(id, 'prediction'), det = cue(id, 'Detectors at sea level catch plenty of them'), times = cap(id, cue(id, 'times'));
	if (f < 1) return <M7V12FinalFrame />;
	const C1 = COL1, ground = C1.y + C1.h;
	const cp = chamberPlace(C1.x + C1.w / 2, ground, CH_W);
	const shrink = prog(f, 4, 24);
	const sp: Place = {x: 420 + (1420 - 420) * shrink, y: 520 + (200 - 520) * shrink, w: 800 + (400 - 800) * shrink};
	const decay = f < det ? 640 * (RANGE_CLASS_M / ATM_M) : 280;
	const tickAt = Math.max(det, pred + 92);
	const count = f < det ? 0 : Math.floor((f - det) / 12);
	const tiny = C1.h * (RANGE_CLASS_M / ATM_M);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 2, 16)}}><HandoffBoard12 f={0} final heading={false} chip={false} /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, 6, 16)}>
					<Ship p={sp} />
					<LightClock x={sp.x + sp.w * 0.58} y={sp.y + 8} h={sp.w * 0.18} w={sp.w * 0.12} pulse={AMBER.stroke} u={0.5 + 0.5 * Math.sin(f / 8)} />
				</g>
				<Disc spec={EARTH} cx={200} cy={800} d={260} opacity={prog(f, cos, 16)} />
				<g opacity={prog(f, cos, 16)}>
					<AtmosColumn x={C1.x} y={C1.y} w={C1.w} h={C1.h} f={f} decayPx={decay} speed={8} n={f < det ? 14 : 30} dot={SLATE.stroke} hold={f < six} showMuons={f >= mu} start={mu} />
					<LPlate spec={CLOUD_CHAMBER} p={cp} />
					{Array.from({length: 6}, (_, i) => { const u = ((f - cos) * 0.03 + i / 6) % 1; return <line key={i} x1={C1.x + 30 + i * 46} y1={C1.y - 80 + 70 * u} x2={C1.x + 10 + i * 46} y2={C1.y - 120 + 70 * u} stroke={GREY.stroke} strokeWidth={4} strokeLinecap="round" opacity={f < cos ? 0 : 1 - u} />; })}
				</g>
				<Tracks p={cp} f={f} from={det} />
				<Countdown start={pred} end={pred + 90} x={1700} y={520} r={44} />
				{f >= tickAt ? <Mark x={1130} y={590} at={tickAt} kind="tick" color={INK} size={34} /> : null}
				<Bracket x1={C1.x - 34} y1={C1.y} x2={C1.x - 34} y2={ground} color={INK} at={cos + 10} label="15 km" size={30} lx={C1.x - 60} ly={C1.y + C1.h / 2} anchor="end" />
				<Bracket x1={C1.x + C1.w + 26} y1={C1.y} x2={C1.x + C1.w + 26} y2={C1.y + tiny} color={SLATE.stroke} at={six} />
			</FrameSvg>
			<Lbl x={96} y={960 - 40} at={cos + 20} color={GREY.ink} size={26}>not to scale</Lbl>
			<Lbl x={C1.x + C1.w + 50} y={C1.y + 6} at={mu} color={SLATE.ink} size={30}>muons (unstable)</Lbl>
			<Chip x={1000} y={420} at={tw} size={32} color={INK}>{`average lifetime at rest: ${fx(TAU0_US, 1)} μs`}</Chip>
			<Lbl x={C1.x + C1.w + 50} y={C1.y + 56} at={six} color={SLATE.ink} size={30}>{`≈ ${fx(Math.round(RANGE_CLASS_M / 10) * 10)} m (${B_MU}c × ${fx(TAU0_US, 1)} μs)`}</Lbl>
			<HandTag x={C1.x + C1.w + 50} y={C1.y + 116} text="dies way up here?" at={six + 14} out={det} size={34} color={SLATE.ink} />
			<Chip x={1000} y={560} at={pred} size={32} color={INK}>many</Chip>
			<Chip x={1170} y={560} at={pred + 4} size={32} color={INK}>a few</Chip>
			<Chip x={1340} y={560} at={pred + 8} size={32} color={INK}>almost none</Chip>
			<Lbl x={C1.x + C1.w + 50} y={ground - 140} at={det} color={INK} size={52}>{`detected: ${count}`}</Lbl>
			<HandTag x={C1.x + C1.w + 50} y={ground - 60} text="observed at sea level" at={det + 20} size={34} color={INK} marks={[{kind: 'circle', cx: cp.x + cp.w / 2, cy: cp.y + plateH(CLOUD_CHAMBER, cp.w) / 2, rx: cp.w * 0.75, ry: plateH(CLOUD_CHAMBER, cp.w) * 0.62}]} />
			<HandTag x={0} y={0} at={times} color={INK} marks={[{kind: 'underline', x1: 660, x2: 1050, y: 152}]} />
		</>
	);
};

// ---------- 2. the light clock at rest ----------
const SHIP2: Place = {x: 96, y: 700, w: 880};
const CLK2 = {x: 520, base: 640, sep: 400};
export const S02: React.FC = () => {
	const id = 'clock-at-rest';
	const f = useCurrentFrame();
	const dd = cue(id, 'a distance d apart'), tick = cue(id, 'One tick is one round trip'), two = cue(id, 'the pulse travels two d'), cc = cap(id, cue(id, 'c', 2));
	const tau = f < tick ? 0 : (f - tick) / 60;
	const ticks = Math.floor(tau + 1e-9);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Ship p={SHIP2} />
				<line x1={CLK2.x - 50} y1={CLK2.base} x2={CLK2.x - 50} y2={SHIP2.y + 40} stroke={TEAL.stroke} strokeWidth={4} />
				<line x1={CLK2.x + 50} y1={CLK2.base} x2={CLK2.x + 50} y2={SHIP2.y + 40} stroke={TEAL.stroke} strokeWidth={4} />
				<LightClockPanel x0={CLK2.x} base={CLK2.base} sep={CLK2.sep} beta={0} tau={tau} mw={180} mirror={INK} path={TEAL.stroke} pulse={AMBER.stroke} showVert={f >= two} />
				<Bracket x1={CLK2.x - 130} y1={CLK2.base - CLK2.sep} x2={CLK2.x - 130} y2={CLK2.base} color={INK} at={dd} label="d" size={44} lx={CLK2.x - 160} ly={CLK2.base - CLK2.sep / 2} anchor="end" />
				{f >= two ? <g opacity={prog(f, two, 12)}><path d={`M${CLK2.x + 30},${CLK2.base - 30} L${CLK2.x + 30},${CLK2.base - CLK2.sep + 30}`} stroke={TEAL.stroke} strokeWidth={4} markerEnd="" /><path d={`M${CLK2.x + 22},${CLK2.base - CLK2.sep + 46} l8,-16 l8,16`} fill="none" stroke={TEAL.stroke} strokeWidth={4} /><path d={`M${CLK2.x + 46},${CLK2.base - CLK2.sep + 30} L${CLK2.x + 46},${CLK2.base - 30}`} stroke={TEAL.stroke} strokeWidth={4} /><path d={`M${CLK2.x + 38},${CLK2.base - 46} l8,16 l8,-16`} fill="none" stroke={TEAL.stroke} strokeWidth={4} /></g> : null}
				<ClockDial cx={1180} cy={380} r={46} t={f / 30} color={TEAL.stroke} opacity={prog(f, 0, 12)} ring={prog(f, cc + 8, 12)} />
			</FrameSvg>
			<Lbl x={CLK2.x + 110} y={CLK2.base - CLK2.sep - 20} at={0} color={INK} size={30}>mirror</Lbl>
			<Lbl x={CLK2.x + 110} y={CLK2.base + 10} at={0} color={INK} size={30}>mirror</Lbl>
			<Lbl x={1250} y={380} at={0} color={TEAL.ink} size={34}>ship frame (clock at rest)</Lbl>
			<Lbl x={1100} y={520} at={tick} color={TEAL.ink} size={52}>{`ticks: ${ticks}`}</Lbl>
			<Lbl x={CLK2.x + 70} y={CLK2.base - CLK2.sep / 2} at={two} color={TEAL.ink} size={44}>2d</Lbl>
			<Lbl x={1100} y={640} at={two + 10} color={AMBER.ink} size={34}>light travels 2d at speed c</Lbl>
			<div style={{position: 'absolute', left: 1100, top: 690}}><Row at={cc} size={56}><AnswerBox at={cc + 6}><span style={{color: TEAL.ink}}>t₀ = 2d / c</span></AnswerBox></Row></div>
			<HandTag x={1100} y={850} text="t₀: the clock's own time" at={cc + 12} size={36} color={TEAL.ink} />
		</>
	);
};

// ---------- 3. the same clock, moving ----------
const PL = {x: 96, y: 230, w: 640, h: 560}, PR = {x: 790, y: 230, w: 1034, h: 560};
const RX0 = PR.x + 70;
const SEP3 = 300, BASE3 = 660;
export const S03: React.FC = () => {
	const id = 'clock-moving';
	const f = useCurrentFrame();
	const side = cue(id, 'the mirrors move sideways'), down = cue(id, 'down'), lng = cue(id, 'longer than two d'), still = cue(id, 'the pulse still travels at c'), lp = cue(id, 'Longer path, same speed'), earth = cap(id, cue(id, 'Earth', 2));
	const tk = lightClockTicks({height: 1, beta: B_CLOCK});
	const tauR = kf(f, [[side, 0], [down, G6], [down + 60, G6 + 60 / 40]], false) + (f > down + 60 ? (f - down - 60) / 40 : 0);
	const tauL = f / 40;
	const nL = f < lp ? 0 : Math.floor((f - lp) / 40), nR = f < lp ? 0 : Math.floor((f - lp) / (40 * G6));
	const zig = lightClockAt({height: 1, beta: B_CLOCK}, tk.moving);
	const hyp = Math.hypot(zig.x * SEP3 / 2, SEP3 - 16) * 2;
	const cmp = prog(f, lng, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Panel x={PL.x} y={PL.y} w={PL.w} h={PL.h} title="ship frame" color={TEAL.stroke} />
				<Panel x={PR.x} y={PR.y} w={PR.w} h={PR.h} title="Earth frame" color={INK} opacity={prog(f, 0, 16)} />
				<LightClockPanel x0={PL.x + PL.w / 2} base={BASE3} sep={SEP3} beta={0} tau={tauL} mw={130} mirror={INK} path={TEAL.stroke} pulse={AMBER.stroke} showVert />
				<LightClockPanel x0={RX0} base={BASE3} sep={SEP3} beta={B_CLOCK} tau={f < side ? 0 : tauR} cycle={2} mw={130} mirror={INK} path={INK} pulse={AMBER.stroke} />
				<g opacity={prog(f, side, 12)}><line x1={PR.x + 60} y1={PR.y + PR.h - 40} x2={PR.x + 260} y2={PR.y + PR.h - 40} stroke={ORANGE.stroke} strokeWidth={6} /><path d={`M${PR.x + 280},${PR.y + PR.h - 40} l-20,-11 v22 z`} fill={ORANGE.stroke} /></g>
				{cmp > 0 ? <g opacity={cmp}>
					<line x1={340} y1={840} x2={340 + (SEP3 - 16) * 2 * 0.62} y2={840} stroke={TEAL.stroke} strokeWidth={8} strokeLinecap="round" />
					<line x1={340} y1={900} x2={340 + hyp * 0.62 * cmp} y2={900} stroke={INK} strokeWidth={8} strokeLinecap="round" />
				</g> : null}
			</FrameSvg>
			<Lbl x={96} y={850} at={lng} color={TEAL.ink} size={30}>2d (ship)</Lbl>
			<Lbl x={96} y={910} at={lng + 10} color={INK} size={30}>slanted (Earth)</Lbl>
			<HandTag x={370 + hyp * 0.62} y={900} text="longer path" at={lng + 16} size={36} color={INK} />
			<Lbl x={PL.x + PL.w / 2 + 80} y={BASE3 - SEP3 / 2} at={still} color={AMBER.ink} size={30}>c (postulate 2)</Lbl>
			<Lbl x={PR.x + 520} y={PR.y + 70} at={still + 6} color={AMBER.ink} size={30}>c (postulate 2)</Lbl>
			<Counter x={PL.x + 30} y={PL.y + 80} n={nL} color={TEAL.ink} opacity={prog(f, lp, 10)} />
			<Counter x={PR.x + PR.w - 260} y={PR.y + 80} n={nR} color={INK} opacity={prog(f, lp, 10)} />
			<HandTag x={1000} y={850} text="each tick takes longer in Earth's frame" at={earth} size={32} color={INK} />
			<Lbl x={1000} y={922} at={earth} color={INK} size={52}>t &gt; t₀</Lbl>
		</>
	);
};

// ---------- 4. Pythagoras on half a tick ----------
const TRI = {ax: 200, ay: 880, h: 600};
export const triPts = (k = 1, ox = 0, oy = 0) => {
	const base = TRI.h * B_CLOCK * G6 * k, h = TRI.h * k, A: Pt = [TRI.ax + ox, TRI.ay + oy];
	return {A, B: [A[0] + base, A[1] - h] as Pt, C: [A[0] + base, A[1]] as Pt};
};
export const Triangle: React.FC<{k?: number; ox?: number; oy?: number; dLabel?: React.ReactNode; dColor?: string; labels?: number[]; size?: number}> = ({k = 1, ox = 0, oy = 0, labels = [1, 1, 1]}) => {
	const {A, B, C} = triPts(k, ox, oy);
	return (
		<g>
			<path d={`M${A[0]},${A[1]} L${C[0]},${C[1]} L${B[0]},${B[1]}`} fill="none" stroke={INK} strokeWidth={4} />
			<line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={AMBER.stroke} strokeWidth={7} opacity={labels[0] > 0 ? 1 : 0.6} />
			<line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]} stroke={ORANGE.stroke} strokeWidth={7} opacity={labels[1]} />
			<line x1={C[0]} y1={C[1]} x2={B[0]} y2={B[1]} stroke={INK} strokeWidth={7} opacity={labels[2]} />
			<path d={`M${C[0] - 30},${C[1]} L${C[0] - 30},${C[1] - 30} L${C[0]},${C[1] - 30}`} fill="none" stroke={INK} strokeWidth={3} />
		</g>
	);
};
export const S04: React.FC = () => {
	const id = 'pythagoras';
	const f = useCurrentFrame();
	const half = cue(id, 'Take half a tick'), slant = cue(id, 'light travels c t over two along the slant'), side = cue(id, 'the ship moves v t over two sideways'), hd = cue(id, 'The height is still d'), py = cue(id, 'by Pythagoras'), sq = cap(id, cue(id, 'all squared', 2));
	const lift = prog(f, 0, 30);
	const k = 0.5 + 0.5 * lift, ox = (1 - lift) * 700, oy = (1 - lift) * -220;
	const {A, B, C} = triPts(k, ox, oy);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Triangle k={k} ox={ox} oy={oy} labels={[1, prog(f, side, 12), prog(f, hd, 12)]} />
				{f < half + 40 ? <circle cx={A[0]} cy={A[1]} r={12} fill={AMBER.stroke} opacity={1 - prog(f, half + 20, 20)} /> : null}
			</FrameSvg>
			<Lbl x={(A[0] + B[0]) / 2 - 40} y={(A[1] + B[1]) / 2 - 20} at={slant} color={AMBER.ink} size={44} anchor="end">ct/2</Lbl>
			<Lbl x={(A[0] + C[0]) / 2} y={A[1] + 50} at={side} color={ORANGE.ink} size={44} anchor="middle">vt/2</Lbl>
			<Lbl x={C[0] + 24} y={(C[1] + B[1]) / 2} at={hd} color={INK} size={44}>d</Lbl>
			<Lbl x={940} y={250} at={half} color={INK} size={36}>half a tick: time t/2 (Earth frame)</Lbl>
			<HandTag x={C[0] + 80} y={(C[1] + B[1]) / 2 + 90} text="sideways motion: d unchanged" at={hd + 10} size={34} color={INK} />
			<div style={{position: 'absolute', left: 940, top: 520}}><Row at={py} size={56}>(ct/2)² = d² + (vt/2)²</Row></div>
			<Lbl x={940} y={820} at={py + 30} color={GREY.ink} size={30}>right-angled triangle: hypotenuse² = sum of the other two sides²</Lbl>
			<HandTag x={0} y={0} at={sq} color={AMBER.stroke} marks={[{kind: 'arrow', from: [(A[0] + B[0]) / 2 + 40, (A[1] + B[1]) / 2], to: [960, 560], bend: -0.2}]} />
		</>
	);
};

// ---------- 5. the time dilation equation ----------
export const S05: React.FC = () => {
	const id = 'dilation-equation';
	const sw = cue(id, 'swap d for c t zero over two'), mo = cue(id, 'Multiply out'), sq1 = cue(id, 't zero squared'), sq2 = cue(id, 'over c squared'), lf = cue(id, 'the Lorentz factor'), z = cap(id, cue(id, 'gamma t zero'));
	const {B, C} = triPts(0.85, -40, 0);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><Panel x={730} y={236} w={1094} h={640} title="algebra (Earth frame)" color={INK} size={28} /><Triangle k={0.85} ox={-40} oy={0} /></FrameSvg>
			<Lbl x={C[0] + 20} y={(C[1] + B[1]) / 2} at={-30} out={sw} color={INK} size={40}>d</Lbl>
			<Lbl x={C[0] + 20} y={(C[1] + B[1]) / 2} at={sw + 8} color={TEAL.ink} size={40}>ct₀/2</Lbl>
			<Lbl x={96} y={240} at={0} color={TEAL.ink} size={32}>clock at rest: t₀ = 2d/c</Lbl>
			<Lbl x={96} y={290} at={sw} color={TEAL.ink} size={32}>so d = ct₀/2</Lbl>
			<Strip x={1100} y={160} at={0} size={32}>Goal: write t in terms of t₀</Strip>
			<div style={{position: 'absolute', left: 770, top: 270, display: 'flex', flexDirection: 'column', gap: 18, width: 1040}}>
				<Row at={-30} ageAt={mo} size={52}>(ct/2)² = d² + (vt/2)²</Row>
				<Row at={mo} ageAt={sq1} size={52}>c²t²/4 = c²t₀²/4 + v²t²/4</Row>
				<Row at={sq1 - 10} ageAt={sq2} size={52}>t²(c² − v²) = c²t₀²</Row>
				<Row at={sq2 - 10} ageAt={z} size={56}><AnswerBox at={sq2}>t = t₀ / √(1 − v²/c²)</AnswerBox></Row>
				<Row at={lf - 6} ageAt={z} size={52}><span style={{color: VIOLET.ink}}>γ = 1 / √(1 − v²/c²)</span></Row>
				<Row at={z} size={56}><AnswerBox at={z + 4}>t = γt₀</AnswerBox></Row>
			</div>
			<HandTag x={1420} y={470} text="data sheet" at={sq2 + 12} size={34} color={INK} />
			<HandTag x={1420} y={550} text="gamma ≥ 1" at={lf + 14} size={36} color={VIOLET.ink} />
		</>
	);
};

// ---------- 6. proper time ----------
export const TwoPanels: React.FC<{tauL: number; tauR: number; cycleR?: number; o?: number; left?: string; right?: string}> = ({tauL, tauR, cycleR = 50, o = 1, left = 'ship frame', right = 'Earth frame'}) => (
	<g opacity={o}>
		<Panel x={PL.x} y={PL.y} w={PL.w} h={PL.h} title={left} color={TEAL.stroke} />
		<Panel x={PR.x} y={PR.y} w={PR.w} h={PR.h} title={right} color={INK} />
		<LightClockPanel x0={PL.x + PL.w / 2} base={BASE3} sep={SEP3} beta={0} tau={tauL} mw={130} mirror={INK} path={TEAL.stroke} pulse={AMBER.stroke} showVert />
		<LightClockPanel x0={RX0} base={BASE3} sep={SEP3} beta={B_CLOCK} tau={tauR} cycle={cycleR} mw={130} mirror={INK} path={INK} pulse={AMBER.stroke} />
	</g>
);
export const PANELS = {PL, PR, BASE3, SEP3, RX0};
export const S06: React.FC = () => {
	const id = 'proper-time';
	const f = useCurrentFrame();
	const pt = cue(id, 'the proper time'), ev = cue(id, 'two events'), one = cue(id, "one clock that's present at both of them"), only = cue(id, "only the ship's clock is at both"), sh = cue(id, 'shortest'), rt = cap(id, cue(id, 'right'));
	const tauR = Math.min(G6, f / 45), tauL = Math.min(1, f / 45);
	const tk = lightClockTicks({height: 1, beta: B_CLOCK});
	const e2x = RX0 + lightClockAt({height: 1, beta: B_CLOCK}, tk.moving).x * SEP3;
	const e1: Pt = [RX0, BASE3], e2: Pt = [e2x, BASE3], es: Pt = [PL.x + PL.w / 2, BASE3];
	const pulse1 = 0.6 * Math.sin(Math.PI * Math.min(1, Math.max(0, (f - one) / 30)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<TwoPanels tauL={tauL} tauR={tauR} />
				{f >= ev ? <g opacity={prog(f, ev, 12)}>
					<circle cx={e1[0]} cy={e1[1] + 30} r={12} fill={INK} /><circle cx={e2[0]} cy={e2[1] + 30} r={12} fill={INK} />
					<circle cx={es[0] - 14} cy={es[1] + 30} r={12} fill={INK} /><circle cx={es[0] + 14} cy={es[1] + 30} r={12} fill={INK} />
				</g> : null}
				<ClockDial cx={es[0] - 170} cy={es[1] - 60} r={40} t={f / 30} color={TEAL.stroke} opacity={prog(f, one, 12)} ring={f >= sh ? prog(f, sh + 6, 12) : pulse1} />
				<ClockDial cx={e1[0]} cy={e1[1] + 90} r={30} t={f / 30} color={INK} opacity={prog(f, only, 12)} />
				<ClockDial cx={e2[0]} cy={e2[1] + 90} r={30} t={f / 30} color={INK} opacity={prog(f, only + 6, 12)} />
			</FrameSvg>
			<Lbl x={e1[0] - 34} y={BASE3 + 34} at={ev} color={INK} size={30} anchor="end">1</Lbl>
			<Lbl x={e2[0] + 22} y={BASE3 + 34} at={ev} color={INK} size={30}>2</Lbl>
			<Lbl x={PR.x + 30} y={PR.y + 62} at={ev} color={INK} size={28}>event 1: pulse leaves bottom mirror; event 2: pulse returns</Lbl>
			<Lbl x={PL.x + 30} y={PL.y + 62} at={ev + 8} color={TEAL.ink} size={28}>events 1 and 2: same place</Lbl>
			<Lbl x={PL.x + 30} y={PL.y + PL.h - 30} at={one + 6} color={TEAL.ink} size={28}>proper time t₀: one clock, same place</Lbl>
			<Lbl x={1420} y={700} at={only + 10} color={INK} size={28}>Earth: two clocks, two places</Lbl>
			<Chip x={1430} y={400} at={sh} size={34} color={INK}>γ ≥ 1 → t ≥ t₀</Chip>
			<HandTag x={es[0] - 230} y={es[1] - 150} text="shortest" at={sh + 8} size={38} color={TEAL.ink} />
			<CrossedChip x={1430} y={490} at={rt} crossAt={rt + 10} size={30} caption="both valid in their own frame">proper = correct</CrossedChip>
			<Chip x={96} y={820} at={pt} size={28} w={1728} color={TEAL.ink} border={TEAL.stroke}>Proper time (Δt₀): The time interval between two events measured in the frame where they occur at the same position, the shortest possible time for those events.</Chip>
		</>
	);
};
