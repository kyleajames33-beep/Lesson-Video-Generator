// G03 (Biology) scenes 10a to 12: two unseen items (an overclaim about one carrier; a carrier estimate from a new
// incidence), each with brief feedback, the decision rule with the Module 6 handoff, and the key notes. Each question
// card stays complete through its 10 s countdown and after it; nothing answer-bearing is on a card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, Countdown, DotArray, DrawPath, EDGE, Enter, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GreyTag, HandText, Heading, INK, INK_SOFT,
	ITEM_HW, MistakeChip, ModelLine, Overlay, Panel, PopBar, QMark, Ring, S, Sx, TEAL, World, CF, dotXY, hold, notesCheck, prog, tw,
} from './shared';

// ---------- 10a. Attempt one ----------
const K10 = cues(S('attempt'), {two: 'Two harder questions', first: 'First, a study of 50,000 adults', twice: 'twice as often as non-carriers', report: 'A report about one carrier says', will: 'this person will get heart disease', what: 'What does the study support', rewrite: 'Rewrite the claim', pause: 'Pause here to answer'});
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
				<Sx x={96} y={1040} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K10.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1600} y={720} r={56} />
			</Overlay>
		</>
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
	const [px, py] = dotXY(1000, 300, pick, 30);
	return (
		<>
			<Heading text="Question one: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={196} text={`Study: carriers get heart disease twice as often.   ${D1A}   ${D1B}`} size={25} color={INK_SOFT} weight={600} at={0} />
				<g opacity={prog(f, K11.group, 12)}>
					<Sx x={140} y={270} text="non-carriers" size={30} color={INK} weight={800} />
					<DotArray x={160} y={300} pitch={30} r={11} filled={NON} seed={4} draw={prog(f, K11.group, 20)} fillP={prog(f, K11.group + 10, 20)} />
					<Sx x={1000 - 20} y={270} text="carriers" size={30} color={INK} weight={800} />
				</g>
				<DotArray x={1000} y={300} pitch={30} r={11} filled={CAR} seed={9} draw={prog(f, K11.group + 6, 20)} fillP={prog(f, K11.twice, 20)} />
				<Sx x={140} y={630} text={`${NON} in 100`} size={34} color={INK} weight={800} at={K11.group + 20} />
				<Sx x={980} y={630} text={`${CAR} in 100: twice the risk`} size={34} color={AMBER_INK} weight={800} at={K11.twice} />
				<GreyTag x={480} y={606} text="example numbers" at={K11.group + 20} size={22} />
				<Ring cx={px} cy={py} rx={20} ry={20} at={K11.cant} />
				<QMark x={px + 30} y={py - 16} size={40} o={prog(f, K11.cant + 6, 10)} />
				<ModelLine x={160} y={720} text="(a) a group trend: carriers have about twice the risk" at={K11.group + 30} size={32} />
				<Sx x={160} y={764} text="not one person's outcome: other genes, environment, chance" size={28} color={INK_SOFT} weight={600} at={K11.genes} />
				<ModelLine x={160} y={830} text={"(b) 'This person has a higher risk of heart disease than a non-carrier.'"} at={K11.better} size={30} />
				<MistakeChip x={160} y={890} text="twice the risk = 50% chance" at={K11.ifs} cross={K11.fifty + 10} size={30} />
				<Sx x={760} y={928} text={`${NON} in 100 doubled is ${CAR} in 100`} size={34} color={AMBER_INK} hand at={K11.small} />
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
				<Givens2 x={120} y={220} at={[K12.baby, K12.rec + 4, K12.assume]} />
				<Sx x={120} y={560} text={D2A} size={34} color={INK} weight={700} at={K12.estimate} />
				<AnswerBox x={120} y={580} w={1100} h={80} at={K12.estimate + 8} lines={1} />
				<Sx x={120} y={740} text={D2B} size={34} color={INK} weight={700} at={K12.explain} />
				<AnswerBox x={120} y={760} w={1100} h={80} at={K12.village} lines={1} />
				<Sx x={96} y={1040} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K12.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1600} y={720} r={56} />
			</Overlay>
		</>
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
				<Sx x={96} y={196} text={`Affected: 1 in 10,000; recessive; Hardy-Weinberg.   ${D2A}   ${D2B}`} size={25} color={INK_SOFT} weight={600} at={0} />
				<Sx x={160} y={300} text={`q^{2} = 1/10,000 = ${H.q2.toFixed(4)}`} size={44} color={INK} weight={800} at={K13.sq} />
				<Sx x={160} y={370} text={`q = √${H.q2.toFixed(4)} = ${H.q.toFixed(2)}`} size={44} color={INK} weight={800} at={K13.q} />
				<Sx x={160} y={440} text={`p = 1 − q = ${H.p.toFixed(2)}`} size={44} color={INK} weight={800} at={K13.p} />
				<Sx x={160} y={510} text={`carriers = 2pq = 2 × ${H.p.toFixed(2)} × ${H.q.toFixed(2)} = ${H.carriers.toFixed(4)}`} size={44} color={INK} weight={800} at={K13.carriers} />
				<ModelLine x={160} y={590} text={`(a) about ${H.carriers.toFixed(2)}, or 1 in ${H.oneIn}`} at={K13.about} size={40} />
				<ModelLine x={160} y={670} text="(b) small population: chance shifts frequencies;" at={K13.village} size={32} />
				<Sx x={160} y={714} text="relatives marrying: not random mating" size={32} color={INK} weight={600} at={K13.brk} />
				<MistakeChip x={160} y={800} text="carriers = 1 in 10,000" at={K13.ifs} cross={K13.affected} size={32} />
				<Sx x={700} y={840} text="that's q^{2}: the affected babies" size={38} color={AMBER_INK} hand at={K13.affected + 10} />
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const K14 = cues(S('decision-rule'), {predicts: 'predicts group patterns well', risk: 'risk across a group', carrier: 'carrier frequencies', alleles: 'how alleles are spread', related: 'how related populations are', cant: "can't fix one person's future", mod5: 'Module 5 showed', next: 'Next, in Module 6'});
const CHAIN = ['reproduction', 'cell division', 'gene expression', 'inheritance', 'populations'];
const CHAIN_X = CHAIN.reduce<number[]>((acc, c, i) => [...acc, i ? acc[i - 1] + tw(CHAIN[i - 1], 26) + 64 : 130], []);
export const SceneDecisionG03: React.FC = () => {
	const f = useCurrentFrame();
	const rows: {at: number; t: string; grey?: boolean; icon: React.ReactNode}[] = [
		{at: K14.risk, t: 'risk across a group', icon: <DotArray x={128} y={262} pitch={9} r={3.3} filled={72} seed={7} />},
		{at: K14.carrier, t: 'carrier frequencies', icon: <PopBar x={120} y={398} w={100} h={24} affected={CF.q2} carriers={CF.carriers} labels={false} />},
		{at: K14.alleles, t: 'how alleles are spread', icon: <World M={{x: 106, y: 490, w: 130}} id="dmap" band={() => 1} strokeW={1} />},
		{at: K14.related, t: 'how related populations are', icon: <g><DrawPath d="M120,620 C150,620 150,596 180,596 M120,620 C150,620 150,644 180,644 M180,644 C200,644 200,632 222,632 M180,644 C200,644 200,656 222,656" at={-100} color={INK_SOFT} width={3} /></g>},
		{at: K14.cant, t: "can't fix one person's future", grey: true, icon: <g><circle cx={170} cy={748} r={14} fill="#9aa0a6" /><circle cx={170} cy={748} r={24} fill="none" stroke={AMBER} strokeWidth={4} /></g>},
	];
	return (
		<>
			<Heading text="What population genetics predicts well" at={K14.predicts} size={52} />
			<Overlay>
				{rows.map((r, i) => (
					<g key={i} opacity={prog(f, r.at, 12)}>
						{r.icon}
						<Panel x={270} y={228 + i * 128} w={980} h={92} stroke={r.grey ? GREYT : AMBER} sw={3.5} dash={r.grey ? '10 7' : undefined} />
						<Sx x={300} y={288 + i * 128} text={r.t} size={44} color={r.grey ? INK_SOFT : INK} hand />
					</g>
				))}
				<g opacity={prog(f, K14.mod5, 12)}>
					{CHAIN.map((c, i) => {
						const x = CHAIN_X[i], w = tw(c, 26);
						return (
							<g key={c}>
								<Sx x={x} y={900} text={c} size={26} color={INK_SOFT} weight={600} />
								{i < CHAIN.length - 1 ? <DrawPath d={`M${x + w + 12},${892} L${CHAIN_X[i + 1] - 12},${892}`} at={K14.mod5 + i * 6} dur={8} color={GREYT} width={3} /> : null}
							</g>
						);
					})}
					<Sx x={130} y={860} text="Module 5" size={26} color={INK_SOFT} hand />
				</g>
				<Fade at={K14.next}>
					<Panel x={1340} y={760} w={480} h={110} stroke={AMBER} sw={3.5} />
					<Sx x={1370} y={828} text="Next: Module 6, genetic change" size={34} color={INK} hand />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = notesCheck([
	'Population data predict group patterns well (risk patterns, carrier frequencies, allele distributions), not one person\'s outcome. Example: about 72 in 100 BRCA1 carriers are estimated to develop breast cancer by age 80.',
	'A variant raises risk without guaranteeing the phenotype (the working copy must also be lost; other genes, other factors, chance). Higher probability is not certainty; testing negative is not a guarantee.',
	'Hardy-Weinberg (recessive condition): affected = q^{2}, so q = square root; p = 1 minus q; carriers = 2pq. E.g. 1 in 2,500 affected gives carriers about 1 in 25.',
	'It holds for large, randomly mating populations with no selection, migration or mutation. A gap between prediction and data means something is acting. Small populations: chance makes long-range prediction fail.',
	'Genetic results inform relatives (each child: 1 in 2). Use cautious wording: "suggests", "indicates increased risk", "more likely".',
]);
const supText = (t: string) => t.split(/(\^\{[^}]*\})/g).map((part, i) => (part.startsWith('^{') ? <sup key={i} style={{fontSize: '0.62em'}}>{part.slice(2, -1)}</sup> : <React.Fragment key={i}>{part}</React.Fragment>));
export const SceneNotesG03: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 170, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 20}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 33, fontWeight: 500, color: INK, lineHeight: 1.26}}>{supText(n)}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 110, top: 930}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 46, fontWeight: 700, color: AMBER_INK, lineHeight: 1.15}}>Memory: Population evidence, population conclusions.<br />Genetic risk is not genetic destiny. Rare disease, common carriers.</div>
		</Enter>
	</>
);
void EDGE; void INK_SOFT;
