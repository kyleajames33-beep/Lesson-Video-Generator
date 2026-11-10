// SimGallery: one silent scene per simulation in src/explainer/sims, as a living catalogue
// and a copy-from example. Not a lesson. Each scene shows the pattern a lesson should follow:
// build the run once, share one clock between the picture, the graph and the readouts.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_HAND, HandText} from '../../kit';
import {FRAME, INK, INK_SOFT, TONES, TYPE} from '../../shared/tokens';
import {BoxConfig, BoxRun, collisionRateAt, rateAt, runBox} from '../../sims/particle-box';
import {MotionPath, runMotion, stateAt} from '../../sims/field-motion';
import {Accent, FeedbackScene, KeyNotesScene, MemoryCard, QuestionScene, WorkedExample} from '../../shared/scenes';
import {BoxCountGraph, FieldMotionView, MotionStage, ParticleBoxView, SimReadout, useBoxFrame, useMotionTime} from '../../sims/views';
import {TrialPace, eventOf, runTrials} from '../../sims/chance';
import {ChanceHistogram, ChanceShareGraph, TrialView, useTrials} from '../../sims/chance-views';
import {Source, Wave, displacement, dopplerFrequency, interferenceAt, standingMode, sumAt, waveSpeed} from '../../sims/waves';
import {FrontStage, WaveStage, WaveStringView, WavefrontView, ringsFrom, useWaveTime} from '../../sims/waves-views';
import {INDICATORS, Pour, Titration, conductivityOf, equivalencePoint, indicatorShare, mixtureAt} from '../../sims/titration';
import {TitrationGraph, TitrationRig, usePour} from '../../sims/titration-views';
import {Part, runCircuit} from '../../sims/circuits';
import {CircuitLayout, CircuitStage, CircuitView, useCircuit} from '../../sims/circuits-views';

export const SCENE_LEN = 360;
/** Compute a run the first time a scene needs it, not when the file is loaded. */
const lazy = <T,>(make: () => T) => { let value: T | undefined; return () => (value ??= make()); };
const Heading: React.FC<{text: string}> = ({text}) => <div style={{position: 'absolute', left: FRAME.margin, top: FRAME.headingTop}}><HandText text={text} at={4} size={TYPE.heading} cps={34} /></div>;
const Note: React.FC<{x: number; y: number; text: string; at?: number; color?: string}> = ({x, y, text, at = 20, color = INK_SOFT}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: x, top: y, opacity: Math.min(1, Math.max(0, (f - at) / 12)), fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color, lineHeight: 1.1, width: 560}}>{text}</div>;
};

// 1. Gas and piston -----------------------------------------------------------
const gas = lazy(() => runBox({seed: 11, frames: SCENE_LEN, w: 800, h: 480, species: [{id: 'gas', r: 5}], initial: [{species: 'gas', count: 150}], volume: [[70, 1], [210, 0.5]]}));
const GasPiston: React.FC = () => {
	const run = gas(), sf = useBoxFrame(run);
	return (
		<>
			<Heading text="Squeeze a gas and the pressure rises" />
			<ParticleBoxView run={run} x={96} y={230} scale={1.3} looks={{gas: {tone: 'blue'}}} />
			<SimReadout x={1290} y={250} w={520} title="Read from the box" rows={[
				{label: 'volume', value: run.wallX[sf] / run.config.w, digits: 2, unit: '× start'},
				{label: 'pressure', value: run.pressure[sf], digits: 2, unit: '× start', tone: 'warm'},
				{label: 'temperature', value: run.temperature[sf], digits: 2, unit: '× start'},
			]} />
			<Note x={1290} y={560} text="Half the space, so each wall is hit about twice as often." at={220} color={TONES.warm.ink} />
		</>
	);
};

// 2. Collision theory ---------------------------------------------------------
const hot = lazy(() => runBox({seed: 4, frames: SCENE_LEN, w: 800, h: 480, species: [{id: 'A', r: 11}, {id: 'B', r: 11}, {id: 'AB', r: 15, mass: 2}],
	initial: [{species: 'A', count: 34}, {species: 'B', count: 34}], reactions: [{from: ['A', 'B'], to: ['AB'], ea: 4}], temperature: [[150, 1], [210, 2.2]]}));
const Collisions: React.FC = () => {
	const run = hot(), sf = useBoxFrame(run);
	return (
		<>
			<Heading text="Only hard enough collisions react" />
			<ParticleBoxView run={run} x={96} y={230} scale={1.3} failed heat looks={{A: {tone: 'blue'}, B: {tone: 'amber'}, AB: {tone: 'green', pair: ['blue', 'amber']}}} />
			<SimReadout x={1290} y={250} w={520} title="Read from the box" rows={[
				{label: 'temperature', value: run.temperature[sf], digits: 1, unit: '× start', tone: 'warm'},
				{label: 'collisions', value: collisionRateAt(run, sf), digits: 0, unit: 'per second'},
				{label: 'product made', value: run.reacted[0][sf], digits: 0, unit: 'particles', tone: 'green'},
			]} />
			<Note x={1290} y={560} text="Grey dashes: a collision without enough energy. Amber ring: a reaction." />
			<Note x={1290} y={720} text="Heat the box and more collisions pass the energy test." at={215} color={TONES.warm.ink} />
		</>
	);
};

// 3. Equilibrium --------------------------------------------------------------
const EQ_FRAMES = 2880;
const eqConfig: BoxConfig = {seed: 3, frames: EQ_FRAMES, w: 640, h: 440, species: [{id: 'A', r: 9}, {id: 'B', r: 9}, {id: 'AB', r: 12, mass: 2}],
	initial: [{species: 'A', count: 55}, {species: 'B', count: 55}], reactions: [{from: ['A', 'B'], to: ['AB'], ea: 1.2}, {from: ['AB'], to: ['A', 'B'], rate: 0.12}],
	inject: [{at: 1680, species: 'A', count: 45}]};
const eq = lazy(() => runBox(eqConfig));
const Equilibrium: React.FC = () => {
	const run: BoxRun = eq(), clock = {rate: EQ_FRAMES / SCENE_LEN}, sf = useBoxFrame(run, clock);
	return (
		<>
			<Heading text="Equilibrium appears, then shifts when A is added" />
			<ParticleBoxView run={run} x={96} y={230} scale={1.15} clock={clock} looks={{A: {tone: 'blue'}, B: {tone: 'amber'}, AB: {tone: 'green', pair: ['blue', 'amber']}}} />
			<BoxCountGraph run={run} x={890} y={220} w={940} h={470} clock={clock} lines={[{species: 'A', tone: 'blue', label: 'A'}, {species: 'B', tone: 'amber', label: 'B'}, {species: 'AB', tone: 'green', label: 'AB'}]} marks={[{f: 1680, label: 'more A added'}]} />
			<SimReadout x={890} y={720} w={940} title="Reactions per second, read from the box" rows={[
				{label: 'forward: A + B makes AB', value: rateAt(run, 0, sf, 240), digits: 1, tone: 'green'},
				{label: 'reverse: AB breaks apart', value: rateAt(run, 1, sf, 240), digits: 1, tone: 'violet'},
			]} />
		</>
	);
};

// 4. Membrane -----------------------------------------------------------------
const MEM_FRAMES = 2160;
const mem = lazy(() => runBox({seed: 5, frames: MEM_FRAMES, w: 800, h: 480, species: [{id: 'water', r: 7}, {id: 'solute', r: 14, mass: 3}],
	initial: [{species: 'water', count: 90, region: 'left'}, {species: 'water', count: 20, region: 'right'}, {species: 'solute', count: 22, region: 'right'}], membrane: {x: 0.5, passes: ['water'], chance: 0.5}}));
const Membrane: React.FC = () => {
	const run = mem(), clock = {rate: MEM_FRAMES / SCENE_LEN}, sf = useBoxFrame(run, clock);
	const water = run.counts[0][sf];
	return (
		<>
			<Heading text="A membrane that only the small particles cross" />
			<ParticleBoxView run={run} x={96} y={230} scale={1.3} clock={clock} looks={{water: {tone: 'cool'}, solute: {tone: 'violet'}}} />
			<SimReadout x={1290} y={250} w={520} title="Small particles" rows={[
				{label: 'left side', value: run.left[0][sf], digits: 0, tone: 'cool'},
				{label: 'right side', value: water - run.left[0][sf], digits: 0, tone: 'cool'},
			]} />
			<Note x={1290} y={500} text="They cross both ways all the time. The net movement is towards the side with fewer of them." />
			<Note x={1290} y={740} text="The large particles never cross." color={TONES.violet.ink} />
		</>
	);
};

// 5. Projectile ---------------------------------------------------------------
const G = 9.8, U = 22, ANGLE = (52 * Math.PI) / 180;
const shot = lazy(() => runMotion({field: {kind: 'uniform', ax: 0, ay: -G}, start: {x: 0, y: 0, vx: U * Math.cos(ANGLE), vy: U * Math.sin(ANGLE)}, duration: (2 * U * Math.sin(ANGLE)) / G, steps: 400}));
const SHOT_STAGE: MotionStage = {x: 96, y: 230, w: 1140, h: 700, pad: 70};
const Projectile: React.FC = () => {
	const path: MotionPath = shot(), clock = {at: 30, seconds: 8}, s = stateAt(path, useMotionTime(path, clock));
	return (
		<>
			<Heading text="Projectile: sideways speed stays, vertical speed changes" />
			<FieldMotionView path={path} stage={SHOT_STAGE} clock={clock} strobe={10} ground={0} body={{tone: 'blue'}} velocity={{tone: 'teal', scale: 9, label: 'v', components: true}} acceleration={{tone: 'red', scale: 9, label: 'g'}} />
			<SimReadout x={1310} y={250} w={510} title="Read from the path" rows={[
				{label: 'time', value: s.t, digits: 2, unit: 's'},
				{label: 'height', value: s.y, digits: 1, unit: 'm'},
				{label: 'sideways speed', value: s.vx, digits: 1, unit: 'm/s', tone: 'teal'},
				{label: 'vertical speed', value: s.vy, digits: 1, unit: 'm/s', tone: 'teal'},
			]} />
			<Note x={1310} y={690} text="Equal time steps: evenly spaced sideways, bunched up near the top." />
		</>
	);
};

// 6. Orbit --------------------------------------------------------------------
// Units chosen so the closest distance is 1 and gm is 1. One full period from the vis-viva equation.
const V_CLOSE = 1.22, SEMI_MAJOR = 1 / (2 - V_CLOSE * V_CLOSE);
const orbit = lazy(() => runMotion({field: {kind: 'central', gm: 1}, start: {x: 1, y: 0, vx: 0, vy: V_CLOSE}, duration: 2 * Math.PI * SEMI_MAJOR ** 1.5, steps: 6000}));
const ORBIT_STAGE: MotionStage = {x: 96, y: 200, w: 1140, h: 760, pad: 60};
const Orbit: React.FC = () => {
	const path = orbit(), clock = {at: 20, seconds: 10}, s = stateAt(path, useMotionTime(path, clock));
	return (
		<>
			<Heading text="Orbit: fastest when closest" />
			<FieldMotionView path={path} stage={ORBIT_STAGE} clock={clock} strobe={24} centre={{r: 0.16, tone: 'teal'}} trail={{whole: true}} body={{tone: 'blue', r: 16}} velocity={{tone: 'teal', scale: 150, label: 'v'}} acceleration={{tone: 'red', scale: 170, label: 'pull'}} />
			<SimReadout x={1310} y={250} w={510} title="Read from the path" rows={[
				{label: 'distance', value: Math.hypot(s.x, s.y), digits: 2, unit: '× closest'},
				{label: 'speed', value: s.speed / V_CLOSE, digits: 2, unit: '× fastest', tone: 'teal'},
			]} />
			<Note x={1310} y={530} text="The strobe images are equal times apart. They spread out near the planet and crowd together far away." />
		</>
	);
};

// 7. Charge in a magnetic field -----------------------------------------------
const Q_M = 1.76e11, B = 2e-3, V = 3e6, RADIUS = V / (Q_M * B);
const spin = lazy(() => runMotion({field: {kind: 'magnetic', qOverM: Q_M, b: B}, start: {x: 0, y: 0, vx: V, vy: 0}, duration: (2 * Math.PI) / (Q_M * B), steps: 2000}));
const SPIN_STAGE: MotionStage = {x: 96, y: 200, w: 1140, h: 760, pad: 120};
const MagneticCircle: React.FC = () => {
	const path = spin(), clock = {at: 20, seconds: 5, loop: true, rest: 0}, s = stateAt(path, useMotionTime(path, clock));
	return (
		<>
			<Heading text="A charge in a magnetic field moves in a circle" />
			<FieldMotionView path={path} stage={SPIN_STAGE} clock={clock} marks={{kind: 'dots', tone: 'grey', gap: 120}} trail={{whole: true}} body={{tone: 'violet', r: 16}} velocity={{tone: 'teal', scale: 5e-5, label: 'v'}} acceleration={{tone: 'red', scale: 1.4e-13, label: 'F'}} />
			<SimReadout x={1310} y={250} w={510} title="Read from the path" rows={[
				{label: 'speed', value: s.speed / 1e6, digits: 2, unit: '× 10⁶ m/s', tone: 'teal'},
				{label: 'radius', value: RADIUS * 1000, digits: 2, unit: 'mm'},
			]} />
			<Note x={1310} y={530} text="The force is always at right angles to the velocity, so the speed never changes. Only the direction does." color={TONES.red.ink} />
		</>
	);
};


// 8. Chance: two dice ---------------------------------------------------------
const DICE_PACE: TrialPace = {at: 20, slow: 5, every: 22, until: 330};
const dice = lazy(() => runTrials({seed: 12, trials: 3000, experiment: {kind: 'dice'}}));
const sevens = lazy(() => eventOf(dice(), v => v === 7));
const DiceHistogram: React.FC = () => {
	const run = dice(), seven = sevens(), shown = useTrials(run, DICE_PACE);
	return (
		<>
			<Heading text="Roll two dice enough times and a pattern settles" />
			<TrialView run={run} shown={shown} x={96} y={214} size={104} />
			<ChanceHistogram run={run} shown={shown} x={96} y={350} w={1000} h={610} event={{inEvent: seven.inEvent, tone: 'amber'}} theory={{at: 150}} xLabel="total of the two dice" />
			<SimReadout x={1170} y={214} w={660} title="Read from the rolls" rows={[
				{label: 'rolls so far', value: shown, digits: 0},
				{label: 'share that total 7', value: seven.share[shown], digits: 3, tone: 'amber'},
				{label: 'exact chance, 6 in 36', value: seven.probability, digits: 3},
			]} />
			<ChanceShareGraph run={run} shown={shown} x={1150} y={520} w={690} h={440} share={seven.share} probability={seven.probability} label="share that total 7" xLabel="number of rolls" />
		</>
	);
};

// 9. One wave, two kinds of particle motion -------------------------------------
const WAVE: Wave = {amplitude: 0.25, wavelength: 2, period: 2};
const waveFn = (x: number, t: number) => displacement(WAVE, x, t);
const TOP_STAGE: WaveStage = {x: 96, y: 236, w: 1140, h: 250, x0: 0, x1: 7, yMax: 0.42};
const LOW_STAGE: WaveStage = {x: 96, y: 650, w: 1140, h: 250, x0: 0, x1: 7, yMax: 0.42};
const WaveParticlesDemo: React.FC = () => {
	const t = useWaveTime({at: 10});
	return (
		<>
			<Heading text="The wave travels along. The particles stay put." />
			<WaveStringView stage={TOP_STAGE} t={t} curves={[{fn: waveFn, tone: 'grey', width: 4, opacity: 0.7}]} particles={{fn: waveFn, count: 30, mode: 'transverse', tone: 'blue', follow: 10}} span={{from: 2.5, to: 4.5, label: 'one wavelength', at: 60}} />
			<WaveStringView stage={LOW_STAGE} t={t} axis={false} particles={{fn: waveFn, count: 42, mode: 'longitudinal', tone: 'teal', follow: 15}} />
			<Note x={1290} y={236} text="Transverse: each particle moves up and down, across the direction the wave travels." color={TONES.blue.ink} />
			<Note x={1290} y={700} text="Longitudinal: each particle moves back and forth, along the direction the wave travels." color={TONES.teal.ink} at={60} />
			<SimReadout x={1290} y={410} w={540} rows={[
				{label: 'wavelength', value: WAVE.wavelength, digits: 1, unit: 'm'},
				{label: 'period', value: WAVE.period, digits: 1, unit: 's'},
				{label: 'wave speed', value: waveSpeed(WAVE), digits: 1, unit: 'm/s'},
			]} />
		</>
	);
};

// 10. Standing wave -------------------------------------------------------------
const MODE = standingMode(6, 3);
const GOING_RIGHT: Wave = {amplitude: 0.2, wavelength: MODE.wavelength, period: 2};
const GOING_LEFT: Wave = {...GOING_RIGHT, direction: -1, phase: Math.PI};
const STAND_STAGE: WaveStage = {x: 120, y: 290, w: 1090, h: 540, x0: 0, x1: 6, yMax: 0.5};
const StandingWaveDemo: React.FC = () => {
	const t = useWaveTime({at: 10});
	return (
		<>
			<Heading text="Two opposite waves add up to a standing wave" />
			<WaveStringView stage={STAND_STAGE} t={t} ends={{left: 'fixed', right: 'fixed'}} nodes={MODE.nodes} antinodes={MODE.antinodes} marksAt={170}
				curves={[
					{fn: (x, time) => displacement(GOING_RIGHT, x, time), tone: 'blue', width: 4, dashed: true},
					{fn: (x, time) => displacement(GOING_LEFT, x, time), tone: 'violet', width: 4, dashed: true},
					{fn: (x, time) => sumAt([GOING_RIGHT, GOING_LEFT], x, time), tone: 'ink', width: 8, at: 60},
				]} />
			<Note x={1290} y={250} text="Blue dashes: a wave going right." color={TONES.blue.ink} />
			<Note x={1290} y={320} text="Violet dashes: its reflection going left." color={TONES.violet.ink} />
			<Note x={1290} y={390} text="Dark line: the two added together at every point." at={60} color={INK} />
			<SimReadout x={1290} y={590} w={540} at={170} rows={[
				{label: 'string length', value: MODE.length, digits: 1, unit: 'm'},
				{label: 'wavelength', value: MODE.wavelength, digits: 1, unit: 'm'},
				{label: 'half-wavelengths that fit', value: MODE.harmonic, digits: 0},
			]} />
		</>
	);
};

// 11. Two sources ---------------------------------------------------------------
const S1: Source = {x: 0.6, y: 1}, S2: Source = {x: 0.6, y: -1};
const RIPPLE = {wavelength: 1, period: 1.5};
const POND: FrontStage = {x: 96, y: 200, w: 1140, h: 770, world: {x0: 0, x1: 10, y0: -3.4, y1: 3.4}};
const TwoSources: React.FC = () => {
	const f = useCurrentFrame(), t = useWaveTime({at: 0});
	const py = 2.9 * Math.sin((Math.max(0, f - 70) / 290) * Math.PI * 2), px = 9;
	const speed = RIPPLE.wavelength / RIPPLE.period;
	const rings = [
		...ringsFrom({source: () => [S1.x, S1.y], speed, period: RIPPLE.period, t: t + 30, maxRadius: 11, tone: 'blue', troughs: false}),
		...ringsFrom({source: () => [S2.x, S2.y], speed, period: RIPPLE.period, t: t + 30, maxRadius: 11, tone: 'teal', troughs: false}),
	];
	const at = interferenceAt(S1, S2, px, py, RIPPLE.wavelength);
	const d1 = Math.hypot(px - S1.x, py - S1.y) / RIPPLE.wavelength, d2 = Math.hypot(px - S2.x, py - S2.y) / RIPPLE.wavelength;
	return (
		<>
			<Heading text="Two sources: in step at some points, out of step at others" />
			<WavefrontView stage={POND} rings={rings} fadeRadius={14}
				paths={[{from: [S1.x, S1.y], to: [px, py], tone: 'blue'}, {from: [S2.x, S2.y], to: [px, py], tone: 'teal'}]}
				points={[{...S1, tone: 'blue', label: 'source 1', labelSide: 'above'}, {...S2, tone: 'teal', label: 'source 2', labelSide: 'below'}, {x: px, y: py, tone: 'amber', label: 'P', labelSide: 'right', r: 16}]} />
			<SimReadout x={1290} y={214} w={540} title="Distances to P, in wavelengths" rows={[
				{label: 'from source 1', value: d1, digits: 2, tone: 'blue'},
				{label: 'from source 2', value: d2, digits: 2, tone: 'teal'},
				{label: 'difference', value: Math.abs(at.wavelengths), digits: 2, tone: 'amber'},
				{label: 'at P the waves', value: at.kind === 'reinforce' ? 'reinforce' : at.kind === 'cancel' ? 'cancel' : 'partly add', tone: at.kind === 'cancel' ? 'red' : at.kind === 'reinforce' ? 'green' : 'grey'},
			]} />
			<Note x={1290} y={660} text="A whole number of wavelengths: crest meets crest, so they reinforce." color={TONES.green.ink} />
			<Note x={1290} y={830} text="A half number: crest meets trough, so they cancel." color={TONES.red.ink} at={120} />
		</>
	);
};

// 12. Doppler effect ------------------------------------------------------------
const SOUND = {speed: 2, period: 0.5, sourceSpeed: 0.5};
const ROAD: FrontStage = {x: 96, y: 200, w: 1140, h: 770, world: {x0: -6, x1: 6, y0: -4.05, y1: 4.05}};
const sourceAt = (t: number): readonly [number, number] => [-3.4 + SOUND.sourceSpeed * t, 0];
const Doppler: React.FC = () => {
	const t = useWaveTime({at: 0}), [sx] = sourceAt(t);
	const rings = ringsFrom({source: sourceAt, speed: SOUND.speed, period: SOUND.period, t, maxRadius: 10, tone: 'violet', troughs: false});
	const f0 = 1 / SOUND.period;
	return (
		<>
			<Heading text="A moving source squeezes the waves in front of it" />
			<WavefrontView stage={ROAD} rings={rings} fadeRadius={9}
				points={[{x: sx, y: 0, tone: 'violet', label: 'source', labelSide: 'above', r: 16}, {x: 5.4, y: 0, tone: 'warm', label: 'in front', labelSide: 'below'}, {x: -5.4, y: 0, tone: 'cool', label: 'behind', labelSide: 'below'}]} />
			<SimReadout x={1290} y={214} w={540} title="Waves arriving each second" rows={[
				{label: 'sent by the source', value: f0, digits: 2, tone: 'violet'},
				{label: 'in front', value: dopplerFrequency({frequency: f0, waveSpeed: SOUND.speed, sourceSpeed: SOUND.sourceSpeed}), digits: 2, tone: 'warm'},
				{label: 'behind', value: dopplerFrequency({frequency: f0, waveSpeed: SOUND.speed, sourceSpeed: -SOUND.sourceSpeed}), digits: 2, tone: 'cool'},
			]} />
			<Note x={1290} y={600} text="Each crest is a circle centred where the source was when it sent it." />
			<Note x={1290} y={790} text="In front the circles crowd together, so more arrive each second." at={120} color={TONES.warm.ink} />
		</>
	);
};

// 13. Titration: weak acid, strong base ------------------------------------------
const WEAK: Titration = {analyte: {kind: 'acid', concentration: 0.1, k: 1.8e-5, volume: 25}, titrant: {kind: 'base', concentration: 0.1}};
const WEAK_POUR: Pour = [[20, 0], [150, 21], [215, 24.6], [275, 25.4], [345, 36]];
const WEAK_END = equivalencePoint(WEAK);
const TitrationDemo: React.FC = () => {
	const {added, flow} = usePour(WEAK_POUR), m = mixtureAt(WEAK, added);
	const pink = indicatorShare(INDICATORS.phenolphthalein, m.pH);
	return (
		<>
			<Heading text="Weak acid, strong base: the pH leaps at the end" />
			<TitrationRig titration={WEAK} added={added} flow={flow} x={96} y={200} indicator={INDICATORS.phenolphthalein} />
			<TitrationGraph titration={WEAK} added={added} x={500} y={200} w={760} h={720} to={40} indicator={{indicator: INDICATORS.phenolphthalein, at: 30}} half={{}} equivalence={{}} />
			<SimReadout x={1310} y={214} w={520} title="Read from the flask" rows={[
				{label: 'base added', value: added, digits: 2, unit: 'mL'},
				{label: 'pH', value: m.pH, digits: 2, tone: 'teal'},
				{label: 'flask colour', value: pink < 0.05 ? 'colourless' : pink < 0.6 ? 'pale pink' : 'pink', tone: pink < 0.05 ? 'grey' : 'red'},
			]} />
			<Note x={1310} y={560} text={`Equivalence at ${WEAK_END.volume.toFixed(1)} mL, pH ${WEAK_END.pH.toFixed(1)}: above 7, so the indicator must change above 7.`} at={280} />
		</>
	);
};

// 14. Conductivity titration: strong acid, strong base ----------------------------
const STRONG: Titration = {analyte: {kind: 'acid', concentration: 0.1, volume: 25}, titrant: {kind: 'base', concentration: 0.1}};
const STRONG_POUR: Pour = [[20, 0], [340, 45]];
const ConductivityDemo: React.FC = () => {
	const {added, flow} = usePour(STRONG_POUR), m = mixtureAt(STRONG, added);
	return (
		<>
			<Heading text="Conductivity falls, turns, then rises" />
			<TitrationRig titration={STRONG} added={added} flow={flow} x={96} y={200} />
			<TitrationGraph titration={STRONG} added={added} x={500} y={200} w={760} h={720} to={50} quantity="conductivity" tone="violet" yLabel="conductivity (mS/cm)" equivalence={{label: 'turning point: equivalence'}} />
			<SimReadout x={1310} y={214} w={520} title="In the flask (mol/L)" rows={[
				{label: 'H⁺', value: m.h, digits: 3, tone: 'red'},
				{label: 'OH⁻', value: m.oh, digits: 3, tone: 'blue'},
				{label: 'conductivity', value: conductivityOf(STRONG, m), digits: 1, unit: 'mS/cm', tone: 'violet'},
			]} />
			<Note x={1310} y={560} text="First, fast hydrogen ions are swapped for slower sodium ions, so the line falls." />
			<Note x={1310} y={760} text="After equivalence, spare hydroxide ions build up, so it rises." at={200} color={TONES.blue.ink} />
		</>
	);
};

// 15. Circuit: a second path opens ------------------------------------------------
const LAMPS: Part[] = [
	{id: 'battery', kind: 'battery', from: 'N', to: 'P', emf: 12},
	{id: 'meter', kind: 'ammeter', from: 'P', to: 'a'},
	{id: 'lamp1', kind: 'lamp', from: 'a', to: 'j1', r: 4},
	{id: 'lamp2', kind: 'lamp', from: 'j1', to: 'j2', r: 6},
	{id: 'switch', kind: 'switch', from: 'j1', to: 'c', closed: false},
	{id: 'lamp3', kind: 'lamp', from: 'c', to: 'j2', r: 6},
	{id: 'back', kind: 'wire', from: 'j2', to: 'N'},
];
const LAMP_LAYOUT: CircuitLayout = {
	battery: [[0, 4], [0, 0]], meter: [[0, 0], [3, 0]], lamp1: [[3, 0], [6, 0]], lamp2: [[6, 0], [6, 4]],
	switch: [[6, 0], [9, 0], [9, 1]], lamp3: [[9, 1], [9, 4], [6, 4]], back: [[6, 4], [0, 4]],
};
const LAMP_STAGE: CircuitStage = {x: 150, y: 330, cell: 116};
const lamps = lazy(() => runCircuit(LAMPS, [{at: 170, set: {switch: {closed: true}}}]));
const CircuitDemo: React.FC = () => {
	const run = lamps(), {state} = useCircuit(run);
	return (
		<>
			<Heading text="Close the switch: a second path opens" />
			<CircuitView run={run} layout={LAMP_LAYOUT} stage={LAMP_STAGE} junctions={[[6, 0], [6, 4]]} lampFull={12}
				labels={{battery: {text: '12 V', side: 1}, lamp1: {text: 'lamp 1'}, lamp2: {text: 'lamp 2', side: 1}, lamp3: {text: 'lamp 3', side: 1}, switch: {text: 'switch'}}} />
			<SimReadout x={1330} y={214} w={500} title="Current (A)" rows={[
				{label: 'from the battery', value: state.current.battery, digits: 2, tone: 'amber'},
				{label: 'through lamp 2', value: state.current.lamp2, digits: 2},
				{label: 'through lamp 3', value: state.current.lamp3, digits: 2},
			]} />
			<Note x={1330} y={560} text="Each dot is charge. Faster dots mean a larger current." />
			<Note x={1330} y={730} text="Two paths side by side resist less than one, so the battery current rises and lamp 1 brightens." at={190} color={TONES.amber.ink} />
		</>
	);
};

// 16. Circuit: voltage shared in series -------------------------------------------
const SHARE: Part[] = [
	{id: 'battery', kind: 'battery', from: 'N', to: 'P', emf: 12},
	{id: 'r1', kind: 'resistor', from: 'P', to: 'm', r: 2},
	{id: 'r2', kind: 'resistor', from: 'm', to: 'q', r: 4},
	{id: 'back', kind: 'wire', from: 'q', to: 'N'},
	{id: 'v1', kind: 'voltmeter', from: 'P', to: 'm'},
	{id: 'v2', kind: 'voltmeter', from: 'm', to: 'q'},
];
const SHARE_LAYOUT: CircuitLayout = {
	battery: [[0, 3], [0, 0]], r1: [[0, 0], [4, 0]], r2: [[4, 0], [8, 0]], back: [[8, 0], [8, 3], [0, 3]],
	v1: [[0.6, 0], [0.6, -1.5], [3.4, -1.5], [3.4, 0]], v2: [[4.6, 0], [4.6, -1.5], [7.4, -1.5], [7.4, 0]],
};
const SHARE_STAGE: CircuitStage = {x: 170, y: 520, cell: 124};
const share = lazy(() => runCircuit(SHARE));
const SeriesShareDemo: React.FC = () => {
	const run = share(), {state} = useCircuit(run);
	return (
		<>
			<Heading text="In series, the bigger resistance takes the bigger share" />
			<CircuitView run={run} layout={SHARE_LAYOUT} stage={SHARE_STAGE} potential={{max: 12}}
				junctions={[[0.6, 0], [3.4, 0], [4.6, 0], [7.4, 0]]}
				labels={{battery: {text: '12 V', side: 1}, r1: {text: '2 Ω', side: 1}, r2: {text: '4 Ω', side: 1}}} />
			<SimReadout x={1330} y={214} w={500} title="Read from the circuit" rows={[
				{label: 'current, everywhere', value: state.current.r1, digits: 1, unit: 'A'},
				{label: 'across 2 Ω', value: state.drop.r1, digits: 1, unit: 'V', tone: 'warm'},
				{label: 'across 4 Ω', value: state.drop.r2, digits: 1, unit: 'V', tone: 'cool'},
			]} />
			<Note x={1330} y={540} text="Wire colour shows potential: warm is 12 V, cool is 0 V. It only changes across a resistor." />
			<Note x={1330} y={800} text="4 V + 8 V = 12 V: the shares add up to the battery voltage." at={120} />
		</>
	);
};

// 17 to 20. The shared scene parts (src/explainer/shared/scenes.tsx), with simulations as their pictures ----
const ACCENT = TONES.teal.ink;
// The picture stops at the top of the flight, so its last readout is the answer being worked out.
const rise = lazy(() => runMotion({field: {kind: 'uniform', ax: 0, ay: -G}, start: {x: 0, y: 0, vx: U * Math.cos(ANGLE), vy: U * Math.sin(ANGLE)}, duration: (U * Math.sin(ANGLE)) / G, steps: 300}));
const WORK_STAGE: MotionStage = {x: 0, y: 0, w: 688, h: 440, pad: 60};
const WORK_CLOCK = {at: 40, seconds: 6.5};
const WorkedPicture: React.FC = () => {
	const path = rise(), s = stateAt(path, useMotionTime(path, WORK_CLOCK));
	return (
		<>
			<FieldMotionView path={path} stage={WORK_STAGE} clock={WORK_CLOCK} strobe={6} ground={0} body={{tone: 'blue', r: 14}} velocity={{tone: 'teal', scale: 6, components: true}} />
			<SimReadout x={0} y={470} w={688} title="Read from the path" rows={[
				{label: 'height', value: s.y, digits: 1, unit: 'm'},
				{label: 'vertical speed', value: s.vy, digits: 1, unit: 'm/s', tone: 'teal'},
			]} />
		</>
	);
};
const WorkedDemo: React.FC = () => (
	<Accent color={ACCENT}>
		<WorkedExample heading="Worked example: how high does it go?" task="A ball is kicked at 22 m/s, 52° above the ground. Find its greatest height."
			givens={[{label: 'u', value: '22', unit: 'm/s', tone: 'teal'}, {label: 'θ', value: '52°', tone: 'amber'}, {label: 'g', value: '9.8', unit: 'm/s²', tone: 'red'}]}
			equation={{content: 'v² = u² + 2as'}}
			steps={[
				{at: 40, content: 'u (vertical) = 22 × sin 52° = 17.3 m/s', note: 'only the vertical part lifts the ball', uses: [0, 1]},
				{at: 120, content: 'at the top: v (vertical) = 0', note: 'it stops rising for an instant'},
				{at: 190, content: '0 = 17.3² − 2 × 9.8 × h', note: 'going up against g, so a = −9.8', uses: [2]},
			]}
			answer={{at: 260, content: 'h = 15.3 m'}}
			slip={{at: 300, content: '22² ÷ (2 × 9.8) = 24.7 m', why: 'used the full speed, not its vertical part'}}
			picture={<WorkedPicture />} />
	</Accent>
);
const QuestionDemo: React.FC = () => (
	<Accent color={ACCENT}>
		<QuestionScene marks={3} pauseAt={110} hold={{startFrame: 150, endFrame: 330}} picture={<ParticleBoxView run={gas()} x={0} y={30} scale={0.74} looks={{gas: {tone: 'blue'}}} />}>
			A fixed amount of gas is squeezed into half its volume at constant temperature. Explain, using the motion of the particles, why the pressure rises.
		</QuestionScene>
	</Accent>
);
const FeedbackDemo: React.FC = () => (
	<Accent color={ACCENT}>
		<FeedbackScene answer={{at: 20, content: 'Pressure doubles: twice as many wall hits each second'}}
			reasons={[{at: 80, content: 'Same particles in half the space, so each one reaches a wall sooner.'}, {at: 150, content: 'Same temperature, so each hit is just as hard as before.'}]}
			mistake={{at: 230, content: 'the particles speed up', why: 'the temperature did not change'}}
			picture={<ParticleBoxView run={gas()} x={0} y={30} scale={0.74} looks={{gas: {tone: 'blue'}}} />} />
	</Accent>
);
const NotesDemo: React.FC = () => (
	<Accent color={ACCENT}>
		<KeyNotesScene notes={[
			{at: 10, content: 'Gas pressure comes from particles hitting the walls.'},
			{at: 26, content: 'Smaller volume: more hits each second, higher pressure.'},
			{at: 42, content: 'Higher temperature: faster particles, harder and more frequent hits.'},
			{at: 58, content: 'At constant temperature, P × V stays the same.'},
			{at: 74, content: 'Halve the volume and the pressure doubles.'},
		]} aid={<MemoryCard at={90} main="Squeeze the space, crowd the walls." sub="Half the volume, double the pressure (same temperature)." />} />
	</Accent>
);

export const GALLERY_SCENES: Record<string, React.FC> = {
	'gas-piston': GasPiston,
	'collisions': Collisions,
	'equilibrium': Equilibrium,
	'membrane': Membrane,
	'projectile': Projectile,
	'orbit': Orbit,
	'magnetic-circle': MagneticCircle,
	'dice-histogram': DiceHistogram,
	'wave-particles': WaveParticlesDemo,
	'standing-wave': StandingWaveDemo,
	'two-sources': TwoSources,
	'doppler': Doppler,
	'titration': TitrationDemo,
	'conductivity': ConductivityDemo,
	'circuit-paths': CircuitDemo,
	'circuit-series': SeriesShareDemo,
	'worked-example': WorkedDemo,
	'question': QuestionDemo,
	'feedback': FeedbackDemo,
	'key-notes': NotesDemo,
};
