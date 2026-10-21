# Chemistry Module 6 P03 practical plan (draft for Claude's review)

**Aim and route.** Measure pH across familiar acid and base solutions with a calibrated probe. `C6-IQ2-01`: “conduct a practical investigation to measure the pH of a range of acids and bases”. Site L05 and L08. Prerequisite: chem-m6-c05.

**School method.** At 25 °C, calibrate a pH meter with pH 4.00, 7.00 and 10.00 buffers according to its instructions. Dispense 20 mL each of 0.0100 mol/L HCl, 0.0100 mol/L ethanoic acid, distilled water, 0.0100 mol/L NH3 and 0.0100 mol/L NaOH into labelled 50 mL beakers. Rinse the probe with distilled water and blot gently between samples. Immerse the bulb, wait for a stable reading and record pH to the meter's justified precision. Measure each sample three times, using fresh aliquots if carry-over is suspected. Do not immerse the meter body.

**Variables and results.** Independent: solution identity. Dependent: pH. Control nominal concentration for the four reagents, temperature, aliquot volume, calibration and probe equilibration. Expected at 25 °C: HCl 2.00; ethanoic acid about 3.38; distilled water near 7 but exposed water may be lower because of dissolved CO2; ammonia about 10.6; NaOH 12.00. These weak-solution figures use Ka(CH3COOH) = 1.8 × 10⁻⁵ and Kb(NH3) = 1.8 × 10⁻⁵, with ideal dilute-solution approximations.

**Analysis and working.** HCl: [H+] = 0.0100, pH = −log(0.0100) = 2.00. NaOH: [OH−] = 0.0100, pOH = 2.00, pH = 14.00 − 2.00 = 12.00 at 25 °C. Weak acid: solve x²/(0.0100−x) = 1.8 × 10⁻⁵, giving x = 4.15 × 10⁻⁴ mol/L and pH 3.38. NH3 gives [OH−] = 4.15 × 10⁻⁴, pOH 3.38 and pH 10.62. A measured pH is the primary result; do not force observations to calculated ideal values.

**VRA.** Validity: clean, labelled, fresh aliquots ensure the meter measures the intended solution. Reliability: repeat readings and report spread. Accuracy: fresh calibration buffers bracketing the readings, temperature compensation, sufficient immersion and rinsing reduce systematic error.

| Hazard and classification | Control |
| --- | --- |
| 0.0100 mol/L HCl and NaOH: dilute solutions, but eye splashes still matter | Safety glasses and small beakers. [RSC 0.1 M practical](https://edu.rsc.org/experiments/making-plastic-from-potato-starch/1741.article) classifies 0.1 M NaOH as irritant; the method here uses one-tenth of that concentration. |
| Dilute ammonia can give an irritating vapour; stock ammonia has a stronger hazard classification | Work with capped, teacher-prepared 0.0100 mol/L aliquots in a ventilated room. No concentrated stock in the shot. [RSC ammonia guidance](https://edu.rsc.org/experiments/indicators-and-dry-ice-demonstration/703.article) concerns 0.1 M solution, which is more concentrated than this aliquot. |
| Glass electrode breakage | Keep probe in a stand and do not strike beaker bottom. |

**Errors and fixes.** Carry-over from NaOH raises the next reading: rinse and blot between samples. A dry or uncalibrated electrode drifts: hydrate and calibrate by manufacturer instructions. A wide range universal-indicator strip cannot give the same resolution as a probe.

**HSC-style question idea.** Students report pH 2.1 for HCl, 3.4 for ethanoic acid and 12.0 for NaOH at equal concentrations. Calculate one ion concentration, then evaluate a claim that the pH numbers alone prove concentration was controlled.

**Painted plates.** Existing: `m6-ph-meter-probe-beaker-v1.png`, `m6-beaker-v1.png`, `m6-wash-bottle-v1.png`, `m6-indicator-paper-chart-v1.png`. New: three labelled calibration-buffer beakers and a five-sample line. No people or hands.
