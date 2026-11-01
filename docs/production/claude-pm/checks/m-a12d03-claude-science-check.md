# m-a12d03 maths check: Revision 1

Independent reviewer: Codex, 1 November 2026. Input SHA256 `9c385ae93b810deabead0c94e4a49f249429f72a5afb1344c48f14e938f0e312`. Read all narration, Visual paragraphs, attempts, notes, calculations and metadata. Written review only.

## Findings

1. **Should fix: direction of the general log shift.** Scene 10's chip “ln(kx), k > 0: slides up” and key note 4 “a slide up” fail for 0 < k < 1. ln(kx) = ln k+ln x; the shift is ln k, negative below 1 and zero at 1. Use the learning report's replacements, including the final spoken summary. The k = 3 worked example is correct. Source: exact log product identity and [OpenStax exponential/logarithmic derivatives](https://openstax.org/books/calculus-volume-1/pages/3-9-derivatives-of-exponential-and-logarithmic-functions).
2. **Should fix: scope of the scene 8 drawing restriction.** Its e^x ghost has points with x <= 0 and its reference line/chords can cross that region. Scope the prohibition to ln x and its derivative as in learning finding 2. This preserves the mathematical domain without deleting the inverse-graph explanation. Source: e^x is defined for all real x, ln x for x > 0, and reflection maps (t, e^t) to (e^t, t).

Count: 0 blockers, 2 should fix, 0 optional. These are the same 2 findings as the learning report.

## Recalculation and CAS

SymPy 1.14 from the existing work/brief130-python directory is available in this session. With x declared positive, symbolic differentiation returns: ln x → 1/x; ln(3x) → 1/x; 3 ln x → 3/x; 2 ln x-3x→ 2/x-3; ln(x^3) → 3/x. No installation or paid service was used.

Independent numerical calculations: ln(1/2) = -0.69314718056, ln 1.5 = 0.405465108108, ln 1.1 = 0.095310179804, ln 1.01 = 0.009950330853, ln 2 = 0.69314718056, ln 3 = 1.098612288668, ln 4 = 1.386294361120, ln 6 = 1.791759469228, 3 ln 2 = 2.079441541680, 1/ln 2 = 1.442695040889, 1/e = 0.367879441171. Secants ln(1+h)/h are 0.810930216216, 0.953101798043, 0.995033085317 for h = .5, .1, .01; all displayed roundings are correct.

The derivatives at x = .25, .5, 1, 2, 4, 4.8 are 4, 2, 1, .5, .25, .208333333333, and each product with x is 1. At exponential point (ln c, c), slope = c and reflected point (c, ln c) has slope 1/c for c = .5, 1, 2, 4. The tangent triangle vertices (ln 2, 2), (ln 2+1, 2), (ln 2+1, 4) reflect to (2, ln 2), (2, ln 2+1), (4, ln 2+1). Its endpoint difference is (run 2, rise 1), and its hypotenuse lies on y = (x-2)/2+ln 2. The reversed order of the reflected legs is intentional and mathematically correct.

The proof uses the exact identity e^(ln x) = x on x > 0, the chain rule with the unknown inner derivative, substitution e^(ln x) = x, then division by nonzero x. It does not assume the result it is proving. The memory aid refers to the matching points of the inverse pair, not fixed x or an axis reflection; neither exponential nor log tangents here has zero slope.

For ln(3x), the point at x = 2 moves from height ln 2 to ln 6 while slope remains .5; the tangent is y = (x-2)/2+ln 6. For 3 ln x, slope at 2 is 1.5 and its tangent passes (4, 5.079441541680), inside top 6. Attempt 1 gives 2/2-3 = -2; crossed 1/2-3 = -2.5. Attempt 2 gives 3/x and x = .5 from 3/x = 6, in the domain; the crossed 1/x^3 would wrongly yield 6^(-1/3) = .550321208149. Handoff log₂ x = ln x/ln 2 passes (1, 0), (2, 1), (4, 2); its vertical factor 1.442695 is correctly withheld.

Except for the scene 8 instruction conflict, all specified log points, secant stops, dots and final log curves stay in x > 0. The exponential and intermediate reflection carrier are distinct objects and may have nonpositive x; they must not be clipped as if already ln x. At intermediate carrier progress the curve is a parametric image, not a graph claimed to be ln x. No negative argument to ln is required.

## Syllabus and route

Fresh official __NEXT_DATA__ retrieved 1 November 2026. cib961593d sourceHtml byte-matches the route, and its prose and MathML are faithfully transcribed in the design: chain rule on e^(ln x) = x, derivative 1/x, x > 0. [Official Year 12 page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

The exact Year 11 reflection point is **ci9eb0125c**: “Use graphing applications to identify the graphs of y = a^x and y = log_a x as reflections of each other in the line y = x, in cases where a > 1 and 0 < a < 1” (linear mathematical transcription). [Official Year 11 page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Added its exact expanded sourceHtml, official text, sourceUrl and focusArea to d03's entryKnowledge array. A structural comparison confirms every other route value is unchanged. The codename is a CMS identifier; the official code field is not a published outcome code. Fresh source records are retained in work/brief132-official.json. No outgoing 2017 content or stale course identity used.

Narration counts per scene: 469, 457, 291, 452, 463, 482, 768, 342, 527, 499, 261, 160, 374, 165, 324, 238, 75. Sum 6347; 6363 with 16 inter-scene joining spaces. At 13.3 characters/s plus 93 seconds of holds, about 571.4 seconds. This is about 570, not a measured audio pass; the one-second rounding difference is not a learning error. Use existing reserve cuts if voiced timing exceeds the cap. U+2014 count 0.

## Site findings

Confirmed the actual read-only lesson03 HTML. Added the missing log-law conditions, the inadequate slow-growth trap rationale, the imprecise hook and the unsupported generic marking claim. The implicit proof is correct and is recorded as a teaching/syllabus note, not a false mathematical result. The stale course identity is already item 3, not duplicated. No site HTML or lesson design edited.

## Resolution
