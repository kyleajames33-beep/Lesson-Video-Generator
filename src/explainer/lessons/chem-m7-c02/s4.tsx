// M7 C02 scenes 12 to 17: attempt 1 (classify three C5 pairs), brief feedback ("(a) chain isomers" crossed), attempt 2
// (evaluate "three different isomers": A pentane, B bent pentane, C 2-methylbutane), brief feedback ("three isomers
// shown" crossed; 2,2-dimethylpropane not drawn), the handoff (butane and 2-methylpropane on the stove; ethene next) and
// the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {INK, INK_SOFT, KeyNotesBoard, Overlay, PauseHold, Sx, TEAL} from '../chem-m6-c01/parts';
import {
	AnswerChip, BRANCH, BRANCH_INK, BallStick, Brace, CHAIN_INK, Crossed, Locants, MULTI, NameLbl, Place, QCardX, Stamp, Tag, Trace, V2, ethene3d, qLineY,
} from '../chem-m7-c01/molecules';
import {Burner} from '../chem-m7-c01/s1';
import {hold, sc} from './common';
import {M, Mol2, SkelAt, at2, plain, vis} from './parts';

// ---------- attempt 1 ----------
const Q1 = ['Classify each pair of compounds as chain, position or functional group isomers.', '(a) pent-1-ene and pent-2-ene', '(b) pentane and 2,2-dimethylpropane', '(c) cyclopentane and pent-1-ene'];
const G1 = [40, 110, 110, 80];
const QY = 160, QS = 34;
const rowY = (i: number) => qLineY(QY, QS, G1, i + 1) - 12;
const PAIRS: [Mol2, Mol2][] = [[M.pent1ene, M.pent2ene], [M.pentane, M.dimethylpropane], [M.cyclopentane, M.pent1ene]];
const SX = [960, 1260], SS = 0.55;
const A1 = 'attempt-1';
const K12 = cues(sc(A1), {turn: 'Your turn', classify: 'Classify each', a: 'Pent-one-ene and', b: 'Pentane and two', c: 'Cyclopentane and', pause: 'Pause here'});
const PairsPlain: React.FC<{at: number[]}> = ({at}) => (
	<>{PAIRS.map((pr, i) => pr.map((m, j) => <SkelAt key={`${i}${j}`} m={plain(m)} x={SX[j]} y={rowY(i)} s={SS} at={at[i] + j * 6} width={5} />))}</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K12.turn} />
		<QCardX lines={Q1} at={K12.turn + 6} y={QY} size={QS} gaps={G1} />
		<PairsPlain at={[K12.a, K12.b, K12.c]} />
		<PauseHold h={hold(A1)} at={K12.pause} x={140} y={860} cx={1650} cy={850} />
		{void K12.classify}
	</Overlay>
);

// ---------- feedback 1 ----------
const K13 = cues(sc('feedback-1'), {first: 'First pair', moved: 'it just moved', pos: 'position isomers', second: 'Second pair', alk: 'both alkanes', chain: ['chain isomers', 1], cyclo: 'Cyclopentane is', ring: 'ring with no', fg: 'functional group isomers', calling: 'Calling the first', slip: 'slip.', didnt: "chain didn't"});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const lit = [K13.first + 10, K13.second, K13.cyclo];
	const ends = [K13.second, K13.cyclo, K13.calling];
	const a1 = at2(M.pent1ene, SX[0], rowY(0), SS), a2 = at2(M.pent2ene, SX[1], rowY(0), SS);
	const b1 = at2(M.pentane, SX[0], rowY(1), SS);
	return (
		<Overlay>
			{lit.map((t, i) => <rect key={i} x={150} y={rowY(i) - 66} width={1620} height={124} rx={14} fill="#f6d77a" opacity={0.35 * vis(f, t, ends[i])} />)}
			<QCardX lines={Q1} at={-100} y={QY} size={QS} gaps={G1} under={[{line: 0, phrase: 'chain, position or functional group', at: 8}, {line: 1, phrase: 'pent-1-ene and pent-2-ene', at: K13.moved}, {line: 2, phrase: 'pentane and 2,2-dimethylpropane', at: K13.alk}, {line: 3, phrase: 'cyclopentane and pent-1-ene', at: K13.cyclo + 10}]} />
			<PairsPlain at={[-100, -100, -100]} />
			{/* (a) the C=C moved */}
			<SkelAt m={M.pent1ene} x={SX[0]} y={rowY(0)} s={SS} at={K13.first + 20} width={5} />
			<SkelAt m={M.pent2ene} x={SX[1]} y={rowY(0)} s={SS} at={K13.first + 26} width={5} />
			<Locants pts={a1.slice(0, 2)} offs={[[0, 32], [0, 44]]} at={K13.moved} size={22} />
			<Locants pts={a2.slice(0, 3)} offs={[[0, 32], [0, 44], [0, 32]]} at={K13.moved + 10} size={22} ring={[{i: 1, at: K13.moved + 30}]} />
			<AnswerChip x={1440} y={rowY(0) - 30} text="(a) position" at={K13.pos} size={30} />
			{/* (b) different skeleton */}
			<Trace path={b1} at={K13.alk} dur={30} width={22} />
			<SkelAt m={M.dimethylpropane} x={SX[1]} y={rowY(1)} s={SS} at={K13.alk + 6} width={5} />
			<SkelAt m={M.pentane} x={SX[0]} y={rowY(1)} s={SS} at={K13.alk} width={5} />
			<AnswerChip x={1440} y={rowY(1) - 50} text="(b) chain" at={K13.chain} size={30} />
			<Tag x={1440} y={rowY(1) + 10} text="both C_5H_12, both alkanes" at={K13.chain + 8} size={22} />
			{/* (c) ring against alkene */}
			<Brace x1={SX[0] - 60} x2={SX[0] + 60} y={rowY(2) + 52} text="cycloalkane (no C=C)" at={K13.ring} size={26} />
			<Brace x1={SX[1] - 125} x2={SX[1] + 125} y={rowY(2) + 30} text="alkene (C=C)" at={K13.ring + 10} size={26} color={TEAL} />
			<SkelAt m={M.pent1ene} x={SX[1]} y={rowY(2)} s={SS} at={K13.ring + 10} width={5} />
			<AnswerChip x={1440} y={rowY(2) - 50} text="(c) functional group" at={K13.fg} size={30} />
			<Tag x={1440} y={rowY(2) + 10} text="both C_5H_10" at={K13.fg + 8} size={22} />
			<Crossed x={140} y={830} text="(a) chain isomers" at={K13.calling} cross={K13.slip} note="the C=C moved; the chain didn't change" size={34} />
			{void K13.didnt}{void MULTI}
		</Overlay>
	);
};

// ---------- attempt 2 ----------
const Q2 = ['A student draws structures A, B and C and states that they show three different', 'structural isomers of C_5H_12. Evaluate the student’s statement.'];
const BENT: Mol2 = {pts: [[-170, -70], [-60, -110], [50, -70], [20, 40], [80, 140]], bonds: [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 4}]};
const ABC: Mol2[] = [M.pentane, BENT, M.methylbutane];
const RY = 560;
const A2 = 'attempt-2';
const K14 = cues(sc(A2), {last: 'Last one', student: 'A student draws', three: 'these three structures', evaluate: 'Evaluate the', pause: 'Pause here'});
const Col: React.FC<{i: number; x: number; at: number; m?: Mol2; color?: string; letter?: string}> = ({i, x, at, m, color, letter}) => (
	<g>
		<Sx x={x - 230} y={RY - 100} text={letter ?? 'ABCD'[i]} size={52} color={INK} weight={800} at={at} />
		<SkelAt m={m ?? plain(ABC[i])} x={x} y={RY} s={0.85} at={at} width={6} color={color} />
	</g>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K14.last} />
		<QCardX lines={Q2} at={K14.last + 6} y={QY} size={36} />
		{[400, 960, 1520].map((x, i) => <Col key={i} i={i} x={x} at={K14.three + i * 8} />)}
		<PauseHold h={hold(A2)} at={K14.pause} x={140} y={860} cx={1650} cy={850} />
		{void K14.student}{void K14.evaluate}
	</Overlay>
);

// ---------- feedback 2 ----------
const K15 = cues(sc('feedback-2'), {name: 'Name each one', trace: 'trace the longest', pent: 'both pentane', bend: 'with a bend', c: 'C is', mb: 'two-methylbutane.', incorrect: 'incorrect:', only: 'only two different', third: 'The third', dmp: 'two-dimethylpropane,', drawn: "isn't drawn", counting: 'Counting a bent', slip: 'slip.'});
const FX = [280, 760, 1180, 1600];
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const A = at2(M.pentane, FX[0], RY, 0.85), B = at2(BENT, FX[1], RY, 0.85);
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={QY} size={36} under={[{line: 0, phrase: 'three different', at: K15.pent + 6}, {line: 1, phrase: 'structural isomers', at: K15.pent + 14}, {line: 1, phrase: 'Evaluate the student’s statement.', at: K15.incorrect}, {line: 1, phrase: 'C_5H_12', at: K15.dmp + 10}]} />
			{[0, 1, 2].map(i => (
				<Place key={i} keys={[{at: -100, x: [400, 960, 1520][i] - FX[i], y: 0}, {at: 2, x: 0, y: 0}]} dur={20}><Col i={i} x={FX[i]} at={-100} /></Place>
			))}
			<Trace path={A} at={K15.trace} dur={40} width={26} tally={[FX[0] - 85, RY + 50]} />
			<Trace path={B} at={K15.pent - 34} dur={40} width={26} tally={[FX[1] + 90, RY + 40]} />
			<NameLbl x={FX[0]} y={RY + 170} parts={[['pentane', CHAIN_INK]]} at={K15.pent} size={34} />
			<NameLbl x={FX[1] - 30} y={RY + 170} parts={[['pentane', CHAIN_INK]]} at={K15.pent + 8} size={34} />
			<Stamp x={540} y={RY + 40} at={K15.bend} />
			<NameLbl x={FX[2] - 50} y={RY + 170} parts={[['2-methyl', BRANCH_INK], ['butane', CHAIN_INK]]} at={K15.mb} size={34} />
			<g opacity={vis(f, K15.dmp)}>
				<Col i={3} letter="" x={FX[3] + 40} at={K15.dmp} m={{...M.dimethylpropane, bonds: M.dimethylpropane.bonds.map(b => ({...b, color: BRANCH}))}} />
				<NameLbl x={FX[3] + 40} y={RY + 170} parts={[['2,2-dimethylpropane', BRANCH_INK]]} at={K15.dmp + 10} size={30} />
				<Tag x={FX[3] + 40} y={RY - 175} text="not drawn" at={K15.drawn} size={28} color={BRANCH_INK} fill="#fff3d6" anchor="middle" />
			</g>
			<AnswerChip x={140} y={790} text="Incorrect" at={K15.incorrect} out={K15.drawn} size={32} />
			<AnswerChip x={140} y={790} text="Incorrect: only 2 different isomers shown (A = B); 2,2-dimethylpropane not drawn" at={K15.drawn} size={30} />
			<Crossed x={1180} y={890} text="three isomers shown" at={K15.counting} cross={K15.slip} note="same name = same molecule" size={32} />
			{void K15.name}{void K15.c}{void K15.only}{void K15.third}
		</Overlay>
	);
};

// ---------- 16. Handoff ----------
const K16 = cues(sc('handoff'), {so: 'So isomers', structure: 'structure decides', next: 'Next:', shapes: 'their shapes', boil: 'boiling points'});
const E3 = ethene3d();
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Sx x={960} y={170} text="Same formula, different arrangement." size={52} color={TEAL} anchor="middle" hand at={K16.so} />
			<Burner x={130} y={330} h={330} o={vis(f, 4)} />
			<SkelAt m={M.butane} x={720} y={470} at={6} width={7} />
			<SkelAt m={M.methylpropane} x={1240} y={500} at={12} width={7} />
			<Sx x={990} y={490} text="?" size={90} color={INK_SOFT} anchor="middle" weight={800} at={K16.structure} />
			<NameLbl x={720} y={600} parts={[['butane', CHAIN_INK]]} at={10} size={34} />
			<NameLbl x={1185} y={600} parts={[['2-methyl', BRANCH_INK], ['propane', CHAIN_INK]]} at={16} size={34} />
			<Tag x={720} y={630} text="about −1 °C" at={20} size={28} anchor="middle" />
			<Tag x={1185} y={630} text="about −12 °C" at={26} size={28} anchor="middle" />
			<Tag x={880} y={820} text="Next: how does carbon bonding explain hydrocarbon properties?" at={K16.next} size={36} anchor="middle" color={TEAL} fill="#dff2ef" />
			<BallStick {...E3} orders={E3.orders} bondColors={E3.orders.map(o => (o > 1 ? MULTI : undefined))} cx={1640} cy={830} unitPx={120} yaw={0.4 + f * 0.01} pitch={0.5} o={vis(f, K16.next + 6)} />
			{void K16.shapes}{void K16.boil}{void ({} as V2)}
		</Overlay>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	'Structural isomers: same molecular formula, atoms joined in a different order. They are different compounds with different names and properties (ethanol 78 °C; methoxymethane about −25 °C; both C_2H_6O).',
	'Chain isomers: same family, different carbon skeleton (butane and 2-methylpropane, C_4H_10). Position isomers: same skeleton and family, the group on a different carbon (but-1-ene and but-2-ene; propan-1-ol and propan-2-ol). Functional group isomers: different family, same formula (but-1-ene, an unsaturated alkene, and cyclobutane, a saturated cycloalkane, C_4H_8; ethanol and methoxymethane).',
	'To classify: same formula? Different family → functional group. Same family → skeleton changed (chain) or group moved (position).',
	'To find all isomers: longest chain first, then shorten by one carbon at a time and place branches. Name every structure: same name = same molecule (bent chains and end-carbon "branches" are not new isomers). C_5H_12 has 3.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={740} aids={['Same formula, different arrangement.', 'Chain, position or group: what changed?']} tag="structural isomers" />
);
