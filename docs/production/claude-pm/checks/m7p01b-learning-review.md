# m7p01b learning review: model an epidemic in class (Biology P7-01)

Reviewer: independent AI reviewer (did not author the design), 27 October 2026.
Input inspected: `../lessons/bio-m7-p01.md` (Revision 1, 27 Oct) read in full; `../../student-learning-review.md`; `AGENTS.md`; `checks/m7b13-learning-review.md` for format; `../lessons/skills-s07.md` (validity, reliability and accuracy definitions, scene 2 and key notes 1 and 3) and the aim and variables scene of `../lessons/bio-m7-p02.md` (the sister practical format); for double-teaching, the narration and scope of `../lessons/bio-m7-b03.md` (modes, fomites), `bio-m7-b10.md` (contact tracing, incubation period), `bio-m7-b11.md` to `b14.md` (no overlap found). Narration recounted by script with the build parser rules (lines starting "> ", bold markers removed): 17 lines, **5,781 characters**, matching the design. Every proposed replacement below was applied to the narration by script and the total recounted. I searched the design for U+2014 and found none; none are used here. No plates were viewed (the cup, well plate and UV plates do not exist yet), and there are no stills, voiced preview or audio, so motion is not judged at playback speed. Dataset and attempt logic were re-traced by hand. This is a beginner-perspective review, not learner evidence. Human listening is pending.

Main question traced: *Eight cups, one secret starter, three rounds of mixing, and every cup turns pink. Who started it? How do you design a safe classroom model of an epidemic that can trace the source, and what can it really tell you?* Useful outcome: the student can plan the simulation (marker, method, controls, records, repeats, risk), trace a source from saved samples and contacts, plot and explain an epidemic curve, and judge what the model can and cannot show.

## Scope and focus

One practical, one dataset, one puzzle. The handoffs are clear: Camp Wollemi and outbreak tables go to g01; contact tracing as a control goes to b10; the modes and fomites are recalled from b03 in one clause each. Double-teaching check: no re-teaching found. Note for root (outside this design): p01 (playlist order 4) now introduces "contact tracing" with a plain meaning. b10 later bolds it as a new term ("This is **contact tracing**"), so b10 could recall it instead. The video is at about 559 s with about 10 s spare; the fixes below fit with one reserve cut (finding 7).

## Strengths to keep

- **The puzzle is real and earns the method.** "From the final colours alone, you can't tell" sets up why samples must be saved, and scene 7 pays it off one row at a time.
- **The dataset is clean and correct.** I re-traced it: start D; after round 1 C, D; after round 2 A, C, D, G; after round 3 all eight; the contact sheet columns are symmetric. The well plate pattern in the asset brief matches (column 4; columns 3 and 4; columns 1, 3, 4, 7; all).
- **"Without the start row, you couldn't tell C from D"** is the key insight, and attempt 1 tests it with new data.
- **Both controls have their reason stated** (the water and cups weren't already basic; the indicator works).
- **The limits are mechanisms, not surface differences.** The dilution-against-multiplication point, with its false negative, is especially good, and attempt 2's crossed chip ("useless because it uses chemicals") targets the right misconception.
- **The jug contrast** gives the point-source shape against the propagated shape with the same eight cups.
- **Attempts are genuine HSC Section II items.** Attempt 1 is identify and justify plus a method change (3 + 1 marks); attempt 2 is assess (3 marks). The full worded question stays on screen during the 10 s countdown, and feedback takes about 26 s and 29 s, with one crossed mistake each.
- **The risk table is substance-specific** (hazard, harm, control per row), and nothing is drawn with hands or people.

## Findings

| # | Severity | Scene | Exact quoted text | Problem (likely student question) | Exact replacement (counted by script) |
| --- | --- | --- | --- | --- | --- |
| 1 | should fix | 7, memory aid, A1(b) | "At the start, only D is pink, so D was the starter." ... "Health teams do this in real outbreaks: finding who each case met is called contact tracing." | **This could teach that real tracing works like the model.** In the model, a sample saved before round one answers "who started it" outright. "Health teams do this" then implies real teams have that sample. They don't: nobody is tested before an outbreak. A student asks "so how do real teams know who was first?" The memory aid's "the saved samples show when" also has no real-world equivalent unless it is named. The real-world equivalent is when each person's symptoms began, which scene 8's epidemic curve also uses. | "Real outbreaks have no start sample, so health teams use when symptoms began, and who each case met, called contact tracing." (+32.) The gloss "contact tracing: finding who each case met" stays. Grey tag on "when symptoms began": "the real version of the saved samples". Memory aid check: add that "when" comes from symptom onset in real outbreaks. |
| 2 | should fix | 8 | "Each infected person passes it on, so cases double each round." | **The cause is stated as a general rule, and it's wrong as one.** Cases doubled only because every infected cup met a clear cup. If two pink cups pair, no new case appears. The design's doubt (c) knows this, but the spoken rule says otherwise, and a student will apply it to a class where pairings repeat. | "Here every infected cup met a clear one, so cases doubled each round." (+7.) The "×2" tag becomes "each pink cup met a clear one". Keep the grey tag about susceptible people. |
| 3 | should fix | 4, 5, new screen card, key note 2 | No aim or variables are stated. Scene 5: "Then repeat the whole run with a different secret starter, to check the method traces the source every time." Reuse line: "bio-m6-p01's VRA card and risk table layout". No VRA card appears in any scene. | **A student cannot yet plan or evaluate this method in exam terms.** The sister practical (p02, scene 3) states the aim and the independent, dependent and controlled variables. P01 never says what is kept the same, or why. Its quality words are not tied to skills-s07's definitions ("validity: does the method measure what it was meant to (only the independent variable changes)? Reliability: repeated the same way, do results agree? Accuracy: how close to the true value?"). Repeats are explained without the word "reliable". Accuracy has a natural true value here, the teacher's secret record, which is never used. The VRA card is listed as reused but is never drawn. | Scene 4, after the contact sheet sentence: "Keep volumes, pours and drops the same, so only the contacts decide who turns pink." (+84 with the sentence join.) Scene 5, replacing its last sentence: "Your teacher's secret record lets you check your tracing is accurate. Then repeat with a new starter: if it finds the source every time, it's reliable." (+43.) Screen: in scene 4 the right zone first shows a variables card (bright one line at a time, then dimming): "aim: trace how an infection spreads through contacts, and find the source"; "changes: who meets whom, each round"; "measured: which cups and samples test pink, at each time"; "kept the same: volume, base strength, the pour, drops per well, indicator". In scene 5, after the controls rows, the VRA card (as bio-m6-p01) writes three lines: "valid: only the contacts decide who turns pink; both controls pass"; "accurate: traced starter matches the teacher's record"; "reliable: repeat runs, new starter, same method, tracing still works". Key note 2 adds: "Keep volumes, pours and drops the same. Check the traced starter against the teacher's record (accuracy); repeat with a new starter (reliability)." |
| 4 | should fix | Decisions (A1), mark model for 12b | "testing a sample saved before round one (or after round one with a record of who was pink) would identify it" | **The bracketed alternative is wrong.** After round one, P and Q are both pink, because they mixed in round one, so a round-one record cannot separate them. Only a sample from before round one can. If this line reaches the answer table or a marking note, it teaches a wrong idea. The learner copy (12b) is correct. | Decisions: "testing a sample from each cup saved before round one would identify it (a sample after round one would not: P and Q mixed in round one, so both are pink)." No narration change. |
| 5 | should fix | 10 | Limits card: four two-column text rows; only row 2 has a visual (the dilution strip). | **This is the one scene where narration describes changes that the picture does not show.** "Real contacts don't always transmit", "no recovery and no immunity" and "everyone meets exactly one person per round" are all things the cup row can act out. As written, about 36 s is a text table in the bench slot, and the route's stop line ("distinguish model limits from real spread") lives here. | Keep the card, but act each row on the cup row in the bench zone as it writes. Row 1: a pour arc between a pink and a clear cup, and the clear cup stays clear (terracotta tag "real: a contact may not transmit"). Row 3: one cup gains a grey ring and refuses the arc (tag "immune"), and a pink cup fades back to clear (tag "recovers"). Row 4: one cup sends arcs to three cups in one round (tag "some people meet many"). Row 2 keeps the dilution strip. Each demo dims as the next writes. Narration unchanged. |
| 6 | should fix | 11, risk table row 2, key note 5 | "phenolphthalein indicator is flammable and classed as a possible cancer hazard"; key note 5 "(flammable, H350)" | **"Possible" understates the classification the design itself cites.** H350 is "May cause cancer" (category 1B). "Possible" or "suspected" is the language of category 2 (H351). A student copying the risk assessment learns the wrong category. The design's doubt (e) says it "follows the SDS rather than softening it", but "possible" does soften it. Key note 5 also asks students to copy a hazard code without its meaning. | "and phenolphthalein indicator is flammable and classed as a cancer hazard." (-9.) Key note 5: "teacher adds indicator (flammable; cancer hazard)". The risk table row keeps "may cause cancer (H350)". The science check is to confirm against the current Australian SDS, as already briefed. |
| 7 | should fix | whole | 5,781 characters, about 559 s; findings 1 to 6 add about +157 characters | Findings 1 to 6 would take the video to about 571 s, over the cap. | Apply reserve cut 2 only: scene 2's ", which lets us test ideas we can't safely try on people" (-56). Keep reserve cut 1 (scene 9's vectors sentence), because the dotpoint names vector transmission and it is the only spoken mention. With findings 1 to 6, the total is **5,882 characters by script, about 566.6 s**. Recount after editing. Remaining reserve: scene 9's "Vectors are harder to model safely, so use secondary data for them." (-68), with the grey tag carrying it. |
| 8 | optional | 12d | "In the model, every contact transmits, so cases double." | This repeats finding 2's general rule in the feedback. The card row 1 already says "one new contact each round". | "In the model, every contact transmits, and each pink cup met a clear one, so cases doubled." (+36; 12d becomes about 32 s, so apply only if the voiced 12d stays near 30 s.) Otherwise leave the narration and change card row 1 to "model: every contact transmits; each pink cup met a clear one; doubling". |
| 9 | optional | 2, key note 1 | "An epidemic is a sudden rise in cases in a population." | A rise from 1 to 3 cases is sudden but not an epidemic. The idea of "more than usual" is missing. | "An epidemic is a rise in cases well above the usual level in a population." (+9; only if budget allows.) Otherwise gloss only: "epidemic: many more cases than usual in a population, over a short time". |
| 10 | optional | 8 | Jug graph: "a single bar of 8 at 'start' and zeros after" | Real point-source outbreaks peak over about one incubation period, not one instant. A student may later reject a real point-source curve because it isn't a single bar. | Grey tag under the jug graph: "real single-source cases spread over a few days, but come in one peak". |
| 11 | optional | 9 | "Glowing specks show where the powder travelled: other handles, desks and pens." | It is a demonstration, but not yet a record. Students planning it ask "what do I write down?" | Grey tag on "other handles, desks and pens": "record: which objects glow, and how far from the handle". |
| 12 | optional | 14 | Five notes; note 1 (the model mapping) and note 2 (method and controls) are long. | They are useful but dense to copy, and note 5 mixes limits with safety. | Note 1 drops "(colourless in water, pink in base)" (scene 3 carries it). Split note 5 into "Limits: ..." and "Safety: ..." as two short lines, without adding content. |
| 13 | optional | 5 or 13 (screen only) | No variable is changed between runs. | An HSC item may ask how to adapt the model, for example to test vaccination. A screen-only extension makes "changes" in the variables card a real independent variable without adding narration. | Grey tag beside the repeat row: "to test a variable, change one thing between runs: for example, two 'immune' cups that only ever hold water". |

No blocker. Seven should fix (1 to 7). Six optional (8 to 13).

## Practical clarity (plan and evaluate)

| Element | Result |
| --- | --- |
| Aim and variables | Missing. Finding 3 adds them on a card, plus one spoken sentence on what is kept the same. |
| Method followable | Yes: equal volumes, a secret starter, new partner each round, pour all then half back, three drops per well before round 1 and after each round, a contact sheet, and teacher-added indicator at the end. |
| Controls | Pass. Negative (unmixed water stays clear: no contamination) and positive (base turns pink: the indicator works), each with its reason. |
| Validity, reliability, accuracy (consistent with skills-s07) | Partly. "Valid for" in scene 10 fits s07's "measures what it was meant to". Reliability and accuracy are not named. Finding 3 ties all three to s07's wording and adds the teacher's record as the true value. Note: p01 (playlist order 4) comes before s07 in Biology, so p01 uses the Year 11 definitions without referring forward to s07. |
| Repeats | Pass with finding 3: "new starter, same method" is a good repeat, because it checks the tracing rather than the colour. |
| Data processing | Pass. The contact sheet, the well plate read row by row, and the epidemic curve built from the same rows. |
| Evaluation (limits) | Pass on content; finding 5 for the visuals. |
| Risk table | Pass in structure (hazard, harm, control per substance and the UV torch; disposal and SDS footers). Finding 6 corrects the cancer-hazard wording. |

## Screen load (owner's three bright text items)

This is within the limit as written. Scene 7 is the densest (well plate, contact sheet, arrows, chips), and its dimming order is already stated. Finding 3's variables card must finish dimming before the pour demonstration, and finding 5's demos dim row by row.

## Checks against the review questions

| Question | Result |
| --- | --- |
| Causes explained before they are relied on? | Mostly. The hidden marker, the indicator, the saved samples, the start row, each control, the jug's single peak and each limit all have their reasons. Gaps: why cases doubled (finding 2), what is kept the same and why (finding 3), and how real teams find "when" (finding 1). |
| Terms with plain meanings? | Yes: epidemic, model, indicator, negative and positive control, contact tracing, epidemic curve and fomite. Index case, propagated, point source and false negative are screen-only, which is right for this level. Finding 9 (epidemic) is optional. |
| Attention earned? | Yes: every cup pink and "who started it?", "you can't tell", "you couldn't tell C from D", and the jug. |
| Visual medium? | Yes for scenes 1 to 9: cups crossfade in place, pour arcs, the well plate reveals by row, arrows join partners, bars rise as counted, and the UV crossfade shows the specks. Scene 10 is a text table (finding 5). |
| Screen uncluttered (about 3 bright items)? | Yes. |
| Attempts: HSC Section II style, "Pause here to answer.", 10 s countdown, question on screen, givens underlined, no givens card? | Pass for both. A1's pairs show as a small table; the demand verbs (identify, justify, propose, assess) and the marks match Section II; the full card stays up during the countdown; givens underline in feedback. |
| Feedback brief, one crossed mistake? | 12b about 26 s, crosses "P: listed first". 12d about 29 s, crosses "useless: chemicals aren't germs". Neither re-teaches. |
| Key notes useful? | Yes: five notes plus the memory line, quiet, with a pause invitation. Finding 3 adds the VRA line to note 2, finding 6 fixes note 5, and finding 12 is optional. |
| Memory aid after explanation, limits checked? | "The last test shows who; the saved samples show when; the contacts show how" comes after scenes 6 and 7, and its assumptions are checked. Finding 1 adds the real-world meaning of "when". |
| Re-teaches earlier videos? | No. b03's modes and fomite are one clause each. |
| Anything that would teach a wrong idea? | Finding 2 (each infected person makes cases double), finding 1 (real teams have a start sample), finding 4 (author model only), and finding 6 (the cancer category understated). |
| Narration length? | 5,781 characters, about 559 s. After findings 1 to 7: 5,882 characters, about 566.6 s. |
| No people, hands or faces? | Pass. |
| No em dashes? | Pass in the design (searched). |
| Handoff? | Correct: "testing a water or food sample for microbes" matches bio-m7-p02. |

## Learner trace (from stated entry knowledge)

1. **Hook.** No knowledge needed. The student asks "who?", and "you can't tell" is accepted. Pass.
2. **Scene 2.** b03's direct contact is recalled; the model mapping is clear. Pass.
3. **Scene 3.** The indicator is explained for Biology-only students. Pass.
4. **Scene 4.** The method steps are clear. The student asks "why ten millilitres each?", and finding 3 answers it.
5. **Scene 5.** Controls: pass. Repeats lack the quality word, and accuracy has no reference (finding 3).
6. **Scene 6.** "Now, not first or when" is clear. Pass.
7. **Scene 7.** The row-by-row trace is excellent. The student may then believe real teams have start samples (finding 1).
8. **Scene 8.** Counting and plotting are clear. The doubling rule is over-general (finding 2). The jug contrast passes (finding 10 optional).
9. **Scene 9.** The fomite model is clear. Pass (finding 11 optional).
10. **Scene 10.** The limits are correct, but only read as text (finding 5). "Valid for" is clear.
11. **Scene 11.** The risks are specific. The cancer wording needs finding 6.
12. **12a to 12d.** A1 draws on scenes 6 and 7, and A2 on scene 10. Pass.

## Verdict

**No blocker.** After findings 1 to 7, ready to voice subject to the Claude science check (pH estimates, the H350 wording and NSW phenolphthalein guidance) and the Codex error check. Repeat this review on the exact voiced preview before full export, including the running time (about 566.6 s after fixes) and both feedback timings.

## Resolution

Resolved by the author in `../lessons/bio-m7-p01.md` Revision 2 (27 Oct), merged with the Claude science check's fixes. Narration recounted by script (lines starting "> ", bold markers removed): 17 lines, **5,924 characters** (+143), about 569.7 s, just under the 570 s cap. No U+2014 in the design.

| # | Decision | Change made |
| --- | --- | --- |
| 1 | Accepted | Scene 7: "Real outbreaks have no start sample, so health teams use when symptoms began, and who each case met, called contact tracing." Grey tag "the real version of the saved samples"; key note 3 and the memory aid check match. |
| 2 | Accepted (with SC 1) | Scene 8: "Here every infected cup met a clear one, so the number infected doubled each round: one, two, four, eight." Tag "each pink cup met a clear one"; "×2" arrows on the running total and only from round 1 on the bars. |
| 3 | Accepted | Scene 4 sentence on what is kept the same, and the variables card. Scene 5: "The teacher's secret record checks your tracing is accurate. Then repeat with a new starter: if it finds the source every time, it's reliable." VRA card with s07-matching lines; key note 2 as proposed. |
| 4 | Accepted | Decisions corrected: only a sample from before round one separates P and Q. |
| 5 | Accepted | Each limit acted on the cup row as its card row writes; narration unchanged. |
| 6 | Accepted (with SC 2) | "flammable and may cause cancer"; row 2 keeps H350 and adds H341, H361 and "check the bottle's SDS"; key note 5 split, with no bare hazard code. |
| 7 | Accepted | Reserve cut 2 applied; vectors sentence kept. Three small trims (scenes 2, 3, 5) were also needed to stay under 570 s after the science-check fixes. |
| 8 | Accepted on screen, narration trimmed | Card row 1 "each pink cup met a clear one"; the narrated version is declined (12d would reach about 32 s), but 12d's "so cases double" becomes "so cases climb fast", so it no longer states a rule. |
| 9 | Accepted (with SC 7) | "a rise in cases above what's expected in a population". |
| 10 | Accepted (with SC 8) | Jug tag "real single-source cases bunch into one peak, about one incubation period wide". |
| 11 | Accepted | Scene 9 tag "record: which objects glow, and how far from the handle". |
| 12 | Accepted | Note 1 drops the colour detail; limits and safety are separate notes. |
| 13 | Accepted | Grey tag on changing one variable between runs. |

Scope note for root (b10 could recall "contact tracing") recorded in the design's Revision 2 entry. Repeat this review on the exact voiced preview before full export, including running time and both feedback timings. Codex error check (including the NSW CSIS phenolphthalein entry) pending.
