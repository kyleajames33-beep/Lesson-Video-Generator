# Brief 143: maths kit additions for math-a12 d11 to d19 and i01 to i05

Read `00-standing-rules.md` and `checks/codex-build-135.md` first, and work in `src/explainer/math/` as in brief 135. Run this after brief 142, and apply any part change its reviews request. Do not spawn sub-agents. No lesson designs, speech or commits. Respect the 8 GB machine: one heavy process (bundle, still render or video render) at a time.

Each design's "Codex asset brief" section specifies its parts exactly; build from those specifications. Existing kit APIs and media must keep working (re-run the earlier assertion suites).

| Part | Used by | Notes from the designs |
|---|---|---|
| Asymptote guard for moving tangents and tracers | d11, d12, i04, i05 | a tangent or tracer never crosses a vertical asymptote or x = 0; it sweeps each piece separately |
| `DomainStrip` text labels and exact radian markers | d11, d13, i04, i05 | periodic exclusions such as "x ≠ π/2 + kπ"; exact labels such as 5π/12, 3/2, −1/3 |
| Paired-curve second moving point | d12 | sec x and cos x share one moving x (may be a `GraphLayer` option) |
| `NormalLineLayer` and `QuarterTurnNormal` | d14 | includes the vertical normal x = a; graphs need equal units on both axes so right angles look right |
| `OneSidedSecants` and `JoinZoom` | d15 | left and right secant readouts ticking towards their limits; zoom that straightens a smooth join but keeps a corner |
| `ConcavityTint`, concavity mode for `SignChart`/`ProgressiveSignChart`, `StackedDerivativePanels` | d16, d17 | d17 adds progressive lower traces, a two-panel mode, timed feature columns and rings |
| `FencePen` and `BoxNetFold` | d18 | plan view with fixed fence total; corners cut and flaps folding into an open box |
| `ReadoutPanel` labels and time-axis year labels | d19 | small extensions only |
| `PrimitiveFamily`, `IntegralNotation`, `DerivativeCheck` | i01 to i05 | family of vertical shifts with a C dial, tangent stubs, given point and gap bars; labelled integral parts; d/dx check that refuses a tick on a mismatch and has a failing state |
| `DerivativeTracer` dashed target, candidate scale and overlay mode | i02, i03, i04 | traced gradient lands on a dashed target curve on shared axes |
| Mirror helper | i04 | reflect ln x in the y-axis with slope reversal shown |
| `DerivativeWheel` | i05 | d05's sin, cos, −sin, −cos wheel, run forwards and backwards |

Verify every part numerically (assertions against SymPy values from the designs) and visually (desktop and phone-landscape stills), as in brief 135. Render one silent motion sample of at most 20 s that shows at least `PrimitiveFamily`, `QuarterTurnNormal`, `JoinZoom` and `StackedDerivativePanels` moving, to `out/explainer/maths-strand-kit-pilot/brief143-motion-sample.mp4`, with a full-decode check. Write `checks/codex-build-143.md` (APIs, examples, limits) and `assets/brief143-manifest.json` (source and artifact hashes). Claude judges the sample at playback speed; claim no motion approval.

Hand in to `status.md`.
