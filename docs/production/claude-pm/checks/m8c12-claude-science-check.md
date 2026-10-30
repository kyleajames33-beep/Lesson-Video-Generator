# m8c12 independent science check

Reviewer: independent AI reader,30 October 2026; did not author the design. Input: `../lessons/chem-m8-c12.md`, SHA256 `80c78b1e841a3af55268145cc54bbc19a42ff9bfadc63df948f3f1327bd7a14f`. 5,592 narration characters in 17 passages; no em dashes. Source proposal and related prerequisite boundaries inspected. No voiced preview, playback judgement, human listening or real-student learning evidence. Read the standing rules, Brief 109/121 and student-learning-review instructions.

## Findings

### 1. Blocker: Numbers to verify and all drawn spectra

The mass-spectrum heights are explicitly from memory and disagree with the measured butanone record. Use NIST CAS78-93-3, spectrum 50206, rather than the remembered bar list. The measured list is in assets/brief120-mass-spectra.json: for example m/z 57 is 8.0% and m/z 72 is 25.0%, not 7% and 22%. Import the complete measured peak list in the later build. This report does not edit the design. The 2-chloropropane measured reference is now also available: NIST229273, AIST MS-NW-4938, in assets/brief120-nist/2-chloropropane-extra-for121.jdx. It gives 78=8.99%,80=3.09%,27=29.29%,41=21.79%,43=100%,63=16.99%,65=5.69%,39=8.49% and 42=6.59%; replace the remembered intensities accordingly. The 78:80 ratio 2.91 still supports about 3:1. Every exact NMR shift and each liquid-film IR trace still needs its measured reference and conditions. NIST IR Index 0 obtained here is gas phase and cannot certify the intended liquid-film peak positions or shapes. Preserve this as a recording hold until those values are checked.

[Primary/reference source](https://webbook.nist.gov/cgi/cbook.cgi?JCAMP=C78933&Index=0&Type=Mass).

### 2. Should fix: A1 feedback and crossed caption

Both 78 and 80 are intact molecular ions with different chlorine isotopes. Calling 80 "not M+" contradicts the definition. Use 78 as the conventional light-isotope M peak and label 80 M+2. Replace the spoken correction as in learning finding 1. The septet/doublet 6:1 and the two carbon environments correctly identify 2-chloropropane.

[Primary/reference source](https://old.goldbook.iupac.org/html/M/M03988.html).

### 3. Optional: scene 10

The 2500 to 3000 acidOH window is the exact NESA2024 data-sheet range. The design explicitly draws a broader liquid band to 3300. These can coexist. A small caption identifying the shaded data-sheet window would make the distinction clear; no narration repair is required for this point.

[Primary/reference source](https://webbook.nist.gov/cgi/cbook.cgi?ID=C64197&Mask=80).

## Checks and limits

Nominal formulas 72,60,78/80 and 102 and integration sums 8,7 and 10 recalculate correctly. Butanone has 4 carbon and 3 proton environments;2-methylpropanal has 3 carbon environments. Butanal has an aldehyde proton and lacks a 3H singlet. Within the stated candidates, ethyl propanoate uniquely supplies two ethyl patterns without a methyl singlet. These structural checks do not certify remembered exact shifts.

Official dotpoint wording is compared with the 2017 syllabus paragraph extracts and ledgers. Partial examples must remain identified as this video's scope, not as the complete parent dotpoint. Commissioned plates are delivered separately; artwork acceptance does not follow from a source check. Spectra remain coded diagrams. No design, narration or scene code was edited.

## Resolution

Resolved in `../lessons/chem-m8-c12.md` Revision 2 (31 Oct; root resolver, Claude PM). Recount: 5,605 characters, about 512 s.

| # | Finding | Action | Where |
| --- | --- | --- | --- |
| 1 | Blocker: remembered spectrum values | Partly fixed; the rest held. Butanone MS replaced with NIST MS 50206 (all 14 peaks, from `assets/brief120-mass-spectra.json`; 57 = 8, 72 = 25). 2-Chloropropane MS replaced with NIST MS 229273 / AIST MS-NW-4938 (the nine values given here; 78 : 80 = 2.91). No narrated claim changes. Every NMR shift and every liquid-film IR value stays a **recording hold** and is listed as an open item in the design's Codex error-check brief item 1; the gas-phase NIST IR records are not substituted. c09's drawing must take the same butanone list (flagged in the changelog; c09 not edited here). | Status; Revision 2 changes; Numbers to verify; Numbers used; Codex error-check brief item 1 |
| 2 | Should fix: "80 is not M⁺" contradicts the definition | Fixed (counted in the learning review, finding 1). 78 labelled M, 80 labelled M+2, both whole molecules. | Scene 13; Decisions A1 |
| 3 | Optional: scene 10 data-sheet window | Taken (screen only). A thin bracket "data sheet: 2500 to 3000" sits over the acid's band, which is still drawn to 3300. No narration change. | Scene 10 visual |

Open item for the Codex error check: measured, solvent-labelled ¹H and ¹³C shifts for every compound under Numbers to verify, and liquid-film IR values for butanone, ethanoic acid, methyl methanoate and ethyl propanoate. Recording stays held until these are recorded.
