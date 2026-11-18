# math-s12-p08: How do the media, governments and companies use probability to make decisions?

Maths Standard research pack (Year 12, Relative frequency and probability), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Relative frequency and probability):

- `cid7bfe21e`: Examine the use of statistics and the associated probabilities in shaping decisions made by the media, governments and companies [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered.

Standard 1 (Year 12, Relative frequency and probability):

- `cidcff3c3e`: Examine the use of statistics and the associated probabilities in shaping decisions made by the media, governments and companies [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa473a4513). Covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes. Wording identical.

**Course:** Standard 1 and Standard 2. Playlist order 76. **Last Year 12 content video for Standard 1** (the 2024 Standard 1 course has no normal distribution, critical path analysis or network flow); last video of the probability strand for Standard 2.

**Entry knowledge:** math-s12-p05 (`ci6ac4e336`; S1 `cid7b76603`): a survey percentage is a relative frequency from a sample. math-s12-p06 (`cib9b655d5`; S1 `cif251c60d`): expected frequency, as companies use it. math-s11-d03: `ci3d27ce1c`, `ciefb0c944` (sampling methods; representative samples; self-selected samples). math-s11-d10: `ciebdc8d60` (how a display can mislead). math-s12-p01: the forecast percentage from p01's opening.

**Prior video:** math-s12-p07 (Standard 2); math-s12-p06 (Standard 1, its right panel).

**Start:** One frame shared by p07's final frame and p06's Standard 1 panel (proposed): a phone showing an invented app advertisement, "4 out of 5 users sleep better!", with a small grey footnote "25 volunteers": "should we believe it?".

**Stop:** How statistics and their probabilities shape decisions: the media (headlines with percentages and risks), governments (decisions and campaigns built on data) and companies (advertising claims; planning with expected frequency: warranties, spare parts, staffing); five questions to ask of any claim: how many were asked, how they were chosen (self-selected volunteers are not representative), a percentage of what, relative or absolute change (2% to 1% is "halved" but only one percentage point), and who ran or paid for it; turning a claim into the probability behind it (20 of 25 volunteers is a relative frequency of 0.8 from a small, self-selected sample); a forecast percentage as a probability people act on (p01's callback). Two-route final frame (accepting the z01 pack's proposal): Standard 2 to the normal distribution; Standard 1: Year 12 course complete.

**Next:** math-s12-z01 (Standard 2); Standard 1: end of Year 12 content (the optional practice video math-s12-x02 may follow).

## 2. Site order, sections and worked examples

Read-only sources: [relative-frequency-and-probability/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/relative-frequency-and-probability/lesson04.sa.html), SHA256 `3f929df61cb96675dc079f04a09bc5e5898e594c5b01aa52d24b08157b4d321d` (sections `orient-and-prepare` (hook), `apply-method` (card 07), `work-examples` (`we-3`), `independent-practice` (SA 3)); [relative-frequency-and-probability/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/relative-frequency-and-probability/lesson03.sa.html), SHA256 `c4bc0a8be472985d5ab73cee5788544d8964388f601086399c668560d7ed5f3b` (section `apply-method`, the quality-control and insurance examples). Both at kyleajames33-beep/Teaching-APP 5d74a627.

### Source lesson04, hook and card 07

Hook: "behind every headline statistic, a drug 'reduces risk by 50%', a policy 'backed by 72% of Australians', is a probability calculation that shaped a decision." Card 07: "Media: 'New study: drinking coffee reduces risk of disease by 50%.' This means relative risk dropped from, say, 2% to 1%, not that half the population is protected." "Government: ... A government might say '75% of Australians support this policy' based on a sample of 500 people, reliability depends on sample size and selection." "Companies: Insurance premiums are set using probability data ($E = n \times p$). Advertising claims ('4 out of 5 dentists recommend…') are probability statements based on surveys that may be unrepresentative." "Five questions to ask about a statistic: How large was the sample? ... Was the sample representative? ... Is it absolute or relative risk? ... Who funded the study? ... Has the result been replicated?" True or false: "'Coffee reduces heart disease risk by 50%' necessarily means a very large portion of the population benefits significantly." (False: "a 1 percentage point change").

### Source lesson04, `we-3` and SA 3

`we-3`: "A news article states: 'A new fitness app claims to reduce sedentary time by 40%. In a trial of 30 volunteers who chose to participate, 12 of the 30 reported reduced sedentary time.'" → "$12/30 = 2/5 = 0.4 = 40\%$"; "a sample of 30 self-selected volunteers is far too small and too biased to generalise"; limitations "Sample size ... Self-selection bias ... no control group ... self-reported". SA 3: "'Study shows new supplement doubles energy levels in 80% of users. Based on a survey of 25 regular supplement users who volunteered online.'" → "80% = 0.8"; small, self-selected, self-reported, no control group; "use a large random sample ... include a control group".

### Source lesson03, card 07 (companies)

"Quality control example: ... 2% are defective ... $E = 500 \times 0.02 = 10$ bulbs. A quality inspector would flag the batch if the actual count is significantly more than 10." "Insurance companies use $E = n \times p$ to set premiums. If $P(\text{claim}) = 0.05$ and there are 10 000 policyholders, $E = 10\,000 \times 0.05 = 500$ claims expected."

## 3. Recalculation

- Relative against absolute: 2% to 1% is a relative fall of 50% and an absolute fall of 1 percentage point.
- `we-3`: 12/30 = 0.4. SA 3: 80% of 25 = 20 users.
- Companies: 500 × 0.02 = 10; 10 000 × 0.05 = 500.
- Anchor (invented): 20 of 25 volunteers = 0.8.
- Question 1: 10% to 20%: relative increase 100% ("doubles"), absolute increase 10 percentage points. Question 2: 360 of 500 = 0.72.

Values checked with Python (`work/brief-standard-bp/recalc.py`). All site values match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Treating a percentage from a small or self-selected sample as the probability for everyone.
- Reading "risk halved" as a large change without asking "from what?".
- Confusing a percentage of the people asked with a percentage of all people.
- Ignoring who ran the study or why the claim is being made.
- Answering "examine" questions with an opinion and no number (good answers quote the relative frequency, the sample size and one specific limitation).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The advertisement phone (opening) with the footnote enlarging: "25 volunteers"; the claim converts to 20/25 = 0.8 on p05's language ("a relative frequency from a small sample").
- A five-question checklist card that ticks or flags each question for each claim (the app ad, a council survey, a headline).
- Relative against absolute: two 100-square grids, 2 squares shaded then 1; the headline "halved!" beside "1 in 100 fewer".
- A self-selected sample: an online poll where only interested phones respond (coded tokens joining from one side), against a random sample spread across the whole population.
- Companies: a warranty desk expecting 2% of 500 returns (10) and planning spare parts with np (p06 callback).
- Government (invented, labelled): a council deciding on a skate park from a survey (360 of 500 = 72%) and the question "who answered?".
- p01's forecast chip returning: "20% chance of rain" and an outdoor event deciding to book a marquee (a decision made from a probability).
- Two-route final frame (accepting the z01 pack's proposal, `math-s12-z01.md` "Start"): left, "Standard 2: next, the normal distribution": a bakery's quality sheet with 200 loaves labelled 700 g weighed, the masses dropping into a coded histogram, "what shape is this?"; right, a grey chip "Standard 1: Year 12 course complete" pointing to the Year 12 Standard playlist (no promise of further Standard 1 videos).

Advanced reuse (visual parts only): `OutcomeGrid` (prob-parts.tsx) as the 100-square risk grids; `ClassHistogram` with `drop` (dist-parts.tsx) for the final frame's loaves; `KeyNotesBullets` pattern for the checklist. Plates: `ma12-phone-v1.png`; a bakery plate is z01's to brief (painted one video early by ruling 17, so the z01 or p08 brief requests it; avoid duplicating). Kit needs: a **ClaimCard** (a headline or advertisement with its footnote, the five-question checklist ticking, and a relative-versus-absolute grid).

## 6. Two original candidate practice questions

### Question 1

A headline reads: "Phones in the bedroom double the chance of poor sleep!" The article reports that 10% of teenagers who keep their phone outside the bedroom sleep poorly, compared with 20% of those who keep it inside. (All figures invented for this question.) (a) Explain why "double" is correct as a relative change. (b) State the absolute change. (c) Give one question you would ask about how the data were collected before accepting the claim.

**Worked answer:** (a) 20% is twice 10%, a relative increase of 100%. (b) 10 percentage points (10 more teenagers in every 100). (c) For example: how many teenagers were surveyed and how were they chosen (a small or self-selected sample may not represent all teenagers); or whether something else (such as stress) could explain both.

### Question 2

A council runs an online survey about building a skate park. Of the 500 people who responded, 360 supported it. The council says: "72% of residents support a skate park." (a) Show how the 72% was calculated. (b) Give two reasons why 72% may not be a reliable estimate of support among all residents. (c) Suggest a better way to collect the data.

**Worked answer:** (a) 360 ÷ 500 = 0.72 = 72%. (b) The sample is self-selected (people who care about skate parks are more likely to respond); online-only responses leave out residents who did not see the survey. (c) A random sample of residents (for example chosen from the electoral roll), contacted in more than one way.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "100%", crossed, "that is the relative change; absolute is 10 points"; for Question 2 (b): "500 is too small", crossed alone, "how they were chosen matters most here").

## 7. Everyday anchors

- **An app advertisement, "4 out of 5 users sleep better":** a relative frequency from 25 volunteers (phones and advertising; invented, labelled; echoes the site's "4 out of 5 dentists").
- **A council survey about a skate park:** a government decision from a self-selected online sample (local government; Question 2, invented).
- **A weather forecast and an outdoor event:** a probability people act on (p01 callback; the forecast's meaning needs a dated BOM source if explained).

Also the site's fitness app, supplement headline and the 2% to 1% risk example. Repeat check (grepped 19 November 2026): "skate park" and "4 out of 5" (as an anchor) have no hits; Advanced s10, s11 and a12-s04 to s10 mention headlines only as asides. Claude picks; none is required. Objects, never people. No real company, product or survey is named; every claim is invented and labelled, unless Codex supplies a dated real source (rulings 5 and 32 pattern).

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 10: MS-68 (insurance and medical contexts on the probability pages) and MS-69 (unsourced institutional claims in hooks).

Decisions for Claude:

- **Health claims stay invented and mild:** sleep is used as an everyday outcome, not a medical claim; no drug or supplement examples in the video (the site's supplement and coffee headlines are left out).
- **Real examples only with a date:** if the design wants a real headline or government statistic, Codex finds it with its source and date first; otherwise keep the invented, labelled claims.
- **Final frame accepted from the z01 pack** (bakery loaves for Standard 2; "Year 12 course complete" for Standard 1). The bakery plate is briefed once (z01's or this video's Codex asset brief, not both).
- **Pace: watch.** Three users of statistics and five questions are a lot; keep the checklist on screen and let each example tick only the two or three questions it needs.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
