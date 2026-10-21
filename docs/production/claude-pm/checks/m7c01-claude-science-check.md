# m7c01 science check (chem-m7-c01, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 22 Oct 2026.
Inspected: `lessons/chem-m7-c01.md` (Revision 1), proposal text only; the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`; site lesson 1 and 2 (`hscscience/subjects/chemistry/year12/module7/lesson01.sa.html`, `lesson02.sa.html`), read at the passages the design quotes; the IUPAC 2013 Recommendations (Blue Book, online edition) at P-14.3.4, P-44.3 and P-44.4.1, P-31.0 and P-65.1.1.1. Every name, locant and molecular formula was re-derived by hand from the condensed structure (chain search from every end and branch, both numbering directions, H count per carbon). No audio, stills or site files were changed.

## Syllabus dotpoint (checked word for word)

Ledger `C7-IQ1-01` (page 54, flagged depth study or practical): "investigate the nomenclature of organic chemicals, up to C8, using IUPAC conventions, including simple methyl and ethyl branched chains, including: (ACSCH127)" with examples "alkanes", "alkenes", "alkynes", "alcohols (primary, secondary and tertiary)", "aldehydes and ketones", "carboxylic acids", "amines and amides", "halogenated organic compounds". The design's quotation and the YouTube description match exactly. The design claims only the first three examples and asks root to map the rest to the family videos, which is right; until then the ledger should mark `C7-IQ1-01` as partly covered.

## Em dashes

None (U+2014 count 0). En dashes appear only as bond lines (C–C, CH₃–CH₂), which is chemical notation.

## Names and structures

| Case | Structure | Design name and formula | Re-derived | Verdict |
| --- | --- | --- | --- | --- |
| Hook, 3, 17 | CH₃CH₂CH₂CH₃ | butane, C₄H₁₀ | 3 + 2 + 2 + 3 = 10 H | Correct |
| Hook name, 12 | CH₂=CHCH(CH₃)CH₂CH₃ | 3-methylpent-1-ene, C₆H₁₂ | longest chain containing C=C is 5 (methyl path gives 4); C=C locant 1 from the CH₂= end; methyl 3; H 2 + 1 + 1 + 2 + 3 + 3 = 12 | Correct |
| Bent-chain trap, 6 | butane with C₂H₅ on C2 | not 2-ethylbutane; 3-methylpentane, C₆H₁₄ | path CH₃–CH₂–C2–C3–C4 = 5; C1 is a methyl on the middle carbon from either end | Correct |
| 7 | CH₃CH(CH₃)CH₂CH₃ | 2-methylbutane (3-methylbutane crossed), C₅H₁₂ | {2} against {3} | Correct |
| 8 | CH₃CH(CH₃)CH(CH₃)CH₂CH₃ | 2,3-dimethylpentane, C₇H₁₆ | {2,3} against {3,4}; no 6-carbon path | Correct |
| 8 | CH₃CH(CH₃)CH(C₂H₅)CH₂CH₃ | 3-ethyl-2-methylpentane, C₈H₁₈ | all longest paths are 5; the chain with two substituents beats the chain with one (an isopropyl); {2,3} against {3,4}; e before m | Correct (author note f is right) |
| 9 | CH₂=CHCH₂CH₃; CH₃CH=CHCH₃; CH₂=CH₂; CH₂=CHCH₃ | but-1-ene, but-2-ene, ethene, propene | C₄H₈, C₄H₈, C₂H₄, C₃H₆ | Correct; "propene" is the 2013 PIN (below) |
| 10 | CH₂=CHCH₂CH(CH₃)CH₃ | 4-methylpent-1-ene (2-methylpent-4-ene crossed), C₆H₁₂ | C=C {1} against {4}; the ending's locant decides first | Correct, and a real priority conflict (the site's example is not) |
| 10 | CH₃C≡CCH₂CH₃ | pent-2-yne, C₅H₈ | {2} against {3}; H 3 + 0 + 0 + 2 + 3 = 8 | Correct; drawn straight through the triple bond, which is right |
| 11 | CH₃C(CH₃)₂CH₂CH₂CH₃ | 2,2-dimethylpentane, C₇H₁₆ (C₆H₁₄ crossed) | C2 bonded to four carbons, no H; H = 16 | Correct |
| A1 | CH₃CH=CHCH₂CH(CH₃)CH₃ | 5-methylhex-2-ene (2-methylhex-4-ene crossed), C₇H₁₄ | longest chain 6 and it contains the C=C; C=C {2} against {4}; H 3 + 1 + 1 + 2 + 1 + 3 + 3 = 14 | Correct |
| A2 | "2-ethylpentane" as described | 3-methylhexane (4-methylhexane crossed), C₇H₁₆ | path through the ethyl is 6; methyl {3} against {4} | Correct |

All cases are C8 or fewer in total, with only methyl and ethyl branches, which matches the dotpoint's "up to C8 ... simple methyl and ethyl branched chains".

## Rules checked against IUPAC as taught for the NSW HSC

| Rule in the design | IUPAC 2013 | HSC practice | Verdict |
| --- | --- | --- | --- |
| Locant immediately before the ending (but-1-ene, not 1-butene) | Current format since the 1993 recommendations, kept in 2013 | Used in NESA papers and current NSW texts | Correct |
| No locant for ethene or propene (scene 9) | P-14.3.4.2(d): locant '1' omitted "in any dinuclear, unsubstituted trinuclear alkenes and alkynes"; examples "ethene (PIN)", "propene (PIN)" | "propene" (as in polypropene) | Correct. Note the condition "unsubstituted": a substituted propene keeps its locant in a PIN (2-methylprop-1-ene). M1 |
| The main chain must contain the C=C (scene 9; key note 3) | P-44.3.2: "the first criterion ... is the length of the chain; unsaturation is now the second criterion" (example: octane is senior to hept-1-ene) | The longest chain containing the C=C (older rule) is what HSC courses and the site teach | Acceptable as the HSC convention. Every alkene in the video has its C=C in the longest chain, so both conventions give the same names. Author note c is right; M2 |
| The C=C or C≡C gets the lowest locant before branches (scene 10) | P-31.0 and P-31.1.4: low locants to 'ene' and 'yne' endings are assigned before detachable (alphabetised) prefixes | Same | Correct |
| Alphabetical order of branches, ignoring di-, tri- (scene 8; key note 3) | P-14.5: simple multiplying prefixes such as di- and tri- are not considered in alphanumerical order (sub-section number from the reviewer's knowledge, not re-fetched) | Same | Correct |
| Commas between locants, hyphens between locants and words (scene 8) | P-16 punctuation rules (section number not re-checked) | Same | Correct |
| Several branches: lowest locant set (2,3 against 3,4) | P-31.1.4 lowest locants as a set, first point of difference | Same | Correct as used; the first-point-of-difference wording is fairly left out of scope |
| Implied hydrogens in skeletal formulas: "three on an end carbon, two on a corner, and one where a branch joins" (scene 3; key note 1) | each carbon has four bonds; a C=C counts as two | Same | Incomplete: true only for carbons with single bonds; fails for C=C carbons (A1) and for a carbon joined to four carbons (scene 11). S1 |

## Other chemistry claims

- "Carbon has four valence electrons, so each carbon forms four covalent bonds": correct (Year 11).
- "That's why there are millions of carbon compounds": correct (registries hold far more than millions of organic substances; "millions" is a safe lower statement).
- "Real chains aren't straight ... The bonds spread out, so the carbons zigzag": correct for sp³ chains in their extended form; it does not claim the chain is rigid.
- "Ane means only single bonds. Chemists call that saturated: each carbon holds as many hydrogens as it can": correct.
- "a, e and y go alphabetically, just as one, two and three bonds go in order": correct as a recall aid.
- Hook: camping-stove canisters commonly hold butane, often blended with propane and/or 2-methylpropane; "butane, often mixed with propane" is true for common blends and makes no brand claim.
- Scene 11: "C six H fourteen, which is a different compound": a molecular formula is not a compound (C₆H₁₄ has five structural isomers). Wording, not chemistry, but it contradicts c02 (M3).
- Author note h: 5-methylhex-2-ene has E and Z isomers; stereoisomerism is not in the 2017 syllabus; the name without E/Z is the expected HSC answer. Correct.

## Absolute claims

- "The main chain has to contain the double bond": true under the HSC convention, not under P-44.3.2 (M2; no learner change needed).
- "Ethene and propene don't need a number at all, because there's only one place the double bond can go": correct for the unsubstituted compounds named (M1 keeps author notes from generalising it).
- "Every corner and every end is a carbon, and the hydrogens are left out": correct for skeletal formulas of hydrocarbons.
- No other absolute claims found.

## Site errors logged by the author

| Logged correction | Site text found (21 to 22 Oct) | Verdict |
| --- | --- | --- |
| 1. L01 worked example 2, step 2: "From the other end: double bond at C3" | Present: "From the CH₂= end: C1=C2–C3–C4–C5. Double bond at C1. From the other end: double bond at C3." | Real error. Numbered from the CH₃ end, the C=C is between C4 and C5, so its locant is 4. The answer 3-methylpent-1-ene is right, and the methyl is 3 from both ends, so the example shows no priority conflict. Correction text is right |
| 2. L01 card 5: "Prop-1-ene" in the table, while "1-ethyne" is marked wrong because "ethyne has no locant" | Present in both places | Real inconsistency. IUPAC P-14.3.4.2(d) gives "propene (PIN)". Correction text is right; it may cite the rule: "Propene: 3C, only one possible C=C position, so no locant is needed (IUPAC 2013 omits it)." |
| 3. L01 hook and Revisit: "hexyl acetate" called "a traditional name, not an IUPAC one (the IUPAC name is hexyl ethanoate)" | "hexyl acetate" present in the hook and Revisit | The correction's reason is wrong. IUPAC 2013 P-65.1.1.1 retains "acetic acid (PIN)", so "hexyl acetate" is the IUPAC preferred name; "ethanoate" is the systematic form that HSC courses teach. The real problem is only that "acetate" does not show the eth- stem the lesson decodes. S2 |
| 4. L01 "seven major functional group classes" with alkane listed as "C–C only (no functional group)"; L02 "all eight organic functional group classes" | Both present. L01's seven are alkane, alkene, alkyne, alcohol, aldehyde, ketone, carboxylic acid; L02's eight are alcohols, aldehydes, ketones, carboxylic acids, esters, amines, amides, haloalkanes | Partly real. Counting alkane as a "functional group class" while saying it has none is inconsistent. The "seven against eight" comparison is not: the two lessons list different sets. Minor; the correction text should drop the L02 comparison (M4) |
| Note: "longest chain that includes the C=C" | Present | Agreed: HSC convention, superseded by P-44.3.2 in 2013; no conflict in this video's cases |
| Note: "1-butene ... accepted in NSW HSC" | Present | Agreed: not checkable against a NESA statement; the video uses only but-1-ene |

## Exam style

A1 ("The skeletal formula of a hydrocarbon is shown. Give its IUPAC name and its molecular formula.") and A2 ("A student names a hydrocarbon '2-ethylpentane'. Explain why this name is incorrect. Give the correct IUPAC name and draw the skeletal formula of the compound.") use HSC Section II verbs and structure, are original compounds and wording, and are not copies of any NESA item known to this reviewer (no exhaustive search of past papers was made). No mark-allocation talk.

## Findings

### S1. Should fix: the implied-hydrogen rule is stated only for single-bonded carbons (scene 3, key note 1)

- Exact text: "enough to give each carbon four bonds: three on an end carbon, two on a corner, and one where a branch joins."
- Problem: the shortcut gives C₇H₁₆ for A1's skeleton (correct C₇H₁₄) and one hydrogen for scene 11's C2 (correct none).
- Replacement: as learning B1 (scene 9 sentence "In a skeletal drawing, a double bond counts as **two** of a carbon's four bonds, so each carbon in it has one fewer hydrogen."; the feedback 1 line; key note 1 "...end 3, corner 2, branch point 1, a carbon joined to four carbons 0; a C=C counts as 2 bonds, so each of its carbons has one fewer H").

### S2. Should fix: site correction 3 misstates IUPAC

- Replace the correction's text with: "'Acetate' is a retained IUPAC name (acetic acid is the 2013 preferred IUPAC name), but HSC courses use the systematic 'ethanoate', and 'acetate' does not show the eth- stem this lesson decodes. Correct: '...read "hexyl ethanoate" (sold as hexyl acetate) or "2-methylpropan-1-ol"...'." This keeps the owner record accurate before it is copied to `site-corrections-m7.md`.

### M1. Minor: author note on locant omission

- Add to author note d: "IUPAC 2013 (P-14.3.4.2(d)) omits the locant only for unsubstituted ethene, propene and the two-carbon and three-carbon alkynes; a substituted propene keeps it (2-methylprop-1-ene)." This stops a later video generalising scene 9.

### M2. Minor: cite the 2013 chain rule in author note c

- Add: "IUPAC 2013 P-44.3.2: chain length is now the first criterion and unsaturation the second (example: octane is senior to hept-1-ene)." No learner change.

### M3. Minor: scene 11 wording

- As learning S3: "Count only one of the methyls, and you'd write C six H fourteen: one carbon and two hydrogens **short**, so it can't be this molecule."

### M4. Minor: site correction 4

- Replace with: "L01 counts alkane among the 'seven major functional group classes' while its table says alkanes have 'no functional group'. Correct: 'Alkanes have no functional group; alkenes, alkynes and the families in Lesson 2 each have one.'" Drop the L02 "eight" comparison, which lists a different set.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entry C7-IQ1-01 (page 54)
- IUPAC, Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (Blue Book), online edition: P-1 (P-14.3.4 omission of locants, fetched; P-14.5 alphanumerical order), https://iupac.qmul.ac.uk/BlueBook/P1.html ; P-3 (P-31.0, P-31.1.4 numbering of 'ene' and 'yne'), https://iupac.qmul.ac.uk/BlueBook/P3.html ; P-4 (P-44.3.2 chain length before unsaturation; P-44.4.1), https://iupac.qmul.ac.uk/BlueBook/P4.html ; P-6 (P-65.1.1.1 acetic acid PIN), https://iupac.qmul.ac.uk/BlueBook/P6.html
- Blue Book corrections (locant omission exceptions): https://iupac.qmul.ac.uk/BlueBook/changes2.html
- Propene (preferred IUPAC name "Propene"): https://en.wikipedia.org/wiki/Propene
- LibreTexts, Omitting numbers in nomenclature: https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Supplemental_Modules_(Organic_Chemistry)/Fundamentals/Nomenclature/Omitting_numbers_in_Nomenclature

## Verdict

**Ready to voice after fixes** (S1 before recording, with learning B1; S2 before the corrections are copied to the owner record; M1 to M4 are cheap). The Codex error check is still required.

## Resolution
