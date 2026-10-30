// M7 P04 scenes 13 to 18: attempt 1 (litmus in the refluxed flask), brief feedback (word, feature, fix; "repeat the
// litmus test" crossed), attempt 2 (pentan-2-ol and 2-methylbutan-2-ol with Tollens'), brief feedback ("green, so a
// mirror" crossed), the decision rule and handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TaskLine} from '../chem-m6-p02/parts';
import {Crossed, QCardX, Tag} from '../chem-m7-c01/molecules';
import {SkelAt} from '../chem-m7-c02/parts';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {Plate, RingAt} from '../chem-m7-c06/parts';
import {CarbAt} from '../chem-m7-c08a/parts';
import {cAt, ketM, olM} from '../chem-m7-g03/board';
import {FixRail} from '../skills-s07/pieces';
import {FArrow} from '../chem-m7-c13/parts';
import {DICH, DISTIL, REFLUX, TOLL, hold, sc} from './common';
import {ALC, AMB, GREENC, INK, INK_SOFT, NAVY, RED, TEAL, TEALD, Thumb, tertM} from './parts';

const SY = 80;

// ---------- 13. Attempt 1 ----------
export const A1 = ['In a teacher demonstration, propan-1-ol was heated with excess acidified potassium', 'dichromate under reflux for 20 minutes. The flask was cooled and a strip of blue litmus', 'paper was dipped into the reaction mixture. The litmus turned red, and a student concluded', 'that propanoic acid had formed.', 'Explain why this conclusion is not valid, and describe how the method should be changed', 'to give a valid conclusion.'];
const K13 = cues(sc('attempt-1'), {turn: 'Your turn', in: 'In a', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K13.turn} />
		<QCardX lines={A1} at={K13.in} y={190} size={29} w={1360} />
		<Plate p={REFLUX} cx={1680} top={250} h={500} at={K13.in + 20} />
		<PauseHold h={hold('attempt-1')} at={K13.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 14. Feedback 1 ----------
const K14 = cues(sc('feedback-1'), {flask: 'The flask', sulf: 'sulfuric', litmus: 'litmus turns', distil: 'Distil off', distillate: 'distillate', blank: 'blank', rep: 'Repeating', trap: 'trap', checks: 'checks'});
export const SceneFeedback1: React.FC = () => (
	<Overlay>
		<QCardX lines={A1} at={-100} y={SY} size={24} under={[{line: 0, phrase: 'acidified potassium', at: K14.sulf, color: AMB}, {line: 2, phrase: 'dipped into the reaction mixture', at: K14.litmus, color: AMB}, {line: 4, phrase: 'Explain why this conclusion is not valid', at: K14.distil, color: AMB}, {line: 4, phrase: 'how the method should be changed', at: K14.distillate, color: AMB}]} />
		<Tag x={160} y={396} text="flask: H₂SO₄ → litmus red anyway" at={K14.litmus} size={28} color={RED} fill="#f9e1dc" />
		<FixRail box={{x: 160, y: 466, w: 1100}} rowH={96} size={30} rows={[K14.sulf + 20, K14.litmus + 10, K14.distil]} lit={[{row: 2, from: K14.distillate}]} ex={[{text: 'validity', at: K14.sulf + 30}, {text: 'tested the flask, which contains acid', at: K14.litmus + 20}, {text: 'distil; test the distillate; run a blank', at: K14.blank}]} />
		<Plate p={DISTIL} cx={1560} top={540} h={240} at={K14.distil} />
		<Crossed x={160} y={860} text="repeat the litmus test 3 times" at={K14.rep} cross={K14.checks} note="repeats check reliability; the acid is still there" size={30} />
		{void K14.flask}{void K14.trap}
	</Overlay>
);

// ---------- 15. Attempt 2 ----------
export const A2 = ['Pentan-2-ol and 2-methylbutan-2-ol were each warmed with acidified potassium dichromate', 'solution. Each mixture was then distilled, and the distillate was warmed with freshly', "prepared Tollens' reagent.", 'Predict the observations for each alcohol, name any organic product, and explain the', 'observations.'];
const K15 = cues(sc('attempt-2'), {last: 'Last one', p: 'Pentan-2-ol', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K15.last} />
		<QCardX lines={A2} at={K15.p} y={200} size={34} />
		<PauseHold h={hold('attempt-2')} at={K15.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 16. Feedback 2 ----------
const K16 = cues(sc('feedback-2'), {sec: 'secondary', its: 'Its O', one: 'one hydrogen', green: 'green', p2one: 'pentan-2-one', that: 'That ketone', mirror: 'mirror', tert: 'tertiary', no: 'no hydrogen', orange: 'orange', nothing: 'nothing new', trap: 'The trap', gr: ['green', 2]});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const s = 0.72;
	const c1 = cAt(5, 330, 470, s)[1];
	return (
		<Overlay>
			<QCardX lines={A2} at={-100} y={SY} size={24} under={[{line: 0, phrase: 'Pentan-2-ol', at: K16.sec, color: AMB}, {line: 1, phrase: 'warmed with freshly', at: K16.mirror, color: AMB}, {line: 2, phrase: "prepared Tollens' reagent.", at: K16.mirror + 6, color: AMB}, {line: 0, phrase: '2-methylbutan-2-ol', at: K16.tert, color: AMB}]} />
			<g opacity={dimAt(f, K16.tert, 0.5)}>
				<SkelAt m={olM(5, 1)} x={330} y={470} s={s} at={K16.sec} color={ALC[1].c} width={5} />
				<Sx x={470} y={398} text="pentan-2-ol (secondary)" size={24} color={ALC[1].c} weight={800} at={K16.sec} />
				<RingAt c={[c1[0], c1[1]]} rx={30} ry={30} at={K16.one} color={AMB} />
				<Tag x={150} y={560} text="C–OH carbon: one H" at={K16.one} size={22} color={AMB} fill="#fbedd0" />
				<FArrow a={[330, 610]} b={[330, 660]} at={K16.green} />
				<CarbAt k={ketM(5, 1)} x={330} y={720} s={s} at={K16.p2one} />
				<Sx x={330} y={830} text="pentan-2-one, CH₃COCH₂CH₂CH₃" size={24} color={NAVY} anchor="middle" weight={800} at={K16.p2one} />
				<Plate p={DICH.green} cx={680} top={420} h={220} at={K16.green} />
				<Thumb p={TOLL.clear} x={620} y={660} w={120} h={180} at={K16.mirror} />
				<Tag x={760} y={720} text="no mirror: ketone, no H on the carbonyl carbon" at={K16.that} size={20} />
			</g>
			<SkelAt m={tertM(5)} x={1300} y={500} s={0.75} at={K16.tert} color={ALC[2].c} width={5} />
			<Sx x={1340} y={390} text="2-methylbutan-2-ol (tertiary)" size={24} color={ALC[2].c} anchor="middle" weight={800} at={K16.tert} />
			<RingAt c={[1300, 500]} rx={30} ry={30} at={K16.no} color={RED} />
			<Tag x={1360} y={600} text="no H on the C–OH carbon" at={K16.no + 10} size={22} color={RED} fill="#f9e1dc" />
			<Plate p={DICH.orange} cx={1720} top={420} h={220} at={K16.orange} />
			<Tag x={1360} y={660} text="tertiary: no reaction" at={K16.nothing} size={24} color={INK} fill="#f1efea" />
			<Crossed x={160} y={880} text="pentan-2-ol: green, so silver mirror" at={K16.trap} cross={K16.gr} note="green shows oxidation, not an aldehyde" size={30} />
			{void K16.its}{void TEALD}{void GREENC}
		</Overlay>
	);
};

// ---------- 17. Decision rule and handoff ----------
const K17 = cues(sc('decision-handoff'), {colour: 'colour', ald: 'aldehyde', acid: 'acid', sec: 'secondary', test: 'test on', next: 'Next'});
export const SceneRule: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{t: 'Colour → oxidised? (green: 1° or 2°; orange: 3°)', at: K17.colour},
		{t: 'Distil at once → aldehyde (mirror, brick red)', at: K17.ald},
		{t: 'Reflux, excess oxidant → acid (red litmus)', at: K17.acid},
		{t: '2° → ketone (no change)', at: K17.sec},
		{t: 'Test the distillate, with known samples', at: K17.test},
	];
	return (
		<Overlay>
			<TaskLine text="The decision rule" at={0} size={54} y={130} />
			{lines.map((l, i) => <g key={i} opacity={lines[i + 1] ? dimAt(f, lines[i + 1].at, 0.6) : 1}><Sx x={140} y={250 + i * 95} text={l.t} size={38} color={INK} weight={700} at={l.at} /></g>)}
			<g opacity={vis(f, K17.next)}>
				<rect x={600} y={760} width={1200} height={110} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={640} y={806} text="Next:" size={30} color="#0d6b52" hand at={-1000} />
				<Sx x={640} y={848} text="why are carboxylic acids acidic?" size={34} color={INK} weight={700} at={-1000} />
			</g>
			{void TEAL}{void INK_SOFT}
		</Overlay>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	'Aim: investigate the products of oxidising 1° and 2° alcohols with acidified K₂Cr₂O₇. Propan-1-ol and propan-2-ol (isomers); 2-methylpropan-2-ol (3°); control: water. Green = oxidised (1° or 2°); orange = no reaction (3°, control). Dichromate steps: teacher demonstration.',
	'1° alcohol: distil at once → aldehyde (propanal, 48 °C): CH₃CH₂CH₂OH + [O] → CH₃CH₂CHO + H₂O. Excess oxidant, reflux → acid: + 2[O] → CH₃CH₂COOH + H₂O. 2° alcohol → ketone (propanone): CH₃CH(OH)CH₃ + [O] → CH₃COCH₃ + H₂O.',
	"Test the distillate: Tollens' mirror and Benedict's brick red → aldehyde; blue litmus red → acid; no change → ketone. Known samples: glucose (aldehyde tests work), dilute acid (litmus), water (no change).",
	'Validity: test the distillate, not the flask (the flask holds H₂SO₄ and chromium ions). Reliability: repeats agree. Accuracy: results match known samples; boiling points support the identification.',
	"Safety: Cr(VI) toxic and carcinogenic: teacher handles it in a fume cupboard (gloves, glasses; heavy-metal waste); flammable organics (water bath or hotplate, no flames; fume cupboard); Tollens' made fresh, used at once, never stored; organic waste container, never the sink.",
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={24} aidTop={850} aids={['Green says oxidised; the test says what.', 'Distil to catch the aldehyde, reflux to go all the way.']} tag="investigating the products of alcohol oxidation" />
);
