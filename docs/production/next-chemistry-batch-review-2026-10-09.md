# Next chemistry batch: review-first preparation

Prepared 9 October 2026. This is an independent source audit, scene proposal and unrecorded script draft. No source lesson, shared component, recording, render configuration or published package was changed. No audio was generated or video uploaded by this preparation task.

## Recommended order

Finish the current limiting-reagents and enzyme revisions, then prepare these three chemistry lessons in this order:

1. Percentage composition and empirical formulas, using L3 as the source. Keep molecular-formula inference as a clearly labelled extension.
2. Stoichiometry and mole ratios, using L11.
3. Mass-to-mass stoichiometry, using L12.

Then position the reviewed limiting-reagents video after those prerequisites. Molar mass is already public. Keep existing Mole Concept Part A and the Part B draft; review Part B before recording a duplicate. Empirical formulas and mole ratios are separate applications of amount reasoning, so this sequence provides course progression without implying empirical formulas are essential to every stoichiometry question.

Use separate 2017 and 2025 course playlists with one reusable core upload. Keep spoken openings and diagrams course-neutral. New Chemistry Year 11 implementation begins in 2028. The new full-course playlist also needs conservation-of-mass material before this mole-concept run. This proposal is not the complete course plan.

## Sources and limits

The plan applies AGENTS.md, docs/visual-design-handbook.md, docs/animation-planning.md, docs/production-memory.md, docs/production/youtube-publishing-plan-2026-10-09.md, docs/production/curriculum-continuity-2026-10-08.md and its JSON, docs/production/teaching-templates.md, docs/production/engagement-implementation-status-2026-10-08.md, docs/research/library-implementation-plan.md and docs/research/script-proposals.md.

The original empirical-formula learner task is in docs/production/quantitative-learner-tasks/empirical-formulas.md. It already distinguishes formula inference from substance identification and asks about fractional ratios. Reuse that reasoning standard rather than copying the older source narration.

Curriculum evidence comes from the official NESA copies cached on 8 October in out/research/continuity-2026-10-08/. The live official page could not be retrieved through the web tool during this review. The cached source is an explicit evidence boundary, not a claim of a fresh live check:

- [NESA Quantitative chemistry, 2025](https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/content/year-11/faf0876f2f). Cached page SHA-256: 705dc49e5b964ded3eb3c51db5f4816c73eea925e601196a37b41c1364e3f65d. Extracted content: out/research/continuity-2026-10-08/official-content.txt, around lines 1168 to 1189.
- 2017 official DOCX source SHA-256: 7c75fc806d4d8154499b0c596eda048ce4367547922bbd4058da075d9c319d42. Extracted paragraph IDs p783 to p787 cover investigation of molar ratios, mole calculations, empirical formulas and limiting reactions. Paragraph IDs are source identifiers, not positions in the extracted array.
- The current continuity catalogue calls all three lessons shared-core candidates. Its per-lesson rows do not approve scene equivalence. The direct percentage-composition content evidence is stronger than the provisional L11/L12 catalogue rows.

| Source lesson | Current SHA-256 | Physical readiness observed | Production implication |
| --- | --- | --- | --- |
| src/data/chemistry-y11-m2-l3-empirical-molecular-formulas.json | f9a9533286af5012c7ae0b520fa1526dd06dbefe49acf73cb07109bf1a5c85af | Nine scenes; eight narrated scenes total about 899 words. All eight attached scene MP3s and alignment sidecars exist. Intro MP3 also exists. No generation sidecars found at the corresponding paths. | Old media is available, but voice provenance and listening approval are unknown. The changes below require new audio and alignment, not old recordings relabelled with new text. |
| src/data/chemistry-y11-m2-l11-stoichiometry-mole-ratios.json | e482bd8cbce4713a5490e2849b45b417669e99392f0d949ce9b116816ec2b41c | Ten scenes, nine spoken drafts, about 994 words. No scene audio paths attached. Contains U+2014 in selected copy. | Script and science review first, then fresh recordings. Current scene durations are draft estimates. |
| src/data/chemistry-y11-m2-l12-mass-mass-stoichiometry.json | 9aa731a83961d8ee91ca77f49f0cadd5511e060cc5c581b0f874daca639f622b | Ten scenes, nine spoken drafts, about 970 words. No scene audio paths attached. Contains U+2014. Concept image is absent at its registry-resolved path. | Correct the reasoning and use the existing coded pathway if it explains the same beat. Do not render a missing-image placeholder as accepted content. |

Presence of files is not a media-preflight pass. No complete new lesson has been played or approved through this task.

## Reusable core and distinct curriculum work

| Lesson | Reusable explanation | 2025 mapping and limits | Separate additions or checks |
| --- | --- | --- | --- |
| L3 | Mass fraction, percentage composition, mass-to-mole conversion, simplest whole-number ratio and rational ratio reasoning | cibccbf29b explicitly requires percentage composition and empirical formulas. The 2017 p786 topic matches. | The current source mostly calculates from percentages and needs a concise forward percentage calculation. Molecular-formula inference is a useful related extension, not an independently verified named requirement in this point. Keep it in a separate chapter so it can be reused, shortened or omitted later. |
| L11 | Balanced equation, conserved atoms, coefficient ratios, conversion between amounts of different species | ci94bdbfc4 names a practical investigation of simple whole-number molar ratios. A concept explanation supports it but does not fulfil the practical action. The old p783 also names an investigation. | Prepare a distinct teacher-reviewed practical/data task later. Do not put a practical-completion claim in the description. |
| L12 | Converting a given mass through the equation's mole ratio to the mass of a wanted substance | ci47b34fec requires real-world problems combining stoichiometry and reacting masses. The exact old/new scene comparison is still provisional. | State reaction, purity, excess-reactant and completion assumptions. Add one contextual interpretation, such as the source of extra oxygen mass, rather than only completing arithmetic. |

None of these core methods appears likely to require a new recording solely because the syllabus location changes. Keep version-specific outcomes, investigation actions and sequence in playlist/description mapping. Recheck required scope against NESA before declaring complete coverage.

## Specific corrections before production

### Empirical formulas

- The hook callout currently says mass data can tell the molecule, contradicting the premise. Replace it with a claim that composition gives a ratio, while molar mass can supply the scale for a single molecular substance.
- The hook caption calls composition a fingerprint. Different compounds can share composition, and a molecular formula can have isomers. Remove the uniqueness implication throughout.
- Remove the unsupported setup that a mass spectrometer directly supplied these percentages, and the white-powder setting when glucose, formaldehyde and acetic acid are presented as equal candidates.
- The worked answer identifies C6H12O6 as glucose. The formula is consistent with glucose and other substances; it does not establish identity. Keep glucose as a named comparison whose formula is already known.
- Supply one consistent atomic-value set and retain guard digits. Proposed main data: C 12.01, H 1.008, O 16.00 g mol^-1; composition 40.00% C, 6.71% H, 53.29% O; molecular molar mass 180.16 g mol^-1. These rounded synthetic values support CH2O, then C6H12O6.
- The old 80.0% C/20.0% H and 30 g mol^-1 quiz is a coarse school-value approximation, but it is presented alongside precise atomic values without a declared tolerance. Replace it with the existing learner task's approximately 30.45% N/69.55% O and supplied N 14.01, O 16.00, which supports NO2. Avoid building new audio around the old inconsistency.
- Do not say the method always works or that every decimal can be cleaned into a small ratio. Near-integer decisions depend on measurement precision. Unexpected ratios call for checking values and assumptions.
- A 100 g basis is convenient for percentages; actual element masses can be used directly. The final rule must not tell learners to assume 100 g in every empirical-formula question.

### Mole ratios

- Coefficients specify relative numbers of entities as well as relative amounts in moles. A coefficient does not exclusively mean moles. Subscripts count atoms within a molecule or formula unit, not the entire reacting sample.
- Keep water's formula intact when contrasting coefficients with subscripts. The same entity should remain visible while the number of entities changes. Modelled particles are schematic, not one mole per visible ball.
- Do not imply a balanced equation alone guarantees actual yield, complete conversion or an available reagent. Add the complete-reaction/enough-other-reactant conditions to amount examples.
- Keep the acid/base 0.300 mol to 0.600 mol example and the equation, but replace a sequence of four verbal directions with the reason twice as much HCl is required.
- Align the existing chem11m2Ratio diagram's display precision with the board. Its current dp: 1 gives 0.3/0.6 while the worked board uses 0.300/0.600. Check whether the component supports three decimal places before changing the selected draft.
- Remove unsubstantiated promises about lost marks and repeated generic five-item recaps. Retain an actionable ratio-orientation check and a changed-ratio practice question.

### Mass-to-mass

- A direct combined mass conversion is valid when it includes the molar masses and coefficient ratio. Replace the absolute claim that grams cannot convert directly with an explanation that coefficients are mole ratios, not mass ratios. Teaching the mole pathway makes the relationship visible.
- Different substances can have the same molar mass. The rule is to use each species' own molar mass, not to insist the two numbers must differ.
- The source's l12MassMassBridge image resolves through src/assets/index.ts to public/assets/hscscience/generated/lesson-12-mass-mass/mass-mass-bridge.png. That file is missing. Inspect and reuse chem11m2Pathway for this teaching beat before commissioning new artwork.
- Carbon combustion needs sufficient oxygen and complete conversion. Explain why the CO2 product mass can exceed carbon's starting mass: oxygen contributes mass. This reinforces conservation rather than making the method seem arbitrary.
- Fe2O3 calculation should specify pure Fe2O3, enough CO and the stated reaction model. Ore mass alone is not pure oxide mass. Theoretical product mass is not measured recovered mass.
- Use unrounded internal quantities. Existing displayed intermediate products should not silently imply calculations use rounded values. Report the supplied problem's significant figures in the final answer.

## Remotion-first review sequence

Yes, inspecting the exact lesson in Remotion before a full export should be the normal loop. Preview can catch the unrelated atom, overflowing title, small diagrams, early answers and weak explanations before a costly render. A still checks layout; real-time preview and a short recorded pilot check motion and narration. The final MP4 still needs review because encoded playback, sound mixing and platform quality can introduce problems that Studio does not show.

1. Prepare an isolated lesson draft and scene plan from the source. Read the complete script aloud before paid speech generation. Independently recompute examples and inspect curriculum boundaries.
2. Load that exact selected draft in Remotion. Use the current composition and preview props, not an unrelated catalogue lesson with the same topic. Scrub the opening, title hold, first equation, difficult transformation, answer boundary and closing hold. Check captions on and off, desktop and phone-sized player.
3. Preview the difficult 60 to 90 second sequence in motion. Inspect whether visible changes actually explain the concept and retain the original reference. Fix scene-specific failures while keeping usable art.
4. Once the script and scene logic are stable, generate the selected scene recordings, save model/settings/take provenance, assemble exact response gaps, rebuild alignment/captions and set final cues from the audio.
5. Play the recorded sequence in Remotion, then render a short pilot from the exact draft. Check pronunciation, speech flow, cue timing, answer leakage, stable equation holds, caption collisions and phone readability. Record explicit failures or limited evidence. No animation quota is applied.
6. Freeze inputs, render one full lesson, check the native encoded export and media measurements, then watch the full MP4. Bind review evidence and upload metadata to its exact release snapshot.
7. Upload a reviewed preview as unlisted when ready. Promote to public only at the current agreed review boundary. Do not publish three unreviewed lessons merely because one pilot passes.

Independent agents can check arithmetic, wording, syllabus evidence and release dependencies in parallel. One owner should integrate changes. Agents must not concurrently rewrite shared source or regenerate the same lesson media. Agent review complements actual listening, teacher judgement and learner responses; it is not a claim of improved learning outcomes.

## First lesson scene proposal

This reuses the nine-scene L3 structure. The generic dozen diagram is not useful for the opening decision and can be omitted from the selected draft. Inspect a simple comparison of known molecular formulas before adding a new component. Existing artwork remains available in the catalogue.

| Scene and beat | Learner understanding | Existing component/asset | Narration cue and meaningful motion | Hold and response | Review status |
| --- | --- | --- | --- | --- | --- |
| hook | A shared elemental ratio need not identify a substance | Hook comparison cards or concept comparison using existing layouts | Reveal CH2O, C2H4O2 and C6H12O6 as known formulas. Reduce their counts to a shared 1:2:1; no unrelated atom. | Reading hold while the question is explained. No forced long opening silence. | Proposed; component capability and phone fit need inspection |
| title | Know the lesson's task | Existing title slide | Short title: Empirical formulas. Subtitle carries percentage composition and molecular extension. | Check full title hold and caption clearance. | Proposed |
| concept | Empirical ratio versus actual molecular count | chem11m2Empirical in EmpiricalBlocksDiagram.tsx | Reuse the sorting of glucose's 6:12:6 counts to six ratio blocks and formaldehyde's 1:2:1 count. Label as a counting model, not glucose's bond structure or six separate molecules. | Stable labels after sorting; enough time to compare. | Existing useful model, cue and label review required |
| definition | Mass percentage and count ratio describe different things | Existing definition and compact calculation board | One CH2O formula contributes 12.01, 2.016 and 16.00 to 30.026 g per mole. Reveal carbon fraction then 40.00%. | Keep the complete expression readable; terms may remain defined in a translator card. | Proposed forward calculation fills current scope gap |
| formula | A 100 g basis simplifies percentages, then moles remove unequal atomic masses | MassBreakdownDiagram with explicit segments | Show 40.00%, 6.71%, 53.29% on a 100 g basis. Diagram split is a mass-accounting illustration, not physically separating elements. | Keep mass values visible as the mole relationship is introduced. Existing START=186 is fixed, so inspect actual cue placement before reuse. | Useful existing asset; current timing requires inspection |
| worked-example | Moles yield 1:2:1; molar mass supplies molecular scale | Existing worked-example board | Reveal mass, moles, normalised ratios, CH2O, then a clearly labelled molecular extension: 180.16 / 30.026 approximately 6. Keep guard digits internally. | Separate formula-scaling reveal from empirical result; hold each result. | Arithmetic independently recomputed below; layout and narration pending |
| misconception | 1:1.5 is preserved by multiplying all terms, not rounding one away | Existing misconception cards | Contrast wrong 1:2 with valid 2:3 for a hypothetical ratio 1:1.5. Explain that all terms change together. | Prompt can invite a pause; no speculative reward animation. | Proposed |
| quick-check | Transfer to new elements and explain the ratio | Existing quick-check board | Prompt only: 30.45% N, 69.55% O, N=14.01 and O=16.00. Reveal NO2 and why after the protected boundary. | Two-second start gap plus explicit invitation to pause longer. Hide answer in audio, visual coach notes and captions until boundary. | Proposed separate prompt/answer segments |
| summary | Choose a basis, compare moles, preserve ratio; recognise inference limits | Existing summary | Three compact decisions and a final rule. Return to opening: formula evidence is not substance identification. | Reading hold; no generic encouragement paragraph. | Proposed |

The first 60 to 90 second pilot should cover the concept distinction and beginning of the mass-to-mole reasoning. It tests both the existing empirical counting model and the diagram/board transition. Do not select a bland title-only excerpt as evidence of teaching readiness.

For L11, inspect a pilot from chem11m2CoefSub through chem11m2Ratio. Maintain the formula while changing coefficients; label scaling as amount reasoning. For L12, inspect chem11m2Pathway into the carbon example and explain the oxygen mass contribution. These specific previews address the next lessons' hardest teaching moments.

## Independent arithmetic record

These computations use the supplied school values and the proposed rounded synthetic composition. They are not laboratory measurements or substance-identification results.

| Calculation | Unrounded value or interpretation | Display suggestion |
| --- | --- | --- |
| C moles from 40.00 g | 40 / 12.01 = 3.3305578684429644 mol | 3.3306 mol |
| H moles from 6.71 g | 6.71 / 1.008 = 6.656746031746032 mol | 6.6567 mol |
| O moles from 53.29 g | 53.29 / 16 = 3.330625 mol | 3.3306 mol |
| Divide by smallest | 1 : 1.9986879960317459 : 1.00002015625 | approximately 1 : 2 : 1 |
| Empirical formula mass | 12.01 + 2(1.008) + 16 = 30.026 g mol^-1 | 30.026 g mol^-1 before final reporting |
| Molecular multiplier | 180.16 / 30.026 = 6.000133217877839 | approximately 6; C6H12O6 |
| Carbon mass percent from CH2O | 100(12.01 / 30.026) | approximately 40.00% |
| Nitrogen quiz | 30.45 / 14.01 and 69.55 / 16 support approximately 1:2 | NO2 |
| Quiz optional extension | NO2 formula mass 46.01; 92.02 / 46.01 = 2 | N2O4, if a molecular molar mass is separately supplied |

## First script draft, separate from existing audio

This is an unvoiced draft for review. Production notes are excluded from spoken text. It uses occasional questions and concrete contrasts, with the reason for each operation stated. It avoids a string of directions such as watch, label, compare and do this. Scientific symbols and exact intermediate working remain in the descriptive transcript and stable board.

### hook

Glucose and formaldehyde are very different substances. Yet both have the same simplest ratio of carbon, hydrogen and oxygen atoms: one to two to one. So a composition result can give us a useful clue without telling us exactly what the substance is. The first clue is an empirical formula. Let's see how a measurement of mass becomes a ratio of atoms.

### title

Empirical formulas: from percentage composition to a ratio of atoms.

### concept

Glucose has six carbon atoms, twelve hydrogens and six oxygens in each molecule. That six to twelve to six ratio reduces to one to two to one, written C H two O. Formaldehyde already has one carbon, two hydrogens and one oxygen. Its formula reduces to the same ratio. The empirical formula keeps the proportion. The molecular formula keeps the actual atom count in one molecule. These blocks are a counting model; they don't show how the atoms are bonded.

### definition

Percentage composition measures a different relationship: how much of a compound's mass comes from each element. For C H two O, the carbon contributes twelve point zero one out of a total of thirty point zero two six grams per mole, using our supplied values. Divide the carbon contribution by the total, then multiply by one hundred. That's about forty percent carbon by mass. The hydrogen count is twice the carbon count, but hydrogen atoms are much lighter. Atom ratios and mass percentages won't generally be the same numbers.

### formula

Suppose an analysis gives forty point zero zero percent carbon, six point seven one percent hydrogen and fifty-three point two nine percent oxygen. A hundred-gram calculation basis makes those percentages easy to use: forty grams, six point seven one grams and fifty-three point two nine grams. We haven't changed the composition, just chosen a convenient sample size. If actual element masses are already given, use them directly. Next, dividing each mass by its own molar mass puts all three elements onto a common counting scale: moles.

### worked-example

The board shows those three conversions. Carbon gives about three point three three moles, hydrogen about six point six six, and oxygen about three point three three. Hydrogen's smaller mass contains nearly twice as many atoms. Dividing every amount by the smallest keeps their proportions but makes them easier to recognise. With the extra digits retained, the ratio is very close to one, two, one. So the empirical formula is C H two O.

If the question also supplies a molecular molar mass, we can go one step further. Here it is one hundred and eighty point one six grams per mole. One empirical formula has a formula mass of thirty point zero two six. The actual molecular mass is about six times that size, so every subscript is multiplied by six. We get C six H twelve O six. Glucose has that molecular formula, but the formula alone doesn't prove the substance is glucose. How those atoms are arranged still matters.

### misconception

A ratio of one to one point five can look awkward, but rounding it to one to two changes the proportion. Multiplying both values by two gives two to three and preserves it. The same idea helps with thirds and quarters. Keep the calculation digits until you can judge the pattern. Small departures from whole numbers can come from rounded measurements; an unexpected result is a reason to check the data, not force an answer.

### quick-check prompt

Try a new pair of elements. A compound contains approximately thirty point four five percent nitrogen and sixty-nine point five five percent oxygen by mass. Find its empirical formula, using the supplied molar masses. Pause here if you'd like time to calculate it.

Production note: keep N=14.01 and O=16.00 g mol^-1, the full prompt and blank working visible. Insert a measured two-second start gap between separate prompt and answer recordings. Do not show the final formula or answer caption during the gap.

### quick-check answer

On a hundred-gram basis, the nitrogen gives about two point one seven moles and the oxygen about four point three five. Dividing by the nitrogen amount gives approximately one to two. The empirical formula is N O two. If you compared the two masses directly, oxygen would look like just over twice the nitrogen. Converting to moles is what makes that comparison about atoms.

### summary

Composition questions connect mass to atom ratios. Choose a convenient basis, convert each element to moles, then find the simplest whole-number ratio without rounding the proportion away. A molecular molar mass can supply the scale for a molecular formula. And remember our starting puzzle: a ratio is a clue to composition, not a complete identification of the substance.

## Search titles, descriptions and chapter intent

These are search-query hypotheses, not measured volumes or ranking promises. Avoid episode numbers until playlist order is complete. Exact chapter timestamps must come from the final measured timeline; none are invented here.

| Lesson | Proposed YouTube title | Description opening | Chapter intent |
| --- | --- | --- | --- |
| L3 | Empirical Formulas from Percentage Composition \| Year 11 Chemistry | Learn why mass percentages must be converted to moles before finding an empirical formula. Work through a carbon, hydrogen and oxygen example, avoid fractional-ratio rounding errors, then see the related molecular-formula extension. | Why composition is not identity; empirical versus molecular; calculating percentage composition; percentages to moles; worked empirical formula; molecular extension; fractional-ratio trap; nitrogen and oxygen practice; recap |
| L11 | Stoichiometry: Mole Ratios from Balanced Equations \| Year 11 Chemistry | Read coefficients as ratios of reacting amounts, distinguish them from formula subscripts, and calculate one substance's amount from another. The explanation supports practical investigation but does not replace it. | Balanced equation as amount relationship; coefficients versus subscripts; conserve atoms when balancing; orient the wanted/given ratio; acid and base example; changed-ratio practice; recap |
| L12 | Mass-to-Mass Stoichiometry: Reacting Mass Calculations \| Year 11 Chemistry | Predict a reacting or product mass using molar masses and the balanced equation. Explain why carbon dioxide can weigh more than the carbon that formed it, then apply a non-unit ratio to a stated iron-oxide model. | Why coefficients are not mass ratios; mass-to-mole pathway; carbon example and oxygen contribution; iron oxide example and assumptions; wrong molar mass or ratio; reverse magnesium practice; recap |

Descriptions should include a short paraphrase of supported 2017/2025 scope and the official NESA link above. For L3, label molecular inference as an extension. For L11, distinguish the concept from ci94bdbfc4's practical action. For L12, reference ci47b34fec as the new reacting-mass application while keeping old/new scene approval pending. Reuse accurate English (Australia) captions and descriptive transcripts generated from the final selected narration. Choose a thumbnail that represents the actual calculation, with legible formula and one clear question, after the native still review.

## Ready work and remaining blockers

The isolated 729-word empirical-formula draft has now been opened and inspected in Remotion at 1920x1080 and 30 fps. Preview review caught a late formaldehyde bullet. Independent timing review also brought definition calculations and recap takeaways forward, removed an unspoken early normalisation bullet, and extended the formula callout hold. The revised draft is 9198 frames. Selected definition, mass-accounting, answer-free practice and recap frames show no clipping. Evidence is recorded in `out/prototypes/next-chemistry-review-2026-10-09/studio-ui-review.json` and `timing-audit.json`.

These checks cover a silent draft with estimated cues. Studio playback was slow on this machine, so smooth motion, narration delivery and phone readability remain unapproved. Keep the current scope labels and rebuild measured cues from fresh recordings before the narrated pilot.

Ready for the owner to review now: selected order, exact source hashes, curriculum boundaries, specific science corrections, existing diagram choices, a complete separate L3 script, a concrete pilot plan and search-led metadata intent.

Before recording L3: review the proposed values, read the full draft for delivery, confirm the forward percentage calculation fits the existing scene, inspect the empirical counting model's scope labels, and decide whether molecular inference stays as the final extension in the same video. This is a routine scope choice within the proposed plan, not a reason to block unrelated preparation.

Before full export: load the actual draft in Remotion, review difficult motion beats and phone fit, choose listened-to recordings, bind audio and cue timing, run media preflight, then review the short narrated pilot. L11/L12 still need their own conversational drafts. L12 has a concrete missing image. No review in this document substitutes for science approval, complete listening, a final encoded watch-through or real learner assessment.
