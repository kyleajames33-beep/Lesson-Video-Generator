# math-a12-i04: Why does a reciprocal primitive need an absolute-value log?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cif7109f2d`: Derive and use the formula ∫ 1 x d x = ln ⁡ | x | + C where x ≠ 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cib9eebb70`: Establish and use the formula ∫ 1 ax + b dx = 1 a ln ⁡ ax + b + C , where a and b are constants and a ≠ 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci060b93b3`: Establish and use ∫ u ' u dx = ln ⁡ u + C , where u is a function of x , or ∫ f ' x f x d x = ln ⁡ | f ( x ) | + C , on a domain where f x ≠ 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci1d192d62`, `cif6a6cb7d`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-i03.

**Start:** Recall i03 exponential primitives and d03 log derivative.

**Stop:** Derive ln|x| on nonzero components;extend linear-inner and matched f′/f;finish source mixed tasks.

**Next:** math-a12-i05.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson06.sa.html), SHA256 `a649e47a640c4f6d67aa3395373d55685a45446f60ff04fb869b1e83d85f8d25`.

Data-step IDs: `orient-to-special-integrals`, `build-special-integral-language`, `integrate-exponentials`, `integrate-logs-and-general-bases`, `avoid-special-integral-traps`, `practise-and-reflect`, `complete-mixed-practice`, `review-and-complete`.

### Source integral-calculus/lesson06.sa.html, `we-1`

PROBLEM 1 · EXPONENTIAL INTEGRAL Find $\int \left(2e^{3x} + \dfrac{4}{x}\right)\,dx$. 1 $\int 2e^{3x}\,dx = 2 \cdot \dfrac{1}{3}e^{3x} = \dfrac{2}{3}e^{3x}$ Apply $\int e^{kx}\,dx = \frac{1}{k}e^{kx}$ with $k = 3$; scalar 2 carries through. 2 $\int \dfrac{4}{x}\,dx = 4\ln|x|$ Apply $\int \frac{1}{x}\,dx = \ln|x|$; scalar 4 carries through. 3 $\dfrac{2}{3}e^{3x} + 4\ln|x| + C$ Combine both results and add a single constant of integration. 1 of 3 Reveal next step →

### Source integral-calculus/lesson06.sa.html, `we-2`

PROBLEM 2 · MIXED INTEGRAL Find $\int \left(e^{-x} + \dfrac{3}{x} + x^2\right)\,dx$. 1 $\int e^{-x}\,dx = \dfrac{1}{-1}e^{-x} = -e^{-x}$ $k = -1$, so divide by $-1$. 2 $\int \dfrac{3}{x}\,dx = 3\ln|x|$; $\quad\int x^2\,dx = \dfrac{x^3}{3}$ Reciprocal rule and power rule ($n=2$). 3 $-e^{-x} + 3\ln|x| + \dfrac{x^3}{3} + C$ Combine. Only one $+C$ needed for the whole expression. 1 of 3 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

we-1:2exp3x/3+4ln|x|+C;we-2:-exp(-x)+3ln|x|+x cubed/3+C,bothx!=0. Fornegative x,d/dx ln(-x)=1/x as onpositive x,d/dx ln x=1/x. No interval crosses a zero of the inside;constants on disconnected pieces may differ.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

Absolute values do not fill a pole;ln|f| derivative needsf!=0,notf>0.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: FunctionGraph, DomainStrip, AlgebraFraction. Absolute-value log labels and disconnected primitive branches. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

Find integral2/(2x-3) dx,and state validity.

**Worked answer:** ln|2x-3|+C,on intervals wholly either side ofx=3/2.

### Question 2

Find integral2x/(x squared+4) dx.

**Worked answer:** ln(x squared+4)+C,all realx;inside always positive.

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
