// Scenes 6 to 10: two columns and one clock, the worked example (time, then distance with the launch-speed
// slider), one velocity and a curved path, the slowing-down mistake.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, prog, scribbleEllipse} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TRACK, TYPE, rgba} from '../../shared/tokens';
import {
	AnswerBox, BallSvg, Bench, Bracket, CarryArrow, CrossedChip, DISPLAY, HandNote, HeightScale, Ledger, MS, MS2, Q, ROLE, ReadCard, Readouts, Row, Sup, VecArrow, type World, sx, sy,
} from '../../physics/projectile/board';
import {clockAt, dropBelowLine, fx, pos, vel} from '../../physics/projectile/flight';
import {A_X, BALL_D, EDGE_X, FLASHES, FLOOR_Y, H, SLOW, TLAND, UB, UFAST, VK, W, cue} from './common';
import {HEAD, HEAD_SIZE} from './s1';
import {Balls, BenchStage, LANDED_Y, PathLine, Shadows, Strobes, bAt} from './stage';

const RX = 1180, RW = 644;

// ---------- 6. two columns, one clock ----------
export const S06: React.FC = () => {
	const id = 'one-clock';
	const f = useCurrentFrame();
	const cv = cue(id, 'constant velocity'), ca = cue(id, 'constant acceleration'), neither = cue(id, 'Neither'), faster = cue(id, 'Launching B faster'), slow = cue(id, "falling doesn't"), clock = cue(id, 'clock'), only = cue(id, 'Time is the only'), find = cue(id, 'Find it');
	const T3 = 0.3;
	const [bx, by] = bAt(T3);
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<FrameSvg>
				<BenchStage scaleAt={-30} scaleLabel={false} floorR={1085} />
				<PathLine />
				<Strobes a={false} />
				<BallSvg cx={A_X} cy={LANDED_Y} d={BALL_D} />
				<Shadows t={T3} guides />
				<BallSvg cx={bx} cy={by} d={BALL_D + 6} />
			</FrameSvg>
			<div style={{position: 'absolute', left: bx + 34, top: by - 74, ...DISPLAY(TYPE.current, INK, 800)}}>t = 0.30 s</div>
			<HandNote x={bx - 70} y={FLOOR_Y - 34} at={-30} size={TYPE.handSmall} color={ROLE.x.ink}>x: 0.60 m</HandNote>
			<HandNote x={EDGE_X + 22} y={by + 46} at={-30} size={TYPE.handSmall} color={ROLE.y.ink}>drop 0.441 m</HandNote>
			<Ledger x={1170} y={190} w={654} h={640} size={34} titleSize={30}
				clock={{value: 't = 0.30 s', at: clock, pulse: only, t: T3}} links={clock + 12} divider={{at: neither, label: 'separate equations: neither changes the other'}} carry={{at: find, into: 'x'}}
				hor={{title: <>horizontal (x): <span style={{fontWeight: 700}}>constant velocity</span></>, glow: cv, rows: [
					{content: <><Q s="a" ax="x" /> = 0</>, at: -30},
					{content: <><Q s="v" ax="x" /> = <Q s="u" ax="x" /></>, at: -30},
					{content: <><Q s="s" ax="x" /> = <Q s="u" ax="x" /> t</>, at: -30},
					{content: <span style={{fontSize: 30, color: INK_SOFT}}>falling doesn't slow it sideways</span>, at: slow},
				]}}
				ver={{title: <>vertical (y): <span style={{fontWeight: 700}}>constant acceleration</span></>, glow: ca, rows: [
					{content: <><Q s="a" ax="y" /> = <span style={{color: ROLE.a.ink}}>−9.8<MS2 /></span></>, at: -30},
					{content: <><Q s="u" ax="y" /> = 0 here</>, at: -30},
					{content: <span style={{fontSize: 30, color: INK_SOFT}}>launching faster doesn't hold it up</span>, at: faster},
				]}} />
			<HandTag x={1170} y={160} text="only t crosses" at={only + 6} size={TYPE.handSmall} color={INK} />
		</>
	);
};

// ---------- small calculation stage (scenes 7 and 8) ----------
const WS: World = {x0: 250, y0: 330, ppm: 360};
const SB = 30; // ball diameter on the small stage
const smallPath = (u: number, w: World, n = 60) => {
	let d = '';
	for (let i = 0; i <= n; i++) {
		const [x, y] = pos(u, 0, (TLAND * i) / n);
		d += `${i ? 'L' : 'M'}${sx(w, x).toFixed(1)},${sy(w, y).toFixed(1)} `;
	}
	return d;
};
const SmallStage: React.FC<{w: World; ball: number; lit?: number; out?: number; label?: boolean; right?: number}> = ({w, ball, lit, out, label = true, right = 700}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	const top = w.y0 + ball / 2, floor = w.y0 + H * w.ppm + ball / 2, edge = w.x0 - ball * 1.5;
	const l = lit === undefined ? 0 : prog(f, lit, 12);
	return (
		<g opacity={o}>
			<Bench edgeX={edge} topY={top} left={60} floorY={floor} floorL={60} floorR={right} band={22} legs={false} />
			<HeightScale x={edge} yTop={top} yBot={floor} ppm={w.ppm} step={0.2} label={label ? '1.2 m' : undefined} color={l > 0.5 ? ROLE.y.ink : INK} />
			<path d={smallPath(UB, w)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} />
			<BallSvg cx={w.x0} cy={w.y0} d={ball} />
			<line x1={sx(w, UB * TLAND)} x2={sx(w, UB * TLAND)} y1={floor - 18} y2={floor + 4} stroke={INK} strokeWidth={4} />
		</g>
	);
};
const GivenBox: React.FC<{x: number; y: number; w: number; ax: 'x' | 'y'; title: string; children: React.ReactNode; out?: number; lit?: number}> = ({x, y, w, ax, title, children, out, lit}) => {
	const f = useCurrentFrame();
	const T = ROLE[ax];
	const l = lit === undefined ? 0 : prog(f, lit, 12);
	return (
		<Enter at={-30} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{background: l > 0 ? rgba(T.soft, 0.5 + 0.5 * l) : CARD, borderRadius: 16, boxShadow: CARD_SHADOW, border: `3px solid ${ROLE.given.stroke}`, borderTop: `9px solid ${T.stroke}`, padding: '8px 22px 12px'}}>
				<div style={DISPLAY(TYPE.support, T.ink, 800)}>{title}</div>
				<div style={{...DISPLAY(36, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{children}</div>
			</div>
		</Enter>
	);
};

// ---------- 7. worked example: when does B land? ----------
export const S07: React.FC = () => {
	const id = 'worked-time';
	const f = useCurrentFrame();
	const falls = cue(id, 'falls'), up = cue(id, 'Up is positive'), m12 = cue(id, 'minus one point two'), zero = cue(id, 'zero'), ay = cue(id, 'a y is'), using = cue(id, 'Using'), sq2 = cue(id, 'squared', 2), so = cue(id, 'So t squared'), secs = cue(id, 'seconds');
	return (
		<>
			<SceneHeading text="Worked example: where does ball B land?" at={-40} size={56} />
			<FrameSvg><SmallStage w={WS} ball={SB} lit={up} /></FrameSvg>
			<HandNote x={WS.x0 - 10} y={WS.y0 - 46} at={-30} size={TYPE.handSmall} color={ROLE.x.ink}>B: 2.0 m s⁻¹</HandNote>
			<GivenBox x={700} y={176} w={400} ax="x" title="horizontal (x)">
				<div><Q s="u" ax="x" plain /> = 2.0<MS /></div>
				<div style={{opacity: prog(f, falls, 12)}}>t = <span style={{color: INK}}>?</span></div>
			</GivenBox>
			<GivenBox x={1130} y={176} w={694} ax="y" title="vertical (y): known, so start here">
				<Enter at={m12 - 4}><Q s="s" ax="y" plain /> = −1.2 m <span style={{fontSize: 28, color: INK_SOFT}}>(floor below launch)</span></Enter>
				<Enter at={zero - 4}><Q s="u" ax="y" plain /> = 0</Enter>
				<Enter at={ay - 4}><Q s="a" ax="y" plain /> = −9.8<MS2 /></Enter>
			</GivenBox>
			<HandTag x={1150} y={150} text="✓ known" at={falls + 4} size={TYPE.handSmall} color={ROLE.y.ink} />
			<FrameSvg><CarryArrow from={[1180, 420]} to={[960, 380]} at={falls + 10} bend={-0.3} color={INK} /></FrameSvg>
			<Enter at={cue(id, 'start with')} out={using - 6} style={{position: 'absolute', left: 712, top: 560, width: 1100}}>
				<div style={{...DISPLAY(TYPE.current, INK, 700), whiteSpace: 'normal', lineHeight: 1.5}}>
					<div>1. Find t from the <span style={{color: ROLE.y.ink}}>vertical column</span> (it knows the fall).</div>
					<div>2. Carry t across: <Q s="s" ax="x" /> = <Q s="u" ax="x" />t.</div>
				</div>
			</Enter>
			<HandTag x={712} y={470} text="up is positive" at={up} size={TYPE.handSmall} color={INK} />
			{/* equation strip */}
			<Enter at={falls} style={{position: 'absolute', left: 1000, top: 440}}>
				<div style={{display: 'flex', gap: 22, alignItems: 'baseline'}}>
					<div style={{background: CARD, borderRadius: 14, border: `3.5px solid ${ROLE.y.stroke}`, padding: '2px 18px 6px', ...DISPLAY(TYPE.current, ROLE.y.ink)}}>s<sub style={{fontSize: '0.62em'}}>y</sub> = u<sub style={{fontSize: '0.62em'}}>y</sub>t + ½a<sub style={{fontSize: '0.62em'}}>y</sub>t<Sup>2</Sup></div>
					<div style={DISPLAY(TYPE.support + 2, ROLE.x.ink, 700)}>then <Q s="s" ax="x" plain /> = <Q s="u" ax="x" plain />t</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 712, top: 540, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={using} ageAt={sq2}>−1.2 = 0 × t + ½(−9.8)t<Sup>2</Sup></Row>
				<Row at={sq2} ageAt={so}>−1.2 = −4.9t<Sup>2</Sup></Row>
				<Row at={so} ageAt={secs}>t<Sup>2</Sup> = 1.2 ÷ 4.9 = 0.2449 s<Sup>2</Sup></Row>
				<Row at={secs - 10}>t = √0.2449 = 0.4949 s ≈ <AnswerBox at={secs}>0.49 s</AnswerBox></Row>
			</div>
			<HandTag x={1330} y={930} text="time from the vertical column" at={secs + 14} size={TYPE.handSmall} color={ROLE.y.ink} anchor="middle" />
			<ReadCard x={96} y={820} w={480} label="one clock" value={f >= secs ? 't = 0.4949' : 't = ?'} unit={f >= secs ? 's' : undefined} pulse={secs} border={INK} />
		</>
	);
};

// ---------- 8. worked example: from time to distance, then the launch-speed slider ----------
const WB: World = {x0: 330, y0: 500, ppm: 340};
const BBALL = 28;
export const S08: React.FC = () => {
	const id = 'worked-distance';
	const f = useCurrentFrame();
	const carry = cue(id, 'carry'), sxq = cue(id, 's x equals'), metres = cue(id, 'metres', 2), surprise = cue(id, 'surprise'), instead = cue(id, 'instead'), its = cue(id, 'Its fall time'), out = cue(id, 'out'), vert = cue(id, 'The vertical motion'), distance = cue(id, 'distance');
	const phase2 = f >= surprise;
	// slider: 2.0 -> 1.0 -> 4.0 (m/s), then held
	const u = kf(f, [[surprise + 10, 2], [surprise + 40, 1], [surprise + 52, 1], [instead, 4]]);
	const uR = Math.round(u * 10) / 10;
	const sxNow = uR * TLAND;
	const rep = f >= its ? clockAt(f, its, TLAND, SLOW) : TLAND;
	const replaying = f >= its;
	const floor = WB.y0 + H * WB.ppm + BBALL / 2, top = WB.y0 + BBALL / 2, edge = WB.x0 - BBALL * 1.5;
	const pathFor = (uu: number, t1 = TLAND) => {
		let d = '';
		for (let i = 0; i <= 60; i++) {const [x, y] = pos(uu, 0, (t1 * i) / 60); d += `${i ? 'L' : 'M'}${sx(WB, x).toFixed(1)},${sy(WB, y).toFixed(1)} `;}
		return d;
	};
	const p2 = prog(f, surprise, 16);
	return (
		<>
			<SceneHeading text="Worked example: where does ball B land?" at={-60} size={56} />
			{/* phase 1: carry the time across */}
			<FrameSvg><SmallStage w={WS} ball={SB} out={surprise} /></FrameSvg>
			{!phase2 || f < surprise + 14 ? (
				<FrameSvg style={{opacity: 1 - p2}}>
					<Bracket x1={WS.x0} y1={WS.y0 + H * WS.ppm - 40} x2={sx(WS, UB * TLAND)} y2={WS.y0 + H * WS.ppm - 40} color={ROLE.x.ink} at={metres} label="0.99 m" ly={WS.y0 + H * WS.ppm - 74} size={TYPE.support + 4} />
				</FrameSvg>
			) : null}
			<div style={{position: 'absolute', inset: 0, opacity: 1 - p2}}>
				<div style={{position: 'absolute', left: 712, top: 200, ...DISPLAY(TYPE.support + 6, ROLE.y.ink, 700)}}>vertical column gave: t = 0.4949 s</div>
				<Enter at={carry + 6} style={{position: 'absolute', left: 712, top: 280}}>
					<div style={{background: CARD, borderRadius: 14, border: `3.5px solid ${ROLE.x.stroke}`, padding: '2px 18px 6px', display: 'inline-block', ...DISPLAY(TYPE.current, ROLE.x.ink)}}><Q s="s" ax="x" plain /> = <Q s="u" ax="x" plain />t</div>
				</Enter>
				<div style={{position: 'absolute', left: 712, top: 400, display: 'flex', flexDirection: 'column', gap: 22}}>
					<Row at={sxq}><Q s="s" ax="x" /> = <Q s="u" ax="x" />t = 2.0 × 0.4949</Row>
					<Row at={metres - 14}>= 0.9897 m ≈ <AnswerBox at={metres}>0.99 m</AnswerBox></Row>
				</div>
				<ReadCard x={96} y={820} w={480} label="one clock" value="t = 0.4949" unit="s" border={INK} />
				<FrameSvg><CarryArrow from={[580, 860]} to={[700, 310]} at={carry} bend={-0.25} color={INK} /></FrameSvg>
			</div>
			{/* phase 2: the launch-speed slider */}
			{phase2 ? (
				<div style={{position: 'absolute', inset: 0, opacity: p2}}>
					<div style={{position: 'absolute', left: 96, top: 186, display: 'flex', gap: 24, alignItems: 'center'}}>
						<div style={{...DISPLAY(TYPE.support + 4, ROLE.y.ink, 800), background: CARD, borderRadius: 14, boxShadow: CARD_SHADOW, padding: '6px 18px'}}>t = 0.4949 s</div>
						<div style={{...DISPLAY(TYPE.support + 4, ROLE.x.ink, 800), background: CARD, borderRadius: 14, boxShadow: CARD_SHADOW, padding: '6px 18px'}}><Q s="s" ax="x" plain /> = 2.0 × 0.4949 ≈ 0.99 m</div>
					</div>
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
						<Bench edgeX={edge} topY={top} left={60} floorY={floor} floorL={60} floorR={1120} band={22} />
						<HeightScale x={edge} yTop={top} yBot={floor} ppm={WB.ppm} step={0.2} label="1.2 m" />
						{replaying ? (
							<g>
								<path d={pathFor(UB, rep)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} />
								<path d={pathFor(UFAST, rep)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} strokeDasharray="14 10" />
								<BallSvg cx={sx(WB, pos(UB, 0, rep)[0])} cy={sy(WB, pos(UB, 0, rep)[1])} d={BBALL} />
								<BallSvg cx={sx(WB, pos(UFAST, 0, rep)[0])} cy={sy(WB, pos(UFAST, 0, rep)[1])} d={BBALL} />
							</g>
						) : (
							<g>
								<path d={pathFor(uR)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} />
								<BallSvg cx={sx(WB, sxNow)} cy={floor - BBALL / 2} d={BBALL} />
								<BallSvg cx={WB.x0} cy={WB.y0} d={BBALL} />
							</g>
						)}
						<line x1={sx(WB, sxNow)} x2={sx(WB, sxNow)} y1={floor - 22} y2={floor + 6} stroke={INK} strokeWidth={4.5} />
						<Bracket x1={WB.x0} y1={floor - 60} x2={sx(WB, UB * TLAND)} y2={floor - 60} color={ROLE.x.ink} at={out - 10} label="0.99 m" ly={floor - 92} size={TYPE.support} />
						<Bracket x1={WB.x0} y1={floor - 130} x2={sx(WB, UFAST * TLAND)} y2={floor - 130} color={ROLE.x.ink} at={out} label="1.98 m ≈ 2.0 m" ly={floor - 162} size={TYPE.support + 4} />
					</svg>
					<Readouts x={RX} y={300} w={RW} title="live: change B's launch speed" rows={[
						{label: <>launch speed <Q s="u" ax="x" /></>, value: fx(uR, 1), unit: <MS />, color: ROLE.x.ink},
						{label: 'fall time t', value: fx(TLAND, 2), unit: 's', color: INK, ring: its - 30},
						{label: <>distance <Q s="s" ax="x" /></>, value: fx(sxNow, 2), unit: 'm', color: ROLE.x.ink},
					]} />
					{/* slider track */}
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
						{(() => {
							const x0 = RX + 40, x1 = RX + RW - 40, y = 610, k = (v: number) => x0 + ((v - 1) / 3) * (x1 - x0);
							return (
								<g>
									<line x1={x0} x2={x1} y1={y} y2={y} stroke={TRACK} strokeWidth={14} strokeLinecap="round" />
									<line x1={x0} x2={k(uR)} y1={y} y2={y} stroke={ROLE.x.stroke} strokeWidth={14} strokeLinecap="round" />
									{[1, 2, 3, 4].map(v => <text key={v} x={k(v)} y={y + 52} textAnchor="middle" style={{fontFamily: 'inherit', fontWeight: 700, fontSize: 30}} fill={INK}>{v}.0</text>)}
									<circle cx={k(uR)} cy={y} r={20} fill={CARD} stroke={ROLE.x.stroke} strokeWidth={6} />
								</g>
							);
						})()}
					</svg>
					<HandTag x={RX + 20} y={870} text="t never changes" at={its - 20} size={TYPE.handSmall} color={INK} />
					<ReadCard x={RX} y={710} w={310} label={<>2.0<MS /> ball</>} value={`t = ${fx(rep, 2)}`} unit="s" at={its} />
					<ReadCard x={RX + 334} y={710} w={310} label={<>4.0<MS /> ball</>} value={`t = ${fx(rep, 2)}`} unit="s" at={its} />
					<HandTag x={560} y={440} text="double uₓ, double sₓ" at={out + 10} size={TYPE.handSmall} color={ROLE.x.ink} />
					<CrossedChip x={830} y={176} at={out + 4} size={34}>faster ball stays up longer</CrossedChip>
					<div style={{position: 'absolute', left: 96, top: 270, display: 'flex', gap: 30}}>
						<Enter at={vert}><span style={DISPLAY(TYPE.support + 4, ROLE.y.ink, 800)}>vertical: sets t</span></Enter>
						<Enter at={distance - 20}><span style={DISPLAY(TYPE.support + 4, ROLE.x.ink, 800)}>horizontal: t → distance</span></Enter>
					</div>
				</div>
			) : null}
		</>
	);
};

// ---------- velocity arrows at the flashes (scenes 9 and 10) ----------
const IMG = [0, ...FLASHES];
const Velocities: React.FC<{tealAt: number; blueAt: number; resAt: number; lift?: number}> = ({tealAt, blueAt, resAt}) => (
	<g>
		{IMG.map((k, i) => {
			const [x, y] = bAt(k);
			const [vx, vy] = vel(UB, 0, k);
			return (
				<g key={k}>
					<VecArrow x={x} y={y} dx={vx * VK} dy={0} color={ROLE.x.stroke} width={5} at={tealAt + i * 8} head={16} />
					{Math.abs(vy) > 1e-6 ? <VecArrow x={x + vx * VK} y={y} dx={0} dy={-vy * VK} color={ROLE.y.stroke} width={5} at={blueAt + i * 8} head={16} /> : null}
					<VecArrow x={x} y={y} dx={vx * VK} dy={-vy * VK} color={ROLE.v.stroke} width={6} at={resAt + i * 8} head={18} />
				</g>
			);
		})}
	</g>
);
const VTable: React.FC<{at: number; speedAt: number; landAt?: number}> = ({at, speedAt, landAt}) => (
	<Enter at={-30} style={{position: 'absolute', left: RX, top: 190, width: RW}}>
		<div style={{background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '10px 24px 12px', border: `2.5px solid rgba(60,45,20,0.10)`}}>
			<div style={{...DISPLAY(TYPE.label, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>velocity at each flash (m s⁻¹)</div>
			<div style={{display: 'grid', gridTemplateColumns: '1.1fr 1fr 1.2fr 1.1fr', rowGap: 2, ...DISPLAY(32, INK, 700)}}>
				<span>t (s)</span><span style={{color: ROLE.x.ink}}><Q s="v" ax="x" plain /></span><span style={{color: ROLE.y.ink}}><Q s="v" ax="y" plain /></span><span style={{color: ROLE.v.ink}}>speed</span>
				{[...IMG, ...(landAt !== undefined ? [TLAND] : [])].map((k, i) => {
					const [vx, vy] = vel(UB, 0, k);
					const a = k === TLAND ? landAt ?? 0 : at + i * 8;
					return (
						<React.Fragment key={k}>
							<Enter at={a} dy={0}><span>{k === TLAND ? 'landing' : fx(k, 1)}</span></Enter>
							<Enter at={a} dy={0}><span style={{color: ROLE.x.ink}}>{fx(vx, 1)}</span></Enter>
							<Enter at={a} dy={0}><span style={{color: ROLE.y.ink}}>{fx(vy, 2)}</span></Enter>
							<Enter at={Math.max(a, speedAt)} dy={0}><span style={{color: ROLE.v.ink}}>{fx(Math.hypot(vx, vy), 2)}</span></Enter>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	</Enter>
);

// ---------- 9. one velocity, a curved path ----------
export const S09: React.FC = () => {
	const id = 'resultant-path';
	const f = useCurrentFrame();
	const comps = cue(id, 'two components'), vArrow = cue(id, 'vertical arrow'), downwards = cue(id, 'downwards'), speeds = cue(id, 'speeds up'), down = cue(id, 'down'), sq = cue(id, 'squared'), bends = cue(id, 'bends'), parabola = cue(id, 'parabola');
	const [lx, ly] = bAt(0.4);
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<FrameSvg>
				<BenchStage scaleAt={-30} scaleLabel={false} floorR={1130} />
				<BallSvg cx={A_X} cy={LANDED_Y} d={BALL_D} />
				{f >= bends ? <DrawPath d={pathD()} at={bends} dur={40} color={ROLE.v.stroke} width={5} /> : null}
				<Strobes a={false} launch />
				{/* the straight launch line and the drops below it (½ g t²) */}
				<DrawPath d={`M${W.x0},${W.y0} L${W.x0 + 520},${W.y0}`} at={sq - 10} dur={16} color={INK_SOFT} width={3} dash="12 9" />
				{FLASHES.map((k, i) => {
					const [x, y] = bAt(k);
					return <Bracket key={k} x1={x - 28} y1={W.y0} x2={x - 28} y2={y} color={INK} at={sq + i * 8} label={i === FLASHES.length - 1 ? `${fx(dropBelowLine(k), 3)} m` : undefined} lx={x - 40} ly={(W.y0 + y) / 2} anchor="end" size={TYPE.support} />;
				})}
				<Velocities tealAt={comps} blueAt={vArrow} resAt={downwards} />
				{/* angle below the horizontal at each image grows */}
				{FLASHES.map((k, i) => {
					const [x, y] = bAt(k);
					const a = Math.atan2(-vel(UB, 0, k)[1], UB);
					return f >= down ? <path key={k} d={`M${x + 34},${y} A34,34 0 0,1 ${x + 34 * Math.cos(a)},${y + 34 * Math.sin(a)}`} fill="none" stroke={INK} strokeWidth={3} opacity={prog(f, down + i * 6, 10)} /> : null;
				})}
			</FrameSvg>
			<Enter at={speeds} style={{position: 'absolute', left: lx - 300, top: ly + 50}}>
				<div style={{...DISPLAY(TYPE.support + 4, ROLE.v.ink, 800), background: CARD, borderRadius: 12, padding: '2px 12px', boxShadow: CARD_SHADOW}}>speed 4.40<MS /></div>
			</Enter>
			<Enter at={sq} style={{position: 'absolute', left: RX, top: 560, width: RW}}>
				<div style={{background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '10px 24px', ...DISPLAY(32, INK, 700), whiteSpace: 'normal'}}>drop below the launch line, <span style={{color: ROLE.a.ink}}>½gt²</span>: <span style={{color: ROLE.y.ink}}>{FLASHES.map(k => fx(dropBelowLine(k), 3)).join(', ')} m</span></div>
			</Enter>
			<HandTag x={EDGE_X + 60} y={860} text="speeds up, turns down" at={speeds + 10} size={TYPE.handSmall} color={ROLE.v.ink} />
			<VTable at={comps} speedAt={speeds} />
			<Enter at={parabola - 30} style={{position: 'absolute', left: RX, top: 730, width: RW}}>
				<div style={{background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px', border: `3.5px solid ${ROLE.v.stroke}`, ...DISPLAY(36, INK, 700), whiteSpace: 'normal'}}>
					<span style={{color: ROLE.v.ink}}>parabola:</span> <span style={{color: ROLE.x.ink}}>x grows with t</span>, <span style={{color: ROLE.y.ink}}>drop grows with t²</span>
				</div>
			</Enter>
		</>
	);
};
const pathD = () => {
	let d = '';
	for (let i = 0; i <= 80; i++) {const [x, y] = bAt((TLAND * i) / 80); d += `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)} `;}
	return d;
};

// ---------- 10. the slowing-down mistake ----------
export const S10: React.FC = () => {
	const id = 'slowing-mistake';
	const f = useCurrentFrame();
	const sideways = cue(id, 'sideways'), hasnt = cue(id, "It hasn't"), launch = cue(id, 'launch'), grown = cue(id, 'grown'), real = cue(id, 'A real ball'), model = cue(id, 'our model');
	const [lx, ly] = bAt(0.4);
	const [ex, ey] = bAt(TLAND);
	const lift = prog(f, launch, 30);
	// comparison: the launch and landing teal arrows lift off and sit side by side (same scale)
	const CX = 700, CY1 = 180, CY2 = 236;
	const [x0, y0] = bAt(0);
	const pulse = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - grown) / 24)));
	return (
		<>
			<SceneHeading text="A common mistake: does it slow down sideways?" at={-40} size={56} />
			<FrameSvg>
				<BenchStage scaleAt={-30} scaleLabel={false} floorR={1130} />
				<BallSvg cx={A_X} cy={LANDED_Y} d={BALL_D} />
				<PathLine />
				<Strobes a={false} launch />
				<Velocities tealAt={-60} blueAt={-60} resAt={-60} />
				<BallSvg cx={ex} cy={ey} d={BALL_D} />
				<VecArrow x={ex} y={ey} dx={UB * VK} dy={0} color={ROLE.x.stroke} width={5} at={launch - 10} head={16} />
				{/* pulse the last vertical arrow */}
				{f >= grown ? <line x1={lx + UB * VK} x2={lx + UB * VK} y1={ly} y2={ly + 3.92 * VK} stroke={ROLE.y.stroke} strokeWidth={6 + 8 * pulse} strokeLinecap="round" opacity={0.9} /> : null}
				{f >= sideways ? <DrawPath d={scribbleEllipse(lx + 40, ly + 80, 70, 100, 5, 1.2)} at={sideways} dur={18} color={ROLE.slate.stroke} width={5} /> : null}
				{/* lifted copies */}
				{lift > 0 ? (
					<g>
						<VecArrow x={x0 + (CX - x0) * lift} y={y0 + (CY1 - y0) * lift} dx={UB * VK * 2} dy={0} color={ROLE.x.stroke} width={7} at={launch} dur={1} />
						<VecArrow x={ex + (CX - ex) * lift} y={ey + (CY2 - ey) * lift} dx={UB * VK * 2} dy={0} color={ROLE.x.stroke} width={7} at={launch} dur={1} />
					</g>
				) : null}
				<VecArrow x={lx - 24} y={ly} dx={-70} dy={0} color={INK_SOFT} width={5} at={real} label="air resistance" lx={lx - 106} ly={ly - 30} anchor="end" labelColor={INK} size={TYPE.support} />
			</FrameSvg>
			{lift >= 1 ? (
				<>
					<div style={{position: 'absolute', left: CX + 180, top: CY1 - 22, ...DISPLAY(TYPE.support + 2, ROLE.x.ink, 800)}}>launch: 2.0<MS /></div>
					<div style={{position: 'absolute', left: CX + 180, top: CY2 - 22, ...DISPLAY(TYPE.support + 2, ROLE.x.ink, 800)}}>landing: 2.0<MS /></div>
				</>
			) : null}
			<HandTag x={EDGE_X + 30} y={620} text="direction turned, vₓ didn't" at={launch + 40} size={TYPE.handSmall} color={ROLE.slate.ink} />
			<HandNote x={lx - 560} y={ly + 150} at={grown} size={TYPE.handSmall} color={ROLE.y.ink}><Q s="v" ax="y" plain />: −3.92, then −4.85 at landing</HandNote>
			<HandTag x={lx - 420} y={ly + 34} text="real ball: small; model: zero" at={real + 30} size={TYPE.handSmall} color={INK} />
			<CrossedChip x={RX} y={760} at={-30} crossAt={hasnt + 4} size={34} caption="the horizontal arrow never shrank">it slows down sideways near the end</CrossedChip>
			<VTable at={-60} speedAt={-60} landAt={launch} />
			<Enter at={model - 20} style={{position: 'absolute', left: RX, top: 640}}>
				<div style={{display: 'inline-block', background: CARD, borderRadius: 14, boxShadow: CARD_SHADOW, border: `4px solid ${INK}`, padding: '4px 18px', ...DISPLAY(TYPE.support + 2, INK, 800)}}>Model: zero air resistance ✓</div>
			</Enter>
		</>
	);
};
export {EDGE_X, FLOOR_Y, Balls, Shadows, MS};
