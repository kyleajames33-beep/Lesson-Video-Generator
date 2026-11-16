// C8-10 scenes 8 to 14: the acid O–H (very broad, low, with a C=O; ethanoic acid pairs), C=O strong and sharp but not
// which kind (propanone; one "no broad O–H" bracket over both shades; the weak 3414 dip chip below the trace), N–H
// narrower and weaker (propan-1-amine against ethanol), the fingerprint region (propan-1-ol over propan-2-ol), the
// routine and a missing band, bottle Y solved, and the memory aid (beard + sword).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, BandMark, CARD, CHC, CO1, COC, Chip, EDGE, GREYT, GTag, INK, INK_SOFT, IRAxes, IRTrace, MOL10, MolAt, Mistake, NAVY, NHC, OHC, PicH, RangeShade, RED, SpanBracket, Svg, Sx, T, Title, TraceFill, mirror, prog, pulse, vis, wx, ty, DrawPath,
} from './parts';
import type {IG} from './parts';
import {IR_butan1ol, IR_cyclohexane, IR_ethanoicAcid, IR_ethanol, IR_propan1ol, IR_propan2ol, IR_propanone, IR_propylamine, IR_tBuOH} from './irdata';
import {G, Struct, TITLE, Task} from './s1';
import {PL} from './assets';
import {K} from './common';

const ON = -1000;
/** A small dim thumbnail trace (lower right) used where the narration compares. */
const GT: IG = {x: 1290, y: 820, w: 500, h: 170};
const Thumb: React.FC<{pts: [number, number][]; label: string; at?: number; out?: number; o?: number}> = ({pts, label, at = ON, out, o = 0.75}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<IRAxes g={GT} size={26} yTicks={[]} yTitle="" xTitle="" ticks={[4000, 2500, 1000]} />
			<IRTrace g={GT} pts={pts} width={2.4} />
			<Sx x={GT.x} y={GT.y - 12} text={label} size={28} color={INK_SOFT} weight={800} at={ON} />
		</g>
	);
};

// ---------- 8. acid O–H ----------
const K8 = K('acid-oh', {acid: 'A carboxylic', pair: 'pair up', weakens: 'That weakens', lower: 'sits lower', very: 'very broad,', running: 'running right', co: 'seventeen ten', points: 'points to', acidEnd: 'an acid.'});
export const SceneAcid: React.FC = () => {
	const a = MOL10.ethanoic, b = mirror(MOL10.ethanoic);
	const f = useCurrentFrame();
	const hb = prog(f, K8.pair + 10, 12);
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="Acid O–H: very broad, and a C=O" at={K8.acid} />
			<IRAxes g={G} ticksAt={ON} />
			<RangeShade g={G} a={2500} b={3000} at={K8.very} color={OHC} op={0.1} />
			<TraceFill g={G} pts={IR_ethanoicAcid} a={3560} b={2480} at={K8.very} color={OHC} op={0.28} />
			<IRTrace g={G} pts={IR_ethanoicAcid} at={K8.acid + 10} />
			<SpanBracket g={G} a={2500} b={3000} y={G.y - 2} text="data sheet: 2500 to 3000" at={K8.very + 20} color={OHC} size={28} />
			<Sx x={wx(G, 3050)} y={ty(G, 10)} text="O–H (acid): very broad, low" size={32} color={OHC} anchor="middle" hand weight={800} at={K8.very} />
			<Sx x={wx(G, 2937)} y={ty(G, 46)} text="C–H dips on top" size={28} color={CHC} anchor="middle" hand weight={800} at={K8.running} />
			<BandMark g={G} wn={1714} t={4} top={50} rx={22} at={K8.co} color={COC} text="≈ 1715: C=O" dx={36} dy={-6} anchor="start" />
			<MolAt m={a} x={300} y={920} s={0.75} at={K8.acid} />
			<MolAt m={b} x={720} y={920} s={0.75} at={K8.acid} />
			{hb > 0.01 ? <g opacity={hb}>
				<line x1={420} x2={590} y1={920} y2={870} stroke={OHC} strokeWidth={3} strokeDasharray="6 7" />
				<line x1={420} x2={590} y1={870} y2={920} stroke={OHC} strokeWidth={3} strokeDasharray="6 7" />
			</g> : null}
			<Sx x={510} y={1030} text="pair: two hydrogen bonds" size={32} color={OHC} anchor="middle" hand weight={800} at={K8.pair + 10} />
			<Chip x={830} y={850} text="very broad O–H + C=O → carboxylic acid" size={30} color={NAVY} ink={NAVY} at={K8.points} sw={4} />
			<Thumb pts={IR_ethanol} label="ethanol: rounded O–H" at={K8.acidEnd + 20} />
			<GTag x={830} y={940} text="same bond, different shape and place" size={28} at={K8.acidEnd + 30} />
			{void RED}{void CARD}{void EDGE}
		</Svg>
	);
};

// ---------- 9. C=O ----------
const K9 = K('carbonyl', {easiest: 'easiest to', strong: 'strong and', prop: 'Propanone,', noOH: 'no O H band', but: 'But ketones,', ald: 'aldehydes,', est: 'esters and', acids: 'acids all', kind: 'which kind', other: 'The other'});
const CARDS: {k: keyof typeof MOL10; n: string; at: keyof typeof K9}[] = [
	{k: 'propanone', n: 'propanone (ketone)', at: 'prop'},
	{k: 'propanal', n: 'propanal (aldehyde)', at: 'ald'},
	{k: 'meEthanoate', n: 'methyl ethanoate (ester)', at: 'est'},
	{k: 'ethanoic', n: 'ethanoic acid (acid)', at: 'acids'},
];
export const SceneCarbonyl: React.FC = () => {
	const f = useCurrentFrame();
	const br = prog(f, K9.kind, 12);
	const x0 = wx(G, 3550), x1 = wx(G, 2500);
	const chip = vis(f, K9.noOH + 6, undefined, 12);
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="C=O: strong and sharp, but which kind?" at={K9.easiest} />
			<IRAxes g={G} ticksAt={ON} />
			<RangeShade g={G} a={1680} b={1750} at={K9.strong} color={COC} op={0.2} />
			<RangeShade g={G} a={3230} b={3550} at={K9.noOH} color={OHC} op={0.1} />
			<RangeShade g={G} a={2500} b={3000} at={K9.noOH} color={OHC} op={0.1} />
			<IRTrace g={G} pts={IR_propanone} at={K9.prop - 30} />
			<BandMark g={G} wn={1715} t={4} top={50} rx={22} at={K9.strong} color={COC} text="≈ 1715: C=O" dx={36} dy={-6} anchor="start" />
			{chip > 0.01 ? <g opacity={chip}>
				<path d={`M${x0},${G.y + 6} L${x0},${G.y - 8} L${x1},${G.y - 8} L${x1},${G.y + 6}`} fill="none" stroke={OHC} strokeWidth={3} />
				<Chip x={x1 + 16} y={G.y - 40} text="no broad O–H" size={30} color={OHC} ink={OHC} />
			</g> : null}
			<g opacity={vis(f, K9.noOH + 30, K9.kind, 12)}>
				<line x1={wx(G, 3414)} y1={ty(G, 80) + 6} x2={wx(G, 3414)} y2={ty(G, 52)} stroke={GREYT} strokeWidth={2.5} strokeDasharray="5 4" />
				<Chip x={wx(G, 3414)} y={ty(G, 52)} text="weak, narrow: not an O–H band" size={26} color={GREYT} fill="#f1eee7" ink={GREYT} anchor="middle" />
			</g>
			{CARDS.map((c, i) => {
				const at = K9[c.at];
				const x = 96 + i * 440;
				return (
					<g key={c.k} opacity={prog(f, at, 12)}>
						<rect x={x} y={800} width={410} height={210} rx={18} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
						<Struct k={c.k} x={x + 205} y={880} s={0.72} at={at} ring={[{g: 'co', at: K9.kind, color: COC}]} />
						<Sx x={x + 205} y={990} text={c.n} size={28} color={INK} anchor="middle" weight={800} at={at} />
					</g>
				);
			})}
			{br > 0.01 ? <g opacity={br}>
				<path d="M110,1030 L110,1046 L1806,1046 L1806,1030" fill="none" stroke={COC} strokeWidth={4} />
			</g> : null}
			<Chip x={1824} y={710} text="all have C=O: a carbonyl, not which kind" size={30} color={COC} ink={COC} anchor="end" at={K9.kind} />
			<GTag x={96} y={720} text="the other dips, and the formula, help you decide" size={28} at={K9.other} />
		</Svg>
	);
};

// ---------- 10. N–H ----------
const K10 = K('nh', {primary: 'Primary and', overlapping: 'overlapping the', narrower: 'narrower and', amine: 'Propan-1-amine,', bands: 'two N H bands'});
export const SceneNH: React.FC = () => (
	<Svg>
		<Title text={TITLE} />
		<Task text="N–H: narrower and weaker" at={K10.primary} />
		<IRAxes g={G} ticksAt={ON} />
		<RangeShade g={G} a={3230} b={3550} at={K10.overlapping} color={OHC} op={0.12} />
		<RangeShade g={G} a={3300} b={3500} at={K10.overlapping + 8} color={NHC} op={0.18} />
		<IRTrace g={G} pts={IR_propylamine} at={K10.primary + 10} />
		<BandMark g={G} wn={3371} t={58} top={90} rx={16} at={K10.bands} color={NHC} />
		<BandMark g={G} wn={3294} t={58} top={90} rx={16} at={K10.bands + 6} color={NHC} text="N–H: two narrow bands (NH_2)" dx={15} dy={-260} anchor="start" />
		<Struct k="propylamine" x={300} y={920} s={0.8} at={K10.primary} name="propan-1-amine" ring={[{g: 'nh', at: K10.amine, color: NHC}]} />
		<GTag x={620} y={850} text="M7: amines" size={28} at={K10.primary + 20} />
		<GTag x={620} y={910} text="tertiary amines: no N–H" size={28} at={K10.primary + 40} />
		<T x={620} y={1010} w={640} text="an N–H dip is narrower and weaker than an O–H band" size={32} color={INK} at={K10.narrower} />
		<Thumb pts={IR_ethanol} label="ethanol" at={K10.overlapping} />
		<BandMark g={GT} wn={3346} t={12} top={60} rx={30} at={K10.bands + 10} color={OHC} />
		<Sx x={GT.x + GT.w} y={GT.y - 12} text="O–H: one broad band" size={28} color={OHC} anchor="end" hand weight={800} at={K10.bands + 10} />
	</Svg>
);

// ---------- 11. the fingerprint region ----------
const K11 = K('fingerprint', {below: 'Below about', whole: 'Whole groups', called: 'fingerprint region', p1: 'Propan-1-ol and', same: 'same bands', differ: 'fingerprints differ', match: 'to match', hundred: 'thirteen hundred'});
const GA: IG = {x: 420, y: 240, w: 1380, h: 210};
const GB: IG = {x: 420, y: 530, w: 1380, h: 210};
export const SceneFingerprint: React.FC = () => {
	const f = useCurrentFrame();
	const fp = prog(f, K11.below + 10, 14);
	const pl = pulse(f, K11.same, 34), pr = pulse(f, K11.differ, 34);
	const shade = (g: IG, a: number, b: number, col: string, k: number, base = 0) => <rect x={wx(g, a)} y={g.y} width={wx(g, b) - wx(g, a)} height={g.h} fill={col} opacity={base + 0.25 * k} />;
	return (
		<Svg>
			<Title text="The fingerprint region" />
			{[GA, GB].map((g, i) => <g key={i}>
				<IRAxes g={g} ticksAt={i === 1 ? ON : 100000} yTicks={[0, 100]} yTitle="" xTitle={i === 1 ? 'wavenumber (cm⁻¹)' : ''} size={26} />
				{shade(g, 1500, 500, '#e9c46a', 0, 0.12 * fp)}
				{shade(g, 4000, 1500, '#7a4fb0', pl)}
				{shade(g, 1500, 500, '#e9c46a', pr)}
			</g>)}
			<IRTrace g={GA} pts={IR_propan1ol} at={K11.p1 - 20} width={2.6} />
			<IRTrace g={GB} pts={IR_propan2ol} at={K11.p1} width={2.6} />
			{fp > 0.01 ? <line x1={wx(GA, 1500)} x2={wx(GA, 1500)} y1={GA.y - 10} y2={GB.y + GB.h} stroke={AMBER_INK} strokeWidth={4} opacity={fp} /> : null}
			<Sx x={wx(GA, 1000)} y={GA.y - 16} text="fingerprint region" size={32} color={AMBER_INK} anchor="middle" hand weight={800} at={K11.called} />
			<Sx x={wx(GA, 2750)} y={GA.y - 16} text="same bands above 1500" size={32} color={OHC} anchor="middle" hand weight={800} at={K11.same} />
			<Struct k="propan1ol" x={230} y={340} s={0.55} at={K11.p1 - 20} />
			<Sx x={230} y={420} text="propan-1-ol" size={28} color={INK} anchor="middle" weight={800} at={K11.p1 - 20} />
			<Struct k="propan2ol" x={230} y={630} s={0.6} at={K11.p1} />
			<Sx x={230} y={720} text="propan-2-ol" size={28} color={INK} anchor="middle" weight={800} at={K11.p1} />
			<BandMark g={GA} wn={1055} t={9} top={60} rx={16} at={K11.hundred} color={CO1} text="≈ 1060" dx={-24} dy={-30} anchor="end" />
			<BandMark g={GB} wn={1129} t={20} top={65} rx={16} at={K11.hundred + 8} color={CO1} text="≈ 1130" dx={-24} dy={-191} anchor="end" />
			<GTag x={96} y={880} text="c02: position isomers" size={28} at={K11.p1} />
			<GTag x={96} y={940} text="whole groups of atoms vibrate together" size={28} at={K11.whole} />
			<Chip x={760} y={880} text="different patterns below 1500" size={32} color={AMBER_INK} ink={AMBER_INK} at={K11.differ} />
			<Mistake x={1300} y={870} text="assign every dip" size={38} at={K11.match - 10} cross={K11.match + 10} note="match a known spectrum" noteW={500} />
			<Sx x={760} y={1010} text="a strong C–O dip, 1000 to 1300, still helps" size={34} color={CO1} hand weight={800} at={K11.hundred} />
		</Svg>
	);
};

// ---------- 12. the routine ----------
const K12 = K('routine', {so: 'a routine', scan: 'Scan from', q1: 'Is there', q2: 'A very', q3: 'A strong C equals', q4: 'A strong C O', missing: 'a missing', no: 'No dip', list: 'your list'});
type Step = {n: string; t: string; a: number; b: number; col: string; at: keyof typeof K12};
const STEPS: Step[] = [
	{n: '1', t: 'O–H (alcohol): 3230 to 3550, broad?', a: 3230, b: 3550, col: OHC, at: 'q1'},
	{n: '2', t: 'O–H (acid): 2500 to 3000, very broad?', a: 2500, b: 3000, col: OHC, at: 'q2'},
	{n: '3', t: 'C=O: 1680 to 1750, strong?', a: 1680, b: 1750, col: COC, at: 'q3'},
	{n: '4', t: 'C–O: 1000 to 1300, strong?', a: 1000, b: 1300, col: CO1, at: 'q4'},
];
const GR: IG = {x: 230, y: 240, w: 1560, h: 330};
export const SceneRoutine: React.FC = () => {
	const f = useCurrentFrame();
	const miss = prog(f, K12.missing + 20, 12);
	return (
		<Svg>
			<Title text="A routine that doesn't miss anything" />
			<Sx x={96} y={196} text="scan from the left" size={40} color={NAVY} hand at={K12.scan} />
			<IRAxes g={GR} ticksAt={ON} />
			{STEPS.map((s, i) => <g key={s.n}>
				<RangeShade g={GR} a={s.a} b={s.b} at={K12[s.at]} color={s.col} op={0.2} out={i === 2 ? K12.missing + 20 : undefined} />
				<g opacity={prog(f, K12[s.at], 12)}>
					<circle cx={(wx(GR, s.a) + wx(GR, s.b)) / 2} cy={GR.y + 40} r={24} fill={s.col} />
					<Sx x={(wx(GR, s.a) + wx(GR, s.b)) / 2} y={GR.y + 51} text={s.n} size={30} color={CARD} anchor="middle" weight={800} at={ON} />
				</g>
				<Chip x={96 + (i % 2) * 860} y={720 + Math.floor(i / 2) * 76} text={`${s.n}  ${s.t}`} size={32} color={s.col} ink={INK} at={K12[s.at]} />
			</g>)}
			<RangeShade g={GR} a={1680} b={1750} at={K12.missing + 20} none />
			{miss > 0.01 ? <Chip x={wx(GR, 1715)} y={GR.y + GR.h - 70} text="none" size={30} color={GREYT} ink={GREYT} anchor="middle" o={miss} /> : null}
			<Sx x={96} y={920} text="none at 1680 to 1750 → rule out the C=O candidates on your list" size={38} color={COC} hand weight={800} at={K12.no} />
			{['ketone', 'aldehyde', 'ester', 'acid', 'alcohol', 'alkane'].map((n, i) => {
				const struck = i < 4;
				const x = 96 + i * 250;
				const v = prog(f, K12.list - 20 + i * 4, 12);
				return v > 0.01 ? <g key={n} opacity={v}>
					<rect x={x} y={960} width={230} height={58} rx={29} fill={struck ? '#f1eee7' : '#e3f1e8'} stroke={struck ? GREYT : '#2f8a5b'} strokeWidth={3} />
					<Sx x={x + 115} y={999} text={n} size={30} color={struck ? GREYT : INK} anchor="middle" weight={800} at={ON} />
					{struck ? <DrawPath d={`M${x + 14},${1010} L${x + 216},${968}`} at={K12.list - 10 + i * 4} dur={10} color={RED} width={5} /> : null}
				</g> : null;
			})}
			<GTag x={1600} y={970} text="data-sheet range" size={26} at={K12.list} />
		</Svg>
	);
};

// ---------- 13. bottle Y, solved ----------
const K13 = K('bottle-y', {back: 'Back to', broad: 'a broad', s3370: 'thirty-three seventy', alcohol: "That's an", noCO: 'no C equals', twelve: 'twelve hundred', cyclo: 'Cyclohexane has', cant: "can't give", holds: 'bottle holds', see: 'see'});
const GY: IG = {x: 430, y: 250, w: 1380, h: 400};
export const SceneBottle: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="Bottle Y, solved" />
			<PicH p={PL.bottle} cx={190} cy={430} h={320} />
			<Sx x={190} y={492} text="Y" size={70} color={NAVY} anchor="middle" weight={800} at={ON} out={K13.holds} />
			<Chip x={190} y={620} text="2-methylpropan-2-ol" size={26} color={OHC} ink={OHC} anchor="middle" at={K13.holds} />
			<IRAxes g={GY} ticksAt={ON} />
			<IRTrace g={GY} pts={IR_cyclohexane} color="#b7b0a3" width={2.2} o={0.6} />
			<Sx x={wx(GY, 2600)} y={ty(GY, 96) - 4} text="cyclohexane (faint)" size={26} color={GREYT} anchor="middle" hand at={ON} />
			<IRTrace g={GY} pts={IR_tBuOH} at={K13.back + 10} />
			<Sx x={GY.x + GY.w} y={GY.y - 18} text="bottle Y" size={32} color={INK} anchor="end" weight={800} at={K13.back} />
			<BandMark g={GY} wn={3361} t={16} top={70} rx={60} at={K13.s3370} color={OHC} text="1  ≈ 3370: O–H (alcohol), broad" dx={18} dy={-364} anchor="start" />
			<RangeShade g={GY} a={1680} b={1750} at={K13.noCO} none />
			<Chip x={wx(GY, 1715)} y={GY.y + 20} text="3  none" size={28} color={GREYT} ink={GREYT} anchor="middle" at={K13.noCO} />
			<BandMark g={GY} wn={1198} t={16} top={70} rx={18} at={K13.twelve} color={CO1} text="4  ≈ 1200: C–O" dx={30} dy={-6} anchor="start" />
			<Struct k="cyclohexane" x={620} y={890} s={0.8} at={ON} name="cyclohexane" nameDy={100} o={1 - 0.55 * prog(f, K13.cant, 12)} />
			{prog(f, K13.cant, 12) > 0.01 ? <DrawPath d="M520,980 L720,800" at={K13.cant} dur={10} color={RED} width={6} /> : null}
			<g opacity={prog(f, K13.holds, 12)}><rect x={890} y={770} width={420} height={260} rx={20} fill="#fff4d8" stroke={AMBER_INK} strokeWidth={4} /></g>
			<Struct k="tBuOH" x={1100} y={860} s={0.8} at={ON} name="2-methylpropan-2-ol" nameDy={150} ring={[{g: 'oh', at: K13.holds, color: OHC}]} />
			<T x={1360} y={820} w={460} text="tests: no 1° or 2° alcohol. IR: an O–H is there." size={34} color={NAVY} at={K13.see - 10} />
			{void CHC}{void EDGE}{void CARD}
		</Svg>
	);
};

// ---------- 14. memory aid ----------
const K14 = K('memory-aid', {beard: 'beard plus', hangs: 'hangs down', sword: 'the sword', rounded: 'A rounded', alcohol: 'an alcohol'});
const GM: IG = {x: 230, y: 300, w: 1000, h: 420};
const GE: IG = {x: 1340, y: 420, w: 460, h: 220};
export const SceneMemory: React.FC = () => (
	<Svg>
		<Sx x={96} y={170} text="Beard + sword = acid." size={64} color={NAVY} hand at={K14.beard} />
		<IRAxes g={GM} ticksAt={ON} size={26} />
		<TraceFill g={GM} pts={IR_ethanoicAcid} a={3560} b={2480} at={K14.hangs} color={OHC} op={0.32} />
		<IRTrace g={GM} pts={IR_ethanoicAcid} />
		<Sx x={wx(GM, 3000)} y={ty(GM, 10)} text="beard" size={40} color={OHC} anchor="middle" hand weight={800} at={K14.hangs} />
		<BandMark g={GM} wn={1714} t={4} top={50} rx={18} at={K14.sword} color={COC} text="sword" dx={30} dy={-6} anchor="start" size={40} />
		<Sx x={GM.x} y={GM.y - 46} text="ethanoic acid" size={30} color={INK_SOFT} weight={800} at={ON} />
		<IRAxes g={GE} size={26} yTicks={[]} yTitle="" xTitle="" ticks={[4000, 2500, 1000]} at={K14.rounded} />
		<TraceFill g={GE} pts={IR_ethanol} a={3700} b={3050} at={K14.rounded + 10} color={OHC} op={0.3} />
		<IRTrace g={GE} pts={IR_ethanol} at={K14.rounded} width={2.4} />
		<Sx x={GE.x} y={GE.y - 14} text="ethanol" size={28} color={INK_SOFT} weight={800} at={K14.rounded} />
		<T x={GE.x} y={GE.y + GE.h + 60} w={460} text="rounded, no sword: alcohol" size={36} color={OHC} at={K14.alcohol} />
		{void IR_butan1ol}{void NHC}{void CHC}
	</Svg>
);
