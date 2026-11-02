# Maths kit needs: next strands

Brief 136, 1 November 2026. APIs compared with build reports 129 and 131-135. This is research, not implementation permission.

| Video | Existing parts | New need or extension |
|---|---|---|
| math-a12-d11 | FunctionGraph, AlgebraFraction, DomainStrip | Branch-aware tangent readouts; existing geometry serves. |
| math-a12-d12 | FunctionGraph, AlignedAlgebra, DomainStrip | Reciprocal trig labels and poles; no new graph geometry. |
| math-a12-d13 | ExpressionSlot, DerivativeFactor, DomainShading | Suppress literal slope ratios at0/0; no new part. |
| math-a12-d14 | FunctionGraph, ReadoutPanel, AlignedAlgebra | NormalLine helper with vertical x=c handling. |
| math-a12-d15 | FunctionGraph, SecantToTangent | Piecewise one-sided limit markers and separate approaches. |
| math-a12-d16 | DerivativeTracer, SignChart | Concavity tint and separate f′/f″ scales. |
| math-a12-d17 | FunctionGraph, DerivativeTracer, SignChart | Three linked panels f,f′,f″ and graph-only qualitative traces. |
| math-a12-d18 | SymbolicCandidateTable, FunctionGraph | Constraint diagrams for fencing and box folds; limits distinct from attained values. |
| math-a12-d19 | FunctionGraph, NumericDial, ReadoutPanel | Signed initial-value sweeps and parameter-fitting/units panels. |
| math-a12-i01 | FunctionGraph, AlignedAlgebra, NumericDial | Primitive-family slides and derivative verification overlay. |
| math-a12-i02 | ExpressionSlot, DerivativeFactor, AlignedAlgebra | Reverse-chain factor-matching highlight. |
| math-a12-i03 | ExpressionSlot, FunctionGraph, AlignedAlgebra | Exponential primitive overlay and base-one exception. |
| math-a12-i04 | FunctionGraph, DomainStrip, AlgebraFraction | Absolute-value log labels and disconnected primitive branches. |
| math-a12-i05 | FunctionGraph, ExpressionSlot, AlignedAlgebra | Signed trig primitive overlay and exact radian ticks. |

Later integral videos need refining rectangles/trapezia, signed-area fills, x/y-oriented regions, accumulation/FTC panels and odd/even symmetry. Statistics needs linked PDF/CDF, histograms and normal-tail shading. Finance needs cash-flow timelines with periodic interest/payment ordering and amortisation tables. These are future needs, not part of the14 prepared packs.

## Brief 151: trig graphs and the remaining integral videos

2 November 2026. Research needs only; this section implements no component. The brief 143 parts now exist, so reuse their checked graphs, domains, primitive families and derivative checks. `ProductRectangle` illustrates the product rule; it is not a Riemann-sum implementation.

| Video | Existing parts to reuse | New need or extension |
|---|---|---|
| math-a12-t01 | FunctionGraph, graphTransform, NumericDial, exact radian ticks | Pending design requests: `TransformPanel` and `FeatureMarks`; extend `AttachedTransform` with finite `yShift` and carry horizontal shifts/scales through asymptotes and connected domains. Parameter slots use xScale=1/b, xShift=-c/b, yScale=a and yShift=d. Keep landmarks, amplitude/midline/period and actual curve state linked. |
| math-a12-t02 | FunctionGraph, DomainStrip, radian ticks, marker labels | Pending `LevelLine` and `WindowMap`: author-defined crossing/touch roots and exact x-to-u mapped endpoints, all repetitions in the stated interval and included/excluded endpoints. Validate f(root)=level and domain filtering. Do not reveal roots in a question hold. |
| math-a12-t03 | FunctionGraph, NumericDial, ReadoutPanel | Reuse the pending transformation parts. Add `RotationProjector`, linking a shared time cursor to the rotating wheel and measured height projection; source hub/radius anchors from the plate and check projected height against h(t) at 101 times within one pixel. Tide bands use actual pixel anchors. Keep units and time origin explicit. |
| math-a12-t04 | FunctionGraph, labelled ticks, ReadoutPanel | Pending `LogAxisMorph`: positive finite values move between linear/log positions, with original-value power ticks, fixed base and optional aligned dB scale. Equal log steps represent equal ratios; zero is never a log endpoint. Validate positions within 0.5 px. Route inputs only; no new pack requested. |
| math-a12-i06 | FunctionGraph, graphTransform, NumericDial, ReadoutPanel | Refining left/right/midpoint rectangles and trapezia over one author-defined partition. Keep n, delta-x and signed sums synchronised; compare methods as the same partition refines. Clip marks to the plot and show partial bins accurately. |
| math-a12-i07 | IntegralNotation, FunctionGraph, AlignedAlgebra | Signed-area fill and cumulative signed-sum readout, with below-axis contributions subtracting. Geometrical-area-only examples must not secretly use an antiderivative. |
| math-a12-i08 | FunctionGraph, DerivativeTracer, DerivativeCheck | Accumulation-function tracer with a fixed lower limit and moving upper limit. The rate graph's swept signed area and accumulation graph's current value share x; show F(a)=0 and connect its tangent to the rate. |
| math-a12-i09 | IntegralNotation, AlignedAlgebra, DerivativeCheck, DomainStrip | Staged endpoint substitution and subtraction, with signed brackets; cue reversal/splitting properties without losing interval/domain conditions. |
| math-a12-i10 | FunctionGraph, exact markers, DomainStrip | Split fill at every relevant zero/intersection, show signed integral separately from sum of area sizes, and preserve upper-minus-lower labels between curves. Roots are author inputs, not inferred from a coarse plot. |
| math-a12-i11 | ReflectionLayer, reflectPoint, FunctionGraph | Horizontal y-slices and left/right boundaries, including regions left of the y-axis. Reuse the checked y=x reflection for exponential/logarithmic correspondence; extend only the area/slice orientation and labels. |
| math-a12-i12 | FunctionGraph, ReflectionLayer, NumericDial | Linked +/-x samples and signed lobe comparison for odd/even functions. Numerical-tool evidence must distinguish estimate, exact result, domain and integration constant; keep calculator/CAS output out of the question hold. |
| math-a12-i13 | FunctionGraph, ReadoutPanel, IntegralNotation | Rate-to-quantity panel with an initial-value offset, units and interval limits; support x- or y-oriented bounded-region cases without treating an integral of profit across output as profit. |
| math-a12-i14 | FunctionGraph, DerivativeTracer, ReadoutPanel | Linked displacement/velocity/acceleration graphs, signed velocity area and total-distance accumulation split at rest/reversal times. Keep initial conditions and the physical time domain with the working. |

Core shared requests: signed-area geometry; refining rectangles/trapezia; horizontal strips; accumulation tracing; controlled trig transformations; logarithmic tick geometry. These are future kit work, not approval to change the lesson designs or the frozen legacy engine. New examples still require numerical and desktop/phone fit checks when implemented.

