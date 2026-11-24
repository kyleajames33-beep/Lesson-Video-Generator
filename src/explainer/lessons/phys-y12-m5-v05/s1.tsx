// Scenes 1 to 6: the hook (opening on last time's final frame), why the shortcuts fail, the quadratic, worked
// example (30 degrees), the negative root, the range and a check.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, BallSvg, Bracket, Chip, DISPLAY, HandNote, Ledger, MS, MS2, Q, ROLE, ReadCard, Row, StrobeBall, Sub, Sup, type World, sx} from '../../physics/projectile/board';
import {VGraph, vgGeom} from '../../physics/projectile/vgraph';
import {flightAt, fx, landT} from '../../physics/projectile/flight';
import {S14 as V04Handoff} from '../phys-y12-m5-v04/s3';
import {dur as v04Dur} from '../phys-y12-m5-v04/common';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {Ring, Stamp} from '../phys-y12-m5-v03/parts';
import {ANGLES, CASE, HC, HEAD, HEAD_SIZE, PATH, U, cue, hold} from './common';
import {AnglePath, CliffStage, cliffEdge, pathT, ptT} from './parts';

/** Last time's final frame (v04's handoff scene held on its last frame), imported read-only. */
export const V04FinalFrame: React.FC = () => <Freeze frame={v04Dur('handoff') - 1}><V04Handoff /></Freeze>;

const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;
const Boxed: React.FC<{color: string; size?: number; children: React.ReactNode}> = ({color, size = TYPE.working, children}) => (
	<div style={{display: 'inline-block', background: CARD, border: `5px solid ${color}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(size, color)}}>{children}</div>
);
const Slate: React.FC<{on: number; children: React.ReactNode}> = ({on, children}) => {
	const p = prog(useCurrentFrame(), on, 12);
	return (
		<span style={{position: 'relative', color: p > 0 ? ROLE.slate.ink : undefined}}>
			{children}
			{p > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -4, top: 0, width: 'calc(100% + 8px)', height: '100%', overflow: 'visible'}}><path d="M0,64 Q50,52 100,40" stroke={INK} strokeWidth={5} vectorEffect="non-scaling-stroke" fill="none" style={{clipPath: `inset(-50% ${100 - p * 100}% -50% 0)`}} /></svg> : null}
		</span>
	);
};

// ---------- the cliff stage of last time's handoff: launch point (380, 500), sea at 860, 12 px per metre ----------
export const MX = 380, GY = 500, SEA = 860, PPM = 12, LW = 190;
export const W: World = {x0: MX, y0: GY, ppm: PPM};
const STOP = HC - 1.2; // last time's paths stopped just above the sea

// ---------- 1. hook: which lands furthest now? ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const extra = cue(id, 'extra thirty'), c30 = cue(id, 'thirty', 4), c45 = cue(id, 'forty-five', 2), c60 = cue(id, 'sixty degrees', 2), think = cue(id, 'think');
	const h = hold(id);
	const fade = prog(f, 10, 24);
	const edge = cliffEdge(MX);
	return (
		<>
			{fade < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - fade}}><V04FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: fade}}>
				<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
				<FrameSvg>
					<CliffStage mx={MX} gy={GY} seaY={SEA} lw={LW} deg={45} />
					{ANGLES.map(d => {
						const t1 = landT(U, d, STOP);
						const [ex, ey] = ptT(W, U, d, t1);
						return <g key={d}><AnglePath w={W} u={U} deg={d} t1={t1} /><text x={ex} y={ey - 18} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56}} fill={INK}>?</text></g>;
					})}
					<Bracket x1={210} y1={GY} x2={210} y2={SEA} color={ROLE.given.ink} at={extra} />
					<Countdown start={h.startFrame} end={h.endFrame} x={1120} y={320} ringFrom={think} />
				</FrameSvg>
				<Lbl x={196} y={(GY + SEA) / 2} at={extra + 6} color={ROLE.given.ink} anchor="end" size={TYPE.current}>30 m</Lbl>
				<HandTag x={edge + 40} y={GY + 150} text="30 m more to fall" at={extra + 10} size={TYPE.handSmall} color={ROLE.given.ink} />
				<div style={{position: 'absolute', left: 120, top: 270, ...DISPLAY(36, ROLE.v.ink, 800)}}>u = 20<MS /></div>
				<Enter at={-30} style={{position: 'absolute', left: 1290, top: 176}}>
					<div style={{display: 'inline-block', background: CARD, border: `5px solid ${ROLE.v.stroke}`, borderRadius: 18, padding: '4px 30px 10px', boxShadow: CARD_SHADOW, ...DISPLAY(56, ROLE.v.ink)}}>R = u<Sup>2</Sup> sin 2θ ÷ g</div>
				</Enter>
				<Stamp x={1400} y={286} at={-30} text="level ground only?" size={30} color={ROLE.slate.ink} />
				<Enter at={-30} style={{position: 'absolute', left: 1290, top: 380, width: 534}}>
					<div style={{...card, border: `3px solid ${INK}`}}>
						<Title>Last time, level ground</Title>
						<div style={{...DISPLAY(TYPE.body, PATH[45].ink, 800), marginTop: 4}}>45° went furthest</div>
						<div style={{...DISPLAY(TYPE.body, INK, 700)}}>30° and 60° tied</div>
					</div>
				</Enter>
				<Enter at={extra - 40} style={{position: 'absolute', left: 1290, top: 600, width: 534}}>
					<div style={{...DISPLAY(TYPE.body, INK, 800), whiteSpace: 'normal'}}>From the cliff, which lands furthest?</div>
				</Enter>
				<Chip x={1290} y={690} at={c30} size={TYPE.body} color={PATH[30].ink} border={PATH[30].stroke}>30°</Chip>
				<Chip x={1420} y={690} at={c45} size={TYPE.body} color={PATH[45].ink} border={PATH[45].stroke}>45°</Chip>
				<Chip x={1550} y={690} at={c60} size={TYPE.body} color={PATH[60].ink} border={PATH[60].stroke}>60°</Chip>
				<HandTag x={1400} y={800} text="45° again?" at={c45 + 20} size={TYPE.handSmall} color={PATH[45].ink} />
			</div>
		</>
	);
};

// ---------- 2. why the shortcuts fail ----------
export const S02: React.FC = () => {
	const id = 'shortcuts-fail';
	const f = useCurrentFrame();
	const zero = cue(id, 'zero'), minus = cue(id, 'minus thirty'), each = cue(id, 'Each ball reaches'), keeps = cue(id, 'keeps falling'), soThe = cue(id, 'So the flight'), apply = cue(id, 'apply'), columns = cue(id, 'two columns');
	const c = CASE[30];
	const tt = f < each ? 0 : kf(f, [[each, 0], [keeps, c.T0], [soThe + 30, c.t]], false);
	const s = flightAt(c.run, tt);
	const [bx, by] = [sx(W, s.x), GY - s.y * PPM];
	const crossX = sx(W, c.R0);
	const landX = sx(W, c.R);
	return (
		<>
			<SceneHeading text="Why the level-ground shortcuts fail here" at={-40} size={52} />
			<FrameSvg>
				<CliffStage mx={MX} gy={GY} seaY={SEA} lw={LW} deg={30} ball={false} />
				<AnglePath w={W} u={U} deg={45} t1={landT(U, 45, STOP)} thin />
				<AnglePath w={W} u={U} deg={60} t1={landT(U, 60, STOP)} thin />
				<AnglePath w={W} u={U} deg={30} t1={c.t} />
				<BallSvg cx={bx} cy={by - (tt >= c.t - 0.001 ? 16 : 0)} d={30} />
				<Bracket x1={210} y1={GY} x2={210} y2={SEA} color={ROLE.given.ink} />
				{f >= keeps ? <g><line x1={crossX} x2={crossX} y1={GY - 22} y2={GY + 22} stroke={ROLE.x.stroke} strokeWidth={6} /><Ring cx={crossX} cy={GY} rx={34} ry={30} at={keeps} /></g> : null}
				<Bracket x1={landX + 50} y1={GY} x2={landX + 50} y2={SEA} color={ROLE.y.ink} at={keeps + 10} />
			</FrameSvg>
			<Lbl x={196} y={(GY + SEA) / 2} color={ROLE.given.ink} anchor="end" size={TYPE.current}>{f >= minus ? '−30 m' : '30 m'}</Lbl>
			<Lbl x={crossX - 24} y={GY + 40} at={keeps} color={ROLE.x.ink} anchor="end" size={34}>{fx(c.R0, 1)} m, {fx(c.T0, 2)} s</Lbl>
			<HandTag x={crossX - 300} y={240} text="last time's rule holds up to here" at={keeps + 14} size={TYPE.handSmall} color={INK} />
			<Lbl x={landX + 36} y={(GY + SEA) / 2 - 60} at={keeps + 10} color={ROLE.y.ink} anchor="end" size={34}>extra</Lbl>
			<Lbl x={landX + 36} y={(GY + SEA) / 2 - 18} at={keeps + 10} color={ROLE.y.ink} anchor="end" size={34}>fall</Lbl>
			<HandTag x={600} y={GY + 220} text="keeps falling" at={keeps + 20} size={TYPE.handSmall} color={ROLE.y.ink} />
			<Ledger x={1290} y={186} w={534} h={330} size={32} titleSize={28}
				clock={{value: 't', t: tt}}
				hor={{rows: [{content: <><Q s="u" ax="x" /> = 17.32</>, at: -30}], glow: columns}}
				ver={{rows: [{content: <><Q s="u" ax="y" /> = 10.0</>, at: -30}, {content: <><Q s="s" ax="y" /> = −30 m</>, at: minus, box: minus + 10}, {content: <span style={{fontSize: 26, color: INK_SOFT}}>up positive</span>, at: minus + 16}], glow: columns}} />
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 550, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Level-ground shortcuts</Title>
					<div style={{...DISPLAY(TYPE.current, INK, 800), marginTop: 4}}><Slate on={apply}>T = 2<Q s="u" ax="y" plain /> ÷ g</Slate></div>
					<div style={{...DISPLAY(TYPE.current, INK, 800)}}><Slate on={apply + 6}>R = u<Sup>2</Sup> sin 2θ ÷ g</Slate></div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall, color: INK, opacity: prog(f, zero, 12)}}>both came from <span style={{fontFamily: 'inherit'}}>s</span><Sub>y</Sub> = 0</div>
				</div>
			</Enter>
			<Stamp x={1560} y={790} at={apply} text={<>s<Sub>y</Sub> = 0 only</>} size={28} color={ROLE.slate.ink} />
			<HandTag x={1290} y={900} text="not zero: −30 m" at={apply + 16} size={TYPE.hand} color={ROLE.slate.ink} />
		</>
	);
};

// ---------- 3. the vertical equation becomes a quadratic ----------
const WT: World = {x0: 1010, y0: 690, ppm: 8};
export const S03: React.FC = () => {
	const id = 'quadratic';
	const f = useCurrentFrame();
	const find = cue(id, 'find the time'), carry = cue(id, 'carry it across'), use = cue(id, 'Use s equals'), minus = cue(id, 'minus thirty'), gives = cue(id, 'That gives'), rearr = cue(id, 'Rearrange'), quad = cue(id, 'quadratic in t'), anEq = cue(id, 'An equation with'), solve = cue(id, 'solve it');
	const g = (c: string): React.CSSProperties => ({...DISPLAY(36, c, 750), marginTop: 2});
	return (
		<>
			<SceneHeading text="Find where the ball lands" at={-40} size={56} />
			<FrameSvg>
				<CliffStage mx={WT.x0} gy={WT.y0} seaY={WT.y0 + HC * WT.ppm} lw={120} deg={30} leftX={700} rightX={1824} edgeOff={40} />
				<path d={pathT(WT, U, 30, CASE[30].t)} fill="none" stroke={PATH[30].stroke} strokeWidth={4} />
				<line x1={730} x2={730} y1={WT.y0} y2={WT.y0 + HC * WT.ppm} stroke={ROLE.given.stroke} strokeWidth={6} />
			</FrameSvg>
			<Lbl x={750} y={WT.y0 + 120} color={ROLE.given.ink} size={TYPE.current}>−30 m</Lbl>
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 186, width: 560}}>
				<div style={{...card, borderLeft: `10px solid ${ROLE.given.stroke}`}}>
					<Title color={ROLE.given.ink}>Givens (up positive)</Title>
					<div style={g(ROLE.y.ink)}><Q s="s" ax="y" plain /> = −30 m</div>
					<div style={g(ROLE.y.ink)}><Q s="a" ax="y" plain /> = −9.8<MS2 /></div>
					<div style={g(ROLE.y.ink)}><Q s="u" ax="y" plain /> = u sin θ</div>
					<div style={g(ROLE.x.ink)}><Q s="u" ax="x" plain /> = u cos θ</div>
					<div style={g(ROLE.given.ink)}>u = 20<MS /></div>
				</div>
			</Enter>
			<HandTag x={400} y={262} text="the sea is below: minus" at={minus} size={30} color={ROLE.y.ink} />
			<Enter at={find - 6} style={{position: 'absolute', left: 96, top: 590, width: 590}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>The method doesn't change</Title>
					<div style={{...DISPLAY(34, ROLE.y.ink, 800), marginTop: 4}}>1. vertical: find t</div>
					<div style={{...DISPLAY(34, ROLE.x.ink, 800), opacity: prog(f, carry, 12)}}>2. horizontal: carry t across</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 700, top: 190, display: 'flex', flexDirection: 'column', gap: 22}}>
				<Enter at={use - 4}><Boxed color={ROLE.y.stroke} size={TYPE.current}><span style={{color: INK}}><Q s="s" ax="y" plain /> = <Q s="u" ax="y" plain />t + ½<Q s="a" ax="y" plain />t<Sup>2</Sup></span></Boxed></Enter>
				<Row at={gives} ageAt={rearr + 20} size={TYPE.working} oldSize={40}>−30 = <Q s="u" ax="y" plain />t − 4.9t<Sup>2</Sup></Row>
				<Row at={rearr} size={TYPE.working}><MarkSpan kind="underline" at={solve + 10} color={ROLE.a.stroke}>4.9</MarkSpan>t<Sup>2</Sup> <MarkSpan kind="underline" at={solve + 16} color={ROLE.y.stroke}>− <Q s="u" ax="y" plain /></MarkSpan>t <MarkSpan kind="underline" at={solve + 22} color={ROLE.given.stroke}>− 30</MarkSpan> = 0</Row>
			</div>
			<HandTag x={710} y={520} text="t²: two answers" at={anEq} size={TYPE.hand} color={INK} />
			<Enter at={solve} style={{position: 'absolute', left: 1380, top: 400, width: 444}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '6px 14px 8px', ...DISPLAY(32, INK, 700)}}>t = (−b ± √(b<Sup>2</Sup> − 4ac)) ÷ 2a</div>
				<div style={{display: 'flex', gap: 16, marginTop: 12, ...DISPLAY(34, INK, 800)}}>
					<span style={{color: ROLE.a.ink}}>a = 4.9</span><span style={{color: ROLE.y.ink}}>b = −<Q s="u" ax="y" plain /></span><span style={{color: ROLE.given.ink}}>c = −30</span>
				</div>
			</Enter>
			<Enter at={quad} style={{position: 'absolute', left: 1380, top: 186, width: 444}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<div style={{...DISPLAY(34, INK, 800), whiteSpace: 'normal'}}>A quadratic: an equation with a t<Sup>2</Sup> term.</div>
					<div style={{...DISPLAY(32, INK, 700), whiteSpace: 'normal', marginTop: 6, opacity: prog(f, anEq, 12)}}>It can have two answers (roots).</div>
				</div>
			</Enter>
		</>
	);
};

// ---------- 4. worked example: thirty degrees, the time ----------
const GX = 1260, GY4 = 186, GW = 564, GH = 640;
export const S04: React.FC = () => {
	const id = 'worked-thirty-time';
	const f = useCurrentFrame();
	const uyIs = cue(id, 'u y is'), uxIs = cue(id, 'u x is'), soQ = cue(id, 'So the quadratic'), formula = cue(id, 'The formula gives'), six = cue(id, 'six hundred'), tw6 = cue(id, 'twenty-six point'), soT = cue(id, 'So t is'), plus = cue(id, 'three point seven'), minusR = cue(id, 'minus one point'), secs2 = cue(id, 'seconds', 2);
	const c = CASE[30];
	const g = vgGeom(GX, GY4, GW, GH, 4, -35, 10, -2);
	const sFn = (t: number) => c.uy * t - 4.9 * t * t;
	return (
		<>
			<SceneHeading text="Thirty degrees: when does it land?" at={-40} size={54} />
			<div style={{position: 'absolute', left: 96, top: 176, display: 'flex', gap: 18, alignItems: 'center'}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '4px 16px 6px', ...DISPLAY(32, INK, 700)}}>t = (−b ± √(b<Sup>2</Sup> − 4ac)) ÷ 2a</div>
				<div style={DISPLAY(32, INK, 800)}><span style={{color: ROLE.a.ink}}>a = 4.9</span>, <span style={{color: ROLE.y.ink}}>b = −<Q s="u" ax="y" plain /></span>, <span style={{color: ROLE.given.ink}}>c = −30</span></div>
			</div>
			<div style={{position: 'absolute', left: 96, top: 250, width: 1100, ...card, borderLeft: `10px solid ${ROLE.given.stroke}`, padding: '8px 24px 10px'}}>
				<div style={{...DISPLAY(36, ROLE.y.ink, 750), transform: `scale(${1 + 0.04 * Math.sin(Math.PI * prog(f, uyIs, 18))})`, transformOrigin: 'left center'}}><Q s="u" ax="y" plain /> = 20 sin 30° = 10.0<MS /></div>
				<div style={{...DISPLAY(36, ROLE.x.ink, 750), transform: `scale(${1 + 0.04 * Math.sin(Math.PI * prog(f, uxIs, 18))})`, transformOrigin: 'left center'}}><Q s="u" ax="x" plain /> = 20 cos 30° = 17.32<MS /></div>
			</div>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Row at={soQ} ageAt={formula} size={TYPE.working} oldSize={44}>4.9t<Sup>2</Sup> − 10.0t − 30 = 0</Row>
				<Row at={formula} ageAt={six} size={48} oldSize={44}>t = (10.0 ± √(10.0<Sup>2</Sup> + 4 × 4.9 × 30)) ÷ 9.8</Row>
				<Row at={six} ageAt={soT} size={TYPE.working} oldSize={44}>= (10.0 ± √688) ÷ 9.8 {f >= tw6 ? <span style={{color: INK_SOFT, fontSize: '0.8em'}}>  √688 = 26.23</span> : null}</Row>
			</div>
			<FrameSvg>
				<VGraph x={GX} y={GY4} w={GW} h={GH} tMin={-2} tMax={4} vMin={-35} vMax={10} tTicks={[-2, -1, 0, 1, 2, 3, 4]} vTicks={[-30, -20, -10, 0, 10]} vLabel="height (m)"
					series={[{fn: () => -HC, t0: -2, t1: 4, color: ROLE.given.stroke, width: 4, dash: '12 9'}, {fn: sFn, t0: -2, t1: 4, color: ROLE.y.stroke}]} />
				<Ring cx={g.tx(c.t)} cy={g.vy(-HC)} rx={26} ry={26} at={plus} />
				<Ring cx={g.tx(c.tNeg)} cy={g.vy(-HC)} rx={26} ry={26} at={minusR} />
			</FrameSvg>
			<Lbl x={g.tx(0.2)} y={g.vy(-HC) + 30} color={ROLE.given.ink} size={30}>the sea: −30 m</Lbl>
			<Lbl x={g.tx(c.t) - 8} y={g.vy(-HC) - 44} at={plus} color={INK} size={30} anchor="end">3.70</Lbl>
			<Lbl x={g.tx(c.tNeg) + 8} y={g.vy(-HC) - 44} at={minusR} color={ROLE.slate.ink} size={30}>−1.66</Lbl>
			<Enter at={soT} style={{position: 'absolute', left: 96, top: 712}}>
				<div style={{display: 'inline-block', background: CARD, border: `3px solid ${INK}`, borderRadius: 14, padding: '2px 18px 6px', boxShadow: CARD_SHADOW, ...DISPLAY(TYPE.current, INK)}}>t = 36.23 ÷ 9.8 = {f >= plus ? <AnswerBox at={plus} tick={false}>{fx(c.t, 3)} s</AnswerBox> : '?'}</div>
			</Enter>
			<Enter at={soT + 10} style={{position: 'absolute', left: 96, top: 790}}>
				<div style={{display: 'inline-block', background: CARD, border: `3px solid ${INK}`, borderRadius: 14, padding: '2px 18px 6px', boxShadow: CARD_SHADOW, ...DISPLAY(TYPE.current, INK)}}>t = −16.23 ÷ 9.8 = {f >= minusR ? `${fx(c.tNeg, 3)} s` : '?'}</div>
			</Enter>
			<HandTag x={1290} y={918} text="two crossings, two roots" at={secs2} size={TYPE.handSmall} color={INK} />
			<Enter at={formula + 20} style={{position: 'absolute', left: 96, top: 880, width: 1100}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '4px 16px 6px', ...DISPLAY(32, INK, 700)}}>same as t = (u sin θ + √(u<Sup>2</Sup> sin<Sup>2</Sup>θ + 2gh)) ÷ g</div>
			</Enter>
		</>
	);
};

// ---------- 5. the negative root ----------
const M5 = 560;
const TLX = (t: number) => 230 + (t + 2) * 160;
const W5: World = {x0: M5, y0: GY, ppm: PPM};
export const S05: React.FC = () => {
	const id = 'negative-root';
	const f = useCurrentFrame();
	const ran = cue(id, 'If you ran'), same = cue(id, 'same curve'), one66 = cue(id, 'one point six six'), never = cue(id, 'never happened'), reject = cue(id, 'reject'), tof = cue(id, 'The time of flight'), secs = cue(id, 'seconds', 2);
	const c = CASE[30];
	const ghostOut = 1 - prog(f, secs - 20, 16);
	const [gx, gy] = ptT(W5, U, 30, c.tNeg);
	return (
		<>
			<SceneHeading text="What does the negative root mean?" at={-40} size={54} />
			<FrameSvg>
				<line x1={TLX(-2)} x2={TLX(4.2)} y1={300} y2={300} stroke={INK} strokeWidth={4} />
				{[-2, -1, 0, 1, 2, 3, 4].map(t => <g key={t}><line x1={TLX(t)} x2={TLX(t)} y1={292} y2={308} stroke={INK} strokeWidth={3} /><text x={TLX(t)} y={340} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 28}} fill={INK}>{t}</text></g>)}
				<text x={TLX(4.2) + 12} y={308} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 28}} fill={INK_SOFT}>t (s)</text>
				<circle cx={TLX(0)} cy={300} r={12} fill={INK} />
				<circle cx={TLX(c.t)} cy={300} r={13} fill={PATH[30].stroke} stroke={CARD} strokeWidth={3} />
				{f >= one66 ? <circle cx={TLX(c.tNeg)} cy={300} r={13} fill={ROLE.slate.stroke} stroke={CARD} strokeWidth={3} opacity={prog(f, one66, 12)} /> : null}
				{f >= one66 ? <rect x={TLX(-2)} y={286} width={TLX(0) - TLX(-2)} height={28} fill={ROLE.slate.stroke} opacity={0.18 * prog(f, one66, 12)} /> : null}
			</FrameSvg>
			<Lbl x={TLX(0)} y={250} color={INK} anchor="middle" size={30}>launch</Lbl>
			<Lbl x={TLX(c.t)} y={250} color={PATH[30].ink} anchor="middle" size={30}>lands: 3.70 s</Lbl>
			<Lbl x={TLX(c.tNeg)} y={250} at={one66} color={ROLE.slate.ink} anchor="middle" size={30}>−1.66 s: before launch</Lbl>
			<FrameSvg>
				<CliffStage mx={M5} gy={GY} seaY={SEA} lw={LW} deg={30} rightX={1350} seaLeft />
				<AnglePath w={W5} u={U} deg={30} t1={c.t} />
				<BallSvg cx={sx(W5, c.R)} cy={SEA - 16} d={30} />
				{f >= ran && ghostOut > 0 ? (
					<g opacity={ghostOut}>
						<DrawPath d={pathT(W5, U, 30, 0, c.tNeg)} at={ran} dur={40} color={INK_SOFT} width={4.5} dash="12 9" />
						{f >= ran + 36 ? <StrobeBall cx={gx} cy={gy - 15} d={30} /> : null}
					</g>
				) : null}
			</FrameSvg>
			{ghostOut > 0 ? <Lbl x={gx + 44} y={gy - 26} at={one66} color={INK} size={TYPE.current}>t = −1.66 s</Lbl> : null}
			{ghostOut > 0 ? <HandTag x={110} y={440} text="the same parabola, before launch: not real" at={same} out={secs - 20} size={30} color={INK} /> : null}
			{ghostOut > 0 ? <HandTag x={700} y={770} text="before launch: never happened" at={never} out={secs - 20} size={TYPE.handSmall} color={ROLE.slate.ink} /> : null}
			<div style={{position: 'absolute', left: 1390, top: 190, display: 'flex', flexDirection: 'column', gap: 16}}>
				<div style={{display: 'inline-block', background: CARD, border: `${f >= tof ? 5 : 3}px solid ${INK}`, borderRadius: 14, padding: '2px 18px 6px', boxShadow: CARD_SHADOW, ...DISPLAY(TYPE.current, INK)}}>t = {fx(c.t, 3)} s</div>
				<div style={{display: 'inline-block', background: CARD, border: `3px solid ${ROLE.slate.stroke}`, borderRadius: 14, padding: '2px 18px 6px', boxShadow: CARD_SHADOW, ...DISPLAY(TYPE.current, INK)}}><Slate on={reject}>t = {fx(c.tNeg, 3)} s</Slate></div>
			</div>
			<HandTag x={1390} y={390} text="keep the positive one" at={reject + 20} size={TYPE.handSmall} color={INK} />
			<ReadCard x={1390} y={460} w={434} label="time of flight" value={f >= tof ? 't = 3.70' : 't = ?'} unit={f >= tof ? 's' : undefined} pulse={secs} border={INK} />
			<Enter at={secs} style={{position: 'absolute', left: 1390, top: 620}}>
				<div style={DISPLAY(TYPE.working, INK)}><AnswerBox at={secs}>3.70 s</AnswerBox></div>
			</Enter>
			<Lbl x={sx(W5, c.R) - 40} y={SEA - 50} color={PATH[30].ink} size={30} anchor="end">t = +3.70 s</Lbl>
		</>
	);
};

// ---------- 6. the range, and a check ----------
export const S06: React.FC = () => {
	const id = 'range-and-check';
	const f = useCurrentFrame();
	const carry = cue(id, 'carry'), seventeen = cue(id, 'seventeen'), sixty4 = cue(id, 'sixty-four'), metres = cue(id, 'metres'), check = cue(id, 'quick check'), rises = cue(id, 'rises'), fiveOne = cue(id, 'five point one'), falls = cue(id, 'falls'), twoSix = cue(id, 'two point six eight'), together = cue(id, 'Together'), again = cue(id, 'again');
	const c = CASE[30];
	const tUp = c.uy / 9.8;
	const [pkx, pky] = ptT(W, U, 30, tUp);
	const landX = sx(W, c.R);
	const split = prog(f, rises, 14);
	const fallH = (c.uy * c.uy) / 19.6 + HC;
	const tDown = Math.sqrt((2 * fallH) / 9.8);
	return (
		<>
			<SceneHeading text="The range, and a check" at={-40} size={54} />
			<FrameSvg>
				<CliffStage mx={MX} gy={GY} seaY={SEA} lw={LW} deg={30} ball={false} />
				<AnglePath w={W} u={U} deg={30} t1={c.t} />
				{split > 0 ? <path d={pathT(W, U, 30, tUp)} fill="none" stroke={ROLE.y.stroke} strokeWidth={8} opacity={split} /> : null}
				<BallSvg cx={landX} cy={SEA - 16} d={30} />
				<line x1={MX} x2={MX} y1={GY} y2={SEA} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 8" />
				<Bracket x1={MX} y1={SEA + 32} x2={landX} y2={SEA + 32} color={ROLE.x.ink} at={metres} />
				<Bracket x1={pkx + 50} y1={GY} x2={pkx + 50} y2={pky} color={ROLE.y.ink} at={fiveOne} />
				<Bracket x1={landX + 30} y1={pky} x2={landX + 30} y2={SEA} color={ROLE.v.ink} at={falls} />
				<line x1={pkx} x2={landX + 30} y1={pky} y2={pky} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 8" opacity={prog(f, falls, 12)} />
			</FrameSvg>
			<Lbl x={(MX + landX) / 2} y={SEA + 70} at={metres} color={ROLE.x.ink} anchor="middle" size={TYPE.current}>64.0 m</Lbl>
			<Lbl x={pkx + 70} y={pky - 34} at={fiveOne} color={ROLE.y.ink} size={30}>5.10 m above the top</Lbl>
			<Lbl x={landX + 18} y={(pky + SEA) / 2 - 60} at={falls} color={ROLE.v.ink} size={30} anchor="end">35.1 m</Lbl>
			<HandTag x={440} y={420} text="up 1.02 s" at={rises + 10} size={TYPE.handSmall} color={ROLE.y.ink} />
			<HandTag x={landX - 115} y={SEA - 130} text="down 2.68 s" at={twoSix} size={TYPE.handSmall} color={ROLE.v.ink} anchor="end" />
			<Enter at={check - 4} style={{position: 'absolute', left: 96, top: 176, width: 700}}>
				<div style={{...card, border: `3px solid ${INK}`, padding: '8px 22px 10px'}}>
					<Title>Quick check: up, then down</Title>
					<div style={{...DISPLAY(34, ROLE.y.ink, 750), opacity: prog(f, rises, 12)}}>up: {fx(tUp, 2)} s, to {fx((c.uy * c.uy) / 19.6, 2)} m above the top</div>
					<div style={{...DISPLAY(34, ROLE.v.ink, 750), opacity: prog(f, falls, 12)}}>down {fx(fallH, 1)} m: √(2 × {fx(fallH, 1)} ÷ 9.8) = {fx(tDown, 2)} s</div>
					<div style={{...DISPLAY(TYPE.current, INK, 800), opacity: prog(f, together, 12)}}><MarkSpan kind="circle" at={again} color={INK}>{fx(tUp, 2)} + {fx(tDown, 2)} = {fx(tUp + tDown, 2)} s ✓</MarkSpan></div>
				</div>
			</Enter>
			<HandTag x={820} y={330} text="same answer, second route" at={again} size={30} color={INK} />
			<Ledger x={1290} y={186} w={534} h={330} size={32} titleSize={28}
				clock={{value: `${fx(c.t, 3)} s`, label: 'flight time t', t: c.t, pulse: carry}}
				carry={{at: carry, into: 'x'}}
				hor={{rows: [{content: <><Q s="u" ax="x" /> = 17.32</>, at: -30}, {content: <>R = <Q s="u" ax="x" plain />t</>, at: carry + 10, box: metres}]}}
				ver={{rows: [{content: <><Q s="u" ax="y" /> = 10.0</>, at: -30}, {content: <>t = 3.697 s</>, at: -30}]}} />
			<div style={{position: 'absolute', left: 1290, top: 560, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={seventeen} size={TYPE.current}>R = 17.32 × 3.697</Row>
				<Row at={sixty4 - 6} size={TYPE.working}>= <AnswerBox at={metres}><span style={{color: ROLE.x.ink}}>64.0 m</span></AnswerBox></Row>
			</div>
			<HandNote x={1300} y={760} at={metres + 10} size={TYPE.hand} color={ROLE.x.ink}>u<Sub>x</Sub> × t</HandNote>
		</>
	);
};
