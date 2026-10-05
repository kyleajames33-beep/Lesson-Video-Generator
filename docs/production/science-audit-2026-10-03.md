# Scientific source review, 3 October 2026

Prepared four isolated correction drafts for C03 to C06. The production lessons,
recordings, diagrams and registrations are unchanged. No audio was generated or
decoded and no render was run. These are editorial proposals, not approved lessons.

The repeatable source screen examined 308 lessons and 174 supported numeric
expressions. It found 661 diagnostic occurrences in 172 lessons: 478 punctuation,
120 assessment/prevalence claims, 16 control/reliability inferences, 14 absolute
denaturation claims, 14 saturation claims, 7 fidelity inferences, 5 optimum claims
and 7 numeric equalities requiring context. These counts include repeated fields
and quoted or negated claims. They are not confirmed defect counts.

## Review package

- [Side-by-side scene review](../../out/review/science-corrections/review.md).
- [Draft manifest and exact source/draft hashes](../../out/review/science-corrections/manifest.json).
- [Catalogue findings with scene, field and source hashes](../../out/review/science-audit/catalogue.json).
- [Diagnostic queue](../../out/review/science-audit/queue.md). Occurrence order is not severity order.

All source fingerprints are checked before draft creation. If source changes,
preparation stops rather than applying an older correction to newer copy. The
field-change records preserve before/after text. U+2014 in diagnostic JSON is
escaped; the scene review displays that character as `[U+2014]` in old copy.

## Manually reviewed priority corrections

| Register | Scenes and confirmed issue | Proposed correction |
| --- | --- | --- |
| C03, limiting reagents | Hook omits its recipe; concept assumes an excess in every case; worked-example-2 uses Cl₂ 70.91 despite supplied Cl 35.45; quick-check says nearly four times the coefficient-normalised capacity | State 2 bread + 1 cheese per toastie. Bound calculations to the stated reaction going to completion. Explain equal capacities. Use Cl₂ 70.90 and guard digits. Distinguish raw mole ratio 3.968 from capacity ratio 1.984. |
| C04, enzyme practical | Earlier fair-test copy already rejects a universal 37 °C optimum, but the worked hypothesis assumes one. Reliability/control copy overstates what repeats and a boiled tube establish. Tissue mass is treated as enzyme amount. | State one preparation and assay, locate the peak from data, measure average gas volume per time, report mean and spread, check systematic errors, compare matched heat-treated/cooled and no-enzyme controls. |
| C05, DNA | concept-unzip, misconception and quick-check attribute fidelity to templating or semi-conservative composition alone. Enzyme steps omit primer replacement and leave synthesis direction unnamed. Models are credited with representing every enzyme. | Distinguish strand inheritance from fidelity. Include polymerase selectivity, proofreading and mismatch repair. State 5′ to 3′ synthesis, antiparallel templates and primer processing before ligase sealing. Identify actual model omissions. |
| C06, enzyme graphs | Temperature decline is treated as proof of permanent unfolding; saturation means every site occupied at every instant; only added enzyme can raise a plateau. The misconception caption still describes cold while the revised narration discusses pH. | Label illustrative assay-specific curves, separate observation from mechanism, use approach-to-limit language, bound added-enzyme predictions to controlled conditions, and align all misconception copy to the two actual claims. |

The new spoken and displayed explanations were checked against one another.
Each non-title scene has revised narration. Drafts keep scene types/order,
diagram types/kinds and asset references. They remove audio wiring, captions,
intro media and explicit speech-linked cues. Original scene durations remain
placeholders. They are not registered, timed or ready for production playback.

### Independent chemistry working

Use the question's supplied values, rather than silently substituting a new
periodic table. Every displayed intermediate below is approximate; calculate
final answers from unrounded expressions.

| Quantity | Independent expression | Result |
| --- | --- | --- |
| Water molar mass | 2(1.008) + 15.999 | 18.015 g mol⁻¹ |
| First example water yield | 2(32.0 / 31.998)(18.015) | 36.032252… g, reported 36.0 g |
| Sodium capacity | (10.0 / 22.99) / 2 | 0.217485863… mol |
| Chlorine capacity | 20.0 / 70.90 | 0.282087447… mol |
| Sodium chloride yield | (10.0 / 22.99)(58.44) | 25.4197477… g, reported 25.4 g |
| Chlorine remaining | 20.0 − (10.0 / 22.99 / 2)(70.90) | 4.58025228… g, reported 4.58 g |
| Quiz capacity ratio | (4.00 / 2.016 / 2) / (16.0 / 31.998) | 1.984002976… |
| Quiz raw mole ratio | (4.00 / 2.016) / (16.0 / 31.998) | 3.968005952… |

## New numeric triage dispositions

The seven numeric flags were inspected in their full scene context. They are
seven fields, not seven independently established scientific mistakes.

| Lesson/scene | Context and disposition |
| --- | --- |
| Molar mass, worked-example | `40.08 + 193.96 = 234.05` is inconsistent. C01 remains open; the existing molar-mass revision path is retained rather than duplicating it. |
| Empirical/molecular formula, quick-check | `80 / 12.01` is 6.6611157…, so 6.66 to two decimal places. Speech instead divides by 12 to get 6.67. Final C₂H₆ is unchanged. Align the chosen values and working in a later recorded revision. |
| Gravimetric analysis, worked-example-2 | `0.01001 × 35.453` is 0.35488453, not 0.3550 to four decimal places. However, guard-digit working from 1.435 / 143.323 gives 0.354967835 g, which does round to 0.3550. Final mass is valid; expose the unrounded calculation instead of suggesting the rounded intermediate produces it exactly. |
| Combustion calorimetry, worked-example | `0.72 / 46.07` is 0.01562839…, or 0.01563 to five decimal places. The final −625.86095 kJ mol⁻¹ rounds to −626 at three significant figures; input 0.72 has only two. Declare the reporting convention and idealised water-only heat balance. |
| Neutralisation calorimetry, quick-check caption | `75.0 × 4.18 × 9.2 = 2.88 kJ` omits the J-to-kJ conversion. The physical magnitude is valid: 2884.2 J is 2.8842 kJ. This is incomplete displayed working, not a thousand-fold yield error. |
| Dissolution calorimetry, quick-check | `5.00 / 110.98` is 0.04505316…, or 0.04505 to five decimal places. The final −88.140316 kJ mol⁻¹ rounds to −88.1 at three significant figures, but ΔT 9.5 has two. The scene also uses water mass only; declare that approximation or supply solution heat capacity/mass. |
| Back/conductometric titration, worked-example | `395 / 620 × 100` gives 63.7097…, or 63.7, while unrounded mass 395.395 mg gives 63.7734…, or 63.8. The final 63.8 is consistent with guard digits, but not the displayed rounded intermediate. Speech also claims the tablet is short of its label although no label content is supplied. Remove that inference or supply evidence. |

The scanner was adjusted after inspection to skip comma-separated number tails
and implicit fraction-to-percent conversions. Regression tests cover both.
Units, symbolic expressions, scientific notation, integer precision and spoken
number words remain manual checks. A compatible numeric equality does not
establish a correct equation, unit, assumption or scientific conclusion.

## Scientific evidence and scope

The following sources support the corrections, not approval of the whole lesson.
The enzyme papers establish limits to simple models; the proposed school-level
wording is an editorial application of that evidence.

- [IUBMB enzyme kinetics recommendations, sections 4 to 6](https://iubmb.qmul.ac.uk/kinetics/ek4t6.html): the substrate-dependent limiting rate belongs to specified enzyme/temperature conditions, and similar limiting behaviour can arise from different mechanisms. This supports bounded saturation language, not shape-only diagnosis.
- [Peterson et al., 2007, temperature dependence](https://pubmed.ncbi.nlm.nih.gov/17092210/): experimental modelling includes reversible activity loss as well as irreversible inactivation. This supports avoiding a universal permanent-denaturation account for every falling rate curve.
- [NIST sampling guidance](https://itl.nist.gov/div898/handbook/ppc/section3/ppc332.htm) and [measurement terminology](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology): random variation and systematic/confounded effects require different treatment. The inference for these practical drafts is that repeats and averaging cannot by themselves remove a shared confound or measurement bias.
- [Zhou et al., 2021, replication fidelity](https://pmc.ncbi.nlm.nih.gov/articles/PMC8815454/): polymerase selectivity, proofreading and mismatch repair contribute to accurate replication. This supports separating complementary templating from a complete fidelity explanation.
- [Human Okazaki-fragment maturation experiments, 2022](https://www.nature.com/articles/s41467-022-34751-2) and [direct primer-removal observations, 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5377794/): primer processing precedes completed nick sealing, and synthesis direction/antiparallel templates explain fragment production. The draft deliberately avoids assigning organism-specific polymerases.
- [CIAAW abridged atomic weights](https://www.ciaaw.org/abridged-atomic-weights.htm): a reference for element values and their precision. For each worked problem, the explicitly supplied values control internal consistency.
- [BIPM mole definition](https://www.bipm.org/en/si-base-units/mole): the present definition fixes the entity count. C02 remains on the existing molar-mass review path.

## Visual and release work still required

`EnzymeGraphDiagram.tsx` implements illustrative formulas, including a fixed
temperature rise and imposed fall. Its hard-coded trio text says “optimum, then
denatured”, and its insets can equate declining activity with changed shape.
Source copy corrections do not remove those implications. Check the component's
labels/inset scope before adopting these drafts. Removing custom cues also
removes the added-enzyme curve trigger; restore that teaching beat deliberately
when the final explanation and timing are settled.

The DNA lesson references `bio12m5Dna` and `bio12m5Fork`; the separately flagged
`HdDnaReplication.tsx` is not itself that lesson's entire model. A source account
of 5′ to 3′ synthesis does not verify the visible labels, fragment joins or enzyme
sequence in any of these implementations. Review each selected model against
the actual objective. No visual implementation was edited in this pass.

Expert scientific review, Biology cohort mapping (C13), final narration, aligned
captions/cues, response holds, layout fit and continuous/device review are still
pending. C03 to C06 stay open until the original production package is corrected
and reviewed. The four drafts are the concrete proposals for that review.

## Reproduce without media work

```powershell
npm run test:science
npm run audit:science
npm run prepare:science-corrections
```

These commands only read lesson JSON, calculate, test and write text/JSON drafts.
They do not invoke a renderer, speech provider, media decoder or audio fixture.

Validation: 11 science tests pass. All four drafts pass the existing lesson
schema validator. Two limiting-reagent narration estimates exceed the inherited
duration targets slightly. Those durations are deliberately still placeholders;
they require deliberate pacing and response-hold planning before recording.

Subsequent source work corrected the component implications identified above.
See [scientific model repairs](scientific-model-repairs-2026-10-03.md) for the
implemented changes, impact and pending visual review. The description of the
old hard-coded graph labels in this audit records the pre-repair finding.
