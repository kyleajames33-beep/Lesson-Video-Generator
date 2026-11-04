# phys-y11-fa1-v31: Does the measured total momentum survive a collision?

Brief 151 research pack, 2 November 2026. Claude owns the design. No narration, build, speech or render approval.

## 1. Exact 2025 syllabus content

- `ci67d91fd2`: Conduct a practical investigation to analyse the conservation of momentum in collisions [NSW Curriculum](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975).

Exact current official text/HTML is in `work/brief151/physics-official-actions.json` and the route fragment. CMS codenames identify content, not published outcome numbers.

## 2. Site sequence and exact worked examples

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson28.sa.html` ([site](https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson28.sa.html)). SHA256 `a4fa1f6b9703f9b14dc427eb4062a768a62d90633992840f31c7d51235075192`.

Actual `data-step-id` sections: orient-and-predict, intentions-and-key-terms, elastic-vs-inelastic-collisions, solving-collisions-with-momentum, apply-what-you-have-learned, why-momentum-survives-but-energy-may-not, independent-practice, retrieve-and-reflect.

### Exact site `we-1`
WORKED EXAMPLE · PERFECTLY INELASTIC COLLISION A $1.0\ \text{kg}$ trolley moving at $6.0\ \text{m s}^{-1}$ collides with and sticks to a stationary $2.0\ \text{kg}$ trolley. Find their common velocity after the collision, and state whether the collision is elastic. 1 GIVEN: $m_1 = 1.0\ \text{kg}$, $u_1 = 6.0\ \text{m s}^{-1}$; $m_2 = 2.0\ \text{kg}$, $u_2 = 0$; they stick together. FIND: common final velocity $v$, and the collision type. Sticking together means a single shared velocity afterwards. 2 METHOD: Conserve momentum: $$m_1u_1 + m_2u_2 = (m_1 + m_2)v$$ $$1.0(6.0) + 0 = (1.0 + 2.0)v$$ Total momentum before equals total momentum after. 3 ANSWER: $$v = \frac{6.0}{3.0} = 2.0\ \text{m s}^{-1}$$ $KE_{before} = \tfrac{1}{2}(1.0)(6.0)^2 = 18\ \text{J}$; $KE_{after} = \tfrac{1}{2}(3.0)(2.0)^2 = 6.0\ \text{J}$, energy lost, so inelastic . Check: momentum is conserved ($6.0\ \text{kg m s}^{-1}$ both sides), but $12\ \text{J}$ of KE is lost. ✓ 1 of 3 Reveal next step →

The site practical card and short-answer practical prompt ask learners to design a test. They are not a report of performed measurements. The original table below fills a preparation gap only.

## 3. Recalculation, units and significant figures

The unchanged site worked example has m₁=1.0 kg, u₁=6.0 m/s, m₂=2.0 kg, u₂=0 and a sticking final state. Taking the incoming direction positive gives p=6.0 kg m/s before and after; v=2.0 m/s; KE changes from 18 J to 6.0 J, a 12 J decrease. These results have two significant figures. The quick check (2.0 kg at 3.0 m/s, sticking to stationary 1.0 kg) gives 2.0 m/s. Short answer 1 (3.0 kg at 4.0 m/s and stationary 1.0 kg) gives v=3.0 m/s, KE 24 J before and 18 J after, decrease 6.0 J. Short answer 2 uses two 0.20 kg balls, initial speeds 5.0 m/s and 0: the physical separated elastic result is v₁=0, v₂=5.0 m/s; p=1.0 kg m/s and KE=2.5 J on both sides. The alternative algebraic root is the incoming state and does not describe the outgoing collision. Source short answer 3 is a practical design prompt, not a measured data set.

Script and unrounded results: `work/brief151/physics-c-build.py` and `physics-c-calculations.json`. Momentum units are kg m/s (equivalently N s); kinetic energy is in J. Use one laboratory direction convention before substituting. Retain unrounded values until final answers.

## 4. Misconceptions and causal reasoning

Momentum conservation belongs to the chosen system when its net external impulse is zero or negligible across the interval. Internal contact forces are equal and opposite at each instant; integrating both over the same contact interval gives equal and opposite impulses, so their contribution to the pair total cancels. Neither cart keeps its own momentum. For varying force, impulse is the signed force-time area; F_average Δt gives that area. An instantaneous force multiplied by the full contact time generally does not.

Elastic means total KE unchanged; inelastic means it changes, usually decreasing in the passive collisions considered here. Sticking is perfectly inelastic. Total energy is transferred, not destroyed. Do not equate zero total momentum with zero total KE, or use kinetic-energy conservation merely because momentum conservation applies.

The site correctly names the misconception that sticking loses momentum. Its unconditional opening and external-impulse reasoning need the corrections in section 8.

## 5. Drawing needs against the existing kits

Reuse `Arrow`, `Label`, `Panel`, `DataGraph` and graph scaling in `src/explainer/physics/course-kit.tsx`; reuse abstract cart geometry as available, the maths AlignedAlgebra/ReadoutPanel, and the existing simulated-repeats and uncertainty geometry in `physics/module5/practical-details`. These outgoing 2017 Year 12 drawings are reuse candidates only, never syllabus authority.

Pending needs: a two-cart system outline, before/contact/after states with the same signed velocity scale, paired internal force/impulse arrows, an external-impulse indicator and separate total-p/total-KE ledgers. v31 also needs independent signed sensor traces, measurement windows, repeat rows and uncertainty bars on both graph axes. Brief 148 is not built; no claim is made that its proposed Year 11 collision components already exist. Use carts and apparatus without people, faces or hands.

## 6. Entry knowledge, boundaries and handoff

- Question: Does the measured total momentum survive a collision?
- Start: Start from v30 prediction for a nearly isolated cart pair. Turn the conservation equation into measurements of both masses and all signed velocities immediately around contact.
- Stop: Complete repeated measurements, uncertainty intervals, momentum and KE comparisons, graphs, and an evaluation of external impulse and measurement limits. The illustrative data are preparation, not observations or evidence of a completed practical.
- Next: phys-y11-fa2-v01: close Fundamentals of mechanics after the collision evidence and its limits; next introduce the separate question of transverse and longitudinal waves without assuming FA2 terminology.

- Entry: Stage 5: signed arithmetic, SI units, simple equation rearrangement, fair tests and graph axes.
- Entry: phys-y11-fa1-v28: kinetic energy and energy transfers.
- Entry: phys-y11-fa1-v29: signed momentum, impulse and average force.
- Entry: phys-y11-fa1-v30: isolated system, momentum and KE classifications.

### Investigation proposal
Research proposal, with ORIGINAL ILLUSTRATIVE data below. The site supplies a design prompt but no repeated measurements or quantified uncertainty. Do not describe this table as a completed experiment.

Question: within measurement uncertainty, does the horizontal momentum of two trolleys remain unchanged across a short collision, and does the kinetic-energy result depend on bumper type?

Physical model for the energy comparison: the table calculates translational KE, Σ½mv², treating the carts as translating particles. Before interpreting it as total KE or classifying elasticity, establish that wheel rotational energy and residual external work over the measurement interval are negligible or bounded below the KE comparison resolution. Use low-inertia wheels with an assessed rotational-energy bound, or air-track gliders with negligible rotation. A small external impulse alone does not establish a small energy correction. If these conditions cannot be established, report translational KE only and do not claim a total-KE collision classification from this table.

Apparatus: level low-friction track, two dynamics trolleys with rebound and hook-and-loop bumpers, balance, two synchronised motion sensors (one facing each cart from opposite ends), data logger, padded end stops and low-speed launcher. Sensors must separately identify their own trolley before and after contact; verify reflections and avoid line-of-sight obstruction. Re-zero and map both sensor coordinates to the same +right laboratory direction. A single speed gate without direction information is inadequate for rebounds.

Method: (1) Measure each complete trolley including bumper and attachments: 0.500±0.001 kg. (2) Level and secure the track; test each freely coasting cart in both directions and estimate residual horizontal acceleration. Verify sensor scale, time synchronisation and velocity uncertainty using a known displacement and timer; the illustrative ±0.010 m/s below is an assumed validated bound, not an instrument specification. (3) Start trolley 2 at rest near the middle. Launch trolley 1 at three low speeds around 0.40, 0.60 and 0.80 m/s. Remove the launcher before contact. (4) Fit straight lines to short position-time windows immediately before and after contact, excluding the contact/deformation interval. Use a common collision time and short extrapolation when necessary. Record all four signed velocities and inspect residuals. (5) Repeat each speed three times with rebound bumpers. Repeat the series using hook-and-loop bumpers with the same measured complete masses. Measure added bumper mass or rebalance the carts. Check that sticking carts share one final speed. (6) Calculate Σmu, Σmv and Σ½mv², intervals and repeats. Compare cart-system momentum with uncertainty, then compare KE separately. (7) Test whether the estimated residual external impulse over the chosen before-to-after time is smaller than momentum resolution. Shorten the window or improve levelling if it is not. Do not adjust data to force conservation.

Variables: change initial speed in each series; compare bumper type in a separate matched series. Dependent quantities are before/after total signed momentum, their difference, and total KE change. Control total cart masses, track slope/surface, collision location/alignment, sensor setup, analysis windows and launcher procedure. Initial speed is measured on every trial rather than assumed equal from a launcher setting. Bumper type is an intentionally changed factor, not a controlled variable across the two series.

Uncertainty: mass bound ±0.001 kg; each signed velocity bound ±0.010 m/s. For p, evaluate products at mass/velocity endpoints and sum intervals. For KE evaluate squared-velocity extrema, taking a minimum of zero if the velocity interval crosses zero. This avoids treating a nearly stationary reading as an exact zero. A common measured sticking speed has correlated uncertainty: do not average it as though two independent sensors improved its accuracy. The calculations file uses conservative endpoint bounds. Report sample SD across repeats separately; do not divide calibration/levelling uncertainty by √n. Incoming momentum intervals are about ±0.0104 kg m/s at 0.40 m/s, so a difference of a few thousandths is compatible with the measurements. Repetition reduces random uncertainty of the mean; it does not by itself narrow individual-outcome scatter or calibration/levelling bounds. A wrong sign convention also persists through repeats.

Graphs: scatter p_after versus p_before for every repeat, with horizontal and vertical intervals and the reference line y=x. Use different markers for bumper types. Also graph KE_after versus KE_before with y=x; the rebound trials are compatible with the energy reference within these assumed bounds, while the sticking trials are well below it. Interpret this as total KE only under the physical-model conditions above; otherwise it is a translational-KE comparison. Group means and sample SD may be added, but retain the individual measurements. Agreement supports approximate momentum conservation for this cart system and time window, not an exact universal proof. A systematic momentum deficit calls for an external-impulse or measurement check; a KE deficit alone is not evidence that momentum failed. Sensor drift or tilt can produce an excess as well as a deficit.

Risks: clamp/secure the track, use low launch speeds and padded catches, prevent carts falling from the bench, keep cables clear and keep fingers away from bumper contact. Prefer contained spring bumpers over loose projectiles. The school risk assessment determines permitted apparatus.


### ORIGINAL ILLUSTRATIVE repeated data

All rows use m₁=m₂=0.500 kg and u₂=0.000 m/s. Values are displayed to sensor reading precision, not a claim that the uncertainty is 0.001 m/s. Bounds remain ±0.010 m/s.

| Bumper | Setting / repeat | u₁ (m/s) | v₁ (m/s) | v₂ (m/s) | p before (kg m/s) | p after (kg m/s) | KE before (J) | KE after (J) |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| rebound | 1 / 1 | 0.400 | 0.005 | 0.392 | 0.2000 | 0.1985 | 0.04000 | 0.03842 |
| rebound | 1 / 2 | 0.410 | 0.002 | 0.400 | 0.2050 | 0.2010 | 0.04202 | 0.04000 |
| rebound | 1 / 3 | 0.390 | -0.003 | 0.388 | 0.1950 | 0.1925 | 0.03803 | 0.03764 |
| rebound | 2 / 1 | 0.600 | 0.004 | 0.591 | 0.3000 | 0.2975 | 0.09000 | 0.08732 |
| rebound | 2 / 2 | 0.610 | 0.002 | 0.600 | 0.3050 | 0.3010 | 0.09302 | 0.09000 |
| rebound | 2 / 3 | 0.590 | 0.006 | 0.582 | 0.2950 | 0.2940 | 0.08702 | 0.08469 |
| rebound | 3 / 1 | 0.800 | 0.004 | 0.790 | 0.4000 | 0.3970 | 0.16000 | 0.15603 |
| rebound | 3 / 2 | 0.810 | 0.006 | 0.799 | 0.4050 | 0.4025 | 0.16403 | 0.15961 |
| rebound | 3 / 3 | 0.790 | 0.002 | 0.781 | 0.3950 | 0.3915 | 0.15603 | 0.15249 |
| stick | 1 / 1 | 0.400 | 0.196 | 0.196 | 0.2000 | 0.1960 | 0.04000 | 0.01921 |
| stick | 1 / 2 | 0.410 | 0.201 | 0.201 | 0.2050 | 0.2010 | 0.04202 | 0.02020 |
| stick | 1 / 3 | 0.390 | 0.193 | 0.193 | 0.1950 | 0.1930 | 0.03803 | 0.01862 |
| stick | 2 / 1 | 0.600 | 0.295 | 0.295 | 0.3000 | 0.2950 | 0.09000 | 0.04351 |
| stick | 2 / 2 | 0.610 | 0.301 | 0.301 | 0.3050 | 0.3010 | 0.09302 | 0.04530 |
| stick | 2 / 3 | 0.590 | 0.291 | 0.291 | 0.2950 | 0.2910 | 0.08702 | 0.04234 |
| stick | 3 / 1 | 0.800 | 0.395 | 0.395 | 0.4000 | 0.3950 | 0.16000 | 0.07801 |
| stick | 3 / 2 | 0.810 | 0.401 | 0.401 | 0.4050 | 0.4010 | 0.16403 | 0.08040 |
| stick | 3 / 3 | 0.790 | 0.391 | 0.391 | 0.3950 | 0.3910 | 0.15603 | 0.07644 |

Derived extra digits keep the calculations checkable; final reporting must include their intervals from the calculations JSON. All 18 momentum interval comparisons overlap. All nine rebound KE intervals overlap and all nine sticking KE intervals are separate. This pattern was constructed for practice, not observed. The energy intervals concern translational KE; a total-KE/elasticity conclusion also requires the rotation and external-work conditions above.

### Partial just-in-time FA0 proposals

- `ci9ce164ec`: Justify the use of independent , dependent and controlled variables , and experimental controls in a valid scientific investigation [official source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2). Use here for matching variables and controls to this test. This is partial application, not completion of the entire FA0 action.
- `cif90164e3`: Assess potential hazards and their associated risks to develop a risk assessment [official source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2). Use here for a risk assessment of carts, track and sensors. This is partial application, not completion of the entire FA0 action.
- `ci0fca96de`: Select and use a range of representations to organise data and information, including graphs, keys, models , diagrams, tables and spreadsheets [official source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2). Use here for the momentum and KE plots with units and repeats. This is partial application, not completion of the entire FA0 action.
- `ci914a5e7e`: Assess error, uncertainty and limitations in data and include calculations of percentage error , range , mean and standard deviation [official source](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2). Use here for intervals, mean, sample SD, external impulse and systematic limitations. This is partial application, not completion of the entire FA0 action.

## 7. Two original candidate question cards and worked answers

### Candidate 1: card
Two 0.500 kg trolleys have measured velocities u₁=+0.600 m/s, u₂=0, v₁=+0.010 m/s and v₂=+0.580 m/s. Each calculated total momentum has an absolute uncertainty bound of ±0.010 kg m/s. Assess whether the measurements support momentum conservation across contact.

### Candidate 1: worked answer
p_before=0.300 kg m/s; p_after=0.295 kg m/s, a difference of −0.005 kg m/s. Intervals [0.290,0.310] and [0.285,0.305] overlap. Data are compatible with conservation at this resolution; they do not establish exact equality. A repeated systematic difference needs an external-impulse/calibration check.

### Candidate 2: card
A collision experiment gives total momentum 0.300±0.010 kg m/s before and 0.298±0.010 kg m/s after. Total kinetic energy is 0.090±0.004 J before and 0.044±0.003 J after. Interpret the two comparisons and identify one improvement that would help test the momentum result more closely.

### Candidate 2: worked answer
Momentum intervals overlap, so the result is compatible with conservation. KE intervals [0.086,0.094] and [0.041,0.047] do not overlap; KE decreased by about 0.046 J, supporting an inelastic classification. Calibrate velocity sensing and shorten the before/after interval while checking residual track acceleration. Repeats alone cannot remove a calibration or slope error.

Cards contain no solved result, target sign, labelled final velocity, classification answer or shaded solution. Keep answer working separate until feedback.

## 8. Confirmed site findings for root integration

- Sections: orient-and-predict, why-momentum-survives-but-energy-may-not. Opening removes the isolated-system condition, and the explanation claims internal impulse cancellation prevents any total change regardless of what happens. External impulse on the chosen system can change its total momentum. The crash example also promises exact cart/car-system conservation without checking external impulse. Correction: State Δp_system=J_external. Momentum is constant for zero net external impulse; use approximate conservation across short contact when external impulse is negligible. Internal forces cancel for the two-object system, not for either object alone.
- Sections: independent-practice. Track tilt does not always decrease signed momentum. Its impulse can increase or decrease the total depending on slope and direction. Correction: Describe the sign of the residual external impulse and assess its size; do not predict a universally lower after value.

Root deduplicates these findings against the shared corrections log. Site files remain unchanged.
