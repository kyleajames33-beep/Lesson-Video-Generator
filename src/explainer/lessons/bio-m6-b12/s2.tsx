// M6 B12 scenes 6 to 9: the rhino rescue (Najin and Fatu, eggs fertilised in the lab with banked sperm, frozen
// embryos, a southern white surrogate, no pregnancy yet); tracing the rhino on the levels board (the subspecies and
// some genetic diversity preserved, a species added only if white rhinos are absent from the baseline area, a
// gene-pool bottleneck, the stem-cell route to widen it, the ecosystem decades away); yield is not a level, the model
// sentence, and habitat clearing as the biggest driver; memory.
// Quality fix (6 Nov 2026): scene 6 opens on the rhinos at full size, then lays the rescue out as a process across the
// frame with large plates; scenes 7 and 8 use the readable board (big.tsx); scene 9 shows the banana problem and the
// three kinds of copying as large plates with the gene pool narrowing.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {GreyCross, Tg} from '../bio-m6-b07/parts';
import {Cavendish} from '../bio-m6-b11/parts';
import {S} from './common';
import {
	AMBER, AMBER_INK, Arr, BIO_INK, Bottleneck, CARD, GREYT, GREY_INK, INK, LandBlock, MarkText, PLATES, Pill, Pl, Rg, RingRow, lerp, prog, smooth, vis,
} from './parts';
import type {RK} from './parts';
import {BigBoard, BigHead, ConsCells2, CropCells2, LAY, PANEL2} from './big';

// ---------- 6. The rhino rescue ----------
const K6 = cues(S('rhino-rescue'), {rhino: 'Now the rhino', male: 'last male died', two: 'two remaining females', najin: 'Najin and Fatu', carry: "can't carry", collect: 'collect eggs', fert: 'fertilise them', sperm: 'sperm frozen', freeze: 'freeze the embryos', dozens: 'made dozens', placed: 'placed some', southern: 'southern white rhinos', surrogate: 'surrogate mothers', nopreg: 'no northern white pregnancy'});
const Chip: React.FC<{x: number; y: number; text: string; o: number; size?: number}> = ({x, y, text, o, size = 40}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x - size * 2.2} y={y} width={size * 4.4} height={size * 1.6} rx={size * 0.8} fill={CARD} stroke={BIO_INK} strokeWidth={3} />
		<Sx x={x} y={y + size * 1.12} text={text} size={size} color={BIO_INK} hand anchor="middle" />
	</g>
));
/** A rhino plate, optionally mirrored about its own centre. */
const Rhino: React.FC<{cx: number; cy: number; w: number; o?: number; flip?: boolean; sepia?: boolean}> = ({cx, cy, w, o = 1, flip = false, sepia = false}) => (o <= 0.01 ? null : (
	<g transform={flip ? `translate(${2 * cx},0) scale(-1,1)` : undefined} style={sepia ? {filter: 'sepia(0.35) saturate(1.2)'} : undefined}>
		<Pl p={PLATES.rhino} cx={cx} cy={cy} w={w} o={o} />
	</g>
));
export const SceneRescue: React.FC = () => {
	const f = useCurrentFrame();
	const pair = smooth(prog(f, K6.two, 26));
	const shrink = smooth(prog(f, K6.collect - 10, 30));
	// the rhinos: one large rhino, then two (Najin and Fatu), then both move to the top left
	const r1 = {cx: lerp(lerp(960, 640, pair), 230, shrink), cy: lerp(560, 330, shrink), w: lerp(lerp(860, 600, pair), 250, shrink)};
	const r2 = {cx: lerp(lerp(960, 1300, pair), 470, shrink), cy: r1.cy, w: r1.w};
	const chipY = lerp(830, 430, shrink), chipS = lerp(40, 28, shrink);
	const procO = (a: number) => prog(f, a, 14);
	return (
		<>
			<Heading text="The rhino rescue" at={4} size={60} />
			<Overlay>
				<Rhino cx={r1.cx} cy={r1.cy} w={r1.w} o={prog(f, 4, 14)} />
				<Rhino cx={r2.cx} cy={r2.cy} w={r2.w} o={prog(f, K6.two, 14)} flip />
				<Tg x={960} y={890} text="2018: the last male died" at={K6.male} out={K6.two} size={46} anchor="middle" />
				<Sx x={960} y={300} text="northern white rhino" size={40} color={GREY_INK} hand anchor="middle" at={8} out={K6.two} />
				<Chip x={r1.cx} y={chipY} text="Najin" o={prog(f, K6.najin, 12)} size={chipS} />
				<Chip x={r2.cx} y={chipY} text="Fatu" o={prog(f, K6.najin + 8, 12)} size={chipS} />
				<Tg x={960} y={990} text="the two females can't carry a pregnancy" at={K6.carry + 6} out={K6.collect - 10} size={42} anchor="middle" />
				{/* eggs from Fatu, fertilised in the lab with banked sperm */}
				<Arr a={[500, 470]} b={[560, 560]} at={K6.collect + 10} color={BIO_INK} width={6} head={18} />
				<Sx x={540} y={520} text="eggs" size={34} color={BIO_INK} hand at={K6.collect + 16} />
				<Pl p={PLATES.icsi} cx={720} cy={700} w={460} o={procO(K6.fert)} />
				<Sx x={720} y={880} text="fertilised in the lab" size={36} color={INK} hand anchor="middle" at={K6.fert + 8} />
				<Pl p={PLATES.straw} cx={880} cy={340} w={170} o={procO(K6.sperm)} />
				<Sx x={1000} y={330} text="banked sperm" size={34} color={GREY_INK} hand at={K6.sperm + 8} />
				<Sx x={1000} y={372} text="from males that died" size={30} color={GREY_INK} hand at={K6.sperm + 14} />
				<Arr a={[880, 450]} b={[820, 580]} at={K6.sperm + 14} width={6} head={18} />
				{/* frozen embryos: dozens */}
				<Arr a={[960, 700]} b={[1050, 700]} at={K6.freeze} width={6} head={18} />
				{[0, 1, 2, 3].map(i => <Pl key={i} p={PLATES.embryo} cx={1110 + (i % 2) * 96} cy={650 + Math.floor(i / 2) * 100} w={88} o={prog(f, K6.freeze + 6 + i * 4, 10)} />)}
				<g opacity={prog(f, K6.freeze + 6, 12)}>
					<rect x={1050} y={585} width={210} height={230} rx={22} fill="none" stroke="#6fa3c8" strokeWidth={3.5} strokeDasharray="10 7" />
				</g>
				<Sx x={1155} y={870} text="frozen embryos" size={36} color={INK} hand anchor="middle" at={K6.freeze + 10} />
				<GTag x={1155} y={890} text="39 embryos (2026)" at={K6.dozens} size={30} anchor="middle" />
				{/* a southern white surrogate */}
				<Rhino cx={1590} cy={680} w={500} o={prog(f, K6.southern, 14)} sepia />
				<Sx x={1590} y={850} text="southern white rhino" size={36} color={INK} hand anchor="middle" at={K6.southern + 8} />
				<Arr a={[1280, 700]} b={[1400, 700]} at={K6.surrogate} color={AMBER_INK} width={6} head={18} />
				<Sx x={1360} y={470} text="surrogate" size={54} color={INK} weight={800} at={K6.surrogate} />
				<Tg x={1360} y={526} text="carries another's embryo" at={K6.surrogate + 12} size={40} />
				<g opacity={prog(f, K6.nopreg, 12)}>
					<rect x={1360} y={900} width={460} height={72} rx={36} fill="#f1f1ef" stroke={GREYT} strokeWidth={3} />
					<Sx x={1590} y={948} text="no pregnancy has lasted yet" size={34} color={INK} hand anchor="middle" />
				</g>
				{void K6.rhino}{void K6.placed}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 7. Tracing the rhino ----------
const K7 = cues(S('rhino-levels'), {trace: 'Trace the levels', sub: 'subspecies', some: 'some of its genetic diversity', species: 'a species to a particular', onlyif: 'only if white rhinos', gen: 'genetic level', eggs: "one female's eggs", bottle: 'bottleneck', second: 'second route', skin: 'frozen skin cells', stem: 'into stem cells', es: 'eggs and sperm', widen: 'widen it', eco: 'ecosystem gain', decades: 'decades away'});
const POOL0: RK[] = ['A', 'B', 'C', 'A', 'D', 'C', 'B', 'D'];
const POOL = {x0: 1200, x1: 1850, y0: 470, y1: 720};
const CELL_KINDS: RK[] = ['A', 'B', 'C', 'D', 'flow', 'A', 'C', 'flow', 'B', 'D', 'flow', 'C'];
export const SceneRhinoLevels: React.FC = () => {
	const f = useCurrentFrame();
	const open = smooth(prog(f, 4, 30));
	const L = LAY.cons;
	const x1 = lerp(L.x1 - 400, L.x1, open);
	const genDownO = vis(f, K7.bottle, K7.widen, 12);
	const routeO = prog(f, K7.second, 12);
	const poolCy = 600;
	return (
		<>
			<Heading text="Tracing the rhino" at={4} size={60} />
			<Overlay>
				<BigBoard mode="cons" x1={x1} lit={[vis(f, K7.eco, 2000, 10), vis(f, K7.species, K7.gen, 10), vis(f, K7.gen, K7.eco, 10)]} ecoLit={prog(f, K7.decades, 12)} />
				<BigHead x0={L.cons} x1={L.x1} title="conservation" base={f >= K7.sub ? 'doing nothing' : undefined} o={open} />
				<ConsCells2 mode="cons" o={{sp: prog(f, K7.species, 12), genDown: genDownO, genQ: prog(f, K7.widen, 12), eco: prog(f, K7.decades, 12)}} lit={{sp: 1 - 0.8 * prog(f, K7.bottle, 10), genDown: 1, genQ: 1, eco: 1}} />
				{/* the rhino and its gene pool */}
				<Pl p={PLATES.rhino} cx={1525} cy={300} w={440} o={prog(f, 10, 14)} />
				<g opacity={prog(f, K7.eggs, 12)}>
					<rect x={POOL.x0} y={POOL.y0} width={POOL.x1 - POOL.x0} height={POOL.y1 - POOL.y0} rx={22} fill="#eef4f9" stroke="#8ba9c4" strokeWidth={3} />
					<Sx x={POOL.x0 + 22} y={POOL.y0 + 42} text="gene pool" size={32} color={GREY_INK} hand />
					<RingRow x={POOL.x0 + 60} y={poolCy} kinds={POOL0.slice(0, 2)} gap={56} r={20} />
					<RingRow x={POOL.x0 + 250} y={poolCy} kinds={POOL0.slice(2)} gap={56} r={20} o={prog(f, K7.eggs + 30, 12)} />
					<Sx x={POOL.x0 + 88} y={poolCy + 62} text="Fatu" size={30} color={GREY_INK} hand anchor="middle" />
					<Sx x={POOL.x0 + 390} y={poolCy + 62} text="a few males" size={30} color={GREY_INK} hand anchor="middle" opacity={prog(f, K7.eggs + 30, 12)} />
					{CELL_KINDS.map((k, i) => (k === 'flow' ? <Rg key={i} x={POOL.x0 + 500 + (i % 3) * 44} y={POOL.y0 + 46} r={16} k="flow" o={prog(f, K7.widen + i * 2, 10)} /> : null))}
				</g>
				<g opacity={vis(f, K7.bottle, K7.second + 40, 12)}>
					<Bottleneck x={1525} y={740} w={360} />
					<RingRow x={1500} y={850} kinds={['A', 'C']} gap={52} r={16} />
				</g>
				{/* the second route: banked skin cells from about a dozen rhinos */}
				{CELL_KINDS.map((k, i) => (
					<g key={i} opacity={routeO * prog(f, K7.skin + i * 2, 10) * (1 - 0.5 * prog(f, K7.stem + 20, 12))}>
						<Pl p={PLATES.cell} cx={140 + i * 66} cy={890} w={58} />
						<Rg x={140 + i * 66} y={945} r={12} k={k} />
					</g>
				))}
				<Sx x={140} y={1012} text="frozen skin cells from about a dozen rhinos" size={30} color={GREY_INK} hand at={K7.skin + 10} />
				<Arr a={[920, 900]} b={[1030, 900]} at={K7.stem} width={6} head={18} />
				<Sx x={975} y={872} text="stem cells" size={30} color={GREY_INK} hand anchor="middle" at={K7.stem} out={K7.es + 30} />
				<Pl p={PLATES.eggdish} cx={1110} cy={905} w={140} o={prog(f, K7.es, 12)} />
				<Sx x={1110} y={1000} text="eggs, sperm" size={30} color={GREY_INK} hand anchor="middle" at={K7.es + 6} />
				<Arr a={[1180, 870]} b={[1420, 720]} at={K7.widen} color="#3d7fb0" dash="10 8" width={6} head={18} />
				<Tg x={120} y={880} text="could preserve the subspecies and some of its genetic diversity" at={K7.sub} out={K7.bottle} size={38} />
				<Tg x={120} y={880} text="a tiny gene pool: a bottleneck from the start" at={K7.bottle + 6} out={K7.second} size={38} />
				{void K7.trace}{void K7.some}{void K7.onlyif}{void K7.gen}{void K7.eco}{void AMBER}
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
	const L = LAY.both;
	const P = PANEL2;
	const pcx = (P.x0 + P.x1) / 2;
	return (
		<>
			<Heading text="Yield isn't a level" at={4} size={60} />
			<Overlay>
				<BigBoard mode="both" />
				<BigHead x0={L.a} x1={L.cons - 10} title="crop" base={f >= K8.replaces ? 'conventional farming' : undefined} flash={flash} />
				<CropCells2 mode="both" o={{genA: 1, genB: 1, spA: 1, spB: 1, ecoA: 1}} lit={{genA: 1, genB: 1, spA: 1, spB: 1, ecoA: 1}} />
				<BigHead x0={L.cons} x1={L.x1} title="conservation" base="doing nothing" />
				<ConsCells2 mode="both" o={{sp: 1, genQ: 1, eco: 1}} lit={{sp: 1, genQ: 1, eco: 1}} glow={{eco: pulse(0), sp: pulse(1), genQ: pulse(2)}} />
				{/* yield finds no row */}
				<g opacity={yieldO}>
					<Pill x={lerp(1900, P.x0 + 20, slide)} y={500} text="more yield" size={44} lit={1} />
				</g>
				<g opacity={yieldO}><GreyCross x={P.x0 + 140} y={540} at={K8.yieldw + 34} s={44} /></g>
				<Sx x={pcx} y={660} text="not a level" size={40} color={INK} hand anchor="middle" at={K8.prod} out={K8.strong} />
				<Sx x={pcx} y={710} text="of biodiversity" size={40} color={INK} hand anchor="middle" at={K8.prod} out={K8.strong} />
				<Sx x={pcx} y={780} text="a production gain" size={34} color={GREY_INK} hand anchor="middle" at={K8.prod + 20} out={K8.strong} />
				{/* the model sentence */}
				<g opacity={modelO}>
					<MarkText x={110} y={900} size={36} at={K8.strong} parts={[{t: 'This could preserve the northern white rhino '}, {t: 'subspecies', mark: K8.sub2}, {t: ' and some of its genetic diversity.'}]} />
					<MarkText x={110} y={962} size={36} at={K8.asp - 14} parts={[{t: 'It would add '}, {t: 'a species', mark: K8.asp + 4}, {t: ' to a particular area only if white rhinos are absent from that '}, {t: 'baseline area', mark: K8.base}, {t: '.'}]} />
				</g>
				<g opacity={1 - prog(f, K8.clear, 14)}>
					<Pill x={P.x0 + 10} y={360} text="genetic: bottleneck" size={34} lit={0} o={prog(f, K8.sep, 12)} />
					<Pill x={P.x0 + 10} y={450} text="ecosystem: decades" size={34} lit={0} o={prog(f, K8.sep + 8, 12)} />
				</g>
				{/* habitat clearing: the biggest driver on land */}
				<g opacity={landO}>
					<LandBlock x={P.x0 + 10} y={330} w={440} h={170} kind="bush" clear={prog(f, K8.clear + 6, 40)} />
					<LandBlock x={P.x0 + 10} y={330} w={440} h={170} kind="farm" o={prog(f, K8.clear + 40, 16)} />
					<LandBlock x={P.x0 + 10} y={590} w={440} h={170} kind="bush" clear={prog(f, K8.whatever, 40)} o={prog(f, K8.whatever - 20, 12)} />
					<LandBlock x={P.x0 + 10} y={590} w={440} h={170} kind="farm" crop="dots" o={prog(f, K8.whatever + 34, 16)} />
					<Sx x={pcx} y={548} text="bush cleared for a crop" size={32} color={GREY_INK} hand anchor="middle" opacity={prog(f, K8.clear + 30, 12)} />
					<Sx x={pcx} y={808} text="a different crop: same loss" size={32} color={GREY_INK} hand anchor="middle" opacity={prog(f, K8.whatever + 30, 12)} />
				</g>
				<Tg x={110} y={930} text="on land: habitat clearing is the biggest driver of biodiversity loss" at={K8.clear + 10} size={40} />
				<Tg x={110} y={1000} text="so compare a modified crop with the farming it replaces" at={K8.replaces} size={36} color={GREY_INK} />
				{void K8.notice}{void K8.saving}{void K8.judge}{void K8.scale}{void K8.biggest}{void K8.compare}{void AMBER_INK}
			</Overlay>
		</>
	);
};

// ---------- 9. Memory ----------
const K9 = cues(S('memory'), {two: 'Two things', banana: 'banana problem returns', any: 'any technique', cloning: 'cloning', variety: 'one popular variety', sire: 'one top sire', narrows: 'narrows the gene pool', disease: 'one disease can hit', which: 'which level'});
const WIDE: RK[] = ['A', 'B', 'C', 'D', 'flow', 'B', 'D', 'A', 'C', 'flow'];
const NARROW: RK[] = ['A', 'C', 'A', 'C', 'A', 'C', 'A', 'C', 'A', 'C'];
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const plantO = vis(f, 4, K9.cloning, 14);
	const top = 1 - 0.55 * prog(f, K9.which, 14);
	const narrow = prog(f, K9.narrows + 6, 16);
	const hit = prog(f, K9.disease, 14);
	return (
		<>
			<Heading text="Two things to hold on to" at={4} size={60} />
			<Overlay>
				<g opacity={top}>
					<Sx x={140} y={270} text="The banana problem returns." size={72} color={INK} hand at={K9.banana} />
					{/* the banana problem: one clone, one fungus */}
					<g opacity={plantO}>
						<Pl p={PLATES.plantation} cx={960} cy={600} w={900} />
						<Sx x={960} y={880} text="one clone: TR4 can kill every plant" size={40} color={GREY_INK} hand anchor="middle" />
					</g>
					{/* any technique that copies the best individual */}
					<Pl p={PLATES.clones} cx={360} cy={470} w={500} o={prog(f, K9.cloning, 12)} />
					<Sx x={360} y={600} text="cloning" size={40} color={INK} hand anchor="middle" at={K9.cloning + 6} />
					<Cavendish cx={960} cy={440} w={270} o={prog(f, K9.variety, 12)} id="b12-mem-cav" />
					<Sx x={960} y={600} text="one popular variety" size={40} color={INK} hand anchor="middle" at={K9.variety + 6} />
					<Pl p={PLATES.bull} cx={1560} cy={460} w={360} o={prog(f, K9.sire, 12)} />
					<Sx x={1560} y={600} text="one top sire" size={40} color={INK} hand anchor="middle" at={K9.sire + 6} />
					{/* the gene pool narrows */}
					<g opacity={prog(f, K9.narrows - 6, 12)}>
						{WIDE.map((k, i) => <Rg key={i} x={560 + i * 82} y={700} r={24} k={narrow > 0.5 ? NARROW[i] : k} glow={hit} />)}
						<Sx x={960} y={780} text={narrow > 0.5 ? 'copies narrow the gene pool' : 'a varied gene pool'} size={40} color={AMBER_INK} hand anchor="middle" />
					</g>
					<g opacity={hit}>
						<rect x={520} y={660} width={880} height={80} rx={40} fill="none" stroke="#b5483a" strokeWidth={5} />
					</g>
					<Sx x={960} y={840} text="one disease can hit them all at once" size={38} color="#b5483a" hand anchor="middle" at={K9.disease + 10} />
				</g>
				<Sx x={960} y={930} text="Which level? Compared with what?" size={64} color={INK} hand anchor="middle" at={K9.which} />
				<g opacity={prog(f, K9.which + 14, 12)}>
					{['genetic', 'species', 'ecosystem'].map((t, i) => (
						<g key={t}>
							<rect x={380 + i * 260} y={968} width={230} height={58} rx={29} fill="#fff6e3" stroke={AMBER} strokeWidth={3} />
							<Sx x={495 + i * 260} y={1008} text={t} size={34} color={INK} weight={800} anchor="middle" />
						</g>
					))}
					<rect x={1180} y={968} width={360} height={58} rx={29} fill={CARD} stroke={GREYT} strokeWidth={2.5} strokeDasharray="8 6" />
					<Sx x={1360} y={1008} text="compared with: ..." size={32} color={GREY_INK} hand anchor="middle" />
				</g>
				{void K9.two}{void K9.any}
			</Overlay>
		</>
	);
};
