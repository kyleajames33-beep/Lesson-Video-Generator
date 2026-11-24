// Scenes 6 to 9: solve and check (the live weight slider; the plank tilts with the sign of the net torque),
// torque balance is not force balance (the couple), two slips, the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, DISPLAY, Readouts, Row, VecArrow} from '../../physics/projectile/board';
import {BalanceScale} from '../../physics/projectile/balance';
import {PenRing, PivotDot, TurnArrow} from '../../physics/projectile/turning';
import {R_BAL, cue, fx, kfm, seesaw, tiltFor} from './common';
import {AMBER, Boxed, Card, Lbl, Line, NAVY, SUPPORT, SeatWeight, Seesaw, TURN, Title, seesawGeom} from './parts';

const KS = 0.62; // balance scale: px per N m on the seesaw

// ---------- 6. solve and check (live slider) ----------
const H6 = {hx: 640, hy: 560, w: 1000};
export const S06: React.FC = () => {
	const id = 'solve-check';
	const f = useCurrentFrame();
	const gC = cue(id, 'g cancels'), soR = cue(id, 'So r equals'), metres = cue(id, 'metres'), check = cue(id, 'Check'), half = cue(id, 'Each half'), fits = cue(id, 'fits'), lighter = cue(id, 'The lighter'), less = cue(id, 'less force');
	const r = kfm(f, [[metres, 1.0], [metres + 24, 0.6], [metres + 100, 1.5], [metres + 130, R_BAL]]);
	const st = seesaw(r);
	const tilt = tiltFor(st.net);
	const g = seesawGeom(H6.hx, H6.hy, H6.w, tilt);
	const g0 = seesawGeom(H6.hx, H6.hy, H6.w);
	const [lx] = g0.at(-1.2), [rx] = g0.at(r), [ex] = g0.at(1.5);
	const live = f >= metres;
	const balanced = Math.abs(st.net) < 0.05;
	const strike = prog(f, gC, 14);
	return (
		<>
			<SceneHeading text="Solve, then check" at={-40} size={56} />
			<FrameSvg>
				<Seesaw hx={H6.hx} hy={H6.hy} w={H6.w} tilt={tilt} />
				<SeatWeight g={g} x={-1.2} L={140} />
				<SeatWeight g={g} x={r} L={140} dash={live ? undefined : '12 8'} />
				<Bracket x1={H6.hx} y1={g0.base + 34} x2={lx} y2={g0.base + 34} color={NAVY.stroke} />
				<Bracket x1={H6.hx} y1={g0.base + 34} x2={rx} y2={g0.base + 34} color={NAVY.stroke} />
				<Bracket x1={H6.hx} y1={g0.topY - 150} x2={ex} y2={g0.topY - 150} color={INK} at={half} />
				<PivotDot x={H6.hx} y={H6.hy} />
			</FrameSvg>
			<Lbl x={(H6.hx + lx) / 2} y={g0.base + 76} color={NAVY.ink} anchor="middle" size={32}>1.2 m</Lbl>
			<Lbl x={(H6.hx + rx) / 2} y={g0.base + 76} color={NAVY.ink} anchor="middle" size={32}>{live ? `r = ${fx(r, 2)} m` : 'r = ?'}</Lbl>
			<Lbl x={(H6.hx + ex) / 2} y={g0.topY - 186} at={half} color={INK} anchor="middle" size={32}>half: 1.50 m</Lbl>
			<Lbl x={g.at(-1.2)[0] - 16} y={g.at(-1.2)[1] + 110} color={AMBER.ink} anchor="end" size={30}>30 kg</Lbl>
			<Lbl x={g.at(r)[0] + 16} y={g.at(r)[1] + 110} color={AMBER.ink} size={30}>25 kg</Lbl>
			<div style={{position: 'absolute', left: 96, top: 780, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={-30} ageAt={soR} size={TYPE.current} oldSize={34}>30<span style={{textDecoration: strike > 0.5 ? 'line-through' : undefined}}>g</span> × 1.2 = 25<span style={{textDecoration: strike > 0.5 ? 'line-through' : undefined}}>g</span> × r <span style={{opacity: strike, fontFamily: FONT_HAND, color: INK, fontSize: 34}}>g cancels</span></Row>
				<Row at={soR} size={TYPE.current}>r = 30 × 1.2 ÷ 25 = 36 ÷ 25 = <AnswerBox at={metres}>1.44 m</AnswerBox></Row>
			</div>
			<Readouts x={1230} y={190} w={594} size={44} title="live: 25 kg at distance r" rows={[
				{label: 'r', value: fx(r, 2), unit: 'm', color: NAVY.ink},
				{label: 'anticlockwise τ', value: fx(st.anticlockwise, 1), unit: 'N m', color: TURN.acw.ink},
				{label: 'clockwise τ = 245r', value: fx(st.clockwise, 1), unit: 'N m', color: TURN.cw.ink},
				{label: 'net τ', value: (st.net > 0.05 ? '+' : '') + fx(st.net, 1), unit: 'N m', color: INK, ring: balanced && f > metres + 120 ? metres + 130 : undefined},
			]} />
			<BalanceScale x={1230} y={560} w={594} h={200} acw={st.anticlockwise} cw={st.clockwise} k={KS} net={balanced && f > metres + 120 ? <>net torque = <AnswerBox at={metres + 130}>0</AnswerBox></> : <>net τ = {fx(st.net, 1)} N m</>} />
			<Chip x={1230} y={790} at={check} size={34} w={594} border={INK}>check: <span style={{opacity: prog(f, fits, 12)}}>1.44 m &lt; 1.50 m, it fits ✓</span></Chip>
			<Chip x={1230} y={870} at={lighter} size={30} w={594} border={INK}>30 kg × 1.2 m = 36 = 25 kg × 1.44 m</Chip>
			<HandTag x={700} y={250} text="less force, more distance" at={less} size={TYPE.handSmall} color={INK} />
		</>
	);
};

// ---------- 7. torque balance is not force balance ----------
const H7 = {hx: 560, hy: 620, w: 980};
export const S07: React.FC = () => {
	const id = 'torque-not-force';
	const f = useCurrentFrame();
	const support = cue(id, 'about the support'), total = cue(id, 'total weight'), numbers = cue(id, 'numbers'), pushUp = cue(id, 'Push up'), netF = cue(id, 'The net force'), turn = cue(id, 'turn'), complete = cue(id, 'Complete balance');
	const tilt = kfm(f, [[turn - 10, 0], [turn + 50, -7]]);
	const g = seesawGeom(H7.hx, H7.hy, H7.w, tilt);
	const g0 = seesawGeom(H7.hx, H7.hy, H7.w);
	const wOut = pushUp;
	const [Lx, Ly] = g.at(-1.5), [Rx, Ry] = g.at(1.5);
	return (
		<>
			<SceneHeading text="Torque balance is not force balance" at={-40} size={54} />
			<FrameSvg>
				<Seesaw hx={H7.hx} hy={H7.hy} w={H7.w} tilt={tilt} />
				<SeatWeight g={g} x={-1.2} L={120} out={wOut} />
				<SeatWeight g={g} x={R_BAL} L={120} out={wOut} />
				<VecArrow x={H7.hx - 14} y={H7.hy - 170} dx={0} dy={140} color={AMBER.stroke} width={7} at={total} out={wOut} head={22} />
				<VecArrow x={H7.hx} y={H7.hy + 190} dx={0} dy={-160} color={SUPPORT.stroke} width={9} at={support} out={wOut} head={26} />
				<VecArrow x={Lx} y={Ly + 150} dx={0} dy={-140} color={AMBER.stroke} width={9} at={pushUp} head={26} />
				<VecArrow x={Rx} y={Ry - 10} dx={0} dy={140} color={AMBER.stroke} width={9} at={pushUp + 8} head={26} />
				<TurnArrow cx={H7.hx} cy={H7.hy} r={200} from={130} to={50} color={TURN.cw.stroke} at={turn} width={9} />
				<PivotDot x={H7.hx} y={H7.hy} />
			</FrameSvg>
			<Lbl x={H7.hx + 24} y={H7.hy + 150} at={support} out={wOut} color={SUPPORT.ink} size={34}>support = ?</Lbl>
			<Lbl x={g0.at(-1.5)[0] + 10} y={H7.hy + 200} at={pushUp} color={AMBER.ink} size={32}>push up</Lbl>
			<Lbl x={g0.at(1.5)[0] - 10} y={H7.hy + 200} at={pushUp + 8} color={AMBER.ink} anchor="end" size={32}>push down</Lbl>
			<Lbl x={H7.hx} y={H7.hy - 230} at={turn + 10} color={TURN.cw.ink} anchor="middle" size={34}>turns clockwise</Lbl>
			<Card x={1080} y={190} w={360} border={TURN.r.stroke}>
				<Title>Forces</Title>
				<Line size={40}>ΣF = ?</Line>
				<Line size={30} out={total}>support up, weights down</Line>
				<Line size={30} at={total} out={pushUp}>support = 30g + 25g + seesaw's weight</Line>
				<Line size={30} color={INK_SOFT} at={numbers} out={pushUp}>seesaw's mass: not given</Line>
				<Line size={36} at={netF}>push up, push down: ΣF = 0</Line>
			</Card>
			<Card x={1464} y={190} w={360} border={TURN.r.stroke}>
				<Title>Torques</Title>
				<Line size={40}>Στ = ?</Line>
				<Line size={30} out={pushUp}>seesaw: Στ = 0 (balanced)</Line>
				<Line size={36} at={turn}>couple: Στ ≠ 0</Line>
			</Card>
			<Card x={96} y={800} w={900} out={pushUp - 6} border={NAVY.stroke}>
				<Line size={34}>So far: Στ = 0 with 30 kg at 1.2 m and 25 kg at 1.44 m.</Line>
				<Line size={34}>Is that the whole story?</Line>
			</Card>
			<Lbl x={g0.at(-1.2)[0]} y={g0.topY - 120} out={pushUp} color={AMBER.ink} anchor="middle" size={32}>30g</Lbl>
			<Lbl x={g0.at(R_BAL)[0]} y={g0.topY - 120} out={pushUp} color={AMBER.ink} anchor="middle" size={32}>25g</Lbl>
			<HandTag x={1100} y={560} text="can't calculate the support" at={numbers + 10} out={pushUp} size={30} color={INK} />
			<HandTag x={1100} y={600} text="ΣF = 0, still turns" at={turn + 20} size={TYPE.handSmall} color={INK} />
			<Lbl x={1470} y={570} at={turn + 30} color={INK_SOFT} size={30}>(a couple)</Lbl>
			<Card x={1080} y={680} w={744} at={complete}>
				<Title>Complete (static) equilibrium</Title>
				<Line size={36}><AnswerBox at={complete + 20}>ΣF = 0</AnswerBox> no change in motion along a line</Line>
				<Line size={36} mt={10}><AnswerBox at={complete + 30}>Στ = 0</AnswerBox> no change in rotation</Line>
			</Card>
			<HandTag x={1100} y={930} text="two separate checks" at={complete + 40} size={30} color={SUPPORT.ink} />
		</>
	);
};

// ---------- 8. two slips ----------
const H8 = {hx: 640, hy: 540, w: 1000};
export const S08: React.FC = () => {
	const id = 'two-slips';
	const f = useCurrentFrame();
	const seat = cue(id, 'Seat the lighter'), five = cue(id, 'five g'), down = cue(id, 'down'), equal = cue(id, 'Equal distances'), other = cue(id, 'The other slip'), endOf = cue(id, 'end of the seesaw'), always = cue(id, 'Torques are always');
	const r = kfm(f, [[seat, R_BAL], [seat + 40, 1.2]]);
	const st = seesaw(r);
	const tilt = tiltFor(st.net);
	const g = seesawGeom(H8.hx, H8.hy, H8.w, tilt);
	const g0 = seesawGeom(H8.hx, H8.hy, H8.w);
	const [lx] = g0.at(-1.2), [endX] = g0.at(-1.5);
	const glow = prog(f, always, 14);
	return (
		<>
			<SceneHeading text="Two slips" at={-40} size={56} />
			<FrameSvg>
				<Seesaw hx={H8.hx} hy={H8.hy} w={H8.w} tilt={tilt} />
				<SeatWeight g={g} x={-1.2} L={130} />
				<SeatWeight g={g} x={r} L={130} />
				<TurnArrow cx={H8.hx} cy={H8.hy} r={260} from={150} to={200} color={TURN.acw.stroke} at={down} width={8} />
				<Bracket x1={endX} y1={g0.base + 30} x2={lx} y2={g0.base + 30} color={TURN.along.stroke} at={endOf} />
				{glow > 0.01 ? <line x1={H8.hx} y1={g0.base + 90} x2={lx} y2={g0.base + 90} stroke={NAVY.soft} strokeWidth={22 * glow} strokeLinecap="round" /> : null}
				<Bracket x1={H8.hx} y1={g0.base + 90} x2={lx} y2={g0.base + 90} color={NAVY.stroke} at={always} />
				<PivotDot x={H8.hx} y={H8.hy} />
			</FrameSvg>
			<Lbl x={(endX + lx) / 2} y={g0.base + 66} at={endOf} color={TURN.along.ink} anchor="middle" size={30}>0.3 m</Lbl>
			<Lbl x={(H8.hx + lx) / 2} y={g0.base + 132} at={always} color={NAVY.ink} anchor="middle" size={32}>1.2 m</Lbl>
			<HandTag x={H8.hx + 30} y={g0.base + 120} text="from the pivot" at={always + 10} size={30} color={NAVY.ink} />
			<Lbl x={g.at(-1.2)[0] - 16} y={g.at(-1.2)[1] + 110} color={AMBER.ink} anchor="end" size={30}>30 kg</Lbl>
			<Lbl x={g.at(r)[0] + 16} y={g.at(r)[1] + 110} color={AMBER.ink} size={30}>25 kg</Lbl>
			<BalanceScale x={1230} y={190} w={594} h={200} acw={st.anticlockwise} cw={st.clockwise} k={KS} net={<>net τ = {st.net > 0.05 ? '+' : ''}{fx(st.net, 1)} N m</>} />
			<div style={{position: 'absolute', left: 96, top: 880}}>
				<Row at={five} size={TYPE.current}>Στ = (30g)(1.2) − (25g)(1.2) = (5g)(1.2) = <span style={{color: TURN.acw.ink}}>58.8 N m</span></Row>
			</div>
			<CrossedChip x={1230} y={440} at={seat} crossAt={equal} size={36} caption="left side wins">same distance for 25 kg</CrossedChip>
			<Lbl x={1240} y={600} at={equal + 10} color={INK} size={32}>equal distances balance only equal weights</Lbl>
			<CrossedChip x={1230} y={660} at={other} crossAt={endOf + 20} size={36} caption="measure from the pivot">from the end: 0.3 m</CrossedChip>
		</>
	);
};

// ---------- 9. memory aid ----------
const H9 = {hx: 560, hy: 620, w: 960};
export const S09: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const heavy = cue(id, 'Heavy near'), light = cue(id, 'light far'), mass = cue(id, 'mass times'), only = cue(id, 'That shortcut'), pivot = cue(id, 'pivot', 2);
	const g = seesawGeom(H9.hx, H9.hy, H9.w);
	const pz = (a: number) => Math.sin(Math.PI * Math.max(0, Math.min(1, (f - a) / 24)));
	const [lx] = g.at(-1.2), [rx] = g.at(R_BAL);
	return (
		<>
			<SceneHeading text="A short way to remember it" at={-40} size={56} />
			<FrameSvg>
				<Seesaw hx={H9.hx} hy={H9.hy} w={H9.w} />
				<SeatWeight g={g} x={-1.2} L={170} />
				<SeatWeight g={g} x={R_BAL} L={130} />
				<Bracket x1={H9.hx} y1={g.base + 34} x2={lx} y2={g.base + 34} color={NAVY.stroke} />
				<Bracket x1={H9.hx} y1={g.base + 34} x2={rx} y2={g.base + 34} color={NAVY.stroke} />
				<PivotDot x={H9.hx} y={H9.hy} />
				<PenRing cx={H9.hx} cy={H9.hy} rx={40} ry={38} at={pivot - 10} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={(H9.hx + lx) / 2} y={g.base + 76} color={NAVY.ink} anchor="middle" size={32}>near: 1.2 m</Lbl>
			<Lbl x={(H9.hx + rx) / 2} y={g.base + 76} color={NAVY.ink} anchor="middle" size={32}>far: 1.44 m</Lbl>
			<Lbl x={lx} y={g.topY - 120} color={AMBER.ink} anchor="middle" size={32}>heavy: 30 kg</Lbl>
			<Lbl x={rx} y={g.topY - 120} color={AMBER.ink} anchor="middle" size={32}>light: 25 kg</Lbl>
			<Card x={1130} y={190} w={694} pad="18px 36px 22px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK_SOFT}}>Memory aid</div>
				<div style={{...DISPLAY(66, AMBER.ink), fontFamily: FONT_HAND, transform: `scale(${1 + 0.06 * pz(heavy)})`, transformOrigin: 'left center'}}>Heavy near,</div>
				<div style={{...DISPLAY(66, NAVY.ink), fontFamily: FONT_HAND, transform: `scale(${1 + 0.06 * pz(light)})`, transformOrigin: 'left center'}}>light far.</div>
				<Line size={36} at={mass} mt={12}><Boxed at={mass + 10} size={36}>m₁r₁ = m₂r₂ (g cancels)</Boxed></Line>
				<Line size={30} at={mass + 20} color={INK_SOFT}>r measured from the pivot</Line>
			</Card>
			<Card x={1130} y={640} w={694} at={only} border={NAVY.stroke}>
				<Title color={NAVY.ink}>Only when</Title>
				<Line size={32} color={NAVY.ink}>every force is a weight, at right angles to a level beam</Line>
				<Line size={32} color={NAVY.ink} at={pivot - 20}>the beam's own weight acts at the pivot</Line>
			</Card>
		</>
	);
};
