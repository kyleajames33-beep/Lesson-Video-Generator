# Brief 107: Module 7 C11, C12, B15 and P01: plates, error-only check and site log

Read `00-standing-rules.md` first. Do brief 106 first if it is still open, because C11 reuses brief 106's `m7-litmus-blue-strip-v1`.

Four designs are at Revision 2 in `docs/production/claude-pm/lessons/`, and none is voiced yet:
- `chem-m7-c11.md`: amines and amides; organic acid against organic base.
- `chem-m7-c12.md`: soaps and detergents, emulsions, saponification, hard water.
- `bio-m7-b15.md`: Aboriginal protocols and bioprospecting (smoke bush, mudjala, spinifex). The owner will arrange a cultural review before it is published. You check facts only.
- `bio-m7-p01.md`: epidemic transmission simulation practical.

## 1. Plates

Paint every plate in the brief 82 to 106 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, with at least 10% clear margin;
- no text, numbers, people, hands or faces.

Each design's "Codex asset brief" section is the specification. Check every aligned pair with a 50% overlay.

| Design | Plates | Folder |
|---|---|---|
| C11 | `m7-fish-plate-v1` (a whole fish on a white plate) | chemistry |
| C12 | `m7-oil-water-tube-layers-v1` and `-emulsion-v1` (aligned), `m7-soap-tube-soft-v1` and `-hard-v1` (aligned; soft has a clear liquid and tall froth, hard has a cloudy liquid, scum and little froth) | chemistry |
| B15 | `m7-smokebush-conospermum-v1`, `m7-mudjala-barringtonia-v1`, `m7-spinifex-hummock-v1` | biology |
| P01 | `m7-sim-cup-clear-v1` and `m7-sim-cup-pink-v1` (aligned), `m7-trace-wellplate-clear-v1` and `-pink-v1` (aligned; the exact pink pattern from the worked example), `m7-door-handle-uv-v1` (aligned to the existing `m7-door-handle-v1.png`) | biology |

**B15 plates:** paint only the plant as it grows: habit, leaves, flowers or fruit, matched to cited botanical references. Record those references in the provenance. Show no preparation, use, objects or people.

**P01 timing:** commission P01's pink plates only after the NSW chemical safety check in section 2. If students may not use phenolphthalein, the teacher adds it. That changes nothing in the plates, but record the result.

Write the provenance to `assets/brief107-provenance.json` and the QA views to `assets/brief107-qa/`. Archive the plates and record a media checkpoint, as in the earlier briefs.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata. Each design's "Numbers to verify" and "Codex error-check brief" sections list what to confirm. In particular:

**C11**
- Boiling points: propan-1-amine 48 °C, N-methylethanamine about 37 °C, trimethylamine 3 °C, propanamide 213 °C, propanoic acid 141 °C, butan-1-amine.
- pKa and pKb values: methylamine, ammonia, ethanamide (conjugate acid about −0.5; N–H about 15).
- Pauling electronegativities of 3.44 and 3.04.
- All equations balance.

**C12**
- The naming (sodium octadecanoate).
- Saponification equation balanced.
- The detergent history (Germany in World War I and the fat shortages).
- Sodium lauryl sulfate from coconut or palm kernel oil.
- Calcium salts of detergents in very hard water.

**B15**
- NCI licensed AMRAD in 1993. AMRAD's separate contract with the WA Government paid $1.15 million at signing (WA media statement of 22 December 1993).
- Conocurvone described as "HIV-inhibitory" (it stopped HIV infecting cells).
- That no smoke bush medicine was ever approved.
- Mudjala: US patent 7,618,946 (granted 2009, now expired), with Jarlmadangah Burru Aboriginal Corporation as co-assignee.
- Mudjala: the year the partnership started (if it began before 1993, report it).
- Mudjala: that it is still not an approved medicine.
- Spinifex: the 2015 Dugalunji agreement with UQ, including the veto.
- The AIATSIS consent wording.
- Australia's Nagoya Protocol status.
- Whether John Watson is living. Report only the fact; whether to name him is for the cultural reviewer.

**P01**
- The NSW school chemical safety listing for phenolphthalein, and whether students may handle it.
- The SDS classes: H350, H341 and H361 above 0.1%.
- Whether ethanol solutions are H225 or H226.
- The chemistry: final concentration 0.0125 mol/L, pH about 11.2; the 1/8 dilution at about pH 9.9.
- The dataset and curve: new cases 1, 1, 2, 4; infected 1, 2, 4, 8.

**All four**
- Check each dotpoint word for word against the 2017 syllabus.
- Check that each question reads like a real HSC Section II question and copies no NESA question.

Write `checks/codex-check-107.md` with one section per design. Give each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

Add every site error still standing in each design's Revision 2 Decisions section to `docs/production/claude-pm/site-corrections-m7.md`. Use that file's format: the exact old text (verified in the read-only site file), the correct statement and a source.

Skip:
- any error already logged (C11's recall hook is C09's correction 1);
- items marked withdrawn or downgraded to notes, such as C11's "always wrong" and C12's correction 4.

What to log:
- **Chemistry:** L16, L17 and L18.
- **Biology:** L20 for B15 (10 errors; use the corrected licensor wording for error 3), and L04 for P01 (2 errors; error 3 is an omission note only).

Hand in to `status.md`.
