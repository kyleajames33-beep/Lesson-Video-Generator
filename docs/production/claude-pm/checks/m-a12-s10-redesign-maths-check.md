# s10 redesign: maths check (11 November 2026)

**Review finding: clarify spoken grouping.** SciPy results are in `work/brief240/s10-calculations.json` and `check-s10.py`. Within one, two and three standard deviations the probabilities are 0.6827, 0.9545 and 0.9973; corresponding one-sided tails are 0.1587, 0.0228 and 0.0013 to four decimals. For N(150,15²), P(X<130)=0.0912, and the density peak is 0.0266. For N(170,8²), P(X>196)=0.000577. The stated 68/95/99.7 and 16/2.5/0.15 percentages are approximate and their application to the named examples checks.

The derivative expressions f′/f=−(x−μ)/σ² and f″/f=((x−μ)²−σ²)/σ⁴ give the maximum μ and inflections μ±σ for σ>0. Scene 4 says 'x minus mu squared equals sigma squared', which can be heard as x−μ²; explicitly speak 'the quantity x minus mu, squared' to match the written bracket. The graphing-tool answer at 130 is 0.0912, not the empirical rule itself. Keep approximate labels on empirical-rule results and distinguish a model probability from an exact fraction in a finite sample.

Direct browser inspection confirms lesson 02's empirical-rule percentages, height Problem 1 N(170,8²), and apple Q1 μ=150 and σ=15; lesson 03's hook confirms the 500 mL, 8 mL and 490 mL bottle inputs.
