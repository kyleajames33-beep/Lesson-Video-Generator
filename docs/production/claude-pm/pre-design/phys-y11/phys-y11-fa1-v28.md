# phys-y11-fa1-v28: Why does mechanical energy stay constant on a smooth track but decrease when friction does work?

Brief 151 research pack, 2 November 2026. Physics 11–12 (2025), Year 11 only. Claude owns the design. This pack proposes the single learner question and precise route changes for root; it is not design, speech or render approval.

## 1. Exact 2025 syllabus content

- `ci778e4712`: State the conditions under which total mechanical energy is conserved
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

- `ci7fd8d698`: Apply the law of conservation of mechanical energy and use W = Δ KE = 1 2 m v 2 and W = Δ U to solve problems
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

- `cie3b5703f`: Analyse energy transformations and calculate the work done when an object moves within a uniform gravitational field, including changes in gravitational potential energy due to height and identifying the forces responsible for doing work
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

CMS codenames are content identifiers, not published outcome codes. Exact official HTML/MathML is retained in the route fragment; flattened text can lose vectors and fractions. Fresh actions were checked in `work/brief151/physics-official-validation.json`.

## 2. Site sequence and worked example

Read-only source: [C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson26.sa.html](https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson26.sa.html), SHA256 `937db5faaf90bd660c4d75015ac235a4dcedaf04500fc2a0236633eec22c17f3`.

Data-step IDs in teaching order: `orient-and-predict`, `intentions-and-key-terms`, `the-law-and-its-condition`, `solving-problems-with-energy-conservation`, `apply-what-you-have-learned`, `when-friction-acts-energy-isn-t-lost`, `independent-practice`, `retrieve-and-reflect`.

The source predicts first, establishes terms, develops the core examples, inserts an application, then tests and retrieves. This is a concept/problem pack, not an investigation. No illustrative data are claimed as observations. v31 owns the collisions investigation.

### Exact site example `we-1`

WORKED EXAMPLE · ENERGY CONSERVATION ON A SLIDE A $30\ \text{kg}$ child starts from rest at the top of a smooth (frictionless) slide $2.5\ \text{m}$ high. Using $g = 9.8\ \text{m s}^{-2}$, find the child's speed at the bottom. 1 GIVEN: $m = 30\ \text{kg}$, $h = 2.5\ \text{m}$, $u = 0$, frictionless, $g = 9.8\ \text{m s}^{-2}$. FIND: speed $v$ at the bottom. No friction, so mechanical energy is conserved; only gravity does work. 2 METHOD: All the potential energy becomes kinetic energy: $$mgh = \tfrac{1}{2}mv^2 \quad\Rightarrow\quad v = \sqrt{2gh}$$ Starting from rest, $KE_i = 0$; taking the bottom as $U_f = 0$, the mass cancels. 3 ANSWER: $$v = \sqrt{2 \times 9.8 \times 2.5} = \sqrt{49} = 7.0\ \text{m s}^{-1}$$ Check: the answer is independent of mass, a heavier child reaches the same speed. ✓ 1 of 3 Reveal next step →

Extracted-text SHA256: `b0aca50615241ce6731b3d59d7d8ff4de9d1e7176a5aa5a8f26c92729ecfa2ed`.

## 3. Recalculation, units and precision

Source we-1 is unchanged: m=30 kg, vertical drop 2.5 m, u=0, g=9.8 m s⁻², smooth stationary slide. Taking the bottom as U=0 gives Uᵢ=30×9.8×2.5=735 J and KEᵢ=0. The track’s normal force is perpendicular to instantaneous motion and does no work. Gravity does +735 J of work, while ΔU=−735 J. KEf=735 J, so v=√(2gh)=√49=7.0 m s⁻¹. The mass cancels. The source energy bars’ 735 J is an unrounded arithmetic value; do not pretend the integer mass 30 kg specifies three significant figures. For a two-figure display use 7.4×10² J, while retaining 735 J internally. Draw an abstract sliding block/cart with the same mass and numbers, not the child in the source question.

Source quick check h=5.0 m gives √98=9.8994949… m s⁻¹, or 9.9 m s⁻¹. Source activity uses m=2.0 kg, h=3.0 m, u=0: Uᵢ=58.8 J, smooth speed √58.8=7.6681158…≈7.7 m s⁻¹. Actual v=6.0 m s⁻¹ gives KEf=36 J and a mechanical-energy decrease of 22.8 J, or 23 J to two significant figures. Work by gravity is +58.8 J, work by friction is −22.8 J, and net work is +36 J. In the Earth+object mechanical accounting, Δ(KE+U)=−22.8 J. In a larger system including the rubbing surfaces, the same amount increases internal energy (with any stated sound transfer), not destroyed energy.

Source short answer Q1 keeps m=0.20 kg, h=1.5 m and actual v=4.0 m s⁻¹: ideal speed √29.4=5.4221767…≈5.4 m s⁻¹; Uᵢ=2.94 J; final translational KE=1.6 J; shortfall=1.34 J≈1.3 J. Because the question says a ball on a ramp, a translation-only assumption must be stated before calling the entire shortfall dissipated energy; rotation could otherwise hold part of it. Do not introduce rotational-energy calculations into this video. Source Q2 m=0.25 kg, h=1.8 m, smooth gives √35.28=5.9396969…≈5.9 m s⁻¹; height, not ramp angle, determines this ideal speed. Source Q3 repeats 2.0 kg, 3.0 m, 6.0 m s⁻¹; 58.8−36=22.8 J. Its text does not explicitly say starts from rest, although the answer assumes KEᵢ=0. Restore that condition before asking the numerical question.

Use Emech=KE+U and ΔEmech=Wnc, with Wnc the net work by forces not included in the potential store. For this stationary rough track Wfriction<0. In general an applied force can increase mechanical energy, so non-conservative work does not always mean a decrease. Conservation requires zero net non-conservative work over the interval, with the chosen energy stores and system stated; “only conservative forces do work” is a sufficient simple case. A normal/support force may act while doing zero work. In uniform gravity Wgravity=−ΔU; work done by an external lifting force equals +ΔU only for the stated no-KE-change case. Quote the official action as written, but the general kinetic-energy change is ½mvf²−½mvi²; ½mv² alone gives a change only when the initial speed is zero.

All numerical cases, including source application/short-answer data and the original cards below, were recalculated in `work/brief151/physics-b-numeric.py`; the evidence is `work/brief151/physics-b-numeric.json`. Site numbers stay unchanged. Keep guard digits internally and state final precision. Integer teaching values have unstated measurement precision; use two figures only when the task gives or declares that precision.

## 4. Misconceptions and causal teaching

The site names “friction destroys energy” and “mechanical energy is conserved in every situation”. Correct by following energy into internal stores and identifying a system. Other traps: confusing gravitational work with +ΔU; applying mgh=½mv² when the object already has kinetic energy; using ramp length instead of vertical height; assuming a force must do work simply because it acts; treating every non-conservative force as a mechanical-energy loss; silently including a rolling object while ignoring rotational energy. Keep a stationary-track assumption when declaring the normal force does no work.

These are source-named or mathematically/physically implied traps, not claims about examination frequency. Establish direction, system, relevant stores and conditions before substituting numbers.

## 5. Objects, apparatus and drawing needs

Existing drawing primitives inspected: physics/course-kit.tsx Arrow, Label, Panel, Dot, graphScale and DataGraph; the old 2017 catalogue is drawing material only. Maths FunctionGraph, ExpressionSlot and AlignedAlgebra can support the current equations. New drawing needs: abstract cart on a smooth/rough path, declared height reference, linked KE/U bars whose total is tracked, a separate internal-energy bar when friction acts, and force-work signs attached to gravity/normal/friction. Retain the identical mass/height state when changing the surface. No people or hands. Kit148 has not been built: these are part requirements, not claims about an available API.

No investigation data are fabricated for these concept videos. A conceptual animation does not count as measured evidence. The old kit’s syllabus map stays outgoing 2017 content; only its useful drawing parts are reusable.

## 6. Entry knowledge, route changes and handoff

**Proposed learner question:** Why does mechanical energy stay constant on a smooth track but decrease when friction does work?

**Replace the placeholder:** How can I explain and apply conservation of mechanical energy?

- Stage 5 Science: energy is transferred rather than destroyed; forces can transfer energy. Stage 5 Mathematics: SI units, signed arithmetic, squares, square roots and rearranging equations.
- phys-y11-fa1-v26: conservative versus non-conservative forces, force work and net work equals change in kinetic energy.
- phys-y11-fa1-v27: KE=½mv², ΔU=mgΔh in a uniform field, a declared potential-energy reference and height-versus-speed states.
- phys-y11-fa1-v16/v21: free-body diagrams, force direction and normal force; use only the part needed to identify work on a stationary track.

**Start:** Retain v27’s unchanged 0.50 kg ball at h=1.8 m, initially at rest: U=8.82 J relative to ground, KE=0; and the h=0 m state with v=√35.28≈5.9 m/s, U=0, KE=8.82 J using unrounded speed. Show a grey total row as a question. Prompt: “What keeps the sum of these energies the same, and what can change it?” Identify the object–Earth system, stationary support and forces before asserting conservation.

**Stop:** State the conditions for mechanical-energy conservation, solve smooth-track and dissipative translational problems, and identify gravity, normal force and friction work with correct signs. Finish with mechanical versus total energy; do not teach impulse or collision momentum yet.

**Next:** phys-y11-fa1-v29: retain the abstract cart after an energy change, add a declared rightward positive direction and ask what force acting over a time tells us about the velocity change. v29 introduces momentum and net impulse, rather than treating momentum as another name for energy.

Preserve existing video IDs, playlist order and action ownership. Root decides the final causal wording and route changes.

## 7. Candidate practice and site findings

### Candidate 1

A 2.0 kg block moves at 3.0 m s⁻¹ at the top of a smooth stationary track, 1.2 m above its bottom. With g=9.8 m s⁻² and no air resistance, find its speed at the bottom. Treat the block as a translating particle.

**Worked answer:** Using the bottom as U=0, Eᵢ=½(2.0)(3.0)²+(2.0)(9.8)(1.2)=9.00+23.52=32.52 J. With zero net non-conservative work, ½(2.0)v²=32.52, so v=√32.52=5.70263097…=5.7 m s⁻¹ (two significant figures). The initial KE cannot be omitted.

### Candidate 2

A 0.80 kg block starts from rest and slides down a stationary rough track through a vertical drop of 2.0 m. Its speed at the bottom is 5.0 m s⁻¹. Use g=9.8 m s⁻². Find the work done by friction and explain the energy change. Air resistance is negligible and the block does not rotate.

**Worked answer:** Wgravity=mgh=15.68 J, ΔKE=½(0.80)(5.0)²=10.0 J, and the normal force does zero work. Wfriction=ΔKE−Wgravity=−5.68 J≈−5.7 J (two figures). Mechanical energy decreases by 5.7 J, transferred into internal energy of block and track. The larger system conserves total energy.

Only the question, givens, direction convention and unsolved graph belong on each card. Keep results, solved arrows, subtotal areas and answer signs hidden until feedback. A ten-second response hold invites pausing. Candidate questions are original HSC-style preparation for HSCScience, not official marking schemes.

Confirmed site errors and exact old text are in this fragment’s `siteFindings` for root to deduplicate into `site-corrections-phys-y11.md`. The source site remains read only. General formulas are stated with signs and assumptions above; do not copy contradictory source shorthand.
