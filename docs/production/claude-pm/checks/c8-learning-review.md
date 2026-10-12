# C8 learning review: the reaction quotient, Q, which way will the mixture run?

**Verdict: pass.** No blockers. Nine should-fix items and several notes, all script-lock edits. The structure is strong: a hook that reuses the hot H2 + I2 tube with a mixture nobody let settle and a real question (more HI or less, and can we know before anything moves); Q defined as "the K fraction with the numbers from now" with its plain meaning; a three-beat calculation; a number line that puts Q and K side by side; a rate reason (forward over reverse equals K over Q) that makes the direction a consequence, not a rule to memorise; "Q chases K" shown from below (6.25) and from above (256) ending in the same settled tube; the point that Q = K means equal rates, not equal concentrations; and a disturbance on the settled tube that turns the concentration half of Le Chatelier into a number. The unseen N2 / H2 / NH3 attempt has every condition visible, is built so that forgetting the cube reverses the conclusion, and the feedback names three wrong answers with the exact error behind each. Every number checks. The should-fix items are: "last video" appears twice when c06 is two videos back (the playlist runs c06, c07, g02, c08); the heart of the lesson (forward over reverse equals K over Q) is announced in one sentence without saying why dividing the two rates gives K and Q; scenes 6, 7 and 9 each carry several stages, and the totals sentence in scene 6 is unverifiable by the learner; scene 7's closing sentence and tag say the opposite of what they mean; the log number line is never explained; the 6 second decision is short; the attempt hold and key notes hold are too short; key note 3 presents the K over Q ratio as general; and the attempt's sealed vessel at 400 C has no catalyst so nothing would actually happen.

Scope: AI source review of the script, visual plan, numbers, memory aid check, attempt, length estimate, key notes, author notes and asset brief in `../lessons/chem-m5-c08.md` (revision 2), read as a student starting Year 12 who has watched C1 to C6, c07 and g02 or g01 as the playlist allows (C1 dynamic equilibrium; C2 the flasks and the faster-falls, slower-rises picture, including the PCl5 and products-only starts; C3 the iron and cobalt tubes; C4a and C4b including the H2 + I2 tube 9, 9, 0 settling at 2, 2, 14; C5 the K expression, powers, solids and solvent left out, the rate model forward = 0.05 x [H2][I2], reverse = (0.05 / 49) x [HI]^2, K = 49; C6 the ICE table, the settled tube 0.10, 0.10, 0.70). Playlist order from `module5-video-route-2026-10-10.json`: c06 (8), c07 (9), g02 (10), c08 (11), g03 (12), c09 (13). So between the last video the learner watched on K and this one sit two videos (c07 on the Haber plant and g02 on graphs), and the handoff to g03 is correct. Method: `docs/production/student-learning-review.md` with `teaching-playbook.md` and the AGENTS.md calculation rules (separate task, equation and grouped givens; values with units; one reasoning stage at a time; established results kept; result lines on their spoken cues; every question demand and condition visible during the response). Compared with `c6-learning-review.md` (and its re-review) and the `*-claude-science-check.md` files for slipped patterns. Site extract `site-extracts/chem-m5-l12.md` and `site-corrections.md` (C1, C11, C8 and the lesson 12 cross-reference) checked: the design does not use the site's SO3 examples (270 against 280) or the CO + 3H2 short answer (K = 5.67 x 10^6, real value about 8 x 10^24), keeps K = 49 for H2 + I2 near 450 C (the site's 54.3 belongs near 430 C), and uses K = 0.50 for ammonia at 400 C, which matches the corrected Haber values (Kc about 9.5 at 300 C and about 0.06 at 500 C interpolate to about 0.5 at 400 C). Not learner evidence. No stills, voiced preview or audio inspected. U+2014 search of the design and this file: none. Narration recounted by script: 1,023 words across 13 scenes, matching the design's per-scene counts. Human listening pending.

Main question traced: *given a mixture that has not settled, and the K for that temperature, how can you tell which way it will run before anything changes?* Useful outcome: a student can write Q from the equation, calculate it from supplied concentrations, compare with K at the same temperature, state the direction with a reason, say what Q = K does and does not mean, and say that adding or removing a substance changes Q and not K.

## Arithmetic and claims check

| Item | Check | Result |
| --- | --- | --- |
| Mixture A | 0.50^2 = 0.25; 0.20 x 0.20 = 0.040; Q = 0.25 / 0.040 = 6.25 | correct |
| K / Q for A | 49 / 6.25 = 7.84, "about eight" | correct |
| A settles | x = 0.10: H2 = I2 = 0.10, HI = 0.50 + 0.20 = 0.70; 0.70^2 / (0.10 x 0.10) = 0.49 / 0.010 = 49 | correct; dots 4, 4, 10 to 2, 2, 14 |
| Mixture B | 0.80^2 = 0.64; 0.05 x 0.05 = 0.0025; Q = 0.64 / 0.0025 = 256 | correct |
| K / Q for B | 49 / 256 = 0.1914, "about 0.19"; 256 / 49 = 5.22, "about five times" | correct |
| B settles | y = 0.05: H2 = I2 = 0.10, HI = 0.80 - 0.10 = 0.70 | correct; dots 1, 1, 16 to 2, 2, 14 |
| Same totals | A: 0.20 + 0.50 / 2 = 0.45; B: 0.05 + 0.80 / 2 = 0.45; settled 0.10 + 0.70 / 2 = 0.45; same for iodine | correct, see finding 4 on how it is used |
| Disturbed tube | 0.30, 0.10, 0.70: Q = 0.49 / 0.030 = 16.33, "about sixteen"; 49 / 16.33 = 3.0 exactly; four dots drop in (2 to 6, 0.30 mol/L) | correct |
| Ghost markers | HI to 0.35: 0.1225 / 0.010 = 12.25 (below 49, forward); HI to 1.00: 1.00 / 0.010 = 100 (above 49, reverse) | correct |
| Attempt | 0.20^2 = 0.040; 0.50^3 = 0.125; 0.40 x 0.125 = 0.050; Q = 0.040 / 0.050 = 0.80 > 0.50, so reverse, ammonia falls | correct |
| Attempt wrong answers | Cube left off: 0.040 / (0.40 x 0.50) = 0.20 < 0.50, "more ammonia" (wrong direction). Flipped rule: 0.80 read as "more ammonia" | correct and each matches its stated error |
| Unnamed, likely | Inverted fraction 0.050 / 0.040 = 1.25 (above K, right direction by luck); ammonia not squared 0.20 / 0.050 = 4.0 (above K, right direction, wrong value) | see note 6 |
| K for ammonia at 400 C | Kp about 1.6 x 10^-4 atm^-2 gives Kc = Kp (RT)^2 = 1.6 x 10^-4 x (0.08206 x 673)^2 = about 0.49 L^2 mol^-2; site worked example 1 also uses 0.500 | consistent; Claude science check to confirm the source |
| Pressure of the attempt vessel | 1.10 mol/L x 0.08206 x 673 = about 61 atm | plausible |
| Rate ratio claim | forward / reverse = (k_f [H2][I2]) / (k_r [HI]^2) = (k_f / k_r) x 1 / Q = K / Q, with K = k_f / k_r = 0.05 / (0.05 / 49) = 49 in the C5 model | correct for the C5 teaching model; see finding 8 for generality |
| Direction rule | Q < K forward, Q > K reverse, Q = K no net change, at constant T, same equation as written | correct; Q does not overshoot K in a closed vessel at constant T |

Every number the learner sees is arithmetically right and the dots agree with the numbers. The problems are what the narration leaves unsaid (finding 2), two "last video" references (finding 1), crowding in three scenes (finding 4), one muddled sentence (finding 3) and the holds (findings 6).

## Material findings

| # | Scene | Exact words | Likely student question or problem | Concrete repair | What the repair enables | Severity |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2, 4, 6 | Scene 2: "In the **last video** K always took the settled values." Scene 6: "this tube matches **last video's**". Scene 4 visual tag: "settled tube from last video". | The video just before this one in the playlist is g02 (graph reading), and c07 before that. The ICE table video (c06), where the 0.10, 0.10, 0.70 tube was found, is two videos back. The learner thinks "last video" means g02 and wonders where that tube appeared. | Scene 2: "So far K has always taken the settled values." Scene 6: "this tube matches the one we solved with the ICE table, so it ends in the same place". Scene 4 tag: "settled tube from the ICE table video". Do not name a video by position. | A callback that points to the right video however the playlist is ordered. | should fix |
| 2 | 5 | "Divide the two, and in this model forward over reverse equals **K over Q**. That is forty-nine over 6.25, about **eight**, so the forward reaction runs about eight times faster." Visual: "no rearranging steps are shown"; tags "0.05 / (0.05 / 49) = 49" beside K and the "flipped Q fraction" beside Q. | This is the cause of the whole rule, and the narration only announces it. The student asks: why does dividing a rate by a rate give K over Q? The fixed numbers dividing to give K and the concentrations dividing to give Q upside down are on the screen as tags, but the speech skips them, so the explanation is either read from small tags or taken on trust. c06 flagged the same pattern (a skipped algebra move) as a should-fix. | Narration 5, after "Divide the two": "The two fixed numbers divide to give K. The concentrations divide to give the Q fraction upside down, hydrogen times iodine over hydrogen iodide squared. So forward over reverse is K times one over Q, which is **K over Q**." Then the existing numbers. (+28 words; cut candidates below.) Visual: on "fixed numbers divide" the two fixed-number boxes slide together and the tag "0.05 / (0.05 / 49) = 49 = K" lands; on "upside down" the Q fraction from scene 2 flips with an arrow; then "K / Q" writes. No other algebra. | The direction rule becomes a consequence of the rate model the learner already holds, one clause per move. | should fix |
| 3 | 7 | "Mostly product on the picture does not tell you Q is small. You have to calculate." Visual end tag: "mostly product, but still Q > K". | (a) Mixture B is mostly product and Q is large, so "does not tell you Q is small" and "but still Q > K" suggest that mostly product would be expected to give a small Q, which nobody expects. (b) The real trap is the opposite pairing: the first tube (A) also looks mostly product (10 of 18 dots) yet Q is below K, and the settled tube is mostly product with Q = K. A student takes away "mostly product, so Q is above K". (c) The hold is 6 seconds for a compare-and-decide on Q = 256 against K = 49, shorter than the 10 seconds c06's re-review kept for "find x". | Last two sentences: "The first tube was mostly hydrogen iodide too, yet its Q was below K. Whether there is too much product depends on K, so work out Q and compare." Tag: "mostly product: Q below K (tube A), Q equal K (settled), Q above K (this tube)". Hold about 10 seconds with "pause if you need longer" on the ring. | A correct reason for calculating, and a decision time that matches the skill. | should fix |
| 4 | 6, 7, 8, 9 | Scene 6 (71 words): number line slide, rate bars follow K / Q, dots change, ghost tube, two totals lines, settled values, a check line and the aid. Scene 7 (124 words): the setup, the working, the hold, the answer, the rate ratio, the settle and the closing lesson. Scene 8 (100 words): Q = K, then the PCl5 start, then the products-only start, then the aid. Scene 9 (121 words): add H2, new Q, the rate ratio, removal, addition and K unchanged. | (a) Scene 6: "Counting all its hydrogen and iodine, this tube matches ... so it ends in the same place" asks the student to trust that equal totals plus the same K mean the same settled tube. They cannot check that, and "all its hydrogen" is ambiguous (H2 only, or the hydrogen inside HI as well). The consequence is not needed to teach Q chases K. (b) Scene 7 and scene 9 carry four to six stages each in one breath at 185 wpm with numerals. The AGENTS rule is one reasoning stage at a time. (c) Scene 8 puts three ideas (rates equal, reactants-only, products-only) in one scene. | Scene 6: replace the totals sentence with "...until the two are **equal**. That happens exactly when **Q reaches K**, here at 0.10, 0.10 and 0.70, the settled tube from the ICE table video, where Q is forty-nine. Q chases K." Move the totals line to a quiet tag "same total hydrogen and iodine, same K, same settled tube" for 2 seconds, or to author notes. Scene 7: split into 7a (setup, working, 10 second hold) and 7b (answer, rate ratio, settles, one-sentence lesson from finding 3). Scene 9: split into 9a (settled tube, add H2, new Q, forward) and 9b (removal and addition as one sentence each, "K never changed"). Scene 8: keep as one scene after the cuts in "Length and cuts"; if the preview feels packed, split at "And if a flask holds only reactants". | One reasoning stage per scene and a settle claim that does not need a hidden argument. | should fix |
| 5 | 4, 6, 7, 8, 9, 11 | Visual: "a log number line draws on (ticks 0.1, 1, 10, 100, 1000)". No narration mentions it. | The ticks are equal steps for ten times each. A student starting Year 12 may read 6.25 and 49 as close together or may not see why 1000 is the same distance from 100 as 10 is from 1. The line carries the central comparison, and the attempt later reuses it with K = 0.50 and Q = 0.80. | Scene 4, one clause as the line draws on: "Each tick on this line is ten times the one before, so we can fit small and large numbers on it." (+17 words.) Keep the tag "each tick is 10 times the last" on screen at the first use. | A scale the learner can read, so "Q is left of K" means "Q is smaller". | should fix |
| 6 | 7 (hold), 10 (attempt), 13 (key notes) | Scene 7 hold "about 6 seconds". Attempt hold "about 75 seconds" for: write the expression, cube 0.50, multiply, square 0.20, divide, compare, give a reason. Key notes: five bullets plus an aid, 241 words, hold "about 65 seconds". | Seventy-five seconds for seven small steps with a cube on a calculator-free page is short; c06 moved 80 to 100 for a similar load. 241 words cannot be copied in 65 seconds. | Scene 7 hold 10 seconds (finding 3). Attempt hold about 100 seconds with the countdown and the pause invitation. Key notes hold about 90 seconds. | A fair attempt and notes that can be copied. | should fix |
| 7 | 9 | "Now add 0.20 moles per litre of **hydrogen**, so hydrogen is 0.30." Design open decision: "pending: confirm the 0.20 mol/L hydrogen is added at constant volume (stated on screen)." | A student asks whether adding gas changes the volume. The condition is the one that makes the arithmetic valid (0.10 + 0.20 = 0.30 only if the volume is unchanged). It is a condition whose omission would teach a wrong idea. | Add "in the same sealed tube" to the narration (+5 words) and the tag "same volume, same temperature" on the givens card. | The concentration arithmetic is justified. | should fix |
| 8 | 5, 13 (key note 3), 11 | Key note 3: "Why: in the rate model, forward rate divided by reverse rate equals K divided by Q." Feedback 11: "The reverse reaction is faster and ammonia breaks down." | The ratio K / Q is shown for a one-step model (H2 + I2) with the C5 fixed numbers. A student who copies note 3 will apply it to N2 + 3H2 ⇌ 2NH3, where real rates do not follow the coefficients, and the ratio need not be K / Q. The direction rule is true for every reaction; only the ratio is model-bound. C5 handled the same issue with an honest sentence. | Key note 3: "Why: in a simple model where each rate is a fixed number times the concentrations, forward rate divided by reverse rate equals K divided by Q. Real reactions can have more steps, but the direction rule still holds. As the faster reaction runs, Q moves toward K and stops there. Equal rates do not mean equal concentrations." (+19 words.) Feedback 11 stays: "reverse is faster" describes the net direction, which is general. | A rule that is not mistaken for a law of rates. | should fix |
| 9 | 10 (attempt) | Visual: "coded sealed vessel with a pressure gauge (a plain vessel)", "sealed vessel held at four hundred degrees". No catalyst. | At 400 C without a catalyst, nitrogen and hydrogen barely react at all, as the learner will recall from C4b and the Haber plant video. A student asks whether anything happens in this vessel. The direction question is still fair (Q against K tells the tendency), but a student who has just seen why plants use iron may hesitate. | Narration: "...in a sealed vessel with iron catalyst, held at four hundred degrees Celsius..." (+3 words) and the card line "iron catalyst present". The answer is unchanged. | The scene agrees with the learner's picture of ammonia synthesis. | should fix |

## Notes (no change required to record)

1. **Units of Q and K.** "Q: no unit written" stays on screen for the whole substitution, as in C6. For the ammonia attempt K strictly has units of L^2 mol^-2. Keep the C5 and C6 policy; no spoken sentence.
2. **c07 callback.** c07 precedes c08 in the playlist and teaches condensing ammonia out so the mixture moves forward again. The design leaves this to c07 and g03 (author note h). One optional clause after scene 9 now has a referent: "Condensing ammonia out in the Haber plant lowers Q below K, which restarts the forward reaction." (+16 words, a cut candidate.)
3. **Same totals.** The "same total hydrogen and iodine" device (0.45 each) works and keeps one tube across C4b, C6 and C8. The problem is only how it is spoken (finding 4). If the preview is short of time, keep the two tubes ending in "the same settled tube" and drop the totals.
4. **Spoken numerals.** "0.0025", "0.040" and "0.050" are slow to hear. The design offers "four hundredths" and "twenty-five ten-thousandths" as fallbacks; check in the voiced preview. On screen they are fine.
5. **"Off the scale".** Acceptable for a products-only start. Author note (d) records that Q is undefined there and treated as larger than any K; the learner copy does not need it.
6. **Unnamed wrong answers.** The inverted fraction (1.25) and the ammonia-not-squared value (4.0) both land above K and give the right direction for the wrong reason. The learner is checking value and direction; leave as is, or add after the third wrong answer: "If you got a number above 1 by turning the fraction upside down, check which substance is on top." (+16 words, cut candidate.)
7. **K = 49 and the site's 54.3.** The site's H2 + I2 example uses 54.3 at 430 C. The video uses 49 near 450 C, consistent with K falling as T rises. A student comparing screens sees different temperatures and values; the temperature is in the givens card, which is the right on-screen answer.
8. **Rate bars.** The bar heights follow K / Q on a "made-up rate scale". That is honest, and the tag "in this model" stays.
9. **Equation fidelity.** The note "same equation as written for Q and K" is the right condition. Reversal (Q' = 1 / Q, K' = 1 / K) is deliberately not shown; the design says an optional second attempt item would test it. A single item is fine.
10. **Runtime.** 1,023 words is 5.5 minutes at 185 wpm, plus holds, about 8.2 minutes. The repairs add about 70 words and 50 seconds of holds, so the voiced preview may reach about 9.4 minutes, still inside the range. Number-heavy scenes (3, 7, 9, 11) will run slower than the count suggests.

## Memory aid check

"Q chases K." It holds in every case the lesson shows: Q rises from 6.25 to 49 (tube A), falls from 256 to 49 (tube B), rises from 16.3 to 49 after the added hydrogen, starts at 0 or off the scale at the two ends, and would fall from 0.80 to 0.50 in the attempt. It prevents the flipped-inequality error because the learner points the chase from Q toward K. Assumptions that hold in the lesson and are stated: one balanced equation, the same equation for Q and K, a closed vessel, a constant temperature (K fixed, so the target does not run away), and concentrations in mol/L. Limits to keep in the record: (a) Q approaches K and stops; it does not overshoot, so "chases" does not mean "passes"; (b) if the temperature changes K, the target moves and the aid does not apply until c09; (c) the aid gives direction only, not how far or how fast; (d) reversing the equation flips both numbers and leaves the physical direction unchanged; (e) "Q too small, make more products. Q too big, make more reactants." is correct as a plain reading and is not used as the explanation, which is the rate reason in scene 5. The condition tag "same temperature, same equation as written" is on screen and in the notes. The aid holds for a new case: it predicts the attempt's reverse direction before the arithmetic is finished once the learner knows Q is above K.

## Length and cuts

Claimed 1,023 words (5.5 minutes at 185 wpm), about 8.2 minutes in total. The repairs add about 70 words (finding 1 net 0, 2 +28, 3 net about +5, 4 net about -10 after the totals sentence moves, 5 +17, 7 +5, 8 +19, 9 +3) and the holds grow: scene 7 +4 s, attempt +25 s, key notes +25 s. The total is about 9.4 minutes, inside the 4 to 10 range. If the voiced preview exceeds 10 minutes, cuts that lose no cause, in order: the optional clauses in notes 2 and 6 (not yet added); the last sentence of scene 7 once finding 3's pair of sentences is in; the removal case in scene 9b (it is on screen as a tag); the "if you hesitated because the mixture has not settled" clause in scene 11. Do not cut scenes 2, 3, 5, the attempt or scene 11's two named wrong answers. Re-count after edits and recheck for U+2014.

## Checks against the review questions

| Question | Result |
| --- | --- |
| Cause explained before relied on? | Q defined in plain words before use (2). Direction explained by the rate ratio (5), but the key step is announced, not said (finding 2). Q moves toward K with the faster-falls, slower-rises picture (6). Q = K means equal rates (8). A disturbance changes Q, not K (9). |
| Terms given plain meanings? | Reaction quotient: yes ("the K fraction with the numbers from now"). "Not settled": yes. "Too much product for this temperature": yes. "Off the scale": spoken, picture shows it. The log line: not explained (finding 5). |
| Current step on screen without competing text? | Scenes 2, 3, 4, 5 and 11 are clean. Scenes 6, 7, 8 and 9 stack stages (finding 4). |
| Worked example one stage at a time? | Mixture A: yes, one stage per scene (givens, definition, calculation, comparison, rate reason, movement). Task, equation and grouped givens stay in their zones; values carry mol/L in the givens card; "Q: no unit written" stays on screen; results land on their words. Mixture B is compact. |
| Fair attempt? | Unseen system, every condition visible, both demands visible, nothing answer-bearing on screen, a trap that reverses the conclusion if the cube is dropped. Hold too short (finding 6), and the vessel lacks a catalyst (finding 9). |
| Feedback names the likely wrong answers? | Yes: 0.20 (cube left off, reads as "more ammonia"), 0.80 read as "more ammonia" (rule flipped), and the "not settled" hesitation. Each with its cause on the board. |
| Key notes a small useful set? | Five bullets and one aid with conditions in place; too many words for the hold (finding 6); note 3 overstates (finding 8). |
| Memory aid correct under its assumptions? | Yes (see above). |
| Narration and visuals agree? | Dots, bars, markers and numbers agree throughout. The scene 7 tag contradicts the point (finding 3). |
| Em dashes, plain subject-action sentences, no noun chains? | No em dashes. Plain subject-action throughout. |
| Re-teaching? | No. The K expression and powers, the rate model, the faster-falls picture, the PCl5 flasks and the settled tube are recalled in a clause. The ICE table is not repeated. |
| Production words and playlist order? | "Last video" appears twice (finding 1). "The expressions video" and "the flask videos" are content names and fine. The handoff to g03 matches the route. |
| Site errors repeated? | None. The SO3 270 / 280, the CO + 3H2 5.67 x 10^6 and the Haber 977 / 0.013 values are not used. |

## Key notes (suggested wording)

1. The reaction quotient, Q, is the equilibrium expression worked out with the concentrations at any moment: products over reactants, each concentration raised to the power of its coefficient, with solids and the solvent left out. K uses settled values only. At equilibrium Q equals K.
2. Compare Q with K for the same equation, written the same way, at the same temperature. Q below K: too little product, the forward reaction is faster and the mixture runs right. Q above K: too much product, the reverse reaction is faster and the mixture runs left. Q equals K: equal rates, no net change.
3. Why: in a simple model where each rate is a fixed number times the concentrations, forward rate divided by reverse rate equals K divided by Q. Real reactions can have more steps, but the direction rule still holds. As the faster reaction runs, Q moves toward K and stops there. Equal rates do not mean equal concentrations.
4. Adding or removing a substance (at the same volume and temperature) changes Q, not K. Only temperature changes K (a later video). Q gives the direction only, not how far or how fast.
5. Method: write the expression, find the concentrations now, calculate Q, compare with K, state the direction with the reason.

Aid (large): *Q chases K.* Second line: *Q too small, make more products. Q too big, make more reactants.* Tag: "same temperature, same equation as written."

## Strengths to keep

- The hook: the familiar hot tube with a mixture that has not settled, and the question "can we know before anything moves".
- Q defined as the K fraction with the numbers from now, with the plain meaning on screen.
- The two worked mixtures ending in the same settled tube, so Q chases K from both sides and the tube from C4b and C6 is reused.
- The disturbance on the settled tube: a numeric reason for the concentration half of Le Chatelier, and "K never changed".
- The attempt: unseen, with a cube, every condition visible, built so a dropped power flips the conclusion.
- Feedback that names the wrong answers with the number each produces.
- Honest scope: no how-far, no ICE table, no quadratic, no temperature dependence, no Qsp.

## Answers to the author's open decisions (learning view only)

- **Rate-ratio derivation (scene 5):** keep the shortened version but say the two moves in speech (finding 2).
- **Same-destination device:** keep; fix how it is spoken (finding 4).
- **Units of Q and K:** omit, with the tag on screen for the whole substitution.
- **Scene 9:** keep, and state "same volume, same temperature" on screen (finding 7).
- **Handoff:** g03 is correct against the route.
- **Single attempt:** keep one item. A reversed-equation item can wait for g03.
- **Response in scene 7:** keep, at 10 seconds (finding 3).
- **Length:** inside the range after the repairs.
- **Pending Claude science check:** unchanged. The learning review adds only the catalyst in the attempt (finding 9).

## Verdict

**Pass.** No blockers. Apply findings 1 to 9 in the script lock pass; findings 2, 3 and 4 change scenes most (the spoken rate-ratio moves, the scene 7 closing sentence and tag, and the splits of scenes 7 and 9). Then re-review the voiced preview for scenes 2, 5, 6, 7a, 7b, 9a, 9b, the attempt, the feedback and the total length. Human listening pending.

## Re-review checklist (for the next revision)

- Do scene 2, scene 4's tag and scene 6 avoid "last video" and point to the ICE table video by content?
- Does scene 5 say that the two fixed numbers divide to give K and that the concentrations divide to give Q upside down, with one visual beat each?
- Does scene 7 give the correct reason for calculating (the first tube was also mostly product with Q below K), and is the hold about 10 seconds with the ring?
- Are scenes 7 and 9 split, and is the totals argument in scene 6 a quiet tag or cut?
- Is the log line explained in one clause at first use?
- Is the attempt hold about 100 seconds, the key notes hold about 90 seconds, and does the attempt card show an iron catalyst?
- Do key note 3 and scene 9 carry their conditions ("simple model", "same volume and temperature")?
- Recount the narration after edits and recheck for U+2014.


## Re-review

Independent re-review of `../lessons/chem-m5-c08.md` revision 3, 12 October 2026, by a fresh reviewer (not the design author, not the first reviewer). Read as a student starting Year 12 who has watched chem-m5-c01 to c07 and g01 (playlist order c06, c07, g02 or g01, then c08), against `docs/production/student-learning-review.md`, `teaching-playbook.md` and the AGENTS.md calculation rules. Source review of the script and visual plan only. No stills, voiced preview or audio inspected. No em dash (U+2014) in the design or in this section. Human listening pending.

**Verdict: pass. No blockers.** All nine earlier should-fix items are resolved in the text. Two small should-fix items remain (one causal link, and runtime cuts), plus notes.

### Earlier SHOULD FIX items

| # | Status | Fixing line in revision 3 |
| --- | --- | --- |
| 1 "last video" | resolved | Scene 2: "So far K has always taken the settled values." Scene 6: "the settled tube from the ICE table video". Scene 4 tag: "settled tube from the ICE table video". No video named by position. |
| 2 rate-ratio moves spoken | resolved | Scene 5: "Divide the two. The two fixed numbers divide to give K. The concentrations divide to give the Q fraction upside down ... So in this model forward over reverse is K times one over Q, which is K over Q." One visual beat per move. |
| 3 scene 7 reason and hold | resolved | Scene 7b: "The first tube was mostly hydrogen iodide too, yet its Q was below K. Whether there is too much product depends on K, so work out Q and compare." Tag "mostly product: Q below K (first tube), Q equal K (settled tube), Q above K (this tube)". Hold about 10 seconds with the ring. |
| 4 crowded scenes | resolved | Scene 6 totals sentence removed from speech (quiet 2 second tag only). Scene 7 split into 7a and 7b, scene 9 into 9a and 9b. Scene 8 stays one scene at 100 words (see note 2). |
| 5 log line | resolved | Scene 4: "Each tick on this line is ten times the one before, so small and large numbers fit on it." plus the on-screen tag and the hop arrows. |
| 6 holds | resolved | 7a about 10 s, attempt about 100 s, key notes about 90 s. |
| 7 constant volume | resolved | Scene 9a: "in the same sealed tube, add 0.20 moles per litre"; tag "same volume, same temperature". |
| 8 key note 3 generality | resolved | Key note 3: "in a simple model where each rate is a fixed number times the concentrations ... Real reactions can have more steps, but the direction rule still holds." |
| 9 catalyst | resolved | Scene 10: "sealed vessel with an iron catalyst, held at four hundred degrees Celsius"; card line "sealed vessel, iron catalyst present, constant temperature". |

### Fresh pass

Traced mixture A from the hook (more HI or less, and can we know before anything moves) through definition, three-beat calculation, comparison on the log line, rate reason, Q climbing to 49, then mixture B from above, the Q = K and two-ends scene, the disturbed settled tube, the unseen ammonia attempt and feedback. The causal chain holds and the revision did not introduce a blocker. Task, equation and grouped givens with units stay in their zones, results land on their words, the attempt keeps every condition and both demands visible, and the feedback names the cube and flipped-rule errors with their numbers.

**BLOCKER**

None.

**SHOULD FIX**

1. Scene 6, "until the two are equal. That happens exactly when Q reaches K". The learner has just met forward over reverse equals K over Q in scene 5, but scene 6 never says why equal rates mean Q = K. Likely question: "why exactly at K?" Repair: add "because K over Q is then one" after "equal" (6 words). The loop closes on the scene 5 result with no new idea.
2. Runtime. Design count is 1,088 words (5.9 minutes at 185 wpm) plus holds of about 214 seconds (100 + 90 + 10 + about 14), about 9.45 minutes before the slower spoken numerals (0.040, 0.0025, 0.050, 0.64, 16.3). The voiced preview can reach 9.8 to 10.0, at the limit. Apply the cuts below before recording and re-count.

**Proposed cuts (about 37 words, plus 6 for should-fix 1, net about -31)**

- Scene 11, last sentence, "And if you hesitated because the mixture has not settled, those values are exactly what Q needs." (17 words). Scene 2 already says "settled or not"; keep the third chip on screen as a caption.
- Scene 8, last sentence, "The habit is the same every time: Q chases K." (9 words). The aid is spoken in scene 6 and written across the line on screen here.
- Scene 1, "We could wait and watch, but there is a way to know" becomes "There is a way to know" (6 words).
- Scene 4, "The rates will tell us." (5 words). Scene 5 opens with the rate model, which is the answer.
- Reserve if still long: scene 9b first sentence (20 words; the ghost markers stay as tags).

None removes a cause. Do not cut scenes 2, 3, 5, 6, 10 or the two named wrong answers in 11.

**NOTE**

1. Scene 7a hold: the Q marker (256) sits right of the K marker during the 10 second decision. The student must still choose the direction, so it is acceptable, but the visual does half the comparison. Option: show the Q marker only after the hold. Not required.
2. Scene 8 packs three ideas in 100 words (Q = K means equal rates, pure reactants, products only). Acceptable with the thumbnails; split at "And if a flask holds only reactants" if the preview feels dense.
3. Housekeeping in the design file, not learner copy: the Status line repeats "Unrecorded" and lists review steps already done; the length section still mentions "0.059" and a 9.6 minute ceiling; the open-decisions "Length" bullet says "7 to 9 minutes". Tidy at script lock.
4. Handoff names g03, which the route lists at playlist order 12, so it is correct. Change the line and chip if c09 runs first.
5. The tags "made-up rate scale" and "in this model" are real conditions, not filler. Keep.
6. Unnamed wrong answers (inverted fraction 1.25, ammonia not squared 4.0) still land above K by luck. Leave.

**Verdict: pass.** Apply should-fix 1 and the cuts in the script lock, recount, then re-review the voiced preview (scenes 5, 6, 7a, 7b, 9a, the attempt, the feedback and total length). Human listening pending.
