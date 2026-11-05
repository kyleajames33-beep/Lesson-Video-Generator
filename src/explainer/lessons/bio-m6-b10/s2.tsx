// M6 B10 scenes 6 to 10: the animal case (horn buds removed, painfully; Angus carries one dominant hornless allele;
// crossing would bring many beef alleles, so only that allele was edited into dairy cattle; calves inherit it); the
// 2019 check (a magnifier along the strip finds bacterial DNA with antibiotic resistance genes beside the edit; four
// of six tested calves carry it); what an animal case adds (a welfare column, embryos and surrogates, an objection in
// principle); three kinds of question (bins); the checklist.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, PlateB, Sx} from '../bio-m5-b13/shared';
import {CurveArrow, GTag} from '../bio-m6-b01/parts';
import {ScribbleRing, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {ringPt} from '../bio-m6-b09/parts';
import {
	AMBER, AMBER_INK, AlleleStrip, BIO_INK, BactIns, Bin, BoardFrame, CARD, GREY_INK, INK, JChip, Join, LooseChip, Magnifier, PLATES, Pl, ROWY,
	WhoGlyph, WhoIcon, budsPt, chipAnchor, colsAt, lerp, prog, slotX, smooth, stripRung, vis, whoTop,
} from './parts';
import type {Cols} from './parts';

const C2 = colsAt(0);

/** The animal panel: the bull plate (labelled as an ordinary hornless bull) and, optionally, the calf. */
const AnimalPanel: React.FC<{calf?: number; ring?: number; bullO?: number}> = ({calf = 1, bullO = 1}) => (
	<>
		<Pl p={PLATES.bull} cx={410} cy={360} w={440} o={bullO} />
		<Sx x={410} y={556} text="a hornless dairy bull" size={34} color={GREY_INK} hand anchor="middle" opacity={bullO} />
		<Pl p={PLATES.calf} cx={300} cy={735} w={300} o={calf} />
	</>
);
/** The animal board's chips (benefit, harm, welfare) and who icons. */
type AB = {cols: Cols; o: number[]; lit: number[]; joinAt: number[][]; who: number[]; whoLit?: number[]; joinO?: number};
const ACHIPS = [
	{col: 0, row: 0, lines: ['no dehorning needed'], kind: 'benefit' as const, to: [0, 1]},
	{col: 1, row: 0, lines: ['unintended DNA inserted'], kind: 'harm' as const, to: [0, 2]},
	{col: 2, row: 0, lines: ['spared dehorning'], kind: 'benefit' as const, to: [] as number[]},
	{col: 2, row: 1, lines: ['many embryos lost'], kind: 'harm' as const, to: [] as number[]},
];
const WA = ['calves', 'workersT', 'regulators'] as const;
const AnimalBoard: React.FC<AB> = ({cols, o, lit, joinAt, who, whoLit = [0, 0, 0], joinO = 1}) => (
	<>
		{ACHIPS.map((c, i) => c.to.map((k, j) => <Join key={`${i}${k}`} a={chipAnchor(cols[c.col], ROWY[c.row], 1)} b={whoTop(slotX(k))} at={joinAt[i]?.[j] ?? 1e9} o={o[i] * joinO} lit={lit[i]} />))}
		{ACHIPS.map((c, i) => <JChip key={i} col={cols[c.col]} y={ROWY[c.row]} lines={c.lines} kind={c.kind} o={o[i]} lit={lit[i]} size={cols[c.col].w < 400 ? 28 : 30} />)}
		{WA.map((n, k) => <WhoIcon key={n} name={n} x={slotX(k)} o={who[k]} lit={whoLit[k]} />)}
	</>
);

// ---------- 6. Hornless dairy cattle ----------
const K6 = cues(S('hornless-cattle'), {animal: 'Now the animal', most: 'Most dairy cattle', buds: 'horn buds', painful: 'painful', beef: 'Some beef breeds', angus: 'like Angus', dominant: 'dominant', crossing: 'Crossing dairy', beefAl: 'beef alleles', edited: 'edited', two: 'two bulls', born: 'born in 2015', inherit: 'calves could inherit', here: 'Here the benefit', none: 'no dehorning'});
const SX = 1290, AY = 400, DY = 570, CY = 770, GREYR = [1, 2, 8, 10, 12], PT = 40, GP = 40;
const sr = (i: number) => stripRung(SX, i, 14, PT);
export const SceneHornless: React.FC = () => {
	const f = useCurrentFrame();
	// the calf starts large on the right (horn buds ringed), then moves into the case panel when the Angus strips arrive
	const mv = smooth(prog(f, K6.angus - 24, 30, x => x));
	const ccx = lerp(1280, 300, mv), ccy = lerp(560, 735, mv), cw = lerp(640, 300, mv);
	const [bx, by] = budsPt(ccx, ccy, cw);
	const strips = 1 - prog(f, K6.none - 16, 14);
	const beefDown = smooth(prog(f, K6.beefAl + 4, 24, x => x)) * (1 - smooth(prog(f, K6.beefAl + 60, 24, x => x)));
	const editMv = smooth(prog(f, K6.edited + 10, 30, x => x));
	return (
		<>
			<Heading text="The animal: hornless dairy cattle" at={4} size={60} />
			<Overlay>
				<BoardFrame cols={C2} headDim={1 - prog(f, K6.none - 10, 14)} who={prog(f, K6.none - 10, 14)} heads={[prog(f, K6.angus, 12), prog(f, K6.angus, 12), 0]} />
				<AnimalPanel calf={0} />
				<Pl p={PLATES.calf} cx={ccx} cy={ccy} w={cw} o={prog(f, K6.most - 4, 14)} />
				<Tg x={1280} y={930} text="dairy calf" at={K6.most + 6} out={K6.buds} anchor="middle" size={44} color={GREY_INK} />
				<ScribbleRing cx={bx} cy={by + 4} rx={lerp(84, 42, mv)} ry={lerp(52, 26, mv)} at={K6.buds + 6} out={K6.dominant} seed={3} />
				<Tg x={bx} y={by - 60} text="horn buds" at={K6.buds + 10} out={K6.angus - 24} anchor="middle" size={44} />
				<Tg x={1280} y={930} text="removing horn buds: painful" at={K6.painful} out={K6.angus - 24} anchor="middle" size={46} />
				<Tg x={300} y={930} text="removing horn buds: painful" at={K6.angus + 6} out={K6.none} anchor="middle" size={32} color={GREY_INK} />
				<g opacity={strips}>
					{/* Angus: one dominant hornless allele */}
					<g opacity={prog(f, K6.angus, 12)}>
						<Sx x={990} y={AY + 28} text="Angus" size={40} color={INK} hand anchor="end" />
						<AlleleStrip cx={SX} y={AY} pitch={PT} gap={GP} band={prog(f, K6.dominant, 12)} grey={GREYR} greyO={beefDown > 0.02 ? 1 : 0} />
					</g>
					<ScribbleRing cx={sr(4)} cy={AY + 20} rx={34} ry={50} at={K6.dominant + 6} out={K6.edited} seed={5} />
					<Tg x={SX} y={AY - 56} text="hornless allele: dominant" at={K6.dominant + 8} out={K6.edited} anchor="middle" size={42} />
					{/* dairy cattle: crossing would bring many beef alleles; editing moves just one */}
					<g opacity={prog(f, K6.crossing, 12)}>
						<Sx x={990} y={DY + 28} text="dairy cattle" size={40} color={INK} hand anchor="end" />
						<AlleleStrip cx={SX} y={DY} pitch={PT} gap={GP} band={prog(f, K6.edited + 38, 10)} />
					</g>
					<Tg x={SX} y={DY + 100} text="crossing: beef alleles too" at={K6.beefAl} out={K6.edited} anchor="middle" size={38} color={GREY_INK} />
					{beefDown > 0.02 ? GREYR.map(i => <line key={i} x1={sr(i)} x2={sr(i)} y1={lerp(AY, DY, beefDown) + 4} y2={lerp(AY, DY, beefDown) + GP - 4} stroke="#6b6f74" strokeWidth={9} strokeLinecap="round" opacity={0.9} />) : null}
					{f >= K6.edited + 10 && editMv < 1 ? <rect x={sr(4) - PT / 2} y={lerp(AY, DY, editMv) - 14} width={PT} height={GP + 28} rx={8} fill="#fbf1d6" stroke={AMBER} strokeWidth={3} /> : null}
					<Tg x={SX} y={DY + 100} text="edit: just the hornless allele" at={K6.edited + 20} out={K6.inherit} anchor="middle" size={40} />
					<GTag x={1820} y={488} text="2015: edited bulls born" at={K6.born} out={K6.here} size={28} anchor="end" />
					{/* the calves inherit it */}
					<CurveArrow a={[1630, DY + 46]} b={[1630, CY - 22]} at={K6.inherit} bow={0} color={INK} width={4} />
					<g opacity={prog(f, K6.inherit + 14, 12)}>
						<Sx x={990} y={CY + 28} text="calves" size={40} color={INK} hand anchor="end" />
						<AlleleStrip cx={SX} y={CY} pitch={PT} gap={GP} />
					</g>
				</g>
				<AnimalBoard cols={C2} o={[prog(f, K6.none, 12), 0, 0, 0]} lit={[1, 0, 0, 0]} joinAt={[[K6.none + 10, K6.none + 18]]} who={[prog(f, K6.none - 6, 12), prog(f, K6.none - 6, 12), 0]} whoLit={[prog(f, K6.none + 20, 10), prog(f, K6.none + 28, 10), 0]} />
				{void K6.animal}{void K6.beef}{void K6.two}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 7. Checking what actually happened ----------
const K7 = cues(S('checking-evidence'), {y2019: 'But in 2019', gov: 'government scientists', found: 'found something', bact: 'Bacterial DNA', abr: 'antibiotic resistance genes', inserted: 'inserted beside', four: 'four of his six', healthy: 'The calves were healthy', so: 'So the idea', alone: 'checked to carry the edit alone', judge: 'Judge what', evidence: 'checking the evidence'});
const BN = 22, BP = 40, BG = 48, BY0 = 420, BCX = 1290;
const bx = (i: number) => BCX - (BN * BP) / 2 + i * BP + BP / 2;
export const SceneChecking: React.FC = () => {
	const f = useCurrentFrame();
	const phaseA = 1 - prog(f, K7.so - 14, 14);
	const mag = smooth(prog(f, K7.found, 44, x => x));
	const magX = lerp(bx(0) - 40, bx(10), mag);
	const [rx, ry] = ringPt(1600, 650, 300);
	return (
		<>
			<Heading text="Check what actually happened" at={4} size={60} />
			<Overlay>
				<BoardFrame cols={C2} headDim={1 - prog(f, K7.so - 10, 14)} />
				<AnimalPanel />
				<g opacity={phaseA}>
					<GTag x={bx(0) - 20} y={300} text="2019: US FDA check" at={K7.y2019 + 20} size={30} />
					<AlleleStrip cx={BCX} y={BY0} n={BN} pitch={BP} gap={BG} bandAt={6} amber={[8, 12]} amberO={prog(f, K7.abr, 12)} grey={[9, 11]} greyO={prog(f, K7.abr + 10, 10)} />
					<Magnifier x={magX} y={BY0 + 24} o={vis(f, K7.found - 6, K7.abr + 30, 12)} r={44} />
					<Sx x={bx(10)} y={BY0 + 118} text="antibiotic resistance genes" size={38} color={AMBER_INK} hand anchor="middle" at={K7.abr + 14} />
					<Sx x={bx(6)} y={BY0 - 34} text="edit" size={38} color={INK} hand anchor="middle" at={K7.found + 40} />
					<g opacity={vis(f, K7.bact, K7.four, 12)}>
						<BactIns cx={1600} cy={650} w={300} arc={0} />
						<path d={`M${rx},${ry - 12} C${rx - 60},${ry - 160} ${bx(12) + 60},${BY0 + 100} ${bx(12)},${BY0 + 66}`} fill="none" stroke={AMBER_INK} strokeWidth={3.5} strokeDasharray="9 7" />
					</g>
					<Tg x={1150} y={650} text="from the plasmid used in the editing" at={K7.bact + 30} out={K7.four} anchor="middle" size={38} />
					{/* six tested calves (their DNA strips), four carry the bacterial DNA */}
					<Sx x={800} y={590} text="six tested calves" size={36} color={INK} hand at={K7.four} />
					{Array.from({length: 6}, (_, k) => {
						const cx = 880 + k * 176;
						const carries = [0, 2, 3, 5].includes(k);
						const lit = carries ? prog(f, K7.four + 36 + k * 3, 10) : 0;
						return (
							<g key={k} opacity={prog(f, K7.four + k * 4, 10)}>
								{lit > 0.01 ? <ellipse cx={cx} cy={690} rx={84} ry={62} fill={AMBER} opacity={0.22 * lit} /> : null}
								<Pl p={PLATES.calf} cx={cx} cy={690} w={150} />
								<AlleleStrip cx={cx} y={790} n={6} pitch={24} gap={24} bandAt={1} amber={carries ? [3, 4] : undefined} amberO={lit} />
							</g>
						);
					})}
					<Sx x={1320} y={890} text="4 of 6 inherited it" size={40} color={AMBER_INK} hand anchor="middle" at={K7.four + 60} />
				</g>
				<AnimalBoard cols={C2} o={[0.6 * (1 - phaseA), prog(f, K7.so, 12), 0, 0]} lit={[0, 1 - prog(f, K7.evidence, 10), 0, 0]} joinAt={[[-100, -100], [K7.so + 12, K7.so + 22]]} who={[1 - phaseA, 1 - phaseA, prog(f, K7.so, 12)]} joinO={1 - 0.85 * prog(f, K7.alone - 10, 14)} whoLit={[vis(f, K7.so + 12, K7.evidence, 10), 0, vis(f, K7.so + 22, K7.evidence, 10)]} />
				<Sx x={1290} y={690} text="justified only if checked: the edit, nothing else" size={42} color={INK} hand anchor="middle" at={K7.alone} />
				<Tg x={1290} y={770} text="judge the outcome, not the intention" at={K7.evidence} anchor="middle" size={48} />
				{void K7.gov}{void K7.inserted}{void K7.healthy}{void K7.judge}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 8. What an animal case adds ----------
const K8 = cues(S('animal-adds'), {makes: 'makes animal cases different', suffer: 'suffer', welfare: 'welfare', embryos: 'embryos and surrogate cows', many: 'many embryos', object: 'object to editing', whatever: 'whatever'});
export const SceneAnimalAdds: React.FC = () => {
	const f = useCurrentFrame();
	const cols = colsAt(prog(f, K8.makes + 10, 26, x => x));
	const wel = cols[2];
	return (
		<>
			<Heading text="What an animal case adds" at={4} size={60} />
			<Overlay>
				<BoardFrame cols={cols} welfare={prog(f, K8.makes + 20, 14)} />
				<AnimalPanel />
				<AnimalBoard cols={cols} o={[0.6, 0.6, prog(f, K8.suffer, 12), prog(f, K8.many, 12)]} lit={[0, 0, vis(f, K8.suffer, K8.many, 10), vis(f, K8.many, K8.whatever, 10)]} joinAt={[[-100, -100], [-100, -100]]} who={[1, 1, 1]} joinO={0} />
				{/* embryos (painted blastocysts; most do not survive) and a surrogate cow */}
				{[0, 1, 2, 3, 4, 5].map(k => {
					const lost = [1, 2, 4, 5].includes(k);
					const d = lost ? prog(f, K8.many + 10 + k * 3, 14) : 0;
					return (
						<g key={k} opacity={prog(f, K8.embryos + k * 3, 10) * (1 - 0.6 * d)}>
							<PlateB p={PLATES.blastocyst} cx={wel.x + 40 + (k % 3) * 100} cy={560 + Math.floor(k / 3) * 84} w={72} filter={d > 0.01 ? `grayscale(${d})` : undefined} />
						</g>
					);
				})}
				<Pl p={PLATES.cow} cx={wel.x + 150} cy={780} w={210} o={prog(f, K8.embryos + 20, 12) * (1 - prog(f, K8.whatever - 40, 12))} />
				<Sx x={wel.x + 150} y={884} text="surrogate cow" size={32} color={GREY_INK} hand anchor="middle" at={K8.embryos + 24} out={K8.whatever - 40} />
				<LooseChip cx={1130} y={630} text="objects to editing animals at all" dash size={36} o={prog(f, K8.whatever - 30, 12)} />
				<Tg x={1130} y={750} text="not about outcomes" at={K8.whatever} anchor="middle" size={46} />
				{void K8.welfare}{void K8.object}{void BIO_INK}
			</Overlay>
		</>
	);
};

// ---------- 9. Three kinds of question ----------
const K9 = cues(S('three-questions'), {sort: 'Those objections sort', cons: 'Consequences', ev: 'Evidence can answer', dist: 'Distribution', licence: 'licence fee', rules: 'Rules and policy', princ: 'principle', acc: 'acceptable at all', cant: "Evidence can't settle", one: 'that one'});
const BX = [400, 960, 1520];
const TOP: [number, number][] = [[330, 190], [800, 190], [1340, 190], [560, 272], [1180, 272]];
const DROP: {bin: number; text: string; at: (k: typeof K9) => number; slot: number; dash?: boolean}[] = [
	{bin: 0, text: 'far fewer sprays', at: k => k.cons + 20, slot: 0},
	{bin: 0, text: 'resistance can evolve', at: k => k.cons + 34, slot: 1},
	{bin: 0, text: 'unintended DNA inserted', at: k => k.cons + 48, slot: 2},
	{bin: 1, text: 'licence fee each season', at: k => k.dist + 20, slot: 0},
	{bin: 2, text: 'objects to editing animals at all', at: k => k.princ + 20, slot: 0, dash: true},
];
export const SceneQuestions: React.FC = () => {
	const f = useCurrentFrame();
	const bright = prog(f, K9.one, 12);
	const LBL = [{t: 'evidence can answer', at: K9.ev}, {t: 'rules and policy decide', at: K9.rules}, {t: "evidence can't settle", at: K9.cant}];
	return (
		<>
			<Heading text="Three kinds of question" at={4} size={60} />
			<Overlay>
				{BX.map((x, i) => <Bin key={'e' + i} cx={x} title="" o={0.45 * prog(f, 4 + i * 4, 12) * (1 - prog(f, [K9.cons, K9.dist, K9.princ][i], 12))} y0={400} y1={720} />)}
				<Bin cx={BX[0]} title="consequences" o={prog(f, K9.cons, 12)} y0={400} y1={720} />
				<Bin cx={BX[1]} title="distribution" o={prog(f, K9.dist, 12)} y0={400} y1={720} />
				<Bin cx={BX[2]} title="principle" o={prog(f, K9.princ, 12)} y0={400} y1={720} />
				{/* the objections from the two cases wait along the top, then drop into their bins */}
				{DROP.map((d, i) => {
					const at = d.at(K9);
					const t = smooth(prog(f, at, 22, x => x));
					const [sx, sy] = TOP[i];
					const y = lerp(sy, 650 - d.slot * 76, t);
					return <LooseChip key={i} cx={lerp(sx, BX[d.bin], t)} y={y} text={d.text} dash={d.dash} size={d.dash ? 28 : 32} o={prog(f, 6 + i * 6, 10)} lit={vis(f, at, at + 40, 8)} />;
				})}
				{LBL.map((l, i) => <Sx key={i} x={BX[i]} y={792} text={l.t} size={40} color={bright > 0.5 ? AMBER_INK : BIO_INK} weight={700} hand anchor="middle" at={l.at} />)}
				{bright > 0.01 ? BX.map(x => <rect key={x} x={x - 220} y={748} width={440} height={64} rx={32} fill="none" stroke={AMBER} strokeWidth={3.5} opacity={bright} />) : null}
				{void K9.sort}{void K9.licence}{void K9.acc}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 10. Memory ----------
const K10 = cues(S('memory'), {check: 'checklist', ben: 'Who benefits', risk: 'Who carries the risk', decides: 'Who decides', bio: 'what happens to biodiversity', animal: 'For an animal', itself: 'what happens to the animal itself', evaluate: 'evaluate', verdict: 'verdict'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const LINES = [
		{t: 'Who benefits?', at: K10.ben, icon: <Pl p={PLATES.bee} cx={0} cy={0} w={96} />},
		{t: 'Who carries the risk?', at: K10.risk, icon: <Pl p={PLATES.larva} cx={0} cy={0} w={96} />},
		{t: "Who decides whether it's used?", at: K10.decides, icon: <WhoGlyph k="building" s={1.5} />},
		{t: 'What happens to biodiversity?', at: K10.bio, icon: <Pl p={PLATES.field} cx={0} cy={0} w={150} />},
	];
	const RY = (i: number) => 250 + i * 118;
	return (
		<>
			<Heading text="A judging checklist" at={4} size={60} />
			<Overlay>
				{LINES.map((l, i) => (
					<g key={i} opacity={prog(f, l.at, 12)}>
						<rect x={140} y={RY(i) - 50} width={1340} height={100} rx={22} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
						<g transform={`translate(${250},${RY(i)})`}>{l.icon}</g>
						<Sx x={360} y={RY(i) + 20} text={l.t} size={58} color={INK} hand />
					</g>
				))}
				<g opacity={prog(f, K10.itself - 10, 12)}>
					<rect x={140} y={RY(4) - 50} width={1340} height={100} rx={22} fill={CARD} stroke={BIO_INK} strokeWidth={4} />
					<g transform={`translate(${250},${RY(4)})`}><Pl p={PLATES.calf} cx={0} cy={0} w={110} /></g>
					<Sx x={360} y={RY(4) + 20} text="Animal? What happens to the animal itself?" size={56} color={BIO_INK} hand />
				</g>
				<Sx x={1540} y={RY(4) - 70} text="+ for animals" size={40} color={BIO_INK} hand at={K10.animal} />
				<Sx x={140} y={RY(5) + 30} text="Evaluate → end with a verdict and its main reason." size={54} color={AMBER_INK} hand at={K10.verdict} />
				{void K10.check}{void K10.evaluate}{void GREY_INK}
			</Overlay>
		</>
	);
};
