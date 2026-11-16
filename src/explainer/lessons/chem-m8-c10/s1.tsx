// C8-10 scenes 1 to 7: the hook (c08's bottle Y), bonds vibrate (balls and spring, the beam with a gap), reading the
// chart (transmittance, dips, wavenumber running backwards), what sets the position (stiffer spring, lighter ball, the
// analogy's limit), the data sheet, C–H nearly everywhere (cyclohexane), and the broad alcohol O–H (ethanol).
// Layout: heading top left; the IR trace fills the upper two thirds; the lower strip holds the structures or the card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, Arrow, BandMark, Beam, CARD, CHC, CO1, COC, Chip, DataSheet, EDGE, GREYT, GTag, INK, INK_SOFT, IRAxes, IRTrace, MOL10, MolAt, NAVY, NHC, OHC, Pic, PicH, RING10, RangeShade, Spring, Svg, Sx, T, Title, prog, pulse, vis, wx, ty,
} from './parts';
import type {IG} from './parts';
import {IR_cyclohexane, IR_ethanol} from './irdata';
import {PL} from './assets';
import {K} from './common';

const ON = -1000;
export const TITLE = 'Which bonds are in there?';
export const Task: React.FC<{text: string; at?: number}> = ({text, at = 2}) => <Sx x={96} y={196} text={text} size={44} color={NAVY} hand at={at} />;
/** The reading-size trace (upper two thirds) and the lower strip. */
export const G: IG = {x: 230, y: 250, w: 1560, h: 400};
export const LOW = 820;

/** A structure with an optional ring on its OH / C=O / N–H bond. */
export const Struct: React.FC<{k: keyof typeof MOL10; x: number; y: number; s?: number; at?: number; out?: number; name?: string; ring?: {g: 'oh' | 'co' | 'nh' | 'c1'; at: number; color: string}[]; o?: number; nameDy?: number}> = ({k, x, y, s = 0.8, at = ON, out, name, ring = [], o = 1, nameDy = 110}) => {
	const r = RING10[k] ?? {};
	return (
		<g>
			<MolAt m={MOL10[k]} x={x} y={y} s={s} at={at} out={out} o={o} rings={ring.filter(q => r[q.g]).map(q => ({bond: r[q.g] as [number, number], at: q.at, color: q.color}))} />
			{name ? <Sx x={x} y={y + nameDy * s + 20} text={name} size={30} color={INK} anchor="middle" weight={800} at={at} out={out} opacity={o} /> : null}
		</g>
	);
};

// ---------- 1. hook ----------
const K1 = K('hook', {remember: 'Remember the', cyclo: 'cyclohexane,', tbu: '2-methylpropan-2-ol,', tert: 'tertiary alcohol', oh: 'O H group', ir: 'An infrared', bonds: 'shows bonds', quickly: 'quickly'});
const GH: IG = {x: 1030, y: 760, w: 760, h: 200};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const br = prog(f, K1.tert + 30, 12);
	return (
		<Svg>
			<Title text={TITLE} />
			<PicH p={PL.bottle} cx={190} cy={420} h={360} />
			<Sx x={190} y={490} text="Y" size={80} color={NAVY} anchor="middle" weight={800} at={ON} />
			<Chip x={340} y={250} text="carbonate: no fizz" size={30} color={GREYT} ink={INK} at={K1.remember + 10} />
			<Chip x={340} y={320} text="bromine water: stays orange" size={30} color={GREYT} ink={INK} at={K1.remember + 20} />
			<Chip x={340} y={390} text="dichromate: stays orange" size={30} color={GREYT} ink={INK} at={K1.remember + 30} />
			<GTag x={340} y={460} text="c08: the three tests" size={28} at={K1.remember + 40} />
			<Struct k="cyclohexane" x={330} y={790} s={0.9} at={K1.cyclo} name="cyclohexane" nameDy={90} />
			<Struct k="tBuOH" x={720} y={780} s={0.9} at={K1.tbu} name="2-methylpropan-2-ol" nameDy={120} ring={[{g: 'oh', at: K1.oh, color: OHC}]} />
			{br > 0.01 ? <g opacity={br}>
				<path d="M200,1000 L200,1016 L900,1016 L900,1000" fill="none" stroke={NAVY} strokeWidth={4} />
				<Sx x={550} y={1056} text="the tests can't tell these apart" size={32} color={NAVY} anchor="middle" hand at={ON} />
			</g> : null}
			<Pic p={PL.ir} cx={1410} cy={410} w={700} at={K1.ir - 10} slide={120} />
			<IRAxes g={GH} at={K1.bonds} size={24} yTitle="" xTitle="" yTicks={[]} />
			<Sx x={GH.x + GH.w / 2} y={GH.y + 140} text="?" size={90} color={NAVY} anchor="middle" weight={800} at={K1.quickly} />
			<Sx x={GH.x} y={GH.y - 16} text="an infrared spectrum shows the bonds" size={30} color={INK} hand at={K1.bonds} />
		</Svg>
	);
};

// ---------- 2. bonds vibrate ----------
const K2 = K('bonds-vibrate', {every: 'Every covalent', spring: 'spring.', stretches: 'stretches and', bend: 'can bend', rate: 'natural rate', shine: 'Shine infrared', absorbs: 'absorbs the', side: 'other side', dip: 'a dip'});
const GD: IG = {x: 300, y: 790, w: 1300, h: 180};
export const SceneVibrate: React.FC = () => {
	const f = useCurrentFrame();
	const dip = prog(f, K2.dip, 24);
	let d = '';
	for (let x = 0; x <= 1300; x += 8) { const u = (x - 760) / 46; d += (d ? 'L' : 'M') + (GD.x + x) + ',' + (GD.y + 22 + 120 * dip * Math.exp(-u * u)); }
	return (
		<Svg>
			<Title text="Bonds vibrate" />
			<Pic p={PL.ir} cx={1660} cy={180} w={300} o={0.9} />
			<Spring x={520} y={420} len={300} r1={58} r2={58} c1="#5d5d66" c2="#5d5d66" mode="both" bendAt={K2.bend} rate={1.1} at={K2.every} />
			<Sx x={520} y={300} text="two balls on a spring" size={34} color={INK_SOFT} anchor="middle" hand at={K2.spring} out={K2.stretches} />
			<Chip x={300} y={540} text="stretch" size={34} color={NAVY} ink={NAVY} at={K2.stretches} />
			<Chip x={560} y={540} text="bend" size={34} color={NAVY} ink={NAVY} at={K2.bend} />
			<T x={240} y={660} w={700} text="each kind of bond: its own natural rate" size={38} color={INK} at={K2.rate} />
			<Beam x0={980} x1={1820} y={430} xc={1300} at={K2.shine} gapAt={K2.absorbs + 10} />
			<Sx x={1300} y={340} text="sample" size={30} color={INK_SOFT} anchor="middle" hand at={K2.shine} />
			<Sx x={1040} y={560} text="infrared in" size={30} color={INK_SOFT} hand at={K2.shine} />
			<Sx x={1600} y={560} text="matching rate absorbed" size={30} color={AMBER_INK} anchor="middle" hand at={K2.absorbs + 10} />
			{dip > 0.01 ? <g opacity={prog(f, K2.dip, 10)}>
				<line x1={GD.x} x2={GD.x + GD.w} y1={GD.y + 22} y2={GD.y + 22} stroke="#d6c9b2" strokeWidth={2} />
				<path d={d} fill="none" stroke="#24324a" strokeWidth={4} />
				<Sx x={GD.x + 760} y={GD.y + 22 + 120 * dip + 44} text="absorbed here: a dip" size={34} color={AMBER_INK} anchor="middle" hand weight={800} at={ON} />
			</g> : null}
			<Arrow a={[1600, 600]} b={[1120, 820]} at={K2.dip} color={AMBER_INK} />
		</Svg>
	);
};

// ---------- 3. reading the chart ----------
const K3 = K('reading-chart', {trans: 'transmittance,', down: 'pointing down', wave: 'wavenumber,', recip: 'reciprocal centimetres', number: 'number of', energy: 'more energy', notice: 'Notice that', right: 'the right'});
export const SceneChart: React.FC = () => {
	const f = useCurrentFrame();
	const demo = vis(f, K3.trans + 30, K3.wave, 14);
	const pu = pulse(f, K3.down, 30);
	const sweep = prog(f, K3.right, 30);
	let d = '';
	for (let x = 0; x <= G.w; x += 8) { const u = (x - 520) / 40; d += (d ? 'L' : 'M') + (G.x + x) + ',' + ty(G, 93 - 70 * Math.exp(-u * u)); }
	return (
		<Svg>
			<Title text="Reading an infrared spectrum" />
			<IRAxes g={G} xLabelAt={K3.wave} yLabelAt={K3.trans} ticksAt={K3.right} />
			<Pic p={PL.ir} cx={1640} cy={880} w={330} o={0.9} />
			<GTag x={G.x + G.w - 470} y={G.y + 20} text="100% at the top: all the light gets through" size={28} />
			<GTag x={G.x + G.w - 470} y={G.y + G.h - 70} text="0% at the bottom: none gets through" size={28} />
			{demo > 0.01 ? <g opacity={demo}>
				{pu > 0.01 ? <circle cx={G.x + 520} cy={ty(G, 23)} r={40 + 20 * pu} fill="#f3d27a" opacity={0.5 * pu} /> : null}
				<path d={d} fill="none" stroke="#24324a" strokeWidth={3.5} />
				<Arrow a={[G.x + 700, ty(G, 50)]} b={[G.x + 560, ty(G, 26)]} at={K3.down} color={AMBER_INK} />
				<Sx x={G.x + 712} y={ty(G, 52)} text="dip = absorbed" size={36} color={AMBER_INK} hand weight={800} at={K3.down} />
			</g> : null}
			<GTag x={G.x + 712} y={ty(G, 40)} text="a dip, not a peak" size={30} at={K3.down + 20} out={K3.wave} />
			<Sx x={96} y={196} text="transmittance: the % of light that gets through" size={40} color={NAVY} hand at={K3.trans} />
			<Chip x={230} y={830} text="wavenumber: waves per cm, not wavelength" size={34} color={NAVY} ink={INK} at={K3.number} />
			<g opacity={prog(f, K3.energy, 12)}>
				<Arrow a={[1300, 860]} b={[1000, 860]} at={K3.energy} color={GREYT} />
				<Sx x={1320} y={872} text="higher energy" size={32} color={GREYT} hand at={ON} />
			</g>
			{sweep > 0.01 ? <g opacity={prog(f, K3.right, 10)}>
				<Arrow a={[G.x + G.w - 20, 960]} b={[G.x + G.w - 20 - (G.w - 60) * sweep, 960]} at={K3.right} color={AMBER_INK} width={6} />
				<Sx x={G.x + G.w / 2} y={1010} text="runs backwards: 4000 on the left" size={36} color={AMBER_INK} anchor="middle" hand weight={800} at={K3.right + 20} />
			</g> : null}
			{void wx}{void CARD}
		</Svg>
	);
};

// ---------- 4. what sets the position ----------
const K4 = K('what-sets-position', {think: 'Think of', stiffer: 'A stiffer', stronger: 'stronger bond', co: 'C equals O double', single: 'single bond', lighter: 'Lighter balls', hydrogen: 'Hydrogen is', high: 'high end', limit: 'has a', ones: 'particular ones'});
const GP: IG = {x: 230, y: 700, w: 1560, h: 10};
const Marker: React.FC<{wn: number; text: string; color: string; at: number; row?: number}> = ({wn, text, color, at, row = 0}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14);
	if (v <= 0.01) return null;
	const x = wx(GP, wn), drop = (1 - v) * -60;
	return (
		<g opacity={v} transform={`translate(0,${drop})`}>
			<path d={`M${x},${GP.y - 4} l-14,-24 l28,0 Z`} fill={color} />
			<Sx x={x} y={GP.y - 40 - row * 40} text={text} size={32} color={color} anchor="middle" weight={800} at={ON} />
		</g>
	);
};
export const ScenePosition: React.FC = () => (
	<Svg>
		<Title text="What sets where a bond absorbs" />
		<Spring x={360} y={400} len={300} r1={56} r2={56} c1="#5d5d66" c2={COC} l1="C" l2="O" thick rate={1.6} at={K4.stiffer - 20} />
		<Sx x={360} y={260} text="C=O: stronger, stiffer" size={32} color={COC} anchor="middle" hand weight={800} at={K4.stiffer} />
		<Spring x={880} y={400} len={300} r1={56} r2={56} c1="#5d5d66" c2={CO1} l1="C" l2="O" rate={0.8} at={K4.stiffer - 20} />
		<Sx x={860} y={260} text="C–O: weaker" size={32} color={CO1} anchor="middle" hand weight={800} at={K4.stiffer} />
		<Spring x={1440} y={400} len={300} r1={56} r2={28} c1="#5d5d66" c2="#f1eee7" l1="C" l2="H" rate={2.2} at={K4.lighter} />
		<Sx x={1440} y={260} text="C–H: H is the lightest atom" size={32} color={CHC} anchor="middle" hand weight={800} at={K4.lighter} />
		<IRAxes g={GP} ticksAt={ON} yTicks={[]} yTitle="" xTitle="wavenumber (cm⁻¹)" grid={false} />
		<Marker wn={1715} text="C=O ≈ 1715" color={COC} at={K4.co} />
		<Marker wn={1100} text="C–O ≈ 1100" color={CO1} at={K4.single} />
		<Marker wn={2950} text="C–H ≈ 2950" color={CHC} at={K4.high} />
		<Marker wn={3300} text="O–H, N–H ≈ 3300" color={OHC} at={K4.high + 20} row={1} />
		<rect x={230} y={850} width={1100} height={120} rx={18} fill={CARD} stroke={EDGE} strokeWidth={2.5} opacity={prog(useCurrentFrame(), K4.stronger, 12)} />
		<Sx x={260} y={898} text="stronger bond → higher wavenumber" size={40} color={INK} weight={700} at={K4.stronger} />
		<Sx x={260} y={950} text="lighter atom → higher wavenumber" size={40} color={INK} weight={700} at={K4.lighter + 20} />
		<GTag x={1380} y={880} text="a spring: any energy" size={28} at={K4.limit} />
		<Chip x={1380} y={940} text="a bond: only particular energies" size={30} color={NAVY} ink={NAVY} at={K4.ones} />
	</Svg>
);

// ---------- 5. the data sheet ----------
const K5 = K('data-sheet', {memorise: 'memorise', gives: 'data sheet', match: 'match a', shape: 'the shape', four: 'Four rows', oh: 'O H,', ch: 'C H,', co: 'C equals', nh: 'N H,', cO: ['C O.', 1]});
const GS: IG = {x: 150, y: 560, w: 800, h: 260};
export const SceneDataSheet: React.FC = () => (
	<Svg>
		<Title text="The data sheet gives the ranges" />
		<DataSheet x={1080} y={150} w={740} rowH={62} size={36} at={ON} lit={{1: K5.oh, 3: K5.oh + 6, 2: K5.ch, 5: K5.co, 0: K5.nh, 7: K5.cO}} dimRest={K5.four} />
		<T x={96} y={230} w={900} text="you don't memorise the ranges: the data sheet gives them" size={40} color={INK} at={K5.memorise} />
		<T x={96} y={370} w={900} text="match a dip to a range, then use the shape and the combination of dips" size={40} color={NAVY} at={K5.match} />
		<IRAxes g={GS} size={26} yTicks={[]} yTitle="" xTitle="where the rows sit (cm⁻¹)" ticks={[4000, 3000, 2000, 1000]} />
		<RangeShade g={GS} a={3230} b={3550} at={K5.oh} color={OHC} op={0.3} />
		<RangeShade g={GS} a={2500} b={3000} at={K5.oh + 6} color={OHC} op={0.22} />
		<RangeShade g={GS} a={2850} b={3300} at={K5.ch} color={CHC} op={0.2} />
		<RangeShade g={GS} a={1680} b={1750} at={K5.co} color={COC} op={0.4} />
		<RangeShade g={GS} a={3300} b={3500} at={K5.nh} color={NHC} op={0.25} />
		<RangeShade g={GS} a={1000} b={1300} at={K5.cO} color={CO1} op={0.3} />
		<Sx x={GS.x + 10} y={GS.y - 14} text="O–H, N–H, C–H" size={30} color={OHC} weight={800} at={K5.nh + 10} />
		<Sx x={wx(GS, 1715)} y={GS.y - 14} text="C=O" size={30} color={COC} anchor="middle" weight={800} at={K5.co} />
		<Sx x={wx(GS, 1150)} y={GS.y - 14} text="C–O" size={30} color={CO1} anchor="middle" weight={800} at={K5.cO} />
	</Svg>
);

// ---------- 6. C–H, nearly everywhere ----------
const K6 = K('ch-everywhere', {start: 'Start with', almost: 'Almost every', below: 'just below', here: "Here's cyclohexane", little: 'very little', rarely: 'rarely decides', past: 'look past'});
export const SceneCH: React.FC = () => (
	<Svg>
		<Title text={TITLE} />
		<Task text="C–H: in almost every spectrum" at={K6.start} />
		<IRAxes g={G} ticksAt={ON} />
		<RangeShade g={G} a={2850} b={3300} at={K6.below} color={CHC} op={0.18} out={K6.little} />
		<RangeShade g={G} a={3230} b={3550} at={K6.little} none />
		<RangeShade g={G} a={1680} b={1750} at={K6.little + 10} none />
		<IRTrace g={G} pts={IR_cyclohexane} at={K6.here - 40} />
		<BandMark g={G} wn={2932} t={4} top={60} rx={22} at={K6.below} color={CHC} dim={K6.past} />
		<BandMark g={G} wn={2857} t={14} top={60} rx={22} at={K6.below + 8} color={CHC} text="C–H, just below 3000" dx={140} dy={10} anchor="start" dim={K6.past} />
		<Chip x={wx(G, 3390)} y={G.y + 20} text="none" size={30} color={GREYT} ink={GREYT} anchor="middle" at={K6.little} />
		<Chip x={wx(G, 1715)} y={G.y + 20} text="none" size={30} color={GREYT} ink={GREYT} anchor="middle" at={K6.little + 10} />
		<Struct k="cyclohexane" x={300} y={920} s={0.9} at={K6.here} />
		<Sx x={420} y={900} text="cyclohexane: strong C–H dips, very little else above 1500" size={36} color={INK} hand at={K6.here} />
		<Sx x={420} y={960} text="C–H rarely decides anything: note it, look past it" size={36} color={NAVY} hand at={K6.rarely} />
	</Svg>
);

// ---------- 7. alcohol O–H: broad and rounded ----------
const K7 = K('alcohol-oh', {now: 'Now the', hbond: 'hydrogen bond', weakens: 'weakens its', spread: 'a spread', broad: 'broad, rounded', ethanol: 'In ethanol', forty: 'thirty-three forty'});
export const SceneAlcohol: React.FC = () => {
	const f = useCurrentFrame();
	const fan = vis(f, K7.spread, K7.broad + 30, 12);
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="Alcohol O–H: broad and rounded" at={K7.now} />
			<IRAxes g={G} ticksAt={ON} />
			<RangeShade g={G} a={3230} b={3550} at={K7.forty} color={OHC} op={0.16} />
			<IRTrace g={G} pts={IR_ethanol} at={K7.now + 10} />
			{fan > 0.01 ? <g opacity={fan}>{[3250, 3290, 3320, 3350, 3380, 3420, 3460].map((w, i) => <line key={w} x1={wx(G, w)} x2={wx(G, w)} y1={G.y + 10} y2={ty(G, 20)} stroke={OHC} strokeWidth={3} opacity={prog(f, K7.spread + i * 4, 8)} />)}</g> : null}
			<BandMark g={G} wn={3346} t={12} top={60} rx={70} at={K7.forty} color={OHC} text="≈ 3340: O–H (alcohol), broad" dx={-51} dy={-380} anchor="start" />
			<BandMark g={G} wn={1049} t={5} top={50} rx={22} at={K7.forty + 40} color={CO1} text="≈ 1050: C–O" dx={-34} dy={0} anchor="end" dim={K7.forty + 70} />
			<Struct k="ethanol" x={260} y={930} s={0.85} at={K7.now} name="ethanol" ring={[{g: 'oh', at: K7.now + 20, color: OHC}]} />
			{[0, 1, 2].map(i => {
				const k = prog(f, K7.hbond + i * 8, 12);
				if (k <= 0.01) return null;
				const x = 620 + i * 300, L = [70, 86, 62][i];
				return (
					<g key={i} opacity={k}>
						<Sx x={x} y={930} text="O" size={40} color="#8f3f26" anchor="middle" weight={800} at={ON} />
						<line x1={x + 16} x2={x + 16 + L} y1={918} y2={918} stroke={INK} strokeWidth={4} />
						<Sx x={x + 30 + L} y={930} text="H" size={36} color={INK} anchor="middle" weight={800} at={ON} />
						{i < 2 ? <line x1={x + 50 + L} x2={x + 285} y1={918} y2={918} stroke={OHC} strokeWidth={3} strokeDasharray="6 7" /> : null}
					</g>
				);
			})}
			<Sx x={620} y={1000} text="each hydrogen bond weakens its O–H by a different amount" size={32} color={INK} hand at={K7.weakens} />
			<GTag x={1380} y={860} text="M7: hydrogen bonding" size={28} at={K7.hbond} />
			{void PicH}{void COC}{void NHC}{void LOW}
		</Svg>
	);
};
