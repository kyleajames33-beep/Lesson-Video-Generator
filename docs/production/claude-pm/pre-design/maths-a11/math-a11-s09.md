# math-a11-s09: What makes a random variable discrete or continuous?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cic2a3e877` (Data): Define a random variable as a variable whose value is the outcome of a random experiment [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.
- `ci21d3c041` (Data): Compare discrete random variables with continuous random variables, describe their differences, and give practical examples of each [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-s04: experiments, outcomes and P(A). math-a11-s06: the two-dice array.

**Prior video:** math-a11-s08.

**Start:** one experiment, two numbers recorded: a count and a measurement.

**Stop:** Define a random variable as a variable whose value is the outcome of a random experiment (X for the variable, x for a value, P(X = x)); compare discrete random variables (values that can be listed, usually counted, possibly infinitely many) with continuous ones (any value in an interval, usually measured), with practical examples of each. Distributions and densities are Year 12 s01 to s06; P(X = x) = 0 for a continuous variable is Year 12 s04.

**Next:** math-a11-s10.

**Year 12 dependency:** Year 12 s01 ("How do data and a model determine a discrete probability distribution? Random variables, ...") defines its discrete distributions on this video's definition, and its aid "One trial, one value" assumes "every trial gives exactly one value of X". Year 12 s04 owns P(X = x) = 0 for continuous variables and the CDF, and Year 12 s05 and s06 own densities. Deliver: X as a rule giving one number per outcome; capital X, small x and P(X = x); the count-or-measure test; "discrete does not mean finite". Do not teach why P(X = x) = 0 here (see S11-P02).

**Spoken maths:** "capital X" and "small x" when both appear; "P of X equals seven".

## 2. Site order, sections and worked examples

Read-only source: [probability-and-data/lesson14.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson14.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `3709ab337da61d80a4c394f4909d73d1f358e38fde7d4845ea44eec10ee51f2e`. Title: Random Variables, Discrete and Continuous. Lesson id maths-adv-y11-m5-l14.

Data-step ids: `recall-your-gut-answer-first`, `countable-list-or-an-interval`, `what-you-ll-master`, `what-a-random-variable-is`, `model`, `quick-fire-practice`, `revisit-your-two-experiments`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source probability-and-data/lesson14.sa.html, `we-1`

PROBLEM 1 · LISTING THE VALUES Two dice are rolled and $X$ is the total. State the type of random variable and list its possible values. 1 $X$ counts spots, so it is discrete 2 The smallest total is $1 + 1 = 2$; the largest is $6 + 6 = 12$ 3 $X$ can take $2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12$: eleven possible values

### Source probability-and-data/lesson14.sa.html, `we-2`

PROBLEM 2 · CLASSIFYING Classify each as discrete or continuous, with a reason: (a) the number of students absent, (b) the time to run 100 m, (c) the mass of an apple. 1 (a) Discrete: absences are counted, and the values are $0, 1, 2, \ldots$ 2 (b) Continuous: time is measured, so $t$ can take any value in an interval 3 (c) Continuous: mass is measured, so any value in a range of $\text{kg}$ is possible

### Source probability-and-data/lesson14.sa.html, `we-3`

PROBLEM 3 · AN INFINITE DISCRETE VARIABLE A coin is tossed until the first head. $X$ is the number of tosses required. Is $X$ discrete or continuous? 1 The possible values are $1, 2, 3, \ldots$ with no upper limit 2 But $1, 2, 3, \ldots$ can still be listed in order 3 $X$ is discrete, with infinitely many possible values

### Source probability-and-data/lesson14.sa.html, key terms and card 05

Key term: "$P(X = 7) = \frac{6}{36}$ for two dice." Card 05: "The variable is a choice, not a property of the experiment. The same two dice could define $X$ as the total, the difference, or the larger of the two." Q3: height is continuous even though a ruler reads to the nearest millimetre.

Only the parts named in the stop boundary belong to this video.

## 3. Recalculation

- we-1: totals 2 to 12, eleven values. Key term: P(X = 7) = 6/36.
- we-3: values 1, 2, 3, … (listable, infinite).
- Practice answers below (the absolute difference of two dice takes 0 to 5; P(X = 0) = 1/6, P(X = 1) = 5/18).

Every example above was recalculated with SymPy (`work/brief243-gs/verify_s.py`, run with `python -I`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- "Discrete means finite" (we-3 shows otherwise).
- "Continuous means rounded data are discrete" (a measured height recorded to the millimetre is still continuous; the site's Q3).
- Confusing the random variable X with one of its values x.
- Thinking a random variable is the experiment itself rather than a number given to each outcome.
- Calling a variable discrete because it has whole-number values in a table, when the quantity is a measurement.

These follow from the official content, not claims about how often markers see them.

## 5. Visual needs

- The two-dice array (s06) with a rule card "X = total" turning every cell into a number; a second rule card "X = difference" on the same array (card 05's point that the variable is a choice).
- Discrete values as separate dots on a number line (with "…" for an infinite list); continuous values as a solid interval with a measuring tick sliding through it.
- A count-or-measure sorter: practical examples dropping into two columns, each with its reason.

All diagrams coded in the shared paper style. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

Classify each random variable as discrete or continuous, with a reason. (a) The number of text messages received in an hour. (b) The time until the next text message arrives. (c) The number of rolls of a die until the first 6 appears.

**Worked answer:** (a) Discrete: counted, values 0, 1, 2, …. (b) Continuous: time is measured and can be any value in an interval. (c) Discrete: counted, values 1, 2, 3, … with no upper limit, but still listable. Crossed mistake: (c) "continuous, because it has infinitely many values".

### Question 2

Two fair dice are rolled and X is the absolute difference of the two numbers. List the possible values of X and find P(X = 0) and P(X = 1).

**Worked answer:** X can be 0, 1, 2, 3, 4 or 5. P(X = 0) = 6/36 = 1/6 (the doubles). P(X = 1) = 10/36 = 5/18 (five pairs, each in either order). Crossed mistake: P(X = 1) = 5/36 (only one order).

Only the question goes on the card. Hide the answer and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A hockey match: the number of goals is discrete, and the time of the first goal is continuous (sport).
- A road trip: the number of fuel stops is discrete, and the litres pumped at a bowser are continuous (travel).
- A bag of mandarins at the shop: how many are in the bag is discrete, and the bag's mass is continuous (food, shopping).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs (Year 12 s04's sprinters' reaction times and s06's choc-chip cookie were avoided), the Year 11 w, c and e designs (w22's watermelon was avoided), the w, c and e pack suggestions, or another g or s pack (grepped, 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only.

- **S11-P02** (logged): card 07 explains P(X = x) = 0 for a continuous variable with "there are infinitely many possible heights, so no single one has positive probability". The same lesson's we-3 is a discrete variable with infinitely many values, each with positive probability, so that reason is wrong.

Decisions for Claude:

- Keep card 07's "why the distinction matters" to one forward sentence (Year 12 handles discrete and continuous variables differently) and leave P(X = x) = 0 to Year 12 s04.
- Use the syllabus definition word for word once ("a variable whose value is the outcome of a random experiment").

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
