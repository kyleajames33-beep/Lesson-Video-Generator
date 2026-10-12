# C3 learning review: disturbing equilibrium by concentration and temperature

**Verdict: pass after blockers.** Two blockers, eleven should-fix items and several notes. The structure is strong: the two-beat "moment of the change / the response" board, the single worked system with rates that follow one stated model, the removal case, the principle named only after two cases, the colour evidence and an unseen attempt. The blockers are both about the temperature half. The reason the heat-absorbing reaction speeds up more is only asserted, and every example heats or cools an endothermic reaction, so the lesson cannot teach where heat goes in the equation and its own misconception claim is false for its examples.

Scope: AI source review of the script, visual plan, memory aid check, length estimate and key notes in `../lessons/chem-m5-c03.md` (revision 2), read as a student starting Year 12 who has watched C1 (dynamic equilibrium, closed system), C2 (forward and reverse rates, made-up scale, gap, "the faster rate falls, the slower rate rises, they meet and stay level") and possibly G01 (delta H sign, entropy), with Year 11 collision ideas only vaguely. Method: `docs/production/student-learning-review.md` with `teaching-playbook.md`. Site extract `chem-m5-l05.md` checked for alignment. Compared with `chem-m5-c01.md`, `chem-m5-c02.md`, `chem-m5-g01.md`, the Module 5 memory-aid bank entries named in the design, and the C2, G01 and B2b checks for slipped patterns. Not learner evidence. No stills, voiced preview or audio inspected. Science stays with Codex. The rate model arithmetic was recomputed by hand (below). U+2014 search of the lesson and this file: none. Narration recounted by script: 1,328 words, matching the design's per-scene counts. Human listening pending.

Main question traced: *a settled mixture is disturbed by adding a substance, removing one, or warming it; which way does it go and why?* Useful outcome: a student can say which rate changes first, which is now faster, which way the net reaction runs, what the colour does and why it only partly undoes the change, for concentration and for temperature.

## Arithmetic check (forward = 0.3 [Fe3+][SCN-], reverse = 3 [FeSCN2+])

| Stage | Counts | Forward | Reverse | Gap | Result |
| --- | --- | --- | --- | --- | --- |
| Equilibrium | 10, 10, 10 | 0.3 x 10 x 10 = 30 | 3 x 10 = 30 | 0 | correct |
| Just after adding 7 Fe3+ | 17, 10, 10 | 0.3 x 17 x 10 = 51 | 30 | 21 | correct |
| One step later | 16, 9, 11 | 0.3 x 16 x 9 = 43.2, shown 43 | 3 x 11 = 33 | 10 | correct; counts change by 1, 1 and 1 as the equation requires |
| New equilibrium | 15, 8, 12 | 0.3 x 15 x 8 = 36 | 3 x 12 = 36 | 0 | correct; it solves the equilibrium exactly (12 = 0.1 x 15 x 8) and conserves iron (27) and thiocyanate (20). Fe3+ is down 2 of the 7 added, as narrated |
| Removal, 4 SCN- taken out | 10, 6, 10 | 0.3 x 10 x 6 = 18 | 30 | 12 | correct |
| Removal, new equilibrium | solve 10 - x = 0.1 (10 + x)(6 + x), x = 1.46 | 25.6, narrated "about 26" in the visual | 3 x 8.54 = 25.6 | 0 | correct: red 8.54, SCN- 7.46, Fe3+ 11.46 |
| Cobalt | 30, 30 to 50, 38 (gap 12), 46, 41 (gap 5), 44, 44 | made-up, no model | | | gaps are correct differences; direction and sizes are plausible (heat-absorbing rate rises more, both end higher) |

The numbers are consistent. Two presentation problems with them are findings 4 and 6.

## Material findings

| # | Scene | Exact words | Likely student question or problem | Concrete repair | What the repair enables | Severity |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 7, 8, 11 | "both rates go up, because the particles move faster. But the reaction that takes in heat gains more from the extra heat, so it speeds up **more**." Feedback: "cooling slows it more than the reverse." | Why? This is the single causal claim the whole temperature half stands on, and it is only stated. A student has just been told the concentration story in terms of meetings per second; here there is no meeting story, so "gains more from the extra heat" is a bare label. The playbook and AGENTS require each cause to be explained before it is relied on. The author note says activation energy is deliberately avoided, but the plain-words cause was not supplied in its place. Without it the aid in scene 9 is a rote rule and the line "the reason is still the rates" is empty. | Scene 7, replace the last two sentences: "Only collisions with enough energy make a reaction happen, and heating makes those high-energy collisions much more common. A reaction that takes in heat needs more energy from each collision than the one that gives it out, so it gains the most from the extra heat. Both rates go up, but the heat-absorbing one goes up more." (+22 words net.) Visual: a short collision strip on the existing tube view, two particles meeting slowly (no reaction) then fast (reaction), with the heat-absorbing arrow labelled "needs a hard collision". Feedback question two: "...so cooling removes more of the hard collisions it relies on, and slows it more." Keep activation energy unnamed. Add to the author notes that this paraphrases Ea(forward) = Ea(reverse) + delta H, and that Year 11 collision theory is the recalled base. | A causal reason for the key asymmetry, in plain collision terms, so the temperature rule is derived and the aid is a shortcut for something understood. | **BLOCKER** |
| 2 | 7 to 9, 11, 13; Teaching checks | Teaching checks: "heating always makes more product (heat is a reactant only when the reaction takes in heat; the cooling and feedback cases show the opposite direction)." Scene 9: "This reaction takes in heat, so heat is a reactant." | The lesson never shows a reaction that gives out heat in the forward direction. Both temperature examples (cobalt, N2O4) take in heat, so heating always shifts right and cooling always left. The "opposite direction" in the cooling cases is opposite only because the change is cooling. The listed misconception is therefore reinforced, not corrected: a student will leave with "heating makes more product" and "heat is a reactant". The aid also never says how to place heat; "heat is a reactant" is true only for this reaction. A student given an exothermic reaction in the exam has no step that tells them to write heat on the right. The claim in the design is false for the lesson's own examples. | Scene 9, after the cooling sentence add: "Where the heat goes depends on the reaction. If the forward reaction takes in heat, write heat on the left. If it gives out heat, write heat on the right, and then heating pushes the shift left, towards the reactants." (+34 words.) Visual: a generic one-line ghost chip "A + B ⇌ C + heat" under the cobalt line, with the heat wave on the right and the heating arrow pointing left, held two seconds, then cleared. Key note 3 add: "If the forward reaction gives out heat, heating favours the reverse reaction." Feedback unchanged. Correct the Teaching checks line to match. Optional, no new words: end the attempt item two with "(delta H is given for the forward reaction)" as already shown. | Heat placement is taught, the misconception is actually met, and the aid transfers to an exothermic case. | **BLOCKER** |
| 3 | 1, 2, 3a (spoken "last time") | "like the flask last time"; "on the same made-up scale as last time"; "the same story as last time" | The route puts G01 at playlist position 3 and C3 at 4. A student watching in order will hear "last time" and think of the fire and the leaf, not the flask. The design says G01 is a branch and C3 must stand on C1 and C2 alone, but the spoken recall points at the wrong video for those who watched G01. A student arriving from a search sees no flask at all. | Name the thing, not the order. Scene 1: "That is a dynamic equilibrium, like the sealed flask of P C L five." Scene 2: "on the same kind of made-up scale as the flask." Scene 3a: "It is the same story as the P C L five flask." Show a 2 second thumbnail of the C2 flask with the recalled rate bars at the first mention. No production code is spoken. | Recall works from any viewing order and still avoids re-teaching. | should fix |
| 4 | 2, 5 | "the forward rate jumps straight to **fifty-one**" ... "drops straight away, from thirty to **eighteen**." | Where do 51 and 18 come from? Nothing in the narration or the visual links 17 iron to 51 or 6 thiocyanate to 18, and in scene 5 the narration never says how much thiocyanate was removed (the four grey dots are visual only). A careful student cannot rebuild the numbers, so they look pulled from nowhere and the worked example becomes copying. The model is proportional and that is easy to say. | Scene 2: "Joining speeds up in step with the iron count, so seventeen tenths of thirty is fifty-one." Visual: "30 x 17/10 = 51" writes under the forward bar. Scene 5: "We take out four of the ten units of thiocyanate, so six are left. Joining slows in step, six tenths of thirty is eighteen." Visual: "30 x 6/10 = 18". Optional in 3a: "eleven red ions at three each is thirty-three." (+25 words total.) | Each rate has a visible cause and the numbers can be rebuilt, in the same one-stage-at-a-time form as the C2 table. | should fix |
| 5 | 2 | 121 words: equilibrium state (three counts, two rates), the equation roles, the addition of seven units, two new rates, the gap and the colour tag, with a six-column table. | Two stages at once: "what the settled tube looks like" and "what happens at the instant of the change". Eight numbers are spoken. A student will lose the first three counts by the time 51 arrives. | Split 2a "the tube at equilibrium": counts 10, 10, 10, rates 30 and 30, forward and reverse named (first four sentences, about 45 words), hold with the first table row and the equal bracket. 2b "the moment of the change": "Now we add seven units more of iron three plus..." through "the two rates no longer match." No extra words except those in finding 4. | One idea per scene and the starting row staying on screen while the change is explained. | should fix |
| 6 | 5 (visual) | "A 'not back to 10' style dashed line is shown for the red count (settles at about 8.5, below 10 and above the instant after)." Counts "grey and orange counts rise slightly". | At the moment of removal the red count is still 10, so "above the instant after" is false (8.5 is below it), and the dashed 10 line on the red count teaches nothing, since the red count falls and does not return. The partial-cancel point in this case belongs to the thing removed. Dots cannot show 8.5, 7.5 or 11.5 either; whole-number dots will not match the rates (11, 7, 9 give 23 and 27, not equal). | Put the dashed line on the thiocyanate: it was 10, was cut to 6, and ends at about 7.5, "not back to 10". Show red 10 to about 8.5 and iron 10 to about 11.5 as labelled "about" values on the graph or tags, not as dots. Both bars meet at about 26 with "about" visible. Delete the "above the instant after" note. | The removal case shows "only part of the way" with the correct species, and no unmatched numbers. | should fix |
| 7 | 3b, 4 | "Then the rates meet again, this time at thirty-six." ... "higher than the thirty we began with." | Why higher? The temperature did not change, and C2 taught that the rates are equal at equilibrium, not that they are fixed. A student asks "do rates always equal 30 at equilibrium?" Nothing says why 36. | Scene 3b after "thirty-six": "Both rates are higher than before, because there is more iron to react and more red ion to split." (+17 words.) Visual: the new counts on the table row beside the rate bars. | The reason for the higher rate is visible, and the cobalt line "both rates are higher because it is hotter" then has a contrast. | should fix |
| 8 | 13, 9 | Note 4: "A change shows up in two steps: first one rate changes, then the net reaction runs until the rates match." Aid tag: "a substance or heat in the equation, volume unchanged". Aid last line: "Never all the way back." | Note 4 contradicts scenes 7 and 8: a temperature change moves both rates. A student copying note 4 will write "one rate changes" for heating. Note 2 gives the shift rule for "a substance", which a student will apply to adding water or a solid. "Volume unchanged" is untaught (C4 owns it) and "never all the way back" is ambiguous (back to what?). | Note 4: "A change shows up in two steps: first the rates change (one rate for a concentration change, both rates for a temperature change), then the net reaction runs until the rates match. The disturbance is only partly cancelled." Note 2: "Adding a dissolved or gas substance that is in the equation speeds up the reaction that uses it..." Aid tag: "for a dissolved or gaseous substance in the equation, or for heat". Aid last line: "It only partly cancels the change." | Notes that are true for every case the lesson covers, and an aid that does not invite adding water or a solid. | should fix |
| 9 | 7 | 119 words: a new reaction, a complex-ion equation with 4Cl- and 6H2O, the endothermic and exothermic terms, a room-temperature colour, the heating, the no-concentration-change point and the rate asymmetry; speed gauges and heat icons as new components. | Too many things at once, and the heavy equation does work only the colour needs. The gauges are a new device when students already read rate bars. | Split 7a "the reaction takes in heat" (up to "At room temperature the tube is a purple mix of both") and 7b "warming it" (from "Now we warm it", including the finding 1 repair). Use the existing rate bars (not new gauges) so the visual system stays one system. Keep the full formula on the equation chip, but speak only "pink cobalt ion plus chloride ions gives a blue ion plus water". | One new idea per scene and one visual vocabulary. | should fix |
| 10 | 10, 11 | Item one: "...what happens to the colour?" Hold "about 45 seconds". Feedback: "colourless.If you said..." | The colour demand has two correct answers: it fades at once, then partly returns. A student who answers "fades" is right at one moment and the model answer is silent on which was asked. Two items, five demands, a new system with a second-order reverse step. The feedback has a missing space (and so will the caption). | Item one: "...what happens to the colour straight away, and then once the mixture has settled again?" (+9 words, all of it on screen through the hold). Hold about 60 seconds, with "Pause the video if you'd like more time" kept. Fix the space in the feedback. | A fair attempt whose demand matches the model answer, and time for students who do not pause. | should fix |
| 11 | 1, 2, 5 | Hook: "we drop in a few crystals". Design note: "a few crystals, so the volume barely changes". Scene 5: silver nitrate added. | The condition that makes the prediction true (volume barely changes) is in the author notes and the aid tag, not in the narration. The site lists "paler means a left shift, because of dilution" as a misconception. A student who sees liquid added in scene 5 will ask whether the colour fades because of dilution. | Hook: "a few crystals that dissolve and add more iron three plus ions." Scene 2: "We add the iron as solid, so the volume hardly changes." Scene 5: "A few drops of silver nitrate, so the volume hardly changes, lock the thiocyanate away..." (+14 words total). | The dilution doubt is answered where it arises, and the removal case is a fair test. | should fix |
| 12 | 6, 8, 9 | "It is not a separate law. It is what the rates do." | Overclaims: the rate argument has only been shown for a model where each rate depends on the amount of what it uses. The principle is also a named syllabus statement a student must be able to quote, and "not a law" may sound as though it is unimportant. The principle is not yet linked to temperature: nothing says why a shift that takes in heat "partly cancels" warming. | Scene 6: "In these examples it is what the rates do." Scene 8, after "bluer": "Taking in heat is the shift that partly cancels the warming." (+10 words.) | The principle is stated accurately and connected to both disturbances. | should fix |

## Notes (no change required to record)

- **"Two jobs" (scene 4):** vague. "So two things happen, in order. Adding the iron changed a concentration at once. The reaction responded afterwards." is the same length and says what acts.
- **"The gap is closing" (scene 3a):** "gap" is a C2 term. Add "the difference between the rates" once for a viewer who skipped C2. Free if it replaces "so the gap is closing".
- **Equal starting counts:** 10, 10, 10 might echo "equal amounts means equilibrium" for a moment. The new mixture 15, 8, 12 repairs it; keep the C2 reminder in the scene 3b table (one clause: "the amounts do not need to match").
- **Made-up chip for cobalt:** the chip appears once in scene 2. Show it again in scene 8, because those numbers (50, 38, 46, 41, 44) come from no model, unlike the iron numbers.
- **Solvent water in the aid check:** the aid check says the aid fails when the substance is the solvent, yet the cobalt equation shows 6H2O(l) as a product. Adding water to that tube does shift left (pink), which the aid predicts correctly. Reword the aid check: "water is a participant here but adding water also dilutes every concentration, so the aid is not offered for it".
- **Cobalt delta H** is asserted ("takes in heat"). One clause is enough: "an experiment shows that this reaction takes in heat."
- **Pronunciation:** "Le Chatelier" needs a phonetic spelling for the voice (for example "luh SHAT-el-yay"). Listen in the voiced preview. "Iron three plus", "thiocyanate", "N O two" and "N two O four" are flagged by the design for the same check.
- **Feedback length:** 165 words, two items. Splitting 11a (concentration) and 11b (temperature) lets each replay sync to its own visual. Not required.
- **Opening reveal:** the hook shows the colour deepen at "Watch the colour", and scene 2 then says "colour not changed yet". Add "over a minute" to the hook ("it slowly deepens") so the two do not look contradictory.
- **Chemistry caveats already held in author notes** (Fe3+ is itself pale yellow, the real system is not one step) are correctly out of learner copy.

## Memory aid check

Aid: "Treat heat like a chemical. Add it and the shift goes away from it. Take it away and the shift goes toward it. Never all the way back." Under its assumptions (a substance that is dissolved or gaseous and in the equation, or heat; heat written on the correct side) it gives the right direction for every case in the lesson: add Fe3+ (right), remove SCN- (left), heat cobalt (heat is a reactant, right, blue), cool N2O4 (left, colourless), remove NO2 (right). It is also correct for an exothermic case once finding 2 puts heat on the product side: heating then adds to the right and shifts left. The assumption "heat on the correct side" is the step the video omits (finding 2), and "never all the way back" needs the reworded last line (finding 8). Do not offer the aid for pure solids, a catalyst, an inert gas or water added to a solution. The aid gives direction only, never size, and never puts heat into a calculation. The C2 callback "the faster rate falls, the slower rate rises, they meet and stay level" holds after every disturbance in this lesson, including temperature (the new equilibrium is at a new steady temperature). The proposed amendment to the C2 check text is a doc edit only.

## Length and cuts

Claimed narration 1,328 words, about 8.8 minutes with a 45 second hold and 30 seconds of notes. The repairs add about 125 words (finding 1: +22, 2: +34, 4: +25, 7: +17, 11: +14, 12: +10, 10: +9 words on screen only, rest small) and the hold grows 15 seconds. Cuts that lose no cause:

- **Scene 4, -13:** delete "A common slip is to say the iron falls back to ten. It does not." Scene 3b already says "not back to ten" and the graph keeps the dashed 10 line and crossed-out bubble as visuals.
- **Scene 4, -10:** shorten "The iron concentration jumps up the instant we add it, then slides down as it is used, flattening at fifteen. The red ion climbs from ten to twelve." to "The iron jumps up the instant we add it, then slides down to fifteen. The red ion climbs to twelve."
- **Scene 12, -8:** keep the decision rule intact. Shorten only the handoff "Next, we will squeeze a gas mixture and add a catalyst, to see what changes and what does not." to "Next: squeezing a gas mixture and adding a catalyst."

Net about 1,420 words (7.7 minutes at 185 wpm), plus a 60 second hold, about 30 seconds of notes and the 2 second holds: roughly 9.4 minutes. Inside 10. If the voiced preview runs long, shorten the scene 4 narration further (the graph shows what the narration describes) before touching scenes 2, 7, 9, the attempt or the feedback.

## Checks against the review questions

| Question | Result |
| --- | --- |
| Cause explained before relied on? | Concentration yes (meetings; one rate at once; faster falls, slower rises). Temperature no (finding 1). Higher end rate unexplained (finding 7). 51 and 18 not derived (finding 4). |
| Terms given plain meanings? | Le Chatelier's principle, shift, position, endothermic, exothermic yes. "Gap" assumes C2 (note). Complex-ion formula heavy for the idea (finding 9). |
| Current step on screen without competing text? | Scenes 2 and 7 overloaded (findings 5 and 9). Scene 3a to 5 keep last-two-rows rule. |
| Worked example one stage at a time? | Yes for iron: moment, a little later, new equilibrium; results land on cues. Rates not derived (finding 4). Cobalt rates made-up, fine if the chip returns (note). |
| Fair attempt? | Unseen system and unseen cases. Colour demand ambiguous, hold short (finding 10). All conditions visible. Nothing answer-bearing. |
| Feedback names the likely wrong answers? | Three named: back to the same, forward rate dropped, only forward slows. Good. Add nothing. |
| Key notes a small useful set? | Four plus the aid. Note 4 wrong for temperature, note 2 unconditioned, no exothermic line (findings 2 and 8). |
| Memory aid correct under its assumptions? | Yes after findings 2 and 8. |
| Narration and visuals agree? | Removal numbers and "above the instant after" disagree (finding 6). Hook colour reveal versus "not changed yet" (note). |
| Em dashes, plain subject-action sentences, no noun chains? | None found. "The reaction that takes in heat gains more from the extra heat" is the nearest to a label sentence (finding 1). |

## Key notes (suggested wording)

1. Le Chatelier's principle: when an equilibrium is disturbed, the mixture shifts in the direction that partly cancels the disturbance.
2. Adding a dissolved or gas substance that is in the equation speeds up the reaction that uses it, so the shift goes away from it. Removing it slows that reaction, so the shift goes toward it.
3. Heating speeds up both reactions but helps the one that takes in heat (endothermic) more. Cooling slows both but slows the endothermic one more. If the forward reaction gives out heat, heating favours the reverse reaction.
4. A change shows up in two steps: first the rates change (one rate for a concentration change, both for a temperature change), then the net reaction runs until the rates match. The disturbance is only partly cancelled.

Aid (large): *Treat heat like a chemical. Add it and the shift goes away from it. Take it away and the shift goes toward it. It only partly cancels the change.* Tag: "for a dissolved or gaseous substance in the equation, or for heat".

## Strengths to keep

- One system, three stages, numbers that follow a stated model and can be rechecked.
- "The moment of the change" and "the response" as two labelled beats on the same board for every disturbance, and the graph scene naming the two jobs.
- The principle named only after two worked cases, with the partial result (15, not 10).
- A removal case that gives the opposite direction and sets up the attempt.
- A fully unseen attempt (N2O4 and NO2) with the delta H sign shown and the sealed, same-size, steady-temperature conditions all visible.
- Feedback that names the three likely wrong chains and replays the two-beat run.
- K, Q, pressure and catalysts all kept out.

## Verdict

**Pass after blockers.** Fix findings 1 and 2 before recording. Findings 3 to 12 are narration, visual and note edits for the same script lock pass; findings 4, 5 and 9 are the largest changes (derive the rates, split scenes 2 and 7). Then re-review the voiced preview for scenes 2a/2b, 7b, 9 and the attempt timing.

## Re-review checklist (for the next revision)

- Scene 7: is the collision cause spoken in plain words, and does the visual show a slow and a fast collision?
- Scene 9: does an exothermic ghost line exist, and does key note 3 carry it?
- Are all three "last time" phrases gone?
- Do 51 and 18 each appear with their derivation on screen?
- Is the removal dashed line on the thiocyanate, and are the "about" values not shown as dots?
- Do the key notes and aid tag match the finding 8 wording?
- Is the hold about 60 seconds and the colour demand split into "straight away" and "once settled"?
- Recount the narration after edits; recheck that no U+2014 characters were introduced.

## Revision 3 re-review (12 Oct)

Reviewer: fresh independent student-learning reviewer (did not write the design or the first review). Scope: AI source review of `../lessons/chem-m5-c03.md` revision 3 against `docs/production/student-learning-review.md`, `teaching-playbook.md`, AGENTS.md, and C1, C2 and G01 as entry knowledge. No stills, preview or audio inspected. Human listening pending. U+2014 search of the lesson and this file: none. Narration recounted by script: 1,465 words, matching the design's per-scene counts.

### 1. First-review items: resolved?

| First-review item | Fixing line (revision 3) | Result |
| --- | --- | --- |
| 1 BLOCKER, collision cause | Scene 7b: "Only collisions with enough energy make a reaction happen, and heating makes those high-energy collisions much more common. A reaction that takes in heat needs more energy from each collision than the one that gives it out, so it gains the most from the extra heat." Collision strip in the visual; feedback: "cooling removes more of the hard collisions it relies on"; author note records the Ea paraphrase | Resolved |
| 2 BLOCKER, heat placement | Scene 9: "If the forward reaction takes in heat, write heat on the left. If it gives out heat, write heat on the right, and then heating pushes the shift left, towards the reactants." Ghost chip "A + B ⇌ C + heat"; key note 3 "If the forward reaction gives out heat, heating favours the reverse reaction." | Resolved. The misconception line in Teaching checks now matches |
| 3 "last time" | Scenes 1, 2a, 3a name "the sealed flask of P C L five", "the same kind of made-up scale as the flask", "the same story as the P C L five flask"; no spoken "last time" remains | Resolved |
| 4 51 and 18 not derived | 2b: "seventeen tenths of thirty is fifty-one"; 5: "six tenths of thirty is eighteen"; on-screen "30 x 17/10 = 51", "30 x 6/10 = 18". Scene 5 now says four of ten units are removed | Resolved |
| 5 scene 2 overloaded | Split into 2a (equilibrium state) and 2b (the moment of the change) | Resolved |
| 6 removal dashed line | Scene 5 visual: dashed 10 line on SCN- (10 to 6 to about 7.5); red about 8.5 and iron about 11.5 as "about" tags, no dots | Resolved. Recomputed below |
| 7 why higher rates | 3b: "Both rates are higher than before, because there is more iron to react and more red ion to split." | Resolved in intent, but the wording is half true: see N1 |
| 8 notes and aid | Note 4 now "(one rate for a concentration change, both rates for a temperature change)"; note 2 "dissolved or gas substance that is in the equation"; tag "for a dissolved or gaseous substance in the equation, or for heat"; last line "It only partly cancels the change." | Resolved. Note 2 still needs one condition: see N3 |
| 9 scene 7 overloaded | Split into 7a and 7b; existing rate bars, no new gauges; spoken formula reduced to plain words | Resolved |
| 10 attempt | Colour demand split into "straight away, and then once the mixture has settled again"; hold about 60 s; space fixed ("colourless. If you said") | Resolved |
| 11 dilution doubt | Hook "a few crystals that dissolve"; 2b "as solid, so the volume hardly changes"; 5 "a few drops of silver nitrate, so the volume hardly changes" | Resolved |
| 12 "not a law" overclaim | Scene 6 "In these examples, it is what the rates do."; scene 8 "Taking in heat is the shift that partly cancels the warming." | Resolved |
| Notes: "gap", "two jobs", made-up chip in scene 8, hook reveal, water in aid check, cobalt delta H clause | All applied ("the difference between the rates", "Adding the iron changed a concentration at once. The reaction responded afterwards.", chip returns, "Over a minute, it slowly deepens", aid check reworded, "An experiment shows that this reaction takes in heat") | Resolved |

### 2. Arithmetic recheck (forward = 0.3 [Fe3+][SCN-], reverse = 3 [FeSCN2+])

| Stage | Counts | Forward | Reverse | Gap | Result |
| --- | --- | --- | --- | --- | --- |
| Equilibrium | 10, 10, 10 | 30 | 30 | 0 | correct |
| Just after adding 7 | 17, 10, 10 | 0.3 x 17 x 10 = 51 (30 x 17/10) | 30 | 21 | correct |
| A little later | 16, 9, 11 | 43.2, shown 43 | 33 | 10 | correct; each count moves by 1 as the 1:1:1 equation requires |
| New equilibrium | 15, 8, 12 | 36 | 36 | 0 | correct; iron 17 to 15 is "2 of the 7 used"; conservation holds (27 and 20) |
| Removal, 4 SCN- taken out | 10, 6, 10 | 18 (30 x 6/10) | 30 | 12 | correct |
| Removal, new equilibrium | x = 1.456 from 10 - x = 0.1(10 + x)(6 + x) | 25.6 | 25.6 | 0 | red 8.54, SCN- 7.46, Fe3+ 11.46: "about 8.5, 7.5, 11.5, 26" correct |
| Cobalt (made-up) | 30/30, 50/38, 46/41, 44/44 | | | 12, 5, 0 | gaps are correct differences; the rates close in monotonically; labelled made-up in scenes 7b and 8 |

All numbers add up. The graph snapshot dots (51, 43, 36 forward; 30, 33, 36 reverse; Fe3+ 17, 16, 15) are monotone, so the curves are consistent.

### 3. New findings from the fresh pass

| # | Scene | Exact words | Likely student question or problem | Exact fix | Severity |
| --- | --- | --- | --- | --- | --- |
| N1 | 3b | "Both rates are higher than before, because there is more iron to react and more red ion to split." | The table beside it shows thiocyanate down from 10 to 8, and joining needs both ions. A careful student asks why the forward rate rose when one of its two ingredients fell. "More iron" is half the story (15 x 8 = 120 beats 10 x 10 = 100). The reverse half is clean. | "Both rates are higher than before, because there is more red ion to split, and more iron to meet the thiocyanate that is left." (+6 words) | SHOULD FIX |
| N2 | 2b tag, 10, 11 | 2b tag "colour not changed yet"; attempt item one asks the colour "straight away"; feedback "The brown fades when it is removed". | The lesson's pattern is that at the moment of the change the colour has not moved, because the touched species was not the red ion. In the attempt the touched species (NO2) is the brown substance, so the colour does change at once. A student who applies the lesson's pattern answers "no change straight away" and is marked wrong with no reason taught for the exception. | 2b tag: "red ions untouched, so colour not changed yet". Feedback one: "The brown fades at once, because N O two is the brown substance, then partly returns, but it stays paler than before, because the shift only partly cancels the change." (+9 words) | SHOULD FIX |
| N3 | 13 note 2 | "Adding a dissolved or gas substance that is in the equation speeds up the reaction that uses it..." | For a gas the rule needs a fixed-size container (the attempt states "without changing the size", the note does not). A student can copy the note and apply it to a gas added at constant pressure, where adding gas also dilutes the others. | "Adding a dissolved substance, or a gas in a fixed-size container, that is in the equation speeds up the reaction that uses it, so the shift goes away from it. Removing it slows that reaction, so the shift goes toward it." Aid tag unchanged. | SHOULD FIX |
| N4 | 1 (and the cobalt beaker, 7a) | "It has sat on the bench for an hour at the same pale red... That is a dynamic equilibrium, like the sealed flask of P C L five." | C1 taught "dynamic equilibrium needs a closed system" as a decision rule, and its open beaker was classed "neither". The iron tube is an open test tube on a bench and the cobalt tube sits in an open beaker. A student who applies the C1 rule asks "is this closed?" about the lesson's own opening example. The answer (the ions cannot leave the solution) is never said. | Scene 1: "That is a dynamic equilibrium, like the sealed flask of P C L five, because none of the ions can escape from the solution." (+10 words, offset by the cuts below) | SHOULD FIX |
| N5 | 9, Decisions | Decisions say the aid is "spoken once (scene 9)", but scene 9 narration never says "It only partly cancels the change". | Not a learner problem. The last line is on screen and in the notes but unheard. | Correct the Decisions line to "spoken once in paraphrase". Add no words. | NOTE |
| N6 | Status line | "Not yet fact checked (Codex) and not yet learning reviewed." | Stale; the lesson has had learning review. | Reword the status line. | NOTE |
| N7 | 10 | "what happens to the colour straight away, and then once the mixture has settled again?" | The split signals a two-stage answer. That is a fair cost of an unambiguous demand; the student still decides which way each stage goes. | None. Keep. | NOTE |
| N8 | 9 | 127 words, three jobs (heat as a chemical, heat placement both ways, the aid). | Dense, but the visual lands the cobalt line, then the exothermic ghost chip, then the aid in order. | Preview check only: the ghost chip must stay on screen for the full two seconds on "write heat on the right" before it clears. | NOTE |

No claim in the lesson is false for its own examples after revision 3. Checked: "heating always makes more product" is now met by the exothermic ghost chip and key note 3; the "hard collisions" cause holds for cobalt (endothermic forward) and N2O4 (cooling); the aid gives the right direction for add Fe3+ (right), remove SCN- (left), heat cobalt (right), cool N2O4 (left) and remove NO2 (right).

### 4. Attempt fairness

Unseen system, delta H sign and "takes in heat" both stated, sealed, same size and steady temperature visible, every demand of items one and two on screen through the 60 second hold, nothing answer-bearing. Only taught content is tested: which rate changes first (the reverse, which uses NO2, not the forward), direction, colour, heat-absorbing direction. Item one's model answer (fades, then partly returns, paler than before) was recomputed: removing NO2 lowers the final [NO2] below the start, so "paler than before" is correct. N2 is the only fairness gap.

### 5. Length and exact cuts

Current: 1,465 words at 185 wpm is 7.9 minutes. Add the 60 second hold, about 30 seconds of key notes and the short holds: about 9.8 minutes, too close to 10 once transitions are added. The new-finding fixes add about 25 words (N1 +6, N2 +9, N4 +10). The cuts below remove 60 words and lose no cause, condition or exam point. Net about 1,430 words (7.7 minutes), total about 9.5 minutes.

| Scene | Cut | Words |
| --- | --- | --- |
| 1 | "on the bench" (leave "It has sat for an hour at the same pale red") | -3 |
| 1 | "and can we predict which way it goes?" becomes "and which way does it go?" | -2 |
| 3b | "this time" (leave "Then the rates meet again at thirty-six.") | -2 |
| 3b | delete "The reaction used up just two of the seven." (the screen tag "added 7, used up 2" and "only down to fifteen, not back to ten" carry it) | -9 |
| 4 | "Here is the whole journey as graphs." becomes "Here are the graphs." | -3 |
| 4 | delete "Now the rates." | -3 |
| 4 | delete ", higher than the thirty we began with" (3b already says higher, with the reason) | -7 |
| 5 | delete "Now the opposite." | -3 |
| 6 | "Chemists have a name for this pattern: Le Chatelier's principle." becomes "This pattern is Le Chatelier's principle." | -4 |
| 6 | "and the faster rate then falls while the slower rate rises" becomes "then the rates close in" (3a and 4 already said the fall and rise) | -5 |
| 8 | delete "forty-six and forty-one," (the table row shows them) | -4 |
| 9 | "Here is a shortcut for predicting this." becomes "Here is a shortcut." | -3 |
| 10 | "Your turn, with a new equilibrium." becomes "Your turn." | -4 |
| 11 | delete "making more N O two" | -4 |
| 11 | "If you said the brown returns to exactly what it was" becomes "If you said the brown fully returns" | -4 |
| Total | | -60 |

Reserve cut if the voiced preview still runs long: delete scene 4's "The red ion climbs to twelve." (-6; the graph labels it). Recount after edits and recheck U+2014.

### 6. AGENTS.md and memory aid

- Em dashes: none. Sentences are subject-action throughout; "It is a direction rule" is the only label-style sentence and is harmless.
- Terms before meanings: shift, position, endothermic, exothermic, Le Chatelier's principle, and delta H (explained by "takes in heat" immediately before) all have plain meanings before use.
- Attempt: conditions and demands visible, the ice-water case uses the taught heat rule. Pass apart from N2.
- Key notes: four items plus the aid (about 120 words), a small useful set. Apply N3.
- Aid: "Treat heat like a chemical. Add it and the shift goes away from it. Take it away and the shift goes toward it. It only partly cancels the change." Correct under its stated assumptions (dissolved or gaseous substance in the equation, fixed volume, heat written on the correct side as taught in scene 9, direction only). Not offered for solids, a catalyst, an inert gas, a pressure or volume change, or water added to a solution.

### Verdict

**Pass.** Both first-review blockers are resolved and every first-review should-fix item is resolved. No new blockers. Four wording edits remain for the script lock (N1 to N4, about 25 words) plus the 60 word cuts above, then a recount. N5 to N8 are notes. Re-check the voiced preview for scenes 3b, 9, the attempt timing and the item one feedback.
