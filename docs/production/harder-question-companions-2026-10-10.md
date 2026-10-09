# Harder question companions: authored exemplars

Prepared 10 October 2026 by /root/next_batch_preparation. Planning only. These are newly authored teaching tasks, not official exam questions or promised marks. No selected lesson, recording, caption track, animation, render or approval was created. Year 12 Module 5 core explanations in both subjects remain the first production priority after the current chemistry batch. These companions follow their actual prerequisites, rather than delaying the core run.

Placement follows the [Year 12 priority plan](year12-module5-teaching-priority-2026-10-10.md), whose official NESA implementation/module sources were checked on 10 October. Limiting reactants is a Year 11 prerequisite transferred into Year 12 entry; equilibrium belongs in Chemistry Module 5; titration is later Module 6 after its acid/base and solution prerequisites. The existing [course ledger](course-progression-plan-2026-10-09.md) and content checklist do not certify these tasks or complete Module 5 required-action coverage.

## Shared teaching and attempt design

Use the accepted conversational calculation standard and [teaching templates](teaching-templates.md). Each problem has one short task, a stable equation and grouped givens/reference values. Reveal the reason for an operation before the result. Retain useful established results and cue later result lines from actual speech. Existing OrganisedCalculation boards, species-labelled ratio/concentration diagrams and purposeful graphs are reuse candidates, not obligations. No artwork, feature count, fixed runtime or word quota is imposed.

The prompt contains all essential conditions and supplied data, but no answer-bearing result. Give an explicit invitation to pause and work through the decision before feedback. Record prompt and feedback separately and assemble a quiet start opportunity; an initial two-second gap is a review candidate, not enough time to finish a multistep calculation or a universal quota. The invitation to pause provides additional working time. Bind the measured gap and earliest answer to the selected audio; protect working, retained trails, diagrams, captions and recall overlays. A typed pause instruction does not create silence. Review whether the pause and feedback are usable, rather than claiming a genuine attempt from a schema field alone.

Unrounded working below is author evidence. The student board may show approximate guard digits, while speech describes the relationship and reports essential answers. Exact constants and repeated numerical arithmetic stay readable on the board and descriptive transcript. Independent checks used direct JavaScript arithmetic plus Python Decimal for amount/mass tasks and an independently bisected equilibrium root. This confirms the numerical answers for the stated model; teacher/source review and real playback/listening remain pending.

## 1. Limiting-reactant transfer: smaller amount does not settle it

**Prerequisites:** formula reading, mass/mole conversion, c=n/V and mL-to-L conversion, coefficient ratios, limiting capacity and excess amount. Concentration is an additional prerequisite beyond the currently reviewed mass-only examples. Provide that support before presenting this as an unseen independent task.

**Starts with:** a metal mass and a known acid-solution concentration/volume. **Stops after:** choosing the limiting reagent, calculating theoretical hydrogen mass and pure magnesium remaining. **Next:** distinguish this completion model from reversible equilibrium; do not use a consume-the-limiter calculation to determine equilibrium composition.

### Authored learner task

Pure magnesium, 2.40 g, reacts with 75.0 mL of 2.00 mol L^-1 hydrochloric acid:

`Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)`

Assume this is the only reaction and it proceeds until one reactant is consumed. Predict the mass of hydrogen produced and the mass of pure magnesium remaining. Explain which reagent limits the reaction, using the equation rather than comparing starting masses or raw mole amounts alone.

| Given/reference | Supplied value |
| --- | --- |
| Pure Mg mass | 2.40 g |
| HCl solution volume | 75.0 mL = 0.0750 L |
| HCl concentration | 2.00 mol L^-1 |
| M(Mg) | 24.305 g mol^-1 |
| M(H2) | 2.016 g mol^-1 |

This predicts chemical production, not measured gas recovery. No gas-law volume or temperature/pressure conversion is asked. No side reaction, unreactive coating or impurity is included in this model.

### Checked solution

- n(Mg) = 2.40 / 24.305 = 0.0987451141740382637 mol.
- n(HCl) = 2.00 × 0.0750 = 0.150 mol.
- Capacity for the written reaction: Mg gives 0.0987451141740382637 / 1 mol of reaction; HCl gives 0.150 / 2 = 0.0750 mol. **HCl limits**, even though its raw mole amount is larger.
- n(H2) = 0.0750 × 1 = 0.0750 mol; m(H2) = 0.0750 × 2.016 = 0.1512 g, reported **0.151 g** (three significant figures).
- Mg consumed = 0.0750 mol; remaining Mg = 2.40 - 0.0750 × 24.305 = 0.577125 g, reported **0.577 g**.

Independent Decimal check calculated the remaining amount first, then multiplied by M(Mg); it agrees with subtracting consumed mass. This is remaining pure Mg, not the mass of collected residue after an experimental recovery.

**Likely wrong reasoning:** declaring magnesium limiting because 0.0987 < 0.150; using 75.0 as litres; treating the acid coefficient as a hydrogen coefficient; subtracting acid moles directly from Mg moles; multiplying all starting Mg by a product ratio even after identifying insufficient acid.

### Progressive board and feedback beats

| Beat | Board state and reason |
| --- | --- |
| Prompt/attempt | Retain equation and grouped data, with blank working. No limiter, product or excess answer in the caption or diagram. |
| Amounts | Stage the metal mass conversion and acid volume/concentration conversion; units explain why both are now on an amount scale. |
| Comparable capacity | Show n/coefficient for each species, retaining both original amounts. The 2 HCl requirement explains why the larger raw amount has smaller reaction capacity. |
| Product | Carry the established HCl capacity into hydrogen amount, then its mass. Reveal 0.151 g only at the spoken result. |
| Excess | Use Mg consumed from the same capacity, then subtract from available Mg. Retain the limiter/product result while revealing 0.577 g and the interpretation. |

Conversational feedback direction:

> There are more moles of acid than magnesium, but the reaction needs two acid units for each magnesium. The acid supply therefore supports fewer complete reaction amounts. Once that acid is used up, some magnesium has no acid left to react with. The same capacity predicts the hydrogen we can make and the magnesium we cannot consume. We get zero point one five one grams of hydrogen and zero point five seven seven grams of magnesium remaining under our stated model.

**Review and practical limit:** independently inspect species, coefficients, volume units and amount-to-mass cues. This is a calculation scenario, not a student laboratory procedure or evidence of conducting an investigation. If later turned into a practical/data companion, a subject teacher must supply a valid method, measurement basis, conditions and uncertainty/recovery analysis separately.

## 2. Equilibrium transfer: compression, Q and the new composition

**Prerequisites:** dynamic equilibrium, fixed-temperature disturbance reasoning, concentration, the written Kc expression, Q versus K and an ICE change with a quadratic. Present the basic expression/ICE core before this task; do not require quadratic mastery in the first dynamic-equilibrium video.

**Starts with:** known equilibrium concentrations, followed by a controlled volume change. **Stops after:** predicting the direction and computing physically feasible new concentrations, distinguishing the immediate jump from later relaxation. **Next:** interpreted concentration/rate graphs or a reviewed measured-K data task; solution equilibria can follow once their ion/concentration prerequisites are supplied.

### Authored learner task

An ideal-gas mixture is at equilibrium at 300 K in a 1.00 L closed container:

`2NO2(g) <-> N2O4(g)`

Initially [NO2] = 0.200 mol L^-1 and [N2O4] = 0.300 mol L^-1. The container is rapidly compressed to 0.500 L, with temperature maintained at 300 K. Consider the immediate concentrations before reaction has appreciably changed the amounts, then the new equilibrium at that same temperature and volume.

Find Kc, calculate the immediate Qc and predict the reaction direction. Calculate the new equilibrium concentrations. Does [NO2] return to its original 0.200 mol L^-1? Explain.

| Given/model | Supplied value or relationship |
| --- | --- |
| Temperature before/after | 300 K, maintained constant |
| Volume before/after | 1.00 L -> 0.500 L |
| Initial equilibrium [NO2] | 0.200 mol L^-1 |
| Initial equilibrium [N2O4] | 0.300 mol L^-1 |
| School concentration expression | Kc = [N2O4] / [NO2]^2 |
| Assumptions | Closed, ideal-gas concentration model; this reaction only; no simultaneous heat or matter input |

Use the concentration-based school Kc/Qc convention, whose numerical concentration ratio here has units L mol^-1. Fundamental thermodynamic equilibrium constants use standard-state activities and are dimensionless; do not mix conventions between expression, supplied data and feedback. Compression is isothermal by stipulation. This is not an uncontrolled real syringe heating/compression experiment.

### Checked solution

- Kc = 0.300 / 0.200^2 = **7.50 L mol^-1** under the stated concentration-ratio convention.
- Halving volume without changing amounts initially doubles both concentrations: [NO2] = 0.400 and [N2O4] = 0.600 mol L^-1.
- Qc = 0.600 / 0.400^2 = **3.75 L mol^-1**. Qc < Kc, so the net reaction proceeds toward N2O4 until the ratio reaches Kc. Kc does not change because temperature did not change.
- Let x mol L^-1 of N2O4 form. New [N2O4] = 0.600+x and [NO2] = 0.400-2x.
- (0.600+x)/(0.400-2x)^2 = 7.50 gives 30x^2 - 13x + 0.600 = 0.
- Roots: x = 0.05251903663673158797 or 0.38081429669660174536 mol L^-1. The second root would make [NO2] negative, so it is infeasible. The admissible range for this finite Kc is 0 <= x < 0.200 mol L^-1.
- New [NO2] = 0.29496192672653682406 mol L^-1, reported **0.295 mol L^-1**.
- New [N2O4] = 0.65251903663673158797 mol L^-1, reported **0.653 mol L^-1**.
- Concentration account: [NO2]+2[N2O4] remains 1.600 mol L^-1 in the compressed container. At the new 0.500 L volume that represents the original 0.800 mol of NO2-equivalent units, corresponding to 0.800 mol of nitrogen atoms; atom inventory is conserved.

Python bisection solved Qc(x)=Kc directly on the physically allowed interval, independently of the quadratic formula, and returned the same admissible root. Substitution recovers 7.50 before final rounding. The new NO2 concentration is below the immediate 0.400 but above the original 0.200. A forward response does not erase the concentration jump caused by compression.

**Likely wrong reasoning:** keeping concentrations unchanged during compression; assuming Kc doubles; using x rather than 2x for NO2 consumption; choosing the larger quadratic root; assuming shift toward N2O4 makes final [NO2] lower than every earlier value; equating concentrations at equilibrium.

### Progressive board and feedback beats

| Beat | Board state and reason |
| --- | --- |
| Prompt/attempt | Preserve original equilibrium data and compression conditions; no direction or new-composition answer visible. |
| Original reference | Derive Kc from the original equilibrium state; leave temperature and the written expression visible. |
| Immediate jump | Group old amount/volume reasoning separately from new concentration values. Show both concentrations doubled before any net reaction. |
| Q comparison | Evaluate Qc, compare with retained Kc, then explain why forward reaction raises the ratio. |
| Re-equilibration | Build the 1:2 stoichiometric change and solve the feasible root. Retain the original and immediate concentrations as labelled references. |
| Interpretation | Reveal new concentrations and compare 0.200 -> 0.400 -> 0.295 for NO2. An optional existing concentration graph must keep scales and disturbance time stable and teach this distinction. |

Conversational feedback direction:

> Compression changes the concentrations before the chemistry has time to respond. Both concentrations double, but the denominator in this equilibrium expression is squared, so the ratio falls. Forming more dinitrogen tetroxide brings that ratio back to the same constant. Some nitrogen dioxide is consumed, but it does not return to its original concentration. The immediate jump and the later chemical response are two different changes.

**Review and practical limit:** verify reaction orientation, units/convention, isothermal assumptions, squared term, feasible-root bounds, atom account and graph meaning. Colours or schematic molecules cannot prove a measured equilibrium constant. Practical disturbance/Keq investigations require a valid teacher-reviewed method, controlled conditions, calibrated/justified measurements, real data and analysis; this authored scenario fulfils none of their conduct requirements.

## 3. Later Module 6 titration transfer: find the acid that actually reacted

**Prerequisites:** concentration/volume conversion, balanced acid/base and carbonate reactions, mole ratios, equivalence versus endpoint, direct titration and named component mass fraction. Back titration is the specific new method to explain before an unseen task of this kind. Keep it later than the current Module 5 core, with the relevant Module 6 foundations.

**Starts with:** a known excess acid added to a carbonate-containing sample, followed by measurement of acid remaining. **Stops after:** deriving carbonate component mass and mass percentage from two distinct acid amounts. **Next:** a changed back-titration/data task, followed by reviewed curve/indicator or conductometric interpretation where that method is actually taught.

### Authored learner task

A 0.500 g solid sample contains calcium carbonate and impurities. It is treated with 40.00 mL of standardised 0.4000 mol L^-1 hydrochloric acid in excess. After the carbonate reaction is complete, carbon dioxide is removed and the mixture is cooled by a validated preparation procedure. The entire remaining hydrochloric acid requires 15.60 mL of standardised 0.5000 mol L^-1 sodium hydroxide to reach the validated equivalence measurement.

Assume the impurities do not consume acid/base or otherwise affect the analysis, no HCl is lost during preparation, transfer is quantitative and the residual CO2 does not contribute to the measured base consumption. No aliquot is taken. Calculate the mass percentage of CaCO3 in the sample.

`CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + CO2(g) + H2O(l)`

`HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)`

| Given/reference | Supplied value |
| --- | --- |
| Total sample mass | 0.500 g |
| Added standardised HCl | 40.00 mL at 0.4000 mol L^-1 |
| NaOH used for all remaining HCl | 15.60 mL at 0.5000 mol L^-1 |
| Supplied M(CaCO3) | 100.088 g mol^-1 |
| Sample/recovery scope | Named carbonate component, noninterfering impurities; quantitative transfer; no aliquot or acid loss |

This is supplied analytical data and model conditions, not directions for performing the preparation or heating a sample. For a practical version, the validated method and endpoint measurement would need explicit teacher review. CO2 removal is essential to the stated analytical interpretation: residual dissolved carbon dioxide could also consume NaOH and confound the residual-HCl measurement.

### Checked solution

- HCl added: 0.4000 × 0.04000 = 0.016000 mol.
- NaOH used: 0.5000 × 0.01560 = 0.007800 mol. The residual HCl amount is the same because this titration ratio is 1:1.
- HCl consumed by the carbonate: 0.016000 - 0.007800 = 0.008200 mol.
- CaCO3 amount: 0.008200 / 2 = 0.004100 mol, using the carbonate reaction's 1:2 ratio.
- CaCO3 mass: 0.004100 × 100.088 = 0.4103608 g, about **0.410 g** at three significant figures. Keep 0.4103608 in the percentage calculation.
- Mass percentage = 100 × 0.4103608 / 0.500 = 82.07216%, reported **82.1%** (three significant figures).

Python Decimal recomputed the acid difference and carbonate mass without binary floating-point rounding. It agrees with the direct JavaScript result. Even if the full 0.500 g sample were carbonate, the acid requirement would be about 0.00999 mol, below the supplied 0.01600 mol, so the acid supply can be in excess under the stated model.

**Likely wrong reasoning:** using all added HCl as though it reacted with carbonate; treating the NaOH amount as acid consumed by carbonate; missing the carbonate's two-acid ratio; introducing an aliquot/dilution factor that was not supplied; dividing by product/component mass instead of total sample mass; forcing an out-of-range calculated purity to 100% rather than checking the method, quantities or assumptions.

### Progressive board and feedback beats

| Beat | Board state and reason |
| --- | --- |
| Prompt/attempt | Show both labelled equations and grouped sample/acid/titre data. No carbonate amount or purity result during the attempt. |
| Acid added | Convert the initial known acid volume/concentration into its amount. Label this supplied amount, not reacted amount. |
| Acid remaining | Use the separate HCl/NaOH equivalence relationship to identify residual acid. Keep added and remaining values side by side. |
| Acid consumed | Subtract remaining from added, then apply the carbonate's distinct 2:1 acid-to-carbonate ratio. Show why two equations play different roles. |
| Component and whole sample | Convert carbonate amount to component mass, divide by total sample mass and reveal 82.1%. Retain both reference masses and their units. |
| Diagnostic check | Compare component mass with sample mass and revisit noninterference/CO2/transfer assumptions. The data do not identify the impurity chemically. |

Conversational feedback direction:

> The acid we added is not the same as the acid the carbonate used. The second titration tells us what was left over. Subtracting that remainder gives the acid consumed in the first reaction. Now the two equations have different jobs: sodium hydroxide compares one for one with leftover acid, while the carbonate needs two acid amounts for each carbonate amount. That gives a carbonate content of eighty-two point one percent by mass under the stated analysis conditions.

**Review and practical limit:** independent acid/base-equation and amount accounting, endpoint/measurement basis, full-sample versus aliquot scope, gas/impurity interference and standardisation require subject review. A video can teach the reasoning and support practical planning; it does not establish that learners performed titration, controlled uncertainty or analysed their own data. Existing candidates are Chemistry M6 L14 technique/calculations and L18 back/conductometric titration, with L15-L17 indicator/curve companions as prerequisites or later extensions according to the exact task.

## Before these become production sources

Prepare each exact selected teaching brief with curriculum/task scope and prerequisite/start/stop/next boundaries, then independently inspect the script and the authored numbers. No automatic approval follows from this planning document or arithmetic checks. Apply the existing recording-stage gate, create measured prompt/gap/feedback audio and aligned accessible captions only for the reviewed source, inspect exact voiced motion and phone-sized working before full export, and retain actual human listening as a separate release requirement. Chapters and result cues must come from the selected timeline, not these scene-beat plans.

Coverage stays provisional. The harder tasks complement core understanding; they do not complete all equilibrium/titration/practical points or replace the Biology Heredity core priority. Source/media implementation and paid production remain untouched by this document.
