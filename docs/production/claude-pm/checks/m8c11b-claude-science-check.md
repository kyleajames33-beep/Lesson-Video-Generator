# m8c11b claude science check

Independent AI reviewer, 30 October 2026. Input: `../lessons/chem-m8-c11b.md`, Revision 1. Inspected written narration and shot plans, not a built lesson, stills or continuous voiced preview. Narration recounted from `> ` lines with bold markers removed: 5,553 characters; 17 narrated headings; no U+2014. Per-scene counts: `../assets/brief120-source-audit.json`. Human listening and learner testing are pending. Motion and caption fit cannot pass from a design document.

Main learner question: How do proton signals, areas and splitting reveal connections?

## Findings

1. **should fix, memory aid and key note 4.** Integration is a relative ratio before the molecular formula establishes actual counts. "Areas count hydrogens" should say "areas compare hydrogens". A triplet/quartet pair alone is not universal proof of an isolated ethyl group; use it as a candidate pattern checked against all clues.
2. **blocker, measured NMR package.** The exact proton shifts and line patterns for ethanol, bromoethane, ethyl ethanoate, methyl propanoate and pentan-3-one still require inspected SDBS records with solvent, field and accession. The OH shift cannot be fixed universally at 2.6 ppm. Do not claim these memory values have been verified.
3. **should fix, feedback 2.** "Only two signals means the molecule is symmetrical" is too broad as a universal rule because accidental overlap is possible. In this candidate comparison say "Of these candidates, two signals select the symmetrical pentan-3-one." This is longer and retains the floor.
The simple splitting predictions were reconstructed: ethanol CH3 triplet/CH2 quartet/exchanging OH singlet; bromoethane 3H triplet/2H quartet; ethyl ethanoate 3H singlet/2H quartet/3H triplet; methyl propanoate OCH3 singlet/CH2 quartet/end CH3 triplet; pentan-3-one 6H triplet/4H quartet, reduced ratio 3:2. These are structural checks, not measured-spectrum verification.

## Sources and unfinished verification

[AIST ethanol record](https://sdbs.db.aist.go.jp/CompoundLanding.aspx?sdbsno=1300) identifies SDBS-NMR-HSP-01-876 and other proton records. Exact curves and the other compounds are pending.

## Official syllabus wording check

The exact 2017 syllabus DOCX was downloaded from NESA on 30 October 2026 and its paragraph text inspected. The dotpoint text and relevant examples quoted in this design match the official wording after Markdown bullet and whitespace normalisation. Local transcripts are `../assets/brief120-chem-official-syllabus.txt` and `brief120-bio-official-syllabus.txt`. Primary downloads: [Chemistry](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx), [Biology](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx). This checks wording, not whether the finished lesson earns coverage.

## Resolution

Resolved in `../lessons/chem-m8-c11b.md` Revision 2 (31 Oct; root resolver, Claude PM), except science blocker 2, which stays open as a build gate (data, not design). Recount by script (sum of "> " lines per scene, bold markers removed): 5,618 characters (Revision 1: 5,553), about 514 s; nothing was cut, as the floor requires.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed | "areas compare hydrogens" in scene 11 and key note 2 (see learning finding 1). The triplet and quartet now "suggest an ethyl group" in feedback 2, with the tag "a candidate pattern: check the other clues", and key note 4 says to check the pattern against the other clues. |
| 2 | Open (blocker; partly fixed) | The confirmed splitting and integration predictions are recorded under Numbers to verify as structural checks. Every shift is marked provisional with a build gate: no spectrum drawn and no shift printed or voiced until each compound has an inspected record with accession, solvent and field; values more than 0.1 ppm off change. The ethanol O–H has no fixed learner-facing value (scene 1 tag "O–H: position varies"). Open for the Codex error check. |
| 3 | Fixed (as proposed, reworded) | Feedback 2: "Of these candidates, only the symmetrical pentan-3-one gives two signals". |

Consistency with C09 to C11a: ethanol, ethyl ethanoate and the shared sample tube plate match C11a; no proton values appear in C09 or C10.
