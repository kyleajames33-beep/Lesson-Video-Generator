# Maths i03 Revision 3: independent maths check

Codex, 9 November 2026. Source SHA256 `40231d5b5fcf5869c563b70929fb04181f7b8d88db13194eb06717f403402536`.

Result: 0 blockers, 0 should fix, 0 optional.

CAS and numerical evidence: work/brief238/check-i03.py and i03-calculations.json. All ten primitive checks have zero derivative residual. The symbolic linear-exponent and general-base checks agree, with a≠0 for the exponent rate and a>0,a≠1 for the base. The origin-normalised base primitive tends to x as a→1; all listed log, exponential and slider values agree. The tangent triangle's run1/3,rise1 at the origin has gradient3. Matched2x and half-factor integrals correctly reverse the chain rule.

The phone primitive is-60exp(-t/2)+C. B0=40 gives C100; its derivative is30exp(-t/2). Rate/(100-B)=1/2 identically. At0,1,2,3,4,5,6,8hours the listed rates and battery values agree, ending98.901% with rate0.54947 points/hour. Times to90/95% are2ln6=3.58352 and2ln12=4.96981hours. The level remains below100 for finite nonnegative time and approaches it. No discrete charging or real-device forecast is inferred.

The applied primitive exp(-t/2)+C with initial2 gives C1,value1.049787at6 and limit1. Expanding(exp x+1)² gives exp2x+2exp x+1, with primitive(1/2)exp2x+2exp x+x+C. Attempt1 gives2exp(2x-1)+C; the crossed answer differentiates to twice the integrand. Attempt2 gives3ˣ/ln3-(1/2)exp(-2x)+C. All signs, conditions and rounding agree.

Live source verified 9 November 2026: https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson06.sa . Revealed all three steps of we-1,we-2,we-3. The first two mixed integrals have the stated exponential components; the applied rate and initial condition give exp(-t/2)+1 exactly. Full mixed formulas are saved in i03-calculations.json for i04's source comparison, so that live read need not be repeated. No answers submitted; reveals automatically award progress.

6311characters/18scenes including4a/8a, cue order and no em dashes checked. Estimated555s remains unmeasured. Recorded alignment,cue timestamps,captions and45s notes require later validation. Machine and human listening and exact voiced review remain pending. No narration, design, scene code or measured file edits.
