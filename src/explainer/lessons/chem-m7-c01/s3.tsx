// M7 C01 scenes 10 to 12: the multiple bond wins the numbering (4-methylpent-1-ene; 2-methylpent-4-ene crossed;
// pent-2-yne drawn straight through the triple bond), a name read back into a molecule (2,2-dimethylpentane in full,
// counted to C7H16; C6H14 crossed) and the memory aid (longest chain, lowest numbers, branches + stem + ending).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {INK, Overlay, TEAL} from '../chem-m6-c01/parts';
import {TaskLine} from '../chem-m6-c01/parts';
import {BW, BX, BY, sc} from './common';
import {
	AnswerChip, BRANCH, BRANCH_INK, CHAIN_INK, Crossed, FullMol, Locants, MULTI, NameBuilder, RuleChip, Skel, Tag, Trace, V2, builderW, fullAlkane, outward, zig, zigOffs,
} from './molecules';
import type {Bond, FAtom} from './molecules';

const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));

// ---------- 10. The multiple bond wins the numbering ----------
const K10 = cues(sc('bond-wins'), {what: 'What if', wins: 'wins,', because: 'because', chain: 'In this chain', left: 'numbering from the left', one: 'carbon one', four: 'carbon four', name: 'four-methylpent-one-ene', right: 'From the right', two: 'get a two', fourB: 'get a four', nm: 'two-methylpent-four-ene', wrong: 'wrong.', triple: 'A triple bond', yne: 'pent-two-yne'});
export const SceneWins: React.FC = () => {
	const f = useCurrentFrame();
	const Z = zig(5, 600, 520, 170, 100);
	const M = outward(Z, 3, 130);
	const pts: V2[] = [...Z, M];
	const bonds: Bond[] = [{a: 0, b: 1, order: 2, color: MULTI}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 4}, {a: 3, b: 5, color: BRANCH}];
	const offs = zigOffs(Z, 52);
	offs[3] = [0, 56];
	const rOffs = [...offs].reverse().map(o => [o[0] * 1.9, o[1] * 1.9] as V2);
	const aOut = K10.triple - 6;
	const Y: V2[] = [[600, 540], [740, 540], [880, 540], [1020, 540], [1150, 470]];
	return (
		<Overlay>
			<RuleChip text="A branch as well? The multiple bond wins" at={K10.what} />
			<g opacity={1 - prog(f, aOut, 12)}>
				<Trace path={Z} at={K10.chain} dur={30} o={0.8} />
				<Skel pts={pts} bonds={bonds} at={8} width={7} pulse={{bond: 0, at: K10.wins}} />
				<Tag x={960} y={720} text="multiple bond first, then branches" at={K10.wins + 10} out={K10.left} size={30} anchor="middle" color={TEAL} fill="#dff2ef" />
				<Locants pts={Z} at={K10.left} offs={offs} step={14} ring={[{i: 0, at: K10.one}, {i: 3, at: K10.four}]} />
				<Locants pts={[...Z].reverse()} at={K10.right} offs={rOffs} step={10} ghost ring={[{i: 1, at: K10.two}, {i: 3, at: K10.fourB}]} />
				<AnswerChip x={1360} y={260} text="4-methylpent-1-ene" at={K10.name + 16} size={38} />
			</g>
			<Crossed x={1360} y={420} text="2-methylpent-4-ene" at={K10.nm} cross={K10.wrong} note="the C=C gets the lowest number" o={f >= aOut ? 0.4 : 1} />
			<g opacity={vis(f, aOut + 8)}>
				<Trace path={Y} at={K10.yne - 30} dur={30} o={0.8} />
				<Skel pts={Y} bonds={[{a: 0, b: 1}, {a: 1, b: 2, order: 3, color: MULTI}, {a: 2, b: 3}, {a: 3, b: 4}]} at={K10.triple + 10} width={7} />
				<Locants pts={Y} at={K10.yne} offs={Y.map((_, i) => [0, i === 4 ? -52 : 56] as V2)} ring={[{i: 1, at: K10.yne + 24}]} />
				<Tag x={880} y={660} text="drawn straight through the triple bond" at={K10.yne + 30} size={26} anchor="middle" />
			</g>
			<NameBuilder x={BX} y={BY} widths={BW} at={-100} fills={[
				{slot: 0, text: '4-methyl', at: K10.name}, {slot: 1, text: 'pent', at: K10.name + 8}, {slot: 2, text: '-1-ene', at: K10.name + 16},
				{slot: 0, text: ' ', at: aOut}, {slot: 2, text: '-2-yne', at: K10.yne},
			]} />
			{void K10.because}{void CHAIN_INK}{void INK}
		</Overlay>
	);
};

// ---------- 11. Reading a name back into a molecule ----------
const K11 = cues(sc('name-to-structure'), {names: 'Names work', take: 'Take two', name: 'two-dimethylpentane.', draw: 'Draw the main', pent: 'pent,', five: 'five carbons', put: 'Put two', c2: 'carbon two', add: 'add hydrogens', four: 'four bonds', check: 'Check by counting', seven: 'seven carbons', sixteen: 'sixteen', count: 'Count only one', c6: 'C six', short: 'short,', cant: "can't be"});
export const SceneName: React.FC = () => {
	const X0 = 560, Y = 470, SP = 180;
	const m = fullAlkane(5, X0, Y, SP, [{on: 1, dir: -1}, {on: 1, dir: 1}], {c: i => (i < 5 ? K11.five + i * 6 : K11.put + 10 + (i - 5) * 10), h: i => K11.add + 6 + i * 5});
	const atoms: FAtom[] = m.atoms.map((a, i) => (a.el === 'C' ? {...a, color: m.branchC.includes(i) ? BRANCH_INK : CHAIN_INK} : a));
	const bonds = m.bonds.map(b => (m.branchC.includes(b.b) ? {...b, color: BRANCH} : b));
	const chainPts = m.carbons.map(i => m.atoms[i].p);
	return (
		<Overlay>
			<TaskLine text="Draw 2,2-dimethylpentane" at={K11.take} size={52} x={96} y={160} />
			<Trace path={chainPts} at={K11.five} dur={30} width={44} o={0.75} />
			<FullMol atoms={atoms} bonds={bonds} size={44} />
			<Locants pts={chainPts} at={K11.five + 4} offs={chainPts.map(() => [44, 56] as V2)} out={K11.add} />
			<Tag x={960} y={210} text="C2: bonded to four carbons, so no H" at={K11.four + 10} size={28} anchor="middle" color={BRANCH_INK} fill="#fff3d6" />
			<Tag x={1450} y={380} text="C: 5 + 2 = 7    H: 16" at={K11.seven} size={34} color={INK} fill="#fffdf8" />
			<AnswerChip x={1450} y={460} text="C_7H_16" at={K11.sixteen + 6} size={44} />
			<Crossed x={1450} y={600} text="C_6H_14" at={K11.c6} cross={K11.short} note="count every branch" size={40} />
			<NameBuilder x={BX} y={BY} widths={BW} at={-100} fills={[{slot: 0, text: '2,2-dimethyl', at: K11.name}, {slot: 1, text: 'pent', at: K11.name + 8}, {slot: 2, text: 'ane', at: K11.name + 16}]}
				glow={[{slot: 1, from: K11.pent, to: K11.put}, {slot: 0, from: K11.put, to: K11.add}]} />
			{void K11.names}{void K11.draw}{void K11.c2}{void K11.check}{void K11.count}{void K11.cant}{void RuleChip}
		</Overlay>
	);
};

// ---------- 12. Memory aid ----------
const K12 = cues(sc('memory-aid'), {so: 'So, to name', find: 'find the longest', number: 'Number it', lowest: 'lowest numbers', write: 'Then write', branches: 'branches, stem', stem: 'stem,', ending: 'ending.'});
const AID = ['1  Longest chain (with the C=C or C≡C)', '2  Lowest numbers: multiple bond first, then branches', '3  Write: branches (a to z) + stem + ending'];
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K12.find, K12.number, K12.write];
	const S = 1.15;
	const bx = (1920 - builderW(BW) * S) / 2;
	const Z = zig(5, 1460, 330, 80, 56);
	const M = outward(Z, 2, 80);
	return (
		<Overlay>
			{AID.map((t, i) => (
				<g key={i} opacity={at[i + 1] !== undefined && f >= at[i + 1] + 20 ? 0.6 : 1}>
					<TaskLine text={t} at={at[i]} size={48} x={140} y={230 + i * 100} />
				</g>
			))}
			<NameBuilder x={bx} y={600} widths={BW} s={S} at={K12.branches - 10}
				fills={[{slot: 0, text: '3-methyl', at: K12.branches}, {slot: 1, text: 'pent', at: K12.stem}, {slot: 2, text: '-1-ene', at: K12.ending}]} />
			<g opacity={vis(f, K12.ending + 4)}>
				<Skel pts={[...Z, M]} bonds={[{a: 0, b: 1, order: 2, color: MULTI}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 4}, {a: 2, b: 5, color: BRANCH}]} at={K12.ending + 6} width={6} />
			</g>
			{void K12.so}{void K12.lowest}
		</Overlay>
	);
};
