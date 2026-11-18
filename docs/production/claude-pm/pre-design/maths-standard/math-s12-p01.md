# math-s12-p01: How do we measure chance from 0 to 1 and list every possible outcome?

Maths Standard research pack (Year 12, Relative frequency and probability), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Relative frequency and probability):

- `ci2b76fece`: Recognise that probabilities range from 0 (impossible) to 1 (certain) and can be represented as fractions, decimals and percentages [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered.
- `cibe388b4c`: Identify and define the sample space as the set of all possible outcomes of a chance experiment [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered.
- `ci035d42a7`: Determine the number of outcomes for an experiment [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered.

Standard 1 (Year 12, Relative frequency and probability):

- `ci5fa76f76`: Recognise that probabilities range from 0 (impossible) to 1 (certain) and can be represented as fractions, decimals and percentages [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa473a4513).
- `ci756e932d`: Identify and define the sample space as the set of all possible outcomes of a chance experiment [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa473a4513).
- `ci69aa1698`: Determine the number of outcomes for an experiment [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa473a4513).

These are CMS codenames, not published content-point codes. Wording identical.

**Course:** Standard 1 and Standard 2. Playlist order 69. First video of the strand.

**Entry knowledge:** The 2024 Year 11 Standard course has no probability focus area, so no Year 11 probability point is assumed (outline problem, recorded in the route inputs). Stage 4 and 5 chance language (likely, unlikely, even chance) and simple fractions are recalled in a phrase. math-s11-m01: `cib256693a` (percentages), for fraction, decimal and percentage forms.

**Prior video:** math-s12-b07.

**Start:** b07's final frame (proposed): the kiosk board with tomorrow's forecast pinned to it, "top 30°C" and a cloud chip "20% chance of rain": "what does 20% mean?".

**Stop:** Probability as a number from 0 (impossible) to 1 (certain), placed on a chance line; the same probability as a fraction, a decimal and a percentage (1/5 = 0.2 = 20%), and converting between them; a chance experiment, a trial and an outcome; the sample space S as the set of every possible outcome, written in braces (a die {1, 2, 3, 4, 5, 6}; two coins {HH, HT, TH, TT}; the site's bag of 10 marbles as 10 separate marbles); the number of outcomes, n(S), by listing and, when listing is too long, by multiplying the choices at each step (a lunch deal of 3 mains and 2 drinks: 6; a 4-digit PIN: 10 000). Not taught: P(event) = favourable ÷ total (p02).

**Next:** math-s12-p02.

## 2. Site order, sections and worked examples

Read-only source: [relative-frequency-and-probability/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/relative-frequency-and-probability/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `0c40604b72edc6425e49660a3cd0f5055fa101111b172de7d44666c0d5bba9f5`. Sections used: `orient-and-prepare` (card 01 recall, card 02, key terms), `build-foundation` (card 05), `apply-method` (card 07), `work-examples` (`we-1` (a), `we-3` (a)). The rest of the lesson (the formula and complement) is p02.

### Source lesson01, cards 01, 02 and key terms

Card 01: "A bag contains 3 red, 5 blue and 2 yellow marbles. You draw one marble at random." "What is the probability of picking a green marble?" Card 02: "$0 \leq P(E) \leq 1$ | $P(E) + P(E') = 1$ | $P(\text{impossible}) = 0$ | $P(\text{certain}) = 1$"; "Three equivalent forms: $P(E) = 1/4 = 0.25 = 25\%$." Key terms: "Sample space $S$: The complete set of all possible outcomes of a chance experiment. E.g. rolling a die: $S = \{1, 2, 3, 4, 5, 6\}$." "Event $E$: A subset of the sample space".

### Source lesson01, card 05 and card 07

Card 05: "List all outcomes: For small experiments ... rolling a die $S = \{1, 2, 3, 4, 5, 6\}$, $n(S) = 6$. Systematic listing: ... Flipping two coins: HH, HT, TH, TT, $n(S) = 4$. Counting without listing: For larger experiments, use the multiplication principle: a die AND a coin = $6 \times 2 = 12$ outcomes." "'A letter is chosen from the word PROBABILITY' → count the letters: ... 11 letters". Card 07: "Fraction → Decimal: Divide numerator by denominator. $3/8 = 0.375$. Decimal → Percentage: Multiply by 100. $0.375 \to 37.5\%$. Percentage → Fraction: ... $75\% = 75/100 = 3/4$." Fill: "$\frac{3}{5}$ is equal to 0.6 as a decimal and 60%."

### Source lesson01, `we-1` (a) and `we-3` (a)

`we-1` (a): "A fair six-sided die is rolled. (a) List the sample space $S$" → "$S = \{1, 2, 3, 4, 5, 6\}$, $n(S) = 6$". `we-3` (a): "In a class of 30 students, 12 study French" → "$P(F) = 12/30 = 2/5 = 0.4 = 40\%$" (used here for the three forms only).

## 3. Recalculation

- 1/4 = 0.25 = 25%; 3/8 = 0.375 = 37.5%; 75% = 3/4; 3/5 = 0.6 = 60%; 12/30 = 2/5 = 0.4 = 40%; 5/8 = 0.625 = 62.5%.
- Sample spaces: die 6; two coins 4; die and coin 12; marble bag 10 (3 + 5 + 2); PROBABILITY 11 letters.
- Multiplication principle: lunch deal 3 × 2 = 6; 4-digit PIN 10 × 10 × 10 × 10 = 10 000.
- Forecast chip: 20% = 0.2 = 1/5.
- Question 1: 0.35 = 35/100 = 7/20 = 35%. Question 2: 4 × 3 = 12.

Values checked with Python `fractions` (`work/brief-standard-bp/recalc.py`). All site values match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- A probability written as 30 or 1.2 (outside 0 to 1); "30%" written as 30 in a working line.
- Listing colours ({red, blue, yellow}) as the sample space and then treating them as equally likely (p02 picks this up).
- Missing outcomes in a list (HT and TH counted once).
- Adding instead of multiplying the choices at each step (3 mains and 2 drinks is 6 lunches, not 5).
- Thinking "20% chance of rain" means it will rain for 20% of the day (needs the BOM's definition; see section 8).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A chance line from 0 to 1 with "impossible", "even chance" and "certain" marks; chips slide onto it (a green marble 0, a coin's head 0.5, the sun rising tomorrow 1, the forecast 0.2), each converting live between fraction, decimal and percentage.
- The marble bag opening into ten marbles in a row (the sample space is the ten marbles); braces closing around them.
- A die's six faces and two coins' four outcomes listed systematically, with HT and TH lit as different.
- A lunch-deal board: 3 mains × 2 drinks laid out as a small grid of 6 trays; then a PIN pad with "10 × 10 × 10 × 10 = 10 000" (too many to list).
- Final frame (p02's opening, proposed): the ten marbles in a row (3 red, 5 blue, 2 yellow): "how likely is blue?".

Advanced reuse (visual parts only): `SetBraces` (a11-prob-parts.tsx) for the sample space in braces; `OutcomeArray` for the lunch-deal grid; `ProbabilityBars` ticks or `TargetDial` as the chance line. Plates: `ma11-counter-bag-v1.png` (a bag; inspect whether it suits marbles), `ma12-die-*` faces and `ma12-coin-heads-v1.png`, `ma12-coin-tails-v1.png` (used in Advanced s01; plate reuse only); `ms12-beach-kiosk-v1.png` for the opening. Kit needs: a small **ChanceLine** (0 to 1 strip with fraction, decimal and percentage readouts).

## 6. Two original candidate practice questions

### Question 1

The chance that the school canteen sells out of pies before lunch on any given day is 0.35. (a) Write this probability as a fraction in simplest form and as a percentage. (b) Mark it on a chance line from 0 to 1, and describe how likely a sell-out is.

**Worked answer:** (a) 0.35 = 35/100 = 7/20 = 35%. (b) Just over a third of the way from 0 to 1, below 0.5: less likely than not.

### Question 2

A café's lunch deal lets you choose one of four wraps (chicken, falafel, tuna, egg) and one of three drinks (juice, water, iced tea). (a) Write the sample space of possible lunches, or describe a systematic way to list it. (b) How many outcomes are in the sample space?

**Worked answer:** (a) List each wrap with each drink: (chicken, juice), (chicken, water), (chicken, iced tea), (falafel, juice), and so on for all four wraps. (b) 4 × 3 = 12 outcomes.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "35", crossed, "35% or 0.35, never 35 alone"; for Question 2 (b): "4 + 3 = 7", crossed, "each wrap goes with each drink: 4 × 3").

## 7. Everyday anchors

- **A weather forecast's "20% chance of rain":** the chance line's everyday percentage, carried from the kiosk board (b07's final frame).
- **A school canteen or café lunch deal:** counting outcomes by multiplying (food; Question 2).
- **A 4-digit phone PIN:** 10 000 possible codes, too many to list (phones; security without any hacking story).

Also the site's marble bag, die, coins and the class of 30. Repeat check (grepped 19 November 2026): "chance of rain", "lunch deal" and "PIN" (as a phone code) have no hits in the maths designs; Advanced s01 to s05 use water polo caps, ice-cream cones, a library, a gumball machine and hotel rooms. Claude picks; none is required. Objects, never people. No gambling: dice and coins appear only as neutral chance objects (ruling 6).

## 8. Site corrections and decisions for Claude

No new site error in the parts used. The 52-card deck in `we-2` is not used (MS-68 owner note). The Year 11 entry-knowledge gap is an outline problem, not a site error (route inputs 6).

Decisions for Claude:

- **The forecast as the hook, carefully:** narrate "20% chance of rain" only as a probability of 0.2. If the video explains what the Bureau of Meteorology means by it (the chance of at least a small amount of rain at a place), Codex must supply a dated BOM source first (the BOM site refused an automated read on 19 November 2026).
- **Split with p02 as the outline does:** this video stops at the sample space and counting; the formula and complement are p02.
- **Pace: fits.** About 6 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
