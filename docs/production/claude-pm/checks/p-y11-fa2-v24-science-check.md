# p-y11-fa2-v24 science-check

Revision 1 source checked 4 November 2026. SHA-256 `bc92767a12bd91f13d79a37c23189c0a47e4968c64d4220a3cd312eefa20d7c0`. Source proposal only; no image QA, practical clearance, voiced preview or learner evidence.

Half-range(1.53-1.45)/2=.04;attempt(1.52-1.40)/2=.06;errorabs(1.47-1.49)/1.49*100=1.3423 percent;1/.658=1.519757. Root decision24 explicitly permits horizontal bars with a grey note that vertical uncertainty is small; keep that decision.

1. **Should fix:** A narrow slit does not keep light the same colour; it changes beam width. Replace that control with the same lamp and colour filter, if a filter is specified, or the same source spectrum.

2. **Should fix:** The attempt best fit1.47 is not the midpoint1.46 of1.40 and1.52. A symmetric plus/minus.06 around1.47 gives1.41 to1.53, which differs from the quoted limiting slopes. Use asymmetric -.07/+.05 or a conservative symmetric.07 and update the conclusion.

Count: 0 blockers, 3 should fix; 6,211 joined narration characters. No design was edited.

The official quote/ID check is resolved in the appendix. The source handoff result is recorded below. Site-findings reconciliation, built frames and requested artwork remain separate checks. Source findings do not clear them.

## Official syllabus and route audit (4 November 2026)

Official CMS codename `ci68dbbc22`; route ID `ci68dbbc22`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c).

> Conduct a laboratory experiment to determine the refractive index of a material and assess the accuracy of the measurement

Fresh official wording matches the route.

Route question: How can a graph determine a material refractive index and its uncertainty?

Question occurs verbatim in design: False. Start: Start with Refractive index investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.. Stop: Complete refractive index investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations.. Next: phys-y11-fa2-v25: How can I explain and apply lenses and vision?.

Site source exists: True; current file hash matches route: True. A hash match verifies source identity, not all reused numbers or scientific accuracy.

The paired source comparison is recorded below; later built-frame review remains required. Asset inventory is in `work/brief163-164-audit/audit.json`; an existing filename is not visual QA.

## Numerical recalculation evidence

Independent Python results are in `work/brief164/calculations.json`, key `fa2-v24`; code: `work/brief164/calculate.py`. These checks cover the listed numerical examples, not unprovided apparatus performance or human playback.

```json
{
  "sinIncidence": [
    0.17364817766693033,
    0.3420201433256687,
    0.49999999999999994,
    0.6427876096865393,
    0.766044443118978,
    0.8660254037844386,
    0.9396926207859083
  ],
  "sinRefraction": [
    0.12186934340514748,
    0.2334453638559054,
    0.3338068592337709,
    0.4383711467890774,
    0.5150380749100542,
    0.5877852522924731,
    0.636078220277764
  ],
  "horizontalBars": [
    0.008661489226072426,
    0.008485420627901363,
    0.008225994434256007,
    0.007843358150756818,
    0.007480100877622353,
    0.0070599155202007435,
    0.0067336093183509305
  ],
  "fit": {
    "slope": 1.4857750777496657,
    "intercept": -0.00408553675423573
  },
  "pairAverage": 1.4703139951630457,
  "limitingSlopes": [
    1.4473035107541714,
    1.530367656830627
  ],
  "halfGap": 0.04153207303822781,
  "vertical30": 0.007557401428618465,
  "horizontal30": 0.008225994434256007,
  "attemptHalfGap": 0.06,
  "attemptBestFit": 1.47,
  "attemptRangeMidpoint": 1.46,
  "inverseSlope": 1.519756838905775
}
```


## Root-decision24 uncertainty assumption

**Should fix:** The horizontal-bar-only simplification assumes the incidence uncertainty is small. If both angles have the stated±0.5° precision, the30° row has vertical sine uncertainty0.00756 and horizontal0.00823, comparable rather than negligible. Keep the root simplification only with a justified more precise controlled incidence angle; otherwise include both uncertainties. The calculation is in `work/brief164/calculations.json`. This is a numerical problem with the stated assumption, not a request for an advanced digression. Replace the existing uncertainty sentence; no added scene.

## Paired handoff source check (4 November 2026)

Compared this design's opening declaration and scene 1 with `phys-y11-fa2-v23.md`'s final non-notes handoff visual. No conflicting board, plate, numerical readout or Next-chip element was found at source level. File hashes and paired excerpts are in `work/opening-pairs.json`. This is a source comparison; rendered-frame identity and motion are not passed.
