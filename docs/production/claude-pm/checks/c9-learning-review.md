# C9 learning review: how does temperature change K?

**Verdict: pass with fixes. No blockers.** Nine should-fix items and several notes, all script-lock edits. The design has a strong spine: a hook that reuses the tube the learner has already seen go darker and paler, one main question ("does K change, and which way"), a cause (K is one fixed number over another, and only temperature changes the numbers), real K values the learner can see as colour, the same data written backwards to give the opposite sign without a second rule, a four-row table that separates "a shift" from "K changing", a scene that ties heating to Q against K from C8 ("first K changes, then the mixture moves"), an unseen exothermic attempt on a tube the learner already knows, and feedback that names two real wrong answers. The should-fix items are: the made-up rate numbers are used as if they were the evidence for the real K values (scene 4a), "splitting" and "joining" are used in the opposite roles to C8, scene 2 re-derives K = forward number over reverse number for a third time, scenes 3 and 6 say the same four-way contrast twice, scene 5 and scene 7 each carry too many stages, the memory aid's wording ("heating adds a reactant, so it shifts right and K goes up") blurs the very distinction scenes 6 and 7 build, the attempt asks two items with reasons for 10 seconds, the Q check in scene 7 does not reproduce with the rounded numbers a student will type, and key note 5 teaches a table-reading direction that no scene narrates.

Scope: AI source review of the script, visual plan, numbers, memory aid check, attempt, length estimate, key notes, author notes and open decisions in `../lessons/chem-m5-c09.md` (revision 1). Read as a student starting Year 12 who has watched C3, C5, C6 and C8 (and, as the playlist runs, c07, g02 and g03 before this video: playlist order c08 (11), g03 (12), c09 (13); the handoff to p02 at 14 matches the route). Method: `docs/production/student-learning-review.md` with the AGENTS.md rules, and the formats of `c8-learning-review.md` and `c6-learning-review.md`. Compared against `chem-m5-c03.md`, `c05.md`, `c06.md`, `c08.md`, `coverage-ledger.md` (p1079 "planned") and `site-extracts/chem-m5-l13.md`. Not learner evidence. No stills, voiced preview or audio inspected. U+2014 search of the design: none (count 0). Scientific accuracy of the K values is left to the separate science check; this review flags only what a student would find inconsistent. Human listening pending.

Main question traced: *if you change the temperature of a mixture at equilibrium, what happens to K, and how can you tell which way it goes?* Useful outcome: a student can say that only temperature changes K, give the two-fixed-numbers reason, state the direction rule from the sign of the heat of reaction, tell a shift (Q moves, K stays) from a change in K, describe a heated mixture as "new K, then Q moves", and apply the rule to an unseen reaction.

## Findings

### BLOCKER

None.

### SHOULD FIX

| # | Scene | Exact words | Likely student question or problem | Concrete repair | What the repair enables |
| --- | --- | --- | --- | --- | --- |
| 1 | 4a, 4b | 4a: "Here are the two numbers on a made-up scale ... splitting is 1 and joining is 164 ... Splitting jumps to 200 ... joining only rises to 408 ... K is now 200 over 408, which is 0.49." 4b: "Those K values match the measured ones." | The learner is shown invented rate numbers first, sees them produce K, and is then told the K values are real. Two questions: "so are 200 and 408 real?" and "is 4a the evidence, or the made-up numbers just built to fit?" The reasoning runs the wrong way: the numbers were chosen to give the answer, so they cannot explain it. Three ratios (200 times, 2.5 times, 80 times) and six numerals sit in 79 spoken words. | Swap the order and make the logic honest. Put the evidence first: the tube (12 percent split, pale; 65 percent split, deep brown) and the two measured K values, tagged "textbook values". Then ask what the fixed numbers must do: "K got about eighty times bigger. K is splitting over joining. So splitting must have grown about eighty times more than joining." Then, as an example only: "One pair of numbers that does it: splitting up 200 times, joining up about two and a half times, since 200 over 2.5 is eighty." Keep the chip "made-up scale" on the dial numbers and say it aloud ("made-up numbers, to show the pattern"). Drop the 1 / 164 and 200 / 408 fraction lines; show only the two multipliers on the dials, and the K marker moving from the measured evidence. | The real evidence drives the argument, the made-up numbers are clearly an illustration of what the dials must do, and the unequal rise is shown as the only way to get an eighty-fold change. |
| 2 | 2, 3, 4a, 5, 10a | Scenes 2 to 4a: "splitting number" (forward, blue) and "joining number" (reverse, amber). Scene 5: "forward number" and "reverse number". Scene 10a: "forward number over the reverse number". C8 scene 5: "joining is a fixed number times hydrogen times iodine, and splitting is another fixed number times hydrogen iodide squared". | In C8 the forward reaction was "joining" (H2 and I2 join to make HI). In C9 the forward reaction is "splitting" (N2O4 splits). A learner who watched C8 meets the same two words in opposite roles, and then the names change again in scene 5. They stop knowing which dial is on top of K. | Name the dials by direction everywhere: "forward number" (blue, on top of K) and "reverse number" (amber, below K), as C5 and C8 draw them. Use splitting and joining only as plain descriptions of what the forward and reverse reactions do for this tube ("forward: N two O four splits"). Delete the relabelling beat in scene 5 (the dials stay forward and reverse, so flipping the equation swaps which reaction is forward, not the dial names). | One vocabulary across C5, C8 and C9, and no relabelling to track in the middle of the hardest scene. |
| 3 | 2 | "First, why was K ever constant? ... each rate is a fixed number times the concentrations ... At equilibrium the two rates are equal. Rearrange that, and N O two squared over N two O four equals the splitting number divided by the joining number. That is K." (116 words) | This is the third time the learner sees K as a ratio of two fixed numbers (C5 derived it; C8 scene 5 divided the rates again). The design reteaches an earlier video, and "Rearrange that" skips the move (divide both sides by the joining number and by N2O4), the same pattern c06 and c08 flagged. | Recall, do not re-derive: "Remember the rate model from the expressions video: each rate is a fixed number times the concentrations. At equilibrium the rates are equal, so K, the products over reactants fraction, equals the forward number over the reverse number. In this model, then, K can only change if one of those two numbers changes." Keep the two dials and the single-line recall on screen with the dials pen-ringed on the last sentence; drop the two-line derivation and the "rearrange" beat. About 55 words (minus 60). | No re-teaching, and the learner reaches the sentence the lesson needs ("K changes only if a dial changes") a third of the time sooner. |
| 4 | 3, 6 | Scene 3: "Adding more N two O four changes the concentration, but not the number. Squeezing the container changes concentrations too. A catalyst raises both numbers by the same factor ... Only temperature changes the numbers themselves." Scene 6: "Add N two O four ... Squeeze the container, same story. Add a catalyst ... Heat the tube ... temperature is the only one that moves K." | The same four-way contrast is narrated twice, 3 and 6, with the same four actions in the same order, and a third time in scene 7 ("K changes, then Q moves") and in key notes 1 and 4. Scene 3 also carries five ideas in 85 words (concentration, squeeze, catalyst, temperature, which rate gains more), so the temperature cause (the point of the scene) is last and short. | Make scene 3 only the cause of the temperature effect: one sentence for "concentrations and a catalyst do not change the numbers' ratio" (with the visual of the dials staying still), then the two sentences on why heat raises the forward number more. Let scene 6 carry the full table and cut its narration to the table's lead-in and the last sentence ("A shift is Q moving. A change in K is the target itself moving. Only temperature moves the target.") (about 40 words fewer across the two scenes). | The cause gets the room, and the contrast is taught once, in the one place with a table to look at. |
| 5 | 5 | "Now write the same reaction backwards ... Its K is the flip ... 160 ... 2.0. So here K falls ... The reason is the same ... the number on the bottom of K grows more than the number on top. So here is the rule. If the forward reaction takes in heat ... gives out heat ... Cooling does the opposite." (129 words, the longest scene) | Five stages in one breath: reverse the equation, flip the K values, say the sign of the change reverses, give the reason with "top" and "bottom" (hard to hear), and state a two-case rule plus cooling. The learner can follow the flip, but the rule arrives while they are still checking 160 and 2.0. | Split into 5a (backwards equation, the flip of the two K values, "K falls when heated", the reason in the dials: now the reverse reaction takes in heat, so the reverse number rises more) and 5b (the rule: two cards, "takes in heat: heating raises K" and "gives out heat: heating lowers K", cooling as one clause). Say "the reverse reaction" and "the forward reaction", not "top" and "bottom". Also draw the 160 and 2.0 points on the same log line as 0.0061 and 0.49 (see note 1). | One reasoning stage per scene, and the rule is stated after the learner has seen both signs. |
| 6 | 8 | "Treat heat like a chemical in the equation. If the reaction takes in heat, heat sits on the reactant side, so heating adds a reactant. The mixture shifts right, and K goes up." | This is the sentence that contradicts scenes 6 and 7. For a real chemical, "adds a reactant, so it shifts right" and K does not change (scene 6 row 1). Here the same words end "and K goes up". A student concludes either that adding a reactant raises K or that heat is special for no stated reason. The design's aid check records "heat is never put in the K expression" but not this conflation. | Keep the aid for direction only and say the difference: "Use heat like a chemical only to find the direction. If heat is on the left, heating pushes the mixture right and K goes up. If heat is on the right, K goes down. Unlike a real reactant, heat changes the numbers themselves, so K moves." The second half of the aid ("Change T, change K. Change anything else, K stays.") stays. Add to the aid check a limit: the heat-as-chemical picture predicts the direction of the K change, not why K changes (that is scene 3). | The aid helps with a new case and does not undo the shift against K distinction. |
| 7 | 9 | "One: the tube is heated to 500 degrees and left to settle. Is K now above 49, equal to 49, or below 49, and why? Two: back at 450 degrees, we add more hydrogen. What happens to K, and what changes instead? Pause here to answer." with a 10 second countdown. | Two items, each with a reason, in ten seconds. Item 1 needs the heat sign, the unequal rise and the conclusion. Item 2 needs "K stays" and "Q falls, shifts right". The learner cannot do both. Per the owner rule the hold stays at 10 seconds, so trim the question. | Keep item 1 only, as the transfer: "Is K above, equal to or below 49, and why?" with the reason as a short phrase. Move the "extra hydrogen" case to feedback as a short second check (10b), phrased as a statement and a question the voice answers ("If we added hydrogen instead, K would stay 49. Q would fall below K, and the mixture would shift right."), or, if the owner wants it tested, ask it without the second demand: "At 450 degrees, extra hydrogen is added: is K above, equal to or below 49?" (one word answer) and drop "what changes instead". Do not add a hold. | A decision that fits 10 seconds, with every demand visible. |
| 8 | 7 | "Take the tube settled at twenty-five degrees, with 0.088 moles per litre of N two O four and 0.023 of N O two. Q is 0.023 squared over 0.088, which is about 0.0061, equal to K." (118 words in the scene) | (a) A student with a calculator gets 0.023^2 / 0.088 = 0.0060, not 0.0061. The design notes admit "spoken about 0.0061". It looks like an error to a careful student, in a lesson about exact comparison. (b) The scene runs four stages: Q = K at the start, the new K, the rate ratio of about eighty times, and Q climbing. The Q working has no on-screen line in the visual plan (no "Q: no unit written" tag, no Q expression), unlike C8. | (a) Use three significant figures on screen and aloud: 0.0884 and 0.0232 mol/L (these give 0.00609, rounds to 0.0061 as K). (b) Split into 7a (settled at 25, Q computed and equal to K, then the boiling water, K jumps to 0.49, Q still 0.0061, Q below K) and 7b (the rate comparison "about eighty times faster in this model", Q climbs to the new K, the two-step sentence). Add the Q working line and the expression to the visual, with "Q: no unit written" as in C8. | Numbers a student can check, and one stage per scene. |
| 9 | 12, 11 | Key note 5: "Reading a table: if K rises with temperature the forward reaction is endothermic, and if K falls it is exothermic. The size of the change depends on the size of the heat of reaction. If the equation is reversed, K is flipped." | No scene narrates the converse (table to heat sign). The lesson's own note in Decisions says it is "left to p02". The learner is asked to copy something the video never explained, and the syllabus action is about analysing data. The size-of-change sentence appears only in feedback 10a. | Either narrate it in scene 11 with one sentence and the K marker moving: "And you can run the rule backwards: if a table shows K rising as the temperature rises, the forward reaction takes in heat" (+20 words), or remove the table sentence from the notes. The first is better, because exam questions give the table. Keep "if the equation is reversed, K flips" (it is in scene 5). | Notes that match what was taught, and the exam-style direction is covered. |

### NICE TO HAVE

1. **Hook (scene 1).** Add the one sentence that makes the question feel forced: "K is the ratio of the settled amounts. If the hot tube settles with very different amounts, can K really stay fixed?" The learner sees the tension before the dials. The closing sentence of scene 1 is already on the reserve cut list; trade it for this one. Also the phrase "In the last few videos" is loose but safe (c07, g02 and g03 sit between).
2. **One log line.** Scene 4a uses a line from 0.001 to 1 and scene 5 needs 2 and 160. Draw a single line from 0.001 to 1000 and show the forward points at 0.0061 and 0.49 and the reversed points at 160 and 2.0 as mirror images about 1 ("flip": one tick over). The C6 flip becomes a picture, and both K changes use one scale.
3. **Scene 4a visual.** The plan stacks the tube, two columns of dials, two fractions, the log line and a bracket. After repair 1 the fractions go, but keep the cold state first and the hot state second, and drop the rate bars from 4a (they are never mentioned).
4. **Wording of "the heating video" (scene 3) and "the Q videos" (scene 7).** C3 covered concentration and temperature, C8 is one video. Use content names: "when we heated the cobalt and the N O two tubes" and "the reaction quotient video". No video named by position.
5. **"The darker colour in the hot water was a bigger K" (4b).** The darker colour is what a bigger K looks like, and it arrives through a shift (scene 7). "Is what a bigger K looks like" avoids a quick conflation that scene 7 then has to undo.
6. **g03 has been watched.** The quadratic video precedes c09 in the playlist, so the tag "settled amounts given, not solved here" can add "you can check them with the ICE table method". Optional.
7. **C6 attempt K = 0.0257 for N2O4 at a steady temperature.** A careful learner may notice it is not 0.0061 or 0.49. The design's reasoning (no temperature stated, between the two) is fine. No on-screen note needed; if the owner wants one, a half sentence in 4b: "K depends on the temperature, so each K in the earlier videos belongs to the temperature stated or steady there."
8. **Attempt visual.** The plan writes "+ about 10 kJ per mole of H2, given out" on the right of the equation, which is the C3 shortcut already applied. Show the heat only in the givens card ("forward reaction gives out about 10 kJ per mole of H2") so the learner has to place it, as the aid asks.
9. **Spoken numerals.** 0.0061, 0.49, 164, 408 and 0.088 are slow to hear. After repair 1 only 0.0061, 0.49, 160 and 2.0 remain.

## Learner trace

Starting from C3, C5, C6 and C8:

1. **Scene 1.** The tube goes darker in hot water and fades in ice, a picture the learner has from C3. K never moved when things were added or squeezed. The question "does K change" is clear. Nice-to-have 1 makes the tension sharper. Passes.
2. **Scene 2.** The learner recalls K as the forward number over the reverse number and gets "K can only change if a number changes". Works as a cause. They have seen this derivation twice already (finding 3).
3. **Scene 3.** Which things change a number: not concentration, not a catalyst (same factor), only temperature, and unequally because the heat-absorbing reaction gains more (the C3 reason). The learner has the reason. Crowded with the four-way list (finding 4).
4. **Scenes 4a, 4b.** The numbers show an eighty-fold rise and the tube shows it as colour. The evidence works in 4b, but 4a reads as invention (finding 1). After repair the learner sees the measured K and the pale and deep brown tubes, then what the dials must do.
5. **Scene 5.** The flipped data gives the opposite sign and the rule. A good move: one idea, both signs, no second reaction. Too many stages and shifting names (findings 2 and 5).
6. **Scene 6.** The table clearly separates "what you do", "what moves", "K". Works as a visual contrast.
7. **Scene 7.** The strongest link: K jumps, Q stays, Q below K, so the forward reaction runs about eighty times faster, Q climbs to the new K. It reuses the C8 number line with a moving target. The numbers need the three-figure repair and the split (finding 8).
8. **Scene 8.** The aid is helpful for the direction ("heat on the left, heating raises K"), but the sentence "shifts right, and K goes up" blurs the distinction (finding 6).
9. **Scene 9.** The unseen exothermic reaction with the heat sign given is a good transfer. Two items are too much for 10 seconds (finding 7).
10. **Scene 10.** The feedback names "K rises because everything is faster" and "K changed because it shifted" and shows the cause. Good. The first uses "forward number over reverse number" (finding 2).
11. **Scenes 11, 12.** The decision rule works as two cards. Key note 5 teaches something not narrated (finding 9).

Where the learner would ask why: "Are 200 and 408 real?" (4a); "Which dial is on top?" (scenes 2, 4a, 5 after the C8 naming); "Why does the same word 'shift right' come with K up for heat and not for a reactant?" (8); "Why does Q come out as 0.0060 on my calculator?" (7); "How do I read a table?" (12).

## Checks against the review questions

| Question | Result |
| --- | --- |
| Cause explained before names? | Yes. K as a ratio of fixed numbers (2), what can change them (3), the data (4), the flipped data (5). The cause is the strongest part. Scene 2 is a re-derivation (finding 3). |
| One main question? | Yes. Stays on "does temperature change K, and which way". The Q link (7) is the same question applied. |
| One reasoning stage at a time? | Scenes 2, 3, 4a, 4b, 6 are single stage (scene 3 has extras). Scenes 5 and 7 stack stages (findings 5 and 8). |
| Avoids re-teaching earlier videos? | Mostly. The rate model derivation is repeated for a third time (finding 3). The Q against K relation and the heat-absorbing reason are recalled in a clause. |
| Uses the visual medium (process, not a text box)? | Yes. Dials rising, the tube moving into baths, the K marker moving along a log line, the percent grids, the table, Q climbing. The Visual lines show processes. Scene 4a is crowded (nice-to-have 3). |
| Real and made-up numbers mixed? | Yes, and it can confuse (finding 1). Real K values are tagged "textbook values", the rate numbers "made-up scale", but the made-up ones are presented as the explanation of the real ones. Reorder. |
| Useful contrast or memory aid with assumptions checked? | The four-row table is a good contrast. The aid check is thorough (equation as written, sign of heat for that equation, closed system, heat not in K) but misses the conflation of "shift" and "K changes" (finding 6). |
| Question demands visible during the attempt? | Yes, both demands and every given are on the card, with nothing answer-bearing. Item count is too high for 10 seconds (finding 7). The heat term on the equation gives away the placement (nice-to-have 8). |
| 10 second attempt rule respected? | Yes ("Pause here to answer." then a 10 s countdown). Trim the question, not the hold. |
| Calculation layout rules? | Mostly. Short task, equation strip, grouped givens card with units in the attempt. Scene 7 lacks the Q working line and the "no unit written" tag (finding 8). Scene 4a fractions go once finding 1 is applied. |
| Key notes short and copyable? | Five bullets and an aid, about 250 words for a 90 second hold. Bullet 1 holds two ideas (what does not change K, and what does) and could be two lines; bullet 5 teaches something not narrated (finding 9). |
| Em dashes? | None in the design or in this file. Plain subject-action sentences throughout. |
| Site errors repeated? | None. The Haber 977 and 0.013, the Fe3+ + SCN- 895, 580, 360 and the A + B table are not used (site corrections C2, C4, C10). |

## Memory aid check

"Change T, change K. Change anything else, K stays." holds in every case in the lesson (adding a reactant, squeezing, a catalyst, heating, the attempt) and prevents the main error (a shift means K changed). Its conditions (same equation, fixed temperature) are on screen. "Write heat into the equation" extended to K holds for all three reactions in the lesson (heat on the left: K up; heat on the right: K down) provided the learner places heat from the sign given. Additional limits to record: (a) the heat-as-chemical picture gives the direction of the K change, not its cause; the cause is the unequal rise of the two numbers (scene 3), and the picture must not imply that adding a real reactant also changes K (finding 6); (b) the aid gives the direction, not the size (the design already records this); (c) the second aid line is read after "Change T, change K" so the order should be the invariant first, the heat picture second. The aid is a draft bank entry; its use here is suitable after the science check, not before.

## Length and cuts

Claimed 1,191 words (6.4 minutes at 185 wpm), about 8.3 minutes in all. Net change from the repairs is about -25 words: scene 2 -60, scene 3 and 6 -40, scene 1 +20, scene 4 reorder net +10, scene 5 split +0 (rearranged), scene 7 split +0, scene 9 -25, scene 11 +20. The extra scenes (5b, 7b) add a few seconds of holds. The voiced preview should land near 8.2 to 8.8 minutes, inside the 8 to 9.5 minute target. Reserve cuts (no cause lost): the last sentence of scene 1 (replaced in nice-to-have 1), "Cooling does the opposite" in scene 5 (kept in the notes), the percentage sentences in 4b if the colour carries them. Do not cut scenes 3, 4, 7, the attempt or the two named wrong answers in 10.

## Suggested key notes wording

1. Only a change in temperature changes the value of K. For a given equation at a fixed temperature, adding or removing a substance, changing the pressure or volume, or adding a catalyst does not change K.
2. Why (in a simple model): K is the forward number divided by the reverse number. Heating raises both numbers but raises the heat-absorbing direction's more, so K changes. A catalyst raises both equally, so K does not.
3. If the forward reaction takes in heat (endothermic), K rises when heated and falls when cooled. If the forward reaction gives out heat (exothermic), K falls when heated and rises when cooled.
4. A shift is Q moving toward K. A temperature change moves K first, then Q follows.
5. Reading a table: K rising with temperature means the forward reaction is endothermic. K falling means it is exothermic. Reversing the equation flips K. The bigger the heat of reaction, the bigger the change in K.

Aid (large): *Change T, change K. Change anything else, K stays.* Second line: *Use heat like a chemical only to find the direction: heat on the left, heating raises K. Heat on the right, heating lowers K.* Tag: "same equation as written; heat never goes in the K expression."

## Strengths to keep

- The hook on a tube the learner already knows and the plain question "does K change".
- The evidence as colour: pale and deep brown tubes with the percent grids.
- The flipped data that turns one idea into two signs without a second reaction to memorise.
- The four-row table that separates what you do, what moves and K.
- Scene 7: heating as "K changes, then Q moves to the new K", with the C8 line and a moving target.
- The unseen exothermic attempt on the tube the learner knows (H2 + I2, K = 49).
- Feedback naming "K rises because everything is faster" and "K changed because it shifted".
- Honest scope: no van 't Hoff, no calculation of K at a new temperature, no colourimetry, no Gibbs.

## Answers to the author's open decisions (learning view only)

- **Rate model for K = forward number over reverse number (scene 2):** keep the idea, recall it in a clause instead of re-deriving it (finding 3). It is what lets the lesson answer "why" with a cause.
- **Real K values with made-up rate numbers (4a, 4b):** acceptable only with the order changed: measured K and the tube first, then the dials as an illustration of what the numbers must do (finding 1). Keep both tags.
- **Settled percentages (4b):** keep 12 and 65, given as outcomes. Colour carries them; the grid is the useful visual.
- **Units of K:** omit (C5 policy).
- **C6 attempt value (0.0257):** no on-screen note needed (nice-to-have 7).
- **Single attempt, two items:** reduce to one main item, and test "K stays" in the feedback or with a one-word second item (finding 7).
- **Exothermic first or endothermic first:** keep endothermic first (the colour makes it concrete), then the flip.
- **Handoff:** p02 matches the route; change the line and chip if c10 runs first.

## Verdict

**Pass with fixes. No blockers.** Apply findings 1 to 9 in the script lock pass. Findings 1, 2, 6 and 7 change the most (order of 4a and 4b, the dial names, the aid sentence, and the attempt). Then re-review the voiced preview for scenes 2, 3, 4a, 4b, 5a, 5b, 7a, 7b, 8, the attempt and feedback, scene 11, and the total length. Human listening pending.

## Re-review checklist (for the next revision)

- Does scene 4 lead with the measured K and the tubes, and present the dial numbers as an example of what the numbers must do, with "made-up scale" spoken and shown?
- Are the dials named forward number and reverse number in every scene, matching C5 and C8, with splitting and joining used only as descriptions?
- Is scene 2 a recall in a clause rather than a derivation?
- Is the four-way contrast taught once (scene 6) and scene 3 only the cause of the temperature effect?
- Is scene 5 split into the flip and the rule, with no "top and bottom" wording?
- Does the aid say that heat-as-a-chemical gives the direction only, and keep "change anything else, K stays" intact?
- Does the attempt ask one main item (plus at most a one-word second item), with the hold still 10 seconds and the heat term only on the givens card?
- Does scene 7 use 0.0884 and 0.0232, show the Q working line and "Q: no unit written", and split into 7a and 7b?
- Is the table-reading direction narrated in scene 11 before it appears in the notes?
- Recount the narration after edits and recheck for U+2014.

## Re-review (Revision 2, 13 Oct)

Reviewer: fresh independent student-learning reviewer (did not write the design or the first review). Inspected: the Revision 2 text of `../lessons/chem-m5-c09.md` only (script, visual plans, numbers, aid check, attempt, key notes, change list). No stills, audio or voiced preview. Read as a student starting Year 12 who has watched C3, C5, C6 and C8 (and, by playlist order, c07, g02 and g03). K values not checked (separate science check). U+2014 search of the design and of this file: none. Narration word sum re-added by hand: 1196, matches the design. AI beginner-perspective review, not learner evidence; human listening pending.

### First-review items

| # | First-review item | Status | Evidence |
| --- | --- | --- | --- |
| 1 | Made-up rates used as evidence (4a, 4b) | Resolved | 4a now leads with measured K ("textbook values"), the pale and deep brown tubes and the percent grids. 4b asks what the numbers must have done, says "made-up" aloud and shows "made-up scale". The 1/164 and 200/408 fractions are gone; only "x 200", "x 2.5" and "200 / 2.5 = 80" remain. Wording point in new item 5. |
| 2 | Splitting/joining clash with C8 | Resolved in C9, one risk | "Forward number" and "reverse number" are used in scenes 2, 3, 4b, 5a, 10a and the notes; splitting and joining are descriptions only; the relabelling beat is deleted. Risk: C5 appears to call them "fixed numbers", and I could not confirm the voiced words "forward number" in C5 or C8 (new item 9). |
| 3 | Scene 2 re-derives K | Resolved | Scene 2 is a one-clause recall (60 words, from about 116), no "rearrange" beat, "in this model" kept. |
| 4 | Four-way contrast told twice | Partly | Scene 3 is now cause only for the temperature effect, but it still names adding, squeezing and a catalyst, and scene 6 still narrates all four in full (81 words) with the same "both numbers rise by the same factor" clause. The table is the right place, so scene 6 could narrate a lead-in plus its last three sentences. A repeat, not a learning blocker. |
| 5 | Scene 5 too many stages | Partly | Split into 5a and 5b and "top and bottom" is gone, but 5a is still 100 words with five moves (reverse equation, heat given out, flip, two values, K falls, then the reason). See new item 4. |
| 6 | Aid blurs shift and K | Resolved | Scene 8 puts the invariant first, uses heat-as-chemical for direction only, and says "Unlike a real reactant, heat changes the numbers themselves, which is why K moves." Aid-check limit (g) added. "Heating pushes the mixture right and K goes up" keeps the old sentence shape, but the next sentence undoes the conflation. Acceptable. |
| 7 | Attempt asks two items in 10 s | Resolved | One demand (above, equal or below 49, short reason), every condition on the card, ends "Pause here to answer.", 10 s countdown, heat sign only in the givens card. Fits the owner rule. See new item 3 for the feedback gap. |
| 8 | Q does not reproduce; scene 7 stacked | Resolved for 7a, new problem in 7b | 0.0232 squared over 0.0884 is 0.00609, rounds to 0.0061, with the "Q: no unit written" tag, and the scene is split. But 7b's hot amounts 0.035 and 0.13 give 0.0169 / 0.035 = 0.483 on a calculator (new item 2). |
| 9 | Key note 5 teaches an unnarrated direction | Resolved, one clause open | Scene 11 now narrates "if a table shows K rising as the temperature rises, the forward reaction takes in heat". The note's last sentence ("the bigger the heat of reaction, the bigger the change in K") is narrated only by one clause in 10a ("only slightly, because the heat involved is small"). See new item 8. |
| NTH 1 to 9 | Hook tension, one log line, no rate bars in 4a, content names, "what a bigger K looks like", ICE tag, heat on the givens card, fewer numerals | Resolved | All visible in the revised scenes. NTH 6 raises new item 7. |

### New findings introduced by Revision 2

No blockers. Nine should-fix items, all script-lock edits.

| # | Scene | Exact words | Likely student question | Concrete repair | What it enables |
| --- | --- | --- | --- | --- | --- |
| 1 | 7b | "Forward over reverse is K over Q, so about eighty times quicker, in this model." | The lesson has just taught "K is the forward number over the reverse number". "Forward over reverse" now means a different ratio (forward rate over reverse rate, equal to K over Q). The same words name two things in the next breath. | Say "forward rate over reverse rate is K over Q" and label the bars "forward rate" and "reverse rate" on screen. Add half a sentence: "These are the rates right now, not the fixed numbers." | One meaning per phrase, so Q below K reads as a speed difference and not a restated K. |
| 2 | 7b | Visual readouts "0.035 and 0.13 mol/L" with K 0.49 and the tag "you can check them" | 0.13 squared over 0.035 is 0.483 on a calculator, not 0.49. This is the checkability fault the first review fixed in 7a. | Show 0.0348 and 0.1305 (0.1305 squared over 0.0348 is 0.489, rounds to 0.49). | Numbers the tag invites a student to check do check. |
| 3 | 10a, 10b | 10a names only "K rises because everything is faster". 10b's chip "K changed because it shifted" answers a question nobody was asked. | After a lesson that says "change anything else, K stays", the most likely wrong answer to "above, equal or below 49" is **equal to 49**. The feedback never meets it, and the 10b wrong answer is not an answer to the attempt as now written. | In 10a add a chip and one clause: "If you said equal, remember K stays fixed only while the temperature stays fixed." Keep the "K rises" chip. Introduce 10b as an extra check of the aid's first line ("Now the first line of the aid") rather than "the other half of the rule", and keep its chip. | Feedback matches the real wrong answers to the real question, and 10b reads as an extra example, not a missed demand. |
| 4 | 5a, 5b | 5a: "...So here K falls when you heat it. The reason is the same: heating speeds up the reaction that takes in heat more, and that is now the reverse reaction, so the reverse number grows more than the forward number." | 100 words: flip, two numerals, a sign change and a causal reason before the rule is stated. The reason arrives while the learner is still checking 160 and 2.0. | 5a ends at "So here K falls when you heat it." 5b opens with the reason (about 30 words, dials visual already planned) and then gives the two-case rule. Word count unchanged, one stage each. | One stage per scene as the revision claims, with the reason attached to the rule it supports. |
| 5 | 4b, 4a | 4b: "the forward number must have grown about eighty times more than the reverse number". 4a: "K is about eighty times bigger." | "Eighty times more" reads as a difference or as 81 times. The meaning is a ratio of growth factors. The made-up pair shows it, but the sentence before is ambiguous. | "...must have grown about eighty times as much as the reverse number, in proportion." Use "eighty times as big" in 4a. | The ratio idea is stated before the example, not inferred from it. |
| 6 | 11 | "Takes in, heating raises K and cooling lowers it. Gives out, heating lowers K and cooling raises it." | The third spoken statement of the rule (5b, 8, 11), plus note 3 and the aid. Scene 11 should tell the student what to do with a question, not recap again. | Keep the question card, the converse (table to sign), the "everything else, K stays" line and the handoff; replace the two rule sentences with "Use the rule you just saw." About 30 words fewer, no cause lost. | A decision scene instead of a third recap, and the new converse sentence stands out. |
| 7 | 4a | "...Start with 0.10 moles per litre of N two O four. At twenty-five degrees it settles with only about twelve percent split... At a hundred degrees about sixty-five percent... K is about eighty times bigger." (82 words, 7 numerals). Tag: "you can check them with the ICE table method." | Two stages (the K values, then the tube) with seven spoken numerals. The tag relies on g03, but the design's entry-knowledge list stops at C1 to C8, so a learner without g03 meets "ICE table" cold. | Reveal in two beats matched to narration (K values with the log line; then 0.10 and the tubes). Use the existing reserve cut: delete "K is about eighty times bigger" (the bracket shows it and 4b says it). Add g03 to entry knowledge, or reword the tag "solved off screen, not needed here". | Lower listening load for the heaviest evidence scene, and no unexplained method named. |
| 8 | 10a, 10b | 10b: "the hydrogen underneath gets bigger, so Q falls below K". 10a: "the heat involved is small". Note 5: "the bigger the heat of reaction, the bigger the change in K". | "Underneath" is the top-and-bottom wording the first review removed from scene 5, and the size claim in the notes is half narrated. | 10b: "more hydrogen in the reactants makes Q smaller, so Q falls below K". 10a: add "the N two O four reaction takes in much more heat, and K changed eighty times". | Plain wording, and the size sentence in the notes is taught before it is copied. |
| 9 | 2 | "Remember the rate model from the expressions video... equals the forward number divided by the reverse number." | The design says the names are "as in C5 and C8", but the C5 design uses "fixed numbers" and I found "forward number" only in a C8 author note. If the voiced C5 and C8 never said it, it is a new term used without introduction. | At first use say "the two fixed numbers: call them the forward number and the reverse number". Confirm against the voiced C5 and C8 words before recording. | The vocabulary is introduced, not assumed. |

### Nice to have

1. Scene 1 "K is the ratio of the settled amounts" is loose for N2O4 (a squared term). "K is built from the settled amounts" avoids a later quibble.
2. The "eighty" in 4a (K ratio) and in 7b (rate ratio) are equal only because the cold settled Q equals the old K. A half sentence in 7b ("the same eighty, since Q was the old K") stops it looking like a coincidence.
3. Scene 12 heading should read "Key notes: what to write in your book" as in AGENTS. Note 5 holds table reading, the flip and size (three ideas); consider giving the flip its own line.
4. Scene 8 is 91 words; it can lose "to hold it in your head" and one "K goes up" without loss.

### Learner trace (revised lesson)

1. Scene 1: the tube from C3, K fixed through additions, now a real tension. Passes.
2. Scene 2: short recall. Works if "forward number" is introduced (item 9).
3. Scene 3: cause of the temperature effect with a moving dial. Passes; some repeat of scene 6.
4. Scenes 4a, 4b: evidence first, example second, logic now honest. Items 5 and 7 are wording and load.
5. Scenes 5a, 5b: one idea, both signs. Item 4 (move the reason).
6. Scene 6: table separates what you do, what moves, K. Passes.
7. Scenes 7a, 7b: 7a clean and checkable. 7b has the double meaning of "forward over reverse" and a figure that does not check (items 1, 2).
8. Scene 8: aid with its limit said aloud. Passes.
9. Scene 9: one demand, every given visible, 10 s countdown after "Pause here to answer." Passes. Placing the heat sign, applying the rule and saying "below" with a short reason fits ten seconds.
10. Scenes 10a, 10b: cause explained, wrong answers only partly matched (items 3, 8).
11. Scenes 11, 12: converse now narrated; third recap of the rule (item 6). Key notes short and copyable.

### Checks

| Question | Result |
| --- | --- |
| One main question | Yes. |
| One stage at a time | Mostly. 5a, 4a and 7b still carry two stages each (items 4, 7, 1). |
| Visual medium | Yes in plan: dials, log line with a moving K marker, tubes with percent grids, table, Q climbing. 4a is the busiest board. |
| Attempt fits "Pause here to answer." plus 10 s | Yes. One demand, owner rule respected, no longer hold asked. |
| Key notes | Yes. Five items plus the aid, optional hold; notes now match what was narrated apart from the size clause (item 8). |
| No re-teaching | Better. Scene 2 is a recall. The rule is spoken three times (item 6). |
| Em dashes (U+2014) | None. |
| Length | 1196 words, about 8.5 minutes, inside the 8 to 9.5 target. Items 6 and 7 save about 40 words; items 3, 4 and 8 add about 40. Net unchanged. |

### Verdict

**Pass after listed fixes.** No blocker remains. Of the nine first-review items, seven are resolved and two (4 and 5) are partly resolved; the revision improved the logic (evidence first, one vocabulary, a single-demand attempt). Apply new items 1 to 9 in the script lock (priority 1, 2, 3, 9, then 4, 5, 6, 7, 8), plus the scene 6 trim from partly resolved item 4. Then re-review the voiced preview for scenes 2, 4a, 4b, 5a, 5b, 7b, 10a, 10b and 11. Human listening pending.

## Re-review (Revision 4, 15 Oct)

See `c9-rev4-learning-review.md` (rate model removed; 2 blockers and 3 should-fix items, all resolved in Revision 5 of the design).
