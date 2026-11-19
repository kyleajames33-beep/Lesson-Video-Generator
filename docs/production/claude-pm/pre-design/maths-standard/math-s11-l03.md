# math-s11-l03: How does a linear model describe a real situation, and what do its gradient and intercept mean?

Maths Standard research pack (Year 11, Linear relationships), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Linear relationships (Linear modelling):

- `cib2d6c0df`: Model linear relationships and interpret the features of those relationships in a variety of contexts, noting that the y-intercept is the vertical intercept and the gradient is the rate of change [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: covered.

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-l02: `ciafd3b572` (writing y = mx + c). math-s11-f02: `ci2acef85d` (solving a linear equation in context).

**Prior video:** math-s11-l02.

**Start:** l02 wrote equations for lines. Real situations come in words: the site's bike hire, "$12 before you ride a single metre, then $5 per hour".

**Stop:** Building a linear model from words or a table: the starting value is the vertical intercept (the amount when the input is zero) and the rate is the gradient (the change for each one unit of input); define both variables with units; a negative gradient as a steady fall (V = 200 − 15h); interpreting both features in a sentence with units; using the model to find an output (substitute) or an input (solve, f02); changing one feature (a price rise changes only the gradient). When predictions can be trusted is l04.

**Next:** math-s11-l04.

## 2. Site order, sections and worked examples

Read-only source 1: [linear-relationships/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/linear-relationships/lesson03.sa.html), SHA256 `c8d6872ef3873497730932a9296aa733ae5a3439e9f27e20984f9e21d5d2c8e0`. Sections: `recall-your-gut-answer`, `the-intercept-is-the`, `worked-examples-middot-3`, `common-errors-middot-3`, `quick-fire-practice-middot`, `revisit-your-thinking`, `practice-set`, `review-and-complete`.

Card 05: "the intercept is not the final total. It is the starting output. The gradient drives the total up from that starting point."
`we-1`: bike hire, $C = 12 + 5h$; "for $h = 4$, $C = 12 + 5(4) = 32$".
`we-2`: "$S = 75 + 20w$ ... Interpret $m$ and $b$, then find savings after 6 weeks" ($195).
Trap 02: "Saying the intercept is 'added each time'". Revisit: "If the hourly rate rose to $\$6$, only the gradient changes: $C = 12 + 6h$." Drill: taxi $C = 8 + 2.50k$; $P = 40 + 18w$ (40 = starting pay, 18 = weekly rate). Q1 $C = 15 + 4z$; Q2 $S = 120 + 25w$, $w = 8$ gives $320.

Read-only source 2: [linear-relationships/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/linear-relationships/lesson02.sa.html), SHA256 `d7934d3324181f8d09e2ba1f88528443f90d479061b79e7c40f383aabbd11abb`: card 06's table (−4 L/min, a draining tank; +$25/week, savings).

Read-only source 3: [formulas-and-equations/lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson05.sa.html), SHA256 `548a35b67aa1760a54719d8f8996c3c1b8b06f1b84aeae185178f34b0642ba18`. Building Formulas from Patterns and Tables. Card 02: "output = starting value + rate × input"; "Starting value: The output when input = 0 ... Not always the first listed value in the table." `we-1` $C = 10 + 3k$ (19 at k = 3); `we-2` "Mia starts with $\$40$ and saves $\$15$ each week" ($S = 40 + 15w$); `we-3` $P = 6n + 2$ for 8, 14, 20, 26; drill "A pool starts with 200 litres and loses 15 litres per hour" ($V = 200 - 15h$); Q1 $C = 25 + 2p$ (18 pages, $61); Q2 $T = 4 + 5n$. Its "Beyond the syllabus" notice says pattern-building "will not be examined" in Formulas and equations; it is in this Linear relationships point.

## 3. Recalculation

- Lesson03: 32, 195, 320. Lesson05: 19; 8, 14, 20, 26; T = 3 + 4n gives 19 at n = 4; V = 200 − 15h empties at 40/3 ≈ 13.3 h; 61; 24. Lesson08's table (0, 30) to (3, 66) gives C = 30 + 12h.
- New: coffee pods P = 120 − 6d run out at d = 20. Practice: 55 + 48(5) = 295; 2000 − 125d = 500 gives d = 12.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`).

## 4. Misconceptions and HSC-style traps

- Treating the intercept as added each time.
- Swapping the rate and the starting value.
- Reading a falling quantity with a positive gradient ("loses 15" written +15).
- Interpreting without units or without the word "per".
- Taking the first table value as the intercept when the table starts at 1.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A words-to-model card: "$12 before riding" flies to the c slot (violet), "$5 per hour" to the m slot (amber); the graph draws with the intercept and a step triangle in the same colours.
- A "what happens at zero?" probe: the input dial set to 0 shows the starting value.
- A price-rise slider: only the gradient swings; the intercept stays pinned.
- A falling model (pods running down) with its gradient chip "−6 pods a day".

Kit: `ModelCard` and `ModelSlot` for words into slots; `ParameterSlider` and `FunctionSimulator` in linear mode for the price rise; `StudioPlot`; `AnswerFrame` sentence. Advanced reuse (visual parts only): math-a11-w12.

## 6. Two original candidate practice questions

### Question 1

A ski hire shop charges $55 plus $48 per day for skis and boots. (a) Write a linear model for the cost C after d days. (b) Interpret the gradient and the vertical intercept. (c) Find the cost for 5 days.

**Worked answer:** (a) C = 55 + 48d. (b) The gradient, 48, is the cost per day ($48 a day); the intercept, 55, is the fixed amount paid before any days ($55). (c) 55 + 48 × 5 = $295.

### Question 2

A water tank holds 2000 L. A garden uses 125 L a day and there is no rain. (a) Write a model for the volume V after d days. (b) Interpret the gradient. (c) After how many days are 500 L left?

**Worked answer:** (a) V = 2000 − 125d. (b) −125: the volume falls by 125 L each day. (c) 2000 − 125d = 500, so d = 12 days.

Only the question goes on the card. "Pause here to answer." then a 10-second countdown. Feedback stays brief (Question 1: crossed "C = 48 + 55d"). Answers were checked with SymPy.

## 7. Everyday anchors

- A box of coffee pods running down by 6 a day (home; a negative gradient: P = 120 − 6d).
- Ski hire: a fixed fee plus a daily rate (travel; carries Question 1).
- Music lessons: an enrolment fee plus a price per lesson over a term (hobbies).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "coffee pod", "ski hire" and "music lessons" no hits; extra phone data was avoided because math-s12-r11 uses it). Objects only, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. MS-82 (y = mx + b) applies.

Decisions for Claude:

- **The syllabus phrase** "the y-intercept is the vertical intercept and the gradient is the rate of change" should be said almost word for word, because Year 12 recalls it.
- **Year 12 needs:** math-s12-a03 (two facts become two equations), a04a (fixed cost and cost per item), i01 (simple interest as a line from a starting value) and i09 (a negative gradient as a steady fall) all recall this video. Include one falling model.
- **Overlap:** l01 reads m and c; l02 writes and draws; this video interprets in context. Keep l01's mechanics to a phrase.
- Pace: 6 to 8 minutes. Not at risk.

Claude selects the exact examples and final length. Human listening and exact playback remain later gates.
