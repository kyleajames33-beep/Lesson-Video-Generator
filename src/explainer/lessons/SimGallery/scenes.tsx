// SimGallery: one silent scene per simulation in src/explainer/sims, as a living catalogue
// and a copy-from example. Not a lesson. Each scene shows the pattern a lesson should follow:
// build the run once, share one clock between the picture, the graph and the readouts.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_HAND, HandText} from '../../kit';
import {FRAME, INK_SOFT, TONES, TYPE} from '../../shared/tokens';
import {BoxConfig, BoxRun, collisionRateAt, rateAt, runBox} from '../../sims/particle-box';
import {MotionPath, runMotion, stateAt} from '../../sims/field-motion';
import {Accent, FeedbackScene, KeyNotesScene, MemoryCard, QuestionScene, WorkedExample} from '../../shared/scenes';
import {BoxCountGraph, FieldMotionView, MotionStage, ParticleBoxView, SimReadout, useBoxFrame, useMotionTime} from '../../sims/views';

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


// 8 to 11. The shared scene parts (src/explainer/shared/scenes.tsx), with simulations as their pictures ----
const ACCENT = TONES.teal.ink;
const WORK_STAGE: MotionStage = {x: 1180, y: 250, w: 650, h: 560, pad: 50};
const WorkedDemo: React.FC = () => (
	<Accent color={ACCENT}>
		<WorkedExample heading="Worked example: how high does it go?" task="A ball is kicked at 22 m/s, 52° above the ground. Find its greatest height."
			givens={[{label: 'u', value: '22', unit: 'm/s', tone: 'teal'}, {label: 'θ', value: '52°', tone: 'amber'}, {label: 'g', value: '9.8', unit: 'm/s²', tone: 'red'}]}
			steps={[
				{at: 40, content: 'vertical part: 22 × sin 52° = 17.3 m/s', note: 'only the vertical part lifts the ball'},
				{at: 120, content: 'at the top: vertical speed = 0'},
				{at: 190, content: '0 = 17.3² − 2 × 9.8 × h', note: 'v² = u² + 2as, going up against g'},
			]}
			answer={{at: 260, content: 'h = 15.3 m'}}
			slip={{at: 300, content: '22² ÷ (2 × 9.8) = 24.7 m', why: 'used the full speed, not its vertical part'}} />
		<FieldMotionView path={shot()} stage={WORK_STAGE} clock={{at: 40, seconds: 7}} strobe={8} ground={0} body={{tone: 'blue', r: 14}} velocity={{tone: 'teal', scale: 6, components: true}} />
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
			{at: 50, content: 'Smaller volume: more hits each second, higher pressure.'},
			{at: 90, content: 'Higher temperature: faster particles, harder and more frequent hits.'},
			{at: 130, content: 'At constant temperature, P × V stays the same.'},
			{at: 170, content: 'Halve the volume and the pressure doubles.'},
		]} aid={<MemoryCard at={200} main="Squeeze the space, crowd the walls." sub="Half the volume, double the pressure (same temperature)." />} />
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
	'worked-example': WorkedDemo,
	'question': QuestionDemo,
	'feedback': FeedbackDemo,
	'key-notes': NotesDemo,
};
