// Kit demos for the Year 12 Physics gaps (14 November 2026 onwards): one composition per
// piece. Listed in demos.tsx, which is the Remotion entry. Every label is demo wording
// supplied from outside the engines, as a lesson would.
import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, HandText} from '../kit';
import {FRAME, INK_SOFT, PAPER, TYPE} from '../shared/tokens';
import {MagnetSource, barLines, coilSeeds, magneticFieldAt, fieldLines, wireSeeds} from './magnetic-field';
import {FieldStage, MagneticFieldView} from './magnetic-field-views';
import {inductionAt, runInduction} from './induction';
import {FluxEmfStrips, MagnetCoilView, MeterNeedle, RotatingCoilView} from './induction-views';
import {useSeriesTime} from './series-views';
import {Part, runCircuit, secondary, solveAC} from './circuits';
import {CircuitLayout, CircuitTimeGraph, CircuitView, useCircuit} from './circuits-views';
import {SimReadout} from './views';

const lazy = <T,>(make: () => T) => { let value: T | undefined; return () => (value ??= make()); };
const ramp = (f: number, a: number, b: number) => Math.min(1, Math.max(0, (f - a) / (b - a)));
export const DemoPage: React.FC<{title: string; children: React.ReactNode}> = ({title, children}) => (
	<AbsoluteFill style={{background: PAPER}}>
		<div style={{position: 'absolute', left: FRAME.margin, top: 56}}><HandText text={title} at={0} size={TYPE.heading} cps={200} /></div>
		{children}
	</AbsoluteFill>
);
export const Caption: React.FC<{x: number; y: number; children: React.ReactNode}> = ({x, y, children}) => (
	<div style={{position: 'absolute', left: x, top: y, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.support, color: INK_SOFT}}>{children}</div>
);

// 1. Magnetic fields ------------------------------------------------------------
const bar: Extract<MagnetSource, {kind: 'bar'}> = {kind: 'bar', x: 0, y: 0, length: 0.12, width: 0.032, strength: 10};
const wire: Extract<MagnetSource, {kind: 'wire'}> = {kind: 'wire', x: -0.08, y: 0, current: 5};
const loop: Extract<MagnetSource, {kind: 'loop'}> = {kind: 'loop', x: 0, y: 0, radius: 0.05, current: 4};
const solenoid: Extract<MagnetSource, {kind: 'solenoid'}> = {kind: 'solenoid', x: 0, y: 0, radius: 0.032, length: 0.2, turns: 10, current: 2};
const world = {x0: -0.215, x1: 0.215, y0: -0.1, y1: 0.1};
const panels: FieldStage[] = [[70, 215], [990, 215], [70, 670], [990, 670]].map(([x, y]) => ({x, y, w: 860, h: 380, world}));
const magLines = lazy(() => [
	barLines([bar], bar, 11, {bounds: world}),
	fieldLines([wire], wireSeeds(wire, [0.02, 0.038, 0.058, 0.08]), {bounds: world}),
	fieldLines([loop], coilSeeds(loop, 5, 0.72), {bounds: world, step: 0.001, maxSteps: 1500}),
	fieldLines([solenoid], coilSeeds(solenoid, 5, 0.7), {bounds: world, step: 0.001, maxSteps: 1500}),
]);
export const MagneticDemo: React.FC = () => {
	const f = useCurrentFrame(), reveal = ramp(f, 10, 150), lines = magLines();
	const probe = magneticFieldAt([wire], 0.025, 0);
	return (
		<DemoPage title="Magnetic fields from their sources">
			<MagneticFieldView sources={[bar]} lines={lines[0]} stage={panels[0]} reveal={reveal} poles={{north: 'N', south: 'S'}} compasses={[{x: 0.165, y: 0.062}, {x: -0.165, y: -0.062}, {x: 0, y: -0.07}]} />
			<MagneticFieldView sources={[wire]} lines={lines[1]} stage={panels[1]} reveal={reveal} compasses={[{x: 0.025, y: 0}]} />
			<MagneticFieldView sources={[loop]} lines={lines[2]} stage={panels[2]} reveal={reveal} compasses={[{x: 0.15, y: 0}]} />
			<MagneticFieldView sources={[solenoid]} lines={lines[3]} stage={panels[3]} reveal={reveal} compasses={[{x: 0.17, y: 0}, {x: 0, y: 0.075}]} />
			<Caption x={90} y={160}>bar magnet</Caption>
			<Caption x={1010} y={160}>straight wire, current out of the page</Caption>
			<Caption x={90} y={615}>one loop, cut through</Caption>
			<Caption x={1010} y={615}>solenoid, cut through</Caption>
			<SimReadout x={1520} y={330} w={360} title="At the compass" at={150} rows={[{label: 'field', value: probe.b * 1e6, digits: 1, unit: 'μT', tone: 'cool'}]} />
		</DemoPage>
	);
};

// 2. Flux and induction ---------------------------------------------------------
const turning = lazy(() => runInduction({source: {kind: 'rotating', b: 0.2, area: 0.01, frequency: 1}, turns: 100, duration: 2}));
const passing = lazy(() => runInduction({source: {kind: 'magnet', moment: 1, radius: 0.05, position: t => -0.3 + 0.3 * t}, turns: 200, duration: 2, steps: 800}));
export const InductionDemo: React.FC = () => {
	const t = useSeriesTime({at: 10, to: 2, frames: 260});
	const a = inductionAt(turning(), t), b = inductionAt(passing(), t);
	return (
		<DemoPage title="Changing flux makes an emf">
			<RotatingCoilView angle={a.angle} x={90} y={170} w={420} h={270} normalLabel="normal" />
			<MeterNeedle value={a.emf} full={turning().peakEmf} x={590} y={220} size={300} label="emf" />
			<FluxEmfStrips run={turning()} now={t} x={40} y={470} w={900} h={590} whole fluxLabel="flux (mWb)" fluxScale={1000} />
			<MagnetCoilView position={-1 + t} lenz={b.lenz} x={1000} y={170} w={560} h={270} poles={{north: 'N', south: 'S'}} inducedLabel="induced field" />
			<MeterNeedle value={b.emf} full={passing().peakEmf} x={1600} y={220} size={260} label="emf" />
			<FluxEmfStrips run={passing()} now={t} x={980} y={470} w={900} h={590} whole fluxLabel="flux (μWb)" fluxScale={1e6} emfLabel="emf (mV)" emfScale={1000} />
		</DemoPage>
	);
};

// 3. Alternating current, a transformer, and a motor's back emf --------------------
const acParts: Part[] = [
	{id: 's', kind: 'ac', from: 'n', to: 'p', peak: 24, frequency: 0.5},
	{id: 'w1', kind: 'wire', from: 'p', to: 'a'},
	{id: 't', kind: 'transformer', from: 'a', to: 'b', from2: 'c', to2: 'd', turns: [20, 5]},
	{id: 'w2', kind: 'wire', from: 'b', to: 'n'},
	{id: 'w3', kind: 'wire', from: 'c', to: 'e'},
	{id: 'l', kind: 'lamp', from: 'e', to: 'f', r: 3},
	{id: 'w4', kind: 'wire', from: 'f', to: 'd'},
];
const acLayout: CircuitLayout = {
	s: [[0, 4], [0, 0]], w1: [[0, 0], [3, 0]], t: [[3, 0], [3, 4]], w2: [[3, 4], [0, 4]],
	[secondary('t')]: [[4.4, 0], [4.4, 4]], w3: [[4.4, 0], [7.4, 0]], l: [[7.4, 0], [7.4, 4]], w4: [[7.4, 4], [4.4, 4]],
};
const acRun = lazy(() => runCircuit(acParts, [], {frames: 300}));
const acValues = lazy(() => solveAC(acParts));
export const ACDemo: React.FC = () => {
	const run = acRun(), ac = acValues();
	return (
		<DemoPage title="Alternating current through a transformer">
			<CircuitView run={run} layout={acLayout} stage={{x: 230, y: 380, cell: 95}} speed={9}
				labels={{s: {text: 'supply', side: -1}, t: {text: '20 turns'}, [secondary('t')]: {text: '5 turns'}, l: {text: 'lamp', side: -1}}} />
			<CircuitTimeGraph run={run} span={300} x={1000} y={160} w={880} h={470} yLabel="current (A)"
				traces={[{id: 'l', label: 'lamp', signed: true, tone: 'amber'}, {id: 't', label: 'primary', signed: true, tone: 'blue'}]} />
			<SimReadout x={1040} y={660} w={800} title="From the same circuit" rows={[
				{label: 'supply, peak', value: 24, digits: 0, unit: 'V'},
				{label: 'secondary, peak', value: Math.abs(ac.peak.drop[secondary('t')]), digits: 1, unit: 'V', tone: 'amber'},
				{label: 'secondary, r.m.s.', value: ac.rms.drop[secondary('t')], digits: 2, unit: 'V', tone: 'amber'},
				{label: 'lamp, average power', value: ac.power.l, digits: 1, unit: 'W'},
			]} />
		</DemoPage>
	);
};

const motorParts: Part[] = [
	{id: 'b', kind: 'battery', from: 'n', to: 'p', emf: 12},
	{id: 'sw', kind: 'switch', from: 'p', to: 'a', closed: false},
	{id: 'am', kind: 'ammeter', from: 'a', to: 'c'},
	{id: 'm', kind: 'motor', from: 'c', to: 'd', r: 2, k: 0.1, inertia: 0.004, load: 0.1},
	{id: 'w', kind: 'wire', from: 'd', to: 'n'},
];
const motorLayout: CircuitLayout = {b: [[0, 4], [0, 0]], sw: [[0, 0], [3, 0]], am: [[3, 0], [6, 0]], m: [[6, 0], [6, 4]], w: [[6, 4], [0, 4]]};
const motorRun = lazy(() => runCircuit(motorParts, [{at: 30, set: {sw: {closed: true}}}, {at: 200, set: {m: {load: 0.3}}, over: 20}], {frames: 300}));
export const MotorDemo: React.FC = () => {
	const run = motorRun(), {state} = useCircuit(run), speed = state.speed?.m ?? 0;
	return (
		<DemoPage title="A motor pushes back as it spins up">
			<CircuitView run={run} layout={motorLayout} stage={{x: 150, y: 330, cell: 100}} speed={3} labels={{m: {text: 'motor', side: -1}, b: {text: '12 V', side: 1}}} />
			<CircuitTimeGraph run={run} span={300} x={960} y={150} w={920} h={400} traces={[{id: 'm', label: 'current'}]} xLabel="" />
			<CircuitTimeGraph run={run} span={300} x={960} y={540} w={920} h={440} traces={[{id: 'm', quantity: 'speed', label: 'speed', tone: 'teal'}]} yLabel="speed (rad/s)" />
			<SimReadout x={150} y={800} w={640} title="Now" rows={[
				{label: 'current', value: Math.abs(state.current.m), digits: 2, unit: 'A', tone: 'amber'},
				{label: 'back emf', value: 0.1 * speed, digits: 1, unit: 'V', tone: 'red'},
			]} />
		</DemoPage>
	);
};

export const PHYSICS_DEMOS: readonly (readonly [string, React.FC])[] = [
	['SimDemo-MagneticField', MagneticDemo],
	['SimDemo-Induction', InductionDemo],
	['SimDemo-AC', ACDemo],
	['SimDemo-MotorBackEmf', MotorDemo],
];
