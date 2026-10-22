// M7 C02 scenes 9 to 11: finding every isomer of C5H12 (the chain shortener: pentane, 2-methylbutane with the C1 and C3
// ghost positions greyed, 2,2-dimethylpropane, a two-carbon chain that only rebuilds a longer one; three in a row),
// spotting duplicates (a bent pentane, "1-methylbutane" crossed, 3-methylbutane counted from the wrong end) and the
// memory aid (same formula, different arrangement; chain, position, group).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {INK, INK_SOFT, Overlay, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {
	AnswerChip, BRANCH, BRANCH_INK, CHAIN, CHAIN_INK, Crossed, HGREY, Locants, NameLbl, Place, Skel, Stamp, Tag, Trace, V2, lerpV, outward, zig,
} from '../chem-m7-c01/molecules';
import type {Bond} from '../chem-m7-c01/molecules';
import {sc} from './common';
import {M, Mol2, SkelAt, Tally, at2, vis} from './parts';
import {RING_B, RING_PTS} from './s2';

const NAMES: Record<string, [string, string][]> = {
	pentane: [['pentane', CHAIN_INK]],
	mb: [['2-methyl', BRANCH_INK], ['butane', CHAIN_INK]],
	dmp: [['2,2-dimethyl', BRANCH_INK], ['propane', CHAIN_INK]],
};
/** A small named structure (thumbnail or row member) in local coordinates, for Place. */
const Named: React.FC<{m: Mol2; name: [string, string][]; at: number; dy?: number; size?: number}> = ({m, name, at, dy = 150, size = 40}) => (
	<g>
		<SkelAt m={m} x={0} y={0} at={at} width={7} />
		<NameLbl x={0} y={dy} parts={name} at={at + 6} size={size} />
	</g>
);

// ---------- 9. Finding every isomer ----------
const K9 = cues(sc('find-every-isomer'), {sys: 'systematically.', c5: 'For C five', longest: 'longest chain:', pent: 'pentane.', shorten: 'Shorten the chain', by: 'by one,', branch: 'as a branch', two: 'carbon two', mb: 'two-methylbutane.', again: 'Shorten it again', spare: 'both spare', middle: 'middle carbon', dmp: 'two-dimethylpropane.', more: 'Shorten once more', any: 'any branch', longer: 'longer chain', all: 'all three'});
const CX = 960, CY = 560;
export const SceneFind: React.FC = () => {
	const f = useCurrentFrame();
	const Z = at2(M.pentane, CX, CY);
	// stage 1: carbon 4 lifts and docks on carbon 2 (index 1)
	const T1 = outward(Z.slice(0, 4), 1, 110);
	const g1: V2[] = [outward(Z.slice(0, 4), 0, 110), T1, outward(Z.slice(0, 4), 2, 110)];
	const lift1 = smooth(prog(f, K9.shorten + 4, 16)), move1 = smooth(prog(f, K9.two, 22));
	const up4: V2 = [Z[4][0] + 20 * lift1, Z[4][1] - 90 * lift1];
	const p4 = move1 > 0 ? lerpV(up4, T1, move1) : up4;
	const dock1 = K9.two + 22;
	// stage 2: carbon 3 lifts and docks on carbon 2's other side; the frame morphs to a cross on carbon 2
	const c = Z[1];
	const cross: V2[] = [[c[0] - 110, c[1]], c, [c[0] + 110, c[1]], [c[0], c[1] + 110], [c[0], c[1] - 110]];
	const lift2 = smooth(prog(f, K9.again + 4, 16)), move2 = smooth(prog(f, K9.middle - 6, 26));
	const up3: V2 = [Z[3][0] + 30 * lift2, Z[3][1] + 90 * lift2];
	const P: V2[] = [
		lerpV(Z[0], cross[0], move2), Z[1], lerpV(Z[2], cross[2], move2),
		move2 > 0 ? lerpV(up3, cross[3], move2) : up3,
		lerpV(p4, cross[4], move2),
	];
	const dock2 = K9.middle + 20;
	const ln = (a: V2, b: V2, o: number, col = INK, k = 0) => (o > 0.01 ? <line key={k} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={col} strokeWidth={7} strokeLinecap="round" opacity={o} /> : null);
	const stageO = vis(f, K9.pent - 10) * (1 - prog(f, K9.all, 1));
	const ghostA = [K9.by + 6, K9.by + 30];
	return (
		<Overlay>
			<TaskLine text="All isomers of C_5H_12" at={0} size={52} y={150} />
			<Tag x={96} y={200} text="longest chain first, then shorten by one" at={K9.sys} size={30} color={TEAL} fill="#dff2ef" />
			<Tally x={1500} y={120} text="C 5, H 12" at={K9.c5} ticks={[K9.all + 10, K9.all + 18]} />
			{/* the working structure in the centre */}
			<g opacity={stageO}>
				<Trace path={Z} at={K9.longest} dur={K9.pent - K9.longest + 6} tally={[1260, 640]} out={K9.shorten} />
				{ln(P[0], P[1], prog(f, K9.pent - 10, 10), INK, 1)}
				{ln(P[1], P[2], prog(f, K9.pent - 6, 10), INK, 2)}
				{ln(P[2], P[3], prog(f, K9.pent - 2, 10) * (1 - prog(f, K9.again, 8)), INK, 3)}
				{ln(P[3], up4, prog(f, K9.pent + 2, 10) * (1 - prog(f, K9.shorten, 8)), INK, 4)}
				{f >= dock1 ? ln(P[1], lerpV(P[1], P[4], prog(f, dock1, 8)), 1, BRANCH, 5) : null}
				{f >= dock2 ? ln(P[1], lerpV(P[1], P[3], prog(f, dock2, 8)), 1, BRANCH, 6) : null}
				{f >= K9.shorten && f < dock1 + 8 ? <circle cx={p4[0]} cy={p4[1]} r={12} fill={BRANCH} stroke={BRANCH_INK} strokeWidth={3} /> : null}
				{f >= K9.again && f < dock2 + 8 ? <circle cx={P[3][0]} cy={P[3][1]} r={12} fill={BRANCH} stroke={BRANCH_INK} strokeWidth={3} /> : null}
				{/* ghost spots for the floating carbon: C1 and C3 grey out, C2 is used */}
				{g1.map((g, i) => {
					const o = vis(f, K9.by, dock1 + 4, 10);
					const grey = i !== 1 ? prog(f, ghostA[i === 0 ? 0 : 1], 10) : 0;
					return o > 0.01 ? <g key={i} opacity={o}><circle cx={g[0]} cy={g[1]} r={22} fill="none" stroke={grey > 0.5 ? HGREY : BRANCH} strokeWidth={4} strokeDasharray="6 6" />{grey > 0.01 ? <line x1={g[0] - 16} y1={g[1] - 16} x2={g[0] + 16} y2={g[1] + 16} stroke={HGREY} strokeWidth={4} opacity={grey} /> : null}</g> : null;
				})}
				<Tag x={g1[0][0] - 330} y={g1[0][1] + 20} text="C1: just a longer chain" at={ghostA[0]} out={K9.again} size={26} />
				<Tag x={g1[2][0] + 40} y={g1[2][1] + 10} text="C3: C2 from the other end" at={ghostA[1]} out={K9.again} size={26} />
				<NameLbl x={CX} y={CY + 140} parts={NAMES.pentane} at={K9.pent} out={K9.shorten} />
				<NameLbl x={CX - 60} y={CY + 160} parts={NAMES.mb} at={K9.mb} out={K9.again} />
				<NameLbl x={c[0]} y={CY + 230} parts={NAMES.dmp} at={K9.dmp} out={K9.all - 4} />
			</g>
			{/* kept thumbnails, then the three in a row */}
			<Place keys={[{at: -100, x: 300, y: 430, s: 0.5}, {at: K9.all, x: 420, y: 600, s: 0.85}]}>
				<g opacity={vis(f, K9.shorten + 6) * (f < K9.all ? 0.6 : 1)}><Named m={M.pentane} name={NAMES.pentane} at={K9.shorten + 6} /></g>
			</Place>
			<Place keys={[{at: -100, x: 300, y: 700, s: 0.5}, {at: K9.all, x: 960, y: 600, s: 0.85}]}>
				<g opacity={vis(f, K9.again + 6) * (f < K9.all ? 0.6 : 1)}><Named m={M.methylbutane} name={NAMES.mb} at={K9.again + 6} /></g>
			</Place>
			<Place keys={[{at: -100, x: 1500, y: 600, s: 0.85}]}>
				<g opacity={prog(f, K9.all, 1)}><Named m={M.dimethylpropane} name={NAMES.dmp} at={-100} dy={190} /></g>
			</Place>
			{/* shorten once more: two carbons plus a branch is just a longer chain */}
			<g opacity={vis(f, K9.more, K9.all - 10)}>
				{(() => { const g: V2[] = [[1460, 420], [1570, 450], [1460 - 70, 420 - 80]]; return (
					<g>
						<Trace path={[g[2], g[0], g[1]]} at={K9.longer - 20} dur={30} tally={[1640, 380]} />
						<Skel pts={g} bonds={[{a: 0, b: 1}, {a: 0, b: 2, color: BRANCH}]} at={K9.more + 4} width={6} o={0.7} />
						<Tag x={1500} y={520} text="branches on an end carbon just lengthen the chain" at={K9.any} size={26} anchor="middle" />
					</g>
				); })()}
			</g>
			<AnswerChip x={960} y={830} text="C_5H_12: 3 isomers" at={K9.all + 20} size={44} anchor="middle" />
			{void K9.branch}{void K9.spare}{void K9.dmp}{void CHAIN}
		</Overlay>
	);
};

// ---------- 10. Spotting duplicates ----------
const K10 = cues(sc('spot-duplicates'), {dup: 'duplicates.', bend: 'Bending a chain', bent: 'this bent drawing', still: 'still pentane', end: 'end carbon', longer: 'chain longer', one: 'one-methylbutane', again: 'pentane again', three: 'three-methylbutane', wrong: 'wrong end', name: 'name every structure', same: 'Same name'});
const ROWX = [420, 960, 1500], ROWY = 270;
const BENT: Mol2 = {pts: [[-170, -70], [-60, -110], [50, -70], [20, 40], [80, 140]], bonds: [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 3, b: 4}]};
const Z4 = zig(4, -165, 0, 110, 64);
const ONEMB: Mol2 = {pts: [...Z4, [Z4[0][0], Z4[0][1] + 110]], bonds: [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 0, b: 4, color: BRANCH}]};
const MIRROR: Mol2 = {pts: [...Z4, outward(Z4, 2, 110)], bonds: [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}, {a: 2, b: 4, color: BRANCH}]};
export const SceneDuplicates: React.FC = () => {
	const f = useCurrentFrame();
	const B = at2(BENT, 420, 660);
	const O = at2(ONEMB, 1450, 660);
	const R = at2(MIRROR, 960, 660);
	const nm = K10.name;
	return (
		<Overlay>
			{[M.pentane, M.methylbutane, M.dimethylpropane].map((m, i) => (
				<Place key={i} keys={[{at: -100, x: ROWX[i], y: ROWY, s: 0.5}]}><Named m={m} name={NAMES[['pentane', 'mb', 'dmp'][i]]} at={-100} dy={i === 2 ? 190 : 150} size={52} /></Place>
			))}
			{/* a bent drawing is still pentane */}
			<g opacity={vis(f, K10.bend) * (f >= K10.end ? 0.35 : 1)}>
				<Trace path={B} at={K10.still - 30} dur={36} tally={[560, 560]} out={K10.end} />
				<SkelAt m={BENT} x={0} y={0} pts={B} at={K10.bend} width={7} />
				<NameLbl x={330} y={850} parts={NAMES.pentane} at={K10.still} />
			</g>
			<Stamp x={420} y={430} at={K10.still + 16} o={f >= nm ? 0.5 : 1} />
			{/* a methyl on an end carbon */}
			<g opacity={vis(f, K10.end, K10.three)}>
				<Trace path={[O[4], O[0], O[1], O[2], O[3]]} at={K10.longer - 10} dur={34} tally={[1580, 520]} />
				<SkelAt m={ONEMB} x={0} y={0} pts={O} at={K10.end} width={7} />
			</g>
			<g opacity={f >= nm ? 0.45 : 1}><Crossed x={1230} y={790} text="1-methylbutane" at={K10.one} cross={K10.again} note="it's just a longer chain: pentane" size={34} /></g>
			{/* 3-methylbutane is 2-methylbutane counted from the wrong end */}
			<g opacity={vis(f, K10.three)}>
				<SkelAt m={MIRROR} x={0} y={0} pts={R} at={K10.three} width={7} />
				<Locants pts={R.slice(0, 3)} offs={[[0, 52], [0, -50], [0, -56]]} at={K10.three + 14} ghost ring={[{i: 2, at: K10.three + 34}]} out={K10.wrong + 50} />
				<Locants pts={[R[3], R[2]]} offs={[[0, -50], [0, -56]]} at={K10.wrong + 40} ring={[{i: 1, at: K10.wrong + 56}]} />
				<Tag x={960} y={790} text="number from the nearer end" at={K10.wrong} out={K10.same} size={28} anchor="middle" />
			</g>
			<Stamp x={960} y={430} at={K10.wrong + 20} />
			<Tag x={960} y={940} text="name every structure: same name = same molecule" at={K10.name} size={36} color={TEAL} fill="#dff2ef" anchor="middle" />
			{void K10.dup}{void K10.bent}{void INK_SOFT}
		</Overlay>
	);
};

// ---------- 11. Memory aid ----------
const K11 = cues(sc('memory-aid'), {rem: 'remember:', same: 'same formula, different', iso: 'Isomers always', check: 'check the formula', ask: 'Then ask', chain: 'the chain,', pos: 'the position,', group: 'or the group'});
const PairIcon: React.FC<{a: Mol2; b: Mol2; x: number; at: number; label: string; labelAt: number; o: number; ring?: boolean}> = ({a, b, x, at, label, labelAt, o, ring}) => (
	<g opacity={o}>
		<SkelAt m={a} x={x - 140} y={660} s={0.7} at={at} />
		{ring ? <Skel pts={RING_PTS.map(p => [x + 140 + (p[0] - 1040) * 0.7, 660 + (p[1] - 530) * 0.7] as V2)} bonds={RING_B} at={at + 6} width={6} /> : <SkelAt m={b} x={x + 140} y={660} s={0.7} at={at + 6} />}
		<Sx x={x} y={840} text={label} size={52} color={TEAL} anchor="middle" hand at={labelAt} />
	</g>
);
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K11.chain, K11.pos, K11.group];
	const dim = (i: number) => (at[i + 1] !== undefined && f >= at[i + 1] + 10 ? 0.6 : 1);
	return (
		<Overlay>
			<Sx x={960} y={330} text="Same formula, different arrangement." size={84} color={TEAL} anchor="middle" hand at={K11.same} />
			<Sx x={960} y={440} text="check the formula first, then ask: what changed?" size={40} color={INK_SOFT} anchor="middle" hand at={K11.check} />
			<PairIcon a={M.butane} b={M.methylpropane} x={420} at={K11.chain - 4} label="chain" labelAt={K11.chain} o={dim(0)} />
			<PairIcon a={M.but1ene} b={M.but2ene} x={960} at={K11.pos - 4} label="position" labelAt={K11.pos} o={dim(1)} />
			<PairIcon a={M.but1ene} b={M.but1ene} x={1500} at={K11.group - 4} label="group" labelAt={K11.group} o={dim(2)} ring />
			{void K11.rem}{void K11.iso}{void K11.ask}{void INK}{void ({} as Bond)}
		</Overlay>
	);
};
