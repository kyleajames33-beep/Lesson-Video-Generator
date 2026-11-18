# Year 12 Maths Standard p01 to p08: learning review resolution

19 November 2026. This is the design author's resolution of `m-s12-p01-p08-learning-review-summary.md` and the per-design files `m-s12-<id>-learning-review.md` for p01 to p08. It applies root's four binding decisions for this round: (1) "invented example" labels go on records and surveys only (the app record in p05, the staged months and the pie figure in p06, the canteen survey in p07, the advertisement in p08), not on set-ups such as marble bags or "say the bus is on time 0.8", with the shared frames in sections 3 and 6 of the decisions file updated to match; (2) the "done" chips that Standard 1 viewers see are reworded "Standard 2: ... done"; (3) p03's without-replacement scene stays, "Of whom?" stays, and p06 is not padded; (4) every should-fix is applied, cheap optional findings are applied, each design stays under 570 s, and every decision is recorded. All eight designs now carry a "Revision 2 (19 Nov 2026): learning review resolved" section at the top, and their Status lines say "Revision 2 (19 Nov 2026): learning review resolved". `checks/root-decisions-maths-s12-p01-p08.md` is updated in sections 1, 2, 3, 5, 6, 7 and 13. This round changed documents only: no speech, build, render, plate or commit, and no sub-agent. Changed values were rechecked with Python `fractions` and `math.comb` (`work/brief-resolve-standard-p/verify.py`, `python -I`, 30 checks, 0 failures). Narration was recounted by script as the sum of the scene strings (`work/brief-resolve-standard-p/count.py`, which reproduces e08's 5,632). Codex's maths check remains the authority.

**Totals:** 28 findings (0 blockers, 14 should fix, 14 optional). Should fix: all 14 applied; 10 use the reviewer's wording or fix as written, 3 follow root's decision 1 as written (the label findings p05 #3, p06 #1 and p07 #1), and 1 is adapted in form (p04 #1, where scene 6 also says the bus and train names aloud instead of only showing tags). Optional: all 14 applied. 2 are applied through root's decision 2 (p05 #5, p08 #3), 1 is applied as a hand tag only, with no narration (p08 #2), and the other 11 use the reviewer's wording. None declined.

## Should fix

- p01 #1, scenes 3 and 4, A1 and key note 2 (decimal to fraction asked but never taught): accepted, reviewer's wording. Scene 3: "And back the other way, zero point two is two tenths, which simplifies to one fifth." (new cue "tenths", a grey return arrow "place value, simplify" in the converter), and "divide the top by the bottom". Scene 4: a fourth givens line "decimal → fraction: place value, then simplify (0.2 = 2/10 = 1/5)" and "two places to the right". Key note 2: "Fraction → decimal: top ÷ bottom. Decimal → %: × 100."
- p01 #2, scene 6 (two identical coins): accepted. "Think of coin one as a ten-cent coin, and coin two as a dollar coin." Coded tags "coin 1: 10c" and "coin 2: $1" (new cue "dollar"), no painted change; "HT ≠ TH" gains the caption "10c heads, $1 tails ≠ 10c tails, $1 heads".
- p02 #1, scene 2 (why favourable over total): accepted, reviewer's wording and visual. "The whole chance, one, is shared equally between ten marbles, so each marble has one tenth of it. Five of the marbles are blue, so blue gets five tenths." A unit bar splits into ten "1/10" pieces on the tokens (new cue "shared"), and the five B pieces join into "5/10" (new cue "tenths").
- p02 #2, scenes 2 and 3 (a random-looking run that comes out exactly even): accepted. The hops become an even deal titled "fair share over 40 draws: 4 each", and the colour bars are captioned "fair shares: red 12, blue 20, yellow 8". No narration change; p02's open decision 2 (the seed) is closed.
- p03 #1, scene 5 (the cause reversed): accepted, reviewer's wording. "The four colour pairs aren't equally likely, but the five marbles are. So give every marble its own name, B one, B two, B three, R one and R two, and count pairs of marbles." The hand tag becomes "B1, B2, B3: names let us count them", and the scene's closing sentence starts "That's why the four colour pairs ...".
- p04 #1, scenes 3 and 6 (A and B never named): accepted, reviewer's wording in scene 3 ("Call blue on the first draw A, and blue on the second draw B.", tags "blue 1st" and "blue 2nd"), and adapted in scene 6: the tags "A: bus on time" and "B: train on time" are also said ("Here, A is the bus on time, and B is the train on time."), about 3 s.
- p05 #1, scene 3 (whose coin?): accepted, reviewer's wording. "So let's watch what a fair coin does. A computer flips one a thousand times, and we plot the relative frequency of heads after every flip." The tag "simulated fair coin" sits on the run and on both lines of forty runs in scene 4.
- p05 #2, scene 4 (eight or more, when the coin got seven): accepted, reviewer's wording. "A fair coin gets seven or more heads in ten flips about one run in six". Readout "7+ heads in 10 fair flips: about 1 run in 6". 176/1024 = 11/64 ≈ 0.17. p05's open decision 2 is closed.
- p05 #3, scenes 5 and 12 (the app record not labelled): accepted (decision 1). "invented example" on the record in scene 5 and in the handoff frame (section 3, p06's opening).
- p06 #1, scenes 1 to 3 and 6 (labels missing): accepted (decision 1). Scene 1 inherits "invented example" on the record; scene 3's strip is tagged "simulated months"; scene 6's pie gauge is tagged "invented example". The survey card in scene 12's left panel is tagged too (section 6, for p07 #1).
- p06 #2, scene 5 (0.02 from nowhere): accepted, reviewer's wording ("Forty out of two thousand is zero point zero two, so the factory would need a faulty rate below that.").
- p07 #1, scenes 1 to 4 (the survey not labelled): accepted (decision 1). The card carries "invented example" from p06's frame, and the Venn rectangle carries it beside "80 students" in scenes 2 to 4.
- p07 #2, scene 4 ("and so on"): accepted, reviewer's wording. "Recess and no lunch is thirty take away twelve, eighteen. And no to both is thirty-five take away eighteen, seventeen." The "35" and "18" ring as "17" is found.
- p08 #1, scenes 2 to 7 ("Who paid?" never taught): accepted, reviewer's wording. "And who ran the trial? The app's own maker, who wants you to buy it. That doesn't make the claim false, but it's a reason to look harder." A footnote line "Trial run by the app's maker" appears in scene 2 only (the shared frames are unchanged); "Who paid?" lights amber "?" on the new cue "maker".

## Optional

- p01 #3, scene 1 (the kiosk owner's question unanswered): applied in scene 2 ("So the kiosk owner probably gets a dry day, but can't count on it."). The reserve trim now takes the question and the answer together.
- p01 #4, scene 2: applied ("like a coin landing heads, two sides, one of them heads").
- p02 #3, scene 6: applied ("Here's the shortcut in an exam question.").
- p03 #2, scene 1: applied ("Say the canteen runs a mystery deal, and picks both at random."); the board's tag is unchanged, so p02's handoff is unchanged.
- p03 #3, scene 4: applied ("Or means either one, or both.", grey chip).
- p04 #2, scene 5: applied ("two out of four, and two out of four"; "three out of four, and one out of four"); labels unchanged.
- p04 #3, scene 13: applied ("We'll use real results to estimate a probability. That's next.").
- p05 #4, scene 6: applied, reviewer's wording ("A sixth of a hundred and twenty is twenty, and every face came up between sixteen and twenty-four times, only a few either side."), grey row "120 ÷ 6 = 20; counts 16 to 24".
- p05 #5, scene 1: applied through decision 2 (p04's final frame chip now "Standard 2: probability trees done").
- p06 #3, feedback 1: applied, reviewer's wording. Feedback 1 is now 397 characters, about 29.8 s, still under 30 s.
- p07 #3, scene 5: applied (the givens card holds only "total 150"; one table carries the scene).
- p08 #2, scene 4: applied as a hand tag only ("a strong answer: the number, the sample, one specific problem"), because scene 4 is already the longest p08 scene.
- p08 #3, scene 1: applied through decision 2 (p07's final frame chip now "Standard 2: Venn diagrams and tables done").
- p08 #4, description: applied ("Next: Standard 2, The Normal Distribution: The Bell Curve.", z01's draft title without the series suffix).

## Root's decisions and housekeeping

- Decision 1 (labels): applied to records and surveys only. Strand-wide wording in section 2 of the decisions file now lists what is tagged and what is not (marble bags, cars nearby, the die, "say the bus is on time 0.8", the coin's tally card and the site's own examples are not tagged). Section 3 (p05 → p06) and section 6 (p06's left panel, p07's opening) carry the new tag.
- Decision 2 (chips): sections 5 and 7 of the decisions file, p04's and p07's final frames, and p05's and p08's Boundary lines now read "Standard 2: probability trees done" and "Standard 2: Venn diagrams and tables done". Both still fade on the first sentence of p05 and p08.
- Decision 3: p03's scene 6 stays (its open decision 1 closed); "Of whom?" stays (p08 open decision 2 closed by ruling 76); p06 is not padded.
- Open decisions closed in the designs, with the Revision 1 text kept: p02 #2 (the seed), p03 #1, p05 #2, p06 #1 (staged months, ruling 76), p08 #1 and #2 (ruling 76). Still open: p05 #1 (the seed must give 0.7, 0.54 and 0.507; ruling 76 accepts the values, the build must meet them), p04 #1 and p06 #2 (the train and pie warmer plates), p08 #3 (the forecast definition), p08 #4 (z01 dependency).
- New cues: p01 "tenths", "dollar"; p02 "shared", "tenths"; p04 "A" (scene 3), "time" (scene 6), and "four" twice in scene 5 in place of "quarters" and "quarter"; p08 "maker". Every bold cue is quoted in its scene's Visual in spoken order, and no design or the decisions file contains an em dash (U+2014) (both checked by script, `work/brief-resolve-standard-p/cues.py` and `count.py`).

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Feedback 1, 2 |
| --- | --- | --- | --- | --- |
| p01 | 5,124 | 5,410 | about 502 s | 24 s, 23 s |
| p02 | 5,012 | 5,162 | about 483 s | 22 s, 22 s |
| p03 | 5,122 | 5,251 | about 489 s | 23 s, 28 s |
| p04 | 5,086 | 5,219 | about 488 s | 26 s, 26 s |
| p05 | 5,189 | 5,369 | about 499 s | 25 s, 27 s |
| p06 | 4,981 | 5,083 | about 480 s | 30 s, 27 s |
| p07 | 5,007 | 5,115 | about 479 s | 26 s, 28 s |
| p08 | 5,465 | 5,603 | about 516 s | 29 s, 28 s |

All eight are under 570 s with holds (holds and settling are carried over from Revision 1 at about 94 to 98 s each). The longest scenes are p05 scene 6 (895 characters, about 67 s), p08 scene 4 (879), p06 scene 5 (870), p03 scene 4 (826) and p07 scene 4 (813); each is one board and one method stage, and p05 names a new first trim. These are speech-only estimates; measure them on the Google voice.

## Joins

- b07 → p01: unchanged (scene 1 is b07's final frame exactly).
- p01 → p02, p02 → p03, p03 → p04 (left panel), p03 → p05 (right panel): unchanged.
- p04 → p05: one chip text changes ("Standard 2: probability trees done").
- p05 → p06: the record gains "invented example" (section 3).
- p06 → p07: the survey card gains "invented example" (section 6, left panel).
- p06 → p08 and p07 → p08: p07's final frame changes in one chip text ("Standard 2: Venn diagrams and tables done"); p06's right panel is unchanged.
- p08 → z01: unchanged (section 8). p08's final frame is unchanged, as the brief asked. p01's opening is also unchanged.

## For root

- The train plate (p04) and the pie warmer plate (p06) are still unruled. Revision 2 keeps both; either can be dropped without other changes.
- p04 #1 is adapted: scene 6 says the bus and train names for A and B aloud (about 3 s) as well as tagging them. Confirm, or it can be tags only.
- p08 #2 is applied as a hand tag only. If root wants it spoken, the sentence costs about 5 s and makes scene 4 about 73 s; p08 would be about 521 s.
- p06 feedback 1 is now 29.8 s, at the top of the 15 to 30 s range.
- p05's seed (open decision 1) still has to give 7, 54 and 507 heads; the "simulated fair coin" tag does not change that.

Nothing recorded; human listening pending.
