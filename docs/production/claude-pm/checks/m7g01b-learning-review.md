# m7g01b learning review: outbreak data and control practice

Reviewer: independent AI reviewer (did not author the design), 27 October 2026.
Input inspected: `../lessons/bio-m7-g01.md` (Revision 1, 27 Oct) read in full; `../../student-learning-review.md`; `AGENTS.md`; `checks/m7b13-learning-review.md` and `checks/m7g03b-learning-review.md` for format; the practice question sections of `../lessons/bio-m7-b10.md` to `bio-m7-b15.md` and the attempt cards of `bio-m7-p01.md` (for doubled attempts); b10's scope and R handoff lines; the learner narration of b10, b13 and p01 (searched for any taught R or reproduction number: none); b03's cholera lines (cholera in water is entry knowledge); `docs/production/programme/syllabus/bio-2017-y12.json` (searched for R, R0 and reproduction number: none). Narration recounted by script with the build parser rules (lines starting "> ", bold markers removed): 15 lines; the per-scene figures sum to **5,568 characters**, matching the design's table (joined with spaces the string is 5,582; the design's total is the per-scene sum). Proposed replacements below were counted by script. I searched the design for U+2014 and found none; none are used here. Every number in the design was recalculated (below). No new plates exist yet, and there are no stills, voiced preview or audio, so motion is not judged at playback speed. This is a beginner-perspective review, not learner evidence. Human listening is pending.

Main question traced: *When an outbreak question gives you a table or a graph, how do you find the right denominator, calculate incidence and prevalence, and use the data to justify a control?* Useful outcome: given an unseen outbreak table, survey or epidemic curve, the student picks the denominator that matches the question, calculates a group percentage, an incidence rate and a survey prevalence, says which measure a control changes and why, and justifies a control from the route, the timing and carriers with no symptoms.

## Hard-practice exception and re-teaching

The walkthroughs are the content (AGENTS.md exception), so their length is acceptable. Each walkthrough scene was checked against b03, b10, b12, b13 and p01:

- **2b** applies a Year 11 percentage with a new decision (whose denominator). Tests, does not teach. Pass.
- **2c** recalls p01's two curve shapes in one clause plus a ghost curve tagged "p01", then applies them. Pass.
- **3b** restates b13's incidence and prevalence in one clause each, as the method the calculation needs. Pass.
- **3c** applies b13's tap and tank to two controls; b12's night-biting fact is one clause. Pass, but see finding 2 (the tank logic is applied incompletely).
- **4b and 4c** apply b03's faecal-oral route and b10's link chain; the one new idea is carriers with no symptoms, which the card supplies. Pass.

No walkthrough re-teaches a core.

## Doubled attempts (b10 to b15, p01)

- **Q1(a)** uses the same operation as b14 12a (percentage who died in each group: 8 of 400, 300 of 1,200), but its decision (choose the exposure group, not the camp) is new. b14 comes after g01 in the playlist, so g01 is the first sight of it. Acceptable.
- **Q2** extends b13 12a (incidence per 100,000) with a different multiplier and a second denominator (people tested). New skill. Pass.
- **Q3** has the same underlying lesson as b14 12c (Port Z: quarantine held people while the real route, rats and fleas, bypassed it). g01 plays first, and Q3's evidence (graph timing, carriers with no symptoms, water) differs. Acceptable; see finding 9.
- Q1(b) and p01's A2 both read curves, but p01 asks about a model's limits, not a source. No double.

## Strengths to keep

- **One habit across three contexts**: "Before you compare, find the denominator" is introduced, used three ways (exposure group, whole population, people tested) and reconstructable.
- **The corrected Camp Wollemi case is coherent.** The leftover chicken gives one agent a vehicle at both meals, the onset times fit 6 to 24 hours, and the salad-roll group who shared cabins is a real control group. It reads as part of the case, not a trick.
- **The salad-roll zero is the decisive evidence**, and 2c makes the student see it (the empty bar returns beside the curve).
- **The `DenominatorPair`** with boxed, labelled denominators ("everyone at risk", "the sample") puts the trap on screen, and 3d's 2,000 dots inside a 400,000 outline makes "two hundred times rarer" visible.
- **Q3's intervention arrows on the curve** let the student see A followed by a rise and B followed by a fall before being told.
- **Each crossed mistake is the real trap of its item**, with a one-line reason.
- **Questions are genuine Section II style**: realistic stems, tables or graphs, verbs (calculate, evaluate, explain, identify, justify) and printed marks; every demand and condition stays on screen through the countdown; nothing answer-bearing during the holds.

## Number check (all recalculated)

| Item | Design | Recalculated | Result |
| --- | --- | --- | --- |
| Q1 well at lunch | 42 | 60 - 18 = 42; 28 + 14 = 42 | consistent |
| Q1 sandwiches | about 57% | 16 / 28 = 0.5714 | correct |
| Q1 salad rolls | 0% | 0 / 14 | correct |
| Q1 total ill | 34 | 18 + 16 | matches site |
| Q1 timing | 8 to 12 h; 13.5 to 17.5 h; "eight to eighteen" | 6 pm to 2 to 6 am; 12.30 pm to 2 to 6 am | correct, both inside 6 to 24 h |
| Q1 curve blocks | 4-hour blocks from Mon 6 pm | blocks start 6 pm, 10 pm, 2 am ...; Tue 2 am and Wed 2 am are block starts | consistent |
| Q1 mistake | 16 / 60 about 27% | 0.2667 | correct |
| Q2 incidence 2018 | 12 per 1000 | 4800 / 400 000 x 1000 | correct |
| Q2 incidence 2023 | 2 per 1000 | 840 / 420 000 x 1000 | correct |
| Q2 prevalence | 2.5%, 0.3% | 50 / 2000; 6 / 2000 | correct |
| Q2 mistake | 0.0125%; 200 times | 50 / 400 000 x 100; 2.5 / 0.0125 | correct |
| Q2 internal fit | incidence down 6-fold, prevalence down about 8-fold | consistent with fewer new infections and shorter infections together | consistent |
| Q3 readings | 15 to 38 after A; 38 to 22 to 1 after B | series 4, 9, 15, 24, 33, 38, 22, 9, 3, 1 | correct |
| Timing estimate | 547 s | 5,568 / 13.3 + 30 + 13.5 + 30 + 55 = 547.1 | correct |

All internal data are consistent.

## Findings

| # | Severity | Scene | Exact quoted text | Problem (likely student question) | Exact replacement (counted by script) |
| --- | --- | --- | --- | --- | --- |
| 1 | should fix | 1 hook | "Most of the marks hang on one habit." | **Learner narration mentions marks**, which the design's own rule forbids ("Learner narration never mentions marks"). It is also a claim about marking schemes that the video cannot support. | "Most of them turn on one habit." (-5) |
| 2 | should fix | 3c, key note 4, model (c), memory aid check | "That turns down the **tap**, so incidence falls. Same-day testing and treatment ... That drains the **tank** faster, so prevalence falls." Key note 4: "Fewer new infections lowers incidence; shorter infections lower prevalence." | **One measure, one number is a wrong idea.** b13's tank shows that a smaller inflow also lowers the level. As written, a student learns that bed nets change incidence but not prevalence, and will lose the mark when a question gives nets alone and asks about prevalence. The data agree: prevalence fell further than incidence (about 8-fold against 6-fold) because both measures acted on it. | 3c: "That turns down the **tap**, so incidence falls, and with less flowing in, the tank falls too. Same-day testing and treatment clears each infection sooner, so people stay infected for less time. That drains the **tank** faster, so prevalence falls further. And with fewer infected people, mosquitoes pick up fewer parasites, so **new cases** fall even more." (+60; scene 495.) Visual: on "the tank falls too" the level drops slightly before the outflow widens. Key note 4: "... Fewer new infections lower incidence, and so prevalence; shorter infections lower prevalence further." Also in note 4, "÷ people surveyed" becomes "÷ population (or ÷ people tested, in a survey)", so the copied formula does not imply that prevalence always comes from a survey. Answer box (c) and model (c) to match. |
| 3 | should fix | 3b | "Six of two thousand is **zero point three**." | Spoken without a unit, "zero point three" can be heard as 0.3 per thousand (the incidence unit just used) or as a fraction. The answer table shows "%", but the narration should not leave the unit to the screen. | "Six of two thousand is **zero point three per cent**." (+9) Move the cue to "per cent". |
| 4 | should fix | 4b | "That timing fits, because symptoms start up to **five days** after the bacteria are swallowed." | **"Fits what?"** The student hears a fact and a verdict but not the link. The cause is that people who swallowed bacteria just before chlorination still fall ill afterwards, so cases fall over the next week rather than stopping at once. | "Cases didn't stop at once, because people who swallowed the bacteria just before chlorination could still fall ill up to **five days** later." (+47; scene 377.) The bracket from week 6 to week 7 stays; tag "infected before B, ill after B". This also stays the second reserve trim if needed. |
| 5 | should fix | 2c | "So the control that fits is throwing out leftovers, and cooling cooked food quickly." | **A control with no cause.** The student asks "why cooling?" Nothing in the card or narration says the bacterium grows in cooked meat that cools slowly, so "cool quickly" is an unexplained rule (AGENTS.md: explain each cause before relying on it). It also leaves the higher attack rate at lunch (57% against 30% at dinner) unexplained, which the overnight leftovers explain. | "So the control that fits is cooling cooked meat quickly and throwing out leftovers, because this bacterium multiplies in meat that cools slowly." (+60; scene 616, the longest.) Grey tag under the plates: "leftovers cooled slowly overnight: more bacteria". If root prefers length, cut the whole sentence instead (-84); it is not demanded by the card. |
| 6 | should fix | 2b, 2c, 3c, 4b, 4c (answer boxes) | "Answer box (b) fills 'Not supported. Two sharp clusters, each 8 to 18 h after a meal ...'" (about 60 words), then "Hold 1 second." | **A full model paragraph appears at once with a 1 s hold.** It either competes with the narration (if it fills during speech) or flashes past (if it fills at the end). The answer box is the thing students copy or compare against, and in 2c it also breaks the three-bright-items rule. | Build each answer box line by line on its spoken cues, as g02's answer rows do: in 2c, "Not supported" on "isn't supported", the cluster and timing line on "six to twenty-four hours", the waves line on "rising waves", the salad-roll line on "shared cabins", the source line on "one food source". Each working tag dims as its answer line lands. Same rule in 3c and 4c. Keep the 1 s hold; students who want to copy can pause. |
| 7 | optional | Out of scope; author doubt (a) | "R as a calculated quantity ... flagged for the learning review" | **Judgement on adding an R item: do not add one.** (1) R and R0 do not appear in the 2017 syllabus text, and no Module 7 video teaches them to learners (b10 uses "infect more than one on average"; p01 shows doubling). An R item would have to introduce a new quantity, which a practice video should not do. (2) The video is at about 560 s after findings 1 to 6 against the 570 s cap; even a short R item (about 40 s with its countdown and feedback) would need a whole question cut, and each of Q1 to Q3 carries a route skill R would not. (3) The syllabus example nearest to R ("the portion that are immune or immunised") is already practised by b10 13c (towns A and B). | No narration change. Record the decision in Out of scope: "R calculations: not in the 2017 syllabus and not taught in Module 7; b10's handoff to g01 is closed here; the immune-portion example is practised in b10 13c." Root to note the closed handoff on the board. |
| 8 | optional | 2a, 2d | Crossed mistake "16 ÷ 60 ≈ 27%" | The table prints each group's size beside its cases, so the denominator decision is easier than the trap suggests. The design's own list of transfer errors includes "most ill people ate X", which is not tested. | No change needed. If the voiced preview shows time, the spoken mistake could read "dividing by sixty, or saying most of the ill students ate sandwiches", but keep one crossed chip. |
| 9 | optional | 4c, 4d | "Quarantine only holds the households of known cases." | Same underlying lesson as b14 12c (quarantine held people while the route bypassed it), which plays straight after g01. Not a double, because the evidence differs, but b14's author should know g01 has already practised "check the route before trusting quarantine". | No change to g01. Root to add a one-line note to b14's overlap list. |
| 10 | optional | 3a card | "New confirmed malaria cases that year" | From 2019 village health workers tested more fevers, so more cases were confirmed. A sharp student may ask whether the 2018 count is comparable. More testing would find more cases, which makes the fall more convincing, not less. | Author note only (model "credit, but do not require"): "More testing after 2019 would tend to raise confirmed counts, so the fall is unlikely to be a testing artefact." |
| 11 | optional | 2a (card load) | Two plates, an eight-sentence card, a table, a curve, a meal timeline and a grey chip | The densest card in the video. The card is the task and sits outside the three-item count, and every sentence is a needed condition. Hold length is the issue: 10 s is a cue to pause, not reading time. | No content change. Keep the plates small and above the card text, never between the table and the curve. |
| 12 | optional | whole | 5,568 characters, about 547 s | Findings 1 to 5 add +171 characters, giving **5,739 characters by script, about 560 s**, under the 570 s cap. No reserve trim is needed. Reserve trim 2 (4b's last sentence) is now finding 4's sentence; if it is trimmed, keep the bracket and its tag. | Recount after editing. |

No blocker. Six should fix (1 to 6). Six optional (7 to 12).

## Screen load (owner's three bright text items)

Within the limit once the answer boxes build line by line (finding 6). Densest working frames: 2c (curve, timeline brackets, bands, ghost curve, salad bar, dashed plate link, control tag, answer box). Write the dimming order: the ghost curve fades before "shared cabins", the brackets and bands dim when the salad bar returns, and the control tag writes only after the bracket tags have dimmed. 3c (tank, two plates, three tags, the mosquito return arrow) is within the limit because each tag dims as the next lands.

## Checks against the review questions

| Question | Result |
| --- | --- |
| HSC Section II style, clear demands, verbs and marks? | Yes. Q1 (calculate 2, evaluate 4), Q2 (calculate 2 + 2, explain 3), Q3 (identify 1, justify 3). Mark allocations match the model answers. Q1(b) at 4 marks is fair: judgement, timing, curve shape and the control group are four separate points. |
| Answerable from givens and earlier cores? | Yes. Agent timing, cabin sharing, survey size, incubation and carriers are all on the cards; the faecal-oral route is b03 entry knowledge (b03 used Snow's cholera pump). |
| Question on screen during the 10 s countdown? | Yes, all three, with nothing answer-bearing (type badge hidden, no working). |
| Step by step, mark-earning steps shown, givens underlined, one crossed mistake? | Yes. One stage per scene, givens underlined at their cues, one crossed chip per question. Finding 6 aligns the answer boxes with the steps. |
| Re-teaches or tests? | Tests (see above). |
| Screen load about 3 bright items? | Yes with finding 6 and the 2c dimming order. |
| Key notes useful? | Yes. Five notes with a pause invitation, separate from new reasoning. Note 4 needs finding 2. |
| Data internally consistent? | Yes (number check above). |
| Memory aids after explanation, limits checked? | "Before you compare, find the denominator" is sound and its limit stated. "Incidence is the tap, prevalence is the tank" is sound once finding 2 uses both of its links. |
| Doubles core attempts? | No (see above); finding 9 is a note for b14. |
| Narration length? | 5,568 characters, about 547 s; about 560 s after findings. |
| No people, hands or faces? | Pass. |
| No em dashes; Australian spelling? | Pass. |
| Handoff? | Correct: "how disease control ideas have changed" matches bio-m7-b14. |

## Learner trace (from stated entry knowledge)

1. **Hook.** "Denominator" is defined in the same sentence. Pass with finding 1.
2. **2a.** Every condition is on the card. Pass.
3. **2b.** Group denominator chosen and stated. Pass.
4. **2c.** Curve shape, timing and the control group combine into a judgement. The control sentence lacks its cause (finding 5). Pass with finding 5.
5. **2d.** The wrong denominator and why it fails. Pass.
6. **3a, 3b.** Two denominators, each said with its meaning. The unit of 0.3 is missing (finding 3).
7. **3c.** Nets and the tap, treatment and the tank. The student leaves thinking nets do not lower prevalence (finding 2). **Fails until finding 2 is fixed.** It is not a blocker, because the item's own answer is still correct.
8. **3d.** Visible 200-fold error. Pass.
9. **4a, 4b.** Readings are clear; the lag sentence lacks its link (finding 4).
10. **4c, 4d.** Route, link, carriers; the crossed reason contrasts person-to-person with water. Pass.
11. **Decision board and notes.** Pass.

## Verdict

**Ready to voice after fixes** (findings 1 to 6; no blocker), subject to the Claude science check and the Codex error check. No R item is recommended (finding 7). Repeat this review on the exact voiced preview before full export, including running time (about 560 s after fixes), that each underline lands on its spoken cue, and that answer lines build in step with the narration.

## Resolution

Resolved by the author in `../lessons/bio-m7-g01.md` Revision 2 (27 Oct), merged with the Claude science check's fixes. Narration recounted by script (lines starting "> ", bold markers removed): 15 lines, **5,758 characters** (+190), about 561 s, under the 570 s cap. No U+2014 in the design.

| # | Decision | Change made |
| --- | --- | --- |
| 1 | Accepted (with SC 7) | Hook: "Most of them turn on one habit." |
| 2 | Accepted (with SC 1, SC 8) | 3c as proposed ("...and with less flowing in, the tank falls too. ... prevalence falls further. ... new cases fall even more."); level drops on "tank falls too". Key note 4: "÷ the population, or ÷ the people tested in a survey"; "Fewer new infections lower incidence, and so prevalence too; shorter infections lower prevalence further." Answer box, model (c), stop line, memory aid check match. |
| 3 | Accepted | "zero point three per cent"; cue moved. |
| 4 | Accepted | 4b as proposed; tag "infected before B, ill after B". Now reserve trim 2. |
| 5 | Accepted (reason kept, not cut) | "So the control that fits is cooling cooked meat quickly and throwing out leftovers, because this bacterium multiplies in meat that cools slowly." Grey tag "leftovers cooled slowly overnight: more bacteria". |
| 6 | Accepted | Answer boxes in 2b, 2c, 3b, 3c, 4b and 4c build line by line on named cues; tags dim as lines land. 2c dimming order written. |
| 7 | Accepted | No R item. Out of scope records R is not in the 2017 syllabus and b10's handoff to g01 is closed here; root to note on the board. |
| 8 | Declined | One crossed chip per question kept; key note 2 covers "most ill people ate X". |
| 9 | Accepted (note) | Author note for root to add to b14's overlap list. |
| 10 | Accepted | Model (c) "credit, but do not require" line on wider testing (with SC 10). |
| 11 | Accepted | Q1 plates small, above the card text, never between table and curve. |
| 12 | Done | Recounted above. |

Repeat this review on the exact voiced preview before full export (running time, underline and answer-line timing). Codex error check pending.
