// Kit demos for the population, heating, energy-profile, two-step titration and circuit
// additions (13 November 2026). Not a lesson and not part of the registry: a separate
// Remotion entry so root can preview or still them without touching the lesson catalogue.
//   npx remotion studio src/explainer/sims/demos.tsx
//   npx remotion still src/explainer/sims/demos.tsx SimDemo-Population out.png --frame=240
// Every label below is demo wording supplied from outside the engines, as a lesson would.
import React from 'react';
import {AbsoluteFill, Composition, registerRoot, useCurrentFrame} from 'remotion';
import {HandText} from '../kit';
import {FRAME, PAPER, TYPE} from '../shared/tokens';
import {Part, runCircuit} from './circuits';
import {CircuitLayout, CircuitTimeGraph, CircuitView, useCircuit} from './circuits-views';
import {EnergyProfileView} from './energy-profile-views';
import {heatingAt, runHeating} from './heating';
import {HeatingGraph, PhaseReadout} from './heating-views';
import {runAlleles, runLogistic, runPredatorPrey, valueAt} from './population';
import {AlleleGraph, GrowthGraph, PredatorPreyGraph} from './population-views';
import {useSeriesTime} from './series-views';
import {Titration, equivalenceVolume, mixtureAt} from './titration';
import {TitrationGraph, TitrationRig, usePour} from './titration-views';
import {SimReadout} from './views';
import {PHYSICS_DEMOS} from './demos-physics';

const LEN = 300;
const lazy = <T,>(make: () => T) => { let value: T | undefined; return () => (value ??= make()); };
const Page: React.FC<{title: string; children: React.ReactNode}> = ({title, children}) => (
	<AbsoluteFill style={{background: PAPER}}>
		<div style={{position: 'absolute', left: FRAME.margin, top: 56}}><HandText text={title} at={0} size={TYPE.heading} cps={200} /></div>
		{children}
	</AbsoluteFill>
);

// 1. Population ---------------------------------------------------------------
const drift = lazy(() => runAlleles({p0: 0.5, n: 20, generations: 80, lines: 6, seed: 3}));
const growth = lazy(() => runLogistic({n0: 20, r: 0.6, k: 1000, to: 20}));
const lotka = lazy(() => runPredatorPrey({prey0: 40, predators0: 9, preyGrowth: 0.1, predation: 0.02, conversion: 0.01, predatorDeath: 0.1, to: 200}));
const PopulationDemo: React.FC = () => {
	const g = useSeriesTime({at: 10, to: 80, frames: 240}), t = useSeriesTime({at: 10, to: 20, frames: 240}), u = useSeriesTime({at: 10, to: 200, frames: 240});
	const run = growth();
	return (
		<Page title="Populations over time">
			<AlleleGraph run={drift()} now={g} x={60} y={150} w={900} h={430} start={{label: 'start'}} />
			<GrowthGraph run={run} now={t} x={1000} y={150} w={860} h={430} label="size" capacity={{label: 'carrying capacity'}} half={{label: 'K / 2'}} xLabel="time (years)" />
			<PredatorPreyGraph run={lotka()} now={u} x={60} y={610} w={1200} h={430} prey={{label: 'hares'}} predators={{label: 'lynx'}} xLabel="time (years)" />
			<SimReadout x={1320} y={660} w={500} title="Now" rows={[
				{label: 'size', value: valueAt(run.t, run.v, t), digits: 0, tone: 'green'},
				{label: 'growth rate', value: valueAt(run.t, run.rate, t), digits: 0, unit: 'per year'},
			]} />
		</Page>
	);
};

// 2. Heating curve --------------------------------------------------------------
const ice = lazy(() => runHeating({mass: 0.2, power: 400, start: -30, end: 130, c: {solid: 2100, liquid: 4200, gas: 2010}, melt: {at: 0, latent: 334000}, boil: {at: 100, latent: 2260000}}));
const HeatingDemo: React.FC = () => {
	const run = ice(), t = useSeriesTime({at: 10, to: run.duration, frames: 260}), s = heatingAt(run, t);
	return (
		<Page title="Heating ice to steam">
			<HeatingGraph run={run} now={t} x={60} y={160} w={1180} h={860} whole labels={{solid: 'ice warms', melting: 'melting', liquid: 'water warms', boiling: 'boiling', gas: 'steam'}} temperatures={{melting: '0 °C', boiling: '100 °C'}} />
			<PhaseReadout state={s} x={1300} y={190} w={540} title="What is there" labels={{solid: 'ice', liquid: 'water', gas: 'steam'}} />
			<SimReadout x={1300} y={500} w={540} title="Read from the run" rows={[
				{label: 'temperature', value: s.temperature, digits: 0, unit: '°C', tone: 'warm'},
				{label: 'heat added', value: s.heat / 1000, digits: 0, unit: 'kJ'},
				{label: 'time', value: s.t, digits: 0, unit: 's'},
			]} />
		</Page>
	);
};

// 3. Energy profile -------------------------------------------------------------
const EnergyDemo: React.FC = () => {
	const f = useCurrentFrame(), ramp = (a: number, b: number) => Math.min(1, Math.max(0, (f - a) / (b - a)));
	return (
		<Page title="Energy profiles">
			<EnergyProfileView config={{reactants: 0, products: -90, ea: 120, catalysedEa: 65}} x={60} y={170} w={900} h={820}
				progress={ramp(10, 90)} catalysed={ramp(150, 210)} showEa={ramp(95, 125)} showDeltaH={ramp(120, 150)} showCatalysedEa={ramp(210, 240)} ball={f < 100}
				labels={{reactants: 'reactants', products: 'products', ea: 'Ea', deltaH: 'ΔH < 0', catalysed: 'with catalyst', catalysedEa: 'lower Ea', xAxis: 'progress of reaction', yAxis: 'energy'}} />
			<EnergyProfileView config={{reactants: 0, products: 70, ea: 130}} x={1000} y={170} w={860} h={820}
				progress={ramp(30, 110)} showEa={ramp(115, 145)} showDeltaH={ramp(140, 170)}
				labels={{reactants: 'reactants', products: 'products', ea: 'Ea', deltaH: 'ΔH > 0', xAxis: 'progress of reaction', yAxis: 'energy'}} tones={{curve: 'violet'}} />
		</Page>
	);
};

// 4. Two-step titration ---------------------------------------------------------
const carbonate: Titration = {analyte: {kind: 'base', concentration: 0.1, volume: 20, k: 1e-14 / 4.7e-11, k2: 1e-14 / 4.5e-7}, titrant: {kind: 'acid', concentration: 0.1}};
const DiproticDemo: React.FC = () => {
	const ve = equivalenceVolume(carbonate);
	const {added, flow} = usePour([[10, 0], [110, 18], [140, 22], [210, 38], [250, 42], [290, 48]]);
	const m = mixtureAt(carbonate, added), [co3, hco3, h2co3] = m.base.forms;
	return (
		<Page title="Carbonate with hydrochloric acid: two steps">
			<TitrationRig titration={carbonate} added={added} flow={flow} x={90} y={210} scale={1} />
			<TitrationGraph titration={carbonate} added={added} x={540} y={160} w={1320} h={560} to={50} whole
				equivalence={{label: ['first end point', 'second end point']}} half={{label: ['pH = pKa2', 'pH = pKa1']}} />
			<SimReadout x={640} y={760} w={560} title="In the flask" rows={[
				{label: 'pH', value: m.pH, digits: 2, tone: 'teal'},
				{label: 'acid added', value: added, digits: 1, unit: `mL (ends at ${ve})`},
			]} />
			<SimReadout x={1240} y={760} w={600} title="Carbonate forms" rows={[
				{label: 'CO₃²⁻', value: (100 * co3) / m.base.total, digits: 0, unit: '%', tone: 'blue'},
				{label: 'HCO₃⁻', value: (100 * hco3) / m.base.total, digits: 0, unit: '%', tone: 'violet'},
				{label: 'H₂CO₃', value: (100 * h2co3) / m.base.total, digits: 0, unit: '%', tone: 'warm'},
			]} />
		</Page>
	);
};

// 5. Circuits -------------------------------------------------------------------
const parts: Part[] = [
	{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 12, r: 0.5},
	{id: 'a', kind: 'ammeter', from: 'P', to: 'q', r: 0.2},
	{id: 'v', kind: 'rheostat', from: 'q', to: 'j', r: 20},
	{id: 'w1', kind: 'wire', from: 'j', to: 'j2'},
	{id: 'l', kind: 'lamp', from: 'j2', to: 'k', r: 10},
	{id: 'co', kind: 'coil', from: 'k', to: 'n2', r: 1},
	{id: 'w3', kind: 'wire', from: 'n2', to: 'N'},
	{id: 's', kind: 'switch', from: 'j', to: 'm', closed: false},
	{id: 'mo', kind: 'motor', from: 'm', to: 'n2', r: 8},
	{id: 'vm', kind: 'voltmeter', from: 'j2', to: 'k', r: 2000},
];
const circuit = lazy(() => runCircuit(parts, [{at: 40, set: {v: {r: 4}}, over: 110}, {at: 200, set: {s: {closed: true}}}]));
const layout: CircuitLayout = {
	b: [[0, 4], [0, 0]], a: [[0, 0], [2, 0]], v: [[2, 0], [5, 0]], w1: [[5, 0], [7, 0]], l: [[7, 0], [7, 4]],
	co: [[7, 4], [5, 4]], w3: [[5, 4], [0, 4]], s: [[5, 0], [5, 2]], mo: [[5, 2], [5, 4]], vm: [[7, 0], [8.4, 0], [8.4, 4], [7, 4]],
};
const CircuitDemo: React.FC = () => {
	const run = circuit(), {state, parts: now} = useCircuit(run);
	return (
		<Page title="Turn the rheostat, then close the switch">
			<CircuitView run={run} layout={layout} stage={{x: 120, y: 300, cell: 90}} junctions={[[5, 0], [5, 4], [7, 0], [7, 4]]}
				labels={{v: {text: 'rheostat'}, mo: {text: 'motor', side: 1}, co: {text: 'coil', side: 1}, w3: {text: 'connecting wire', side: 1}, l: {text: 'lamp', side: 1}}} />
			<CircuitTimeGraph run={run} span={LEN} x={1060} y={170} w={830} h={560} traces={[{id: 'a', label: 'total'}, {id: 'l', label: 'lamp'}]} />
			<SimReadout x={1140} y={770} w={620} title="Read from the circuit" rows={[
				{label: 'rheostat', value: now.find(p => p.id === 'v')?.r ?? 0, digits: 1, unit: 'Ω'},
				{label: 'total current', value: Math.abs(state.current.a), digits: 2, unit: 'A', tone: 'amber'},
			]} />
		</Page>
	);
};

const DEMOS = [
	['SimDemo-Population', PopulationDemo], ['SimDemo-Heating', HeatingDemo], ['SimDemo-EnergyProfile', EnergyDemo],
	['SimDemo-Diprotic', DiproticDemo], ['SimDemo-Circuits', CircuitDemo],
	...PHYSICS_DEMOS,
] as const;
const Root: React.FC = () => <>{DEMOS.map(([id, C]) => <Composition key={id} id={id} component={C} durationInFrames={LEN} fps={30} width={1920} height={1080} />)}</>;
registerRoot(Root);
