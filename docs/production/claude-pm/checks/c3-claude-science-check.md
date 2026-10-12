# C3 Claude science check

Checked `lessons/chem-m5-c03.md` (revision 4): every quoted narration line, Visual text, key notes, memory aid, attempt and feedback, against `site-extracts/chem-m5-l05.md` and the NSW Chemistry Stage 6 Syllabus (2017) dotpoint quoted there. No stills exist, so screen checks were skipped. No U+2014 characters in the file (searched). Narration word counts recounted by script: 1425 words, matching the design (1425 / 185 wpm = 7.7 min).

## Findings

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | Scene 9 Visual and scene 13 condition tag: "for a dissolved or gaseous substance in the equation, or for heat" | The tag drops the condition that makes the aid valid for gases: a fixed-size container (key note 2 and the attempt state it, the tag does not). Adding a gas at constant pressure enlarges the volume and dilutes the other gases, so "add it and the shift goes away from it" can be false; that is C4 content. | Change the tag to "for a dissolved substance, a gas in a fixed-size container, or heat". |

Syllabus and site mismatch: None found. Content matches the syllabus examples "iron(III) thiocyanate and varying concentration of ions" and "heating cobalt(II) chloride hydrate" (solution form substituted, recorded in the design as a deliberate departure); all Keq content is deliberately deferred.

Copy: None found.

## Verified (with arithmetic)

Model: forward = 0.3 x [Fe3+][SCN-], reverse = 3 x [FeSCN2+]. Ratio 0.3/3 = 0.1.
- Equilibrium (10, 10, 10): forward 0.3 x 100 = 30; reverse 3 x 10 = 30. Correct.
- Add 7 Fe3+ (17, 10, 10): forward 0.3 x 170 = 51 (also 30 x 17/10 = 51); reverse 30; gap 21. Correct.
- One step later (16, 9, 11): forward 0.3 x 144 = 43.2, shown as 43; reverse 3 x 11 = 33; gap 10. Correct. Stoichiometry: Fe -1, SCN -1, FeSCN +1.
- New equilibrium (15, 8, 12): forward 0.3 x 120 = 36; reverse 3 x 12 = 36; 12/(15 x 8) = 0.1 so it is the true equilibrium. Mass balance: Fe 15 + 12 = 27 = 10 + 10 + 7; SCN 8 + 12 = 20. "Added 7, used up 2": 17 - 15 = 2. Correct. Both rates rise (36 > 30) because reverse = 3 x 12 and 15 x 8 = 120 > 100. Correct as worded.
- Removal (SCN 10 to 6): forward 0.3 x 10 x 6 = 18 (also 30 x 6/10 = 18); reverse 30. Let y split: 10 - y = 0.1(10 + y)(6 + y) gives y^2 + 26y - 40 = 0, y = (-26 + sqrt(676 + 160))/2 = (-26 + 28.914)/2 = 1.457. So red 8.54, Fe 11.46, SCN 7.46; rates 3 x 8.54 = 25.6 and 0.3 x 11.46 x 7.46 = 25.6. Matches "about 26", "about 8.5, 11.5, 7.5". Correct.
- Cobalt made-up rates: gaps 50 - 38 = 12, 46 - 41 = 5, 44 - 44 = 0, as shown. Forward factor 50/30 = 1.67 exceeds reverse factor 38/30 = 1.27, so the heat-absorbing rate gains more, as the physics requires. New equilibrium 44 > 30 because products rise and the reverse rate constant rises. Plausible.
- N2O4 remove-NO2 case: Q < K so the forward shift occurs, and [NO2]new^2 = K[N2O4]new < K[N2O4]old = [NO2]old^2, so NO2 ends lower than before: "partly returns, stays paler" is correct.
- Words per scene sum: 104+50+88+84+103+73+101+64+69+86+110+124+131+173+49+16 = 1425.

Chemistry confirmed against sources:
- [Co(H2O)6]2+ + 4Cl- <=> [CoCl4]2- + 6H2O: forward endothermic (delta H > 0), pink to blue on heating, back to pink on cooling and on adding water. [Wisconsin demo lab](https://demolab.chem.wisc.edu/general-chemistry-demonstrations-topic-page/equilibrium-chloro-complexes-of-cobalt-ii-2/), [ScienceReady M5 cobalt](https://scienceready.com.au/pages/copy-of-m5-s5-practical-investigations-of-le-chateliers-principle), [Illinois chemistry demo room](https://www.chemdemoroom.web.illinois.edu/demos/cobalt-complex-equilibrium.pdf). Equation, colours, direction, endothermic and exothermic labels and the narration are correct.
- N2O4(g) <=> 2NO2(g): N2O4 colourless, NO2 brown, forward endothermic, delta H about +57 kJ per mole of N2O4 (Chemguide gives +56.9). Cooling favours N2O4 and lightens the colour. [Chemguide](https://chemguide.co.uk/14to16/reversible/temperature.html), [ScienceReady NO2/N2O4](https://scienceready.com.au/pages/nitrogen-dioxide-dinitrogen-tetroxide-equilibrium).
- Ag+ + SCN- gives AgSCN(s), white; removing SCN- shifts left and the red fades. [ScienceReady iron(III) thiocyanate](https://scienceready.com.au/pages/ironiii-nitrate-equilibrium), [Harvard demonstration](https://sciencedemonstrations.fas.harvard.edu/presentations/equilibrium-iron-iii-thiocyanate).
- Temperature explanation (both rates rise, the heat-absorbing direction rises more): Ea(forward) - Ea(reverse) = delta H, because K = kf/kr and d ln K/dT = delta H/RT^2. Correct as worded; no activation energy named.
- The heat-in-the-equation placement (left if forward absorbs heat, right if it releases) is correct, and every case in the memory-aid check follows it.

## UNVERIFIED

- Scene 1 "Over a minute, it slowly deepens" and scene 2b "colour not changed yet": sources conflict on how fast FeSCN2+ forms (one lab manual says nearly instant, a Vernier document says about a minute), and adding Fe3+ also adds its own yellow-brown colour at once ([Vernier](https://www.vernier.com/files/training/nsta-2019/vernier.challenging_ap_chemistry_topics_made_easier.pdf), [LibreTexts](https://chem.libretexts.org/Courses/Los_Medanos_College/General_College_Chemistry_Lab_Manual_(Semester_2)/01%3A_Experiments/2610_Determination_of_a_Formation_Constant)). The model claim is fine; the real-time claim is not confirmed.
- Colour key "Fe3+ pale orange": sources say yellow or yellow-brown. Not confirmed as "orange".
- Cobalt delta H magnitude (author note says about +50 kJ per mole): sign confirmed, magnitude not sourced. Not shown on screen.
- Scene 7a "purple mix at room temperature": depends on chloride concentration and solvent; not confirmed for the stated solution.
- Scene 11 visual "near colourless" in ice water: sources say "lighter" or "yellowish"; the 0 degree C fraction of NO2 was not computed.

Count: 1 finding (1 science), 5 UNVERIFIED.

## Resolution (Claude science check)

Applied 12 Oct to `../lessons/chem-m5-c03.md` (revision 5, "Claude science check resolved; ready to voice"). Narration is now 1422 words (was 1425); the only narration edits are the wording changes below. No U+2014 characters were introduced.

| # | Item | Resolution |
| --- | --- | --- |
| 1 | Condition tag missing the fixed-size container (finding 1) | Changed to "for a dissolved substance, a gas in a fixed-size container, or heat" in the scene 9 visual, the scene 13 key notes tag, the Decisions memory aid line and the memory aid check assumptions. |
| U1 | Hook "Over a minute, it slowly deepens" | Now "It deepens." with no time claim. The author note says the video makes no timing claim and that adding Fe3+ also adds its own yellow-brown tint at once. |
| U1 | Scene 2b "colour not changed yet" | The tag is now "the instant after adding, before the reaction responds", described as a freeze-frame of the model, not a claim about real colour timing. |
| U2 | Colour key "Fe3+ pale orange" | Now "pale yellow" in the colour key, the particle view dots (pale yellow), the added dots and the graph curve. The author note already said pale yellow. |
| U3 | Cobalt delta H magnitude (about +50 kJ) | Removed. Only the sign is kept; no magnitude appears in narration, on screen or in the notes. |
| U4 | Scene 7a "a purple mix" at room temperature | Now "between pink and blue, a purple." |
| U5 | NO2 in ice water "near colourless" | Narration and visual now say "much paler" (feedback scene 11 and the memory aid check). The attempt still calls N2O4 itself colourless, which the sources confirm. |

Nothing UNVERIFIED is claimed in learner copy after these edits. Codex fact check of the rate model values stays with Codex.
