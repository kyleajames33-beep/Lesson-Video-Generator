# math-s12-p05: How does relative frequency estimate a probability, and why do more trials help?

Maths Standard research pack (Year 12, Relative frequency and probability), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Relative frequency and probability):

- `ci6ac4e336`: Use relative frequency as an estimate of probability [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered.
- `ci74635662`: Recognise that increasing the number of trials produces relative frequencies that become closer in value to the theoretical probability [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered.

Standard 1 (Year 12, Relative frequency and probability):

- `cid7b76603`: Use relative frequency as an estimate of probability [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa473a4513).
- `ci35f2f92d`: Recognise that increasing the number of trials produces relative frequencies that become closer in value to the theoretical probability [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa473a4513).

These are CMS codenames, not published content-point codes. Wording identical.

**Course:** Standard 1 and Standard 2. Playlist order 73. Standard 1 viewers rejoin here from p03.

**Entry knowledge:** math-s12-p02 (`ci6224eb8c`; S1 `ci7cb75229`): theoretical probability from equally likely outcomes. math-s11-d06: `cia7a007a6` (frequency tables), for a tally of results. Standard 2 viewers also have p04; nothing here needs it.

**Prior video:** math-s12-p04 (Standard 2); math-s12-p03 (Standard 1, its right panel).

**Start:** One frame shared by p04's final frame and p03's Standard 1 panel (proposed): a coin and a tally card "10 flips: 7 heads": "is this coin unfair?" (the site's hook).

**Stop:** Relative frequency = number of times the event happened ÷ number of trials; it is an estimate of the probability, and the way to estimate one when no theoretical probability exists (how often a rideshare arrives within 5 minutes; how often a free throw goes in); comparing an estimate with a theoretical value (7/10 against 1/2); more trials give relative frequencies that settle closer to the theoretical probability (a running proportion drawn live over 10, 100, 1000 flips), but a short run can be far off, no finite run is guaranteed to match, and the next flip is never "due"; a larger sample is more trustworthy. Not taught: expected frequency (p06).

**Next:** math-s12-p06.

## 2. Site order, sections and worked examples

Read-only source: [relative-frequency-and-probability/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/relative-frequency-and-probability/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `c4bc0a8be472985d5ab73cee5788544d8964388f601086399c668560d7ed5f3b`. Sections used: `orient-and-prepare` (hook, card 02), `build-foundation` (card 05, quick check), `connect-method` (card 06), `work-examples` (`we-1`), `independent-practice` (SA 1 (a), (b)), `retrieve-and-finish` (revisit).

### Source lesson03, hook, cards 02 and 05

Hook: "A fair coin is flipped 10 times and lands heads 7 times. Does this mean P(heads) = 0.7? And if the same coin is flipped 10 000 times with 5 037 heads, which result is more trustworthy?" Card 02: "Relative frequency $= f/n$ where $f$ = number of times the event occurred, $n$ = total number of trials." "Relative frequency is an ESTIMATE." Card 05: "A coin is flipped 50 times, landing heads 32 times. Relative frequency of heads $= 32/50 = 0.64 = 64\%$ ... 50 trials is not enough to be certain." "Use relative frequency when: (1) the theoretical probability isn't known ... (2) you're verifying whether a device is fair". Quick check: "A die is rolled 60 times. The number 3 appears 14 times" → "C, $14/60 = 7/30$".

### Source lesson03, card 06 and the revisit

Card 06: "For repeated independent trials with a constant event probability, the relative frequency approaches that probability in the long run." "It can move closer to or farther from $P(E)$ at any particular step". "Common misconception, 'it's due': If a fair coin lands tails 5 times in a row, the probability of heads on the next flip is still 0.5." "A coin landing 8 heads in 10 flips does not mean the coin is biased, this has a reasonable probability of happening by chance." Revisit: "5037/10000 = 0.5037 ... a larger sample is more likely to give a close estimate, but it does not guarantee that every particular larger sample will be closer."

### Source lesson03, `we-1` and SA 1

`we-1`: "A die is rolled 120 times. The results are: 1→22, 2→18, 3→24, 4→19, 5→21, 6→16." → "$22/120 \approx 0.183$ ... $16/120 \approx 0.133$"; "All relative frequencies are within about 0.03 of 0.167"; "No strong evidence of bias". SA 1: "A spinner is spun 80 times. It lands on green 28 times. (a) Calculate the relative frequency of green. (b) If the theoretical probability of green is 0.30, how does the relative frequency compare?" → "$28/80 = 0.35$", "with only 80 spins this variation is plausible".

## 3. Recalculation

- Hook: 7/10 = 0.7; 5037/10 000 = 0.5037.
- Card 05: 32/50 = 0.64. Quick check: 14/60 = 7/30 ≈ 0.233.
- `we-1`: total 120; 0.183, 0.150, 0.200, 0.158, 0.175, 0.133; differences from 1/6: +0.017, −0.017, +0.033, −0.008, +0.008, −0.033 (largest 0.034 by the site's rounding of 0.167).
- 8 or more heads in 10 fair flips: 56/1024 = 7/128 ≈ 0.055 (about 1 run in 18): "reasonable" chance, as the site says.
- SA 1: 28/80 = 0.35 against 0.30.
- Anchors: rideshare 40 of 50 within 5 minutes = 0.8.
- Question 1: 34/40 = 0.85. Question 2: 6/10 = 0.6 and 489/1000 = 0.489.

Values checked with Python `fractions` and `math.comb` (`work/brief-standard-bp/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Treating a relative frequency from a few trials as the exact probability (7/10 means P(heads) = 0.7).
- The gambler's fallacy: after several tails, heads is "due" (each flip is independent).
- Thinking more trials make the relative frequency closer at every step (it settles overall but wobbles).
- Dividing by the wrong total (14/6 instead of 14/60).
- Concluding a device is biased from a small difference in a small sample.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A coin flipping live with a tally; the relative frequency of heads plotted as a running line against the number of flips (log scale or three panels: 10, 100, 1000), wandering early and settling near 0.5; a dashed line at 0.5 labelled "theoretical".
- Two "students" as two coloured traces (no people): one with 10 flips at 0.7, one with 10 000 at 0.5037; a "which do you trust?" chip.
- The site's die: six bars of relative frequency around a dashed 1/6 line, differences labelled.
- A rideshare app's record of 50 rides, 40 green dots: 0.8 as the estimate, with "no formula gives this; data does".
- A "not due" card: five tails in a row, the sixth flip's probability still 0.5.
- Final frame (p06's opening, proposed): the rideshare record "40 of the last 50 rides arrived within 5 minutes" and a calendar of 30 upcoming trips: "how many on time?".

Advanced reuse (visual parts only): `RollSimulator` (prob-parts.tsx: tally and relative frequencies), `RunningMeanTrace` (spread-parts.tsx) for the settling line, `seededRandom` and `tallyOf` (stat-math.ts) for reproducible flips, `ProbabilityBars` for the die. Plates: `ma12-coin-heads-v1.png`, `ma12-coin-tails-v1.png`, `ma12-die-*` (Advanced s01's die anchor; plate reuse only), `ma12-phone-v1.png` for the app. Kit needs: a running-proportion option on RunningMeanTrace (a 0 or 1 sequence) if it does not already accept one.

## 6. Two original candidate practice questions

### Question 1

A netball shooter's season record shows 34 goals from 40 shots. (a) Find the relative frequency of a goal. (b) Use it to estimate the probability that her next shot scores. (c) Why might this estimate be more reliable after a full season of 200 shots?

**Worked answer:** (a) 34/40 = 0.85. (b) About 0.85. (c) More shots give a relative frequency that settles closer to her true scoring chance; 40 shots can be affected by a few lucky or unlucky games.

### Question 2

Two students test whether a coin is fair. Mia flips it 10 times and gets 6 heads. Leo flips it 1000 times and gets 489 heads. (a) Find each relative frequency of heads. (b) Whose result gives a better estimate of the probability of heads? Explain. (c) Does Mia's result show the coin is unfair? Explain.

**Worked answer:** (a) Mia 6/10 = 0.6; Leo 489/1000 = 0.489. (b) Leo's: with many more trials the relative frequency is expected to be closer to the true probability. (c) No: 6 heads in 10 flips happens often with a fair coin; 10 trials are too few to decide.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "40/34", crossed, "times it happened ÷ trials"; for Question 2 (c): "yes, 0.6 is not 0.5", crossed, "10 flips are too few").

## 7. Everyday anchors

- **A rideshare app's arrival record:** 40 of the last 50 rides within 5 minutes, an estimate with no formula behind it (travel; invented).
- **A netball shooter's season record:** relative frequency as a shooting percentage, and why a full season beats a few games (sport; Question 1, invented).
- **Two students testing a coin:** 10 flips against 1000 (neutral object; Question 2; extends the site's hook).

Repeat check (grepped 19 November 2026): Advanced s10 estimates a homemade spinner's chances from 40 spins (not reused; this video uses coins and real-world records), and Advanced a12-s01 rolls a board-game die 200 times (the site's 120-roll table appears here as a coded bar chart only). Claude picks; none is required. Objects, never people. No gambling (ruling 6).

## 8. Site corrections and decisions for Claude

No new site error in the parts used.

Decisions for Claude:

- **"Closer in value" with care:** the syllabus says relative frequencies "become closer in value to the theoretical probability" as trials increase; show it on the running line and say plainly that it settles overall, not at every step (the site's own careful wording).
- **Live simulation:** use a seeded sequence so the settling line is the same at every render.
- **Pace: fits.** About 6 to 7 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
