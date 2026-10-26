// M7 B07 scenes 7 to 12: making a clone (the chosen cell crossfades to its aligned dividing partner and splits, the
// clone tree 2, 4, 8, then a dense cluster, a day axis); plasma cells and memory cells (cluster cells crossfade one by
// one to plasma cells, a plasma cell scaled uniformly to 1.5 times a bare B cell, antibodies streaming out with the
// selected shape, carried to b06's infection, memory cells ringed); what antibodies do (block, clump, coat, each panel
// dimming as the next builds); what specific means (a different bacterium is not bound, its own clone); the whole
// sequence on the enlarged strip; the memory aid with the clone growing from the selected cell.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Overlay} from '../bio-m5-b13/shared';
import {ResponseStrip} from '../bio-m7-b06/strip';
import {Channel} from '../bio-m7-b06/parts';
import {S} from './common';
import {FEAT, PLATES, plasmaW} from './assets';
import {strip7} from './board';
import {row6X} from './s1';
import {
	AMBER, AMBER_INK, BCell, Bact, CTag, CloneTree, DayAxis, DrawPath, GREY_INK, GTag, Gloss, Membrane, MistakeChip, Patch, PlateB, Ring, Sx, TEAL, Yg,
	clamp01, cloneNodes, clusterPts, lerp, prog, ptOf, rng, smooth, treeCluster, vis,
} from './parts';
import type {Kind, Pt} from './parts';

// ---------- 7. Making a clone ----------
const K7 = cues(S('clone'), {divides: 'cell divides', again: 'again and again', clone: 'a clone', days: 'takes days', rare: 'A few rare'});
export const T7 = {x: 150, y: 540, dx: 170, h: 560, cellW: 80};
export const SceneClone: React.FC = () => {
	const f = useCurrentFrame();
	const mv = smooth(prog(f, 0, 22));
	const root = {cx: lerp(row6X(2), T7.x, mv), cy: lerp(690, T7.y, mv), w: lerp(170, 200, mv)};
	const div = prog(f, K7.divides + 4, 12);
	const splitAt = K7.divides + 24;
	const sp = smooth(prog(f, splitAt, 22));
	const lv1 = cloneNodes(T7.x, T7.y, T7.dx, T7.h)[1];
	const rootO = f < splitAt ? 1 : 0;
	const copiesO = f < splitAt ? 0 : 1 - prog(f, K7.again + 12, 8);
	const strip = strip7(2, [{}, {}, {at: K7.clone + 6, lit: prog(f, K7.clone + 10, 10)}]);
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<BCell cx={root.cx} cy={root.cy} w={root.w} k="tri" divide={div} o={rootO} lit={1} glow={0.6} />
			{f >= splitAt ? lv1.map((p, i) => <BCell key={i} cx={lerp(T7.x, p[0], sp)} cy={lerp(T7.y + (i ? 40 : -40), p[1], sp)} w={lerp(150, T7.cellW, sp)} k="tri" o={copiesO} />) : null}
			<CloneTree x={T7.x} y={T7.y} dx={T7.dx} h={T7.h} cellW={T7.cellW} at={K7.again} step={16} />
			<BCell cx={T7.x} cy={T7.y} w={T7.cellW} k="tri" o={prog(f, K7.rare, 12) * 0.85} lit={1} />
			<Ring cx={T7.x} cy={T7.y} rx={58} ry={58} at={K7.rare + 6} color={AMBER} />
			<CTag x={700} y={180} text="a clone: identical cells" at={K7.clone + 8} color={TEAL} size={30} dim={prog(f, K7.days, 10)} />
			<DayAxis x0={T7.x} x1={1040} y={900} at={K7.days + 2} />
			<CTag x={420} y={960} text="first time: days" at={K7.days + 14} color={AMBER_INK} size={30} dim={prog(f, K7.rare, 10)} />
			<CTag x={100} y={180} text="rare cells, multiplied" at={K7.rare + 12} color={AMBER_INK} size={30} />
		</Overlay>
	);
};

// ---------- 8. Plasma cells and memory cells ----------
const K8 = cues(S('plasma-memory'), {plasma: 'become plasma cells', packed: 'packed with the', thousands: 'thousands of antibody', same: 'same binding shape', blood: 'The blood carries', memory: 'memory B cells'});
const TR = {s: 0.62, tx: 700};
/** Screen point of a tree point after the scene's tree transform (amount m). */
const trT = (p: Pt, m: number): Pt => {
	const s = lerp(1, TR.s, m), tx = lerp(T7.x, TR.tx, m);
	return [tx + (p[0] - T7.x) * s, T7.y + (p[1] - T7.y) * s];
};
export const SceneClonePlasma: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 0, 24));
	const s = lerp(1, TR.s, m);
	const cl = treeCluster(T7.x, T7.y, T7.dx, T7.h);
	const pts = clusterPts(cl.cx, cl.cy, cl.rx, cl.ry);
	const order = pts.map((p, i) => ({p, i})).sort((a, b) => b.p[0] - a.p[0]);
	const memIdx = order.slice(0, 3).map(o => o.i);
	const cw = T7.cellW * 0.68;
	const shrink = smooth(prog(f, K8.blood, 24));
	const big = {k: lerp(1, 0.62, shrink)};
	const BW = 240, PW = plasmaW(BW);
	const bareC: Pt = [170, 400], plC: Pt = [480, 400];
	const L = (p: Pt): Pt => [lerp(p[0], 60 + (p[0] - 60) * 0.62, shrink), lerp(p[1], 200 + (p[1] - 200) * 0.62, shrink)];
	const bc = L(bareC), pc = L(plC);
	const rer = ptOf(PLATES.plasma, pc[0], pc[1], PW * big.k, FEAT.rer);
	const R = rng(31);
	const ys = Array.from({length: 12}, (_, i) => ({a: -1.2 + R() * 2.0, off: R()}));
	const strip = strip7(3, [{}, {}, {}, {at: K8.same + 6, lit: prog(f, K8.same + 10, 10)}]);
	const travelO = vis(f, K8.blood + 10, undefined, 14) * (1 - 0.6 * prog(f, K8.memory, 12));
	const bigY: Pt = [520, 850];
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<g transform={`translate(${lerp(T7.x, TR.tx, m)},${T7.y}) scale(${s}) translate(${-T7.x},${-T7.y})`}>
				<CloneTree x={T7.x} y={T7.y} dx={T7.dx} h={T7.h} cellW={T7.cellW} at={-200} clusterO={0} />
				{pts.map((p, i) => {
					const mem = memIdx.includes(i);
					const rank = order.findIndex(o => o.i === i);
					const t = mem ? 0 : prog(f, K8.plasma + 6 + rank * 2, 10);
					return (
						<g key={i}>
							<BCell cx={p[0]} cy={p[1]} w={cw} k="tri" o={1 - t} recL={340} />
							<PlateB p={PLATES.plasma} cx={p[0]} cy={p[1]} w={plasmaW(cw)} o={t} />
						</g>
					);
				})}
			</g>
			{memIdx.map((i, j) => { const q = trT(pts[i], 1); return <Ring key={i} cx={q[0]} cy={q[1]} rx={30} ry={30} at={K8.memory + 6 + j * 5} color={TEAL} seed={j + 3} />; })}
			<BCell cx={bc[0]} cy={bc[1]} w={BW * big.k} k="tri" o={prog(f, K8.plasma + 10, 14)} lit={prog(f, K8.same + 8, 10)} />
			<PlateB p={PLATES.plasma} cx={pc[0]} cy={pc[1]} w={PW * big.k} o={prog(f, K8.plasma + 14, 14)} />
			<GTag x={bc[0] - 60} y={bc[1] + 130 * big.k} text="B cell" at={K8.plasma + 20} size={22} out={K8.blood} />
			<GTag x={pc[0] - 70} y={pc[1] + 150 * big.k} text="plasma cell" at={K8.plasma + 24} size={22} out={K8.blood} />
			<Ring cx={rer[0]} cy={rer[1]} rx={70} ry={80} at={K8.packed + 10} out={K8.thousands} color={AMBER} />
			<Gloss x={80} y={640} text="rough ER: makes proteins for export, Year 11" at={K8.packed + 16} color={GREY_INK} size={24} out={K8.blood} />
			{f >= K8.thousands && f < K8.blood + 30 ? ys.map((y, i) => {
				const ph = (((f - K8.thousands) / 50 + y.off) % 1);
				const d = 140 * big.k + ph * 170;
				const x0 = pc[0] + Math.cos(y.a) * d, y0 = pc[1] + Math.sin(y.a) * d;
				return <Yg key={i} x={x0} y={y0} ang={y.a + Math.PI} L={40} k="tri" o={Math.min(1, ph * 4, (1 - ph) * 3) * prog(f, K8.thousands + i * 3, 6) * (1 - prog(f, K8.blood, 20))} />;
			}) : null}
			<CTag x={80} y={680} text="thousands per second" at={K8.thousands + 10} color={TEAL} size={30} dim={prog(f, K8.same, 10)} out={K8.blood + 20} />
			<GTag x={80} y={750} text="antibodies drawn far larger than real" at={K8.thousands + 24} size={22} out={K8.blood} />
			<g opacity={vis(f, K8.same + 4, K8.blood + 10, 14)}>
				<Yg x={bigY[0]} y={bigY[1] + 80} ang={-Math.PI / 2} L={150} k="tri" lit={1} />
			</g>
			<CTag x={600} y={790} text="same shape as the selected receptor" at={K8.same + 12} color={TEAL} size={30} maxW={480} dim={prog(f, K8.blood, 10)} out={K8.blood + 20} />
			<g opacity={travelO}>
				<PlateB p={PLATES.node} cx={150} cy={960} w={120} />
				<Channel pts={[[220, 960], [1050, 960]]} at={K8.blood + 12} dur={20} width={30} />
				<PlateB p={PLATES.inflamed} cx={1130} cy={960} w={130} />
				{Array.from({length: 6}, (_, i) => {
					const u = (((f - K8.blood - 20) / 70 + i / 6) % 1 + 1) % 1;
					return f >= K8.blood + 20 ? <Yg key={i} x={lerp(240, 1040, u)} y={968} ang={-Math.PI / 2} L={26} k="tri" o={Math.min(1, u * 6, (1 - u) * 6)} /> : null;
				})}
			</g>
			<GTag x={820} y={1010} text="b06: leaky vessels let them out" at={K8.blood + 26} size={22} out={K8.memory + 30} />
			<CTag x={760} y={180} text="memory B cells: stay for later" at={K8.memory + 10} color={TEAL} size={30} />
			<GTag x={760} y={250} text="b09" at={K8.memory + 24} size={22} />
		</Overlay>
	);
};

// ---------- 9. What antibodies do ----------
const K9 = cues(S('antibody-actions'), {dont: 'kill bacteria by', cover: 'cover the parts', clumps: 'link bacteria into', coat: 'coat bacteria', stem: 'receptors for the', grab: 'grab and engulf'});
export const SceneActions: React.FC = () => {
	const f = useCurrentFrame();
	const d1 = prog(f, K9.clumps, 14), d2 = prog(f, K9.coat, 14);
	const up = smooth(prog(f, K9.cover + 40, 30));
	const cl = smooth(prog(f, K9.clumps + 10, 30));
	const spread: Pt[] = [[600, 360], [850, 380], [610, 690], [860, 680]];
	const tight: Pt[] = [[680, 480], [800, 495], [690, 585], [805, 600]];
	const bp = spread.map((p, i) => [lerp(p[0], tight[i][0], cl), lerp(p[1], tight[i][1], cl)] as Pt);
	const MAC = {cx: 1150, cy: 560, w: 400};
	const mv = smooth(prog(f, K9.coat + 6, 40));
	const bac: Pt = [lerp(1400, 1318, mv), lerp(330, 470, mv)];
	const grip = prog(f, K9.stem + 8, 12);
	const strip = strip7(4, [{}, {}, {}, {}, {at: K9.coat + 6, lit: prog(f, K9.coat + 10, 10)}]);
	const pairs: [number, number][] = [[0, 1], [0, 2], [1, 3], [2, 3]];
	return (
		<Overlay>
			<ResponseStrip {...strip} />
			<MistakeChip x={100} y={170} text="antibodies kill bacteria" at={K9.dont} cross={K9.dont + 16} size={30} />
			<g opacity={1 - 0.55 * d1} style={d1 > 0.01 ? {filter: `grayscale(${d1})`} : undefined}>
				<Membrane x0={90} x1={470} y={720} at={K9.cover} h={90} />
				<Bact cx={280} cy={lerp(625, 520, up)} w={300} id="b07-s9-p1" o={prog(f, K9.cover, 14)} coat="tri" coatO={prog(f, K9.cover + 14, 14)} coatL={60} />
				<CTag x={90} y={840} text="block: can't attach" at={K9.cover + 20} color={TEAL} size={30} />
				<GTag x={90} y={910} text="b03: fimbriae" at={K9.cover + 30} size={22} />
				<GTag x={270} y={910} text="also blocks toxins" at={K9.cover + 44} size={22} />
			</g>
			<g opacity={(1 - 0.55 * d2) * prog(f, K9.clumps, 14)} style={d2 > 0.01 ? {filter: `grayscale(${d2})`} : undefined}>
				{bp.map((p, i) => <Bact key={i} cx={p[0]} cy={p[1]} w={150} rot={[10, -15, -8, 20][i]} id={`b07-s9-c${i}`} only={['tri']} />)}
				{pairs.map(([a, b], i) => {
					const mx = (bp[a][0] + bp[b][0]) / 2, my = (bp[a][1] + bp[b][1]) / 2;
					const ang = Math.atan2(bp[b][1] - bp[a][1], bp[b][0] - bp[a][0]) + Math.PI / 2;
					return <Yg key={i} x={mx + Math.cos(ang) * 22} y={my + Math.sin(ang) * 22} ang={ang + Math.PI} L={44} k="tri" o={prog(f, K9.clumps + 24 + i * 5, 10)} />;
				})}
				<CTag x={520} y={840} text="clump: two arms link bacteria" at={K9.clumps + 16} color={TEAL} size={30} />
				<Gloss x={524} y={930} text="agglutination" at={K9.clumps + 30} color={GREY_INK} />
			</g>
			<g opacity={prog(f, K9.coat, 14)}>
				<PlateB p={PLATES.macrophage} cx={MAC.cx} cy={MAC.cy} w={MAC.w} />
				<Bact cx={bac[0]} cy={bac[1]} w={46} id="b07-s9-o" patchO={0} coat="tri" coatL={30} rot={-30} />
				{grip > 0.01 ? [-1, 0, 1].map(i => {
					const a = (-60 + i * 16) * Math.PI / 180;
					const ex = bac[0] + Math.cos(a + Math.PI) * 50, ey = bac[1] + Math.sin(a + Math.PI) * 50;
					return <path key={i} d={`M${ex - Math.cos(a) * 20},${ey - Math.sin(a) * 20} L${ex},${ey} M${ex - 7},${ey - 5} L${ex + 7},${ey + 5}`} stroke={TEAL} strokeWidth={4} strokeLinecap="round" opacity={grip} />;
				}) : null}
				{f >= K9.grab ? <DrawPath d={`M${bac[0] - 70},${bac[1] + 40} Q${bac[0] - 30},${bac[1] - 70} ${bac[0] + 40},${bac[1] - 46}`} at={K9.grab + 4} dur={20} color="#5b7fc0" width={7} /> : null}
				<CTag x={940} y={840} text="coat: phagocytes grab it faster" at={K9.coat + 14} color={TEAL} size={30} maxW={460} />
				<Gloss x={944} y={930} text="opsonisation" at={K9.coat + 28} color={GREY_INK} />
				<GTag x={1130} y={900} text="b06: phagocytosis" at={K9.coat + 40} size={22} />
			</g>
			<GTag x={520} y={990} text="also: activate complement proteins" at={K9.grab + 30} size={22} />
			{void AMBER}{void Sx}{void Patch}{void clamp01}
		</Overlay>
	);
};

// ---------- 10. What specific means ----------
const K10 = cues(S('specific'), {made: 'made against this', different: 'A different bacterium', usually: 'usually', select: 'select its own', each: 'Each pathogen gets'});
const LIB: Kind[] = ['wave', 'tri', 'step', 'square', 'twin', 'round'];
export const SceneSpecific: React.FC = () => {
	const f = useCurrentFrame();
	const CC = {cx: 980, cy: 430, w: 220};
	const r = CC.w * 0.47;
	const coccusO = prog(f, K10.different, 14);
	const lib = (i: number): Pt => [170 + i * 190, 850];
	const sel = prog(f, K10.select + 6, 12);
	return (
		<Overlay>
			<ResponseStrip {...strip7(5)} />
			<Bact cx={330} cy={430} w={440} id="b07-s10-b" coat="tri" coatO={prog(f, 6, 16)} coatL={64} />
			<CTag x={150} y={600} text="fits: bound" at={K10.made + 6} color={TEAL} size={30} dim={prog(f, K10.different, 10)} />
			<PlateB p={PLATES.coccus} cx={CC.cx} cy={CC.cy} w={CC.w} o={coccusO} id="b07-s10-cc" />
			{Array.from({length: 8}, (_, i) => {
				const a = (i * 45 - 90) * Math.PI / 180;
				return <Patch key={i} x={CC.cx + Math.cos(a) * r} y={CC.cy + Math.sin(a) * r} ang={a} k={i % 2 ? 'wave' : 'square'} s={26} o={coccusO} />;
			})}
			<GTag x={880} y={580} text="a different bacterium" at={K10.different + 8} size={22} />
			{f >= K10.different + 10 ? [0, 1, 2, 3].map(i => {
				const u = clamp01((f - K10.different - 10 - i * 10) / 90);
				return <Yg key={i} x={lerp(680, 1330, u)} y={[255, 625, 275, 640][i] + Math.sin(u * 6 + i) * 10} ang={(i * 70) * Math.PI / 180} L={56} k="tri" o={Math.min(1, u * 5, (1 - u) * 5)} />;
			}) : null}
			<CTag x={760} y={640} text="different shapes: usually not bound" at={K10.usually + 6} color={AMBER_INK} size={30} maxW={600} dim={prog(f, K10.select, 10)} />
			{LIB.map((k, i) => <BCell key={i} cx={lib(i)[0]} cy={lib(i)[1]} w={150} k={k} o={prog(f, K10.select - 10 + i * 3, 10)} grey={k === 'square' ? 0 : 0.85} lit={k === 'square' ? sel : 0} glow={k === 'square' ? sel : 0} recL={330} />)}
			<CTag x={lib(3)[0] + 90} y={760} text="its own clone" at={K10.select + 14} color={TEAL} size={30} />
			<MistakeChip x={100} y={980} text="every B cell responds to every antigen" at={K10.each} cross={K10.each + 16} size={30} />
		</Overlay>
	);
};

// ---------- 11. The whole sequence ----------
const K11 = cues(S('sequence'), {bind: 'bind it', helper: 'With a helper', clone: 'divide into a', plasma: 'Plasma cells release', remove: 'help remove'});
export const BIG7 = {x: 520, y: 110, w: 760, rh: 84, gap: 20, stepH: 104, size: 36};
export const SceneSequence: React.FC = () => {
	const f = useCurrentFrame();
	const cs = [K11.bind, K11.helper, K11.clone, K11.plasma, K11.remove];
	const thumbs = [PLATES.bact, PLATES.tcell, PLATES.bare, PLATES.plasma, PLATES.bact];
	const strip = strip7(5, cs.map((c, i) => ({thumb: thumbs[i], lit: vis(f, c, cs[i + 1], 10)})), BIG7);
	strip.rungs[3] = {...strip.rungs[3], stepArrows: true};
	return (
		<Overlay>
			<g opacity={prog(f, 0, 18)}>
				<ResponseStrip {...strip} />
			</g>
			{void lerp}
		</Overlay>
	);
};

// ---------- 12. Memory ----------
const K12 = cues(S('memory'), {clonal: 'clonal selection, the name', selected: 'is selected', cloned: 'and then'});
const ROW12: Kind[] = ['wave', 'step', 'tri', 'twin', 'round', 'wave', 'step', 'twin'];
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const lit = prog(f, K12.selected + 4, 12);
	const others = 1 - prog(f, K12.cloned + 4, 14) * 0.8;
	const x = (i: number) => 260 + i * 200;
	return (
		<Overlay>
			<Sx x={960} y={300} text="Clonal selection: the name is the process." size={76} color={TEAL} hand weight={700} anchor="middle" at={K12.clonal} />
			{ROW12.map((k, i) => <BCell key={i} cx={x(i)} cy={560} w={150} k={k} o={prog(f, 10 + i * 3, 10) * (k === 'tri' ? 1 : others)} lit={k === 'tri' ? lit : 0} glow={k === 'tri' ? lit : 0} grey={k === 'tri' ? 0 : lit * 0.8} recL={330} />)}
			<CloneTree x={x(2)} y={800} dx={130} h={300} cellW={60} at={K12.cloned + 6} step={10} />
			{f >= K12.cloned + 2 ? <DrawPath d={`M${x(2)},${640} L${x(2)},${770}`} at={K12.cloned + 2} dur={8} color={TEAL} width={4} /> : null}
		</Overlay>
	);
};
