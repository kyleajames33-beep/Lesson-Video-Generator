// Scenes 1 to 5: the hook (cold open), the reveal with its strobe replay, the model, horizontal, vertical.
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Enter, prog, scribbleEllipse} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, SvgPlate} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {
	BallSvg, Bracket, Chip, DISPLAY, GroundLine, HandNote, Ledger, MS, MS2, Q, ROLE, ReadCard, Readouts, Sub, VecArrow, sy,
} from '../../physics/projectile/board';
import {DROP_LAUNCH, slideAt} from '../../physics/projectile/demonstrator';
import {clockAt, flightAt, fx, vel} from '../../physics/projectile/flight';
import {A_X, BALL_D, BENCH_TOP, DT, EDGE_X, FLASHES, FLOOR_Y, H, RUN_B, SLOW, TLAND, UB, VK, W, cue, hold} from './common';
import {Balls, BenchStage, LANDED_Y, PathLine, Shadows, Strobes, aAt, bAt} from './stage';

export const HEAD = 'Why can one projectile be analysed as two motions with one clock?';
export const HEAD_SIZE = 50;
const RX = 1180, RW = 644; // right column

const MOON_GROUND: PlateSpec = {src: 'assets/physics/phys-y11-moon-ground-v1.png', nat: [2172, 724], box: [64, 546, 2108, 678]};
const MOON_HAMMER: PlateSpec = {src: 'assets/physics/phys-y11-moon-hammer-v1.png', nat: [2172, 724], box: [296, 25, 1878, 671]};
const MOON_FEATHER: PlateSpec = {src: 'assets/physics/phys-y11-moon-feather-v1.png', nat: [2172, 724], box: [113, 152, 2062, 573]};
export const MOON_PLATES = [MOON_GROUND.src, MOON_HAMMER.src, MOON_FEATHER.src];
const plateH = (p: PlateSpec, w: number) => (w * (p.box[3] - p.box[1])) / (p.box[2] - p.box[0]);

const Line: React.FC<{at: number; children: React.ReactNode; color?: string; size?: number}> = ({at, children, color = INK, size = 36}) => (
	<Enter at={at} style={{...DISPLAY(size, color, 700), whiteSpace: 'normal', marginTop: 6}}>{children}</Enter>
);

// ---------- 1. hook: which lands first? (cold open, no title card) ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const floor = cue(id, 'floor'), rod = cue(id, 'spring-loaded rod'), knocks = cue(id, 'knocks'), same = cue(id, 'same instant'), drop = cue(id, 'drop'), think = cue(id, 'think');
	const h = hold(id);
	return (
		<>
			<FrameSvg>
				<BenchStage scaleAt={floor} slide={0} />
				<Balls t={0} />
				<VecArrow x={W.x0 + 22} y={W.y0} dx={UB * VK + 40} dy={0} color={ROLE.x.stroke} at={drop} label={<>2.0<MS /></>} lx={W.x0 + 30} ly={W.y0 - 40} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1500} y={700} ringFrom={think} />
			</FrameSvg>
			<Chip x={A_X - 84} y={W.y0 + 22} at={-30} size={36}>A</Chip>
			<Chip x={W.x0 + 6} y={W.y0 - 104} at={-30} size={36}>B</Chip>
			{DROP_LAUNCH.ready ? <HandTag x={W.x0 + 60} y={170} text="one rod, one release" at={rod} size={TYPE.handSmall} color={INK} marks={[{kind: 'arrow', from: [W.x0 + 70, 194], to: [W.x0 - 36, W.y0 - 64], bend: 0.25}]} /> : null}
			<HandTag x={A_X - 40} y={W.y0 - 12} text="sideways 0" at={drop} size={TYPE.handSmall} color={INK} anchor="end" />
			<HandTag x={W.x0 + 140} y={W.y0 + 66} text="B: pushed sideways" at={drop + 6} size={TYPE.handSmall} color={ROLE.x.ink} />
			<HandTag x={W.x0 + 60} y={W.y0 + 170} text="A: just drops" at={drop + 16} size={TYPE.handSmall} color={INK}
				marks={[{kind: 'arrow', from: [W.x0 + 50, W.y0 + 160], to: [A_X + 6, W.y0 + 34], bend: -0.2}]} />
			{/* the set-up, as it is said */}
			<Enter at={-30} style={{position: 'absolute', left: RX, top: 190, width: RW}}>
				<div style={{background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '14px 28px 18px', borderLeft: `10px solid ${ROLE.given.stroke}`}}>
					<div style={{...DISPLAY(TYPE.label, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>The set-up</div>
					<Line at={-30}>two identical steel balls, A and B</Line>
					<Line at={floor}>bench edge <span style={{color: ROLE.given.ink}}>1.2 m</span> above the floor</Line>
					<Line at={knocks} color={ROLE.x.ink}>B: knocked sideways at 2.0<MS /></Line>
					<Line at={drop}>A: dropped, no sideways push</Line>
					<Line at={same + 6} color={INK}>both leave at the same instant</Line>
				</div>
			</Enter>
			<Enter at={-30} style={{position: 'absolute', left: 620, top: 560, width: 520}}>
				<div style={{background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '14px 28px 20px', border: `4px solid ${INK}`}}>
					<div style={DISPLAY(TYPE.working, INK, 800)}>Which lands first?</div>
					<div style={{display: 'flex', gap: 18, marginTop: 16}}>
						{['A', 'B', 'together'].map(o => <div key={o} style={{background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '4px 22px 6px', ...DISPLAY(TYPE.current, INK, 700)}}>{o}</div>)}
					</div>
				</div>
			</Enter>
		</>
	);
};

// ---------- 2. reveal: same height at every flash ----------
/** Physical time on the scene 2 clock: real-time release, rewind, then the one-eighth-speed replay. */
const revealClock = (f: number, fire: number, rw: number, rp: number) => {
	if (f < fire) return {t: 0, mode: 'rest' as const};
	if (f < rw) return {t: clockAt(f, fire, TLAND, 1), mode: 'real' as const};
	if (f < rp) return {t: TLAND * (1 - Math.min(1, (f - rw) / 15)), mode: 'rewind' as const};
	return {t: clockAt(f, rp, TLAND, SLOW), mode: 'slow' as const};
};
export const S02: React.FC = () => {
	const id = 'reveal';
	const f = useCurrentFrame();
	const fire = cue(id, 'release') + 8, instant = cue(id, 'instant'), rw = cue(id, 'Here it is'), rp = cue(id, 'slow motion'), flash = cue(id, 'flash every'), height = cue(id, 'height'), why = cue(id, 'Why not'), clock = cue(id, 'clock');
	const {t, mode} = revealClock(f, fire, rw, rp);
	const strobeT = mode === 'slow' ? t : -1;
	const landed = mode === 'real' && t >= TLAND;
	const ay = aAt(t)[1], by = bAt(t)[1];
	return (
		<>
			<SceneHeading text={HEAD} at={clock} size={HEAD_SIZE} />
			<FrameSvg>
				<BenchStage scaleAt={-30} slide={mode === 'real' ? slideAt(f, fire) : mode === 'slow' ? slideAt(f, rp) : 0} />
				{strobeT >= 0 ? <Strobes t={strobeT} /> : null}
				{f >= height ? FLASHES.map((k, i) => {
					const [bx, byk] = bAt(k);
					return <DrawPath key={k} d={`M${A_X - 30},${byk} L${bx + 32},${byk}`} at={height + i * 5} dur={12} color={ROLE.y.stroke} width={3} dash="9 7" />;
				}) : null}
				<Balls t={t} />
				{landed || (f >= instant && mode === 'real') ? [A_X, bAt(TLAND)[0]].map(x => <g key={x} opacity={1 - prog(f, rw, 10)}><DrawPath d={`M${x - 34},${FLOOR_Y - 4} l-14,-12 M${x + 34},${FLOOR_Y - 4} l14,-12`} at={fire + 15} dur={6} color={INK} width={3} /></g>) : null}
				{f >= height ? <DrawPath d={scribbleEllipse((A_X + bAt(0.3)[0]) / 2, bAt(0.3)[1], 250, 44, 3, 1.2)} at={height + 26} dur={20} color={INK} width={4} /> : null}
			</FrameSvg>
			<Chip x={W.x0 + 180} y={830} at={instant} out={rw} size={40}>together</Chip>
			<HandTag x={EDGE_X + 40} y={850} text="level at every flash" at={height + 30} size={TYPE.handSmall} color={ROLE.y.ink}
				marks={[{kind: 'arrow', from: [EDGE_X + 300, 828], to: [bAt(0.4)[0] - 60, bAt(0.4)[1] + 10], bend: 0.2}]} />
			<ReadCard x={RX} y={190} w={330} label="clock" value={`t = ${fx(t, 2)}`} unit="s" />
			<HandNote x={RX + 350} y={248} at={rp} size={TYPE.handSmall} color={INK_SOFT}>one eighth speed</HandNote>
			<Readouts x={RX} y={340} w={RW} title="height above the floor" rows={[
				{label: 'ball A', value: fx((FLOOR_Y - BALL_D / 2 - ay) / W.ppm, 3), unit: 'm', color: INK},
				{label: 'ball B', value: fx((FLOOR_Y - BALL_D / 2 - by) / W.ppm, 3), unit: 'm', color: INK, ring: height},
			]} />
			<Enter at={flash} style={{position: 'absolute', left: RX, top: 600, width: RW}}>
				<div style={{...DISPLAY(TYPE.body, INK, 700), whiteSpace: 'normal'}}>a flash every <span style={{color: ROLE.given.ink}}>0.1 s</span> leaves an image of each ball</div>
			</Enter>
			<Enter at={why} style={{position: 'absolute', left: RX, top: 720, width: RW}}>
				<div style={{...DISPLAY(TYPE.current, INK, 800), whiteSpace: 'normal'}}>B's sideways motion doesn't change its fall. <span style={{color: ROLE.v.ink}}>Why not?</span></div>
			</Enter>
		</>
	);
};

// ---------- 3. projectile and the model ----------
const ModelBox: React.FC<{tick: number; children: React.ReactNode; at: number}> = ({tick, children, at}) => {
	const f = useCurrentFrame();
	return (
		<Enter at={at} style={{display: 'flex', alignItems: 'flex-start', gap: 16, marginTop: 10}}>
			<svg width={40} height={40} style={{flex: 'none', marginTop: 4, overflow: 'visible'}}>
				<rect x={2} y={2} width={36} height={36} rx={6} fill={CARD} stroke={INK} strokeWidth={3.5} />
				{f >= tick ? <DrawPath d="M8,21 L17,30 L33,8" at={tick} dur={10} color={INK} width={5} /> : null}
			</svg>
			<div style={{...DISPLAY(34, INK, 700), whiteSpace: 'normal'}}>{children}</div>
		</Enter>
	);
};
export const S03: React.FC = () => {
	const id = 'model';
	const f = useCurrentFrame();
	const proj = cue(id, 'projectile'), traj = cue(id, 'trajectory'), two = cue(id, 'two assumptions'), first = cue(id, 'First'), feather = cue(id, 'A feather'), moon = cue(id, 'on the Moon'), hammer = cue(id, 'hammer'), together = cue(id, 'together', 2), ignore = cue(id, 'ignore'), second = cue(id, 'Second'), down = cue(id, 'downwards');
	// inset geometry
	const IX = RX, IY = 640, IW = RW, IH = 270;
	const groundW = IW - 40, groundH = plateH(MOON_GROUND, groundW), groundTop = IY + IH - groundH - 8;
	const airFeather = prog(f, feather, 80);
	const ballFall = Math.min(1, Math.max(0, (f - feather - 10) / 14));
	const moonOn = f >= moon;
	const fallP = Math.min(1, Math.max(0, (f - hammer) / Math.max(20, together - hammer)));
	const fy = (h: number) => IY + 26 + (groundTop + 4 - h - IY - 26) * fallP * fallP;
	const hamW = 170, featW = 200;
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<FrameSvg>
				<BenchStage scaleAt={-30} />
				<Strobes />
				<Balls t={TLAND} />
				{f >= traj ? <DrawPath d={pathFromStage()} at={traj} dur={30} color={ROLE.v.stroke} width={5} /> : null}
				<VecArrow x={700} y={150} dx={0} dy={130} color={ROLE.a.stroke} at={down - 12} label={<>g = 9.8<MS2 /></>} lx={718} ly={190} labelColor={ROLE.a.ink} />
			</FrameSvg>
			<HandTag x={A_X + 45} y={730} text="trajectory: the path" at={traj + 10} size={TYPE.handSmall} color={ROLE.v.ink} />
			<HandTag x={900} y={236} text="gravity alone" at={down} size={TYPE.handSmall} color={ROLE.a.ink} />
			<Chip x={RX} y={190} at={proj} size={34} w={RW}><b>projectile:</b> moves under gravity alone after launch</Chip>
			{/* model card */}
			<Enter at={two} style={{position: 'absolute', left: RX, top: 300, width: RW}}>
				<div style={{background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 26px 16px', border: `3px solid ${INK}`}}>
					<div style={{...DISPLAY(TYPE.label, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>Model: two assumptions</div>
					<ModelBox at={first} tick={ignore}>zero air resistance <span style={{...DISPLAY(28, INK_SOFT, 600)}}>(no push of the air on the ball)</span></ModelBox>
					<ModelBox at={second} tick={down}>constant vertical acceleration: <span style={{color: ROLE.a.ink}}>g = 9.8<MS2 />, down</span></ModelBox>
				</div>
			</Enter>
			{/* inset: a feather in air, then a hammer and a feather on the Moon */}
			<Enter at={feather - 8} style={{position: 'absolute', left: IX, top: IY, width: IW, height: IH}}>
				<div style={{position: 'absolute', inset: 0, background: moonOn ? '#e9e6df' : CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `3px solid ${INK}`, overflow: 'hidden'}} />
			</Enter>
			{f >= feather - 8 ? (
				<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
					<defs><clipPath id="v01-inset"><rect x={IX + 3} y={IY + 3} width={IW - 6} height={IH - 6} rx={16} /></clipPath></defs>
					<g clipPath="url(#v01-inset)" opacity={prog(f, feather - 8, 12)}>
						{!moonOn ? (
							<g>
								<GroundLine x1={IX + 20} x2={IX + IW - 20} y={IY + IH - 30} hatch={false} />
								<g transform={`rotate(${8 * Math.sin((f - feather) / 9)} ${IX + 190} ${IY + 80 + airFeather * 50})`}>
									<SvgPlate plate={MOON_FEATHER} x={IX + 90} y={IY + 56 + airFeather * 50} w={featW} />
								</g>
								<BallSvg cx={IX + 440} cy={IY + 40 + ballFall * (IH - 88)} d={36} />
							</g>
						) : (
							<g>
								<SvgPlate plate={MOON_GROUND} x={IX + 20} y={groundTop} w={groundW} />
								<SvgPlate plate={MOON_HAMMER} x={IX + 90} y={fy(plateH(MOON_HAMMER, hamW))} w={hamW} />
								<SvgPlate plate={MOON_FEATHER} x={IX + 350} y={fy(plateH(MOON_FEATHER, featW))} w={featW} />
							</g>
						)}
					</g>
				</svg>
			) : null}
			{f >= feather - 8 ? <div style={{position: 'absolute', left: IX + IW - 24, top: IY + 18, transform: 'translateX(-100%)', ...DISPLAY(32, moonOn ? INK : ROLE.y.ink, 800)}}>{moonOn ? 'Moon: no air' : 'in air'}</div> : null}
			{f >= together ? <HandTag x={IX + 330} y={IY + 120} text="land together" at={together} size={TYPE.handSmall} color={INK} /> : null}
		</>
	);
};
const pathFromStage = () => {
	let d = '';
	for (let i = 0; i <= 80; i++) {
		const [x, y] = bAt((TLAND * i) / 80);
		d += `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)} `;
	}
	return d;
};

// ---------- the ledger as it builds (scenes 4 and 5) ----------
const LX = RX, LY = 190, LW = RW, LH = 440;
const HOR_ROWS = (c: {none: number; acc: number; vel: number; sx: number; box: number; ring?: number}) => [
	{content: <>F<Sub>x</Sub> = 0</>, at: c.none},
	{content: <><Q s="a" ax="x" /> = 0</>, at: c.acc, box: c.ring},
	{content: <><Q s="v" ax="x" /> = <Q s="u" ax="x" /> <span style={{fontSize: 28, color: INK_SOFT}}>(constant)</span></>, at: c.vel},
	{content: <><Q s="s" ax="x" /> = <Q s="u" ax="x" /> t</>, at: c.sx, box: c.box},
];

// ---------- 4. horizontal: no force, constant velocity ----------
export const S04: React.FC = () => {
	const id = 'horizontal';
	const f = useCurrentFrame();
	const forces = cue(id, 'What forces'), none = cue(id, 'none'), weight = cue(id, 'weight'), acc = cue(id, 'acceleration'), newton = cue(id, "Newton's first"), change = cue(id, "can't change"), flight = cue(id, 'flight'), cm = cue(id, 'centimetres'), pair = cue(id, 'pair of flashes'), so = cue(id, 'So horizontal'), time = cue(id, 'time');
	const t = f < flight ? 0 : clockAt(f, flight, TLAND, SLOW);
	const replaying = f >= flight;
	const [fx0, fy0] = bAt(0.2);
	const BY = 800; // bracket row
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<FrameSvg>
				<BenchStage scaleAt={-30} scaleLabel={false} />
				<Strobes a={false} launch />
				<BallSvg cx={A_X} cy={LANDED_Y} d={BALL_D} />
				{/* forces at one image */}
				<VecArrow x={fx0} y={fy0 + 22} dx={0} dy={120} color={ROLE.w.stroke} width={7} at={weight - 6} label="weight" lx={fx0 + 16} ly={fy0 + 120} labelColor={ROLE.w.ink} />
				<VecArrow x={fx0 + 24} y={fy0} dx={96} dy={0} color={ROLE.x.stroke} dash="10 8" width={4} at={forces} label="?" lx={fx0 + 128} ly={fy0 - 4} size={44} />
				{f >= none ? <g><DrawPath d={`M${fx0 + 50},${fy0 - 26} L${fx0 + 110},${fy0 + 26}`} at={none} dur={8} color={INK} width={6} /><DrawPath d={`M${fx0 + 110},${fy0 - 26} L${fx0 + 50},${fy0 + 26}`} at={none + 6} dur={8} color={INK} width={6} /></g> : null}
				{/* the teal floor shadow, replayed at one eighth speed with B */}
				{FLASHES.map((k, i) => {
					const [x] = bAt(k), [x1] = bAt(i ? FLASHES[i - 1] : 0);
					return (
						<g key={k}>
							{replaying && t >= k ? <line x1={x} x2={x} y1={bAt(k)[1] + 24} y2={BY + 14} stroke={ROLE.x.stroke} strokeWidth={2.5} strokeDasharray="6 7" /> : null}
							<Bracket x1={x1} y1={BY} x2={x} y2={BY} color={ROLE.x.ink} at={Math.max(cm - 30, flight + Math.round(k * SLOW * 30))} label="0.20 m" ly={BY - 30 - (i % 2) * 32} size={TYPE.support} />
						</g>
					);
				})}
				{replaying ? <g><Balls t={t} a={false} /><Shadows t={t} edge={false} /><VecArrow x={bAt(t)[0] + 14} y={FLOOR_Y - 36} dx={UB * VK} dy={0} color={ROLE.x.stroke} width={6} at={flight} dur={6} /></g> : null}
			</FrameSvg>
			{replaying ? <div style={{position: 'absolute', left: bAt(t)[0] - 250, top: FLOOR_Y - 100, ...DISPLAY(TYPE.support, ROLE.x.ink, 800)}}><Q s="v" ax="x" /> = 2.0<MS /></div> : null}
			<HandTag x={fx0 - 40} y={fy0 - 84} text="no horizontal force" at={none + 10} size={TYPE.handSmall} color={INK} />
			<HandTag x={140} y={790} text="same gap every flash" at={pair} size={TYPE.handSmall} color={ROLE.x.ink} marks={[{kind: 'arrow', from: [430, 790], to: [W.x0 + 30, BY - 6], bend: -0.2}]} />
			<Ledger x={LX} y={LY} w={LW} h={LH}
				clock={{value: `t = ${fx(t, 2)} s`, t}}
				hor={{rows: HOR_ROWS({none, acc, vel: change, sx: so, box: time, ring: newton})}}
				ver={{rows: [{content: <>F<Sub>y</Sub> = weight, down</>, at: weight}]}} />
			<Readouts x={LX} y={LY + LH + 24} w={LW} title="ball B, live" rows={[
				{label: <>sideways distance <Q s="s" ax="x" /></>, value: fx(flightAt(RUN_B, t).x, 2), unit: 'm', color: ROLE.x.ink},
				{label: <>sideways velocity <Q s="v" ax="x" /></>, value: fx(flightAt(RUN_B, t).vx, 1), unit: <MS />, color: ROLE.x.ink, ring: change},
			]} />
		</>
	);
};

// ---------- 5. vertical: weight only, same fall ----------
export const S05: React.FC = () => {
	const id = 'vertical';
	const f = useCurrentFrame();
	const squared = cue(id, 'squared'), launched = cue(id, 'launched horizontally'), zero = cue(id, 'zero'), identical = cue(id, 'identical'), every = cue(id, 'Every tenth'), gains = cue(id, 'gains'), growing = cue(id, 'growing');
	const t = f < identical ? TLAND : clockAt(f, identical, TLAND, SLOW);
	const replaying = f >= identical && f < identical + Math.ceil(TLAND * SLOW * 30) + 2;
	const BX = EDGE_X - 18; // brackets just left of the edge scale
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<FrameSvg>
				<BenchStage scaleAt={-30} scaleLabel={false} />
				<Strobes a={false} />
				{replaying ? <Balls t={t} b={false} /> : <BallSvg cx={A_X} cy={LANDED_Y} d={BALL_D} />}
				<BallSvg cx={bAt(TLAND)[0]} cy={LANDED_Y} d={BALL_D} />
				{replaying ? <Shadows t={t} floor={false} /> : null}
				{/* growing gaps on the edge scale (drawn to scale) */}
				{FLASHES.map((k, i) => {
					const y0 = bAt(i ? FLASHES[i - 1] : 0)[1], y1 = bAt(k)[1];
					const gap = (y1 - y0) / W.ppm;
					return <Bracket key={k} x1={BX} y1={y0} x2={BX} y2={y1} color={ROLE.y.ink} at={every + i * 14} label={`${fx(gap, 3)} m`} lx={BX - 18} ly={(y0 + y1) / 2 + (i === 0 ? -18 : i === 1 ? 10 : 0)} anchor="end" size={TYPE.support} />;
				})}
				{/* v_y arrows at B's images, 40 px per m/s */}
				{FLASHES.map((k, i) => {
					const [x, y] = bAt(k);
					const vy = vel(UB, 0, k)[1];
					return <VecArrow key={k} x={x} y={y + 22} dx={0} dy={-vy * VK} color={ROLE.y.stroke} width={6} at={gains + i * 12} label={fx(vy, 2)} lx={x - 12} ly={y + 22 - vy * VK - 8} anchor="end" size={TYPE.support} labelColor={ROLE.y.ink} />;
				})}
			</FrameSvg>
			{/* axis key */}
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 650}}>
				<div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4, ...DISPLAY(30, INK, 700)}}>
					<svg width={70} height={70} style={{overflow: 'visible'}}><line x1={10} y1={60} x2={10} y2={8} stroke={ROLE.y.stroke} strokeWidth={4} /><path d="M2,16 L10,2 L18,16" fill={ROLE.y.stroke} /><line x1={10} y1={60} x2={62} y2={60} stroke={ROLE.x.stroke} strokeWidth={4} /><path d="M54,52 L68,60 L54,68" fill={ROLE.x.stroke} /></svg>
					<span><span style={{color: ROLE.y.ink}}>+y up</span>, <span style={{color: ROLE.x.ink}}>+x right</span></span>
				</div>
			</Enter>
			<HandTag x={A_X + 40} y={390} text="same as A" at={zero + 6} size={TYPE.handSmall} color={ROLE.y.ink} />
			<HandTag x={170} y={690} text="gaps grow" at={growing - 6} size={TYPE.hand} color={ROLE.y.ink} />
			<HandTag x={760} y={250} text="−0.98 m s⁻¹ every 0.1 s" at={every + 20} size={TYPE.handSmall} color={ROLE.a.ink} />
			<Ledger x={LX} y={LY} w={LW} h={LH}
				clock={{value: `t = ${fx(t, 2)} s`, t}}
				hor={{rows: HOR_ROWS({none: -30, acc: -30, vel: -30, sx: -30, box: -30}).map(r => ({...r, size: 30}))}}
				ver={{rows: [
					{content: <>F<Sub>y</Sub> = weight, down</>, at: -30},
					{content: <><Q s="a" ax="y" /> = <span style={{color: ROLE.a.ink}}>−9.8<MS2 /></span></>, at: squared - 20, box: squared},
					{content: <><Q s="u" ax="y" /> = 0 <span style={{fontSize: 28, color: INK_SOFT}}>(horizontal launch)</span></>, at: launched + 10, box: zero},
				]}} />
			<Readouts x={LX} y={LY + LH + 24} w={LW} title="ball B, live" rows={[
				{label: <>drop below the edge</>, value: fx(-flightAt(RUN_B, t).y, 3), unit: 'm', color: ROLE.y.ink},
				{label: <>vertical velocity <Q s="v" ax="y" /></>, value: fx(flightAt(RUN_B, t).vy, 2), unit: <MS />, color: ROLE.y.ink, ring: gains},
			]} />
		</>
	);
};
export {DT, H, BENCH_TOP, sy, interpolate};
