# g02 redesign: maths and error check (11 November 2026)

**Changes required before plates or voice.** Independent symbolic calculations are in `work/brief240/g02-calculations.json` and `check-g02.py`. The first-second inflow is e−1 litres and V(t)=e^(t²)+4 satisfies V(0)=5. The boat's net displacement is zero, with signed pieces −4/3 and 4/3 and distance 8/3. The trapezoidal estimate is 35 litres. Attempt 1 gives 25 litres; attempt 2 has signed areas −ln 2 and ln 5, so total area ln 10. The sine example has zero signed integral and area 4.

The narration says that if only readings are given 'there's nothing to integrate'. An underlying rate can still have an integral; what is missing is an explicit formula, so say the integral must be estimated from the samples. The decision aid 'function means indefinite integral' is one valid route, but a starting value plus a definite integral from the initial time also gives the function; do not present the choice as exclusive. 'Area: split where the graph crosses zero' is scoped to area between one graph and the axis; for area between two curves split where their difference changes sign. Speak parentheses in ln(x²+1) to avoid ambiguity.

The lesson is an original synthesis and cites no direct worked-example source. The g01/g02 rate graph and g02/g03 finance handoff must still be checked against the final built frames.


### Repaired source recheck,12November2026

Current source SHA256 `2a2a73b0301c24fb4beba55ad75a7a6fcaa02d10424c75648dd435a7f93eee30`. Result:0 blockers,0 remaining source should-fix findings in the repaired scope. Indefinite-plusknownvalue andinitialvalueplusdefiniteintegral bothallowed. Readingsallowintegralestimation,not claimnothingtointegrate. Area/distance instruction scopedtographandaxis;between-curvesgeneralisation omitted. Spokenln(x2+1)grouping clear. Trapezoids35litres andsignedpieces-ln2/ln5 givingtotalarealn10 independentlyrechecked.

Independent recount:5711characters/14scene strings,noem dashes. Changed narration andauthor repairnotes comparedwith priorfullreview;unchanged calculations/live-sourcechecksretained. Current stringsinwork/brief240/root68-source-audit/g02.json. Nativeartmeasurements/guide deviationsretainedforbuilderfitting underdecision30;root68readytovoice. No paid speechorfinishedtake repeatedbythisreview. Measuredtiming,actualmotionandhumanlisteningremainseparategates.
