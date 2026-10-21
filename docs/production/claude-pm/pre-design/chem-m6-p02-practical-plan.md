# Chemistry Module 6 P02 practical plan (draft for Claude's review)

**Aim and route.** Measure molar enthalpy of neutralisation by insulated-cup calorimetry. `C6-IQ1-05`: “conduct a practical investigation to measure the enthalpy of neutralisation (ACSCH093)”. Site L03 and L10. Prerequisite: chem-m6-c03.

**School method.** Put 50.0 mL of 1.00 mol/L HCl in a foam cup supported by a beaker. Measure its initial temperature and that of 50.0 mL 1.00 mol/L NaOH. Both should start within 0.2 °C; use their volume-weighted mean as the initial mixture temperature. Add the base promptly, cover with a slotted lid, stir with a thermometer or probe, and record temperature every 5 s until the peak passes. Repeat three times with fresh solutions. Use density 1.00 g/mL and specific heat 4.18 J g⁻¹ °C⁻¹ as stated approximations.

**Variables and expected results.** This is a measurement repeated under fixed conditions, so no chemical independent variable is changed between the three runs. Mixing the acid and base starts the reaction; the dependent measurement is temperature rise, from which ΔH is calculated. Control concentrations, volumes, initial temperatures, cup and lid, timing and stirring. A separate comparison could vary acid identity while holding these conditions fixed. Realistic sample: initial 21.6 °C, peak 27.9 °C, rise 6.3 °C. A perfectly insulated system would give a somewhat larger rise; heat loss makes the experimental magnitude smaller than about 57 kJ/mol.

**Analysis and calculation.** HCl + NaOH → NaCl + H2O. n(HCl) = n(NaOH) = 0.0500 L × 1.00 mol/L = 0.0500 mol, so n(H2O) = 0.0500 mol. m ≈ 100.0 g. q_solution = 100.0 × 4.18 × 6.3 = 2633.4 J. ΔH_neut = −2.6334 kJ ÷ 0.0500 mol = −52.7 kJ/mol H2O. Example repeats at 6.2 and 6.4 °C give −51.8 and −53.5 kJ/mol; mean −52.7 kJ/mol after using unrounded values. Show measured value, not a claim that every run must match the reference.

**VRA.** Validity: same initial temperatures and an insulated lidded cup ensure the rise mainly reflects neutralisation. Reliability: three fresh repeats and a mean. Accuracy: a calibrated probe, lid and extrapolation of the cooling line improve the peak estimate; the approximation that the mixture has water's density and heat capacity remains a limitation.

| Hazard and classification | Control |
| --- | --- |
| 1.00 mol/L HCl: RSC's current school guidance calls this low hazard. 1.00 mol/L NaOH: supplier classification H290/H314, corrosive to skin and eyes. | Splash goggles, teacher-prepared portions, lab coat, prompt water rinse and school spill procedure. [RSC 1 M HCl guidance](https://edu.rsc.org/experiments/testing-acids-and-bases-on-a-microscale/564.article); [Sigma-Aldrich 1 M NaOH product and SDS](https://b2b.sigmaaldrich.com/AU/en/product/mm/109956). The actual bottle SDS governs the school risk assessment. |
| Cup spill and probe breakage | Support cup in beaker, use plastic-coated probe if available, keep the lid slotted. |

**Errors and fixes.** A late peak reading misses heat lost to air: log at short intervals and extrapolate to mixing time. Using only the acid mass halves q: use both solutions' mass. A warm acid and cold base bias a single initial reading: measure both and calculate a weighted mean.

**HSC-style question idea.** Given three temperature traces and reagent volumes, calculate ΔH per mole of water and explain why an open beaker gives a less negative result.

**Painted plates.** Existing: `m6-foam-cup-calorimeter-v1.png`, `m6-beaker-v1.png`, `c8-thermometer-hot-v1.png`, `m6-volumetric-pipette-filler-v1.png`. New: foam cup with slotted lid and digital temperature readout, two labelled reagent cylinders. No people or hands.
