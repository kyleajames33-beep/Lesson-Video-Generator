// M6 B16 scenes 5 to 9: reliability (277 fused cells narrow to 29 embryos and one lamb; the egg resets the udder
// nucleus's gene switches only partly; losses and large offspring); health and the verdict by purpose (Dolly's
// illnesses do not show early ageing, four later clones aged healthily, too unreliable for everyday breeding, worth it
// for one rare animal: the black-footed ferret); gene cloning (gene into a plasmid vector, taken up by a host, copied
// at every division into billions; PCR doubles a gene each cycle); judging gene cloning; the test and memory.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {ScribbleRing, Tg, TickG} from '../bio-m6-b07/parts';
import {S} from './common';
import {PT} from './assets';
import {Meter2, MiniBoard2} from './parts2';
import {
	AMBER, AMBER_INK, Bact, COLS, ClockRing, ColFrame, ColHead, Colonies, DivTree, DrawPath, Embryos, Enzyme, FrozenVial, GREYT, GREY_INK, GeneSeg, GeneStack, INK,
	EDGE, INK_SOFT, MagStrip, Meter, MiniBoard, PLATES, PLUM, PlasmidRing, Pill, Pl, RED_BROWN, RingCluster, Spool, Switch, Sx, TEAL, Thermo, Tube, clamp01, lerp,
	platePt, prog, smooth, vis,
} from './parts';
import type {RK} from '../bio-m6-b08/parts';

const pp = platePt;
const METER_L = ['reliability', 'identical', 'health'];

// ---------- 5. Reliability ----------
// Quality fix (6 Nov 2026): the attempt grid fills the left of the frame (44 px pitch) with large counters (277, 29, 1)
// and painted embryo and lamb plates at the right; then a large nucleus with its gene switches, and the consequences
// as plates (lost embryos, one unusually large lamb) with 34 to 40 px labels.
const K5 = cues(S('reliability'), {fused: 'fused 277', only: 'Only 29', one: 'just one became', why: 'Why so few', histones: 'like the ones on histones', switched: 'switched many of', reset: 'reset those switches', partly: 'only partly', die: 'die before or soon', large: 'unusually large', rates: 'Rates have improved', fail: 'most attempts still fail'});
const KEPT = Array.from({length: 277}, (_, i) => i).filter(i => i % 9 === 4).slice(0, 29);
const NUC = {x: 600, y: 650, r: 300};
const RK5 = NUC.r / 240;
const RODS: [number, number, number][] = [[-140, -100, 20], [-20, -160, -15], [100, -90, 35], [-160, 30, -25], [-10, 10, 10], [130, 60, -40], [-60, 140, 15]];
const STUCK = [2, 7, 11];
const ON0 = [5, 9, 12];
const Counter: React.FC<{x: number; y: number; n: string; label: string; o: number; color?: string}> = ({x, y, n, label, o, color = INK}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<Sx x={x} y={y} text={n} size={110} color={color} weight={800} />
		<Sx x={x + n.length * 64 + 24} y={y - 14} text={label} size={38} color={INK} hand />
	</g>
));
export const SceneReliability: React.FC = () => {
	const f = useCurrentFrame();
	const fun = 1 - prog(f, K5.why, 14);
	const grey = prog(f, K5.only, 14);
	const toRow = smooth(prog(f, K5.only + 16, 30));
	const lone = prog(f, K5.one, 12);
	const rel = lerp(0, 0.06, prog(f, K5.one + 10, 20)) + lerp(0, 0.08, prog(f, K5.fail, 30));
	const nucO = prog(f, K5.why + 6, 16);
	const k = NUC.r / 280;
	const cw = 1459 * k;
	const ccx = NUC.x - (1040 - 1008.5) * k, ccy = NUC.y - (1025 - 982.5) * k;
	const sw = (i: number) => {
		const [dx, dy, a] = RODS[Math.floor(i / 2)];
		const t = i % 2 ? 0.7 : 0.3;
		const ang = (a * Math.PI) / 180;
		return [NUC.x + dx * RK5 + Math.cos(ang) * (t - 0.5) * 200, NUC.y + dy * RK5 + Math.sin(ang) * (t - 0.5) * 200] as [number, number];
	};
	const onOf = (i: number) => {
		if (ON0.includes(i)) return 1;
		if (STUCK.includes(i)) return 0;
		return prog(f, K5.reset + 6 + i * 4, 8);
	};
	const stuckDim = prog(f, K5.die, 12);
	return (
		<>
			<Heading text="Does it work? Reliability" at={4} size={60} />
			<Overlay>
				<MiniBoard2 active="L" bay={2} o={prog(f, 0, 14)} />
				<Meter2 x={1260} y={180} labels={METER_L} fills={[rel, 0, 0]} colors={[RED_BROWN, AMBER, AMBER]} o={prog(f, 4, 14)} w={300} size={28} gap={46} />
				{/* the attempt funnel: 277 fused cells, 29 embryos, one lamb */}
				<g opacity={fun}>
					{Array.from({length: 277}, (_, i) => {
						const kj = KEPT.indexOf(i);
						const x0 = 140 + (i % 23) * 44, y0 = 340 + Math.floor(i / 23) * 44;
						const a = prog(f, K5.fused + 4 + (i % 23) * 1.2, 8);
						if (a <= 0.01) return null;
						if (kj < 0) return <circle key={i} cx={x0} cy={y0} r={15} fill={grey > 0.5 ? '#d6d8da' : '#f6e3dc'} stroke={grey > 0.5 ? GREYT : '#b9786a'} strokeWidth={2} opacity={a * (1 - 0.35 * grey)} />;
						const x1 = 150 + kj * 36, y1 = 960;
						const isOne = kj === 14;
						const g = isOne ? 0 : lone;
						return (
							<g key={i} opacity={a * (isOne ? 1 - prog(f, K5.one + 16, 10) : 1 - 0.55 * g)}>
								<circle cx={lerp(x0, x1, toRow)} cy={lerp(y0, y1, toRow)} r={15} fill={g > 0.5 ? '#d6d8da' : '#f7e6dc'} stroke={g > 0.5 ? GREYT : '#b9786a'} strokeWidth={2.5} />
								<circle cx={lerp(x0, x1, toRow)} cy={lerp(y0, y1, toRow)} r={5} fill={g > 0.5 ? GREYT : PLUM} opacity={0.8} />
							</g>
						);
					})}
					<Counter x={1260} y={460} n="277" label="fused cells" o={prog(f, K5.fused + 10, 12) * (1 - 0.5 * grey)} />
					<Counter x={1260} y={660} n="29" label="embryos transferred" o={prog(f, K5.only + 30, 12) * (1 - 0.5 * lone)} />
					<Counter x={1260} y={870} n="1" label="live lamb" o={prog(f, K5.one + 22, 12)} color={RED_BROWN} />
					<Pl p={PLATES.lamb} cx={1640} cy={850} w={230} o={prog(f, K5.one + 16, 12)} />
				</g>
				<Pill x={1260} y={980} text="reliability: low" size={36} o={vis(f, K5.one + 30, K5.reset, 12)} />
				{/* why: the egg has to reset the udder nucleus's gene switches */}
				<g opacity={nucO}>
					<defs><clipPath id="b16-s5-nuc"><circle cx={NUC.x} cy={NUC.y} r={NUC.r} /></clipPath></defs>
					<g clipPath="url(#b16-s5-nuc)"><Pl p={PLATES.cell} cx={ccx} cy={ccy} w={cw} /></g>
					{RODS.map(([dx, dy, a], i) => {
						const ang = (a * Math.PI) / 180;
						const x = NUC.x + dx * RK5, y = NUC.y + dy * RK5;
						return <path key={i} d={`M${x - Math.cos(ang) * 100},${y - Math.sin(ang) * 100} Q${x + 12},${y - 18} ${x + Math.cos(ang) * 100},${y + Math.sin(ang) * 100}`} fill="none" stroke={PLUM} strokeWidth={11} strokeLinecap="round" opacity={0.85} />;
					})}
					{Array.from({length: 14}, (_, i) => {
						const [x, y] = sw(i);
						return <Switch key={i} x={x} y={y - 2} on={onOf(i)} o={prog(f, K5.switched + 4 + i * 2, 8)} stuck={STUCK.includes(i) ? stuckDim : 0} s={1.4} />;
					})}
					<Sx x={NUC.x} y={NUC.y - NUC.r - 20} text="udder cell nucleus" size={34} color={GREY_INK} hand anchor="middle" />
				</g>
				{STUCK.map((i, j) => {
					const [x, y] = sw(i);
					return <ScribbleRing key={i} cx={x} cy={y} rx={42} ry={32} at={K5.partly + j * 6} out={K5.die} seed={2 + j} color={GREYT} />;
				})}
				<Spool x={1300} y={560} s={1.1} o={vis(f, K5.histones, K5.switched + 10, 10)} />
				<Sx x={1300} y={680} text="tags on histones" size={32} color={GREY_INK} hand anchor="middle" opacity={vis(f, K5.histones, K5.switched + 10, 10)} />
				<Tg x={1000} y={420} text="tags switch many genes off" at={K5.switched + 10} out={K5.reset} size={40} />
				<Tg x={1000} y={420} text="the egg must reset the switches" at={K5.reset} out={K5.partly} size={40} />
				<Tg x={1000} y={420} text="resetting is often incomplete" at={K5.partly + 10} out={K5.die} size={40} />
				{/* consequences: losses and unusually large lambs */}
				<Tg x={1000} y={420} text="pregnancy losses, deaths at birth" at={K5.die + 10} out={K5.rates} size={40} />
				{[0, 1, 2, 3, 4].map(i => {
					const lost = [1, 3, 4].includes(i);
					const d = lost ? prog(f, K5.die + 24 + i * 3, 16) : 0;
					return <Pl key={i} p={PLATES.cl5} cx={1060 + i * 120} cy={560} w={100} o={prog(f, K5.die + 4 + i * 3, 12) * (1 - 0.6 * d)} dim={d} />;
				})}
				{[0, 1, 2].map(i => <Pl key={i} p={PLATES.lamb} cx={1080 + i * 170} cy={800} w={140} o={prog(f, K5.large + i * 4, 10)} />)}
				<Pl p={PLATES.lamb} cx={1650} cy={770} w={250} o={prog(f, K5.large + 12, 10)} />
				<Sx x={1650} y={920} text="unusually large" size={34} color={INK} hand anchor="middle" at={K5.large + 16} />
				<Sx x={1650} y={962} text="(large offspring syndrome)" size={28} color={GREY_INK} hand anchor="middle" at={K5.large + 20} />
				<Tg x={140} y={1030} text="rates have improved, but most attempts still fail" at={K5.rates + 10} size={40} />
				{void AMBER_INK}{void INK_SOFT}
			</Overlay>
		</>
	);
};

// ---------- 6. Health, and effective for what? ----------
// Quality fix (6 Nov 2026): Dolly and the four later clones large; the verdict as two big side-by-side panels (a herd of
// dairy cows for everyday breeding, crossed; the ferret for one rare animal, ticked); then the ferret story across the
// frame (frozen cells, clones, young, the breeding population's new alleles).
const K6 = cues(S('health-and-purpose'), {arth: 'developed arthritis', lung: 'lung disease', alone: 'That alone', four: 'four later clones', healthy: 'healthy for their age', depends: 'depends on the purpose', unrel: 'too unreliable', worth: 'worth it to copy', rare: 'rare animal', ferret: 'black-footed ferret', frozen: 'frozen in 1988', given: 'have given clones', babies: 'had babies', passing: 'passing on alleles'});
const POOL: RK[] = ['A', 'B', 'C', 'D', 'A', 'C', 'B', 'D', 'A', 'B'];
export const SceneHealth: React.FC = () => {
	const f = useCurrentFrame();
	const leftO = 1 - prog(f, K6.depends, 14);
	const health = lerp(0, 0.5, prog(f, K6.healthy + 10, 24));
	const kitT = smooth(prog(f, K6.babies + 6, 30));
	const panelsO = prog(f, K6.depends, 14) * (1 - prog(f, K6.ferret + 10, 14));
	const storyO = prog(f, K6.ferret + 10, 14);
	return (
		<>
			<Heading text="Health, and effective for what?" at={4} size={60} />
			<Overlay>
				<MiniBoard2 active="L" bay={2} o={prog(f, 0, 14)} />
				<Meter2 x={1260} y={180} labels={METER_L} fills={[0.14, 0.7, health]} colors={[RED_BROWN, AMBER, AMBER]} o={prog(f, 4, 14)} w={300} size={28} gap={46} />
				<g opacity={leftO}>
					<Pl p={PLATES.lamb} cx={330} cy={500} w={400} o={prog(f, 0, 14)} />
					<Sx x={330} y={290} text="Dolly" size={44} color={INK} hand anchor="middle" />
					<GTag x={600} y={380} text="arthritis" at={K6.arth + 6} out={K6.four} size={32} />
					<GTag x={600} y={450} text="lung disease: a virus, also in other sheep" at={K6.lung} out={K6.four} size={32} />
					<MistakeChip x={600} y={540} text="Dolly = early ageing?" at={K6.alone} cross={K6.alone + 20} size={36} />
					{[0, 1, 2, 3].map(i => <Pl key={i} p={PLATES.lamb} cx={720 + i * 190} cy={780} w={170} o={prog(f, K6.four + 10 + i * 6, 10)} />)}
					<Sx x={1005} y={900} text="four later clones from the same cells:" size={36} color={INK} hand anchor="middle" at={K6.four + 10} />
					<Sx x={1005} y={950} text="healthy for their age at 7 to 9" size={36} color={INK} hand anchor="middle" at={K6.healthy} />
				</g>
				<Pill x={1260} y={360} text="health: mixed, not doomed" size={34} o={vis(f, K6.healthy + 20, K6.depends, 12)} />
				{/* the verdict by purpose: two big panels */}
				<g opacity={panelsO}>
					<rect x={110} y={330} width={820} height={680} rx={24} fill="#fffdf8" stroke={EDGE} strokeWidth={3} />
					<Sx x={520} y={400} text="everyday breeding" size={46} color={INK} weight={800} anchor="middle" />
					{[0, 1, 2].map(i => <Pl key={i} p={PLATES.cow} cx={290 + i * 230} cy={560 + (i % 2) * 70} w={260} o={prog(f, K6.unrel - 30 + i * 6, 12)} />)}
					<Pill x={520} y={850} text="too unreliable" size={42} mark="cross" anchor="middle" o={prog(f, K6.unrel, 12)} />
					<rect x={990} y={330} width={820} height={680} rx={24} fill="#fffdf8" stroke={prog(f, K6.worth, 12) > 0.5 ? AMBER : EDGE} strokeWidth={prog(f, K6.worth, 12) > 0.5 ? 4 : 3} />
					<Sx x={1400} y={400} text="copying one rare animal" size={46} color={INK} weight={800} anchor="middle" />
					<Pl p={PLATES.ferret} cx={1400} cy={600} w={560} o={prog(f, K6.worth - 10, 14)} />
					<Pill x={1400} y={850} text="can be worth it" size={42} mark="tick" anchor="middle" o={prog(f, K6.worth, 12)} />
				</g>
				{/* the black-footed ferret story */}
				<g opacity={storyO}>
					<Sx x={140} y={330} text="black-footed ferret" size={46} color={INK} weight={800} />
					<FrozenVial x={240} y={620} o={prog(f, K6.frozen, 12)} s={1.2} />
					<Sx x={240} y={800} text="cells frozen 1988" size={34} color={INK} hand anchor="middle" opacity={prog(f, K6.frozen + 8, 12)} />
					{[0, 1, 2].map(i => <Pl key={i} p={PLATES.ferret} cx={560 + i * 230} cy={620} w={220} o={prog(f, K6.given + 6 + i * 8, 10)} />)}
					<Sx x={790} y={760} text="clones (from 2020)" size={34} color={INK} hand anchor="middle" opacity={prog(f, K6.given + 16, 12)} />
					{[0, 1].map(i => <Pl key={i} p={PLATES.ferret} cx={lerp(1020, 900 + i * 150, kitT)} cy={lerp(620, 870, kitT)} w={120} o={kitT > 0.01 ? prog(f, K6.babies + 6, 8) : 0} />)}
					<Sx x={975} y={980} text="2024: a clone has young" size={34} color={INK} hand anchor="middle" opacity={prog(f, K6.babies + 14, 12)} />
					<RingCluster x={1500} y={620} kinds={[...POOL, 'new', 'flow']} cols={4} gap={64} r={20} o={prog(f, K6.passing - 20, 14)} ringO={i => (i < 10 ? 1 : prog(f, K6.passing + 6 + (i - 10) * 10, 12))} />
					<Sx x={1500} y={490} text="breeding population" size={34} color={GREY_INK} hand anchor="middle" opacity={prog(f, K6.passing - 20, 14)} />
					<Pill x={1270} y={900} text="new alleles passed on" size={36} o={prog(f, K6.passing + 24, 12)} />
				</g>
				{void INK}{void K6.rare}
			</Overlay>
		</>
	);
};

// ---------- 7. Gene cloning ----------
// Quality fix (6 Nov 2026): a large gene slides into a large plasmid ring beside the painted bacterium-with-plasmid
// plate; the uptake plates large; the division tree spans the frame; PCR is drawn large on its own (tube, thermometer,
// a big double strand separating and copying, then 2, 4, 8 copies).
const K7 = cues(S('gene-cloning'), {narrower: 'narrower aim', onegene: 'copies of one gene', plasmid: 'into a plasmid', ring: 'small ring of DNA', vector: 'is a vector', host: 'is the host', divides: 'Each time the host divides', newcells: 'the new cells get', half: 'every half hour', billions: 'one cell becomes billions', nocells: 'with no cells', pcr: 'called PCR', heat: 'Heat separates', enzyme: 'an enzyme copies each one', cycle: 'every cycle doubles'});
/** The PCR strip: one double strand at (x, y); `sep` 0..1 splits its strands; `copy` 0..1 grows a new partner on each. */
const PcrStrip: React.FC<{x: number; y: number; sep: number; copy: number; n?: number; pitch?: number; o?: number; enzX?: number}> = ({x, y, sep, copy, n = 10, pitch = 30, o = 1, enzX}) => {
	if (o <= 0.01) return null;
	const gap = 28, d = 46 * smooth(sep);
	const L = n * pitch;
	const top = y - d, bot = y + gap + d;
	const xc = x + L * clamp01(copy);
	const half = (yy: number, dir: 1 | -1, col: string, until = x + L, key = '') => Array.from({length: n}, (_, i) => {
		const rx = x + i * pitch + pitch / 2;
		return rx <= until ? <line key={key + i} x1={rx} y1={yy} x2={rx} y2={yy + dir * (gap / 2 - 2)} stroke={col} strokeWidth={4} strokeLinecap="round" /> : null;
	});
	return (
		<g opacity={o}>
			<line x1={x} y1={top} x2={x + L} y2={top} stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" />
			{half(top, 1, AMBER, x + L, 't')}
			<line x1={x} y1={bot} x2={x + L} y2={bot} stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" />
			{half(bot, -1, AMBER, x + L, 'b')}
			{copy > 0.01 ? (
				<>
					<line x1={x} y1={top + gap} x2={xc} y2={top + gap} stroke={TEAL} strokeWidth={4} strokeLinecap="round" />
					{half(top + gap, -1, '#7fb7bb', xc, 'tc')}
					<line x1={x} y1={bot - gap} x2={xc} y2={bot - gap} stroke={TEAL} strokeWidth={4} strokeLinecap="round" />
					{half(bot - gap, 1, '#7fb7bb', xc, 'bc')}
				</>
			) : null}
			{enzX !== undefined ? (
				<>
					<Enzyme x={enzX} y={top + gap + 6} s={0.55} />
					<Enzyme x={enzX} y={bot - gap - 6} s={0.55} />
				</>
			) : null}
		</g>
	);
};
export const SceneGene: React.FC = () => {
	const f = useCurrentFrame();
	const slide = smooth(prog(f, K7.plasmid + 10, 30));
	const close = prog(f, K7.plasmid + 40, 14);
	const ring = {cx: 470, cy: 560, r: 170};
	const partA = 1 - prog(f, K7.divides, 14);
	const bactO = vis(f, K7.ring - 6, K7.host - 8, 14);
	const host = {cx: 1300, cy: 560, w: 860};
	const hostO = prog(f, K7.host - 8, 14) * partA;
	const upR = pp(PLATES.upEnd, host.cx, host.cy, host.w, PT.upRing[0], PT.upRing[1]);
	const kU = host.w / 1599;
	// division tree: one level per 30 frames, then faster to five levels
	const tLevel = f < K7.half ? prog(f, K7.divides + 10, 90, x => x) * 3 : 3 + prog(f, K7.half + 6, 50, x => x) * 2;
	const partB = prog(f, K7.divides + 4, 12) * (1 - prog(f, K7.nocells, 14));
	const dish = {cx: 1640, cy: 700, w: 380};
	const dishO = prog(f, K7.billions - 10, 14) * (1 - prog(f, K7.nocells, 14));
	const clockT = f < K7.half ? 0 : ((f - K7.half) % 30) / 30;
	const partC = prog(f, K7.nocells + 6, 14);
	const heat = vis(f, K7.heat, K7.enzyme, 8);
	const sep = prog(f, K7.heat + 6, 20);
	const copy = prog(f, K7.enzyme + 6, 40, x => x);
	const cycles = f < K7.cycle ? 0 : f < K7.cycle + 18 ? 1 : 2;
	const S7 = 1.9, pcrX = 700, pcrY = 520;
	return (
		<>
			<Heading text="Gene cloning" at={4} size={60} />
			<Overlay>
				<MiniBoard2 active="R" bay={0} what={f >= K7.cycle + 20 ? 'what: one gene, many copies' : undefined} o={prog(f, 0, 14)} />
				{/* one gene into a plasmid */}
				<g opacity={partA}>
					<g opacity={1 - close} transform={`translate(${lerp(0, ring.cx - 110 - 160, slide)},${lerp(0, ring.cy - ring.r - 22 - 380, slide)})`}>
						<GeneSeg x={160} y={380} n={6} pitch={36} gap={30} lineW={5} draw={prog(f, K7.onegene + 6, 20)} o={prog(f, K7.onegene + 6, 8)} />
					</g>
					<Sx x={268} y={340} text="one gene" size={38} color={AMBER_INK} hand anchor="middle" at={K7.onegene + 10} out={K7.plasmid + 10} />
					<PlasmidRing cx={ring.cx} cy={ring.cy} r={ring.r} gap={1 - close} insert={close} o={prog(f, K7.plasmid, 12)} sw={12} />
					<Sx x={ring.cx} y={ring.cy + 12} text="plasmid" size={40} color={TEAL} hand anchor="middle" at={K7.plasmid + 6} />
					<Tg x={ring.cx} y={830} text="a small ring of DNA" at={K7.ring} out={K7.vector} size={40} anchor="middle" />
					<Tg x={ring.cx} y={830} text="vector: a carrier of DNA into a cell" at={K7.vector} out={K7.host} size={40} anchor="middle" />
					<Tg x={ring.cx} y={830} text="host: the cell that takes it up" at={K7.host} size={40} anchor="middle" />
				</g>
				<g opacity={bactO}>
					<Pl p={PLATES.bactP} cx={1320} cy={560} w={820} />
					<Sx x={1320} y={850} text="bacteria carry plasmids" size={38} color={INK} hand anchor="middle" />
				</g>
				{/* the host takes it up */}
				<g opacity={hostO}>
					<Pl p={PLATES.upStart} cx={host.cx} cy={host.cy} w={host.w} o={1 - prog(f, K7.host + 16, 16)} />
					<Pl p={PLATES.upEnd} cx={host.cx} cy={host.cy} w={host.w} o={prog(f, K7.host + 16, 16)} />
					<path d={`M${upR[0] - 60 * kU},${upR[1] - 24 * kU} A${65 * kU},${65 * kU} 0 0 1 ${upR[0] + 30 * kU},${upR[1] - 58 * kU}`} fill="none" stroke={AMBER} strokeWidth={8} strokeLinecap="round" opacity={prog(f, K7.host + 30, 10)} />
					<Sx x={host.cx} y={900} text="host bacterium takes up the plasmid" size={36} color={INK} hand anchor="middle" opacity={prog(f, K7.host + 20, 12)} />
				</g>
				{/* each division copies the plasmid */}
				<g opacity={partB}>
					<DivTree x0={190} y={640} h={620} dx={240} t={tLevel} levels={5} w0={210} />
					<ClockRing x={1640} y={360} r={50} t={clockT} o={vis(f, K7.half, K7.nocells, 10)} />
					<Sx x={1640} y={455} text="about every half hour" size={32} color={INK} hand anchor="middle" opacity={vis(f, K7.half, K7.nocells, 10)} />
				</g>
				<Tg x={150} y={1030} text="each division copies the plasmid: every new cell gets the gene" at={K7.newcells} out={K7.billions} size={38} />
				<Pl p={PLATES.dish} cx={dish.cx} cy={dish.cy} w={dish.w} o={dishO} />
				<Colonies cx={dish.cx} cy={dish.cy} R={(700 * dish.w) / 1599} n={70} t={prog(f, K7.billions, 60, x => x)} o={dishO} r={8} />
				<Tg x={dish.cx} y={960} text="by the next day: billions" at={K7.billions + 16} out={K7.nocells} size={38} anchor="middle" />
				{/* PCR: a gene copied with no cells */}
				<g opacity={partC}>
					<Tube x={260} y={560} s={2.2} />
					<Thermo x={470} y={620} hot={heat} s={2.2} />
					<Sx x={150} y={330} text="PCR: a gene copied in a tube, no cells" size={42} color={INK} weight={800} opacity={prog(f, K7.pcr, 12)} />
				</g>
				<g transform={`translate(${pcrX},${pcrY}) scale(${S7})`}>
					<PcrStrip x={0} y={0} sep={sep} copy={copy} n={11} pitch={30} o={partC * (1 - prog(f, K7.cycle, 12))} enzX={f >= K7.enzyme + 4 && copy < 1 ? copy * 330 : undefined} />
				</g>
				<Tg x={pcrX} y={820} text="heat: the two strands separate" at={K7.heat + 6} out={K7.enzyme} size={40} />
				<Tg x={pcrX} y={820} text="cooler: an enzyme copies each strand" at={K7.enzyme + 6} out={K7.cycle} size={40} />
				{cycles > 0 ? Array.from({length: cycles === 1 ? 4 : 8}, (_, i) => (
					<g key={i} opacity={prog(f, K7.cycle + (i < 4 ? 0 : 18) + (i % 4) * 2, 8)}>
						<GeneSeg x={720 + (i % 2) * 520} y={420 + Math.floor(i / 2) * 110} n={9} pitch={40} gap={30} lineW={5} />
					</g>
				)) : null}
				<Sx x={720} y={930} text={cycles === 2 ? 'every cycle doubles: 2, 4, 8 ...' : cycles === 1 ? 'every cycle doubles: 2, 4 ...' : ''} size={44} color={AMBER_INK} hand opacity={cycles > 0 ? 1 : 0} />
				{void INK_SOFT}{void COLS}{void K7.narrower}
			</Overlay>
		</>
	);
};

// ---------- 8. Judging gene cloning ----------
// Quality fix (6 Nov 2026): readable meters (Meter2), larger bacteria, and the check and uses row enlarged with 30 to
// 36 px labels.
const K8 = cues(S('judging-gene-cloning'), {how: 'how effective', few: 'Only a few bacteria', one: 'need just one', check: 'easy to check', study: 'study a gene', protein: 'make its protein', organism: 'into another organism', limits: 'Its limits are small'});
const HOSTS = [6, 13];
export const SceneJudgeGene: React.FC = () => {
	const f = useCurrentFrame();
	const fills = [lerp(0, 0.85, prog(f, K8.one + 20, 24)), lerp(0, 0.9, prog(f, K8.check + 20, 24)), lerp(0, 0.9, prog(f, K8.organism + 10, 24))];
	const pos = (i: number): [number, number] => [190 + (i % 5) * 150, 320 + Math.floor(i / 5) * 100];
	const pick = pos(6);
	const pulse = vis(f, K8.one, K8.one + 50, 8) * (0.5 + 0.5 * Math.sin((f - K8.one) / 4));
	return (
		<>
			<Heading text="Judging gene cloning" at={4} size={60} />
			<Overlay>
				<MiniBoard2 active="R" bay={2} o={prog(f, 0, 14)} />
				<Meter2 x={1150} y={190} labels={['reliable enough', 'identical copies', 'useful']} fills={fills} colors={[TEAL, TEAL, TEAL]} o={prog(f, K8.how, 14)} w={330} size={30} gap={52} />
				{Array.from({length: 20}, (_, i) => {
					const [x, y] = pos(i);
					const isHost = HOSTS.includes(i);
					return <Bact key={i} cx={x} cy={y} w={120} ring={isHost ? 'new' : undefined} ringO={isHost ? prog(f, K8.few + 24 + HOSTS.indexOf(i) * 8, 10) : 0} grey={isHost ? 0 : 0.6 * prog(f, K8.one, 12)} glow={i === 6 ? pulse : 0} o={prog(f, K8.few + (i % 5) * 2, 10)} />;
				})}
				<Sx x={500} y={735} text="only a few take up the plasmid" size={32} color={INK} hand anchor="middle" at={K8.few + 30} />
				<line x1={pick[0] + 60} y1={pick[1]} x2={930} y2={600} stroke={GREYT} strokeWidth={2.5} strokeDasharray="5 5" opacity={prog(f, K8.one + 10, 10)} />
				<DivTree x0={980} y={600} h={300} dx={130} t={prog(f, K8.one + 14, 60, x => x) * 3} levels={3} w0={90} o={prog(f, K8.one + 10, 10) * (1 - prog(f, K8.check, 12))} />
				<Pill x={1150} y={380} text="one host is enough" size={36} o={vis(f, K8.one + 20, K8.organism, 12)} />
				{/* easy to check: read the sequence */}
				<Pl p={PLATES.dish} cx={230} cy={890} w={240} o={prog(f, K8.check, 12)} />
				<Colonies cx={230} cy={890} R={100} n={14} t={1} o={prog(f, K8.check, 12)} r={7} />
				<g opacity={prog(f, K8.check + 10, 12)}>
					{Array.from({length: 10}, (_, i) => <rect key={i} x={380 + i * 32} y={860} width={26} height={56} rx={6} fill={['#f3e9c6', '#efe0b0', '#f6efd8', '#e9dcae'][i % 4]} stroke="#c8b98a" strokeWidth={1.5} />)}
				</g>
				<TickG x={740} y={888} at={K8.check + 24} s={44} />
				<Sx x={380} y={960} text="read the sequence to check it" size={32} color={INK} hand at={K8.check + 20} />
				{/* uses */}
				<g transform="translate(1000,880) scale(1.4) translate(-1000,-880)"><MagStrip x={1000} y={880} o={prog(f, K8.study, 12)} /></g>
				<Sx x={1000} y={1000} text="study" size={32} color={INK} hand anchor="middle" at={K8.study + 6} />
				<Pl p={PLATES.vial} cx={1300} cy={860} w={100} o={prog(f, K8.protein, 12)} />
				<Sx x={1300} y={1000} text="protein" size={32} color={INK} hand anchor="middle" at={K8.protein + 6} />
				<Pl p={PLATES.cotton} cx={1580} cy={850} w={190} o={prog(f, K8.organism, 12)} />
				<Sx x={1580} y={1000} text="another organism" size={32} color={INK} hand anchor="middle" at={K8.organism + 6} />
				<Pill x={1150} y={380} text="uses: study, protein, modification" size={34} o={prog(f, K8.organism + 10, 12)} />
				<GTag x={980} y={480} text="limit: the gene doesn't always go in, so check colonies" at={K8.limits} size={28} />
				{void INK}{void AMBER_INK}
			</Overlay>
		</>
	);
};

// ---------- 9. The test, and memory ----------
const K9 = cues(S('memory'), {exists: 'what exists at the end', neworg: 'A new organism', many: 'Many copies of one', two: 'Two things to hold', clone: 'The clone matches', gene: 'gene cloning copies a', organism: 'organism cloning copies'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const boardO = 1 - prog(f, K9.two, 16);
	const qO = vis(f, K9.exists, K9.two, 12);
	const pL = vis(f, K9.neworg, K9.many, 8) * (0.5 + 0.5 * Math.sin((f - K9.neworg) / 4));
	const pR = vis(f, K9.many, K9.two, 8) * (0.5 + 0.5 * Math.sin((f - K9.many) / 4));
	const lamb = {cx: 520, cy: 680, w: 300};
	const dish = {cx: 1400, cy: 680, w: 300};
	const sheep = {cx: 1420, cy: 420, w: 190}, lambT = {cx: 1700, cy: 440, w: 140};
	const sF = pp(PLATES.sheep, sheep.cx, sheep.cy, sheep.w, PT.sheepFace[0], PT.sheepFace[1]);
	const lF = pp(PLATES.lamb, lambT.cx, lambT.cy, lambT.w, PT.lambFace[0], PT.lambFace[1]);
	const metersO = prog(f, K9.organism + 40, 14);
	return (
		<>
			<Heading text="What is being copied?" at={4} size={60} />
			<Overlay>
				<g opacity={boardO}>
					{(['L', 'R'] as const).map(s => (
						<g key={s}>
							<ColFrame side={s} y0={320} y1={1000} />
							<ColHead side={s} x={COLS[s].x0 + 24} y={390} pw={s === 'L' ? 100 : 120} size={34} lit={0.4} />
						</g>
					))}
					<Pl p={PLATES.lamb} cx={lamb.cx} cy={lamb.cy} w={lamb.w} glow={pL} />
					<Pl p={PLATES.dish} cx={dish.cx} cy={dish.cy} w={dish.w} glow={pR} />
					<Colonies cx={dish.cx} cy={dish.cy} R={(700 * dish.w) / 1599} n={60} t={1} />
					<Tg x={lamb.cx} y={900} text="an organism" at={K9.neworg + 6} out={K9.two} size={40} anchor="middle" />
					<Tg x={dish.cx} y={900} text="many copies of one gene" at={K9.many + 6} out={K9.two} size={40} anchor="middle" />
				</g>
				<Sx x={960} y={262} text="What exists at the end?" size={54} color={INK} weight={800} anchor="middle" opacity={qO} />
				{/* the two aids */}
				<Sx x={130} y={450} text="The clone matches the nucleus donor." size={56} color={INK} hand at={K9.clone} />
				<g opacity={prog(f, K9.clone + 10, 14)}>
					<Pl p={PLATES.sheep} cx={sheep.cx} cy={sheep.cy} w={sheep.w} />
					<Pl p={PLATES.lamb} cx={lambT.cx} cy={lambT.cy} w={lambT.w} />
				</g>
				{f >= K9.clone + 20 ? <DrawPath d={`M${sF[0] + 10},${sF[1] + 10} Q${(sF[0] + lF[0]) / 2},${sF[1] - 40} ${lF[0] - 16},${lF[1]}`} at={K9.clone + 20} dur={16} color={AMBER} width={7} /> : null}
				<Sx x={130} y={650} text="Gene cloning copies a gene;" size={56} color={AMBER_INK} hand at={K9.gene} />
				<Sx x={130} y={730} text="organism cloning copies an individual." size={56} color={AMBER_INK} hand at={K9.organism} />
				<GeneStack x={1340} y={610} n={3} o={prog(f, K9.gene + 10, 14)} dy={32} />
				<Pl p={PLATES.lamb} cx={1700} cy={680} w={140} o={prog(f, K9.organism + 10, 14)} />
				{/* both meters return, silent */}
				<g opacity={metersO}>
					<Pl p={PLATES.lamb} cx={190} cy={910} w={120} />
					<Meter2 x={270} y={830} labels={METER_L} fills={[0.14, 0.7, 0.5]} colors={[RED_BROWN, AMBER, AMBER]} w={300} size={28} gap={46} />
					<Pl p={PLATES.bactP} cx={1060} cy={910} w={150} />
					<Meter2 x={1150} y={830} labels={['reliable enough', 'identical copies', 'useful']} fills={[0.85, 0.9, 0.9]} colors={[TEAL, TEAL, TEAL]} w={300} size={28} gap={46} />
				</g>
				{void GREY_INK}{void INK_SOFT}{void PLUM}
			</Overlay>
		</>
	);
};
