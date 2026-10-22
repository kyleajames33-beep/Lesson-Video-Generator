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
import {
	AMBER, AMBER_INK, Bact, COLS, ClockRing, ColFrame, ColHead, Colonies, DivTree, DrawPath, Embryos, Enzyme, FrozenVial, GREYT, GREY_INK, GeneSeg, GeneStack, INK,
	INK_SOFT, MagStrip, Meter, MiniBoard, PLATES, PLUM, PlasmidRing, Pill, Pl, RED_BROWN, RingCluster, Spool, Switch, Sx, TEAL, Thermo, Tube, clamp01, lerp,
	platePt, prog, smooth, vis,
} from './parts';
import type {RK} from '../bio-m6-b08/parts';

const pp = platePt;
const METER_L = ['reliability', 'identical', 'health'];

// ---------- 5. Reliability ----------
const K5 = cues(S('reliability'), {fused: 'fused 277', only: 'Only 29', one: 'just one became', why: 'Why so few', histones: 'like the ones on histones', switched: 'switched many of', reset: 'reset those switches', partly: 'only partly', die: 'die before or soon', large: 'unusually large', rates: 'Rates have improved', fail: 'most attempts still fail'});
const KEPT = Array.from({length: 277}, (_, i) => i).filter(i => i % 9 === 4).slice(0, 29);
const NUC = {x: 1060, y: 690, r: 240};
const RODS: [number, number, number][] = [[-140, -100, 20], [-20, -160, -15], [100, -90, 35], [-160, 30, -25], [-10, 10, 10], [130, 60, -40], [-60, 140, 15]];
const STUCK = [2, 7, 11];
const ON0 = [5, 9, 12];
export const SceneReliability: React.FC = () => {
	const f = useCurrentFrame();
	const fun = 1 - 0.75 * prog(f, K5.why, 14);
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
		return [NUC.x + dx + Math.cos(ang) * (t - 0.5) * 160, NUC.y + dy + Math.sin(ang) * (t - 0.5) * 160] as [number, number];
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
				<MiniBoard active="L" bay={2} o={prog(f, 0, 14)} />
				<Meter x={1150} y={200} labels={METER_L} fills={[rel, 0, 0]} colors={[RED_BROWN, AMBER, AMBER]} o={prog(f, 4, 14)} w={300} />
				{/* the attempt funnel: 277 fused cells, 29 embryos, one lamb */}
				<g opacity={fun}>
					<Sx x={150} y={320} text="277 fused cells" size={30} color={GREY_INK} weight={700} at={K5.fused + 10} />
					{Array.from({length: 277}, (_, i) => {
						const kj = KEPT.indexOf(i);
						const x0 = 160 + (i % 23) * 24, y0 = 350 + Math.floor(i / 23) * 24;
						const a = prog(f, K5.fused + 4 + (i % 23) * 1.2, 8);
						if (a <= 0.01) return null;
						if (kj < 0) return <circle key={i} cx={x0} cy={y0} r={7} fill={grey > 0.5 ? '#d6d8da' : '#f6e3dc'} stroke={grey > 0.5 ? GREYT : '#b9786a'} strokeWidth={1.5} opacity={a * (1 - 0.55 * grey)} />;
						const x1 = 160 + kj * 19, y1 = 720;
						const isOne = kj === 14;
						const g = isOne ? 0 : lone;
						return <circle key={i} cx={lerp(x0, x1, toRow)} cy={lerp(y0, y1, toRow)} r={8} fill={g > 0.5 ? '#d6d8da' : '#f7e6dc'} stroke={g > 0.5 ? GREYT : '#b9786a'} strokeWidth={2} opacity={a * (isOne ? 1 - prog(f, K5.one + 16, 10) : 1 - 0.55 * g)} />;
					})}
					<Sx x={150} y={772} text="29 embryos transferred" size={30} color={GREY_INK} weight={700} at={K5.only + 30} />
					<Pl p={PLATES.lamb} cx={426} cy={860} w={90} o={prog(f, K5.one + 16, 12)} />
					<Sx x={480} y={876} text="1 lamb" size={30} color={INK} weight={800} at={K5.one + 22} />
				</g>
				<Pill x={1150} y={360} text="reliability: low" size={30} o={vis(f, K5.one + 30, K5.reset, 12)} />
				{/* why: the egg has to reset the udder nucleus's gene switches */}
				<g opacity={nucO}>
					<defs><clipPath id="b16-s5-nuc"><circle cx={NUC.x} cy={NUC.y} r={NUC.r} /></clipPath></defs>
					<g clipPath="url(#b16-s5-nuc)"><Pl p={PLATES.cell} cx={ccx} cy={ccy} w={cw} /></g>
					{RODS.map(([dx, dy, a], i) => {
						const ang = (a * Math.PI) / 180;
						const x = NUC.x + dx, y = NUC.y + dy;
						return <path key={i} d={`M${x - Math.cos(ang) * 80},${y - Math.sin(ang) * 80} Q${x + 10},${y - 14} ${x + Math.cos(ang) * 80},${y + Math.sin(ang) * 80}`} fill="none" stroke={PLUM} strokeWidth={9} strokeLinecap="round" opacity={0.85} />;
					})}
					{Array.from({length: 14}, (_, i) => {
						const [x, y] = sw(i);
						return <Switch key={i} x={x} y={y - 2} on={onOf(i)} o={prog(f, K5.switched + 4 + i * 2, 8)} stuck={STUCK.includes(i) ? stuckDim : 0} s={1.1} />;
					})}
				</g>
				{STUCK.map((i, j) => {
					const [x, y] = sw(i);
					return <ScribbleRing key={i} cx={x} cy={y} rx={34} ry={26} at={K5.partly + j * 6} out={K5.die} seed={2 + j} color={GREYT} />;
				})}
				<Spool x={1640} y={760} s={0.8} o={vis(f, K5.histones, K5.switched + 10, 10)} />
				<Sx x={NUC.x} y={985} text="epigenetic marks: tags that switch genes on or off" size={24} color={GREY_INK} hand anchor="middle" at={K5.switched + 20} out={K5.die} />
				<Tg x={1340} y={560} text="resetting is often incomplete" at={K5.partly + 10} out={K5.die} size={34} />
				{/* consequences: losses and unusually large lambs */}
				<Tg x={1340} y={560} text="pregnancy losses, deaths at birth" at={K5.die + 10} out={K5.rates} size={34} />
				<Embryos x={1380} y={650} n={5} lostIdx={[1, 3, 4]} dead={prog(f, K5.die + 24, 20)} o={prog(f, K5.die + 4, 12)} gap={60} />
				{[0, 1, 2, 3].map(i => <Pl key={i} p={PLATES.lamb} cx={1400 + i * 110} cy={i === 2 ? 820 : 836} w={i === 2 ? 120 : 76} o={prog(f, K5.large + i * 4, 10)} />)}
				<Sx x={1560} y={920} text="large offspring syndrome" size={24} color={GREY_INK} hand anchor="middle" at={K5.large + 16} />
				<Tg x={1150} y={400} text="improved, still low" at={K5.rates + 10} size={34} />
				{void AMBER_INK}{void INK_SOFT}
			</Overlay>
		</>
	);
};

// ---------- 6. Health, and effective for what? ----------
const K6 = cues(S('health-and-purpose'), {arth: 'developed arthritis', lung: 'lung disease', alone: 'That alone', four: 'four later clones', healthy: 'healthy for their age', depends: 'depends on the purpose', unrel: 'too unreliable', worth: 'worth it to copy', rare: 'rare animal', ferret: 'black-footed ferret', frozen: 'frozen in 1988', given: 'have given clones', babies: 'had babies', passing: 'passing on alleles'});
const POOL: RK[] = ['A', 'B', 'C', 'D', 'A', 'C', 'B', 'D', 'A', 'B'];
export const SceneHealth: React.FC = () => {
	const f = useCurrentFrame();
	const leftO = 1 - prog(f, K6.depends, 14);
	const health = lerp(0, 0.5, prog(f, K6.healthy + 10, 24));
	const kitT = smooth(prog(f, K6.babies + 6, 30));
	const verdictLit = 1 - prog(f, K6.ferret, 12);
	return (
		<>
			<Heading text="Health, and effective for what?" at={4} size={60} />
			<Overlay>
				<MiniBoard active="L" bay={2} o={prog(f, 0, 14)} />
				<Meter x={1150} y={200} labels={METER_L} fills={[0.14, 0.7, health]} colors={[RED_BROWN, AMBER, AMBER]} o={prog(f, 4, 14)} w={300} />
				<g opacity={leftO}>
					<Pl p={PLATES.lamb} cx={320} cy={430} w={280} o={prog(f, 0, 14)} />
					<GTag x={500} y={320} text="arthritis" at={K6.arth + 6} out={K6.four} size={26} />
					<GTag x={500} y={380} text="lung disease: a virus, also in other sheep in the flock" at={K6.lung} out={K6.four} size={26} />
					<MistakeChip x={500} y={460} text="Dolly = early ageing?" at={K6.alone} cross={K6.alone + 20} size={30} />
					{[0, 1, 2, 3].map(i => <Pl key={i} p={PLATES.lamb} cx={190 + i * 130} cy={700} w={110} o={prog(f, K6.four + 10 + i * 6, 10)} />)}
					<GTag x={380} y={780} text="same cells, healthy for their age at 7 to 9" at={K6.healthy} size={26} anchor="middle" />
				</g>
				<Pill x={1150} y={360} text="health: mixed, not doomed" size={30} o={vis(f, K6.healthy + 20, K6.depends, 12)} />
				{/* the verdict by purpose */}
				<Pill x={1150} y={360} text="everyday breeding: too unreliable" size={30} mark="cross" o={prog(f, K6.unrel, 12)} lit={verdictLit} />
				<Pill x={1150} y={440} text="copying one rare animal: can be worth it" size={30} mark="tick" o={prog(f, K6.worth, 12)} lit={verdictLit} />
				<Pl p={PLATES.bunch} cx={1810} cy={1010} w={120} o={0.55 * prog(f, K6.rare, 14)} dim={1} />
				{/* the black-footed ferret */}
				<Pl p={PLATES.ferret} cx={470} cy={760} w={380} o={prog(f, K6.ferret - 4, 14)} />
				<FrozenVial x={170} y={700} o={prog(f, K6.frozen, 12)} s={0.7} />
				<GTag x={170} y={830} text="cells frozen 1988" at={K6.frozen + 8} out={K6.given + 10} size={24} anchor="middle" />
				{[0, 1, 2].map(i => <Pl key={i} p={PLATES.ferret} cx={800 + i * 150} cy={720} w={140} o={prog(f, K6.given + 6 + i * 8, 10)} />)}
				<GTag x={950} y={790} text="clones from 2020" at={K6.given + 16} out={K6.babies} size={24} anchor="middle" />
				{[0, 1].map(i => <Pl key={i} p={PLATES.ferret} cx={lerp(1100, 1130 + i * 80, kitT)} cy={lerp(720, 830 + i * 8, kitT)} w={70} o={kitT > 0.01 ? prog(f, K6.babies + 6, 8) : 0} />)}
				<GTag x={950} y={880} text="2024: a clone has young (kits)" at={K6.babies + 14} size={24} anchor="middle" />
				<RingCluster x={1560} y={780} kinds={[...POOL, 'new', 'flow']} cols={6} gap={40} r={12} o={prog(f, K6.passing - 20, 14)} ringO={i => (i < 10 ? 1 : prog(f, K6.passing + 6 + (i - 10) * 10, 12))} />
				<Sx x={1560} y={710} text="breeding population" size={24} color={GREY_INK} hand anchor="middle" opacity={prog(f, K6.passing - 20, 14)} />
				<Pill x={1150} y={940} text="previously unrepresented alleles passed on" size={28} o={prog(f, K6.passing + 24, 12)} />
				{void INK}
			</Overlay>
		</>
	);
};

// ---------- 7. Gene cloning ----------
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
	const ring = {cx: 640, cy: 360, r: 80};
	const host = {cx: 1360, cy: 400, w: 640};
	const hostO = prog(f, K7.host - 8, 14) * (1 - 0.7 * prog(f, K7.divides + 20, 14)) * (1 - prog(f, K7.half, 14));
	const upR = pp(PLATES.upEnd, host.cx, host.cy, host.w, PT.upRing[0], PT.upRing[1]);
	const kU = host.w / 1599;
	// division tree: one level per 30 frames, then faster to five levels
	const tLevel = f < K7.half ? prog(f, K7.divides + 10, 90, x => x) * 3 : 3 + prog(f, K7.half + 6, 50, x => x) * 2;
	const treeO = prog(f, K7.divides + 4, 12) * (1 - 0.6 * prog(f, K7.nocells, 14));
	const dish = {cx: 1450, cy: 790, w: 380};
	const dishO = prog(f, K7.billions - 10, 14) * (1 - 0.6 * prog(f, K7.nocells, 14));
	const clockT = f < K7.half ? 0 : ((f - K7.half) % 30) / 30;
	const heat = vis(f, K7.heat, K7.enzyme, 8);
	const sep = prog(f, K7.heat + 6, 20);
	const copy = prog(f, K7.enzyme + 6, 40, x => x);
	const pcrX = 1340;
	const cycles = f < K7.cycle ? 0 : f < K7.cycle + 18 ? 1 : 2;
	return (
		<>
			<Heading text="Gene cloning" at={4} size={60} />
			<Overlay>
				<MiniBoard active="R" bay={0} what={f >= K7.cycle + 20 ? 'what: one gene, many copies' : undefined} o={prog(f, 0, 14)} />
				{/* one gene into a plasmid */}
				<g opacity={1 - 0.6 * prog(f, K7.divides, 14)}>
					<g opacity={1 - close} transform={`translate(${lerp(0, ring.cx - 66 - 220, slide)},${lerp(0, ring.cy - ring.r - 12 - 330, slide)})`}>
						<GeneSeg x={220} y={330} n={6} draw={prog(f, K7.onegene + 6, 20)} o={prog(f, K7.onegene + 6, 8)} />
					</g>
					<PlasmidRing cx={ring.cx} cy={ring.cy} r={ring.r} gap={1 - close} insert={close} o={prog(f, K7.plasmid, 12)} />
					<Sx x={ring.cx} y={500} text="plasmid: small ring of DNA" size={28} color={GREY_INK} hand anchor="middle" at={K7.ring} out={K7.vector} />
					<Tg x={ring.cx} y={500} text="vector: a carrier of DNA into a cell" at={K7.vector} out={K7.host} size={34} anchor="middle" />
					<Tg x={ring.cx} y={500} text="host: the cell that takes it up" at={K7.host} out={K7.divides + 20} size={34} anchor="middle" />
				</g>
				{/* the host takes it up */}
				<g opacity={hostO}>
					<Pl p={PLATES.upStart} cx={host.cx} cy={host.cy} w={host.w} o={1 - prog(f, K7.host + 16, 16)} />
					<Pl p={PLATES.upEnd} cx={host.cx} cy={host.cy} w={host.w} o={prog(f, K7.host + 16, 16)} />
					<path d={`M${upR[0] - 60 * kU},${upR[1] - 24 * kU} A${65 * kU},${65 * kU} 0 0 1 ${upR[0] + 30 * kU},${upR[1] - 58 * kU}`} fill="none" stroke={AMBER} strokeWidth={6} strokeLinecap="round" opacity={prog(f, K7.host + 30, 10)} />
				</g>
				{/* each division copies the plasmid */}
				<DivTree x0={230} y={790} h={420} dx={200} t={tLevel} levels={5} w0={150} o={treeO} />
				<Tg x={180} y={560} text="each new cell gets the plasmid" at={K7.newcells} out={K7.billions} size={34} />
				<ClockRing x={1100} y={560} r={36} t={clockT} o={vis(f, K7.half, K7.nocells, 10)} />
				<Pl p={PLATES.dish} cx={dish.cx} cy={dish.cy} w={dish.w} o={dishO} />
				<Colonies cx={dish.cx} cy={dish.cy} R={(700 * dish.w) / 1599} n={70} t={prog(f, K7.billions, 60, x => x)} o={dishO} />
				<GTag x={dish.cx} y={1000} text="a day: billions" at={K7.billions + 16} out={K7.nocells + 10} size={26} anchor="middle" />
				{/* PCR: a gene copied with no cells */}
				<g opacity={prog(f, K7.nocells + 6, 14)}>
					<Tube x={1170} y={420} s={0.9} />
					<Thermo x={1250} y={460} hot={heat} s={1} />
				</g>
				<GTag x={1120} y={240} text="PCR: copies a gene in a tube" at={K7.pcr} size={26} />
				<PcrStrip x={pcrX} y={360} sep={sep} copy={copy} o={prog(f, K7.nocells + 10, 14) * (1 - prog(f, K7.cycle, 12))} enzX={f >= K7.enzyme + 4 && copy < 1 ? pcrX + copy * 300 : undefined} />
				{cycles > 0 ? Array.from({length: cycles === 1 ? 4 : 8}, (_, i) => (
					<g key={i} opacity={prog(f, K7.cycle + (i < 4 ? 0 : 18) + (i % 4) * 2, 8)}>
						<GeneSeg x={1340 + (i % 2) * 220} y={300 + Math.floor(i / 2) * 64} n={8} pitch={22} gap={18} lineW={3} />
					</g>
				)) : null}
				<Sx x={1340} y={590} text={cycles === 2 ? '2, 4, 8 ...' : cycles === 1 ? '2, 4 ...' : ''} size={28} color={GREY_INK} hand opacity={cycles > 0 ? 1 : 0} />
				{void INK}{void COLS}
			</Overlay>
		</>
	);
};

// ---------- 8. Judging gene cloning ----------
const K8 = cues(S('judging-gene-cloning'), {how: 'how effective', few: 'Only a few bacteria', one: 'need just one', check: 'easy to check', study: 'study a gene', protein: 'make its protein', organism: 'into another organism', limits: 'Its limits are small'});
const HOSTS = [6, 13];
export const SceneJudgeGene: React.FC = () => {
	const f = useCurrentFrame();
	const fills = [lerp(0, 0.85, prog(f, K8.one + 20, 24)), lerp(0, 0.9, prog(f, K8.check + 20, 24)), lerp(0, 0.9, prog(f, K8.organism + 10, 24))];
	const pos = (i: number): [number, number] => [190 + (i % 5) * 130, 330 + Math.floor(i / 5) * 92];
	const pick = pos(6);
	const pulse = vis(f, K8.one, K8.one + 50, 8) * (0.5 + 0.5 * Math.sin((f - K8.one) / 4));
	return (
		<>
			<Heading text="Judging gene cloning" at={4} size={60} />
			<Overlay>
				<MiniBoard active="R" bay={2} o={prog(f, 0, 14)} />
				<Meter x={1150} y={200} labels={['reliable enough', 'identical copies', 'useful']} fills={fills} colors={[TEAL, TEAL, TEAL]} o={prog(f, K8.how, 14)} w={300} />
				{Array.from({length: 20}, (_, i) => {
					const [x, y] = pos(i);
					const isHost = HOSTS.includes(i);
					return <Bact key={i} cx={x} cy={y} w={100} ring={isHost ? 'new' : undefined} ringO={isHost ? prog(f, K8.few + 24 + HOSTS.indexOf(i) * 8, 10) : 0} grey={isHost ? 0 : 0.6 * prog(f, K8.one, 12)} glow={i === 6 ? pulse : 0} o={prog(f, K8.few + (i % 5) * 2, 10)} />;
				})}
				<line x1={pick[0] + 50} y1={pick[1]} x2={850} y2={pick[1] + 140} stroke={GREYT} strokeWidth={2} strokeDasharray="5 5" opacity={prog(f, K8.one + 10, 10)} />
				<DivTree x0={890} y={pick[1] + 140} h={300} dx={110} t={prog(f, K8.one + 14, 60, x => x) * 3} levels={3} w0={70} o={prog(f, K8.one + 10, 10)} />
				<Pill x={1150} y={360} text="one host is enough" size={30} o={vis(f, K8.one + 20, K8.organism, 12)} />
				{/* easy to check: read the sequence */}
				<Pl p={PLATES.dish} cx={250} cy={820} w={220} o={prog(f, K8.check, 12)} />
				<Colonies cx={250} cy={820} R={92} n={14} t={1} o={prog(f, K8.check, 12)} r={6} />
				<g opacity={prog(f, K8.check + 10, 12)}>
					{Array.from({length: 10}, (_, i) => <rect key={i} x={400 + i * 26} y={800} width={20} height={40} rx={5} fill={['#f3e9c6', '#efe0b0', '#f6efd8', '#e9dcae'][i % 4]} stroke="#c8b98a" strokeWidth={1.5} />)}
				</g>
				<TickG x={700} y={820} at={K8.check + 24} s={36} />
				<GTag x={400} y={870} text="check the sequence" at={K8.check + 20} size={24} />
				{/* uses */}
				<MagStrip x={930} y={820} o={prog(f, K8.study, 12)} />
				<Pl p={PLATES.vial} cx={1140} cy={820} w={60} o={prog(f, K8.protein, 12)} />
				<Pl p={PLATES.cotton} cx={1300} cy={820} w={130} o={prog(f, K8.organism, 12)} />
				<Pill x={1150} y={360} text="uses: study, protein, modification" size={30} o={prog(f, K8.organism + 10, 12)} />
				<GTag x={1150} y={460} text="the gene doesn't always go in: check colonies" at={K8.limits} size={24} />
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
					<Pl p={PLATES.lamb} cx={190} cy={890} w={80} />
					<Meter x={250} y={850} labels={METER_L} fills={[0.14, 0.7, 0.5]} colors={[RED_BROWN, AMBER, AMBER]} w={220} size={20} gap={40} />
					<Pl p={PLATES.bactP} cx={1060} cy={890} w={100} />
					<Meter x={1130} y={850} labels={['reliable enough', 'identical copies', 'useful']} fills={[0.85, 0.9, 0.9]} colors={[TEAL, TEAL, TEAL]} w={220} size={20} gap={40} />
				</g>
				{void GREY_INK}{void INK_SOFT}{void PLUM}
			</Overlay>
		</>
	);
};
