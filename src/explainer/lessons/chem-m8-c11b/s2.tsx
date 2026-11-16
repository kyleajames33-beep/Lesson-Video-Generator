// C8-11b scenes 10 to 17: ethyl ethanoate (the lone methyl singlet), the memory aid, attempt 1 (predict methyl
// propanoate), feedback 1 (singlet, quartet, triplet; the crossed sextet slip), attempt 2 (four C5H10O candidates),
// feedback 2 (3 : 2 = 6 : 4, two ethyl groups: pentan-3-one), the decision rule with the Next chip, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {
	AMBER_INK, Box, CARD, Chip, E1, E2, E3, E4, EDGE, Full, GREYT, GTag, HRing, HscTag, INK, INK_SOFT, Integ, Mistake, NAVY, NmrAxis, NmrSpec, Pause, PreRing, QPart, Svg, Sx, T, Title, dx, fullRow, marksCheck, prog, pulse,
} from './parts';
import type {NG, Peak, QMark} from './parts';
import {ETH, GP} from './s1';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;

// ---------- 10. ethyl ethanoate ----------
const K10 = K('ethyl-ethanoate', {now: 'Now a', ethyl: 'Ethyl ethanoate', ratio: 'the ratio', quartet: 'The quartet', group: 'ethyl group,', ester: 'ester oxygen.', third: 'The third', singlet: 'a singlet', nothing: 'nothing to', beside: 'sits beside'});
/** Ethyl ethanoate, CDCl3 (HMDB H2243): OCH2 q 4.12 (2H), CH3C=O s 2.04 (3H), CH2CH3 t 1.26 (3H). */
const EE_ROW = fullRow([{el: 'C', h: 3}, {el: 'C', dblO: true}, {el: 'O'}, {el: 'C', h: 2}, {el: 'C', h: 3}], 200, 340, 130);
const EE = (c: [string, string, string]): Peak[] => [{d: 4.12, n: 4, J: 0.07, h: 0.21, color: c[0]}, {d: 2.04, n: 1, h: 0.85, color: c[1]}, {d: 1.26, n: 3, J: 0.07, h: 0.43, color: c[2]}];
const GC: NG = {x: 1240, y: 200, w: 560, h: 120, d0: 220};
export const SceneEster: React.FC = () => {
	const f = useCurrentFrame();
	const r = EE_ROW;
	const colorsOn = prog(f, K10.group, 2) > 0.5;
	const sOn = prog(f, K10.singlet, 2) > 0.5;
	return (
		<Svg>
			<Title text="Ethyl ethanoate: a lone methyl" />
			<Full row={r} />
			<HRing row={r} idx={r.hs[3]} at={K10.group} color={E2} />
			<HRing row={r} idx={r.hs[4]} at={K10.group} color={E1} />
			<HRing row={r} idx={r.hs[0]} at={K10.singlet} color={E3} />
			{pulse(f, K10.ester, 40) > 0.01 ? <circle cx={r.heavy[2][0]} cy={r.heavy[2][1]} r={40} fill="#f3d27a" opacity={0.6 * pulse(f, K10.ester, 40)} /> : null}
			<Chip x={r.heavy[1][0] - 60} y={r.heavy[1][1] + 150} text="no H here" size={26} color={GREYT} fill="#f1eee7" ink={GREYT} at={K10.nothing} />
			<NmrAxis g={GC} size={22} step={50} title="" />
			<NmrSpec g={GC} lw={5} peaks={[{d: 171, h: 0.55, color: E4}, {d: 60, h: 0.8, color: E3}, {d: 21, h: 0.75, color: E2}, {d: 14, h: 0.85, color: E1}]} />
			<GTag x={1240} y={150} text="c11a: 4 carbon environments" size={26} />
			<NmrAxis g={GP} />
			<NmrSpec g={GP} peaks={EE([colorsOn ? E2 : GREYT, sOn ? E3 : GREYT, colorsOn ? E1 : GREYT]).map((p, i) => ({...p, at: K10.ethyl + i * 6, tag: ['about 4.1', 'about 2.0', 'about 1.3'][i], tagAt: [K10.quartet, K10.third, K10.quartet + 20][i], tagSize: 30}))} tmsTag="TMS" />
			<Integ g={GP} at={K10.ratio} unit={24} base={GP.y + GP.h - 10} steps={[{d: 1.26, n: 3, color: E1}, {d: 2.04, n: 3, color: E3}, {d: 4.12, n: 2, color: E2}]} />
			<Chip x={1000} y={400} text="ethyl: triplet 3H + quartet 2H" size={32} color={AMBER_INK} ink={INK} at={K10.group + 20} />
			<Chip x={1000} y={480} text="CH_3 singlet: no H next door" size={32} color={E3} ink={INK} at={K10.beside - 20} sw={4} />
			<GTag x={1000} y={560} text="quartet far left: its C is bonded to the ester O" size={28} at={K10.ester} />
		</Svg>
	);
};

// ---------- 11. memory aid ----------
const K11 = K('memory-aid', {one: 'One line', signals: 'signals,', areas: 'areas,', neigh: 'neighbours plus', count: 'Signals count', compare: 'areas compare', lines: 'lines count'});
const G11: NG = {x: 300, y: 640, w: 1300, h: 200, d0: 5};
export const SceneMemory: React.FC = () => (
	<Svg>
		<Sx x={96} y={180} text="Signals, areas, neighbours + 1." size={64} color={NAVY} hand at={K11.signals} />
		<Chip x={96} y={250} text="signals: environments" size={36} color={NAVY} ink={INK} at={K11.count} />
		<Chip x={560} y={250} text="areas: compare H (the formula gives the numbers)" size={36} color={NAVY} ink={INK} at={K11.compare} />
		<Chip x={96} y={330} text="lines: equivalent neighbours + 1" size={36} color={NAVY} ink={INK} at={K11.lines} />
		<GTag x={760} y={340} text="3 : 2 = 6 : 4 (10 H): see attempt 2" size={28} at={K11.compare + 20} />
		<NmrAxis g={G11} size={24} />
		<NmrSpec g={G11} peaks={ETH([E1, E2, E3])} />
		<Integ g={G11} at={K11.areas} unit={22} base={G11.y + G11.h - 10} steps={[{d: 1.23, n: 3, color: E1}, {d: 2.6, n: 1, color: E3}, {d: 3.7, n: 2, color: E2}]} />
		<Sx x={96} y={470} text="A quartet is not four hydrogens." size={40} color={GREYT} hand at={K11.lines + 20} />
	</Svg>
);

// ---------- 12. attempt 1 ----------
const KA = K('attempt-1', {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Svg>
		<Title text="Your turn: predict a spectrum" />
		<HscTag />
		<Box x={96} y={150} w={1728} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={260} w={1660} size={46} />
		<QPart blocks={Q1_DEM} x={126} y={400} w={1660} size={46} />
		<Sx x={126} y={640} text="CH_3CH_2COOCH_3" size={60} color={INK} weight={800} at={ON} />
		<Pause h={hold('attempt-1')} at={KA.pause} tx={126} ty={880} cx={1700} cy={880} r={46} />
		<PreRing at={KA.pause} start={hold('attempt-1').startFrame} x={1700} y={880} r={46} />
	</Svg>
);

// ---------- 13. feedback 1 ----------
const KB = K('feedback-1', {three: 'Three signals,', ratio: 'the ratio', oxygen: 'on the oxygen', singlet: 'a singlet.', quartet: 'a quartet,', triplet: 'a triplet.', slip: 'the slip'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: 'number of signals', at: KB.three},
	{phrase: 'relative areas', at: KB.ratio},
	{phrase: 'splitting of each signal', at: KB.singlet},
]);
/** Methyl propanoate, CDCl3 (ASV-R R-16B, 300 MHz): OCH3 s 3.67 (3H), CH2 q 2.35 (2H), CH3 t 1.15 (3H). */
const MP_ROW = fullRow([{el: 'C', h: 3}, {el: 'C', h: 2}, {el: 'C', dblO: true}, {el: 'O'}, {el: 'C', h: 3}], 200, 420, 130);
export const SceneFeedback1: React.FC = () => {
	const r = MP_ROW;
	return (
		<Svg>
			<Title text="Feedback: singlet, quartet, triplet" />
			<HscTag />
			<Box x={40} y={150} w={1784} h={130} />
			<QPart blocks={Q1_STEM} marks={M_B} x={64} y={200} w={1736} size={30} />
			<QPart blocks={Q1_DEM} marks={M_B} x={64} y={250} w={1736} size={30} />
			<Full row={r} />
			<HRing row={r} idx={r.hs[4]} at={KB.three} color={E3} />
			<HRing row={r} idx={r.hs[1]} at={KB.three + 6} color={E2} />
			<HRing row={r} idx={r.hs[0]} at={KB.three + 12} color={E1} />
			<NmrAxis g={GP} />
			<NmrSpec g={GP} tmsTag="TMS" peaks={[
				{d: 3.67, n: 1, h: 0.85, color: E3, at: KB.three, tag: 'singlet: no H next door', tagAt: KB.singlet, tagSize: 30},
				{d: 2.35, n: 4, J: 0.07, h: 0.21, color: E2, at: KB.three + 6, tag: '3 + 1: quartet', tagAt: KB.quartet, tagSize: 30, tagDy: -120},
				{d: 1.15, n: 3, J: 0.07, h: 0.43, color: E1, at: KB.three + 12, tag: '2 + 1: triplet', tagAt: KB.triplet, tagSize: 30},
			]} />
			<Integ g={GP} at={KB.ratio} unit={22} base={GP.y + GP.h - 10} steps={[{d: 1.15, n: 3, color: E1}, {d: 2.35, n: 2, color: E2}, {d: 3.67, n: 3, color: E3}]} />
			<Mistake x={1000} y={330} text="CH_2 is a sextet: counted the OCH_3 H" size={34} at={KB.slip - 30} cross={KB.slip} note="neighbours = H on the next carbon" noteW={800} />
			{void CARD}{void EDGE}{void dx}
		</Svg>
	);
};

// ---------- 14. attempt 2 ----------
const KC = K('attempt-2', {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Svg>
		<Title text="Your turn: which compound?" />
		<HscTag />
		<Box x={96} y={150} w={1728} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={236} w={1660} size={40} />
		<QPart blocks={Q2_DEM} x={126} y={560} w={1660} size={44} />
		<Pause h={hold('attempt-2')} at={KC.pause} tx={126} ty={880} cx={1700} cy={880} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-2').startFrame} x={1700} y={880} r={46} />
	</Svg>
);

// ---------- 15. feedback 2 ----------
const KD = K('feedback-2', {its: "It's pentan-3-one.", tq: 'A triplet', ethyl: 'ethyl group.', ten: 'ten hydrogens,', six: 'six and', two: 'two identical', only: 'only the', s244: 'at 2.44', trap: 'the trap'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: 'a triplet', at: KD.tq},
	{phrase: 'a quartet', at: KD.tq + 10},
	{phrase: 'C₅H₁₀O', at: KD.ten},
	{phrase: 'two signals', at: KD.only},
	{phrase: '2.44 ppm', at: KD.s244},
	{phrase: 'A CH₂ next to a C=O group', at: KD.s244 + 10},
]);
const P3_ROW = fullRow([{el: 'C', h: 3}, {el: 'C', h: 2}, {el: 'C', dblO: true}, {el: 'C', h: 2}, {el: 'C', h: 3}], 200, 600, 130);
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const r = P3_ROW;
	const mv = prog(f, KD.only, 14);
	const dm = prog(f, KD.only + 30, 12);
	return (
		<Svg>
			<Title text="Feedback: two identical ethyl groups" />
			<HscTag />
			<Box x={40} y={150} w={1784} h={210} />
			<QPart blocks={Q2_STEM} marks={M_D} x={64} y={196} w={1736} size={28} />
			<QPart blocks={Q2_DEM} marks={M_D} x={64} y={334} w={1736} size={28} />
			<Chip x={64} y={400} text="ethyl: triplet 3H + quartet 2H" size={32} color={AMBER_INK} ink={INK} at={KD.ethyl} />
			<GTag x={600} y={406} text="a candidate pattern: check the other clues" size={26} at={KD.ethyl + 20} />
			<Sx x={1000} y={720} text="3 : 2 = 6 : 4 (10 H)" size={48} color={NAVY} weight={800} at={KD.six} />
			<g opacity={prog(f, KD.two - 10, 12)}>
				<Full row={r} />
				<HRing row={r} idx={[...r.hs[0], ...r.hs[4]]} at={KD.two} color={E1} />
				<HRing row={r} idx={[...r.hs[1], ...r.hs[3]]} at={KD.two + 8} color={E2} />
				{mv > 0.01 ? <line x1={r.heavy[2][0]} x2={r.heavy[2][0]} y1={500} y2={770} stroke={NAVY} strokeWidth={4} strokeDasharray="12 9" opacity={mv} /> : null}
			</g>
			<Sx x={460} y={830} text="pentan-3-one: CH_2 next to C=O, about 2.4" size={30} color={E2} anchor="middle" hand weight={800} at={KD.s244} />
			{[['pentan-2-one', '4 signals'], ['pentanal', '5 signals'], ['3-methylbutan-2-one', '3 signals']].map(([n, c], i) => (
				<g key={n} opacity={prog(f, KD.only + 10 + i * 8, 12) * (1 - 0.4 * dm)}>
					<Chip x={1000} y={450 + i * 80} text={`${n}: ${c}`} size={32} color={GREYT} ink={INK} />
				</g>
			))}
			<Mistake x={1000} y={790} text="3 : 2 means 5 H, one ethyl group" size={36} at={KD.trap - 30} cross={KD.trap} note="the formula sets the real numbers" noteW={800} />
			{void INK_SOFT}{void E3}
		</Svg>
	);
};

// ---------- 16. decision rule and handoff ----------
const KR = K('decision-handoff', {ask: 'ask four', signals: 'How many signals?', where: 'Where does', big: 'How big', lines: 'how many lines?', build: 'Then build', next: 'Next,'});
const ROWS: [string, keyof typeof KR][] = [
	['How many signals? → H environments', 'signals'],
	['Where? → near O, C=O, halogen = left (shifts given)', 'where'],
	['How big? → ratio of H (scale by the formula)', 'big'],
	['How many lines? → neighbours + 1', 'lines'],
	['Build one structure that explains every clue.', 'build'],
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="With a proton spectrum" />
			{ROWS.map(([t, k], i) => {
				const v = prog(f, KR[k], 12);
				if (v <= 0.01) return null;
				const y = 170 + i * 128;
				return (
					<g key={i} opacity={v}>
						<rect x={96} y={y} width={1560} height={108} rx={22} fill={CARD} stroke={i === 4 ? AMBER_INK : NAVY} strokeWidth={3} />
						<Sx x={130} y={y + 70} text={t} size={44} color={INK} weight={700} at={ON} />
					</g>
				);
			})}
			<g opacity={prog(f, KR.next, 14)}>
				<rect x={1100} y={850} width={724} height={100} rx={50} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={1462} y={914} text="Next: combining MS, IR and NMR" size={38} color={INK} anchor="middle" hand at={ON} />
			</g>
			{void T}
		</Svg>
	);
};

// ---------- 17. key notes ----------
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard size={40} aidTop={660} tag="proton NMR" aids={['Signals, areas, neighbours + 1.', 'A quartet is not four hydrogens.']} notes={[
		'¹H signals = H environments. Shifts (0 to 12 ppm) are given; near O, C=O or halogen: left.',
		'Area under a signal ∝ number of H: a ratio. The formula gives the real numbers.',
		'n equivalent H on the next carbon → n + 1 lines. O–H: usually a singlet.',
		'Triplet 3H + quartet 2H suggests ethyl. A CH_3 singlet has no H next door.',
	]} />
);
