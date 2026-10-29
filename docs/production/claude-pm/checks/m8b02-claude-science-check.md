# m8b02 science check: temperature regulation

Independent Codex review, 28 October 2026. Input: `../lessons/bio-m8-b02.md`, Revision 1, read in full, including narration, Visual text, questions, models, notes, author checks and metadata. No audio or video reviewed. Repairs below are shorter, visual-only, or include an explicit cut because the design estimates 563 s against 570 s.

## Dotpoint check

B8-IQ1-02, p56, `docs/production/programme/syllabus/bio-2017-y12.json`:
> investigate the various mechanisms used by organisms to maintain their internal environment within tolerance limits, including:

The two examples match word for word:
> trends and patterns in behavioural, structural and physiological adaptations in endotherms that assist in maintaining homeostasis (ACSBL099, ACSBL114)

> internal coordination systems that allow homeostasis to be maintained, including hormones and neural pathways (ACSBL112, ACSBL113, ACSBL114)

Plant water balance is correctly left to b05. [Official source](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx). Fresh official DOCX text downloaded for brief 110 was compared with the local JSON and this design. The wording and listed examples match. See assets/brief111-official-syllabus-check.json for file hashes and results.

## Findings

| # | Severity | Exact text and location | Error and repair | Source |
| --- | --- | --- | --- | --- |
| 1 | should fix | Scene 1 screen: "Cairns 42.6 °C, 27 Nov 2018" | Cairns Airport reached 42.6 °C on 26 November; 27 November was 42.1 °C. Change the chip to "Cairns Airport 42.6 °C, 26 Nov 2018". No speech change. | [BoM Statement 67](https://www.bom.gov.au/climate/current/statements/scs67.pdf), pp6,22,24 |
| 2 | blocker | Scene 10: "Once the air was hotter than their skin ... That left evaporation as the only way out"; final key note | Air temperature determines convection, not radiation to surrounding surfaces or conduction to contact surfaces. Replace the two sentences by "Hotter air added heat instead of carrying it away. With little cooling from their surroundings, the bats relied heavily on evaporation, which uses water." Shorter. Label inward arrows "convection"; replace unsourced "skin about 37 °C" with "air hotter than skin". Key note: "Hot air can add heat. Evaporation becomes crucial when dry heat loss is limited; it needs water." Same as learning finding 1. | [Heat-exchange review](https://pmc.ncbi.nlm.nih.gov/articles/PMC7662600/); [Briscoe et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC4090547/) gives the cool-surface counterexample. |
| 3 | blocker | Attempt 12c: trunk "several degrees cooler than the air"; answer 12d: "The trunk is cooler than the koala's body" | The second comparison does not follow from the first. Replace the stem clause in speech and card by "which is cooler than their body surface". Shorter. Remove the model's extra inference that lower branches necessarily have cooler air. Same as learning finding 2. | [Briscoe et al. 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4090547/): conduction depends on skin/trunk temperatures, and occupied locations did not show a significant vertical air-temperature trend. |
| 4 | should fix | Scene 2: "So their core temperature stays steady even when the air swings" | Endothermy identifies the main heat source, not a guarantee of temperature constancy. Replace by "They use that heat and control heat loss to keep core temperature fairly steady." Notes: "can regulate core temperature using metabolic heat". Cut "Let's follow the hot side." if needed. Same as learning finding 4. | Endotherm heat balance and scene 10's capacity limit |
| 5 | should fix | Scene 3: "receptors in the skin detect the heat outside" | Skin thermoreceptors detect local skin temperature, not air temperature directly. Replace by "skin receptors detect changes in skin temperature". If this grows the scene, cut "That's the neural pathway", keeping that label on screen. | [Temperature regulation](https://www.ncbi.nlm.nih.gov/books/NBK507838/) |

## Event and mechanism checks

**2018 flying foxes.** Approximately 23,000 spectacled flying fox deaths over two days is supported by the [Australian Government State of the Environment 2021](https://soe.dcceew.gov.au/biodiversity/pressures/climate-change). [Welbergen and colleagues' university account](https://www.westernsydney.edu.au/news-centre/stories/2020/opinion-our-laws-failed-these-endangered-flying-foxes-at-every-turn-on-saturday-cairns-council-will-put-another-nail-in-the-coffin) corroborates 23,000 and about a third of the then Australian population. Keep "roughly": this was an estimate, not an exact census. The 2008 Welbergen paper concerns an earlier heat event and must not be cited as the 2018 census. No public raw colony-count table for 2018 was located. Panting, saliva spreading and wing fanning are documented cooling behaviours.

**Vessels and evaporation.** Relaxation widens arterioles; contraction narrows them. Vessels do not move towards the skin. Increased blood flow transfers heat from core to skin and can increase heat loss when gradients permit it. Sweating cools by evaporation, and humidity can reduce its vapour-pressure gradient. About 2.4 kJ/g is appropriate for evaporation near skin temperature, not the value at water's boiling point. [Thermoregulation review](https://pmc.ncbi.nlm.nih.gov/articles/PMC7662600/).

**Cold and hormones.** Shivering is skeletal-muscle heat production. Non-shivering thermogenesis includes sympathetic brown-fat activation, with thyroid hormones supporting thermogenic metabolism. The design already says "in many mammals", "long cold spell" and "over days to weeks". It therefore does not place thyroxine in the short-term response. Retain those conditions. [TRH/thyroid review](https://pubmed.ncbi.nlm.nih.gov/30574457/) and [Endotext](https://www.ncbi.nlm.nih.gov/books/NBK285560/) support thyroid involvement and variable adult-human responses. Neural fast/targeted against hormonal slower/longer-lasting is fair for the particular pathways shown, not every hormone. The quick adrenaline tag is appropriate. Piloerection has little insulating value in humans; the screen note correctly says so.

**Kangaroo.** [Dawson, Robertshaw and Taylor 1974](https://pubmed.ncbi.nlm.nih.gov/4854555/) confirms sweating during exercise, distinct from resting heat exposure. The [UNSW research report](https://www.unsw.edu.au/content/dam/pdfs/science/bees/research-reports/2022-02-fowlers-gap/2022-02-FG-Research-Series-No7.pdf) describes the treadmill experiment and resting panting/saliva spreading. [Needham, Dawson and Hales 1974](https://pubmed.ncbi.nlm.nih.gov/4153851/) studied forelimb blood flow and saliva; the [Australian Government mammal physiology chapter](https://www.dcceew.gov.au/sites/default/files/env/pages/a117ced5-9a94-4586-afdb-1f333618e1e3/files/17-ind.pdf) describes the superficial forelimb venous network. Together they support behaviour → evaporation → cooled superficial blood. Shade use is standard natural history; the narration should not be taken as a universal midday schedule.

**Trends and questions.** Warm-climate extremities and cold-climate compact insulated bodies are tendencies, correctly signalled by "often" and "tend to". Countercurrent artery/vein exchange in penguin legs and dolphin appendages returns heat towards the core. The planned diagram gives opposite blood flow and artery-to-vein heat transfer.

Cyclist data are invented but plausible: core 37.0 → 37.8 °C during the first 15 min, then stable to 40 min, air 30 °C. Stability requires ongoing heat loss to balance heat production. The learning review supplies this missing spoken reason through a shorter replacement. Humidity reduces evaporation under otherwise comparable conditions.

[Briscoe et al. 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4090547/) supports koala conduction into cooler trunks and water savings. Panting is physiological and reflective fur structural for this question. The author names Degabriele and Dawson 1979 for fur reflectance, but its full text was not accessed here; no precise reflectance percentage is approved. The simple claim that the coat reflects part of incident sunlight is physically reasonable, not a quantitative efficiency claim.

There is no basis to assert the individual mechanism of every 2018 death or a measured flying-fox skin temperature of 37 °C. The source narrates limits generally. All relevant confirmed site errors are logged in `../site-corrections-m8.md`, with the unsupported Penrith death count explicitly unresolved.

Narration sum 5,871; no U+2014. Human listening, exact timing, continuous motion and owner art acceptance remain pending.

**Count: 2 blockers, 3 should fix, 0 optional.**

## Resolution

Resolved in `../lessons/bio-m8-b02.md` Revision 2 (30 Oct; root resolver, Claude PM). Overlapping fixes with `m8b02-learning-review.md` were merged into one edit each. Recount by script: 5,763 characters, speech about 433 s, total about 555 s (cap 570 s).

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed | Hook chip now "Cairns Airport 42.6 °C, 26 Nov 2018". Speech ("Cairns reached over forty-two degrees") unchanged and true. Numbers to verify updated. |
| 2 | Fixed (merged with learning 1) | Scene 10 sentences replaced as proposed ("the flying foxes" for "the bats"); arrows labelled "convection"; the unsourced skin temperature removed ("air hotter than skin"); key note 5 as proposed. The site's "only route" wording is no longer reproduced and is flagged for `../site-corrections-m8.md` (root-pending, Codex to log). |
| 3 | Fixed (merged with learning 2) | Stem in speech and card: "which is cooler than their body surface". The model answer no longer infers cooler air at lower branches; mark 2 is now "increases heat loss without evaporation, so body temperature falls without using water". |
| 4 | Fixed (merged with learning 4) | Scene 2 replaced as proposed; "Let's follow the hot side." cut; key note 1 as proposed. |
| 5 | Fixed | Scene 3: "skin receptors detect changes in skin temperature"; callout "skin thermoreceptors: detect skin temperature". "That's the neural pathway." is kept, not cut, because the spoken term sets up scene 6's "That's the hormonal pathway" contrast; the 4 extra characters are covered by the shorter repairs elsewhere (net −108). |

Event, mechanism, hormone, kangaroo and trend checks needed no change; the existing hedges ("roughly", "in many mammals", "often", "tend to") are kept.
