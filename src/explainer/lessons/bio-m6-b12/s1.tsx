// M6 B12 scenes 1 to 5: two rescues (a TR4-resistant Cavendish and the northern white rhino); the three levels drawn
// as the levels board; the baseline split (a sprayed field, the modified crop field, the bush it replaced); the
// banana at the genetic level (seedless clones share one ring pattern, the wild gene slides in, two baselines give two
// marks); the field at the species and ecosystem levels (Bt cotton, a herbicide-tolerant crop row sprayed whole, land
// sparing only if land is protected).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {FillBar} from '../bio-m6-b01/parts';
import {ScribbleRing, TickG, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {
	AMBER, Arr, BananaHalf, Board, CARD, CONS, CROP, Cell, ColHead, EDGE, FemaleSym, FieldHalf, GREYT, GREY_INK, INK, LandBlock, MarkGlyph, PLATES, Pl,
	PlainField, Rg, SprayCan, SprayDrift, Strip, lerp, platePt, prog, rowC, smooth, vis,
} from './parts';
import type {RK} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {two: 'Two rescues', clone: 'is a clone', tr4: 'the fungus TR4', gene: 'resistance gene', rhino: 'northern white rhino', females: 'two females', embryos: 'rhino embryos', both: 'Both use', dying: 'dying out', bio: 'biodiversity', level: 'which level', compare: 'compare it with'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const dim = 1 - 0.45 * prog(f, K1.level, 14);
	return (
		<>
			<Heading text="Which level? Compared with what?" at={K1.level} size={60} />
			<Overlay>
				<g opacity={dim}>
					<Pl p={PLATES.plantation} cx={500} cy={430} w={720} o={prog(f, K1.clone - 30, 16)} />
					<Sx x={500} y={600} text="Cavendish bananas: one clone" size={30} color={GREY_INK} hand anchor="middle" at={K1.tr4} />
					<Strip cx={500} y={660} n={10} pitch={34} gap={32} o={prog(f, K1.gene, 12)} ins={prog(f, K1.gene + 18, 12)} i0={4} i1={5} />
					<Pl p={PLATES.rhino} cx={1410} cy={440} w={520} o={prog(f, K1.rhino, 16)} />
					<g opacity={prog(f, K1.females, 12)}>
						<circle cx={1720} cy={300} r={38} fill={CARD} stroke={INK} strokeWidth={3.5} />
						<Sx x={1720} y={318} text="2" size={48} color={INK} weight={800} anchor="middle" />
						<FemaleSym x={1690} y={372} /><FemaleSym x={1750} y={372} />
					</g>
					<Pl p={PLATES.straw} cx={1700} cy={660} w={120} o={prog(f, K1.embryos, 12)} />
					<TickG x={500} y={800} at={K1.dying} s={40} />
					<TickG x={1410} y={800} at={K1.dying + 8} s={40} />
				</g>
				<Tg x={500} y={760} text="gene from a wild banana" at={K1.gene + 24} out={K1.dying} anchor="middle" size={36} />
				<Tg x={1410} y={700} text="rhino embryos made in the lab" at={K1.embryos + 10} out={K1.dying} anchor="middle" size={34} />
				<Sx x={960} y={470} text="?" size={110} color={GREY_INK} weight={800} anchor="middle" at={K1.bio + 10} />
				{void K1.two}{void K1.both}{void K1.compare}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 2. Three levels ----------
const K2 = cues(S('three-levels'), {notone: "isn't one number", three: 'three levels', gen: 'Genetic diversity', pool: 'gene pool', sp: 'Species diversity', eco: 'ecosystem diversity', raise: 'raise one level', sep: 'trace each one'});
export const SceneLevels: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K2.eco, K2.sp, K2.gen];
	const nxt = [1e9, K2.eco, K2.sp];
	const samp = vis(f, K2.raise + 4, K2.sep + 40, 12);
	return (
		<>
			<Heading text="Biodiversity has three levels" at={4} size={60} />
			<Overlay>
				<Board wide={1} rows={at.map(a => prog(f, a - 4, 14))} glossO={at.map(a => prog(f, a + 10, 12))} glossLit={at.map((a, r) => (f < nxt[r] ? 1 : 0))} lit={at.map((a, r) => vis(f, a, nxt[r], 10))} />
				<MarkGlyph x={1150} y={rowC(1) - 4} kind="up" o={samp} />
				<MarkGlyph x={1150} y={rowC(2) - 4} kind="down" o={samp} />
				<Tg x={960} y={920} text="trace each level separately" at={K2.sep} anchor="middle" size={40} />
				{void K2.notone}{void K2.three}{void K2.pool}
			</Overlay>
		</>
	);
};

// ---------- 3. Compared with what? ----------
const K3 = cues(S('baseline'), {second: 'second question', compared: 'compared with what', effect: 'An effect is', baseline: 'your baseline', modified: 'A modified crop field', sprayed: 'sprayed conventional field', bush: 'the bush it replaced', same: 'Same field', name: 'name your baseline'});
const BEES = (n: number, x: number, w: number, seed: number) => Array.from({length: n}, (_, i) => [x - w / 2 + 30 + ((i * 0.618 + seed) % 1) * (w - 60), 330 + (((i * 7) % 5) / 4) * 90] as [number, number]);
export const SceneBaseline: React.FC = () => {
	const f = useCurrentFrame();
	const pulse = vis(f, K3.same, K3.same + 50, 8) * (0.5 + 0.5 * Math.sin((f - K3.same) / 4));
	const leftO = prog(f, K3.sprayed, 14), rightO = prog(f, K3.bush, 14);
	return (
		<>
			<Heading text="Compared with what?" at={4} size={60} />
			<Overlay>
				<Sx x={1180} y={130} text="baseline" size={52} color={INK} weight={800} at={K3.baseline} />
				<Tg x={1180} y={186} text="what you compare it with" at={K3.baseline + 12} size={36} />
				{/* the sprayed conventional field, the modified crop field, the bush */}
				<PlainField x={200} y={450} w={460} h={190} o={leftO} />
				<SprayCan x={630} y={430} o={leftO} s={1.2} />
				{BEES(3, 430, 420, 0.2).map(([x, y], i) => <Pl key={i} p={PLATES.bee} cx={x} cy={y} w={44} o={prog(f, K3.sprayed + 10 + i * 4, 10)} />)}
				<FieldHalf side="L" x={960} y={545} w={900} o={prog(f, K3.modified, 14)} id="b12-s3-mono" />
				{BEES(6, 960, 440, 0.45).map(([x, y], i) => <Pl key={i} p={PLATES.bee} cx={x} cy={y} w={44} o={prog(f, K3.sprayed + 20 + i * 4, 10)} />)}
				<FieldHalf side="R" x={1500} y={545} w={900} o={rightO} id="b12-s3-mixed" />
				{BEES(12, 1500, 440, 0.7).map(([x, y], i) => <Pl key={i} p={PLATES.bee} cx={x} cy={y} w={40} o={prog(f, K3.bush + 10 + i * 2, 10)} />)}
				<Sx x={430} y={750} text="sprayed conventional field" size={28} color={GREY_INK} hand anchor="middle" at={K3.sprayed} />
				<Sx x={960} y={750} text="modified crop field" size={28} color={GREY_INK} hand anchor="middle" at={K3.modified} />
				<Sx x={1500} y={750} text="the bush it replaced" size={28} color={GREY_INK} hand anchor="middle" at={K3.bush} />
				<g opacity={1 + 0.0 * pulse}>
					<Arr a={[470, 810]} b={[880, 810]} at={K3.sprayed + 30} color={AMBER} width={5 + 3 * pulse} />
					<Arr a={[1040, 810]} b={[1450, 810]} at={K3.bush + 20} color={AMBER} width={5 + 3 * pulse} />
				</g>
				<Tg x={675} y={866} text="more insect species" at={K3.sprayed + 36} anchor="middle" size={36} color={f >= K3.bush + 20 ? GREY_INK : undefined} />
				<Tg x={1245} y={866} text="far fewer" at={K3.bush + 26} anchor="middle" size={36} />
				<g opacity={prog(f, K3.name, 12)}>
					<rect x={760} y={935} width={400} height={56} rx={28} fill={CARD} stroke={GREYT} strokeWidth={2.5} strokeDasharray="8 6" />
					<Sx x={960} y={973} text="compared with: ..." size={30} color={GREY_INK} hand anchor="middle" />
				</g>
				{void K3.second}{void K3.compared}{void K3.effect}{void EDGE}
			</Overlay>
		</>
	);
};

// ---------- the crop column, shared by scenes 4, 5 and 8 ----------
export const CROP_CELLS = {
	genA: {x: CROP.a, r: 2, kind: 'up' as const, lines: ['one added resistance trait;', 'crop still one clone'], vs: 'vs ordinary Cavendish'},
	genB: {x: CROP.b, r: 2, kind: 'down' as const, lines: ['still one clone'], vs: 'vs many varieties'},
	spA: {x: CROP.a, r: 1, kind: 'up' as const, lines: ['more insect species'], vs: 'vs sprayed cotton'},
	spB: {x: CROP.b, r: 1, kind: 'down' as const, lines: ['fewer wildflowers,', 'fewer insects'], vs: 'vs fields with weeds left'},
	ecoA: {x: CROP.a, r: 0, kind: 'q' as const, lines: ['could spare land'], vs: 'only if land is protected'},
};
export type CropKey = keyof typeof CROP_CELLS;
export const CropCells: React.FC<{o: Partial<Record<CropKey, number>>; lit?: Partial<Record<CropKey, number>>}> = ({o, lit = {}}) => (
	<>
		{(Object.keys(CROP_CELLS) as CropKey[]).map(k => {
			const c = CROP_CELLS[k];
			return <Cell key={k} x={c.x} r={c.r} kind={c.kind} lines={c.lines} vs={c.vs} o={o[k] ?? 0} lit={lit[k] ?? 0} size={23} />;
		})}
	</>
);

// ---------- 4. The banana: the genetic level ----------
const K4 = cues(S('banana-genetic'), {back: 'Back to the bananas', suckers: 'grown from suckers', same: 'the same alleles', qcav: 'QCAV-4', gene: 'resistance gene from a wild banana', trials: 'resisted TR4', approved: 'approved', clone: 'still one clone', ord: 'Compared with ordinary Cavendish', many: 'Compared with growing many varieties', narrow: 'very narrow'});
const CLONE_X = [1130, 1290, 1450, 1610];
const CLONE_RINGS: RK[] = ['A', 'C'];
export const SceneBanana: React.FC = () => {
	const f = useCurrentFrame();
	const bx = 1200, by = 470, bw = 300;
	const wildC = platePt(PLATES.banana, bx, by, bw, 600, 1000);
	const slide = smooth(prog(f, K4.gene + 10, 34));
	const allIns = prog(f, K4.clone, 14);
	return (
		<>
			<Heading text="The banana: the genetic level" at={4} size={56} />
			<Overlay>
				<Board lit={[0, 0, 1]} x1={CROP.x1} />
				<ColHead x0={CROP.x0} x1={CROP.x1} title="crop" base={f >= K4.many ? 'many varieties' : f >= K4.ord ? 'ordinary Cavendish' : undefined} flash={vis(f, K4.ord, K4.ord + 40, 8) + vis(f, K4.many, K4.many + 40, 8)} />
				<CropCells o={{genA: prog(f, K4.ord + 10, 12), genB: prog(f, K4.many + 10, 12)}} lit={{genA: 1 - prog(f, K4.many, 10), genB: 1}} />
				{/* the banana pair: wild (seeded) and Cavendish (seedless) */}
				<BananaHalf side="L" cx={bx} cy={by} w={bw} o={prog(f, K4.back, 14) * (0.5 + 0.5 * vis(f, K4.gene - 6, K4.trials, 12))} id="b12-s4-wild" />
				<BananaHalf side="R" cx={bx} cy={by} w={bw} o={prog(f, K4.back, 14)} id="b12-s4-cav" />
				<ScribbleRing cx={bx + 75} cy={by} rx={70} ry={190} at={K4.suckers} out={K4.gene} seed={5} />
				<Pl p={PLATES.plantation} cx={1620} cy={430} w={330} o={prog(f, K4.back + 10, 14)} />
				<g opacity={vis(f, K4.trials, K4.trials + 80, 10)}><ScribbleRing cx={1625} cy={420} rx={70} ry={66} at={K4.trials} seed={3} color="#2f8a5b" /></g>
				<Sx x={1620} y={530} text="TR4 trial plot" size={26} color={GREY_INK} hand anchor="middle" at={K4.back + 20} />
				{/* clone strips: one ring pattern repeated; the wild gene slides in */}
				{CLONE_X.map((x, i) => (
					<g key={i} opacity={prog(f, K4.same - 10 + i * 6, 12)}>
						<Strip cx={x} y={800} n={6} pitch={22} gap={26} ins={i === 0 ? prog(f, K4.gene + 40, 10) : allIns} i0={2} i1={3} />
						{CLONE_RINGS.map((k, j) => <Rg key={j} x={x - 30 + j * 60} y={772} r={11} k={k} />)}
					</g>
				))}
				{slide > 0.01 && slide < 0.99 ? <rect x={lerp(wildC[0], CLONE_X[0] - 22, slide) - 22} y={lerp(wildC[1], 800, slide) - 10} width={44} height={46} rx={10} fill="#fff3d9" stroke={AMBER} strokeWidth={3} /> : null}
				<Sx x={1370} y={880} text="every plant: the same alleles" size={28} color={GREY_INK} hand anchor="middle" at={K4.same + 10} />
				<Tg x={1300} y={700} text="seedless: grown from suckers" at={K4.suckers + 10} out={K4.gene} size={36} />
				<Tg x={1300} y={700} text="gene from a wild banana" at={K4.gene + 10} out={K4.trials} size={36} />
				<Tg x={1300} y={700} text="approved 2024: a back-up" at={K4.approved} out={K4.many} size={36} />
				<Pl p={PLATES.seedlings} cx={1450} cy={960} w={300} o={prog(f, K4.many, 14)} />
				<Sx x={1640} y={970} text="many varieties" size={28} color={GREY_INK} hand at={K4.many + 8} />
				{void K4.qcav}{void K4.narrow}{void CONS}
			</Overlay>
		</>
	);
};

// ---------- 5. The field: species and ecosystems ----------
const K5 = cues(S('field-species-ecosystem'), {field: 'the field itself', sprays: 'far fewer insecticide sprays', bt: 'Bt cotton', species: 'species level', base1: 'on that baseline', tol: 'tolerate a weedkiller', spray: 'spray the whole crop', comp: 'compared with fields', fewer: 'fewer wildflowers', eco: 'ecosystem level', yields: 'higher yields', less: 'less bush cleared', only: 'only if that land'});
const FLOWERS = [1150, 1250, 1350, 1450, 1550];
export const SceneField: React.FC = () => {
	const f = useCurrentFrame();
	const cotO = vis(f, K5.sprays - 10, K5.tol, 14);
	const rowO = vis(f, K5.tol, K5.eco, 14);
	const sprayT = prog(f, K5.spray, 50, x => x);
	const grey = prog(f, K5.spray + 30, 20);
	const fly = smooth(prog(f, K5.spray + 44, 30));
	const landO = prog(f, K5.eco, 14);
	return (
		<>
			<Heading text="The field: species and ecosystems" at={4} size={56} />
			<Overlay>
				<Board lit={[vis(f, K5.eco, 2000, 10), vis(f, K5.bt, K5.eco, 10), 0]} x1={CROP.x1} />
				<ColHead x0={CROP.x0} x1={CROP.x1} title="crop" />
				<CropCells o={{genA: 0.5, genB: 0.5, spA: prog(f, K5.species, 12), spB: prog(f, K5.comp, 12), ecoA: prog(f, K5.only, 12)}} lit={{spA: 1 - prog(f, K5.tol, 10), spB: 1 - prog(f, K5.eco, 10), ecoA: 1}} />
				{/* Bt cotton: fewer sprays */}
				<g opacity={cotO}>
					<Pl p={PLATES.cotton} cx={1180} cy={480} w={230} />
					<Sx x={1320} y={430} text="before Bt" size={26} color={GREY_INK} hand />
					<FillBar x={1450} y={410} w={300} h={26} p={prog(f, K5.sprays, 20)} color="#9aa3ab" />
					<Sx x={1320} y={500} text="with Bt" size={26} color={GREY_INK} hand />
					<FillBar x={1450} y={480} w={300} h={26} p={0.15 * prog(f, K5.sprays + 10, 20)} color={AMBER} />
				</g>
				<Tg x={1150} y={700} text="more insect species survive" at={K5.species} out={K5.tol} size={36} />
				{/* a herbicide-tolerant crop row, sprayed whole */}
				<g opacity={rowO}>
					<FieldHalf side="L" x={1350} y={500} w={760} id="b12-s5-crop" />
					{FLOWERS.map((x, i) => (
						<g key={i} opacity={1 - 0.6 * grey}>
							<Pl p={i % 2 ? PLATES.snap : PLATES.flower} cx={x} cy={i % 2 ? 640 : 655} w={i % 2 ? 34 : 60} dim={grey} />
						</g>
					))}
					{[1200, 1360, 1520].map((x, i) => <Pl key={i} p={PLATES.bee} cx={x + 40 * fly} cy={590 - 260 * fly} w={44} o={1 - fly} />)}
					<SprayDrift x0={1060} x1={1650} y={560} t={sprayT} h={220} />
				</g>
				<Tg x={1100} y={760} text="herbicide-tolerant crop" at={K5.tol + 6} out={K5.spray} size={36} />
				<Tg x={1100} y={760} text="fewer weeds and wildflowers, fewer insects" at={K5.spray + 30} out={K5.eco} size={34} />
				{/* the ecosystem: land sparing only if protected */}
				<g opacity={landO}>
					<LandBlock x={1080} y={430} w={300} h={170} kind="farm" />
					<LandBlock x={1400} y={430} w={300} h={170} kind="bush" />
					<rect x={1400} y={430} width={300} height={170} rx={12} fill="none" stroke={GREYT} strokeWidth={3.5} strokeDasharray="10 8" opacity={1 - prog(f, K5.less + 10, 30)} />
					<Sx x={1230} y={640} text="farm" size={28} color={GREY_INK} hand anchor="middle" />
					<Sx x={1550} y={640} text="bush" size={28} color={GREY_INK} hand anchor="middle" />
					<Sx x={1550} y={410} text="would-be farmland" size={26} color={GREY_INK} hand anchor="middle" opacity={1 - prog(f, K5.less + 10, 30)} />
				</g>
				<Tg x={1100} y={760} text="could spare land" at={K5.less + 10} out={K5.only + 30} size={36} />
				<Tg x={1100} y={760} text="only if that land is protected" at={K5.only + 30} size={36} />
				{void K5.field}{void K5.bt}{void K5.base1}{void K5.yields}{void K5.fewer}{void INK}
			</Overlay>
		</>
	);
};
