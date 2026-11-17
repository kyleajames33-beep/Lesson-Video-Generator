# Maths A11 S10: How do frequency tables turn data into probability estimates? Frequency, relative frequency, cumulative frequency and cumulative relative frequency in a table or spreadsheet, and relative frequency as an estimate that usually improves with more trials (design)

Status: Revision 2 (17 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,083 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 469 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov 2026): learning review resolved

Review: `../checks/m-a11-s10-learning-review.md` (summary `../checks/m-a11-s01-s11-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-t-g-s-packs.md` and root's resolution brief of 17 Nov. Resolution log: `../checks/m-a11-s01-s11-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 3 (the spoken cell does not match the screen): **accepted as root decided**. C3 is selected, the formula bar shows "=B3/B5" with no "$", and the narration says "like B three divided by B five" (Revision 1 said "B two", which was not the selected cell).
2. Optional, scene 6 (link the simulated curve to the real 40 spins): **applied**. The first 40 points of the plotted run are the real list from scene 1, in order, so the green dot "40 spins: 0.45" is real data. Narration: "Here are our forty spins, then a simulation of that spinner that keeps on spinning"; label "first 40: our spins; then simulated, sector 2 set to half the spinner".
3. Optional, feedback 1 (cumulative columns not mentioned): **applied**, grey tag "full table on screen: pause to check". Screen only.

Open decisions closed: see "Open decisions". Joins unchanged: scene 1 still opens on the previous design's final frame, and the handoff scene is still the next design's opening frame (no finding touched a joined frame). Changed and new values are rechecked in `work/brief-resolve-s/verify.py` (SymPy 1.14 and fractions, `python -I`).

Narration 5,083 characters by script (Revision 1: 5,054), about 469 s with holds; speech before the notes about 377 s, under the 570 s cap. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: eighty-ninth video of Year 11 Mathematics Advanced (2024), outline order 89, Probability and data (Data). Pre-design pack: `../pre-design/maths-a11/math-a11-s10.md` (brief 243). Site lesson (read through the pack's quotations, read only): `probability-and-data/lesson15.sa.html` (`we-1`, a spinner with values 1, 2, 3 spun 40 times: 10, 18, 12; `we-2`, 13 sixes in 60 rolls against 1/6; `we-3`, "2 or less" from the cumulative columns: 0.70 and 28; all with their numbers). Route entry: `math-a11-s10` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; the reused painted spinner with coded unequal sectors (introduced on s09's final frame) and the reused red die; a coded, unbranded spreadsheet with visible formulas; a seeded simulation labelled as simulated.

Owner rules applied: as s02 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (games: a homemade spinner whose sectors nobody measured), Australian spelling, no em dashes, "zero point" decimals, "cumulative" explained as "running total", conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Probability and data, Data), quoted from `../../programme/maths-a11-route-inputs-5.json`:

- `ci1c297b6d`: "Organise finite datasets using a table or a spreadsheet, listing the values, frequency, relative frequency, cumulative frequency, and cumulative relative frequency"
- `cifa805794`: "Use the relative frequency to estimate the probability of results in experiments"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

**Boundary:** starts from s09's final frame exactly (the reused spinner with three coded sectors "1", "2", "3" of visibly unequal size, no angles shown; a raw list strip "2, 1, 2, 3, 2, ..."; chips "sector sizes: unknown", "40 spins", "chance of each?", "Next: frequency tables", "?"). Recalls s04 (P(A) = |A|/|S| for equally likely outcomes) and s09 (a discrete random variable and its values) in a phrase or grey chip each. Teaches: sorting 40 results into a table of values and frequencies, each result in exactly one row; relative frequency = frequency ÷ total, adding to 1 because every result is in exactly one row; cumulative frequency as a running total ("this value or less", values in increasing order) and cumulative relative frequency ending at 1; the same table as a spreadsheet with its formulas visible (`ci1c297b6d`); relative frequency as an estimate of probability, not the exact value, with the fair die's 13 sixes in 60 rolls as ordinary variation; more trials usually give a more reliable estimate, shown by a labelled simulation, never "must equal" (`cifa805794`). Stops at tables. Not taught: graphs of these columns, the mode and the median (s11); probability distributions (Year 12 s01).

## Decisions

- **Anchor: a homemade spinner whose sector sizes nobody measured (reused painted spinner with coded sectors, live).** The only way to learn its chances is to spin it and count, which is exactly why relative frequency estimates probability. Its 40 results are the site's `we-1` data, unchanged. Games (no stake; root ruling 8). The spinner plates exist (Year 12, inspected: a blank disc with a centre pin and a separate pointer), so the sectors are coded. The die appears only as the site's `we-2` comparison; Year 12 s01 owns the die rolled 200 times as an anchor (pack decision).
- **Spreadsheet (syllabus "a table or a spreadsheet"; the site shows none).** A coded, unbranded grid with column letters A to E and row numbers 1 to 5; selecting a cell shows its formula in a formula bar ("=B2/B$5", "=D2+B3", "=D3/B$5"). The narration says "In a spreadsheet".
- **Simulations (standard item 3).**
  1. **Spin and sort** (scenes 1, 2): the pointer spins; each of the 40 results in the raw strip flies into its row and lights a tally; a "results placed: 40 of 40" counter checks that none is missed or doubled.
  2. **Running total fill** (scene 4): each cumulative cell is built by an arrow from the cell above plus the frequency beside it.
  3. **Long run** (scene 6): `chance.ts` `runTrials` with a `weighted` experiment (P(1) = 0.25, P(2) = 0.5, P(3) = 0.25, seed fixed) for spins 41 onwards, after the real 40 results from scene 1 in their recorded order (Revision 2), `ChanceShareGraph` plotting the relative frequency of 2 against the number of spins (0 to 1,000, log-free linear axis), with a grey dashed line at 0.5 and the label "simulated: sector 2 set to half the spinner". The 40-spin point (0.45) is marked on the curve.
- **Colour roles (fixed for the data videos s10 and s11).** Frequency **blue**; relative frequency **teal**; cumulative frequency **violet**; cumulative relative frequency **amber**; answer green; mistake red. Column headers carry their colours.
- **Large type, handwritten voice.** Hand tags: "each result: one row", "total = 40 ✓", "÷ total", "add to 1: every result in one row", "running total", "this value or less", "in increasing order", "ends at the total", "ends at 1", "estimate, not exact", "ordinary variation", "more trials: usually closer".
- **Stage changes (standard item 2).** The spinner and raw list (1); the sorted frequency table (2); relative frequency in the spreadsheet (3); cumulative columns (4); the estimate and the die (5); the long-run graph (6); framed card (7); question cards (8 to 11); the bars frame for s11 (12); key notes (13).
- **Worked examples (g01 layout).** 2 to 4: site `we-1` (10, 18, 12; 0.25, 0.45, 0.30; 10, 28, 40; 0.25, 0.70, 1.00). 4: site `we-3` (2 or less: 0.70, 28 spins). 5: site `we-2` (13/60 ≈ 0.217 against 1/6 ≈ 0.167). Crossed slips: "13/60 ≠ 1/6, so the die is biased" (5), "more spins will make it exactly 0.5" (6).
- **Memory aid.** Framed card: "Relative frequency = frequency ÷ total. Cumulative = running total (ends at the total, or 1)." Second line: "Relative frequency estimates probability: more trials usually, not always, bring it closer."
- **Visual surprise.** The long run: the relative frequency of 2 swings widely in the first fifty spins, then settles near 0.5, and the 40-spin estimate of 0.45 sits on the curve where it was still settling.
- **Site notes (pack section 8).** No copy error in lesson15. The site's careful "tends to sit closer" is kept (scene 6), as Year 12 s01's review asks.
- **Plain meanings at first use.** Frequency ("how many times a value came up"); relative frequency ("the fraction of all results"); cumulative ("running total"); estimate ("a value from data that's close to, but not certainly, the true value").
- **Attempts (pack questions).** A1: egg cartons, 22, 11, 5, 2 of 40: relative 0.55, 0.275, 0.125, 0.05; cumulative 22, 33, 38, 40; cumulative relative 0.55, 0.825, 0.95, 1; at least one cracked ≈ 0.45; crossed "0.275". A2: volleyball serves, 52 in out of 80: estimate 0.65; about 130 of the next 200; crossed "exactly 130".
- **Mistake scene:** none separate. A relative frequency as the exact probability, or a gap as proof of bias (5 crossed); cumulative columns in an unordered table (4 tag); rounding then expecting an exact sum of 1 (3, author note (c)); dividing by the number of values instead of the number of results (3 tag "÷ 40, not ÷ 3"); "more trials make it exact" (6 crossed, A2 crossed).
- **Cause chain taught, in order:** (1) a raw list hides the pattern (1); (2) sorting puts every result in exactly one row, so the frequencies add to the total (2); (3) dividing by the total makes the rows comparable, and they add to 1 for the same reason (3); (4) a running total answers "this value or less", so it needs increasing order and ends at the total (4); (5) a relative frequency is the share of results so far, so it estimates the chance, with chance variation in a small sample (5); (6) more trials let the variation average out, so the estimate tends to settle (6).
- **Entry knowledge (route):** s04 (P(A) for equally likely outcomes); s09 (discrete random variables).
- **What Year 12 relies on.** Year 12 s01 lists "relative frequency as an estimate" as Year 11 entry knowledge, opens with a die rolled 200 times "whose estimates steady without being forced to the theory", and writes "≈" for estimates. Scene 3 says the relative frequencies add to 1 because every result is in exactly one row (Year 12 s04's grey tag "s01: each trial lands in one place" builds on it); scene 5 says "estimate, not the exact value" and writes "≈"; scene 6 says "tends to sit closer" and "never guarantee". The die is used once, as the site's comparison, not as Year 12 s01's anchor.
- **Handoff (to math-a11-s11, "How do histograms and polygons show the mode and median?").** Scene 12: the finished spreadsheet (values 1, 2, 3; frequency 10, 18, 12; relative 0.25, 0.45, 0.30; cumulative 10, 28, 40; cumulative relative 0.25, 0.70, 1.00) at the left, with three blue bars of heights 10, 18 and 12 rising out of the frequency column into an empty axis at the right; chips "most common value?", "middle result?", "Next: histograms and polygons", "?". This is s11's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Raw list: the 40 results are a fixed order with 10 ones, 18 twos and 12 threes (any order with those counts; the builder fixes it once and reuses it in s11).
  (b) The spinner's coded sectors are 90°, 180° and 90° (0.25, 0.5, 0.25); the narration never states them until scene 6's "suppose sector two really is half".
  (c) 0.25 + 0.45 + 0.30 = 1 exactly; A1's relative frequencies are exact (0.275, 0.125), so no rounding sum issue arises.
  (d) Die: 13/60 = 0.21666...; 1/6 = 0.16666....
  (e) A1: 18/40 = 0.45 at least one cracked (1 − 0.55). A2: 52/80 = 0.65; 0.65 × 200 = 130.
  (f) Pronunciations: "zero point two five", "zero point four five", "zero point two seven five"; "B two divided by B five".

Main question: *How do frequency tables turn data into probability estimates? What can forty spins tell us about a spinner nobody measured?*
Entry knowledge (s04, s09): P(A) for equally likely outcomes; discrete random variables.
Stops after: the five-column table and spreadsheet, relative frequency as an estimate, and the effect of more trials. No graphs, mode or median.
Handoff: math-a11-s11: "turn the table into bars: what's the most common value, and the middle result?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): frequency blue, relative frequency teal, cumulative frequency violet, cumulative relative frequency amber, answer green, mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY AND DATA". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: forty spins, no measurements
> Here's the homemade spinner. Say it's for a board game you're making, and you need to know how often each number comes up. Here are its forty results, in the order they came. Two, one, two, three, two, and on it goes. Sector two looks the biggest, but how much bigger? Nobody measured the sectors, so the only evidence is this list. The answer's in there, but you can't read it like this. So how do frequency tables turn data into probability **estimates**?

Visual: opens on s09's final frame exactly (the spinner `ma12-spinner-base-v1.png` with `ma12-spinner-pointer-v1.png`, 560 px, three coded sectors "1", "2", "3"; the raw list strip; chips "sector sizes: unknown", "40 spins", "chance of each?", "Next: frequency tables", "?"). The "Next" chip fades. The raw list grows to all 40 results in five rows of eight (44 px, ink). On "how much bigger" sector 2 rings with a grey "?" on its edge. On "estimates" heading "Frequency tables and relative frequency" writes on, and the question chip "What do 40 spins tell us?" moves to the top right.

### 2. frequency
> Start by sorting. List the values, one, two and three, in order. Then count how often each one came up, with a tally mark for each result as you go, so the counting is easy to check. That count is called its frequency. Every result goes into exactly one row. One came up ten times, two came up eighteen times, and three came up twelve **times**. Check the total. Ten plus eighteen plus twelve is **forty**, the number of spins, so nothing was missed or counted twice.

Visual: stage change: an empty table at the right, column "value" (ink) and "frequency" (blue), rows 1, 2, 3 and "total". Spin and sort: each result in the raw list flies into its row in turn, leaving a tally mark (fast after the first eight); counter "results placed: 0 → 40"; tag "each result: one row". On "times" the frequencies write: 10, 18, 12 (blue, 52 px). On "forty" the total cell "40" and tag "total = 40 ✓".

### 3. relative frequency
> Raw counts depend on how many spins you did. To compare, divide each frequency by the total. That's the relative frequency, the fraction of all the results. One is ten out of forty, zero point two five. Two is eighteen out of forty, zero point four **five**. Three is twelve out of forty, zero point **three**. In a spreadsheet, each of those cells holds a formula, the frequency over the total, like B three divided by B five. And the relative frequencies add to one. That's not luck. Every result is in exactly one row, so the rows share out the whole forty between **them**.

Visual: stage change: the table becomes a coded spreadsheet (1,300 × 520 px): columns A "value", B "frequency" (blue), C "relative frequency" (teal); rows 2 to 4 for the values, row 5 "total". C2 fills "0.25"; on "five" C3 "0.45"; on "three" C4 "0.30" (teal, 44 px); tag "÷ total"; grey chip "÷ 40 (results), not ÷ 3 (values)". C3 is selected and the formula bar shows "=B3/B5", read aloud as "B three divided by B five" (no absolute reference: root's decision of 17 Nov). On "them" C5 "1" with a tick; tag "add to 1: every result in one row"; a bar under the table splits into 0.25 | 0.45 | 0.30 and fills exactly.

### 4. cumulative columns
> Next, a running total. The cumulative frequency of a value counts the results at that value, or below. For one, it's ten. For two, add the eighteen, to get twenty-**eight**. For three, add the twelve, to get **forty**, every spin. Each cell adds the one above it, so the values have to be in increasing order. Divide each running total by forty, and you get the cumulative relative frequency. Zero point two five, then zero point seven, then exactly **one**. So what share of the spins gave two or less? Read the cumulative columns. Zero point seven, which is twenty-eight **spins**.

Visual: same spreadsheet; column D "cumulative frequency" (violet) and E "cumulative relative frequency" (amber) appear. Running total fill: D2 "10" (arrow from B2); on "eight" D3 "28" with an arrow from D2 and "+18" from B3, formula bar "=D2+B3"; on "forty" D4 "40", tag "ends at the total". Tags "running total", "this value or less", "in increasing order". E fills "0.25", "0.70"; on "one" E4 "1.00", tag "ends at 1", formula bar "=D3/B$5". On "spins" row 3 (value 2) highlights across D and E, the green frame "2 or less: 0.70 of spins = 28 spins", with "0.70 × 40 = 28" in grey.

### 5. an estimate, not the exact value
> Now the payoff. A relative frequency estimates a probability. From these forty spins, the chance of landing on two is about zero point four five. That's an estimate, not the exact value, so we write it with an approximately equals sign. Even a fair die won't match its probabilities perfectly. Roll one sixty times, and you might get thirteen sixes. That's about zero point two one seven, when the true probability is a sixth, about zero point one six seven. A gap like that is ordinary variation in sixty rolls. It isn't proof that the die is **biased**.

Visual: stage change: g01 board at the left: task strip "Estimate P(2)"; row, 52 px: "P(2) ≈ 18/40 = 0.45" (green frame), tag "estimate, not exact" on the "≈". At the right the red die plate (`ma12-die-red-v1.png`, 260 px) with a count readout "rolls: 60, sixes: 13"; rows "relative frequency = 13/60 ≈ 0.217" (teal) and "theory: 1/6 ≈ 0.167" (grey); grey chip "s04: a fair die, 1/6". On "biased" a red slip "0.217 ≠ 0.167, so the die is biased" writes and is crossed, tag "ordinary variation".

### 6. more trials
> So how do you get a better estimate? Spin more. Suppose sector two really is half the spinner. Here are our forty spins, then a simulation of that spinner that keeps on spinning, with the relative frequency of two plotted as it goes. Early on, it jumps around a lot. After a few hundred spins, it tends to sit closer and closer to zero point **five**. So our forty spins weren't wrong. They were a small sample, still settling. That's why a good experiment collects plenty of results before trusting its estimates. More trials usually give a more reliable estimate, but they never guarantee an exact **answer**.

Visual: stage change: `ChanceShareGraph` (1,400 × 640 px): x "number of spins" 0 to 1,000, y "relative frequency of 2" 0 to 1; label "first 40: our spins; then simulated, sector 2 set to half the spinner"; the first 40 points are the real list from scene 1, in order; a grey dashed line at 0.5. Long run: the curve draws live from 1 to 1,000 spins with a readout "spins: n, relative frequency: r" (teal, 44 px); the small spinner badge (220 px) spins at the top left as the count climbs. A green dot marks "40 spins: 0.45" on the curve. On "five" tag "more trials: usually closer". On "answer" a red slip "more spins will make it exactly 0.5" writes and is crossed, caption "usually closer, never guaranteed"; the readout at 1,000 shows a value near but not exactly 0.5.

### 7. memory aid
> Here's the summary. Relative frequency is frequency divided by the total. Cumulative means a running total, so it ends at the total, or at one. And a relative frequency estimates a probability, with more trials usually, but not always, bringing it **closer**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the finished five-column spreadsheet, small. Main line, hand font 56 px: "Relative frequency = frequency ÷ total. Cumulative = running total (ends at the total, or 1)." On "closer" the key line, 40 px: "Relative frequency estimates probability: more trials usually, not always, bring it closer." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A market stall checked forty egg cartons, and counted the cracked eggs in each. Twenty-two cartons had none cracked, eleven had one, five had two, and two had three. Complete a table with frequency, relative frequency, cumulative frequency and cumulative relative frequency, and estimate the probability that a carton has at least one cracked egg. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A market stall checked 40 egg cartons and recorded the number of cracked eggs in each: 0 cracked in 22 cartons, 1 in 11, 2 in 5 and 3 in 2. Complete a table with frequency, relative frequency, cumulative frequency and cumulative relative frequency, and estimate the probability that a carton has at least one cracked egg." The full question stays on screen. Picture slot: an empty five-column table with rows 0, 1, 2, 3 and "total". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Divide each frequency by forty for the relative frequencies, starting with zero point five **five**. The running totals end at forty, and the cumulative relative column ends at **one**. At least one cracked is everything except none, so one minus zero point five five, about zero point four **five**. Zero point two seven five is the slip. That's only the row for one.

Visual: the card shrinks to the top (30 px). The table fills: frequency 22, 11, 5, 2 (40); on "five" relative 0.55, 0.275, 0.125, 0.05; on "one" cumulative 22, 33, 38, 40 and cumulative relative 0.55, 0.825, 0.95, 1. The full columns stay on screen though not all are read aloud, with the grey tag "full table on screen: pause to check". On "five" (last) rows 1 to 3 light, the green frame "P(at least one cracked) ≈ 1 − 0.55 = 0.45". On "the slip" a red slip "0.275" writes and is crossed, caption "only the row for 1". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. In practice, a volleyball player's serve landed in fifty-two times out of eighty. Estimate the probability that the next serve lands in. Then estimate how many of the next two hundred serves will land in. Pause here to answer.

Visual: `QuestionCard`, 40 px: "In practice, a volleyball player's serve landed in 52 times out of 80. (a) Estimate the probability that the next serve lands in. (b) Estimate how many of the next 200 serves will land in." Picture slot: a coded tally strip "in: 52, out: 28" (no answer). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The relative frequency is fifty-two over eighty, zero point six **five**. So of the next two hundred serves, expect about zero point six five times two hundred, which is a hundred and **thirty**. Both are estimates. Saying exactly a hundred and thirty is the slip.

Visual: the card shrinks to the top. Rows, 44 px: "P(in) ≈ 52/80"; on "five" the green frame "≈ 0.65"; "0.65 × 200"; on "thirty" the green frame "about 130 serves". Tag "estimates". On "the slip" a red slip "exactly 130" writes and is crossed, caption "an estimate". Hold about 1 s.

### 12. handoff
> A table is great for reading off values. But a picture is better for seeing the shape of the data. Which value turned up most often? And if you lined up all forty spins in order, which result would sit in the middle? Next, we'll turn these columns into bars and lines, and read off the most common value, and the middle **result**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the finished spreadsheet (values 1, 2, 3; frequency 10, 18, 12; relative 0.25, 0.45, 0.30; cumulative 10, 28, 40; cumulative relative 0.25, 0.70, 1.00) at the left (900 px). Three blue bars rise out of the frequency column and slide into an empty axis at the right (x "value" 0 to 4, y "frequency" 0 to 20), standing at heights 10, 18, 12. On "result" chips "most common value?", "middle result?", "Next: histograms and polygons" and "?". Hold about 2 s. This is s11's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Frequency: how many times a value occurs.
- Relative frequency = frequency ÷ total (they add to 1).
- Cumulative frequency: running total (values in increasing order).
- Cumulative relative frequency = cumulative frequency ÷ total (ends at 1).
- Relative frequency estimates probability; more trials usually help.

Memory aid (framed card, right side, as in scene 7): *Relative frequency = frequency ÷ total. Cumulative = running total.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and s11's opening frame.

## Teaching checks

- **Does it explain causes?** Why the frequencies add to the total: each result is in one row (2). Why relative frequencies add to 1: the same reason (3). Why cumulative needs increasing order: "this value or less" (4). Why a relative frequency is only an estimate: chance variation in a sample (5). Why more trials help: the variation tends to average out (6, shown).
- **Misconceptions addressed:** relative frequency as exact, or a gap as proof of bias (5 crossed); unordered cumulative columns (4 tag); dividing by the number of values (3 chip); "more trials make it exact" (6 crossed, A2 crossed); one row instead of "at least one" (A1 crossed).
- **Visual standard, item by item:** 1 the spinner from the first frame (s09's frame), back in 6; 2 a new stage every 35 to 60 s; 3 spin and sort, the running-total fill, the long-run graph; 4 fixed column roles; 5 large type; 6 hand tags; 7 g01 board in 5, the spreadsheet as working; 8 framed card and five bullets; 9 the long-run curve settling.
- **One idea at a time:** the raw list (1), frequency (2), relative frequency (3), cumulative (4), estimate (5), more trials (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 27 s and 19 s.
- **Avoided double teaching:** s04's probability and s09's discrete values are chips.
- **Syllabus coverage:** `ci1c297b6d` (2 to 4, A1; key notes 1 to 4); `cifa805794` (5, 6, A1, A2; key note 5).
- **Out of scope by design:** graphs, mode and median (s11); distributions (Year 12 s01).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A market stall checked 40 egg cartons and recorded the number of cracked eggs in each: 0 cracked in 22 cartons, 1 in 11, 2 in 5 and 3 in 2. Complete a table with frequency, relative frequency, cumulative frequency and cumulative relative frequency, and estimate the probability that a carton has at least one cracked egg."
Model answer: relative frequencies 0.55, 0.275, 0.125, 0.05; cumulative 22, 33, 38, 40; cumulative relative 0.55, 0.825, 0.95, 1. At least one cracked: 1 − 0.55 = 0.45 (18 of 40). Classic mistake (crossed): "0.275".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "In practice, a volleyball player's serve landed in 52 times out of 80. (a) Estimate the probability that the next serve lands in. (b) Estimate how many of the next 200 serves will land in."
Model answer: (a) 52/80 = 0.65. (b) 0.65 × 200 = 130. Both are estimates. Classic mistake (crossed): "exactly 130".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Spinner (we-1) | 10, 18, 12 (40); 0.25, 0.45, 0.30 (sum 1); 10, 28, 40; 0.25, 0.70, 1.00 | 2 to 4, 12 |
| we-3 | 2 or less: 0.70, 28 spins | 4 |
| we-2 | 13/60 ≈ 0.217; 1/6 ≈ 0.167 | 5 |
| Simulation | sector 2 set to 0.5; 1,000 spins; 40-spin mark 0.45 | 6 |
| A1 | 0.55, 0.275, 0.125, 0.05; 22, 33, 38, 40; 0.55, 0.825, 0.95, 1; 0.45 | 8, 9 |
| A2 | 0.65; 130 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python and SymPy 1.14 (17 Nov 2026, scratchpad `s-designs/verify.py`); Codex to re-check.

- 10 + 18 + 12 = 40; 10/40 = 0.25; 18/40 = 0.45; 12/40 = 0.3; sum 1; running totals 10, 28, 40; 28/40 = 0.7; 0.7 × 40 = 28.
- 13/60 = 0.2167; 1/6 = 0.1667.
- 22 + 11 + 5 + 2 = 40; 22/40 = 0.55; 11/40 = 0.275; 5/40 = 0.125; 2/40 = 0.05; 22, 33, 38, 40; 0.55, 0.825, 0.95, 1; 1 − 0.55 = 0.45.
- 52/80 = 0.65; 0.65 × 200 = 130.

## Memory aid check

- **"Relative frequency = frequency ÷ total. Cumulative = running total (ends at the total, or 1)."** The site's definitions, worded here. Meaning, as said in scene 7. Assumptions checked: "total" is the number of results, not the number of values (scene 3 chip); cumulative columns need values in increasing order (scene 4). Second line: "more trials usually, not always" keeps the estimate honest (Year 12 s01's requirement). It helps a new case: A1.
- **Considered, not used:** "the long run always gets it right" (overclaims; crossed in scene 6).

## Narration length estimate

Revision 2 recount (narration blockquotes, bold markers removed; `work/brief-resolve-s/count.py`, which reproduces e08's 5,632): 5,083 characters (Revision 1: 5,054). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (spin and sort, the running totals, the long-run graph drawing) and the 45 s notes scene: about 469 s. Characters per scene (1 to 13): 453, 459, 565, 567, 551, 603, 255, 380, 356, 236, 256, 327, 75. Speech before the notes is about 377 s, under the 570 s cap. Feedback speech: about 27 s and 19 s.

Reserve trims if the voiced take runs long: scene 3's "That's not luck" sentence pair (keep the tag); scene 6's "So our forty spins weren't wrong" sentence pair (keep the green dot).

## Scene list and build ids

Lesson key `m-a11s10` (route math-a11-s10). Explainer folder `src/explainer/lessons/math-a11-s10`; build inputs in `docs/production/claude-pm/lessons/math-a11-s10/` (at voicing).

In order (13 scene headings): hook-forty-spins, frequency, relative-frequency, cumulative-columns, estimate-not-exact, more-trials, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | The spinner and the raw list |
| 30 to 65 s | 2 | Spin and sort into frequencies |
| 65 to 115 s | 3 | The spreadsheet: relative frequency |
| 115 to 170 s | 4 | Cumulative columns |
| 170 to 210 s | 5 | The estimate; the die's 13 sixes |
| 210 to 255 s | 6 | The long-run graph |
| 255 to 275 s | 7 | Framed memory card |
| 275 to 370 s | 8 to 11 | Question cards and countdowns, then feedback |
| 370 to 390 s | 12 | Bars rising out of the table for s11 |
| 390 to 435 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: s09's last frame continues into 1; 1 to 2 stage change (the list sorts into the table); 2 to 3 the table becomes a spreadsheet; 3 to 4 same spreadsheet; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-s10-learning-review.md`, `science_check` = `checks/m-a11-s10-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, viewed): `ma12-spinner-base-v1.png` (a blank white disc with a clear rim and centre pin) and `ma12-spinner-pointer-v1.png`; `ma12-die-red-v1.png`.

Reused: the spinner plates (1, 6, 12), `ma12-die-red-v1.png` (5).

No new plate. A1 and A2 use coded pictures (an empty table; a tally strip); no egg or volleyball plate is needed.

Coded: the spinner's sectors, the raw list, tallies, the table and spreadsheet with its formula bar, the long-run graph, rows, cards, countdown, hand tags, key notes, the rising bars.

### Studio kit use and additions

Uses: `SpinnerSectors`, `OutcomeSort`, `ScreenApp` (spreadsheet frame), `ChanceShareGraph` and `chance.ts` (`runTrials`, `weighted`), `WorkingBoard`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`FrequencyTable`** (kit list item 12; also s11): a spreadsheet-style table with columns value, frequency, relative frequency, cumulative frequency and cumulative relative frequency, filling column by column; a formula bar shows the selected cell's formula (=B3/B$5, =D2+B3); a column-sum check. Check: every cell equals its formula's value; the relative column sums to 1.
2. **Spin and sort** (small): raw results fly from a strip into table rows with tallies and a placed counter.

## Codex asset brief

No new plate. The spinner and die plates already exist (Year 12).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and key notes against "Numbers used"; confirm the raw list has exactly 10 ones, 18 twos and 12 threes.
2. Confirm the syllabus quotes match the route-inputs JSON exactly.
3. Confirm the spreadsheet's formulas compute the values shown, and that the spreadsheet is unbranded.
4. Confirm relative frequency is always called an estimate (≈), that "more trials" is never said to guarantee the exact value, and that the simulation is labelled as simulated.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, that scene 1 opens on s09's final frame and that scene 12 is s11's opening frame.

## YouTube metadata (draft)

Title: Frequency Tables and Relative Frequency | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson15.sa.html

A homemade spinner has sectors nobody measured. What can 40 spins tell us? Sort the results into a frequency table and a spreadsheet, work out relative frequency, cumulative frequency and cumulative relative frequency, and use relative frequency to estimate a probability. Then watch a simulation settle as the number of spins grows, and see why more trials usually, but not always, give a better estimate. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Probability and data.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Organise finite datasets using a table or a spreadsheet, listing the values, frequency, relative frequency, cumulative frequency, and cumulative relative frequency"
"Use the relative frequency to estimate the probability of results in experiments"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

Builds on: Discrete and continuous random variables. Next: Histograms, polygons, mode and median.

#Year11Maths #MathsAdvanced #RelativeFrequency #HSCScience

## Open decisions

Both are closed in Revision 2: 1 by root ruling 44 and the review; 2 by the review (no angles on screen). The Revision 1 text is kept below for the record.

- **1. "Suppose sector two really is half" (learning review).** The simulation needs a true value; the narration states it as a supposition after the estimate, so the estimate is not told the answer in advance. Check that this does not suggest the 40 spins "should" have given 0.5.
- **2. Spinner sector sizes on screen (builder).** The coded sectors are 90°, 180° and 90°, so sector 2 looks bigger, as the hook says. They are never labelled with angles.

## Review notes

- Revision 2: the independent learning review (`../checks/m-a11-s10-learning-review.md`, should-fix, 0 blockers) is resolved; see "Revision 2" at the top. Next: the Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 (superseded note): Revision 1 has had no independent review. Next: student learning review (trace from s04 and s09; check that the sort makes "each result in one row" the reason for the totals, that the running total is read as "this value or less", and that the long-run graph shows settling without promising exactness), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
