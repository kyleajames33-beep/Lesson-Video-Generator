// Scenes 1 to 4: the hook (paired flights), range from the two columns, the swap, the shortcut.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Enter, FONT_DISPLAY, HandText, INK, INK_SOFT, prog} from '../../kit';
import {Card, CardTitle, FrameSvg, HandTag, LiveReadoutBoard, MarkSpan, SceneHeading, kf, vis} from '../../math/studio';
import {clockAt, cue, flightT, fx, hold, pos, range, ux, uy} from './common';
import {
	AngleArc, AnswerBox, BLUE, BallSvg, Chip, Cos, DISPLAY, FlightLane, LaunchTriangle, LauncherSvg, MS, ORANGE, ORANGE_STROKE, RBox, ReadCard,
	HandNote, Row, STYLE_FLAT, STYLE_STEEP, Sin, Sub, Sup, TEAL, TEAL_STROKE, TravelSide, Ux, Uy, launcherGeom,
} from './parts';

// ---------- 1. hook: longer in the air, same landing ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const spot = cue(id, 'spot'), comp = cue(id, 'complementary'), t391 = cue(id, 'three point nine'), t328 = cue(id, 'three point two'), place = cue(id, 'same place'), think = cue(id, 'think');
	const h = hold(id);
	const U = 25, PPM = 17, MX = 330, GA = 500, GB = 870, LW = 200;
	const landX = MX + range(U, 50) * PPM;
	const replay = f >= spot;
	const T50 = flightT(U, 50), T40 = flightT(U, 40);
	const c50 = replay ? clockAt(f, spot, T50) : T50, c40 = replay ? clockAt(f, spot, T40) : T40;
	const CA = 230, CB = 620;
	return (
		<>
			<SceneHeading text="Why do complementary angles give the same range?" at={-40} size={56} />
			<FrameSvg>
				<FlightLane mx={MX} gy={GA} ppm={PPM} u={U} deg={50} lw={LW} right={landX + 50} style={STYLE_STEEP} full={!replay} launchAt={replay ? spot : undefined} shadow landRing={-30} />
				<FlightLane mx={MX} gy={GB} ppm={PPM} u={U} deg={40} lw={LW} right={landX + 50} style={STYLE_FLAT} full={!replay} launchAt={replay ? spot : undefined} shadow landRing={-30} />
				<line x1={landX} x2={landX} y1={GA + 30} y2={GB - 30} stroke={INK} strokeWidth={3} strokeDasharray="10 9" />
			</FrameSvg>
			<div style={{position: 'absolute', left: landX - 168, top: 640, ...DISPLAY(44, ORANGE)}}>62.8 m</div>
			<HandTag x={landX + 18} y={690} text="?" at={-30} out={comp} size={76} color={INK} />
			<div style={{position: 'absolute', left: 110, top: 430, ...DISPLAY(42, BLUE_GREY_T, 800)}}>50°</div>
			<div style={{position: 'absolute', left: 110, top: 800, ...DISPLAY(42, ORANGE, 800)}}>40°</div>
			<div style={{position: 'absolute', left: 96, top: 168, ...DISPLAY(32, INK_SOFT, 700)}}>both at 25<MS /></div>
			<ReadCard x={1470} y={CA} w={354} label="50° ball: time in the air" value={fx(c50, 2)} unit="s" color={BLUE} pulse={t391} />
			<ReadCard x={1470} y={CB} w={354} label="40° ball: time in the air" value={fx(c40, 2)} unit="s" color={ORANGE} pulse={t328} />
			<HandTag x={1480} y={CA + 70} at={t391} marks={[{kind: 'circle', cx: 1566, cy: CA + 80, rx: 92, ry: 34}]} color={BLUE} />
			<HandTag x={1480} y={CB + 70} at={t328} marks={[{kind: 'circle', cx: 1566, cy: CB + 80, rx: 92, ry: 34}]} color={ORANGE_STROKE} />
			<HandTag x={1490} y={CA + 190} text="longer up" at={t391 + 12} size={50} role="a" />
			<HandTag x={1490} y={CA + 260} text="(same landing spot)" at={-30} out={t391} size={40} color={INK_SOFT} />
			<Chip x={440} y={556} at={comp} size={40}>40° + 50° = 90°: <span style={{color: INK}}>complementary</span></Chip>
			<HandTag x={900} y={780} text="same spot?" at={place} size={52} role="mistake"
				marks={[{kind: 'arrow', from: [1120, 756], to: [landX - 28, GA + 18], bend: 0.2}, {kind: 'arrow', from: [1130, 792], to: [landX - 30, GB - 14], bend: -0.2}]} markAt={place + 8} />
			<div style={{position: 'absolute', left: 520, top: 892}}><HandText text="Longer in the air, same landing: how?" at={think - 6} size={50} color={INK} cps={40} /></div>
			<FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1660} y={840} r={54} /></FrameSvg>
		</>
	);
};
const BLUE_GREY_T = '#566c82';

// ---------- 2. range from the two columns ----------
export const S02: React.FC = () => {
	const id = 'range-from-columns';
	const f = useCurrentFrame();
	const g1 = cue(id, 'g'), turns = cue(id, 'turns'), rR = cue(id, 'distance'), thats = cue(id, "That's"), which = cue(id, 'which is'), g3 = cue(id, 'g', 3), together = cue(id, 'together'), crosses = cue(id, 'crosses'), stays = cue(id, 'stays up');
	const U = 25, DEG = 50, PPM = 9, MX = 250, GY = 900, LW = 130;
	const T = flightT(U, DEG), R = range(U, DEG);
	const period = Math.round(T * 30) + 48;
	const launch = f < 20 ? undefined : 20 + period * Math.floor((f - 20) / period);
	const t = launch === undefined ? 0 : clockAt(f, launch, T);
	const [bx, by] = pos(U, DEG, t);
	const postX = MX + R * PPM + 70;
	const RX0 = 740, RPM = 15, RY = 360;
	const tealH = kf(f, [[rR - 12, 270], [rR + 6, 330], [thats - 12, 330], [thats + 6, 384], [which - 12, 384], [which + 6, 462]]);
	return (
		<>
			<SceneHeading text="Build the range from the two columns" at={-40} size={56} />
			{/* vertical column */}
			<Card x={96} y={176} w={560} h={430} at={-30} border="rgba(31,111,178,0.45)" borderWidth={3}>
				<CardTitle color={BLUE}>Vertical column: time aloft</CardTitle>
				<div style={{...DISPLAY(46, INK, 700), marginTop: 6}}><Uy /> = u <Sin /></div>
				<div style={{...DISPLAY(30, INK_SOFT, 600), marginTop: 8}}>up, stops, falls back to the launch level</div>
				<Enter at={cue(id, 'two u sin') - 4} style={{marginTop: 18}}>
					<div style={{display: 'inline-block', border: `4px solid ${BLUE}`, borderRadius: 14, padding: '2px 18px 6px', background: '#fffdf8', ...DISPLAY(52, BLUE)}}>T = 2u sin θ ÷ g</div>
				</Enter>
			</Card>
			<HandTag x={130} y={560} text="from u sin θ, last time" at={g1 + 10} size={42} role="a" />
			{/* horizontal column */}
			<Card x={700} y={176} w={1124} h={tealH} at={-30} border="rgba(19,118,122,0.45)" borderWidth={3}>
				<CardTitle color={TEAL}>Horizontal column: crossing</CardTitle>
				<div style={{...DISPLAY(46, INK, 700), marginTop: 6}}><Ux /> = u <Cos /> <span style={DISPLAY(30, INK_SOFT, 600)}>   steady speed across</span></div>
				<div style={{height: 132}} />
				<div style={{marginTop: 0, display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 16, rowGap: 6, alignItems: 'baseline'}}>
					<Row at={rR} ageAt={thats} size={56} oldSize={42}>R</Row>
					<Row at={rR} ageAt={thats} size={56} oldSize={42}>= <Ux /> × T</Row>
					<span />
					<Row at={thats} ageAt={which} size={56} oldSize={42}>= u <Cos /> × 2u <Sin /> ÷ g</Row>
					<span />
					<Row at={which} size={56}>= 2u<Sup>2</Sup> <MarkSpan kind="circle" at={together + 8} color={BLUE}><Sin /></MarkSpan> <MarkSpan kind="circle" at={together} color={TEAL_STROKE}><Cos /></MarkSpan> ÷ g</Row>
				</div>
			</Card>
			<HandNote x={1420} y={556} at={crosses - 10} size={40} color={TEAL}>crossing speed (u<Sub>x</Sub>)</HandNote>
			<HandTag x={0} y={0} at={together + 10} marks={[{kind: 'arrow', from: [1412, 556], to: [1205, 556], bend: 0.12}]} color={TEAL_STROKE} />
			<HandNote x={1420} y={604} at={stays - 14} size={40} color={BLUE}>time aloft (from u<Sub>y</Sub>)</HandNote>
			<HandTag x={0} y={0} at={together + 18} marks={[{kind: 'arrow', from: [1412, 606], to: [1130, 596], bend: 0.12}]} color={BLUE} />
			{/* the horizontal column's picture: the teal shadow on a distance ruler, one tick per second of flight */}
			<FrameSvg>
				<line x1={RX0} x2={RX0 + R * RPM} y1={RY} y2={RY} stroke={TEAL_STROKE} strokeWidth={5} strokeLinecap="round" />
				{[0, 1, 2, 3].map(k => {const x = RX0 + ux(U, DEG) * k * RPM; return <g key={k}><line x1={x} x2={x} y1={RY - 14} y2={RY + 14} stroke={INK} strokeWidth={3.5} /><text x={x} y={RY + 46} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{k} s</text>{t >= k && k > 0 && t > 0 ? <circle cx={x} cy={RY} r={8} fill={TEAL_STROKE} opacity={0.55} /> : null}</g>;})}
				<line x1={RX0 + R * RPM} x2={RX0 + R * RPM} y1={RY - 22} y2={RY + 22} stroke={ORANGE_STROKE} strokeWidth={5} />
				<circle cx={RX0 + bx * RPM} cy={RY} r={14} fill={TEAL_STROKE} stroke="#fffdf8" strokeWidth={4} />
			</FrameSvg>
			<HandNote x={1000} y={318} at={-30} size={36} color={TEAL}>equal gaps: steady u<Sub>x</Sub></HandNote>
			<Enter at={20 + Math.round(T * 30) - 4} style={{position: 'absolute', left: RX0 + R * RPM - 300, top: RY - 72}}>
				<div style={{...DISPLAY(38, INK, 800), textAlign: 'right', width: 420}}><span style={{color: TEAL}}>16.1</span> × 3.91 = <span style={{color: ORANGE}}>62.8 m</span></div>
			</Enter>
			{/* the carry: the vertical column's time goes across */}
			<HandTag x={604} y={444} at={turns} marks={[{kind: 'arrow', from: [560, 476], to: [696, 470], bend: -0.18}]} color={INK} />
			<HandTag x={640} y={420} text="T" at={turns + 10} size={46} color={INK} />
			{/* stage: the 50 degree flight, with the two shadows */}
			<FrameSvg>
				<FlightLane mx={MX} gy={GY} ppm={PPM} u={U} deg={DEG} lw={LW} right={postX + 30} launchAt={launch} ghost={0.35} style={STYLE_STEEP} shadow />
				<line x1={postX} x2={postX} y1={GY} y2={GY - 190} stroke={BLUE} strokeWidth={3} strokeDasharray="6 6" opacity={0.6} />
				{t > 0 && t < T ? <circle cx={postX} cy={GY - by * PPM} r={10} fill={BLUE} /> : null}
			</FrameSvg>
			<LiveReadoutBoard x={1010} y={672} width={530} inline at={-30} rows={[
				{label: 'clock t', value: t, digits: 2, unit: 's'},
				{label: <>across: <Ux /> × t</>, value: bx * 1, digits: 1, unit: 'm', role: 'b'},
				{label: 'height (from uᵧ)', value: Math.max(0, by), digits: 1, unit: 'm', role: 'a'},
			]} />
			<Enter at={together + 20} style={{position: 'absolute', left: 1580, top: 700}}>
				<div style={{display: 'inline-block', border: `4.5px solid ${INK}`, borderRadius: 14, padding: '6px 18px 10px', background: '#fffdf8', boxShadow: '0 10px 22px rgba(60,45,20,0.12)', ...DISPLAY(44, ORANGE)}}>R ∝ <Ux /> × <Uy /></div>
			</Enter>
			<HandTag x={1586} y={850} text="both matter" at={g3 + 40} size={42} color={ORANGE} />
		</>
	);
};

// ---------- 3. the swap ----------
export const S03: React.FC = () => {
	const id = 'swap';
	const f = useCurrentFrame();
	const s161 = cue(id, 'sixteen'), s192 = cue(id, 'nineteen'), forty = cue(id, 'At forty'), across = cue(id, 'nineteen', 2), up = cue(id, 'up', 2), cosF = cue(id, 'cos fifty'), slowly = cue(id, 'crosses more slowly'), faster = cue(id, 'crosses faster'), swapping = cue(id, 'Swapping'), match = cue(id, 'so the ranges'), exactly = cue(id, 'exactly');
	const U = 25, K = 11;
	const L0 = {x: 250, y: 470}, R0 = {x: 980, y: 470};
	const X50 = ux(U, 50) * K, Y50 = uy(U, 50) * K, X40 = ux(U, 40) * K;
	// replay lanes
	const PPM = 8, LW = 130, GY = 900, MXL = 220, MXR = 1010;
	const T50 = flightT(U, 50), T40 = flightT(U, 40);
	const c50 = f >= slowly ? clockAt(f, slowly, T50) : T50, c40 = f >= slowly ? clockAt(f, slowly, T40) : T40;
	return (
		<>
			<SceneHeading text="Complementary angles swap the components" at={-40} size={56} />
			<Card x={1450} y={160} w={374} at={-30} pad="10px 22px 12px">
				<CardTitle>From the columns</CardTitle>
				<div style={{display: 'inline-block', border: `4px solid ${INK}`, borderRadius: 12, padding: '0 14px 4px', ...DISPLAY(44, ORANGE)}}>R ∝ <Ux /> × <Uy /></div>
			</Card>
			<FrameSvg>
				<LaunchTriangle x0={L0.x} y0={L0.y} k={K} u={U} deg={50} labelsAt={[s161, s192]} />
				<LaunchTriangle x0={R0.x} y0={R0.y} k={K} u={U} deg={40} ghost labelsAt={[99999, 99999]} />
				<LaunchTriangle x0={R0.x} y0={R0.y} k={K} u={U} deg={40} at={forty} labelsAt={[across, cue(id, 'sixteen', 2)]} flash={up + 40} />
				<TravelSide len={X50} from={{x: L0.x, y: L0.y, vertical: false}} to={{x: R0.x + X40, y: R0.y, vertical: true}} at={up} label="16.1" lift={150} />
				<TravelSide len={Y50} from={{x: L0.x + X50, y: L0.y, vertical: true}} to={{x: R0.x, y: R0.y, vertical: false}} at={up + 6} label="19.2" lift={60} />
			</FrameSvg>
			<HandTag x={R0.x + 120} y={300} text="?" at={-30} out={forty} size={80} color={INK_SOFT} />
			<div style={{position: 'absolute', left: L0.x - 150, top: 220, ...DISPLAY(32, INK_SOFT, 700)}}>25<MS /></div>
			<HandTag x={600} y={250} text="swap!" at={up + 20} size={54} color={INK} />
			<Chip x={1290} y={346} at={cosF} size={40}>cos 50° = sin 40° = 0.643</Chip>
			{/* replays with their own clocks, one playback rate */}
			<FrameSvg>
				<FlightLane mx={MXL} gy={GY} ppm={PPM} u={U} deg={50} lw={LW} right={760} style={STYLE_STEEP} launchAt={f >= slowly ? slowly : undefined} shadow ghost={0.35} />
				<FlightLane mx={MXR} gy={GY} ppm={PPM} u={U} deg={40} lw={LW} right={1570} style={STYLE_FLAT} launchAt={f >= slowly ? slowly : undefined} shadow ghost={0.35} floorLeft={930} />
			</FrameSvg>
			<ReadCard x={560} y={640} w={250} label="50°: in the air" value={fx(c50, 2)} unit="s" color={BLUE} size={48} />
			<ReadCard x={1370} y={640} w={250} label="40°: in the air" value={fx(c40, 2)} unit="s" color={ORANGE} size={48} />
			<HandTag x={214} y={700} text="slower × longer" at={slowly + 20} size={46} color={TEAL} />
			<HandTag x={1030} y={700} text="faster × shorter" at={faster + 10} size={46} color={TEAL} />
			<div style={{position: 'absolute', left: 120, top: 556}}><Row at={swapping} size={44}><span style={{color: TEAL}}>16.07</span> × 3.908 = <AnswerBox at={match}>62.8 m</AnswerBox></Row></div>
			<div style={{position: 'absolute', left: 900, top: 556}}><Row at={swapping + 20} size={44}><span style={{color: TEAL}}>19.15</span> × 3.280 = <AnswerBox at={match}>62.8 m</AnswerBox></Row></div>
			<HandTag x={676} y={584} text="same product" at={exactly - 30} size={44} color={ORANGE} anchor="start" />
		</>
	);
};

// ---------- 4. the shortcut and its conditions ----------
export const S04: React.FC = () => {
	const id = 'shortcut-conditions';
	const f = useCurrentFrame();
	const ident = cue(id, 'Two sin'), check = cue(id, 'Two times'), sixty = cue(id, 'sixty'), soR = cue(id, 'So R'), g = cue(id, 'g'), but = cue(id, 'But this'), level = cue(id, 'same level'), air = cue(id, 'no air'), because = cue(id, 'because'), flight = cue(id, 'flight time');
	// identity check panel: θ sweeps, then rests at 30 for the spoken check, then sweeps again
	const th = kf(f, [[0, 12], [check - 30, 78], [check, 30], [sixty + 60, 30], [sixty + 200, 62], [sixty + 330, 20], [sixty + 420, 45]]);
	const r = (d: number) => (d * Math.PI) / 180;
	const thR = Math.round(th);
	const lhs = 2 * Math.sin(r(thR)) * Math.cos(r(thR)), rhs = Math.sin(r(2 * thR));
	const PX = 1360, PY = 600, LW = 300;
	const lg = launcherGeom(PX, PY, LW, th);
	return (
		<>
			<SceneHeading text="A neater form, and when it works" at={-40} size={56} />
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 166}}>
				<div style={{display: 'inline-block', background: `rgba(220,234,247,${0.35 + 0.65 * vis(f, flight - 10, undefined, 12)})`, border: `3px solid ${BLUE}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(34, BLUE, 700)}}>built from the level-ground flight time: T = 2u sin θ ÷ g</div>
			</Enter>
			<div style={{position: 'absolute', left: 96, top: 250}}>
				<div style={DISPLAY(58, INK, 800)}>R = u<Sup>2</Sup> × <MarkSpan kind="box" at={ident} color={INK}>2 <Sin /> <Cos /></MarkSpan> ÷ g</div>
			</div>
			<Chip x={96} y={350} at={ident} size={36}>identity: 2 sin θ cos θ = sin 2θ <span style={{color: INK_SOFT}}>(true for every θ)</span></Chip>
			<div style={{position: 'absolute', left: 96, top: 446}}>
				<Row at={check} size={52}>2 × 0.500 × 0.866 = 0.866 = sin 60° <span style={{color: '#287347'}}>{f >= sixty ? '✓' : ''}</span></Row>
			</div>
			<HandTag x={1010} y={540} text="check it" at={sixty} size={46} color={INK} />
			<HandTag x={0} y={0} at={soR} marks={[{kind: 'arrow', from: [470, 318], to: [548, 356], bend: 0.3}]} color={INK} />
			<RBox x={560} y={566} at={g - 24} size={64} />
			{/* thumbnails of what came before, until the conditions need the space */}
			<Enter at={-30} out={but - 10} style={{position: 'absolute', left: 96, top: 452, width: 1100, height: 230, transform: `translateY(${250 * prog(f, check - 34, 26)}px)`}}>
				<div style={{position: 'absolute', left: 0, top: 0, width: 520, height: 220, background: '#fffdf8', borderRadius: 18, border: '2.5px solid rgba(60,45,20,0.10)', boxShadow: '0 10px 24px rgba(60,45,20,0.08)'}}>
					<svg width={520} height={220} style={{position: 'absolute', inset: 0}}>
						<LaunchTriangle x0={40} y0={190} k={7} u={25} deg={50} labelsAt={[99999, 99999]} />
						<LaunchTriangle x0={290} y0={190} k={7} u={25} deg={40} labelsAt={[99999, 99999]} />
					</svg>
				</div>
				<div style={{position: 'absolute', left: 560, top: 50}}><div style={{display: 'inline-block', border: `4px solid ${INK}`, borderRadius: 12, padding: '2px 16px 6px', background: '#fffdf8', ...DISPLAY(44, ORANGE)}}>R ∝ <Ux /> × <Uy /></div></div>
				<div style={{position: 'absolute', left: 566, top: 140, ...DISPLAY(32, INK_SOFT, 700)}}>complements swap <Ux /> and <Uy /></div>
			</Enter>
			{/* conditions hang from the box */}
			<FrameSvg>
				{[[level, 640, 360], [air, 780, 840], [air + 30, 920, 1100]].map(([a, x1, x2], i) => <DrawPath key={i} d={`M${x1},${662} L${x2},${758}`} at={a} dur={12} color={RED_SOFT} width={3.5} />)}
			</FrameSvg>
			<Chip x={96} y={760} at={level} size={36} color={INK} border={ORANGE_STROKE}>same launch and landing level</Chip>
			<Chip x={680} y={760} at={air} size={36} color={INK} border={ORANGE_STROKE}>no air resistance</Chip>
			<Chip x={1010} y={760} at={air + 30} size={36} color={INK} border={ORANGE_STROKE}>uniform g</Chip>
			<HandTag x={110} y={890} text="it came from the level-ground T" at={because} size={44} role="a" />
			{/* the identity, live: any angle */}
			<Card x={1250} y={166} w={574} h={780} at={-30} pad="14px 26px">
				<CardTitle>Check: any angle</CardTitle>
			</Card>
			<FrameSvg>
				<LauncherSvg px={PX} py={PY} w={LW} deg={th} />
				<AngleArc px={PX} py={PY} r={110} deg={th} label={`${Math.round(th)}°`} size={40} />
				<BallSvg cx={lg.muzzle[0]} cy={lg.muzzle[1]} d={lg.ballD} />
			</FrameSvg>
			<LiveReadoutBoard x={1280} y={690} width={514} inline at={-30} rows={[
				{label: 'θ', value: thR, digits: 0, unit: '°'},
				{label: '2 sin θ cos θ', value: lhs, digits: 3},
				{label: 'sin 2θ', value: rhs, digits: 3, role: 'k'},
			]} />
		</>
	);
};
const RED_SOFT = '#c7a27a';
