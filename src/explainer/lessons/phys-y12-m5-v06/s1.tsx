// Scenes 1 to 5: the hook (opening on last time's final frame), the reveal, the set-up, the time to the wall
// and the height at the wall.
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AngleArc, AnswerBox, BallSvg, Bracket, Chip, DISPLAY, HandNote, Ledger, MS, MS2, Q, ROLE, ReadCard, Row, Sub, Sup, VecArrow, type World} from '../../physics/projectile/board';
import {clockAt, flightAt, fx} from '../../physics/projectile/flight';
import {Tri} from '../phys-y12-m5-v02/parts';
import {Ring} from '../phys-y12-m5-v03/parts';
import {V05FinalFrame} from '../phys-y12-m5-v05/s3';
import {C0, C35, DEG, HEAD, HEAD_SIZE, PEAK, RUN0, RUN35, T35, U, cue, hold} from './common';
import {BALL_D, GY, Impact, LW, Lbl, MX, PPM, Strobes, TermBars, W, WallStage, pathU, ptU, seaY, wallTop, wallX} from './parts';

export const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
export const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;
export const Boxed: React.FC<{color: string; size?: number; children: React.ReactNode}> = ({color, size = TYPE.working, children}) => (
	<div style={{display: 'inline-block', background: CARD, border: `5px solid ${color}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(size, color)}}>{children}</div>
);
/** Navy givens strip (one line). */
export const Givens: React.FC<{x?: number; y?: number; w?: number; size?: number; at?: number; children: React.ReactNode}> = ({x = 96, y = 176, w = 1150, size = 30, at = -30, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '4px 18px 6px', ...DISPLAY(size, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);

const WX = wallX(W), WT = wallTop(W);
/** The stage brackets every full-stage scene shares: 15 m cliff, 25 m to the wall, 8 m wall. */
export const StageBrackets: React.FC<{w?: World; cliffAt?: number; distAt?: number; wallAt?: number; sub?: boolean; wall?: boolean}> = ({w = W, cliffAt = -30, distAt = -30, wallAt = -30, sub = true, wall = true}) => {
	const wx = wallX(w), sea = seaY(w), wt = wallTop(w);
	return (
		<>
			<FrameSvg>
				<Bracket x1={w.x0 + 30} y1={w.y0} x2={w.x0 + 30} y2={sea} color={ROLE.given.ink} at={cliffAt} />
				<Bracket x1={w.x0} y1={sea + 34} x2={wx} y2={sea + 34} color={ROLE.x.ink} at={distAt} />
				{wall ? <Bracket x1={wx + 60} y1={wt} x2={wx + 60} y2={sea} color={ROLE.given.ink} at={wallAt} /> : null}
			</FrameSvg>
			<Lbl x={w.x0 + 46} y={(w.y0 + sea) / 2 + 40} at={cliffAt} color={ROLE.given.ink} size={TYPE.current}>15 m</Lbl>
			<Lbl x={(w.x0 + wx) / 2} y={sea + 72} at={distAt} color={ROLE.x.ink} anchor="middle" size={TYPE.current}>25 m</Lbl>
			{wall ? <Lbl x={wx + 76} y={(wt + sea) / 2 - 8} at={wallAt} color={ROLE.given.ink} size={TYPE.current}>8 m</Lbl> : null}
			{sub && wall ? <Lbl x={wx + 76} y={(wt + sea) / 2 + 34} at={wallAt} color={ROLE.given.ink} size={28}>(from sea level)</Lbl> : null}
		</>
	);
};

// ---------- 1. hook: does it clear? ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const something = cue(id, 'something'), fifteen = cue(id, 'fifteen'), eighteen = cue(id, 'eighteen'), horiz = cue(id, 'horizontal'), tw5 = cue(id, 'Twenty-five'), eight = cue(id, 'eight metres'), lower = cue(id, 'lower'), sideways = cue(id, 'straight sideways'), predict = cue(id, 'prediction');
	const h = hold(id);
	const fade = prog(f, 10, 24);
	const deg = kf(f, [[horiz - 4, 30], [horiz + 22, DEG]]);
	const wp = prog(f, something + 6, 30);
	const a = (DEG * Math.PI) / 180, L = U * 9;
	return (
		<>
			{fade < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - fade}}><V05FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: fade}}>
				<SceneHeading text="Does it clear the wall?" at={-60} size={HEAD_SIZE + 4} />
				<FrameSvg>
					<WallStage w={W} deg={deg} wallP={wp} />
					{f >= horiz + 22 ? <AngleArc px={MX} py={GY} r={74} deg={DEG} label="35°" refLen={120} /> : null}
					<VecArrow x={MX} y={GY} dx={L * Math.cos(a)} dy={-L * Math.sin(a)} color={ROLE.v.stroke} width={7} at={horiz + 22} label={<>u = 18<MS /></>} lx={MX + 70} ly={GY - 150} />
					<VecArrow x={MX} y={GY} dx={L} dy={0} color={ROLE.v.stroke} width={6} dash="14 10" at={sideways} label={<>18<MS /> sideways</>} lx={MX + 70} ly={GY + 44} size={30} />
					<Ring cx={WX} cy={WT} rx={44} ry={26} at={lower + 12} />
					<Countdown start={h.startFrame} end={h.endFrame} x={1110} y={330} ringFrom={predict} />
				</FrameSvg>
				<StageBrackets cliffAt={fifteen} distAt={tw5 + 20} wallAt={eight} />
				<HandTag x={470} y={690} text="lower than the cliff..." at={lower} size={TYPE.handSmall} color={ROLE.given.ink} />
				<div style={{position: 'absolute', left: 110, top: 186, ...DISPLAY(36, ROLE.v.ink, 800), opacity: prog(f, eighteen, 12)}}>u = 18<MS /><span style={{opacity: prog(f, horiz, 12)}}>, θ = 35°</span></div>
				<Ledger x={1290} y={186} w={534} h={250} size={32} titleSize={28}
					clock={{value: 't', t: 0.25}}
					hor={{rows: [{content: <><Q s="u" ax="x" /> = ?</>, at: -30}]}}
					ver={{rows: [{content: <><Q s="u" ax="y" /> = ?</>, at: -30}]}} />
				<div style={{position: 'absolute', left: 1290, top: 452, width: 534, fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall, color: INK, whiteSpace: 'normal'}}>this time: x known, so find t first</div>
				<Enter at={something} style={{position: 'absolute', left: 1290, top: 520, width: 534}}>
					<div style={{...DISPLAY(TYPE.body, INK, 800), whiteSpace: 'normal'}}>Which launch clears the wall?</div>
				</Enter>
				{['both clear', 'only the 35° launch', 'only the sideways launch', 'neither'].map((t, i) => <Chip key={t} x={1290} y={626 + i * 66} at={predict + i * 4} size={34}>{t}</Chip>)}
			</div>
		</>
	);
};

// ---------- 2. reveal: one moment matters ----------
export const S02: React.FC = () => {
	const id = 'reveal';
	const f = useCurrentFrame();
	const over = cue(id, 'over'), sideways = cue(id, 'sideways launch'), hit = cue(id, 'wall'), oneM = cue(id, 'one moment'), moment2 = cue(id, 'moment', 2), clearance = cue(id, 'clearance'), called = cue(id, 'called'), finding = cue(id, 'Finding');
	const s35 = over - Math.round(C35.t * 30);
	const sS = hit - Math.round(C0.t * 30);
	const c35 = clockAt(f, s35, T35), c0 = clockAt(f, sS, C0.t);
	const deg = kf(f, [[sideways, DEG], [sideways + 22, 0]]);
	const st35 = flightAt(RUN35, c35), st0 = flightAt(RUN0, c0);
	const b35: [number, number] = [MX + st35.x * PPM, GY - st35.y * PPM - (c35 >= T35 - 0.001 ? BALL_D / 2 : 0)];
	const b0: [number, number] = [Math.min(MX + st0.x * PPM, WX - 13 - BALL_D / 2), GY - st0.y * PPM];
	const [iwx, iwy] = ptU(W, DEG, C35.t);
	const showMuzzleBall = f < s35 || (f >= sideways && f < sS);
	const flying0 = f >= sideways;
	return (
		<>
			<SceneHeading text="Does it clear the wall?" at={-60} size={HEAD_SIZE + 4} out={finding - 12} />
			<SceneHeading text={HEAD} at={finding} size={HEAD_SIZE} />
			<FrameSvg>
				<WallStage w={W} deg={deg} ball={showMuzzleBall} />
				{c35 > 0.001 ? <path d={pathU(W, DEG, c35)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} strokeLinecap="round" /> : null}
				<Strobes w={W} deg={DEG} upTo={c35} />
				{c0 > 0.001 ? <path d={pathU(W, 0, c0)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} strokeDasharray="14 10" strokeLinecap="round" /> : null}
				<Strobes w={W} deg={0} upTo={Math.min(c0, C0.t - 0.05)} />
				{f >= s35 ? <BallSvg cx={b35[0]} cy={b35[1]} d={BALL_D} /> : null}
				{f >= sS ? <BallSvg cx={b0[0]} cy={b0[1]} d={BALL_D} /> : null}
				<Impact x={WX - 13} y={b0[1]} at={hit} />
				{f >= oneM ? <DrawPath d={`M${WX},${300} L${WX},${WT}`} at={oneM} dur={18} color={INK} width={3} dash="10 8" /> : null}
				{f >= oneM ? <BallSvg cx={iwx} cy={iwy} d={BALL_D + 6} /> : null}
				<Ring cx={iwx} cy={iwy} rx={30} ry={28} at={oneM + 10} />
				<Bracket x1={WX} y1={WT} x2={WX} y2={iwy + 20} color={INK} at={clearance} />
			</FrameSvg>
			<StageBrackets />
			<Lbl x={WX - 22} y={(WT + iwy) / 2 + 10} at={clearance} color={INK} anchor="end" size={36}>clearance = ?</Lbl>
			<HandTag x={800} y={410} text="this moment only" at={moment2} size={TYPE.handSmall} color={INK} />
			<Chip x={640} y={316} at={over} size={34}>clears ✓</Chip>
			<div style={{position: 'absolute', left: 110, top: 186, ...DISPLAY(36, ROLE.v.ink, 800)}}>u = 18<MS /> {flying0 ? <>sideways</> : <>, θ = 35°</>}</div>
			<ReadCard x={1290} y={186} w={534} label={flying0 ? 'flight clock: sideways launch' : 'flight clock: 35° launch'} value={`t = ${fx(flying0 ? c0 : c35, 2)}`} unit="s" />
			<Enter at={over} style={{position: 'absolute', left: 1290, top: 350, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Outcomes</Title>
					<div style={{...DISPLAY(TYPE.body, INK, 800), marginTop: 4}}>35° launch: clears ✓</div>
					<div style={{...DISPLAY(TYPE.body, INK, 800), opacity: prog(f, hit, 12)}}>sideways: hits the wall ✗</div>
				</div>
			</Enter>
			<Enter at={called - 10} style={{position: 'absolute', left: 1290, top: 580, width: 534}}>
				<div style={{...card, borderLeft: `10px solid ${INK}`}}>
					<div style={{...DISPLAY(TYPE.current, INK, 800)}}>clearance</div>
					<div style={{...DISPLAY(34, INK, 700), whiteSpace: 'normal', marginTop: 4}}>how far above the wall top the ball passes</div>
				</div>
			</Enter>
			<HandTag x={1290} y={830} text="lower wall ≠ guaranteed" at={oneM - 60} size={TYPE.handSmall} color={INK} />
		</>
	);
};

// ---------- 3. set up: one origin, two components ----------
const WS: World = {x0: 230, y0: 470, ppm: 12};
export const S03: React.FC = () => {
	const id = 'set-up';
	const f = useCurrentFrame();
	const origin = cue(id, 'origin'), positive = cue(id, 'positive'), minus = cue(id, 'minus nine'), fifteen = cue(id, 'fifteen'), below = cue(id, 'below'), wallTopC = cue(id, 'wall top'), sizeOf = cue(id, 'size of'), resolve = cue(id, 'resolve it'), uxIs = cue(id, 'u x is'), uyIs = cue(id, 'u y is'), unrounded = cue(id, 'unrounded'), horiz = cue(id, 'horizontally');
	const sw = wallX(WS), ss = seaY(WS), stp = wallTop(WS);
	const sea = (ROLE.y.ink);
	const r = (c: string): React.CSSProperties => ({...DISPLAY(32, c, 750), marginTop: 2});
	const v = (at: number, val: React.ReactNode) => (f >= at ? val : <span style={{color: INK_SOFT}}>?</span>);
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 168}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: `3px solid ${INK}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(36, INK, 800)}}>Does the ball clear the wall? By how much?</div>
			</Enter>
			<Givens y={238} w={1180} size={30}>u = 18<MS /> at 35° | cliff 15 m | wall 25 m away, 8 m tall from the sea</Givens>
			<FrameSvg>
				<WallStage w={WS} deg={DEG} lw={120} rightX={860} />
				<path d={pathU(WS, DEG, T35)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} />
				<Bracket x1={WS.x0 + 26} y1={WS.y0} x2={WS.x0 + 26} y2={ss} color={ROLE.given.ink} />
				<Bracket x1={WS.x0} y1={ss + 26} x2={sw} y2={ss + 26} color={ROLE.x.ink} />
				<Bracket x1={sw + 32} y1={stp} x2={sw + 32} y2={ss} color={ROLE.given.ink} />
				<VecArrow x={WS.x0} y={WS.y0} dx={0} dy={-120} color={ROLE.y.stroke} width={6} at={origin + 10} label="+y" lx={WS.x0 - 64} ly={WS.y0 - 120} />
				<VecArrow x={WS.x0} y={WS.y0} dx={150} dy={0} color={ROLE.x.stroke} width={6} at={origin + 16} label="+x" lx={WS.x0 + 150} ly={WS.y0 + 30} />
				{f >= origin ? <circle cx={WS.x0} cy={WS.y0} r={9} fill={INK} opacity={prog(f, origin, 10)} /> : null}
				<Ring cx={WS.x0} cy={WS.y0 - 70} rx={40} ry={78} at={positive} color={ROLE.y.stroke} />
				<Tri x0={940} y0={660} k={20} u={U} deg={DEG} sidesAt={resolve} arcLabel="35°" />
			</FrameSvg>
			<Lbl x={WS.x0 + 40} y={(WS.y0 + ss) / 2 + 30} color={ROLE.given.ink} size={30}>15 m</Lbl>
			<Lbl x={(WS.x0 + sw) / 2} y={ss + 56} color={ROLE.x.ink} anchor="middle" size={30}>25 m</Lbl>
			<Lbl x={sw + 46} y={(stp + ss) / 2 + 10} color={ROLE.given.ink} size={30}>8 m</Lbl>
			<Lbl x={WS.x0 - 20} y={WS.y0 + 44} at={origin} color={INK} anchor="end" size={30}>origin</Lbl>
			<Lbl x={1010} y={545} color={ROLE.v.ink} anchor="end" size={TYPE.current}>u = 18<MS /></Lbl>
			<Lbl x={1088} y={712} at={resolve + 10} color={ROLE.x.ink} anchor="middle" size={TYPE.current}><Q s="u" ax="x" plain /></Lbl>
			<Lbl x={1256} y={560} at={resolve + 10} color={ROLE.y.ink} size={TYPE.current}><Q s="u" ax="y" plain /></Lbl>
			<HandTag x={930} y={400} text="a size, not a component" at={sizeOf} size={TYPE.handSmall} color={ROLE.v.ink} />
			<Enter at={-30} style={{position: 'absolute', left: 1300, top: 300, width: 524}}>
				<div style={{...card, borderTop: `9px solid ${ROLE.y.stroke}`, border: `3px solid ${ROLE.y.stroke}`, borderTopWidth: 9}}>
					<Title color={ROLE.y.ink}>vertical (up +)</Title>
					<div style={r(sea)}><Q s="a" ax="y" plain /> = {v(minus, <>−9.8<MS2 /></>)}</div>
					<div style={r(sea)}>sea level: <Q s="s" ax="y" plain /> = {v(fifteen, '−15 m')}</div>
					<div style={r(ROLE.given.ink)}>wall top: {v(wallTopC, '8 m above the sea')}</div>
					<div style={r(sea)}><Q s="u" ax="y" plain /> = {v(uyIs, <>10.324<MS /></>)}</div>
				</div>
			</Enter>
			<HandTag x={1300} y={268} text="sea is below: −15 m" at={below} size={30} color={ROLE.y.ink} />
			<Enter at={-30} style={{position: 'absolute', left: 1300, top: 620, width: 524}}>
				<div style={{...card, border: `3px solid ${ROLE.x.stroke}`, borderTopWidth: 9}}>
					<Title color={ROLE.x.ink}>horizontal</Title>
					<div style={r(ROLE.x.ink)}><Q s="u" ax="x" plain /> = {v(uxIs, <>14.745<MS /></>)}</div>
					<div style={r(ROLE.x.ink)}><Q s="s" ax="x" plain /> = {v(horiz, '25 m (to the wall)')}</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 96, top: 748, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={-30} ageAt={uyIs} size={TYPE.current} oldSize={38}><span style={{color: ROLE.x.ink}}><Q s="u" ax="x" plain /> = 18 cos 35° = {v(uxIs, <>14.745<MS /></>)}</span></Row>
				<Row at={-30} size={TYPE.current}><span style={{color: ROLE.y.ink}}><Q s="u" ax="y" plain /> = 18 sin 35° = {v(uyIs, <>10.324<MS /> up</>)}</span></Row>
			</div>
			<HandTag x={560} y={906} text="unrounded in calculator" at={unrounded} size={30} color={INK} marks={[{kind: 'circle', cx: 700, cy: 906, rx: 170, ry: 30}]} markAt={unrounded + 14} markWidth={4} />
		</>
	);
};

// ---------- 4. step 1: when does it reach the wall? ----------
export const S04: React.FC = () => {
	const id = 'time-to-wall';
	const f = useCurrentFrame();
	const notV = cue(id, 'Not the vertical'), constV = cue(id, 'constant velocity'), soSx = cue(id, 'So s x'), gives = cue(id, 'which gives'), tw5 = cue(id, 'twenty-five over'), secs = cue(id, 'seconds'), clockC = cue(id, 'clock', 2), horizCol = cue(id, 'horizontal column'), carries = cue(id, 'carries');
	const T = C35.t;
	const clk = clockAt(f, secs, T);
	const st = flightAt(RUN35, clk);
	const arrive = secs + Math.ceil(T * 30);
	const [iwx, iwy] = ptU(W, DEG, T);
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<Givens y={170} w={1150} size={30}><Q s="u" ax="x" plain /> = 14.745<MS /> | <Q s="u" ax="y" plain /> = 10.324<MS /> | <Q s="s" ax="x" plain /> = 25 m | <Q s="a" ax="y" plain /> = −9.8<MS2 /></Givens>
			<FrameSvg>
				<WallStage w={W} deg={DEG} ball={f < secs} />
				<path d={pathU(W, DEG, T35)} fill="none" stroke={ROLE.v.stroke} strokeWidth={3.5} />
				<line x1={WX} x2={WX} y1={300} y2={WT} stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
				{f >= secs ? <BallSvg cx={MX + st.x * PPM} cy={GY - st.y * PPM} d={BALL_D + 4} /> : null}
				<Ring cx={iwx} cy={iwy} rx={32} ry={30} at={arrive} />
			</FrameSvg>
			<StageBrackets sub={false} />
			<Lbl x={WX + 20} y={290} at={arrive} color={INK} size={30}>wall instant</Lbl>
			<HandTag x={430} y={300} text="x known, so t from x" at={horizCol} size={TYPE.handSmall} color={ROLE.x.ink} />
			<Ledger x={1290} y={186} w={534} h={330} size={32} titleSize={28}
				clock={{value: f < secs ? '?' : `${fx(clk, 4)} s`, label: 'time at the wall t', t: clk, pulse: clockC}}
				carry={{at: carries, into: 'y'}}
				hor={{rows: [{content: <><Q s="s" ax="x" plain /> = 25 m</>, at: -30}, {content: <><Q s="a" ax="x" plain /> = 0: <Q s="u" ax="x" plain /> constant</>, at: constV}, {content: <><Q s="s" ax="x" plain /> = <Q s="u" ax="x" plain />t</>, at: soSx, box: secs}], glow: constV}}
				ver={{rows: [{content: <><Q s="u" ax="y" plain /> = 10.324</>, at: -30}, {content: <><Q s="s" ax="y" plain /> at wall = <span style={{color: INK_SOFT}}>?</span></>, at: notV}]}} />
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 536, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`, padding: '6px 20px 8px'}}>
					<Title>Which column gives t?</Title>
					<div style={{...DISPLAY(30, ROLE.y.ink, 800), opacity: prog(f, notV, 12)}}>vertical: height unknown ✗</div>
					<div style={{...DISPLAY(30, ROLE.x.ink, 800), opacity: prog(f, constV - 60, 12)}}>horizontal: s<Sub>x</Sub> known, u<Sub>x</Sub> constant ✓</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 1290, top: 690, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={gives} ageAt={tw5} size={TYPE.current} oldSize={36}>t = <Q s="s" ax="x" plain /> ÷ <Q s="u" ax="x" plain /></Row>
				<Row at={tw5} ageAt={secs} size={TYPE.current} oldSize={36}>&nbsp;&nbsp;= 25 ÷ 14.745</Row>
				<Row at={secs - 6} size={TYPE.working}>&nbsp;&nbsp;= <AnswerBox at={clockC}>1.6955 s</AnswerBox></Row>
			</div>
		</>
	);
};

// ---------- 5. step 2: how high at that moment? (camera push to the wall) ----------
export const S05: React.FC = () => {
	const id = 'height-at-wall';
	const f = useCurrentFrame();
	const ten = cue(id, 'ten point three two'), seventeen = cue(id, 'seventeen'), metres = cue(id, 'metres'), back = cue(id, 'back down'), four9 = cue(id, 'four point nine'), fourteen = cue(id, 'fourteen'), subtract = cue(id, 'Subtract'), three42 = cue(id, 'three point four two'), wallC = cue(id, 'wall'), peak = cue(id, 'past its peak');
	const p = prog(f, 0, 34);
	const w: World = {x0: interpolate(p, [0, 1], [MX, 170]), y0: interpolate(p, [0, 1], [GY, 610]), ppm: interpolate(p, [0, 1], [PPM, 22])};
	const lw = interpolate(p, [0, 1], [LW, 160]);
	const wx = wallX(w);
	const [bx, by] = ptU(w, DEG, C35.t);
	const bar = wx + 34;
	const top = w.y0 - C35.rise * w.ppm;
	const [pkx, pky] = [w.x0 + PEAK[0] * w.ppm, w.y0 - PEAK[1] * w.ppm];
	return (
		<>
			<SceneHeading text="How high is the ball at that moment?" at={-40} size={52} />
			<FrameSvg>
				<WallStage w={w} deg={DEG} lw={lw} ball={false} rightX={1060} />
				<path d={pathU(w, DEG, C35.t)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} />
				<TermBars x={bar} y0={w.y0} ppm={w.ppm} rise={C35.rise} drop={C35.drop} riseAt={metres} dropAt={back} />
				{f >= back + 30 ? <line x1={bx + 18} x2={bar + 54} y1={by} y2={by} stroke={INK} strokeWidth={3} strokeDasharray="8 7" /> : null}
				<BallSvg cx={bx} cy={by} d={BALL_D + 4} />
				<Ring cx={bx} cy={by} rx={30} ry={28} at={wallC} />
				<Bracket x1={wx - 44} y1={w.y0} x2={wx - 44} y2={by} color={ROLE.y.ink} at={20} />
				{f >= peak ? <g opacity={prog(f, peak, 12)}><line x1={pkx} x2={pkx} y1={pky - 18} y2={pky + 18} stroke={INK} strokeWidth={4} /></g> : null}
				<VecArrow x={bx} y={by + 18} dx={0} dy={C35.vy * -9} color={ROLE.y.stroke} width={6} at={peak} />
			</FrameSvg>
			<Lbl x={pkx} y={pky - 40} at={peak} color={INK} anchor="middle" size={30}>peak</Lbl>
			<Lbl x={bar - 14} y={top + 10} at={metres + 20} color={ROLE.y.ink} anchor="end" size={TYPE.current}><Q s="u" ax="y" plain />t = 17.5 m</Lbl>
			<HandTag x={bar - 14} y={top + 64} text="launch velocity alone" at={metres + 26} size={30} color={ROLE.y.ink} anchor="end" />
			<Lbl x={bar + 70} y={top + 150} at={back + 20} color={ROLE.a.ink} size={TYPE.current}>½gt<Sup>2</Sup> = 14.1 m</Lbl>
			<HandTag x={bar + 70} y={top + 204} text="gravity's pull" at={back + 26} size={30} color={ROLE.a.ink} />
			<Lbl x={wx - 58} y={w.y0 + 40} at={20} color={ROLE.y.ink} anchor="end" size={f >= wallC ? 30 : 38}>{f >= wallC ? '3.42 m above launch' : <><Q s="s" ax="y" plain /> = ?</>}</Lbl>
			<HandNote x={760} y={690} at={peak + 10} size={32} color={ROLE.y.ink}>v<Sub>y</Sub> &lt; 0: falling</HandNote>
			<div style={{position: 'absolute', left: 1130, top: 186, display: 'flex', flexDirection: 'column', gap: 10, width: 694}}>
				<div style={{display: 'inline-block', alignSelf: 'flex-start', background: ROLE.x.soft, border: `3px solid ${ROLE.x.stroke}`, borderRadius: 12, padding: '2px 16px 4px', ...DISPLAY(32, ROLE.x.ink, 800)}}>t = 1.6955 s (from the horizontal)</div>
				<Enter at={-30}><Boxed color={ROLE.y.stroke} size={TYPE.current}><span style={{color: INK}}><Q s="s" ax="y" plain /> = <Q s="u" ax="y" plain />t + ½<Q s="a" ax="y" plain />t<Sup>2</Sup></span></Boxed></Enter>
				<Row at={ten} ageAt={back} size={TYPE.current} oldSize={34}><span style={{color: ROLE.y.ink}}><Q s="u" ax="y" plain />t</span> = 10.324 × 1.6955</Row>
				<Row at={seventeen} ageAt={back} size={TYPE.current} oldSize={34}>&nbsp;&nbsp;= <span style={{color: ROLE.y.ink}}>17.505 m</span></Row>
				<Row at={four9} ageAt={subtract} size={TYPE.current} oldSize={34}><span style={{color: ROLE.a.ink}}>½<Q s="a" ax="y" plain />t<Sup>2</Sup></span> = ½(−9.8)(1.6955)<Sup>2</Sup></Row>
				<Row at={fourteen} ageAt={subtract} size={TYPE.current} oldSize={34}>&nbsp;&nbsp;= <span style={{color: ROLE.a.ink}}>−14.086 m</span></Row>
				<Row at={subtract} size={TYPE.current}><Q s="s" ax="y" plain /> = 17.505 − 14.086 <span style={{fontFamily: FONT_HAND, fontSize: 34, color: INK}}>  rise − drop</span></Row>
				<Row at={three42} size={TYPE.working}>&nbsp;&nbsp;= <AnswerBox at={wallC}>3.4187 m</AnswerBox></Row>
			</div>
			<Enter at={-30} style={{position: 'absolute', left: 1130, top: 700, width: 694}}>
				<div style={{...card, border: `3px solid ${ROLE.y.stroke}`, borderTopWidth: 9, padding: '8px 22px 10px'}}>
					<Title color={ROLE.y.ink}>vertical column, at the wall</Title>
					<div style={{...DISPLAY(32, ROLE.y.ink, 750), marginTop: 4}}><Q s="u" ax="y" plain /> = 10.324<MS /> | <Q s="a" ax="y" plain /> = −9.8<MS2 /></div>
					<div style={{...DISPLAY(32, INK, 750)}}>t = 1.6955 s (carried from x)</div>
				</div>
			</Enter>
		</>
	);
};
