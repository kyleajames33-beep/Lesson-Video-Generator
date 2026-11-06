# phys-y12-m7-v11 science check

Independent Codex source review, 6 November 2026. Revision 1, SHA-256 `11a91cf944e84c7325fb7de7e88e8f3843a9ce0073f403435391e88542133897`. No design, narration, speech or scene edit.

The first/last sodium points give slope 4.125 times 10^-15 V s, h = 6.60825 times 10^-34 J s, intercept -2.275 V and threshold 5.51515 times 10^14 Hz. This gives work function 3.64455 times 10^-19 J before rounding. The five-point least-squares fit instead has slope 4.130 times 10^-15 and intercept -2.278. The graph attempt gives h = 6.66667 times 10^-34 J s and work function 4.66667 times 10^-19 J, or 2.913 eV. The ideal saturation-current/intensity comparison is appropriate.

1. **Should fix:** Force direction, scene 3: electrons travelling towards a negative anode are slowed by an electric force opposite their motion. Their motion is along the electric-field direction, since their charge is negative. Replace climb against the electric field with against the electric force, and keep the field arrow from cathode towards the negative anode.

2. **Should fix:** Sodium working, scenes 7 to 9: carry one consistent unrounded gradient/intercept through the calculation. The displayed 2.28 times 1.602 times 10^-19 gives 3.65 times 10^-19 J, whereas 3.64 follows from the endpoint-derived 2.275 eV. The shown 6.6 times 10^-34 times 5.5 times 10^14 check gives 3.63 times 10^-19 J. Use guard digits for those rows, then round the results. The narrated rounded values can stay if unrounded values are explicitly carried.

3. **Should fix:** Displayed slopes and threshold checks, scenes 7, 9 and 13: group the whole scientific-notation denominators. In particular the attempt denominator is ((10.0 - 7.0) times 10^14), not division by (10.0 - 7.0) followed by multiplication by 10^14. No speech change.

**Optional:** Current-voltage graph, scene 4: if the higher-frequency trace retains the same saturation plateau, identify equal incident photon rate or a schematic normalisation. Equal light power at a higher frequency gives fewer photons, so equal intensity alone would not hold that plateau fixed.

[Millikan's 1916 paper](https://web.mit.edu/8.13/8.13c/references-fall/photoelectric/millikan-1916.pdf) and [his preceding original paper](https://authors.library.caltech.edu/records/b5yty-87q37) verify the experimental context and his theoretical scepticism. Numerical examples are independently recalculated in work/brief191/calculations.json.

Count: 6,158 characters as the sum of 17 scene strings, matching the headline. No U+2014 or U+2061. Runtime is the source estimate and remains below 570 seconds; measured runtime is pending.

Result: 0 blockers, 3 should fix, 1 optional. Resolve learning/science findings before recording. Built fit, full-speed motion, captions, exact voiced preview and human listening remain pending. Full-brief coverage, site log, joins and artwork have separate evidence.
