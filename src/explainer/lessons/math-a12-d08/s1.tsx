// Scenes 1 to 3: the hook (gap, guess against the flat tangent, the dashboard), the trip computer, the push
// and the pull on the graph, and the rule rebuilt from the product rule.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	CARD, CARD_SHADOW, Card, RolesOn, FrameSvg, FunctionSimulator, HandTag, LiveReadoutBoard, MarkSpan, SceneHeading, StudioDomainStrip, SvgPlate, TaskStrip,
	MATH_AMBER, MATH_EXCLUDED, MATH_STRAND_ACCENT, fmtNum, kf, smooth, usePlatePreload, vis,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';
import {cue} from './common';
import {Bl as D7Bl, DeckImg, Te} from '../math-a12-d07/parts';
import {
	AMB, Am, Asym, BLUE, Bt, CAR, Chip, CurveLabel, DISPLAY, DashBadge, Dashboard, EX, Frac, GREEN, JOIN, OpenMark, QUOT, ROAD, Ring, SCREEN_BLUE, SCREEN_TEAL, Sup, TEAL, TanLine, Tp, VIOLET, WIN_A, A_YTICKS, WholeRows,
	bottomTurn, dashPoints, gmap, topTurn,
} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** y = eˣ/(x + 1) written with the top teal and the bottom blue. */
export const HOOK = (size?: number) => <span style={{whiteSpace: 'pre', fontSize: size}}>y = <Frac n={<Tp>{EX}</Tp>} d={<Bt>x + 1</Bt>} /></span>;

// ---------- 1. hook: divide the derivatives? ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const there = cue(id, 'curve there'), frac = cue(id, 'A fraction like this'), time = cue(id, 'time', 2), divide = cue(id, 'divide the derivatives'), slope1 = cue(id, 'slope of one'), flat = cue(id, 'flat'), defined = cue(id, 'defined');
	const G1 = {x: 40, y: 168, w: 1080, h: 760};
	const t = smooth(prog(f, frac, 36));
	const G = {x: lerp(JOIN.x, G1.x, t), y: lerp(JOIN.y, G1.y, t), w: lerp(JOIN.w, G1.w, t), h: lerp(JOIN.h, G1.h, t)};
	const M = gmap(G.x, G.y, G.w, G.h, WIN_A);
	const P = M.pt(0, 1);
	const amb = prog(f, there, 14);
	const dashIn = smooth(prog(f, frac + 8, 30));
	const DX = 1150 + (1 - dashIn) * 260, DY = 228, DW = 720;
	const guessO = prog(f, slope1, 14) * (1 - 0.6 * prog(f, flat, 14));
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 6, 12)}}>
				<SceneHeading text="Next: one function divided by another" at={-60} />
				<div style={{position: 'absolute', left: 96, top: 162}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>So far: each factor takes a turn; the other one stays.</span></div>
				{/* d07's left card, exactly as in its last frame */}
				<div style={{position: 'absolute', left: 96, top: 250, width: 400, background: CARD, borderRadius: 18, padding: '14px 22px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}}>
					<div style={DISPLAY(28, INK_SOFT, 700)}>This video</div>
					<div style={DISPLAY(44)}>(uv)′ = <Te>u′v</Te> + <D7Bl>uv′</D7Bl></div>
					<div style={{position: 'relative', height: 120, marginTop: 10}}><DeckImg x={0} y={0} w={340} /></div>
				</div>
			</div>
			<SceneHeading text="Differentiating a quotient: the rule and its domain" at={18} size={54} />
			<FunctionSimulator at={-30} x={G.x} y={G.y} width={G.w} height={G.h} window={WIN_A} family={QUOT} timeline={[{frame: 0, x: 0}]} color={INK}
				yTicks={A_YTICKS} xLabel="x" yLabel="y"
				point={{at: -30}}
				overlay={() => (
					<FrameSvg>
						<Asym M={M} X={-1} o={1 - amb} color={MATH_EXCLUDED} />
						<Asym M={M} X={-1} o={amb} glow={vis(f, there, there + 60)} />
						<OpenMark M={M} X={-1} o={amb} />
						<Ring p={P} r={36} o={1 - prog(f, divide, 12)} />
						<TanLine M={M} X={0} Y={1} m={1} half={260} color={MATH_EXCLUDED} dash="14 10" width={5} opacity={guessO} />
						<TanLine M={M} X={0} Y={1} m={0} half={240} opacity={prog(f, flat, 12)} />
					</FrameSvg>
				)} />
			<RolesOn on={f >= there}><CurveLabel x={M.pt(0.6, 4.6)[0]} y={M.pt(0.6, 4.6)[1]} size={46}>{HOOK()}</CurveLabel></RolesOn>
			{/* d07's chips, carried into the hook */}
			<CurveLabel x={M.pt(-1, 5)[0] + 12} y={M.pt(-1, 5)[1] + 10} size={36} color={amb > 0.5 ? AMB : INK_SOFT}>x = −1</CurveLabel>
			<Chip x={M.pt(-2.9, 0)[0]} y={M.pt(0, 4.4)[1]} at={-30} out={there} size={38} color={MATH_AMBER}>bottom = 0 at x = −1</Chip>
			<Chip x={P[0] + 50} y={P[1] - 110} at={-30} out={defined} size={44} color={VIOLET}><span style={{color: VIOLET}}>gradient ?</span></Chip>
			<Chip x={1150} y={DY + 520} at={defined} size={38} color={VIOLET}><span style={{color: VIOLET}}>slope = ?, and where is it defined?</span></Chip>
			<Chip x={96} y={720} w={400} at={-30} out={14} size={38} color={MATH_STRAND_ACCENT}>Next: the quotient rule</Chip>
			<HandTag x={M.pt(-1, 0)[0] + 22} y={M.pt(0, -2.6)[1]} text="x ≠ −1: bottom = 0" at={there + 6} out={divide} size={40} role="k" />
			{/* the anchor: average speed = distance ÷ time */}
			<div style={{position: 'absolute', inset: 0, opacity: dashIn}}>
				<Dashboard x={DX} y={DY} w={DW} speed={0} at={-30}
					main={<><span style={{fontSize: 30, color: SCREEN_TEAL}}>distance</span><span style={{width: 150, height: 4, background: '#ffffff', borderRadius: 2, margin: '4px 0'}} /><span style={{fontSize: 30, color: SCREEN_BLUE}}>time</span></>}
					small={f >= time ? <span style={{fontSize: 36}}>0:00</span> : null} />
				<Card x={DX} y={DY + 290} w={DW} at={frac + 14} pad="14px 26px 16px">
					<div style={{...DISPLAY(44, INK, 800), display: 'flex', alignItems: 'center', gap: 14}}>average speed = <Frac n={<Tp>distance</Tp>} d={<Bt>time</Bt>} /></div>
					<div style={{...DISPLAY(32, INK_SOFT, 700), marginTop: 6}}>a quotient: <Tp>top</Tp> ÷ <Bt>bottom</Bt></div>
				</Card>
			</div>
			<HandTag x={DX + 20} y={DY + 456} text="time 0:00, so ÷ 0: no average" at={time + 4} out={flat} size={40} role="k" />
			<Chip x={1150} y={DY + 520} at={divide} out={defined} size={44}><span style={{color: INK_SOFT}}>guess:</span> (<Tp>{EX}</Tp>)′ ÷ (<Bt>x + 1</Bt>)′ = {EX} ÷ 1</Chip>
			<HandTag x={M.pt(1.0, 0)[0]} y={M.pt(0, 2.15)[1]} text="guess: slope 1" at={slope1 + 4} out={flat + 30} size={40} color={INK_SOFT} />
			<HandTag x={M.pt(0.45, 0)[0]} y={M.pt(0, 0.35)[1]} text="true tangent: flat" at={flat + 4} size={42} color={VIOLET} />
		</>
	);
};

// ---------- 1a. the trip computer ----------
/** Distance (km) after T hours of the trip: 100 km/h for the first hour, then 120, 60 and 100 km/h. */
const distAt = (T: number) => (T <= 1 ? 100 * T : T <= 1.1 ? 100 + 120 * (T - 1) : T <= 1.15 ? 112 + 60 * (T - 1.1) : 115 + 100 * (T - 1.15));
const RUN_FRAMES = 140;
/** Trip time T (h) per frame: the first hour fast, then the three runs at one shared compression. */
const tripKeys = (drive: number, slow: number, now: number): [number, number][] => [
	[6, 0], [230, 1], [drive, 1], [drive + RUN_FRAMES, 1.1], [slow, 1.1], [slow + RUN_FRAMES / 2, 1.15], [now, 1.15], [now + RUN_FRAMES, 1.25],
];
const tAt = (keys: [number, number][], f: number) => kf(f, keys, false);
/** Needle speed (eases to each run's speed at its start; holds between runs). */
const needleAt = (f: number, drive: number, slow: number, now: number) => kf(f, [[0, 100], [drive, 100], [drive + 14, 120], [slow, 120], [slow + 14, 60], [now, 60], [now + 14, 100]]);
/** Road scroll in px: proportional to speed while the trip clock runs. */
const roadOffset = (f: number, drive: number, slow: number, now: number) => {
	const segs: [number, number, number][] = [[6, 230, 100], [drive, drive + RUN_FRAMES, 120], [slow, slow + RUN_FRAMES / 2, 60], [now, now + RUN_FRAMES, 100]];
	return segs.reduce((s, [a, b, v]) => s + Math.max(0, Math.min(f, b) - a) * v * 0.12, 0);
};

export const S01A: React.FC = () => {
	const id = 'scene-01a';
	const f = useCurrentFrame();
	usePlatePreload([ROAD.src, CAR.src]);
	const hour = cue(id, 'hour', 2), pushes = cue(id, 'pushes the average'), pulls = cue(id, 'pulls it down'), drive = cue(id, 'Drive at'), rises = cue(id, 'rises'), slow = cue(id, 'Slow to sixty'), falls = cue(id, 'falls'), now = cue(id, 'Now hold'), flat = cue(id, 'flat', 1), ours = cue(id, "That's our flat"), rates = cue(id, 'Dividing the two rates'), only = cue(id, 'only gives');
	const keys = tripKeys(drive, slow, now);
	const T = tAt(keys, f);
	const D = distAt(T);
	const A = T > 0 ? D / T : NaN;
	const running = (f > 6 && f < 230) || (f > drive && f < drive + RUN_FRAMES) || (f > slow && f < slow + RUN_FRAMES / 2) || (f > now && f < now + RUN_FRAMES);
	const v = f < drive ? 100 : f < slow ? 120 : f < now ? 60 : 100;
	const rate = T >= 1 ? (v - A) / T : 0;
	// road and car
	const RB = {x: 96, y: 160, w: 1090, h: 250};
	const tw = (RB.h * (ROAD.box[2] - ROAD.box[0])) / (ROAD.box[3] - ROAD.box[1]);
	const off = roadOffset(f, drive, slow, now) % tw;
	const carW = 430, carH = (carW * (CAR.box[3] - CAR.box[1])) / (CAR.box[2] - CAR.box[0]);
	const bob = running ? Math.sin(f * 0.9) * 1.5 : 0;
	// dashboard
	const DB = {x: 96, y: 432, w: 820};
	const dp = dashPoints(DB.x, DB.y, DB.w);
	const ringO = vis(f, now + 6, rates);
	// average graph
	const GC = {x: 1220, y: 160, w: 604, h: 300};
	const PL = {l: GC.x + 96, r: GC.x + GC.w - 34, t: GC.y + 62, b: GC.y + GC.h - 56};
	const gx = (t: number) => PL.l + ((t - 1) / 0.25) * (PL.r - PL.l);
	const gy = (a: number) => PL.b - ((a - 96) / 8) * (PL.b - PL.t);
	const path: string[] = [];
	if (T >= 1) for (let k = 0; k <= 120; k++) {
		const tt = 1 + ((T - 1) * k) / 120;
		path.push(`${k ? 'L' : 'M'}${gx(tt).toFixed(1)},${gy(distAt(tt) / tt).toFixed(1)}`);
	}
	const curA = T >= 1 ? A : 100;
	const pt = [gx(Math.max(1, T)), gy(curA)];
	const tanS = (rate * (PL.b - PL.t) / 8) / ((PL.r - PL.l) / 0.25);
	const tl = 70 / Math.hypot(1, tanS);
	const tR = Math.min(tl, Math.max(8, PL.r + 8 - pt[0]));
	// push and pull bars (km/h per hour): push = speed ÷ time, pull = average ÷ time
	const BP = {x: 1424, y: 470, w: 400, h: 310};
	const barsO = vis(f, 232, ours);
	const push = T >= 1 ? v / T : 100, pull = T >= 1 ? A / T : 100;
	const bs = 1.0, midY = BP.y + 155;
	const thumbO = prog(f, ours, 14);
	const MT = gmap(BP.x - 10, BP.y + 6, BP.w + 20, BP.h, WIN_A);
	return (
		<>
			<SceneHeading text="Road trip: average = distance ÷ time" at={2} size={56} />
			{/* road strip (tiled at native aspect, scrolled by the distance driven) and the car */}
			<FrameSvg>
				<defs><clipPath id="d08-road"><rect x={RB.x} y={RB.y} width={RB.w} height={RB.h} rx={22} /></clipPath></defs>
				<rect x={RB.x} y={RB.y} width={RB.w} height={RB.h} rx={22} fill="#eef2e4" />
				<g clipPath="url(#d08-road)">{[-1, 0, 1].map(k => <SvgPlate key={k} plate={ROAD} x={RB.x - off + k * tw} y={RB.y + 4} w={tw} />)}</g>
				<rect x={RB.x} y={RB.y} width={RB.w} height={RB.h} rx={22} fill="none" stroke={INK} strokeWidth={3} opacity={0.25} />
				<SvgPlate plate={CAR} x={RB.x + 300} y={RB.y + 192 - carH + bob} w={carW} />
			</FrameSvg>
			<HandTag x={RB.x + 860} y={RB.y + 40} text="roadworks" at={slow + 4} out={now} size={36} color={INK_SOFT} />
			{/* dashboard: needle = speed right now; main screen = average; small screen = trip clock */}
			<Dashboard x={DB.x} y={DB.y} w={DB.w} speed={needleAt(f, drive, slow, now)}
				main={<><span style={{fontSize: 26, color: '#d8dde2', fontWeight: 700}}>average</span><span style={{fontSize: 44, fontVariantNumeric: 'tabular-nums'}}>{Number.isFinite(A) ? fmtNum(A, 1) : '...'}<span style={{fontSize: 26, color: '#d8dde2'}}> km/h</span></span></>}
				small={<span style={{fontSize: 38, fontVariantNumeric: 'tabular-nums'}}>{`${Math.floor(T + 1e-9)}:${String(Math.floor((T - Math.floor(T + 1e-9)) * 60 + 1e-6)).padStart(2, '0')}`}<span style={{fontSize: 26}}> h</span></span>} />
			<FrameSvg style={{opacity: ringO}}>
				<circle cx={dp.dial[0]} cy={dp.dial[1]} r={dp.R * 1.05} fill="none" stroke="#ffffff" strokeWidth={7} />
				<rect x={dp.screenBox[0] - 10} y={dp.screenBox[1] - 10} width={dp.screenBox[2] - dp.screenBox[0] + 20} height={dp.screenBox[3] - dp.screenBox[1] + 20} rx={14} fill="none" stroke="#ffffff" strokeWidth={7} />
				<path d={`M${dp.dial[0] + dp.R * 1.05},${dp.dial[1] - 10} Q${(dp.dial[0] + dp.screenBox[0]) / 2 + 40},${dp.dial[1] - dp.R * 0.9} ${dp.screenBox[0] - 10},${dp.screen[1] - 20}`} fill="none" stroke="#ffffff" strokeWidth={6} />
			</FrameSvg>
			<HandTag x={DB.x + 90} y={772} text="speed = average" at={now + 10} out={rates} size={42} color={INK} />
			{/* live readouts */}
			<LiveReadoutBoard x={952} y={470} width={446} at={-30} inline rows={[
				{label: 'distance', value: D, digits: 1, unit: 'km', role: 'b', glow: [hour, hour + 60]},
				{label: 'time', value: T, digits: 2, unit: 'h', role: 'a', glow: [hour, hour + 60]},
				{label: 'average', value: Number.isFinite(A) ? A : 0, text: Number.isFinite(A) ? undefined : '...', digits: 1, unit: 'km/h', glow: [hour, hour + 60]},
			]} />
			{/* the average against time, with its violet rate of change */}
			<Card x={GC.x} y={GC.y} w={GC.w} h={GC.h} at={-30} pad="0">
				<div />
			</Card>
			<FrameSvg>
				<text x={GC.x + 22} y={GC.y + 38} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>average (km/h) against time (h)</text>
				{[98, 100, 102, 104].map(a => <g key={a}><line x1={PL.l} x2={PL.r} y1={gy(a)} y2={gy(a)} stroke={a === 100 ? '#d8cdb8' : '#ece4d4'} strokeWidth={2} strokeDasharray={a === 100 ? '8 6' : undefined} /><text x={PL.l - 12} y={gy(a) + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{a}</text></g>)}
				{[1, 1.1, 1.2].map(t => <text key={t} x={gx(t)} y={PL.b + 38} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{t.toFixed(1)}</text>)}
				<path d={`M${PL.l},${PL.t - 6} V${PL.b} H${PL.r + 6}`} stroke={INK} strokeWidth={3.5} fill="none" />
				{path.length ? <path d={path.join(' ')} stroke={INK} strokeWidth={5.5} fill="none" strokeLinejoin="round" strokeLinecap="round" /> : null}
				<line x1={pt[0] - tl} x2={pt[0] + tR} y1={pt[1] + tanS * tl} y2={pt[1] - tanS * tR} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" opacity={prog(f, drive, 10)} />
				<circle cx={pt[0]} cy={pt[1]} r={11} fill={INK} stroke={CARD} strokeWidth={4} />
			</FrameSvg>
			{/* push and pull bars */}
			<div style={{position: 'absolute', inset: 0, opacity: barsO}}>
				<Card x={BP.x} y={BP.y} w={BP.w} h={BP.h} at={232} pad="0"><div /></Card>
				<FrameSvg>
					<line x1={BP.x + 30} x2={BP.x + BP.w - 30} y1={midY} y2={midY} stroke={INK} strokeWidth={3} />
					<rect x={BP.x + 70} y={midY - push * bs} width={58} height={push * bs} rx={8} fill={TEAL} />
					<path d={`M${BP.x + 56},${midY - push * bs + 4} L${BP.x + 99},${midY - push * bs - 26} L${BP.x + 142},${midY - push * bs + 4}`} fill={TEAL} />
					<rect x={BP.x + 70} y={midY} width={58} height={pull * bs} rx={8} fill={BLUE} />
					<path d={`M${BP.x + 56},${midY + pull * bs - 4} L${BP.x + 99},${midY + pull * bs + 26} L${BP.x + 142},${midY + pull * bs - 4}`} fill={BLUE} />
				</FrameSvg>
				<div style={{position: 'absolute', left: BP.x + 170, top: BP.y + 22, opacity: prog(f, pushes, 12)}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: TEAL}}>push</div>
					<div style={DISPLAY(28, TEAL, 700)}>more distance</div>
				</div>
				<div style={{position: 'absolute', left: BP.x + 170, top: midY + 46, opacity: prog(f, pulls, 12)}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: BLUE}}>pull</div>
					<div style={DISPLAY(28, BLUE, 700)}>more time</div>
				</div>
			</div>
			{/* the hook graph returns: same flat tangent */}
			<div style={{position: 'absolute', inset: 0, opacity: thumbO}}>
				<Card x={BP.x} y={BP.y} w={BP.w} h={BP.h} at={ours} pad="0"><div /></Card>
				<FunctionSimulator at={ours} x={BP.x - 10} y={BP.y + 6} width={BP.w + 20} height={BP.h} window={WIN_A} family={QUOT} timeline={[{frame: 0, x: 0}]} color={INK} curveWidth={5} bare
					point={{at: ours}} overlay={() => <FrameSvg><Asym M={MT} X={-1} /><TanLine M={MT} X={0} Y={1} m={0} half={110} width={6 + 4 * vis(f, ours + 10, ours + 70)} /></FrameSvg>} />
				<div style={{position: 'absolute', left: BP.x + 22, top: BP.y + BP.h - 58, ...DISPLAY(32, INK, 800)}}>y = {EX}/(x + 1)</div>
			</div>
			<HandTag x={BP.x + 22} y={BP.y + 44} text="same: flat tangent" at={ours + 8} size={40} color={VIOLET} />
			{/* tags under the bars */}
			<HandTag x={BP.x + 170} y={midY} text="push wins" at={rises} out={slow} size={44} color={TEAL} />
			<HandTag x={BP.x + 170} y={midY} text="pull wins" at={falls} out={now} size={44} color={BLUE} />
			<HandTag x={BP.x + 170} y={midY} text="they cancel" at={flat} out={ours} size={44} color={INK} />
			{/* the average's rate of change (violet), then the rates-divided chip */}
			<Card x={96} y={812} w={830} at={-30} out={rates} pad="8px 26px 10px">
				<div style={DISPLAY(30, INK, 700)}>average = <Tp>distance</Tp> ÷ <Bt>time</Bt></div>
				<div style={{...DISPLAY(46, INK, 800), fontVariantNumeric: 'tabular-nums'}}><Tp>{fmtNum(D, 1)} km</Tp> ÷ <Bt>{fmtNum(T, 2)} h</Bt> = {Number.isFinite(A) ? fmtNum(A, 1) : '...'} km/h</div>
			</Card>
			<Card x={952} y={812} w={872} at={-30} out={rates} pad="8px 26px 10px">
				<div style={{display: 'flex', alignItems: 'baseline', gap: 14}}><span style={DISPLAY(30, VIOLET, 700)}>average changing at</span><span style={DISPLAY(28, INK_SOFT, 600)}>= (speed − average) ÷ time</span></div>
				<div style={{display: 'flex', alignItems: 'baseline', gap: 14}}><span style={{...DISPLAY(50, VIOLET, 800), fontVariantNumeric: 'tabular-nums'}}>{(rate > 0.05 ? '+' : '') + fmtNum(rate, 0)}</span><span style={DISPLAY(32, VIOLET, 700)}>km/h per hour</span></div>
			</Card>
			<Card x={96} y={800} w={1300} at={rates} pad="10px 26px 12px">
				<div style={DISPLAY(42, INK, 800)}><span style={{color: INK_SOFT}}>rates divided:</span> (<Tp>{EX}</Tp>)′ ÷ (<Bt>x + 1</Bt>)′ = 1 = 100 km/h = speed right now</div>
				<div style={{...DISPLAY(28, INK_SOFT, 600), marginTop: 2}}>(at x = 0: top in hundreds of km, bottom in hours)</div>
			</Card>
			<HandTag x={1420} y={872} text={'speed, not the slope'} at={only + 4} size={40} color={VIOLET} />
			<HandTag x={1420} y={922} text={'of the average'} at={only + 30} size={40} color={VIOLET} />
		</>
	);
};

// ---------- 2. the top pushes, the bottom pulls ----------
const G2 = {x: 40, y: 190, w: 1150, h: 680};
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const down = cue(id, 'pulls down'), topT = cue(id, 'pushes y up'), botT = cue(id, 'pulls y down'), zero = cue(id, 'zero', 2), ride = cue(id, 'At x equals one'), eight = cue(id, 'eight', 1), minus = cue(id, 'That pull is');
	const M = gmap(G2.x, G2.y, G2.w, G2.h, WIN_A);
	const T: FnKey[] = [{frame: 0, x: 0}, {frame: ride + 6, x: 0}, {frame: ride + 50, x: 1}];
	const u = kf(f, [[ride + 6, 0], [ride + 50, 1]]);
	return (
		<>
			<SceneHeading text="The top pushes, the bottom pulls" at={2} />
			<FunctionSimulator x={G2.x} y={G2.y} width={G2.w} height={G2.h} window={WIN_A} family={QUOT} timeline={T} color={INK}
				yTicks={A_YTICKS} xLabel="x" yLabel="y" point={{at: -30}} tangent={{at: -30, halfLength: 230}}
				overlay={() => <FrameSvg><Asym M={M} X={-1} label="x = −1" /><OpenMark M={M} X={-1} /></FrameSvg>}
				readout={{x: 1236, y: 456, width: 588, at: -30, rows: [
					{label: 'gradient (slope)', value: s => s.slope, role: 'gradient', digits: 2, glow: [zero, zero + 60]},
					{label: <>top&apos;s turn, f′/g</>, value: s => topTurn(s.u), text: s => (f < topT ? '?' : fmtNum(topTurn(s.u), 2)), role: 'b', digits: 2, at: -30, bar: f >= topT ? {max: 1.6, width: 170} : undefined},
					{label: <>bottom&apos;s turn, −fg′/g²</>, value: s => bottomTurn(s.u), text: s => (f < botT ? '?' : fmtNum(bottomTurn(s.u), 2)), role: 'a', digits: 2, at: -30, bar: f >= botT ? {max: 1.6, width: 170} : undefined, glow: [minus, minus + 80]},
				]}} />
			<CurveLabel x={M.pt(1.05, 3.6)[0]} y={M.pt(1.05, 3.6)[1] - 20} size={42}>{HOOK()}</CurveLabel>
			<HandTag x={M.pt(-2.9, 0)[0]} y={M.pt(0, 4.3)[1]} text="this positive fraction" at={-30} size={36} color={INK_SOFT} />
			{/* top and bottom with their arrows */}
			<Card x={1236} y={164} w={270} at={-30} pad="12px 20px 14px">
				<div style={{textAlign: 'center'}}>
					<div style={DISPLAY(40, TEAL, 800)}>top <span style={{fontSize: 40}}>↑</span></div>
					<div style={DISPLAY(26, INK_SOFT, 600)}>numerator</div>
					<div style={{height: 5, background: INK, borderRadius: 2, margin: '6px 0'}} />
					<div style={{...DISPLAY(40, BLUE, 800), opacity: 1}}>bottom <span style={{opacity: prog(f, down, 10)}}>↑</span></div>
					<div style={DISPLAY(26, INK_SOFT, 600)}>denominator</div>
				</div>
			</Card>
			<HandTag x={1236} y={428} text="bottom grows: y pulled down" at={down + 4} out={zero} size={34} color={BLUE} />
			<DashBadge x={1530} y={164} w={290} at={-30} tags={[{text: 'distance pushes', color: TEAL}, {text: 'time pulls', color: BLUE, glow: vis(f, minus, minus + 80)}]} />
			<HandTag x={1290} y={830} text="push + pull: 1 − 1 = 0" at={zero} out={ride} size={42} color={VIOLET} />
			<HandTag x={1290} y={830} text="1.36 − 0.68 = 0.68" at={eight + 6} size={42} color={VIOLET} />
			<Chip x={140} y={884} at={minus} size={42}>the <span style={{color: BLUE}}>bottom&apos;s turn</span> is the minus sign</Chip>
			<HandTag x={M.pt(u, 0)[0] + 24} y={M.pt(0, topTurn(0) + 0.0)[1] + 60} text="flat" at={zero} out={ride} size={40} color={VIOLET} />
		</>
	);
};

// ---------- 3. where the rule comes from ----------
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const dividing = cue(id, 'Dividing by g'), g = cue(id, 'over g', 2), sq1 = cue(id, 'squared', 1), turn = cue(id, 'So that turn'), sq3 = cue(id, 'squared', 4), first = cue(id, "The top's derivative"), pull = cue(id, "bottom's pull"), whole = cue(id, 'whole bottom'), check = cue(id, 'Check our curve'), zero = cue(id, 'zero', 2);
	const MT = gmap(1300, 166, 524, 350, WIN_A);
	const fp = <Tp>f′</Tp>;
	const inv = <Frac n="1" d="g" />;
	const Why: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: '#4f4840', marginLeft: 44, verticalAlign: 'middle'}}>{children}</span>;
	return (
		<>
			<TaskStrip text="Why (f/g)′ = (f′g − fg′)/g²" at={4} />
			<StudioDomainStrip conditions={['g ≠ 0']} title="needs" path={[{frame: 0, x: 96, y: 172}]} at={-30} size={40} />
			<div style={{position: 'absolute', left: 96, top: 250, display: 'flex', gap: 14}}>
				<Enter at={-30}><div style={{display: 'inline-block', background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '6px 18px', ...DISPLAY(30, '#4f4840', 600)}}>Year 11 quotient rule</div></Enter>
				<Enter at={dividing}><div style={{display: 'inline-block', background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '6px 18px', ...DISPLAY(30, '#4f4840', 600)}}>last video: (uv)′ = u′v + uv′</div></Enter>
				<Enter at={sq1 - 50}><div style={{display: 'inline-block', background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '6px 18px', ...DISPLAY(30, '#4f4840', 600)}}>Year 11 chain rule</div></Enter>
			</div>
			<WholeRows x={96} y={326} w={1320} size={66} oldSize={54} gap={22} rows={[
				{left: 'f/g', right: <>f × {inv}<Why>dividing by g = multiplying by 1/g</Why></>, at: dividing},
				{left: '(f/g)′', right: <><Tp>f′ × {inv}</Tp> + <Bt>f × ({inv})′</Bt><Why>product rule: two turns</Why></>, at: g},
				{left: <>({inv})′</>, right: <>−g<Sup>−2</Sup> × g′ = <Bt>−<Frac n="g′" d={<>g<Sup>2</Sup></>} /></Bt><Why>chain rule on g<Sup>−1</Sup></Why></>, at: sq1},
				{left: '(f/g)′', right: <><Tp><Frac n="f′" d="g" /></Tp> <Bt>− <Frac n="fg′" d={<>g<Sup>2</Sup></>} /></Bt><Why>top&apos;s turn, bottom&apos;s turn</Why></>, at: turn},
				{left: '(f/g)′', right: <><Frac n={<><MarkSpan kind="underline" at={first} role="b" width={6}><Tp>{fp}g</Tp></MarkSpan> <MarkSpan kind="circle" at={pull} role="a" width={5}><Bt>−</Bt></MarkSpan> <Bt>fg′</Bt></>} d={<MarkSpan kind="underline" at={whole} width={6}>g<Sup>2</Sup></MarkSpan>} />   <Am>g ≠ 0</Am></>, at: sq3, answer: true},
			]} />
			<HandTag x={900} y={810} text="top's derivative first" at={first + 6} out={whole} size={42} role="b" />
			<HandTag x={900} y={880} text="minus: the bottom's pull" at={pull + 6} size={42} role="a" />
			<HandTag x={900} y={810} text="whole bottom squared" at={whole + 6} size={42} color={INK} />
			<Enter at={check} style={{position: 'absolute', left: 1360, top: 792, width: 464}}>
				<div style={{background: CARD, borderRadius: 16, padding: '8px 22px 10px', boxShadow: CARD_SHADOW, ...DISPLAY(38, INK, 800), lineHeight: 1.2}}>
					<div style={DISPLAY(28, INK_SOFT, 700)}>check: {EX}/(x + 1) at x = 0</div>
					<div><Tp>f′g</Tp> <Bt>− fg′</Bt> = <Tp>1×1</Tp> <Bt>− 1×1</Bt></div>
					<div style={{opacity: prog(f, zero, 10)}}>= 0 <span style={{color: GREEN}}>✓ flat</span></div>
				</div>
			</Enter>
			{/* thumbnail and badge */}
			<Card x={1290} y={156} w={544} h={376} at={-30} pad="0"><div /></Card>
			<FunctionSimulator at={-30} x={1300} y={166} width={524} height={350} window={WIN_A} family={QUOT} timeline={[{frame: 0, x: 0}]} color={INK} curveWidth={5} bare
				point={{at: -30}} overlay={() => <FrameSvg><Asym M={MT} X={-1} /><TanLine M={MT} X={0} Y={1} m={0} half={130} width={6 + 4 * vis(f, zero, zero + 60)} /></FrameSvg>} />
			<div style={{position: 'absolute', left: 1314, top: 478, ...DISPLAY(32, INK, 800)}}>y = {EX}/(x + 1): slope 0 at x = 0</div>
			<DashBadge x={1420} y={556} w={300} at={-30} tags={[{text: 'distance pushes', color: TEAL}, {text: 'time pulls', color: BLUE, glow: vis(f, pull, pull + 70)}]} />
		</>
	);
};
