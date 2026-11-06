// M7 B04 scenes 7 to 11: foot-and-mouth disease, direct effects (the red cattle and sheep, drifting specks, the stock
// truck as a fomite, the aligned hoof pair crossfading to blisters, direct chips); 2001, indirect effects (a plain
// dot grid of culled animals in two blocks, a few amber, the closed gate, the barred container, tourism, equal cost
// bars); why exporters fear it most (an empty map, the 75 to 25 export split crossing the gate to the container, the
// arrow broken, the ABARES chip, the right side brightened); how to assess an effect (how big, how long, how far,
// with short and long bars and an arrow off the board); memory (count past the farm gate).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Overlay} from '../bio-m5-b13/shared';
import {Drift} from '../bio-m7-b03/parts';
import {S} from './common';
import {
	AMBER, AMBER_INK, AusMap, CTag, CardBox, ClockMark, Crop, CurveArrow, DotGrid, DoorBar, DrawPath, FEAT, GREEN, GREYT, GREY_INK, GTag, GX, Gate, GrowBar, INK, PLATES, Pl,
	Ring, SideWash, Sx, TEAL, XFade, fitW, lerp, plH, prog, ptOf, smooth, vis,
} from './parts';

// ---------- 7. FMD: the direct effects ----------
const K7 = cues(S('fmd-direct'), {virus: 'by a virus', cloven: 'cloven-hoofed animals', pigs: 'pigs and goats', contact: 'by contact', vehicles: 'on vehicles', blisters: 'causes blisters', feet: 'on the feet', eating: 'stop eating', milk: 'less milk', most: 'Most adults', direct: 'the direct effects'});
const HOOF = {cx: 700, cy: 610, w: 330};
export const SceneFmd: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K7.blisters - 10, 26));
	const bp = ptOf(PLATES.hoofOk, HOOF.cx, HOOF.cy, HOOF.w, FEAT.blisters);
	return (
		<Overlay>
			<Gate at={-100} labelAt={-100} sidesAt={-100} />
			<Pl p={PLATES.cattle} cx={lerp(380, 230, sh)} cy={lerp(470, 300, sh)} w={lerp(440, 210, sh)} o={prog(f, K7.cloven, 16)} dim={sh * 0.5} />
			<Pl p={PLATES.sheep} cx={lerp(780, 400, sh)} cy={lerp(540, 330, sh)} w={lerp(200, 100, sh)} o={prog(f, K7.cloven + 14, 16)} dim={sh * 0.5} />
			<GTag x={110} y={230} text="FMD virus" at={K7.virus} out={K7.blisters - 10} />
			<GTag x={110} y={680} text="cloven-hoofed: split hooves" at={K7.cloven + 16} out={K7.blisters - 10} />
			<GTag x={700} y={680} text="pigs, goats" at={K7.pigs} out={K7.blisters - 10} />
			<Drift sx={560} sy={440} x1={720} band={40} at={K7.contact} n={14} period={90} o={1 - prog(f, K7.vehicles + 30, 14)} />
			<Pl p={PLATES.truck} cx={GX} cy={820} w={240} o={prog(f, K7.vehicles, 14)} dim={prog(f, K7.blisters, 14) * 0.6} />
			<GTag x={1330} y={900} text="fomites: vehicles, boots, feed" at={K7.vehicles + 10} />
			<XFade a={PLATES.hoofOk} b={PLATES.hoofSick} cx={HOOF.cx} cy={HOOF.cy} w={HOOF.w} t={prog(f, K7.feet, 26)} o={prog(f, K7.blisters, 16)} />
			<Ring cx={bp[0]} cy={bp[1]} rx={70} ry={60} at={K7.feet + 24} out={K7.eating} color={AMBER} />
			<CTag x={900} y={340} text="blisters between the claws" at={K7.feet + 20} color={AMBER_INK} size={30} maxW={360} dim={prog(f, K7.eating, 10)} />
			<CTag x={900} y={520} text="lame, stops eating" at={K7.eating} color={TEAL} size={32} dim={prog(f, K7.direct, 10)} />
			<CTag x={900} y={600} text="less milk and meat" at={K7.milk} color={TEAL} size={32} dim={prog(f, K7.direct, 10)} />
			<GTag x={900} y={690} text="most adults survive" at={K7.most} size={26} />
			<CTag x={110} y={925} text="direct: losses in the sick animals" at={K7.direct} color={TEAL} size={34} />
		</Overlay>
	);
};

// ---------- 8. 2001: the indirect effects ----------
const K8 = cues(S('uk-2001-indirect'), {uk: 'In 2001', six: 'over six million', never: 'never infected', farms: 'infected and neighbouring farms', stranded: 'stranded by movement bans', export: 'Export markets closed', shut: 'shut to visitors', eight: 'about eight billion', indirect: 'indirect effects'});
const CONT = {cx: 1440, cy: 795, w: 220};
export const SceneUk: React.FC = () => {
	const f = useCurrentFrame();
	const d0 = ptOf(PLATES.container, CONT.cx, CONT.cy, CONT.w, FEAT.doors[0]);
	const d1 = ptOf(PLATES.container, CONT.cx, CONT.cy, CONT.w, FEAT.doors[1]);
	return (
		<Overlay>
			<Gate at={-100} labelAt={-100} />
			<Pl p={PLATES.hoofSick} cx={600} cy={560} w={240} dim={0.65} />
			<CTag x={110} y={925} text="direct: losses in the sick animals" at={-100} color={TEAL} size={34} dim={1} />
			<GTag x={1340} y={198} text="United Kingdom, 2001" at={K8.uk} out={K8.indirect} />
			<CTag x={1340} y={194} text="indirect: beyond the sick animals" at={K8.indirect + 6} color={AMBER_INK} size={30} />
			<GTag x={1340} y={252} text="each dot: 100,000 animals" at={K8.six + 10} />
			<DotGrid x={1360} y={326} cols={8} rows={5} at={K8.six} amber={[3, 12, 21, 30, 9]} amberAt={K8.never} />
			<DotGrid x={1650} y={326} cols={4} rows={5} at={K8.six + 44} />
			<CTag x={1340} y={516} text="most never infected" at={K8.never + 12} out={K8.stranded} color={AMBER_INK} size={30} />
			<GTag x={1340} y={470} text="disease-control culls" at={K8.farms} />
			<GTag x={1460} y={518} text="welfare culls: stranded stock" at={K8.stranded + 16} />
			<Pl p={PLATES.gate} cx={1440} cy={645} w={220} o={prog(f, K8.stranded, 14)} />
			<CTag x={1570} y={618} text="movement banned" at={K8.stranded + 8} color={AMBER_INK} size={30} dim={prog(f, K8.export, 10)} />
			<Pl p={PLATES.container} cx={CONT.cx} cy={CONT.cy} w={CONT.w} o={prog(f, K8.export, 14)} />
			<DoorBar a={d0} b={d1} at={K8.export + 10} />
			<CTag x={1570} y={768} text="exports closed" at={K8.export + 8} color={AMBER_INK} size={30} dim={prog(f, K8.shut, 10)} />
			<CTag x={1340} y={874} text="countryside closed: tourism" at={K8.shut + 4} color={AMBER_INK} size={30} dim={prog(f, K8.indirect, 10)} />
			<g opacity={prog(f, K8.eight, 12)}>
				<Sx x={1340} y={975} text="farming and food" size={24} color={GREY_INK} weight={600} at={K8.eight} />
				<Sx x={1340} y={1019} text="tourism" size={24} color={GREY_INK} weight={600} at={K8.eight + 10} />
			</g>
			<GrowBar x={1560} y={956} w={290} h={24} at={K8.eight + 4} color="#9aa0a6" />
			<GrowBar x={1560} y={1000} w={286} h={24} at={K8.eight + 14} color="#9aa0a6" />
			<GTag x={1270} y={968} text="total about £8 billion" at={K8.eight + 20} anchor="end" />
		</Overlay>
	);
};

// ---------- 9. Why exporters fear it most ----------
const K9 = cues(S('exporters'), {free: 'free of foot-and-mouth', sells: 'sells most of its beef', three: 'three-quarters', stop: 'stop exports', eighty: '80 billion dollars', mostly: 'mostly through lost exports', outweigh: 'the indirect effects usually'});
const CT9 = {cx: 1600, cy: 680, w: 280};
export const SceneExporters: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K9.outweigh, 24));
	const brk = prog(f, K9.stop, 12);
	const d0 = ptOf(PLATES.container, CT9.cx, CT9.cy, CT9.w, FEAT.doors[0]);
	const d1 = ptOf(PLATES.container, CT9.cx, CT9.cy, CT9.w, FEAT.doors[1]);
	const ctTop = CT9.cy - plH(PLATES.container, CT9.w) / 2;
	return (
		<Overlay>
			<SideWash x0={GX + 14} x1={1890} o={sh} />
			<Gate at={-100} labelAt={-100} sidesAt={-100} bright={sh} />
			<AusMap cx={300} cy={330} s={0.38} at={0} />
			<GTag x={110} y={468} text="FMD-free since 1872" at={K9.free + 6} />
			<g transform={`translate(640,700) scale(${lerp(1, 0.8, sh)}) translate(-640,-700)`} opacity={1 - 0.35 * sh}>
				<Pl p={PLATES.cattle} cx={330} cy={700} w={320} o={prog(f, K9.sells, 14)} />
				<GrowBar x={560} y={680} w={360} h={40} at={K9.sells + 10} color={AMBER} />
				<GrowBar x={924} y={680} w={116} h={40} at={K9.sells + 22} color="#b9bec3" />
				<Sx x={560} y={660} text="exported: about three-quarters" size={26} color={GREY_INK} weight={600} at={K9.three} />
				<Sx x={1040} y={758} text="eaten here" size={26} color={GREY_INK} weight={600} anchor="end" at={K9.three + 8} />
				{f >= K9.three + 12 ? <DrawPath d={`M930,700 L${GX - 10},700`} at={K9.three + 12} dur={14} color={AMBER} width={5} dash="4 10" /> : null}
			</g>
			{f >= K9.three + 24 ? <g opacity={1 - brk}><DrawPath d={`M${GX + 10},700 L${CT9.cx - CT9.w / 2 - 10},700`} at={K9.three + 24} dur={10} color={AMBER} width={5} dash="4 10" /></g> : null}
			{brk > 0.01 ? (
				<g>
					<DrawPath d={`M${GX - 16},676 L${GX + 16},724`} at={K9.stop} dur={8} color={GREY_INK} width={6} />
					<DrawPath d={`M${GX + 16},676 L${GX - 16},724`} at={K9.stop + 4} dur={8} color={GREY_INK} width={6} />
				</g>
			) : null}
			<Pl p={PLATES.container} cx={CT9.cx} cy={CT9.cy} w={CT9.w} o={prog(f, K9.three + 16, 14)} />
			<DoorBar a={d0} b={d1} at={K9.stop + 6} />
			<CTag x={1330} y={820} text="about $80 billion over 10 years (ABARES, 2022)" at={K9.eighty} color={AMBER_INK} size={30} maxW={520} dim={prog(f, K9.outweigh, 10)} />
			<CurveArrow a={[1640, 818]} b={[1640, ctTop + plH(PLATES.container, CT9.w) - 6]} at={K9.mostly} bow={0} color={AMBER} width={4} />
			<CTag x={1330} y={945} text="indirect usually larger for an exporter" at={K9.outweigh + 10} color={AMBER_INK} size={30} maxW={540} />
		</Overlay>
	);
};

// ---------- 10. How to assess an effect ----------
// Quality fix (6 Nov): three large panels, one per question, each drawn from its cue so the frame is never three tags
// alone. How big: a paddock grid filling with the lost share, then the rust leaf ("that harvest"). How long: a clock and
// a time line; one season (teal) against years (amber, the myrtle rust leaf). How far: the farm gate, the cattle and the
// barred container, and an arrow running past the gate.
const K10 = cues(S('assess'), {big: 'how big', long: 'how long', far: 'how far', rust: 'Rust in one wheat', harvest: 'costs that harvest', settles: 'settles in for good', closes: 'closes markets', reaches: 'reaches far beyond'});
const PAN = [110, 695, 1280], PW = 530;
export const SceneAssess: React.FC = () => {
	const f = useCurrentFrame();
	const qs = [{at: K10.big, t: 'how big?'}, {at: K10.long, t: 'how long?'}, {at: K10.far, t: 'how far?'}];
	const sk = PLATES.wheatSick;
	const c1 = PAN[0] + PW / 2, c2 = PAN[1] + PW / 2, c3 = PAN[2] + PW / 2;
	const lost = [7, 8, 13, 14, 15, 19, 20, 21, 9];
	const ct = {cx: 1690, cy: 470, w: 210};
	const d0 = ptOf(PLATES.container, ct.cx, ct.cy, ct.w, FEAT.doors[0]);
	const d1 = ptOf(PLATES.container, ct.cx, ct.cy, ct.w, FEAT.doors[1]);
	const ax0 = c2 - 220, axW = 440;
	return (
		<Overlay>
			{qs.map((q, i) => {
				const o = prog(f, q.at, 14);
				return o > 0.01 ? (
					<g key={q.t} opacity={o} transform={`translate(0,${(1 - smooth(o)) * 24})`}>
						<rect x={PAN[i]} y={170} width={PW} height={840} rx={26} fill="#fffdf8" stroke={EDGE2} strokeWidth={2.5} />
					</g>
				) : null;
			})}
			{qs.map((q, i) => <CTag key={q.t} x={PAN[i] + PW / 2} y={200} text={q.t} at={q.at} color={AMBER_INK} size={48} anchor="middle" />)}
			{/* how big */}
			{f >= K10.big + 6 ? Array.from({length: 24}, (_, i) => {
				const x = c1 - 211 + (i % 6) * 72, y = 320 + Math.floor(i / 6) * 72;
				const li = lost.indexOf(i);
				const am = li >= 0 ? prog(f, K10.big + 16 + li * 4, 8) : 0;
				return <rect key={i} x={x} y={y} width={62} height={62} rx={8} fill={am > 0.5 ? '#e9a640' : '#b7c99a'} stroke={am > 0.5 ? AMBER_INK : '#6f8a4a'} strokeWidth={2} opacity={prog(f, K10.big + 6 + i, 6)} />;
			}) : null}
			<Sx x={c1} y={650} text="share of the crop lost" size={34} color={INK} hand anchor="middle" at={K10.big + 30} />
			<Crop p={sk} cx={c1} cy={770} w={(sk.box[2] - sk.box[0]) * (400 / (sk.box[3] - sk.box[1]))} rot={-90} id="b04-s10-wheat2" o={prog(f, K10.rust, 14)} />
			<CTag x={c1} y={880} text="rust: that harvest" at={K10.harvest} color={TEAL} size={36} anchor="middle" />
			{/* how long */}
			<ClockMark x={c2} y={362} r={62} at={K10.long} />
			{f >= K10.long + 8 ? <DrawPath d={`M${ax0},500 L${ax0 + axW},500`} at={K10.long + 8} dur={16} color={INK_SOFT2} width={3} /> : null}
			{[0, 1, 2, 3, 4, 5].map(i => <line key={i} x1={ax0 + (i * axW) / 5} x2={ax0 + (i * axW) / 5} y1={490} y2={510} stroke={INK_SOFT2} strokeWidth={3} opacity={prog(f, K10.long + 14 + i * 2, 6)} />)}
			<Sx x={ax0 + axW} y={545} text="years" size={28} color={GREY_INK} weight={700} anchor="end" at={K10.long + 20} />
			<GrowBar x={ax0} y={420} w={70} h={34} at={K10.rust + 10} color={TEAL} />
			<Sx x={ax0 + 90} y={448} text="one season" size={34} color={TEAL} hand weight={700} at={K10.rust + 18} />
			<Pl p={PLATES.leafRust} cx={c2} cy={720} w={330} o={prog(f, K10.settles, 14)} />
			<GrowBar x={ax0} y={570} w={axW} h={34} at={K10.settles + 10} color={AMBER} dur={40} />
			<CTag x={c2} y={880} text="settles in: for years" at={K10.settles + 30} color={AMBER_INK} size={36} anchor="middle" />
			{/* how far */}
			{f >= K10.far ? <DrawPath d={`M${c3},345 L${c3},830`} at={K10.far} dur={18} color={GREYT} width={4} dash="16 12" /> : null}
			<Sx x={c3} y={330} text="farm gate" size={28} color={GREY_INK} weight={600} anchor="middle" at={K10.far + 6} />
			<Pl p={PLATES.cattle} cx={1410} cy={470} w={200} o={prog(f, K10.closes, 14)} />
			<Pl p={PLATES.container} cx={ct.cx} cy={ct.cy} w={ct.w} o={prog(f, K10.closes + 6, 14)} />
			<DoorBar a={d0} b={d1} at={K10.closes + 16} />
			<Sx x={1690} y={590} text="markets closed" size={32} color={AMBER_INK} hand weight={700} anchor="middle" at={K10.closes + 20} />
			{f >= K10.reaches ? <DrawPath d={`M1330,700 L1800,700`} at={K10.reaches} dur={30} color={AMBER} width={7} dash="4 12" /> : null}
			{f >= K10.reaches + 28 ? <DrawPath d="M1774,682 L1802,700 L1774,718" at={K10.reaches + 28} dur={6} color={AMBER} width={7} /> : null}
			<CTag x={c3} y={880} text="far beyond the farm" at={K10.reaches + 10} color={AMBER_INK} size={36} anchor="middle" />
		</Overlay>
	);
};
const EDGE2 = '#d9cfbb', INK_SOFT2 = '#6b6253';

// ---------- 11. Memory ----------
const K11 = cues(S('memory'), {count: 'count past the farm gate', first: 'the first cost', control: 'Control', markets: 'markets and ecosystems', eco: 'ecosystems'});
const Slide: React.FC<{at: number; x0: number; x1: number; children: (x: number, o: number) => React.ReactNode}> = ({at, x0, x1, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	return o > 0.01 ? <>{children(lerp(x0, x1, smooth(prog(f, at, 26))), o)}</> : null;
};
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Gate at={-100} y0={380} bright={prog(f, 0, 14)} />
			<CardBox x={360} y={200} w={1200} h={140} at={K11.count - 6} />
			<Sx x={960} y={295} text="Count past the farm gate." size={80} color={INK} hand anchor="middle" at={K11.count} />
			<Pl p={PLATES.hoofSick} cx={760} cy={640} w={150} o={prog(f, K11.first, 14)} />
			<Pl p={PLATES.leafRust} cx={1040} cy={660} w={220} o={prog(f, K11.first + 8, 14)} />
			<Slide at={K11.control} x0={1000} x1={1560}>{(x, o) => <Pl p={PLATES.gate} cx={x} cy={500} w={fitW(PLATES.gate, 240, 170)} o={o} />}</Slide>
			<Slide at={K11.markets} x0={1000} x1={1560}>{(x, o) => <Pl p={PLATES.container} cx={x} cy={690} w={fitW(PLATES.container, 240, 160)} o={o} />}</Slide>
			<Slide at={K11.eco} x0={1000} x1={1560}>{(x, o) => <g opacity={o}><CTag x={x} y={820} text="native guava" at={-100} color={GREEN} size={32} anchor="middle" /></g>}</Slide>
			{void GREYT}{void vis}{void AMBER}
		</Overlay>
	);
};
