# Maths A11 S09: What makes a random variable discrete or continuous? One number per outcome, capital X and small x, counting against measuring, discrete with infinitely many values, and practical examples (design)

Status: Revision 2 (17 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,212 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 476 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov 2026): learning review resolved

Review: `../checks/m-a11-s09-learning-review.md` (summary `../checks/m-a11-s01-s11-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-t-g-s-packs.md` and root's resolution brief of 17 Nov. Resolution log: `../checks/m-a11-s01-s11-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 5 (the zero-width point is the reading the bag gave): **accepted**, reviewer's sentence with "that reading" added: "When the scale says one point one three, that reading really means a stretch, about one point one two five to one point one three five, and that stretch does have a probability." The point is relabelled "M = 1.1347… exactly"; on the cue "stretch" the stretch 1.125 to 1.135 shades violet, tag "a reading is a stretch". This is a clause about rounding, with no area or density, so root ruling 43 still holds. Scene 5 is now 946 characters (about 71 s).
2. Optional, scene 3 (name the second variable aloud): **applied** ("Call it Y.").

Open decisions closed: see "Open decisions". Joins unchanged: scene 1 still opens on the previous design's final frame, and the handoff scene is still the next design's opening frame (no finding touched a joined frame). Changed and new values are rechecked in `work/brief-resolve-s/verify.py` (SymPy 1.14 and fractions, `python -I`).

Narration 5,212 characters by script (Revision 1: 5,023), about 476 s with holds; speech before the notes about 386 s, under the 570 s cap. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: eighty-eighth video of Year 11 Mathematics Advanced (2024), outline order 88, Probability and data (Data). Pre-design pack: `../pre-design/maths-a11/math-a11-s09.md` (brief 243). Site lesson (read through the pack's quotations, read only): `probability-and-data/lesson14.sa.html` (`we-1`, the total of two dice, 2 to 12, eleven values, P(X = 7) = 6/36; `we-2`, students absent, time to run 100 m and the mass of an apple; `we-3`, tosses until the first head; card 05, the variable is a choice; Q3, a rounded measurement is still continuous). Route entry: `math-a11-s09` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; a painted bag of mandarins on a painted produce scale (introduced on s08's final frame), the reused dice and coin, and a reused painted spinner for the handoff; every number line, array and sorter coded.

Owner rules applied: as s02 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (shopping and food: a bag of mandarins), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Probability and data, Data), quoted from `../../programme/maths-a11-route-inputs-5.json`:

- `cic2a3e877`: "Define a random variable as a variable whose value is the outcome of a random experiment"
- `ci21d3c041`: "Compare discrete random variables with continuous random variables, describe their differences, and give practical examples of each"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

**Boundary:** starts from s08's final frame exactly (the mandarin bag on the produce scale, the display reading "1.13 kg"; chips "count: 9 mandarins" (blue), "mass: 1.13 kg" (teal), "one bag, two numbers", "Next: random variables", "?"). Recalls s04 (experiments, outcomes, one trial gives one outcome, P(A)) and s06 (the two-dice array) in a phrase or grey chip each. Teaches: a random variable as a variable whose value is the outcome of a random experiment, one number per outcome (`cic2a3e877`, its syllabus words said once); capital X for the variable, small x for a value, P(X = x); the variable is a choice (the total, or the larger number, of two dice); discrete variables (values that can be listed, usually counted; possibly infinitely many) and continuous variables (any value in an interval, usually measured; rounding a reading does not make it discrete) (`ci21d3c041`); one sentence on why the difference matters, with the correct reason (root ruling 12); practical examples sorted by "count or measure". Stops at classifying random variables. Not taught: probability distributions and their checks (Year 12 s01); why P(X = x) = 0 by area, the CDF and densities (Year 12 s04 to s06).

## Decisions

- **Anchor: a bag of mandarins picked at random at the shop (painted plates, live).** One random bag gives a count (how many mandarins) and a measurement (its mass on the scale), which is the whole comparison in one object, and the scale's rounded display is the "a rounded reading is still continuous" trap. Shopping and food; the pack's anchor 3. No Year 11 or Year 12 Maths design uses mandarins or a produce scale (grep 17 Nov 2026: no hits; Year 12 s04's sprinters, s06's cookie and w22's watermelon were avoided by the pack).
- **Root ruling 12 (the reason P(X = x) = 0).** The pack advised leaving P(X = x) = 0 to Year 12 s04; root ruled that s09 teaches the correct reason. Scene 5 gives it in two sentences, without area or a CDF: "For a measured variable, probability belongs to stretches of values, like a mass between 1.1 and 1.2 kilograms. A single exact value is a stretch with no width, so on its own it has probability zero." It never uses the site's "infinitely many values" reason (S11-P02), and scene 4 shows why that reason fails (a discrete variable with infinitely many values). Year 12 s04 then explains it with histograms and area. Logged in the root decisions file.
- **Notation.** Capital X (or N, M) for the variable, small x for a value, P(X = x). Spoken "capital X", "small x", "P of X equals nine".
- **Simulations (standard item 3).**
  1. **Bag after bag** (scenes 1, 2): five bags drop onto the scale in turn; each time the count chip and the scale's reading update (9, 1.13; 10, 1.21; 8, 1.04; 9, 1.18; 11, 1.26), and two number lines collect the values: counts as dots on whole numbers, masses as ticks anywhere along a line.
  2. **Rule card on the array** (scene 3): a rule card "X = total" turns every cell of s06's 6 × 6 array into a number, then "Y = larger number" relabels the same cells.
  3. **Zooming scale** (scene 5): the display gains digits (1.13 → 1.135 → 1.1347) as the number line zooms in on a stretch that never runs out of points.
  4. **Count-or-measure sorter** (scene 6): example cards drop into two columns, "discrete: counted" and "continuous: measured", each with a one-line reason.
- **Colour roles (fixed for the s strand, data videos).** Discrete values and counts **blue**; continuous values and measurements **teal**; the probability of a value or interval **violet**; answer green; mistake red.
- **Large type, handwritten voice.** Hand tags: "one number per outcome", "X: the variable", "x: a value", "one trial, one value", "the variable is a choice", "gaps between values", "listable, even if endless", "any value in between", "rounded, still continuous", "stretches, not points", "a reading is a stretch", "count it: discrete", "measure it: continuous".
- **Stage changes (standard item 2).** The bag and the two number lines (1); the definition card (2); the dice array (3); the discrete dot line and the coin tosses (4); the zooming scale (5); the sorter (6); framed card (7); question cards (8 to 11); the spinner frame for s10 (12); key notes (13).
- **Worked examples (g01 layout).** 3: site `we-1` (values 2 to 12; P(X = 7) = 6/36). 4: site `we-3` (tosses until the first head). 6: site `we-2` plus the pack's anchors (hockey goals, fuel litres). Crossed slips: "the number of tosses is continuous: it has infinitely many values" (4), "the mass is discrete: the scale shows two decimal places" (5).
- **Memory aid.** Framed card: "Count it: discrete. Measure it: continuous." Second line: "Discrete can still go on forever, as long as you can list it."
- **Visual surprise.** The zooming scale: the reading keeps gaining digits while the line between two ticks keeps holding more points.
- **Site notes (pack section 8).** S11-P02 (card 07's "infinitely many possible heights" reason) is not reused; the correct reason is given in its place (root ruling 12). Card 05's "the variable is a choice" is used, with "the larger number" in place of "the difference" because A2 uses the difference.
- **Plain meanings at first use.** Random variable (the syllabus definition, then "a rule that gives each outcome one number"); discrete ("values you can list, with gaps between them"); continuous ("any value in an interval"); interval ("a stretch of the number line, like 1 to 1.3").
- **Attempts (pack questions).** A1: texts in an hour (discrete), time until the next text (continuous), rolls until the first 6 (discrete, infinitely many values); crossed "(c) continuous, because it has infinitely many values". A2: absolute difference of two dice: values 0 to 5, P(X = 0) = 1/6, P(X = 1) = 5/18; crossed "P(X = 1) = 5/36".
- **Mistake scene:** none separate. "Discrete means finite" (4 crossed, A1 crossed); a rounded measurement called discrete (5 crossed); X confused with x (2 tags); the variable taken as the experiment (3); one order only in a two-dice count (A2 crossed).
- **Cause chain taught, in order:** (1) one random bag gives two numbers that behave differently (1); (2) a random variable is a rule giving each outcome one number, so one trial gives one value (2); (3) the rule is chosen, so one experiment can have many random variables (3); (4) counted values have gaps, so they can be listed, even without end (4); (5) measured values fill an interval, and a reading is only rounded, so the variable is continuous; probability then goes with stretches of values (5); (6) so "count or measure" sorts practical examples (6).
- **Entry knowledge (route):** s04 (experiments, outcomes and P(A)); s06 (the two-dice array).
- **What Year 12 relies on.** Year 12 s01 defines discrete distributions on this definition, and its aid "One trial, one value" assumes "every trial gives exactly one value of X". Year 12 s04 owns P(X = x) = 0 and the CDF; s05 and s06 own densities. Scene 2 says "One trial gives exactly one value of X"; capital X, small x and P(X = x) are used as Year 12 uses them; "discrete does not mean finite" is scene 4; the stretches-not-points sentence is the reason Year 12 s04 builds on, without its content.
- **Handoff (to math-a11-s10, "How do frequency tables turn data into probability estimates?").** Scene 12: the reused painted spinner (`ma12-spinner-base-v1.png` with `ma12-spinner-pointer-v1.png`) with three coded sectors labelled "1", "2", "3" of visibly unequal size (90°, 180°, 90°; the angles are not shown or stated); a raw list of 40 results in a scrolling strip ("2, 1, 2, 3, 2, ..."); chips "sector sizes: unknown", "40 spins", "chance of each?", "Next: frequency tables", "?". This is s10's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Illustrative bags (counts, kg): (9, 1.13), (10, 1.21), (8, 1.04), (9, 1.18), (11, 1.26). Mandarins of about 115 to 125 g; plausible, labelled "example bags".
  (b) Two dice: X = total, 2 to 12, 11 values; P(X = 7) = 6/36. Y = larger number, 1 to 6 (P(Y = y) = (2y − 1)/36, not said).
  (c) N = tosses until the first head: 1, 2, 3, ...; P(N = n) = (1/2)ⁿ, not said.
  (d) Mass interval 1 to 1.3 kg is illustrative.
  (e) A2: |difference| values 0 to 5; counts 6, 10, 8, 6, 4, 2 (sum 36); P(0) = 1/6, P(1) = 10/36 = 5/18.
  (f) Pronunciations: "capital X", "small x", "P of X equals seven", "one point one three kilograms".

Main question: *What makes a random variable discrete or continuous? One random bag: why is "how many" different from "how heavy"?*
Entry knowledge (s04, s06): experiments and outcomes; the two-dice array.
Stops after: the definition, X and x, discrete and continuous variables with reasons and examples, and why probability goes with intervals for continuous ones. No distributions.
Handoff: math-a11-s10: "a spinner with unknown sector sizes, spun 40 times: what can the list tell us?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): discrete blue, continuous teal, probability violet, answer green, mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY AND DATA". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: one bag, two numbers
> Here's a bag of mandarins, picked at random at the shop. Count them, and there are nine. Put the bag on the scale, and it reads one point one three kilograms. Pick another bag, and you'd get two new numbers, maybe ten mandarins and one point two one kilograms. Both numbers come from chance, but they behave differently. You could get nine mandarins or ten, but never nine and a half. The mass could be anything in between. So what makes a random variable discrete or **continuous**?

Visual: opens on s08's final frame exactly (the bag `ma11-mandarin-bag-v1.png` on the scale `ma11-produce-scale-v1.png`, display "1.13 kg"; chips "count: 9 mandarins" (blue), "mass: 1.13 kg" (teal), "one bag, two numbers", "Next: random variables", "?"). The "Next" chip fades. Bag after bag: the bag lifts off and four more drop on in turn; the count chip and the display update (10, 1.21; 8, 1.04; 9, 1.18; 11, 1.26); tag "example bags". Two number lines build at the right: "count" (blue) with dots landing on whole numbers 8 to 11, and "mass (kg)" (teal), 1.0 to 1.3, with ticks landing between the gridlines. On "nine and a half" a grey ghost dot at 9.5 is crossed. On "continuous" heading "Discrete and continuous random variables" writes on, and the question chip "Count or measure?" moves to the top right.

### 2. what a random variable is
> First, the name. A random variable is a variable whose value is the outcome of a random experiment. Here the experiment is picking a bag at random, and the random variable gives each outcome one number. We use a capital letter for the variable, like capital X for the number of mandarins. And we use a small letter for one of its values, like small x equals nine. Then P of X equals nine means the probability that the bag holds nine **mandarins**. Each trial, one bag, gives exactly one value of **X**.

Visual: stage change: definition card, 44 px, at the top: "Random variable: a variable whose value is the outcome of a random experiment"; tag "one number per outcome". The bag badge (300 px) at the left with an arrow to "X = 9" (blue, 56 px). Labels: "X: the variable" and "x: a value" with arrows to "X" and "9"; row "x = 9". On "mandarins" row "P(X = 9): the probability the bag holds 9" (violet). On "X" the bag-after-bag replay runs once more, each bag sending exactly one dot to the count line; tag "one trial, one value"; grey chip "s04: one trial, one outcome".

### 3. the variable is a choice
> Random variables work on any sample space. Roll two dice, and let X be the total. Every cell of the array turns into one number, from two up to twelve, eleven possible **values**. Seven appears in six cells, so P of X equals seven is six thirty-**sixths**. But the same dice could give a different random variable, like the larger of the two numbers. Call it Y. Now each cell gets a new number, from one to **six**. So the variable is a choice we make about the experiment, not the experiment **itself**.

Visual: clear change: s06's 6 × 6 array (900 × 900 px) with the white and red dice at its edges (200 px). Rule card "X = total" (blue) slides onto the array; every cell's pair is replaced by its total; on "values" a dot line "2, 3, ..., 12" (blue) writes beneath, chip "11 values". On "sixths" the six 7s light violet, row "P(X = 7) = 6/36" (green frame); grey chip "s06: the array". Rule card "Y = larger number" slides over the first; on "six" the cells relabel 1 to 6, line "1, 2, ..., 6". On "itself" tag "the variable is a choice".

### 4. discrete
> The number of mandarins is a discrete random variable. Its values can be listed, eight, nine, ten and so on, with gaps in between. Discrete variables usually come from counting. On a number line, they're separate **dots**. But discrete doesn't mean finite. Toss a coin until the first head, and let N be the number of tosses. It could be one, or two, or three, and on and on, with no upper limit. That's infinitely many values, but you can still list them in order, so N is still **discrete**. Calling it continuous because it never stops is the **slip**.

Visual: stage change: the count line (blue, 1,400 px) with dots at whole numbers; on "dots" the gaps between dots shade grey, tag "gaps between values". The coin plates (`ma12-coin-heads-v1.png`, `ma12-coin-tails-v1.png`, 140 px) at the top left; a row of tosses plays out "T, T, H" with "N = 3" (blue); a second line "N: 1, 2, 3, 4, ..." with dots running off the right edge under an ellipsis. On "discrete" tag "listable, even if endless". On "slip" a red slip "N is continuous: infinitely many values" writes and is crossed, caption "you can still list them".

### 5. continuous
> Now the mass of the bag. It's a continuous random variable. It can take any value in an interval, say between one and one point three kilograms. Continuous variables usually come from measuring. The scale shows one point one three, but that's rounded. A finer scale might show one point one three four seven, and the true mass has more digits still. So on the number line, the values make a solid stretch, not **dots**. Rounding the reading doesn't make the mass discrete. And this changes how we talk about probability. For a measured variable, probability belongs to stretches of values, like a mass between one point one and one point two kilograms. A single exact value is a stretch with no width, so on its own it has probability zero. When the scale says one point one three, that reading really means a **stretch**, about one point one two five to one point one three five, and that stretch does have a probability. Year 12 explains that **properly**.

Visual: stage change: the scale plate (520 px) at the left; the mass line (teal, 1,400 px, 1.0 to 1.3 kg) at the right. Zooming scale: the display gains digits "1.13" → "1.135" → "1.1347"; the line zooms on the stretch 1.13 to 1.14, which keeps showing more ticks; tag "any value in between". On "dots" the line fills as a solid teal bar; tag "rounded, still continuous". A red slip "mass is discrete: the scale shows 2 decimal places" writes and is crossed. The interval "1.1 ≤ M ≤ 1.2" shades violet, row "P(1.1 ≤ M ≤ 1.2): a stretch"; a single point "M = 1.1347… exactly" with zero width, tag "stretches, not points". On "stretch" the stretch "1.125 to 1.135" shades violet around the scale's "1.13", tag "a reading is a stretch". On "properly" grey chip "Year 12: probability from area".

### 6. count or measure?
> So here's the test. Count it, and it's discrete. Measure it, and it's continuous. The number of students absent today is counted, so it's discrete. The time to run a hundred metres is measured, so it's continuous. So is the mass of an apple. The number of goals in a hockey match is **discrete**. And the litres pumped at a fuel bowser are measured, so they're **continuous**, even though the pump shows two decimal places. If you're not sure, ask whether a value halfway between two possible values makes sense. Half a goal doesn't, but half a litre more does.

Visual: stage change: the count-or-measure sorter, two columns, 44 px: "discrete: counted" (blue) and "continuous: measured" (teal). Cards drop in as spoken, each with a reason line: "students absent: 0, 1, 2, ..." (blue); "time to run 100 m" (teal); "mass of an apple" (teal); on "discrete" "goals in a hockey match: 0, 1, 2, ..." (blue); on "continuous" "litres pumped at a bowser" (teal) with a grey tag "shown to 2 d.p., still measured". Tags "count it: discrete", "measure it: continuous". On the last two sentences a grey chip "halfway value makes sense? continuous" with a crossed "2.5 goals" and a ticked "+0.5 L".

### 7. memory aid
> Here's the summary. A random variable gives each outcome of a random experiment one number. Count it, and it's discrete, even if the list goes on forever. Measure it, and it's **continuous**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: a dot line above a solid line. Main line, hand font 56 px: "Count it: discrete. Measure it: continuous." On "continuous" the key line, 40 px: "Discrete can still go on forever, as long as you can list it." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Classify each random variable as discrete or continuous, with a reason. A, the number of text messages received in an hour. B, the time until the next text message arrives. C, the number of rolls of a die until the first six appears. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Classify each random variable as discrete or continuous, with a reason. (a) The number of text messages received in an hour. (b) The time until the next text message arrives. (c) The number of rolls of a die until the first 6 appears." The full question stays on screen. Picture slot: the empty two-column sorter "discrete" and "continuous" with no cards. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> A is counted, zero, one, two and so on, so it's **discrete**. B is a time, which is measured and can be any value in an interval, so it's **continuous**. C is counted, one, two, three, with no upper limit, but you can still list the values, so it's **discrete**. Calling C continuous because it goes on forever is the slip.

Visual: the card shrinks to the top (30 px). Cards drop into the sorter: on "discrete" "(a) texts in an hour: counted, 0, 1, 2, ..." (blue, green tick); on "continuous" "(b) time until the next text: measured" (teal, green tick); on "discrete" (second) "(c) rolls until a 6: 1, 2, 3, ... listable" (blue, green tick). On "the slip" a red slip "(c) continuous: infinitely many values" writes and is crossed, caption "endless, but listable". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Two fair dice are rolled, and X is the absolute difference of the two numbers. List the possible values of X, and find P of X equals zero, and P of X equals one. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Two fair dice are rolled and X is the absolute difference of the two numbers. List the possible values of X and find P(X = 0) and P(X = 1)." Picture slot: an empty 6 × 6 array with axes 1 to 6. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The difference can be zero, one, two, three, four or five. X is zero for the six doubles, so P of X equals zero is six thirty-sixths, one **sixth**. X is one for five pairs, like one and two, and each pair can come in either order. That's ten cells, so ten thirty-sixths, five **eighteenths**. Five thirty-sixths is the slip. It counts only one order.

Visual: the card shrinks to the top. The array fills with differences (rule card "X = |difference|"); row "x: 0, 1, 2, 3, 4, 5". The six 0s light violet; on "sixth" the green frame "P(X = 0) = 6/36 = 1/6". The ten 1s light on both sides of the diagonal; on "eighteenths" the green frame "P(X = 1) = 10/36 = 5/18". On "the slip" a red slip "5/36" writes and is crossed, caption "both orders". Hold about 1 s.

### 12. handoff
> Some random variables come with known probabilities, like fair dice. But what if you don't know them? Here's a homemade spinner with three sectors, one, two and three, and they're clearly not the same size. Nobody measured them. So spin it forty times, and write down every result. What can that messy list tell us about the **chances**?

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the spinner (`ma12-spinner-base-v1.png` and `ma12-spinner-pointer-v1.png`, 560 px) at the left with three coded sectors "1", "2", "3" of visibly unequal size (no angles shown). The pointer spins and stops; a raw list strip at the right begins "2, 1, 2, 3, 2, ..." and scrolls as more results arrive. Chips "sector sizes: unknown", "40 spins", "chance of each?". On "chances" chips "Next: frequency tables" and "?". Hold about 2 s. This is s10's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Random variable X: a number given to each outcome of a random experiment.
- X is the variable, x is a value; P(X = x).
- Discrete: values can be listed (usually counted), even endlessly.
- Continuous: any value in an interval (usually measured).
- A rounded reading of a measurement is still continuous.

Memory aid (framed card, right side, as in scene 7): *Count it: discrete. Measure it: continuous.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and s10's opening frame.

## Teaching checks

- **Does it explain causes?** Why a random variable: each outcome is given a number (2). Why one trial gives one value: one outcome, one number (2). Why discrete values can be infinite: listable is the test, not finite (4). Why a rounded mass is continuous: the true value has more digits (5). Why probability goes with intervals for continuous variables: a single value has no width (5).
- **Misconceptions addressed:** discrete as finite (4 crossed, A1 crossed); rounded readings as discrete (5 crossed); X and x confused (2 tags); the variable as the experiment (3); one order only (A2 crossed).
- **Visual standard, item by item:** 1 the mandarins from the first frame (s08's frame), back in 2 and 5; 2 a new stage every 35 to 60 s; 3 bag after bag, the rule cards on the array, the zooming scale, the sorter; 4 fixed roles; 5 large type; 6 hand tags; 7 g01-style rows in 3 and the feedback; 8 framed card and five bullets; 9 the zooming scale.
- **One idea at a time:** two numbers (1), the definition (2), a choice (3), discrete (4), continuous (5), sorting (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 23 s and 26 s.
- **Avoided double teaching:** s04's trials and s06's array are chips and reused pictures.
- **Syllabus coverage:** `cic2a3e877` (2, 3; key notes 1, 2); `ci21d3c041` (4 to 6, A1, A2; key notes 3 to 5).
- **Out of scope by design:** distributions (Year 12 s01); P(X = x) = 0 by area, the CDF and densities (Year 12 s04 to s06).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Classify each random variable as discrete or continuous, with a reason. (a) The number of text messages received in an hour. (b) The time until the next text message arrives. (c) The number of rolls of a die until the first 6 appears."
Model answer: (a) discrete: counted, values 0, 1, 2, .... (b) continuous: a time is measured and can be any value in an interval. (c) discrete: counted, values 1, 2, 3, ... with no upper limit, but listable. Classic mistake (crossed): "(c) continuous, because it has infinitely many values".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "Two fair dice are rolled and X is the absolute difference of the two numbers. List the possible values of X and find P(X = 0) and P(X = 1)."
Model answer: X ∈ {0, 1, 2, 3, 4, 5}. P(X = 0) = 6/36 = 1/6. P(X = 1) = 10/36 = 5/18. Classic mistake (crossed): "P(X = 1) = 5/36".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Bags (illustrative) | 9, 1.13 kg; 10, 1.21; 8, 1.04; 9, 1.18; 11, 1.26 | 1, 2 |
| Dice total | 2 to 12, 11 values; P(X = 7) = 6/36 | 3 |
| Larger number | 1 to 6 | 3 |
| Coin tosses | N = 1, 2, 3, ...; example T, T, H gives N = 3 | 4 |
| Mass | 1.13 → 1.135 → 1.1347; interval 1.0 to 1.3; 1.1 ≤ M ≤ 1.2 | 5 |
| A2 | 0 to 5; 6/36 = 1/6; 10/36 = 5/18 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python (itertools) and SymPy 1.14 (17 Nov 2026, scratchpad `s-designs/verify.py`); Codex to re-check.

- Totals of two dice: 2 to 12 (11 values); total 7 in 6 cells.
- Larger of two dice: values 1 to 6.
- |difference| of two dice: values 0 to 5 with counts 6, 10, 8, 6, 4, 2 (sum 36); 6/36 = 1/6; 10/36 = 5/18.
- Bag masses ÷ counts: 1.13/9 ≈ 0.126, 1.21/10 = 0.121, 1.04/8 = 0.13, 1.18/9 ≈ 0.131, 1.26/11 ≈ 0.115 kg per mandarin (plausible, author check only).

## Memory aid check

- **"Count it: discrete. Measure it: continuous."** The pack's count-or-measure test, worded here. Meaning, as said in scene 7. Assumptions checked: "usually" (the syllabus distinction is listable values against values filling an interval; counting and measuring are the usual sources, so the card is a test for practical examples, and key notes 3 and 4 say "usually"); money counted in cents is a known edge case (discrete), not raised. Second line: discrete can be infinite (scene 4). It helps a new case: A1.
- **Considered, not used:** "discrete = whole numbers" (false for, say, shoe sizes in halves; and it invites the rounded-reading error).

## Narration length estimate

Revision 2 recount (narration blockquotes, bold markers removed; `work/brief-resolve-s/count.py`, which reproduces e08's 5,632): 5,212 characters (Revision 1: 5,023). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 18 s of settling (bag after bag, the rule cards, the zoom, the sorter) and the 45 s notes scene: about 476 s (Revision 2 adds about 1 s of holds and settling). Characters per scene (1 to 13): 479, 495, 488, 543, 946, 553, 187, 266, 311, 193, 343, 333, 75. Speech before the notes is about 386 s, under the 570 s cap. Feedback speech: about 23 s and 26 s.

Reserve trims if the voiced take runs long: scene 6's apple sentence (keep its card); scene 5's "A finer scale" sentence (keep the zoom).

## Scene list and build ids

Lesson key `m-a11s09` (route math-a11-s09). Explainer folder `src/explainer/lessons/math-a11-s09`; build inputs in `docs/production/claude-pm/lessons/math-a11-s09/` (at voicing).

In order (13 scene headings): hook-one-bag-two-numbers, random-variable, variable-is-a-choice, discrete, continuous, count-or-measure, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | The mandarins, bag after bag, two number lines |
| 40 to 80 s | 2 | The definition card |
| 80 to 125 s | 3 | Rule cards on the dice array |
| 125 to 175 s | 4 | Dots, gaps and the coin tosses |
| 175 to 240 s | 5 | The zooming scale and the solid line |
| 240 to 270 s | 6 | The sorter |
| 270 to 285 s | 7 | Framed memory card |
| 285 to 375 s | 8 to 11 | Question cards and countdowns, then feedback |
| 375 to 400 s | 12 | The spinner for s10 |
| 400 to 445 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: s08's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-s09-learning-review.md`, `science_check` = `checks/m-a11-s09-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, viewed): `ma12-spinner-base-v1.png` (a clear-rimmed white disc with a centre pin, blank face, so coded sectors can be drawn on it) and `ma12-spinner-pointer-v1.png`; the dice and coins as in s04 and s06.

Reused: `ma11-mandarin-bag-v1.png` and `ma11-produce-scale-v1.png` (painted under s08's brief; 1, 2, 5), `biology/m5x-die-v1.png` and `ma12-die-red-v1.png` (3), `ma12-coin-heads-v1.png` and `ma12-coin-tails-v1.png` (4), `ma12-spinner-base-v1.png` and `ma12-spinner-pointer-v1.png` (12).

No new plate.

Coded: the scale's reading, number lines, the array and rule cards, the toss row, the sorter, rows, cards, countdown, hand tags, key notes, the spinner's sectors.

### Studio kit use and additions

Uses: `OutcomeGrid` (with a value rule per cell), `IntervalPicture`, `OutcomeSort` (as the sorter), `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `SpinnerSectors` (handoff).

Additions:
1. **`DotsVsInterval`** (kit list item 14): a number line with separate dots (with an ellipsis for an endless list) against a solid interval with a zoom that keeps revealing ticks. Check: dots sit on whole values; the zoom shows at least three tick levels.
2. **Scale display digits** (small): the plate's display rectangle shows a coded reading that gains digits on cue.

## Codex asset brief

No new plate. The mandarin bag and produce scale are painted under s08's brief; the dice, coins and spinner already exist. All must be in place before the s09 build.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quotes match the route-inputs JSON exactly, and that the definition is said once in the syllabus words.
3. Confirm the reason given for zero probability at a single value is "a single value has no width" (root ruling 12), never "infinitely many values" (S11-P02), and that no density, area or CDF is taught.
4. Confirm discrete is never described as finite, and that the endless discrete example appears.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, that scene 1 opens on s08's final frame and that scene 12 is s10's opening frame.

## YouTube metadata (draft)

Title: Discrete and Continuous Random Variables | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson14.sa.html

Pick a bag of mandarins at random: count them, then weigh the bag. Why are those two numbers different kinds of random variable? Learn what a random variable is, read X, x and P(X = x), see why the total of two dice is discrete, why the number of tosses until a head is discrete even though it never stops, and why a mass is continuous even when the scale rounds it. Then sort practical examples by counting and measuring. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Probability and data.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define a random variable as a variable whose value is the outcome of a random experiment"
"Compare discrete random variables with continuous random variables, describe their differences, and give practical examples of each"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

Builds on: Experiments, outcomes and probability (s04); the two-dice array (s06). Next: Frequency tables and relative frequency.

#Year11Maths #MathsAdvanced #RandomVariables #HSCScience

## Open decisions

Both are closed in Revision 2: 1 by root ruling 43 (finding 1 adds one clause about rounding, not Year 12 content); 2 by the review (keep the card). The Revision 1 text is kept below for the record.

- **1. Root ruling 12 against the pack (root).** The pack said to leave P(X = x) = 0 to Year 12 s04; root ruled to teach the correct reason. Scene 5 gives it in two sentences with no area or CDF, and points to Year 12. If root meant a fuller treatment here, it would push into Year 12 s04's content.
- **2. "Usually" in the test (learning review).** The card says "Count it: discrete. Measure it: continuous." without "usually"; the key notes keep "usually". Check that the card does not overclaim.

## Review notes

- Revision 2: the independent learning review (`../checks/m-a11-s09-learning-review.md`, should-fix, 0 blockers) is resolved; see "Revision 2" at the top. Next: the Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 (superseded note): Revision 1 has had no independent review. Next: student learning review (trace from s04 and s06; check that one bag's two numbers make the distinction felt before any definition, that the endless coin tosses break "discrete means finite", and that the stretches-not-points sentence is clear without Year 12's area idea), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
