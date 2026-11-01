# math-a12-d19: How do proportional rates produce exponential growth and decay?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cieafd3e1d`: Describe and examine the graphs of practical situations where the rate of change of a quantity is proportional to the quantity [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci11b2d741`: Explain that if the rate of change of a positive quantity Q over time t is proportional to the size of Q , then this may be represented by dQ dt = kQ where k is the constant of proportionality, and if k > 0 the quantity Q is increasing at a rate proportional to the value of Q at time t , while if k < 0 the quantity Q is decreasing at a rate proportional to the value of Q at time t [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `cie8add073`: Verify by substitution that the function Q = A e kt satisfies the relationship dQ dt = kQ with A being the initial value of Q [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci08700030`: Recognise that the equation dQ dt = kQ where Q > 0 , and its solution Q = A e kt represent exponential growth when k > 0 and exponential decay when k < 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci004333dd`: Graph the function Q = A e kt , where k > 0 and k < 0 and A > 0 and A < 0 , with and without graphing applications, and identify any asymptotes [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci925fb658`: Model and solve growth and decay problems in various contexts using dQ dt = kQ , Q = A e kt and the graph of Q = A e kt for t ≥ 0 , and justify conclusions in the context of the problem [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci00fa8fac`, `cie3d91a6e`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-d18.

**Start:** Recall exp derivatives,logs and positive proportional-rate models.

**Stop:** Verify Q=Aexp(kt),fit k,interpret units and signed-A graph extensions.

**Next:** math-a12-i01.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\applications-of-calculus\lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/applications-of-calculus/lesson02.sa.html), SHA256 `b20893ca727b6da6508bf3e2a633c46ed2baa8b3c2957101c823d00323bfc101`.

Data-step IDs: `orient-growth-and-decay`, `derive-exponential-model`, `work-growth-decay-examples`, `avoid-growth-decay-traps`, `drill-growth-decay-problems`, `consolidate-growth-and-decay`, `practise-growth-and-decay`, `finish-growth-and-decay`.

### Source applications-of-calculus/lesson02.sa.html, `we-1`

PROBLEM 1 · COMPOUND INTEREST $\$5000$ is invested at 6% per annum compounded continuously. Find the value after 8 years. 1 $\dfrac{dA}{dt} = 0.06A,\quad A(0) = 5000$ Write the DE: rate = 6% of current amount. 2 $A(t) = 5000e^{0.06t}$ Solution: $N_0 = 5000$, $k = 0.06$. 3 $A(8) = 5000e^{0.48} \approx \$8080.37$ Substitute $t = 8$. Evaluate $e^{0.48}$. 1 of 3 Reveal next step →

### Source applications-of-calculus/lesson02.sa.html, `we-2`

PROBLEM 2 · RADIOACTIVE DECAY A substance has half-life 12 years. Find the decay constant and the amount remaining from 200 g after 30 years. 1 $t_{1/2} = \dfrac{\ln 2}{|k|} \implies k = -\dfrac{\ln 2}{12} \approx -0.0578$ Rearrange half-life formula for $k$. Negative because decay. 2 $N(30) = 200e^{-0.0578 \times 30} = 200e^{-1.733}$ Substitute $N_0 = 200$, $t = 30$. 3 $N(30) \approx 35.4$ g Evaluate. Check: 30 years $\approx$ 2.5 half-lives, so roughly $200 \times (\frac{1}{2})^{2.5} \approx 35$ g. ✓ 1 of 3 Reveal next step →

### Source applications-of-calculus/lesson02.sa.html, `we-3`

PROBLEM 3 · FIND k FROM DATA A town's population was 10,000 in 2010 and 12,000 in 2015. Assuming exponential growth, when will it reach 20,000? 1 $P(t) = 10000e^{kt}$. At $t = 5$: $12000 = 10000e^{5k}$ Let $t = 0$ be 2010. Use the second data point. 2 $e^{5k} = 1.2 \implies k = \dfrac{\ln 1.2}{5} \approx 0.0365$ Divide, then take $\ln$ of both sides. 3 $20000 = 10000e^{0.0365t} \implies t = \dfrac{\ln 2}{0.0365} \approx 19.0$ years Solve for $t$: $e^{kt} = 2$, so $t = \frac{\ln 2}{k}$. Answer: approximately 2029. 1 of 3 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

5000 at continuous6% for8years:5000exp(.48)=8080.372010964. Half-life12years from200g at30years:k=-ln2/12,amount200·2^(-2.5)=35.3553390593g. Population10000 in2010,12000 in2015:k=ln1.2/5;doubling time5ln2/ln1.2=19.0089200846years,about2029. Keep exact k. SignedA also satisfies Q′=kQ,but positive-quantity interpretation needsA>0.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

Decay sign statements require positive quantity;rounded k is not exact.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: FunctionGraph, NumericDial, ReadoutPanel. Signed initial-value sweeps and parameter-fitting/units panels. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

A population starts at800 and doubles in10years. Find k and P(15) in a proportional-rate model.

**Worked answer:** k=ln2/10;P=800exp(kt);P(15)=1600sqrt2≈2262.742.

### Question 2

A100g sample has half-life5years. Find amount and instantaneous rate after10years.

**Worked answer:** Q=100exp(-ln2·t/5);Q(10)=25g,Q′(10)=-5ln2 g/year.

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
