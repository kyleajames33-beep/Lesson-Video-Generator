// M8 B02 scenes 6 to 11: the cold side (warm skin cross-fades to cold; narrowed arterioles, contracted smooth muscle, the
// shivering muscle and the raised hair pointed at; the beam tips to heat gained) and the hormonal pathway (thyroxine in a
// wavy vessel line, slow against a fast nerve pulse); three types of adaptation (columns with skin, a coded shade tree and
// the seal); the red kangaroo (shade patch, chips dropping into the three types, the forearm inset with evaporating saliva,
// three lines from one forearm); trends (two head outlines, the seal, the countercurrent pair); the limits (hot air adds
// heat, evaporation slows as water runs short, the thermometer keeps climbing); the memory lines.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {NB, S} from './common';
import {
	AMBER, AMBER_INK, Balance, COOL, CTag, DLbl, DrawPath, FEAT, GREY_INK, GTag, HeadOutline, INK, INK_SOFT, MistakeChip, PLATES, Pl, PlateB, RingThumb, Shade, SkinPair, Sx, TEAL, Thermo,
	WARM, pbPt, prog, skinPt, smooth, tiltOf, vis,
} from './parts';
import {SK} from './s1';
import {Countercurrent, EvapDots, HeatArrows, Pointer, SignalPulse, tremor} from '../m8-shared/parts';

// ---------- 6. The cold side, and the hormonal pathway ----------
const K6 = cues(S('cold-and-hormones'), {cold: 'In the cold', saw: 'as you saw', narrow: 'Arterioles narrow', shiver: 'muscles shiver', hairs: 'hairs stand up', hormones: 'Hormones help too', many: 'In many mammals', thyrox: 'thyroxine', thyroid: 'thyroid gland', heat: 'make more heat', travel: 'Hormones travel', slower: 'slower than nerves', last: 'effects last longer', horm: "That's the hormonal", together: 'work together'});
export const SceneCold: React.FC = () => {
	const f = useCurrentFrame();
	const cold = smooth(prog(f, 8, 30));
	const B = smooth(prog(f, K6.hormones, 30));
	const cx = SK.cx + (330 - SK.cx) * B, cy = SK.cy + (560 - SK.cy) * B, w = SK.w + (380 - SK.w) * B;
	const P = skinPt(SK.cx, SK.cy, SK.w);
	const [vx, vy] = P(1000, 905), [hx, hy] = P(...FEAT.hairTop), [mx, my] = P(...FEAT.hairMuscle);
	const aOut = K6.hormones;
	const mus = {x: 1560 + (0) * B, y: 900 - 140 * B, w: 260 + 40 * B};
	const glow = vis(f, K6.heat, undefined, 20);
	const [bx, by] = pbPt(PLATES.brain, 720, 520, 300)(...FEAT.hypo);
	return (
		<>
			<Heading text="The cold side, and the hormonal pathway" at={4} size={46} />
			<Overlay>
				<Balance tilt={tiltOf([[0, 7], [K6.narrow, -14]])} lit={[{side: 'l', at: K6.narrow, out: K6.hormones}]} />
				<RingThumb id="b02s6" g={{cx: 190, cy: 880, R: 76, r: 26}} lit={[]} minus={-100} />
				<GTag x={270} y={790} text="b01" at={K6.saw} size={22} />
				<SkinPair cx={cx} cy={cy} w={w} cold={cold} dim={B} />
				<g opacity={1 - prog(f, aOut, 14)}>
					<Pointer from={[1330, 560]} to={[vx, vy]} at={K6.narrow} color={AMBER_INK} />
					<DLbl x={1340} y={550} text="vasoconstriction: arterioles narrow" at={K6.narrow + 6} dimAt={K6.shiver} size={30} maxW={520} />
					<Pl p={PLATES.contracted} cx={1500} cy={690} w={300} o={vis(f, K6.narrow + 10, undefined, 12)} />
					<GTag x={1640} y={670} text="contracted" at={K6.narrow + 16} size={22} />
					<Pointer from={[420, 300]} to={[hx, hy + 40]} at={K6.hairs} color={AMBER_INK} />
					<Pointer from={[420, 300]} to={[mx, my]} at={K6.hairs + 8} color={AMBER_INK} />
					<GTag x={150} y={250} text="piloerection" at={K6.hairs} size={24} />
					<GTag x={150} y={330} text="helps furry animals far more than humans" at={K6.hairs + 10} size={20} />
				</g>
				{glow > 0.01 ? <ellipse cx={mus.x} cy={mus.y} rx={mus.w * 0.62} ry={mus.w * 0.4} fill={AMBER} opacity={0.3 * glow} /> : null}
				<g transform={`translate(${tremor(f, vis(f, K6.shiver, K6.hairs, 6), 3)},0)`}><Pl p={PLATES.muscle} cx={mus.x} cy={mus.y} w={mus.w} o={vis(f, K6.shiver - 6, undefined, 12)} /></g>
				<Sx x={mus.x} y={mus.y + 110} text="shivering muscle" size={26} color={INK} anchor="middle" hand weight={700} at={K6.shiver} out={K6.hormones} />
				<PlateB p={PLATES.brain} cx={720} cy={520} w={300} o={vis(f, K6.hormones + 30, undefined, 14)} />
				<CTag x={560} y={230} text="thyroxine: thyroid hormone, raises cells' metabolic rate" at={K6.thyrox} color={TEAL} size={28} maxW={640} />
				<GTag x={560} y={330} text="in many mammals, over days to weeks" at={K6.thyrox + 10} size={20} />
				<g opacity={vis(f, K6.thyroid, undefined, 10)}>
					<circle cx={720} cy={770} r={14} fill="#c98a9a" stroke={INK_SOFT} strokeWidth={2} />
					<Sx x={720} y={730} text="thyroid gland" size={24} color={INK} anchor="middle" hand weight={700} at={-1000} />
				</g>
				<SignalPulse a={[740, 780]} b={[mus.x - 150, mus.y + 20]} bow={30} at={K6.thyroid + 10} every={60} dur={110} color={TEAL} r={10} track trackColor="#c8372d" trackWidth={9} dash="none" wavy />
				<GTag x={1380} y={890} text="more heat from respiration" at={K6.heat} size={22} />
				<SignalPulse a={[bx + 20, by - 10]} b={[mus.x - 150, mus.y - 40]} bow={-80} at={K6.slower} every={14} dur={14} color={AMBER} r={9} track trackColor={AMBER_INK} dash="none" />
				<Sx x={900} y={930} text="neural: fast, targeted" size={30} color={AMBER_INK} hand weight={700} at={K6.slower} />
				<Sx x={900} y={990} text="hormonal: slower, longer-lasting" size={30} color={TEAL} hand weight={700} at={K6.last} />
				<GTag x={560} y={1020} text="adrenaline also raises heat production quickly" at={K6.horm} size={20} />
				{void K6.cold}{void K6.many}{void K6.travel}{void K6.together}{void WARM}{void COOL}
			</Overlay>
		</>
	);
};

// ---------- 7. Three types of adaptation ----------
const K7 = cues(S('three-types'), {these: 'These responses', phys: 'Physiological adaptations', beh: 'Behavioural adaptations', struct: 'Structural adaptations', fur: 'like fur', there: 'there all the time'});
export const TreeShade: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			<ellipse cx={0} cy={130} rx={170} ry={26} fill="#3f5d6e" opacity={0.18} />
			<rect x={-14} y={10} width={28} height={120} rx={8} fill="#cfc6b6" stroke={GREY_INK} strokeWidth={3} />
			<path d="M-120,20 C-160,-40 -110,-110 -40,-100 C-20,-150 60,-150 80,-100 C150,-110 170,-30 120,20 C80,50 -80,50 -120,20 Z" fill="#e3e6df" stroke={GREY_INK} strokeWidth={3} />
		</g>
	);
};
const COLS = [{x: 120, key: 'phys'}, {x: 720, key: 'beh'}, {x: 1320, key: 'struct'}];
export const SceneTypes: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Three types of adaptation" at={4} size={52} />
			<Overlay>
				<Balance tilt={tiltOf([[0, -14], [10, 0]])} />
				<CTag x={COLS[0].x} y={420} text="physiological: body processes that switch on and off" at={K7.phys} color={TEAL} size={32} maxW={470} dim={prog(f, K7.beh, 10)} />
				<CTag x={COLS[1].x} y={420} text="behavioural: actions the animal takes" at={K7.beh} color={AMBER_INK} size={32} maxW={470} dim={prog(f, K7.struct, 10)} />
				<CTag x={COLS[2].x} y={420} text="structural: body features, there all the time" at={K7.struct} color={WARM} size={32} maxW={470} />
				<Pl p={PLATES.warm} cx={360} cy={760} w={320} o={vis(f, K7.phys + 10, undefined, 14)} />
				<Sx x={360} y={950} text="sweating, vasodilation" size={26} color={INK_SOFT} anchor="middle" hand weight={700} at={K7.phys + 20} />
				<TreeShade x={960} y={740} at={K7.beh + 10} />
				<Sx x={960} y={950} text="moving into shade" size={26} color={INK_SOFT} anchor="middle" hand weight={700} at={K7.beh + 20} />
				<Pl p={PLATES.seal} cx={1560} cy={760} w={420} o={vis(f, K7.struct + 10, undefined, 14)} />
				<GTag x={1400} y={920} text="blubber under the skin" at={K7.fur + 10} size={22} />
				{void K7.these}{void K7.there}{void COLS}
			</Overlay>
		</>
	);
};

// ---------- 8. The red kangaroo uses all three ----------
const K8 = cues(S('red-kangaroo'), {roo: 'The red kangaroo', hot: 'On a hot', shade: 'rests in shade', beh: "That's behavioural", pants: 'It pants', phys: "That's physiological", licks: 'licks its forearms', dense: 'a dense network', saliva: 'The saliva evaporates', licking: 'Licking is a', vessel: 'the vessel network', cooling: 'and the cooling', cross: 'cross the categories'});
const RO = {cx: 1000, cy: 650, w: 660};
const BOX = [{y: 260, t: 'behavioural', c: AMBER_INK}, {y: 500, t: 'physiological', c: TEAL}, {y: 740, t: 'structural', c: WARM}];
export const SceneRoo: React.FC = () => {
	const f = useCurrentFrame();
	const [fx, fy] = pbPt(PLATES.roo, RO.cx, RO.cy, RO.w)(...FEAT.forearm);
	const chips: [number, string, number][] = [[0, 'rests in shade', K8.shade + 10], [1, 'pants, sweats, vasodilation', K8.pants + 20]];
	const lines: [number, number][] = [[0, K8.licking], [2, K8.vessel], [1, K8.cooling]];
	const pu = vis(f, K8.cross, undefined, 8) * (0.5 + 0.5 * Math.sin((f - K8.cross) / 5));
	const inset = {cx: 1580, cy: 730, w: 360};
	const ip = pbPt(PLATES.forearm, inset.cx, inset.cy, inset.w);
	return (
		<>
			<Heading text="The red kangaroo uses all three" at={4} size={50} />
			<Overlay>
				<Balance tilt={() => 0} />
				{BOX.map((b, i) => (
					<g key={b.t} opacity={prog(f, 0, 14)}>
						<rect x={60} y={b.y} width={430} height={180} rx={20} fill="#fffdf8" stroke={b.c} strokeWidth={3} />
						<Sx x={84} y={b.y + 44} text={b.t} size={32} color={b.c} hand weight={700} at={-1000} />
					</g>
				))}
				{chips.map(([i, t, a]) => <CTag key={t} x={84} y={BOX[i].y + 70} text={t} at={a} color={BOX[i].c} size={28} maxW={390} />)}
				<CTag x={84} y={BOX[2].y + 70} text="dense vessel network under thin skin" at={K8.vessel + 10} color={WARM} size={26} maxW={390} />
				<PlateB p={PLATES.roo} cx={RO.cx} cy={RO.cy} w={RO.w} o={prog(f, 0, 16)} />
				<Shade cx={RO.cx} cy={RO.cy - 40} rx={420} ry={330} at={K8.shade} out={K8.pants + 30} />
				{f >= K8.licks ? <DrawPath d={`M${fx - 70},${fy} a70,55 0 1 1 1,6`} at={K8.licks} dur={16} color={AMBER} width={5} /> : null}
				<g opacity={vis(f, K8.dense, undefined, 14)}>
					<line x1={fx + 60} y1={fy} x2={inset.cx - inset.w / 2} y2={inset.cy - 60} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" />
					<PlateB p={PLATES.forearm} cx={inset.cx} cy={inset.cy} w={inset.w} />
				</g>
				<GTag x={1420} y={930} text="close-up, drawn larger" at={K8.dense + 10} size={22} />
				<EvapDots pts={[ip(1000, 900), ip(1200, 1100), ip(800, 760)]} at={K8.saliva} r={11} />
				{lines.map(([i, a]) => (f >= a ? <g key={i} opacity={1 - 0.4 * (1 - pu)}><DrawPath d={`M${fx},${fy} L490,${BOX[i].y + 90}`} at={a} dur={16} color={BOX[i].c} width={4 + 3 * pu} /></g> : null))}
				{void K8.roo}{void K8.hot}{void K8.beh}{void K8.phys}{void NB}
			</Overlay>
		</>
	);
};

// ---------- 9. Trends across endotherms ----------
const K9 = cues(S('trends'), {across: 'Across endotherms', hot: 'Mammals in hot', large: 'large, thin ears', shed: 'shed heat', cold: 'Mammals in cold', compact: 'more compact', fur: 'thick fur', slows: 'slows heat loss', penguin: "In a penguin's", arteries: 'arteries carrying', veins: 'veins bringing', passes: 'Heat passes across', returns: 'returns to the', cc: "That's countercurrent"});
export const SceneTrends: React.FC = () => {
	const f = useCurrentFrame();
	const dim = 1 - 0.7 * prog(f, K9.penguin, 14);
	const out = prog(f, K9.penguin + 10, 20);
	return (
		<>
			<Heading text="Trends across endotherms" at={4} size={52} />
			<Overlay>
				<Balance tilt={() => 0} />
				<Pl p={PLATES.roo} cx={180} cy={300} w={200} dim={0.6} o={0.7} />
				<g opacity={dim} transform={`translate(${-260 * out},0)`}>
					<HeadOutline cx={600} cy={620} big at={K9.large} />
					<HeatArrows x={380} y={470} w={440} at={K9.shed} n={4} len={110} />
					<Sx x={600} y={840} text="hot climate: large extremities" size={30} color={WARM} anchor="middle" hand weight={700} at={K9.large + 10} />
					<HeadOutline cx={1120} cy={640} big={false} at={K9.compact} />
					<HeatArrows x={1020} y={530} w={200} at={K9.compact + 10} n={3} len={45} color={WARM} />
					<Sx x={1120} y={840} text="cold climate: compact" size={30} color={COOL} anchor="middle" hand weight={700} at={K9.compact + 10} />
					<Pl p={PLATES.seal} cx={1120} cy={950} w={230} o={vis(f, K9.fur, undefined, 12)} />
					<GTag x={1260} y={930} text="blubber" at={K9.fur + 6} size={22} />
				</g>
				<GTag x={96} y={1010} text="p01 tests this with a model" at={K9.slows} size={22} />
				<Countercurrent x={1160} y={380} h={500} gap={130} at={K9.arteries - 10} crossAt={K9.passes} />
				<Sx x={1120} y={420} text="warm blood out" size={30} color="#c8372d" anchor="end" hand weight={700} at={K9.arteries} />
				<Sx x={1330} y={860} text="cool blood back" size={30} color="#3a63b8" hand weight={700} at={K9.veins} />
				<GTag x={1330} y={520} text="penguin legs, dolphin flippers" at={K9.arteries + 10} size={22} />
				<Sx x={1330} y={660} text="heat crosses to the vein" size={28} color={AMBER_INK} hand weight={700} at={K9.passes + 6} />
				<CTag x={1330} y={950} text="countercurrent exchange" at={K9.cc} color={AMBER_INK} size={36} />
				{void K9.across}{void K9.hot}{void K9.cold}{void K9.returns}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 10. Why the flying foxes died ----------
const K10 = cues(S('limits'), {so: 'So why did', heat: 'Heat flows from', hotter: 'Hotter air added', little: 'With little cooling', relied: 'relied heavily', water: 'uses water', neg: 'Negative feedback opposes', limit: 'each effector has', push: 'Push past', keeps: 'keeps working', rising: 'temperature keeps rising'});
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	const lvl = (fr: number) => 0.62 + 0.38 * smooth(prog(fr, K10.limit, Math.max(30, 838 - K10.limit - 40)));
	const strip = {x: 900, y: 760, w: 800, h: 44};
	return (
		<>
			<Heading text="Why the flying foxes died" at={4} size={52} />
			<Overlay>
				<Balance tilt={tiltOf([[0, 0], [K10.hotter, -20], [K10.relied + 10, -9]])} lit={[{side: 'l', at: K10.hotter, out: K10.relied}]} />
				<PlateB p={PLATES.fox} cx={330} cy={600} w={320} />
				<Thermo cx={610} cy={860} w={260} level={lvl} />
				<RingThumb id="b02s10" g={{cx: 690, cy: 400, R: 80, r: 27}} at={K10.limit - 10} lit={[K10.limit, K10.limit, K10.limit, K10.limit, K10.limit]} minus={K10.limit} />
				<g opacity={prog(f, K10.heat, 14)}>
					<rect x={strip.x} y={strip.y} width={strip.w} height={strip.h} rx={10} fill="#f2c4ae" stroke="#b9575a" strokeWidth={3} />
					<rect x={strip.x} y={strip.y + strip.h} width={strip.w} height={30} rx={8} fill="#f6dccd" />
					<Sx x={strip.x + strip.w / 2} y={strip.y + 130} text="skin" size={26} color={INK_SOFT} anchor="middle" hand weight={700} at={-1000} />
				</g>
				<Sx x={strip.x} y={520} text="air hotter than skin" size={32} color={GREY_INK} hand weight={700} at={K10.heat + 10} />
				<HeatArrows x={strip.x + 40} y={strip.y - 4} w={strip.w - 80} at={K10.hotter} dir="down" n={6} len={100} color={WARM} />
				<Sx x={strip.x + strip.w} y={520} text="convection" size={30} color={WARM} anchor="end" hand weight={700} at={K10.hotter + 10} />
				<EvapDots pts={[[strip.x + 160, strip.y], [strip.x + 400, strip.y], [strip.x + 640, strip.y]]} at={K10.relied} slow={K10.water} r={14} />
				<GTag x={1380} y={870} text="water runs short" at={K10.water + 10} size={22} />
				<CTag x={900} y={930} text="feedback has limits" at={K10.limit + 10} color={AMBER_INK} size={38} />
				{void K10.so}{void K10.little}{void K10.neg}{void K10.push}{void K10.keeps}{void K10.rising}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 11. Memory ----------
const K11 = cues(S('memory'), {keep: 'To keep it', hot: 'hot means', cold: 'Cold means', any: 'And for any', process: 'body process', behaviour: 'a behaviour', feature: 'body feature'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="To keep it" at={4} size={52} />
			<Overlay>
				<Pl p={PLATES.warm} cx={330} cy={400} w={300} o={vis(f, K11.hot, undefined, 12)} />
				<Sx x={560} y={430} text="Hot: widen and wet." size={80} color={WARM} hand weight={700} at={K11.hot} />
				<Pl p={PLATES.cold} cx={330} cy={710} w={300} o={vis(f, K11.cold, undefined, 12)} />
				<Sx x={560} y={740} text="Cold: narrow and shiver." size={80} color={COOL} hand weight={700} at={K11.cold} />
				{[['process?', K11.process], ['behaviour?', K11.behaviour], ['feature?', K11.feature]].map(([t, a], i) => (
					<CTag key={t as string} x={560 + i * 380} y={920} text={t as string} at={a as number} color={TEAL} size={36} />
				))}
				{void K11.keep}{void K11.any}{void MistakeChip}
			</Overlay>
		</>
	);
};
