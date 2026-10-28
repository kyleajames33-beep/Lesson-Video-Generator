// M7 C11 scenes 13 to 18: attempt 1 (three C4H11N amines), brief feedback (butan-1-amine; 2°, 3°; N–H count; "all
// three hydrogen bond" crossed), attempt 2 (litmus for acid, amine, amide), brief feedback, the handoff, key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {AnswerChip, Crossed, QCardX, Tag, VIOLET} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, vis} from '../chem-m7-c04a/parts';
import {alc} from '../chem-m7-c05/parts';
import {EqRow, Plate} from '../chem-m7-c06/parts';
import {Charge, acidK} from '../chem-m7-c09/parts';
import {LT, SOAP, hold, sc} from './common';
import {INDIGO, INK, NAVY, NCount, SkN, amideOf, amineOf, chainN, nbrPts} from './parts';

const SY = 60;
const QA = amineOf(alc(4, 3)), QB = chainN(5, 2, [], true), QC = chainN(4, 2, [[0, 1]], false);
const Pn = (m: {pts: V2[]}, i: number, x: number, y: number, s: number): V2 => [x + m.pts[i][0] * s, y + m.pts[i][1] * s];

// ---------- 13. Attempt 1 ----------
const Q1 = ['The three amines below all have the molecular formula C₄H₁₁N.', 'A: CH₃CH₂CH₂CH₂NH₂, boiling point 78 °C.   B: CH₃CH₂NHCH₂CH₃, boiling point 55 °C.', 'C: CH₃CH₂N(CH₃)₂, boiling point 37 °C.', '(a) Give the IUPAC name of amine A, and classify amines B and C as primary, secondary or tertiary.', '(b) Explain the order of the boiling points, with reference to the intermolecular forces present.'];
const K13 = cues(sc('attempt-1'), {turn: 'Your turn', three: 'Three amines', pause: 'Pause here'});
const XS = [400, 900, 1400];
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K13.turn} />
		<QCardX lines={Q1} at={K13.three} y={180} size={30} />
		{[QA, QB, QC].map((m, i) => <g key={i}><Sx x={XS[i] - 190} y={650} text={'ABC'[i]} size={36} color={INK} weight={800} at={K13.three + 20} /><SkN m={m} x={XS[i]} y={660} s={0.85} at={K13.three + 20 + i * 6} ink /></g>)}
		<PauseHold h={hold('attempt-1')} at={K13.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 14. Feedback 1 ----------
const K14 = cues(sc('feedback-1'), {a: 'butan-one-amine', b: 'B has two', sec: 'secondary', c: 'C has three', ter: 'tertiary', same: 'With the same', two: 'A has two', one: 'B has one', none: 'none', fewer: 'Fewer N H', trap: 'trap'});
export const SceneFeedback1: React.FC = () => {
	const Y = 470, S = 0.85;
	const ms = [QA, QB, QC];
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={22} under={[{line: 3, phrase: 'IUPAC name of amine A', at: K14.a}, {line: 3, phrase: 'classify', at: K14.b}, {line: 0, phrase: 'C₄H₁₁N', at: K14.same}, {line: 1, phrase: '78 °C', at: K14.two}, {line: 1, phrase: '55 °C', at: K14.one}, {line: 2, phrase: '37 °C', at: K14.none}, {line: 4, phrase: 'intermolecular forces', at: K14.fewer}]} />
			{ms.map((m, i) => <g key={i}><Sx x={XS[i] - 190} y={Y - 10} text={'ABC'[i]} size={34} color={INK} weight={800} at={-100} /><SkN m={m} x={XS[i]} y={Y} s={S} at={-100} /></g>)}
			<AnswerChip x={XS[0]} y={Y + 140} text="butan-1-amine" at={K14.a} size={32} anchor="middle" />
			<NCount n={Pn(QB, QB.n, XS[1], Y, S)} nb={nbrPts(QB, QB.n, XS[1], Y, S)} at={K14.b + 10} />
			<AnswerChip x={XS[1]} y={Y + 140} text="secondary" at={K14.sec} size={32} anchor="middle" />
			<NCount n={Pn(QC, QC.n, XS[2], Y, S)} nb={nbrPts(QC, QC.n, XS[2], Y, S)} at={K14.c + 6} />
			<AnswerChip x={XS[2]} y={Y + 140} text="tertiary" at={K14.ter} size={32} anchor="middle" />
			<Tag x={960} y={700} text="same formula: similar dispersion" at={K14.same} size={26} anchor="middle" />
			{['2 N–H', '1 N–H', '0 N–H'].map((t, i) => <Tag key={i} x={XS[i]} y={760} text={t} at={[K14.two, K14.one, K14.none][i]} size={30} color={VIOLET} fill="#e6ddf5" anchor="middle" />)}
			<Tag x={960} y={830} text="fewer N–H: less hydrogen bonding, lower boiling point" at={K14.fewer} size={26} color={NAVY} fill="#e7edf8" anchor="middle" />
			<Crossed x={140} y={900} text="All three amines hydrogen bond to each other." at={K14.trap - 30} cross={K14.trap} note="C has no N–H to give" size={30} />
		</Overlay>
	);
};

// ---------- 15. Attempt 2 ----------
const Q2 = ['Separate aqueous solutions of propanoic acid, propan-1-amine and propanamide are prepared.', '(a) Predict the effect of each solution on red litmus paper and on blue litmus paper.', '(b) Explain the results for propan-1-amine and for propanamide.'];
const K15 = cues(sc('attempt-2'), {last: 'Last one', p: 'Propanoic acid', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K15.last} />
		<QCardX lines={Q2} at={K15.p} y={200} size={34} />
		<PauseHold h={hold('attempt-2')} at={K15.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 16. Feedback 2 ----------
const K16 = cues(sc('feedback-2'), {red: 'red.', amine: 'Propan-one-amine', blue: 'blue,', because: 'because', neither: 'neither', shares: 'shares', trap: 'trap', saying: 'Saying'});
const PAM = amideOf(acidK(3));
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const cols = [{t: 'propanoic acid', x: 380}, {t: 'propan-1-amine', x: 960}, {t: 'propanamide', x: 1540}];
	const T = 320, H = 110;
	const ax = 1540, ay = 720;
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={26} under={[{line: 0, phrase: 'propanoic acid', at: K16.red}, {line: 0, phrase: 'propan-1-amine', at: K16.amine}, {line: 0, phrase: 'propanamide', at: K16.neither}, {line: 2, phrase: 'Explain the results', at: K16.shares}]} />
			{cols.map((c, i) => (
				<g key={i}>
					<Sx x={c.x} y={T - 14} text={c.t} size={28} color={INK} anchor="middle" weight={700} at={0} />
					<Plate p={LT.red} to={i === 1 ? LT.toBlue : undefined} swap={K16.blue - 6} cx={c.x - 110} top={T} h={H} at={0} />
					<Plate p={LT.blue} to={i === 0 ? LT.red : undefined} swap={K16.red - 6} cx={c.x + 110} top={T} h={H} at={0} />
				</g>
			))}
			<Tag x={380} y={T + H + 20} text="blue → red" at={K16.red} size={26} color="#a33b2a" fill="#f9e1dc" anchor="middle" />
			<Tag x={960} y={T + H + 20} text="red → blue" at={K16.blue} size={26} color={NAVY} fill="#e7edf8" anchor="middle" />
			<Tag x={1540} y={T + H + 20} text="no change" at={K16.neither} size={26} anchor="middle" />
			<EqRow left={[{t: 'CH_3CH_2CH_2NH_2', at: K16.because}, {t: '+', at: K16.because}, {t: 'H_2O', at: K16.because}]} right={[{t: 'CH_3CH_2CH_2NH_3⁺', at: K16.because + 10}, {t: '+', at: K16.because + 10}, {t: 'OH⁻', at: K16.because + 10}]} cx={720} y={580} size={36} len={130} arrow={{at: K16.because + 6, eqAt: K16.because + 6}} />
			<Tag x={720} y={630} text="lone pair takes H⁺: more OH⁻" at={K16.because + 20} size={24} color={INDIGO} fill="#e2e5f7" anchor="middle" />
			<g opacity={vis(f, K16.neither)}>
				<SkN m={PAM} x={ax} y={ay} s={0.85} at={K16.neither} />
				<Charge p={Pn(PAM, PAM.n, ax, ay, 0.85)} at={K16.shares} r={34} />
				<Charge p={Pn(PAM, PAM.o, ax, ay, 0.85)} at={K16.shares + 10} r={34} />
				<Tag x={ax} y={ay + 110} text="lone pair shared; no O–H" at={K16.shares + 10} size={24} color="#5e4a8c" fill="#e4ddf0" anchor="middle" />
			</g>
			<Crossed x={96} y={880} text="Propanamide turns blue litmus red: it has a C=O like an acid." at={K16.saying} cross={K16.trap} note="no O–H: not an acid" size={28} />
		</Overlay>
	);
};

// ---------- 17. Handoff ----------
const K17 = cues(sc('handoff'), {so: 'So the', next: 'Next:'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Amines are organic ammonia." at={K17.so} size={44} x={120} y={180} color={TEAL} />
			<TaskLine text="Amine: free pair, a base. Amide: shared pair, barely a base." at={K17.so + 20} size={36} x={120} y={250} color={TEAL} />
			<g opacity={vis(f, K17.next)}>
				<Plate p={SOAP} cx={1450} top={380} h={220} />
				<CT x={400} y={500} text="C_17H_35COO⁻ Na⁺" size={48} />
				<rect x={400} y={720} width={1120} height={120} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={440} y={770} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={440} y={814} text="how do soaps and detergents lift oil into water?" size={34} color={INK} weight={700} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	'Amine: ammonia with H replaced by alkyl groups (carbon chains, no C=O on N); N has a lone pair. Classify by carbon groups on N: 1° (RNH₂), 2° (R₂NH), 3° (R₃N). Propan-2-amine is 1°. Names: ethanamine, propan-1-amine, N-methylethanamine, N,N-dimethylethanamine.',
	'Amide: C=O bonded to N, –CONH₂ (acid + amine, heated strongly → amide + water, condensation). Names: "-amide", the C=O carbon is C1: ethanamide, propanamide, N-methylethanamide.',
	'Amine forces: N less electronegative than O, so N–H is less polar and amine hydrogen bonds are weaker (propan-1-amine 48 °C, propan-1-ol 97 °C). Isomers: fewer N–H, lower boiling point, 1° > 2° > 3° (N-methylethanamine 37 °C; trimethylamine 3 °C, no N–H).',
	'Amide forces: primary amides have two N–H + C=O, so more hydrogen bonds per molecule and a network (propanamide 213 °C > propanoic acid 141 °C, which pairs off as dimers). Similar size: primary amide > acid > alcohol > amine > alkane. Longer chain, higher boiling point.',
	'Amine = weak base: RNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻ (more OH⁻: red litmus → blue). With HCl: RNH₂ + HCl → RNH₃⁺Cl⁻ (an ionic salt). Amide: lone pair delocalised (shared) with the C=O, so it barely takes H⁺ and is close to neutral; no O–H, so not acidic.',
	'Acid against base: carboxylic acid gives H⁺ (O–H), turns blue litmus red, fizzes with NaHCO₃; amine takes H⁺ (lone pair), turns red litmus blue, no fizz. Together at room temperature: a salt (CH₃COOH + CH₃NH₂ → CH₃NH₃⁺CH₃COO⁻), not an amide.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={22} aidTop={860} aids={['Amines are organic ammonia.', 'Amine: free pair, a base. Amide: shared pair, barely a base.']} tag="amines and amides: names, forces and acid-base behaviour" />
);
