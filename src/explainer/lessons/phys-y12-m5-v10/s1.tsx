// Scenes 1 to 5: the hook (opening on last time's final frame, the crane), the two torques cancel (balance
// scale), rotational equilibrium and signs (top-view inset), the seesaw and the pivot, the signed sum.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, DISPLAY, GroundLine, Row, VecArrow} from '../../physics/projectile/board';
import {BalanceScale, TopSlew} from '../../physics/projectile/balance';
import {CraneSvg, DashLine, PenRing, PivotDot, TurnArrow, craneGeom} from '../../physics/projectile/turning';
import {V09FinalFrame} from '../phys-y12-m5-v09/s3';
import {CRANE, HEAD, cue, hold, kfm} from './common';
import {AMBER, Boxed, CRANE_STAGE, Card, Lbl, Line, NAVY, SUPPORT, SeatWeight, Seesaw, TURN, Title, seesawGeom} from './parts';

const C1 = CRANE_STAGE;
const C2 = {mastX: 470, groundY: 900, s: 0.66};
/** Torque bars: px per N m on the crane scale. */
const KC = 300 / 1.2e6;
const sci = (v: number) => (v / 1e6).toFixed(3) + ' × 10⁶';

/** The crane stage with the two weights, brackets and turning arrows, at a camera mix between two stages. */
const CraneStage: React.FC<{k: number; cwL: number; loadL: number; brAt: number; br6At: number; pulse6?: number; arrows?: {cw: number; acw: number; outAt?: number}; ring?: number}> = ({k, cwL, loadL, brAt, br6At, pulse6, arrows, ring}) => {
	const f = useCurrentFrame();
	const st = {mastX: C1.mastX + (C2.mastX - C1.mastX) * k, groundY: C1.groundY, s: C1.s + (C2.s - C1.s) * k};
	const g = craneGeom(st.mastX, st.groundY, st.s);
	const [px, py] = g.pivot;
	const by = g.top + 70 * st.s;
	const p6 = pulse6 === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulse6) / 30)));
	return (
		<>
			<FrameSvg>
				<GroundLine x1={180} x2={g.right + 60} y={st.groundY} />
				<CraneSvg mastX={st.mastX} groundY={st.groundY} s={st.s} />
				<VecArrow x={g.load.centre[0]} y={g.load.bottom + 4} dx={0} dy={loadL} color={AMBER.stroke} width={8} head={24} />
				<VecArrow x={g.cw[0]} y={g.cw[1] + 34 * st.s / C1.s} dx={0} dy={cwL} color={AMBER.stroke} width={8} head={24} />
				{arrows ? <TurnArrow cx={px} cy={py} r={190 * st.s / C1.s} from={78} to={18} color={TURN.cw.stroke} at={arrows.cw} width={8} out={arrows.outAt} /> : null}
				{arrows ? <TurnArrow cx={px} cy={py} r={190 * st.s / C1.s} from={102} to={162} color={TURN.acw.stroke} at={arrows.acw} width={8} out={arrows.outAt} /> : null}
				<Bracket x1={px} y1={by} x2={g.hook[0]} y2={by} color={NAVY.stroke} at={brAt} />
				<Bracket x1={g.cw[0]} y1={by} x2={px} y2={by} color={NAVY.stroke} at={br6At} />
				{p6 > 0.01 ? <line x1={g.cw[0]} y1={by} x2={px} y2={by} stroke={NAVY.soft} strokeWidth={20 * p6} strokeLinecap="round" /> : null}
				<PivotDot x={px} y={py} />
				{ring !== undefined ? <PenRing cx={px} cy={py} rx={40} ry={36} at={ring} /> : null}
			</FrameSvg>
			<Lbl x={(px + g.hook[0]) / 2} y={by - 30} at={brAt} color={NAVY.ink} anchor="middle" size={34}>30 m</Lbl>
			<Lbl x={(px + g.cw[0]) / 2} y={by - 30} at={br6At} color={NAVY.ink} anchor="middle" size={34}>6 m</Lbl>
		</>
	);
};

// ---------- 1. hook: five times heavier ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const four = cue(id, 'four tonnes'), thirty = cue(id, 'thirty metres out'), cw = cue(id, 'counterweight'), five = cue(id, 'five times heavier'), so = cue(id, 'So why'), pred = cue(id, 'prediction');
	const hd = hold(id);
	const fade = prog(f, 10, 24);
	const g = craneGeom(C1.mastX, C1.groundY, C1.s);
	const cwL = kfm(f, [[five, 150], [five + 30, 350]]), loadL = kfm(f, [[five, 110], [five + 30, 70]]);
	return (
		<>
			{fade < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - fade}}><V09FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: fade}}>
				<SceneHeading text="Five times heavier: why doesn't it tip?" at={14} size={52} />
				<CraneStage k={0} cwL={cwL} loadL={loadL} brAt={thirty} br6At={cw + 10} arrows={{cw: -200, acw: -200, outAt: four}} ring={five + 20} />
				<Lbl x={g.load.centre[0] + 110} y={g.load.centre[1] - 30} at={four} color={AMBER.ink} size={34}>4 t</Lbl>
				<Lbl x={g.cw[0] - 30} y={g.cw[1] + 120} at={cw} color={AMBER.ink} anchor="end" size={34}>20 t</Lbl>
				<HandTag x={g.cw[0] - 30} y={g.cw[1] + 260} text="5 × heavier" at={five + 20} size={TYPE.handSmall} color={AMBER.ink} anchor="end" />
				<HandTag x={g.cw[0] - 40} y={g.top + 10} text="5 × closer" at={five + 34} size={TYPE.handSmall} color={NAVY.ink} anchor="end" />
				<Card x={1330} y={200} w={494} border={NAVY.stroke}>
					<Title color={NAVY.ink}>The crane</Title>
					<Line color={AMBER.ink}>load: {f >= four ? '4 t = 4000 kg' : '?'}</Line>
					<Line color={NAVY.ink}>{f >= thirty ? '30 m out from the mast' : 'distance: ?'}</Line>
					<Line color={AMBER.ink}>counterweight: {f >= cw ? '20 t = 20 000 kg' : '?'}</Line>
					<Line color={NAVY.ink}>{f >= cw + 8 ? '6 m behind the mast' : 'distance: ?'}</Line>
				</Card>
				<Card x={1330} y={520} w={494} at={so - 4}>
					<Line size={36}>Why doesn't it tip over backwards?</Line>
				</Card>
				{(['tips backwards', 'balances', 'tips forwards'] as const).map((t, i) => <Chip key={t} x={1330} y={680 + i * 70} at={pred + i * 5} size={34}>{t}</Chip>)}
				<FrameSvg><Countdown start={hd.startFrame} end={hd.endFrame} x={1730} y={760} ringFrom={pred} /></FrameSvg>
			</div>
		</>
	);
};

// ---------- 2. the two torques cancel ----------
export const S02: React.FC = () => {
	const id = 'crane-torques';
	const f = useCurrentFrame();
	const top = cue(id, 'top of the mast'), t39 = cue(id, 'thirty-nine thousand'), cwC = cue(id, 'clockwise'), fiveB = cue(id, 'five times bigger'), fiveS = cue(id, 'five times smaller'), acwC = cue(id, 'anticlockwise'), cancel = cue(id, 'cancel'), thats = cue(id, "That's how");
	const k = prog(f, 0, 34);
	const st = {mastX: C1.mastX + (C2.mastX - C1.mastX) * k, s: C1.s + (C2.s - C1.s) * k};
	const g = craneGeom(st.mastX, C1.groundY, st.s);
	const L = CRANE.torques;
	const loadT = Math.abs(L[0].torque), cwT = Math.abs(L[1].torque);
	return (
		<>
			<SceneHeading text="Compare the turning effects" at={-40} size={56} out={thats - 6} />
			<SceneHeading text={HEAD} at={thats} size={50} />
			<CraneStage k={k} cwL={350 * st.s / C1.s} loadL={70 * st.s / C1.s} brAt={-30} br6At={-30} pulse6={fiveS} arrows={{cw: cwC, acw: acwC}} ring={top} />
			<Lbl x={g.load.centre[0] + 18} y={g.load.bottom + 60} at={t39} color={AMBER.ink} size={30}>39 200 N</Lbl>
			<Lbl x={g.cw[0] + 18} y={g.cw[1] + 240} at={fiveB} color={AMBER.ink} size={30}>196 000 N</Lbl>
			<Lbl x={g.pivot[0] + 26} y={g.pivot[1] + 40} at={top} color={NAVY.ink} size={30}>pivot</Lbl>
			<Card x={1130} y={196} w={694} out={t39 - 6} border={NAVY.stroke}>
				<Title color={NAVY.ink}>About the top of the mast</Title>
				<Line size={34}>each weight hangs at right angles to its arm,</Line>
				<Line size={34}>so τ = distance × weight</Line>
				<Line size={34} color={TURN.cw.ink}>load: turns it clockwise</Line>
				<Line size={34} color={TURN.acw.ink}>counterweight: anticlockwise</Line>
			</Card>
			<div style={{position: 'absolute', left: 1130, top: 196, width: 700, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={t39} ageAt={cwC} size={38} oldSize={32}><span style={{color: AMBER.ink}}>load: W = 4000 × 9.8 = 39 200 N</span></Row>
				<Row at={cwC} ageAt={fiveB} size={38} oldSize={32}><span style={{color: TURN.cw.ink}}>τ = 30 × 39 200 = {sci(loadT)} N m</span></Row>
				<Row at={fiveB} ageAt={acwC} size={38} oldSize={32} style={{marginTop: 10}}><span style={{color: AMBER.ink}}>W = 20 000 × 9.8 = 196 000 N</span></Row>
				<Row at={acwC} size={38}><span style={{color: TURN.acw.ink}}>τ = 6 × 196 000 = {sci(cwT)} N m</span></Row>
			</div>
			<Lbl x={g.pivot[0] + 150} y={g.pivot[1] - 190} at={cwC} color={TURN.cw.ink} size={32}>clockwise</Lbl>
			<Lbl x={g.pivot[0] - 130} y={g.pivot[1] - 190} at={acwC} color={TURN.acw.ink} anchor="end" size={32}>anticlockwise</Lbl>
			<BalanceScale x={1130} y={560} w={694} h={240} at={cwC} acw={f >= acwC ? cwT * prog(f, acwC, 20) : 0} cw={loadT * prog(f, cwC, 20)} k={KC} net={f >= cancel ? <>net torque = <AnswerBox at={cancel}>0</AnswerBox></> : <>&nbsp;</>} />
			<HandTag x={1150} y={850} text="equal and opposite" at={cancel + 10} size={TYPE.handSmall} color={INK} />
		</>
	);
};

// ---------- 3. rotational equilibrium and signs ----------
export const S03: React.FC = () => {
	const id = 'equilibrium-signs';
	const f = useCurrentFrame();
	const rotEq = cue(id, 'rotational equilibrium'), still = cue(id, 'stays still'), steadily = cue(id, 'steadily'), signs = cue(id, 'give them signs'), take = cue(id, 'Take anticlockwise'), cwNeg = cue(id, 'clockwise as negative'), addZero = cue(id, 'add to zero'), other = cue(id, 'In other words');
	const go = cue(id, 'turning at a steady rate');
	const w = 1.2; // degrees per frame: a steady rate
	const ang = 60 + (f > go ? w * (f - go) : 0);
	const T = {cx: 1460, cy: 560, R: 230};
	const sec = Math.max(0, Math.floor((f - go) / 30));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={50} />
			<Chip x={96} y={190} at={rotEq} size={36} w={960} border={INK}>rotational equilibrium: net torque = 0, so the rotation doesn't change</Chip>
			<FrameSvg>
				<GroundLine x1={110} x2={460} y={600} />
				<CraneSvg mastX={235} groundY={600} s={0.3} />
				<TurnArrow cx={640} cy={370} r={60} from={60} to={200} color={TURN.acw.stroke} at={signs} width={7} />
				<TurnArrow cx={640} cy={500} r={60} from={200} to={60} color={TURN.cw.stroke} at={signs + 12} width={7} />
				<rect x={1110} y={190} width={714} height={720} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
				<TopSlew cx={T.cx} cy={T.cy} R={T.R} angle={ang} trace={f > go ? w * (f - go) : 0} />
				{Array.from({length: Math.min(sec, 12)}, (_, i) => { const a = (60 + 36 * (i + 1)) * Math.PI / 180; return <circle key={i} cx={T.cx + T.R * Math.cos(a)} cy={T.cy - T.R * Math.sin(a)} r={8} fill={INK} />; })}
			</FrameSvg>
			<Lbl x={740} y={380} at={take} color={TURN.acw.ink} size={38}>anticlockwise: +</Lbl>
			<Lbl x={740} y={510} at={cwNeg} color={TURN.cw.ink} size={38}>clockwise: −</Lbl>
			<div style={{position: 'absolute', left: 96, top: 640}}><Row at={addZero - 10} size={60}><Boxed at={addZero} size={60}>Στ = 0</Boxed></Row></div>
			<div style={{position: 'absolute', left: 400, top: 656}}><Row at={other} size={36}>Σ clockwise τ = Σ anticlockwise τ</Row></div>
			<BalanceScale x={96} y={760} w={960} h={190} acw={1.176e6} cw={1.176e6} k={350 / 1.2e6} title="the crane: torques cancel" net={<>&nbsp;</>} />
			<div style={{position: 'absolute', left: 1140, top: 206, ...DISPLAY(30, INK, 800)}}>top view: the jib turning</div>
			<div style={{position: 'absolute', left: 1140, top: 840, ...DISPLAY(32, INK, 800), opacity: prog(f, still, 12)}}>{f < go ? 'still: stays still' : `steady: 36° every second (${sec} s)`}</div>
			<HandTag x={1140} y={260} text="still stays still, steady stays steady" at={steadily + 10} size={30} color={INK} />
		</>
	);
};

// ---------- 4. a seesaw: choose the pivot ----------
const H4 = {hx: 720, hy: 660, w: 1100};
export const S04: React.FC = () => {
	const id = 'seesaw-pivot';
	const f = useCurrentFrame();
	const k30 = cue(id, 'thirty kilogram'), k25 = cue(id, 'twenty-five kilogram'), it = cue(id, 'balance it'), support = cue(id, 'support pushing up'), own = cue(id, 'own weight'), lines = cue(id, 'Both lines'), torque = cue(id, 'torque');
	const g = seesawGeom(H4.hx, H4.hy, H4.w);
	const [lx] = g.at(-1.2), [rx] = g.at(1.0);
	return (
		<>
			<SceneHeading text="A seesaw: choose the pivot" at={-40} size={56} />
			<div style={{position: 'absolute', left: 96, top: 186, width: 1730, ...DISPLAY(40, INK, 800), whiteSpace: 'normal'}}>Where must the 25 kg child sit to balance it?</div>
			<div style={{position: 'absolute', left: 96, top: 250, width: 1728, background: NAVY.soft, borderRadius: 12, border: `3px solid ${NAVY.stroke}`, padding: '6px 20px', ...DISPLAY(30, NAVY.ink, 700), whiteSpace: 'normal'}}>uniform seesaw, 3.0 m, pivot at its centre | 30 kg child, 1.2 m left of the pivot | 25 kg child, distance r right of the pivot</div>
			<FrameSvg>
				<Seesaw hx={H4.hx} hy={H4.hy} w={H4.w} />
				<SeatWeight g={g} x={-1.2} at={k30} />
				<SeatWeight g={g} x={1.0} at={k25} dash="12 8" />
				<Bracket x1={H4.hx} y1={g.base + 40} x2={lx} y2={g.base + 40} color={NAVY.stroke} at={k30 + 10} label="1.2 m" ly={g.base + 80} size={34} />
				<Bracket x1={H4.hx} y1={g.base + 40} x2={rx} y2={g.base + 40} color={NAVY.stroke} at={k25 + 10} label="r = ?" ly={g.base + 80} size={34} />
				<VecArrow x={H4.hx} y={H4.hy + 150} dx={0} dy={-130} color={SUPPORT.stroke} width={9} at={support} head={26} />
				<VecArrow x={H4.hx} y={H4.hy - 190} dx={0} dy={160} color={AMBER.stroke} width={9} at={own} head={26} />
				<DashLine x1={H4.hx} y1={H4.hy - 250} x2={H4.hx} y2={H4.hy + 250} color={INK_SOFT} at={lines} width={3} dash="10 8" />
				<PivotDot x={H4.hx} y={H4.hy} at={-30} />
				<PenRing cx={H4.hx} cy={H4.hy} rx={42} ry={40} at={torque - 10} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={lx} y={g.topY - 120} at={k30} color={AMBER.ink} anchor="middle" size={32}>30 kg child: W = 30g</Lbl>
			<Lbl x={rx} y={g.topY - 120} at={k25} color={AMBER.ink} anchor="middle" size={32}>25 kg child: W = 25g</Lbl>
			<Lbl x={H4.hx + 24} y={H4.hy + 130} at={support} color={SUPPORT.ink} size={32}>support</Lbl>
			<Lbl x={H4.hx + 24} y={H4.hy - 170} at={own} color={AMBER.ink} size={30}>seesaw's weight (uniform: at its centre)</Lbl>
			<Card x={1330} y={380} w={494} at={it} pad="8px 22px 10px">
				<Title>Signs</Title>
				<Line color={TURN.acw.ink}>anticlockwise: +</Line>
				<Line color={TURN.cw.ink}>clockwise: −</Line>
			</Card>
			<Card x={1330} y={600} w={494} at={torque - 4} border={NAVY.stroke}>
				<Line size={34} color={NAVY.ink}>support: τ = 0 about the pivot</Line>
				<Line size={34} color={NAVY.ink}>seesaw's weight: τ = 0</Line>
			</Card>
			<HandTag x={1330} y={830} text="through the pivot: no torque" at={torque + 6} size={TYPE.handSmall} color={INK} />
		</>
	);
};

// ---------- 5. the signed sum ----------
const H5 = {hx: 700, hy: 340, w: 1000};
export const S05: React.FC = () => {
	const id = 'signed-sum';
	const f = useCurrentFrame();
	const rightA = cue(id, 'right angles'), acw = cue(id, 'anticlockwise'), cw = cue(id, 'clockwise'), forBal = cue(id, 'For balance'), zero = cue(id, 'equals zero');
	const g = seesawGeom(H5.hx, H5.hy, H5.w);
	const [lx] = g.at(-1.2), [rx] = g.at(1.0);
	return (
		<>
			<SceneHeading text="The signed sum" at={-40} size={56} />
			<FrameSvg>
				<Seesaw hx={H5.hx} hy={H5.hy} w={H5.w} />
				<SeatWeight g={g} x={-1.2} L={110} mark={rightA} />
				<SeatWeight g={g} x={1.0} L={110} mark={rightA + 6} dash="12 8" />
				<TurnArrow cx={H5.hx} cy={H5.hy} r={300} from={150} to={196} color={TURN.acw.stroke} at={acw} width={7} />
				<TurnArrow cx={H5.hx} cy={H5.hy} r={300} from={30} to={-16} color={TURN.cw.stroke} at={cw} width={7} />
				<PivotDot x={H5.hx} y={H5.hy} />
			</FrameSvg>
			<Lbl x={lx - 20} y={H5.hy + 90} color={AMBER.ink} anchor="end" size={30} at={-30}>30g, 1.2 m</Lbl>
			<Lbl x={rx + 20} y={H5.hy + 90} color={AMBER.ink} size={30}>25g, r</Lbl>
			<Card x={96} y={560} w={1100} out={acw - 6} border={NAVY.stroke}>
				<Title color={NAVY.ink}>That leaves the two weights</Title>
				<Line size={36} color={AMBER.ink}>30 kg child: weight 30g, 1.2 m left of the pivot</Line>
				<Line size={36} color={AMBER.ink}>25 kg child: weight 25g, distance r right of the pivot</Line>
			</Card>
			<HandTag x={96} y={520} text="level seesaw: each weight at right angles, so τ = distance × weight" at={rightA + 10} size={30} color={INK} />
			<div style={{position: 'absolute', left: 96, top: 580, display: 'flex', gap: 60}}>
				<Row at={acw} size={TYPE.working}><span style={{color: TURN.acw.ink}}>+ (30g)(1.2)</span></Row>
				<Row at={cw} size={TYPE.working}><span style={{color: TURN.cw.ink}}>− (25g)(r)</span></Row>
			</div>
			<div style={{position: 'absolute', left: 96, top: 700}}><Row at={forBal} size={TYPE.working}><Boxed at={zero} size={TYPE.working}>Στ = (30g)(1.2) − (25g)r = 0</Boxed></Row></div>
			<HandTag x={150} y={830} text="+ anticlockwise" at={forBal + 20} size={30} color={TURN.acw.ink} />
			<HandTag x={560} y={830} text="− clockwise" at={forBal + 30} size={30} color={TURN.cw.ink} />
			<BalanceScale x={1300} y={560} w={524} h={220} acw={352.8} cw={300} k={0.6} dashedCw at={-30} net={<span style={{color: INK_SOFT}}>clockwise size: unknown</span>} />
			<Lbl x={1300} y={500} at={acw} color={INK} size={30}>anticlockwise = clockwise?</Lbl>
		</>
	);
};

export {Line};
