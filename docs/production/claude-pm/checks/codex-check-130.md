# Brief 130 error-only check

Checked 1 November 2026. Read the current designs, all narration and Visual paragraphs, cards, feedback, key notes, numbers and metadata; compared Chemistry with Revision 4 at ef0ef77 and the resolved earlier checks. No design edits, speech, renders or commits.

## chem-m5-g02, Revision 6

SHA256 `4ff893728225b95995b0c851e17d6579c4c7b6aa16cde23caf5bb72686778c55`.

### Error 1: contradictory destination for moved-out types (author notes only)

The Decisions section still calls part 3 a proposal, sends equal-gas-count to chem-m5-g03, and proposes temperature, industry and open systems for another entry. Key notes' author text instead says “Equal-gas-count reasoning moves to G02b with the other moved-out types.” Brief 130 and the resolved Revision 5 review identify G02b as the destination. Replace the obsolete destination paragraphs with: “The moved-out types are reserved for chem-m5-g02b: the fingerprint board, temperature with an energy profile, equal gas count, industrial conditions and open against closed. Their verified Revision 4 text remains at ef0ef77. G02b needs its own design and review.” This is author text only; no narration change. Source: brief 130 section 2 and m5g02-claude-science-check.md, Revision comparison. Keep the detailed old calculations as historical source notes if useful, but label their destination consistently.

No new learner-science errors found. Rechecked the changed joins against Revision 4. The “no net reaction, no net heat change” correction is present in speech and the green chip. The equal-gas-count learner tag is gone. The question cards have all conditions: q1 rigid and steady temperature; q2 initial 0.200/0.300 mol, 1.00 L, halving and constant temperature; q3 rigid, insulated and matching argon temperature; attempts rigid/constant-temperature and full demands. No answer is exposed on an attempt card.

Recomputed K=7.50, post-squeeze Q=3.75, physical root x=(13-sqrt(97))/60=0.05251903664 mol/L; final concentrations 0.2949619267 and 0.6525190366 mol/L; final amounts 0.1474809634 and 0.3262595183 mol. Both changes obey 2:1. NO2 ends above 0.200 and below 0.400; N2O4 above 0.600. Argon rate dials both 32; ammonia Q becomes K/4 under doubling concentrations. Parked arithmetic +57 kJ/mol, equal-count Q factor 1, and K=[CO2] while both solids remain are unchanged and correct. Reaction-rate reasoning agrees with [OpenStax chemical equilibria](https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria) and [shifting equilibrium](https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle).

Character-for-character comparison with chem-2017-y12.json finds all three dotpoints twice, including U+2019 in Le Chatelier’s. The earlier review independently checked the official Word syllabus; no quotation changed since that review. No U+2014 in this design. Narration: 5,960 characters when scene lines are joined with spaces, within the band. About 567 s is an estimate, not measured audio. Error count: 1 (author destination), 0 new learner-science errors.

## bio-m8-p01, Revision 2

SHA256 `df7c8270b79bbb96293e79fd5e827e2e19aa3e2187693bc5df6a67979030c27b`.

### Error 1: another removed spoken cue remains in scene 1

The hook visual still says “on ‘That's a claim’”, but that phrase is absent from the current narration. Replace that cue with “On ‘Fur and blubber slow heat loss’”. Keep its existing grey claim chip. No new speech or time. Source: scene 1's own current narration and Visual paragraph. Scene 4's old windows/heaters/sunlight cue has correctly become a screen-only change after “into the water”; no remaining dependency on that removed sentence there.

No new scientific or numeric errors found. All six brief 127 findings are resolved: three total trials; dry connections rather than an immersible sensor; A2 fresh equal warm water and no unsupported “no repeats” alternative; the learning repairs to graph-axis language, the plain SA:V meaning in the spoken and printed attempt, and the general model rule are present. A1 and A2 cards have the conditions and demands needed to answer them.

Independently recomputed T=21+24e^(-kt): bare 45.0,41.9,39.1,36.8,34.7,32.9 and wrapped 45.0,43.6,42.3,41.0,39.9,38.8 °C. Drops 12.1/6.2, mean drops 12.0/6.2, spreads 0.5/0.6, gap 5.8, average rates 0.605/0.310, ratio 1.952. A1 0.90/0.30 °C/min; eightfold volume for similar shapes halves SA:V, not total area. Scenes 6,8,9,11 consistently distinguish trial-1 endpoints from means. The [cooling model](https://openstax.org/books/calculus-volume-2/pages/2-8-exponential-growth-and-decay) supports flattening and the starting-temperature control. These remain illustrative data, not measured apparatus results.

The brief 127 safety verdict stands. Reopened [NSW DoE safety guidance](https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance) and the [NSW heated-water advisory](https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/plumbers-and-drainers/standards-and-notes/temperature-requirements-for-heated-water-installations). The 45/50-degree plumbing limits concern hygiene outlets, not permission for science heating. No newly identified public school-science rule requires reducing the 45-degree start. Teacher preparation, stationary glassware, spill controls and the school's risk assessment remain the basis; staff-only detailed CSIS instructions were not independently accessible. No unconditional school-safety approval is claimed.

The B8-IQ1-02 stem and adaptation example match the local official-source ledger; the earlier review checked the official syllabus and these quotations have not changed. Narration count is 5,829 including the spaces joining scene lines. Title 95 characters. U+2014 count zero. Existing site findings already logged under brief 127 need no duplicate. Error count: 1 cue, 0 new learner-science errors.

## Resolution (root, 1 November 2026)

All findings applied as given. See the design status lines: math-a12-d01 Revision 2, chem-m5-g02 Revision 7, bio-m8-p01 Revision 3.
