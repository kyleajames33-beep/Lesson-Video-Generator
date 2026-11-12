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

### Titration (`titration.ts`, drawing in `titration-views.tsx`)

The flask after any volume from the burette: pH, every particle's concentration and the conductivity, all from one charge-balance sum. Strong and weak acids and bases use the same code.

| Idea | What to use |
| --- | --- |
| Shape of a titration curve (strong or weak, acid or base in the flask) | `{analyte: {kind, concentration, k?, volume}, titrant: {kind, concentration, k?}}`, drawn with `TitrationGraph` |
| Equivalence point and why its pH is not always 7 | `equivalencePoint`, and `mixtureAt` for what is left in the flask |
| Buffer region, pH = pKa half-way | `halfEquivalence`, the `half` marker on the graph |
| Choosing an indicator | `INDICATORS`, `indicatorFit` (does its range sit in the steep part, and how early it finishes), the `indicator` band on the graph |
| Conductivity titration | `conductivityAt`, or `TitrationGraph quantity="conductivity"` |

- Leave `k` out for a strong acid or base. Give Ka for a weak acid and Kb for a weak base. One H⁺ or OH⁻ per particle only.
- `usePour(keyframes)` is the one clock: it gives the volume added and the flow at the current frame. Put keyframes close together in volume near the end point so the last drops go in slowly.
- `TitrationRig` is a line diagram of the burette and flask whose level, drops and flask colour follow the same volume. Over a painted plate of real glassware, pass `outline={false}` and it draws only the liquids.
- `indicatorFit` calls an indicator suitable when its whole range lies between the pH values 2% before and 2% after equivalence. Check the result against the lesson's own claim before narrating it.

### Circuits (`circuits.ts`, drawing in `circuits-views.tsx`)

Direct-current circuits solved from Kirchhoff's laws: name the junctions, list the parts that join them, and read off every current, voltage and power.

| Idea | What to use |
| --- | --- |
| Current as moving charge; the same current all round a series loop | `CircuitView`: evenly spaced charges whose speed follows the current |
| Voltage shared in series, current shared in parallel | `solveCircuit` or `runCircuit`, then `state.drop` and `state.current`; `potential` colours each wire by its voltage |
| Closing a switch, changing a resistance | `runCircuit(parts, [{at, set}])`; lamps change brightness and charges change speed without jumping |
| Internal resistance, terminal voltage | a battery with `r`; read `state.terminal` |
| Meters | `ammeter` in the line, `voltmeter` across a part; each shows its own reading |

- A battery's `from` is its negative terminal. Currents are conventional and positive from `from` to `to`. Use `carriers="electrons"` to show the charges moving the other way.
- `layout` gives each part's route on a grid as corner points from its `from` end. The symbol sits in the middle of the longest straight stretch.
- Where no current flows the charges stay on the wire and sit still. That is correct, and worth saying in narration.
- Symbols follow exam-paper conventions (rectangle resistor, crossed-circle lamp). This part only draws diagrams, not real equipment.

Added 13 November 2026 (Year 11 Physics gaps):

| Idea | What to use |
| --- | --- |
| Motors, variable resistors, coils in a circuit | kinds `motor` (circle with M), `rheostat` (rectangle with a diagonal arrow), `coil` (four loops); each is its resistance `r` |
| Real meters disturb the circuit | `ammeter` with a small `r`, `voltmeter` with a large `r`; both are solved as part of the circuit, so the readings show the loading effect |
| Naming a wire | `labels` now works on `wire` parts too |
| Turning a rheostat, a battery running down | a change with `over` (frames): `{at, set: {v: {r: 4}}, over: 110}` moves the value smoothly (`ease: 'linear'` or the default `'smooth'`) |
| Closing a switch, adding a part mid-run | a change at a frame: `{s: {closed: true}}`, or a part listed with `present: false` and later `{m: {present: true}}` (not drawn until then) |
| Current against time | `CircuitTimeGraph` with `traces: [{id, quantity?, label, tone}]` and `span` (circuit frames on the axis); a switch shows as an upright step, a ramp as a slope |

- A motor and a coil are their resistance only: no back EMF and no self-induction. Do not use them to show a motor slowing the current as it speeds up, or a coil delaying the current.
- Ramps of the same value should not overlap; a ramp is solved once per frame.

Added 14 November 2026 (Year 12 Physics gaps):

| Idea | What to use |
| --- | --- |
| An alternating supply | kind `ac` with `peak`, `frequency` (a slow model value, about 0.5 Hz) and `phase`; `runCircuit(parts, changes, {frames})` solves every frame, so the charges surge back and forth |
| Peak and r.m.s. readouts, average power | `solveAC(parts)`: `peak` (a full solved state), `rms.current`, `rms.drop`, `power`; `rmsOf`, `peakOf` |
| An ideal transformer | kind `transformer` with `from`, `to` (primary), `from2`, `to2` (secondary) and `turns: [primary, secondary]`; its secondary values are listed under `secondary(id)` |
| Transformer numbers without a circuit | `idealTransformer({primaryVoltage, turns, load})` |
| Why power is sent at high voltage | `lineLoss(power, voltage, lineResistance)`, or a circuit with a step-up transformer, a line resistor and a step-down transformer |
| A motor that draws less current as it speeds up | kind `motor` with `k` (volts per rad/s), `inertia`, `load`, `friction`; read `state.speed`, `state.mech`; change `load` or `jammed` at a frame |
| Motor numbers without a run | `motorSteady({voltage, r, k, load})`: speed, current, back emf, stall current |
| A signed trace (alternating current), or a motor's speed | `CircuitTimeGraph` trace with `signed: true`, or `quantity: 'speed'` |

- The circuit is still resistances only. With no capacitors and no self-induction, an alternating circuit at any instant is a direct one at that instant's voltage, which is exactly how it is solved. A coil still does not delay its current.
- A transformer links its windings only for an alternating source. To a battery each winding is a wire, so a steady current in the primary gives nothing in the secondary. Mixed circuits are handled by `solveMixed` (the steady and alternating parts are solved separately and added).
- The transformer is ideal. Add winding resistances with `r` and `r2`, or a series resistor, to show copper loss. Core losses are not modelled.
- In `CircuitView` a transformer called `t` needs two routes in the layout: `t` and `secondary('t')`, drawn as two parallel stretches side by side. Label each winding under the same two names.
- A motor without `k` is its resistance alone, exactly as before.

### Two-step titrations (in `titration.ts`)

Give `k2` for a particle that gives or takes two H⁺. Everything else stays the same, and one-step titrations give exactly the results they did.

| Idea | What to use |
| --- | --- |
| Carbonate titrated with hydrochloric acid (two end points) | analyte `{kind: 'base', k: Kw / Ka2, k2: Kw / Ka1, ...}`; `equivalenceVolumes` gives both, the second at twice the first |
| A weak acid with two H⁺ (H₂A) titrated with a strong base | analyte `{kind: 'acid', k: Ka1, k2: Ka2, ...}` |
| Sulfuric acid in the burette | titrant `{kind: 'acid', k2: 1.2e-2}` (first step strong): the equivalence volume halves |
| The two buffer regions, pH = pKa at each half-way | `halfEquivalences` (each with its `pKa` and `step`) |
| Which form is in the flask | `mixtureAt(t, v).base.forms` (B, BH⁺, BH₂²⁺, for carbonate CO₃²⁻, HCO₃⁻, H₂CO₃) or `.acid.forms` |
| Choosing an indicator for one end point | `indicatorFit(t, indicator, 0.02, volume)` and `steepSection(t, share, volume)` take the end point's volume |

- `equivalenceVolume` and `equivalencePoint` give the last end point (the flask fully reacted). `halfEquivalence` gives the first weak step.
- `TitrationGraph` marks every end point and half-way point. Give `equivalence.label` and `half.label` as lists for one label each.
- The pH at a half-way point sits close to the pKa, not exactly on it, when the two pKa values are near each other or the solution is dilute. The tests allow 0.1.
- Conductivity of a two-step mixture is a rough guide only.

### Population (`population.ts`, drawing in `population-views.tsx`)

Populations over generations or time, worked out once. Drift is seeded.

| Idea | What to use |
| --- | --- |
| Genetic drift, several populations side by side | `runAlleles({p0, n, generations, lines, seed})` (n diploid individuals, 2n gene copies drawn each generation); `fixedAt`, `fixedTo` |
| Natural selection, with or without drift | add `fitness: {AA, Aa, aa}`; leave `n` out for the deterministic curve; `run.expected` is always the no-drift curve; `selectionStep`, `meanFitness` |
| Logistic growth to a carrying capacity | `runLogistic({n0, r, k, to, form: 'continuous' or 'discrete'})`; `rate` is rN(1 − N/K); `logisticAt` is the exact curve |
| Predator and prey cycles | `runPredatorPrey({prey0, predators0, preyGrowth, predation, conversion, predatorDeath, to})`, stepped with RK4; `lotkaBalance`, `lotkaSmallPeriod`, `lotkaInvariant` |

- Drawing: `AlleleGraph` (every line, optional dashed `expected` curve and `start` level), `GrowthGraph` (K and K/2 marks, or `rate` to plot the growth rate), `PredatorPreyGraph`. All are `SeriesGraph`s and take `now`.
- The clock is `useSeriesTime({at, from, to, frames, ease})`: scene frames to generations or years. `valueAt(t, v, now)` or `seriesReadout(lines, now)` gives readout values from the same time.
- Above 4000 gene copies drift uses a normal approximation to the binomial draw.
- Choose the seed by looking, as for chance: pick a run whose lines spread clearly and where one or two fix inside the scene.

### Heating curve (`heating.ts`, drawing in `heating-views.tsx`)

Heat supplied at a constant power to a substance that melts and boils, in SI units.

| Idea | What to use |
| --- | --- |
| Heating curve with plateaus | `runHeating({mass, power, start, end or duration, c: {solid, liquid, gas}, melt: {at, latent}, boil: {at, latent}})`; `HeatingGraph` |
| Why the temperature stops rising while it melts | `heatingAt(run, t)` gives `solid`, `liquid`, `gas` shares; `PhaseReadout` drains one bar into the next |
| Q = mcΔT and Q = mL | each stretch has `t0`, `t1`, `T0`, `T1`, `q0`, `q1`; plateaus last mL / P and slopes are P / (mc) |

- `HeatingGraph` `labels` names any stretch (`solid`, `melting`, `liquid`, `boiling`, `gas`): plateau labels sit in a shaded band, warming labels beside the line. `temperatures` marks the melting and boiling points.
- With real water the boiling plateau is about seven times the melting one. That is the science; do not stretch the melting plateau to look even.
- A start temperature equal to the melting point counts as liquid; start just below it for a solid.

### Energy profile (`energy-profile.ts`, drawing in `energy-profile-views.tsx`)

| Idea | What to use |
| --- | --- |
| Exothermic or endothermic profile with Ea and ΔH | `EnergyProfileView` with `config: {reactants, products, ea}`; `showEa`, `showDeltaH` grow each arrow (0 to 1) |
| A catalyst lowers the activation energy | add `catalysedEa`; `catalysed` draws the lower dashed hump, `showCatalysedEa` its arrow |
| Following the reaction along the curve | `progress` (0 to 1) draws the curve; `ball` puts a marker at the front |
| The numbers | `energyProfile(config)`: `deltaH` (negative when exothermic), `kind`, arrows with signed `length`, `reverseEa`; `profileEnergyAt` |

- The energy axis has no numbers: it is a qualitative diagram. Write values in the labels if the lesson needs them.
- `energyProfile` refuses a hump lower than the products (Ea must be at least ΔH) and a catalysed Ea that is not lower.

### Magnetic fields (`magnetic-field.ts`, drawing in `magnetic-field-views.tsx`)

The field of a straight wire, a bar magnet, a loop and a solenoid, alone or added together, at any point of the page. Field lines are traced by following that field, so the lines, a compass needle and a readout agree.

| Idea | What to use |
| --- | --- |
| Field at a point (size and direction) | `magneticFieldAt(sources, x, y)` gives `bx`, `by`, `b`, `angle` |
| Which way a compass points | `compassAngle(sources, x, y)`; `compasses` on the view |
| Field lines of a bar magnet | `barLines(sources, bar, count, {bounds})` |
| Circles round a wire; two wires attracting or repelling | `fieldLines(sources, wireSeeds(wire, radii), {bounds})`; add a second wire to `sources` |
| Field through a loop or solenoid | `fieldLines(sources, coilSeeds(coil, count), {bounds, step})` |
| Textbook values for a readout | `wireField`, `loopCentreField`, `solenoidField`, `forceBetweenWires` |

- The page is a slice: a wire runs through it (positive current comes out of the page); a bar magnet and the axis of a loop or solenoid lie in it. A loop or solenoid is drawn cut through, as dots on one side and crosses on the other.
- Trace the lines once with `lazy`, outside the component. A solenoid line costs the most; use `step` and `maxSteps` to keep it short.
- A bar magnet is two point poles, so its lines are drawn outside the magnet only. Give `strength` (pole strength) to set the size of its field.
- `MagneticFieldView` takes `reveal` (0 to 1) to grow the lines, and `poles` for the letters on a bar. It draws diagrams, not real equipment.

### Flux and induction (`induction.ts`, drawing in `induction-views.tsx`)

The flux through a loop or coil over time, and the emf that its change induces: emf = −N dΦ/dt, with the Lenz's-law direction.

| Idea | What to use |
| --- | --- |
| A coil turning in a uniform field (a generator) | `runInduction({source: {kind: 'rotating', b, area, frequency}, turns, duration})`; `RotatingCoilView` |
| A field through a fixed coil that grows, falls or switches | source `{kind: 'field', area, b: t => ...}` |
| A rod sliding on rails | source `{kind: 'rod', b, length, position: t => ...}` (emf = Blv while it moves) |
| A magnet pushed into, through or out of a coil | source `{kind: 'magnet', moment, radius, position: t => ...}`; `MagnetCoilView` |
| Flux and emf on one time axis | `FluxEmfStrips` (the emf is the flux strip's steepness, turned over) |
| A meter that flicks and returns | `MeterNeedle` with `value` from `inductionAt(run, t).emf` (or `.current`, with `resistance` set) |
| Which way the induced current flows | `inductionAt(run, t).lenz`: `change`, `inducedField` (+1 or −1 along the coil's normal), `current` |

- Signs: the coil has a normal. Flux is positive along it. A positive emf drives a current that is anticlockwise seen from the side the normal points to.
- The emf is taken from the slope of the flux function itself, so a sudden step in a `b` or `position` function gives a very tall, very short spike. Ramp changes over a short time instead.
- The magnet is a small dipole on the coil's axis. Its flux is exact for that model; a long bar close to a coil is only roughly this.
- Textbook values for readouts: `faradayEmf`, `generatorPeakEmf`, `rodEmf`, `fluxThrough`.
- This engine gives the emf. To drive a circuit with it, set a battery's `emf` in the circuit engine from `inductionAt` (or use the alternating source there for a steady generator).

### Light and matter helpers (`blackbody.ts`, `photoelectric.ts`, `relativity.ts`, additions to `waves.ts`; drawing in `modern-views.tsx`)

Formulas with no stored run: each is exact, so a slider can call it every frame.

| Idea | What to use |
| --- | --- |
| Black-body curves, hotter and cooler | `blackBodyCurve({temperature, from, to})`, `planck`; `BlackBodyGraph` (several curves, `visible` band, `peaks`) |
| Wien's law | `wienPeak(T)`, `temperatureFromPeak(wavelength)` |
| The classical curve that runs away (ultraviolet catastrophe) | `classicalRadiance`; `classical` on `BlackBodyGraph` |
| Total power radiated | `radiatedPower(T)` (σT⁴) |
| One slit: a central band that widens as the slit narrows | `singleSlitBrightness`, `singleSlitDarkAngles`, `centralBandWidth`; `IntensityPattern` |
| A grating: same angles as two slits, sharper lines | `gratingBrightness(slits, d, wavelength, angle)`, `gratingMaxima`, `gratingSpacing`, `highestOrder` |
| Double-slit spacing on a screen; Malus's law | `fringeSpacing`; `malus` |
| One photon | `photon({frequency})` or `photon({wavelength})`: energy in joules and eV |
| A photoelectric bench | `photoelectric(light, workFunction)`: `emits`, `kMaxEV`, `stoppingVoltage`, thresholds; `photocurrent(light, workFunction, intensity, voltage)` |
| Largest kinetic energy against frequency, one line per metal | `kMaxLine`; `PhotoelectricGraph`; `PhotonBars` for hf beside the work function |
| Planck's constant from data | `fitStoppingVoltage(points)`: gradient × e, threshold and work function |
| Gamma, time dilation, length contraction | `gamma(beta)`, `dilatedTime`, `contractedLength`; `GammaGraph` |
| Momentum and energy near c | `relativisticMomentum`, `betaFromMomentum`, `relativisticKineticEnergy`, `restEnergy`, `massFromEnergy`, `addVelocities` |
| A light clock, at rest and moving | `lightClockAt(clock, t)`, `lightClockTicks`; `LightClockView` (to scale, both clocks on one time) |

- Speeds in `relativity.ts` are fractions of c (`beta`). `gamma(1)` throws: nothing with mass reaches c.
- `photocurrent` below zero volts is a straight-line model of a real cell's curve. The stopping voltage and the threshold are exact; the shape between them is not.
- `IntensityPattern` takes any brightness function of the angle, so it also draws `doubleSlitBrightness`. Its strip is the screen: light on dark.
- The black-body graph plots brightness as a fraction of the tallest peak shown, not in W sr⁻¹ m⁻³.
- `field-motion.ts` is still not relativistic. For a ring accelerator use r = p / (qB) with `relativisticMomentum`.

### Time graphs (`series-views.tsx`)

`SeriesGraph` is the one line graph behind the population, heating and circuit graphs: several lines with lesson labels and tones, a moving `now`, dashed `marks`, shaded `spans`, hand-written `notes`. Text is at least 30 px. Use it directly for any other quantity against time.

### Demos

`demos.tsx` is a separate Remotion entry (not in the registry) with one composition per addition above: `SimDemo-Population`, `SimDemo-Heating`, `SimDemo-EnergyProfile`, `SimDemo-Diprotic`, `SimDemo-Circuits`, and the physics pieces listed in `demos-physics.tsx` (`SimDemo-MagneticField` and those that follow). Open it with `npx remotion studio src/explainer/sims/demos.tsx`. For stills, `node scripts/explainer-sim-stills.mjs SimDemo-MagneticField:200` writes to `out/explainer/sims-demos/` and holds the stills lock.

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

To see them all, grade the gallery: `npm run grade:explainer -- SimGallery --frames 40`. The sheet lands in `out/explainer/SimGallery/grade/`. It should pass.

## Wanted next

Listed by how many unbuilt designs could use them (Year 11 Chemistry, Year 12 Physics, Year 11 Physics):

1. States of matter and heating curves (needs attraction between particles in the box).
2. Momentum: two-body collisions on a track with before and after bars.
3. Ray diagrams for refraction and lenses (the numbers are already in `waves.ts`).
4. Buffers with acid or base added.
5. Capacitor charging and alternating current for the circuit engine (and back EMF for motors).

Built on 10 November 2026: waves, and chance (dice, coins and weighted draws filling a histogram). Built on 11 November 2026: titration and circuits. Built on 13 November 2026: population, heating curve, energy profile, two-step titrations and the circuit additions. The heating curve covers the graph in item 1; particles with attraction are still wanted.

Maths lessons: the Maths studio kit (`../math/studio`) has its own dice histogram part. The Maths owner chooses between that part and `chance.ts` for each lesson, so one lesson never mixes the two.
