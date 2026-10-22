# Chemistry Module 7 L11: replacement methanol combustion data

Proposed teaching data, 22 October 2026. These are constructed measurements for a school spirit burner, not measurements from the site or a claim that a class obtained them.

## Hook dataset

| Measurement | Value |
| --- | --- |
| Mass of water | 100.0 g |
| Initial water temperature | 21.5 °C |
| Final water temperature | 41.5 °C |
| Mass of burner and methanol before | 143.82 g |
| Mass of burner and methanol after | 143.08 g |
| Specific heat capacity of water | 4.18 J g⁻¹ °C⁻¹ |
| Molar mass of methanol | 32.04 g mol⁻¹ |
| Reference molar enthalpy of combustion | −726 kJ mol⁻¹ |

Working, keeping digits until the final answer:

- ΔT = 41.5 − 21.5 = 20.0 °C.
- Methanol burnt = 143.82 − 143.08 = 0.74 g.
- q(water) = mcΔT = 100.0 × 4.18 × 20.0 = 8360 J = 8.360 kJ.
- n(methanol) = 0.74 ÷ 32.04 = 0.0230961 mol.
- ΔH(experimental) = −q(water) ÷ n = −361.972 kJ mol⁻¹, reported as **−3.6 × 10² kJ mol⁻¹** (two significant figures, set by 0.74 g).
- Heat expected from that fuel mass = 0.0230961 × 726 = 16.7678 kJ.
- Apparent heat transfer to the water = 8.360 ÷ 16.7678 × 100 = **49.9%** (about 50%).
- Difference in magnitude from the reference = (726 − 361.972) ÷ 726 × 100 = 50.1%.

The water warms while much of the energy warms the container and surrounding air. This makes the result less negative than the reference. Evaporation and incomplete combustion can also affect the measured fuel mass and energy; the 49.9% is an apparent calorimetric recovery, not an independently measured burner efficiency.

## Separate practice dataset

| Measurement | Value |
| --- | --- |
| Mass of water | 150.0 g |
| Initial water temperature | 22.4 °C |
| Final water temperature | 42.4 °C |
| Mass of burner and methanol before | 151.64 g |
| Mass of burner and methanol after | 150.59 g |
| Other constants | Same as above |

- ΔT = 20.0 °C; fuel loss = 1.05 g.
- q(water) = 150.0 × 4.18 × 20.0 = 12540 J = 12.540 kJ.
- n = 1.05 ÷ 32.04 = 0.0327715 mol.
- ΔH(experimental) = −12.540 ÷ 0.0327715 = −382.651 kJ mol⁻¹, reported as **−383 kJ mol⁻¹** (three significant figures).
- Reference heat = 0.0327715 × 726 = 23.7912 kJ.
- Apparent heat transfer = 12.540 ÷ 23.7912 × 100 = **52.7%**.
- Difference in magnitude from −726 kJ mol⁻¹ = **47.3%**.

## Why these values are realistic

The Open University's OpenSTEM Africa teacher notes give an expected school calorimetry methanol combustion magnitude of 380 kJ mol⁻¹ for a 20 °C water rise. That magnitude corresponds to 52.3% of 726 kJ mol⁻¹. The notes also give 0.71 g methanol for a 20 °C rise, averaged across five trials. This is an educational experiment/simulation reference, not a published distribution of physical school class results. The proposed apparent values of 362 and 383 kJ mol⁻¹ sit close to its expected magnitude. [Open University teacher notes, Tasks 1 and 2](https://www.open.edu/openlearncreate/mod/page/view.php?id=191528).

The Royal Society of Chemistry's spirit-burner lesson uses 100 to 200 cm³ water and explains that this apparatus gives low experimental values. Its practical video notes explain that the container and air receive heat as well as the water. [RSC school spirit-burner lesson](https://edu.rsc.org/lesson-plans/where-does-energy-come-from-16-18-years/124.article), [RSC enthalpy practical notes](https://edu.rsc.org/practical/enthalpy-change-determination-practical-videos-16-18-students/4012296.article).

The reference applies to liquid methanol burning to carbon dioxide gas and liquid water: CH₃OH(l) + 1.5 O₂(g) → CO₂(g) + 2 H₂O(l). NIST lists modern measured values near −726 kJ mol⁻¹, including −725.7 and −726.34 kJ mol⁻¹. [NIST Chemistry WebBook, methanol condensed-phase thermochemistry](https://webbook.nist.gov/cgi/cbook.cgi?ID=C67561&Mask=E).
