// M8 C03b scenes 1 to 6: the hook (the copper bottle returns: copper what?; the anion strip), step 1 dilute acid
// (carbonate fizzes; the delivery line turns limewater milky), acetate (no fizz; warm, wisps and the waft arc; the
// vinegar anchor; neutral FeCl3 gives the red-brown complex), why acidify first (carbonate fakes barium and silver
// results; acid removes it as CO2; HCl adds chloride, so nitric acid), step 2 sulfate (acidified barium, white BaSO4,
// the gravimetric callback) and step 3 the halides (acidified silver; white, cream, pale yellow; group 17 shading).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {CU_DEEP, FLAME} from '../chem-m8-c03a/common';
import {BOTTLE, FE_BOTTLE, FUNNEL, Heading, LABEL_A, LIME, LIME_IN, TUBES, TUBE_A, VINEGAR, sc} from './common';
import {
	ACHART_E, ACHART_N, AChip, AFAM, ANIONS8, Bubbles, CHART_N as _unused, C_AC, C_AG, C_BA, C_CX, Chart, Chip, Delivery, DimG, Dropper, FallDrop, Fade, FlaskStates, GREYX, INK, INK_SOFT, ION, LockLens,
	Note, Overlay, PPT, PicF, Shimmer, Suspects, SwapLens, Sx, WaftArc, Wisps, allT, natPt, picW, smooth, tubePt, vis,
} from './parts';
import type {CT, SusSt} from './parts';

void _unused;
export const TX = 60, TY = 420, TH = 400;
export const merge = (...ts: CT[]): CT => Object.assign({}, ...ts);
export const Anions: React.FC<{st?: Record<string, SusSt>; write?: number[]}> = ({st, write}) => <Suspects ions={ANIONS8} fs={22} st={st} write={write} />;
export const Chart2: React.FC<{T: CT}> = ({T}) => <Chart nodes={ACHART_N} edges={ACHART_E} T={T} />;

/** A rack tube with an optional dropper, drops and cross-fading states. */
export const TubeDrop: React.FC<{x?: number; y?: number; h?: number; states: {p: typeof TUBES.clear; at: number; dur?: number}[]; drops?: number[]; dropAt?: number; dropOut?: number; color?: string; label?: string; labelColor?: string; ds?: number}> = ({x = TX, y = TY, h = TH, states, drops = [], dropAt, dropOut, color = '#dfe6ee', label, labelColor, ds = 1}) => {
	const [mx, my] = tubePt(x, y, h, TUBE_A.cx, TUBE_A.mouth);
	const [, sy] = tubePt(x, y, h, TUBE_A.cx, TUBE_A.surf);
	return (
		<g>
			<FlaskStates x={x} y={y} h={h} states={states} />
			{dropAt !== undefined ? <Dropper x={mx} y={my - 34} s={ds} at={dropAt} out={dropOut} color={color} label={label} labelColor={labelColor} /> : null}
			{drops.map((t, i) => <FallDrop key={i} x={mx} y0={my - 30} y1={sy + 6} at={t} color={color} />)}
		</g>
	);
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {back: 'Back to', pale: 'pale blue', deep: 'deep blue', flame: 'bluegreen flame', copper: 'copper ions', what: 'what', cucl: 'Copper chloride', cuso: 'copper sulfate', cuac: 'copper acetate', same: 'same copper', half: 'half', anion: 'anion', cl: ['chloride', 2], br: 'bromide', i: 'iodide', oh: 'hydroxide', ac: ['acetate', 2], co3: 'carbonate', so4: ['sulfate', 2], po4: 'phosphate'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K1.po4 + 6, 30));
	const BH = 440 - 220 * sh, bw = picW(BOTTLE, BH);
	const BX = 960 - bw / 2 + (100 - (960 - bw / 2)) * sh, BY = 330 + (210 - 330) * sh;
	const [lx, ly] = natPt(BOTTLE, BX, BY, BH, LABEL_A.cx, LABEL_A.cy);
	const ls = BH / 440;
	const write = [K1.cl, K1.br, K1.i, K1.oh, K1.ac, K1.co3, K1.so4, K1.po4];
	const RH = 230;
	return (
		<>
			<Anions write={write} />
			<Heading text="Which anion is in this sample?" at={4} size={56} />
			<Overlay>
				<g opacity={1 - sh}>
					<Fade at={K1.pale - 6}><PicF p={TUBES.cuoh2} x={70} y={330} h={RH} /><Note x={70 + picW(TUBES.cuoh2, RH) / 2} y={600} text="pale blue ppt" size={22} color={PPT.blueInk} anchor="middle" hand={false} at={K1.pale} /></Fade>
					<Fade at={K1.deep - 6}><PicF p={CU_DEEP} x={290} y={335} h={RH} /><Note x={290 + picW(CU_DEEP, RH) / 2} y={600} text="deep blue" size={22} color="#1d3fa8" anchor="middle" hand={false} at={K1.deep} /></Fade>
					<Fade at={K1.flame - 6}><PicF p={FLAME.cu} x={480} y={330} h={RH} /><Note x={480 + picW(FLAME.cu, RH) / 2} y={600} text="blue-green flame" size={22} color="#1f8a7a" anchor="middle" hand={false} at={K1.flame} /></Fade>
					<AChip x={70} y={650} text="c03a: the cation is Cu^{2+}" size={30} color={GREYX} hand={false} at={K1.copper} />
				</g>
				<Fade at={K1.back}>
					<PicF p={BOTTLE} x={BX} y={BY} h={BH} />
					<Sx x={lx} y={ly + 14 * ls} text="Cu^{2+}" size={46 * ls} color={INK} anchor="middle" weight={800} at={K1.copper} out={K1.half} />
					<Sx x={lx} y={ly + 14 * ls} text="Cu^{2+} + ?" size={40 * ls} color={INK} anchor="middle" weight={800} at={K1.half} />
				</Fade>
				<g opacity={1 - sh}>
					<Note x={960} y={BY + BH + 60} text="copper what?" size={44} color="#c4432f" anchor="middle" at={K1.what} />
					<AChip x={1240} y={380} text="CuCl_2?" size={38} color={INK} hand={false} at={K1.cucl} />
					<AChip x={1240} y={470} text="CuSO_4?" size={38} color={INK} hand={false} at={K1.cuso} />
					<AChip x={1240} y={560} text="Cu(CH_3COO)_2?" size={38} color={INK} hand={false} at={K1.cuac} />
					<Note x={1240} y={680} text="all dissolve; same copper results" size={30} color={INK_SOFT} at={K1.same} />
					<Note x={960} y={BY + BH + 120} text="the cation is only half the answer" size={34} color={INK} anchor="middle" at={K1.half} />
				</g>
				<Chart2 T={{S: {at: K1.po4 + 16, glow: K1.po4 + 16}}} />
				{void K1.anion}
			</Overlay>
		</>
	);
};

// ---------- 2. Step 1: dilute acid, and the fizz ----------
const K2 = cues(sc('step-1-acid'), {plan: "The plan's", fresh: 'fresh portions', acid: 'dilute acid', carb: 'Carbonate ions', take: 'take hydrogen', fizz: 'fizzes', bubble: 'Bubble the gas', lime: 'limewater', milky: 'milky', forms: 'forms', fizzing: 'Fizzing that', points: 'points to', not: 'Not every'});
export const SceneAcid: React.FC = () => {
	const f = useCurrentFrame();
	const [mx, my] = tubePt(TX, TY, TH, TUBE_A.cx, TUBE_A.mouth);
	const [, sy] = tubePt(TX, TY, TH, TUBE_A.cx, TUBE_A.surf);
	const LX = 360, LY = 520, LH = 360;
	const [ix, iy] = natPt(LIME.clear, LX, LY, LH, LIME_IN[0], LIME_IN[1]);
	const T: CT = {S: {at: -1000}, c1: {at: K2.acid}, r1: {at: K2.acid, glow: K2.acid + 6}, e1a: {at: K2.points}, a1: {at: K2.points, glow: K2.points}};
	return (
		<>
			<Anions />
			<Heading text="Step 1: dilute acid" at={4} size={56} color={C_AC} />
			<Overlay>
				<TubeDrop states={[{p: TUBES.clear, at: -100}]} dropAt={K2.acid} dropOut={K2.fizz + 20} drops={[K2.carb - 20, K2.carb, K2.carb + 20]} color="#fbe3c8" label="H^{+}" labelColor={C_AC} />
				<Bubbles x={mx} y={sy + 200} at={K2.fizz - 4} n={8} spread={36} rise={180} color="#f4f7f9" />
				<Note x={mx} y={TY + TH + 46} text="fizzes" size={34} color={C_AC} anchor="middle" at={K2.fizz} />
				<Delivery a={[mx + 10, my + 4]} b={[ix, iy]} at={K2.bubble - 10} gas={K2.bubble} top={my - 90} />
				<FlaskStates x={LX} y={LY} h={LH} states={[{p: LIME.clear, at: -100}, {p: LIME.milky, at: K2.forms - 10, dur: 40}]} o={vis(f, K2.bubble - 20, undefined, 14)} />
				<Note x={LX + picW(LIME.clear, LH) / 2} y={LY + LH + 46} text="limewater" size={30} color={INK_SOFT} anchor="middle" at={K2.lime} out={K2.milky} />
				<Note x={LX + picW(LIME.clear, LH) / 2} y={LY + LH + 46} text="turns milky" size={32} color={INK} anchor="middle" at={K2.milky + 6} />
				<DimG at={K2.forms} to={0.4}><Note x={700} y={820} text="CO_3^{2−} + 2H^{+} → CO_2(g) + H_2O(l)" size={38} color={C_AC} hand={false} at={K2.fizz} /></DimG>
				<Note x={700} y={880} text="CO_2 + Ca(OH)_2 → CaCO_3(s) + H_2O" size={30} color={INK} hand={false} at={K2.forms} />
				<AChip x={700} y={940} text="Module 6: acid + carbonate → CO_2" size={28} color={GREYX} hand={false} at={K2.take} />
				<Note x={700} y={1040} text="not every anion test makes a precipitate" size={30} color={INK_SOFT} at={K2.not} />
				<Note x={60} y={1040} text="fresh portion each test" size={26} color={GREYX} hand={false} at={K2.fresh} />
				<Chart2 T={T} />
				{void K2.plan}
			</Overlay>
		</>
	);
};

// ---------- 3. Acetate: no fizz, a smell ----------
const K3 = cues(sc('acetate'), {too: 'hydrogen ions too', gas: 'gas', ethanoic: 'ethanoic acid', vinegar: 'vinegar', nofizz: 'no fizz', warm: 'warm the tube', smell: 'smell', waft: 'Waft it', sniff: 'sniff', confirm: 'To confirm', neutral: 'neutral iron', fresh: 'fresh portion', acetate: ['Acetate ions', 1], complex: 'complex', colour: 'colour'});
export const SceneAcetate: React.FC = () => {
	const [mx, my] = tubePt(TX, TY, TH, TUBE_A.cx, TUBE_A.mouth);
	const [, by] = tubePt(TX, TY, TH, TUBE_A.cx, 1800);
	const VH = 240, vw = picW(VINEGAR, VH);
	const FH = 210, fw = picW(FE_BOTTLE, FH);
	const [flx, fly] = natPt(FE_BOTTLE, 320, 640, FH, LABEL_A.cx, LABEL_A.cy);
	const T: CT = merge(allT(['S', 'c1', 'r1', 'e1a', 'a1'], -1000), {
		e1b: {at: K3.smell}, a2: {at: K3.smell, glow: K3.smell + 6}, e1c: {at: K3.neutral}, a3: {at: K3.colour, glow: K3.colour},
	});
	return (
		<>
			<Anions st={{'CO_3^{2−}': {x: -1000, ux: K3.too}, 'CH_3COO^{−}': {g: [[K3.too, 900]]}}} />
			<Heading text="Acetate: no fizz, a smell" at={4} size={56} color={C_AC} />
			<Overlay>
				<DimG at={K3.confirm} to={0.45}>
					<TubeDrop states={[{p: TUBES.clear, at: -100}]} />
					<Note x={mx + 80} y={TY + 70} text="no fizz" size={34} color={C_AC} at={K3.nofizz} />
					<Shimmer x={mx} y={by + 20} w={110} at={K3.warm} out={K3.confirm + 30} />
					<Wisps x={mx} y={my - 10} at={K3.smell - 10} out={K3.confirm + 20} waft={K3.waft} />
					<WaftArc x={mx - 20} y={my - 150} at={K3.waft} out={K3.confirm + 20} />
				</DimG>
				<Fade at={K3.ethanoic - 6} out={K3.confirm}>
					<PicF p={VINEGAR} x={440} y={300} h={VH} />
					<Note x={440 + vw / 2} y={300 + VH + 36} text="ethanoic acid: vinegar" size={24} color={INK_SOFT} anchor="middle" hand={false} at={K3.vinegar} />
				</Fade>
				<Fade at={K3.neutral - 8}>
					<PicF p={FE_BOTTLE} x={320} y={640} h={FH} />
					<Sx x={flx} y={fly + 8} text="FeCl_3" size={22} color={INK} anchor="middle" weight={800} at={-1000} />
					<Note x={320 + fw / 2} y={640 + FH + 34} text="neutral" size={24} color={C_CX} anchor="middle" at={K3.neutral + 6} />
				</Fade>
				<Fade at={K3.fresh - 6}>
					<TubeDrop x={450} y={560} h={300} states={[{p: TUBES.clear, at: -100}, {p: TUBES.acetate, at: K3.colour - 10, dur: 30}]} drops={[K3.acetate - 20, K3.acetate - 4]} color="#e8b86a" />
					<Note x={450 + 81} y={900} text="deep red-brown" size={26} color={PPT.rustInk} anchor="middle" at={K3.colour + 6} />
				</Fade>
				<Note x={700} y={820} text="CH_3COO^{−} + H^{+} → CH_3COOH" size={38} color={C_AC} hand={false} at={K3.ethanoic} />
				<AChip x={700} y={880} text="waft, don't sniff" size={30} color={GREYX} at={K3.waft} />
				<Note x={700} y={1000} text="acetate ions bond around Fe^{3+}: a red-brown complex" size={30} color={C_CX} hand={false} at={K3.complex} />
				<Chart2 T={T} />
				{void K3.gas}{void K3.sniff}
			</Overlay>
		</>
	);
};

// ---------- 4. Why acidify first, and with which acid ----------
const K4 = cues(sc('why-acidify'), {barium: 'barium ions', silver: 'silver ions', carb: 'carbonate forms', fake: 'fake', acidify: 'acidify first', turns: 'acid turns', ppt: ['precipitate', 1], catch: 'catch', which: 'which acid', sulf: 'For the sulfate', hcl: 'hydrochloric acid', fine: 'fine', halide: 'halide test', add: 'add chloride', nitric: 'nitric', nitrates: 'Nitrates', fake2: ['fake', 2]});
export const SceneWhyAcid: React.FC = () => {
	const LA = {cx: 380, cy: 500, r: 185}, LB = {cx: 960, cy: 500, r: 185};
	return (
		<>
			<Anions st={{'CO_3^{2−}': {g: [[K4.carb, K4.acidify]]}}} />
			<Heading text="Why acidify first?" at={4} size={56} color={C_AC} />
			<Overlay>
				<LockLens {...LA} at={K4.barium - 10} out={K4.acidify} cat={ION.BA} an={ION.CO3} n={3} arrive={K4.barium + 10} lockAt={K4.carb + 10} every={12} title="Ba^{2+} + CO_3^{2−}: white BaCO_3" />
				<LockLens {...LB} at={K4.silver - 10} out={K4.acidify} cat={ION.AG} an={ION.CO3} n={3} arrive={K4.silver + 10} lockAt={K4.carb + 20} every={12} tile={{fill: '#f3e6a8', ink: '#9a7d08'}} title="Ag^{+} + CO_3^{2−}: pale yellow Ag_2CO_3" />
				<AChip x={670} y={790} text="false positive?" size={36} color="#c4432f" anchor="middle" at={K4.fake} out={K4.acidify} />
				<SwapLens {...LA} at={K4.acidify} out={K4.halide - 10} a={ION.CO3} a2={ION.CO2} b={ION.H} n={3} hit={K4.turns + 20} every={16} rise spect={ION.BA} nSpect={2} title="acid first: CO_3^{2−} leaves as CO_2" titleAt={K4.turns} />
				<SwapLens {...LB} at={K4.acidify} out={K4.halide - 10} a={ION.CO3} a2={ION.CO2} b={ION.H} n={3} hit={K4.turns + 28} every={16} rise spect={ION.AG} nSpect={2} title="no tiles form" titleAt={K4.ppt} />
				<LockLens {...LB} at={K4.halide} cat={ION.AG} an={ION.CL} n={2} arrive={K4.add - 10} lockAt={K4.add + 20} every={14} title="HCl adds Cl^{−}: AgCl forms anyway" />
				<AChip x={670} y={800} text="acidify first: carbonate leaves as CO_2" size={36} color={C_AC} hand={false} anchor="middle" at={K4.ppt} />
				<Chip x={1420} y={330} w={260} text="dilute HCl" at={K4.which} color="#2f6b3c" size={34} cross={K4.add + 10} hand={false} />
				<Chip x={1420} y={500} w={260} text="dilute HNO_3" at={K4.which + 8} color={C_AC} size={34} hand={false} />
				<Note x={1420} y={440} text="fine for the sulfate test" size={26} color={GREYX} hand={false} at={K4.fine} out={K4.halide} />
				<Note x={1420} y={440} text="adds Cl^{−}: false positive" size={26} color="#c4432f" hand={false} at={K4.add + 16} />
				<Fade at={K4.nitric}><rect x={1408} y={488} width={284} height={86} rx={43} fill="none" stroke="#f6d77a" strokeWidth={8} opacity={0.8} /></Fade>
				<Note x={1420} y={610} text="nitrates all soluble (NAGSAG)" size={26} color={C_AC} hand={false} at={K4.nitrates} />
				{void K4.catch}{void K4.sulf}{void K4.hcl}{void K4.fake2}{void C_BA}
			</Overlay>
		</>
	);
};

// ---------- 5. Step 2: sulfate with barium ----------
const K5 = cues(sc('step-2-sulfate'), {now: 'Now sulfate', acidify: 'Acidify', fresh: 'fresh portion', bacl: 'barium chloride', white: 'white precipitate', sulfate: ['sulfate', 2], stays: 'stays put', carb: 'carbonate', grav: 'gravimetric', detects: 'detects'});
export const SceneSulfate: React.FC = () => {
	const [mx] = tubePt(TX, TY, TH, TUBE_A.cx, TUBE_A.mouth);
	const T: CT = merge(allT([...AFAM.ac, 'S'], -1000, -1000, 0.3), {S: {at: -1000}, c2: {at: K5.acidify}, r2: {at: K5.acidify, glow: K5.acidify + 6}, e2a: {at: K5.sulfate}, b1: {at: K5.sulfate, glow: K5.sulfate}, tagBa: {at: K5.carb}});
	const FH = 200;
	return (
		<>
			<Anions st={{'SO_4^{2−}': {g: [[K5.sulfate, 735]]}}} />
			<Heading text="Step 2: sulfate" at={4} size={56} color={C_BA} />
			<Overlay>
				<TubeDrop states={[{p: TUBES.clear, at: -100}, {p: TUBES.baso4, at: K5.sulfate - 10, dur: 30}]} dropAt={K5.bacl - 14} dropOut={K5.sulfate + 30} drops={[K5.bacl + 10, K5.bacl + 28, K5.bacl + 46]} color="#f4ead2" label="Ba^{2+}" labelColor={C_BA} />
				<Note x={mx} y={TY + TH + 46} text="white: BaSO_4" size={30} color={INK} anchor="middle" hand={false} at={K5.sulfate + 6} />
				<Note x={60} y={1010} text="acidified fresh portion" size={26} color={GREYX} hand={false} at={K5.fresh} />
				<LockLens cx={470} cy={700} r={140} at={K5.bacl} out={K5.grav} cat={ION.BA} an={ION.SO4} n={4} arrive={K5.bacl + 20} lockAt={K5.white} every={12} s={1.15} title="stays put in acid" titleAt={K5.stays} />
				<Note x={700} y={820} text="Ba^{2+} + SO_4^{2−} → BaSO_4(s)" size={40} color={C_BA} hand={false} at={K5.sulfate} />
				<Fade at={K5.grav - 6}>
					<PicF p={FUNNEL} x={1500} y={760} h={FH} />
					<AChip x={1100} y={850} text="c02: BaSO_4 weighed" size={30} color={GREYX} hand={false} at={K5.grav} />
				</Fade>
				<Note x={700} y={1010} text="detects sulfate, and measures it" size={32} color={INK_SOFT} at={K5.detects} />
				<Chart2 T={T} />
				{void K5.now}{void K5.white}
			</Overlay>
		</>
	);
};

// ---------- 6. Step 3: the halides with silver ----------
const K6 = cues(sc('step-3-halides'), {halides: 'halides', acidify: 'acidify', nitric: 'nitric acid', silver: 'silver nitrate', exception: 'exception', locks: 'locks onto', each: 'Each halide', deepens: 'deepens', white: 'white', cream: 'cream', yellow: 'yellow'});
export const HAL = [{x: 40, p: TUBES.agcl, t: 'AgCl: white'}, {x: 240, p: TUBES.agbr, t: 'AgBr: cream'}, {x: 440, p: TUBES.agi, t: 'AgI: pale yellow'}];
export const HY = 410, HH = 300;
export const agT = (subAt = 1e6): CT => ({c3: {at: -1000}, r3: {at: -1000}, e3a: {at: -1000}, h1: {at: -1000, subAt}, h2: {at: -1000, subAt}, h3: {at: -1000, subAt}});
export const SceneHalides: React.FC = () => {
	const f = useCurrentFrame();
	const cue = [K6.white, K6.cream, K6.yellow];
	const T: CT = merge(allT([...AFAM.ac, ...AFAM.ba], -1000, -1000, 0.3), {
		S: {at: -1000}, c3: {at: K6.acidify}, r3: {at: K6.acidify, glow: K6.nitric},
		e3a: {at: K6.white - 6}, h1: {at: K6.white, glow: K6.white, dim: K6.cream, to: 0.5, subAt: 1e6}, h2: {at: K6.cream, glow: K6.cream, dim: K6.yellow, to: 0.5, subAt: 1e6}, h3: {at: K6.yellow, glow: K6.yellow, subAt: 1e6},
	});
	const shade = ['#e9ecef', '#c9b78a', '#a07f08'];
	return (
		<>
			<Anions st={{'Cl^{−}': {g: [[K6.white, K6.cream]]}, 'Br^{−}': {g: [[K6.cream, K6.yellow]]}, 'I^{−}': {g: [[K6.yellow, 819]]}}} />
			<Heading text="Step 3: the halides" at={4} size={56} color={C_AG} />
			<Overlay>
				{HAL.map((h, i) => {
					const [mx] = tubePt(h.x, HY, HH, TUBE_A.cx, TUBE_A.mouth);
					const t = cue[i];
					return (
						<Fade key={i} at={i === 0 ? K6.silver - 30 : t - 40}>
							<TubeDrop x={h.x} y={HY} h={HH} states={[{p: TUBES.clear, at: -100}, {p: h.p, at: t, dur: 20}]} dropAt={i === 0 ? K6.silver - 20 : undefined} dropOut={K6.each} drops={[t - 24, t - 10]} color="#e6e8ec" label="AgNO_3" labelColor={C_AG} ds={0.75} />
							<Note x={mx} y={HY + HH + 40} text={h.t} size={24} color={INK} anchor="middle" hand={false} at={t + 6} />
						</Fade>
					);
				})}
				<Fade at={K6.deepens - 6}>
					{['Cl', 'Br', 'I'].map((e, i) => (
						<g key={e}>
							<rect x={60 + i * 120} y={790} width={96} height={60} rx={10} fill={shade[i]} stroke={INK_SOFT} strokeWidth={2} opacity={prog(f, K6.deepens + i * 12, 12)} />
							<Sx x={108 + i * 120} y={831} text={e} size={32} color={i === 2 ? '#fffdf8' : INK} anchor="middle" weight={800} at={K6.deepens + i * 12} />
						</g>
					))}
					<Note x={60} y={890} text="group 17: colour deepens down the group" size={24} color={INK_SOFT} hand={false} at={K6.deepens + 20} />
				</Fade>
				<AChip x={700} y={800} text="c13: halides insoluble with Ag^{+}" size={26} color={GREYX} hand={false} at={K6.exception} />
				<Note x={700} y={920} text="Ag^{+} + X^{−} → AgX(s)" size={34} color={GREYX} hand={false} at={K6.locks} />
				<Chart2 T={T} />
				{void K6.halides}{void C_CX}
			</Overlay>
		</>
	);
};
