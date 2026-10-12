# B2c Claude science check

Checked `lessons/bio-m5-b02c.md` (revision 4): every quoted narration line, Visual text, key notes, memory aid, attempt, feedback, the author notes that make factual claims and the asset brief, against `site-extracts/bio-m5-l03.md`. No stills exist, so screen checks were skipped. No U+2014 characters (searched). Word counts recounted by script: 1212 words, matching the design.

## Findings

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | Scene 9 feedback: "If you said 6, you may have added 2 each time"; Visual chip "doubling, not adding 2 each time"; Practice section | Adding 2 each time to one cell gives 1 + 2 + 2 + 2 = 7, not 6. Six is 3 x 2 (doublings multiplied by 2). The stated error does not produce the stated answer. | Say "you may have multiplied the 3 by 2" and change the chip to "2 to the power 3, not 3 x 2". |
| 2 | science | Asset brief item 3 and scene 5b Visual: Acineta drawn as "a goblet-shaped cell on a thin stalk" with no shell | Acineta is a loricate suctorian: the cell sits in a lorica (shell) on a solid stalk, with tentacles projecting; it buds internally and releases a ciliated swarmer. A plate without the lorica misdraws the genus. [Acineta Ehrenberg 1834 (Zenodo)](https://doi.org/10.5281/zenodo.6038766), [Suctoria](https://en.wikipedia.org/wiki/Suctoria). | Add a vase-shaped lorica around the cell, tentacle tufts out of its opening, stalk below, internal brood pouch with a ciliated bud. Narration is correct as written. |
| 3 | science | Scene 6: "resistance to an antibiotic, which means surviving a drug that kills bacteria" | Some antibiotics only stop bacteria growing (bacteriostatic), so "a drug that kills bacteria" is too narrow a meaning of resistance for an HSC answer. | "surviving a drug that kills bacteria or stops them growing". |

Syllabus and site mismatch: None found. Binary fission, budding, protists and the conjugation-is-not-reproduction point all match the site extract. The official syllabus text for protist examples could not be retrieved online (see UNVERIFIED).

Copy: None found.

## Verified (with arithmetic)

- Doubling: 3 h = 3 x 60 = 180 min; 180/20 = 9 doublings; 2^9 = 512. 10 h = 600 min; 600/20 = 30; 2^30 = 1,073,741,824, "about a billion". Item three: 2 h = 120 min; 120/40 = 3; 2^3 = 8. Wrong chips: 3 x 2 = 6, 3^2 = 9, 3. Correct apart from finding 1. For the brief's alternative (30 minute doubling for 2 hours): 120/30 = 4; 2^4 = 16, not used in this design.
- Sequence 1, 2, 4, 8, 16 after 20, 40, 60, 80 minutes. Correct.
- 20 minutes is the steady-state doubling time of E. coli in LB at 37 C (minimum recorded about 18 minutes), so the lab-condition caveat is correct. [Harvard BioNumbers](https://bionumbers.hms.harvard.edu/bionumber.aspx?id=103514), [JoVE generation time](https://www.jove.com/fr/science-education/v/19506/generation-time).
- Bacterial fission (copy, segregate, septum, two cells), yeast budding (Saccharomyces buds in rich conditions, nucleus passes into the bud, bud scar) and "yeast is a fungus living as a single cell" are correct; the design already limits "usually" and "baker's".
- Amoeba proteus: nucleus divides by mitosis first, cytoplasm after. Paramecium caudatum: one macronucleus (amitosis) and one micronucleus (mitosis), transverse fission, each daughter gets both nuclei; cilia and oral groove correct. [Paramecium caudatum](https://en.wikipedia.org/wiki/Paramecium_caudatum), [Hawaii cell biology figure](https://www6.pbrc.hawaii.edu/allen/ch10a/50-pca.html), [Amoeba proteus notes](https://gna.it.com/amoeba-proteus-reproduction).
- Acineta budding: Endogenida form buds in an internal pouch and release ciliated swarmers; adults lose cilia and have tentacles, so "releases a small swimming bud" is correct. Acineta is obscure but a valid budding protist. [Acineta (Zenodo)](https://doi.org/10.5281/zenodo.6038766), [Suctoria](https://en.wikipedia.org/wiki/Suctoria).
- Conjugation: DNA passes one way from donor to recipient through a mating pilus; no gametes, no offspring, cell number unchanged, so it is not reproduction; it can spread antibiotic resistance. [mBio 2023 pilus study](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10790687/), [Life 11e, bacteria exchange genes](https://digfir-published.macmillanusa.com/life11e/life11e_ch12_31.html).
- Attempt item one has a unique answer: one loop in total means copying did not occur (a missed share would leave one cell with two loops).

## UNVERIFIED

- Official NSW Biology syllabus wording for protist and bacterial reproduction: not retrievable here; checked via the site extract only.
- That Acineta copies its DNA before budding (the aid's first step is asserted, not narrated): suctorian nuclear behaviour in budding was not found for Acineta specifically.
- Amoeba plate 2 "stretched and constricting with two nuclei": real amoebae round up and withdraw pseudopods before fission, and the dumbbell stage comes late; the plate sequence may over-simplify. Not confirmed either way.
- Scene 1 "milk smells sour by the next day": plausible for warm milk (lactic acid bacteria), no source retrieved.

Count: 3 findings (3 science), 4 UNVERIFIED.


## Resolution (Claude science check)

Applied to `lessons/bio-m5-b02c.md` (revision 5). The check covered revision 4. Narration is now 1,218 words (about 6.6 minutes spoken, about 8.4 minutes with the hold and key notes). No U+2014 in either file.

1. Finding 1 (the "6" slip): resolved. Scene 9 feedback says "If you said 6, you may have multiplied the 3 by 2." The visual chip reads "2 to the power 3, not 3 × 2", and the practice section names "6" as multiplying the 3 by 2.
2. Finding 2 (Acineta drawing): resolved in the asset brief and the scene 5b visual. Acineta is a vase-shaped lorica on a solid stalk, tentacle tufts projecting out of the opening, with an internal brood pouch holding a ciliated bud (a swimming swarmer) that leaves through the opening. The narration was correct and is unchanged. The Codex fact check on the example remains.
3. Finding 3 (resistance meaning): resolved. Scene 6 and its visual now say "surviving a drug that kills bacteria or stops them growing".
4. UNVERIFIED, Acineta copies its DNA before budding: no narration or note claims it. The budding key note now says the DNA copy and movement into the bud for baker's yeast only. The aid check records that the first step is asserted, not shown, for Acineta.
5. UNVERIFIED, amoeba plate 2: the brief now draws the cell rounded up with its pseudopods drawn in, two nuclei and only a shallow pinch beginning. The scene 5a visual says the cell "rounds up, pinches and pulls apart".
6. UNVERIFIED, milk timing: scene 1 now says "Within a day or two it smells sour", and the author note records that the timing is plausible but unsourced.
7. UNVERIFIED, syllabus wording for protists: left to the Codex fact check, as the check recommended.
