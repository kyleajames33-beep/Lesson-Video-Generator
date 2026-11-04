# phys-y11-fa1-v30: Why can two colliding objects keep the same total momentum while losing kinetic energy?

Brief 151 research pack, 2 November 2026. Claude owns the design. No narration, build, speech or render approval.

## 1. Exact 2025 syllabus content

- `ci4f02a70c`: State the conditions under which momentum is conserved [NSW Curriculum](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975).
- `cib830a9b7`: Explain why momentum is conserved during collisions [NSW Curriculum](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975).
- `ci6036e9ce`: Classify collisions as elastic or inelastic by calculating and comparing the total kinetic energy before and after the collision [NSW Curriculum](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975).
- `ci84483399`: Solve problems involving the conservation of momentum using ∑ m v ⃗ before = ∑ m v ⃗ after and, where appropriate, conservation of kinetic energy [NSW Curriculum](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975).
- `ci475a70b8`: Solve problems involving the conservation of momentum in elastic collisions using ∑ 1 2 m v before 2 = ∑ 1 2 m v after 2 [NSW Curriculum](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975).

Exact current official text/HTML is in `work/brief151/physics-official-actions.json` and the route fragment. CMS codenames identify content, not published outcome numbers.

## 2. Site sequence and exact worked examples

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson28.sa.html` ([site](https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson28.sa.html)). SHA256 `a4fa1f6b9703f9b14dc427eb4062a768a62d90633992840f31c7d51235075192`.

Actual `data-step-id` sections: orient-and-predict, intentions-and-key-terms, elastic-vs-inelastic-collisions, solving-collisions-with-momentum, apply-what-you-have-learned, why-momentum-survives-but-energy-may-not, independent-practice, retrieve-and-reflect.

### Exact site `we-1`
WORKED EXAMPLE · PERFECTLY INELASTIC COLLISION A $1.0\ \text{kg}$ trolley moving at $6.0\ \text{m s}^{-1}$ collides with and sticks to a stationary $2.0\ \text{kg}$ trolley. Find their common velocity after the collision, and state whether the collision is elastic. 1 GIVEN: $m_1 = 1.0\ \text{kg}$, $u_1 = 6.0\ \text{m s}^{-1}$; $m_2 = 2.0\ \text{kg}$, $u_2 = 0$; they stick together. FIND: common final velocity $v$, and the collision type. Sticking together means a single shared velocity afterwards. 2 METHOD: Conserve momentum: $$m_1u_1 + m_2u_2 = (m_1 + m_2)v$$ $$1.0(6.0) + 0 = (1.0 + 2.0)v$$ Total momentum before equals total momentum after. 3 ANSWER: $$v = \frac{6.0}{3.0} = 2.0\ \text{m s}^{-1}$$ $KE_{before} = \tfrac{1}{2}(1.0)(6.0)^2 = 18\ \text{J}$; $KE_{after} = \tfrac{1}{2}(3.0)(2.0)^2 = 6.0\ \text{J}$, energy lost, so inelastic . Check: momentum is conserved ($6.0\ \text{kg m s}^{-1}$ both sides), but $12\ \text{J}$ of KE is lost. ✓ 1 of 3 Reveal next step →

The short-answer elastic example uses the unchanged 0.20 kg, 5.0 m/s numbers; its full recalculation follows.

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

- Question: Why can two colliding objects keep the same total momentum while losing kinetic energy?
- Start: Retain v29 final frame: two approaching abstract carts with individual momentum arrows and a contact-force pair. Ask: If these carts push on each other, what happens to the momentum of the pair? Draw the system around both carts, then distinguish cancelling internal impulses from any external impulse.
- Stop: Explain the isolated-system condition and third-law impulse cancellation; calculate signed momentum and total KE, classify elastic versus inelastic collisions, solve one sticking and one separated elastic case. Losing KE describes the inelastic comparison; elastic collisions retain KE. Leave data acquisition, graphing and uncertainty to v31.
- Next: phys-y11-fa1-v31: retain the two-cart system and its predicted before/after momentum and KE; ask whether measurements can distinguish genuine change from uncertainty.

- Entry: Stage 5: signed arithmetic, SI units, simple equation rearrangement, fair tests and graph axes.
- Entry: phys-y11-fa1-v28: kinetic energy and energy transfers.
- Entry: phys-y11-fa1-v29: signed momentum, impulse and average force.

## 7. Two original candidate question cards and worked answers

### Candidate 1: card
On a level low-friction track, a 0.40 kg trolley moves right at 1.5 m/s and a 0.60 kg trolley moves left at 0.50 m/s. They stick together. External impulse during contact is negligible. Find their final velocity and compare total kinetic energy before and after.

### Candidate 1: worked answer
Take right positive: p=0.40(1.5)+0.60(−0.50)=0.30 kg m/s. Common velocity=+0.30 m/s (right). KE before=0.525 J (0.53 J to two significant figures); KE after=0.045 J. Decrease=0.480 J (0.48 J). It is perfectly inelastic; total energy transfers to internal energy and sound.

### Candidate 2: card
A 0.40 kg trolley moving right at 3.0 m/s collides elastically with a stationary 0.80 kg trolley. External impulse is negligible. Use momentum and kinetic-energy conservation to determine both final velocities.

### Candidate 2: worked answer
Right positive: 0.40v₁+0.80v₂=1.2 and 0.20v₁²+0.40v₂²=1.8. The outgoing solution is v₁=−1.0 m/s and v₂=+2.0 m/s. Check p=1.2 kg m/s, KE=1.8 J. Reject the unchanged incoming-state algebraic root because the carts must separate after contact.

Cards contain no solved result, target sign, labelled final velocity, classification answer or shaded solution. Keep answer working separate until feedback.

## 8. Confirmed site findings for root integration

- Sections: orient-and-predict, why-momentum-survives-but-energy-may-not. Opening removes the isolated-system condition, and the explanation claims internal impulse cancellation prevents any total change regardless of what happens. External impulse on the chosen system can change its total momentum. The crash example also promises exact cart/car-system conservation without checking external impulse. Correction: State Δp_system=J_external. Momentum is constant for zero net external impulse; use approximate conservation across short contact when external impulse is negligible. Internal forces cancel for the two-object system, not for either object alone.
- Sections: independent-practice. Track tilt does not always decrease signed momentum. Its impulse can increase or decrease the total depending on slope and direction. Correction: Describe the sign of the residual external impulse and assess its size; do not predict a universally lower after value.

Root deduplicates these findings against the shared corrections log. Site files remain unchanged.
