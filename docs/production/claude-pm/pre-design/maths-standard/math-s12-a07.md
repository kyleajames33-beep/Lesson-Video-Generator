# math-s12-a07: Where do linear and exponential models stop matching reality?

Maths Standard research pack (Year 12, Algebraic relationships), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Algebraic relationships):

- `ci5c87181e` (Exponential relationships): Explain the limitations of exponential models in practical contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.

Standard 1 (Year 12, Algebraic relationships):

- `cid72ff748` (Graphs of practical situations): Identify the strengths and limitations of linear and exponential models in given practical contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb). Site coverage: partial. Gap: exponential limitations are taught in lesson03; strengths of either model, and the limitations of linear models, are not revisited in Year 12. Year 11 linear limitations (math-s11-l04, `ci1b3cf962`) are the nearest site content.

These are CMS codenames, not published content-point codes. Exact HTML is in the crosswalk and route inputs.

**Course:** Standard 1 and Standard 2. Standard 2 needs exponential limitations only; Standard 1 also needs strengths, and the linear case. Keep the linear part short and clearly labelled so Standard 2 students still benefit (it revises Year 11).

**Entry knowledge:** math-s12-a06 (y = k a^x models and predictions; Standard 2) or math-s12-a05 (exponential tables and graphs; Standard 1). math-s11-l04: `ci4777471a` (interpolation and extrapolation from a linear model) and `ci1b3cf962` (limitations of a linear model). math-s11-l03: `cib2d6c0df` (linear models in context).

**Prior video:** math-s12-a06 (Standard 2 route); math-s12-a05 (Standard 1 route).

**Start:** a06's population model predicted 452 000 people in 20 years. Push the same model to 200 years and the answer is absurd. When does a good model stop being good?

**Stop:** Explain a model's limitations in context: an exponential model assumes the same percentage change every step, grows without any upper limit, and (for decay) never reaches zero; predictions far outside the data (extrapolation) are less reliable than ones inside it; a limitation names the model's assumption and says why that assumption fails in this context. Standard 1 also: a strength of a linear model (simple, constant rate, easy to predict inside the data) and of an exponential model (it captures growth that speeds up, or decay that slows down), and a linear model's limitations (values below zero, rates that change). Graphing a description from words is a08.

**Next:** math-s12-a08 (Standard 1 route); math-s12-a09 (Standard 2 route, a08 is optional for Standard 2).

## 2. Site order, sections and worked examples

Read-only source: [algebraic-relationships/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `f8c86393c1deaadd77ae8585d6c8d8473dad655d6c287e794bdf184991d21b60`. Title: Exponential Relationships. Lesson id maths-std-y12-algrel-l03.

Older page format: no `data-step-id` sections. Cards used here: 02 ("Never reaches zero (in theory)"), 04 Key terms (model limitation), 07 Exponential Models (limitations list and the bacteria example resolved), `we-2` (d), `we-3` (c), 08 Revisit, the "Top 3" item and SA 3 (d) for the shape of a limitation answer.

### Source lesson03, card 07 (limitations)

"Growth models eventually become unrealistic, bacteria can't grow forever (food/space limits exist). Decay models approach zero but never reach it, in practice, quantities do reach zero. The model assumes a constant growth/decay factor, in reality, rates often change over time. Models should only be used within a reasonable domain, extrapolating too far gives nonsense predictions." "Bacteria example resolved: $y = 100 \times 2^x$ ... At $x = 10$: $y = 102{,}400$ ... The model works for a few hours but would predict trillions by day 2, clearly unrealistic."

### Source lesson03, `we-2` (d)

"The model assumes a constant 3% growth rate every year. In reality, population growth depends on birth rates, migration, economic factors, and environmental constraints that can change year to year. The model would become increasingly inaccurate over a long time horizon." Tip: "Limitations must be specific to the context, not just 'it might be wrong.' State what assumption the model makes and why that assumption may fail."

### Source lesson03, `we-3` (c)

"No. $V = 24\,000 \times 0.82^t > 0$ for all finite $t$. As $t \to \infty$, $V \to 0$ but never actually equals zero." "In reality, a car's value does eventually reach zero ... This is a limitation of the exponential decay model".

### Source lesson03, revisit

"After just 20 hours the model gives $100 \times 2^{20} \approx 104{,}857{,}600$, over 100 million. This is why limitations matter."

No site lesson in Year 12 treats linear-model strengths or limitations; the Standard 1 linear part is original teaching (with Year 11's math-s11-l04 as the nearest site content).

Only the parts named in the stop boundary belong to this video. Other tasks on this page are deferred context, not permission to crowd the design.

## 3. Recalculation

- 100 × 2^20 = 104 857 600 (site "≈ 104,857,600", exact). "Trillions by day 2": 100 × 2^48 ≈ 2.8 × 10^16, so the claim holds (an understatement).
- `we-2`: 452 000 at 20 years; the same model at 200 years gives 250 000 × 1.03^200 ≈ 92 million (an original illustration, SymPy).
- `we-3`: 24 000 × 0.82^t > 0 for every t.

Every example above was recalculated with SymPy 1.14.0 (`work/brief-standard-a/recalc.py`). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Writing a general limitation ("it might not be accurate") with no assumption and no context.
- Thinking a model is wrong everywhere because it is wrong far away; most models are useful inside their data.
- Saying a decay model "reaches zero after a while".
- For linear models: forgetting that the line keeps going below zero or above a real maximum.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The site's doubling model and a real-world curve that levels off, drawn together: they agree at first and then split apart, with the "model fits here" region shaded and the "model fails here" region greyed.
- A decay curve hugging the axis next to a "worth $0" marker the model never reaches.
- A "limitation sentence builder": assumption chip ("same % every year") + reason chip ("prices change") + context chip.
- Standard 1: a straight-line model (the transport card's fares adding up trip by trip) carrying on past the daily cap where the real total goes flat, beside a strengths card.

Simulation fit: `runLogistic` with `GrowthGraph` (src/explainer/sims/population.ts and population-views.tsx) computes a curve that grows like an exponential and then levels off at a ceiling; the README says it is course-neutral. It can draw the "real" curve against k a^x for the online-store anchor, with the labels supplied by the lesson (no biology wording). Kit parts: `StudioPlot`, `AxisShadow` or `StudioDomainStrip` (valid region), `FunctionSimulator`, `ParameterSlider`. Kit needs are listed in `../../checks/maths-standard-kit-needs-a.md`.

## 6. Two original candidate practice questions

### Question 1

An online sneaker store had 200 orders in its first week. The owner models the weekly orders N after t weeks with N = 200 × 1.1^t. (a) Use the model to predict the orders in week 8. (b) Use the model to predict the orders in week 156 (three years). (c) Explain why the prediction in (b) is not reliable.

**Worked answer:** (a) 200 × 1.1^8 ≈ 428.7, about 429 orders. (b) 200 × 1.1^156 ≈ 573 million orders a week. (c) The model assumes the orders keep growing by 10% every week forever; in reality there are only so many customers, and stock, staff and delivery limit growth, so the orders would level off. The prediction is far outside the weeks the model was based on.

### Question 2 (Standard 1 style, also useful for Standard 2)

A casual worker is paid $30 an hour, so the model P = 30h gives the pay P for h hours worked in a week. (a) Use the model to find the pay for 20 hours. (b) State one strength of this linear model. (c) Hours over 38 in a week are paid at time-and-a-half. Find the actual pay for 45 hours and explain one limitation of the model.

**Worked answer:** (a) $600. (b) It is simple and exact while the hourly rate stays the same: each extra hour adds $30. (c) Actual pay = 38 × 30 + 7 × 45 = 1140 + 315 = $1,455, but the model gives 30 × 45 = $1,350. The model assumes one rate for every hour; overtime changes the rate, so the model underestimates pay above 38 hours.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (c): "the model might be wrong", crossed, "name the assumption and why it fails"). Answers were checked with SymPy. Overtime rules vary by award; the question states its own rule, so no award is quoted.

## 7. Everyday anchors

- An online sneaker store's weekly orders growing by 10% a week, then levelling off (shopping; carries Question 1).
- A transport card with a daily fare cap: each trip adds the same fare (a linear model) until the cap stops the total rising (travel; a linear limitation for Standard 1).
- Hourly wages with overtime above 38 hours: the linear pay model is a strength until the rate changes (work and wages; carries Question 2).

Varied everyday contexts (shopping, travel, work). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 11 Advanced packs (grepped 18 November 2026: "online store", "fare cap" and "overtime" have no anchor hits; sneakers appear in w26 and w27 only as a price tag). No other Standard pack uses them. The transport card is generic, not a named brand. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. New finding logged there (MS-09): SA 3's mark note for (d) says "[1 per valid limitation, max 1 mark]" while asking for TWO limitations in a 4-mark question whose other parts already take 3 marks.

Decisions for Claude:

- `cid72ff748` is partial on the site. The strengths of both models and the limitations of a linear model are original teaching (Standard 1). Keep them in one clearly labelled segment.
- The site's bacteria and bushfire contexts are science or distressing; reuse the bacteria numbers only if moved to a neutral object (a05's viral video takes the same 100 × 2^x numbers).
- A good limitation answer has two parts: the assumption, and why it fails here. Use that as the memory aid.
- Pace: one exponential example, one linear example and the answer pattern fit 6 to 8 minutes. Not at risk.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
