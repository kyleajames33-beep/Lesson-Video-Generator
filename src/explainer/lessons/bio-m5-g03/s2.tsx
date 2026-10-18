// G03 (Biology) scenes 5 and 6: a population prediction that works (task, grouped givens, then one Hardy-Weinberg
// stage at a time; each result parks in the retained column; every number computed), and when predictions hold
// (conditions checklist, predicted against observed, drift traces for a large and a small population).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, CARD, CF, DrawPath, EDGE, Fade, GreyTag, HBar, Heading, INK, INK_SOFT, Overlay, PLG, PSym, Panel, PlainArrow, PlateB, PopBar, Ring, S, StageLine,
	Sx, TEAL, Tick, Traces, pickSmall, prog, vis, wfTrace,
} from './shared';

// ---------- 5. A population prediction that works ----------
const K5 = cues(S('carrier-estimate'), {
	accurate: 'Population predictions can be very accurate', health: 'health services use', cf: 'Cystic fibrosis is recessive', look: 'carriers look healthy', counted: "can't be counted by looking",
	babies: 'But affected babies can be counted', say: 'Say one baby in 2,500', needs: 'An affected baby needs the allele from both parents', times: 'times itself is one in 2,500',
	sqrt: 'Take the square root', normal: "the normal allele's is 0.98", carriers: 'Carriers have one of each', two: 'two ways to get that', mother: 'from the mother or the father',
	so: 'So carriers are two times', about25: 'about one person in 25', hw: 'Hardy-Weinberg principle', rare: 'a rare disease can have common carriers',
});
const BX = 640, BY = 560;
const RX = 110, RY0 = 690, RDY = 48;
const Geno: React.FC<{x: number; y: number; t: string; cf: number; o?: number}> = ({x, y, t, cf, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={300} height={90} rx={16} fill={CARD} stroke={EDGE} strokeWidth={3} />
		{[0, 1].map(k => <circle key={k} cx={x + 40 + k * 44} cy={y + 45} r={17} fill={k < cf ? AMBER : CARD} stroke={k < cf ? AMBER_INK : INK} strokeWidth={2.5} />)}
		<text x={x + 120} y={y + 54} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26}} fill={INK}>{t}</text>
	</g>
));
export const SceneCarrierG03: React.FC = () => {
	const f = useCurrentFrame();
	const genoO = vis(f, K5.look, K5.times - 10);
	const twoO = vis(f, K5.two, K5.so + 10);
	return (
		<>
			<Heading text="A population prediction that works" at={K5.accurate} size={52} />
			<Overlay>
				<PlateB p={PLG.spot} cx={250} cy={270} w={260} o={prog(f, K5.health, 14)} />
				<Sx x={250} y={384} text="newborn screening" size={30} color={INK} hand anchor="middle" at={K5.health + 8} />
				{/* task */}
				<Sx x={BX} y={250} text="How common are carriers?" size={54} color={INK} hand at={K5.cf} />
				{/* genotypes look the same */}
				<Geno x={BX} y={300} t="two normal" cf={0} o={genoO} />
				<Geno x={BX + 330} y={300} t="carrier" cf={1} o={genoO * prog(f, K5.look + 6, 10)} />
				<Geno x={BX + 660} y={300} t="two CF alleles" cf={2} o={genoO * prog(f, K5.look + 12, 10)} />
				<Sx x={BX} y={440} text="carriers look the same: can't be counted by looking" size={30} color={AMBER_INK} hand at={K5.counted} out={K5.times - 10} />
				{/* givens */}
				<Fade at={K5.say}>
					<Panel x={100} y={430} w={460} h={190} stroke={TEAL} />
					<Sx x={124} y={472} text="givens" size={30} color={INK_SOFT} hand />
					<Sx x={124} y={524} text="affected babies: 1 in 2,500" size={28} color={INK} weight={700} />
					<Sx x={124} y={560} text="(two copies)" size={26} color={INK_SOFT} weight={600} />
					<Sx x={124} y={600} text="CF: recessive" size={28} color={INK} weight={700} at={K5.say + 10} />
				</Fade>
				<Sx x={RX} y={RY0 - 40} text="results so far" size={26} color={INK_SOFT} hand at={K5.sqrt} />
				{/* stage 1 */}
				<StageLine text="q^{2} = 1/2,500 = 0.0004" at={K5.times} park={K5.sqrt} bx={BX} by={BY} sx={RX} sy={RY0} />
				<Sx x={BX} y={BY + 60} text="q = CF allele frequency" size={30} color={INK_SOFT} weight={600} at={K5.times + 10} out={K5.sqrt} />
				<Sx x={BX} y={BY + 104} text="from mother AND from father: q × q" size={30} color={AMBER_INK} hand at={K5.needs} out={K5.sqrt} />
				<GreyTag x={BX + 620} y={BY + 72} text="B11: counting alleles" at={K5.times + 20} out={K5.sqrt} size={22} />
				{/* stage 2 */}
				<StageLine text={`q = √${CF.q2.toFixed(4)} = ${CF.q.toFixed(2)}`} at={K5.sqrt + 10} park={K5.normal} bx={BX} by={BY} sx={RX} sy={RY0 + RDY} />
				{/* stage 3 */}
				<StageLine text={`p = 1 − q = ${CF.p.toFixed(2)}`} at={K5.normal} park={K5.carriers} bx={BX} by={BY} sx={RX} sy={RY0 + 2 * RDY} />
				<Sx x={BX} y={BY + 60} text="p = normal allele frequency" size={30} color={INK_SOFT} weight={600} at={K5.normal + 10} out={K5.carriers} />
				{/* stage 4: two ways */}
				<g opacity={twoO}>
					<Sx x={BX} y={BY - 40} text="a carrier: one of each" size={36} color={INK} hand />
					{[{y: BY + 10, a: 'CF from mother', b: 'normal from father'}, {y: BY + 100, a: 'normal from mother', b: 'CF from father'}].map((r, i) => (
						<g key={i} opacity={prog(f, K5.mother + i * 14, 12)}>
							<Panel x={BX} y={r.y} w={1000} h={70} />
							<circle cx={BX + 40} cy={r.y + 35} r={16} fill={i ? CARD : AMBER} stroke={i ? INK : AMBER_INK} strokeWidth={2.5} />
							<circle cx={BX + 80} cy={r.y + 35} r={16} fill={i ? AMBER : CARD} stroke={i ? AMBER_INK : INK} strokeWidth={2.5} />
							<Sx x={BX + 120} y={r.y + 46} text={`${r.a}, ${r.b}`} size={30} color={INK} weight={600} />
						</g>
					))}
					<Sx x={BX + 1030} y={BY + 110} text="2 ways" size={44} color={AMBER_INK} hand at={K5.mother + 30} />
				</g>
				{/* stage 5 */}
				<StageLine text={`carriers = 2pq = 2 × ${CF.p.toFixed(2)} × ${CF.q.toFixed(2)} = ${CF.carriers.toFixed(3)}`} at={K5.so + 10} bx={BX} by={BY} sx={RX} sy={RY0 + 3 * RDY} big={50} />
				<Sx x={BX} y={BY + 80} text={`about 1 in ${CF.oneIn}`} size={60} color={AMBER_INK} hand at={K5.about25} />
				<Ring cx={BX + 150} cy={BY + 62} rx={190} ry={50} at={K5.about25 + 10} />
				{/* the name and the population bar */}
				<Fade at={K5.hw}>
					<Sx x={BX} y={410} text="the Hardy-Weinberg principle" size={44} color={INK} hand />
					<Sx x={BX} y={452} text="allele frequencies predict genotype frequencies, if nothing disturbs them" size={26} color={INK_SOFT} weight={600} />
				</Fade>
				<PopBar x={BX} y={800} w={1180} affected={CF.q2} carriers={CF.carriers} p={prog(f, K5.rare - 10, 40)} o={prog(f, K5.rare - 10, 12)} />
				<Sx x={BX + 400} y={780} text="rare disease, common carriers" size={34} color={AMBER_INK} hand at={K5.rare + 10} />
				<GreyTag x={BX + 600} y={930} text="example figures, similar to cystic fibrosis in some populations" at={K5.say + 20} size={22} />
			</Overlay>
		</>
	);
};

// ---------- 6. When population predictions hold ----------
const K6 = cues(S('when-predictions-hold'), {
	holds: 'only holds if the population is large', random: 'mates at random', sel: 'selection', mig: 'migration', mut: 'new mutations', rarely: 'Real populations rarely meet',
	useful: "that's useful too", differ: 'If the real numbers differ', acting: 'something is acting', dna: 'DNA tests give', more: 'more babies are affected', relatives: 'relatives may be having children',
	large: 'In a large population over a short time', close: 'predictions come close', small: 'In a small population', either: 'push allele frequencies either way', fail: 'long-range predictions there fail',
});
const LARGE = [1, 2, 3, 4, 5].map(s => wfTrace(s, 10000, 0.1, 50));
const SMALL = pickSmall(20, 0.1, 50);
if (!LARGE.every(t => Math.abs(t[t.length - 1] - 0.1) < 0.03)) throw new Error('G03 check: large traces stay close');
const CHECK = ['large population', 'random mating', 'no selection', 'no migration', 'no new mutations'];
export const SceneHoldG03: React.FC = () => {
	const f = useCurrentFrame();
	const ca = [K6.holds, K6.random, K6.sel, K6.mig, K6.mut];
	return (
		<>
			<Heading text="When population predictions hold" at={4} size={52} />
			<Overlay>
				<Panel x={100} y={200} w={640} h={330} o={prog(f, K6.holds, 12)} />
				<Sx x={124} y={244} text="Hardy-Weinberg conditions" size={30} color={INK_SOFT} hand at={K6.holds} />
				{CHECK.map((t, i) => (
					<g key={t}>
						<rect x={130} y={272 + i * 50} width={30} height={30} rx={6} fill={CARD} stroke={INK} strokeWidth={2.5} opacity={prog(f, ca[i], 10)} />
						<Tick x={145} y={288 + i * 50} at={ca[i] + 4} s={26} color={TEAL} />
						<Sx x={180} y={298 + i * 50} text={t} size={32} color={INK} weight={600} at={ca[i]} />
					</g>
				))}
				<Sx x={100} y={576} text="real populations rarely meet all of these" size={28} color={INK_SOFT} weight={600} at={K6.rarely} />
				<Sx x={100} y={620} text="a gap between prediction and data: something is acting" size={30} color={AMBER_INK} hand at={K6.useful} />
				{/* predicted against observed */}
				<g opacity={prog(f, K6.dna, 12)}>
					<Panel x={820} y={200} w={1000} h={420} />
					<rect x={850} y={224} width={250} height={54} rx={14} fill={CARD} stroke={TEAL} strokeWidth={3} />
					<Sx x={870} y={262} text="q from DNA tests" size={28} color={TEAL} weight={700} />
					<Sx x={850} y={330} text="affected babies" size={28} color={INK} weight={700} />
					<HBar x={1100} y={350} w={600} v={1} max={2.2} label="predicted (q × q)" size={24} p={prog(f, K6.dna + 10, 20)} color="#c9b99a" h={34} />
					<HBar x={1100} y={410} w={600} v={1.9} max={2.2} label="observed" size={24} p={prog(f, K6.more, 30)} color={AMBER} h={34} />
				</g>
				{f >= K6.more + 30 ? <Ring cx={1100 + (600 * 1.45) / 2.2} cy={427} rx={(600 * 0.5) / 2.2} ry={34} at={K6.more + 30} /> : null}
				<g opacity={prog(f, K6.relatives, 12)}>
					<PSym x={900} y={520} sex="M" aff={false} sz={40} />
					<PSym x={1010} y={520} sex="F" aff={false} sz={40} />
					<line x1={920} y1={514} x2={990} y2={514} stroke={INK} strokeWidth={3} />
					<line x1={920} y1={526} x2={990} y2={526} stroke={INK} strokeWidth={3} />
					<Sx x={1060} y={530} text="relatives having children: not random mating" size={28} color={AMBER_INK} hand />
					<GreyTag x={850} y={570} text="double line: related parents (illustrative bars)" at={K6.relatives + 10} size={20} />
				</g>
				{/* drift */}
				<Sx x={100} y={700} text="large population (10,000)" size={30} color={INK} weight={800} at={K6.large} />
				<Traces x={160} y={720} w={700} h={200} traces={LARGE} at={K6.large + 6} o={prog(f, K6.large, 12)} dur={50} max={1} />
				<Sx x={180} y={740} text="stays close" size={30} color={TEAL} hand at={K6.close} />
				<Sx x={1000} y={700} text="small population (20)" size={30} color={INK} weight={800} at={K6.small} />
				<Traces x={1060} y={720} w={700} h={200} traces={SMALL} at={K6.small + 6} o={prog(f, K6.small, 12)} dur={60} color={AMBER_INK} max={1} />
				<Sx x={1080} y={740} text="chance pushes it either way" size={30} color={AMBER_INK} hand at={K6.either} />
				<GreyTag x={1000} y={990} text="illustrative, start 0.1; genetic drift: Module 6" at={K6.small + 20} size={22} />
				<GreyTag x={100} y={990} text="seeded simulation" at={K6.large + 20} size={22} />
			</Overlay>
		</>
	);
};
void DrawPath; void PlainArrow;
