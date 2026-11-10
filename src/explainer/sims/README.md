# Explainer simulations

Reusable simulations for explainer videos. Started 10 November 2026 by Claude (root).

They exist so that a lesson can show something a still picture cannot: particles really colliding, an equilibrium really settling, a body really following its path, with numbers on screen that are read from the same motion.

## Rules for everything in this folder

1. **No course wording inside.** A simulation takes its labels, colours, numbers and units from the lesson. Nothing here says "HSC", "Module 5" or names a syllabus. The same particle box serves Year 11 Chemistry, Year 12 Physics, A-level or GAMSAT revision.
2. **Engine and drawing are separate.** `particle-box.ts` and `field-motion.ts` are plain TypeScript with no React, tested in node. `views.tsx` draws them.
3. **Compute once, read many times.** An engine computes the whole run from a seed or a start state. The picture, the graph and the readouts all read that one run with the same clock, so they cannot disagree.
4. **Deterministic.** No `Math.random()`, no state carried between frames. Remotion renders frames in any order, so the state at a frame must depend only on the config.
5. **Sizes and colours come from `../shared/tokens.ts`.** Text meets the build gate by default.
6. **Each simulation has physics tests** in `scripts/explainer-sims.test.mjs` (`npm run test:explainer-sims`). A simulation that shows wrong science is worse than none.

## What is here

### Particle box (`particle-box.ts`)

Particles in a container. One engine covers:

| Idea | How to set it up |
| --- | --- |
| Kinetic theory, gas pressure | one species, small radius (about 5 px) |
| Boyle's law | `volume` timeline (the right wall is a piston) |
| Pressure and temperature | `temperature` timeline |
| Collision theory, activation energy | a two-particle reaction with `ea`; draw with `failed` to show collisions that lacked energy |
| Rate and temperature or concentration | raise `temperature`, or `inject` particles at a cue |
| Dynamic equilibrium | a forward two-particle reaction plus a reverse one-particle reaction |
| Disturbing an equilibrium | `inject` or `remove` at a cue, or change `volume` or `temperature` |
| Diffusion, osmosis | a `membrane` that passes only some species |

Read from the run: `counts`, `left` (per side), `pressure`, `temperature`, `collisions`, `reacted`, `events`. Helpers: `countAt`, `rateAt`, `collisionRateAt`.

Things to know:
- It is a qualitative model. Report relative values ("× start"), not kPa or mol/L, unless the lesson has checked that the numbers mean what it says.
- Large particles behave like a real gas, not an ideal one: with 10% of the area filled, the pressure reads about 25% high. For gas-law scenes use a radius of about 3 to 5 px. The tests pin this.
- Equilibrium counts wobble, as real ones do. `BoxCountGraph` smooths the line; use a few dozen particles of each species or more.
- A one-particle reaction with `ea` speeds up as temperature rises, so heating shifts an equilibrium towards the side that reaction makes.

### Field motion (`field-motion.ts`)

One body under a force law, in SI units: `uniform` (projectiles, a charge between plates), `central` (orbits), `magnetic` (a charge circling in a field), or `custom`. `stateAt(path, t)` gives position, velocity, acceleration and speed. Tests check it against the textbook range and height formulas, circular and elliptical orbits (energy and angular momentum conserved), r = mv/qB, and the parabola between plates.

### Chance (`chance.ts`, drawing in `chance-views.tsx`)

The same random experiment repeated many times, stored once, with the exact probabilities worked out beside it.

| Idea | How to set it up |
| --- | --- |
| Sample space and sums of dice | `{kind: 'dice', dice: 2}` |
| Binomial distribution, expected value | `{kind: 'coins', coins: n, p}` (the outcome is the number of successes) |
| Spinners, lollies in a bag, offspring ratios such as 3 : 1 | `{kind: 'weighted', outcomes: [{label, weight}]}` |
| Relative frequency settling on the probability | `eventOf(run, value => ...)` gives the exact chance and the running share |

- `trialsShown(run, frame, pace)` (or `useTrials`) shows a few trials slowly, then speeds up. Use one pace for every part.
- `TrialView` draws the latest dice, coins or label. `ChanceHistogram` grows the tally, can colour an event and can mark the expected count on every bar. `ChanceShareGraph` draws the running share against the exact chance.
- Choose a seed whose first few slow trials are not misleading (for example, not two 7s in a row).
- For everyday Maths anchors, change the labels and the wording, not the engine.

### Waves (`waves.ts`, drawing in `waves-views.tsx`)

Every wave is a formula of place and time, so there is nothing to pre-compute.

| Idea | What to use |
| --- | --- |
| Wavelength, period, speed; transverse and longitudinal motion | `displacement(wave, x, t)` with `WaveStringView` particles in either mode |
| Superposition of waves or pulses | `sumAt`, `pulseAt`, several `curves` in one `WaveStringView` |
| Standing waves on strings and in pipes | `standingMode(length, harmonic, ends)` for wavelength, nodes and antinodes |
| Two-source interference, double slit | `interferenceAt`, `pathDifference`, `brightAngles`, `doubleSlitBrightness`, drawn with `WavefrontView` |
| Doppler effect | `wavefronts` or `ringsFrom` with a moving source, `dopplerFrequency` |
| Refraction, total internal reflection | `refractionAngle`, `criticalAngle` (numbers only; draw the rays in the lesson) |

- `useWaveTime({at, rate})` is the one clock. Real sound and light are far too fast to watch: pick a slow model wave and say so, or use a tiny `rate`.
- In longitudinal mode the particle shift is drawn to the same scale as position, so keep amplitude below about wavelength / 7 or neighbours overlap.

### Drawing (`views.tsx`)

- `ParticleBoxView`, `BoxCountGraph`, `useBoxFrame(run, clock)`.
- `FieldMotionView` (trail, strobe images, velocity and acceleration arrows with optional components, ground line, central body, field dots or crosses), `useMotionTime(path, clock)`, `motionScale(path, stage)` for placing your own labels.
- `SimReadout`: a live readout board for any numbers.

## How to use one in a lesson

Copy the nearest scene from `../lessons/SimGallery/scenes.tsx`. The pattern is always:

```tsx
const run = lazy(() => runBox({seed: 3, frames: 2880, ...}));   // once, outside the component

const Scene: React.FC = () => {
	const clock = {at: cue.start, rate: 4};                      // one clock
	const sf = useBoxFrame(run(), clock);                        // the simulation frame now
	return <>
		<ParticleBoxView run={run()} clock={clock} ... />
		<BoxCountGraph run={run()} clock={clock} ... />
		<SimReadout rows={[{label: 'pressure', value: run().pressure[sf]}]} ... />
	</>;
};
```

- Set `frames` to cover the whole time the box is on screen (scene frames × `rate`).
- Tie events to narration: put the inject frame, the piston move or the temperature rise at the simulation frame that matches the word cue (`(cueFrame - clock.at) × rate`).
- Choose the seed by looking: try three or four and keep the run that shows the idea most clearly at the cue. Then leave it.
- A simulation is not a plate. Organisms, apparatus and real objects still get painted plates; the simulation shows the particles or the path.

To see them all, grade the gallery: `npm run grade:explainer -- SimGallery --frames 32`. The sheet lands in `out/explainer/SimGallery/grade/`. It should pass.

## Wanted next

Listed by how many unbuilt designs could use them (Year 11 Chemistry, Year 12 Physics, Year 11 Physics):

1. Titration and pH curve with a burette drip and a live curve.
2. Circuits: charge flow with live current and voltage readouts.
3. States of matter and heating curves (needs attraction between particles in the box).
4. Momentum: two-body collisions on a track with before and after bars.
5. Allele frequency drift and selection across generations.
6. Ray diagrams for refraction and lenses (the numbers are already in `waves.ts`).

Built on 10 November 2026: waves, and chance (dice, coins and weighted draws filling a histogram).
