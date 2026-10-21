# Brief 96: M6 P02, P03, G01, G02, B16, B18: plates, error-only check and site corrections log

Read `00-standing-rules.md` first. All six designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m6-p02.md`: the enthalpy of neutralisation practical
- `chem-m6-p03.md`: measuring the pH of acids and bases (practical)
- `chem-m6-g01.md`: strong acid and base pH practice
- `chem-m6-g02.md`: weak acid pH, Ka and amphiprotic ion practice
- `bio-m6-b16.md`: cloning, whole organism and gene
- `bio-m6-b18.md`: recombinant DNA

Nothing is voiced yet.

## 1. Plates

Paint each plate in the brief 82 to 92 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, 2000 px, with at least 10% clear margin;
- no text, numbers, people, hands or faces.

Each design's asset section gives the full description, so follow it exactly.

**Chemistry** (`public/assets/chemistry/`):
- **`p02-foam-cup-in-beaker-v1`:** the existing foam cup calorimeter style, standing in a clear beaker, with a probe and a stirrer through the lid (P02, asset item 1).
- **`m6-measuring-cylinder-v1`:** an empty 100 mL glass cylinder with faint unnumbered graduations (P02, item 2).
- **`m6-ph-probe-holder-v1`:** the same probe as `m6-ph-meter-probe-beaker-v1.png`, in an electrode holder, with no beaker (P03, item 1).
- **`m6-buffer-bottle-v1`:** a small plastic reagent bottle with a blank white label band (P03, item 2).
- **`m6-lab-tissue-v1`:** one folded lint-free wipe (P03, item 3).

**Biology** (`public/assets/biology/`). The sheep must match `m6-white-sheep-v1.png` in line weight, palette and scale.
- **`m6-blackface-ewe-v1`:** an adult Scottish Blackface ewe, side-on, facing right (B16, item 1).
- **`m6-white-faced-lamb-v1`:** a Finn Dorset type lamb about three months old, with a clean white face and legs, clearly smaller than the ewe (B16, item 2).
- **`m6-black-footed-ferret-v1`:** a black-footed ferret on all fours, side-on, facing right (B16, item 3).
- **`m6-water-bath-tube-v1`:** a small water bath with its lid open and one microcentrifuge tube in a floating rack, with no readout digits (B18, item 1).
- **`m6-fermenter-tank-v1`:** one stainless-steel fermenter with a sight glass showing cloudy liquid. No building or people (B18, item 2).
- **`m6-antibiotic-colonies-empty-v1`:** the same dish as the existing before and after colony pair, with no colonies. It must line up exactly with that pair, so check a 50% overlay against each (B18, item 3).

Write the provenance to `assets/brief96-provenance.json` and QA views (cream and checker) to `assets/brief96-qa/`. Archive the git-ignored plates as in brief 92.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata. Each design's "Numbers to verify" and facts sections list what to confirm. In particular:

- **P02:**
  - recompute every number: q = mcΔT, the moles, −53 and −55 kJ/mol, attempt 1 at −54 kJ/mol, and the repeats;
  - the error directions (which make ΔH less negative and which more negative);
  - NaCl(aq) c of about 4.03 J g⁻¹ °C⁻¹ and the 0.4 kJ/mol effect;
  - the GHS classes for 1 mol/L NaOH and HCl.
- **P03:**
  - calibration (the straight line through the buffer points, the 59.16 mV slope);
  - distilled water at about pH 5.6;
  - the 94%-slope single-point example in attempt 2 (author note i);
  - the carryover reading of 9.2;
  - 23 times;
  - the GHS classes.
- **G01:** recompute every pH with strict significant figures (decimal places match the concentration's significant figures), including Q4 at 40.0 mL of 0.0500 mol/L Ba(OH)₂ (pH 12.155), and the Ba(OH)₂ solubility.
- **G02:**
  - the Ka values (HOCl, chloroethanoic acid, benzoic acid, HCO₃⁻ and H₂PO₄⁻, with their conjugate Kb values);
  - the quadratic in Q2;
  - Q3 at pH 3.03 (Ka 6.2 × 10⁻⁵, pKa 4.21);
  - the Q4 ionic equations and the verdicts.
- **B16:**
  - Wilmut et al. 1997 (the breeds, 277 / 29 / 1, the electric-pulse fusion);
  - Dolly's death and the flock virus;
  - Sinclair et al. 2016;
  - the black-footed ferret dates and the current status of the clones (Smithsonian, 25 Sep 2025);
  - differing coat patches in cloned cattle;
  - SCNT efficiency;
  - PCR wording.
- **B18:**
  - 1978 to 1979 insulin from synthetic A and B chain DNA;
  - 8,000 lb of pancreas from about 23,500 animals per lb of insulin;
  - CaCl₂ and heat-shock transformation;
  - Agrobacterium T-DNA integrating into the chromosomes;
  - MON531 in Coker 312;
  - the current Bt share of Australian cotton;
  - the chymosin approval dates;
  - introns and cDNA.
- **All six:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question. Search past NESA papers (2019 to 2025) and confirm no question copies or closely paraphrases one.

Write `checks/codex-check-96.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

Add the new site errors listed in each design's Decisions section to `docs/production/claude-pm/site-corrections-m6.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged.
- **P02:** site Chemistry Module 6 L03 and L10. This includes "every error makes the result less negative".
- **P03:** L05 and L08.
- **G01, G02:** their site lessons, if any errors are listed.
- **B16:** Biology L15, the five items.
- **B18:** Biology L16, the three items.

Hand in to `status.md`.
