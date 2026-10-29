# m8b01 science check: homeostasis and feedback

Independent Codex review, 28 October 2026. Input: `../lessons/bio-m8-b01.md`, Revision 1, read in full. Checked narration, Visual text, invented graph, models, notes, memory aid and metadata. No audio or video was reviewed.

## Dotpoint check

B8-IQ1-01, p56, `docs/production/programme/syllabus/bio-2017-y12.json`:
> construct and interpret negative feedback loops that show homeostasis by using a range of sources, including but not limited to: (ACSBL101, ACSBL110, ACSBL111)

Listed examples: "temperature (ACSBL098)" and "glucose". Both design and metadata match the local official transcription word for word. [Official source](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx). Fresh official DOCX text downloaded for brief 110 was compared with the local JSON and this design. The wording and listed examples match. See assets/brief111-official-syllabus-check.json for file hashes and results. The five-slot model is a reasonable teaching structure, not proof that NESA requires this mnemonic or exact diagram shape.

## Findings

| # | Severity | Exact text | Correction | Source |
| --- | --- | --- | --- | --- |
| 1 | should fix | Scene 4: "thermoreceptors, temperature-sensing nerve endings in your skin and in the hypothalamus" | Skin receptors include sensory endings; central thermosensors are temperature-sensitive neurons. Replace with "thermoreceptors, temperature sensors in your skin and in the hypothalamus". | [Temperature regulation](https://www.ncbi.nlm.nih.gov/books/NBK507838/) |
| 2 | should fix | Written practice 1 model: "breathing rate and depth decrease and the response switches itself off" | Baseline breathing does not switch off after correction. Replace by "breathing rate and depth move back towards resting levels as the extra stimulus falls". Spoken feedback says breathing slows and can remain. | [Homeostatic regulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4669363/), respiratory effectors |

## Facts checked

- Core temperature about 36.5 to 37.5 °C is a defensible simplified normal range. [Temperature regulation](https://www.ncbi.nlm.nih.gov/books/NBK507838/) gives 37 ± 0.5 °C. The 22 °C room and 20 °C thermostat are teaching examples.
- The requested glucose 4.0 to 6.0 mmol/L and pH 7.35 to 7.45 are in the site's range discussion and author findings, not values taught in this video's glucose narration. A glucose range needs fasting/post-meal context. [FDA](https://www.fda.gov/medical-devices/in-vitro-diagnostics/blood-glucose-monitoring-devices) gives fasting below 100 mg/dL and two hours after meals below 140 mg/dL, approximately 5.6 and 7.8 mmol/L. Thus a universal 4 to 6 all-day band is misleading. [Acid-base physiology](https://www.ncbi.nlm.nih.gov/books/NBK507807/) supports arterial blood pH 7.35 to 7.45. Acidaemia names measured low pH; acidosis names a process lowering pH.
- Hypothalamic integration, shivering heat production and cutaneous vasoconstriction are correct. Skin cooling can initiate defence before core falls; the invented core-fall case is valid without implying every real case follows that timing.
- Negative feedback opposes deviations, and extra responses can subside as correction succeeds. Oscillation is not required in every loop; the learning review repairs the causal "so it wobbles" wording.
- [Normal platelet function](https://pmc.ncbi.nlm.nih.gov/articles/PMC5709181/) supports adhesion, chemical signals and positive recruitment of more platelets. Sealing a healthy vessel is an acceptable endpoint for this example; this is not a claim that every positive loop ends safely. Fibrin strengthens the plug and is reasonable in the later plate.
- Pancreatic beta cells detect glucose and release insulin; muscle and liver are valid net glucose-disposal effectors. The liver's storage response differs from insulin-dependent muscle GLUT4 transport, but no GLUT4 mechanism is asserted here. [Endotext transport table](https://www.ncbi.nlm.nih.gov/books/NBK279115/table/pathogenesis-t2diab6.T.classification_of/?report=objectonly) distinguishes them. No extra transport lecture is needed.
- Central respiratory chemoreceptors respond chiefly to CO₂-mediated CSF pH; peripheral receptors include carotid/aortic bodies. Brainstem and major-artery wording is adequate for Year 12. Medullary centres coordinate the diaphragm and intercostal muscles, increasing ventilation and CO₂ removal. The author's paired marks are a local scheme, not a quoted NESA allocation.
- The two-line graph is explicitly teaching data. Air 22 → 5 °C at minute 10; core 37.0 → 36.6 → 36.9, then 36.8 to 37.0 to minute 70, agrees with the model. Clothing, activity and measurement affect a real response. No empirical dataset verifies those exact points; changing 36.6 to 36.7 without a dataset would not make the curve more verified.

The site's glucose-context inconsistency, all-disease overclaim, stimulus definition requiring departure beyond tolerance and pH/denaturation overclaim were all located in the read-only HTML and logged in `../site-corrections-m8.md`. Its action-potential example is scientifically defensible; lack of explanation is not a factual error.

Narration sum 5,571; no U+2014. The mnemonic matches stimulus, receptor, control centre, effector, response. Source review cannot pass human listening, motion at playback speed or owner plate acceptance.

**Count: 0 blockers, 2 should fix, 0 optional.**

## Resolution

Resolved in `../lessons/bio-m8-b01.md` Revision 2 (30 Oct; root resolver, Claude PM). Merged with `m8b01-learning-review.md` where they overlap (the model answers and feedback share edits). Recount by script: 5,510 characters.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (root decision) | Scene 4 now says "thermoreceptors, temperature sensors in your skin and in the hypothalamus". The vocabulary list and the skin callout ("skin temperature sensor") match. |
| 2 | Fixed (root decision, merged with learning 1 and 2) | Written model 1 now reads "breathing rate and depth move back towards resting levels as the extra stimulus falls". The spoken feedback (10b) no longer says breathing "slows again". Model 2 says the extra responses "eased towards what was needed" and core temperature "varied only slightly". Scene 5, key note 3 and the YouTube blurb no longer claim the response "switches itself off". |

Facts checked and left unchanged: the 36.5 to 37.5 °C range, the teaching graph (kept as teaching data), the platelet and glucose wording, the chemoreceptor wording. The glucose and pH ranges the check says are not taught here stay out of the narration.

Counts: 2 fixed, 0 declined.
