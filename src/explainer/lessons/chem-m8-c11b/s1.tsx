// C8-11b scenes 1 to 9: the hook (ethanol's proton spectrum: three clues), same rules on a shorter scale, clue one
// (signals count H environments), clue two (where each sits), clue three (areas, the integration line), why signals
// split (neighbour magnets and a tally), the n + 1 rule, bromoethane from scratch, and the quartet trap.
// Layout: heading top left; molecule (with hydrogens) in the left half; spectrum across the lower half; right-half card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, AnsBox, Arrow, AxisArrow, CARD, Chip, E1, E2, E3, EDGE, Full, GREYT, GTag, HRing, INK, INK_SOFT, Integ, MOL10, Mistake, MolAt, NAVY, NmrAxis, NmrSpec, Pic, PicH, SignalArea, Svg, Sx, T, Title, dx, fullRow, mirror, prog, pulse, smooth, vis,
} from './parts';
import type {NG, Peak} from './parts';
import {PL} from './assets';
import {K} from './common';

const ON = -1000;
export const TITLE = 'What do the hydrogens tell you?';
export const GP: NG = {x: 160, y: 650, w: 1600, h: 250, d0: 5};
/** Ethanol, CDCl3 (HMDB H2559): CH2 q 3.70 (2H), OH s 2.60 (position varies), CH3 t 1.23 (3H). Tallest line ∝ area. */
export const ETH = (c: [string, string, string], at: [number, number, number] = [ON, ON, ON]): Peak[] => [
	{d: 3.70, n: 4, J: 0.07, h: 0.43, color: c[1], at: at[0]},
	{d: 2.60, n: 1, h: 0.57, color: c[2], at: at[1]},
	{d: 1.23, n: 3, J: 0.07, h: 0.85, color: c[0], at: at[2]},
];
export const ETH_ROW = fullRow([{el: 'C', h: 3}, {el: 'C', h: 2}, {el: 'O', h: 1}], 230, 380, 160);
const G3 = (c: [string, string, string], from: [number, number, number]): Peak[] => [
	...ETH([GREYT, GREYT, GREYT]).map((p, i) => ({...p, out: [from[1], from[2], from[0]][i]})),
	...ETH(c, [from[1], from[2], from[0]]),
];
const Brk: React.FC<{g: NG; d: number; w: number; y: number; at: number; color?: string}> = ({g, d, w, y, at, color = INK_SOFT}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const x0 = dx(g, d + w / 2), x1 = dx(g, d - w / 2);
	return <path opacity={v} d={`M${x0},${y + 12} L${x0},${y} L${x1},${y} L${x1},${y + 12}`} fill="none" stroke={color} strokeWidth={3} />;
};

// ---------- 1. hook ----------
const K1 = K('hook', {c13: 'Carbon-13 told', proton: 'proton NMR', three: 'three signals,', sizes: 'different sizes,', split: 'split into', clue: 'separate clue', joined: "they're joined"});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const dim = prog(f, K1.proton, 14);
	const pu = pulse(f, K1.split + 10, 40);
	return (
		<Svg>
			<Title text={TITLE} />
			<MolAt m={MOL10.ethanol} x={330} y={300} s={1.1} atoms={[{i: 1, at: ON, color: E1}, {i: 0, at: ON, color: E2}]} />
			<g opacity={1 - 0.6 * dim}>
				<NmrAxis g={{x: 120, y: 420, w: 460, h: 110, d0: 80}} size={22} title="" step={20} />
				<NmrSpec g={{x: 120, y: 420, w: 460, h: 110, d0: 80}} lw={6} peaks={[{d: 58, h: 0.8, color: E1}, {d: 18, h: 0.85, color: E2}]} />
			</g>
			<GTag x={620} y={440} text="c11a: 2 carbon environments" size={28} />
			<NmrAxis g={GP} at={K1.proton} />
			<NmrSpec g={GP} peaks={ETH([GREYT, GREYT, GREYT], [K1.proton + 10, K1.proton + 16, K1.proton + 22])} tmsTag="TMS" tms={K1.proton} />
			{pu > 0.01 ? <g opacity={0.5 * pu}>{[3.7, 1.23].map(d => <circle key={d} cx={dx(GP, d)} cy={GP.y + GP.h * 0.6} r={70} fill="#f3d27a" />)}</g> : null}
			<Brk g={GP} d={3.7} w={0.4} y={GP.y + GP.h - GP.h * 0.43 - 30} at={K1.three} />
			<Brk g={GP} d={2.6} w={0.2} y={GP.y + GP.h - GP.h * 0.57 - 30} at={K1.three + 6} />
			<Brk g={GP} d={1.23} w={0.3} y={GP.y + GP.h - GP.h * 0.85 - 30} at={K1.three + 12} />
			<Integ g={GP} at={K1.sizes} unit={22} tags={false} o={0.5} steps={[{d: 3.7, n: 2, color: E2}, {d: 2.6, n: 1, color: E3}, {d: 1.23, n: 3, color: E1}]} />
			<Sx x={dx(GP, 2.6)} y={GP.y - 6} text="O–H: position varies" size={26} color={GREYT} anchor="middle" hand at={K1.proton + 30} />
			{['how many signals?', 'how big?', 'how many lines?'].map((t, i) => <Chip key={t} x={1200} y={180 + i * 90} text={t} size={38} color={NAVY} ink={NAVY} at={K1.clue + i * 10} sw={4} />)}
			<Sx x={1200} y={500} text="which hydrogens, and how they're joined" size={32} color={INK} hand at={K1.joined} />
		</Svg>
	);
};

// ---------- 2. same rules ----------
const K2 = K('same-rules', {proton: 'Proton NMR', c13: 'as carbon-13,', shield: 'Electrons shield', deshield: 'atoms deshield', tms: 'TMS still', scale: 'The scale', ppm12: 'about 12', shifts: 'Proton shifts', need: 'you need'});
const G2: NG = {x: 160, y: 700, w: 1600, h: 200, d0: 12};
const G2C: NG = {x: 160, y: 470, w: 1600, h: 80, d0: 220};
export const SceneRules: React.FC = () => {
	const f = useCurrentFrame();
	const drop = smooth(prog(f, K2.proton, 40));
	return (
		<Svg>
			<Title text="Same rules, new nucleus" />
			<Pic p={PL.nmr} cx={1600} cy={290} w={360} />
			<g transform={`translate(0,${-120 + 120 * drop})`}><PicH p={PL.tube} cx={1490} cy={240} h={180} /></g>
			<GTag x={1420} y={460} text="c11a: same machine" size={26} />
			<Sx x={96} y={196} text="proton NMR watches ¹H nuclei (protons)" size={42} color={NAVY} hand at={K2.proton} />
			{[['electrons shield', K2.shield], ['electronegative atoms deshield → left', K2.deshield], ['TMS = 0, not counted', K2.tms]].map(([t, a], i) => <Chip key={i} x={96} y={250 + i * 76} text={t as string} size={34} color={GREYT} ink={INK} at={a as number} />)}
			<g opacity={vis(f, K2.c13, K2.shield, 14) * 0.7}>
				<NmrAxis g={G2C} size={24} step={20} title="" />
				<Sx x={G2C.x} y={G2C.y + 20} text="¹³C: 0 to about 220" size={28} color={GREYT} weight={800} at={ON} />
			</g>
			<NmrAxis g={G2} step={1} title="chemical shift, δ (ppm)" />
			<NmrSpec g={G2} peaks={[]} tmsTag="TMS" />
			<Chip x={dx(G2, 6)} y={G2.y + 20} text="¹H: 0 to about 12 ppm" size={34} color={NAVY} ink={NAVY} anchor="middle" at={K2.ppm12} />
			<Chip x={760} y={340} text="¹H shifts: given in the question, not on the data sheet" size={32} color={AMBER_INK} ink={INK} at={K2.shifts} sw={4} />
		</Svg>
	);
};

// ---------- 3. clue one: signals ----------
const K3 = K('signals', {first: 'First clue', ident: 'identical surroundings', end: 'end carbon', middle: 'middle carbon', own: 'its own.', three: 'three signals.', sym: 'Symmetry merges', carbons: 'merged carbons'});
export const SceneSignals: React.FC = () => {
	const r = ETH_ROW;
	return (
		<Svg>
			<Title text="Clue 1: how many signals" />
			<Full row={r} />
			<HRing row={r} idx={r.hs[0]} at={K3.end} color={E1} />
			<HRing row={r} idx={r.hs[1]} at={K3.middle} color={E2} />
			<HRing row={r} idx={r.hs[2]} at={K3.own} color={E3} />
			<Sx x={230} y={560} text="ethanol" size={32} color={INK} weight={800} at={ON} />
			<NmrAxis g={GP} />
			<NmrSpec g={GP} peaks={G3([E1, E2, E3], [K3.end, K3.middle, K3.own])} tmsTag="TMS" />
			<T x={1000} y={230} w={820} text="identical surroundings → one signal" size={38} color={INK} at={K3.ident} />
			<Chip x={1000} y={320} text="number of signals = number of H environments" size={34} color={NAVY} ink={NAVY} at={K3.three} sw={4} />
			<g opacity={prog(useCurrentFrame(), K3.carbons - 30, 12)}>
				<MolAt m={MOL10.propan2ol} x={1160} y={500} s={0.7} color={GREYT} />
				<line x1={1160} x2={1160} y1={450} y2={560} stroke={NAVY} strokeWidth={3} strokeDasharray="10 8" />
				<Sx x={1300} y={510} text="6 CH_3 hydrogens: one signal" size={30} color={GREYT} hand weight={800} at={ON} />
			</g>
			{void mirror}
		</Svg>
	);
};

// ---------- 4. clue two: shift ----------
const K4 = K('shift', {second: 'Second, where', ch2: 'C H two', pulls: 'pulls electrons', s37: 'near 3.7', ch3: 'C H three', s12: 'near 1.2.', close: 'Hydrogens close', left: 'further left.'});
export const SceneShift: React.FC = () => {
	const r = ETH_ROW;
	return (
		<Svg>
			<Title text="Clue 2: where each signal sits" />
			<Full row={r} />
			<HRing row={r} idx={r.hs[0]} at={ON} color={E1} pulseAt={K4.ch3} />
			<HRing row={r} idx={r.hs[1]} at={ON} color={E2} pulseAt={K4.ch2} />
			<HRing row={r} idx={r.hs[2]} at={ON} color={E3} />
			<Arrow a={[r.heavy[1][0] + 30, r.heavy[1][1] - 30]} b={[r.heavy[2][0] - 34, r.heavy[2][1] - 30]} at={K4.pulls} color="#b5583c" />
			<GTag x={360} y={540} text="c11a: oxygen deshields its neighbours" size={28} at={K4.pulls} />
			<NmrAxis g={GP} />
			<NmrSpec g={GP} peaks={ETH([E1, E2, E3]).map((p, i) => ({...p, tag: ['about 3.7', '', 'about 1.2'][i] || undefined, tagAt: [K4.s37, 0, K4.s12][i], tagSize: 34}))} tmsTag="TMS" />
			<Sx x={dx(GP, 2.6)} y={GP.y + GP.h - GP.h * 0.57 - 14} text="O–H: position varies" size={26} color={GREYT} anchor="middle" hand at={ON} />
			<AxisArrow x0={dx(GP, 0.6)} x1={dx(GP, 4.6)} y={GP.y + GP.h + 120} text="" at={K4.left} />
			<Chip x={1000} y={260} text="near O, C=O or a halogen → further left" size={34} color={NAVY} ink={NAVY} at={K4.left - 20} sw={4} />
			<T x={1000} y={420} w={820} text="CH_2 bonded to O: deshielded, near 3.7. CH_3 further away: near 1.2." size={34} color={INK} at={K4.s37} />
		</Svg>
	);
};

// ---------- 5. clue three: areas ----------
const K5 = K('integration', {third: 'Third, how', area: 'The area', line: 'integration line', ratio: 'three to', two: ['two to', 1], one: 'one, matching', tallest: 'tallest line.', numbers: 'actual numbers'});
export const SceneIntegration: React.FC = () => {
	const r = ETH_ROW;
	return (
		<Svg>
			<Title text="Clue 3: how big each signal is" />
			<Full row={r} />
			<HRing row={r} idx={r.hs[0]} at={ON} color={E1} />
			<HRing row={r} idx={r.hs[1]} at={ON} color={E2} />
			<HRing row={r} idx={r.hs[2]} at={ON} color={E3} />
			<NmrAxis g={GP} />
			<SignalArea g={GP} d={2.6} w={0.18} h={0.57} color={E3} at={K5.tallest - 20} />
			<SignalArea g={GP} d={3.7} w={0.34} h={0.43} color={E2} at={K5.tallest - 20} />
			<NmrSpec g={GP} peaks={ETH([E1, E2, E3])} tmsTag="TMS" />
			<Integ g={GP} at={K5.line} unit={30} base={GP.y + GP.h - 10} steps={[{d: 1.23, n: 3, color: E1, at: K5.ratio}, {d: 2.6, n: 1, color: E3, at: K5.one}, {d: 3.7, n: 2, color: E2, at: K5.two}]} />
			<T x={1000} y={230} w={820} text="area under a signal ∝ number of H in it" size={38} color={INK} at={K5.third} />
			<GTag x={1000} y={540} text="the integration line steps up at each signal" size={28} at={K5.line} />
			<Mistake x={1000} y={330} text="tallest line = most H" size={36} at={K5.tallest - 20} cross={K5.tallest} />
			<Chip x={1000} y={470} text="areas → a ratio of H, not the numbers" size={34} color={NAVY} ink={NAVY} at={K5.numbers} sw={4} />
		</Svg>
	);
};

// ---------- 6. why signals split ----------
const K6 = K('why-split', {now: 'Now the', each: 'Each hydrogen', with: 'with the field,', against: 'or against', look: 'Look at', both: 'both with,', one: 'one with', ways: 'two ways,', bothA: 'both against.', three: 'three slightly', lines: 'three lines,', twice: 'twice as'});
export const SceneSplit: React.FC = () => {
	const f = useCurrentFrame();
	const rows: [string, number, number][] = [['with, with', K6.both, +1], ['with, against', K6.one, 0], ['against, with', K6.one + 14, 0], ['against, against', K6.bothA, -1]];
	const L = (k: number) => smooth(prog(f, k, 14));
	const zb = 980, zx = 1500;
	const arrowUp = (x: number, y: number, up: boolean, at: number) => { const v = prog(f, at, 10); return v > 0.01 ? <g opacity={v} transform={`translate(${x},${y}) rotate(${up ? 0 : 180})`}><line x1={0} x2={0} y1={18} y2={-24} stroke={E2} strokeWidth={5} /><path d="M-9,-14 L0,-28 L9,-14" fill="none" stroke={E2} strokeWidth={5} /></g> : null; };
	const st = f >= K6.bothA ? 3 : f >= K6.one ? 1 : 0;
	return (
		<Svg>
			<Title text="Why signals split" />
			<Sx x={96} y={196} text="each H on the next carbon is a tiny magnet too" size={40} color={NAVY} hand at={K6.each} />
			<circle cx={330} cy={520} r={44} fill="#5d5d66" stroke={INK} strokeWidth={3} />
			<Sx x={330} y={534} text="C" size={40} color={CARD} anchor="middle" weight={800} at={ON} />
			{[[330, 400], [330, 640], [210, 520]].map(([x, y], i) => <g key={i}><line x1={330} y1={520} x2={x} y2={y} stroke={INK} strokeWidth={4} /><circle cx={x} cy={y} r={28} fill="#dff1ee" stroke={E1} strokeWidth={4} /><Sx x={x} y={y + 11} text="H" size={30} color={INK} anchor="middle" weight={800} at={ON} /></g>)}
			<line x1={374} x2={556} y1={520} y2={520} stroke={INK} strokeWidth={5} />
			<circle cx={600} cy={520} r={44} fill="#5d5d66" stroke={INK} strokeWidth={3} />
			<Sx x={600} y={534} text="C" size={40} color={CARD} anchor="middle" weight={800} at={ON} />
			{[[600, 400], [600, 640]].map(([x, y], i) => <g key={i}><line x1={600} y1={520} x2={x} y2={y} stroke={INK} strokeWidth={4} /><circle cx={x} cy={y} r={28} fill="#fbe9cf" stroke={E2} strokeWidth={4} /><Sx x={x} y={y + 11} text="H" size={30} color={INK} anchor="middle" weight={800} at={ON} /></g>)}
			{arrowUp(660, 400, st === 0 || st === 1, K6.look)}
			{arrowUp(660, 640, st === 0, K6.look)}
			<Sx x={330} y={730} text="CH_3 (teal) has two neighbours" size={30} color={E1} anchor="middle" hand weight={800} at={K6.look} />
			<Sx x={760} y={260} text="field ↑" size={30} color="#4f7fb0" hand weight={800} at={K6.with} />
			{rows.map(([t, at, lv], i) => <g key={i} opacity={prog(f, at, 12)}>
				<rect x={1000} y={240 + i * 80} width={420} height={64} rx={14} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
				<Sx x={1020} y={284 + i * 80} text={t} size={32} color={INK} weight={700} at={ON} />
				<Sx x={1440} y={284 + i * 80} text={lv > 0 ? 'field up a little' : lv < 0 ? 'down a little' : 'no change'} size={28} color={GREYT} hand weight={700} at={ON} />
			</g>)}
			<g opacity={prog(f, K6.ways, 12)}>
				<path d="M990,330 L974,330 L974,450 L990,450" fill="none" stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={960} y={398} text="2 ways" size={30} color={AMBER_INK} anchor="end" hand weight={800} at={ON} />
			</g>
			<g opacity={prog(f, K6.three, 12)}>
				<line x1={zx - 200} x2={zx + 200} y1={zb} y2={zb} stroke={INK} strokeWidth={3} />
				{[-1, 0, 1].map(k => { const h = (k === 0 ? 2 : 1) * 70 * L(k === 0 ? K6.twice - 20 : K6.lines); return <rect key={k} x={zx + k * 60 - 4} y={zb - h} width={8} height={h} fill={E1} />; })}
				<Sx x={zx} y={zb + 40} text="three fields → three lines, 1 : 2 : 1" size={30} color={E1} anchor="middle" hand weight={800} at={ON} />
			</g>
		</Svg>
	);
};

// ---------- 7. n + 1 ----------
const K7 = K('n-plus-one', {rule: 'n plus one rule', simple: 'For simple', two: 'two neighbours,', three: 'three neighbours', same: 'same environment', oh: 'O H hydrogen', singlet: 'a singlet,', neighbours: 'split its'});
export const SceneNPlus: React.FC = () => {
	const r = ETH_ROW;
	return (
		<Svg>
			<Title text="The n + 1 rule" />
			<Chip x={1000} y={170} text="simple spectra: n equivalent neighbours → n + 1 lines" size={32} color={NAVY} ink={NAVY} at={K7.rule} sw={4} />
			<Full row={r} />
			<HRing row={r} idx={r.hs[0]} at={ON} color={E1} pulseAt={K7.three} />
			<HRing row={r} idx={r.hs[1]} at={ON} color={E2} pulseAt={K7.two} />
			<HRing row={r} idx={r.hs[2]} at={ON} color={E3} />
			<NmrAxis g={GP} />
			<NmrSpec g={GP} peaks={ETH([E1, E2, E3]).map((p, i) => ({...p, tag: ['3 + 1 = 4: quartet', 'singlet', '2 + 1 = 3: triplet'][i], tagAt: [K7.three, K7.singlet, K7.two][i], tagSize: 32}))} tmsTag="TMS" />
			<GTag x={1000} y={270} text="equivalent H: no splitting among themselves" size={28} at={K7.same} />
			<T x={1000} y={380} w={820} text="the O–H hydrogen swaps between molecules: usually a singlet, and it doesn't split its neighbours" size={32} color={E3} at={K7.oh} />
			<GTag x={1000} y={540} text="1 singlet, 2 doublet, 3 triplet, 4 quartet" size={30} at={K7.neighbours} />
		</Svg>
	);
};

// ---------- 8. bromoethane from scratch ----------
const K8 = K('bromoethane', {lets: "Let's read", two: 'two signals,', areas: 'The areas', smaller: 'The smaller', larger: 'The larger,', ethyl: 'ethyl group,', bromo: 'is bromoethane.', further: 'sits further', br: 'the bromine.'});
const BR_ROW = fullRow([{el: 'C', h: 3}, {el: 'C', h: 2}, {el: 'Br'}], 230, 380, 160);
export const BR = (q: string, t: string, at: [number, number] = [ON, ON]): Peak[] => [{d: 3.42, n: 4, J: 0.07, h: 0.45, color: q, at: at[0]}, {d: 1.70, n: 3, J: 0.07, h: 0.85, color: t, at: at[1]}];
export const SceneBromo: React.FC = () => {
	const f = useCurrentFrame();
	const r = BR_ROW;
	return (
		<Svg>
			<Title text="Reading one from scratch" />
			<Chip x={96} y={150} text="C_2H_5Br" size={40} color={NAVY} ink={INK} at={K8.lets} sw={4} />
			<g opacity={prog(f, K8.ethyl, 14)}>
				<Full row={r} />
				<HRing row={r} idx={r.hs[0]} at={K8.ethyl} color={E1} />
				<HRing row={r} idx={r.hs[1]} at={K8.ethyl} color={E2} />
				{pulse(f, K8.br, 40) > 0.01 ? <circle cx={r.heavy[2][0]} cy={r.heavy[2][1]} r={46 + 14 * pulse(f, K8.br, 40)} fill="#f3d27a" opacity={0.5} /> : null}
			</g>
			<Arrow a={[r.heavy[1][0] + 30, r.heavy[1][1] - 34]} b={[r.heavy[2][0] - 30, r.heavy[2][1] - 34]} at={K8.br} color="#b5583c" />
			<Chip x={96} y={570} text="ethyl: triplet 3H + quartet 2H" size={34} color={AMBER_INK} ink={INK} at={K8.ethyl + 30} sw={4} />
			<NmrAxis g={GP} />
			<NmrSpec g={GP} peaks={[...BR(GREYT, GREYT).map((p, i) => ({...p, out: [K8.smaller, K8.larger][i]})), ...BR(E2, E1, [K8.smaller, K8.larger])]} tmsTag="TMS" />
			<Integ g={GP} at={K8.areas} unit={30} base={GP.y + GP.h - 10} steps={[{d: 1.7, n: 3, color: E1}, {d: 3.42, n: 2, color: E2}]} />
			<AnsBox x={1000} y={150} w={824} h={470} label="reasoning" size={38} sizeOld={30} lines={[
				{t: '2 signals → 2 H environments', at: K8.two},
				{t: 'areas 3 : 2', at: K8.areas},
				{t: 'quartet, 2H, near 3.4 → 3 neighbours', at: K8.smaller},
				{t: 'triplet, 3H, near 1.7 → 2 neighbours', at: K8.larger},
				{t: 'CH_2 near Br: further left', at: K8.further},
			]} />
		</Svg>
	);
};

// ---------- 9. the quartet trap ----------
const K9 = K('quartet-trap', {trap: 'classic trap', doesnt: "doesn't mean", lines: 'number of lines', area: 'The area', so: 'So in', triplet: 'the triplet', keep: 'Keep the', big: 'how big'});
const G9: NG = {x: 160, y: 560, w: 1600, h: 330, d0: 5};
export const SceneTrap: React.FC = () => (
	<Svg>
		<Title text="A quartet isn't four hydrogens" />
		<Mistake x={96} y={170} text="quartet = 4 H" size={44} at={K9.trap} cross={K9.doesnt + 10} />
		<NmrAxis g={G9} />
		<SignalArea g={G9} d={3.42} w={0.34} h={0.45} color={E2} at={K9.area} />
		<SignalArea g={G9} d={1.70} w={0.26} h={0.85} color={E1} at={K9.triplet} />
		<NmrSpec g={G9} peaks={BR(E2, E1)} tmsTag="TMS" />
		<Sx x={dx(G9, 3.42)} y={G9.y + G9.h - G9.h * 0.45 - 70} text="lines: 3 neighbours + 1" size={34} color={E2} anchor="middle" hand weight={800} at={K9.lines} />
		<Sx x={dx(G9, 3.42)} y={G9.y + G9.h - G9.h * 0.45 - 24} text="area: 2 H here" size={34} color={E2} anchor="middle" hand weight={800} at={K9.area} />
		<Sx x={dx(G9, 1.70) - 150} y={G9.y + 40} text="lines: 2 + 1" size={34} color={E1} anchor="end" hand weight={800} at={K9.triplet} />
		<Sx x={dx(G9, 1.70) - 150} y={G9.y + 86} text="area: 3 H" size={34} color={E1} anchor="end" hand weight={800} at={K9.triplet + 10} />
		<Sx x={96} y={330} text="bromoethane" size={32} color={INK_SOFT} weight={800} at={ON} />
		<rect x={900} y={150} width={924} height={150} rx={18} fill={CARD} stroke={NAVY} strokeWidth={3} opacity={prog(useCurrentFrame(), K9.keep, 12)} />
		<Sx x={930} y={210} text="How many lines? → neighbours" size={38} color={INK} weight={700} at={K9.keep} />
		<Sx x={930} y={270} text="How big an area? → hydrogens" size={38} color={NAVY} weight={800} at={K9.big} />
	</Svg>
);
