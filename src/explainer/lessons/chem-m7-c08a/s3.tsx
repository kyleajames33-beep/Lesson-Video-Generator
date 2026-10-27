// M7 C08a scenes 14 to 19: attempt 1 (propan-1-ol: conc. acid; HBr under reflux), brief feedback ("addition" crossed),
// attempt 2 (butan-2-ol and 2-methylbutan-2-ol with excess dichromate under reflux), brief feedback (H counters; the two
// tubes; "butanoic acid" crossed), the handoff and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TEAL} from '../chem-m6-c01/parts';
import {AnswerChip, Crossed, QCardX, Tag} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {AlcAt, P, alc} from '../chem-m7-c05/parts';
import {EqRow, RingAt} from '../chem-m7-c06/parts';
import {DICH, hold, sc} from './common';
import {Ghosts, HChip, Hub, INK, NAVY, RED, Tube} from './parts';

const SY = 70;

// ---------- 14. Attempt 1 ----------
const Q1 = ['Propan-1-ol is used in two separate experiments. In experiment 1, it is heated with', 'concentrated sulfuric acid. In experiment 2, it is heated under reflux with hydrogen', 'bromide. For each experiment, name the organic product and identify the type of reaction.'];
const K14 = cues(sc('attempt-1'), {turn: 'Your turn', p: 'Propan-one-ol is', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K14.turn} />
		<QCardX lines={Q1} at={K14.p} y={200} size={38} />
		<PauseHold h={hold('attempt-1')} at={K14.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 15. Feedback 1 ----------
const K15 = cues(sc('feedback-1'), {acid: 'With concentrated', water: 'loses water', propene: 'giving propene', hbr: 'With hydrogen bromide', bromo: 'giving one-bromopropane', slip: 'Calling the', dbl: 'double bond'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={28} under={[{line: 1, phrase: 'concentrated sulfuric acid', at: K15.acid}, {line: 1, phrase: 'heated under reflux with hydrogen', at: K15.hbr}, {line: 2, phrase: 'name the organic product', at: K15.propene}, {line: 2, phrase: 'identify the type of reaction', at: K15.propene + 8}]} />
			<g opacity={dimAt(f, K15.hbr, 0.45)}>
				<EqRow left={[{t: 'CH_3CH_2CH_2OH', at: K15.acid}]} right={[{t: 'CH_3CH=CH_2', at: K15.water, color: TEAL}, {t: '+', at: K15.water}, {t: 'H_2O', at: K15.water}]} cx={800} y={390} size={40} len={240} arrow={{at: K15.acid + 6, above: [{t: 'conc. H_2SO_4, heat', at: K15.acid + 10}]}} />
				<AnswerChip x={1380} y={360} text="1: propene, dehydration" at={K15.propene} size={30} />
			</g>
			<EqRow left={[{t: 'CH_3CH_2CH_2OH', at: K15.hbr}, {t: '+', at: K15.hbr}, {t: 'HBr', at: K15.hbr}]} right={[{t: 'CH_3CH_2CH_2Br', at: K15.bromo - 10}, {t: '+', at: K15.bromo}, {t: 'H_2O', at: K15.bromo}]} cx={800} y={590} size={40} len={200} arrow={{at: K15.hbr + 6, above: [{t: 'reflux', at: K15.hbr + 10}]}} />
			<AnswerChip x={500} y={660} text="2: 1-bromopropane, substitution" at={K15.bromo + 20} size={30} />
			<Crossed x={140} y={820} text="Experiment 2: addition reaction" at={K15.slip} cross={K15.dbl} note="no C=C in an alcohol: the OH is replaced, and water forms" size={34} />
		</Overlay>
	);
};

// ---------- 16. Attempt 2 ----------
const Q2 = ['Butan-2-ol and 2-methylbutan-2-ol are each heated under reflux with excess acidified', 'potassium dichromate solution. For each alcohol, predict the colour change and the organic', 'product, if any. Explain the difference.'];
const K16 = cues(sc('attempt-2'), {last: 'Last one', b: 'Butan-two-ol and', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K16.last} />
		<QCardX lines={Q2} at={K16.b} y={200} size={38} />
		<PauseHold h={hold('attempt-2')} at={K16.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 17. Feedback 2 ----------
const K17 = cues(sc('feedback-2'), {sec: 'is secondary', one: 'has one hydrogen', ketone: 'a ketone,', green: 'turns green', ter: 'is tertiary', none: 'no hydrogen', no: 'no reaction', orange: 'stays orange', reflux: "Reflux doesn't", trap: 'the trap'});
const B2 = alc(4, 1), MB2 = alc(4, 1, [1]);
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const X = 260, S = 0.85, Y1 = 450, Y2 = 660;
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={28} under={[{line: 0, phrase: 'Butan-2-ol', at: K17.sec}, {line: 0, phrase: '2-methylbutan-2-ol', at: K17.ter}, {line: 1, phrase: 'predict the colour change', at: K17.green}, {line: 2, phrase: 'Explain the difference', at: K17.orange}, {line: 0, phrase: 'under reflux', at: K17.reflux}, {line: 0, phrase: 'excess', at: K17.reflux + 8}]} />
			<g opacity={dimAt(f, K17.ter, 0.6)}>
				<AlcAt a={B2} x={X} y={Y1} s={S} at={K17.sec - 10} />
				<RingAt c={P(B2.m, X, Y1, S, B2.c)} rx={28} ry={28} at={K17.sec} color={RED} />
				<Ghosts m={B2.m} x={X} y={Y1} s={S} i={B2.c} at={K17.one} />
				<HChip x={X + 230} y={Y1 + 20} t="1 H" at={K17.one + 10} />
				<EqRow left={[{t: 'CH_3CH(OH)CH_2CH_3', at: K17.ketone - 20}, {t: '+', at: K17.ketone - 20}, {t: '[O]', at: K17.ketone - 20, color: NAVY}]} right={[{t: 'CH_3COCH_2CH_3', at: K17.ketone}, {t: '+', at: K17.ketone}, {t: 'H_2O', at: K17.ketone}]} cx={960} y={Y1} size={30} len={130} arrow={{at: K17.ketone - 14}} />
				<Tag x={960} y={Y1 + 40} text="butan-2-one (butanone): ketone" at={K17.ketone + 10} size={24} color={RED} fill="#f9e1dc" anchor="middle" />
			</g>
			<Tube p={DICH.green} cx={1680} top={Y1 - 120} h={200} at={K17.green} />
			<AlcAt a={MB2} x={X} y={Y2} s={S} at={K17.ter - 10} />
			<RingAt c={P(MB2.m, X, Y2, S, MB2.c)} rx={28} ry={28} at={K17.ter} color={RED} />
			<HChip x={X + 230} y={Y2 - 20} t="0 H" at={K17.none} />
			<Tag x={900} y={Y2 - 20} text="tertiary: bonded to 3 C + O → no reaction" at={K17.no} size={26} />
			<Tube p={DICH.orange} cx={1680} top={Y2 - 110} h={200} at={K17.orange - 10} />
			<AnswerChip x={140} y={830} text="2°: 1 H → butan-2-one, orange → green.   3°: 0 H → no reaction, stays orange" at={K17.orange + 10} size={28} />
			<Crossed x={140} y={930} text="Butan-2-ol under reflux → butanoic acid" at={K17.reflux} cross={K17.trap} note="a ketone has no H on its C=O carbon: it stops" size={30} />
			{void vis}
		</Overlay>
	);
};

// ---------- 18. Handoff ----------
const K18 = cues(sc('handoff'), {so: 'So the', next: 'Next:'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Hub T={{at: K18.so - 20, inAt: K18.so - 20, inDim: K18.so, out: [K18.so - 20, K18.so - 20, K18.so - 20]}} s={0.72} x={160} y={20} />
			<g opacity={vis(f, K18.next)}>
				<rect x={400} y={820} width={1120} height={120} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={440} y={870} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={440} y={914} text="aldehyde or ketone: how can you tell?" size={34} color={INK} weight={700} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 19. Key notes ----------
const NOTES = [
	'Dehydration (removes H_2O; the OH and an H from the next carbon leave, a C=C forms): CH_3CH_2OH → CH_2=CH_2 + H_2O; conc. H_2SO_4 or conc. H_3PO_4, about 170 °C. It is hydration reversed (hydration: steam, H_3PO_4, about 300 °C, high pressure). Butan-2-ol gives but-2-ene (usually major) and but-1-ene.',
	'Substitution with HX: R–OH + HX → R–X + H_2O; heat under reflux (fume cupboard). CH_3CH_2OH + HBr → CH_3CH_2Br + H_2O. Water as a product marks it; alkene + HX is addition (they join into one molecule; no water).',
	'Oxidation with acidified (dilute H_2SO_4) K_2Cr_2O_7 (orange Cr_2O_7^{2−} → green Cr^{3+}); acidified KMnO_4 also works (purple → colourless): removes the H of O–H and an H from the C–OH carbon, giving C=O (carbonyl). 1° → aldehyde (distil it off) → carboxylic acid (reflux, excess oxidant). 2° → ketone (stops). 3° → no reaction, stays orange.',
	'CH_3CH_2OH + [O] → CH_3CHO + H_2O (ethanal); CH_3CH_2OH + 2[O] → CH_3COOH + H_2O (ethanoic acid); CH_3CH(OH)CH_3 + [O] → CH_3COCH_3 + H_2O (propanone). Green shows oxidation happened, not which product. Dichromate is toxic and carcinogenic: small amounts, gloves, goggles, collect waste.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={27} aidTop={820} aids={["Primary goes all the way, secondary stops at ketone, tertiary won't budge.", 'Distil to catch the aldehyde, reflux to go all the way.']} tag="dehydration, substitution with HX and oxidation of alcohols" />
);
