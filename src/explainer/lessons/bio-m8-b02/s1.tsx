// M8 B02 scenes 1 to 5: the hook (the spectacled flying fox, the Queensland coast with Cairns, the thermometer and the
// dated 42.6 degree and death-count chips, the three cooling behaviours); endotherms and ectotherms (glosses, the day
// graph with a flat core line and a partly following ectotherm line, the crossed chip, the b01 ring thumbnail); the
// neural pathway (hypothalamus ringed on the brain, warmer blood, the skin receptor pointed at, a nerve line with fast
// pulses); vasodilation (warm skin pointed at, relaxed smooth muscle, flow dashes, heat arrows, the beam tips, the
// crossed "vessels move" chip); sweating (the gland pointed at, beads that evaporate, energy arrows, humid haze).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {NB, S} from './common';
import {
	AMBER, AMBER_INK, Balance, CTag, DLbl, DrawPath, FEAT, GREY_INK, GTag, HEAD, INK, INK_SOFT, MistakeChip, PLATES, Pl, PlateB, QldMap, RingThumb, SkinPair, Sx, TEAL, Thermo, WARM,
	pbPt, prog, qldPt, scribbleEllipse, skinPt, smooth, tiltOf, vis,
} from './parts';
import {EvapDots, HeatArrows, Pointer, SignalPulse, TAxes, TLine} from '../m8-shared/parts';
import type {TG} from '../m8-shared/parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {nov: 'In late November', fnq: 'far north Queensland', cairns: 'Cairns reached', over: 'over forty-two', two: 'In about two', roughly: 'roughly twenty-three', these: 'These animals', pant: 'pant', lick: 'lick themselves', fan: 'fan their', so: 'So how do'});
export const FOX1 = {cx: 400, cy: 560, w: 330};
const MAP = {x: 960, y: 180, w: 460, h: 520};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const [cx, cy] = qldPt(MAP.x, MAP.y, MAP.w, MAP.h);
	const tIn = smooth(prog(f, K1.over, 20));
	return (
		<>
			<Heading text={HEAD} at={K1.so} size={52} />
			<Overlay>
				<PlateB p={PLATES.fox} cx={FOX1.cx} cy={FOX1.cy} w={FOX1.w} o={prog(f, 0, 16)} />
				<GTag x={250} y={930} text="spectacled flying fox" at={10} size={24} />
				<QldMap {...MAP} at={K1.fnq} dotAt={K1.cairns} />
				<g opacity={tIn} transform={`translate(${(1 - tIn) * 80},0)`}><Thermo cx={1650} cy={cy - 40} w={340} /></g>
				{f >= K1.over ? <DrawPath d={`M${cx + 120},${cy} L1500,${cy - 30}`} at={K1.over} dur={12} color={INK_SOFT} width={3} dash="8 8" /> : null}
				<CTag x={960} y={740} text={`Cairns Airport 42.6${NB}°C, 26 Nov 2018`} at={K1.over + 10} color={WARM} size={36} />
				<GTag x={960} y={812} text="Bureau of Meteorology" at={K1.over + 20} size={22} />
				<CTag x={960} y={870} text="about 23,000 died in two days" at={K1.roughly} color={AMBER_INK} size={36} />
				<GTag x={960} y={942} text="published estimate" at={K1.roughly + 12} size={22} />
				{[['pant', K1.pant], ['lick', K1.lick], ['fan wings', K1.fan]].map(([t, a], i) => (
					<Sx key={t as string} x={620} y={380 + i * 90} text={t as string} size={34} color={GREY_INK} hand weight={700} at={a as number} />
				))}
				{void K1.nov}{void K1.two}{void K1.these}
			</Overlay>
		</>
	);
};

// ---------- 2. Endotherms, and the loop you know ----------
const K2 = cues(S('endotherms'), {fox: 'Flying foxes, like', endo: 'are endotherms', make: 'make most', use: 'They use that', steady: 'fairly steady', lizard: 'A lizard', ecto: 'an ectotherm', still: 'still regulates', moving: 'moving between', loop: 'the feedback loop', last: 'last video'});
const G2: TG = {x: 1060, y: 230, w: 720, h: 460, x0: 0, x1: 24, y0: 10, y1: 45};
const AIR = Array.from({length: 25}, (_, i) => [i, 27.5 - 12.5 * Math.cos(((i - 2) / 24) * 2 * Math.PI)] as [number, number]);
const ECTO = AIR.map(([t, a]) => [t, 22 + (a - 15) * 0.55] as [number, number]);
export const SceneEndo: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, 0, 24));
	const gl = 1 - 0.55 * prog(f, K2.loop, 14);
	return (
		<>
			<Heading text="Endotherms, and the loop you know" at={4} size={52} />
			<Overlay>
				<PlateB p={PLATES.fox} cx={400 - 250 * sh} cy={560 - 230 * sh} w={330 - 190 * sh} />
				<g opacity={gl}>
					<CTag x={96} y={500} text="endotherm: most body heat from its own metabolism" at={K2.endo} color={TEAL} size={34} maxW={820} />
					<CTag x={96} y={620} text="ectotherm: most heat from its surroundings" at={K2.ecto} color={AMBER_INK} size={34} maxW={820} />
				</g>
				<MistakeChip x={96} y={740} text="ectotherms can't regulate" at={K2.ecto + 30} cross={K2.still} size={28} />
				<TAxes g={G2} at={K2.use} xLabel="time of day" yLabel="temperature (°C)" yTicks={[10, 20, 30, 40]} size={22} />
				<TLine g={G2} pts={AIR} at={K2.use + 10} dur={60} color="#9a948a" width={5} label="air" size={24} labelDy={-12} />
				<TLine g={G2} pts={[[0, 37], [24, 37]]} at={K2.steady} dur={40} color={TEAL} width={6} label="endotherm core" size={26} />
				<TLine g={G2} pts={ECTO} at={K2.lizard + 20} dur={60} color={AMBER} width={6} label="ectotherm body" size={26} labelDy={34} />
				<RingThumb id="b02s2" g={{cx: 560, cy: 300, R: 80, r: 27}} at={K2.loop - 6} lit={[K2.loop, K2.loop + 8, K2.loop + 16, K2.loop + 24, K2.loop + 32]} minus={K2.loop + 40} />
				<GTag x={680} y={200} text="b01" at={K2.loop} size={22} />
				{void K2.fox}{void K2.make}{void K2.moving}{void K2.last}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 3. Detecting heat, and the neural pathway ----------
const K3 = cues(S('neural-pathway'), {rises: 'When core temperature', thermo: 'thermoreceptors in the', warmer: 'detect warmer blood', skin: 'skin receptors detect', compares: 'compares this with', sends: 'sends nerve impulses', fast: 'fast and targeted', neural: "That's the neural"});
export const BR3 = {cx: 440, cy: 610, w: 560};
export const SK3 = {cx: 1360, cy: 720, w: 600};
export const SceneNeural: React.FC = () => {
	const f = useCurrentFrame();
	const [hx, hy] = pbPt(PLATES.brain, BR3.cx, BR3.cy, BR3.w)(...FEAT.hypo);
	const [nx, ny] = skinPt(SK3.cx, SK3.cy, SK3.w)(...FEAT.nerve);
	return (
		<>
			<Heading text="Detecting heat: the neural pathway" at={4} size={48} />
			<Overlay>
				<Balance tilt={() => 0} at={0} />
				<RingThumb id="b02s3" lit={[undefined, K3.skin, K3.compares]} />
				<PlateB p={PLATES.brain} cx={BR3.cx} cy={BR3.cy} w={BR3.w} o={prog(f, 0, 14)} />
				<SkinPair cx={SK3.cx} cy={SK3.cy} w={SK3.w} o={prog(f, 6, 14)} />
				{f >= K3.thermo ? <DrawPath d={scribbleEllipse(hx, hy, 52, 40, 3)} at={K3.thermo} dur={16} color={AMBER} width={5} /> : null}
				<DLbl x={hx - 60} y={hy + 150} text="hypothalamus" at={K3.thermo + 6} size={32} anchor="middle" />
				<g opacity={vis(f, K3.warmer, undefined, 12)}>
					<line x1={220} x2={660} y1={940} y2={940} stroke="#c8372d" strokeWidth={14} strokeLinecap="round" opacity={0.5 + 0.3 * Math.sin(f / 7)} />
					<Sx x={440} y={1000} text="warmer blood" size={28} color={WARM} anchor="middle" hand weight={700} at={-1000} />
				</g>
				<Pointer from={[1180, 470]} to={[nx, ny]} at={K3.skin} color={AMBER_INK} />
				<DLbl x={900} y={440} text="skin thermoreceptors: detect skin temperature" at={K3.skin + 6} dimAt={K3.sends} size={30} maxW={520} />
				<SignalPulse a={[nx, ny]} b={[hx + 30, hy - 20]} bow={-160} at={K3.skin + 20} until={K3.sends} every={30} dur={34} color={TEAL} trackColor={TEAL} />
				<GTag x={180} y={1020} text={`set point about 37${NB}°C`} at={K3.compares} size={22} />
				<SignalPulse a={[hx + 30, hy + 10]} b={[nx - 40, ny + 120]} bow={140} at={K3.sends} every={f >= K3.fast ? 9 : 22} dur={18} color={AMBER} track trackColor={AMBER_INK} trackWidth={5} dash="none" r={10} />
				<CTag x={760} y={860} text="neural pathway: nerve impulses" at={K3.sends + 10} color={AMBER_INK} size={32} />
				<Sx x={780} y={990} text="fast, targeted" size={30} color={AMBER_INK} hand weight={700} at={K3.fast} />
				{void K3.rises}{void K3.neural}{void TEAL}
			</Overlay>
		</>
	);
};

// ---------- 4. Vasodilation ----------
const K4 = cues(S('vasodilation'), {first: 'First effector', arts: "the skin's arterioles", smooth: 'The smooth muscle', widen: 'so they widen', vaso: "That's vasodilation", more: 'More warm blood', warms: 'the skin warms', loses: 'loses more heat', notice: 'Notice that', dont: "don't move", widen2: 'They widen so'});
export const SK = {cx: 820, cy: 690, w: 740};
export const skinTop = (s = SK) => s.cy + (FEAT.top - 1000.5) * (s.w / 1467);
export const tilt4 = tiltOf([[0, 0], [K4.loses, 10]]);
export const SceneVaso: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 0, 26));
	const cx = 1360 + (SK.cx - 1360) * m, cy = 720 + (SK.cy - 720) * m, w = 600 + (SK.w - 600) * m;
	const P = skinPt(SK.cx, SK.cy, SK.w);
	const [ax, ay] = P(...FEAT.arteriole);
	const [x0, y0] = P(320, 1000), [x1, y1] = P(1690, 1012);
	const flowO = vis(f, K4.more, undefined, 12);
	return (
		<>
			<Heading text="First effector: vasodilation" at={4} size={48} />
			<Overlay>
				<Balance tilt={tilt4} lit={[{side: 'r', at: K4.loses, out: K4.notice}]} />
				<RingThumb id="b02s4" lit={[undefined, undefined, undefined, K4.arts]} />
				<g opacity={1 - m * 0.6}><PlateB p={PLATES.brain} cx={440 - 280 * m} cy={610 + 260 * m} w={560 - 360 * m} /></g>
				<SkinPair cx={cx} cy={cy} w={w} />
				{flowO > 0.01 ? <line x1={x0} y1={y0} x2={x1} y2={y1} stroke="#ffd2c4" strokeWidth={6} strokeDasharray="16 22" strokeDashoffset={-(f - K4.more) * 3} opacity={flowO * 0.9} /> : null}
				<Pointer from={[1330, 560]} to={[ax, ay]} at={K4.arts} color={AMBER_INK} />
				<DLbl x={1340} y={550} text="skin arterioles" at={K4.arts + 6} dimAt={K4.vaso} size={32} />
				<Pl p={PLATES.relaxed} cx={1540} cy={680} w={380} o={vis(f, K4.smooth, undefined, 12)} />
				<GTag x={1340} y={740} text="smooth muscle in the vessel wall, relaxed" at={K4.smooth + 6} size={22} />
				<CTag x={1340} y={820} text="vasodilation: arterioles widen" at={K4.vaso} color={WARM} size={34} />
				<HeatArrows x={500} y={skinTop() + 4} w={640} at={K4.loses} n={5} len={80} />
				<MistakeChip x={1300} y={940} text="vessels move closer to the skin" at={K4.notice} cross={K4.dont + 6} size={26} />
				{void K4.first}{void K4.widen}{void K4.warms}{void K4.widen2}
			</Overlay>
		</>
	);
};

// ---------- 5. Sweating, and why humidity matters ----------
const K5 = cues(S('sweating'), {second: 'Second effector', glands: 'sweat glands release', cooling: 'The cooling comes', evap: 'from evaporation', turning: 'Turning water', energy: 'that energy comes', humid: 'in humid air', slowly: 'evaporates slowly', less: 'far less', pouring: 'still pouring'});
export const tilt5 = tiltOf([[0, 10], [K5.energy, 18], [K5.humid + 20, 7]]);
export const SceneSweat: React.FC = () => {
	const f = useCurrentFrame();
	const P = skinPt(SK.cx, SK.cy, SK.w);
	const [gx, gy] = P(...FEAT.gland);
	const beads = FEAT.beads.map(b => P(...b));
	const top = skinTop();
	const haze = prog(f, K5.humid, 30);
	return (
		<>
			<Heading text="Second effector: sweating" at={4} size={48} />
			<Overlay>
				<Balance tilt={tilt5} lit={[{side: 'r', at: K5.energy, out: K5.humid}]} />
				<RingThumb id="b02s5" lit={[undefined, undefined, undefined, -100]} />
				{haze > 0.01 ? <rect x={380} y={180} width={900} height={top - 190} rx={20} fill="#c9d6dc" opacity={0.45 * haze} /> : null}
				<SkinPair cx={SK.cx} cy={SK.cy} w={SK.w} />
				<Pointer from={[1330, 1000]} to={[gx + 30, gy]} at={K5.glands} color={AMBER_INK} />
				<DLbl x={1340} y={1010} text="sweat gland" at={K5.glands + 6} size={32} />
				<EvapDots pts={beads} at={K5.glands + 10} humid={K5.humid} r={13} />
				<CTag x={1340} y={540} text="cooling comes from evaporation" at={K5.evap} color={TEAL} size={34} maxW={520} dim={prog(f, K5.humid, 10)} />
				{[0, 1, 2].map(i => {
					const [bx, by] = beads[i];
					return <g key={i} opacity={vis(f, K5.energy, K5.humid + 10, 10)}><SignalPulse a={[bx - 20, by + 230]} b={[bx, by - 40]} bow={0} at={K5.energy + i * 6} until={K5.humid} every={20} dur={24} color={WARM} r={7} trackColor={WARM} /></g>;
				})}
				<GTag x={1340} y={640} text={`about 2.4${NB}kJ per gram of water evaporated`} at={K5.energy + 10} size={22} />
				<Sx x={420} y={230} text="humid air" size={32} color={GREY_INK} hand weight={700} at={K5.humid} />
				<MistakeChip x={1300} y={820} text="sweat cools because it is wet" at={K5.less} cross={K5.pouring} size={26} />
				{void K5.second}{void K5.cooling}{void K5.turning}{void K5.slowly}{void HeatArrows}
			</Overlay>
		</>
	);
};
