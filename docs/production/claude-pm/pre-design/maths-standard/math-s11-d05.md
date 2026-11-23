# math-s11-d05: Is this data numerical or categorical, discrete or continuous, nominal or ordinal?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Data classification", outcome MST-11-08:

- `cic8a0b6e9`: Classify and describe variables as numerical or categorical [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: covered (lesson09 card 05).
- `ci038853db`: Describe a numerical variable as discrete or continuous. Site coverage: covered (lesson09).
- `cic17a10b5`: Describe a categorical variable as nominal or ordinal. Site coverage: covered (lesson09).
- `ci87535c02`: Identify collections of data that can be described as numerical or categorical depending on responses. Site coverage: covered in the crosswalk (lesson09); in fact only postcodes touch it (MSY-37).

**Entry knowledge:** math-s11-d01 (the sleep question asked with buttons and with a number box); math-s11-d04 (the record sheet's five columns).

**Prior video:** math-s11-d04. **Start:** d04's final frame (the exam desk with the record sheet: "Sleep (h)", "Screens in bedroom", "Phone charges", "How rested?", "Gets to school"; first row "7.5 | 2 | bedroom | a little | bus"; chips "Numbers or words?", "Next: types of data", "?").

**Stop:** variable; numerical and categorical (the arithmetic test); discrete (counted) and continuous (measured; rounding does not change the type); nominal and ordinal; numbers that are labels (postcodes, jersey numbers); the same question giving numerical or categorical data depending on how answers are collected (d01's sleep buttons against a number box; screens as a count against "none, one, two or more"); a type tree. Not: tables and graphs (d06, d07); which graph suits which type (d07).

**Next:** math-s11-d06a: the phone with a coded screen-time screen "Screen time yesterday: 2 h 25 min" and a scrolling list of 30 class values in minutes (70, 95, 110, ...); chips "30 different answers?", "Next: grouping data", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson09.sa.html`: card 05 ("Classifying what you collect": nominal, ordinal, discrete, continuous; table: shoe size discrete numerical, hair colour nominal, income level (low, medium, high) ordinal, temperature continuous; key tip: postcodes are nominal categorical, "Does arithmetic on this variable make sense?"); MC 1 (pain levels: ordinal), MC 3 (100 m time: continuous), MC 5 (postcode: nominal); SA 1; drill 1 (pets, blood type, exam mark, postcode, satisfaction stars, weight). Trap 01 (numerical-looking data).

All site classifications checked. Site decisions: the arithmetic test and postcodes are used (scene 2, scene 5); the site's "Discrete = countable whole numbers" is softened to "counted; separate values, often whole numbers" (shoe sizes go in halves; MSY-37); the page title and navigation label this Year 11 page "Year 12" and "Module 7" (MSY-37); blood type and pain levels (health contexts) are not used.

## 3. Recalculation (values for the design)

| Item | Type | Reason |
| --- | --- | --- |
| Sleep (h), as a number | numerical, continuous | measured; 7.5 is a rounding of any time |
| Sleep, as d01's buttons | categorical, ordinal | answers are ordered groups |
| Screens in bedroom (0, 1, 2, 3) | numerical, discrete | counted |
| Screens as "none / one / two or more" | categorical, ordinal | ordered groups |
| Phone charges (bedroom, kitchen, lounge, other) | categorical, nominal | labels, no order |
| How rested? (not at all ... very) | categorical, ordinal | ordered labels |
| Gets to school (bus, nearby) | categorical, nominal | labels |
| Postcode 2750 | categorical, nominal | arithmetic is meaningless |
| A1 | songs: discrete; download time: continuous; streaming service: nominal; hotel stars: ordinal | |
| A2 | "__ km": continuous numerical; ranges: ordinal categorical | |

## 4. Misconceptions and HSC-style traps

- Anything written with digits is numerical (postcodes, jersey numbers, phone numbers).
- Rounded measurements are discrete (sleep to the nearest half hour; time to the nearest second).
- Star ratings and survey scales are numerical (they are ordinal categories).
- "Categorical means words only" (a rating 1 to 5 can be ordinal).

## 5. Visual needs

The record sheet (d04's frame) with columns that peel off into labelled cards; a type tree (two questions: "does arithmetic make sense?", then "counted or measured?" or "is there an order?") with tokens falling through it; a zoom-in ruler showing sleep's continuity (7.5 h is really 7 h 32 min 10 s ...); a switchboard showing the same question asked two ways landing on different branches.

## 6. Two original candidate practice questions

**Question 1.** Classify each variable fully: (a) the number of songs in a playlist; (b) the time taken to download an app; (c) a person's favourite streaming service; (d) a hotel's star rating.
Worked answer: (a) numerical, discrete; (b) numerical, continuous; (c) categorical, nominal; (d) categorical, ordinal. Slip: "(d) numerical, discrete, because stars are numbers".

**Question 2.** A gym wants to know how far members travel to the gym. Write one way to ask that gives numerical data, and one way that gives categorical data. Classify each fully.
Worked answer: "How far do you travel to the gym? ___ km": numerical, continuous. "Under 2 km / 2 km to under 5 km / 5 km or more": categorical, ordinal. Slip: "both are numerical, because both mention km".

## 7. Everyday anchors

The survey's record sheet (sleep, screens, phone, how rested, travel); a playlist; an app download; a hotel; a gym. No people.

## 8. Site corrections and decisions for Claude

- MSY-37: lesson09's "whole numbers" definition of discrete; its Year 12 and Module 7 labels; "depending on responses" taught only through postcodes.
- Year 12 b01 recalls "numerical variables (d05)": say "numerical variable" as a phrase.
- Pace: about 8 to 9 minutes.
