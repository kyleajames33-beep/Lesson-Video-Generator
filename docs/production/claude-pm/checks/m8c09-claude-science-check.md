# m8c09 claude science check

Independent AI reviewer, 30 October 2026. Input: `../lessons/chem-m8-c09.md`, Revision 1. Inspected written narration and shot plans, not a built lesson, stills or continuous voiced preview. Narration recounted from `> ` lines with bold markers removed: 6,187 characters; 18 narrated headings; no U+2014. Per-scene counts: `../assets/brief120-source-audit.json`. Human listening and learner testing are pending. Motion and caption fit cannot pass from a design document.

Main learner question: How can mass and fragments constrain a structure?

## Findings

1. **blocker, scene 12 and notes.** "Rightmost is the molecule" contradicts the isotope cluster taught here. M+1 and M+2 are molecular ions too; the monoisotopic M is not the highest m/z. Repair as in learning finding 1.
2. **should fix, Numbers to verify.** Replace every height with `assets/brief120-mass-spectra.json`, backed by six saved NIST JCAMP records in `assets/brief120-nist/`. Butanone NIST 50206 has 43=100, 72=25, 29=17 and 57=8. Pentan-3-one NIST 227750 has 57=100, 29=59.40, 86=21.19, 27=12.39. Chloromethane NIST 18894 has 50=100, 15=72.38, 52=31.03, 49=11.41. Chloroethane NIST 19016 has 64=100, 28=83.01, 29=72.17, 27=60.46, 66=32.03, 49=26.62, 26=20.52. The site's 49 base-peak claim is false for this reference record. Butanal 43 and 72 both exceed 10%; that narrated comparison survives. Pentan-2-one 43 is the base peak; the attempt survives. Full weak-peak tables are in the JSON.
3. **should fix, scenes 4 and 10.** An isotope-containing molecule is heavier. Say "same structure, heavier isotope", rather than denying the higher mass.
4. **should fix, scene 2.** Electron impact does not knock an electron off every molecule. Replace "each molecule" with "some molecules" in both clauses. The neutral fraction is not steered or detected by this instrument.

## Sources and unfinished verification

Primary measured source: [NIST chloroethane JCAMP](https://webbook.nist.gov/cgi/cbook.cgi?JCAMP=C75003&Index=0&Type=Mass). Other five exact URLs and NIST spectrum numbers are in the data JSON. Molecular formulas and nominal sums checked: 72, 86, 50/52, 64/66; gaps 29, 15 and 35. SDBS accession cross-check still pending.

## Official syllabus wording check

The exact 2017 syllabus DOCX was downloaded from NESA on 30 October 2026 and its paragraph text inspected. The dotpoint text and relevant examples quoted in this design match the official wording after Markdown bullet and whitespace normalisation. Local transcripts are `../assets/brief120-chem-official-syllabus.txt` and `brief120-bio-official-syllabus.txt`. Primary downloads: [Chemistry](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx), [Biology](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx). This checks wording, not whether the finished lesson earns coverage.

## Resolution

Resolved in `../lessons/chem-m8-c09.md` Revision 2 (31 Oct; root resolver, Claude PM). Recount by script (sum of "> " lines per scene, bold markers removed): 6,155 characters (Revision 1: 6,187), about 556 s. The chlorine M+2 scene stays (root decision).

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (blocker; counted in the learning review) | See learning finding 1. |
| 2 | Fixed (as supplied) | Numbers to verify now uses the NIST values from `../assets/brief120-mass-spectra.json` for butanone 50206, butanal 19131, chloromethane 18894, pentan-3-one 227750 and pentan-2-one 291264; every narrated claim survives. Chloroethane 19016 is kept for site correction 1 only (confirmed: base peak 64, not 49; the correction's text now gives the measured heights). |
| 3 | Fixed (counted in the learning review) | See learning finding 2. |
| 4 | Fixed (as proposed) | Scene 2: "knocks one electron off some of the molecules, so they become positive ions." Key note 1: "an electron is knocked off some molecules". |

Open for the Codex error check: the NIST 70 eV bromomethane record (CAS 74-83-9) before the A2 card is drawn, including whether m/z 15 is large enough to name; SDBS accession cross-checks (still pending, as this check notes); root to flag the memory aid bank's "rightmost" entry. Consistency with C10 to C11b: C09 names no IR or NMR values; butanone, ethanol and the propanols are not given conflicting data.
