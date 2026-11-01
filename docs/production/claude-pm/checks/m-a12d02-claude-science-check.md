# m-a12d02 maths check: Revision 1

Independent reviewer: Codex, 1 November 2026. Input SHA256 `54d71f5e194234224c9848d31401130c7085f2e24854203000cd49f45f143066`. Checked every narration line, Visual paragraph, proof, attempts, notes, calculations and metadata. Written mathematics review only, not playback or listening approval.

## Findings

1. **Should fix: rounded decimals are written as exact identities in scene 6.** The rows “2 = e^(0.693)”, “2ˣ = (e^(0.693))ˣ” and “= e^(0.693x)” are false as equalities. e^0.693 is about 1.99970566. Replace the rows with “2 = e^(ln 2)”, “2ˣ = (e^(ln 2))ˣ”, “= e^(x ln 2)”. Put “ln 2 ≈ 0.693” beside the highlighted coefficient, not in place of it. Replace the spoken “So two equals e to the point six nine three” with “So two is approximately e to the point six nine three”, and the next sentence with “Exactly, two to the x is e raised to the power x times the natural log of two.” The latter replaces a longer sentence, so the repair saves time. Use exact 1/ln 2 in the transform, exact (ln 2,2) for the point, and 1.44 only as the rounded dial/label. Metadata's “the ratio is always 0.693” should be “the ratio is ln 2, about 0.693”. The approximate measured readouts elsewhere are appropriate. Source: the exact inverse-log identity and chain rule in [OpenStax](https://openstax.org/books/calculus-volume-1/pages/3-9-derivatives-of-exponential-and-logarithmic-functions); direct substitution above.
2. **Should fix: the all-base memory claim omits a=1.** Scene 10 “Every exponential is e to the x in disguise, scaled sideways” and the corresponding metadata claim include the constant 1^x, which no finite invertible horizontal scale of e^x produces. Use learning finding 2's replacement and qualify metadata “for a ≠ 1”; keep the derivative rule valid for every a>0. Source: a^x=e^(x ln a); 1/ln a is undefined at a=1, while the derivative formula gives zero correctly. [Official syllabus](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

Count: 0 blockers, 2 should fix, 0 optional. Both overlap the learning report. The attempt-2 sign finding is a learning issue, not an incorrect answer.

## Independent recalculation

The chain rule gives (a^x)′=(ln a)a^x by a^x=e^(x ln a), u=x ln a, u′=ln a and (e^u)′ with respect to u equal to e^u. The design's seven proof rows are complete and retain the inner expression. The condition a>0 permits all real x and a real ln a. a=1 gives zero; 0<a<1 gives a negative derivative with a positive function. A negative real base cannot be raised to every real power. The memory “a^x leaves the y-axis with slope ln a” is correct for every a>0, including one. The copying rule is correctly limited to power x.

Python independently recalculated: ln 2=0.6931471805599453, ln 3=1.0986122886681098, ln 4=1.3862943611198906, ln 5=1.6094379124341003, ln 10=2.302585092994046, ln(1/2)=-0.6931471805599453. Secants (2^h-1)/h for h=0.5,0.1,0.01,0.001 are 0.8284271247, 0.7177346254, 0.6955550057, 0.6933874626. All stated rounding passes.

For 2^x, slopes at x=0,1,2,3 are 0.693147,1.386294,2.772589,5.545177. For 3^x at zero and one: 1.098612 and 3.295837. For 4^x at one: 5.545177. For (1/2)^x at one and two: -0.346574 and -0.173287. Ratios remain ln a. Horizontal factors are 1/ln 2=1.4426950409 and 1/ln 3=0.9102392266; the exact transformation carries (ln 2,2) to (1,2), preserves rise 2 and changes slope 2 to 2 ln 2. The half-base curve is the y-axis reflection of 2^x, with opposite slopes at mirrored points.

Worked answer 8 ln 2=5.5451774445 rounds to 5.55. Its tangent y=8 ln 2(x-3)+8 gives 13.545177 at x=4 and 10.772589 at x=3.5. Use the author's half-run alternative to fit the stated window. Attempt 1 gives ln 5≈1.61; its crossed power-rule answer evaluates to zero. Attempt 2 gives -(ln 2)/4=-0.1732867951; its wrong-sign distractor is positive. The deferred derivative of 3^(2x) is 2 ln 3·3^(2x), value 2.197225 at zero. Site practice Q3 x=(-1-2/ln 3)/2=-1.4102392266. No numeric answer error found. SymPy is not installed; symbolic results are hand-derived and independently checked numerically, not claimed as CAS output.

## Syllabus, copy and site checks

Freshly fetched the [official 2024 Year 12 page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480) and expanded its __NEXT_DATA__ focusArea linkedItems with the existing generate_ledgers helpers. ci31a76d4a's sourceHtml is byte-for-byte identical to the prior official ledger. The design and metadata preserve every prose word and correctly transcribe the MathML, including a>0 without a≠1. The ID is a CMS codename, not an invented published outcome code. No outgoing 2017 requirement or stale Year 11/Module 4 course identity is taught.

Narration counts: 16 scenes, per-scene characters 453,353,559,459,451,643,627,560,511,439,125,347,128,395,223,75, total 6348 (6363 if fifteen joining spaces are counted). At 13.3 characters/s plus the stated 93 seconds of holds this is about 570 to 571 seconds, an estimate that needs measured speech. Repairs above are shorter; no added time is required. No U+2014 found. Attempt wording is original phrasing around standard calculations from the pre-design pack; no copied NESA question was found.

Read-only site lesson02 SHA256 d82bf5eca440e61298bc65c1b702bd1365a5c4e3de70d510c9b67d77ca28edfa matches the design. Confirmed its unnecessary a≠1 restriction, circular explanation of e, and unsupported frequency/full-marks claims; added them to site-corrections-maths-a12.md. The proposed replacement must not promise a universal marking penalty either: credit depends on the question's marking criteria. The “drops ln a out front” phrase is correct mathematics with its immediate explanation, so it is logged only as a teaching suggestion. Existing stale course labels are already item 2 and were not duplicated.

## Resolution


## Resolution (root, 1 November 2026)

All findings applied as given (the scene 6 narration uses the reviewer's exact wording). Template finding 1 (keep exact identities and put rounded values only in approximate readouts) and 2 (keep exceptional cases in memory summaries) apply to d03 to d10.
