// B9 scenes 11a to 13: two harder unseen items (pedigree P3; round and wrinkled seed counts) with brief feedback, the
// decision rule with the handoff, and the key notes. Each question card stays complete through its 10 s countdown and
// after it; nothing answer-bearing is on a card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AaAa_D, AlleleChip, AnswerBox, Chip, Coin, Countdown, CPLUM, EDGE, Enter, FONT_DISPLAY, FONT_HAND, Fade, GameteDisc, GenoTag, GreyTag,
	HandText, Heading, INK, INK_SOFT, MistakeChip, ModelLine, Overlay, P3, PL9, PSym, Pedigree, PlateB, Punnett, RRrr, Rrrr, S, Sx, TEALC, Trio, fadeV, hold,
	notesCheck, prog, rng, wrap, INSET, PlainArrow, SERIF, chipW,
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
				{/* the two seed kinds arrive with the dominance statement, then become the parents */}
				<PlateB p={PL9.round} cx={250} cy={350} w={200} o={prog(f, K13.round - 30, 12)} />
				<Sx x={250} y={510} text="round parent (seed)" size={34} color={INK} hand anchor="middle" at={K13.plant + 4} />
				<Sx x={450} y={370} text="×" size={64} color={INK} weight={800} anchor="middle" at={K13.wr} />
				<PlateB p={PL9.wrinkled} cx={650} cy={350} w={200} o={prog(f, K13.round - 20, 12)} />
				<Sx x={650} y={510} text="wrinkled parent (seed)" size={34} color={INK} hand anchor="middle" at={K13.wr + 4} />
				<Sx x={450} y={226} text="round (R) is dominant to wrinkled (r)" size={36} color={INK} weight={700} anchor="middle" at={K13.round} />
				<Fade at={K13.prod}>
					<rect x={900} y={240} width={900} height={290} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					<Sx x={930} y={292} text="offspring seeds" size={38} color={INK_SOFT} hand />
				</Fade>
				<PlateB p={PL9.round} cx={1000} cy={410} w={120} o={prog(f, K13.n52, 12)} />
				<Sx x={1076} y={430} text="52 round" size={52} color={INK} weight={800} at={K13.n52} />
				<PlateB p={PL9.wrinkled} cx={1400} cy={410} w={120} o={prog(f, K13.n48, 12)} />
				<Sx x={1476} y={430} text="48 wrinkled" size={52} color={INK} weight={800} at={K13.n48} />
				<Sx x={96} y={650} text={D2A} size={32} color={INK} weight={700} at={K13.use} />
				<AnswerBox x={96} y={668} w={1180} h={70} at={K13.use + 8} lines={1} />
				<Sx x={96} y={808} text={D2B} size={32} color={INK} weight={700} at={K13.then} />
				<AnswerBox x={96} y={826} w={1180} h={70} at={K13.then + 8} lines={1} />
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
const SC = {y: 190, h: 330, w: 400};
const scX = (i: number) => 290 + i * 440;
export const SceneDecisionB9: React.FC = () => {
	const f = useCurrentFrame();
	const ats = [K15.write, K15.split, K15.fill, K15.read];
	const names = ['genotypes', 'gametes', 'fill the square', 'ratios = chances'];
	const icy = SC.y + 150;
	const pedL: PLay = {x0: 150, y0: 640, gap: 130, row: 150, sz: 64};
	return (
		<>
			<Heading text="For any cross" at={4} size={56} />
			<Overlay>
				{/* four numbered steps; the frames stand ready, each fills on its cue */}
				{ats.map((at, i) => (
					<g key={i}>
						<Fade at={4 + i * 4}>
							<rect x={scX(i) - SC.w / 2} y={SC.y} width={SC.w} height={SC.h} rx={24} fill="#fffdf8" stroke={prog(f, at, 1) > 0 ? AMBER : 'rgba(60,45,20,0.22)'} strokeWidth={prog(f, at, 1) > 0 ? 4 : 3} />
							<circle cx={scX(i) - SC.w / 2 + 44} cy={SC.y + 44} r={28} fill={AMBER} />
							<text x={scX(i) - SC.w / 2 + 44} y={SC.y + 57} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36}} fill="#fffdf8">{i + 1}</text>
						</Fade>
						{i < 3 ? <path d={`M${scX(i) + SC.w / 2 + 8},${SC.y + SC.h / 2 - 14} L${scX(i) + SC.w / 2 + 30},${SC.y + SC.h / 2} L${scX(i) + SC.w / 2 + 8},${SC.y + SC.h / 2 + 14}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, ats[i + 1], 10)} /> : null}
						<Sx x={scX(i)} y={SC.y + 290} text={names[i]} size={40} color={INK} hand anchor="middle" at={at} />
					</g>
				))}
				<g opacity={prog(f, K15.write, 12)}><AlleleChip x={scX(0) - 36} y={icy} t="T" r={38} /><AlleleChip x={scX(0) + 36} y={icy} t="t" r={38} /></g>
				<g opacity={prog(f, K15.split, 12)}><GameteDisc x={scX(1) - 64} y={icy} t="T" r={48} edge={CPLUM} /><GameteDisc x={scX(1) + 64} y={icy} t="t" r={48} edge={CPLUM} /></g>
				<g opacity={prog(f, K15.fill, 12)}>
					<rect x={scX(2) - 80} y={icy - 80} width={160} height={160} rx={6} fill="#fffdf8" stroke={INK} strokeWidth={4} />
					<line x1={scX(2)} y1={icy - 80} x2={scX(2)} y2={icy + 80} stroke={INK} strokeWidth={3} />
					<line x1={scX(2) - 80} y1={icy} x2={scX(2) + 80} y2={icy} stroke={INK} strokeWidth={3} />
					{['TT', 'Tt', 'Tt', 'tt'].map((g, k) => <text key={k} x={scX(2) - 40 + (k % 2) * 80} y={icy - 40 + Math.floor(k / 2) * 80 + 12} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: 34}} fill={INK} opacity={prog(f, K15.fill + 6 + k * 4, 8)}>{g}</text>)}
				</g>
				<g opacity={prog(f, K15.read, 12)}><Coin x={scX(3)} y={icy} r={56} from={K15.read} to={K15.read + 20} face="T" /></g>
				<Sx x={scX(3)} y={SC.y + 322} text="for each offspring" size={28} color={INK_SOFT} hand anchor="middle" at={K15.read + 10} />
				{/* pedigrees: giveaway, named people, then the square */}
				<g opacity={prog(f, K15.ped, 12)}><Pedigree ped={INSET} L={pedL} nums={0} numerals={0} /></g>
				{(() => {
					const items: [string, number][] = [['pedigree: giveaway', K15.give], ['test it on named people', K15.test], ['then the square', K15.then]];
					let x = 380;
					return items.map(([t, at], k) => {
						const x0 = x;
						x += chipW(t, 40) + 70;
						return (
							<g key={t}>
								{k > 0 ? <PlainArrow x1={x0 - 60} y1={670} x2={x0 - 12} y2={670} at={at} color={INK_SOFT} /> : null}
								<Chip x={x0} y={640} text={t} at={at} size={40} color={INK} stroke={TEALC} />
							</g>
						);
					});
				})()}
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
	'Dominant: shows with one copy. Recessive: shows only with two.',
	'Homozygous: TT or tt. Heterozygous: Tt.',
	'Each gamete gets one allele of each gene.',
	'Tt × Tt: 1 TT : 2 Tt : 1 tt, so 3 tall : 1 short.',
	'A ratio is a chance for each offspring, not a fixed count.',
	'Test cross: cross with tt. Any short offspring: the parent is Tt.',
	'In pedigree answers, cite numbered individuals.',
]);
const NoteTrio: React.FC<{parentsAff: boolean; childAff: boolean}> = ({parentsAff, childAff}) => (
	<svg width={150} height={120} viewBox="0 0 150 120" style={{flex: 'none'}}>
		<Trio x={75} y={30} sz={36} parentsAff={parentsAff} childAff={childAff} />
	</svg>
);
export const SceneNotesB9: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={60} cps={40} /></div>
		<div style={{position: 'absolute', left: 110, top: 180, width: 1120}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 8} style={{display: 'flex', gap: 20, marginBottom: 22}}>
					<div style={{flex: 'none', width: 16, height: 16, marginTop: 16, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 36, fontWeight: 500, color: INK, lineHeight: 1.22}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={80} style={{position: 'absolute', left: 1300, top: 200, width: 520, boxSizing: 'border-box', padding: '26px 30px', borderRadius: 24, border: `4px solid ${AMBER}`, background: '#fffdf8', boxShadow: '0 14px 34px rgba(60,45,20,0.10)'}}>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: AMBER_INK, lineHeight: 1}}>Remember: pedigrees</div>
			{([[false, true, 'Hidden in the parents:', 'recessive', INK], [true, false, 'Hidden in the child:', 'dominant', AMBER_INK]] as [boolean, boolean, string, string, string][]).map(([pa, ca, l1, l2, col]) => (
				<div key={l2} style={{display: 'flex', alignItems: 'center', gap: 12, marginTop: 18}}>
					<NoteTrio parentsAff={pa} childAff={ca} />
					<div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK, lineHeight: 1.05}}>{l1}</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: col, lineHeight: 1.05}}>{l2}</div>
					</div>
				</div>
			))}
			<div style={{height: 3, background: '#eadfc8', margin: '20px 0 16px'}} />
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 28, color: INK, lineHeight: 1.25}}>Then write genotypes and use a Punnett square for any probability.</div>
		</Enter>
		<Enter at={150} style={{position: 'absolute', left: 110, top: 960}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 40, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
	</>
);
void EDGE;
