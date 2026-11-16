// B8-14 scenes 1 to 5: the hook (a heel-prick card: prevented or only found?), three jobs (find, choose, change) and
// three meanings of prevent, PKU as the worked case (two faulty alleles, too little enzyme, phenylalanine builds up; the
// diet keeps it low), phenotype not genotype (the alleles stay and can be passed on; screening helps only when there is
// something to do next), and carriers with carrier screening. The jobs bar sits at the top and the what's-prevented
// strip at the bottom from scene 2.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enzyme} from '../m8-shared/parts';
import {Lab} from '../bio-m8-b08/s1';
import {
	AMBER, AMBER_INK, Al, Arrow, BLUE, CARD, Chain2, Chip, DnaMini, DrawPath, EDGE, GREEN, GREYT, GTag, INK, INK_SOFT, JobsBar, Ped, Pic, PicH, Prevented, RED, Svg, Sx, T, TEAL, Title, lerp, pbPt, prog, pulse, smooth, vis,
} from './parts';
import {PL, FP} from './assets';
import {K} from './common';

const ON = -1000;

// ---------- 1. hook ----------
const K1 = K('hook', {days: 'couple of', heel: 'heel-prick', twenty: 'twenty conditions', pku: 'PKU', brain: 'severe brain', grow: 'grow up', prevent: 'test prevent', find: 'only find', q: "That's today's"});
const CARD1 = {cx: 760, cy: 470, w: 760};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const cp = pbPt(PL.card, CARD1.cx, CARD1.cy, CARD1.w);
	const red = vis(f, K1.brain, K1.grow, 16);
	return (
		<Svg>
			<Title text="A heel-prick test" out={K1.q} />
			<Title text="When can genetics help prevent disease?" at={K1.q} />
			<Pic p={PL.card} cx={CARD1.cx} cy={CARD1.cy} w={CARD1.w} />
			{FP.spots.map(([u, v], i) => { const [x, y] = cp(u, v); const p = pulse(f, K1.heel + 10 + i * 10, 30); return p > 0.01 ? <circle key={i} cx={x} cy={y} r={46} fill="none" stroke={AMBER} strokeWidth={6} opacity={p} /> : null; })}
			<GTag x={CARD1.cx} y={730} text="NSW newborn bloodspot screening, 48 to 72 hours" size={28} anchor="middle" at={K1.heel + 20} />
			<Sx x={1220} y={240} text="more than 20 conditions" size={36} color={INK} hand at={K1.twenty} />
			{Array.from({length: 20}, (_, i) => { const k = prog(f, K1.twenty + i * 2, 10); const pk = i === 7; return k > 0.01 ? <g key={i} opacity={k}><rect x={1220 + (i % 5) * 112} y={270 + Math.floor(i / 5) * 48} width={100} height={36} rx={18} fill={pk && f >= K1.pku ? '#f6d48c' : '#efe9de'} stroke={pk && f >= K1.pku ? AMBER_INK : '#a8a092'} strokeWidth={2.5} />{pk && f >= K1.pku ? <Sx x={1270 + (i % 5) * 112} y={298 + Math.floor(i / 5) * 48} text="PKU" size={28} color={AMBER_INK} anchor="middle" weight={800} at={ON} /> : null}</g> : null; })}
			<g opacity={vis(f, K1.brain - 6, undefined, 14)}>
				<PicH p={PL.brain} cx={1500} cy={640} h={210} />
				{red > 0.01 ? <g opacity={red * 0.55} style={{mixBlendMode: 'multiply'}}><ellipse cx={1490} cy={610} rx={130} ry={80} fill={RED} /></g> : null}
			</g>
			<Sx x={1500} y={800} text="untreated PKU: brain damage" size={36} color={RED} anchor="middle" hand at={K1.brain} out={K1.grow} />
			<Sx x={1500} y={800} text="found early: grows up without it" size={36} color={GREEN} anchor="middle" hand at={K1.grow + 6} />
			<Sx x={330} y={560} text="prevented?" size={52} color={TEAL} anchor="end" hand at={K1.prevent} />
			<Sx x={1170} y={560} text="found?" size={52} color={AMBER_INK} hand at={K1.find} />
			<Sx x={960} y={960} text="did the test prevent a genetic disease, or only find it?" size={46} color={INK} anchor="middle" hand at={K1.prevent} />
		</Svg>
	);
};

// ---------- 2. three jobs ----------
const K2 = K('three-jobs', {three: 'three different', screening: 'Screening finds', nodna: "doesn't change", embryo: 'Embryo testing', exist: 'already exist', eng: 'Genetic engineering', changes: 'changes the', ask: 'ask which', symptoms: 'symptoms in', birth: 'the birth', gene: 'faulty gene'});
const COLX = [440, 900, 1360];
export const SceneJobs: React.FC = () => {
	const f = useCurrentFrame();
	const cols: [string, string, number][] = [['find', 'screening: finds a risk or condition', K2.screening], ['choose', 'embryo testing: chooses an embryo', K2.embryo], ['change', 'genetic engineering: changes DNA', K2.eng]];
	return (
		<Svg>
			<Title text="Three jobs, three meanings of prevent" />
			<JobsBar lit={[K2.screening, K2.embryo, K2.eng]} />
			<Pic p={PL.card} cx={250} cy={300} w={290} />
			{cols.map(([h, g, at], i) => {
				const L = prog(f, at, 14);
				const x = COLX[i];
				return <g key={h}>
					<rect x={x} y={240} width={420} height={440} rx={22} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 4 : 3} />
					<Sx x={x + 24} y={300} text={h} size={52} color={L > 0.5 ? BLUE : GREYT} hand at={ON} />
					<T x={x + 24} y={610} w={380} text={g} size={34} color={INK} at={at} />
				</g>;
			})}
			<g>
				<circle cx={COLX[0] + 210} cy={440} r={62} fill="none" stroke={BLUE} strokeWidth={8} />
				<line x1={COLX[0] + 254} y1={484} x2={COLX[0] + 310} y2={540} stroke={BLUE} strokeWidth={12} strokeLinecap="round" />
				<PicH p={PL.card} cx={COLX[0] + 200} cy={436} h={60} />
			</g>
			<PicH p={PL.blast} cx={COLX[1] + 130} cy={450} h={140} />
			<PicH p={PL.blast} cx={COLX[1] + 290} cy={450} h={140} />
			{prog(f, K2.exist, 12) > 0.01 ? <path opacity={prog(f, K2.exist, 12)} d={`M${COLX[1] + 260},${540} l18,20 l36,-46`} fill="none" stroke={GREEN} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" /> : null}
			<PicH p={PL.helix} cx={COLX[2] + 210} cy={440} h={250} />
			{prog(f, K2.changes, 12) > 0.01 ? <rect opacity={prog(f, K2.changes, 12)} x={COLX[2] + 180} y={418} width={60} height={26} rx={6} fill="none" stroke={AMBER_INK} strokeWidth={5} /> : null}
			<GTag x={96} y={420} text="no DNA changed" size={30} at={K2.nodna} />
			<Sx x={96} y={760} text="find, choose, change" size={56} color={BLUE} hand at={K2.ask} />
			<Sx x={760} y={760} text="then ask: what exactly does it prevent?" size={40} color={INK} hand at={K2.ask + 20} />
			<Prevented at={K2.ask} slots={[{at: K2.symptoms, color: 'grey'}, {at: K2.birth, color: 'grey'}, {at: K2.gene, color: 'grey'}]} />
			{void TEAL}{void DnaMini}
		</Svg>
	);
};

// ---------- 3. PKU ----------
const K3 = K('pku', {pku: 'In PKU', both: 'both copies', liver: 'the liver', little: 'too little', phe: 'break down', builds: 'builds up', damages: 'damages the', finds: 'test finds', diet: 'low-phenylalanine diet', stays: 'stays low', normal: 'develops normally'});
export const ScenePKU: React.FC = () => {
	const f = useCurrentFrame();
	const lvl = 0.3 + 0.55 * smooth(prog(f, K3.builds, 40)) - 0.62 * smooth(prog(f, K3.diet + 10, 50));
	const pile = Math.min(9, Math.max(0, Math.floor((f - K3.phe) / 8)));
	const dmg = vis(f, K3.damages, K3.normal, 16);
	const G = {x: 1440, y: 280, h: 420};
	return (
		<Svg>
			<Title text="PKU: the worked case" />
			<JobsBar lit={[ON]} />
			<Pic p={PL.liver} cx={250} cy={380} w={300} />
			<DrawPath d="M360,360 L470,320" at={K3.liver} dur={10} color={INK_SOFT} width={3} />
			<DrawPath d="M360,420 L470,560" at={K3.liver} dur={10} color={INK_SOFT} width={3} />
			<Pic p={PL.lcell} cx={720} cy={460} w={480} />
			<GTag x={720} y={700} text="liver cell" size={28} anchor="middle" />
			<Sx x={250} y={540} text="liver" size={36} color={INK} anchor="middle" hand at={ON} />
			<Sx x={1000} y={262} text="two faulty alleles" size={34} color={AMBER_INK} hand at={K3.both} />
			<Al x={1000} y={290} t="a" alt at={K3.both} />
			<Al x={1070} y={290} t="a" alt at={K3.both + 8} />
			<GTag x={1150} y={296} text="PAH gene" size={28} at={K3.both + 20} />
			<g opacity={vis(f, K3.little - 4, undefined, 12)}>
				<Enzyme x={1110} y={470} s={0.9} at={K3.little} />
				<DrawPath d="M1060,420 L1160,520 M1160,420 L1060,520" at={K3.little + 10} dur={12} color={RED} width={6} />
			</g>
			{Array.from({length: pile}, (_, i) => <circle key={i} cx={1000 - (i % 3) * 26} cy={470 - Math.floor(i / 3) * 26 + 26} r={11} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} />)}
			<Sx x={1000} y={600} text="too little working enzyme" size={34} color={INK} hand at={K3.little} />
			<Sx x={1000} y={645} text="phenylalanine piles up" size={34} color={AMBER_INK} hand at={K3.phe + 20} />
			<Sx x={G.x + 30} y={G.y - 20} text="blood phenylalanine" size={30} color={INK} anchor="middle" weight={800} at={ON} />
			<rect x={G.x} y={G.y} width={60} height={G.h} rx={12} fill={CARD} stroke={INK} strokeWidth={3} />
			<rect x={G.x + 5} y={G.y + G.h * (1 - lvl)} width={50} height={G.h * lvl - 5} rx={9} fill={lvl > 0.5 ? RED : TEAL} opacity={0.8} />
			<line x1={G.x - 16} x2={G.x + 76} y1={G.y + G.h * 0.5} y2={G.y + G.h * 0.5} stroke={RED} strokeWidth={3} strokeDasharray="8 6" />
			<Sx x={G.x - 24} y={G.y + G.h * 0.5 + 10} text="harmful" size={28} color={RED} anchor="end" hand at={ON} />
			<g opacity={vis(f, K3.damages - 6, undefined, 14)}>
				<PicH p={PL.brain} cx={1700} cy={470} h={150} />
				{dmg > 0.01 ? <ellipse cx={1694} cy={455} rx={84} ry={52} fill={RED} opacity={0.45 * dmg} /> : null}
			</g>
			<Sx x={1700} y={590} text="developing brain" size={30} color={INK} anchor="middle" hand at={K3.damages} />
			<GTag x={1824} y={620} text="low-protein diet, special formula" size={28} anchor="end" at={K3.diet} />
			<Sx x={1824} y={764} text="level stays low: brain develops normally" size={36} color={GREEN} anchor="end" hand at={K3.normal} />
			<Lab x={96} y={800} t="found early by the heel prick: start the diet straightaway" at={K3.finds} size={40} w={1700} />
			<Prevented slots={[]} />
			{void Chip}{void lerp}{void Arrow}{void EDGE}
		</Svg>
	);
};

// ---------- 4. phenotype, not genotype ----------
const K4 = K('phenotype-not-genotype', {still: 'still there', passed: 'passed on', prevents: 'diet prevents', pheno: 'harmful phenotype', limits: 'it limits', useful: 'something useful', nothing: 'nothing can', finds: 'finds it', doesnt: "doesn't prevent"});
export const ScenePhenotype: React.FC = () => {
	const f = useCurrentFrame();
	const drop = smooth(prog(f, K4.passed, 30));
	return (
		<Svg>
			<Title text="Phenotype, not genotype" />
			<JobsBar lit={[ON]} />
			<Pic p={PL.lcell} cx={280} cy={440} w={380} />
			<Sx x={560} y={262} text="alleles: still there" size={34} color={AMBER_INK} hand at={K4.still} />
			<Al x={560} y={290} t="a" alt />
			<Al x={630} y={290} t="a" alt o={1 - 0.6 * drop} />
			{drop > 0.01 ? <Al x={630} y={lerp(290, 520, drop)} t="a" alt /> : null}
			<rect x={600} y={500} width={120} height={96} rx={14} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="10 8" />
			<Sx x={740} y={560} text="next generation" size={32} color={GREYT} hand at={K4.passed} />
			<GTag x={560} y={380} text="genotype unchanged, still heritable" size={28} at={K4.still + 20} />
			<T x={96} y={720} w={1000} text="phenotype: the genes' effect on the body" size={46} color={TEAL} at={K4.pheno} />
			<Sx x={96} y={790} text="the diet limits what the weak pathway can't handle" size={36} color={INK} hand at={K4.limits} />
			<Pic p={PL.card} cx={1500} cy={330} w={340} />
			<Sx x={1500} y={470} text="found by the heel prick" size={30} color={INK} anchor="middle" hand at={ON} />
			<Chain2 x={1100} y={560} w={300} at={K4.useful} empty={K4.nothing} />
			<GTag x={1100} y={690} text="found, not prevented" size={30} at={K4.doesnt} />
			<Prevented slots={[{at: K4.prevents, color: 'green', note: 'PKU diet'}]} />
			{void BLUE}{void CARD}{void EDGE}{void INK_SOFT}{void RED}{void AMBER}{void Arrow}
		</Svg>
	);
};

// ---------- 5. carriers ----------
const K5 = K('carriers', {second: 'The second', met: "You've met", one: 'one altered', cf: 'cystic fibrosis', working: 'one working', healthy: 'usually healthy', most: "Most don't", two: 'two carriers', four: 'one in', carrier: 'Carrier screening', medicare: 'Medicare', three: 'three conditions'});
export const SceneCarriers: React.FC = () => {
	const f = useCurrentFrame();
	const tiles: [string, boolean][] = [['AA', false], ['Aa', false], ['Aa', false], ['aa', true]];
	return (
		<Svg>
			<Title text="Carriers and carrier screening" />
			<JobsBar lit={[K5.second]} />
			<Pic p={PL.airway} cx={200} cy={440} w={150} />
			<GTag x={96} y={640} text="b06: cystic fibrosis" size={28} at={K5.cf} />
			<g opacity={vis(f, K5.most - 4, undefined, 14)}>
				<Ped x={500} y={250} sq /><Ped x={620} y={250} /><line x1={520} x2={600} y1={250} y2={250} stroke={INK} strokeWidth={3} />
				<Ped x={760} y={250} sq /><Ped x={880} y={250} /><line x1={780} x2={860} y1={250} y2={250} stroke={INK} strokeWidth={3} />
				<line x1={560} x2={560} y1={250} y2={300} stroke={INK} strokeWidth={3} /><line x1={820} x2={820} y1={250} y2={300} stroke={INK} strokeWidth={3} />
				<GTag x={940} y={230} text="no one affected before" size={28} />
			</g>
			<Al x={480} y={330} t="A" at={K5.one} /><Al x={546} y={330} t="a" alt at={K5.one} />
			<Al x={740} y={330} t="A" at={K5.two} /><Al x={806} y={330} t="a" alt at={K5.two} />
			<Sx x={540} y={430} text="carrier" size={34} color={INK} anchor="middle" hand at={K5.one} />
			<Sx x={800} y={430} text="carrier" size={34} color={INK} anchor="middle" hand at={K5.two} />
			<Sx x={420} y={490} text="one altered + one working copy: usually healthy" size={34} color={INK} hand at={K5.healthy} />
			{tiles.map(([t, a], i) => <g key={i} opacity={prog(f, K5.four + i * 6, 12)}>
				<rect x={420 + i * 110} y={530} width={96} height={70} rx={12} fill={a ? '#f6d48c' : CARD} stroke={a ? AMBER_INK : INK_SOFT} strokeWidth={3} />
				<Sx x={468 + i * 110} y={578} text={t} size={34} color={a ? AMBER_INK : INK} anchor="middle" weight={800} at={ON} />
			</g>)}
			<Sx x={420} y={660} text="1 in 4 chance, each pregnancy" size={42} color={AMBER_INK} hand at={K5.four + 20} />
			<Pic p={PL.tubes} cx={1460} cy={340} w={330} />
			<T x={1000} y={540} w={820} text="carrier screening: tests prospective parents" size={40} color={TEAL} at={K5.carrier} />
			<Chip x={1000} y={580} text="cystic fibrosis" size={30} color={BLUE} ink={INK} at={K5.medicare} />
			<Chip x={1260} y={580} text="spinal muscular atrophy" size={30} color={BLUE} ink={INK} at={K5.medicare + 8} />
			<Chip x={1000} y={640} text="fragile X" size={30} color={BLUE} ink={INK} at={K5.medicare + 16} />
			<GTag x={1180} y={646} text="Medicare-funded since November 2023" size={26} at={K5.three} />
			<Prevented slots={[{at: ON, color: 'green', note: 'PKU diet'}]} />
			{void GREEN}{void DnaMini}{void RED}
		</Svg>
	);
};
