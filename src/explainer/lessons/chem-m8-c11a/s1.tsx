// C8-11a scenes 1 to 8: the hook (two propanols, one formula, three or two peaks), nuclei as tiny magnets (the machine,
// the tube, a bore with nuclei that line up and one that flips), electrons shield (a cloud pulled toward oxygen), the
// scale and TMS, environments (ethanol), symmetry merges carbons (the propanols, mirror copies), the swap test on two
// ketones, and one line each with heights that aren't counts (two insets).
// Layout: heading top left; molecule in the left half; spectrum across the lower half; the right half holds the card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, Arrow, AxisArrow, Bore, CARD, Chip, Cloud, DrawPath, E1, E2, E3, E4, EDGE, GREYT, GTag, INK, INK_SOFT, MOL10, MOLS, Mistake, MolAt, NAVY, NmrAxis, NmrSpec, Nuclei, Pic, PicH, RED, Squiggle, Svg, Sx, T, Title, dx, mirror, prog, pulse, smooth, vis,
} from './parts';
import type {NG} from './parts';
import {PL} from './assets';
import {K} from './common';

const ON = -1000;
export const TITLE = 'How many kinds of carbon?';
/** Full-width carbon-13 axis (lower half). */
export const GN: NG = {x: 160, y: 640, w: 1600, h: 260, d0: 220};
const Mini: React.FC<{x: number; y: number; peaks: {d: number; h: number; color?: string; at?: number}[]; at?: number; w?: number; h?: number; d0?: number; numbers?: boolean}> = ({x, y, peaks, at = ON, w = 520, h = 150, d0 = 80, numbers = false}) => {
	const g: NG = {x, y, w, h, d0};
	return <g>
		<NmrAxis g={g} at={at} step={20} size={24} title={numbers ? 'δ (ppm)' : ''} ticksAt={numbers ? ON : 1e6} />
		<NmrSpec g={g} peaks={peaks} tms={numbers ? ON : false} lw={6} />
	</g>;
};

// ---------- 1. hook ----------
const K1 = K('hook', {p1: 'Propan-1-ol', p2: 'propan-2-ol', formula: 'the formula', m60: 'at 60.', oh: 'broad O H', apart: 'tell them', c13: 'carbon-13 NMR', three: 'three peaks,', two: 'gives two', end: 'By the'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const eq = prog(f, K1.oh + 20, 12);
	return (
		<Svg>
			<Title text={TITLE} />
			<MolAt m={MOL10.propan1ol} x={430} y={290} s={1.35} at={K1.p1} />
			<Sx x={430} y={390} text="propan-1-ol" size={32} color={INK} anchor="middle" weight={800} at={K1.p1} />
			<MolAt m={MOL10.propan2ol} x={1000} y={310} s={1.35} at={K1.p2} />
			<Sx x={1000} y={390} text="propan-2-ol" size={32} color={INK} anchor="middle" weight={800} at={K1.p2} />
			<Chip x={715} y={330} text="both C_3H_8O" size={30} color={GREYT} ink={INK} anchor="middle" at={K1.formula} />
			{[430, 1000].map((x, i) => <g key={x}>
				<Chip x={x} y={430} text="molecular ion: m/z 60  (c09)" size={30} color={GREYT} fill="#f1eee7" ink={GREYT} anchor="middle" at={K1.m60 - 10 + i * 6} />
				<Chip x={x} y={500} text="IR: broad O–H band  (c10)" size={30} color={GREYT} fill="#f1eee7" ink={GREYT} anchor="middle" at={K1.oh + i * 6} />
			</g>)}
			{eq > 0.01 ? <Sx x={715} y={490} text="=" size={70} color={AMBER_INK} anchor="middle" weight={800} at={ON} opacity={0.6 + 0.4 * pulse(f, K1.oh + 20, 40)} /> : null}
			<Pic p={PL.nmr} cx={1600} cy={380} w={420} />
			<Sx x={1600} y={620} text="carbon-13 NMR" size={34} color={NAVY} anchor="middle" hand at={K1.c13} />
			<Mini x={170} y={620} at={ON} peaks={[{d: 64, h: 0.8, color: GREYT, at: K1.three}, {d: 26, h: 0.7, color: GREYT, at: K1.three + 6}, {d: 10, h: 0.75, color: GREYT, at: K1.three + 12}]} />
			<Mini x={740} y={620} at={ON} peaks={[{d: 64, h: 0.65, color: GREYT, at: K1.two}, {d: 25, h: 0.85, color: GREYT, at: K1.two + 6}]} />
			<Sx x={430} y={830} text="three peaks" size={32} color={INK} anchor="middle" hand at={K1.three} />
			<Sx x={1000} y={830} text="two peaks" size={32} color={INK} anchor="middle" hand at={K1.two} />
			<Chip x={1440} y={720} text="which is which?" size={40} color={NAVY} ink={NAVY} at={K1.end} sw={4} />
			<GTag x={1440} y={810} text="carbon-13 NMR counts something else" size={28} at={K1.c13} />
		</Svg>
	);
};

// ---------- 2. nuclei as tiny magnets ----------
const K2 = K('tiny-magnets', {nmr: 'NMR stands', some: 'Some nuclei', magnets: 'bar magnets', c12: 'Ordinary carbon-12', put: 'Put the', line: 'line up', against: 'Lining up', radio: 'A pulse', flips: 'flips them', resonance: ['resonance the', 1]});
export const SceneMagnets: React.FC = () => {
	const f = useCurrentFrame();
	const drop = smooth(prog(f, K2.put, 40));
	return (
		<Svg>
			<Title text="Nuclei as tiny magnets" />
			<Chip x={96} y={150} text="NMR: nuclear magnetic resonance" size={32} color={NAVY} ink={NAVY} at={K2.nmr + 20} />
			<Pic p={PL.nmr} cx={400} cy={600} w={560} />
			<g transform={`translate(0,${-100 + 100 * drop})`}><PicH p={PL.tube} cx={330} cy={470} h={300} at={K2.put - 10} /></g>
			<Sx x={140} y={940} text="sample tube into the magnet" size={30} color={INK_SOFT} hand at={K2.put} />
			<Bore x={820} y={250} w={620} h={560} at={K2.some} />
			<Nuclei x={1000} y={420} n={9} up={5} at={K2.some + 10} settle={K2.line} flip={K2.flips} />
			<g opacity={prog(f, K2.c12, 12)}>
				<circle cx={1370} cy={470} r={20} fill="#c9c3b6" stroke={INK_SOFT} strokeWidth={2.5} />
				<Sx x={1370} y={530} text="¹²C: not seen" size={28} color={GREYT} anchor="middle" hand weight={800} at={ON} />
			</g>
			<Sx x={850} y={230} text="¹H and ¹³C: tiny magnets" size={32} color={INK} hand weight={800} at={K2.magnets} />
			<g opacity={prog(f, K2.against, 12)}>
				<line x1={1500} x2={1820} y1={360} y2={360} stroke={INK} strokeWidth={4} />
				<line x1={1500} x2={1820} y1={500} y2={500} stroke={INK} strokeWidth={4} />
				<Sx x={1500} y={340} text="against: higher energy" size={30} color={INK} hand weight={800} at={ON} />
				<Sx x={1500} y={540} text="with: lower energy" size={30} color={INK} hand weight={800} at={ON} />
				<Arrow a={[1660, 490]} b={[1660, 372]} at={K2.flips} color={AMBER_INK} />
			</g>
			<GTag x={1500} y={580} text="only a tiny excess with the field" size={26} at={K2.line + 20} />
			<Squiggle x={760} y={880} w={700} at={K2.radio} k={1.2} />
			<Sx x={760} y={950} text="radio waves, just the right frequency" size={30} color={AMBER_INK} hand at={K2.radio} />
			<Chip x={1500} y={700} text="absorbs radio waves: resonance" size={30} color={AMBER_INK} ink={INK} at={K2.resonance} sw={4} />
		</Svg>
	);
};

// ---------- 3. electrons shield ----------
const K3 = K('shielding', {useful: 'useful part', cloud: 'cloud of', shield: 'shield it', oxygen: 'to an', pulls: 'pulls electron', feels: 'feels more', desh: 'deshielded.', higher: 'higher frequency', place: 'different place'});
export const SceneShield: React.FC = () => {
	const f = useCurrentFrame();
	const more = prog(f, K3.feels, 14);
	return (
		<Svg>
			<Title text="Electrons shield the nucleus" />
			{[0, 1, 2, 3, 4, 5].map(i => <line key={i} x1={300 + i * 90} x2={300 + i * 90} y1={260} y2={760} stroke="#8fb3d9" strokeWidth={3} strokeDasharray="10 8" opacity={i === 2 || i === 3 ? 0.35 + 0.65 * more : 0.9} />)}
			<Sx x={300} y={240} text="field from the magnet" size={28} color="#4f7fb0" hand at={ON} />
			<g transform="translate(470,520) scale(1.5) translate(-470,-520)"><Cloud x={470} y={520} at={K3.cloud - 10} pull={K3.pulls} oxy={K3.oxygen} /></g>
			<T x={1050} y={520} w={760} text="electrons screen the nucleus from the magnet" size={34} color={INK} at={K3.shield} out={K3.higher} />
			<T x={1050} y={600} w={760} text="oxygen pulls electron density away: the carbon feels more field" size={34} color="#b5583c" at={K3.pulls} out={K3.higher} />
			<Chip x={300} y={800} text="electrons shield" size={34} color={GREYT} ink={INK} at={K3.shield} />
			<Arrow a={[560, 400]} b={[700, 400]} at={K3.pulls} color={E4} />
			<Sx x={560} y={248} text="electron density pulled to O" size={28} color={E4} hand weight={800} at={K3.pulls} />
			<Chip x={300} y={880} text="deshielded: feels more field" size={34} color={NAVY} ink={NAVY} at={K3.desh} sw={4} />
			<Cloud x={1300} y={330} at={K3.cloud} />
			<Sx x={1460} y={300} text="carbon on its own:" size={30} color={INK_SOFT} hand weight={700} at={K3.cloud} />
			<Sx x={1460} y={340} text="fully shielded" size={30} color={INK_SOFT} hand weight={700} at={K3.cloud} />
			<Squiggle x={1050} y={760} w={620} at={K3.higher} k={1} color={GREYT} o={0.6} />
			<Squiggle x={1050} y={840} w={620} at={K3.higher + 10} k={1.25} />
			<Sx x={1690} y={768} text="shielded" size={28} color={GREYT} hand at={K3.higher} />
			<Sx x={1690} y={848} text="deshielded: higher" size={28} color={AMBER_INK} hand at={K3.higher + 10} />
			<g opacity={prog(f, K3.place, 12)}>
				<line x1={1050} x2={1750} y1={1010} y2={1010} stroke={INK} strokeWidth={3.5} />
				<rect x={1497} y={920} width={6} height={90} fill={GREYT} />
				<rect x={1247} y={920} width={6} height={90} fill={E4} />
				<Sx x={1250} y={905} text="deshielded" size={28} color={E4} anchor="middle" hand weight={800} at={ON} />
				<Sx x={1500} y={905} text="shielded" size={28} color={GREYT} anchor="middle" hand weight={800} at={ON} />
			</g>
		</Svg>
	);
};

// ---------- 4. the scale and TMS ----------
const K4 = K('scale-tms', {pos: 'That position', ppm: 'parts per', back: 'runs backwards,', zero: 'Zero is', tms: 'called TMS,', counted: "isn't counted", more: 'The more', left: 'further left', c13: 'For carbon-13,', r220: 'about 220'});
export const SceneScale: React.FC = () => {
	const f = useCurrentFrame();
	const glow = pulse(f, K4.r220, 40);
	return (
		<Svg>
			<Title text="The chemical shift scale" />
			<Sx x={96} y={220} text="chemical shift: where a peak sits" size={44} color={NAVY} hand at={K4.pos} />
			<Sx x={96} y={290} text="measured in parts per million (ppm)" size={40} color={INK} hand at={K4.ppm} />
			<Sx x={96} y={360} text="the scale runs backwards: right to left" size={40} color={INK} hand at={K4.back} />
			<NmrAxis g={GN} at={K4.pos} ticksAt={K4.ppm} rtl titleAt={K4.pos} />
			<NmrSpec g={GN} peaks={[]} tms={K4.tms} tmsTag="TMS: sets zero, not counted" />
			<AxisArrow x0={dx(GN, 30)} x1={dx(GN, 190)} y={GN.y + 40} text="more deshielded" at={K4.left} />
			{glow > 0.01 ? <circle cx={dx(GN, 220)} cy={GN.y + GN.h} r={40 + 30 * glow} fill="#f3d27a" opacity={0.5 * glow} /> : null}
			<Chip x={1300} y={340} text="carbon-13: 0 to about 220 ppm" size={36} color={NAVY} ink={NAVY} at={K4.r220} sw={4} />
			<GTag x={1300} y={250} text="TMS is added to the sample" size={28} at={K4.zero} />
		</Svg>
	);
};

// ---------- 5. environments ----------
const K5 = K('environments', {same: 'same peak?', ident: 'identical surroundings', ethanol: 'In ethanol,', bonded: 'is bonded', isnt: "other isn't", two: 'two peaks.', next: 'next to', s58: 'near 58', s18: 'near 18.', rule: 'key rule', env: 'carbon environments'});
export const SceneEnv: React.FC = () => (
	<Svg>
		<Title text={TITLE} />
		<MolAt m={MOL10.ethanol} x={400} y={380} s={1.2} at={K5.ethanol} atoms={[{i: 1, at: K5.bonded, color: E1}, {i: 0, at: K5.isnt, color: E2}]} />
		<Sx x={400} y={500} text="ethanol" size={34} color={INK} anchor="middle" weight={800} at={K5.ethanol} />
		<T x={900} y={250} w={900} text="same environment: identical surroundings" size={40} color={INK} at={K5.ident} />
		<T x={900} y={360} w={900} text="ethanol: one carbon bonded to O, one not → two environments" size={36} color={INK_SOFT} at={K5.isnt} />
		<NmrAxis g={GN} />
		<NmrSpec g={GN} peaks={[{d: 58, h: 0.7, color: E1, at: K5.s58, tag: '58'}, {d: 18, h: 0.8, color: E2, at: K5.s18, tag: '18'}]} tmsTag="TMS" />
		<Sx x={dx(GN, 58)} y={GN.y - 6} text="next to O: deshielded, further left" size={28} color={E1} anchor="middle" hand weight={800} at={K5.next} />
		<g opacity={1}><Chip x={900} y={470} text="number of peaks = number of carbon environments" size={34} color={NAVY} ink={NAVY} at={K5.rule} sw={4} /></g>
	</Svg>
);

// ---------- 6. symmetry merges carbons ----------
const K6 = K('symmetry', {back: 'Back to', p1: 'In propan-1-ol,', each: 'Each of', diff: 'different set', three: 'three peaks.', p2: 'In propan-2-ol,', mirror: 'mirror line', swap: 'swap places.', share: 'share one', two: 'just two', same: 'Same formula'});
const GA: NG = {x: 130, y: 640, w: 640, h: 200, d0: 80};
const GB: NG = {x: 1050, y: 640, w: 640, h: 200, d0: 80};
export const SceneSymmetry: React.FC = () => {
	const f = useCurrentFrame();
	const f1 = vis(f, K6.diff, K6.three, 14);
	const mv = prog(f, K6.mirror, 14);
	const f2 = vis(f, K6.swap, K6.share + 20, 14);
	return (
		<Svg>
			<Title text={TITLE} />
			<MolAt m={MOL10.propan1ol} x={450} y={360} s={1.25} at={ON} atoms={[{i: 2, at: K6.each, color: E1}, {i: 1, at: K6.each + 8, color: E2}, {i: 0, at: K6.each + 16, color: E3}]} />
			{f1 > 0.01 ? <g opacity={0.45 * f1}><MolAt m={mirror(MOL10.propan1ol)} x={450} y={360} s={1.25} color={RED} labelColor={RED} /></g> : null}
			<Sx x={450} y={230} text="ends differ" size={30} color={RED} anchor="middle" hand weight={800} at={K6.diff} out={K6.three} />
			<Sx x={450} y={490} text="propan-1-ol" size={32} color={INK} anchor="middle" weight={800} at={ON} />
			<MolAt m={MOL10.propan2ol} x={1370} y={380} s={1.25} at={ON} atoms={[{i: 0, at: K6.share, color: E1}, {i: 2, at: K6.share, color: E1}, {i: 1, at: K6.share + 10, color: E2}]} />
			{mv > 0.01 ? <line x1={1370} x2={1370} y1={300} y2={480} stroke={NAVY} strokeWidth={4} strokeDasharray="12 9" opacity={mv} /> : null}
			{f2 > 0.01 ? <g opacity={0.45 * f2}><MolAt m={mirror(MOL10.propan2ol)} x={1370} y={380} s={1.25} color={E1} labelColor={E1} /></g> : null}
			<Sx x={1370} y={208} text="whole structure matches" size={30} color={E1} anchor="middle" hand weight={800} at={K6.swap} out={K6.share + 20} />
			<Sx x={1370} y={510} text="propan-2-ol" size={32} color={INK} anchor="middle" weight={800} at={ON} />
			<NmrAxis g={GA} size={24} step={20} />
			<NmrSpec g={GA} lw={6} peaks={[{d: 64, h: 0.75, color: E1, at: K6.three, tag: '64', tagSize: 26}, {d: 26, h: 0.8, color: E2, at: K6.three + 6, tag: '26', tagSize: 26}, {d: 10, h: 0.85, color: E3, at: K6.three + 12, tag: '10', tagSize: 26}]} />
			<NmrAxis g={GB} size={24} step={20} />
			<NmrSpec g={GB} lw={6} peaks={[{d: 64, h: 0.6, color: E2, at: K6.two, tag: '64', tagSize: 26}, {d: 25, h: 0.85, color: E1, at: K6.two + 6, tag: '25', tagSize: 26}]} />
			<Chip x={450} y={980} text="3 peaks: propan-1-ol" size={32} color={NAVY} ink={NAVY} anchor="middle" at={K6.two + 10} />
			<Chip x={1370} y={980} text="2 peaks: propan-2-ol" size={32} color={NAVY} ink={NAVY} anchor="middle" at={K6.two + 10} />
			<Sx x={910} y={430} text="same formula, different count" size={30} color={INK_SOFT} anchor="middle" hand at={K6.same} />
		</Svg>
	);
};

// ---------- 7. the swap test on two ketones ----------
const K7 = K('swap-test', {try: 'Try the', b2: 'Butan-2-one', walk: 'Walk in', all: 'all four', four: 'four peaks.', p3: 'Pentan-3-one', middle: 'the middle.', sides: 'two sides', three: 'three peaks.', env: 'counting environments'});
export const SceneSwap: React.FC = () => {
	const f = useCurrentFrame();
	const mv = prog(f, K7.middle, 14);
	const walk = prog(f, K7.walk, 30);
	return (
		<Svg>
			<Title text="The swap test" />
			<Sx x={96} y={196} text="carbons that swap places share a peak" size={42} color={NAVY} hand at={K7.try} />
			<MolAt k="butanone" x={480} y={470} s={1.7} at={K7.b2} atoms={[0, 1, 2, 3].map((i, k) => ({i, at: K7.all + k * 8, color: [E1, E2, E3, E4][k]}))} />
			<Sx x={480} y={680} text="butan-2-one" size={34} color={INK} anchor="middle" weight={800} at={K7.b2} />
			{walk > 0.01 ? <g opacity={prog(f, K7.walk, 8)}>
				<Arrow a={[200, 580]} b={[200 + 140 * walk, 540]} at={K7.walk} color={INK_SOFT} />
				<Arrow a={[760, 580]} b={[760 - 220 * walk, 540]} at={K7.walk} color={INK_SOFT} />
				<Sx x={480} y={740} text="walk in from each end: the routes differ" size={30} color={INK_SOFT} anchor="middle" hand at={ON} />
			</g> : null}
			<Chip x={480} y={780} text="4 peaks" size={40} color={NAVY} ink={NAVY} anchor="middle" at={K7.four} sw={4} />
			<MolAt k="pentan3one" x={1360} y={440} s={1.6} at={K7.p3} atoms={[{i: 0, at: K7.sides, color: E1}, {i: 4, at: K7.sides, color: E1}, {i: 1, at: K7.sides + 8, color: E2}, {i: 3, at: K7.sides + 8, color: E2}, {i: 2, at: K7.sides + 16, color: E3}]} />
			{mv > 0.01 ? <line x1={1360} x2={1360} y1={300} y2={560} stroke={NAVY} strokeWidth={4} strokeDasharray="12 9" opacity={mv} /> : null}
			<Sx x={1360} y={720} text="pentan-3-one" size={34} color={INK} anchor="middle" weight={800} at={K7.p3} />
			<Chip x={1360} y={780} text="5 carbons, 3 peaks" size={40} color={NAVY} ink={NAVY} anchor="middle" at={K7.three} sw={4} />
			<Chip x={960} y={900} text="atoms ≠ environments" size={40} color={AMBER_INK} ink={INK} anchor="middle" at={K7.env} sw={4} />
			{void MOLS}
		</Svg>
	);
};

// ---------- 8. one line each, heights aren't counts ----------
const K8 = K('single-lines', {expect: 'You might', not: 'Not here.', one: 'one carbon', rarely: 'rarely bonded', machine: 'The machine', decoupling: 'called decoupling.', sharp: 'one sharp', heights: 'Peak heights', count: 'Count the', sit: 'they sit'});
const G8: NG = {x: 160, y: 640, w: 1000, h: 300, d0: 80};
export const SceneLines: React.FC = () => {
	const f = useCurrentFrame();
	const in1 = vis(f, K8.one, K8.machine + 20, 12);
	const in2 = prog(f, K8.decoupling - 10, 12);
	const col = smooth(prog(f, K8.decoupling + 20, 30));
	return (
		<Svg>
			<Title text="One line each, and heights aren't counts" />
			<NmrAxis g={G8} />
			<NmrSpec g={G8} peaks={[{d: 64, h: 0.85, color: E2}, {d: 25, h: 0.6, color: E1}]} tmsTag="TMS" />
			<Chip x={dx(G8, 25) + 20} y={G8.y + G8.h * 0.4 + 20} text="2 carbons" size={28} color={E1} ink={E1} />
			<Chip x={dx(G8, 64) + 20} y={G8.y + G8.h * 0.15 + 20} text="1 carbon" size={28} color={E2} ink={E2} />
			<Sx x={160} y={610} text="propan-2-ol" size={30} color={INK_SOFT} weight={800} at={ON} />
			<Mistake x={1220} y={640} text="taller = more carbons" size={38} at={K8.expect + 20} cross={K8.not} />
			{in1 > 0.01 ? <g opacity={in1}>
				<rect x={110} y={150} width={640} height={400} rx={18} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
				{Array.from({length: 100}, (_, i) => <circle key={i} cx={150 + (i % 20) * 22} cy={200 + Math.floor(i / 20) * 26} r={8} fill={i === 37 ? E4 : '#c9c3b6'} />)}
				<Sx x={430} y={352} text="¹³C: about 1.1%" size={30} color={E4} anchor="middle" hand weight={800} at={ON} />
				<T x={140} y={400} w={590} text="reason 1: ¹³C is rarely bonded to another ¹³C" size={32} color={INK} at={K8.rarely} />
			</g> : null}
			{in2 > 0.01 ? <g opacity={in2}>
				<rect x={820} y={150} width={640} height={400} rx={18} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
				{[-3, -1, 1, 3].map((k, i) => <rect key={i} x={1140 + k * 22 * (1 - col) - 3} y={330 - (i === 1 || i === 2 ? 90 : 50) * (1 - col) - 130 * col} width={6} height={(i === 1 || i === 2 ? 90 : 50) * (1 - col) + 130 * col} fill={col > 0.9 && i !== 1 ? 'none' : INK} />)}
				<line x1={1020} x2={1260} y1={330} y2={330} stroke={INK} strokeWidth={3} />
				<T x={850} y={400} w={590} text="reason 2: decoupling stops hydrogens splitting the line" size={32} color={INK} />
			</g> : null}
			<g opacity={prog(f, K8.sharp, 12)}>
				<rect x={1220} y={820} width={600} height={170} rx={18} fill={CARD} stroke={NAVY} strokeWidth={3} />
				<Sx x={1245} y={880} text="each environment: one sharp line" size={34} color={INK} weight={700} at={ON} />
				<Sx x={1245} y={950} text="heights are not carbon counts" size={34} color={NAVY} weight={800} at={K8.heights} />
			</g>
			<Sx x={1220} y={1040} text="count the lines, and read where they sit" size={34} color={NAVY} hand at={K8.count} />
			{void DrawPath}{void GREYT}{void E3}{void PicH}
		</Svg>
	);
};
