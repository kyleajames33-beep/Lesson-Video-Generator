# Maths kit needs: Year 11 Advanced first strand (w01 to w14)

Brief 243, 16 November 2026. Existing parts are named from `src/explainer/math/studio/` (exports in `index.ts`), the older `src/explainer/math/` parts (`algebra.tsx`, `graphs.tsx`, `strand-parts.tsx`, `lesson-parts.tsx`) and `src/explainer/sims/`. These are requirements for later build work, not implemented capability or a pilot pass. No source file was changed.

Every video uses the shared frame: `WorkingBoard` (TaskStrip, EquationStrip, GivensCard, WorkingRows, AnswerFrame, MistakeCard), `QuestionCard` with its countdown, `KeyNotesScreen` and `MemoryAidCard` from `cards.tsx`, role colours from `roles.tsx` and `HandMark` / `DrawnMark` from `primitives.tsx`. Graphs use `StudioPlot` from `plot-core.tsx` (one coordinate transform). No simulation engine in `src/explainer/sims/` fits this strand: they are physics, chemistry, biology and chance engines. `chance.ts` becomes relevant for the probability strand (s04 to s08), not here.

| Video | Existing parts it can use | New part it needs |
| --- | --- | --- |
| w01 index laws | AlignedAlgebra, ExactFraction (algebra.tsx); WorkingRows; Pow and InnerSlot (roles.tsx) for coloured bases and indices | **FactorStack**: a row of identical base tiles that join (multiply), cancel in pairs across a fraction bar (divide) and run out to 1 or a reciprocal (zero and negative indices). A root ladder (cube root then square) can be a two-row variant. |
| w02 expand, factorise, algebraic fractions | AreaStrips (working-parts.tsx) as host; Cancellation, CancelledFactor, AlgebraFraction, DomainExclusions (algebra.tsx); StudioCancellation | **AlgebraTileGrid**: a rectangle split into labelled sub-rectangles (x^2, x, unit tiles, with signed tiles) that reads forward as expanding and backward as factorising. AreaStrips is built for du/dv growth strips and a plate region, not integer tile grids. |
| w03 surds | AlignedAlgebra; StudioCancellation for the conjugate middle terms; WorkingRows | **RootExtract**: a factor pair under the root sign with the perfect square stepping out as its root (72 = 36 x 2 to 6 sqrt2). Small; could live in working-parts. |
| w04 solving quadratics | WorkingRows; ExpressionSlot (algebra.tsx); AreaStrips for the completing-the-square picture if it accepts a missing corner | **CompleteSquareTiles**: an x-square plus two (b/2)-by-x strips with the missing corner square drawn in and taken away. Extension of AlgebraTileGrid. A three-way method chooser can reuse DecisionTree (trig-parts.tsx). |
| w05 discriminant | DecisionTree (three branches); IntervalPicture for the k condition; ExpressionSlot to highlight b^2 - 4ac inside the formula | Rays on the number line (see w06). Optional parabola thumbnails can use StudioPlot. |
| w06 linear inequalities | IntervalPicture (extras.tsx) for closed or open ends; DrawnMark | **NumberLineRay**: IntervalPicture extended to rays (one end at infinity with an arrow), animated drawing of the ray, and a "multiply by -1" reflection of two marked numbers through 0 that shows the order swap. |
| w07 relations and functions | StudioPlot; FunctionGraph (graphs.tsx) for x = y^2 and circles | **MappingDiagram**: two set ovals with arrows from inputs to outputs, with a second arrow from one input turning the mistake colour. **VerticalLineSweep**: a vertical line crossing a plotted relation with a live hit count. Both are new. |
| w08 function notation | ExpressionSlot (bracketed substitution); StudioPlot with a labelled point and intercept; ReadoutPanel (graphs.tsx) | **FunctionMachine**: input slot, rule box and output, sharing the role colours with ExpressionSlot. Small. |
| w09 domain and range | StudioDomainStrip (working-parts.tsx); DomainShading (strand-parts.tsx); IntervalPicture; StudioPlot | **AxisShadow**: a graph's projection onto the x-axis (domain) and y-axis (range) as shaded bars with open or closed ends. Can build on DomainShading. |
| w10 line equations | StudioPlot; FunctionSimulator secant mode (fn-sim.tsx) or StudioTangentTriangle for rise and run; WorkingRows | None essential. A rise-run triangle that updates as one point slides can be FunctionSimulator with a linear f. |
| w11 intercepts, parallel, perpendicular | StudioPlot with equal axis scales; QuarterTurnNormal (extras.tsx) for the rotated rise-run triangle; studioNormalLine | Equal-scale option check on StudioPlot so right angles render as right angles. |
| w12 linear models and inequalities | StudioPlot; DomainShading for the valid domain; StudioLevelLine (trig-parts.tsx) for a budget line y = 20; ScreenChart if a phone screen is used | **ModelCard**: a word problem whose highlighted numbers move into the equation slots with "fixed" and "rate" tags. Can be WorkingBoard GivensCard plus ExpressionSlot. |
| w13 simultaneous lines and break-even | StudioPlot with two lines; StudioLevelLine; LinkedRiders (extras.tsx) for a vertical profit gap; ScreenApp / AppGraph (finance-parts.tsx) for "with a graphing application" | **RegionLabels**: shaded profit and loss regions between two lines with labels that switch at the intersection. Small. |
| w14 zeros, intercepts, discriminant | StudioPlot; FunctionGraph; StudioTransformPanel (trig-parts.tsx) for a vertical-shift slider if it accepts a quadratic; ParameterSlider and LiveReadoutBoard (readouts.tsx) | **CrossingCounter**: one timeline drives a parabola's vertical shift, the live count of x-intercepts (2, 1, 0) and the discriminant value, so they cannot disagree. |

## New parts in one list

1. FactorStack (w01).
2. AlgebraTileGrid with signed tiles, and its CompleteSquareTiles mode (w02, w04; reused by w15).
3. RootExtract (w03).
4. NumberLineRay, extending IntervalPicture (w05, w06; reused by w09, w18).
5. MappingDiagram and VerticalLineSweep (w07; MappingDiagram is reused by w27 composite functions and s01 sets).
6. FunctionMachine (w08; reused by w27).
7. AxisShadow (w09; reused by w24, g05).
8. ModelCard and RegionLabels (w12, w13; reused by w19).
9. CrossingCounter (w14; reused by w15 to w18).

No painted plate is required for w01 to w14. If Claude uses an everyday anchor as a picture (a phone battery, a taxi meter, a market stall), it follows the existing plate rules: a Codex painted plate for objects, never a coded icon, and no people.
