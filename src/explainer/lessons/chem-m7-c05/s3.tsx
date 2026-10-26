// M7 C05 scenes 14 to 19: attempt 1 (name and classify CH3CH(OH)CH(CH3)CH3), brief feedback (3-methylbutan-2-ol,
// secondary; "2-methylbutan-3-ol" crossed), attempt 2 (butane against propan-1-ol, 34 electrons each), brief feedback
// (hydrogen bonds named; "is polar" crossed), the handoff and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, PauseHold, Sx} from '../chem-m6-c01/parts';
import {AnswerChip, Crossed, DISP, Dots, Locants, NameBuilder, QCardX, Skel, Tag, TickMark, Trace, VIOLET, zig, zigOffs} from '../chem-m7-c01/molecules';
import {PlateC, vis} from '../chem-m7-c04a/parts';
import {BOTTLE, hold, sc} from './common';
import {AlcAt, Counter, INK, P, RED, alc} from './parts';

const SY = 70, SS = 26;
const A1 = alc(4, 1, [2]);
const Q1 = ['An alcohol has the condensed structural formula CH₃CH(OH)CH(CH₃)CH₃. Give its IUPAC', 'name, and classify it as a primary, secondary or tertiary alcohol. Justify your classification.'];

// ---------- 14. Attempt 1 ----------
const K14 = cues(sc('attempt-1'), {turn: 'Your turn', an: 'An alcohol', give: 'Give its', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K14.turn} />
		<QCardX lines={Q1} at={K14.an} y={170} size={34} />
		<AlcAt a={A1} x={960} y={560} s={1.4} at={K14.an + 20} ink />
		<PauseHold h={hold('attempt-1')} at={K14.pause} x={140} y={860} cx={1650} cy={850} />
		{void K14.give}
	</Overlay>
);

// ---------- 15. Feedback 1 ----------
const K15 = cues(sc('feedback-1'), {four: 'four carbons', number: 'Number from', two: 'carbon two', name: 'three-methylbutan-two-ol.', bonded: 'bonded to two', sec: 'secondary.', wrong: 'Two-methylbutan-three-ol', wins: 'wins.'});
export const SceneFeedback1: React.FC = () => {
	const X = 620, Y = 520, S = 1.4;
	const ch = Array.from({length: 4}, (_, i) => P(A1.m, X, Y, S, i));
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={SS} under={[{line: 0, phrase: 'IUPAC', at: K15.two}, {line: 1, phrase: 'classify', at: K15.sec}, {line: 1, phrase: 'Justify your classification', at: K15.sec + 8}]} />
			<Trace path={ch} at={K15.four} dur={26} />
			<AlcAt a={A1} x={X} y={Y} s={S} at={-100} ring={K15.four} />
			<Locants pts={ch} at={K15.number + 10} out={K15.bonded - 6} offs={zigOffs(ch)} ring={[{i: 1, at: K15.two}, {i: 2, at: K15.two + 40}]} />
			<NameBuilder x={1060} y={300} s={0.72} at={K15.four} fills={[{slot: 0, text: '3-methyl', at: K15.name}, {slot: 1, text: 'butan', at: K15.name + 6}, {slot: 2, text: '-2-ol', at: K15.name + 12}]} />
			<Counter c={ch[1]} nb={[ch[0], ch[2]]} at={K15.bonded} />
			<Tag x={1200} y={520} text="secondary (2°)" at={K15.sec} size={34} color={RED} fill="#f9e1dc" />
			<Crossed x={140} y={820} text="2-methylbutan-3-ol" at={K15.wrong} cross={K15.wins} note="number from the end nearer the OH" size={36} />
		</Overlay>
	);
};

// ---------- 16. Attempt 2 ----------
const Q2 = ['Butane, C₄H₁₀, boils at −1 °C. Propan-1-ol, CH₃CH₂CH₂OH, boils at 97 °C. Both molecules', 'have 34 electrons. Explain the difference in boiling points, with reference to the', 'intramolecular and intermolecular bonding present.'];
const K16 = cues(sc('attempt-2'), {last: 'Last one', butane: 'Butane boils', explain: 'Explain the', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K16.last} />
		<QCardX lines={Q2} at={K16.butane} y={170} size={34} />
		<PauseHold h={hold('attempt-2')} at={K16.pause} x={140} y={860} cx={1650} cy={850} />
		{void K16.explain}
	</Overlay>
);

// ---------- 17. Feedback 2 ----------
const K17 = cues(sc('feedback-2'), {both: 'Both have', similar: 'similar.', hb: 'hydrogen bonds', energy: 'More energy', cov: 'covalent', just: 'Just writing', name: 'Name the'});
const PR = alc(3, 2);
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const but = (y: number) => <Skel pts={zig(4, 230, y, 90, 52)} bonds={[{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}]} at={K17.both} width={5} />;
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={SS} under={[{line: 0, phrase: 'Both molecules', at: K17.both}, {line: 1, phrase: 'have 34 electrons', at: K17.both + 6}, {line: 2, phrase: 'intermolecular', at: K17.hb}, {line: 2, phrase: 'intramolecular', at: K17.cov}]} />
			{but(380)}{but(480)}
			<Sx x={360} y={580} text="butane" size={28} color={INK} anchor="middle" weight={700} at={K17.both} />
			<AlcAt a={PR} x={900} y={380} s={0.9} at={K17.both + 6} ring={K17.hb} />
			<AlcAt a={PR} x={900} y={480} s={0.9} at={K17.both + 6} />
			<Sx x={900} y={580} text="propan-1-ol" size={28} color={INK} anchor="middle" weight={700} at={K17.both + 6} />
			{[0, 1, 2].map(k => <Dots key={k} a={[250 + k * 90, 400]} b={[250 + k * 90, 460]} at={K17.hb} color={DISP} width={5} flicker />)}
			{[0, 1].map(k => <Dots key={'p' + k} a={[810 + k * 90, 400]} b={[810 + k * 90, 460]} at={K17.hb} color={DISP} width={5} flicker />)}
			<Dots a={[1010, 385]} b={[1010, 475]} at={K17.hb + 10} color={VIOLET} width={7} />
			<Tag x={560} y={310} text="similar dispersion forces" at={K17.similar} out={K17.hb + 20} size={26} color="#2d6f9e" fill="#e3f0fa" anchor="middle" />
			<Tag x={1060} y={300} text="hydrogen bond" at={K17.hb + 14} size={26} color={VIOLET} fill="#e6ddf5" />
			<TickMark x={1140} y={520} at={K17.cov + 10} />
			<Tag x={1170} y={500} text="covalent bonds intact when boiling" at={K17.cov + 10} size={24} color="#2f8a5b" fill="#e3f3e9" o={vis(f, 0)} />
			<AnswerChip x={140} y={640} text="hydrogen bonds + similar dispersion → more energy to separate" at={K17.energy} size={30} />
			<Crossed x={140} y={800} text="Propan-1-ol is polar, so it has a higher boiling point." at={K17.just} cross={K17.name} note="name the force: hydrogen bonding" size={32} />
		</Overlay>
	);
};

// ---------- 18. Handoff ----------
const K18 = cues(sc('handoff'), {so: 'So one', chain: 'the chain', next: 'Next:'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Sx x={960} y={230} text="Same size? Hydrogen bonding wins. Same family? Size wins." size={54} color={RED} anchor="middle" hand at={K18.so} />
			<Tag x={260} y={330} text="OH: hydrogen bonds" at={K18.so + 10} size={30} color={VIOLET} fill="#e6ddf5" />
			<Tag x={260} y={400} text="chain: how much the dispersion forces add" at={K18.chain} size={30} color="#2d6f9e" fill="#e3f0fa" />
			<PlateC p={BOTTLE} cx={1550} top={340} h={340} o={vis(f, K18.so)} />
			<g opacity={vis(f, K18.next)}>
				<rect x={260} y={720} width={900} height={110} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={300} y={770} text="Next:" size={30} color="#0d6b52" hand at={-1000} />
				<Sx x={300} y={812} text="how can we make ethanol?" size={34} color={INK} weight={700} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 19. Key notes ----------
const NOTES = [
	'Alcohol: an OH (hydroxyl) group on a carbon with only single bonds; covalent, not OH⁻. The O–H bond is polar (O δ−, H δ+), and O has two lone pairs. Name: longest chain holding the C–OH carbon; alkane name minus "e" + "ol"; number from the end nearer the OH (the OH beats branches): propan-2-ol, 4-methylpentan-2-ol.',
	'Classify: count the carbons bonded to the C–OH carbon. 1 = primary (methanol too), 2 = secondary, 3 = tertiary. Ethanol 1°, propan-2-ol 2°, 2-methylpropan-2-ol 3°.',
	'Boiling point: hydrogen bonds (δ+ H to a lone pair on a neighbour\'s O) plus dispersion forces. Same electrons: propane −42 °C, ethanol 78 °C. Along the series, longer chain → stronger dispersion → higher boiling point. Isomers: more compact (often tertiary) → less contact → lower. Boiling breaks no covalent bonds.',
	'Solubility in water: the OH hydrogen bonds with water, so C1 to C3 alcohols mix in any proportion. Longer non-polar chains break water\'s hydrogen bonds without replacing them, so solubility falls gradually (butan-1-ol partly, hexan-1-ol barely). Long chains mix with non-polar solvents.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={27} aidTop={800} aids={['Same size? Hydrogen bonding wins. Same family? Size wins.', 'Classify: find the C–OH carbon, count its carbons.']} tag="alcohols compared with alkanes; small alcohols in water" />
);
