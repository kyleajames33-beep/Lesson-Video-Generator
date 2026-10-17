// B9 scenes 11a to 13: two harder unseen items (pedigree P3; round and wrinkled seed counts) with brief feedback, the
// decision rule with the handoff, and the key notes. Each question card stays complete through its 10 s countdown and
// after it; nothing answer-bearing is on a card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AaAa_D, AlleleChip, AnswerBox, Chip, Coin, Countdown, CPLUM, EDGE, Enter, FONT_DISPLAY, FONT_HAND, Fade, GameteDisc, GenoTag, GreyTag,
	HandText, Heading, INK, INK_SOFT, MistakeChip, ModelLine, Overlay, P3, PL9, PSym, Pedigree, PlateB, Punnett, RRrr, Rrrr, S, Sx, TEALC, Trio, fadeV, hold,
	notesCheck, prog, rng, wrap,
} from './shared';
import type {PLay} from './shared';

const Legend: React.FC<{x: number; y: number; at: number; sz?: number}> = ({x, y, at, sz = 40}) => (
	<Fade at={at}>
		<PSym x={x} y={y} sex="F" aff={false} sz={sz} />
		<PSym x={x + 54} y={y} sex="M" aff={false} sz={sz} />
		<Sx x={x + 90} y={y + 11} text="unaffected" size={30} color={INK} hand />
		<PSym x={x + 280} y={y} sex="F" aff sz={sz} />
		<PSym x={x + 334} y={y} sex="M" aff sz={sz} />
		<Sx x={x + 370} y={y + 11} text="affected" size={30} color={INK} hand />
	</Fade>
);

// ---------- 11a. Attempt one (an unseen pedigree) ----------
const K11 = cues(S('attempt'), {two: 'Two harder questions now', first: 'First, this pedigree shows', dom: 'Is the condition dominant', justify: 'Justify your answer', geno: 'Then give the genotypes', prob: 'find the probability', pause: 'Pause here to answer'});
const L11: PLay = {x0: 250, y0: 330, gap: 150, row: 200, sz: 66};
const D1A = '(a) Dominant or recessive? Justify using numbered individuals.';
const D1B = '(b) Give the genotypes of I-1 and I-2.';
const D1C = '(c) Probability that their next child is unaffected?';
export const SceneAttemptB9: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('attempt');
	const a = wrap(D1A, 32, 900);
	return (
		<>
			<Heading text="A condition caused by a gene on an autosome" at={K11.first} size={50} />
			<Overlay>
				<g opacity={prog(f, K11.first, 14)}>
					<Pedigree ped={P3} L={L11} />
				</g>
				<Legend x={210} y={890} at={K11.first + 10} />
				{a.map((l, i) => <Sx key={i} x={900} y={300 + i * 42} text={l} size={32} color={INK} weight={700} at={K11.dom + i * 4} />)}
				<AnswerBox x={900} y={300 + a.length * 42 - 18} w={920} h={86} at={K11.justify} lines={2} />
				<Sx x={900} y={530} text={D1B} size={32} color={INK} weight={700} at={K11.geno} />
				<AnswerBox x={900} y={548} w={920} h={62} at={K11.geno + 8} lines={1} />
				<Sx x={900} y={680} text={D1C} size={32} color={INK} weight={700} at={K11.prob} />
				<AnswerBox x={900} y={698} w={920} h={62} at={K11.prob + 8} lines={1} />
				<GreyTag x={900} y={800} text="assume: one gene; no new mutation" at={K11.first + 20} size={26} />
				<Sx x={96} y={1046} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K11.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1700} y={890} r={54} />
			</Overlay>
		</>
	);
};

// ---------- 11b. Feedback one ----------
const K12 = cues(S('feedback-one'), {dom: "It's dominant", both: 'are both affected', unaff: 'is unaffected', each: 'each parent carries', het: 'both are heterozygous', sq: 'Their square gives', one4: 'a one in four chance', ifw: 'If you wrote', most: 'most of the family has it', isnt: "that isn't evidence", cite: 'Cite the people'});
const L12: PLay = {x0: 210, y0: 330, gap: 120, row: 180, sz: 54};
export const SceneFeedbackOneB9: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Question one: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={196} text="(a) dominant or recessive, citing individuals   (b) genotypes of I-1 and I-2   (c) chance the next child is unaffected" size={26} color={INK_SOFT} weight={600} at={0} />
				<Pedigree ped={P3} L={L12} rings={{'I-1': K12.both - 6, 'I-2': K12.both, 'II-1': K12.unaff}}
					chips={{'I-1': ['Aa', K12.het], 'I-2': ['Aa', K12.het + 6], 'II-1': ['aa', K12.het + 12]}} chipSize={22} />
				<ModelLine x={760} y={330} text="(a) Dominant: I-1 and I-2 affected," at={K12.both} size={34} />
				<Sx x={760} y={380} text="their daughter II-1 unaffected (hidden in the child)" size={34} color={INK} weight={600} at={K12.unaff + 4} />
				<ModelLine x={760} y={460} text="(b) I-1 Aa, I-2 Aa" at={K12.het + 4} size={34} />
				<Punnett x={820} y={560} cell={84} res={AaAa_D} top={['A', 'a']} side={['A', 'a']} gridAt={K12.sq - 4} topAt={K12.sq - 2} sideAt={K12.sq} fillAt={i => K12.sq + 4 + i * 5} discR={20} plain ring={i => (AaAa_D.cells[i].ph === 'unaffected' ? prog(f, K12.one4, 10) : 0)} />
				<ModelLine x={1060} y={660} text={`(c) ${AaAa_D.frac(c => c.ph === 'unaffected')} (25%) unaffected`} at={K12.one4} size={36} />
				<MistakeChip x={760} y={820} text="dominant, because most of the family has it" at={K12.ifw} cross={K12.isnt} size={30} />
				<GreyTag x={760} y={910} text="cite individuals; dominant does not mean common" at={K12.cite} size={28} />
			</Overlay>
		</>
	);
};

// ---------- 11c. Attempt two (round and wrinkled seeds) ----------
const K13 = cues(S('attempt-two'), {second: 'Second', round: 'round seeds are dominant', plant: 'A plant grown from a round seed', wr: 'grown from a wrinkled seed', prod: 'The cross produces', n52: '52 round seeds', n48: '48 wrinkled seeds', use: 'Use a Punnett square', then: 'Then explain why', pause: 'Pause here to answer'});
const D2A = '(a) Use a Punnett square to find the genotype of the round parent.';
const D2B = '(b) Explain why the counts are not exactly 50 : 50.';
export const SceneAttemptTwoB9: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Round and wrinkled pea seeds" at={K13.second} size={52} />
			<Overlay>
				<PlateB p={PL9.round} cx={260} cy={330} w={130} o={prog(f, K13.plant, 12)} />
				<Sx x={260} y={440} text="round parent (seed)" size={30} color={INK} hand anchor="middle" at={K13.plant + 4} />
				<Sx x={430} y={346} text="×" size={56} color={INK} weight={800} anchor="middle" at={K13.wr} />
				<PlateB p={PL9.wrinkled} cx={600} cy={330} w={130} o={prog(f, K13.wr, 12)} />
				<Sx x={600} y={440} text="wrinkled parent (seed)" size={30} color={INK} hand anchor="middle" at={K13.wr + 4} />
				<Sx x={130} y={520} text="round (R) is dominant to wrinkled (r)" size={34} color={INK} weight={700} at={K13.round} />
				<Fade at={K13.prod}>
					<rect x={900} y={240} width={760} height={250} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					<Sx x={930} y={290} text="offspring seeds" size={34} color={INK_SOFT} hand />
				</Fade>
				<PlateB p={PL9.round} cx={980} cy={385} w={90} o={prog(f, K13.n52, 12)} />
				<Sx x={1040} y={404} text="52 round" size={44} color={INK} weight={800} at={K13.n52} />
				<PlateB p={PL9.wrinkled} cx={1320} cy={385} w={90} o={prog(f, K13.n48, 12)} />
				<Sx x={1380} y={404} text="48 wrinkled" size={44} color={INK} weight={800} at={K13.n48} />
				<Sx x={96} y={640} text={D2A} size={30} color={INK} weight={700} at={K13.use} />
				<AnswerBox x={96} y={656} w={1180} h={70} at={K13.use + 8} lines={1} />
				<Sx x={96} y={800} text={D2B} size={30} color={INK} weight={700} at={K13.then} />
				<AnswerBox x={96} y={816} w={1180} h={70} at={K13.then + 8} lines={1} />
				<Fade at={K13.use + 6}>
					<rect x={1400} y={600} width={240} height={240} rx={10} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 7" />
					<line x1={1520} y1={600} x2={1520} y2={840} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
					<line x1={1400} y1={720} x2={1640} y2={720} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
				</Fade>
				<Sx x={96} y={1046} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K13.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1740} y={920} r={50} />
			</Overlay>
		</>
	);
};

// ---------- 11d. Feedback two ----------
const K14 = cues(S('feedback-two'), {only: 'can only give the wrinkled allele', some: 'Some offspring are wrinkled', too: 'gave a wrinkled allele too', het: "It's heterozygous", sq: 'The square gives half', sep: 'Each seed is a separate chance', vary: 'vary a little around', ifs: 'If you said', homo: 'the round parent is homozygous', only2: 'would give only round seeds'});
/** Three seeded replays of 100 seeds (each a 1/2 chance of round), searched so the shown counts are real draws. */
const REPLAYS = (() => {
	const want = [52, 47, 50];
	for (let seed = 1; seed < 200000; seed++) {
		const r = rng(seed);
		const runs = want.map(() => Array.from({length: 100}, () => r() < 0.5));
		if (runs.every((run, k) => run.filter(Boolean).length === want[k])) return runs;
	}
	throw new Error('no replay seed found');
})();
export const SceneFeedbackTwoB9: React.FC = () => {
	const f = useCurrentFrame();
	const k = f < K14.sep + 30 ? 0 : f < K14.sep + 60 ? 1 : f < K14.sep + 90 ? 2 : 0;
	const run = REPLAYS[k];
	const nR = run.filter(Boolean).length;
	return (
		<>
			<Heading text="Question two: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={196} text="(a) genotype of the round parent, with a Punnett square   (b) why not exactly 50 : 50?" size={26} color={INK_SOFT} weight={600} at={0} />
				<PlateB p={PL9.wrinkled} cx={190} cy={310} w={90} />
				<GenoTag x={300} y={310} text="rr" size={32} o={prog(f, K14.only, 12)} />
				<PlateB p={PL9.round} cx={190} cy={470} w={90} />
				<GenoTag x={300} y={470} text={prog(f, K14.het, 1) > 0 ? 'Rr' : 'R ?'} size={32} o={prog(f, K14.too - 10, 12)} stroke={prog(f, K14.het, 1) > 0 ? AMBER : INK_SOFT} />
				<Punnett x={540} y={330} cell={100} res={Rrrr} top={['R', 'r']} side={['r', 'r']} gridAt={K14.only - 4} topAt={K14.het} sideAt={K14.only + 4} fillAt={i => K14.sq - 6 + i * 5} discR={24} plain
					hi={i => (Rrrr.cells[i].ph === 'wrinkled' ? prog(f, K14.sq + 20, 10) : 0)} />
				<ModelLine x={840} y={350} text="(a) Rr × rr gives 1 round : 1 wrinkled," at={K14.sq} size={34} />
				<Sx x={840} y={400} text="so the round parent is Rr" size={34} color={INK} weight={600} at={K14.sq + 10} />
				{/* three replays of 100 seeds */}
				<g opacity={fadeV(f, K14.sep - 6)}>
					{run.map((rd, i) => <circle key={i} cx={860 + (i % 20) * 24} cy={490 + Math.floor(i / 20) * 24} r={9} fill={rd ? '#f1c84b' : '#c9a04a'} stroke={rd ? '#a37a12' : '#6d5224'} strokeWidth={rd ? 1.5 : 3} />)}
					<Sx x={1360} y={556} text={`${nR} round : ${100 - nR} wrinkled`} size={34} color={INK} weight={800} />
					<Sx x={1360} y={600} text={`replay ${k + 1} of 3`} size={28} color={INK_SOFT} hand />
				</g>
				<ModelLine x={840} y={660} text="(b) each seed is an independent chance;" at={K14.sep} size={34} />
				<Sx x={840} y={710} text="a sample of 100 varies around 1 : 1" size={34} color={INK} weight={600} at={K14.vary} />
				{/* the classic mistake */}
				<MistakeChip x={96} y={860} text="the round parent is RR" at={K14.ifs} cross={K14.only2} size={32} />
				<Punnett x={760} y={850} cell={66} res={RRrr} top={['R', 'R']} side={['r', 'r']} gridAt={K14.homo} topAt={K14.homo + 2} sideAt={K14.homo + 4} fillAt={i => K14.homo + 8 + i * 4} discR={16} plain />
				<Sx x={940} y={930} text={`RR × rr: ${RRrr.phenText.replace('4 ', 'all ')}`} size={34} color={AMBER_INK} hand at={K14.only2} />
			</Overlay>
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const K15 = cues(S('decision-rule'), {write: "write the parents' genotypes", split: 'split each into its gametes', fill: 'fill the square', read: 'read the ratios as chances', ped: 'For a pedigree', give: 'look for the giveaway', test: 'test it against named people', then: 'and then use the square', next: 'Next genes on the X', alleles: "alleles that aren't simply"});
export const SceneDecisionB9: React.FC = () => {
	const f = useCurrentFrame();
	const steps: {at: number; text: string; icon: React.ReactNode}[] = [
		{at: K15.write, text: '1  genotypes', icon: <><AlleleChip x={190} y={272} t="T" r={20} /><AlleleChip x={236} y={272} t="t" r={20} /></>},
		{at: K15.split, text: '2  gametes', icon: <GameteDisc x={212} y={392} t="T" r={30} edge={CPLUM} />},
		{at: K15.fill, text: '3  square', icon: <g><rect x={186} y={486} width={56} height={56} rx={4} fill="#fffdf8" stroke={INK} strokeWidth={3} /><line x1={214} y1={486} x2={214} y2={542} stroke={INK} strokeWidth={2} /><line x1={186} y1={514} x2={242} y2={514} stroke={INK} strokeWidth={2} /></g>},
		{at: K15.read, text: '4  ratios = chances for each offspring', icon: <Coin x={214} y={636} r={22} from={K15.read} to={K15.read + 20} face="T" />},
	];
	return (
		<>
			<Heading text="For any cross" at={4} size={56} />
			<Overlay>
				{steps.map((s, i) => (
					<g key={i} opacity={prog(f, s.at, 12)}>
						{s.icon}
						<Chip x={290} y={238 + i * 120} text={s.text} at={s.at} size={42} color={INK} stroke={AMBER} />
					</g>
				))}
				<Trio x={214} y={762} sz={26} parentsAff={false} childAff o={prog(f, K15.ped, 12)} />
				<Chip x={290} y={742} text="pedigree: giveaway" at={K15.give} size={40} color={INK} stroke={TEALC} />
				<Chip x={730} y={742} text="then named people" at={K15.test} size={40} color={INK} stroke={TEALC} />
				<Chip x={1150} y={742} text="then the square" at={K15.then} size={40} color={INK} stroke={TEALC} />
				<Fade at={K15.next}>
					<rect x={1060} y={860} width={760} height={86} rx={24} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
					<PlateB p={PL9.fly} cx={1120} cy={903} w={70} />
					<Sx x={1180} y={918} text="Next: sex linkage" size={40} color={INK} hand />
				</Fade>
				<Fade at={K15.alleles}>
					<rect x={1060} y={960} width={760} height={86} rx={24} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
					<PlateB p={PL9.snapPink} cx={1110} cy={1003} w={46} />
					<Sx x={1180} y={1018} text="and beyond dominant and recessive" size={40} color={INK} hand />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = notesCheck([
	'Dominant allele: shows with one copy. Recessive allele: shows only with two copies. Homozygous: two of the same allele (TT, tt). Heterozygous: one of each (Tt).',
	'Each gamete gets one allele of each gene. Tt × Tt gives genotypes 1 TT : 2 Tt : 1 tt and phenotypes 3 tall : 1 short.',
	'A ratio is a chance for each offspring, not a guaranteed count. Large samples come closer to it.',
	'Test cross: cross with the homozygous recessive. Any recessive offspring means the parent is heterozygous (Tt × tt gives 1 : 1).',
	'Pedigrees: unaffected parents with an affected child: recessive. Affected parents with an unaffected child: dominant. Cite numbered individuals.',
]);
export const SceneNotesB9: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 175, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 22}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 500, color: INK, lineHeight: 1.28}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 110, top: 930}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 48, fontWeight: 700, color: AMBER_INK}}>Memory: Hidden in the parents: recessive. Hidden in the child: dominant.</div>
		</Enter>
	</>
);
void EDGE;
