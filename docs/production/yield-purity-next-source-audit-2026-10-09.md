# Yield and purity: next-source audit

Prepared 9 October 2026 by /root/next_batch_preparation. Read-only audit of the next catalogue candidate after the current chemistry review batch. This is preparation, not a selected recording, source approval, media review or permission to publish. No source lesson, shared component, audio or render input was changed.

## Exact source and evidence boundary

- Source: `src/data/chemistry-y11-m2-l14-percentage-yield-purity.json`
- SHA-256: `1e4723a9101c8aefe290745415bd38cbfd91f83d10b5fd9c0cbc0701818978ea`
- Catalogue identity: Chemistry-Y11-M2-L14, Percentage Yield and Purity.
- Ten scenes; nine scene narration drafts contain 1033 words. An additional intro narration draft exists. No scene audioFile paths, aligned caption tracks, measured responseHold or grouped calculation presentations are attached.
- Existing diagram: `src/slides/diagrams/kinds/chem-y11-m2/PercentDiagram.tsx`; SHA-256 `996b33405e3794d31b3ee9a0fbdf50e9ca9c457efc6232746334d65a4d9b5cf3`.
- Course selection and boundaries come from `docs/production/course-progression-plan-2026-10-09.md` and the corresponding ledger. Teaching decisions follow AGENTS.md, `docs/production/teaching-templates.md`, the production research and implementation plan, `docs/visual-design-handbook.md` and `docs/animation-planning.md`.

The current ledger calls this source-present-unreviewed and records exact current/new point and example scope as pending. Its inherited provisional crosswalk specifically warns that percentage yield/purity are not named in new Year 11 Quantitative chemistry. This audit does not upgrade that crosswalk to a verified absence or requirement. The source syllabusDotPoints string is author-declared copy, not checked official wording. Keep percentage-yield instruction as a scoped supporting calculation until direct scope is reconciled; do not claim this one lesson completes a mandatory new-course action. Existing concentration mass-percentage requirements are separate from chemical sample-purity examples. No new live curriculum claim or browser check was made here.

## Material findings before a selected draft

| Priority | Source evidence | Finding and necessary correction |
| --- | --- | --- |
| High | hook heading/body; concept secondary, caption and diagram trap; definition bullet/narration; examSkill; misconception; summary | Remove absolute claims that reality never gives 100%, real samples cannot be pure and any calculated yield above 100% is simply impossible. The true amount of pure desired product cannot exceed the correct stoichiometric maximum for the stated supplies and reaction. An apparent yield can exceed 100% if measured material contains water/impurities, measurement is biased, or the theoretical calculation/assumptions are wrong. Explain why the result calls for checking the sample, measurements and reference prediction. Do not tell students to cap a measurement at 100% or automatically blame their arithmetic. |
| High | worked-example-2 steps/caption versus voiceover.text | Board/caption says 87.5%; narration says 87.4%. Guard-digit calculation from the supplied atomic values gives 87.4536279%, which reports as 87.5% at three significant figures. The board's path rounds n to 0.200 and M to 56.08 before comparison. Replace the implied rounded calculation with the full expression; speech can describe about a fifth of a mole and the final percentage. |
| High | quick-check answerSteps/caption versus voiceover.text | Board/caption says 7.48 g CO2, while narration says 7.47 g. Using the supplied atomic values and unrounded amounts gives 7.4749520 g, reported as 7.47 g at three significant figures. 0.170 × 44.01 produces 7.48 only after premature rounding. Use the unrounded expression on the board and make all spoken/displayed/captioned results consistent. |
| High | worked-example-2 question; quick-check question; general actual-yield definitions | Identify the 20.0 g starting carbonate in the yield example as pure, and 9.80 g as pure/dry desired CaO recovered, with the stated decomposition equation as the theoretical reference. The actual collection need not imply complete real conversion. For the purity practice, predict theoretical CO2 assuming complete decomposition and impurities that neither produce CO2 nor change the stated reaction. An unspecified impurity could contribute to the gas or react. Stated sample composition alone cannot guarantee the collected product mass. |
| Medium | worked-example voiceover says other 20% was lost; hook/concept call yield efficiency and purity quality | 80.0% collected yield identifies a ratio, not the cause of the shortfall or 80% conversion. Incomplete reaction, other reactions and collection losses are possible explanations, not conclusions established by this one measurement. Product-yield efficiency is not energy efficiency or atom economy. Purity is a mass fraction of a named component on a stated sample basis, not a generic quality score. |
| Medium | concept body and repeated start/end rule | Purity can describe reactant or product samples. For these selected problems, reactant purity sets available reacting mass and recovered-product yield is compared with theory. Say that scope explicitly. Product purity matters too when a weighed recovered sample is used as the actual desired-product mass. The start/end mnemonic is useful here, not a universal definition or forced order for every reverse calculation. |

## Independent arithmetic

Keep the supplied atomic-value set consistent: Ca 40.08, C 12.011 and O 15.999 g mol^-1. Display guard digits with approximate signs where appropriate; calculate with the full expression. Final precision follows the supplied 8.00/6.40, 20.0/9.80 and 85.0%/20.0 values.

| Quantity | Calculation using supplied values | Reported quantity |
| --- | --- | --- |
| Direct SO3 yield | 100(6.40 / 8.00) | 80.0% |
| M(CaCO3) | 40.08 + 12.011 + 3(15.999) | 100.088 g mol^-1 before final reporting |
| M(CaO) | 40.08 + 15.999 | 56.079 g mol^-1 |
| M(CO2) | 12.011 + 2(15.999) | 44.009 g mol^-1 |
| Theoretical carbonate amount | 20.0 / 100.088 | 0.19982415474382545 mol |
| Theoretical CaO mass | (20.0 / 100.088) × 56.079 | 11.205938773878987 g, about 11.2 g |
| Collected CaO yield | 100(9.80 / ((20.0 / 100.088) × 56.079)) | 87.45362791775888%, then 87.5% |
| Pure carbonate mass | (85.0 / 100) × 20.0 | 17.0 g |
| Theoretical CO2 from that component | ((0.850 × 20.0) / 100.088) × 44.009 | 7.474952042202862 g, then 7.47 g |

Both displayed reaction equations conserve atoms. 2SO2 + O2 -> 2SO3 conserves 2 sulfur and 6 oxygen atoms. CaCO3 -> CaO + CO2 conserves one Ca, one C and three O. The CaCO3:CaO and CaCO3:CO2 amount ratios are both 1:1; their masses differ. The SO3 example supplies theoretical mass, so it does not itself demonstrate deriving that reference from limiting supplies. The carbonate example only needs one reacting solid; do not force an unnecessary two-reactant limiter calculation into it.

## Prerequisite, start, stop and next

The main route follows mass-to-mass and limiting-reactant reasoning, as planned. Entry knowledge is formula reading, mole ratios, species molar masses, mass/mole conversion, percentages as fractions and how a theoretical product reference depends on available reacting material. The direct 6.40/8.00 ratio can be understood before full limiting-reagent mastery, so distinguish this local prerequisite from placement in the full course route.

Start with two distinct questions: how much of a weighed sample is the named reacting substance, and how much desired product was recovered relative to the correct prediction? A useful short entry check is whether the denominator is the whole sample mass or the predicted mass of the same product. Supply the named substance and basis rather than asking learners to infer sample chemistry from colour.

Stop when learners can calculate and interpret a supplied mass purity, use reacting component mass in the theoretical calculation, compare matching actual/theoretical desired-product quantities, and explain why an apparent result above 100% needs investigation. A reverse purity or combined purity-and-yield case would be a useful extension only if explicitly taught and checked. The current source does not yet teach that integration or ask students to calculate purity from measured component and sample data; it mostly applies a supplied purity. Do not claim a broader calculate-purity objective without a short forward example or clearly narrower scope.

Exclude atom economy, energy efficiency, identifying an impurity chemically, equilibrium calculations, new concentration/gas-law conversions, practical conduct and determining a unique cause from one low-yield result. Next handoff: concentration, where the named solute amount is related to a solution volume. Explain that this introduces a different denominator and measurement basis, without claiming that next upload is already reviewed/public.

## Preserve useful visuals and stage the reasoning

| Scene | Preserve or adjust | Teaching purpose and concrete next change |
| --- | --- | --- |
| hook | Existing hook/editorial layout | Replace blanket real-world failure claims with a sample/product contrast, or a diagnostic question about a wet sample appearing to exceed prediction. Narrate the interpretation without exaggeration. No random artwork. |
| title | Existing title slide | Keep a short task title. In a new reusable selected draft, set introDurationInFrames:0 and syllabusNeutral:true rather than inheriting default intro/chrome. Retain syllabus mapping in descriptions/playlists. |
| concept | Existing chem11m2Percent two-panel diagram | Reuse 20 g sample/17 g component and 8 g possible/6.4 g collected as distinct mass relationships. Label purity grains as equal-mass bookkeeping portions, not literal particles or a physically removable impurity. The falling grains illustrate accounting, not a guaranteed separation method. Jar height is an amount/mass schematic, not observed physical volume. Change the selected trap text to an apparent-yield diagnostic and scope start/end labels to these examples. |
| definition | Existing definition slide | Trim repeated vocabulary recitals. Define theoretical maximum under stated supplies/model, recovered pure desired product and named mass fraction. Tie lower recovery to possible mechanisms, with no claimed unique cause. |
| formula | Existing concept/formula layout and percent diagram if still useful | Explain each denominator before the expression. Retain existing diagram only if it adds the reacting-mass scale rather than repeating the same two-panel story. One short forward purity calculation would fill the current intent gap. Do not impose a second animation merely for feature count. |
| worked-example | Native OrganisedCalculation board | Short task: find SO3 percentage yield. Separate equation and givens (actual 6.40 g, theoretical 8.00 g). Stage the compared product quantities, proportion 6.40/8.00, then 80.0% interpretation. Retain useful established values. The result establishes recovered fraction, not why 20% was unavailable. |
| worked-example-2 | Native OrganisedCalculation board and retained original equation | Separate pure sample, recovered pure/dry CaO and atomic references. Stages: theoretical CaO from carbonate amount and ratio; theoretical mass with species molar mass; compare recovered mass to the unrounded prediction, ending at 87.5%. Put result lineAts after setup; preserve theoretical product in the established trail. Avoid a full problem and constants in one oversized heading. |
| misconception | Existing contrast layout | Replace three marks/traps directions with a diagnostic comparison: same product and units in the yield ratio; named component over total sample for purity. A wet/impure apparent high yield is a measurement/model question, not atom creation. |
| quick-check | Native grouped calculation and prompt-first layout | Keep the 85.0%/20.0 g CaCO3 transfer. Stages after the attempt: reacting component mass 17.0 g; CO2 amount under 1:1 decomposition; theoretical CO2 mass 7.47 g. Keep the question, equation, conditions and references visible. Hide every answer line/trail until the feedback boundary. |
| summary | Existing summary slide | Replace five repeated rules with three relationships plus the explicit concentration handoff. Distinguish provisional curriculum scope from demonstrated task. |

PercentDiagram source inspection reveals useful limits before reuse. Its numbers are computed from props, but percentages use Math.round, so non-integer percentages such as 87.5 cannot be faithfully shown by its percentage chip without an explicit formatting change or a separate exact board label. Integer theoretical values are displayed with zero decimal places even when actual dp is higher; the illustration should not silently become the precision reference for 8.00/6.40. Keeping its simple 85%/80% illustrations while precise worked givens stay on a native board avoids implying unsupported precision.

Despite the component comment about never passing the 100% line, the actual fill endpoint is actual/theoretical and is not capped at one. Its geometry therefore must be checked if a later draft supplies an apparent high-yield case; do not infer that the code currently enforces a physical bound or provides that diagnostic lesson. No shared-code change is proposed through this audit.

Existing source cues are unmeasured beat offsets. PercentDiagram subtracts its default 62-frame delay when no explicit delay is selected; DiagramRenderer forwards diagram.delay if supplied. Entering a panel, filling/separating mass portions, showing a work chip and highlighting a conclusion occur at different beat offsets. Rebind these to selected narration phrases after recording, and inspect the complete moves, not just the final still. Current exact font fit, smooth motion and phone readability are unreviewed.

## Conversational narration and an honest attempt

Replace instruction chains such as step one, step two, do this and do not skip this with a reason for the relationship. Let stable working carry repeated constants and guard digits. Retain essential quantities, named species and final precision in speech, and provide a descriptive transcript for necessary displayed detail. A possible direction, not an approved recording script:

> The balance tells us the whole sample is twenty grams. But only eighty-five percent of that mass is calcium carbonate. The impurities belong to the sample mass; they are not extra carbonate for our equation. That leaves seventeen grams of reacting carbonate. Under our stated decomposition model, the calculator gives a theoretical carbon dioxide mass of seven point four seven grams. We keep the unrounded amount in the calculation. This is what the specified carbonate could produce, not a measurement of how much gas was actually collected.

For the simple-yield feedback, explain that 6.40 g recovered from 8.00 g predicted is 80.0% of the reference amount, while the figures alone cannot distinguish incomplete reaction from collection loss. For carbonate-to-CaO, about a fifth of a mole is enough spoken intermediate detail; the species molar masses and full calculation stay on the stable board. Do not repeat six-decimal number recitals.

Record the practice prompt and feedback separately in a text-only manifest. Assemble a deliberate short silent opportunity with invitation to pause longer, then bind its measured interval and answerVisibleStart to the current audio. Current source contains one continuous prompt-plus-answer voiceover, no measured hold and a static quick-check caption containing 17.0 g and 7.48 g. Remove/rebuild that answer-bearing caption surface rather than treating the current copy as an aligned transcript. Protect answer-bearing diagrams, working trails, audio, SRT/VTT captions and any recall overlays across the whole interval. A typed pause instruction alone is not generated silence.

Current LessonVideo uses toggleable external captions rather than rendering burned-in captions. New accessible captions must follow the exact selected recording, including a blank interval where assembled silence requires it; summary scene.caption text is not a faithful speech transcript. Replace old result mismatches and scope claims in all display/transcript/upload copy together. Final chapter times come from the selected measured timeline, not from catalogue duration estimates.

## Next preparation and source-only outcome

Prepare an isolated corrected source and exact teaching brief after the current review batch. First resolve scope, assumptions, arithmetic, apparent-yield interpretation and the missing forward purity task. Then draft conversational speech and grouped working, select/reuse diagram beats and independently review the exact source. Inspect the silent native layout and the eventual voiced revision in Remotion before a full export. Recording, measured alignment/holds, motion/device/access checks, human listening and release gates remain separate.

This audit found material wording, arithmetic consistency and inference issues, so the old L14 script should not be recorded unchanged. Existing diagram/layout choices are useful reuse candidates. No selected source/audio/media review or public approval is declared. All findings are from source/code inspection and independent arithmetic, not an observed playback or learner outcome.
