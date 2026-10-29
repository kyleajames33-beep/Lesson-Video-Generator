# m8c02 learning review: from dry precipitate to ion concentration

Independent AI review, 28 October 2026. Input: `../lessons/chem-m8-c02.md`, Revision 1, read in full. Followed the student-learning review, brief 109, standing rules and Module 8 route review. Source only; no voiced preview, playback-speed motion review, human listening or real learner trial.

Main question: how can dry precipitate mass reveal sulfate content, and what makes the number trustworthy? Entry knowledge: precipitation, Ksp, common-ion effect and mole conversions. Trace: sulfate solution → excess barium → larger crystals → filtered, washed, dried solid → mass by difference → moles BaSO₄ → equal sulfate moles → sulfate mass → percentage or concentration.

## Keep

Barium against calcium is a useful choice with a reason. The crystal growth, wash drops and repeated weighing each show why a method step matters. The worked example separates task, ionic equation, masses and reference molar masses. Earlier useful results remain while later stages replace irrelevant lines. The switch from mass percentage to water concentration is explicitly a different case. Practice 1 transfers to AgCl; practice 2 tests whether repeating a biased method solves its problem. Both questions keep their full conditions during the countdown, and notes have a quiet hold.

## Findings

| # | Severity | Where | Problem | Concrete repair |
| --- | --- | --- | --- | --- |
| 1 | blocker | Scene 6 weighing loop and scenes 7 to 8 mass difference | Every weighing plate includes a watch glass, but 1.255 g is treated as paper plus solid and only 0.905 g of paper is subtracted. The student is shown one mass and asked to calculate from another. A container mass left in the result defeats the main calculation. | Show the empty dry watch glass being tared before the loop, and label all readings "watch glass tared: paper + solid". Keep the 0.905 g paper measured on the same tare basis. Alternatively include watch glass + paper in both initial and final masses and revise their labels consistently. The first option preserves every number. |
| 2 | should fix | Scene 4, quiet "sample acidified first" chip | The method is presented as cause-based, but this condition appears without its acid or purpose. In actual water, carbonate can add another white barium precipitate and inflate the result. This is precisely a condition needed for "only that solid". | Replace the opening with "Dissolve the sample, add dilute hydrochloric acid to remove carbonate, then add excess barium chloride." Show carbonate leaving as CO₂ before the barium drop. Keep the purpose to one clause; do not add a new method scene. |
| 3 | should fix | Scene 6, "Constant mass is your evidence that you're weighing only the solid." | A dry impurity also gives constant mass. This sentence turns a dryness check into a purity test and conflicts with the later unwashed-solid question. | Replace the last two sentences with "When successive readings agree, further drying is no longer removing measurable water. That's constant mass. Washing still matters: dry impurities would also stay on the balance." Keep the existing four readings. |
| 4 | should fix | Scene 10 and feedback 2, "It makes the results agree" and "The results agree, so they're more reliable" | No repeated readings are given, and repeating a biased method does not guarantee agreement. The answer teaches students to infer reliability from the count of trials rather than their spread. | Scene 10: "Repeating the same faulty method won't remove its bias." Feedback: "Repeating and averaging may reduce random variation, but won't remove the high bias from unwashed salts." Replace "reliable, not accurate" by "repeats do not remove this bias". |

## Checks

All arithmetic matches: 1.255 − 0.905 = 0.350 g; ÷233.39 = 0.0014996358 mol; ×96.06 = 0.1440550 g; ÷0.500 ×100 = 28.8110%. A 0.2500 L water case gives 0.00599854 mol/L, 0.576220 g/L or 576 mg/L. Practice: 0.955 − 0.812 = 0.143 g; ÷143.32 = 0.000997767 mol; chloride 0.0353708 g; ÷0.0500 = 0.707417 g/L. Using the whole 0.955 g gives 4.72401 g/L, 6.68 times the correct answer.

The 17 scene strings total 5,775 characters. No U+2014. Feedback 1 is about 31.3 s before its settle; trim its spoken intermediate moles if exact audio exceeds 30 s, leaving the working visible. This is a small timing decision, not an added finding. No wholesale restyle or extra misconception scene is needed.

**Count: 1 blocker, 3 should fix, 0 optional.**

## Resolution

Resolved in `../lessons/chem-m8-c02.md` Revision 2 (30 Oct; root resolver, Claude PM). Overlapping fixes with `m8c02-claude-science-check.md` were merged into one edit each. Recount by script: 5,918 characters, about 538 s (feedback 1 about 28 s, feedback 2 about 25 s).

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (merged with science 1; the review's first option, every number kept) | Scene 6: "The balance is zeroed with the empty watch glass on it, so each reading is just the paper and the solid." A coded "0.000 g" readout with the tag "tare: balance zeroed with the empty, dry watch glass" writes before the balance plate lights; every reading is captioned "watch glass tared: paper + solid". Scene 5's paper is "dried and weighed first, on the tared watch glass", and scene 7's givens read "watch glass tared: filter paper 0.905 g; paper + dry BaSO₄ 1.255 g (constant mass)". |
| 2 | Fixed | Scene 4 opens "Dissolve the sample, add dilute hydrochloric acid to remove carbonate, then add excess barium chloride solution." Small bubbles leave on "carbonate" (chip "dilute HCl: carbonate leaves as CO₂, so no BaCO₃ forms") before the barium drop. The quiet chip is gone; no new scene. Key note 3 matches. |
| 3 | Fixed (merged with science 3) | Scene 6 ends "Then further drying is no longer removing measurable water: that's constant mass. Washing still matters, though, because dry impurities would stay on the balance too." The four readings are unchanged. |
| 4 | Fixed (merged with science 4) | Scene 10: "And repeating the same faulty method won't fix it. Averaging can smooth out random scatter, but an error that's the same every time stays in the average." Feedback 2: "Averaging may reduce random scatter, but it can't cancel an error that's the same every time." "Reliable, not accurate" is replaced by the chip "repeats do not remove this bias". |

Also changed (the review's timing note): feedback 1 no longer speaks the intermediate moles (the screen line keeps 9.98 × 10⁻⁴ mol), bringing it from about 31 s to about 28 s.
