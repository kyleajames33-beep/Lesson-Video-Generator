// M6 B10 scenes 6 to 10: the animal case (horn buds removed, painfully; Angus carries one dominant hornless allele;
// crossing would bring many beef alleles, so only that allele was edited into dairy cattle; calves inherit it); the
// 2019 check (a magnifier along the strip finds bacterial DNA with antibiotic resistance genes beside the edit; four
// of six tested calves carry it); what an animal case adds (a welfare column, embryos and surrogates, an objection in
// principle); three kinds of question (bins); the checklist.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {CurveArrow, GTag} from '../bio-m6-b01/parts';
import {ScribbleRing, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {ringPt} from '../bio-m6-b09/parts';
import {
	AMBER, AMBER_INK, AlleleStrip, BIO_INK, BactIns, Bin, BoardFrame, Embryos, GREY_INK, INK, JChip, Join, LooseChip, Magnifier, PLATES, Pl, ROWY,
	WhoIcon, budsPt, chipAnchor, colsAt, lerp, prog, slotX, smooth, stripRung, vis, whoTop,
} from './parts';
import type {Cols} from './parts';

const C2 = colsAt(0);

/** The animal panel: the bull plate (labelled as an ordinary hornless bull) and, optionally, the calf. */
const AnimalPanel: React.FC<{calf?: number; ring?: number; bullO?: number}> = ({calf = 1, bullO = 1}) => (
	<>
		<Pl p={PLATES.bull} cx={410} cy={360} w={440} o={bullO} />
		<Sx x={410} y={548} text="a hornless dairy bull" size={28} color={GREY_INK} hand anchor="middle" opacity={bullO} />
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
const SX = 1290, AY = 400, DY = 560, CY = 760, GREYR = [1, 2, 8, 10, 12];
export const SceneHornless: React.FC = () => {
	const f = useCurrentFrame();
	const [bx, by] = budsPt(300, 735, 300);
	const strips = 1 - prog(f, K6.none - 16, 14);
	const beefDown = smooth(prog(f, K6.beefAl + 4, 24, x => x)) * (1 - smooth(prog(f, K6.beefAl + 60, 24, x => x)));
	const editMv = smooth(prog(f, K6.edited + 10, 30, x => x));
	return (
		<>
			<Heading text="The animal: hornless dairy cattle" at={4} size={60} />
			<Overlay>
				<BoardFrame cols={C2} headDim={1 - prog(f, K6.none - 10, 14)} who={prog(f, K6.none - 10, 14)} />
				<AnimalPanel calf={prog(f, K6.buds - 8, 14)} />
				<ScribbleRing cx={bx} cy={by + 4} rx={42} ry={26} at={K6.buds + 6} out={K6.dominant} seed={3} />
				<GTag x={300} y={880} text="removing horn buds: painful" at={K6.painful} size={22} anchor="middle" />
				<g opacity={strips}>
					{/* Angus: one dominant hornless allele */}
					<g opacity={prog(f, K6.angus, 12)}>
						<Sx x={1050} y={AY + 26} text="Angus" size={32} color={GREY_INK} hand anchor="end" />
						<AlleleStrip cx={SX} y={AY} band={prog(f, K6.dominant, 12)} grey={GREYR} greyO={beefDown > 0.02 ? 1 : 0} />
					</g>
					<ScribbleRing cx={stripRung(SX, 4)} cy={AY + 17} rx={30} ry={42} at={K6.dominant + 6} out={K6.edited} seed={5} />
					<Tg x={SX} y={AY - 50} text="hornless allele: dominant" at={K6.dominant + 8} out={K6.edited} anchor="middle" size={38} />
					{/* dairy cattle: crossing would bring many beef alleles; editing moves just one */}
					<g opacity={prog(f, K6.crossing, 12)}>
						<Sx x={1050} y={DY + 26} text="dairy cattle" size={32} color={GREY_INK} hand anchor="end" />
						<AlleleStrip cx={SX} y={DY} band={prog(f, K6.edited + 38, 10)} />
					</g>
					{beefDown > 0.02 ? GREYR.map(i => <line key={i} x1={stripRung(SX, i)} x2={stripRung(SX, i)} y1={lerp(AY, DY, beefDown) + 3} y2={lerp(AY, DY, beefDown) + 31} stroke="#6b6f74" strokeWidth={8} strokeLinecap="round" opacity={0.9} />) : null}
					{f >= K6.edited + 10 && editMv < 1 ? <rect x={stripRung(SX, 4) - 16} y={lerp(AY, DY, editMv) - 14} width={32} height={62} rx={8} fill="#fbf1d6" stroke={AMBER} strokeWidth={3} /> : null}
					<GTag x={1820} y={478} text="2015: edited bulls born" at={K6.born} out={K6.here} size={26} anchor="end" />
					{/* the calves inherit it */}
					<CurveArrow a={[1530, DY + 40]} b={[1530, CY - 22]} at={K6.inherit} bow={0} color={INK} width={4} />
					<g opacity={prog(f, K6.inherit + 14, 12)}>
						<Sx x={1050} y={CY + 26} text="calves" size={32} color={GREY_INK} hand anchor="end" />
						<AlleleStrip cx={SX} y={CY} />
					</g>
				</g>
				<AnimalBoard cols={C2} o={[prog(f, K6.none, 12), 0, 0, 0]} lit={[1, 0, 0, 0]} joinAt={[[K6.none + 10, K6.none + 18]]} who={[prog(f, K6.none - 6, 12), prog(f, K6.none - 6, 12), 0]} whoLit={[prog(f, K6.none + 20, 10), prog(f, K6.none + 28, 10), 0]} />
				{void K6.animal}{void K6.most}{void K6.beef}{void K6.two}{void AMBER}
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
					<GTag x={bx(0) - 20} y={286} text="2019: US FDA check" at={K7.y2019 + 20} size={26} />
					<AlleleStrip cx={BCX} y={BY0} n={BN} pitch={BP} gap={BG} bandAt={6} amber={[8, 12]} amberO={prog(f, K7.abr, 12)} grey={[9, 11]} greyO={prog(f, K7.abr + 10, 10)} />
					<Magnifier x={magX} y={BY0 + 24} o={vis(f, K7.found - 6, K7.abr + 30, 12)} r={44} />
					<Sx x={bx(8)} y={BY0 + 110} text="antibiotic resistance genes" size={28} color={GREY_INK} hand anchor="middle" at={K7.abr + 14} />
					<Sx x={bx(6)} y={BY0 - 34} text="edit" size={28} color={GREY_INK} hand anchor="middle" at={K7.found + 40} />
					<g opacity={vis(f, K7.bact, K7.four, 12)}>
						<BactIns cx={1600} cy={650} w={300} arc={0} />
						<path d={`M${rx},${ry - 12} C${rx - 60},${ry - 160} ${bx(12) + 60},${BY0 + 100} ${bx(12)},${BY0 + 66}`} fill="none" stroke={AMBER_INK} strokeWidth={3.5} strokeDasharray="9 7" />
					</g>
					<Tg x={1100} y={640} text="from the plasmid used as the edit's template" at={K7.bact + 30} out={K7.four} anchor="middle" size={32} />
					{/* six tested calves (their DNA strips), four carry the bacterial DNA */}
					<Sx x={880} y={600} text="six tested calves" size={28} color={GREY_INK} hand at={K7.four} />
					{Array.from({length: 6}, (_, k) => {
						const cx = 900 + k * 150;
						const carries = [0, 2, 3, 5].includes(k);
						return <AlleleStrip key={k} cx={cx} y={640} n={6} pitch={20} gap={22} bandAt={1} amber={carries ? [3, 4] : undefined} amberO={carries ? prog(f, K7.four + 36, 10) : 0} o={prog(f, K7.four + k * 4, 10)} />;
					})}
				</g>
				<AnimalBoard cols={C2} o={[0.6 * (1 - phaseA), prog(f, K7.so, 12), 0, 0]} lit={[0, 1 - prog(f, K7.evidence, 10), 0, 0]} joinAt={[[-100, -100], [K7.so + 12, K7.so + 22]]} who={[1 - phaseA, 1 - phaseA, prog(f, K7.so, 12)]} joinO={1 - 0.85 * prog(f, K7.alone - 10, 14)} whoLit={[vis(f, K7.so + 12, K7.evidence, 10), 0, vis(f, K7.so + 22, K7.evidence, 10)]} />
				<Sx x={1290} y={680} text="justified only if checked: edit, nothing else" size={36} color={GREY_INK} hand anchor="middle" at={K7.alone} />
				<Tg x={1290} y={770} text="judge the outcome, not the intention" at={K7.evidence} anchor="middle" size={44} />
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
				<Embryos x={wel.x + 30} y={590} n={8} lostIdx={[1, 2, 3, 5, 6, 7]} o={prog(f, K8.embryos, 12)} dead={prog(f, K8.many + 10, 16)} />
				<Sx x={wel.x + 6} y={655} text="surrogate cows carry them" size={26} color={GREY_INK} hand at={K8.embryos + 20} />
				<LooseChip cx={1290} y={720} text="objects to editing animals at all" dash size={32} o={prog(f, K8.whatever - 30, 12)} />
				<Tg x={1290} y={830} text="not about outcomes" at={K8.whatever} anchor="middle" size={40} />
				{void K8.welfare}{void K8.object}{void BIO_INK}
			</Overlay>
		</>
	);
};

// ---------- 9. Three kinds of question ----------
const K9 = cues(S('three-questions'), {sort: 'Those objections sort', cons: 'Consequences', ev: 'Evidence can answer', dist: 'Distribution', licence: 'licence fee', rules: 'Rules and policy', princ: 'principle', acc: 'acceptable at all', cant: "Evidence can't settle", one: 'that one'});
const BX = [400, 960, 1520];
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
				<Bin cx={BX[0]} title="consequences" o={prog(f, K9.cons, 12)} y0={400} y1={720} />
				<Bin cx={BX[1]} title="distribution" o={prog(f, K9.dist, 12)} y0={400} y1={720} />
				<Bin cx={BX[2]} title="principle" o={prog(f, K9.princ, 12)} y0={400} y1={720} />
				{DROP.map((d, i) => {
					const at = d.at(K9);
					const t = smooth(prog(f, at, 22, x => x));
					const y = lerp(200, 650 - d.slot * 72, t);
					return <LooseChip key={i} cx={BX[d.bin]} y={y} text={d.text} dash={d.dash} size={d.dash ? 26 : 28} o={prog(f, at, 8)} />;
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
	const LINES = [{t: 'Who benefits?', at: K10.ben}, {t: 'Who carries the risk?', at: K10.risk}, {t: "Who decides whether it's used?", at: K10.decides}, {t: 'What happens to biodiversity?', at: K10.bio}];
	return (
		<>
			<Heading text="A judging checklist" at={4} size={60} />
			<Overlay>
				{LINES.map((l, i) => <Sx key={i} x={160} y={300 + i * 92} text={l.t} size={62} color={INK} hand at={l.at} />)}
				<WhoIcon name="regulators" x={1060} y={455} o={prog(f, K10.decides + 10, 12)} />
				<Sx x={160} y={700} text="Animal? What happens to the animal?" size={62} color={BIO_INK} hand at={K10.itself} />
				<Pl p={PLATES.calf} cx={1260} cy={680} w={130} o={prog(f, K10.itself + 10, 12)} />
				<Sx x={160} y={850} text="Evaluate → end with a verdict and its reason." size={56} color={AMBER_INK} hand at={K10.verdict} />
				{void K10.check}{void K10.animal}{void K10.evaluate}
			</Overlay>
		</>
	);
};
