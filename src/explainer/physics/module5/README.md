# Module 5: advanced mechanics visuals

Twenty-two visual families extend the original projectile kit. They use a common 1100 × 620 SVG stage and receive a deterministic progress value from the parent player. The original families and four module previews are preserved. New worked reasoning uses explicit sixteen to thirty-two second durations.

| Site lesson | Supporting families | Remaining teaching gaps |
| --- | --- | --- |
| 1 | Original projectile kit, angle comparison, vector resolution | Additional launch directions and student practice |
| 2 | Angle comparison, elevated launch, staged range derivation, target angles | Optimisation for arbitrary unequal heights |
| 3 | Elevated launch, cliff/wall reasoning, target-angle working | Minimum obstacle-clearing speed and finite-size projectiles |
| 4 | Reuse projectile cases and two-angle target | Fresh independent problems and feedback |
| 5 | Launcher, simulated graph, repeated readings and compatible-slope bounds | Real measurements, apparatus controls and complete uncertainty budget |
| 6 | Torque lever, perpendicular moment arm and beam equilibrium | Beam self-weight and inclined multi-force cases |
| 7 | Tangential velocity and inward net force | Angular-speed derivation and work calculation |
| 8 | Frictionless bank, conical projections and bank-friction comparison | Deriving limiting speeds and slipping dynamics |
| 9 | Energy-conserving vertical loop | Loss of contact, rigid rod and complete worked example |
| 10 | Inverse-square field | Multiple central bodies and real data |
| 11 | Circular-orbit states | GEO synchronisation and weightlessness apparatus |
| 12 | Circular-orbit energy graph and ledger | Transfer manoeuvre and burn timing |
| 13 | Reuse torque, circle, loop and orbit | Mixed practice and feedback |
| 14 | Gravitational potential graph | Work integral and near-surface approximation |
| 15 | Field and potential graphs | Equipotential surfaces and tangent construction |
| 16 | Escape-energy ledger | Explicit trajectory classification |
| 17 | Kepler ellipse and swept areas | Measured orbital data and third-law fitting |
| 18 | Reuse field, potential, orbit, escape and Kepler | Consolidated assessment |

## Physical models and motion

Detailed plans, durations, models and remaining limits are in [projectile details](projectile-details/README.md), [measurement details](practical-details/README.md) and [rotation details](rotation-details/README.md). Equations replace the current working as the reasoning advances. The measurement example now reserves explicit holds around its slope sweep. The moment-arm angle is located on the drawing; the conical angle is labelled as the true string angle to vertical, rather than its changing side projection.

The launch-angle comparison changes a model parameter at constant launch speed. It does not pretend to show one projectile changing its launch angle in flight. The elevated launch uses one physical time for both position and velocity components. The practical dots are explicitly simulated.

The torque arrow stays attached to the force application point while its angle changes. The force's line of action remains visible. Uniform circular motion keeps speed constant and turns velocity at right angles to radial acceleration. The frictionless banked-track case resolves one normal force against weight.

The vertical-loop animation integrates travel time from speed and arc length. The ball slows as it rises and speeds up as it falls. Its force arrows share one scale, with offset tails to distinguish tension and weight. The chosen energy keeps the string taut throughout the loop.

The gravitational field arrow follows inverse-square strength. The circular-orbit scene compares separate valid circular states; its expanding orbit graphic is not a transfer trajectory. Specific energies use MJ/kg, with potential zero at infinity. The escape scene varies launch speed at a fixed radius and shows the resulting signed energy balance.

The Kepler scene solves eccentric anomaly from mean anomaly. The central body sits at a focus, and the two coloured sectors each span 0.1 orbital periods. Motion is faster near the focus and slower farther away. The planet follows the actual drawn ellipse at every phase.

## Sources and verification

Inspected all eighteen Module 5 site pages, including their headings and reasoning stages, at `C:/Users/kygs/hscscience/subjects/physics/year12/module5/`. The table above is a support map, not reviewed syllabus coverage.

- [NASA: orbits and Kepler's laws](https://science.nasa.gov/solar-system/orbits-and-keplers-laws/) supports focus placement, swept areas and the period relation.
- [OpenStax: centripetal force](https://openstax.org/books/university-physics-volume-1/pages/6-3-centripetal-force) supports the circular-force and banked-track model.
- [OpenStax: satellite orbits and energy](https://openstax.org/books/university-physics-volume-1/pages/13-4-satellite-orbits-and-energy) supports the circular speed, period and signed orbital energies.
- [OpenStax: gravitational potential energy and total energy](https://openstax.org/books/university-physics-volume-1/pages/13-3-gravitational-potential-energy-and-total-energy) supports the potential and escape-energy references.

Run `node src/explainer/physics/module5/verify.mjs`. It checks projectile symmetry and range, torque, circular-vector orthogonality, loop energy, orbit-energy conservation, the period relation, swept area and ellipse membership. Source and still review remain separate from continuous playback and any full-lesson teaching approval.
