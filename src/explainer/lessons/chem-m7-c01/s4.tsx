// M7 C01 scenes 13 to 18: attempt 1 (name and formula from a skeletal formula: 5-methylhex-2-ene), brief feedback
// (2-methylhex-4-ene crossed), attempt 2 (why "2-ethylpentane" is wrong), brief feedback (3-methylhexane;
// 4-methylhexane crossed), the handoff (C4H10: can the same atoms join another way?) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DrawPath, INK, INK_SOFT, KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, mw} from '../chem-m6-c01/parts';
import {BW, BX, BY, hold, sc} from './common';
import {
	AnswerChip, BRANCH, BRANCH_INK, CARDC, CLabels, Crossed, HGhosts, Locants, MULTI, NameBuilder, Skel, Tag, Trace, V2, ghostDirs, line, nbrsOf, outward, zig, zigOffs,
} from './molecules';
import type {Bond} from './molecules';
import {Burner} from './s1';

const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));

// ---------- the question card ----------
type ULine = {line: number; phrase: string; at: number};
/** HSC-style question card: plain lines of text, the HSCScience tag, pen underlines on phrases as they are used. */
const QCard: React.FC<{lines: string[]; at: number; y?: number; size?: number; under?: ULine[]; x?: number; w?: number}> = ({lines, at, y = 200, size = 40, under = [], x = 140, w = 1640}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const lh = size * 1.4, top = y + 64;
	const h = 64 + lines.length * lh + 26;
	const tag = 'HSC-style question, written for HSCScience';
	const tw = mw(tag, 24, true, 700) + 36;
	return (
		<g opacity={v}>
			<rect x={x + 4} y={y + 7} width={w} height={h} rx={18} fill="rgba(60,45,20,0.07)" />
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARDC} stroke="rgba(60,45,20,0.24)" strokeWidth={2.5} />
			<rect x={x + 24} y={y + 16} width={150} height={34} rx={8} fill="#0d6b52" />
			<Sx x={x + 99} y={y + 40} text="CHEMISTRY" size={20} color="#fffdf8" anchor="middle" weight={800} at={-1000} />
			<rect x={x + w - 22 - tw} y={y + 14} width={tw} height={38} rx={19} fill="none" stroke={INK_SOFT} strokeWidth={2} strokeDasharray="7 5" />
			<Sx x={x + w - 22 - tw / 2} y={y + 41} text={tag} size={24} color={INK_SOFT} anchor="middle" hand at={-1000} />
			{lines.map((t, i) => <Sx key={i} x={x + 32} y={top + size + i * lh} text={t} size={size} color={INK} weight={500} at={at + 4 + i * 8} />)}
			{under.map((u, k) => {
				const t = lines[u.line];
				const s = t.indexOf(u.phrase);
				if (s < 0) throw new Error('QCard phrase not found: ' + u.phrase);
				const x1 = x + 32 + mw(t.slice(0, s), size, false, 500), x2 = x1 + mw(u.phrase, size, false, 500);
				const yy = top + size + u.line * lh + 10;
				return <DrawPath key={k} d={`M${x1},${yy} C${x1 + (x2 - x1) * 0.3},${yy + 3} ${x1 + (x2 - x1) * 0.7},${yy - 2} ${x2},${yy + 1}`} at={u.at} dur={14} color="#2c4a7c" width={4} />;
			})}
		</g>
	);
};

// ---------- attempt 1: 5-methylhex-2-ene ----------
const Z1 = zig(6, 660, 600, 140, 96);
const M1 = outward(Z1, 4, 130);
const P1: V2[] = [...Z1, M1];
const B1: Bond[] = [{a: 0, b: 1}, {a: 1, b: 2, order: 2}, {a: 2, b: 3}, {a: 3, b: 4}, {a: 4, b: 5}, {a: 4, b: 6}];
const Q1L = ['The skeletal formula of a hydrocarbon is shown.', 'Give its IUPAC name and its molecular formula.'];
const A1 = 'attempt-1';
const K13 = cues(sc(A1), {turn: 'Your turn', give: 'Give the IUPAC', this: 'in this skeletal', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={160} text="Your turn" size={56} color={INK} hand at={K13.turn} />
		<QCard lines={Q1L} at={K13.turn + 6} />
		<Skel pts={P1} bonds={B1} at={K13.give} width={7} />
		<PauseHold h={hold(A1)} at={K13.pause} x={140} y={900} cx={1650} cy={720} />
		{void K13.this}
	</Overlay>
);
const F1 = 'feedback-1';
const K14 = cues(sc(F1), {longest: 'The longest chain', six: 'six carbons', holds: 'holds the double', hexene: 'hexene', number: 'Number from the left', two: 'carbon two', five: 'carbon five', name: 'five-methylhex-two-ene', each: 'Each double-bond', oneh: 'one hydrogen', c7: 'C seven H fourteen', wrong: 'Two-methylhex-four-ene', numbers: 'numbers for the branch', wins: 'wins.'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const offs = zigOffs(Z1, 52);
	offs[4] = [-50, 22];
	return (
		<Overlay>
			<QCard lines={Q1L} at={-100} size={32} y={110} under={[{line: 0, phrase: 'skeletal formula', at: K14.six}, {line: 0, phrase: 'hydrocarbon', at: K14.six + 8}, {line: 1, phrase: 'IUPAC name', at: K14.name}, {line: 1, phrase: 'molecular formula', at: K14.c7}]} />
			<Trace path={Z1} at={K14.six - 34} dur={40} tally={[1440, 330]} />
			<Skel pts={P1} bonds={B1} at={-100} width={7} />
			<g opacity={prog(f, K14.holds, 10)}><Skel pts={P1} bonds={[{a: 1, b: 2, order: 2, color: MULTI}, {a: 4, b: 6, color: BRANCH}]} at={K14.holds} width={7} /></g>
			<Locants pts={Z1} at={K14.number} offs={offs} step={10} out={K14.each} ring={[{i: 1, at: K14.two}, {i: 4, at: K14.five}]} />
			{[1, 2].map(i => <HGhosts key={i} p={Z1[i]} dirs={ghostDirs(Z1[i], nbrsOf(P1, B1, i), 1)} at={K14.oneh - 6 + (i - 1) * 8} out={K14.c7 + 30} />)}
			<AnswerChip x={140} y={720} text="5-methylhex-2-ene, C_7H_14" at={K14.c7 + 10} size={38} />
			<Crossed x={140} y={340} text="2-methylhex-4-ene" at={K14.wrong} cross={K14.wins} note="the C=C gets the lowest number" />
			<NameBuilder x={BX} y={BY} widths={BW} at={K14.number} fills={[{slot: 0, text: '5-methyl', at: K14.name}, {slot: 1, text: 'hex', at: K14.name + 8}, {slot: 2, text: '-2-ene', at: K14.name + 16}]} />
			{void K14.longest}{void K14.hexene}{void K14.numbers}{void BRANCH_INK}
		</Overlay>
	);
};

// ---------- attempt 2: "2-ethylpentane" ----------
const Q2L = ['A student names a hydrocarbon ‘2-ethylpentane’.', 'Explain why this name is incorrect.', 'Give the correct IUPAC name and draw the skeletal formula of the compound.'];
const A2 = 'attempt-2';
const K15 = cues(sc(A2), {last: 'Last one', student: 'A student names', name: 'two-ethylpentane', explain: 'Explain why', give: 'Then give', draw: 'draw the skeletal', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={160} text="Last one" size={56} color={INK} hand at={K15.last} />
		<QCard lines={Q2L} at={K15.last + 6} size={38} />
		<PauseHold h={hold(A2)} at={K15.pause} x={140} y={720} cx={1600} cy={700} />
		{void K15.student}{void K15.name}{void K15.explain}{void K15.give}{void K15.draw}
	</Overlay>
);
const F2 = 'feedback-2';
const K16 = cues(sc(F2), {draw: 'Draw what', described: 'described', trace: 'then trace', six: 'six carbons', not: 'not five', so: 'So the main', hexane: 'hexane,', methyl: 'methyl branch', number: 'Number from the nearer', three: 'carbon three', name: 'three-methylhexane', four: 'Four-methylhexane', wrong: 'wrong end'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const R = line(5, 600, 440, 200);
	const S: V2[] = [...R, [800, 590], [800, 740]];
	const SB: Bond[] = [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 4}, {a: 1, b: 5}, {a: 5, b: 6}];
	const sOut = K16.number - 10;
	const Z = zig(6, 660, 560, 140, 96);
	const M = outward(Z, 2, 130);
	return (
		<Overlay>
			<QCard lines={Q2L} at={-100} size={30} y={100} under={[{line: 0, phrase: '‘2-ethylpentane’', at: K16.described}, {line: 2, phrase: 'correct IUPAC name', at: K16.name - 20}, {line: 2, phrase: 'skeletal formula', at: K16.name - 8}]} />
			<g opacity={1 - prog(f, sOut, 12)}>
				<Trace path={[S[6], S[5], R[1], R[2], R[3], R[4]]} at={K16.trace} dur={K16.six - K16.trace} tally={[1440, 600]} />
				<Skel pts={S} bonds={SB} at={K16.described} gapR={30} width={5} />
				<CLabels pts={S} at={K16.described} colorOf={i => (i === 0 && f >= K16.not ? BRANCH_INK : INK)} />
				<Tag x={960} y={334} text="the ethyl is part of the longest chain" at={K16.six + 10} size={30} anchor="middle" color={TEAL} fill="#dff2ef" />
			</g>
			<g opacity={vis(f, sOut + 8)}>
				<Trace path={Z} at={sOut + 10} dur={30} o={0.8} />
				<Skel pts={[...Z, M]} bonds={[...Array.from({length: 5}, (_, i) => ({a: i, b: i + 1})), {a: 2, b: 6, color: BRANCH}]} at={sOut + 10} width={7} />
				<Locants pts={Z} at={K16.number + 20} offs={zigOffs(Z, 52).map((o, i) => (i === 2 ? [46, 26] as V2 : o))} step={8} ring={[{i: 2, at: K16.three}]} />
			</g>
			<AnswerChip x={140} y={720} text="3-methylhexane" at={K16.name + 16} size={40} />
			<Crossed x={1300} y={720} text="4-methylhexane" at={K16.four} cross={K16.wrong} note="lowest locant" />
			<NameBuilder x={BX} y={BY} widths={BW} at={K16.so} fills={[{slot: 1, text: 'hex', at: K16.hexane}, {slot: 2, text: 'ane', at: K16.hexane + 8}, {slot: 0, text: '3-methyl', at: K16.name}]} />
			{void K16.draw}{void K16.methyl}
		</Overlay>
	);
};

// ---------- 17. Handoff ----------
const K17 = cues(sc('handoff'), {so: 'So a name', chain: 'chain length', bonds: 'the bonds', every: 'every branch', rebuild: 'rebuild', think: 'something to think', butane: 'Butane has', c4: 'C four H ten', can: 'Can those', another: 'another way', next: 'Next:'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const Z = zig(4, 600, 640, 110, 70);
	const dim = 1 - 0.6 * prog(f, K17.butane, 14);
	return (
		<Overlay>
			<g opacity={dim}>
				<NameBuilder x={BX} y={250} widths={BW} at={-100} fills={[{slot: 0, text: '3-methyl', at: -100}, {slot: 1, text: 'pent', at: -100}, {slot: 2, text: '-1-ene', at: -100}]} glow={[{slot: 1, from: K17.chain, to: K17.bonds}, {slot: 2, from: K17.bonds, to: K17.every}, {slot: 0, from: K17.every, to: K17.rebuild + 20}]} ticks={[{slot: 1, at: K17.chain + 6}, {slot: 2, at: K17.bonds + 4}, {slot: 0, at: K17.every + 6}]} />
			</g>
			<g opacity={vis(f, K17.c4 - 10)}>
				<rect x={540} y={520} width={460} height={240} rx={18} fill={CARDC} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
				<Skel pts={Z} bonds={[{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}]} at={K17.c4 - 6} width={7} />
				<Sx x={770} y={740} text="butane" size={34} color={INK} hand at={K17.c4} />
				<Tag x={540} y={450} text="C_4H_10" at={K17.c4} size={40} color={INK} fill={CARDC} />
				<rect x={1060} y={520} width={300} height={240} rx={18} fill={CARDC} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" opacity={prog(f, K17.can, 12)} />
				<Sx x={1210} y={680} text="?" size={110} color={INK_SOFT} anchor="middle" weight={800} at={K17.can + 6} />
				<Sx x={1210} y={500} text="same C_4H_10?" size={32} color={INK_SOFT} anchor="middle" hand at={K17.another} />
			</g>
			<Burner x={1460} y={420} h={360} o={vis(f, K17.c4 - 10)} />
			<Tag x={960} y={880} text="Next: how can the same formula make different molecules?" at={K17.next} size={40} anchor="middle" color={TEAL} fill="#dff2ef" />
			{void K17.so}{void K17.rebuild}{void K17.think}{void MULTI}
		</Overlay>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	'Three drawings: full structural (every atom and bond; use it when a question says "draw the structural formula"), condensed (CH_3CH_2CH_2CH_3), skeletal (zigzag; corners and ends are C; add H so each C has 4 bonds: end 3, corner 2, branch point 1, a carbon joined to four carbons 0; a C=C counts as 2 bonds, so each of its carbons has one fewer H).',
	'Stem = carbons in the main chain: meth 1, eth 2, prop 3, but 4, pent 5, hex 6, hept 7, oct 8. Ending = bonds: -ane single only (saturated), -ene C=C, -yne C≡C (unsaturated).',
	'Naming order of work: (1) longest chain, including any C=C or C≡C; (2) number from the end nearer the C=C or C≡C, otherwise nearer the first branch; (3) branches (substituents): methyl, ethyl, with locants; di- for two the same; alphabetical, ignoring di-.',
	'Write the name as branches + stem + ending, e.g. 4-methylpent-1-ene, 3-ethyl-2-methylpentane. Check a drawing by counting C and H.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={27} aidTop={720} aids={['Monkeys Eat Peeled Bananas (meth, eth, prop, but)', 'a, e, y: 1, 2, 3 bonds', 'branches, stem, ending']} tag="organic compounds: carbon chains named by IUPAC rules" />
);
