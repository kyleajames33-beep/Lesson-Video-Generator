// M6 B19 scenes 1 to 4: two health promises from genetic technology (insulin made by bacteria; the 2018 embryo edit,
// shown only by the injected-egg plate); the three tests tried on the embryo edit (a narrow fourth column that fails
// all three); the farm column (virus-resistant papaya: dying trees, a virus gene copied into the plant, harvests
// halved then climbing back); the medicine column (one and three amino acid differences, equal trial bars, the
// benefit is supply, access depends on price).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {Brace} from '../bio-m6-b07/parts';
import {S} from './common';
import {
	AMBER, AMBER_INK, BeadStrip, COL, ColumnCard, DONE, DrawPath, EDGE, GREYT, GREY_INK, GTag, GreyCross, HarvestBars, INK, INK_SOFT, MiniBoard, Pl, PLATES, PlantDna, Sx,
	SupplyLine, TERRA, TESTS, TestIcon, Tg, TreeIcon, TrialBars, ViralStrip, VialG, WorldG, cellY, clamp01, lerp, plH, prog, scribbleEllipse, smooth, vis,
} from './parts';
import type {TestK} from './parts';

/** Small protein glyphs travelling from a to b on a loop (three beads each). */
const Stream: React.FC<{a: [number, number]; b: [number, number]; at: number; o?: number; n?: number}> = ({a, b, at, o = 1, n = 4}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, k) => {
				const t = (((f - at) / 50 + k / n) % 1 + 1) % 1;
				const x = lerp(a[0], b[0], t), y = lerp(a[1], b[1], t) - Math.sin(t * Math.PI) * 50;
				const v = Math.sin(t * Math.PI);
				return <g key={k} opacity={v}>{[0, 1, 2].map(i => <circle key={i} cx={x + i * 12} cy={y} r={6} fill="#e8b48a" stroke="#a8704a" strokeWidth={1.5} />)}</g>;
			})}
		</g>
	);
};

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {approved: 'approved,', y2018: 'In 2018,', embryos: 'human embryos', condemned: 'condemned', both: 'Both used genetic', health: 'health benefit', label: 'that label alone', which: 'Which benefits', hold: 'hold up'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const B = {cx: 380, cy: 540, w: 440};
	const V = {cx: 790, cy: 560, w: 100};
	const E = {cx: 1420, cy: 540, w: 560};
	const tagDim = 1 - 0.55 * prog(f, K1.y2018, 14);
	const gtLabel = 1 - 0.65 * prog(f, K1.label, 14);
	return (
		<>
			<Heading text="Better than what? Shown how? Who gets it?" at={K1.hold - 4} size={58} />
			<Overlay>
				<Pl p={PLATES.bactP} cx={B.cx} cy={B.cy} w={B.w} o={prog(f, 0, 14)} />
				<Stream a={[B.cx + 150, B.cy - 30]} b={[V.cx - 20, V.cy - 60]} at={20} o={1 - 0.6 * prog(f, K1.y2018, 20)} />
				<Pl p={PLATES.vial} cx={V.cx} cy={V.cy} w={V.w} o={prog(f, 8, 14)} />
				<g opacity={tagDim}><GTag x={(B.cx + V.cx) / 2} y={720} text="1982: approved" at={K1.approved} size={28} anchor="middle" /></g>
				{/* 2018: the injected egg only */}
				<Pl p={PLATES.icsi} cx={E.cx} cy={E.cy} w={E.w} o={prog(f, K1.y2018, 16)} />
				<GTag x={E.cx} y={720} text="2018: embryos edited" at={K1.embryos} size={28} anchor="middle" />
				<GTag x={E.cx} y={790} text="condemned" at={K1.condemned} size={28} anchor="middle" />
				{/* both: one label */}
				<g opacity={gtLabel}><Brace x1={B.cx + 40} x2={E.cx} y={320} at={K1.both} label="genetic technology" size={40} /></g>
				<Sx x={(B.cx + 40 + E.cx) / 2} y={372} text="promised health benefit" size={32} color={INK_SOFT} hand anchor="middle" at={K1.health} />
				<Sx x={1080} y={600} text="?" size={140} color={AMBER_INK} weight={800} anchor="middle" at={K1.label + 10} />
				{void K1.which}
			</Overlay>
		</>
	);
};

// ---------- 2. Three tests, tried on the embryo edit ----------
const K2 = cues(S('three-tests'), {never: 'A benefit is never', better: 'better than something', shown: 'shown by evidence', someone: 'for someone', ask: 'So ask three', t1: 'Better than what?', t2: 'Shown how?', t3: 'Who gets it?', tryIt: 'Try them on', father: 'The father had', washing: 'washing his sperm', ivf: 'IVF', other: 'other ways later', edits: "The edits didn't", natural: 'natural protective version', untested: 'untested.', twins: 'And the twins', nosay: 'no say', fails: 'fails all three'});
/** Row label chip positions (left edge), aligned with the column rows. */
export const LABEL_X = 110;
export const labelY = (r: number) => cellY(r) + 30;
export const TestLabel: React.FC<{r: TestK; x: number; y: number; lit?: number; o?: number; size?: number}> = ({r, x, y, lit = 0, o = 1, size = 38}) => {
	if (o <= 0.01) return null;
	const w = 470, h = 76;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={20} fill={lit > 0.5 ? '#fff3d9' : '#fffdf8'} stroke={lit > 0.5 ? AMBER : EDGE} strokeWidth={lit > 0.5 ? 3.5 : 2.5} />
			<TestIcon k={r} x={x + 46} y={y + h / 2} s={0.95} color={lit > 0.5 ? AMBER_INK : INK_SOFT} />
			<Sx x={x + 92} y={y + h / 2 + 13} text={TESTS[r]} size={size} color={INK} hand weight={700} />
		</g>
	);
};
export const SceneThreeTests: React.FC = () => {
	const f = useCurrentFrame();
	const move = smooth(prog(f, 6, 34));
	const starts: [number, number][] = [[96, 180], [590, 180], [1084, 180]];
	const lit = (r: number) => (r === 0 ? vis(f, K2.t1, K2.t2, 8) : r === 1 ? vis(f, K2.t2, K2.t3, 8) : vis(f, K2.t3, K2.tryIt, 8));
	const slide = smooth(prog(f, K2.fails + 34, 26));
	const colO = 1 - prog(f, K2.fails + 44, 16);
	return (
		<>
		<Heading text="Three tests for any benefit" at={44} size={56} />
		<Overlay>
			{/* the empty board frame, faint */}
			<g opacity={0.35 * prog(f, 20, 30)}>
				{[0, 1, 2].map(c => <rect key={c} x={620 + c * 205} y={COL.y + 100} width={190} height={600} rx={18} fill="none" stroke={GREYT} strokeWidth={2} strokeDasharray="8 8" />)}
			</g>
			{[0, 1, 2].map(r => <TestLabel key={r} r={r as TestK} x={lerp(starts[r][0], LABEL_X, move)} y={lerp(starts[r][1], labelY(r), move)} lit={lit(r)} />)}
			<Sx x={LABEL_X} y={labelY(0) - 40} text="better than something, shown by evidence, for someone" size={28} color={GREY_INK} hand at={K2.better} out={K2.ask + 20} />
			{/* the narrow 2018 column */}
			<g opacity={colO} transform={`translate(${slide * 700},0)`}>
				<ColumnCard title="2018 edit" titleColor={GREY_INK} plate={PLATES.icsi} plateW={120} at={K2.tryIt} noLabels
					cells={[{text: 'already protected: sperm washing;', more: {text: 'other HIV prevention', at: K2.other}, k: 'none', at: K2.washing}, {text: 'untested edits, not the natural variant', k: 'none', at: K2.natural}, {text: 'children carry the risk, no consent', k: 'none', at: K2.nosay}]} />
				{f >= K2.fails ? <DrawPath d={scribbleEllipse(COL.x + COL.w / 2, COL.y + 360, COL.w / 2 + 10, 380, 5, 1.1)} at={K2.fails} dur={18} color={GREYT} width={5} /> : null}
				{f >= K2.fails + 8 ? <DrawPath d={`M${COL.x + 30},${COL.y + 690} L${COL.x + COL.w - 30},${COL.y + 30}`} at={K2.fails + 8} dur={12} color={GREYT} width={7} /> : null}
			</g>
			<GTag x={COL.x - 20} y={cellY(0) + 70} text="better than what? nothing gained" at={K2.washing + 30} out={K2.natural} size={24} anchor="end" />
			<GTag x={COL.x - 20} y={cellY(1) + 70} text="CCR5" at={K2.natural + 10} out={K2.nosay} size={24} anchor="end" />
			<GTag x={620} y={960} text="IVF: egg fertilised in a lab" at={K2.ivf} out={K2.ivf + 80} size={26} />
			{void K2.never}{void K2.shown}{void K2.someone}{void K2.father}{void K2.edits}{void K2.untested}{void K2.twins}
		</Overlay>
		</>
	);
};

// ---------- 3. Farm: virus-resistant papaya ----------
const K3 = cues(S('farm'), {farm: 'Start on the farm', harvests: 'harvests,', pest: 'pest resistance', nutrition: 'nutrition.', killing: 'killing papaya', none: 'no ordinary variety', sci: 'Scientists gave', copy: 'a copy of one', plant: "The plant's cells", recog: 'recognise', destroy: 'destroy it', b1: 'Better than what?', dying: 'Trees that were', shown: 'Shown how?', district: "The district's harvest", halved: 'halved,', seed: 'seed in 1998', climbed: 'climbed back', who: 'Who gets it?', growers: 'The growers', holds: 'holds up strongly'});
export const SceneFarm: React.FC = () => {
	const f = useCurrentFrame();
	const P = {cx: 330, cy: 560, w: 440};
	const sick = prog(f, K3.killing, 30) * (1 - prog(f, K3.climbed, 30));
	const geneO = vis(f, K3.sci, K3.b1 + 30, 14);
	const cellX = 640, cellW = 540;
	const copyT = smooth(prog(f, K3.copy + 20, 36));
	const inT = smooth(prog(f, K3.recog - 10, 50));
	const broken = prog(f, K3.destroy, 14);
	const mini = [
		{c: 0, r: 0, k: 'full' as const, at: K3.dying},
		{c: 0, r: 1, k: 'full' as const, at: K3.climbed + 12},
		{c: 0, r: 2, k: 'full' as const, at: K3.growers},
	];
	return (
		<>
			<Heading text="Farm: virus-resistant papaya" at={4} size={56} />
			<Overlay>
				<MiniBoard cells={mini} active={0} o={prog(f, 0, 14)} />
				<ColumnCard title="farm" plate={PLATES.papayaOk} plateW={64} at={K3.farm} dimAll={K3.holds}
					cells={[{text: 'dying trees, no resistant variety', k: 'full', at: K3.dying}, {text: 'harvests climbed back after 1998', k: 'full', at: K3.climbed + 12}, {text: 'growers', k: 'full', at: K3.growers}]} />
				<GTag x={640} y={260} text="harvest" at={K3.harvests} out={K3.killing} size={26} />
				<GTag x={800} y={260} text="resistance" at={K3.pest} out={K3.killing} size={26} />
				<GTag x={1010} y={260} text="nutrition" at={K3.nutrition} out={K3.killing} size={26} />
				{/* the papaya pair, aligned: dying, then the resistant crop returns */}
				<Pl p={PLATES.papayaOk} cx={P.cx} cy={P.cy} w={P.w} o={prog(f, 0, 14) * (1 - sick)} />
				<Pl p={PLATES.papayaSick} cx={P.cx} cy={P.cy} w={P.w} o={sick} />
				<GTag x={P.cx} y={880} text="papaya ringspot virus" at={K3.killing + 10} out={K3.b1} size={26} anchor="middle" />
				{[0, 1, 2].map(i => (
					<g key={i} opacity={1 - prog(f, K3.sci, 14)}>
						<TreeIcon x={720 + i * 150} y={520} s={1.4} sick={1} o={prog(f, K3.none + i * 6, 10)} />
						<GreyCross x={720 + i * 150} y={520} at={K3.none + 24 + i * 8} s={34} />
					</g>
				))}
				<GTag x={870} y={620} text="no resistant variety" at={K3.none + 30} out={K3.sci} size={26} anchor="middle" />
				{/* one virus gene copied into the plant's DNA */}
				<g opacity={geneO}>
					<Sx x={cellX} y={360} text="virus genetic material" size={24} color={GREY_INK} weight={700} opacity={1 - prog(f, K3.plant, 16)} />
					<ViralStrip x={cellX} y={400} w={cellW} draw={prog(f, K3.sci + 6, 26)} o={1 - prog(f, K3.plant, 16)} />
					<rect x={cellX - 20} y={500} width={cellW + 40} height={250} rx={40} fill="#f3f7ea" stroke="#7c9a5a" strokeWidth={3} />
					<Sx x={cellX} y={790} text="plant cell" size={24} color={GREY_INK} weight={700} />
					<PlantDna x={cellX + 40} y={560} w={cellW - 80} ins={prog(f, K3.copy + 50, 10)} />
					{copyT > 0.01 && copyT < 0.99 ? <rect x={lerp(cellX + cellW * 0.62, cellX + 40 + (cellW - 80) * 0.4, copyT)} y={lerp(391, 553, copyT)} width={lerp(cellW * 0.12, (cellW - 80) * 0.2, copyT)} height={18} rx={8} fill={AMBER} /> : null}
					{/* an incoming viral strand meets the copy and breaks up */}
					{inT > 0.01 ? (
						<g opacity={1 - prog(f, K3.destroy + 30, 14)}>
							{broken < 0.5
								? <path d={`M${lerp(cellX + cellW + 120, cellX + 260, inT)},680 l160,0`} stroke={TERRA} strokeWidth={6} strokeLinecap="round" />
								: [0, 1, 2, 3].map(k => <line key={k} x1={cellX + 250 + k * 46 + k * 10 * broken} y1={680 + (k % 2 ? 8 : -8) * broken} x2={cellX + 280 + k * 46 + k * 10 * broken} y2={680 + (k % 2 ? -6 : 6) * broken} stroke={TERRA} strokeWidth={6} strokeLinecap="round" />)}
							<rect x={cellX + 32 + (cellW - 80) * 0.4} y={545} width={(cellW - 80) * 0.2 + 16} height={56} rx={12} fill="none" stroke={AMBER_INK} strokeWidth={4} opacity={vis(f, K3.recog, K3.destroy + 20, 8)} />
						</g>
					) : null}
				</g>
				<Tg x={cellX} y={850} text="gene from the virus" at={K3.copy + 30} out={K3.recog} size={36} />
				<Tg x={cellX} y={850} text="plant destroys the virus's RNA" at={K3.recog + 10} out={K3.b1 + 30} size={36} />
				{/* harvest bars */}
				<g opacity={prog(f, K3.district, 12)}>
					<GTag x={640} y={430} text="main district, 1992 to 1998" at={K3.district} size={24} />
					<HarvestBars x={650} y={880} h={340} grow={[K3.district, K3.halved, K3.climbed]} labels={['1992', '1998', '2001']} />
					<g opacity={prog(f, K3.seed, 10)}>
						<line x1={985} x2={985} y1={880} y2={600} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="8 7" />
						<Sx x={985} y={586} text="1998: seed released" size={26} color={AMBER_INK} weight={700} anchor="middle" />
					</g>
				</g>
				{void K3.b1}{void K3.shown}{void K3.who}{void K3.nutrition}
			</Overlay>
		</>
	);
};

// ---------- 4. Medicine: insulin ----------
const K4 = cues(S('medicine'), {now: 'Now medicine', bact: 'Bacteria make', b1: 'Better than what?', pig: 'Insulin from pig', one: 'one amino acid', cattle: 'cattle insulin by', expect: "You'd expect", trials: 'trials compared', purified: 'purified pig insulin', so: 'So the benefit', supply: 'supply.', abattoirs: 'abattoirs,', ferm: 'fermenters', scale: 'scale.', who: 'Who gets it?', price: 'depends on price', many: 'Many people', reliably: 'reliably get'});
export const SceneMedicine: React.FC = () => {
	const f = useCurrentFrame();
	const PN = {cx: 270, cy: 400, w: 300};
	const VL = {cx: 1080, cy: 420, w: 84};
	const stripsO = vis(f, K4.one - 6, K4.trials, 12);
	const trialO = vis(f, K4.trials, K4.so, 12);
	const pancO = (1 - 0.6 * prog(f, K4.abattoirs, 14)) * (1 - prog(f, K4.ferm, 20));
	const mini = [
		...DONE.farm.map(c => ({...c, at: -100})),
		{c: 1, r: 0, k: 'half' as const, at: K4.scale - 12},
		{c: 1, r: 1, k: 'full' as const, at: K4.scale + 14},
		{c: 1, r: 2, k: 'half' as const, at: K4.price},
	];
	return (
		<>
			<Heading text="Medicine: insulin made by bacteria" at={4} size={56} />
			<Overlay>
				<MiniBoard cells={mini} active={1} o={prog(f, 0, 14)} />
				<ColumnCard title="medicine" sub="insulin" plate={PLATES.vial} plateW={34} at={K4.now}
					cells={[{text: 'pig and cattle insulin worked too', k: 'half', at: K4.scale - 12}, {text: 'trials: similar control; supply grew', k: 'full', at: K4.scale + 14}, {text: 'depends on price', k: 'half', at: K4.price}]} />
				<Pl p={PLATES.pancreas} cx={PN.cx} cy={PN.cy} w={PN.w} o={prog(f, K4.pig - 6, 14) * pancO} />
				<Pl p={PLATES.fermenter} cx={PN.cx} cy={PN.cy} w={150} o={prog(f, K4.ferm, 20)} />
				<GTag x={110} y={500} text="pig and cattle pancreases, 1922 to 1980s" at={K4.pig} out={K4.one + 30} size={24} />
				<Pl p={PLATES.vial} cx={VL.cx} cy={VL.cy} w={VL.w} o={prog(f, K4.bact, 14)} />
				{/* bead strips: 1 and 3 differences */}
				<g opacity={stripsO}>
					<BeadStrip x={470} y={620} label="human" draw={prog(f, K4.one - 6, 20)} />
					<BeadStrip x={470} y={700} label="pig" draw={prog(f, K4.one, 20)} ring={[11]} ringO={prog(f, K4.one + 18, 10)} fill="#e3c19a" />
					<BeadStrip x={470} y={780} label="cattle" draw={prog(f, K4.cattle, 20)} ring={[2, 4, 11]} ringO={prog(f, K4.cattle + 18, 10)} fill="#d9b88f" />
				</g>
				<GTag x={470} y={830} text="pig: 1 different" at={K4.one + 20} out={K4.cattle + 10} size={26} />
				<GTag x={470} y={830} text="cattle: 3 different" at={K4.cattle + 20} out={K4.trials} size={26} />
				{/* the surprise: about the same */}
				<g opacity={trialO}>
					<TrialBars x={430} y={640} w={660} p={prog(f, K4.purified, 30)} bracket={prog(f, K4.purified + 30, 12)} />
					<Tg x={430} y={880} text="about the same for most patients" at={K4.purified + 34} size={38} />
					<GTag x={430} y={905} text="randomised trials, Cochrane review 2005" at={K4.purified + 46} size={22} />
				</g>
				<g opacity={1 - prog(f, K4.so, 12)}><MistakeChip x={680} y={470} text="human = better?" at={K4.expect + 10} cross={K4.purified + 40} size={30} /></g>
				{/* the benefit is supply */}
				<SupplyLine a={[PN.cx + 120, PN.cy + 10]} b={[VL.cx - 60, VL.cy + 10]} draw={prog(f, K4.supply, 26)} thick={prog(f, K4.ferm + 6, 24)} amber={prog(f, K4.ferm + 6, 2)} />
				<Tg x={500} y={540} text="reliable, scalable supply" at={K4.ferm + 14} out={K4.scale - 14} size={40} />
				{/* access */}
				<g opacity={vis(f, K4.reliably - 4, undefined, 14)}>
					<WorldG x={1110} y={790} r={46} />
					<VialG x={1040} y={870} s={0.8} grey />
					<VialG x={1110} y={880} s={0.8} grey />
					<VialG x={1180} y={870} s={0.8} grey />
				</g>
				<GTag x={1180} y={930} text="access: price and distribution" at={K4.reliably + 6} size={24} anchor="end" />
				{void K4.b1}{void K4.who}{void K4.many}{void COL}{void INK}{void plH}{void clamp01}
			</Overlay>
		</>
	);
};
