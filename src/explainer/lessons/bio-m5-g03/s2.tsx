// G03 (Biology) scenes 5 and 6: a population prediction that works (task, grouped givens, then one Hardy-Weinberg
// stage at a time; each result parks in the retained column; every number computed), and when predictions hold
// (conditions checklist, predicted against observed, drift traces for a large and a small population).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AnswerFrame, HWSquare, TaskStrip} from './big';
import {
	AMBER, AMBER_INK, CARD, CF, DrawPath, EDGE, Fade, GreyTag, HBar, Heading, INK, INK_SOFT, Overlay, PLG, PSym, Panel, PlainArrow, PlateB, PopBar, Ring, S, StageLine,
	Sx, TEAL, Tick, Traces, pickSmall, prog, vis, wfTrace,
} from './shared';

// ---------- 5. A population prediction that works ----------
const K5 = cues(S('carrier-estimate'), {
	accurate: 'Population predictions can be very accurate', health: 'health services use', cf: 'Cystic fibrosis is recessive', look: 'carriers look healthy', counted: "can't be counted by looking",
	babies: 'But affected babies can be counted', say: 'Say one baby in 2,500', needs: 'An affected baby needs the allele from both parents', times: 'times itself is one in 2,500',
	sqrt: 'Take the square root', normal: "the normal allele's is 0.98", carriers: 'Carriers have one of each', two: 'two ways to get that', mother: 'from the mother or the father',
	father: 'or the father', so: 'So carriers are two times', about25: 'about one person in 25', hw: 'Hardy-Weinberg principle', rare: 'a rare disease can have common carriers',
});
// Quality fix (g01 layout): left column = painted screening card, teal givens card and the retained results; right =
// a task strip, then one stage at a time at 72 px with fixed colours (q, the CF allele, amber; p, the normal allele,
// teal), the letters-only Punnett square for "two ways", and a framed answer.
const BX = 640, BY = 470;
const RX = 96, RY0 = 760, RDY = 56;
const Geno: React.FC<{x: number; y: number; g: string; t: string; o?: number; hot?: boolean}> = ({x, y, g, t, o = 1, hot = false}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={360} height={250} rx={22} fill={hot ? '#fff3d9' : CARD} stroke={hot ? AMBER : EDGE} strokeWidth={hot ? 4 : 3} />
		<text x={x + 180} y={y + 120} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 92}}>
			{g.split('').map((ch, i) => <tspan key={i} fill={ch === 'a' ? AMBER_INK : TEAL}>{ch}</tspan>)}
		</text>
		<text x={x + 180} y={y + 200} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 36}} fill={INK}>{t}</text>
	</g>
));
export const SceneCarrierG03: React.FC = () => {
	const f = useCurrentFrame();
	const genoO = vis(f, K5.cf, K5.needs - 6);
	const sqO = vis(f, K5.carriers, K5.hw);
	return (
		<>
			<Heading text="A population prediction that works" at={K5.accurate} size={52} />
			<Overlay>
				{/* left column */}
				<PlateB p={PLG.spot} cx={300} cy={262} w={400} o={prog(f, K5.health, 14)} />
				<Sx x={300} y={388} text="newborn screening" size={38} color={INK} hand anchor="middle" at={K5.health + 8} />
				<Ring cx={300} cy={262} rx={220} ry={110} at={K5.babies + 6} out={K5.say} />
				<Fade at={K5.say}>
					<Panel x={70} y={420} w={500} h={250} stroke={TEAL} sw={4} />
					<Sx x={96} y={466} text="givens" size={34} color={TEAL} hand />
					<Sx x={96} y={524} text="affected babies: 1 in 2,500" size={34} color={INK} weight={700} />
					<Sx x={96} y={576} text="CF: recessive" size={34} color={INK} weight={700} />
					<Sx x={96} y={628} text="affected = aa (two copies)" size={30} color={AMBER_INK} weight={700} at={K5.needs} />
				</Fade>
				<Sx x={RX} y={RY0 - 50} text="results so far" size={34} color={INK_SOFT} hand at={K5.sqrt} />
				{/* task */}
				<TaskStrip x={BX} y={170} w={1200} at={K5.cf} text="How common are carriers?" size={50} />
				{/* the three genotypes: carriers look the same */}
				<Geno x={BX} y={330} g="AA" t="two normal" o={genoO} />
				<Geno x={BX + 400} y={330} g="Aa" t="carrier" o={genoO * prog(f, K5.look - 4, 10)} />
				<Geno x={BX + 800} y={330} g="aa" t="has CF" o={genoO * prog(f, K5.look + 4, 10)} hot={f >= K5.babies} />
				<g opacity={genoO * prog(f, K5.look + 10, 10)}>
					<Sx x={BX + 380} y={650} text="both look healthy" size={44} color={INK} hand anchor="middle" />
					<DrawPath d={`M${BX + 180},${600} Q${BX + 380},${640} ${BX + 580},${600}`} at={K5.look + 10} dur={12} color={INK_SOFT} width={3} />
				</g>
				<Sx x={BX + 380} y={720} text="carriers can't be counted by looking" size={44} color={AMBER_INK} hand anchor="middle" at={K5.counted} out={K5.needs - 6} />
				<Sx x={BX + 980} y={650} text="these can be counted" size={44} color={AMBER_INK} hand anchor="middle" at={K5.babies + 6} out={K5.needs - 6} />
				{/* stage 1: q x q */}
				<Fade at={K5.needs} out={K5.sqrt}>
					<Sx x={BX} y={BY - 110} text="aa: a from the mother AND a from the father" size={44} color={AMBER_INK} hand />
					<Sx x={BX} y={BY + 110} text="q = the CF allele's frequency" size={38} color={INK_SOFT} weight={600} />
				</Fade>
				<StageLine text="q × q = q^{2} = 1/2,500 = 0.0004" at={K5.times - 30} park={K5.sqrt} bx={BX} by={BY} sx={RX} sy={RY0} big={72} small={34} color={AMBER_INK} parkColor={AMBER_INK} />
				{/* stage 2 */}
				<StageLine text={`q = √${CF.q2.toFixed(4)} = ${CF.q.toFixed(2)}`} at={K5.sqrt + 10} park={K5.normal} bx={BX} by={BY} sx={RX} sy={RY0 + RDY} big={84} small={34} color={AMBER_INK} parkColor={AMBER_INK} />
				{/* stage 3 */}
				<StageLine text={`p = 1 − q = ${CF.p.toFixed(2)}`} at={K5.normal} park={K5.carriers} bx={BX} by={BY} sx={RX} sy={RY0 + 2 * RDY} big={84} small={34} color={TEAL} parkColor={TEAL} />
				<Sx x={BX} y={BY + 110} text="p = the normal allele's frequency" size={38} color={INK_SOFT} weight={600} at={K5.normal + 10} out={K5.carriers} />
				{/* stage 4: two ways (letters-only Punnett square) */}
				<g opacity={sqO}>
					<HWSquare x={1280} y={270} c={190} at={K5.carriers} ringAt={[K5.mother, K5.father]} />
					<Sx x={BX} y={360} text="a carrier: Aa" size={60} color={INK} hand at={K5.carriers} />
					<Sx x={BX} y={440} text="one of each" size={44} color={INK_SOFT} hand at={K5.carriers + 10} />
					<Sx x={BX} y={560} text="2 ways" size={84} color={AMBER_INK} hand at={K5.two + 6} />
					<Sx x={BX} y={620} text="a from the mother, or" size={38} color={INK} hand at={K5.mother} />
					<Sx x={BX} y={666} text="a from the father" size={38} color={INK} hand at={K5.father} />
				</g>
				{/* stage 5 and the framed answer */}
				<StageLine text={`carriers = 2pq = 2 × ${CF.p.toFixed(2)} × ${CF.q.toFixed(2)} = ${CF.carriers.toFixed(3)}`} at={K5.so + 10} bx={BX} by={830} sx={BX} sy={830} big={48} />
				<AnswerFrame x={BX} y={870} w={430} h={120} at={K5.about25} text={`≈ 1 in ${CF.oneIn}`} size={72} sub="carriers" />
				{/* the name and the population bar */}
				<Fade at={K5.hw}>
					<Sx x={1240} y={330} text="the Hardy-Weinberg principle" size={50} color={INK} hand />
					<Sx x={1240} y={384} text="allele frequencies predict" size={34} color={INK_SOFT} weight={600} />
					<Sx x={1240} y={426} text="genotype frequencies" size={34} color={INK_SOFT} weight={600} />
				</Fade>
				<PopBar x={1240} y={560} w={580} h={80} affected={CF.q2} carriers={CF.carriers} p={prog(f, K5.rare - 10, 40)} o={prog(f, K5.rare - 10, 12)} size={34} />
				<Sx x={1240} y={730} text="rare disease, common carriers" size={46} color={AMBER_INK} hand at={K5.rare + 10} />
				<GreyTag x={1240} y={760} text="example figures, similar to cystic fibrosis in some populations" at={K5.say + 20} out={K5.carriers} size={26} />
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
// Quality fix: the checklist is 40 px in a larger card; the prediction-against-data panel opens on "that's useful
// too" with the predicted bar, and the observed bar grows on "more babies are affected"; the drift graphs are larger.
export const SceneHoldG03: React.FC = () => {
	const f = useCurrentFrame();
	const ca = [K6.holds, K6.random, K6.sel, K6.mig, K6.mut];
	const upper = 1 - 0.5 * prog(f, K6.large - 10, 14);
	return (
		<>
			<Heading text="When population predictions hold" at={4} size={52} />
			<Overlay>
				<g opacity={upper}>
					<Panel x={70} y={170} w={760} h={400} o={prog(f, 0, 12)} />
					<Sx x={100} y={222} text="Hardy-Weinberg conditions" size={40} color={TEAL} hand at={0} />
					{CHECK.map((t, i) => (
						<g key={t}>
							<rect x={104} y={252 + i * 60} width={38} height={38} rx={8} fill={CARD} stroke={INK} strokeWidth={3} opacity={prog(f, ca[i], 10)} />
							<Tick x={123} y={272 + i * 60} at={ca[i] + 4} s={32} color={TEAL} />
							<Sx x={166} y={284 + i * 60} text={t} size={40} color={INK} weight={600} at={ca[i]} />
						</g>
					))}
					<Sx x={100} y={622} text="real populations rarely meet all of these" size={38} color={INK} hand at={K6.rarely} />
					{/* predicted against observed */}
					<g opacity={prog(f, K6.useful, 12)}>
						<Panel x={880} y={170} w={970} h={400} stroke={AMBER} sw={3} />
						<Sx x={910} y={226} text="prediction against data" size={42} color={AMBER_INK} hand />
						<rect x={1520} y={186} width={300} height={56} rx={14} fill={CARD} stroke={TEAL} strokeWidth={3} opacity={prog(f, K6.dna, 10)} />
						<Sx x={1540} y={224} text="q from DNA tests" size={30} color={TEAL} weight={700} at={K6.dna} />
						<Sx x={910} y={300} text="affected babies" size={34} color={INK} weight={700} />
						<HBar x={1140} y={330} w={600} v={1} max={2.2} label="predicted (q × q)" size={30} p={prog(f, K6.differ, 20)} color="#c9b99a" h={46} />
						<HBar x={1140} y={410} w={600} v={1.9} max={2.2} label="observed" size={30} p={prog(f, K6.more, 30)} color={AMBER} h={46} />
					</g>
					{f >= K6.more + 30 ? <Ring cx={1140 + (600 * 1.45) / 2.2} cy={433} rx={(600 * 0.5) / 2.2 + 10} ry={40} at={K6.more + 30} /> : null}
					<Sx x={910} y={530} text="a gap: something is acting" size={40} color={AMBER_INK} hand at={K6.acting} />
					<g opacity={prog(f, K6.relatives, 12)}>
						<PSym x={1420} y={514} sex="M" aff={false} sz={44} />
						<PSym x={1540} y={514} sex="F" aff={false} sz={44} />
						<line x1={1442} y1={507} x2={1518} y2={507} stroke={INK} strokeWidth={3} />
						<line x1={1442} y1={521} x2={1518} y2={521} stroke={INK} strokeWidth={3} />
						<Sx x={1580} y={526} text="related parents" size={34} color={AMBER_INK} hand />
					</g>
				</g>
				{/* drift */}
				<Sx x={100} y={700} text="large population (10,000)" size={40} color={INK} weight={800} at={K6.large} />
				<Traces x={170} y={730} w={700} h={230} traces={LARGE} at={K6.large + 6} o={prog(f, K6.large, 12)} dur={50} max={1} />
				<Sx x={200} y={770} text="stays close: prediction works" size={38} color={TEAL} hand at={K6.close} />
				<Sx x={1000} y={700} text="small population (20)" size={40} color={INK} weight={800} at={K6.small} />
				<Traces x={1070} y={730} w={700} h={230} traces={SMALL} at={K6.small + 6} o={prog(f, K6.small, 12)} dur={60} color={AMBER_INK} max={1} />
				<Sx x={1100} y={770} text="chance pushes it either way" size={38} color={AMBER_INK} hand at={K6.either} />
				<GreyTag x={1000} y={1040} text="illustrative, start 0.1; genetic drift: Module 6" at={K6.small + 20} size={26} />
			</Overlay>
		</>
	);
};
void DrawPath; void PlainArrow;
