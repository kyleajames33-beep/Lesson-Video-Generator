// B8-15 scenes 10a to 12: question 1 (a stuck stapes) with a plain ear plate; its brief feedback (givens underlined, a
// small pathway strip with the break at the ossicles and the bone conduction arc, answer lines, crossed slip); question 2
// (factory noise); its feedback (damaged hair cells, the implant arc to the nerve, answer lines, crossed slip); the
// decision rule on the pathway strip (the break slides, the matching arc lights) and the handoff to b16; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {NotesBoard} from '../bio-m5-g01/board';
import {
	AMBER_INK, AnsBox, BLUE, Box, C_AID, C_BC, C_CI, CARD, Chip, EarStack, HscTag, INK, Mistake, ON, Pause, PicH, PlateB, PreRing, QPart, RED, Ring, Strip, Svg, Sx, Title, earPt, marksCheck, prog, sgSmall, smooth,
} from './parts';
import type {EarG, QMark} from './parts';
import {ARC_AID} from './s1';
import {ARC_BC, ARC_CI} from './s2';
import {EP, PL} from './assets';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

// ---------- 10a. question 1 ----------
const KA = K('attempt', {pause: 'Pause here'});
export const SceneAttempt: React.FC = () => (
	<Svg>
		<Title text="Question 1: a stuck stapes" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={720} />
		<QPart blocks={Q1_STEM} x={126} y={240} w={1150} size={46} />
		<QPart blocks={Q1_DEM} x={126} y={500} w={1150} size={46} />
		<EarStack g={{cx: 1580, cy: 400, w: 420}} base={PL.ear} />
		<Pause h={hold('attempt')} at={KA.pause} tx={1340} ty={690} cx={1745} cy={790} r={46} />
		<PreRing at={KA.pause} start={hold('attempt').startFrame} x={1745} y={790} r={46} />
	</Svg>
);

// ---------- 10b. feedback one ----------
const KB = K('feedback-one', {conductive: 'conductive loss', stuck: 'stuck stapes', still: 'which still works', skull: 'through the skull', skipping: 'skipping the', bypass: 'would bypass', surgery: 'surgery could', classic: 'classic mistake', choosing: 'choosing the'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: 'fixed the stapes', at: KB.stuck},
	{phrase: 'cochlea and auditory nerve work normally', at: KB.still},
]);
const SGB = sgSmall(780, 250, 1044);
const GB: EarG = {cx: 390, cy: 760, w: 300};
export const SceneFeedbackOne: React.FC = () => (
	<Svg>
		<Title text="Feedback: conductive, so skip the stapes" />
		<HscTag />
		<Box x={40} y={150} w={700} h={780} />
		<QPart blocks={Q1_STEM} marks={M_B} x={62} y={212} w={656} size={33} />
		<QPart blocks={Q1_DEM} marks={M_B} x={62} y={440} w={656} size={33} />
		<EarStack g={GB} base={PL.ear} />
		<Ring cx={earPt(GB, EP.stapes)[0]} cy={earPt(GB, EP.stapes)[1]} rx={22} ry={22} at={KB.stuck} color={RED} width={6} seed={6} />
		<Ring cx={earPt(GB, EP.cochlea)[0]} cy={earPt(GB, EP.cochlea)[1]} rx={40} ry={40} at={KB.still} color={'#2f8a5b'} width={6} seed={8} />
		<Strip g={SGB} s={{
			lit: [ON, ON, ON, ON, ON, ON],
			brk: [{after: 2, at: KB.stuck}],
			tick: [{i: 3, at: KB.still}, {i: 4, at: KB.still + 10}],
			arcs: [{...ARC_BC(KB.skull), rise: 80}],
		}} />
		<AnsBox x={780} y={360} w={1044} h={340} label="answer" size={40} sizeOld={32} lines={[
			{t: '(a) conductive hearing loss', at: KB.conductive},
			{t: '(b) bone conduction: vibration through the skull to the working cochlea, skipping the stapes', at: KB.skull},
			{t: 'cochlear implant: bypasses healthy hair cells; surgery risks natural hearing', at: KB.bypass},
		]} />
		<Mistake x={780} y={736} text="choose the most advanced device" size={36} at={KB.classic} cross={KB.choosing} note="match the device to the break" noteW={1040} />
		{void AMBER_INK}{void C_AID}{void C_CI}{void ARC_AID}{void ARC_CI}
	</Svg>
);

// ---------- 10c. question 2 ----------
const KC = K('attempt-two', {pause: 'Pause here'});
export const SceneAttemptTwo: React.FC = () => (
	<Svg>
		<Title text="Question 2: factory noise" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={720} />
		<QPart blocks={Q2_STEM} x={126} y={240} w={1150} size={46} />
		<QPart blocks={Q2_DEM} x={126} y={600} w={1150} size={46} />
		<PicH p={PL.hcBad} cx={1580} cy={380} h={260} />
		<Sx x={1580} y={560} text="hair cells after noise" size={30} color={INK} hand anchor="middle" at={ON} />
		<Pause h={hold('attempt-two')} at={KC.pause} tx={1340} ty={690} cx={1745} cy={790} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-two').startFrame} x={1745} y={790} r={46} />
	</Svg>
);

// ---------- 10d. feedback two ----------
const KD = K('feedback-two', {noise: 'Noise has destroyed', little: 'little left', bypasses: 'An implant bypasses', stimulates: 'stimulates the working', access: 'access to sound', wont: "won't be normal", few: 'few electrodes', balance: 'On balance', classic: 'classic mistake', writing: 'writing that'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: 'loud factories', at: KD.noise},
	{phrase: 'profound sensorineural', at: KD.noise + 8},
	{phrase: 'Powerful hearing aids gave almost no benefit', at: KD.little},
	{phrase: 'both auditory nerves work', at: KD.stimulates},
]);
const SGD = sgSmall(780, 250, 1044);
export const SceneFeedbackTwo: React.FC = () => (
	<Svg>
		<Title text="Feedback: a cochlear implant, evaluated" />
		<HscTag />
		<Box x={40} y={150} w={700} h={780} />
		<QPart blocks={Q2_STEM} marks={M_D} x={62} y={212} w={656} size={33} />
		<QPart blocks={Q2_DEM} marks={M_D} x={62} y={500} w={656} size={33} />
		<PicH p={PL.hcBad} cx={390} cy={720} h={190} at={KD.noise} />
		<Strip g={SGD} s={{
			lit: [ON, ON, ON, ON, ON, ON],
			bad: [{i: 3, at: KD.noise}],
			tick: [{i: 4, at: KD.stimulates}],
			arcs: [{...ARC_CI(KD.stimulates), rise: 80}],
		}} />
		<AnsBox x={780} y={360} w={1044} h={360} label="answer" size={38} sizeOld={30} lines={[
			{t: 'how: bypasses hair cells, stimulates working nerves', at: KD.bypasses},
			{t: 'benefit: access to sound, including speech', at: KD.access},
			{t: 'limits: about 12 to 22 electrodes, months of learning, surgery', at: KD.few},
			{t: 'judgement: a strong choice here', at: KD.balance},
		]} />
		<Mistake x={780} y={746} text="the implant restores normal hearing" size={36} at={KD.classic} cross={KD.writing} note="access to sound, not normal hearing" noteW={1040} />
		{void AMBER_INK}{void C_AID}{void C_BC}
	</Svg>
);

// ---------- 11. decision rule ----------
const KR = K('decision-rule', {any: 'So for', follow: 'follow the sound', ask: 'Ask what', choose: 'choose the device', past: 'just past', next: 'Next'});
const GR: EarG = {cx: 340, cy: 450, w: 470};
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const next = prog(f, KR.next, 14);
	// the break sits at the ossicles first, then slides to the cochlea
	const slideAt = KR.choose;
	const s = smooth(prog(f, slideAt, 24));
	const P = (p: [number, number]) => earPt(GR, p);
	const a = P(EP.stapes), b = P(EP.cochlea);
	const mk: [number, number] = [a[0] + (b[0] - a[0]) * s, a[1] + (b[1] - a[1]) * s];
	return (
		<Svg>
			<Title text="For any hearing technology question" />
			<EarStack g={GR} base={PL.ear} />
			{f >= KR.follow ? <g opacity={prog(f, KR.follow, 10)}><circle cx={mk[0]} cy={mk[1]} r={44} fill="none" stroke={CARD} strokeWidth={12} /><circle cx={mk[0]} cy={mk[1]} r={44} fill="none" stroke={RED} strokeWidth={7} /></g> : null}
			<Sx x={700} y={250} text="follow the sound to the break" size={52} color={BLUE} hand at={KR.follow} />
			<Chip x={700} y={300} text="what still works? deliver the signal past the break" size={34} color={AMBER_INK} ink={INK} at={KR.ask} />
			<Sx x={700} y={440} text="break at the ossicles: bone conduction or hearing aid" size={36} color={C_BC} hand at={KR.follow + 20} out={slideAt} />
			<Sx x={700} y={440} text="break at the hair cells: cochlear implant" size={36} color={C_CI} hand at={slideAt + 10} />
			<g opacity={next}>
				<rect x={900} y={600} width={924} height={130} rx={65} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<PicH p={PL.eye} cx={990} cy={665} h={100} />
				<Sx x={1070} y={678} text="Next: How can technology assist visual disorders?" size={34} color={INK} hand at={ON} />
			</g>
			<Strip s={{
				lit: [ON, ON, ON, ON, ON, ON],
				brk: [{after: 2, at: KR.follow, out: slideAt}],
				bad: [{i: 3, at: slideAt + 10}],
				arcs: [ARC_AID(KR.follow + 20, slideAt), ARC_BC(KR.follow + 20, slideAt), ARC_CI(slideAt + 10)],
			}} />
			{void C_AID}{void PlateB}{void Ring}
		</Svg>
	);
};

// ---------- 12. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={44} aidTop={690} tag="louder, or skip the broken part" aid="Follow the sound to the break." notes={[
		'Path: outer ear, eardrum, ossicles, cochlea, auditory nerve.',
		'Conductive: outer or middle ear. Sensorineural: hair cells, nerve.',
		'Hearing aid: louder sound, normal path; needs working hair cells.',
		'Bone conduction implant: skull vibration reaches the cochlea.',
		'Cochlear implant: skips hair cells; access to sound, not normal hearing.',
	]} />
);
