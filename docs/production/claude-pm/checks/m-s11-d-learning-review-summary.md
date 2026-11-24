# Maths Standard Y11 Data analysis (d01 to d19, 20 designs): learning review summary

24 November 2026. Independent student learning review of the Revision 1 first designs `lessons/math-s11-d01.md` to `d19.md` (with `d06a` and `d06b`), using `docs/production/student-learning-review.md`, AGENTS.md, the maths visual standard, route inputs 14 (including its "year12DependsOn" block), the design status file (section 1d), the coherence audit (N5, N9), the kit-needs file and site findings MSY-33 to MSY-47. The site clone was read only to spot-check MSY-44 (lesson11 SA 1 (c)), MSY-46 (lesson13 SA 2) and MSY-47 (lesson10 "leaves the median unchanged"); all three findings are confirmed. Written designs and narration only: no built preview, plate inspection, playback or human listening is claimed. No design was edited.

Every worked number was recalculated (scratchpad `rev/s.py` and `rev/t.py`, `python -I`): means, medians and quartiles by the halves method, IQRs and fences, σ and sx, frequency and cumulative tables, percentages, sector angles, the stem-and-leaf and dot-plot counts, and every attempt. The strand's shared data are consistent everywhere they reappear: the 20 sleep values (total 144, mean 7.2, median and mode 7.5, Q1 6.5, Q3 8, IQR 1.5, σ 1.391, fences 4.25 and 10.25), the 12 and 8 phone split (bedroom total 79, elsewhere 65, together exactly the 20 values), the 6 bus students (5 and 1), and the 30 screen times (3, 9, 7, 5, 3, 2, 1). Only two stated values are wrong: d08's "every two hours" and d19's drag stop (IQR 1.25, not 1.5). The other findings are about teaching claims and practice design.

## Verdicts

| Design | Blockers | Should fix | Notes | Verdict |
| --- | --- | --- | --- | --- |
| d01 statistical investigations, survey questions | 0 | 1 | 1 | Ready after should-fix |
| d02 privacy, bias and ethics | 0 | 1 | 1 | Ready after should-fix |
| d03 sampling methods | 0 | 0 | 1 | Ready |
| d04 faults in data collection | 0 | 0 | 2 | Ready |
| d05 types of data | 0 | 0 | 1 | Ready |
| d06a frequency tables, histograms, polygons | 0 | 0 | 2 | Ready |
| d06b cumulative frequency | 0 | 0 | 1 | Ready |
| d07 choosing a graph, spreadsheet charts | 0 | 0 | 2 | Ready |
| d08 reading statistical graphs | 0 | 1 | 2 | Ready after should-fix |
| d09 shape of a distribution | 0 | 1 | 1 | Ready after should-fix |
| d10 infographics and misleading graphs | 0 | 0 | 2 | Ready |
| d11 mean, median and mode | 0 | 1 | 1 | Ready after should-fix |
| d12 choosing a measure of centre | 0 | 1 | 2 | Ready after should-fix |
| d13 range and standard deviation | 1 | 0 | 2 | Revise scenes 3 and 4 first |
| d14 comparing datasets | 0 | 1 | 1 | Ready after should-fix |
| d15 quartiles and the IQR | 0 | 0 | 1 | Ready |
| d16 box plots | 0 | 0 | 2 | Ready |
| d17 parallel box plots | 0 | 0 | 2 | Ready |
| d18 clusters, gaps and outliers | 0 | 1 | 1 | Ready after should-fix |
| d19 the effect of an outlier | 0 | 1 | 2 | Ready after should-fix |
| **Total** | **1** | **9** | **30** | |

## Blocker in full

**d13 scenes 3 and 4 (D13-RESIST).** Scene 3 shows Bus A's breakdown day (3, 4, 4, 4, 5, 15) stretching the range from 2 to 12, so Bus A looks less consistent than Bus B. Scene 4 then says σ fixes this: "Every value counts, so one odd day can't take over the way it does with the range." That is false, and the video's own data show it: with the breakdown day, Bus A's σ rises from 0.58 to 4.14 minutes, above Bus B's 3.11, so σ reverses the comparison exactly as the range did. d19 later teaches, correctly, that an outlier pulls σ. Students would learn a wrong idea in d13 and meet the contradiction in d19 (or on their calculator). Fix: motivate σ by using every value's distance (for example Bus B 0, 1, 2, 6, 7, 8 against Bus C 0, 4, 4, 4, 4, 8: same range 8, σ 3.11 against 2.31), say an extreme value still pulls σ (d19), and point to the IQR (d15) as the measure that ignores the ends. Update cause chain item (3) to match.

## Should-fix list (one line each; details in each file)

- d01 D01-GUIDE: the 8 to 10 hour sleep guideline is a real-world fact used as the strand's yardstick; put the dated source on the chip and in the description.
- d02 D02-FILTER: "one of them slept four hours, and everyone knows who it is" uses the answer to identify the person; make the third filter an ordinary detail (for example "plays the cello", count 1).
- d08 D08-2HRS: "measured every two hours" is false for readings at 3, 4 and 5 pm; say "ten times through the day".
- d09 D09-SLIDER: "the bulk has to shift left to make room" invents a mechanism; keep the bulk fixed and let the tail stretch, and say why the peak sits opposite the tail.
- d11 D11-SIGMAX: Σx (the total) is spoken "sigma x", the same words d13 uses for σx (the standard deviation); say "the total" or "capital sigma".
- d12 D12-SEEN: A1 repeats scene 6's café-manager case and A2 (ii) repeats scene 3's house prices; change scene 6's card (one viral song) and A2 (ii) (helpline waits).
- d14 D14-SEEN: scene 6's card shows A1's coffee machines with A1's σ values; use the bakeries case in scene 6.
- d18 D18-GAP: "nobody lives at that in-between distance" contradicts the bus-route explanation; explain the gap by how students travel.
- d19 D19-DRAG: at the 7.5 stop the IQR is 1.25 and σ 1.00, not 1.5 and 1.03; stop at 6, or change the spec.

## Cross-video and strand-level patterns

1. **Arithmetic is clean, and the one investigation holds together.** Every split, total and summary agrees across d02 to d19. The design habit of listing "Numbers to verify" and building the 12/8 and 14/6 splits from one 20-value sample paid off: d04's hidden factor, d07's two-way table, d10's poster, d13 and d14's group statistics, d16 and d17's box plots and d19's conclusion all reconcile.

2. **The strand's one false teaching claim is about resistance.** d13 says σ resists one odd value; d12, d15 and d19 teach resistance correctly (median and IQR resist; mean, range and σ do not). When a scene motivates a new measure by a weakness of the old one, check that the new measure actually fixes it on the same data.

3. **Practice sometimes repeats what a teaching card has just answered.** d12 (both attempts) and d14 (A1) reuse a context, and sometimes the exact values, from a "fits or misleads" gallery card shown seconds before. The gallery scenes are a strong format; give them contexts that the attempts do not use. Elsewhere attempts are genuinely unseen.

4. **Side remarks carry the small errors, not the worked rows.** d08's sampling interval, d18's gap explanation, d02's identification step and d09's slider mechanism are all asides or picture descriptions. A Codex error-check pass should read each causal sentence and each stated interval, not only the calculations.

5. **Notation said aloud needs care.** "Sigma x" for both Σx and σx (d11, d13), and "Ran#" as a brand key label (d03). With calculators unbranded, keep spoken names unambiguous.

6. **Year 12 set-up is met word for word.** b01 (dot plot, mean, median; d05, d08, d11), b02 (outlier "well away from the rest"; d18), b03 (both study types; d04), b04a ("the mean = total ÷ how many"; d11), b05 ("the calculator's statistics mode"; d13), b06 (spreadsheet charts; d06b, d07), p05 (tally, frequency table; d06a), p07 (categorical tables; d07), p08 (random and self-selected samples, misleading displays; d03, d10), z01 (centre, symmetric, skewed, "pulled towards the tail", σ as spread; d09, d11, d12, d13), z02 and z03 (σx only, by calculator; d13). Fixing d13's blocker matters for z02 and z03, which build the normal distribution on σ; Year 12 students should arrive knowing σ is pulled by extreme values.

7. **Site fit is good and well documented.** Each design follows its site lesson where the site is right and records departures as MSY items (questionnaire principles, privacy and diverse groups, experiments, uniform, infographics, spreadsheet statistics, quartiles from graphs, clusters and gaps). The three arithmetic errors the designs report in lessons 07, 11 and 13 are real; MSY-44, MSY-46 and MSY-47 were confirmed in the clone.

8. **Visual standard.** Strong recurring models (the investigation strip, the dot field sampler, the type tree and graph chooser, the order strip with folds, the fence builder, the claim gallery) and a fixed colour role set. Every graph and statistical display is coded, none is an AI image. Picture-slot mismatches are small and listed as notes (a food truck as a school canteen, a cricket scoreboard for soccer goals twice).

9. **Ten-second countdowns against heavy demands.** d06a A2 (bin 20 values), d13 A1 (two calculator lists), d14 A2 and d16 A1 ask for more than 10 s of work. The owner rule fixes 10 s and every attempt says "Pause here to answer.", so this is not a finding; every card keeps its full data through the countdown, as designed.

10. **Real-world facts.** The only real-world statistic presented as fact is the sleep guideline (D01-GUIDE, carried in d16 and d19). Other figures (house prices, phone plans, battery life, the leading-question result, the self-selected poll) are labelled examples or are clearly invented; d12's battery card should say "example" (note).

11. **Anchors are everyday and varied** (sleep, phones, screen time, cafés, buses, cricket, gyms, concerts, food delivery, hoodies, part-time pay, swimming, coffee machines). No science default; no people drawn.

No em dash in any of the 20 sources or in these review files. Human listening and voiced-preview review remain pending; this is a written-design review, not evidence that students learned.
