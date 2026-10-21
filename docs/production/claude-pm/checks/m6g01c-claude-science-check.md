# m6g01c science check (chem-m6-g01, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-g01.md` (Revision 1), proposal text only, and the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`. Every number was recomputed with a Python script (21 Oct), including the replacement Q4 data proposed in learning S1. Kw = 1.0 × 10⁻¹⁴ at 25 °C and 14.00 is treated as exact (the design's stated rule, from C07 author note c). No audio, stills or site files were changed.

## Syllabus dotpoints (checked word for word)

Ledger `C6-IQ2-02` (page 53): "calculate pH, pOH, hydrogen ion concentration ([H+]) and hydroxide ion concentration ([OH–]) for a range of solutions (ACSCH102)". Ledger `C6-IQ2-06` (page 53): "calculate the pH of the resultant solution when solutions of acids and/or bases are diluted or mixed". The quotations in the design and in the YouTube description match the ledger exactly (checked by script; the dash in "[OH–]" is U+2013, as in the ledger). Calling G01 practice rows only, not first coverage, is right.

## Em dashes and spelling

No em dashes (U+2014 count 0). There are three en dashes, all inside "[OH–]" as the ledger prints it. Australian spelling throughout ("neutralise", "litre", "ionises"; "meter" is the instrument).

## Reference facts

| Claim in design | Checked value | Verdict | Source |
| --- | --- | --- | --- |
| HNO₃ and HCl are strong (fully ionised in dilute solution) | yes | Correct | CRC Handbook; standard |
| Ba(OH)₂ is a soluble strong base releasing 2 OH⁻ | yes | Correct | CRC Handbook |
| Ba(OH)₂ solubility "roughly 0.1 to 0.2 mol/L near 25 °C" | Ba(OH)₂·8H₂O about 5.6 g per 100 mL at 15 °C (about 0.18 mol/L), rising with temperature (about 0.2 to 0.3 mol/L at 25 °C, depending on the source and on the form quoted) | Range slightly low but safe: 0.0800 and the proposed 0.0500 mol/L are well inside | Standard solubility tables (CRC Handbook style); figures from the reviewer's reference knowledge, not fetched, so Codex should confirm them (asset brief item 2) |
| Kw = 1.0 × 10⁻¹⁴ at 25 °C | 1.01 × 10⁻¹⁴ (pKw 13.995) | Correct to 2 s.f. | CRC Handbook |
| 0.10 mol/L HCl and NaOH read close to pH 1.00 and 13.00 | measured about 1.1 and 12.9 (activity) | Acceptable: the question gives the pH values, so they are data (C07 author note a) | Harris, Quantitative Chemical Analysis |

## Recomputed values

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Q1 pH | 2.602 | −log(2.50 × 10⁻³) = 2.60206; 3 s.f. → 3 d.p. | Correct |
| Q1 [OH⁻] | 4.0 × 10⁻¹² mol/L | 1.0 × 10⁻¹⁴ ÷ 2.50 × 10⁻³ = 4.0 × 10⁻¹² (2 s.f., from Kw) | Correct |
| Q1 "hundreds of millions of times less" | | 2.50 × 10⁻³ ÷ 4.0 × 10⁻¹² = 6.3 × 10⁸ | Correct |
| Q1 water's own H₃O⁺ | negligible | at most 4 × 10⁻¹² mol/L here (suppressed), far below 2.50 × 10⁻³ | Correct |
| Q2 n, c, pH | 0.00300 mol; 0.0120 mol/L; 1.921 | 0.120 × 0.0250 = 0.00300; ÷ 0.2500 = 0.0120; −log = 1.92082 | Correct |
| Q2 before dilution | 0.921 | −log(0.120) = 0.92082 | Correct; 1.921 − 0.921 = 1.000 = log 10 |
| Q2 crossed (275.0 mL) | 1.962 | 0.00300 ÷ 0.2750 = 0.010909; −log = 1.96221 | Correct |
| Q3 concentrations | 0.10 mol/L each | 10⁻¹·⁰⁰; pOH = 14.00 − 13.00 = 1.00; 2 d.p. → 2 s.f. | Correct |
| Q3 moles, excess | 0.0030, 0.0020, 0.0010 mol | 0.10 × 0.0300; 0.10 × 0.0200; subtraction to 10⁻⁴ gives 2 s.f. | Correct |
| Q3 pH | 1.70 | 0.0010 ÷ 0.0500 = 0.020; −log = 1.69897 → 1.70 | Correct |
| Q3 crossed | 7.00 | (1.00 + 13.00) ÷ 2 | Correct |
| Q4 (Revision 1 data) | 0.00400, 0.00300, 0.00100 mol; 0.0182 mol/L; pOH 1.740; pH 12.260; crossed 1.740 | 2 × 0.0800 × 0.0250 = 0.00400; 0.00100 ÷ 0.0550 = 0.018182; pOH 1.74036; pH 12.25964 | Correct (but see learning S1: this repeats C07's worked example 3) |
| Q4 (proposed, learning S1): 40.0 mL of 0.0500 mol/L Ba(OH)₂ with 30.0 mL of 0.100 mol/L HCl | | n(Ba(OH)₂) = 0.00200 mol; n(OH⁻) = 0.00400 mol; n(H₃O⁺) = 0.00300 mol; excess OH⁻ 0.00100 mol (3 s.f.); V 0.0700 L; [OH⁻] = 0.014286 → 0.0143 mol/L; pOH = 1.84510 → 1.845; pH = 12.15490 → 12.155. Crossed (one OH⁻): n(OH⁻) 0.00200, excess H₃O⁺ 0.00100 mol, pH 1.845 (mirror: 1.845 + 12.155 = 14.000) | Verified |

Every reported value follows the strict rule: decimal places in pH or pOH equal the significant figures in [H₃O⁺] or [OH⁻], and logs are taken from unrounded values.

## Chemistry claims and equations

| Equation as on screen | Atoms and charge | Verdict |
| --- | --- | --- |
| HNO₃(aq) + H₂O(l) → H₃O⁺(aq) + NO₃⁻(aq) (single arrow) | balanced; 0 = 0 | OK |
| Ba(OH)₂(aq) → Ba²⁺(aq) + 2OH⁻(aq) | balanced; 0 = 0 | OK |

Other claims:

- "every molecule gives its proton to water": acceptable for a strong acid in dilute solution (the C07 wording).
- "An acid solution still has some [hydroxide], because water's own equilibrium is still there": correct.
- "The volume went up ten times, so the concentration fell ten times. One pH unit is ten times, so the pH should rise by exactly one": correct here (strong acid, exact tenfold, [H₃O⁺] far above 10⁻⁷). Key note 3 drops the condition (M1).
- "You can't mix pH values, because they're logs": correct, and the acid and base also react, which the next scene shows.
- "Hydroxide is what's left, so go through the pOH": correct.
- Neutral at 7, the side-of-7 checks and pH + pOH = 14.00 are all stated for 25 °C on the cards and the notes tag. Correct.
- The "diprotic" label for Ba(OH)₂ is avoided ("releases two hydroxide ions"). Correct.
- Q4 notes 0.0800 mol/L as inside solubility; the proposed 0.0500 mol/L is further inside.

## HSC style and originality

All four items are Section II short-answer calculations in HSC form (stem, data, a "Calculate" demand, 25 °C, "assume the volumes add"), tagged "HSC-style question, written for HSCScience", with no mark claims. The question types are standard. No item copies NESA wording that I know of, but I did not search past papers for these exact data sets. That stays with Codex (asset brief item 3).

## Findings

### S1. Should fix: the hook makes an exam-frequency claim and an absolute claim

- Exact text (scene 1): "Strong acid and base questions in the HSC don't often just hand you a concentration and ask for the pH. They dilute it, mix it with a base, or hide a two in a formula. Every one comes down to three checks."
- Problem: "don't often" is a claim about HSC papers, and the project keeps exam-frequency talk out of learner copy (the C15 check recorded its absence as correct). No source supports it. "Every one" is an absolute claim; weak-acid questions, for example, do not reduce to these three checks.
- Replacement: "A strong acid or base question can do more than hand you a concentration and ask for the pH. It can dilute it, mix it with a base, or hide a two in a formula. Each one here comes down to three checks." (200 characters against 205; the cues "dilute it, mix it with a base, or hide a two" are unchanged.)

### M1. Minor: key note 3 states "pH up by 1" without its condition

- Exact text: "Tenfold dilution of a strong acid: pH up by 1."
- Problem: the rule fails as [H₃O⁺] approaches 10⁻⁷ mol/L. A student who applies it to pH 6.5 gets the classic impossible answer, 7.5, for an acid. C07 scene 9 taught "toward seven, but never past it", so the note should keep that condition. Leaving it out would teach a wrong idea.
- Replacement: "Tenfold dilution of a strong acid: pH up by 1, while the pH stays well below 7 (an acid never passes 7)."

### M2. Minor: author notes on precision and solubility

- Add to "Doubts": "(d) pH 12.260 (Q4) treats 14.00 as exact at 25 °C. A student who carries 14.00 as two-decimal data writes 12.26 (12.15 or 12.16 for the revised data); accept both in review." With learning S1 applied: "pH 12.155 ... writes 12.15."
- Replace the solubility note in "Reference facts" with: "barium hydroxide octahydrate dissolves to about 0.18 mol/L at 15 °C and more at 25 °C (CRC); 0.0500 mol/L is well inside."

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entries C6-IQ2-02 and C6-IQ2-06 (page 53)
- CRC Handbook of Chemistry and Physics: ionisation constant of water; aqueous solubility of inorganic compounds
- Harris, Quantitative Chemical Analysis: activity and measured pH of 0.1 mol/L HCl and NaOH
- `lessons/chem-m6-c07.md` (Revision 3), for the repeated-case check

## Verdict

**Ready to voice after fixes** (S1 and learning S1 before recording; M1 and M2 are cheap and should be applied). The Codex error check and the NESA-paper search are still required.

## Resolution
