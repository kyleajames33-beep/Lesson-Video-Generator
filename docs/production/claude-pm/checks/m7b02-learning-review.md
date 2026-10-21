# m7b02 learning review: how did experiments establish germ theory?

Reviewer: independent AI reviewer (did not author the design), 22 October 2026.

**Input inspected.**
- `../lessons/bio-m7-b02.md` (Revision 1, 21 Oct), read in full.
- `../../student-learning-review.md` and `AGENTS.md`.
- `../lessons/bio-m7-b01.md` (the stated prerequisite), checked for entry knowledge: pathogen, host, TB as a rod-shaped bacterium, viruses needing living cells.
- The bacterial division wording in `../lessons/bio-m5-b02c.md`.
- The site page `lesson03.sa.html`, searched for the framings and logged errors. Its Assess model does use *Mycobacterium leprae*, as the design says. Its limits card uses syphilis.

**Narration and plates.** Narration was recounted with the build parser rules (lines starting "> ", bold markers removed): per-scene totals sum to 5,915 characters, matching the design. I viewed the reused plates `m7-petri-colonies-v1.png` and `m7-inoculating-loop-v1.png` on a dark contact sheet (scratch file only). The ten new plates do not exist yet.

**Limits of this review.** There were no stills, voiced preview or audio, so motion is not judged at playback speed. This is a beginner-perspective review, not learner evidence. Human listening is pending. I searched the design for U+2014 and found none; none are used here.

Main question traced: *How did Pasteur's flasks and Koch's four steps show that microbes come from other microbes and that a specific microbe causes a specific disease?* Useful outcome: the student can explain why the swan-neck design rules out spontaneous generation (air reaches the broth, particles do not; the same broth grows microbes once particles reach it), name the variables, state that Pasteur did not link a microbe to a disease, give Koch's four steps through the TB case, say what each step adds (association, cause, confirmation), and say which step fails, and why, for a new pathogen.

## Strengths to keep

- **The aligned flask crossfades are the right use of video.** Clear to cloudy, intact to broken, and dust specks settling in the bend and then falling straight in: students see the one difference between conditions change on screen. "Same broth, same air. The only difference ..." then names it.
- **Scene 4 answers the real historical objection** ("boiling or sealing ... destroyed something in the air that life needed"). This is the reason the open neck matters, and most explanations skip it.
- **Scene 6 separates what Pasteur showed from what he did not.** It crosses "Pasteur proved germs cause disease", which is a common exam error.
- **Scene 8 explains why each postulate is needed.** "It might have moved in after the disease began" gives the cause for the association-only point in one plain sentence.
- **Both attempts are genuine transfer.** 11a is hypothetical data with step 4 missing, so the student must apply the steps rather than list them. 11c is a real Australian case where two givens each break a named step.
- **The bank mnemonic is earned on screen first.** The step bays carry "find it, grow it, give it, find it again" from scene 7 onwards.

## Findings

| # | Severity | Scene | Exact quoted text | Problem (likely student question) | Exact replacement (about the same length) |
| --- | --- | --- | --- | --- | --- |
| 1 | should fix | 3 | "But dust and microbes from the air settled in the low bend of the neck, and couldn't travel up to the broth." | **The key cause is missing.** The sentence before it says air flows in and out. A student will ask, "If air gets through, why doesn't the dust come with it?" The answer is that the particles are heavier and fall out of the slow-moving air at the low point. | "But dust and microbes are heavier than air, so they settled in the low bend and couldn't climb up to the broth." (110 characters, against 108.) The `DustPath` cue stays on "settled in the low bend". |
| 2 | should fix | 4 | "Flasks with short, straight necks, open to falling dust, turned cloudy within days." | **The comparison is not shown to be fair.** Scene 6 then lists "the boiling" as a controlled variable, but scene 4 never says the straight-neck broth was boiled. A student will ask, "Maybe those flasks went cloudy because they weren't boiled?" | "Boiled broth in flasks with short, straight necks, open to falling dust, turned cloudy within days." (+16.) Visual: a brief `SteamWisps` flick over the straight-neck flask as it appears. |
| 3 | should fix | 9 | "And for a disease that only infects humans, deliberately infecting a healthy person isn't ethical." | **Absolute, and some students will know it is not true.** Regulated human challenge trials have deliberately infected volunteers: the UK COVID-19 challenge study (approved in 2021), malaria challenge studies, cholera and typhoid. (Science check finding 1.) | "And for a disease that only infects humans, deliberately infecting a healthy person is rarely ethical." (+5.) Tag "ethics: human-only diseases" unchanged. Key note 5: "deliberately infecting healthy people is rarely ethical". |
| 4 | should fix | 7 (visual) | "`m7-petri-colonies-v1.png` appears small with a grey label 'mixed microbes', then a coded arrow leads to `m7-serum-slope-tube-v1.png`" | **Shows a step that did not happen, and adds a distractor.** Koch put material from tuberculous tissue directly onto coagulated serum. *M. tuberculosis* grows far too slowly to be picked from a mixed plate. I inspected the plate: it shows a mould and several coloured colonies. A student may take away that pure culture means "pick one colony from a mixed dish", which is p02's later technique, not Koch's TB method. | On "Second, he grew it on its own", the "find it" tissue field sends a coded arrow, with `m7-inoculating-loop-v1.png` small on it, to `m7-serum-slope-tube-v1.png`. Its colonies are ringed: "pure culture: only one kind of microbe". Drop the petri dish from scene 7. |
| 5 | minor | 9 | "Some bacteria, like the one that causes leprosy, still can't be grown in a lab." | *M. leprae* is grown in laboratories, but only inside mice and armadillos, never in a culture on its own. "In a lab" is misleading for a student who later reads about armadillo research. (Science check finding 2.) | "Some bacteria, like the one that causes leprosy, still can't be grown on their own in a lab." (+11.) This matches scene 7's "grew it on its own". |
| 6 | minor | 11b | Classic mistake: "Saying that finding X in every sick sheep proves it causes the disease is the classic mistake." | Fine in principle, but on this data the likeliest wrong answer is a full "yes, proven" that ignores the missing step 4. The narration has already said step 4 is missing, so the crossed chip repeats scene 8 rather than the error this item invites. | Optional: "Saying the evidence already proves X causes the disease is the classic mistake." Chip: "all steps done, so X is proven". Either is acceptable. |
| 7 | minor | 7 | "which then caused about one in seven deaths in Europe" | Koch's figure was "one seventh of all human beings die of tuberculosis", from European data. A student quoting "in Europe" is fine, but the source is Koch's estimate. (Science check finding 3.) | "which Koch said caused about one in seven of all deaths" (+2). Tag "Koch: about 1 in 7 of all deaths". |
| 8 | minor | 1 | "For centuries, many people thought those microbes simply sprang from the broth itself" | Microbes were first seen in the 1670s, so belief that *microbes* came from broth spans about two centuries at most. Spontaneous generation of larger life (mice, maggots) is ancient. | "For a long time, many people thought those microbes simply sprang from the broth itself" (-1). The main question's "For centuries" can stay, since it covers both old ideas. |
| 9 | minor | 13 (notes) | Note 3: "Koch's postulates (tuberculosis, 1882):" | Implies the postulates were written in 1882. They were first set out as rules by Loeffler in 1884 and by Koch in 1890, from the TB work. Students may meet 1884 in other resources. (Science check finding 5.) | "Koch's postulates (from his 1882 tuberculosis work):" |
| 10 | minor | 8 (visual) | "a small coded arrow loops from a host circle back to the microbe with a question mark" | The referent is unclear: the arrow points from host to microbe, but the idea is "the microbe arrived after the disease". | Show a host circle that becomes sick first (illness mark appears), then a microbe glyph entering it afterwards, with the grey label "came in later?". Then fade. |
| 11 | minor | whole | 5,915 characters, about 568 s | Findings 1, 2, 3, 5 and 7 add about +36 characters (about 3 s), which would take the total to about 571 s, over the 9.5 minute cap. | Take the design's first reserve trim now: scene 7's "Robert Koch was a German doctor." (-33 with its space). The hook already names him, and "Koch, 1882" is on screen. |
| 12 | minor | 8, 10 (visual) | Serum tube thumbnail with an arrow to the guinea pig; guinea pig pair under question 2 | Keep plausible relative scale. A culture tube is about 15 cm and an adult guinea pig about 25 cm long, so the tube thumbnail should not be drawn larger than the animal. Plates are scaled, never stretched. | Scale note for the build: the guinea pig is drawn at least 1.5 times the tube's height when both are in one bay. |

No blocker.

## Plates: are all ten new plates needed?

Yes. Each set is the one condition that changes in a narrated comparison, and the house rule requires aligned plates rather than coded tints for broth changes:

| Plates | What they show |
| --- | --- |
| Swan-neck set of three (intact clear, broken clear, broken cloudy) | The critical step in two separate changes: neck, then broth. |
| Straight-neck pair | The hook's "leave broth out" and the scene 4 comparison. |
| Stained and healthy tissue fields | Postulate 1's "in every case, not in healthy tissue". |
| Serum tube | Pure culture. |
| Guinea pig pair | Postulate 3's visible change. |

No existing plate substitutes: `m6-conical-flask-v1.png` and `c8-round-flask-v1.png` have no swan neck and do not share a bulb, and `m8-lungs-healthy-v1.png` is a human organ. If the brief must shrink, the least costly cut is `m7-swan-neck-flask-broken-clear-v1.png`. A single crossfade from intact clear to broken cloudy, with the coded crack flash, still shows the outcome, but it merges two changes into one, so I do not recommend it. One reuse is added by finding 4: `m7-inoculating-loop-v1.png`.

## Screen load (owner's three bright text items)

Within the limit as written, provided each tag fades when the next cue lands. The densest frames are:

- **Scene 6:** the three flasks, the IV, DV and controlled labels, the banner tick, three tiny tags and the crossed chip. The design keeps only the newest label bright.
- **Scene 8:** four step labels plus the looping arrow (finding 10).
- **Scene 9:** four limits, each with a plate and tag, plus the DNA strip.

The 11a card with its four-row table is dense because it is the task.

## Checks against the review questions

| Question | Result |
| --- | --- |
| Causes explained? | Yes, after findings 1 and 2. Why the broth stays clear (particles settle; after finding 1, because they are heavier), why the open neck defeats the objection, why breaking the neck is decisive, why Pasteur did not prove disease causation, why presence alone is association, why the pure culture shows cause, why recovery confirms, and why each limit breaks a named step. |
| Plain subject-action sentences? | Yes. No mechanism is compressed into nouns. |
| Attention earned? | Yes. Cloudy broth and the old beliefs make a concrete puzzle. The broken neck is a reveal, and scene 8 asks "Why all four?". |
| Visual medium used? | Yes. Painted flasks, tissue fields, culture tube, guinea pigs, sheep and koala. Dust specks, air arrows and step bays are coded abstract parts. No text box sits in a diagram slot. Finding 4 removes a misleading plate step. Playback not judged. |
| Each narrated change on screen? | Yes, with cue words. |
| Attempts: "Pause here to answer.", 10 s countdown, question on screen, givens underlined, no givens card? | Pass for both. 11a: assess, 4 marks, data labelled hypothetical, no step strip on the card. 11c: explain TWO reasons, 4 marks. Both cards stay up during and after the countdown. Givens are underlined in feedback ("20 out of 20", "0 out of 20", "pure culture: yes", "4 developed the disease"; "only inside living host cells", "endangered species"). There is no givens card. |
| Feedback brief, one crossed mistake? | 11b is about 26 s and crosses one mistake (finding 6 is optional). 11d is about 27 s and crosses "Chlamydia is a virus". There is no re-teaching. |
| Re-teaches earlier videos? | No. b01's virus point is one clause. Variables are one sentence with the terms named. Binary fission is not spoken. Semmelweis and Snow are left to b14. |
| Narration length? | 5,915 characters (5,500 to 6,800 band), about 568 s. Finding 11 keeps it under the cap after fixes. |
| No people, hands or faces? | Pass. The "healthy person" is a coded circle, and TB evidence is tissue on a microscope field. The plates are glassware, a burner, a microscope, tissue, a tube, guinea pigs, a sheep, a koala and a mosquito. |
| Australian spelling, no em dashes? | Pass ("sterilising", "colour"). No U+2014. |
| One main question; key notes useful? | Yes. The five notes are separate from new reasoning, with findings 3 and 9 applied. |
| Memory aids after the explanation, limits stated? | Yes. "Find it, grow it, give it, find it again" comes after scenes 7 and 8, with "not in healthy hosts" stated. "Air in, microbes trapped" is the bay label after the set-up. The two-question contrast closes scene 10. |
| Playlist and handoff? | Correct. "How a pathogen gets from one host to the next" matches b03. |

## Learner trace (from stated entry knowledge)

1. **Hook and scene 2.** The student knows pathogens and hosts from b01. Spontaneous generation, miasma and germ theory are each given a meaning. Pass.
2. **Scene 3, set-up.** The student asks why dust does not follow the air. Pass after finding 1.
3. **Scene 4, the objection and the comparison.** Pass after finding 2.
4. **Scene 5, the broken neck.** Pass.
5. **Scene 6, the variables, and what Pasteur did not show.** Pass.
6. **Scenes 7 and 8, Koch's four steps.** Pass after finding 4's visual.
7. **Scene 9, limits.** Pass after findings 3 and 5.
8. **11a to 11d.** Genuine transfer. Pass.

## Verdict

**Ready to voice after fixes** (findings 1 to 4; no blocker), subject to the Claude science check and the Codex error check. Repeat this review on the exact voiced preview before full export, including the total running time against the 9.5 minute cap (finding 11) and the feedback timings.

## Resolution
