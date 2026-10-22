// M7 C03 scenes 14 to 19: attempt 1 (propyne: shape and angle at each carbon; series and general formula), brief
// feedback ("all three carbons linear" crossed), attempt 2 (hexane against 2,3-dimethylbutane, intramolecular and
// intermolecular), brief feedback ("branched isomer: weaker covalent bonds" crossed), the handoff (the strip with real
// data to come; the second bond returns later) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {INK, INK_SOFT, KeyNotesBoard, Overlay, PauseHold, Sx, TEAL} from '../chem-m6-c01/parts';
import {
	AnswerChip, AngleArc, BRANCH, BallStick, CHAIN_INK, Crossed, Lobes, NAVY, QCardX, Skel, Tag, TickMark, V2, VIOLET, ethene3d, n3, outward, proj, propyne3d, zig,
} from '../chem-m7-c01/molecules';
import type {Bond, Vec3} from '../chem-m7-c01/molecules';
import {Burner} from '../chem-m7-c01/s1';
import {CANDLE, hold, sc} from './common';
import {Contact, GChip, GF, Mark, PiCloud, Strip, multiCol, vis} from './parts';
import {PicH} from '../chem-m6-c01/parts';

const chainB = (n: number): Bond[] => Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1}));

// ---------- attempt 1 ----------
const Q1 = ['Propyne has the condensed structural formula CH_3C≡CH.', '(a) State the shape and bond angle around each carbon atom.', '(b) Identify the homologous series to which propyne belongs, and show that its', 'molecular formula fits the general formula of that series.'];
const A1 = 'attempt-1';
const K14 = cues(sc(A1), {turn: 'Your turn', propyne: 'Propyne has', state: 'State the shape', then: 'Then identify', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K14.turn} />
		<QCardX lines={Q1} at={K14.turn + 6} y={160} size={36} />
		<Sx x={960} y={640} text="CH_3C≡CH" size={110} color={INK} anchor="middle" weight={700} at={K14.propyne + 10} />
		<PauseHold h={hold(A1)} at={K14.pause} x={140} y={860} cx={1650} cy={850} />
		{void K14.state}{void K14.then}
	</Overlay>
);

// ---------- feedback 1 ----------
const K15 = cues(sc('feedback-1'), {ch3: 'The C H three', tet: 'tetrahedral,', two: 'The two carbons', linear: 'linear,', alkyne: 'Propyne is an alkyne', gf: 'C n H two n', with: 'With n equal', c3h4: 'C three H four', matches: 'which matches', calling: 'Calling all three', misses: 'misses the C'});
const PY3 = propyne3d();
const dirsOf = (i: number): Vec3[] => PY3.bonds.filter(([a, b]) => a === i || b === i).map(([a, b]) => { const j = a === i ? b : a; const p = PY3.atoms[j].p, c = PY3.atoms[i].p; return n3([p[0] - c[0], p[1] - c[1], p[2] - c[2]]); });
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const M = {x: 700, y: 560, u: 240, yaw: 0.25, pitch: 0.3};
	const P = proj(PY3, M.x, M.y, M.u, M.yaw, M.pitch);
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={100} size={30} under={[{line: 1, phrase: 'each carbon atom', at: 10}, {line: 1, phrase: 'shape and bond angle', at: K15.tet}, {line: 2, phrase: 'homologous series', at: K15.alkyne}, {line: 3, phrase: 'general formula', at: K15.gf}]} />
			<BallStick {...PY3} orders={PY3.orders} bondColors={multiCol(PY3)} cx={M.x} cy={M.y} unitPx={M.u} yaw={M.yaw} pitch={M.pitch} o={vis(f, 0)} />
			<Lobes cx={M.x} cy={M.y} unitPx={M.u} dirs={dirsOf(0)} centre3={PY3.atoms[0].p} yaw={M.yaw} pitch={M.pitch} len={0.55} o={vis(f, K15.ch3 + 30, K15.two) * 0.9} />
			<AngleArc c={P[0]} a={P[1]} b={P[3]} r={54} text="109.5°" at={K15.tet} size={32} lab={2.4} o={f >= K15.two ? 0.6 : 1} />
			<Tag x={P[0][0] - 40} y={P[0][1] + 130} text="CH_3 carbon: tetrahedral" at={K15.tet} size={28} color={VIOLET} fill="#f1ebfa" anchor="middle" />
			{[1, 2].map(i => <Lobes key={i} cx={M.x} cy={M.y} unitPx={M.u} dirs={dirsOf(i)} centre3={PY3.atoms[i].p} yaw={M.yaw} pitch={M.pitch} len={0.5} fat={dirsOf(i).map((_, k) => ((i === 1 && k === 1) || (i === 2 && k === 0) ? 1.6 : 1))} o={vis(f, K15.two + 20, K15.alkyne) * 0.9} />)}
			<AngleArc c={P[1]} a={P[0]} b={P[2]} r={50} text="180°" at={K15.linear} size={32} lab={2.2} />
			<Tag x={P[2][0] + 20} y={P[2][1] - 150} text="C≡C carbons: linear" at={K15.linear} size={28} color={NAVY} fill="#e7edf8" anchor="middle" />
			<GChip x={1200} y={420} text="alkyne: C_{n}H_{2n−2}, n = 3 → C_3H_4" at={K15.gf} size={32} color={TEAL} fill="#dff2ef" />
			<GChip x={1200} y={500} text="count: C 3, H 3 + 1 = 4" at={K15.c3h4} size={30} />
			<TickMark x={1690} y={530} at={K15.matches} />
			<AnswerChip x={96} y={780} text="CH_3 carbon: tetrahedral 109.5°; C≡C carbons: linear 180°; alkyne, C_3H_4" at={K15.matches + 6} size={30} />
			<Crossed x={96} y={870} text="all three carbons linear" at={K15.calling} cross={K15.misses} note="read each carbon: the CH_3 carbon has 4 directions" size={34} />
			{void K15.with}{void K15.c3h4}
		</Overlay>
	);
};

// ---------- attempt 2 ----------
const Q2 = ['Hexane and 2,3-dimethylbutane both have the molecular formula C_6H_14.', 'Explain which compound has the higher boiling point, with reference to the', 'intramolecular and intermolecular bonding present.'];
const A2 = 'attempt-2';
const K16 = cues(sc(A2), {last: 'Last one', hexane: 'Hexane and two', formula: 'molecular formula', explain: 'Explain which', refer: 'Refer to', pause: 'Pause here'});
const HEX = zig(6, -200, 0, 80, 48);
const DZ = zig(4, -120, 0, 80, 48);
const DMB: {pts: V2[]; bonds: Bond[]} = {pts: [...DZ, outward(DZ, 1, 80), outward(DZ, 2, 80)], bonds: [...chainB(4), {a: 1, b: 4}, {a: 2, b: 5}]};
const at2 = (pts: V2[], x: number, y: number): V2[] => pts.map(p => [p[0] + x, p[1] + y]);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K16.last} />
		<QCardX lines={Q2} at={K16.last + 6} y={160} size={36} />
		<Skel pts={at2(HEX, 560, 620)} bonds={chainB(6)} at={K16.hexane} width={7} />
		<Sx x={560} y={740} text="hexane" size={36} color={INK} anchor="middle" weight={700} at={K16.hexane} />
		<Skel pts={at2(DMB.pts, 1320, 620)} bonds={DMB.bonds} at={K16.hexane + 20} width={7} />
		<Sx x={1320} y={760} text="2,3-dimethylbutane" size={36} color={INK} anchor="middle" weight={700} at={K16.hexane + 20} />
		<PauseHold h={hold(A2)} at={K16.pause} x={140} y={880} cx={1650} cy={870} />
		{void K16.formula}{void K16.explain}{void K16.refer}
	</Overlay>
);

// ---------- feedback 2 ----------
const K17 = cues(sc('feedback-2'), {covalent: 'covalent bonds hold', break: "doesn't break", same: 'same electrons', disp: 'only dispersion', straight: "Hexane's straight", contact: 'more contact', stronger: 'are stronger', higher: 'the higher', saying: 'Saying the', wrong: 'wrong:', separates: 'boiling separates'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const glow = vis(f, K17.covalent, K17.same + 20);
	const cp = vis(f, K17.contact - 6);
	const H1 = at2(HEX, 560, 460), H2 = at2(HEX, 560, 545);
	const D1 = at2(DMB.pts, 1320, 490), D2 = at2(DMB.pts, 1335, 660);
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={100} size={32} under={[{line: 2, phrase: 'intramolecular', at: K17.covalent}, {line: 0, phrase: 'molecular formula C_6H_14', at: K17.same}, {line: 2, phrase: 'intermolecular', at: K17.contact}]} />
			{glow > 0.01 ? <g opacity={glow * 0.5}><Skel pts={H1} bonds={chainB(6)} at={-100} width={18} color="#f6d77a" /><Skel pts={D1} bonds={DMB.bonds} at={-100} width={18} color="#f6d77a" /></g> : null}
			<Skel pts={H1} bonds={chainB(6)} at={-100} width={7} />
			<Skel pts={D1} bonds={DMB.bonds} at={-100} width={7} />
			<Sx x={560} y={395} text="hexane" size={30} color={INK} anchor="middle" weight={700} at={-100} />
			<Sx x={1320} y={385} text="2,3-dimethylbutane" size={30} color={INK} anchor="middle" weight={700} at={-100} />
			<TickMark x={860} y={460} at={K17.break} />
			<Tag x={890} y={430} text="intact when boiling" at={K17.break} out={K17.contact} size={28} color="#1f6b44" fill="#e3f3e9" />
			<GChip x={960} y={360} text="C_6H_14: same electrons" at={K17.same} out={K17.contact} size={28} color={INK_SOFT} anchor="middle" />
			<g opacity={cp}>
				<Contact x1={360} x2={760} y={502} h={34} at={K17.contact} />
				<Skel pts={H2} bonds={chainB(6)} at={K17.contact - 6} width={7} />
				<Contact x1={1310} x2={1350} y={578} h={28} at={K17.contact + 10} />
				<Skel pts={D2} bonds={DMB.bonds} at={K17.contact} width={7} />
			</g>
			<Tag x={560} y={610} text="hexane 69 °C" at={K17.stronger} size={28} anchor="middle" />
			<Tag x={1470} y={560} text="2,3-dimethylbutane 58 °C" at={K17.stronger + 6} size={28} />
			<AnswerChip x={96} y={780} text="hexane: more contact → stronger dispersion forces → higher boiling point" at={K17.higher} size={32} />
			<Crossed x={96} y={870} text="branched isomer: weaker covalent bonds" at={K17.saying} cross={K17.wrong} note="boiling breaks no covalent bonds" size={34} />
			{void K17.disp}{void K17.straight}{void K17.separates}{void BRANCH}{void CHAIN_INK}
		</Overlay>
	);
};

// ---------- 18. Handoff ----------
const K18 = cues(sc('handoff'), {so: 'So the bond', size: 'size and shape', next: 'Next,', process: 'process real', judge: 'judge what'});
const ETE = ethene3d();
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const SX = 960;
	const pl = 0.5 + 0.5 * Math.sin(f * 0.12);
	return (
		<Overlay>
			<Sx x={96} y={104} text="4, 3, 2 directions: tetrahedral, flat, straight." size={30} color={VIOLET} hand at={K18.so} />
			<Sx x={96} y={144} text="More contact → stronger dispersion → higher boiling point." size={30} color={TEAL} hand at={K18.size} />
			<Strip at={0} x={SX} />
			{[[-162, 'methane'], [-1, 'butane'], [36, 'pentane'], [126, 'octane']].map(([T, n], i) => <Mark key={n} T={T as number} label={`${n} ${T} °C`} at={6 + i * 8} x={SX} />)}
			{[-89, -42, 69, 98].map((T, i) => <Mark key={T} T={T} label="?" at={40 + i * 6} x={SX} ghost color={INK_SOFT} />)}
			<Burner x={100} y={420} h={330} o={vis(f, 4)} />
			<g opacity={vis(f, 8)}><PicH p={CANDLE} x={1560} y={420} h={330} /></g>
			<Tag x={1350} y={985} text="Next: investigate a hydrocarbon homologous series" at={K18.next} size={34} color={TEAL} fill="#dff2ef" anchor="middle" />
			<Tag x={1350} y={940} text="real boiling point data across the alkane series" at={K18.process} size={26} anchor="middle" />
			<g opacity={vis(f, K18.next + 20)}>
				<BallStick {...ETE} orders={ETE.orders.map(() => 1)} cx={210} cy={890} unitPx={90} yaw={0} pitch={1.08} />
				<PiCloud c1={ETE.atoms[0].p} c2={ETE.atoms[1].p} normal={[0, 0, 1]} cx={210} cy={890} unitPx={90} yaw={0} pitch={1.08} pulse={pl} />
				<Sx x={330} y={900} text="later: alkene reactions" size={26} color={INK_SOFT} hand at={K18.next + 20} />
			</g>
			{void K18.judge}{void GF}{void prog}
		</Overlay>
	);
};

// ---------- 19. Key notes ----------
const NOTES = [
	'Shape at each carbon (count bonding directions; a double or triple bond counts as one): single bonds only, 4 → tetrahedral, 109.5°; C=C, 3 → trigonal planar, about 120°; C≡C, 2 → linear, 180°. Read each carbon separately (propene: CH_3 carbon tetrahedral).',
	'Homologous series: same functional group (alkanes: single bonds only), each member differs by CH_2. Alkanes CnH2n+2 (no functional group); alkenes CnH2n (one C=C, no ring); alkynes CnH2n−2 (one C≡C, no ring). Rings such as cyclobutane also fit CnH2n. Similar chemical reactions; physical properties change gradually. Isomers share a formula; series members do not.',
	'Intramolecular: strong covalent bonds inside molecules (not broken by boiling). Intermolecular: weak dispersion forces between hydrocarbon molecules. Longer chain → more electrons and contact → stronger dispersion forces → higher boiling point (C1 to C4 gases; pentane first liquid). Branching → less contact → lower boiling point (pentane 36 °C, 2,2-dimethylpropane 10 °C).',
	'Hydrocarbons barely dissolve in water (they would break water’s hydrogen bonds and give back only weak dispersion forces), so they form a separate layer; they mix with non-polar solvents such as heptane.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={29} aidTop={770} aids={['4, 3, 2 directions: tetrahedral, flat, straight.', 'Straight chains are spaghetti, branched ones are balls.']} tag="hydrocarbon shapes and properties" />
);
