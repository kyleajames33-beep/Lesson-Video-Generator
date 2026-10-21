// M6 B12 scenes 6 to 9: the rhino rescue (Najin and Fatu, eggs fertilised in the lab with banked sperm, frozen
// embryos, a southern white surrogate, no pregnancy yet); tracing the rhino on the levels board (the subspecies and
// some genetic diversity preserved, a species added only if white rhinos are absent from the baseline area, a
// gene-pool bottleneck, the stem-cell route to widen it, the ecosystem decades away); yield is not a level, the model
// sentence, and habitat clearing as the biggest driver; memory.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {GreyCross, Tg} from '../bio-m6-b07/parts';
import {Cavendish} from '../bio-m6-b11/parts';
import {S} from './common';
import {CropCells} from './s1';
import {
	AMBER, AMBER_INK, Arr, BIO_INK, Board, Bottleneck, CARD, CONS, CROP, Cell, ColHead, EDGE, Embryos, GREYT, GREY_INK, INK, LandBlock, MarkText, PANEL,
	PLATES, Pill, Pl, RingRow, Rg, lerp, prog, smooth, vis,
} from './parts';
import type {RK} from './parts';

// ---------- 6. The rhino rescue ----------
const K6 = cues(S('rhino-rescue'), {rhino: 'Now the rhino', male: 'last male died', two: 'two remaining females', najin: 'Najin and Fatu', carry: "can't carry", collect: 'collect eggs', fert: 'fertilise them', sperm: 'sperm frozen', freeze: 'freeze the embryos', dozens: 'made dozens', placed: 'placed some', southern: 'southern white rhinos', surrogate: 'surrogate mothers', nopreg: 'no northern white pregnancy'});
const Chip: React.FC<{x: number; y: number; text: string; o: number}> = ({x, y, text, o}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x - 70} y={y} width={140} height={50} rx={25} fill={CARD} stroke={BIO_INK} strokeWidth={3} />
		<Sx x={x} y={y + 35} text={text} size={30} color={BIO_INK} hand anchor="middle" />
	</g>
));
export const SceneRescue: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="The rhino rescue" at={4} size={60} />
			<Overlay>
				<Pl p={PLATES.rhino} cx={380} cy={390} w={440} o={prog(f, 4, 14)} />
				<GTag x={380} y={540} text="2018: last male died" at={K6.male} out={K6.najin} size={28} anchor="middle" />
				<Chip x={290} y={560} text="Najin" o={prog(f, K6.najin, 12)} />
				<Chip x={470} y={560} text="Fatu" o={prog(f, K6.najin + 8, 12)} />
				<Sx x={380} y={660} text="cannot carry a pregnancy" size={28} color={GREY_INK} hand anchor="middle" at={K6.carry + 6} />
				{/* eggs from Fatu, fertilised in the lab with banked sperm */}
				<Arr a={[500, 620]} b={[640, 780]} at={K6.collect} color={BIO_INK} />
				<Sx x={600} y={690} text="eggs" size={28} color={BIO_INK} hand at={K6.collect + 10} />
				<Pl p={PLATES.icsi} cx={760} cy={840} w={250} o={prog(f, K6.fert, 12)} />
				<Sx x={760} y={940} text="fertilised in the lab" size={28} color={GREY_INK} hand anchor="middle" at={K6.fert + 8} />
				<Pl p={PLATES.straw} cx={1000} cy={600} w={120} o={prog(f, K6.sperm, 12)} />
				<Sx x={1000} y={700} text="banked sperm" size={28} color={GREY_INK} hand anchor="middle" at={K6.sperm + 8} />
				<Arr a={[960, 720]} b={[860, 790]} at={K6.sperm + 14} />
				{/* frozen embryos: dozens */}
				<Arr a={[900, 840]} b={[1030, 840]} at={K6.freeze} />
				<Embryos x={1070} y={840} n={8} lostIdx={[]} o={prog(f, K6.freeze + 6, 12)} gap={38} />
				<Sx x={1203} y={900} text="frozen embryos" size={28} color={GREY_INK} hand anchor="middle" at={K6.freeze + 10} />
				<GTag x={1203} y={930} text="39 embryos (2026)" at={K6.dozens} size={26} anchor="middle" />
				{/* a southern white surrogate */}
				<g style={{filter: 'sepia(0.35) saturate(1.2)'}}>
					<Pl p={PLATES.rhino} cx={1630} cy={640} w={330} o={prog(f, K6.southern, 14)} />
				</g>
				<Sx x={1630} y={760} text="southern white rhino (surrogate)" size={26} color={GREY_INK} hand anchor="middle" at={K6.southern + 8} />
				<Arr a={[1370, 820]} b={[1500, 720]} at={K6.surrogate} color={AMBER_INK} />
				<Sx x={1460} y={830} text="not yet" size={32} color={GREY_INK} hand at={K6.nopreg + 10} />
				<Sx x={1250} y={330} text="surrogate" size={52} color={INK} weight={800} at={K6.surrogate} />
				<Tg x={1250} y={388} text="carries another's embryo" at={K6.surrogate + 12} size={36} />
				{void K6.rhino}{void K6.two}{void K6.placed}
			</Overlay>
		</>
	);
};

// ---------- the conservation column, shared by scenes 7 and 8 ----------
export const CONS_CELLS = {
	sp: {r: 1, kind: 'q' as const, lines: ['adds a species to an area only', 'if white rhinos are absent', 'from that baseline area']},
	genDown: {r: 2, kind: 'down' as const, lines: ['bottleneck from the start:', "one female's eggs"]},
	genQ: {r: 2, kind: 'q' as const, lines: ['wider if more founders', '(stem-cell route, in research)']},
	eco: {r: 0, kind: 'q' as const, lines: ['grazing again:', 'decades away at best']},
};
export type ConsKey = keyof typeof CONS_CELLS;
export const ConsCells: React.FC<{o: Partial<Record<ConsKey, number>>; lit?: Partial<Record<ConsKey, number>>; glow?: Partial<Record<ConsKey, number>>}> = ({o, lit = {}, glow = {}}) => (
	<>
		{(Object.keys(CONS_CELLS) as ConsKey[]).map(k => {
			const c = CONS_CELLS[k];
			return <Cell key={k} x={CONS.x0} r={c.r} kind={c.kind} lines={c.lines} o={o[k] ?? 0} lit={lit[k] ?? 0} size={23} glow={glow[k] ?? 0} />;
		})}
	</>
);

// ---------- 7. Tracing the rhino ----------
const K7 = cues(S('rhino-levels'), {trace: 'Trace the levels', sub: 'subspecies', some: 'some of its genetic diversity', species: 'a species to a particular', onlyif: 'only if white rhinos', gen: 'genetic level', eggs: "one female's eggs", bottle: 'bottleneck', second: 'second route', skin: 'frozen skin cells', stem: 'into stem cells', es: 'eggs and sperm', widen: 'widen it', eco: 'ecosystem gain', decades: 'decades away'});
const POOL0: RK[] = ['A', 'B', 'C', 'A', 'D', 'C', 'B', 'D'];
const POOL_X = PANEL.x0 + 30, POOL_Y = 520;
const CELL_KINDS: RK[] = ['A', 'B', 'C', 'D', 'flow', 'A', 'C', 'flow', 'B', 'D', 'flow', 'C'];
export const SceneRhinoLevels: React.FC = () => {
	const f = useCurrentFrame();
	const open = smooth(prog(f, 4, 30));
	const x1 = lerp(CROP.x1, CONS.x1, open);
	const genDownO = vis(f, K7.bottle, K7.widen, 12);
	const routeO = prog(f, K7.second, 12);
	const tagOut = (a: number) => a;
	return (
		<>
			<Heading text="Tracing the rhino" at={4} size={60} />
			<Overlay>
				<Board x1={x1} lit={[vis(f, K7.eco, 2000, 10), vis(f, K7.species, K7.gen, 10), vis(f, K7.gen, K7.eco, 10)]} ecoLit={prog(f, K7.decades, 12)} />
				<g opacity={0.28}>
					<ColHead x0={CROP.x0} x1={CROP.x1} title="crop" lit={0} />
					<CropCells o={{genA: 1, genB: 1, spA: 1, spB: 1, ecoA: 1}} />
				</g>
				<ColHead x0={CONS.x0} x1={CONS.x1} title="conservation" base={f >= K7.sub ? 'doing nothing' : undefined} o={open} />
				<ConsCells o={{sp: prog(f, K7.species, 12), genDown: genDownO, genQ: prog(f, K7.widen, 12), eco: prog(f, K7.decades, 12)}} lit={{sp: 1 - 0.8 * prog(f, K7.bottle, 10), genDown: 1, genQ: 1, eco: 1}} />
				{/* the rhino and its gene pool */}
				<Pl p={PLATES.rhino} cx={1655} cy={300} w={290} o={prog(f, 10, 14)} />
				<g opacity={prog(f, K7.eggs, 12)}>
					<rect x={PANEL.x0} y={430} width={PANEL.x1 - PANEL.x0} height={200} rx={20} fill="#eef4f9" stroke="#8ba9c4" strokeWidth={3} />
					<Sx x={PANEL.x0 + 18} y={462} text="gene pool" size={26} color={GREY_INK} hand />
					<RingRow x={POOL_X + 20} y={POOL_Y} kinds={POOL0.slice(0, 2)} gap={40} />
					<RingRow x={POOL_X + 105} y={POOL_Y} kinds={POOL0.slice(2)} gap={34} o={prog(f, K7.eggs + 30, 12)} />
					<Sx x={POOL_X + 40} y={POOL_Y + 48} text="Fatu" size={24} color={GREY_INK} hand anchor="middle" />
					<Sx x={POOL_X + 190} y={POOL_Y + 48} text="three males" size={24} color={GREY_INK} hand anchor="middle" opacity={prog(f, K7.eggs + 30, 12)} />
					{CELL_KINDS.map((k, i) => (k === 'flow' ? <Rg key={i} x={POOL_X + 40 + (i % 6) * 44} y={POOL_Y + 84} r={12} k="flow" o={prog(f, K7.widen + i * 2, 10)} /> : null))}
				</g>
				<g opacity={vis(f, K7.bottle, K7.second + 40, 12)}>
					<Bottleneck x={1655} y={640} w={300} />
					<RingRow x={1635} y={720} kinds={['A', 'C']} gap={40} r={11} />
				</g>
				{/* the second route: banked skin cells from about a dozen rhinos */}
				{CELL_KINDS.map((k, i) => (
					<g key={i} opacity={routeO * prog(f, K7.skin + i * 2, 10) * (1 - 0.5 * prog(f, K7.stem + 20, 12))}>
						<Pl p={PLATES.cell} cx={420 + i * 56} cy={880} w={48} />
						<Rg x={420 + i * 56} y={928} r={10} k={k} />
					</g>
				))}
				<Arr a={[1100, 890]} b={[1220, 890]} at={K7.stem} />
				<Sx x={1160} y={870} text="stem cells" size={24} color={GREY_INK} hand anchor="middle" at={K7.stem} out={K7.es + 30} />
				<Pl p={PLATES.eggdish} cx={1280} cy={885} w={110} o={prog(f, K7.es, 12)} />
				<Sx x={1280} y={960} text="eggs, sperm" size={24} color={GREY_INK} hand anchor="middle" at={K7.es + 6} />
				<Arr a={[1310, 860]} b={[1520, 660]} at={K7.widen} color="#3d7fb0" dash="10 8" />
				<Tg x={420} y={1010} text="could preserve the subspecies and some of its genetic diversity" at={K7.sub} out={tagOut(K7.bottle)} size={34} />
				<Tg x={420} y={1010} text="a bottleneck from the start" at={K7.bottle + 6} out={K7.second} size={36} />
				<Tg x={420} y={1010} text="a second route, still in research" at={K7.second + 6} out={K7.eco} size={36} />
				{void K7.trace}{void K7.some}{void K7.onlyif}{void K7.gen}{void AMBER}{void EDGE}{void GREYT}
			</Overlay>
		</>
	);
};

// ---------- 8. Yield isn't a level ----------
const K8 = cues(S('yield-not-a-level'), {notice: 'Notice what', yieldw: 'yield', prod: 'production gain', saving: 'saving a subspecies', every: 'gain at every level', strong: 'Strong answers', sub2: ['subspecies', 2], asp: 'add a species', base: 'baseline area', judge: 'Then judge', sep: 'separately', scale: 'keep the scale', clear: 'clearing habitat', biggest: 'biggest driver', whatever: 'whatever the crop', compare: 'compare a modified crop', replaces: 'farming it replaces'});
export const SceneYield: React.FC = () => {
	const f = useCurrentFrame();
	const slide = smooth(prog(f, K8.yieldw, 30));
	const yieldO = prog(f, K8.yieldw - 4, 10) * (1 - prog(f, K8.strong, 14));
	const pulse = (k: number) => vis(f, K8.every + k * 14, K8.every + k * 14 + 30, 8);
	const modelO = prog(f, K8.strong, 12) * (1 - prog(f, K8.clear, 14));
	const landO = prog(f, K8.clear - 6, 14);
	const flash = vis(f, K8.replaces, K8.replaces + 60, 10);
	return (
		<>
			<Heading text="Yield isn't a level" at={4} size={60} />
			<Overlay>
				<Board />
				<ColHead x0={CROP.x0} x1={CROP.x1} title="crop" base={f >= K8.replaces ? 'conventional farming' : undefined} flash={flash} />
				<CropCells o={{genA: 1, genB: 1, spA: 1, spB: 1, ecoA: 1}} lit={{genA: 1, genB: 1, spA: 1, spB: 1, ecoA: 1}} />
				<ColHead x0={CONS.x0} x1={CONS.x1} title="conservation" base="doing nothing" />
				<ConsCells o={{sp: 1, genQ: 1, eco: 1}} lit={{sp: 1, genQ: 1, eco: 1}} glow={{eco: pulse(0), sp: pulse(1), genQ: pulse(2)}} />
				{/* yield finds no row */}
				<g opacity={yieldO}>
					<Pill x={lerp(1900, PANEL.x0 + 20, slide)} y={540} text="more yield" size={34} lit={1} />
				</g>
				<g opacity={yieldO}><GreyCross x={PANEL.x0 + 110} y={570} at={K8.yieldw + 34} s={34} /></g>
				<Sx x={1655} y={660} text="not a level" size={28} color={GREY_INK} hand anchor="middle" at={K8.prod} out={K8.strong} />
				<Sx x={1655} y={696} text="of biodiversity" size={28} color={GREY_INK} hand anchor="middle" at={K8.prod} out={K8.strong} />
				{/* the model sentence */}
				<g opacity={modelO}>
					<MarkText x={120} y={900} size={34} at={K8.strong} parts={[{t: 'This could preserve the northern white rhino '}, {t: 'subspecies', mark: K8.sub2}, {t: ' and some of its genetic diversity.'}]} />
					<MarkText x={120} y={960} size={34} at={K8.asp - 14} parts={[{t: 'It would add '}, {t: 'a species', mark: K8.asp + 4}, {t: ' to a particular area only if white rhinos are absent from that '}, {t: 'baseline area', mark: K8.base}, {t: '.'}]} />
				</g>
				<g opacity={1 - prog(f, K8.clear, 14)}>
					<Pill x={PANEL.x0 + 10} y={400} text="genetic: bottleneck" size={26} lit={0} o={prog(f, K8.sep, 12)} />
					<Pill x={PANEL.x0 + 10} y={470} text="ecosystem: decades away" size={24} lit={0} o={prog(f, K8.sep + 8, 12)} />
				</g>
				{/* habitat clearing: the biggest driver on land */}
				<g opacity={landO}>
					<LandBlock x={PANEL.x0 + 20} y={380} w={290} h={150} kind="bush" clear={prog(f, K8.clear + 6, 40)} />
					<LandBlock x={PANEL.x0 + 20} y={380} w={290} h={150} kind="farm" o={prog(f, K8.clear + 40, 16)} />
					<LandBlock x={PANEL.x0 + 20} y={580} w={290} h={150} kind="bush" clear={prog(f, K8.whatever, 40)} o={prog(f, K8.whatever - 20, 12)} />
					<LandBlock x={PANEL.x0 + 20} y={580} w={290} h={150} kind="farm" crop="dots" o={prog(f, K8.whatever + 34, 16)} />
					<Sx x={PANEL.x0 + 165} y={562} text="bush cleared for a crop" size={24} color={GREY_INK} hand anchor="middle" opacity={prog(f, K8.clear + 30, 12)} />
					<Sx x={PANEL.x0 + 165} y={762} text="a different crop: same loss" size={24} color={GREY_INK} hand anchor="middle" opacity={prog(f, K8.whatever + 30, 12)} />
				</g>
				<Tg x={120} y={930} text="on land: habitat clearing is the biggest driver of biodiversity loss" at={K8.clear + 10} size={36} />
				{void K8.notice}{void K8.saving}{void K8.judge}{void K8.scale}{void K8.biggest}{void K8.compare}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 9. Memory ----------
const K9 = cues(S('memory'), {two: 'Two things', banana: 'banana problem returns', any: 'any technique', cloning: 'cloning', variety: 'one popular variety', sire: 'one top sire', narrows: 'narrows the gene pool', disease: 'one disease can hit', which: 'which level'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Two things to hold on to" at={4} size={60} />
			<Overlay>
				<Sx x={160} y={420} text="The banana problem returns." size={72} color={INK} hand at={K9.banana} />
				<Pl p={PLATES.clones} cx={1310} cy={400} w={330} o={prog(f, K9.cloning, 12)} />
				<Cavendish cx={1500} cy={400} w={120} o={prog(f, K9.variety, 12)} id="b12-mem-cav" />
				<Pl p={PLATES.bull} cx={1700} cy={400} w={200} o={prog(f, K9.sire, 12)} />
				<GTag x={160} y={470} text="copies narrow the gene pool" at={K9.narrows} out={K9.which} size={30} />
				<Sx x={160} y={740} text="Which level? Compared with what?" size={64} color={INK} hand at={K9.which} />
				<g opacity={prog(f, K9.which + 14, 12)}>
					<rect x={1290} y={690} width={420} height={56} rx={28} fill={CARD} stroke={GREYT} strokeWidth={2.5} strokeDasharray="8 6" />
					<Sx x={1500} y={728} text="compared with: ..." size={30} color={GREY_INK} hand anchor="middle" />
				</g>
				{void K9.two}{void K9.any}{void K9.disease}
			</Overlay>
		</>
	);
};
