// M7 P02 scenes 11 to 16: attempt 1 (pent-1-ene or cyclopentane from the layers), brief feedback (the top layer is X and
// it is orange: moved, not gone; "bottom layer paler" crossed), attempt 2 (bromine in heptane, dark against light),
// brief feedback (substitution on carbon 2, HBr reddens the litmus; C7H16Br2 crossed), the decision rule with the
// handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DrawPath, KeyNotesBoard, Overlay, PauseHold, PicH, Sx, TaskLine, VCard, picW} from '../chem-m6-p02/parts';
import {AnswerChip, Crossed, QCardX, Skel, Tag, outward, zig} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {BROM, Box, CT, PlateC, vis} from '../chem-m7-c04a/parts';
import {FreeAtom, UV, UV_SOFT} from '../chem-m7-c04b/parts';
import {BRW_PAIR, HEX, LAYERS, LITMUS, hold, sc} from './common';
import {ENE, Lens, Tube} from './parts';
import {ringPts, ringBonds} from '../chem-m7-c01/molecules';

const SY = 70, SS = 26;
const PENT: Bond[] = Array.from({length: 4}, (_, i) => (i === 0 ? {a: 0, b: 1, order: 2 as const} : {a: i, b: i + 1}));
const Cands: React.FC<{y: number; at: number; s?: number}> = ({y, at, s = 1}) => (
	<g>
		<Skel pts={zig(5, 300, y, 60 * s, 34 * s)} bonds={PENT} at={at} width={5} />
		<Sx x={420} y={y + 80} text="pent-1-ene" size={30} color="#26231f" anchor="middle" weight={700} at={at} />
		<Skel pts={ringPts(5, 760, y, 62 * s)} bonds={ringBonds(5)} at={at + 8} width={5} />
		<Sx x={760} y={y + 100} text="cyclopentane" size={30} color="#26231f" anchor="middle" weight={700} at={at + 8} />
	</g>
);

// ---------- 11. Attempt 1 ----------
const Q1 = ['A liquid hydrocarbon, X, has the molecular formula C₅H₁₀. A student shakes an excess of X', 'with a small volume of bromine water in a stoppered test tube, in normal room light. Two', 'layers form: the top layer is orange and the bottom layer is pale yellow. Identify X as', 'either pent-1-ene or cyclopentane. Justify your answer.'];
const K11 = cues(sc('attempt-1'), {turn: 'Your turn', liquid: 'A liquid', two: 'Two layers', identify: 'Identify X', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color="#26231f" hand at={K11.turn} />
		<QCardX lines={Q1} at={K11.liquid} y={160} size={32} />
		<Cands y={560} at={K11.identify} />
		<Tube p={LAYERS.top} cx={1150} top={420} h={300} at={K11.two} label="X + bromine water, shaken" />
		<PauseHold h={hold('attempt-1')} at={K11.pause} x={140} y={880} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 12. Feedback 1 ----------
const K12 = cues(sc('feedback-1'), {x: 'X is', both: 'Both compounds', floats: 'X floats', orange: "It's orange", dissolved: 'dissolved', excess: 'An excess', classic: 'Calling the', mistake: 'classic mistake'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={SS} under={[{line: 0, phrase: 'C₅H₁₀', at: K12.both}, {line: 2, phrase: 'the top layer is orange', at: K12.orange}, {line: 0, phrase: 'an excess of X', at: K12.excess}]} />
			<Cands y={420} at={-100} />
			<AnswerChip x={620} y={560} text="X = cyclopentane" at={K12.x + 10} size={34} />
			<Tag x={300} y={330} text="both fit C₅H₁₀: formula can't decide" at={K12.both} size={24} o={1 - 0.5 * prog(f, K12.floats, 12)} />
			<g opacity={vis(f, K12.excess)}><DrawPath d="M330,380 L510,470 M510,380 L330,470" at={K12.excess} dur={10} color="#8f897f" width={5} /></g>
			<Tag x={300} y={640} text="in excess: would decolourise both layers" at={K12.excess + 10} size={24} />
			<Lens cx={1320} cy={480} r={150} at={K12.floats} mode="up" act={-100} />
			<Tag x={1320} y={680} text="top layer = X; moved, not gone" at={K12.dissolved} size={26} color="#c98a1b" fill="#fbeec4" anchor="middle" />
			<Crossed x={140} y={780} text="bottom layer paler, so X is an alkene" at={K12.classic} cross={K12.mistake} note="read the top layer too" size={34} />
		</Overlay>
	);
};

// ---------- 13. Attempt 2 ----------
const Q2 = ['In a teacher demonstration, a solution of bromine in heptane stays orange in a dark', 'cupboard. In bright light its colour slowly fades, and the gas at the mouth of the test tube', 'turns damp blue litmus paper red. Explain these observations. Write a balanced equation,', 'using structural formulas, for the formation of one organic product.'];
const K13 = cues(sc('attempt-2'), {more: 'One more', teacher: 'In a teacher', bright: 'In bright', explain: 'Explain these', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const lw = picW(LITMUS.blue, 90);
	return (
		<Overlay>
			<Sx x={96} y={130} text="One more" size={56} color="#26231f" hand at={K13.more} />
			<QCardX lines={Q2} at={K13.teacher} y={160} size={32} />
			<Tube p={HEX.orange} cx={600} top={430} h={300} at={K13.teacher + 30} label="bromine in heptane" />
			<g opacity={vis(useCurrentFrame(), K13.bright + 40)}><PicH p={LITMUS.blue} x={900 - lw / 2} y={520} h={90} /></g>
			<PauseHold h={hold('attempt-2')} at={K13.pause} x={140} y={880} cx={1650} cy={850} />
			{void K13.explain}
		</Overlay>
	);
};

// ---------- 14. Feedback 2 ----------
const K14 = cues(sc('feedback-2'), {hep: 'Heptane has', dark: 'in the dark', light: 'Light supplies', subst: 'substitution:', swapped: 'swapped', leaves: 'leaves', red: 'litmus red', eg: 'For example', name: 'two-bromoheptane', writing: 'Writing', cant: "can't be"});
const HEP: V2[] = zig(7, 300, 470, 70, 40);
const HB: Bond[] = Array.from({length: 6}, (_, i) => ({a: i, b: i + 1}));
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const br = outward(HEP, 1, 70);
	const lw = picW(LITMUS.blue, 80);
	const red = prog(f, K14.red - 10, 20);
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={SS} under={[{line: 0, phrase: 'heptane', at: K14.hep}, {line: 0, phrase: 'stays orange in a dark', at: K14.dark}, {line: 1, phrase: 'In bright light', at: K14.light}, {line: 2, phrase: 'turns damp blue litmus paper red', at: K14.leaves}]} />
			<Skel pts={HEP} bonds={HB} at={K14.hep} />
			<Tag x={300} y={560} text="no C=C: nothing adds in the dark" at={K14.hep + 30} out={K14.subst} size={26} />
			<g opacity={vis(f, K14.swapped)}>
				<line x1={HEP[1][0]} y1={HEP[1][1]} x2={(HEP[1][0] + br[0]) / 2 + (br[0] - HEP[1][0]) * 0.1} y2={(HEP[1][1] + br[1]) / 2 + (br[1] - HEP[1][1]) * 0.1} stroke="#26231f" strokeWidth={6} strokeLinecap="round" />
				<CT x={br[0]} y={br[1] - 4} text="Br" size={40} anchor="middle" />
			</g>
			<FreeAtom el="H" keys={[{at: -1, p: [br[0] + 40, br[1] - 10]}, {at: K14.leaves - 10, p: [1300, 460], dur: 26}]} at={K14.subst + 10} out={K14.leaves + 30} size={34} glow />
			<g opacity={vis(f, K14.leaves + 10)}>
				<CT x={1360} y={475} text="H–Br" size={42} anchor="middle" />
				<Box x={1280} y={425} w={160} h={70} at={K14.leaves + 10} color={UV} />
			</g>
			<g opacity={vis(f, K14.leaves)}>
				<PicH p={LITMUS.blue} x={1560 - lw / 2} y={420} h={80} o={1 - red} />
				<PicH p={LITMUS.red} x={1560 - lw / 2} y={420} h={80} o={red} />
			</g>
			<CT x={140} y={680} text="CH_3CH_2CH_2CH_2CH_2CH_2CH_3 + Br_2 → CH_3CHBrCH_2CH_2CH_2CH_2CH_3 + HBr" size={34} at={K14.name} />
			<Tag x={720} y={610} text="light (UV)" at={K14.name} size={24} color={UV} fill={UV_SOFT} />
			<Tag x={140} y={720} text="any one position is accepted: 1-, 2-, 3- or 4-bromoheptane" at={K14.name + 20} size={24} />
			<Crossed x={140} y={820} text="C_7H_16 + Br_2 → C_7H_16Br_2" at={K14.writing} cross={K14.cant} note="no bond to open: substitution gives two products" size={34} />
			{void K14.eg}{void BROM}
		</Overlay>
	);
};

// ---------- 15. Decision rule ----------
const K15 = cues(sc('decision-rule'), {match: 'match the', shake: 'shake each', gone: 'Gone means', say: 'And say', next: 'Next:'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Running and reading the test" at={0} size={54} y={130} />
			<VCard x={140} y={180} w={1240} h={420} title="Bromine water test" titleAt={K15.match} at={K15.match} lh={70} lines={[
				{t: '1  Matched pair; same volumes; water control.', at: K15.match, size: 32},
				{t: '2  Stopper, shake 10 s, white tile, room light, read at once.', at: K15.shake, size: 32},
				{t: '3  Read both layers: gone = C=C or C≡C; moved = none.', at: K15.gone, size: 32},
				{t: '4  Limits: not which bond; rings fit CnH2n; a quick test, not proof.', at: K15.say, size: 32},
			]} />
			<PlateC p={BRW_PAIR} cx={1620} top={240} h={320} o={vis(f, K15.gone)} />
			<g opacity={vis(f, K15.next)}>
				<rect x={960} y={720} width={860} height={110} rx={20} fill="#dff2ef" stroke={ENE} strokeWidth={3} />
				<Sx x={1000} y={770} text="Next:" size={30} color={ENE} hand at={-1000} />
				<Sx x={1000} y={812} text="hydrocarbon naming and reaction practice" size={32} color="#26231f" weight={700} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 16. Key notes ----------
const NOTES = [
	'Fair test: cyclohexane (C_6H_12) and cyclohexene (C_6H_10): same ring, one C=C the only difference. 1.0 mL sample + 2.0 mL bromine water; control: 1.0 mL water + 2.0 mL bromine water (same dilution, nothing to react with). Stopper, shake 10 s, white tile, normal room light, read at once.',
	'Cyclohexene: orange → colourless in both layers within seconds: bromine is used up by addition. One possible product is 1,2-dibromocyclohexane (one Br on each carbon of the old C=C); in water, other addition products can form too. With Br_2 in an organic solvent: C_6H_10 + Br_2 → C_6H_10Br_2.',
	'Cyclohexane: the colour moves into the top (hydrocarbon) layer and the water layer goes pale, paler than the control, so the bromine moved: no reaction. Gone, not moved. With UV light (teacher demonstration, that orange top layer): slow fade; damp blue litmus turns red, far more than over a tube kept in the dark: HBr, so substitution, C_6H_12 + Br_2 → C_6H_11Br + HBr (UV light).',
	'Meaning: colourless → a C=C or C≡C (alkynes too, usually more slowly; the test cannot tell which). No change → points to no C=C or C≡C (rings such as cyclohexane fit CnH2n). Some other compounds decolourise it too: a quick test, not proof.',
	'Valid: one difference plus a water control. Reliable: repeats agree. Accurate: known samples give the expected results. Risk: cyclohexane and cyclohexene highly flammable (H225): no flames; fume cupboard; bromine vapour irritates: teacher dispenses; glasses and gloves; all residues into the labelled organic (halogenated) waste, never the sink.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={24} aidTop={862} aids={['Gone, not moved.']} tag="check both layers, beside a control" />
);
