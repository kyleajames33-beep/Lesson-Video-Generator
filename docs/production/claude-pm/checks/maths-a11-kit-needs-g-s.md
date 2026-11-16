# Maths kit needs: Year 11 Advanced graph transformations (g01 to g06) and probability and data (s01 to s11)

Brief 243, 17 November 2026. A separate file from `maths-a11-kit-needs.md` (which the trigonometry author is editing). Existing parts are named from `src/explainer/math/studio/` (exports read from the source files and `index.ts`), the older `src/explainer/math/` parts (`algebra.tsx`, `graphs.tsx`, `strand-parts.tsx`) and `src/explainer/sims/`. These are requirements for later build work, not implemented capability or a pilot pass. No source file was changed.

Every video uses the shared frame: `WorkingBoard` (TaskStrip, EquationStrip, GivensCard, WorkingRows, AnswerFrame, MistakeCard), `QuestionCard` with its countdown, `KeyNotesScreen` and `MemoryAidCard` from `cards.tsx`, role colours from `roles.tsx` and `HandMark` / `DrawnMark` / `HandTag` from `primitives.tsx`. Graphs use `StudioPlot` from `plot-core.tsx` (one coordinate transform).

Parts proposed by the w-strand kit list (`maths-a11-kit-needs.md`) and the w24 design are not built yet (a search of `src/` finds no `AxisShadow`, `MappingDiagram`, `CircleTracer` or `VerticalLineSweep`). They are named below as "planned".

## What already fits

- **`FunctionSimulator`** (`fn-sim.tsx`) is already a transformation engine. Its timeline keys `xScale`, `xShift`, `yScale` and `yShift` draw X = xScale·u + xShift and Y = yScale·f(u) + yShift. The horizontal map is "dilate, then translate", the correct order for g04 (site error S11-G03). Folds through 0 (negative scales) are supported and hide labels in transit, which gives the g02 reflections. It also has a riding `point`, `markers`, ghost `curves` (dashed parent), `regions` (domain shading) and `asymptotes` (fixed displayed x values only).
- **`StudioTransformPanel`**, `transformAt`, `TransformKey` (`trig-parts.tsx`) drive y = k f(a(x + b)) + c with four `ParameterSlider`s and a readout. The family is a parameter, so a parabola, |x|, 1/x or 2^x can be passed. This is the panel Year 12 t01 uses, so g04 can introduce it. The readout rows (amplitude, period, midline) are trig-specific and need a non-trig row set.
- **`ScreenApp` / `AppGraph`** (`finance-parts.tsx`): a coded app screen for every "using graphing applications" point (g01 to g03, s10 and s11 spreadsheets).
- **`ExpressionSlot`** (`algebra.tsx`): glowing replacement of x by (x - 3) or x/k inside an equation.
- **`OutcomeGrid`** (`prob-parts.tsx`): a rows × cols array of cells with row and column labels and a `value(r, c)` function; it lights cells equal to one value and can slide cells into bars.
- **`SpinnerSectors`, `RollSimulator`, `ProbabilityBars`, `DistributionTable`, `OutcomeSort`, `OutcomeDrop`, `StackedTotalBar`** (`prob-parts.tsx`).
- **`ClassHistogram`, `HeatsToHistogram`, `histogramModel`, `QuantileReader`** (`dist-parts.tsx`): class histograms from edges and counts (with a density option), values dropping into classes, and a reader that finds where a cumulative function reaches a given level p.
- **`chance.ts`** engine (`runTrials`, `exactDistribution`, `eventOf`, `shareAfter`, experiments `dice`, `coins`, `weighted`) with **`TrialView`, `ChanceHistogram`, `ChanceShareGraph`** (`chance-views.tsx`): seeded repeated trials with the exact answer alongside.
- **`IntervalPicture`** (`extras.tsx`), **`StudioDomainStrip`** (`working-parts.tsx`), **`DomainShading`** (`strand-parts.tsx`) for domain and range.
- **`LiveReadoutBoard`, `ParameterSlider`** (`readouts.tsx`).

## Per video

| Video | Existing parts it can use | New part it needs |
| --- | --- | --- |
|  g01 translations | FunctionSimulator (xShift, yShift; dashed parent ghost in `curves`; `markers` for vertex and key points); ExpressionSlot for the replacement; ScreenApp / AppGraph; LiveReadoutBoard for "(x, y) to (x + a, y + b)" | **TransformationTracer** (shared by g01 to g05): carries named features from the parent to the image along drawn arrows: points, the vertex, and asymptotes as whole lines (vertical lines move only sideways, horizontal ones only up or down). FunctionSimulator's `asymptotes` are fixed displayed x values, so carried and horizontal asymptotes are the gap. Can be a FunctionSimulator layer using `carriedPoint` (`graphs.tsx`).  |
|  g02 reflections | FunctionSimulator folds (xScale or yScale through 0); StudioSymmetryPairs (`integration-parts.tsx`) for the one-frame link to w26; ScreenApp; ExpressionSlot | TransformationTracer (perpendicular arrows to the mirror line); a small **PointImageTable** (x, y), (-x, y), (x, -y) filling row by row (WorkingRows may do).  |
|  g03 dilations | FunctionSimulator (xScale, yScale); StudioTransformPanel (k and a sliders only, via `sliders.only`); ScreenApp; ExpressionSlot | **StretchFromAxis**: the fixed axis drawn bold, every sampled point moving away from it with an arrow proportional to its distance (the meaning of "a stretch from the y-axis"). An enlargement scene reuses the planned **CircleTracer** (w24) with both scales equal, on an equal-unit plot.  |
|  g04 order of transformations | Two FunctionSimulators side by side (one per order); StudioTransformPanel on a parabola (the Year 12 t01 panel); WorkingRows for building the rule | **TransformQueue**: step cards (reflect, dilate, translate) applied one at a time to the current equation and curve, which can be swapped to show the second order; a "commute or not" verdict chip.  |
|  g05 features of transformed graphs | FunctionSimulator (`regions` for domain shading, `markers`); TransformationTracer; IntervalPicture; StudioDomainStrip; planned AxisShadow (w09) for domain and range; WorkingRows for solving intercepts | **FeatureLedger**: a two-column table (parent feature, image feature) for asymptotes, key points, domain and range, filled as the tracer carries each, with a separate "intercepts: solve" row; a discontinuity marker at a vertical asymptote.  |
|  g06 circles | StudioPlot with equal units; planned CircleTracer (w24) generalised to a centre (a, b); planned AxisShadow; planned CompleteSquareTiles (w04, w15) used twice in two colours | **CircleFromCentre**: a centre dot, four radius spokes to the axis-parallel points, the circle drawn through them, domain and range brackets; translation of w24's origin circle as one move. Can be a CircleTracer mode.  |
|  s01 sets | Planned MappingDiagram (w07) ovals as set containers; DrawnMark | **SetBraces**: element tokens dropping into braces (a repeat bounces off, a reorder changes nothing), a count badge \|A\|; complement shading inside a U rectangle (a VennDiagram mode).  |
|  s02 intersection, union, Venn | none directly | **VennDiagram**: a U rectangle with one or two circles; four regions holding counts, decimals or listed elements; fill order (overlap first); shading modes for A ∩ B, A ∪ B, A̅ and "neither"; a disjoint mode in which the circles separate and the overlap disappears; a "regions add to \|U\|" check. Letters and numbers only (HSC style). Used by s02 to s05, s07, s08.  |
|  s03 counting rule | StackedTotalBar (\|A\| and \|B\| end to end against \|U\|); VennDiagram | A **double-count tick** overlay on VennDiagram: each element ticked once per set it is in, overlap ticks crossed once. Small; part of VennDiagram.  |
|  s04 sample spaces | OutcomeGrid (a 6 × 2 die-and-coin grid, a 2 × 2 × 2 list as rows); VennDiagram for events; chance.ts if a repetition beat is wanted | **OutcomeGrid predicate light**: light the cells of an event given as a rule (for example "even or heads"), not only cells equal to one value, with the count over \|S\| written beside. Also an outcome-list layout for three coins.  |
|  s05 complement and addition rules | VennDiagram (counts, then the same diagram divided by \|S\|); OutcomeGrid predicate light | None beyond VennDiagram.  |
|  s06 arrays and trees | OutcomeGrid (6 × 6 and 6 × 2, with predicate light); chance.ts `coins` experiment for three coins; StackedTotalBar | **ProbabilityTree**: stages as columns, branch probabilities on the branches, each path's product at its tip, event paths highlighted and summed, second-stage denominators that change without replacement. Letters and numbers only. Also an **ordered-draw array** (an n × (n - 1) OutcomeGrid without the diagonal) for the 10 × 9 red-then-blue picture.  |
|  s07 conditional probability | VennDiagram; OutcomeGrid; ProbabilityTree | **TwoWayTable**: rows and columns with totals; a restrict mode that greys everything outside one row or column and boxes its total as the new denominator. A matching restrict mode on VennDiagram (B becomes the new rectangle) and on OutcomeGrid (cells outside B dim).  |
|  s08 independence | TwoWayTable; VennDiagram (overlap equal to the product); WorkingRows for the two proofs; chance.ts `weighted` for the alarm example if a simulation is wanted | None beyond s07's parts.  |
|  s09 random variables | OutcomeGrid with value(r, c) = total or difference (a rule card per variable); DistributionTable for listed values; IntervalPicture for a continuous interval; ProbabilityBars | None essential. A **DotsVsInterval** number line (separate dots with an ellipsis, against a solid interval with a sliding tick) is small and could live in extras.tsx.  |
|  s10 frequency tables | chance.ts (`runTrials` with a `weighted` spinner) with ChanceShareGraph for relative frequency settling; SpinnerSectors; OutcomeSort for raw results sorting into rows; ScreenApp for the spreadsheet frame | **FrequencyTable**: a spreadsheet-style table with five columns (value, frequency, relative frequency, cumulative frequency, cumulative relative frequency) that fills column by column and can show each cell's formula (=B2/B$6, a running total); a column-sum check. DistributionTable is a two-row table and does not fit.  |
|  s11 histograms and polygons | ClassHistogram (single values or grouped edges; relabel the vertical axis for relative frequency); ProbabilityBars for single values; QuantileReader (with a piecewise-linear cumulative function from the table) to read the median at one half; histogramModel | **FrequencyPolygon** layer for ClassHistogram (midpoints joined, closed to the axis at the empty neighbouring classes) and a **CumulativePolygon** (points at upper class boundaries, from 0 to the total or to 1), with a median line at half the total.  |

## New parts in one list

1. TransformationTracer, with carried and horizontal asymptotes (g01 to g05; it would also serve Year 12 t01's moving tan asymptotes).
2. PointImageTable (g02; may be WorkingRows).
3. StretchFromAxis (g03).
4. TransformQueue with a commute verdict (g04).
5. FeatureLedger with a discontinuity marker (g05).
6. CircleFromCentre, as a mode of the planned CircleTracer (g06; g03's enlargement scene).
7. SetBraces (s01).
8. VennDiagram with counts, shading, disjoint and restrict modes and a double-count overlay (s01 to s05, s07, s08).
9. OutcomeGrid predicate lighting, restrict mode and ordered-draw layout (s04 to s07, s09).
10. ProbabilityTree (s06 to s08).
11. TwoWayTable with a restrict mode (s07, s08).
12. FrequencyTable with visible formulas (s10, s11).
13. FrequencyPolygon and CumulativePolygon layers for ClassHistogram (s11).
14. DotsVsInterval (s09, optional).

Planned parts from the w strand that these videos also need: AxisShadow (g05, g06), CircleTracer (g03, g06), CompleteSquareTiles (g06), MappingDiagram (s01, optional).

No painted plate is required for the maths. If Claude uses an everyday anchor as a picture (a photocopier, a sushi train, a gumball machine, a hostel bike rack), it follows the existing plate rules: a Codex painted plate for objects, never a coded icon, and no people. Probability diagrams (Venn diagrams, arrays, tree diagrams, two-way tables) stay HSC style: letters and numbers only, no pictures inside regions or cells.
