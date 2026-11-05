// M7 B11 quality fix (6 Nov 2026): the middle scenes rebuilt around the painted bacterium, virus and airway-cell plates
// at full size, a larger step strip, a painted card grid for "using drugs well", the effectiveness table filled as it
// is narrated with painted column heads, drawn givens beside each exam question, and short key notes. These are new
// variants; s1, s2, s3 and parts.tsx keep their exports (bio-m7-b12 imports parts.tsx).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {DayStrip} from '../bio-m6-b01/parts';
import {S} from './common';
import {FEAT, PLATES} from './assets';
import {Released} from './s1';
import {PopBoard} from './s2';
import {
	AMBER, AMBER_INK, Bact, CARD, CTag, Chain, DrawPath, DrugChip, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Mesh, Osmosis, Pl, PlainArrow, PlateB, Sx, TEAL, TEAL_SOFT,
	TickMark, WText, clamp01, fitW, lerp, popGrid, pp, prog, pulse, smooth, tw, vis, wOfH,
} from './parts';
import type {PB, Pt} from './parts';

const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
/** Plates added by the quality fix (natural size and alpha box measured 6 Nov). */
export const PLX = {
	pig: {src: B + 'm6-pig-side-v1.png', nat: N2, box: [296, 599, 1692, 1393]} as PB,
	bed: {src: B + 'm8-hospital-bed-v1.png', nat: N2, box: [160, 449, 1840, 1551]} as PB,
	before: {src: B + 'm6-antibiotic-colonies-before-v1.png', nat: N2, box: [161, 171, 1840, 1829]} as PB,
	after: {src: B + 'm6-antibiotic-colonies-after-v1.png', nat: N2, box: [160, 171, 1840, 1829]} as PB,
};
export const ASSETS_BIG = Object.values(PLX).map(p => p.src);

// ---------- a larger step strip ----------
export const STEPS = ['enter', 'copy', 'build', 'release'];
export type BigG = {x: number; y: number; w: number; h?: number; size?: number};
export const bigBox = (g: BigG, i: number) => {
	const cw = g.w / 4;
	return {x: g.x + i * cw + 8, y: g.y, w: cw - 16, h: g.h ?? 80};
};
export const BigStrip: React.FC<{g: BigG; at: number; lit?: number[]; o?: number}> = ({g, at, lit = [], o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	const size = g.size ?? 42;
	return (
		<g opacity={p}>
			{STEPS.map((s, i) => {
				const b = bigBox(g, i);
				const on = clamp01(lit[i] ?? 0) > 0.5;
				return (
					<g key={s}>
						<rect x={b.x} y={b.y} width={b.w} height={b.h} rx={b.h / 2} fill={on ? '#eef7f7' : '#f3f2ee'} stroke={on ? TEAL : GREYT} strokeWidth={on ? 4.5 : 2.5} />
						<Sx x={b.x + b.w / 2} y={b.y + b.h / 2 + size * 0.34} text={s} size={size} color={on ? TEAL : GREY_INK} hand weight={700} anchor="middle" at={-100} />
						{i < 3 ? <path d={`M${b.x + b.w + 2},${b.y + b.h / 2} l12,0`} stroke={GREYT} strokeWidth={4} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** A teal drug block that drops onto step i of the big strip (k stacks a second block above). */
export const BigBlock: React.FC<{g: BigG; i: number; at: number; k?: number; label: string; o?: number; pulseAt?: number[]}> = ({g, i, at, k = 0, label, o = 1, pulseAt = []}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	const b = bigBox(g, i);
	const drop = (1 - smooth(prog(f, at, 16))) * 60;
	const y = b.y - 62 - k * 62 - drop;
	const w = Math.min(b.w, tw(label, 34, true) * 1.06 + 40);
	const pu = pulseAt.reduce((m, t) => Math.max(m, pulse(f, t, 36)), 0);
	return (
		<g opacity={p}>
			{pu > 0.01 ? <rect x={b.x + b.w / 2 - w / 2 - 10} y={y - 10} width={w + 20} height={72} rx={18} fill={TEAL} opacity={0.25 * pu} /> : null}
			<rect x={b.x + b.w / 2 - w / 2} y={y} width={w} height={52} rx={14} fill={TEAL} />
			<Sx x={b.x + b.w / 2} y={y + 37} text={label} size={34} color="#fffdf8" hand weight={700} anchor="middle" at={-100} />
		</g>
	);
};
/** A hand label with a thin leader line to a point. */
export const Lead: React.FC<{x: number; y: number; to: Pt; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, to, text, at, out, size = 38, color = INK, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	const w = tw(text, size, true) * 1.06;
	const lx = anchor === 'end' ? x : anchor === 'middle' ? x : x;
	const ly = y - size * 0.32;
	const sx0 = anchor === 'end' ? lx + 10 : anchor === 'middle' ? lx : lx - 10;
	void w;
	return (
		<g opacity={o}>
			<line x1={sx0} y1={ly} x2={to[0]} y2={to[1]} stroke={INK_SOFT} strokeWidth={3} />
			<circle cx={to[0]} cy={to[1]} r={6} fill={INK_SOFT} />
			<Sx x={x} y={y} text={text} size={size} color={color} hand weight={700} anchor={anchor} at={-100} />
		</g>
	);
};
/** A ring on a plate point. */
const TR: React.FC<{p: Pt; at: number; out?: number; r?: number; grey?: boolean; lit?: number}> = ({p, at, out, r = 34, grey = false, lit = 0}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{lit > 0.01 ? <circle cx={p[0]} cy={p[1]} r={r * 1.6} fill={AMBER} opacity={0.25 * lit} /> : null}
			<circle cx={p[0]} cy={p[1]} r={r} fill="none" stroke={grey ? GREYT : AMBER} strokeWidth={6} strokeDasharray={grey ? '9 7' : undefined} />
		</g>
	);
};

// ---------- 2. Selective toxicity: the pathogen beside one of your cells ----------
const K2 = cues(S('selective-toxicity'), {rule: 'seen the rule', harms: 'harms the pathogen', pathogen: 'the pathogen much', host: 'than the host', sel: 'selective toxicity', hits: 'drug hits something', yours: "your cells don't", form: 'different form', whole: 'a whole cell', plenty: 'plenty of parts'});
const SB = {cx: 520, cy: 470, w: 820};
const SC = {cx: 1440, cy: 470, w: 500};
const sbPt = (uv: Pt) => pp(PLATES.bac, SB.cx, SB.cy, SB.w, uv);
export const SceneSelectiveBig: React.FC = () => {
	const f = useCurrentFrame();
	const blink = (i: number) => pulse(f, K2.plenty + 6 + i * 8, 30);
	const ring = [FEAT.wall, FEAT.ribo, FEAT.dna, FEAT.folate].map(sbPt);
	return (
		<>
			<Heading text="Why do antibiotics and antivirals work differently?" at={-100} size={50} />
			<Overlay>
				<rect x={60} y={170} width={920} height={640} rx={26} fill="#fffaf0" stroke={AMBER} strokeWidth={3} opacity={prog(f, 0, 12)} />
				<rect x={1010} y={170} width={850} height={640} rx={26} fill={CARD} stroke={EDGE} strokeWidth={3} opacity={prog(f, 0, 12)} />
				<Pl p={PLATES.bac} cx={SB.cx} cy={SB.cy} w={SB.w} o={prog(f, 0, 14)} dim={1 - prog(f, K2.pathogen, 12)} />
				<Pl p={PLATES.animal} cx={SC.cx} cy={SC.cy} w={SC.w} o={prog(f, 0, 14)} dim={1 - prog(f, K2.host, 12)} />
				<Sx x={90} y={226} text="pathogen: a bacterium" size={44} color={AMBER_INK} hand at={K2.pathogen} />
				<Sx x={1040} y={226} text="host: one of your cells" size={44} color={INK} hand at={K2.host} />
				<GTag x={600} y={182} text="drawn far larger than real" at={K2.pathogen + 10} size={26} />
				<CTag x={960} y={850} text="selective toxicity: harms the pathogen much more than the host" at={K2.sel} color={AMBER_INK} size={46} maxW={1700} anchor="middle" />
				<TR p={ring[0]} at={K2.hits + 6} r={40} />
				<Lead x={300} y={770} to={[ring[0][0], ring[0][1] + 34]} text="cell wall: you have none" at={K2.yours} size={38} color={AMBER_INK} />
				<circle cx={SC.cx} cy={SC.cy} r={SC.w * 0.5} fill="none" stroke={GREYT} strokeWidth={5} strokeDasharray="12 9" opacity={prog(f, K2.yours, 12)} />
				<Sx x={1040} y={770} text="no wall" size={40} color={GREY_INK} hand at={K2.yours + 6} />
				<TR p={ring[1]} at={K2.form} r={34} />
				<Sx x={1250} y={770} text="ribosomes: a different form" size={40} color={INK} hand at={K2.form + 4} />
				{ring.map((p, i) => <TR key={i} p={p} at={K2.plenty + i * 8} r={30} lit={blink(i)} />)}
				<Sx x={90} y={1010} text="a bacterium is a whole cell: plenty of its parts differ from ours" size={44} color={AMBER_INK} hand at={K2.whole} />
			</Overlay>
		</>
	);
};

// ---------- 3. Two antibiotic targets ----------
const K3 = cues(S('antibiotic-targets'), {pen: 'Penicillin stops', wall: 'its cell wall', mesh: 'a tough mesh', swell: 'swelling and bursting', cant: 'strengthen its wall', water: 'water rushes in', bursts: 'the cell bursts', nowall: 'have no wall', alone: 'leaves them alone', jam: 'jam bacterial ribosomes', shaped: 'shaped differently', proteins: 'make proteins'});
const AB = {cx: 580, cy: 500, w: 1000};
const abPt = (uv: Pt) => pp(PLATES.bac, AB.cx, AB.cy, AB.w, uv);
export const SceneTargetsBig: React.FC = () => {
	const f = useCurrentFrame();
	const burst = prog(f, K3.bursts - 6, 16) * (1 - prog(f, K3.jam, 16));
	const wall = abPt(FEAT.wall), ribo = abPt(FEAT.ribo);
	const meshO = 1 - prog(f, K3.nowall, 14);
	return (
		<>
			<Heading text="How antibiotics hit bacteria" at={-100} size={50} />
			<Overlay>
				<PlateB p={PLATES.bac} cx={AB.cx} cy={AB.cy} w={AB.w} o={1 - burst} />
				<PlateB p={PLATES.burst} cx={AB.cx} cy={AB.cy} w={AB.w} o={burst} />
				<GTag x={90} y={180} text="a bacterium, drawn far larger than real" at={-100} size={26} />
				<TR p={wall} at={K3.wall} r={44} lit={vis(f, K3.wall, K3.jam, 10)} out={K3.jam} />
				<DrugChip a={[1500, 220]} b={[wall[0] + 170, wall[1] - 80]} at={K3.pen} text="penicillin" mark="tick" markAt={K3.wall + 20} dim={prog(f, K3.jam, 10)} size={40} out={K3.jam + 20} />
				<Mesh x={1240} y={290} w={600} h={260} at={K3.mesh} gaps={prog(f, K3.cant + 6, 16)} o={meshO} />
				<Sx x={1240} y={600} text="wall: a tough mesh" size={42} color={AMBER_INK} hand at={K3.mesh + 6} out={K3.nowall} />
				<Sx x={1240} y={650} text="penicillin stops it being built" size={38} color={INK} hand at={K3.cant} out={K3.nowall} />
				<Osmosis cx={AB.cx} cy={AB.cy} rx={400} ry={190} at={K3.water} o={vis(f, K3.water, K3.nowall, 12)} n={10} />
				<Sx x={130} y={900} text="water rushes in (osmosis)" size={44} color="#3f78ad" hand at={K3.water + 4} out={K3.jam} />
				<Sx x={1240} y={790} text="the cell bursts" size={72} color={AMBER_INK} hand at={K3.bursts} out={K3.nowall} />
				{/* your cells: no wall */}
				<Pl p={PLATES.animal} cx={1430} cy={460} w={300} o={vis(f, K3.nowall, K3.jam, 12)} />
				<TickMark x={1610} y={340} at={K3.alone} ok s={30} />
				<Sx x={1250} y={680} text="your cells: no wall," size={44} color={INK} hand at={K3.nowall + 4} out={K3.jam} />
				<Sx x={1250} y={732} text="so penicillin leaves them alone" size={40} color={INK} hand at={K3.alone} out={K3.jam} />
				{/* the ribosome */}
				<TR p={ribo} at={K3.jam} r={40} lit={vis(f, K3.jam + 10, K3.proteins + 30, 10)} />
				<Pl p={PLATES.ribosome} cx={1500} cy={400} w={300} o={prog(f, K3.jam + 10, 14)} />
				<Sx x={1270} y={680} text="bacterial ribosome (70S)" size={42} color={AMBER_INK} hand at={K3.jam + 16} />
				<Sx x={1270} y={730} text="ours: 80S, shaped differently" size={38} color={INK} hand at={K3.shaped} />
				<DrugChip a={[1500, 860]} b={[ribo[0] + 200, ribo[1] + 90]} at={K3.jam + 4} text="tetracycline" mark="tick" markAt={K3.jam + 28} size={40} />
				<Chain x={1290} y={600} at={K3.jam + 40} stopAt={K3.proteins + 6} />
				<Sx x={1520} y={616} text="no proteins" size={44} color={AMBER_INK} hand at={K3.proteins + 10} />
				<GTag x={90} y={980} text="another bacterium" at={K3.jam + 10} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 4. Nothing to hit in a virus ----------
const K4 = cues(S('no-target-in-virus'), {virus: 'look at a virus', genes: 'genes in a', coat: 'protein coat', nowall: 'no wall and', noribo: 'no ribosomes', inside: 'Inside your cell', uses: "uses your cell's", make: 'make new viruses', nothing: 'nothing in the', throat: 'throat and gut', cold: 'for a cold', help: 'help resistant'});
const VC = {cx: 760, cy: 520, w: 560};
const AC = {cx: 760, cy: 560, h: 780};
export const SceneNoTargetBig: React.FC = () => {
	const f = useCurrentFrame();
	const aw = wOfH(PLATES.cell, AC.h);
	const top = pp(PLATES.cell, AC.cx, AC.cy, aw, FEAT.airTop);
	const inn = pp(PLATES.cell, AC.cx, AC.cy, aw, FEAT.airIn);
	const go = smooth(prog(f, K4.inside, 30));
	const vx = lerp(VC.cx, top[0], go), vy = lerp(VC.cy, top[1] + 30, go), vw = lerp(VC.w, 80, go);
	const cellO = prog(f, K4.inside + 6, 16);
	const inf = prog(f, K4.uses + 10, 20);
	const vk = vw / (PLATES.virus.box[2] - PLATES.virus.box[0]);
	const vpt = (u: number, v: number): Pt => [vx + (u - 1000) * vk, vy + (v - 1000) * vk];
	const pop = popGrid(16, 4, 1270, 300, 150, 120, 9);
	const RING = [5, 10];
	const fadeP = prog(f, K4.help, 16);
	const grow = prog(f, K4.help + 14, 30);
	const tagsOut = K4.inside;
	return (
		<>
			<Heading text="Why antibiotics miss viruses" at={-100} size={50} />
			<Overlay>
				<PlateB p={PLATES.cell} cx={AC.cx} cy={AC.cy} w={aw} o={cellO * (1 - inf)} />
				<PlateB p={PLATES.infected} cx={AC.cx} cy={AC.cy} w={aw} o={cellO * inf} />
				<Pl p={PLATES.virus} cx={lerp(-300, vx, smooth(prog(f, K4.virus - 10, 24)))} cy={vy} w={vw} o={prog(f, K4.virus - 10, 12) * (1 - prog(f, K4.inside + 40, 12))} />
				<GTag x={420} y={190} text="a virus, drawn far larger than real" at={K4.virus} out={tagsOut} size={26} />
				<Lead x={1140} y={430} to={vpt(1250, 1000)} text="genes (RNA)" at={K4.genes} out={tagsOut} size={44} color={INK} />
				<Lead x={1140} y={560} to={vpt(1480, 1300)} text="a protein coat" at={K4.coat} out={tagsOut} size={44} color={INK} />
				<g opacity={vis(f, K4.nowall, tagsOut, 10)}>
					<Sx x={1140} y={700} text="no wall" size={48} color={GREY_INK} hand />
					<DrawPath d="M1130,686 L1320,682" at={K4.nowall + 8} dur={10} color={GREYT} width={6} />
				</g>
				<g opacity={vis(f, K4.noribo, tagsOut, 10)}>
					<Sx x={1140} y={780} text="no ribosomes" size={48} color={GREY_INK} hand />
					<DrawPath d="M1130,766 L1430,762" at={K4.noribo + 8} dur={10} color={GREYT} width={6} />
				</g>
				<Sx x={180} y={250} text="inside your cell" size={44} color={INK} hand at={K4.inside + 20} />
				{f >= K4.make ? <PlainArrow x1={inn[0]} y1={inn[1]} x2={top[0]} y2={top[1] + 50} at={K4.make} color={INK_SOFT} width={5} /> : null}
				<Sx x={130} y={560} text="your cell's" size={42} color={INK} hand at={K4.uses + 10} />
				<Sx x={130} y={610} text="ribosomes build" size={42} color={INK} hand at={K4.uses + 14} />
				<Sx x={130} y={660} text="new viruses" size={42} color={INK} hand at={K4.make} />
				<Released from={top} at={K4.make + 10} n={5} />
				<DrugChip a={[300, 960]} b={[top[0] - 140, top[1] + 120]} at={K4.nothing} text="penicillin" mark="cross" markAt={K4.nothing + 24} size={36} out={K4.throat} />
				<DrugChip a={[300, 1020]} b={[top[0] - 140, top[1] + 220]} at={K4.nothing + 6} text="tetracycline" mark="cross" markAt={K4.nothing + 30} size={36} out={K4.throat} />
				<Sx x={130} y={960} text="nothing in the virus to hit" size={46} color={AMBER_INK} hand at={K4.nothing + 30} />
				{/* the bacteria living in the throat and gut */}
				<Sx x={1250} y={230} text="bacteria in your throat and gut" size={42} color={INK} hand at={K4.throat} />
				{pop.map((p, i) => (RING.includes(i) ? null : <Bact key={i} cx={p[0]} cy={p[1]} w={120} o={prog(f, K4.throat + i, 8) * (1 - fadeP)} />))}
				{RING.map((ri, k) => Array.from({length: 4}, (_, j) => {
					const base = pop[ri];
					const p: Pt = j === 0 ? base : [base[0] + ((j % 2) * 2 - 1) * 110 * grow, base[1] + (j > 1 ? 90 : -90) * grow];
					return <Bact key={`${k}-${j}`} cx={p[0]} cy={p[1]} w={120} ring="new" o={j === 0 ? prog(f, K4.throat + ri, 8) : grow} />;
				}))}
				<CTag x={1250} y={820} text="antibiotics for a cold: resistant bacteria multiply" at={K4.help + 20} color={AMBER_INK} size={40} maxW={600} />
			</Overlay>
		</>
	);
};

// ---------- 5. Antivirals block a step ----------
const K5 = cues(S('antiviral-steps'), {how: 'how can any', tools: 'few tools of', flu: 'Flu carries', neura: 'called neuraminidase', cuts: 'cuts new viruses', osel: 'Oseltamivir blocks', stuck: 'stay stuck', cant: "can't infect more", copying: 'copying enzyme', getting: 'getting into a', viral: 'viral enzymes like', part: 'a part of', receptor: 'entry receptor'});
export const ZB = {cx: 330, cy: 540, h: 800};
export const GB: BigG = {x: 660, y: 930, w: 1180, h: 84, size: 42};
export const SceneStepsBig: React.FC = () => {
	const f = useCurrentFrame();
	const aw = wOfH(PLATES.cell, ZB.h);
	const blocked = prog(f, K5.osel + 10, 20);
	const top = pp(PLATES.cell, ZB.cx, ZB.cy, aw, FEAT.airTop), side = pp(PLATES.cell, ZB.cx, ZB.cy, aw, FEAT.airSide);
	const pAll = [K5.viral + 4];
	const vO = prog(f, K5.how, 14);
	return (
		<>
			<Heading text="Antivirals block a step the virus needs" at={4} size={50} />
			<Overlay>
				<PlateB p={PLATES.infected} cx={ZB.cx} cy={ZB.cy} w={aw} o={1 - blocked} />
				<PlateB p={PLATES.blocked} cx={ZB.cx} cy={ZB.cy} w={aw} o={blocked} />
				<GTag x={90} y={1000} text="infected airway cell" at={6} size={26} />
				<Released from={top} at={K5.cuts} n={5} o={1 - blocked} />
				<Pl p={PLATES.virus} cx={900} cy={360} w={340} o={vO * (1 - prog(f, K5.osel - 10, 14))} />
				{[[-110, -70], [110, -40], [0, 130]].map(([dx, dy], i) => <TR key={i} p={[900 + dx, 360 + dy]} at={K5.tools + i * 6} r={26} out={K5.osel - 10} />)}
				<Sx x={1110} y={260} text="viruses bring a few tools" size={42} color={INK} hand at={K5.tools + 10} out={K5.neura} />
				<CTag x={1110} y={200} text="flu's neuraminidase: cuts new viruses free" at={K5.neura} color={TEAL} size={42} maxW={720} dim={prog(f, K5.copying, 10)} />
				<BigStrip g={GB} at={10} lit={[vis(f, K5.getting, K5.viral, 10), vis(f, K5.copying, K5.getting, 10), 0, vis(f, K5.neura, K5.copying, 10)]} />
				<BigBlock g={GB} i={3} at={K5.osel + 4} label="oseltamivir" pulseAt={pAll} />
								<Sx x={560} y={420} text="new viruses stay stuck" size={46} color={TEAL} hand at={K5.stuck} />
				<Sx x={560} y={472} text="and can't infect more cells" size={40} color={INK} hand at={K5.cant} />
				<BigBlock g={GB} i={1} at={K5.copying + 4} label="copy blocker" pulseAt={pAll} />
				<CTag x={1110} y={540} text="block the virus's copying enzyme (aciclovir: herpes)" at={K5.copying + 10} color={TEAL} size={38} maxW={720} />
				<BigBlock g={GB} i={0} at={K5.getting + 4} label="entry blocker" pulseAt={pAll} />
				<CTag x={1110} y={680} text="or stop it getting into a cell" at={K5.getting + 10} color={TEAL} size={38} maxW={720} />
				<TR p={side} at={K5.part + 6} r={34} grey />
				<Sx x={560} y={800} text="some block your cell's entry receptor" size={38} color={GREY_INK} hand at={K5.receptor} />
				{void DrawPath}
			</Overlay>
		</>
	);
};

// ---------- 6. Stopping new viruses, not old ones ----------
const K6 = cues(S('stop-new-viruses'), {dont: "don't destroy virus", exist: 'already exist', stop: 'They stop new', early: 'helps most early', before: 'before the virus', millions: 'millions of airway', narrow: 'Most antivirals are', several: 'several virus families', fewer: 'far fewer antivirals'});
const FD = {x0: 820, x1: 1820, y: 860};
const fdx = (d: number) => lerp(FD.x0, FD.x1, d / 7);
const CellRow: React.FC<{x: number; y: number; n: number; inf: number; h: number; o: number}> = ({x, y, n, inf, h, o}) => (o <= 0.01 ? null : (
	<g opacity={o}>{Array.from({length: n}, (_, i) => <PlateB key={i} p={i < inf ? PLATES.infected : PLATES.cell} cx={x + i * wOfH(PLATES.cell, h) * 0.92} cy={y} w={wOfH(PLATES.cell, h)} />)}</g>
));
export const SceneStopNewBig: React.FC = () => {
	const f = useCurrentFrame();
	const aw = wOfH(PLATES.cell, ZB.h);
	const top = pp(PLATES.cell, ZB.cx, ZB.cy, aw, FEAT.airTop);
	const tl = vis(f, K6.early, K6.fewer, 12);
	const bw = fitW(PLATES.blister, 150, 110);
	return (
		<>
			<Heading text="Stopping new viruses, not old ones" at={4} size={50} />
			<Overlay>
				<PlateB p={PLATES.blocked} cx={ZB.cx} cy={ZB.cy} w={aw} />
				<Released from={top} at={-400} n={5} />
				<TR p={[top[0] + 230, top[1] - 75]} at={K6.exist} r={72} />
				<Sx x={720} y={230} text="already made: untouched" size={46} color={TEAL} hand at={K6.exist} out={K6.early} />
				<Pl p={PLATES.macrophage} cx={960} cy={420} w={330} o={vis(f, K6.dont + 24, K6.early, 12)} />
				<Sx x={1150} y={430} text="your immune system clears these" size={40} color={INK} hand at={K6.dont + 30} out={K6.early} />
				<CTag x={660} y={560} text="antivirals stop new viruses being made or released" at={K6.stop} color={TEAL} size={42} maxW={1100} out={K6.early} />
				<g opacity={1 - prog(f, K6.early - 6, 10)}><MistakeChip x={660} y={720} text="antivirals kill viruses like antibiotics kill bacteria" at={K6.stop + 20} cross={K6.stop + 60} size={34} /></g>
				{/* flu: early matters */}
				<g opacity={tl}>
					<line x1={FD.x0} x2={FD.x1} y1={FD.y} y2={FD.y} stroke={GREY_INK} strokeWidth={4} />
					{Array.from({length: 8}, (_, d) => <g key={d}><line x1={fdx(d)} x2={fdx(d)} y1={FD.y} y2={FD.y + 12} stroke={GREY_INK} strokeWidth={4} /><Sx x={fdx(d)} y={FD.y + 46} text={`${d}`} size={32} color={GREY_INK} weight={600} anchor="middle" at={-100} /></g>)}
					<Sx x={FD.x1} y={FD.y + 92} text="days after first symptoms" size={32} color={GREY_INK} weight={600} anchor="end" at={-100} />
					<DrawPath d={`M${fdx(0)},${FD.y - 14} L${fdx(0)},${FD.y - 30} L${fdx(2)},${FD.y - 30} L${fdx(2)},${FD.y - 14}`} at={K6.early + 6} dur={12} color={TEAL} width={6} />
					<Sx x={fdx(1)} y={FD.y - 44} text="start early" size={40} color={TEAL} hand anchor="middle" at={K6.early + 12} />
					<Sx x={820} y={230} text="flu: the antiviral helps most early" size={46} color={TEAL} hand at={K6.early} />
				</g>
				<CellRow x={fdx(1) - 30} y={FD.y - 230} n={2} inf={1} h={250} o={tl * prog(f, K6.before, 12)} />
				<CellRow x={fdx(3)} y={FD.y - 230} n={6} inf={5} h={250} o={tl * prog(f, K6.millions, 12)} />
				<Sx x={fdx(3) - 40} y={FD.y - 380} text="later: millions of cells infected" size={40} color={AMBER_INK} hand at={K6.millions + 6} out={K6.fewer} />
				<CTag x={820} y={300} text="most are narrow: oseltamivir works on flu only" at={K6.narrow} color={TEAL} size={38} maxW={1000} dim={prog(f, K6.fewer, 10)} out={K6.fewer} />
				<Sx x={820} y={420} text="each disease still needs its own evidence" size={36} color={INK} hand at={K6.several + 20} out={K6.fewer} />
				{/* far fewer antivirals */}
				<g opacity={prog(f, K6.fewer, 14)}>
					<Sx x={820} y={600} text="antibiotics" size={44} color={AMBER_INK} hand />
					{Array.from({length: 7}, (_, i) => <Pl key={i} p={PLATES.blister} cx={900 + i * 140} cy={690} w={bw} o={prog(f, K6.fewer + i * 3, 8)} />)}
					<Sx x={820} y={820} text="antivirals" size={44} color={TEAL} hand />
					{Array.from({length: 2}, (_, i) => <Pl key={i} p={PLATES.blister} cx={900 + i * 140} cy={910} w={bw} o={prog(f, K6.fewer + 20 + i * 3, 8)} />)}
					<Sx x={1220} y={920} text="safe targets are rare" size={44} color={INK} hand />
					<GTag x={1220} y={960} text="rough comparison, not to scale" at={K6.fewer + 30} size={26} />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 7. Resistance: selected, then shared ----------
const K7 = cues(S('resistance'), {both: 'Both kinds of', stops: 'stops the microbes', few: 'the few that', survive: 'survive and multiply', selects: 'drug selects resistance', create: "doesn't create it", pass: 'pass resistance genes', plasmids: 'on plasmids', species: 'different species', never: 'never the person'});
/** 24 large bacteria (b6a's painted bacterium); two already carry resistance (amber ring). */
const POP7 = popGrid(24, 6, 150, 280, 140, 120, 5);
const RES7 = [8, 15];
const BigPop: React.FC<{fade: number; fill: number}> = ({fade, fill}) => (
	<g>
		{POP7.map((p, i) => {
			if (RES7.includes(i)) return <Bact key={i} cx={p[0]} cy={p[1]} w={118} ring="new" />;
			const late = clamp01(fill * 1.4 - (i % 7) * 0.06);
			return (
				<g key={i}>
					<Bact cx={p[0]} cy={p[1] + fade * 30} w={118} o={1 - fade} grey={fade} />
					{late > 0.01 ? <Bact cx={p[0]} cy={p[1]} w={118} ring="new" o={late} /> : null}
				</g>
			);
		})}
	</g>
);
export const SceneResistanceBig: React.FC = () => {
	const f = useCurrentFrame();
	const fade = prog(f, K7.stops, 24);
	const fill = prog(f, K7.survive + 10, 50);
	const day = f < K7.stops ? 0 : f < K7.survive ? 1 : lerp(2, 3, prog(f, K7.survive + 20, 30));
	const cw = 860;
	const plas = pp(PLATES.conj, 1420, 420, cw, FEAT.plasmidBridge);
	const agarO = 1 - prog(f, K7.pass - 10, 14);
	const after = prog(f, K7.stops + 10, 20);
	return (
		<>
			<Heading text="Resistance: selected, then shared" at={4} size={50} />
			<Overlay>
				<BigPop fade={fade} fill={fill} />
				<DayStrip x={110} y={720} w={820} labels={['day 0', 'day 1', 'day 2', 'day 3']} active={day} size={36} />
				<Sx x={110} y={840} text="a few already carried resistance" size={42} color={AMBER_INK} hand at={K7.few} />
				<Sx x={110} y={940} text="The drug selects resistance." size={58} color={AMBER_INK} hand at={K7.selects} />
				<Sx x={110} y={1012} text="It doesn't create it." size={58} color={AMBER_INK} hand at={K7.create} />
				{/* the same on an agar plate */}
				<g opacity={agarO}>
					<PlateB p={PLX.before} cx={1430} cy={460} w={520} o={1 - after} />
					<PlateB p={PLX.after} cx={1430} cy={460} w={520} o={after} />
					<Sx x={1430} y={790} text={f < K7.stops + 10 ? 'colonies before the drug' : 'after: the resistant few'} size={42} color={f < K7.stops + 10 ? INK : AMBER_INK} hand anchor="middle" at={-100} />
					<Sx x={1430} y={850} text="then they multiply" size={42} color={AMBER_INK} hand anchor="middle" at={K7.survive} />
				</g>
				{/* plasmids */}
				<Sx x={1000} y={220} text="bacteria pass resistance genes" size={44} color={INK} hand at={K7.pass + 4} />
				<Pl p={PLATES.conj} cx={lerp(1900, 1420, smooth(prog(f, K7.pass, 22)))} cy={420} w={cw} o={prog(f, K7.pass, 14)} />
				{pulse(f, K7.plasmids + 4, 40) > 0.01 ? <circle cx={plas[0]} cy={plas[1]} r={50} fill={TEAL} opacity={0.3 * pulse(f, K7.plasmids + 4, 40)} /> : null}
				<CTag x={1000} y={590} text="on plasmids: small loops of DNA" at={K7.plasmids + 6} color={TEAL} size={42} maxW={840} />
				<Sx x={1000} y={740} text="even between different species" size={44} color={INK} hand at={K7.species} />
				<MistakeChip x={1000} y={830} text="my body is resistant" at={K7.never - 10} cross={K7.never + 10} size={40} />
				<Sx x={1000} y={980} text="the bacteria become resistant, never the person" size={42} color={AMBER_INK} hand at={K7.never + 20} />
			</Overlay>
		</>
	);
};

// ---------- 8. Three drugs at once ----------
const K8 = cues(S('combination'), {billions: 'billions of times', errors: 'frequent copying errors', variants: 'resistant variants keep', one: 'one drug at', combined: 'combined three drugs', steps: 'two different steps', all: 'all three at', unlikely: 'very unlikely'});
const G8: BigG = {x: 300, y: 640, w: 1320, h: 84, size: 42};
const sb8 = (i: number) => G8.x + (i + 0.5) * (G8.w / 4);
const COPIES = Array.from({length: 36}, (_, i) => [640 + (i % 12) * 100 + (Math.floor(i / 12) % 2) * 40, 230 + Math.floor(i / 12) * 100] as Pt);
const VAR = [4, 17, 26, 33];
export const SceneCombinationBig: React.FC = () => {
	const f = useCurrentFrame();
	const reset = prog(f, K8.combined - 6, 10);
	const v1 = f < K8.one + 30 ? -1 : clamp01((f - K8.one - 30) / 60);
	const v2 = f < K8.all ? -1 : clamp01((f - K8.all) / 70);
	const vx = (u: number, stopAt?: number) => lerp(G8.x - 80, stopAt ?? G8.x + G8.w + 80, u);
	const vy = G8.y + 200;
	const fieldO = 1 - 0.7 * prog(f, K8.one, 14) - 0.3 * prog(f, K8.combined - 10, 10);
	const V: React.FC<{x: number; y: number; w?: number; halo?: boolean}> = ({x, y, w = 80, halo = true}) => (
		<g>{halo ? <circle cx={x} cy={y} r={w * 0.62} fill={AMBER} opacity={0.3} /> : null}<Pl p={PLATES.virus} cx={x} cy={y} w={w} /></g>
	);
	return (
		<>
			<Heading text="Three drugs at once" at={4} size={50} />
			<Overlay>
				<Pl p={PLATES.virus} cx={290} cy={360} w={300} o={prog(f, 0, 14) * fieldO} />
				<GTag x={150} y={540} text="stands for HIV" at={6} out={K8.combined - 10} size={28} />
				<g opacity={fieldO}>
					{COPIES.map((p, i) => <g key={i} opacity={prog(f, K8.billions + i * 0.8, 6)}>{VAR.includes(i) && f >= K8.errors + 10 ? <circle cx={p[0]} cy={p[1]} r={44} fill={AMBER} opacity={0.35} /> : null}<Pl p={PLATES.virus} cx={p[0]} cy={p[1]} w={70} /></g>)}
				</g>
				<Sx x={640} y={560} text="billions of new copies a day" size={44} color={INK} hand at={K8.billions + 10} out={K8.one} />
				<Sx x={1240} y={560} text="copying errors: variants" size={44} color={AMBER_INK} hand at={K8.errors + 10} out={K8.one} />
				<BigStrip g={G8} at={4} lit={[0, 1, reset, 0]} />
				<BigBlock g={G8} i={1} at={K8.one + 6} label="drug 1" o={1 - reset} />
				{v1 >= 0 ? (
					<g opacity={1 - reset}>
						<V x={vx(v1)} y={vy} />
						{v1 > 0.5 ? <TickMark x={sb8(1)} y={vy - 80} at={K8.one + 60} ok s={26} /> : null}
						{v1 >= 1 ? [1, 2, 3].map(k => <Pl key={k} p={PLATES.virus} cx={vx(1) - k * 90} cy={vy + 90} w={64} />) : null}
					</g>
				) : null}
				<CTag x={300} y={980} text="one drug at a time: resistant variants survive and spread" at={K8.one + 80} color={AMBER_INK} size={40} maxW={1300} out={K8.combined - 6} />
				<BigBlock g={G8} i={1} at={K8.combined + 4} label="drug A" />
				<BigBlock g={G8} i={1} k={1} at={K8.combined + 14} label="drug B" />
				<BigBlock g={G8} i={2} at={K8.combined + 24} label="drug C" />
				<Sx x={300} y={300} text="from 1996: three drugs," size={50} color={TEAL} hand at={K8.combined} />
				<Sx x={300} y={360} text="at least two different steps" size={50} color={TEAL} hand at={K8.steps} />
				{v2 >= 0 ? (
					<g>
						<V x={vx(v2, sb8(2) - 60)} y={vy} />
						{v2 > 0.45 ? <TickMark x={sb8(1) - 40} y={vy - 80} at={K8.all + 30} ok s={26} /> : null}
						{v2 > 0.55 ? <TickMark x={sb8(1) + 40} y={vy - 80} at={K8.all + 38} ok s={26} /> : null}
						{v2 >= 1 ? <TickMark x={sb8(2)} y={vy - 80} at={K8.all + 70} ok={false} s={32} /> : null}
					</g>
				) : null}
				<Sx x={300} y={1010} text="resistance to all three at once: very unlikely" size={48} color={AMBER_INK} hand at={K8.unlikely} />
				{void K8.variants}
			</Overlay>
		</>
	);
};

// ---------- 9. Using drugs well ----------
const K9 = cues(S('use-well'), {start: 'resistance spreads fastest', viral: 'for viral infections', farm: 'healthy farm animals', exactly: 'exactly as prescribed', share: 'never share leftovers', reserve: 'in reserve', nothing: 'nothing else can'});
export const SceneUseWellBig: React.FC = () => {
	const f = useCurrentFrame();
	const cards: {at: number; text: string; sub: string; p: PB; cross?: boolean}[] = [
		{at: K9.viral, text: 'not for viral infections', sub: 'nothing to hit', p: PLATES.virus, cross: true},
		{at: K9.farm, text: 'not routinely for healthy farm animals', sub: 'less use, less selection', p: PLX.pig},
		{at: K9.exactly, text: 'exactly as prescribed', sub: 'never share leftovers', p: PLATES.blister},
		{at: K9.reserve, text: 'some kept in reserve', sub: 'for infections nothing else can treat', p: PLX.bed},
	];
	return (
		<>
			<Heading text="Using drugs well" at={4} size={50} />
			<Overlay>
				<Sx x={90} y={250} text="Resistance spreads fastest where drugs are used the most." size={48} color={AMBER_INK} hand at={K9.start} />
				{cards.map((c, i) => {
					const x = 80 + (i % 2) * 900, y = 300 + Math.floor(i / 2) * 360;
					const on = prog(f, c.at, 12);
					const cur = vis(f, c.at, cards[i + 1]?.at ?? 1e9, 10) > 0.5;
					return (
						<g key={i} opacity={prog(f, K9.start, 14)}>
							<rect x={x} y={y} width={860} height={320} rx={28} fill={cur ? '#fff3d9' : CARD} stroke={on > 0.5 ? AMBER : EDGE} strokeWidth={on > 0.5 ? 4 : 2.5} />
							<Pl p={c.p} cx={x + 170} cy={y + 160} w={fitW(c.p, 270, 240)} dim={1 - on} />
							{c.cross ? <TickMark x={x + 290} y={y + 70} at={c.at + 10} ok={false} s={28} /> : null}
							<g opacity={on}>
								<WText x={x + 340} y={y + 120} text={c.text} size={48} maxW={490} color={INK} hand weight={700} />
								<Sx x={x + 340} y={y + 270} text={c.sub} size={34} color={INK_SOFT} hand weight={700} at={c.at + 12} />
							</g>
						</g>
					);
				})}
			</Overlay>
		</>
	);
};

// ---------- 10. How effective are they? ----------
const K10 = cues(S('assess'), {judge: 'Judge them on', safely: 'how safely they', many: 'how many infections', long: 'how long they', lack: 'parts our cells', fits: 'fits the flu', spare: 'spare our cells', cure: 'cure most bacterial', narrower: 'Antivirals are narrower', hiv: 'for HIV, combinations', every: 'every use selects', careless: 'careless use can', y2021: 'In 2021', right: 'the right pathogen'});
const TX = {x: 50, c0: 420, cw: 700, y: 170, hh: 150, rh: 172};
export const SceneAssessBig: React.FC = () => {
	const f = useCurrentFrame();
	const verdict = prog(f, K10.right, 12);
	const rows = [
		{label: 'how safely?', at: K10.safely, cells: [{t: 'hit parts our cells lack or make differently', at: K10.lack + 6}, {t: 'oseltamivir fits the flu enzyme far better than ours', at: K10.fits + 6}]},
		{label: 'how many infections?', at: K10.many, cells: [{t: 'cure most bacterial infections', at: K10.cure + 6}, {t: 'narrower; HIV combinations control it for decades', at: K10.hiv + 6}]},
		{label: 'how long do they work?', at: K10.long, cells: [{t: 'every use selects resistant bacteria', at: K10.every + 6}, {t: 'every use selects resistant viruses', at: K10.every + 14}]},
	];
	const rAt = rows.map(r => r.cells[0].at);
	const lit = (i: number) => Math.max(vis(f, rAt[i], rAt[i + 1] ?? K10.y2021, 10), verdict);
	const colX = (c: number) => TX.x + TX.c0 + c * TX.cw;
	const W = TX.c0 + 2 * TX.cw;
	return (
		<>
			<Heading text="How effective are they?" at={4} size={50} />
			<Overlay>
				<rect x={TX.x} y={TX.y} width={W} height={TX.hh} rx={20} fill={CARD} stroke={EDGE} strokeWidth={2.5} opacity={prog(f, K10.judge, 12)} />
				<g opacity={prog(f, K10.judge, 12)}>
					<Pl p={PLATES.bac} cx={colX(0) + 150} cy={TX.y + TX.hh / 2} w={250} />
					<Sx x={colX(0) + 300} y={TX.y + TX.hh / 2 + 16} text="antibiotics" size={48} color={AMBER_INK} hand />
				</g>
				<g opacity={prog(f, K10.judge + 10, 12)}>
					<Pl p={PLATES.virus} cx={colX(1) + 90} cy={TX.y + TX.hh / 2} w={120} />
					<Sx x={colX(1) + 180} y={TX.y + TX.hh / 2 + 16} text="antivirals" size={48} color={TEAL} hand />
				</g>
				<Sx x={TX.x + 24} y={TX.y + TX.hh / 2 + 14} text="judge on" size={40} color={INK_SOFT} hand at={K10.judge} />
				{rows.map((r, i) => {
					const o = prog(f, r.at, 12);
					if (o <= 0.01) return null;
					const y = TX.y + TX.hh + 14 + i * (TX.rh + 12);
					const on = lit(i) > 0.5;
					return (
						<g key={i} opacity={o}>
							<rect x={TX.x} y={y} width={W} height={TX.rh} rx={20} fill={on ? '#fffaf0' : CARD} stroke={on ? AMBER : EDGE} strokeWidth={on ? 4 : 2.5} />
							<WText x={TX.x + 24} y={y + 64} text={r.label} size={44} maxW={TX.c0 - 40} color={INK} hand weight={700} />
							{r.cells.map((c, k) => <g key={k} opacity={prog(f, c.at, 10)}><WText x={colX(k) + 24} y={y + 62} text={c.t} size={40} maxW={TX.cw - 50} color={INK} hand weight={700} /></g>)}
						</g>
					);
				})}
				<CTag x={TX.x} y={880} text="2021: about 1.14 million deaths directly caused by resistant bacteria" at={K10.y2021 + 6} color={AMBER_INK} size={40} maxW={1500} dim={verdict} out={K10.right + 10} />
				<GTag x={TX.x + 1540} y={960} text="GRAM study, Lancet 2024" at={K10.y2021 + 16} out={K10.right + 10} size={26} />
				<CTag x={960} y={900} text="both work well: on the right pathogen, used carefully" at={K10.right + 10} color={AMBER_INK} size={52} anchor="middle" maxW={1700} />
				{void K10.spare}{void K10.careless}{void K10.narrower}
			</Overlay>
		</>
	);
};

// ---------- exam pictures (givens drawn as they are read) ----------
/** Item 1: the virus with its own V polymerase, a human cell with nothing like it, drug K on the enzyme, penicillin asked for. */
export const ItemOnePicture: React.FC<{virus: number; poly: number; human: number; drug: number; patient: number}> = ({virus, poly, human, drug, patient}) => {
	const f = useCurrentFrame();
	const cw = wOfH(PLATES.cell, 250);
	return (
		<g>
			<Pl p={PLATES.virus} cx={1320} cy={320} w={180} o={prog(f, virus, 12)} />
			<Sx x={1320} y={450} text="virus V" size={36} color={INK} hand anchor="middle" at={virus} />
			<g opacity={prog(f, poly, 12)}>
				<line x1={1412} y1={320} x2={1440} y2={320} stroke={TEAL} strokeWidth={4} />
				<rect x={1440} y={290} width={260} height={60} rx={14} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={3} />
				<Sx x={1570} y={331} text="V polymerase" size={34} color={TEAL} hand anchor="middle" at={-100} />
			</g>
			<g opacity={prog(f, drug, 12)} transform={`translate(0,${(1 - smooth(prog(f, drug, 18))) * -40})`}>
				<rect x={1495} y={222} width={150} height={56} rx={14} fill={TEAL} />
				<Sx x={1570} y={260} text="drug K" size={34} color="#fffdf8" hand anchor="middle" at={-100} />
			</g>
			<PlateB p={PLATES.cell} cx={1300} cy={620} w={cw} o={prog(f, human, 12)} />
			<Sx x={1390} y={540} text="human cell:" size={34} color={INK} hand at={human} />
			<Sx x={1390} y={582} text="no enzyme like it" size={34} color={INK} hand at={human + 6} />
			<g opacity={prog(f, patient, 12)}>
				<Sx x={1390} y={660} text="penicillin?" size={36} color={AMBER_INK} hand at={-100} />
				<Pl p={PLATES.blister} cx={1700} cy={660} w={170} />
			</g>
		</g>
	);
};
/** Item 2: ten billion particles a day; one in 100 000 resistant to A; the same for B and C; separately. */
export const ItemTwoPicture: React.FC<{tenB: number; one: number; same: number; sep: number}> = ({tenB, one, same, sep}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<g opacity={prog(f, tenB, 12)}>
				{Array.from({length: 10}, (_, i) => <Pl key={i} p={PLATES.virus} cx={1270 + (i % 5) * 90} cy={290 + Math.floor(i / 5) * 90} w={70} />)}
				<Sx x={1230} y={460} text="10¹⁰ new particles a day" size={36} color={INK} weight={700} at={-100} />
			</g>
			<g opacity={prog(f, one, 12)}>
				<circle cx={1450} cy={290} r={46} fill={AMBER} opacity={0.35} />
				<Sx x={1230} y={520} text="1 in 100 000 resistant to A" size={36} color={AMBER_INK} weight={700} at={-100} />
			</g>
			{['A', 'B', 'C'].map((d, i) => (
				<g key={d} opacity={prog(f, i ? same + (i - 1) * 6 : one, 12)}>
					<rect x={1240 + i * 190} y={560} width={160} height={60} rx={14} fill={TEAL} />
					<Sx x={1320 + i * 190} y={600} text={`drug ${d}`} size={34} color="#fffdf8" hand anchor="middle" at={-100} />
				</g>
			))}
			<Sx x={1230} y={670} text="each 1 in 100 000, separately" size={34} color={INK} hand at={sep} />
		</g>
	);
};

// ---------- key notes ----------
export const NOTES_BIG = [
	'Selective toxicity: a drug harms the pathogen much more than the host.',
	"Penicillin stops wall building, so growing bacteria burst; our cells have no wall.",
	'Other antibiotics block bacterial ribosomes (70S; ours are 80S).',
	'Viruses have no wall or ribosomes, so antibiotics have nothing to hit.',
	'Antivirals block a step the virus needs: entry, copying or release.',
	"They stop new viruses but don't destroy existing ones, so start early.",
	"The drug selects resistance; it doesn't create it. Bacteria share it on plasmids.",
	'Combination therapy (HIV): resistance to all three at once is very unlikely.',
];
void AMBER; void CARD; void GREYT; void PlainArrow; void Chain; void Mesh;
