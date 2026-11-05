// G03 (Biology) scenes 10a to 12: two unseen items (an overclaim about one carrier; a carrier estimate from a new
// incidence), each with brief feedback, the decision rule with the Module 6 handoff, and the key notes. Each question
// card stays complete through its 10 s countdown and after it; nothing answer-bearing is on a card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AnswerFrame, HWSquare} from './big';
import {NotesBoard} from '../bio-m5-g01/board';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, Countdown, DotArray, DrawPath, EDGE, Enter, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GreyTag, HandText, Heading, INK, INK_SOFT,
	ITEM_HW, MistakeChip, ModelLine, Overlay, Panel, PopBar, QMark, Ring, S, Sx, TEAL, World, CF, dotXY, hold, notesCheck, prog, tw,
} from './shared';

// ---------- 10a. Attempt one ----------
const K10 = cues(S('attempt'), {two: 'Two harder questions', study: 'a study of 50,000 adults', carriers: 'carriers of a variant', first: 'First, a study of 50,000 adults', twice: 'twice as often as non-carriers', report: 'A report about one carrier says', will: 'this person will get heart disease', what: 'What does the study support', rewrite: 'Rewrite the claim', pause: 'Pause here to answer'});
const D1A = '(a) What does the study support?';
const D1B = '(b) Rewrite the claim to match the evidence.';
const Study: React.FC<{y: number; s?: number; at?: [number, number, number]}> = ({y, s = 1, at = [-30, -30, -30]}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<g opacity={prog(f, at[0], 12)}>
				<Panel x={120} y={y} w={1680 * (s < 1 ? 1 : 0.62)} h={130 * s} />
				<Sx x={150} y={y + 52 * s} text="50,000 adults followed." size={34 * s} color={INK} weight={700} />
			</g>
			<Sx x={150} y={y + 104 * s} text="Carriers develop heart disease twice as often as non-carriers." size={32 * s} color={INK} weight={600} at={at[1]} />
			<g opacity={prog(f, at[2], 12)}>
				<rect x={s < 1 ? 1180 : 120} y={s < 1 ? y + 20 : y + 160} width={s < 1 ? 600 : 1040} height={90 * s} rx={45 * s} fill={CARD} stroke={AMBER} strokeWidth={3} strokeDasharray="10 7" />
				<Sx x={s < 1 ? 1210 : 160} y={(s < 1 ? y + 20 : y + 160) + 56 * s} text={"Report on one carrier: 'This person will get heart disease.'"} size={32 * s} color={INK} weight={600} />
			</g>
		</g>
	);
};
export const SceneAttemptG03: React.FC = () => {
	const h = hold('attempt');
	return (
		<>
			<Heading text="Example study: a heart disease variant" at={K10.first} size={50} />
			<Overlay>
				<Study y={220} at={[K10.first, K10.twice - 10, K10.report]} />
				<GreyTag x={1200} y={232} text="example study" at={K10.first + 10} size={22} />
				<Sx x={120} y={560} text={D1A} size={34} color={INK} weight={700} at={K10.what} />
				<AnswerBox x={120} y={580} w={1100} h={80} at={K10.what + 8} lines={1} />
				<Sx x={120} y={740} text={D1B} size={34} color={INK} weight={700} at={K10.rewrite} />
				<AnswerBox x={120} y={760} w={1100} h={80} at={K10.rewrite + 8} lines={1} />
				<StudyPicture at={K10.study} />
				<Sx x={96} y={1040} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K10.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1600} y={760} r={56} />
			</Overlay>
		</>
	);
};
/** Quality fix: the study drawn as it is read (adults, the carriers among them, twice as often, one carrier). */
const CARRIER_IDX = [3, 8, 14, 20, 27, 31, 38, 45, 50, 57, 62, 69];
const StudyPicture: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const X = 1300, Y = 300, PT = 44;
	const xy = (i: number) => [X + (i % 12) * PT, Y + Math.floor(i / 12) * PT] as const;
	const car = prog(f, K10.carriers, 12);
	const one = CARRIER_IDX[5];
	return (
		<g opacity={o}>
			<Panel x={1250} y={200} w={620} h={470} />
			<Sx x={1280} y={252} text="50,000 adults followed" size={36} color={INK} weight={700} />
			{Array.from({length: 72}, (_, i) => {
				const [x, y] = xy(i);
				const isC = CARRIER_IDX.includes(i);
				return <circle key={i} cx={x} cy={y} r={15} fill={CARD} stroke={isC && car > 0.5 ? AMBER : '#9aa0a6'} strokeWidth={isC && car > 0.5 ? 6 : 2.5} />;
			})}
			<Sx x={1280} y={590} text="carriers" size={36} color={AMBER_INK} hand at={K10.carriers} />
			<Sx x={1440} y={590} text="heart disease: ×2 as often" size={36} color={AMBER_INK} hand at={K10.twice} />
			<Ring cx={xy(one)[0]} cy={xy(one)[1]} rx={28} ry={28} at={K10.report + 6} />
			<QMark x={xy(one)[0] + 34} y={xy(one)[1] - 22} size={44} o={prog(f, K10.report + 10, 10)} />
			<Sx x={1280} y={644} text="one carrier: 'will get it'?" size={36} color={INK} hand at={K10.report + 10} />
		</g>
	);
};

// ---------- 10b. Feedback one ----------
const K11 = cues(S('feedback-one'), {group: 'supports a group trend', twice: 'have about twice the risk', cant: "It can't say what happens", genes: 'other genes, environment and chance', better: 'A better claim', higher: 'this person has a higher risk', ifs: 'And if you said', fifty: 'fifty per cent chance', small: 'twice a small risk can still be small'});
/** Illustrative absolute risks: 5 in 100 non-carriers, 10 in 100 carriers (twice). */
const NON = 5, CAR = 10;
if (CAR !== 2 * NON) throw new Error('G03 check: twice the risk');
export const SceneFeedbackOneG03: React.FC = () => {
	const f = useCurrentFrame();
	const pick = 63;
	const [px, py] = dotXY(1000, 320, pick, 38);
	return (
		<>
			<Heading text="Question one: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={186} text="Study: carriers get heart disease twice as often as non-carriers." size={30} color={INK_SOFT} weight={600} at={0} />
				<Sx x={96} y={228} text={`${D1A}   ${D1B}`} size={30} color={INK_SOFT} weight={600} at={0} />
				<g opacity={prog(f, K11.group, 12)}>
					<Sx x={140} y={286} text="non-carriers" size={30} color={INK} weight={800} />
					<DotArray x={160} y={320} pitch={38} r={14} filled={NON} seed={4} draw={prog(f, K11.group, 20)} fillP={prog(f, K11.group + 10, 20)} />
					<Sx x={1000 - 20} y={286} text="carriers" size={30} color={INK} weight={800} />
				</g>
				<DotArray x={1000} y={320} pitch={38} r={14} filled={CAR} seed={9} draw={prog(f, K11.group + 6, 20)} fillP={prog(f, K11.twice, 20)} />
				<Sx x={570} y={460} text={`${NON} in 100`} size={44} color={INK} weight={800} at={K11.group + 20} />
				<Sx x={1410} y={460} text={`${CAR} in 100`} size={44} color={AMBER_INK} weight={800} at={K11.twice} />
				<Sx x={1410} y={510} text="twice the risk" size={40} color={AMBER_INK} hand at={K11.twice} />
				<GreyTag x={570} y={540} text="example numbers" at={K11.group + 20} size={26} />
				<Ring cx={px} cy={py} rx={24} ry={24} at={K11.cant} />
				<QMark x={px + 34} y={py - 18} size={44} o={prog(f, K11.cant + 6, 10)} />
				<ModelLine x={160} y={760} text="(a) a group trend: carriers have about twice the risk" at={K11.group + 30} size={36} />
				<Sx x={160} y={806} text="not one person's outcome: other genes, environment, chance" size={30} color={INK_SOFT} weight={600} at={K11.genes} />
				<ModelLine x={160} y={868} text={"(b) 'This person has a higher risk of heart disease than a non-carrier.'"} at={K11.better} size={34} />
				<MistakeChip x={160} y={920} text="twice the risk = 50% chance" at={K11.ifs} cross={K11.fifty + 10} size={34} />
				<Sx x={820} y={966} text={`${NON} in 100 doubled is ${CAR} in 100`} size={40} color={AMBER_INK} hand at={K11.small} />
			</Overlay>
		</>
	);
};

// ---------- 10c. Attempt two ----------
const K12 = cues(S('attempt-two'), {second: 'Second', rec: 'A recessive condition affects', baby: 'one baby in 10,000', assume: 'Assuming Hardy-Weinberg', estimate: 'estimate the carrier frequency', explain: 'Then explain why', village: 'small, isolated village', pause: 'Pause here to answer'});
const D2A = '(a) Estimate the carrier frequency.';
const D2B = '(b) Why is it less reliable in a small, isolated village?';
const Givens2: React.FC<{x: number; y: number; at: [number, number, number]; s?: number}> = ({x, y, at, s = 1}) => (
	<g>
		<Fade at={at[0]}><Panel x={x} y={y} w={640 * s} h={220 * s} stroke={TEAL} /><Sx x={x + 24} y={y + 44 * s} text="givens" size={30 * s} color={INK_SOFT} hand /></Fade>
		<Sx x={x + 24} y={y + 96 * s} text="affected babies: 1 in 10,000 (two copies)" size={30 * s} color={INK} weight={700} at={at[0]} />
		<Sx x={x + 24} y={y + 144 * s} text="recessive" size={30 * s} color={INK} weight={700} at={at[1]} />
		<Sx x={x + 24} y={y + 192 * s} text="assume Hardy-Weinberg" size={30 * s} color={INK} weight={700} at={at[2]} />
	</g>
);
export const SceneAttemptTwoG03: React.FC = () => {
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Estimate the carrier frequency" at={K12.second} size={52} />
			<Overlay>
				<Givens2 x={120} y={200} at={[K12.baby, K12.rec + 4, K12.assume]} s={1.2} />
				<Sx x={120} y={560} text={D2A} size={34} color={INK} weight={700} at={K12.estimate} />
				<AnswerBox x={120} y={580} w={1100} h={80} at={K12.estimate + 8} lines={1} />
				<Sx x={120} y={740} text={D2B} size={34} color={INK} weight={700} at={K12.explain} />
				<AnswerBox x={120} y={760} w={1100} h={80} at={K12.village} lines={1} />
				<BabiesPicture />
				<Sx x={96} y={1040} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K12.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1600} y={760} r={56} />
			</Overlay>
		</>
	);
};

/** Quality fix: 10,000 babies as a fine dot field with one affected baby, then the small, isolated village. */
const BabiesPicture: React.FC = () => {
	const f = useCurrentFrame();
	const o = prog(f, K12.baby, 14);
	if (o <= 0.01) return null;
	const vil = prog(f, K12.village, 14);
	const X = 1300, Y = 230, W = 420;
	return (
		<g opacity={o}>
			<defs><pattern id="g03-babies" x={X} y={Y} width={4} height={4} patternUnits="userSpaceOnUse"><circle cx={2} cy={2} r={1.25} fill="#b9bec3" /></pattern></defs>
			<g opacity={1 - 0.75 * vil}>
				<Sx x={X} y={Y - 14} text="10,000 babies" size={36} color={INK} weight={700} />
				<rect x={X} y={Y} width={W} height={W} fill="#fffdf8" stroke={EDGE} strokeWidth={3} />
				<rect x={X} y={Y} width={W} height={W} fill="url(#g03-babies)" />
				<circle cx={X + 262} cy={Y + 146} r={9} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} />
				<Ring cx={X + 262} cy={Y + 146} rx={30} ry={30} at={K12.baby + 16} />
				<Sx x={X} y={Y + W + 50} text="1 in 10,000 affected (aa)" size={38} color={AMBER_INK} hand />
			</g>
			<g opacity={vil}>
				<circle cx={X + W / 2} cy={Y + W / 2} r={150} fill="#fffdf8" stroke={AMBER} strokeWidth={4} strokeDasharray="12 9" />
				{Array.from({length: 24}, (_, i) => { const a = i * 2.4, rr = 26 + (i % 6) * 20; return <circle key={i} cx={X + W / 2 + Math.cos(a) * rr} cy={Y + W / 2 + Math.sin(a) * rr} r={9} fill={CARD} stroke={INK} strokeWidth={2.5} />; })}
				<Sx x={X} y={Y + W + 100} text="a small, isolated village" size={38} color={INK} hand />
			</g>
		</g>
	);
};

// ---------- 10d. Feedback two ----------
const K13 = cues(S('feedback-two'), {sq: "The allele's frequency, squared", q: 'is 0.01', p: "the normal allele's is 0.99", carriers: 'Carriers are two times', about: 'one person in 50', village: 'In a small village', brk: 'break the assumptions', ifs: 'And if you said one in 10,000', affected: "that's the affected babies"});
export const SceneFeedbackTwoG03: React.FC = () => {
	const H = ITEM_HW;
	return (
		<>
			<Heading text="Question two: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={186} text={`${D2A}   ${D2B}`} size={30} color={INK_SOFT} weight={600} at={0} />
				{/* givens card */}
				<Fade at={0}>
					<Panel x={70} y={226} w={540} h={210} stroke={TEAL} sw={4} />
					<Sx x={96} y={272} text="givens" size={34} color={TEAL} hand />
					<Sx x={96} y={326} text="affected: 1 in 10,000 (aa)" size={34} color={INK} weight={700} />
					<Sx x={96} y={372} text="recessive" size={34} color={INK} weight={700} />
					<Sx x={96} y={418} text="assume Hardy-Weinberg" size={34} color={INK} weight={700} />
				</Fade>
				<HWSquare x={80} y={470} c={170} at={K13.carriers} ringAt={[K13.carriers + 20, K13.carriers + 30]} />
				{/* working, one line per stage, colours as in scene 5 */}
				<Sx x={680} y={300} text={`q^{2} = 1/10,000 = ${H.q2.toFixed(4)}`} size={56} color={AMBER_INK} weight={800} at={K13.sq} />
				<Sx x={680} y={390} text={`q = √${H.q2.toFixed(4)} = ${H.q.toFixed(2)}`} size={56} color={AMBER_INK} weight={800} at={K13.q} />
				<Sx x={680} y={480} text={`p = 1 − q = ${H.p.toFixed(2)}`} size={56} color={TEAL} weight={800} at={K13.p} />
				<Sx x={680} y={570} text={`carriers = 2pq = 2 × ${H.p.toFixed(2)} × ${H.q.toFixed(2)} = ${H.carriers.toFixed(4)}`} size={48} color={INK} weight={800} at={K13.carriers} />
				<AnswerFrame x={680} y={608} w={700} h={112} at={K13.about} text={`(a) ≈ 0.02, 1 in ${H.oneIn}`} size={58} />
				<ModelLine x={680} y={790} text="(b) small village: chance shifts allele frequencies;" at={K13.village} size={36} />
				<Sx x={730} y={836} text="relatives marrying: not random mating" size={36} color={INK} weight={600} at={K13.brk} />
				<MistakeChip x={680} y={890} text="carriers = 1 in 10,000" at={K13.ifs} cross={K13.affected} size={38} />
				<Sx x={1200} y={950} text="that's q^{2}: the affected babies" size={44} color={AMBER_INK} hand at={K13.affected + 10} />
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const K14 = cues(S('decision-rule'), {predicts: 'predicts group patterns well', risk: 'risk across a group', carrier: 'carrier frequencies', alleles: 'how alleles are spread', related: 'how related populations are', cant: "can't fix one person's future", mod5: 'Module 5 showed', next: 'Next, in Module 6'});
const CHAIN = ['reproduction', 'cell division', 'gene expression', 'inheritance', 'populations'];
const CHAIN_X = CHAIN.reduce<number[]>((acc, c, i) => [...acc, i ? acc[i - 1] + tw(CHAIN[i - 1], 30) + 64 : 110], []);
// Quality fix: four large cards (2 x 2) with icons at about 2.5 times their old size, and the dashed limit card.
export const SceneDecisionG03: React.FC = () => {
	const f = useCurrentFrame();
	const card = (i: number) => ({x: 90 + (i % 2) * 880, y: 190 + Math.floor(i / 2) * 230});
	const cards: {at: number; t: string; icon: (x: number, y: number) => React.ReactNode}[] = [
		{at: K14.risk, t: 'risk across a group', icon: (x, y) => <DotArray x={x + 30} y={y + 30} pitch={15} r={5.6} filled={72} seed={7} />},
		{at: K14.carrier, t: 'carrier frequencies', icon: (x, y) => <PopBar x={x + 14} y={y + 70} w={200} h={52} affected={CF.q2} carriers={CF.carriers} labels={false} />},
		{at: K14.alleles, t: 'how alleles are spread', icon: (x, y) => <World M={{x: x - 6, y: y + 20, w: 250}} id="dmap" band={() => 1} strokeW={1.5} />},
		{at: K14.related, t: 'how related populations are', icon: (x, y) => <DrawPath d={`M${x + 20},${y + 95} C${x + 70},${y + 95} ${x + 70},${y + 45} ${x + 120},${y + 45} M${x + 20},${y + 95} C${x + 70},${y + 95} ${x + 70},${y + 145} ${x + 120},${y + 145} M${x + 120},${y + 145} C${x + 160},${y + 145} ${x + 160},${y + 120} ${x + 210},${y + 120} M${x + 120},${y + 145} C${x + 160},${y + 145} ${x + 160},${y + 170} ${x + 210},${y + 170} M${x + 120},${y + 45} L${x + 210},${y + 45}`} at={-100} color={INK_SOFT} width={4} />},
	];
	return (
		<>
			<Heading text="What population genetics predicts well" at={K14.predicts} size={52} />
			<Overlay>
				{cards.map((c, i) => {
					const {x, y} = card(i);
					return (
						<g key={i} opacity={prog(f, c.at, 12)}>
							<Panel x={x} y={y} w={850} h={200} stroke={AMBER} sw={3.5} />
							{c.icon(x + 10, y + 5)}
							<Sx x={x + 290} y={y + 118} text={c.t} size={50} color={INK} hand />
						</g>
					);
				})}
				<g opacity={prog(f, K14.cant, 12)}>
					<Panel x={90} y={660} w={1730} h={130} stroke={GREYT} sw={3.5} dash="12 8" />
					<circle cx={200} cy={725} r={22} fill="#9aa0a6" />
					<circle cx={200} cy={725} r={38} fill="none" stroke={AMBER} strokeWidth={5} />
					<QMark x={250} y={700} size={48} />
					<Sx x={320} y={744} text="can't fix one person's future" size={54} color={INK_SOFT} hand />
				</g>
				<g opacity={prog(f, K14.mod5, 12)}>
					{CHAIN.map((c, i) => {
						const x = CHAIN_X[i], w = tw(c, 30);
						return (
							<g key={c}>
								<Sx x={x} y={930} text={c} size={30} color={INK_SOFT} weight={600} />
								{i < CHAIN.length - 1 ? <DrawPath d={`M${x + w + 12},${920} L${CHAIN_X[i + 1] - 12},${920}`} at={K14.mod5 + i * 6} dur={8} color={GREYT} width={3} /> : null}
							</g>
						);
					})}
					<Sx x={110} y={880} text="Module 5" size={32} color={INK_SOFT} hand />
				</g>
				<Fade at={K14.next}>
					<Panel x={1320} y={950} w={500} h={96} stroke={AMBER} sw={3.5} />
					<Sx x={1350} y={1010} text="Next: Module 6, genetic change" size={36} color={INK} hand />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
// Quality fix: eight one-line bullets at 34 px and the framed memory aid (bio-m5-g01's NotesBoard), replacing five
// paragraphs at 33 px.
const NOTES = notesCheck([
	"Population data predict group patterns well, not one person's outcome.",
	'Example: about 72 in 100 BRCA1 carriers are estimated to get breast cancer by 80.',
	"A variant raises risk but doesn't fix the outcome (other genes, environment, chance).",
	'Higher probability is not certainty; testing negative is not a guarantee.',
	'Hardy-Weinberg (recessive): affected = q², q = √(affected), p = 1 − q, carriers = 2pq.',
	'It holds for large, randomly mating populations with no selection, migration or mutation.',
	'Genetic results inform relatives: each child has a 1 in 2 chance of a parent\'s variant.',
	"Write 'suggests', 'indicates increased risk', 'more likely'; not 'proves' or 'will'.",
]);
export const SceneNotesG03: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Population evidence, population conclusions. Genetic risk is not genetic destiny." tag="Rare disease, common carriers: carriers = 2pq." size={34} aidTop={700} />
);
void EDGE; void INK_SOFT; void Enter; void FONT_DISPLAY; void FONT_HAND; void HandText;
