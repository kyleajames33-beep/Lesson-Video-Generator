# Course progression and coverage ledger

Priority update, 10 October: finish/post the current chemistry batch, then prioritise **Year 12 Module 5 in both subjects** for the teacher's current term. Use [the Year 12 priority plan](year12-module5-teaching-priority-2026-10-10.md): Chemistry equilibrium and Biology heredity, with separate harder-question companions. Yield/purity and the Year 11 queue are deferred. Preserve the dated ledger as inventory evidence; this update does not mark any source or module reviewed or published. The current calculation feedback requires explicit coefficient fractions on the board and a gentler pace for difficult explanations; revised playback/listening is still pending.

Current continuation: the user requested continued preparation while deferring review. Empirical formulas, mole ratios, mass-to-mass and limiting reactants now form the [voiced review batch](calculation-review-batch-2026-10-09.json). Use the [combined review page](http://127.0.0.1:8778/calculation-batch-review-2026-10-09/). Exact playback and listening remain pending. Yield/purity is the next source-preparation topic. The original dated ledger and states below preserve the handoff inventory; use the newer batch record for subsequent candidates without inferring approval or completed coverage.

Prepared 9 October 2026. The next production lesson is **percentage composition and empirical formulas**, using the [organised silent draft](../../out/prototypes/empirical-formulas-organised-2026-10-09/lesson.json). Follow it with **mole ratios**, **mass-to-mass stoichiometry**, then place the reviewed limiting-reactant explanation after those prerequisites. This is production order and a proposed learner route, not a claim that all prerequisite videos or syllabus points are already public.

The user-facing [full video/syllabus list](video-syllabus-map-2026-10-09.md) and [searchable view](http://127.0.0.1:8778/video-syllabus-map-2026-10-09/) show every registered source. Year 11 Biology production and its course view target **2025 only**, as requested by the user. Legacy Biology Year 11 rows below remain historical comparison evidence, not a second production route. Older Year 12 sources that move into 2025 Year 11 are reuse candidates, not extra completed uploads. Chemistry and Year 12 Biology retain both versions for placement comparison.

The accepted conversational limiting script sets the minimum for new selected videos: explain why, speak in connected language, use a useful topic-specific contrast where appropriate, and make the visuals teach the same reasoning. A voice setting cannot repair a procedural script. Preserve usable layouts and artwork, choose motion by purpose, keep labels readable and stable, and protect a genuine answer-free attempt. The exact voiced revision must be reviewed before a full export. Source/still/UI evidence and actual human listening remain separate. See [production memory](../production-memory.md), [the teaching brief](teaching-visual-brief-template.md) and [preview-first review](preview-first-review.md).

## What the ledger means

The [JSON ledger](course-progression-ledger-2026-10-09.json) records all 308 registered source lessons, their current hashes, local audio-file presence, provisional curriculum target and known production state. The [CSV](course-progression-ledger-2026-10-09.csv) is a filterable inventory. They separate source presence from a selected revision and from publication evidence. The ledger contains 30 major-area rows: eight 2017 modules and seven 2025 focus areas for each subject.

No major area is certified complete. That means its full set of mandatory actions has not been traced to reviewed scenes and practical/data evidence. It does not mean no useful material exists. Candidate counts are discovery counts, not coverage percentages. A title match, outcome ID, cached crosswalk, MP3 path or video file cannot pass that review.

The [mandatory content/action checklist](course-content-checklist-2026-10-09.md) now itemises all 27 cached official Quantitative chemistry points and four enzyme role/model/practical/graph points as 63 distinct required actions. It links each to planned videos, separates explanation, calculation, data, practical planning and actual conduct, and records known gaps. This is provisional action mapping, not approved scene equivalence. Every other area, plus the rest of Cells as the basis of life, still needs its point-level mapping.

Regenerate the local inventory with `node scripts/build-course-ledger.mjs`, then run `node scripts/check-course-ledger.mjs`. Regeneration does not perform a new syllabus or channel review. Update the dated official-source and publication evidence deliberately when those change. Source drift or a changed selected revision requires reconciling its teaching brief and any affected recordings. Keep old uploads and frozen release packages intact.

The current publication state comes from [the saved channel record](../../out/prototypes/continuity-batch-01/youtube/publication-state.json), not a fresh channel check. Part A and molar mass are recorded public. Part B is an existing Studio draft. The revised enzyme video and an earlier limiting revision are unlisted. A previous integrated limiting MP4 remains a historical local review export. The new [clear-working limiting draft](../../out/prototypes/limiting-clear-working-2026-10-09/lesson.json) changes display only and retains its narration audio. Its new brief has source review, while the exact voiced preview remains pending; it has not been fully re-exported or uploaded. Acceptance of the earlier script direction does not silently promote this revision to public or approve every old lesson.

## Syllabus versions and evidence boundary

Live official pages checked on 9 October confirm Chemistry starts the new Year 11 course in Term 1 2028 and Year 12 in Term 4 2028, with the first new HSC in 2029. [NESA Chemistry overview](https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/overview).

Biology starts new Year 11 in Term 1 2027 and Year 12 in Term 4 2027, with the first new HSC in 2028. [NESA Biology overview](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/overview).

The major-area names below were checked against those live overviews and the official [2017 Chemistry course](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017) and [2017 Biology course](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017). Detailed retrieval of the live quantitative content page failed. Individual content IDs, action scope and changed/new work therefore retain the explicit boundary of official pages cached on 8 October, recorded in [the continuity JSON/CSV](curriculum-continuity-2026-10-08.md). They are not newly verified scene-equivalence claims.

Use separate syllabus-version playlists and one reusable core upload where the teaching really overlaps. Add focused changed/new content when necessary. The upload feed is not course order. Keep legacy content available for its cohorts rather than deleting it because the new structure moves or narrows a topic. Avoid hard-coding changing year/module labels into reusable spoken openings.

## Immediate chemistry boundaries

These are topic boundaries, not invented chapter timestamps. Measure chapters from the final selected timeline. The JSON holds detailed exclusions, prerequisites, next handoffs and blockers for each row.

| Position | Video and present state | Starts with | Stops when the learner can | Next handoff |
| --- | --- | --- | --- | --- |
| Before the new full-course mole run | Conservation of mass and systems, scope gap | A reaction and a defined system boundary | Explain atom rearrangement and apparent open-system mass changes | Counting reacting quantities |
| 1 | Mole concept Part A, public record, current scope check pending | Why enormous entity counts need a counting unit | Distinguish N and n and explain N = nNA | Particle/amount calculations |
| 2 | Mole concept Part B, existing draft | Given particle count or amount and a named entity | Convert in both directions and diagnose N/n errors | Amount to mass |
| 3 | Molar mass, accepted export with public record | Equal amounts can have different masses | Find formula molar mass and use m = nM both ways | Elemental mass contributions |
| 4 | Percentage composition and empirical formulas, organised silent draft | Different known substances can share one simplest atom ratio | Calculate a mass percentage, infer an empirical ratio and preserve fractional ratios | Ratios between reacting substances |
| 5 | Mole ratios, correction brief pending | A balanced equation and unchanged entity formulas | Read coefficient ratios and find a wanted amount under stated assumptions | Connect reacting amounts to grams |
| 6 | Mass-to-mass, correction brief pending | Carbon dioxide can outweigh the starting carbon because oxygen contributes | Predict a theoretical reacting/product mass using species molar masses and coefficients | What if both reactant supplies are fixed? |
| 7 | Limiting reagents, new display-only voiced draft pending review | Two finite supplies and the reaction recipe | Compare n/coefficient, derive theoretical product and excess | Actual yield and usable pure mass |
| 8 | Yield/purity, source unreviewed | Predicted versus recovered product and total versus pure sample mass | Calculate and interpret supplied purity/yield data | Solution concentration |
| 9 | Concentration, source unreviewed | A solute amount distributed through a volume | Explain and use c = n/V with consistent units | Standard solutions and dilution |
| 10 | Standard solutions/dilution, source unreviewed | A target concentration and a preparation/dilution task | Explain the conserved solute amount and relevant measurement decisions | Gas amount relationships |
| Remaining quantitative gap | Gas relationships/ideal gas, scope incomplete | Pressure, volume and temperature conditions | A planned set must cover the required relationships, applications and investigations | Continue from the course ledger |

Empirical formulas are a separate application of amount reasoning, not a compulsory prerequisite for every stoichiometry question. Mole ratios can be understood from mole amount and balancing. The linear playlist is a useful teaching route; the prerequisite graph must retain that distinction. Part B is a visible availability gap, so review the existing draft before generating a duplicate. The full 2025 quantitative playlist needs conservation first and the later concentration/gas work as well as this mole run.

For the next empirical video, start after mass/mole conversion and formula reading. Teach mass contribution, a convenient percentage basis, mass-to-mole comparison and a simplest ratio. End the core before equation-based stoichiometry. Keep the molecular-formula inference in its own clearly labelled extension chapter, without implying it is a separately verified requirement of the mapped percentage/empirical point or that a formula identifies a substance.

The organised empirical revision now has explicit entry knowledge, grouped/staged calculations and a closing handoff. It has no selected audio. The earlier silent draft is preserved as a prior revision in the ledger. Its schema v2 [production brief](../../out/prototypes/empirical-formulas-organised-2026-10-09/production-brief.json) records prerequisite knowledge, start, stop and next lesson; those fields plan progression separately from the source review now recorded in the brief. Exact voiced playback remains pending.

Concrete next checks on this selected draft:

1. Keep the glucose/formaldehyde contrast and the corrected values. Retain the forward percentage calculation, fractional-ratio explanation and nitrogen/oxygen transfer check.
2. Review the prepared mass/mole entry knowledge for clarity and prerequisite fit. It is unrecorded draft speech, not a claim that every preceding upload has been approved.
3. Review the prepared closing boundary from ratios within one substance to ratios between substances in balanced equations. Avoid promising an existing next upload is already available.
4. Inspect the empirical blocks as a counting model, the mass illustration as accounting, and the stable working at phone size. Their motion must land on the corresponding explanation. Existing silent timing is estimated, not speech alignment.
5. The exact organised source has passed independent script/science review and its recording-stage brief check. Preserve that selected revision for fresh recording; do not attach the old L3 audio to these revised words. Replace estimated cues with measured alignment, then complete exact voiced-preview and human-listening review before the appropriate export/release stages.

Current selected review page: http://127.0.0.1:8778/calculation-layout-review-2026-10-09/. Both selected examples pass source and sampled native-frame review. Limiting retains the accepted recording; empirical formulas is still silent and ready for fresh recording. Continuous voiced playback, external-caption clearance and actual-device/listening checks remain pending for these revisions.

The L11 brief records the coefficient/entity correction, sufficient-reactant conditions, 0.300/0.600 display consistency and a changed-ratio check. The L12 brief records valid combined mass conversion, correct-species molar masses, oxygen mass contribution, pure-oxide assumptions and the missing raster. The coded pathway is a reuse candidate; its default 3:6 piles must not accidentally imply all reactions double amount. Those records are preparation, not permission to record the old scripts.

## Major new-course areas and open work

The groups below are an organising plan from current cached evidence. They are not a complete required-dotpoint checklist. Every area still needs mandatory action/context to scene mapping, response evidence and practical/data scope review.

| Subject/year | Focus area | Major teaching groups to organise | Coverage/gaps to resolve |
| --- | --- | --- | --- |
| Chemistry 11 | Properties and structure of matter | Atomic/particle models, separation, bonding, shape/polarity and properties | Existing M1 candidates; review radioactivity, VSEPR and emission applications explicitly |
| Chemistry 11 | Quantitative chemistry | Conservation, mole/composition/stoichiometry, concentration, gases | Two recorded public videos do not complete the area; conservation, pending next lessons, concentration/practicals and gas-law gaps remain |
| Chemistry 11 | Chemical reactions | Reaction prediction/reactivity, redox, energy change | Audit the old M3/M4 merger; retain old thermodynamic requirements in legacy placement |
| Chemistry 12 | Equilibrium | Dynamic equilibrium, factors, calculation and solution equilibria | Existing candidates; investigation/data actions and exact acid-base boundary pending |
| Chemistry 12 | Acid-base reactions | Models/strength, measurement, calculations, titration | Existing candidates; new measurement/context scope and moved Year 11 titration need matching |
| Chemistry 12 | Organic chemistry | Hydrocarbons, alcohols, organic acids and esters | Separate shared reactions from legacy extra scope and moved polymer applications |
| Chemistry 12 | Applying chemical ideas | Organic/inorganic analysis and uses | Dedicated MS, IR and proton/carbon NMR interpretation, petroleum/base-metal contexts and moved batteries/polymer scope need coverage |
| Biology 11 | Cells as the basis of life | Cell structure/transport, biochemistry, DNA/replication/division | Enzyme models is an unlisted review, not practical/graph completion; moved molecular/division scope and model limits pending |
| Biology 11 | Cells to systems | Organisation/exchange/transport, systems and homeostasis | Twelve M2 drafts need outcome metadata repair; hormones, nephron secretion and data depth need matching |
| Biology 11 | Evolution and ecosystems | Selection/evidence, adaptations/relationships, ecosystem sampling/populations | Existing new-structured drafts; fieldwork and cultural contexts/protocols need their own evidence |
| Biology 12 | Heredity | Polypeptide synthesis, inheritance, variants/population evidence | Regulatory RNA, epigenetics and protein depth cannot be inferred from incidental mentions; SNP/sequencing drafts already exist |
| Biology 12 | Diseases | Causes/transmission, defence/prevention/management, evidence | Reconcile old infectious/non-infectious scope; required cases and practical/data actions pending |
| Biology 12 | Biodiversity | Ecosystem roles, reproduction/diversity, conservation contexts | Audit keystone/indicator and named contexts; existing Panama disease scenes are candidates, not complete coverage |
| Biology 12 | Biotechnology | Technologies/applications, sequencing/bioinformatics, evaluation | Review actual taught diagnosis/therapy/conservation and data depth; avoid calling existing drafts unbuilt |

Working scientifically and depth-study routes cross all focus areas. Practical and fieldwork requirements cannot be completed by an explanatory upload alone. Required First Nations contexts and cultural protocols need direct respectful sourcing and review. The ledger records these as open course-wide work rather than pretending one extra general video fulfils them.

## Legacy course areas remain visible

The 2017 module route is retained alongside the new focus-area route. These rows have catalogue candidates and **pending complete required-action coverage**, not approved course completion. Chemistry source module grouping is useful discovery. Biology Year 11 sources were authored in the new three-area structure, so their filenames must not be read as validated old four-module placement.

| Subject | Year 11 modules, in course structure | Year 12 modules, in course structure | Main coverage review |
| --- | --- | --- | --- |
| Chemistry | Properties and Structure of Matter; Introduction to Quantitative Chemistry; Reactive Chemistry; Drivers of Reactions | Equilibrium and Acid Reactions; Acid/base Reactions; Organic Chemistry; Applying Chemical Ideas | Keep legacy energy/organic/application scope; check concentration/gases and analytical technique gaps as real requirements |
| Biology | Cells as the Basis of Life; Organisation of Living Things; Biological Diversity; Ecosystem Dynamics | Heredity; Genetic Change; Infectious Disease; Non-infectious Disease and Disorders | Map the new-structured Year 11 sources to old actions; preserve legacy disorder and heredity content while reusing moved core explanations |

The JSON provides a separate row for all 16 legacy modules, their main teaching groups and candidate IDs. No row is labelled missing merely because it lacks an approved upload, and no row is labelled covered merely because it has many sources. Older September reports contain stale Biology absence claims and overly strong reuse language; follow the newer [continuity limits](curriculum-continuity-2026-10-08.md).

## Biology's immediate handoff

Keep enzyme catalysts, enzyme models, activity practical and graph interpretation together in that teaching order. The model video starts from catalysis and specificity, ends at lock-and-key versus induced fit, and hands off to testing enzyme activity. L17 handles practical design/measurements and limitations; L18 handles axes/trends and explanations such as saturation versus denaturation under stated conditions. Their distinct required actions remain open. Do not treat the revised L16 upload as a completed enzyme course.

The next Biology production selection should follow its predecessor/prerequisite audit rather than duplicating moved Year 11/12 molecular or homeostasis videos. Chemistry empirical formulas remains the immediate active lesson. Review one selected corrected script and its useful diagram sequence, then record and preview it to the accepted minimum before proceeding to the next lesson.
