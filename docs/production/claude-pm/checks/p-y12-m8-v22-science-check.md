# phys-y12-m8-v22 science check

Independent Codex source review,7 November2026. Revision1 SHA256 `d62fa74bc3f7ece815ccd742e6b0d7177f1e7f4b923cbef036aad16060199085`. No source edits.

P8-IQ5-03 (Physics Stage6,2017):
> investigate the operation and role of particle accelerators in obtaining evidence that tests and/or validates aspects of theories, including the Standard Model of matter (ACSPH120, ACSPH121, ACSPH122, ACSPH146)

1. **Should fix (scene6):** mv is not the general momentum at the relativistic energies used here. Start the bending relation with r=p/(qB), or identify mv as the low-speed case before using relativistic p. Keep momentum/energy, not speed alone, as the ramped quantity. The actual numerical B examples already use relativistic p and do not need re-voicing of their answers.

2. **Should fix (scene12 histogram):** The Higgs bump is in reconstructed diphoton invariant mass, not simply the sum of the two photon energies in the lab. Correct the axis and the short description; energies and their relative angle determine that mass. [The2012 ATLAS report](https://cds.cern.ch/record/1460410) explicitly uses diphoton invariant mass. Keep the schematic/not-data label and the observed mass near125GeV.

3. **Should fix (scenes10,11 and detector labels):** Missing transverse momentum does not uniquely identify a neutrino; it identifies undetected momentum, with neutrinos one physical source. Keep the worked neutrino example but remove the universal arrow "missing momentum -> neutrino" as a unique particle-identification rule. Also say muons leave outer tracks, rather than only muons get through all layers, since the next scene correctly has undetected neutrinos passing through. [Fermilab's detector explanation](https://cdf.fnal.gov/detintro.html) describes unseen particles such as neutrinos and the combined missing momentum.

4. **Should fix (scene13 and notes):** "No accelerator can test gravity" is false. Accelerator-produced antihydrogen was used by ALPHA to test gravitational free fall. Keep the valid limitation that gravity is outside the Standard Model rather than claiming an impossibility for accelerator experiments. [ALPHA's own report](https://alpha.web.cern.ch/first-measurement-antihydrogen-free-fall-using-radial-time-projection-chamber/) is the primary counterexample. No new learner case study is required.

5. **Should fix (scene2 threshold animation):** Passing one particle's mc-squared is a necessary minimum, not a sufficient production threshold for every process. Lighting cells as if each can be produced alone ignores other final particles required by conservation laws. Keep the stated at-least minimum and make the animation a rest-energy comparison rather than a universal creation threshold. No extra calculation is needed.

6. **Should fix (upload title):** The actual title is108 characters. Shorten it to100 or fewer without changing narration.

The one-MV gain is1.602e-13J. Booster3GeV p=1.602e-18kg m/s, B=1.25T (1.24844 using displayed1.60); injection field0.041667T. The primary [booster design paper](https://proceedings.jacow.org/p05/PAPERS/RPAE084.PDF), tables1/2, confirms strong-dipole1.25T and7.99m radius; the8m bend radius is not the ring's average radius. LHC practice8.09256T and the crossed8092.56T check. The fixed-target113GeV comparison,13.6TeV beam sum and1.136e13 radiation ratio check under their stated approximations. [CERN's LHC page](https://home.web.cern.ch/science/accelerators/large-hadron-collider) confirms6.8TeV per proton beam. Calculations: `work/brief193/calculations-v20-v22.json`.

Scene-sum count:6384; declared:6384. This design uses the scene-sum convention. No U+2014 or U+2061. All stated syllabus quotations match the retained official2017 DOCX. Current site checks, built motion, exact voiced student review and human listening remain pending.

Result:0 blockers,6 should fix,0 optional. Resolve findings before recording.
