# C4a learning review: squeezing a gas mixture at equilibrium

**Verdict: pass after blockers.** One blocker, eleven should-fix items and several notes. The structure is strong: one syringe system carried through hook, worked example, graphs and rule; a cause for the direction (every gas twice as crowded, the reaction that needs two particles to meet gains twice over) before the counting rule; a derived 32 to 128 and 64 comparison; an equal-count case and a solid case that stop "pressure always shifts right"; an argon contrast that separates total pressure from crowding; an unseen attempt that deliberately breaks the worked example's colour pattern. The blocker is in the attempt: the model answer depends on a condition that the lesson's own hook contradicts. The should-fix items are mostly derivation gaps, a mnemonic whose wording and condition tag disagree with the scene it summarises, and notes that drop the syllabus wording.

Scope: AI source review of the script, visual plan, memory aid check, attempt, length estimate and key notes in `../lessons/chem-m5-c04a.md` (revision 1), read as a student starting Year 12 who has watched C1 (dynamic equilibrium, closed system, sealed soda bottle), C2 (forward and reverse rates, made-up scale, "the faster rate falls, the slower rate rises, they meet and stay level"), possibly G01, and C3 (two beats "the moment of the change" and "the response", partial cancelling, shift, brown NO2 changes at once when NO2 is touched, cooling and heating). Year 11 pressure as particles hitting walls is assumed. Method: `docs/production/student-learning-review.md` with `teaching-playbook.md`. Site extract `chem-m5-l06.md` checked (ideas 1 to 4). Compared with `chem-m5-c01.md`, `chem-m5-c02.md`, `chem-m5-c03.md`, the C3 and B2c reviews, the C1, C2, G01 and B2b checks for slipped patterns, and the memory-aid bank entries "Squeeze it and it makes fewer gas moles" and "Inert gas at constant volume does nothing". Not learner evidence. No stills, voiced preview or audio inspected. Science (iodine and HI colours, the 2NO + O2 attempt temperature, second-order claims) stays with Codex. The rate model arithmetic was recomputed by hand (below). U+2014 search of the lesson and this file: none. Narration recounted by script: 1,279 words, matching the design's per-scene counts. No production code is spoken ("the iron tube" and "the earlier flasks" name the thing). Human listening pending.

Main question traced: *a gas mixture at equilibrium is squeezed; which way does it go, why, and does every rise in pressure do the same thing?* Useful outcome: a student can say what a squeeze does to every concentration at the moment of the change, which reaction gains more and why, which way the net reaction runs, what the colour does, how to count gas particles in a new equation (gases only, equal means no shift), and why argon added in a fixed box changes nothing.

## Arithmetic check (forward = 0.5 [NO2]^2, reverse = 8 [N2O4])

| Stage | NO2, N2O4 | Forward | Reverse | Gap | Result |
| --- | --- | --- | --- | --- | --- |
| Equilibrium | 8, 4 | 0.5 x 64 = 32 | 8 x 4 = 32 | 0 | correct |
| Volume halved | 16, 8 | 0.5 x 256 = 128 (32 x 2 x 2) | 8 x 8 = 64 (32 x 2) | 64 | correct |
| One step later | 14, 9 | 0.5 x 196 = 98 | 8 x 9 = 72 | 26 | correct; one joining event removes 2 NO2 and makes 1 N2O4 |
| New equilibrium | n and d with n + 2d = 32 and d = n^2/16 | n^2 + 8n - 256 = 0, n = 12.49, d = 9.75 | 8 x 9.75 = 78.0 | 0 | correct; 0.5 x 156 = 78 |
| K check | 4 / 8^2 = 1/16 before; 9.75 / 12.49^2 = 1/16 after | | | | consistent, so the concentrations are a real equilibrium of one rate model |
| Colour claim | new NO2 between 8 and 16 | | | | correct for any K > 0 (f(n) = n + 2Kn^2 is increasing; f(8) is below and f(16) above the conserved total of 32 units) |
| Attempt direction | Q after halving = K / 2 for 2NO + O2 ⇌ 2NO2 | | | | shifts right, NO2 ends above double its start, so "darkens, then darkens further" is right for a hot cylinder (finding 1) |
| Expansion mirror (not in the design) | halve concentrations | 32 / 4 = 8 | 32 / 2 = 16 | | reverse wins, so the shift goes toward more particles (finding 10) |

All the numbers the learner sees are consistent. Presentation problems with them are findings 2 and 3.

## Material findings

| # | Scene | Exact words | Likely student question or problem | Concrete repair | What the repair enables | Severity |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 9, 10 | "colourless N O and colourless oxygen are in equilibrium with brown N O two ... The temperature stays steady." Feedback: "then keeps darkening as more N O two forms. This time the brown does not fade." | The hook has just shown brown N O two at room temperature sitting in a second equilibrium with N two O four, and the lesson says squeezing that pair makes the brown fade. The cylinder in the attempt also contains N O two at "a steady temperature", with nothing saying it does not join to make N two O four. A student who carries the lesson's own system into the attempt can argue that part of the new N O two is mopped up and the brown fades. The model answer ("keeps darkening") is only true if the N O two stays as single molecules, a condition that is not stated, so a correct bright student is marked wrong. This is an answer that depends on an unstated condition. | Attempt narration after "The temperature stays steady": "The cylinder is hot, so the N O two stays as single molecules and does not join to make N two O four." (+17 words.) Add the chip "hot cylinder: no N two O four" to the vignette and the feedback board. Feedback one, after "The colour darkens at once": "...and then keeps darkening as more N O two forms, because here nothing mops it up." Codex to confirm a temperature at which N2O4 is negligible and 2NO + O2 ⇌ 2NO2 still has all three gases present. If that temperature cannot be stated plainly, swap to a system whose coloured gas has no second equilibrium. | A fair attempt whose colour answer follows only from the taught counting and crowding steps, and a model answer that cannot be challenged with the lesson's own example. | **BLOCKER** |
| 2 | 3a, 3b | "A little later, joining is ninety-eight and splitting is seventy-two" and "at about seventy-eight". | Where do 98 and 72 come from? The dials move to 14 and 9 on screen but nothing says so, and the rates are not linked to them. The 128 and 64 were derived aloud (32 x 2 x 2, 32 x 2); the next two numbers appear from nowhere. C3's review required 51 and 18 to be derived for the same reason. A careful student cannot rebuild a squared rate from counts they were never told. | 3a: "One joining step later, N O two has fallen to fourteen and N two O four has risen to nine. Joining depends on the N O two count twice over, so it slows from one hundred and twenty-eight to ninety-eight. Splitting depends on the N two O four count once, so it rises from sixty-four to seventy-two." (+14 words.) Visual: "128 x 14/16 x 14/16 = 98" and "64 x 9/8 = 72" under the bars, on their words (both also equal 32 x 14/8 x 14/8 and 32 x 9/4 from equilibrium). Keep "about seventy-eight" as a settled value shown with the "about" tag (it needs a quadratic and is rightly not derived). | Each rate has a visible cause and the worked stages can be rebuilt, in the same form as 2b and C3. | should fix |
| 3 | 2b | 108 words: halving the volume, both concentrations double with two pairs of numbers, the brown darkens, then two rate derivations with two multiplications each and a "gains more" conclusion. | Two reasoning stages in one scene and six numbers (16, 8, 32, 128, 64 plus the starting 8 and 4 for context). A student has to keep "everything doubles" and "two particles must meet" together while the bars animate. The C3 reviews split exactly this pattern. | Split. 2b "the squeeze doubles every concentration": "Now we halve the volume ... the brown is already darker, because N O two is the brown gas." (about 52 words). Hold for a beat with the table row "just after squeezing: 16, 8". 2c "joining gains more": "Now the rates. Joining needs two N O two to meet..." to "joining gains more." (about 56 words). No words added. | One idea per scene: crowding first, then what it does to each rate. | should fix |
| 4 | 8, 12 | Aid: "Argon in a fixed box does nothing." Condition tag: "gases only, temperature steady, volume changed by the squeeze". | Two problems. (a) "Does nothing at all" is false in the lesson's own words: scene 7 says the argon raises the total pressure and the gauge goes from 1 to 2. A student copying the aid has a sentence that the lesson itself contradicts. (b) The tag says "volume changed by the squeeze", which is the opposite condition from the argon line in the same box ("fixed"). The design's Decisions say the tag carries "fixed volume", but the scene 8 and notes tags do not. A student reading tag and aid together sees contradictory conditions. | Aid: "Squeeze it and the shift goes to fewer gas particles. Argon in a fixed box does not shift it." Tag: "gases only, temperature steady. Squeeze: volume changes. Argon: volume fixed." Narration scene 8: "Argon added in a fixed box does not shift the equilibrium." Memory aid check: record that "does nothing" in the bank means "does nothing to the equilibrium" and is true only for a fixed volume, a steady temperature and no reacting gas added or removed. | An aid that is true as written, with each half carrying its own condition. | should fix |
| 5 | 2b, 3a (visual), 7 | Gauge "total pressure (relative)" rises from 1 to 2 on "halve the volume" in 2b, flashes down in 3a, and returns in 7. Scene 7: "Pressure can also rise without any squeeze." Closing: "So pressure itself is not the cause. Crowding is." | (a) The main question is about pressure, yet the narration never says that squeezing raises pressure, so the gauge in 2b and 3a is an unexplained element competing with the worked example. (b) "Pressure itself is not the cause" will be read as "pressure does not matter", contradicting every exam stem that says "the pressure is increased" and the site's own key terms. The sentence needs "total", and the student needs the bridge from the exam phrase to the lesson. | Delete the gauge from 2b and 3a (it carries no spoken cue there). Scene 7, new first sentences: "A squeeze raises the total pressure, because the crowded particles hit the walls more often. But pressure can also rise without any squeeze." (+14 words.) Closing: "So total pressure by itself is not the cause. Crowding of the reacting gases is." (+2.) Scene 11 keeps its first sentence, which already connects "a question that changes the pressure" to "did the reacting gases get more or less crowded". | The link between "squeeze" and "increase the pressure" is stated once where it is used, and the argon contrast is not read as "pressure is irrelevant". | should fix |
| 6 | 5, 12 (notes) | "gas particles" throughout; the syllabus gloss "moles of gas" appears once, unspoken, on screen in scene 5, and not in the notes. | The site, the syllabus and every exam stem say "moles of gas". A student who copies the notes writes "gas particles" and then has to translate on exam day. The gloss as designed is a two-second flash nobody hears. | Say it once: scene 5, after the rule: "Chemists say moles of gas. It is the same count: the numbers in front of the gases in the balanced equation." (+19 words; offset by finding 12 cuts.) Notes 1 and 2: "...the side with fewer gas particles (fewer moles of gas)". | Students leave with the exam wording and know it means the coefficients. | should fix |
| 7 | 6 | 105 words: the hydrogen iodide case with its two derived factors, then solids and liquids, then carbon with carbon dioxide and its count. "Solids and liquids do not count." Notes: "Solids and liquids do not count." | (a) Two cases in one scene, each with its own equation and bars. (b) The reason is given for solids ("squeezing does not make them any more crowded") and the example is a solid, but "liquids" is asserted for a lesson whose first video used soda water, where a dissolved gas counts. A student can ask whether water or an aqueous ion counts. | Split into 6a (equal counts, up to "nothing shifts") and 6b (solids). 6b: "Pure solids and pure liquids do not count, because squeezing does not make them any more crowded." Notes: "Pure solids and pure liquids do not count. Only gases are counted." Optional derivation for the carbon case, using the same method as 2c (+20 words): "Joining needs one carbon dioxide to meet the solid, so it doubles. Splitting needs two carbon monoxide to meet, so it goes up four times. Splitting gains more, so the shift is left." | One case per scene, a scoped statement about liquids and a derived direction for the solid case. | should fix |
| 8 | 9, 10, 11 | "colourless N O and colourless oxygen"; "N O, oxygen and N O two". | The design flags "N O" as heard as "no", but the narration never says the name. A student meets a new species with a spoken name that sounds like a refusal ("colourless no and colourless oxygen"). | Scene 9: "colourless nitric oxide, N O, and colourless oxygen". Scene 10: "nitric oxide, oxygen and nitrogen dioxide". (+3 words.) Listen in the voiced preview. | The new reactant is named once in words, and the spoken form is unambiguous. | should fix |
| 9 | 12 | Key notes: about 190 words in five bullets plus the aid, against a stated "about 30 seconds". | A student copying five full-sentence notes plus an aid needs about 60 seconds. Note 3 and the aid repeat each other, and note 1 and 2 repeat scene 5. | Hold about 60 seconds (total about 9.3 minutes, still under 10). Suggested wording below. | Notes the student can finish copying, with conditions on every rule. | should fix |
| 10 | 5 | "A squeeze hits hardest the reaction that uses more gas particles." "Because it needs more gas particles to meet." "Expanding does the opposite: the reaction that uses more particles slows more." | (a) "Hits hardest" is a label, not a subject-action sentence about what the squeeze does. (b) "Needs more gas particles to meet" is true of the syringe, where two N O two really do meet, but applied to nitrogen plus three hydrogen it invites a picture of four particles colliding at once, which is not how that reaction happens. The rule is right (the author note on mechanism independence), the picture is not. (c) The expansion claim has no evidence on screen. | Rule: "A squeeze speeds up most the reaction that depends on more gas particles, so the shift goes toward the side with fewer gas particles." Ammonia: keep the schematic counts "four to two" with no collision picture, and say "the forward reaction depends on more gas particles, so it gains more". Expansion, visual only: pull the plunger out, bars read "joining 32 to 8, splitting 32 to 16", reverse wins, arrow left (this is the halving mirror with no new words). | A subject-action rule that is true for every equation shown, and an expansion claim that is demonstrated rather than stated. | should fix |
| 11 | 10 | 178 words for two items; includes three wrong-answer sentences. | The longest scene; item one carries six steps (count, doubling, gains more, direction, colour at once, colour later) before any wrong answer. The third wrong-answer sentence ("shifts toward more gas particles") cuts into the replay time. | Split into 10a (item one) and 10b (item two) so each replay starts on its own cue. Move the third wrong-answer sentence to the on-screen chip only (-22 words, as the author offered). | Each answer is heard and replayed in its own beat, and the likeliest wrong answers are still named. | should fix |
| 12 | 8, 4 | Scene 8 (67 words) repeats scene 5's rule and scene 6's conditions; scene 4 opens "Here are the graphs." | The rule is stated in scene 5, again in 8, again in 11 and again in the notes. Trimming 8 loses no cause. | Scene 8: "Here is a shortcut for the direction. Squeeze it, and the shift goes toward fewer gas particles. Argon added in a fixed box does not shift it. It gives the direction only. The reason is still how crowded each reacting gas becomes." (about 42 words, -25.) Scene 4: delete "Here are the graphs." (-4). | Shorter repetition with the argon condition kept, and room for findings 2, 5, 6 and 7. | should fix |

## Notes (no change required to record)

- **Orientation flip from C3:** C3's attempt wrote N two O four ⇌ 2 N O two with forward endothermic; C4a writes 2 N O two ⇌ N two O four with forward = joining. Scene 2a defines forward and reverse aloud, so this is covered. Keep the on-screen tags "forward = joining" and "reverse = splitting" on the equation chip in 2a, because the colours (forward blue, reverse amber) now point at the opposite chemical change from the one a C3 viewer last saw.
- **"Let it return to room temperature" (hook):** a student will ask why the plunger case needs it. The cause (real compression warms the gas and the forward reaction gives out heat) is in the author notes only. If the preview raises the question, one clause is enough: "so the temperature stays steady". Keep it out of the learner copy otherwise (a caveat that does not change the answer).
- **"the earlier flasks" (2a):** names no video. "like the flask" or "like the sealed flask" matches C3's practice. Free edit.
- **Hook gives the whole result up front** ("darkens at once, then slowly fades a little, and it settles darker"). That is acceptable because the lesson then explains each part, and it matches C3's reveal-then-explain pattern. Keep "So why darker, why the fade, and does every rise in pressure do this?" as the three questions the scenes answer in order (2b, 3a to 3b, 7).
- **Ammonia visual:** keep the four-to-two icons schematic (finding 10). Do not draw one collision of four particles.
- **Hydrogen iodide case:** the claim that both rates rise four times assumes the school rate laws k[H2][I2] and k'[HI]^2. Codex is already asked about iodine and HI colours at a hot temperature; also confirm the school-level second-order claim is acceptable for a learner who may later meet the real mechanism.
- **Equal-count scene colour:** the purple deepens once and stays. State it in one clause on the card ("darker, but no shift") so the colour cue is not read as a fade.
- **Feedback item two:** "the colour stays the same" is true of the colour after the argon. Fine; keep the gauge reaching 2 in the replay as the visible reason a student might wrongly expect a shift.
- **Scene 7 argon source:** "pump in argon" into a locked syringe needs an inlet. The coded vignette can show a small valve or a second cylinder; no narration change.
- **Reading holds:** the aid scene and the decision scene each need a short hold (about 3 seconds) after the last word. Keep them in the preview timing.

## Memory aid check

Aid as designed: "Squeeze it and the shift goes to fewer gas particles. Argon in a fixed box does nothing." Under its assumptions (a sealed gas mixture at equilibrium, temperature steady, volume changed by compression or expansion, count only gases from the balanced equation, equal counts mean no shift, direction only, school ideal gas model) the first sentence gives the right direction for every case in the lesson: 2NO2 to N2O4 (right), nitrogen with hydrogen (right), expansion of ammonia (left), H2 + I2 (none), C(s) + CO2 (left), 2NO + O2 (right). It does not predict the colour at an instant, which the separate colour note covers. The second sentence is true only if the volume is fixed, the temperature is steady, no reacting gas is added or removed and the mixture behaves ideally. It says "fixed box", which states the key condition, but "does nothing at all" is false for the total pressure and the tag contradicts it (finding 4). With the reworded aid ("does not shift it") and a split tag it is correct. Do not offer the aid for adding a reacting gas in a fixed box (a concentration disturbance), argon at constant pressure (the volume grows), a mixture with no gas, a temperature change, a catalyst, or when the question asks for the size of the shift. Reword is already applied from the bank: "makes fewer gas moles" becomes "the shift goes to fewer gas particles", which is correct because the squeeze does not react the gas, the shift does. The aid does not need to be re-checked against the attempt: both items use it and both answers follow once finding 1 fixes the colour condition.

## Length and cuts

Claimed narration 1,279 words, about 6.9 minutes at 185 wpm, about 8.8 minutes in total. The repairs add about 75 words (finding 1 +17, 2 +14, 5 +16, 6 +19, 7 up to +20 if the optional derivation is used, 8 +3, 10 +10) and remove about 51 (finding 11 -22, 12 -29). Net about 1,305 words (7.1 minutes). With the key notes hold lengthened by 30 seconds (finding 9) the total is about 9.3 minutes. Inside the 5 to 10 minute range and the stated 7 to 9 target only if the optional carbon derivation is dropped (then about 9.0). Cuts that lose no cause, in order: scene 8 (-25), scene 10 third wrong-answer sentence (-22), scene 4 "Here are the graphs." (-4). If the voiced preview still runs long, shorten the scene 11 handoff ("Next: adding a catalyst.") and the scene 7 caption chip before touching scenes 2b, 2c, 3a, 9 or 10.

## Checks against the review questions

| Question | Result |
| --- | --- |
| Cause explained before relied on? | Direction yes (2b, 3a, 3b before the rule in 5). Rates after the squeeze: 128 and 64 derived, 98 and 72 not (finding 2). Rule for any equation is stated after the cause. Expansion asserted (finding 10). |
| Terms given plain meanings? | Concentration, joining, splitting, shift, inert gas, equilibrium position yes. "Moles of gas" gloss is unspoken (finding 6). "Total pressure" is used before it is linked to squeezing (finding 5). "N O" is not named (finding 8). |
| Current step on screen without competing text? | 2b mixes crowding and rates (finding 3). The unexplained gauge in 2b and 3a competes (finding 5). Scene 6 has two cases (finding 7). Last-two-rows rule kept. |
| Worked example one stage at a time? | Yes in outline: equilibrium, moment of the squeeze, a little later, new equilibrium; results on cues; "about" values as tags. Two stages in 2b (finding 3); 98 and 72 not derived (finding 2). |
| Fair attempt? | Unseen system, two items, every demand visible, nothing answer-bearing in the visual plan. Model answer depends on an unstated temperature condition (finding 1). 60 second hold is adequate for two items. |
| Feedback names the likely wrong answers? | Yes: "pressure doubled, so it shifts right", "the brown always fades", "shifts toward more gas particles". Long (finding 11). |
| Key notes a small useful set? | Five bullets plus the aid, about 190 words. Notes drop "moles of gas" and say "solids and liquids" without "pure" (findings 6, 7, 9). |
| Memory aid correct under its assumptions? | Yes after finding 4. |
| Narration and visuals agree? | Mostly. Tag contradicts the argon line (finding 4); the gauge appears before it is explained (finding 5). |
| Em dashes, plain subject-action sentences, no noun chains? | No em dashes. "A squeeze hits hardest the reaction..." is the one label-like sentence (finding 10). |

## Key notes (suggested wording)

1. Squeezing a gas mixture at a steady temperature makes every gas more crowded at once. The reaction that depends on more gas particles gains more, so the shift goes toward the side with fewer gas particles (fewer moles of gas). Expanding does the opposite.
2. Count only gases, using the numbers in the balanced equation. If both sides have the same number of gas particles, changing the volume causes no shift. Pure solids and pure liquids do not count.
3. A squeeze shows up in two steps: every concentration changes at once, then the net reaction runs until the rates match. It only partly cancels the change.
4. The coloured gas darkens at once when squeezed. After that it fades if the shift uses it up, or darkens further if the shift makes it.
5. Adding an inert gas in a fixed volume raises the total pressure but changes no reacting concentration, so no rate changes and nothing shifts.

Aid (large): *Squeeze it and the shift goes to fewer gas particles. Argon in a fixed box does not shift it.* Tag: "gases only, temperature steady. Squeeze: volume changes. Argon: volume fixed."

## Strengths to keep

- One syringe system from hook to graphs to rule, with the colour as evidence in both beats.
- A derived rate comparison (32 x 2 x 2 against 32 x 2) instead of an asserted "joining gains more", and a table that keeps the last two rows.
- The new equilibrium rates about 78 (higher because everything is more crowded) and the colour "between the start and the instant", with the algebra holding for every K greater than zero.
- The counting rule stated only after the cause, then tested on an equal case and a solid case that give different answers.
- The argon contrast built as a split screen where total pressure rises equally and only the squeeze crowds the reacting gases.
- An attempt on an unseen system whose colour answer differs from the worked example, so copying fails, with feedback that names the three likely wrong answers.
- K, Q, constant-pressure argon, temperature and catalysts kept out of the prediction.

## Answers to the author's open decisions (learning view only)

- **Multi-step reactions:** the learner copy is safe if it never says "needs four particles to meet" for the ammonia case (finding 10). The direction result is mechanism independent, as the author note says; the lesson states no factor for ammonia.
- **Scenes 5 and 6 too dense:** scene 5 is acceptable as one scene after finding 10 and the 19-word gloss; scene 6 should split (finding 7).
- **Painted versus coded syringe:** coded is acceptable for the learning, provided the two-beat colour changes read on a pale barrel. Not a learning issue.
- **H2 + I2 versus H2 + Cl2:** keep H2 + I2 for visible evidence. Codex confirms the colours and temperature.

## Verdict

**Pass after blockers.** Fix finding 1 before recording (state the hot-cylinder condition or change the system). Findings 2 to 12 are narration, visual and note edits for the same script lock pass; findings 2, 3, 5 and 7 change scenes most (derive 98 and 72, split 2b and 6, move the gauge to scene 7). Then re-review the voiced preview for scenes 2b, 2c, 3a, 7, 9, 10a and 10b and the attempt timing.

## Re-review checklist (for the next revision)

- Does the attempt narration and board state the hot cylinder (or a replacement system without a second equilibrium), and does feedback one still say the brown keeps darkening?
- Do 98 and 72 each appear with their counts (14 and 9) and a derivation on screen and aloud?
- Is 2b split into the crowding scene and the rates scene, and 6 into equal counts and solids?
- Is the gauge gone from 2b and 3a, introduced in scene 7 after "A squeeze raises the total pressure", and does the closing say "total pressure by itself"?
- Is "moles of gas" spoken once and in notes 1 and 2, and "pure solids and pure liquids" in note 2?
- Does the aid say "does not shift it", and does the tag carry "Squeeze: volume changes. Argon: volume fixed."?
- Is "nitric oxide" said at its first mention in scene 9?
- Does the rule sentence in scene 5 use "depends on more gas particles", with no collision picture of four particles, and does the expansion visual show 32 to 8 and 32 to 16?
- Is the notes hold about 60 seconds? Recount the narration after edits and recheck for U+2014.

A "Revision 2 re-review" section follows here once the revised design exists.

## Re-review (12 Oct)

Scope: fresh independent AI source review of `../lessons/chem-m5-c04a.md` (revision 2), read as a student starting Year 12 who has watched only C1, C2, G01 and C3. Same method as above (`student-learning-review.md`, `teaching-playbook.md`, `coverage-ledger.md`). Not learner evidence; no stills, preview or audio inspected; science stays with Codex. U+2014 search of the design and this file: none. Narration recounted by script: 1,347 words including the 16-word notes lead-in, matching the design's per-scene counts.

### 1. First-review items: resolved?

| # | Item | Fixing line (revision 2) | Result |
| --- | --- | --- | --- |
| 1 | BLOCKER, attempt colour depended on an unstated condition | Scene 9: "The cylinder is hot, so the N O two stays as single molecules and does not join to make N two O four." Scene 10a: "...keeps darkening as more N O two forms, because here nothing mops it up." Tag "hot cylinder: no N2O4" on the vignette and feedback board | Resolved. Codex still to confirm the temperature (flag kept in the design) |
| 2 | 98 and 72 not derived | Scene 3a: "N O two has fallen to fourteen and N two O four has risen to nine. Joining depends on the N O two count twice over, so it slows from one hundred and twenty-eight to ninety-eight. Splitting depends on the N two O four count once, so it rises from sixty-four to seventy-two." On-screen "128 x 14/16 x 14/16 = 98", "64 x 9/8 = 72" | Resolved |
| 3 | 2b held two stages | Split into 2b "the squeeze doubles every concentration" (51 words) and 2c "joining gains more" (57) | Resolved |
| 4 | Aid said "does nothing"; tag contradicted it | Scene 8 and notes: "Argon in a fixed box does not shift it." Tag: "Squeeze: volume changes. Argon: volume fixed." | Resolved |
| 5 | Unexplained gauge; "pressure itself" misread | Gauge removed from 2b and 3a. Scene 7: "A squeeze raises the total pressure, because the crowded particles hit the walls more often." Close: "So total pressure by itself is not the cause. Crowding of the reacting gases is." | Resolved (see note N5) |
| 6 | "Moles of gas" unspoken, missing from notes | Scene 5: "Chemists say moles of gas. It is the same count: the numbers in front of the gases in the balanced equation." Note 1: "(fewer moles of gas)" | Resolved |
| 7 | Scene 6 two cases; liquids unscoped | Split 6a and 6b. 6b: "Pure solids and pure liquids do not count, because squeezing does not make them any more crowded." Note 2: "Pure solids and pure liquids do not count." | Resolved, but the added derivation introduces finding 1 below |
| 8 | "N O" heard as "no" | Scene 9: "colourless nitric oxide, N O". Scene 10b: "nitric oxide, oxygen and nitrogen dioxide" | Resolved (listen in preview) |
| 9 | Notes hold too short | "key notes (quiet, hold about 60 seconds)" | Resolved |
| 10 | "Hits hardest"; four-particle picture; expansion asserted | Scene 5: "A squeeze speeds up most the reaction that depends on more gas particles, so the shift goes toward the side with fewer gas particles." Ammonia drawn as schematic icons, no collision. Expansion bars "joining 32 to 8" and "splitting 32 to 16" | Resolved (see finding 4 for the bar arithmetic) |
| 11 | Feedback scene too long | Split into 10a (103 words) and 10b (59). Third wrong answer is a chip only | Resolved |
| 12 | Scene 8 and scene 4 repetition | Scene 8 is 42 words. "Here are the graphs." deleted | Resolved |

### 2. Arithmetic recheck (rate model forward = 0.5 [NO2]^2, reverse = 8 [N2O4])

| Stage | Check | Result |
| --- | --- | --- |
| Equilibrium | 0.5 x 64 = 32; 8 x 4 = 32 | correct |
| Halved volume | NO2 16, N2O4 8; 0.5 x 256 = 128 = 32 x 2 x 2; 8 x 8 = 64 = 32 x 2; gap 64 | correct |
| One step | NO2 16 - 2 = 14, N2O4 8 + 1 = 9 (nitrogen total 14 + 18 = 32 kept); 128 x (14/16)^2 = 98; 64 x 9/8 = 72; gap 26 | correct |
| New equilibrium | n + 2d = 32, d = n^2/16, n^2 + 8n - 256 = 0, n = 12.49, d = 9.75; 0.5 x 156 = 78 = 8 x 9.75 | correct; "about 12.5, about 9.8, about 78" are fair roundings |
| Colour claim | new NO2 between 8 and 16 | correct for any K > 0, so "darker than the start, paler than the instant" holds |
| Expansion mirror | halve concentrations from equilibrium: forward 32 x 1/2 x 1/2 = 8, reverse 32 x 1/2 = 16; reverse wins, shift toward more gas particles | correct, but see finding 4 |
| Attempt | 2NO + O2 <=> 2NO2, gas count 3 to 2, Q = K/2 on halving, shifts right; NO2 ends above double its start | "darkens, then keeps darkening" is right for the hot cylinder |

Every number a learner sees is consistent. No arithmetic findings.

### 3. New findings

| # | Scene | Exact words | Problem | Exact fix | Severity |
| --- | --- | --- | --- | --- | --- |
| 1 | 6b | "Joining needs one carbon dioxide to meet the solid, so it doubles. Splitting needs two carbon monoxide to meet, so it goes up four times. Splitting gains more, so a squeeze shifts it left." Visual: bars "joining x2 (blue)" and "splitting x4 (amber)". | The revision's carbon derivation reuses "joining" and "splitting", which scene 2a defined as two N O two joining into one N two O four. In C(s) + CO2 <=> 2CO the forward reaction makes two gas particles from one, the opposite of "joining" in the sense the student has learned, and the blue forward arrow now means a different chemical change from the one the syringe chip tagged "forward = joining". A student can conclude that a reaction which makes more gas particles is "joining", then misread scene 5's rule. This is false against the lesson's own earlier definition. | Narration: "The forward reaction needs one carbon dioxide to meet the solid, so it doubles. The reverse reaction needs two carbon monoxide to meet, so it goes up four times. The reverse gains more, so a squeeze shifts it **left**." (+2 words.) Visual: bars labelled "forward x2" (blue) and "reverse x4" (amber); remove the syringe tags "joining" and "splitting" from the board before 6a. | SHOULD FIX |
| 2 | 12 (note 4) | "The coloured gas darkens at once when squeezed. After that it fades if the shift uses it up, or darkens further if the shift makes it." | Overgeneralises. "Fades" reads as a return to the start colour, but scene 3b says it ends darker than the start. The scene 6a equal case (darkens and stays) is missing. A student copying this note has a rule that fails for their own H2 + I2 example. | "The coloured gas darkens at once when squeezed. After that it fades part of the way back if the shift uses it up, darkens further if the shift makes it, and stays the same if nothing shifts." (+8 words, notes only.) | SHOULD FIX |
| 3 | 6a | "Take hydrogen plus iodine making two hydrogen iodide, as hot gases ... the purple is darker" | "The purple" is never introduced aloud. Iodine's colour appears only in the visual key, so a student hears a colour with no referent. | "Take hydrogen plus purple iodine vapour making two colourless hydrogen iodide, as hot gases: two against two." (+3 words.) | SHOULD FIX |
| 4 | 5 (visual) | Bars "joining 32 to 8" and "splitting 32 to 16" with no working. | Scenes 2c and 3a show the working for every rate. Here two new numbers appear with no derivation and no words, so a student cannot rebuild them. It is the same gap the first review found for 98 and 72. | Visual only: write "32 x 1/2 x 1/2 = 8" under the forward bar and "32 x 1/2 = 16" under the reverse bar on their cues. No narration change. | SHOULD FIX |
| N1 | 9 (tags) | Tag "temperature steady, sealed", then argon is pumped in. | "Sealed" conflicts with item two's pumped-in argon. Not answer-bearing, but conditions should be consistent. | Tag: "temperature steady, no gas escapes". | NOTE |
| N2 | 10a | "because here nothing mops it up" | Colloquial, first use in the series. Understandable, and the chip "hot cylinder: no N2O4" backs it. | Optional plain version: "because nothing here removes the N O two." | NOTE |
| N3 | 10a (visual) | Tags "3 particles" versus "2 particles" | Fine. Keep them as "depends on 3 gas particles", never "3 must meet", since the narration says only "depends on". | none | NOTE |
| N4 | 12 | Five notes plus the aid, about 190 words | Acceptable at a 60 second hold. If trimmed, merge note 3 into note 1. | none required | NOTE |
| N5 | 7 (visual) | Gauge "1 to 2" on the squeeze card | True just after the squeeze. After the shift the squeeze total settles below 2 (fewer gas particles) while argon stays at 2. Tag the squeeze gauge "just after squeezing" so the comparison is not read as permanent. | tag only | NOTE |
| N6 | 5 | "the forward reaction depends on more gas particles and gains more" for ammonia | Correct as direction; the real rate law is not the coefficients. The learner copy makes no factor claim, so no caveat is needed (matches the author note). | none | NOTE |

No blockers found. The hot-cylinder fix holds for the model answer. The attempt gives nothing away: no counts, arrows or colour result on the board, all demands visible for about 60 seconds, and the unseen system's no-fade answer breaks the syringe pattern.

### 4. Memory aid (under its assumptions)

"Squeeze it and the shift goes to fewer gas particles. Argon in a fixed box does not shift it." Correct for the syringe (2 to 1, right), ammonia (4 to 2, right), expansion (left), H2 + I2 (none), C(s) + CO2 (squeeze left) and the hot 2NO + O2 cylinder (3 to 2, right). The tag now gives each half its own condition. The aid says nothing about colour, and note 4 is the separate colour rule (finding 2). No change.

### 5. AGENTS.md checks

- Em dashes: none. Subject-action sentences: yes, apart from the word-pair issue in finding 1.
- Attempt: unseen, hot-cylinder condition stated, every demand visible, nothing answer-bearing, 60 second countdown with "Pause the video". Fair.
- Terms before meanings: "moles of gas", "inert gas", "total pressure", "nitric oxide" now glossed. "The purple" is the one remaining (finding 3).
- Key notes: small and useful, with conditions; note 4 needs finding 2.
- Worked example: one stage per scene (2a, 2b, 2c, 3a, 3b), each number on its cue, last two rows kept.

### 6. Length and proposed cuts

Counted narration 1,347 words (about 7.3 minutes at 185 wpm); with the 60 second attempt hold, 60 second notes hold and short holds, about 9.5 minutes, inside the limit of 10 with about 30 seconds of margin. The should-fix edits add about 5 narration words. Proposed cuts of about 46 words that lose no cause, condition or exam-relevant point:

1. Scene 3a, delete "It is the same story as the iron tube: the faster rate falls, the slower rate rises." (-17). The down and up arrows carry it, and scene 11 still names the iron tube.
2. Scene 4, delete "So the squeeze changed every concentration at once, and the reaction responded afterwards." (-13). The two brackets on screen and the sentences before it already say this.
3. Scene 10a, shorten the last sentence to "If you said the brown fades, check which side this shift favours." (-7). Keeps the spoken wrong answer.
4. Scene 7, delete "The total pressure rises too." (-5). The gauge shows it and "can raise the total pressure equally" follows.
5. Scene 2a, "on a made-up scale like the sealed flask" to "on a made-up scale" (-4).

Net narration about 1,306 words, about 7.1 minutes, total about 9.2 to 9.3 minutes. Do not cut 2b, 2c, the 3a derivations, 5, 7 or 9.

### Verdict

**Pass.** No blockers. Apply the four should-fix items (6b wording and bar labels, note 4, the purple iodine phrase, the expansion working) in the script lock pass, take the proposed cuts if the voiced preview runs long, then check the exact voiced preview for "N O", the attempt timing and the 6b labels. Codex checks (hot temperature, iodine and HI colours, second-order claim) stay open.
