# Year 11 Biology FA1 shared diagrams

Brief 147 supplies three reusable React/SVG components. They do not register a lesson, provide narration or establish teaching/playback approval. They use the existing ink, paper and Biology colour family.

```tsx
import {useMemo} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {SizeLadder, AssessBalance, GapBox, createGapSimulation, DEFAULT_GAP_CONFIG} from './biology/fa1';

const frame = useCurrentFrame();
const {fps} = useVideoConfig();
const simulation = useMemo(() => createGapSimulation(DEFAULT_GAP_CONFIG), []);

<SizeLadder progress={Math.min(1, frame / (3 * fps))} />
<AssessBalance
  criterion="What could it resolve, and so explain?"
  impact={[{id: 'cristae', label: 'cristae', progress: 1}]}
  limitations={[{id: 'artefact', label: 'preparation artefacts', progress: 1}]}
  tiltDegrees={-7}
  judgement="Great impact, with limits."
/>
<GapBox simulation={simulation} frame={frame} fps={fps} />
```

The snippets belong inside a component. Each diagram is its own SVG with a 1100×780 viewBox and configurable `width`/`height`. SVG fitting preserves the aspect ratio. Native and phone-landscape examples are in `work/brief147/components/`.

`SizeLadder` places sizes in nanometres on a logarithmic axis from 100 µm to 0.1 nm. `progress` interpolates the resolving limit logarithmically from 200 nm to 0.2 nm. Alternatively pass `resolveNm`. The instrument bars are reference limits, not moving object sizes. Thumbnail records accept `id`, `label`, `sizeNm`, optional `href`, `naturalWidth`, `naturalHeight` and `labelOffsetY`. Supply a clean crop of one actual object where needed; the artwork is a readable thumbnail, while its marker has the measured log position. It is never stretched or claimed to share one linear pixel scale with every other object. The cellular 1–2 nm detail note remains distinct from the best-instrument limit.

`AssessBalance` accepts a criterion, two evidence arrays and an optional judgement. Pass a frame-derived `progress` for each chip and a frame-derived `tiltDegrees` when the explanation reaches its judgement. Negative tilt lowers the impact pan. Tilt never depends on the number of chips. This is a qualitative assessment metaphor, not a calibrated scale or majority vote. Short labels wrap; the component rejects a pile exceeding its readable space rather than silently truncating text or shrinking it. Split long evidence across cues.

`createGapSimulation` precomputes a seeded, unbiased two-dimensional random walk in a rectangular box. Particles are independent tracers, not a molecular dynamics simulation. Outer walls and blocked divider encounters reflect; a species can cross only at the gap when its pass rule allows it. `divider: 'none'` removes the barrier and permits every species. `divider: 'membrane'` uses the same geometric opening with species rules and a dashed wall. Up to two kinds are supported. This is an ideal selective-membrane illustration, not a claim that real Visking tubing excludes sucrose or that particle counts alone reproduce all osmotic pressure effects.

`GapBox` maps `frame / fps` to model steps (`modelStepsPerSecond`, default 30), so the same scientific instant is identical at different composition frame rates. Increase model steps per second to indicate a time-accelerated interval. Do not label model steps as measured molecular seconds. Precompute enough `maxSteps` for the shot; a lookup beyond that interval throws rather than silently freezing the particles. Keep the simulation/configuration stable with `useMemo`, and do not call random functions during rendering.

The counters show actual crossing events. Current left/right counts obey `right = initialRight + totalRightward − totalLeftward`. Recent counters use one equal-duration rolling window (`windowSteps`, default 120). The arrow represents the recent net crossing count over that window, not cumulative transfer. Before the first full window exists the label says crossings so far; the exact elapsed interval remains available in the helper API. Counts can fluctuate and a finite window can point either way. No target such as 23/23, zero arrow, equal counters or frozen equilibrium is imposed. A hypothetical 40/6 system observed at 23/23 has transferred 17 particles overall, even when its recent net flux is near zero.

`showCounters={false}` hides response-bearing counters/arrow for a prediction while particles continue moving. `showTotals` defaults to false; opt in when the teacher wants to compare crossings since the start with the latest interval. `counterKind` selects one species; live positions and per-species counts remain available through `gapStateAt`. The full simulation and crossing-event records are exported for honest bespoke captions or traces. `showAuthorNotes` defaults to false on all three components. It reveals provenance/debug explanations only when requested. The ladder's thumbnail-scale note appears automatically only when an actual thumbnail image is present.

Checks:

```text
node src/explainer/biology/fa1/verify.mjs
npx tsc -p src/explainer/biology/fa1/tsconfig.json
node src/explainer/biology/fa1/qa.mjs
```

The QA command writes static React/SVG screenshots only. It does not bundle/register/render a video, generate audio or edit any source design or production asset. Native and phone stills do not replace continuous motion inspection or exact voiced-lesson review.
