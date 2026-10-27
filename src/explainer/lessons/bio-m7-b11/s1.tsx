// M7 B11 scenes 1 to 5: the hook (the flu virus, two blank blister packs: the antibiotic misses, the antiviral
// shortens illness if started early), selective toxicity (the bench with a bacterium and one of our cells), two
// antibiotic targets (penicillin and the wall: mesh gaps, osmosis, the aligned burst plate; tetracycline and the
// ribosome), nothing to hit in a virus (an airway cell making viruses; antibiotics still select resistant gut bacteria),
// and antivirals blocking a step (oseltamivir holds new viruses on the cell: the aligned release-blocked plate).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {FEAT, PLATES} from './assets';
import {
	AMBER, AMBER_INK, Bact, CTag, Chain, DrawPath, DrugChip, GREYT, GREY_INK, GTag, INK_SOFT, LB, LV, Lane, Mesh, MistakeChip, Osmosis, Pl, PlainArrow, PlateB, Ring, StepBlock, StepStrip, Sx,
	TEAL, TRing, TickMark, clamp01, fitW, lerp, popGrid, pp, prog, pulse, smooth, vis, wOfH,
} from './parts';
import type {Pt, StepG} from './parts';

export const HEAD = 'Why do antibiotics and antivirals work differently?';
export const BAC = {cx: 560, cy: 385, w: 600};
export const bacPt = (uv: Pt) => pp(PLATES.bac, BAC.cx, BAC.cy, BAC.w, uv);
export const RINGS = {wall: bacPt(FEAT.wall), ribo: bacPt(FEAT.ribo), dna: bacPt(FEAT.dna), folate: bacPt(FEAT.folate)};

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {winter: 'Every winter', nothing: 'do nothing to', shorten: 'shorten the illness', within: 'within two days', so: 'So why does'});
const DAY = {x0: 1180, x1: 1780, y: 1000};
const dx = (d: number) => lerp(DAY.x0, DAY.x1, d / 7);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const bw = fitW(PLATES.blister, 360, 230);
	const barP = smooth(prog(f, K1.shorten + 10, 24));
	return (
		<>
			<Heading text={HEAD} at={K1.so + 4} size={50} />
			<Overlay>
				<Pl p={PLATES.virus} cx={960} cy={350} w={240} o={prog(f, 0, 16)} />
				<GTag x={960} y={490} text="flu virus, drawn far larger than real" at={10} size={20} anchor="middle" />
				<Pl p={PLATES.blister} cx={480} cy={700} w={bw} o={prog(f, K1.winter + 20, 14)} />
				<DrugChip a={[480, 700]} b={[480, 700]} at={K1.winter + 30} text="antibiotic" />
				<Pl p={PLATES.blister} cx={1440} cy={620} w={bw} o={prog(f, K1.winter + 30, 14)} />
				<DrugChip a={[1440, 620]} b={[1440, 620]} at={K1.winter + 40} text="antiviral: oseltamivir" color={TEAL} size={24} />
				{f >= K1.nothing ? <PlainArrow x1={560} y1={600} x2={830} y2={420} at={K1.nothing} color={GREYT} /> : null}
				<TickMark x={700} y={505} at={K1.nothing + 16} ok={false} s={22} />
				<GTag x={330} y={530} text="no effect on the virus" at={K1.nothing + 20} out={K1.within + 10} size={22} />
				{f >= K1.shorten ? <PlainArrow x1={1360} y1={530} x2={1090} y2={420} at={K1.shorten} color={TEAL} /> : null}
				{barP > 0.01 ? (
					<g>
						<Sx x={1180} y={856} text="symptoms" size={22} color={GREY_INK} weight={600} at={-100} />
						<rect x={1180} y={868} width={520 * barP} height={24} rx={8} fill="#c9c4b8" />
						<rect x={1180} y={902} width={(520 - 74) * barP} height={24} rx={8} fill={TEAL} />
						<Sx x={1180 + 520 * barP + 10} y={886} text="no drug" size={20} color={GREY_INK} weight={600} at={-100} opacity={barP} />
						<Sx x={1180 + 446 * barP + 10} y={920} text="oseltamivir" size={20} color={TEAL} weight={700} at={-100} opacity={barP} />
					</g>
				) : null}
				<CTag x={1180} y={770} text="symptoms: about 1 day shorter on average" at={K1.shorten + 24} color={TEAL} size={24} maxW={600} dim={prog(f, K1.within, 10)} />
				<GTag x={1600} y={830} text="trials, adults" at={K1.shorten + 34} size={18} />
				{f >= K1.within - 4 ? (
					<g opacity={prog(f, K1.within - 4, 12)}>
						<line x1={DAY.x0} x2={DAY.x1} y1={DAY.y} y2={DAY.y} stroke={INK_SOFT} strokeWidth={3} />
						{Array.from({length: 8}, (_, d) => <g key={d}><line x1={dx(d)} x2={dx(d)} y1={DAY.y} y2={DAY.y + 8} stroke={INK_SOFT} strokeWidth={3} /><Sx x={dx(d)} y={DAY.y + 30} text={`${d}`} size={18} color={GREY_INK} weight={600} anchor="middle" at={-100} /></g>)}
						<Sx x={DAY.x1} y={DAY.y + 54} text="days after first symptoms" size={18} color={GREY_INK} weight={600} anchor="end" at={-100} />
						<DrawPath d={`M${dx(0)},${DAY.y - 12} L${dx(0)},${DAY.y - 24} L${dx(2)},${DAY.y - 24} L${dx(2)},${DAY.y - 12}`} at={K1.within + 6} dur={12} color={TEAL} width={4} />
						<Sx x={dx(1)} y={DAY.y - 34} text="start within 2 days" size={22} color={TEAL} hand weight={700} anchor="middle" at={K1.within + 12} />
					</g>
				) : null}
			</Overlay>
		</>
	);
};

// ---------- 2. Selective toxicity ----------
const K2 = cues(S('selective-toxicity'), {rule: 'seen the rule', harms: 'harms the pathogen', sel: 'selective toxicity', form: 'different form', whole: 'a whole cell', plenty: 'plenty of parts'});
export const BenchBase: React.FC<{vLit?: number; bLit?: number; at?: number}> = ({vLit = 0, bLit = 1, at = -100}) => (
	<>
		<Lane r={LB} label="bacterium" at={at} lit={bLit} />
		<Lane r={LV} label="virus" at={at + 6} lit={vLit} color={TEAL} />
	</>
);
export const SceneSelective: React.FC = () => {
	const f = useCurrentFrame();
	const blink = (i: number) => pulse(f, K2.plenty + 4 + i * 8, 30);
	return (
		<>
			<Heading text={HEAD} at={-100} size={50} />
			<Overlay>
				<BenchBase at={6} bLit={prog(f, K2.whole, 10)} />
				<Sx x={1310} y={230} text="find a difference between pathogen and host" size={24} color={GREY_INK} hand weight={700} at={K2.rule} />
				<GTag x={1310} y={250} text="b01" at={K2.rule + 10} size={18} />
				<CTag x={1310} y={320} text="selective toxicity: harms the pathogen much more than the host" at={K2.sel + 4} color={AMBER_INK} size={28} maxW={560} />
				<GTag x={1310} y={430} text="a part we lack, or have in a different form" at={K2.form} size={20} />
				<Pl p={PLATES.bac} cx={lerp(800, BAC.cx, smooth(prog(f, K2.whole, 22)))} cy={BAC.cy} w={BAC.w} o={prog(f, K2.whole, 14)} />
				<GTag x={260} y={530} text="bacterium, drawn far larger than real" at={K2.whole + 16} size={18} />
				<Pl p={PLATES.animal} cx={1080} cy={390} w={190} o={prog(f, K2.whole + 20, 14)} dim={0.5} />
				<GTag x={1080} y={500} text="one of your cells" at={K2.whole + 26} size={18} anchor="middle" />
				{Object.values(RINGS).map((p, i) => <TRing key={i} x={p[0]} y={p[1]} at={K2.plenty + i * 8} lit={blink(i)} o={1 - 0.5 * prog(f, K2.plenty + 80, 20)} />)}
				{void K2.harms}
			</Overlay>
		</>
	);
};

// ---------- 3. Two antibiotic targets ----------
const K3 = cues(S('antibiotic-targets'), {pen: 'Penicillin stops', wall: 'its cell wall', mesh: 'a tough mesh', cant: 'strengthen its wall', water: 'water rushes in', bursts: 'the cell bursts', nowall: 'have no wall', jam: 'jam bacterial ribosomes', proteins: 'make proteins'});
export const SceneAntibioticTargets: React.FC = () => {
	const f = useCurrentFrame();
	const burst = prog(f, K3.water + 20, 16) * (1 - prog(f, K3.jam, 16));
	const r = RINGS;
	return (
		<>
			<Heading text={HEAD} at={-100} size={50} />
			<Overlay>
				<BenchBase />
				<PlateB p={PLATES.bac} cx={BAC.cx} cy={BAC.cy} w={BAC.w} o={1 - burst} />
				<PlateB p={PLATES.burst} cx={BAC.cx} cy={BAC.cy} w={BAC.w} o={burst} />
				<Pl p={PLATES.animal} cx={1080} cy={390} w={190} dim={0.5} />
				<TRing x={r.wall[0]} y={r.wall[1]} at={K3.wall} lit={vis(f, K3.wall, K3.jam, 10)} />
				<TRing x={r.ribo[0]} y={r.ribo[1]} at={K3.jam} lit={vis(f, K3.jam + 10, K3.proteins + 30, 10)} />
				<TRing x={r.dna[0]} y={r.dna[1]} at={K3.jam + 30} grey r={16} />
				<TRing x={r.folate[0]} y={r.folate[1]} at={K3.jam + 36} grey r={16} />
				<GTag x={260} y={530} text="other targets: DNA-copying enzymes, folate making" at={K3.jam + 40} size={18} />
				<DrugChip a={[1150, 230]} b={[r.wall[0] + 120, r.wall[1] - 30]} at={K3.pen} text="penicillin" mark="tick" markAt={K3.wall + 20} dim={prog(f, K3.jam, 10)} />
				<CTag x={1310} y={200} text="target: wall-building enzymes" at={K3.wall + 14} color={AMBER_INK} size={26} dim={prog(f, K3.water, 10)} out={K3.jam} />
				<GTag x={1310} y={262} text="peptidoglycan wall" at={K3.wall + 24} out={K3.jam} size={18} />
				<Mesh x={1320} y={310} w={300} h={150} at={K3.mesh} gaps={prog(f, K3.cant + 6, 16)} o={1 - prog(f, K3.jam, 14)} />
				<Sx x={1640} y={400} text="a tough mesh" size={22} color={GREY_INK} hand weight={700} at={K3.mesh + 10} out={K3.jam} />
				<Osmosis cx={BAC.cx} cy={BAC.cy} rx={240} ry={120} at={K3.water} o={vis(f, K3.water, K3.nowall, 12)} />
				<GTag x={1310} y={490} text="osmosis: water moves into the cell" at={K3.water + 6} out={K3.nowall + 10} size={20} />
				<CTag x={760} y={190} text="burst" at={K3.bursts} color={AMBER_INK} size={28} dim={prog(f, K3.nowall, 10)} out={K3.jam} />
				<GTag x={985} y={500} text="no wall: nothing to hit" at={K3.nowall + 6} size={18} />
				<GTag x={260} y={210} text="another bacterium" at={K3.jam + 10} size={18} />
				<DrugChip a={[1150, 520]} b={[r.ribo[0] + 140, r.ribo[1] + 40]} at={K3.jam + 4} text="tetracycline" mark="tick" markAt={K3.jam + 28} dim={prog(f, K3.proteins + 20, 10)} />
				<Pl p={PLATES.ribosome} cx={1400} cy={300} w={130} o={prog(f, K3.jam + 20, 14)} />
				<GTag x={1480} y={290} text="bacterial ribosome (70S); ours: 80S" at={K3.jam + 30} size={18} />
				<Chain x={r.ribo[0] + 40} y={r.ribo[1] - 50} at={K3.jam + 40} stopAt={K3.proteins + 6} />
				<GTag x={1310} y={640} text="kills bacteria (bactericidal)" at={K3.proteins + 16} size={20} />
				<GTag x={1310} y={700} text="stops them multiplying (bacteriostatic)" at={K3.proteins + 30} size={20} />
				<Pl p={PLATES.macrophage} cx={1800} cy={780} w={110} o={prog(f, K3.proteins + 44, 12)} dim={0.6} />
				<GTag x={1310} y={770} text="the immune system clears the rest" at={K3.proteins + 50} size={18} />
				{void AMBER}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 4. Nothing to hit in a virus ----------
const K4 = cues(S('no-target-in-virus'), {virus: 'look at a virus', nowall: 'no wall and', inside: 'Inside your cell', nothing: 'nothing in the', throat: 'throat and gut', help: 'help resistant'});
export const AIRH = 360;
export const SceneNoTarget: React.FC = () => {
	const f = useCurrentFrame();
	const aw = wOfH(PLATES.cell, AIRH);
	const ac = {cx: 580, cy: 810};
	const inf = prog(f, K4.inside + 20, 20);
	const pop = popGrid(24, 5, 830, 680, 84, 58, 7);
	const RING = [7, 18];
	const fadeP = prog(f, K4.help, 16);
	const grow = prog(f, K4.help + 14, 30);
	const top = pp(PLATES.cell, ac.cx, ac.cy, aw, FEAT.airTop), inn = pp(PLATES.cell, ac.cx, ac.cy, aw, FEAT.airIn);
	return (
		<>
			<Heading text={HEAD} at={-100} size={50} />
			<Overlay>
				<BenchBase vLit={prog(f, K4.virus, 10)} bLit={0} />
				<g opacity={0.5}><PlateB p={PLATES.bac} cx={BAC.cx} cy={BAC.cy} w={BAC.w} /></g>
				<TRing x={RINGS.wall[0]} y={RINGS.wall[1]} at={-100} grey />
				<TRing x={RINGS.ribo[0]} y={RINGS.ribo[1]} at={-100} grey />
				<Pl p={PLATES.virus} cx={lerp(0, 220, smooth(prog(f, K4.virus, 20)))} cy={790} w={170} o={prog(f, K4.virus, 12)} />
				<GTag x={130} y={890} text="b01: genes in a protein coat" at={K4.virus + 14} size={18} />
				<TRing x={350} y={740} at={K4.nowall + 4} grey dash />
				<TRing x={350} y={820} at={K4.nowall + 10} grey dash />
				<GTag x={700} y={640} text="no wall, no ribosomes" at={K4.nowall + 16} out={K4.inside} size={18} />
				<PlateB p={PLATES.cell} cx={ac.cx} cy={ac.cy} w={aw} o={prog(f, K4.inside, 14) * (1 - inf)} />
				<PlateB p={PLATES.infected} cx={ac.cx} cy={ac.cy} w={aw} o={prog(f, K4.inside, 14) * inf} />
				<GTag x={ac.cx + 100} y={640} text="an airway cell making new viruses" at={K4.inside + 26} out={K4.throat} size={18} />
				{f >= K4.inside + 40 ? <PlainArrow x1={inn[0]} y1={inn[1]} x2={top[0]} y2={top[1] + 20} at={K4.inside + 40} color={GREY_INK} width={3} out={K4.throat} /> : null}
				<GTag x={ac.cx + 100} y={700} text="the cell's ribosomes" at={K4.inside + 50} out={K4.throat} size={18} />
				<DrugChip a={[RINGS.wall[0] + 120, RINGS.wall[1] - 30]} b={[260, 690]} at={K4.nothing} text="penicillin" mark="cross" markAt={K4.nothing + 24} size={22} />
				<DrugChip a={[RINGS.ribo[0] + 140, RINGS.ribo[1] + 40]} b={[260, 960]} at={K4.nothing + 6} text="tetracycline" mark="cross" markAt={K4.nothing + 30} size={22} />
				<GTag x={1300} y={620} text="b01: not a cell means antibiotics are useless" at={K4.nothing + 30} size={18} />
				{pop.map((p, i) => {
					const ringed = RING.includes(i);
					if (ringed) return null;
					return <Bact key={i} cx={p[0]} cy={p[1]} w={64} o={prog(f, K4.throat + i, 8) * (1 - fadeP)} />;
				})}
				{RING.map((ri, k) => Array.from({length: 4}, (_, j) => {
					const base = pop[ri];
					const p: Pt = j === 0 ? base : [base[0] + ((j % 2) * 2 - 1) * 60 * grow, base[1] + (j > 1 ? 50 : -50) * grow];
					return <Bact key={`${k}-${j}`} cx={p[0]} cy={p[1]} w={64} ring="new" o={j === 0 ? prog(f, K4.throat + ri, 8) : grow} />;
				}))}
				<GTag x={850} y={980} text="your normal bacteria" at={K4.throat + 10} out={K4.help} size={18} />
				<CTag x={1300} y={680} text="resistant ones left" at={K4.help + 30} color={AMBER_INK} size={26} />
				<GTag x={1300} y={740} text="they can later cause infections or share genes" at={K4.help + 40} size={18} />
				<MistakeChip x={1300} y={880} text="a stronger dose would work on a virus" at={K4.help + 50} cross={K4.help + 70} size={22} />
				{void Ring}{void TEAL}
			</Overlay>
		</>
	);
};

// ---------- 5. Antivirals block a step ----------
const K5 = cues(S('antiviral-steps'), {how: 'how can any', tools: 'few tools of', neura: 'called neuraminidase', osel: 'Oseltamivir blocks', cant: "can't infect more", copying: 'copying enzyme', getting: 'getting into a', viral: 'viral enzymes like', part: 'a part of'});
export const ZC = {cx: 420, cy: 560, h: 680};
export const SG: StepG = {x: 140, y: 940, w: 1120};
/** Released viruses drifting up and right from the cell top, starting at `at` (one every 14 frames, n of them). */
export const Released: React.FC<{from: Pt; at: number; n: number; o?: number}> = ({from, at, n, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const t0 = at + i * 14;
				if (f < t0) return null;
				const u = Math.min(1, (f - t0) / 70);
				const x = from[0] + (i - n / 2) * 18 + u * (160 + i * 30), y = from[1] - u * (90 + (i % 3) * 30) + Math.sin((f - t0) / 12 + i) * 6;
				return <Pl key={i} p={PLATES.virus} cx={x} cy={y} w={28} />;
			})}
		</g>
	);
};
export const SceneAntiviralSteps: React.FC = () => {
	const f = useCurrentFrame();
	const aw = wOfH(PLATES.cell, ZC.h);
	const blocked = prog(f, K5.osel + 10, 20);
	const top = pp(PLATES.cell, ZC.cx, ZC.cy, aw, FEAT.airTop), side = pp(PLATES.cell, ZC.cx, ZC.cy, aw, FEAT.airSide);
	const pAll = [K5.viral + 4];
	return (
		<>
			<Heading text="Antivirals block a step the virus needs" at={4} size={50} />
			<Overlay>
				<PlateB p={PLATES.infected} cx={ZC.cx} cy={ZC.cy} w={aw} o={1 - blocked} />
				<PlateB p={PLATES.blocked} cx={ZC.cx} cy={ZC.cy} w={aw} o={blocked} />
				<GTag x={ZC.cx - 230} y={ZC.cy + ZC.h / 2 - 30} text="infected airway cell, drawn far larger than real" at={6} size={18} />
				<Released from={top} at={K5.neura + 10} n={4} o={1} />
				<StepStrip g={SG} at={10} lit={[vis(f, K5.getting, K5.viral, 10), vis(f, K5.copying, K5.getting, 10), 0, vis(f, K5.neura, K5.copying, 10)]} />
				<Pl p={PLATES.virus} cx={980} cy={330} w={200} o={prog(f, K5.how, 14)} />
				{[[-70, -40], [70, -20], [0, 80]].map(([dx2, dy], i) => <TRing key={i} x={980 + dx2} y={330 + dy} r={16} at={K5.tools + i * 6} lit={0} grey={false} />)}
				<GTag x={1100} y={420} text="the virus's own enzymes and proteins" at={K5.tools + 14} out={K5.neura + 20} size={18} />
				<CTag x={1310} y={200} text="neuraminidase: cuts new flu viruses free" at={K5.neura + 4} color={TEAL} size={26} maxW={540} dim={prog(f, K5.copying, 10)} />
				<StepBlock g={SG} i={3} at={K5.osel + 4} label="oseltamivir" pulseAt={pAll} />
				<rect x={760} y={420} width={150} height={260} rx={40} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, K5.cant - 10, 12)} />
				{f >= K5.cant ? <PlainArrow x1={top[0] + 60} y1={top[1]} x2={760} y2={520} at={K5.cant} color={GREYT} /> : null}
				<TickMark x={690} y={430} at={K5.cant + 16} ok={false} s={20} />
				<CTag x={1310} y={300} text="release blocked" at={K5.cant + 10} color={TEAL} size={28} dim={prog(f, K5.copying, 10)} />
				<StepBlock g={SG} i={1} at={K5.copying + 4} label="aciclovir" pulseAt={pAll} />
				<GTag x={1310} y={400} text="for example aciclovir: herpes" at={K5.copying + 14} size={20} />
				<StepBlock g={SG} i={0} at={K5.getting + 4} label="entry blocker" pulseAt={pAll} />
				<GTag x={1310} y={450} text="for example, HIV entry blockers" at={K5.getting + 14} size={20} />
				<TRing x={side[0]} y={side[1]} r={20} at={K5.part + 6} grey />
				<CTag x={1310} y={520} text="some block a host receptor: for example maraviroc, HIV" at={K5.part + 14} color={GREY_INK} size={22} maxW={540} />
				{void AMBER}{void DrawPath}
			</Overlay>
		</>
	);
};
