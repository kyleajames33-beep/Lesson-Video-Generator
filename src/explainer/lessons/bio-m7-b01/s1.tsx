// M7 B01 scenes 1 to 5: Fleming's dish and the four pathogens penicillin cannot treat (hook); infectious disease,
// pathogen and host with host circles (tuberculosis spreads, type 2 diabetes does not) and a field of mostly harmless
// microbes; the sorter tree built branch by branch on "is it made of cells?"; the microorganisms by the nucleus
// (TB rod inset with its DNA loop, the peptidoglycan wall, the size ruler, fungi and Plasmodium); the macroorganisms
// (tapeworm in metres, a zoom down to the tick in millimetres, ecto and endo).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {CurveArrow} from '../bio-m6-b01/parts';
import {S} from './common';
import {
	AMBER, AMBER_INK, DrawPath, FEAT, GREYT, GREY_INK, GTag, GreyCross, HChip, HostCircle, HostRow, INK, INK_SOFT, PLATES, Pl, RodInset, Ring, SizeRuler,
	SorterTree, Sx, Tg, clamp01, fitW, kOf, lerp, prog, ptOf, pulse, smooth, vis,
} from './parts';
import {rng} from '../../kit';

/** The sorter in miniature, top right (all built), with chosen branches or leaves lit. */
export const TreeThumb: React.FC<{brLit?: number[]; leafLit?: number[]; o?: number}> = ({brLit = [0, 0, 0], leafLit = [], o = 1}) => (
	<SorterTree s={0.3} cx={1600} cy={72} grey={1} brLit={brLit} leafLit={leafLit} o={o} qO={0.6} />
);

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {mould: 'a mould growing', clear: 'leaving a clear ring', led: 'That mould led', nothing: 'does nothing for', flu: 'the flu', tinea: 'tinea', malaria: 'malaria', tape: 'tapeworm', what: 'what makes a disease'});
const HOOK_ROW: {p: typeof PLATES.virus; tag: string; at: () => number}[] = [
	{p: PLATES.virus, tag: 'flu (a virus)', at: () => K1.flu},
	{p: PLATES.hyphae, tag: 'tinea', at: () => K1.tinea},
	{p: PLATES.plasmo, tag: 'malaria', at: () => K1.malaria},
	{p: PLATES.tapeworm, tag: 'tapeworm', at: () => K1.tape},
];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, K1.led, 30));
	const D = {cx: lerp(960, 300, m), cy: lerp(590, 580, m), w: lerp(640, 300, m)};
	const k = kOf(PLATES.fleming, D.w);
	const [mx, my] = ptOf(PLATES.fleming, D.cx, D.cy, D.w, FEAT.mould.c);
	const ringO = 1 - prog(f, K1.led, 10);
	const cr = FEAT.mould.clear * k;
	return (
		<>
			<Heading text="What kind of pathogen is it?" at={K1.what + 10} size={64} />
			<Overlay>
				<Pl p={PLATES.fleming} cx={D.cx} cy={D.cy} w={D.w} o={prog(f, 0, 16)} />
				<g opacity={ringO}>
					<Ring cx={mx} cy={my} rx={FEAT.mould.r * k * 1.06} ry={FEAT.mould.r * k * 1.06} at={K1.mould + 8} color={AMBER} />
					{f >= K1.clear + 8 ? <DrawPath d={`M${mx},${my - cr} A${cr},${cr} 0 1 1 ${mx - 0.1},${my - cr}`} at={K1.clear + 8} dur={26} color={AMBER_INK} width={4} dash="14 10" /> : null}
				</g>
				<GTag x={960} y={950} text="1928: a clear ring around the mould" at={K1.clear + 16} out={K1.led} size={28} anchor="middle" />
				<GTag x={300} y={760} text="penicillin" at={K1.led + 24} size={28} anchor="middle" />
				{HOOK_ROW.map((r, i) => {
					const x = 800 + i * 280, y = 600;
					const at = r.at();
					const b: [number, number] = [x - 70, y - 115];
					return (
						<g key={i}>
							<Pl p={r.p} cx={x} cy={y} w={fitW(r.p, 220, 190)} o={prog(f, at, 12)} />
							<GTag x={x} y={y + 120} text={r.tag} at={at + 4} out={K1.what} size={28} anchor="middle" />
							<CurveArrow a={[440, 530]} b={b} at={at + 2} bow={-120 - i * 50} color={GREYT} width={3.5} />
							<GreyCross x={b[0] + 4} y={b[1] - 6} at={at + 20} s={16} />
						</g>
					);
				})}
				{void K1.nothing}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 2. Infectious disease, pathogen, host ----------
const K2 = cues(S('infectious-pathogen-host'), {pathogen: 'a pathogen', host: 'its host', pass: 'pass from one host', tb: 'Tuberculosis is infectious', t2: 'Type 2 diabetes', genes: 'genes and lifestyle', most: 'most microbes', gut: 'Your gut carries'});
const FIELD = (() => {
	const r = rng(71);
	const out: [number, number][] = [];
	for (let row = 0; row < 3; row++) for (let c = 0; c < 10; c++) out.push([170 + c * 176 + (row % 2) * 70 + (r() - 0.5) * 40, 520 + row * 140 + (r() - 0.5) * 40]);
	return out;
})();
const MARKED = [6, 23];
export const SceneInfectious: React.FC = () => {
	const f = useCurrentFrame();
	const defGrey = prog(f, K2.t2, 16);
	const P0: [number, number] = [300, 440];
	const H: [number, number] = [820, 610];
	const mv = smooth(prog(f, K2.host + 4, 30));
	const rowsO = 1 - prog(f, K2.most, 16);
	return (
		<>
			<div style={{opacity: 1 - defGrey}}><Heading text="Infectious disease: caused by a pathogen; most can pass between hosts." at={2} size={50} /></div>
			<div style={{opacity: defGrey * 0.75, filter: 'grayscale(1)'}}><Heading text="Infectious disease: caused by a pathogen; most can pass between hosts." at={-400} size={50} color={GREY_INK} /></div>
			<Overlay>
				{/* pathogen, then host */}
				<g opacity={1 - prog(f, K2.pass, 14)}>
					<Pl p={PLATES.tb} cx={P0[0]} cy={P0[1]} w={260} o={prog(f, K2.pathogen, 14)} />
					<Tg x={490} y={420} text="pathogen: an organism or agent that lives in or on a host and harms it" at={K2.pathogen + 6} out={K2.host} size={34} />
					<HostCircle x={H[0]} y={H[1]} r={86} o={prog(f, K2.host, 12)} />
					{f >= K2.host + 4 ? <Pl p={PLATES.tb} cx={lerp(P0[0] + 60, H[0], mv)} cy={lerp(P0[1] + 40, H[1], mv)} w={lerp(120, 76, mv)} /> : null}
					<Tg x={940} y={620} text="host: the organism it lives in or on" at={K2.host + 8} out={K2.pass} size={34} />
				</g>
				{/* two rows: TB spreads, type 2 diabetes does not */}
				<g opacity={rowsO}>
					<HostRow xs={[150, 315, 480, 645, 810]} y={600} r={62} at={K2.pass} jumpAt={K2.pass + 12} step={30} />
					<GTag x={130} y={700} text="it can spread" at={K2.pass + 50} out={K2.tb + 20} size={26} />
					<Tg x={120} y={790} text="tuberculosis: a bacterium" at={K2.tb} size={36} />
					<line x1={960} x2={960} y1={520} y2={820} stroke={GREYT} strokeWidth={2} strokeDasharray="8 8" opacity={prog(f, K2.t2, 12)} />
					<HostRow xs={[1110, 1275, 1440, 1605, 1770]} y={600} r={62} at={K2.t2} inner={prog(f, K2.t2 + 20, 14)} />
					<Tg x={1080} y={790} text="type 2 diabetes:" at={K2.t2 + 6} size={36} />
					<Tg x={1080} y={840} text="genes and lifestyle, no pathogen" at={K2.genes} size={36} />
				</g>
				{/* most microbes are harmless */}
				{FIELD.map(([x, y], i) => {
					const o = prog(f, K2.most + 6 + (i % 10) * 2, 12);
					const isP = MARKED.includes(i);
					return (
						<g key={i}>
							<Pl p={PLATES.bact} cx={x} cy={y} w={130} o={o} dim={0.55} />
							{isP ? <Ring cx={x} cy={y} rx={82} ry={40} at={K2.most + 40} color={AMBER} seed={i} /> : null}
						</g>
					);
				})}
				<GTag x={960} y={960} text="most microbes: harmless or helpful" at={K2.gut} size={30} anchor="middle" />
				<GTag x={FIELD[23][0] + 20} y={FIELD[23][1] + 46} text="pathogen" at={K2.most + 50} size={22} anchor="middle" />
				{void INK}{void INK_SOFT}{void clamp01}{void vis}
			</Overlay>
		</>
	);
};

// ---------- 3. The first question: is it made of cells? ----------
const K3 = cues(S('made-of-cells'), {sort: 'Biologists sort', first: 'is it made of cells', bact: 'Bacteria, fungi', fungi: 'fungi', proto: 'protozoa', micro: 'microorganisms', worms: 'Worms and ticks', ticks: 'ticks', macro: 'macroorganisms', viruses: 'Viruses, viroids', viroids: 'viroids', prions: 'prions', noncell: 'non-cellular'});
const DESC = ['single cells or threads', 'many-celled animals', 'not cells, multiply only inside a host'];
export const SceneMadeOfCells: React.FC = () => {
	const f = useCurrentFrame();
	const brAt: [number, number, number] = [K3.bact - 4, K3.worms - 4, K3.viruses - 4];
	const nameAt = [K3.micro, K3.macro, K3.noncell];
	const until = [K3.worms, K3.viruses, 1e9];
	const brLit = [0, 1, 2].map(i => vis(f, nameAt[i] - 4, until[i], 10));
	return (
		<Overlay>
			<SorterTree rootAt={K3.sort + 6} forkAt={K3.first} brAt={brAt} nameAt={nameAt}
				leafAt={[K3.bact, K3.fungi, K3.proto, K3.worms, K3.ticks, K3.viruses, K3.viroids, K3.prions]} brLit={brLit} />
			{[0, 1, 2].map(i => {
				const bright = vis(f, nameAt[i], until[i], 12);
				const grey = prog(f, until[i], 12);
				return (
					<g key={i}>
						<Sx x={[360, 960, 1560][i]} y={492} text={DESC[i]} size={30} color={AMBER_INK} hand anchor="middle" at={nameAt[i] + 6} opacity={bright} />
						<Sx x={[360, 960, 1560][i]} y={492} text={DESC[i]} size={24} color={GREY_INK} weight={600} anchor="middle" at={until[i]} opacity={grey} />
					</g>
				);
			})}
			<GTag x={1560} y={790} text="viruses are not microorganisms" at={K3.noncell + 30} size={24} anchor="middle" />
		</Overlay>
	);
};

// ---------- 4. Microorganisms: does it have a nucleus? ----------
const K4 = cues(S('microorganisms'), {nucleusQ: 'have a nucleus', bact: 'A bacterium', prok: 'a prokaryote', dna: 'DNA lying', wall: 'a wall containing', pg: 'peptidoglycan', thou: 'few thousandths', fp: 'Fungi and protozoa', fungi: 'Fungi grow', threads: 'threads or yeast', chitin: 'chitin', tinea: 'Tinea', proto: 'Protozoa are single', nowall: 'no wall', plas: 'Plasmodium', inside: 'inside red blood'});
export const SceneMicro: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, K4.fp, 26));
	const T = {cx: lerp(440, 220, m), cy: lerp(570, 560, m), w: lerp(600, 300, m)};
	const tbK = kOf(PLATES.tb, 600);
	const rodPx = Math.hypot(FEAT.rod.b[0] - FEAT.rod.a[0], FEAT.rod.b[1] - FEAT.rod.a[1]) * tbK;
	const wallP = Math.max(pulse(f, K4.wall, 40), pulse(f, K4.pg, 40));
	const PZ = {cx: 1490, cy: 590, w: 470};
	const [px, py] = ptOf(PLATES.plasmo, PZ.cx, PZ.cy, PZ.w, FEAT.parasite.c);
	const pk = kOf(PLATES.plasmo, PZ.w);
	return (
		<>
			<Heading text="Microorganisms: is there a nucleus?" at={4} size={60} />
			<Overlay>
				<TreeThumb brLit={[1, 0, 0]} leafLit={[1, 1, 1]} o={prog(f, 0, 14)} />
				<Sx x={1330} y={270} text="nucleus?" size={40} color={AMBER_INK} hand at={K4.nucleusQ} />
				<Pl p={PLATES.tb} cx={T.cx} cy={T.cy} w={T.w} o={prog(f, K4.bact, 14)} />
				<GTag x={T.cx} y={T.cy + 150} text="bacteria" at={K4.fp + 20} size={26} anchor="middle" />
				<g opacity={1 - prog(f, K4.fp, 14)}>
					<RodInset x={900} y={380} w={520} h={170} o={prog(f, K4.prok, 14)} wallPulse={wallP} dna={prog(f, K4.dna, 14)} />
					<GTag x={900} y={590} text="prokaryote: no nucleus" at={K4.prok + 6} out={K4.wall} size={28} />
					<GTag x={1160} y={325} text="DNA in the cytoplasm" at={K4.dna + 6} out={K4.wall} size={22} anchor="middle" />
					<GTag x={900} y={590} text="wall: peptidoglycan" at={K4.pg} size={28} />
					<SizeRuler x={T.cx - rodPx / 2} y={900} states={[{at: K4.thou, len: rodPx, label: 'one rod: a few thousandths of a mm'}]} at={K4.thou} />
				</g>
				<GTag x={560} y={300} text="eukaryotes: have a nucleus" at={K4.fp + 10} size={28} />
				<Pl p={PLATES.hyphae} cx={830} cy={600} w={520} o={prog(f, K4.fungi, 14)} />
				<GTag x={580} y={820} text="threads (hyphae) and spores" at={K4.threads} out={K4.tinea} size={26} />
				<GTag x={580} y={870} text="wall contains chitin" at={K4.chitin} out={K4.tinea} size={26} />
				<GTag x={580} y={820} text="tinea: a fungal skin infection" at={K4.tinea} size={26} />
				<Pl p={PLATES.plasmo} cx={PZ.cx} cy={PZ.cy} w={PZ.w} o={prog(f, K4.proto, 14)} />
				<GTag x={1270} y={820} text="one cell, no wall" at={K4.nowall} out={K4.inside} size={26} />
				<Ring cx={px} cy={py} rx={FEAT.parasite.r * pk} ry={FEAT.parasite.r * pk} at={K4.inside} color={AMBER} />
				<GTag x={1270} y={820} text="Plasmodium: inside red blood cells" at={K4.inside + 6} size={26} />
				{void K4.plas}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 5. Macroorganisms ----------
const K5 = cues(S('macroorganisms'), {helm: 'Helminths are', pork: 'The pork tapeworm', hooks: 'hooks onto', several: 'several metres', other: 'Other parasites', ticks: 'like ticks', ecto: 'Ecto means', endo: 'endo means', so: 'so ticks are'});
export const SceneMacro: React.FC = () => {
	const f = useCurrentFrame();
	const out = smooth(prog(f, 0, 26));
	const s0 = lerp(2.6, 1, out);
	const zin = smooth(prog(f, K5.other, 30));
	const TW = {cx: 900, cy: 600, w: 1100};
	const [hx, hy] = ptOf(PLATES.tapeworm, TW.cx, TW.cy, TW.w, FEAT.scolex.c);
	const hk = kOf(PLATES.tapeworm, TW.w);
	const zs = s0 * lerp(1, 7, zin);
	const fx = lerp(TW.cx, hx + 300, zin);
	const fy = lerp(TW.cy, hy + 180, zin);
	const pul = pulse(f, K5.so, 50);
	return (
		<>
			<Heading text="Macroorganisms: parasitic animals" at={4} size={60} />
			<Overlay>
				<TreeThumb brLit={[0, 1, 0]} leafLit={[0, 0, 0, Math.max(0.6, pul), Math.max(0.6, pul)]} o={prog(f, 0, 14)} />
				<g opacity={1 - prog(f, K5.other + 14, 16)} transform={`translate(960,600) scale(${zs}) translate(${-fx},${-fy})`}>
					<Pl p={PLATES.tapeworm} cx={TW.cx} cy={TW.cy} w={TW.w} />
					<Ring cx={hx} cy={hy} rx={120 * hk} ry={120 * hk} at={K5.hooks} color={AMBER} />
				</g>
				<GTag x={hx + 70} y={hy - 70} text="hooks onto the gut wall" at={K5.hooks + 8} out={K5.other} size={26} />
				<Pl p={PLATES.tick} cx={700} cy={600} w={460} o={prog(f, K5.other + 22, 16)} />
				<GTag x={700} y={850} text="tick: a few millimetres" at={K5.ticks} size={26} anchor="middle" />
				<SizeRuler x={160} y={985} states={[{at: 0, len: 360, label: 'metres'}, {at: K5.other + 16, len: 120, label: 'millimetres'}]} />
				<Sx x={560} y={1000} text="up to several metres" size={32} color={AMBER_INK} hand at={K5.several} out={K5.other} />
				<HChip x={1080} y={430} text="ecto- = outside: ticks, lice" at={K5.ecto} size={38} />
				<Pl p={PLATES.tapeworm} cx={1150} cy={625} w={120} o={prog(f, K5.endo, 12)} />
				<HChip x={1230} y={590} text="endo- = inside: tapeworms" at={K5.endo} size={38} />
				{void INK}{void INK_SOFT}{void GREYT}{void HostCircle}{void clamp01}
			</Overlay>
		</>
	);
};
