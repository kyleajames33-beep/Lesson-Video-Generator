// C8-12 scenes 10 to 17: one band decides and another agrees (ethanoic acid against methyl methanoate), the memory aid,
// attempt 1 (2-chloropropane: MS, carbon-13 and proton spectra), feedback 1, attempt 2 (ethyl propanoate from printed
// IR and a proton spectrum), feedback 2, the decision rule with the Next chip, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {
	AMBER_INK, Box, CARD, Chip, COC, E1, E2, E3, EDGE, FRAG_INK, Full, GOLD, GOLD_INK, GREYT, GTag, GapBracket, HRing, HscTag, INK, INK_SOFT, IRAxes, IRTrace, Integ, MOL10, Mistake, MolAt, NAVY, NmrAxis, NmrSpec, OHC, Pause, PreRing, QPart, RangeShade, SPEC12, SpanBracket, SpecAxes, StickSpec, Svg, Sx, T, Title, TraceFill, fullRow, marksCheck, prog,
} from './parts';
import type {IG, Mol2, NG, Peak, QMark, SG} from './parts';
import {IR_ethanoicAcid, IR_methylMethanoate} from '../chem-m8-c10/irdata';
import {BUT_C, BUT_H} from './s1';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;

// ---------- 10. one band decides, another agrees ----------
const K10 = K('corroborate', {some: 'Sometimes one', both: 'are both', s60: 'at sixty.', broad: 'very broad', none: 'has none.', decides: 'band decides.', second: 'A second', acid: "acid's O", ester: "ester's H", two: 'Two independent', one: 'than one'});
const MEFORM: Mol2 = {pts: [[-46, 27], [46, -27], [138, 27], [-46, -81]], bonds: [{a: 0, b: 1}, {a: 1, b: 2}, {a: 0, b: 3, order: 2}], labels: [{i: 1, text: 'O'}, {i: 3, text: 'O'}]};
const IA: IG = {x: 120, y: 420, w: 760, h: 220}, IB: IG = {x: 1000, y: 420, w: 760, h: 220};
const HA: NG = {x: 120, y: 780, w: 760, h: 160, d0: 13}, HB: NG = {x: 1000, y: 780, w: 760, h: 160, d0: 13};
export const SceneCorroborate: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="One band decides, another agrees" />
			<MolAt m={MOL10.ethanoic} x={320} y={260} s={0.75} at={K10.some} />
			<Sx x={480} y={250} text="ethanoic acid" size={32} color={INK} weight={800} at={K10.some} />
			<MolAt m={MEFORM} x={1200} y={270} s={0.75} at={K10.some} />
			<Sx x={1360} y={250} text="methyl methanoate" size={32} color={INK} weight={800} at={K10.some} />
			<Chip x={480} y={280} text="C_2H_4O_2, 60" size={28} color={GREYT} ink={INK} at={K10.both} />
			<Chip x={1360} y={280} text="C_2H_4O_2, 60" size={28} color={GREYT} ink={INK} at={K10.both} />
			<GTag x={760} y={360} text="c09: same molecular ion" size={26} at={K10.s60} />
			<IRAxes g={IA} size={26} ticks={[4000, 2500, 1000]} yTicks={[]} yTitle="" xTitle="" at={ON} />
			<TraceFill g={IA} pts={IR_ethanoicAcid} a={3560} b={2480} at={K10.broad} color={OHC} op={0.3} />
			<IRTrace g={IA} pts={IR_ethanoicAcid} at={K10.broad - 20} width={2.6} />
			<SpanBracket g={IA} a={2500} b={3000} y={IA.y - 4} text="data sheet: 2500 to 3000" at={K10.broad + 20} color={OHC} size={26} />
			<IRAxes g={IB} size={26} ticks={[4000, 2500, 1000]} yTicks={[]} yTitle="" xTitle="" at={ON} />
			<RangeShade g={IB} a={2500} b={3000} at={K10.none} color={OHC} op={0.12} />
			<IRTrace g={IB} pts={IR_methylMethanoate} at={K10.broad - 10} width={2.6} />
			<Chip x={1110} y={IB.y - 56} text="no very broad O–H" size={26} color={OHC} ink={OHC} at={K10.none} />
			<Chip x={600} y={IA.y + IA.h - 60} text="beard + sword (c10)" size={26} color={OHC} ink={INK} at={K10.broad + 30} />
			<Chip x={760} y={180} text="✓" size={36} color="#2f8a5b" ink="#2f8a5b" at={K10.decides} />
			<NmrAxis g={HA} step={4} size={26} title="" at={ON} />
			<NmrSpec g={HA} tms={false} peaks={[{d: 2.10, h: 0.85, color: E1, at: K10.second}, {d: 11.5, h: 0.3, color: OHC, at: K10.acid, tag: 'O–H: beyond 10 (varies)', tagSize: 26}]} />
			<NmrAxis g={HB} step={4} size={26} title="" at={ON} />
			<NmrSpec g={HB} tms={false} peaks={[{d: 3.75, h: 0.85, color: E1, at: K10.second}, {d: 8.10, h: 0.3, color: E2, at: K10.ester, tag: 'HCOO: about 8', tagSize: 26}]} />
			<Chip x={826} y={180} text="✓" size={36} color="#2f8a5b" ink="#2f8a5b" at={K10.acid + 10} />
			<Chip x={960} y={1010} text="two independent techniques agree → a stronger case" size={32} color={NAVY} ink={NAVY} anchor="middle" at={K10.two} sw={4} />
			{void prog(f, 0, 1)}{void INK_SOFT}
		</Svg>
	);
};

// ---------- 11. memory aid ----------
const K11 = K('memory-aid', {mass: 'mass,', groups: 'groups,', map: 'map,', check: 'then check', one: 'one contradiction'});
export const SceneMemory: React.FC = () => (
	<Svg>
		<Sx x={96} y={180} text="Mass, groups, map, then check every clue." size={62} color={NAVY} hand at={K11.mass} />
		{[['mass', K11.mass, GOLD], ['groups', K11.groups, COC], ['map', K11.map, E1], ['check', K11.check, '#2f8a5b']].map(([t, at, c], i) => (
			<g key={i} opacity={prog(useCurrentFrame(), at as number, 12)}>
				<rect x={120 + i * 430} y={300} width={380} height={300} rx={20} fill={CARD} stroke={c as string} strokeWidth={4} />
				<Sx x={310 + i * 430} y={360} text={t as string} size={44} color={c as string} anchor="middle" hand weight={800} at={ON} />
			</g>
		))}
		<StickSpec g={{x: 160, y: 400, w: 300, h: 170, m0: 10, m1: 80}} bars={SPEC12.butanone} paint={[{mz: 72, color: GOLD, at: ON}]} bw={6} o={1} />
		<Sx x={1015} y={500} text="C=O ✓  O–H ✗" size={36} color={COC} anchor="middle" weight={800} at={K11.groups} />
		<NmrSpec g={{x: 1000, y: 420, w: 360, h: 150, d0: 5}} tms={false} lw={4} peaks={BUT_H([E2, E3, E1]).map(p => ({...p, at: K11.map}))} />
		<Sx x={1685} y={500} text="✓ ✓ ✓ ✓" size={48} color="#2f8a5b" anchor="middle" weight={800} at={K11.check} />
		<Sx x={96} y={760} text="One contradiction rules a structure out." size={52} color={GREYT} hand at={K11.one} />
		{void BUT_C}
	</Svg>
);

// ---------- 12. attempt 1 ----------
const KA = K('attempt-1', {pause: 'Pause here'});
const A1M: SG = {x: 150, y: 600, w: 500, h: 260, m0: 20, m1: 90};
const A1C: NG = {x: 750, y: 600, w: 440, h: 260, d0: 80};
const A1H: NG = {x: 1250, y: 600, w: 370, h: 260, d0: 5};
/** 2-chloropropane 1H (ASV-UIA Fig. 3.17): septet 4.2 (1H), doublet 1.5 (6H); the septet drawn with a minimum visible height. */
const CP_H = (c: [string, string]): Peak[] => [{d: 4.2, n: 7, J: 0.06, h: 0.3, color: c[0]}, {d: 1.5, n: 2, J: 0.07, h: 0.85, color: c[1]}];
const A1Spectra: React.FC<{marks?: boolean}> = () => (
	<g>
		<SpecAxes g={A1M} size={26} step={20} yTitle="relative abundance" />
		<StickSpec g={A1M} bars={SPEC12.chloropropane} bw={7} />
		<Sx x={A1M.x + A1M.w * 0.88} y={A1M.y + A1M.h - 50} text="78, 80" size={26} color={INK} anchor="middle" weight={800} at={ON} />
		<NmrAxis g={A1C} size={26} step={20} title="¹³C δ (ppm)" />
		<NmrSpec g={A1C} lw={5} peaks={[{d: 54, h: 0.5, color: INK, tag: '54', tagSize: 26}, {d: 27, h: 0.85, color: INK, tag: '27', tagSize: 26}]} />
		<NmrAxis g={A1H} size={26} step={1} title="¹H δ (ppm)" />
		<NmrSpec g={A1H} lw={4} peaks={CP_H([INK, INK]).map((p, i) => ({...p, tag: ['1', '6'][i], tagSize: 26}))} />
	</g>
);
export const SceneAttempt1: React.FC = () => (
	<Svg>
		<Title text="Your turn: three spectra, one compound" />
		<HscTag />
		<Box x={96} y={150} w={1728} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={220} w={1660} size={32} />
		<QPart blocks={Q1_DEM} x={126} y={430} w={1660} size={34} />
		<A1Spectra />
		<Pause h={hold('attempt-1')} at={KA.pause} tx={126} ty={1010} cx={1700} cy={880} r={40} />
		<PreRing at={KA.pause} start={hold('attempt-1').startFrame} x={1700} y={880} r={40} />
	</Svg>
);

// ---------- 13. feedback 1 ----------
const KB = K('feedback-1', {its: "It's 2-chloropropane.", peaks: 'Peaks at', minus: 'seventy-eight minus', sym: 'means symmetry,', isnt: "isn't 1-chloropropane.", doublet: "doublet's six", septet: "septet's one", slip: 'the slip'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: 'heights in a ratio of about 3', at: KB.peaks},
	{phrase: 'two peaks, at 54 ppm and 27 ppm', at: KB.sym},
	{phrase: 'a doublet at 1.5 ppm with relative area 6', at: KB.doublet},
	{phrase: 'a septet (seven lines) at 4.2 ppm with relative area 1', at: KB.septet},
]);
const FBM: SG = {x: 150, y: 470, w: 520, h: 260, m0: 20, m1: 90};
const CL2: Mol2 = {pts: [[-92, 27], [0, -27], [92, 27], [0, -110]], bonds: [{a: 0, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}], labels: [{i: 3, text: 'Cl'}]};
const CL1: Mol2 = {pts: [[-138, 27], [-46, -27], [46, 27], [138, -27]], bonds: [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3}], labels: [{i: 3, text: 'Cl'}]};
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="Feedback: one chlorine, and symmetry" />
			<HscTag />
			<Box x={40} y={150} w={1784} h={230} />
			<QPart blocks={Q1_STEM} marks={M_B} x={64} y={196} w={1736} size={26} />
			<QPart blocks={Q1_DEM} marks={M_B} x={64} y={354} w={1736} size={26} />
			<SpecAxes g={FBM} size={26} step={20} yTitle="" />
			<StickSpec g={FBM} bars={SPEC12.chloropropane} bw={7} paint={[{mz: 78, color: GOLD, at: KB.peaks}, {mz: 80, color: '#7a4fb0', at: KB.peaks + 6}, {mz: 43, color: FRAG_INK, at: KB.minus}]} />
			<GapBracket g={FBM} a={43} b={78} y={FBM.y + 60} text="− 35: Cl" at={KB.minus} size={28} />
			<Sx x={150} y={850} text="78 − 35 = 43 = C_3H_7 → C_3H_7Cl" size={34} color={INK} weight={700} at={KB.minus + 20} />
			<MolAt m={CL2} x={900} y={560} s={1} at={KB.sym} atoms={[{i: 0, at: KB.sym, color: E1}, {i: 2, at: KB.sym, color: E1}, {i: 1, at: KB.sym + 8, color: E2}]} />
			{prog(f, KB.sym, 12) > 0.01 ? <line x1={900} x2={900} y1={490} y2={630} stroke={NAVY} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, KB.sym, 12)} /> : null}
			<Sx x={900} y={660} text="2-chloropropane: 2 environments" size={28} color={INK} anchor="middle" weight={800} at={KB.sym} />
			<g opacity={(1 - 0.5 * prog(f, KB.isnt + 20, 12)) * prog(f, KB.sym + 10, 12)}>
				<MolAt m={CL1} x={1380} y={560} s={0.9} atoms={[{i: 0, at: KB.sym + 10, color: E1}, {i: 1, at: KB.sym + 10, color: E2}, {i: 2, at: KB.sym + 10, color: E3}]} />
				<Sx x={1380} y={660} text="1-chloropropane: 3" size={28} color={INK} anchor="middle" weight={800} at={ON} />
			</g>
			<Sx x={720} y={760} text="6 H (doublet): 1 neighbour → 2 lines" size={32} color={E1} hand weight={800} at={KB.doublet} />
			<Sx x={720} y={810} text="1 H (septet): 6 neighbours → 7 lines" size={32} color={E2} hand weight={800} at={KB.septet} />
			<Mistake x={720} y={860} text="80 alone gives the formula" size={34} at={KB.slip - 30} cross={KB.slip} note="78 = M (³⁵Cl), 80 = M+2 (³⁷Cl): both whole molecules" noteW={1100} />
			{void CARD}{void EDGE}{void GOLD_INK}{void AMBER_INK}{void HRing}{void Full}
		</Svg>
	);
};

// ---------- 14. attempt 2 ----------
const KC = K('attempt-2', {pause: 'Pause here'});
const A2H: NG = {x: 1100, y: 540, w: 500, h: 280, d0: 5};
/** Ethyl propanoate 1H (HMDB H4423, 400 MHz): q 4.135 (2H), q 2.32 (2H), t 1.26 (3H), t 1.14 (3H). */
const EP_H = (c: [string, string, string, string]): Peak[] => [{d: 4.135, n: 4, J: 0.035, h: 0.43, color: c[0]}, {d: 2.32, n: 4, J: 0.035, h: 0.43, color: c[1]}, {d: 1.26, n: 3, J: 0.035, h: 0.85, color: c[2]}, {d: 1.14, n: 3, J: 0.035, h: 0.85, color: c[3]}];
export const SceneAttempt2: React.FC = () => (
	<Svg>
		<Title text="Your turn: an ester or an acid?" />
		<HscTag />
		<Box x={96} y={150} w={1728} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={214} w={980} size={28} lh={36} />
		<QPart blocks={Q2_DEM} x={126} y={790} w={980} size={32} />
		<NmrAxis g={A2H} size={26} step={1} title="¹H δ (ppm)" />
		<NmrSpec g={A2H} lw={3} peaks={EP_H([INK, INK, INK, INK])} />
		<Sx x={A2H.x} y={A2H.y - 16} text="Z: ¹H NMR spectrum" size={28} color={INK} weight={800} at={ON} />
		<Pause h={hold('attempt-2')} at={KC.pause} tx={126} ty={960} cx={1700} cy={880} r={44} />
		<PreRing at={KC.pause} start={hold('attempt-2').startFrame} x={1700} y={880} r={44} />
	</Svg>
);

// ---------- 15. feedback 2 ----------
const KD = K('feedback-2', {its: "It's ethyl", noBand: 'no broad', rules: 'rules out', two: 'Two quartets', q412: 'at 4.12', q232: 'at 2.32', trap: 'the trap'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: 'no broad absorption between 2500 and 3550', at: KD.noBand},
	{phrase: 'a strong absorption at 1740', at: KD.noBand + 20},
	{phrase: 'four signals', at: KD.two},
	{phrase: 'about 4.0 to 4.2 ppm', at: KD.q412},
	{phrase: 'about 2.0 to 2.7 ppm', at: KD.q232},
]);
const EPF = fullRow([{el: 'C', h: 3}, {el: 'C', h: 2}, {el: 'C', dblO: true}, {el: 'O'}, {el: 'C', h: 2}, {el: 'C', h: 3}], 1150, 820, 112);
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const pair = prog(f, KD.two, 2) > 0.5;
	return (
		<Svg>
			<Title text="Feedback: two separate ethyl groups" />
			<HscTag />
			<Box x={40} y={150} w={1000} h={890} />
			<QPart blocks={Q2_STEM} marks={M_D} x={64} y={204} w={950} size={27} lh={35} />
			<QPart blocks={Q2_DEM} marks={M_D} x={64} y={780} w={950} size={28} />
			<NmrAxis g={{...A2H, x: 1100, y: 250, w: 700, h: 240}} size={26} step={1} title="" />
			<NmrSpec g={{...A2H, x: 1100, y: 250, w: 700, h: 240}} lw={3} peaks={EP_H(pair ? [E2, E2, E1, E1] : [INK, INK, INK, INK]).map((p, i) => ({...p, tag: ['4.12', '2.32', '', ''][i] || undefined, tagAt: [KD.q412, KD.q232, 0, 0][i], tagSize: 26}))} />
			<Chip x={1100} y={560} text="no O–H: not pentanoic acid" size={30} color={OHC} ink={INK} at={KD.rules} />
			<Chip x={1100} y={630} text="2 × ethyl: two quartets, two triplets" size={30} color={AMBER_INK} ink={INK} at={KD.two + 10} />
			<g opacity={prog(f, KD.q412, 12)}>
				<Full row={EPF} />
				<HRing row={EPF} idx={EPF.hs[4]} at={KD.q412} color={E2} />
				<HRing row={EPF} idx={EPF.hs[1]} at={KD.q232} color={E2} />
				<HRing row={EPF} idx={[...EPF.hs[0], ...EPF.hs[5]]} at={KD.q232 + 10} color={E1} />
			</g>
			<Mistake x={1100} y={960} text="4.1 = O–CH_2, so propyl ethanoate fits" size={26} at={KD.trap - 30} cross={KD.trap} />
			<Sx x={1100} y={1060} text="its O–CH_2 has 2 neighbours: a triplet" size={28} color="#2f7f86" hand weight={800} at={KD.trap + 14} />
			{void Integ}{void T}{void GTag}{void INK_SOFT}
		</Svg>
	);
};

// ---------- 16. decision rule and handoff ----------
const KR = K('decision-handoff', {order: 'in order.', mass: 'Mass and', ir: 'Infrared for', c13: 'Carbon-13 for', h1: 'proton NMR', build: 'Build a', next: 'Next,'});
const ROWS: [string, keyof typeof KR][] = [
	['Mass + elements → formula', 'mass'],
	['IR → groups present and missing', 'ir'],
	['¹³C → kinds of carbon', 'c13'],
	['¹H → hydrogens, areas, neighbours', 'h1'],
	['Build it, then try the closest isomer: find the contradiction', 'build'],
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="When you're given several spectra" />
			{ROWS.map(([t, k], i) => {
				const v = prog(f, KR[k], 12);
				if (v <= 0.01) return null;
				const y = 170 + i * 128;
				return (
					<g key={i} opacity={v}>
						<rect x={96} y={y} width={1600} height={108} rx={22} fill={CARD} stroke={i === 4 ? AMBER_INK : NAVY} strokeWidth={3} />
						<Sx x={130} y={y + 70} text={t} size={44} color={INK} weight={700} at={ON} />
					</g>
				);
			})}
			<g opacity={prog(f, KR.next, 14)}>
				<rect x={900} y={850} width={924} height={100} rx={50} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={1362} y={914} text="Next: integrated practice (tests + spectra)" size={36} color={INK} anchor="middle" hand at={ON} />
			</g>
		</Svg>
	);
};

// ---------- 17. key notes ----------
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard size={40} aidTop={660} tag="combining spectra" aids={['Mass, groups, map, then check every clue.', 'One contradiction rules a structure out.']} notes={[
		'MS: mass, pieces. IR: bonds present, missing. ¹³C: kinds of C. ¹H: H, ratio, neighbours.',
		'Mass narrows the formula; the elements fix it (72: C_4H_8O or C_5H_12).',
		'Check that the ¹H areas add up to the formula, then join the pieces.',
		'Test the closest isomer: look for one contradiction.',
	]} />
);
