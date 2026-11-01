# m-a12d01 maths check: Revision 1

Independent reviewer: Codex, 1 November 2026. Input SHA256 `a788b5493f752a072ba7714afaf68a37a7b983fe43a98cb5bb3a3f0dbd5a07c5`. Read all narration, Visual paragraphs, practice, notes, author calculations and metadata. This is a written maths review, not visual or listening approval.

## Findings

| # | Severity | Exact text and location | Correction and source |
| --- | --- | --- | --- |
| 1 | should fix | Scene 10: “b just starts the playback at a different point, so no rate changes”; main question: “its derivative stays the same”; scene 15: “sliding changes nothing”. | A translated derivative is translated too: e^(x+1) has derivative e^(x+1), not e^x. Tangent slope is preserved at corresponding moved points, not at fixed x. Use learning finding 1's replacements. [OpenStax, exponential differentiation](https://openstax.org/books/calculus-volume-1/pages/3-9-derivatives-of-exponential-and-logarithmic-functions). |
| 2 | should fix | Key note 2: “x → ax squashes the curve sideways (mirrors it too if a < 0)”. | Replace this clause with “For a ≠ 0, the horizontal scale is 1/|a|, with a mirror if a < 0; slopes multiply by a.” A value 0<|a|<1 stretches horizontally, and a=0 gives a constant. Keep “For y = k e^(ax+b), gradient = a × height”, which is correctly scoped and also holds for a=0. Direct coordinate mapping (x,y) → (x/a,y); [OpenStax](https://openstax.org/books/calculus-volume-1/pages/3-9-derivatives-of-exponential-and-logarithmic-functions). |
| 3 | should fix | Key note 5, after the general k-family: “a negative a makes the gradient negative, not the curve”. | Replace with “For y = e^(ax+b), negative a makes the gradient negative while y stays positive.” In the general family the slope sign is the sign of ka: k=-1,a=-2 gives y=-e^(-2x) and y′=2e^(-2x)>0. The spoken scenes concern k=1 or 3 and are correct. Same derivative source as above. |

Count: 0 blockers, 3 should fix, 0 optional. Finding 1 is also learning finding 1.

## Recalculation

The symbolic chain rule gives d/dx[e^(ax+b)] = a e^(ax+b) and d/dx[k e^(ax+b)] = ka e^(ax+b). Independently derived every worked expression. Numeric checks with Python: e=2.718281828459045; 2e=5.43656365691809; 3e=8.154845485377136; e/2=1.3591409142295225. The design's rounding is correct.

At x=1/s, e^(sx)=e and slope=se, including s=-2 at x=-1/2. The original tangent is y=ex; its run 1 maps to 1/s and its rise stays e. For s=2 the tangent is 2e(x-1/2)+e and passes (1,2e). Thus “doubles every slope” is true at corresponding points, exactly as the animation describes. At a fixed x, the ratio to the old slope is not generally 2. The mirror from e^(2x) to e^(-2x) maps (1/2,e) to (-1/2,e), changes slope 2e to -2e, and keeps heights positive.

At x=0 the slid height and slope are e>2, while the squashed height is 1 and slope 2. For 3e^x at zero both are 3 and the tangent is 3x+3. Example 1: derivative 3e^(3x), slope 3 at zero, y=8 at x=ln(8)/3=0.69314718056. Example 2: derivative 10e^(2x+6); at -3, height 5 and slope 10; tangent 10(x+3)+5 passes (-2.5,10); y=12 at -2.56226563132305. Attempt 1: 8e^(2x-1), value 8 at 1/2; dropping the inner factor gives 4. Attempt 2: -6e^(-2x), value -6 at zero, strictly negative for all real x, so the curve decreases and stays positive. Scene 3 marks range from 2e^-2=0.2706705665 to 2e=5.4365636569, inside the stated window.

The copying mnemonic correctly retains the entire linear exponential. The playback analogy works for a constant speed a; its “no rate changes” wording needs finding 1. Key note 2 already limits gradient=a×height to the correct family. No claim about an added vertical constant is needed. A local CAS was unavailable (SymPy is not installed); the attempted temporary installation did not complete and was stopped. Symbolic results above are independently derived, with numerical substitution checks, not represented as CAS output.

## Syllabus and sources

Fetched the official [2024 Year 12 differential-calculus page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480) on 1 November 2026. Read its __NEXT_DATA__ focusArea linkedItems and expanded glossary components with the existing generate_ledgers helpers. For ci8306d30a and ci4380403a, the fresh sourceHtml is byte-for-byte identical to the route's sourceHtml. The design preserves all prose word for word and transcribes MathML correctly as f(x)=ke^(ax) and d/dx(e^(ax+b))=ae^(ax+b), including a ≠ 0. These are CMS codenames, not published outcome codes. The Year 11 recall IDs agree with route entry knowledge. No outgoing 2017 teaching content or stale Year 11 / Module 4 course label is used as the new lesson's course identity.

Site findings: the automatic factorisation-mark claim is already logged (item 9), so not duplicated. Added the cooling qualification and a separate notation/teaching note to site-corrections-maths-a12.md after checking the actual HTML. Using k as a horizontal constant is mathematically valid and is not logged as a false formula.

## Resolution

## Resolution (root, 1 November 2026)

All findings applied as given. See the design status lines: math-a12-d01 Revision 2, chem-m5-g02 Revision 7, bio-m8-p01 Revision 3.
