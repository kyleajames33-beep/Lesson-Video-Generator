# Brief 73: built-scene fact check

Errors only. Source paths refer to the built on-screen text or data. The lesson designs were also checked.

## bio-m5-b13

- `src/explainer/lessons/bio-m5-b13/world.tsx:65-67`: The 1 to 5% HbS band covers much of the Horn of Africa and land south of the Zambezi. The published map shows HbS largely absent in both areas. Remove these areas from the banded shading. Source: [Piel et al. 2010, Figure 1b and results](https://www.nature.com/articles/ncomms1104).
- `src/explainer/lessons/bio-m5-b13/world.tsx:68-74`: The map shows no HbS band in Madagascar and only 1 to 5% in the Chalkidiki region of Greece, southeastern Turkey, western Saudi Arabia and southern Karnataka. The paper reports frequencies above 6% in Madagascar, Chalkidiki, southeastern Turkey and western Saudi Arabia, and above 9% in southern Karnataka. Add or raise the bands in those regions. Source: [Piel et al. 2010, Figure 1b and results](https://www.nature.com/articles/ncomms1104).
- `src/explainer/lessons/bio-m5-b13/world.tsx:82-85`: The historical-malaria hatch omits the southeastern United States and the broad eastern China and northern Asia epidemic area. Figure 1c includes those regions in its pre-intervention malaria map. Extend the hatch to the published footprint, or label it as a narrower illustrative subset. Source: [Piel et al. 2010, Figure 1c](https://www.nature.com/articles/ncomms1104).

## bio-m5-g03

- `src/explainer/lessons/bio-m5-g03/s1.tsx:205`: Wrong: "both copies lost". Correct: "working copy lost". The drawing retains the inherited faulty copy and removes the remaining working copy. Source: [primary study of loss of the normal BRCA allele](https://pubmed.ncbi.nlm.nih.gov/10862052/). The design repeats the error at `docs/production/claude-pm/lessons/bio-m5-g03.md:53`.
- `src/explainer/lessons/bio-m5-g03/s1.tsx:189` and `src/explainer/lessons/bio-m5-g03/s4.tsx:187`: Wrong: "both copies must fail" and "the working copy must also be lost" as requirements for every cancer in a BRCA carrier. Correct: loss of the working copy is a common route, not a requirement in every tumour. Some BRCA-associated breast cancers retain the normal allele. Source: [Maxwell et al. 2017](https://www.nature.com/articles/s41467-017-00388-9).

## bio-m5-g01

No errors found.

## bio-m5-g02

No errors found.

## bio-m5-p01

- `src/explainer/lessons/bio-m5-p01/s3.tsx:166`: Wrong: "a real ribosome holds two tRNAs at a time". Correct: a ribosome has A, P and E sites, and three tRNAs can occupy them simultaneously. Source: [RCSB PDB 5DOY, structure with three bound tRNAs](https://www.rcsb.org/structure/5DOY). The design repeats the error in its author note (f).

## bio-m5-p02

No errors found.

## bio-m5-p03

No errors found.

## chem-m5-p01

- `src/explainer/lessons/chem-m5-p01/s2.tsx:23`: Wrong: the water-control row says shift "none" and reason "dilution only". Correct: dilution shifts Fe3+ + SCN- ⇌ FeSCN2+ left. Diluting all concentrations by a factor below 1 makes the reaction quotient greater than K; the control still separates this effect from added NaOH. Source: [Harvard's iron(III) thiocyanate equilibrium](https://sciencedemonstrations.fas.harvard.edu/presentations/equilibrium-iron-iii-thiocyanate). The design repeats the error at `docs/production/claude-pm/lessons/chem-m5-p01.md:89`.
- `src/explainer/lessons/chem-m5-p01/s1.tsx:162`: Wrong: irreversible means "no change you can make brings the start back". Correct: no condition available in this school-lab activity brings magnesium back. Magnesium oxide can be converted back to magnesium by electrolysis. Sources: [experimental MgO electrolysis study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10351870/) and `docs/production/claude-pm/lessons/chem-m5-p01.md:140`.
- `src/explainer/lessons/chem-m5-p01/s3.tsx:133`: Wrong: 0.1 mol/L NaOH is labelled "eye damage, even when dilute". Correct: "can irritate eyes; wear safety glasses". The concentration-specific SDS lists eye irritation for 0.1 N NaOH. Sources: [Fisher 0.1 N NaOH SDS, sections 2, 3, 8 and 11](https://www.fishersci.com/store/msds?countryCode=US&language=en&partNumber=AC124190250&productDescription=SODIUM+HYDROXIDE+0.1+N+25LT&vendorId=VN00032119) and `docs/production/claude-pm/lessons/chem-m5-p01.md:177`.

## chem-m5-p03

No errors found.

## bio-m5-b11

No errors found.

## bio-m5-b12

No errors found.

## Resolution (18 Oct)

All findings fixed on screen and in the designs. No narration, measured inputs or voice scripts changed; every cue phrase is unchanged. Scoped type-check clean (`out/explainer/tsconfig.check73.json`). Stills of each changed moment were rendered and inspected; previews rebuilt (listening still pending).

- **bio-m5-b13** (`world.tsx`, `s1.tsx`): bands redrawn against Piel et al. 2010 Fig. 1b (figure viewed via PMC3060623) and its results text. The 1 to 5% band no longer covers the Horn of Africa or land south of the Zambezi (southern edge now about 17 to 21 degrees S, Mozambique coast the furthest south). Added: Madagascar (1 to 5% with a 5 to 10% patch), central Sudan inside the 5 to 10% band, Chalkidiki and southeastern Turkey (5 to 10% patches), western Saudi Arabia coast (5 to 10%), southern Karnataka (5 to 10% ring with an over-10% core; the paper's class there is 9.61 to 11.11%). The key keeps its three written bands, which regroup the paper's ten Jenks classes; the tag "redrawn from Piel et al. 2010, bands simplified" stays. Historical malaria hatch extended to the Fig. 1c pre-intervention footprint (all classes, epidemic to holoendemic): southeastern USA, southern and eastern Europe, a broad band across northern Asia, eastern China, Korea and Japan, western Arabia coast, Madagascar, northern Australia; deserts (Sahara, inner Arabia, Tibet, Gobi) left clear. Overlapping hatch zones share one group opacity so overlaps do not darken. The scene 3 survey dots are now spread by band area, so small patches get a dot or two instead of a cluster. Index 0 to 2 bands and malaria zone 0 stay Africa, so the scene 5 amber rings are unchanged.
- **bio-m5-g03** (`s1.tsx`, `s4.tsx`, design): "working copy lost: this cell can become a cancer"; the pair tag reads "in a cell, the working copy is often lost too"; key note 2 reads "losing the working copy is a common route". Design lines 5, 33, 53, 114 and 222 match. Narration ("Cancer usually starts only if a cell also loses that working copy") already says "usually".
- **bio-m5-p01** (`s3.tsx`, design note (f) and scene 8 visual): tag reads "real ribosome: up to three tRNAs (A, P and E sites)" (shortened from the first wording so it clears the frame edge).
- **chem-m5-p01** (`s1.tsx`, `s2.tsx`, `s3.tsx`, `parts.tsx`, `assets.ts`, design): results row 5 reads shift "slightly left", reason "dilution" (shift and reason columns rebalanced to 112 and 189 px so the two-line cell fits); irreversible reads "nothing in a school lab brings the start back"; the NaOH row reads "can irritate eyes" / "wear safety glasses". Design lines 33, 34, 64, 89, 104 and 177 match (the recorded line "even dilute, can harm your eyes" stays; irritation is harm). Brief 72 plates wired: tube 5 is `p01-iron-tube-diluted-v2.png` on the C3 crop (alpha box 468, 209, 814, 1517 measured with PIL, alpha > 20; liquid mean #f2dac8 against stock #f2d8c5), replacing the coded pale wash in scenes 8, 10, the attempt and feedback, and the decision row. The Bunsen is the aligned pair `p01-bunsen-unlit-v2.png` / `p01-bunsen-lit-v2.png` on their union box (unlit 647, 428, 1354, 1725; lit 647, 202, 1354, 1725; flame centre x 999): the unlit burner stands under the tube, crossfades to lit on "Heat pink cobalt" and back to unlit on "add a few drops". Retired: `p01-iron-tube-diluted-v1.png`, `m5x-bunsen-burner-v1.png`. Narration "gets only a tiny bit paler" stays consistent.

Previews: bio-m5-b13 v4, bio-m5-g03 v3, bio-m5-p01 v3, chem-m5-p01 v3 (URLs in the root report). Human listening at playback speed is still pending; these are not release passes.
