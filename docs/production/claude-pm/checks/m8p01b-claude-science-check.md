# m8p01b science check: insulation model practical

Reviewer: independent AI reviewer, 1 November 2026. Did not author the design. Filename retained as brief 127 requests.

Input inspected: all narration, Visual paragraphs, questions and model answers, key notes, numerical notes, safety notes, memory aid and YouTube metadata in `../lessons/bio-m8-p01.md`, Revision 1; B02 and S07; the local syllabus ledger; read-only Biology L02 HTML; and the sources linked below. The review checks a written design, not a built practical or a voiced video. No design or site source was edited.

## Findings

| # | Severity | Exact text and location | Problem | Concrete repair | Source |
| --- | --- | --- | --- | --- | --- |
| 1 | should fix | 9: "Repeat the trial three times" against the table of trials 1, 2 and 3. | After presenting trial 1, repeating it three times produces four trials. The displayed mean uses three trials in total. | "Run three trials in total, starting from forty five each time." Keep the three displayed columns and means. This replaces the first sentence and is shorter. | Direct count of the design's table. |
| 2 | should fix | 12: "so no one slips and the probes stay dry"; screen: "keep the probes and logger dry". | The steel sensing parts must be immersed in water. The dry requirement applies to the electrical parts, not the entire probe. | Narration: "Mop up spills straight away, so no one slips and the connections stay dry." Screen: "mop up at once; keep electrical connections and the logger dry". Show the probe tip remaining in the water and the connector outside it. The narration is shorter. | [Vernier probe manual](https://www.vernier.com/manuals/tmp-bta/), manufacturer care instructions distinguish immersible steel from the handle/electronics. |
| 3 | should fix | A2 model answer and 13d table: "start timing both when they read the same temperature, for example 45.0 °C". Author answer also accepts "no repeats". | The wrapped water starts at 40 degrees and will not reach 45 by cooling in the room. The revised procedure needs fresh equally warm water, not a later common timing point in the existing run. Also, the question does not say there were no repeats; lack of a stated repeat cannot establish that flaw. | Table/model answer: "prepare fresh equal volumes of water at the same starting temperature, then begin both trials". Spoken "Start both at the same temperature" already works and needs no change. Remove "no repeats" from the accepted answers, or explicitly state a single trial in the card if the author wants that alternative. No extra speech is needed. | The given temperatures and the cooling law, [OpenStax](https://openstax.org/books/calculus-volume-2/pages/2-8-exponential-growth-and-decay). |

Three should-fix findings; no blocker; no optional finding. Learning finding 3 separately corrects the universal "any model experiment" wording; that repair is scientifically necessary too, but is counted there once.

## Starting temperature and school guidance

The 45-degree start and teacher preparation limit of 50 degrees are not rejected by an identified public Australian school-science temperature limit. This is not approval of an individual school's practical risk assessment.

[NSW Department of Education, Science safety and compliance](https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance), updated 22 July 2026 and checked 1 November, requires investigation-specific risk assessment and points to CSIS 1.7. The detailed chemical-safety link redirects to staff authentication; its exact hot-liquid instructions could not be read. A public numerical limit for preparing this practical was not found there.

[Building Commission NSW advisory note 3/2026](https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/plumbers-and-drainers/standards-and-notes/temperature-requirements-for-heated-water-installations), issued July and updated 29 September 2026, sets 45 degrees for personal-hygiene sanitary outlets used by schoolchildren and 50 degrees in other cases. These are plumbing delivery limits. They do not establish a science-practical preparation limit. Do not cite them as authorisation for the teacher's 50-degree choice.

The [Australian Science Teachers Association facilities guidance](https://assist.asta.edu.au/sites/assist.asta.edu.au/files/Guidelines%20for%20Science%20facilities.pdf), section on hot water, likewise distinguishes handwashing from equipment-cleaning sinks and refers to state requirements. It does not prescribe 40 degrees for this experiment. The design's teacher preparation, stationary flasks, glass check, breakage reporting and immediate spill control are appropriate controls in principle. Keep the actual school procedure and probe manufacturer's instructions as the operational requirements.

The [Australian Government YourHome burn table](https://www.yourhome.gov.au/energy/hot-water-service) supports the author-note adult major-burn estimates at 49, 54 and 60 degrees (about five minutes, thirty seconds and less than five seconds). These are approximate exposure-dependent examples, not safe-contact times. [SA Government hot-water safety](https://www.sa.gov.au/topics/energy-and-environment/safe-energy-use/hot-water-safety) explicitly notes faster severe scalding in children at 60 degrees. These figures are author notes, not extra learner narration. No need to add them to the video.

### 40-degree fallback, if the school requires it

No source found mandates this fallback, but the recalculated trial-1 values are ready if the author chooses it. Use room 21 degrees and the same k values in `T = 21 + 19 exp(-kt)`:

| Time (min) | Bare (degrees C) | Wrapped (degrees C) |
| --- | --- | --- |
| 0 | 40.0 | 40.0 |
| 4 | 37.5 | 38.9 |
| 8 | 35.4 | 37.9 |
| 12 | 33.5 | 36.9 |
| 16 | 31.9 | 35.9 |
| 20 | 30.4 | 35.1 |

Drops from rounded readings: 9.6 and 4.9 degrees. Average rates: 0.48 and 0.245 degrees per minute (about 0.5 and 0.2 to one decimal, or use 0.48 and 0.25 to two decimals). Ratio about 1.96. New illustrative repeat drops can be bare 9.6, 9.2, 9.7 (mean 9.5, spread 0.5) and wrapped 4.9, 5.2, 4.6 (mean 4.9, spread 0.6), gap 4.6. These repeat values are newly constructed fallback data, not measured results or the exact rescaling of all original repeats. Changing the start requires updating all relevant displays, rate speech, mean speech, comparisons, safety wording and the length count together. Do not change only the first temperature.

## Numbers independently checked

| Item | Recalculation | Result |
| --- | --- | --- |
| Bare curve, k = 0.035 per minute | `21 + 24 exp(-0.035t)`, t = 0, 4, 8, 12, 16, 20 | 45.0, 41.9, 39.1, 36.8, 34.7, 32.9 to 0.1 degrees. Match. |
| Wrapped curve, k = 0.015 per minute | `21 + 24 exp(-0.015t)` | 45.0, 43.6, 42.3, 41.0, 39.9, 38.8. Match. |
| Drops/rates | 45.0 - 32.9 = 12.1; 45.0 - 38.8 = 6.2; divide each by 20 | 0.605 and 0.310 degrees per minute, correctly about 0.6 and 0.3. |
| Repeat means | 36.0/3; 18.6/3 | 12.0 and 6.2 degrees. |
| Spreads/gap | 12.2 - 11.7; 6.5 - 5.9; 12.0 - 6.2 | 0.5, 0.6 and 5.8 degrees. "About half a degree" and "nearly six" are acceptable approximations. |
| Ratios | 12.1/6.2; 6.2/12.0 | 1.952 and 0.517. "About twice" and "roughly halved" agree. |
| Prediction | 60 - 21; 45 - 21 | 39 and 24 degrees. |
| Attempt 1 | 9.0/10; 3.0/10 | 0.90 and 0.30 degrees per minute. Ratio 3. |
| Similar shapes | 400/50 = 8; cube root = 2; area factor 4 | SA:V halves. Total area increases, matching the crossed mistake's correction. |

All exponential values and rounded interval drops in the author notes match. The curves decrease and flatten; equality of two rounded wrapped steps does not contradict a smooth flattening curve. With equal water mass and the same material, temperature drops support the relative heat-loss comparison. The wool and flask also store energy; the data are correctly labelled illustrative and do not claim an exact measured thermal conductance.

The mechanism and method are supported by [Vernier's Insulation Study](https://www.vernier.com/files/training/nsta-2017/environmental_science_with_vernier.pdf), a first-party school investigation using warm water, a probe and cooling rates, and [OpenStax's cooling law](https://openstax.org/books/calculus-volume-2/pages/2-8-exponential-growth-and-decay). No published dataset for this exact 150 mL flask, lid, wool thickness and room was found. The claimed orders of magnitude are plausible constructed examples, not independently validated experimental predictions. Keep "example data" on the graph/table; do not present the chosen k values as universal apparatus constants.

## Mechanisms, model and risk table

Still air reduces heat transfer through the covering. Equal water amounts, starts, lids, flask dimensions and surroundings allow an insulation comparison. The card lids reduce and equalise evaporative loss; they do not eliminate it. A larger temperature difference increases the rate of cooling under the stated model, and the curve approaches room temperature.

The flask produces no metabolic heat and has no receptor, control centre or effector. The comparison therefore tests passive heat loss, not an animal's homeostatic response. Raising or flattening hair changes trapped air, and wetting changes a coat's insulation. The model limitation and memory line are sound. The [Stanford bird thermoregulation account](https://web.stanford.edu/group/stanfordbirds/text/essays/Temperature_Regulation.html) explains adjustable feather insulation; [University of California Berkeley's thermoregulation lab](https://mcb.berkeley.edu/courses/bio1a/lab/downloads/Bio1AL_Diveristy_Birds.pdf) links insulation to trapped air and metabolic heat. No need for more caveats in learner copy.

The small-beaker explanation uses relative heat loss per amount of water, not the false claim of less total surface on a larger similar object. "Same shape" is a reasonable idealised condition for a conceptual SA:V item; the artwork should also show comparable fill proportions. Exact cooling rates also depend on glass and evaporation, so the threefold observed rate ratio is not claimed to follow mathematically from a twofold SA:V ratio.

S07's validity/reliability/accuracy definitions are applied consistently. Repeats cannot correct the same misplaced probe in every trial. In a cooling flask the glass wall is a poor place to measure bulk water temperature, so the central-tip demonstration supports that error mechanism. Avoid treating display resolution of 0.1 degrees as proof of accuracy; the design currently does not do so.

Glass, scald and spill harms are real and the table links each to controls. Keep damaged glass out of use and have school staff manage breakages. ASTA's [laboratory glass disposal guidance](https://asta.edu.au/wp-content/uploads/2025/03/AIS-Lab-glass-and-porcelain-disposal-2.pdf) supports separate glass disposal under local school procedures. The teacher-only heating device, dry electrical connections, low-voltage logger, no mercury and no forced thermometer-through-bung are suitable author notes; no extra learner paragraph is required.

## Syllabus, questions and metadata

The B8-IQ1-02 stem and first example in Decisions and the description match `docs/production/programme/syllabus/bio-2017-y12.json` word for word, including both ACSBL codes. Checked against [official Biology 2017 syllabus page 56](https://educationstandards.nsw.edu.au/wps/wcm/connect/657d2611-c201-49ce-a18e-ef0f786a5de0/biology-stage-6-syllabus-2017.pdf?MOD=AJPERES). P01 claims the structural-insulation investigation example, not every mechanism in that dotpoint. The description's course year and Module 8 title are correct.

Originality screen: searched all seven local official-paper text captures `assets/brief117-exams/biology-2019.json` through `biology-2025.json` for insulation, flask, cooling, surface area to volume, beaker, heat loss and thermoregulation, then read the hits. The 2022 flask context is Pasteur's broth investigation; the 2024 cooling hits concern stomata. No near-match to either attempt was found. Diagram-only or copyright-withheld content cannot be excluded by text search. This is a documented screen, not proof of universal originality.

The narration totals 5,831 characters by independent parser count. Title: 95 characters. Design U+2014 count: zero. Absolute-word search found only scoped uses: "can't" concerns the passive flask, the graph key or repeats correcting the same error; "only" concerns the conclusion and selected variable. The overbroad "any model experiment" line is learning finding 3. No other absolute science error found in the narration.

## Site findings

Both requested findings were verified in the read-only `C:/Users/kygs/hscscience/subjects/biology/year12/module8/lesson02.sa.html` and added to `../site-corrections-m8.md` under brief 127. The insulation statement is a real overclaim: the same page already describes piloerection. The absent practical is a coverage note, not a false quotation or a claim that the syllabus mandates this exact flask activity. No site HTML was changed.

## Verdict

Resolve science findings 1 to 3 and the learning findings before recording. The numbers, model limitation and syllabus wording pass this written check. The exact school's safety procedure, actual visuals, voiced preview and human listening remain to be checked.

## Resolution

## Resolution (root, 1 November 2026)

| Finding | Action | Where |
|---|---|---|
| 1 | Fixed: "Run three trials in total" | scene 9 |
| 2 | Fixed: "connections stay dry"; screen "keep electrical connections and the logger dry" | scene 12 |
| 3 | Fixed: A2 fix now "prepare fresh equal volumes of water at the same starting temperature, then begin both trials"; "no repeats" removed from the accepted answers | A2 model, Practice questions |
