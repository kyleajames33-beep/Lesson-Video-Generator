# g02 redesign: maths and error check (11 November 2026)

**Changes required before plates or voice.** Independent symbolic calculations are in `work/brief240/g02-calculations.json` and `check-g02.py`. The first-second inflow is e−1 litres and V(t)=e^(t²)+4 satisfies V(0)=5. The boat's net displacement is zero, with signed pieces −4/3 and 4/3 and distance 8/3. The trapezoidal estimate is 35 litres. Attempt 1 gives 25 litres; attempt 2 has signed areas −ln 2 and ln 5, so total area ln 10. The sine example has zero signed integral and area 4.

The narration says that if only readings are given 'there's nothing to integrate'. An underlying rate can still have an integral; what is missing is an explicit formula, so say the integral must be estimated from the samples. The decision aid 'function means indefinite integral' is one valid route, but a starting value plus a definite integral from the initial time also gives the function; do not present the choice as exclusive. 'Area: split where the graph crosses zero' is scoped to area between one graph and the axis; for area between two curves split where their difference changes sign. Speak parentheses in ln(x²+1) to avoid ambiguity.

The lesson is an original synthesis and cites no direct worked-example source. The g01/g02 rate graph and g02/g03 finance handoff must still be checked against the final built frames.
