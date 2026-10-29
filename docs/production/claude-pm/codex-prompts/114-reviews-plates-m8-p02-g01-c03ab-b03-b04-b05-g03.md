# Brief 114: learning review, science check, plates and site log for 8 Module 8 designs

Read `00-standing-rules.md` and brief 109 first. Use brief 109's method and file formats: Codex writes both independent reviews and Claude resolves them. This brief can run alongside briefs 112 and 113.

The designs are at Revision 1 in `docs/production/claude-pm/lessons/`. The route is `module8-video-route-draft.json`, updated on 30 Oct with the C03 split and Biology G03.

| Design | Topic | Review file key |
|---|---|---|
| `chem-m8-p02.md` | gravimetric sulfate practical (digested against undigested precipitate) | `m8p02` |
| `chem-m8-g01.md` | Mohr and gravimetry practice; the walkthroughs are the content | `m8g01` |
| `chem-m8-c03a.md` | cation tests: flame, precipitate and complex | `m8c03a` |
| `chem-m8-c03b.md` | anion tests | `m8c03b` |
| `bio-m8-b03.md` | insulin and glucagon | `m8b03` |
| `bio-m8-b04.md` | kidney water balance (ADH, with an aldosterone contrast) | `m8b04` |
| `bio-m8-b05.md` | how plants keep enough water | `m8b05` |
| `bio-m8-g03.md` | feedback loop practice; the walkthroughs are the content | `m8g03` |

## 1. Learning review

Follow `docs/production/student-learning-review.md`, as in brief 109, and recalculate every number. Check the following:
- **P02:** can a student plan and evaluate the method? Check the aim, variables, controls, validity, reliability and accuracy language against s07, and check the risk table.
- **Length:** P02 is about 571 s, against a 570 s cap, and C03a is about 567 s. Any repair you propose must be length-neutral or name a cut. C03b is only 131 characters above the 5,500 floor.
- **Double-teaching:** check against c01, c02, b01 and b02 (Revision 2). Also check for overlap between b03's attempts and g03's glucose graph question.

Write `checks/<key>-learning-review.md` for each design.

## 2. Science check

Verify every fact, number, equation and colour, and check every dotpoint word for word against the 2017 syllabus. Write `checks/<key>-claude-science-check.md` for each design. In particular:

- **P02:**
  - the recovery figures (99.1% digested against 94.3% not) as plausible constructed data;
  - digestion (Ostwald ripening) and a cloudy filtrate;
  - NSW school rules for barium chloride.
- **C03a:**
  - every flame colour, including barium and calcium;
  - each hydroxide precipitate colour and its behaviour with excess reagent;
  - Fe²⁺ against Fe³⁺, including Fe(OH)₂ browning in air;
  - the solubility of lead chloride and calcium sulfate;
  - the flowchart logic.
- **C03b:**
  - the silver halide colours and their behaviour in ammonia, including whether AgBr dissolves only partly in concentrated ammonia;
  - acidifying with nitric acid first, never HCl, before silver nitrate;
  - the carbonate, sulfate and acetate tests;
  - **phosphate:** root kept neutral silver nitrate (yellow Ag₃PO₄). Check it, and say whether ammonium molybdate should be named.
- **B03:** insulin and glucagon targets and effects, glycogen, GLUT4, and the islet cells. Diabetes is deliberately left out (root decision, because b08 and b12 teach it).
- **B04:** ADH, osmoreceptors, the collecting duct and aquaporins; aldosterone and sodium. The aldosterone contrast scene is a root decision.
- **B05:** stomata, guard cells, xerophyte features and the leaf structures.
- **G03:** every model loop, the glucose graph data and the positive feedback distractor.

**Site links:** the standing rule is the live `.sa.html` form, with the site link first. Check the link for each of these 8, and for C01, C02, B01 and B02 (Revision 2). Report any design that uses a different form.

## 3. Plates

Use the brief 109 style, and check each aligned pair with a 50% overlay. Each design's "Codex asset brief" section is the specification; use the exact filenames it gives.

- **P02:** 3 plates.
- **C03a:** 3 tubes, matched to the existing rack set. Measure the burner offset across the flame plates before any cross-fade.
- **C03b:** 4 plates.
- **B03:** 6 plates.
- **B04:** 8 plates, plus cleaning the coloured edge fringe on the existing `m8-kidney-nephron-v1.png`. Keep its canvas and alpha box.
- **B05:** 6 plates.
- **G03:** 2 plates (the banana pair). Reuse B03's liver plate if G03 needs one.
- **G01:** none.

Organs and tissue only; no people, hands or faces. Write provenance to `assets/brief114-provenance.json` and QA views to `assets/brief114-qa/`, then archive and record a media checkpoint.

## 4. Site corrections log

Add every confirmed site error to `site-corrections-m8.md`, in that file's format. Give the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged.

B03 and G03 may both have logged the same L03 errors; log each error once.

Hand in to `status.md`, with one line per design giving its blocker and should-fix counts. No design edits, speech, renders or commits.
