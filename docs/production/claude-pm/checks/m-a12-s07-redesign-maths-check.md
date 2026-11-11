# s07 redesign: maths check (11 November 2026)

**Changes required before plates or voice.** Exact calculations and the regenerated seed-707 sample are in `work/brief240/s07-calculations.json` and `check-s07.py`. The 200 waits have the ten reported class counts, first five rounded values 0.2, 6.3, 3.4, 7.5, 4.6 and mean 4.9368. The bus probabilities are 0.4; the train upper tail is 3/8 and middle interval is 1/2; the attempts give 1/2 and 3/8, with k=8.

The bus model needs an explicitly uniform arrival phase within the ten-minute cycle. A random arrival independent of the timetable alone does not guarantee uniform phase, and even perfectly regular buses do not imply it. Likewise a rounding error is uniform only under a suitable model for the original measurements' fractional parts. Say equal-width intervals have equal probabilities rather than suggesting any exact wait has a positive probability. The interval-width rule in the memory aid must use only the overlap with the support when a query extends beyond it. The formula F(x)=(x−a)/(b−a) applies inside [a,b], with the stated constant pieces outside.

Direct browser inspection of lesson 09 card 05 confirms the bus on [0,10] and its 0.4 and 0.4 probabilities; Q2 confirms the train on [1,5], its 1/4 density and (t−1)/4 CDF, 0.375 and 0.5 answers, and no unique mode.
