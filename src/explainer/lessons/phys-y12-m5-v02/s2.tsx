// Scenes 6 to 10: the prediction at the top, the peak, worked example 2 (time to the peak), two traps,
// the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE, rgba} from '../../shared/tokens';
import {
	AnswerBox, BallSvg, Bracket, CrossedChip, DISPLAY, FlightLane, HandNote, Ledger, Sub, MS, MS2, Q, ROLE, ReadCard, Readouts, Row, VecArrow, type World, sx, sy,
} from '../../physics/projectile/board';
import {flightAt, fx, pos, ux, uy, vel} from '../../physics/projectile/flight';
import {D1, D2, D3, HEAD, HEAD_SIZE, PEAK_1, PEAK_2, RUN_1, U1, U2, cue, hold} from './common';
import {Lbl, StrobeSet, Tri, pathD, triPts} from './parts';
import {IMG5, W5} from './s1';

const RX = 1180, RW = 644;
const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '14px 26px 18px'};

// ---------- 6. prediction: at the top ----------
export const S06: React.FC = () => {
	const id = 'predict-peak';
	const think = cue(id, 'think'), vel1 = cue(id, 'velocity'), acc = cue(id, 'acceleration');
	const h = hold(id);
	const [px, py] = pos(U1, D1, PEAK_1);
	return (
		<>
			<SceneHeading text="At the top: velocity? acceleration?" at={-40} size={56} />
			<FrameSvg>
				<FlightLane mx={W5.x0} gy={W5.y0} ppm={W5.ppm} u={U1} deg={D1} lw={190} right={1130} hideBall />
				<path d={pathD(W5, U1, D1, PEAK_1)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} />
				<StrobeSet w={W5} u={U1} deg={D1} times={IMG5} d={34} />
				<BallSvg cx={sx(W5, px)} cy={sy(W5, py)} d={40} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1500} y={760} ringFrom={think} />
			</FrameSvg>
			<HandTag x={sx(W5, px) - 120} y={sy(W5, py) - 70} text="highest point" at={-30} size={TYPE.hand} color={INK} />
			<div style={{position: 'absolute', left: RX, top: 210, width: RW, display: 'flex', flexDirection: 'column', gap: 26}}>
				<Enter at={vel1 - 10}><div style={{...card, border: `4px solid ${INK}`, ...DISPLAY(TYPE.current, INK, 800)}}>velocity at the top = ?</div></Enter>
				<Enter at={acc - 10}><div style={{...card, border: `4px solid ${INK}`, ...DISPLAY(TYPE.current, INK, 800)}}>acceleration at the top = ?</div></Enter>
			</div>
		</>
	);
};

// ---------- 7. the top: zero vertical velocity is not zero acceleration ----------
const W7: World = {x0: 0, y0: 0, ppm: 110};
export const S07: React.FC = () => {
	const id = 'peak';
	const f = useCurrentFrame();
	const zero = cue(id, 'zero'), isnt = cue(id, "isn't zero"), horiz = cue(id, 'horizontal', 2), hasnt = cue(id, "hasn't changed"), down = cue(id, 'downwards'), turns = cue(id, 'turns the ball'), ifw = cue(id, 'If the acceleration'), height = cue(id, 'height'), last = cue(id, 'Zero vertical');
	// camera on the peak: the peak at (CX, CY) and the path either side of it
	const [pkx, pky] = pos(U1, D1, PEAK_1);
	const CX = 420, CY = 400;
	const w: World = {x0: CX - pkx * W7.ppm, y0: CY + pky * W7.ppm, ppm: W7.ppm};
	const tBall = f < turns ? PEAK_1 : Math.min(PEAK_1 + 0.3, PEAK_1 + (f - turns) / 30 / 3);
	const s = flightAt(RUN_1, tBall);
	const bx = sx(w, s.x), by = sy(w, s.y);
	const KV = 14;
	return (
		<>
			<SceneHeading text="At the top: velocity? acceleration?" at={-60} size={56} />
			<FrameSvg>
				<path d={pathD(w, U1, D1, PEAK_1 + 0.38, PEAK_1 - 0.45)} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} />
				{f >= height - 10 ? <DrawPath d={`M${CX},${CY} L${CX + 420},${CY}`} at={height - 10} dur={24} color={INK_SOFT} width={4} dash="14 10" /> : null}
				<BallSvg cx={bx} cy={by} d={48} />
				<VecArrow x={bx + 26} y={by} dx={s.vx * KV} dy={0} color={ROLE.x.stroke} width={7} at={horiz} label={<>17.3<MS /></>} lx={bx + 40} ly={by - 34} />
				<VecArrow x={bx} y={by + 30} dx={0} dy={150} color={ROLE.a.stroke} width={7} at={down} label={<>a = 9.8<MS2 />, down</>} lx={bx - 16} ly={by + 160} anchor="end" labelColor={ROLE.a.ink} />
				{f >= turns ? <VecArrow x={bx + 40} y={by + 30} dx={0} dy={-s.vy * KV} color={ROLE.y.stroke} width={6} at={turns} dur={4} /> : null}
			</FrameSvg>
			{f >= height ? <Lbl x={CX + 300} y={CY - 40} color={INK_SOFT} size={34}>if a = 0</Lbl> : null}
			<div style={{position: 'absolute', left: RX, top: 190, width: RW, display: 'flex', flexDirection: 'column', gap: 22}}>
				<div style={{...card, border: `4px solid ${INK}`}}>
					<div style={DISPLAY(TYPE.body, INK, 800)}>velocity at the top</div>
					<Row at={zero} size={TYPE.current}><Q s="v" ax="y" /> = 0</Row>
					<Row at={horiz} size={TYPE.current}>v = <AnswerBox at={horiz + 10}><span style={{color: ROLE.x.ink}}>17.3<MS />, horizontal</span></AnswerBox></Row>
				</div>
				<div style={{...card, border: `4px solid ${INK}`}}>
					<div style={DISPLAY(TYPE.body, INK, 800)}>acceleration at the top</div>
					<Row at={down} size={TYPE.current}>a = <AnswerBox at={down + 10}><span style={{color: ROLE.a.ink}}>9.8<MS2 />, down</span></AnswerBox></Row>
				</div>
			</div>
			<Readouts x={620} y={770} w={500} size={TYPE.current} title={<>the ball at the top, live (m s<sup>−1</sup>)</>} rows={[
				{label: <>horizontal <Q s="v" ax="x" plain /></>, value: fx(s.vx, 1), color: ROLE.x.ink},
				{label: <>vertical <Q s="v" ax="y" plain /></>, value: fx(s.vy, 2), color: ROLE.y.ink, ring: zero},
			]} />
			<CrossedChip x={96} y={600} at={isnt - 10} crossAt={horiz} size={34} caption="still moving">velocity = 0 at the top</CrossedChip>
			<CrossedChip x={96} y={720} at={hasnt} crossAt={down} size={34} caption="still accelerating">acceleration = 0 at the top</CrossedChip>
			<Enter at={last - 10} style={{position: 'absolute', left: RX, top: 700, width: RW, display: 'flex', gap: 16, flexWrap: 'wrap'}}>
				<div style={{background: CARD, border: `4px solid ${ROLE.y.stroke}`, borderRadius: 14, padding: '4px 16px', ...DISPLAY(34, ROLE.y.ink)}}><Q s="v" ax="y" plain /> = 0 (for an instant)</div>
				<div style={{background: CARD, border: `4px solid ${ROLE.a.stroke}`, borderRadius: 14, padding: '4px 16px', ...DISPLAY(34, ROLE.a.ink)}}><Q s="a" ax="y" plain /> = −9.8<MS2 /> (always)</div>
			</Enter>
			<HandTag x={RX} y={880} text="gravity never switches off" at={last + 20} size={TYPE.hand} color={ROLE.a.ink} />
			<HandTag x={CX + 140} y={CY + 250} text="turns it around" at={turns + 10} out={ifw + 60} size={TYPE.handSmall} color={ROLE.y.ink} />
		</>
	);
};

// ---------- small launch stage for the time to the peak ----------
const WS: World = {x0: 150, y0: 880, ppm: 18};
// ---------- 8. worked example: time to the peak ----------
export const S08: React.FC = () => {
	const id = 'worked-time-to-peak';
	const f = useCurrentFrame();
	const only = cue(id, 'Only the vertical'), upPos = cue(id, 'Up is positive'), uyw = cue(id, 'u y is'), sec2 = cue(id, 'second', 2), peak = cue(id, 'At the peak'), zero = cue(id, 'zero'), using = cue(id, 'using'), zeq = cue(id, 'zero equals'), secs = cue(id, 'seconds'), thats = cue(id, "That's the time");
	const [pkx, pky] = pos(U2, D2, PEAK_2);
	const ux2 = ux(U2, D2), uy2 = uy(U2, D2);
	const BOX: React.CSSProperties = {background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, border: `3px solid ${ROLE.given.stroke}`, padding: '8px 22px 12px'};
	return (
		<>
			<SceneHeading text="How long does the ball take to reach its highest point?" at={-40} size={52} />
			<FrameSvg>
				<FlightLane mx={WS.x0} gy={WS.y0} ppm={WS.ppm} u={U2} deg={D2} lw={130} right={720} hideBall />
				<path d={pathD(WS, U2, D2, PEAK_2)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} />
				{f >= thats ? <DrawPath d={pathD(WS, U2, D2, 2 * PEAK_2, PEAK_2)} at={thats} dur={30} color={ROLE.v.stroke} width={4} dash="12 10" /> : null}
				<BallSvg cx={sx(WS, pkx)} cy={sy(WS, pky)} d={30} />
				{f >= zero ? <DrawPath d={`M${sx(WS, pkx) - 34},${sy(WS, pky)} a34,30 0 1,0 68,0 a34,30 0 1,0 -68,0`} at={zero} dur={16} color={INK} width={4} /> : null}
				<VecArrow x={WS.x0} y={WS.y0} dx={ux2 * 7} dy={-uy2 * 7} color={ROLE.v.stroke} width={6} label={<>25<MS /></>} lx={WS.x0 - 10} ly={WS.y0 - uy2 * 7 - 30} anchor="end" />
			</FrameSvg>
			<Lbl x={WS.x0 + 60} y={WS.y0 - 20} size={30}>40°</Lbl>
			<div style={{position: 'absolute', left: 760, top: 180, width: 1064, display: 'flex', gap: 22}}>
				<div style={{...BOX, borderTop: `9px solid ${ROLE.x.stroke}`, width: 400}}>
					<div style={DISPLAY(TYPE.support, ROLE.x.ink, 800)}>horizontal (x)</div>
					<div style={DISPLAY(34, ROLE.given.ink, 700)}><Q s="u" ax="x" plain /> = 25 cos 40°</div>
					<div style={DISPLAY(34, ROLE.given.ink, 700)}>   = 19.2<MS /></div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall, color: INK_SOFT}}>not needed for the time</div>
				</div>
				<div style={{...BOX, borderTop: `9px solid ${ROLE.y.stroke}`, flex: 1, background: f >= zero && f < zero + 40 ? rgba(ROLE.y.soft, 0.9) : CARD}}>
					<div style={DISPLAY(TYPE.support, ROLE.y.ink, 800)}>vertical (y): start here</div>
					<Enter at={upPos}><div style={DISPLAY(34, ROLE.given.ink, 700)}><Q s="a" ax="y" plain /> = −9.8<MS2 /> <span style={{fontSize: 28, color: INK_SOFT}}>(up positive)</span></div></Enter>
					<Enter at={uyw}><div style={DISPLAY(34, ROLE.given.ink, 700)}><Q s="u" ax="y" plain /> = 25 sin 40°{f >= sec2 ? ' = 16.07' : ''}{f >= sec2 ? <MS /> : null}</div></Enter>
					<Enter at={peak}><div style={DISPLAY(34, ROLE.given.ink, 700)}><Q s="v" ax="y" plain /> = 0 at the peak</div></Enter>
				</div>
			</div>
			<HandNote x={1300} y={160} at={only} size={TYPE.handSmall} color={ROLE.y.ink}>only u<Sub>y</Sub></HandNote>
			<Enter at={-30} style={{position: 'absolute', left: 760, top: 470}}>
				<div style={{display: 'inline-block', background: CARD, border: `4px solid ${ROLE.y.stroke}`, borderRadius: 14, padding: '2px 18px 6px', ...DISPLAY(TYPE.current, ROLE.y.ink)}}><Q s="v" ax="y" plain /> = <Q s="u" ax="y" plain /> + <Q s="a" ax="y" plain />t</div>
			</Enter>
			<div style={{position: 'absolute', left: 760, top: 580, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={zeq} ageAt={secs} size={TYPE.working} oldSize={40}>0 = 16.07 + (−9.8)t</Row>
				<Row at={secs - 12} size={TYPE.working}>t = 16.07 ÷ 9.8 = <AnswerBox at={secs}>1.64 s</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1360, top: 420, width: 464, ...card, border: `3px solid ${ROLE.y.stroke}`, ...DISPLAY(34, INK, 700), whiteSpace: 'normal', lineHeight: 1.3}}>
				<div style={{...DISPLAY(28, INK_SOFT, 800)}}>PLAN</div>
				<div>At the top, <Q s="v" ax="y" plain /> = 0.</div>
				<div>Solve the vertical equation for t.</div>
			</div>
			<ReadCard x={1440} y={760} w={384} label="one clock" value={f >= secs ? 't = 1.64' : 't = ?'} unit={f >= secs ? 's' : undefined} pulse={secs} border={INK} />
			<HandTag x={760} y={810} text="time to the peak, not the total flight" at={thats} size={TYPE.handSmall} color={INK} />
		</>
	);
};

// ---------- 9. two traps ----------
export const S09: React.FC = () => {
	const id = 'two-traps';
	const f = useCurrentFrame();
	const gives = cue(id, 'That gives'), grav = cue(id, 'gravity'), second = cue(id, 'The second'), fifty = cue(id, 'fifty degrees'), forty2 = cue(id, 'forty', 2), always = cue(id, 'Always check');
	const AX = 140, AY = 900, AK = 24;
	const ta = triPts(AX, AY, AK, U2, D2);
	const BX0 = 1250, BY0 = 910, BK = 18;
	const tb = triPts(BX0, BY0, BK, U2, D3);
	return (
		<>
			<SceneHeading text="Two traps" at={-40} size={56} />
			<div style={{position: 'absolute', left: 96, top: 340, ...DISPLAY(TYPE.current, ROLE.y.ink, 800)}}>Trap 1: the whole speed</div>
			<div style={{position: 'absolute', left: 960, top: 340, ...DISPLAY(TYPE.current, ROLE.y.ink, 800)}}>Trap 2: an angle from the vertical</div>
			<div style={{position: 'absolute', left: 96, top: 180, ...DISPLAY(TYPE.body, INK, 700)}}>time to the peak: <span style={{border: `4px solid ${INK}`, borderRadius: 10, padding: '0 10px'}}>t = 1.64 s</span></div>
			<CrossedChip x={96} y={410} at={gives - 6} crossAt={grav} size={TYPE.current} caption="whole speed: wrong">t = 25 ÷ 9.8 = 2.55 s</CrossedChip>
			<FrameSvg>
				<Tri x0={AX} y0={AY} k={AK} u={U2} deg={D2} arcLabel="40°" glowY={grav} />
				{f >= grav ? <DrawPath d={`M${ta.tip[0] + 2},${ta.tip[1] - 30} a40,${ta.Y / 2 + 34} 0 1,0 1,0`} at={grav} dur={18} color={INK} width={4} /> : null}
				<Tri x0={BX0} y0={BY0} k={BK} u={U2} deg={D3} ref="v" arcLabel="40°" second={{at: fifty, label: '50°'}} glowY={forty2} />
			</FrameSvg>
			<Lbl x={AX + ta.X / 2} y={AY + 46} color={ROLE.x.ink} anchor="middle" size={34}>{'25 cos 40°'}</Lbl>
			<Lbl x={ta.tip[0] + 18} y={AY - ta.Y / 2} color={ROLE.y.ink} size={34}><Q s="u" ax="y" plain /> = 25 sin 40°</Lbl>
			<HandNote x={ta.tip[0] + 18} y={AY - ta.Y / 2 + 56} at={grav + 14} size={TYPE.handSmall} color={ROLE.y.ink}>only u<Sub>y</Sub> slows to zero</HandNote>
			{f >= -1 ? <Lbl x={tb.tip[0] + 20} y={tb.tip[1] + 10} color={ROLE.v.ink}>u = 25<MS /></Lbl> : null}
			<Enter at={second} style={{position: 'absolute', left: 960, top: 180, width: 864}}>
				<div style={{...DISPLAY(TYPE.body, INK, 700), whiteSpace: 'normal'}}>An angle of 40° <b>from the vertical</b> is 50° above the horizontal.</div>
			</Enter>
			<div style={{position: 'absolute', left: 960, top: 410, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={forty2 - 10} size={TYPE.working}><Q s="u" ax="y" /> = 25 cos 40° = <AnswerBox at={forty2}><span style={{color: ROLE.y.ink}}>19.2<MS /></span></AnswerBox></Row>
				<Row at={forty2 + 10} size={34}><span style={{color: INK_SOFT}}>(= 25 sin 50°)</span></Row>
				<Row at={forty2 + 24} size={TYPE.current}><Q s="u" ax="x" /> = 25 sin 40° = 16.1<MS /></Row>
			</div>
			{f >= forty2 ? <Lbl x={tb.tip[0] + 18} y={BY0 - tb.Y / 2} color={ROLE.y.ink} size={34} at={forty2}>next to the 40°</Lbl> : null}
			<HandTag x={960} y={640} text="check which side it touches" at={always} size={TYPE.handSmall} color={INK} marks={[{kind: 'arrow', from: [1100, 665], to: [BX0 + 20, BY0 - 120], bend: 0.2}]} />
		</>
	);
};

// ---------- 10. memory aid: cos is close ----------
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const aid = cue(id, 'cos is close'), measured = cue(id, 'measured');
	const L = {x: 300, y: 900, k: 22}, R = {x: 1150, y: 900, k: 19};
	const tl = triPts(L.x, L.y, L.k, U1, D1), tr = triPts(R.x, R.y, R.k, U2, D3);
	const glow = prog(f, measured, 14);
	return (
		<>
			<div style={{position: 'absolute', left: 300, top: 140, width: 1320}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, 0 14px 32px rgba(60,45,20,0.10)`, padding: '14px 44px 18px', textAlign: 'center'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 88, lineHeight: 1.05, transform: `scale(${1 + 0.05 * Math.sin(Math.PI * prog(f, aid, 20))})`}}><span style={{color: ROLE.x.ink}}>Cos</span> is close.</div>
					<div style={{...DISPLAY(36, INK_SOFT, 700), marginTop: 6, opacity: prog(f, aid + 30, 14)}}>the side touching the angle gets cos</div>
				</div>
			</div>
			<FrameSvg>
				<Tri x0={L.x} y0={L.y} k={L.k} u={U1} deg={D1} arcLabel="30°" glowX={measured} />
				<Tri x0={R.x} y0={R.y} k={R.k} u={U2} deg={D3} ref="v" arcLabel="40°" glowY={measured} />
			</FrameSvg>
			<Lbl x={L.x + tl.X / 2} y={L.y + 50} color={ROLE.x.ink} anchor="middle">{glow > 0.5 ? 'cos (close)' : <Q s="u" ax="x" plain />}</Lbl>
			<Lbl x={tl.tip[0] + 18} y={L.y - tl.Y / 2} color={ROLE.y.ink}>{glow > 0.5 ? 'sin' : <Q s="u" ax="y" plain />}</Lbl>
			<Lbl x={R.x + tr.X / 2} y={R.y + 50} color={ROLE.x.ink} anchor="middle">{glow > 0.5 ? 'sin' : <Q s="u" ax="x" plain />}</Lbl>
			<Lbl x={tr.tip[0] + 18} y={R.y - tr.Y / 2} color={ROLE.y.ink}>{glow > 0.5 ? 'cos (close)' : <Q s="u" ax="y" plain />}</Lbl>
			<Lbl x={L.x - 20} y={L.y - 280} size={34} color={INK_SOFT}>angle on the horizontal</Lbl>
			<Lbl x={R.x - 300} y={R.y - 300} size={34} color={INK_SOFT}>angle on the vertical</Lbl>
		</>
	);
};
export {D2, Bracket, Ledger, vel, MS2};
