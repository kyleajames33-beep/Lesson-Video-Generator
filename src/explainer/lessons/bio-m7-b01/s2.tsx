// M7 B01 scenes 6 to 10: viruses (one TB rod beside a red blood cell at true scale, then the camera zooms in; the
// virus's genome and coat; a host cell that builds new viruses; the COVID-19 virus beside the rod at true scale with
// a row of dozens; TMV beside the coronavirus at true scale); viroid against prion (true-scale viroid beside a virus,
// the potato pair, the prion alone, its normal partner, the misfolding row, the cow); plants are hosts too (plant
// slots under the tree, the two exceptions); why the group decides treatment (chips under the leaves, the generic
// bacterium's targets, no effect on a virus); and the four sorting questions with the memory line.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {CurveArrow} from '../bio-m6-b01/parts';
import {Cam} from '../bio-m5-b06a/shared';
import {S} from './common';
import {
	AMBER, AMBER_INK, DrawPath, FEAT, GREYT, GREY_INK, GTag, GreyCross, HChip, INK, LEAVES, OneRbc, OneRod, PLATES, Pl, RiboDots, Ring, SizeRuler,
	SorterTree, Sx, Tg, MisfoldRow, T_LEAF, T_THUMB, clamp01, fitW, kOf, lerp, prog, ptOf, pulse, smooth, treePt, vis,
} from './parts';

// ---------- 6. Viruses: not cells ----------
const K6 = cues(S('viruses'), {virus: 'A virus is', genetic: 'genetic material', coat: 'protein coat', nocyto: 'no cytoplasm', gets: 'gets into a host', build: 'build new viruses', covid: 'The virus that causes', tenth: 'ten-thousandth', dozens: 'dozens would fit', plants: 'Plants get viruses', tmv: 'tobacco mosaic', rod: 'a rod of RNA'});
const ROD_SCALE = 3.9;
export const SceneViruses: React.FC = () => {
	const f = useCurrentFrame();
	const V = {cx: 1380, cy: 540, w: 560};
	const vk = kOf(PLATES.virus, V.w);
	const [gx, gy] = ptOf(PLATES.virus, V.cx, V.cy, V.w, FEAT.genome.c);
	const [ccx, ccy] = ptOf(PLATES.virus, V.cx, V.cy, V.w, FEAT.coat.c);
	const bigV = vis(f, K6.virus, K6.covid, 14);
	const zoomO = 1 - prog(f, K6.gets, 16);
	const C = {cx: 560, cy: 600, w: 440};
	const cellO = vis(f, K6.gets, K6.covid, 14);
	const inT = smooth(prog(f, K6.gets + 6, 38));
	const outT = smooth(prog(f, K6.build + 6, 36));
	const OUT_ANG = [200, 240, 285, 120, 160].map(a => (a * Math.PI) / 180);
	const pairO = vis(f, K6.covid, K6.plants, 14);
	const tmvO = prog(f, K6.plants, 14);
	const rulerO = 1 - vis(f, K6.virus, K6.covid + 6, 12);
	return (
		<>
			<Heading text="Viruses: not cells" at={K6.virus} size={60} />
			<Overlay>
				{/* true scale: one rod beside a red blood cell, then zoom in to the rod */}
				<g opacity={zoomO}>
					<Cam keys={[[0, 1, 960, 560], [30, 1, 960, 560], [74, ROD_SCALE, 1150 + 480 / ROD_SCALE, 560]]}>
						<OneRbc id="m7b01-rbc6" cx={700} cy={560} d={450} o={prog(f, 0, 14)} />
						<OneRod id="m7b01-rod6a" cx={1150} cy={560} len={180} o={prog(f, 4, 14)} />
					</Cam>
				</g>
				<GTag x={700} y={810} text="red blood cell" at={2} out={30} size={26} anchor="middle" />
				<GTag x={1150} y={650} text="one TB rod" at={6} out={30} size={26} anchor="middle" />
				{/* the virus */}
				<Pl p={PLATES.virus} cx={V.cx} cy={V.cy} w={V.w} o={bigV} />
				<g opacity={bigV}>
					<Ring cx={gx} cy={gy} rx={FEAT.genome.r * vk} ry={FEAT.genome.r * vk * 1.1} at={K6.genetic + 6} out={K6.coat} color={AMBER} />
					{f >= K6.coat ? <circle cx={ccx} cy={ccy} r={FEAT.coat.r * vk * 0.86} fill="none" stroke={AMBER} strokeWidth={5 + 6 * pulse(f, K6.coat, 40)} opacity={vis(f, K6.coat, K6.nocyto, 10)} /> : null}
				</g>
				<GTag x={V.cx} y={850} text="DNA or RNA" at={K6.genetic + 8} out={K6.coat} size={28} anchor="middle" />
				<GTag x={V.cx} y={850} text="protein coat" at={K6.coat + 6} out={K6.nocyto} size={28} anchor="middle" />
				<GTag x={V.cx} y={850} text="no cytoplasm, no ribosomes" at={K6.nocyto} out={K6.build} size={28} anchor="middle" />
				{/* the host cell builds new viruses */}
				<Pl p={PLATES.cell} cx={C.cx} cy={C.cy} w={C.w} o={cellO} />
				<g opacity={cellO}>
					{f >= K6.gets + 6 && f < K6.build + 10 ? <Pl p={PLATES.virus} cx={lerp(1100, C.cx + 40, inT)} cy={lerp(520, C.cy - 30, inT)} w={56} o={1 - prog(f, K6.build + 4, 8)} /> : null}
					{f >= K6.build + 6 ? OUT_ANG.map((a, i) => <Pl key={i} p={PLATES.virus} cx={C.cx + Math.cos(a) * 290 * outT} cy={C.cy + Math.sin(a) * 260 * outT} w={52} o={prog(f, K6.build + 6 + i * 3, 8)} />) : null}
				</g>
				<GTag x={C.cx} y={900} text="the host cell builds new viruses" at={K6.build + 10} out={K6.covid} size={28} anchor="middle" />
				{/* true scale: the coronavirus beside one rod, then a row of dozens */}
				<g opacity={pairO}>
					<OneRod id="m7b01-rod6b" cx={880} cy={610} len={900} />
					<Pl p={PLATES.virus} cx={1420} cy={420} w={36} />
					{Array.from({length: 26}, (_, i) => <Pl key={i} p={PLATES.virus} cx={470 + i * 33} cy={430} w={30} o={prog(f, K6.dozens + i, 6)} />)}
				</g>
				<GTag x={1420} y={330} text="COVID-19 virus" at={K6.covid + 8} out={K6.plants} size={26} anchor="middle" />
				<GTag x={880} y={830} text="one TB rod" at={K6.covid + 12} out={K6.plants} size={26} anchor="middle" />
				{/* true scale: TMV beside the coronavirus */}
				<Pl p={PLATES.virus} cx={560} cy={600} w={200} o={tmvO} />
				<Pl p={PLATES.tmv} cx={1150} cy={600} w={600} o={prog(f, K6.tmv, 14)} />
				<GTag x={560} y={740} text="COVID-19 virus" at={K6.plants + 6} size={26} anchor="middle" />
				<GTag x={1150} y={680} text="tobacco mosaic virus: a rod of RNA in a protein coat" at={K6.rod} size={28} anchor="middle" />
				<SizeRuler x={160} y={985} o={rulerO} states={[
					{at: 0, len: 300, label: '5 thousandths of a mm'},
					{at: 74, len: 60 * ROD_SCALE, label: '1 thousandth of a mm'},
					{at: K6.covid + 10, len: 300, label: '1 thousandth of a mm'},
					{at: K6.plants, len: 200, label: '1 ten-thousandth of a mm'},
				]} />
				{void K6.tenth}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 7. Viroids and prions ----------
const K7 = cues(S('viroids-and-prions'), {mix: 'easy to mix up', viroid: 'A viroid is', circle: 'small circle of RNA', one: 'One makes potato', spindle: 'spindle-shaped', prion: 'A prion is', protein: 'a protein with no', misf: 'a misfolded copy', normal: 'a normal protein', meets: 'When it meets', fold: 'fold the same wrong way', apple: 'one bad apple', mad: 'mad cow disease', so: 'So a viroid', rnaonly: 'RNA only', protonly: 'protein only'});
export const SceneViroidPrion: React.FC = () => {
	const f = useCurrentFrame();
	const endO = 1 - prog(f, K7.so, 14);
	const viroidTagDim = 1 - 0.65 * prog(f, K7.prion, 14);
	return (
		<>
			<Heading text="Viroids and prions" at={4} size={60} />
			<Overlay>
				<line x1={960} x2={960} y1={220} y2={1010} stroke={GREYT} strokeWidth={2} strokeDasharray="8 8" opacity={prog(f, K7.mix, 14)} />
				{/* left: the viroid, true scale beside a virus */}
				<Pl p={PLATES.virus} cx={300} cy={380} w={240} o={prog(f, K7.viroid, 14)} />
				<Pl p={PLATES.viroid} cx={560} cy={380} w={100} o={prog(f, K7.viroid + 6, 14)} />
				<GTag x={300} y={520} text="virus" at={K7.viroid + 4} out={K7.so} size={24} anchor="middle" />
				<GTag x={560} y={420} text="viroid (same scale)" at={K7.viroid + 10} out={K7.so} size={24} anchor="middle" />
				<g opacity={viroidTagDim * endO}><Tg x={140} y={610} text="viroid: RNA only, no coat" at={K7.circle} size={38} /></g>
				<Pl p={PLATES.potatoN} cx={480} cy={780} w={330} o={prog(f, K7.one, 14) * (1 - prog(f, K7.spindle, 24))} />
				<Pl p={PLATES.potatoS} cx={480} cy={780} w={330} o={prog(f, K7.spindle, 24)} />
				<GTag x={480} y={900} text="potato spindle tuber viroid" at={K7.spindle + 10} out={K7.so} size={26} anchor="middle" />
				{/* right: the prion on its own, its normal partner, the misfolding row */}
				<Tg x={1020} y={250} text="prion: protein only, no DNA or RNA" at={K7.protein} out={K7.so} size={38} />
				<Pl p={PLATES.prionM} cx={1250} cy={400} w={250} o={prog(f, K7.prion, 14)} />
				<GTag x={1020} y={560} text="one protein molecule: far smaller than a virus" at={K7.protein + 24} out={K7.misf} size={24} />
				<GTag x={1250} y={560} text="misfolded" at={K7.misf + 6} out={K7.so} size={24} anchor="middle" />
				<Pl p={PLATES.prionN} cx={1620} cy={400} w={250} o={vis(f, K7.normal, K7.mad, 14)} />
				<GTag x={1620} y={560} text="normal form" at={K7.normal + 6} out={K7.mad} size={24} anchor="middle" />
				<MisfoldRow x0={1240} y={760} dx={135} w={115} at={K7.fold} step={22} o={prog(f, K7.meets, 14)} />
				<GTag x={1050} y={860} text="one misfolded protein converts the next" at={K7.fold + 24} out={K7.so} size={26} />
				<GTag x={1050} y={920} text="the bad apple" at={K7.apple + 4} out={K7.mad + 30} size={26} />
				<Pl p={PLATES.cow} cx={1620} cy={400} w={290} o={prog(f, K7.mad, 14)} />
				<GTag x={1620} y={560} text="BSE: mad cow disease" at={K7.mad + 6} out={K7.so} size={24} anchor="middle" />
				{/* summary lines */}
				<Pl p={PLATES.viroid} cx={150} cy={985} w={110} o={prog(f, K7.rnaonly - 4, 12)} />
				<Sx x={230} y={1000} text="viroid: RNA only" size={46} color={INK} hand at={K7.rnaonly - 4} />
				<Pl p={PLATES.prionM} cx={1080} cy={985} w={70} o={prog(f, K7.protonly - 4, 12)} />
				<Sx x={1140} y={1000} text="prion: protein only" size={46} color={INK} hand at={K7.protonly - 4} />
				{void AMBER_INK}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 8. Plants are hosts too ----------
const K8 = cues(S('plant-hosts'), {plants: 'Plants are hosts', crown: 'crown gall', wheat: 'wheat stem rust', tiny: 'Tiny roundworms', rootk: 'root-knot nematodes', exc: 'two exceptions', viroidsP: 'known viroids', prionsA: 'known prions'});
const SLOT_Y = 755, SLOT_H = 150;
const Slot: React.FC<{i: number; at: number; o?: number; dim?: number; children?: React.ReactNode}> = ({i, at, o = 1, dim = 0, children}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const x = LEAVES[i].x;
	return (
		<g opacity={v * (1 - 0.5 * dim)}>
			<rect x={x - 88} y={SLOT_Y} width={176} height={SLOT_H} rx={14} fill="#fbf8f0" stroke={dim > 0.5 ? '#e1dccf' : GREYT} strokeWidth={2} strokeDasharray="6 5" />
			{children}
		</g>
	);
};
export const PlantSlots: React.FC<{t: {gall: number; rust: number; knot: number; proto: number; tmv: number; viroid: number; prion: number}; dim?: number; o?: number}> = ({t, dim = 0, o = 1}) => {
	const cy = SLOT_Y + 68;
	const X = (i: number) => LEAVES[i].x;
	const d = clamp01(dim);
	return (
		<g opacity={o}>
			<Slot i={0} at={t.gall} dim={d}><Pl p={PLATES.gall} cx={X(0)} cy={cy} w={fitW(PLATES.gall, 150, 128)} dim={d} /></Slot>
			<Slot i={1} at={t.rust} dim={d}><Pl p={PLATES.wheat} cx={X(1)} cy={cy} w={fitW(PLATES.wheat, 150, 128)} dim={d} /></Slot>
			<Slot i={2} at={t.proto} dim={d}>
				{['rare in plants', '(e.g. Phytomonas', 'in palms)'].map((s, k) => <Sx key={k} x={X(2)} y={SLOT_Y + 46 + k * 32} text={s} size={21} color={GREY_INK} weight={600} anchor="middle" />)}
			</Slot>
			<Slot i={3} at={t.knot} dim={d}><Pl p={PLATES.rootKnot} cx={X(3)} cy={cy} w={fitW(PLATES.rootKnot, 150, 128)} dim={d} /></Slot>
			<Slot i={5} at={t.tmv} dim={d}><Pl p={PLATES.tmv} cx={X(5)} cy={cy} w={150} dim={d} /></Slot>
			<Slot i={6} at={t.viroid} dim={d}>
				<Pl p={PLATES.potatoS} cx={X(6)} cy={cy - 12} w={140} dim={d} />
				<Sx x={X(6)} y={SLOT_Y + 132} text="animals: none known" size={18} color={GREY_INK} weight={600} anchor="middle" />
			</Slot>
			<Slot i={7} at={t.prion} dim={d}>
				<Pl p={PLATES.cow} cx={X(7)} cy={cy - 12} w={130} dim={d} />
				<Sx x={X(7)} y={SLOT_Y + 132} text="plants: none known" size={18} color={GREY_INK} weight={600} anchor="middle" />
			</Slot>
		</g>
	);
};
export const ScenePlants: React.FC = () => {
	const f = useCurrentFrame();
	const t = {gall: K8.crown, rust: K8.wheat, knot: K8.rootk, proto: K8.rootk + 46, tmv: K8.rootk + 60, viroid: K8.viroidsP, prion: K8.prionsA};
	const lit = [vis(f, K8.crown, K8.wheat, 8), vis(f, K8.wheat, K8.tiny, 8), 0, vis(f, K8.tiny, K8.exc, 8), 0, 0, vis(f, K8.viroidsP, K8.prionsA, 8), prog(f, K8.prionsA, 8)];
	return (
		<>
			<Heading text="Plants are hosts too" at={4} size={60} />
			<Overlay>
				<SorterTree cy={238} grey={0.6} leafLit={lit} o={prog(f, 0, 14)} />
				<PlantSlots t={t} />
				<GTag x={LEAVES[4].x} y={SLOT_Y + 52} text="in plants" at={K8.plants + 20} size={26} anchor="middle" />
				<Tg x={960} y={1000} text="crown gall: a swelling at the stem base" at={K8.crown + 4} out={K8.wheat} size={40} anchor="middle" />
				<Tg x={960} y={1000} text="wheat stem rust" at={K8.wheat + 4} out={K8.tiny} size={40} anchor="middle" />
				<Tg x={960} y={1000} text="root-knot nematodes: tiny roundworms" at={K8.rootk} out={K8.exc} size={40} anchor="middle" />
				<HChip x={600} y={955} text="viroids: known in plants" at={K8.viroidsP} size={36} />
				<HChip x={1060} y={955} text="prions: known in animals" at={K8.prionsA} size={36} />
				{void DrawPath}
			</Overlay>
		</>
	);
};

// ---------- 9. Why the group decides treatment ----------
const K9 = cues(S('treatment'), {target: 'something the pathogen has', anti: 'Antibiotics like penicillin', pg: 'peptidoglycan wall', ribo: 'ribosomes shaped', virus: 'A virus has neither', flu: 'the flu', fp: 'Fungi and protozoa', antif: 'antifungals', antim: 'antimalarials', prions: 'And prions', cure: 'no known cure'});
const TS = 0.85, TCY = 228;
const lx = (i: number) => treePt(LEAVES[i].x, 0, TS, 960, TCY)[0];
const CHIP_Y = 666;
/** Body outline of the b6a bacterium (natural pixels; the flagellum is left out) and six ribosome points. */
const BODY = {x0: 300, x1: 1450, y0: 236, y1: 662};
const RIBO: [number, number][] = [[520, 360], [700, 520], [880, 330], [1020, 560], [1180, 400], [620, 600]];
export const TreatChips: React.FC<{t: {anti: number; antif: number; antim: number; anth: number; cure: number}; dim?: number; size?: number}> = ({t, dim = 0, size = 28}) => (
	<>
		<HChip x={lx(0)} y={CHIP_Y} text="antibiotics" at={t.anti} anchor="middle" size={size} dim={dim} />
		<HChip x={lx(1)} y={CHIP_Y + 64} text="antifungals" at={t.antif} anchor="middle" size={size} dim={dim} />
		<HChip x={lx(2)} y={CHIP_Y} text="antimalarials" at={t.antim} anchor="middle" size={size} dim={dim} />
		<HChip x={lx(3) + 60} y={CHIP_Y + 64} text="anthelmintics: worm drugs" at={t.anth} anchor="middle" size={size - 2} dim={dim} />
		<HChip x={lx(7)} y={CHIP_Y} text="no known cure" at={t.cure} anchor="middle" size={size} amber={false} dim={1} />
	</>
);
export const SceneTreatment: React.FC = () => {
	const f = useCurrentFrame();
	const B = {cx: 470, cy: 900, w: 380};
	const bk = kOf(PLATES.bact, B.w);
	const P = (u: number, v: number) => ptOf(PLATES.bact, B.cx, B.cy, B.w, [u, v]);
	const [bx0, by0] = P(BODY.x0, BODY.y0), [bx1, by1] = P(BODY.x1, BODY.y1);
	const glow = Math.max(pulse(f, K9.pg, 40), pulse(f, K9.ribo, 40));
	const bactO = vis(f, K9.pg - 10, K9.fp, 14);
	return (
		<>
			<Heading text="Why the group decides treatment" at={4} size={56} />
			<Overlay>
				<HChip x={1040} y={110} text="target: something the pathogen has, the host doesn't" at={K9.target} size={30} dim={prog(f, K9.cure, 14)} />
				<SorterTree s={TS} cy={TCY} grey={0.55} o={prog(f, 0, 14)} leafLit={[vis(f, K9.anti, K9.virus, 8), vis(f, K9.fp, K9.prions, 8), vis(f, K9.fp, K9.prions, 8), 0, 0, vis(f, K9.virus, K9.fp, 8), 0, prog(f, K9.prions, 8)]} />
				<TreatChips t={{anti: K9.anti + 6, antif: K9.antif, antim: K9.antim, anth: K9.antim + 26, cure: K9.cure}} />
				<Pl p={PLATES.fleming} cx={110} cy={900} w={130} o={vis(f, K9.anti, K9.fp, 14)} />
				{/* the generic bacterium: wall and ribosomes as targets */}
				<g opacity={bactO}>
					<Pl p={PLATES.bact} cx={B.cx} cy={B.cy} w={B.w} />
					<rect x={bx0} y={by0} width={bx1 - bx0} height={by1 - by0} rx={(by1 - by0) / 2} fill="none" stroke={AMBER} strokeWidth={3 + 6 * pulse(f, K9.pg, 40)} opacity={prog(f, K9.pg, 10)} />
					<RiboDots pts={RIBO.map(([u, v]) => P(u, v))} o={prog(f, K9.ribo, 10)} glow={glow} />
				</g>
				<GTag x={690} y={880} text="targets: wall, bacterial-type ribosomes" at={K9.ribo + 10} out={K9.virus} size={28} />
				<CurveArrow a={[lx(0) + 80, CHIP_Y + 40]} b={[lx(5) - 30, 560]} at={K9.virus} bow={150} color={GREYT} width={3.5} out={K9.fp} />
				<GreyCross x={lx(5) - 30} y={575} at={K9.virus + 18} s={18} />
				<GTag x={1180} y={880} text="flu: a virus, so no effect" at={K9.flu} out={K9.fp} size={28} />
				<GTag x={420} y={900} text="eukaryotes like us: harder to target" at={K9.fp + 10} size={28} />
				{void bk}{void K9.prions}{void T_LEAF}{void T_THUMB}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 10. Memory ----------
const K10 = cues(S('memory'), {cells: 'made of cells', animal: 'many-celled animal', nucleus: 'have a nucleus', rna: 'RNA only', not: 'not a cell means'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const a = [K10.cells, K10.animal, K10.nucleus, K10.rna];
	const on = (i: number) => vis(f, a[i], a[i + 1] ?? K10.not, 8);
	const s = 0.68, cx = 1262, cy = 238;
	const np = pulse(f, K10.not, 60);
	const [chx, chy] = treePt(1560, 760, s, cx, cy);
	return (
		<Overlay>
			<SorterTree s={s} cx={cx} cy={cy} grey={0.8} o={prog(f, 0, 14)}
				brLit={[Math.max(on(0), on(1), on(2)), Math.max(on(0), on(1)), Math.max(on(0), on(3), np)]}
				leafLit={[on(2), on(2), on(2), 0, 0, on(3), on(3), on(3)]} />
			{['made of cells?', 'many-celled animal?', 'nucleus?', 'RNA only, protein only, or genes in a coat?'].map((t, i) => (
				<g key={i} opacity={1 - 0.45 * prog(f, a[i + 1] ?? K10.not, 10)}>
					<HChip x={60} y={250 + i * 105} text={t} at={a[i]} size={i === 3 ? 29 : 36} dim={prog(f, K10.not, 12)} />
				</g>
			))}
			<HChip x={chx - 90} y={chy + 14} text="antibiotics" at={K10.not + 10} size={32} amber={false} />
			{f >= K10.not + 24 ? <DrawPath d={`M${chx - 100},${chy + 50} L${chx + 110},${chy + 36}`} at={K10.not + 24} dur={10} color={GREYT} width={6} /> : null}
			<Sx x={960} y={860} text="Not a cell means antibiotics are useless." size={72} color={AMBER_INK} hand anchor="middle" at={K10.not} />
			{void INK}
		</Overlay>
	);
};
