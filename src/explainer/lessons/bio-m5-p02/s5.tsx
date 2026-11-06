// P02 (Biology practical) scenes 14 to 17: the attempt (two R r parents, four offspring cards, the conclusion in a
// quote box, the allele key; kept through the 10 s countdown and after it; no expected values or fractions), brief
// feedback (1/2 x 1/2, 3/4 under each card, (3/4)^4 about 0.32, repeat and pool, one crossed-out mistake), the decision
// rule with the Punnett handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, Chip, Countdown, EDGE, Enter, FONT_DISPLAY, FONT_HAND, Fade, GCard, HandText, Heading, INK, INK_SOFT, MistakeChip, ModelLine, Overlay, P_NONE4,
	POOLED, N_POOL, Panel, S, Sx, TEAL, hold, notesCheck, prog, Chain, Coin, Chromo, Loop, Die, pulse, PlainArrow,
} from './shared';
import {SPEC} from './s1';

const OFF = ['RR', 'Rr', 'Rr', 'Rr'];
const OffRow: React.FC<{x: number; y: number; at: number; w?: number}> = ({x, y, at, w = 130}) => {
	const f = useCurrentFrame();
	return <g>{OFF.map((t, i) => <GCard key={i} x={x + i * (w + 30)} y={y} t={t} w={w} o={prog(f, at + i * 6, 10)} />)}</g>;
};

/** One R r parent in the bead model: a string loop holding the short pair (plum R from its mother, teal r from its father). */
const ParentCell: React.FC<{x: number; y: number; o: number; label?: string; ringR?: number}> = ({x, y, o, label, ringR = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<Loop x={x} y={y} rx={95} ry={125} />
		<Chromo x={x - 32} y={y - 66} a={SPEC.Sp} />
		<Chromo x={x + 32} y={y - 66} a={SPEC.St} aProps={{stkRing: ringR}} />
		{label ? <Sx x={x} y={y + 170} text={label} size={34} color={INK} weight={800} anchor="middle" /> : null}
	</g>
));

// ---------- 14. Attempt ----------
const K14 = cues(S('attempt'), {turn: 'Your turn', parents: 'two parents that each have one round', four: 'only four fertilisations', none: 'None of the four offspring', conclude: 'They conclude', evaluate: 'Evaluate their conclusion', pause: 'Pause here to answer'});
const CONC = "\"rr offspring can't occur from these parents\"";
export const SceneAttemptP02: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('attempt');
	return (
		<>
			<Heading text="Your turn: four fertilisations, no rr" at={K14.turn} size={50} />
			<Overlay>
				<Chip x={120} y={250} text="parent: R r" at={K14.parents} size={36} color={INK} hand={false} weight={800} stroke={EDGE} />
				<Sx x={400} y={292} text="x" size={40} color={INK} weight={800} at={K14.parents + 6} />
				<Chip x={450} y={250} text="parent: R r" at={K14.parents + 6} size={36} color={INK} hand={false} weight={800} stroke={EDGE} />
				<Sx x={820} y={292} text="R = round, r = wrinkled" size={30} color={INK_SOFT} weight={700} at={K14.parents + 12} />
				<Chip x={120} y={350} text="4 fertilisations" at={K14.four} size={32} color={INK} hand={false} weight={700} stroke={AMBER} />
				<OffRow x={580} y={385} at={K14.none} />
				<Fade at={K14.conclude}>
					<Panel x={120} y={470} w={1180} h={100} stroke={INK_SOFT} dash="10 7" />
					<Sx x={150} y={532} text={'Conclusion: ' + CONC} size={34} color={INK} hand />
				</Fade>
				<Sx x={120} y={660} text="Evaluate their conclusion." size={36} color={INK} weight={700} at={K14.evaluate} />
				<AnswerBox x={120} y={685} w={1180} h={200} at={K14.evaluate + 8} lines={3} />
				{/* the bead model the group used: two R r parents */}
				<ParentCell x={1450} y={400} o={prog(f, 36, 14)} label="R r" />
				<Sx x={1590} y={410} text="x" size={44} color={INK} weight={800} anchor="middle" at={K14.parents} />
				<ParentCell x={1730} y={400} o={prog(f, K14.parents, 14)} label="R r" />
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
				<Sx x={96} y={196} text={`R r x R r, 4 fertilisations, no rr. ${CONC} Evaluate.`} size={28} color={INK_SOFT} weight={600} at={0} />
				<Chip x={120} y={240} text="r: 1/2" at={K15.each} size={32} color={INK} hand={false} weight={800} stroke={TEAL} />
				<Sx x={290} y={282} text="x" size={36} color={INK} weight={800} at={K15.each + 6} />
				<Chip x={330} y={240} text="r: 1/2" at={K15.each + 6} size={32} color={INK} hand={false} weight={800} stroke={TEAL} />
				<Sx x={500} y={282} text="=" size={36} color={INK} weight={800} at={K15.four - 4} />
				<Chip x={540} y={240} text="rr: 1/4" at={K15.four} size={32} color={INK} hand={false} weight={800} stroke={AMBER} />
				<OffRow x={1000} y={280} at={-60} w={120} />
				{OFF.map((_, i) => <Sx key={i} x={1000 + i * 150} y={355} text="not rr: 3/4" size={26} color={AMBER_INK} weight={800} anchor="middle" at={K15.three + i * 5} />)}
				<ModelLine x={150} y={420} text="chance of no rr in 4 = 3/4 x 3/4 x 3/4 x 3/4 = (3/4)^{4}, about 0.32" at={K15.third - 6} size={32} />
				<Sx x={150} y={470} text={`(${P_NONE4.toFixed(3)}: about one time in three)`} size={26} color={INK_SOFT} weight={600} at={K15.third + 10} />
				<ModelLine x={150} y={560} text="not supported: rr is expected 1/4 of the time; 4 trials is too few" at={K15.not + 10} size={32} />
				<ModelLine x={150} y={620} text="repeat many more times and pool the class results" at={K15.repeat} size={32} />
				<Fade at={K15.pool}>
					<Panel x={150} y={660} w={620} h={70} stroke={TEAL} />
					<Sx x={174} y={706} text={`class pooled: rr ${POOLED.rr} of ${N_POOL} (example)`} size={28} color={INK} weight={700} />
				</Fade>
				{/* the bead model: each parent can give its r; one r from each makes rr */}
				<ParentCell x={1460} y={560} o={prog(f, 0, 14)} ringR={pulse(f, K15.each, 40)} />
				<ParentCell x={1730} y={560} o={prog(f, 0, 14)} ringR={pulse(f, K15.each + 6, 40)} />
				<PlainArrow x1={1500} y1={720} x2={1570} y2={800} at={K15.four - 10} color={AMBER_INK} width={4} />
				<PlainArrow x1={1690} y1={720} x2={1620} y2={800} at={K15.four - 10} color={AMBER_INK} width={4} />
				<GCard x={1595} y={850} t="r r" w={150} o={prog(f, K15.four, 10)} amber={1} />
				<Sx x={1595} y={930} text="about 1 in 4" size={34} color={AMBER_INK} hand anchor="middle" at={K15.four + 6} />
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
				{lines.map((l, i) => <Panel key={'p' + i} x={120} y={244 + i * 82} w={1180} h={72} r={14} stroke={i === 5 ? AMBER : EDGE} o={prog(f, l.at - 6, 10)} />)}
				{lines.map((l, i) => <Sx key={i} x={160} y={296 + i * 82} text={l.t} size={44} color={INK} hand at={l.at} />)}
				{/* the bead model kit stays large on the right; each piece glows as its rule is said */}
				<g opacity={prog(f, 0, 14)}>
					<Loop x={1590} y={420} rx={190} ry={170} hot={pulse(f, K16.colour, 40)} />
					<Chromo x={1490} y={300} a={SPEC.Lp} b={SPEC.Lp} dup={prog(f, K16.copy, 16)} cen={prog(f, K16.copy, 16)} r={13} />
					<Chromo x={1580} y={300} a={SPEC.Lt} b={SPEC.Lt} dup={prog(f, K16.copy, 16)} cen={prog(f, K16.copy, 16)} r={13} />
					<Chromo x={1670} y={360} a={SPEC.Sp} r={13} />
					<Chromo x={1730} y={360} a={SPEC.St} r={13} />
					<Die x={1440} y={660} w={110} pips={6} ring={pulse(f, K16.cross, 40)} />
					<Coin x={1590} y={665} r={44} from={-40} to={-10} face="P" />
					<GCard x={1740} y={665} t="P T r" w={140} ring={pulse(f, K16.mut, 40)} />
				</g>
				<Fade at={K16.next}>
					<Panel x={1340} y={780} w={500} h={190} stroke={AMBER} sw={3.5} />
					<Sx x={1370} y={832} text="Next: Punnett squares" size={36} color={INK} hand />
					<Sx x={1370} y={876} text="and pedigrees" size={36} color={INK} hand />
					{[0, 1].map(r => [0, 1].map(c => <rect key={r + '-' + c} x={1700 + c * 46} y={820 + r * 46} width={46} height={46} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />))}
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 17. Key notes ----------
const NOTES = notesCheck([
	'Two colours track the chromosomes from each parent; alleles sit at matching positions.',
	'Copy each chromosome first: two sister chromatids joined at one centromere.',
	'Crossing over (die: only on a six): swap matching segments; new combinations of existing alleles.',
	'Independent assortment: a coin for each pair. Without crossing over, 2 pairs give 4 gamete types.',
	'Fertilisation: a random draw of one gamete from each parent restores 2n.',
	'Mutation: only mutation makes a new allele.',
	'Rr x Rr: expected 1 RR : 2 Rr : 1 rr. Observed varies by chance, so repeat and pool.',
]);
export const SceneNotesP02: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 180, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 16}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 16, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 38, fontWeight: 500, color: INK, lineHeight: 1.25}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={100} style={{position: 'absolute', left: 110, top: 740, width: 1700, height: 230, boxSizing: 'border-box', padding: '22px 34px', background: '#fffdf8', border: `4px solid ${AMBER}`, borderRadius: 26}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 34, fontWeight: 700, color: AMBER_INK}}>Remember</div>
			<div style={{fontFamily: FONT_HAND, fontSize: 46, fontWeight: 700, color: INK, lineHeight: 1.25}}>Colour, copy, cross, coin, combine, change.<br />Repeat and pool before you trust a pattern.</div>
			<svg width={260} height={220} viewBox="0 0 260 220" style={{position: 'absolute', right: 30, top: 2}}>
				<Chromo x={95} y={28} a={SPEC.Sp} b={SPEC.Sp} dup={1} cen={1} r={15} />
				<Chromo x={175} y={28} a={SPEC.St} b={SPEC.St} dup={1} cen={1} r={15} />
			</svg>
		</Enter>
	</>
);
