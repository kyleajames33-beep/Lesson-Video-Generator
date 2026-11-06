# y11b-fa2-v31 science-check

Revision 1 source checked 4 November 2026. SHA-256 `994dfcb26045d877324f0d5a91f590656d711fd8031784c4b371a6ed74899b4d`. Source proposal only; no image QA, practical clearance, voiced preview or learner evidence.

Access update, 4 November 2026: the Europe PMC full-text XML and original Figure 1 are now saved in `work/brief163/leone.xml` and `leone-fig1.jpg`. The earlier access failure is resolved. Tables 2 and 4 confirm 36 participants, 18 in each sex group; the mixed-model reconstruction in Table 3 reproduces all nine proposed rounded points. Recalculation: `work/brief163/leone-verification.json`. Figure 1 shows separate sex-group means with standard errors; the combined model predictions are not a table of directly observed whole-group means.

1. **Blocker:** Table 4 and the Figure 1 insulin axis print U/l, but the design relabels the same numerical values mU/L. That is a factor of 1000. It may be a publication unit error, but this check cannot silently correct it. Obtain a verified correction or replace the insulin scale with explicitly relative-to-baseline values using a length-neutral author repair before voicing.

2. **Should fix:** Label the nine reconstructed points as estimates reconstructed from the published mixed model, not directly observed whole-group measurements. Keep the same values and replace the existing data-source tag.

3. **Should fix:** Keep peak of the mean curve distinct from mean of individual peak times (Table 4: insulin 44 minutes). Replace the repeated peak phrase rather than implying the quantities are identical.

Count: 1 blocker, 2 should fix. Access is resolved; units and exact plotted-mean labelling remain unresolved. No design or data was changed.

## Official syllabus and route audit (4 November 2026)

Official CMS codename `ci4e8bd96f`; route ID `B25-FA2-G4-06`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa79a477bc).

> Analyse data on hormone levels and physiological processes to illustrate the role of an endocrine hormone in regulating a specific function

Fresh official wording matches the route.

Route question: What can hormone and physiological-variable data show about an endocrine hormone's regulating role?

Question occurs verbatim in design: True. Start: Show a labelled hormone trace alongside its physiological variable with distinct units.. Stop: Analyse trends/timing/recovery in a paired dataset; distinguish observed from illustrative data and consistency from proof of causation. Glucose-only readings do not measure insulin.. Next: bio-y11-fa2-v32: How does diabetes disrupt homeostasis, and what evidence shows its effects on the body?.

Site source exists: True; current file hash matches route: True. A hash match verifies source identity, not all reused numbers or scientific accuracy.

Paired source-frame comparison is recorded below; later built-frame review is still required. Asset inventory is in `work/brief163-164-audit/audit.json`; an existing filename is not visual QA.

## Paired handoff source check (4 November 2026)

Compared this design's opening declaration and scene 1 with `bio-y11-fa2-v30.md`'s final non-notes handoff scene. The named board, plates, chips, question marks and Next chip agree at source level; no conflicting frame element was found. The pair and file hashes are recorded in `work/opening-pairs.json`. This closes the source-frame comparison, not a rendered pixel-identity check. Physical built frames and motion still need review.
