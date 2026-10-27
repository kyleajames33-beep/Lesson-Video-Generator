# Brief 108: Module 7 C13, C14, Biology G01 and G02: plates, error-only check and site log

Read `00-standing-rules.md` first. Do briefs 106 and 107 first if they are still open. G02 reuses brief 107's smoke bush and mudjala plates.

These four designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m7-c13.md`: planning an organic synthesis with a reaction map and a flow chart
- `chem-m7-c14.md`: addition polymers (PE, PVC, PS, PTFE)
- `bio-m7-g01.md`: practice on outbreak data and control (Camp Wollemi, malaria rates, cholera)
- `bio-m7-g02.md`: practice evaluating disease strategies (gene drive against bed nets, an elimination strategy, the constructed Plant W partnership). This one is held for the owner's cultural review before publication. Check facts only.

Nothing is voiced yet.

## 1. Plates

Paint every plate in the brief 82 to 107 style:
- a transparent PNG with a real alpha channel;
- ink and watercolour, with at least 10% clear margin;
- no text, numbers, logos, recycling codes, people, hands or faces.

Each design's "Codex asset brief" section is the specification.

| Design | Plates | Folder |
|---|---|---|
| C13 | none | |
| C14 | `m7-ldpe-squeeze-bottle-v1`, `m7-hdpe-crate-v1`, `m7-pvc-pipe-v1` (grey PVC water pipe), `m7-ps-foam-cup-v1`, `m7-ptfe-pan-v1`, painted as one matched set | chemistry |
| G01 | `m7-chicken-pasta-tray-v1`, `m7-chicken-sandwiches-v1`, `m7-vibrio-cholerae-v1`, `m7-village-water-tank-v1` | biology |
| G02 | `m7-neutral-leaf-v1`: **hold.** Don't paint it until the owner's cultural reviewer decides. The leaf must not be identifiable as a culturally significant species. | biology |

Write the provenance to `assets/brief108-provenance.json` and QA views to `assets/brief108-qa/`. Archive the plates and record a media checkpoint, as in earlier briefs.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata. Each design's "Numbers to verify" and "Codex error-check brief" sections list what to confirm. In particular:

- **C13:**
  - every reagent and condition on the map;
  - that hydrating propene gives mainly propan-2-ol, and that HBr adds mainly to the middle carbon;
  - the attempt 1 route (pent-1-ene against 1-chloropentane to make pentanoic acid);
  - the attempt 2 route (ethyl butanoate from ethene and butan-1-ol; butyl ethanoate as the isomer trap);
  - that neither attempt copies a NESA question or the site's L19 or L20 questions.
- **C14:**
  - the repeating units;
  - LDPE against HDPE (branching and density);
  - the polystyrene explanation;
  - PTFE: dipoles largely cancel, weak dispersion, about 260 °C use limit, melts at about 327 °C, decomposes above about 400 °C;
  - the plastic in the Garbage Patch by count (about 94% of pieces) against by mass (about 8%; fishing nets at least 46%);
  - that sunlight adds oxygen-containing groups.
- **G01:**
  - *C. perfringens*: onset 6 to 24 hours, the symptoms, and growth in meat that cools slowly;
  - all arithmetic: 16/28, 0/14, 16/60; 12 then 2 per 1,000; 2.5% then 0.3%;
  - cholera: most infections mild or without symptoms, the incubation of up to five days, and chlorination and sanitation against household quarantine.
- **G02:**
  - gene drive: only females with two copies are sterile; the large-cage collapse (Hammond 2021); resistance to the drive;
  - "As of October 2026 no gene drive mosquito has been released in the wild" (recheck and date it);
  - Target Malaria: the 2019 non-drive release, and Burkina Faso stopping the project in August 2025;
  - that the 2020 virus already spread before symptoms (about 44%), and that the variant spread faster and sooner, with leaks from quarantine hotels;
  - the constructed Plant W science.
- **All four:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question and copies no NESA question.

Write `checks/codex-check-108.md`, one section per design. For each error, give the corrected text and a source. Report errors only.

## 3. Site corrections log

Add every site error still standing in each design's Revision 2 Decisions section to `docs/production/claude-pm/site-corrections-m7.md`, in that file's format: the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged, and any marked as notes, rejected or withdrawn.
- **Chemistry:** L19 and L20 (C13, including new corrections 7 and 8), and L21 and L23 (C14).
- **Biology:**
  - L04 (G01's Camp Wollemi items).
  - L21 Sweden, logged once with all three occurrences.
  - L17 gene drive resistance, logged as an addition.

Hand in to `status.md`.
