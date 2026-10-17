# Biology G03 learning review: genetic risk, population patterns and individual limits

Scope: independent AI source review of `../lessons/bio-m5-g03.md` (Revision 1, 18 Oct). Read as a student starting Year 12 who has watched B4, B7, B9, B11 and B13, with Year 10 probability and square roots. References: `docs/production/student-learning-review.md`, `AGENTS.md`, `../site-extracts/bio-m5-l19.md`, `../site-corrections.md` (B2, B7), `docs/production/module5-memory-aids-2026-10-11.md` entries named in the design, `programme/syllabus/bio-2017-y12.json` (B5-IQ5-03, -05). Not learner evidence. No stills, preview or audio inspected. Motion not judged; human listening pending. U+2014 searched in the design: none.

File name note: the design's Build ids section names `checks/g03-bio-learning-review.md`; this file follows the reviewer brief's name `bg03-learning-review.md`, matching the suggested lesson key. Root to align the LESSONS entry path.

Main question traced: *If a big study shows that carriers of a variant are at high risk, what can that predict for a group, and what can't it tell one person?* The useful outcome: the student can turn a cohort figure into a group statement, explain why it does not decide one person's outcome, estimate carriers from incidence when Hardy-Weinberg conditions hold, and word a claim to match the evidence.

**Summary.** No blocker. The 100-dot array that loses its identities ("which dots are which") is the right picture for the main idea, and the "working copy" explanation gives a real cause for "risk, not destiny" rather than a slogan. The Hardy-Weinberg beat is a legitimate positive half of the inquiry question and is laid out stage by stage per the calculation rule. Both attempts are unseen, carry every given on the card, and have brief feedback. Five should-fix items: the hook's "had developed" wording; a missing cause for "squared" in scene 5; a circular example in scene 6; an impossible drift simulation setting; and the on-screen BRCA share band.

## Material findings

| # | Severity | Scene and exact text | Likely student question or problem | Replacement text (similar length) | What the repair enables |
| --- | --- | --- | --- | --- | --- |
| 1 | should fix | Scene 1: "Among the BRCA1 carriers, about 72 in every 100 had developed breast cancer by age 80." | "Did they follow 10,000 women until they were 80?" No: the figure is an estimate built from women of many ages followed for some years. "Had developed" presents an estimate as a count, the very overclaim the lesson teaches against. | "Among the BRCA1 carriers, about 72 in every 100 were estimated to get breast cancer by age 80." Matching change in scene 2: "About 72 would develop breast cancer by 80, and about 28 wouldn't." Key notes item 1: "are estimated to develop". | The student meets the figure as a risk estimate from the start. |
| 2 | should fix | Scene 5: "Affected babies carry two copies of the allele, so the allele's frequency, squared, is one in 2,500." | "Why squared?" The link (the baby needs the allele from both parents, so the chance is q times q) is skipped. The later "two ways" step has its cause; this step needs one too. | "An affected baby needs the allele from both parents, so the allele's frequency times itself is one in 2,500." Stage (1) gloss on screen: "from mother AND from father: q x q". | The student can rebuild q squared from inheritance, not memorise it. |
| 3 | should fix | Scene 6: "For example, if far more babies are affected than predicted, relatives may often be having children together, so mating isn't random." | "Predicted from what?" Scene 5 calculated q *from* the affected babies, so affected babies cannot then differ from that prediction. A student who notices this loses the logic of "deviation shows a force". | "For example, if DNA tests give the allele's frequency, and more babies are affected than it predicts, relatives may be having children together." Visual: the "predicted affected" bar is labelled "from DNA tests: q x q". | The deviation test has an independent measure, so the student sees how a gap is detected. |
| 4 | should fix | Scene 6 visual: `DriftTraces` for "a population of 20" starting at 0.02 | A population of 20 has 40 allele copies, so 0.02 is less than one copy: impossible, and every trace would sit at zero or jump. The "either way" message would not show. | Start both populations at 0.2 (tag "illustrative starting frequency"), or keep 0.02 for N = 10,000 and start N = 20 at 0.1 with its own tag. | The traces show chance moving the frequency up and down, as narrated. |
| 5 | should fix | Scene 4 visual: "value from the source in Numbers, written as a band, for example 'about 5 in 100'" | Population-based studies put BRCA1 plus BRCA2 at about 2 in 100 breast cancers (science check finding 3). Students copy numbers from screens. | Band: "about 2 in 100"; grey source tag "population studies". Fill about 2 dots amber. | The picture matches the evidence and makes the point more strongly. |
| 6 | minor | Scene 3 overall | Students from B9 will ask "is BRCA1 dominant or recessive?": the risk is passed on like a dominant trait (scene 7, one in two), but cancer needs both copies lost in a cell. | Grey tag on the chromosome pair: "inherited like a dominant trait; in a cell, both copies must fail". | Reconciles B9's categories with the working-copy cause. |
| 7 | minor | Scene 3: "the environment, like hormones and age" | Age is not environment. | "other genes and other factors, like hormones and age." | Accurate categories. |
| 8 | minor | Scene 4: "So a negative result for BRCA isn't a guarantee either." | "Result" of what? A test has not been introduced. | "So testing negative for a BRCA variant isn't a guarantee either." | Clear referent. |
| 9 | minor | Feedback 10b: "A better claim: this person has a higher than average risk." | "Average" includes carriers; the study compares carriers with non-carriers. | "A better claim: this person has a higher risk than a non-carrier." Screen line (b) to match. | The rewrite matches the study's comparison exactly. |
| 10 | minor | Scene 5 heading and naming | "This is the Hardy-Weinberg principle" names a method, but its idea is not stated. | Screen gloss under the name: "allele frequencies predict genotype frequencies, if nothing disturbs them". | The name carries a meaning for scene 6's conditions. |

## Learner trace

1. **Hook.** Consortium badges feed one bar; 72 of 100 dots fill; two "?" dots. The question "does carrying it mean she will get it?" is answerable by the end. Pass with finding 1.
2. **Scene 2.** The 100-dot proportion, a second group at 71 ("close to the same"), then every dot greys and one is ringed. This is the best beat in the video: the student sees that the proportion is stable while identities are unknown. "Risk pattern" named after the picture. Pass.
3. **Scene 3.** DNA repair, a faulty and a working copy, one cell in a row of 20 loses its working copy by chance. A genuine cause. Pass with findings 6 and 7.
4. **Scene 4.** Both overclaims crossed; the "women with breast cancer" array shows carriers are a small share. Pass with findings 5 and 8.
5. **Scene 5.** Task, givens, one stage at a time, retained column, then the PopBar. Layout meets the calculation rule. About 52 s and Extension-level, but each stage has its own cue and the stage column stays readable; keep it (doubt a). Needs finding 2. The "health services use" claim is fine at this level.
6. **Scene 6.** Conditions checklist, deviation logic, consanguinity, drift. Dense (593 characters, four ideas), but each idea has one visual. Needs findings 3 and 4.
7. **Scene 7.** One in two for children and siblings, with the cause (a parent almost certainly carries it); the Iceland sentence follows as a consequence. Keep in narration (doubt c): it is one sentence, concrete, and shows why "genetic data are never only about one person" matters. Pass.
8. **Scene 8.** Strong and weak wording, then one rewrite. Pass.
9. **Scene 9.** Three lines, each after its explanation; "rare disease, common carriers" is a true causal anchor under the stated conditions. Pass.
10. **Attempt 1 (10a).** Stimulus, report chip and two demands on the card; nothing answer-bearing; 10 s countdown after "Pause here to answer."; card stays. Feedback 10b about 26 s: answer, reason, one crossed mistake ("twice the risk = 50%") with a short numerical reason. Pass with finding 9.
11. **Attempt 2 (10c).** Givens and both demands on the card; no equation lines shown. Ten seconds is short for a square root, but "Pause here to answer." invites pausing, per the house rule. Feedback 10d about 26 s with short working and one crossed mistake. Pass.
12. **Scene 11 and notes.** Group-pattern chips, the one-person limit, a one-line Module 5 chain, Module 6 handoff. Notes: five items, quiet hold. Pass.

## Checks against the review questions

| Question | Result |
| --- | --- |
| One main learner question? | Yes. Hardy-Weinberg is the "what population data predict well" half of the same contrast; the transition line "Population predictions can be very accurate, though" makes the link. |
| Causes before names? | Yes, except "squared" (finding 2). |
| Each narrated change shown on screen? | Yes in the plan; one gloss added for finding 2. Not judged at playback. |
| Visual medium used? | Yes: dots losing identity, a cell losing its working copy, the stage column building, drift traces wandering. |
| Reading load? | Manageable; scene 5 builds one stage per cue. Scene 6 is dense but each idea has one visual. |
| Attempts: unseen, data visible through the 10 s countdown after "Pause here to answer."? | Yes, both. |
| Feedback brief (answer, reason, one crossed mistake, 15 to 30 s)? | Yes: about 26 s each. |
| No re-teaching of B9 to B13? | Yes: B9 one in two, B11 counting alleles, B13 "big data sharpen the trend" are single recall clauses with grey tags. |
| Sensitivity and scope? | No screening, surgery or treatment advice; no "you"; no names. Correct for the route. |
| People drawn? | No (dots, pedigree symbols, cells). |
| Em dashes? | None in the design or this file. |

## Designer's doubts (decisions)

- (a) Scene 5 length: keep the narrated stages with finding 2; do not shorten to a bare result, because the "two ways" and "both parents" causes are the learning.
- (b) Cohort numbers and countries: see the science check (findings 1 and 2).
- (c) Iceland sentence: keep in narration, with the science check's wording.
- (d) Companion overlap with B13: only the recall clause repeats. Agreed.

**Verdict: ready to voice after fixes** (findings 1 to 5; minors at the author's discretion), subject to the science check fixes and the exact voiced preview review.

## Resolution (18 Oct, Claude)

Every blocker and should-fix finding above was applied in Revision 2 of `lessons/bio-m5-g03.md` (see its "Revision 2 changes" line), with the replacement wording proposed here or an equivalent of the same length. Minor findings were applied where they helped; any not applied are recorded in the design. Exact voiced preview, voiced learning review and human listening are still pending.
