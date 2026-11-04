# phys-y11-fa1-v29: Why does a longer stopping time reduce the average force for the same change in momentum?

Brief 151 research pack, 2 November 2026. Physics 11–12 (2025), Year 11 only. Claude owns the design. This pack proposes the single learner question and precise route changes for root; it is not design, speech or render approval.

## 1. Exact 2025 syllabus content

- `ci7e7f090d`: Solve problems involving momentum using p ⃗ = m v ⃗ and Δ p ⃗ = F ⃗ net Δ t
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

CMS codenames are content identifiers, not published outcome codes. Exact official HTML/MathML is retained in the route fragment; flattened text can lose vectors and fractions. Fresh actions were checked in `work/brief151/physics-official-validation.json`.

## 2. Site sequence and worked example

Read-only source: [C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson27.sa.html](https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson27.sa.html), SHA256 `0e388c32c9ecfa4293bab048ef0c6143ce7d855c401979a6e40ea99a74828102`.

Data-step IDs in teaching order: `orient-and-predict`, `intentions-and-key-terms`, `momentum-mass-in-motion`, `impulse-changing-momentum`, `apply-what-you-have-learned`, `why-momentum-is-conserved-in-collisions`, `independent-practice`, `retrieve-and-reflect`.

The source predicts first, establishes terms, develops the core examples, inserts an application, then tests and retrieves. The source’s section “why-momentum-is-conserved-in-collisions” and short answer Q3 belong to v30. Retain the section in the provenance list but do not teach its proof ahead of the pair-system handoff. v31 owns the practical.

### Exact site example `we-1`

WORKED EXAMPLE · IMPULSE AND FORCE A $0.15\ \text{kg}$ cricket ball travelling at $30\ \text{m s}^{-1}$ is caught and brought to rest. Compare the average force if it is stopped in $0.020\ \text{s}$ (rigid hands) versus $0.10\ \text{s}$ (giving with the catch). 1 GIVEN: $m = 0.15\ \text{kg}$, $u = 30\ \text{m s}^{-1}$, $v = 0$; $t_1 = 0.020\ \text{s}$, $t_2 = 0.10\ \text{s}$. FIND: average force in each case. The change in momentum is the same; only the time differs. 2 METHOD: $$\Delta p = m(v - u) = 0.15(0 - 30) = -4.5\ \text{kg m s}^{-1}$$ then $$F = \frac{\Delta p}{t}$$ The magnitude of $\Delta p$ is $4.5\ \text{kg m s}^{-1}$; use it with each time. 3 ANSWER: $$F_1 = \frac{4.5}{0.020} = 225\ \text{N} \qquad F_2 = \frac{4.5}{0.10} = 45\ \text{N}$$ Check: a 5× longer stopping time gives a 5× smaller force, softer catch, gentler force. ✓ 1 of 3 Reveal next step →

Extracted-text SHA256: `f22075489bf3fa13b34c4c072ce8c525396ba41c190b347e6fd1712db41ce743`.

## 3. Recalculation, units and precision

Source we-1 keeps m=0.15 kg, u=30 m s⁻¹, v=0 and stopping times 0.020 s and 0.10 s. Take the initial direction as positive. pi=+4.5 kg m s⁻¹, pf=0, Δp=−4.5 kg m s⁻¹=−4.5 N s. Average net forces on the ball are −4.5/0.020=−225 N and −4.5/0.10=−45 N, opposite its initial motion. Their magnitudes are 225 N and 45 N, exactly the source’s arithmetic. For two significant figures display 2.3×10² N and 45 N; retain −225 N internally. Time is five times longer, and average-force magnitude five times smaller for fixed Δp. The source’s positive graph is a graph of stopping-force magnitude: label it |Fnet,avg| in N and impulse magnitude |Δp| in N s. A signed Fnet–t graph with the initial direction positive must put both rectangles below zero. Rectangles represent average forces, not measured constant force histories or peak forces.

The source 1200 kg car at 15 m s⁻¹ has momentum magnitude 18,000 kg m s⁻¹. Direction is the car’s velocity direction; if a full vector is requested it must be given in the question. Integer precision is unstated; do not silently add figures. Source activity m=70 kg, u=8.0 m s⁻¹, v=0 gives Δp=−560 kg m s⁻¹. Over 0.10 s: Fnet,avg=−5600 N; over 0.50 s: −1120 N. To two significant figures their magnitudes are 5.6×10³ N and 1.1×10³ N. Draw a test block/crumple structure with unchanged mass, speed and times instead of a person.

Source short answer Q2 retains the same 0.15 kg, 30 m s⁻¹ ball but t=0.40 s: Δp=−4.5 kg m s⁻¹ and Fnet,avg=−11.25 N, or magnitude 11 N to two figures. Its marking guide says Δp=+4.5 without calling this a magnitude, while its full model answer correctly gives −4.5 for initial-positive direction. Report direction consistently and label magnitude answers. Its later force line is likewise a magnitude; do not put +11.25 N on a signed on-ball arrow.

For constant mass, Fnet,avg Δt=Δp and 1 N s=1 kg m s⁻¹. For variable force the signed area under Fnet versus time is the impulse, with a rectangular average-force equivalent; a triangle may be evaluated geometrically without formal calculus. Distinguish net force from one contact force. In a vertical catch gravity also contributes impulse; without further data the formula determines average net force, not the hands’ contact force exactly. Use a horizontal glider/stopping-pad context for new numerical cards. The same-Δp comparison requires the same mass and the same initial/final velocities, including any rebound. A longer duration guarantees smaller average net force for this fixed change, not automatically a lower peak force for every possible time profile.

All numerical cases, including source application/short-answer data and the original cards below, were recalculated in `work/brief151/physics-b-numeric.py`; the evidence is `work/brief151/physics-b-numeric.json`. Site numbers stay unchanged. Keep guard digits internally and state final precision. Integer teaching values have unstated measurement precision; use two figures only when the task gives or declares that precision.

## 4. Misconceptions and causal teaching

The site names “a cushion reduces Δp” and “momentum equals kinetic energy”. Fix the first by holding initial/final momenta constant and changing only time; different rebound outcomes can change Δp. Fix the second with p=mv as a vector versus KE=½mv² as a scalar. Additional traps: subtracting speeds rather than signed velocities in a reversal; confusing force on the object with its equal/opposite force on the stop; treating FΔt as exact for a varying force without an average; calling an unsigned graph signed impulse; treating average force as peak force; assuming a single object’s momentum is conserved while it is being stopped.

These are source-named or mathematically/physically implied traps, not claims about examination frequency. Establish direction, system, relevant stores and conditions before substituting numbers.

## 5. Objects, apparatus and drawing needs

Reuse inspected Arrow/Label/Panel/Dot and calibrated DataGraph or maths FunctionGraph/AlignedAlgebra/ExpressionSlot. New drawing needs: abstract glider and compressible stop, a declared positive axis, initial/final p arrows with a subtraction diagram, two time-scaled average-force rectangles with equal signed area, and an original triangular Fnet–t graph for the card. Distinguish signed net force from magnitude by labels and zero line, not colour alone. A two-cart handoff shows equal/opposite contact forces on different carts; conservation proof belongs to v30. No people or hands. Kit148 remains unbuilt; these are drawing requests, not promised component APIs.

No investigation data are fabricated for these concept videos. A conceptual animation does not count as measured evidence. The old kit’s syllabus map stays outgoing 2017 content; only its useful drawing parts are reusable.

## 6. Entry knowledge, route changes and handoff

**Proposed learner question:** Why does a longer stopping time reduce the average force for the same change in momentum?

**Replace the placeholder:** How can I explain and apply momentum and impulse?

- Stage 5 Mathematics: signed quantities, SI unit conversions, graph rectangle/triangle areas and rearrangement.
- phys-y11-fa1-v01/v02: velocity is a vector and direction must be declared before subtraction.
- phys-y11-fa1-v14: Fnet=ma for constant mass; acceleration is change in velocity divided by time.
- phys-y11-fa1-v17: third-law forces act on different objects, recalled only for the handoff to v30.
- phys-y11-fa1-v26–v28: work/energy uses force through displacement; momentum is a distinct vector quantity, not kinetic energy.

**Start:** Retain v28’s abstract cart after an energy change, add a declared rightward positive direction and ask what force acting over a time tells us about the velocity change. Introduce p=mv, then Δp=m(v−u)=Fnet Δt for constant mass and constant net force; for a changing force use its average over the interval.

**Stop:** Solve one-dimensional signed momentum and net-impulse problems, interpret signed force–time area, and explain why increasing stopping time reduces average net force when initial/final momenta are fixed. Stop before proving system momentum conservation or classifying elastic/inelastic collisions.

**Next:** phys-y11-fa1-v30 opens on two abstract carts approaching, with individual momentum arrows and the contact-force pair appearing. Ask: “If these carts push on each other, what happens to the momentum of the pair?” v30 draws the system around both carts and owns internal-impulse cancellation, external impulse and elastic/inelastic collision analysis.

Preserve existing video IDs, playlist order and action ownership. Root decides the final causal wording and route changes.

## 7. Candidate practice and site findings

### Candidate 1

A 0.40 kg glider initially moves right at 3.0 m s⁻¹. After contact with a stop it moves left at 2.0 m s⁻¹. Contact lasts 0.050 s. Taking right as positive, find its change in momentum and average net force during contact.

**Worked answer:** pi=(0.40)(+3.0)=+1.2 kg m s⁻¹, pf=(0.40)(−2.0)=−0.80 kg m s⁻¹. Δp=pf−pi=−2.0 kg m s⁻¹. Fnet,avg=−2.0/0.050=−4.0×10¹ N, or 40 N left (two significant figures). A reversal needs the sum of the speed magnitudes inside the signed subtraction.

### Candidate 2

A 0.60 kg glider initially moves right at 5.0 m s⁻¹. Take right as positive. Its net force varies linearly from 0 N at t=0 to −6.0×10¹ N at t=0.040 s, then linearly to 0 N at t=0.080 s. Find its velocity at t=0.080 s.

**Worked answer:** The signed triangular Fnet–t area is J=½(0.080)(−60)=−2.4 N s. pi=(0.60)(5.0)=+3.0 kg m s⁻¹, so pf=+3.0−2.4=+0.60 kg m s⁻¹ and vf=+0.60/0.60=+1.0 m s⁻¹, right (two significant figures). Keep all three time/force coordinates on the card; the negative force is a given, not the final answer sign.

Only the question, givens, direction convention and unsolved graph belong on each card. Keep results, solved arrows, subtotal areas and answer signs hidden until feedback. A ten-second response hold invites pausing. Candidate questions are original HSC-style preparation for HSCScience, not official marking schemes.

Confirmed site errors and exact old text are in this fragment’s `siteFindings` for root to deduplicate into `site-corrections-phys-y11.md`. The source site remains read only. General formulas are stated with signs and assumptions above; do not copy contradictory source shorthand.
