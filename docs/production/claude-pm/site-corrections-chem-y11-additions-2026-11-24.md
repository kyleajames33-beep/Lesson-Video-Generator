# Site corrections: Year 11 Chemistry (2017), additions from the designs (24 November 2026)

This is a new file for coherence-audit blocker UB3 (`checks/chem-y11-coherence-audit-2026-11-23.md`, appendix). It collects the "Site notes ... for root to log if accepted" blocks that Year 11 Chemistry designs wrote but never logged in `site-corrections-chem-y11.md`. That log was not edited. The site was not edited.

**Source paths.** Every page is under `C:/Users/kygs/teaching-app-fix/subjects/chemistry/year11/`, the read-only clone. The designs cite the old path `C:/Users/kygs/hscscience/...`, which no longer exists. To read a quoted path, replace that prefix. Each block below is copied word for word from the named design. The only change is a heading.

**Live check (24 Nov 2026).** Each quoted site phrase was searched for in the clone's page text, with tags removed. "Found" means the phrase is still on the live page. "Absence" means the row is about something missing from the page. Text search cannot prove that something is missing, so these rows rely on the 23 November audit re-check.

**Priority.** High means the page contradicts a video that will sit beside it, or contains an arithmetic error. Medium means a wording, method or convention fix. Low means a suggestion only.

## Summary

| # | Site lesson | Page | Design (notes) | Priority | Live check 24 Nov |
| --- | --- | --- | --- | --- | --- |
| 1 | M2 L15 | `module2/lesson15.sa.html` | m2-v17 (4, 2, 3, 1) | High (note 4) | "24.8 ÷ 22.71 = 1.107, a 10.7% error" found; the same page's MC answer still gives "9.2%"; "adding masses to a plunger platform" found; dead-volume limitation and collision cause: absence |
| 2 | M2 L15 | `module2/lesson15.sa.html` | m2-v18 (1 to 3) | Medium | "toward boiling", "27 + 273", "0°C (273 K)", "25°C (298 K)" found |
| 3 | M2 L15 | `module2/lesson15.sa.html` | m2-v19 (2, 3; 1 is a suggestion) | Medium | "629.8 \div 95.0" found (LaTeX source); reason for near-ideal behaviour: absence |
| 4 | M2 L15 | `module2/lesson15.sa.html` | m2-v20 (1 to 3) | Medium (note 3) | "much larger than calculated" found; no reaction-gas practical and no measured-conditions example: absence |
| 5 | M2 L15, L04 | `module2/lesson15.sa.html`, `module2/lesson04.sa.html` | m2-v16 (1, 3, 4) | Medium | "SATP ... Current IUPAC standard" (L04), "RTP" (L15), "Step 0", "Step 5" (L15) and "used a single nitrogen atom mass" (L04) found |
| 6 | M3 L01 | `module3/lesson01.sa.html` | m3-v01 (1 to 5) | High (notes 1, 2) | "NH₄NO₃ cools", "Colour change" (firework rows), "Sr → red, Cu → green/blue" with the table's "Blue Copper compounds", "Zn dissolves in HCl" and the mass-only "Law of Conservation of Mass" heading found |
| 7 | M2 L18 | `module2/lesson18.sa.html` | ws-v05 (7, 8) | Medium | "random (if accidental and variable)", "Losing drops of analyte", "Cannot be eliminated completely" and "Must be identified and corrected" found |
| 8 | M4 L03 | `module4/lesson03.sa.html` | m4-v02 (3) | Low (suggestion) | ΔT 13.2 °C, −41.4 kJ mol⁻¹ and "about 27% below" found |
| 9 | M1 L20 | `module1/lesson20.sa.html` | m1-v18 (2) | Low | "produced from a molybdenum-99/technetium-99m generator in hospitals" found |

Already logged and not repeated here: m2-v16 notes 2 and 5 (Brief 181, `module2/lesson04.sa.html` particle explanation and real-gas revisit); m4-v02 notes 1 and 2 (Brief 183, `module4/lesson02.sa.html`); ws-v01 notes 1 to 6 on lesson 18 (log lines 246 to 266). m2-v19 note 1 and m1-v18 notes 1 and 3 say "no change" or are additions only, so they are left out of the summary but kept in the copied blocks.

**First to fix.** Row 1, note 4: the trap gives the wrong arithmetic. 24.8 ÷ 22.71 = 1.092, which is a 9.2% error; 1.107 is 24.8 ÷ 22.4. The text contradicts the video and the page's own multiple-choice answer.

## 1. M2 L15 (gas laws and gas stoichiometry), from `lessons/chem-y11-m2-v17.md`

The error figure is listed first, as the audit asks. The design's notes are numbered as in the design.

  4. Lesson 15 `l15-traps-title` trap 1: "off by a factor of 24.8 ÷ 22.71 = 1.107, a 10.7% error". 24.8 ÷ 22.71 = 1.092 (a 9.2% error); 1.107 is 24.8 ÷ 22.4. The lesson's own MC 5 answer gives 9.2%. Suggest "24.8 ÷ 22.71 = 1.092, about a 9% error".
  1. Lesson 15 `l15-gaslaws-title` states each law without a cause. Suggest one collision sentence under Boyle's law: "At constant temperature each hit is as hard as before, but squeezing the same particles into less space means more hits on each part of the wall every second, so the pressure rises."
  2. Lesson 15 `l15-prac-title`, Boyle's method: "increase the pressure in small, controlled steps (for example by adding masses to a plunger platform, or using a screw clamp)" and "repeat for a wide range of volumes". With a pressure sensor the volume is set and the pressure read, so the independent variable is V. Suggest: "Push the plunger in small steps, reading the volume from the syringe scale and the pressure from the sensor at each step, after waiting a few seconds for the temperature to settle."
  3. Lesson 15 `l15-prac-title` gives no limitation for the Boyle method. Suggest adding: "Air in the connecting tube is not shown on the syringe scale, so the true volume is a little larger than the reading; PV drifts down slightly and the P against 1/V line misses the origin. Use a short tube or add its volume."
  - Checked and correct: the Boyle quiz item (200 kPa); the true-or-false check; lesson 15's other numbers are checked in `chem-y11-m2-v18.md` to `v20.md`, which use them.

## 2. M2 L15, from `lessons/chem-y11-m2-v18.md`

  1. Lesson 15 `l15-prac-title`, Charles method: "heat the bath slowly ... as the bath heats from room temperature toward boiling". A plastic syringe near 100 °C may soften and the volume may exceed the scale; and water vapour from a near-boiling bath is a scalding risk. Suggest "to about 80 °C".
  2. Lesson 15 worked example "Combined gas law" uses 273 (27 + 273 = 300 K), while the formula card and key facts use 273.15. The answer is unchanged to three figures (31.3 L either way), but suggest one convention (273.15, as on the HSC data sheet) or a note that 273 is acceptable when the data have three significant figures.
  3. Lesson 15 key terms: "STP ... 0°C (273 K)" and "RTP ... 25°C (298 K)" beside "T(K) = T(°C) + 273.15". Suggest 273.15 K and 298.15 K, matching the data sheet.
  - Checked and correct: lesson 15's quick check (rigid cylinder: Gay-Lussac, pressure rises); the extrapolation to −273.15 °C; the "never actually reached" wording.

## 3. M2 L15, from `lessons/chem-y11-m2-v19.md`

  1. Lesson 15 key terms, "Ideal gas law": "R = 8.314 J mol⁻¹ K⁻¹ = 8.314 kPa·L·mol⁻¹·K⁻¹". Correct; suggest adding "because 1 kPa × 1 L = 1 J" here too (it appears only in the gas-laws card).
  2. Lesson 15 worked example "Ideal gas law", step 3: "V = (0.250 × 8.314 × 303) ÷ 95.0 = 629.8 ÷ 95.0". 0.250 × 8.314 × 303 = 629.8 is correct, but 629.8 ÷ 95.0 = 6.63 is the answer; the intermediate "629.8" is an energy in joules (kPa L) and is labelled as nothing. Suggest "nRT = 629.8 kPa L; V = 629.8 ÷ 95.0 = 6.63 L".
  3. Lesson 15 "Ideal gas assumptions" lists three assumptions but gives no reason real gases come close. Suggest adding: "At everyday conditions gas particles are far apart and fast, so their own size and attractions hardly matter."
  - Checked and correct: worked example "Combined gas law" (31.25 → 31.3 L with 273 or 273.15); worked example "Ideal gas law" (6.63 L with 303 or 303.15 K); the molar volume claim (8.314 × 273.15 ÷ 100 = 22.71).

## 4. M2 L15, from `lessons/chem-y11-m2-v20.md`

  1. Lesson 15 `l15-prac-title` has no practical for measuring a gas volume made in a reaction (both cards are gas-law investigations), though the lesson title is gas stoichiometry and the syllabus lists "volumes of gases in chemical reactions" under practical investigations. Suggest a short card: marble chips (or magnesium) with acid, gas syringe, volume-time readings, final volume at measured T and P, then n = PV ÷ RT.
  2. Lesson 15's gas-stoichiometry method converts with 22.71 or 24.8 only; no example uses measured laboratory conditions, which is the usual practical case. Suggest one example at measured conditions using PV = nRT, with the note "use 22.71 or 24.79 only when the conditions match".
  3. Lesson 15 Short answer Q1(b) model answer: "the kiln operates at high temperature, not STP, gases expand at higher temperatures, so the actual volume would be much larger than calculated". The amount of CO₂ is the same; only its volume at kiln conditions is larger. Suggest "the same amount of CO₂ occupies a larger volume at kiln temperature; at STP it would occupy 1.13 × 10⁵ L".
  - Checked and correct: worked example 1 (25.0 g CaCO₃ → 5.67 L at 0 °C); worked example 2 (43.4 L with 24.8; 43.38 with 24.79); worked example 3 (3.72 L H₂ → 9.81 g Zn); worked example 4 (4.00 L); Activity 2 rows 1 to 3 (5.67 L, 8.02 g, 7.44 L); short answers Q2 (2.48 L, 2.27 L, 8.47%), Q4 (45.0 L); MC answers 2 to 6.

## 5. M2 L15 and M2 L04 (molar volume), from `lessons/chem-y11-m2-v16.md` (notes 1, 3, 4; notes 2 and 5 already logged by Brief 181)

  1. Naming of 25 °C and 100 kPa: lesson 4 calls it "SATP ... Current IUPAC standard, used in most NSW HSC resources" and uses 24.8; lesson 15 calls the same conditions "RTP" and uses 24.8, with "standard" as a cue for 22.71; the HSC data sheet gives 24.79 at 25 °C and 100 kPa without either name. IUPAC's standard temperature and pressure is 0 °C and 100 kPa. Suggest one name throughout (or none, quoting the conditions as the data sheet does) and 24.79 to match the data sheet, with "24.8 to three significant figures".
  3. Lesson 15 `l15-avogadro-title`: "If a gas volume is the input (given) → use Step 0: n = V ÷ MV, then proceed to Step 3 directly", and "Step 5" for the output, against a "4-step" method elsewhere in the module. Suggest "replace the mass-to-moles step with n = V ÷ Vm" and "replace the moles-to-mass step with V = n × Vm".
  4. Lesson 4 Q4 model answer: "Student A's mass is incorrect (used a single nitrogen atom mass)". Student A's 14.014 g is not the result of using a single atom's mass (0.500 mol of N atoms would be 7.004 g; 1 mol of N atoms would be 14.007 g). Suggest "Student A's mass is incorrect: 0.500 mol of N₂ is 0.500 × 28.014 = 14.007 g".

## 6. M3 L01 (indicators of chemical change), from `lessons/chem-y11-m3-v01.md`

  1. `l01-common-indicators-of-chemical-change-title`, the indicator figure: "4 Temperature change ... combustion; NH₄NO₃ cools". Ammonium nitrate dissolving is the lesson's own example of a physical change (trap 1, drill 2), so listing it as an example of the indicator contradicts the lesson. Suggest "combustion; zinc in acid warms (NH₄NO₃ dissolving cools, but is physical)".
  2. `l01-fireworks-chemical-change-in-action-title`: the table lists "Colour change" as an indicator for each firework colour, and the common-error box says "The colour of a firework is not a physical property of the metal, it is produced by the chemical reaction ... Electron transitions ... produce the colour". The coloured light is emission by excited metal atoms or ions (the same emission seen in a flame test, m1-v16), not a colour change of a substance; the lesson's own model answer calls it "energy emission (not a new substance)". Suggest replacing "Colour change" with "Light emitted" in the table and rewording the box: "The colour comes from excited metal atoms or ions giving out light, as in a flame test; it shows energy being released, while the new solid oxide shows a new substance."
  3. Same section: the summary says "Sr → red, Cu → green/blue" while the table says "Blue: Copper compounds". Suggest one wording ("copper compounds: blue or green, depending on the compound").
  4. `l01-common-indicators-of-chemical-change-title`: "5 Reactant consumed ... Zn dissolves in HCl" uses "dissolves" for a chemical change while warning against physical dissolving. Suggest "Zn is used up in HCl".
  5. The lesson calls conservation "the Law of Conservation of Mass ... in a closed system" and the C3-IQ1-02 dotpoint is the conservation of atoms; the model card shows atoms counted but its heading and summary speak only of mass. Suggest adding "atoms of each element are conserved, so mass is conserved" to the summary.
  - Checked and correct: the definitions; trap 2's carbonated drink; worked example 2's equation (Zn + H₂SO₄ → ZnSO₄ + H₂); Q2's balanced equation with state symbols; the safety note for the squeaky pop test.

## 7. M2 L18 (errors and uncertainty), from `lessons/chem-y11-ws-v05.md` (new notes 7 and 8; ws-v01's notes 1 to 6 already logged)

  7. `l18-errors-title` worked example 2 ("lost precipitate during filtering ... Error type: random (if accidental and variable)") and the scenario card "Losing drops of analyte during transfer" (random): a loss always pushes the mass, and so the result, one way (low). It varies in size but not in direction, so a careful answer calls it a one-directional error (often treated as systematic in HSC marking), or better, a mistake to avoid by redoing the run. Suggest: "Effect always low; avoid it, or repeat the run if it happens."
  8. `l18-errortype-title` random error "Cannot be eliminated completely" sits beside systematic "Must be identified and corrected", with no mention that uncertainty is separate from error. Suggest adding one line: "Uncertainty is the limit of the instrument; it remains even with no error."

## 8. M4 L03 (enthalpy of neutralisation), from `lessons/chem-y11-m4-v02.md` (note 3; notes 1 and 2 already logged by Brief 183)

  3. Lesson 3 worked example 2 (H₂SO₄): ΔT = 13.2 °C gives −41.4 kJ mol⁻¹; the expected rise for 0.100 mol of water in 75.0 g is about 18 °C. The lesson already flags the 27% shortfall as needing evaluation; consider choosing data near the expected rise so the worked example models a typical result, keeping the evaluation as a separate question.

## 9. M1 L20 (nuclear equations and radioisotopes), from `lessons/chem-y11-m1-v18.md`

  1. `l20-balanced-nuclear-equations-title`, beta check line: "Atomic numbers 6 = 7 + (−1) ✓". Correct; no change. Noted only because the narration uses the same check.
  2. `l20-natural-and-human-made-radioisotopes-title`, Tc-99m row: "produced from a molybdenum-99/technetium-99m generator in hospitals". Acceptable, but the molybdenum-99 itself is made in a reactor (v17 note a). Suggest "from molybdenum-99 (made in a reactor), using a generator in the hospital". Minor.
  3. Drill 2 (Po-210) and the Ra-226 fill-the-blanks use "₂He" for the alpha particle; consistent with the main text. No change.

## New site note from today's design (not yet re-checked by a second reader)

From `lessons/chem-y11-m3-v06.md` (designed 24 Nov 2026), on `module3/lesson06.sa.html`: the page names communities, Country, a person, explorers and specific traditional-knowledge cases (the cycad and nardoo case studies), each with a published source. The video is general under the owner's 18 November rule. This is a difference of approach, not an error. Root decides whether the site page should change. No error was found in the chemistry used by the design: the physical and chemical classification table, the concentration-gradient explanation, the surface-area point, the "burns off" common error, and worked example 2(a), Fe₂O₃(s) + 6HCl(aq) → 2FeCl₃(aq) + 3H₂O(l).
