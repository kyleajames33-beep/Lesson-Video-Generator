# Draft for Claude: bio-m6-p01, investigate UV exposure and yeast colony survival

## Route and syllabus

- **Status:** draft for Claude's review. Proposed practical support after `bio-m6-b02`; prerequisite `bio-m6-b01`, `bio-m6-b02`; site lesson L02.
- **Ledger B6-IQ1-01:** "explain how a range of mutagens operate, including but not limited to:". The ledger does not mark this a required practical. L02 strongly implies one by describing a shielded UV lamp and baker's yeast plates. This video teaches a fair investigation and the limits of its evidence.
- **Main question:** What can colony counts tell us about UV exposure, and what can they not tell us about mutation?

## Aim and method

Compare the number of viable baker's yeast colonies after different UVC exposure times. The learner analyses a teacher-prepared dataset. **No student operates a UVC source or opens a grown plate.** A school could generate the dataset only if its laboratory has a purpose-built, interlocked UVC cabinet approved under its local risk assessment. The existing `m6-uv-cabinet-v1.png` has an open door and must not show the lamp lit as a safe operating step.

Conditional teacher method for 15 sterile, 90 mm yeast agar plates: prepare a suspension of a known teaching strain of *Saccharomyces cerevisiae* in sterile saline at a dilution that gives about 140 colonies per unexposed plate. Put 100 µL of the same dilution on each plate and spread it. Use three plates at each exposure: 0, 15, 30, 60 and 120 s. Keep lamp distance at the cabinet's fixed 20 cm shelf position. With the lamp **off**, a trained operator removes the plate lids inside the cabinet, closes and verifies the interlocked door, and then starts the exposure. The operator switches the lamp **off** before opening the cabinet and replacing lids. Seal plates before removing them. Incubate inverted at 30 °C for 48 h. Never re-open incubated plates. Count colonies through the lids and dispose of them under the school's microbiology procedure. This conditional protocol requires a local equipment and biological risk assessment; it is not an instruction for students to perform UV exposure. If an approved interlocked cabinet is unavailable, use the supplied counts as a dataset and do no live exposure.

The 100 µL and target inoculum are illustrative protocol settings. A teacher must pilot the yeast dilution because viable cell density differs between stocks. The plate count is an estimate of viable colony-forming units, not of mutations.

## Variables and expected results

Independent variable: exposure time (s). Dependent variable: colonies per plate (colony-forming units). Controls: no-exposure group, 100 µL inoculum, same dilution, agar batch, cabinet lamp and fixed distance, incubation time and temperature, plate size and counting rule. Three independent plates per time are replicates.

These are **constructed expected data**, not observations or mutation frequencies:

| Exposure (s) | Plate 1 | Plate 2 | Plate 3 | Mean colonies | Relative survival |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 0 | 138 | 143 | 145 | (138 + 143 + 145)/3 = 142 | 142/142 x 100 = 100.0% |
| 15 | 94 | 99 | 101 | (94 + 99 + 101)/3 = 98 | 98/142 x 100 = 69.0% |
| 30 | 58 | 62 | 63 | (58 + 62 + 63)/3 = 61 | 61/142 x 100 = 43.0% |
| 60 | 21 | 24 | 27 | (21 + 24 + 27)/3 = 24 | 24/142 x 100 = 16.9% |
| 120 | 3 | 5 | 7 | (3 + 5 + 7)/3 = 5 | 5/142 x 100 = 3.5% |

For example, at 30 s the colony decrease relative to the control is (142 - 61)/142 x 100 = 57.0%. Draw mean colony count against seconds with all 15 raw points visible. Longer exposure coincides with lower survival. This can show reduced viable growth; it does not identify changed DNA. Demonstrating mutation would require a defined heritable marker and a separate test of survivors against an unexposed baseline. A smaller colony count alone cannot establish mutation.

## Validity, reliability and accuracy

NESA meanings: validity asks whether the process and data measure what was intended; reliability asks whether repeats under identical conditions agree; accuracy asks whether a measurement is close to the true value. The fixed inoculum, distance and zero-second control support a valid comparison of *survival*, while the endpoint is invalid for measuring mutation rate. Three plates per time and their spread show reliability (for 30 s, range 63 - 58 = 5 colonies). Count through a transparent lid with a marked grid and two independent counters to reduce missed or double-counted colonies, improving count accuracy. Calibrate exposure time and cabinet output before use; a timer alone does not establish delivered UV dose.

## Risks and controls

| Hazard and classification | Risk | Control and source |
| --- | --- | --- |
| UVC, non-ionising ultraviolet radiation | Skin burns and eye injury from direct or reflected light. | Only trained staff use a verified interlocked enclosure; no direct student exposure. If unavailable, use data only. [FDA UVC safety](https://www.fda.gov/radiation-emitting-products/tanning/ultraviolet-uv-radiation). |
| *S. cerevisiae* teaching strain, ATCC biosafety level 1 | Culture spills or contamination of work area. | Use a characterised strain, aseptic technique, sealed grown plates and school disposal procedure. [ATCC strain classification](https://www.atcc.org/products/msv-1), [CDC BMBL](https://www.cdc.gov/labs/bmbl/). |
| Glass or plastic dishes and warm incubator, physical laboratory hazards | Broken dishes, contamination, contact with hot equipment. | Use plastic plates, keep at 30 °C, handle sealed plates and disinfect work area. [CDC BMBL](https://www.cdc.gov/labs/bmbl/). |

## Common errors and fixes

- Claiming that fewer colonies prove mutation: state that the outcome measures viability; test a heritable phenotype or DNA separately.
- Comparing plates with different inoculum volumes: use one calibrated pipette and the same 100 µL on every plate.
- Treating time as UV dose: measure irradiance at the plate and multiply by time if dose is required.
- Counting merged colonies as one: pilot the inoculum dilution, use a countable range and record confluent plates as uncountable rather than inventing a count.

## HSC-style question idea

An original table gives three colony counts for each UV exposure time. Calculate relative survival at 30 s and assess whether the results establish an increased mutation rate. The answer must separate colony survival from mutation evidence.

## Painted visual inventory

No people or hands. Existing, visually checked: `public/assets/biology/m6-uv-cabinet-v1.png` shows a painted cabinet and plate, **but its door is open**, so replace or redraw it closed before an illuminated exposure; `public/assets/biology/b3a-petri-dish-v1.png` is a plain dish. New painted plates: closed interlocked cabinet with external timer, sealed plate with countable yeast colonies, five labelled plate groups on a bench, and a disposal container. Counts, graph, controls and warning labels should be code text, not painted into assets. Animate one exposure-time change and one measured result at a time. Do not imply that the plate image itself proves a mutation.
