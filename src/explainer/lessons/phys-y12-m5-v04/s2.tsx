// Scenes 5 to 9: the 45 degree maximum (the launcher slider), worked examples 1 and 2, the traps, the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {Card, CardTitle, EquationStrip, FrameSvg, GivensCard, HandTag, LiveReadoutBoard, MarkSpan, SceneHeading, TaskStrip, kf} from '../../math/studio';
import {clockAt, cue, flightT, fx, maxH, range, ux, uy} from './common';
import {
	AngleArc, AnswerBox, BLUE, BLUE_GREY, BallSvg, Chip, CliffStage, CrossedChip, DISPLAY, FlightLane, GREEN_GREY, GroundLine, LaunchTriangle, LauncherSvg, MS, NAVY,
	HandNote, ORANGE, ORANGE_STROKE, RED, RangeGraph, ReadCard, Row, STYLE_45, STYLE_FLAT, STYLE_STEEP, Stamp, Sub, Sup, TEAL, TravelSide, Ux, Uy, launcherGeom, rgPoint,
} from './parts';

// ---------- 5. why 45 degrees goes furthest: the launcher is the slider ----------
export const S05: React.FC = () => {
	const id = 'forty-five';
	const f = useCurrentFrame();
	const deg45 = cue(id, 'degrees', 2), then = cue(id, 'Then the two'), usq = cue(id, 'u squared over'), graph = cue(id, 'On this graph'), falls = cue(id, 'falls away'), sym = cue(id, 'symmetrically'), partner = cue(id, 'partner'), height = cue(id, 'height');
	const U = 15;
	const th = kf(f, [[0, 15], [deg45, 45], [falls, 45], [falls + 45, 53], [falls + 95, 53], [falls + 150, 75], [height + 14, 60]]);
	// readouts use the whole-degree angle shown, so θ and the values always agree
	const thR = Math.round(th);
	const X = ux(U, thR), Y = uy(U, thR), R = range(U, thR);
	const GR = {x: 520, y: 176, w: 820, h: 740, yMax: 25};
	const PX = 210, PY = 690, LW = 300;
	const lg = launcherGeom(PX, PY, LW, th);
	return (
		<>
			<SceneHeading text="Why 45° goes furthest" at={-40} size={56} />
			<FrameSvg>
				<GroundLine x1={96} x2={480} y={lg.floorY} />
				<LauncherSvg px={PX} py={PY} w={LW} deg={th} />
				<AngleArc px={PX} py={PY} r={120} deg={th} label={`θ = ${Math.round(th)}°`} size={40} />
				<BallSvg cx={lg.muzzle[0]} cy={lg.muzzle[1]} d={lg.ballD} />
			</FrameSvg>
			<div style={{position: 'absolute', left: 110, top: 790, ...DISPLAY(36, ORANGE, 800)}}>u = 15<MS /></div>
			<HandTag x={112} y={880} text="tilt the barrel" at={-30} out={graph} size={40} color={INK_SOFT} />
			<RangeGraph x={GR.x} y={GR.y} w={GR.w} h={GR.h} u={U} yMax={GR.yMax} drawAt={-80} point={th} peakAt={deg45} mirrorAt={sym}
				pairs={[{a: 30, b: 60, at: height, label: '19.9 m'}, {a: 15, b: 75, at: height + 16, label: '11.5 m'}]} />
			{(() => {const [x, y] = rgPoint(GR, 45, range(U, 45)); return <HandTag x={x} y={y - 40} text="peak at 45°" at={deg45 + 6} size={40} color={GREEN_GREY} anchor="middle" />;})()}
			{(() => {const [x, y] = rgPoint(GR, 45, range(U, 30)); return <HandTag x={x} y={y + 52} text="30° + 60° = 90°" at={height + 8} size={38} color={INK} anchor="middle" />;})()}
			{(() => {const [x, y] = rgPoint(GR, 45, range(U, 15)); return <HandTag x={x} y={y + 52} text="15° + 75° = 90°" at={height + 22} size={38} color={INK} anchor="middle" />;})()}
			<LiveReadoutBoard x={1376} y={176} width={448} inline at={-30} title="Live readouts" rows={[
				{label: 'θ', value: thR, digits: 0, unit: '°'},
				{label: <>u<Sub>x</Sub> = u cos θ</>, value: X, digits: 1, role: 'b'},
				{label: <>u<Sub>y</Sub> = u sin θ</>, value: Y, digits: 1, role: 'a'},
				{label: <>u<Sub>x</Sub> × u<Sub>y</Sub></>, value: X * Y, digits: 1, mark: {kind: 'circle', at: deg45 + 8, out: falls}},
				{label: 'R', value: R, digits: 1, unit: 'm', role: 'k'},
			]} />
			<HandNote x={1390} y={672} at={then} out={falls + 40} size={42} color={GREEN_GREY}>sin 2θ = 1, u<Sub>x</Sub> = u<Sub>y</Sub></HandNote>
			<HandTag x={1390} y={672} text="swapped, same product" at={falls + 50} size={42} color={INK} />
			<Enter at={usq} style={{position: 'absolute', left: 1376, top: 720}}>
				<div style={{display: 'inline-block', background: '#fffdf8', border: `4.5px solid ${INK}`, borderRadius: 14, padding: '4px 20px 8px', boxShadow: '0 10px 22px rgba(60,45,20,0.12)', ...DISPLAY(48, INK)}}>R<Sub>max</Sub> = u<Sup>2</Sup> ÷ g</div>
				<div style={{...DISPLAY(32, INK_SOFT, 700), marginTop: 8}}>= 225 ÷ 9.8 = 23.0 m</div>
			</Enter>
			<HandTag x={1390} y={900} text="every angle has a partner" at={partner} size={40} color={ORANGE} />
		</>
	);
};

// ---------- 6. worked example 1: 15 m/s at 30, 45 and 60 degrees ----------
export const S06: React.FC = () => {
	const id = 'worked-fifteen';
	const f = useCurrentFrame();
	const cond = cue(id, 'conditions'), allowed = cue(id, 'allowed'), a30 = cue(id, 'At thirty'), r30 = cue(id, 'about'), a45 = cue(id, 'At forty-five'), r45 = cue(id, 'about', 2), a60 = cue(id, 'At sixty'), sin120 = cue(id, 'sin one hundred'), r60 = cue(id, 'nineteen point nine', 2);
	const U = 15, PPM = 15, GY = 890, LW = 130;
	const lanes = [
		{deg: 30, mx: 250, style: STYLE_FLAT, launch: r30 - 30, col: ORANGE},
		{deg: 45, mx: 820, style: STYLE_45, launch: r45 - 50, col: GREEN_GREY},
		{deg: 60, mx: 1390, style: STYLE_STEEP, launch: sin120 + 6, col: BLUE_GREY},
	];
	const rowStyle = {position: 'absolute' as const, left: 740};
	return (
		<>
			<TaskStrip text="Find the range at 30°, 45° and 60°" at={-40} />
			<EquationStrip at={-30} size={60} y={160}><span style={{color: ORANGE}}>R = u<Sup>2</Sup> sin 2θ ÷ g</span></EquationStrip>
			<GivensCard x={96} y={256} w={600} at={-30} size={44} title="Givens" lines={[
				{content: <span style={{color: NAVY}}>u = 15<MS /></span>, at: -30},
				{content: <span style={{color: NAVY}}>level ground {f >= allowed ? '✓' : ''}</span>, at: -30, note: f >= cond ? 'no air resistance, lands at the launch level: shortcut allowed' : 'no air resistance'},
				{content: <span style={{color: NAVY}}>g = 9.8 m s<Sup>−2</Sup></span>, at: -30},
			]} />
			<div style={{...rowStyle, top: 262}}><Row at={a30} size={46}>R<Sub>30</Sub> = 15<Sup>2</Sup> × sin 60° ÷ 9.8 = <AnswerBox at={r30}>19.9 m</AnswerBox></Row></div>
			<div style={{...rowStyle, top: 352}}><Row at={a45} size={46}>R<Sub>45</Sub> = 225 × sin 90° ÷ 9.8 = <AnswerBox at={r45} color={GREEN_GREY}>23.0 m</AnswerBox></Row></div>
			<div style={{...rowStyle, top: 442}}><Row at={a60} size={46}>R<Sub>60</Sub> = 225 × sin 120° ÷ 9.8 = <AnswerBox at={r60}>19.9 m</AnswerBox></Row></div>
			<HandTag x={1630} y={334} text="furthest" at={r45 + 14} size={42} color={GREEN_GREY} />
			<HandTag x={1110} y={540} text="sin 120° = sin 60°" at={sin120 + 30} size={42} color={INK} />
			<FrameSvg>
				{lanes.map((l, i) => <FlightLane key={i} mx={l.mx} gy={GY} ppm={PPM} u={U} deg={l.deg} lw={LW} right={l.mx + 390} style={l.style} launchAt={f >= l.launch ? l.launch : undefined} ghost={0.22} shadow landRing={l.launch + Math.round(flightT(U, l.deg) * 30)} floorLeft={l.mx - 120} />)}
				{/* the 30 degree landing mark, carried into the 60 degree lane */}
				<circle cx={lanes[2].mx + range(U, 30) * PPM} cy={GY} r={9} fill="none" stroke={ORANGE_STROKE} strokeWidth={4} opacity={prog(f, a60, 12)} />
			</FrameSvg>
			{lanes.map((l, i) => (
				<React.Fragment key={i}>
					<div style={{position: 'absolute', left: l.mx - 130, top: 690, ...DISPLAY(40, l.col, 800)}}>{l.deg}°</div>
					<ReadCard x={l.mx + 150} y={608} w={230} label="time in the air" value={fx(f >= l.launch ? clockAt(f, l.launch, flightT(U, l.deg)) : 0, 2)} unit="s" size={44} color={INK} />
				</React.Fragment>
			))}
			<HandTag x={lanes[2].mx + range(U, 30) * PPM - 60} y={930} text="30° mark" at={a60 + 10} size={36} color={ORANGE} anchor="middle" />
		</>
	);
};

// ---------- 7. same range, different flights (worked example 2) ----------
export const S07: React.FC = () => {
	const id = 'same-range-different-flights';
	const f = useCurrentFrame();
	const both = cue(id, 'Both ranges'), r489 = cue(id, 'forty-eight point nine'), flights = cue(id, 'flights'), so65 = cue(id, 'so the sixty-five'), t462 = cue(id, 'four point six two'), twice = cue(id, 'more than twice'), t216 = cue(id, 'two point one six'), higher = cue(id, 'much higher'), motion = cue(id, 'same motion'), means = cue(id, 'It means'), slower = cue(id, 'slower crossing');
	const U = 25, PPM = 8, GY = 900, LW = 110;
	const M25 = 230, M65 = 1060;
	const replay2 = cue(id, 'climbs') - 10;
	const launch = f >= replay2 ? replay2 : f >= flights ? flights : undefined;
	const T25 = flightT(U, 25), T65 = flightT(U, 65);
	const c25 = launch === undefined ? 0 : clockAt(f, launch, T25), c65 = launch === undefined ? 0 : clockAt(f, launch, T65);
	const H25 = maxH(U, 25) * PPM, H65 = maxH(U, 65) * PPM;
	const p25 = M25 + (range(U, 25) / 2) * PPM, p65 = M65 + (range(U, 65) / 2) * PPM;
	return (
		<>
			<TaskStrip text="Same range, different flights" at={-40} />
			<EquationStrip at={-30} size={60} y={160}><span style={{color: ORANGE}}>R = u<Sup>2</Sup> sin 2θ ÷ g</span></EquationStrip>
			<GivensCard x={96} y={256} w={600} at={-30} size={44} title="Givens" lines={[
				{content: <span style={{color: NAVY}}>u = 25<MS /></span>, at: -30},
				{content: <span style={{color: NAVY}}>level ground</span>, at: -30},
				{content: <span style={{color: NAVY}}>θ = 25° and 65°</span>, at: -30, note: '25° + 65° = 90°: a complementary pair'},
			]} />
			<div style={{position: 'absolute', left: 740, top: 256}}><Row at={both - 6} size={44}>R<Sub>25</Sub> = 625 × sin 50° ÷ 9.8 = <AnswerBox at={r489}>48.9 m</AnswerBox></Row></div>
			<div style={{position: 'absolute', left: 740, top: 330}}><Row at={both + 14} size={44}>R<Sub>65</Sub> = 625 × sin 130° ÷ 9.8 = <AnswerBox at={r489 + 8}>48.9 m</AnswerBox></Row></div>
			<div style={{position: 'absolute', left: 760, top: 398}}><Row at={both + 30} size={30} style={{color: INK_SOFT}}>sin 130° = sin 50° = 0.766</Row></div>
			<HandTag x={1500} y={300} text="same!" at={r489 + 20} size={54} color={INK} />
			<div style={{position: 'absolute', left: 740, top: 450}}><Row at={so65} ageAt={undefined} size={44}><span style={{color: BLUE}}>T<Sub>65</Sub></span> = 2 × 25 sin 65° ÷ 9.8 = <AnswerBox at={t462}>4.62 s</AnswerBox></Row></div>
			<div style={{position: 'absolute', left: 740, top: 524}}><Row at={twice} size={44}><span style={{color: BLUE}}>T<Sub>25</Sub></span> = 2 × 25 sin 25° ÷ 9.8 = <AnswerBox at={t216}>2.16 s</AnswerBox></Row></div>
			<FrameSvg>
				<FlightLane mx={M25} gy={GY} ppm={PPM} u={U} deg={25} lw={LW} right={M25 + 440} style={STYLE_FLAT} launchAt={launch} ghost={0.3} shadow floorLeft={M25 - 120} />
				<FlightLane mx={M65} gy={GY} ppm={PPM} u={U} deg={65} lw={LW} right={M65 + 440} style={STYLE_STEEP} launchAt={launch} ghost={0.3} shadow floorLeft={M65 - 120} />
				{f >= higher ? <g opacity={prog(f, higher, 12)}>
					<line x1={p25} x2={p25} y1={GY} y2={GY - H25} stroke={BLUE} strokeWidth={3.5} />
					<line x1={p65} x2={p65} y1={GY} y2={GY - H65} stroke={BLUE} strokeWidth={3.5} />
					<path d={`M${p65 - 12},${GY - H65} h24 M${p25 - 12},${GY - H25} h24`} stroke={BLUE} strokeWidth={3.5} />
				</g> : null}
			</FrameSvg>
			<div style={{position: 'absolute', left: p25 + 12, top: GY - H25 - 54, opacity: prog(f, higher, 12), ...DISPLAY(36, BLUE)}}>5.70 m</div>
			<div style={{position: 'absolute', left: p65 - 132, top: GY - H65 / 2 - 10, opacity: prog(f, higher, 12), ...DISPLAY(36, BLUE)}}>26.2 m</div>
			<div style={{position: 'absolute', left: M25 - 136, top: 760, ...DISPLAY(40, ORANGE, 800)}}>25°</div>
			<div style={{position: 'absolute', left: M65 - 70, top: 690, ...DISPLAY(40, BLUE_GREY, 800)}}>65°</div>
			<ReadCard x={636} y={640} w={284} label="25°: in the air" value={fx(c25, 2)} unit="s" size={44}>
				<div style={{...DISPLAY(40, TEAL), opacity: prog(f, means, 12)}}>u<Sub>x</Sub> = 22.7<span style={DISPLAY(30, INK_SOFT, 600)}> m s⁻¹</span></div>
			</ReadCard>
			<ReadCard x={1520} y={640} w={300} label="65°: in the air" value={fx(c65, 2)} unit="s" size={44}>
				<div style={{...DISPLAY(40, TEAL), opacity: prog(f, means, 12)}}>u<Sub>x</Sub> = 10.6<span style={DISPLAY(30, INK_SOFT, 600)}> m s⁻¹</span></div>
			</ReadCard>
			<CrossedChip x={96} y={590} at={motion - 10} crossAt={motion + 14} size={38}>equal range = equal time?</CrossedChip>
			<HandTag x={1110} y={612} text="slower × longer = same product" at={means + 10} size={40} color={ORANGE} />
			<HandTag x={0} y={0} at={slower} marks={[{kind: 'arrow', from: [1460, 640], to: [1560, 760], bend: -0.3}]} color={ORANGE_STROKE} />
		</>
	);
};

// ---------- 8. two traps ----------
export const S08: React.FC = () => {
	const id = 'two-traps';
	const f = useCurrentFrame();
	const first = cue(id, 'First'), cliff = cue(id, 'cliff'), fail = cue(id, 'fail'), next = cue(id, 'next time'), second = cue(id, 'Second'), rises = cue(id, 'rises'), exist = cue(id, 'exist');
	const GR = {x: 96, y: 180, w: 820, h: 700, yMax: 25};
	const U = 15;
	const along = (a: number, b: number) => {
		let d = '';
		for (let i = 0; i <= 40; i++) {const th = a + ((b - a) * i) / 40; const [x, y] = rgPoint(GR, th, range(U, th) + 1.6); d += `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)} `;}
		return d;
	};
	const [ex, ey] = rgPoint(GR, 43, range(U, 43) + 1.6), [fx2, fy] = rgPoint(GR, 85, range(U, 85) + 1.6);
	return (
		<>
			<SceneHeading text="Two traps to avoid" at={-40} size={56} />
			<RangeGraph x={GR.x} y={GR.y} w={GR.w} h={GR.h} u={U} yMax={25} pairs={[{a: 30, b: 60, at: exist - 30, label: '19.9 m'}]} />
			<FrameSvg>
				<DrawPath d={along(6, 44)} at={rises} dur={24} color={RED} width={5} />
				<path d={`M${ex - 18},${ey - 6} L${ex},${ey} L${ex - 10},${ey + 16}`} fill="none" stroke={RED} strokeWidth={5} opacity={prog(f, rises + 22, 6)} strokeLinecap="round" />
				<DrawPath d={along(46, 86)} at={rises + 30} dur={24} color={RED} width={5} />
				<path d={`M${fx2 - 4},${fy - 20} L${fx2},${fy} L${fx2 - 18},${fy - 8}`} fill="none" stroke={RED} strokeWidth={5} opacity={prog(f, rises + 52, 6)} strokeLinecap="round" />
			</FrameSvg>
			<div style={{position: 'absolute', left: 250, top: 270, ...DISPLAY(32, INK_SOFT, 700)}}>u = 15<MS /></div>
			{/* trap 1 */}
			<Card x={980} y={176} w={844} h={400} at={-30} pad="12px 24px">
				<CardTitle>Trap 1: only on level ground</CardTitle>
				<Enter at={first}><div style={DISPLAY(40, INK, 700)}>“45° always gives the maximum range”</div></Enter>
			</Card>
			<FrameSvg>
				<g opacity={prog(f, first, 14)}>
					<CliffStage mx={1110} gy={380} seaY={540} leftX={1004} rightX={1460} ppm={5} u={20} lw={86} barrel={45} levelLabel={false}
						paths={[{deg: 45, style: STYLE_45, at: cliff - 10}]} qAt={cliff + 30} />
				</g>
			</FrameSvg>
			<HandTag x={1480} y={350} text="lands lower:" at={cliff + 4} size={40} color={INK_SOFT} />
			<HandTag x={1480} y={396} text="from a cliff" at={cliff + 14} size={40} color={INK_SOFT} />
			<Stamp x={1478} y={448} at={fail} text="level ground only" size={32} />
			<Chip x={1000} y={600} at={next} size={34}>landing below the launch level: next time</Chip>
			{/* trap 2 */}
			<Card x={980} y={690} w={844} h={250} at={-30} pad="12px 24px">
				<CardTitle>Trap 2</CardTitle>
			</Card>
			<CrossedChip x={1004} y={744} at={second} crossAt={cue(id, 'or always') - 6} size={40}>steeper = shorter (or always further)</CrossedChip>
			<HandTag x={1010} y={890} text="rises, then falls" at={rises} size={46} role="mistake" />
			<HandTag x={1400} y={890} text="so pairs exist" at={exist - 24} size={46} color={INK} />
		</>
	);
};

// ---------- 9. memory aid: complements swap the components ----------
export const S09: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const aid = cue(id, 'complements swap'), swaps = cue(id, 'swaps'), product = cue(id, 'product'), same = cue(id, 'same');
	const U = 25, K = 13;
	const L0 = {x: 470, y: 760}, R0 = {x: 1190, y: 760};
	const X50 = ux(U, 50) * K, Y50 = uy(U, 50) * K, X40 = ux(U, 40) * K;
	const LW = 150;
	const pl = launcherGeomFromMuzzle(L0.x, L0.y, LW, 50), pr = launcherGeomFromMuzzle(R0.x, R0.y, LW, 40);
	return (
		<>
			<Enter at={-30} style={{position: 'absolute', left: 300, top: 150, width: 1320}}>
				<div style={{background: '#fffdf8', border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px #fffdf8, inset 0 0 0 10.5px ${INK}, 0 14px 32px rgba(60,45,20,0.10)`, padding: '20px 44px 24px', textAlign: 'center'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84, lineHeight: 1.05, opacity: prog(f, aid, 14), transform: `scale(${0.94 + 0.06 * prog(f, aid, 16)})`}}>
						<span style={{color: TEAL}}>Complements swap</span> <span style={{color: BLUE}}>the components.</span>
					</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: ORANGE, marginTop: 6, opacity: prog(f, aid + 30, 14)}}>(level ground only)</div>
				</div>
			</Enter>
			<FrameSvg>
				<LauncherSvg px={pl[0]} py={pl[1]} w={LW} deg={50} opacity={0.9} />
				<LauncherSvg px={pr[0]} py={pr[1]} w={LW} deg={40} opacity={0.9} />
				<LaunchTriangle x0={L0.x} y0={L0.y} k={K} u={U} deg={50} />
				<LaunchTriangle x0={R0.x} y0={R0.y} k={K} u={U} deg={40} flash={swaps + 46} />
				<TravelSide len={X50} from={{x: L0.x, y: L0.y, vertical: false}} to={{x: R0.x + X40, y: R0.y, vertical: true}} at={swaps} label="16.1" lift={140} />
				<TravelSide len={Y50} from={{x: L0.x + X50, y: L0.y, vertical: true}} to={{x: R0.x, y: R0.y, vertical: false}} at={swaps + 6} label="19.2" lift={60} />
			</FrameSvg>
			<HandNote x={760} y={520} at={cue(id, 'Ninety minus')} size={46} color={INK}>90° − θ swaps u<Sub>x</Sub> and u<Sub>y</Sub></HandNote>
			<div style={{position: 'absolute', left: 400, top: 892}}><Row at={product - 20} size={40}><Ux /> × <Uy /> = 16.1 × 19.2 = <MarkSpan kind="circle" at={same} color={ORANGE_STROKE}>308</MarkSpan></Row></div>
			<div style={{position: 'absolute', left: 1120, top: 892}}><Row at={product - 6} size={40}><Ux /> × <Uy /> = 19.2 × 16.1 = <MarkSpan kind="circle" at={same + 6} color={ORANGE_STROKE}>308</MarkSpan></Row></div>
		</>
	);
};
const launcherGeomFromMuzzle = (mx: number, my: number, w: number, deg: number): [number, number] => {
	const g = launcherGeom(0, 0, w, deg);
	return [mx - (g.muzzle[0]), my - (g.muzzle[1])];
};
