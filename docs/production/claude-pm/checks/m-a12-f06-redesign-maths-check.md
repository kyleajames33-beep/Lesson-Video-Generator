# Maths f06 Revision 2: independent maths check

11 November 2026. Source hash and cue inventory are in `work/brief240/all-design-mechanical-inventory.json`, arithmetic in `work/brief240/f06-calculations.json`. Result: 0 blockers, 1 should fix, 0 optional; 240-F06-RICE-BASIS is shared with the companion review and counted once.

The board has 2⁶⁴ − 1 = 18,446,744,073,709,551,615 grains and its last square exceeds all others combined by one. At the design's assumed 20 to 25 mg per grain this is approximately 369 to 461 billion tonnes. FAO's April 2026 world rice-output projection is 563.3 million tonnes in milled equivalent (https://www.fao.org/newsroom/detail/fao-food-price-index-rises-in-march-as-near-east-conflict-raises-energy-costs/), giving about 655 to 819 annual outputs if the assumed mass is also milled grain. This supports the order of magnitude, conditional on the unverified grain mass and matching basis; paddy and milled figures cannot be treated as identical.

Exact sums independently checked: first ten squares 1023; 3·2^(k−1), k = 1 to 6, 189; first six of 1, −3, 9, … = −182; eight terms of 64, 32, … = 255/2; attempts 242 and 765; bounce partial sums 64, 96, 112, 120, 124, 126, 127, 127.5. The two forms agree for r ≠ 1 and r = 1 gives na. Negative-r brackets in the example are necessary.

The live site lesson https://hscscience.com.au/subjects/maths-advanced/year12/sequences-and-series/lesson04.sa confirms the 189 example, 2/6/18 with five terms, and short answer 1 with a₂ = 6, a₅ = 48 and S₈ = 765. The live NESA sequences page confirms the expansion and finite-sum outcomes. No built or voiced review is claimed.


### Revision3 source repair check,11November2026

Current source SHA256 `ada1a549d00cb6a6ddc90dfc2b3783a94386152ff71b84c012c380501aec9146`. Result for the repaired source:0 blockers,0 remaining should-fix findings in this revision. Author note now fixes the FAO April2026 comparison basis. Independent thresholds for200annual outputs are6.1073mg/grain at563.3Mt milled-equivalent, or8.6736mg at0.8Bt paddy. The approximate6/9mg thresholds are consistent in order of magnitude. A primary study of parboiled milled rice reports example thousand-grain masses18g and23g, supporting a representative18to23mg grain scale rather than a universal mass. At the stated563.3Mt annual basis these imply about589to753annual outputs. No specific tonnage is spoken or displayed. Original basis finding resolved for the spoken order-of-magnitude claim.

Recount:6063characters in16spoken strings; all declared counts agree, no em dash. New narration scenes:none. Exact strings and cues in work/brief240/f06-rev3-voice-source.json; independent calculations in work/brief240/rev3-independent-checks.json. Earlier source/live-site findings are historical where superseded here. Plate geometry findings and built playback remain separate; no speech or source edit.

Primary mass reference: Azuka et al.,Physical properties of parboiled milled local rice varieties marketed in South-East Nigeria,doi10.1007/s13197-020-04690-1,Table1:https://pmc.ncbi.nlm.nih.gov/articles/PMC8021660/. Selected sample weights support this comparison, not a universal lower bound for every cultivar.
