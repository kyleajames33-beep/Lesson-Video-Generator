// M7 C01 scenes 6 to 9: rule 3 (the longest chain, traced round a bend: "2-ethylbutane" is pentane with one branch),
// branch names and rule 4 (number from the nearer end; 3-methylpentane, 2-methylbutane, 3-methylbutane crossed),
// rule 5 (di-, commas and hyphens, alphabetical order) and double or triple bonds (in the main chain, locant before
// the ending, one fewer H on each C=C carbon, but-1-ene to but-2-ene, ethene and propene need no number).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {AMBER, DrawPath, INK, Overlay, Sx, TEAL, mw, smooth} from '../chem-m6-c01/parts';
import {BW, BX, BY, sc} from './common';
import {
	AnswerChip, BRANCH, BRANCH_INK, CARDC, CHAIN_INK, CLabels, Crossed, HGREY, HGhosts, Locants, MULTI, NameBuilder, RuleChip, Skel, Tag, Trace, V2, ghostDirs, hCount, line, nbrsOf, slotCharX,
	zig, zigOffs,
} from './molecules';
import type {Bond} from './molecules';

const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
const chainB = (n: number): Bond[] => Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1}));
const GAP = 30;
/** A carbon-skeleton molecule: bonds trimmed round C letters; chain carbons pale blue ink, branch carbons amber. */
const CMol: React.FC<{pts: V2[]; bonds: Bond[]; at: number; out?: number; branchIdx?: number[]; amberAt?: {i: number; at: number}[]; o?: number}> = ({pts, bonds, at, out, branchIdx = [], amberAt = [], o = 1}) => {
	const f = useCurrentFrame();
	const colorOf = (i: number) => (branchIdx.includes(i) || amberAt.some(a => a.i === i && f >= a.at) ? BRANCH_INK : INK);
	return (
		<g opacity={vis(f, at, out) * o}>
			<Skel pts={pts} bonds={bonds} at={at} gapR={GAP} width={5} />
			<CLabels pts={pts} at={at} colorOf={colorOf} />
		</g>
	);
};

// ---------- 6. Rule 3: the longest chain, even round a bend ----------
const K6 = cues(sc('rule-longest-chain'), {rule: 'Rule three', longest: 'longest', main: "That's the main", bend: 'bend', look: 'Look at this', drawn: "It's drawn", hanging: 'hanging down', call: 'two-ethylbutane', trace: 'trace a path', five: 'five carbons', pentane: 'pentane,', real: 'real branch', one: 'one carbon'});
export const SceneLongest: React.FC = () => {
	const f = useCurrentFrame();
	const R = line(4, 560, 430, 220);
	const pts: V2[] = [...R, [780, 590], [780, 750]];
	const bonds: Bond[] = [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 1, b: 4}, {a: 4, b: 5}];
	const greyEnd = K6.trace;
	const pulse = Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - K6.bend) / 40)) * Math.PI));
	const amber = K6.real - 20;
	return (
		<Overlay>
			<RuleChip text="Rule 3 of 5: longest chain (it can bend)" at={K6.rule} />
			<Trace path={R} at={K6.longest} dur={50} out={greyEnd} color="#d4ccbc" tally={[1420, 300]} tallyColor={HGREY} />
			<Trace path={[pts[5], pts[4], R[1], R[2], R[3]]} at={K6.trace + 6} dur={K6.five - K6.trace} tally={[1420, 300]} />
			<g opacity={pulse}>{[4, 5].map(i => <circle key={i} cx={pts[i][0]} cy={pts[i][1]} r={42} fill="#f6d77a" opacity={0.7} />)}</g>
			<CMol pts={pts} bonds={bonds} at={6} amberAt={[{i: 0, at: amber}]} />
			<g opacity={prog(f, amber, 10)}><DrawPath d={`M${R[0][0] + GAP},${R[0][1]} L${R[1][0] - GAP},${R[1][1]}`} at={amber} dur={8} color={BRANCH} width={6} /></g>
			<Tag x={R[0][0] - 60} y={R[0][1] + 60} text="branch: 1 carbon" at={amber + 6} size={28} color={BRANCH_INK} fill="#fff3d6" />
			<Tag x={1420} y={400} text="2-ethylbutane?" at={K6.call} out={K6.trace + 20} size={30} />
			<Tag x={1420} y={260 - 60} text="main chain = parent chain" at={K6.main} out={K6.look} size={26} />
			<NameBuilder x={BX} y={BY} widths={BW} at={-100} fills={[{slot: 1, text: 'pent', at: K6.pentane}, {slot: 2, text: 'ane', at: K6.pentane + 8}]} />
			{void K6.drawn}{void K6.hanging}{void K6.one}
		</Overlay>
	);
};

// ---------- 7. Branch names and rule 4: number from the nearer end ----------
const K7 = cues(sc('rule-number'), {branch: 'A branch is named', yl: 'yl', methyl: 'methyl,', ethyl: 'ethyl.', rule: 'Rule four', nearer: 'nearer', lowest: 'lowest number', same: 'same name', locant: 'locant,', which: 'which carbon', here: 'Here the methyl', either: 'either end', name: 'three-methylpentane', shorter: 'shorter chain', left: 'the left', c2: 'carbon two', tm: 'two-methylbutane', three: 'Three-methylbutane', wrong: 'wrong end'});
export const SceneNumber: React.FC = () => {
	const f = useCurrentFrame();
	const A = line(5, 560, 470, 200);
	const Apts: V2[] = [...A, [960, 630]];
	const B = line(4, 640, 470, 200);
	const Bpts: V2[] = [...B, [840, 630]];
	const aOut = K7.shorter - 14;
	return (
		<Overlay>
			<RuleChip text="Rule 4 of 5: number from the nearer end" at={K7.rule} />
			<g opacity={1 - prog(f, aOut, 12)}>
				<Trace path={A} at={8} dur={30} />
				<CMol pts={Apts} bonds={[...chainB(5), {a: 2, b: 5}]} at={6} branchIdx={[5]} />
				<Tag x={960} y={720} text="CH_3 = methyl, C_2H_5 = ethyl (-yl = a branch)" at={K7.methyl} out={K7.rule - 6} size={30} anchor="middle" color={BRANCH_INK} fill="#fff3d6" />
				<Locants pts={A} at={K7.nearer} dy={-62} ring={[{i: 2, at: K7.either}]} />
				<Locants pts={[...A].reverse()} at={K7.lowest} dy={-130} ring={[{i: 2, at: K7.either + 6}]} />
				<Tag x={1420} y={300} text="locant = which carbon" at={K7.locant} size={28} color="#24407a" fill="#e7edf8" />
				<AnswerChip x={1420} y={560} text="3-methylpentane" at={K7.name + 10} />
			</g>
			<g opacity={vis(f, aOut + 10)}>
				<Trace path={B} at={K7.shorter} dur={30} />
				<CMol pts={Bpts} bonds={[...chainB(4), {a: 1, b: 4}]} at={K7.shorter} branchIdx={[4]} />
				<Locants pts={B} at={K7.left} dy={-62} step={10} ring={[{i: 1, at: K7.c2}]} />
				<Locants pts={[...B].reverse()} at={K7.wrong - 30} dy={-130} step={6} ghost ring={[{i: 2, at: K7.wrong}]} />
				<Crossed x={1300} y={560} text="3-methylbutane" at={K7.three} cross={K7.wrong} note="lowest locant: count from the nearer end" size={36} />
			</g>
			<NameBuilder x={BX} y={BY} widths={BW} at={-100} fills={[
				{slot: 1, text: 'pent', at: K7.rule}, {slot: 2, text: 'ane', at: K7.rule + 6}, {slot: 0, text: '3-methyl', at: K7.name},
				{slot: 0, text: ' ', at: aOut}, {slot: 1, text: 'but', at: K7.shorter + 10}, {slot: 0, text: '2-methyl', at: K7.tm},
			]} />
			{void K7.branch}{void K7.yl}{void K7.ethyl}{void K7.same}{void K7.which}{void K7.here}
		</Overlay>
	);
};

// ---------- 8. Rule 5: more than one branch ----------
const K8 = cues(sc('rule-several-branches'), {rule: 'Rule five', two: 'Two of the same', di: 'di,', commas: 'Commas', hyphen: 'hyphen', diff: 'Different branches', alpha: 'alphabetical', ignoring: 'ignoring di', this: 'So this one', name: 'three-ethyl-two-methylpentane', e: 'E comes', though: 'even though', lower: 'lower number'});
export const SceneBranches: React.FC = () => {
	const f = useCurrentFrame();
	const A = line(5, 560, 470, 200);
	const Apts: V2[] = [...A, [760, 630], [960, 310]];
	const B = line(5, 560, 520, 200);
	const Bpts: V2[] = [...B, [760, 680], [960, 360], [960, 210]];
	const offs: V2[] = A.map(() => [-44, 50]);
	const aOut = K8.diff - 8;
	const BRT = '2,3-dimethyl';
	const comma = slotCharX(BX, BW, 0, BRT, 1), hyph = slotCharX(BX, BW, 0, BRT, 3);
	const sw = smooth(prog(f, K8.alpha + 14, 26));
	const CX = 1440;
	return (
		<Overlay>
			<RuleChip text="Rule 5 of 5: several branches" at={K8.rule} />
			<g opacity={1 - prog(f, aOut, 12)}>
				<Trace path={A} at={8} dur={30} />
				<CMol pts={Apts} bonds={[...chainB(5), {a: 1, b: 5}, {a: 2, b: 6}]} at={6} branchIdx={[5, 6]} />
				<Locants pts={A} at={K8.two} offs={offs} />
				<g opacity={vis(f, K8.commas, K8.diff - 10)}>
					<circle cx={comma + 6} cy={BY + 50} r={22} fill="none" stroke={AMBER} strokeWidth={4} />
					<Tag x={comma - 330} y={BY - 130} text="comma between numbers" at={K8.commas + 4} size={26} />
				</g>
				<g opacity={vis(f, K8.hyphen, K8.diff - 10)}>
					<circle cx={hyph + 8} cy={BY + 40} r={20} fill="none" stroke={AMBER} strokeWidth={4} />
					<Tag x={hyph + 40} y={BY - 70} text="hyphen: number to word" at={K8.hyphen + 4} size={26} />
				</g>
			</g>
			<g opacity={vis(f, aOut + 10)}>
				<Trace path={B} at={K8.diff} dur={30} />
				<CMol pts={Bpts} bonds={[...chainB(5), {a: 1, b: 5}, {a: 2, b: 6}, {a: 6, b: 7}]} at={K8.diff} branchIdx={[5, 6, 7]} />
				<Locants pts={B} at={K8.diff + 24} offs={offs} />
				{[['methyl', 0], ['ethyl', 1]].map(([t, k]) => {
					const y0 = 300 + (k as number) * 100, y1 = 300 + (1 - (k as number)) * 100;
					const y = y0 + (y1 - y0) * sw;
					return (
						<g key={t as string} opacity={prog(f, K8.alpha, 10)}>
							<rect x={CX} y={y} width={240} height={76} rx={14} fill="#fff3d6" stroke={BRANCH_INK} strokeWidth={3} />
							<Sx x={CX + 28} y={y + 52} text={t as string} size={42} color={BRANCH_INK} weight={800} at={-1000} />
							<DrawPath d={`M${CX + 28},${y + 62} L${CX + 28 + mw((t as string)[0], 42, false, 800)},${y + 62}`} at={K8.ignoring} dur={8} color={INK} width={4} />
						</g>
					);
				})}
				<Sx x={CX + 270} y={348} text="e" size={36} color={INK} hand at={K8.ignoring + 6} />
				<Sx x={CX + 270} y={448} text="m" size={36} color={INK} hand at={K8.ignoring + 10} />
				<AnswerChip x={1300} y={640} text="3-ethyl-2-methylpentane" at={K8.name + 20} size={36} />
				<Tag x={1300} y={750} text="methyl first because 2 < 3?" at={K8.though} out={K8.lower + 40} size={28} />
			</g>
			<NameBuilder x={BX} y={BY} widths={BW} at={-100} fills={[
				{slot: 0, text: BRT, at: K8.di}, {slot: 1, text: 'pent', at: K8.di + 6}, {slot: 2, text: 'ane', at: K8.di + 12},
				{slot: 0, text: ' ', at: aOut}, {slot: 0, text: '3-ethyl-2-methyl', at: K8.name},
			]} />
			{void K8.this}{void K8.e}{void CARDC}{void CHAIN_INK}
		</Overlay>
	);
};

// ---------- 9. Double and triple bonds ----------
const K9 = cues(sc('multiple-bonds'), {double: 'Double and triple', contain: 'contain', because: 'because the ending', then: 'Then you number', lowest: 'lowest number', locant: 'That locant', before: 'just before the ending', but1: 'but-one-ene', starts: 'starts at carbon one', skel: 'In a skeletal drawing', two: 'counts as two', fewer: 'one fewer hydrogen', move: 'Move the double', but2: 'but-two-ene', eth: 'Ethene and', one: 'only one place'});
export const SceneMultiple: React.FC = () => {
	const f = useCurrentFrame();
	const Z = zig(4, 680, 500, 170, 100);
	const swap = K9.move + 44;
	const bonds: Bond[] = [{a: 0, b: 1, order: 2, color: f < swap ? MULTI : INK}, {a: 1, b: 2, order: 2, color: f >= swap ? MULTI : INK}, {a: 2, b: 3}];
	const hb: Bond[] = [{a: 0, b: 1, order: 2}, {a: 1, b: 2}, {a: 2, b: 3}];
	const gOut = K9.move - 10;
	const offs = zigOffs(Z, 52);
	const endX = slotCharX(BX, BW, 2, '-1-ene', 1);
	return (
		<Overlay>
			<RuleChip text="Double or triple bond: in the main chain, lowest number" at={K9.double} />
			<Trace path={Z} at={K9.contain} dur={40} o={0.8} />
			<Skel pts={Z} bonds={bonds} at={10} width={7} move={{from: 0, to: 1, at: K9.move + 30, dur: 30}} />
			<Tag x={960} y={680} text="the C=C must be in the main chain" at={K9.contain + 16} out={K9.then} size={30} anchor="middle" color={TEAL} fill="#dff2ef" />
			<Locants pts={Z} at={K9.then + 8} offs={offs} out={K9.two - 10} ring={[{i: 0, at: K9.starts}]} />
			<Tag x={endX - 40} y={BY - 70} text="locant before the ending" at={K9.before} out={K9.skel} size={26} color={TEAL} fill="#dff2ef" />
			{Z.map((p, i) => <HGhosts key={i} p={p} dirs={ghostDirs(p, nbrsOf(Z, hb, i), hCount(hb, i))} at={K9.two + 10 + i * 16} out={gOut} step={5} />)}
			<Tag x={960} y={700} text="C=C: one fewer H on each carbon" at={K9.fewer - 20} out={gOut} size={30} anchor="middle" color={TEAL} fill="#dff2ef" />
			<Locants pts={Z} at={K9.but2 + 4} offs={offs} ring={[{i: 1, at: K9.but2 + 30}]} />
			<Locants pts={[...Z].reverse()} at={K9.but2 + 20} offs={[...offs].reverse().map(o => [o[0], o[1] * 1.95] as V2)} ghost ring={[{i: 1, at: K9.but2 + 36}]} />
			{/* ethene and propene */}
			<g opacity={vis(f, K9.eth - 4)}>
				<Skel pts={[[1450, 330], [1590, 330]]} bonds={[{a: 0, b: 1, order: 2, color: MULTI}]} at={K9.eth} width={6} />
				<Sx x={1640} y={342} text="ethene" size={34} color={INK} hand at={K9.eth + 6} />
				<Skel pts={zig(3, 1440, 470, 110, 70)} bonds={[{a: 0, b: 1, order: 2, color: MULTI}, {a: 1, b: 2}]} at={K9.eth + 16} width={6} />
				<Sx x={1690} y={482} text="propene" size={34} color={INK} hand at={K9.eth + 22} />
				<Tag x={1440} y={560} text="only one place: no number" at={K9.one} size={28} color={TEAL} fill="#dff2ef" />
			</g>
			<NameBuilder x={BX} y={BY} widths={BW} at={-100} fills={[{slot: 1, text: 'but', at: K9.locant}, {slot: 2, text: '-1-ene', at: K9.locant + 10}, {slot: 2, text: '-2-ene', at: K9.but2}]} glow={[{slot: 2, from: K9.but1, to: K9.but1 + 40}]} />
			{void K9.because}{void K9.lowest}{void CARDC}{void CHAIN_INK}{void HGREY}
		</Overlay>
	);
};
