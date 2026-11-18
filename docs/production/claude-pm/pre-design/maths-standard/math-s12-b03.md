# math-s12-b03: Does correlation mean one thing causes the other?

Maths Standard research pack (Year 12, Bivariate data analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Bivariate data analysis, Bivariate datasets):

- `ci467160a5`: Explain the difference between variables that show correlation and those that have a causal relationship [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: covered.
- `cid820b203`: Analyse relationships between independent and dependent variables that may be described as causal [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: covered.

Standard 1 (Year 12, Bivariate data analysis, Bivariate datasets):

- `ci3993719b`: Explain the difference between variables that show correlation and those that have a causal relationship [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf283a852).
- `ci022a6fb8`: Analyse relationships between independent and dependent variables that may be described as causal [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf283a852).

These are CMS codenames, not published content-point codes. Wording identical for both courses.

**Course:** Standard 1 and Standard 2. Playlist order 64.

**Entry knowledge:** math-s12-b02 (`ci2b7391e9`; S1 `cic75eb64e`): strength and direction in a sentence. math-s12-b01: independent and dependent variables. math-s11-d04: `ci4c7cc505` (experiments and observational studies as ways of collecting data), recalled in a phrase.

**Prior video:** math-s12-b02.

**Start:** b02's final frame (proposed): the kiosk scatter plot (strong positive) with a second column on the board, "sunscreen sold" (invented: 12, 18, 22, 27, 35 on the same five days), rising too: "do ice creams make people buy sunscreen?".

**Stop:** Correlation (two variables tend to move together) against causation (changing one makes the other change); three ways a correlation can appear without one causing the other: a third (confounding) variable that drives both (hot weather drives ice creams and sunscreen; population drives fire stations and house-fire deaths), cause running the other way, and coincidence; a relationship that can be described as causal, with the mechanism said in a plain sentence (a rideshare fare rises with distance because the app charges per kilometre); what would support a causal claim (a controlled experiment where one thing is changed on purpose and everything else is kept the same). A strong correlation, however strong, does not on its own show cause. Not taught: lines of best fit (b04).

**Next:** math-s12-b04.

## 2. Site order, sections and worked examples

Read-only source: [bivariate-data-analysis/lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson07.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `69ac1488e2ff9e0255bd5921c00d350e4340d235dd6b0f53194142e198cd0177`. Sections used: `orient-causation-correlation` (card 02), `distinguish-causal-claims` (card 05), `identify-confounders` (card 06), `evaluate-causal-evidence` (card 07 body checklist and headline example), `work-causation-examples` (`we-1` to `we-3`), `apply-causal-reasoning` (activity), `answer-causation-questions` (Q1, Q2).

### Source lesson07, cards 02, 05 and 06

Card 02: "Correlation shows association it tells you that two variables tend to move together. It does NOT tell you that one causes the other." "A confounding variable (also called a lurking variable) is a third variable that influences both x and y, creating an apparent correlation between them." "Randomised controlled experiments with proper controls, not correlation alone." Card 05: "Correlation can exist without causation in three ways: Reverse causation ... Confounding variable ... Coincidence". Card 06: "Shoe size and reading ability in children: Bigger shoes → better reading. Confounding variable: age." "To identify the confounding variable, ask: 'What third factor could independently cause both x and y to change?'"

### Source lesson07, card 07 and the worked examples

Card 07 body checklist: "Is this an experiment or an observation? ... Is there a plausible confounding variable? ... Could the direction be reversed? ... Is the sample size large enough?" Example headline: "Students who eat breakfast get better grades." (confounder: socio-economic status). `we-1`: "A study finds that municipalities with more fire stations have more deaths from house fires." → "Confounding variable: population size." `we-2`: "'Study shows people who drink coffee live longer.' The study surveyed 10 000 adults" → observational, possible confounders, "A controlled trial would be needed." `we-3`: "$r = 0.91$ between the number of letters in a country's name and its GDP per capita" → spurious, "no plausible mechanism".

### Source lesson07, activity and short answers

Activity: books owned and test scores ($r = 0.78$, socio-economic status); a randomised drug trial (causation); green space and depression ($r = -0.65$); sunscreen and skin cancer (MS-64). Q1: "cities with more fast food restaurants have higher rates of obesity ($r = 0.83$)". Q2: "Explain the difference between causation and correlation in your own words, using an example."

## 3. Recalculation

- Kiosk ice creams 40, 60, 75, 90, 120 and invented sunscreen 12, 18, 22, 27, 35 (labelled): ice creams against sunscreen r = 0.9995 (strong positive), with no causal link either way; both rise with temperature (r = 0.9949 for ice creams, 0.9966 for sunscreen).
- Site values: r = 0.87 (ice cream and drownings, not used), 0.91, 0.78, −0.65, 0.83 are quoted, not calculated; nothing to recompute.

Kiosk and sunscreen values checked with Python `statistics` (`work/brief-standard-bp/recalc.py`, "added checks"). No site arithmetic in this lesson.

## 4. Misconceptions and HSC-style traps

- "A strong r proves cause." Strength says how well the points fit a line, not why.
- Naming the confounder without saying how it drives both variables ("temperature" alone, instead of "hot days make people buy ice creams and also make people buy sunscreen").
- Assuming the independent variable must be the cause because it is on the x-axis.
- Forgetting that some relationships are causal (distance and fare), so "correlation never means cause" is also wrong; the point is that the data alone cannot tell.
- Missing reverse cause (people who sleep badly may use their phones more, rather than phones causing poor sleep).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The kiosk board grows a third column, sunscreen; the ice-cream against sunscreen scatter is tight and rising; a thermometer chip slides in above both columns with two arrows down to them ("hot weather drives both").
- A three-card sorter for "why do these move together?": third variable, reverse direction, coincidence, each with one everyday pair.
- The fire station example as two bars growing together with a population figure growing behind them.
- A causal case: a rideshare fare receipt with "$2.10 per km" printed, the distance and fare rising together because of the rule (a mechanism you can point at).
- An experiment sketch: two identical groups (coded tokens, not people), one thing changed, the difference seen.
- Final frame: the kiosk scatter with a clear ruler lying across the cloud: "one line through the middle?" (b04's opening).

Advanced reuse (visual parts only): `ArrowJoin` (paired.tsx) for the "drives both" arrows; `OutcomeSort` (prob-parts.tsx) for the three-card sorter; `StudioPlot`. Plates: `ms12-beach-kiosk-v1.png`; a sunscreen bottle (new `ms12-` plate, small, optional; or coded); `ma12-phone-v1.png`. Kit needs: ScatterBoard; a small **DriverArrows** option (one cause tag with arrows to two variables).

## 6. Two original candidate practice questions

### Question 1

A council study of 30 suburbs found a strong positive correlation (r = 0.88) between the number of cafés in a suburb and the number of parking fines issued there each month. A newspaper reports: "Cafés cause parking fines." (a) Describe the correlation. (b) Explain why the data do not show that cafés cause parking fines. (c) Suggest a possible confounding variable and explain how it could affect both variables.

**Worked answer:** (a) A strong positive relationship: suburbs with more cafés tend to have more parking fines. (b) The data are observational; a correlation shows the two tend to move together but not why. (c) How busy the suburb is (population or number of visitors): busier suburbs support more cafés and also have more cars competing for parking, so more fines.

### Question 2

For each pair, state whether the relationship can be described as causal, and explain briefly. (a) The distance of a rideshare trip and its fare, where the app charges $2.10 per kilometre plus a booking fee. (b) The number of umbrellas sold at a station kiosk and the number of late trains on the same day.

**Worked answer:** (a) Causal: the fare is calculated from the distance, so increasing the distance increases the fare. (b) Not shown to be causal: rainy days may bring both more umbrella sales and more delays (a third variable), so umbrellas do not cause late trains.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "r is 0.88, so it is proven", crossed, "strong does not mean cause"; for Question 2 (b): "umbrellas cause delays", crossed, "rain drives both").

## 7. Everyday anchors

- **Ice creams and sunscreen at the beach kiosk:** a strong correlation with hot weather behind both (food and summer; replaces the site's drownings, MS-64; sunscreen numbers invented, labelled).
- **Cafés and parking fines:** busy suburbs drive both (local news; invented).
- **Phone screen time and sleep:** a real-feeling association where cause could run either way, or a third variable (stress, a busy week) could drive both (phones; no medical claim).

Also usable: the site's fire stations (population), shoe size and reading speed (age) and the breakfast headline. Repeat check (grepped 19 November 2026): "sunscreen" appears only in Biology and skills designs (UV and skin), not as sales data; "parking fine" and "fire station" have no hits. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 10: MS-64 (the muddled checklist in card 07; drownings and deaths as main contexts; the skin cancer activity).

Decisions for Claude:

- **Replace drownings** with ice creams and sunscreen at the kiosk (same reasoning, no deaths). The site's other examples stay.
- **Use the body checklist** of card 07 (experiment or observation? third variable? reversed? sample size?), not the lead's four criteria or "dose-response".
- **"May be described as causal" is half the syllabus point:** show one genuinely causal pair with its mechanism said aloud (the fare rule), so students do not learn "correlation never means cause".
- **Pace: fits.** About 6 to 8 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
