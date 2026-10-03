# Physics constraints and evidence gate, 3 October 2026

This pass addresses the source work for C07, C08 and C14. It performs no renders,
speech generation, decoding or listening. Original lesson JSON and recordings
are unchanged. The existing designs are retained; the scope and unsupported
behaviour are corrected.

## Circuit model

The 3D circuit component has a single series ring and no parallel branches.
It now supports battery, resistor, lamp, switch and ammeter components only.
TypeScript, runtime validation, lesson validation and release preflight reject
a voltmeter in that ring with an explanation that a parallel-branch model is
required. No existing voltmeter reference was silently moved or deleted.

This deliberately constrains the model rather than adding an unreviewed branch
implementation. It supports the existing series-current objective. A future
voltage-measurement objective needs a component that identifies both measured
nodes and connects the meter across them. [OpenStax electrical measurement
guidance](https://openstax.org/books/university-physics-volume-2/pages/10-4-electrical-measuring-instruments)
describes the usual series ammeter and parallel voltmeter arrangements.

The labelled battery positive plate is on the decreasing side of the loop
parameter, but the old current markers travelled in the increasing direction.
The markers now follow the external conventional-current direction out of that
terminal. The switch reaches zero opening angle before current appears; it no
longer remains slightly open during the animated current beat. Current animation
requires exactly one battery and a load, so the component cannot imply an ordinary
loaded circuit when it has only wires, a battery and an ammeter.

Scope labels identify idealised series topology and conventional-current
direction. The component does not calculate resistance, potential difference,
current magnitude, brightness or electron drift speed. The supported maximum
of 16 components keeps each loop interval larger than its two fixed wire gaps;
it is a geometric constraint, not a teaching recommendation.

## Shell model

The atom diagram retains its rings, glossy markers, nucleus and entrance reveals.
Electron markers now remain at stationary schematic positions instead of
continuously orbiting. Visible and accessible labels state that it represents
shell occupancy, with schematic positions and distances.

Runtime and source validation reject unsupported shell indices and counts
exceeding the 2n² shell capacity. This component supports shells 1 to 3; it does
not infer a ground-state configuration or apply a simplistic 2,8,8 capacity
rule to every element. Filling order, subshells, orbital geometry and excited
states belong to other teaching models. The [IUPAC atomic orbital
definition](https://goldbook.iupac.org/terms/view/A00500/plain) describes a
wavefunction, which is a different scientific object from a circular trajectory.

The source usage audit found no catalogue lesson JSON using `circuit3d` or
`orbit`. The existing development series-circuit composition remains supported.
The expanded [usage audit](../../out/review/scientific-models/usage.json) includes
the two components and their pure constraint/helper hashes. Catalogue and draft
JSON references are its scope; it is not a complete inventory of JSX call sites.

C07/C08 are implemented at source level and remain pending Physics review and
selected continuous/device playback. The circuit's branch capability is still
absent and explicitly unsupported. No claim of a reviewed export is made.

## Release evidence gate

The old `gate:production` command checks editorial scores and suggested actions.
It now labels its result as a heuristic diagnostic and directs release work to
the new `gate:release` command. Its existing threshold arguments and exit behaviour
remain available for diagnostic workflows. Passing that score check is not
release approval.

The new gate requires:

- An unchanged, complete input snapshot and export snapshot.
- A render record hashed in the export snapshot, linked to the selected input
  package and video hash, covering the full timeline at the declared fps.
- SRT and VTT exports hashed in the selected package.
- Valid named `pass` records for science, listening, motion, device and
  accessibility, each bound to the exact export package and unchanged evidence.

Previews, stale exports, missing scopes and unresolved review outcomes block the
gate. The latest valid supplied outcome for each scope governs; a simultaneous
conflict retains `changes-required`. A later explicit pass may supersede a prior
changes-required outcome only for that unchanged package. Invalid supplied records
block the gate even if another passing record exists.

The gate cannot authenticate the reviewer, establish scientific correctness,
detect records omitted from the config or grant publication permission. It
records a testable completeness decision on the supplied local evidence. Scores,
templates and an automatically generated report cannot substitute for actual
review. No reviewer, review outcome or final-package evidence was invented here.

Copy [release-gate.example.json](release-gate.example.json) and replace the
selected paths after a real full render and actual scoped reviews exist:

```powershell
npm run gate:release -- path/to/gate-config.json --output=out/review/release-gate.json
```

The command verifies hashes and records. It does not render, decode audio,
create review evidence or publish. The example is intentionally incomplete and
cannot pass before the referenced package and real reviews exist.

## Checks and next work

`npm run test:source` runs the science, biology model, Physics model and evidence
gate tests without creating media fixtures. It is now included in CI alongside
the existing production checks. TypeScript checks the renderer/component contract.

The remaining scientific correction drafts need review and final production
integration. The subsequent [provenance and curriculum pass](provenance-curriculum-and-quantitative-2026-10-03.md)
establishes the C12 sidecar mismatch and confirms three selected C13 new-course
topic mappings, with actual speech and learner-delivery review still open. Media,
caption/device checks and backup/restore evidence remain on the selected release
path. No catalogue lesson was promoted to approved or released.
