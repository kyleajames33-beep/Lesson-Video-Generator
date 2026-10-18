// P02 (Biology practical) scenes 14 to 17: the attempt (two R r parents, four offspring cards, the conclusion in a
// quote box, the allele key; kept through the 10 s countdown and after it; no expected values or fractions), brief
// feedback (1/2 x 1/2, 3/4 under each card, (3/4)^4 about 0.32, repeat and pool, one crossed-out mistake), the decision
// rule with the Punnett handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, Chip, Countdown, EDGE, Enter, FONT_DISPLAY, FONT_HAND, Fade, GCard, HandText, Heading, INK, INK_SOFT, MistakeChip, ModelLine, Overlay, P_NONE4,
	POOLED, N_POOL, Panel, S, Sx, TEAL, hold, notesCheck, prog, Chain, Coin,
} from './shared';
import {SPEC} from './s1';

const OFF = ['RR', 'Rr', 'Rr', 'Rr'];
const OffRow: React.FC<{x: number; y: number; at: number; w?: number}> = ({x, y, at, w = 130}) => {
	const f = useCurrentFrame();
	return <g>{OFF.map((t, i) => <GCard key={i} x={x + i * (w + 30)} y={y} t={t} w={w} o={prog(f, at + i * 6, 10)} />)}</g>;
};

// ---------- 14. Attempt ----------
const K14 = cues(S('attempt'), {turn: 'Your turn', parents: 'two parents that each have one round', four: 'only four fertilisations', none: 'None of the four offspring', conclude: 'They conclude', evaluate: 'Evaluate their conclusion', pause: 'Pause here to answer'});
const CONC = "\"rr offspring can't occur from these parents\"";
export const SceneAttemptP02: React.FC = () => {
	const h = hold('attempt');
	return (
		<>
			<Heading text="Your turn: four fertilisations, no rr" at={K14.turn} size={50} />
			<Overlay>
				<Chip x={120} y={250} text="parent: R r" at={K14.parents} size={36} color={INK} hand={false} weight={800} stroke={EDGE} />
				<Sx x={400} y={292} text="x" size={40} color={INK} weight={800} at={K14.parents + 6} />
				<Chip x={450} y={250} text="parent: R r" at={K14.parents + 6} size={36} color={INK} hand={false} weight={800} stroke={EDGE} />
				<Sx x={820} y={292} text="R = round allele, r = wrinkled allele" size={28} color={INK_SOFT} weight={700} at={K14.parents + 12} />
				<Chip x={120} y={350} text="4 fertilisations" at={K14.four} size={32} color={INK} hand={false} weight={700} stroke={AMBER} />
				<OffRow x={580} y={385} at={K14.none} />
				<Fade at={K14.conclude}>
					<Panel x={120} y={470} w={1180} h={100} stroke={INK_SOFT} dash="10 7" />
					<Sx x={150} y={532} text={'Conclusion: ' + CONC} size={34} color={INK} hand />
				</Fade>
				<Sx x={120} y={660} text="Evaluate their conclusion." size={36} color={INK} weight={700} at={K14.evaluate} />
				<AnswerBox x={120} y={685} w={1180} h={200} at={K14.evaluate + 8} lines={3} />
				<Sx x={96} y={1030} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K14.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1620} y={680} r={56} />
			</Overlay>
		</>
	);
};

// ---------- 15. Feedback ----------
const K15 = cues(S('feedback'), {not: "The conclusion isn't supported", each: 'Each parent can give a wrinkled allele', four: 'about one time in four', three: 'a three in four chance', miss: 'all four miss out', third: 'about one time in three', repeat: 'repeat many more times', pool: 'pool the results', said: 'If you said the model is wrong', small: 'the sample is just too small'});
export const SceneFeedbackP02: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={196} text={`R r x R r, 4 fertilisations, no rr. ${CONC} Evaluate.`} size={24} color={INK_SOFT} weight={600} at={0} />
				<Chip x={120} y={240} text="r: 1/2" at={K15.each} size={32} color={INK} hand={false} weight={800} stroke={TEAL} />
				<Sx x={290} y={282} text="x" size={36} color={INK} weight={800} at={K15.each + 6} />
				<Chip x={330} y={240} text="r: 1/2" at={K15.each + 6} size={32} color={INK} hand={false} weight={800} stroke={TEAL} />
				<Sx x={500} y={282} text="=" size={36} color={INK} weight={800} at={K15.four - 4} />
				<Chip x={540} y={240} text="rr: 1/4" at={K15.four} size={32} color={INK} hand={false} weight={800} stroke={AMBER} />
				<OffRow x={1000} y={280} at={-60} w={120} />
				{OFF.map((_, i) => <Sx key={i} x={1000 + i * 150} y={350} text="not rr: 3/4" size={22} color={AMBER_INK} weight={800} anchor="middle" at={K15.three + i * 5} />)}
				<ModelLine x={150} y={420} text="chance of no rr in 4 = 3/4 x 3/4 x 3/4 x 3/4 = (3/4)^{4}, about 0.32" at={K15.third - 6} size={32} />
				<Sx x={150} y={470} text={`(${P_NONE4.toFixed(3)}: about one time in three)`} size={26} color={INK_SOFT} weight={600} at={K15.third + 10} />
				<ModelLine x={150} y={560} text="not supported: rr is expected 1/4 of the time; 4 trials is too few" at={K15.not + 10} size={32} />
				<ModelLine x={150} y={620} text="repeat many more times and pool the class results" at={K15.repeat} size={32} />
				<Fade at={K15.pool}>
					<Panel x={150} y={660} w={620} h={70} stroke={TEAL} />
					<Sx x={174} y={706} text={`class pooled: rr ${POOLED.rr} of ${N_POOL} (example)`} size={28} color={INK} weight={700} />
				</Fade>
				<MistakeChip x={150} y={790} text="the model is wrong" at={K15.said} cross={K15.small - 10} size={30} />
				<Sx x={560} y={830} text="too few trials, not a bad model" size={36} color={AMBER_INK} hand at={K15.small} />
			</Overlay>
		</>
	);
};

// ---------- 16. Decision rule and handoff ----------
const K16 = cues(S('decision-rule'), {so: 'to model offspring variation', colour: "track each parent's chromosomes by colour", copy: 'copy before dividing', cross: 'cross over on a six', rand: 'randomise every pair', mut: 'add a mutation on purpose', rep: 'repeat enough times', next: 'Next: Punnett squares'});
export const SceneDecisionP02: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{t: 'Track by colour.', at: K16.colour}, {t: 'Copy first.', at: K16.copy}, {t: 'Die: cross over on a six, at matching points.', at: K16.cross},
		{t: 'Coin for each pair; random draw for fertilisation.', at: K16.rand}, {t: 'Mutation: a new allele, on purpose.', at: K16.mut}, {t: 'Repeat and pool.', at: K16.rep},
	];
	return (
		<>
			<Heading text="To model offspring variation" at={K16.so} size={54} />
			<Overlay>
				<Panel x={120} y={220} w={1180} h={560} stroke={AMBER} o={prog(f, K16.colour - 10, 12)} />
				{lines.map((l, i) => <Sx key={i} x={160} y={300 + i * 82} text={l.t} size={44} color={INK} hand at={l.at} />)}
				<g opacity={prog(f, K16.so, 14)}>
					<Chain x={180} y={830} spec={SPEC.Sp} r={10} />
					<Chain x={210} y={830} spec={SPEC.St} r={10} />
					<Coin x={300} y={870} r={24} from={-40} to={-10} face="P" />
					<GCard x={420} y={870} t="P T r" w={110} />
				</g>
				<Fade at={K16.next}>
					<Panel x={1340} y={760} w={500} h={190} stroke={AMBER} sw={3.5} />
					<Sx x={1370} y={812} text="Next: Punnett squares" size={36} color={INK} hand />
					<Sx x={1370} y={856} text="and pedigrees" size={36} color={INK} hand />
					{[0, 1].map(r => [0, 1].map(c => <rect key={r + '-' + c} x={1700 + c * 46} y={800 + r * 46} width={46} height={46} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />))}
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 17. Key notes ----------
const NOTES = notesCheck([
	'Model: two colours track maternal and paternal chromosomes; alleles at matching positions on homologues. Copy each chromosome (two sister chromatids, one centromere): count centromeres.',
	'Crossing over: swap matching segments between non-sister chromatids; new combinations of existing alleles. Roll a die: cross over only on a six (prophase I), so mixed gametes stay less common. Independent assortment: a coin for each pair (metaphase I). Two divisions give four haploid gametes. Without crossing over: 2^n types (n = 2 gives 4).',
	'Fertilisation: random draw of one gamete from each parent; zygote restores 2n. Mutation: replace one allele in a gamete with a new one; only mutation makes new alleles.',
	'Example Rr x Rr: four equally likely pairings (RR, Rr, rR, rr), so expected 1 RR : 2 Rr : 1 rr; observed varies by chance. Valid (tests what meiosis really does): follow the real rules. Reliable (repeats agree): many repeats, pool class results.',
	'Limits: only 2 pairs (humans 23: over 8 million combinations); crossover position and mutation chosen, not random; no DNA or spindle shown.',
]);
export const SceneNotesP02: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 160, width: 1720}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 24}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 14, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 33, fontWeight: 500, color: INK, lineHeight: 1.28}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 110, top: 930}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 46, fontWeight: 700, color: AMBER_INK, lineHeight: 1.15}}>Memory: Colour, copy, cross, coin, combine, change.</div>
			<div style={{fontFamily: FONT_DISPLAY, fontSize: 26, fontWeight: 600, color: INK_SOFT, marginTop: 6}}>Repeat and pool before you trust a pattern.</div>
		</Enter>
	</>
);
