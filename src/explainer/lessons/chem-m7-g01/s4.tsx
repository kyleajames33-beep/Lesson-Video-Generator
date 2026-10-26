// M7 G01 scenes 5a to 7: question 4 (evaluate "X is an alkene because it decolourises bromine water", X = C5H8, open
// chain, one multiple bond): the attempt; what the test can show (the tube fades in place; C=C and C≡C tiles both tick,
// the alkane tile greys; the test can't say which); the formula decides (CnH2n against CnH2n−2; pent-1-yne);
// "decolourised → C=C" crossed; the decision board of first moves with the handoff; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {INK, INK_SOFT, KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {Brace, CARDC, Crossed, MULTI, QCardX, Skel, Tag, TickMark} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {Mol2D, PlateC, cmol, dimAt, vis} from '../chem-m7-c04a/parts';
import {GF} from '../chem-m7-c03/parts';
import {AnsBox, Badge, Checks7, QF, QStrip} from './board';
import type {APart} from './board';
import {BOTTLE, BRW, BRW_PAIR, Heading, hold, sc} from './common';

export const Q4 = ['X is an open-chain hydrocarbon with one multiple bond. Its molecular formula is C₅H₈.', 'X decolourises bromine water at room temperature, without UV light.', 'A student concludes: “X is an alkene, because it decolourises bromine water.”', "Evaluate the student's conclusion."];
const ANS = (at: number): APart[] => [{t: 'Incorrect.', at, lit: true}, {t: ' Decolourising shows C=C or C≡C, not which. C₅H₈ fits CnH2n−2, so X is an alkyne (e.g. pent-1-yne), not an alkene (C₅H₁₀).', at}];
const AnsQ4: React.FC<{fill?: number}> = ({fill = 1e6}) => <AnsBox x={140} y={900} w={1640} label="" at={-100} size={22} parts={ANS(fill)} />;

// ---------- 5a. Question 4 (attempt) ----------
const KA = cues(sc('q4-question'), {q: 'Question four', x: 'X is an', formula: 'molecular formula', dec: 'decolourises', student: 'A student', evaluate: 'Evaluate the', pause: 'Pause here'});
export const SceneQ4Question: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('q4-question');
	return (
		<>
			<Heading text="Question 4" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q4} at={KA.x} y={QF.y} size={QF.size} />
				<PlateC p={BRW.orange} cx={1690} top={480} h={300} o={vis(f, KA.dec)} />
				<AnsBox x={140} y={490} w={1380} label="" at={KA.evaluate + 20} />
				<PauseHold h={h} at={KA.pause} x={140} y={850} cx={1450} cy={840} />
				<Checks7 hold={h} />
				{void KA.formula}{void KA.student}
			</Overlay>
		</>
	);
};

// ---------- 5b. What the test shows ----------
const KB = cues(sc('q4-evidence'), {start: 'Start with', losing: 'Losing the', added: 'added', double: 'a double', triple: 'triple', rules: 'rules out', but: 'But alkenes', which: 'which.', read: 'The student'});
const Tile: React.FC<{x: number; y: number; order: 1 | 2 | 3; at: number; label: string; tick?: number; grey?: boolean; o?: number}> = ({x, y, order, at, label, tick, grey = false, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const m = cmol([{}, {}], [order]);
	return (
		<g opacity={v * (grey ? 0.45 : 1)}>
			<rect x={x - 150} y={y - 90} width={300} height={200} rx={18} fill={CARDC} stroke={grey ? INK_SOFT : MULTI} strokeWidth={3} />
			<Mol2D m={m} x={x} y={y - 20} s={1.2} at={at} size={44} />
			<Sx x={x} y={y + 70} text={label} size={28} color={grey ? INK_SOFT : INK} anchor="middle" weight={700} at={at} />
			{tick !== undefined ? <TickMark x={x + 128} y={y - 72} at={tick} /> : null}
		</g>
	);
};
export const SceneQ4Evidence: React.FC = () => {
	const f = useCurrentFrame();
	const sw = prog(f, KB.added, 26);
	return (
		<Overlay>
			<Badge text="Evaluate a test result" at={6} />
			<QStrip lines={Q4} under={[{line: 1, phrase: 'decolourises bromine water', at: KB.added}, {line: 2, phrase: '“X is an alkene, because it decolourises bromine water.”', at: KB.read}]} />
			<PlateC p={BRW.orange} cx={1650} top={360} h={330} o={1 - sw} />
			<PlateC p={BRW.clear} cx={1650} top={360} h={330} o={sw} />
			<Tag x={1650} y={710} text="bromine added: unsaturated" at={KB.added} size={26} color={TEAL} fill="#dff2ef" anchor="middle" o={dimAt(f, KB.but, 0.5)} />
			<Tile x={330} y={560} order={2} at={KB.double} label="C=C: decolourises" tick={KB.double + 12} />
			<Tile x={720} y={560} order={3} at={KB.triple} label="C≡C: decolourises" tick={KB.triple + 12} />
			<Tile x={1110} y={560} order={1} at={KB.rules} label="alkane: no" grey />
			<Brace x1={180} x2={870} y={455} dir={-1} text="the test can't say which" at={KB.which} color={MULTI} size={32} />
			<AnsQ4 />
			<Checks7 ticks={{0: [KB.double]}} />
			{void KB.start}{void KB.losing}
		</Overlay>
	);
};

// ---------- 5c. The formula decides ----------
const KC = cues(sc('q4-judgement'), {use: 'use the formula', five: 'five carbons', c5h10: 'C five H ten', alkyne: 'An alkyne', c5h8: 'C five H eight', matches: 'which matches', incorrect: 'incorrect', unsat: 'unsaturated', name: 'pent-one-yne', add: 'add two'});
const YNE_PTS: V2[] = [[0, 0], [110, 0], [220, 0], [310, -60], [420, -10]];
const YNE_B: Bond[] = [{a: 0, b: 1, order: 3, color: MULTI}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 4}];
export const SceneQ4Judgement: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Badge text="Evaluate a test result" at={-100} />
			<QStrip lines={Q4} under={[{line: 1, phrase: 'decolourises bromine water', at: -100}, {line: 0, phrase: 'C₅H₈', at: KC.c5h10}, {line: 0, phrase: 'open-chain hydrocarbon with one multiple bond', at: KC.matches}, {line: 3, phrase: 'Evaluate', at: KC.incorrect}]} />
			<g opacity={dimAt(f, KC.alkyne, 0.5)}>
				<GF x={160} y={440} text="alkene, n = 5:  C_{n}H_{2n} = C_{5}H_{10}" size={46} at={KC.five} />
				<Sx x={1020} y={440} text="✗" size={52} color="#c4432f" weight={800} at={KC.c5h10 + 10} />
			</g>
			<GF x={160} y={540} text="alkyne, n = 5:  C_{n}H_{2n−2} = C_{5}H_{8}" size={46} at={KC.alkyne} color={MULTI} />
			<Sx x={1020} y={540} text="✓  matches X" size={46} color="#2f8a5b" weight={800} at={KC.c5h8 + 10} />
			<Tag x={160} y={590} text="condition: one multiple bond, no ring" at={KC.matches} size={26} />
			<g transform={`translate(1220,760) scale(1.1)`}><Skel pts={YNE_PTS} bonds={YNE_B} at={KC.name} width={6} /></g>
			<Sx x={1450} y={860} text="pent-1-yne" size={36} color={INK} anchor="middle" weight={800} at={KC.name + 10} />
			<Tag x={1450} y={590} text="adds 2 Br_2, not 1" at={KC.add} size={26} color={MULTI} fill="#dff2ef" anchor="middle" />
			<AnsQ4 fill={KC.incorrect + 12} />
			<Checks7 ticks={{0: [-100], 2: [KC.c5h8]}} />
			{void KC.use}{void KC.unsat}
		</Overlay>
	);
};

// ---------- 5d. The classic mistake ----------
const KD = cues(sc('q4-mistake'), {mistake: 'classic mistake', only: 'bonds only', unsat: 'unsaturation', or: 'double or'});
export const SceneQ4Mistake: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Badge text="Evaluate a test result" at={-100} />
			<QStrip lines={Q4} under={[{line: 1, phrase: 'decolourises bromine water', at: -100}, {line: 0, phrase: 'C₅H₈', at: -100}, {line: 3, phrase: 'Evaluate', at: -100}]} />
			<Crossed x={140} y={420} text="bromine water decolourised → C=C" at={0} cross={KD.mistake + 12} note="decolourised → C=C or C≡C" size={44} />
			<PlateC p={BRW_PAIR} cx={1450} top={380} h={330} o={vis(f, KD.unsat)} />
			<Tag x={1450} y={730} text="unsaturation: a double or a triple bond" at={KD.unsat} size={28} color={TEAL} fill="#dff2ef" anchor="middle" />
			<AnsQ4 fill={-100} />
			<Checks7 ticks={{0: [-100], 2: [-100]}} />
			{void KD.only}{void KD.or}
		</Overlay>
	);
};

// ---------- 6. Decision board ----------
const K6 = cues(sc('decision-board'), {so: "here's how", bonds: 'find the bonds', alkane: 'An alkane', uv: 'UV light', subst: 'substitution', dbl: 'A double', addition: 'addition,', twice: 'adds twice', count: 'count the', family: 'the family', next: 'Next,'});
const ROWS: {see: string; do: string; q: string}[] = [
	{see: 'a name or a skeletal formula', do: 'longest chain with the multiple bond; number from the nearer end', q: 'Q1'},
	{see: 'alkane + X_2 + UV light', do: 'substitution: swap one H, + HX', q: 'Q2'},
	{see: 'C=C or C≡C + reagent, no UV needed', do: 'addition: one piece on each C; C≡C adds twice', q: 'Q2, Q3'},
	{see: 'any answer', do: 'count the atoms; does the formula fit the family?', q: 'all'},
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const lit = [K6.bonds, K6.uv, K6.addition, K6.count];
	const x0 = 96, w = 1728, c1 = 620, y0 = 300, rh = 104;
	return (
		<Overlay>
			<TaskLine text="How to start any hydrocarbon question" at={K6.so} size={54} y={150} />
			<g opacity={vis(f, K6.so + 10)}>
				<rect x={x0} y={y0 - 70} width={w} height={70 + rh * 4 + 10} rx={20} fill={CARDC} stroke="rgba(60,45,20,0.24)" strokeWidth={3} />
				<Sx x={x0 + 30} y={y0 - 22} text="What you see" size={32} color={INK_SOFT} hand at={-1000} />
				<Sx x={x0 + c1 + 30} y={y0 - 22} text="What you do first" size={32} color={INK_SOFT} hand at={-1000} />
			</g>
			{ROWS.map((r, i) => {
				const next = lit[i + 1];
				const o = prog(f, lit[i], 12) * (next === undefined ? 1 : 1 - 0.45 * prog(f, next, 14));
				if (o <= 0.01) return null;
				const y = y0 + i * rh;
				return (
					<g key={i} opacity={o}>
						<line x1={x0 + 16} x2={x0 + w - 16} y1={y + 4} y2={y + 4} stroke="rgba(60,45,20,0.15)" strokeWidth={2} />
						<Sx x={x0 + 30} y={y + 62} text={r.see} size={30} color={INK} weight={700} at={-1000} />
						<Sx x={x0 + c1 + 30} y={y + 62} text={r.do} size={30} color={TEAL} weight={700} at={-1000} />
						<Tag x={x0 + w - 24} y={y + 30} text={r.q} at={lit[i]} size={22} anchor="end" />
					</g>
				);
			})}
			<Sx x={960} y={790} text="Alkanes swap, alkenes add, alkynes add twice." size={46} color={TEAL} anchor="middle" hand at={K6.twice} />
			<g opacity={vis(f, K6.next)}>
				<rect x={1060} y={850} width={760} height={170} rx={20} fill="#dff2ef" stroke={TEAL} strokeWidth={3} />
				<PlateC p={BOTTLE} cx={1140} top={862} h={146} />
				<Sx x={1210} y={922} text="Next:" size={30} color={TEAL} hand at={-1000} />
				<Sx x={1210} y={966} text="how does an OH group change" size={30} color={INK} weight={700} at={-1000} />
				<Sx x={1210} y={1004} text="alcohol properties?" size={30} color={INK} weight={700} at={-1000} />
			</g>
			{void K6.alkane}{void K6.subst}{void K6.dbl}{void K6.family}
		</Overlay>
	);
};

// ---------- 7. Key notes ----------
const NOTES = [
	'Naming: trace the longest chain containing the multiple bond; number from the end nearer the multiple bond (it beats branches). Each carbon in a C=C has one fewer H.',
	'Isomers (same molecular formula): skeleton changed → chain; same skeleton, group moved → position; different family → functional group.',
	'Alkane + X_2 (UV light) → haloalkane + HX: substitution, two products. Alkene or alkyne + H_2, X_2 or HX: addition, one product, one piece on each carbon; an alkyne adds twice with excess reagent.',
	'Working back: count the added atoms (2X_2 means two extra bonds); if all of them sit on the same two carbons, it was a triple bond there. Bromine water shows unsaturation; for an open-chain hydrocarbon with one multiple bond, the formula decides: alkene CnH2n, alkyne CnH2n−2.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={29} aidTop={800} aids={['Alkanes swap, alkenes add, alkynes add twice.']} tag="swap: with a halogen and UV light; add twice: with excess reagent" />
);
