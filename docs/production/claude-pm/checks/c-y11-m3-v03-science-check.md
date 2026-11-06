# c-y11-m3-v03 science check

Independent source review, 6 November 2026. Reviewed SHA-256 `95b43dcbe9765133aebd062d8b22f4886ddc2ed387a292763b50fb8f9a6385fc`. Entry knowledge, start/stop boundaries and the route handoff were checked against this exact design. No design edits, narration generation or listening approval.

C3-IQ1-03 (local ledger ID), official Chemistry Stage 6 2017 wording:

> conduct investigations to predict and identify the products of a range of reactions, for example:

C3-IQ1-05 (local ledger ID), official Chemistry Stage 6 2017 wording:

> construct balanced equations to represent chemical reactions

The equations balance, including full and net ionic precipitation examples. Equal 0.1 M CaCl2 and NaOH drops give Q about 1.25e-4, above the course Ksp 5.02e-6, so a visible calcium-hydroxide precipitate is plausible. The official PbSO4 Ksp is 2.53e-8. At an illustrative 10 micrograms/L lead concentration, a simple saturation estimate needs about 0.524 M sulfate, which defeats the claimed trace potable-water application. See v03-solubility-checks.json for assumptions, references and shared-card scope.

[Current NESA Chemistry 2017 course page](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017) links the visually inspected 2019-labelled data sheet. [NHMRC zinc orthophosphate](https://guidelines.nhmrc.gov.au/australian-drinking-water-guidelines/part-5/treatment-chemicals/zinc-orthophosphate) concerns corrosion control, not the claimed simple lead precipitation treatment.

1. **Should fix (shared C13 exceptions, scene 5,18 and compact rules card):** Keep the accepted C13 Revision 3 card and a faithful compact notes version. The current displayed mostly-insoluble band omits the Ca/Sr/Ba sulfide exceptions, and key note 2 drops strontium and the hydroxide/sulfide exceptions that C13 explicitly added in checks 66/67. Root decision m3-4 asks for one shared card. The listed Year 11 narration difference can stand if the complete card remains accurate; adding spoken exception lists is not required. The documented omission of mercury(I) halides is the course scope, not a new finding.

2. **Should fix (drinking-water context, scene 1 and11, lead-removal application):** Do not present sulfate addition and filtration as the practical response to trace lead leached into tap water. The author note recognises that real drinking-water control uses corrosion control, but the hook still says water engineers use this trick and the return scene applies Na2SO4 to the same tap-water sample. Keep PbSO4 as a sufficiently concentrated laboratory teaching mixture, or replace the application with a context the chemistry supports. The official sheet gives Ksp(PbSO4)=2.53e-8: at an illustrative10microgram/L Pb concentration, roughly0.52M sulfate would be needed even to reach saturation in the simple activity-free calculation. This quantitative check stays in author notes, not a new Ksp lesson. NHMRC describes protective orthophosphate films/corrosion inhibition, not this sulfate-and-filter procedure. Sources and calculation: work/brief182/v03-solubility-checks.json.

3. **Should fix (limits of the reaction pattern, scene 2,17, description and memory-method scope):** Replace the unqualified only-new-thing-possible/ions-can-only-swap-partners claims with a statement about these precipitation cases. Mixing ionic solutions can also cause acid-base, gas-forming or redox reactions, which later videos teach. Keep the current partner-swap method for the chosen salts. Likewise present the split-aqueous-ionic-compounds rule as applying to these salt equations; it is not a complete general rule for the strong-acid equations taught later. No extra topic or duration is needed.

4. **Optional (unmeasured ions, scene 4, experimental support for the rules):** The3x3 grid contains no potassium or ammonium reagent, so it cannot establish their solubility pattern. Keep its actual sodium/nitrate observations and introduce the full NAGSAG card as a summary of wider experiments, rather than implying the displayed grid tested potassium. Replace the existing potassium clause or label the wider-data step; no extra experimental feature is required.

5. **Should fix (metadata length, scene draft YouTube title):** The title has 122 characters. Shorten to at most100 before upload, with no narration change.

6. **Should fix (asset canvas geometry, scene new yellow-flame plate, shared with m3-v04):** The asset brief asks for a yellow flame about twice the existing blue flame height while keeping the burner position,2000x2000 canvas and8 percent margins. The existing flame begins near y179 and its mouth is near y760: height about581px. Twice that height would put its tip near y-402. Only about600px fits above the fixed mouth with160px top clearance. The designer must revise the canvas/origin or the relative-height request. No yellow plate was painted from incompatible requirements. The blue burner has open collar holes near(970,1350), which the next scene can point to. See work/brief182/burner-coordinate-qa.jpg.

Reference atomic masses and constants use the current-linked official HSC data sheet, visually inspected in work/brief180 and work/brief182. The 66-case equation audit checks atoms and explicit charge, not phase or method approval. Public NSW guidance does not clear an exact school practical.

Site source identity:

- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module3/lesson03.sa.html`: SHA-256 `bc49bf0a146c4fc117c8988d9ac2302dc95637738ec2d566fd8adcb1e28a9106`; route identity True.

0 blockers, 5 should fix, 1 optional. Scene-sum narration count 6,263; joined count 6,280. Headline counts match the scene-sum convention. Estimated duration 559 seconds is planning, not measured timing. No U+2014 or U+2061. Bold and quoted cues match the spoken order in the saved cue audits. Required repairs fit existing scenes through replacement wording or author/display tags. Exact built layout, caption/phone fit, apparatus assembly, motion at playback speed and human listening remain pending. Reuse contact sheets were inspected; assembly QA and new plates are separate deliverables.
