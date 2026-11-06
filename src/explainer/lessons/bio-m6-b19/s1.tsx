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
import {ColumnCard2, MiniBoard2, TestLabel2} from './parts2';

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
// Quality fix (6 Nov): the faint dashed empty columns are gone. The definition is spoken as three large lines with
// their icons; the three questions arrive large in the centre on their cues; on "Try them on the embryo edit" they
// move to the left as row labels and a wide 2018 column (1180 px, 38 px chips) fills row by row.
const TT = {x: 660, y: 196, w: 1180, head: 130, row: 215};
const ttRow = (r: number) => TT.y + TT.head + r * TT.row;
export const SceneThreeTests: React.FC = () => {
	const f = useCurrentFrame();
	const mv = smooth(prog(f, K2.tryIt - 4, 30));
	const lit = (r: number) => (r === 0 ? vis(f, K2.t1, K2.t2, 8) : r === 1 ? vis(f, K2.t2, K2.t3, 8) : vis(f, K2.t3, K2.tryIt, 8));
	const slide = smooth(prog(f, K2.fails + 34, 26));
	const colO = 1 - prog(f, K2.fails + 44, 16);
	const phr = [{at: K2.better, t: 'better than something'}, {at: K2.shown, t: 'shown by evidence'}, {at: K2.someone, t: 'for someone'}];
	const phrO = 1 - prog(f, K2.t1 - 10, 12);
	const tAt = [K2.t1, K2.t2, K2.t3];
	return (
		<>
		<Heading text="Three tests for any benefit" at={44} size={56} />
		<Overlay>
			{phrO > 0.01 ? phr.map((p, i) => {
				const o = prog(f, p.at, 12) * phrO;
				return o > 0.01 ? (
					<g key={p.t} opacity={o} transform={`translate(0,${(1 - smooth(prog(f, p.at, 14))) * 20})`}>
						<TestIcon k={i as TestK} x={560} y={330 + i * 180} s={1.7} color={AMBER_INK} />
						<Sx x={660} y={352 + i * 180} text={p.t} size={66} color={INK} hand weight={700} />
					</g>
				) : null;
			}) : null}
			<Sx x={960} y={900} text="a benefit is never just good in general" size={40} color={GREY_INK} hand anchor="middle" at={K2.never} out={K2.t1 - 10} />
			{[0, 1, 2].map(r => (
				<TestLabel2 key={r} r={r as TestK} x={lerp(520, 96, mv)} y={lerp(270 + r * 180, ttRow(r) + 52, mv)} w={lerp(880, 520, mv)} h={lerp(124, 86, mv)} size={lerp(64, 40, mv)} lit={lit(r)} o={prog(f, tAt[r] - 4, 12)} />
			))}
			{/* the 2018 column, wide */}
			<g opacity={colO} transform={`translate(${slide * 900},0)`}>
				<ColumnCard2 title="2018 edit" titleColor={GREY_INK} plate={PLATES.icsi} plateW={200} at={K2.tryIt - 20} noLabels x={TT.x} y={TT.y} w={TT.w} headH={TT.head} rowH={TT.row} chip={38}
					cells={[
						{text: 'already protected: sperm washing before IVF;', more: {text: 'HIV can be prevented in other ways', at: K2.other}, k: 'none', at: K2.washing},
						{text: 'the CCR5 edits were not the natural protective version;', more: {text: 'effects untested', at: K2.untested}, k: 'none', at: K2.natural},
						{text: 'the twins carry all the risk, with no say', k: 'none', at: K2.nosay},
					]} />
				{/* until the first row lands, the injected egg fills the card body, with the case stated */}
				<Pl p={PLATES.icsi} cx={TT.x + TT.w / 2} cy={TT.y + 430} w={760} o={vis(f, K2.tryIt - 16, K2.washing - 4, 14)} />
				<Sx x={TT.x + TT.w / 2} y={TT.y + 720} text="embryos edited to resist HIV; the father had HIV" size={40} color={INK} hand weight={700} anchor="middle" at={K2.tryIt - 4} out={K2.washing - 4} />
				{f >= K2.fails ? <DrawPath d={scribbleEllipse(TT.x + TT.w / 2, TT.y + 390, TT.w / 2 + 10, 410, 5, 1.1)} at={K2.fails} dur={18} color={GREYT} width={6} /> : null}
				{f >= K2.fails + 8 ? <DrawPath d={`M${TT.x + 40},${TT.y + 760} L${TT.x + TT.w - 40},${TT.y + 30}`} at={K2.fails + 8} dur={12} color={GREYT} width={8} /> : null}
			</g>
			<GTag x={TT.x} y={1000} text="IVF: an egg fertilised in a lab" at={K2.ivf} out={K2.ivf + 90} size={30} />
			<Sx x={96 + 260} y={ttRow(0) + 190} text="nothing gained" size={36} color={GREY_INK} hand weight={700} anchor="middle" at={K2.washing + 40} out={K2.fails + 44} />
			{void K2.never}{void K2.shown}{void K2.someone}{void K2.father}{void K2.edits}{void K2.twins}{void COL}{void TestLabel}{void ColumnCard}{void cellY}
		</Overlay>
		</>
	);
};

// ---------- 3. Farm: virus-resistant papaya ----------
const K3 = cues(S('farm'), {farm: 'Start on the farm', harvests: 'harvests,', pest: 'pest resistance', nutrition: 'nutrition.', killing: 'killing papaya', none: 'no ordinary variety', sci: 'Scientists gave', copy: 'a copy of one', plant: "The plant's cells", recog: 'recognise', destroy: 'destroy it', b1: 'Better than what?', dying: 'Trees that were', shown: 'Shown how?', district: "The district's harvest", halved: 'halved,', seed: 'seed in 1998', climbed: 'climbed back', who: 'Who gets it?', growers: 'The growers', holds: 'holds up strongly'});
export const SceneFarm: React.FC = () => {
	// Quality fix (6 Nov): the card no longer sits empty for 24 s. The papaya fills the right third first, beside three
	// painted farm-benefit tiles (harvests: maize rows; pest resistance: Bt cotton; nutrition: the fruit). The card
	// slides in on "Better than what?" as the papaya moves left, and each row fills on its answer.
	const f = useCurrentFrame();
	const mv = smooth(prog(f, K3.b1 - 10, 30));
	const P = {cx: lerp(1500, 300, mv), cy: 560, w: lerp(560, 400, mv)};
	const sick = prog(f, K3.killing, 30) * (1 - prog(f, K3.climbed, 30));
	const geneO = vis(f, K3.sci, K3.b1 + 30, 14);
	const cellX = 600, cellW = 520;
	const copyT = smooth(prog(f, K3.copy + 20, 36));
	const inT = smooth(prog(f, K3.recog - 10, 50));
	const broken = prog(f, K3.destroy, 14);
	const mini = [
		{c: 0, r: 0, k: 'full' as const, at: K3.dying},
		{c: 0, r: 1, k: 'full' as const, at: K3.climbed + 12},
		{c: 0, r: 2, k: 'full' as const, at: K3.growers},
	];
	const tileO = 1 - prog(f, K3.killing, 16);
	const tiles = [
		{at: K3.harvests, x: 250, t: 'harvests', p: PLATES.maize, w: 250},
		{at: K3.pest, x: 610, t: 'pest resistance', p: PLATES.cotton, w: 210},
		{at: K3.nutrition, x: 970, t: 'nutrition', p: PLATES.papayaOk, w: 200},
	];
	return (
		<>
			<Heading text="Farm: virus-resistant papaya" at={4} size={56} />
			<Overlay>
				<MiniBoard2 cells={mini} active={0} o={prog(f, 0, 14)} />
				{tileO > 0.01 ? tiles.map(t => {
					const o = prog(f, t.at, 12) * tileO;
					return o > 0.01 ? (
						<g key={t.t} opacity={o} transform={`translate(0,${(1 - smooth(prog(f, t.at, 14))) * 24})`}>
							<rect x={t.x - 160} y={290} width={320} height={330} rx={22} fill="#fffdf8" stroke={EDGE} strokeWidth={2.5} />
							<Pl p={t.p} cx={t.x} cy={450} w={t.w} />
							<Sx x={t.x} y={680} text={t.t} size={38} color={INK} hand weight={700} anchor="middle" />
						</g>
					) : null;
				}) : null}
				<ColumnCard2 title="farm" sub="papaya" plate={PLATES.papayaOk} plateW={80} at={K3.b1 - 6} dimAll={K3.holds}
					cells={[{text: 'dying trees, no resistant variety', k: 'full', at: K3.dying}, {text: 'harvest had halved;', more: {text: 'climbed back after 1998', at: K3.climbed + 6}, k: 'full', at: K3.halved}, {text: 'the growers', k: 'full', at: K3.growers}]} />
				{/* the papaya pair, aligned: dying, then the resistant crop returns */}
				<Pl p={PLATES.papayaOk} cx={P.cx} cy={P.cy} w={P.w} o={prog(f, 0, 14) * (1 - sick)} />
				<Pl p={PLATES.papayaSick} cx={P.cx} cy={P.cy} w={P.w} o={sick} />
				<GTag x={P.cx} y={900} text="papaya ringspot virus" at={K3.killing + 10} out={K3.b1} size={30} anchor="middle" />
				<GTag x={P.cx} y={960} text="Hawaii, 1990s" at={K3.killing + 30} out={K3.b1} size={30} anchor="middle" />
				{[0, 1, 2].map(i => (
					<g key={i} opacity={1 - prog(f, K3.sci, 14)}>
						<TreeIcon x={300 + i * 230} y={500} s={2.4} sick={1} o={prog(f, K3.none + i * 6, 10)} />
						<GreyCross x={300 + i * 230} y={500} at={K3.none + 24 + i * 8} s={50} />
					</g>
				))}
				<Sx x={530} y={680} text="no ordinary variety resisted it" size={40} color={GREY_INK} hand weight={700} anchor="middle" at={K3.none + 30} out={K3.sci} />
				{/* one virus gene copied into the plant's DNA */}
				<g opacity={geneO}>
					<Sx x={cellX} y={360} text="virus genetic material" size={30} color={GREY_INK} weight={700} opacity={1 - prog(f, K3.plant, 16)} />
					<ViralStrip x={cellX} y={400} w={cellW} draw={prog(f, K3.sci + 6, 26)} o={1 - prog(f, K3.plant, 16)} />
					<rect x={cellX - 20} y={500} width={cellW + 40} height={250} rx={40} fill="#f3f7ea" stroke="#7c9a5a" strokeWidth={3} />
					<Sx x={cellX} y={790} text="plant cell" size={30} color={GREY_INK} weight={700} />
					<PlantDna x={cellX + 40} y={560} w={cellW - 80} ins={prog(f, K3.copy + 50, 10)} />
					{copyT > 0.01 && copyT < 0.99 ? <rect x={lerp(cellX + cellW * 0.62, cellX + 40 + (cellW - 80) * 0.4, copyT)} y={lerp(391, 553, copyT)} width={lerp(cellW * 0.12, (cellW - 80) * 0.2, copyT)} height={18} rx={8} fill={AMBER} /> : null}
					{inT > 0.01 ? (
						<g opacity={1 - prog(f, K3.destroy + 30, 14)}>
							{broken < 0.5
								? <path d={`M${lerp(cellX + cellW + 120, cellX + 260, inT)},680 l160,0`} stroke={TERRA} strokeWidth={6} strokeLinecap="round" />
								: [0, 1, 2, 3].map(k => <line key={k} x1={cellX + 250 + k * 46 + k * 10 * broken} y1={680 + (k % 2 ? 8 : -8) * broken} x2={cellX + 280 + k * 46 + k * 10 * broken} y2={680 + (k % 2 ? -6 : 6) * broken} stroke={TERRA} strokeWidth={6} strokeLinecap="round" />)}
							<rect x={cellX + 32 + (cellW - 80) * 0.4} y={545} width={(cellW - 80) * 0.2 + 16} height={56} rx={12} fill="none" stroke={AMBER_INK} strokeWidth={4} opacity={vis(f, K3.recog, K3.destroy + 20, 8)} />
						</g>
					) : null}
				</g>
				<Tg x={cellX} y={850} text="gene from the virus" at={K3.copy + 30} out={K3.recog} size={38} />
				<Tg x={cellX} y={850} text="plant destroys the virus's RNA" at={K3.recog + 10} out={K3.b1 + 30} size={38} />
				{/* harvest bars */}
				<g opacity={prog(f, K3.district, 12)}>
					<GTag x={600} y={300} text="main district, 1992 to 1998" at={K3.district} size={30} />
					<HarvestBars x={630} y={880} h={360} grow={[K3.district, K3.halved, K3.climbed]} labels={['1992', '1998', '2001']} />
					<g opacity={prog(f, K3.seed, 10)}>
						<line x1={965} x2={965} y1={880} y2={560} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="8 7" />
						<Sx x={965} y={540} text="1998: seed released" size={32} color={AMBER_INK} hand weight={700} anchor="middle" />
					</g>
				</g>
				{void K3.b1}{void K3.shown}{void K3.who}{void K3.farm}{void MiniBoard}{void ColumnCard}
			</Overlay>
		</>
	);
};

// ---------- 4. Medicine: insulin ----------
const K4 = cues(S('medicine'), {now: 'Now medicine', bact: 'Bacteria make', b1: 'Better than what?', pig: 'Insulin from pig', one: 'one amino acid', cattle: 'cattle insulin by', expect: "You'd expect", trials: 'trials compared', purified: 'purified pig insulin', so: 'So the benefit', supply: 'supply.', abattoirs: 'abattoirs,', ferm: 'fermenters', scale: 'scale.', who: 'Who gets it?', price: 'depends on price', many: 'Many people', reliably: 'reliably get'});
export const SceneMedicine: React.FC = () => {
	// Quality fix (6 Nov): the card enters on "Better than what?" and each row fills when the narration answers it
	// (the old cells waited until "scale", so the card sat empty for 33 s). The pancreas and vial are larger, and the
	// trial bars stay (dimmed) until the supply line arrives, so the middle is never empty.
	const f = useCurrentFrame();
	const PN = {cx: 280, cy: 400, w: 360};
	const VL = {cx: 1060, cy: 420, w: 120};
	const stripsO = vis(f, K4.one - 6, K4.trials, 12);
	const trialO = vis(f, K4.trials, K4.supply, 12) * (1 - 0.45 * prog(f, K4.so, 12));
	const pancO = (1 - 0.6 * prog(f, K4.abattoirs, 14)) * (1 - prog(f, K4.ferm, 20));
	const mini = [
		...DONE.farm.map(c => ({...c, at: -100})),
		{c: 1, r: 0, k: 'half' as const, at: K4.purified + 30},
		{c: 1, r: 1, k: 'full' as const, at: K4.supply},
		{c: 1, r: 2, k: 'half' as const, at: K4.price},
	];
	return (
		<>
			<Heading text="Medicine: insulin made by bacteria" at={4} size={56} />
			<Overlay>
				<MiniBoard2 cells={mini} active={1} o={prog(f, 0, 14)} />
				<ColumnCard2 title="medicine" sub="insulin" plate={PLATES.vial} plateW={50} at={K4.b1 - 6}
					cells={[
						{text: 'pig and cattle insulin;', more: {text: 'they worked about as well', at: K4.purified + 30}, k: 'half', at: K4.pig},
						{text: 'trials: similar sugar control;', more: {text: 'the gain is a reliable supply', at: K4.supply}, k: 'full', at: K4.trials + 10},
						{text: 'depends on price', k: 'half', at: K4.price},
					]} />
				<Pl p={PLATES.pancreas} cx={PN.cx} cy={PN.cy} w={PN.w} o={prog(f, K4.pig - 6, 14) * pancO} />
				<Pl p={PLATES.fermenter} cx={PN.cx} cy={PN.cy} w={170} o={prog(f, K4.ferm, 20)} />
				<GTag x={100} y={520} text="pig and cattle pancreases, 1922 to 1980s" at={K4.pig} out={K4.one + 30} size={28} />
				<Pl p={PLATES.vial} cx={VL.cx} cy={VL.cy} w={VL.w} o={prog(f, K4.bact, 14)} />
				<Sx x={VL.cx} y={VL.cy + 190} text="human insulin" size={30} color={INK} hand weight={700} anchor="middle" at={K4.bact + 10} out={K4.one - 6} />
				{/* bead strips: 1 and 3 differences */}
				<g opacity={stripsO}>
					<BeadStrip x={470} y={640} label="human" draw={prog(f, K4.one - 6, 20)} />
					<BeadStrip x={470} y={720} label="pig" draw={prog(f, K4.one, 20)} ring={[11]} ringO={prog(f, K4.one + 18, 10)} fill="#e3c19a" />
					<BeadStrip x={470} y={800} label="cattle" draw={prog(f, K4.cattle, 20)} ring={[2, 4, 11]} ringO={prog(f, K4.cattle + 18, 10)} fill="#d9b88f" />
				</g>
				<Sx x={470} y={880} text="pig: 1 amino acid different" size={34} color={AMBER_INK} hand weight={700} at={K4.one + 20} out={K4.cattle + 10} />
				<Sx x={470} y={880} text="cattle: 3 different" size={34} color={AMBER_INK} hand weight={700} at={K4.cattle + 20} out={K4.trials} />
				{/* the surprise: about the same */}
				<g opacity={trialO}>
					<TrialBars x={430} y={640} w={660} p={prog(f, K4.purified, 30)} bracket={prog(f, K4.purified + 30, 12)} />
					<Tg x={430} y={880} text="about the same for most patients" at={K4.purified + 34} size={40} />
					<GTag x={430} y={935} text="randomised trials, Cochrane review 2005" at={K4.purified + 46} size={26} />
				</g>
				<g opacity={1 - prog(f, K4.so, 12)}><MistakeChip x={640} y={480} text="human = better?" at={K4.expect + 10} cross={K4.purified + 40} size={34} /></g>
				{/* the benefit is supply */}
				<SupplyLine a={[PN.cx + 140, PN.cy + 10]} b={[VL.cx - 70, VL.cy + 10]} draw={prog(f, K4.supply, 26)} thick={prog(f, K4.ferm + 6, 24)} amber={prog(f, K4.ferm + 6, 2)} />
				<Tg x={470} y={540} text="reliable, scalable supply" at={K4.ferm + 14} out={K4.scale + 40} size={42} />
				<Sx x={PN.cx} y={PN.cy + 200} text="abattoir pancreases" size={30} color={GREY_INK} hand weight={700} anchor="middle" at={K4.abattoirs} out={K4.ferm} />
				<Sx x={PN.cx} y={PN.cy + 200} text="fermenters" size={34} color={AMBER_INK} hand weight={700} anchor="middle" at={K4.ferm + 10} />
				{/* access */}
				<g opacity={vis(f, K4.reliably - 4, undefined, 14)}>
					<WorldG x={900} y={790} r={60} />
					<VialG x={820} y={890} s={1} grey />
					<VialG x={900} y={900} s={1} grey />
					<VialG x={980} y={890} s={1} grey />
				</g>
				<Sx x={900} y={990} text="access: price and distribution" size={32} color={GREY_INK} hand weight={700} anchor="middle" at={K4.reliably + 6} />
				{void K4.b1}{void K4.who}{void K4.many}{void COL}{void INK}{void plH}{void clamp01}{void K4.now}{void K4.scale}
			</Overlay>
		</>
	);
};
