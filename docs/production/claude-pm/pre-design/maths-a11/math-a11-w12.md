# math-a11-w12: How do we build a linear model or inequality from a real situation?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci4cd0c8d9` (Constructing and using functions): Construct and use linear functions to model and solve problems in real-world situations, identifying the independent and dependent variables and any restrictions on these variables, and justify conclusions in the context of the problem [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci7fdca2b4` (Constructing and using functions): Use linear inequalities to model and solve problems in real-world situations, and justify conclusions in the context of the problem [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w10: Gradient and intercept meaning. math-a11-w06: Solving linear inequalities.

**Prior video:** math-a11-w11.

**Start:** Recall gradient and intercept of a line and solving an inequality.

**Stop:** Build a linear model from words with named independent and dependent variables, units and restrictions; turn a budget or limit into a linear inequality; justify the answer in context, including rounding direction. Two-line comparisons are w13.

**Next:** math-a11-w13.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson18.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson18.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `cce25d1b6c1b41586c2bd6711af9c183378ef0230354350ff07f89682b88b690`. Title: Modelling with Linear Functions. Lesson id maths-adv-y11-m1-l26.

Data-step ids: `recall-your-gut-answer-first`, `name-it-restrict-it-then`, `what-you-ll-master`, `building-the-model-and-naming`, `model`, `quick-fire-practice`, `revisit-the-plumber`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson18.sa.html, `we-1`

PROBLEM 1 · BUILDING A MODEL A gym charges a $\$60$ joining fee plus $\$25$ per month. Write a model for the total cost, defining your variables and any restrictions. 1 Let $C$ be the total cost in dollars and $m$ the number of months of membership Define with units before calculating. 2 $C = 60 + 25m$ Fixed fee is the constant; the monthly rate is the gradient. 3 Restriction: $m \geq 0$, and $m$ is a whole number if billing is monthly A negative or part month is not meaningful here.

### Source working-with-functions/lesson18.sa.html, `we-3`

PROBLEM 3 · INTERPRETING AN OUT-OF-RANGE ANSWER A model $P = 500 - 20t$ gives the number of fish in a pond after $t$ weeks. Find when the pond is empty, and comment. 1 Set $P = 0$: $500 - 20t = 0$, so $t = 25$ weeks Solve for the required value. 2 The restriction is $0 \leq t \leq 25$, since a negative population is meaningless Beyond 25 weeks the model stops describing reality. 3 The pond is empty after $t = 25$ weeks, and the model should not be used beyond that point State the limitation as part of the answer.

Other worked examples in this lesson (we-2) are deferred source context, not part of this video.

Read-only source: [algebraic-techniques-and-inequalities/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `2f8f0de688559310dc105e02196b32fa642288c9357a6759dbe7617ce6cdbecf`. Title: Modelling with Linear Inequalities. Lesson id maths-adv-y11-m6-l03.

Data-step ids: `recall-your-gut-answer-first`, `keyword-translation-strategy`, `what-you-ll-master`, `translating-keywords-to-inequalities`, `model`, `quick-fire-practice`, `revisit-the-taxi-problem`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source algebraic-techniques-and-inequalities/lesson03.sa.html, `we-1`

PROBLEM 1 · TAXI FARE BUDGET A taxi charges $\$3.50$ plus $\$2.10$ per km. You have $\$20$. Find the maximum distance you can travel. 1 Let $d$ = distance in km. Total cost: $C = 3.50 + 2.10d$. Constraint: $C \leq 20$. So: $3.50 + 2.10d \leq 20$ Define variable. "You have $\$20$" means total cost must be at most $\$20$. 2 Subtract 3.50: $2.10d \leq 16.50$. Divide by 2.10: $d \leq 7.857...$ Standard two-step solve. Dividing by positive 2.10, no flip. 3 Answer: The maximum distance is approximately $7.85$ km (round down to stay within budget). Check: $3.50 + 2.10(7.85) = 3.50 + 16.485 = \$19.99 \leq \$20$ ✓

### Source algebraic-techniques-and-inequalities/lesson03.sa.html, `we-3`

PROBLEM 3 · MAXIMUM ITEMS BEFORE WEIGHT LIMIT A lift can carry at most 480 kg. An empty trolley weighs 30 kg. Each box weighs 15 kg. What is the maximum number of boxes that can fit in one lift load? 1 Let $n$ = number of boxes. Total weight: $30 + 15n$. Constraint: $30 + 15n \leq 480$ "At most 480 kg" → $\leq 480$. 2 Subtract 30: $15n \leq 450$. Divide by 15: $n \leq 30$ Standard two-step. $n$ must be a whole number (you can't have part of a box). 3 Answer: A maximum of 30 boxes can fit. Check: $30 + 15(30) = 30 + 450 = 480 \leq 480$ ✓ Exactly 30 boxes reaches the weight limit exactly. 31 boxes would be $495 > 480$, over limit.

Other worked examples in this lesson (we-2) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- WF18 we-1: C = 60 + 25m, m >= 0 whole.
- WF18 we-3: P = 500 - 20t is 0 at t = 25; model valid for 0 <= t <= 25.
- AT03 we-1: 3.50 + 2.10d <= 20 gives d <= 55/7 = 7.857 km (site says about 7.85 km; its check line 3.50 + 16.485 = 19.985, not 19.99 exactly).
- AT03 we-3: 30 + 15n <= 480 gives n <= 30; 31 boxes weigh 495 kg.
- WF18 we-2 (Plan A versus Plan B) belongs to w13.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14 from work/brief130-python). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Swapping the rate and the fixed amount.
- No units or restrictions on the variables.
- Rounding up a maximum (boxes, kilometres) or down a minimum.
- "At most" written as <, "at least" written as >.
- Using the model outside its domain (negative fish).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A model card: sentence on the left, highlighted numbers fly into C = 60 + 25m with "fixed" and "rate" tags.
- Graph of the model on a StudioPlot with the domain restriction shaded and the out-of-range part greyed.
- Budget line y = 20 on the same plot for the inequality, solution region coloured.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit details: `../../checks/maths-a11-kit-needs.md`.

## 6. Two original candidate practice questions

### Question 1

A ride-share charges a $4 booking fee plus $1.60 per km. You have $30. Write an inequality for the distance d km and find the greatest distance you can afford.

**Worked answer:** 4 + 1.6d <= 30, so 1.6d <= 26 and d <= 16.25. The greatest distance is 16.25 km.

### Question 2

A phone is at 84% battery and drops 6 percentage points per hour of streaming. Write a model for the battery B after t hours, state the restrictions on t, and find when it reaches 0.

**Worked answer:** B = 84 - 6t. B = 0 at t = 14, so 0 <= t <= 14 and 0 <= B <= 84.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Gym membership: joining fee plus monthly rate (site).
- Phone battery draining at a steady rate while streaming.
- A ride-share or taxi budget (site uses a taxi).

Varied everyday contexts (money, phones, sport, travel, food). Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only. Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
