// C8-09 scenes 7 to 12: common gaps (15, 17, 29 with its two meanings, 45), the base peak (43, set to 100%, not the
// molecular ion), reading butanone's pieces (two gap brackets, break-and-weigh on both sides of the C=O, fits but not
// proved), chlorine and bromine isotope pairs (chloromethane 50 and 52; a bromine inset), what MS can't show, and the
// memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CandStrip, CARD, Chip, EDGE, FRAG, FRAG_INK, GOLD, GOLD_INK, GREYT, GTag, GapBracket, INK, INK_SOFT, ISO, Mistake, MolAt, MolSplit, NAVY, NEUT, PeakLab, RED, SPEC, SpecAxes, Spot, StickSpec, Svg, Sx, T, Title, ToHundred, prog, pulse, sxm, syh, vis,
} from './parts';
import type {SG} from './parts';
import {C4, G1, G2, RX, RW, TITLE, Task} from './s1';
import {K} from './common';

const ON = -1000;
const BUT = SPEC.butanone;

// ---------- 7. gaps you'll see often ----------
const K7 = K('common-gaps', {some: 'Some gaps', fifteen: 'fifteen is', seventeen: 'Seventeen', t29: 'Twenty-nine', could: 'could also', same: 'same mass', f45: 'forty-five', narrows: 'narrows the', two: 'leaves two'});
const ROWS: [string, string, string][] = [['15', 'CH_3', 'fifteen'], ['17', 'OH', 'seventeen'], ['29', 'C_2H_5 or CHO', 't29'], ['45', 'COOH', 'f45']];
export const SceneGaps: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K7.fifteen, K7.seventeen, K7.t29, K7.f45];
	const v29 = prog(f, K7.two, 12);
	const sums = vis(f, K7.same, undefined, 12) * (1 - 0.5 * prog(f, K7.f45, 14));
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="Gaps you'll see often" at={K7.some} />
			<SpecAxes g={G1} at={ON} />
			<StickSpec g={G1} bars={BUT} paint={[{mz: 72, color: GOLD, at: ON}]} o={0.85} />
			<Sx x={RX} y={300} text="gap (mass lost)" size={30} color={INK_SOFT} weight={700} at={K7.fifteen} />
			{ROWS.map(([g, t], i) => {
				const v = prog(f, at[i], 12);
				if (v <= 0.01) return null;
				const y = 320 + i * 96;
				const hot = i === 2 && v29 > 0.01;
				const cur = at[i + 1] === undefined ? 1 : 1 - 0.4 * prog(f, at[i + 1], 14);
				return (
					<g key={g} opacity={v * (i === 2 && v29 > 0.5 ? 1 : cur)}>
						<rect x={RX} y={y} width={RW} height={80} rx={16} fill={CARD} stroke={hot ? ISO : EDGE} strokeWidth={hot ? 5 : 2.5} />
						<Sx x={RX + 24} y={y + 54} text={g} size={44} color={NAVY} weight={800} at={ON} />
						<Sx x={RX + 110} y={y + 54} text={t} size={42} color={INK} weight={700} at={ON} />
					</g>
				);
			})}
			<g opacity={sums}>
				<Sx x={RX} y={756} text="C_2H_5: 24 + 5 = 29" size={40} color={INK} weight={700} at={ON} />
				<Sx x={RX} y={816} text="CHO: 12 + 1 + 16 = 29" size={40} color={INK} weight={700} at={ON} />
			</g>
			<T x={RX} y={900} w={RW} text="a gap narrows the choices; 29 leaves two" size={36} color={ISO} at={K7.narrows} />
			{void AMBER}{void GREYT}
		</Svg>
	);
};

// ---------- 8. the base peak ----------
const K8 = K('base-peak', {tallest: 'tallest peak.', f43: 'forty-three,', not72: 'not at', called: 'base peak,', hundred: 'one hundred', abundant: 'most abundant', stable: 'stable enough', leads: 'leads the', often: 'often different', peaks: 'different peaks'});
export const SceneBase: React.FC = () => {
	const f = useCurrentFrame();
	const two = prog(f, K8.leads, 12);
	return (
		<Svg>
			<Title text={TITLE} />
			<Task text="The base peak: the tallest peak" at={K8.tallest} />
			<SpecAxes g={G1} at={ON} />
			<StickSpec g={G1} bars={BUT} paint={[{mz: 72, color: GOLD, at: ON}, {mz: 43, color: FRAG_INK, at: K8.tallest}]} pulses={[{mzs: [43], at: K8.tallest}, {mzs: [72], at: K8.not72}]} />
			<ToHundred g={G1} mz={43} at={K8.hundred} />
			<PeakLab g={G1} mz={43} h={100} text="43: base peak, 100%" at={K8.called} size={36} color={FRAG_INK} dx={18} dy={26} anchor="start" weight={800} />
			<PeakLab g={G1} mz={72} h={25} text="M^{+}" size={34} color={GOLD_INK} dy={-20} weight={800} />
			<T x={RX} y={300} w={RW} text="most abundant ion: often a fragment stable enough to survive the trip" size={36} color={INK} at={K8.abundant} />
			<g opacity={two}>
				<rect x={RX} y={520} width={RW} height={70} rx={16} fill="#fbf1d6" stroke={GOLD} strokeWidth={4} />
				<Sx x={RX + 20} y={567} text="right-hand cluster: M^{+} (72)" size={34} color={GOLD_INK} weight={800} at={ON} />
				<rect x={RX} y={610} width={RW} height={70} rx={16} fill="#dff1ee" stroke={FRAG} strokeWidth={4} opacity={prog(f, K8.peaks - 30, 12)} />
				<Sx x={RX + 20} y={657} text="tallest: base peak (43)" size={34} color={FRAG_INK} weight={800} at={K8.peaks - 30} />
			</g>
			<Mistake x={RX} y={760} text="tallest = M^{+}" size={40} at={K8.often - 10} cross={K8.often + 10} note="often different peaks" noteW={RW} />
		</Svg>
	);
};

// ---------- 9. reading butanone's pieces ----------
const K9 = K('butanone-pieces', {lets: "Let's read", g29: 'Seventy-two minus forty-three', g15: 'Seventy-two minus fifty-seven', has: 'Butanone has', other: 'the other.', f43: ['forty-three, C', 1], f57: ['fifty-seven, C', 1], ion29: 'ethyl ion', fits: 'fits butanone', butanal: 'But butanal', narrows: 'narrows the', left: "what's left"});
const MX = 1560, MY = 650;
export const ScenePieces: React.FC = () => {
	const f = useCurrentFrame();
	const glowOn = (k: number) => (k === 0 ? K9.fits : k === 1 ? K9.butanal : undefined);
	return (
		<Svg>
			<Title text={TITLE} />
			<CandStrip c={C4.map((c, i) => ({...c, glow: glowOn(i), dim: i >= 2 ? K9.butanal + 30 : undefined}))} y={150} h={190} />
			<GTag x={546} y={352} text="also 72 and 43 (C_3H_7^{+})" size={28} at={K9.butanal + 20} />
			<GTag x={986} y={352} text="still to test" size={28} at={K9.butanal + 40} />
			<SpecAxes g={G2} at={ON} />
			<StickSpec g={G2} bars={BUT} paint={[{mz: 72, color: GOLD, at: ON}]} />
			<PeakLab g={G2} mz={72} h={25} text="M^{+} 72" size={32} color={GOLD_INK} dy={-16} weight={800} />
			<GapBracket g={G2} a={43} b={72} y={580} text="− 29: C_2H_5 or CHO" at={K9.g29} dim={K9.g15} size={32} />
			<GapBracket g={G2} a={57} b={72} y={700} text="− 15: CH_3" at={K9.g15} size={32} />
			<PeakLab g={G2} mz={43} h={100} text="CH_3CO^{+} = 43" at={K9.f43} size={32} color={FRAG_INK} dx={-16} dy={30} anchor="end" weight={800} />
			<PeakLab g={G2} mz={57} h={8} text="C_2H_5CO^{+} = 57" at={K9.f57} size={30} color={FRAG_INK} dx={0} dy={-18} weight={800} />
			<PeakLab g={G2} mz={29} h={17} text="C_2H_5^{+}" at={K9.ion29} size={32} color={FRAG_INK} dy={-16} weight={800} />
			<MolAt k="butanone" x={MX} y={MY} s={1.1} at={K9.has} out={K9.f43} rings={[{bond: [0, 1], at: K9.other - 30, color: AMBER_INK}, {bond: [1, 2], at: K9.other, color: AMBER_INK}]} />
			<MolSplit k="butanone" x={MX} y={MY} s={1.1} at={K9.f43} snap={K9.f43} keep={[0, 1, 4]} cut={[1, 2]} to={[-40, 180]} away={[80, -110]} ion="CH_3CO^{+} = 43" ionDy={100} out={K9.f57} />
			<MolSplit k="butanone" x={MX} y={MY} s={1.1} at={K9.f57} snap={K9.f57 + 4} keep={[1, 2, 3, 4]} cut={[0, 1]} to={[30, 180]} away={[-80, -110]} ion="C_2H_5CO^{+} = 57" ionDy={100} />
			<Sx x={MX} y={460} text="butanone" size={34} color={INK} anchor="middle" weight={800} at={K9.has} />
			<Chip x={1824} y={980} text="IR, NMR: next" size={32} color={NEUT} fill="#f1eee7" ink={GREYT} anchor="end" at={K9.left} />
			<Sx x={RX - 20} y={1000} text="fits, not proved" size={40} color={NAVY} anchor="end" hand at={K9.narrows} />
			{void RED}{void pulse}{void syh}{void sxm}
		</Svg>
	);
};

// ---------- 10. chlorine and bromine ----------
const K10 = K('isotope-pairs', {some: 'Some elements', cl: 'Chlorine atoms', three: 'three to', chm: 'chloromethane', f50: 'fifty,', f52: 'fifty-two,', third: 'a third', pair: 'Two peaks', one: 'one chlorine', br: "Bromine's", height: 'same height', higher: 'The higher', same: ['same structure', 1]});
const GC: SG = {x: 190, y: 300, w: 1000, h: 500, m0: 10, m1: 60};
export const SceneIsotopes: React.FC = () => {
	const f = useCurrentFrame();
	const br = prog(f, K10.br, 12);
	return (
		<Svg>
			<Title text="Chlorine and bromine leave a signature" />
			<Chip x={96} y={150} text="Cl: ³⁵Cl 75%, ³⁷Cl 25% (about 3 : 1)" size={32} color={NEUT} fill="#f1eee7" ink={INK} at={K10.cl} />
			<SpecAxes g={GC} at={ON} step={5} />
			<StickSpec g={GC} bars={SPEC.chloromethane} at={K10.chm - 10} stagger={5} paint={[{mz: 50, color: GOLD, at: K10.f50}, {mz: 52, color: ISO, at: K10.f52}]} />
			<PeakLab g={GC} mz={50} h={100} text="CH_3³⁵Cl^{+} = 50" at={K10.f50} size={32} color={GOLD_INK} dx={-18} dy={30} anchor="end" weight={800} />
			<PeakLab g={GC} mz={52} h={31} text="CH_3³⁷Cl^{+} = 52" at={K10.f52} size={32} color={ISO} dx={12} dy={-22} anchor="start" weight={800} />
			<PeakLab g={GC} mz={52} h={31} text="about a third as tall" at={K10.third} size={30} color={INK} dx={12} dy={-66} anchor="start" />
			<PeakLab g={GC} mz={15} h={72.4} text="CH_3^{+}" size={28} color={INK_SOFT} dy={-14} at={K10.chm + 30} />
			{[0, 1, 2, 3].map(i => { const k = prog(f, K10.cl + 10 + i * 6, 12); const heavy = i === 3; return k > 0.01 ? <g key={i} opacity={k}>
				<circle cx={RX + 60 + i * 120} cy={250} r={heavy ? 48 : 44} fill={heavy ? '#4f8a3a' : '#8cc46e'} stroke={INK} strokeWidth={3} />
				<Sx x={RX + 60 + i * 120} y={262} text={heavy ? '37' : '35'} size={32} color={INK} anchor="middle" weight={800} at={-1000} />
			</g> : null; })}
			<Sx x={RX} y={340} text="chlorine atoms: three 35 for every 37" size={30} color={INK} hand at={K10.three} />
			<Chip x={RX} y={370} text="pair 2 apart, 3 : 1 → one Cl" size={34} color={NAVY} ink={NAVY} at={K10.one} sw={4} />
			{br > 0.01 ? <g opacity={br}>
				<rect x={RX} y={460} width={RW} height={300} rx={18} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
				<Sx x={RX + 20} y={502} text="one Br: about 1 : 1 (⁷⁹Br, ⁸¹Br)" size={32} color={INK} weight={800} at={ON} />
				<line x1={RX + 60} x2={RX + RW - 60} y1={720} y2={720} stroke={INK} strokeWidth={3} />
				<rect x={RX + 200} y={560} width={18} height={160} fill={GOLD} />
				<rect x={RX + 270} y={566} width={18} height={154} fill={ISO} />
				<Sx x={RX + 209} y={752} text="M" size={28} color={GOLD_INK} anchor="middle" weight={800} at={ON} />
				<Sx x={RX + 279} y={752} text="M+2" size={28} color={ISO} anchor="middle" weight={800} at={ON} />
			</g> : null}
			<Chip x={RX} y={800} text="M+2: same structure, heavier isotope" size={30} color={ISO} ink={ISO} at={K10.same} />
			<GTag x={RX} y={880} text="peaks use isotope masses (35, 37), not 35.5" size={28} at={K10.same + 30} />
			<Spot g={GC} a={50} b={52} at={K10.pair} out={K10.br} />
			{void pulse}
		</Svg>
	);
};

// ---------- 11. what MS can't tell you ----------
const K11 = K('ms-limits', {what: 'So what', mass: 'gave the', frags: 'The fragments', flag: 'can flag', but: 'But it', connect: 'atoms connect', narrows: 'narrows the', job: 'finish the'});
const GS: SG = {x: 170, y: 330, w: 600, h: 380, m0: 10, m1: 100};
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	const rows: [string, number, boolean][] = [['mass ✓ (from M^{+})', K11.mass, true], ['pieces lost ✓ (from the gaps)', K11.frags, true], ['Cl or Br ✓ (from isotope pairs)', K11.flag, true], ['functional group ✗', K11.but + 20, false], ['how the atoms connect ✗', K11.connect - 10, false]];
	return (
		<Svg>
			<Title text="What mass spectrometry can't tell you" />
			<SpecAxes g={GS} at={ON} size={26} />
			<StickSpec g={GS} bars={BUT} bw={7} paint={[{mz: 72, color: GOLD, at: ON}]} />
			{rows.map(([t, at, ok], i) => {
				const v = prog(f, at, 12);
				if (v <= 0.01) return null;
				const y = 230 + i * 104;
				return (
					<g key={i} opacity={v}>
						<rect x={900} y={y} width={924} height={84} rx={18} fill={ok ? CARD : '#f1eee7'} stroke={ok ? FRAG : NEUT} strokeWidth={3} />
						<Sx x={930} y={y + 56} text={t} size={42} color={ok ? INK : GREYT} weight={700} at={ON} />
					</g>
				);
			})}
			<Chip x={900} y={810} text="MS: mass → IR: groups → NMR: map" size={40} color={NAVY} ink={NAVY} at={K11.job - 20} sw={4} />
			<GTag x={900} y={910} text="c08: tests show groups too" size={28} at={K11.job} />
			<Sx x={170} y={850} text="narrows the list" size={44} color={NAVY} hand at={K11.narrows} />
		</Svg>
	);
};

// ---------- 12. memory aid ----------
const K12 = K('memory-aid', {find: 'find the', tallest: 'tallest is', read: 'Read the', subtract: 'then subtract'});
const GM: SG = {x: 190, y: 380, w: 950, h: 430, m0: 10, m1: 100};
const GI: SG = {x: 1360, y: 470, w: 440, h: 300, m0: 44, m1: 56};
export const SceneMemory: React.FC = () => (
	<Svg>
		<Sx x={96} y={150} text="Find the molecular-ion cluster. Tallest is the base." size={58} color={NAVY} hand at={K12.find} />
		<Sx x={96} y={222} text="Then subtract to find what broke off." size={40} color={GREYT} hand at={K12.subtract - 6} />
		<SpecAxes g={GM} at={ON} />
		<StickSpec g={GM} bars={BUT} paint={[{mz: 72, color: GOLD, at: ON}, {mz: 73, color: GOLD, at: ON}]} />
		<Spot g={GM} a={72} b={73} at={K12.find + 20} color={GOLD} top={290} />
		<PeakLab g={GM} mz={72} h={25} text="M^{+} cluster: M = 72 (73 is M+1)" at={K12.find + 20} size={30} color={GOLD_INK} dy={-60} weight={800} />
		<PeakLab g={GM} mz={43} h={100} text="tallest: base peak" at={K12.tallest} size={32} color={FRAG_INK} dx={16} dy={30} anchor="start" weight={800} />
		<GapBracket g={GM} a={43} b={72} y={560} text="− 29" at={K12.subtract} size={34} />
		<SpecAxes g={GI} at={ON} size={24} step={2} yTicks={false} yTitle="" xTitle="chloromethane" />
		<StickSpec g={GI} bars={SPEC.chloromethane.filter(b => b[0] >= 44)} bw={10} paint={[{mz: 50, color: GOLD, at: ON}, {mz: 52, color: ISO, at: ON}]} />
		<Sx x={1580} y={430} text="M^{+} cluster: M = 50 (52 is M+2)" size={28} color={GOLD_INK} anchor="middle" weight={800} at={K12.find + 30} />
		{void AMBER}{void MolAt}{void NAVY}{void G2}{void G1}{void RED}{void MolSplit}{void CandStrip}{void C4}
	</Svg>
);
