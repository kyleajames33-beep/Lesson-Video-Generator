// Scenes 7 to 12: every clock slows (a light clock, a spring and a decaying muon on the ship, timed from Earth; then the
// frames swap and Earth's clock runs slow for the ship), how big gamma is (the relativity engine's gamma curve with a
// speed slider, the half-tick triangle and two clocks ticking in the ratio 1 : gamma), the worked muons (working layout
// beside the atmosphere column over the painted cloud chamber), atomic clocks (a coded globe with flight loops beside the
// painted atomic clock) and the CERN storage ring, the worked trip to a star (painted Earth, star and spacecraft) and the
// memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Bracket, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {MemoryCard} from '../../shared/scenes';
import {Disc, EARTH, LPlate} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {Ship} from '../../physics/light/frames';
import {STAR_WHITE} from '../../physics/light/stars';
import {ATOMIC_CLOCK, AtmosColumn, CLOUD_CHAMBER, ClockDial, CurvePlot, Globe, REL_ANCHOR, StorageRing, plotX} from '../../physics/light/relativity';
import type {PlotBox} from '../../physics/light/relativity';
import {nat} from '../../physics/light/thermal';
import {Slider} from '../phys-y12-m7-v04/parts';
import {Ball, Spring} from '../phys-y12-m7-v12/parts';
import {B_CLOCK, B_MU, G_MU, G_RING, G_TRIP, HEAD, HEAD_SIZE, HK_EAST, HK_EAST_U, HK_WEST, HK_WEST_U, JET_GM1, LIFETIMES, RANGE_CLASS_M, RANGE_DIL_M, SURV, SURV_CLASS, TAU0_US, TAU_DIL_US, TAU_RING_US, TRIP_LY, B_TRIP, T_EARTH, T_SHIP, T_SLIP, cap, cue, g} from './common';
import {AMBER, Counter, GREY, Givens, INK, Lbl, ORANGE, Panel, SLATE, Strip, TEAL, VArrow, VIOLET, fx, sci} from './parts';
import {PANELS, TwoPanels, chamberPlace} from './s1';

const G6 = g(B_CLOCK);
const {PL, PR} = PANELS;

// ---------- 7. every clock, and both ways ----------
/** Three processes (light clock, spring, muon decay) in a panel, running at `rate` (1 at rest; 1/γ timed from Earth); `springRate` overrides the spring. */
const Processes: React.FC<{x: number; y: number; t: number; rate: number; springRate?: number; color: string}> = ({x, y, t, rate, springRate, color}) => {
	const tc = t * rate, ts = t * (springRate ?? rate);
	const u = (tc % 1.4) / 1.4, up = u < 0.5 ? u * 2 : 2 - u * 2;
	const sx = x + 440 + 70 * Math.sin((2 * Math.PI * ts) / 1.4);
	const life = (tc % 2.8) / 2.8;
	return (
		<g>
			<line x1={x + 20} y1={y + 400} x2={x + 160} y2={y + 400} stroke={INK} strokeWidth={8} strokeLinecap="round" />
			<line x1={x + 20} y1={y + 60} x2={x + 160} y2={y + 60} stroke={INK} strokeWidth={8} strokeLinecap="round" />
			<circle cx={x + 90} cy={y + 390 - 320 * up} r={12} fill={AMBER.stroke} stroke="#fff" strokeWidth={3} />
			<line x1={x + 230} y1={y + 90} x2={x + 230} y2={y + 210} stroke={INK} strokeWidth={7} />
			<Spring x0={x + 230} x1={sx - 34} y={y + 150} coils={10} amp={18} />
			<Ball cx={sx} cy={y + 150} d={70} />
			<circle cx={x + 250} cy={y + 340} r={16} fill={SLATE.stroke} opacity={life < 0.92 ? 1 : 0} />
			{life >= 0.92 ? <circle cx={x + 250} cy={y + 340} r={18 + 120 * (life - 0.92)} fill="none" stroke={SLATE.stroke} strokeWidth={4} /> : null}
			<rect x={x + 290} y={y + 324} width={220} height={32} rx={8} fill="none" stroke={color} strokeWidth={3.5} />
			<rect x={x + 293} y={y + 327} width={214 * Math.min(1, life / 0.92)} height={26} rx={6} fill={color} opacity={0.5} />
		</g>
	);
};
export const S07: React.FC = () => {
	const id = 'every-clock';
	const f = useCurrentFrame();
	const cmp = cue(id, 'compare them inside the cabin'), brk = cue(id, 'break the first postulate'), ea = cue(id, 'Earth'), both = cue(id, 'And it works both ways'), sl = cap(id, cue(id, 'slow', 3));
	const t = f / 30;
	const mism = f >= cmp && f < ea;
	const swap = prog(f, both, 24);
	const ex = 1500 - 520 * prog(f, both + 10, 120);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={1 - swap}>
					<Panel x={PL.x} y={PL.y} w={PL.w} h={PL.h} title="ship frame (at rest)" color={TEAL.stroke} />
					<Panel x={PR.x} y={PR.y} w={PR.w} h={PR.h} title="Earth frame (ship moving)" color={INK} />
					<Processes x={PL.x + 30} y={PL.y + 50} t={t} rate={1} color={TEAL.stroke} />
					<Processes x={PR.x + 30} y={PR.y + 50} t={t} rate={1 / G6} springRate={mism ? 1 : 1 / G6} color={INK} />
					<VArrow a={[PR.x + 700, PR.y + 480]} b={[PR.x + 900, PR.y + 480]} />
				</g>
				{swap > 0.001 ? <g opacity={swap}>
					<Ship p={{x: 140, y: 420, w: 640}} />
					<Disc spec={EARTH} cx={ex} cy={520} d={240} />
					<VArrow a={[ex + 60, 700]} b={[ex - 180, 700]} />
					<ClockDial cx={460} cy={330} r={46} t={t} color={TEAL.stroke} />
					<ClockDial cx={ex} cy={300} r={46} t={t / G6} color={INK} />
				</g> : null}
			</FrameSvg>
			<Lbl x={PL.x + 50} y={PL.y + PL.h - 34} at={0} out={both} color={TEAL.ink} size={28}>light clock, spring, muon decay</Lbl>
			<Lbl x={PR.x + 50} y={PR.y + PR.h - 34} at={0} out={both} color={INK} size={28}>the same three, timed from Earth</Lbl>
			<Lbl x={PR.x + 700} y={PR.y + 440} at={0} out={both} color={ORANGE.ink} size={30}>v</Lbl>
			<HandTag x={PR.x + 620} y={PR.y + 140} text="if only the light clock slowed?" at={cmp} out={ea} size={32} color={SLATE.ink} />
			<HandTag x={PR.x + 620} y={PR.y + 200} text="mismatch would reveal motion" at={cmp + 24} out={ea} size={32} color={SLATE.ink} />
			<Chip x={PR.x + 620} y={PR.y + 260} at={brk} out={ea} size={30} color={SLATE.ink} border={SLATE.stroke}>breaks postulate 1</Chip>
			<HandTag x={PR.x + 620} y={PR.y + 170} text="all slow by γ" at={ea + 6} out={both} size={40} color={VIOLET.ink} />
			<Lbl x={300} y={250} at={both + 10} color={TEAL.ink} size={34}>ship frame: held still</Lbl>
			<Lbl x={ex - 120} y={250} at={both + 10} color={INK} size={30}>Earth's clock</Lbl>
			<HandTag x={ex - 200} y={800} text="both ways" at={sl} size={40} color={ORANGE.ink} />
			<Lbl x={140} y={800} at={both + 30} color={INK} size={32}>to the ship, Earth's clocks run slow</Lbl>
		</>
	);
};

// ---------- 8. how big is gamma? ----------
const GB: PlotBox = {x: 900, y: 250, w: 800, h: 520, yMax: 12};
export const S08: React.FC = () => {
	const id = 'gamma-size';
	const f = useCurrentFrame();
	const one = cue(id, 'almost exactly one'), jet = cue(id, 'nine hundred kilometres per hour'), s6 = cue(id, 'zero point six c'), s8 = cue(id, 'zero point eight c'), s9 = cue(id, 'zero point nine nine five c'), lim = cap(id, cue(id, 'limit'));
	const b = kf(f, [[0, 0.02], [s6, 0.02], [s6 + 30, 0.6], [s8, 0.6], [s8 + 30, 0.8], [s9, 0.8], [s9 + 16, 0.9], [s9 + 36, 0.9], [s9 + 60, 0.995]]);
	const gam = g(b);
	const t = f / 30;
	const d = 140, base = Math.min(b * gam * d, 280), clipped = b * gam * d > 280;
	const A = [520, 670];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CurvePlot b={GB} f={g} color={VIOLET.stroke} betaMax={f >= lim ? 0.9995 : 0.995} asym={prog(f, lim, 20)} marker={b} yTicks={[1, 4, 8, 12]} xTicks={[0, 0.5, 1]} xLabel="v/c" yLabel="γ" size={30} />
				<Slider x={GB.x} y={880} w={GB.w} v0={0} v1={1} v={b} ticks={[0, 0.6, 0.8, 1]} fmt={x => `${x}c`} color={ORANGE.stroke} label="speed" />
				<line x1={A[0]} y1={A[1]} x2={A[0]} y2={A[1] - d} stroke={TEAL.stroke} strokeWidth={6} />
				<line x1={A[0]} y1={A[1]} x2={A[0] + base} y2={A[1] - d} stroke={INK} strokeWidth={6} strokeDasharray={clipped ? '18 8' : undefined} />
				<ClockDial cx={240} cy={800} r={50} t={t / gam} color={TEAL.stroke} />
				<ClockDial cx={560} cy={800} r={50} t={t} color={INK} />
			</FrameSvg>
			<Lbl x={96} y={240} at={0} color={ORANGE.ink} size={52}>{`v = ${fx(b, b > 0.99 ? 3 : 2)}c`}</Lbl>
			<Lbl x={480} y={240} at={0} color={VIOLET.ink} size={52}>{`γ = ${fx(gam, gam > 9.95 ? 1 : 2)}`}</Lbl>
			<Lbl x={96} y={330} at={0} color={INK} size={28}>{'1 ship tick = γ ticks’ time on Earth'}</Lbl>
			<Lbl x={A[0] - 30} y={A[1] - d / 2} at={0} color={TEAL.ink} size={28} anchor="end">ship</Lbl>
			<Lbl x={A[0] + 20} y={A[1] + 34} at={0} color={INK} size={28}>{clipped ? 'Earth slant (clipped)' : 'Earth slant'}</Lbl>
			<Lbl x={240} y={892} at={0} color={TEAL.ink} size={28} anchor="middle">ship clock</Lbl>
			<Lbl x={560} y={892} at={0} color={INK} size={28} anchor="middle">Earth clock</Lbl>
			<Chip x={96} y={360} at={jet} size={28} w={720} color={INK}>{`900 km h⁻¹: γ − 1 ≈ ${sci(JET_GM1, 0)} (atomic clocks can detect this)`}</Chip>
			<Lbl x={96} y={520} at={s6 + 30} color={VIOLET.ink} size={32}>{`0.6c: γ = ${fx(g(0.6), 2)}`}</Lbl>
			<Lbl x={96} y={568} at={s8 + 30} color={VIOLET.ink} size={32}>{`0.8c: γ = ${fx(g(0.8), 2)}`}</Lbl>
			<Lbl x={96} y={616} at={s9 + 16} color={VIOLET.ink} size={32}>{`0.9c: γ = ${fx(g(0.9), 2)}`}</Lbl>
			<Lbl x={96} y={664} at={s9 + 60} color={VIOLET.ink} size={32}>{`0.995c: γ = ${fx(g(0.995), 1)}`}</Lbl>
			<HandTag x={plotX(GB, 1) - 20} y={GB.y - 30} text="γ → ∞ as v → c" at={lim + 6} size={36} color={VIOLET.ink} anchor="end" marks={[{kind: 'arrow', from: [plotX(GB, 1) + 26, GB.y + 300], to: [plotX(GB, 1) + 26, GB.y + 20], bend: 0}]} />
			<Lbl x={GB.x + 20} y={GB.y + GB.h - 90} at={one} color={GREY.ink} size={28}>everyday speeds: γ ≈ 1</Lbl>
		</>
	);
};

// ---------- 9. worked example: the muons ----------
const COL9 = {x: 1540, y: 300, w: 250, h: 540};
const pxPerM = COL9.h / 15000;
export const S09: React.FC = () => {
	const id = 'worked-muons';
	const f = useCurrentFrame();
	const gt = cue(id, 'gamma is ten point zero'), m1 = cue(id, 'microseconds'), m2 = cue(id, 'microseconds', 2), me = cue(id, 'metres'), lt = cue(id, 'two point three average lifetimes'), one = cue(id, 'roughly one muon in ten survives'), no = cap(id, cue(id, 'none'));
	const ground = COL9.y + COL9.h;
	const cp = chamberPlace(COL9.x + COL9.w / 2, ground, 130);
	const dil = RANGE_DIL_M * pxPerM;
	const ride = COL9.y + 40 + Math.min(1, Math.max(0, (f - m1) / 600)) * 200;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={168} at={2} size={32}>{"Find the muon's lifetime and range in Earth's frame."}</Strip>
			<Strip x={96} y={236} at={6} size={36}>t = t₀ / √(1 − v²/c²) = γt₀</Strip>
			<Givens x={96} y={312} w={1080} at={10} size={30} lines={[`muon: v = ${B_MU}c;  t₀ = ${fx(TAU0_US, 1)} μs (proper: the muon's own clock)`, `atmosphere: 15 km (Earth frame);  c = 3.00 × 10⁸ m s⁻¹`]} />
			<FrameSvg>
				<AtmosColumn x={COL9.x} y={COL9.y} w={COL9.w} h={COL9.h} f={f} decayPx={COL9.h / LIFETIMES} speed={6} n={20} dot={SLATE.stroke} label="sea level" />
				<LPlate spec={CLOUD_CHAMBER} p={cp} />
				{f >= m1 ? <g opacity={prog(f, m1, 12)}><circle cx={COL9.x + 40} cy={ride} r={12} fill={SLATE.stroke} stroke="#fff" strokeWidth={2.5} /><ClockDial cx={COL9.x + 84} cy={ride} r={24} t={f / 30} color={TEAL.stroke} /></g> : null}
				<Bracket x1={COL9.x + COL9.w + 20} y1={COL9.y} x2={COL9.x + COL9.w + 20} y2={COL9.y + RANGE_CLASS_M * pxPerM} color={SLATE.stroke} at={me} />
				<Bracket x1={COL9.x - 30} y1={COL9.y} x2={COL9.x - 30} y2={COL9.y + dil} color={INK} at={me + 10} />
				{f >= lt ? [1, 2].map(k => <g key={k} opacity={prog(f, lt + k * 8, 10)}><line x1={COL9.x} y1={COL9.y + k * (COL9.h / LIFETIMES)} x2={COL9.x + COL9.w} y2={COL9.y + k * (COL9.h / LIFETIMES)} stroke={INK} strokeWidth={3} strokeDasharray="10 7" /><text x={COL9.x + COL9.w - 10} y={COL9.y + k * (COL9.h / LIFETIMES) - 8} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>{String(k)}</text></g>) : null}
			</FrameSvg>
			<Lbl x={COL9.x - 50} y={COL9.y + 30} at={m1 + 6} color={TEAL.ink} size={26} anchor="end">t₀ = 2.2 μs (muon's clock)</Lbl>
			<Lbl x={COL9.x + COL9.w + 34} y={COL9.y + 14} at={me} color={SLATE.ink} size={26}>{`${fx(Math.round(RANGE_CLASS_M / 10) * 10)} m`}</Lbl>
			<Lbl x={COL9.x - 50} y={COL9.y + dil / 2 + 40} at={me + 10} color={INK} size={30} anchor="end">{`≈ ${fx(RANGE_DIL_M / 1000, 1)} km`}</Lbl>
			<Lbl x={COL9.x + COL9.w} y={COL9.y - 26} at={lt} color={INK} size={28} anchor="end">{`15 km ≈ ${fx(LIFETIMES, 1)} dilated lifetimes`}</Lbl>
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 12, width: 1300}}>
				<Row at={gt} ageAt={me} size={52}>{`γ = 1 / √(1 − ${B_MU}²) = ${fx(G_MU, 1)}`}</Row>
				<Row at={m2 - 6} ageAt={me + 20} size={52}><AnswerBox at={m2}>{`t = ${fx(G_MU, 1)} × ${fx(TAU0_US, 1)} μs = ${fx(TAU_DIL_US)} μs (Earth frame)`}</AnswerBox></Row>
				<Row at={me - 6} size={44}><AnswerBox at={me}>{`range = ${B_MU} × 3.00 × 10⁸ × ${fx(TAU_DIL_US)} × 10⁻⁶ ≈ ${fx(RANGE_DIL_M / 1000, 1)} km`}</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={720} at={me + 24} crossAt={me + 40} size={30} caption="mixes the muon's time with Earth's distance">{`range = ${B_MU}c × ${fx(TAU0_US, 1)} μs = ${fx(Math.round(RANGE_CLASS_M / 10) * 10)} m`}</CrossedChip>
			<Strip x={760} y={720} at={one} size={34}>{`≈ 1 in ${fx(1 / SURV)} reach sea level (classically ≈ 1 in 10¹⁰)`}</Strip>
			<Lbl x={760} y={820} at={no} color={GREY.ink} size={26}>{`ideal model: constant ${B_MU}c, no energy loss (classical e^(−22.8) = ${sci(SURV_CLASS, 1)})`}</Lbl>
		</>
	);
};

// ---------- 10. atomic clocks and accelerators ----------
const GL = {cx: 470, cy: 570, r: 190};
const ACP: Place = {x: 1060, y: 210, w: 400};
export const S10: React.FC = () => {
	const id = 'clocks-accelerators';
	const f = useCurrentFrame();
	const ew = cue(id, 'eastward and then westward'), lost = cue(id, 'lost about fifty nine nanoseconds'), gain = cue(id, 'gained about two hundred and seventy three'), alt = cue(id, 'altitude'), cern = cue(id, 'And at CERN'), liv = cue(id, 'lived about twenty nine times longer'), rest = cap(id, cue(id, 'rest'));
	const out = prog(f, cern, 20);
	const disp0 = nat(ATOMIC_CLOCK, ACP, REL_ANCHOR.clockDisplay[0], REL_ANCHOR.clockDisplay[1]), disp1 = nat(ATOMIC_CLOCK, ACP, REL_ANCHOR.clockDisplay[2], REL_ANCHOR.clockDisplay[3]);
	const reading = f < lost ? '0 ns' : f < gain ? `${HK_EAST} ns` : `+${HK_WEST} ns`;
	const fillRest = prog(f, liv, 8), fillRing = prog(f, liv, 70);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={1 - out}>
					<Globe cx={GL.cx} cy={GL.cy} r={GL.r} east={prog(f, ew, 40)} west={prog(f, ew + 40, 40)} eastColor={ORANGE.stroke} westColor={VIOLET.stroke} t={f / 30} />
					<ClockDial cx={GL.cx + 70} cy={GL.cy + 40} r={28} t={f / 30} color={INK} />
					<LPlate spec={ATOMIC_CLOCK} p={ACP} />
					<rect x={disp0[0]} y={disp0[1]} width={disp1[0] - disp0[0]} height={disp1[1] - disp0[1]} rx={4} fill="#2a1d18" />
					<text x={(disp0[0] + disp1[0]) / 2} y={disp1[1] - 8} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: '#ff8a5c'}}>{reading}</text>
				</g>
				{out > 0.001 ? <g opacity={out}><StorageRing cx={1290} cy={570} r={250} t={f / 30} period={2.2} dot={SLATE.stroke} n={4} /></g> : null}
				{f >= liv ? <g>
					<rect x={96} y={520} width={22 * 10} height={30} rx={6} fill="none" stroke={TEAL.stroke} strokeWidth={3} />
					<rect x={98} y={522} width={(TAU0_US * 10) * fillRest} height={26} rx={5} fill={TEAL.stroke} opacity={0.6} />
					<rect x={96} y={680} width={TAU_RING_US * 10} height={30} rx={6} fill="none" stroke={VIOLET.stroke} strokeWidth={3} />
					<rect x={98} y={682} width={TAU_RING_US * 10 * fillRing} height={26} rx={5} fill={VIOLET.stroke} opacity={0.6} />
				</g> : null}
			</FrameSvg>
			<Chip x={1060} y={480} at={0} out={cern} size={32} color={INK}>Hafele and Keating, October 1971</Chip>
			<Lbl x={1480} y={330} at={0} out={cern} color={INK} size={28}>caesium atomic clock</Lbl>
			<Lbl x={1480} y={372} at={0} out={cern} color={INK} size={28}>(flown on airliners)</Lbl>
			<Lbl x={96} y={240} at={0} out={cern} color={INK} size={28}>seen from above the North Pole</Lbl>
			<Lbl x={GL.cx} y={GL.cy + GL.r + 140} at={0} out={cern} color={INK} size={26} anchor="middle">ground clocks (US Naval Observatory)</Lbl>
			<Lbl x={GL.cx + GL.r + 40} y={GL.cy - GL.r - 30} at={ew} out={cern} color={ORANGE.ink} size={28}>eastward</Lbl>
			<Lbl x={GL.cx - GL.r - 120} y={GL.cy - GL.r - 60} at={ew + 40} out={cern} color={VIOLET.ink} size={28} anchor="end">westward</Lbl>
			<Lbl x={1060} y={600} at={lost} out={cern} color={ORANGE.ink} size={44}>{`eastbound: −${Math.abs(HK_EAST)} ± ${HK_EAST_U} ns`}</Lbl>
			<Lbl x={1060} y={668} at={gain} out={cern} color={VIOLET.ink} size={44}>{`westbound: +${HK_WEST} ± ${HK_WEST_U} ns`}</Lbl>
			<HandTag x={1660} y={632} text="opposite signs" at={gain + 16} out={cern} size={34} color={INK} marks={[{kind: 'brace', x: 1610, y1: 570, y2: 690, facing: 'right'}]} />
			<Chip x={1060} y={716} at={alt} out={cern} size={28} w={760} color={INK}>speed effect (special relativity) + altitude effect (gravity: general relativity)</Chip>
			<Chip x={1060} y={830} at={alt + 20} out={cern} size={26} w={760} color={GREY.ink}>{"eastbound moves faster than the ground, westbound slower, measured from Earth's centre"}</Chip>
			<Lbl x={1290} y={260} at={cern + 10} color={INK} size={34} anchor="middle">CERN storage ring, 1977</Lbl>
			<Lbl x={1290} y={580} at={cern + 10} color={SLATE.ink} size={30} anchor="middle">muons circling</Lbl>
			<Lbl x={96} y={490} at={liv} color={TEAL.ink} size={52}>{`at rest: ${fx(TAU0_US, 1)} μs`}</Lbl>
			<Lbl x={96} y={650} at={liv + 6} color={VIOLET.ink} size={52}>{`in the ring (γ ≈ ${fx(G_RING)}): ≈ ${fx(TAU_RING_US)} μs`}</Lbl>
			<HandTag x={96} y={800} text={`${fx(G_RING)} × longer, as γ predicts`} at={rest} size={38} color={VIOLET.ink} />
		</>
	);
};

// ---------- 11. worked example: a trip to a star ----------
export const TRIP = {earth: {cx: 200, cy: 330, d: 150}, star: {cx: 1720, cy: 330, d: 70}, by: 450, shipY: 290, shipW: 240};
export const TripPicture: React.FC<{f: number; shipX: number; clocks?: number; pulse?: number; dx?: number}> = ({f, shipX, clocks = 1, pulse = 0, dx = 0}) => {
	const T = TRIP;
	const sp: Place = {x: shipX, y: T.shipY, w: T.shipW};
	return (
		<g>
			<Disc spec={EARTH} cx={T.earth.cx + dx} cy={T.earth.cy} d={T.earth.d} />
			<Disc spec={STAR_WHITE} cx={T.star.cx + dx} cy={T.star.cy} d={T.star.d} />
			<Ship p={sp} />
			<ClockDial cx={T.earth.cx + dx + 120} cy={T.earth.cy - 70} r={26} t={f / 30} color={INK} opacity={clocks} />
			<ClockDial cx={T.star.cx + dx - 80} cy={T.star.cy - 70} r={26} t={f / 30} color={INK} opacity={clocks} />
			<ClockDial cx={shipX + T.shipW / 2} cy={T.shipY - 40} r={26} t={f / 30 / G_TRIP} color={TEAL.stroke} opacity={clocks} ring={pulse} />
		</g>
	);
};
export const S11: React.FC = () => {
	const id = 'worked-trip';
	const f = useCurrentFrame();
	const wc = cue(id, 'Which clock measures proper time?'), lv = cue(id, 'leaving Earth and arriving at the star'), y1 = cue(id, 'years'), gm = cue(id, 'Gamma at zero point eight c'), fif = cue(id, 'fifteen over one point six seven'), y2 = cap(id, cue(id, 'years', 2));
	const shipX = 300 + kf(f, [[lv, 0], [lv + 90, 1]]) * 1130;
	const pulse = f >= lv && f < lv + 20 ? 1 - (f - lv) / 20 : f >= lv + 90 && f < lv + 110 ? 1 - (f - lv - 90) / 20 : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<TripPicture f={f} shipX={shipX} clocks={prog(f, wc, 12)} pulse={pulse} />
				<Bracket x1={TRIP.earth.cx} y1={TRIP.by} x2={TRIP.star.cx} y2={TRIP.by} color={INK} at={0} label="12 ly (Earth frame)" size={32} ly={TRIP.by + 36} />
				<VArrow a={[shipX + 250, TRIP.shipY + 40]} b={[shipX + 330, TRIP.shipY + 40]} opacity={f < lv + 90 ? 1 : 0} />
			</FrameSvg>
			<Lbl x={shipX + 340} y={TRIP.shipY + 30} at={0} out={lv + 60} color={ORANGE.ink} size={30}>{`${B_TRIP}c`}</Lbl>
			<Lbl x={TRIP.star.cx} y={TRIP.star.cy + 70} at={0} color={INK} size={28} anchor="middle">star</Lbl>
			<Lbl x={TRIP.star.cx - 80} y={TRIP.star.cy - 120} at={wc + 6} color={INK} size={26} anchor="middle">synchronised in Earth's frame</Lbl>
			<Lbl x={96} y={560} at={0} color={GREY.ink} size={26}>not to scale</Lbl>
			<HandTag x={700} y={210} text="proper time: ship's clock" at={lv + 20} size={34} color={TEAL.ink} />
			<Strip x={96} y={590} at={4} size={32}>{"Find the trip time in Earth's frame and on the ship's clock."}</Strip>
			<Givens x={1100} y={590} w={720} at={8} size={30} lines={[`distance ${TRIP_LY} ly (Earth frame);  v = ${B_TRIP}c`]} />
			<div style={{position: 'absolute', left: 96, top: 670, display: 'flex', flexDirection: 'column', gap: 10, width: 1100}}>
				<Row at={y1 - 6} ageAt={fif} size={52}><AnswerBox at={y1}>{`t = ${TRIP_LY} ly / ${B_TRIP}c = ${fx(T_EARTH)} years (Earth frame)`}</AnswerBox></Row>
				<Row at={gm} size={44}><span style={{color: VIOLET.ink}}>{`γ = 1 / √(1 − ${B_TRIP}²) = ${fx(G_TRIP, 2)}`}</span></Row>
				<Row at={fif - 6} size={52}><AnswerBox at={fif + 4}><span style={{color: TEAL.ink}}>{`t₀ = t / γ = ${fx(T_EARTH)} / ${fx(G_TRIP, 2)} = ${fx(T_SHIP, 1)} years (ship)`}</span></AnswerBox></Row>
			</div>
			<CrossedChip x={1260} y={720} at={y2} crossAt={y2 + 10} size={30} caption="proper time is the shortest">{`ship: ${fx(T_EARTH)} × ${fx(G_TRIP, 2)} = ${fx(T_SLIP)} years`}</CrossedChip>
		</>
	);
};

// ---------- 12. a way to remember ----------
const MX = 260, MY = 380, MK = 0.72;
const mx = (x: number) => MX + MK * x, my = (y: number) => MY + MK * y;
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const mv = cue(id, 'Moving clocks run slow'), ev = cap(id, cue(id, 'events'));
	const nL = Math.floor(f / 40), nR = Math.floor(f / (40 * G6));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 260, top: 160, width: 1400}}>
				<MemoryCard at={mv - 10} main={<><span style={{color: INK}}>Moving clocks run slow.</span> <span style={{color: TEAL.ink}}>Proper time is the shortest, on the clock at both events.</span></>} />
			</div>
			<FrameSvg>
				<g transform={`translate(${MX} ${MY}) scale(${MK})`}>
					<TwoPanels tauL={f / 40} tauR={f / 40} cycleR={2} />
				</g>
				<ClockDial cx={mx(PL.x + PL.w / 2 - 170)} cy={my(560)} r={30} t={f / 30} color={TEAL.stroke} ring={f >= ev ? Math.sin(Math.PI * Math.min(1, (f - ev) / 24)) : 0} />
			</FrameSvg>
			<Counter x={mx(PL.x + 30)} y={my(PL.y + 90)} n={nL} color={TEAL.ink} size={34} />
			<Counter x={mx(PR.x + PR.w - 300)} y={my(PR.y + 90)} n={nR} color={INK} size={34} />
			<HandTag x={mx(PR.x + PR.w - 300)} y={my(PR.y + 150)} text="lags" at={mv + 10} size={34} color={INK} />
		</>
	);
};
