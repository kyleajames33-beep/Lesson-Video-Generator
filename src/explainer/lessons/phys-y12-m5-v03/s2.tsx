// Scenes 6 to 10: the landing velocity (the triangle flip), the range from the clock, what controls what
// (the launch-speed slider), the equal-level condition (a cliff), and the mirror memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TRACK, TYPE, rgba} from '../../shared/tokens';
import {
	AidCard, AnswerBox, BallSvg, Bracket, CrossedChip, DISPLAY, FlightLane, GroundLine, HandNote, Ledger, MS, Q, ROLE, ReadCard, Readouts, Row, StrobeBall, Sub, Sup, VecArrow, type World, sx, sy,
} from '../../physics/projectile/board';
import {VGraph, vgGeom} from '../../physics/projectile/vgraph';
import {G, clockAt, flightAt, flightT, fx, landT, maxH, range, vel} from '../../physics/projectile/flight';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {CLIFF, D, HEAD, HEAD_SIZE, R, RUN, T, TC, TUP, U, U2, UX, UY, VYC, cue} from './common';
import {Stamp, VelTri, pathT, ptT} from './parts';
import {WH} from './s1';

const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;

/** A prediction chip that can be ticked (ink frame and tick) or crossed (slate), from scene 1. */
const PredChip: React.FC<{x: number; y: number; text: string; tickAt?: number; crossAt?: number}> = ({x, y, text, tickAt, crossAt}) => {
	const f = useCurrentFrame();
	const tk = tickAt === undefined ? 0 : prog(f, tickAt, 12);
	const cr = crossAt === undefined ? 0 : prog(f, crossAt, 12);
	return (
		<div style={{position: 'absolute', left: x, top: y, display: 'inline-flex', alignItems: 'center', gap: 10, background: tk > 0 ? CARD : '#f1ebdf', border: `${tk > 0 ? 4.5 : 2.5}px solid ${cr > 0 ? ROLE.slate.stroke : INK}`, borderRadius: 14, padding: '4px 18px 8px', ...DISPLAY(36, cr > 0 ? ROLE.slate.ink : INK, 700)}}>
			<span style={{position: 'relative'}}>
				{text}
				{cr > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -4, top: 0, width: 'calc(100% + 8px)', height: '100%', overflow: 'visible'}}><path d="M0,64 Q50,52 100,40" stroke={INK} strokeWidth={5} vectorEffect="non-scaling-stroke" fill="none" style={{clipPath: `inset(-50% ${100 - cr * 100}% -50% 0)`}} /></svg> : null}
			</span>
			{tk > 0 ? <svg width={34} height={34} viewBox="0 0 40 40" style={{overflow: 'visible', opacity: tk}}><path d="M6,22 L16,32 L35,8" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /></svg> : null}
		</div>
	);
};

// ---------- 6. the landing velocity ----------
const L6 = {x: 990, y: 580}, D6 = {x: 1400, y: 320}, K6 = 13;
export const S06: React.FC = () => {
	const id = 'landing-velocity';
	const f = useCurrentFrame();
	const horiz = cue(id, 'horizontal component'), vert = cue(id, 'The vertical component'), down = cue(id, 'down'), those = cue(id, 'Those are the same'), landSp = cue(id, 'landing speed'), launchSp = cue(id, 'launch speed'), only = cue(id, 'Only the direction'), below = cue(id, 'fifty degrees below'), instead = cue(id, 'instead');
	// close-up of the end of the flight: landing at (720, 820), 34 px per metre
	const ppm = 34;
	const w: World = {x0: 720 - R * ppm, y0: 820, ppm};
	const p = prog(f, only, 40);
	const cx = L6.x + (D6.x - L6.x) * p, cy = L6.y + (D6.y - L6.y) * p, sY = 1 - 2 * p;
	const copyO = p > 0 ? 1 - prog(f, only + 46, 12) : 0;
	return (
		<>
			<SceneHeading text="The landing: faster, slower or the same?" at={-40} size={52} />
			<PredChip x={96} y={180} text="faster" crossAt={launchSp + 10} />
			<PredChip x={262} y={180} text="slower" crossAt={launchSp + 16} />
			<PredChip x={432} y={180} text="same speed" tickAt={launchSp} />
			<FrameSvg>
				<GroundLine x1={96} x2={900} y={w.y0} />
				<path d={pathT(w, U, D, T, T - 1.05)} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} />
				<BallSvg cx={sx(w, R)} cy={w.y0 - 17} d={34} />
				<VelTri x0={L6.x} y0={L6.y} k={K6} vx={UX} vy={UY} arcLabel="50° above" />
				<path d={`M${D6.x},${D6.y} H${D6.x + UX * K6} V${D6.y + UY * K6} Z`} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 9" />
				<VelTri x0={D6.x} y0={D6.y} k={K6} vx={UX} vy={-UY} sidesAt={-30} vyAt={down} hypAt={those} arcAt={below} arcLabel="50° below" />
				{copyO > 0 ? (
					<g opacity={copyO} transform={`translate(${cx},${cy}) scale(1,${sY}) translate(${-L6.x},${-L6.y})`}>
						<VelTri x0={L6.x} y0={L6.y} k={K6} vx={UX} vy={UY} />
					</g>
				) : null}
			</FrameSvg>
			<ReadCard x={110} y={600} w={330} label="clock at landing" value="t = 3.91" unit="s" border={INK} />
			<HandTag x={560} y={890} text="back at the launch level" at={-30} size={TYPE.handSmall} color={INK} />
			<div style={{position: 'absolute', left: L6.x - 10, top: 196, ...DISPLAY(TYPE.body, INK, 800)}}>at launch</div>
			<div style={{position: 'absolute', left: D6.x - 10, top: 196, ...DISPLAY(TYPE.body, INK, 800)}}>at landing</div>
			<Lbl x={L6.x + (UX * K6) / 2} y={L6.y + 40} color={ROLE.x.ink} anchor="middle" size={34}>16.1</Lbl>
			<Lbl x={L6.x + UX * K6 + 18} y={L6.y - (UY * K6) / 2} color={ROLE.y.ink} size={34}>19.15</Lbl>
			<Lbl x={L6.x + (UX * K6) / 2 - 24} y={L6.y - (UY * K6) / 2 - 26} color={ROLE.v.ink} anchor="end" size={34}>25.0</Lbl>
			<Lbl x={D6.x + (UX * K6) / 2} y={D6.y - 34} color={ROLE.x.ink} anchor="middle" size={34} at={horiz}>16.1</Lbl>
			<Lbl x={D6.x + UX * K6 + 18} y={D6.y + (UY * K6) / 2} color={ROLE.y.ink} size={34} at={down}>19.15 down</Lbl>
			<Lbl x={D6.x + (UX * K6) / 2 - 30} y={D6.y + (UY * K6) / 2 + 30} color={ROLE.v.ink} anchor="end" size={34} at={landSp}>25.0</Lbl>
			<HandTag x={1420} y={600} text="same size, flipped" at={instead - 10} size={TYPE.handSmall} color={ROLE.v.ink} marks={[{kind: 'arrow', from: [1210, 470], to: [1480, 520], bend: 0.25}]} />
			<div style={{position: 'absolute', left: 980, top: 670, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={horiz} ageAt={vert} size={TYPE.current} oldSize={34}><Q s="v" ax="x" /> = <Q s="u" ax="x" /> = 16.07<MS /> (unchanged)</Row>
				<Row at={vert} ageAt={landSp} size={TYPE.current} oldSize={34}><Q s="v" ax="y" /> = 19.15 − 9.8 × 3.908</Row>
				<Row at={down - 10} ageAt={landSp} size={TYPE.current} oldSize={34}>&nbsp;&nbsp;&nbsp;&nbsp;= <span style={{color: ROLE.y.ink}}>−19.15<MS /></span> (down)</Row>
				<Row at={landSp} ageAt={below - 10} size={TYPE.current} oldSize={34}>speed = √(16.07<Sup>2</Sup> + 19.15<Sup>2</Sup>) = 25.0<MS /></Row>
				<Row at={below - 10} size={TYPE.current}><AnswerBox at={below}><span style={{color: ROLE.v.ink}}>25.0<MS /> at 50° below the horizontal</span></AnswerBox></Row>
			</div>
		</>
	);
};

// ---------- 7. the range from the clock ----------
export const S07: React.FC = () => {
	const id = 'range-from-clock';
	const f = useCurrentFrame();
	const clock = cue(id, 'clock'), inAir = cue(id, 'The ball is in the air'), three = cue(id, 'three point nine one'), sideways = cue(id, 'moving sideways'), sixteen = cue(id, 'sixteen point zero seven'), lands = cue(id, 'lands about'), sixty = cue(id, 'sixty-two'), away = cue(id, 'away');
	const tt = f < inAir ? 0 : clockAt(f, inAir, T, Math.max(1, (lands - inAir) / 30 / T));
	const s = flightAt(RUN, tt);
	const bx = sx(WH, s.x), by = sy(WH, s.y);
	const landX = sx(WH, R);
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<FrameSvg>
				<FlightLane mx={WH.x0} gy={WH.y0} ppm={WH.ppm} u={U} deg={D} lw={150} right={1150} hideBall />
				<path d={pathT(WH, U, D, T)} fill="none" stroke={ROLE.v.stroke} strokeWidth={2.5} />
				{tt > 0.001 ? <path d={pathT(WH, U, D, tt)} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} /> : null}
				{tt > 0.001 ? <line x1={WH.x0} x2={bx} y1={WH.y0 - 4} y2={WH.y0 - 4} stroke={ROLE.x.stroke} strokeWidth={8} strokeLinecap="round" /> : null}
				{tt > 0.001 && tt < T ? <circle cx={bx} cy={WH.y0 - 4} r={10} fill={ROLE.x.stroke} /> : null}
				<BallSvg cx={bx} cy={by - (tt >= T - 0.001 ? 16 : 0)} d={34} />
				<Bracket x1={WH.x0} y1={WH.y0 + 40} x2={landX} y2={WH.y0 + 40} color={ROLE.x.ink} at={sixty} label="62.8 m" ly={WH.y0 + 76} size={TYPE.current} />
			</FrameSvg>
			<HandNote x={760} y={WH.y0 + 80} at={away} size={TYPE.handSmall} color={ROLE.x.ink}>u<Sub>x</Sub> × T</HandNote>
			<Readouts x={96} y={186} w={540} title="live" rows={[
				{label: 'clock t', value: fx(tt, 2), unit: 's', color: INK},
				{label: <>sideways <Q s="s" ax="x" /></>, value: fx(UX * tt, 1), unit: 'm', color: ROLE.x.ink},
			]} />
			<Ledger x={1300} y={186} w={524} h={360} size={34} titleSize={28}
				clock={{value: f >= three ? '3.91 s' : 't', label: f >= three ? 'flight time T' : 'one clock', t: tt, pulse: clock}}
				carry={{at: sideways, into: 'x'}}
				hor={{rows: [{content: <><Q s="u" ax="x" /> = 16.07</>, at: -30}, {content: <><Q s="s" ax="x" /> = <Q s="u" ax="x" plain />T</>, at: sideways, box: away}]}}
				ver={{rows: [{content: <><Q s="u" ax="y" /> = 19.15</>, at: -30}, {content: <>T = 3.91 s</>, at: three, box: three + 10}]}} />
			<div style={{position: 'absolute', left: 1300, top: 600, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={sixteen} size={TYPE.current}><Q s="s" ax="x" /> = 16.07 × 3.908</Row>
				<Row at={sixty - 8} size={TYPE.working}>= <AnswerBox at={sixty}><span style={{color: ROLE.x.ink}}>62.8 m</span></AnswerBox></Row>
			</div>
			<Enter at={inAir} style={{position: 'absolute', left: 1300, top: 800, width: 524}}>
				<div style={{...DISPLAY(32, INK_SOFT, 700), whiteSpace: 'normal'}}>sideways at a steady <span style={{color: ROLE.x.ink}}>16.07<MS /></span> for the whole 3.91 s</div>
			</Enter>
		</>
	);
};

// ---------- 8. what controls what: the launch-speed slider ----------
const W8_: World = {x0: 180, y0: 940, ppm: 5};
const GX8 = 720, GY8 = 186, GW8 = 440, GH8 = 360;
export const S08: React.FC = () => {
	const id = 'what-controls-what';
	const f = useCurrentFrame();
	const write = cue(id, 'Write u y as'), hBecomes = cue(id, 'height becomes'), ftIs = cue(id, 'flight time is'), g2 = cue(id, 'over g'), twice = cue(id, 'twice as fast'), doubles = cue(id, 'doubles'), squared = cue(id, 'squared', 3), faster = cue(id, 'A faster ball'), longer = cue(id, 'for longer'), multiply = cue(id, 'two effects'), tempting = cue(id, 'tempting'), but = cue(id, 'but the flight');
	const u = f < twice ? U : kf(f, [[twice, U], [twice + 75, U2]]);
	const W8: World = {...W8_, ppm: kf(f, [[twice - 40, 10], [twice, 5]])};
	const Tu = flightT(u, D), Hu = maxH(u, D);
	const gg = vgGeom(GX8, GY8, GW8, GH8, 8, -40, 40);
	const SLX = 1230, SLW = 540, SLY = 500;
	const knob = SLX + ((u - 25) / 25) * SLW;
	const swapH = prog(f, hBecomes, 16), swapT = prog(f, ftIs, 16);
	const settle = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - g2) / 24)));
	const BoxF: React.FC<{y: number; old: React.ReactNode; neu: React.ReactNode; p: number}> = ({y, old, neu, p}) => (
		<div style={{position: 'absolute', left: 96, top: y, width: 600, height: 96}}>
			<div style={{position: 'absolute', inset: 0, background: CARD, border: `${5 + 3 * settle}px solid ${ROLE.y.stroke}`, borderRadius: 16, boxShadow: CARD_SHADOW}} />
			<div style={{position: 'absolute', left: 24, top: 10, opacity: 1 - p, transform: `translateY(${-30 * p}px)`, ...DISPLAY(TYPE.working, INK)}}>{old}</div>
			<div style={{position: 'absolute', left: 24, top: 10, opacity: p, transform: `translateY(${30 * (1 - p)}px)`, ...DISPLAY(TYPE.working, INK)}}>{neu}</div>
		</div>
	);
	const UY_ = <Q s="u" ax="y" plain />;
	const usin = <span style={{color: ROLE.y.ink}}>u sin θ</span>;
	return (
		<>
			<SceneHeading text="What controls the height and the flight time?" at={-40} size={52} />
			<Enter at={write - 4} style={{position: 'absolute', left: 96, top: 182}}>
				<div style={{display: 'inline-block', background: CARD, border: `3px solid ${ROLE.y.stroke}`, borderRadius: 12, padding: '2px 16px 6px', ...DISPLAY(36, ROLE.y.ink, 800)}}>{UY_} = u sin θ</div>
			</Enter>
			<BoxF y={256} p={swapH} old={<>H = {UY_}<Sup>2</Sup> ÷ 2g</>} neu={<>H = u<Sup>2</Sup> <span style={{color: ROLE.y.ink}}>sin<Sup>2</Sup>θ</span> ÷ 2g</>} />
			<BoxF y={372} p={swapT} old={<>T = 2{UY_} ÷ g</>} neu={<>T = 2{usin} ÷ g</>} />
			<CrossedChip x={96} y={500} at={tempting - 6} crossAt={but} size={36} caption="not everything squares">T ∝ u<Sup>2</Sup></CrossedChip>
			<Enter at={but + 20} style={{position: 'absolute', left: 330, top: 500}}>
				<div style={{display: 'inline-block', background: CARD, border: `4px solid ${INK}`, borderRadius: 14, padding: '4px 18px 8px', ...DISPLAY(36, INK, 800)}}>T ∝ u, H ∝ u<Sup>2</Sup></div>
			</Enter>
			<FrameSvg>
				<FlightLane mx={W8.x0} gy={W8.y0} ppm={W8.ppm} u={U} deg={D} lw={100} right={1520} hideBall />
				<path d={pathT(W8, U, D, flightT(U, D))} fill="none" stroke={ROLE.v.stroke} strokeWidth={3} strokeDasharray="6 8" />
				<path d={pathT(W8, u, D, Tu)} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} />
				<BallSvg cx={sx(W8, range(u, D))} cy={W8.y0 - 12} d={24} />
				<line x1={sx(W8, (range(u, D)) / 2) + 26} x2={sx(W8, range(u, D) / 2) + 26} y1={W8.y0} y2={sy(W8, Hu)} stroke={ROLE.y.stroke} strokeWidth={4} />
				<VGraph x={GX8} y={GY8} w={GW8} h={GH8} tMax={8} vMin={-40} vMax={40} tTicks={[0, 2, 4, 6, 8]} vTicks={[-40, 0, 40]} vLabel="v (m s⁻¹)"
					series={[
						{fn: t => UY - G * t, t1: flightT(U, D), color: ROLE.y.stroke},
						{fn: t => 2 * UY - G * t, t1: f < faster ? 0 : kf(f, [[faster, 0], [longer, flightT(U2, D)]]), color: ROLE.y.stroke, dash: '12 8'},
					]}
					shades={[{fn: t => UY - G * t, t0: 0, t1: TUP, color: ROLE.y.stroke, at: multiply}, {fn: t => 2 * UY - G * t, t0: 0, t1: 2 * TUP, color: ROLE.y.stroke, at: multiply + 10, opacity: 0.16}]} />
				<line x1={SLX} x2={SLX + SLW} y1={SLY} y2={SLY} stroke={TRACK} strokeWidth={14} strokeLinecap="round" />
				<line x1={SLX} x2={knob} y1={SLY} y2={SLY} stroke={ROLE.v.stroke} strokeWidth={14} strokeLinecap="round" />
				<circle cx={knob} cy={SLY} r={18} fill={CARD} stroke={ROLE.v.stroke} strokeWidth={6} />
			</FrameSvg>
			<Lbl x={gg.tx(0.15)} y={gg.vy(UY) - 4} color={ROLE.y.ink} size={30}>25</Lbl>
			<Lbl x={gg.tx(0.15)} y={gg.vy(2 * UY) + 34} color={ROLE.y.ink} size={30} at={faster}>50</Lbl>
			<HandTag x={gg.tx(4.3)} y={gg.vy(22)} text="area = height" at={multiply} size={30} color={ROLE.y.ink} />
			<HandTag x={gg.tx(4.3)} y={gg.vy(10)} text="× 4" at={multiply + 14} size={TYPE.handSmall} color={ROLE.y.ink} />
			<Lbl x={SLX - 16} y={SLY + 46} color={INK_SOFT} size={28}>25</Lbl>
			<Lbl x={SLX + SLW - 16} y={SLY + 46} color={INK_SOFT} size={28}>50</Lbl>
			<Lbl x={knob} y={SLY - 40} color={ROLE.v.ink} size={30} anchor="middle">u</Lbl>
			<Readouts x={1180} y={186} w={644} title="live: same angle, 50°" rows={[
				{label: 'launch speed u', value: fx(u, 1), unit: <MS />, color: ROLE.v.ink},
				{label: 'flight time T', value: fx(Tu, 2), unit: 's', color: INK},
				{label: 'height H', value: fx(Hu, 1), unit: 'm', color: ROLE.y.ink},
			]} />
			<Enter at={doubles} style={{position: 'absolute', left: 1180, top: 580, display: 'flex', alignItems: 'center', gap: 16}}>
				<div style={{display: 'inline-block', background: CARD, border: `4px solid ${INK}`, borderRadius: 14, padding: '2px 16px 6px', ...DISPLAY(34, INK, 800)}}>T: 3.91 s → 7.82 s (× 2)</div>
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall, color: INK}}>T ∝ u</span>
			</Enter>
			<Enter at={squared} style={{position: 'absolute', left: 1180, top: 652, display: 'flex', alignItems: 'center', gap: 16}}>
				<div style={{display: 'inline-block', background: CARD, border: `4px solid ${ROLE.y.stroke}`, borderRadius: 14, padding: '2px 16px 6px', ...DISPLAY(34, ROLE.y.ink, 800)}}>H: 18.7 m → 74.9 m (× 4)</div>
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall, color: ROLE.y.ink}}>H ∝ u²</span>
			</Enter>
		</>
	);
};

// ---------- 9. the condition: same level only ----------
const W9: World = {x0: 240, y0: 640, ppm: 12};
export const S09: React.FC = () => {
	const id = 'condition';
	const f = useCurrentFrame();
	const twice = cue(id, 'Twice the time'), landing = cue(id, 'landing at the launch'), sameLevel = cue(id, 'same level'), cliff = cue(id, 'cliff'), longer = cue(id, 'longer'), neither = cue(id, 'neither shortcut'), works = cue(id, 'works');
	const p = prog(f, cliff, 40);
	const drop = CLIFF * p;
	const tEnd = landT(U, D, drop);
	const EDGE = 560, BASE = W9.y0 + drop * W9.ppm;
	const [pkx] = ptT(W9, U, D, TUP);
	const endX = sx(W9, UX * tEnd);
	const downT = tEnd - TUP;
	const hatch: React.ReactNode[] = [];
	for (let y = W9.y0 + 14; y < BASE - 6; y += 22) hatch.push(<line key={y} x1={EDGE} y1={y} x2={EDGE - 14} y2={y + 12} stroke={INK_SOFT} strokeWidth={2} />);
	const BY = 330;
	return (
		<>
			<SceneHeading text="One warning: both shortcuts need the same level" at={-40} size={52} />
			<FrameSvg>
				{p > 0 ? <rect x={96} y={W9.y0} width={EDGE - 96} height={BASE - W9.y0} fill={TRACK} /> : null}
				<FlightLane mx={W9.x0} gy={W9.y0} ppm={W9.ppm} u={U} deg={D} lw={120} right={EDGE} hideBall floorLeft={96} />
				{p > 0 ? <line x1={EDGE} x2={EDGE} y1={W9.y0} y2={BASE} stroke={INK} strokeWidth={4} /> : null}
				{hatch}
				<GroundLine x1={EDGE} x2={1260} y={BASE} />
				<path d={pathT(W9, U, D, tEnd)} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} />
				<BallSvg cx={endX} cy={BASE - 16} d={30} />
				{p > 0 ? <line x1={EDGE} x2={1260} y1={W9.y0} y2={W9.y0} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" /> : null}
				<Bracket x1={W9.x0} y1={BY} x2={pkx} y2={BY} color={ROLE.y.ink} label="1.95 s up" ly={BY - 34} size={34} />
				<Bracket x1={pkx} y1={BY} x2={endX} y2={BY} color={p > 0.5 ? INK : ROLE.y.ink} label={p < 0.98 ? `${fx(downT, 2)} s down` : `${fx(downT, 2)} s down: longer`} ly={BY - 34} size={34} />
			</FrameSvg>
			{p > 0 ? <Lbl x={EDGE + 16} y={(W9.y0 + BASE) / 2} size={34} color={INK}>{fx(drop, 0)} m</Lbl> : null}
			{p > 0 ? <Lbl x={1250} y={W9.y0 - 22} size={28} color={INK_SOFT} anchor="end">launch level</Lbl> : null}
			<HandTag x={endX - 40} y={BY + 50} text="longer fall" at={longer} size={TYPE.handSmall} color={INK} />
			<div style={{position: 'absolute', left: 1300, top: 186, width: 524, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Enter at={twice - 4}>
					<div style={{...card, border: `4px solid ${INK}`, position: 'relative'}}>
						<div style={DISPLAY(TYPE.current, INK, 800)}>T = 2 × t<Sub>up</Sub></div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall, color: ROLE.y.ink, opacity: prog(f, sameLevel, 12)}}>same level only</div>
					</div>
				</Enter>
				<Enter at={landing - 4}>
					<div style={{...card, border: `4px solid ${INK}`, position: 'relative'}}>
						<div style={{...DISPLAY(TYPE.current, INK, 800), whiteSpace: 'normal'}}>landing speed = launch speed</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall, color: ROLE.y.ink, opacity: prog(f, sameLevel, 12)}}>same level only</div>
					</div>
				</Enter>
				<Enter at={-30}>
					<div style={{...card, border: `3px solid ${ROLE.given.stroke}`}}>
						<Title color={ROLE.given.ink}>{f < neither ? 'On level ground' : `From a ${CLIFF} m cliff`}</Title>
						<div style={{...DISPLAY(34, INK, 750), marginTop: 4, whiteSpace: 'normal'}}>{f < neither ? 'fall: 1.95 s, the same as the climb' : `fall: ${fx(TC - TUP, 2)} s, not 1.95 s`}</div>
						<div style={{...DISPLAY(34, INK, 750), whiteSpace: 'normal'}}>{f < neither ? <>lands at 25.0<MS />, the launch speed</> : <>lands at {fx(Math.hypot(UX, VYC), 1)}<MS />, not 25.0</>}</div>
					</div>
				</Enter>
			</div>
			<Stamp x={1690} y={250} at={works} text="only if" size={28} />
			<Stamp x={1690} y={420} at={works + 8} text="only if" size={28} />
		</>
	);
};

// ---------- 10. memory aid: the mirror ----------
const W10: World = {x0: 330, y0: 920, ppm: 18};
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const wayDown = cue(id, 'the way down'), mirrors = cue(id, 'mirrors'), fall = cue(id, 'fall takes'), passes = cue(id, 'passes each height'), same = cue(id, 'same speed'), launchSpeed = cue(id, 'launch speed'), angle = cue(id, 'launch angle below'), started = cue(id, 'started');
	const [pkx, pky] = ptT(W10, U, D, TUP);
	const landX = sx(W10, R);
	const p = prog(f, mirrors, 30);
	const rising = pathT(W10, U, D, TUP);
	const glow = prog(f, started, 14);
	const pairs = [0.65, 1.3];
	const KV = 6;
	const BY = 470;
	return (
		<>
			<AidCard x={300} y={150} w={1320} at={-30}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 76, lineHeight: 1.05, textAlign: 'center', transform: `scale(${1 + 0.05 * Math.sin(Math.PI * prog(f, wayDown, 20))})`}}><span style={{color: ROLE.y.ink}}>The way down</span> <span style={{color: ROLE.v.ink}}>mirrors the way up.</span></div>
				<div style={{...DISPLAY(34, INK, 700), textAlign: 'center', marginTop: 4, opacity: prog(f, wayDown + 30, 14)}}>(level ground only)</div>
			</AidCard>
			<FrameSvg>
				{glow > 0 ? <line x1={W10.x0} x2={landX} y1={W10.y0 - 2} y2={W10.y0 - 2} stroke={rgba(ROLE.v.stroke, 0.45 * glow)} strokeWidth={22} strokeLinecap="round" /> : null}
				<FlightLane mx={W10.x0} gy={W10.y0} ppm={W10.ppm} u={U} deg={D} lw={150} right={1600} hideBall />
				<line x1={pkx} x2={pkx} y1={pky - 60} y2={W10.y0} stroke={INK} strokeWidth={3.5} strokeDasharray="12 9" />
				<path d={rising} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} />
				{p < 1 ? <path d={pathT(W10, U, D, T, TUP)} fill="none" stroke={ROLE.v.stroke} strokeWidth={3.5} strokeDasharray="10 9" /> : null}
				{p > 0 ? <g transform={`translate(${pkx},0) scale(${1 - 2 * p},1) translate(${-pkx},0)`}><path d={rising} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} /></g> : null}
				{pairs.map((t1, i) => {
					const t2 = T - t1;
					const [x1, y1] = ptT(W10, U, D, t1), [x2, y2] = ptT(W10, U, D, t2);
					const [vx1, vy1] = vel(U, D, t1), [vx2, vy2] = vel(U, D, t2);
					const o = prog(f, passes + i * 10, 12);
					if (o <= 0) return null;
					return (
						<g key={t1} opacity={o}>
							<line x1={x1} x2={x2} y1={y1} y2={y2} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="5 7" />
							<StrobeBall cx={x1} cy={y1} d={30} />
							<StrobeBall cx={x2} cy={y2} d={30} />
							<VecArrow x={x1} y={y1} dx={vx1 * KV} dy={-vy1 * KV} color={ROLE.v.stroke} width={5} head={16} />
							<VecArrow x={x2} y={y2} dx={vx2 * KV} dy={-vy2 * KV} color={ROLE.v.stroke} width={5} head={16} />
						</g>
					);
				})}
				<Bracket x1={W10.x0} y1={BY} x2={pkx} y2={BY} color={ROLE.y.ink} at={fall} label="1.95 s up" ly={BY - 30} size={34} />
				<Bracket x1={pkx} y1={BY} x2={landX} y2={BY} color={ROLE.y.ink} at={fall + 10} label="1.95 s down" ly={BY - 30} size={34} />
				{f >= angle ? (
					<g opacity={prog(f, angle, 12)}>
						<path d={`M${landX - 70},${W10.y0} A70,70 0 0,1 ${landX - 70 * Math.cos((50 * Math.PI) / 180)},${W10.y0 - 70 * Math.sin((50 * Math.PI) / 180)}`} fill="none" stroke={INK} strokeWidth={3.5} />
						<BallSvg cx={landX} cy={W10.y0 - 16} d={32} />
					</g>
				) : null}
			</FrameSvg>
			<HandTag x={590} y={815} text="same speed, same height" at={same} size={30} color={ROLE.v.ink} />
			<Lbl x={landX - 150} y={W10.y0 - 40} size={34} at={angle + 6}>50°</Lbl>
			<Lbl x={W10.x0 + 74} y={W10.y0 - 40} size={34} at={angle}>50°</Lbl>
			<HandTag x={915} y={860} text={`lands at ${fx(Math.hypot(UX, UY), 1)} m s⁻¹`} at={launchSpeed} size={30} color={ROLE.v.ink} />
		</>
	);
};
