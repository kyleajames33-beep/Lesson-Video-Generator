// M6 C03 scenes 10 to 12: worked example 2 (sulfuric acid, unmatched amounts) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {ASSUME, BW, SmallCal, StepChip, TASK} from './s2';
import {
	AChip, AMBER, AMBER_INK, BASE, BASE_INK, CupOutline, DrawPath, EqLine, GCard, HEAT, HEAT_INK, INK, INK_SOFT, LimitBars, Mistake, Note, Overlay, P, PROTON, PROTON_INK, Proton, Ring, Sx, TEAL,
	TaskLine, WLine, eSpan, eq, mw, pulseAt, smooth,
} from './parts';
import type {BarSpec, EItem, GLine, GMark} from './parts';

const WE2_EQ = (ats: number[] | number): EItem[] => eq(['H_2SO_4(aq)', '+', '2NaOH(aq)', '->', 'Na_2SO_4(aq)', '+', '2H_2O(l)'], ats);
const G2 = (a: [number, number, number, number], marks: GMark[][] = [], lit: ([number, number] | undefined)[] = []): GLine[] => [
	{t: 'H_2SO_4: 25.0 mL, 1.00 mol/L', at: a[0], marks: marks[0], lit: lit[0]},
	{t: 'NaOH: 75.0 mL, 1.00 mol/L', at: a[1], marks: marks[1], lit: lit[1]},
	{t: 'T: 20.0 °C → 26.6 °C', at: a[2], marks: marks[2], lit: lit[2]},
	{t: ASSUME, at: a[3], grey: true},
];
const Board2: React.FC<{taskAt?: number; eqAt?: number | number[]; g?: [number, number, number, number]; marks?: GMark[][]; lit?: ([number, number] | undefined)[]; calOut?: number}> = ({taskAt = -100, eqAt = -100, g = [-100, -100, -100, -100], marks, lit, calOut}) => (
	<>
		<TaskLine text={TASK} at={taskAt} size={BW.task.s} />
		<EqLine items={WE2_EQ(eqAt)} x={BW.strip.x} y={BW.strip.y} size={BW.strip.s} />
		<GCard x={BW.card.x} y={BW.card.y} w={BW.card.w} lh={BW.card.lh} size={BW.card.s} at={g[0] - 6} lines={G2(g, marks, lit)} />
		<SmallCal at={-100} temp={26.6} out={calOut} />
	</>
);
const K_BAR = 5200;
const BA: BarSpec = {label: 'H^{+} 0.0500 mol', n: 0.05, color: PROTON, ink: PROTON_INK};
const BB: BarSpec = {label: 'OH^{-} 0.0750 mol', n: 0.075, color: BASE, ink: BASE_INK};

// ---------- 10. Count the ions that react ----------
const W10 = 'we2-count';
const K10 = cues(sc(W10), {sulf: 'sulfuric acid is', naoh: 'sodium hydroxide, warming', warm: 'warming from', two: 'two hydrogen ions', mol: 'so zero point zero two', acidmol: 'moles of acid', them: 'moles of them', there: "There's zero point", oh: 'moles of hydroxide', runout: 'run out first', water: 'moles of water form', extra: 'the extra hydroxide', noheat: 'releases no heat'});
export const SceneWe2Count: React.FC = () => {
	const f = useCurrentFrame();
	const {wx, wy, ws} = BW;
	const items = WE2_EQ(K10.sulf - 10);
	const sp = eSpan(items, 0, BW.strip.s, BW.strip.x);
	const subX = sp.x1 + mw('H', BW.strip.s, false, 700) + mw('2', BW.strip.s * 0.64, false, 700) / 2;
	const drop = (i: number) => smooth(prog(f, K10.two + 10 + i * 8, 26));
	const by = 690;
	return (
		<Overlay>
			<Board2 taskAt={0} eqAt={K10.sulf - 10} g={[K10.sulf, K10.naoh, K10.warm, K10.warm + 40]} lit={[[K10.mol - 20, K10.there], [K10.there, K10.runout]]} />
			<Ring cx={subX} cy={BW.strip.y + 4} rx={18} ry={20} at={K10.two} out={K10.mol + 40} color={TEAL} seed={5} width={4} />
			{[0, 1].map(i => {
				const d = drop(i);
				const o = d > 0.01 ? 1 - prog(f, K10.mol + 40, 12) : 0;
				return o > 0.01 ? <Proton key={i} x={subX - 20 + i * 44} y={BW.strip.y + 20 + d * 60} s={0.8} o={o} /> : null;
			})}
			<WLine x={wx} y={wy[0] - 20} size={ws} dim={K10.runout} items={P('n(H_2SO_4) = 1.00 × 0.0250', K10.mol, '= 0.0250 mol', K10.acidmol)} />
			<WLine x={wx} y={wy[1] - 30} size={ws} dim={K10.runout} items={P('n(H^{+}) = 2 × 0.0250', K10.acidmol + 24, {t: '= 0.0500 mol', color: PROTON_INK}, K10.them)} />
			<WLine x={wx} y={wy[2] - 40} size={ws} dim={K10.runout} items={P('n(OH^{-}) = 1.00 × 0.0750', K10.there, {t: '= 0.0750 mol', color: BASE_INK}, K10.oh)} />
			<LimitBars x={wx} y={by} k={K_BAR} a={BA} b={BB} at={K10.runout - 4} use={K10.runout + 20} useDur={50} stub={{text: '0.0250 mol OH^{-} left over', at: K10.runout + 74}} />
			<AChip x={wx} y={by + 200} text="n(H_2O) = 0.0500 mol (H^{+} runs out first)" size={36} color={TEAL} hand={false} at={K10.water} />
			<Note x={wx + 400} y={by + 142} text="no reaction, no heat" size={34} color={HEAT_INK} at={K10.noheat} />
			{void K10.extra}{void AMBER}
		</Overlay>
	);
};

// ---------- 11. The heat and ΔH ----------
const W11 = 'we2-enthalpy';
const K11 = cues(sc(W11), {still: 'still gets warmed', hund: 'one hundred grams', dT: 'Delta T is six', soq: 'so q is about', res: 'two thousand seven hundred and fifty nine', divide: 'Divide by the moles', water: 'water not acid', two: 'two point seven five nine', res2: 'fifty five point two', minus: 'minus fifty five', dbl: 'would double it'});
export const SceneWe2Enthalpy: React.FC = () => {
	const f = useCurrentFrame();
	const {wx, wy, ws} = BW;
	const keepY = BW.keep.y[1];
	const pulse = pulseAt(f, K11.water, 0.1, 30);
	return (
		<Overlay>
			<Board2 calOut={10} marks={[[{sub: '25.0 mL', at: K11.hund - 12, out: K11.dT}], [{sub: '75.0 mL', at: K11.hund - 4, out: K11.dT}], [{sub: '20.0 °C', at: K11.dT + 6, out: K11.soq}, {sub: '26.6 °C', at: K11.dT + 12, out: K11.soq}]]} />
			<StepChip n={1} text="q" at={-100} out={K11.divide} />
			<StepChip n={3} text="ΔH" at={K11.divide} />
			<g transform={`translate(${BW.keep.x},${keepY + 26}) scale(${pulse}) translate(${-BW.keep.x},${-(keepY + 26)})`}>
				<AChip x={BW.keep.x} y={keepY} text="n(H_2O) = 0.0500 mol" size={34} color={INK} hand={false} at={-100} />
			</g>
			<LimitBars x={BW.keep.x + 10} y={keepY + 86} k={K_BAR * 0.6} a={BA} b={BB} at={-100} use={-100} s={0.8} labels={false} glowStub={K11.still} />
			<Note x={BW.keep.x + 10 + K_BAR * 0.6 * 0.05 * 0.8 + 70} y={keepY + 200} text="still warmed" size={32} color={HEAT_INK} at={K11.still + 6} out={K11.dT} />
			<WLine x={wx} y={wy[0]} size={ws} dim={K11.dT} items={P('m = 25.0 + 75.0', K11.still + 20, '= 100.0 g', K11.hund)} />
			<WLine x={wx} y={wy[1]} size={ws} dim={K11.divide} items={P('ΔT = 26.6 − 20.0', K11.dT + 10, '= 6.6 °C', K11.dT + 40)} />
			<WLine x={wx} y={wy[2]} size={ws} dim={K11.minus} items={P('q = 100.0 × 4.18 × 6.6 = 2758.8 J', K11.soq + 6, {t: '= 2.759 kJ', color: TEAL}, K11.res)} />
			<WLine x={wx} y={wy[3]} size={ws} dim={K11.dbl} items={P('ΔH = −2.759 kJ ÷ 0.0500 mol', K11.two, '= −55.18 kJ/mol', K11.res2)} />
			<AChip x={wx} y={wy[3] + 50} text="ΔH = −55 kJ/mol (2 s.f.)" size={44} color={TEAL} hand={false} at={K11.minus} />
			<Mistake x={wx} y={wy[3] + 150} text="÷ 0.0250 mol acid: −110 kJ/mol" at={K11.dbl} note="per mole of water, not acid" size={34} />
		</Overlay>
	);
};

// ---------- 12. Memory aid ----------
const H12 = 'memory-aid';
const K12 = cues(sc(H12), {per: 'Per mole of water', runs: 'runs out first', mass: 'mass of everything', temp: 'temperature up', calc: 'Calculate the heat', minus: 'add the minus sign'});
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const pm = pulseAt(f, K12.minus, 0.25, 30);
	return (
		<>
			<Heading text="What to remember" at={4} size={60} />
			<Overlay>
				<Sx x={110} y={330} text="Per mole of water, not per mole of acid." size={74} color={TEAL} hand at={K12.per} />
				<LimitBars x={140} y={392} k={2800} a={BA} b={BB} at={K12.runs - 10} use={-100} labels={false} />
				<Note x={140 + 2800 * 0.075 + 40} y={450} text="the one that runs out first sets the water" size={38} color={INK_SOFT} at={K12.runs} />
				<Sx x={110} y={640} text="Mass of everything in the cup." size={74} color={INK} hand at={K12.mass} />
				<CupOutline x={1240} y={540} w={150} h={150} fill={0.96} at={K12.mass + 6} />
				<Sx x={110} y={880} text="Temperature up, ΔH negative." size={74} color={INK} hand at={K12.temp} />
				<g opacity={prog(f, K12.temp + 10, 12)} transform={`translate(1090,850)`} fill="none" stroke={AMBER} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round">
					<path d="M0,40 L0,-44 M-24,-18 L0,-44 L24,-18" />
				</g>
				<g transform={`translate(1200,846) scale(${pm}) translate(-1200,-846)`}>
					<Sx x={1200} y={880} text="−" size={110} color={TEAL} anchor="middle" weight={800} at={K12.temp + 16} />
				</g>
				{void K12.calc}{void INK_SOFT}
				{void AMBER_INK}{void DrawPath}{void HEAT}{void INK}
			</Overlay>
		</>
	);
};
