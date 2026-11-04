# phys-y11-fa1-v27: Gravitational and Kinetic Energy

Research pack, 2 November 2026. Claude owns the design. Proposed route changes are for parent integration. No speech or render approval.

## 1. Exact 2025 syllabus content

- `ci455ddf17`: Solve problems involving changes in gravitational potential energy in a uniform gravitational field using Δ U = mg Δ h
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975
- `cief8ea610`: Solve problems involving kinetic energy using KE = 1 2 m v 2
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact official HTML is retained in `work/brief151/physics-official-actions.json`, freshly retrieved 2 November 2026. Codenames are content identifiers, not published outcome codes.

## 2. Site sequence and exact worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson25.sa.html`. SHA256 `65488b4f33a 574ed46f89f6c984f432ffeba546fc17108fdca65fbfdde37b86a`.

Sections in order: `orient-and-predict`, `intentions-and-key-terms`, `gravitational-potential-energy`, `kinetic-energy`, `apply-what-you-have-learned`, `energy-flowing-between-height-and-speed`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

WORKED EXAMPLE · POTENTIAL TO KINETIC ENERGY A $0.50\ \text{kg}$ ball is dropped from a height of $1.8\ \text{m}$. Ignoring air resistance, use energy to find its speed just before it hits the ground. Take $g = 9.8\ \text{m s}^{-2}$. 1 GIVEN: $m = 0.50\ \text{kg}$, $\Delta h = 1.8\ \text{m}$, dropped from rest, $g = 9.8\ \text{m s}^{-2}$. FIND: speed $v$ at the ground. All the potential energy lost becomes kinetic energy (no air resistance). 2 METHOD: Set the lost potential energy equal to the gained kinetic energy: $$mg\Delta h = \tfrac{1}{2}mv^2 \quad\Rightarrow\quad v = \sqrt{2g\Delta h}$$ The mass cancels, so the impact speed depends only on the drop height. 3 ANSWER: $$v = \sqrt{2 \times 9.8 \times 1.8} = \sqrt{35.3} = 5.9\ \text{m s}^{-1}$$ Check: this matches $v^2 = u^2 + 2as$ for free fall, energy and kinematics agree. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and significant figures

Unchanged0.50 kg ball,1.8 m drop,g=9.8 m/s²,rest,no air resistance: initial U relative to ground=8.82 J and final U=0. Signed ΔU=−8.82 J; work by gravity=+8.82 J and KE gain=8.82 J. Thus v²=35.28 m²/s² and v=5.939696961967 m/s, rounded5.9 m/s at two figures. The site sqrt 35.3 is a rounded intermediate, not a different input. Use35.28 throughout the calculations and 8.82 J in the source/handoff ledger so rounding the displayed speed does not change its KE artificially. Rounded energy is8.8 J at two figures.

The2 kg book lifted floor-to 2 m gains39.2 J versus19.6 J table1 m-to 2 m (g=9.8); the floor lift has twice the Δh. The3.0 kg,4.0 m quickcheck gives117.6 J, two figures1.2×10²J (the option118 J keeps an extra figure). A 4.0 kg rock falling20 m has ΔU=−784 J and speed sqrt 392=19.798989873223 m/s; a 40 kg rock has the same impact speed in the stated gravity-only case. Two-figure outputs are−7.8×10²J for signed ΔU,7.8×10²J for energy lost and 2.0×10¹m/s. Short-answer1:0.30 kg rises5.0 m, ΔU=14.7 J and launch KE14.7 J, reported 15 J. Short-answer2:0.60 kg raised2.5 m gains14.7 J, reported 15 J, and drops at 7.0 m/s. Keep all original site numbers in research; do not silently replace them.

For constant mass,30/15 speed ratio2 gives KE ratio4. For80/40 km/h the braking-distance ratio is4 if braking-force magnitude is unchanged. The site's match cases doubling mass or height double ΔU, halving the change halves it, and returning to the original height gives ΔU 0. Check dimensionally: mgΔh has kg×m/s²×m=J; KE has kg×(m/s)²=J. All46 numeric checks for both packs are in `work/brief151/physics-a-numeric.json`, calculated by `physics-a-check.py`.

## 4. Misconceptions and causal teaching

Site misconceptions: gravitational energy depends on height above ground only; doubling speed doubles KE. Define a height reference, then change it while showing that both endpoint U values shift but ΔU does not. The relevant displacement for ΔU is vertical Δh, not ramp/path length. Lowering gives negative ΔU without making the energy change a vector. KE is scalar, stays the same on reversing velocity at the same speed, and varies linearly with mass but quadratically with speed. Gravity's work is−ΔU, not+ΔU.

Retain the unchanged simple fall as the bridge from these quantities to v28, with the source's rest/no-air-resistance assumptions visible. Teach general energy-conservation conditions and friction balances in v28 rather than claiming every change in U becomes KE.

## 5. Objects, apparatus and drawing needs

Reuse actual `Arrow`, `Label`, `Dot`, `Panel`, `DataGraph` and `graphScale` exports in `src/explainer/physics/course-kit.tsx`, and maths `FunctionGraph`, `AlignedAlgebra` and `ReadoutPanel`. The older physics kit supplies drawing parts only. Brief148 is not complete.

Requests: movable height-reference line with fixed physical endpoints; attached vertical Δh ruler; linked U/KE bars and two endpoint states; same-speed opposite-direction cart comparison; same mass at speeds v and 2v with KE ratio1:4. Use abstract balls and carts, no people. Values, units, height zero and direction convention stay available during responses. Every energy bar must share its numeric state with the readout. Implementation remains pending.

## 6. Entry knowledge, boundaries and handoff

- Proposed main learner question: How do changes in height and speed change an object's gravitational and kinetic energy?
- phys-y11-fa1-v26: signed net work changes kinetic energy; gravity is conservative; basic use of KE=1/2 mv².
- Stage5: mass versus weight, energy in joules, signed vertical displacement, rearrangement, square roots and proportional reasoning.
- Start: Open on v26 proposed final trolley/KE-change account and vertical height marker. Establish chosen zero height and Δh=hfinal−hinitial, then relate signed ΔU=mgΔh to gravity's opposite work in a uniform gravitational field.
- Stop: Calculate signed gravitational-energy changes, kinetic energies and mass/speed scaling; reuse the site gravity-only dropped-ball case to connect the two accounts. Leave general conservation conditions, smooth/rough-track comparisons and non-conservative energy balances to v28.
- Next: phys-y11-fa1-v28: two snapshots of unchanged source 0.50 kg ball. At1.8 m, rest, U=8.82 J and KE=0; atground0 m, v=sqrt 35.28≈5.9 m/s, U=0 and KE=8.82 J. Keep raw speed for arithmetic. Ask What keeps the sum of these energies the same, and what can change it? v28 identifies system, forces and conditions.

## 7. Candidate practice and questions for Claude

### Candidate 1: card
A 1.2 kg block is raised from 1.5 m to 4.0 m above a fixed reference line, then lowered to 1.5 m. Use g=9.8 m/s². Calculate the gravitational-potential-energy change for each stage and for the complete trip. Would using another zero-height level change any of these energy changes?

### Candidate 1: worked answer
Rise Δh=+2.5 m gives ΔU=+29.4 J, reported+29 J. Descent gives−29.4 J, reported− 29 J. Complete-trip ΔU=0 J. Another zero shifts both endpoint U values equally and leaves their differences unchanged. The path length is not Δh.

### Candidate 2: card
A 3.0 kg cart moves at 4.0 m/s, then later at 8.0 m/s on the same horizontal track. Calculate its kinetic energy at each speed and the change. If it instead moves at 4.0 m/s in the opposite direction, what is its kinetic energy? Explain.

### Candidate 2: worked answer
Initial KE=24 J. Later KE=96 J. Change=72 J. At−4.0 m/s it still has24 J because squaring speed removes the direction sign. The two-figure values show doubling speed quadruples KE, while the change is three times the initial KE.

Question cards contain only tasks and givens. Keep answers, calculated signs, intermediate subtotals, solved roots and diagnostic highlighting for feedback. Retain every condition and unit during the countdown/thinking opportunity. Confirm the causal question and new drawing requests before design. Confirmed site findings are in `work/brief151/physics-a-site-findings.json`; parent deduplicates the shared log.
