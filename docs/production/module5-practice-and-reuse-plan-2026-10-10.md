# Module 5 practice and library reuse

The current route plans 22 Chemistry Module 5 uploads plus one optional reused limiting-reactant prerequisite, and 27 Biology Module 5 uploads. C4A pressure/volume/inert gas and C4B catalysts are two adopted delivery parts under the same canonical C4 entry, adding one core upload. Biology's 24 canonical entries expand to 27 uploads because plants, fungi, bacteria and protists have separate teaching boundaries. These are plans, not completed videos. The [structured route](module5-video-route-2026-10-10.json) and [learner route](module5-video-route-2026-10-10.md) remain authoritative.

There are already four dedicated guided-question videos: Chemistry g02 (equilibrium graphs and unfamiliar explanations) and g03 (harder ICE/Q decisions), and Biology g01 (sequence/chromosome tracing) and g02 (unfamiliar inheritance crosses/pedigrees). The other companions have different purposes. Chemistry g01 teaches non-equilibrium enthalpy/entropy, and Biology g03 handles population-risk data. Do not count every companion as a worked-question video.

## Proposed additional checkpoints

These are proposed slots for production planning, not new route entries or approval to publish. Adding all three as standalone uploads would produce 24 Chemistry Module 5 videos plus one optional prerequisite, and 28 Biology Module 5 videos. Embedding them as sections keeps the current counts.

| Slot | Entry knowledge | Question focus | Stop and next handoff |
| --- | --- | --- | --- |
| After Chemistry C4B (both C4 parts complete) | Concentration, temperature, gas pressure/volume and catalyst distinctions | Original HSC-style graph/explanation tasks: identify the immediate change, explain the later rate imbalance, and justify whether K changes | Stop before constructing K expressions. Continue to practical support/C5. Keep existing g02 for later industrial/unfamiliar applications |
| After Chemistry C15 | Dissolution, Ksp, net ionic equations and mixed-solution prediction | A mixed solubility/precipitation problem, including required dilution, equation choice and Qsp/Ksp interpretation | Stop at the planned Module 5 solution-equilibrium scope. Titrations and weak-acid pH calculation belong to their later module route |
| After Biology reproduction/agriculture block | Mechanisms in the named organism groups, gamete fusion and mammalian/agricultural context | Compare unfamiliar reproductive cases, distinguish pollination from fertilisation, and explain a consequence of disrupting one step | Stop before DNA replication/synthesis. Do not replace missing fungi/bacteria/protists teaching with a plant-only question |

Practice structure: give one complete unfamiliar task and all needed conditions; preserve a genuine attempt interval; reveal one reasoning stage at a time; explain why that step is valid; then offer a close independent transfer. Use plain language with precise science. Say HSC-style unless an actual official past-paper question and its source have been identified. Do not promise marks without a checked marking guideline. Existing protected attempts inside core lessons remain useful and do not eliminate these more demanding practice opportunities.

## What is actually reused now

The selected C3 feedback candidate uses `chem12m5DisturbanceClear` in six scenes. It imports existing `DioramaDefs`, `DioramaPlinth`, `AtomDefs` and `Ball`, and the reviewed disturbance/temperature model functions. The N/O treatment is reused. Controlled-transfer logic, concentration graphs and staging were newly authored for this task. The current flowering-plants candidate uses `bioM5PlantReproduction` in five scenes, importing Diorama primitives and adapting existing flower/runner motifs. Its sperm-delivery, fusion, embryo and rooted-runner sequence is new choreography.

Neither selected source contains a `scene.image` reference. Do not describe these lessons as using the paid raster artwork or importing whole scenes from DesignDirections, CapabilityTests or HandDrawnShowcase. The registry currently has 31 Chemistry and 29 Biology Module 5 kind entries, including recent additions. These are available code components, not counts of approved lessons or old paid assets.

## Select existing candidates before constructing new visuals

| Next teaching purpose | Existing library candidate | Required selection check |
| --- | --- | --- |
| C4A pressure/volume/inert gas | `chem12m5Pressure`, `PressureDiagram.tsx` | Reuse piston, molecules, gauge and jump/response staging. Check the stated ammonia reaction and reading load |
| C4B catalysts | `chem12m5CatalystBoth`, `CatalystBothDiagram.tsx` | Reuse energy profile/both-direction cues. Correct unsupported universal equal-factor labels before selection; equal-rate mode alone retains them. Stage profile and concentration-time comparison separately |
| C5 expressions | `chem12m5KeqBuilder`, `KeqBuilderDiagram.tsx` | Reuse species/state/coefficient tiles, numerator/denominator motion and omission tray. Stage the rule before substitution |
| Meaning of K | `chem12m5KeqScale`, `KeqScaleDiagram.tsx` | Select only the relevant case and preserve boundary/notation clarity |
| Graph practice | `chem12m5Signatures`, `SignaturesDiagram.tsx` | Choose individual panels and keep answers hidden during attempts. This uses A to 2B, so it cannot be substituted into a one-to-one model unchanged |
| Mitosis/meiosis | `bio12m5CellCycle`, `bio12m5Mitosis`, `bio12m5Ploidy`, `bio12m5Meiosis`, `bio12m5Reshuffle` | Audit chromosome counts and each separation stage. Existing meiosis declares 2n = 4 and one prior DNA copy |
| Inheritance | `bio12m5Cross`, `CrossDiagram.tsx`; `bio12m5Heterozygote`, `HeterozygoteDiagram.tsx` | Reuse configurable parent alleles and computed genotype/phenotype trays. Show one current cross and reasoning step |
| Controlled plant reproduction | `bio12m5Flower`, `FlowerDiagram.tsx`, handcross mode | Reuse anther removal, bagging, selected pollen and labelling where the chosen practical needs it. Review cumulative copy |

Registered artwork candidates include `m5L6GasSyringeCompression`, `bioM5L14PedigreeChart`, `bioM5L15BloodGroups`, `bioM5L7HelaCells` and `bioM5L8NondisjunctionKaryotype` in `src/assets/index.ts`. Registration does not verify current file presence or fitness. Inspect the actual file and applicable source before selecting it. Gas-syringe context can help pressure; unrelated atmosphere/exam imagery should not displace an explanatory model.

Root checked those five registered PNG paths: all five are currently absent. Their filenames also have no members in the local `out/archives/*.zip` files inspected in this turn. This is a bounded availability finding, not a conclusion that all earlier artwork is missing or unrecoverable. The code diagram candidates above are present. See [the file check](module5-c3-reference-feedback-2026-10-10/artwork-availability.json). Locate original artwork copies before promising image reuse or spending on replacements.

Each new selected scene brief must name the existing candidate examined, record reuse/as-is or its exact adaptation, and explain why any new construction is needed. Preserve usable treatments. A different starting equilibrium, stoichiometry, progress-linked K, or incorrect biological containment is a reason to adapt the model, not to discard all library art. Apply source, intended-size, voiced and listening reviews to the actual selection. No feature quota or decorative diorama requirement is introduced.

Read-only independent audits by Sol 6.1 supplied the inventory and route recommendations. Root reviewed and recorded them. This document changes neither coverage approval nor release status.
