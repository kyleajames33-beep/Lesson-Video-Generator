# phys-y11-fa1-v26: Work and Kinetic Energy

Research pack, 2 November 2026. Claude owns the design. Proposed route changes are for parent integration. No speech or render approval.

## 1. Exact 2025 syllabus content

- `ci56b6c521`: Compare conservative forces and non-conservative forces
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975
- `ci2e0b478b`: Relate the work done on an object to the change in its kinetic energy during accelerated rectilinear motion using W = F ∥ s = Fs cos θ
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact official HTML is retained in `work/brief151/physics-official-actions.json`, freshly retrieved 2 November 2026. Codenames are content identifiers, not published outcome codes.

## 2. Site sequence and exact worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson24.sa.html`. SHA256 `df85bdc9ada4f9f6955669f0e72271a 3f45b2a 2e49a 33ff81d7a 6730da082821`.

Sections in order: `orient-and-predict`, `intentions-and-key-terms`, `work-transferring-energy-with-a-force`, `the-work-energy-theorem`, `apply-what-you-have-learned`, `conservative-vs-non-conservative-forces`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

WORKED EXAMPLE · WORK–ENERGY THEOREM A $1500\ \text{kg}$ car travelling at $20\ \text{m s}^{-1}$ brakes to a stop. The braking force is $6000\ \text{N}$. Use the work–energy theorem to find the stopping distance. 1 GIVEN: $m = 1500\ \text{kg}$, $u = 20\ \text{m s}^{-1}$, $v = 0$, braking force $F = 6000\ \text{N}$. FIND: stopping distance $s$. The brakes do negative work that removes all the kinetic energy. 2 METHOD: Kinetic energy to remove: $$KE = \tfrac{1}{2}mu^2 = \tfrac{1}{2}(1500)(20)^2 = 300\,000\ \text{J}$$ The braking work equals this: $Fs = KE$. All the kinetic energy is converted by the braking force over distance $s$. 3 ANSWER: $$s = \frac{KE}{F} = \frac{300\,000}{6000} = 50\ \text{m}$$ Check: doubling the initial speed would quadruple $KE$ and so quadruple $s$. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and significant figures

The unchanged car values give KEinitial=300000 J, KEfinal=0 and signed ΔKE=−300000 J. Taking forward positive, braking work is W=−6000s, hence s=50 m. The source Fs=KE line uses magnitudes; do not set positive braking work equal to signed ΔKE. Doubling 20 m/s to 40 m/s gives four times KE and stopping distance for the same braking-force magnitude. The integer inputs do not specify their significant figures, so retain50 m in the source record; an explicit two-figure design would show5.0×10¹m.

Other numeric site cases: 2.0 kg from rest to 6.0 m/s requires36 J. A 40 N horizontal force on5.0 kg through 10 m without friction does400 J, gives speed sqrt 160=12.6491106 m/s and half this speed for one quarter of the work. Match cases are+50 J for10 N along5 m,−50 J for10 N sliding friction over5 m,0 J perpendicular and 0 J without displacement. Short-answer1 uses1200 kg,8.0 m/s to 20 m/s: KEi 38400 J, KEf 240000 J, ΔKE 201600 J, reported 2.0×10⁵J. Short-answer2 uses1500 kg over120 m: KEi 48000 J, KEf 300000 J, ΔKE 252000 J and forward net force2100 N. Preserve raw values until final rounding;40,10,20 and 120 have ambiguous trailing-zero precision.

All46 numeric checks for both packs are in `work/brief151/physics-a-numeric.json`, calculated by `physics-a-check.py`. Work units are N×m=J=kg m²s⁻². The force doing work must be identified before applying its angle; θ is the angle between that force and displacement.

## 4. Misconceptions and causal teaching

Site misconceptions: holding a stationary heavy box does work on the box; doubling speed doubles KE. Explain that a force must have a component along displacement, while muscles can consume chemical energy without displacing the box. Display net work separately from the work of one applied force. A normal force perpendicular to the motion does zero work; a braking force does negative work; a forward pulling force can do positive work.

Compare gravity along two paths between the same heights with kinetic friction along two lengths. Conservative means path-independent work, equivalently zero work on a closed path. Non-conservative does not mean all work must be negative or energy is destroyed. An externally driven force can add energy. Friction transfers organised mechanical energy to internal energy; the source's broader lost-for-good wording needs correction.

## 5. Objects, apparatus and drawing needs

Reuse actual `Arrow`, `Label`, `Dot`, `Panel`, `DataGraph` and `graphScale` exports in `src/explainer/physics/course-kit.tsx`; `FunctionGraph`, `AlignedAlgebra` and `ReadoutPanel` from the maths kit for calibrated graphs and current calculations. These are drawing parts, not 2025 syllabus coverage. Brief148 is not complete; no new physics-kit availability is assumed.

Requests: a trolley/ramp drawing preserving v24's20-degree anchors; attached force-component/displacement arrows and an angle arc; a work ledger that distinguishes each force's signed work from the net; matched path diagrams sharing endpoints but differing length; proportional KE squares/bars driven by the same values as readouts. Use abstract blocks/carts and paths, no people. Show only the reasoning stage being explained. Keep the full task, givens, units and angle available during thinking holds. Implementation remains pending.

## 6. Entry knowledge, boundaries and handoff

- Proposed main learner question: How does a force along the motion change an object's kinetic energy?
- phys-y11-fa1-v24: measured ramp motion, force along the track mg sin(theta), displacement s and resistance. v25 remains on cultural hold and is not a prerequisite.
- phys-y11-fa1-v14 and v22-v23: net force, acceleration and resolving a force along motion.
- Stage5: joules, energy transfers, displacement, cos(theta), signed arithmetic, squares and square roots. KE=1/2 mv² is introduced here only as needed for work-energy; v27 owns systematic KE problems.
- Start: Open on the actual v24 scene16: trolley at bottom of 20-degree track, apparatus left, dashed purple mg sin(theta) along track and grey s arrow; small illustrative graph and summary right (gradient 9.79 m/s², intercept−0.03 m/s²); Next:work and kinetic energy chip. Distinguish gravity's component from net force because measured rolling resistance remains.
- Stop: Define signed work by a constant force W=Fs cos(theta), sum work of all forces for ΔKE, solve accelerated rectilinear cases and compare conservative versus non-conservative forces using path dependence/closed-loop work. Do not teach general mechanical-energy conservation or momentum.
- Next: phys-y11-fa1-v27: retain the trolley, along-track displacement and KE-change account; add a vertical height-change marker and an empty gravitational-energy account labelled How does height change this account? v27 introduces ΔU=mgΔh and systematic KE calculations.

## 7. Candidate practice and questions for Claude

### Candidate 1: card
A 4.0 kg trolley starts from rest on a horizontal track. A constant 30 N force pulls at 60 degrees above horizontal through 4.0 m while kinetic friction is 5.0 N. Calculate the work done by the pulling force and by friction, the net work, and the trolley's final speed.

### Candidate 1: worked answer
Pull work=30×4.0×cos60=60 J (6.0×10¹J). Friction work=−5.0×4.0=−20 J (−2.0×10¹J). Normal and weight do zero work. Net work=40 J (4.0×10¹J). From rest, v=sqrt(2×40/4.0)=sqrt(20)=4.472136 m/s, reported 4.5 m/s. The normal force is 4.0×9.8−30sin60=13.219 N>0, so contact can be maintained. Each force is constant; the stated friction already includes its contact conditions.

### Candidate 2: card
An 800 kg cart travels along a straight horizontal track. Its speed changes from 15 m/s to 5.0 m/s over 40 m. Take forward as positive and treat all given values as two significant figures. Determine the net work and the constant net force, then explain the sign of each.

### Candidate 2: worked answer
ΔKE=(1/2)800(5.0²−15²)=−80000 J=−8.0×10⁴J. Fnet=W/s=−2000 N=−2.0×10³N. The net force opposes forward displacement and the cart loses kinetic energy. Do not infer a particular individual brake force if other horizontal forces are present.

Question cards contain only tasks and givens. Keep answers, calculated signs, intermediate subtotals, solved roots and diagnostic highlighting for feedback. Retain every condition and unit during the countdown/thinking opportunity. Confirm the causal question and new drawing requests before design. Confirmed site findings are in `work/brief151/physics-a-site-findings.json`; parent deduplicates the shared log.
