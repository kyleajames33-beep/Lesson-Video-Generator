// Scenes 1 to 5: the hook (opening on last time's final frame), the launch triangle, worked example 1,
// the angle sweep, and the flight to the peak.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TRACK, TYPE} from '../../shared/tokens';
import {
	AnswerBox, BallSvg, Chip, CrossedChip, DISPLAY, FlightLane, Ledger, MS, MS2, Q, ROLE, Readouts, Row, Sup, VecArrow, type World, sx, sy,
} from '../../physics/projectile/board';
import {clockAt, flightAt, fx, pos, ux, uy, vel} from '../../physics/projectile/flight';
import {V01FinalFrame} from '../phys-y12-m5-v01/s3';
import {D1, HEAD, HEAD_SIZE, PEAK_1, RUN_1, U1, cue, hold} from './common';
import {Lbl, StandingLauncher, StrobeSet, Tri, launcherAt, pathD, triPts} from './parts';

const RX = 1180, RW = 644;
const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '14px 26px 18px'};
const Title: React.FC<{children: React.ReactNode}> = ({children}) => <div style={{...DISPLAY(TYPE.label, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;

// ---------- 1. hook: how much goes up? ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const tilt = cue(id, 'tilt'), hor = cue(id, 'horizontal'), across = cue(id, 'across'), up2 = cue(id, 'up', 2), third = cue(id, 'Thirty degrees is'), up3 = cue(id, 'up', 3), think = cue(id, 'think');
	const h = hold(id);
	const out = prog(f, tilt, 18);
	const deg = kf(f, [[tilt + 10, 0], [tilt + 50, D1]]);
	const PX = 300, GY = 860, LW = 420, K = 28;
	const g = launcherAt(PX, GY, LW, deg);
	const [mx, my] = g.muzzle;
	const t = triPts(mx, my, K, U1, D1);
	return (
		<>
			{out < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - out}}><V01FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: out}}>
				<SceneHeading text={HEAD} at={tilt} size={HEAD_SIZE} />
				<FrameSvg>
					<StandingLauncher px={PX} groundY={GY} lw={LW} deg={deg} x1={96} x2={1120} />
					{f >= hor ? <Tri x0={mx} y0={my} k={K} u={U1} deg={D1} sidesAt={across} dashed arcLabel="θ = 30°" arcAt={hor + 10} /> : null}
				</FrameSvg>
				<Lbl x={mx + t.X / 2 - 30} y={my - t.Y / 2 - 40} at={hor + 6} color={ROLE.v.ink} anchor="end">u = 20<MS /></Lbl>
				<Lbl x={mx + t.X / 2} y={my + 44} at={across} color={ROLE.x.ink} anchor="middle"><Q s="u" ax="x" plain /> = ?</Lbl>
				<Lbl x={t.tip[0] + 20} y={my - t.Y / 2} at={up2} color={ROLE.y.ink}><Q s="u" ax="y" plain /> = ?</Lbl>
				<HandTag x={mx + t.X / 2 - 20} y={my + 96} text="across?" at={across + 8} size={TYPE.handSmall} color={ROLE.x.ink} />
				<HandTag x={t.tip[0] + 24} y={my - t.Y / 2 + 50} text="up?" at={up2 + 8} size={TYPE.handSmall} color={ROLE.y.ink} />
				<Enter at={tilt + 20} style={{position: 'absolute', left: RX, top: 190, width: RW}}>
					<div style={{...card, borderLeft: `10px solid ${ROLE.given.stroke}`}}>
						<Title>The launch</Title>
						<div style={{...DISPLAY(TYPE.body, INK, 700), whiteSpace: 'normal', marginTop: 6}}>speed <span style={{color: ROLE.v.ink}}>u = 20<MS /></span></div>
						<div style={{...DISPLAY(TYPE.body, INK, 700), whiteSpace: 'normal', marginTop: 4}}>angle <span style={{color: INK}}>θ = 30°</span> above the horizontal</div>
					</div>
				</Enter>
				<Enter at={third - 6} style={{position: 'absolute', left: RX, top: 400, width: RW}}>
					<div style={{...card, border: `4px solid ${INK}`}}>
						<div style={{...DISPLAY(TYPE.current, INK, 800), whiteSpace: 'normal'}}>30° is ⅓ of the way to 90°.</div>
						<div style={{...DISPLAY(TYPE.current, INK, 800), whiteSpace: 'normal', marginTop: 8, opacity: prog(f, up3 - 10, 12)}}>So does ⅓ of the speed go up?</div>
					</div>
				</Enter>
				<FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1500} y={770} ringFrom={think} /></FrameSvg>
			</div>
		</>
	);
};

// ---------- 2. the launch triangle: why cos and sin ----------
export const S02: React.FC = () => {
	const id = 'launch-triangle';
	const f = useCurrentFrame();
	const uxw = cue(id, 'u x'), uyw = cue(id, 'u y'), tip = cue(id, 'tip to tail'), hyp = cue(id, 'hypotenuse'), theta = cue(id, 'The angle theta'), adj = cue(id, 'adjacent'), opp = cue(id, 'opposite'), adjOver = cue(id, 'adjacent over'), oppOver = cue(id, 'opposite over'), soUx = cue(id, 'So u x'), uyEq = cue(id, 'u y equals');
	const X0 = 200, Y0 = 860, K = 36;
	const t = triPts(X0, Y0, K, U1, D1);
	const PX = X0 - 190;
	const lg = launcherAt(PX, Y0 + 40, 200, D1);
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<FrameSvg>
				<StandingLauncher px={PX - (lg.muzzle[0] - X0)} groundY={Y0 + 40 - (lg.muzzle[1] - Y0)} lw={200} deg={D1} ball={false} ground={false} />
				<Tri x0={X0} y0={Y0} k={K} u={U1} deg={D1} sidesAt={uxw} rightAt={tip} arcLabel="θ" arcAt={theta} glowX={adj} glowY={opp} />
			</FrameSvg>
			<Lbl x={X0 + t.X / 2} y={Y0 + 50} at={uxw} color={ROLE.x.ink} anchor="middle"><Q s="u" ax="x" plain /></Lbl>
			<Lbl x={t.tip[0] + 22} y={Y0 - t.Y / 2} at={uyw} color={ROLE.y.ink}><Q s="u" ax="y" plain /></Lbl>
			<Lbl x={X0 + t.X / 2 - 30} y={Y0 - t.Y / 2 - 44} at={-30} color={ROLE.v.ink} anchor="end">u</Lbl>
			<HandTag x={X0 + t.X / 2 - 120} y={Y0 - t.Y / 2 - 110} text="hypotenuse: u" at={hyp} size={TYPE.hand} color={ROLE.v.ink} />
			<HandTag x={X0 + 130} y={Y0 - 40} text="angle sits here" at={theta + 10} size={TYPE.handSmall} color={INK} marks={[{kind: 'circle', cx: X0 + 70, cy: Y0 - 22, rx: 64, ry: 40}]} markAt={theta} />
			<HandTag x={X0 + t.X / 2 - 120} y={Y0 + 110} text="next to θ: adjacent" at={adj + 6} size={TYPE.handSmall} color={ROLE.x.ink} />
			<HandTag x={t.tip[0] + 20} y={Y0 - t.Y / 2 + 60} text="across from θ: opposite" at={opp + 6} size={TYPE.handSmall} color={ROLE.y.ink} />
			<Enter at={-30} style={{position: 'absolute', left: RX, top: 190, width: RW}}>
				<div style={{...card, borderLeft: `10px solid ${ROLE.given.stroke}`}}>
					<Title>Launch velocity, a vector</Title>
					<div style={{...DISPLAY(TYPE.body, INK, 700), marginTop: 6}}><span style={{color: ROLE.v.ink}}>u = 20<MS /></span> at θ = 30°</div>
					<div style={{...DISPLAY(32, INK_SOFT, 600), whiteSpace: 'normal', marginTop: 6}}>two components at right angles, tip to tail</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: RX, top: 400, width: RW, ...card, opacity: 1 - prog(f, adjOver - 16, 12)}}>
				<Title>Naming the sides from θ</Title>
				<div style={{...DISPLAY(36, ROLE.v.ink, 700), marginTop: 6, transform: `scale(${1 + 0.04 * Math.sin(Math.PI * prog(f, hyp, 18))})`, transformOrigin: 'left center'}}>hypotenuse: u, the longest side</div>
				<div style={{...DISPLAY(36, ROLE.x.ink, 700), marginTop: 4, transform: `scale(${1 + 0.04 * Math.sin(Math.PI * prog(f, adj, 18))})`, transformOrigin: 'left center'}}>adjacent: next to θ</div>
				<div style={{...DISPLAY(36, ROLE.y.ink, 700), marginTop: 4, transform: `scale(${1 + 0.04 * Math.sin(Math.PI * prog(f, opp, 18))})`, transformOrigin: 'left center'}}>opposite: across from θ</div>
			</div>
			<Chip x={RX} y={400} at={adjOver} size={36} w={RW}><span style={{color: ROLE.x.ink}}>cos θ</span> = adjacent ÷ hypotenuse</Chip>
			<Chip x={RX} y={470} at={oppOver} size={36} w={RW}><span style={{color: ROLE.y.ink}}>sin θ</span> = opposite ÷ hypotenuse</Chip>
			<div style={{position: 'absolute', left: RX, top: 580, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Enter at={soUx}><div style={{display: 'inline-block', background: CARD, border: `5px solid ${ROLE.x.stroke}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(TYPE.working, ROLE.x.ink)}}><Q s="u" ax="x" plain /> = u cos θ</div></Enter>
				<Enter at={uyEq}><div style={{display: 'inline-block', background: CARD, border: `5px solid ${ROLE.y.stroke}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(TYPE.working, ROLE.y.ink)}}><Q s="u" ax="y" plain /> = u sin θ</div></Enter>
			</div>
		</>
	);
};

// ---------- 3. worked example: 20 m/s at 30 degrees ----------
export const S03: React.FC = () => {
	const id = 'worked-components';
	const f = useCurrentFrame();
	const horz = cue(id, 'Horizontally'), sec = cue(id, 'second', 2), vert = cue(id, 'Vertically'), upw = cue(id, 'upwards'), notThird = cue(id, 'not a third'), notice = cue(id, 'And notice'), isnt = cue(id, "isn't twenty"), pyth = cue(id, 'Pythagoras'), root = cue(id, 'square root'), tw5 = cue(id, 'twenty', 5);
	const X0 = 900, Y0 = 920, K = 36;
	const t = triPts(X0, Y0, K, U1, D1);
	return (
		<>
			<SceneHeading text="Find the components of the launch velocity" at={-40} size={56} />
			<div style={{position: 'absolute', left: 96, top: 176, display: 'flex', gap: 18, alignItems: 'center'}}>
				<div style={{background: ROLE.given.soft, border: `3px solid ${ROLE.given.stroke}`, borderRadius: 12, padding: '4px 18px', ...DISPLAY(34, ROLE.given.ink, 700)}}>u = 20<MS /> | θ = 30° above the horizontal</div>
				<div style={{background: CARD, border: `3px solid ${ROLE.x.stroke}`, borderRadius: 12, padding: '4px 16px', ...DISPLAY(34, ROLE.x.ink, 800)}}><Q s="u" ax="x" plain /> = u cos θ</div>
				<div style={{background: CARD, border: `3px solid ${ROLE.y.stroke}`, borderRadius: 12, padding: '4px 16px', ...DISPLAY(34, ROLE.y.ink, 800)}}><Q s="u" ax="y" plain /> = u sin θ</div>
			</div>
			<FrameSvg>
				<Tri x0={X0} y0={Y0} k={K} u={U1} deg={D1} arcLabel="30°" />
				{f >= root ? <ellipse cx={t.corner[0] - 12} cy={Y0 - 12} rx={30} ry={30} fill="none" stroke={INK} strokeWidth={4} /> : null}
			</FrameSvg>
			<Lbl x={X0 + t.X / 2} y={Y0 + 50} at={-30} color={ROLE.x.ink} anchor="middle">{f >= sec ? '17.3' : <><Q s="u" ax="x" plain /></>}</Lbl>
			<Lbl x={t.tip[0] + 22} y={Y0 - t.Y / 2} at={-30} color={ROLE.y.ink}>{f >= upw ? '10.0' : <><Q s="u" ax="y" plain /></>}</Lbl>
			<Lbl x={X0 + t.X / 2 - 30} y={Y0 - t.Y / 2 - 40} at={-30} color={ROLE.v.ink} anchor="end">20</Lbl>
			<div style={{position: 'absolute', left: 720, top: 290, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={horz} ageAt={sec + 30} size={TYPE.working} oldSize={40}><Q s="u" ax="x" /> = 20 cos 30° = 20 × 0.866</Row>
				<Row at={sec - 12} ageAt={vert} size={TYPE.working} oldSize={40}>= <AnswerBox at={sec}><span style={{color: ROLE.x.ink}}>17.3<MS /></span></AnswerBox> <span style={{fontSize: 30, color: INK_SOFT}}>(horizontal)</span></Row>
				<Row at={vert} ageAt={upw + 30} size={TYPE.working} oldSize={40}><Q s="u" ax="y" /> = 20 sin 30° = 20 × 0.500</Row>
				<Row at={upw - 14} ageAt={notice} size={TYPE.working} oldSize={40}>= <AnswerBox at={upw}><span style={{color: ROLE.y.ink}}>10.0<MS /></span></AnswerBox> <span style={{fontSize: 30, color: INK_SOFT}}>(up)</span></Row>
			</div>
			<HandTag x={1560} y={470} text="half, not a third" at={upw + 20} size={TYPE.hand} color={ROLE.y.ink} />
			<CrossedChip x={96} y={620} at={-30} crossAt={notThird + 6} size={34} caption="sin 30° = ½">⅓ of the speed goes up?</CrossedChip>
			<CrossedChip x={96} y={750} at={isnt - 20} crossAt={isnt + 6} size={34} caption="not 20!">17.3 + 10.0 = 27.3</CrossedChip>
			<div style={{position: 'absolute', left: 96, top: 870}}><Row at={root} size={TYPE.current}>√(17.3² + 10.0²) = √400 = <AnswerBox at={tw5}>20</AnswerBox></Row></div>
			<HandTag x={96} y={935} text="at right angles: Pythagoras" at={pyth} size={TYPE.handSmall} color={INK} />
		</>
	);
};

// ---------- 4. the angle shares the speed (the launcher is the slider) ----------
export const S04: React.FC = () => {
	const id = 'angle-sweep';
	const f = useCurrentFrame();
	const across1 = cue(id, 'across'), shrinks = cue(id, 'shrinks'), ff = cue(id, 'forty-five'), keep = cue(id, 'Keep going'), across2 = cue(id, 'across', 2), never = cue(id, 'never changes'), only = cue(id, 'The angle only');
	const th = kf(f, [[across1 - 30, 30], [across1, 0], [shrinks, 0], [ff, 45], [keep, 45], [across2 - 4, 90], [only, 90], [only + 50, 30]]);
	const thR = Math.round(th);
	const PX = 230, GY = 880, LW = 360, K = 25;
	const X0 = 520, Y0 = 880;
	const uxv = ux(U1, thR), uyv = uy(U1, thR);
	const t = triPts(X0, Y0, K, U1, thR);
	const pulse = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - never) / 24)));
	const BX = 1010, BB = 880;
	return (
		<>
			<SceneHeading text="The angle shares one speed between two directions" at={-40} size={56} />
			<FrameSvg>
				<StandingLauncher px={PX} groundY={GY} lw={LW} deg={th} x1={96} x2={460} />
				<Tri x0={X0} y0={Y0} k={K} u={U1} deg={Math.max(0.01, Math.min(89.99, th))} arcLabel={`${thR}°`} hypW={8 + 6 * pulse} />
				{/* component bars, same scale */}
				<rect x={BX} y={BB - uxv * K} width={56} height={uxv * K} fill={ROLE.x.stroke} rx={6} />
				<rect x={BX + 80} y={BB - uyv * K} width={56} height={uyv * K} fill={ROLE.y.stroke} rx={6} />
				<line x1={BX - 16} x2={BX + 152} y1={BB} y2={BB} stroke={INK} strokeWidth={3} />
				<line x1={BX - 16} x2={BX + 152} y1={BB - U1 * K} y2={BB - U1 * K} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 7" />
			</FrameSvg>
			<Lbl x={BX + 28} y={BB + 40} color={ROLE.x.ink} anchor="middle" size={34}><Q s="u" ax="x" plain /></Lbl>
			<Lbl x={BX + 108} y={BB + 40} color={ROLE.y.ink} anchor="middle" size={34}><Q s="u" ax="y" plain /></Lbl>
			<Lbl x={BX - 22} y={BB - U1 * K} color={INK_SOFT} anchor="end" size={30}>20</Lbl>
			<Lbl x={X0 + t.X / 2 - 24} y={Y0 - t.Y / 2 - 30} color={ROLE.v.ink} anchor="end">u = 20</Lbl>
			<Readouts x={RX} y={190} w={RW} title="live: tilt the launcher" rows={[
				{label: 'θ', value: `${thR}°`, color: INK},
				{label: <><Q s="u" ax="x" /> = u cos θ</>, value: fx(uxv, 1), unit: <MS />, color: ROLE.x.ink},
				{label: <><Q s="u" ax="y" /> = u sin θ</>, value: fx(uyv, 1), unit: <MS />, color: ROLE.y.ink},
				{label: <><Q s="u" ax="x" plain /><Sup>2</Sup> + <Q s="u" ax="y" plain /><Sup>2</Sup></>, value: fx(uxv * uxv + uyv * uyv, 0), color: INK, ring: never},
			]} />
			<HandTag x={BX - 20} y={BB - 440} text="less across" at={shrinks + 10} out={only} size={TYPE.handSmall} color={ROLE.x.ink} />
			<HandTag x={BX + 60} y={BB - 400} text="more up" at={shrinks + 20} out={only} size={TYPE.handSmall} color={ROLE.y.ink} />
			<HandTag x={RX} y={640} text="equal at 45°: 14.1 and 14.1" at={ff + 20} size={TYPE.handSmall} color={INK} />
			<HandTag x={RX} y={720} text="u = 20 m s⁻¹ throughout" at={never} size={TYPE.hand} color={ROLE.v.ink} />
			<Enter at={only} style={{position: 'absolute', left: RX, top: 800, width: RW}}>
				<div style={{...DISPLAY(TYPE.body, INK, 700), whiteSpace: 'normal'}}>The angle only shares the speed.</div>
			</Enter>
		</>
	);
};

// ---------- 5. in the air: one part stays, one runs out ----------
export const W5: World = {x0: 190, y0: 820, ppm: 46};
export const IMG5 = [0, 0.25, 0.5, 0.75, 1.0];
export const S05: React.FC = () => {
	const id = 'in-flight';
	const f = useCurrentFrame();
	const force = cue(id, 'force'), sec2 = cue(id, 'second', 2), runs = cue(id, 'runs out'), top = cue(id, 'highest point');
	const slow = Math.max(2, (runs - sec2) / 30 / PEAK_1);
	const t = f < sec2 ? 0 : clockAt(f, sec2, PEAK_1, slow);
	const s = flightAt(RUN_1, t);
	const KV = 8;
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<FrameSvg>
				<FlightLane mx={W5.x0} gy={W5.y0} ppm={W5.ppm} u={U1} deg={D1} lw={190} right={1130} hideBall />
				<path d={pathD(W5, U1, D1, t)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} />
				<StrobeSet w={W5} u={U1} deg={D1} times={IMG5} d={34} />
				{IMG5.map((k, i) => {
					const [x, y] = pos(U1, D1, k), [vx, vy] = vel(U1, D1, k);
					return (
						<g key={k}>
							<VecArrow x={sx(W5, x) + 18} y={sy(W5, y)} dx={vx * KV} dy={0} color={ROLE.x.stroke} width={5} at={force + i * 8} head={16} />
							<VecArrow x={sx(W5, x)} y={sy(W5, y) - 18} dx={0} dy={-vy * KV} color={ROLE.y.stroke} width={5} at={sec2 + i * 10} head={16} />
						</g>
					);
				})}
				<BallSvg cx={sx(W5, s.x)} cy={sy(W5, s.y)} d={40} />
			</FrameSvg>
			<HandTag x={560} y={890} text="never changes" at={force + 30} size={TYPE.handSmall} color={ROLE.x.ink} />
			<HandTag x={360} y={420} text="−9.8 m s⁻¹ every second" at={sec2 + 30} size={TYPE.handSmall} color={ROLE.y.ink} />
			<HandTag x={sx(W5, pos(U1, D1, PEAK_1)[0]) - 120} y={sy(W5, pos(U1, D1, PEAK_1)[1]) - 70} text="highest point" at={top} size={TYPE.hand} color={INK} />
			<Ledger x={RX} y={190} w={RW} h={470}
				clock={{value: `t = ${fx(t, 2)} s`, t, pulse: runs}}
				hor={{rows: [{content: <><Q s="a" ax="x" /> = 0</>, at: -30}, {content: <><Q s="v" ax="x" /> = <Q s="u" ax="x" /> = 17.3</>, at: -30, box: force}]}}
				ver={{rows: [
					{content: <><Q s="u" ax="y" /> = +10.0</>, at: -30},
					{content: <><Q s="a" ax="y" /> = <span style={{color: ROLE.a.ink}}>−9.8</span></>, at: -30},
					{content: <><Q s="v" ax="y" /> = <Q s="u" ax="y" /> + <Q s="a" ax="y" />t</>, at: sec2, box: sec2 + 20},
				]}} />
			<Readouts x={RX} y={690} w={RW} title="the ball, live (m s⁻¹)" rows={[
				{label: <><Q s="v" ax="x" /></>, value: fx(s.vx, 1), color: ROLE.x.ink},
				{label: <><Q s="v" ax="y" /></>, value: fx(s.vy, 2), color: ROLE.y.ink, ring: runs},
			]} />
		</>
	);
};
export {TRACK, MS2, Row, uy};
