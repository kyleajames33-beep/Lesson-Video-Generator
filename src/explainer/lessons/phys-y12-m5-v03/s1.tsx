// Scenes 1 to 5: the hook (opening on last time's final frame), the height equation, worked example (a),
// the flight time's two roots, and why the fall takes as long as the climb (coupled velocity graph).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {
	AnswerBox, BallSvg, Bracket, Chip, DISPLAY, FlightLane, HandNote, Ledger, MS, MS2, Q, ROLE, Readouts, Row, Sub, Sup, VecArrow, type World, sx, sy,
} from '../../physics/projectile/board';
import {VGraph, vgGeom} from '../../physics/projectile/vgraph';
import {G as G_, flightAt, fx, pos} from '../../physics/projectile/flight';
import {V02FinalFrame} from '../phys-y12-m5-v02/s3';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {D, HEAD, HEAD_SIZE, R, RUN, T, TUP, U, UX, UY, cue, hold} from './common';
import {Ring, pathT, ptT} from './parts';

const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;
const Boxed: React.FC<{color: string; size?: number; children: React.ReactNode; glow?: number}> = ({color, size = TYPE.working, children, glow = 0}) => (
	<div style={{display: 'inline-block', background: CARD, border: `${5 + 3 * glow}px solid ${color}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(size, color)}}>{children}</div>
);

// ---------- the last-time stage (v02's final frame geometry): 15 px per metre ----------
export const WH: World = {x0: 170, y0: 830, ppm: 15};
const [PKX, PKY] = pos(U, D, TUP);
const LAND_X = sx(WH, R);
const KV = 6;

// ---------- 1. hook: faster, slower or the same? ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const howHigh = cue(id, 'How high'), howLong = cue(id, 'how long'), air = cue(id, 'air'), predict = cue(id, 'a prediction'), lands = cue(id, 'When it lands'), faster = cue(id, 'faster'), slower = cue(id, 'slower'), same = cue(id, 'same speed'), think = cue(id, 'think');
	const h = hold(id);
	const fade = prog(f, 10, 24);
	const followed = cue(id, 'we followed'), comps = cue(id, 'Its components');
	const tBall = f < followed ? TUP : Math.min(TUP, ((f - followed) / 40) * TUP);
	const s = flightAt(RUN, tBall);
	const bx = sx(WH, s.x), by = sy(WH, s.y);
	const hx = sx(WH, PKX) + 70, hTop = sy(WH, PKY);
	return (
		<>
			{fade < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - fade}}><V02FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: fade}}>
				<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
				<FrameSvg>
					<FlightLane mx={WH.x0} gy={WH.y0} ppm={WH.ppm} u={U} deg={D} lw={150} right={1150} hideBall />
					<path d={pathT(WH, U, D, TUP)} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} />
					<path d={pathT(WH, U, D, T, TUP)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} strokeDasharray="12 10" />
					<BallSvg cx={bx} cy={by} d={36} />
					<VecArrow x={bx + 20} y={by} dx={s.vx * KV} dy={0} color={ROLE.x.stroke} width={6} head={18} />
					<Bracket x1={hx} y1={WH.y0} x2={hx} y2={hTop} color={INK} label="?" lx={hx + 26} ly={(WH.y0 + hTop) / 2} anchor="start" size={TYPE.working} />
					<Bracket x1={WH.x0} y1={WH.y0 + 40} x2={LAND_X} y2={WH.y0 + 40} color={INK} label="t = ?" ly={WH.y0 + 76} size={TYPE.current} />
					<VecArrow x={LAND_X} y={WH.y0} dx={UX * KV * 0.9} dy={UY * KV * 0.9} color={ROLE.v.stroke} width={4} dash="12 9" label="v = ?" lx={LAND_X + 30} ly={WH.y0 - 30} size={TYPE.current} />
					<Ring cx={hx + 44} cy={(WH.y0 + hTop) / 2} rx={52} ry={46} at={air} color={ROLE.y.stroke} />
					<Ring cx={(WH.x0 + LAND_X) / 2} cy={WH.y0 + 76} rx={90} ry={36} at={air + 18} />
					<Ring cx={LAND_X + 80} cy={WH.y0 - 30} rx={92} ry={40} at={lands} color={ROLE.v.stroke} />
				</FrameSvg>
				<Lbl x={bx + 36} y={by - 40} color={ROLE.x.ink} size={34} at={-30}>{fx(s.vx, 1)}<MS /></Lbl>
				<HandTag x={hx - 24} y={hTop + 110} anchor="end" text="how high?" at={howHigh} size={TYPE.handSmall} color={ROLE.y.ink} />
				<HandTag x={760} y={WH.y0 + 80} text="how long?" at={howLong} size={TYPE.handSmall} color={INK} />
				<HandTag x={1215} y={885} text="how fast?" at={lands + 10} size={TYPE.handSmall} color={ROLE.v.ink} />
				<Ledger x={1300} y={190} w={524} h={330} size={36} titleSize={28}
					clock={{value: 't', t: 0.25}}
					hor={{rows: [{content: <><Q s="u" ax="x" /> = 16.1</>, at: -30, box: comps}], glow: comps}}
					ver={{rows: [{content: <><Q s="u" ax="y" /> = 19.2</>, at: -30, box: comps + 20}], glow: comps + 20}} />
				<Enter at={12} style={{position: 'absolute', left: 96, top: 190, width: 560}}>
					<div style={{...card, borderLeft: `10px solid ${ROLE.given.stroke}`}}>
						<Title>The launch</Title>
						<div style={{...DISPLAY(TYPE.body, INK, 700), whiteSpace: 'normal', marginTop: 4}}><span style={{color: ROLE.v.ink}}>u = 25<MS /></span> at 50° above the horizontal, level ground</div>
					</div>
				</Enter>
				<Enter at={predict - 4} style={{position: 'absolute', left: 96, top: 372, width: 600}}>
					<div style={{...DISPLAY(TYPE.body, INK, 800), whiteSpace: 'normal'}}>Landing speed vs 25<MS />?</div>
				</Enter>
				<Chip x={96} y={428} at={faster - 4} size={36} color={INK} border={INK}>faster</Chip>
				<Chip x={262} y={428} at={slower - 4} size={36} color={INK} border={INK}>slower</Chip>
				<Chip x={432} y={428} at={same - 4} size={36} color={INK} border={INK}>same speed</Chip>
				<Enter at={howHigh - 6} style={{position: 'absolute', left: 1300, top: 556, width: 524}}>
					<div style={{...card, border: `4px solid ${INK}`}}>
						<Title>Still to find</Title>
						<div style={{...DISPLAY(TYPE.body, ROLE.y.ink, 800), marginTop: 4}}>height H = ?</div>
						<div style={{...DISPLAY(TYPE.body, INK, 800), opacity: prog(f, howLong - 6, 12)}}>flight time T = ?</div>
						<div style={{...DISPLAY(TYPE.body, ROLE.v.ink, 800), opacity: prog(f, lands, 12)}}>landing velocity v = ?</div>
					</div>
				</Enter>
				<FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1680} y={830} ringFrom={think} /></FrameSvg>
			</div>
		</>
	);
};

// ---------- 2. the height: the equation without time ----------
const W2: World = {x0: 150, y0: 930, ppm: 14};
export const S02: React.FC = () => {
	const id = 'height-equation';
	const f = useCurrentFrame();
	const zero = cue(id, 'zero'), dont = cue(id, "don't need"), without = cue(id, 'without time'), vsq = cue(id, 'v squared'), column = cue(id, 'column'), put = cue(id, 'Put in'), rearr = cue(id, 'rearranges'), launchPt = cue(id, 'launch point'), hEq = cue(id, 'H equals'), over2g = cue(id, 'over two g'), onlyV = cue(id, 'Only the vertical'), sideways = cue(id, 'Moving sideways');
	const [pkx, pky] = ptT(W2, U, D, TUP);
	const hx = pkx + 60;
	const row = (n: number): React.CSSProperties => ({...DISPLAY(40, INK, 700), display: 'flex', alignItems: 'baseline', gap: 18, marginTop: n ? 6 : 4});
	const hasT = prog(f, without, 12);
	return (
		<>
			<SceneHeading text="The height: choose the equation without time" at={-40} size={54} />
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 186, width: 820}}>
				<div style={{...card, border: `3px solid ${ROLE.given.stroke}`}}>
					<Title color={ROLE.given.ink}>Constant acceleration: which equation?</Title>
					<div style={row(0)}><span>v = u + at</span><span style={{fontFamily: FONT_HAND, fontSize: TYPE.handSmall, color: ROLE.slate.ink, opacity: hasT}}>has t</span></div>
					<div style={row(1)}><span>s = ut + ½at<Sup>2</Sup></span><span style={{fontFamily: FONT_HAND, fontSize: TYPE.handSmall, color: ROLE.slate.ink, opacity: hasT}}>has t</span></div>
					<div style={row(2)}><span style={{border: `4px solid ${hasT > 0 ? ROLE.y.stroke : 'transparent'}`, borderRadius: 10, padding: '0 10px', marginLeft: -14}}>v<Sup>2</Sup> = u<Sup>2</Sup> + 2as</span><span style={{fontFamily: FONT_HAND, fontSize: TYPE.handSmall, color: ROLE.y.ink, opacity: hasT}}>no t: use this one</span></div>
				</div>
			</Enter>
			<HandTag x={96} y={500} text="time to the top: not needed" at={dont} size={TYPE.handSmall} color={INK} />
			<FrameSvg>
				<FlightLane mx={W2.x0} gy={W2.y0} ppm={W2.ppm} u={U} deg={D} lw={140} right={1060} hideBall />
				<path d={pathT(W2, U, D, TUP)} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} />
				<path d={pathT(W2, U, D, T, TUP)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} strokeDasharray="12 10" />
				<BallSvg cx={pkx} cy={pky} d={34} />
				<VecArrow x={pkx + 20} y={pky} dx={UX * 6} dy={0} color={ROLE.x.stroke} width={6} head={18} />
				<line x1={hx} y1={W2.y0} x2={hx} y2={pky} stroke={ROLE.y.stroke} strokeWidth={4 + 3 * prog(f, hEq, 12)} />
				<line x1={hx - 12} y1={W2.y0} x2={hx + 12} y2={W2.y0} stroke={ROLE.y.stroke} strokeWidth={4} />
				<line x1={hx - 12} y1={pky} x2={hx + 12} y2={pky} stroke={ROLE.y.stroke} strokeWidth={4} />
			</FrameSvg>
			<Lbl x={hx + 22} y={(W2.y0 + pky) / 2} color={ROLE.y.ink} size={TYPE.working}>{f >= hEq ? 'H' : '?'}</Lbl>
			<Lbl x={pkx + 40} y={pky - 40} color={ROLE.x.ink} size={34}><Q s="u" ax="x" plain /> = 16.1</Lbl>
			<HandNote x={pkx - 150} y={pky - 46} at={zero} size={TYPE.handSmall} color={ROLE.y.ink}>v<Sub>y</Sub> = 0</HandNote>
			<HandNote x={pkx + 60} y={pky - 100} at={sideways} size={TYPE.handSmall} color={ROLE.x.ink}>u<Sub>x</Sub>: not in H</HandNote>
			<div style={{position: 'absolute', left: 980, top: 186, width: 250, height: 300, boxSizing: 'border-box', background: CARD, border: `3px solid ${ROLE.x.stroke}`, borderTop: `9px solid ${ROLE.x.stroke}`, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '10px 18px'}}>
				<div style={DISPLAY(TYPE.label, ROLE.x.ink, 800)}>horizontal (x)</div>
				<div style={{...DISPLAY(36, INK, 750), marginTop: 8}}><Q s="u" ax="x" /> = 16.1</div>
				<div style={{...DISPLAY(36, INK, 750), marginTop: 6}}><Q s="a" ax="x" /> = 0</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall, color: ROLE.x.ink, marginTop: 10, opacity: prog(f, sideways, 12)}}>can't lift the ball</div>
			</div>
			<div style={{position: 'absolute', left: 1250, top: 186, width: 574, height: 760, boxSizing: 'border-box', background: CARD, border: `3px solid ${ROLE.y.stroke}`, borderTop: `9px solid ${ROLE.y.stroke}`, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '10px 22px'}}>
				<div style={DISPLAY(TYPE.label, ROLE.y.ink, 800)}>vertical (y)</div>
				<div style={{display: 'flex', gap: 30, marginTop: 6}}>
					<div style={DISPLAY(36, INK, 750)}><Q s="u" ax="y" /> = 19.2</div>
					<div style={DISPLAY(36, INK, 750)}><Q s="a" ax="y" /> = <span style={{color: ROLE.a.ink}}>−9.8</span></div>
				</div>
				<div style={{...DISPLAY(36, ROLE.y.ink, 800), marginTop: 12, whiteSpace: 'normal'}}>goal: H, the height of the top</div>
				<div style={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10}}>
					<Row at={vsq} ageAt={put + 20} size={TYPE.working} oldSize={42}><Q s="v" ax="y" plain /><Sup>2</Sup> = <Q s="u" ax="y" plain /><Sup>2</Sup> + 2<Q s="a" ax="y" plain /><Q s="s" ax="y" plain /></Row>
					<div style={{position: 'relative', height: 40}}><div style={{position: 'absolute', left: 0, top: 0, fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall, color: INK_SOFT, opacity: prog(f, column, 12)}}>no t in it</div></div>
					<Row at={put} ageAt={rearr + 20} size={TYPE.working} oldSize={42}>0 = <Q s="u" ax="y" plain /><Sup>2</Sup> + 2(<span style={{color: ROLE.a.ink}}>−g</span>)H</Row>
					<Row at={rearr} ageAt={hEq} size={TYPE.working} oldSize={42}>2gH = <Q s="u" ax="y" plain /><Sup>2</Sup></Row>
					<Enter at={hEq}><Boxed color={ROLE.y.stroke} size={60} glow={Math.sin(Math.PI * Math.max(0, Math.min(1, (f - over2g) / 24)))}><span style={{color: INK}}>H = </span><MarkSpan kind="circle" at={onlyV} color={ROLE.y.stroke}><Q s="u" ax="y" plain /></MarkSpan><Sup>2</Sup><span style={{color: INK}}> ÷ 2g</span></Boxed></Enter>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall, color: ROLE.y.ink, opacity: prog(f, launchPt, 12)}}>H: height above the launch point</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: ROLE.y.ink, opacity: prog(f, onlyV, 12)}}>only u<Sub>y</Sub> appears</div>
				</div>
			</div>
		</>
	);
};

// ---------- 3. worked example (a): the maximum height ----------
const W3: World = {x0: 140, y0: 900, ppm: 10};
export const S03: React.FC = () => {
	const id = 'worked-height';
	const f = useCurrentFrame();
	const uyIs = cue(id, 'u y is'), nine = cue(id, 'nineteen point one five'), sq = cue(id, 'Squared'), divide = cue(id, 'Divide by'), twoTimes = cue(id, 'two times'), maxH = cue(id, 'maximum height'), metres = cue(id, 'metres', 2), above = cue(id, 'above the launch');
	const [pkx, pky] = ptT(W3, U, D, TUP);
	const hx = pkx + 50;
	return (
		<>
			<SceneHeading text="Find the maximum height" at={-40} size={56} />
			<div style={{position: 'absolute', left: 96, top: 176, display: 'flex', gap: 18, alignItems: 'center'}}>
				<div style={{background: ROLE.given.soft, border: `3px solid ${ROLE.given.stroke}`, borderRadius: 12, padding: '4px 18px', ...DISPLAY(34, ROLE.given.ink, 700)}}>u = 25<MS /> | θ = 50° | <Q s="a" ax="y" plain /> = −9.8<MS2 /> | <Q s="v" ax="y" plain /> = 0 at the top</div>
				<div style={{background: CARD, border: `4px solid ${ROLE.y.stroke}`, borderRadius: 12, padding: '4px 16px', ...DISPLAY(36, ROLE.y.ink, 800)}}>H = <Q s="u" ax="y" plain /><Sup>2</Sup> ÷ 2g</div>
			</div>
			<FrameSvg>
				<FlightLane mx={W3.x0} gy={W3.y0} ppm={W3.ppm} u={U} deg={D} lw={110} right={790} hideBall />
				<path d={pathT(W3, U, D, T)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} />
				<BallSvg cx={pkx} cy={pky} d={30} />
				<line x1={hx} y1={W3.y0} x2={hx} y2={pky} stroke={ROLE.y.stroke} strokeWidth={7} />
				<line x1={hx - 12} y1={W3.y0} x2={hx + 12} y2={W3.y0} stroke={ROLE.y.stroke} strokeWidth={5} />
				<line x1={hx - 12} y1={pky} x2={hx + 12} y2={pky} stroke={ROLE.y.stroke} strokeWidth={5} />
			</FrameSvg>
			<Lbl x={hx + 20} y={(W3.y0 + pky) / 2} color={ROLE.y.ink} size={TYPE.current}>{f >= metres ? '18.7 m' : 'H = ?'}</Lbl>
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 290, width: 640}}>
				<div style={{...card, borderLeft: `10px solid ${ROLE.given.stroke}`}}>
					<Title color={ROLE.given.ink}>Vertical column</Title>
					<div style={{...DISPLAY(36, ROLE.given.ink, 700), marginTop: 4}}><Q s="u" ax="y" plain /> = 25 sin 50°</div>
					<div style={{...DISPLAY(36, ROLE.given.ink, 700)}}><Q s="a" ax="y" plain /> = −9.8<MS2 /> (up positive)</div>
					<div style={{...DISPLAY(36, ROLE.given.ink, 700)}}><Q s="v" ax="y" plain /> = 0 at the top</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 820, top: 300, display: 'flex', flexDirection: 'column', gap: 22}}>
				<Row at={uyIs} ageAt={divide} size={TYPE.working} oldSize={40}><Q s="u" ax="y" /> = 25 sin 50° = {f >= nine ? <AnswerBox at={nine} tick={false}><span style={{color: ROLE.y.ink}}>19.15<MS /></span></AnswerBox> : null}</Row>
				<Row at={sq} ageAt={maxH} size={TYPE.working} oldSize={40}><Q s="u" ax="y" plain /><Sup>2</Sup> = 19.15<Sup>2</Sup> = 366.7</Row>
				<Row at={divide} size={46}>H = 366.7 ÷ <MarkSpan kind="circle" at={twoTimes} color={INK}>(2 × 9.8)</MarkSpan> = 366.7 ÷ 19.6</Row>
				<Row at={maxH} size={TYPE.working}>H = <AnswerBox at={metres}><span style={{color: ROLE.y.ink}}>18.7 m</span></AnswerBox></Row>
			</div>
			<Enter at={-30} style={{position: 'absolute', left: 1330, top: 640, width: 494}}>
				<div style={{...card, border: `3px solid ${ROLE.y.stroke}`}}>
					<Title color={ROLE.y.ink}>Plan</Title>
					<div style={{...DISPLAY(34, INK, 750), marginTop: 2}}>1. <Q s="u" ax="y" plain /> = u sin θ</div>
					<div style={DISPLAY(34, INK, 750)}>2. square it</div>
					<div style={DISPLAY(34, INK, 750)}>3. divide by 2g = 19.6</div>
				</div>
			</Enter>
			<HandTag x={1210} y={520} text="2g" at={twoTimes + 14} size={TYPE.hand} color={INK} />
			<HandTag x={830} y={622} text="above the launch point" at={above} size={TYPE.hand} color={ROLE.y.ink} />
			<Enter at={metres + 20} style={{position: 'absolute', left: 820, top: 862, width: 1004}}>
				<div style={{...DISPLAY(34, INK, 700), whiteSpace: 'normal'}}>Only <span style={{color: ROLE.y.ink}}>u<Sub>y</Sub></span> was used: <span style={{color: ROLE.x.ink}}>u<Sub>x</Sub> = 16.1<MS /></span> plays no part in the height.</div>
			</Enter>
		</>
	);
};

// ---------- 4. the flight time: two answers ----------
const W4: World = {x0: 300, y0: 930, ppm: 11};
export const S04: React.FC = () => {
	const id = 'flight-time-roots';
	const f = useCurrentFrame();
	const zero = cue(id, 'zero'), write = cue(id, 'Write s equals'), setZero = cue(id, 'set it to zero'), four = cue(id, 'four point nine'), take = cue(id, 'Take out'), answers = cue(id, 'answers'), moment = cue(id, 'moment of launch'), notOne = cue(id, 'not the one'), other = cue(id, 'The other'), tEq = cue(id, 't equals two');
	const [lx, ly] = [W4.x0, W4.y0];
	const landX = sx(W4, R);
	return (
		<>
			<SceneHeading text="How long is the ball in the air?" at={-40} size={56} />
			<Enter at={-30} style={{position: 'absolute', left: 640, top: 186, width: 580}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<div style={{...DISPLAY(TYPE.body, INK, 800), whiteSpace: 'normal'}}>Flight time T: the whole time in the air, from launch to landing.</div>
					<div style={{...DISPLAY(TYPE.working, INK, 800), marginTop: 4}}>T = ?</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 96, top: 186, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={write} ageAt={setZero + 30} size={TYPE.working} oldSize={40}><Q s="s" ax="y" /> = <Q s="u" ax="y" plain />t + ½<Q s="a" ax="y" plain />t<Sup>2</Sup></Row>
				<Row at={setZero} ageAt={take} size={TYPE.working} oldSize={40}>0 = <Q s="u" ax="y" plain />t − 4.9t<Sup>2</Sup></Row>
				<Row at={take} size={TYPE.working}>0 = t(<Q s="u" ax="y" plain /> − 4.9t)</Row>
			</div>
			<FrameSvg>
				<DrawPath d="M300,428 L240,488" at={answers} dur={10} color={INK} width={4} />
				<DrawPath d="M420,428 L640,488" at={answers + 6} dur={10} color={INK} width={4} />
				<FlightLane mx={W4.x0} gy={W4.y0} ppm={W4.ppm} u={U} deg={D} lw={110} right={1100} hideBall />
				<path d={pathT(W4, U, D, T)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} />
				<BallSvg cx={landX} cy={ly - 16} d={30} />
				{f >= zero ? <DrawPath d={`M${lx},${ly - 3} L${landX + 60},${ly - 3}`} at={zero} dur={20} color={INK} width={4} dash="12 9" /> : null}
				<Ring cx={lx} cy={ly - 10} rx={44} ry={34} at={zero + 10} />
				<Ring cx={landX} cy={ly - 10} rx={44} ry={34} at={zero + 18} />
				{f >= moment ? <DrawPath d={`M230,${600} Q200,${760} ${lx - 20},${ly - 46}`} at={moment} dur={18} color={INK} width={4} /> : null}
				{f >= other ? <DrawPath d={`M860,${700} Q980,${790} ${landX - 6},${ly - 48}`} at={other} dur={18} color={ROLE.y.stroke} width={4} /> : null}
			</FrameSvg>
			<HandTag x={landX + 70} y={ly - 36} text="back at the launch level" at={zero + 20} size={TYPE.handSmall} color={INK} />
			<Enter at={answers + 4} style={{position: 'absolute', left: 140, top: 500}}>
				<div style={{position: 'relative', display: 'inline-block', background: CARD, border: `4px solid ${INK}`, borderRadius: 14, padding: '2px 22px 8px', boxShadow: CARD_SHADOW, ...DISPLAY(TYPE.working, f >= notOne ? ROLE.slate.ink : INK)}}>
					t = 0
					{f >= notOne ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: 6, top: 0, width: 'calc(100% - 12px)', height: '100%', overflow: 'visible'}}><path d="M0,64 Q50,52 100,40" stroke={INK} strokeWidth={5} vectorEffect="non-scaling-stroke" fill="none" style={{clipPath: `inset(-50% ${100 - prog(f, notOne, 12) * 100}% -50% 0)`}} /></svg> : null}
				</div>
			</Enter>
			<HandTag x={330} y={540} text="launch" at={moment} size={TYPE.hand} color={INK} />
			<HandTag x={140} y={612} text="not this one" at={notOne + 10} size={TYPE.handSmall} color={ROLE.slate.ink} />
			<Enter at={answers + 14} style={{position: 'absolute', left: 600, top: 500}}>
				<div style={{display: 'inline-block', background: CARD, border: `3px solid ${ROLE.y.stroke}`, borderRadius: 14, padding: '2px 20px 6px', boxShadow: CARD_SHADOW, ...DISPLAY(TYPE.current, INK)}}><Q s="u" ax="y" plain /> − 4.9t = 0</div>
			</Enter>
			<Enter at={tEq - 6} style={{position: 'absolute', left: 600, top: 590}}>
				<Boxed color={ROLE.y.stroke} size={60}><span style={{color: INK}}>T = 2</span><Q s="u" ax="y" plain /><span style={{color: INK}}> ÷ g</span></Boxed>
			</Enter>
			<HandTag x={980} y={640} text="landing" at={other + 10} size={TYPE.hand} color={ROLE.y.ink} />
			<div style={{position: 'absolute', left: 1260, top: 186, width: 564, boxSizing: 'border-box', background: CARD, border: `3px solid ${ROLE.y.stroke}`, borderTop: `9px solid ${ROLE.y.stroke}`, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '10px 22px 14px'}}>
				<div style={DISPLAY(TYPE.label, ROLE.y.ink, 800)}>vertical (y)</div>
				<div style={{...DISPLAY(36, ROLE.given.ink, 750), marginTop: 6}}><Q s="u" ax="y" plain /> = 19.15<MS /></div>
				<div style={DISPLAY(36, ROLE.given.ink, 750)}><Q s="a" ax="y" plain /> = −9.8<MS2 /></div>
				<div style={{...DISPLAY(36, ROLE.given.ink, 750), opacity: prog(f, four, 12)}}>½<Q s="a" ax="y" plain /> = −4.9<MS2 /></div>
				<div style={{...DISPLAY(36, INK, 800), opacity: prog(f, zero, 12)}}><Q s="s" ax="y" plain /> = 0 at landing</div>
			</div>
			<Enter at={answers} style={{position: 'absolute', left: 1260, top: 500, width: 564}}>
				<div style={{...card, border: `4px solid ${INK}`}}>
					<div style={{...DISPLAY(TYPE.body, INK, 800), whiteSpace: 'normal'}}>The ball is at the launch level twice:</div>
					<div style={{...DISPLAY(TYPE.body, INK, 700), marginTop: 6}}>at launch, t = 0</div>
					<div style={{...DISPLAY(TYPE.body, ROLE.y.ink, 800)}}>at landing, t = T</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 1260, top: 810, display: 'flex', alignItems: 'center', gap: 14}}>
				<span style={DISPLAY(30, INK_SOFT, 700)}>done:</span>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 12, padding: '0 14px 4px', ...DISPLAY(TYPE.current, ROLE.y.ink)}}>H = 18.7 m</div>
			</div>
		</>
	);
};

// ---------- 5. why twice the time to the top: the coupled velocity graph ----------
const W5: World = {x0: 150, y0: 920, ppm: 13};
const GX = 1180, GY = 186, GW = 644, GH = 400;
export const S05: React.FC = () => {
	const id = 'twice-the-climb';
	const f = useCurrentFrame();
	const gravity = cue(id, 'Gravity takes'), every = cue(id, 'every second'), then = cue(id, 'Then it gives'), gives = cue(id, 'gives it back'), asLong = cue(id, 'just as long'), climb = cue(id, 'climb'), timeTop = cue(id, 'the time to the top is'), onePt = cue(id, 'one point nine five'), whole = cue(id, 'whole flight'), secs = cue(id, 'seconds', 2);
	const tt = f < gravity ? 0 : kf(f, [[gravity, 0], [then, TUP], [climb, T]], false);
	const s = flightAt(RUN, tt);
	const bx = sx(W5, s.x), by = sy(W5, s.y);
	const [pkx] = ptT(W5, U, D, TUP);
	const g = vgGeom(GX, GY, GW, GH, 4, -20, 20);
	const vyFn = (t: number) => UY - G_ * t, vxFn = () => UX;
	const bracketY = GY + GH + 34;
	return (
		<>
			<SceneHeading text="Why does the fall take as long as the climb?" at={-40} size={52} />
			<Readouts x={96} y={186} w={520} title="the ball, live" rows={[
				{label: 'clock t', value: fx(tt, 2), unit: 's', color: INK},
				{label: <Q s="v" ax="y" />, value: (s.vy > 0.005 ? '+' : '') + fx(Math.abs(s.vy) < 0.005 ? 0 : s.vy, 2), unit: <MS />, color: ROLE.y.ink, ring: f < then + 75 ? then : undefined},
				{label: <Q s="v" ax="x" />, value: fx(s.vx, 2), unit: <MS />, color: ROLE.x.ink},
			]} />
			<Enter at={-30} style={{position: 'absolute', left: 646, top: 186, width: 500}}>
				<div style={{...card, border: `3px solid ${ROLE.a.stroke}`}}>
					<div style={{...DISPLAY(32, ROLE.a.ink, 800), whiteSpace: 'normal'}}>gravity: −9.8<MS /> every second</div>
					<div style={{...DISPLAY(36, ROLE.y.ink, 800), marginTop: 6, opacity: prog(f, gravity, 12)}}>up: <Q s="v" ax="y" plain /> 19.15 → 0</div>
					<div style={{...DISPLAY(36, ROLE.y.ink, 800), opacity: prog(f, gives, 12)}}>down: <Q s="v" ax="y" plain /> 0 → −19.15</div>
					<div style={{...DISPLAY(34, INK, 800), whiteSpace: 'normal', marginTop: 6, opacity: prog(f, asLong, 12)}}>same change, same rate: same time</div>
				</div>
			</Enter>
			<FrameSvg>
				<FlightLane mx={W5.x0} gy={W5.y0} ppm={W5.ppm} u={U} deg={D} lw={120} right={1110} hideBall />
				<path d={pathT(W5, U, D, T)} fill="none" stroke={ROLE.v.stroke} strokeWidth={2.5} />
				{tt > 0.001 ? <path d={pathT(W5, U, D, tt)} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} /> : null}
				{f >= climb ? <DrawPath d={`M${pkx},${560} L${pkx},${W5.y0}`} at={climb} dur={18} color={INK} width={3.5} dash="10 8" /> : null}
				<BallSvg cx={bx} cy={by} d={32} />
				<VecArrow x={bx + 18} y={by} dx={s.vx * 6} dy={0} color={ROLE.x.stroke} width={5} head={16} />
				{Math.abs(s.vy) > 0.4 && tt < T - 0.01 ? <VecArrow x={bx} y={by + (s.vy > 0 ? -18 : 18)} dx={0} dy={-s.vy * 6} color={ROLE.y.stroke} width={5} head={16} /> : null}
				<VGraph x={GX} y={GY} w={GW} h={GH} tMax={4} vMin={-20} vMax={20} tTicks={[0, 1, 2, 3, 4]} vTicks={[-20, -10, 0, 10, 20]} title="velocity against time"
					series={[{fn: vxFn, t1: tt, color: ROLE.x.stroke, dot: true}, {fn: vyFn, t1: tt, color: ROLE.y.stroke, dot: true}]} />
				<Bracket x1={g.tx(0)} y1={bracketY} x2={g.tx(TUP)} y2={bracketY} color={ROLE.y.ink} at={climb} label="1.95 s" ly={bracketY + 32} size={34} />
				<Bracket x1={g.tx(TUP)} y1={bracketY} x2={g.tx(T)} y2={bracketY} color={ROLE.y.ink} at={climb + 10} label="1.95 s" ly={bracketY + 32} size={34} />
			</FrameSvg>
			<HandTag x={g.tx(0.3)} y={g.vy(4)} text="takes it away" at={gravity + 10} size={TYPE.handSmall} color={ROLE.y.ink} />
			<HandTag x={g.tx(0.15)} y={g.vy(-13)} text="gives it back" at={gives + 10} size={TYPE.handSmall} color={ROLE.y.ink} />
			<HandTag x={g.tx(1.9)} y={g.vy(UX) + 40} text="flat: never changes" at={every} size={TYPE.handSmall} color={ROLE.x.ink} />
			<HandTag x={pkx + 14} y={548} text="mirror" at={climb + 8} size={TYPE.handSmall} color={INK} />
			<div style={{position: 'absolute', left: GX, top: 700, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={timeTop} size={TYPE.current}>t<Sub>up</Sub> = 19.15 ÷ 9.8 = {f >= onePt ? <AnswerBox at={onePt} tick={false}>1.95 s</AnswerBox> : null}</Row>
				<Row at={whole} size={TYPE.current}>T = 2 × 1.954 = <AnswerBox at={secs}>3.91 s</AnswerBox></Row>
			</div>
		</>
	);
};
